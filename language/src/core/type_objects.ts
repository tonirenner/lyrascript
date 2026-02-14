import {TYPE_ENUM} from "./grammar.ts";
import {
	ASTClassNode,
	ASTFieldNode,
	ASTInterfaceNode,
	ASTMethodNode,
	ASTNode,
	ASTParameterNode,
	ASTTypeNode
} from "./ast.ts";
import {throwTypeError} from "./errors.ts";
import {ObjectRegistry} from "./interpreter_registry.ts";

export class PrimitiveTypes {
	static NUMBER: string = TYPE_ENUM.NUMBER;
	static STRING: string = TYPE_ENUM.STRING;
	static BOOLEAN: string = TYPE_ENUM.BOOLEAN;
	static MIXED: string = TYPE_ENUM.MIXED;
	static NULL: string = TYPE_ENUM.NULL;
	static VOID: string = TYPE_ENUM.VOID;

	static hasType(type: string): boolean {
		return Object.hasOwnProperty.call(PrimitiveTypes, type.toUpperCase());
	}
}

export class PrimitiveClassTypes {
	static ARRAY: string = TYPE_ENUM.ARRAY;

	static CLASSNAME_MAP: { [s: string]: string; } = {
		array: 'Array'
	}

	static getClassRefName(type: string): string | null {
		return PrimitiveClassTypes.CLASSNAME_MAP[type] || null;
	}
}

export class Type {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	equals(other: Type): boolean {
		return this === other;
	}

	accepts(other: Type): boolean {
		return this.equals(other);
	}

	toString(): string {
		return `Type(${this.name})`;
	}
}

export class PrimitiveType extends Type {
	constructor(name: string) {
		super(name);
	}

	override equals(other: Type): boolean {
		return other instanceof PrimitiveType
			&& this.name === other.name;
	}
}

export class MixedType extends Type {
	constructor() {
		super(PrimitiveTypes.MIXED);
	}

	override equals(other: Type): boolean {
		return other instanceof MixedType;
	}

	override accepts(): boolean {
		return true;
	}
}

export class VoidType extends Type {
	constructor() {
		super(PrimitiveTypes.VOID);
	}

	override equals(other: Type): boolean {
		return other instanceof VoidType;
	}
}

export class NullType extends Type {
	constructor() {
		super(PrimitiveTypes.NULL);
	}

	override equals(other: Type): boolean {
		return other instanceof NullType;
	}

	override accepts(other: Type): boolean {
		return other === this;
	}
}

export class NullableType extends Type {
	inner: Type;

	constructor(inner: Type) {
		super(inner.toString() + '?');
		this.inner = inner;
	}

	override equals(other: Type): boolean {
		if (other === Types.NULL) {
			return true;
		}

		if (other instanceof NullableType) {
			return this.inner.equals(other.inner);
		}

		return false;
	}

	override accepts(other: Type): boolean {
		return other === Types.NULL || this.inner.accepts(other);
	}

	override toString(): string {
		return this.inner.toString() + '?';
	}
}

export class Types {
	static NUMBER: PrimitiveType = new PrimitiveType(PrimitiveTypes.NUMBER);
	static STRING: PrimitiveType = new PrimitiveType(PrimitiveTypes.STRING);
	static BOOLEAN: PrimitiveType = new PrimitiveType(PrimitiveTypes.BOOLEAN);
	static MIXED: MixedType = new MixedType();
	static NULL: NullType = new NullType();
	static VOID: VoidType = new VoidType();

	static getType(name: string): Type {
		if (!Object.hasOwnProperty.call(PrimitiveTypes, name.toUpperCase())) {
			throwTypeError(`Unknown primitive type ${name}.`);
		}

		const types: { [index: string]: any } = Types;
		return types[name.toUpperCase()];
	}
}

export class TypeVariable extends Type {
	constructor(name: string) {
		super(name);
	}

	override equals(other: Type) {
		return other instanceof TypeVariable
			&& this.name === other.name;
	}

	override accepts(): boolean {
		return true;
	}
}

export class TypeParameterSymbol {
	name: string;
	variableType: TypeVariable;

	constructor(name: string) {
		this.name = name;
		this.variableType = new TypeVariable(name);
	}
}

export class FieldSymbol {
	node: ASTFieldNode;
	name: string;
	fieldType: Type;
	isStatic: boolean = false;
	isPrivate: boolean = false;
	isPublic: boolean = false;
	isReadonly: boolean = false;
	owner: ClassSymbol | InterfaceSymbol | null = null;

	constructor(node: ASTFieldNode, fieldType: Type) {
		this.node = node;
		this.name = node.name;
		this.fieldType = fieldType;
		this.isStatic = node.modifiers.static;
		this.isPrivate = node.modifiers.private;
		this.isPublic = node.modifiers.public;
		this.isReadonly = node.modifiers.readonly;
	}
}

export class ParameterSymbol {
	node: ASTParameterNode | null;
	name: string;
	parameterType: Type;
	defaultType: Type | null = null;

	constructor(name: string, type: Type, defaultValue: Type | null = null, node: ASTParameterNode | null = null) {
		this.name = name;
		this.parameterType = type;
		this.defaultType = defaultValue;
		this.node = node;
	}
}

export class MethodSymbol {
	name: string;
	node: ASTMethodNode;
	typeParameterSymbols: TypeParameterSymbol[] = [];
	parameterSymbols: ParameterSymbol[] = [];
	returnType: Type = Types.MIXED;
	isStatic: boolean = false;
	isPrivate: boolean = false;
	isPublic: boolean = false;
	owner: ClassSymbol | InterfaceSymbol | null = null;

	constructor(node: ASTMethodNode) {
		this.name = node.name;
		this.node = node;
		this.isStatic = node.modifiers.static;
		this.isPrivate = node.modifiers.private;
		this.isPublic = node.modifiers.public;
	}

	get body(): ASTNode[] {
		return this.node.children;
	}
}

export interface ObjectSymbol {
	name: string;
	typeParameterSymbols: TypeParameterSymbol[];
	staticFieldSymbols: Map<string, FieldSymbol>;
	instanceMethodSymbols: Map<string, MethodSymbol>;
}

export class ClassSymbol implements ObjectSymbol {
	node: ASTClassNode;
	name: string;
	superClass: string | null = null;
	superClassSymbol: ClassSymbol | null = null;
	typeParameterSymbols: TypeParameterSymbol[] = [];
	instanceFieldSymbols: Map<string, FieldSymbol> = new Map();
	staticFieldSymbols: Map<string, FieldSymbol> = new Map();
	instanceMethodSymbols: Map<string, MethodSymbol> = new Map();
	staticMethodSymbols: Map<string, MethodSymbol> = new Map();
	constructorMethodSymbol: MethodSymbol | null = null;
	implementsInterfaces: InterfaceRefType[] = [];

	constructor(node: ASTClassNode) {
		this.node = node;
		this.name = node.name;
		this.superClass = node.superClass?.name ?? null;
	}

	resolveInstanceFieldSymbol(name: string): FieldSymbol | null {
		if (this.instanceFieldSymbols.has(name)) {
			return this.instanceFieldSymbols.get(name) || null;
		}

		if (this.superClass) {
			return this.superClassSymbol?.resolveInstanceFieldSymbol(name) || null;
		}

		return null;
	}

	resolveStaticFieldSymbol(name: string): FieldSymbol | null {
		if (this.staticFieldSymbols.has(name)) {
			return this.staticFieldSymbols.get(name) || null;
		}

		if (this.superClass) {
			return this.superClassSymbol?.resolveStaticFieldSymbol(name) || null;
		}

		return null;
	}
}

export class InterfaceSymbol implements ObjectSymbol {
	node: ASTInterfaceNode;
	name: string;
	typeParameterSymbols: TypeParameterSymbol[] = [];
	staticFieldSymbols: Map<string, FieldSymbol> = new Map();
	instanceMethodSymbols: Map<string, MethodSymbol> = new Map();
	extendsInterfaces: InterfaceSymbol[] = [];

	constructor(node: ASTInterfaceNode) {
		this.node = node;
		this.name = node.name;
	}
}

export class ClassRefType extends Type {
	classSymbol: ClassSymbol;
	typeArguments: Type[];

	constructor(classSymbol: ClassSymbol, typeArguments: Type[] = []) {
		super(ClassRefType.formatSymbolName(classSymbol.name, typeArguments));
		this.classSymbol = classSymbol;
		this.typeArguments = typeArguments;
	}

	static formatSymbolName(name: string, typeArguments: Type[]) {
		if (typeArguments.length === 0) {
			return `classRefType(${name})`;
		}

		return `classRefType(${name}<${typeArguments.map(type => type.toString())
		                                            .join(', ')}>)`;
	}

	override equals(other: Type): boolean {
		return (other instanceof ClassRefType
			&& other.classSymbol === this.classSymbol);
	}

	override accepts(other: Type): boolean {
		if (!this.equals(other)) {
			return false;
		}

		if (other instanceof ClassRefType) {
			if (this.typeArguments.length !== other.typeArguments.length) {
				return false;
			}

			for (let i = 0; i < this.typeArguments.length; i++) {
				const otherType = other.typeArguments[i];

				if (!otherType || !this.typeArguments[i]?.accepts(otherType)) {
					return false;
				}
			}

			return true;
		}

		return false;
	}
}

export class InterfaceRefType extends Type {
	interfaceSymbol: InterfaceSymbol;
	typeArguments: Type[];

	constructor(interfaceSymbol: InterfaceSymbol, typeArguments: Type[] = []) {
		super(InterfaceRefType.formatSymbolName(interfaceSymbol.name, typeArguments));
		this.interfaceSymbol = interfaceSymbol;
		this.typeArguments = typeArguments;
	}

	static formatSymbolName(name: string, typeArguments: Type[]): string {
		if (typeArguments.length === 0) {
			return `interfaceRefType(${name})`;
		}

		return `interfaceRefType(${name}<${typeArguments.map(type => type.toString())
		                                                .join(', ')}>)`;
	}

	override equals(other: Type): boolean {
		return (other instanceof InterfaceRefType
			&& other.interfaceSymbol === this.interfaceSymbol);
	}

	override accepts(other: Type): boolean {
		if (!this.equals(other)) {
			return false;
		}

		if (other instanceof InterfaceRefType) {
			if (this.typeArguments.length !== other.typeArguments.length) {
				return false;
			}

			for (let i = 0; i < this.typeArguments.length; i++) {
				const otherType = other.typeArguments[i];

				if (!otherType || !this.typeArguments[i]?.accepts(otherType)) {
					return false;
				}
			}

			return true;
		}

		return false;
	}
}

export class LambdaType extends Type {
	parameterSymbols: ParameterSymbol[] = [];
	returnType: Type;

	constructor(parameters: ParameterSymbol[], returnType: Type) {
		super(LambdaType.createSignature(parameters, returnType));
		this.parameterSymbols = parameters;
		this.returnType = returnType;
	}

	static createSignature(parameters: ParameterSymbol[], returnType: Type): string {
		return `lambda(${parameters.map(parameter => parameter.parameterType.toString())
		                           .join(', ')}) -> ${returnType.toString()})`;
	}

	override equals(other: Type): boolean {
		if (!(other instanceof LambdaType)) {
			return false;
		}

		if (this.parameterSymbols.length !== other.parameterSymbols.length) {
			return false;
		}

		for (let i = 0; i < this.parameterSymbols.length; i++) {
			const otherType = other.parameterSymbols[i]?.parameterType;

			if (!otherType || !this.parameterSymbols[i]?.parameterType.accepts(otherType)) {
				return false;
			}
		}

		return this.returnType.accepts(other.returnType);
	}
}

export class TypeScope {
	parent: TypeScope | null;
	types: Map<string, Type> = new Map();
	typeBindings: Map<string, Type> = new Map();
	currentObjectSymbol: ClassSymbol | InterfaceSymbol | null;

	constructor(parent: TypeScope | null = null) {
		this.parent = parent;
		this.currentObjectSymbol = parent?.currentObjectSymbol ?? null;
	}

	defineType(name: string, type: Type): void {
		this.types.set(name, type);
	}

	defineTypeBinding(name: string, typeVariable: TypeVariable): void {
		this.typeBindings.set(name, typeVariable);
	}

	hasType(name: string): boolean {
		return this.types.has(name) || this.parent?.hasType(name) || false;
	}

	hasTypeBinding(name: string): boolean {
		return this.typeBindings.has(name) || this.parent?.hasTypeBinding(name) || false;
	}

	getType(name: string): Type {
		if (this.types.has(name)) {
			return this.types.get(name) || Types.NULL;
		}
		return this.parent?.getType(name) || Types.NULL;
	}

	getTypeBinding(name: string): Type {
		if (this.typeBindings.has(name)) {
			return this.typeBindings.get(name) || Types.NULL;
		}
		return this.parent?.getTypeBinding(name) || Types.NULL;
	}
}

export function wrapType(typeNode: ASTTypeNode, objectRegistry: ObjectRegistry, scope: TypeScope | null = null): Type {
	let baseType = resolveBaseType(typeNode, objectRegistry, scope);
	if (baseType) {
		if (!(baseType instanceof NullableType) && typeNode.nullable) {
			return new NullableType(baseType);
		}

		return baseType;
	}

	throwTypeError(`Could not resolve type ${typeNode.name}.`, typeNode.span);
}

export function resolveBaseType(typeNode: ASTTypeNode, objectRegistry: ObjectRegistry, scope: TypeScope | null = null): Type {
	switch (typeNode.kind) {
		case ASTTypeNode.KIND_SIMPLE: {
			if (scope && scope.hasTypeBinding(typeNode.name)) {
				return scope.getTypeBinding(typeNode.name);
			}

			if (objectRegistry.types.hasSymbol(typeNode.name)) {
				return resolveRefType(typeNode, objectRegistry);
			}

			if (PrimitiveTypes.hasType(typeNode.name)) {
				return resolvePrimitiveType(typeNode);
			}

			return new TypeVariable(typeNode.name);
		}
		case ASTTypeNode.KIND_GENERIC: {
			if (!objectRegistry.types.hasSymbol(typeNode.name)) {
				throwTypeError(`Symbol ${typeNode.name} is not a class reference.`, typeNode.span);
			}
			return resolveGenericRefType(typeNode, objectRegistry);
		}
		case ASTTypeNode.KIND_LAMBDA: {
			return resolveLambdaType(typeNode, objectRegistry);
		}
		default: {
			throwTypeError(
				`Invalid type annotation, kind ${typeNode.kind}.`,
				typeNode.span
			);
		}
	}
}

export function resolveRefType(typeNode: ASTTypeNode, objectRegistry: ObjectRegistry): ClassRefType | InterfaceRefType | Type {
	if (typeNode.typeArguments.length > 0) {
		throwTypeError(`Generic class ${typeNode.name} cannot have type arguments.`, typeNode.span);
	}

	if (objectRegistry.types.classSymbols.has(typeNode.name)) {
		return new ClassRefType(objectRegistry.types.getClassSymbol(typeNode.name));
	}

	if (objectRegistry.types.interfaceSymbols.has(typeNode.name)) {
		return new InterfaceRefType(objectRegistry.types.getInteraceSymbol(typeNode.name));
	}

	throwTypeError(`Unknown class or interface ${typeNode.name}.`, typeNode.span);
}

export function resolveGenericRefType(typeNode: ASTTypeNode, objectRegistry: ObjectRegistry): ClassRefType | InterfaceRefType | Type {
	if (objectRegistry.types.classSymbols.has(typeNode.name)) {
		return new ClassRefType(
			objectRegistry.types.getClassSymbol(typeNode.name),
			typeNode.typeArguments.map(typeArgument => resolveBaseType(typeArgument, objectRegistry))
		);
	}

	if (objectRegistry.types.interfaceSymbols.has(typeNode.name)) {
		return new InterfaceRefType(
			objectRegistry.types.getInteraceSymbol(typeNode.name),
			typeNode.typeArguments.map(typeArgument => resolveBaseType(typeArgument, objectRegistry))
		);
	}

	throwTypeError(`Unknown class or interface ${typeNode.name}.`, typeNode.span);
}

export function resolvePrimitiveType(typeNode: ASTTypeNode): Type {
	return Types.getType(typeNode.name);
}

export function resolveLambdaType(typeNode: ASTTypeNode, objectRegistry: ObjectRegistry, scope: TypeScope | null = null): LambdaType {
	const parameterSymbols = typeNode.parameterTypes.map(
		typeAnnotation => {
			return new ParameterSymbol(
				typeAnnotation.name,
				wrapType(typeAnnotation, objectRegistry, scope)
			);
		}
	);

	return new LambdaType(
		parameterSymbols,
		typeNode.returnType
			? wrapType(typeNode.returnType, objectRegistry, scope)
			: Types.MIXED
	);
}

export function substituteType(type: Type, substitutionMap: Map<string, Type>): Type {
	if (type instanceof TypeVariable) {
		return substitutionMap.get(type.name) ?? type;
	}

	if (type instanceof ClassRefType) {
		return new ClassRefType(
			type.classSymbol,
			type.typeArguments.map(typeArgument => substituteType(typeArgument, substitutionMap))
		);
	}

	if (type instanceof NullableType) {
		return new NullableType(substituteType(type.inner, substitutionMap));
	}

	return type;
}

export function buildTypeSubstitutionMap(typeParameters: TypeParameterSymbol[], typeArguments: Type[]): Map<string, Type> {
	const substitutionMap = new Map();

	for (let i = 0; i < typeParameters.length; i++) {
		const typeParameter: TypeParameterSymbol | null = typeParameters[i] || null;
		const typeArgument: Type | null = typeArguments[i] || null;

		if (typeParameter && typeArgument) {
			substitutionMap.set(typeParameter.name, typeArgument);
		}
	}

	return substitutionMap;
}
