// language/src/core/grammar.ts
class GRAMMAR {
  static IMPORT = "import";
  static FROM = "from";
  static LET = "let";
  static OPEN = "open";
  static CLASS = "class";
  static INTERFACE = "interface";
  static EXTENDS = "extends";
  static IMPLEMENTS = "implements";
  static CONSTRUCTOR = "constructor";
  static NEW = "new";
  static THIS = "this";
  static PUBLIC = "public";
  static PRIVATE = "private";
  static STATIC = "static";
  static READONLY = "readonly";
  static RETURN = "return";
  static SUPER = "super";
  static TRUE = "true";
  static FALSE = "false";
  static IF = "if";
  static ELSE = "else";
  static MATCH = "match";
  static DEFAULT = "default";
  static FOREACH = "foreach";
  static IN = "in";
  static NULL = "null";
  static VDOM = "vdom";
  static BRACKET_SQUARE_OPEN = "[";
  static BRACKET_SQUARE_CLOSE = "]";
  static BRACE_OPEN = "{";
  static BRACE_CLOSE = "}";
  static PARENTHESES_OPEN = "(";
  static PARENTHESES_CLOSE = ")";
  static SEMICOLON = ";";
  static COLON = ":";
  static COMMA = ",";
  static ARROW = "->";
  static DOT = ".";
  static ASSIGN = "=";
  static PLUS = "+";
  static MINUS = "-";
  static DIVIDE = "/";
  static MULTIPLY = "*";
  static MODULUS = "%";
  static EXCLAMATION_MARK = "!";
  static QUESTION_MARK = "?";
  static LESS_THAN = "<";
  static GREATER_THAN = ">";
  static LESS_EQUAL = "<=";
  static GREATER_EQUAL = ">=";
  static EQUAL = "==";
  static NOT_EQUAL = "!=";
  static AND = "&&";
  static OR = "||";
  static KEYWORDS = [
    GRAMMAR.IMPORT,
    GRAMMAR.FROM,
    GRAMMAR.OPEN,
    GRAMMAR.CLASS,
    GRAMMAR.INTERFACE,
    GRAMMAR.EXTENDS,
    GRAMMAR.IMPLEMENTS,
    GRAMMAR.PUBLIC,
    GRAMMAR.PRIVATE,
    GRAMMAR.STATIC,
    GRAMMAR.READONLY,
    GRAMMAR.RETURN,
    GRAMMAR.LET,
    GRAMMAR.NEW,
    GRAMMAR.THIS,
    GRAMMAR.IF,
    GRAMMAR.ELSE,
    GRAMMAR.MATCH,
    GRAMMAR.DEFAULT,
    GRAMMAR.FOREACH,
    GRAMMAR.IN,
    GRAMMAR.NULL,
    GRAMMAR.VDOM
  ];
  static ARITHMETIC = [
    GRAMMAR.PLUS,
    GRAMMAR.MINUS,
    GRAMMAR.DIVIDE,
    GRAMMAR.MULTIPLY,
    GRAMMAR.MODULUS
  ];
  static COMPARISON = [
    GRAMMAR.LESS_THAN,
    GRAMMAR.GREATER_THAN,
    GRAMMAR.LESS_EQUAL,
    GRAMMAR.GREATER_EQUAL
  ];
  static EQUALITY = [
    GRAMMAR.EQUAL,
    GRAMMAR.NOT_EQUAL
  ];
  static LOGICAL = [
    GRAMMAR.AND,
    GRAMMAR.OR
  ];
  static OPERATORS = [
    GRAMMAR.EXCLAMATION_MARK,
    GRAMMAR.QUESTION_MARK,
    GRAMMAR.ARROW,
    GRAMMAR.DOT,
    GRAMMAR.ASSIGN,
    GRAMMAR.PLUS,
    GRAMMAR.MINUS,
    GRAMMAR.DIVIDE,
    GRAMMAR.MULTIPLY,
    GRAMMAR.MODULUS,
    GRAMMAR.LESS_THAN,
    GRAMMAR.GREATER_THAN,
    GRAMMAR.LESS_EQUAL,
    GRAMMAR.GREATER_EQUAL,
    GRAMMAR.EQUAL,
    GRAMMAR.NOT_EQUAL,
    GRAMMAR.AND,
    GRAMMAR.OR
  ];
  static MATH_OPERATORS = [
    GRAMMAR.PLUS,
    GRAMMAR.MINUS,
    GRAMMAR.DIVIDE,
    GRAMMAR.MULTIPLY,
    GRAMMAR.MODULUS
  ];
  static LOGIC_OPERATORS = [
    GRAMMAR.LESS_THAN,
    GRAMMAR.GREATER_THAN,
    GRAMMAR.LESS_EQUAL,
    GRAMMAR.GREATER_EQUAL,
    GRAMMAR.EQUAL,
    GRAMMAR.NOT_EQUAL,
    GRAMMAR.AND,
    GRAMMAR.OR
  ];
  static PUNCTUATIONS = [
    GRAMMAR.BRACKET_SQUARE_OPEN,
    GRAMMAR.BRACKET_SQUARE_CLOSE,
    GRAMMAR.BRACE_OPEN,
    GRAMMAR.BRACE_CLOSE,
    GRAMMAR.PARENTHESES_OPEN,
    GRAMMAR.PARENTHESES_CLOSE,
    GRAMMAR.SEMICOLON,
    GRAMMAR.COLON,
    GRAMMAR.COMMA
  ];
}

class TYPE_ENUM {
  static MIXED = "mixed";
  static VOID = "void";
  static NUMBER = "number";
  static STRING = "string";
  static BOOLEAN = "boolean";
  static ARRAY = "array";
  static NULL = "null";
}

class Rules {
  static KEYWORDS = new Set(GRAMMAR.KEYWORDS);
  static OPERATORS = new Set(GRAMMAR.OPERATORS);
  static PUNCTUATIONS = new Set(GRAMMAR.PUNCTUATIONS);
  static COMMENT_LINE = "//";
  isAlpha(char) {
    return /[a-z_]/i.test(char);
  }
  isNumeric(char) {
    return /[0-9]/.test(char);
  }
  isAlphaNumeric(char) {
    return this.isAlpha(char) || this.isNumeric(char);
  }
  isWhitespace(char) {
    return /\s/.test(char);
  }
}

class TokenType {
  static COMMENT = "comment";
  static ANNOTATION = "annotation";
  static IDENTIFIER = "identifier";
  static KEYWORD = "keyword";
  static PUNCTUATION = "punctuation";
  static NUMBER = "number";
  static STRING = "string";
  static BOOLEAN = "boolean";
  static OPERATOR = "operator";
  static EOF = "eof";
}

class Token {
  type;
  value;
  line = 1;
  column = 1;
  start;
  end;
  source;
  constructor(type, value, start, end, source) {
    this.type = type;
    this.value = value;
    this.start = start;
    this.end = end;
    this.source = source;
  }
  withLineAndColumn(line, column) {
    this.line = line;
    this.column = column;
    return this;
  }
}

// language/src/core/errors.ts
class ErrorTypes {
  static TYPE_ERROR = "TypeError";
  static TOKEN_ERROR = "TokenError";
  static PARSER_ERROR = "ParserError";
  static RUNTIME_ERROR = "RuntimeError";
  static INTERNAL_ERROR = "InternalError";
  static NATIVE_ERROR = "NativeError";
  static DEPENDENCY_ERROR = "DependencyError";
}

class LyraError extends Error {
  kind;
  span = null;
  cause = null;
  constructor(kind, message, span = null, cause = null) {
    super(message);
    this.kind = kind;
    this.span = span;
    this.cause = cause;
  }
  format() {
    if (this.span) {
      return `
[${this.kind}] ${this.message}
  at ${this.span.source.url}:${this.span.line}:${this.span.column}

${this.span.text()}
${" ".repeat(this.span.column)}${"^".repeat(this.span.end - this.span.start)}
`;
    }
    return `[${this.kind}] ${this.message}`;
  }
}

class LyraTokenError extends LyraError {
  constructor(message, span = null, cause = null) {
    super(ErrorTypes.TOKEN_ERROR, message, span, cause);
  }
}

class LyraTypeError extends LyraError {
  constructor(message, span = null, cause = null) {
    super(ErrorTypes.TYPE_ERROR, message, span, cause);
  }
}

class LyraParserError extends LyraError {
  constructor(message, span = null, cause = null) {
    super(ErrorTypes.PARSER_ERROR, message, span, cause);
  }
}

class LyraRuntimeError extends LyraError {
  constructor(message, span = null, cause = null) {
    super(ErrorTypes.RUNTIME_ERROR, message, span, cause);
  }
}

class LyraNativeError extends LyraError {
  constructor(message, span = null, cause = null) {
    super(ErrorTypes.NATIVE_ERROR, message, span, cause);
  }
}

class LyraDependencyError extends LyraError {
  constructor(message, span = null, cause = null) {
    super(ErrorTypes.DEPENDENCY_ERROR, message, span, cause);
  }
}
function throwTokenError(message, span = null, cause = null) {
  throw new LyraTokenError(message, span, cause);
}
function throwTypeError(message, span = null, cause = null) {
  throw new LyraTypeError(message, span, cause);
}
function throwParserError(message, span = null, cause = null) {
  throw new LyraParserError(message, span, cause);
}
function throwRuntimeError(message, span = null, cause = null) {
  throw new LyraRuntimeError(message, span, cause);
}
function throwNativeError(message, span = null, cause = null) {
  throw new LyraNativeError(message, span, cause);
}
function throwDependencyError(message, span = null, cause = null) {
  throw new LyraDependencyError(message, span, cause);
}
function wrapJsError(error, source) {
  if (error instanceof LyraError) {
    return error;
  }
  return new LyraError(ErrorTypes.INTERNAL_ERROR, error.message || String(error), new Span(source, 0, source.length));
}

// language/src/core/tokenizer.ts
class Tokenizer {
  rules = new Rules;
  source;
  constructor(source) {
    this.source = source;
  }
  getTokenStream() {
    return new TokenStream(this.tokenize());
  }
  tokenize() {
    const tokens = [];
    let i = 0;
    let line = 1;
    let column = 0;
    while (i < this.source.length) {
      if (this.source.charAt(i) === `
`) {
        line++;
        column = 0;
      } else {
        column++;
      }
      if (this.matchWhitespaceAt(i)) {
        i++;
        continue;
      }
      const lineComment = this.matchLineCommentAt(i);
      if (lineComment) {
        tokens.push(lineComment.withLineAndColumn(line, column));
        i = lineComment.end + 1;
        line++;
        column = 0;
        continue;
      }
      const string = this.matchStringAt(i);
      if (string) {
        tokens.push(string.withLineAndColumn(line, column));
        i = string.end + 1;
        column += this.columOffset(string);
        continue;
      }
      const number = this.matchNumberAt(i);
      if (number) {
        tokens.push(number.withLineAndColumn(line, column));
        i = number.end;
        column += this.columOffset(number);
        continue;
      }
      const identifier = this.matchIdentifierAt(i);
      if (identifier) {
        tokens.push(identifier.withLineAndColumn(line, column));
        i = identifier.end;
        column += this.columOffset(identifier);
        continue;
      }
      const operator = this.matchOperatorAt(i);
      if (operator) {
        tokens.push(operator.withLineAndColumn(line, column));
        i = operator.end + 1;
        column += this.columOffset(operator);
        continue;
      }
      const punctuation = this.matchPunctuationAt(i);
      if (punctuation) {
        tokens.push(punctuation.withLineAndColumn(line, column));
        i = punctuation.end + 1;
        column += this.columOffset(punctuation);
        continue;
      }
      const annotation = this.matchAnnotationAt(i);
      if (annotation) {
        tokens.push(annotation.withLineAndColumn(line, column));
        i = annotation.end + 1;
        column += this.columOffset(annotation);
        continue;
      }
      throwTokenError("Unexpected character: " + this.source.charAt(i));
    }
    tokens.push(this.eof(i).withLineAndColumn(line, column));
    return tokens;
  }
  eof(end) {
    return new Token(TokenType.EOF, "", end, end, this.source);
  }
  columOffset(token) {
    return token.value.length - 1;
  }
  matchWhitespaceAt(i) {
    return this.rules.isWhitespace(this.source.charAt(i));
  }
  matchNumberAt(i) {
    if (!this.rules.isNumeric(this.source.charAt(i))) {
      return null;
    }
    let start = i;
    while (this.rules.isNumeric(this.source.charAt(i)))
      i++;
    return new Token(TokenType.NUMBER, this.source.slice(start, i), start, i, this.source);
  }
  matchStringAt(i) {
    if (this.source.charAt(i) !== '"') {
      return null;
    }
    let start = ++i;
    while (this.source.charAt(i) !== '"')
      i++;
    return new Token(TokenType.STRING, this.source.slice(start, i), start, i, this.source);
  }
  matchIdentifierAt(i) {
    if (!this.rules.isAlpha(this.source.charAt(i))) {
      return null;
    }
    let start = i;
    let j = i;
    while (this.rules.isAlphaNumeric(this.source.charAt(j)))
      j++;
    const value = this.source.slice(start, j);
    let type = TokenType.IDENTIFIER;
    if ([GRAMMAR.TRUE, GRAMMAR.FALSE].includes(value)) {
      type = TokenType.BOOLEAN;
    } else if (Rules.KEYWORDS.has(value)) {
      type = TokenType.KEYWORD;
    }
    return new Token(type, value, start, j, this.source);
  }
  matchOperatorAt(i) {
    const chars = this.source.charAt(i) + this.source.charAt(i + 1);
    if (Rules.OPERATORS.has(chars)) {
      return new Token(TokenType.OPERATOR, chars, i, i + 1, this.source);
    }
    if (Rules.OPERATORS.has(this.source.charAt(i))) {
      return new Token(TokenType.OPERATOR, this.source.charAt(i), i, i, this.source);
    }
    return null;
  }
  matchPunctuationAt(i) {
    if (!Rules.PUNCTUATIONS.has(this.source.charAt(i))) {
      return null;
    }
    return new Token(TokenType.PUNCTUATION, this.source.charAt(i), i, i, this.source);
  }
  matchLineCommentAt(i) {
    if (!this.source.startsWith(Rules.COMMENT_LINE, i)) {
      return null;
    }
    let j = i + Rules.COMMENT_LINE.length;
    while (j < this.source.length && this.source.charAt(j) !== `
`)
      j++;
    return new Token(TokenType.COMMENT, this.source.slice(i, j), i, j, this.source);
  }
  matchAnnotationAt(i) {
    if (this.source.charAt(i) !== "@") {
      return null;
    }
    let start = i + 1;
    let j = i + 1;
    while (this.rules.isAlpha(this.source.charAt(j)))
      j++;
    const value = this.source.slice(start, j);
    return new Token(TokenType.ANNOTATION, value, start, j, this.source);
  }
}

class TokenStream {
  tokens;
  index = 0;
  constructor(tokens) {
    this.tokens = tokens;
  }
  rewind() {
    if (this.index > 0) {
      this.index--;
    }
  }
  peek() {
    return this.tokens[this.index] || null;
  }
  next() {
    return this.tokens[this.index++] || null;
  }
  hasNext() {
    return this.index < this.tokens.length;
  }
}

// language/src/core/parser_source.ts
class Source2 {
  static NEWLINE = `
`;
  code;
  url;
  constructor(code, url = "<inline>") {
    this.url = url;
    this.code = code;
  }
  get length() {
    return this.code.length;
  }
  getTokenizer() {
    return new Tokenizer(this);
  }
  slice(start, end) {
    return this.code.slice(start, end);
  }
  charAt(index) {
    return this.code.charAt(index);
  }
  startsWith(text, position) {
    return this.code.startsWith(text, position);
  }
}

class Span {
  source;
  start;
  end;
  line;
  column;
  constructor(source, start, end) {
    this.source = source;
    this.start = start;
    this.end = end;
    const before = source.slice(0, start);
    const lines = before.split(Source2.NEWLINE);
    this.line = lines.length;
    this.column = (lines[lines.length - 1] || "").length + 1;
  }
  text() {
    return this.source.slice(this.start, this.end);
  }
}

// language/src/core/ast.ts
function spanFromTokens(startToken, endToken) {
  return new Span(startToken.source, startToken.start, endToken.end);
}

class ASTNodeType {
  static PROGRAMM = "program";
  static INDEX = "index";
  static IDENTIFIER = "identifier";
  static ANNOTATION = "annotation";
  static PARAMETER = "parameter";
  static IMPORT = GRAMMAR.IMPORT;
  static NUMBER = TYPE_ENUM.NUMBER;
  static STRING = TYPE_ENUM.STRING;
  static BOOLEAN = TYPE_ENUM.BOOLEAN;
  static NULL = TYPE_ENUM.NULL;
  static NEW = GRAMMAR.NEW;
  static CLASS = GRAMMAR.CLASS;
  static INTERFACE = GRAMMAR.INTERFACE;
  static CONSTRUCTOR = GRAMMAR.CONSTRUCTOR;
  static THIS = GRAMMAR.THIS;
  static RETURN = GRAMMAR.RETURN;
  static VDOM = "vdom_declaration";
  static VDOM_TEXT = "vdom_text_declaration";
  static UNARY = "unary_expression";
  static LAMBDA = "lambda_expression";
  static ARRAY = "array_declaration";
  static TYPE = "type_declaration";
  static FIELD = "field_declaration";
  static MEMBER = "member_expression";
  static METHOD = "method_declaration";
  static CALL = "call_expression";
  static VARIABLE = "variable_declaration";
  static EXPRESSION = "expression_statement";
  static BINARY = "binary_expression";
  static ASSIGNMENT = "assignment_expression";
  static IF = "if_statement";
  static THEN = "then_statement";
  static ELSE = "else_statement";
  static MATCH = "match_statement";
  static MATCH_CASE = "match_case_statement";
  static FOREACH = "foreach_statement";
}

class ASTNode {
  isExpression = false;
  name = "";
  span = null;
  type;
  value = null;
  children;
  constructor(type, children = []) {
    this.type = type;
    this.children = children;
  }
}

class ASTCallNode extends ASTNode {
  callee;
  arguments;
  constructor(callee, args = []) {
    super(ASTNodeType.CALL);
    this.callee = callee;
    this.arguments = args;
    this.isExpression = true;
  }
}

class ASTNewNode extends ASTNode {
  arguments;
  typeAnnotation;
  constructor(args, typeAnnotation) {
    super(ASTNodeType.NEW);
    this.arguments = args;
    this.typeAnnotation = typeAnnotation;
    this.name = typeAnnotation.name;
    this.isExpression = true;
  }
}

class ASTBinaryNode extends ASTNode {
  left;
  right;
  operator;
  constructor(left, right, operator) {
    super(ASTNodeType.BINARY);
    this.left = left;
    this.right = right;
    this.operator = operator;
    this.isExpression = true;
  }
}

class ASTAssignmentNode extends ASTNode {
  left;
  right;
  constructor(left, right) {
    super(ASTNodeType.ASSIGNMENT);
    this.left = left;
    this.right = right;
    this.isExpression = true;
  }
}

class ASTMemberNode extends ASTNode {
  object;
  property;
  constructor(object, property) {
    super(ASTNodeType.MEMBER);
    this.object = object;
    this.property = property;
    this.isExpression = true;
  }
}

class ASTUnaryNode extends ASTNode {
  operator;
  argument;
  constructor(operator, argument) {
    super(ASTNodeType.UNARY);
    this.operator = operator;
    this.argument = argument;
    this.isExpression = true;
  }
}

class ASTIndexNode extends ASTNode {
  object;
  index;
  constructor(object, index) {
    super(ASTNodeType.INDEX);
    this.object = object;
    this.index = index;
    this.isExpression = true;
  }
}

class ASTArrayNode extends ASTNode {
  elements = [];
  constructor() {
    super(ASTNodeType.ARRAY);
    this.isExpression = true;
  }
}

class ASTLambdaNode extends ASTNode {
  parameters;
  returnType;
  constructor(parameters, returnType, children) {
    super(ASTNodeType.LAMBDA, children);
    this.parameters = parameters;
    this.returnType = returnType;
    this.isExpression = true;
  }
}

class ASTFieldNode extends ASTNode {
  modifiers;
  fieldType;
  init = null;
  constructor(name, modifiers, fieldType, init = null) {
    super(ASTNodeType.FIELD);
    this.name = name;
    this.modifiers = modifiers;
    this.fieldType = fieldType;
    this.init = init;
  }
}

class ASTVariableNode extends ASTNode {
  typeAnnotation = null;
  init = null;
  constructor(name, typeAnnotation = null, init = null) {
    super(ASTNodeType.VARIABLE);
    this.name = name;
    this.typeAnnotation = typeAnnotation;
    this.init = init;
  }
}

class ASTExpressionNode extends ASTNode {
  expr;
  constructor(expr) {
    super(ASTNodeType.EXPRESSION);
    this.expr = expr;
  }
}

class ASTReturnNode extends ASTNode {
  argument;
  constructor(argument = null) {
    super(ASTNodeType.RETURN);
    this.argument = argument;
  }
}

class ASTClassNode extends ASTNode {
  annotations;
  modifiers;
  typeParameters;
  superClass;
  implementsInterfaces;
  constructor(name, annotations, modifiers, typeParameters, implementsInterfaces, superClass = null, children = []) {
    super(ASTNodeType.CLASS, children);
    this.name = name;
    this.annotations = annotations;
    this.modifiers = modifiers;
    this.typeParameters = typeParameters;
    this.superClass = superClass;
    this.implementsInterfaces = implementsInterfaces;
  }
}

class ASTInterfaceNode extends ASTNode {
  annotations;
  modifiers;
  typeParameters;
  extendsInterfaces;
  constructor(name, annotations, modifiers, typeParameters, extendsInterfaces, children = []) {
    super(ASTNodeType.INTERFACE, children);
    this.name = name;
    this.annotations = annotations;
    this.modifiers = modifiers;
    this.typeParameters = typeParameters;
    this.extendsInterfaces = extendsInterfaces;
  }
}

class ASTAnnotationNode extends ASTNode {
  properties = new Map;
  constructor(name) {
    super(ASTNodeType.ANNOTATION);
    this.name = name;
  }
}

class ASTParameterNode extends ASTNode {
  typeAnnotation;
  defaultValue;
  constructor(name, typeAnnotation, defaultValue = null) {
    super(ASTNodeType.PARAMETER);
    this.typeAnnotation = typeAnnotation;
    this.name = name;
    this.defaultValue = defaultValue;
  }
}

class ASTMethodNode extends ASTNode {
  annotations;
  modifiers;
  typeParameters;
  parameters;
  returnType;
  constructor(name, type, annotations, modifiers, typeParameters, parameters, returnType = null, children = []) {
    super(type, children);
    this.name = name;
    this.annotations = annotations;
    this.modifiers = modifiers;
    this.typeParameters = typeParameters;
    this.parameters = parameters;
    this.returnType = returnType;
  }
}

class ASTImportNode extends ASTNode {
  names;
  from;
  constructor(names, from = null) {
    super(ASTNodeType.IMPORT);
    this.names = names;
    this.from = from;
  }
}

class ASTThenNode extends ASTNode {
  constructor(children = []) {
    super(ASTNodeType.THEN, children);
  }
}

class ASTIfNode extends ASTNode {
  condition;
  then;
  else = null;
  constructor(condition, then) {
    super(ASTNodeType.IF);
    this.condition = condition;
    this.then = then;
  }
}

class ASTElseNode extends ASTNode {
  constructor(children = []) {
    super(ASTNodeType.ELSE, children);
  }
}

class ASTMatchNode extends ASTNode {
  expression;
  cases;
  defaultCase = null;
  constructor(expression, cases, defaultCase = null) {
    super(ASTNodeType.MATCH);
    this.expression = expression;
    this.cases = cases;
    this.defaultCase = defaultCase;
  }
}

class ASTMatchCaseNode extends ASTNode {
  test = null;
  constructor(children = []) {
    super(ASTNodeType.MATCH_CASE, children);
  }
}

class ASTForeachNode extends ASTNode {
  iterator;
  iterable;
  body;
  constructor(iterator, iterable, body = []) {
    super(ASTNodeType.FOREACH);
    this.iterator = iterator;
    this.iterable = iterable;
    this.body = body;
  }
}

class ASTTypeNode extends ASTNode {
  static KIND_SIMPLE = "simple";
  static KIND_GENERIC = "generic";
  static KIND_LAMBDA = "lambda";
  kind;
  typeArguments = [];
  parameterTypes = [];
  returnType = null;
  nullable;
  constructor(kind, name, nullable = false) {
    super(ASTNodeType.TYPE);
    this.kind = kind;
    this.name = name;
    this.nullable = nullable;
  }
}

// language/src/core/interpreter_objects.ts
class Environment {
  parent;
  values;
  constructor(parent = null) {
    this.parent = parent;
    this.values = Object.create(null);
  }
  define(name, value) {
    this.values[name] = value;
  }
  get(name) {
    if (name in this.values) {
      return this.values[name];
    }
    if (this.parent) {
      return this.parent.get(name);
    }
    throwRuntimeError(`Undefined variable ${name}`);
  }
  set(name, value) {
    if (name in this.values) {
      this.values[name] = value;
      return;
    }
    if (this.parent) {
      this.parent.set(name, value);
      return;
    }
    throwRuntimeError(`Undefined variable ${name}`);
  }
  has(name) {
    return this.values[name] || this.parent && this.parent.has(name);
  }
}

class Instance {
  __classDef;
  __instanceFields;
  __staticFields;
  __nativeInstance = null;
  constructor(classDef) {
    this.__classDef = classDef;
    this.__instanceFields = {};
    this.__staticFields = {};
    this.__nativeInstance = null;
  }
}

class Modifiers {
  open = false;
  public = false;
  private = false;
  static = false;
  readonly = false;
  constructor(attributes = {}) {
    for (let attribute of Object.keys(attributes)) {
      if (this.hasOwnProperty(attribute)) {
        const modifiers = this;
        modifiers[attribute] = attributes[attribute];
      }
    }
  }
}

class SuperClass {
  type;
  name;
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }
}

class ReturnValue {
  value;
  constructor(value) {
    this.value = value;
  }
}

class ClassFieldDefinition {
  name;
  type;
  modifiers;
  initializer = null;
  constructor(name, type, modifiers, initializer = null) {
    this.name = name;
    this.type = type;
    this.modifiers = modifiers;
    this.initializer = initializer;
  }
}

class ClassMethodDefinition {
  name;
  parameters;
  returnType;
  modifiers;
  children;
  isConstructor;
  constructor(name, parameters, returnType, modifiers, children) {
    this.name = name;
    this.parameters = parameters;
    this.returnType = returnType;
    this.modifiers = modifiers;
    this.children = children;
    this.isConstructor = name === GRAMMAR.CONSTRUCTOR;
  }
}

class ClassDefinition {
  node;
  name;
  superClass = null;
  instanceFields;
  instanceMethods;
  staticFields;
  staticMethods;
  constructorMethod = null;
  nativeInstance = null;
  isOpen = false;
  constructor(classNode, superClass, name, instanceFields, instanceMethods, staticFields, staticMethods, constructorMethod = null) {
    this.node = classNode;
    this.superClass = superClass;
    this.name = name;
    this.instanceFields = instanceFields;
    this.instanceMethods = instanceMethods;
    this.staticFields = staticFields;
    this.staticMethods = staticMethods;
    this.constructorMethod = constructorMethod;
    this.isOpen = classNode.modifiers.open;
  }
  findMethod(name) {
    const node = this.node.children.find((node2) => node2.name === name);
    if (node instanceof ASTMethodNode) {
      return node;
    }
    throwRuntimeError(`Method ${name} not found in class ${this.name}.`);
  }
  static constructFromAST(node) {
    const instanceFields = [];
    const instanceMethods = {};
    const staticFields = [];
    const staticMethods = {};
    let constructorMethod = null;
    for (const child of node.children) {
      if (child instanceof ASTFieldNode) {
        const field = new ClassFieldDefinition(child.name, child.fieldType ? child.fieldType.name : null, child.modifiers, child.init);
        if (field.modifiers.static) {
          staticFields.push(field);
        } else {
          instanceFields.push(field);
        }
      } else if (child instanceof ASTMethodNode) {
        const method = new ClassMethodDefinition(child.name, child.parameters, child.returnType, child.modifiers, child.children);
        if (method.isConstructor) {
          constructorMethod = method;
        } else if (method.modifiers.static) {
          staticMethods[method.name] = method;
        } else {
          instanceMethods[method.name] = method;
        }
      } else {
        throwRuntimeError(`Unhandled node ${child.type}.`);
      }
    }
    return new ClassDefinition(node, node.superClass?.name || null, node.name, instanceFields, instanceMethods, staticFields, staticMethods, constructorMethod);
  }
}

class InterfaceDefinition {
  node;
  name;
  staticFields;
  instanceMethods;
  constructor(interfaceNode, name, staticFields, instanceMethods) {
    this.node = interfaceNode;
    this.name = name;
    this.staticFields = staticFields;
    this.instanceMethods = instanceMethods;
  }
  static constructFromAST(node) {
    const staticFields = [];
    const instanceMethods = {};
    for (const child of node.children) {
      if (child instanceof ASTFieldNode) {
        const field = new ClassFieldDefinition(child.name, child.fieldType ? child.fieldType.name : null, child.modifiers, child.init ?? null);
        staticFields.push(field);
      } else if (child instanceof ASTMethodNode) {
        const method = new ClassMethodDefinition(child.name, child.parameters, child.returnType, child.modifiers, child.children);
        instanceMethods[method.name] = method;
      } else {
        throwRuntimeError(`Unhandled node ${child.type}.`);
      }
    }
    return new InterfaceDefinition(node, node.name, staticFields, instanceMethods);
  }
}

// language/src/core/parser_statments.ts
function createMixedType() {
  return new ASTTypeNode(ASTTypeNode.KIND_SIMPLE, TYPE_ENUM.MIXED);
}
function parseType(parser) {
  let type;
  if (parser.peek().value === GRAMMAR.PARENTHESES_OPEN) {
    type = parseLambdaType(parser);
  } else {
    type = parseSimpleOrGenericType(parser);
  }
  if (parser.consumeIfOperator(GRAMMAR.QUESTION_MARK)) {
    type.nullable = true;
  }
  return type;
}
function parseTypeParameters(parser) {
  const parameters = [];
  parser.expectOperator(GRAMMAR.LESS_THAN);
  do {
    const name = parser.expectIdentifier().value;
    parameters.push(name);
    if (parser.peek().value !== GRAMMAR.COMMA) {
      break;
    }
    parser.next();
  } while (true);
  parser.expectOperator(GRAMMAR.GREATER_THAN);
  return parameters;
}
function parseSimpleOrGenericType(parser) {
  const nameToken = parser.expectIdentifier();
  const node = new ASTTypeNode(ASTTypeNode.KIND_SIMPLE, nameToken.value);
  if (parser.consumeIfOperator(GRAMMAR.LESS_THAN)) {
    node.kind = ASTTypeNode.KIND_GENERIC;
    do {
      node.typeArguments.push(parseType(parser));
    } while (parser.consumeIfPunctuation(GRAMMAR.COMMA));
    parser.expectOperator(GRAMMAR.GREATER_THAN);
  }
  return node;
}
function parseLambdaType(parser) {
  const node = new ASTTypeNode(ASTTypeNode.KIND_LAMBDA, "lambda");
  parser.expectPunctuation(GRAMMAR.PARENTHESES_OPEN);
  if (parser.peek().value !== GRAMMAR.PARENTHESES_CLOSE) {
    do {
      node.parameterTypes.push(parseType(parser));
    } while (parser.consumeIfPunctuation(GRAMMAR.COMMA));
  }
  parser.expectPunctuation(GRAMMAR.PARENTHESES_CLOSE);
  parser.expectOperator(GRAMMAR.ARROW);
  node.returnType = parseType(parser);
  return node;
}
function parseProgram(parser) {
  const children = [];
  while (parser.peek().type !== TokenType.EOF) {
    if (parser.peek().type === TokenType.COMMENT) {
      parser.next();
    } else {
      const node = parseStatement(parser);
      if (node) {
        children.push(node);
      }
    }
  }
  return new ASTNode(ASTNodeType.PROGRAMM, children);
}
function parseStatement(parser) {
  if (parser.consumeIfComment()) {
    return null;
  }
  switch (parser.peek().value) {
    case GRAMMAR.IMPORT: {
      return parseImport(parser);
    }
    case GRAMMAR.OPEN:
    case GRAMMAR.CLASS: {
      return parseClassDeclaration(parser);
    }
    case GRAMMAR.INTERFACE: {
      return parseInterfaceDeclaration(parser);
    }
    case GRAMMAR.RETURN: {
      return parseReturnStatement(parser);
    }
    case GRAMMAR.LET: {
      return parseVariableDeclaration(parser);
    }
    case GRAMMAR.IF: {
      return parseIfDeclaration(parser);
    }
    case GRAMMAR.MATCH: {
      return parseMatchDeclaration(parser);
    }
    case GRAMMAR.FOREACH: {
      return parseForeachDeclaration(parser);
    }
    default: {
      return parseExpressionStatement(parser);
    }
  }
}
function parseReturnStatement(parser) {
  parser.expectKeyword(GRAMMAR.RETURN);
  let argument = null;
  if (parser.peek().value !== GRAMMAR.SEMICOLON) {
    argument = parseExpression(parser);
  }
  parser.expectPunctuation(GRAMMAR.SEMICOLON);
  return new ASTReturnNode(argument);
}
function parseImport(parser) {
  parser.expectKeyword(GRAMMAR.IMPORT);
  let names = [];
  let from = null;
  if (parser.peek().value === GRAMMAR.BRACE_OPEN) {
    names = parseImportList(parser);
    parser.expectKeyword(GRAMMAR.FROM);
    from = parser.expectString().value;
  } else {
    names.push(parser.expectIdentifier().value);
  }
  parser.expectPunctuation(GRAMMAR.SEMICOLON);
  return new ASTImportNode(names, from);
}
function parseImportList(parser) {
  parser.expectPunctuation(GRAMMAR.BRACE_OPEN);
  const names = [];
  while (true) {
    const nameToken = parser.expectIdentifier();
    names.push(nameToken.value);
    if (parser.consumeIfPunctuation(GRAMMAR.COMMA)) {
      continue;
    }
    break;
  }
  parser.expectPunctuation(GRAMMAR.BRACE_CLOSE);
  return names;
}
function parseClassDeclaration(parser) {
  const annotations = parseAnnotations(parser);
  const modifiers = parseModifiers(parser, [GRAMMAR.OPEN]);
  const classToken = parser.expectKeyword(GRAMMAR.CLASS);
  const nameToken = parser.expectIdentifier();
  let typeParameters = [];
  if (parser.peek().value === GRAMMAR.LESS_THAN) {
    typeParameters = parseTypeParameters(parser);
  }
  let superClass = null;
  if (parser.consumeIfKeyword(GRAMMAR.EXTENDS)) {
    superClass = new SuperClass(ASTNodeType.IDENTIFIER, parser.expectIdentifier().value);
  }
  let implementsInterfaces = [];
  if (parser.peek().value === GRAMMAR.IMPLEMENTS) {
    parser.next();
    do {
      const interfaceType = parseType(parser);
      implementsInterfaces.push(interfaceType);
    } while (parser.consumeIfPunctuation(GRAMMAR.COMMA));
  }
  parser.expectPunctuation(GRAMMAR.BRACE_OPEN);
  const children = [];
  while (parser.peek().value !== GRAMMAR.BRACE_CLOSE) {
    if (parser.consumeIfComment()) {
      continue;
    }
    const member = parseClassMember(parser);
    if (member === null) {
      continue;
    }
    children.push(member);
  }
  const braceCloseToken = parser.expectPunctuation(GRAMMAR.BRACE_CLOSE);
  const node = new ASTClassNode(nameToken.value, annotations, modifiers, typeParameters, implementsInterfaces, superClass, children);
  node.span = spanFromTokens(classToken, braceCloseToken);
  return node;
}
function parseInterfaceDeclaration(parser) {
  const annotations = parseAnnotations(parser);
  const modifiers = parseModifiers(parser, []);
  const interfaceToken = parser.expectKeyword(GRAMMAR.INTERFACE);
  const nameToken = parser.expectIdentifier();
  let typeParameters = [];
  if (parser.peek().value === GRAMMAR.LESS_THAN) {
    typeParameters = parseTypeParameters(parser);
  }
  let extendsInterfaces = [];
  if (parser.consumeIfKeyword(GRAMMAR.EXTENDS)) {
    do {
      extendsInterfaces.push(parser.expectIdentifier().value);
    } while (parser.consumeIfPunctuation(GRAMMAR.COMMA));
  }
  parser.expectPunctuation(GRAMMAR.BRACE_OPEN);
  const children = [];
  while (parser.peek().value !== GRAMMAR.BRACE_CLOSE) {
    if (parser.consumeIfComment()) {
      continue;
    }
    const member = parseClassMember(parser);
    if (member === null) {
      continue;
    }
    if (member instanceof ASTFieldNode && !member.modifiers.static) {
      throwParserError("Interface fields must be static.");
    }
    if (member instanceof ASTMethodNode && member.children.length > 0) {
      throwParserError("Interface methods must not have a body.");
    }
    children.push(member);
  }
  const braceCloseToken = parser.expectPunctuation(GRAMMAR.BRACE_CLOSE);
  const node = new ASTInterfaceNode(nameToken.value, annotations, modifiers, typeParameters, extendsInterfaces, children);
  node.span = spanFromTokens(interfaceToken, braceCloseToken);
  return node;
}
function parseAnnotations(parser) {
  const annotations = [];
  while (parser.peek().type === TokenType.ANNOTATION) {
    annotations.push(parseAnnotation(parser));
  }
  return annotations;
}
function parseAnnotation(parser) {
  const token = parser.expectAnnotation();
  const node = new ASTAnnotationNode(token.value);
  if (parser.consumeIfPunctuation(GRAMMAR.PARENTHESES_OPEN)) {
    while (parser.peek().value !== GRAMMAR.PARENTHESES_CLOSE) {
      const key = parser.expectIdentifier().value;
      parser.expectOperator(GRAMMAR.ASSIGN);
      const value = parseExpression(parser);
      node.properties.set(key, value);
      if (parser.peek().value === GRAMMAR.COMMA) {
        parser.next();
      }
    }
    parser.expectPunctuation(GRAMMAR.PARENTHESES_CLOSE);
  }
  return node;
}
function parseModifiers(parser, allowed) {
  const modifiers = {};
  allowed.forEach((modifier) => modifiers[modifier] = false);
  while (parser.peek().type === TokenType.KEYWORD && allowed.includes(parser.peek().value)) {
    const modifier = parser.next().value;
    if (modifiers[modifier]) {
      throwParserError(`Duplicate modifier: ${modifier}`);
    }
    modifiers[modifier] = true;
  }
  return new Modifiers(modifiers);
}
function parseParameters(parser) {
  const parameters = [];
  if (parser.peek().value === GRAMMAR.PARENTHESES_CLOSE) {
    return parameters;
  }
  do {
    const nameToken = parser.expectIdentifier();
    let type = null;
    let defaultValue = null;
    let typeToken = null;
    let defaultValueToken = null;
    if (parser.peek().value === GRAMMAR.COLON) {
      typeToken = parser.next();
      type = parseType(parser);
    }
    if (parser.peek().value === GRAMMAR.ASSIGN) {
      defaultValueToken = parser.next();
      defaultValue = parseExpression(parser);
    }
    const node = new ASTParameterNode(nameToken.value, type, defaultValue);
    node.span = spanFromTokens(typeToken || nameToken, defaultValueToken || nameToken);
    parameters.push(node);
  } while (parser.consumeIfPunctuation(GRAMMAR.COMMA));
  return parameters;
}
function parseClassMember(parser) {
  const startToken = parser.peek();
  const annotations = parseAnnotations(parser);
  const modifiers = parseModifiers(parser, [
    GRAMMAR.PUBLIC,
    GRAMMAR.PRIVATE,
    GRAMMAR.STATIC,
    GRAMMAR.READONLY
  ]);
  const nameToken = parser.expectOneOf([TokenType.IDENTIFIER, TokenType.KEYWORD]);
  let fieldType = null;
  if (parser.peek().value === GRAMMAR.COLON) {
    if (parser.consumeIfPunctuation(GRAMMAR.COLON)) {
      fieldType = parseType(parser);
    }
  }
  let init = null;
  if (parser.consumeIfOperator(GRAMMAR.ASSIGN)) {
    init = parseExpression(parser);
  }
  if (parser.peek().value === GRAMMAR.SEMICOLON) {
    if (!modifiers.public && !modifiers.private) {
      modifiers.private = true;
    }
    const semicolonToken = parser.expectPunctuation(GRAMMAR.SEMICOLON);
    const node = new ASTFieldNode(nameToken.value, modifiers, fieldType, init);
    node.span = spanFromTokens(startToken, semicolonToken);
    return node;
  }
  let typeParameters = [];
  if (parser.peek().value === GRAMMAR.LESS_THAN) {
    typeParameters = parseTypeParameters(parser);
  }
  if (parser.peek().value === GRAMMAR.PARENTHESES_OPEN) {
    if (!modifiers.public && !modifiers.private) {
      modifiers.public = true;
    }
    parser.expectPunctuation(GRAMMAR.PARENTHESES_OPEN);
    const parameters = parseParameters(parser);
    const parenthesesCloseToken = parser.expectPunctuation(GRAMMAR.PARENTHESES_CLOSE);
    let returnType = null;
    if (parser.consumeIfPunctuation(GRAMMAR.COLON)) {
      returnType = parseType(parser);
    }
    const children = parseBlock(parser);
    const node = new ASTMethodNode(nameToken.value, nameToken.value === GRAMMAR.CONSTRUCTOR ? ASTNodeType.CONSTRUCTOR : ASTNodeType.METHOD, annotations, modifiers, typeParameters, parameters, returnType, children);
    node.span = spanFromTokens(startToken, parenthesesCloseToken);
    return node;
  }
  throwParserError(`Invalid class member: ${nameToken.value}`);
  return null;
}
function parseBlock(parser) {
  if (parser.peek().value === GRAMMAR.SEMICOLON) {
    parser.next();
    return [];
  }
  parser.expectPunctuation(GRAMMAR.BRACE_OPEN);
  const children = [];
  while (parser.peek().value !== GRAMMAR.BRACE_CLOSE) {
    if (parser.peek().type === TokenType.COMMENT) {
      parser.next();
      continue;
    }
    const child = parseStatement(parser);
    if (child) {
      children.push(child);
    }
  }
  parser.expectPunctuation(GRAMMAR.BRACE_CLOSE);
  return children;
}
function parseVariableDeclaration(parser) {
  const letToken = parser.expectKeyword(GRAMMAR.LET);
  const nameToken = parser.expectIdentifier();
  let typeAnnotation = null;
  if (parser.consumeIfPunctuation(GRAMMAR.COLON)) {
    typeAnnotation = parseType(parser);
  }
  let init = null;
  if (parser.peek().value === GRAMMAR.ASSIGN) {
    parser.expectOperator(GRAMMAR.ASSIGN);
    init = parseExpression(parser);
  }
  const semicolonToken = parser.expectPunctuation(GRAMMAR.SEMICOLON);
  const node = new ASTVariableNode(nameToken.value, typeAnnotation, init);
  node.span = spanFromTokens(letToken, semicolonToken);
  return node;
}
function parseIfDeclaration(parser) {
  const startToken = parser.expectKeyword(GRAMMAR.IF);
  parser.expectPunctuation(GRAMMAR.PARENTHESES_OPEN);
  const condition = parseExpression(parser);
  const parenthesesCloseToken = parser.expectPunctuation(GRAMMAR.PARENTHESES_CLOSE);
  const node = new ASTIfNode(condition, new ASTThenNode(parseBlock(parser)));
  if (parser.consumeIfKeyword(GRAMMAR.ELSE)) {
    if (parser.peek().value === GRAMMAR.IF) {
      node.else = parseIfDeclaration(parser);
    } else {
      node.else = new ASTElseNode(parseBlock(parser));
    }
  }
  node.span = spanFromTokens(startToken, parenthesesCloseToken);
  return node;
}
function parseMatchDeclaration(parser) {
  const startToken = parser.expectKeyword(GRAMMAR.MATCH);
  parser.expectPunctuation(GRAMMAR.PARENTHESES_OPEN);
  const expression = parseExpression(parser);
  parser.expectPunctuation(GRAMMAR.PARENTHESES_CLOSE);
  parser.expectPunctuation(GRAMMAR.BRACE_OPEN);
  const matchCases = [];
  let defaultCase = null;
  while (parser.peek().value !== GRAMMAR.BRACE_CLOSE) {
    const matchCase = parseMatchCaseDeclaration(parser);
    if (matchCase.test === null) {
      defaultCase = matchCase;
      continue;
    }
    matchCases.push(matchCase);
  }
  const braceCloseToken = parser.expectPunctuation(GRAMMAR.BRACE_CLOSE);
  const node = new ASTMatchNode(expression, matchCases, defaultCase);
  node.span = spanFromTokens(startToken, braceCloseToken);
  return node;
}
function parseMatchCaseDeclaration(parser) {
  const caseNode = new ASTMatchCaseNode;
  if (parser.consumeIfKeyword(GRAMMAR.DEFAULT)) {
    caseNode.test = null;
  } else {
    caseNode.test = parseExpression(parser);
  }
  parser.expectPunctuation(GRAMMAR.COLON);
  if (parser.peek().value === GRAMMAR.BRACE_OPEN) {
    caseNode.children = parseBlock(parser);
  } else {
    const child = parseStatement(parser);
    if (child) {
      caseNode.children.push(child);
    }
  }
  return caseNode;
}
function parseForeachDeclaration(parser) {
  const startToken = parser.expectKeyword(GRAMMAR.FOREACH);
  parser.expectPunctuation(GRAMMAR.PARENTHESES_OPEN);
  const iteratorToken = parser.expectIdentifier();
  const iterator = iteratorToken.value;
  parser.expectKeyword(GRAMMAR.IN);
  const iterable = parseExpression(parser);
  const parenthesesCloseToken = parser.expectPunctuation(GRAMMAR.PARENTHESES_CLOSE);
  const node = new ASTForeachNode(iterator, iterable, parseBlock(parser));
  node.span = spanFromTokens(startToken, parenthesesCloseToken);
  return node;
}
function parseArray(parser) {
  const startToken = parser.expectPunctuation(GRAMMAR.BRACKET_SQUARE_OPEN);
  const node = new ASTArrayNode;
  if (parser.peek().value !== GRAMMAR.BRACKET_SQUARE_CLOSE) {
    do {
      node.elements.push(parseExpression(parser));
    } while (parser.consumeIfPunctuation(GRAMMAR.COMMA));
  }
  const bracketSquareCloseToken = parser.expectPunctuation(GRAMMAR.BRACKET_SQUARE_CLOSE);
  node.span = spanFromTokens(startToken, bracketSquareCloseToken);
  return node;
}
function parseLambda(parser) {
  const startToken = parser.expectPunctuation(GRAMMAR.BRACE_OPEN);
  const parameters = [];
  while (parser.peek().value !== GRAMMAR.ARROW) {
    const name = parser.expectIdentifier().value;
    let type = null;
    let defaultValue = null;
    if (parser.consumeIfPunctuation(GRAMMAR.COLON)) {
      type = parseType(parser);
    }
    if (parser.peek().value === GRAMMAR.ASSIGN) {
      parser.next();
      defaultValue = parseExpression(parser);
    }
    parameters.push(new ASTParameterNode(name, type, defaultValue));
    parser.consumeIfPunctuation(GRAMMAR.COMMA);
  }
  parser.expectOperator(GRAMMAR.ARROW);
  let returnType = createMixedType();
  if (parser.peek().type === TokenType.IDENTIFIER) {
    returnType = parseType(parser);
    if (parser.peek().value === GRAMMAR.COLON) {
      parser.next();
    } else {
      returnType = createMixedType();
      parser.rewind();
    }
  }
  let children = [];
  if (parser.peek().value === GRAMMAR.BRACE_OPEN) {
    children = parseBlock(parser);
  } else {
    children.push(parseExpression(parser));
  }
  const braceCloseToken = parser.expectPunctuation(GRAMMAR.BRACE_CLOSE);
  const node = new ASTLambdaNode(parameters, returnType, children);
  node.span = spanFromTokens(startToken, braceCloseToken);
  return node;
}
function looksLikeLambda(parser) {
  const start = parser.position();
  if (parser.peek().value !== GRAMMAR.BRACE_OPEN) {
    return false;
  }
  parser.next();
  while (parser.peek().type === TokenType.IDENTIFIER) {
    parser.next();
    if (parser.consumeIfPunctuation(GRAMMAR.COLON)) {
      parser.next();
    }
    if (!parser.consumeIfPunctuation(GRAMMAR.COMMA)) {
      break;
    }
  }
  const isLambda = parser.peek().value === GRAMMAR.ARROW;
  parser.seekAt(start);
  return isLambda;
}
function parseExpressionStatement(parser) {
  const expr = parseExpression(parser);
  parser.expectPunctuation(GRAMMAR.SEMICOLON);
  return new ASTExpressionNode(expr);
}
function parseExpression(parser, precedence = 0) {
  let expr = parsePostfix(parser, parseUnary(parser));
  while (true) {
    const token = parser.peek();
    if (!token) {
      break;
    }
    let tokenPrecedence = lookupPrecedence(token);
    if (tokenPrecedence < precedence) {
      break;
    }
    if (token.value === GRAMMAR.ASSIGN) {
      parser.next();
      expr = new ASTAssignmentNode(expr, parseExpression(parser, tokenPrecedence));
      continue;
    }
    if (GRAMMAR.MATH_OPERATORS.includes(token.value) || GRAMMAR.LOGIC_OPERATORS.includes(token.value)) {
      const startToken = parser.next();
      const right = parseExpression(parser, tokenPrecedence + 1);
      const endToken = parser.peek();
      const node = new ASTBinaryNode(expr, right, token.value);
      node.span = spanFromTokens(startToken, endToken);
      expr = node;
      continue;
    }
    break;
  }
  return expr;
}
function parseArguments(parser) {
  const args = [];
  if (parser.consumeIfPunctuation(GRAMMAR.PARENTHESES_CLOSE)) {
    return args;
  }
  args.push(parseExpression(parser));
  while (parser.consumeIfPunctuation(GRAMMAR.COMMA)) {
    args.push(parseExpression(parser));
  }
  parser.expectPunctuation(GRAMMAR.PARENTHESES_CLOSE);
  return args;
}
function parseUnary(parser) {
  const token = parser.peek();
  if (token && token.value === GRAMMAR.EXCLAMATION_MARK) {
    parser.next();
    const unary = parseUnary(parser);
    return new ASTUnaryNode(GRAMMAR.EXCLAMATION_MARK, unary);
  }
  return parsePrimary(parser);
}
function parsePrimary(parser) {
  if (looksLikeLambda(parser)) {
    return parseLambda(parser);
  }
  const token = parser.next();
  if (token.value === GRAMMAR.BRACKET_SQUARE_OPEN) {
    parser.rewind();
    return parseArray(parser);
  }
  if (token.type === TokenType.NUMBER) {
    const node = new ASTNode(ASTNodeType.NUMBER);
    node.value = token.value;
    return node;
  }
  if (token.type === TokenType.STRING) {
    const node = new ASTNode(ASTNodeType.STRING);
    node.value = token.value;
    return node;
  }
  if (token.type === TokenType.BOOLEAN) {
    const node = new ASTNode(ASTNodeType.BOOLEAN);
    node.value = token.value;
    return node;
  }
  if (token.type === TokenType.IDENTIFIER) {
    const node = new ASTNode(ASTNodeType.IDENTIFIER);
    node.name = token.value;
    return node;
  }
  if (token.value === GRAMMAR.NULL) {
    const node = new ASTNode(ASTNodeType.NULL);
    node.value = token.value;
    return node;
  }
  if (token.value === GRAMMAR.THIS) {
    const node = new ASTNode(ASTNodeType.THIS);
    node.name = token.value;
    return node;
  }
  if (token.value === GRAMMAR.NEW) {
    let typeAnnotation = parseType(parser);
    parser.expectPunctuation(GRAMMAR.PARENTHESES_OPEN);
    return new ASTNewNode(parseArguments(parser), typeAnnotation);
  }
  if (token.value === GRAMMAR.PARENTHESES_OPEN) {
    const expr = parseExpression(parser);
    parser.expectPunctuation(GRAMMAR.PARENTHESES_CLOSE);
    return expr;
  }
  throwParserError(`Unexpected token: ${token.type} ${token.value}`);
}
function parsePostfix(parser, expr) {
  if (expr === null) {
    throwParserError(`Expected expression, got null.`);
  }
  while (true) {
    const token = parser.peek();
    if (!token)
      break;
    if (token.value === GRAMMAR.PARENTHESES_OPEN) {
      parser.next();
      expr = new ASTCallNode(expr, parseArguments(parser));
      continue;
    }
    if (token.value === GRAMMAR.DOT) {
      parser.next();
      expr = new ASTMemberNode(expr, parser.expectIdentifier().value);
      continue;
    }
    if (token.value === GRAMMAR.BRACKET_SQUARE_OPEN) {
      parser.next();
      const index = parseExpression(parser);
      parser.expectPunctuation(GRAMMAR.BRACKET_SQUARE_CLOSE);
      expr = new ASTIndexNode(expr, index);
      continue;
    }
    break;
  }
  return expr;
}
function lookupPrecedence(token) {
  switch (token.value) {
    case GRAMMAR.DOT:
      return 100;
    case GRAMMAR.PARENTHESES_OPEN:
      return 90;
    case GRAMMAR.MULTIPLY:
    case GRAMMAR.DIVIDE:
    case GRAMMAR.MODULUS:
      return 60;
    case GRAMMAR.PLUS:
    case GRAMMAR.MINUS:
      return 50;
    case GRAMMAR.LESS_THAN:
    case GRAMMAR.GREATER_THAN:
    case GRAMMAR.LESS_EQUAL:
    case GRAMMAR.GREATER_EQUAL:
      return 40;
    case GRAMMAR.EQUAL:
    case GRAMMAR.NOT_EQUAL:
      return 30;
    case GRAMMAR.AND:
      return 20;
    case GRAMMAR.OR:
      return 10;
    case GRAMMAR.ASSIGN:
      return 5;
    default:
      return 0;
  }
}

// language/src/core/parser.ts
class Parser {
  source;
  tokenStream = null;
  constructor(source) {
    this.source = source;
  }
  parse() {
    this.tokenStream = this.source.getTokenizer().getTokenStream();
    return parseProgram(this);
  }
  stream() {
    if (!this.tokenStream) {
      throwParserError("Parser has not been parsed yet.");
    }
    return this.tokenStream;
  }
  expect(tokenType, keyword = null) {
    const token = this.stream().next();
    if (!token) {
      throwParserError(`Unexpected end of file. Expected ${tokenType}${keyword ? " " + keyword : ""}`);
    }
    if (token.type !== tokenType || keyword && token.value !== keyword) {
      throwParserError(`Expected ${tokenType}${keyword ? " " + keyword : ""}, got ${token.type} ${token.value}`);
    }
    return token;
  }
  expectOperator(keyword = null) {
    return this.expect(TokenType.OPERATOR, keyword);
  }
  expectAnnotation() {
    return this.expect(TokenType.ANNOTATION);
  }
  expectIdentifier() {
    return this.expect(TokenType.IDENTIFIER);
  }
  expectKeyword(keyword = null) {
    return this.expect(TokenType.KEYWORD, keyword);
  }
  expectString() {
    return this.expect(TokenType.STRING);
  }
  expectPunctuation(keyword = null) {
    return this.expect(TokenType.PUNCTUATION, keyword);
  }
  expectOneOf(tokenTypes, keywords = null) {
    const token = this.stream().next();
    if (!token) {
      throwParserError(`Unexpected end of file. Expected one of types ${tokenTypes}, got null.`);
    }
    if (!tokenTypes.includes(token.type)) {
      throwParserError(`Expected one of types ${tokenTypes}, got ${token.type}`);
    }
    if (keywords && !keywords.includes(token.value)) {
      throwParserError(`Expected one of values ${keywords}, got ${token.value}`);
    }
    return token;
  }
  consumeIf(tokenType, keyword = null) {
    const token = this.peek();
    if (token.type === tokenType && (keyword && token.value === keyword)) {
      this.next();
      return true;
    }
    return false;
  }
  consumeIfPunctuation(value) {
    return this.consumeIf(TokenType.PUNCTUATION, value);
  }
  consumeIfOperator(value) {
    return this.consumeIf(TokenType.OPERATOR, value);
  }
  consumeIfComment() {
    return this.consumeIf(TokenType.COMMENT);
  }
  consumeIfKeyword(keyword) {
    return this.consumeIf(TokenType.KEYWORD, keyword);
  }
  peek() {
    const token = this.stream().peek();
    if (token === null) {
      throwParserError("Unexpected end of file. Expected token, got null.");
    }
    return token;
  }
  next() {
    const token = this.stream().next();
    if (token === null) {
      throwParserError("Unexpected end of file. Expected token, got null.");
    }
    return token;
  }
  rewind() {
    this.stream().rewind();
  }
  position() {
    return this.stream().index;
  }
  seekAt(position) {
    this.stream().index = position;
  }
}

// language/src/library/native_class.ts
class NativeClass {
  name;
  nativeInstance;
  nativeClassSource;
  isAutoloadAble = false;
  constructor(name, nativeInstance, source) {
    this.name = name;
    this.nativeInstance = nativeInstance;
    this.nativeClassSource = source;
  }
  getClassDefinition() {
    const ast = new Parser(this.nativeClassSource).parse();
    for (const node of ast.children) {
      if (node.type === ASTNodeType.CLASS) {
        if (node instanceof ASTClassNode && node.name === this.name) {
          const classDef = ClassDefinition.constructFromAST(node);
          classDef.nativeInstance = this.nativeInstance;
          return classDef;
        }
      }
    }
    throwRuntimeError(`Class ${this.name} not found.`, ast.span);
    return null;
  }
}

// language/src/core/interpreter_conversion.ts
class LyraNativeObject {
  className;
  constructor(className) {
    this.className = className;
  }
  serialize() {
    const object = {};
    object[this.className] = Object.keys(this).filter((key) => key !== "className").reduce((object2, key) => {
      const copy = Object.assign({}, this);
      object2[key] = copy[key];
      return object2;
    }, {});
    return object;
  }
  toString() {
    return JSON.stringify({ className: this.className }, null, 2);
  }
}

class LyraObjectView extends LyraNativeObject {
  __instance;
  constructor(instance) {
    super(instance.__classDef.name);
    this.__instance = instance;
    return new Proxy(this, {
      get: (_, name) => {
        if (name in this.__instance.__instanceFields) {
          return this.__instance.__instanceFields[name];
        }
        if (name in this.__instance.__staticFields) {
          return this.__instance.__staticFields[name];
        }
        if (name in this) {
          const self = this;
          return self[name];
        }
        return;
      },
      set: (_, name, value) => {
        if (name in this.__instance.__instanceFields) {
          this.__instance.__instanceFields[name] = value;
        }
        if (name in this.__instance.__staticFields) {
          this.__instance.__staticFields[name] = value;
        }
      }
    });
  }
  serialize() {
    const object = {};
    object[this.className] = { ...this.__instance?.__instanceFields };
    return object;
  }
  toString() {
    return JSON.stringify(this.serialize(), null, 2);
  }
}
function castValue(value, expected = null) {
  const typeOf = typeof value;
  if (expected === null) {
    if (value === GRAMMAR.NULL) {
      return null;
    }
    if (value === GRAMMAR.TRUE) {
      return true;
    }
    if (value === GRAMMAR.FALSE) {
      return false;
    }
    if (typeOf === "string" && value.trim() !== "" && !isNaN(value)) {
      return Number(value);
    }
    return value;
  }
  switch (expected) {
    case TYPE_ENUM.STRING:
      return typeOf === "string" ? value : String(value);
    case TYPE_ENUM.NUMBER:
      return typeOf === "number" ? value : Number(value);
    case TYPE_ENUM.BOOLEAN:
      return typeOf === "boolean" ? value : value === "true";
    case TYPE_ENUM.NULL:
      return null;
  }
  return value;
}
function toLyraString(value) {
  const node = new ASTNode(ASTNodeType.STRING);
  node.value = value;
  return node;
}
function toLyraNumber(value) {
  const node = new ASTNode(ASTNodeType.NUMBER);
  node.value = value;
  return node;
}
function toLyraBoolean(value) {
  const node = new ASTNode(ASTNodeType.BOOLEAN);
  node.value = value;
  return node;
}
function toLyraNull() {
  const node = new ASTNode(ASTNodeType.NULL);
  node.value = GRAMMAR.NULL;
  return node;
}
function toLyraArray(values) {
  const node = new ASTArrayNode;
  node.elements = values.map((value) => toLyraValue(value));
  return node;
}
function toLyraValue(value) {
  if (value instanceof ASTNode) {
    return value;
  }
  if (typeof value === TYPE_ENUM.STRING) {
    return toLyraString(value);
  }
  if (typeof value === TYPE_ENUM.NUMBER) {
    return toLyraNumber(value);
  }
  if (typeof value === TYPE_ENUM.BOOLEAN) {
    return toLyraBoolean(value);
  }
  if (value === null || value === undefined) {
    return toLyraNull();
  }
  if (Array.isArray(value)) {
    return toLyraArray(value);
  }
  throwNativeError("Cannot convert native object to Lyra value");
}
function fromLyraValue(value) {
  if (value instanceof ASTNode) {
    return castValue(value.value);
  }
  if (value instanceof Instance) {
    if (value.__nativeInstance) {
      return value.__nativeInstance;
    }
    return new LyraObjectView(value);
  }
  if (Array.isArray(value)) {
    return value.map(fromLyraValue);
  }
  return castValue(value);
}
function returnValue(value) {
  const node = new ASTReturnNode;
  node.argument = toLyraValue(value);
  return node;
}
function wrapNativeInstance(lyraNativeObject, objectRegistry) {
  if (!objectRegistry.classes.has(lyraNativeObject.className)) {
    throwNativeError(`Class ${lyraNativeObject.className} not found.`);
  }
  const classDef = objectRegistry.classes.get(lyraNativeObject.className);
  const instance = new Instance(classDef);
  instance.__nativeInstance = lyraNativeObject;
  return instance;
}

// language/src/library/classes/string.ts
var CLASS_NAME = "String";

class LyraString extends LyraNativeObject {
  value;
  constructor(value) {
    super(CLASS_NAME);
    this.value = value;
  }
  toUpperCase() {
    return new LyraString(this.value.toUpperCase());
  }
  toLowerCase() {
    return new LyraString(this.value.toLowerCase());
  }
  toString() {
    return this.value;
  }
}

class StringType extends NativeClass {
  static CLASS_NAME = CLASS_NAME;
  constructor() {
    super(CLASS_NAME, LyraString, new Source2(`
class ${CLASS_NAME} {
	public constructor(value);
				
	public toUpperCase(): ${CLASS_NAME};
	
	public toLowerCase(): ${CLASS_NAME};

	public toString(): string;
}`));
    this.isAutoloadAble = true;
  }
}

// language/src/library/classes/system.ts
var CLASS_NAME2 = "System";

class LyraSystem {
  static alert(message) {
    alert(message);
  }
  static print(message) {
    console.log(message);
  }
  static info(value) {
    if (value instanceof LyraNativeObject) {
      console.info(value.serialize());
      return;
    }
    console.info(value);
  }
  static warning(value) {
    if (value instanceof LyraNativeObject) {
      console.warn(value.serialize());
      return;
    }
    console.warn(value);
  }
  static error(value) {
    if (value instanceof LyraNativeObject) {
      console.error(value.serialize());
      return;
    }
    console.error(value);
  }
  static log(value) {
    if (value instanceof LyraNativeObject) {
      console.log(value.serialize());
      return;
    }
    console.log(value);
  }
}

class System extends NativeClass {
  static CLASS_NAME = CLASS_NAME2;
  constructor() {
    super(CLASS_NAME2, LyraSystem, new Source2(`
class ${CLASS_NAME2} {
	public static alert(message: string): void;
	
	public static print(message: string): void;
	
	public static info(value: mixed): void;
	
	public static warning(value: mixed): void;
	
	public static error(value: mixed): void;
	
	public static log(value: mixed): void;
}`));
    this.isAutoloadAble = false;
  }
}

// language/src/library/classes/assert.ts
var CLASS_NAME3 = "Assert";
var ifFailed = (message = "") => {
  throw new Error("[AssertionError] " + (message || "Assertion failed."));
};

class LyraAssert {
  static isTrue(condition, message = "") {
    if (!condition) {
      ifFailed(message);
    }
  }
  static isFalse(condition, message = "") {
    if (condition) {
      ifFailed(message);
    }
  }
}

class Assert extends NativeClass {
  static CLASS_NAME = CLASS_NAME3;
  constructor() {
    super(CLASS_NAME3, LyraAssert, new Source2(`
class ${CLASS_NAME3} {
	public static isTrue(condition: boolean, message: string = ""): void;
	
	public static isFalse(condition: boolean, message: string = ""): void;
}`));
    this.isAutoloadAble = false;
  }
}

// language/src/library/classes/number.ts
var CLASS_NAME4 = "Number";

class LyraNumber extends LyraNativeObject {
  value;
  constructor(value) {
    super(CLASS_NAME4);
    this.value = value;
  }
  toString() {
    return this.value.toString();
  }
}

class NumberType extends NativeClass {
  static CLASS_NAME = CLASS_NAME4;
  constructor() {
    super(CLASS_NAME4, LyraNumber, new Source2(`
class ${CLASS_NAME4} {
	public constructor(value);

	public toString(): string;
}`));
    this.isAutoloadAble = true;
  }
}

// language/src/library/classes/array.ts
var ARRAY_CLASS_NAME = "Array";
var ARRAY_ITERATOR_CLASS_NAME = "ArrayIterator";

class LyraArray extends LyraNativeObject {
  values;
  constructor(values = []) {
    super(ARRAY_CLASS_NAME);
    this.values = values;
  }
  iterator() {
    return new LyraArrayIterator(this);
  }
  length() {
    return this.values.length;
  }
  push(value) {
    this.values.push(value);
  }
  get(index) {
    return this.values[index] ?? null;
  }
  removeAt(index) {
    this.values = this.values.splice(index, 1);
  }
  toString() {
    const values = this.values.map((value) => {
      if (value instanceof LyraArray) {
        return value.toString();
      }
      return value;
    });
    return `[${values.join(", ")}]`;
  }
}

class ArrayType extends NativeClass {
  static CLASS_NAME = ARRAY_CLASS_NAME;
  constructor() {
    super(ARRAY_CLASS_NAME, LyraArray, new Source2(`
class ${ARRAY_CLASS_NAME}<T> implements Iterable<T> {
	public constructor(values = []);
	
	public iterator(): Iterator<T>;
	
	public length(): number;
	
	public push(value: T): void;
	
	public get(index: number): T?;
	
	public removeAt(index: number): void;
	
	public toString(): string;
}`));
    this.isAutoloadAble = true;
  }
}

class LyraArrayIterator extends LyraNativeObject {
  values;
  index = 0;
  constructor(array) {
    super(ARRAY_ITERATOR_CLASS_NAME);
    this.values = array.values;
  }
  rewind() {
    this.index = 0;
  }
  hasNext() {
    return this.index < this.values.length;
  }
  next() {
    if (this.index + 1 > this.values.length) {
      return;
    }
    this.index++;
  }
  previous() {
    if (this.index + 1 < 0) {
      return;
    }
    this.index--;
  }
  key() {
    return this.index;
  }
  current() {
    return this.values[this.index];
  }
}

class ArrayIteratorType extends NativeClass {
  static CLASS_NAME = ARRAY_ITERATOR_CLASS_NAME;
  constructor() {
    super(ARRAY_ITERATOR_CLASS_NAME, LyraArray, new Source2(`
class ${ARRAY_ITERATOR_CLASS_NAME}<T> implements Iterator<T> {
	public constructor(array: Array<T>);
	
	public hasNext(): boolean;
	
	public next(): void;
	
	public previous(): void;
	
	public key(): number;
	
	public current(): T;
	
	public rewind(): void;
}`));
    this.isAutoloadAble = true;
  }
}

// language/src/library/native_classes.ts
class NativeClasses {
  classes = new Map;
  constructor() {
    this.classes.set(Assert.CLASS_NAME, new Assert);
    this.classes.set(System.CLASS_NAME, new System);
    this.classes.set(StringType.CLASS_NAME, new StringType);
    this.classes.set(NumberType.CLASS_NAME, new NumberType);
    this.classes.set(ArrayType.CLASS_NAME, new ArrayType);
    this.classes.set(ArrayIteratorType.CLASS_NAME, new ArrayIteratorType);
  }
}

// language/src/library/native_functions.ts
class NativeFunction {
  name;
  parameterNodes = [];
  returnType;
  constructor(name, parameters, returnType) {
    this.name = name;
    this.parameterNodes = parameters;
    this.returnType = returnType;
  }
}

class NativeFunctionTypeRegistry {
  functions = new Map;
  has(name) {
    return this.functions.has(name);
  }
  get(name) {
    const nativeFunction = this.functions.get(name);
    if (!nativeFunction) {
      throwNativeError(`Function ${name} not found.`);
    }
    return nativeFunction;
  }
  set(name, parameters, returnType) {
    this.functions.set(name, new NativeFunction(name, parameters, returnType));
    return this;
  }
}

class NativeFunctions {
  static PRINT = "print";
  getGlobalFunctions() {
    return {
      [NativeFunctions.PRINT]: (...args) => {
        console.log(...args);
      }
    };
  }
  getGlobalFunctionTypeRegistry() {
    const functions = new NativeFunctionTypeRegistry;
    functions.set(NativeFunctions.PRINT, [parameter(type(TYPE_ENUM.STRING), "message")], type(TYPE_ENUM.VOID));
    return functions;
  }
}
function type(name, nullable = false) {
  return new ASTTypeNode(ASTTypeNode.KIND_SIMPLE, name, nullable);
}
function parameter(typeAnnotation, name, defaultValue = null) {
  return new ASTParameterNode(name, typeAnnotation, defaultValue);
}

// language/src/core/type_objects.ts
class PrimitiveTypes {
  static NUMBER = TYPE_ENUM.NUMBER;
  static STRING = TYPE_ENUM.STRING;
  static BOOLEAN = TYPE_ENUM.BOOLEAN;
  static MIXED = TYPE_ENUM.MIXED;
  static NULL = TYPE_ENUM.NULL;
  static VOID = TYPE_ENUM.VOID;
  static hasType(type2) {
    return Object.hasOwnProperty.call(PrimitiveTypes, type2.toUpperCase());
  }
}

class PrimitiveClassTypes {
  static ARRAY = TYPE_ENUM.ARRAY;
  static CLASSNAME_MAP = {
    array: "Array"
  };
  static getClassRefName(type2) {
    return PrimitiveClassTypes.CLASSNAME_MAP[type2] || null;
  }
}

class Type {
  name;
  constructor(name) {
    this.name = name;
  }
  equals(other) {
    return this === other;
  }
  accepts(other) {
    return this.equals(other);
  }
  toString() {
    return `Type(${this.name})`;
  }
}

class PrimitiveType extends Type {
  constructor(name) {
    super(name);
  }
  equals(other) {
    return other instanceof PrimitiveType && this.name === other.name;
  }
}

class MixedType extends Type {
  constructor() {
    super(PrimitiveTypes.MIXED);
  }
  equals(other) {
    return other instanceof MixedType;
  }
  accepts() {
    return true;
  }
}

class VoidType extends Type {
  constructor() {
    super(PrimitiveTypes.VOID);
  }
  equals(other) {
    return other instanceof VoidType;
  }
}

class NullType extends Type {
  constructor() {
    super(PrimitiveTypes.NULL);
  }
  equals(other) {
    return other instanceof NullType;
  }
  accepts(other) {
    return other === this;
  }
}

class NullableType extends Type {
  inner;
  constructor(inner) {
    super(inner.toString() + "?");
    this.inner = inner;
  }
  equals(other) {
    if (other === Types.NULL) {
      return true;
    }
    if (other instanceof NullableType) {
      return this.inner.equals(other.inner);
    }
    return false;
  }
  accepts(other) {
    return other === Types.NULL || this.inner.accepts(other);
  }
  toString() {
    return this.inner.toString() + "?";
  }
}

class Types {
  static NUMBER = new PrimitiveType(PrimitiveTypes.NUMBER);
  static STRING = new PrimitiveType(PrimitiveTypes.STRING);
  static BOOLEAN = new PrimitiveType(PrimitiveTypes.BOOLEAN);
  static MIXED = new MixedType;
  static NULL = new NullType;
  static VOID = new VoidType;
  static getType(name) {
    if (!Object.hasOwnProperty.call(PrimitiveTypes, name.toUpperCase())) {
      throwTypeError(`Unknown primitive type ${name}.`);
    }
    const types = Types;
    return types[name.toUpperCase()];
  }
}

class TypeVariable extends Type {
  constructor(name) {
    super(name);
  }
  equals(other) {
    return other instanceof TypeVariable && this.name === other.name;
  }
  accepts() {
    return true;
  }
}

class TypeParameterSymbol {
  name;
  variableType;
  constructor(name) {
    this.name = name;
    this.variableType = new TypeVariable(name);
  }
}

class FieldSymbol {
  node;
  name;
  fieldType;
  isStatic = false;
  isPrivate = false;
  isPublic = false;
  isReadonly = false;
  owner = null;
  constructor(node, fieldType) {
    this.node = node;
    this.name = node.name;
    this.fieldType = fieldType;
    this.isStatic = node.modifiers.static;
    this.isPrivate = node.modifiers.private;
    this.isPublic = node.modifiers.public;
    this.isReadonly = node.modifiers.readonly;
  }
}

class ParameterSymbol {
  node;
  name;
  parameterType;
  defaultType = null;
  constructor(name, type2, defaultValue = null, node = null) {
    this.name = name;
    this.parameterType = type2;
    this.defaultType = defaultValue;
    this.node = node;
  }
}

class MethodSymbol {
  name;
  node;
  typeParameterSymbols = [];
  parameterSymbols = [];
  returnType = Types.MIXED;
  isStatic = false;
  isPrivate = false;
  isPublic = false;
  owner = null;
  constructor(node) {
    this.name = node.name;
    this.node = node;
    this.isStatic = node.modifiers.static;
    this.isPrivate = node.modifiers.private;
    this.isPublic = node.modifiers.public;
  }
  get body() {
    return this.node.children;
  }
}

class ClassSymbol {
  node;
  name;
  superClass = null;
  superClassSymbol = null;
  typeParameterSymbols = [];
  instanceFieldSymbols = new Map;
  staticFieldSymbols = new Map;
  instanceMethodSymbols = new Map;
  staticMethodSymbols = new Map;
  constructorMethodSymbol = null;
  implementsInterfaces = [];
  constructor(node) {
    this.node = node;
    this.name = node.name;
    this.superClass = node.superClass?.name ?? null;
  }
  resolveInstanceFieldSymbol(name) {
    if (this.instanceFieldSymbols.has(name)) {
      return this.instanceFieldSymbols.get(name) || null;
    }
    if (this.superClass) {
      return this.superClassSymbol?.resolveInstanceFieldSymbol(name) || null;
    }
    return null;
  }
  resolveStaticFieldSymbol(name) {
    if (this.staticFieldSymbols.has(name)) {
      return this.staticFieldSymbols.get(name) || null;
    }
    if (this.superClass) {
      return this.superClassSymbol?.resolveStaticFieldSymbol(name) || null;
    }
    return null;
  }
}

class InterfaceSymbol {
  node;
  name;
  typeParameterSymbols = [];
  staticFieldSymbols = new Map;
  instanceMethodSymbols = new Map;
  extendsInterfaces = [];
  constructor(node) {
    this.node = node;
    this.name = node.name;
  }
}

class ClassRefType extends Type {
  classSymbol;
  typeArguments;
  constructor(classSymbol, typeArguments = []) {
    super(ClassRefType.formatSymbolName(classSymbol.name, typeArguments));
    this.classSymbol = classSymbol;
    this.typeArguments = typeArguments;
  }
  static formatSymbolName(name, typeArguments) {
    if (typeArguments.length === 0) {
      return `classRefType(${name})`;
    }
    return `classRefType(${name}<${typeArguments.map((type2) => type2.toString()).join(", ")}>)`;
  }
  equals(other) {
    return other instanceof ClassRefType && other.classSymbol === this.classSymbol;
  }
  accepts(other) {
    if (!this.equals(other)) {
      return false;
    }
    if (other instanceof ClassRefType) {
      if (this.typeArguments.length !== other.typeArguments.length) {
        return false;
      }
      for (let i = 0;i < this.typeArguments.length; i++) {
        const otherType = other.typeArguments[i];
        if (!otherType || !this.typeArguments[i]?.accepts(otherType)) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
}

class InterfaceRefType extends Type {
  interfaceSymbol;
  typeArguments;
  constructor(interfaceSymbol, typeArguments = []) {
    super(InterfaceRefType.formatSymbolName(interfaceSymbol.name, typeArguments));
    this.interfaceSymbol = interfaceSymbol;
    this.typeArguments = typeArguments;
  }
  static formatSymbolName(name, typeArguments) {
    if (typeArguments.length === 0) {
      return `interfaceRefType(${name})`;
    }
    return `interfaceRefType(${name}<${typeArguments.map((type2) => type2.toString()).join(", ")}>)`;
  }
  equals(other) {
    return other instanceof InterfaceRefType && other.interfaceSymbol === this.interfaceSymbol;
  }
  accepts(other) {
    if (!this.equals(other)) {
      return false;
    }
    if (other instanceof InterfaceRefType) {
      if (this.typeArguments.length !== other.typeArguments.length) {
        return false;
      }
      for (let i = 0;i < this.typeArguments.length; i++) {
        const otherType = other.typeArguments[i];
        if (!otherType || !this.typeArguments[i]?.accepts(otherType)) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
}

class LambdaType extends Type {
  parameterSymbols = [];
  returnType;
  constructor(parameters, returnType) {
    super(LambdaType.createSignature(parameters, returnType));
    this.parameterSymbols = parameters;
    this.returnType = returnType;
  }
  static createSignature(parameters, returnType) {
    return `lambda(${parameters.map((parameter2) => parameter2.parameterType.toString()).join(", ")}) -> ${returnType.toString()})`;
  }
  equals(other) {
    if (!(other instanceof LambdaType)) {
      return false;
    }
    if (this.parameterSymbols.length !== other.parameterSymbols.length) {
      return false;
    }
    for (let i = 0;i < this.parameterSymbols.length; i++) {
      const otherType = other.parameterSymbols[i]?.parameterType;
      if (!otherType || !this.parameterSymbols[i]?.parameterType.accepts(otherType)) {
        return false;
      }
    }
    return this.returnType.accepts(other.returnType);
  }
}

class TypeScope {
  parent;
  types = new Map;
  typeBindings = new Map;
  currentObjectSymbol;
  constructor(parent = null) {
    this.parent = parent;
    this.currentObjectSymbol = parent?.currentObjectSymbol ?? null;
  }
  defineType(name, type2) {
    this.types.set(name, type2);
  }
  defineTypeBinding(name, typeVariable) {
    this.typeBindings.set(name, typeVariable);
  }
  hasType(name) {
    return this.types.has(name) || this.parent?.hasType(name) || false;
  }
  hasTypeBinding(name) {
    return this.typeBindings.has(name) || this.parent?.hasTypeBinding(name) || false;
  }
  getType(name) {
    if (this.types.has(name)) {
      return this.types.get(name) || Types.NULL;
    }
    return this.parent?.getType(name) || Types.NULL;
  }
  getTypeBinding(name) {
    if (this.typeBindings.has(name)) {
      return this.typeBindings.get(name) || Types.NULL;
    }
    return this.parent?.getTypeBinding(name) || Types.NULL;
  }
}
function wrapType(typeNode, objectRegistry, scope = null) {
  let baseType = resolveBaseType(typeNode, objectRegistry, scope);
  if (baseType) {
    if (!(baseType instanceof NullableType) && typeNode.nullable) {
      return new NullableType(baseType);
    }
    return baseType;
  }
  throwTypeError(`Could not resolve type ${typeNode.name}.`, typeNode.span);
}
function resolveBaseType(typeNode, objectRegistry, scope = null) {
  switch (typeNode.kind) {
    case ASTTypeNode.KIND_SIMPLE: {
      if (scope && scope.hasTypeBinding(typeNode.name)) {
        return scope.getTypeBinding(typeNode.name);
      }
      if (objectRegistry.types.hasSymbol(typeNode.name)) {
        return resolveRefType(typeNode, objectRegistry);
      }
      if (PrimitiveTypes.hasType(typeNode.name)) {
        return resolvePrimitiveType(typeNode);
      }
      return new TypeVariable(typeNode.name);
    }
    case ASTTypeNode.KIND_GENERIC: {
      if (!objectRegistry.types.hasSymbol(typeNode.name)) {
        throwTypeError(`Symbol ${typeNode.name} is not a class reference.`, typeNode.span);
      }
      return resolveGenericRefType(typeNode, objectRegistry);
    }
    case ASTTypeNode.KIND_LAMBDA: {
      return resolveLambdaType(typeNode, objectRegistry);
    }
    default: {
      throwTypeError(`Invalid type annotation, kind ${typeNode.kind}.`, typeNode.span);
    }
  }
}
function resolveRefType(typeNode, objectRegistry) {
  if (typeNode.typeArguments.length > 0) {
    throwTypeError(`Generic class ${typeNode.name} cannot have type arguments.`, typeNode.span);
  }
  if (objectRegistry.types.classSymbols.has(typeNode.name)) {
    return new ClassRefType(objectRegistry.types.getClassSymbol(typeNode.name));
  }
  if (objectRegistry.types.interfaceSymbols.has(typeNode.name)) {
    return new InterfaceRefType(objectRegistry.types.getInteraceSymbol(typeNode.name));
  }
  throwTypeError(`Unknown class or interface ${typeNode.name}.`, typeNode.span);
}
function resolveGenericRefType(typeNode, objectRegistry) {
  if (objectRegistry.types.classSymbols.has(typeNode.name)) {
    return new ClassRefType(objectRegistry.types.getClassSymbol(typeNode.name), typeNode.typeArguments.map((typeArgument) => resolveBaseType(typeArgument, objectRegistry)));
  }
  if (objectRegistry.types.interfaceSymbols.has(typeNode.name)) {
    return new InterfaceRefType(objectRegistry.types.getInteraceSymbol(typeNode.name), typeNode.typeArguments.map((typeArgument) => resolveBaseType(typeArgument, objectRegistry)));
  }
  throwTypeError(`Unknown class or interface ${typeNode.name}.`, typeNode.span);
}
function resolvePrimitiveType(typeNode) {
  return Types.getType(typeNode.name);
}
function resolveLambdaType(typeNode, objectRegistry, scope = null) {
  const parameterSymbols = typeNode.parameterTypes.map((typeAnnotation) => {
    return new ParameterSymbol(typeAnnotation.name, wrapType(typeAnnotation, objectRegistry, scope));
  });
  return new LambdaType(parameterSymbols, typeNode.returnType ? wrapType(typeNode.returnType, objectRegistry, scope) : Types.MIXED);
}
function substituteType(type2, substitutionMap) {
  if (type2 instanceof TypeVariable) {
    return substitutionMap.get(type2.name) ?? type2;
  }
  if (type2 instanceof ClassRefType) {
    return new ClassRefType(type2.classSymbol, type2.typeArguments.map((typeArgument) => substituteType(typeArgument, substitutionMap)));
  }
  if (type2 instanceof NullableType) {
    return new NullableType(substituteType(type2.inner, substitutionMap));
  }
  return type2;
}
function buildTypeSubstitutionMap(typeParameters, typeArguments) {
  const substitutionMap = new Map;
  for (let i = 0;i < typeParameters.length; i++) {
    const typeParameter = typeParameters[i] || null;
    const typeArgument = typeArguments[i] || null;
    if (typeParameter && typeArgument) {
      substitutionMap.set(typeParameter.name, typeArgument);
    }
  }
  return substitutionMap;
}

// language/src/core/autoboxing.ts
class AutoboxedTypes {
  static NUMBER = "Number";
  static STRING = "String";
  static BOOLEAN = "Boolean";
  static CLASSNAME_MAP = {
    number: AutoboxedTypes.NUMBER,
    string: AutoboxedTypes.STRING,
    boolean: AutoboxedTypes.BOOLEAN
  };
  static getClassName(key) {
    const className = AutoboxedTypes.CLASSNAME_MAP[key];
    if (!className) {
      throwRuntimeError(`No class found for primitive type ${key}.`);
    }
    return className;
  }
}

class Autoboxing {
  static CLASSNAME_MAP = new Map([
    [Types.NUMBER, AutoboxedTypes.NUMBER],
    [Types.STRING, AutoboxedTypes.STRING],
    [Types.BOOLEAN, AutoboxedTypes.BOOLEAN]
  ]);
  static autoboxIfNeeded(objectType, objectRegistry) {
    const className = Autoboxing.CLASSNAME_MAP.get(objectType);
    if (className) {
      return new ClassRefType(objectRegistry.types.getClassSymbol(className));
    }
    return objectType;
  }
}

// language/src/core/interpreter_runtime.ts
var nativeClasses = new NativeClasses;
var nativeFunctions = new NativeFunctions;
var globalFunctions = nativeFunctions.getGlobalFunctions();
var globalFunctionTypeRegistry = nativeFunctions.getGlobalFunctionTypeRegistry();

class AbstractFunctionCall {
  node;
  objectRegistry;
  functionEnv;
  constructor(node, objectRegistry, functionEnv) {
    this.node = node;
    this.objectRegistry = objectRegistry;
    this.functionEnv = functionEnv;
  }
  getASTCallNode() {
    if (this.node instanceof ASTCallNode) {
      return this.node;
    }
    throwRuntimeError(`Invalid native function call ${this.node.type}.`, this.node.span);
  }
  getASTLambdaNode() {
    if (this.node instanceof ASTLambdaNode) {
      return this.node;
    }
    throwRuntimeError(`Invalid lambda call ${this.node.type}.`, this.node.span);
  }
}

class LambdaFunctionCall extends AbstractFunctionCall {
  evalCall(thisValue, ...args) {
    const node = this.getASTLambdaNode();
    if (node === null) {
      throwRuntimeError("Invalid function call.");
    }
    const closureEnv = new Environment(this.functionEnv);
    for (let i = 0;i < node.parameters.length; i++) {
      const parameter2 = node.parameters[i] || null;
      if (!parameter2) {
        continue;
      }
      closureEnv.define(parameter2.name, args[i]);
    }
    return evalBlock(node.children, this.objectRegistry, closureEnv, thisValue, node.returnType);
  }
}

class NativeFunctionCall extends AbstractFunctionCall {
  evalCall(thisValue, ...args) {
    const callNode = this.getASTCallNode();
    if (callNode === null) {
      throwRuntimeError("Invalid function call.");
    }
    let result = this.resolveCall(thisValue)[callNode.callee.name](...args);
    if (result instanceof LyraNativeObject) {
      result = wrapNativeInstance(result, this.objectRegistry);
    } else {
      result = returnValue(result);
    }
    return evalBlock([result], this.objectRegistry, this.functionEnv, thisValue, this.lookupFunctionType(callNode.callee.name).returnType);
  }
  lookupFunctionType(name) {
    return globalFunctionTypeRegistry.get(name);
  }
  resolveCall(thisValue) {
    const node = this.getASTCallNode();
    if (node === null) {
      throwRuntimeError("Invalid function call.");
    }
    return evalExpression(node.callee, this.objectRegistry, this.functionEnv, thisValue);
  }
}
function registerNativeClasses(objectRegistry, environment) {
  for (const nativeClass of nativeClasses.classes.values()) {
    if (nativeClass.isAutoloadAble) {
      const classDef = nativeClass.getClassDefinition();
      if (classDef === null) {
        throwRuntimeError("Class definition is null.");
      }
      objectRegistry.classes.set(nativeClass.name, classDef);
      environment.define(nativeClass.name, classDef);
    }
  }
}
function registerNativeFunctions(environment) {
  for (const name in globalFunctions) {
    const globalFunction = globalFunctions[name];
    if (!globalFunction) {
      throwRuntimeError("Global function is null.");
    }
    environment.define(name, globalFunctions);
  }
}
function evalNode(node, objectRegistry, environment, thisValue = null) {
  if (node.isExpression) {
    return new ReturnValue(evalExpression(node, objectRegistry, environment, thisValue));
  }
  switch (node.type) {
    case ASTNodeType.PROGRAMM: {
      for (const child of node.children) {
        evalNode(child, objectRegistry, environment, thisValue);
      }
      return null;
    }
    case ASTNodeType.IMPORT:
    case ASTNodeType.INTERFACE: {
      return null;
    }
    case ASTNodeType.CLASS: {
      if (node instanceof ASTClassNode) {
        return evalClass(node, objectRegistry, environment);
      }
      throwRuntimeError(`Invalid class node ${node.type}.`, node.span);
      break;
    }
    case ASTNodeType.VARIABLE: {
      if (node instanceof ASTVariableNode) {
        const value = node.init ? evalExpression(node.init, objectRegistry, environment, thisValue) : null;
        environment.define(node.name, value);
        return null;
      }
      throwRuntimeError(`Invalid variable node ${node.type}.`, node.span);
      break;
    }
    case ASTNodeType.IF: {
      if (node instanceof ASTIfNode) {
        return evalIf(node, objectRegistry, environment, thisValue);
      }
      throwRuntimeError(`Invalid if node ${node.type}.`, node.span);
      break;
    }
    case ASTNodeType.MATCH: {
      if (node instanceof ASTMatchNode) {
        return evalMatch(node, objectRegistry, environment, thisValue);
      }
      throwRuntimeError(`Invalid match node ${node.type}.`, node.span);
      break;
    }
    case ASTNodeType.FOREACH: {
      if (node instanceof ASTForeachNode) {
        return evalForeach(node, objectRegistry, environment, thisValue);
      }
      throwRuntimeError(`Invalid foreach node ${node.type}.`, node.span);
      break;
    }
    case ASTNodeType.EXPRESSION: {
      if (node instanceof ASTExpressionNode) {
        return evalExpression(node.expr, objectRegistry, environment, thisValue);
      }
      throwRuntimeError(`Invalid expression node ${node.type}.`, node.span);
      break;
    }
    case ASTNodeType.RETURN: {
      if (node instanceof ASTReturnNode) {
        const value = node.argument ? evalExpression(node.argument, objectRegistry, environment, thisValue) : null;
        return new ReturnValue(value);
      }
      throwRuntimeError(`Invalid return node ${node.type}.`, node.span);
      break;
    }
    default: {
      throwRuntimeError(`Unhandled node ${node.type}.`, node.span);
    }
  }
}
function createInstanceFromNode(node) {
  return new Instance(ClassDefinition.constructFromAST(node));
}
function registerInstance(node, objectRegistry) {
  let classDef;
  if (objectRegistry.classes.has(node.name)) {
    classDef = objectRegistry.classes.get(node.name);
  } else {
    classDef = ClassDefinition.constructFromAST(node);
    objectRegistry.classes.set(node.name, classDef);
  }
  return new Instance(classDef);
}
function evalNativeInstance(expr, classDef, objectRegistry, environment) {
  const instance = new Instance(classDef);
  const constructor = classDef.constructorMethod;
  const constructorEnv = new Environment(environment);
  const constructorArgs = evalMethodArguments(expr, constructor ? constructor.parameters : [], objectRegistry, environment, instance);
  constructorEnv.define(GRAMMAR.THIS, instance);
  if (classDef.nativeInstance === null) {
    throwRuntimeError("Class has no native instance");
  }
  const nativeInstance = new classDef.nativeInstance(...constructorArgs.map(fromLyraValue));
  if (nativeInstance instanceof LyraNativeObject) {
    instance.__nativeInstance = nativeInstance;
  }
  return instance;
}
function evalInstance(expr, classDef, objectRegistry, environment) {
  const instance = new Instance(classDef);
  if (classDef.constructorMethod) {
    const constructor = classDef.constructorMethod;
    const constructorEnv = new Environment(environment);
    const constructorArgs = evalMethodArguments(expr, constructor.parameters, objectRegistry, environment, instance);
    constructorEnv.define(GRAMMAR.THIS, instance);
    for (let i = 0;i < constructorArgs.length; i++) {
      const parameter2 = constructor.parameters[i] || null;
      if (parameter2) {
        constructorEnv.define(parameter2.name, constructorArgs[i]);
      }
    }
    for (const child of constructor.children) {
      evalNode(child, objectRegistry, constructorEnv, instance);
    }
  }
  return instance;
}
function evalClass(node, objectRegistry, environment) {
  const instance = registerInstance(node, objectRegistry);
  let rawValue;
  for (const field of instance.__classDef.instanceFields) {
    rawValue = field.initializer ? evalExpression(field.initializer, objectRegistry, environment) : null;
    instance.__instanceFields[field.name] = castValue(rawValue, field.type);
  }
  for (const field of instance.__classDef.staticFields) {
    rawValue = field.initializer ? evalExpression(field.initializer, objectRegistry, environment) : null;
    instance.__staticFields[field.name] = castValue(rawValue, field.type);
  }
  environment.define(node.name, instance);
}
function evalNew(expr, objectRegistry, environment) {
  if (!objectRegistry.classes.has(expr.name)) {
    throwRuntimeError(`Unknown class ${expr.name}.`, expr.span);
  }
  const classDef = objectRegistry.classes.get(expr.name);
  if (classDef.nativeInstance) {
    return evalNativeInstance(expr, classDef, objectRegistry, environment);
  }
  return evalInstance(expr, classDef, objectRegistry, environment);
}
function evalExpression(expr, objectRegistry, environment, thisValue = null) {
  switch (expr.type) {
    case ASTNodeType.STRING:
    case ASTNodeType.NUMBER:
    case ASTNodeType.BOOLEAN: {
      return expr.value;
    }
    case ASTNodeType.NULL: {
      return null;
    }
    case ASTNodeType.IDENTIFIER: {
      return environment.get(expr.name);
    }
    case ASTNodeType.THIS: {
      if (!thisValue) {
        throwRuntimeError(`this used outside of method.`, expr.span);
      }
      return thisValue;
    }
    case ASTNodeType.BINARY: {
      if (expr instanceof ASTBinaryNode) {
        const left = castValue(evalExpression(expr.left, objectRegistry, environment, thisValue));
        const right = castValue(evalExpression(expr.right, objectRegistry, environment, thisValue));
        switch (expr.operator) {
          case GRAMMAR.PLUS: {
            return left + right;
          }
          case GRAMMAR.MINUS: {
            return left - right;
          }
          case GRAMMAR.MULTIPLY: {
            return left * right;
          }
          case GRAMMAR.DIVIDE: {
            return left / right;
          }
          case GRAMMAR.MODULUS: {
            return left % right;
          }
          case GRAMMAR.LESS_THAN: {
            return left < right;
          }
          case GRAMMAR.GREATER_THAN: {
            return left > right;
          }
          case GRAMMAR.LESS_EQUAL: {
            return left <= right;
          }
          case GRAMMAR.GREATER_EQUAL: {
            return left >= right;
          }
          case GRAMMAR.EQUAL: {
            return left === right;
          }
          case GRAMMAR.NOT_EQUAL: {
            return left !== right;
          }
          case GRAMMAR.AND: {
            return left && right;
          }
          case GRAMMAR.OR: {
            return left || right;
          }
          default: {
            throwRuntimeError(`Unknown operator ${expr.operator}`);
          }
        }
      }
      throwRuntimeError(`Invalid binary expression ${expr.type}`);
      break;
    }
    case ASTNodeType.UNARY: {
      if (expr instanceof ASTUnaryNode) {
        return evalUnary(expr, objectRegistry, environment, thisValue);
      }
      throwRuntimeError(`Invalid unary expression ${expr.type}.`, expr.span);
      break;
    }
    case ASTNodeType.ASSIGNMENT: {
      if (expr instanceof ASTAssignmentNode) {
        return evalAssign(expr, objectRegistry, environment, thisValue);
      }
      throwRuntimeError(`Invalid assignment expression ${expr.type}`, expr.span);
      break;
    }
    case ASTNodeType.MEMBER: {
      if (expr instanceof ASTMemberNode) {
        return evalMember(expr, environment);
      }
      throwRuntimeError(`Invalid member expression ${expr.type}`, expr.span);
      break;
    }
    case ASTNodeType.CALL: {
      if (expr instanceof ASTCallNode) {
        return evalCall(expr, objectRegistry, environment, thisValue);
      }
      throwRuntimeError(`Invalid call expression ${expr.type}`, expr.span);
      break;
    }
    case ASTNodeType.NEW: {
      if (expr instanceof ASTNewNode) {
        return evalNew(expr, objectRegistry, environment);
      }
      throwRuntimeError(`Invalid call expression ${expr.type}`, expr.span);
      break;
    }
    case ASTNodeType.ARRAY: {
      if (expr instanceof ASTArrayNode) {
        const values = [];
        for (const elem of expr.elements) {
          values.push(evalExpression(elem, objectRegistry, environment, thisValue));
        }
        const classDef = objectRegistry.classes.get("Array");
        const instance = new Instance(classDef);
        instance.__nativeInstance = new classDef.nativeInstance(fromLyraValue(values));
        return instance;
      }
      throwRuntimeError(`Invalid array expression ${expr.type}`, expr.span);
      break;
    }
    case ASTNodeType.INDEX: {
      if (expr instanceof ASTIndexNode) {
        if (!expr.object) {
          throwRuntimeError(`Index access on null.`, expr.span);
          break;
        }
        if (!expr.index) {
          throwRuntimeError(`Access with unspecific index.`, expr.span);
          break;
        }
        const object = evalExpression(expr.object, objectRegistry, environment, thisValue);
        const index = evalExpression(expr.index, objectRegistry, environment, thisValue);
        if (!(object instanceof LyraArray || object.__nativeInstance instanceof LyraArray)) {
          throwRuntimeError("Index access on non-array", expr.span);
          break;
        }
        const target = object instanceof LyraArray ? object : object.__nativeInstance;
        const value = target.values[index];
        if (value instanceof LyraNativeObject) {
          return wrapNativeInstance(value, objectRegistry);
        }
        return value;
      }
      throwRuntimeError(`Invalid index expression ${expr.type}`, expr.span);
      break;
    }
    case ASTNodeType.LAMBDA: {
      if (expr instanceof ASTLambdaNode) {
        return evalLambda(expr, objectRegistry, environment);
      }
      throwRuntimeError(`Invalid lambda expression ${expr.type}`, expr.span);
      break;
    }
    default: {
      throwRuntimeError(`Unhandled expression ${expr.type}.`, expr.span);
    }
  }
}
function evalLambda(node, objectRegistry, lambdaEnv) {
  return new LambdaFunctionCall(node, objectRegistry, lambdaEnv);
}
function evalAssign(expr, objectRegistry, environment, thisValue = null) {
  const value = evalExpression(expr.right, objectRegistry, environment, thisValue);
  if (expr.left.type === ASTNodeType.MEMBER) {
    if (expr.left instanceof ASTMemberNode) {
      const object = evalExpression(expr.left.object, objectRegistry, environment, thisValue);
      if (expr.left.object.type === ASTNodeType.IDENTIFIER) {
        object.__staticFields[expr.left.property] = value;
      } else {
        object.__instanceFields[expr.left.property] = value;
      }
    } else {
      throwRuntimeError(`Invalid member expression ${expr.type}`, expr.span);
    }
  } else {
    environment.set(expr.left.name, value);
  }
  return value;
}
function evalMember(expr, environment) {
  const object = environment.get(expr.object.name);
  if (expr.property in object.__instanceFields) {
    return object.__instanceFields[expr.property];
  }
  if (expr.property in object.__staticFields) {
    return object.__staticFields[expr.property];
  }
  throwRuntimeError(`Unknown member ${expr.property}`, expr.span);
}
function evalCall(expr, objectRegistry, environment, thisValue = null) {
  if (expr.callee.type === ASTNodeType.IDENTIFIER && expr.callee.name === GRAMMAR.SUPER) {
    if (!thisValue || !thisValue.__classDef?.superClass) {
      throwRuntimeError("super() used outside of subclass constructor");
    }
    const superClassDef = objectRegistry.classes.get(thisValue.__classDef.superClass);
    const constructorMethod = superClassDef.constructorMethod;
    if (!constructorMethod) {
      return null;
    }
    const constructorEnv = new Environment(environment);
    constructorEnv.define(GRAMMAR.THIS, thisValue);
    bindMethodParameters(expr, constructorMethod.parameters, objectRegistry, constructorEnv, environment, thisValue);
    for (const child of constructorMethod.children) {
      evalNode(child, objectRegistry, constructorEnv, thisValue);
    }
    return null;
  }
  if (expr.callee.type === ASTNodeType.MEMBER) {
    if (expr.callee instanceof ASTMemberNode) {
      if (expr.callee.object.type === ASTNodeType.IDENTIFIER) {
        const className = expr.callee.object.name;
        if (objectRegistry.classes.has(className)) {
          return evalStaticCall(expr, className, objectRegistry, environment, thisValue);
        }
      }
      return evalInstanceCall(expr, objectRegistry, environment, thisValue);
    }
    return null;
  }
  return evalFunctionCall(expr, objectRegistry, environment, thisValue);
}
function evalFunctionCall(expr, objectRegistry, environment, thisValue = null) {
  const functionCall = evalExpression(expr.callee, objectRegistry, environment, thisValue);
  const args = evalCallArguments(expr, objectRegistry, environment, thisValue);
  if (functionCall instanceof LambdaFunctionCall) {
    return functionCall.evalCall(thisValue, ...args);
  }
  return new NativeFunctionCall(expr, objectRegistry, environment).evalCall(thisValue, ...args);
}
function evalStaticCall(expr, className, objectRegistry, environment, thisValue = null) {
  if (!(expr.callee instanceof ASTMemberNode)) {
    throwRuntimeError(`Invalid member expression ${expr.type}`, expr.span);
    return null;
  }
  const classDef = objectRegistry.classes.get(className);
  const method = classDef.staticMethods[expr.callee.property];
  if (!method) {
    throwRuntimeError(`Static method ${className}.${expr.callee.property} not found`, expr.callee.span);
    return null;
  }
  if (classDef.nativeInstance && classDef.nativeInstance[method.name]) {
    const args = evalMethodArguments(expr, method.parameters, objectRegistry, environment, thisValue);
    const rawArgs = args.map(fromLyraValue);
    const result = classDef.nativeInstance[method.name](...rawArgs);
    if (result instanceof LyraNativeObject) {
      return wrapNativeInstance(result, objectRegistry);
    }
    return evalBlock([returnValue(result)], objectRegistry, new Environment(environment), thisValue, method.returnType);
  }
  const methodEnv = new Environment(environment);
  bindMethodParameters(expr, method.parameters, objectRegistry, methodEnv, environment, thisValue);
  return evalBlock(method.children, objectRegistry, methodEnv, thisValue, method.returnType);
}
function evalInstanceCall(expr, objectRegistry, environment, thisValue = null) {
  if (!(expr.callee instanceof ASTMemberNode)) {
    throwRuntimeError(`Invalid member expression ${expr.type}`, expr.span);
    return null;
  }
  let target = evalExpression(expr.callee.object, objectRegistry, environment, thisValue);
  target = autoBoxIfNeeded(target, objectRegistry, expr.callee.span);
  if (!target || !target.__classDef) {
    throwRuntimeError("Instance call on non-object", expr.callee.span);
  }
  let classDef = target.__classDef;
  if (expr.callee.object.type === ASTNodeType.IDENTIFIER && expr.callee.object.name === "super") {
    const superName = classDef.superClass;
    if (!superName) {
      throwRuntimeError("super used but no superclass", expr.callee.span);
    }
    classDef = objectRegistry.classes.get(superName);
  }
  const method = resolveInstanceMethod(classDef, objectRegistry, expr.callee.property);
  if (!method) {
    throwRuntimeError(`Method ${expr.callee.property} not found on ${classDef.name}`, expr.callee.span);
    return null;
  }
  const methodEnv = new Environment(environment);
  methodEnv.define(GRAMMAR.THIS, target);
  if (target.__nativeInstance && method.name in target.__nativeInstance) {
    const args = evalMethodArguments(expr, method.parameters, objectRegistry, environment, thisValue);
    const rawArgs = args.map(fromLyraValue);
    const result = target.__nativeInstance[method.name](...rawArgs);
    if (result instanceof LyraNativeObject) {
      return wrapNativeInstance(result, objectRegistry);
    }
    return evalBlock([returnValue(result)], objectRegistry, methodEnv, target, method.returnType);
  }
  bindMethodParameters(expr, method.parameters, objectRegistry, methodEnv, environment, thisValue);
  return evalBlock(method.children, objectRegistry, methodEnv, target, method.returnType);
}
function resolveInstanceMethod(classDef, objectRegistry, methodName) {
  if (classDef.instanceMethods[methodName]) {
    return classDef.instanceMethods[methodName];
  }
  if (classDef.superClass) {
    const superDef = objectRegistry.classes.get(classDef.superClass);
    return resolveInstanceMethod(superDef, objectRegistry, methodName);
  }
  return null;
}
function bindMethodParameters(callNode, parameters, objectRegistry, methodEnv, environment, thisValue = null) {
  const args = callNode.arguments;
  for (let i = 0;i < parameters.length; i++) {
    const parameter2 = parameters[i] || null;
    const argument = args[i] || null;
    if (!parameter2) {
      throwRuntimeError("Missing parameter name in method call.");
    }
    let rawValue;
    if (argument) {
      rawValue = evalExpression(argument, objectRegistry, environment, thisValue);
    } else if (parameter2?.defaultValue) {
      rawValue = evalExpression(parameter2.defaultValue, objectRegistry, environment, thisValue);
    }
    const casted = parameter2.typeAnnotation ? castValue(rawValue, parameter2.typeAnnotation.name) : castValue(rawValue, TYPE_ENUM.MIXED);
    methodEnv.define(parameter2.name, casted);
  }
}
function evalCallArguments(node, objectRegistry, environment, thisValue = null) {
  if (node.callee instanceof ASTLambdaNode) {
    const lambda = node.callee;
    return evalMethodArguments(node, lambda.parameters, objectRegistry, environment, thisValue);
  }
  if (node.callee.type === ASTNodeType.IDENTIFIER) {
    return node.arguments.map((argument) => {
      return castValue(evalExpression(argument, objectRegistry, environment, thisValue), argument.type);
    });
  }
  let moduleName = "unknown";
  let methodName = "unknown";
  if (node.callee instanceof ASTMemberNode) {
    moduleName = node.callee.object.name;
    methodName = node.callee.property;
  }
  throwRuntimeError(`Unknown function ${moduleName}.${methodName}`, node.span);
}
function evalMethodArguments(expr, parameters, objectRegistry, environment, thisValue = null) {
  const args = [];
  for (let i = 0;i < parameters.length; i++) {
    const parameter2 = parameters[i] || null;
    const argument = expr.arguments[i] || null;
    let value;
    if (argument) {
      value = evalExpression(argument, objectRegistry, environment, thisValue);
    } else if (parameter2?.defaultValue) {
      value = evalExpression(parameter2.defaultValue, objectRegistry, environment, thisValue);
    } else {
      throwRuntimeError(`[RuntimeError] Missing argument '${parameter2?.name}'`, expr.span);
    }
    args.push(value);
  }
  return args.map((argument, i) => {
    const parameter2 = parameters[i];
    return parameter2?.typeAnnotation ? castValue(argument, parameter2.typeAnnotation.name) : castValue(argument, TYPE_ENUM.MIXED);
  });
}
function evalIf(node, objectRegistry, environment, thisValue = null) {
  const condition = castValue(evalExpression(node.condition, objectRegistry, environment, thisValue), TYPE_ENUM.BOOLEAN);
  if (condition === true) {
    return evalBlock(node.then.children, objectRegistry, new Environment(environment), thisValue);
  }
  if (node.else) {
    if (node.else instanceof ASTIfNode) {
      return evalIf(node.else, objectRegistry, environment, thisValue);
    }
    return evalBlock(node.else.children, objectRegistry, new Environment(environment), thisValue);
  }
  return null;
}
function evalMatch(node, objectRegistry, environment, thisValue = null) {
  const matchValue = evalExpression(node.expression, objectRegistry, environment);
  for (const caseNode of node.cases) {
    if (caseNode.test === null) {
      continue;
    }
    const testValue = evalExpression(caseNode.test, objectRegistry, environment, thisValue);
    if (testValue === matchValue) {
      return evalMatchCase(caseNode, objectRegistry, environment, thisValue);
    }
  }
  if (node.defaultCase) {
    return evalMatchCase(node.defaultCase, objectRegistry, environment, thisValue);
  }
  return null;
}
function evalMatchCase(node, objectRegistry, environment, thisValue = null) {
  return evalBlock(node.children, objectRegistry, new Environment(environment), thisValue);
}
function evalForeach(node, objectRegistry, environment, thisValue = null) {
  let iterable = evalExpression(node.iterable, objectRegistry, environment, thisValue);
  if (!(iterable instanceof Instance)) {
    throwRuntimeError(`foreach expects an object implementing Iterable`, node.iterable.span);
  }
  const iteratorMethod = resolveInstanceMethod(iterable.__classDef, objectRegistry, "iterator");
  if (!iteratorMethod) {
    throwRuntimeError(`Object does not implement Iterable (missing iterator())`, node.iterable.span);
  }
  const iterator = evalInstanceCall((() => {
    return new ASTCallNode(new ASTMemberNode(node.iterable, "iterator"));
  })(), objectRegistry, environment, thisValue);
  if (!(iterator instanceof Instance)) {
    throwRuntimeError(`iterator() must return an Iterator object`, node.iterable.span);
  }
  callIteratorMethod(iterator, "rewind", objectRegistry, environment);
  while (callIteratorMethod(iterator, "hasNext", objectRegistry, environment)) {
    const value = callIteratorMethod(iterator, "current", objectRegistry, environment);
    const loopEnv = new Environment(environment);
    loopEnv.define(node.iterator, value);
    const result = evalBlock(node.body, objectRegistry, loopEnv, thisValue);
    if (result instanceof ReturnValue) {
      return result;
    }
    callIteratorMethod(iterator, "next", objectRegistry, environment);
  }
  return null;
}
function callIteratorMethod(iterator, methodName, objectRegistry, environment) {
  return callInstanceMethod(iterator, iterator.__classDef.findMethod(methodName), [], objectRegistry, environment);
}
function evalUnary(node, objectRegistry, environment, thisValue = null) {
  const value = evalExpression(node.argument, objectRegistry, environment, thisValue);
  switch (node.operator) {
    case GRAMMAR.EXCLAMATION_MARK:
      return !castValue(value);
  }
  throwRuntimeError(`Unsupported unary operator ${node.operator}`, node.span);
}
function evalBlock(blockNodes, objectRegistry, environment, thisValue = null, returnType = null) {
  for (const blockNode of blockNodes) {
    const result = evalNode(blockNode, objectRegistry, environment, thisValue);
    if (result instanceof ReturnValue) {
      return castValue(result.value, returnType?.name);
    }
  }
  return null;
}
function evalAnnotationValue(node) {
  switch (node.type) {
    case ASTNodeType.STRING:
    case ASTNodeType.NUMBER:
    case ASTNodeType.BOOLEAN:
    case ASTNodeType.IDENTIFIER: {
      return castValue(node.value);
    }
    case ASTNodeType.ARRAY: {
      if (node instanceof ASTArrayNode) {
        return node.elements.map((child) => evalAnnotationValue(child));
      }
      throwRuntimeError(`Invalid annotation property value: ${node.type}`, node.span);
      break;
    }
    default: {
      throwRuntimeError(`Unsupported annotation expression: ${node.type}`, node.span);
    }
  }
}
function evalAnnotationProperties(annotation) {
  const properties = {};
  for (const [key, valueNode] of annotation.properties) {
    properties[key] = evalAnnotationValue(valueNode);
  }
  return properties;
}
function callInstanceMethod(instance, methodNode, args, objectRegistry, environment) {
  const methodEnv = new Environment(environment);
  methodEnv.define(GRAMMAR.THIS, instance);
  if (instance.__nativeInstance && methodNode.name in instance.__nativeInstance) {
    const rawArgs = args.map(fromLyraValue);
    const result = instance.__nativeInstance[methodNode.name](...rawArgs);
    if (result instanceof LyraNativeObject) {
      return wrapNativeInstance(result, objectRegistry);
    }
    return evalBlock([returnValue(result)], objectRegistry, methodEnv, instance, methodNode.returnType);
  }
  for (let i = 0;i < methodNode.parameters.length; i++) {
    const parameter2 = methodNode.parameters[i] || null;
    const argument = args[i] || null;
    if (!parameter2) {
      throwRuntimeError("Method parameter is null.");
    }
    let value;
    if (!argument) {
      value = parameter2.defaultValue ? evalNode(parameter2.defaultValue, objectRegistry, methodEnv, instance) : null;
    } else {
      value = args[i];
    }
    methodEnv.define(parameter2.name, value);
  }
  return evalBlock(methodNode.children, objectRegistry, methodEnv, instance, methodNode.returnType);
}
function autoBoxIfNeeded(value, objectRegistry, span = null) {
  if (value instanceof Instance) {
    return value;
  }
  if (typeof value === TYPE_ENUM.NUMBER) {
    return createBoxedInstance(AutoboxedTypes.getClassName(TYPE_ENUM.NUMBER), value, objectRegistry, span);
  }
  if (typeof value === TYPE_ENUM.STRING) {
    return createBoxedInstance(AutoboxedTypes.getClassName(TYPE_ENUM.STRING), value, objectRegistry, span);
  }
  if (typeof value === TYPE_ENUM.BOOLEAN) {
    return createBoxedInstance(AutoboxedTypes.getClassName(TYPE_ENUM.BOOLEAN), value, objectRegistry, span);
  }
  return value;
}
function createBoxedInstance(className, primitiveValue, objectRegistry, span = null) {
  const classDef = objectRegistry.classes.get(className);
  if (!classDef) {
    throwRuntimeError(`Autoboxing failed: ${className} not defined`, span);
  }
  const instance = new Instance(classDef);
  instance.__nativeInstance = new classDef.nativeInstance(fromLyraValue(primitiveValue));
  return instance;
}

// language/src/core/interpreter.ts
class Interpreter {
  environment;
  objectRegistry;
  constructor(environment, objectRegistry) {
    this.environment = environment;
    this.objectRegistry = objectRegistry;
    registerNativeClasses(objectRegistry, environment);
    registerNativeFunctions(environment);
  }
  run(ast) {
    evalNode(ast, this.objectRegistry, this.environment);
  }
}

// language/src/core/interpreter_registry.ts
class ClassRegistry {
  map = new Map;
  register(node) {
    this.set(node.name, ClassDefinition.constructFromAST(node));
  }
  all() {
    return this.map.values();
  }
  set(name, classDefinition) {
    this.map.set(name, classDefinition);
  }
  get(name) {
    const classDef = this.map.get(name);
    if (!classDef) {
      throwRuntimeError(`Class ${name} not found.`);
    }
    return classDef;
  }
  has(name) {
    return this.map.has(name);
  }
}

class InterfaceRegistry {
  map = new Map;
  register(node) {
    this.set(node.name, InterfaceDefinition.constructFromAST(node));
  }
  all() {
    return this.map.values();
  }
  set(name, interfaceDefinition) {
    this.map.set(name, interfaceDefinition);
  }
}

class TypeRegistry {
  classSymbols = new Map;
  interfaceSymbols = new Map;
  allClassSymbols() {
    return this.classSymbols.values();
  }
  allInterfaceSymbols() {
    return this.interfaceSymbols.values();
  }
  addClassSymbol(symbol) {
    this.classSymbols.set(symbol.name, symbol);
  }
  addInterfaceSymbol(symbol) {
    this.interfaceSymbols.set(symbol.name, symbol);
  }
  hasSymbol(name) {
    return this.classSymbols.has(name) || this.interfaceSymbols.has(name);
  }
  getClassSymbol(name) {
    const symbol = this.classSymbols.get(name);
    if (symbol === undefined) {
      throwRuntimeError(`Symbol ${name} not found.`);
    }
    return symbol;
  }
  getInteraceSymbol(name) {
    const symbol = this.interfaceSymbols.get(name);
    if (symbol === undefined) {
      throwRuntimeError(`Symbol ${name} not found.`);
    }
    return symbol;
  }
}

class ObjectRegistry {
  classes = new ClassRegistry;
  interfaces = new InterfaceRegistry;
  types = new TypeRegistry;
  fetchAllObjectDefinitions() {
    const map = new Map;
    for (const classDef of this.interfaces.all()) {
      map.set(classDef.name, classDef);
    }
    for (const classDef of this.classes.all()) {
      map.set(classDef.name, classDef);
    }
    return map;
  }
  collectAll(ast) {
    for (const node of ast.children) {
      if (node instanceof ASTInterfaceNode) {
        this.interfaces.register(node);
      } else if (node instanceof ASTClassNode) {
        this.classes.register(node);
      }
    }
  }
}

// language/src/core/typechecker.ts
var globalFunctionTypeRegistry2 = new NativeFunctions().getGlobalFunctionTypeRegistry();

class StatementResult {
  didReturn;
  returnType;
  constructor(didReturn, returnType) {
    this.didReturn = didReturn;
    this.returnType = returnType;
  }
  static withReturn(returnType) {
    return new StatementResult(true, returnType);
  }
  static noReturn() {
    return new StatementResult(false, null);
  }
}

class TypeChecker {
  objectRegistry;
  constructor(objectRegistry) {
    this.objectRegistry = objectRegistry;
  }
  collectAllSymbolsFromNode(ast) {
    for (const node of ast.children) {
      if (node instanceof ASTInterfaceNode) {
        this.registerInterfaceSymbol(node);
      } else if (node instanceof ASTClassNode) {
        this.registerClassSymbol(node);
      }
    }
  }
  collectAllSymbolsFromRegistry(objectRegistry) {
    const objectDefinitions = objectRegistry.fetchAllObjectDefinitions().values();
    for (let objectDef of objectDefinitions) {
      if (objectDef instanceof InterfaceDefinition) {
        this.registerInterfaceSymbol(objectDef.node);
      } else {
        this.registerClassSymbol(objectDef.node);
      }
    }
  }
  check(ast) {
    this.collectAllSymbolsFromNode(ast);
    this.validateInheritance();
    this.checkProgram(ast);
    this.checkInterfaceBodies();
    this.checkClassesBodies();
    this.checkClassesImplements();
  }
  validateInheritance() {
    for (const classSymbol of this.objectRegistry.classes.all()) {
      if (classSymbol.superClass && !this.objectRegistry.types.hasSymbol(classSymbol.superClass)) {
        this.typeError(`Unknown superclass ${classSymbol.superClass}`, classSymbol.node);
      }
    }
  }
  checkProgram(ast) {
    const scope = new TypeScope;
    for (const node of ast.children) {
      this.checkStatement(node, scope);
    }
  }
  checkClassesBodies() {
    for (const objectSymbol of this.objectRegistry.types.allClassSymbols()) {
      const instanceScope = new TypeScope;
      instanceScope.currentObjectSymbol = objectSymbol;
      objectSymbol.typeParameterSymbols.forEach((typeParameter) => {
        instanceScope.defineTypeBinding(typeParameter.name, new TypeVariable(typeParameter.name));
      });
      if (objectSymbol.constructorMethodSymbol) {
        const constructorSymbol = objectSymbol.constructorMethodSymbol;
        const constructorScope = new TypeScope(instanceScope);
        objectSymbol.typeParameterSymbols.forEach((typeParameterSymbol) => {
          constructorScope.defineTypeBinding(typeParameterSymbol.name, new TypeVariable(typeParameterSymbol.name));
        });
        for (const parameterSymbol of constructorSymbol.parameterSymbols) {
          constructorScope.defineType(parameterSymbol.name, parameterSymbol.parameterType);
        }
        this.checkBody(constructorSymbol.body, constructorScope);
      }
      for (const methodSymbol of objectSymbol.instanceMethodSymbols.values()) {
        const methodScope = new TypeScope(instanceScope);
        methodSymbol.typeParameterSymbols.forEach((typeParameterSymbol) => {
          methodScope.defineTypeBinding(typeParameterSymbol.name, new TypeVariable(typeParameterSymbol.name));
        });
        for (const parameterSymbol of methodSymbol.parameterSymbols) {
          methodScope.defineType(parameterSymbol.name, parameterSymbol.parameterType);
        }
        const hasBody = methodSymbol.body && methodSymbol.body.length > 0;
        if (hasBody) {
          const actual = this.checkBody(methodSymbol.body, methodScope);
          this.checkReturnType(methodSymbol.returnType, actual, methodSymbol.node);
        }
      }
      for (const methodSymbol of objectSymbol.staticMethodSymbols.values()) {
        const staticScope = new TypeScope(instanceScope);
        methodSymbol.typeParameterSymbols.forEach((typeParameterSymbol) => {
          staticScope.defineTypeBinding(typeParameterSymbol.name, new TypeVariable(typeParameterSymbol.name));
        });
        for (const parameterSymbol of methodSymbol.parameterSymbols) {
          staticScope.defineType(parameterSymbol.name, parameterSymbol.parameterType);
        }
        const hasBody = methodSymbol.body && methodSymbol.body.length > 0;
        if (hasBody) {
          const actual = this.checkBody(methodSymbol.body, staticScope);
          this.checkReturnType(methodSymbol.returnType, actual, methodSymbol.node);
        }
      }
    }
  }
  checkInterfaceBodies() {
    for (const objectSymbol of this.objectRegistry.types.allInterfaceSymbols()) {
      const instanceScope = new TypeScope;
      instanceScope.currentObjectSymbol = objectSymbol;
      objectSymbol.typeParameterSymbols.forEach((typeParameter) => {
        instanceScope.defineTypeBinding(typeParameter.name, new TypeVariable(typeParameter.name));
      });
      for (const methodSymbol of objectSymbol.instanceMethodSymbols.values()) {
        const methodScope = new TypeScope(instanceScope);
        methodSymbol.typeParameterSymbols.forEach((typeParameterSymbol) => {
          methodScope.defineTypeBinding(typeParameterSymbol.name, new TypeVariable(typeParameterSymbol.name));
        });
        for (const parameterSymbol of methodSymbol.parameterSymbols) {
          methodScope.defineType(parameterSymbol.name, parameterSymbol.parameterType);
        }
        const hasBody = methodSymbol.body && methodSymbol.body.length > 0;
        if (hasBody) {
          const actual = this.checkBody(methodSymbol.body, methodScope);
          this.checkReturnType(methodSymbol.returnType, actual, methodSymbol.node);
        }
      }
    }
  }
  checkClassesImplements() {
    for (const classSymbol of this.objectRegistry.types.allClassSymbols()) {
      for (const interfaceRefType of classSymbol.implementsInterfaces) {
        this.checkImplementsInterface(classSymbol, interfaceRefType);
      }
    }
  }
  checkImplementsInterface(classSymbol, interfaceRefType) {
    const interfaceSymbol = interfaceRefType.interfaceSymbol;
    const substitutionMap = buildTypeSubstitutionMap(interfaceSymbol.typeParameterSymbols, interfaceRefType.typeArguments);
    for (const interfaceMethodSymbol of interfaceSymbol.instanceMethodSymbols.values()) {
      const classMethodSymbol = this.resolveInstanceMethode(classSymbol, interfaceMethodSymbol.name);
      if (!classMethodSymbol) {
        this.typeError(`Class ${classSymbol.name} does not implement method ${interfaceMethodSymbol.name} from interface ${interfaceSymbol.name}`, classSymbol.node);
      }
      this.checkMethodCompatibility(classMethodSymbol, interfaceMethodSymbol, substitutionMap);
    }
  }
  checkMethodCompatibility(classMethodSymbol, interfaceMethodSymbol, substitutionMap) {
    if (classMethodSymbol.parameterSymbols.length !== interfaceMethodSymbol.parameterSymbols.length) {
      this.typeError(`Method ${classMethodSymbol.name} has wrong parameter count`);
    }
    for (let i = 0;i < interfaceMethodSymbol.parameterSymbols.length; i++) {
      const parameterSymbol = interfaceMethodSymbol.parameterSymbols[i] || null;
      if (!parameterSymbol) {
        this.typeError(`Method ${classMethodSymbol.name} has too many parameters`);
        break;
      }
      const expectedType = substituteType(parameterSymbol.parameterType, substitutionMap);
      const actualType = parameterSymbol.parameterType;
      if (!expectedType.accepts(actualType)) {
        this.typeError(`Parameter ${i + 1} of ${classMethodSymbol.name} incompatible with interface`);
      }
    }
    const expectedReturn = substituteType(interfaceMethodSymbol.returnType, substitutionMap);
    if (!expectedReturn.accepts(classMethodSymbol.returnType)) {
      this.typeError(`Return type of ${classMethodSymbol.name} incompatible with interface`);
    }
  }
  checkStatement(node, scope) {
    switch (node.type) {
      case ASTNodeType.RETURN:
        if (node instanceof ASTReturnNode) {
          return StatementResult.withReturn(this.checkExpression(node.argument, scope));
        }
        break;
      case ASTNodeType.VARIABLE:
        if (node instanceof ASTVariableNode) {
          this.checkVariable(node, scope);
          return StatementResult.noReturn();
        }
        break;
      case ASTNodeType.FOREACH:
        if (node instanceof ASTForeachNode) {
          return StatementResult.withReturn(this.checkForeach(node, scope));
        }
        break;
      case ASTNodeType.EXPRESSION:
        if (node instanceof ASTExpressionNode) {
          this.checkExpression(node.expr, scope);
          return StatementResult.noReturn();
        }
        break;
    }
    return StatementResult.noReturn();
  }
  checkVariable(node, scope) {
    const declaredType = node.typeAnnotation ? this.wrapType(node.typeAnnotation, scope) : null;
    const actualType = this.checkExpression(node.init, scope, declaredType);
    if (declaredType && !declaredType.accepts(actualType)) {
      this.typeError(`Type mismatch: ${declaredType} <> ${actualType}`, node);
    }
    scope.defineType(node.name, declaredType ?? actualType);
  }
  checkForeach(node, scope) {
    let iterableType = this.checkExpression(node.iterable, scope);
    iterableType = Autoboxing.autoboxIfNeeded(iterableType, this.objectRegistry);
    if (iterableType instanceof ClassRefType && iterableType.classSymbol.name === "Array") {
      if (iterableType.typeArguments.length !== 1) {
        this.typeError("Array in foreach musst have exactly one type argument.", node.iterable);
      }
      const elementType = iterableType.typeArguments[0] || null;
      if (elementType === null) {
        this.typeError("Array in foreach must have exactly one type argument.", node.iterable);
      }
      const loopScope = new TypeScope(scope);
      loopScope.defineType(node.iterator, elementType);
      return this.checkBody(node.body, loopScope);
    }
    this.typeError(`foreach expects Array<T>, got ${iterableType.toString()}`, node.iterable);
  }
  checkExpression(expr, scope, expectedType = null) {
    if (expr === null) {
      this.typeError("Expression expected, got null.", expr);
    }
    switch (expr.type) {
      case ASTNodeType.NUMBER:
        return Types.NUMBER;
      case ASTNodeType.STRING:
        return Types.STRING;
      case ASTNodeType.BOOLEAN:
        return Types.BOOLEAN;
      case ASTNodeType.NULL:
        return Types.NULL;
      case ASTNodeType.ARRAY: {
        if (expr instanceof ASTArrayNode) {
          return this.checkArrayExpression(expr, scope, expectedType);
        }
        break;
      }
      case ASTNodeType.INDEX: {
        if (expr instanceof ASTIndexNode) {
          const objectType = this.checkExpression(expr.object, scope);
          const index = this.checkExpression(expr.index, scope);
          if (objectType instanceof ClassRefType) {
            return objectType.typeArguments[0] || Types.MIXED;
          }
          this.typeError(`Cannot index ${objectType.name} with ${index.name}`, expr);
        }
        break;
      }
      case ASTNodeType.UNARY: {
        if (expr instanceof ASTUnaryNode) {
          return this.checkUnaryExpression(expr, scope);
        }
        break;
      }
      case ASTNodeType.MEMBER: {
        if (expr instanceof ASTMemberNode) {
          return this.checkMemberExpression(expr, scope);
        }
        break;
      }
      case ASTNodeType.THIS: {
        return this.checkThisExpression(expr, scope);
      }
      case ASTNodeType.IDENTIFIER:
        return this.checkIdentifierExpression(expr, scope);
      case ASTNodeType.NEW: {
        if (expr instanceof ASTNewNode) {
          return this.checkNewExpression(expr, scope, expectedType);
        }
        break;
      }
      case ASTNodeType.BINARY: {
        if (expr instanceof ASTBinaryNode) {
          return this.checkBinaryExpression(expr, scope);
        }
        break;
      }
      case ASTNodeType.LAMBDA: {
        if (expr instanceof ASTLambdaNode) {
          return this.checkLambdaExpression(expr, scope);
        }
        break;
      }
      case ASTNodeType.CALL: {
        if (expr instanceof ASTCallNode) {
          return this.checkCallExpression(expr, scope);
        }
        break;
      }
    }
    return Types.MIXED;
  }
  checkBinaryExpression(expr, scope) {
    const left = this.checkExpression(expr.left, scope);
    const right = this.checkExpression(expr.right, scope);
    const op = expr.operator;
    if (GRAMMAR.ARITHMETIC.includes(op)) {
      if (left.accepts(Types.NUMBER) && right.accepts(Types.NUMBER)) {
        return Types.NUMBER;
      }
      if (left.accepts(Types.STRING) || right.accepts(Types.STRING)) {
        return Types.STRING;
      }
      this.typeError(`Arithmetic operator '${op}' requires numbers`, expr);
    }
    if (GRAMMAR.COMPARISON.includes(op)) {
      if (left.accepts(Types.NUMBER) && right.accepts(Types.NUMBER)) {
        return Types.BOOLEAN;
      }
      this.typeError(`Comparison '${op}' requires numbers`, expr);
    }
    if (GRAMMAR.EQUALITY.includes(op)) {
      if (left.accepts(right)) {
        return Types.BOOLEAN;
      }
      this.typeError(`Cannot compare ${left.name} with ${right.name}`, expr);
    }
    if (GRAMMAR.LOGICAL.includes(op)) {
      if (left.accepts(Types.BOOLEAN) && right.accepts(Types.BOOLEAN)) {
        return Types.BOOLEAN;
      }
      this.typeError(`Logical operator '${op}' requires booleans`, expr);
    }
    this.typeError(`Invalid binary operation`, expr);
  }
  checkFieldAccess(node, classSymbol, fieldSymbol, scope) {
    if (fieldSymbol.isPublic) {
      return;
    }
    if (!scope.currentObjectSymbol) {
      this.typeError(`Cannot access private member ${node.property} of ${classSymbol.name}`, node);
    }
    if (scope.currentObjectSymbol !== fieldSymbol.owner) {
      if (scope.currentObjectSymbol instanceof ClassSymbol && scope.currentObjectSymbol.superClassSymbol !== fieldSymbol.owner) {
        this.typeError(`Cannot access private member ${node.property} of ${classSymbol.name}`, node);
      }
    }
  }
  checkInstanceMethodAccess(node, classSymbol, methodSymbol, scope) {
    if (methodSymbol.isPublic) {
      return;
    }
    if (!scope.currentObjectSymbol) {
      this.typeError(`Cannot access private method ${node.property} of ${classSymbol.name}`, node);
    }
    if (scope.currentObjectSymbol !== methodSymbol.owner) {
      if (scope.currentObjectSymbol instanceof ClassSymbol && scope.currentObjectSymbol.superClassSymbol !== methodSymbol.owner) {
        this.typeError(`Cannot access private method ${node.property} of ${classSymbol.name}`, node);
      }
    }
  }
  checkStaticMethodAccess(classSymbol, methodSymbol, scope) {
    if (!methodSymbol.isStatic) {
      this.typeError(`Cannot call instance method ${classSymbol.name}.${methodSymbol.name} as static method`);
      return;
    }
    if (methodSymbol.isPublic) {
      return;
    }
    if (!scope.currentObjectSymbol) {
      this.typeError(`Cannot access private method ${methodSymbol.name} of ${classSymbol.name}`, methodSymbol.node);
    }
    if (scope.currentObjectSymbol !== methodSymbol.owner) {
      if (scope.currentObjectSymbol instanceof ClassSymbol && scope.currentObjectSymbol.superClassSymbol !== methodSymbol.owner) {
        this.typeError(`Cannot access private method ${methodSymbol.name} of ${classSymbol.name}`, methodSymbol.node);
      }
    }
  }
  checkMemberExpression(node, scope) {
    const objectType = this.checkExpression(node.object, scope);
    if (objectType instanceof ClassRefType) {
      const classSymbol = objectType.classSymbol;
      const instanceFieldSymbol = classSymbol.resolveInstanceFieldSymbol(node.property);
      if (instanceFieldSymbol) {
        this.checkFieldAccess(node, classSymbol, instanceFieldSymbol, scope);
        return instanceFieldSymbol.fieldType;
      }
      const staticFieldSymbol = classSymbol.resolveStaticFieldSymbol(node.property);
      if (staticFieldSymbol) {
        this.checkFieldAccess(node, classSymbol, staticFieldSymbol, scope);
        return staticFieldSymbol.fieldType;
      }
      this.typeError(`Unknown member ${node.property}`, node);
    }
    this.typeError("Cannot access member of non-object", node);
  }
  checkThisExpression(node, scope) {
    if (scope.currentObjectSymbol instanceof ClassSymbol) {
      return new ClassRefType(scope.currentObjectSymbol);
    }
    this.typeError("this outside of class", node);
  }
  checkIdentifierExpression(node, scope) {
    if (scope.hasType(node.name)) {
      return scope.getType(node.name);
    }
    if (this.objectRegistry.types.hasSymbol(node.name)) {
      return new ClassRefType(this.objectRegistry.types.getClassSymbol(node.name));
    }
    this.typeError(`Undefined identifier ${node.name}`, node);
  }
  checkNewExpression(node, scope, expectedType = null) {
    const classSymbol = this.objectRegistry.types.getClassSymbol(node.name);
    let instanceType;
    if (node.typeAnnotation.typeArguments.length > 0) {
      const typeArguments = node.typeAnnotation.typeArguments.map((typeArgument) => this.wrapType(typeArgument, scope));
      if (typeArguments.length !== classSymbol.typeParameterSymbols.length) {
        this.typeError(`Wrong number of type arguments`, node);
      }
      instanceType = new ClassRefType(classSymbol, typeArguments);
    } else if (expectedType instanceof ClassRefType) {
      instanceType = expectedType;
    } else {
      instanceType = new ClassRefType(classSymbol, classSymbol.typeParameterSymbols.map(() => Types.MIXED));
    }
    if (classSymbol.constructorMethodSymbol) {
      this.checkCallArguments(classSymbol.constructorMethodSymbol, node.arguments, scope);
    }
    if (expectedType && !expectedType.accepts(instanceType)) {
      this.typeError(`Type mismatch: ${expectedType} <> ${instanceType}`, node);
    }
    return instanceType;
  }
  checkArrayExpression(node, scope, expectedType = null) {
    if (node.elements.length === 0) {
      if (expectedType instanceof ClassRefType) {
        expectedType = expectedType.typeArguments[0] || null;
      }
      return this.newArrayTypeOf(expectedType || Types.MIXED);
    }
    const classRefName = PrimitiveClassTypes.getClassRefName(PrimitiveClassTypes.ARRAY);
    let expectedTypeOfItem;
    if (expectedType instanceof ClassRefType && expectedType.classSymbol.name === classRefName) {
      expectedTypeOfItem = expectedType.typeArguments[0] || Types.MIXED;
    } else if (node.elements[0]) {
      expectedTypeOfItem = this.checkExpression(node.elements[0], scope, expectedType);
    } else {
      this.typeError("Array expression must have at least one element", node);
    }
    for (const item of node.elements) {
      const actualTypeOfItem = this.checkExpression(item, scope, expectedTypeOfItem);
      if (!expectedTypeOfItem.accepts(actualTypeOfItem)) {
        this.typeError(`Array elements must have same type, got ${expectedTypeOfItem} and ${actualTypeOfItem}`, node);
      }
    }
    return this.newArrayTypeOf(expectedTypeOfItem);
  }
  checkUnaryExpression(node, scope) {
    const operand = this.checkExpression(node.argument, scope);
    const op = node.operator;
    if (op === GRAMMAR.EXCLAMATION_MARK) {
      if (operand.equals(Types.BOOLEAN)) {
        return Types.BOOLEAN;
      }
      this.typeError(`Unary '!' requires boolean, got ${operand.name}`, node);
    }
    this.typeError(`Invalid unary operator ${op}`, node);
  }
  checkLambdaExpression(node, scope) {
    const lambdaScope = new TypeScope(scope);
    const parameters = node.parameters.map((parameterNode) => {
      const parameterSymbol = this.parameterNodeToSymbol(parameterNode);
      lambdaScope.defineType(parameterNode.name, parameterSymbol.parameterType);
      return parameterSymbol;
    });
    if (node.children[0]) {
      return new LambdaType(parameters, this.checkExpression(node.children[0], lambdaScope));
    }
    this.typeError("Lambda expression must have a return type", node);
  }
  checkCallExpression(node, scope) {
    const callee = node.callee;
    if (callee.type === ASTNodeType.IDENTIFIER && callee.name === GRAMMAR.SUPER) {
      return this.checkSuperConstructorCall(node, scope);
    }
    if (callee instanceof ASTMemberNode && callee.object.type === ASTNodeType.IDENTIFIER && this.objectRegistry.types.hasSymbol(callee.object.name)) {
      return this.checkStaticCall(callee.object.name, callee.property, node.arguments, scope);
    }
    if (callee instanceof ASTMemberNode) {
      return this.checkInstanceCall(callee, node.arguments, scope);
    }
    if (callee instanceof ASTLambdaNode) {
      return this.checkLambdaCall(this.checkLambdaExpression(callee, scope), node.arguments, scope);
    }
    if (callee.type === ASTNodeType.IDENTIFIER) {
      if (scope.hasType(callee.name)) {
        const type2 = scope.getType(callee.name);
        if (type2 instanceof LambdaType) {
          return this.checkLambdaCall(type2, node.arguments, scope);
        }
        this.typeError(`Cannot call non-function ${callee.name}`, node);
      }
      return this.checkFunctionCall(callee.name, node.arguments, scope);
    }
    return Types.MIXED;
  }
  checkSuperConstructorCall(node, scope) {
    const currentClass = scope.currentObjectSymbol;
    if (!(currentClass instanceof ClassSymbol)) {
      this.typeError("super() used outside of class", node);
    }
    if (!currentClass.superClass) {
      this.typeError("super() used outside of class hierarchy", node);
    }
    const superSymbol = this.objectRegistry.types.getClassSymbol(currentClass.superClass);
    if (!superSymbol.constructorMethodSymbol) {
      if (node.arguments.length > 0) {
        this.typeError("Super constructor takes no arguments", node);
      }
      return Types.VOID;
    }
    this.checkCallArguments(superSymbol.constructorMethodSymbol, node.arguments, scope);
    return Types.VOID;
  }
  checkCallOnNullObjectType(objectType, node) {
    if (objectType.equals(Types.NULL)) {
      this.typeError(`Cannot call method on null`, node);
    }
    if (objectType instanceof NullableType) {
      this.typeError(`Cannot call method on nullable type ${objectType}`, node);
    }
  }
  checkInstanceCall(callee, callArguments, scope) {
    let objectType = this.checkExpression(callee.object, scope);
    objectType = Autoboxing.autoboxIfNeeded(objectType, this.objectRegistry);
    this.checkCallOnNullObjectType(objectType, callee);
    if (objectType instanceof ClassRefType) {
      const methodSymbol = this.resolveInstanceMethode(objectType.classSymbol, callee.property);
      if (methodSymbol.isStatic) {
        this.typeError(`Cannot call static method ${callee.property} on instance of ${callee.object.name}`, callee);
      }
      this.checkInstanceMethodAccess(callee, objectType.classSymbol, methodSymbol, scope);
      const owner = methodSymbol.owner;
      if (owner === null) {
        this.typeError(`Cannot call method on non-object`, callee);
      }
      const substitutionMap = buildTypeSubstitutionMap(owner.typeParameterSymbols, objectType.typeArguments);
      this.checkCallArguments(methodSymbol, callArguments, scope, substitutionMap);
      return substituteType(methodSymbol.returnType, substitutionMap);
    }
    this.typeError(`Cannot call method on non-object`, callee);
  }
  checkStaticCall(className, methodName, callArguments, scope) {
    const classSymbol = this.objectRegistry.types.getClassSymbol(className);
    const methodSymbol = classSymbol.staticMethodSymbols.get(methodName) || null;
    if (!methodSymbol) {
      this.typeError(`Unknown static method ${className}.${methodName}`);
    }
    this.checkStaticMethodAccess(classSymbol, methodSymbol, scope);
    this.checkCallArguments(methodSymbol, callArguments, scope);
    return methodSymbol.returnType;
  }
  checkLambdaCall(lambda, callArguments, scope) {
    this.checkCallArguments(lambda, callArguments, scope);
    return lambda.returnType;
  }
  checkFunctionCall(name, callArguments, scope) {
    if (!globalFunctionTypeRegistry2.has(name)) {
      this.typeError(`Unknown function ${name}`);
    }
    const nativeFunction = globalFunctionTypeRegistry2.get(name);
    this.checkCallArguments(nativeFunction, callArguments, scope);
    return nativeFunction.returnType ? this.wrapType(nativeFunction.returnType, scope) : Types.VOID;
  }
  parametersSymbolsFromCallableSymbol(callableSymbol) {
    if (callableSymbol instanceof NativeFunction) {
      return callableSymbol.parameterNodes.map((parameterNode) => this.parameterNodeToSymbol(parameterNode));
    }
    return callableSymbol.parameterSymbols;
  }
  checkCallArguments(callableSymbol, callArguments, scope, substitutionMap = new Map) {
    const callScope = new TypeScope(scope);
    let parameterSymbols = this.parametersSymbolsFromCallableSymbol(callableSymbol);
    if (callArguments.length > parameterSymbols.length) {
      this.typeError("Argument count mismatch");
    }
    let actualType;
    for (let i = 0;i < parameterSymbols.length; i++) {
      const parameterSymbol = parameterSymbols[i] || null;
      const callArgument = callArguments[i] || null;
      if (parameterSymbol) {
        const expectedType = substituteType(parameterSymbol.parameterType, substitutionMap);
        if (callArgument) {
          actualType = this.checkExpression(callArgument, callScope, expectedType);
        } else if (parameterSymbol.defaultType) {
          actualType = parameterSymbol.defaultType;
        } else {
          this.typeError(`Missing argument ${parameterSymbol.name}`, callArgument);
        }
        this.checkAssignable(expectedType, actualType, callArguments[i]);
      }
    }
  }
  checkAssignable(expectedType, actualType, node = null) {
    if (expectedType.equals(actualType)) {
      return;
    }
    if (expectedType instanceof MixedType) {
      return;
    }
    if (expectedType instanceof NullableType) {
      if (actualType === Types.NULL) {
        return;
      }
      if (expectedType.inner.accepts(actualType)) {
        return;
      }
    }
    if (expectedType.accepts(actualType)) {
      return;
    }
    this.typeError(`Type mismatch: ${expectedType} <> ${actualType}`, node);
  }
  checkBody(children, scope) {
    let returnType = Types.MIXED;
    for (const child of children) {
      const statementResult = this.checkStatement(child, scope);
      if (statementResult.didReturn && statementResult.returnType) {
        returnType = statementResult.returnType;
      }
    }
    return returnType;
  }
  checkReturnType(expectedType, actualType, node) {
    if (expectedType === Types.VOID) {
      if (actualType !== Types.MIXED && actualType !== Types.VOID) {
        this.typeError(`Cannot return ${actualType} from void method`, node);
      }
      return;
    }
    if (actualType === Types.MIXED) {
      this.typeError(`Missing return statement (expected ${expectedType})`, node);
      return;
    }
    if (!expectedType.accepts(actualType)) {
      this.typeError(`Return type mismatch: expected ${expectedType}, got ${actualType}`, node);
    }
  }
  resolveInstanceMethode(classSymbol, methodName) {
    const methodSymbol = this.resolveInHierarchy(classSymbol, (classSymbol2) => classSymbol2.instanceMethodSymbols.get(methodName) || null);
    if (!methodSymbol) {
      this.typeError(`Unknown method ${classSymbol.name}.${methodName}`, classSymbol.node);
    }
    return methodSymbol;
  }
  resolveInHierarchy(classSymbol, resolver) {
    let current = classSymbol;
    while (current) {
      const result = resolver(current);
      if (result !== undefined && result !== null) {
        return result;
      }
      if (!current.superClass) {
        return null;
      }
      current = this.objectRegistry.types.getClassSymbol(current.superClass);
    }
    return null;
  }
  newArrayTypeOf(elementType) {
    const className = PrimitiveClassTypes.getClassRefName(PrimitiveClassTypes.ARRAY);
    if (className === null) {
      this.typeError("Internal error: Cannot find class name for array type.");
    }
    return new ClassRefType(this.objectRegistry.types.getClassSymbol(className), [elementType]);
  }
  wrapType(type2, scope) {
    return wrapType(type2, this.objectRegistry, scope);
  }
  parameterNodeToSymbol(parameterNode, scope = new TypeScope) {
    const parameterType = parameterNode.typeAnnotation ? this.wrapType(parameterNode.typeAnnotation, scope) : Types.MIXED;
    let defaultType = null;
    if (parameterNode.defaultValue) {
      defaultType = this.checkExpression(parameterNode.defaultValue, new TypeScope);
      if (defaultType && !parameterType.equals(Types.MIXED) && !parameterType.equals(defaultType)) {
        this.typeError(`Default value for parameter '${parameterNode.name}' does not match type.`, parameterNode);
      }
    }
    return new ParameterSymbol(parameterNode.name, parameterType, defaultType, parameterNode);
  }
  registerClassSymbol(classNode) {
    if (this.objectRegistry.types.hasSymbol(classNode.name)) {
      return;
    }
    const classScope = new TypeScope;
    const classSymbol = new ClassSymbol(classNode);
    try {
      if (classSymbol.superClass) {
        classSymbol.superClassSymbol = this.objectRegistry.types.getClassSymbol(classSymbol.superClass);
      }
    } catch (e) {}
    this.objectRegistry.types.addClassSymbol(classSymbol);
    classNode.typeParameters.forEach((name) => {
      classSymbol.typeParameterSymbols.push(new TypeParameterSymbol(name));
      classScope.defineTypeBinding(name, new TypeVariable(name));
    });
    for (const typeNode of classNode.implementsInterfaces) {
      const interfaceType = this.wrapType(typeNode, classScope);
      if (interfaceType instanceof InterfaceRefType) {
        classSymbol.implementsInterfaces.push(interfaceType);
        continue;
      }
      this.typeError(`Expected interface type, got ${interfaceType}`, typeNode);
    }
    for (const memberNode of classNode.children) {
      if (memberNode.type === ASTNodeType.FIELD && memberNode instanceof ASTFieldNode) {
        const target = memberNode.modifiers.static ? classSymbol.staticFieldSymbols : classSymbol.instanceFieldSymbols;
        const fieldSymbol = new FieldSymbol(memberNode, memberNode.fieldType ? this.wrapType(memberNode.fieldType, classScope) : Types.MIXED);
        fieldSymbol.owner = classSymbol;
        target.set(fieldSymbol.name, fieldSymbol);
      }
      if ((memberNode.type === ASTNodeType.METHOD || memberNode.type === ASTNodeType.CONSTRUCTOR) && memberNode instanceof ASTMethodNode) {
        const methodScope = new TypeScope(classScope);
        const methodSymbol = new MethodSymbol(memberNode);
        methodSymbol.owner = classSymbol;
        memberNode.typeParameters.forEach((name) => {
          methodSymbol.typeParameterSymbols.push(new TypeParameterSymbol(name));
          methodScope.defineTypeBinding(name, new TypeVariable(name));
        });
        methodSymbol.parameterSymbols = memberNode.parameters.map((parameterNode) => this.parameterNodeToSymbol(parameterNode, methodScope));
        methodSymbol.returnType = memberNode.returnType ? this.wrapType(memberNode.returnType, methodScope) : Types.VOID;
        if (memberNode.type === ASTNodeType.CONSTRUCTOR) {
          classSymbol.constructorMethodSymbol = methodSymbol;
        } else {
          const target = methodSymbol.isStatic ? classSymbol.staticMethodSymbols : classSymbol.instanceMethodSymbols;
          target.set(memberNode.name, methodSymbol);
        }
      }
    }
  }
  registerInterfaceSymbol(interfaceNode) {
    if (this.objectRegistry.types.hasSymbol(interfaceNode.name)) {
      return;
    }
    const interfaceScope = new TypeScope;
    const interfaceSymbol = new InterfaceSymbol(interfaceNode);
    this.objectRegistry.types.addInterfaceSymbol(interfaceSymbol);
    interfaceNode.typeParameters.forEach((name) => {
      interfaceSymbol.typeParameterSymbols.push(new TypeParameterSymbol(name));
      interfaceScope.defineTypeBinding(name, new TypeVariable(name));
    });
    for (const interfaceName of interfaceNode.extendsInterfaces) {
      const interfaceSymbol2 = this.objectRegistry.types.getInteraceSymbol(interfaceName);
      interfaceSymbol2.extendsInterfaces.push(interfaceSymbol2);
    }
    for (const memberNode of interfaceNode.children) {
      if (memberNode.type === ASTNodeType.FIELD && memberNode instanceof ASTFieldNode) {
        const fieldSymbol = new FieldSymbol(memberNode, memberNode.fieldType ? this.wrapType(memberNode.fieldType, interfaceScope) : Types.MIXED);
        fieldSymbol.owner = interfaceSymbol;
        interfaceSymbol.staticFieldSymbols.set(fieldSymbol.name, fieldSymbol);
      }
      if (memberNode.type === ASTNodeType.METHOD && memberNode instanceof ASTMethodNode) {
        const methodScope = new TypeScope(interfaceScope);
        const methodSymbol = new MethodSymbol(memberNode);
        methodSymbol.owner = interfaceSymbol;
        methodSymbol.isStatic = memberNode.modifiers.static;
        memberNode.typeParameters.forEach((name) => {
          methodSymbol.typeParameterSymbols.push(new TypeParameterSymbol(name));
          methodScope.defineTypeBinding(name, new TypeVariable(name));
        });
        methodSymbol.parameterSymbols = memberNode.parameters.map((parameterNode) => this.parameterNodeToSymbol(parameterNode, methodScope));
        methodSymbol.returnType = memberNode.returnType ? this.wrapType(memberNode.returnType, methodScope) : Types.VOID;
        interfaceSymbol.instanceMethodSymbols.set(memberNode.name, methodSymbol);
      }
    }
  }
  typeError(message, node = null) {
    throwTypeError(message, node?.span);
  }
}

// language/src/core/dependencies.ts
class Dependency {
  objectRegistry = new ObjectRegistry;
  names;
  url;
  ast = null;
  constructor(names, url) {
    this.names = names;
    this.url = url;
  }
}

class DependencyLoader {
  environment;
  objectRegistry;
  fileLoader;
  constructor(environment, objectRegistry, fileLoader) {
    this.environment = environment;
    this.objectRegistry = objectRegistry;
    this.fileLoader = fileLoader;
  }
  async parseDependency(dependency) {
    return await this.parseFile(dependency.url).then((ast) => dependency.ast = ast).then((ast) => dependency.objectRegistry.collectAll(ast));
  }
  async collectDependencies(dependency, dependencies) {
    return await this.collectProgramDependencies(dependency.ast).then((classDependencies) => {
      classDependencies.forEach((classDependency) => {
        if (dependencies.has(classDependency.url)) {
          return;
        }
        dependencies.set(classDependency.url, classDependency);
      });
    });
  }
  async collectProgramDependencies(ast) {
    if (ast === null) {
      return new Map;
    }
    const defaultDependencies = this.defaultDependencies();
    for (const dependency of defaultDependencies.values()) {
      await this.parseDependency(dependency);
    }
    const dependencies = this.collectClassDependencies(ast);
    for (const dependency of dependencies.values()) {
      await this.parseDependency(dependency);
      await this.collectDependencies(dependency, dependencies);
    }
    return new Map([...defaultDependencies, ...dependencies]);
  }
  defaultDependencies() {
    const dependencies = [
      new Dependency(["Iterator", "Iterable"], "./library/contracts.lyra")
    ];
    const map = new Map;
    for (const dependency of dependencies) {
      map.set(dependency.url, dependency);
    }
    return map;
  }
  collectClassDependencies(ast) {
    const classDependencies = new Map;
    for (const node of ast.children) {
      if (node.type === ASTNodeType.IMPORT) {
        if (node instanceof ASTImportNode) {
          if (node.from === null) {
            continue;
          }
          if (classDependencies.has(node.from)) {
            continue;
          }
          classDependencies.set(node.from, new Dependency(node.names, node.from));
        } else {
          throwRuntimeError(`Invalid import node ${node.type}.`, node?.span);
        }
      }
    }
    return classDependencies;
  }
  parseFile(url) {
    return this.fileLoader.load(url).then((code) => this.parserSource(new Source2(code, url)));
  }
  parserSource(source) {
    return new Parser(source).parse();
  }
}

// language/src/core/linker.ts
var nativeClasses2 = new NativeClasses;

class Linker {
  environment;
  objectRegistry;
  dependencyLoader;
  constructor(environment, objectRegistry, fileLoader) {
    this.environment = environment;
    this.objectRegistry = objectRegistry;
    this.dependencyLoader = new DependencyLoader(environment, objectRegistry, fileLoader);
  }
  linkSources(ast) {
    return this.dependencyLoader.collectProgramDependencies(ast).then((dependencies) => {
      for (const dependency of dependencies.values()) {
        const objectDefinitions = dependency.objectRegistry.fetchAllObjectDefinitions().values();
        for (let objectDef of objectDefinitions) {
          if (objectDef instanceof InterfaceDefinition) {
            this.objectRegistry.interfaces.set(objectDef.name, objectDef);
          } else {
            this.objectRegistry.classes.set(objectDef.name, objectDef);
          }
          this.environment.define(objectDef.name, objectDef);
        }
      }
    }).then(() => this.loadNativeClasses(ast));
  }
  loadNativeClasses(ast) {
    for (const node of ast.children) {
      if (node instanceof ASTImportNode) {
        if (node.from === null) {
          const className = node.names[0];
          if (!className) {
            throwDependencyError(`Invalid import node ${node.type}.`, node?.span);
          }
          const nativeClass = nativeClasses2.classes.get(className) || null;
          if (!nativeClass) {
            throwDependencyError(`Unknown native class ${className}`, node?.span);
          }
          const classDef = nativeClass.getClassDefinition();
          if (!classDef) {
            throwDependencyError(`Class definition for native class ${className} not found.`, node?.span);
          }
          if (this.objectRegistry.classes.has(className)) {
            throwDependencyError(`Could not resolve class ${className}.`, node?.span);
          }
          this.objectRegistry.classes.set(className, classDef);
          this.environment.define(className, classDef);
        }
      }
    }
  }
}

// language/src/core/loaders.ts
class AbstractFileLoader {
}

class FetchFileLoader extends AbstractFileLoader {
  load(url) {
    return fetch(url).then((response) => response.text());
  }
}

// language/src/core/testsuites.ts
class TestSuites {
  environment;
  objectRegistry;
  constructor(environment, objectRegistry) {
    this.environment = environment;
    this.objectRegistry = objectRegistry;
  }
  run(ast) {
    for (const node of ast.children) {
      if (node instanceof ASTClassNode) {
        console.log(`\uD83E\uDDEA Running Test Cases for ${node.name} ...`);
        this.runTestCases(node);
      }
    }
  }
  runTestCases(classNode) {
    for (const member of classNode.children) {
      if (member instanceof ASTMethodNode) {
        const annotation = member.annotations?.find((a) => a.name === "test");
        if (!annotation) {
          continue;
        }
        this.runTestCase(classNode, member, annotation);
      }
    }
  }
  runTestCase(classNode, methodNode, annotation) {
    const instance = createInstanceFromNode(classNode);
    const properties = evalAnnotationProperties(annotation);
    const title = properties.title ?? `${classNode.name}.${methodNode.name}`;
    let errorMessage = null;
    try {
      callInstanceMethod(instance, methodNode, [], this.objectRegistry, this.environment);
    } catch (error) {
      errorMessage = error;
    }
    if (errorMessage) {
      console.error(` ❌ ${title}, ${errorMessage}`);
    } else {
      console.log(` ✅ ${title}`);
    }
  }
}

// language/src/lyrascript.ts
class LyraScript {
  globalEnv = new Environment;
  globalObjectRegistry = new ObjectRegistry;
  typeChecker = new TypeChecker(this.globalObjectRegistry);
  linker = new Linker(this.globalEnv, this.globalObjectRegistry, new FetchFileLoader);
  interpreter = new Interpreter(this.globalEnv, this.globalObjectRegistry);
  testSuite = new TestSuites(this.globalEnv, this.globalObjectRegistry);
  isDebug = false;
  startTime = 0;
  constructor(isDebug = false) {
    this.isDebug = isDebug;
  }
  async run(source) {
    return this.runPipeline(source).then((ast) => {
      this.debugMeasureStartTime();
      this.interpreter.run(ast);
      this.debugMeasureEndTime("interpreter");
    });
  }
  async test(source) {
    return this.runPipeline(source).then((ast) => {
      this.debugMeasureStartTime();
      this.testSuite.run(ast);
      this.debugMeasureEndTime("test");
    });
  }
  runPipeline(source) {
    this.debugMeasureStartTime();
    const ast = new Parser(source).parse();
    this.debugMeasureEndTime("parser");
    this.debug(ast);
    return this.linker.linkSources(ast).then(() => {
      this.typeChecker.collectAllSymbolsFromRegistry(this.globalObjectRegistry);
    }).then(() => {
      this.debugMeasureStartTime();
      this.typeChecker.check(ast);
      this.debugMeasureEndTime("typechecker");
      return ast;
    });
  }
  debug(value) {
    if (this.isDebug) {
      console.log(value);
    }
  }
  debugMeasureStartTime() {
    this.startTime = this.debugTimestamp();
  }
  debugMeasureEndTime(message) {
    this.debug(message + ": " + (this.debugTimestamp() - this.startTime) + "ms");
  }
  debugTimestamp() {
    if (!this.isDebug) {
      return 0;
    }
    return performance.now();
  }
}
async function fetchSource(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throwDependencyError(`Failed to load script: ${url}`);
  }
  return new Source2(await response.text());
}
async function run(url, isDebug = false) {
  return await runFromSource(await fetchSource(url), isDebug);
}
async function runFromSource(source, isDebug = false) {
  try {
    const lyraScript = new LyraScript(isDebug);
    return await lyraScript.run(source);
  } catch (error) {
    if (error instanceof Error) {
      console.error(wrapJsError(error, source).format());
    }
    throw error;
  }
}
async function runFromString(code, isDebug = false) {
  const source = new Source2(code);
  try {
    const lyraScript = new LyraScript(isDebug);
    return await lyraScript.run(source);
  } catch (error) {
    if (error instanceof Error) {
      console.error(wrapJsError(error, source).format());
    }
    throw error;
  }
}
async function test(url, isDebug = false) {
  return await testFromSource(await fetchSource(url), isDebug);
}
async function testFromSource(source, isDebug = false) {
  try {
    const lyraScript = new LyraScript(isDebug);
    return await lyraScript.test(source);
  } catch (error) {
    if (error instanceof Error) {
      console.error(wrapJsError(error, source).format());
    }
    throw error;
  }
}
async function testFromString(code, isDebug = false) {
  const source = new Source2(code);
  try {
    const lyraScript = new LyraScript(isDebug);
    return await lyraScript.test(source);
  } catch (error) {
    if (error instanceof Error) {
      console.error(wrapJsError(error, source).format());
    }
    throw error;
  }
}
async function tokens(url) {
  return tokensFromSource(await fetchSource(url));
}
function tokensFromSource(source) {
  return new Tokenizer(source).tokenize();
}
async function ast(url) {
  return astFromSource(await fetchSource(url));
}
function astFromSource(source) {
  return new Parser(source).parse();
}
export {
  tokensFromSource,
  tokens,
  testFromString,
  testFromSource,
  test,
  runFromString,
  runFromSource,
  run,
  fetchSource,
  astFromSource,
  ast,
  Tokenizer,
  Source2 as Source,
  Parser,
  LyraScript
};

//# debugId=43ABECD11933492364756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibGFuZ3VhZ2Uvc3JjL2NvcmUvZ3JhbW1hci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9lcnJvcnMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvdG9rZW5pemVyLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL3BhcnNlcl9zb3VyY2UudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvYXN0LnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2ludGVycHJldGVyX29iamVjdHMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvcGFyc2VyX3N0YXRtZW50cy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9wYXJzZXIudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvbmF0aXZlX2NsYXNzLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2ludGVycHJldGVyX2NvbnZlcnNpb24udHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9zdHJpbmcudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9zeXN0ZW0udHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9hc3NlcnQudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9udW1iZXIudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9hcnJheS50cyIsICJsYW5ndWFnZS9zcmMvbGlicmFyeS9uYXRpdmVfY2xhc3Nlcy50cyIsICJsYW5ndWFnZS9zcmMvbGlicmFyeS9uYXRpdmVfZnVuY3Rpb25zLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL3R5cGVfb2JqZWN0cy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9hdXRvYm94aW5nLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2ludGVycHJldGVyX3J1bnRpbWUudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvaW50ZXJwcmV0ZXIudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvaW50ZXJwcmV0ZXJfcmVnaXN0cnkudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvdHlwZWNoZWNrZXIudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvZGVwZW5kZW5jaWVzLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2xpbmtlci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9sb2FkZXJzLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL3Rlc3RzdWl0ZXMudHMiLCAibGFuZ3VhZ2Uvc3JjL2x5cmFzY3JpcHQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiaW1wb3J0IHR5cGUge1NvdXJjZX0gZnJvbSBcIi4vcGFyc2VyX3NvdXJjZS50c1wiO1xuXG5leHBvcnQgY2xhc3MgR1JBTU1BUiB7XG5cdHN0YXRpYyBJTVBPUlQ6IHN0cmluZyAgICAgID0gJ2ltcG9ydCc7XG5cdHN0YXRpYyBGUk9NOiBzdHJpbmcgICAgICAgID0gJ2Zyb20nO1xuXHRzdGF0aWMgTEVUOiBzdHJpbmcgICAgICAgICA9ICdsZXQnO1xuXHRzdGF0aWMgT1BFTjogc3RyaW5nICAgICAgICA9ICdvcGVuJztcblx0c3RhdGljIENMQVNTOiBzdHJpbmcgICAgICAgPSAnY2xhc3MnO1xuXHRzdGF0aWMgSU5URVJGQUNFOiBzdHJpbmcgICA9ICdpbnRlcmZhY2UnO1xuXHRzdGF0aWMgRVhURU5EUzogc3RyaW5nICAgICA9ICdleHRlbmRzJztcblx0c3RhdGljIElNUExFTUVOVFM6IHN0cmluZyAgPSAnaW1wbGVtZW50cyc7XG5cdHN0YXRpYyBDT05TVFJVQ1RPUjogc3RyaW5nID0gJ2NvbnN0cnVjdG9yJztcblx0c3RhdGljIE5FVzogc3RyaW5nICAgICAgICAgPSAnbmV3Jztcblx0c3RhdGljIFRISVM6IHN0cmluZyAgICAgICAgPSAndGhpcyc7XG5cdHN0YXRpYyBQVUJMSUM6IHN0cmluZyAgICAgID0gJ3B1YmxpYyc7XG5cdHN0YXRpYyBQUklWQVRFOiBzdHJpbmcgICAgID0gJ3ByaXZhdGUnO1xuXHRzdGF0aWMgU1RBVElDOiBzdHJpbmcgICAgICA9ICdzdGF0aWMnO1xuXHRzdGF0aWMgUkVBRE9OTFk6IHN0cmluZyAgICA9ICdyZWFkb25seSc7XG5cdHN0YXRpYyBSRVRVUk46IHN0cmluZyAgICAgID0gJ3JldHVybic7XG5cdHN0YXRpYyBTVVBFUjogc3RyaW5nICAgICAgID0gJ3N1cGVyJztcblx0c3RhdGljIFRSVUU6IHN0cmluZyAgICAgICAgPSAndHJ1ZSc7XG5cdHN0YXRpYyBGQUxTRTogc3RyaW5nICAgICAgID0gJ2ZhbHNlJztcblx0c3RhdGljIElGOiBzdHJpbmcgICAgICAgICAgPSAnaWYnO1xuXHRzdGF0aWMgRUxTRTogc3RyaW5nICAgICAgICA9ICdlbHNlJztcblx0c3RhdGljIE1BVENIOiBzdHJpbmcgICAgICAgPSAnbWF0Y2gnO1xuXHRzdGF0aWMgREVGQVVMVDogc3RyaW5nICAgICA9ICdkZWZhdWx0Jztcblx0c3RhdGljIEZPUkVBQ0g6IHN0cmluZyAgICAgPSAnZm9yZWFjaCc7XG5cdHN0YXRpYyBJTjogc3RyaW5nICAgICAgICAgID0gJ2luJztcblx0c3RhdGljIE5VTEw6IHN0cmluZyAgICAgICAgPSAnbnVsbCc7XG5cdHN0YXRpYyBWRE9NOiBzdHJpbmcgICAgICAgID0gJ3Zkb20nO1xuXG5cdHN0YXRpYyBCUkFDS0VUX1NRVUFSRV9PUEVOOiBzdHJpbmcgID0gJ1snO1xuXHRzdGF0aWMgQlJBQ0tFVF9TUVVBUkVfQ0xPU0U6IHN0cmluZyA9ICddJztcblx0c3RhdGljIEJSQUNFX09QRU46IHN0cmluZyAgICAgICAgICAgPSAneyc7XG5cdHN0YXRpYyBCUkFDRV9DTE9TRTogc3RyaW5nICAgICAgICAgID0gJ30nO1xuXHRzdGF0aWMgUEFSRU5USEVTRVNfT1BFTjogc3RyaW5nICAgICA9ICcoJztcblx0c3RhdGljIFBBUkVOVEhFU0VTX0NMT1NFOiBzdHJpbmcgICAgPSAnKSc7XG5cdHN0YXRpYyBTRU1JQ09MT046IHN0cmluZyAgICAgICAgICAgID0gJzsnO1xuXHRzdGF0aWMgQ09MT046IHN0cmluZyAgICAgICAgICAgICAgICA9ICc6Jztcblx0c3RhdGljIENPTU1BOiBzdHJpbmcgICAgICAgICAgICAgICAgPSAnLCc7XG5cblx0c3RhdGljIEFSUk9XOiBzdHJpbmcgICAgPSAnLT4nO1xuXHRzdGF0aWMgRE9UOiBzdHJpbmcgICAgICA9ICcuJztcblx0c3RhdGljIEFTU0lHTjogc3RyaW5nICAgPSAnPSc7XG5cdHN0YXRpYyBQTFVTOiBzdHJpbmcgICAgID0gJysnO1xuXHRzdGF0aWMgTUlOVVM6IHN0cmluZyAgICA9ICctJztcblx0c3RhdGljIERJVklERTogc3RyaW5nICAgPSAnLyc7XG5cdHN0YXRpYyBNVUxUSVBMWTogc3RyaW5nID0gJyonO1xuXHRzdGF0aWMgTU9EVUxVUzogc3RyaW5nICA9ICclJztcblxuXHRzdGF0aWMgRVhDTEFNQVRJT05fTUFSSzogc3RyaW5nID0gJyEnO1xuXHRzdGF0aWMgUVVFU1RJT05fTUFSSzogc3RyaW5nICAgID0gJz8nO1xuXHRzdGF0aWMgTEVTU19USEFOOiBzdHJpbmcgICAgICAgID0gJzwnO1xuXHRzdGF0aWMgR1JFQVRFUl9USEFOOiBzdHJpbmcgICAgID0gJz4nO1xuXHRzdGF0aWMgTEVTU19FUVVBTDogc3RyaW5nICAgICAgID0gJzw9Jztcblx0c3RhdGljIEdSRUFURVJfRVFVQUw6IHN0cmluZyAgICA9ICc+PSc7XG5cdHN0YXRpYyBFUVVBTDogc3RyaW5nICAgICAgICAgICAgPSAnPT0nO1xuXHRzdGF0aWMgTk9UX0VRVUFMOiBzdHJpbmcgICAgICAgID0gJyE9Jztcblx0c3RhdGljIEFORDogc3RyaW5nICAgICAgICAgICAgICA9ICcmJic7XG5cdHN0YXRpYyBPUjogc3RyaW5nICAgICAgICAgICAgICAgPSAnfHwnO1xuXG5cdHN0YXRpYyBLRVlXT1JEUzogc3RyaW5nW10gICAgICAgID0gW1xuXHRcdEdSQU1NQVIuSU1QT1JULFxuXHRcdEdSQU1NQVIuRlJPTSxcblx0XHRHUkFNTUFSLk9QRU4sXG5cdFx0R1JBTU1BUi5DTEFTUyxcblx0XHRHUkFNTUFSLklOVEVSRkFDRSxcblx0XHRHUkFNTUFSLkVYVEVORFMsXG5cdFx0R1JBTU1BUi5JTVBMRU1FTlRTLFxuXHRcdEdSQU1NQVIuUFVCTElDLFxuXHRcdEdSQU1NQVIuUFJJVkFURSxcblx0XHRHUkFNTUFSLlNUQVRJQyxcblx0XHRHUkFNTUFSLlJFQURPTkxZLFxuXHRcdEdSQU1NQVIuUkVUVVJOLFxuXHRcdEdSQU1NQVIuTEVULFxuXHRcdEdSQU1NQVIuTkVXLFxuXHRcdEdSQU1NQVIuVEhJUyxcblx0XHRHUkFNTUFSLklGLFxuXHRcdEdSQU1NQVIuRUxTRSxcblx0XHRHUkFNTUFSLk1BVENILFxuXHRcdEdSQU1NQVIuREVGQVVMVCxcblx0XHRHUkFNTUFSLkZPUkVBQ0gsXG5cdFx0R1JBTU1BUi5JTixcblx0XHRHUkFNTUFSLk5VTEwsXG5cdFx0R1JBTU1BUi5WRE9NLFxuXHRdO1xuXHRzdGF0aWMgQVJJVEhNRVRJQzogc3RyaW5nW10gICAgICA9IFtcblx0XHRHUkFNTUFSLlBMVVMsXG5cdFx0R1JBTU1BUi5NSU5VUyxcblx0XHRHUkFNTUFSLkRJVklERSxcblx0XHRHUkFNTUFSLk1VTFRJUExZLFxuXHRcdEdSQU1NQVIuTU9EVUxVU1xuXHRdO1xuXHRzdGF0aWMgQ09NUEFSSVNPTjogc3RyaW5nW10gICAgICA9IFtcblx0XHRHUkFNTUFSLkxFU1NfVEhBTixcblx0XHRHUkFNTUFSLkdSRUFURVJfVEhBTixcblx0XHRHUkFNTUFSLkxFU1NfRVFVQUwsXG5cdFx0R1JBTU1BUi5HUkVBVEVSX0VRVUFMXG5cdF07XG5cdHN0YXRpYyBFUVVBTElUWTogc3RyaW5nW10gICAgICAgID0gW1xuXHRcdEdSQU1NQVIuRVFVQUwsXG5cdFx0R1JBTU1BUi5OT1RfRVFVQUxcblx0XTtcblx0c3RhdGljIExPR0lDQUw6IHN0cmluZ1tdICAgICAgICAgPSBbXG5cdFx0R1JBTU1BUi5BTkQsXG5cdFx0R1JBTU1BUi5PUlxuXHRdO1xuXHRzdGF0aWMgT1BFUkFUT1JTOiBzdHJpbmdbXSAgICAgICA9IFtcblx0XHRHUkFNTUFSLkVYQ0xBTUFUSU9OX01BUkssXG5cdFx0R1JBTU1BUi5RVUVTVElPTl9NQVJLLFxuXHRcdEdSQU1NQVIuQVJST1csXG5cdFx0R1JBTU1BUi5ET1QsXG5cdFx0R1JBTU1BUi5BU1NJR04sXG5cdFx0R1JBTU1BUi5QTFVTLFxuXHRcdEdSQU1NQVIuTUlOVVMsXG5cdFx0R1JBTU1BUi5ESVZJREUsXG5cdFx0R1JBTU1BUi5NVUxUSVBMWSxcblx0XHRHUkFNTUFSLk1PRFVMVVMsXG5cdFx0R1JBTU1BUi5MRVNTX1RIQU4sXG5cdFx0R1JBTU1BUi5HUkVBVEVSX1RIQU4sXG5cdFx0R1JBTU1BUi5MRVNTX0VRVUFMLFxuXHRcdEdSQU1NQVIuR1JFQVRFUl9FUVVBTCxcblx0XHRHUkFNTUFSLkVRVUFMLFxuXHRcdEdSQU1NQVIuTk9UX0VRVUFMLFxuXHRcdEdSQU1NQVIuQU5ELFxuXHRcdEdSQU1NQVIuT1IsXG5cdF07XG5cdHN0YXRpYyBNQVRIX09QRVJBVE9SUzogc3RyaW5nW10gID0gW1xuXHRcdEdSQU1NQVIuUExVUyxcblx0XHRHUkFNTUFSLk1JTlVTLFxuXHRcdEdSQU1NQVIuRElWSURFLFxuXHRcdEdSQU1NQVIuTVVMVElQTFksXG5cdFx0R1JBTU1BUi5NT0RVTFVTXG5cdF07XG5cdHN0YXRpYyBMT0dJQ19PUEVSQVRPUlM6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuTEVTU19USEFOLFxuXHRcdEdSQU1NQVIuR1JFQVRFUl9USEFOLFxuXHRcdEdSQU1NQVIuTEVTU19FUVVBTCxcblx0XHRHUkFNTUFSLkdSRUFURVJfRVFVQUwsXG5cdFx0R1JBTU1BUi5FUVVBTCxcblx0XHRHUkFNTUFSLk5PVF9FUVVBTCxcblx0XHRHUkFNTUFSLkFORCxcblx0XHRHUkFNTUFSLk9SLFxuXHRdO1xuXHRzdGF0aWMgUFVOQ1RVQVRJT05TOiBzdHJpbmdbXSAgICA9IFtcblx0XHRHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX09QRU4sXG5cdFx0R1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9DTE9TRSxcblx0XHRHUkFNTUFSLkJSQUNFX09QRU4sXG5cdFx0R1JBTU1BUi5CUkFDRV9DTE9TRSxcblx0XHRHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4sXG5cdFx0R1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSxcblx0XHRHUkFNTUFSLlNFTUlDT0xPTixcblx0XHRHUkFNTUFSLkNPTE9OLFxuXHRcdEdSQU1NQVIuQ09NTUFcblx0XVxufVxuXG5leHBvcnQgY2xhc3MgVFlQRV9FTlVNIHtcblx0c3RhdGljIE1JWEVEOiBzdHJpbmcgICA9ICdtaXhlZCc7XG5cdHN0YXRpYyBWT0lEOiBzdHJpbmcgICAgPSAndm9pZCc7XG5cdHN0YXRpYyBOVU1CRVI6IHN0cmluZyAgPSAnbnVtYmVyJztcblx0c3RhdGljIFNUUklORzogc3RyaW5nICA9ICdzdHJpbmcnO1xuXHRzdGF0aWMgQk9PTEVBTjogc3RyaW5nID0gJ2Jvb2xlYW4nO1xuXHRzdGF0aWMgQVJSQVk6IHN0cmluZyAgID0gJ2FycmF5Jztcblx0c3RhdGljIE5VTEw6IHN0cmluZyAgICA9ICdudWxsJztcbn1cblxuZXhwb3J0IGNsYXNzIFJ1bGVzIHtcblx0c3RhdGljIEtFWVdPUkRTOiBTZXQ8c3RyaW5nPiAgICAgPSBuZXcgU2V0KEdSQU1NQVIuS0VZV09SRFMpO1xuXHRzdGF0aWMgT1BFUkFUT1JTOiBTZXQ8c3RyaW5nPiAgICA9IG5ldyBTZXQoR1JBTU1BUi5PUEVSQVRPUlMpO1xuXHRzdGF0aWMgUFVOQ1RVQVRJT05TOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoR1JBTU1BUi5QVU5DVFVBVElPTlMpO1xuXHRzdGF0aWMgQ09NTUVOVF9MSU5FOiBzdHJpbmcgICAgICA9ICcvLyc7XG5cblx0aXNBbHBoYShjaGFyOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gL1thLXpfXS9pLnRlc3QoY2hhcik7XG5cdH1cblxuXHRpc051bWVyaWMoY2hhcjogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIC9bMC05XS8udGVzdChjaGFyKTtcblx0fVxuXG5cdGlzQWxwaGFOdW1lcmljKGNoYXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmlzQWxwaGEoY2hhcikgfHwgdGhpcy5pc051bWVyaWMoY2hhcik7XG5cdH1cblxuXHRpc1doaXRlc3BhY2UoY2hhcjogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIC9cXHMvLnRlc3QoY2hhcik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFRva2VuVHlwZSB7XG5cdHN0YXRpYyBDT01NRU5UOiBzdHJpbmcgICAgID0gJ2NvbW1lbnQnO1xuXHRzdGF0aWMgQU5OT1RBVElPTjogc3RyaW5nICA9ICdhbm5vdGF0aW9uJztcblx0c3RhdGljIElERU5USUZJRVI6IHN0cmluZyAgPSAnaWRlbnRpZmllcic7XG5cdHN0YXRpYyBLRVlXT1JEOiBzdHJpbmcgICAgID0gJ2tleXdvcmQnO1xuXHRzdGF0aWMgUFVOQ1RVQVRJT046IHN0cmluZyA9ICdwdW5jdHVhdGlvbic7XG5cdHN0YXRpYyBOVU1CRVI6IHN0cmluZyAgICAgID0gJ251bWJlcic7XG5cdHN0YXRpYyBTVFJJTkc6IHN0cmluZyAgICAgID0gJ3N0cmluZyc7XG5cdHN0YXRpYyBCT09MRUFOOiBzdHJpbmcgICAgID0gJ2Jvb2xlYW4nO1xuXHRzdGF0aWMgT1BFUkFUT1I6IHN0cmluZyAgICA9ICdvcGVyYXRvcic7XG5cdHN0YXRpYyBFT0Y6IHN0cmluZyAgICAgICAgID0gJ2VvZic7XG59XG5cbmV4cG9ydCBjbGFzcyBUb2tlbiB7XG5cdHR5cGU6IHN0cmluZztcblx0dmFsdWU6IHN0cmluZztcblx0bGluZTogbnVtYmVyICAgPSAxO1xuXHRjb2x1bW46IG51bWJlciA9IDE7XG5cdHN0YXJ0OiBudW1iZXI7XG5cdGVuZDogbnVtYmVyO1xuXHRzb3VyY2U6IFNvdXJjZTtcblxuXHRjb25zdHJ1Y3Rvcih0eXBlOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyLCBzb3VyY2U6IFNvdXJjZSkge1xuXHRcdHRoaXMudHlwZSAgID0gdHlwZTtcblx0XHR0aGlzLnZhbHVlICA9IHZhbHVlO1xuXHRcdHRoaXMuc3RhcnQgID0gc3RhcnQ7XG5cdFx0dGhpcy5lbmQgICAgPSBlbmQ7XG5cdFx0dGhpcy5zb3VyY2UgPSBzb3VyY2U7XG5cdH1cblxuXHR3aXRoTGluZUFuZENvbHVtbihsaW5lOiBudW1iZXIsIGNvbHVtbjogbnVtYmVyKTogVG9rZW4ge1xuXHRcdHRoaXMubGluZSAgID0gbGluZTtcblx0XHR0aGlzLmNvbHVtbiA9IGNvbHVtbjtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufVxuIiwKICAgICJpbXBvcnQge1NvdXJjZSwgU3Bhbn0gZnJvbSBcIi4vcGFyc2VyX3NvdXJjZVwiO1xuXG5jbGFzcyBFcnJvclR5cGVzIHtcblx0c3RhdGljIFRZUEVfRVJST1I6IHN0cmluZyA9ICdUeXBlRXJyb3InO1xuXHRzdGF0aWMgVE9LRU5fRVJST1I6IHN0cmluZyA9ICdUb2tlbkVycm9yJztcblx0c3RhdGljIFBBUlNFUl9FUlJPUjogc3RyaW5nID0gJ1BhcnNlckVycm9yJztcblx0c3RhdGljIFJVTlRJTUVfRVJST1I6IHN0cmluZyA9ICdSdW50aW1lRXJyb3InO1xuXHRzdGF0aWMgSU5URVJOQUxfRVJST1I6IHN0cmluZyA9ICdJbnRlcm5hbEVycm9yJztcblx0c3RhdGljIE5BVElWRV9FUlJPUjogc3RyaW5nID0gJ05hdGl2ZUVycm9yJztcblx0c3RhdGljIERFUEVOREVOQ1lfRVJST1I6IHN0cmluZyA9ICdEZXBlbmRlbmN5RXJyb3InO1xufVxuXG5leHBvcnQgY2xhc3MgTHlyYUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXHRraW5kOiBzdHJpbmc7XG5cdHNwYW46IFNwYW4gfCBudWxsID0gbnVsbDtcblx0b3ZlcnJpZGUgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdGtpbmQ6IHN0cmluZyxcblx0XHRtZXNzYWdlOiBzdHJpbmcsXG5cdFx0c3BhbjogU3BhbiB8IG51bGwgPSBudWxsLFxuXHRcdGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuXHQpIHtcblx0XHRzdXBlcihtZXNzYWdlKTtcblx0XHR0aGlzLmtpbmQgPSBraW5kO1xuXHRcdHRoaXMuc3BhbiA9IHNwYW47XG5cdFx0dGhpcy5jYXVzZSA9IGNhdXNlO1xuXHR9XG5cblx0Zm9ybWF0KCk6IHN0cmluZyB7XG5cdFx0aWYgKHRoaXMuc3Bhbikge1xuXG5cdFx0XHRyZXR1cm4gYFxuWyR7dGhpcy5raW5kfV0gJHt0aGlzLm1lc3NhZ2V9XG4gIGF0ICR7dGhpcy5zcGFuLnNvdXJjZS51cmx9OiR7dGhpcy5zcGFuLmxpbmV9OiR7dGhpcy5zcGFuLmNvbHVtbn1cblxuJHt0aGlzLnNwYW4udGV4dCgpfVxuJHtcIiBcIi5yZXBlYXQodGhpcy5zcGFuLmNvbHVtbil9JHtcIl5cIi5yZXBlYXQodGhpcy5zcGFuLmVuZCAtIHRoaXMuc3Bhbi5zdGFydCl9XG5gO1xuXHRcdH1cblxuXHRcdHJldHVybiBgWyR7dGhpcy5raW5kfV0gJHt0aGlzLm1lc3NhZ2V9YDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYVRva2VuRXJyb3IgZXh0ZW5kcyBMeXJhRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRFcnJvclR5cGVzLlRPS0VOX0VSUk9SLFxuXHRcdFx0bWVzc2FnZSxcblx0XHRcdHNwYW4sXG5cdFx0XHRjYXVzZVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFUeXBlRXJyb3IgZXh0ZW5kcyBMeXJhRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRFcnJvclR5cGVzLlRZUEVfRVJST1IsXG5cdFx0XHRtZXNzYWdlLFxuXHRcdFx0c3Bhbixcblx0XHRcdGNhdXNlXG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYVBhcnNlckVycm9yIGV4dGVuZHMgTHlyYUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0RXJyb3JUeXBlcy5QQVJTRVJfRVJST1IsXG5cdFx0XHRtZXNzYWdlLFxuXHRcdFx0c3Bhbixcblx0XHRcdGNhdXNlXG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYVJ1bnRpbWVFcnJvciBleHRlbmRzIEx5cmFFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihcblx0XHRcdEVycm9yVHlwZXMuUlVOVElNRV9FUlJPUixcblx0XHRcdG1lc3NhZ2UsXG5cdFx0XHRzcGFuLFxuXHRcdFx0Y2F1c2Vcblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhTmF0aXZlRXJyb3IgZXh0ZW5kcyBMeXJhRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRFcnJvclR5cGVzLk5BVElWRV9FUlJPUixcblx0XHRcdG1lc3NhZ2UsXG5cdFx0XHRzcGFuLFxuXHRcdFx0Y2F1c2Vcblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhRGVwZW5kZW5jeUVycm9yIGV4dGVuZHMgTHlyYUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0RXJyb3JUeXBlcy5ERVBFTkRFTkNZX0VSUk9SLFxuXHRcdFx0bWVzc2FnZSxcblx0XHRcdHNwYW4sXG5cdFx0XHRjYXVzZVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93VG9rZW5FcnJvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKTogbmV2ZXIge1xuXHR0aHJvdyBuZXcgTHlyYVRva2VuRXJyb3IobWVzc2FnZSwgc3BhbiwgY2F1c2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dUeXBlRXJyb3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IG5ldmVyIHtcblx0dGhyb3cgbmV3IEx5cmFUeXBlRXJyb3IobWVzc2FnZSwgc3BhbiwgY2F1c2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQYXJzZXJFcnJvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKTogbmV2ZXIge1xuXHR0aHJvdyBuZXcgTHlyYVBhcnNlckVycm9yKG1lc3NhZ2UsIHNwYW4sIGNhdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UnVudGltZUVycm9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBuZXZlciB7XG5cdHRocm93IG5ldyBMeXJhUnVudGltZUVycm9yKG1lc3NhZ2UsIHNwYW4sIGNhdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93TmF0aXZlRXJyb3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IG5ldmVyIHtcblx0dGhyb3cgbmV3IEx5cmFOYXRpdmVFcnJvcihtZXNzYWdlLCBzcGFuLCBjYXVzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd0RlcGVuZGVuY3lFcnJvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKTogbmV2ZXIge1xuXHR0aHJvdyBuZXcgTHlyYURlcGVuZGVuY3lFcnJvcihtZXNzYWdlLCBzcGFuLCBjYXVzZSk7XG59XG5cbi8qKlxuICogQHRocm93cyB7RXJyb3J9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3cmFwSnNFcnJvcihlcnJvcjogRXJyb3IsIHNvdXJjZTogU291cmNlKTogTHlyYUVycm9yIHtcblx0aWYgKGVycm9yIGluc3RhbmNlb2YgTHlyYUVycm9yKSB7XG5cdFx0cmV0dXJuIGVycm9yO1xuXHR9XG5cblx0cmV0dXJuIG5ldyBMeXJhRXJyb3IoXG5cdFx0RXJyb3JUeXBlcy5JTlRFUk5BTF9FUlJPUixcblx0XHRlcnJvci5tZXNzYWdlIHx8IFN0cmluZyhlcnJvciksXG5cdFx0bmV3IFNwYW4oc291cmNlLCAwLCBzb3VyY2UubGVuZ3RoKVxuXHQpO1xufVxuIiwKICAgICJpbXBvcnQge0dSQU1NQVIsIFJ1bGVzLCBUb2tlbiwgVG9rZW5UeXBlfSBmcm9tIFwiLi9ncmFtbWFyLnRzXCI7XG5pbXBvcnQge3Rocm93VG9rZW5FcnJvcn0gZnJvbSBcIi4vZXJyb3JzXCI7XG5pbXBvcnQgdHlwZSB7U291cmNlfSBmcm9tIFwiLi9wYXJzZXJfc291cmNlLnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBUb2tlbml6ZXIge1xuXHRydWxlcyA9IG5ldyBSdWxlcygpO1xuXG5cdHNvdXJjZTogU291cmNlO1xuXG5cdGNvbnN0cnVjdG9yKHNvdXJjZTogU291cmNlKSB7XG5cdFx0dGhpcy5zb3VyY2UgPSBzb3VyY2U7XG5cdH1cblxuXHRnZXRUb2tlblN0cmVhbSgpOiBUb2tlblN0cmVhbSB7XG5cdFx0cmV0dXJuIG5ldyBUb2tlblN0cmVhbSh0aGlzLnRva2VuaXplKCkpO1xuXHR9XG5cblx0dG9rZW5pemUoKTogVG9rZW5bXSB7XG5cdFx0Y29uc3QgdG9rZW5zOiBUb2tlbltdID0gW107XG5cblx0XHRsZXQgaTogbnVtYmVyICAgICAgPSAwO1xuXHRcdGxldCBsaW5lOiBudW1iZXIgICA9IDE7XG5cdFx0bGV0IGNvbHVtbjogbnVtYmVyID0gMDtcblxuXHRcdHdoaWxlIChpIDwgdGhpcy5zb3VyY2UubGVuZ3RoKSB7XG5cdFx0XHRpZiAodGhpcy5zb3VyY2UuY2hhckF0KGkpID09PSAnXFxuJykge1xuXHRcdFx0XHRsaW5lKys7XG5cdFx0XHRcdGNvbHVtbiA9IDA7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb2x1bW4rKztcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMubWF0Y2hXaGl0ZXNwYWNlQXQoaSkpIHtcblx0XHRcdFx0aSsrO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgbGluZUNvbW1lbnQgPSB0aGlzLm1hdGNoTGluZUNvbW1lbnRBdChpKTtcblx0XHRcdGlmIChsaW5lQ29tbWVudCkge1xuXHRcdFx0XHR0b2tlbnMucHVzaChsaW5lQ29tbWVudC53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IGxpbmVDb21tZW50LmVuZCArIDE7XG5cblx0XHRcdFx0bGluZSsrO1xuXHRcdFx0XHRjb2x1bW4gPSAwO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc3RyaW5nID0gdGhpcy5tYXRjaFN0cmluZ0F0KGkpO1xuXHRcdFx0aWYgKHN0cmluZykge1xuXHRcdFx0XHR0b2tlbnMucHVzaChzdHJpbmcud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBzdHJpbmcuZW5kICsgMTtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChzdHJpbmcpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgbnVtYmVyID0gdGhpcy5tYXRjaE51bWJlckF0KGkpO1xuXHRcdFx0aWYgKG51bWJlcikge1xuXHRcdFx0XHR0b2tlbnMucHVzaChudW1iZXIud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBudW1iZXIuZW5kO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KG51bWJlcik7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBpZGVudGlmaWVyID0gdGhpcy5tYXRjaElkZW50aWZpZXJBdChpKTtcblx0XHRcdGlmIChpZGVudGlmaWVyKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKGlkZW50aWZpZXIud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBpZGVudGlmaWVyLmVuZDtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChpZGVudGlmaWVyKTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IG9wZXJhdG9yID0gdGhpcy5tYXRjaE9wZXJhdG9yQXQoaSk7XG5cdFx0XHRpZiAob3BlcmF0b3IpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2gob3BlcmF0b3Iud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBvcGVyYXRvci5lbmQgKyAxO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KG9wZXJhdG9yKTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHB1bmN0dWF0aW9uID0gdGhpcy5tYXRjaFB1bmN0dWF0aW9uQXQoaSk7XG5cdFx0XHRpZiAocHVuY3R1YXRpb24pIHtcblx0XHRcdFx0dG9rZW5zLnB1c2gocHVuY3R1YXRpb24ud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBwdW5jdHVhdGlvbi5lbmQgKyAxO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KHB1bmN0dWF0aW9uKTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGFubm90YXRpb24gPSB0aGlzLm1hdGNoQW5ub3RhdGlvbkF0KGkpO1xuXHRcdFx0aWYgKGFubm90YXRpb24pIHtcblx0XHRcdFx0dG9rZW5zLnB1c2goYW5ub3RhdGlvbi53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IGFubm90YXRpb24uZW5kICsgMTtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChhbm5vdGF0aW9uKTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHRocm93VG9rZW5FcnJvcignVW5leHBlY3RlZCBjaGFyYWN0ZXI6ICcgKyB0aGlzLnNvdXJjZS5jaGFyQXQoaSkpO1xuXHRcdH1cblxuXHRcdHRva2Vucy5wdXNoKFxuXHRcdFx0dGhpcy5lb2YoaSlcblx0XHRcdCAgICAud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKVxuXHRcdCk7XG5cblx0XHRyZXR1cm4gdG9rZW5zO1xuXHR9XG5cblx0ZW9mKGVuZDogbnVtYmVyKTogVG9rZW4ge1xuXHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLkVPRiwgJycsIGVuZCwgZW5kLCB0aGlzLnNvdXJjZSlcblx0fVxuXG5cdGNvbHVtT2Zmc2V0KHRva2VuOiBUb2tlbik6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRva2VuLnZhbHVlLmxlbmd0aCAtIDE7XG5cdH1cblxuXHRtYXRjaFdoaXRlc3BhY2VBdChpOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5ydWxlcy5pc1doaXRlc3BhY2UodGhpcy5zb3VyY2UuY2hhckF0KGkpKTtcblx0fVxuXG5cdG1hdGNoTnVtYmVyQXQoaTogbnVtYmVyKTogVG9rZW4gfCBudWxsIHtcblx0XHRpZiAoIXRoaXMucnVsZXMuaXNOdW1lcmljKHRoaXMuc291cmNlLmNoYXJBdChpKSkpIHtcblx0XHRcdHJldHVybiBudWxsXG5cdFx0fVxuXHRcdGxldCBzdGFydCA9IGk7XG5cdFx0d2hpbGUgKHRoaXMucnVsZXMuaXNOdW1lcmljKHRoaXMuc291cmNlLmNoYXJBdChpKSkpIGkrKztcblx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5OVU1CRVIsIHRoaXMuc291cmNlLnNsaWNlKHN0YXJ0LCBpKSwgc3RhcnQsIGksIHRoaXMuc291cmNlKTtcblx0fVxuXG5cdG1hdGNoU3RyaW5nQXQoaTogbnVtYmVyKTogVG9rZW4gfCBudWxsIHtcblx0XHRpZiAodGhpcy5zb3VyY2UuY2hhckF0KGkpICE9PSAnXCInKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0bGV0IHN0YXJ0ID0gKytpO1xuXHRcdHdoaWxlICh0aGlzLnNvdXJjZS5jaGFyQXQoaSkgIT09ICdcIicpIGkrKztcblx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5TVFJJTkcsIHRoaXMuc291cmNlLnNsaWNlKHN0YXJ0LCBpKSwgc3RhcnQsIGksIHRoaXMuc291cmNlKTtcblx0fVxuXG5cdG1hdGNoSWRlbnRpZmllckF0KGk6IG51bWJlcik6IFRva2VuIHwgbnVsbCB7XG5cdFx0aWYgKCF0aGlzLnJ1bGVzLmlzQWxwaGEodGhpcy5zb3VyY2UuY2hhckF0KGkpKSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGxldCBzdGFydCA9IGk7XG5cdFx0bGV0IGogICAgID0gaTtcblx0XHR3aGlsZSAodGhpcy5ydWxlcy5pc0FscGhhTnVtZXJpYyh0aGlzLnNvdXJjZS5jaGFyQXQoaikpKSBqKys7XG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnNvdXJjZS5zbGljZShzdGFydCwgaik7XG5cblx0XHRsZXQgdHlwZSA9IFRva2VuVHlwZS5JREVOVElGSUVSO1xuXHRcdGlmIChbR1JBTU1BUi5UUlVFLCBHUkFNTUFSLkZBTFNFXS5pbmNsdWRlcyh2YWx1ZSkpIHtcblx0XHRcdHR5cGUgPSBUb2tlblR5cGUuQk9PTEVBTjtcblx0XHR9IGVsc2UgaWYgKFJ1bGVzLktFWVdPUkRTLmhhcyh2YWx1ZSkpIHtcblx0XHRcdHR5cGUgPSBUb2tlblR5cGUuS0VZV09SRDtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IFRva2VuKHR5cGUsIHZhbHVlLCBzdGFydCwgaiwgdGhpcy5zb3VyY2UpO1xuXHR9XG5cblx0bWF0Y2hPcGVyYXRvckF0KGk6IG51bWJlcik6IFRva2VuIHwgbnVsbCB7XG5cdFx0Y29uc3QgY2hhcnMgPSB0aGlzLnNvdXJjZS5jaGFyQXQoaSkgKyB0aGlzLnNvdXJjZS5jaGFyQXQoaSArIDEpO1xuXHRcdGlmIChSdWxlcy5PUEVSQVRPUlMuaGFzKGNoYXJzKSkge1xuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuT1BFUkFUT1IsIGNoYXJzLCBpLCBpICsgMSwgdGhpcy5zb3VyY2UpO1xuXHRcdH1cblxuXHRcdGlmIChSdWxlcy5PUEVSQVRPUlMuaGFzKHRoaXMuc291cmNlLmNoYXJBdChpKSkpIHtcblx0XHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLk9QRVJBVE9SLCB0aGlzLnNvdXJjZS5jaGFyQXQoaSksIGksIGksIHRoaXMuc291cmNlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblxuXHR9XG5cblx0bWF0Y2hQdW5jdHVhdGlvbkF0KGk6IG51bWJlcik6IFRva2VuIHwgbnVsbCB7XG5cdFx0aWYgKCFSdWxlcy5QVU5DVFVBVElPTlMuaGFzKHRoaXMuc291cmNlLmNoYXJBdChpKSkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5QVU5DVFVBVElPTiwgdGhpcy5zb3VyY2UuY2hhckF0KGkpLCBpLCBpLCB0aGlzLnNvdXJjZSk7XG5cdH1cblxuXHRtYXRjaExpbmVDb21tZW50QXQoaTogbnVtYmVyKTogVG9rZW4gfCBudWxsIHtcblx0XHRpZiAoIXRoaXMuc291cmNlLnN0YXJ0c1dpdGgoUnVsZXMuQ09NTUVOVF9MSU5FLCBpKSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGxldCBqID0gaSArIFJ1bGVzLkNPTU1FTlRfTElORS5sZW5ndGg7XG5cdFx0d2hpbGUgKGogPCB0aGlzLnNvdXJjZS5sZW5ndGggJiYgdGhpcy5zb3VyY2UuY2hhckF0KGopICE9PSAnXFxuJykgaisrO1xuXHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLkNPTU1FTlQsIHRoaXMuc291cmNlLnNsaWNlKGksIGopLCBpLCBqLCB0aGlzLnNvdXJjZSk7XG5cdH1cblxuXHRtYXRjaEFubm90YXRpb25BdChpOiBudW1iZXIpOiBUb2tlbiB8IG51bGwge1xuXHRcdGlmICh0aGlzLnNvdXJjZS5jaGFyQXQoaSkgIT09ICdAJykge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0bGV0IHN0YXJ0ID0gaSArIDE7XG5cdFx0bGV0IGogICAgID0gaSArIDE7XG5cdFx0d2hpbGUgKHRoaXMucnVsZXMuaXNBbHBoYSh0aGlzLnNvdXJjZS5jaGFyQXQoaikpKSBqKys7XG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnNvdXJjZS5zbGljZShzdGFydCwgaik7XG5cblx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5BTk5PVEFUSU9OLCB2YWx1ZSwgc3RhcnQsIGosIHRoaXMuc291cmNlKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVG9rZW5TdHJlYW0ge1xuXHR0b2tlbnM6IFRva2VuW107XG5cdGluZGV4OiBudW1iZXIgPSAwO1xuXG5cdGNvbnN0cnVjdG9yKHRva2VuczogVG9rZW5bXSkge1xuXHRcdHRoaXMudG9rZW5zID0gdG9rZW5zO1xuXHR9XG5cblx0cmV3aW5kKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmluZGV4ID4gMCkge1xuXHRcdFx0dGhpcy5pbmRleC0tO1xuXHRcdH1cblx0fVxuXG5cdHBlZWsoKTogVG9rZW4gfCBudWxsIHtcblx0XHRyZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5pbmRleF0gfHwgbnVsbDtcblx0fVxuXG5cdG5leHQoKTogVG9rZW4gfCBudWxsIHtcblx0XHRyZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5pbmRleCsrXSB8fCBudWxsO1xuXHR9XG5cblx0aGFzTmV4dCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aDtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge1Rva2VuaXplcn0gZnJvbSBcIi4vdG9rZW5pemVyXCI7XG5cbmV4cG9ydCBjbGFzcyBTb3VyY2Uge1xuXHRzdGF0aWMgTkVXTElORSA9ICdcXG4nO1xuXG5cdHByaXZhdGUgY29kZTogc3RyaW5nO1xuXHRwdWJsaWMgcmVhZG9ubHkgdXJsOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoY29kZTogc3RyaW5nLCB1cmw6IHN0cmluZyA9ICc8aW5saW5lPicpIHtcblx0XHR0aGlzLnVybCA9IHVybDtcblx0XHR0aGlzLmNvZGUgPSBjb2RlO1xuXHR9XG5cblx0Z2V0IGxlbmd0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmNvZGUubGVuZ3RoO1xuXHR9XG5cblx0Z2V0VG9rZW5pemVyKCk6IFRva2VuaXplciB7XG5cdFx0cmV0dXJuIG5ldyBUb2tlbml6ZXIodGhpcyk7XG5cdH1cblxuXHRzbGljZShzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcik6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuY29kZS5zbGljZShzdGFydCwgZW5kKTtcblx0fVxuXG5cdGNoYXJBdChpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5jb2RlLmNoYXJBdChpbmRleCk7XG5cdH1cblxuXHRzdGFydHNXaXRoKHRleHQ6IHN0cmluZywgcG9zaXRpb24/OiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb2RlLnN0YXJ0c1dpdGgodGV4dCwgcG9zaXRpb24pO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTcGFuIHtcblx0c291cmNlOiBTb3VyY2U7XG5cdHN0YXJ0OiBudW1iZXI7XG5cdGVuZDogbnVtYmVyO1xuXHRsaW5lOiBudW1iZXI7XG5cdGNvbHVtbjogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKHNvdXJjZTogU291cmNlLCBzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcikge1xuXHRcdHRoaXMuc291cmNlID0gc291cmNlO1xuXHRcdHRoaXMuc3RhcnQgPSBzdGFydDtcblx0XHR0aGlzLmVuZCA9IGVuZDtcblxuXHRcdGNvbnN0IGJlZm9yZSA9IHNvdXJjZS5zbGljZSgwLCBzdGFydCk7XG5cdFx0Y29uc3QgbGluZXMgPSBiZWZvcmUuc3BsaXQoU291cmNlLk5FV0xJTkUpO1xuXG5cdFx0dGhpcy5saW5lID0gbGluZXMubGVuZ3RoO1xuXHRcdHRoaXMuY29sdW1uID0gKGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdIHx8ICcnKS5sZW5ndGggKyAxO1xuXHR9XG5cblx0dGV4dCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZS5zbGljZSh0aGlzLnN0YXJ0LCB0aGlzLmVuZCk7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtHUkFNTUFSLCBUb2tlbiwgVFlQRV9FTlVNfSBmcm9tIFwiLi9ncmFtbWFyLnRzXCI7XG5pbXBvcnQge01vZGlmaWVycywgU3VwZXJDbGFzc30gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtTcGFufSBmcm9tIFwiLi9wYXJzZXJfc291cmNlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGFuRnJvbVRva2VucyhzdGFydFRva2VuOiBUb2tlbiwgZW5kVG9rZW46IFRva2VuKTogU3BhbiB7XG5cdHJldHVybiBuZXcgU3BhbihzdGFydFRva2VuLnNvdXJjZSwgc3RhcnRUb2tlbi5zdGFydCwgZW5kVG9rZW4uZW5kKTtcbn1cblxuZXhwb3J0IGNsYXNzIEFTVE5vZGVUeXBlIHtcblx0c3RhdGljIFBST0dSQU1NID0gJ3Byb2dyYW0nO1xuXHRzdGF0aWMgSU5ERVggPSAnaW5kZXgnO1xuXHRzdGF0aWMgSURFTlRJRklFUiA9ICdpZGVudGlmaWVyJztcblx0c3RhdGljIEFOTk9UQVRJT04gPSAnYW5ub3RhdGlvbic7XG5cdHN0YXRpYyBQQVJBTUVURVIgPSAncGFyYW1ldGVyJztcblx0c3RhdGljIElNUE9SVCA9IEdSQU1NQVIuSU1QT1JUO1xuXHRzdGF0aWMgTlVNQkVSID0gVFlQRV9FTlVNLk5VTUJFUjtcblx0c3RhdGljIFNUUklORyA9IFRZUEVfRU5VTS5TVFJJTkc7XG5cdHN0YXRpYyBCT09MRUFOID0gVFlQRV9FTlVNLkJPT0xFQU47XG5cdHN0YXRpYyBOVUxMID0gVFlQRV9FTlVNLk5VTEw7XG5cdHN0YXRpYyBORVcgPSBHUkFNTUFSLk5FVztcblx0c3RhdGljIENMQVNTID0gR1JBTU1BUi5DTEFTUztcblx0c3RhdGljIElOVEVSRkFDRSA9IEdSQU1NQVIuSU5URVJGQUNFO1xuXHRzdGF0aWMgQ09OU1RSVUNUT1IgPSBHUkFNTUFSLkNPTlNUUlVDVE9SO1xuXHRzdGF0aWMgVEhJUyA9IEdSQU1NQVIuVEhJUztcblx0c3RhdGljIFJFVFVSTiA9IEdSQU1NQVIuUkVUVVJOO1xuXHRzdGF0aWMgVkRPTSA9ICd2ZG9tX2RlY2xhcmF0aW9uJztcblx0c3RhdGljIFZET01fVEVYVCA9ICd2ZG9tX3RleHRfZGVjbGFyYXRpb24nO1xuXHRzdGF0aWMgVU5BUlkgPSAndW5hcnlfZXhwcmVzc2lvbic7XG5cdHN0YXRpYyBMQU1CREEgPSAnbGFtYmRhX2V4cHJlc3Npb24nO1xuXHRzdGF0aWMgQVJSQVkgPSAnYXJyYXlfZGVjbGFyYXRpb24nO1xuXHRzdGF0aWMgVFlQRSA9ICd0eXBlX2RlY2xhcmF0aW9uJztcblx0c3RhdGljIEZJRUxEID0gJ2ZpZWxkX2RlY2xhcmF0aW9uJztcblx0c3RhdGljIE1FTUJFUiA9ICdtZW1iZXJfZXhwcmVzc2lvbic7XG5cdHN0YXRpYyBNRVRIT0QgPSAnbWV0aG9kX2RlY2xhcmF0aW9uJztcblx0c3RhdGljIENBTEwgPSAnY2FsbF9leHByZXNzaW9uJztcblx0c3RhdGljIFZBUklBQkxFID0gJ3ZhcmlhYmxlX2RlY2xhcmF0aW9uJztcblx0c3RhdGljIEVYUFJFU1NJT04gPSAnZXhwcmVzc2lvbl9zdGF0ZW1lbnQnO1xuXHRzdGF0aWMgQklOQVJZID0gJ2JpbmFyeV9leHByZXNzaW9uJztcblx0c3RhdGljIEFTU0lHTk1FTlQgPSAnYXNzaWdubWVudF9leHByZXNzaW9uJztcblx0c3RhdGljIElGID0gJ2lmX3N0YXRlbWVudCc7XG5cdHN0YXRpYyBUSEVOID0gJ3RoZW5fc3RhdGVtZW50Jztcblx0c3RhdGljIEVMU0UgPSAnZWxzZV9zdGF0ZW1lbnQnO1xuXHRzdGF0aWMgTUFUQ0ggPSAnbWF0Y2hfc3RhdGVtZW50Jztcblx0c3RhdGljIE1BVENIX0NBU0UgPSAnbWF0Y2hfY2FzZV9zdGF0ZW1lbnQnO1xuXHRzdGF0aWMgRk9SRUFDSCA9ICdmb3JlYWNoX3N0YXRlbWVudCc7XG59XG5cbmV4cG9ydCBjbGFzcyBBU1ROb2RlIHtcblx0aXNFeHByZXNzaW9uOiBib29sZWFuID0gZmFsc2U7XG5cdG5hbWU6IHN0cmluZyA9ICcnO1xuXG5cdHNwYW46IFNwYW4gfCBudWxsID0gbnVsbDtcblx0dHlwZTogc3RyaW5nO1xuXHR2YWx1ZTogYW55IHwgbnVsbCA9IG51bGw7XG5cdGNoaWxkcmVuOiBBU1ROb2RlW107XG5cblx0Y29uc3RydWN0b3IodHlwZTogc3RyaW5nLCBjaGlsZHJlbjogQVNUTm9kZVtdID0gW10pIHtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUQ2FsbE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0Y2FsbGVlOiBBU1ROb2RlO1xuXHRhcmd1bWVudHM6IEFTVE5vZGVbXTtcblxuXHRjb25zdHJ1Y3RvcihjYWxsZWU6IEFTVE5vZGUsIGFyZ3M6IEFTVE5vZGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuQ0FMTCk7XG5cblx0XHR0aGlzLmNhbGxlZSA9IGNhbGxlZTtcblx0XHR0aGlzLmFyZ3VtZW50cyA9IGFyZ3M7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1ROZXdOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGFyZ3VtZW50czogQVNUTm9kZVtdO1xuXHR0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGU7XG5cblx0Y29uc3RydWN0b3IoYXJnczogQVNUTm9kZVtdLCB0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGUpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5ORVcpO1xuXG5cdFx0dGhpcy5hcmd1bWVudHMgPSBhcmdzO1xuXHRcdHRoaXMudHlwZUFubm90YXRpb24gPSB0eXBlQW5ub3RhdGlvbjtcblx0XHR0aGlzLm5hbWUgPSB0eXBlQW5ub3RhdGlvbi5uYW1lO1xuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUQmluYXJ5Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRsZWZ0OiBBU1ROb2RlO1xuXHRyaWdodDogQVNUTm9kZTtcblx0b3BlcmF0b3I6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihsZWZ0OiBBU1ROb2RlLCByaWdodDogQVNUTm9kZSwgb3BlcmF0b3I6IHN0cmluZykge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkJJTkFSWSk7XG5cblx0XHR0aGlzLmxlZnQgPSBsZWZ0O1xuXHRcdHRoaXMucmlnaHQgPSByaWdodDtcblx0XHR0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RBc3NpZ25tZW50Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRsZWZ0OiBBU1ROb2RlO1xuXHRyaWdodDogQVNUTm9kZTtcblxuXHRjb25zdHJ1Y3RvcihsZWZ0OiBBU1ROb2RlLCByaWdodDogQVNUTm9kZSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkFTU0lHTk1FTlQpO1xuXG5cdFx0dGhpcy5sZWZ0ID0gbGVmdDtcblx0XHR0aGlzLnJpZ2h0ID0gcmlnaHQ7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RNZW1iZXJOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdG9iamVjdDogQVNUTm9kZTtcblx0cHJvcGVydHk6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihvYmplY3Q6IEFTVE5vZGUsIHByb3BlcnR5OiBzdHJpbmcpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5NRU1CRVIpO1xuXG5cdFx0dGhpcy5vYmplY3QgPSBvYmplY3Q7XG5cdFx0dGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUVW5hcnlOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdG9wZXJhdG9yOiBzdHJpbmc7XG5cdGFyZ3VtZW50OiBBU1ROb2RlIHwgQVNUVW5hcnlOb2RlO1xuXG5cdGNvbnN0cnVjdG9yKG9wZXJhdG9yOiBzdHJpbmcsIGFyZ3VtZW50OiBBU1ROb2RlIHwgQVNUVW5hcnlOb2RlKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuVU5BUlkpO1xuXG5cdFx0dGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuXHRcdHRoaXMuYXJndW1lbnQgPSBhcmd1bWVudDtcblx0XHR0aGlzLmlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEluZGV4Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRvYmplY3Q6IEFTVE5vZGU7XG5cdGluZGV4OiBBU1ROb2RlO1xuXG5cdGNvbnN0cnVjdG9yKG9iamVjdDogQVNUTm9kZSwgaW5kZXg6IEFTVE5vZGUpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5JTkRFWCk7XG5cblx0XHR0aGlzLm9iamVjdCA9IG9iamVjdDtcblx0XHR0aGlzLmluZGV4ID0gaW5kZXg7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RBcnJheU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0ZWxlbWVudHM6IEFTVE5vZGVbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkFSUkFZKTtcblxuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUTGFtYmRhTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW107XG5cdHJldHVyblR5cGU6IEFTVFR5cGVOb2RlO1xuXG5cdGNvbnN0cnVjdG9yKHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSwgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGUsIGNoaWxkcmVuOiBBU1ROb2RlW10pIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5MQU1CREEsIGNoaWxkcmVuKTtcblxuXHRcdHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG5cdFx0dGhpcy5yZXR1cm5UeXBlID0gcmV0dXJuVHlwZTtcblxuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNURmllbGROb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdG1vZGlmaWVyczogTW9kaWZpZXJzO1xuXHRmaWVsZFR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbDtcblx0aW5pdDogQVNUTm9kZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbW9kaWZpZXJzOiBNb2RpZmllcnMsIGZpZWxkVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsLCBpbml0OiBBU1ROb2RlIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5GSUVMRCk7XG5cblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuXHRcdHRoaXMuZmllbGRUeXBlID0gZmllbGRUeXBlO1xuXHRcdHRoaXMuaW5pdCA9IGluaXQ7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFZhcmlhYmxlTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHR0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGUgfCBudWxsID0gbnVsbDtcblx0aW5pdDogQVNUTm9kZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZUFubm90YXRpb246IEFTVFR5cGVOb2RlIHwgbnVsbCA9IG51bGwsIGluaXQ6IEFTVE5vZGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLlZBUklBQkxFKTtcblxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy50eXBlQW5ub3RhdGlvbiA9IHR5cGVBbm5vdGF0aW9uO1xuXHRcdHRoaXMuaW5pdCA9IGluaXQ7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGV4cHI6IEFTVE5vZGU7XG5cblx0Y29uc3RydWN0b3IoZXhwcjogQVNUTm9kZSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkVYUFJFU1NJT04pO1xuXG5cdFx0dGhpcy5leHByID0gZXhwcjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUUmV0dXJuTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRhcmd1bWVudDogQVNUTm9kZSB8IEFTVEV4cHJlc3Npb25Ob2RlIHwgbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihhcmd1bWVudDogQVNUTm9kZSB8IEFTVEV4cHJlc3Npb25Ob2RlIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5SRVRVUk4pO1xuXG5cdFx0dGhpcy5hcmd1bWVudCA9IGFyZ3VtZW50O1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RDbGFzc05vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0YW5ub3RhdGlvbnM6IEFTVEFubm90YXRpb25Ob2RlW107XG5cdG1vZGlmaWVyczogTW9kaWZpZXJzO1xuXHR0eXBlUGFyYW1ldGVyczogc3RyaW5nW107XG5cdHN1cGVyQ2xhc3M6IFN1cGVyQ2xhc3MgfCBudWxsO1xuXHRpbXBsZW1lbnRzSW50ZXJmYWNlczogQVNUVHlwZU5vZGVbXTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0YW5ub3RhdGlvbnM6IEFTVEFubm90YXRpb25Ob2RlW10sXG5cdFx0bW9kaWZpZXJzOiBNb2RpZmllcnMsXG5cdFx0dHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdLFxuXHRcdGltcGxlbWVudHNJbnRlcmZhY2VzOiBBU1RUeXBlTm9kZVtdLFxuXHRcdHN1cGVyQ2xhc3M6IFN1cGVyQ2xhc3MgfCBudWxsID0gbnVsbCxcblx0XHRjaGlsZHJlbjogQVNUTm9kZVtdID0gW11cblx0KSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuQ0xBU1MsIGNoaWxkcmVuKTtcblxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5hbm5vdGF0aW9ucyA9IGFubm90YXRpb25zO1xuXHRcdHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuXHRcdHRoaXMudHlwZVBhcmFtZXRlcnMgPSB0eXBlUGFyYW1ldGVycztcblx0XHR0aGlzLnN1cGVyQ2xhc3MgPSBzdXBlckNsYXNzO1xuXHRcdHRoaXMuaW1wbGVtZW50c0ludGVyZmFjZXMgPSBpbXBsZW1lbnRzSW50ZXJmYWNlcztcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUSW50ZXJmYWNlTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRhbm5vdGF0aW9uczogQVNUQW5ub3RhdGlvbk5vZGVbXTtcblx0bW9kaWZpZXJzOiBNb2RpZmllcnM7XG5cdHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXTtcblx0ZXh0ZW5kc0ludGVyZmFjZXM6IHN0cmluZ1tdO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdG5hbWU6IHN0cmluZyxcblx0XHRhbm5vdGF0aW9uczogQVNUQW5ub3RhdGlvbk5vZGVbXSxcblx0XHRtb2RpZmllcnM6IE1vZGlmaWVycyxcblx0XHR0eXBlUGFyYW1ldGVyczogc3RyaW5nW10sXG5cdFx0ZXh0ZW5kc0ludGVyZmFjZXM6IHN0cmluZ1tdLFxuXHRcdGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXVxuXHQpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5JTlRFUkZBQ0UsIGNoaWxkcmVuKTtcblxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5hbm5vdGF0aW9ucyA9IGFubm90YXRpb25zO1xuXHRcdHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuXHRcdHRoaXMudHlwZVBhcmFtZXRlcnMgPSB0eXBlUGFyYW1ldGVycztcblx0XHR0aGlzLmV4dGVuZHNJbnRlcmZhY2VzID0gZXh0ZW5kc0ludGVyZmFjZXM7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEFubm90YXRpb25Ob2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdHByb3BlcnRpZXM6IE1hcDxzdHJpbmcsIEFTVE5vZGU+ID0gbmV3IE1hcCgpO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkFOTk9UQVRJT04pO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFBhcmFtZXRlck5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0dHlwZUFubm90YXRpb246IEFTVFR5cGVOb2RlIHwgbnVsbDtcblx0ZGVmYXVsdFZhbHVlOiBBU1ROb2RlIHwgbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGVBbm5vdGF0aW9uOiBBU1RUeXBlTm9kZSB8IG51bGwsIGRlZmF1bHRWYWx1ZTogQVNUTm9kZSB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuUEFSQU1FVEVSKTtcblx0XHR0aGlzLnR5cGVBbm5vdGF0aW9uID0gdHlwZUFubm90YXRpb247XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmRlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUTWV0aG9kTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRhbm5vdGF0aW9uczogQVNUQW5ub3RhdGlvbk5vZGVbXTtcblx0bW9kaWZpZXJzOiBNb2RpZmllcnM7XG5cdHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXTtcblx0cGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdO1xuXHRyZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGw7XG5cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0dHlwZTogc3RyaW5nLFxuXHRcdGFubm90YXRpb25zOiBBU1RBbm5vdGF0aW9uTm9kZVtdLFxuXHRcdG1vZGlmaWVyczogTW9kaWZpZXJzLFxuXHRcdHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXSxcblx0XHRwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sXG5cdFx0cmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsID0gbnVsbCxcblx0XHRjaGlsZHJlbjogQVNUTm9kZVtdID0gW10sXG5cdCkge1xuXHRcdHN1cGVyKHR5cGUsIGNoaWxkcmVuKTtcblxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5hbm5vdGF0aW9ucyA9IGFubm90YXRpb25zO1xuXHRcdHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuXHRcdHRoaXMudHlwZVBhcmFtZXRlcnMgPSB0eXBlUGFyYW1ldGVycztcblx0XHR0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuXHRcdHRoaXMucmV0dXJuVHlwZSA9IHJldHVyblR5cGU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEltcG9ydE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0bmFtZXM6IHN0cmluZ1tdO1xuXHRmcm9tOiBzdHJpbmcgfCBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWVzOiBzdHJpbmdbXSwgZnJvbTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5JTVBPUlQpO1xuXG5cdFx0dGhpcy5uYW1lcyA9IG5hbWVzO1xuXHRcdHRoaXMuZnJvbSA9IGZyb207XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFRoZW5Ob2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGNvbnN0cnVjdG9yKGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLlRIRU4sIGNoaWxkcmVuKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUSWZOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGNvbmRpdGlvbjogQVNUTm9kZTtcblx0dGhlbjogQVNUVGhlbk5vZGU7XG5cdGVsc2U6IEFTVElmTm9kZSB8IEFTVEVsc2VOb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IoY29uZGl0aW9uOiBBU1ROb2RlLCB0aGVuOiBBU1RUaGVuTm9kZSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLklGKTtcblxuXHRcdHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuXHRcdHRoaXMudGhlbiA9IHRoZW47XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEVsc2VOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGNvbnN0cnVjdG9yKGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkVMU0UsIGNoaWxkcmVuKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUTWF0Y2hOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGV4cHJlc3Npb246IEFTVE5vZGU7XG5cdGNhc2VzOiBBU1RNYXRjaENhc2VOb2RlW107XG5cdGRlZmF1bHRDYXNlOiBBU1RNYXRjaENhc2VOb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IoZXhwcmVzc2lvbjogQVNUTm9kZSwgY2FzZXM6IEFTVE1hdGNoQ2FzZU5vZGVbXSwgZGVmYXVsdENhc2U6IEFTVE1hdGNoQ2FzZU5vZGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLk1BVENIKTtcblxuXHRcdHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG5cdFx0dGhpcy5jYXNlcyA9IGNhc2VzO1xuXHRcdHRoaXMuZGVmYXVsdENhc2UgPSBkZWZhdWx0Q2FzZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUTWF0Y2hDYXNlTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHR0ZXN0OiBBU1ROb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IoY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuTUFUQ0hfQ0FTRSwgY2hpbGRyZW4pO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RGb3JlYWNoTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRpdGVyYXRvcjogc3RyaW5nO1xuXHRpdGVyYWJsZTogQVNUTm9kZTtcblx0Ym9keTogQVNUTm9kZVtdO1xuXG5cdGNvbnN0cnVjdG9yKGl0ZXJhdG9yOiBzdHJpbmcsIGl0ZXJhYmxlOiBBU1ROb2RlLCBib2R5OiBBU1ROb2RlW10gPSBbXSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkZPUkVBQ0gpO1xuXG5cdFx0dGhpcy5pdGVyYXRvciA9IGl0ZXJhdG9yO1xuXHRcdHRoaXMuaXRlcmFibGUgPSBpdGVyYWJsZTtcblx0XHR0aGlzLmJvZHkgPSBib2R5O1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RUeXBlTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRzdGF0aWMgS0lORF9TSU1QTEUgPSAnc2ltcGxlJztcblx0c3RhdGljIEtJTkRfR0VORVJJQyA9ICdnZW5lcmljJztcblx0c3RhdGljIEtJTkRfTEFNQkRBID0gJ2xhbWJkYSc7XG5cblx0a2luZDogc3RyaW5nO1xuXHR0eXBlQXJndW1lbnRzOiBBU1RUeXBlTm9kZVtdID0gW107XG5cdHBhcmFtZXRlclR5cGVzOiBBU1RUeXBlTm9kZVtdID0gW107XG5cdHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbCA9IG51bGw7XG5cdG51bGxhYmxlOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKGtpbmQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBudWxsYWJsZTogYm9vbGVhbiA9IGZhbHNlKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuVFlQRSk7XG5cblx0XHR0aGlzLmtpbmQgPSBraW5kO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5udWxsYWJsZSA9IG51bGxhYmxlO1xuXHR9XG59XG5cbmludGVyZmFjZSBWRG9tQXR0cmlidXRlcyB7XG5cdFtpbmRleDogc3RyaW5nXTogQVNUTm9kZTtcbn1cblxuY2xhc3MgQVNUVkRvbU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0dGFnOiBzdHJpbmc7XG5cdGF0dHJpYnV0ZXM6IFZEb21BdHRyaWJ1dGVzID0ge307XG5cdHNlbGZDbG9zaW5nOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IodGFnOiBzdHJpbmcsIGF0dHJpYnV0ZXM6IFZEb21BdHRyaWJ1dGVzLCBjaGlsZHJlbjogQVNUTm9kZVtdID0gW10pIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5WRE9NLCBjaGlsZHJlbik7XG5cdFx0dGhpcy50YWcgPSB0YWc7XG5cdFx0dGhpcy5hdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUVkRvbVRleHROb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5WRE9NX1RFWFQpO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0dSQU1NQVJ9IGZyb20gXCIuL2dyYW1tYXIudHNcIjtcbmltcG9ydCB7XG5cdEFTVENsYXNzTm9kZSxcblx0QVNURmllbGROb2RlLFxuXHRBU1RJbnRlcmZhY2VOb2RlLFxuXHRBU1RNZXRob2ROb2RlLFxuXHRBU1ROb2RlLFxuXHRBU1RQYXJhbWV0ZXJOb2RlLFxuXHRBU1RUeXBlTm9kZVxufSBmcm9tIFwiLi9hc3RcIjtcbmltcG9ydCB7dGhyb3dSdW50aW1lRXJyb3J9IGZyb20gXCIuL2Vycm9ycy50c1wiO1xuXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQge1xuXHRwYXJlbnQ6IEVudmlyb25tZW50IHwgbnVsbDtcblx0dmFsdWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH07XG5cblx0Y29uc3RydWN0b3IocGFyZW50OiBFbnZpcm9ubWVudCB8IG51bGwgPSBudWxsKSB7XG5cdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cdFx0dGhpcy52YWx1ZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHR9XG5cblx0ZGVmaW5lKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMudmFsdWVzW25hbWVdID0gdmFsdWU7XG5cdH1cblxuXHRnZXQobmFtZTogc3RyaW5nKTogYW55IHtcblx0XHRpZiAobmFtZSBpbiB0aGlzLnZhbHVlcykge1xuXHRcdFx0cmV0dXJuIHRoaXMudmFsdWVzW25hbWVdO1xuXHRcdH1cblx0XHRpZiAodGhpcy5wYXJlbnQpIHtcblx0XHRcdHJldHVybiB0aGlzLnBhcmVudC5nZXQobmFtZSk7XG5cdFx0fVxuXHRcdHRocm93UnVudGltZUVycm9yKGBVbmRlZmluZWQgdmFyaWFibGUgJHtuYW1lfWApO1xuXHR9XG5cblx0c2V0KG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmIChuYW1lIGluIHRoaXMudmFsdWVzKSB7XG5cdFx0XHR0aGlzLnZhbHVlc1tuYW1lXSA9IHZhbHVlO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAodGhpcy5wYXJlbnQpIHtcblx0XHRcdHRoaXMucGFyZW50LnNldChuYW1lLCB2YWx1ZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRocm93UnVudGltZUVycm9yKGBVbmRlZmluZWQgdmFyaWFibGUgJHtuYW1lfWApO1xuXHR9XG5cblx0aGFzKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlc1tuYW1lXSB8fCAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuaGFzKG5hbWUpKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgSW5zdGFuY2Uge1xuXHRfX2NsYXNzRGVmOiBDbGFzc0RlZmluaXRpb247XG5cdF9faW5zdGFuY2VGaWVsZHM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfTtcblx0X19zdGF0aWNGaWVsZHM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfTtcblx0X19uYXRpdmVJbnN0YW5jZTogYW55IHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IoY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbikge1xuXHRcdHRoaXMuX19jbGFzc0RlZiA9IGNsYXNzRGVmO1xuXHRcdHRoaXMuX19pbnN0YW5jZUZpZWxkcyA9IHt9O1xuXHRcdHRoaXMuX19zdGF0aWNGaWVsZHMgPSB7fTtcblx0XHR0aGlzLl9fbmF0aXZlSW5zdGFuY2UgPSBudWxsO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBNb2RpZmllcnMge1xuXHRvcGVuOiBib29sZWFuID0gZmFsc2U7XG5cdHB1YmxpYzogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlOiBib29sZWFuID0gZmFsc2U7XG5cdHN0YXRpYzogYm9vbGVhbiA9IGZhbHNlO1xuXHRyZWFkb25seTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3t9fSBhdHRyaWJ1dGVzXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihhdHRyaWJ1dGVzOiB7IFtpbmRleDogc3RyaW5nXTogYm9vbGVhbiB9ID0ge30pIHtcblx0XHRmb3IgKGxldCBhdHRyaWJ1dGUgb2YgT2JqZWN0LmtleXMoYXR0cmlidXRlcykpIHtcblx0XHRcdGlmICh0aGlzLmhhc093blByb3BlcnR5KGF0dHJpYnV0ZSkpIHtcblx0XHRcdFx0Y29uc3QgbW9kaWZpZXJzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB0aGlzO1xuXHRcdFx0XHRtb2RpZmllcnNbYXR0cmlidXRlXSA9IGF0dHJpYnV0ZXNbYXR0cmlidXRlXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1cGVyQ2xhc3Mge1xuXHR0eXBlOiBzdHJpbmc7XG5cdG5hbWU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcih0eXBlOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgUmV0dXJuVmFsdWUge1xuXHR2YWx1ZTogYW55O1xuXG5cdGNvbnN0cnVjdG9yKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIENsYXNzRmllbGREZWZpbml0aW9uIHtcblx0bmFtZTogc3RyaW5nO1xuXHR0eXBlOiBzdHJpbmcgfCBudWxsO1xuXHRtb2RpZmllcnM6IE1vZGlmaWVycztcblx0aW5pdGlhbGl6ZXI6IEFTVE5vZGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGU6IHN0cmluZyB8IG51bGwsIG1vZGlmaWVyczogTW9kaWZpZXJzLCBpbml0aWFsaXplcjogQVNUTm9kZSB8IG51bGwgPSBudWxsKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuXHRcdHRoaXMuaW5pdGlhbGl6ZXIgPSBpbml0aWFsaXplcjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xhc3NNZXRob2REZWZpbml0aW9uIHtcblx0bmFtZTogc3RyaW5nO1xuXHRwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW107XG5cdHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbDtcblx0bW9kaWZpZXJzOiBNb2RpZmllcnM7XG5cdGNoaWxkcmVuOiBBU1ROb2RlW107XG5cdGlzQ29uc3RydWN0b3I6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sIHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbCwgbW9kaWZpZXJzOiBNb2RpZmllcnMsIGNoaWxkcmVuOiBBU1ROb2RlW10pIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG5cdFx0dGhpcy5yZXR1cm5UeXBlID0gcmV0dXJuVHlwZTtcblx0XHR0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcblx0XHR0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG5cdFx0dGhpcy5pc0NvbnN0cnVjdG9yID0gbmFtZSA9PT0gR1JBTU1BUi5DT05TVFJVQ1RPUjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xhc3NEZWZpbml0aW9uIHtcblx0bm9kZTogQVNUQ2xhc3NOb2RlO1xuXHRuYW1lOiBzdHJpbmc7XG5cdHN1cGVyQ2xhc3M6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRpbnN0YW5jZUZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXTtcblx0aW5zdGFuY2VNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH07XG5cdHN0YXRpY0ZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXTtcblx0c3RhdGljTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9O1xuXHRjb25zdHJ1Y3Rvck1ldGhvZDogQ2xhc3NNZXRob2REZWZpbml0aW9uIHwgbnVsbCA9IG51bGw7XG5cdG5hdGl2ZUluc3RhbmNlOiBhbnkgPSBudWxsO1xuXHRpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRjbGFzc05vZGU6IEFTVENsYXNzTm9kZSxcblx0XHRzdXBlckNsYXNzOiBzdHJpbmcgfCBudWxsLFxuXHRcdG5hbWU6IHN0cmluZyxcblx0XHRpbnN0YW5jZUZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXSxcblx0XHRpbnN0YW5jZU1ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfSxcblx0XHRzdGF0aWNGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW10sXG5cdFx0c3RhdGljTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9LFxuXHRcdGNvbnN0cnVjdG9yTWV0aG9kOiBDbGFzc01ldGhvZERlZmluaXRpb24gfCBudWxsID0gbnVsbFxuXHQpIHtcblx0XHR0aGlzLm5vZGUgPSBjbGFzc05vZGU7XG5cdFx0dGhpcy5zdXBlckNsYXNzID0gc3VwZXJDbGFzcztcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuaW5zdGFuY2VGaWVsZHMgPSBpbnN0YW5jZUZpZWxkcztcblx0XHR0aGlzLmluc3RhbmNlTWV0aG9kcyA9IGluc3RhbmNlTWV0aG9kcztcblx0XHR0aGlzLnN0YXRpY0ZpZWxkcyA9IHN0YXRpY0ZpZWxkcztcblx0XHR0aGlzLnN0YXRpY01ldGhvZHMgPSBzdGF0aWNNZXRob2RzO1xuXHRcdHRoaXMuY29uc3RydWN0b3JNZXRob2QgPSBjb25zdHJ1Y3Rvck1ldGhvZDtcblx0XHR0aGlzLmlzT3BlbiA9IGNsYXNzTm9kZS5tb2RpZmllcnMub3Blbjtcblx0fVxuXG5cdGZpbmRNZXRob2QobmFtZTogc3RyaW5nKTogQVNUTWV0aG9kTm9kZSB7XG5cdFx0Y29uc3Qgbm9kZSA9IHRoaXMubm9kZVxuXHRcdCAgICAgICAgICAgICAgICAgLmNoaWxkcmVuXG5cdFx0ICAgICAgICAgICAgICAgICAuZmluZChub2RlID0+IG5vZGUubmFtZSA9PT0gbmFtZSk7XG5cblx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVE1ldGhvZE5vZGUpIHtcblx0XHRcdHJldHVybiBub2RlO1xuXHRcdH1cblxuXHRcdHRocm93UnVudGltZUVycm9yKGBNZXRob2QgJHtuYW1lfSBub3QgZm91bmQgaW4gY2xhc3MgJHt0aGlzLm5hbWV9LmApO1xuXHR9XG5cblx0c3RhdGljIGNvbnN0cnVjdEZyb21BU1Qobm9kZTogQVNUQ2xhc3NOb2RlKTogQ2xhc3NEZWZpbml0aW9uIHtcblx0XHRjb25zdCBpbnN0YW5jZUZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXSA9IFtdO1xuXHRcdGNvbnN0IGluc3RhbmNlTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9ID0ge307XG5cdFx0Y29uc3Qgc3RhdGljRmllbGRzOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbltdID0gW107XG5cdFx0Y29uc3Qgc3RhdGljTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9ID0ge307XG5cdFx0bGV0IGNvbnN0cnVjdG9yTWV0aG9kOiBDbGFzc01ldGhvZERlZmluaXRpb24gfCBudWxsID0gbnVsbDtcblxuXHRcdGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuXHRcdFx0aWYgKGNoaWxkIGluc3RhbmNlb2YgQVNURmllbGROb2RlKSB7XG5cdFx0XHRcdGNvbnN0IGZpZWxkID0gbmV3IENsYXNzRmllbGREZWZpbml0aW9uKFxuXHRcdFx0XHRcdGNoaWxkLm5hbWUsXG5cdFx0XHRcdFx0Y2hpbGQuZmllbGRUeXBlXG5cdFx0XHRcdFx0XHQ/IGNoaWxkLmZpZWxkVHlwZS5uYW1lXG5cdFx0XHRcdFx0XHQ6IG51bGwsXG5cdFx0XHRcdFx0Y2hpbGQubW9kaWZpZXJzLFxuXHRcdFx0XHRcdGNoaWxkLmluaXRcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRpZiAoZmllbGQubW9kaWZpZXJzLnN0YXRpYykge1xuXHRcdFx0XHRcdHN0YXRpY0ZpZWxkcy5wdXNoKGZpZWxkKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpbnN0YW5jZUZpZWxkcy5wdXNoKGZpZWxkKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChjaGlsZCBpbnN0YW5jZW9mIEFTVE1ldGhvZE5vZGUpIHtcblx0XHRcdFx0Y29uc3QgbWV0aG9kID0gbmV3IENsYXNzTWV0aG9kRGVmaW5pdGlvbihcblx0XHRcdFx0XHRjaGlsZC5uYW1lLFxuXHRcdFx0XHRcdGNoaWxkLnBhcmFtZXRlcnMsXG5cdFx0XHRcdFx0Y2hpbGQucmV0dXJuVHlwZSxcblx0XHRcdFx0XHRjaGlsZC5tb2RpZmllcnMsXG5cdFx0XHRcdFx0Y2hpbGQuY2hpbGRyZW5cblx0XHRcdFx0KTtcblx0XHRcdFx0aWYgKG1ldGhvZC5pc0NvbnN0cnVjdG9yKSB7XG5cdFx0XHRcdFx0Y29uc3RydWN0b3JNZXRob2QgPSBtZXRob2Q7XG5cdFx0XHRcdH0gZWxzZSBpZiAobWV0aG9kLm1vZGlmaWVycy5zdGF0aWMpIHtcblx0XHRcdFx0XHRzdGF0aWNNZXRob2RzW21ldGhvZC5uYW1lXSA9IG1ldGhvZDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpbnN0YW5jZU1ldGhvZHNbbWV0aG9kLm5hbWVdID0gbWV0aG9kO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5oYW5kbGVkIG5vZGUgJHtjaGlsZC50eXBlfS5gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IENsYXNzRGVmaW5pdGlvbihcblx0XHRcdG5vZGUsXG5cdFx0XHRub2RlLnN1cGVyQ2xhc3M/Lm5hbWUgfHwgbnVsbCxcblx0XHRcdG5vZGUubmFtZSxcblx0XHRcdGluc3RhbmNlRmllbGRzLFxuXHRcdFx0aW5zdGFuY2VNZXRob2RzLFxuXHRcdFx0c3RhdGljRmllbGRzLFxuXHRcdFx0c3RhdGljTWV0aG9kcyxcblx0XHRcdGNvbnN0cnVjdG9yTWV0aG9kXG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgSW50ZXJmYWNlRGVmaW5pdGlvbiB7XG5cdG5vZGU6IEFTVEludGVyZmFjZU5vZGU7XG5cdG5hbWU6IHN0cmluZztcblx0c3RhdGljRmllbGRzOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbltdO1xuXHRpbnN0YW5jZU1ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRpbnRlcmZhY2VOb2RlOiBBU1RJbnRlcmZhY2VOb2RlLFxuXHRcdG5hbWU6IHN0cmluZyxcblx0XHRzdGF0aWNGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW10sXG5cdFx0aW5zdGFuY2VNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH0sXG5cdCkge1xuXHRcdHRoaXMubm9kZSA9IGludGVyZmFjZU5vZGU7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnN0YXRpY0ZpZWxkcyA9IHN0YXRpY0ZpZWxkcztcblx0XHR0aGlzLmluc3RhbmNlTWV0aG9kcyA9IGluc3RhbmNlTWV0aG9kcztcblx0fVxuXG5cdHN0YXRpYyBjb25zdHJ1Y3RGcm9tQVNUKG5vZGU6IEFTVEludGVyZmFjZU5vZGUpOiBJbnRlcmZhY2VEZWZpbml0aW9uIHtcblx0XHRjb25zdCBzdGF0aWNGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW10gPSBbXTtcblx0XHRjb25zdCBpbnN0YW5jZU1ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfSA9IHt9O1xuXG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAoY2hpbGQgaW5zdGFuY2VvZiBBU1RGaWVsZE5vZGUpIHtcblx0XHRcdFx0Y29uc3QgZmllbGQgPSBuZXcgQ2xhc3NGaWVsZERlZmluaXRpb24oXG5cdFx0XHRcdFx0Y2hpbGQubmFtZSxcblx0XHRcdFx0XHRjaGlsZC5maWVsZFR5cGVcblx0XHRcdFx0XHRcdD8gY2hpbGQuZmllbGRUeXBlLm5hbWVcblx0XHRcdFx0XHRcdDogbnVsbCxcblx0XHRcdFx0XHRjaGlsZC5tb2RpZmllcnMsXG5cdFx0XHRcdFx0Y2hpbGQuaW5pdCA/PyBudWxsXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0c3RhdGljRmllbGRzLnB1c2goZmllbGQpO1xuXHRcdFx0fSBlbHNlIGlmIChjaGlsZCBpbnN0YW5jZW9mIEFTVE1ldGhvZE5vZGUpIHtcblx0XHRcdFx0Y29uc3QgbWV0aG9kID0gbmV3IENsYXNzTWV0aG9kRGVmaW5pdGlvbihcblx0XHRcdFx0XHRjaGlsZC5uYW1lLFxuXHRcdFx0XHRcdGNoaWxkLnBhcmFtZXRlcnMsXG5cdFx0XHRcdFx0Y2hpbGQucmV0dXJuVHlwZSxcblx0XHRcdFx0XHRjaGlsZC5tb2RpZmllcnMsXG5cdFx0XHRcdFx0Y2hpbGQuY2hpbGRyZW5cblx0XHRcdFx0KTtcblxuXHRcdFx0XHRpbnN0YW5jZU1ldGhvZHNbbWV0aG9kLm5hbWVdID0gbWV0aG9kO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVuaGFuZGxlZCBub2RlICR7Y2hpbGQudHlwZX0uYCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBJbnRlcmZhY2VEZWZpbml0aW9uKFxuXHRcdFx0bm9kZSxcblx0XHRcdG5vZGUubmFtZSxcblx0XHRcdHN0YXRpY0ZpZWxkcyxcblx0XHRcdGluc3RhbmNlTWV0aG9kc1xuXHRcdCk7XG5cdH1cbn1cblxuIiwKICAgICJpbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4vcGFyc2VyXCI7XG5pbXBvcnQge0dSQU1NQVIsIFRva2VuLCBUb2tlblR5cGUsIFRZUEVfRU5VTX0gZnJvbSBcIi4vZ3JhbW1hci50c1wiO1xuaW1wb3J0IHtNb2RpZmllcnMsIFN1cGVyQ2xhc3N9IGZyb20gXCIuL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7XG5cdEFTVEFubm90YXRpb25Ob2RlLFxuXHRBU1RBcnJheU5vZGUsXG5cdEFTVEFzc2lnbm1lbnROb2RlLFxuXHRBU1RCaW5hcnlOb2RlLFxuXHRBU1RDYWxsTm9kZSxcblx0QVNUQ2xhc3NOb2RlLFxuXHRBU1RFbHNlTm9kZSxcblx0QVNURXhwcmVzc2lvbk5vZGUsXG5cdEFTVEZpZWxkTm9kZSxcblx0QVNURm9yZWFjaE5vZGUsXG5cdEFTVElmTm9kZSxcblx0QVNUSW1wb3J0Tm9kZSxcblx0QVNUSW5kZXhOb2RlLFxuXHRBU1RJbnRlcmZhY2VOb2RlLFxuXHRBU1RMYW1iZGFOb2RlLFxuXHRBU1RNYXRjaENhc2VOb2RlLFxuXHRBU1RNYXRjaE5vZGUsXG5cdEFTVE1lbWJlck5vZGUsXG5cdEFTVE1ldGhvZE5vZGUsXG5cdEFTVE5ld05vZGUsXG5cdEFTVE5vZGUsXG5cdEFTVE5vZGVUeXBlLFxuXHRBU1RQYXJhbWV0ZXJOb2RlLFxuXHRBU1RSZXR1cm5Ob2RlLFxuXHRBU1RUaGVuTm9kZSxcblx0QVNUVHlwZU5vZGUsXG5cdEFTVFVuYXJ5Tm9kZSxcblx0QVNUVmFyaWFibGVOb2RlLFxuXHRzcGFuRnJvbVRva2Vuc1xufSBmcm9tIFwiLi9hc3RcIjtcbmltcG9ydCB7dGhyb3dQYXJzZXJFcnJvcn0gZnJvbSBcIi4vZXJyb3JzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNaXhlZFR5cGUoKTogQVNUVHlwZU5vZGUge1xuXHRyZXR1cm4gbmV3IEFTVFR5cGVOb2RlKEFTVFR5cGVOb2RlLktJTkRfU0lNUExFLCBUWVBFX0VOVU0uTUlYRUQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUeXBlKHBhcnNlcjogUGFyc2VyKTogQVNUVHlwZU5vZGUge1xuXHRsZXQgdHlwZTtcblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKSB7XG5cdFx0dHlwZSA9IHBhcnNlTGFtYmRhVHlwZShwYXJzZXIpO1xuXHR9IGVsc2Uge1xuXHRcdHR5cGUgPSBwYXJzZVNpbXBsZU9yR2VuZXJpY1R5cGUocGFyc2VyKTtcblx0fVxuXG5cdGlmIChwYXJzZXIuY29uc3VtZUlmT3BlcmF0b3IoR1JBTU1BUi5RVUVTVElPTl9NQVJLKSkge1xuXHRcdHR5cGUubnVsbGFibGUgPSB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVR5cGVQYXJhbWV0ZXJzKHBhcnNlcjogUGFyc2VyKTogc3RyaW5nW10ge1xuXHRjb25zdCBwYXJhbWV0ZXJzID0gW107XG5cblx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuTEVTU19USEFOKTtcblxuXHRkbyB7XG5cdFx0Y29uc3QgbmFtZSA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCkudmFsdWU7XG5cdFx0cGFyYW1ldGVycy5wdXNoKG5hbWUpO1xuXG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQ09NTUEpIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRwYXJzZXIubmV4dCgpO1xuXHR9IHdoaWxlICh0cnVlKTtcblxuXHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5HUkVBVEVSX1RIQU4pO1xuXG5cdHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTaW1wbGVPckdlbmVyaWNUeXBlKHBhcnNlcjogUGFyc2VyKTogQVNUVHlwZU5vZGUge1xuXHRjb25zdCBuYW1lVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXHRjb25zdCBub2RlID0gbmV3IEFTVFR5cGVOb2RlKEFTVFR5cGVOb2RlLktJTkRfU0lNUExFLCBuYW1lVG9rZW4udmFsdWUpO1xuXG5cdGlmIChwYXJzZXIuY29uc3VtZUlmT3BlcmF0b3IoR1JBTU1BUi5MRVNTX1RIQU4pKSB7XG5cblx0XHRub2RlLmtpbmQgPSBBU1RUeXBlTm9kZS5LSU5EX0dFTkVSSUM7XG5cblx0XHRkbyB7XG5cdFx0XHRub2RlLnR5cGVBcmd1bWVudHMucHVzaChwYXJzZVR5cGUocGFyc2VyKSk7XG5cdFx0fSB3aGlsZSAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKTtcblxuXHRcdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkdSRUFURVJfVEhBTik7XG5cdH1cblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTGFtYmRhVHlwZShwYXJzZXI6IFBhcnNlcik6IEFTVFR5cGVOb2RlIHtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RUeXBlTm9kZShBU1RUeXBlTm9kZS5LSU5EX0xBTUJEQSwgJ2xhbWJkYScpO1xuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pO1xuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKSB7XG5cdFx0ZG8ge1xuXHRcdFx0bm9kZS5wYXJhbWV0ZXJUeXBlcy5wdXNoKHBhcnNlVHlwZShwYXJzZXIpKTtcblx0XHR9IHdoaWxlIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5BUlJPVyk7XG5cblx0bm9kZS5yZXR1cm5UeXBlID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVByb2dyYW0ocGFyc2VyOiBQYXJzZXIpOiBBU1ROb2RlIHtcblx0Y29uc3QgY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdO1xuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS50eXBlICE9PSBUb2tlblR5cGUuRU9GKSB7XG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLkNPTU1FTlQpIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IG5vZGU6IEFTVE5vZGUgfCBudWxsID0gcGFyc2VTdGF0ZW1lbnQocGFyc2VyKTtcblx0XHRcdGlmIChub2RlKSB7XG5cdFx0XHRcdGNoaWxkcmVuLnB1c2gobm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5QUk9HUkFNTSwgY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTdGF0ZW1lbnQocGFyc2VyOiBQYXJzZXIpOiBBU1ROb2RlIHwgbnVsbCB7XG5cdGlmIChwYXJzZXIuY29uc3VtZUlmQ29tbWVudCgpKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRzd2l0Y2ggKHBhcnNlci5wZWVrKCkudmFsdWUpIHtcblx0XHRjYXNlIEdSQU1NQVIuSU1QT1JUOiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VJbXBvcnQocGFyc2VyKTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLk9QRU46XG5cdFx0Y2FzZSBHUkFNTUFSLkNMQVNTOiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VDbGFzc0RlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5JTlRFUkZBQ0U6IHtcblx0XHRcdHJldHVybiBwYXJzZUludGVyZmFjZURlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5SRVRVUk46IHtcblx0XHRcdHJldHVybiBwYXJzZVJldHVyblN0YXRlbWVudChwYXJzZXIpO1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTEVUOiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VWYXJpYWJsZURlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5JRjoge1xuXHRcdFx0cmV0dXJuIHBhcnNlSWZEZWNsYXJhdGlvbihwYXJzZXIpO1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTUFUQ0g6IHtcblx0XHRcdHJldHVybiBwYXJzZU1hdGNoRGVjbGFyYXRpb24ocGFyc2VyKTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkZPUkVBQ0g6IHtcblx0XHRcdHJldHVybiBwYXJzZUZvcmVhY2hEZWNsYXJhdGlvbihwYXJzZXIpO1xuXHRcdH1cblx0XHRkZWZhdWx0OiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VFeHByZXNzaW9uU3RhdGVtZW50KHBhcnNlcik7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJldHVyblN0YXRlbWVudChwYXJzZXI6IFBhcnNlcik6IEFTVFJldHVybk5vZGUge1xuXHRwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLlJFVFVSTik7XG5cblx0bGV0IGFyZ3VtZW50ID0gbnVsbDtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuU0VNSUNPTE9OKSB7XG5cdFx0YXJndW1lbnQgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlNFTUlDT0xPTik7XG5cblx0cmV0dXJuIG5ldyBBU1RSZXR1cm5Ob2RlKGFyZ3VtZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSW1wb3J0KHBhcnNlcjogUGFyc2VyKTogQVNUSW1wb3J0Tm9kZSB7XG5cdHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuSU1QT1JUKTtcblxuXHRsZXQgbmFtZXMgPSBbXTtcblx0bGV0IGZyb20gPSBudWxsO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5CUkFDRV9PUEVOKSB7XG5cdFx0bmFtZXMgPSBwYXJzZUltcG9ydExpc3QocGFyc2VyKTtcblx0XHRwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLkZST00pO1xuXHRcdGZyb20gPSBwYXJzZXIuZXhwZWN0U3RyaW5nKCkudmFsdWU7XG5cdH0gZWxzZSB7XG5cdFx0bmFtZXMucHVzaChwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpLnZhbHVlKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlNFTUlDT0xPTik7XG5cblx0cmV0dXJuIG5ldyBBU1RJbXBvcnROb2RlKG5hbWVzLCBmcm9tKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSW1wb3J0TGlzdChwYXJzZXI6IFBhcnNlcik6IHN0cmluZ1tdIHtcblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfT1BFTik7XG5cblx0Y29uc3QgbmFtZXM6IHN0cmluZ1tdID0gW107XG5cblx0d2hpbGUgKHRydWUpIHtcblx0XHRjb25zdCBuYW1lVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXG5cdFx0bmFtZXMucHVzaChuYW1lVG9rZW4udmFsdWUpO1xuXG5cdFx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0YnJlYWs7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9DTE9TRSk7XG5cblx0cmV0dXJuIG5hbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDbGFzc0RlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUQ2xhc3NOb2RlIHtcblx0Y29uc3QgYW5ub3RhdGlvbnMgPSBwYXJzZUFubm90YXRpb25zKHBhcnNlcik7XG5cdGNvbnN0IG1vZGlmaWVycyA9IHBhcnNlTW9kaWZpZXJzKHBhcnNlciwgW0dSQU1NQVIuT1BFTl0pO1xuXG5cdGNvbnN0IGNsYXNzVG9rZW4gPSBwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLkNMQVNTKTtcblx0Y29uc3QgbmFtZVRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblxuXHRsZXQgdHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdID0gW107XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkxFU1NfVEhBTikge1xuXHRcdHR5cGVQYXJhbWV0ZXJzID0gcGFyc2VUeXBlUGFyYW1ldGVycyhwYXJzZXIpO1xuXHR9XG5cblx0bGV0IHN1cGVyQ2xhc3MgPSBudWxsO1xuXHRpZiAocGFyc2VyLmNvbnN1bWVJZktleXdvcmQoR1JBTU1BUi5FWFRFTkRTKSkge1xuXHRcdHN1cGVyQ2xhc3MgPSBuZXcgU3VwZXJDbGFzcyhcblx0XHRcdEFTVE5vZGVUeXBlLklERU5USUZJRVIsXG5cdFx0XHRwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpLnZhbHVlXG5cdFx0KTtcblx0fVxuXG5cdGxldCBpbXBsZW1lbnRzSW50ZXJmYWNlcyA9IFtdO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5JTVBMRU1FTlRTKSB7XG5cdFx0cGFyc2VyLm5leHQoKTtcblxuXHRcdGRvIHtcblx0XHRcdGNvbnN0IGludGVyZmFjZVR5cGUgPSBwYXJzZVR5cGUocGFyc2VyKTtcblx0XHRcdGltcGxlbWVudHNJbnRlcmZhY2VzLnB1c2goaW50ZXJmYWNlVHlwZSk7XG5cdFx0fSB3aGlsZSAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX09QRU4pO1xuXG5cdGNvbnN0IGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXTtcblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQlJBQ0VfQ0xPU0UpIHtcblx0XHRpZiAocGFyc2VyLmNvbnN1bWVJZkNvbW1lbnQoKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbWVtYmVyOiBBU1ROb2RlIHwgbnVsbCA9IHBhcnNlQ2xhc3NNZW1iZXIocGFyc2VyKTtcblx0XHRpZiAobWVtYmVyID09PSBudWxsKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y2hpbGRyZW4ucHVzaChtZW1iZXIpO1xuXHR9XG5cblx0Y29uc3QgYnJhY2VDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfQ0xPU0UpO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUQ2xhc3NOb2RlKFxuXHRcdG5hbWVUb2tlbi52YWx1ZSxcblx0XHRhbm5vdGF0aW9ucyxcblx0XHRtb2RpZmllcnMsXG5cdFx0dHlwZVBhcmFtZXRlcnMsXG5cdFx0aW1wbGVtZW50c0ludGVyZmFjZXMsXG5cdFx0c3VwZXJDbGFzcyxcblx0XHRjaGlsZHJlblxuXHQpO1xuXG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tVG9rZW5zKGNsYXNzVG9rZW4sIGJyYWNlQ2xvc2VUb2tlbik7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJbnRlcmZhY2VEZWNsYXJhdGlvbihwYXJzZXI6IFBhcnNlcik6IEFTVEludGVyZmFjZU5vZGUge1xuXHRjb25zdCBhbm5vdGF0aW9ucyA9IHBhcnNlQW5ub3RhdGlvbnMocGFyc2VyKTtcblx0Y29uc3QgbW9kaWZpZXJzID0gcGFyc2VNb2RpZmllcnMocGFyc2VyLCBbXSk7IC8vIGludGVyZmFjZXMgc2luZCBpbXBsaXppdCBwdWJsaWNcblxuXHRjb25zdCBpbnRlcmZhY2VUb2tlbiA9IHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuSU5URVJGQUNFKTtcblx0Y29uc3QgbmFtZVRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblxuXHRsZXQgdHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdID0gW107XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkxFU1NfVEhBTikge1xuXHRcdHR5cGVQYXJhbWV0ZXJzID0gcGFyc2VUeXBlUGFyYW1ldGVycyhwYXJzZXIpO1xuXHR9XG5cblx0bGV0IGV4dGVuZHNJbnRlcmZhY2VzID0gW107XG5cdGlmIChwYXJzZXIuY29uc3VtZUlmS2V5d29yZChHUkFNTUFSLkVYVEVORFMpKSB7XG5cdFx0ZG8ge1xuXHRcdFx0ZXh0ZW5kc0ludGVyZmFjZXMucHVzaChwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpLnZhbHVlKTtcblx0XHR9IHdoaWxlIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfT1BFTik7XG5cblx0Y29uc3QgY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdO1xuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5CUkFDRV9DTE9TRSkge1xuXHRcdGlmIChwYXJzZXIuY29uc3VtZUlmQ29tbWVudCgpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBtZW1iZXIgPSBwYXJzZUNsYXNzTWVtYmVyKHBhcnNlcik7XG5cdFx0aWYgKG1lbWJlciA9PT0gbnVsbCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKG1lbWJlciBpbnN0YW5jZW9mIEFTVEZpZWxkTm9kZSAmJiAhbWVtYmVyLm1vZGlmaWVycy5zdGF0aWMpIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoJ0ludGVyZmFjZSBmaWVsZHMgbXVzdCBiZSBzdGF0aWMuJyk7XG5cdFx0fVxuXG5cdFx0aWYgKG1lbWJlciBpbnN0YW5jZW9mIEFTVE1ldGhvZE5vZGUgJiYgbWVtYmVyLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoJ0ludGVyZmFjZSBtZXRob2RzIG11c3Qgbm90IGhhdmUgYSBib2R5LicpO1xuXHRcdH1cblxuXHRcdGNoaWxkcmVuLnB1c2gobWVtYmVyKTtcblx0fVxuXG5cdGNvbnN0IGJyYWNlQ2xvc2VUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX0NMT1NFKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVEludGVyZmFjZU5vZGUoXG5cdFx0bmFtZVRva2VuLnZhbHVlLFxuXHRcdGFubm90YXRpb25zLFxuXHRcdG1vZGlmaWVycyxcblx0XHR0eXBlUGFyYW1ldGVycyxcblx0XHRleHRlbmRzSW50ZXJmYWNlcyxcblx0XHRjaGlsZHJlblxuXHQpO1xuXG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tVG9rZW5zKGludGVyZmFjZVRva2VuLCBicmFjZUNsb3NlVG9rZW4pO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQW5ub3RhdGlvbnMocGFyc2VyOiBQYXJzZXIpOiBBU1RBbm5vdGF0aW9uTm9kZVtdIHtcblx0Y29uc3QgYW5ub3RhdGlvbnMgPSBbXTtcblxuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuQU5OT1RBVElPTikge1xuXHRcdGFubm90YXRpb25zLnB1c2gocGFyc2VBbm5vdGF0aW9uKHBhcnNlcikpO1xuXHR9XG5cblx0cmV0dXJuIGFubm90YXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBbm5vdGF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUQW5ub3RhdGlvbk5vZGUge1xuXHRjb25zdCB0b2tlbiA9IHBhcnNlci5leHBlY3RBbm5vdGF0aW9uKCk7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUQW5ub3RhdGlvbk5vZGUodG9rZW4udmFsdWUpO1xuXG5cdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKSkge1xuXHRcdHdoaWxlIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKSB7XG5cdFx0XHRjb25zdCBrZXkgPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpLnZhbHVlO1xuXHRcdFx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuQVNTSUdOKTtcblxuXHRcdFx0Y29uc3QgdmFsdWUgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0XHRcdG5vZGUucHJvcGVydGllcy5zZXQoa2V5LCB2YWx1ZSk7XG5cblx0XHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkNPTU1BKSB7XG5cdFx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXHR9XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU1vZGlmaWVycyhwYXJzZXI6IFBhcnNlciwgYWxsb3dlZDogc3RyaW5nW10pOiBNb2RpZmllcnMge1xuXHRjb25zdCBtb2RpZmllcnM6IHsgW2luZGV4OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcblxuXHRhbGxvd2VkLmZvckVhY2gobW9kaWZpZXIgPT4gbW9kaWZpZXJzW21vZGlmaWVyXSA9IGZhbHNlKTtcblxuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuS0VZV09SRCAmJiBhbGxvd2VkLmluY2x1ZGVzKHBhcnNlci5wZWVrKCkudmFsdWUpKSB7XG5cdFx0Y29uc3QgbW9kaWZpZXIgPSBwYXJzZXIubmV4dCgpLnZhbHVlO1xuXG5cdFx0aWYgKG1vZGlmaWVyc1ttb2RpZmllcl0pIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoYER1cGxpY2F0ZSBtb2RpZmllcjogJHttb2RpZmllcn1gKTtcblx0XHR9XG5cblx0XHRtb2RpZmllcnNbbW9kaWZpZXJdID0gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBuZXcgTW9kaWZpZXJzKG1vZGlmaWVycyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBhcmFtZXRlcnMocGFyc2VyOiBQYXJzZXIpOiBBU1RQYXJhbWV0ZXJOb2RlW10ge1xuXHRjb25zdCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10gPSBbXTtcblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSkge1xuXHRcdHJldHVybiBwYXJhbWV0ZXJzO1xuXHR9XG5cblx0ZG8ge1xuXHRcdGNvbnN0IG5hbWVUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cdFx0bGV0IHR5cGUgPSBudWxsO1xuXHRcdGxldCBkZWZhdWx0VmFsdWUgPSBudWxsO1xuXG5cdFx0bGV0IHR5cGVUb2tlbiA9IG51bGw7XG5cdFx0bGV0IGRlZmF1bHRWYWx1ZVRva2VuID0gbnVsbDtcblxuXHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkNPTE9OKSB7XG5cdFx0XHR0eXBlVG9rZW4gPSBwYXJzZXIubmV4dCgpO1xuXHRcdFx0dHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHRcdH1cblxuXHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkFTU0lHTikge1xuXHRcdFx0ZGVmYXVsdFZhbHVlVG9rZW4gPSBwYXJzZXIubmV4dCgpO1xuXHRcdFx0ZGVmYXVsdFZhbHVlID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RQYXJhbWV0ZXJOb2RlKG5hbWVUb2tlbi52YWx1ZSwgdHlwZSwgZGVmYXVsdFZhbHVlKTtcblx0XHRub2RlLnNwYW4gPSBzcGFuRnJvbVRva2Vucyh0eXBlVG9rZW4gfHwgbmFtZVRva2VuLCBkZWZhdWx0VmFsdWVUb2tlbiB8fCBuYW1lVG9rZW4pO1xuXG5cdFx0cGFyYW1ldGVycy5wdXNoKG5vZGUpO1xuXHR9IHdoaWxlIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpO1xuXG5cdHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDbGFzc01lbWJlcihwYXJzZXI6IFBhcnNlcik6IEFTVE5vZGUgfCBudWxsIHtcblx0Y29uc3Qgc3RhcnRUb2tlbiA9IHBhcnNlci5wZWVrKCk7XG5cblx0Y29uc3QgYW5ub3RhdGlvbnMgPSBwYXJzZUFubm90YXRpb25zKHBhcnNlcik7XG5cdGNvbnN0IG1vZGlmaWVycyA9IHBhcnNlTW9kaWZpZXJzKFxuXHRcdHBhcnNlcixcblx0XHRbXG5cdFx0XHRHUkFNTUFSLlBVQkxJQyxcblx0XHRcdEdSQU1NQVIuUFJJVkFURSxcblx0XHRcdEdSQU1NQVIuU1RBVElDLFxuXHRcdFx0R1JBTU1BUi5SRUFET05MWVxuXHRcdF1cblx0KTtcblxuXHRjb25zdCBuYW1lVG9rZW4gPSBwYXJzZXIuZXhwZWN0T25lT2YoW1Rva2VuVHlwZS5JREVOVElGSUVSLCBUb2tlblR5cGUuS0VZV09SRF0pO1xuXG5cdGxldCBmaWVsZFR5cGUgPSBudWxsO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5DT0xPTikge1xuXHRcdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT0xPTikpIHtcblx0XHRcdGZpZWxkVHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHRcdH1cblx0fVxuXG5cdGxldCBpbml0ID0gbnVsbDtcblx0aWYgKHBhcnNlci5jb25zdW1lSWZPcGVyYXRvcihHUkFNTUFSLkFTU0lHTikpIHtcblx0XHRpbml0ID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdH1cblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5TRU1JQ09MT04pIHtcblx0XHRpZiAoIW1vZGlmaWVycy5wdWJsaWMgJiYgIW1vZGlmaWVycy5wcml2YXRlKSB7XG5cdFx0XHRtb2RpZmllcnMucHJpdmF0ZSA9IHRydWU7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc2VtaWNvbG9uVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5TRU1JQ09MT04pO1xuXG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RGaWVsZE5vZGUobmFtZVRva2VuLnZhbHVlLCBtb2RpZmllcnMsIGZpZWxkVHlwZSwgaW5pdCk7XG5cdFx0bm9kZS5zcGFuID0gc3BhbkZyb21Ub2tlbnMoc3RhcnRUb2tlbiwgc2VtaWNvbG9uVG9rZW4pO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0bGV0IHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5MRVNTX1RIQU4pIHtcblx0XHR0eXBlUGFyYW1ldGVycyA9IHBhcnNlVHlwZVBhcmFtZXRlcnMocGFyc2VyKTtcblx0fVxuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pIHtcblx0XHRpZiAoIW1vZGlmaWVycy5wdWJsaWMgJiYgIW1vZGlmaWVycy5wcml2YXRlKSB7XG5cdFx0XHRtb2RpZmllcnMucHVibGljID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKTtcblx0XHRjb25zdCBwYXJhbWV0ZXJzID0gcGFyc2VQYXJhbWV0ZXJzKHBhcnNlcik7XG5cdFx0Y29uc3QgcGFyZW50aGVzZXNDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXG5cdFx0bGV0IHJldHVyblR5cGUgPSBudWxsO1xuXHRcdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT0xPTikpIHtcblx0XHRcdHJldHVyblR5cGUgPSBwYXJzZVR5cGUocGFyc2VyKTtcblx0XHR9XG5cblx0XHRjb25zdCBjaGlsZHJlbjogQVNUTm9kZVtdID0gcGFyc2VCbG9jayhwYXJzZXIpO1xuXG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RNZXRob2ROb2RlKFxuXHRcdFx0bmFtZVRva2VuLnZhbHVlLFxuXHRcdFx0bmFtZVRva2VuLnZhbHVlID09PSBHUkFNTUFSLkNPTlNUUlVDVE9SID8gQVNUTm9kZVR5cGUuQ09OU1RSVUNUT1IgOiBBU1ROb2RlVHlwZS5NRVRIT0QsXG5cdFx0XHRhbm5vdGF0aW9ucyxcblx0XHRcdG1vZGlmaWVycyxcblx0XHRcdHR5cGVQYXJhbWV0ZXJzLFxuXHRcdFx0cGFyYW1ldGVycyxcblx0XHRcdHJldHVyblR5cGUsXG5cdFx0XHRjaGlsZHJlblxuXHRcdCk7XG5cblx0XHRub2RlLnNwYW4gPSBzcGFuRnJvbVRva2VucyhzdGFydFRva2VuLCBwYXJlbnRoZXNlc0Nsb3NlVG9rZW4pO1xuXG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHR0aHJvd1BhcnNlckVycm9yKGBJbnZhbGlkIGNsYXNzIG1lbWJlcjogJHtuYW1lVG9rZW4udmFsdWV9YCk7XG5cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUJsb2NrKHBhcnNlcjogUGFyc2VyKTogQVNUTm9kZVtdIHtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuU0VNSUNPTE9OKSB7XG5cdFx0cGFyc2VyLm5leHQoKTtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9PUEVOKTtcblxuXHRjb25zdCBjaGlsZHJlbiA9IFtdO1xuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5CUkFDRV9DTE9TRSkge1xuXHRcdGlmIChwYXJzZXIucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5DT01NRU5UKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGNvbnN0IGNoaWxkOiBBU1ROb2RlIHwgbnVsbCA9IHBhcnNlU3RhdGVtZW50KHBhcnNlcik7XG5cdFx0aWYgKGNoaWxkKSB7XG5cdFx0XHRjaGlsZHJlbi5wdXNoKGNoaWxkKTtcblx0XHR9XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9DTE9TRSk7XG5cblx0cmV0dXJuIGNoaWxkcmVuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VWYXJpYWJsZURlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUVmFyaWFibGVOb2RlIHtcblx0Y29uc3QgbGV0VG9rZW4gPSBwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLkxFVCk7XG5cdGNvbnN0IG5hbWVUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cblx0bGV0IHR5cGVBbm5vdGF0aW9uID0gbnVsbDtcblx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTE9OKSkge1xuXHRcdHR5cGVBbm5vdGF0aW9uID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cdH1cblxuXHRsZXQgaW5pdCA9IG51bGw7XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkFTU0lHTikge1xuXHRcdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkFTU0lHTik7XG5cdFx0aW5pdCA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHR9XG5cblx0Y29uc3Qgc2VtaWNvbG9uVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5TRU1JQ09MT04pO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUVmFyaWFibGVOb2RlKG5hbWVUb2tlbi52YWx1ZSwgdHlwZUFubm90YXRpb24sIGluaXQpO1xuXHRub2RlLnNwYW4gPSBzcGFuRnJvbVRva2VucyhsZXRUb2tlbiwgc2VtaWNvbG9uVG9rZW4pO1xuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJZkRlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUSWZOb2RlIHtcblx0Y29uc3Qgc3RhcnRUb2tlbiA9IHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuSUYpO1xuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pO1xuXHRjb25zdCBjb25kaXRpb24gPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0Y29uc3QgcGFyZW50aGVzZXNDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUSWZOb2RlKGNvbmRpdGlvbiwgbmV3IEFTVFRoZW5Ob2RlKHBhcnNlQmxvY2socGFyc2VyKSkpO1xuXG5cdGlmIChwYXJzZXIuY29uc3VtZUlmS2V5d29yZChHUkFNTUFSLkVMU0UpKSB7XG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuSUYpIHtcblx0XHRcdG5vZGUuZWxzZSA9IHBhcnNlSWZEZWNsYXJhdGlvbihwYXJzZXIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRub2RlLmVsc2UgPSBuZXcgQVNURWxzZU5vZGUocGFyc2VCbG9jayhwYXJzZXIpKTtcblx0XHR9XG5cdH1cblxuXHRub2RlLnNwYW4gPSBzcGFuRnJvbVRva2VucyhzdGFydFRva2VuLCBwYXJlbnRoZXNlc0Nsb3NlVG9rZW4pO1xuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VNYXRjaERlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUTWF0Y2hOb2RlIHtcblx0Y29uc3Qgc3RhcnRUb2tlbiA9IHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuTUFUQ0gpO1xuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKTtcblxuXHRjb25zdCBleHByZXNzaW9uID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9PUEVOKTtcblxuXHRjb25zdCBtYXRjaENhc2VzOiBBU1RNYXRjaENhc2VOb2RlW10gPSBbXTtcblx0bGV0IGRlZmF1bHRDYXNlOiBBU1RNYXRjaENhc2VOb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQlJBQ0VfQ0xPU0UpIHtcblx0XHRjb25zdCBtYXRjaENhc2U6IEFTVE1hdGNoQ2FzZU5vZGUgPSBwYXJzZU1hdGNoQ2FzZURlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0aWYgKG1hdGNoQ2FzZS50ZXN0ID09PSBudWxsKSB7XG5cdFx0XHRkZWZhdWx0Q2FzZSA9IG1hdGNoQ2FzZTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRtYXRjaENhc2VzLnB1c2gobWF0Y2hDYXNlKTtcblx0fVxuXG5cdGNvbnN0IGJyYWNlQ2xvc2VUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX0NMT1NFKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVE1hdGNoTm9kZShleHByZXNzaW9uLCBtYXRjaENhc2VzLCBkZWZhdWx0Q2FzZSk7XG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tVG9rZW5zKHN0YXJ0VG9rZW4sIGJyYWNlQ2xvc2VUb2tlbik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU1hdGNoQ2FzZURlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUTWF0Y2hDYXNlTm9kZSB7XG5cdGNvbnN0IGNhc2VOb2RlID0gbmV3IEFTVE1hdGNoQ2FzZU5vZGUoKTtcblxuXHRpZiAocGFyc2VyLmNvbnN1bWVJZktleXdvcmQoR1JBTU1BUi5ERUZBVUxUKSkge1xuXHRcdGNhc2VOb2RlLnRlc3QgPSBudWxsO1xuXHR9IGVsc2Uge1xuXHRcdGNhc2VOb2RlLnRlc3QgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkNPTE9OKTtcblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5CUkFDRV9PUEVOKSB7XG5cdFx0Y2FzZU5vZGUuY2hpbGRyZW4gPSBwYXJzZUJsb2NrKHBhcnNlcik7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3QgY2hpbGQ6IEFTVE5vZGUgfCBudWxsID0gcGFyc2VTdGF0ZW1lbnQocGFyc2VyKTtcblx0XHRpZiAoY2hpbGQpIHtcblx0XHRcdGNhc2VOb2RlLmNoaWxkcmVuLnB1c2goY2hpbGQpXG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGNhc2VOb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VGb3JlYWNoRGVjbGFyYXRpb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RGb3JlYWNoTm9kZSB7XG5cdGNvbnN0IHN0YXJ0VG9rZW4gPSBwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLkZPUkVBQ0gpO1xuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pO1xuXG5cdGNvbnN0IGl0ZXJhdG9yVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXHRjb25zdCBpdGVyYXRvciA9IGl0ZXJhdG9yVG9rZW4udmFsdWU7XG5cblx0cGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5JTik7XG5cblx0Y29uc3QgaXRlcmFibGUgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblxuXHRjb25zdCBwYXJlbnRoZXNlc0Nsb3NlVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RGb3JlYWNoTm9kZShpdGVyYXRvciwgaXRlcmFibGUsIHBhcnNlQmxvY2socGFyc2VyKSk7XG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tVG9rZW5zKHN0YXJ0VG9rZW4sIHBhcmVudGhlc2VzQ2xvc2VUb2tlbik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUFycmF5KHBhcnNlcjogUGFyc2VyKTogQVNUQXJyYXlOb2RlIHtcblx0Y29uc3Qgc3RhcnRUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX09QRU4pO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUQXJyYXlOb2RlKCk7XG5cblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfQ0xPU0UpIHtcblx0XHRkbyB7XG5cdFx0XHRub2RlLmVsZW1lbnRzLnB1c2gocGFyc2VFeHByZXNzaW9uKHBhcnNlcikpO1xuXHRcdH0gd2hpbGUgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSk7XG5cdH1cblxuXHRjb25zdCBicmFja2V0U3F1YXJlQ2xvc2VUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX0NMT1NFKTtcblxuXHRub2RlLnNwYW4gPSBzcGFuRnJvbVRva2VucyhzdGFydFRva2VuLCBicmFja2V0U3F1YXJlQ2xvc2VUb2tlbik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUxhbWJkYShwYXJzZXI6IFBhcnNlcik6IEFTVExhbWJkYU5vZGUge1xuXHRjb25zdCBzdGFydFRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfT1BFTik7XG5cblx0Y29uc3QgcGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdID0gW107XG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLkFSUk9XKSB7XG5cdFx0Y29uc3QgbmFtZSA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCkudmFsdWU7XG5cdFx0bGV0IHR5cGUgPSBudWxsO1xuXHRcdGxldCBkZWZhdWx0VmFsdWUgPSBudWxsO1xuXG5cdFx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTE9OKSkge1xuXHRcdFx0dHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHRcdH1cblxuXHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkFTU0lHTikge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHRcdGRlZmF1bHRWYWx1ZSA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHRcdH1cblxuXHRcdHBhcmFtZXRlcnMucHVzaChuZXcgQVNUUGFyYW1ldGVyTm9kZShuYW1lLCB0eXBlLCBkZWZhdWx0VmFsdWUpKTtcblxuXHRcdHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkFSUk9XKTtcblxuXHRsZXQgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgPSBjcmVhdGVNaXhlZFR5cGUoKTtcblx0aWYgKHBhcnNlci5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLklERU5USUZJRVIpIHtcblx0XHRyZXR1cm5UeXBlID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQ09MT04pIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVyblR5cGUgPSBjcmVhdGVNaXhlZFR5cGUoKTtcblx0XHRcdHBhcnNlci5yZXdpbmQoKTtcblx0XHR9XG5cdH1cblxuXHRsZXQgY2hpbGRyZW4gPSBbXTtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQlJBQ0VfT1BFTikge1xuXHRcdGNoaWxkcmVuID0gcGFyc2VCbG9jayhwYXJzZXIpO1xuXHR9IGVsc2Uge1xuXHRcdGNoaWxkcmVuLnB1c2gocGFyc2VFeHByZXNzaW9uKHBhcnNlcikpO1xuXHR9XG5cblx0Y29uc3QgYnJhY2VDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfQ0xPU0UpO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUTGFtYmRhTm9kZShwYXJhbWV0ZXJzLCByZXR1cm5UeXBlLCBjaGlsZHJlbik7XG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tVG9rZW5zKHN0YXJ0VG9rZW4sIGJyYWNlQ2xvc2VUb2tlbik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb29rc0xpa2VMYW1iZGEocGFyc2VyOiBQYXJzZXIpOiBib29sZWFuIHtcblx0Y29uc3Qgc3RhcnQgPSBwYXJzZXIucG9zaXRpb24oKTtcblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5CUkFDRV9PUEVOKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cGFyc2VyLm5leHQoKTtcblxuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuSURFTlRJRklFUikge1xuXHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTE9OKSkge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHR9XG5cdFx0aWYgKCFwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGlzTGFtYmRhID0gcGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5BUlJPVztcblx0cGFyc2VyLnNlZWtBdChzdGFydClcblx0cmV0dXJuIGlzTGFtYmRhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VFeHByZXNzaW9uU3RhdGVtZW50KHBhcnNlcjogUGFyc2VyKTogQVNURXhwcmVzc2lvbk5vZGUge1xuXHRjb25zdCBleHByID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuU0VNSUNPTE9OKTtcblxuXHRyZXR1cm4gbmV3IEFTVEV4cHJlc3Npb25Ob2RlKGV4cHIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VFeHByZXNzaW9uKHBhcnNlcjogUGFyc2VyLCBwcmVjZWRlbmNlOiBudW1iZXIgPSAwKTogQVNUTm9kZSB7XG5cdGxldCBleHByID0gcGFyc2VQb3N0Zml4KHBhcnNlciwgcGFyc2VVbmFyeShwYXJzZXIpKTtcblxuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdGNvbnN0IHRva2VuID0gcGFyc2VyLnBlZWsoKTtcblx0XHRpZiAoIXRva2VuKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRsZXQgdG9rZW5QcmVjZWRlbmNlID0gbG9va3VwUHJlY2VkZW5jZSh0b2tlbik7XG5cdFx0aWYgKHRva2VuUHJlY2VkZW5jZSA8IHByZWNlZGVuY2UpIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5BU1NJR04pIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0XHRleHByID0gbmV3IEFTVEFzc2lnbm1lbnROb2RlKGV4cHIsIHBhcnNlRXhwcmVzc2lvbihwYXJzZXIsIHRva2VuUHJlY2VkZW5jZSkpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKEdSQU1NQVIuTUFUSF9PUEVSQVRPUlMuaW5jbHVkZXModG9rZW4udmFsdWUpXG5cdFx0XHR8fCBHUkFNTUFSLkxPR0lDX09QRVJBVE9SUy5pbmNsdWRlcyh0b2tlbi52YWx1ZSkpIHtcblx0XHRcdGNvbnN0IHN0YXJ0VG9rZW4gPSBwYXJzZXIubmV4dCgpO1xuXHRcdFx0Y29uc3QgcmlnaHQgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyLCB0b2tlblByZWNlZGVuY2UgKyAxKTtcblx0XHRcdGNvbnN0IGVuZFRva2VuID0gcGFyc2VyLnBlZWsoKTtcblxuXHRcdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RCaW5hcnlOb2RlKGV4cHIsIHJpZ2h0LCB0b2tlbi52YWx1ZSk7XG5cdFx0XHRub2RlLnNwYW4gPSBzcGFuRnJvbVRva2VucyhzdGFydFRva2VuLCBlbmRUb2tlbik7XG5cdFx0XHRleHByID0gbm9kZTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGJyZWFrO1xuXHR9XG5cblx0cmV0dXJuIGV4cHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUFyZ3VtZW50cyhwYXJzZXI6IFBhcnNlcik6IEFTVE5vZGVbXSB7XG5cdGNvbnN0IGFyZ3M6IEFTVE5vZGVbXSA9IFtdO1xuXG5cdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSkpIHtcblx0XHRyZXR1cm4gYXJncztcblx0fVxuXG5cdGFyZ3MucHVzaChwYXJzZUV4cHJlc3Npb24ocGFyc2VyKSk7XG5cblx0d2hpbGUgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSkge1xuXHRcdGFyZ3MucHVzaChwYXJzZUV4cHJlc3Npb24ocGFyc2VyKSk7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cdHJldHVybiBhcmdzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VVbmFyeShwYXJzZXI6IFBhcnNlcik6IEFTVE5vZGUgfCBBU1RVbmFyeU5vZGUge1xuXHRjb25zdCB0b2tlbiA9IHBhcnNlci5wZWVrKCk7XG5cblx0aWYgKHRva2VuICYmIHRva2VuLnZhbHVlID09PSBHUkFNTUFSLkVYQ0xBTUFUSU9OX01BUkspIHtcblx0XHRwYXJzZXIubmV4dCgpO1xuXG5cdFx0Y29uc3QgdW5hcnk6IEFTVE5vZGUgfCBBU1RVbmFyeU5vZGUgPSBwYXJzZVVuYXJ5KHBhcnNlcik7XG5cblx0XHRyZXR1cm4gbmV3IEFTVFVuYXJ5Tm9kZShHUkFNTUFSLkVYQ0xBTUFUSU9OX01BUkssIHVuYXJ5KTtcblx0fVxuXG5cdHJldHVybiBwYXJzZVByaW1hcnkocGFyc2VyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUHJpbWFyeShwYXJzZXI6IFBhcnNlcik6IEFTVE5vZGUge1xuXHRpZiAobG9va3NMaWtlTGFtYmRhKHBhcnNlcikpIHtcblx0XHRyZXR1cm4gcGFyc2VMYW1iZGEocGFyc2VyKTtcblx0fVxuXG5cdGNvbnN0IHRva2VuID0gcGFyc2VyLm5leHQoKTtcblxuXHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfT1BFTikge1xuXHRcdHBhcnNlci5yZXdpbmQoKTtcblx0XHRyZXR1cm4gcGFyc2VBcnJheShwYXJzZXIpO1xuXHR9XG5cblx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5OVU1CRVIpIHtcblx0XHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuTlVNQkVSKTtcblx0XHRub2RlLnZhbHVlID0gdG9rZW4udmFsdWU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRpZiAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLlNUUklORykge1xuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5TVFJJTkcpO1xuXHRcdG5vZGUudmFsdWUgPSB0b2tlbi52YWx1ZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuQk9PTEVBTikge1xuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5CT09MRUFOKTtcblx0XHRub2RlLnZhbHVlID0gdG9rZW4udmFsdWU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRpZiAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLklERU5USUZJRVIpIHtcblx0XHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuSURFTlRJRklFUik7XG5cdFx0bm9kZS5uYW1lID0gdG9rZW4udmFsdWU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuTlVMTCkge1xuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5OVUxMKTtcblx0XHRub2RlLnZhbHVlID0gdG9rZW4udmFsdWU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuVEhJUykge1xuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5USElTKTtcblx0XHRub2RlLm5hbWUgPSB0b2tlbi52YWx1ZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5ORVcpIHtcblxuXHRcdGxldCB0eXBlQW5ub3RhdGlvbiA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXG5cdFx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTik7XG5cblx0XHRyZXR1cm4gbmV3IEFTVE5ld05vZGUocGFyc2VBcmd1bWVudHMocGFyc2VyKSwgdHlwZUFubm90YXRpb24pO1xuXHR9XG5cblx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pIHtcblx0XHRjb25zdCBleHByID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdFx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXHRcdHJldHVybiBleHByO1xuXHR9XG5cblx0dGhyb3dQYXJzZXJFcnJvcihgVW5leHBlY3RlZCB0b2tlbjogJHt0b2tlbi50eXBlfSAke3Rva2VuLnZhbHVlfWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQb3N0Zml4KHBhcnNlcjogUGFyc2VyLCBleHByOiBBU1ROb2RlIHwgbnVsbCk6IEFTVE5vZGUge1xuXHRpZiAoZXhwciA9PT0gbnVsbCkge1xuXHRcdHRocm93UGFyc2VyRXJyb3IoYEV4cGVjdGVkIGV4cHJlc3Npb24sIGdvdCBudWxsLmApO1xuXHR9XG5cblx0d2hpbGUgKHRydWUpIHtcblx0XHRjb25zdCB0b2tlbiA9IHBhcnNlci5wZWVrKCk7XG5cdFx0aWYgKCF0b2tlbikgYnJlYWs7XG5cblx0XHQvLyBDYWxsOiBmb28oLi4uKVxuXHRcdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdFx0ZXhwciA9IG5ldyBBU1RDYWxsTm9kZShleHByLCBwYXJzZUFyZ3VtZW50cyhwYXJzZXIpKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIE1lbWJlcjogZm9vLmJhclxuXHRcdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5ET1QpIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0XHRleHByID0gbmV3IEFTVE1lbWJlck5vZGUoZXhwciwgcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKS52YWx1ZSk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBJTkRFWDogZm9vW2V4cHJdXG5cdFx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX09QRU4pIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cblx0XHRcdGNvbnN0IGluZGV4ID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cblx0XHRcdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX0NMT1NFKTtcblxuXHRcdFx0ZXhwciA9IG5ldyBBU1RJbmRleE5vZGUoZXhwciwgaW5kZXgpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0YnJlYWs7XG5cdH1cblxuXHRyZXR1cm4gZXhwcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvb2t1cFByZWNlZGVuY2UodG9rZW46IFRva2VuKTogbnVtYmVyIHtcblx0c3dpdGNoICh0b2tlbi52YWx1ZSkge1xuXHRcdGNhc2UgR1JBTU1BUi5ET1Q6XG5cdFx0XHRyZXR1cm4gMTAwO1xuXHRcdGNhc2UgR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOOlxuXHRcdFx0cmV0dXJuIDkwO1xuXHRcdGNhc2UgR1JBTU1BUi5NVUxUSVBMWTpcblx0XHRjYXNlIEdSQU1NQVIuRElWSURFOlxuXHRcdGNhc2UgR1JBTU1BUi5NT0RVTFVTOlxuXHRcdFx0cmV0dXJuIDYwO1xuXHRcdGNhc2UgR1JBTU1BUi5QTFVTOlxuXHRcdGNhc2UgR1JBTU1BUi5NSU5VUzpcblx0XHRcdHJldHVybiA1MDtcblx0XHRjYXNlIEdSQU1NQVIuTEVTU19USEFOOlxuXHRcdGNhc2UgR1JBTU1BUi5HUkVBVEVSX1RIQU46XG5cdFx0Y2FzZSBHUkFNTUFSLkxFU1NfRVFVQUw6XG5cdFx0Y2FzZSBHUkFNTUFSLkdSRUFURVJfRVFVQUw6XG5cdFx0XHRyZXR1cm4gNDA7XG5cdFx0Y2FzZSBHUkFNTUFSLkVRVUFMOlxuXHRcdGNhc2UgR1JBTU1BUi5OT1RfRVFVQUw6XG5cdFx0XHRyZXR1cm4gMzA7XG5cdFx0Y2FzZSBHUkFNTUFSLkFORDpcblx0XHRcdHJldHVybiAyMDtcblx0XHRjYXNlIEdSQU1NQVIuT1I6XG5cdFx0XHRyZXR1cm4gMTA7XG5cdFx0Y2FzZSBHUkFNTUFSLkFTU0lHTjpcblx0XHRcdHJldHVybiA1O1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gMDtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge1Rva2VuLCBUb2tlblR5cGV9IGZyb20gXCIuL2dyYW1tYXIudHNcIjtcbmltcG9ydCB7VG9rZW5TdHJlYW19IGZyb20gXCIuL3Rva2VuaXplclwiO1xuaW1wb3J0IHtwYXJzZVByb2dyYW19IGZyb20gXCIuL3BhcnNlcl9zdGF0bWVudHNcIjtcbmltcG9ydCB7dGhyb3dQYXJzZXJFcnJvcn0gZnJvbSBcIi4vZXJyb3JzXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4vcGFyc2VyX3NvdXJjZVwiO1xuXG5cbmV4cG9ydCBjbGFzcyBQYXJzZXIge1xuXHRzb3VyY2U6IFNvdXJjZTtcblx0dG9rZW5TdHJlYW06IFRva2VuU3RyZWFtIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3Ioc291cmNlOiBTb3VyY2UpIHtcblx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0fVxuXG5cdHBhcnNlKCkge1xuXHRcdHRoaXMudG9rZW5TdHJlYW0gPSB0aGlzLnNvdXJjZVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgLmdldFRva2VuaXplcigpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAuZ2V0VG9rZW5TdHJlYW0oKVxuXG5cdFx0cmV0dXJuIHBhcnNlUHJvZ3JhbSh0aGlzKTtcblx0fVxuXG5cdHN0cmVhbSgpOiBUb2tlblN0cmVhbSB7XG5cdFx0aWYgKCF0aGlzLnRva2VuU3RyZWFtKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKCdQYXJzZXIgaGFzIG5vdCBiZWVuIHBhcnNlZCB5ZXQuJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMudG9rZW5TdHJlYW07XG5cdH1cblxuXHRleHBlY3QodG9rZW5UeXBlOiBzdHJpbmcsIGtleXdvcmQ6IHN0cmluZyB8IG51bGwgPSBudWxsKTogVG9rZW4ge1xuXHRcdGNvbnN0IHRva2VuID0gdGhpc1xuXHRcdFx0LnN0cmVhbSgpXG5cdFx0XHQubmV4dCgpO1xuXG5cdFx0aWYgKCF0b2tlbikge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcihgVW5leHBlY3RlZCBlbmQgb2YgZmlsZS4gRXhwZWN0ZWQgJHt0b2tlblR5cGV9JHtrZXl3b3JkID8gJyAnICsga2V5d29yZCA6ICcnfWApO1xuXHRcdH1cblxuXHRcdGlmICh0b2tlbi50eXBlICE9PSB0b2tlblR5cGUgfHwgKGtleXdvcmQgJiYgdG9rZW4udmFsdWUgIT09IGtleXdvcmQpKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKGBFeHBlY3RlZCAke3Rva2VuVHlwZX0ke2tleXdvcmQgPyAnICcgKyBrZXl3b3JkIDogJyd9LCBnb3QgJHt0b2tlbi50eXBlfSAke3Rva2VuLnZhbHVlfWApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0b2tlbjtcblx0fVxuXG5cdGV4cGVjdE9wZXJhdG9yKGtleXdvcmQ6IHN0cmluZyB8IG51bGwgPSBudWxsKTogVG9rZW4ge1xuXHRcdHJldHVybiB0aGlzLmV4cGVjdChUb2tlblR5cGUuT1BFUkFUT1IsIGtleXdvcmQpO1xuXHR9XG5cblx0ZXhwZWN0QW5ub3RhdGlvbigpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZWN0KFRva2VuVHlwZS5BTk5PVEFUSU9OKTtcblx0fVxuXG5cdGV4cGVjdElkZW50aWZpZXIoKTogVG9rZW4ge1xuXHRcdHJldHVybiB0aGlzLmV4cGVjdChUb2tlblR5cGUuSURFTlRJRklFUik7XG5cdH1cblxuXHRleHBlY3RLZXl3b3JkKGtleXdvcmQ6IHN0cmluZyB8IG51bGwgPSBudWxsKTogVG9rZW4ge1xuXHRcdHJldHVybiB0aGlzLmV4cGVjdChUb2tlblR5cGUuS0VZV09SRCwga2V5d29yZCk7XG5cdH1cblxuXHRleHBlY3RTdHJpbmcoKTogVG9rZW4ge1xuXHRcdHJldHVybiB0aGlzLmV4cGVjdChUb2tlblR5cGUuU1RSSU5HKTtcblx0fVxuXG5cdGV4cGVjdFB1bmN0dWF0aW9uKGtleXdvcmQ6IHN0cmluZyB8IG51bGwgPSBudWxsKTogVG9rZW4ge1xuXHRcdHJldHVybiB0aGlzLmV4cGVjdChUb2tlblR5cGUuUFVOQ1RVQVRJT04sIGtleXdvcmQpO1xuXHR9XG5cblx0ZXhwZWN0T25lT2YodG9rZW5UeXBlczogc3RyaW5nW10sIGtleXdvcmRzOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IFRva2VuIHtcblx0XHRjb25zdCB0b2tlbiA9IHRoaXNcblx0XHRcdC5zdHJlYW0oKVxuXHRcdFx0Lm5leHQoKTtcblxuXHRcdGlmICghdG9rZW4pIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoYFVuZXhwZWN0ZWQgZW5kIG9mIGZpbGUuIEV4cGVjdGVkIG9uZSBvZiB0eXBlcyAke3Rva2VuVHlwZXN9LCBnb3QgbnVsbC5gKTtcblx0XHR9XG5cblx0XHRpZiAoIXRva2VuVHlwZXMuaW5jbHVkZXModG9rZW4udHlwZSkpIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoYEV4cGVjdGVkIG9uZSBvZiB0eXBlcyAke3Rva2VuVHlwZXN9LCBnb3QgJHt0b2tlbi50eXBlfWApO1xuXHRcdH1cblxuXHRcdGlmIChrZXl3b3JkcyAmJiAha2V5d29yZHMuaW5jbHVkZXModG9rZW4udmFsdWUpKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKGBFeHBlY3RlZCBvbmUgb2YgdmFsdWVzICR7a2V5d29yZHN9LCBnb3QgJHt0b2tlbi52YWx1ZX1gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdG9rZW47XG5cdH1cblxuXHRjb25zdW1lSWYodG9rZW5UeXBlOiBzdHJpbmcsIGtleXdvcmQ6IHN0cmluZyB8IG51bGwgPSBudWxsKTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgdG9rZW4gPSB0aGlzLnBlZWsoKTtcblxuXHRcdGlmICh0b2tlbi50eXBlID09PSB0b2tlblR5cGUgJiYgKGtleXdvcmQgJiYgdG9rZW4udmFsdWUgPT09IGtleXdvcmQpKSB7XG5cdFx0XHR0aGlzLm5leHQoKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGNvbnN1bWVJZlB1bmN0dWF0aW9uKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdW1lSWYoVG9rZW5UeXBlLlBVTkNUVUFUSU9OLCB2YWx1ZSk7XG5cdH1cblxuXHRjb25zdW1lSWZPcGVyYXRvcih2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3VtZUlmKFRva2VuVHlwZS5PUEVSQVRPUiwgdmFsdWUpO1xuXHR9XG5cblx0Y29uc3VtZUlmQ29tbWVudCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdW1lSWYoVG9rZW5UeXBlLkNPTU1FTlQpO1xuXHR9XG5cblx0Y29uc3VtZUlmS2V5d29yZChrZXl3b3JkOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdW1lSWYoVG9rZW5UeXBlLktFWVdPUkQsIGtleXdvcmQpO1xuXHR9XG5cblx0cGVlaygpOiBUb2tlbiB7XG5cdFx0Y29uc3QgdG9rZW4gPSB0aGlzXG5cdFx0XHQuc3RyZWFtKClcblx0XHRcdC5wZWVrKCk7XG5cblx0XHRpZiAodG9rZW4gPT09IG51bGwpIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoJ1VuZXhwZWN0ZWQgZW5kIG9mIGZpbGUuIEV4cGVjdGVkIHRva2VuLCBnb3QgbnVsbC4nKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdG9rZW47XG5cdH1cblxuXHRuZXh0KCk6IFRva2VuIHtcblx0XHRjb25zdCB0b2tlbiA9IHRoaXNcblx0XHRcdC5zdHJlYW0oKVxuXHRcdFx0Lm5leHQoKTtcblxuXHRcdGlmICh0b2tlbiA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZmlsZS4gRXhwZWN0ZWQgdG9rZW4sIGdvdCBudWxsLicpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0b2tlbjtcblx0fVxuXG5cdHJld2luZCgpOiB2b2lkIHtcblx0XHR0aGlzLnN0cmVhbSgpXG5cdFx0ICAgIC5yZXdpbmQoKTtcblx0fVxuXG5cdHBvc2l0aW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuc3RyZWFtKCkuaW5kZXg7XG5cdH1cblxuXHRzZWVrQXQocG9zaXRpb246IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuc3RyZWFtKCkuaW5kZXggPSBwb3NpdGlvbjtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0FTVENsYXNzTm9kZSwgQVNUTm9kZVR5cGV9IGZyb20gXCIuLi9jb3JlL2FzdFwiO1xuaW1wb3J0IHtDbGFzc0RlZmluaXRpb259IGZyb20gXCIuLi9jb3JlL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7UGFyc2VyfSBmcm9tIFwiLi4vY29yZS9wYXJzZXJcIjtcbmltcG9ydCB7dGhyb3dSdW50aW1lRXJyb3J9IGZyb20gXCIuLi9jb3JlL2Vycm9yc1wiO1xuaW1wb3J0IHR5cGUge1NvdXJjZX0gZnJvbSBcIi4uL2NvcmUvcGFyc2VyX3NvdXJjZS50c1wiO1xuXG5leHBvcnQgY2xhc3MgTmF0aXZlQ2xhc3Mge1xuXHRuYW1lOiBzdHJpbmc7XG5cdG5hdGl2ZUluc3RhbmNlOiBhbnk7XG5cdG5hdGl2ZUNsYXNzU291cmNlOiBTb3VyY2U7XG5cdGlzQXV0b2xvYWRBYmxlOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBuYXRpdmVJbnN0YW5jZTogYW55LCBzb3VyY2U6IFNvdXJjZSkge1xuXHRcdHRoaXMubmFtZSAgICAgICAgICAgICAgPSBuYW1lO1xuXHRcdHRoaXMubmF0aXZlSW5zdGFuY2UgICAgPSBuYXRpdmVJbnN0YW5jZTtcblx0XHR0aGlzLm5hdGl2ZUNsYXNzU291cmNlID0gc291cmNlO1xuXHR9XG5cblx0Z2V0Q2xhc3NEZWZpbml0aW9uKCk6IENsYXNzRGVmaW5pdGlvbiB8IG51bGwge1xuXHRcdGNvbnN0IGFzdCA9IG5ldyBQYXJzZXIodGhpcy5uYXRpdmVDbGFzc1NvdXJjZSkucGFyc2UoKTtcblxuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChub2RlLnR5cGUgPT09IEFTVE5vZGVUeXBlLkNMQVNTKSB7XG5cdFx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUQ2xhc3NOb2RlICYmIG5vZGUubmFtZSA9PT0gdGhpcy5uYW1lKSB7XG5cdFx0XHRcdFx0Y29uc3QgY2xhc3NEZWYgPSBDbGFzc0RlZmluaXRpb24uY29uc3RydWN0RnJvbUFTVChub2RlKTtcblxuXHRcdFx0XHRcdGNsYXNzRGVmLm5hdGl2ZUluc3RhbmNlID0gdGhpcy5uYXRpdmVJbnN0YW5jZTtcblxuXHRcdFx0XHRcdHJldHVybiBjbGFzc0RlZjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRocm93UnVudGltZUVycm9yKGBDbGFzcyAke3RoaXMubmFtZX0gbm90IGZvdW5kLmAsIGFzdC5zcGFuKTtcblxuXHRcdHJldHVybiBudWxsOyAvLyBuZXZlciByZWFjaGVkXG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtBU1RBcnJheU5vZGUsIEFTVE5vZGUsIEFTVE5vZGVUeXBlLCBBU1RSZXR1cm5Ob2RlfSBmcm9tIFwiLi9hc3RcIjtcbmltcG9ydCB7R1JBTU1BUiwgVFlQRV9FTlVNfSBmcm9tIFwiLi9ncmFtbWFyLnRzXCI7XG5pbXBvcnQge0NsYXNzRGVmaW5pdGlvbiwgSW5zdGFuY2V9IGZyb20gXCIuL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge3Rocm93TmF0aXZlRXJyb3J9IGZyb20gXCIuL2Vycm9ycy50c1wiO1xuXG5pbnRlcmZhY2UgU2VyaWFsaXphdGlvbk9iamVjdCB7XG5cdFtpbmRleDogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdGNsYXNzTmFtZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGNsYXNzTmFtZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG5cdH1cblxuXHRwdWJsaWMgc2VyaWFsaXplKCk6IFNlcmlhbGl6YXRpb25PYmplY3Qge1xuXHRcdGNvbnN0IG9iamVjdDogU2VyaWFsaXphdGlvbk9iamVjdCA9IHt9O1xuXG5cdFx0b2JqZWN0W3RoaXMuY2xhc3NOYW1lXSA9IE9iamVjdFxuXHRcdFx0LmtleXModGhpcylcblx0XHRcdC5maWx0ZXIoa2V5ID0+IGtleSAhPT0gJ2NsYXNzTmFtZScpXG5cdFx0XHQucmVkdWNlKChvYmplY3Q6IFNlcmlhbGl6YXRpb25PYmplY3QsIGtleTogc3RyaW5nKTogU2VyaWFsaXphdGlvbk9iamVjdCA9PiB7XG5cdFx0XHRcdGNvbnN0IGNvcHk6IFNlcmlhbGl6YXRpb25PYmplY3QgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzKTtcblx0XHRcdFx0b2JqZWN0W2tleV0gPSBjb3B5W2tleV07XG5cdFx0XHRcdHJldHVybiBvYmplY3Q7XG5cdFx0XHR9LCB7fSk7XG5cblx0XHRyZXR1cm4gb2JqZWN0O1xuXHR9XG5cblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHtjbGFzc05hbWU6IHRoaXMuY2xhc3NOYW1lfSwgbnVsbCwgMik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFPYmplY3RWaWV3IGV4dGVuZHMgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdHByaXZhdGUgX19pbnN0YW5jZTogSW5zdGFuY2U7XG5cblx0Y29uc3RydWN0b3IoaW5zdGFuY2U6IEluc3RhbmNlKSB7XG5cdFx0c3VwZXIoaW5zdGFuY2UuX19jbGFzc0RlZi5uYW1lKTtcblxuXHRcdHRoaXMuX19pbnN0YW5jZSA9IGluc3RhbmNlO1xuXG5cdFx0cmV0dXJuIG5ldyBQcm94eSh0aGlzLCB7XG5cdFx0XHRnZXQ6IChfOiBhbnksIG5hbWU6IHN0cmluZyk6IGFueSA9PiB7XG5cdFx0XHRcdGlmIChuYW1lIGluIHRoaXMuX19pbnN0YW5jZS5fX2luc3RhbmNlRmllbGRzKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX19pbnN0YW5jZS5fX2luc3RhbmNlRmllbGRzW25hbWVdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKG5hbWUgaW4gdGhpcy5fX2luc3RhbmNlLl9fc3RhdGljRmllbGRzKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX19pbnN0YW5jZS5fX3N0YXRpY0ZpZWxkc1tuYW1lXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChuYW1lIGluIHRoaXMpIHtcblx0XHRcdFx0XHRjb25zdCBzZWxmOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB0aGlzO1xuXHRcdFx0XHRcdHJldHVybiBzZWxmW25hbWVdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHRcdH0sXG5cblx0XHRcdHNldDogKF86IGFueSwgbmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogYW55ID0+IHtcblx0XHRcdFx0aWYgKG5hbWUgaW4gdGhpcy5fX2luc3RhbmNlLl9faW5zdGFuY2VGaWVsZHMpIHtcblx0XHRcdFx0XHR0aGlzLl9faW5zdGFuY2UuX19pbnN0YW5jZUZpZWxkc1tuYW1lXSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKG5hbWUgaW4gdGhpcy5fX2luc3RhbmNlLl9fc3RhdGljRmllbGRzKSB7XG5cdFx0XHRcdFx0dGhpcy5fX2luc3RhbmNlLl9fc3RhdGljRmllbGRzW25hbWVdID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0fSlcblx0fVxuXG5cdHB1YmxpYyBvdmVycmlkZSBzZXJpYWxpemUoKTogU2VyaWFsaXphdGlvbk9iamVjdCB7XG5cdFx0Y29uc3Qgb2JqZWN0OiBTZXJpYWxpemF0aW9uT2JqZWN0ID0ge307XG5cblx0XHRvYmplY3RbdGhpcy5jbGFzc05hbWVdID0gey4uLnRoaXMuX19pbnN0YW5jZT8uX19pbnN0YW5jZUZpZWxkc307XG5cblx0XHRyZXR1cm4gb2JqZWN0O1xuXHR9XG5cblx0cHVibGljIG92ZXJyaWRlIHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuc2VyaWFsaXplKCksIG51bGwsIDIpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXN0VmFsdWUodmFsdWU6IGFueSwgZXhwZWN0ZWQ6IGFueSA9IG51bGwpOiBhbnkge1xuXHRjb25zdCB0eXBlT2YgPSB0eXBlb2YgdmFsdWU7XG5cblx0aWYgKGV4cGVjdGVkID09PSBudWxsKSB7XG5cdFx0aWYgKHZhbHVlID09PSBHUkFNTUFSLk5VTEwpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRpZiAodmFsdWUgPT09IEdSQU1NQVIuVFJVRSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGlmICh2YWx1ZSA9PT0gR1JBTU1BUi5GQUxTRSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAodHlwZU9mID09PSAnc3RyaW5nJyAmJiB2YWx1ZS50cmltKCkgIT09ICcnICYmICFpc05hTih2YWx1ZSkpIHtcblx0XHRcdHJldHVybiBOdW1iZXIodmFsdWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRzd2l0Y2ggKGV4cGVjdGVkKSB7XG5cdFx0Y2FzZSBUWVBFX0VOVU0uU1RSSU5HOlxuXHRcdFx0cmV0dXJuIHR5cGVPZiA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IFN0cmluZyh2YWx1ZSk7XG5cblx0XHRjYXNlIFRZUEVfRU5VTS5OVU1CRVI6XG5cdFx0XHRyZXR1cm4gdHlwZU9mID09PSAnbnVtYmVyJyA/IHZhbHVlIDogTnVtYmVyKHZhbHVlKTtcblxuXHRcdGNhc2UgVFlQRV9FTlVNLkJPT0xFQU46XG5cdFx0XHRyZXR1cm4gdHlwZU9mID09PSAnYm9vbGVhbicgPyB2YWx1ZSA6IHZhbHVlID09PSAndHJ1ZSc7XG5cblx0XHRjYXNlIFRZUEVfRU5VTS5OVUxMOlxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0x5cmFTdHJpbmcodmFsdWU6IHN0cmluZyk6IEFTVE5vZGUge1xuXHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuU1RSSU5HKTtcblx0bm9kZS52YWx1ZSA9IHZhbHVlO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTHlyYU51bWJlcih2YWx1ZTogbnVtYmVyKTogQVNUTm9kZSB7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5OVU1CRVIpO1xuXHRub2RlLnZhbHVlID0gdmFsdWU7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9MeXJhQm9vbGVhbih2YWx1ZTogYm9vbGVhbik6IEFTVE5vZGUge1xuXHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuQk9PTEVBTik7XG5cdG5vZGUudmFsdWUgPSB2YWx1ZTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0x5cmFOdWxsKCk6IEFTVE5vZGUge1xuXHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuTlVMTCk7XG5cdG5vZGUudmFsdWUgPSBHUkFNTUFSLk5VTEw7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9MeXJhQXJyYXkodmFsdWVzOiBhbnlbXSk6IEFTVE5vZGUge1xuXHRjb25zdCBub2RlID0gbmV3IEFTVEFycmF5Tm9kZSgpO1xuXHRub2RlLmVsZW1lbnRzID0gdmFsdWVzLm1hcCh2YWx1ZSA9PiB0b0x5cmFWYWx1ZSh2YWx1ZSkpO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTHlyYVZhbHVlKHZhbHVlOiBhbnkpOiBBU1ROb2RlIHtcblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgQVNUTm9kZSkge1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09IFRZUEVfRU5VTS5TVFJJTkcpIHtcblx0XHRyZXR1cm4gdG9MeXJhU3RyaW5nKHZhbHVlKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09IFRZUEVfRU5VTS5OVU1CRVIpIHtcblx0XHRyZXR1cm4gdG9MeXJhTnVtYmVyKHZhbHVlKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09IFRZUEVfRU5VTS5CT09MRUFOKSB7XG5cdFx0cmV0dXJuIHRvTHlyYUJvb2xlYW4odmFsdWUpO1xuXHR9XG5cblx0aWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gdG9MeXJhTnVsbCgpO1xuXHR9XG5cblx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0cmV0dXJuIHRvTHlyYUFycmF5KHZhbHVlKTtcblx0fVxuXG5cdHRocm93TmF0aXZlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IG5hdGl2ZSBvYmplY3QgdG8gTHlyYSB2YWx1ZScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJvbUx5cmFWYWx1ZSh2YWx1ZTogYW55KTogYW55IHtcblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgQVNUTm9kZSkge1xuXHRcdHJldHVybiBjYXN0VmFsdWUodmFsdWUudmFsdWUpO1xuXHR9XG5cblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgSW5zdGFuY2UpIHtcblx0XHRpZiAodmFsdWUuX19uYXRpdmVJbnN0YW5jZSkge1xuXHRcdFx0cmV0dXJuIHZhbHVlLl9fbmF0aXZlSW5zdGFuY2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBMeXJhT2JqZWN0Vmlldyh2YWx1ZSk7XG5cdH1cblxuXHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRyZXR1cm4gdmFsdWUubWFwKGZyb21MeXJhVmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIGNhc3RWYWx1ZSh2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5WYWx1ZSh2YWx1ZTogYW55KTogQVNUUmV0dXJuTm9kZSB7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUUmV0dXJuTm9kZSgpO1xuXHRub2RlLmFyZ3VtZW50ID0gdG9MeXJhVmFsdWUodmFsdWUpO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBOYXRpdmVJbnN0YW5jZShseXJhTmF0aXZlT2JqZWN0OiBMeXJhTmF0aXZlT2JqZWN0LCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpOiBJbnN0YW5jZSB7XG5cdGlmICghb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5oYXMobHlyYU5hdGl2ZU9iamVjdC5jbGFzc05hbWUpKSB7XG5cdFx0dGhyb3dOYXRpdmVFcnJvcihgQ2xhc3MgJHtseXJhTmF0aXZlT2JqZWN0LmNsYXNzTmFtZX0gbm90IGZvdW5kLmApO1xuXHR9XG5cblx0Y29uc3QgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KGx5cmFOYXRpdmVPYmplY3QuY2xhc3NOYW1lKTtcblxuXHRjb25zdCBpbnN0YW5jZSA9IG5ldyBJbnN0YW5jZShjbGFzc0RlZilcblxuXHRpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlID0gbHlyYU5hdGl2ZU9iamVjdDtcblxuXHRyZXR1cm4gaW5zdGFuY2U7XG59XG5cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uLy4uL2NvcmUvcGFyc2VyX3NvdXJjZVwiO1xuXG5jb25zdCBDTEFTU19OQU1FID0gJ1N0cmluZyc7XG5cbmV4cG9ydCBjbGFzcyBMeXJhU3RyaW5nIGV4dGVuZHMgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdHZhbHVlOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IodmFsdWU6IHN0cmluZykge1xuXHRcdHN1cGVyKENMQVNTX05BTUUpO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0fVxuXG5cdC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcblx0dG9VcHBlckNhc2UoKTogTHlyYVN0cmluZyB7XG5cdFx0cmV0dXJuIG5ldyBMeXJhU3RyaW5nKHRoaXMudmFsdWUudG9VcHBlckNhc2UoKSk7XG5cdH1cblxuXHQvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG5cdHRvTG93ZXJDYXNlKCk6IEx5cmFTdHJpbmcge1xuXHRcdHJldHVybiBuZXcgTHlyYVN0cmluZyh0aGlzLnZhbHVlLnRvTG93ZXJDYXNlKCkpO1xuXHR9XG5cblx0b3ZlcnJpZGUgdG9TdHJpbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgU3RyaW5nVHlwZSBleHRlbmRzIE5hdGl2ZUNsYXNzIHtcblx0c3RhdGljIENMQVNTX05BTUUgPSBDTEFTU19OQU1FO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0Q0xBU1NfTkFNRSxcblx0XHRcdEx5cmFTdHJpbmcsXG5cdFx0XHRuZXcgU291cmNlKFxuXHRcdFx0XHRgXG5jbGFzcyAke0NMQVNTX05BTUV9IHtcblx0cHVibGljIGNvbnN0cnVjdG9yKHZhbHVlKTtcblx0XHRcdFx0XG5cdHB1YmxpYyB0b1VwcGVyQ2FzZSgpOiAke0NMQVNTX05BTUV9O1xuXHRcblx0cHVibGljIHRvTG93ZXJDYXNlKCk6ICR7Q0xBU1NfTkFNRX07XG5cblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZztcbn1gXG5cdFx0XHQpKTtcblxuXHRcdHRoaXMuaXNBdXRvbG9hZEFibGUgPSB0cnVlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7THlyYU5hdGl2ZU9iamVjdH0gZnJvbSBcIi4uLy4uL2NvcmUvaW50ZXJwcmV0ZXJfY29udmVyc2lvblwiO1xuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuLi8uLi9jb3JlL3BhcnNlcl9zb3VyY2VcIjtcblxuY29uc3QgQ0xBU1NfTkFNRSA9ICdTeXN0ZW0nO1xuXG5leHBvcnQgY2xhc3MgTHlyYVN5c3RlbSB7XG5cdHN0YXRpYyBhbGVydChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRhbGVydChtZXNzYWdlKTtcblx0fVxuXG5cdHN0YXRpYyBwcmludChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRjb25zb2xlLmxvZyhtZXNzYWdlKTtcblx0fVxuXG5cdHN0YXRpYyBpbmZvKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRjb25zb2xlLmluZm8odmFsdWUuc2VyaWFsaXplKCkpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zb2xlLmluZm8odmFsdWUpO1xuXHR9XG5cblx0c3RhdGljIHdhcm5pbmcodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdGNvbnNvbGUud2Fybih2YWx1ZS5zZXJpYWxpemUoKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnNvbGUud2Fybih2YWx1ZSk7XG5cdH1cblxuXHRzdGF0aWMgZXJyb3IodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IodmFsdWUuc2VyaWFsaXplKCkpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zb2xlLmVycm9yKHZhbHVlKTtcblx0fVxuXG5cdHN0YXRpYyBsb2codmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdGNvbnNvbGUubG9nKHZhbHVlLnNlcmlhbGl6ZSgpKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc29sZS5sb2codmFsdWUpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTeXN0ZW0gZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdENMQVNTX05BTUUsXG5cdFx0XHRMeXJhU3lzdGVtLFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfSB7XG5cdHB1YmxpYyBzdGF0aWMgYWxlcnQobWVzc2FnZTogc3RyaW5nKTogdm9pZDtcblx0XG5cdHB1YmxpYyBzdGF0aWMgcHJpbnQobWVzc2FnZTogc3RyaW5nKTogdm9pZDtcblx0XG5cdHB1YmxpYyBzdGF0aWMgaW5mbyh2YWx1ZTogbWl4ZWQpOiB2b2lkO1xuXHRcblx0cHVibGljIHN0YXRpYyB3YXJuaW5nKHZhbHVlOiBtaXhlZCk6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgc3RhdGljIGVycm9yKHZhbHVlOiBtaXhlZCk6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgc3RhdGljIGxvZyh2YWx1ZTogbWl4ZWQpOiB2b2lkO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IGZhbHNlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vLi4vY29yZS9wYXJzZXJfc291cmNlXCI7XG5cbmNvbnN0IENMQVNTX05BTUUgPSAnQXNzZXJ0JztcblxuY29uc3QgaWZGYWlsZWQgPSAobWVzc2FnZTogc3RyaW5nID0gJycpID0+IHtcblx0dGhyb3cgbmV3IEVycm9yKCdbQXNzZXJ0aW9uRXJyb3JdICcgKyAobWVzc2FnZSB8fCAnQXNzZXJ0aW9uIGZhaWxlZC4nKSk7XG59O1xuXG5leHBvcnQgY2xhc3MgTHlyYUFzc2VydCB7XG5cdHN0YXRpYyBpc1RydWUoY29uZGl0aW9uOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcgPSAnJykge1xuXHRcdGlmICghY29uZGl0aW9uKSB7XG5cdFx0XHRpZkZhaWxlZChtZXNzYWdlKTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgaXNGYWxzZShjb25kaXRpb246IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZyA9ICcnKSB7XG5cdFx0aWYgKGNvbmRpdGlvbikge1xuXHRcdFx0aWZGYWlsZWQobWVzc2FnZSk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBc3NlcnQgZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdENMQVNTX05BTUUsXG5cdFx0XHRMeXJhQXNzZXJ0LFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfSB7XG5cdHB1YmxpYyBzdGF0aWMgaXNUcnVlKGNvbmRpdGlvbjogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nID0gXCJcIik6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgc3RhdGljIGlzRmFsc2UoY29uZGl0aW9uOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcgPSBcIlwiKTogdm9pZDtcbn1gXG5cdFx0XHQpKTtcblxuXHRcdHRoaXMuaXNBdXRvbG9hZEFibGUgPSBmYWxzZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge05hdGl2ZUNsYXNzfSBmcm9tIFwiLi4vbmF0aXZlX2NsYXNzXCI7XG5pbXBvcnQge0x5cmFOYXRpdmVPYmplY3R9IGZyb20gXCIuLi8uLi9jb3JlL2ludGVycHJldGVyX2NvbnZlcnNpb25cIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vLi4vY29yZS9wYXJzZXJfc291cmNlXCI7XG5cbmNvbnN0IENMQVNTX05BTUUgPSAnTnVtYmVyJztcblxuZXhwb3J0IGNsYXNzIEx5cmFOdW1iZXIgZXh0ZW5kcyBMeXJhTmF0aXZlT2JqZWN0IHtcblx0dmFsdWU6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcih2YWx1ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIoQ0xBU1NfTkFNRSk7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHR9XG5cblx0b3ZlcnJpZGUgdG9TdHJpbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZS50b1N0cmluZygpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBOdW1iZXJUeXBlIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IENMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRDTEFTU19OQU1FLFxuXHRcdFx0THlyYU51bWJlcixcblx0XHRcdG5ldyBTb3VyY2UoXG5cdFx0XHRcdGBcbmNsYXNzICR7Q0xBU1NfTkFNRX0ge1xuXHRwdWJsaWMgY29uc3RydWN0b3IodmFsdWUpO1xuXG5cdHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmc7XG59YFxuXHRcdFx0KSk7XG5cblx0XHR0aGlzLmlzQXV0b2xvYWRBYmxlID0gdHJ1ZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge05hdGl2ZUNsYXNzfSBmcm9tIFwiLi4vbmF0aXZlX2NsYXNzXCI7XG5pbXBvcnQge0x5cmFOYXRpdmVPYmplY3R9IGZyb20gXCIuLi8uLi9jb3JlL2ludGVycHJldGVyX2NvbnZlcnNpb25cIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vLi4vY29yZS9wYXJzZXJfc291cmNlXCI7XG5cbmNvbnN0IEFSUkFZX0NMQVNTX05BTUUgICAgICAgICAgPSAnQXJyYXknO1xuY29uc3QgQVJSQVlfSVRFUkFUT1JfQ0xBU1NfTkFNRSA9ICdBcnJheUl0ZXJhdG9yJztcblxuZXhwb3J0IGNsYXNzIEx5cmFBcnJheSBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHR2YWx1ZXM6IGFueVtdO1xuXG5cdGNvbnN0cnVjdG9yKHZhbHVlczogYW55W10gPSBbXSkge1xuXHRcdHN1cGVyKEFSUkFZX0NMQVNTX05BTUUpO1xuXG5cdFx0dGhpcy52YWx1ZXMgPSB2YWx1ZXM7XG5cdH1cblxuXHRpdGVyYXRvcigpOiBMeXJhQXJyYXlJdGVyYXRvciB7XG5cdFx0cmV0dXJuIG5ldyBMeXJhQXJyYXlJdGVyYXRvcih0aGlzKTtcblx0fVxuXG5cdGxlbmd0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlcy5sZW5ndGg7XG5cdH1cblxuXHRwdXNoKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLnZhbHVlcy5wdXNoKHZhbHVlKTtcblx0fVxuXG5cdC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcblx0Z2V0KGluZGV4OiBudW1iZXIpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlc1tpbmRleF0gPz8gbnVsbDtcblx0fVxuXG5cdC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcblx0cmVtb3ZlQXQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMudmFsdWVzID0gdGhpcy52YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcblx0fVxuXG5cdG92ZXJyaWRlIHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0Y29uc3QgdmFsdWVzID0gdGhpc1xuXHRcdFx0LnZhbHVlc1xuXHRcdFx0Lm1hcCh2YWx1ZSA9PiB7XG5cdFx0XHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFBcnJheSkge1xuXHRcdFx0XHRcdHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdH0pO1xuXG5cdFx0cmV0dXJuIGBbJHt2YWx1ZXMuam9pbignLCAnKX1dYDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQXJyYXlUeXBlIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IEFSUkFZX0NMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRBUlJBWV9DTEFTU19OQU1FLFxuXHRcdFx0THlyYUFycmF5LFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtBUlJBWV9DTEFTU19OQU1FfTxUPiBpbXBsZW1lbnRzIEl0ZXJhYmxlPFQ+IHtcblx0cHVibGljIGNvbnN0cnVjdG9yKHZhbHVlcyA9IFtdKTtcblx0XG5cdHB1YmxpYyBpdGVyYXRvcigpOiBJdGVyYXRvcjxUPjtcblx0XG5cdHB1YmxpYyBsZW5ndGgoKTogbnVtYmVyO1xuXHRcblx0cHVibGljIHB1c2godmFsdWU6IFQpOiB2b2lkO1xuXHRcblx0cHVibGljIGdldChpbmRleDogbnVtYmVyKTogVD87XG5cdFxuXHRwdWJsaWMgcmVtb3ZlQXQoaW5kZXg6IG51bWJlcik6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFBcnJheUl0ZXJhdG9yIGV4dGVuZHMgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdHZhbHVlczogYW55W107XG5cdGluZGV4OiBudW1iZXIgPSAwO1xuXG5cdGNvbnN0cnVjdG9yKGFycmF5OiBMeXJhQXJyYXkpIHtcblx0XHRzdXBlcihBUlJBWV9JVEVSQVRPUl9DTEFTU19OQU1FKTtcblxuXHRcdHRoaXMudmFsdWVzID0gYXJyYXkudmFsdWVzO1xuXHR9XG5cblx0cmV3aW5kKCkge1xuXHRcdHRoaXMuaW5kZXggPSAwO1xuXHR9XG5cblx0aGFzTmV4dCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pbmRleCA8IHRoaXMudmFsdWVzLmxlbmd0aDtcblx0fVxuXG5cdG5leHQoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaW5kZXggKyAxID4gdGhpcy52YWx1ZXMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5pbmRleCsrO1xuXHR9XG5cblx0Ly8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuXHRwcmV2aW91cygpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pbmRleCArIDEgPCAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5pbmRleC0tO1xuXHR9XG5cblx0Ly8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuXHRrZXkoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5pbmRleDtcblx0fVxuXG5cdGN1cnJlbnQoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXNbdGhpcy5pbmRleF07XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFycmF5SXRlcmF0b3JUeXBlIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IEFSUkFZX0lURVJBVE9SX0NMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRBUlJBWV9JVEVSQVRPUl9DTEFTU19OQU1FLFxuXHRcdFx0THlyYUFycmF5LFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtBUlJBWV9JVEVSQVRPUl9DTEFTU19OQU1FfTxUPiBpbXBsZW1lbnRzIEl0ZXJhdG9yPFQ+IHtcblx0cHVibGljIGNvbnN0cnVjdG9yKGFycmF5OiBBcnJheTxUPik7XG5cdFxuXHRwdWJsaWMgaGFzTmV4dCgpOiBib29sZWFuO1xuXHRcblx0cHVibGljIG5leHQoKTogdm9pZDtcblx0XG5cdHB1YmxpYyBwcmV2aW91cygpOiB2b2lkO1xuXHRcblx0cHVibGljIGtleSgpOiBudW1iZXI7XG5cdFxuXHRwdWJsaWMgY3VycmVudCgpOiBUO1xuXHRcblx0cHVibGljIHJld2luZCgpOiB2b2lkO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IHRydWU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4vbmF0aXZlX2NsYXNzXCI7XG5pbXBvcnQge1N0cmluZ1R5cGV9IGZyb20gXCIuL2NsYXNzZXMvc3RyaW5nXCI7XG5pbXBvcnQge1N5c3RlbX0gZnJvbSBcIi4vY2xhc3Nlcy9zeXN0ZW1cIjtcbmltcG9ydCB7QXNzZXJ0fSBmcm9tIFwiLi9jbGFzc2VzL2Fzc2VydFwiO1xuaW1wb3J0IHtOdW1iZXJUeXBlfSBmcm9tIFwiLi9jbGFzc2VzL251bWJlclwiO1xuaW1wb3J0IHtBcnJheUl0ZXJhdG9yVHlwZSwgQXJyYXlUeXBlfSBmcm9tIFwiLi9jbGFzc2VzL2FycmF5XCI7XG5cbmV4cG9ydCBjbGFzcyBOYXRpdmVDbGFzc2VzIHtcblx0Y2xhc3NlczogTWFwPHN0cmluZywgTmF0aXZlQ2xhc3M+ID0gbmV3IE1hcCgpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuY2xhc3Nlcy5zZXQoQXNzZXJ0LkNMQVNTX05BTUUsIG5ldyBBc3NlcnQoKSk7XG5cdFx0dGhpcy5jbGFzc2VzLnNldChTeXN0ZW0uQ0xBU1NfTkFNRSwgbmV3IFN5c3RlbSgpKTtcblx0XHR0aGlzLmNsYXNzZXMuc2V0KFN0cmluZ1R5cGUuQ0xBU1NfTkFNRSwgbmV3IFN0cmluZ1R5cGUoKSk7XG5cdFx0dGhpcy5jbGFzc2VzLnNldChOdW1iZXJUeXBlLkNMQVNTX05BTUUsIG5ldyBOdW1iZXJUeXBlKCkpO1xuXHRcdHRoaXMuY2xhc3Nlcy5zZXQoQXJyYXlUeXBlLkNMQVNTX05BTUUsIG5ldyBBcnJheVR5cGUoKSk7XG5cdFx0dGhpcy5jbGFzc2VzLnNldChBcnJheUl0ZXJhdG9yVHlwZS5DTEFTU19OQU1FLCBuZXcgQXJyYXlJdGVyYXRvclR5cGUoKSlcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0FTVFBhcmFtZXRlck5vZGUsIEFTVFR5cGVOb2RlfSBmcm9tIFwiLi4vY29yZS9hc3RcIjtcbmltcG9ydCB7VFlQRV9FTlVNfSBmcm9tIFwiLi4vY29yZS9ncmFtbWFyLnRzXCI7XG5pbXBvcnQge3Rocm93TmF0aXZlRXJyb3J9IGZyb20gXCIuLi9jb3JlL2Vycm9ycy50c1wiO1xuXG5leHBvcnQgY2xhc3MgTmF0aXZlRnVuY3Rpb24ge1xuXHRuYW1lOiBzdHJpbmc7XG5cdHBhcmFtZXRlck5vZGVzOiBBU1RQYXJhbWV0ZXJOb2RlW10gPSBbXTtcblx0cmV0dXJuVHlwZTogQVNUVHlwZU5vZGU7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sIHJldHVyblR5cGU6IEFTVFR5cGVOb2RlKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnBhcmFtZXRlck5vZGVzID0gcGFyYW1ldGVycztcblx0XHR0aGlzLnJldHVyblR5cGUgPSByZXR1cm5UeXBlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBOYXRpdmVGdW5jdGlvblR5cGVSZWdpc3RyeSB7XG5cdGZ1bmN0aW9uczogTWFwPHN0cmluZywgTmF0aXZlRnVuY3Rpb24+ID0gbmV3IE1hcCgpO1xuXG5cdGhhcyhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5mdW5jdGlvbnMuaGFzKG5hbWUpO1xuXHR9XG5cblx0Z2V0KG5hbWU6IHN0cmluZyk6IE5hdGl2ZUZ1bmN0aW9uIHtcblx0XHRjb25zdCBuYXRpdmVGdW5jdGlvbjogTmF0aXZlRnVuY3Rpb24gfCB1bmRlZmluZWQgPSB0aGlzLmZ1bmN0aW9ucy5nZXQobmFtZSk7XG5cdFx0aWYgKCFuYXRpdmVGdW5jdGlvbikge1xuXHRcdFx0dGhyb3dOYXRpdmVFcnJvcihgRnVuY3Rpb24gJHtuYW1lfSBub3QgZm91bmQuYCk7XG5cdFx0fVxuXHRcdHJldHVybiBuYXRpdmVGdW5jdGlvbjtcblx0fVxuXG5cdHNldChuYW1lOiBzdHJpbmcsIHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSwgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGUpOiBOYXRpdmVGdW5jdGlvblR5cGVSZWdpc3RyeSB7XG5cdFx0dGhpcy5mdW5jdGlvbnMuc2V0KG5hbWUsIG5ldyBOYXRpdmVGdW5jdGlvbihuYW1lLCBwYXJhbWV0ZXJzLCByZXR1cm5UeXBlKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE5hdGl2ZUZ1bmN0aW9ucyB7XG5cdHN0YXRpYyBQUklOVCA9ICdwcmludCc7XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj59XG5cdCAqL1xuXHRnZXRHbG9iYWxGdW5jdGlvbnMoKTogeyBba2V5OiBzdHJpbmddOiAoLi4uYXJnczogYW55W10pID0+IGFueSB9IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0W05hdGl2ZUZ1bmN0aW9ucy5QUklOVF06ICguLi5hcmdzKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHRnZXRHbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeSgpOiBOYXRpdmVGdW5jdGlvblR5cGVSZWdpc3RyeSB7XG5cdFx0Y29uc3QgZnVuY3Rpb25zID0gbmV3IE5hdGl2ZUZ1bmN0aW9uVHlwZVJlZ2lzdHJ5KCk7XG5cdFx0ZnVuY3Rpb25zLnNldChcblx0XHRcdE5hdGl2ZUZ1bmN0aW9ucy5QUklOVCxcblx0XHRcdFtwYXJhbWV0ZXIodHlwZShUWVBFX0VOVU0uU1RSSU5HKSwgJ21lc3NhZ2UnKV0sXG5cdFx0XHR0eXBlKFRZUEVfRU5VTS5WT0lEKVxuXHRcdClcblxuXHRcdHJldHVybiBmdW5jdGlvbnM7XG5cdH1cbn1cblxuZnVuY3Rpb24gdHlwZShuYW1lOiBzdHJpbmcsIG51bGxhYmxlID0gZmFsc2UpOiBBU1RUeXBlTm9kZSB7XG5cdHJldHVybiBuZXcgQVNUVHlwZU5vZGUoQVNUVHlwZU5vZGUuS0lORF9TSU1QTEUsIG5hbWUsIG51bGxhYmxlKTtcbn1cblxuZnVuY3Rpb24gcGFyYW1ldGVyKHR5cGVBbm5vdGF0aW9uOiBBU1RUeXBlTm9kZSwgbmFtZTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGFueSA9IG51bGwpOiBBU1RQYXJhbWV0ZXJOb2RlIHtcblx0cmV0dXJuIG5ldyBBU1RQYXJhbWV0ZXJOb2RlKG5hbWUsIHR5cGVBbm5vdGF0aW9uLCBkZWZhdWx0VmFsdWUpO1xufVxuIiwKICAgICJpbXBvcnQge1RZUEVfRU5VTX0gZnJvbSBcIi4vZ3JhbW1hci50c1wiO1xuaW1wb3J0IHtcblx0QVNUQ2xhc3NOb2RlLFxuXHRBU1RGaWVsZE5vZGUsXG5cdEFTVEludGVyZmFjZU5vZGUsXG5cdEFTVE1ldGhvZE5vZGUsXG5cdEFTVE5vZGUsXG5cdEFTVFBhcmFtZXRlck5vZGUsXG5cdEFTVFR5cGVOb2RlXG59IGZyb20gXCIuL2FzdC50c1wiO1xuaW1wb3J0IHt0aHJvd1R5cGVFcnJvcn0gZnJvbSBcIi4vZXJyb3JzLnRzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi9pbnRlcnByZXRlcl9yZWdpc3RyeS50c1wiO1xuXG5leHBvcnQgY2xhc3MgUHJpbWl0aXZlVHlwZXMge1xuXHRzdGF0aWMgTlVNQkVSOiBzdHJpbmcgPSBUWVBFX0VOVU0uTlVNQkVSO1xuXHRzdGF0aWMgU1RSSU5HOiBzdHJpbmcgPSBUWVBFX0VOVU0uU1RSSU5HO1xuXHRzdGF0aWMgQk9PTEVBTjogc3RyaW5nID0gVFlQRV9FTlVNLkJPT0xFQU47XG5cdHN0YXRpYyBNSVhFRDogc3RyaW5nID0gVFlQRV9FTlVNLk1JWEVEO1xuXHRzdGF0aWMgTlVMTDogc3RyaW5nID0gVFlQRV9FTlVNLk5VTEw7XG5cdHN0YXRpYyBWT0lEOiBzdHJpbmcgPSBUWVBFX0VOVU0uVk9JRDtcblxuXHRzdGF0aWMgaGFzVHlwZSh0eXBlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoUHJpbWl0aXZlVHlwZXMsIHR5cGUudG9VcHBlckNhc2UoKSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFByaW1pdGl2ZUNsYXNzVHlwZXMge1xuXHRzdGF0aWMgQVJSQVk6IHN0cmluZyA9IFRZUEVfRU5VTS5BUlJBWTtcblxuXHRzdGF0aWMgQ0xBU1NOQU1FX01BUDogeyBbczogc3RyaW5nXTogc3RyaW5nOyB9ID0ge1xuXHRcdGFycmF5OiAnQXJyYXknXG5cdH1cblxuXHRzdGF0aWMgZ2V0Q2xhc3NSZWZOYW1lKHR5cGU6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuXHRcdHJldHVybiBQcmltaXRpdmVDbGFzc1R5cGVzLkNMQVNTTkFNRV9NQVBbdHlwZV0gfHwgbnVsbDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVHlwZSB7XG5cdG5hbWU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHR9XG5cblx0ZXF1YWxzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMgPT09IG90aGVyO1xuXHR9XG5cblx0YWNjZXB0cyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVxdWFscyhvdGhlcik7XG5cdH1cblxuXHR0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiBgVHlwZSgke3RoaXMubmFtZX0pYDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgUHJpbWl0aXZlVHlwZSBleHRlbmRzIFR5cGUge1xuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcblx0XHRzdXBlcihuYW1lKTtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBvdGhlciBpbnN0YW5jZW9mIFByaW1pdGl2ZVR5cGVcblx0XHRcdCYmIHRoaXMubmFtZSA9PT0gb3RoZXIubmFtZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTWl4ZWRUeXBlIGV4dGVuZHMgVHlwZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFByaW1pdGl2ZVR5cGVzLk1JWEVEKTtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBvdGhlciBpbnN0YW5jZW9mIE1peGVkVHlwZTtcblx0fVxuXG5cdG92ZXJyaWRlIGFjY2VwdHMoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFZvaWRUeXBlIGV4dGVuZHMgVHlwZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFByaW1pdGl2ZVR5cGVzLlZPSUQpO1xuXHR9XG5cblx0b3ZlcnJpZGUgZXF1YWxzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIG90aGVyIGluc3RhbmNlb2YgVm9pZFR5cGU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE51bGxUeXBlIGV4dGVuZHMgVHlwZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFByaW1pdGl2ZVR5cGVzLk5VTEwpO1xuXHR9XG5cblx0b3ZlcnJpZGUgZXF1YWxzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIG90aGVyIGluc3RhbmNlb2YgTnVsbFR5cGU7XG5cdH1cblxuXHRvdmVycmlkZSBhY2NlcHRzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIG90aGVyID09PSB0aGlzO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBOdWxsYWJsZVR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0aW5uZXI6IFR5cGU7XG5cblx0Y29uc3RydWN0b3IoaW5uZXI6IFR5cGUpIHtcblx0XHRzdXBlcihpbm5lci50b1N0cmluZygpICsgJz8nKTtcblx0XHR0aGlzLmlubmVyID0gaW5uZXI7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRpZiAob3RoZXIgPT09IFR5cGVzLk5VTEwpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChvdGhlciBpbnN0YW5jZW9mIE51bGxhYmxlVHlwZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuaW5uZXIuZXF1YWxzKG90aGVyLmlubmVyKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRvdmVycmlkZSBhY2NlcHRzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIG90aGVyID09PSBUeXBlcy5OVUxMIHx8IHRoaXMuaW5uZXIuYWNjZXB0cyhvdGhlcik7XG5cdH1cblxuXHRvdmVycmlkZSB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmlubmVyLnRvU3RyaW5nKCkgKyAnPyc7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGVzIHtcblx0c3RhdGljIE5VTUJFUjogUHJpbWl0aXZlVHlwZSA9IG5ldyBQcmltaXRpdmVUeXBlKFByaW1pdGl2ZVR5cGVzLk5VTUJFUik7XG5cdHN0YXRpYyBTVFJJTkc6IFByaW1pdGl2ZVR5cGUgPSBuZXcgUHJpbWl0aXZlVHlwZShQcmltaXRpdmVUeXBlcy5TVFJJTkcpO1xuXHRzdGF0aWMgQk9PTEVBTjogUHJpbWl0aXZlVHlwZSA9IG5ldyBQcmltaXRpdmVUeXBlKFByaW1pdGl2ZVR5cGVzLkJPT0xFQU4pO1xuXHRzdGF0aWMgTUlYRUQ6IE1peGVkVHlwZSA9IG5ldyBNaXhlZFR5cGUoKTtcblx0c3RhdGljIE5VTEw6IE51bGxUeXBlID0gbmV3IE51bGxUeXBlKCk7XG5cdHN0YXRpYyBWT0lEOiBWb2lkVHlwZSA9IG5ldyBWb2lkVHlwZSgpO1xuXG5cdHN0YXRpYyBnZXRUeXBlKG5hbWU6IHN0cmluZyk6IFR5cGUge1xuXHRcdGlmICghT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoUHJpbWl0aXZlVHlwZXMsIG5hbWUudG9VcHBlckNhc2UoKSkpIHtcblx0XHRcdHRocm93VHlwZUVycm9yKGBVbmtub3duIHByaW1pdGl2ZSB0eXBlICR7bmFtZX0uYCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdHlwZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IFR5cGVzO1xuXHRcdHJldHVybiB0eXBlc1tuYW1lLnRvVXBwZXJDYXNlKCldO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlVmFyaWFibGUgZXh0ZW5kcyBUeXBlIHtcblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIobmFtZSk7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpIHtcblx0XHRyZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBUeXBlVmFyaWFibGVcblx0XHRcdCYmIHRoaXMubmFtZSA9PT0gb3RoZXIubmFtZTtcblx0fVxuXG5cdG92ZXJyaWRlIGFjY2VwdHMoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGVQYXJhbWV0ZXJTeW1ib2wge1xuXHRuYW1lOiBzdHJpbmc7XG5cdHZhcmlhYmxlVHlwZTogVHlwZVZhcmlhYmxlO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy52YXJpYWJsZVR5cGUgPSBuZXcgVHlwZVZhcmlhYmxlKG5hbWUpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBGaWVsZFN5bWJvbCB7XG5cdG5vZGU6IEFTVEZpZWxkTm9kZTtcblx0bmFtZTogc3RyaW5nO1xuXHRmaWVsZFR5cGU6IFR5cGU7XG5cdGlzU3RhdGljOiBib29sZWFuID0gZmFsc2U7XG5cdGlzUHJpdmF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXHRpc1B1YmxpYzogYm9vbGVhbiA9IGZhbHNlO1xuXHRpc1JlYWRvbmx5OiBib29sZWFuID0gZmFsc2U7XG5cdG93bmVyOiBDbGFzc1N5bWJvbCB8IEludGVyZmFjZVN5bWJvbCB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5vZGU6IEFTVEZpZWxkTm9kZSwgZmllbGRUeXBlOiBUeXBlKSB7XG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0XHR0aGlzLm5hbWUgPSBub2RlLm5hbWU7XG5cdFx0dGhpcy5maWVsZFR5cGUgPSBmaWVsZFR5cGU7XG5cdFx0dGhpcy5pc1N0YXRpYyA9IG5vZGUubW9kaWZpZXJzLnN0YXRpYztcblx0XHR0aGlzLmlzUHJpdmF0ZSA9IG5vZGUubW9kaWZpZXJzLnByaXZhdGU7XG5cdFx0dGhpcy5pc1B1YmxpYyA9IG5vZGUubW9kaWZpZXJzLnB1YmxpYztcblx0XHR0aGlzLmlzUmVhZG9ubHkgPSBub2RlLm1vZGlmaWVycy5yZWFkb25seTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyU3ltYm9sIHtcblx0bm9kZTogQVNUUGFyYW1ldGVyTm9kZSB8IG51bGw7XG5cdG5hbWU6IHN0cmluZztcblx0cGFyYW1ldGVyVHlwZTogVHlwZTtcblx0ZGVmYXVsdFR5cGU6IFR5cGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGU6IFR5cGUsIGRlZmF1bHRWYWx1ZTogVHlwZSB8IG51bGwgPSBudWxsLCBub2RlOiBBU1RQYXJhbWV0ZXJOb2RlIHwgbnVsbCA9IG51bGwpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMucGFyYW1ldGVyVHlwZSA9IHR5cGU7XG5cdFx0dGhpcy5kZWZhdWx0VHlwZSA9IGRlZmF1bHRWYWx1ZTtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBNZXRob2RTeW1ib2wge1xuXHRuYW1lOiBzdHJpbmc7XG5cdG5vZGU6IEFTVE1ldGhvZE5vZGU7XG5cdHR5cGVQYXJhbWV0ZXJTeW1ib2xzOiBUeXBlUGFyYW1ldGVyU3ltYm9sW10gPSBbXTtcblx0cGFyYW1ldGVyU3ltYm9sczogUGFyYW1ldGVyU3ltYm9sW10gPSBbXTtcblx0cmV0dXJuVHlwZTogVHlwZSA9IFR5cGVzLk1JWEVEO1xuXHRpc1N0YXRpYzogYm9vbGVhbiA9IGZhbHNlO1xuXHRpc1ByaXZhdGU6IGJvb2xlYW4gPSBmYWxzZTtcblx0aXNQdWJsaWM6IGJvb2xlYW4gPSBmYWxzZTtcblx0b3duZXI6IENsYXNzU3ltYm9sIHwgSW50ZXJmYWNlU3ltYm9sIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3Iobm9kZTogQVNUTWV0aG9kTm9kZSkge1xuXHRcdHRoaXMubmFtZSA9IG5vZGUubmFtZTtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHRcdHRoaXMuaXNTdGF0aWMgPSBub2RlLm1vZGlmaWVycy5zdGF0aWM7XG5cdFx0dGhpcy5pc1ByaXZhdGUgPSBub2RlLm1vZGlmaWVycy5wcml2YXRlO1xuXHRcdHRoaXMuaXNQdWJsaWMgPSBub2RlLm1vZGlmaWVycy5wdWJsaWM7XG5cdH1cblxuXHRnZXQgYm9keSgpOiBBU1ROb2RlW10ge1xuXHRcdHJldHVybiB0aGlzLm5vZGUuY2hpbGRyZW47XG5cdH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBPYmplY3RTeW1ib2wge1xuXHRuYW1lOiBzdHJpbmc7XG5cdHR5cGVQYXJhbWV0ZXJTeW1ib2xzOiBUeXBlUGFyYW1ldGVyU3ltYm9sW107XG5cdHN0YXRpY0ZpZWxkU3ltYm9sczogTWFwPHN0cmluZywgRmllbGRTeW1ib2w+O1xuXHRpbnN0YW5jZU1ldGhvZFN5bWJvbHM6IE1hcDxzdHJpbmcsIE1ldGhvZFN5bWJvbD47XG59XG5cbmV4cG9ydCBjbGFzcyBDbGFzc1N5bWJvbCBpbXBsZW1lbnRzIE9iamVjdFN5bWJvbCB7XG5cdG5vZGU6IEFTVENsYXNzTm9kZTtcblx0bmFtZTogc3RyaW5nO1xuXHRzdXBlckNsYXNzOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0c3VwZXJDbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wgfCBudWxsID0gbnVsbDtcblx0dHlwZVBhcmFtZXRlclN5bWJvbHM6IFR5cGVQYXJhbWV0ZXJTeW1ib2xbXSA9IFtdO1xuXHRpbnN0YW5jZUZpZWxkU3ltYm9sczogTWFwPHN0cmluZywgRmllbGRTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRzdGF0aWNGaWVsZFN5bWJvbHM6IE1hcDxzdHJpbmcsIEZpZWxkU3ltYm9sPiA9IG5ldyBNYXAoKTtcblx0aW5zdGFuY2VNZXRob2RTeW1ib2xzOiBNYXA8c3RyaW5nLCBNZXRob2RTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRzdGF0aWNNZXRob2RTeW1ib2xzOiBNYXA8c3RyaW5nLCBNZXRob2RTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRjb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sIHwgbnVsbCA9IG51bGw7XG5cdGltcGxlbWVudHNJbnRlcmZhY2VzOiBJbnRlcmZhY2VSZWZUeXBlW10gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihub2RlOiBBU1RDbGFzc05vZGUpIHtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHRcdHRoaXMubmFtZSA9IG5vZGUubmFtZTtcblx0XHR0aGlzLnN1cGVyQ2xhc3MgPSBub2RlLnN1cGVyQ2xhc3M/Lm5hbWUgPz8gbnVsbDtcblx0fVxuXG5cdHJlc29sdmVJbnN0YW5jZUZpZWxkU3ltYm9sKG5hbWU6IHN0cmluZyk6IEZpZWxkU3ltYm9sIHwgbnVsbCB7XG5cdFx0aWYgKHRoaXMuaW5zdGFuY2VGaWVsZFN5bWJvbHMuaGFzKG5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZUZpZWxkU3ltYm9scy5nZXQobmFtZSkgfHwgbnVsbDtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zdXBlckNsYXNzKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdXBlckNsYXNzU3ltYm9sPy5yZXNvbHZlSW5zdGFuY2VGaWVsZFN5bWJvbChuYW1lKSB8fCBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmVzb2x2ZVN0YXRpY0ZpZWxkU3ltYm9sKG5hbWU6IHN0cmluZyk6IEZpZWxkU3ltYm9sIHwgbnVsbCB7XG5cdFx0aWYgKHRoaXMuc3RhdGljRmllbGRTeW1ib2xzLmhhcyhuYW1lKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGljRmllbGRTeW1ib2xzLmdldChuYW1lKSB8fCBudWxsO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnN1cGVyQ2xhc3MpIHtcblx0XHRcdHJldHVybiB0aGlzLnN1cGVyQ2xhc3NTeW1ib2w/LnJlc29sdmVTdGF0aWNGaWVsZFN5bWJvbChuYW1lKSB8fCBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2VTeW1ib2wgaW1wbGVtZW50cyBPYmplY3RTeW1ib2wge1xuXHRub2RlOiBBU1RJbnRlcmZhY2VOb2RlO1xuXHRuYW1lOiBzdHJpbmc7XG5cdHR5cGVQYXJhbWV0ZXJTeW1ib2xzOiBUeXBlUGFyYW1ldGVyU3ltYm9sW10gPSBbXTtcblx0c3RhdGljRmllbGRTeW1ib2xzOiBNYXA8c3RyaW5nLCBGaWVsZFN5bWJvbD4gPSBuZXcgTWFwKCk7XG5cdGluc3RhbmNlTWV0aG9kU3ltYm9sczogTWFwPHN0cmluZywgTWV0aG9kU3ltYm9sPiA9IG5ldyBNYXAoKTtcblx0ZXh0ZW5kc0ludGVyZmFjZXM6IEludGVyZmFjZVN5bWJvbFtdID0gW107XG5cblx0Y29uc3RydWN0b3Iobm9kZTogQVNUSW50ZXJmYWNlTm9kZSkge1xuXHRcdHRoaXMubm9kZSA9IG5vZGU7XG5cdFx0dGhpcy5uYW1lID0gbm9kZS5uYW1lO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGFzc1JlZlR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0Y2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sO1xuXHR0eXBlQXJndW1lbnRzOiBUeXBlW107XG5cblx0Y29uc3RydWN0b3IoY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sLCB0eXBlQXJndW1lbnRzOiBUeXBlW10gPSBbXSkge1xuXHRcdHN1cGVyKENsYXNzUmVmVHlwZS5mb3JtYXRTeW1ib2xOYW1lKGNsYXNzU3ltYm9sLm5hbWUsIHR5cGVBcmd1bWVudHMpKTtcblx0XHR0aGlzLmNsYXNzU3ltYm9sID0gY2xhc3NTeW1ib2w7XG5cdFx0dGhpcy50eXBlQXJndW1lbnRzID0gdHlwZUFyZ3VtZW50cztcblx0fVxuXG5cdHN0YXRpYyBmb3JtYXRTeW1ib2xOYW1lKG5hbWU6IHN0cmluZywgdHlwZUFyZ3VtZW50czogVHlwZVtdKSB7XG5cdFx0aWYgKHR5cGVBcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gYGNsYXNzUmVmVHlwZSgke25hbWV9KWA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGBjbGFzc1JlZlR5cGUoJHtuYW1lfTwke3R5cGVBcmd1bWVudHMubWFwKHR5cGUgPT4gdHlwZS50b1N0cmluZygpKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oJywgJyl9PilgO1xuXHR9XG5cblx0b3ZlcnJpZGUgZXF1YWxzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIChvdGhlciBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZVxuXHRcdFx0JiYgb3RoZXIuY2xhc3NTeW1ib2wgPT09IHRoaXMuY2xhc3NTeW1ib2wpO1xuXHR9XG5cblx0b3ZlcnJpZGUgYWNjZXB0cyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdGlmICghdGhpcy5lcXVhbHMob3RoZXIpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKG90aGVyIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0XHRpZiAodGhpcy50eXBlQXJndW1lbnRzLmxlbmd0aCAhPT0gb3RoZXIudHlwZUFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHlwZUFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBvdGhlclR5cGUgPSBvdGhlci50eXBlQXJndW1lbnRzW2ldO1xuXG5cdFx0XHRcdGlmICghb3RoZXJUeXBlIHx8ICF0aGlzLnR5cGVBcmd1bWVudHNbaV0/LmFjY2VwdHMob3RoZXJUeXBlKSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEludGVyZmFjZVJlZlR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0aW50ZXJmYWNlU3ltYm9sOiBJbnRlcmZhY2VTeW1ib2w7XG5cdHR5cGVBcmd1bWVudHM6IFR5cGVbXTtcblxuXHRjb25zdHJ1Y3RvcihpbnRlcmZhY2VTeW1ib2w6IEludGVyZmFjZVN5bWJvbCwgdHlwZUFyZ3VtZW50czogVHlwZVtdID0gW10pIHtcblx0XHRzdXBlcihJbnRlcmZhY2VSZWZUeXBlLmZvcm1hdFN5bWJvbE5hbWUoaW50ZXJmYWNlU3ltYm9sLm5hbWUsIHR5cGVBcmd1bWVudHMpKTtcblx0XHR0aGlzLmludGVyZmFjZVN5bWJvbCA9IGludGVyZmFjZVN5bWJvbDtcblx0XHR0aGlzLnR5cGVBcmd1bWVudHMgPSB0eXBlQXJndW1lbnRzO1xuXHR9XG5cblx0c3RhdGljIGZvcm1hdFN5bWJvbE5hbWUobmFtZTogc3RyaW5nLCB0eXBlQXJndW1lbnRzOiBUeXBlW10pOiBzdHJpbmcge1xuXHRcdGlmICh0eXBlQXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIGBpbnRlcmZhY2VSZWZUeXBlKCR7bmFtZX0pYDtcblx0XHR9XG5cblx0XHRyZXR1cm4gYGludGVyZmFjZVJlZlR5cGUoJHtuYW1lfTwke3R5cGVBcmd1bWVudHMubWFwKHR5cGUgPT4gdHlwZS50b1N0cmluZygpKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKCcsICcpfT4pYDtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAob3RoZXIgaW5zdGFuY2VvZiBJbnRlcmZhY2VSZWZUeXBlXG5cdFx0XHQmJiBvdGhlci5pbnRlcmZhY2VTeW1ib2wgPT09IHRoaXMuaW50ZXJmYWNlU3ltYm9sKTtcblx0fVxuXG5cdG92ZXJyaWRlIGFjY2VwdHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRpZiAoIXRoaXMuZXF1YWxzKG90aGVyKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmIChvdGhlciBpbnN0YW5jZW9mIEludGVyZmFjZVJlZlR5cGUpIHtcblx0XHRcdGlmICh0aGlzLnR5cGVBcmd1bWVudHMubGVuZ3RoICE9PSBvdGhlci50eXBlQXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50eXBlQXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IG90aGVyVHlwZSA9IG90aGVyLnR5cGVBcmd1bWVudHNbaV07XG5cblx0XHRcdFx0aWYgKCFvdGhlclR5cGUgfHwgIXRoaXMudHlwZUFyZ3VtZW50c1tpXT8uYWNjZXB0cyhvdGhlclR5cGUpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTGFtYmRhVHlwZSBleHRlbmRzIFR5cGUge1xuXHRwYXJhbWV0ZXJTeW1ib2xzOiBQYXJhbWV0ZXJTeW1ib2xbXSA9IFtdO1xuXHRyZXR1cm5UeXBlOiBUeXBlO1xuXG5cdGNvbnN0cnVjdG9yKHBhcmFtZXRlcnM6IFBhcmFtZXRlclN5bWJvbFtdLCByZXR1cm5UeXBlOiBUeXBlKSB7XG5cdFx0c3VwZXIoTGFtYmRhVHlwZS5jcmVhdGVTaWduYXR1cmUocGFyYW1ldGVycywgcmV0dXJuVHlwZSkpO1xuXHRcdHRoaXMucGFyYW1ldGVyU3ltYm9scyA9IHBhcmFtZXRlcnM7XG5cdFx0dGhpcy5yZXR1cm5UeXBlID0gcmV0dXJuVHlwZTtcblx0fVxuXG5cdHN0YXRpYyBjcmVhdGVTaWduYXR1cmUocGFyYW1ldGVyczogUGFyYW1ldGVyU3ltYm9sW10sIHJldHVyblR5cGU6IFR5cGUpOiBzdHJpbmcge1xuXHRcdHJldHVybiBgbGFtYmRhKCR7cGFyYW1ldGVycy5tYXAocGFyYW1ldGVyID0+IHBhcmFtZXRlci5wYXJhbWV0ZXJUeXBlLnRvU3RyaW5nKCkpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oJywgJyl9KSAtPiAke3JldHVyblR5cGUudG9TdHJpbmcoKX0pYDtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdGlmICghKG90aGVyIGluc3RhbmNlb2YgTGFtYmRhVHlwZSkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5wYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aCAhPT0gb3RoZXIucGFyYW1ldGVyU3ltYm9scy5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFyYW1ldGVyU3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3Qgb3RoZXJUeXBlID0gb3RoZXIucGFyYW1ldGVyU3ltYm9sc1tpXT8ucGFyYW1ldGVyVHlwZTtcblxuXHRcdFx0aWYgKCFvdGhlclR5cGUgfHwgIXRoaXMucGFyYW1ldGVyU3ltYm9sc1tpXT8ucGFyYW1ldGVyVHlwZS5hY2NlcHRzKG90aGVyVHlwZSkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnJldHVyblR5cGUuYWNjZXB0cyhvdGhlci5yZXR1cm5UeXBlKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVHlwZVNjb3BlIHtcblx0cGFyZW50OiBUeXBlU2NvcGUgfCBudWxsO1xuXHR0eXBlczogTWFwPHN0cmluZywgVHlwZT4gPSBuZXcgTWFwKCk7XG5cdHR5cGVCaW5kaW5nczogTWFwPHN0cmluZywgVHlwZT4gPSBuZXcgTWFwKCk7XG5cdGN1cnJlbnRPYmplY3RTeW1ib2w6IENsYXNzU3ltYm9sIHwgSW50ZXJmYWNlU3ltYm9sIHwgbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFR5cGVTY29wZSB8IG51bGwgPSBudWxsKSB7XG5cdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cdFx0dGhpcy5jdXJyZW50T2JqZWN0U3ltYm9sID0gcGFyZW50Py5jdXJyZW50T2JqZWN0U3ltYm9sID8/IG51bGw7XG5cdH1cblxuXHRkZWZpbmVUeXBlKG5hbWU6IHN0cmluZywgdHlwZTogVHlwZSk6IHZvaWQge1xuXHRcdHRoaXMudHlwZXMuc2V0KG5hbWUsIHR5cGUpO1xuXHR9XG5cblx0ZGVmaW5lVHlwZUJpbmRpbmcobmFtZTogc3RyaW5nLCB0eXBlVmFyaWFibGU6IFR5cGVWYXJpYWJsZSk6IHZvaWQge1xuXHRcdHRoaXMudHlwZUJpbmRpbmdzLnNldChuYW1lLCB0eXBlVmFyaWFibGUpO1xuXHR9XG5cblx0aGFzVHlwZShuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy50eXBlcy5oYXMobmFtZSkgfHwgdGhpcy5wYXJlbnQ/Lmhhc1R5cGUobmFtZSkgfHwgZmFsc2U7XG5cdH1cblxuXHRoYXNUeXBlQmluZGluZyhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy50eXBlQmluZGluZ3MuaGFzKG5hbWUpIHx8IHRoaXMucGFyZW50Py5oYXNUeXBlQmluZGluZyhuYW1lKSB8fCBmYWxzZTtcblx0fVxuXG5cdGdldFR5cGUobmFtZTogc3RyaW5nKTogVHlwZSB7XG5cdFx0aWYgKHRoaXMudHlwZXMuaGFzKG5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50eXBlcy5nZXQobmFtZSkgfHwgVHlwZXMuTlVMTDtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMucGFyZW50Py5nZXRUeXBlKG5hbWUpIHx8IFR5cGVzLk5VTEw7XG5cdH1cblxuXHRnZXRUeXBlQmluZGluZyhuYW1lOiBzdHJpbmcpOiBUeXBlIHtcblx0XHRpZiAodGhpcy50eXBlQmluZGluZ3MuaGFzKG5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50eXBlQmluZGluZ3MuZ2V0KG5hbWUpIHx8IFR5cGVzLk5VTEw7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnBhcmVudD8uZ2V0VHlwZUJpbmRpbmcobmFtZSkgfHwgVHlwZXMuTlVMTDtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gd3JhcFR5cGUodHlwZU5vZGU6IEFTVFR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIHNjb3BlOiBUeXBlU2NvcGUgfCBudWxsID0gbnVsbCk6IFR5cGUge1xuXHRsZXQgYmFzZVR5cGUgPSByZXNvbHZlQmFzZVR5cGUodHlwZU5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBzY29wZSk7XG5cdGlmIChiYXNlVHlwZSkge1xuXHRcdGlmICghKGJhc2VUeXBlIGluc3RhbmNlb2YgTnVsbGFibGVUeXBlKSAmJiB0eXBlTm9kZS5udWxsYWJsZSkge1xuXHRcdFx0cmV0dXJuIG5ldyBOdWxsYWJsZVR5cGUoYmFzZVR5cGUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBiYXNlVHlwZTtcblx0fVxuXG5cdHRocm93VHlwZUVycm9yKGBDb3VsZCBub3QgcmVzb2x2ZSB0eXBlICR7dHlwZU5vZGUubmFtZX0uYCwgdHlwZU5vZGUuc3Bhbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlQmFzZVR5cGUodHlwZU5vZGU6IEFTVFR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIHNjb3BlOiBUeXBlU2NvcGUgfCBudWxsID0gbnVsbCk6IFR5cGUge1xuXHRzd2l0Y2ggKHR5cGVOb2RlLmtpbmQpIHtcblx0XHRjYXNlIEFTVFR5cGVOb2RlLktJTkRfU0lNUExFOiB7XG5cdFx0XHRpZiAoc2NvcGUgJiYgc2NvcGUuaGFzVHlwZUJpbmRpbmcodHlwZU5vZGUubmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIHNjb3BlLmdldFR5cGVCaW5kaW5nKHR5cGVOb2RlLm5hbWUpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAob2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiByZXNvbHZlUmVmVHlwZSh0eXBlTm9kZSwgb2JqZWN0UmVnaXN0cnkpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoUHJpbWl0aXZlVHlwZXMuaGFzVHlwZSh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzb2x2ZVByaW1pdGl2ZVR5cGUodHlwZU5vZGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbmV3IFR5cGVWYXJpYWJsZSh0eXBlTm9kZS5uYW1lKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1RUeXBlTm9kZS5LSU5EX0dFTkVSSUM6IHtcblx0XHRcdGlmICghb2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0XHRcdHRocm93VHlwZUVycm9yKGBTeW1ib2wgJHt0eXBlTm9kZS5uYW1lfSBpcyBub3QgYSBjbGFzcyByZWZlcmVuY2UuYCwgdHlwZU5vZGUuc3Bhbik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzb2x2ZUdlbmVyaWNSZWZUeXBlKHR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeSk7XG5cdFx0fVxuXHRcdGNhc2UgQVNUVHlwZU5vZGUuS0lORF9MQU1CREE6IHtcblx0XHRcdHJldHVybiByZXNvbHZlTGFtYmRhVHlwZSh0eXBlTm9kZSwgb2JqZWN0UmVnaXN0cnkpO1xuXHRcdH1cblx0XHRkZWZhdWx0OiB7XG5cdFx0XHR0aHJvd1R5cGVFcnJvcihcblx0XHRcdFx0YEludmFsaWQgdHlwZSBhbm5vdGF0aW9uLCBraW5kICR7dHlwZU5vZGUua2luZH0uYCxcblx0XHRcdFx0dHlwZU5vZGUuc3BhblxuXHRcdFx0KTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVSZWZUeXBlKHR5cGVOb2RlOiBBU1RUeXBlTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogQ2xhc3NSZWZUeXBlIHwgSW50ZXJmYWNlUmVmVHlwZSB8IFR5cGUge1xuXHRpZiAodHlwZU5vZGUudHlwZUFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0dGhyb3dUeXBlRXJyb3IoYEdlbmVyaWMgY2xhc3MgJHt0eXBlTm9kZS5uYW1lfSBjYW5ub3QgaGF2ZSB0eXBlIGFyZ3VtZW50cy5gLCB0eXBlTm9kZS5zcGFuKTtcblx0fVxuXG5cdGlmIChvYmplY3RSZWdpc3RyeS50eXBlcy5jbGFzc1N5bWJvbHMuaGFzKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0cmV0dXJuIG5ldyBDbGFzc1JlZlR5cGUob2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2wodHlwZU5vZGUubmFtZSkpO1xuXHR9XG5cblx0aWYgKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmludGVyZmFjZVN5bWJvbHMuaGFzKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0cmV0dXJuIG5ldyBJbnRlcmZhY2VSZWZUeXBlKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldEludGVyYWNlU3ltYm9sKHR5cGVOb2RlLm5hbWUpKTtcblx0fVxuXG5cdHRocm93VHlwZUVycm9yKGBVbmtub3duIGNsYXNzIG9yIGludGVyZmFjZSAke3R5cGVOb2RlLm5hbWV9LmAsIHR5cGVOb2RlLnNwYW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUdlbmVyaWNSZWZUeXBlKHR5cGVOb2RlOiBBU1RUeXBlTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogQ2xhc3NSZWZUeXBlIHwgSW50ZXJmYWNlUmVmVHlwZSB8IFR5cGUge1xuXHRpZiAob2JqZWN0UmVnaXN0cnkudHlwZXMuY2xhc3NTeW1ib2xzLmhhcyh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdHJldHVybiBuZXcgQ2xhc3NSZWZUeXBlKFxuXHRcdFx0b2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2wodHlwZU5vZGUubmFtZSksXG5cdFx0XHR0eXBlTm9kZS50eXBlQXJndW1lbnRzLm1hcCh0eXBlQXJndW1lbnQgPT4gcmVzb2x2ZUJhc2VUeXBlKHR5cGVBcmd1bWVudCwgb2JqZWN0UmVnaXN0cnkpKVxuXHRcdCk7XG5cdH1cblxuXHRpZiAob2JqZWN0UmVnaXN0cnkudHlwZXMuaW50ZXJmYWNlU3ltYm9scy5oYXModHlwZU5vZGUubmFtZSkpIHtcblx0XHRyZXR1cm4gbmV3IEludGVyZmFjZVJlZlR5cGUoXG5cdFx0XHRvYmplY3RSZWdpc3RyeS50eXBlcy5nZXRJbnRlcmFjZVN5bWJvbCh0eXBlTm9kZS5uYW1lKSxcblx0XHRcdHR5cGVOb2RlLnR5cGVBcmd1bWVudHMubWFwKHR5cGVBcmd1bWVudCA9PiByZXNvbHZlQmFzZVR5cGUodHlwZUFyZ3VtZW50LCBvYmplY3RSZWdpc3RyeSkpXG5cdFx0KTtcblx0fVxuXG5cdHRocm93VHlwZUVycm9yKGBVbmtub3duIGNsYXNzIG9yIGludGVyZmFjZSAke3R5cGVOb2RlLm5hbWV9LmAsIHR5cGVOb2RlLnNwYW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVByaW1pdGl2ZVR5cGUodHlwZU5vZGU6IEFTVFR5cGVOb2RlKTogVHlwZSB7XG5cdHJldHVybiBUeXBlcy5nZXRUeXBlKHR5cGVOb2RlLm5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUxhbWJkYVR5cGUodHlwZU5vZGU6IEFTVFR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIHNjb3BlOiBUeXBlU2NvcGUgfCBudWxsID0gbnVsbCk6IExhbWJkYVR5cGUge1xuXHRjb25zdCBwYXJhbWV0ZXJTeW1ib2xzID0gdHlwZU5vZGUucGFyYW1ldGVyVHlwZXMubWFwKFxuXHRcdHR5cGVBbm5vdGF0aW9uID0+IHtcblx0XHRcdHJldHVybiBuZXcgUGFyYW1ldGVyU3ltYm9sKFxuXHRcdFx0XHR0eXBlQW5ub3RhdGlvbi5uYW1lLFxuXHRcdFx0XHR3cmFwVHlwZSh0eXBlQW5ub3RhdGlvbiwgb2JqZWN0UmVnaXN0cnksIHNjb3BlKVxuXHRcdFx0KTtcblx0XHR9XG5cdCk7XG5cblx0cmV0dXJuIG5ldyBMYW1iZGFUeXBlKFxuXHRcdHBhcmFtZXRlclN5bWJvbHMsXG5cdFx0dHlwZU5vZGUucmV0dXJuVHlwZVxuXHRcdFx0PyB3cmFwVHlwZSh0eXBlTm9kZS5yZXR1cm5UeXBlLCBvYmplY3RSZWdpc3RyeSwgc2NvcGUpXG5cdFx0XHQ6IFR5cGVzLk1JWEVEXG5cdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdGl0dXRlVHlwZSh0eXBlOiBUeXBlLCBzdWJzdGl0dXRpb25NYXA6IE1hcDxzdHJpbmcsIFR5cGU+KTogVHlwZSB7XG5cdGlmICh0eXBlIGluc3RhbmNlb2YgVHlwZVZhcmlhYmxlKSB7XG5cdFx0cmV0dXJuIHN1YnN0aXR1dGlvbk1hcC5nZXQodHlwZS5uYW1lKSA/PyB0eXBlO1xuXHR9XG5cblx0aWYgKHR5cGUgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUpIHtcblx0XHRyZXR1cm4gbmV3IENsYXNzUmVmVHlwZShcblx0XHRcdHR5cGUuY2xhc3NTeW1ib2wsXG5cdFx0XHR0eXBlLnR5cGVBcmd1bWVudHMubWFwKHR5cGVBcmd1bWVudCA9PiBzdWJzdGl0dXRlVHlwZSh0eXBlQXJndW1lbnQsIHN1YnN0aXR1dGlvbk1hcCkpXG5cdFx0KTtcblx0fVxuXG5cdGlmICh0eXBlIGluc3RhbmNlb2YgTnVsbGFibGVUeXBlKSB7XG5cdFx0cmV0dXJuIG5ldyBOdWxsYWJsZVR5cGUoc3Vic3RpdHV0ZVR5cGUodHlwZS5pbm5lciwgc3Vic3RpdHV0aW9uTWFwKSk7XG5cdH1cblxuXHRyZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkVHlwZVN1YnN0aXR1dGlvbk1hcCh0eXBlUGFyYW1ldGVyczogVHlwZVBhcmFtZXRlclN5bWJvbFtdLCB0eXBlQXJndW1lbnRzOiBUeXBlW10pOiBNYXA8c3RyaW5nLCBUeXBlPiB7XG5cdGNvbnN0IHN1YnN0aXR1dGlvbk1hcCA9IG5ldyBNYXAoKTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHR5cGVQYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgdHlwZVBhcmFtZXRlcjogVHlwZVBhcmFtZXRlclN5bWJvbCB8IG51bGwgPSB0eXBlUGFyYW1ldGVyc1tpXSB8fCBudWxsO1xuXHRcdGNvbnN0IHR5cGVBcmd1bWVudDogVHlwZSB8IG51bGwgPSB0eXBlQXJndW1lbnRzW2ldIHx8IG51bGw7XG5cblx0XHRpZiAodHlwZVBhcmFtZXRlciAmJiB0eXBlQXJndW1lbnQpIHtcblx0XHRcdHN1YnN0aXR1dGlvbk1hcC5zZXQodHlwZVBhcmFtZXRlci5uYW1lLCB0eXBlQXJndW1lbnQpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdWJzdGl0dXRpb25NYXA7XG59XG4iLAogICAgImltcG9ydCB7Q2xhc3NSZWZUeXBlLCBUeXBlLCBUeXBlc30gZnJvbSBcIi4vdHlwZV9vYmplY3RzLnRzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi9pbnRlcnByZXRlcl9yZWdpc3RyeS50c1wiO1xuaW1wb3J0IHt0aHJvd1J1bnRpbWVFcnJvcn0gZnJvbSBcIi4vZXJyb3JzLnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBBdXRvYm94ZWRUeXBlcyB7XG5cdHN0YXRpYyBOVU1CRVI6IHN0cmluZyA9ICdOdW1iZXInO1xuXHRzdGF0aWMgU1RSSU5HOiBzdHJpbmcgPSAnU3RyaW5nJztcblx0c3RhdGljIEJPT0xFQU46IHN0cmluZyA9ICdCb29sZWFuJztcblxuXHRzdGF0aWMgQ0xBU1NOQU1FX01BUDogeyBbczogc3RyaW5nXTogc3RyaW5nOyB9ID0ge1xuXHRcdG51bWJlcjogQXV0b2JveGVkVHlwZXMuTlVNQkVSLFxuXHRcdHN0cmluZzogQXV0b2JveGVkVHlwZXMuU1RSSU5HLFxuXHRcdGJvb2xlYW46IEF1dG9ib3hlZFR5cGVzLkJPT0xFQU5cblx0fTtcblxuXHRzdGF0aWMgZ2V0Q2xhc3NOYW1lKGtleTogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRjb25zdCBjbGFzc05hbWUgPSBBdXRvYm94ZWRUeXBlcy5DTEFTU05BTUVfTUFQW2tleV07XG5cdFx0aWYgKCFjbGFzc05hbWUpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBObyBjbGFzcyBmb3VuZCBmb3IgcHJpbWl0aXZlIHR5cGUgJHtrZXl9LmApO1xuXHRcdH1cblx0XHRyZXR1cm4gY2xhc3NOYW1lO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvYm94aW5nIHtcblx0c3RhdGljIENMQVNTTkFNRV9NQVA6IE1hcDxUeXBlLCBzdHJpbmc+ID0gbmV3IE1hcChcblx0XHRbXG5cdFx0XHRbVHlwZXMuTlVNQkVSLCBBdXRvYm94ZWRUeXBlcy5OVU1CRVJdLFxuXHRcdFx0W1R5cGVzLlNUUklORywgQXV0b2JveGVkVHlwZXMuU1RSSU5HXSxcblx0XHRcdFtUeXBlcy5CT09MRUFOLCBBdXRvYm94ZWRUeXBlcy5CT09MRUFOXVxuXHRcdF1cblx0KTtcblxuXHRzdGF0aWMgYXV0b2JveElmTmVlZGVkKG9iamVjdFR5cGU6IFR5cGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IENsYXNzUmVmVHlwZSB8IFR5cGUge1xuXHRcdGNvbnN0IGNsYXNzTmFtZSA9IEF1dG9ib3hpbmcuQ0xBU1NOQU1FX01BUC5nZXQob2JqZWN0VHlwZSk7XG5cdFx0aWYgKGNsYXNzTmFtZSkge1xuXHRcdFx0cmV0dXJuIG5ldyBDbGFzc1JlZlR5cGUob2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2woY2xhc3NOYW1lKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG9iamVjdFR5cGU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtDbGFzc0RlZmluaXRpb24sIENsYXNzTWV0aG9kRGVmaW5pdGlvbiwgRW52aXJvbm1lbnQsIEluc3RhbmNlLCBSZXR1cm5WYWx1ZX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB7XG5cdEFTVEFubm90YXRpb25Ob2RlLFxuXHRBU1RBcnJheU5vZGUsXG5cdEFTVEFzc2lnbm1lbnROb2RlLFxuXHRBU1RCaW5hcnlOb2RlLFxuXHRBU1RDYWxsTm9kZSxcblx0QVNUQ2xhc3NOb2RlLFxuXHRBU1RFeHByZXNzaW9uTm9kZSxcblx0QVNURm9yZWFjaE5vZGUsXG5cdEFTVElmTm9kZSxcblx0QVNUSW5kZXhOb2RlLFxuXHRBU1RMYW1iZGFOb2RlLFxuXHRBU1RNYXRjaENhc2VOb2RlLFxuXHRBU1RNYXRjaE5vZGUsXG5cdEFTVE1lbWJlck5vZGUsXG5cdEFTVE1ldGhvZE5vZGUsXG5cdEFTVE5ld05vZGUsXG5cdEFTVE5vZGUsXG5cdEFTVE5vZGVUeXBlLFxuXHRBU1RQYXJhbWV0ZXJOb2RlLFxuXHRBU1RSZXR1cm5Ob2RlLFxuXHRBU1RUeXBlTm9kZSxcblx0QVNUVW5hcnlOb2RlLFxuXHRBU1RWYXJpYWJsZU5vZGVcbn0gZnJvbSBcIi4vYXN0XCI7XG5pbXBvcnQge0dSQU1NQVIsIFRZUEVfRU5VTX0gZnJvbSBcIi4vZ3JhbW1hci50c1wiO1xuaW1wb3J0IHtOYXRpdmVDbGFzc2VzfSBmcm9tIFwiLi4vbGlicmFyeS9uYXRpdmVfY2xhc3Nlc1wiO1xuaW1wb3J0IHtOYXRpdmVGdW5jdGlvbiwgTmF0aXZlRnVuY3Rpb25zfSBmcm9tIFwiLi4vbGlicmFyeS9uYXRpdmVfZnVuY3Rpb25zXCI7XG5pbXBvcnQge2Nhc3RWYWx1ZSwgZnJvbUx5cmFWYWx1ZSwgTHlyYU5hdGl2ZU9iamVjdCwgcmV0dXJuVmFsdWUsIHdyYXBOYXRpdmVJbnN0YW5jZX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfY29udmVyc2lvblwiO1xuaW1wb3J0IHt0aHJvd1J1bnRpbWVFcnJvcn0gZnJvbSBcIi4vZXJyb3JzXCI7XG5pbXBvcnQge0F1dG9ib3hlZFR5cGVzfSBmcm9tIFwiLi9hdXRvYm94aW5nLnRzXCI7XG5pbXBvcnQge0x5cmFBcnJheX0gZnJvbSBcIi4uL2xpYnJhcnkvY2xhc3Nlcy9hcnJheVwiO1xuaW1wb3J0IHR5cGUge1NwYW59IGZyb20gXCIuL3BhcnNlcl9zb3VyY2UudHNcIjtcblxuY29uc3QgbmF0aXZlQ2xhc3NlcyA9IG5ldyBOYXRpdmVDbGFzc2VzKCk7XG5jb25zdCBuYXRpdmVGdW5jdGlvbnMgPSBuZXcgTmF0aXZlRnVuY3Rpb25zKCk7XG5jb25zdCBnbG9iYWxGdW5jdGlvbnMgPSBuYXRpdmVGdW5jdGlvbnMuZ2V0R2xvYmFsRnVuY3Rpb25zKCk7XG5jb25zdCBnbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeSA9IG5hdGl2ZUZ1bmN0aW9ucy5nZXRHbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeSgpO1xuXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RGdW5jdGlvbkNhbGwge1xuXHRub2RlOiBBU1ROb2RlO1xuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cdGZ1bmN0aW9uRW52OiBFbnZpcm9ubWVudDtcblxuXHRjb25zdHJ1Y3Rvcihub2RlOiBBU1ROb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGZ1bmN0aW9uRW52OiBFbnZpcm9ubWVudCkge1xuXHRcdHRoaXMubm9kZSA9IG5vZGU7XG5cdFx0dGhpcy5vYmplY3RSZWdpc3RyeSA9IG9iamVjdFJlZ2lzdHJ5O1xuXHRcdHRoaXMuZnVuY3Rpb25FbnYgPSBmdW5jdGlvbkVudjtcblx0fVxuXG5cdGdldEFTVENhbGxOb2RlKCk6IEFTVENhbGxOb2RlIHwgbnVsbCB7XG5cdFx0aWYgKHRoaXMubm9kZSBpbnN0YW5jZW9mIEFTVENhbGxOb2RlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5ub2RlO1xuXHRcdH1cblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBuYXRpdmUgZnVuY3Rpb24gY2FsbCAke3RoaXMubm9kZS50eXBlfS5gLCB0aGlzLm5vZGUuc3Bhbik7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7QVNUTGFtYmRhTm9kZX1cblx0ICovXG5cdGdldEFTVExhbWJkYU5vZGUoKTogQVNUTGFtYmRhTm9kZSB8IG51bGwge1xuXHRcdGlmICh0aGlzLm5vZGUgaW5zdGFuY2VvZiBBU1RMYW1iZGFOb2RlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5ub2RlO1xuXHRcdH1cblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBsYW1iZGEgY2FsbCAke3RoaXMubm9kZS50eXBlfS5gLCB0aGlzLm5vZGUuc3Bhbik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIExhbWJkYUZ1bmN0aW9uQ2FsbCBleHRlbmRzIEFic3RyYWN0RnVuY3Rpb25DYWxsIHtcblx0ZXZhbENhbGwodGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwsIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcblx0XHRjb25zdCBub2RlID0gdGhpcy5nZXRBU1RMYW1iZGFOb2RlKCk7XG5cdFx0aWYgKG5vZGUgPT09IG51bGwpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKFwiSW52YWxpZCBmdW5jdGlvbiBjYWxsLlwiKTtcblx0XHR9XG5cblx0XHRjb25zdCBjbG9zdXJlRW52ID0gbmV3IEVudmlyb25tZW50KHRoaXMuZnVuY3Rpb25FbnYpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLnBhcmFtZXRlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHBhcmFtZXRlcjogQVNUUGFyYW1ldGVyTm9kZSB8IG51bGwgPSBub2RlLnBhcmFtZXRlcnNbaV0gfHwgbnVsbDtcblx0XHRcdGlmICghcGFyYW1ldGVyKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Y2xvc3VyZUVudi5kZWZpbmUocGFyYW1ldGVyLm5hbWUsIGFyZ3NbaV0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmFsQmxvY2sobm9kZS5jaGlsZHJlbiwgdGhpcy5vYmplY3RSZWdpc3RyeSwgY2xvc3VyZUVudiwgdGhpc1ZhbHVlLCBub2RlLnJldHVyblR5cGUpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBOYXRpdmVGdW5jdGlvbkNhbGwgZXh0ZW5kcyBBYnN0cmFjdEZ1bmN0aW9uQ2FsbCB7XG5cdGV2YWxDYWxsKHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsLCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XG5cdFx0Y29uc3QgY2FsbE5vZGU6IEFTVENhbGxOb2RlIHwgbnVsbCA9IHRoaXMuZ2V0QVNUQ2FsbE5vZGUoKTtcblx0XHRpZiAoY2FsbE5vZGUgPT09IG51bGwpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKCdJbnZhbGlkIGZ1bmN0aW9uIGNhbGwuJyk7XG5cdFx0fVxuXG5cdFx0bGV0IHJlc3VsdDogYW55ID0gdGhpcy5yZXNvbHZlQ2FsbCh0aGlzVmFsdWUpW2NhbGxOb2RlLmNhbGxlZS5uYW1lXSguLi5hcmdzKTtcblx0XHRpZiAocmVzdWx0IGluc3RhbmNlb2YgTHlyYU5hdGl2ZU9iamVjdCkge1xuXHRcdFx0cmVzdWx0ID0gd3JhcE5hdGl2ZUluc3RhbmNlKHJlc3VsdCwgdGhpcy5vYmplY3RSZWdpc3RyeSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdCA9IHJldHVyblZhbHVlKHJlc3VsdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2YWxCbG9jayhcblx0XHRcdFtyZXN1bHRdLFxuXHRcdFx0dGhpcy5vYmplY3RSZWdpc3RyeSxcblx0XHRcdHRoaXMuZnVuY3Rpb25FbnYsXG5cdFx0XHR0aGlzVmFsdWUsXG5cdFx0XHR0aGlzLmxvb2t1cEZ1bmN0aW9uVHlwZShjYWxsTm9kZS5jYWxsZWUubmFtZSkucmV0dXJuVHlwZVxuXHRcdCk7XG5cdH1cblxuXHRsb29rdXBGdW5jdGlvblR5cGUobmFtZTogc3RyaW5nKTogTmF0aXZlRnVuY3Rpb24ge1xuXHRcdHJldHVybiBnbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeS5nZXQobmFtZSk7XG5cdH1cblxuXHRyZXNvbHZlQ2FsbCh0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCk6IGFueSB7XG5cdFx0Y29uc3Qgbm9kZTogQVNUQ2FsbE5vZGUgfCBudWxsID0gdGhpcy5nZXRBU1RDYWxsTm9kZSgpO1xuXHRcdGlmIChub2RlID09PSBudWxsKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihcIkludmFsaWQgZnVuY3Rpb24gY2FsbC5cIik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2YWxFeHByZXNzaW9uKG5vZGUuY2FsbGVlLCB0aGlzLm9iamVjdFJlZ2lzdHJ5LCB0aGlzLmZ1bmN0aW9uRW52LCB0aGlzVmFsdWUpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck5hdGl2ZUNsYXNzZXMob2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQpOiB2b2lkIHtcblx0Zm9yIChjb25zdCBuYXRpdmVDbGFzcyBvZiBuYXRpdmVDbGFzc2VzLmNsYXNzZXMudmFsdWVzKCkpIHtcblx0XHRpZiAobmF0aXZlQ2xhc3MuaXNBdXRvbG9hZEFibGUpIHtcblx0XHRcdGNvbnN0IGNsYXNzRGVmID0gbmF0aXZlQ2xhc3MuZ2V0Q2xhc3NEZWZpbml0aW9uKCk7XG5cdFx0XHRpZiAoY2xhc3NEZWYgPT09IG51bGwpIHtcblx0XHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoXCJDbGFzcyBkZWZpbml0aW9uIGlzIG51bGwuXCIpO1xuXHRcdFx0fVxuXHRcdFx0b2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5zZXQobmF0aXZlQ2xhc3MubmFtZSwgY2xhc3NEZWYpO1xuXHRcdFx0ZW52aXJvbm1lbnQuZGVmaW5lKG5hdGl2ZUNsYXNzLm5hbWUsIGNsYXNzRGVmKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTmF0aXZlRnVuY3Rpb25zKGVudmlyb25tZW50OiBFbnZpcm9ubWVudCk6IHZvaWQge1xuXHRmb3IgKGNvbnN0IG5hbWUgaW4gZ2xvYmFsRnVuY3Rpb25zKSB7XG5cdFx0Y29uc3QgZ2xvYmFsRnVuY3Rpb246IGFueSA9IGdsb2JhbEZ1bmN0aW9uc1tuYW1lXTtcblx0XHRpZiAoIWdsb2JhbEZ1bmN0aW9uKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihcIkdsb2JhbCBmdW5jdGlvbiBpcyBudWxsLlwiKTtcblx0XHR9XG5cdFx0ZW52aXJvbm1lbnQuZGVmaW5lKG5hbWUsIGdsb2JhbEZ1bmN0aW9ucyk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxOb2RlKG5vZGU6IEFTVE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRpZiAobm9kZS5pc0V4cHJlc3Npb24pIHtcblx0XHRyZXR1cm4gbmV3IFJldHVyblZhbHVlKGV2YWxFeHByZXNzaW9uKG5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKSk7XG5cdH1cblxuXHRzd2l0Y2ggKG5vZGUudHlwZSkge1xuXHRcdGNhc2UgQVNUTm9kZVR5cGUuUFJPR1JBTU06IHtcblx0XHRcdGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuXHRcdFx0XHRldmFsTm9kZShjaGlsZCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuSU1QT1JUOlxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuSU5URVJGQUNFOiB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5DTEFTUzoge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RDbGFzc05vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxDbGFzcyhub2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgY2xhc3Mgbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLlZBUklBQkxFOiB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVFZhcmlhYmxlTm9kZSkge1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IG5vZGUuaW5pdFxuXHRcdFx0XHRcdD8gZXZhbEV4cHJlc3Npb24obm9kZS5pbml0LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSlcblx0XHRcdFx0XHQ6IG51bGw7XG5cdFx0XHRcdGVudmlyb25tZW50LmRlZmluZShub2RlLm5hbWUsIHZhbHVlKTtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCB2YXJpYWJsZSBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlLnNwYW4pO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuSUY6IHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUSWZOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsSWYobm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgaWYgbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLk1BVENIOiB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVE1hdGNoTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbE1hdGNoKG5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIG1hdGNoIG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGUuc3Bhbik7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5GT1JFQUNIOiB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEZvcmVhY2hOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsRm9yZWFjaChub2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBmb3JlYWNoIG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGUuc3Bhbik7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5FWFBSRVNTSU9OOiB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEV4cHJlc3Npb25Ob2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsRXhwcmVzc2lvbihub2RlLmV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGV4cHJlc3Npb24gbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLlJFVFVSTjoge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RSZXR1cm5Ob2RlKSB7XG5cdFx0XHRcdGNvbnN0IHZhbHVlID0gbm9kZS5hcmd1bWVudFxuXHRcdFx0XHRcdD8gZXZhbEV4cHJlc3Npb24obm9kZS5hcmd1bWVudCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpXG5cdFx0XHRcdFx0OiBudWxsO1xuXHRcdFx0XHRyZXR1cm4gbmV3IFJldHVyblZhbHVlKHZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIHJldHVybiBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlLnNwYW4pO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGRlZmF1bHQ6IHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBVbmhhbmRsZWQgbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlRnJvbU5vZGUobm9kZTogQVNUQ2xhc3NOb2RlKTogSW5zdGFuY2Uge1xuXHRyZXR1cm4gbmV3IEluc3RhbmNlKENsYXNzRGVmaW5pdGlvbi5jb25zdHJ1Y3RGcm9tQVNUKG5vZGUpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVySW5zdGFuY2Uobm9kZTogQVNUQ2xhc3NOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpOiBJbnN0YW5jZSB7XG5cdGxldCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uO1xuXG5cdGlmIChvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmhhcyhub2RlLm5hbWUpKSB7XG5cdFx0Y2xhc3NEZWYgPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChub2RlLm5hbWUpO1xuXHR9IGVsc2Uge1xuXHRcdGNsYXNzRGVmID0gQ2xhc3NEZWZpbml0aW9uLmNvbnN0cnVjdEZyb21BU1Qobm9kZSk7XG5cblx0XHRvYmplY3RSZWdpc3RyeS5jbGFzc2VzLnNldChub2RlLm5hbWUsIGNsYXNzRGVmKTtcblx0fVxuXG5cdHJldHVybiBuZXcgSW5zdGFuY2UoY2xhc3NEZWYpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbE5hdGl2ZUluc3RhbmNlKGV4cHI6IEFTVE5ld05vZGUsIGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogSW5zdGFuY2Uge1xuXHRjb25zdCBpbnN0YW5jZTogSW5zdGFuY2UgPSBuZXcgSW5zdGFuY2UoY2xhc3NEZWYpO1xuXHRjb25zdCBjb25zdHJ1Y3RvcjogQ2xhc3NNZXRob2REZWZpbml0aW9uIHwgbnVsbCA9IGNsYXNzRGVmLmNvbnN0cnVjdG9yTWV0aG9kO1xuXHRjb25zdCBjb25zdHJ1Y3RvckVudjogRW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpO1xuXG5cdGNvbnN0IGNvbnN0cnVjdG9yQXJnczogYW55W10gPSBldmFsTWV0aG9kQXJndW1lbnRzKFxuXHRcdGV4cHIsXG5cdFx0Y29uc3RydWN0b3Jcblx0XHRcdD8gY29uc3RydWN0b3IucGFyYW1ldGVyc1xuXHRcdFx0OiBbXSxcblx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRlbnZpcm9ubWVudCxcblx0XHRpbnN0YW5jZVxuXHQpO1xuXG5cdGNvbnN0cnVjdG9yRW52LmRlZmluZShHUkFNTUFSLlRISVMsIGluc3RhbmNlKTtcblxuXHRpZiAoY2xhc3NEZWYubmF0aXZlSW5zdGFuY2UgPT09IG51bGwpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcignQ2xhc3MgaGFzIG5vIG5hdGl2ZSBpbnN0YW5jZScpO1xuXHR9XG5cblx0Y29uc3QgbmF0aXZlSW5zdGFuY2UgPSBuZXcgY2xhc3NEZWYubmF0aXZlSW5zdGFuY2UoLi4uY29uc3RydWN0b3JBcmdzLm1hcChmcm9tTHlyYVZhbHVlKSk7XG5cdGlmIChuYXRpdmVJbnN0YW5jZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlID0gbmF0aXZlSW5zdGFuY2U7XG5cdH1cblxuXHRyZXR1cm4gaW5zdGFuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsSW5zdGFuY2UoZXhwcjogQVNUTmV3Tm9kZSwgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQpOiBJbnN0YW5jZSB7XG5cdGNvbnN0IGluc3RhbmNlID0gbmV3IEluc3RhbmNlKGNsYXNzRGVmKTtcblxuXHRpZiAoY2xhc3NEZWYuY29uc3RydWN0b3JNZXRob2QpIHtcblx0XHRjb25zdCBjb25zdHJ1Y3RvciA9IGNsYXNzRGVmLmNvbnN0cnVjdG9yTWV0aG9kO1xuXHRcdGNvbnN0IGNvbnN0cnVjdG9yRW52ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblxuXHRcdGNvbnN0IGNvbnN0cnVjdG9yQXJncyA9IGV2YWxNZXRob2RBcmd1bWVudHMoZXhwcixcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yLnBhcmFtZXRlcnMsXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RSZWdpc3RyeSxcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudmlyb25tZW50LFxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UpO1xuXG5cdFx0Y29uc3RydWN0b3JFbnYuZGVmaW5lKEdSQU1NQVIuVEhJUywgaW5zdGFuY2UpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb25zdHJ1Y3RvckFyZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHBhcmFtZXRlcjogQVNUUGFyYW1ldGVyTm9kZSB8IG51bGwgPSBjb25zdHJ1Y3Rvci5wYXJhbWV0ZXJzW2ldIHx8IG51bGw7XG5cdFx0XHRpZiAocGFyYW1ldGVyKSB7XG5cdFx0XHRcdGNvbnN0cnVjdG9yRW52LmRlZmluZShwYXJhbWV0ZXIubmFtZSwgY29uc3RydWN0b3JBcmdzW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIGNvbnN0cnVjdG9yLmNoaWxkcmVuKSB7XG5cdFx0XHRldmFsTm9kZShjaGlsZCwgb2JqZWN0UmVnaXN0cnksIGNvbnN0cnVjdG9yRW52LCBpbnN0YW5jZSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGluc3RhbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbENsYXNzKG5vZGU6IEFTVENsYXNzTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQpOiB2b2lkIHtcblx0Y29uc3QgaW5zdGFuY2UgPSByZWdpc3Rlckluc3RhbmNlKG5vZGUsIG9iamVjdFJlZ2lzdHJ5KTtcblx0bGV0IHJhd1ZhbHVlO1xuXHRmb3IgKGNvbnN0IGZpZWxkIG9mIGluc3RhbmNlLl9fY2xhc3NEZWYuaW5zdGFuY2VGaWVsZHMpIHtcblx0XHRyYXdWYWx1ZSA9IGZpZWxkLmluaXRpYWxpemVyXG5cdFx0XHQ/IGV2YWxFeHByZXNzaW9uKGZpZWxkLmluaXRpYWxpemVyLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpXG5cdFx0XHQ6IG51bGw7XG5cblx0XHRpbnN0YW5jZS5fX2luc3RhbmNlRmllbGRzW2ZpZWxkLm5hbWVdID0gY2FzdFZhbHVlKHJhd1ZhbHVlLCBmaWVsZC50eXBlKTtcblx0fVxuXHRmb3IgKGNvbnN0IGZpZWxkIG9mIGluc3RhbmNlLl9fY2xhc3NEZWYuc3RhdGljRmllbGRzKSB7XG5cdFx0cmF3VmFsdWUgPSBmaWVsZC5pbml0aWFsaXplclxuXHRcdFx0PyBldmFsRXhwcmVzc2lvbihmaWVsZC5pbml0aWFsaXplciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50KVxuXHRcdFx0OiBudWxsO1xuXG5cdFx0aW5zdGFuY2UuX19zdGF0aWNGaWVsZHNbZmllbGQubmFtZV0gPSBjYXN0VmFsdWUocmF3VmFsdWUsIGZpZWxkLnR5cGUpO1xuXHR9XG5cdGVudmlyb25tZW50LmRlZmluZShub2RlLm5hbWUsIGluc3RhbmNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxOZXcoZXhwcjogQVNUTmV3Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQpOiBJbnN0YW5jZSB7XG5cdGlmICghb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5oYXMoZXhwci5uYW1lKSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBVbmtub3duIGNsYXNzICR7ZXhwci5uYW1lfS5gLCBleHByLnNwYW4pO1xuXG5cdH1cblx0Y29uc3QgY2xhc3NEZWYgPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChleHByLm5hbWUpO1xuXHRpZiAoY2xhc3NEZWYubmF0aXZlSW5zdGFuY2UpIHtcblx0XHRyZXR1cm4gZXZhbE5hdGl2ZUluc3RhbmNlKGV4cHIsIGNsYXNzRGVmLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpO1xuXHR9XG5cdHJldHVybiBldmFsSW5zdGFuY2UoZXhwciwgY2xhc3NEZWYsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsRXhwcmVzc2lvbihleHByOiBBU1ROb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0c3dpdGNoIChleHByLnR5cGUpIHtcblx0XHRjYXNlIEFTVE5vZGVUeXBlLlNUUklORzpcblx0XHRjYXNlIEFTVE5vZGVUeXBlLk5VTUJFUjpcblx0XHRjYXNlIEFTVE5vZGVUeXBlLkJPT0xFQU46IHtcblx0XHRcdHJldHVybiBleHByLnZhbHVlO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLk5VTEw6IHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLklERU5USUZJRVI6IHtcblx0XHRcdHJldHVybiBlbnZpcm9ubWVudC5nZXQoZXhwci5uYW1lKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5USElTOiB7XG5cdFx0XHRpZiAoIXRoaXNWYWx1ZSkge1xuXHRcdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgdGhpcyB1c2VkIG91dHNpZGUgb2YgbWV0aG9kLmAsIGV4cHIuc3Bhbik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpc1ZhbHVlO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkJJTkFSWToge1xuXHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RCaW5hcnlOb2RlKSB7XG5cdFx0XHRcdGNvbnN0IGxlZnQ6IGFueSA9IGNhc3RWYWx1ZShldmFsRXhwcmVzc2lvbihleHByLmxlZnQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKSlcblx0XHRcdFx0Y29uc3QgcmlnaHQ6IGFueSA9IGNhc3RWYWx1ZShldmFsRXhwcmVzc2lvbihleHByLnJpZ2h0LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSkpXG5cblx0XHRcdFx0c3dpdGNoIChleHByLm9wZXJhdG9yKSB7XG5cdFx0XHRcdFx0Y2FzZSBHUkFNTUFSLlBMVVM6IHtcblx0XHRcdFx0XHRcdHJldHVybiBsZWZ0ICsgcmlnaHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNhc2UgR1JBTU1BUi5NSU5VUzoge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGxlZnQgLSByaWdodDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2FzZSBHUkFNTUFSLk1VTFRJUExZOiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbGVmdCAqIHJpZ2h0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjYXNlIEdSQU1NQVIuRElWSURFOiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbGVmdCAvIHJpZ2h0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjYXNlIEdSQU1NQVIuTU9EVUxVUzoge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGxlZnQgJSByaWdodDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2FzZSBHUkFNTUFSLkxFU1NfVEhBTjoge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGxlZnQgPCByaWdodDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2FzZSBHUkFNTUFSLkdSRUFURVJfVEhBTjoge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGxlZnQgPiByaWdodDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2FzZSBHUkFNTUFSLkxFU1NfRVFVQUw6IHtcblx0XHRcdFx0XHRcdHJldHVybiBsZWZ0IDw9IHJpZ2h0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjYXNlIEdSQU1NQVIuR1JFQVRFUl9FUVVBTDoge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGxlZnQgPj0gcmlnaHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNhc2UgR1JBTU1BUi5FUVVBTDoge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGxlZnQgPT09IHJpZ2h0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjYXNlIEdSQU1NQVIuTk9UX0VRVUFMOiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbGVmdCAhPT0gcmlnaHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNhc2UgR1JBTU1BUi5BTkQ6IHtcblx0XHRcdFx0XHRcdHJldHVybiBsZWZ0ICYmIHJpZ2h0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjYXNlIEdSQU1NQVIuT1I6IHtcblx0XHRcdFx0XHRcdHJldHVybiBsZWZ0IHx8IHJpZ2h0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkZWZhdWx0OiB7XG5cdFx0XHRcdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5rbm93biBvcGVyYXRvciAke2V4cHIub3BlcmF0b3J9YCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBiaW5hcnkgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gKTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLlVOQVJZOiB7XG5cdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVFVuYXJ5Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbFVuYXJ5KGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIHVuYXJ5IGV4cHJlc3Npb24gJHtleHByLnR5cGV9LmAsIGV4cHIuc3Bhbik7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5BU1NJR05NRU5UOiB7XG5cdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVEFzc2lnbm1lbnROb2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsQXNzaWduKGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGFzc2lnbm1lbnQgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuTUVNQkVSOiB7XG5cdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxNZW1iZXIoZXhwciwgZW52aXJvbm1lbnQpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgbWVtYmVyIGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkNBTEw6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQ2FsbE5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxDYWxsKGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGNhbGwgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuTkVXOiB7XG5cdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVE5ld05vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxOZXcoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50KTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGNhbGwgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuQVJSQVk6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQXJyYXlOb2RlKSB7XG5cdFx0XHRcdGNvbnN0IHZhbHVlcyA9IFtdO1xuXHRcdFx0XHRmb3IgKGNvbnN0IGVsZW0gb2YgZXhwci5lbGVtZW50cykge1xuXHRcdFx0XHRcdHZhbHVlcy5wdXNoKGV2YWxFeHByZXNzaW9uKGVsZW0sIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBjbGFzc0RlZiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KCdBcnJheScpO1xuXHRcdFx0XHRjb25zdCBpbnN0YW5jZSA9IG5ldyBJbnN0YW5jZShjbGFzc0RlZik7XG5cblx0XHRcdFx0aW5zdGFuY2UuX19uYXRpdmVJbnN0YW5jZSA9IG5ldyBjbGFzc0RlZi5uYXRpdmVJbnN0YW5jZShmcm9tTHlyYVZhbHVlKHZhbHVlcykpO1xuXG5cdFx0XHRcdHJldHVybiBpbnN0YW5jZTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGFycmF5IGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLklOREVYOiB7XG5cdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVEluZGV4Tm9kZSkge1xuXHRcdFx0XHRpZiAoIWV4cHIub2JqZWN0KSB7XG5cdFx0XHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEluZGV4IGFjY2VzcyBvbiBudWxsLmAsIGV4cHIuc3Bhbik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIWV4cHIuaW5kZXgpIHtcblx0XHRcdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgQWNjZXNzIHdpdGggdW5zcGVjaWZpYyBpbmRleC5gLCBleHByLnNwYW4pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3Qgb2JqZWN0ID0gZXZhbEV4cHJlc3Npb24oZXhwci5vYmplY3QsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHRcdFx0Y29uc3QgaW5kZXggPSBldmFsRXhwcmVzc2lvbihleHByLmluZGV4LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cblx0XHRcdFx0aWYgKCEob2JqZWN0IGluc3RhbmNlb2YgTHlyYUFycmF5IHx8IG9iamVjdC5fX25hdGl2ZUluc3RhbmNlIGluc3RhbmNlb2YgTHlyYUFycmF5KSkge1xuXHRcdFx0XHRcdHRocm93UnVudGltZUVycm9yKCdJbmRleCBhY2Nlc3Mgb24gbm9uLWFycmF5JywgZXhwci5zcGFuKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9IG9iamVjdCBpbnN0YW5jZW9mIEx5cmFBcnJheSA/IG9iamVjdCA6IG9iamVjdC5fX25hdGl2ZUluc3RhbmNlO1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IHRhcmdldC52YWx1ZXNbaW5kZXhdO1xuXG5cdFx0XHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdFx0XHRyZXR1cm4gd3JhcE5hdGl2ZUluc3RhbmNlKHZhbHVlLCBvYmplY3RSZWdpc3RyeSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBpbmRleCBleHByZXNzaW9uICR7ZXhwci50eXBlfWAsIGV4cHIuc3Bhbik7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5MQU1CREE6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTGFtYmRhTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbExhbWJkYShleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgbGFtYmRhIGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRkZWZhdWx0OiB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5oYW5kbGVkIGV4cHJlc3Npb24gJHtleHByLnR5cGV9LmAsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsTGFtYmRhKG5vZGU6IEFTVExhbWJkYU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgbGFtYmRhRW52OiBFbnZpcm9ubWVudCk6IExhbWJkYUZ1bmN0aW9uQ2FsbCB7XG5cdHJldHVybiBuZXcgTGFtYmRhRnVuY3Rpb25DYWxsKG5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBsYW1iZGFFbnYpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsQXNzaWduKGV4cHI6IEFTVEFzc2lnbm1lbnROb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0Y29uc3QgdmFsdWUgPSBldmFsRXhwcmVzc2lvbihleHByLnJpZ2h0LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cblx0aWYgKGV4cHIubGVmdC50eXBlID09PSBBU1ROb2RlVHlwZS5NRU1CRVIpIHtcblx0XHRpZiAoZXhwci5sZWZ0IGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkge1xuXHRcdFx0Y29uc3Qgb2JqZWN0ID0gZXZhbEV4cHJlc3Npb24oZXhwci5sZWZ0Lm9iamVjdCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXG5cdFx0XHRpZiAoZXhwci5sZWZ0Lm9iamVjdC50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0XHRcdG9iamVjdC5fX3N0YXRpY0ZpZWxkc1tleHByLmxlZnQucHJvcGVydHldID0gdmFsdWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvYmplY3QuX19pbnN0YW5jZUZpZWxkc1tleHByLmxlZnQucHJvcGVydHldID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIG1lbWJlciBleHByZXNzaW9uICR7ZXhwci50eXBlfWAsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGVudmlyb25tZW50LnNldChleHByLmxlZnQubmFtZSwgdmFsdWUpO1xuXHR9XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxNZW1iZXIoZXhwcjogQVNUTWVtYmVyTm9kZSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogYW55IHtcblx0Y29uc3Qgb2JqZWN0ID0gZW52aXJvbm1lbnQuZ2V0KGV4cHIub2JqZWN0Lm5hbWUpO1xuXG5cdGlmIChleHByLnByb3BlcnR5IGluIG9iamVjdC5fX2luc3RhbmNlRmllbGRzKSB7XG5cdFx0cmV0dXJuIG9iamVjdC5fX2luc3RhbmNlRmllbGRzW2V4cHIucHJvcGVydHldO1xuXHR9XG5cblx0aWYgKGV4cHIucHJvcGVydHkgaW4gb2JqZWN0Ll9fc3RhdGljRmllbGRzKSB7XG5cdFx0cmV0dXJuIG9iamVjdC5fX3N0YXRpY0ZpZWxkc1tleHByLnByb3BlcnR5XTtcblx0fVxuXG5cdHRocm93UnVudGltZUVycm9yKGBVbmtub3duIG1lbWJlciAke2V4cHIucHJvcGVydHl9YCwgZXhwci5zcGFuKTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbENhbGwoZXhwcjogQVNUQ2FsbE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHQvLyBzdXBlciBjYWxsIGluc2lkZSBjb25zdHJ1Y3RvclxuXHRpZiAoZXhwci5jYWxsZWUudHlwZSA9PT0gQVNUTm9kZVR5cGUuSURFTlRJRklFUiAmJiBleHByLmNhbGxlZS5uYW1lID09PSBHUkFNTUFSLlNVUEVSKSB7XG5cdFx0aWYgKCF0aGlzVmFsdWUgfHwgIXRoaXNWYWx1ZS5fX2NsYXNzRGVmPy5zdXBlckNsYXNzKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcignc3VwZXIoKSB1c2VkIG91dHNpZGUgb2Ygc3ViY2xhc3MgY29uc3RydWN0b3InKTtcblx0XHR9XG5cblx0XHRjb25zdCBzdXBlckNsYXNzRGVmID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQodGhpc1ZhbHVlLl9fY2xhc3NEZWYuc3VwZXJDbGFzcyk7XG5cdFx0Y29uc3QgY29uc3RydWN0b3JNZXRob2QgPSBzdXBlckNsYXNzRGVmLmNvbnN0cnVjdG9yTWV0aG9kO1xuXG5cdFx0aWYgKCFjb25zdHJ1Y3Rvck1ldGhvZCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY29uc3RydWN0b3JFbnYgPSBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpO1xuXHRcdGNvbnN0cnVjdG9yRW52LmRlZmluZShHUkFNTUFSLlRISVMsIHRoaXNWYWx1ZSk7XG5cblx0XHRiaW5kTWV0aG9kUGFyYW1ldGVycyhleHByLFxuXHRcdCAgICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yTWV0aG9kLnBhcmFtZXRlcnMsXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgb2JqZWN0UmVnaXN0cnksXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3JFbnYsXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgZW52aXJvbm1lbnQsXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgdGhpc1ZhbHVlXG5cdFx0KTtcblxuXHRcdGZvciAoY29uc3QgY2hpbGQgb2YgY29uc3RydWN0b3JNZXRob2QuY2hpbGRyZW4pIHtcblx0XHRcdGV2YWxOb2RlKGNoaWxkLCBvYmplY3RSZWdpc3RyeSwgY29uc3RydWN0b3JFbnYsIHRoaXNWYWx1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRpZiAoZXhwci5jYWxsZWUudHlwZSA9PT0gQVNUTm9kZVR5cGUuTUVNQkVSKSB7XG5cdFx0aWYgKGV4cHIuY2FsbGVlIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkge1xuXHRcdFx0aWYgKGV4cHIuY2FsbGVlLm9iamVjdC50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0XHRcdGNvbnN0IGNsYXNzTmFtZSA9IGV4cHIuY2FsbGVlLm9iamVjdC5uYW1lO1xuXG5cdFx0XHRcdGlmIChvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmhhcyhjbGFzc05hbWUpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGV2YWxTdGF0aWNDYWxsKGV4cHIsIGNsYXNzTmFtZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZXZhbEluc3RhbmNlQ2FsbChleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gZXZhbEZ1bmN0aW9uQ2FsbChleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsRnVuY3Rpb25DYWxsKGV4cHI6IEFTVENhbGxOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKSB7XG5cdGNvbnN0IGZ1bmN0aW9uQ2FsbCA9IGV2YWxFeHByZXNzaW9uKGV4cHIuY2FsbGVlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdGNvbnN0IGFyZ3MgPSBldmFsQ2FsbEFyZ3VtZW50cyhleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cblx0aWYgKGZ1bmN0aW9uQ2FsbCBpbnN0YW5jZW9mIExhbWJkYUZ1bmN0aW9uQ2FsbCkge1xuXHRcdHJldHVybiBmdW5jdGlvbkNhbGwuZXZhbENhbGwodGhpc1ZhbHVlLCAuLi5hcmdzKTtcblx0fVxuXG5cdHJldHVybiAobmV3IE5hdGl2ZUZ1bmN0aW9uQ2FsbChleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpKS5ldmFsQ2FsbCh0aGlzVmFsdWUsIC4uLmFyZ3MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbFN0YXRpY0NhbGwoZXhwcjogQVNUQ2FsbE5vZGUsIGNsYXNzTmFtZTogc3RyaW5nLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKSB7XG5cblx0aWYgKCEoZXhwci5jYWxsZWUgaW5zdGFuY2VvZiBBU1RNZW1iZXJOb2RlKSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIG1lbWJlciBleHByZXNzaW9uICR7ZXhwci50eXBlfWAsIGV4cHIuc3Bhbik7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRjb25zdCBjbGFzc0RlZiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KGNsYXNzTmFtZSk7XG5cdGNvbnN0IG1ldGhvZCA9IGNsYXNzRGVmLnN0YXRpY01ldGhvZHNbZXhwci5jYWxsZWUucHJvcGVydHldO1xuXG5cdGlmICghbWV0aG9kKSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYFN0YXRpYyBtZXRob2QgJHtjbGFzc05hbWV9LiR7ZXhwci5jYWxsZWUucHJvcGVydHl9IG5vdCBmb3VuZGAsIGV4cHIuY2FsbGVlLnNwYW4pO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0aWYgKGNsYXNzRGVmLm5hdGl2ZUluc3RhbmNlICYmIGNsYXNzRGVmLm5hdGl2ZUluc3RhbmNlW21ldGhvZC5uYW1lXSkge1xuXHRcdGNvbnN0IGFyZ3MgPSBldmFsTWV0aG9kQXJndW1lbnRzKGV4cHIsIG1ldGhvZC5wYXJhbWV0ZXJzLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSlcblx0XHRjb25zdCByYXdBcmdzID0gYXJncy5tYXAoZnJvbUx5cmFWYWx1ZSk7XG5cdFx0Y29uc3QgcmVzdWx0ID0gY2xhc3NEZWYubmF0aXZlSW5zdGFuY2VbbWV0aG9kLm5hbWVdKC4uLnJhd0FyZ3MpO1xuXG5cdFx0aWYgKHJlc3VsdCBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdHJldHVybiB3cmFwTmF0aXZlSW5zdGFuY2UocmVzdWx0LCBvYmplY3RSZWdpc3RyeSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2YWxCbG9jayhbcmV0dXJuVmFsdWUocmVzdWx0KV0sXG5cdFx0ICAgICAgICAgICAgICAgICBvYmplY3RSZWdpc3RyeSxcblx0XHQgICAgICAgICAgICAgICAgIG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCksXG5cdFx0ICAgICAgICAgICAgICAgICB0aGlzVmFsdWUsXG5cdFx0ICAgICAgICAgICAgICAgICBtZXRob2QucmV0dXJuVHlwZVxuXHRcdCk7XG5cdH1cblxuXHRjb25zdCBtZXRob2RFbnYgPSBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpO1xuXG5cdGJpbmRNZXRob2RQYXJhbWV0ZXJzKGV4cHIsIG1ldGhvZC5wYXJhbWV0ZXJzLCBvYmplY3RSZWdpc3RyeSwgbWV0aG9kRW52LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblxuXHRyZXR1cm4gZXZhbEJsb2NrKG1ldGhvZC5jaGlsZHJlbiwgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgdGhpc1ZhbHVlLCBtZXRob2QucmV0dXJuVHlwZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsSW5zdGFuY2VDYWxsKGV4cHI6IEFTVENhbGxOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKSB7XG5cdGlmICghKGV4cHIuY2FsbGVlIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBtZW1iZXIgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Ly8gT2JqZWt0IGF1c3dlcnRlbiAodSB8IHRoaXMgfCBzdXBlcilcblx0bGV0IHRhcmdldCA9IGV2YWxFeHByZXNzaW9uKGV4cHIuY2FsbGVlLm9iamVjdCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXG5cdHRhcmdldCA9IGF1dG9Cb3hJZk5lZWRlZCh0YXJnZXQsIG9iamVjdFJlZ2lzdHJ5LCBleHByLmNhbGxlZS5zcGFuKTtcblxuXHRpZiAoIXRhcmdldCB8fCAhdGFyZ2V0Ll9fY2xhc3NEZWYpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcignSW5zdGFuY2UgY2FsbCBvbiBub24tb2JqZWN0JywgZXhwci5jYWxsZWUuc3Bhbik7XG5cdH1cblxuXHRsZXQgY2xhc3NEZWYgPSB0YXJnZXQuX19jbGFzc0RlZjtcblxuXHQvLyBzdXBlci5tZXRob2QoKVxuXHRpZiAoZXhwci5jYWxsZWUub2JqZWN0LnR5cGUgPT09IEFTVE5vZGVUeXBlLklERU5USUZJRVIgJiYgZXhwci5jYWxsZWUub2JqZWN0Lm5hbWUgPT09ICdzdXBlcicpIHtcblx0XHRjb25zdCBzdXBlck5hbWUgPSBjbGFzc0RlZi5zdXBlckNsYXNzO1xuXHRcdGlmICghc3VwZXJOYW1lKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcignc3VwZXIgdXNlZCBidXQgbm8gc3VwZXJjbGFzcycsIGV4cHIuY2FsbGVlLnNwYW4pO1xuXHRcdH1cblx0XHRjbGFzc0RlZiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KHN1cGVyTmFtZSk7XG5cdH1cblxuXG5cdGNvbnN0IG1ldGhvZCA9IHJlc29sdmVJbnN0YW5jZU1ldGhvZChjbGFzc0RlZiwgb2JqZWN0UmVnaXN0cnksIGV4cHIuY2FsbGVlLnByb3BlcnR5KTtcblx0aWYgKCFtZXRob2QpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgTWV0aG9kICR7ZXhwci5jYWxsZWUucHJvcGVydHl9IG5vdCBmb3VuZCBvbiAke2NsYXNzRGVmLm5hbWV9YCwgZXhwci5jYWxsZWUuc3Bhbik7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRjb25zdCBtZXRob2RFbnYgPSBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpO1xuXHRtZXRob2RFbnYuZGVmaW5lKEdSQU1NQVIuVEhJUywgdGFyZ2V0KTtcblxuXHRpZiAodGFyZ2V0Ll9fbmF0aXZlSW5zdGFuY2UgJiYgbWV0aG9kLm5hbWUgaW4gdGFyZ2V0Ll9fbmF0aXZlSW5zdGFuY2UpIHtcblx0XHRjb25zdCBhcmdzID0gZXZhbE1ldGhvZEFyZ3VtZW50cyhleHByLCBtZXRob2QucGFyYW1ldGVycywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdGNvbnN0IHJhd0FyZ3MgPSBhcmdzLm1hcChmcm9tTHlyYVZhbHVlKTtcblx0XHRjb25zdCByZXN1bHQgPSB0YXJnZXQuX19uYXRpdmVJbnN0YW5jZVttZXRob2QubmFtZV0oLi4ucmF3QXJncyk7XG5cblx0XHRpZiAocmVzdWx0IGluc3RhbmNlb2YgTHlyYU5hdGl2ZU9iamVjdCkge1xuXHRcdFx0cmV0dXJuIHdyYXBOYXRpdmVJbnN0YW5jZShyZXN1bHQsIG9iamVjdFJlZ2lzdHJ5KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZhbEJsb2NrKFtyZXR1cm5WYWx1ZShyZXN1bHQpXSwgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgdGFyZ2V0LCBtZXRob2QucmV0dXJuVHlwZSk7XG5cdH1cblxuXHRiaW5kTWV0aG9kUGFyYW1ldGVycyhleHByLCBtZXRob2QucGFyYW1ldGVycywgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cblx0cmV0dXJuIGV2YWxCbG9jayhtZXRob2QuY2hpbGRyZW4sIG9iamVjdFJlZ2lzdHJ5LCBtZXRob2RFbnYsIHRhcmdldCwgbWV0aG9kLnJldHVyblR5cGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUluc3RhbmNlTWV0aG9kKGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgbWV0aG9kTmFtZTogc3RyaW5nKTogQ2xhc3NNZXRob2REZWZpbml0aW9uIHwgbnVsbCB7XG5cdGlmIChjbGFzc0RlZi5pbnN0YW5jZU1ldGhvZHNbbWV0aG9kTmFtZV0pIHtcblx0XHRyZXR1cm4gY2xhc3NEZWYuaW5zdGFuY2VNZXRob2RzW21ldGhvZE5hbWVdO1xuXHR9XG5cblx0aWYgKGNsYXNzRGVmLnN1cGVyQ2xhc3MpIHtcblx0XHRjb25zdCBzdXBlckRlZiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KGNsYXNzRGVmLnN1cGVyQ2xhc3MpO1xuXHRcdHJldHVybiByZXNvbHZlSW5zdGFuY2VNZXRob2Qoc3VwZXJEZWYsIG9iamVjdFJlZ2lzdHJ5LCBtZXRob2ROYW1lKTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmluZE1ldGhvZFBhcmFtZXRlcnMoXG5cdGNhbGxOb2RlOiBBU1RDYWxsTm9kZSxcblx0cGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdLFxuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksXG5cdG1ldGhvZEVudjogRW52aXJvbm1lbnQsXG5cdGVudmlyb25tZW50OiBFbnZpcm9ubWVudCxcblx0dGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsXG4pIHtcblxuXHRjb25zdCBhcmdzID0gY2FsbE5vZGUuYXJndW1lbnRzO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtZXRlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBwYXJhbWV0ZXI6IEFTVFBhcmFtZXRlck5vZGUgfCBudWxsID0gcGFyYW1ldGVyc1tpXSB8fCBudWxsO1xuXHRcdGNvbnN0IGFyZ3VtZW50OiBhbnkgPSBhcmdzW2ldIHx8IG51bGw7XG5cblx0XHRpZiAoIXBhcmFtZXRlcikge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoJ01pc3NpbmcgcGFyYW1ldGVyIG5hbWUgaW4gbWV0aG9kIGNhbGwuJyk7XG5cdFx0fVxuXG5cdFx0bGV0IHJhd1ZhbHVlO1xuXG5cdFx0aWYgKGFyZ3VtZW50KSB7XG5cdFx0XHRyYXdWYWx1ZSA9IGV2YWxFeHByZXNzaW9uKGFyZ3VtZW50LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdFx0fSBlbHNlIGlmIChwYXJhbWV0ZXI/LmRlZmF1bHRWYWx1ZSkge1xuXHRcdFx0cmF3VmFsdWUgPSBldmFsRXhwcmVzc2lvbihwYXJhbWV0ZXIuZGVmYXVsdFZhbHVlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY2FzdGVkID0gcGFyYW1ldGVyLnR5cGVBbm5vdGF0aW9uXG5cdFx0XHQ/IGNhc3RWYWx1ZShyYXdWYWx1ZSwgcGFyYW1ldGVyLnR5cGVBbm5vdGF0aW9uLm5hbWUpXG5cdFx0XHQ6IGNhc3RWYWx1ZShyYXdWYWx1ZSwgVFlQRV9FTlVNLk1JWEVEKTtcblxuXHRcdG1ldGhvZEVudi5kZWZpbmUocGFyYW1ldGVyLm5hbWUsIGNhc3RlZCk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxDYWxsQXJndW1lbnRzKG5vZGU6IEFTVENhbGxOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55W10ge1xuXHRpZiAobm9kZS5jYWxsZWUgaW5zdGFuY2VvZiBBU1RMYW1iZGFOb2RlKSB7XG5cdFx0Y29uc3QgbGFtYmRhID0gbm9kZS5jYWxsZWU7XG5cdFx0cmV0dXJuIGV2YWxNZXRob2RBcmd1bWVudHMobm9kZSwgbGFtYmRhLnBhcmFtZXRlcnMsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0fVxuXG5cdGlmIChub2RlLmNhbGxlZS50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0cmV0dXJuIG5vZGUuYXJndW1lbnRzLm1hcChhcmd1bWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gY2FzdFZhbHVlKFxuXHRcdFx0XHRldmFsRXhwcmVzc2lvbihhcmd1bWVudCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpLFxuXHRcdFx0XHRhcmd1bWVudC50eXBlXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHR9XG5cblx0bGV0IG1vZHVsZU5hbWU6IHN0cmluZyA9ICd1bmtub3duJztcblx0bGV0IG1ldGhvZE5hbWU6IHN0cmluZyA9ICd1bmtub3duJztcblxuXHRpZiAobm9kZS5jYWxsZWUgaW5zdGFuY2VvZiBBU1RNZW1iZXJOb2RlKSB7XG5cdFx0bW9kdWxlTmFtZSA9IG5vZGUuY2FsbGVlLm9iamVjdC5uYW1lO1xuXHRcdG1ldGhvZE5hbWUgPSBub2RlLmNhbGxlZS5wcm9wZXJ0eTtcblx0fVxuXHRcblx0dGhyb3dSdW50aW1lRXJyb3IoYFVua25vd24gZnVuY3Rpb24gJHttb2R1bGVOYW1lfS4ke21ldGhvZE5hbWV9YCwgbm9kZS5zcGFuKTtcbn1cblxuZnVuY3Rpb24gZXZhbE1ldGhvZEFyZ3VtZW50cyhleHByOiBBU1RDYWxsTm9kZSB8IEFTVE5ld05vZGUsIHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueVtdIHtcblx0Y29uc3QgYXJncyA9IFtdO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHBhcmFtZXRlcjogQVNUUGFyYW1ldGVyTm9kZSB8IG51bGwgPSBwYXJhbWV0ZXJzW2ldIHx8IG51bGw7XG5cdFx0Y29uc3QgYXJndW1lbnQgPSBleHByLmFyZ3VtZW50c1tpXSB8fCBudWxsO1xuXG5cdFx0bGV0IHZhbHVlO1xuXG5cdFx0aWYgKGFyZ3VtZW50KSB7XG5cdFx0XHR2YWx1ZSA9IGV2YWxFeHByZXNzaW9uKGFyZ3VtZW50LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdFx0fSBlbHNlIGlmIChwYXJhbWV0ZXI/LmRlZmF1bHRWYWx1ZSkge1xuXHRcdFx0dmFsdWUgPSBldmFsRXhwcmVzc2lvbihwYXJhbWV0ZXIuZGVmYXVsdFZhbHVlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBbUnVudGltZUVycm9yXSBNaXNzaW5nIGFyZ3VtZW50ICcke3BhcmFtZXRlcj8ubmFtZX0nYCwgZXhwci5zcGFuKTtcblx0XHR9XG5cblx0XHRhcmdzLnB1c2godmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIGFyZ3MubWFwKChhcmd1bWVudCwgaSkgPT4ge1xuXHRcdGNvbnN0IHBhcmFtZXRlciA9IHBhcmFtZXRlcnNbaV07XG5cdFx0cmV0dXJuIHBhcmFtZXRlcj8udHlwZUFubm90YXRpb25cblx0XHRcdD8gY2FzdFZhbHVlKGFyZ3VtZW50LCBwYXJhbWV0ZXIudHlwZUFubm90YXRpb24ubmFtZSlcblx0XHRcdDogY2FzdFZhbHVlKGFyZ3VtZW50LCBUWVBFX0VOVU0uTUlYRUQpO1xuXHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxJZihub2RlOiBBU1RJZk5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRjb25zdCBjb25kaXRpb24gPSBjYXN0VmFsdWUoXG5cdFx0ZXZhbEV4cHJlc3Npb24obm9kZS5jb25kaXRpb24sIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKSxcblx0XHRUWVBFX0VOVU0uQk9PTEVBTlxuXHQpO1xuXG5cdC8vIFRIRU5cblx0aWYgKGNvbmRpdGlvbiA9PT0gdHJ1ZSkge1xuXHRcdHJldHVybiBldmFsQmxvY2sobm9kZS50aGVuLmNoaWxkcmVuLCBvYmplY3RSZWdpc3RyeSwgbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KSwgdGhpc1ZhbHVlKTtcblx0fVxuXG5cdC8vIEVMU0Vcblx0aWYgKG5vZGUuZWxzZSkge1xuXHRcdGlmIChub2RlLmVsc2UgaW5zdGFuY2VvZiBBU1RJZk5vZGUpIHtcblx0XHRcdHJldHVybiBldmFsSWYobm9kZS5lbHNlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2YWxCbG9jayhub2RlLmVsc2UuY2hpbGRyZW4sIG9iamVjdFJlZ2lzdHJ5LCBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpLCB0aGlzVmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsTWF0Y2gobm9kZTogQVNUTWF0Y2hOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0Y29uc3QgbWF0Y2hWYWx1ZSA9IGV2YWxFeHByZXNzaW9uKG5vZGUuZXhwcmVzc2lvbiwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50KTtcblxuXHRmb3IgKGNvbnN0IGNhc2VOb2RlIG9mIG5vZGUuY2FzZXMpIHtcblx0XHRpZiAoY2FzZU5vZGUudGVzdCA9PT0gbnVsbCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdGVzdFZhbHVlID0gZXZhbEV4cHJlc3Npb24oY2FzZU5vZGUudGVzdCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXG5cdFx0aWYgKHRlc3RWYWx1ZSA9PT0gbWF0Y2hWYWx1ZSkge1xuXHRcdFx0cmV0dXJuIGV2YWxNYXRjaENhc2UoY2FzZU5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRpZiAobm9kZS5kZWZhdWx0Q2FzZSkge1xuXHRcdHJldHVybiBldmFsTWF0Y2hDYXNlKG5vZGUuZGVmYXVsdENhc2UsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbE1hdGNoQ2FzZShub2RlOiBBU1RNYXRjaENhc2VOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0cmV0dXJuIGV2YWxCbG9jayhub2RlLmNoaWxkcmVuLCBvYmplY3RSZWdpc3RyeSwgbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KSwgdGhpc1ZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxGb3JlYWNoKG5vZGU6IEFTVEZvcmVhY2hOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0bGV0IGl0ZXJhYmxlID0gZXZhbEV4cHJlc3Npb24obm9kZS5pdGVyYWJsZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXG5cdGlmICghKGl0ZXJhYmxlIGluc3RhbmNlb2YgSW5zdGFuY2UpKSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYGZvcmVhY2ggZXhwZWN0cyBhbiBvYmplY3QgaW1wbGVtZW50aW5nIEl0ZXJhYmxlYCwgbm9kZS5pdGVyYWJsZS5zcGFuKTtcblx0fVxuXG5cdGNvbnN0IGl0ZXJhdG9yTWV0aG9kID0gcmVzb2x2ZUluc3RhbmNlTWV0aG9kKFxuXHRcdGl0ZXJhYmxlLl9fY2xhc3NEZWYsXG5cdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0J2l0ZXJhdG9yJ1xuXHQpO1xuXG5cdGlmICghaXRlcmF0b3JNZXRob2QpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgT2JqZWN0IGRvZXMgbm90IGltcGxlbWVudCBJdGVyYWJsZSAobWlzc2luZyBpdGVyYXRvcigpKWAsIG5vZGUuaXRlcmFibGUuc3Bhbik7XG5cdH1cblxuXHRjb25zdCBpdGVyYXRvciA9IGV2YWxJbnN0YW5jZUNhbGwoXG5cdFx0KCgpID0+IHtcblx0XHRcdHJldHVybiBuZXcgQVNUQ2FsbE5vZGUobmV3IEFTVE1lbWJlck5vZGUobm9kZS5pdGVyYWJsZSwgJ2l0ZXJhdG9yJykpO1xuXHRcdH0pKCksXG5cdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0ZW52aXJvbm1lbnQsXG5cdFx0dGhpc1ZhbHVlXG5cdCk7XG5cblx0aWYgKCEoaXRlcmF0b3IgaW5zdGFuY2VvZiBJbnN0YW5jZSkpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgaXRlcmF0b3IoKSBtdXN0IHJldHVybiBhbiBJdGVyYXRvciBvYmplY3RgLCBub2RlLml0ZXJhYmxlLnNwYW4pO1xuXHR9XG5cblx0Y2FsbEl0ZXJhdG9yTWV0aG9kKGl0ZXJhdG9yLCAncmV3aW5kJywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50KTtcblxuXHR3aGlsZSAoY2FsbEl0ZXJhdG9yTWV0aG9kKGl0ZXJhdG9yLCAnaGFzTmV4dCcsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCkpIHtcblx0XHRjb25zdCB2YWx1ZSA9IGNhbGxJdGVyYXRvck1ldGhvZChpdGVyYXRvciwgJ2N1cnJlbnQnLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpO1xuXG5cdFx0Y29uc3QgbG9vcEVudiA9IG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCk7XG5cblx0XHRsb29wRW52LmRlZmluZShub2RlLml0ZXJhdG9yLCB2YWx1ZSk7XG5cblx0XHRjb25zdCByZXN1bHQgPSBldmFsQmxvY2sobm9kZS5ib2R5LCBvYmplY3RSZWdpc3RyeSwgbG9vcEVudiwgdGhpc1ZhbHVlKTtcblx0XHRpZiAocmVzdWx0IGluc3RhbmNlb2YgUmV0dXJuVmFsdWUpIHtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXG5cdFx0Y2FsbEl0ZXJhdG9yTWV0aG9kKGl0ZXJhdG9yLCAnbmV4dCcsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCk7XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGxJdGVyYXRvck1ldGhvZChpdGVyYXRvcjogSW5zdGFuY2UsIG1ldGhvZE5hbWU6IHN0cmluZywgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQpOiBhbnkge1xuXHRyZXR1cm4gY2FsbEluc3RhbmNlTWV0aG9kKFxuXHRcdGl0ZXJhdG9yLFxuXHRcdGl0ZXJhdG9yLl9fY2xhc3NEZWYuZmluZE1ldGhvZChtZXRob2ROYW1lKSxcblx0XHRbXSxcblx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRlbnZpcm9ubWVudFxuXHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbFVuYXJ5KG5vZGU6IEFTVFVuYXJ5Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGNvbnN0IHZhbHVlID0gZXZhbEV4cHJlc3Npb24obm9kZS5hcmd1bWVudCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXG5cdHN3aXRjaCAobm9kZS5vcGVyYXRvcikge1xuXHRcdGNhc2UgR1JBTU1BUi5FWENMQU1BVElPTl9NQVJLOlxuXHRcdFx0cmV0dXJuICFjYXN0VmFsdWUodmFsdWUpO1xuXHR9XG5cblx0dGhyb3dSdW50aW1lRXJyb3IoYFVuc3VwcG9ydGVkIHVuYXJ5IG9wZXJhdG9yICR7bm9kZS5vcGVyYXRvcn1gLCBub2RlLnNwYW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEJsb2NrKGJsb2NrTm9kZXM6IEFTVE5vZGVbXSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCwgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGZvciAoY29uc3QgYmxvY2tOb2RlIG9mIGJsb2NrTm9kZXMpIHtcblx0XHRjb25zdCByZXN1bHQgPSBldmFsTm9kZShibG9ja05vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHRpZiAocmVzdWx0IGluc3RhbmNlb2YgUmV0dXJuVmFsdWUpIHtcblx0XHRcdHJldHVybiBjYXN0VmFsdWUocmVzdWx0LnZhbHVlLCByZXR1cm5UeXBlPy5uYW1lKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsQW5ub3RhdGlvblZhbHVlKG5vZGU6IEFTVE5vZGUpOiBhbnkge1xuXHRzd2l0Y2ggKG5vZGUudHlwZSkge1xuXHRcdGNhc2UgQVNUTm9kZVR5cGUuU1RSSU5HOlxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuTlVNQkVSOlxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuQk9PTEVBTjpcblx0XHRjYXNlIEFTVE5vZGVUeXBlLklERU5USUZJRVI6IHtcblx0XHRcdHJldHVybiBjYXN0VmFsdWUobm9kZS52YWx1ZSk7XG5cdFx0fVxuXG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5BUlJBWSA6IHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUQXJyYXlOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBub2RlLmVsZW1lbnRzLm1hcChjaGlsZCA9PiBldmFsQW5ub3RhdGlvblZhbHVlKGNoaWxkKSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBhbm5vdGF0aW9uIHByb3BlcnR5IHZhbHVlOiAke25vZGUudHlwZX1gLCBub2RlLnNwYW4pO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0ZGVmYXVsdDoge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVuc3VwcG9ydGVkIGFubm90YXRpb24gZXhwcmVzc2lvbjogJHtub2RlLnR5cGV9YCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxBbm5vdGF0aW9uUHJvcGVydGllcyhhbm5vdGF0aW9uOiBBU1RBbm5vdGF0aW9uTm9kZSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuXHRjb25zdCBwcm9wZXJ0aWVzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG5cblx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZU5vZGVdIG9mIGFubm90YXRpb24ucHJvcGVydGllcykge1xuXHRcdHByb3BlcnRpZXNba2V5XSA9IGV2YWxBbm5vdGF0aW9uVmFsdWUodmFsdWVOb2RlKTtcblx0fVxuXG5cdHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsbEluc3RhbmNlTWV0aG9kKGluc3RhbmNlOiBJbnN0YW5jZSwgbWV0aG9kTm9kZTogQVNUTWV0aG9kTm9kZSwgYXJnczogYW55W10sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogYW55IHtcblx0Y29uc3QgbWV0aG9kRW52ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblxuXHRtZXRob2RFbnYuZGVmaW5lKEdSQU1NQVIuVEhJUywgaW5zdGFuY2UpO1xuXG5cdGlmIChpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlICYmIG1ldGhvZE5vZGUubmFtZSBpbiBpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlKSB7XG5cdFx0Y29uc3QgcmF3QXJncyA9IGFyZ3MubWFwKGZyb21MeXJhVmFsdWUpO1xuXHRcdGNvbnN0IHJlc3VsdCA9IGluc3RhbmNlLl9fbmF0aXZlSW5zdGFuY2VbbWV0aG9kTm9kZS5uYW1lXSguLi5yYXdBcmdzKTtcblxuXHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRyZXR1cm4gd3JhcE5hdGl2ZUluc3RhbmNlKHJlc3VsdCwgb2JqZWN0UmVnaXN0cnkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmFsQmxvY2soW3JldHVyblZhbHVlKHJlc3VsdCldLCBvYmplY3RSZWdpc3RyeSwgbWV0aG9kRW52LCBpbnN0YW5jZSwgbWV0aG9kTm9kZS5yZXR1cm5UeXBlKTtcblx0fVxuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbWV0aG9kTm9kZS5wYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgcGFyYW1ldGVyOiBBU1RQYXJhbWV0ZXJOb2RlIHwgbnVsbCA9IG1ldGhvZE5vZGUucGFyYW1ldGVyc1tpXSB8fCBudWxsO1xuXHRcdGNvbnN0IGFyZ3VtZW50OiBhbnkgPSBhcmdzW2ldIHx8IG51bGw7XG5cblx0XHRpZiAoIXBhcmFtZXRlcikge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoJ01ldGhvZCBwYXJhbWV0ZXIgaXMgbnVsbC4nKTtcblx0XHR9XG5cblx0XHRsZXQgdmFsdWU7XG5cdFx0aWYgKCFhcmd1bWVudCkge1xuXHRcdFx0dmFsdWUgPSBwYXJhbWV0ZXIuZGVmYXVsdFZhbHVlXG5cdFx0XHRcdD8gZXZhbE5vZGUocGFyYW1ldGVyLmRlZmF1bHRWYWx1ZSwgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgaW5zdGFuY2UpXG5cdFx0XHRcdDogbnVsbDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFsdWUgPSBhcmdzW2ldO1xuXHRcdH1cblxuXHRcdG1ldGhvZEVudi5kZWZpbmUocGFyYW1ldGVyLm5hbWUsIHZhbHVlKTtcblx0fVxuXG5cdHJldHVybiBldmFsQmxvY2sobWV0aG9kTm9kZS5jaGlsZHJlbiwgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgaW5zdGFuY2UsIG1ldGhvZE5vZGUucmV0dXJuVHlwZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvQm94SWZOZWVkZWQodmFsdWU6IGFueSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBzcGFuOiBTcGFuIHwgbnVsbCA9IG51bGwpOiBJbnN0YW5jZSB7XG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEluc3RhbmNlKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gVFlQRV9FTlVNLk5VTUJFUikge1xuXHRcdHJldHVybiBjcmVhdGVCb3hlZEluc3RhbmNlKFxuXHRcdFx0QXV0b2JveGVkVHlwZXMuZ2V0Q2xhc3NOYW1lKFRZUEVfRU5VTS5OVU1CRVIpLFxuXHRcdFx0dmFsdWUsXG5cdFx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRcdHNwYW5cblx0XHQpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gVFlQRV9FTlVNLlNUUklORykge1xuXHRcdHJldHVybiBjcmVhdGVCb3hlZEluc3RhbmNlKFxuXHRcdFx0QXV0b2JveGVkVHlwZXMuZ2V0Q2xhc3NOYW1lKFRZUEVfRU5VTS5TVFJJTkcpLFxuXHRcdFx0dmFsdWUsXG5cdFx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRcdHNwYW5cblx0XHQpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gVFlQRV9FTlVNLkJPT0xFQU4pIHtcblx0XHRyZXR1cm4gY3JlYXRlQm94ZWRJbnN0YW5jZShcblx0XHRcdEF1dG9ib3hlZFR5cGVzLmdldENsYXNzTmFtZShUWVBFX0VOVU0uQk9PTEVBTiksXG5cdFx0XHR2YWx1ZSxcblx0XHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0c3BhblxuXHRcdCk7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCb3hlZEluc3RhbmNlKGNsYXNzTmFtZTogc3RyaW5nLCBwcmltaXRpdmVWYWx1ZTogYW55LCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIHNwYW46IFNwYW4gfCBudWxsID0gbnVsbCk6IEluc3RhbmNlIHtcblx0Y29uc3QgY2xhc3NEZWYgPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChjbGFzc05hbWUpO1xuXG5cdGlmICghY2xhc3NEZWYpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgQXV0b2JveGluZyBmYWlsZWQ6ICR7Y2xhc3NOYW1lfSBub3QgZGVmaW5lZGAsIHNwYW4pO1xuXHR9XG5cblx0Y29uc3QgaW5zdGFuY2UgPSBuZXcgSW5zdGFuY2UoY2xhc3NEZWYpO1xuXG5cdGluc3RhbmNlLl9fbmF0aXZlSW5zdGFuY2UgPSBuZXcgY2xhc3NEZWYubmF0aXZlSW5zdGFuY2UoZnJvbUx5cmFWYWx1ZShwcmltaXRpdmVWYWx1ZSkpO1xuXG5cdHJldHVybiBpbnN0YW5jZTtcbn1cbiIsCiAgICAiaW1wb3J0IHtBU1ROb2RlfSBmcm9tICcuL2FzdCc7XG5pbXBvcnQge0Vudmlyb25tZW50fSBmcm9tIFwiLi9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge2V2YWxOb2RlLCByZWdpc3Rlck5hdGl2ZUNsYXNzZXMsIHJlZ2lzdGVyTmF0aXZlRnVuY3Rpb25zfSBmcm9tIFwiLi9pbnRlcnByZXRlcl9ydW50aW1lXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuXG5leHBvcnQgY2xhc3MgSW50ZXJwcmV0ZXIge1xuXHRlbnZpcm9ubWVudDogRW52aXJvbm1lbnQ7XG5cdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeTtcblxuXHRjb25zdHJ1Y3RvcihlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSkge1xuXHRcdHRoaXMuZW52aXJvbm1lbnQgICAgPSBlbnZpcm9ubWVudDtcblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5ID0gb2JqZWN0UmVnaXN0cnk7XG5cblx0XHRyZWdpc3Rlck5hdGl2ZUNsYXNzZXMob2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50KTtcblx0XHRyZWdpc3Rlck5hdGl2ZUZ1bmN0aW9ucyhlbnZpcm9ubWVudCk7XG5cdH1cblxuXHRydW4oYXN0OiBBU1ROb2RlKSB7XG5cdFx0ZXZhbE5vZGUoYXN0LCB0aGlzLm9iamVjdFJlZ2lzdHJ5LCB0aGlzLmVudmlyb25tZW50KTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0FTVENsYXNzTm9kZSwgQVNUSW50ZXJmYWNlTm9kZSwgQVNUTm9kZX0gZnJvbSBcIi4vYXN0XCI7XG5pbXBvcnQge0NsYXNzRGVmaW5pdGlvbiwgSW50ZXJmYWNlRGVmaW5pdGlvbn0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtDbGFzc1N5bWJvbCwgSW50ZXJmYWNlU3ltYm9sfSBmcm9tIFwiLi90eXBlX29iamVjdHMudHNcIjtcbmltcG9ydCB7dGhyb3dSdW50aW1lRXJyb3J9IGZyb20gXCIuL2Vycm9ycy50c1wiO1xuXG5leHBvcnQgY2xhc3MgQ2xhc3NSZWdpc3RyeSB7XG5cdG1hcDogTWFwPHN0cmluZywgQ2xhc3NEZWZpbml0aW9uPiA9IG5ldyBNYXAoKTtcblxuXHRyZWdpc3Rlcihub2RlOiBBU1RDbGFzc05vZGUpOiB2b2lkIHtcblx0XHR0aGlzLnNldChub2RlLm5hbWUsIENsYXNzRGVmaW5pdGlvbi5jb25zdHJ1Y3RGcm9tQVNUKG5vZGUpKTtcblx0fVxuXG5cdGFsbCgpOiBJdGVyYWJsZUl0ZXJhdG9yPENsYXNzRGVmaW5pdGlvbj4ge1xuXHRcdHJldHVybiB0aGlzLm1hcC52YWx1ZXMoKTtcblx0fVxuXG5cdHNldChuYW1lOiBzdHJpbmcsIGNsYXNzRGVmaW5pdGlvbjogQ2xhc3NEZWZpbml0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5tYXAuc2V0KG5hbWUsIGNsYXNzRGVmaW5pdGlvbik7XG5cdH1cblxuXHRnZXQobmFtZTogc3RyaW5nKTogQ2xhc3NEZWZpbml0aW9uIHtcblx0XHRjb25zdCBjbGFzc0RlZiA9IHRoaXMubWFwLmdldChuYW1lKTtcblx0XHRpZiAoIWNsYXNzRGVmKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgQ2xhc3MgJHtuYW1lfSBub3QgZm91bmQuYCk7XG5cdFx0fVxuXHRcdHJldHVybiBjbGFzc0RlZjtcblx0fVxuXG5cdGhhcyhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAuaGFzKG5hbWUpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2VSZWdpc3RyeSB7XG5cdG1hcDogTWFwPHN0cmluZywgSW50ZXJmYWNlRGVmaW5pdGlvbj4gPSBuZXcgTWFwKCk7XG5cblx0cmVnaXN0ZXIobm9kZTogQVNUSW50ZXJmYWNlTm9kZSk6IHZvaWQge1xuXHRcdHRoaXMuc2V0KG5vZGUubmFtZSwgSW50ZXJmYWNlRGVmaW5pdGlvbi5jb25zdHJ1Y3RGcm9tQVNUKG5vZGUpKTtcblx0fVxuXG5cdGFsbCgpOiBJdGVyYWJsZUl0ZXJhdG9yPEludGVyZmFjZURlZmluaXRpb24+IHtcblx0XHRyZXR1cm4gdGhpcy5tYXAudmFsdWVzKCk7XG5cdH1cblxuXHRzZXQobmFtZTogc3RyaW5nLCBpbnRlcmZhY2VEZWZpbml0aW9uOiBJbnRlcmZhY2VEZWZpbml0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5tYXAuc2V0KG5hbWUsIGludGVyZmFjZURlZmluaXRpb24pO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlUmVnaXN0cnkge1xuXHRjbGFzc1N5bWJvbHM6IE1hcDxzdHJpbmcsIENsYXNzU3ltYm9sPiA9IG5ldyBNYXAoKTtcblx0aW50ZXJmYWNlU3ltYm9sczogTWFwPHN0cmluZywgSW50ZXJmYWNlU3ltYm9sPiA9IG5ldyBNYXAoKTtcblxuXHRhbGxDbGFzc1N5bWJvbHMoKTogSXRlcmFibGVJdGVyYXRvcjxDbGFzc1N5bWJvbD4ge1xuXHRcdHJldHVybiB0aGlzLmNsYXNzU3ltYm9scy52YWx1ZXMoKTtcblx0fVxuXG5cdGFsbEludGVyZmFjZVN5bWJvbHMoKTogSXRlcmFibGVJdGVyYXRvcjxJbnRlcmZhY2VTeW1ib2w+IHtcblx0XHRyZXR1cm4gdGhpcy5pbnRlcmZhY2VTeW1ib2xzLnZhbHVlcygpO1xuXHR9XG5cblx0YWRkQ2xhc3NTeW1ib2woc3ltYm9sOiBDbGFzc1N5bWJvbCk6IHZvaWQge1xuXHRcdHRoaXMuY2xhc3NTeW1ib2xzLnNldChzeW1ib2wubmFtZSwgc3ltYm9sKTtcblx0fVxuXG5cdGFkZEludGVyZmFjZVN5bWJvbChzeW1ib2w6IEludGVyZmFjZVN5bWJvbCk6IHZvaWQge1xuXHRcdHRoaXMuaW50ZXJmYWNlU3ltYm9scy5zZXQoc3ltYm9sLm5hbWUsIHN5bWJvbCk7XG5cdH1cblxuXHRoYXNTeW1ib2wobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY2xhc3NTeW1ib2xzLmhhcyhuYW1lKSB8fCB0aGlzLmludGVyZmFjZVN5bWJvbHMuaGFzKG5hbWUpO1xuXHR9XG5cblx0cHVibGljIGdldENsYXNzU3ltYm9sKG5hbWU6IHN0cmluZyk6IENsYXNzU3ltYm9sIHtcblx0XHRjb25zdCBzeW1ib2w6IENsYXNzU3ltYm9sIHwgdW5kZWZpbmVkID0gdGhpcy5jbGFzc1N5bWJvbHMuZ2V0KG5hbWUpO1xuXHRcdGlmIChzeW1ib2wgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFN5bWJvbCAke25hbWV9IG5vdCBmb3VuZC5gKTtcblx0XHR9XG5cdFx0cmV0dXJuIHN5bWJvbDtcblx0fVxuXG5cdHB1YmxpYyBnZXRJbnRlcmFjZVN5bWJvbChuYW1lOiBzdHJpbmcpOiBJbnRlcmZhY2VTeW1ib2wge1xuXHRcdGNvbnN0IHN5bWJvbDogSW50ZXJmYWNlU3ltYm9sIHwgdW5kZWZpbmVkID0gdGhpcy5pbnRlcmZhY2VTeW1ib2xzLmdldChuYW1lKTtcblx0XHRpZiAoc3ltYm9sID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBTeW1ib2wgJHtuYW1lfSBub3QgZm91bmQuYCk7XG5cdFx0fVxuXHRcdHJldHVybiBzeW1ib2w7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE9iamVjdFJlZ2lzdHJ5IHtcblx0Y2xhc3NlcyA9IG5ldyBDbGFzc1JlZ2lzdHJ5KCk7XG5cdGludGVyZmFjZXMgPSBuZXcgSW50ZXJmYWNlUmVnaXN0cnkoKTtcblx0dHlwZXMgPSBuZXcgVHlwZVJlZ2lzdHJ5KCk7XG5cblx0ZmV0Y2hBbGxPYmplY3REZWZpbml0aW9ucygpOiBNYXA8c3RyaW5nLCBDbGFzc0RlZmluaXRpb24gfCBJbnRlcmZhY2VEZWZpbml0aW9uPiB7XG5cdFx0Y29uc3QgbWFwID0gbmV3IE1hcCgpO1xuXG5cdFx0Zm9yIChjb25zdCBjbGFzc0RlZiBvZiB0aGlzLmludGVyZmFjZXMuYWxsKCkpIHtcblx0XHRcdG1hcC5zZXQoY2xhc3NEZWYubmFtZSwgY2xhc3NEZWYpO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgY2xhc3NEZWYgb2YgdGhpcy5jbGFzc2VzLmFsbCgpKSB7XG5cdFx0XHRtYXAuc2V0KGNsYXNzRGVmLm5hbWUsIGNsYXNzRGVmKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWFwO1xuXHR9XG5cblx0Y29sbGVjdEFsbChhc3Q6IEFTVE5vZGUpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgYXN0LmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEludGVyZmFjZU5vZGUpIHtcblx0XHRcdFx0dGhpcy5pbnRlcmZhY2VzLnJlZ2lzdGVyKG5vZGUpO1xuXHRcdFx0fSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgQVNUQ2xhc3NOb2RlKSB7XG5cdFx0XHRcdHRoaXMuY2xhc3Nlcy5yZWdpc3Rlcihub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuIiwKICAgICJpbXBvcnQge1xuXHRBU1RBcnJheU5vZGUsXG5cdEFTVEJpbmFyeU5vZGUsXG5cdEFTVENhbGxOb2RlLFxuXHRBU1RDbGFzc05vZGUsXG5cdEFTVEV4cHJlc3Npb25Ob2RlLFxuXHRBU1RGaWVsZE5vZGUsXG5cdEFTVEZvcmVhY2hOb2RlLFxuXHRBU1RJbmRleE5vZGUsXG5cdEFTVEludGVyZmFjZU5vZGUsXG5cdEFTVExhbWJkYU5vZGUsXG5cdEFTVE1lbWJlck5vZGUsXG5cdEFTVE1ldGhvZE5vZGUsXG5cdEFTVE5ld05vZGUsXG5cdEFTVE5vZGUsXG5cdEFTVE5vZGVUeXBlLFxuXHRBU1RQYXJhbWV0ZXJOb2RlLFxuXHRBU1RSZXR1cm5Ob2RlLFxuXHRBU1RUeXBlTm9kZSxcblx0QVNUVW5hcnlOb2RlLFxuXHRBU1RWYXJpYWJsZU5vZGVcbn0gZnJvbSAnLi9hc3QnO1xuaW1wb3J0IHtcblx0YnVpbGRUeXBlU3Vic3RpdHV0aW9uTWFwLFxuXHRDbGFzc1JlZlR5cGUsXG5cdENsYXNzU3ltYm9sLFxuXHRGaWVsZFN5bWJvbCxcblx0SW50ZXJmYWNlUmVmVHlwZSxcblx0SW50ZXJmYWNlU3ltYm9sLFxuXHRMYW1iZGFUeXBlLFxuXHRNZXRob2RTeW1ib2wsXG5cdE1peGVkVHlwZSxcblx0TnVsbGFibGVUeXBlLFxuXHRQYXJhbWV0ZXJTeW1ib2wsXG5cdFByaW1pdGl2ZUNsYXNzVHlwZXMsXG5cdHN1YnN0aXR1dGVUeXBlLFxuXHRUeXBlLFxuXHRUeXBlUGFyYW1ldGVyU3ltYm9sLFxuXHRUeXBlcyxcblx0VHlwZVNjb3BlLFxuXHRUeXBlVmFyaWFibGUsXG5cdHdyYXBUeXBlXG59IGZyb20gXCIuL3R5cGVfb2JqZWN0cy50c1wiO1xuaW1wb3J0IHtBdXRvYm94aW5nfSBmcm9tIFwiLi9hdXRvYm94aW5nLnRzXCI7XG5pbXBvcnQge05hdGl2ZUZ1bmN0aW9uLCBOYXRpdmVGdW5jdGlvbnN9IGZyb20gXCIuLi9saWJyYXJ5L25hdGl2ZV9mdW5jdGlvbnNcIjtcbmltcG9ydCB7R1JBTU1BUn0gZnJvbSBcIi4vZ3JhbW1hci50c1wiO1xuaW1wb3J0IHt0aHJvd1R5cGVFcnJvcn0gZnJvbSBcIi4vZXJyb3JzXCJcbmltcG9ydCB7Q2xhc3NEZWZpbml0aW9uLCBJbnRlcmZhY2VEZWZpbml0aW9ufSBmcm9tIFwiLi9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuXG5cbmNvbnN0IGdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5ID0gbmV3IE5hdGl2ZUZ1bmN0aW9ucygpXG5cdC5nZXRHbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeSgpO1xuXG5leHBvcnQgY2xhc3MgU3RhdGVtZW50UmVzdWx0IHtcblx0ZGlkUmV0dXJuOiBib29sZWFuO1xuXHRyZXR1cm5UeXBlOiBUeXBlIHwgbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihkaWRSZXR1cm46IGJvb2xlYW4sIHJldHVyblR5cGU6IFR5cGUgfCBudWxsKSB7XG5cdFx0dGhpcy5kaWRSZXR1cm4gPSBkaWRSZXR1cm47XG5cdFx0dGhpcy5yZXR1cm5UeXBlID0gcmV0dXJuVHlwZTtcblx0fVxuXG5cdHN0YXRpYyB3aXRoUmV0dXJuKHJldHVyblR5cGU6IFR5cGUpOiBTdGF0ZW1lbnRSZXN1bHQge1xuXHRcdHJldHVybiBuZXcgU3RhdGVtZW50UmVzdWx0KHRydWUsIHJldHVyblR5cGUpO1xuXHR9XG5cblx0c3RhdGljIG5vUmV0dXJuKCk6IFN0YXRlbWVudFJlc3VsdCB7XG5cdFx0cmV0dXJuIG5ldyBTdGF0ZW1lbnRSZXN1bHQoZmFsc2UsIG51bGwpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlQ2hlY2tlciB7XG5cdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeTtcblxuXHRjb25zdHJ1Y3RvcihvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpIHtcblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5ID0gb2JqZWN0UmVnaXN0cnk7XG5cdH1cblxuXHRjb2xsZWN0QWxsU3ltYm9sc0Zyb21Ob2RlKGFzdDogQVNUTm9kZSk6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUSW50ZXJmYWNlTm9kZSkge1xuXHRcdFx0XHR0aGlzLnJlZ2lzdGVySW50ZXJmYWNlU3ltYm9sKG5vZGUpXG5cdFx0XHR9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RDbGFzc05vZGUpIHtcblx0XHRcdFx0dGhpcy5yZWdpc3RlckNsYXNzU3ltYm9sKG5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNvbGxlY3RBbGxTeW1ib2xzRnJvbVJlZ2lzdHJ5KG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IHZvaWQge1xuXHRcdGNvbnN0IG9iamVjdERlZmluaXRpb25zOiBNYXBJdGVyYXRvcjxDbGFzc0RlZmluaXRpb24gfCBJbnRlcmZhY2VEZWZpbml0aW9uPiA9IG9iamVjdFJlZ2lzdHJ5XG5cdFx0XHQuZmV0Y2hBbGxPYmplY3REZWZpbml0aW9ucygpXG5cdFx0XHQudmFsdWVzKCk7XG5cblx0XHRmb3IgKGxldCBvYmplY3REZWYgb2Ygb2JqZWN0RGVmaW5pdGlvbnMpIHtcblx0XHRcdGlmIChvYmplY3REZWYgaW5zdGFuY2VvZiBJbnRlcmZhY2VEZWZpbml0aW9uKSB7XG5cdFx0XHRcdHRoaXMucmVnaXN0ZXJJbnRlcmZhY2VTeW1ib2wob2JqZWN0RGVmLm5vZGUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5yZWdpc3RlckNsYXNzU3ltYm9sKG9iamVjdERlZi5ub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjaGVjayhhc3Q6IEFTVE5vZGUpOiB2b2lkIHtcblx0XHR0aGlzLmNvbGxlY3RBbGxTeW1ib2xzRnJvbU5vZGUoYXN0KTtcblx0XHR0aGlzLnZhbGlkYXRlSW5oZXJpdGFuY2UoKTtcblx0XHR0aGlzLmNoZWNrUHJvZ3JhbShhc3QpO1xuXHRcdHRoaXMuY2hlY2tJbnRlcmZhY2VCb2RpZXMoKTtcblx0XHR0aGlzLmNoZWNrQ2xhc3Nlc0JvZGllcygpO1xuXHRcdHRoaXMuY2hlY2tDbGFzc2VzSW1wbGVtZW50cygpO1xuXHR9XG5cblx0dmFsaWRhdGVJbmhlcml0YW5jZSgpIHtcblx0XHRmb3IgKGNvbnN0IGNsYXNzU3ltYm9sIG9mIHRoaXMub2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5hbGwoKSkge1xuXHRcdFx0aWYgKGNsYXNzU3ltYm9sLnN1cGVyQ2xhc3MgJiYgIXRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKGNsYXNzU3ltYm9sLnN1cGVyQ2xhc3MpKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBVbmtub3duIHN1cGVyY2xhc3MgJHtjbGFzc1N5bWJvbC5zdXBlckNsYXNzfWAsIGNsYXNzU3ltYm9sLm5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNoZWNrUHJvZ3JhbShhc3Q6IEFTVE5vZGUpOiB2b2lkIHtcblx0XHRjb25zdCBzY29wZSA9IG5ldyBUeXBlU2NvcGUoKTtcblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgYXN0LmNoaWxkcmVuKSB7XG5cdFx0XHR0aGlzLmNoZWNrU3RhdGVtZW50KG5vZGUsIHNjb3BlKTtcblx0XHR9XG5cdH1cblxuXHRjaGVja0NsYXNzZXNCb2RpZXMoKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBvYmplY3RTeW1ib2wgb2YgdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5hbGxDbGFzc1N5bWJvbHMoKSkge1xuXHRcdFx0Y29uc3QgaW5zdGFuY2VTY29wZSA9IG5ldyBUeXBlU2NvcGUoKTtcblx0XHRcdGluc3RhbmNlU2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCA9IG9iamVjdFN5bWJvbDtcblxuXHRcdFx0b2JqZWN0U3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmZvckVhY2godHlwZVBhcmFtZXRlciA9PiB7XG5cdFx0XHRcdGluc3RhbmNlU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcoXG5cdFx0XHRcdFx0dHlwZVBhcmFtZXRlci5uYW1lLFxuXHRcdFx0XHRcdG5ldyBUeXBlVmFyaWFibGUodHlwZVBhcmFtZXRlci5uYW1lKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmIChvYmplY3RTeW1ib2wuY29uc3RydWN0b3JNZXRob2RTeW1ib2wpIHtcblx0XHRcdFx0Y29uc3QgY29uc3RydWN0b3JTeW1ib2wgPSBvYmplY3RTeW1ib2wuY29uc3RydWN0b3JNZXRob2RTeW1ib2w7XG5cdFx0XHRcdGNvbnN0IGNvbnN0cnVjdG9yU2NvcGUgPSBuZXcgVHlwZVNjb3BlKGluc3RhbmNlU2NvcGUpO1xuXG5cdFx0XHRcdG9iamVjdFN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5mb3JFYWNoKHR5cGVQYXJhbWV0ZXJTeW1ib2wgPT4ge1xuXHRcdFx0XHRcdGNvbnN0cnVjdG9yU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcoXG5cdFx0XHRcdFx0XHR0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUsXG5cdFx0XHRcdFx0XHRuZXcgVHlwZVZhcmlhYmxlKHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRmb3IgKGNvbnN0IHBhcmFtZXRlclN5bWJvbCBvZiBjb25zdHJ1Y3RvclN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzKSB7XG5cdFx0XHRcdFx0Y29uc3RydWN0b3JTY29wZS5kZWZpbmVUeXBlKHBhcmFtZXRlclN5bWJvbC5uYW1lLCBwYXJhbWV0ZXJTeW1ib2wucGFyYW1ldGVyVHlwZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmNoZWNrQm9keShjb25zdHJ1Y3RvclN5bWJvbC5ib2R5LCBjb25zdHJ1Y3RvclNjb3BlKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChjb25zdCBtZXRob2RTeW1ib2wgb2Ygb2JqZWN0U3ltYm9sLmluc3RhbmNlTWV0aG9kU3ltYm9scy52YWx1ZXMoKSkge1xuXHRcdFx0XHRjb25zdCBtZXRob2RTY29wZSA9IG5ldyBUeXBlU2NvcGUoaW5zdGFuY2VTY29wZSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmZvckVhY2godHlwZVBhcmFtZXRlclN5bWJvbCA9PiB7XG5cdFx0XHRcdFx0bWV0aG9kU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcoXG5cdFx0XHRcdFx0XHR0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUsXG5cdFx0XHRcdFx0XHRuZXcgVHlwZVZhcmlhYmxlKHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRmb3IgKGNvbnN0IHBhcmFtZXRlclN5bWJvbCBvZiBtZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9scykge1xuXHRcdFx0XHRcdG1ldGhvZFNjb3BlLmRlZmluZVR5cGUocGFyYW1ldGVyU3ltYm9sLm5hbWUsIHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGhhc0JvZHkgPSBtZXRob2RTeW1ib2wuYm9keSAmJiBtZXRob2RTeW1ib2wuYm9keS5sZW5ndGggPiAwO1xuXHRcdFx0XHRpZiAoaGFzQm9keSkge1xuXHRcdFx0XHRcdGNvbnN0IGFjdHVhbCA9IHRoaXMuY2hlY2tCb2R5KG1ldGhvZFN5bWJvbC5ib2R5LCBtZXRob2RTY29wZSk7XG5cdFx0XHRcdFx0dGhpcy5jaGVja1JldHVyblR5cGUobWV0aG9kU3ltYm9sLnJldHVyblR5cGUsIGFjdHVhbCwgbWV0aG9kU3ltYm9sLm5vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoY29uc3QgbWV0aG9kU3ltYm9sIG9mIG9iamVjdFN5bWJvbC5zdGF0aWNNZXRob2RTeW1ib2xzLnZhbHVlcygpKSB7XG5cdFx0XHRcdGNvbnN0IHN0YXRpY1Njb3BlID0gbmV3IFR5cGVTY29wZShpbnN0YW5jZVNjb3BlKTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMuZm9yRWFjaCh0eXBlUGFyYW1ldGVyU3ltYm9sID0+IHtcblx0XHRcdFx0XHRzdGF0aWNTY29wZS5kZWZpbmVUeXBlQmluZGluZyhcblx0XHRcdFx0XHRcdHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSxcblx0XHRcdFx0XHRcdG5ldyBUeXBlVmFyaWFibGUodHlwZVBhcmFtZXRlclN5bWJvbC5uYW1lKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGZvciAoY29uc3QgcGFyYW1ldGVyU3ltYm9sIG9mIG1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzKSB7XG5cdFx0XHRcdFx0c3RhdGljU2NvcGUuZGVmaW5lVHlwZShwYXJhbWV0ZXJTeW1ib2wubmFtZSwgcGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgaGFzQm9keSA9IG1ldGhvZFN5bWJvbC5ib2R5ICYmIG1ldGhvZFN5bWJvbC5ib2R5Lmxlbmd0aCA+IDA7XG5cdFx0XHRcdGlmIChoYXNCb2R5KSB7XG5cdFx0XHRcdFx0Y29uc3QgYWN0dWFsID0gdGhpcy5jaGVja0JvZHkobWV0aG9kU3ltYm9sLmJvZHksIHN0YXRpY1Njb3BlKTtcblx0XHRcdFx0XHR0aGlzLmNoZWNrUmV0dXJuVHlwZShtZXRob2RTeW1ib2wucmV0dXJuVHlwZSwgYWN0dWFsLCBtZXRob2RTeW1ib2wubm9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjaGVja0ludGVyZmFjZUJvZGllcygpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IG9iamVjdFN5bWJvbCBvZiB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmFsbEludGVyZmFjZVN5bWJvbHMoKSkge1xuXHRcdFx0Y29uc3QgaW5zdGFuY2VTY29wZSA9IG5ldyBUeXBlU2NvcGUoKTtcblx0XHRcdGluc3RhbmNlU2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCA9IG9iamVjdFN5bWJvbDtcblxuXHRcdFx0b2JqZWN0U3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmZvckVhY2godHlwZVBhcmFtZXRlciA9PiB7XG5cdFx0XHRcdGluc3RhbmNlU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcoXG5cdFx0XHRcdFx0dHlwZVBhcmFtZXRlci5uYW1lLFxuXHRcdFx0XHRcdG5ldyBUeXBlVmFyaWFibGUodHlwZVBhcmFtZXRlci5uYW1lKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGZvciAoY29uc3QgbWV0aG9kU3ltYm9sIG9mIG9iamVjdFN5bWJvbC5pbnN0YW5jZU1ldGhvZFN5bWJvbHMudmFsdWVzKCkpIHtcblx0XHRcdFx0Y29uc3QgbWV0aG9kU2NvcGUgPSBuZXcgVHlwZVNjb3BlKGluc3RhbmNlU2NvcGUpO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5mb3JFYWNoKHR5cGVQYXJhbWV0ZXJTeW1ib2wgPT4ge1xuXHRcdFx0XHRcdG1ldGhvZFNjb3BlLmRlZmluZVR5cGVCaW5kaW5nKFxuXHRcdFx0XHRcdFx0dHlwZVBhcmFtZXRlclN5bWJvbC5uYW1lLFxuXHRcdFx0XHRcdFx0bmV3IFR5cGVWYXJpYWJsZSh0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Zm9yIChjb25zdCBwYXJhbWV0ZXJTeW1ib2wgb2YgbWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMpIHtcblx0XHRcdFx0XHRtZXRob2RTY29wZS5kZWZpbmVUeXBlKHBhcmFtZXRlclN5bWJvbC5uYW1lLCBwYXJhbWV0ZXJTeW1ib2wucGFyYW1ldGVyVHlwZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBoYXNCb2R5ID0gbWV0aG9kU3ltYm9sLmJvZHkgJiYgbWV0aG9kU3ltYm9sLmJvZHkubGVuZ3RoID4gMDtcblx0XHRcdFx0aWYgKGhhc0JvZHkpIHtcblx0XHRcdFx0XHRjb25zdCBhY3R1YWwgPSB0aGlzLmNoZWNrQm9keShtZXRob2RTeW1ib2wuYm9keSwgbWV0aG9kU2NvcGUpO1xuXHRcdFx0XHRcdHRoaXMuY2hlY2tSZXR1cm5UeXBlKG1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlLCBhY3R1YWwsIG1ldGhvZFN5bWJvbC5ub2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNoZWNrQ2xhc3Nlc0ltcGxlbWVudHMoKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBjbGFzc1N5bWJvbCBvZiB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmFsbENsYXNzU3ltYm9scygpKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGludGVyZmFjZVJlZlR5cGUgb2YgY2xhc3NTeW1ib2wuaW1wbGVtZW50c0ludGVyZmFjZXMpIHtcblx0XHRcdFx0dGhpcy5jaGVja0ltcGxlbWVudHNJbnRlcmZhY2UoY2xhc3NTeW1ib2wsIGludGVyZmFjZVJlZlR5cGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNoZWNrSW1wbGVtZW50c0ludGVyZmFjZShjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wsIGludGVyZmFjZVJlZlR5cGU6IEludGVyZmFjZVJlZlR5cGUpOiB2b2lkIHtcblx0XHRjb25zdCBpbnRlcmZhY2VTeW1ib2wgPSBpbnRlcmZhY2VSZWZUeXBlLmludGVyZmFjZVN5bWJvbDtcblxuXHRcdGNvbnN0IHN1YnN0aXR1dGlvbk1hcCA9IGJ1aWxkVHlwZVN1YnN0aXR1dGlvbk1hcChcblx0XHRcdGludGVyZmFjZVN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scyxcblx0XHRcdGludGVyZmFjZVJlZlR5cGUudHlwZUFyZ3VtZW50c1xuXHRcdCk7XG5cblx0XHRmb3IgKGNvbnN0IGludGVyZmFjZU1ldGhvZFN5bWJvbCBvZiBpbnRlcmZhY2VTeW1ib2wuaW5zdGFuY2VNZXRob2RTeW1ib2xzLnZhbHVlcygpKSB7XG5cdFx0XHRjb25zdCBjbGFzc01ldGhvZFN5bWJvbCA9IHRoaXMucmVzb2x2ZUluc3RhbmNlTWV0aG9kZShcblx0XHRcdFx0Y2xhc3NTeW1ib2wsXG5cdFx0XHRcdGludGVyZmFjZU1ldGhvZFN5bWJvbC5uYW1lXG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAoIWNsYXNzTWV0aG9kU3ltYm9sKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKFxuXHRcdFx0XHRcdGBDbGFzcyAke2NsYXNzU3ltYm9sLm5hbWV9IGRvZXMgbm90IGltcGxlbWVudCBtZXRob2QgJHtpbnRlcmZhY2VNZXRob2RTeW1ib2wubmFtZX0gZnJvbSBpbnRlcmZhY2UgJHtpbnRlcmZhY2VTeW1ib2wubmFtZX1gLFxuXHRcdFx0XHRcdGNsYXNzU3ltYm9sLm5vZGVcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5jaGVja01ldGhvZENvbXBhdGliaWxpdHkoXG5cdFx0XHRcdGNsYXNzTWV0aG9kU3ltYm9sLFxuXHRcdFx0XHRpbnRlcmZhY2VNZXRob2RTeW1ib2wsXG5cdFx0XHRcdHN1YnN0aXR1dGlvbk1hcFxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRjaGVja01ldGhvZENvbXBhdGliaWxpdHkoY2xhc3NNZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCwgaW50ZXJmYWNlTWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wsIHN1YnN0aXR1dGlvbk1hcDogTWFwPHN0cmluZywgVHlwZT4pOiB2b2lkIHtcblx0XHRpZiAoY2xhc3NNZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9scy5sZW5ndGggIT09IGludGVyZmFjZU1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYE1ldGhvZCAke2NsYXNzTWV0aG9kU3ltYm9sLm5hbWV9IGhhcyB3cm9uZyBwYXJhbWV0ZXIgY291bnRgKTtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGludGVyZmFjZU1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBwYXJhbWV0ZXJTeW1ib2w6IFBhcmFtZXRlclN5bWJvbCB8IG51bGwgPSBpbnRlcmZhY2VNZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9sc1tpXSB8fCBudWxsO1xuXG5cdFx0XHRpZiAoIXBhcmFtZXRlclN5bWJvbCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgTWV0aG9kICR7Y2xhc3NNZXRob2RTeW1ib2wubmFtZX0gaGFzIHRvbyBtYW55IHBhcmFtZXRlcnNgKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGV4cGVjdGVkVHlwZTogVHlwZSA9IHN1YnN0aXR1dGVUeXBlKHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlLCBzdWJzdGl0dXRpb25NYXApO1xuXG5cdFx0XHRjb25zdCBhY3R1YWxUeXBlOiBUeXBlID0gcGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGU7XG5cblx0XHRcdGlmICghZXhwZWN0ZWRUeXBlLmFjY2VwdHMoYWN0dWFsVHlwZSkpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYFBhcmFtZXRlciAke2kgKyAxfSBvZiAke2NsYXNzTWV0aG9kU3ltYm9sLm5hbWV9IGluY29tcGF0aWJsZSB3aXRoIGludGVyZmFjZWApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IGV4cGVjdGVkUmV0dXJuOiBUeXBlID0gc3Vic3RpdHV0ZVR5cGUoaW50ZXJmYWNlTWV0aG9kU3ltYm9sLnJldHVyblR5cGUsIHN1YnN0aXR1dGlvbk1hcCk7XG5cblx0XHRpZiAoIWV4cGVjdGVkUmV0dXJuLmFjY2VwdHMoY2xhc3NNZXRob2RTeW1ib2wucmV0dXJuVHlwZSkpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBSZXR1cm4gdHlwZSBvZiAke2NsYXNzTWV0aG9kU3ltYm9sLm5hbWV9IGluY29tcGF0aWJsZSB3aXRoIGludGVyZmFjZWApO1xuXHRcdH1cblx0fVxuXG5cdGNoZWNrU3RhdGVtZW50KG5vZGU6IEFTVE5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBTdGF0ZW1lbnRSZXN1bHQge1xuXHRcdHN3aXRjaCAobm9kZS50eXBlKSB7XG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLlJFVFVSTjpcblx0XHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RSZXR1cm5Ob2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFN0YXRlbWVudFJlc3VsdC53aXRoUmV0dXJuKFxuXHRcdFx0XHRcdFx0dGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5hcmd1bWVudCwgc2NvcGUpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuVkFSSUFCTEU6XG5cdFx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUVmFyaWFibGVOb2RlKSB7XG5cdFx0XHRcdFx0dGhpcy5jaGVja1ZhcmlhYmxlKG5vZGUsIHNjb3BlKTtcblx0XHRcdFx0XHRyZXR1cm4gU3RhdGVtZW50UmVzdWx0Lm5vUmV0dXJuKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkZPUkVBQ0g6XG5cdFx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNURm9yZWFjaE5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gU3RhdGVtZW50UmVzdWx0LndpdGhSZXR1cm4oXG5cdFx0XHRcdFx0XHR0aGlzLmNoZWNrRm9yZWFjaChub2RlLCBzY29wZSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5FWFBSRVNTSU9OOlxuXHRcdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEV4cHJlc3Npb25Ob2RlKSB7XG5cdFx0XHRcdFx0dGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5leHByLCBzY29wZSk7XG5cdFx0XHRcdFx0cmV0dXJuIFN0YXRlbWVudFJlc3VsdC5ub1JldHVybigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiBTdGF0ZW1lbnRSZXN1bHQubm9SZXR1cm4oKTtcblx0fVxuXG5cdGNoZWNrVmFyaWFibGUobm9kZTogQVNUVmFyaWFibGVOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogdm9pZCB7XG5cdFx0Y29uc3QgZGVjbGFyZWRUeXBlOiBUeXBlIHwgbnVsbCA9IG5vZGUudHlwZUFubm90YXRpb25cblx0XHRcdD8gdGhpcy53cmFwVHlwZShub2RlLnR5cGVBbm5vdGF0aW9uLCBzY29wZSlcblx0XHRcdDogbnVsbDtcblxuXHRcdGNvbnN0IGFjdHVhbFR5cGU6IFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLmluaXQsIHNjb3BlLCBkZWNsYXJlZFR5cGUpO1xuXG5cdFx0aWYgKGRlY2xhcmVkVHlwZSAmJiAhZGVjbGFyZWRUeXBlLmFjY2VwdHMoYWN0dWFsVHlwZSkpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBUeXBlIG1pc21hdGNoOiAke2RlY2xhcmVkVHlwZX0gPD4gJHthY3R1YWxUeXBlfWAsIG5vZGUpO1xuXHRcdH1cblxuXHRcdHNjb3BlLmRlZmluZVR5cGUobm9kZS5uYW1lLCBkZWNsYXJlZFR5cGUgPz8gYWN0dWFsVHlwZSk7XG5cdH1cblxuXHRjaGVja0ZvcmVhY2gobm9kZTogQVNURm9yZWFjaE5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRsZXQgaXRlcmFibGVUeXBlOiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5pdGVyYWJsZSwgc2NvcGUpO1xuXG5cdFx0aXRlcmFibGVUeXBlID0gQXV0b2JveGluZy5hdXRvYm94SWZOZWVkZWQoaXRlcmFibGVUeXBlLCB0aGlzLm9iamVjdFJlZ2lzdHJ5KTtcblxuXHRcdGlmIChpdGVyYWJsZVR5cGUgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUgJiYgaXRlcmFibGVUeXBlLmNsYXNzU3ltYm9sLm5hbWUgPT09ICdBcnJheScpIHtcblx0XHRcdGlmIChpdGVyYWJsZVR5cGUudHlwZUFyZ3VtZW50cy5sZW5ndGggIT09IDEpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoJ0FycmF5IGluIGZvcmVhY2ggbXVzc3QgaGF2ZSBleGFjdGx5IG9uZSB0eXBlIGFyZ3VtZW50LicsIG5vZGUuaXRlcmFibGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBlbGVtZW50VHlwZTogVHlwZSB8IG51bGwgPSBpdGVyYWJsZVR5cGUudHlwZUFyZ3VtZW50c1swXSB8fCBudWxsO1xuXG5cdFx0XHRpZiAoZWxlbWVudFR5cGUgPT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoJ0FycmF5IGluIGZvcmVhY2ggbXVzdCBoYXZlIGV4YWN0bHkgb25lIHR5cGUgYXJndW1lbnQuJywgbm9kZS5pdGVyYWJsZSk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGxvb3BTY29wZSA9IG5ldyBUeXBlU2NvcGUoc2NvcGUpO1xuXHRcdFx0bG9vcFNjb3BlLmRlZmluZVR5cGUobm9kZS5pdGVyYXRvciwgZWxlbWVudFR5cGUpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy5jaGVja0JvZHkobm9kZS5ib2R5LCBsb29wU2NvcGUpO1xuXG5cdFx0fVxuXG5cdFx0dGhpcy50eXBlRXJyb3IoYGZvcmVhY2ggZXhwZWN0cyBBcnJheTxUPiwgZ290ICR7aXRlcmFibGVUeXBlLnRvU3RyaW5nKCl9YCwgbm9kZS5pdGVyYWJsZSk7XG5cdH1cblxuXHRjaGVja0V4cHJlc3Npb24oZXhwcjogQVNUTm9kZSB8IG51bGwsIHNjb3BlOiBUeXBlU2NvcGUsIGV4cGVjdGVkVHlwZTogVHlwZSB8IG51bGwgPSBudWxsKTogVHlwZSB7XG5cdFx0aWYgKGV4cHIgPT09IG51bGwpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKCdFeHByZXNzaW9uIGV4cGVjdGVkLCBnb3QgbnVsbC4nLCBleHByKTtcblx0XHR9XG5cblx0XHRzd2l0Y2ggKGV4cHIudHlwZSkge1xuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5OVU1CRVI6XG5cdFx0XHRcdHJldHVybiBUeXBlcy5OVU1CRVI7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuU1RSSU5HOlxuXHRcdFx0XHRyZXR1cm4gVHlwZXMuU1RSSU5HO1xuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkJPT0xFQU46XG5cdFx0XHRcdHJldHVybiBUeXBlcy5CT09MRUFOO1xuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLk5VTEw6XG5cdFx0XHRcdHJldHVybiBUeXBlcy5OVUxMO1xuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkFSUkFZOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQXJyYXlOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tBcnJheUV4cHJlc3Npb24oZXhwciwgc2NvcGUsIGV4cGVjdGVkVHlwZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuSU5ERVg6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RJbmRleE5vZGUpIHtcblx0XHRcdFx0XHRjb25zdCBvYmplY3RUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24oZXhwci5vYmplY3QsIHNjb3BlKTtcblx0XHRcdFx0XHRjb25zdCBpbmRleCA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKGV4cHIuaW5kZXgsIHNjb3BlKTtcblxuXHRcdFx0XHRcdGlmIChvYmplY3RUeXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gb2JqZWN0VHlwZS50eXBlQXJndW1lbnRzWzBdIHx8IFR5cGVzLk1JWEVEO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgaW5kZXggJHtvYmplY3RUeXBlLm5hbWV9IHdpdGggJHtpbmRleC5uYW1lfWAsIGV4cHIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLlVOQVJZOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUVW5hcnlOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tVbmFyeUV4cHJlc3Npb24oZXhwciwgc2NvcGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLk1FTUJFUjoge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja01lbWJlckV4cHJlc3Npb24oZXhwciwgc2NvcGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLlRISVM6IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tUaGlzRXhwcmVzc2lvbihleHByLCBzY29wZSk7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuSURFTlRJRklFUjpcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tJZGVudGlmaWVyRXhwcmVzc2lvbihleHByLCBzY29wZSk7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuTkVXOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTmV3Tm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrTmV3RXhwcmVzc2lvbihleHByLCBzY29wZSwgZXhwZWN0ZWRUeXBlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5CSU5BUlk6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RCaW5hcnlOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tCaW5hcnlFeHByZXNzaW9uKGV4cHIsIHNjb3BlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5MQU1CREE6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RMYW1iZGFOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tMYW1iZGFFeHByZXNzaW9uKGV4cHIsIHNjb3BlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5DQUxMOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQ2FsbE5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0NhbGxFeHByZXNzaW9uKGV4cHIsIHNjb3BlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gVHlwZXMuTUlYRUQ7XG5cdH1cblxuXHRjaGVja0JpbmFyeUV4cHJlc3Npb24oZXhwcjogQVNUQmluYXJ5Tm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGNvbnN0IGxlZnQ6IFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihleHByLmxlZnQsIHNjb3BlKTtcblx0XHRjb25zdCByaWdodDogVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKGV4cHIucmlnaHQsIHNjb3BlKTtcblx0XHRjb25zdCBvcDogc3RyaW5nID0gZXhwci5vcGVyYXRvcjtcblxuXHRcdGlmIChHUkFNTUFSLkFSSVRITUVUSUMuaW5jbHVkZXMob3ApKSB7XG5cdFx0XHRpZiAobGVmdC5hY2NlcHRzKFR5cGVzLk5VTUJFUikgJiYgcmlnaHQuYWNjZXB0cyhUeXBlcy5OVU1CRVIpKSB7XG5cdFx0XHRcdHJldHVybiBUeXBlcy5OVU1CRVI7XG5cdFx0XHR9XG5cdFx0XHRpZiAobGVmdC5hY2NlcHRzKFR5cGVzLlNUUklORykgfHwgcmlnaHQuYWNjZXB0cyhUeXBlcy5TVFJJTkcpKSB7XG5cdFx0XHRcdHJldHVybiBUeXBlcy5TVFJJTkc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQXJpdGhtZXRpYyBvcGVyYXRvciAnJHtvcH0nIHJlcXVpcmVzIG51bWJlcnNgLCBleHByKTtcblx0XHR9XG5cblx0XHRpZiAoR1JBTU1BUi5DT01QQVJJU09OLmluY2x1ZGVzKG9wKSkge1xuXHRcdFx0aWYgKGxlZnQuYWNjZXB0cyhUeXBlcy5OVU1CRVIpICYmIHJpZ2h0LmFjY2VwdHMoVHlwZXMuTlVNQkVSKSkge1xuXHRcdFx0XHRyZXR1cm4gVHlwZXMuQk9PTEVBTjtcblx0XHRcdH1cblx0XHRcdHRoaXMudHlwZUVycm9yKGBDb21wYXJpc29uICcke29wfScgcmVxdWlyZXMgbnVtYmVyc2AsIGV4cHIpO1xuXHRcdH1cblxuXHRcdGlmIChHUkFNTUFSLkVRVUFMSVRZLmluY2x1ZGVzKG9wKSkge1xuXHRcdFx0aWYgKGxlZnQuYWNjZXB0cyhyaWdodCkpIHtcblx0XHRcdFx0cmV0dXJuIFR5cGVzLkJPT0xFQU47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNvbXBhcmUgJHtsZWZ0Lm5hbWV9IHdpdGggJHtyaWdodC5uYW1lfWAsIGV4cHIpO1xuXHRcdH1cblxuXHRcdGlmIChHUkFNTUFSLkxPR0lDQUwuaW5jbHVkZXMob3ApKSB7XG5cdFx0XHRpZiAobGVmdC5hY2NlcHRzKFR5cGVzLkJPT0xFQU4pICYmIHJpZ2h0LmFjY2VwdHMoVHlwZXMuQk9PTEVBTikpIHtcblx0XHRcdFx0cmV0dXJuIFR5cGVzLkJPT0xFQU47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgTG9naWNhbCBvcGVyYXRvciAnJHtvcH0nIHJlcXVpcmVzIGJvb2xlYW5zYCwgZXhwcik7XG5cdFx0fVxuXG5cdFx0dGhpcy50eXBlRXJyb3IoYEludmFsaWQgYmluYXJ5IG9wZXJhdGlvbmAsIGV4cHIpO1xuXHR9XG5cblx0Y2hlY2tGaWVsZEFjY2Vzcyhub2RlOiBBU1RNZW1iZXJOb2RlLCBjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wsIGZpZWxkU3ltYm9sOiBGaWVsZFN5bWJvbCwgc2NvcGU6IFR5cGVTY29wZSk6IHZvaWQge1xuXHRcdGlmIChmaWVsZFN5bWJvbC5pc1B1YmxpYykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICghc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBhY2Nlc3MgcHJpdmF0ZSBtZW1iZXIgJHtub2RlLnByb3BlcnR5fSBvZiAke2NsYXNzU3ltYm9sLm5hbWV9YCwgbm9kZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgIT09IGZpZWxkU3ltYm9sLm93bmVyKSB7XG5cdFx0XHRpZiAoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCBpbnN0YW5jZW9mIENsYXNzU3ltYm9sXG5cdFx0XHRcdCYmIHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wuc3VwZXJDbGFzc1N5bWJvbCAhPT0gZmllbGRTeW1ib2wub3duZXIpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBhY2Nlc3MgcHJpdmF0ZSBtZW1iZXIgJHtub2RlLnByb3BlcnR5fSBvZiAke2NsYXNzU3ltYm9sLm5hbWV9YCwgbm9kZSk7XG5cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjaGVja0luc3RhbmNlTWV0aG9kQWNjZXNzKG5vZGU6IEFTVE1lbWJlck5vZGUsIGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCwgbWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wsIHNjb3BlOiBUeXBlU2NvcGUpOiB2b2lkIHtcblx0XHRpZiAobWV0aG9kU3ltYm9sLmlzUHVibGljKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCFzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGFjY2VzcyBwcml2YXRlIG1ldGhvZCAke25vZGUucHJvcGVydHl9IG9mICR7Y2xhc3NTeW1ib2wubmFtZX1gLCBub2RlKTtcblx0XHR9XG5cblx0XHRpZiAoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCAhPT0gbWV0aG9kU3ltYm9sLm93bmVyKSB7XG5cdFx0XHRpZiAoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCBpbnN0YW5jZW9mIENsYXNzU3ltYm9sXG5cdFx0XHRcdCYmIHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wuc3VwZXJDbGFzc1N5bWJvbCAhPT0gbWV0aG9kU3ltYm9sLm93bmVyKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgYWNjZXNzIHByaXZhdGUgbWV0aG9kICR7bm9kZS5wcm9wZXJ0eX0gb2YgJHtjbGFzc1N5bWJvbC5uYW1lfWAsIG5vZGUpO1xuXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y2hlY2tTdGF0aWNNZXRob2RBY2Nlc3MoY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sLCBtZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCwgc2NvcGU6IFR5cGVTY29wZSk6IHZvaWQge1xuXHRcdGlmICghbWV0aG9kU3ltYm9sLmlzU3RhdGljKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNhbGwgaW5zdGFuY2UgbWV0aG9kICR7Y2xhc3NTeW1ib2wubmFtZX0uJHttZXRob2RTeW1ib2wubmFtZX0gYXMgc3RhdGljIG1ldGhvZGApO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChtZXRob2RTeW1ib2wuaXNQdWJsaWMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIXNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgYWNjZXNzIHByaXZhdGUgbWV0aG9kICR7bWV0aG9kU3ltYm9sLm5hbWV9IG9mICR7Y2xhc3NTeW1ib2wubmFtZX1gLFxuXHRcdFx0ICAgICAgICAgICAgICAgbWV0aG9kU3ltYm9sLm5vZGUpO1xuXHRcdH1cblxuXHRcdGlmIChzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sICE9PSBtZXRob2RTeW1ib2wub3duZXIpIHtcblx0XHRcdGlmIChzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sIGluc3RhbmNlb2YgQ2xhc3NTeW1ib2xcblx0XHRcdFx0JiYgc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbC5zdXBlckNsYXNzU3ltYm9sICE9PSBtZXRob2RTeW1ib2wub3duZXIpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBhY2Nlc3MgcHJpdmF0ZSBtZXRob2QgJHttZXRob2RTeW1ib2wubmFtZX0gb2YgJHtjbGFzc1N5bWJvbC5uYW1lfWAsXG5cdFx0XHRcdCAgICAgICAgICAgICAgIG1ldGhvZFN5bWJvbC5ub2RlKTtcblxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNoZWNrTWVtYmVyRXhwcmVzc2lvbihub2RlOiBBU1RNZW1iZXJOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0Y29uc3Qgb2JqZWN0VHlwZTogVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKG5vZGUub2JqZWN0LCBzY29wZSk7XG5cblx0XHRpZiAob2JqZWN0VHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSkge1xuXHRcdFx0Y29uc3QgY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sID0gb2JqZWN0VHlwZS5jbGFzc1N5bWJvbDtcblxuXHRcdFx0Y29uc3QgaW5zdGFuY2VGaWVsZFN5bWJvbDogRmllbGRTeW1ib2wgfCBudWxsID0gY2xhc3NTeW1ib2wucmVzb2x2ZUluc3RhbmNlRmllbGRTeW1ib2wobm9kZS5wcm9wZXJ0eSk7XG5cdFx0XHRpZiAoaW5zdGFuY2VGaWVsZFN5bWJvbCkge1xuXHRcdFx0XHR0aGlzLmNoZWNrRmllbGRBY2Nlc3Mobm9kZSwgY2xhc3NTeW1ib2wsIGluc3RhbmNlRmllbGRTeW1ib2wsIHNjb3BlKTtcblx0XHRcdFx0cmV0dXJuIGluc3RhbmNlRmllbGRTeW1ib2wuZmllbGRUeXBlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzdGF0aWNGaWVsZFN5bWJvbDogRmllbGRTeW1ib2wgfCBudWxsID0gY2xhc3NTeW1ib2wucmVzb2x2ZVN0YXRpY0ZpZWxkU3ltYm9sKG5vZGUucHJvcGVydHkpO1xuXHRcdFx0aWYgKHN0YXRpY0ZpZWxkU3ltYm9sKSB7XG5cdFx0XHRcdHRoaXMuY2hlY2tGaWVsZEFjY2Vzcyhub2RlLCBjbGFzc1N5bWJvbCwgc3RhdGljRmllbGRTeW1ib2wsIHNjb3BlKTtcblx0XHRcdFx0cmV0dXJuIHN0YXRpY0ZpZWxkU3ltYm9sLmZpZWxkVHlwZTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFVua25vd24gbWVtYmVyICR7bm9kZS5wcm9wZXJ0eX1gLCBub2RlKTtcblx0XHR9XG5cblx0XHR0aGlzLnR5cGVFcnJvcihcIkNhbm5vdCBhY2Nlc3MgbWVtYmVyIG9mIG5vbi1vYmplY3RcIiwgbm9kZSk7XG5cdH1cblxuXHRjaGVja1RoaXNFeHByZXNzaW9uKG5vZGU6IEFTVE5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBDbGFzc1JlZlR5cGUge1xuXHRcdGlmIChzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sIGluc3RhbmNlb2YgQ2xhc3NTeW1ib2wpIHtcblx0XHRcdHJldHVybiBuZXcgQ2xhc3NSZWZUeXBlKHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wpO1xuXHRcdH1cblx0XHR0aGlzLnR5cGVFcnJvcigndGhpcyBvdXRzaWRlIG9mIGNsYXNzJywgbm9kZSk7XG5cdH1cblxuXHRjaGVja0lkZW50aWZpZXJFeHByZXNzaW9uKG5vZGU6IEFTVE5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRpZiAoc2NvcGUuaGFzVHlwZShub2RlLm5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gc2NvcGUuZ2V0VHlwZShub2RlLm5hbWUpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5oYXNTeW1ib2wobm9kZS5uYW1lKSkge1xuXHRcdFx0cmV0dXJuIG5ldyBDbGFzc1JlZlR5cGUodGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChub2RlLm5hbWUpKTtcblx0XHR9XG5cdFx0dGhpcy50eXBlRXJyb3IoYFVuZGVmaW5lZCBpZGVudGlmaWVyICR7bm9kZS5uYW1lfWAsIG5vZGUpO1xuXHR9XG5cblx0Y2hlY2tOZXdFeHByZXNzaW9uKG5vZGU6IEFTVE5ld05vZGUsIHNjb3BlOiBUeXBlU2NvcGUsIGV4cGVjdGVkVHlwZTogVHlwZSB8IG51bGwgPSBudWxsKTogQ2xhc3NSZWZUeXBlIHtcblx0XHRjb25zdCBjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wgPSB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKG5vZGUubmFtZSk7XG5cblx0XHRsZXQgaW5zdGFuY2VUeXBlO1xuXHRcdGlmIChub2RlLnR5cGVBbm5vdGF0aW9uLnR5cGVBcmd1bWVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0Y29uc3QgdHlwZUFyZ3VtZW50cyA9IG5vZGVcblx0XHRcdFx0LnR5cGVBbm5vdGF0aW9uXG5cdFx0XHRcdC50eXBlQXJndW1lbnRzXG5cdFx0XHRcdC5tYXAodHlwZUFyZ3VtZW50ID0+IHRoaXMud3JhcFR5cGUodHlwZUFyZ3VtZW50LCBzY29wZSkpO1xuXG5cdFx0XHRpZiAodHlwZUFyZ3VtZW50cy5sZW5ndGggIT09IGNsYXNzU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgV3JvbmcgbnVtYmVyIG9mIHR5cGUgYXJndW1lbnRzYCwgbm9kZSk7XG5cdFx0XHR9XG5cblx0XHRcdGluc3RhbmNlVHlwZSA9IG5ldyBDbGFzc1JlZlR5cGUoY2xhc3NTeW1ib2wsIHR5cGVBcmd1bWVudHMpO1xuXHRcdH0gZWxzZSBpZiAoZXhwZWN0ZWRUeXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0XHRpbnN0YW5jZVR5cGUgPSBleHBlY3RlZFR5cGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGluc3RhbmNlVHlwZSA9IG5ldyBDbGFzc1JlZlR5cGUoXG5cdFx0XHRcdGNsYXNzU3ltYm9sLFxuXHRcdFx0XHRjbGFzc1N5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5tYXAoKCkgPT4gVHlwZXMuTUlYRUQpXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmIChjbGFzc1N5bWJvbC5jb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbCkge1xuXHRcdFx0dGhpcy5jaGVja0NhbGxBcmd1bWVudHMoY2xhc3NTeW1ib2wuY29uc3RydWN0b3JNZXRob2RTeW1ib2wsIG5vZGUuYXJndW1lbnRzLCBzY29wZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGV4cGVjdGVkVHlwZSAmJiAhZXhwZWN0ZWRUeXBlLmFjY2VwdHMoaW5zdGFuY2VUeXBlKSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFR5cGUgbWlzbWF0Y2g6ICR7ZXhwZWN0ZWRUeXBlfSA8PiAke2luc3RhbmNlVHlwZX1gLCBub2RlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaW5zdGFuY2VUeXBlO1xuXHR9XG5cblx0Y2hlY2tBcnJheUV4cHJlc3Npb24obm9kZTogQVNUQXJyYXlOb2RlLCBzY29wZTogVHlwZVNjb3BlLCBleHBlY3RlZFR5cGU6IFR5cGUgfCBudWxsID0gbnVsbCk6IENsYXNzUmVmVHlwZSB7XG5cblx0XHRpZiAobm9kZS5lbGVtZW50cy5sZW5ndGggPT09IDApIHtcblx0XHRcdGlmIChleHBlY3RlZFR5cGUgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUpIHtcblx0XHRcdFx0ZXhwZWN0ZWRUeXBlID0gZXhwZWN0ZWRUeXBlLnR5cGVBcmd1bWVudHNbMF0gfHwgbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXMubmV3QXJyYXlUeXBlT2YoZXhwZWN0ZWRUeXBlIHx8IFR5cGVzLk1JWEVEKTtcblx0XHR9XG5cblx0XHRjb25zdCBjbGFzc1JlZk5hbWUgPSBQcmltaXRpdmVDbGFzc1R5cGVzLmdldENsYXNzUmVmTmFtZShQcmltaXRpdmVDbGFzc1R5cGVzLkFSUkFZKTtcblxuXHRcdGxldCBleHBlY3RlZFR5cGVPZkl0ZW06IFR5cGU7XG5cdFx0aWYgKGV4cGVjdGVkVHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSAmJiBleHBlY3RlZFR5cGUuY2xhc3NTeW1ib2wubmFtZSA9PT0gY2xhc3NSZWZOYW1lKSB7XG5cdFx0XHRleHBlY3RlZFR5cGVPZkl0ZW0gPSBleHBlY3RlZFR5cGUudHlwZUFyZ3VtZW50c1swXSB8fCBUeXBlcy5NSVhFRDtcblx0XHR9IGVsc2UgaWYgKG5vZGUuZWxlbWVudHNbMF0pIHtcblx0XHRcdGV4cGVjdGVkVHlwZU9mSXRlbSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKG5vZGUuZWxlbWVudHNbMF0sIHNjb3BlLCBleHBlY3RlZFR5cGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcignQXJyYXkgZXhwcmVzc2lvbiBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIGVsZW1lbnQnLCBub2RlKTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGl0ZW0gb2Ygbm9kZS5lbGVtZW50cykge1xuXHRcdFx0Y29uc3QgYWN0dWFsVHlwZU9mSXRlbTogVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKGl0ZW0sIHNjb3BlLCBleHBlY3RlZFR5cGVPZkl0ZW0pO1xuXHRcdFx0aWYgKCFleHBlY3RlZFR5cGVPZkl0ZW0uYWNjZXB0cyhhY3R1YWxUeXBlT2ZJdGVtKSkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihcblx0XHRcdFx0XHRgQXJyYXkgZWxlbWVudHMgbXVzdCBoYXZlIHNhbWUgdHlwZSwgZ290ICR7ZXhwZWN0ZWRUeXBlT2ZJdGVtfSBhbmQgJHthY3R1YWxUeXBlT2ZJdGVtfWAsXG5cdFx0XHRcdFx0bm9kZVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLm5ld0FycmF5VHlwZU9mKGV4cGVjdGVkVHlwZU9mSXRlbSk7XG5cdH1cblxuXHRjaGVja1VuYXJ5RXhwcmVzc2lvbihub2RlOiBBU1RVbmFyeU5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRjb25zdCBvcGVyYW5kID0gdGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5hcmd1bWVudCwgc2NvcGUpO1xuXHRcdGNvbnN0IG9wID0gbm9kZS5vcGVyYXRvcjtcblx0XHRpZiAob3AgPT09IEdSQU1NQVIuRVhDTEFNQVRJT05fTUFSSykge1xuXHRcdFx0aWYgKG9wZXJhbmQuZXF1YWxzKFR5cGVzLkJPT0xFQU4pKSB7XG5cdFx0XHRcdHJldHVybiBUeXBlcy5CT09MRUFOO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFVuYXJ5ICchJyByZXF1aXJlcyBib29sZWFuLCBnb3QgJHtvcGVyYW5kLm5hbWV9YCwgbm9kZSk7XG5cdFx0fVxuXHRcdHRoaXMudHlwZUVycm9yKGBJbnZhbGlkIHVuYXJ5IG9wZXJhdG9yICR7b3B9YCwgbm9kZSk7XG5cdH1cblxuXHRjaGVja0xhbWJkYUV4cHJlc3Npb24obm9kZTogQVNUTGFtYmRhTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IExhbWJkYVR5cGUge1xuXHRcdGNvbnN0IGxhbWJkYVNjb3BlID0gbmV3IFR5cGVTY29wZShzY29wZSk7XG5cdFx0Y29uc3QgcGFyYW1ldGVycyA9IG5vZGUucGFyYW1ldGVycy5tYXAocGFyYW1ldGVyTm9kZSA9PiB7XG5cdFx0XHRjb25zdCBwYXJhbWV0ZXJTeW1ib2w6IFBhcmFtZXRlclN5bWJvbCA9IHRoaXMucGFyYW1ldGVyTm9kZVRvU3ltYm9sKHBhcmFtZXRlck5vZGUpO1xuXG5cdFx0XHRsYW1iZGFTY29wZS5kZWZpbmVUeXBlKHBhcmFtZXRlck5vZGUubmFtZSwgcGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGUpO1xuXG5cdFx0XHRyZXR1cm4gcGFyYW1ldGVyU3ltYm9sO1xuXHRcdH0pO1xuXG5cdFx0aWYgKG5vZGUuY2hpbGRyZW5bMF0pIHtcblx0XHRcdHJldHVybiBuZXcgTGFtYmRhVHlwZShwYXJhbWV0ZXJzLCB0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLmNoaWxkcmVuWzBdLCBsYW1iZGFTY29wZSkpO1xuXHRcdH1cblxuXHRcdHRoaXMudHlwZUVycm9yKCdMYW1iZGEgZXhwcmVzc2lvbiBtdXN0IGhhdmUgYSByZXR1cm4gdHlwZScsIG5vZGUpO1xuXHR9XG5cblx0Y2hlY2tDYWxsRXhwcmVzc2lvbihub2RlOiBBU1RDYWxsTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGNvbnN0IGNhbGxlZSA9IG5vZGUuY2FsbGVlO1xuXG5cdFx0aWYgKGNhbGxlZS50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSICYmIGNhbGxlZS5uYW1lID09PSBHUkFNTUFSLlNVUEVSKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jaGVja1N1cGVyQ29uc3RydWN0b3JDYWxsKG5vZGUsIHNjb3BlKTtcblx0XHR9XG5cblx0XHQvLyBDbGFzcy5tZXRob2QoKVxuXHRcdGlmIChjYWxsZWUgaW5zdGFuY2VvZiBBU1RNZW1iZXJOb2RlXG5cdFx0XHQmJiBjYWxsZWUub2JqZWN0LnR5cGUgPT09IEFTVE5vZGVUeXBlLklERU5USUZJRVJcblx0XHRcdCYmIHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKGNhbGxlZS5vYmplY3QubmFtZSlcblx0XHQpIHtcblx0XHRcdHJldHVybiB0aGlzLmNoZWNrU3RhdGljQ2FsbChcblx0XHRcdFx0Y2FsbGVlLm9iamVjdC5uYW1lLFxuXHRcdFx0XHRjYWxsZWUucHJvcGVydHksXG5cdFx0XHRcdG5vZGUuYXJndW1lbnRzLFxuXHRcdFx0XHRzY29wZVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBleHByLm1ldGhvZCgpXG5cdFx0aWYgKGNhbGxlZSBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpIHtcblx0XHRcdHJldHVybiB0aGlzLmNoZWNrSW5zdGFuY2VDYWxsKGNhbGxlZSwgbm9kZS5hcmd1bWVudHMsIHNjb3BlKTtcblx0XHR9XG5cblx0XHRpZiAoY2FsbGVlIGluc3RhbmNlb2YgQVNUTGFtYmRhTm9kZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tMYW1iZGFDYWxsKHRoaXMuY2hlY2tMYW1iZGFFeHByZXNzaW9uKGNhbGxlZSwgc2NvcGUpLCBub2RlLmFyZ3VtZW50cywgc2NvcGUpO1xuXHRcdH1cblxuXHRcdC8vIElkZW50aWZpZXI6IFZhcmlhYmxlIC8gTGFtYmRhXG5cdFx0aWYgKGNhbGxlZS50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0XHRpZiAoc2NvcGUuaGFzVHlwZShjYWxsZWUubmFtZSkpIHtcblx0XHRcdFx0Y29uc3QgdHlwZSA9IHNjb3BlLmdldFR5cGUoY2FsbGVlLm5hbWUpO1xuXHRcdFx0XHRpZiAodHlwZSBpbnN0YW5jZW9mIExhbWJkYVR5cGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0xhbWJkYUNhbGwodHlwZSwgbm9kZS5hcmd1bWVudHMsIHNjb3BlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNhbGwgbm9uLWZ1bmN0aW9uICR7Y2FsbGVlLm5hbWV9YCwgbm9kZSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZhbGxiYWNrOiBnbG9iYWxlIEZ1bmt0aW9uXG5cdFx0XHRyZXR1cm4gdGhpcy5jaGVja0Z1bmN0aW9uQ2FsbChjYWxsZWUubmFtZSwgbm9kZS5hcmd1bWVudHMsIHNjb3BlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gVHlwZXMuTUlYRUQ7XG5cdH1cblxuXHRjaGVja1N1cGVyQ29uc3RydWN0b3JDYWxsKG5vZGU6IEFTVENhbGxOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0Y29uc3QgY3VycmVudENsYXNzID0gc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbDtcblxuXHRcdGlmICghKGN1cnJlbnRDbGFzcyBpbnN0YW5jZW9mIENsYXNzU3ltYm9sKSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoJ3N1cGVyKCkgdXNlZCBvdXRzaWRlIG9mIGNsYXNzJywgbm9kZSk7XG5cdFx0fVxuXG5cdFx0aWYgKCFjdXJyZW50Q2xhc3Muc3VwZXJDbGFzcykge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoJ3N1cGVyKCkgdXNlZCBvdXRzaWRlIG9mIGNsYXNzIGhpZXJhcmNoeScsIG5vZGUpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHN1cGVyU3ltYm9sOiBDbGFzc1N5bWJvbCA9IHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2woY3VycmVudENsYXNzLnN1cGVyQ2xhc3MpO1xuXHRcdGlmICghc3VwZXJTeW1ib2wuY29uc3RydWN0b3JNZXRob2RTeW1ib2wpIHtcblx0XHRcdGlmIChub2RlLmFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKCdTdXBlciBjb25zdHJ1Y3RvciB0YWtlcyBubyBhcmd1bWVudHMnLCBub2RlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBUeXBlcy5WT0lEO1xuXHRcdH1cblxuXHRcdHRoaXMuY2hlY2tDYWxsQXJndW1lbnRzKHN1cGVyU3ltYm9sLmNvbnN0cnVjdG9yTWV0aG9kU3ltYm9sLCBub2RlLmFyZ3VtZW50cywgc2NvcGUpO1xuXG5cdFx0cmV0dXJuIFR5cGVzLlZPSUQ7XG5cdH1cblxuXHRjaGVja0NhbGxPbk51bGxPYmplY3RUeXBlKG9iamVjdFR5cGU6IFR5cGUsIG5vZGU6IEFTVE5vZGUpOiB2b2lkIHtcblx0XHRpZiAob2JqZWN0VHlwZS5lcXVhbHMoVHlwZXMuTlVMTCkpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgY2FsbCBtZXRob2Qgb24gbnVsbGAsIG5vZGUpO1xuXHRcdH1cblx0XHRpZiAob2JqZWN0VHlwZSBpbnN0YW5jZW9mIE51bGxhYmxlVHlwZSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBjYWxsIG1ldGhvZCBvbiBudWxsYWJsZSB0eXBlICR7b2JqZWN0VHlwZX1gLCBub2RlKTtcblx0XHR9XG5cdH1cblxuXHRjaGVja0luc3RhbmNlQ2FsbChjYWxsZWU6IEFTVE1lbWJlck5vZGUsIGNhbGxBcmd1bWVudHM6IEFTVE5vZGVbXSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGxldCBvYmplY3RUeXBlOiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24oY2FsbGVlLm9iamVjdCwgc2NvcGUpO1xuXG5cdFx0b2JqZWN0VHlwZSA9IEF1dG9ib3hpbmcuYXV0b2JveElmTmVlZGVkKG9iamVjdFR5cGUsIHRoaXMub2JqZWN0UmVnaXN0cnkpO1xuXG5cdFx0dGhpcy5jaGVja0NhbGxPbk51bGxPYmplY3RUeXBlKG9iamVjdFR5cGUsIGNhbGxlZSk7XG5cblx0XHRpZiAob2JqZWN0VHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSkge1xuXHRcdFx0Y29uc3QgbWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wgPSB0aGlzLnJlc29sdmVJbnN0YW5jZU1ldGhvZGUoXG5cdFx0XHRcdG9iamVjdFR5cGUuY2xhc3NTeW1ib2wsXG5cdFx0XHRcdGNhbGxlZS5wcm9wZXJ0eVxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKG1ldGhvZFN5bWJvbC5pc1N0YXRpYykge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNhbGwgc3RhdGljIG1ldGhvZCAke2NhbGxlZS5wcm9wZXJ0eX0gb24gaW5zdGFuY2Ugb2YgJHtjYWxsZWUub2JqZWN0Lm5hbWV9YCxcblx0XHRcdFx0ICAgICAgICAgICAgICAgY2FsbGVlKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5jaGVja0luc3RhbmNlTWV0aG9kQWNjZXNzKGNhbGxlZSwgb2JqZWN0VHlwZS5jbGFzc1N5bWJvbCwgbWV0aG9kU3ltYm9sLCBzY29wZSk7XG5cblx0XHRcdGNvbnN0IG93bmVyOiBDbGFzc1N5bWJvbCB8IEludGVyZmFjZVN5bWJvbCB8IG51bGwgPSBtZXRob2RTeW1ib2wub3duZXI7XG5cblx0XHRcdGlmIChvd25lciA9PT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNhbGwgbWV0aG9kIG9uIG5vbi1vYmplY3RgLCBjYWxsZWUpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzdWJzdGl0dXRpb25NYXA6IE1hcDxzdHJpbmcsIFR5cGU+ID0gYnVpbGRUeXBlU3Vic3RpdHV0aW9uTWFwKFxuXHRcdFx0XHRvd25lci50eXBlUGFyYW1ldGVyU3ltYm9scyxcblx0XHRcdFx0b2JqZWN0VHlwZS50eXBlQXJndW1lbnRzXG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLmNoZWNrQ2FsbEFyZ3VtZW50cyhtZXRob2RTeW1ib2wsIGNhbGxBcmd1bWVudHMsIHNjb3BlLCBzdWJzdGl0dXRpb25NYXApO1xuXG5cdFx0XHRyZXR1cm4gc3Vic3RpdHV0ZVR5cGUobWV0aG9kU3ltYm9sLnJldHVyblR5cGUsIHN1YnN0aXR1dGlvbk1hcCk7XG5cdFx0fVxuXG5cdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBjYWxsIG1ldGhvZCBvbiBub24tb2JqZWN0YCwgY2FsbGVlKTtcblx0fVxuXG5cdGNoZWNrU3RhdGljQ2FsbChjbGFzc05hbWU6IHN0cmluZywgbWV0aG9kTmFtZTogc3RyaW5nLCBjYWxsQXJndW1lbnRzOiBBU1ROb2RlW10sIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRjb25zdCBjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wgPSB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKGNsYXNzTmFtZSk7XG5cblx0XHRjb25zdCBtZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCB8IG51bGwgPSBjbGFzc1N5bWJvbC5zdGF0aWNNZXRob2RTeW1ib2xzLmdldChtZXRob2ROYW1lKSB8fCBudWxsO1xuXHRcdGlmICghbWV0aG9kU3ltYm9sKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgVW5rbm93biBzdGF0aWMgbWV0aG9kICR7Y2xhc3NOYW1lfS4ke21ldGhvZE5hbWV9YCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jaGVja1N0YXRpY01ldGhvZEFjY2VzcyhjbGFzc1N5bWJvbCwgbWV0aG9kU3ltYm9sLCBzY29wZSlcblxuXHRcdHRoaXMuY2hlY2tDYWxsQXJndW1lbnRzKG1ldGhvZFN5bWJvbCwgY2FsbEFyZ3VtZW50cywgc2NvcGUpO1xuXG5cdFx0cmV0dXJuIG1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlO1xuXHR9XG5cblx0Y2hlY2tMYW1iZGFDYWxsKGxhbWJkYTogTGFtYmRhVHlwZSwgY2FsbEFyZ3VtZW50czogQVNUTm9kZVtdLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cblx0XHR0aGlzLmNoZWNrQ2FsbEFyZ3VtZW50cyhsYW1iZGEsIGNhbGxBcmd1bWVudHMsIHNjb3BlKTtcblxuXHRcdHJldHVybiBsYW1iZGEucmV0dXJuVHlwZTtcblx0fVxuXG5cdGNoZWNrRnVuY3Rpb25DYWxsKG5hbWU6IHN0cmluZywgY2FsbEFyZ3VtZW50czogQVNUTm9kZVtdLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0aWYgKCFnbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeS5oYXMobmFtZSkpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBVbmtub3duIGZ1bmN0aW9uICR7bmFtZX1gKTtcblx0XHR9XG5cblx0XHRjb25zdCBuYXRpdmVGdW5jdGlvbjogTmF0aXZlRnVuY3Rpb24gPSBnbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeS5nZXQobmFtZSk7XG5cblx0XHR0aGlzLmNoZWNrQ2FsbEFyZ3VtZW50cyhuYXRpdmVGdW5jdGlvbiwgY2FsbEFyZ3VtZW50cywgc2NvcGUpO1xuXG5cdFx0cmV0dXJuIG5hdGl2ZUZ1bmN0aW9uLnJldHVyblR5cGVcblx0XHRcdD8gdGhpcy53cmFwVHlwZShuYXRpdmVGdW5jdGlvbi5yZXR1cm5UeXBlLCBzY29wZSlcblx0XHRcdDogVHlwZXMuVk9JRDtcblx0fVxuXG5cdHBhcmFtZXRlcnNTeW1ib2xzRnJvbUNhbGxhYmxlU3ltYm9sKGNhbGxhYmxlU3ltYm9sOiBNZXRob2RTeW1ib2wgfCBMYW1iZGFUeXBlIHwgTmF0aXZlRnVuY3Rpb24pOiBQYXJhbWV0ZXJTeW1ib2xbXSB7XG5cdFx0aWYgKGNhbGxhYmxlU3ltYm9sIGluc3RhbmNlb2YgTmF0aXZlRnVuY3Rpb24pIHtcblx0XHRcdHJldHVybiBjYWxsYWJsZVN5bWJvbFxuXHRcdFx0XHQucGFyYW1ldGVyTm9kZXNcblx0XHRcdFx0Lm1hcChwYXJhbWV0ZXJOb2RlID0+IHRoaXMucGFyYW1ldGVyTm9kZVRvU3ltYm9sKHBhcmFtZXRlck5vZGUpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY2FsbGFibGVTeW1ib2wucGFyYW1ldGVyU3ltYm9sc1xuXHR9XG5cblx0Y2hlY2tDYWxsQXJndW1lbnRzKFxuXHRcdGNhbGxhYmxlU3ltYm9sOiBNZXRob2RTeW1ib2wgfCBMYW1iZGFUeXBlIHwgTmF0aXZlRnVuY3Rpb24sXG5cdFx0Y2FsbEFyZ3VtZW50czogQVNUTm9kZVtdLFxuXHRcdHNjb3BlOiBUeXBlU2NvcGUsXG5cdFx0c3Vic3RpdHV0aW9uTWFwOiBNYXA8c3RyaW5nLCBUeXBlPiA9IG5ldyBNYXAoKVxuXHQpOiB2b2lkIHtcblx0XHRjb25zdCBjYWxsU2NvcGUgPSBuZXcgVHlwZVNjb3BlKHNjb3BlKTtcblx0XHRsZXQgcGFyYW1ldGVyU3ltYm9scyA9IHRoaXMucGFyYW1ldGVyc1N5bWJvbHNGcm9tQ2FsbGFibGVTeW1ib2woY2FsbGFibGVTeW1ib2wpO1xuXG5cdFx0aWYgKGNhbGxBcmd1bWVudHMubGVuZ3RoID4gcGFyYW1ldGVyU3ltYm9scy5sZW5ndGgpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKFwiQXJndW1lbnQgY291bnQgbWlzbWF0Y2hcIik7XG5cdFx0fVxuXG5cdFx0bGV0IGFjdHVhbFR5cGU6IFR5cGU7XG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHBhcmFtZXRlclN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHBhcmFtZXRlclN5bWJvbDogUGFyYW1ldGVyU3ltYm9sIHwgbnVsbCA9IHBhcmFtZXRlclN5bWJvbHNbaV0gfHwgbnVsbDtcblx0XHRcdGNvbnN0IGNhbGxBcmd1bWVudDogQVNUTm9kZSB8IG51bGwgPSBjYWxsQXJndW1lbnRzW2ldIHx8IG51bGw7XG5cblx0XHRcdGlmIChwYXJhbWV0ZXJTeW1ib2wpIHtcblx0XHRcdFx0Y29uc3QgZXhwZWN0ZWRUeXBlOiBUeXBlID0gc3Vic3RpdHV0ZVR5cGUocGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGUsIHN1YnN0aXR1dGlvbk1hcCk7XG5cblx0XHRcdFx0aWYgKGNhbGxBcmd1bWVudCkge1xuXHRcdFx0XHRcdGFjdHVhbFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihjYWxsQXJndW1lbnQsIGNhbGxTY29wZSwgZXhwZWN0ZWRUeXBlKTtcblx0XHRcdFx0fSBlbHNlIGlmIChwYXJhbWV0ZXJTeW1ib2wuZGVmYXVsdFR5cGUpIHtcblx0XHRcdFx0XHRhY3R1YWxUeXBlID0gcGFyYW1ldGVyU3ltYm9sLmRlZmF1bHRUeXBlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMudHlwZUVycm9yKGBNaXNzaW5nIGFyZ3VtZW50ICR7cGFyYW1ldGVyU3ltYm9sLm5hbWV9YCwgY2FsbEFyZ3VtZW50KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuY2hlY2tBc3NpZ25hYmxlKGV4cGVjdGVkVHlwZSwgYWN0dWFsVHlwZSwgY2FsbEFyZ3VtZW50c1tpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y2hlY2tBc3NpZ25hYmxlKGV4cGVjdGVkVHlwZTogVHlwZSwgYWN0dWFsVHlwZTogVHlwZSwgbm9kZTogQVNUTm9kZSB8IG51bGwgPSBudWxsKTogdm9pZCB7XG5cdFx0aWYgKGV4cGVjdGVkVHlwZS5lcXVhbHMoYWN0dWFsVHlwZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoZXhwZWN0ZWRUeXBlIGluc3RhbmNlb2YgTWl4ZWRUeXBlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGV4cGVjdGVkVHlwZSBpbnN0YW5jZW9mIE51bGxhYmxlVHlwZSkge1xuXHRcdFx0aWYgKGFjdHVhbFR5cGUgPT09IFR5cGVzLk5VTEwpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGV4cGVjdGVkVHlwZS5pbm5lci5hY2NlcHRzKGFjdHVhbFR5cGUpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZXhwZWN0ZWRUeXBlLmFjY2VwdHMoYWN0dWFsVHlwZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnR5cGVFcnJvcihgVHlwZSBtaXNtYXRjaDogJHtleHBlY3RlZFR5cGV9IDw+ICR7YWN0dWFsVHlwZX1gLCBub2RlKTtcblx0fVxuXG5cdGNoZWNrQm9keShjaGlsZHJlbjogQVNUTm9kZVtdLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0bGV0IHJldHVyblR5cGU6IFR5cGUgPSBUeXBlcy5NSVhFRDtcblxuXHRcdGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcblx0XHRcdGNvbnN0IHN0YXRlbWVudFJlc3VsdCA9IHRoaXMuY2hlY2tTdGF0ZW1lbnQoY2hpbGQsIHNjb3BlKTtcblx0XHRcdGlmIChzdGF0ZW1lbnRSZXN1bHQuZGlkUmV0dXJuICYmIHN0YXRlbWVudFJlc3VsdC5yZXR1cm5UeXBlKSB7XG5cdFx0XHRcdHJldHVyblR5cGUgPSBzdGF0ZW1lbnRSZXN1bHQucmV0dXJuVHlwZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmV0dXJuVHlwZTtcblx0fVxuXG5cdGNoZWNrUmV0dXJuVHlwZShleHBlY3RlZFR5cGU6IFR5cGUsIGFjdHVhbFR5cGU6IFR5cGUsIG5vZGU6IEFTVE1ldGhvZE5vZGUpOiB2b2lkIHtcblx0XHQvLyB2b2lkLU1ldGhvZGVcblx0XHRpZiAoZXhwZWN0ZWRUeXBlID09PSBUeXBlcy5WT0lEKSB7XG5cdFx0XHRpZiAoYWN0dWFsVHlwZSAhPT0gVHlwZXMuTUlYRUQgJiYgYWN0dWFsVHlwZSAhPT0gVHlwZXMuVk9JRCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IHJldHVybiAke2FjdHVhbFR5cGV9IGZyb20gdm9pZCBtZXRob2RgLCBub2RlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBrZWluIHJldHVybiB2b3JoYW5kZW5cblx0XHRpZiAoYWN0dWFsVHlwZSA9PT0gVHlwZXMuTUlYRUQpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBNaXNzaW5nIHJldHVybiBzdGF0ZW1lbnQgKGV4cGVjdGVkICR7ZXhwZWN0ZWRUeXBlfSlgLCBub2RlKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyB0eXAtaW5rb21wYXRpYmVsXG5cdFx0aWYgKCFleHBlY3RlZFR5cGUuYWNjZXB0cyhhY3R1YWxUeXBlKSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFJldHVybiB0eXBlIG1pc21hdGNoOiBleHBlY3RlZCAke2V4cGVjdGVkVHlwZX0sIGdvdCAke2FjdHVhbFR5cGV9YCwgbm9kZSk7XG5cdFx0fVxuXHR9XG5cblx0cmVzb2x2ZUluc3RhbmNlTWV0aG9kZShjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wsIG1ldGhvZE5hbWU6IHN0cmluZyk6IE1ldGhvZFN5bWJvbCB7XG5cdFx0LyoqIEB0eXBlIHtNZXRob2RTeW1ib2x8bnVsbH0gKi9cblx0XHRjb25zdCBtZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCB8IG51bGwgPSB0aGlzLnJlc29sdmVJbkhpZXJhcmNoeShcblx0XHRcdGNsYXNzU3ltYm9sLFxuXHRcdFx0Y2xhc3NTeW1ib2wgPT4gY2xhc3NTeW1ib2wuaW5zdGFuY2VNZXRob2RTeW1ib2xzLmdldChtZXRob2ROYW1lKSB8fCBudWxsXG5cdFx0KTtcblxuXHRcdGlmICghbWV0aG9kU3ltYm9sKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgVW5rbm93biBtZXRob2QgJHtjbGFzc1N5bWJvbC5uYW1lfS4ke21ldGhvZE5hbWV9YCwgY2xhc3NTeW1ib2wubm9kZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1ldGhvZFN5bWJvbDtcblx0fVxuXG5cdHJlc29sdmVJbkhpZXJhcmNoeShjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wsIHJlc29sdmVyOiAoY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sKSA9PiBhbnkpOiBhbnkge1xuXHRcdGxldCBjdXJyZW50OiBDbGFzc1N5bWJvbCB8IG51bGwgPSBjbGFzc1N5bWJvbDtcblxuXHRcdHdoaWxlIChjdXJyZW50KSB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSByZXNvbHZlcihjdXJyZW50KTtcblx0XHRcdGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCAmJiByZXN1bHQgIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFjdXJyZW50LnN1cGVyQ2xhc3MpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdGN1cnJlbnQgPSB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKGN1cnJlbnQuc3VwZXJDbGFzcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRuZXdBcnJheVR5cGVPZihlbGVtZW50VHlwZTogVHlwZSk6IENsYXNzUmVmVHlwZSB7XG5cdFx0Y29uc3QgY2xhc3NOYW1lOiBzdHJpbmcgfCBudWxsID0gUHJpbWl0aXZlQ2xhc3NUeXBlcy5nZXRDbGFzc1JlZk5hbWUoUHJpbWl0aXZlQ2xhc3NUeXBlcy5BUlJBWSk7XG5cblx0XHRpZiAoY2xhc3NOYW1lID09PSBudWxsKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcignSW50ZXJuYWwgZXJyb3I6IENhbm5vdCBmaW5kIGNsYXNzIG5hbWUgZm9yIGFycmF5IHR5cGUuJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBDbGFzc1JlZlR5cGUodGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChjbGFzc05hbWUpLCBbZWxlbWVudFR5cGVdKTtcblx0fVxuXG5cdHdyYXBUeXBlKHR5cGU6IEFTVFR5cGVOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0cmV0dXJuIHdyYXBUeXBlKHR5cGUsIHRoaXMub2JqZWN0UmVnaXN0cnksIHNjb3BlKTtcblx0fVxuXG5cdHBhcmFtZXRlck5vZGVUb1N5bWJvbChwYXJhbWV0ZXJOb2RlOiBBU1RQYXJhbWV0ZXJOb2RlLCBzY29wZTogVHlwZVNjb3BlID0gbmV3IFR5cGVTY29wZSgpKTogUGFyYW1ldGVyU3ltYm9sIHtcblx0XHRjb25zdCBwYXJhbWV0ZXJUeXBlID0gcGFyYW1ldGVyTm9kZS50eXBlQW5ub3RhdGlvblxuXHRcdFx0PyB0aGlzLndyYXBUeXBlKHBhcmFtZXRlck5vZGUudHlwZUFubm90YXRpb24sIHNjb3BlKVxuXHRcdFx0OiBUeXBlcy5NSVhFRDtcblxuXHRcdGxldCBkZWZhdWx0VHlwZSA9IG51bGw7XG5cdFx0aWYgKHBhcmFtZXRlck5vZGUuZGVmYXVsdFZhbHVlKSB7XG5cdFx0XHRkZWZhdWx0VHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKHBhcmFtZXRlck5vZGUuZGVmYXVsdFZhbHVlLCBuZXcgVHlwZVNjb3BlKCkpO1xuXG5cdFx0XHRpZiAoZGVmYXVsdFR5cGVcblx0XHRcdFx0JiYgIXBhcmFtZXRlclR5cGUuZXF1YWxzKFR5cGVzLk1JWEVEKVxuXHRcdFx0XHQmJiAhcGFyYW1ldGVyVHlwZS5lcXVhbHMoZGVmYXVsdFR5cGUpKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKFxuXHRcdFx0XHRcdGBEZWZhdWx0IHZhbHVlIGZvciBwYXJhbWV0ZXIgJyR7cGFyYW1ldGVyTm9kZS5uYW1lfScgZG9lcyBub3QgbWF0Y2ggdHlwZS5gLFxuXHRcdFx0XHRcdHBhcmFtZXRlck5vZGVcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IFBhcmFtZXRlclN5bWJvbChcblx0XHRcdHBhcmFtZXRlck5vZGUubmFtZSxcblx0XHRcdHBhcmFtZXRlclR5cGUsXG5cdFx0XHRkZWZhdWx0VHlwZSxcblx0XHRcdHBhcmFtZXRlck5vZGVcblx0XHQpO1xuXHR9XG5cblx0cmVnaXN0ZXJDbGFzc1N5bWJvbChjbGFzc05vZGU6IEFTVENsYXNzTm9kZSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmhhc1N5bWJvbChjbGFzc05vZGUubmFtZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBjbGFzc1Njb3BlID0gbmV3IFR5cGVTY29wZSgpO1xuXHRcdGNvbnN0IGNsYXNzU3ltYm9sID0gbmV3IENsYXNzU3ltYm9sKGNsYXNzTm9kZSk7XG5cblx0XHR0cnkge1xuXHRcdFx0aWYgKGNsYXNzU3ltYm9sLnN1cGVyQ2xhc3MpIHtcblx0XHRcdFx0Y2xhc3NTeW1ib2wuc3VwZXJDbGFzc1N5bWJvbCA9IHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2woY2xhc3NTeW1ib2wuc3VwZXJDbGFzcyk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdH1cblxuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuYWRkQ2xhc3NTeW1ib2woY2xhc3NTeW1ib2wpO1xuXG5cdFx0Y2xhc3NOb2RlLnR5cGVQYXJhbWV0ZXJzLmZvckVhY2gobmFtZSA9PiB7XG5cdFx0XHRjbGFzc1N5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5wdXNoKG5ldyBUeXBlUGFyYW1ldGVyU3ltYm9sKG5hbWUpKTtcblx0XHRcdGNsYXNzU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcobmFtZSwgbmV3IFR5cGVWYXJpYWJsZShuYW1lKSk7XG5cdFx0fSk7XG5cblx0XHRmb3IgKGNvbnN0IHR5cGVOb2RlIG9mIGNsYXNzTm9kZS5pbXBsZW1lbnRzSW50ZXJmYWNlcykge1xuXHRcdFx0Y29uc3QgaW50ZXJmYWNlVHlwZTogVHlwZSA9IHRoaXMud3JhcFR5cGUodHlwZU5vZGUsIGNsYXNzU2NvcGUpO1xuXHRcdFx0aWYgKGludGVyZmFjZVR5cGUgaW5zdGFuY2VvZiBJbnRlcmZhY2VSZWZUeXBlKSB7XG5cdFx0XHRcdGNsYXNzU3ltYm9sLmltcGxlbWVudHNJbnRlcmZhY2VzLnB1c2goaW50ZXJmYWNlVHlwZSk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYEV4cGVjdGVkIGludGVyZmFjZSB0eXBlLCBnb3QgJHtpbnRlcmZhY2VUeXBlfWAsIHR5cGVOb2RlKTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IG1lbWJlck5vZGUgb2YgY2xhc3NOb2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobWVtYmVyTm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5GSUVMRCAmJiBtZW1iZXJOb2RlIGluc3RhbmNlb2YgQVNURmllbGROb2RlKSB7XG5cdFx0XHRcdGNvbnN0IHRhcmdldDogTWFwPHN0cmluZywgRmllbGRTeW1ib2w+ID0gbWVtYmVyTm9kZS5tb2RpZmllcnMuc3RhdGljXG5cdFx0XHRcdFx0PyBjbGFzc1N5bWJvbC5zdGF0aWNGaWVsZFN5bWJvbHNcblx0XHRcdFx0XHQ6IGNsYXNzU3ltYm9sLmluc3RhbmNlRmllbGRTeW1ib2xzO1xuXG5cdFx0XHRcdGNvbnN0IGZpZWxkU3ltYm9sID0gbmV3IEZpZWxkU3ltYm9sKFxuXHRcdFx0XHRcdG1lbWJlck5vZGUsXG5cdFx0XHRcdFx0bWVtYmVyTm9kZS5maWVsZFR5cGVcblx0XHRcdFx0XHRcdD8gdGhpcy53cmFwVHlwZShtZW1iZXJOb2RlLmZpZWxkVHlwZSwgY2xhc3NTY29wZSlcblx0XHRcdFx0XHRcdDogVHlwZXMuTUlYRURcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRmaWVsZFN5bWJvbC5vd25lciA9IGNsYXNzU3ltYm9sO1xuXG5cdFx0XHRcdHRhcmdldC5zZXQoZmllbGRTeW1ib2wubmFtZSwgZmllbGRTeW1ib2wpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoKG1lbWJlck5vZGUudHlwZSA9PT0gQVNUTm9kZVR5cGUuTUVUSE9EIHx8IG1lbWJlck5vZGUudHlwZSA9PT0gQVNUTm9kZVR5cGUuQ09OU1RSVUNUT1IpXG5cdFx0XHRcdCYmIG1lbWJlck5vZGUgaW5zdGFuY2VvZiBBU1RNZXRob2ROb2RlKSB7XG5cblx0XHRcdFx0Y29uc3QgbWV0aG9kU2NvcGUgPSBuZXcgVHlwZVNjb3BlKGNsYXNzU2NvcGUpO1xuXHRcdFx0XHRjb25zdCBtZXRob2RTeW1ib2wgPSBuZXcgTWV0aG9kU3ltYm9sKG1lbWJlck5vZGUpO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC5vd25lciA9IGNsYXNzU3ltYm9sO1xuXG5cdFx0XHRcdG1lbWJlck5vZGUudHlwZVBhcmFtZXRlcnMuZm9yRWFjaChuYW1lID0+IHtcblx0XHRcdFx0XHRtZXRob2RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMucHVzaChuZXcgVHlwZVBhcmFtZXRlclN5bWJvbChuYW1lKSk7XG5cdFx0XHRcdFx0bWV0aG9kU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcobmFtZSwgbmV3IFR5cGVWYXJpYWJsZShuYW1lKSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzID0gbWVtYmVyTm9kZVxuXHRcdFx0XHRcdC5wYXJhbWV0ZXJzXG5cdFx0XHRcdFx0Lm1hcChwYXJhbWV0ZXJOb2RlID0+IHRoaXMucGFyYW1ldGVyTm9kZVRvU3ltYm9sKHBhcmFtZXRlck5vZGUsIG1ldGhvZFNjb3BlKSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnJldHVyblR5cGUgPSBtZW1iZXJOb2RlLnJldHVyblR5cGVcblx0XHRcdFx0XHQ/IHRoaXMud3JhcFR5cGUobWVtYmVyTm9kZS5yZXR1cm5UeXBlLCBtZXRob2RTY29wZSlcblx0XHRcdFx0XHQ6IFR5cGVzLlZPSUQ7XG5cblx0XHRcdFx0aWYgKG1lbWJlck5vZGUudHlwZSA9PT0gQVNUTm9kZVR5cGUuQ09OU1RSVUNUT1IpIHtcblx0XHRcdFx0XHRjbGFzc1N5bWJvbC5jb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbCA9IG1ldGhvZFN5bWJvbDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zdCB0YXJnZXQgPSBtZXRob2RTeW1ib2wuaXNTdGF0aWNcblx0XHRcdFx0XHRcdD8gY2xhc3NTeW1ib2wuc3RhdGljTWV0aG9kU3ltYm9sc1xuXHRcdFx0XHRcdFx0OiBjbGFzc1N5bWJvbC5pbnN0YW5jZU1ldGhvZFN5bWJvbHM7XG5cblx0XHRcdFx0XHR0YXJnZXQuc2V0KG1lbWJlck5vZGUubmFtZSwgbWV0aG9kU3ltYm9sKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJlZ2lzdGVySW50ZXJmYWNlU3ltYm9sKGludGVyZmFjZU5vZGU6IEFTVEludGVyZmFjZU5vZGUpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5oYXNTeW1ib2woaW50ZXJmYWNlTm9kZS5uYW1lKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGludGVyZmFjZVNjb3BlID0gbmV3IFR5cGVTY29wZSgpO1xuXHRcdGNvbnN0IGludGVyZmFjZVN5bWJvbCA9IG5ldyBJbnRlcmZhY2VTeW1ib2woaW50ZXJmYWNlTm9kZSk7XG5cblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmFkZEludGVyZmFjZVN5bWJvbChpbnRlcmZhY2VTeW1ib2wpO1xuXG5cdFx0aW50ZXJmYWNlTm9kZS50eXBlUGFyYW1ldGVycy5mb3JFYWNoKG5hbWUgPT4ge1xuXHRcdFx0aW50ZXJmYWNlU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLnB1c2gobmV3IFR5cGVQYXJhbWV0ZXJTeW1ib2wobmFtZSkpO1xuXHRcdFx0aW50ZXJmYWNlU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcobmFtZSwgbmV3IFR5cGVWYXJpYWJsZShuYW1lKSk7XG5cdFx0fSk7XG5cblx0XHRmb3IgKGNvbnN0IGludGVyZmFjZU5hbWUgb2YgaW50ZXJmYWNlTm9kZS5leHRlbmRzSW50ZXJmYWNlcykge1xuXHRcdFx0Y29uc3QgaW50ZXJmYWNlU3ltYm9sOiBJbnRlcmZhY2VTeW1ib2wgPSB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldEludGVyYWNlU3ltYm9sKGludGVyZmFjZU5hbWUpO1xuXG5cdFx0XHRpbnRlcmZhY2VTeW1ib2wuZXh0ZW5kc0ludGVyZmFjZXMucHVzaChpbnRlcmZhY2VTeW1ib2wpO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgbWVtYmVyTm9kZSBvZiBpbnRlcmZhY2VOb2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobWVtYmVyTm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5GSUVMRCAmJiBtZW1iZXJOb2RlIGluc3RhbmNlb2YgQVNURmllbGROb2RlKSB7XG5cdFx0XHRcdGNvbnN0IGZpZWxkU3ltYm9sID0gbmV3IEZpZWxkU3ltYm9sKFxuXHRcdFx0XHRcdG1lbWJlck5vZGUsXG5cdFx0XHRcdFx0bWVtYmVyTm9kZS5maWVsZFR5cGVcblx0XHRcdFx0XHRcdD8gdGhpcy53cmFwVHlwZShtZW1iZXJOb2RlLmZpZWxkVHlwZSwgaW50ZXJmYWNlU2NvcGUpXG5cdFx0XHRcdFx0XHQ6IFR5cGVzLk1JWEVEXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0ZmllbGRTeW1ib2wub3duZXIgPSBpbnRlcmZhY2VTeW1ib2w7XG5cblx0XHRcdFx0aW50ZXJmYWNlU3ltYm9sLnN0YXRpY0ZpZWxkU3ltYm9scy5zZXQoZmllbGRTeW1ib2wubmFtZSwgZmllbGRTeW1ib2wpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoKG1lbWJlck5vZGUudHlwZSA9PT0gQVNUTm9kZVR5cGUuTUVUSE9EKSAmJiBtZW1iZXJOb2RlIGluc3RhbmNlb2YgQVNUTWV0aG9kTm9kZSkge1xuXG5cdFx0XHRcdGNvbnN0IG1ldGhvZFNjb3BlID0gbmV3IFR5cGVTY29wZShpbnRlcmZhY2VTY29wZSk7XG5cdFx0XHRcdGNvbnN0IG1ldGhvZFN5bWJvbCA9IG5ldyBNZXRob2RTeW1ib2wobWVtYmVyTm9kZSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLm93bmVyID0gaW50ZXJmYWNlU3ltYm9sO1xuXHRcdFx0XHRtZXRob2RTeW1ib2wuaXNTdGF0aWMgPSBtZW1iZXJOb2RlLm1vZGlmaWVycy5zdGF0aWM7XG5cblx0XHRcdFx0bWVtYmVyTm9kZS50eXBlUGFyYW1ldGVycy5mb3JFYWNoKG5hbWUgPT4ge1xuXHRcdFx0XHRcdG1ldGhvZFN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5wdXNoKG5ldyBUeXBlUGFyYW1ldGVyU3ltYm9sKG5hbWUpKTtcblx0XHRcdFx0XHRtZXRob2RTY29wZS5kZWZpbmVUeXBlQmluZGluZyhuYW1lLCBuZXcgVHlwZVZhcmlhYmxlKG5hbWUpKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMgPSBtZW1iZXJOb2RlXG5cdFx0XHRcdFx0LnBhcmFtZXRlcnNcblx0XHRcdFx0XHQubWFwKHBhcmFtZXRlck5vZGUgPT4gdGhpcy5wYXJhbWV0ZXJOb2RlVG9TeW1ib2wocGFyYW1ldGVyTm9kZSwgbWV0aG9kU2NvcGUpKTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wucmV0dXJuVHlwZSA9IG1lbWJlck5vZGUucmV0dXJuVHlwZVxuXHRcdFx0XHRcdD8gdGhpcy53cmFwVHlwZShtZW1iZXJOb2RlLnJldHVyblR5cGUsIG1ldGhvZFNjb3BlKVxuXHRcdFx0XHRcdDogVHlwZXMuVk9JRDtcblxuXHRcdFx0XHRpbnRlcmZhY2VTeW1ib2wuaW5zdGFuY2VNZXRob2RTeW1ib2xzLnNldChtZW1iZXJOb2RlLm5hbWUsIG1ldGhvZFN5bWJvbCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0dHlwZUVycm9yKG1lc3NhZ2U6IHN0cmluZywgbm9kZTogQVNUTm9kZSB8IG51bGwgPSBudWxsKTogbmV2ZXIge1xuXHRcdHRocm93VHlwZUVycm9yKG1lc3NhZ2UsIG5vZGU/LnNwYW4pO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge0FTVEltcG9ydE5vZGUsIEFTVE5vZGUsIEFTVE5vZGVUeXBlfSBmcm9tIFwiLi9hc3RcIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi9wYXJzZXJfc291cmNlXCI7XG5pbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4vcGFyc2VyXCI7XG5pbXBvcnQge0Vudmlyb25tZW50fSBmcm9tIFwiLi9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQgdHlwZSB7QWJzdHJhY3RGaWxlTG9hZGVyfSBmcm9tIFwiLi9sb2FkZXJzXCI7XG5pbXBvcnQge3Rocm93UnVudGltZUVycm9yfSBmcm9tIFwiLi9lcnJvcnMudHNcIjtcblxuZXhwb3J0IGNsYXNzIERlcGVuZGVuY3kge1xuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkgPSBuZXcgT2JqZWN0UmVnaXN0cnkoKTtcblx0bmFtZXM6IHN0cmluZ1tdO1xuXHR1cmw6IHN0cmluZztcblx0YXN0OiBBU1ROb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IobmFtZXM6IHN0cmluZ1tdLCB1cmw6IHN0cmluZykge1xuXHRcdHRoaXMubmFtZXMgPSBuYW1lcztcblx0XHR0aGlzLnVybCA9IHVybDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgRGVwZW5kZW5jeUxvYWRlciB7XG5cdGVudmlyb25tZW50OiBFbnZpcm9ubWVudDtcblx0b2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5O1xuXHRmaWxlTG9hZGVyOiBBYnN0cmFjdEZpbGVMb2FkZXI7XG5cblx0Y29uc3RydWN0b3IoZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGZpbGVMb2FkZXI6IEFic3RyYWN0RmlsZUxvYWRlcikge1xuXHRcdHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5ID0gb2JqZWN0UmVnaXN0cnk7XG5cdFx0dGhpcy5maWxlTG9hZGVyID0gZmlsZUxvYWRlcjtcblx0fVxuXG5cdGFzeW5jIHBhcnNlRGVwZW5kZW5jeShkZXBlbmRlbmN5OiBEZXBlbmRlbmN5KTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIGF3YWl0IHRoaXMucGFyc2VGaWxlKGRlcGVuZGVuY3kudXJsKVxuXHRcdCAgICAgICAgICAgICAgICAgLnRoZW4oYXN0ID0+IGRlcGVuZGVuY3kuYXN0ID0gYXN0KVxuXHRcdCAgICAgICAgICAgICAgICAgLnRoZW4oYXN0ID0+IGRlcGVuZGVuY3kub2JqZWN0UmVnaXN0cnkuY29sbGVjdEFsbChhc3QpKTtcblx0fVxuXG5cdGFzeW5jIGNvbGxlY3REZXBlbmRlbmNpZXMoZGVwZW5kZW5jeTogRGVwZW5kZW5jeSwgZGVwZW5kZW5jaWVzOiBNYXA8c3RyaW5nLCBEZXBlbmRlbmN5Pik6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiBhd2FpdCB0aGlzLmNvbGxlY3RQcm9ncmFtRGVwZW5kZW5jaWVzKGRlcGVuZGVuY3kuYXN0KVxuXHRcdCAgICAgICAgICAgICAgICAgLnRoZW4oY2xhc3NEZXBlbmRlbmNpZXMgPT4ge1xuXHRcdFx0ICAgICAgICAgICAgICAgICBjbGFzc0RlcGVuZGVuY2llcy5mb3JFYWNoKGNsYXNzRGVwZW5kZW5jeSA9PiB7XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgaWYgKGRlcGVuZGVuY2llcy5oYXMoY2xhc3NEZXBlbmRlbmN5LnVybCkpIHtcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgIHJldHVybjtcblx0XHRcdFx0ICAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgZGVwZW5kZW5jaWVzLnNldChjbGFzc0RlcGVuZGVuY3kudXJsLCBjbGFzc0RlcGVuZGVuY3kpO1xuXHRcdFx0ICAgICAgICAgICAgICAgICB9KTtcblx0XHQgICAgICAgICAgICAgICAgIH0pO1xuXHR9XG5cblx0YXN5bmMgY29sbGVjdFByb2dyYW1EZXBlbmRlbmNpZXMoYXN0OiBBU1ROb2RlIHwgbnVsbCk6IFByb21pc2U8TWFwPHN0cmluZywgRGVwZW5kZW5jeT4+IHtcblx0XHRpZiAoYXN0ID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gbmV3IE1hcCgpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGRlZmF1bHREZXBlbmRlbmNpZXMgPSB0aGlzLmRlZmF1bHREZXBlbmRlbmNpZXMoKTtcblx0XHRmb3IgKGNvbnN0IGRlcGVuZGVuY3kgb2YgZGVmYXVsdERlcGVuZGVuY2llcy52YWx1ZXMoKSkge1xuXHRcdFx0YXdhaXQgdGhpcy5wYXJzZURlcGVuZGVuY3koZGVwZW5kZW5jeSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZGVwZW5kZW5jaWVzID0gdGhpcy5jb2xsZWN0Q2xhc3NEZXBlbmRlbmNpZXMoYXN0KTtcblx0XHRmb3IgKGNvbnN0IGRlcGVuZGVuY3kgb2YgZGVwZW5kZW5jaWVzLnZhbHVlcygpKSB7XG5cdFx0XHRhd2FpdCB0aGlzLnBhcnNlRGVwZW5kZW5jeShkZXBlbmRlbmN5KTtcblx0XHRcdGF3YWl0IHRoaXMuY29sbGVjdERlcGVuZGVuY2llcyhkZXBlbmRlbmN5LCBkZXBlbmRlbmNpZXMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgTWFwKFsuLi5kZWZhdWx0RGVwZW5kZW5jaWVzLCAuLi5kZXBlbmRlbmNpZXNdKTtcblx0fVxuXG5cdGRlZmF1bHREZXBlbmRlbmNpZXMoKTogTWFwPHN0cmluZywgRGVwZW5kZW5jeT4ge1xuXHRcdGNvbnN0IGRlcGVuZGVuY2llcyA9IFtcblx0XHRcdG5ldyBEZXBlbmRlbmN5KFsnSXRlcmF0b3InLCAnSXRlcmFibGUnXSwgJy4vbGlicmFyeS9jb250cmFjdHMubHlyYScpXG5cdFx0XTtcblxuXHRcdGNvbnN0IG1hcCA9IG5ldyBNYXAoKTtcblx0XHRmb3IgKGNvbnN0IGRlcGVuZGVuY3kgb2YgZGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRtYXAuc2V0KGRlcGVuZGVuY3kudXJsLCBkZXBlbmRlbmN5KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWFwO1xuXHR9XG5cblx0Y29sbGVjdENsYXNzRGVwZW5kZW5jaWVzKGFzdDogQVNUTm9kZSk6IE1hcDxzdHJpbmcsIERlcGVuZGVuY3k+IHtcblx0XHRjb25zdCBjbGFzc0RlcGVuZGVuY2llcyA9IG5ldyBNYXAoKTtcblxuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChub2RlLnR5cGUgPT09IEFTVE5vZGVUeXBlLklNUE9SVCkge1xuXHRcdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEltcG9ydE5vZGUpIHtcblx0XHRcdFx0XHRpZiAobm9kZS5mcm9tID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGNsYXNzRGVwZW5kZW5jaWVzLmhhcyhub2RlLmZyb20pKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2xhc3NEZXBlbmRlbmNpZXMuc2V0KG5vZGUuZnJvbSwgbmV3IERlcGVuZGVuY3kobm9kZS5uYW1lcywgbm9kZS5mcm9tKSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgaW1wb3J0IG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGU/LnNwYW4pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzRGVwZW5kZW5jaWVzO1xuXHR9XG5cblx0cGFyc2VGaWxlKHVybDogc3RyaW5nKTogUHJvbWlzZTxBU1ROb2RlPiB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsZUxvYWRlclxuXHRcdCAgICAgICAgICAgLmxvYWQodXJsKVxuXHRcdCAgICAgICAgICAgLnRoZW4oY29kZSA9PiB0aGlzLnBhcnNlclNvdXJjZShuZXcgU291cmNlKGNvZGUsIHVybCkpKTtcblx0fVxuXG5cdHBhcnNlclNvdXJjZShzb3VyY2U6IFNvdXJjZSk6IEFTVE5vZGUge1xuXHRcdHJldHVybiBuZXcgUGFyc2VyKHNvdXJjZSkucGFyc2UoKTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0RlcGVuZGVuY3lMb2FkZXJ9IGZyb20gXCIuL2RlcGVuZGVuY2llc1wiO1xuaW1wb3J0IHtBU1RJbXBvcnROb2RlLCBBU1ROb2RlfSBmcm9tIFwiLi9hc3RcIjtcbmltcG9ydCB7TmF0aXZlQ2xhc3Nlc30gZnJvbSBcIi4uL2xpYnJhcnkvbmF0aXZlX2NsYXNzZXNcIjtcbmltcG9ydCB7RW52aXJvbm1lbnQsIEludGVyZmFjZURlZmluaXRpb259IGZyb20gXCIuL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5pbXBvcnQgdHlwZSB7QWJzdHJhY3RGaWxlTG9hZGVyfSBmcm9tIFwiLi9sb2FkZXJzLnRzXCI7XG5pbXBvcnQgdHlwZSB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi9saWJyYXJ5L25hdGl2ZV9jbGFzcy50c1wiO1xuaW1wb3J0IHt0aHJvd0RlcGVuZGVuY3lFcnJvcn0gZnJvbSBcIi4vZXJyb3JzLnRzXCI7XG5cbmNvbnN0IG5hdGl2ZUNsYXNzZXMgPSBuZXcgTmF0aXZlQ2xhc3NlcygpO1xuXG5leHBvcnQgY2xhc3MgTGlua2VyIHtcblx0ZW52aXJvbm1lbnQ6IEVudmlyb25tZW50O1xuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cdGRlcGVuZGVuY3lMb2FkZXI6IERlcGVuZGVuY3lMb2FkZXI7XG5cblx0Y29uc3RydWN0b3IoZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGZpbGVMb2FkZXI6IEFic3RyYWN0RmlsZUxvYWRlcikge1xuXHRcdHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5ID0gb2JqZWN0UmVnaXN0cnk7XG5cdFx0dGhpcy5kZXBlbmRlbmN5TG9hZGVyID0gbmV3IERlcGVuZGVuY3lMb2FkZXIoZW52aXJvbm1lbnQsIG9iamVjdFJlZ2lzdHJ5LCBmaWxlTG9hZGVyKTtcblx0fVxuXG5cdGxpbmtTb3VyY2VzKGFzdDogQVNUTm9kZSk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiB0aGlzLmRlcGVuZGVuY3lMb2FkZXJcblx0XHQgICAgICAgICAgIC5jb2xsZWN0UHJvZ3JhbURlcGVuZGVuY2llcyhhc3QpXG5cdFx0ICAgICAgICAgICAudGhlbihkZXBlbmRlbmNpZXMgPT4ge1xuXHRcdFx0ICAgICAgICAgICBmb3IgKGNvbnN0IGRlcGVuZGVuY3kgb2YgZGVwZW5kZW5jaWVzLnZhbHVlcygpKSB7XG5cdFx0XHRcdCAgICAgICAgICAgY29uc3Qgb2JqZWN0RGVmaW5pdGlvbnMgPSBkZXBlbmRlbmN5Lm9iamVjdFJlZ2lzdHJ5XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZldGNoQWxsT2JqZWN0RGVmaW5pdGlvbnMoKVxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52YWx1ZXMoKTtcblx0XHRcdFx0ICAgICAgICAgICBmb3IgKGxldCBvYmplY3REZWYgb2Ygb2JqZWN0RGVmaW5pdGlvbnMpIHtcblx0XHRcdFx0XHQgICAgICAgICAgIGlmIChvYmplY3REZWYgaW5zdGFuY2VvZiBJbnRlcmZhY2VEZWZpbml0aW9uKSB7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgIHRoaXMub2JqZWN0UmVnaXN0cnkuaW50ZXJmYWNlcy5zZXQob2JqZWN0RGVmLm5hbWUsIG9iamVjdERlZik7XG5cdFx0XHRcdFx0ICAgICAgICAgICB9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICB0aGlzLm9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuc2V0KG9iamVjdERlZi5uYW1lLCBvYmplY3REZWYpO1xuXHRcdFx0XHRcdCAgICAgICAgICAgfVxuXHRcdFx0XHRcdCAgICAgICAgICAgdGhpcy5lbnZpcm9ubWVudC5kZWZpbmUob2JqZWN0RGVmLm5hbWUsIG9iamVjdERlZik7XG5cdFx0XHRcdCAgICAgICAgICAgfVxuXHRcdFx0ICAgICAgICAgICB9XG5cdFx0ICAgICAgICAgICB9KVxuXHRcdCAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5sb2FkTmF0aXZlQ2xhc3Nlcyhhc3QpKVxuXHR9XG5cblx0bG9hZE5hdGl2ZUNsYXNzZXMoYXN0OiBBU1ROb2RlKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIGFzdC5jaGlsZHJlbikge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RJbXBvcnROb2RlKSB7XG5cdFx0XHRcdGlmIChub2RlLmZyb20gPT09IG51bGwpIHtcblx0XHRcdFx0XHRjb25zdCBjbGFzc05hbWUgPSBub2RlLm5hbWVzWzBdO1xuXHRcdFx0XHRcdGlmICghY2xhc3NOYW1lKSB7XG5cdFx0XHRcdFx0XHR0aHJvd0RlcGVuZGVuY3lFcnJvcihgSW52YWxpZCBpbXBvcnQgbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZT8uc3Bhbik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnN0IG5hdGl2ZUNsYXNzOiBOYXRpdmVDbGFzcyB8IG51bGwgPSBuYXRpdmVDbGFzc2VzLmNsYXNzZXMuZ2V0KGNsYXNzTmFtZSkgfHwgbnVsbDtcblx0XHRcdFx0XHRpZiAoIW5hdGl2ZUNsYXNzKSB7XG5cdFx0XHRcdFx0XHR0aHJvd0RlcGVuZGVuY3lFcnJvcihgVW5rbm93biBuYXRpdmUgY2xhc3MgJHtjbGFzc05hbWV9YCwgbm9kZT8uc3Bhbik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnN0IGNsYXNzRGVmID0gbmF0aXZlQ2xhc3MuZ2V0Q2xhc3NEZWZpbml0aW9uKCk7XG5cdFx0XHRcdFx0aWYgKCFjbGFzc0RlZikge1xuXHRcdFx0XHRcdFx0dGhyb3dEZXBlbmRlbmN5RXJyb3IoYENsYXNzIGRlZmluaXRpb24gZm9yIG5hdGl2ZSBjbGFzcyAke2NsYXNzTmFtZX0gbm90IGZvdW5kLmAsIG5vZGU/LnNwYW4pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAodGhpcy5vYmplY3RSZWdpc3RyeS5jbGFzc2VzLmhhcyhjbGFzc05hbWUpKSB7XG5cdFx0XHRcdFx0XHR0aHJvd0RlcGVuZGVuY3lFcnJvcihgQ291bGQgbm90IHJlc29sdmUgY2xhc3MgJHtjbGFzc05hbWV9LmAsIG5vZGU/LnNwYW4pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuc2V0KGNsYXNzTmFtZSwgY2xhc3NEZWYpO1xuXHRcdFx0XHRcdHRoaXMuZW52aXJvbm1lbnQuZGVmaW5lKGNsYXNzTmFtZSwgY2xhc3NEZWYpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLAogICAgImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEZpbGVMb2FkZXIge1xuXHRhYnN0cmFjdCBsb2FkKHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+O1xufVxuXG5leHBvcnQgY2xhc3MgRmV0Y2hGaWxlTG9hZGVyIGV4dGVuZHMgQWJzdHJhY3RGaWxlTG9hZGVyIHtcblx0b3ZlcnJpZGUgbG9hZCh1cmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIGZldGNoKHVybClcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0FTVEFubm90YXRpb25Ob2RlLCBBU1RDbGFzc05vZGUsIEFTVE1ldGhvZE5vZGUsIEFTVE5vZGV9IGZyb20gXCIuL2FzdFwiO1xuaW1wb3J0IHtjYWxsSW5zdGFuY2VNZXRob2QsIGNyZWF0ZUluc3RhbmNlRnJvbU5vZGUsIGV2YWxBbm5vdGF0aW9uUHJvcGVydGllc30gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfcnVudGltZVwiO1xuaW1wb3J0IHR5cGUge0Vudmlyb25tZW50fSBmcm9tIFwiLi9pbnRlcnByZXRlcl9vYmplY3RzLnRzXCI7XG5pbXBvcnQgdHlwZSB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuL2ludGVycHJldGVyX3JlZ2lzdHJ5LnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBUZXN0U3VpdGVzIHtcblx0ZW52aXJvbm1lbnQ6IEVudmlyb25tZW50O1xuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cblx0Y29uc3RydWN0b3IoZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpIHtcblx0XHR0aGlzLmVudmlyb25tZW50ICAgID0gZW52aXJvbm1lbnQ7XG5cdFx0dGhpcy5vYmplY3RSZWdpc3RyeSA9IG9iamVjdFJlZ2lzdHJ5O1xuXHR9XG5cblx0cnVuKGFzdDogQVNUTm9kZSk6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUQ2xhc3NOb2RlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGDwn6eqIFJ1bm5pbmcgVGVzdCBDYXNlcyBmb3IgJHtub2RlLm5hbWV9IC4uLmApO1xuXHRcdFx0XHR0aGlzLnJ1blRlc3RDYXNlcyhub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJ1blRlc3RDYXNlcyhjbGFzc05vZGU6IEFTVENsYXNzTm9kZSk6IHZvaWQge1xuXHRcdGZvciAoY29uc3QgbWVtYmVyIG9mIGNsYXNzTm9kZS5jaGlsZHJlbikge1xuXHRcdFx0aWYgKG1lbWJlciBpbnN0YW5jZW9mIEFTVE1ldGhvZE5vZGUpIHtcblx0XHRcdFx0Y29uc3QgYW5ub3RhdGlvbiA9IG1lbWJlci5hbm5vdGF0aW9ucz8uZmluZChhID0+IGEubmFtZSA9PT0gJ3Rlc3QnKTtcblx0XHRcdFx0aWYgKCFhbm5vdGF0aW9uKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5ydW5UZXN0Q2FzZShjbGFzc05vZGUsIG1lbWJlciwgYW5ub3RhdGlvbik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBydW5UZXN0Q2FzZShjbGFzc05vZGU6IEFTVENsYXNzTm9kZSwgbWV0aG9kTm9kZTogQVNUTWV0aG9kTm9kZSwgYW5ub3RhdGlvbjogQVNUQW5ub3RhdGlvbk5vZGUpOiB2b2lkIHtcblx0XHRjb25zdCBpbnN0YW5jZSAgID0gY3JlYXRlSW5zdGFuY2VGcm9tTm9kZShjbGFzc05vZGUpO1xuXHRcdGNvbnN0IHByb3BlcnRpZXMgPSBldmFsQW5ub3RhdGlvblByb3BlcnRpZXMoYW5ub3RhdGlvbik7XG5cblx0XHRjb25zdCB0aXRsZSA9IHByb3BlcnRpZXMudGl0bGUgPz8gYCR7Y2xhc3NOb2RlLm5hbWV9LiR7bWV0aG9kTm9kZS5uYW1lfWA7XG5cblx0XHRsZXQgZXJyb3JNZXNzYWdlID0gbnVsbDtcblxuXHRcdHRyeSB7XG5cdFx0XHRjYWxsSW5zdGFuY2VNZXRob2QoaW5zdGFuY2UsIG1ldGhvZE5vZGUsIFtdLCB0aGlzLm9iamVjdFJlZ2lzdHJ5LCB0aGlzLmVudmlyb25tZW50KTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0ZXJyb3JNZXNzYWdlID0gZXJyb3I7XG5cdFx0fVxuXG5cdFx0aWYgKGVycm9yTWVzc2FnZSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcihgIOKdjCAke3RpdGxlfSwgJHtlcnJvck1lc3NhZ2V9YCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKGAg4pyFICR7dGl0bGV9YCk7XG5cdFx0fVxuXHR9XG59XG4iLAogICAgImltcG9ydCB7UGFyc2VyfSBmcm9tIFwiLi9jb3JlL3BhcnNlclwiO1xuaW1wb3J0IHtJbnRlcnByZXRlcn0gZnJvbSBcIi4vY29yZS9pbnRlcnByZXRlclwiO1xuaW1wb3J0IHtFbnZpcm9ubWVudH0gZnJvbSBcIi4vY29yZS9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi9jb3JlL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge1R5cGVDaGVja2VyfSBmcm9tIFwiLi9jb3JlL3R5cGVjaGVja2VyXCI7XG5pbXBvcnQge0xpbmtlcn0gZnJvbSBcIi4vY29yZS9saW5rZXJcIjtcbmltcG9ydCB7RmV0Y2hGaWxlTG9hZGVyfSBmcm9tIFwiLi9jb3JlL2xvYWRlcnNcIjtcbmltcG9ydCB7VGVzdFN1aXRlc30gZnJvbSBcIi4vY29yZS90ZXN0c3VpdGVzXCI7XG5pbXBvcnQge3Rocm93RGVwZW5kZW5jeUVycm9yLCB3cmFwSnNFcnJvcn0gZnJvbSBcIi4vY29yZS9lcnJvcnNcIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi9jb3JlL3BhcnNlcl9zb3VyY2VcIjtcbmltcG9ydCB0eXBlIHtBU1ROb2RlfSBmcm9tIFwiLi9jb3JlL2FzdFwiO1xuaW1wb3J0IHtUb2tlbml6ZXJ9IGZyb20gXCIuL2NvcmUvdG9rZW5pemVyXCI7XG5pbXBvcnQgdHlwZSB7VG9rZW59IGZyb20gXCIuL2NvcmUvZ3JhbW1hclwiO1xuXG5leHBvcnQge1Rva2VuaXplcn0gZnJvbSBcIi4vY29yZS90b2tlbml6ZXJcIjtcbmV4cG9ydCB7UGFyc2VyfSBmcm9tIFwiLi9jb3JlL3BhcnNlclwiO1xuZXhwb3J0IHtTb3VyY2V9IGZyb20gXCIuL2NvcmUvcGFyc2VyX3NvdXJjZVwiO1xuXG5leHBvcnQgY2xhc3MgTHlyYVNjcmlwdCB7XG5cdHByaXZhdGUgZ2xvYmFsRW52OiBFbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudCgpO1xuXHRwcml2YXRlIGdsb2JhbE9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSA9IG5ldyBPYmplY3RSZWdpc3RyeSgpO1xuXHRwcml2YXRlIHR5cGVDaGVja2VyOiBUeXBlQ2hlY2tlciA9IG5ldyBUeXBlQ2hlY2tlcih0aGlzLmdsb2JhbE9iamVjdFJlZ2lzdHJ5KTtcblx0cHJpdmF0ZSBsaW5rZXI6IExpbmtlciA9IG5ldyBMaW5rZXIodGhpcy5nbG9iYWxFbnYsIHRoaXMuZ2xvYmFsT2JqZWN0UmVnaXN0cnksIG5ldyBGZXRjaEZpbGVMb2FkZXIoKSk7XG5cdHByaXZhdGUgaW50ZXJwcmV0ZXI6IEludGVycHJldGVyID0gbmV3IEludGVycHJldGVyKHRoaXMuZ2xvYmFsRW52LCB0aGlzLmdsb2JhbE9iamVjdFJlZ2lzdHJ5KTtcblx0cHJpdmF0ZSB0ZXN0U3VpdGU6IFRlc3RTdWl0ZXMgPSBuZXcgVGVzdFN1aXRlcyh0aGlzLmdsb2JhbEVudiwgdGhpcy5nbG9iYWxPYmplY3RSZWdpc3RyeSk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBpc0RlYnVnOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgc3RhcnRUaW1lOiBudW1iZXIgPSAwO1xuXG5cdGNvbnN0cnVjdG9yKGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSkge1xuXHRcdHRoaXMuaXNEZWJ1ZyA9IGlzRGVidWc7XG5cdH1cblxuXHRhc3luYyBydW4oc291cmNlOiBTb3VyY2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gdGhpcy5ydW5QaXBlbGluZShzb3VyY2UpXG5cdFx0ICAgICAgICAgICAudGhlbigoYXN0OiBBU1ROb2RlKSA9PiB7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlU3RhcnRUaW1lKCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuaW50ZXJwcmV0ZXIucnVuKGFzdCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlRW5kVGltZSgnaW50ZXJwcmV0ZXInKTtcblx0XHQgICAgICAgICAgIH0pO1xuXHR9XG5cblx0YXN5bmMgdGVzdChzb3VyY2U6IFNvdXJjZSk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiB0aGlzLnJ1blBpcGVsaW5lKHNvdXJjZSlcblx0XHQgICAgICAgICAgIC50aGVuKChhc3Q6IEFTVE5vZGUpID0+IHtcblx0XHRcdCAgICAgICAgICAgdGhpcy5kZWJ1Z01lYXN1cmVTdGFydFRpbWUoKTtcblx0XHRcdCAgICAgICAgICAgdGhpcy50ZXN0U3VpdGUucnVuKGFzdCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlRW5kVGltZSgndGVzdCcpO1xuXHRcdCAgICAgICAgICAgfSk7XG5cdH1cblxuXHRwcml2YXRlIHJ1blBpcGVsaW5lKHNvdXJjZTogU291cmNlKTogUHJvbWlzZTxBU1ROb2RlPiB7XG5cdFx0dGhpcy5kZWJ1Z01lYXN1cmVTdGFydFRpbWUoKVxuXHRcdGNvbnN0IGFzdDogQVNUTm9kZSA9IG5ldyBQYXJzZXIoc291cmNlKS5wYXJzZSgpO1xuXHRcdHRoaXMuZGVidWdNZWFzdXJlRW5kVGltZSgncGFyc2VyJylcblx0XHR0aGlzLmRlYnVnKGFzdCk7XG5cblx0XHRyZXR1cm4gdGhpcy5saW5rZXIubGlua1NvdXJjZXMoYXN0KVxuXHRcdCAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuXHRcdFx0ICAgICAgICAgICB0aGlzLnR5cGVDaGVja2VyLmNvbGxlY3RBbGxTeW1ib2xzRnJvbVJlZ2lzdHJ5KHRoaXMuZ2xvYmFsT2JqZWN0UmVnaXN0cnkpO1xuXHRcdCAgICAgICAgICAgfSlcblx0XHQgICAgICAgICAgIC50aGVuKCgpID0+IHtcblx0XHRcdCAgICAgICAgICAgdGhpcy5kZWJ1Z01lYXN1cmVTdGFydFRpbWUoKTtcblx0XHRcdCAgICAgICAgICAgdGhpcy50eXBlQ2hlY2tlci5jaGVjayhhc3QpO1xuXHRcdFx0ICAgICAgICAgICB0aGlzLmRlYnVnTWVhc3VyZUVuZFRpbWUoJ3R5cGVjaGVja2VyJyk7XG5cblx0XHRcdCAgICAgICAgICAgcmV0dXJuIGFzdDtcblx0XHQgICAgICAgICAgIH0pO1xuXHR9XG5cblx0ZGVidWcodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzRGVidWcpIHtcblx0XHRcdGNvbnNvbGUubG9nKHZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRkZWJ1Z01lYXN1cmVTdGFydFRpbWUoKTogdm9pZCB7XG5cdFx0dGhpcy5zdGFydFRpbWUgPSB0aGlzLmRlYnVnVGltZXN0YW1wKCk7XG5cdH1cblxuXHRkZWJ1Z01lYXN1cmVFbmRUaW1lKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuZGVidWcobWVzc2FnZSArICc6ICcgKyAodGhpcy5kZWJ1Z1RpbWVzdGFtcCgpIC0gdGhpcy5zdGFydFRpbWUpICsgJ21zJyk7XG5cdH1cblxuXHRkZWJ1Z1RpbWVzdGFtcCgpOiBudW1iZXIge1xuXHRcdGlmICghdGhpcy5pc0RlYnVnKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdFx0cmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xuXHR9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFNvdXJjZSh1cmw6IHN0cmluZyk6IFByb21pc2U8U291cmNlPiB7XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcblx0aWYgKCFyZXNwb25zZS5vaykge1xuXHRcdHRocm93RGVwZW5kZW5jeUVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7dXJsfWApO1xuXHR9XG5cblx0cmV0dXJuIG5ldyBTb3VyY2UoYXdhaXQgcmVzcG9uc2UudGV4dCgpKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJ1bih1cmw6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdHJldHVybiBhd2FpdCBydW5Gcm9tU291cmNlKGF3YWl0IGZldGNoU291cmNlKHVybCksIGlzRGVidWcpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuRnJvbVNvdXJjZShzb3VyY2U6IFNvdXJjZSwgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgbHlyYVNjcmlwdCA9IG5ldyBMeXJhU2NyaXB0KGlzRGVidWcpO1xuXG5cdFx0cmV0dXJuIGF3YWl0IGx5cmFTY3JpcHQucnVuKHNvdXJjZSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3Iod3JhcEpzRXJyb3IoZXJyb3IsIHNvdXJjZSlcblx0XHRcdFx0ICAgICAgICAgICAgICAuZm9ybWF0KCkpO1xuXHRcdH1cblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuRnJvbVN0cmluZyhjb2RlOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBzb3VyY2UgPSBuZXcgU291cmNlKGNvZGUpO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgbHlyYVNjcmlwdCA9IG5ldyBMeXJhU2NyaXB0KGlzRGVidWcpO1xuXG5cdFx0cmV0dXJuIGF3YWl0IGx5cmFTY3JpcHQucnVuKHNvdXJjZSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3Iod3JhcEpzRXJyb3IoZXJyb3IsIHNvdXJjZSlcblx0XHRcdFx0ICAgICAgICAgICAgICAuZm9ybWF0KCkpO1xuXHRcdH1cblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdGVzdCh1cmw6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdHJldHVybiBhd2FpdCB0ZXN0RnJvbVNvdXJjZShhd2FpdCBmZXRjaFNvdXJjZSh1cmwpLCBpc0RlYnVnKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRlc3RGcm9tU291cmNlKHNvdXJjZTogU291cmNlLCBpc0RlYnVnID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBseXJhU2NyaXB0ID0gbmV3IEx5cmFTY3JpcHQoaXNEZWJ1Zyk7XG5cblx0XHRyZXR1cm4gYXdhaXQgbHlyYVNjcmlwdC50ZXN0KHNvdXJjZSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3Iod3JhcEpzRXJyb3IoZXJyb3IsIHNvdXJjZSlcblx0XHRcdFx0ICAgICAgICAgICAgICAuZm9ybWF0KCkpO1xuXHRcdH1cblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdGVzdEZyb21TdHJpbmcoY29kZTogc3RyaW5nLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgc291cmNlID0gbmV3IFNvdXJjZShjb2RlKTtcblxuXHR0cnkge1xuXHRcdGNvbnN0IGx5cmFTY3JpcHQgPSBuZXcgTHlyYVNjcmlwdChpc0RlYnVnKTtcblxuXHRcdHJldHVybiBhd2FpdCBseXJhU2NyaXB0LnRlc3Qoc291cmNlKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcih3cmFwSnNFcnJvcihlcnJvciwgc291cmNlKVxuXHRcdFx0XHQgICAgICAgICAgICAgIC5mb3JtYXQoKSk7XG5cdFx0fVxuXHRcdHRocm93IGVycm9yO1xuXHR9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0b2tlbnModXJsOiBzdHJpbmcpOiBQcm9taXNlPFRva2VuW10+IHtcblx0cmV0dXJuIHRva2Vuc0Zyb21Tb3VyY2UoYXdhaXQgZmV0Y2hTb3VyY2UodXJsKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbnNGcm9tU291cmNlKHNvdXJjZTogU291cmNlKTogVG9rZW5bXSB7XG5cdHJldHVybiBuZXcgVG9rZW5pemVyKHNvdXJjZSkudG9rZW5pemUoKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzdCh1cmw6IHN0cmluZyk6IFByb21pc2U8QVNUTm9kZT4ge1xuXHRyZXR1cm4gYXN0RnJvbVNvdXJjZShhd2FpdCBmZXRjaFNvdXJjZSh1cmwpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzdEZyb21Tb3VyY2Uoc291cmNlOiBTb3VyY2UpOiBBU1ROb2RlIHtcblx0cmV0dXJuIG5ldyBQYXJzZXIoc291cmNlKS5wYXJzZSgpO1xufVxuIgogIF0sCiAgIm1hcHBpbmdzIjogIjtBQUVPLE1BQU0sUUFBUTtBQUFBLFNBQ2IsU0FBc0I7QUFBQSxTQUN0QixPQUFzQjtBQUFBLFNBQ3RCLE1BQXNCO0FBQUEsU0FDdEIsT0FBc0I7QUFBQSxTQUN0QixRQUFzQjtBQUFBLFNBQ3RCLFlBQXNCO0FBQUEsU0FDdEIsVUFBc0I7QUFBQSxTQUN0QixhQUFzQjtBQUFBLFNBQ3RCLGNBQXNCO0FBQUEsU0FDdEIsTUFBc0I7QUFBQSxTQUN0QixPQUFzQjtBQUFBLFNBQ3RCLFNBQXNCO0FBQUEsU0FDdEIsVUFBc0I7QUFBQSxTQUN0QixTQUFzQjtBQUFBLFNBQ3RCLFdBQXNCO0FBQUEsU0FDdEIsU0FBc0I7QUFBQSxTQUN0QixRQUFzQjtBQUFBLFNBQ3RCLE9BQXNCO0FBQUEsU0FDdEIsUUFBc0I7QUFBQSxTQUN0QixLQUFzQjtBQUFBLFNBQ3RCLE9BQXNCO0FBQUEsU0FDdEIsUUFBc0I7QUFBQSxTQUN0QixVQUFzQjtBQUFBLFNBQ3RCLFVBQXNCO0FBQUEsU0FDdEIsS0FBc0I7QUFBQSxTQUN0QixPQUFzQjtBQUFBLFNBQ3RCLE9BQXNCO0FBQUEsU0FFdEIsc0JBQStCO0FBQUEsU0FDL0IsdUJBQStCO0FBQUEsU0FDL0IsYUFBK0I7QUFBQSxTQUMvQixjQUErQjtBQUFBLFNBQy9CLG1CQUErQjtBQUFBLFNBQy9CLG9CQUErQjtBQUFBLFNBQy9CLFlBQStCO0FBQUEsU0FDL0IsUUFBK0I7QUFBQSxTQUMvQixRQUErQjtBQUFBLFNBRS9CLFFBQW1CO0FBQUEsU0FDbkIsTUFBbUI7QUFBQSxTQUNuQixTQUFt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QXNCLGFBQWEsQ0FBQyxNQUFjLFVBQW1CLE9BQXNCO0FBQUEsRUFDMUYsTUFBTSxTQUFTLElBQUksUUFBTyxJQUFJO0FBQUEsRUFFOUIsSUFBSTtBQUFBLElBQ0gsTUFBTSxhQUFhLElBQUksV0FBVyxPQUFPO0FBQUEsSUFFekMsT0FBTyxNQUFNLFdBQVcsSUFBSSxNQUFNO0FBQUEsSUFDakMsT0FBTyxPQUFPO0FBQUEsSUFDZixJQUFJLGlCQUFpQixPQUFPO0FBQUEsTUFDM0IsUUFBUSxNQUFNLFlBQVksT0FBTyxNQUFNLEVBQ3ZCLE9BQU8sQ0FBQztBQUFBLElBQ3pCO0FBQUEsSUFDQSxNQUFNO0FBQUE7QUFBQTtBQUlSLGVBQXNCLElBQUksQ0FBQyxLQUFhLFVBQW1CLE9BQXNCO0FBQUEsRUFDaEYsT0FBTyxNQUFNLGVBQWUsTUFBTSxZQUFZLEdBQUcsR0FBRyxPQUFPO0FBQUE7QUFHNUQsZUFBc0IsY0FBYyxDQUFDLFFBQWdCLFVBQVUsT0FBc0I7QUFBQSxFQUNwRixJQUFJO0FBQUEsSUFDSCxNQUFNLGFBQWEsSUFBSSxXQUFXLE9BQU87QUFBQSxJQUV6QyxPQUFPLE1BQU0sV0FBVyxLQUFLLE1BQU07QUFBQSxJQUNsQyxPQUFPLE9BQU87QUFBQSxJQUNmLElBQUksaUJBQWlCLE9BQU87QUFBQSxNQUMzQixRQUFRLE1BQU0sWUFBWSxPQUFPLE1BQU0sRUFDdkIsT0FBTyxDQUFDO0FBQUEsSUFDekI7QUFBQSxJQUNBLE1BQU07QUFBQTtBQUFBO0FBSVIsZUFBc0IsY0FBYyxDQUFDLE1BQWMsVUFBbUIsT0FBc0I7QUFBQSxFQUMzRixNQUFNLFNBQVMsSUFBSSxRQUFPLElBQUk7QUFBQSxFQUU5QixJQUFJO0FBQUEsSUFDSCxNQUFNLGFBQWEsSUFBSSxXQUFXLE9BQU87QUFBQSxJQUV6QyxPQUFPLE1BQU0sV0FBVyxLQUFLLE1BQU07QUFBQSxJQUNsQyxPQUFPLE9BQU87QUFBQSxJQUNmLElBQUksaUJBQWlCLE9BQU87QUFBQSxNQUMzQixRQUFRLE1BQU0sWUFBWSxPQUFPLE1BQU0sRUFDdkIsT0FBTyxDQUFDO0FBQUEsSUFDekI7QUFBQSxJQUNBLE1BQU07QUFBQTtBQUFBO0FBSVIsZUFBc0IsTUFBTSxDQUFDLEtBQStCO0FBQUEsRUFDM0QsT0FBTyxpQkFBaUIsTUFBTSxZQUFZLEdBQUcsQ0FBQztBQUFBO0FBR3hDLFNBQVMsZ0JBQWdCLENBQUMsUUFBeUI7QUFBQSxFQUN6RCxPQUFPLElBQUksVUFBVSxNQUFNLEVBQUUsU0FBUztBQUFBO0FBR3ZDLGVBQXNCLEdBQUcsQ0FBQyxLQUErQjtBQUFBLEVBQ3hELE9BQU8sY0FBYyxNQUFNLFlBQVksR0FBRyxDQUFDO0FBQUE7QUFHckMsU0FBUyxhQUFhLENBQUMsUUFBeUI7QUFBQSxFQUN0RCxPQUFPLElBQUksT0FBTyxNQUFNLEVBQUUsTUFBTTtBQUFBOyIsCiAgImRlYnVnSWQiOiAiNDNBQkVDRDExOTMzNDkyMzY0NzU2RTIxNjQ3NTZFMjEiLAogICJuYW1lcyI6IFtdCn0=
