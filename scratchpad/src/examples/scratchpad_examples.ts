import arraysExample from "../../examples/arrays.lyra" with {type: "text"};
import basicsExample from "../../examples/basics.lyra" with {type: "text"};
import classesExample from "../../examples/classes-and-inheritance.lyra" with {type: "text"};
import controlFlowExample from "../../examples/control-flow.lyra" with {type: "text"};
import genericsExample from "../../examples/generics.lyra" with {type: "text"};
import incrementExample from "../../examples/increment-decrement.lyra" with {type: "text"};
import interfacesExample from "../../examples/interfaces.lyra" with {type: "text"};
import lambdasExample from "../../examples/lambdas.lyra" with {type: "text"};
import matchExample from "../../examples/match.lyra" with {type: "text"};
import operatorExample from "../../examples/operator.lyra" with {type: "text"};
import testSuiteExample from "../../examples/tests-suite.lyra" with {type: "text"};
import vdomExample from "../../examples/vdom.lyra" with {type: "text"};

export interface ScratchpadExample {
	id: string;
	label: string;
	code: string;
	sourceUrl: string;
	runMode?: "program" | "tests";
}

export const SCRATCHPAD_EXAMPLES: ScratchpadExample[] = [
	{id: "basics", label: "Basics", code: basicsExample, sourceUrl: "/lyrascript/scratchpad/examples/basics.lyra"},
	{id: "control-flow", label: "Control Flow", code: controlFlowExample, sourceUrl: "/lyrascript/scratchpad/examples/control-flow.lyra"},
	{id: "generics", label: "Generics", code: genericsExample, sourceUrl: "/lyrascript/scratchpad/examples/generics.lyra"},
	{id: "increment", label: "Inc/Dec", code: incrementExample, sourceUrl: "/lyrascript/scratchpad/examples/increment-decrement.lyra"},
	{id: "interfaces", label: "Interfaces", code: interfacesExample, sourceUrl: "/lyrascript/scratchpad/examples/interfaces.lyra"},
	{id: "arrays", label: "Arrays", code: arraysExample, sourceUrl: "/lyrascript/scratchpad/examples/arrays.lyra"},
	{id: "lambdas", label: "Lambdas", code: lambdasExample, sourceUrl: "/lyrascript/scratchpad/examples/lambdas.lyra"},
	{id: "classes", label: "Classes", code: classesExample, sourceUrl: "/lyrascript/scratchpad/examples/classes-and-inheritance.lyra"},
	{id: "match", label: "Match", code: matchExample, sourceUrl: "/lyrascript/scratchpad/examples/match.lyra"},
	{id: "operator", label: "Operators", code: operatorExample, sourceUrl: "/lyrascript/scratchpad/examples/operator.lyra"},
	{
		id: "tests-suite",
		label: "Tests",
		code: testSuiteExample,
		sourceUrl: "/lyrascript/scratchpad/examples/tests-suite.lyra",
		runMode: "tests"
	},
	{id: "vdom", label: "VDOM", code: vdomExample, sourceUrl: "/lyrascript/scratchpad/examples/vdom.lyra"}
];

export const DEFAULT_SCRATCHPAD_EXAMPLE_ID = "vdom";
