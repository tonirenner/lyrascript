import {ASTClassNode, ASTImportNode, ASTNode} from "./syntax/ast.ts";
import {NativeClasses} from "../library/native_classes.ts";
import {NativeFunctions} from "../library/native_functions.ts";
import type {NativeClass} from "../library/native_class.ts";
import {throwDependencyError} from "./infrastructure/errors.ts";
import type {ObjectRegistry} from "./infrastructure/runtime_registry.ts";
import type {SourceSpan} from "./syntax/source.ts";
import type {RuntimeClassType, ValueScope} from "./model/runtime_model.ts";
import {Value} from "./model/runtime_model.ts";

const nativeClasses = new NativeClasses();
const nativeFunctions = new NativeFunctions();

export class RuntimeBootstrap {
	constructor(
		private readonly environment: ValueScope,
		private readonly objectRegistry: ObjectRegistry
	) {
	}

	public initialize(): void {
		this.registerNativeClasses();
		this.registerNativeFunctions();
		this.declareNativeClassTypes();
	}

	public loadNativeImports(ast: ASTNode): void {
		for (const node of ast.children) {
			if (!(node instanceof ASTImportNode) || node.from !== null) {
				continue;
			}

			const className: string | undefined = node.names[0];
			if (!className) {
				throwDependencyError(`Invalid import node ${node.type}.`, node.span);
			}

			this.loadNativeClass(className, node.span);
		}
	}

	public finalize(): void {
		this.populateNativeClassTypes();
	}

	private loadNativeClass(className: string, span: SourceSpan | null = null): void {
		const nativeClass: NativeClass | null = nativeClasses.registry.get(className) || null;
		if (!nativeClass) {
			throwDependencyError(`Unknown native class ${className}`, span);
		}

		const classDef: RuntimeClassType = nativeClass.getRuntimeClass();
		if (this.objectRegistry.classes.has(className)) {
			return;
		}

		this.objectRegistry.classes.set(className, classDef);
		this.declareNativeClassType(className);
		this.populateNativeClassType(className);
		this.environment.define(className, Value(classDef, className, classDef));
	}

	private declareNativeClassType(className: string): void {
		const nativeClass: NativeClass | null = nativeClasses.registry.get(className) || null;
		if (!nativeClass || this.objectRegistry.types.hasSymbol(className)) {
			return;
		}

		const ast = nativeClass.getAst();
		for (const node of ast.children) {
			if (node instanceof ASTClassNode && node.name === className) {
				this.objectRegistry.types.declareClassSymbol(node);
				return;
			}
		}
	}

	private populateNativeClassType(className: string): void {
		const nativeClass: NativeClass | null = nativeClasses.registry.get(className) || null;
		if (!nativeClass) {
			return;
		}

		const ast = nativeClass.getAst();
		for (const node of ast.children) {
			if (node instanceof ASTClassNode && node.name === className) {
				this.objectRegistry.types.populateClassSymbol(node, this.objectRegistry);
				return;
			}
		}
	}

	private registerNativeClasses(): void {
		for (const nativeClass of nativeClasses.registry.values()) {
			if (!nativeClass.isAutoloadAble) {
				continue;
			}

			const runtimeClass = nativeClass.getRuntimeClass();

			this.objectRegistry.classes.set(nativeClass.name, runtimeClass);
			this.environment.define(nativeClass.name, Value(runtimeClass, runtimeClass.className, runtimeClass));
		}
	}

	private declareNativeClassTypes(): void {
		for (const nativeClass of nativeClasses.registry.values()) {
			if (!nativeClass.isAutoloadAble) {
				continue;
			}

			this.declareNativeClassType(nativeClass.name);
		}
	}

	private populateNativeClassTypes(): void {
		for (const nativeClass of nativeClasses.registry.values()) {
			if (!nativeClass.isAutoloadAble) {
				continue;
			}

			this.populateNativeClassType(nativeClass.name);
		}
	}

	private registerNativeFunctions(): void {
		const globalFunctions = nativeFunctions.getGlobalFunctions();
		const globalFunctionTypes = nativeFunctions.getGlobalFunctionTypes();

		for (const name in globalFunctions) {
			this.environment.define(
				name,
				Value(
					globalFunctions[name] as Function,
					globalFunctionTypes.get(name).returnType.name
				)
			);
		}
	}
}
