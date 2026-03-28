import {
	ASTAnnotationNode,
	ASTClassNode,
	ASTMethodNode,
	ASTNewNode,
	type ASTNode,
	ASTTypeNode
} from "./shared/ast.ts";
import {Interpreter} from "./interpreter.ts";
import type {ObjectRegistry} from "./shared/runtime_registry.ts";
import type {EventPipeline} from "./shared/event_pipeline.ts";
import type {
	RuntimeInstanceType,
	RuntimeValue,
	ValueScope
} from "./contracts/runtime_model.ts";

export class TestSuites {
	private readonly interpreter: Interpreter;

	constructor(
		private readonly environment: ValueScope,
		private readonly objectRegistry: ObjectRegistry,
		private readonly eventPipeline: EventPipeline
	) {
		this.interpreter = new Interpreter(environment, objectRegistry, eventPipeline);
	}

	run(ast: ASTNode): void {
		for (const node of ast.children) {
			if (node instanceof ASTClassNode) {
				console.log(`Running Test Cases for ${node.name} ...`);
				this.runTestCases(node);
			}
		}
	}

	private runTestCases(classNode: ASTClassNode): void {
		for (const member of classNode.children) {
			if (!(member instanceof ASTMethodNode)) {
				continue;
			}

			const annotation: ASTAnnotationNode | undefined = member.annotations
				?.find((entry: ASTAnnotationNode): boolean => entry.name === 'test');

			if (!annotation) {
				continue;
			}

			this.runTestCase(classNode, member.name, annotation);
		}
	}

	private runTestCase(classNode: ASTClassNode, methodName: string, annotation: ASTAnnotationNode): void {
		const instance: RuntimeInstanceType = this.createTestInstance(classNode);
		const title: string = this.interpreter.evalAnnotation(annotation).title ?? `${classNode.name}.${methodName}`;

		let errorMessage: unknown = null;

		try {
			const method = instance.runtimeClass.findMethod(methodName);
			if (!method) {
				throw new Error(`Method ${methodName} not found on ${classNode.name}`);
			}

			this.interpreter.callInstanceMethod(instance, method, []);
		} catch (error) {
			errorMessage = error;
		}

		if (errorMessage) {
			console.error(`FAILED ${title}, ${String(errorMessage)}`);
			return;
		}

		console.log(`OK ${title}`);
	}

	private createTestInstance(classNode: ASTClassNode): RuntimeInstanceType {
		const instance: RuntimeValue = this.interpreter.evalNew(
			new ASTNewNode([], new ASTTypeNode(ASTTypeNode.KIND_SIMPLE, classNode.name))
		);

		return instance.asRuntimeInstance();
	}
}
