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

## Next

### Runtime and language features

- [ ] `while`
- [ ] `do-while`
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

## Notes

- The formatter configuration is intentionally pragmatic. Line length `120` is a target, not a strict guarantee of the JetBrains formatter.
- Vertically aligned assignment blocks are not part of the enforced project style.
- The current focus is correctness, structure, and language maturity before IDE/plugin work.
