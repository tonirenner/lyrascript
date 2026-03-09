import {ASTAnnotationNode, ASTClassNode, ASTMethodNode, ASTNode} from "./shared/ast.js";
import {callInstanceMethod, evalAnnotationProperties} from "./interpreter/evaluation.js";
import type {ObjectRegistry} from "./shared/runtime_registry.js";
import type {EventPipeline} from "./event/pipeline.js";
import {ClassDefinition, type Environment, RuntimeInstance} from "./shared/runtime_model.ts";
import {ASTModelFactory} from "./shared/ast_model_factory.ts";
import {ASTRuntimeInstanceFactory} from "./shared/ast_instance_factory.ts";

export class TestSuites {
	private readonly environment: Environment;
	private readonly objectRegistry: ObjectRegistry;
	private readonly eventPipeline: EventPipeline;

	constructor(environment: Environment, objectRegistry: ObjectRegistry, eventPipeline: EventPipeline) {
		this.environment = environment;
		this.objectRegistry = objectRegistry;
		this.eventPipeline = eventPipeline;
	}

	run(ast: ASTNode): void {
		for (const node of ast.children) {
			if (node instanceof ASTClassNode) {
				console.log(`🧪 Running Test Cases for ${node.name} ...`);
				this.runTestCases(node);
			}
		}
	}

	private runTestCases(classNode: ASTClassNode): void {
		for (const member of classNode.children) {
			if (member instanceof ASTMethodNode) {
				const annotation: ASTAnnotationNode | undefined = member.annotations
				                                                        ?.find(annotation => annotation.name === 'test');
				if (!annotation) {
					continue;
				}

				this.runTestCase(classNode, member.name, annotation);
			}
		}
	}

	private runTestCase(classNode: ASTClassNode, methodName: string, annotation: ASTAnnotationNode): void {

		const classDef: ClassDefinition = ASTModelFactory.createClass(classNode)
		const instance: RuntimeInstance = ASTRuntimeInstanceFactory.newRuntimeInstanceWithoutArguments(
			classDef,
			this.objectRegistry,
			this.environment,
			this.eventPipeline
		);

		const properties: { [index: string]: any } = evalAnnotationProperties(annotation);
		const title: string = properties.title ?? `${classNode.name}.${methodName}`;

		let errorMessage = null;

		try {
			callInstanceMethod(
				instance,
				instance.findMethod(methodName),
				[],
				this.objectRegistry,
				this.environment,
				this.eventPipeline
			);
		} catch (error) {
			errorMessage = error;
		}

		if (errorMessage) {
			console.error(` ❌ ${title}, ${errorMessage}`);
		} else {
			console.log(` ✅ ${title}`);
		}
	}
}
