# LyraScript Handbook

This handbook describes the current implemented language surface of LyraScript based on the repository state, the runtime pipeline, and the active test suite.

It is intended as a practical reference, not as a speculative design document.

## Overview

LyraScript is a statically checked scripting language with:

- classes, fields, methods, constructors, and inheritance
- nullable types
- arrays
- lambdas
- control flow with `if`, `match`, and `foreach`
- native runtime classes such as `String`, `Number`, `Boolean`, `Array`, `Assert`, `System`, `Event`, and `State`
- a built-in `@test`-based language test mechanism
- a browser-oriented host/runtime layer with VDOM support

The current execution pipeline is:

```text
parse -> runtime bootstrap -> dependency resolve -> typecheck -> execute
```

## Comments

Single-line comments are supported:

```lyra
// comment
```

## Types

### Primitive types

```lyra
number
string
boolean
null
```

### Nullable types

Nullable types are written with `?`:

```lyra
let count: number? = null;
let name: string? = "Lyra";
```

Nullable values can later receive a compatible non-null value:

```lyra
let current: number? = null;
current = 5;
```

### Class types

Class names can be used as type annotations:

```lyra
let user: User = new User("Toni", 33);
let maybeUser: User? = null;
```

### Generic types

Generic type syntax is supported for class types:

```lyra
let items: Array<number> = [1, 2, 3];
let names: Array<string> = ["a", "b"];
```

## Variables

Variables are declared with `let`:

```lyra
let a: number = 5;
let b: string = "hello";
let active: boolean = true;
```

Assignments are supported on variables and members:

```lyra
let total: number = 0;
total = total + 1;

this.value = this.value + 1;
```

## Operators

### Arithmetic

```lyra
+ - * / %
```

Operator precedence is supported:

```lyra
1 + 2 * 3
(1 + 2) * 3
```

### Comparison

```lyra
< <= > >= == !=
```

### Logical

```lyra
&& || !
```

Examples:

```lyra
a < b
a == b
true && false
!flag
```

## Control Flow

### if / else / else if

```lyra
if (condition) {
    // then
} else if (otherCondition) {
    // else if
} else {
    // else
}
```

### match

`match` is a statement-based branch construct:

```lyra
match (value) {
    1: {
        result = "one";
    }
    2: {
        result = "two";
    }
    default: {
        result = "other";
    }
}
```

Current behavior:

- `match` is a statement, not an expression
- cases do not fall through
- `default` is optional

### foreach

`foreach` iterates over supported iterable objects, including arrays:

```lyra
let items: Array<number> = [1, 2, 3];
let sum: number = 0;

foreach (item in items) {
    sum = sum + item;
}
```

## Classes

### Class declaration

```lyra
class User {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}
```

### Fields

Fields may be declared with visibility and modifiers:

```lyra
class Config {
    public static readonly VERSION: string = "1.0";
}
```

Supported modifiers in the current language surface include:

- `public`
- `private`
- `static`
- `readonly`
- `open`

### Methods

```lyra
class MathBox {
    public add(a: number, b: number): number {
        return a + b;
    }
}
```

### Constructors

Constructors are declared with `constructor`:

```lyra
class User {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}
```

### Inheritance

Inheritance with `extends` is supported:

```lyra
open class Person {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class User extends Person {
    constructor(name: string) {
        super(name);
    }
}
```

Supported runtime behavior includes:

- inherited method lookup
- `super()` in constructors
- `super.method()` in methods

## Member Access and Calls

Member access:

```lyra
obj.field
obj.method()
```

Chained calls are supported:

```lyra
s.toUpperCase().toLowerCase().toString();
```

Static calls are supported:

```lyra
User.getCount();
```

## Functions and Lambdas

### Default parameters

```lyra
public add(a: number, b: number = 2): number {
    return a + b;
}
```

### Lambda expressions

```lyra
let add = { a: number, b: number -> a + b };
```

An explicit return type can be written before the lambda body:

```lyra
let add = { a: number, b: number -> number: a + b };
```

Lambdas can be passed as arguments:

```lyra
this.add(2, 3, { a: number, b: number -> a + b });
```

## Arrays

### Array literals

```lyra
let items: Array<number> = [1, 2, 3];
```

### Index access

```lyra
items[0]
```

### Native array methods

The current native `Array` behavior used in tests includes:

- `length()`
- `get(index)`
- `push(value)`
- `removeAt(index)`

Example:

```lyra
let items: Array<number> = [1];
items.push(2);
items.push(3);

Assert.isTrue(items.get(2) == 3);
```

## Native Runtime Classes

The current runtime includes native classes and functions registered during bootstrap.

Examples covered by tests and runtime code:

- `String`
  - `toUpperCase()`
  - `toLowerCase()`
  - `toString()`
- `Number`
  - `toString()`
- `Boolean`
  - `toString()`
- `Array`
  - indexing and collection methods
- `Assert`
- `System`
- `Event`
- `State`

## Imports

### Native imports

```lyra
import System;
import Assert;
```

### File-based imports

```lyra
import {Person, User} from "/lyrascript/tests/user.lyra";
```

Dependencies are resolved before execution.

## Tests

LyraScript has a language-integrated test style based on annotations.

Example:

```lyra
class StringNativeTests {

    @test ( title = "converts string to uppercase correctly" )
    public upper(): void {
        let s: string = "hello";
        Assert.isTrue(s.toUpperCase().toString() == "HELLO");
    }
}
```

Current test layers in the repository:

- language-level tests in [`tests/tests.lyra`](/D:/_repositories/lyrascript/tests/tests.lyra)
- Bun-based component tests in [`language/tests`](/D:/_repositories/lyrascript/language/tests)

## VDOM and Host Features

LyraScript includes syntax and runtime support for VDOM-style nodes.

The current implementation includes:

- VDOM syntax parsing
- embedded expressions with `{...}`
- runtime VNode creation
- host-side rendering support in [`language/src/host`](/D:/_repositories/lyrascript/language/src/host)

This area exists, but the language handbook should still be read primarily as a core-language reference.

## Current Limits

The following are not established as complete language features yet:

- `while`
- `do-while`
- fully documented interface semantics
- fully documented generic semantics beyond current class-based usage
- hard guarantees for every inferred typing edge case
- interpreter-level visibility enforcement as a fully documented runtime rule

## Notes

- This handbook reflects the current implemented behavior, not an aspirational future grammar.
- When the code and this document disagree, treat the code and tests as authoritative and update the handbook.
