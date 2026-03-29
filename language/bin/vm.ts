import {resolve} from "node:path";
import {EventPipeline} from "../src/core/infrastructure/event_pipeline.ts";
import {deserializeBytecodeModule} from "../src/core/bytecode/bytecode_module.ts";
import {FileSystemLoader} from "../src/core/loading/file_loader.ts";
import {LyraScriptProgram} from "../src/core/program.ts";

function usage(): never {
	console.error("Usage: bun run language/bin/vm.ts <input.lyrab>");
	process.exit(1);
}

const [, , inputArgument] = Bun.argv;

if (!inputArgument) {
	usage();
}

const inputPath: string = resolve(inputArgument);
const serializedModule = await Bun.file(inputPath)
                                  .text();
const module = deserializeBytecodeModule(serializedModule);
const program = new LyraScriptProgram(false, new EventPipeline(), new FileSystemLoader());

await program.executeBytecodeModule(module);
