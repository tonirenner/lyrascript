import {GRAMMAR, TYPE_ENUM} from "./grammar";
import {Modifiers, SuperClass} from "./interpreter/interpreter_objects";
import {SourceSpan} from "./parser/parser_source";

export class ASTNodeType {
	static PROGRAMM: string = 'program';
	static INDEX: string = 'index';
	static IDENTIFIER: string = 'identifier';
	static ANNOTATION: string = 'annotation';
	static PARAMETER: string = 'parameter';
	static IMPORT: string = GRAMMAR.IMPORT;
	static NUMBER: string = TYPE_ENUM.NUMBER;
	static STRING: string = TYPE_ENUM.STRING;
	static BOOLEAN: string = TYPE_ENUM.BOOLEAN;
	static NULL: string = TYPE_ENUM.NULL;
	static NEW: string = GRAMMAR.NEW;
	static CLASS: string = GRAMMAR.CLASS;
	static INTERFACE: string = GRAMMAR.INTERFACE;
	static CONSTRUCTOR: string = GRAMMAR.CONSTRUCTOR;
	static THIS: string = GRAMMAR.THIS;
	static RETURN: string = GRAMMAR.RETURN;
	static OPERATOR: string = 'operator_declaration';
	static VDOM: string = 'vdom_declaration';
	static VDOM_TEXT: string = 'vdom_text_declaration';
	static VDOM_EXPRESSION: string = 'vdom_expression';
	static UNARY: string = 'unary_expression';
	static LAMBDA: string = 'lambda_expression';
	static ARRAY: string = 'array_declaration';
	static TYPE: string = 'type_declaration';
	static FIELD: string = 'field_declaration';
	static MEMBER: string = 'member_expression';
	static METHOD: string = 'method_declaration';
	static CALL: string = 'call_expression';
	static VARIABLE: string = 'variable_declaration';
	static EXPRESSION: string = 'expression_statement';
	static BINARY: string = 'binary_expression';
	static ASSIGNMENT: string = 'assignment_expression';
	static IF: string = 'if_statement';
	static THEN: string = 'then_statement';
	static ELSE: string = 'else_statement';
	static MATCH: string = 'match_statement';
	static MATCH_CASE: string = 'match_case_statement';
	static FOREACH: string = 'foreach_statement';
}

export class ASTNode {
	isExpression: boolean = false;
	name: string = '';

	span: SourceSpan | null = null;
	type: string;
	value: any | null = null;
	children: ASTNode[];

	constructor(type: string, children: ASTNode[] = []) {
		this.type = type;
		this.children = children;
	}
}

export class ASTCallNode extends ASTNode {
	callee: ASTNode;
	arguments: ASTNode[];

	constructor(callee: ASTNode, args: ASTNode[] = []) {
		super(ASTNodeType.CALL);

		this.callee = callee;
		this.arguments = args;
		this.isExpression = true;
	}
}

export class ASTNewNode extends ASTNode {
	arguments: ASTNode[];
	typeAnnotation: ASTTypeNode;

	constructor(args: ASTNode[], typeAnnotation: ASTTypeNode) {
		super(ASTNodeType.NEW);

		this.arguments = args;
		this.typeAnnotation = typeAnnotation;
		this.name = typeAnnotation.name;
		this.isExpression = true;
	}
}

export class ASTBinaryNode extends ASTNode {
	left: ASTNode;
	right: ASTNode;
	operator: string;

	constructor(left: ASTNode, right: ASTNode, operator: string) {
		super(ASTNodeType.BINARY);

		this.left = left;
		this.right = right;
		this.operator = operator;
		this.isExpression = true;
	}
}

export class ASTAssignmentNode extends ASTNode {
	left: ASTNode;
	right: ASTNode;

	constructor(left: ASTNode, right: ASTNode) {
		super(ASTNodeType.ASSIGNMENT);

		this.left = left;
		this.right = right;
		this.isExpression = true;
	}
}

export class ASTMemberNode extends ASTNode {
	object: ASTNode;
	property: string;

	constructor(object: ASTNode, property: string) {
		super(ASTNodeType.MEMBER);

		this.object = object;
		this.property = property;
		this.isExpression = true;
	}
}

export class ASTUnaryNode extends ASTNode {
	operator: string;
	argument: ASTNode | ASTUnaryNode;

	constructor(operator: string, argument: ASTNode | ASTUnaryNode) {
		super(ASTNodeType.UNARY);

		this.operator = operator;
		this.argument = argument;
		this.isExpression = true;
	}
}

export class ASTIndexNode extends ASTNode {
	object: ASTNode;
	index: ASTNode;

	constructor(object: ASTNode, index: ASTNode) {
		super(ASTNodeType.INDEX);

		this.object = object;
		this.index = index;
		this.isExpression = true;
	}
}

export class ASTArrayNode extends ASTNode {
	elements: ASTNode[] = [];

	constructor() {
		super(ASTNodeType.ARRAY);

		this.isExpression = true;
	}
}

export class ASTLambdaNode extends ASTNode {
	parameters: ASTParameterNode[];
	returnType: ASTTypeNode;

	constructor(parameters: ASTParameterNode[], returnType: ASTTypeNode, children: ASTNode[]) {
		super(ASTNodeType.LAMBDA, children);

		this.parameters = parameters;
		this.returnType = returnType;

		this.isExpression = true;
	}
}

export class ASTFieldNode extends ASTNode {
	modifiers: Modifiers;
	fieldType: ASTTypeNode | null;
	init: ASTNode | null = null;

	constructor(name: string, modifiers: Modifiers, fieldType: ASTTypeNode | null, init: ASTNode | null = null) {
		super(ASTNodeType.FIELD);

		this.name = name;
		this.modifiers = modifiers;
		this.fieldType = fieldType;
		this.init = init;
	}
}

export class ASTVariableNode extends ASTNode {
	typeAnnotation: ASTTypeNode | null = null;
	init: ASTNode | null = null;

	constructor(name: string, typeAnnotation: ASTTypeNode | null = null, init: ASTNode | null = null) {
		super(ASTNodeType.VARIABLE);

		this.name = name;
		this.typeAnnotation = typeAnnotation;
		this.init = init;
	}
}

export class ASTExpressionNode extends ASTNode {
	expr: ASTNode;

	constructor(expr: ASTNode) {
		super(ASTNodeType.EXPRESSION);

		this.expr = expr;
	}
}

export class ASTReturnNode extends ASTNode {
	argument: ASTNode | ASTExpressionNode | null;

	constructor(argument: ASTNode | ASTExpressionNode | null = null) {
		super(ASTNodeType.RETURN);

		this.argument = argument;
	}
}

export class ASTClassNode extends ASTNode {
	annotations: ASTAnnotationNode[];
	modifiers: Modifiers;
	typeParameters: string[];
	superClass: SuperClass | null;
	implementsInterfaces: ASTTypeNode[];

	constructor(
		name: string,
		annotations: ASTAnnotationNode[],
		modifiers: Modifiers,
		typeParameters: string[],
		implementsInterfaces: ASTTypeNode[],
		superClass: SuperClass | null = null,
		children: ASTNode[] = []
	) {
		super(ASTNodeType.CLASS, children);

		this.name = name;
		this.annotations = annotations;
		this.modifiers = modifiers;
		this.typeParameters = typeParameters;
		this.superClass = superClass;
		this.implementsInterfaces = implementsInterfaces;
	}
}

export class ASTInterfaceNode extends ASTNode {
	annotations: ASTAnnotationNode[];
	modifiers: Modifiers;
	typeParameters: string[];
	extendsInterfaces: string[];

	constructor(
		name: string,
		annotations: ASTAnnotationNode[],
		modifiers: Modifiers,
		typeParameters: string[],
		extendsInterfaces: string[],
		children: ASTNode[] = []
	) {
		super(ASTNodeType.INTERFACE, children);

		this.name = name;
		this.annotations = annotations;
		this.modifiers = modifiers;
		this.typeParameters = typeParameters;
		this.extendsInterfaces = extendsInterfaces;
	}
}

export class ASTAnnotationNode extends ASTNode {
	properties: Map<string, ASTNode> = new Map();

	constructor(name: string) {
		super(ASTNodeType.ANNOTATION);
		this.name = name;
	}
}

export class ASTParameterNode extends ASTNode {
	typeAnnotation: ASTTypeNode | null;
	defaultValue: ASTNode | null;

	constructor(name: string, typeAnnotation: ASTTypeNode | null, defaultValue: ASTNode | null = null) {
		super(ASTNodeType.PARAMETER);
		this.typeAnnotation = typeAnnotation;
		this.name = name;
		this.defaultValue = defaultValue;
	}
}

export class ASTMethodNode extends ASTNode {
	annotations: ASTAnnotationNode[];
	modifiers: Modifiers;
	typeParameters: string[];
	parameters: ASTParameterNode[];
	returnType: ASTTypeNode | null;


	constructor(
		name: string,
		type: string,
		annotations: ASTAnnotationNode[],
		modifiers: Modifiers,
		typeParameters: string[],
		parameters: ASTParameterNode[],
		returnType: ASTTypeNode | null = null,
		children: ASTNode[] = [],
	) {
		super(type, children);

		this.name = name;
		this.annotations = annotations;
		this.modifiers = modifiers;
		this.typeParameters = typeParameters;
		this.parameters = parameters;
		this.returnType = returnType;
	}
}

export class ASTOperatorNode extends ASTMethodNode {

	static ALLOWED_OPERATORS: string[] = [
		GRAMMAR.PLUS,
		GRAMMAR.MINUS,
		GRAMMAR.MULTIPLY,
		GRAMMAR.DIVIDE,
		GRAMMAR.MODULUS,
		GRAMMAR.EQUAL,
		GRAMMAR.NOT_EQUAL,
		GRAMMAR.LESS_THAN,
		GRAMMAR.LESS_EQUAL,
		GRAMMAR.GREATER_THAN,
		GRAMMAR.GREATER_EQUAL,
		GRAMMAR.EXCLAMATION_MARK,
		//"[]"
	];

	static OPERATOR_METHOD_MAP: Map<string, string> = new Map(
		[
			[GRAMMAR.PLUS, '__add'],
			[GRAMMAR.MINUS, '__subtract'],
			[GRAMMAR.MULTIPLY, '__multiply'],
			[GRAMMAR.DIVIDE, '__divide'],
			[GRAMMAR.MODULUS, '__modulus'],
			[GRAMMAR.EQUAL, '__equal'],
			[GRAMMAR.NOT_EQUAL, '__not_equal'],
			[GRAMMAR.LESS_THAN, '__less_than'],
			[GRAMMAR.LESS_EQUAL, '__less_equal'],
			[GRAMMAR.GREATER_THAN, '__greater_than'],
			[GRAMMAR.GREATER_EQUAL, '__greater_equal'],
			[GRAMMAR.EXCLAMATION_MARK, '__not'],
		]
	);

	operator: string;

	constructor(
		operator: string,
		annotations: ASTAnnotationNode[],
		modifiers: Modifiers,
		typeParameters: string[],
		parameters: ASTParameterNode[],
		returnType: ASTTypeNode | null = null,
		children: ASTNode[] = [],
	) {
		super(
			operator,                        // name = symbol
			ASTNodeType.OPERATOR,
			annotations,
			modifiers,
			typeParameters,
			parameters,
			returnType,
			children
		);

		this.operator = operator;
	}
}

export class ASTImportNode extends ASTNode {
	names: string[];
	from: string | null;

	constructor(names: string[], from: string | null = null) {
		super(ASTNodeType.IMPORT);

		this.names = names;
		this.from = from;
	}
}

export class ASTThenNode extends ASTNode {
	constructor(children: ASTNode[] = []) {
		super(ASTNodeType.THEN, children);
	}
}

export class ASTIfNode extends ASTNode {
	condition: ASTNode;
	then: ASTThenNode;
	else: ASTIfNode | ASTElseNode | null = null;

	constructor(condition: ASTNode, then: ASTThenNode) {
		super(ASTNodeType.IF);

		this.condition = condition;
		this.then = then;
	}
}

export class ASTElseNode extends ASTNode {
	constructor(children: ASTNode[] = []) {
		super(ASTNodeType.ELSE, children);
	}
}

export class ASTMatchNode extends ASTNode {
	expression: ASTNode;
	cases: ASTMatchCaseNode[];
	defaultCase: ASTMatchCaseNode | null = null;

	constructor(expression: ASTNode, cases: ASTMatchCaseNode[], defaultCase: ASTMatchCaseNode | null = null) {
		super(ASTNodeType.MATCH);

		this.expression = expression;
		this.cases = cases;
		this.defaultCase = defaultCase;
	}
}

export class ASTMatchCaseNode extends ASTNode {
	test: ASTNode | null = null;

	constructor(children: ASTNode[] = []) {
		super(ASTNodeType.MATCH_CASE, children);
	}
}

export class ASTForeachNode extends ASTNode {
	iterator: string;
	iterable: ASTNode;
	body: ASTNode[];

	constructor(iterator: string, iterable: ASTNode, body: ASTNode[] = []) {
		super(ASTNodeType.FOREACH);

		this.iterator = iterator;
		this.iterable = iterable;
		this.body = body;
	}
}

export class ASTTypeNode extends ASTNode {
	static KIND_SIMPLE = 'simple';
	static KIND_GENERIC = 'generic';
	static KIND_LAMBDA = 'lambda';

	kind: string;
	typeArguments: ASTTypeNode[] = [];
	parameterTypes: ASTTypeNode[] = [];
	returnType: ASTTypeNode | null = null;
	nullable: boolean;

	constructor(kind: string, name: string, nullable: boolean = false) {
		super(ASTNodeType.TYPE);

		this.kind = kind;
		this.name = name;
		this.nullable = nullable;
	}
}

export class ASTVDomNode extends ASTNode {
	readonly tag: string;
	readonly props: Map<string, ASTNode> = new Map();

	constructor(tag: string, props: Map<string, ASTNode>, children: ASTNode[] = []) {
		super(ASTNodeType.VDOM, children);
		this.tag = tag;
		this.props = props;
	}
}

export class ASTVDomTextNode extends ASTNode {
	constructor(value: string) {
		super(ASTNodeType.VDOM_TEXT);
		this.value = value;
	}
}

export class ASTVDomExpressionNode extends ASTNode {
	expr: ASTNode;

	constructor(expr: ASTNode) {
		super(ASTNodeType.VDOM_EXPRESSION);
		this.expr = expr;
	}
}
