![LyraScript](icons/lyrascript.svg)

LyraScript is a statically checked scripting language with its own parser, type checker, interpreter, and browser-oriented VDOM runtime.

The language reference is available in the [Handbook](./doc/handbook.md).

## Overview

LyraScript currently includes:

- classes, fields, methods, constructors, and inheritance
- static type checking
- arrays, lambdas, and control flow
- VDOM syntax for browser-oriented UI work
- a scratchpad for trying the language directly

## Getting Started

Install dependencies:

```bash
bun install
```

Build the project:

```bash
bun run lyra:build
bun run scratchpad:build
```

## Testing and Trying It Out

To try the language, use the scratchpad only:

```bash
bun run scratchpad:build
```

Then open [scratchpad/index.html](/D:/_repositories/lyrascript/scratchpad/index.html) in a browser or try it online https://lyrascript.github.io/.

There you can write and run Lyra code and inspect output, errors, tokens, the AST, and the live VDOM preview.

## Structure

- [`language/`](/D:/_repositories/lyrascript/language): language core, type checker, interpreter, VM
- [`scratchpad/`](/D:/_repositories/lyrascript/scratchpad): browser scratchpad for testing
- [`doc/`](/D:/_repositories/lyrascript/doc): project documentation
