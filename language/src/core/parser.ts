import {GRAMMAR, Token, TokenType, TYPE_ENUM} from "./syntax/ast_grammar.ts";
import {TokenStream} from "./syntax/tokenizer.ts";
import {throwParserError} from "./infrastructure/errors.ts";
import {Source, spanFrom} from "./syntax/source.ts";
import type {ASTParser} from "./interfaces/ast_parser.ts";
import {
	ASTAnnotationNode,
	ASTArrayNode,
	ASTAssignmentNode,
	ASTBinaryNode,
	ASTCallNode,
	ASTClassNode,
	ASTElseNode,
	ASTExpressionNode,
	ASTFieldNode,
	ASTForeachNode,
	ASTIfNode,
	ASTImportNode,
	ASTIndexNode,
	ASTInterfaceNode,
	ASTLambdaNode,
	ASTMatchCaseNode,
	ASTMatchNode,
	ASTMemberNode,
	ASTMethodNode,
	ASTNewNode,
	ASTNode,
	ASTNodeType,
	ASTOperatorNode,
	ASTParameterNode,
	ASTReturnNode,
	ASTThenNode,
	ASTTypeNode,
	ASTUnaryNode,
	ASTVariableNode,
	ASTVDomExpressionNode,
	ASTVDomNode,
	ASTVDomTextNode
} from "./syntax/ast.ts";
import {Modifiers, SuperClass} from "./model/runtime_model.ts";


export class Parser implements ASTParser {
	source: Source;
	tokenStream: TokenStream | null = null;

	constructor(source: Source) {
		this.source = source;
	}

	parse(): ASTNode {
		this.tokenStream = this.source
		                       .getTokenizer()
		                       .getTokenStream();

		return this.parseProgram();
	}

	parseProgram(): ASTNode {
		const children: ASTNode[] = [];

		while (this.peek().type !== TokenType.EOF) {
			if (this.peek().type === TokenType.COMMENT) {
				this.next();
				continue;
			}

			const node = this.parseStatement();
			if (node) {
				children.push(node);
			}
		}

		return new ASTNode(ASTNodeType.PROGRAM, children);
	}

	parseStatement(): ASTNode | null {
		if (this.consumeIfComment()) {
			return null;
		}

		switch (this.peek().value) {
			case GRAMMAR.IMPORT:
				return this.parseImport();
			case GRAMMAR.OPEN:
			case GRAMMAR.CLASS:
				return this.parseClassDeclaration();
			case GRAMMAR.INTERFACE:
				return this.parseInterfaceDeclaration();
			case GRAMMAR.RETURN:
				return this.parseReturnStatement();
			case GRAMMAR.LET:
				return this.parseVariableDeclaration();
			case GRAMMAR.IF:
				return this.parseIfDeclaration();
			case GRAMMAR.MATCH:
				return this.parseMatchDeclaration();
			case GRAMMAR.FOREACH:
				return this.parseForeachDeclaration();
			default:
				return this.parseExpressionStatement();
		}
	}

	createMixedType(): ASTTypeNode {
		return new ASTTypeNode(ASTTypeNode.KIND_SIMPLE, TYPE_ENUM.MIXED);
	}

	parseType(): ASTTypeNode {
		let type: ASTTypeNode;

		if (this.peek().value === GRAMMAR.PARENTHESES_OPEN) {
			type = this.parseLambdaType();
		} else {
			type = this.parseSimpleOrGenericType();
		}

		if (this.consumeIfOperator(GRAMMAR.QUESTION_MARK)) {
			type.nullable = true;
		}

		return type;
	}

	parseTypeParameters(): string[] {
		const parameters: string[] = [];

		this.expectOperator(GRAMMAR.LESS_THAN);

		do {
			parameters.push(this.expectIdentifier().value);

			if (this.peek().value !== GRAMMAR.COMMA) {
				break;
			}

			this.next();
		} while (true);

		this.expectOperator(GRAMMAR.GREATER_THAN);

		return parameters;
	}

	parseSimpleOrGenericType(): ASTTypeNode {
		const nameToken = this.expectIdentifier();
		const node = new ASTTypeNode(ASTTypeNode.KIND_SIMPLE, nameToken.value);

		if (this.consumeIfOperator(GRAMMAR.LESS_THAN)) {
			node.kind = ASTTypeNode.KIND_GENERIC;

			do {
				node.typeArguments.push(this.parseType());
			} while (this.consumeIfPunctuation(GRAMMAR.COMMA));

			this.expectOperator(GRAMMAR.GREATER_THAN);
		}

		return node;
	}

	parseLambdaType(): ASTTypeNode {
		const node = new ASTTypeNode(ASTTypeNode.KIND_LAMBDA, "lambda");

		this.expectPunctuation(GRAMMAR.PARENTHESES_OPEN);

		if (this.peek().value !== GRAMMAR.PARENTHESES_CLOSE) {
			do {
				node.parameterTypes.push(this.parseType());
			} while (this.consumeIfPunctuation(GRAMMAR.COMMA));
		}

		this.expectPunctuation(GRAMMAR.PARENTHESES_CLOSE);
		this.expectOperator(GRAMMAR.ARROW);

		node.returnType = this.parseType();

		return node;
	}

	parseReturnStatement(): ASTReturnNode {
		this.expectKeyword(GRAMMAR.RETURN);

		let argument: ASTNode | null = null;
		if (this.peek().value !== GRAMMAR.SEMICOLON) {
			argument = this.parseExpression();
		}

		this.expectPunctuation(GRAMMAR.SEMICOLON);

		return new ASTReturnNode(argument);
	}

	parseImport(): ASTImportNode {
		this.expectKeyword(GRAMMAR.IMPORT);

		const names: string[] = [];
		let from: string | null = null;

		if (this.peek().value === GRAMMAR.BRACE_OPEN) {
			names.push(...this.parseImportList());
			this.expectKeyword(GRAMMAR.FROM);
			from = this.expectString().value;
		} else {
			names.push(this.expectIdentifier().value);
		}

		this.expectPunctuation(GRAMMAR.SEMICOLON);

		return new ASTImportNode(names, from);
	}

	parseImportList(): string[] {
		this.expectPunctuation(GRAMMAR.BRACE_OPEN);

		const names: string[] = [];

		while (true) {
			names.push(this.expectIdentifier().value);

			if (this.consumeIfPunctuation(GRAMMAR.COMMA)) {
				continue;
			}

			break;
		}

		this.expectPunctuation(GRAMMAR.BRACE_CLOSE);

		return names;
	}

	parseClassDeclaration(): ASTClassNode {
		const annotations = this.parseAnnotations();
		const modifiers = this.parseModifiers([GRAMMAR.OPEN]);

		const classToken = this.expectKeyword(GRAMMAR.CLASS);
		const nameToken = this.expectIdentifier();

		let typeParameters: string[] = [];
		if (this.peek().value === GRAMMAR.LESS_THAN) {
			typeParameters = this.parseTypeParameters();
		}

		let superClass: SuperClass | null = null;
		if (this.consumeIfKeyword(GRAMMAR.EXTENDS)) {
			superClass = new SuperClass(ASTNodeType.IDENTIFIER, this.expectIdentifier().value);
		}

		const implementsInterfaces: ASTTypeNode[] = [];
		if (this.peek().value === GRAMMAR.IMPLEMENTS) {
			this.next();

			do {
				implementsInterfaces.push(this.parseType());
			} while (this.consumeIfPunctuation(GRAMMAR.COMMA));
		}

		this.expectPunctuation(GRAMMAR.BRACE_OPEN);

		const children: ASTNode[] = [];
		while (this.peek().value !== GRAMMAR.BRACE_CLOSE) {
			if (this.peek().type === TokenType.COMMENT) {
				this.next();
				continue;
			}

			const member = this.parseClassMember();
			if (member) {
				children.push(member);
			}
		}

		const braceCloseToken = this.expectPunctuation(GRAMMAR.BRACE_CLOSE);

		const node = new ASTClassNode(
			nameToken.value,
			annotations,
			modifiers,
			typeParameters,
			implementsInterfaces,
			superClass,
			children
		);

		node.span = spanFrom(classToken, braceCloseToken);
		return node;
	}

	parseInterfaceDeclaration(): ASTInterfaceNode {
		const annotations = this.parseAnnotations();
		const modifiers = this.parseModifiers([]);

		const interfaceToken = this.expectKeyword(GRAMMAR.INTERFACE);
		const nameToken = this.expectIdentifier();

		let typeParameters: string[] = [];
		if (this.peek().value === GRAMMAR.LESS_THAN) {
			typeParameters = this.parseTypeParameters();
		}

		const extendsInterfaces: string[] = [];
		if (this.consumeIfKeyword(GRAMMAR.EXTENDS)) {
			do {
				extendsInterfaces.push(this.expectIdentifier().value);
			} while (this.consumeIfPunctuation(GRAMMAR.COMMA));
		}

		this.expectPunctuation(GRAMMAR.BRACE_OPEN);

		const children: ASTNode[] = [];
		while (this.peek().value !== GRAMMAR.BRACE_CLOSE) {
			if (this.consumeIfComment()) {
				continue;
			}

			const member = this.parseClassMember();
			if (member === null) {
				continue;
			}

			if (member instanceof ASTFieldNode && !member.modifiers.static) {
				throwParserError("Interface fields must be static.");
			}

			if (member instanceof ASTMethodNode && member.children.length > 0) {
				throwParserError("Interface methods must not have a body.");
			}

			children.push(member);
		}

		const braceCloseToken = this.expectPunctuation(GRAMMAR.BRACE_CLOSE);

		const node = new ASTInterfaceNode(
			nameToken.value,
			annotations,
			modifiers,
			typeParameters,
			extendsInterfaces,
			children
		);

		node.span = spanFrom(interfaceToken, braceCloseToken);
		return node;
	}

	parseAnnotations(): ASTAnnotationNode[] {
		const annotations: ASTAnnotationNode[] = [];

		while (this.peek().type === TokenType.ANNOTATION) {
			annotations.push(this.parseAnnotation());
		}

		return annotations;
	}

	parseAnnotation(): ASTAnnotationNode {
		const token = this.expectAnnotation();
		const node = new ASTAnnotationNode(token.value);

		if (this.consumeIfPunctuation(GRAMMAR.PARENTHESES_OPEN)) {
			while (this.peek().value !== GRAMMAR.PARENTHESES_CLOSE) {
				const key = this.expectIdentifier().value;
				this.expectOperator(GRAMMAR.ASSIGN);

				node.properties.set(key, this.parseExpression());

				if (this.peek().value === GRAMMAR.COMMA) {
					this.next();
				}
			}

			this.expectPunctuation(GRAMMAR.PARENTHESES_CLOSE);
		}

		return node;
	}

	parseModifiers(allowed: string[]): Modifiers {
		const modifiers: {[index: string]: boolean} = {};

		allowed.forEach((modifier: string): boolean => modifiers[modifier] = false);

		while (this.peek().type === TokenType.KEYWORD && allowed.includes(this.peek().value)) {
			const modifier = this.next().value;

			if (modifiers[modifier]) {
				throwParserError(`Duplicate modifier: ${modifier}`);
			}

			modifiers[modifier] = true;
		}

		return new Modifiers(modifiers);
	}

	parseParameters(): ASTParameterNode[] {
		const parameters: ASTParameterNode[] = [];

		if (this.peek().value === GRAMMAR.PARENTHESES_CLOSE) {
			return parameters;
		}

		do {
			const nameToken = this.expectIdentifier();
			let type: ASTTypeNode | null = null;
			let defaultValue: ASTNode | null = null;

			let typeToken: Token | null = null;
			let defaultValueToken: Token | null = null;

			if (this.peek().value === GRAMMAR.COLON) {
				typeToken = this.next();
				type = this.parseType();
			}

			if (this.peek().value === GRAMMAR.ASSIGN) {
				defaultValueToken = this.next();
				defaultValue = this.parseExpression();
			}

			const node = new ASTParameterNode(nameToken.value, type, defaultValue);
			node.span = spanFrom(typeToken || nameToken, defaultValueToken || nameToken);
			parameters.push(node);
		} while (this.consumeIfPunctuation(GRAMMAR.COMMA));

		return parameters;
	}

	parseBlock(): ASTNode[] {
		if (this.peek().value === GRAMMAR.SEMICOLON) {
			this.next();
			return [];
		}

		this.expectPunctuation(GRAMMAR.BRACE_OPEN);

		const children: ASTNode[] = [];
		while (this.peek().value !== GRAMMAR.BRACE_CLOSE) {
			if (this.peek().type === TokenType.COMMENT) {
				this.next();
				continue;
			}

			const child = this.parseStatement();
			if (child) {
				children.push(child);
			}
		}

		this.expectPunctuation(GRAMMAR.BRACE_CLOSE);

		return children;
	}

	parseVariableDeclaration(): ASTVariableNode {
		const letToken = this.expectKeyword(GRAMMAR.LET);
		const nameToken = this.expectIdentifier();

		let typeAnnotation: ASTTypeNode | null = null;
		if (this.consumeIfPunctuation(GRAMMAR.COLON)) {
			typeAnnotation = this.parseType();
		}

		let init: ASTNode | null = null;
		if (this.peek().value === GRAMMAR.ASSIGN) {
			this.expectOperator(GRAMMAR.ASSIGN);
			init = this.parseExpression();
		}

		const semicolonToken = this.expectPunctuation(GRAMMAR.SEMICOLON);

		const node = new ASTVariableNode(nameToken.value, typeAnnotation, init);
		node.span = spanFrom(letToken, semicolonToken);

		return node;
	}

	parseIfDeclaration(): ASTIfNode {
		const startToken = this.expectKeyword(GRAMMAR.IF);

		this.expectPunctuation(GRAMMAR.PARENTHESES_OPEN);
		const condition = this.parseExpression();
		const parenthesesCloseToken = this.expectPunctuation(GRAMMAR.PARENTHESES_CLOSE);

		const node = new ASTIfNode(condition, new ASTThenNode(this.parseBlock()));

		if (this.consumeIfKeyword(GRAMMAR.ELSE)) {
			if (this.peek().value === GRAMMAR.IF) {
				node.else = this.parseIfDeclaration();
			} else {
				node.else = new ASTElseNode(this.parseBlock());
			}
		}

		node.span = spanFrom(startToken, parenthesesCloseToken);
		return node;
	}

	parseMatchDeclaration(): ASTMatchNode {
		const startToken = this.expectKeyword(GRAMMAR.MATCH);
		this.expectPunctuation(GRAMMAR.PARENTHESES_OPEN);

		const expression = this.parseExpression();

		this.expectPunctuation(GRAMMAR.PARENTHESES_CLOSE);
		this.expectPunctuation(GRAMMAR.BRACE_OPEN);

		const matchCases: ASTMatchCaseNode[] = [];
		let defaultCase: ASTMatchCaseNode | null = null;

		while (this.peek().value !== GRAMMAR.BRACE_CLOSE) {
			const matchCase = this.parseMatchCaseDeclaration();
			if (matchCase.test === null) {
				defaultCase = matchCase;
				continue;
			}

			matchCases.push(matchCase);
		}

		const braceCloseToken = this.expectPunctuation(GRAMMAR.BRACE_CLOSE);

		const node = new ASTMatchNode(expression, matchCases, defaultCase);
		node.span = spanFrom(startToken, braceCloseToken);

		return node;
	}

	parseMatchCaseDeclaration(): ASTMatchCaseNode {
		const caseNode = new ASTMatchCaseNode();

		if (this.consumeIfKeyword(GRAMMAR.DEFAULT)) {
			caseNode.test = null;
		} else {
			caseNode.test = this.parseExpression();
		}

		this.expectPunctuation(GRAMMAR.COLON);

		if (this.peek().value === GRAMMAR.BRACE_OPEN) {
			caseNode.children = this.parseBlock();
		} else {
			const child = this.parseStatement();
			if (child) {
				caseNode.children.push(child);
			}
		}

		return caseNode;
	}

	parseForeachDeclaration(): ASTForeachNode {
		const startToken = this.expectKeyword(GRAMMAR.FOREACH);

		this.expectPunctuation(GRAMMAR.PARENTHESES_OPEN);

		const iterator = this.expectIdentifier().value;

		this.expectKeyword(GRAMMAR.IN);

		const iterable = this.parseExpression();

		const parenthesesCloseToken = this.expectPunctuation(GRAMMAR.PARENTHESES_CLOSE);

		const node = new ASTForeachNode(iterator, iterable, this.parseBlock());
		node.span = spanFrom(startToken, parenthesesCloseToken);

		return node;
	}

	parseExpressionStatement(): ASTExpressionNode {
		const expr = this.parseExpression();

		this.expectPunctuation(GRAMMAR.SEMICOLON);

		return new ASTExpressionNode(expr);
	}

	parseExpression(precedence: number = 0): ASTNode {
		let expr = this.parsePostfix(this.parseUnary());

		while (true) {
			const token = this.peek();
			const tokenPrecedence = this.lookupPrecedence(token);

			if (tokenPrecedence < precedence) {
				break;
			}

			if (token.value === GRAMMAR.ASSIGN) {
				this.next();
				expr = new ASTAssignmentNode(expr, this.parseExpression(tokenPrecedence));
				continue;
			}

			if (GRAMMAR.MATH_OPERATORS.includes(token.value)
			    || GRAMMAR.LOGIC_OPERATORS.includes(token.value)) {
				const startToken = this.next();
				const right = this.parseExpression(tokenPrecedence + 1);
				const endToken = this.peek();

				const node = new ASTBinaryNode(expr, right, token.value);
				node.span = spanFrom(startToken, endToken);
				expr = node;
				continue;
			}

			break;
		}

		return expr;
	}

	parseVDomExpression(): ASTVDomNode {
		this.expectKeyword(GRAMMAR.VDOM);
		return this.parseVDomElement();
	}

	parseVDomElement(): ASTVDomNode {
		this.consumeIfText();

		const startToken = this.expectOperator(GRAMMAR.LESS_THAN);
		const tag = this.expectIdentifier().value;

		this.consumeIfText();

		const props = new Map<string, ASTNode>();
		while (true) {
			if (this.peekIs(GRAMMAR.GREATER_THAN) || this.peekIs(GRAMMAR.XML_CLOSE_TAG)) {
				break;
			}

			const nameToken = this.expectIdentifier();
			this.expectOperator(GRAMMAR.ASSIGN);

			let value: ASTNode;

			if (this.peekIs(GRAMMAR.BRACE_OPEN)) {
				if (this.looksLikeLambda()) {
					value = this.parseLambda();
				} else {
					this.next();
					value = this.parseExpression();
					this.expectPunctuation(GRAMMAR.BRACE_CLOSE);
				}
			} else {
				value = this.parsePrimary();
			}

			props.set(nameToken.value, value);

			this.consumeIfText();
		}

		if (this.peekIs(GRAMMAR.XML_CLOSE_TAG)) {
			this.next();

			const node = new ASTVDomNode(tag, props, []);
			node.span = spanFrom(startToken, this.peek());
			return node;
		}

		this.expectOperator(GRAMMAR.GREATER_THAN);

		const children: ASTNode[] = [];
		while (!this.peekIs(GRAMMAR.XML_OPEN_CLOSE_TAG)) {
			if (this.peek().value === GRAMMAR.LESS_THAN) {
				children.push(this.parseVDomElement());
				continue;
			}

			children.push(this.parseVDomText());
		}

		this.expectOperator(GRAMMAR.XML_OPEN_CLOSE_TAG);
		this.expectIdentifier();
		this.expectOperator(GRAMMAR.GREATER_THAN);

		const node = new ASTVDomNode(tag, props, children);
		node.span = spanFrom(startToken, this.peek());
		return node;
	}

	parseVDomText(): ASTVDomTextNode | ASTVDomExpressionNode {
		if (this.consumeIfPunctuation(GRAMMAR.BRACE_OPEN)) {
			const expression = this.parseExpression();
			this.expectPunctuation(GRAMMAR.BRACE_CLOSE);
			return new ASTVDomExpressionNode(expression);
		}

		const token = this.expectOneOf([
			TokenType.IDENTIFIER,
			TokenType.OPERATOR,
			TokenType.KEYWORD,
			TokenType.PUNCTUATION,
			TokenType.NUMBER,
			TokenType.TEXT
		]);
		const node = new ASTVDomTextNode(token.value);
		node.span = spanFrom(token, token);
		return node;
	}

	parseArguments(): ASTNode[] {
		const args: ASTNode[] = [];

		if (this.consumeIfPunctuation(GRAMMAR.PARENTHESES_CLOSE)) {
			return args;
		}

		args.push(this.parseExpression());

		while (this.consumeIfPunctuation(GRAMMAR.COMMA)) {
			args.push(this.parseExpression());
		}

		this.expectPunctuation(GRAMMAR.PARENTHESES_CLOSE);
		return args;
	}

	parseUnary(): ASTNode | ASTUnaryNode {
		const token = this.peek();

		if (token.type === TokenType.KEYWORD && token.value === GRAMMAR.VDOM) {
			return this.parseVDomExpression();
		}

		switch (token.value) {
			case GRAMMAR.EXCLAMATION_MARK:
			case GRAMMAR.MINUS:
			case GRAMMAR.PLUS:
				this.next();
				return new ASTUnaryNode(token.value, this.parseUnary());
			default:
				return this.parsePrimary();
		}
	}

	parsePrimary(): ASTNode {
		if (this.looksLikeLambda()) {
			return this.parseLambda();
		}

		const token = this.next();

		if (token.value === GRAMMAR.BRACKET_SQUARE_OPEN) {
			this.rewind();
			return this.parseArray();
		}

		if (token.type === TokenType.NUMBER) {
			const node = new ASTNode(ASTNodeType.NUMBER);
			node.value = token.value;
			return node;
		}

		if (token.type === TokenType.STRING) {
			const node = new ASTNode(ASTNodeType.STRING);
			node.value = token.value;
			return node;
		}

		if (token.type === TokenType.BOOLEAN) {
			const node = new ASTNode(ASTNodeType.BOOLEAN);
			node.value = token.value;
			return node;
		}

		if (token.type === TokenType.IDENTIFIER) {
			const node = new ASTNode(ASTNodeType.IDENTIFIER);
			node.name = token.value;
			return node;
		}

		if (token.value === GRAMMAR.NULL) {
			const node = new ASTNode(ASTNodeType.NULL);
			node.value = token.value;
			return node;
		}

		if (token.value === GRAMMAR.THIS) {
			const node = new ASTNode(ASTNodeType.THIS);
			node.name = token.value;
			return node;
		}

		if (token.value === GRAMMAR.NEW) {
			const typeAnnotation = this.parseType();

			this.expectPunctuation(GRAMMAR.PARENTHESES_OPEN);

			return new ASTNewNode(this.parseArguments(), typeAnnotation);
		}

		if (token.value === GRAMMAR.PARENTHESES_OPEN) {
			const expr = this.parseExpression();
			this.expectPunctuation(GRAMMAR.PARENTHESES_CLOSE);
			return expr;
		}

		throwParserError(`Unexpected token: ${token.type} ${token.value}`);
	}

	parsePostfix(expr: ASTNode | null): ASTNode {
		if (expr === null) {
			throwParserError(`Expected expression, got null.`);
		}

		while (true) {
			const token = this.peek();

			if (token.value === GRAMMAR.PARENTHESES_OPEN) {
				this.next();
				expr = new ASTCallNode(expr, this.parseArguments());
				continue;
			}

			if (token.value === GRAMMAR.DOT) {
				this.next();
				expr = new ASTMemberNode(expr, this.expectIdentifier().value);
				continue;
			}

			if (token.value === GRAMMAR.BRACKET_SQUARE_OPEN) {
				this.next();

				const index = this.parseExpression();

				this.expectPunctuation(GRAMMAR.BRACKET_SQUARE_CLOSE);

				expr = new ASTIndexNode(expr, index);
				continue;
			}

			break;
		}

		return expr;
	}

	parseArray(): ASTArrayNode {
		const startToken = this.expectPunctuation(GRAMMAR.BRACKET_SQUARE_OPEN);

		const node = new ASTArrayNode();

		if (this.peek().value !== GRAMMAR.BRACKET_SQUARE_CLOSE) {
			do {
				node.elements.push(this.parseExpression());
			} while (this.consumeIfPunctuation(GRAMMAR.COMMA));
		}

		const bracketSquareCloseToken = this.expectPunctuation(GRAMMAR.BRACKET_SQUARE_CLOSE);

		node.span = spanFrom(startToken, bracketSquareCloseToken);

		return node;
	}

	parseLambda(): ASTLambdaNode {
		const startToken = this.expectPunctuation(GRAMMAR.BRACE_OPEN);

		const parameters: ASTParameterNode[] = [];
		while (this.peek().value !== GRAMMAR.ARROW) {
			const name = this.expectIdentifier().value;
			let type: ASTTypeNode | null = null;
			let defaultValue: ASTNode | null = null;

			if (this.consumeIfPunctuation(GRAMMAR.COLON)) {
				type = this.parseType();
			}

			if (this.peek().value === GRAMMAR.ASSIGN) {
				this.next();
				defaultValue = this.parseExpression();
			}

			parameters.push(new ASTParameterNode(name, type, defaultValue));

			this.consumeIfPunctuation(GRAMMAR.COMMA);
		}

		this.expectOperator(GRAMMAR.ARROW);

		let returnType: ASTTypeNode = this.createMixedType();
		if (this.peek().type === TokenType.IDENTIFIER) {
			returnType = this.parseType();
			if (this.peek().value === GRAMMAR.COLON) {
				this.next();
			} else {
				returnType = this.createMixedType();
				this.rewind();
			}
		}

		const children: ASTNode[] = [];
		if (this.peek().value === GRAMMAR.BRACE_OPEN) {
			children.push(...this.parseBlock());
		} else {
			children.push(this.parseExpression());
		}

		const braceCloseToken = this.expectPunctuation(GRAMMAR.BRACE_CLOSE);

		const node = new ASTLambdaNode(parameters, returnType, children);
		node.span = spanFrom(startToken, braceCloseToken);

		return node;
	}

	looksLikeLambda(): boolean {
		const start = this.position();

		if (this.peek().value !== GRAMMAR.BRACE_OPEN) {
			return false;
		}

		this.next();

		while (this.peek().type === TokenType.IDENTIFIER) {
			this.next();
			if (this.consumeIfPunctuation(GRAMMAR.COLON)) {
				this.next();
			}
			if (!this.consumeIfPunctuation(GRAMMAR.COMMA)) {
				break;
			}
		}

		const isLambda = this.peek().value === GRAMMAR.ARROW;
		this.seekAt(start);
		return isLambda;
	}

	lookupPrecedence(token: Token): number {
		switch (token.value) {
			case GRAMMAR.DOT:
				return 100;
			case GRAMMAR.PARENTHESES_OPEN:
				return 90;
			case GRAMMAR.MULTIPLY:
			case GRAMMAR.DIVIDE:
			case GRAMMAR.MODULUS:
				return 60;
			case GRAMMAR.PLUS:
			case GRAMMAR.MINUS:
				return 50;
			case GRAMMAR.LESS_THAN:
			case GRAMMAR.GREATER_THAN:
			case GRAMMAR.LESS_EQUAL:
			case GRAMMAR.GREATER_EQUAL:
				return 40;
			case GRAMMAR.EQUAL:
			case GRAMMAR.NOT_EQUAL:
				return 30;
			case GRAMMAR.AND:
				return 20;
			case GRAMMAR.OR:
				return 10;
			case GRAMMAR.ASSIGN:
				return 5;
			default:
				return 0;
		}
	}

	private parseClassMember(): ASTNode | null {
		const startToken = this.peek();

		const annotations = this.parseAnnotations();
		const modifiers = this.parseModifiers([
			GRAMMAR.PUBLIC,
			GRAMMAR.PRIVATE,
			GRAMMAR.STATIC,
			GRAMMAR.READONLY
		]);

		if (this.peekIs(GRAMMAR.OPERATOR)) {
			return this.parseOperatorMember(startToken, annotations, modifiers);
		}

		const nameToken = this.expectOneOf([TokenType.IDENTIFIER, TokenType.KEYWORD]);

		let fieldType: ASTTypeNode | null = null;
		if (this.peek().value === GRAMMAR.COLON && this.consumeIfPunctuation(GRAMMAR.COLON)) {
			fieldType = this.parseType();
		}

		let init: ASTNode | null = null;
		if (this.consumeIfOperator(GRAMMAR.ASSIGN)) {
			init = this.parseExpression();
		}

		if (this.peek().value === GRAMMAR.SEMICOLON) {
			if (!modifiers.public && !modifiers.private) {
				modifiers.private = true;
			}

			const semicolonToken = this.expectPunctuation(GRAMMAR.SEMICOLON);

			const node = new ASTFieldNode(nameToken.value, modifiers, fieldType, init);
			node.span = spanFrom(startToken, semicolonToken);
			return node;
		}

		let typeParameters: string[] = [];
		if (this.peek().value === GRAMMAR.LESS_THAN) {
			typeParameters = this.parseTypeParameters();
		}

		if (this.peek().value === GRAMMAR.PARENTHESES_OPEN) {
			if (!modifiers.public && !modifiers.private) {
				modifiers.public = true;
			}

			this.expectPunctuation(GRAMMAR.PARENTHESES_OPEN);
			const parameters = this.parseParameters();
			const parenthesesCloseToken = this.expectPunctuation(GRAMMAR.PARENTHESES_CLOSE);

			let returnType: ASTTypeNode | null = null;
			if (this.consumeIfPunctuation(GRAMMAR.COLON)) {
				returnType = this.parseType();
			}

			const children = this.parseBlock();

			const node = new ASTMethodNode(
				nameToken.value,
				nameToken.value === GRAMMAR.CONSTRUCTOR ? ASTNodeType.CONSTRUCTOR : ASTNodeType.METHOD,
				annotations,
				modifiers,
				typeParameters,
				parameters,
				returnType,
				children
			);

			node.span = spanFrom(startToken, parenthesesCloseToken);

			return node;
		}

		throwParserError(`Invalid class member: ${nameToken.value}`);
	}

	private parseOperatorMember(
		startToken: Token,
		annotations: ASTAnnotationNode[],
		modifiers: Modifiers
	): ASTOperatorNode {
		this.expectKeyword(GRAMMAR.OPERATOR);

		let operatorToken: Token;
		try {
			operatorToken = this.expectOperator();
		} catch {
			this.rewind();
			this.expectIdentifier("u");
			operatorToken = this.expectOperator();
			operatorToken.value = "u" + operatorToken.value;
		}

		if (!modifiers.public && !modifiers.private) {
			modifiers.public = true;
		}

		this.expectPunctuation(GRAMMAR.PARENTHESES_OPEN);
		const parameters = this.parseParameters();
		this.expectPunctuation(GRAMMAR.PARENTHESES_CLOSE);

		let returnType: ASTTypeNode | null = null;
		if (this.consumeIfPunctuation(GRAMMAR.COLON)) {
			returnType = this.parseType();
		}

		const children = this.parseBlock();

		const node = new ASTOperatorNode(
			operatorToken.value,
			annotations,
			modifiers,
			[],
			parameters,
			returnType,
			children
		);

		node.span = spanFrom(startToken, operatorToken);

		if (!ASTOperatorNode.OVERLOADABLE_OPERATORS.includes(node.operator)) {
			throwParserError(`Operator ${node.operator} is not overloadable.`, node.span);
		}

		return node;
	}

	stream(): TokenStream {
		if (!this.tokenStream) {
			throwParserError('Parser has not been parsed yet.');
		}

		return this.tokenStream;
	}

	expect(tokenType: string, keyword: string | null = null): Token {
		const token: Token | null = this
			.stream()
			.next();

		if (!token) {
			throwParserError(`Unexpected end of file. Expected ${tokenType}${keyword ? ' ' + keyword : ''}`);
		}

		if (token.type !== tokenType || (keyword && token.value !== keyword)) {
			throwParserError(`Expected ${tokenType}${keyword ? ' ' + keyword : ''}, got ${token.type} ${token.value}`);
		}

		return token;
	}

	expectOperator(keyword: string | null = null): Token {
		return this.expect(TokenType.OPERATOR, keyword);
	}

	expectAnnotation(): Token {
		return this.expect(TokenType.ANNOTATION);
	}

	expectIdentifier(keyword: string | null = null): Token {
		return this.expect(TokenType.IDENTIFIER, keyword);
	}

	expectKeyword(keyword: string | null = null): Token {
		return this.expect(TokenType.KEYWORD, keyword);
	}

	expectString(): Token {
		return this.expect(TokenType.STRING);
	}

	expectText(): Token {
		return this.expect(TokenType.TEXT);
	}

	expectPunctuation(keyword: string | null = null): Token {
		return this.expect(TokenType.PUNCTUATION, keyword);
	}

	expectOneOf(tokenTypes: string[], keywords: string | null = null): Token {
		const token = this
			.stream()
			.next();

		if (!token) {
			throwParserError(`Unexpected end of file. Expected one of types ${tokenTypes}, got null.`);
		}

		if (!tokenTypes.includes(token.type)) {
			throwParserError(`Expected one of types ${tokenTypes}, got ${token.type}`);
		}

		if (keywords && !keywords.includes(token.value)) {
			throwParserError(`Expected one of values ${keywords}, got ${token.value}`);
		}

		return token;
	}

	consumeIf(tokenType: string, keyword: string | null = null): boolean {
		const token = this.peek();

		if (token.type === tokenType && (keyword && token.value.trim() === keyword)) {
			this.next();
			return true;
		}

		return false;
	}

	consumeIfPunctuation(value: string): boolean {
		return this.consumeIf(TokenType.PUNCTUATION, value);
	}

	consumeIfOperator(value: string): boolean {
		return this.consumeIf(TokenType.OPERATOR, value);
	}

	consumeIfComment(): boolean {
		return this.consumeIf(TokenType.COMMENT);
	}

	consumeIfKeyword(keyword: string): boolean {
		return this.consumeIf(TokenType.KEYWORD, keyword);
	}

	consumeIfText(): boolean {
		if (this.peek().type === TokenType.TEXT && this.peekIs('')) {
			this.next();

			return true;
		}

		return false;
	}

	peek(): Token {
		const token = this
			.stream()
			.peek();

		if (token === null) {
			throwParserError('Unexpected end of file. Expected token, got null.');
		}

		return token;
	}

	peekIs(keyword: string): boolean {
		return this.peek()
		           .value
		           .trim() === keyword;
	}

	next(): Token {
		const token = this
			.stream()
			.next();

		if (token === null) {
			throwParserError('Unexpected end of file. Expected token, got null.');
		}

		return token;
	}

	rewind(): void {
		this.stream()
		    .rewind();
	}

	position(): number {
		return this.stream().index;
	}

	seekAt(position: number): void {
		this.stream().index = position;
	}
}




