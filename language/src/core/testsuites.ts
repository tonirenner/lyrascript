import {ASTAnnotationNode, ASTClassNode, ASTMethodNode, ASTNode} from "./ast";
import {callInstanceMethod, createInstanceFromNode, evalAnnotationProperties} from "./interpreter_runtime";
import type {Environment} from "./interpreter_objects";
import type {ObjectRegistry} from "./interpreter_registry";

export class TestSuites {
	environment: Environment;
	objectRegistry: ObjectRegistry;

	constructor(environment: Environment, objectRegistry: ObjectRegistry) {
		this.environment    = environment;
		this.objectRegistry = objectRegistry;
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
				const annotation = member.annotations?.find(a => a.name === 'test');
				if (!annotation) {
					continue;
				}
				this.runTestCase(classNode, member, annotation);
			}
		}
	}

	private runTestCase(classNode: ASTClassNode, methodNode: ASTMethodNode, annotation: ASTAnnotationNode): void {
		const instance   = createInstanceFromNode(classNode);
		const properties = evalAnnotationProperties(annotation);

		const title = properties.title ?? `${classNode.name}.${methodNode.name}`;

		let errorMessage = null;

		try {
			callInstanceMethod(instance, methodNode, [], this.objectRegistry, this.environment);
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
