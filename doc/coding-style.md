# Coding Style

## TypeScript

- The formatter baseline is the project-wide [`.editorconfig`](D:\_repositories\lyrascript\.editorconfig).
- Use tabs with a width of `4`.
- Target a line length of `120` characters where practical.
- JSON and YAML files use `2` spaces.

## Team Conventions

- Method names should be self-explanatory and describe intent rather than implementation details.
- Prefer early return or early exit in branching logic where it keeps control flow clearer.
- Do not vertically align assignment blocks through manual spacing. Use the normal compact style with exactly one space around `=`.
- When a parameter list becomes hard to read, and typically from `4` parameters onward, format parameters vertically.

## Formatter Limits

- PhpStorm can load the general formatting baseline from `.editorconfig`.
- The JetBrains TypeScript formatter improves wrapping and alignment for multiline constructs, but it does not reliably enforce vertical column alignment for free-standing assignment blocks.
- The `120` character limit is a target, not a hard guarantee. Some TypeScript constructs, especially long generic types or template strings, may remain longer after automatic formatting.
- Rules such as early return and self-explanatory naming are team and review conventions, not formatter rules.
