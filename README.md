# LyraScript

LyraScript is a modern scripting language with a static type system and an integrated VDOM runtime.

It combines:

- A custom parser and interpreter
- A static TypeChecker
- Class and interface support with generics
- A minimal Virtual DOM runtime
- A clean separation between language engine and host environment

Lyra is written in TypeScript and designed to be both expressive and predictable.

---

## ✨ Goals

Lyra aims to:

- Provide a clean, statically typed scripting language
- Keep runtime and host environment strictly separated
- Avoid implicit magic in state and rendering
- Stay small, understandable, and hackable

---

## 🧠 Architecture

Lyra consists of two major layers:

### 1. Language Engine

- Parser
- TypeChecker
- Interpreter
- Symbol & Type Registry

This layer has no DOM knowledge and can run in different environments.

### 2. Application Runtime

- VDOM renderer
- Event binding
- State system
- Mount management

This layer connects Lyra to the browser (or other hosts).

---

## 🚀 Getting Started

To install dependencies:

```bash
bun install
```

To build:

```bash
bun run lyra:build
```

To run in a browser:

```
open playground.html
```

This project was created using `bun init` in bun v1.3.9. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
