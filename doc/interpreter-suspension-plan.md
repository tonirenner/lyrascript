# Interpreter Suspension Plan

This document outlines a minimal way to extend the current AST interpreter so LyraScript can remain semantically synchronous while native host operations may pause and later resume execution.

The goal is:

- Lyra code still reads and behaves as if execution is synchronous
- the browser or host scheduler may defer native results
- the interpreter can stop in a controlled way and later continue
- no JavaScript `Promise` semantics leak directly into the Lyra execution model

## Core idea

The current interpreter returns `RuntimeValue` from evaluation methods.

To support controlled pausing, the interpreter needs a second result kind:

- completed execution with a `RuntimeValue`
- suspended execution with a continuation

This means the interpreter API evolves from:

```ts
evalExpression(node): RuntimeValue
```

to something conceptually like:

```ts
evalExpression(node): ExecutionResult
```

The proposed model is represented in:

- [`language/src/core/model/execution_model.ts`](/D:/_repositories/lyrascript/language/src/core/model/execution_model.ts)

## Proposed execution model

### Result types

- `ExecutionValue`
  - normal completed result
- `ExecutionSuspension`
  - execution is paused
  - contains a continuation
- `ExecutionResult`
  - union of both

### Continuation

A continuation receives the eventual `RuntimeValue` and continues evaluation from the point where the interpreter stopped.

Conceptually:

```ts
interface ExecutionContinuation {
    resume(value: RuntimeValue): ExecutionResult;
}
```

That keeps the interpreter in control of the resume path instead of letting raw host `Promise` behavior define execution semantics.

## First incremental integration point

The first safe place to introduce suspension is the native call boundary.

That means starting here:

- `callInstanceMethod(...)`
- `evalStaticCall(...)`
- `evalFunctionCall(...)`

Only native or host-backed operations should be allowed to suspend at first.

Everything else stays synchronous until the propagation layer is in place.

## How propagation would work

Once native calls may suspend, the call sites above them must propagate `ExecutionResult`.

The smallest realistic expansion path is:

### Phase 1

- introduce `ExecutionResult`
- allow only native calls to return suspension
- add helpers to inspect and unwrap results

### Phase 2

propagate suspension through expression evaluation:

- `evalExpression(...)`
- `evalCall(...)`
- `evalBinary(...)`
- `evalUnary(...)`
- `evalAssign(...)`

### Phase 3

propagate suspension through statements and blocks:

- `evalNode(...)`
- `evalBlock(...)`
- `evalIf(...)`
- `evalMatch(...)`
- `evalForeach(...)`

### Phase 4

propagate suspension through method and lambda execution:

- `evalReturn(...)`
- `callInstanceMethod(...)`
- lambda invocation
- constructor execution

## Example shape of a suspendable native call

Today a native call effectively returns a value immediately.

The future shape would be:

1. native host call starts
2. if the value is immediately available:
   - return `CompletedExecution(value)`
3. if the value is deferred:
   - return `SuspendedExecution(...)`

The continuation would contain the remaining interpreter work.

## Why this keeps Lyra semantically synchronous

Lyra code never sees a host `Promise`.

From the language point of view:

- a call happens
- execution pauses internally
- execution resumes later
- the next Lyra statement continues as if the result had arrived synchronously

The pause is a runtime implementation detail, not a language-level programming model.

## Why this is preferable to making the interpreter `async`

Turning the interpreter into a web of `async` functions would make JavaScript `Promise` semantics the real execution model.

That would blur:

- host scheduling
- interpreter control flow
- future VM behavior

The suspension model keeps Lyra's runtime semantics owned by Lyra, not by the JavaScript host.

## Current recommendation

Use this model as the basis for a future interpreter extension, but do not start by rewriting the whole interpreter.

Recommended next concrete step:

1. pick one native call path
2. allow it to return `ExecutionResult`
3. thread suspension through `evalCall(...)`
4. validate the shape before touching the broader evaluation chain

That gives a narrow proof of concept without destabilizing the current interpreter.
