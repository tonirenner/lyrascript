import {Token} from "../syntax/ast_grammar.ts";
import type {
	ASTAnnotationNode,
	ASTArrayNode,
	ASTClassNode,
	ASTExpressionNode,
	ASTForeachNode,
	ASTIfNode,
	ASTImportNode,
	ASTInterfaceNode,
	ASTLambdaNode,
	ASTMatchCaseNode,
	ASTMatchNode,
	ASTNode,
	ASTParameterNode,
	ASTReturnNode,
	ASTTypeNode,
	ASTUnaryNode,
	ASTVariableNode,
	ASTVDomExpressionNode,
	ASTVDomNode,
	ASTVDomTextNode
} from "../syntax/ast.ts";
import type {Modifiers} from "../model/runtime_model.ts";

export interface ASTParser {
	parse(): ASTNode;

	parseProgram(): ASTNode;

	parseStatement(): ASTNode | null;

	parseReturnStatement(): ASTReturnNode;

	parseImport(): ASTImportNode;

	parseImportList(): string[];

	parseClassDeclaration(): ASTClassNode;

	parseInterfaceDeclaration(): ASTInterfaceNode;

	parseAnnotations(): ASTAnnotationNode[];

	parseAnnotation(): ASTAnnotationNode;

	parseModifiers(allowed: string[]): Modifiers;

	parseParameters(): ASTParameterNode[];

	parseBlock(): ASTNode[];

	parseVariableDeclaration(): ASTVariableNode;

	parseIfDeclaration(): ASTIfNode;

	parseMatchDeclaration(): ASTMatchNode;

	parseMatchCaseDeclaration(): ASTMatchCaseNode;

	parseForeachDeclaration(): ASTForeachNode;

	parseExpressionStatement(): ASTExpressionNode;

	parseExpression(precedence?: number): ASTNode;

	parseArguments(): ASTNode[];

	parseUnary(): ASTNode | ASTUnaryNode;

	parsePrimary(): ASTNode;

	parsePostfix(expr: ASTNode | null): ASTNode;

	parseArray(): ASTArrayNode;

	parseLambda(): ASTLambdaNode;

	looksLikeLambda(): boolean;

	parseVDomExpression(): ASTVDomNode;

	parseVDomElement(): ASTVDomNode;

	parseVDomText(): ASTVDomTextNode | ASTVDomExpressionNode;

	parseType(): ASTTypeNode;

	parseTypeParameters(): string[];

	parseSimpleOrGenericType(): ASTTypeNode;

	parseLambdaType(): ASTTypeNode;

	createMixedType(): ASTTypeNode;

	lookupPrecedence(token: Token): number;
}




