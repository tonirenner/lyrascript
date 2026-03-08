import {ASTAnnotationNode, ASTClassNode, ASTMethodNode, ASTNode} from "./ast";
import {callInstanceMethod, evalAnnotationProperties} from "./interpreter/evaluation";
import {ClassDefinition, type Environment, Instance} from "./runtime/objects";
import type {ObjectRegistry} from "./runtime/registry";
import type {EventPipeline} from "./event/pipeline";

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
				this.runTestCase(classNode, member, annotation);
			}
		}
	}

	private runTestCase(classNode: ASTClassNode, methodNode: ASTMethodNode, annotation: ASTAnnotationNode): void {
		const instance: Instance = ClassDefinition.fromAST(classNode)
		                                          .constructNewInstanceWithoutArguments(
			                                          this.objectRegistry,
			                                          this.environment,
			                                          this.eventPipeline
		                                          );

		const properties: { [index: string]: any } = evalAnnotationProperties(annotation);
		const title: string = properties.title ?? `${classNode.name}.${methodNode.name}`;

		let errorMessage = null;

		try {
			callInstanceMethod(instance, methodNode, [], this.objectRegistry, this.environment, this.eventPipeline);
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
