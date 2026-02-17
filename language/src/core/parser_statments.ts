import {Parser} from "./parser";
import {GRAMMAR, Token, TokenType, TYPE_ENUM} from "./grammar";
import {Modifiers, SuperClass} from "./interpreter_objects";
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
	ASTParameterNode,
	ASTReturnNode,
	ASTThenNode,
	ASTTypeNode,
	ASTUnaryNode,
	ASTVariableNode,
	ASTVDomNode,
	ASTVDomTextNode
} from "./ast";
import {throwParserError} from "./errors";
import {spanFrom} from "./parser_source";

export function createMixedType(): ASTTypeNode {
	return new ASTTypeNode(ASTTypeNode.KIND_SIMPLE, TYPE_ENUM.MIXED);
}

export function parseType(parser: Parser): ASTTypeNode {
	let type;

	if (parser.peek().value === GRAMMAR.PARENTHESES_OPEN) {
		type = parseLambdaType(parser);
	} else {
		type = parseSimpleOrGenericType(parser);
	}

	if (parser.consumeIfOperator(GRAMMAR.QUESTION_MARK)) {
		type.nullable = true;
	}

	return type;
}

export function parseTypeParameters(parser: Parser): string[] {
	const parameters = [];

	parser.expectOperator(GRAMMAR.LESS_THAN);

	do {
		const name = parser.expectIdentifier().value;
		parameters.push(name);

		if (parser.peek().value !== GRAMMAR.COMMA) {
			break;
		}
		parser.next();
	} while (true);

	parser.expectOperator(GRAMMAR.GREATER_THAN);

	return parameters;
}

export function parseSimpleOrGenericType(parser: Parser): ASTTypeNode {
	const nameToken = parser.expectIdentifier();
	const node = new ASTTypeNode(ASTTypeNode.KIND_SIMPLE, nameToken.value);

	if (parser.consumeIfOperator(GRAMMAR.LESS_THAN)) {

		node.kind = ASTTypeNode.KIND_GENERIC;

		do {
			node.typeArguments.push(parseType(parser));
		} while (parser.consumeIfPunctuation(GRAMMAR.COMMA));

		parser.expectOperator(GRAMMAR.GREATER_THAN);
	}

	return node;
}

export function parseLambdaType(parser: Parser): ASTTypeNode {
	const node = new ASTTypeNode(ASTTypeNode.KIND_LAMBDA, 'lambda');

	parser.expectPunctuation(GRAMMAR.PARENTHESES_OPEN);

	if (parser.peek().value !== GRAMMAR.PARENTHESES_CLOSE) {
		do {
			node.parameterTypes.push(parseType(parser));
		} while (parser.consumeIfPunctuation(GRAMMAR.COMMA));
	}

	parser.expectPunctuation(GRAMMAR.PARENTHESES_CLOSE);
	parser.expectOperator(GRAMMAR.ARROW);

	node.returnType = parseType(parser);

	return node;
}

export function parseProgram(parser: Parser): ASTNode {
	const children: ASTNode[] = [];
	while (parser.peek().type !== TokenType.EOF) {
		if (parser.peek().type === TokenType.COMMENT) {
			parser.next();
		} else {
			const node: ASTNode | null = parseStatement(parser);
			if (node) {
				children.push(node);
			}
		}
	}
	return new ASTNode(ASTNodeType.PROGRAMM, children);
}

export function parseStatement(parser: Parser): ASTNode | null {
	if (parser.consumeIfComment()) {
		return null;
	}

	switch (parser.peek().value) {
		case GRAMMAR.IMPORT: {
			return parseImport(parser);
		}
		case GRAMMAR.OPEN:
		case GRAMMAR.CLASS: {
			return parseClassDeclaration(parser);
		}
		case GRAMMAR.INTERFACE: {
			return parseInterfaceDeclaration(parser);
		}
		case GRAMMAR.RETURN: {
			return parseReturnStatement(parser);
		}
		case GRAMMAR.LET: {
			return parseVariableDeclaration(parser);
		}
		case GRAMMAR.IF: {
			return parseIfDeclaration(parser);
		}
		case GRAMMAR.MATCH: {
			return parseMatchDeclaration(parser);
		}
		case GRAMMAR.FOREACH: {
			return parseForeachDeclaration(parser);
		}
		default: {
			return parseExpressionStatement(parser);
		}
	}
}

export function parseReturnStatement(parser: Parser): ASTReturnNode {
	parser.expectKeyword(GRAMMAR.RETURN);

	let argument = null;
	if (parser.peek().value !== GRAMMAR.SEMICOLON) {
		argument = parseExpression(parser);
	}

	parser.expectPunctuation(GRAMMAR.SEMICOLON);

	return new ASTReturnNode(argument);
}

export function parseImport(parser: Parser): ASTImportNode {
	parser.expectKeyword(GRAMMAR.IMPORT);

	let names = [];
	let from = null;
	if (parser.peek().value === GRAMMAR.BRACE_OPEN) {
		names = parseImportList(parser);
		parser.expectKeyword(GRAMMAR.FROM);
		from = parser.expectString().value;
	} else {
		names.push(parser.expectIdentifier().value);
	}

	parser.expectPunctuation(GRAMMAR.SEMICOLON);

	return new ASTImportNode(names, from);
}

export function parseImportList(parser: Parser): string[] {
	parser.expectPunctuation(GRAMMAR.BRACE_OPEN);

	const names: string[] = [];

	while (true) {
		const nameToken = parser.expectIdentifier();

		names.push(nameToken.value);

		if (parser.consumeIfPunctuation(GRAMMAR.COMMA)) {
			continue;
		}

		break;
	}

	parser.expectPunctuation(GRAMMAR.BRACE_CLOSE);

	return names;
}

export function parseClassDeclaration(parser: Parser): ASTClassNode {
	const annotations = parseAnnotations(parser);
	const modifiers = parseModifiers(parser, [GRAMMAR.OPEN]);

	const classToken = parser.expectKeyword(GRAMMAR.CLASS);
	const nameToken = parser.expectIdentifier();

	let typeParameters: string[] = [];
	if (parser.peek().value === GRAMMAR.LESS_THAN) {
		typeParameters = parseTypeParameters(parser);
	}

	let superClass = null;
	if (parser.consumeIfKeyword(GRAMMAR.EXTENDS)) {
		superClass = new SuperClass(
			ASTNodeType.IDENTIFIER,
			parser.expectIdentifier().value
		);
	}

	let implementsInterfaces = [];
	if (parser.peek().value === GRAMMAR.IMPLEMENTS) {
		parser.next();

		do {
			const interfaceType = parseType(parser);
			implementsInterfaces.push(interfaceType);
		} while (parser.consumeIfPunctuation(GRAMMAR.COMMA));
	}

	parser.expectPunctuation(GRAMMAR.BRACE_OPEN);

	const children: ASTNode[] = [];
	while (parser.peek().value !== GRAMMAR.BRACE_CLOSE) {
		if (parser.peek().type === TokenType.COMMENT) {
			parser.next();
			continue;
		}

		const member: ASTNode | null = parseClassMember(parser);
		if (member === null) {
			continue;
		}
		children.push(member);
	}

	const braceCloseToken = parser.expectPunctuation(GRAMMAR.BRACE_CLOSE);

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

export function parseInterfaceDeclaration(parser: Parser): ASTInterfaceNode {
	const annotations = parseAnnotations(parser);
	const modifiers = parseModifiers(parser, []); // interfaces sind implizit public

	const interfaceToken = parser.expectKeyword(GRAMMAR.INTERFACE);
	const nameToken = parser.expectIdentifier();

	let typeParameters: string[] = [];
	if (parser.peek().value === GRAMMAR.LESS_THAN) {
		typeParameters = parseTypeParameters(parser);
	}

	let extendsInterfaces = [];
	if (parser.consumeIfKeyword(GRAMMAR.EXTENDS)) {
		do {
			extendsInterfaces.push(parser.expectIdentifier().value);
		} while (parser.consumeIfPunctuation(GRAMMAR.COMMA));
	}

	parser.expectPunctuation(GRAMMAR.BRACE_OPEN);

	const children: ASTNode[] = [];
	while (parser.peek().value !== GRAMMAR.BRACE_CLOSE) {
		if (parser.consumeIfComment()) {
			continue;
		}

		const member = parseClassMember(parser);
		if (member === null) {
			continue;
		}

		if (member instanceof ASTFieldNode && !member.modifiers.static) {
			throwParserError('Interface fields must be static.');
		}

		if (member instanceof ASTMethodNode && member.children.length > 0) {
			throwParserError('Interface methods must not have a body.');
		}

		children.push(member);
	}

	const braceCloseToken = parser.expectPunctuation(GRAMMAR.BRACE_CLOSE);

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

export function parseAnnotations(parser: Parser): ASTAnnotationNode[] {
	const annotations = [];

	while (parser.peek().type === TokenType.ANNOTATION) {
		annotations.push(parseAnnotation(parser));
	}

	return annotations;
}

export function parseAnnotation(parser: Parser): ASTAnnotationNode {
	const token = parser.expectAnnotation();
	const node = new ASTAnnotationNode(token.value);

	if (parser.consumeIfPunctuation(GRAMMAR.PARENTHESES_OPEN)) {
		while (parser.peek().value !== GRAMMAR.PARENTHESES_CLOSE) {
			const key = parser.expectIdentifier().value;
			parser.expectOperator(GRAMMAR.ASSIGN);

			const value = parseExpression(parser);
			node.properties.set(key, value);

			if (parser.peek().value === GRAMMAR.COMMA) {
				parser.next();
			}
		}

		parser.expectPunctuation(GRAMMAR.PARENTHESES_CLOSE);
	}

	return node;
}

export function parseModifiers(parser: Parser, allowed: string[]): Modifiers {
	const modifiers: { [index: string]: boolean } = {};

	allowed.forEach(modifier => modifiers[modifier] = false);

	while (parser.peek().type === TokenType.KEYWORD && allowed.includes(parser.peek().value)) {
		const modifier = parser.next().value;

		if (modifiers[modifier]) {
			throwParserError(`Duplicate modifier: ${modifier}`);
		}

		modifiers[modifier] = true;
	}

	return new Modifiers(modifiers);
}

export function parseParameters(parser: Parser): ASTParameterNode[] {
	const parameters: ASTParameterNode[] = [];

	if (parser.peek().value === GRAMMAR.PARENTHESES_CLOSE) {
		return parameters;
	}

	do {
		const nameToken = parser.expectIdentifier();
		let type = null;
		let defaultValue = null;

		let typeToken = null;
		let defaultValueToken = null;

		if (parser.peek().value === GRAMMAR.COLON) {
			typeToken = parser.next();
			type = parseType(parser);
		}

		if (parser.peek().value === GRAMMAR.ASSIGN) {
			defaultValueToken = parser.next();
			defaultValue = parseExpression(parser);
		}

		const node = new ASTParameterNode(nameToken.value, type, defaultValue);
		node.span = spanFrom(typeToken || nameToken, defaultValueToken || nameToken);

		parameters.push(node);
	} while (parser.consumeIfPunctuation(GRAMMAR.COMMA));

	return parameters;
}

export function parseClassMember(parser: Parser): ASTNode | null {
	const startToken = parser.peek();

	const annotations = parseAnnotations(parser);
	const modifiers = parseModifiers(
		parser,
		[
			GRAMMAR.PUBLIC,
			GRAMMAR.PRIVATE,
			GRAMMAR.STATIC,
			GRAMMAR.READONLY
		]
	);

	const nameToken = parser.expectOneOf([TokenType.IDENTIFIER, TokenType.KEYWORD]);

	let fieldType = null;
	if (parser.peek().value === GRAMMAR.COLON) {
		if (parser.consumeIfPunctuation(GRAMMAR.COLON)) {
			fieldType = parseType(parser);
		}
	}

	let init = null;
	if (parser.consumeIfOperator(GRAMMAR.ASSIGN)) {
		init = parseExpression(parser);
	}

	if (parser.peek().value === GRAMMAR.SEMICOLON) {
		if (!modifiers.public && !modifiers.private) {
			modifiers.private = true;
		}

		const semicolonToken = parser.expectPunctuation(GRAMMAR.SEMICOLON);

		const node = new ASTFieldNode(nameToken.value, modifiers, fieldType, init);
		node.span = spanFrom(startToken, semicolonToken);
		return node;
	}

	let typeParameters: string[] = [];
	if (parser.peek().value === GRAMMAR.LESS_THAN) {
		typeParameters = parseTypeParameters(parser);
	}

	if (parser.peek().value === GRAMMAR.PARENTHESES_OPEN) {
		if (!modifiers.public && !modifiers.private) {
			modifiers.public = true;
		}

		parser.expectPunctuation(GRAMMAR.PARENTHESES_OPEN);
		const parameters = parseParameters(parser);
		const parenthesesCloseToken = parser.expectPunctuation(GRAMMAR.PARENTHESES_CLOSE);

		let returnType = null;
		if (parser.consumeIfPunctuation(GRAMMAR.COLON)) {
			returnType = parseType(parser);
		}

		const children: ASTNode[] = parseBlock(parser);

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

	return null;
}

export function parseBlock(parser: Parser): ASTNode[] {
	if (parser.peek().value === GRAMMAR.SEMICOLON) {
		parser.next();
		return [];
	}

	parser.expectPunctuation(GRAMMAR.BRACE_OPEN);

	const children = [];
	while (parser.peek().value !== GRAMMAR.BRACE_CLOSE) {
		if (parser.peek().type === TokenType.COMMENT) {
			parser.next();
			continue;
		}
		const child: ASTNode | null = parseStatement(parser);
		if (child) {
			children.push(child);
		}
	}

	parser.expectPunctuation(GRAMMAR.BRACE_CLOSE);

	return children;
}

export function parseVariableDeclaration(parser: Parser): ASTVariableNode {
	const letToken = parser.expectKeyword(GRAMMAR.LET);
	const nameToken = parser.expectIdentifier();

	let typeAnnotation = null;
	if (parser.consumeIfPunctuation(GRAMMAR.COLON)) {
		typeAnnotation = parseType(parser);
	}

	let init = null;
	if (parser.peek().value === GRAMMAR.ASSIGN) {
		parser.expectOperator(GRAMMAR.ASSIGN);
		init = parseExpression(parser);
	}

	const semicolonToken = parser.expectPunctuation(GRAMMAR.SEMICOLON);

	const node = new ASTVariableNode(nameToken.value, typeAnnotation, init);
	node.span = spanFrom(letToken, semicolonToken);

	return node;
}

export function parseIfDeclaration(parser: Parser): ASTIfNode {
	const startToken = parser.expectKeyword(GRAMMAR.IF);

	parser.expectPunctuation(GRAMMAR.PARENTHESES_OPEN);
	const condition = parseExpression(parser);
	const parenthesesCloseToken = parser.expectPunctuation(GRAMMAR.PARENTHESES_CLOSE);

	const node = new ASTIfNode(condition, new ASTThenNode(parseBlock(parser)));

	if (parser.consumeIfKeyword(GRAMMAR.ELSE)) {
		if (parser.peek().value === GRAMMAR.IF) {
			node.else = parseIfDeclaration(parser);
		} else {
			node.else = new ASTElseNode(parseBlock(parser));
		}
	}

	node.span = spanFrom(startToken, parenthesesCloseToken);

	return node;
}

export function parseMatchDeclaration(parser: Parser): ASTMatchNode {
	const startToken = parser.expectKeyword(GRAMMAR.MATCH);
	parser.expectPunctuation(GRAMMAR.PARENTHESES_OPEN);

	const expression = parseExpression(parser);

	parser.expectPunctuation(GRAMMAR.PARENTHESES_CLOSE);
	parser.expectPunctuation(GRAMMAR.BRACE_OPEN);

	const matchCases: ASTMatchCaseNode[] = [];
	let defaultCase: ASTMatchCaseNode | null = null;

	while (parser.peek().value !== GRAMMAR.BRACE_CLOSE) {
		const matchCase: ASTMatchCaseNode = parseMatchCaseDeclaration(parser);
		if (matchCase.test === null) {
			defaultCase = matchCase;
			continue;
		}
		matchCases.push(matchCase);
	}

	const braceCloseToken = parser.expectPunctuation(GRAMMAR.BRACE_CLOSE);

	const node = new ASTMatchNode(expression, matchCases, defaultCase);
	node.span = spanFrom(startToken, braceCloseToken);

	return node;
}

export function parseMatchCaseDeclaration(parser: Parser): ASTMatchCaseNode {
	const caseNode = new ASTMatchCaseNode();

	if (parser.consumeIfKeyword(GRAMMAR.DEFAULT)) {
		caseNode.test = null;
	} else {
		caseNode.test = parseExpression(parser);
	}

	parser.expectPunctuation(GRAMMAR.COLON);

	if (parser.peek().value === GRAMMAR.BRACE_OPEN) {
		caseNode.children = parseBlock(parser);
	} else {
		const child: ASTNode | null = parseStatement(parser);
		if (child) {
			caseNode.children.push(child)
		}
	}

	return caseNode;
}

export function parseForeachDeclaration(parser: Parser): ASTForeachNode {
	const startToken = parser.expectKeyword(GRAMMAR.FOREACH);

	parser.expectPunctuation(GRAMMAR.PARENTHESES_OPEN);

	const iteratorToken = parser.expectIdentifier();
	const iterator = iteratorToken.value;

	parser.expectKeyword(GRAMMAR.IN);

	const iterable = parseExpression(parser);

	const parenthesesCloseToken = parser.expectPunctuation(GRAMMAR.PARENTHESES_CLOSE);

	const node = new ASTForeachNode(iterator, iterable, parseBlock(parser));
	node.span = spanFrom(startToken, parenthesesCloseToken);

	return node;
}

export function parseArray(parser: Parser): ASTArrayNode {
	const startToken = parser.expectPunctuation(GRAMMAR.BRACKET_SQUARE_OPEN);

	const node = new ASTArrayNode();

	if (parser.peek().value !== GRAMMAR.BRACKET_SQUARE_CLOSE) {
		do {
			node.elements.push(parseExpression(parser));
		} while (parser.consumeIfPunctuation(GRAMMAR.COMMA));
	}

	const bracketSquareCloseToken = parser.expectPunctuation(GRAMMAR.BRACKET_SQUARE_CLOSE);

	node.span = spanFrom(startToken, bracketSquareCloseToken);

	return node;
}

export function parseLambda(parser: Parser): ASTLambdaNode {
	const startToken = parser.expectPunctuation(GRAMMAR.BRACE_OPEN);

	const parameters: ASTParameterNode[] = [];
	while (parser.peek().value !== GRAMMAR.ARROW) {
		const name = parser.expectIdentifier().value;
		let type = null;
		let defaultValue = null;

		if (parser.consumeIfPunctuation(GRAMMAR.COLON)) {
			type = parseType(parser);
		}

		if (parser.peek().value === GRAMMAR.ASSIGN) {
			parser.next();
			defaultValue = parseExpression(parser);
		}

		parameters.push(new ASTParameterNode(name, type, defaultValue));

		parser.consumeIfPunctuation(GRAMMAR.COMMA);
	}

	parser.expectOperator(GRAMMAR.ARROW);

	let returnType: ASTTypeNode = createMixedType();
	if (parser.peek().type === TokenType.IDENTIFIER) {
		returnType = parseType(parser);
		if (parser.peek().value === GRAMMAR.COLON) {
			parser.next();
		} else {
			returnType = createMixedType();
			parser.rewind();
		}
	}

	let children = [];
	if (parser.peek().value === GRAMMAR.BRACE_OPEN) {
		children = parseBlock(parser);
	} else {
		children.push(parseExpression(parser));
	}

	const braceCloseToken = parser.expectPunctuation(GRAMMAR.BRACE_CLOSE);

	const node = new ASTLambdaNode(parameters, returnType, children);
	node.span = spanFrom(startToken, braceCloseToken);

	return node;
}

export function looksLikeLambda(parser: Parser): boolean {
	const start = parser.position();

	if (parser.peek().value !== GRAMMAR.BRACE_OPEN) {
		return false;
	}

	parser.next();

	while (parser.peek().type === TokenType.IDENTIFIER) {
		parser.next();
		if (parser.consumeIfPunctuation(GRAMMAR.COLON)) {
			parser.next();
		}
		if (!parser.consumeIfPunctuation(GRAMMAR.COMMA)) {
			break;
		}
	}

	const isLambda = parser.peek().value === GRAMMAR.ARROW;
	parser.seekAt(start)
	return isLambda;
}

export function parseExpressionStatement(parser: Parser): ASTExpressionNode {
	const expr = parseExpression(parser);

	parser.expectPunctuation(GRAMMAR.SEMICOLON);

	return new ASTExpressionNode(expr);
}

export function parseExpression(parser: Parser, precedence: number = 0): ASTNode {
	let expr = parsePostfix(parser, parseUnary(parser));

	while (true) {
		const token = parser.peek();
		if (!token) {
			break;
		}

		let tokenPrecedence = lookupPrecedence(token);
		if (tokenPrecedence < precedence) {
			break;
		}

		if (token.value === GRAMMAR.ASSIGN) {
			parser.next();
			expr = new ASTAssignmentNode(expr, parseExpression(parser, tokenPrecedence));
			continue;
		}

		if (GRAMMAR.MATH_OPERATORS.includes(token.value)
			|| GRAMMAR.LOGIC_OPERATORS.includes(token.value)) {
			const startToken = parser.next();
			const right = parseExpression(parser, tokenPrecedence + 1);
			const endToken = parser.peek();

			const node = new ASTBinaryNode(expr, right, token.value);
			node.span = spanFrom(startToken, endToken);
			expr = node;
			continue;
		}

		break;
	}

	return expr;
}

export function parseVDomExpression(parser: Parser): ASTVDomNode {
	parser.expectKeyword(GRAMMAR.VDOM);
	return parseVDomElement(parser);
}

export function parseVDomElement(parser: Parser): ASTVDomNode {

	const startToken: Token = parser.expectOperator(GRAMMAR.LESS_THAN);
	const tagToken: Token = parser.expectIdentifier();
	const tag: string = tagToken.value;

	const props = new Map<string, ASTNode>();
	while (!parser.peekIs(GRAMMAR.GREATER_THAN) && !parser.peekIs(GRAMMAR.XML_CLOSE_TAG)) {

		const nameToken: Token = parser.expectIdentifier();
		parser.expectOperator(GRAMMAR.ASSIGN);

		const value: ASTNode = parseExpression(parser);

		props.set(nameToken.value, value);
	}

	parser.expectOperator(GRAMMAR.GREATER_THAN);

	const children: ASTNode[] = [];

	while (!parser.peekIs(GRAMMAR.XML_OPEN_CLOSE_TAG)) {
		if (parser.peekIs(GRAMMAR.LESS_THAN)) {
			children.push(parseVDomElement(parser));
		} else {
			children.push(parseVDomText(parser));
		}
	}

	parser.expectOperator(GRAMMAR.XML_OPEN_CLOSE_TAG);
	parser.expectIdentifier();
	parser.expectOperator(GRAMMAR.GREATER_THAN);

	const node = new ASTVDomNode(tag, props, children);
	node.span = spanFrom(startToken, parser.peek());
	return node;
}

export function parseVDomText(parser: Parser): ASTVDomTextNode {
	const token: Token = parser.expectOneOf(
		[
			TokenType.IDENTIFIER,
			TokenType.OPERATOR,
			TokenType.KEYWORD
		]
	);
	const node = new ASTVDomTextNode(token.value);
	node.span = spanFrom(token, token);
	return node;
}

export function parseArguments(parser: Parser): ASTNode[] {
	const args: ASTNode[] = [];

	if (parser.consumeIfPunctuation(GRAMMAR.PARENTHESES_CLOSE)) {
		return args;
	}

	args.push(parseExpression(parser));

	while (parser.consumeIfPunctuation(GRAMMAR.COMMA)) {
		args.push(parseExpression(parser));
	}

	parser.expectPunctuation(GRAMMAR.PARENTHESES_CLOSE);
	return args;
}

export function parseUnary(parser: Parser): ASTNode | ASTUnaryNode {
	const token: Token = parser.peek();

	if (token.type === TokenType.KEYWORD && token.value === GRAMMAR.VDOM) {
		return parseVDomExpression(parser);
	}

	if (token.value === GRAMMAR.EXCLAMATION_MARK) {
		parser.next();

		const unary: ASTNode | ASTUnaryNode = parseUnary(parser);

		return new ASTUnaryNode(GRAMMAR.EXCLAMATION_MARK, unary);
	}

	return parsePrimary(parser);
}

export function parsePrimary(parser: Parser): ASTNode {
	if (looksLikeLambda(parser)) {
		return parseLambda(parser);
	}

	const token = parser.next();

	if (token.value === GRAMMAR.BRACKET_SQUARE_OPEN) {
		parser.rewind();
		return parseArray(parser);
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

		let typeAnnotation = parseType(parser);

		parser.expectPunctuation(GRAMMAR.PARENTHESES_OPEN);

		return new ASTNewNode(parseArguments(parser), typeAnnotation);
	}

	if (token.value === GRAMMAR.PARENTHESES_OPEN) {
		const expr = parseExpression(parser);
		parser.expectPunctuation(GRAMMAR.PARENTHESES_CLOSE);
		return expr;
	}

	throwParserError(`Unexpected token: ${token.type} ${token.value}`);
}

export function parsePostfix(parser: Parser, expr: ASTNode | null): ASTNode {
	if (expr === null) {
		throwParserError(`Expected expression, got null.`);
	}

	while (true) {
		const token = parser.peek();
		if (!token) break;

		// Call: foo(...)
		if (token.value === GRAMMAR.PARENTHESES_OPEN) {
			parser.next();
			expr = new ASTCallNode(expr, parseArguments(parser));
			continue;
		}

		// Member: foo.bar
		if (token.value === GRAMMAR.DOT) {
			parser.next();
			expr = new ASTMemberNode(expr, parser.expectIdentifier().value);
			continue;
		}

		// INDEX: foo[expr]
		if (token.value === GRAMMAR.BRACKET_SQUARE_OPEN) {
			parser.next();

			const index = parseExpression(parser);

			parser.expectPunctuation(GRAMMAR.BRACKET_SQUARE_CLOSE);

			expr = new ASTIndexNode(expr, index);
			continue;
		}

		break;
	}

	return expr;
}

export function lookupPrecedence(token: Token): number {
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
