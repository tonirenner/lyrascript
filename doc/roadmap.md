# LyraScript Roadmap

## Current Status

### Done

#### Language and syntax

- [x] Tokenizer for keywords, identifiers, numbers, strings, booleans, annotations, and punctuation
- [x] Parser with expression precedence
- [x] Variable declarations and assignments
- [x] Member access, method calls, and index access
- [x] Classes, constructors, fields, methods, static members
- [x] Inheritance with `extends`
- [x] `this`, `super()`, and `super.method()`
- [x] Nullable types with `?`
- [x] Arrays
- [x] Lambdas
- [x] `if / else`
- [x] `match`
- [x] `foreach`
- [x] `while`
- [x] `break`
- [x] `continue`
- [x] VDOM syntax and embedded expressions

#### Runtime and type system

- [x] Interpreter with separate handling for instance, static, native, and lambda calls
- [x] Recursive method resolution across inheritance
- [x] Native class bootstrap
- [x] Native function bootstrap
- [x] Runtime object registry and runtime state infrastructure
- [x] Type checker for variables, parameters, return types, assignments, and readonly checks
- [x] Visibility checks in the type checker
- [x] Primitive autoboxing support for native runtime classes

#### Loading and program pipeline

- [x] Native imports
- [x] File-based imports
- [x] Recursive dependency loading
- [x] Deterministic pipeline in `LyraScriptProgram`
- [x] Separation of runtime bootstrap and dependency resolution
- [x] Loader abstraction for browser fetch and filesystem access

#### Tests and tooling

- [x] Lyra-native test framework via `@test`
- [x] Bun-based component tests under `language/tests`
- [x] Coverage for tokenizer, parser, interpreter, event pipeline, and runtime state
- [x] Extended `tests/tests.lyra` coverage for current language features
- [x] Project-level code style docs and PhpStorm importable config

#### Core structure

- [x] `core/syntax` for AST, grammar, source, tokenizer
- [x] `core/model` for AST-independent runtime model contracts
- [x] `core/infrastructure` for runtime infrastructure
- [x] `core/interfaces` for AST-related interfaces
- [x] `core/loading` for dependency and file loading
- [x] `core/testing` for Lyra test execution
- [x] `host/engine`, `host/runtime`, `host/dom`, `host/events`, and `host/vdom`

#### Bytecode and CLI

- [x] Initial bytecode model and opcode set
- [x] Initial AST to bytecode compiler for global statement and expression flow
- [x] Initial stack-based VM
- [x] Bytecode compile and execute entrypoints in `LyraScriptProgram`
- [x] CLI scripts for:
  - [x] `.lyra` source execution
  - [x] `.lyra` to `.lyrab` compilation
  - [x] `.lyrab` VM execution

#### Scratchpad

- [x] Scratchpad source layout cleaned up into `app`, `output`, and `tree`
- [x] AST tree builder extracted
- [x] IDE-style AST tree expand/collapse behavior
- [x] Live VDOM preview below the editor

## Next

### Immediate priorities

- [ ] browser interfaces wrapped and exposed as native classes instead of using raw browser APIs directly
- [ ] design and implement a real async/promise model that does not break interpreter and VM runtime semantics
- [ ] define Lyra error handling boundaries between runtime/native exceptions, modeled host/IO failures, and internal control flow
- [ ] scratchpad syntax highlighting
- [ ] scratchpad token-to-tree highlighting
- [ ] scratchpad step debugger
- [ ] clean input/output system for CLI, browser, tests, and embedding
- [ ] extend `match` with boolean logic / predicate-style matching
- [ ] extend `match` with regex support for string-oriented matching

### Bytecode and VM

- [ ] compile classes, methods, and calls into bytecode
- [ ] extend the VM beyond the current global statement and expression subset
- [ ] define a stable `.lyrab` module format beyond the current bootstrap JSON serialization
- [ ] decide how debug metadata and source mapping should be attached to bytecode

### Runtime and language features

- [ ] `do-while`
- [ ] `try / catch / finally` support in Lyra
- [ ] stronger interface conformance checks in the type checker
- [ ] interpreter-level visibility enforcement
- [ ] broader negative tests for invalid programs

### Architecture cleanup

- [ ] review `core/shared` and decide whether it should be renamed to a more specific runtime-support area
- [ ] decide whether `reflection.ts` should stay in `core` root or move into a dedicated runtime/introspection area
- [ ] review `host/` boundaries against `core/` and `library/`

### Tooling

- [ ] restore a consistent local `check` workflow where `tsc --noEmit` is available in every shell
- [ ] keep Bun tests in sync with `tests/tests.lyra`
- [ ] improve developer docs around build, test, and runtime architecture
- [ ] keep scratchpad and CLI workflows aligned with the current runtime architecture

## Notes

- The formatter configuration is intentionally pragmatic. Line length `120` is a target, not a strict guarantee of the JetBrains formatter.
- Vertically aligned assignment blocks are not part of the enforced project style.
- The current focus is correctness, structure, language maturity, and runtime model clarity before IDE/plugin work.
- Async support should be treated as a runtime model decision, not just as another native API wrapper.
- Runtime and native failures can stay exception-based, but expected host/IO failures should eventually be modeled more explicitly.
- Internal interpreter and VM control flow such as `return` and suspension/resume should stay separate from user-facing error semantics.
