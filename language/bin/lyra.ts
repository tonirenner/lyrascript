import {resolve} from "node:path";
import {pathToFileURL} from "node:url";
import {EventPipeline} from "../src/core/infrastructure/event_pipeline.ts";
import {FileSystemLoader} from "../src/core/loading/file_loader.ts";
import {LyraScriptProgram} from "../src/core/program.ts";
import {Source} from "../src/core/syntax/source.ts";

function usage(): never {
	console.error("Usage: bun run language/bin/lyra.ts <input.lyra>");
	process.exit(1);
}

const [, , inputArgument] = Bun.argv;

if (!inputArgument) {
	usage();
}

const inputPath: string = resolve(inputArgument);
const source = new Source(
	await Bun.file(inputPath).text(),
	pathToFileURL(inputPath).toString()
);

const program = new LyraScriptProgram(false, new EventPipeline(), new FileSystemLoader());

await program.executeSource(source);
