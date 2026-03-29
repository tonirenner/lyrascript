import {resolve} from "node:path";
import {pathToFileURL} from "node:url";
import {EventPipeline} from "../src/core/infrastructure/event_pipeline.ts";
import {serializeBytecodeModule} from "../src/core/bytecode/bytecode_module.ts";
import {FileSystemLoader} from "../src/core/loading/file_loader.ts";
import {LyraScriptProgram} from "../src/core/program.ts";
import {Source} from "../src/core/syntax/source.ts";

function usage(): never {
	console.error("Usage: bun run language/bin/compile.ts <input.lyra> [output.lyrab]");
	process.exit(1);
}

const [, , inputArgument, outputArgument] = Bun.argv;

if (!inputArgument) {
	usage();
}

const inputPath: string = resolve(inputArgument);
const outputPath: string = outputArgument
                          ? resolve(outputArgument)
                          : inputPath.replace(/\.lyra$/i, ".lyrab");

if (outputPath === inputPath) {
	console.error("Output path must not be identical to input path.");
	process.exit(1);
}

const code = await Bun.file(inputPath).text();
const source = new Source(code, pathToFileURL(inputPath).toString());
const program = new LyraScriptProgram(false, new EventPipeline(), new FileSystemLoader());
const module = await program.compileBytecode(source);

await Bun.write(outputPath, serializeBytecodeModule(module));

console.log(`Compiled ${inputPath} -> ${outputPath}`);
