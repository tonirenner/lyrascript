# JetBrains Code Style

These files are intended for PhpStorm or IntelliJ projects where the `.idea` directory is not committed.

## Files

- `jetbrains-Project.xml`
- `jetbrains-codeStyleConfig.xml`

## Usage

### Import into PhpStorm

1. Open `Settings -> Editor -> Code Style`
2. Click the gear icon
3. Choose `Import Scheme -> IntelliJ IDEA code style XML`
4. Select `doc/code-style/jetbrains-Project.xml`

### Copy into the project manually

Copy the files into `.idea/codeStyles/` and rename them:

- `jetbrains-Project.xml` to `Project.xml`
- `jetbrains-codeStyleConfig.xml` to `codeStyleConfig.xml`

## Scope and Limits

The configuration improves wrapping and alignment for TypeScript, but it does not enforce rigid column alignment for free-standing assignment blocks.

The configured `120` character line length should be treated as a target, not a strict guarantee from the formatter. Some TypeScript constructs remain longer after automatic formatting.

The preferred style is stable, compact formatting rather than manually aligned `=` columns.
