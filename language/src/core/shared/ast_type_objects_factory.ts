import {
	type ASTClassNode,
	ASTFieldNode,
	ASTInterfaceNode,
	ASTMethodNode,
	ASTNodeType,
	ASTParameterNode
} from "./ast.ts";
import {
	ClassSymbol,
	FieldSymbol,
	InterfaceRefType,
	InterfaceSymbol,
	MethodSymbol,
	ParameterSymbol,
	Type,
	TypeParameterSymbol,
	Types,
	TypeScope,
	TypeVariable,
	wrapType
} from "./type_objects.ts";
import type {ObjectRegistry} from "./runtime_registry.ts";
import {throwTypeError} from "./errors.ts";

export class ASTTypeObjectsFactory {

	static addClassSymbol(classNode: ASTClassNode, objectRegistry: ObjectRegistry): void {

		if (objectRegistry.types.hasSymbol(classNode.name)) {
			return;
		}

		const classScope = new TypeScope();
		const classSymbol = new ClassSymbol(classNode);

		try {
			if (classSymbol.superClass) {
				classSymbol.superClassSymbol = objectRegistry.types.getClassSymbol(classSymbol.superClass);
			}
		} catch (e) {
		}

		objectRegistry.types.addClassSymbol(classSymbol);

		classNode.typeParameters.forEach(name => {
			classSymbol.typeParameterSymbols.push(new TypeParameterSymbol(name));
			classScope.defineTypeBinding(name, new TypeVariable(name));
		});

		for (const typeNode of classNode.implementsInterfaces) {
			const interfaceType: Type = wrapType(typeNode, objectRegistry, classScope);
			if (interfaceType instanceof InterfaceRefType) {
				classSymbol.implementsInterfaces.push(interfaceType);
				continue;
			}
			throwTypeError(`Expected interface type, got ${interfaceType}`, typeNode?.span);
		}

		for (const memberNode of classNode.children) {
			if (memberNode.type === ASTNodeType.FIELD && memberNode instanceof ASTFieldNode) {
				const target: Map<string, FieldSymbol> = memberNode.modifiers.static
					? classSymbol.staticFieldSymbols
					: classSymbol.instanceFieldSymbols;

				const fieldSymbol = new FieldSymbol(
					memberNode,
					memberNode.fieldType
						? wrapType(memberNode.fieldType, objectRegistry, classScope)
						: Types.MIXED
				);

				fieldSymbol.owner = classSymbol;

				target.set(fieldSymbol.name, fieldSymbol);
			}

			if ((memberNode.type === ASTNodeType.METHOD || memberNode.type === ASTNodeType.CONSTRUCTOR)
				&& memberNode instanceof ASTMethodNode) {

				const methodScope = new TypeScope(classScope);
				const methodSymbol = new MethodSymbol(memberNode);

				methodSymbol.owner = classSymbol;

				memberNode.typeParameters.forEach(name => {
					methodSymbol.typeParameterSymbols.push(new TypeParameterSymbol(name));
					methodScope.defineTypeBinding(name, new TypeVariable(name));
				});

				methodSymbol.parameterSymbols = memberNode
					.parameters
					.map(parameterNode => this.createParameterSymbol(parameterNode, objectRegistry, methodScope));

				methodSymbol.returnType = memberNode.returnType
					? wrapType(memberNode.returnType, objectRegistry, methodScope)
					: Types.VOID;

				if (memberNode.type === ASTNodeType.CONSTRUCTOR) {
					classSymbol.constructorMethodSymbol = methodSymbol;
				} else {
					const target: Map<string, MethodSymbol> = methodSymbol.isStatic
						? classSymbol.staticMethodSymbols
						: classSymbol.instanceMethodSymbols;

					target.set(memberNode.name, methodSymbol);
				}
			}
		}
	}

	static addInterfaceSymbol(interfaceNode: ASTInterfaceNode, objectRegistry: ObjectRegistry): void {

		if (objectRegistry.types.hasSymbol(interfaceNode.name)) {
			return;
		}

		const interfaceScope = new TypeScope();
		const interfaceSymbol = new InterfaceSymbol(interfaceNode);

		objectRegistry.types.addInterfaceSymbol(interfaceSymbol);

		interfaceNode.typeParameters.forEach(name => {
			interfaceSymbol.typeParameterSymbols.push(new TypeParameterSymbol(name));
			interfaceScope.defineTypeBinding(name, new TypeVariable(name));
		});

		for (const interfaceName of interfaceNode.extendsInterfaces) {
			const interfaceSymbol: InterfaceSymbol = objectRegistry.types.getInteraceSymbol(interfaceName);

			interfaceSymbol.extendsInterfaces.push(interfaceSymbol);
		}

		for (const memberNode of interfaceNode.children) {
			if (memberNode.type === ASTNodeType.FIELD && memberNode instanceof ASTFieldNode) {
				const fieldSymbol = new FieldSymbol(
					memberNode,
					memberNode.fieldType
						? wrapType(memberNode.fieldType, objectRegistry, interfaceScope)
						: Types.MIXED
				);

				fieldSymbol.owner = interfaceSymbol;

				interfaceSymbol.staticFieldSymbols.set(fieldSymbol.name, fieldSymbol);
			}

			if ((memberNode.type === ASTNodeType.METHOD) && memberNode instanceof ASTMethodNode) {

				const methodScope = new TypeScope(interfaceScope);
				const methodSymbol = new MethodSymbol(memberNode);

				methodSymbol.owner = interfaceSymbol;

				memberNode.typeParameters.forEach((name: string): void => {
					methodSymbol.typeParameterSymbols.push(new TypeParameterSymbol(name));
					methodScope.defineTypeBinding(name, new TypeVariable(name));
				});

				methodSymbol.parameterSymbols = memberNode
					.parameters
					.map((parameterNode: ASTParameterNode): ParameterSymbol => this.createParameterSymbol(
						parameterNode,
						objectRegistry,
						methodScope
					));

				methodSymbol.returnType = memberNode.returnType
					? wrapType(memberNode.returnType, objectRegistry, methodScope)
					: Types.VOID;

				interfaceSymbol.instanceMethodSymbols.set(memberNode.name, methodSymbol);
			}
		}
	}

	public static createParameterSymbol(parameterNode: ASTParameterNode, objectRegistry: ObjectRegistry, scope: TypeScope = new TypeScope()): ParameterSymbol {
		const parameterType = parameterNode.typeAnnotation
			? wrapType(parameterNode.typeAnnotation, objectRegistry, scope)
			: Types.MIXED;

		let defaultType: any = null;
		if (parameterNode.defaultValue) {
			defaultType = parameterNode.defaultValue;
		}

		return new ParameterSymbol(
			parameterNode.name,
			parameterType,
			defaultType,
			parameterNode
		);
	}
}
