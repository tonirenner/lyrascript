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
  static XML_CLOSE_TAG = "/>";
  static XML_OPEN_CLOSE_TAG = "</";
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
  static DOM_OPERATORS = [
    GRAMMAR.ASSIGN,
    GRAMMAR.LESS_THAN,
    GRAMMAR.GREATER_THAN,
    GRAMMAR.XML_OPEN_CLOSE_TAG,
    GRAMMAR.XML_CLOSE_TAG
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
  static DOM_OPERATORS = new Set(GRAMMAR.DOM_OPERATORS);
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
  static TEXT = "text";
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

// language/src/core/ast.ts
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

class ASTVDomNode extends ASTNode {
  tag;
  props = new Map;
  constructor(tag, props, children = []) {
    super(ASTNodeType.VDOM, children);
    this.tag = tag;
    this.props = props;
  }
}

class ASTVDomTextNode extends ASTNode {
  constructor(value) {
    super(ASTNodeType.VDOM_TEXT);
    this.value = value;
  }
}

// language/src/core/tokenizer/tokenizer.ts
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
    const ifIsConsumingLineComment = () => {
      const lineComment = this.matchLineCommentAt(i);
      if (lineComment) {
        tokens.push(lineComment.withLineAndColumn(line, column));
        i = lineComment.end + 1;
        line++;
        column = 0;
        return true;
      }
      return false;
    };
    const ifIsConsumingString = () => {
      const string = this.matchStringAt(i);
      if (string) {
        tokens.push(string.withLineAndColumn(line, column));
        i = string.end + 1;
        column += this.columOffset(string);
        return true;
      }
      return false;
    };
    const ifIsConsumingPunctuation = () => {
      const punctuation = this.matchPunctuationAt(i);
      if (punctuation) {
        tokens.push(punctuation.withLineAndColumn(line, column));
        i = punctuation.end + 1;
        column += this.columOffset(punctuation);
        return true;
      }
      return false;
    };
    const ifIsConsumingIdentifier = () => {
      const identifier = this.matchIdentifierAt(i);
      if (identifier) {
        tokens.push(identifier.withLineAndColumn(line, column));
        i = identifier.end;
        column += this.columOffset(identifier);
        if (identifier.value === GRAMMAR.VDOM) {
          const tokenizedVDom = this.tokenizeVDom(i, line, column);
          tokens.push(...tokenizedVDom.tokens);
          i = tokenizedVDom.newIndex;
          line = tokenizedVDom.line;
          column = tokenizedVDom.column;
        }
        return true;
      }
      return false;
    };
    const ifIsConsumingNumber = () => {
      const number = this.matchNumberAt(i);
      if (number) {
        tokens.push(number.withLineAndColumn(line, column));
        i = number.end;
        column += this.columOffset(number);
        return true;
      }
      return false;
    };
    const ifIsConsumingOperator = () => {
      const operator = this.matchOperatorAt(i, Rules.OPERATORS);
      if (operator) {
        tokens.push(operator.withLineAndColumn(line, column));
        i = operator.end + 1;
        column += this.columOffset(operator);
        return true;
      }
      return false;
    };
    const ifIsConsumingAnnotation = () => {
      const annotation = this.matchAnnotationAt(i);
      if (annotation) {
        tokens.push(annotation.withLineAndColumn(line, column));
        i = annotation.end + 1;
        column += this.columOffset(annotation);
        return true;
      }
      return false;
    };
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
      if (ifIsConsumingLineComment() || ifIsConsumingPunctuation() || ifIsConsumingString() || ifIsConsumingNumber() || ifIsConsumingIdentifier() || ifIsConsumingOperator() || ifIsConsumingAnnotation()) {
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
  matchOperatorAt(i, operators) {
    const chars = this.source.charAt(i) + this.source.charAt(i + 1);
    if (operators.has(chars)) {
      return new Token(TokenType.OPERATOR, chars, i, i + 1, this.source);
    }
    if (operators.has(this.source.charAt(i))) {
      return new Token(TokenType.OPERATOR, this.source.charAt(i), i, i, this.source);
    }
    return null;
  }
  matchPunctuationAt(i) {
    const chars = this.source.charAt(i) + this.source.charAt(i + 1);
    if (Rules.PUNCTUATIONS.has(chars)) {
      return new Token(TokenType.PUNCTUATION, chars, i, i + 1, this.source);
    }
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
  tokenizeVDom(startIndex, line, column) {
    const tokens = [];
    let i = startIndex;
    let textBuffer = "";
    const flushText = () => {
      if (textBuffer.length > 0) {
        tokens.push(new Token(TokenType.TEXT, textBuffer, i - textBuffer.length, i, this.source).withLineAndColumn(line, column - textBuffer.length));
        textBuffer = "";
      }
    };
    while (i < this.source.length) {
      const char = this.source.charAt(i);
      if (char === GRAMMAR.SEMICOLON) {
        flushText();
        tokens.push(new Token(TokenType.PUNCTUATION, char, i, i, this.source).withLineAndColumn(line, column));
        i++;
        column++;
        break;
      }
      const operator = this.matchOperatorAt(i, Rules.DOM_OPERATORS);
      if (operator) {
        flushText();
        tokens.push(operator.withLineAndColumn(line, column));
        i = operator.end + 1;
        column += this.columOffset(operator);
        continue;
      }
      const identifier = this.matchIdentifierAt(i);
      if (identifier) {
        flushText();
        tokens.push(identifier.withLineAndColumn(line, column));
        i = identifier.end;
        column += this.columOffset(identifier);
        continue;
      }
      textBuffer += char;
      if (char === `
`) {
        line++;
        column = 0;
      } else {
        column++;
      }
      i++;
    }
    flushText();
    return { tokens, newIndex: i, line, column };
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

// language/src/core/parser/parser_source.ts
class Source {
  static NEWLINE = `
`;
  url;
  code;
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

class SourceSpan {
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
    const lines = before.split(Source.NEWLINE);
    this.line = lines.length;
    this.column = (lines[lines.length - 1] || "").length + 1;
  }
  text() {
    return this.source.slice(this.start, this.end);
  }
}
function spanFrom(startToken, endToken) {
  return new SourceSpan(startToken.source, startToken.start, endToken.end);
}
async function fetchSource(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throwDependencyError(`Failed to load script: ${url}`);
  }
  return new Source(await response.text(), url);
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
  return new LyraError(ErrorTypes.INTERNAL_ERROR, error.message || String(error), new SourceSpan(source, 0, source.length));
}

// language/src/core/interpreter/interpreter_objects.ts
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
  findMethod(name) {
    const node = this.node.children.find((node2) => node2.name === name);
    if (node instanceof ASTMethodNode) {
      return node;
    }
    throwRuntimeError(`Method ${name} not found in class ${this.name}.`);
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

// language/src/core/parser/parser_statments.ts
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
    if (parser.peek().type === TokenType.COMMENT) {
      parser.next();
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
  node.span = spanFrom(classToken, braceCloseToken);
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
  node.span = spanFrom(interfaceToken, braceCloseToken);
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
    node.span = spanFrom(typeToken || nameToken, defaultValueToken || nameToken);
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
    node.span = spanFrom(startToken, semicolonToken);
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
    node.span = spanFrom(startToken, parenthesesCloseToken);
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
  node.span = spanFrom(letToken, semicolonToken);
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
  node.span = spanFrom(startToken, parenthesesCloseToken);
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
  node.span = spanFrom(startToken, braceCloseToken);
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
  node.span = spanFrom(startToken, parenthesesCloseToken);
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
  node.span = spanFrom(startToken, bracketSquareCloseToken);
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
  node.span = spanFrom(startToken, braceCloseToken);
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
function skipEmptyText(parser) {
  while (parser.peek().type === TokenType.TEXT && parser.peekIs("")) {
    parser.next();
  }
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
      node.span = spanFrom(startToken, endToken);
      expr = node;
      continue;
    }
    break;
  }
  return expr;
}
function parseVDomExpression(parser) {
  parser.expectKeyword(GRAMMAR.VDOM);
  return parseVDomElement(parser);
}
function parseVDomElement(parser) {
  skipEmptyText(parser);
  const startToken = parser.expectOperator(GRAMMAR.LESS_THAN);
  const tagToken = parser.expectIdentifier();
  const tag = tagToken.value;
  const props = new Map;
  while (!parser.peekIs(GRAMMAR.GREATER_THAN) && !parser.peekIs(GRAMMAR.XML_CLOSE_TAG)) {
    const nameToken = parser.expectIdentifier();
    parser.expectOperator(GRAMMAR.ASSIGN);
    const value = parseExpression(parser);
    props.set(nameToken.value, value);
  }
  parser.expectOperator(GRAMMAR.GREATER_THAN);
  const children = [];
  while (!parser.peekIs(GRAMMAR.XML_OPEN_CLOSE_TAG)) {
    if (parser.peekIs(GRAMMAR.LESS_THAN)) {
      children.push(parseVDomElement(parser));
    } else {
      children.push(parseVDomText(parser));
    }
  }
  parser.expectOperator(GRAMMAR.XML_OPEN_CLOSE_TAG);
  parser.expectIdentifier();
  parser.expectOperator(GRAMMAR.GREATER_THAN);
  const node = new ASTVDomNode(tag, props, children);
  node.span = spanFrom(startToken, parser.peek());
  return node;
}
function parseVDomText(parser) {
  const token = parser.expectOneOf([
    TokenType.IDENTIFIER,
    TokenType.OPERATOR,
    TokenType.KEYWORD,
    TokenType.TEXT
  ]);
  const node = new ASTVDomTextNode(token.value);
  node.span = spanFrom(token, token);
  return node;
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
  if (token.type === TokenType.KEYWORD && token.value === GRAMMAR.VDOM) {
    return parseVDomExpression(parser);
  }
  if (token.value === GRAMMAR.EXCLAMATION_MARK) {
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

// language/src/core/parser/parser.ts
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
  expectIdentifier(keyword = null) {
    return this.expect(TokenType.IDENTIFIER, keyword);
  }
  expectKeyword(keyword = null) {
    return this.expect(TokenType.KEYWORD, keyword);
  }
  expectString() {
    return this.expect(TokenType.STRING);
  }
  expectText() {
    return this.expect(TokenType.TEXT);
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
  peekIs(keyword) {
    return this.peek().value.trim() === keyword;
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

// language/src/core/interpreter/interpreter_registry.ts
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

// language/src/core/types/type_objects.ts
class PrimitiveTypes {
  static NUMBER = TYPE_ENUM.NUMBER;
  static STRING = TYPE_ENUM.STRING;
  static BOOLEAN = TYPE_ENUM.BOOLEAN;
  static MIXED = TYPE_ENUM.MIXED;
  static NULL = TYPE_ENUM.NULL;
  static VOID = TYPE_ENUM.VOID;
  static hasType(type) {
    return Object.hasOwnProperty.call(PrimitiveTypes, type.toUpperCase());
  }
}

class PrimitiveClassTypes {
  static ARRAY = TYPE_ENUM.ARRAY;
  static CLASSNAME_MAP = {
    array: "Array"
  };
  static getClassRefName(type) {
    return PrimitiveClassTypes.CLASSNAME_MAP[type] || null;
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

class VNodeType extends Type {
  constructor() {
    super("vnode");
  }
  equals(other) {
    return other instanceof VoidType;
  }
}

class Types {
  static NUMBER = new PrimitiveType(PrimitiveTypes.NUMBER);
  static STRING = new PrimitiveType(PrimitiveTypes.STRING);
  static BOOLEAN = new PrimitiveType(PrimitiveTypes.BOOLEAN);
  static MIXED = new MixedType;
  static NULL = new NullType;
  static VOID = new VoidType;
  static VNODE = new VNodeType;
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
  constructor(name, type, defaultValue = null, node = null) {
    this.name = name;
    this.parameterType = type;
    this.defaultType = defaultValue;
    this.node = node;
  }
}

class MethodSymbol {
  name;
  node;
  isStatic = false;
  isPrivate = false;
  isPublic = false;
  typeParameterSymbols = [];
  parameterSymbols = [];
  returnType = Types.MIXED;
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
    return `classRefType(${name}<${typeArguments.map((type) => type.toString()).join(", ")}>)`;
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
    return `interfaceRefType(${name}<${typeArguments.map((type) => type.toString()).join(", ")}>)`;
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
    return `lambda(${parameters.map((parameter) => parameter.parameterType.toString()).join(", ")}) -> ${returnType.toString()})`;
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
  defineType(name, type) {
    this.types.set(name, type);
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
function substituteType(type, substitutionMap) {
  if (type instanceof TypeVariable) {
    return substitutionMap.get(type.name) ?? type;
  }
  if (type instanceof ClassRefType) {
    return new ClassRefType(type.classSymbol, type.typeArguments.map((typeArgument) => substituteType(typeArgument, substitutionMap)));
  }
  if (type instanceof NullableType) {
    return new NullableType(substituteType(type.inner, substitutionMap));
  }
  return type;
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

// language/src/core/types/autoboxing.ts
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

// language/src/core/types/typechecker.ts
var globalFunctionTypeRegistry = new NativeFunctions().getGlobalFunctionTypeRegistry();

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
      case ASTNodeType.VDOM: {
        if (expr instanceof ASTVDomNode) {
          return this.checkVDomNode(expr);
        }
        break;
      }
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
    if (!globalFunctionTypeRegistry.has(name)) {
      this.typeError(`Unknown function ${name}`);
    }
    const nativeFunction = globalFunctionTypeRegistry.get(name);
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
    }
    if (!expectedType.accepts(actualType)) {
      this.typeError(`Return type mismatch: expected ${expectedType}, got ${actualType}`, node);
    }
  }
  checkVDomNode(node) {
    try {
      const classSymbol = this.objectRegistry.types.getClassSymbol(node.tag);
      const methodSymbol = this.resolveInstanceMethode(classSymbol, "render");
      if (!methodSymbol) {
        this.typeError(`Component '${node.tag}' has no render() method`, node);
      }
      this.checkAssignable(methodSymbol.returnType, Types.VNODE, node);
      return Types.VNODE;
    } catch (e) {}
    return Types.VNODE;
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

// language/src/core/linker/dependencies.ts
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
      new Dependency(["Iterator", "Iterable"], "/library/contracts.lyra")
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
    return this.fileLoader.load(url).then((code) => this.parserSource(new Source(code, url)));
  }
  parserSource(source) {
    return new Parser(source).parse();
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

// language/src/core/interpreter/interpreter_conversion.ts
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
    super(CLASS_NAME, LyraString, new Source(`
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
    super(CLASS_NAME2, LyraSystem, new Source(`
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
    super(CLASS_NAME3, LyraAssert, new Source(`
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
    super(CLASS_NAME4, LyraNumber, new Source(`
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
    super(ARRAY_CLASS_NAME, LyraArray, new Source(`
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
    super(ARRAY_ITERATOR_CLASS_NAME, LyraArray, new Source(`
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

// language/src/core/linker/linker.ts
var nativeClasses = new NativeClasses;

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
          const nativeClass = nativeClasses.classes.get(className) || null;
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

// language/src/core/interpreter/interpreter_runtime.ts
var nativeClasses2 = new NativeClasses;
var nativeFunctions = new NativeFunctions;
var globalFunctions = nativeFunctions.getGlobalFunctions();
var globalFunctionTypeRegistry2 = nativeFunctions.getGlobalFunctionTypeRegistry();

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
    return globalFunctionTypeRegistry2.get(name);
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
  for (const nativeClass of nativeClasses2.classes.values()) {
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
    }
    case ASTNodeType.VARIABLE: {
      if (node instanceof ASTVariableNode) {
        const value = node.init ? evalExpression(node.init, objectRegistry, environment, thisValue) : null;
        environment.define(node.name, value);
        return null;
      }
      throwRuntimeError(`Invalid variable node ${node.type}.`, node.span);
    }
    case ASTNodeType.IF: {
      if (node instanceof ASTIfNode) {
        return evalIf(node, objectRegistry, environment, thisValue);
      }
      throwRuntimeError(`Invalid if node ${node.type}.`, node.span);
    }
    case ASTNodeType.MATCH: {
      if (node instanceof ASTMatchNode) {
        return evalMatch(node, objectRegistry, environment, thisValue);
      }
      throwRuntimeError(`Invalid match node ${node.type}.`, node.span);
    }
    case ASTNodeType.FOREACH: {
      if (node instanceof ASTForeachNode) {
        return evalForeach(node, objectRegistry, environment, thisValue);
      }
      throwRuntimeError(`Invalid foreach node ${node.type}.`, node.span);
    }
    case ASTNodeType.EXPRESSION: {
      if (node instanceof ASTExpressionNode) {
        return evalExpression(node.expr, objectRegistry, environment, thisValue);
      }
      throwRuntimeError(`Invalid expression node ${node.type}.`, node.span);
    }
    case ASTNodeType.RETURN: {
      if (node instanceof ASTReturnNode) {
        const value = node.argument ? evalExpression(node.argument, objectRegistry, environment, thisValue) : null;
        return new ReturnValue(value);
      }
      throwRuntimeError(`Invalid return node ${node.type}.`, node.span);
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
        return evalBinary(expr, objectRegistry, environment, thisValue);
      }
      throwRuntimeError(`Invalid binary expression ${expr.type}`);
    }
    case ASTNodeType.UNARY: {
      if (expr instanceof ASTUnaryNode) {
        return evalUnary(expr, objectRegistry, environment, thisValue);
      }
      throwRuntimeError(`Invalid unary expression ${expr.type}.`, expr.span);
    }
    case ASTNodeType.ASSIGNMENT: {
      if (expr instanceof ASTAssignmentNode) {
        return evalAssign(expr, objectRegistry, environment, thisValue);
      }
      throwRuntimeError(`Invalid assignment expression ${expr.type}`, expr.span);
    }
    case ASTNodeType.MEMBER: {
      if (expr instanceof ASTMemberNode) {
        return evalMember(expr, environment);
      }
      throwRuntimeError(`Invalid member expression ${expr.type}`, expr.span);
    }
    case ASTNodeType.CALL: {
      if (expr instanceof ASTCallNode) {
        return evalCall(expr, objectRegistry, environment, thisValue);
      }
      throwRuntimeError(`Invalid call expression ${expr.type}`, expr.span);
    }
    case ASTNodeType.VDOM: {
      if (expr instanceof ASTVDomNode) {
        return evalVDomNode(expr, objectRegistry, environment, thisValue);
      }
      throwRuntimeError(`Invalid call expression ${expr.type}`, expr.span);
    }
    case ASTNodeType.NEW: {
      if (expr instanceof ASTNewNode) {
        return evalNew(expr, objectRegistry, environment);
      }
      throwRuntimeError(`Invalid call expression ${expr.type}`, expr.span);
    }
    case ASTNodeType.ARRAY: {
      if (expr instanceof ASTArrayNode) {
        return evalArray(expr, objectRegistry, environment, thisValue);
      }
      throwRuntimeError(`Invalid array expression ${expr.type}`, expr.span);
    }
    case ASTNodeType.INDEX: {
      if (expr instanceof ASTIndexNode) {
        return evalIndex(expr, objectRegistry, environment, thisValue);
      }
      throwRuntimeError(`Invalid index expression ${expr.type}`, expr.span);
    }
    case ASTNodeType.LAMBDA: {
      if (expr instanceof ASTLambdaNode) {
        return evalLambda(expr, objectRegistry, environment);
      }
      throwRuntimeError(`Invalid lambda expression ${expr.type}`, expr.span);
    }
    default: {
      throwRuntimeError(`Unhandled expression ${expr.type}.`, expr.span);
    }
  }
}
function evalBinary(expr, objectRegistry, environment, thisValue = null) {
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
function evalArray(expr, objectRegistry, environment, thisValue = null) {
  const values = [];
  for (const elem of expr.elements) {
    values.push(evalExpression(elem, objectRegistry, environment, thisValue));
  }
  const classDef = objectRegistry.classes.get("Array");
  const instance = new Instance(classDef);
  instance.__nativeInstance = new classDef.nativeInstance(fromLyraValue(values));
  return instance;
}
function evalIndex(expr, objectRegistry, environment, thisValue = null) {
  if (!expr.object) {
    throwRuntimeError(`Index access on null.`, expr.span);
  }
  if (!expr.index) {
    throwRuntimeError(`Access with unspecific index.`, expr.span);
  }
  const object = evalExpression(expr.object, objectRegistry, environment, thisValue);
  const index = evalExpression(expr.index, objectRegistry, environment, thisValue);
  if (!(object instanceof LyraArray || object.__nativeInstance instanceof LyraArray)) {
    throwRuntimeError("Index access on non-array", expr.span);
  }
  const target = object instanceof LyraArray ? object : object.__nativeInstance;
  const value = target.values[index];
  if (value instanceof LyraNativeObject) {
    return wrapNativeInstance(value, objectRegistry);
  }
  return value;
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
  }
  const classDef = objectRegistry.classes.get(className);
  const methodDef = classDef.staticMethods[expr.callee.property];
  if (!methodDef) {
    throwRuntimeError(`Static method ${className}.${expr.callee.property} not found`, expr.callee.span);
  }
  if (classDef.nativeInstance && classDef.nativeInstance[methodDef.name]) {
    const args = evalMethodArguments(expr, methodDef.parameters, objectRegistry, environment, thisValue);
    const rawArgs = args.map(fromLyraValue);
    const result = classDef.nativeInstance[methodDef.name](...rawArgs);
    if (result instanceof LyraNativeObject) {
      return wrapNativeInstance(result, objectRegistry);
    }
    return evalBlock([returnValue(result)], objectRegistry, new Environment(environment), thisValue, methodDef.returnType);
  }
  const methodEnv = new Environment(environment);
  bindMethodParameters(expr, methodDef.parameters, objectRegistry, methodEnv, environment, thisValue);
  return evalBlock(methodDef.children, objectRegistry, methodEnv, thisValue, methodDef.returnType);
}
function evalInstanceCall(expr, objectRegistry, environment, thisValue = null) {
  if (!(expr.callee instanceof ASTMemberNode)) {
    throwRuntimeError(`Invalid member expression ${expr.type}`, expr.span);
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
  const methodDef = resolveInstanceMethod(classDef, objectRegistry, expr.callee.property);
  if (!methodDef) {
    throwRuntimeError(`Method ${expr.callee.property} not found on ${classDef.name}`, expr.callee.span);
  }
  const methodEnv = new Environment(environment);
  methodEnv.define(GRAMMAR.THIS, target);
  if (target.__nativeInstance && methodDef.name in target.__nativeInstance) {
    const args = evalMethodArguments(expr, methodDef.parameters, objectRegistry, environment, thisValue);
    const rawArgs = args.map(fromLyraValue);
    const result = target.__nativeInstance[methodDef.name](...rawArgs);
    if (result instanceof LyraNativeObject) {
      return wrapNativeInstance(result, objectRegistry);
    }
    return evalBlock([returnValue(result)], objectRegistry, methodEnv, target, methodDef.returnType);
  }
  bindMethodParameters(expr, methodDef.parameters, objectRegistry, methodEnv, environment, thisValue);
  return evalBlock(methodDef.children, objectRegistry, methodEnv, target, methodDef.returnType);
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
function evalVDomNode(node, objectRegistry, environment, thisValue = null) {
  try {
    const classDef = objectRegistry.classes.get(node.tag);
    if (classDef) {
      return evalDomComponentNode(node, classDef, environment, objectRegistry);
    }
  } catch (e) {}
  return evalDomHtmlNode(node, objectRegistry, environment, thisValue);
}
function evalDomHtmlNode(node, objectRegistry, environment, thisValue = null) {
  const props = {};
  for (const [name, value] of node.props) {
    props[name] = evalExpression(value, objectRegistry, environment, thisValue);
  }
  const children = [];
  let textCache = [];
  function flushTextCache() {
    if (textCache.length > 0) {
      children.push(textCache.join(" "));
      textCache = [];
    }
  }
  for (const child of node.children) {
    if (child instanceof ASTVDomTextNode) {
      textCache.push(child.value);
    } else {
      children.push(evalExpression(child, objectRegistry, environment, thisValue));
    }
    flushTextCache();
  }
  flushTextCache();
  return {
    tag: node.tag,
    props,
    children
  };
}
function evalDomComponentNode(node, classDef, environment, objectRegistry) {
  const instance = new Instance(classDef);
  const methodNode = classDef.findMethod("render");
  for (const [key, valueNode] of node.props.entries()) {
    instance.__instanceFields[key] = evalExpression(valueNode, objectRegistry, environment, instance);
  }
  return callInstanceMethod(instance, methodNode, [], objectRegistry, environment);
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

// language/src/core/tests/testsuites.ts
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

// language/src/core/interpreter/interpreter.ts
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

// language/src/core/loaders.ts
class AbstractFileLoader {
}

class FetchFileLoader extends AbstractFileLoader {
  load(url) {
    return fetch(url).then((response) => response.text());
  }
}

// language/src/core/program.ts
class LyraScriptProgram {
  globalEnvironment = new Environment;
  globalObjectRegistry = new ObjectRegistry;
  typeChecker = new TypeChecker(this.globalObjectRegistry);
  linker = new Linker(this.globalEnvironment, this.globalObjectRegistry, new FetchFileLoader);
  interpreter = new Interpreter(this.globalEnvironment, this.globalObjectRegistry);
  testSuite = new TestSuites(this.globalEnvironment, this.globalObjectRegistry);
  isDebug = false;
  startTime = 0;
  constructor(isDebug = false) {
    this.isDebug = isDebug;
  }
  getGlobalObjectRegistry() {
    return this.globalObjectRegistry;
  }
  getGlobalEnvironment() {
    return this.globalEnvironment;
  }
  async execute(source) {
    return this.runPipeline(source).then((ast) => {
      this.debugMeasureStartTime();
      this.interpreter.run(ast);
      this.debugMeasureEndTime("interpreter");
    });
  }
  async executeTest(source) {
    return this.runPipeline(source).then((ast) => {
      this.debugMeasureStartTime();
      this.testSuite.run(ast);
      this.debugMeasureEndTime("test");
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
  async runPipeline(source) {
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
}

// language/src/core/event/pipeline.ts
class EventPipeline {
  listeners = new Map;
  on(event, handler) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set);
    }
    this.listeners.get(event).add(handler);
  }
  off(event, handler) {
    this.listeners.get(event)?.delete(handler);
  }
  emit(event, payload) {
    this.listeners.get(event)?.forEach((handler) => handler(payload));
  }
}

// language/src/core/event/state.ts
class State {
  value;
  subscribers = new Set;
  constructor(initial) {
    this.value = initial;
  }
  get() {
    return this.value;
  }
  set(value) {
    if (this.value === value) {
      return;
    }
    this.value = value;
    this.notify();
  }
  subscribe(fn) {
    this.subscribers.add(fn);
    return () => this.subscribers.delete(fn);
  }
  notify() {
    for (const fn of this.subscribers) {
      fn(this.value);
    }
  }
}
function bindStateToEvent(pipeline, event, state, map) {
  pipeline.on(event, (payload) => {
    const value = map ? map(payload) : payload;
    state.set(value);
  });
}

// language/src/host/engine.ts
class WebLyraScript {
  program;
  objectRegistry = new ObjectRegistry;
  environment = new Environment;
  rootInstance = null;
  constructor(isDebug = false) {
    this.program = new LyraScriptProgram(isDebug);
  }
  createInstance(className) {
    return new Instance(this.objectRegistry.classes.get(className));
  }
  callInstanceMethod(methodName, args) {
    if (this.rootInstance === null) {
      throw new Error("No root instance available.");
    }
    return callInstanceMethod(this.rootInstance, this.rootInstance.__classDef.findMethod(methodName), args, this.objectRegistry, this.environment);
  }
  async executeEntryFile(url, className) {
    return this.program.execute(await fetchSource(url)).then(() => {
      this.objectRegistry = this.program.getGlobalObjectRegistry();
      this.environment = this.program.getGlobalEnvironment();
    }).then(() => {
      this.rootInstance = this.createInstance(className);
    });
  }
}
// language/src/host/dom.ts
class HTMLElementCreator {
  createElement(vNode) {
    const element = document.createElement(vNode.tag);
    for (const [key, value] of Object.entries(vNode.props)) {
      if (key.startsWith("on") && typeof value === "function") {
        const event = key.slice(2).toLowerCase();
        element.addEventListener(event, value);
      }
    }
    for (const child of vNode.children) {
      if (typeof child === "string") {
        element.appendChild(document.createTextNode(child));
      } else {
        element.appendChild(this.createElement(child));
      }
    }
    return element;
  }
}

// language/src/host/runtime.ts
class AbstractApplicationRuntime {
  engine;
  constructor(engine) {
    this.engine = engine;
  }
  callMethod(methodName, args = []) {
    return this.engine.callInstanceMethod(methodName, args);
  }
}

class WebApplicationRuntime extends AbstractApplicationRuntime {
  mountPoint;
  elementCreator;
  currentVNode = null;
  isRendering = false;
  renderFunction = null;
  constructor(mountPoint, elementCreator = new HTMLElementCreator) {
    super(new WebLyraScript);
    this.mountPoint = mountPoint;
    this.elementCreator = elementCreator;
  }
  async start(url, className = "App") {
    await this.engine.executeEntryFile(url, className);
    this.renderFunction = () => this.callRender();
    this.performRender();
  }
  requestRender() {
    if (this.isRendering) {
      return;
    }
    queueMicrotask(() => {
      this.performRender();
    });
  }
  callRender() {
    return this.callMethod("render", []);
  }
  performRender() {
    if (!this.renderFunction) {
      return;
    }
    this.isRendering = true;
    const nextVNode = this.renderFunction();
    this.patch(this.currentVNode, nextVNode);
    this.currentVNode = nextVNode;
    this.isRendering = false;
  }
  patch(oldVNode, newVNode) {
    this.mountPoint.innerHTML = "";
    const element = this.elementCreator.createElement(newVNode);
    this.mountPoint.appendChild(element);
  }
}

// language/src/index.ts
var Lyra = {
  Source,
  Parser,
  Tokenizer,
  EventPipeline,
  State,
  bindStateToEvent,
  Program: (isDebug) => Program(isDebug),
  execute: (source, isDebug = false) => execute(source, isDebug),
  executeFromString: (code, isDebug = false) => executeFromString(code, isDebug),
  executeFromUrl: async (url, isDebug = false) => executeFromUrl(url, isDebug),
  executeTest: (source, isDebug = false) => executeTest(source, isDebug),
  executeTestString: (code, isDebug = false) => executeTestString(code, isDebug),
  executeTestUrl: (url, isDebug = false) => executeTestUrl(url, isDebug),
  tokenize: (source) => tokenize(source),
  tokenizeUrl: (url) => tokenizeUrl(url),
  parseTree: (source) => parseTree(source),
  parseTreeUrl: (url) => parseTreeUrl(url)
};
function Program(isDebug = false) {
  return new LyraScriptProgram(isDebug);
}
async function execute(source, isDebug = false) {
  try {
    return await Program(isDebug).execute(source);
  } catch (error) {
    if (error instanceof Error) {
      console.error(wrapJsError(error, source).format());
    }
    throw error;
  }
}
async function executeFromUrl(url, isDebug = false) {
  return await execute(await fetchSource(url), isDebug);
}
async function executeFromString(code, isDebug = false) {
  const source = new Source(code);
  try {
    return await Program(isDebug).execute(source);
  } catch (error) {
    if (error instanceof Error) {
      console.error(wrapJsError(error, source).format());
    }
    throw error;
  }
}
async function executeTest(source, isDebug = false) {
  try {
    return await Program(isDebug).executeTest(source);
  } catch (error) {
    if (error instanceof Error) {
      console.error(wrapJsError(error, source).format());
    }
    throw error;
  }
}
async function executeTestUrl(url, isDebug = false) {
  return await executeTest(await fetchSource(url), isDebug);
}
async function executeTestString(code, isDebug = false) {
  const source = new Source(code);
  try {
    return await Program(isDebug).executeTest(source);
  } catch (error) {
    if (error instanceof Error) {
      console.error(wrapJsError(error, source).format());
    }
    throw error;
  }
}
function tokenize(source) {
  return new Tokenizer(source).tokenize();
}
async function tokenizeUrl(url) {
  return tokenize(await fetchSource(url));
}
function parseTree(source) {
  return new Parser(source).parse();
}
async function parseTreeUrl(url) {
  return parseTree(await fetchSource(url));
}
var src_default = Lyra;
export {
  tokenizeUrl,
  tokenize,
  parseTreeUrl,
  parseTree,
  src_default as default,
  WebLyraScript,
  WebApplicationRuntime
};

//# debugId=F757E0CB06B4A92C64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibGFuZ3VhZ2Uvc3JjL2NvcmUvZ3JhbW1hci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9hc3QudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvdG9rZW5pemVyL3Rva2VuaXplci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9lcnJvcnMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0cy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9wYXJzZXIvcGFyc2VyX3N0YXRtZW50cy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9wYXJzZXIvcGFyc2VyLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5LnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL3R5cGVzL3R5cGVfb2JqZWN0cy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS90eXBlcy9hdXRvYm94aW5nLnRzIiwgImxhbmd1YWdlL3NyYy9saWJyYXJ5L25hdGl2ZV9mdW5jdGlvbnMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvdHlwZXMvdHlwZWNoZWNrZXIudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvbGlua2VyL2RlcGVuZGVuY2llcy50cyIsICJsYW5ndWFnZS9zcmMvbGlicmFyeS9uYXRpdmVfY2xhc3MudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfY29udmVyc2lvbi50cyIsICJsYW5ndWFnZS9zcmMvbGlicmFyeS9jbGFzc2VzL3N0cmluZy50cyIsICJsYW5ndWFnZS9zcmMvbGlicmFyeS9jbGFzc2VzL3N5c3RlbS50cyIsICJsYW5ndWFnZS9zcmMvbGlicmFyeS9jbGFzc2VzL2Fzc2VydC50cyIsICJsYW5ndWFnZS9zcmMvbGlicmFyeS9jbGFzc2VzL251bWJlci50cyIsICJsYW5ndWFnZS9zcmMvbGlicmFyeS9jbGFzc2VzL2FycmF5LnRzIiwgImxhbmd1YWdlL3NyYy9saWJyYXJ5L25hdGl2ZV9jbGFzc2VzLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2xpbmtlci9saW5rZXIudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcnVudGltZS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS90ZXN0cy90ZXN0c3VpdGVzLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2xvYWRlcnMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvcHJvZ3JhbS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9ldmVudC9waXBlbGluZS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9ldmVudC9zdGF0ZS50cyIsICJsYW5ndWFnZS9zcmMvaG9zdC9lbmdpbmUudHMiLCAibGFuZ3VhZ2Uvc3JjL2hvc3QvZG9tLnRzIiwgImxhbmd1YWdlL3NyYy9ob3N0L3J1bnRpbWUudHMiLCAibGFuZ3VhZ2Uvc3JjL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWwogICAgImltcG9ydCB0eXBlIHtTb3VyY2V9IGZyb20gXCIuL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmV4cG9ydCBjbGFzcyBHUkFNTUFSIHtcblx0c3RhdGljIElNUE9SVDogc3RyaW5nID0gJ2ltcG9ydCc7XG5cdHN0YXRpYyBGUk9NOiBzdHJpbmcgPSAnZnJvbSc7XG5cdHN0YXRpYyBMRVQ6IHN0cmluZyA9ICdsZXQnO1xuXHRzdGF0aWMgT1BFTjogc3RyaW5nID0gJ29wZW4nO1xuXHRzdGF0aWMgQ0xBU1M6IHN0cmluZyA9ICdjbGFzcyc7XG5cdHN0YXRpYyBJTlRFUkZBQ0U6IHN0cmluZyA9ICdpbnRlcmZhY2UnO1xuXHRzdGF0aWMgRVhURU5EUzogc3RyaW5nID0gJ2V4dGVuZHMnO1xuXHRzdGF0aWMgSU1QTEVNRU5UUzogc3RyaW5nID0gJ2ltcGxlbWVudHMnO1xuXHRzdGF0aWMgQ09OU1RSVUNUT1I6IHN0cmluZyA9ICdjb25zdHJ1Y3Rvcic7XG5cdHN0YXRpYyBORVc6IHN0cmluZyA9ICduZXcnO1xuXHRzdGF0aWMgVEhJUzogc3RyaW5nID0gJ3RoaXMnO1xuXHRzdGF0aWMgUFVCTElDOiBzdHJpbmcgPSAncHVibGljJztcblx0c3RhdGljIFBSSVZBVEU6IHN0cmluZyA9ICdwcml2YXRlJztcblx0c3RhdGljIFNUQVRJQzogc3RyaW5nID0gJ3N0YXRpYyc7XG5cdHN0YXRpYyBSRUFET05MWTogc3RyaW5nID0gJ3JlYWRvbmx5Jztcblx0c3RhdGljIFJFVFVSTjogc3RyaW5nID0gJ3JldHVybic7XG5cdHN0YXRpYyBTVVBFUjogc3RyaW5nID0gJ3N1cGVyJztcblx0c3RhdGljIFRSVUU6IHN0cmluZyA9ICd0cnVlJztcblx0c3RhdGljIEZBTFNFOiBzdHJpbmcgPSAnZmFsc2UnO1xuXHRzdGF0aWMgSUY6IHN0cmluZyA9ICdpZic7XG5cdHN0YXRpYyBFTFNFOiBzdHJpbmcgPSAnZWxzZSc7XG5cdHN0YXRpYyBNQVRDSDogc3RyaW5nID0gJ21hdGNoJztcblx0c3RhdGljIERFRkFVTFQ6IHN0cmluZyA9ICdkZWZhdWx0Jztcblx0c3RhdGljIEZPUkVBQ0g6IHN0cmluZyA9ICdmb3JlYWNoJztcblx0c3RhdGljIElOOiBzdHJpbmcgPSAnaW4nO1xuXHRzdGF0aWMgTlVMTDogc3RyaW5nID0gJ251bGwnO1xuXHRzdGF0aWMgVkRPTTogc3RyaW5nID0gJ3Zkb20nO1xuXG5cdHN0YXRpYyBCUkFDS0VUX1NRVUFSRV9PUEVOOiBzdHJpbmcgPSAnWyc7XG5cdHN0YXRpYyBCUkFDS0VUX1NRVUFSRV9DTE9TRTogc3RyaW5nID0gJ10nO1xuXHRzdGF0aWMgQlJBQ0VfT1BFTjogc3RyaW5nID0gJ3snO1xuXHRzdGF0aWMgQlJBQ0VfQ0xPU0U6IHN0cmluZyA9ICd9Jztcblx0c3RhdGljIFBBUkVOVEhFU0VTX09QRU46IHN0cmluZyA9ICcoJztcblx0c3RhdGljIFBBUkVOVEhFU0VTX0NMT1NFOiBzdHJpbmcgPSAnKSc7XG5cdHN0YXRpYyBTRU1JQ09MT046IHN0cmluZyA9ICc7Jztcblx0c3RhdGljIENPTE9OOiBzdHJpbmcgPSAnOic7XG5cdHN0YXRpYyBDT01NQTogc3RyaW5nID0gJywnO1xuXG5cdHN0YXRpYyBBUlJPVzogc3RyaW5nID0gJy0+Jztcblx0c3RhdGljIERPVDogc3RyaW5nID0gJy4nO1xuXHRzdGF0aWMgQVNTSUdOOiBzdHJpbmcgPSAnPSc7XG5cdHN0YXRpYyBQTFVTOiBzdHJpbmcgPSAnKyc7XG5cdHN0YXRpYyBNSU5VUzogc3RyaW5nID0gJy0nO1xuXHRzdGF0aWMgRElWSURFOiBzdHJpbmcgPSAnLyc7XG5cdHN0YXRpYyBNVUxUSVBMWTogc3RyaW5nID0gJyonO1xuXHRzdGF0aWMgTU9EVUxVUzogc3RyaW5nID0gJyUnO1xuXG5cdHN0YXRpYyBFWENMQU1BVElPTl9NQVJLOiBzdHJpbmcgPSAnISc7XG5cdHN0YXRpYyBRVUVTVElPTl9NQVJLOiBzdHJpbmcgPSAnPyc7XG5cdHN0YXRpYyBMRVNTX1RIQU46IHN0cmluZyA9ICc8Jztcblx0c3RhdGljIEdSRUFURVJfVEhBTjogc3RyaW5nID0gJz4nO1xuXHRzdGF0aWMgTEVTU19FUVVBTDogc3RyaW5nID0gJzw9Jztcblx0c3RhdGljIEdSRUFURVJfRVFVQUw6IHN0cmluZyA9ICc+PSc7XG5cdHN0YXRpYyBFUVVBTDogc3RyaW5nID0gJz09Jztcblx0c3RhdGljIE5PVF9FUVVBTDogc3RyaW5nID0gJyE9Jztcblx0c3RhdGljIEFORDogc3RyaW5nID0gJyYmJztcblx0c3RhdGljIE9SOiBzdHJpbmcgPSAnfHwnO1xuXG5cdHN0YXRpYyBYTUxfQ0xPU0VfVEFHOiBzdHJpbmcgPSAnLz4nO1xuXHRzdGF0aWMgWE1MX09QRU5fQ0xPU0VfVEFHOiBzdHJpbmcgPSAnPC8nO1xuXG5cdHN0YXRpYyBLRVlXT1JEUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5JTVBPUlQsXG5cdFx0R1JBTU1BUi5GUk9NLFxuXHRcdEdSQU1NQVIuT1BFTixcblx0XHRHUkFNTUFSLkNMQVNTLFxuXHRcdEdSQU1NQVIuSU5URVJGQUNFLFxuXHRcdEdSQU1NQVIuRVhURU5EUyxcblx0XHRHUkFNTUFSLklNUExFTUVOVFMsXG5cdFx0R1JBTU1BUi5QVUJMSUMsXG5cdFx0R1JBTU1BUi5QUklWQVRFLFxuXHRcdEdSQU1NQVIuU1RBVElDLFxuXHRcdEdSQU1NQVIuUkVBRE9OTFksXG5cdFx0R1JBTU1BUi5SRVRVUk4sXG5cdFx0R1JBTU1BUi5MRVQsXG5cdFx0R1JBTU1BUi5ORVcsXG5cdFx0R1JBTU1BUi5USElTLFxuXHRcdEdSQU1NQVIuSUYsXG5cdFx0R1JBTU1BUi5FTFNFLFxuXHRcdEdSQU1NQVIuTUFUQ0gsXG5cdFx0R1JBTU1BUi5ERUZBVUxULFxuXHRcdEdSQU1NQVIuRk9SRUFDSCxcblx0XHRHUkFNTUFSLklOLFxuXHRcdEdSQU1NQVIuTlVMTCxcblx0XHRHUkFNTUFSLlZET00sXG5cdF07XG5cdHN0YXRpYyBBUklUSE1FVElDOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLlBMVVMsXG5cdFx0R1JBTU1BUi5NSU5VUyxcblx0XHRHUkFNTUFSLkRJVklERSxcblx0XHRHUkFNTUFSLk1VTFRJUExZLFxuXHRcdEdSQU1NQVIuTU9EVUxVU1xuXHRdO1xuXHRzdGF0aWMgQ09NUEFSSVNPTjogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5MRVNTX1RIQU4sXG5cdFx0R1JBTU1BUi5HUkVBVEVSX1RIQU4sXG5cdFx0R1JBTU1BUi5MRVNTX0VRVUFMLFxuXHRcdEdSQU1NQVIuR1JFQVRFUl9FUVVBTFxuXHRdO1xuXHRzdGF0aWMgRVFVQUxJVFk6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuRVFVQUwsXG5cdFx0R1JBTU1BUi5OT1RfRVFVQUxcblx0XTtcblx0c3RhdGljIExPR0lDQUw6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuQU5ELFxuXHRcdEdSQU1NQVIuT1Jcblx0XTtcblx0c3RhdGljIE9QRVJBVE9SUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5FWENMQU1BVElPTl9NQVJLLFxuXHRcdEdSQU1NQVIuUVVFU1RJT05fTUFSSyxcblx0XHRHUkFNTUFSLkFSUk9XLFxuXHRcdEdSQU1NQVIuRE9ULFxuXHRcdEdSQU1NQVIuQVNTSUdOLFxuXHRcdEdSQU1NQVIuUExVUyxcblx0XHRHUkFNTUFSLk1JTlVTLFxuXHRcdEdSQU1NQVIuRElWSURFLFxuXHRcdEdSQU1NQVIuTVVMVElQTFksXG5cdFx0R1JBTU1BUi5NT0RVTFVTLFxuXHRcdEdSQU1NQVIuTEVTU19USEFOLFxuXHRcdEdSQU1NQVIuR1JFQVRFUl9USEFOLFxuXHRcdEdSQU1NQVIuTEVTU19FUVVBTCxcblx0XHRHUkFNTUFSLkdSRUFURVJfRVFVQUwsXG5cdFx0R1JBTU1BUi5FUVVBTCxcblx0XHRHUkFNTUFSLk5PVF9FUVVBTCxcblx0XHRHUkFNTUFSLkFORCxcblx0XHRHUkFNTUFSLk9SLFxuXHRdO1xuXHRzdGF0aWMgRE9NX09QRVJBVE9SUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5BU1NJR04sXG5cdFx0R1JBTU1BUi5MRVNTX1RIQU4sXG5cdFx0R1JBTU1BUi5HUkVBVEVSX1RIQU4sXG5cdFx0R1JBTU1BUi5YTUxfT1BFTl9DTE9TRV9UQUcsXG5cdFx0R1JBTU1BUi5YTUxfQ0xPU0VfVEFHXG5cdF1cblx0c3RhdGljIE1BVEhfT1BFUkFUT1JTOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLlBMVVMsXG5cdFx0R1JBTU1BUi5NSU5VUyxcblx0XHRHUkFNTUFSLkRJVklERSxcblx0XHRHUkFNTUFSLk1VTFRJUExZLFxuXHRcdEdSQU1NQVIuTU9EVUxVU1xuXHRdO1xuXHRzdGF0aWMgTE9HSUNfT1BFUkFUT1JTOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLkxFU1NfVEhBTixcblx0XHRHUkFNTUFSLkdSRUFURVJfVEhBTixcblx0XHRHUkFNTUFSLkxFU1NfRVFVQUwsXG5cdFx0R1JBTU1BUi5HUkVBVEVSX0VRVUFMLFxuXHRcdEdSQU1NQVIuRVFVQUwsXG5cdFx0R1JBTU1BUi5OT1RfRVFVQUwsXG5cdFx0R1JBTU1BUi5BTkQsXG5cdFx0R1JBTU1BUi5PUixcblx0XTtcblx0c3RhdGljIFBVTkNUVUFUSU9OUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9PUEVOLFxuXHRcdEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfQ0xPU0UsXG5cdFx0R1JBTU1BUi5CUkFDRV9PUEVOLFxuXHRcdEdSQU1NQVIuQlJBQ0VfQ0xPU0UsXG5cdFx0R1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOLFxuXHRcdEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UsXG5cdFx0R1JBTU1BUi5TRU1JQ09MT04sXG5cdFx0R1JBTU1BUi5DT0xPTixcblx0XHRHUkFNTUFSLkNPTU1BXG5cdF1cbn1cblxuZXhwb3J0IGNsYXNzIFRZUEVfRU5VTSB7XG5cdHN0YXRpYyBNSVhFRDogc3RyaW5nID0gJ21peGVkJztcblx0c3RhdGljIFZPSUQ6IHN0cmluZyA9ICd2b2lkJztcblx0c3RhdGljIE5VTUJFUjogc3RyaW5nID0gJ251bWJlcic7XG5cdHN0YXRpYyBTVFJJTkc6IHN0cmluZyA9ICdzdHJpbmcnO1xuXHRzdGF0aWMgQk9PTEVBTjogc3RyaW5nID0gJ2Jvb2xlYW4nO1xuXHRzdGF0aWMgQVJSQVk6IHN0cmluZyA9ICdhcnJheSc7XG5cdHN0YXRpYyBOVUxMOiBzdHJpbmcgPSAnbnVsbCc7XG59XG5cbmV4cG9ydCBjbGFzcyBSdWxlcyB7XG5cdHN0YXRpYyBLRVlXT1JEUzogU2V0PHN0cmluZz4gPSBuZXcgU2V0KEdSQU1NQVIuS0VZV09SRFMpO1xuXHRzdGF0aWMgT1BFUkFUT1JTOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoR1JBTU1BUi5PUEVSQVRPUlMpO1xuXHRzdGF0aWMgRE9NX09QRVJBVE9SUzogU2V0PHN0cmluZz4gPSBuZXcgU2V0KEdSQU1NQVIuRE9NX09QRVJBVE9SUyk7XG5cdHN0YXRpYyBQVU5DVFVBVElPTlM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChHUkFNTUFSLlBVTkNUVUFUSU9OUyk7XG5cdHN0YXRpYyBDT01NRU5UX0xJTkU6IHN0cmluZyA9ICcvLyc7XG5cblx0aXNBbHBoYShjaGFyOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gL1thLXpfXS9pLnRlc3QoY2hhcik7XG5cdH1cblxuXHRpc051bWVyaWMoY2hhcjogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIC9bMC05XS8udGVzdChjaGFyKTtcblx0fVxuXG5cdGlzQWxwaGFOdW1lcmljKGNoYXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmlzQWxwaGEoY2hhcikgfHwgdGhpcy5pc051bWVyaWMoY2hhcik7XG5cdH1cblxuXHRpc1doaXRlc3BhY2UoY2hhcjogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIC9cXHMvLnRlc3QoY2hhcik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFRva2VuVHlwZSB7XG5cdHN0YXRpYyBDT01NRU5UOiBzdHJpbmcgPSAnY29tbWVudCc7XG5cdHN0YXRpYyBBTk5PVEFUSU9OOiBzdHJpbmcgPSAnYW5ub3RhdGlvbic7XG5cdHN0YXRpYyBJREVOVElGSUVSOiBzdHJpbmcgPSAnaWRlbnRpZmllcic7XG5cdHN0YXRpYyBLRVlXT1JEOiBzdHJpbmcgPSAna2V5d29yZCc7XG5cdHN0YXRpYyBQVU5DVFVBVElPTjogc3RyaW5nID0gJ3B1bmN0dWF0aW9uJztcblx0c3RhdGljIE5VTUJFUjogc3RyaW5nID0gJ251bWJlcic7XG5cdHN0YXRpYyBTVFJJTkc6IHN0cmluZyA9ICdzdHJpbmcnO1xuXHRzdGF0aWMgQk9PTEVBTjogc3RyaW5nID0gJ2Jvb2xlYW4nO1xuXHRzdGF0aWMgT1BFUkFUT1I6IHN0cmluZyA9ICdvcGVyYXRvcic7XG5cdHN0YXRpYyBURVhUOiBzdHJpbmcgPSAndGV4dCc7XG5cdHN0YXRpYyBFT0Y6IHN0cmluZyA9ICdlb2YnO1xufVxuXG5leHBvcnQgY2xhc3MgVG9rZW4ge1xuXHR0eXBlOiBzdHJpbmc7XG5cdHZhbHVlOiBzdHJpbmc7XG5cdGxpbmU6IG51bWJlciA9IDE7XG5cdGNvbHVtbjogbnVtYmVyID0gMTtcblx0c3RhcnQ6IG51bWJlcjtcblx0ZW5kOiBudW1iZXI7XG5cdHNvdXJjZTogU291cmNlO1xuXG5cdGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIsIHNvdXJjZTogU291cmNlKSB7XG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdFx0dGhpcy5zdGFydCA9IHN0YXJ0O1xuXHRcdHRoaXMuZW5kID0gZW5kO1xuXHRcdHRoaXMuc291cmNlID0gc291cmNlO1xuXHR9XG5cblx0d2l0aExpbmVBbmRDb2x1bW4obGluZTogbnVtYmVyLCBjb2x1bW46IG51bWJlcik6IFRva2VuIHtcblx0XHR0aGlzLmxpbmUgPSBsaW5lO1xuXHRcdHRoaXMuY29sdW1uID0gY29sdW1uO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7R1JBTU1BUiwgVFlQRV9FTlVNfSBmcm9tIFwiLi9ncmFtbWFyXCI7XG5pbXBvcnQge01vZGlmaWVycywgU3VwZXJDbGFzc30gZnJvbSBcIi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtTb3VyY2VTcGFufSBmcm9tIFwiLi9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5leHBvcnQgY2xhc3MgQVNUTm9kZVR5cGUge1xuXHRzdGF0aWMgUFJPR1JBTU0gPSAncHJvZ3JhbSc7XG5cdHN0YXRpYyBJTkRFWCA9ICdpbmRleCc7XG5cdHN0YXRpYyBJREVOVElGSUVSID0gJ2lkZW50aWZpZXInO1xuXHRzdGF0aWMgQU5OT1RBVElPTiA9ICdhbm5vdGF0aW9uJztcblx0c3RhdGljIFBBUkFNRVRFUiA9ICdwYXJhbWV0ZXInO1xuXHRzdGF0aWMgSU1QT1JUID0gR1JBTU1BUi5JTVBPUlQ7XG5cdHN0YXRpYyBOVU1CRVIgPSBUWVBFX0VOVU0uTlVNQkVSO1xuXHRzdGF0aWMgU1RSSU5HID0gVFlQRV9FTlVNLlNUUklORztcblx0c3RhdGljIEJPT0xFQU4gPSBUWVBFX0VOVU0uQk9PTEVBTjtcblx0c3RhdGljIE5VTEwgPSBUWVBFX0VOVU0uTlVMTDtcblx0c3RhdGljIE5FVyA9IEdSQU1NQVIuTkVXO1xuXHRzdGF0aWMgQ0xBU1MgPSBHUkFNTUFSLkNMQVNTO1xuXHRzdGF0aWMgSU5URVJGQUNFID0gR1JBTU1BUi5JTlRFUkZBQ0U7XG5cdHN0YXRpYyBDT05TVFJVQ1RPUiA9IEdSQU1NQVIuQ09OU1RSVUNUT1I7XG5cdHN0YXRpYyBUSElTID0gR1JBTU1BUi5USElTO1xuXHRzdGF0aWMgUkVUVVJOID0gR1JBTU1BUi5SRVRVUk47XG5cdHN0YXRpYyBWRE9NID0gJ3Zkb21fZGVjbGFyYXRpb24nO1xuXHRzdGF0aWMgVkRPTV9URVhUID0gJ3Zkb21fdGV4dF9kZWNsYXJhdGlvbic7XG5cdHN0YXRpYyBVTkFSWSA9ICd1bmFyeV9leHByZXNzaW9uJztcblx0c3RhdGljIExBTUJEQSA9ICdsYW1iZGFfZXhwcmVzc2lvbic7XG5cdHN0YXRpYyBBUlJBWSA9ICdhcnJheV9kZWNsYXJhdGlvbic7XG5cdHN0YXRpYyBUWVBFID0gJ3R5cGVfZGVjbGFyYXRpb24nO1xuXHRzdGF0aWMgRklFTEQgPSAnZmllbGRfZGVjbGFyYXRpb24nO1xuXHRzdGF0aWMgTUVNQkVSID0gJ21lbWJlcl9leHByZXNzaW9uJztcblx0c3RhdGljIE1FVEhPRCA9ICdtZXRob2RfZGVjbGFyYXRpb24nO1xuXHRzdGF0aWMgQ0FMTCA9ICdjYWxsX2V4cHJlc3Npb24nO1xuXHRzdGF0aWMgVkFSSUFCTEUgPSAndmFyaWFibGVfZGVjbGFyYXRpb24nO1xuXHRzdGF0aWMgRVhQUkVTU0lPTiA9ICdleHByZXNzaW9uX3N0YXRlbWVudCc7XG5cdHN0YXRpYyBCSU5BUlkgPSAnYmluYXJ5X2V4cHJlc3Npb24nO1xuXHRzdGF0aWMgQVNTSUdOTUVOVCA9ICdhc3NpZ25tZW50X2V4cHJlc3Npb24nO1xuXHRzdGF0aWMgSUYgPSAnaWZfc3RhdGVtZW50Jztcblx0c3RhdGljIFRIRU4gPSAndGhlbl9zdGF0ZW1lbnQnO1xuXHRzdGF0aWMgRUxTRSA9ICdlbHNlX3N0YXRlbWVudCc7XG5cdHN0YXRpYyBNQVRDSCA9ICdtYXRjaF9zdGF0ZW1lbnQnO1xuXHRzdGF0aWMgTUFUQ0hfQ0FTRSA9ICdtYXRjaF9jYXNlX3N0YXRlbWVudCc7XG5cdHN0YXRpYyBGT1JFQUNIID0gJ2ZvcmVhY2hfc3RhdGVtZW50Jztcbn1cblxuZXhwb3J0IGNsYXNzIEFTVE5vZGUge1xuXHRpc0V4cHJlc3Npb246IGJvb2xlYW4gPSBmYWxzZTtcblx0bmFtZTogc3RyaW5nID0gJyc7XG5cblx0c3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsO1xuXHR0eXBlOiBzdHJpbmc7XG5cdHZhbHVlOiBhbnkgfCBudWxsID0gbnVsbDtcblx0Y2hpbGRyZW46IEFTVE5vZGVbXTtcblxuXHRjb25zdHJ1Y3Rvcih0eXBlOiBzdHJpbmcsIGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXSkge1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RDYWxsTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRjYWxsZWU6IEFTVE5vZGU7XG5cdGFyZ3VtZW50czogQVNUTm9kZVtdO1xuXG5cdGNvbnN0cnVjdG9yKGNhbGxlZTogQVNUTm9kZSwgYXJnczogQVNUTm9kZVtdID0gW10pIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5DQUxMKTtcblxuXHRcdHRoaXMuY2FsbGVlID0gY2FsbGVlO1xuXHRcdHRoaXMuYXJndW1lbnRzID0gYXJncztcblx0XHR0aGlzLmlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVE5ld05vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0YXJndW1lbnRzOiBBU1ROb2RlW107XG5cdHR5cGVBbm5vdGF0aW9uOiBBU1RUeXBlTm9kZTtcblxuXHRjb25zdHJ1Y3RvcihhcmdzOiBBU1ROb2RlW10sIHR5cGVBbm5vdGF0aW9uOiBBU1RUeXBlTm9kZSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLk5FVyk7XG5cblx0XHR0aGlzLmFyZ3VtZW50cyA9IGFyZ3M7XG5cdFx0dGhpcy50eXBlQW5ub3RhdGlvbiA9IHR5cGVBbm5vdGF0aW9uO1xuXHRcdHRoaXMubmFtZSA9IHR5cGVBbm5vdGF0aW9uLm5hbWU7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RCaW5hcnlOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGxlZnQ6IEFTVE5vZGU7XG5cdHJpZ2h0OiBBU1ROb2RlO1xuXHRvcGVyYXRvcjogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGxlZnQ6IEFTVE5vZGUsIHJpZ2h0OiBBU1ROb2RlLCBvcGVyYXRvcjogc3RyaW5nKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuQklOQVJZKTtcblxuXHRcdHRoaXMubGVmdCA9IGxlZnQ7XG5cdFx0dGhpcy5yaWdodCA9IHJpZ2h0O1xuXHRcdHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcblx0XHR0aGlzLmlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEFzc2lnbm1lbnROb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGxlZnQ6IEFTVE5vZGU7XG5cdHJpZ2h0OiBBU1ROb2RlO1xuXG5cdGNvbnN0cnVjdG9yKGxlZnQ6IEFTVE5vZGUsIHJpZ2h0OiBBU1ROb2RlKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuQVNTSUdOTUVOVCk7XG5cblx0XHR0aGlzLmxlZnQgPSBsZWZ0O1xuXHRcdHRoaXMucmlnaHQgPSByaWdodDtcblx0XHR0aGlzLmlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVE1lbWJlck5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0b2JqZWN0OiBBU1ROb2RlO1xuXHRwcm9wZXJ0eTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKG9iamVjdDogQVNUTm9kZSwgcHJvcGVydHk6IHN0cmluZykge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLk1FTUJFUik7XG5cblx0XHR0aGlzLm9iamVjdCA9IG9iamVjdDtcblx0XHR0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RVbmFyeU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0b3BlcmF0b3I6IHN0cmluZztcblx0YXJndW1lbnQ6IEFTVE5vZGUgfCBBU1RVbmFyeU5vZGU7XG5cblx0Y29uc3RydWN0b3Iob3BlcmF0b3I6IHN0cmluZywgYXJndW1lbnQ6IEFTVE5vZGUgfCBBU1RVbmFyeU5vZGUpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5VTkFSWSk7XG5cblx0XHR0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG5cdFx0dGhpcy5hcmd1bWVudCA9IGFyZ3VtZW50O1xuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUSW5kZXhOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdG9iamVjdDogQVNUTm9kZTtcblx0aW5kZXg6IEFTVE5vZGU7XG5cblx0Y29uc3RydWN0b3Iob2JqZWN0OiBBU1ROb2RlLCBpbmRleDogQVNUTm9kZSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLklOREVYKTtcblxuXHRcdHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuXHRcdHRoaXMuaW5kZXggPSBpbmRleDtcblx0XHR0aGlzLmlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEFycmF5Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRlbGVtZW50czogQVNUTm9kZVtdID0gW107XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuQVJSQVkpO1xuXG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RMYW1iZGFOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXTtcblx0cmV0dXJuVHlwZTogQVNUVHlwZU5vZGU7XG5cblx0Y29uc3RydWN0b3IocGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdLCByZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSwgY2hpbGRyZW46IEFTVE5vZGVbXSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkxBTUJEQSwgY2hpbGRyZW4pO1xuXG5cdFx0dGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcblx0XHR0aGlzLnJldHVyblR5cGUgPSByZXR1cm5UeXBlO1xuXG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RGaWVsZE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0bW9kaWZpZXJzOiBNb2RpZmllcnM7XG5cdGZpZWxkVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsO1xuXHRpbml0OiBBU1ROb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBtb2RpZmllcnM6IE1vZGlmaWVycywgZmllbGRUeXBlOiBBU1RUeXBlTm9kZSB8IG51bGwsIGluaXQ6IEFTVE5vZGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkZJRUxEKTtcblxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG5cdFx0dGhpcy5maWVsZFR5cGUgPSBmaWVsZFR5cGU7XG5cdFx0dGhpcy5pbml0ID0gaW5pdDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUVmFyaWFibGVOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdHR5cGVBbm5vdGF0aW9uOiBBU1RUeXBlTm9kZSB8IG51bGwgPSBudWxsO1xuXHRpbml0OiBBU1ROb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGUgfCBudWxsID0gbnVsbCwgaW5pdDogQVNUTm9kZSB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuVkFSSUFCTEUpO1xuXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnR5cGVBbm5vdGF0aW9uID0gdHlwZUFubm90YXRpb247XG5cdFx0dGhpcy5pbml0ID0gaW5pdDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNURXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0ZXhwcjogQVNUTm9kZTtcblxuXHRjb25zdHJ1Y3RvcihleHByOiBBU1ROb2RlKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuRVhQUkVTU0lPTik7XG5cblx0XHR0aGlzLmV4cHIgPSBleHByO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RSZXR1cm5Ob2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGFyZ3VtZW50OiBBU1ROb2RlIHwgQVNURXhwcmVzc2lvbk5vZGUgfCBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKGFyZ3VtZW50OiBBU1ROb2RlIHwgQVNURXhwcmVzc2lvbk5vZGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLlJFVFVSTik7XG5cblx0XHR0aGlzLmFyZ3VtZW50ID0gYXJndW1lbnQ7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVENsYXNzTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRhbm5vdGF0aW9uczogQVNUQW5ub3RhdGlvbk5vZGVbXTtcblx0bW9kaWZpZXJzOiBNb2RpZmllcnM7XG5cdHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXTtcblx0c3VwZXJDbGFzczogU3VwZXJDbGFzcyB8IG51bGw7XG5cdGltcGxlbWVudHNJbnRlcmZhY2VzOiBBU1RUeXBlTm9kZVtdO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdG5hbWU6IHN0cmluZyxcblx0XHRhbm5vdGF0aW9uczogQVNUQW5ub3RhdGlvbk5vZGVbXSxcblx0XHRtb2RpZmllcnM6IE1vZGlmaWVycyxcblx0XHR0eXBlUGFyYW1ldGVyczogc3RyaW5nW10sXG5cdFx0aW1wbGVtZW50c0ludGVyZmFjZXM6IEFTVFR5cGVOb2RlW10sXG5cdFx0c3VwZXJDbGFzczogU3VwZXJDbGFzcyB8IG51bGwgPSBudWxsLFxuXHRcdGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXVxuXHQpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5DTEFTUywgY2hpbGRyZW4pO1xuXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmFubm90YXRpb25zID0gYW5ub3RhdGlvbnM7XG5cdFx0dGhpcy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG5cdFx0dGhpcy50eXBlUGFyYW1ldGVycyA9IHR5cGVQYXJhbWV0ZXJzO1xuXHRcdHRoaXMuc3VwZXJDbGFzcyA9IHN1cGVyQ2xhc3M7XG5cdFx0dGhpcy5pbXBsZW1lbnRzSW50ZXJmYWNlcyA9IGltcGxlbWVudHNJbnRlcmZhY2VzO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RJbnRlcmZhY2VOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGFubm90YXRpb25zOiBBU1RBbm5vdGF0aW9uTm9kZVtdO1xuXHRtb2RpZmllcnM6IE1vZGlmaWVycztcblx0dHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdO1xuXHRleHRlbmRzSW50ZXJmYWNlczogc3RyaW5nW107XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0bmFtZTogc3RyaW5nLFxuXHRcdGFubm90YXRpb25zOiBBU1RBbm5vdGF0aW9uTm9kZVtdLFxuXHRcdG1vZGlmaWVyczogTW9kaWZpZXJzLFxuXHRcdHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXSxcblx0XHRleHRlbmRzSW50ZXJmYWNlczogc3RyaW5nW10sXG5cdFx0Y2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdXG5cdCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLklOVEVSRkFDRSwgY2hpbGRyZW4pO1xuXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmFubm90YXRpb25zID0gYW5ub3RhdGlvbnM7XG5cdFx0dGhpcy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG5cdFx0dGhpcy50eXBlUGFyYW1ldGVycyA9IHR5cGVQYXJhbWV0ZXJzO1xuXHRcdHRoaXMuZXh0ZW5kc0ludGVyZmFjZXMgPSBleHRlbmRzSW50ZXJmYWNlcztcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUQW5ub3RhdGlvbk5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0cHJvcGVydGllczogTWFwPHN0cmluZywgQVNUTm9kZT4gPSBuZXcgTWFwKCk7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuQU5OT1RBVElPTik7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUUGFyYW1ldGVyTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHR0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGUgfCBudWxsO1xuXHRkZWZhdWx0VmFsdWU6IEFTVE5vZGUgfCBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZUFubm90YXRpb246IEFTVFR5cGVOb2RlIHwgbnVsbCwgZGVmYXVsdFZhbHVlOiBBU1ROb2RlIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5QQVJBTUVURVIpO1xuXHRcdHRoaXMudHlwZUFubm90YXRpb24gPSB0eXBlQW5ub3RhdGlvbjtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuZGVmYXVsdFZhbHVlID0gZGVmYXVsdFZhbHVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RNZXRob2ROb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGFubm90YXRpb25zOiBBU1RBbm5vdGF0aW9uTm9kZVtdO1xuXHRtb2RpZmllcnM6IE1vZGlmaWVycztcblx0dHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdO1xuXHRwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW107XG5cdHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbDtcblxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdG5hbWU6IHN0cmluZyxcblx0XHR0eXBlOiBzdHJpbmcsXG5cdFx0YW5ub3RhdGlvbnM6IEFTVEFubm90YXRpb25Ob2RlW10sXG5cdFx0bW9kaWZpZXJzOiBNb2RpZmllcnMsXG5cdFx0dHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdLFxuXHRcdHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSxcblx0XHRyZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGwgPSBudWxsLFxuXHRcdGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXSxcblx0KSB7XG5cdFx0c3VwZXIodHlwZSwgY2hpbGRyZW4pO1xuXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmFubm90YXRpb25zID0gYW5ub3RhdGlvbnM7XG5cdFx0dGhpcy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG5cdFx0dGhpcy50eXBlUGFyYW1ldGVycyA9IHR5cGVQYXJhbWV0ZXJzO1xuXHRcdHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG5cdFx0dGhpcy5yZXR1cm5UeXBlID0gcmV0dXJuVHlwZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUSW1wb3J0Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRuYW1lczogc3RyaW5nW107XG5cdGZyb206IHN0cmluZyB8IG51bGw7XG5cblx0Y29uc3RydWN0b3IobmFtZXM6IHN0cmluZ1tdLCBmcm9tOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLklNUE9SVCk7XG5cblx0XHR0aGlzLm5hbWVzID0gbmFtZXM7XG5cdFx0dGhpcy5mcm9tID0gZnJvbTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUVGhlbk5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0Y29uc3RydWN0b3IoY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuVEhFTiwgY2hpbGRyZW4pO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RJZk5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0Y29uZGl0aW9uOiBBU1ROb2RlO1xuXHR0aGVuOiBBU1RUaGVuTm9kZTtcblx0ZWxzZTogQVNUSWZOb2RlIHwgQVNURWxzZU5vZGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihjb25kaXRpb246IEFTVE5vZGUsIHRoZW46IEFTVFRoZW5Ob2RlKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuSUYpO1xuXG5cdFx0dGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG5cdFx0dGhpcy50aGVuID0gdGhlbjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNURWxzZU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0Y29uc3RydWN0b3IoY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuRUxTRSwgY2hpbGRyZW4pO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RNYXRjaE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0ZXhwcmVzc2lvbjogQVNUTm9kZTtcblx0Y2FzZXM6IEFTVE1hdGNoQ2FzZU5vZGVbXTtcblx0ZGVmYXVsdENhc2U6IEFTVE1hdGNoQ2FzZU5vZGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihleHByZXNzaW9uOiBBU1ROb2RlLCBjYXNlczogQVNUTWF0Y2hDYXNlTm9kZVtdLCBkZWZhdWx0Q2FzZTogQVNUTWF0Y2hDYXNlTm9kZSB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuTUFUQ0gpO1xuXG5cdFx0dGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcblx0XHR0aGlzLmNhc2VzID0gY2FzZXM7XG5cdFx0dGhpcy5kZWZhdWx0Q2FzZSA9IGRlZmF1bHRDYXNlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RNYXRjaENhc2VOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdHRlc3Q6IEFTVE5vZGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihjaGlsZHJlbjogQVNUTm9kZVtdID0gW10pIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5NQVRDSF9DQVNFLCBjaGlsZHJlbik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEZvcmVhY2hOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGl0ZXJhdG9yOiBzdHJpbmc7XG5cdGl0ZXJhYmxlOiBBU1ROb2RlO1xuXHRib2R5OiBBU1ROb2RlW107XG5cblx0Y29uc3RydWN0b3IoaXRlcmF0b3I6IHN0cmluZywgaXRlcmFibGU6IEFTVE5vZGUsIGJvZHk6IEFTVE5vZGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuRk9SRUFDSCk7XG5cblx0XHR0aGlzLml0ZXJhdG9yID0gaXRlcmF0b3I7XG5cdFx0dGhpcy5pdGVyYWJsZSA9IGl0ZXJhYmxlO1xuXHRcdHRoaXMuYm9keSA9IGJvZHk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFR5cGVOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdHN0YXRpYyBLSU5EX1NJTVBMRSA9ICdzaW1wbGUnO1xuXHRzdGF0aWMgS0lORF9HRU5FUklDID0gJ2dlbmVyaWMnO1xuXHRzdGF0aWMgS0lORF9MQU1CREEgPSAnbGFtYmRhJztcblxuXHRraW5kOiBzdHJpbmc7XG5cdHR5cGVBcmd1bWVudHM6IEFTVFR5cGVOb2RlW10gPSBbXTtcblx0cGFyYW1ldGVyVHlwZXM6IEFTVFR5cGVOb2RlW10gPSBbXTtcblx0cmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsID0gbnVsbDtcblx0bnVsbGFibGU6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3Ioa2luZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIG51bGxhYmxlOiBib29sZWFuID0gZmFsc2UpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5UWVBFKTtcblxuXHRcdHRoaXMua2luZCA9IGtpbmQ7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLm51bGxhYmxlID0gbnVsbGFibGU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFZEb21Ob2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdHJlYWRvbmx5IHRhZzogc3RyaW5nO1xuXHRyZWFkb25seSBwcm9wczogTWFwPHN0cmluZywgQVNUTm9kZT4gPSBuZXcgTWFwKCk7XG5cblx0Y29uc3RydWN0b3IodGFnOiBzdHJpbmcsIHByb3BzOiBNYXA8c3RyaW5nLCBBU1ROb2RlPiwgY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuVkRPTSwgY2hpbGRyZW4pO1xuXHRcdHRoaXMudGFnID0gdGFnO1xuXHRcdHRoaXMucHJvcHMgPSBwcm9wcztcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUVkRvbVRleHROb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5WRE9NX1RFWFQpO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0dSQU1NQVIsIFJ1bGVzLCBUb2tlbiwgVG9rZW5UeXBlfSBmcm9tIFwiLi4vZ3JhbW1hclwiO1xuaW1wb3J0IHt0aHJvd1Rva2VuRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcbmltcG9ydCB0eXBlIHtTb3VyY2V9IGZyb20gXCIuLi9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5leHBvcnQgY2xhc3MgVG9rZW5pemVyIHtcblx0cHJpdmF0ZSByZWFkb25seSBydWxlcyA9IG5ldyBSdWxlcygpO1xuXHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZTogU291cmNlO1xuXG5cdGNvbnN0cnVjdG9yKHNvdXJjZTogU291cmNlKSB7XG5cdFx0dGhpcy5zb3VyY2UgPSBzb3VyY2U7XG5cdH1cblxuXHRnZXRUb2tlblN0cmVhbSgpOiBUb2tlblN0cmVhbSB7XG5cdFx0cmV0dXJuIG5ldyBUb2tlblN0cmVhbSh0aGlzLnRva2VuaXplKCkpO1xuXHR9XG5cblx0dG9rZW5pemUoKTogVG9rZW5bXSB7XG5cdFx0Y29uc3QgdG9rZW5zOiBUb2tlbltdID0gW107XG5cblx0XHRsZXQgaTogbnVtYmVyID0gMDtcblx0XHRsZXQgbGluZTogbnVtYmVyID0gMTtcblx0XHRsZXQgY29sdW1uOiBudW1iZXIgPSAwO1xuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ0xpbmVDb21tZW50ID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgbGluZUNvbW1lbnQ6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hMaW5lQ29tbWVudEF0KGkpO1xuXHRcdFx0aWYgKGxpbmVDb21tZW50KSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKGxpbmVDb21tZW50LndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gbGluZUNvbW1lbnQuZW5kICsgMTtcblxuXHRcdFx0XHRsaW5lKys7XG5cdFx0XHRcdGNvbHVtbiA9IDA7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdTdHJpbmcgPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBzdHJpbmc6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hTdHJpbmdBdChpKTtcblx0XHRcdGlmIChzdHJpbmcpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2goc3RyaW5nLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gc3RyaW5nLmVuZCArIDE7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQoc3RyaW5nKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ1B1bmN0dWF0aW9uID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgcHVuY3R1YXRpb246IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hQdW5jdHVhdGlvbkF0KGkpO1xuXHRcdFx0aWYgKHB1bmN0dWF0aW9uKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKHB1bmN0dWF0aW9uLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gcHVuY3R1YXRpb24uZW5kICsgMTtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChwdW5jdHVhdGlvbik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdJZGVudGlmaWVyID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgaWRlbnRpZmllcjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaElkZW50aWZpZXJBdChpKTtcblx0XHRcdGlmIChpZGVudGlmaWVyKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKGlkZW50aWZpZXIud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBpZGVudGlmaWVyLmVuZDtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChpZGVudGlmaWVyKTtcblxuXHRcdFx0XHRpZiAoaWRlbnRpZmllci52YWx1ZSA9PT0gR1JBTU1BUi5WRE9NKSB7XG5cdFx0XHRcdFx0Y29uc3QgdG9rZW5pemVkVkRvbSA9IHRoaXMudG9rZW5pemVWRG9tKGksIGxpbmUsIGNvbHVtbik7XG5cdFx0XHRcdFx0dG9rZW5zLnB1c2goLi4udG9rZW5pemVkVkRvbS50b2tlbnMpO1xuXHRcdFx0XHRcdGkgPSB0b2tlbml6ZWRWRG9tLm5ld0luZGV4O1xuXHRcdFx0XHRcdGxpbmUgPSB0b2tlbml6ZWRWRG9tLmxpbmU7XG5cdFx0XHRcdFx0Y29sdW1uID0gdG9rZW5pemVkVkRvbS5jb2x1bW47XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ051bWJlciA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IG51bWJlcjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaE51bWJlckF0KGkpO1xuXHRcdFx0aWYgKG51bWJlcikge1xuXHRcdFx0XHR0b2tlbnMucHVzaChudW1iZXIud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBudW1iZXIuZW5kO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KG51bWJlcik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdPcGVyYXRvciA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IG9wZXJhdG9yOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoT3BlcmF0b3JBdChpLCBSdWxlcy5PUEVSQVRPUlMpO1xuXHRcdFx0aWYgKG9wZXJhdG9yKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKG9wZXJhdG9yLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gb3BlcmF0b3IuZW5kICsgMTtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChvcGVyYXRvcik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdBbm5vdGF0aW9uID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgYW5ub3RhdGlvbjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaEFubm90YXRpb25BdChpKTtcblx0XHRcdGlmIChhbm5vdGF0aW9uKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKGFubm90YXRpb24ud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBhbm5vdGF0aW9uLmVuZCArIDE7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQoYW5ub3RhdGlvbik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0d2hpbGUgKGkgPCB0aGlzLnNvdXJjZS5sZW5ndGgpIHtcblx0XHRcdGlmICh0aGlzLnNvdXJjZS5jaGFyQXQoaSkgPT09ICdcXG4nKSB7XG5cdFx0XHRcdGxpbmUrKztcblx0XHRcdFx0Y29sdW1uID0gMDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbHVtbisrO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5tYXRjaFdoaXRlc3BhY2VBdChpKSkge1xuXHRcdFx0XHRpKys7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaWZJc0NvbnN1bWluZ0xpbmVDb21tZW50KClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ1B1bmN0dWF0aW9uKClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ1N0cmluZygpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdOdW1iZXIoKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nSWRlbnRpZmllcigpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdPcGVyYXRvcigpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdBbm5vdGF0aW9uKCkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHRocm93VG9rZW5FcnJvcignVW5leHBlY3RlZCBjaGFyYWN0ZXI6ICcgKyB0aGlzLnNvdXJjZS5jaGFyQXQoaSkpO1xuXHRcdH1cblxuXHRcdHRva2Vucy5wdXNoKFxuXHRcdFx0dGhpcy5lb2YoaSlcblx0XHRcdCAgICAud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKVxuXHRcdCk7XG5cblx0XHRyZXR1cm4gdG9rZW5zO1xuXHR9XG5cblx0ZW9mKGVuZDogbnVtYmVyKTogVG9rZW4ge1xuXHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLkVPRiwgJycsIGVuZCwgZW5kLCB0aGlzLnNvdXJjZSlcblx0fVxuXG5cdGNvbHVtT2Zmc2V0KHRva2VuOiBUb2tlbik6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRva2VuLnZhbHVlLmxlbmd0aCAtIDE7XG5cdH1cblxuXHRtYXRjaFdoaXRlc3BhY2VBdChpOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5ydWxlcy5pc1doaXRlc3BhY2UodGhpcy5zb3VyY2UuY2hhckF0KGkpKTtcblx0fVxuXG5cdG1hdGNoTnVtYmVyQXQoaTogbnVtYmVyKTogVG9rZW4gfCBudWxsIHtcblx0XHRpZiAoIXRoaXMucnVsZXMuaXNOdW1lcmljKHRoaXMuc291cmNlLmNoYXJBdChpKSkpIHtcblx0XHRcdHJldHVybiBudWxsXG5cdFx0fVxuXHRcdGxldCBzdGFydCA9IGk7XG5cdFx0d2hpbGUgKHRoaXMucnVsZXMuaXNOdW1lcmljKHRoaXMuc291cmNlLmNoYXJBdChpKSkpIGkrKztcblx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5OVU1CRVIsIHRoaXMuc291cmNlLnNsaWNlKHN0YXJ0LCBpKSwgc3RhcnQsIGksIHRoaXMuc291cmNlKTtcblx0fVxuXG5cdG1hdGNoU3RyaW5nQXQoaTogbnVtYmVyKTogVG9rZW4gfCBudWxsIHtcblx0XHRpZiAodGhpcy5zb3VyY2UuY2hhckF0KGkpICE9PSAnXCInKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0bGV0IHN0YXJ0ID0gKytpO1xuXHRcdHdoaWxlICh0aGlzLnNvdXJjZS5jaGFyQXQoaSkgIT09ICdcIicpIGkrKztcblx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5TVFJJTkcsIHRoaXMuc291cmNlLnNsaWNlKHN0YXJ0LCBpKSwgc3RhcnQsIGksIHRoaXMuc291cmNlKTtcblx0fVxuXG5cdG1hdGNoSWRlbnRpZmllckF0KGk6IG51bWJlcik6IFRva2VuIHwgbnVsbCB7XG5cdFx0aWYgKCF0aGlzLnJ1bGVzLmlzQWxwaGEodGhpcy5zb3VyY2UuY2hhckF0KGkpKSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGxldCBzdGFydCA9IGk7XG5cdFx0bGV0IGogPSBpO1xuXHRcdHdoaWxlICh0aGlzLnJ1bGVzLmlzQWxwaGFOdW1lcmljKHRoaXMuc291cmNlLmNoYXJBdChqKSkpIGorKztcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuc291cmNlLnNsaWNlKHN0YXJ0LCBqKTtcblxuXHRcdGxldCB0eXBlID0gVG9rZW5UeXBlLklERU5USUZJRVI7XG5cdFx0aWYgKFtHUkFNTUFSLlRSVUUsIEdSQU1NQVIuRkFMU0VdLmluY2x1ZGVzKHZhbHVlKSkge1xuXHRcdFx0dHlwZSA9IFRva2VuVHlwZS5CT09MRUFOO1xuXHRcdH0gZWxzZSBpZiAoUnVsZXMuS0VZV09SRFMuaGFzKHZhbHVlKSkge1xuXHRcdFx0dHlwZSA9IFRva2VuVHlwZS5LRVlXT1JEO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgVG9rZW4odHlwZSwgdmFsdWUsIHN0YXJ0LCBqLCB0aGlzLnNvdXJjZSk7XG5cdH1cblxuXHRtYXRjaE9wZXJhdG9yQXQoaTogbnVtYmVyLCBvcGVyYXRvcnM6IFNldDxzdHJpbmc+KTogVG9rZW4gfCBudWxsIHtcblx0XHRjb25zdCBjaGFycyA9IHRoaXMuc291cmNlLmNoYXJBdChpKSArIHRoaXMuc291cmNlLmNoYXJBdChpICsgMSk7XG5cdFx0aWYgKG9wZXJhdG9ycy5oYXMoY2hhcnMpKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5PUEVSQVRPUiwgY2hhcnMsIGksIGkgKyAxLCB0aGlzLnNvdXJjZSk7XG5cdFx0fVxuXG5cdFx0aWYgKG9wZXJhdG9ycy5oYXModGhpcy5zb3VyY2UuY2hhckF0KGkpKSkge1xuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuT1BFUkFUT1IsIHRoaXMuc291cmNlLmNoYXJBdChpKSwgaSwgaSwgdGhpcy5zb3VyY2UpO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0bWF0Y2hQdW5jdHVhdGlvbkF0KGk6IG51bWJlcik6IFRva2VuIHwgbnVsbCB7XG5cdFx0Y29uc3QgY2hhcnMgPSB0aGlzLnNvdXJjZS5jaGFyQXQoaSkgKyB0aGlzLnNvdXJjZS5jaGFyQXQoaSArIDEpO1xuXHRcdGlmIChSdWxlcy5QVU5DVFVBVElPTlMuaGFzKGNoYXJzKSkge1xuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuUFVOQ1RVQVRJT04sIGNoYXJzLCBpLCBpICsgMSwgdGhpcy5zb3VyY2UpO1xuXHRcdH1cblxuXHRcdGlmICghUnVsZXMuUFVOQ1RVQVRJT05TLmhhcyh0aGlzLnNvdXJjZS5jaGFyQXQoaSkpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuUFVOQ1RVQVRJT04sIHRoaXMuc291cmNlLmNoYXJBdChpKSwgaSwgaSwgdGhpcy5zb3VyY2UpO1xuXHR9XG5cblx0bWF0Y2hMaW5lQ29tbWVudEF0KGk6IG51bWJlcik6IFRva2VuIHwgbnVsbCB7XG5cdFx0aWYgKCF0aGlzLnNvdXJjZS5zdGFydHNXaXRoKFJ1bGVzLkNPTU1FTlRfTElORSwgaSkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRsZXQgaiA9IGkgKyBSdWxlcy5DT01NRU5UX0xJTkUubGVuZ3RoO1xuXHRcdHdoaWxlIChqIDwgdGhpcy5zb3VyY2UubGVuZ3RoICYmIHRoaXMuc291cmNlLmNoYXJBdChqKSAhPT0gJ1xcbicpIGorKztcblx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5DT01NRU5ULCB0aGlzLnNvdXJjZS5zbGljZShpLCBqKSwgaSwgaiwgdGhpcy5zb3VyY2UpO1xuXHR9XG5cblx0bWF0Y2hBbm5vdGF0aW9uQXQoaTogbnVtYmVyKTogVG9rZW4gfCBudWxsIHtcblx0XHRpZiAodGhpcy5zb3VyY2UuY2hhckF0KGkpICE9PSAnQCcpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGxldCBzdGFydCA9IGkgKyAxO1xuXHRcdGxldCBqID0gaSArIDE7XG5cdFx0d2hpbGUgKHRoaXMucnVsZXMuaXNBbHBoYSh0aGlzLnNvdXJjZS5jaGFyQXQoaikpKSBqKys7XG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnNvdXJjZS5zbGljZShzdGFydCwgaik7XG5cblx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5BTk5PVEFUSU9OLCB2YWx1ZSwgc3RhcnQsIGosIHRoaXMuc291cmNlKTtcblx0fVxuXG5cdHByaXZhdGUgdG9rZW5pemVWRG9tKHN0YXJ0SW5kZXg6IG51bWJlciwgbGluZTogbnVtYmVyLCBjb2x1bW46IG51bWJlcik6IHtcblx0XHR0b2tlbnM6IFRva2VuW10sXG5cdFx0bmV3SW5kZXg6IG51bWJlcixcblx0XHRsaW5lOiBudW1iZXIsXG5cdFx0Y29sdW1uOiBudW1iZXJcblx0fSB7XG5cdFx0Y29uc3QgdG9rZW5zOiBUb2tlbltdID0gW107XG5cdFx0bGV0IGk6IG51bWJlciA9IHN0YXJ0SW5kZXg7XG5cdFx0bGV0IHRleHRCdWZmZXI6IHN0cmluZyA9ICcnO1xuXG5cdFx0Y29uc3QgZmx1c2hUZXh0ID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKHRleHRCdWZmZXIubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR0b2tlbnMucHVzaChcblx0XHRcdFx0XHRuZXcgVG9rZW4oXG5cdFx0XHRcdFx0XHRUb2tlblR5cGUuVEVYVCxcblx0XHRcdFx0XHRcdHRleHRCdWZmZXIsXG5cdFx0XHRcdFx0XHRpIC0gdGV4dEJ1ZmZlci5sZW5ndGgsXG5cdFx0XHRcdFx0XHRpLFxuXHRcdFx0XHRcdFx0dGhpcy5zb3VyY2Vcblx0XHRcdFx0XHQpLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbiAtIHRleHRCdWZmZXIubGVuZ3RoKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHR0ZXh0QnVmZmVyID0gJyc7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHdoaWxlIChpIDwgdGhpcy5zb3VyY2UubGVuZ3RoKSB7XG5cdFx0XHRjb25zdCBjaGFyOiBzdHJpbmcgPSB0aGlzLnNvdXJjZS5jaGFyQXQoaSk7XG5cblx0XHRcdGlmIChjaGFyID09PSBHUkFNTUFSLlNFTUlDT0xPTikge1xuXHRcdFx0XHRmbHVzaFRleHQoKTtcblxuXHRcdFx0XHR0b2tlbnMucHVzaChuZXcgVG9rZW4oVG9rZW5UeXBlLlBVTkNUVUFUSU9OLCBjaGFyLCBpLCBpLCB0aGlzLnNvdXJjZSlcblx0XHRcdFx0XHQgICAgICAgICAgICAud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cblx0XHRcdFx0aSsrO1xuXHRcdFx0XHRjb2x1bW4rKztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IG9wZXJhdG9yOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoT3BlcmF0b3JBdChpLCBSdWxlcy5ET01fT1BFUkFUT1JTKTtcblx0XHRcdGlmIChvcGVyYXRvcikge1xuXHRcdFx0XHRmbHVzaFRleHQoKTtcblxuXHRcdFx0XHR0b2tlbnMucHVzaChvcGVyYXRvci53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblxuXHRcdFx0XHRpID0gb3BlcmF0b3IuZW5kICsgMTtcblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQob3BlcmF0b3IpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgaWRlbnRpZmllcjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaElkZW50aWZpZXJBdChpKTtcblx0XHRcdGlmIChpZGVudGlmaWVyKSB7XG5cdFx0XHRcdGZsdXNoVGV4dCgpO1xuXG5cdFx0XHRcdHRva2Vucy5wdXNoKGlkZW50aWZpZXIud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cblx0XHRcdFx0aSA9IGlkZW50aWZpZXIuZW5kO1xuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChpZGVudGlmaWVyKTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHRleHRCdWZmZXIgKz0gY2hhcjtcblxuXHRcdFx0aWYgKGNoYXIgPT09ICdcXG4nKSB7XG5cdFx0XHRcdGxpbmUrKztcblx0XHRcdFx0Y29sdW1uID0gMDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbHVtbisrO1xuXHRcdFx0fVxuXG5cdFx0XHRpKys7XG5cdFx0fVxuXG5cdFx0Zmx1c2hUZXh0KCk7XG5cblx0XHRyZXR1cm4ge3Rva2VucywgbmV3SW5kZXg6IGksIGxpbmUsIGNvbHVtbn07XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFRva2VuU3RyZWFtIHtcblx0dG9rZW5zOiBUb2tlbltdO1xuXHRpbmRleDogbnVtYmVyID0gMDtcblxuXHRjb25zdHJ1Y3Rvcih0b2tlbnM6IFRva2VuW10pIHtcblx0XHR0aGlzLnRva2VucyA9IHRva2Vucztcblx0fVxuXG5cdHJld2luZCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pbmRleCA+IDApIHtcblx0XHRcdHRoaXMuaW5kZXgtLTtcblx0XHR9XG5cdH1cblxuXHRwZWVrKCk6IFRva2VuIHwgbnVsbCB7XG5cdFx0cmV0dXJuIHRoaXMudG9rZW5zW3RoaXMuaW5kZXhdIHx8IG51bGw7XG5cdH1cblxuXHRuZXh0KCk6IFRva2VuIHwgbnVsbCB7XG5cdFx0cmV0dXJuIHRoaXMudG9rZW5zW3RoaXMuaW5kZXgrK10gfHwgbnVsbDtcblx0fVxuXG5cdGhhc05leHQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGg7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtUb2tlbml6ZXJ9IGZyb20gXCIuLi90b2tlbml6ZXIvdG9rZW5pemVyXCI7XG5pbXBvcnQge3Rocm93RGVwZW5kZW5jeUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQgdHlwZSB7VG9rZW59IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5cbmV4cG9ydCBjbGFzcyBTb3VyY2Uge1xuXHRzdGF0aWMgTkVXTElORSA9ICdcXG4nO1xuXHRwdWJsaWMgcmVhZG9ubHkgdXJsOiBzdHJpbmc7XG5cdHByaXZhdGUgY29kZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGNvZGU6IHN0cmluZywgdXJsOiBzdHJpbmcgPSAnPGlubGluZT4nKSB7XG5cdFx0dGhpcy51cmwgPSB1cmw7XG5cdFx0dGhpcy5jb2RlID0gY29kZTtcblx0fVxuXG5cdGdldCBsZW5ndGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5jb2RlLmxlbmd0aDtcblx0fVxuXG5cdGdldFRva2VuaXplcigpOiBUb2tlbml6ZXIge1xuXHRcdHJldHVybiBuZXcgVG9rZW5pemVyKHRoaXMpO1xuXHR9XG5cblx0c2xpY2Uoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmNvZGUuc2xpY2Uoc3RhcnQsIGVuZCk7XG5cdH1cblxuXHRjaGFyQXQoaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuY29kZS5jaGFyQXQoaW5kZXgpO1xuXHR9XG5cblx0c3RhcnRzV2l0aCh0ZXh0OiBzdHJpbmcsIHBvc2l0aW9uPzogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29kZS5zdGFydHNXaXRoKHRleHQsIHBvc2l0aW9uKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgU291cmNlU3BhbiB7XG5cdHNvdXJjZTogU291cmNlO1xuXHRzdGFydDogbnVtYmVyO1xuXHRlbmQ6IG51bWJlcjtcblx0bGluZTogbnVtYmVyO1xuXHRjb2x1bW46IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcihzb3VyY2U6IFNvdXJjZSwgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpIHtcblx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0XHR0aGlzLnN0YXJ0ID0gc3RhcnQ7XG5cdFx0dGhpcy5lbmQgPSBlbmQ7XG5cblx0XHRjb25zdCBiZWZvcmUgPSBzb3VyY2Uuc2xpY2UoMCwgc3RhcnQpO1xuXHRcdGNvbnN0IGxpbmVzID0gYmVmb3JlLnNwbGl0KFNvdXJjZS5ORVdMSU5FKTtcblxuXHRcdHRoaXMubGluZSA9IGxpbmVzLmxlbmd0aDtcblx0XHR0aGlzLmNvbHVtbiA9IChsaW5lc1tsaW5lcy5sZW5ndGggLSAxXSB8fCAnJykubGVuZ3RoICsgMTtcblx0fVxuXG5cdHRleHQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2Uuc2xpY2UodGhpcy5zdGFydCwgdGhpcy5lbmQpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGFuRnJvbShzdGFydFRva2VuOiBUb2tlbiwgZW5kVG9rZW46IFRva2VuKTogU291cmNlU3BhbiB7XG5cdHJldHVybiBuZXcgU291cmNlU3BhbihzdGFydFRva2VuLnNvdXJjZSwgc3RhcnRUb2tlbi5zdGFydCwgZW5kVG9rZW4uZW5kKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoU291cmNlKHVybDogc3RyaW5nKTogUHJvbWlzZTxTb3VyY2U+IHtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXHRpZiAoIXJlc3BvbnNlLm9rKSB7XG5cdFx0dGhyb3dEZXBlbmRlbmN5RXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHt1cmx9YCk7XG5cdH1cblxuXHRyZXR1cm4gbmV3IFNvdXJjZShhd2FpdCByZXNwb25zZS50ZXh0KCksIHVybCk7XG59XG4iLAogICAgImltcG9ydCB7U291cmNlLCBTb3VyY2VTcGFufSBmcm9tIFwiLi9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5jbGFzcyBFcnJvclR5cGVzIHtcblx0c3RhdGljIFRZUEVfRVJST1I6IHN0cmluZyA9ICdUeXBlRXJyb3InO1xuXHRzdGF0aWMgVE9LRU5fRVJST1I6IHN0cmluZyA9ICdUb2tlbkVycm9yJztcblx0c3RhdGljIFBBUlNFUl9FUlJPUjogc3RyaW5nID0gJ1BhcnNlckVycm9yJztcblx0c3RhdGljIFJVTlRJTUVfRVJST1I6IHN0cmluZyA9ICdSdW50aW1lRXJyb3InO1xuXHRzdGF0aWMgSU5URVJOQUxfRVJST1I6IHN0cmluZyA9ICdJbnRlcm5hbEVycm9yJztcblx0c3RhdGljIE5BVElWRV9FUlJPUjogc3RyaW5nID0gJ05hdGl2ZUVycm9yJztcblx0c3RhdGljIERFUEVOREVOQ1lfRVJST1I6IHN0cmluZyA9ICdEZXBlbmRlbmN5RXJyb3InO1xufVxuXG5leHBvcnQgY2xhc3MgTHlyYUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXHRraW5kOiBzdHJpbmc7XG5cdHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbDtcblx0b3ZlcnJpZGUgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdGtpbmQ6IHN0cmluZyxcblx0XHRtZXNzYWdlOiBzdHJpbmcsXG5cdFx0c3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLFxuXHRcdGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuXHQpIHtcblx0XHRzdXBlcihtZXNzYWdlKTtcblx0XHR0aGlzLmtpbmQgPSBraW5kO1xuXHRcdHRoaXMuc3BhbiA9IHNwYW47XG5cdFx0dGhpcy5jYXVzZSA9IGNhdXNlO1xuXHR9XG5cblx0Zm9ybWF0KCk6IHN0cmluZyB7XG5cdFx0aWYgKHRoaXMuc3Bhbikge1xuXG5cdFx0XHRyZXR1cm4gYFxuWyR7dGhpcy5raW5kfV0gJHt0aGlzLm1lc3NhZ2V9XG4gIGF0ICR7dGhpcy5zcGFuLnNvdXJjZS51cmx9OiR7dGhpcy5zcGFuLmxpbmV9OiR7dGhpcy5zcGFuLmNvbHVtbn1cblxuJHt0aGlzLnNwYW4udGV4dCgpfVxuJHtcIiBcIi5yZXBlYXQodGhpcy5zcGFuLmNvbHVtbil9JHtcIl5cIi5yZXBlYXQodGhpcy5zcGFuLmVuZCAtIHRoaXMuc3Bhbi5zdGFydCl9XG5gO1xuXHRcdH1cblxuXHRcdHJldHVybiBgWyR7dGhpcy5raW5kfV0gJHt0aGlzLm1lc3NhZ2V9YDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYVRva2VuRXJyb3IgZXh0ZW5kcyBMeXJhRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRFcnJvclR5cGVzLlRPS0VOX0VSUk9SLFxuXHRcdFx0bWVzc2FnZSxcblx0XHRcdHNwYW4sXG5cdFx0XHRjYXVzZVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFUeXBlRXJyb3IgZXh0ZW5kcyBMeXJhRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRFcnJvclR5cGVzLlRZUEVfRVJST1IsXG5cdFx0XHRtZXNzYWdlLFxuXHRcdFx0c3Bhbixcblx0XHRcdGNhdXNlXG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYVBhcnNlckVycm9yIGV4dGVuZHMgTHlyYUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0RXJyb3JUeXBlcy5QQVJTRVJfRVJST1IsXG5cdFx0XHRtZXNzYWdlLFxuXHRcdFx0c3Bhbixcblx0XHRcdGNhdXNlXG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYVJ1bnRpbWVFcnJvciBleHRlbmRzIEx5cmFFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihcblx0XHRcdEVycm9yVHlwZXMuUlVOVElNRV9FUlJPUixcblx0XHRcdG1lc3NhZ2UsXG5cdFx0XHRzcGFuLFxuXHRcdFx0Y2F1c2Vcblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhTmF0aXZlRXJyb3IgZXh0ZW5kcyBMeXJhRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRFcnJvclR5cGVzLk5BVElWRV9FUlJPUixcblx0XHRcdG1lc3NhZ2UsXG5cdFx0XHRzcGFuLFxuXHRcdFx0Y2F1c2Vcblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhRGVwZW5kZW5jeUVycm9yIGV4dGVuZHMgTHlyYUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0RXJyb3JUeXBlcy5ERVBFTkRFTkNZX0VSUk9SLFxuXHRcdFx0bWVzc2FnZSxcblx0XHRcdHNwYW4sXG5cdFx0XHRjYXVzZVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93VG9rZW5FcnJvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKTogbmV2ZXIge1xuXHR0aHJvdyBuZXcgTHlyYVRva2VuRXJyb3IobWVzc2FnZSwgc3BhbiwgY2F1c2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dUeXBlRXJyb3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IG5ldmVyIHtcblx0dGhyb3cgbmV3IEx5cmFUeXBlRXJyb3IobWVzc2FnZSwgc3BhbiwgY2F1c2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQYXJzZXJFcnJvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKTogbmV2ZXIge1xuXHR0aHJvdyBuZXcgTHlyYVBhcnNlckVycm9yKG1lc3NhZ2UsIHNwYW4sIGNhdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UnVudGltZUVycm9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBuZXZlciB7XG5cdHRocm93IG5ldyBMeXJhUnVudGltZUVycm9yKG1lc3NhZ2UsIHNwYW4sIGNhdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93TmF0aXZlRXJyb3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IG5ldmVyIHtcblx0dGhyb3cgbmV3IEx5cmFOYXRpdmVFcnJvcihtZXNzYWdlLCBzcGFuLCBjYXVzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd0RlcGVuZGVuY3lFcnJvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKTogbmV2ZXIge1xuXHR0aHJvdyBuZXcgTHlyYURlcGVuZGVuY3lFcnJvcihtZXNzYWdlLCBzcGFuLCBjYXVzZSk7XG59XG5cbi8qKlxuICogQHRocm93cyB7RXJyb3J9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3cmFwSnNFcnJvcihlcnJvcjogRXJyb3IsIHNvdXJjZTogU291cmNlKTogTHlyYUVycm9yIHtcblx0aWYgKGVycm9yIGluc3RhbmNlb2YgTHlyYUVycm9yKSB7XG5cdFx0cmV0dXJuIGVycm9yO1xuXHR9XG5cblx0cmV0dXJuIG5ldyBMeXJhRXJyb3IoXG5cdFx0RXJyb3JUeXBlcy5JTlRFUk5BTF9FUlJPUixcblx0XHRlcnJvci5tZXNzYWdlIHx8IFN0cmluZyhlcnJvciksXG5cdFx0bmV3IFNvdXJjZVNwYW4oc291cmNlLCAwLCBzb3VyY2UubGVuZ3RoKVxuXHQpO1xufVxuIiwKICAgICJpbXBvcnQge0dSQU1NQVJ9IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5pbXBvcnQge1xuXHRBU1RDbGFzc05vZGUsXG5cdEFTVEZpZWxkTm9kZSxcblx0QVNUSW50ZXJmYWNlTm9kZSxcblx0QVNUTWV0aG9kTm9kZSxcblx0QVNUTm9kZSxcblx0QVNUUGFyYW1ldGVyTm9kZSxcblx0QVNUVHlwZU5vZGVcbn0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHt0aHJvd1J1bnRpbWVFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQge1xuXHRwYXJlbnQ6IEVudmlyb25tZW50IHwgbnVsbDtcblx0dmFsdWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH07XG5cblx0Y29uc3RydWN0b3IocGFyZW50OiBFbnZpcm9ubWVudCB8IG51bGwgPSBudWxsKSB7XG5cdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cdFx0dGhpcy52YWx1ZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHR9XG5cblx0ZGVmaW5lKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMudmFsdWVzW25hbWVdID0gdmFsdWU7XG5cdH1cblxuXHRnZXQobmFtZTogc3RyaW5nKTogYW55IHtcblx0XHRpZiAobmFtZSBpbiB0aGlzLnZhbHVlcykge1xuXHRcdFx0cmV0dXJuIHRoaXMudmFsdWVzW25hbWVdO1xuXHRcdH1cblx0XHRpZiAodGhpcy5wYXJlbnQpIHtcblx0XHRcdHJldHVybiB0aGlzLnBhcmVudC5nZXQobmFtZSk7XG5cdFx0fVxuXHRcdHRocm93UnVudGltZUVycm9yKGBVbmRlZmluZWQgdmFyaWFibGUgJHtuYW1lfWApO1xuXHR9XG5cblx0c2V0KG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmIChuYW1lIGluIHRoaXMudmFsdWVzKSB7XG5cdFx0XHR0aGlzLnZhbHVlc1tuYW1lXSA9IHZhbHVlO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAodGhpcy5wYXJlbnQpIHtcblx0XHRcdHRoaXMucGFyZW50LnNldChuYW1lLCB2YWx1ZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRocm93UnVudGltZUVycm9yKGBVbmRlZmluZWQgdmFyaWFibGUgJHtuYW1lfWApO1xuXHR9XG5cblx0aGFzKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlc1tuYW1lXSB8fCAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuaGFzKG5hbWUpKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgSW5zdGFuY2Uge1xuXHRfX2NsYXNzRGVmOiBDbGFzc0RlZmluaXRpb247XG5cdF9faW5zdGFuY2VGaWVsZHM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfTtcblx0X19zdGF0aWNGaWVsZHM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfTtcblx0X19uYXRpdmVJbnN0YW5jZTogYW55IHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IoY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbikge1xuXHRcdHRoaXMuX19jbGFzc0RlZiA9IGNsYXNzRGVmO1xuXHRcdHRoaXMuX19pbnN0YW5jZUZpZWxkcyA9IHt9O1xuXHRcdHRoaXMuX19zdGF0aWNGaWVsZHMgPSB7fTtcblx0XHR0aGlzLl9fbmF0aXZlSW5zdGFuY2UgPSBudWxsO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBNb2RpZmllcnMge1xuXHRvcGVuOiBib29sZWFuID0gZmFsc2U7XG5cdHB1YmxpYzogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlOiBib29sZWFuID0gZmFsc2U7XG5cdHN0YXRpYzogYm9vbGVhbiA9IGZhbHNlO1xuXHRyZWFkb25seTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3t9fSBhdHRyaWJ1dGVzXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihhdHRyaWJ1dGVzOiB7IFtpbmRleDogc3RyaW5nXTogYm9vbGVhbiB9ID0ge30pIHtcblx0XHRmb3IgKGxldCBhdHRyaWJ1dGUgb2YgT2JqZWN0LmtleXMoYXR0cmlidXRlcykpIHtcblx0XHRcdGlmICh0aGlzLmhhc093blByb3BlcnR5KGF0dHJpYnV0ZSkpIHtcblx0XHRcdFx0Y29uc3QgbW9kaWZpZXJzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB0aGlzO1xuXHRcdFx0XHRtb2RpZmllcnNbYXR0cmlidXRlXSA9IGF0dHJpYnV0ZXNbYXR0cmlidXRlXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1cGVyQ2xhc3Mge1xuXHR0eXBlOiBzdHJpbmc7XG5cdG5hbWU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcih0eXBlOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgUmV0dXJuVmFsdWUge1xuXHR2YWx1ZTogYW55O1xuXG5cdGNvbnN0cnVjdG9yKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIENsYXNzRmllbGREZWZpbml0aW9uIHtcblx0bmFtZTogc3RyaW5nO1xuXHR0eXBlOiBzdHJpbmcgfCBudWxsO1xuXHRtb2RpZmllcnM6IE1vZGlmaWVycztcblx0aW5pdGlhbGl6ZXI6IEFTVE5vZGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGU6IHN0cmluZyB8IG51bGwsIG1vZGlmaWVyczogTW9kaWZpZXJzLCBpbml0aWFsaXplcjogQVNUTm9kZSB8IG51bGwgPSBudWxsKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuXHRcdHRoaXMuaW5pdGlhbGl6ZXIgPSBpbml0aWFsaXplcjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xhc3NNZXRob2REZWZpbml0aW9uIHtcblx0bmFtZTogc3RyaW5nO1xuXHRwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW107XG5cdHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbDtcblx0bW9kaWZpZXJzOiBNb2RpZmllcnM7XG5cdGNoaWxkcmVuOiBBU1ROb2RlW107XG5cdGlzQ29uc3RydWN0b3I6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sIHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbCwgbW9kaWZpZXJzOiBNb2RpZmllcnMsIGNoaWxkcmVuOiBBU1ROb2RlW10pIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG5cdFx0dGhpcy5yZXR1cm5UeXBlID0gcmV0dXJuVHlwZTtcblx0XHR0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcblx0XHR0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG5cdFx0dGhpcy5pc0NvbnN0cnVjdG9yID0gbmFtZSA9PT0gR1JBTU1BUi5DT05TVFJVQ1RPUjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xhc3NEZWZpbml0aW9uIHtcblx0bm9kZTogQVNUQ2xhc3NOb2RlO1xuXHRuYW1lOiBzdHJpbmc7XG5cdHN1cGVyQ2xhc3M6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRpbnN0YW5jZUZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXTtcblx0aW5zdGFuY2VNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH07XG5cdHN0YXRpY0ZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXTtcblx0c3RhdGljTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9O1xuXHRjb25zdHJ1Y3Rvck1ldGhvZDogQ2xhc3NNZXRob2REZWZpbml0aW9uIHwgbnVsbCA9IG51bGw7XG5cdG5hdGl2ZUluc3RhbmNlOiBhbnkgPSBudWxsO1xuXHRpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRjbGFzc05vZGU6IEFTVENsYXNzTm9kZSxcblx0XHRzdXBlckNsYXNzOiBzdHJpbmcgfCBudWxsLFxuXHRcdG5hbWU6IHN0cmluZyxcblx0XHRpbnN0YW5jZUZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXSxcblx0XHRpbnN0YW5jZU1ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfSxcblx0XHRzdGF0aWNGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW10sXG5cdFx0c3RhdGljTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9LFxuXHRcdGNvbnN0cnVjdG9yTWV0aG9kOiBDbGFzc01ldGhvZERlZmluaXRpb24gfCBudWxsID0gbnVsbFxuXHQpIHtcblx0XHR0aGlzLm5vZGUgPSBjbGFzc05vZGU7XG5cdFx0dGhpcy5zdXBlckNsYXNzID0gc3VwZXJDbGFzcztcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuaW5zdGFuY2VGaWVsZHMgPSBpbnN0YW5jZUZpZWxkcztcblx0XHR0aGlzLmluc3RhbmNlTWV0aG9kcyA9IGluc3RhbmNlTWV0aG9kcztcblx0XHR0aGlzLnN0YXRpY0ZpZWxkcyA9IHN0YXRpY0ZpZWxkcztcblx0XHR0aGlzLnN0YXRpY01ldGhvZHMgPSBzdGF0aWNNZXRob2RzO1xuXHRcdHRoaXMuY29uc3RydWN0b3JNZXRob2QgPSBjb25zdHJ1Y3Rvck1ldGhvZDtcblx0XHR0aGlzLmlzT3BlbiA9IGNsYXNzTm9kZS5tb2RpZmllcnMub3Blbjtcblx0fVxuXG5cdHN0YXRpYyBjb25zdHJ1Y3RGcm9tQVNUKG5vZGU6IEFTVENsYXNzTm9kZSk6IENsYXNzRGVmaW5pdGlvbiB7XG5cdFx0Y29uc3QgaW5zdGFuY2VGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW10gPSBbXTtcblx0XHRjb25zdCBpbnN0YW5jZU1ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfSA9IHt9O1xuXHRcdGNvbnN0IHN0YXRpY0ZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXSA9IFtdO1xuXHRcdGNvbnN0IHN0YXRpY01ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfSA9IHt9O1xuXHRcdGxldCBjb25zdHJ1Y3Rvck1ldGhvZDogQ2xhc3NNZXRob2REZWZpbml0aW9uIHwgbnVsbCA9IG51bGw7XG5cblx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChjaGlsZCBpbnN0YW5jZW9mIEFTVEZpZWxkTm9kZSkge1xuXHRcdFx0XHRjb25zdCBmaWVsZCA9IG5ldyBDbGFzc0ZpZWxkRGVmaW5pdGlvbihcblx0XHRcdFx0XHRjaGlsZC5uYW1lLFxuXHRcdFx0XHRcdGNoaWxkLmZpZWxkVHlwZVxuXHRcdFx0XHRcdFx0PyBjaGlsZC5maWVsZFR5cGUubmFtZVxuXHRcdFx0XHRcdFx0OiBudWxsLFxuXHRcdFx0XHRcdGNoaWxkLm1vZGlmaWVycyxcblx0XHRcdFx0XHRjaGlsZC5pbml0XG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0aWYgKGZpZWxkLm1vZGlmaWVycy5zdGF0aWMpIHtcblx0XHRcdFx0XHRzdGF0aWNGaWVsZHMucHVzaChmaWVsZCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aW5zdGFuY2VGaWVsZHMucHVzaChmaWVsZCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoY2hpbGQgaW5zdGFuY2VvZiBBU1RNZXRob2ROb2RlKSB7XG5cdFx0XHRcdGNvbnN0IG1ldGhvZCA9IG5ldyBDbGFzc01ldGhvZERlZmluaXRpb24oXG5cdFx0XHRcdFx0Y2hpbGQubmFtZSxcblx0XHRcdFx0XHRjaGlsZC5wYXJhbWV0ZXJzLFxuXHRcdFx0XHRcdGNoaWxkLnJldHVyblR5cGUsXG5cdFx0XHRcdFx0Y2hpbGQubW9kaWZpZXJzLFxuXHRcdFx0XHRcdGNoaWxkLmNoaWxkcmVuXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGlmIChtZXRob2QuaXNDb25zdHJ1Y3Rvcikge1xuXHRcdFx0XHRcdGNvbnN0cnVjdG9yTWV0aG9kID0gbWV0aG9kO1xuXHRcdFx0XHR9IGVsc2UgaWYgKG1ldGhvZC5tb2RpZmllcnMuc3RhdGljKSB7XG5cdFx0XHRcdFx0c3RhdGljTWV0aG9kc1ttZXRob2QubmFtZV0gPSBtZXRob2Q7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aW5zdGFuY2VNZXRob2RzW21ldGhvZC5uYW1lXSA9IG1ldGhvZDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVuaGFuZGxlZCBub2RlICR7Y2hpbGQudHlwZX0uYCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBDbGFzc0RlZmluaXRpb24oXG5cdFx0XHRub2RlLFxuXHRcdFx0bm9kZS5zdXBlckNsYXNzPy5uYW1lIHx8IG51bGwsXG5cdFx0XHRub2RlLm5hbWUsXG5cdFx0XHRpbnN0YW5jZUZpZWxkcyxcblx0XHRcdGluc3RhbmNlTWV0aG9kcyxcblx0XHRcdHN0YXRpY0ZpZWxkcyxcblx0XHRcdHN0YXRpY01ldGhvZHMsXG5cdFx0XHRjb25zdHJ1Y3Rvck1ldGhvZFxuXHRcdCk7XG5cdH1cblxuXHRmaW5kTWV0aG9kKG5hbWU6IHN0cmluZyk6IEFTVE1ldGhvZE5vZGUge1xuXHRcdGNvbnN0IG5vZGUgPSB0aGlzLm5vZGVcblx0XHQgICAgICAgICAgICAgICAgIC5jaGlsZHJlblxuXHRcdCAgICAgICAgICAgICAgICAgLmZpbmQobm9kZSA9PiBub2RlLm5hbWUgPT09IG5hbWUpO1xuXG5cdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RNZXRob2ROb2RlKSB7XG5cdFx0XHRyZXR1cm4gbm9kZTtcblx0XHR9XG5cblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgTWV0aG9kICR7bmFtZX0gbm90IGZvdW5kIGluIGNsYXNzICR7dGhpcy5uYW1lfS5gKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgSW50ZXJmYWNlRGVmaW5pdGlvbiB7XG5cdG5vZGU6IEFTVEludGVyZmFjZU5vZGU7XG5cdG5hbWU6IHN0cmluZztcblx0c3RhdGljRmllbGRzOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbltdO1xuXHRpbnN0YW5jZU1ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRpbnRlcmZhY2VOb2RlOiBBU1RJbnRlcmZhY2VOb2RlLFxuXHRcdG5hbWU6IHN0cmluZyxcblx0XHRzdGF0aWNGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW10sXG5cdFx0aW5zdGFuY2VNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH0sXG5cdCkge1xuXHRcdHRoaXMubm9kZSA9IGludGVyZmFjZU5vZGU7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnN0YXRpY0ZpZWxkcyA9IHN0YXRpY0ZpZWxkcztcblx0XHR0aGlzLmluc3RhbmNlTWV0aG9kcyA9IGluc3RhbmNlTWV0aG9kcztcblx0fVxuXG5cdHN0YXRpYyBjb25zdHJ1Y3RGcm9tQVNUKG5vZGU6IEFTVEludGVyZmFjZU5vZGUpOiBJbnRlcmZhY2VEZWZpbml0aW9uIHtcblx0XHRjb25zdCBzdGF0aWNGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW10gPSBbXTtcblx0XHRjb25zdCBpbnN0YW5jZU1ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfSA9IHt9O1xuXG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAoY2hpbGQgaW5zdGFuY2VvZiBBU1RGaWVsZE5vZGUpIHtcblx0XHRcdFx0Y29uc3QgZmllbGQgPSBuZXcgQ2xhc3NGaWVsZERlZmluaXRpb24oXG5cdFx0XHRcdFx0Y2hpbGQubmFtZSxcblx0XHRcdFx0XHRjaGlsZC5maWVsZFR5cGVcblx0XHRcdFx0XHRcdD8gY2hpbGQuZmllbGRUeXBlLm5hbWVcblx0XHRcdFx0XHRcdDogbnVsbCxcblx0XHRcdFx0XHRjaGlsZC5tb2RpZmllcnMsXG5cdFx0XHRcdFx0Y2hpbGQuaW5pdCA/PyBudWxsXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0c3RhdGljRmllbGRzLnB1c2goZmllbGQpO1xuXHRcdFx0fSBlbHNlIGlmIChjaGlsZCBpbnN0YW5jZW9mIEFTVE1ldGhvZE5vZGUpIHtcblx0XHRcdFx0Y29uc3QgbWV0aG9kID0gbmV3IENsYXNzTWV0aG9kRGVmaW5pdGlvbihcblx0XHRcdFx0XHRjaGlsZC5uYW1lLFxuXHRcdFx0XHRcdGNoaWxkLnBhcmFtZXRlcnMsXG5cdFx0XHRcdFx0Y2hpbGQucmV0dXJuVHlwZSxcblx0XHRcdFx0XHRjaGlsZC5tb2RpZmllcnMsXG5cdFx0XHRcdFx0Y2hpbGQuY2hpbGRyZW5cblx0XHRcdFx0KTtcblxuXHRcdFx0XHRpbnN0YW5jZU1ldGhvZHNbbWV0aG9kLm5hbWVdID0gbWV0aG9kO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVuaGFuZGxlZCBub2RlICR7Y2hpbGQudHlwZX0uYCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBJbnRlcmZhY2VEZWZpbml0aW9uKFxuXHRcdFx0bm9kZSxcblx0XHRcdG5vZGUubmFtZSxcblx0XHRcdHN0YXRpY0ZpZWxkcyxcblx0XHRcdGluc3RhbmNlTWV0aG9kc1xuXHRcdCk7XG5cdH1cbn1cblxuIiwKICAgICJpbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4vcGFyc2VyXCI7XG5pbXBvcnQge0dSQU1NQVIsIFRva2VuLCBUb2tlblR5cGUsIFRZUEVfRU5VTX0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcbmltcG9ydCB7TW9kaWZpZXJzLCBTdXBlckNsYXNzfSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtcblx0QVNUQW5ub3RhdGlvbk5vZGUsXG5cdEFTVEFycmF5Tm9kZSxcblx0QVNUQXNzaWdubWVudE5vZGUsXG5cdEFTVEJpbmFyeU5vZGUsXG5cdEFTVENhbGxOb2RlLFxuXHRBU1RDbGFzc05vZGUsXG5cdEFTVEVsc2VOb2RlLFxuXHRBU1RFeHByZXNzaW9uTm9kZSxcblx0QVNURmllbGROb2RlLFxuXHRBU1RGb3JlYWNoTm9kZSxcblx0QVNUSWZOb2RlLFxuXHRBU1RJbXBvcnROb2RlLFxuXHRBU1RJbmRleE5vZGUsXG5cdEFTVEludGVyZmFjZU5vZGUsXG5cdEFTVExhbWJkYU5vZGUsXG5cdEFTVE1hdGNoQ2FzZU5vZGUsXG5cdEFTVE1hdGNoTm9kZSxcblx0QVNUTWVtYmVyTm9kZSxcblx0QVNUTWV0aG9kTm9kZSxcblx0QVNUTmV3Tm9kZSxcblx0QVNUTm9kZSxcblx0QVNUTm9kZVR5cGUsXG5cdEFTVFBhcmFtZXRlck5vZGUsXG5cdEFTVFJldHVybk5vZGUsXG5cdEFTVFRoZW5Ob2RlLFxuXHRBU1RUeXBlTm9kZSxcblx0QVNUVW5hcnlOb2RlLFxuXHRBU1RWYXJpYWJsZU5vZGUsXG5cdEFTVFZEb21Ob2RlLFxuXHRBU1RWRG9tVGV4dE5vZGVcbn0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHt0aHJvd1BhcnNlckVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQge3NwYW5Gcm9tfSBmcm9tIFwiLi9wYXJzZXJfc291cmNlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNaXhlZFR5cGUoKTogQVNUVHlwZU5vZGUge1xuXHRyZXR1cm4gbmV3IEFTVFR5cGVOb2RlKEFTVFR5cGVOb2RlLktJTkRfU0lNUExFLCBUWVBFX0VOVU0uTUlYRUQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUeXBlKHBhcnNlcjogUGFyc2VyKTogQVNUVHlwZU5vZGUge1xuXHRsZXQgdHlwZTtcblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKSB7XG5cdFx0dHlwZSA9IHBhcnNlTGFtYmRhVHlwZShwYXJzZXIpO1xuXHR9IGVsc2Uge1xuXHRcdHR5cGUgPSBwYXJzZVNpbXBsZU9yR2VuZXJpY1R5cGUocGFyc2VyKTtcblx0fVxuXG5cdGlmIChwYXJzZXIuY29uc3VtZUlmT3BlcmF0b3IoR1JBTU1BUi5RVUVTVElPTl9NQVJLKSkge1xuXHRcdHR5cGUubnVsbGFibGUgPSB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVR5cGVQYXJhbWV0ZXJzKHBhcnNlcjogUGFyc2VyKTogc3RyaW5nW10ge1xuXHRjb25zdCBwYXJhbWV0ZXJzID0gW107XG5cblx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuTEVTU19USEFOKTtcblxuXHRkbyB7XG5cdFx0Y29uc3QgbmFtZSA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCkudmFsdWU7XG5cdFx0cGFyYW1ldGVycy5wdXNoKG5hbWUpO1xuXG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQ09NTUEpIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRwYXJzZXIubmV4dCgpO1xuXHR9IHdoaWxlICh0cnVlKTtcblxuXHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5HUkVBVEVSX1RIQU4pO1xuXG5cdHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTaW1wbGVPckdlbmVyaWNUeXBlKHBhcnNlcjogUGFyc2VyKTogQVNUVHlwZU5vZGUge1xuXHRjb25zdCBuYW1lVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXHRjb25zdCBub2RlID0gbmV3IEFTVFR5cGVOb2RlKEFTVFR5cGVOb2RlLktJTkRfU0lNUExFLCBuYW1lVG9rZW4udmFsdWUpO1xuXG5cdGlmIChwYXJzZXIuY29uc3VtZUlmT3BlcmF0b3IoR1JBTU1BUi5MRVNTX1RIQU4pKSB7XG5cblx0XHRub2RlLmtpbmQgPSBBU1RUeXBlTm9kZS5LSU5EX0dFTkVSSUM7XG5cblx0XHRkbyB7XG5cdFx0XHRub2RlLnR5cGVBcmd1bWVudHMucHVzaChwYXJzZVR5cGUocGFyc2VyKSk7XG5cdFx0fSB3aGlsZSAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKTtcblxuXHRcdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkdSRUFURVJfVEhBTik7XG5cdH1cblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTGFtYmRhVHlwZShwYXJzZXI6IFBhcnNlcik6IEFTVFR5cGVOb2RlIHtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RUeXBlTm9kZShBU1RUeXBlTm9kZS5LSU5EX0xBTUJEQSwgJ2xhbWJkYScpO1xuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pO1xuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKSB7XG5cdFx0ZG8ge1xuXHRcdFx0bm9kZS5wYXJhbWV0ZXJUeXBlcy5wdXNoKHBhcnNlVHlwZShwYXJzZXIpKTtcblx0XHR9IHdoaWxlIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5BUlJPVyk7XG5cblx0bm9kZS5yZXR1cm5UeXBlID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVByb2dyYW0ocGFyc2VyOiBQYXJzZXIpOiBBU1ROb2RlIHtcblx0Y29uc3QgY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdO1xuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS50eXBlICE9PSBUb2tlblR5cGUuRU9GKSB7XG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLkNPTU1FTlQpIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IG5vZGU6IEFTVE5vZGUgfCBudWxsID0gcGFyc2VTdGF0ZW1lbnQocGFyc2VyKTtcblx0XHRcdGlmIChub2RlKSB7XG5cdFx0XHRcdGNoaWxkcmVuLnB1c2gobm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5QUk9HUkFNTSwgY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTdGF0ZW1lbnQocGFyc2VyOiBQYXJzZXIpOiBBU1ROb2RlIHwgbnVsbCB7XG5cdGlmIChwYXJzZXIuY29uc3VtZUlmQ29tbWVudCgpKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRzd2l0Y2ggKHBhcnNlci5wZWVrKCkudmFsdWUpIHtcblx0XHRjYXNlIEdSQU1NQVIuSU1QT1JUOiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VJbXBvcnQocGFyc2VyKTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLk9QRU46XG5cdFx0Y2FzZSBHUkFNTUFSLkNMQVNTOiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VDbGFzc0RlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5JTlRFUkZBQ0U6IHtcblx0XHRcdHJldHVybiBwYXJzZUludGVyZmFjZURlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5SRVRVUk46IHtcblx0XHRcdHJldHVybiBwYXJzZVJldHVyblN0YXRlbWVudChwYXJzZXIpO1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTEVUOiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VWYXJpYWJsZURlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5JRjoge1xuXHRcdFx0cmV0dXJuIHBhcnNlSWZEZWNsYXJhdGlvbihwYXJzZXIpO1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTUFUQ0g6IHtcblx0XHRcdHJldHVybiBwYXJzZU1hdGNoRGVjbGFyYXRpb24ocGFyc2VyKTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkZPUkVBQ0g6IHtcblx0XHRcdHJldHVybiBwYXJzZUZvcmVhY2hEZWNsYXJhdGlvbihwYXJzZXIpO1xuXHRcdH1cblx0XHRkZWZhdWx0OiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VFeHByZXNzaW9uU3RhdGVtZW50KHBhcnNlcik7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJldHVyblN0YXRlbWVudChwYXJzZXI6IFBhcnNlcik6IEFTVFJldHVybk5vZGUge1xuXHRwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLlJFVFVSTik7XG5cblx0bGV0IGFyZ3VtZW50ID0gbnVsbDtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuU0VNSUNPTE9OKSB7XG5cdFx0YXJndW1lbnQgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlNFTUlDT0xPTik7XG5cblx0cmV0dXJuIG5ldyBBU1RSZXR1cm5Ob2RlKGFyZ3VtZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSW1wb3J0KHBhcnNlcjogUGFyc2VyKTogQVNUSW1wb3J0Tm9kZSB7XG5cdHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuSU1QT1JUKTtcblxuXHRsZXQgbmFtZXMgPSBbXTtcblx0bGV0IGZyb20gPSBudWxsO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5CUkFDRV9PUEVOKSB7XG5cdFx0bmFtZXMgPSBwYXJzZUltcG9ydExpc3QocGFyc2VyKTtcblx0XHRwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLkZST00pO1xuXHRcdGZyb20gPSBwYXJzZXIuZXhwZWN0U3RyaW5nKCkudmFsdWU7XG5cdH0gZWxzZSB7XG5cdFx0bmFtZXMucHVzaChwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpLnZhbHVlKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlNFTUlDT0xPTik7XG5cblx0cmV0dXJuIG5ldyBBU1RJbXBvcnROb2RlKG5hbWVzLCBmcm9tKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSW1wb3J0TGlzdChwYXJzZXI6IFBhcnNlcik6IHN0cmluZ1tdIHtcblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfT1BFTik7XG5cblx0Y29uc3QgbmFtZXM6IHN0cmluZ1tdID0gW107XG5cblx0d2hpbGUgKHRydWUpIHtcblx0XHRjb25zdCBuYW1lVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXG5cdFx0bmFtZXMucHVzaChuYW1lVG9rZW4udmFsdWUpO1xuXG5cdFx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0YnJlYWs7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9DTE9TRSk7XG5cblx0cmV0dXJuIG5hbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDbGFzc0RlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUQ2xhc3NOb2RlIHtcblx0Y29uc3QgYW5ub3RhdGlvbnMgPSBwYXJzZUFubm90YXRpb25zKHBhcnNlcik7XG5cdGNvbnN0IG1vZGlmaWVycyA9IHBhcnNlTW9kaWZpZXJzKHBhcnNlciwgW0dSQU1NQVIuT1BFTl0pO1xuXG5cdGNvbnN0IGNsYXNzVG9rZW4gPSBwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLkNMQVNTKTtcblx0Y29uc3QgbmFtZVRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblxuXHRsZXQgdHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdID0gW107XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkxFU1NfVEhBTikge1xuXHRcdHR5cGVQYXJhbWV0ZXJzID0gcGFyc2VUeXBlUGFyYW1ldGVycyhwYXJzZXIpO1xuXHR9XG5cblx0bGV0IHN1cGVyQ2xhc3MgPSBudWxsO1xuXHRpZiAocGFyc2VyLmNvbnN1bWVJZktleXdvcmQoR1JBTU1BUi5FWFRFTkRTKSkge1xuXHRcdHN1cGVyQ2xhc3MgPSBuZXcgU3VwZXJDbGFzcyhcblx0XHRcdEFTVE5vZGVUeXBlLklERU5USUZJRVIsXG5cdFx0XHRwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpLnZhbHVlXG5cdFx0KTtcblx0fVxuXG5cdGxldCBpbXBsZW1lbnRzSW50ZXJmYWNlcyA9IFtdO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5JTVBMRU1FTlRTKSB7XG5cdFx0cGFyc2VyLm5leHQoKTtcblxuXHRcdGRvIHtcblx0XHRcdGNvbnN0IGludGVyZmFjZVR5cGUgPSBwYXJzZVR5cGUocGFyc2VyKTtcblx0XHRcdGltcGxlbWVudHNJbnRlcmZhY2VzLnB1c2goaW50ZXJmYWNlVHlwZSk7XG5cdFx0fSB3aGlsZSAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX09QRU4pO1xuXG5cdGNvbnN0IGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXTtcblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQlJBQ0VfQ0xPU0UpIHtcblx0XHRpZiAocGFyc2VyLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuQ09NTUVOVCkge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IG1lbWJlcjogQVNUTm9kZSB8IG51bGwgPSBwYXJzZUNsYXNzTWVtYmVyKHBhcnNlcik7XG5cdFx0aWYgKG1lbWJlciA9PT0gbnVsbCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGNoaWxkcmVuLnB1c2gobWVtYmVyKTtcblx0fVxuXG5cdGNvbnN0IGJyYWNlQ2xvc2VUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX0NMT1NFKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVENsYXNzTm9kZShcblx0XHRuYW1lVG9rZW4udmFsdWUsXG5cdFx0YW5ub3RhdGlvbnMsXG5cdFx0bW9kaWZpZXJzLFxuXHRcdHR5cGVQYXJhbWV0ZXJzLFxuXHRcdGltcGxlbWVudHNJbnRlcmZhY2VzLFxuXHRcdHN1cGVyQ2xhc3MsXG5cdFx0Y2hpbGRyZW5cblx0KTtcblxuXHRub2RlLnNwYW4gPSBzcGFuRnJvbShjbGFzc1Rva2VuLCBicmFjZUNsb3NlVG9rZW4pO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSW50ZXJmYWNlRGVjbGFyYXRpb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RJbnRlcmZhY2VOb2RlIHtcblx0Y29uc3QgYW5ub3RhdGlvbnMgPSBwYXJzZUFubm90YXRpb25zKHBhcnNlcik7XG5cdGNvbnN0IG1vZGlmaWVycyA9IHBhcnNlTW9kaWZpZXJzKHBhcnNlciwgW10pOyAvLyBpbnRlcmZhY2VzIHNpbmQgaW1wbGl6aXQgcHVibGljXG5cblx0Y29uc3QgaW50ZXJmYWNlVG9rZW4gPSBwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLklOVEVSRkFDRSk7XG5cdGNvbnN0IG5hbWVUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cblx0bGV0IHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5MRVNTX1RIQU4pIHtcblx0XHR0eXBlUGFyYW1ldGVycyA9IHBhcnNlVHlwZVBhcmFtZXRlcnMocGFyc2VyKTtcblx0fVxuXG5cdGxldCBleHRlbmRzSW50ZXJmYWNlcyA9IFtdO1xuXHRpZiAocGFyc2VyLmNvbnN1bWVJZktleXdvcmQoR1JBTU1BUi5FWFRFTkRTKSkge1xuXHRcdGRvIHtcblx0XHRcdGV4dGVuZHNJbnRlcmZhY2VzLnB1c2gocGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKS52YWx1ZSk7XG5cdFx0fSB3aGlsZSAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX09QRU4pO1xuXG5cdGNvbnN0IGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXTtcblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQlJBQ0VfQ0xPU0UpIHtcblx0XHRpZiAocGFyc2VyLmNvbnN1bWVJZkNvbW1lbnQoKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbWVtYmVyID0gcGFyc2VDbGFzc01lbWJlcihwYXJzZXIpO1xuXHRcdGlmIChtZW1iZXIgPT09IG51bGwpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChtZW1iZXIgaW5zdGFuY2VvZiBBU1RGaWVsZE5vZGUgJiYgIW1lbWJlci5tb2RpZmllcnMuc3RhdGljKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKCdJbnRlcmZhY2UgZmllbGRzIG11c3QgYmUgc3RhdGljLicpO1xuXHRcdH1cblxuXHRcdGlmIChtZW1iZXIgaW5zdGFuY2VvZiBBU1RNZXRob2ROb2RlICYmIG1lbWJlci5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKCdJbnRlcmZhY2UgbWV0aG9kcyBtdXN0IG5vdCBoYXZlIGEgYm9keS4nKTtcblx0XHR9XG5cblx0XHRjaGlsZHJlbi5wdXNoKG1lbWJlcik7XG5cdH1cblxuXHRjb25zdCBicmFjZUNsb3NlVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9DTE9TRSk7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RJbnRlcmZhY2VOb2RlKFxuXHRcdG5hbWVUb2tlbi52YWx1ZSxcblx0XHRhbm5vdGF0aW9ucyxcblx0XHRtb2RpZmllcnMsXG5cdFx0dHlwZVBhcmFtZXRlcnMsXG5cdFx0ZXh0ZW5kc0ludGVyZmFjZXMsXG5cdFx0Y2hpbGRyZW5cblx0KTtcblxuXHRub2RlLnNwYW4gPSBzcGFuRnJvbShpbnRlcmZhY2VUb2tlbiwgYnJhY2VDbG9zZVRva2VuKTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUFubm90YXRpb25zKHBhcnNlcjogUGFyc2VyKTogQVNUQW5ub3RhdGlvbk5vZGVbXSB7XG5cdGNvbnN0IGFubm90YXRpb25zID0gW107XG5cblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLkFOTk9UQVRJT04pIHtcblx0XHRhbm5vdGF0aW9ucy5wdXNoKHBhcnNlQW5ub3RhdGlvbihwYXJzZXIpKTtcblx0fVxuXG5cdHJldHVybiBhbm5vdGF0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQW5ub3RhdGlvbihwYXJzZXI6IFBhcnNlcik6IEFTVEFubm90YXRpb25Ob2RlIHtcblx0Y29uc3QgdG9rZW4gPSBwYXJzZXIuZXhwZWN0QW5ub3RhdGlvbigpO1xuXHRjb25zdCBub2RlID0gbmV3IEFTVEFubm90YXRpb25Ob2RlKHRva2VuLnZhbHVlKTtcblxuXHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTikpIHtcblx0XHR3aGlsZSAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSkge1xuXHRcdFx0Y29uc3Qga2V5ID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKS52YWx1ZTtcblx0XHRcdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkFTU0lHTik7XG5cblx0XHRcdGNvbnN0IHZhbHVlID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdFx0XHRub2RlLnByb3BlcnRpZXMuc2V0KGtleSwgdmFsdWUpO1xuXG5cdFx0XHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5DT01NQSkge1xuXHRcdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKTtcblx0fVxuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VNb2RpZmllcnMocGFyc2VyOiBQYXJzZXIsIGFsbG93ZWQ6IHN0cmluZ1tdKTogTW9kaWZpZXJzIHtcblx0Y29uc3QgbW9kaWZpZXJzOiB7IFtpbmRleDogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XG5cblx0YWxsb3dlZC5mb3JFYWNoKG1vZGlmaWVyID0+IG1vZGlmaWVyc1ttb2RpZmllcl0gPSBmYWxzZSk7XG5cblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLktFWVdPUkQgJiYgYWxsb3dlZC5pbmNsdWRlcyhwYXJzZXIucGVlaygpLnZhbHVlKSkge1xuXHRcdGNvbnN0IG1vZGlmaWVyID0gcGFyc2VyLm5leHQoKS52YWx1ZTtcblxuXHRcdGlmIChtb2RpZmllcnNbbW9kaWZpZXJdKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKGBEdXBsaWNhdGUgbW9kaWZpZXI6ICR7bW9kaWZpZXJ9YCk7XG5cdFx0fVxuXG5cdFx0bW9kaWZpZXJzW21vZGlmaWVyXSA9IHRydWU7XG5cdH1cblxuXHRyZXR1cm4gbmV3IE1vZGlmaWVycyhtb2RpZmllcnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXJzKHBhcnNlcjogUGFyc2VyKTogQVNUUGFyYW1ldGVyTm9kZVtdIHtcblx0Y29uc3QgcGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdID0gW107XG5cblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpIHtcblx0XHRyZXR1cm4gcGFyYW1ldGVycztcblx0fVxuXG5cdGRvIHtcblx0XHRjb25zdCBuYW1lVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXHRcdGxldCB0eXBlID0gbnVsbDtcblx0XHRsZXQgZGVmYXVsdFZhbHVlID0gbnVsbDtcblxuXHRcdGxldCB0eXBlVG9rZW4gPSBudWxsO1xuXHRcdGxldCBkZWZhdWx0VmFsdWVUb2tlbiA9IG51bGw7XG5cblx0XHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5DT0xPTikge1xuXHRcdFx0dHlwZVRva2VuID0gcGFyc2VyLm5leHQoKTtcblx0XHRcdHR5cGUgPSBwYXJzZVR5cGUocGFyc2VyKTtcblx0XHR9XG5cblx0XHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5BU1NJR04pIHtcblx0XHRcdGRlZmF1bHRWYWx1ZVRva2VuID0gcGFyc2VyLm5leHQoKTtcblx0XHRcdGRlZmF1bHRWYWx1ZSA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHRcdH1cblxuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUUGFyYW1ldGVyTm9kZShuYW1lVG9rZW4udmFsdWUsIHR5cGUsIGRlZmF1bHRWYWx1ZSk7XG5cdFx0bm9kZS5zcGFuID0gc3BhbkZyb20odHlwZVRva2VuIHx8IG5hbWVUb2tlbiwgZGVmYXVsdFZhbHVlVG9rZW4gfHwgbmFtZVRva2VuKTtcblxuXHRcdHBhcmFtZXRlcnMucHVzaChub2RlKTtcblx0fSB3aGlsZSAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKTtcblxuXHRyZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ2xhc3NNZW1iZXIocGFyc2VyOiBQYXJzZXIpOiBBU1ROb2RlIHwgbnVsbCB7XG5cdGNvbnN0IHN0YXJ0VG9rZW4gPSBwYXJzZXIucGVlaygpO1xuXG5cdGNvbnN0IGFubm90YXRpb25zID0gcGFyc2VBbm5vdGF0aW9ucyhwYXJzZXIpO1xuXHRjb25zdCBtb2RpZmllcnMgPSBwYXJzZU1vZGlmaWVycyhcblx0XHRwYXJzZXIsXG5cdFx0W1xuXHRcdFx0R1JBTU1BUi5QVUJMSUMsXG5cdFx0XHRHUkFNTUFSLlBSSVZBVEUsXG5cdFx0XHRHUkFNTUFSLlNUQVRJQyxcblx0XHRcdEdSQU1NQVIuUkVBRE9OTFlcblx0XHRdXG5cdCk7XG5cblx0Y29uc3QgbmFtZVRva2VuID0gcGFyc2VyLmV4cGVjdE9uZU9mKFtUb2tlblR5cGUuSURFTlRJRklFUiwgVG9rZW5UeXBlLktFWVdPUkRdKTtcblxuXHRsZXQgZmllbGRUeXBlID0gbnVsbDtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQ09MT04pIHtcblx0XHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09MT04pKSB7XG5cdFx0XHRmaWVsZFR5cGUgPSBwYXJzZVR5cGUocGFyc2VyKTtcblx0XHR9XG5cdH1cblxuXHRsZXQgaW5pdCA9IG51bGw7XG5cdGlmIChwYXJzZXIuY29uc3VtZUlmT3BlcmF0b3IoR1JBTU1BUi5BU1NJR04pKSB7XG5cdFx0aW5pdCA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHR9XG5cblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuU0VNSUNPTE9OKSB7XG5cdFx0aWYgKCFtb2RpZmllcnMucHVibGljICYmICFtb2RpZmllcnMucHJpdmF0ZSkge1xuXHRcdFx0bW9kaWZpZXJzLnByaXZhdGUgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNlbWljb2xvblRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuU0VNSUNPTE9OKTtcblxuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNURmllbGROb2RlKG5hbWVUb2tlbi52YWx1ZSwgbW9kaWZpZXJzLCBmaWVsZFR5cGUsIGluaXQpO1xuXHRcdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIHNlbWljb2xvblRva2VuKTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGxldCB0eXBlUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuTEVTU19USEFOKSB7XG5cdFx0dHlwZVBhcmFtZXRlcnMgPSBwYXJzZVR5cGVQYXJhbWV0ZXJzKHBhcnNlcik7XG5cdH1cblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKSB7XG5cdFx0aWYgKCFtb2RpZmllcnMucHVibGljICYmICFtb2RpZmllcnMucHJpdmF0ZSkge1xuXHRcdFx0bW9kaWZpZXJzLnB1YmxpYyA9IHRydWU7XG5cdFx0fVxuXG5cdFx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTik7XG5cdFx0Y29uc3QgcGFyYW1ldGVycyA9IHBhcnNlUGFyYW1ldGVycyhwYXJzZXIpO1xuXHRcdGNvbnN0IHBhcmVudGhlc2VzQ2xvc2VUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKTtcblxuXHRcdGxldCByZXR1cm5UeXBlID0gbnVsbDtcblx0XHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09MT04pKSB7XG5cdFx0XHRyZXR1cm5UeXBlID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY2hpbGRyZW46IEFTVE5vZGVbXSA9IHBhcnNlQmxvY2socGFyc2VyKTtcblxuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUTWV0aG9kTm9kZShcblx0XHRcdG5hbWVUb2tlbi52YWx1ZSxcblx0XHRcdG5hbWVUb2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5DT05TVFJVQ1RPUiA/IEFTVE5vZGVUeXBlLkNPTlNUUlVDVE9SIDogQVNUTm9kZVR5cGUuTUVUSE9ELFxuXHRcdFx0YW5ub3RhdGlvbnMsXG5cdFx0XHRtb2RpZmllcnMsXG5cdFx0XHR0eXBlUGFyYW1ldGVycyxcblx0XHRcdHBhcmFtZXRlcnMsXG5cdFx0XHRyZXR1cm5UeXBlLFxuXHRcdFx0Y2hpbGRyZW5cblx0XHQpO1xuXG5cdFx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgcGFyZW50aGVzZXNDbG9zZVRva2VuKTtcblxuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0dGhyb3dQYXJzZXJFcnJvcihgSW52YWxpZCBjbGFzcyBtZW1iZXI6ICR7bmFtZVRva2VuLnZhbHVlfWApO1xuXG5cdHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VCbG9jayhwYXJzZXI6IFBhcnNlcik6IEFTVE5vZGVbXSB7XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLlNFTUlDT0xPTikge1xuXHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfT1BFTik7XG5cblx0Y29uc3QgY2hpbGRyZW4gPSBbXTtcblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQlJBQ0VfQ0xPU0UpIHtcblx0XHRpZiAocGFyc2VyLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuQ09NTUVOVCkge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjb25zdCBjaGlsZDogQVNUTm9kZSB8IG51bGwgPSBwYXJzZVN0YXRlbWVudChwYXJzZXIpO1xuXHRcdGlmIChjaGlsZCkge1xuXHRcdFx0Y2hpbGRyZW4ucHVzaChjaGlsZCk7XG5cdFx0fVxuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfQ0xPU0UpO1xuXG5cdHJldHVybiBjaGlsZHJlbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVmFyaWFibGVEZWNsYXJhdGlvbihwYXJzZXI6IFBhcnNlcik6IEFTVFZhcmlhYmxlTm9kZSB7XG5cdGNvbnN0IGxldFRva2VuID0gcGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5MRVQpO1xuXHRjb25zdCBuYW1lVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXG5cdGxldCB0eXBlQW5ub3RhdGlvbiA9IG51bGw7XG5cdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT0xPTikpIHtcblx0XHR0eXBlQW5ub3RhdGlvbiA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHR9XG5cblx0bGV0IGluaXQgPSBudWxsO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5BU1NJR04pIHtcblx0XHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5BU1NJR04pO1xuXHRcdGluaXQgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0fVxuXG5cdGNvbnN0IHNlbWljb2xvblRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuU0VNSUNPTE9OKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVFZhcmlhYmxlTm9kZShuYW1lVG9rZW4udmFsdWUsIHR5cGVBbm5vdGF0aW9uLCBpbml0KTtcblx0bm9kZS5zcGFuID0gc3BhbkZyb20obGV0VG9rZW4sIHNlbWljb2xvblRva2VuKTtcblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSWZEZWNsYXJhdGlvbihwYXJzZXI6IFBhcnNlcik6IEFTVElmTm9kZSB7XG5cdGNvbnN0IHN0YXJ0VG9rZW4gPSBwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLklGKTtcblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKTtcblx0Y29uc3QgY29uZGl0aW9uID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdGNvbnN0IHBhcmVudGhlc2VzQ2xvc2VUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVElmTm9kZShjb25kaXRpb24sIG5ldyBBU1RUaGVuTm9kZShwYXJzZUJsb2NrKHBhcnNlcikpKTtcblxuXHRpZiAocGFyc2VyLmNvbnN1bWVJZktleXdvcmQoR1JBTU1BUi5FTFNFKSkge1xuXHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLklGKSB7XG5cdFx0XHRub2RlLmVsc2UgPSBwYXJzZUlmRGVjbGFyYXRpb24ocGFyc2VyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bm9kZS5lbHNlID0gbmV3IEFTVEVsc2VOb2RlKHBhcnNlQmxvY2socGFyc2VyKSk7XG5cdFx0fVxuXHR9XG5cblx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgcGFyZW50aGVzZXNDbG9zZVRva2VuKTtcblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTWF0Y2hEZWNsYXJhdGlvbihwYXJzZXI6IFBhcnNlcik6IEFTVE1hdGNoTm9kZSB7XG5cdGNvbnN0IHN0YXJ0VG9rZW4gPSBwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLk1BVENIKTtcblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTik7XG5cblx0Y29uc3QgZXhwcmVzc2lvbiA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKTtcblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfT1BFTik7XG5cblx0Y29uc3QgbWF0Y2hDYXNlczogQVNUTWF0Y2hDYXNlTm9kZVtdID0gW107XG5cdGxldCBkZWZhdWx0Q2FzZTogQVNUTWF0Y2hDYXNlTm9kZSB8IG51bGwgPSBudWxsO1xuXG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLkJSQUNFX0NMT1NFKSB7XG5cdFx0Y29uc3QgbWF0Y2hDYXNlOiBBU1RNYXRjaENhc2VOb2RlID0gcGFyc2VNYXRjaENhc2VEZWNsYXJhdGlvbihwYXJzZXIpO1xuXHRcdGlmIChtYXRjaENhc2UudGVzdCA9PT0gbnVsbCkge1xuXHRcdFx0ZGVmYXVsdENhc2UgPSBtYXRjaENhc2U7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0bWF0Y2hDYXNlcy5wdXNoKG1hdGNoQ2FzZSk7XG5cdH1cblxuXHRjb25zdCBicmFjZUNsb3NlVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9DTE9TRSk7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RNYXRjaE5vZGUoZXhwcmVzc2lvbiwgbWF0Y2hDYXNlcywgZGVmYXVsdENhc2UpO1xuXHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBicmFjZUNsb3NlVG9rZW4pO1xuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VNYXRjaENhc2VEZWNsYXJhdGlvbihwYXJzZXI6IFBhcnNlcik6IEFTVE1hdGNoQ2FzZU5vZGUge1xuXHRjb25zdCBjYXNlTm9kZSA9IG5ldyBBU1RNYXRjaENhc2VOb2RlKCk7XG5cblx0aWYgKHBhcnNlci5jb25zdW1lSWZLZXl3b3JkKEdSQU1NQVIuREVGQVVMVCkpIHtcblx0XHRjYXNlTm9kZS50ZXN0ID0gbnVsbDtcblx0fSBlbHNlIHtcblx0XHRjYXNlTm9kZS50ZXN0ID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5DT0xPTik7XG5cblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQlJBQ0VfT1BFTikge1xuXHRcdGNhc2VOb2RlLmNoaWxkcmVuID0gcGFyc2VCbG9jayhwYXJzZXIpO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnN0IGNoaWxkOiBBU1ROb2RlIHwgbnVsbCA9IHBhcnNlU3RhdGVtZW50KHBhcnNlcik7XG5cdFx0aWYgKGNoaWxkKSB7XG5cdFx0XHRjYXNlTm9kZS5jaGlsZHJlbi5wdXNoKGNoaWxkKVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjYXNlTm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRm9yZWFjaERlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNURm9yZWFjaE5vZGUge1xuXHRjb25zdCBzdGFydFRva2VuID0gcGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5GT1JFQUNIKTtcblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKTtcblxuXHRjb25zdCBpdGVyYXRvclRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblx0Y29uc3QgaXRlcmF0b3IgPSBpdGVyYXRvclRva2VuLnZhbHVlO1xuXG5cdHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuSU4pO1xuXG5cdGNvbnN0IGl0ZXJhYmxlID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cblx0Y29uc3QgcGFyZW50aGVzZXNDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNURm9yZWFjaE5vZGUoaXRlcmF0b3IsIGl0ZXJhYmxlLCBwYXJzZUJsb2NrKHBhcnNlcikpO1xuXHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBwYXJlbnRoZXNlc0Nsb3NlVG9rZW4pO1xuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBcnJheShwYXJzZXI6IFBhcnNlcik6IEFTVEFycmF5Tm9kZSB7XG5cdGNvbnN0IHN0YXJ0VG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9PUEVOKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVEFycmF5Tm9kZSgpO1xuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX0NMT1NFKSB7XG5cdFx0ZG8ge1xuXHRcdFx0bm9kZS5lbGVtZW50cy5wdXNoKHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpKTtcblx0XHR9IHdoaWxlIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpO1xuXHR9XG5cblx0Y29uc3QgYnJhY2tldFNxdWFyZUNsb3NlVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9DTE9TRSk7XG5cblx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgYnJhY2tldFNxdWFyZUNsb3NlVG9rZW4pO1xuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VMYW1iZGEocGFyc2VyOiBQYXJzZXIpOiBBU1RMYW1iZGFOb2RlIHtcblx0Y29uc3Qgc3RhcnRUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX09QRU4pO1xuXG5cdGNvbnN0IHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSA9IFtdO1xuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5BUlJPVykge1xuXHRcdGNvbnN0IG5hbWUgPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpLnZhbHVlO1xuXHRcdGxldCB0eXBlID0gbnVsbDtcblx0XHRsZXQgZGVmYXVsdFZhbHVlID0gbnVsbDtcblxuXHRcdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT0xPTikpIHtcblx0XHRcdHR5cGUgPSBwYXJzZVR5cGUocGFyc2VyKTtcblx0XHR9XG5cblx0XHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5BU1NJR04pIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0XHRkZWZhdWx0VmFsdWUgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0XHR9XG5cblx0XHRwYXJhbWV0ZXJzLnB1c2gobmV3IEFTVFBhcmFtZXRlck5vZGUobmFtZSwgdHlwZSwgZGVmYXVsdFZhbHVlKSk7XG5cblx0XHRwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSk7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5BUlJPVyk7XG5cblx0bGV0IHJldHVyblR5cGU6IEFTVFR5cGVOb2RlID0gY3JlYXRlTWl4ZWRUeXBlKCk7XG5cdGlmIChwYXJzZXIucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0cmV0dXJuVHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkNPTE9OKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm5UeXBlID0gY3JlYXRlTWl4ZWRUeXBlKCk7XG5cdFx0XHRwYXJzZXIucmV3aW5kKCk7XG5cdFx0fVxuXHR9XG5cblx0bGV0IGNoaWxkcmVuID0gW107XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkJSQUNFX09QRU4pIHtcblx0XHRjaGlsZHJlbiA9IHBhcnNlQmxvY2socGFyc2VyKTtcblx0fSBlbHNlIHtcblx0XHRjaGlsZHJlbi5wdXNoKHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpKTtcblx0fVxuXG5cdGNvbnN0IGJyYWNlQ2xvc2VUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX0NMT1NFKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVExhbWJkYU5vZGUocGFyYW1ldGVycywgcmV0dXJuVHlwZSwgY2hpbGRyZW4pO1xuXHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBicmFjZUNsb3NlVG9rZW4pO1xuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9va3NMaWtlTGFtYmRhKHBhcnNlcjogUGFyc2VyKTogYm9vbGVhbiB7XG5cdGNvbnN0IHN0YXJ0ID0gcGFyc2VyLnBvc2l0aW9uKCk7XG5cblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQlJBQ0VfT1BFTikge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHBhcnNlci5uZXh0KCk7XG5cblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLklERU5USUZJRVIpIHtcblx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT0xPTikpIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0fVxuXHRcdGlmICghcGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRjb25zdCBpc0xhbWJkYSA9IHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQVJST1c7XG5cdHBhcnNlci5zZWVrQXQoc3RhcnQpXG5cdHJldHVybiBpc0xhbWJkYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRXhwcmVzc2lvblN0YXRlbWVudChwYXJzZXI6IFBhcnNlcik6IEFTVEV4cHJlc3Npb25Ob2RlIHtcblx0Y29uc3QgZXhwciA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlNFTUlDT0xPTik7XG5cblx0cmV0dXJuIG5ldyBBU1RFeHByZXNzaW9uTm9kZShleHByKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNraXBFbXB0eVRleHQocGFyc2VyOiBQYXJzZXIpIHtcblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLlRFWFQgJiYgcGFyc2VyLnBlZWtJcygnJykpIHtcblx0XHRwYXJzZXIubmV4dCgpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUV4cHJlc3Npb24ocGFyc2VyOiBQYXJzZXIsIHByZWNlZGVuY2U6IG51bWJlciA9IDApOiBBU1ROb2RlIHtcblx0bGV0IGV4cHIgPSBwYXJzZVBvc3RmaXgocGFyc2VyLCBwYXJzZVVuYXJ5KHBhcnNlcikpO1xuXG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0Y29uc3QgdG9rZW4gPSBwYXJzZXIucGVlaygpO1xuXHRcdGlmICghdG9rZW4pIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGxldCB0b2tlblByZWNlZGVuY2UgPSBsb29rdXBQcmVjZWRlbmNlKHRva2VuKTtcblx0XHRpZiAodG9rZW5QcmVjZWRlbmNlIDwgcHJlY2VkZW5jZSkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLkFTU0lHTikge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHRcdGV4cHIgPSBuZXcgQVNUQXNzaWdubWVudE5vZGUoZXhwciwgcGFyc2VFeHByZXNzaW9uKHBhcnNlciwgdG9rZW5QcmVjZWRlbmNlKSk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoR1JBTU1BUi5NQVRIX09QRVJBVE9SUy5pbmNsdWRlcyh0b2tlbi52YWx1ZSlcblx0XHRcdHx8IEdSQU1NQVIuTE9HSUNfT1BFUkFUT1JTLmluY2x1ZGVzKHRva2VuLnZhbHVlKSkge1xuXHRcdFx0Y29uc3Qgc3RhcnRUb2tlbiA9IHBhcnNlci5uZXh0KCk7XG5cdFx0XHRjb25zdCByaWdodCA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIsIHRva2VuUHJlY2VkZW5jZSArIDEpO1xuXHRcdFx0Y29uc3QgZW5kVG9rZW4gPSBwYXJzZXIucGVlaygpO1xuXG5cdFx0XHRjb25zdCBub2RlID0gbmV3IEFTVEJpbmFyeU5vZGUoZXhwciwgcmlnaHQsIHRva2VuLnZhbHVlKTtcblx0XHRcdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIGVuZFRva2VuKTtcblx0XHRcdGV4cHIgPSBub2RlO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0YnJlYWs7XG5cdH1cblxuXHRyZXR1cm4gZXhwcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVkRvbUV4cHJlc3Npb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RWRG9tTm9kZSB7XG5cdHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuVkRPTSk7XG5cdHJldHVybiBwYXJzZVZEb21FbGVtZW50KHBhcnNlcik7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVkRvbUVsZW1lbnQocGFyc2VyOiBQYXJzZXIpOiBBU1RWRG9tTm9kZSB7XG5cdHNraXBFbXB0eVRleHQocGFyc2VyKTtcblxuXHRjb25zdCBzdGFydFRva2VuOiBUb2tlbiA9IHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkxFU1NfVEhBTik7XG5cdGNvbnN0IHRhZ1Rva2VuOiBUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cdGNvbnN0IHRhZzogc3RyaW5nID0gdGFnVG9rZW4udmFsdWU7XG5cblx0Y29uc3QgcHJvcHMgPSBuZXcgTWFwPHN0cmluZywgQVNUTm9kZT4oKTtcblx0d2hpbGUgKCFwYXJzZXIucGVla0lzKEdSQU1NQVIuR1JFQVRFUl9USEFOKSAmJiAhcGFyc2VyLnBlZWtJcyhHUkFNTUFSLlhNTF9DTE9TRV9UQUcpKSB7XG5cblx0XHRjb25zdCBuYW1lVG9rZW46IFRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblx0XHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5BU1NJR04pO1xuXG5cdFx0Y29uc3QgdmFsdWU6IEFTVE5vZGUgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblxuXHRcdHByb3BzLnNldChuYW1lVG9rZW4udmFsdWUsIHZhbHVlKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkdSRUFURVJfVEhBTik7XG5cblx0Y29uc3QgY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdO1xuXG5cdHdoaWxlICghcGFyc2VyLnBlZWtJcyhHUkFNTUFSLlhNTF9PUEVOX0NMT1NFX1RBRykpIHtcblx0XHRpZiAocGFyc2VyLnBlZWtJcyhHUkFNTUFSLkxFU1NfVEhBTikpIHtcblx0XHRcdGNoaWxkcmVuLnB1c2gocGFyc2VWRG9tRWxlbWVudChwYXJzZXIpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2hpbGRyZW4ucHVzaChwYXJzZVZEb21UZXh0KHBhcnNlcikpO1xuXHRcdH1cblx0fVxuXG5cdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLlhNTF9PUEVOX0NMT1NFX1RBRyk7XG5cdHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkdSRUFURVJfVEhBTik7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RWRG9tTm9kZSh0YWcsIHByb3BzLCBjaGlsZHJlbik7XG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIHBhcnNlci5wZWVrKCkpO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVkRvbVRleHQocGFyc2VyOiBQYXJzZXIpOiBBU1RWRG9tVGV4dE5vZGUge1xuXHRjb25zdCB0b2tlbjogVG9rZW4gPSBwYXJzZXIuZXhwZWN0T25lT2YoXG5cdFx0W1xuXHRcdFx0VG9rZW5UeXBlLklERU5USUZJRVIsXG5cdFx0XHRUb2tlblR5cGUuT1BFUkFUT1IsXG5cdFx0XHRUb2tlblR5cGUuS0VZV09SRCxcblx0XHRcdFRva2VuVHlwZS5URVhUXG5cdFx0XVxuXHQpO1xuXHRjb25zdCBub2RlID0gbmV3IEFTVFZEb21UZXh0Tm9kZSh0b2tlbi52YWx1ZSk7XG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHRva2VuLCB0b2tlbik7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBcmd1bWVudHMocGFyc2VyOiBQYXJzZXIpOiBBU1ROb2RlW10ge1xuXHRjb25zdCBhcmdzOiBBU1ROb2RlW10gPSBbXTtcblxuXHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpKSB7XG5cdFx0cmV0dXJuIGFyZ3M7XG5cdH1cblxuXHRhcmdzLnB1c2gocGFyc2VFeHByZXNzaW9uKHBhcnNlcikpO1xuXG5cdHdoaWxlIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpIHtcblx0XHRhcmdzLnB1c2gocGFyc2VFeHByZXNzaW9uKHBhcnNlcikpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXHRyZXR1cm4gYXJncztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVW5hcnkocGFyc2VyOiBQYXJzZXIpOiBBU1ROb2RlIHwgQVNUVW5hcnlOb2RlIHtcblx0Y29uc3QgdG9rZW46IFRva2VuID0gcGFyc2VyLnBlZWsoKTtcblxuXHRpZiAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLktFWVdPUkQgJiYgdG9rZW4udmFsdWUgPT09IEdSQU1NQVIuVkRPTSkge1xuXHRcdHJldHVybiBwYXJzZVZEb21FeHByZXNzaW9uKHBhcnNlcik7XG5cdH1cblxuXHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuRVhDTEFNQVRJT05fTUFSSykge1xuXHRcdHBhcnNlci5uZXh0KCk7XG5cblx0XHRjb25zdCB1bmFyeTogQVNUTm9kZSB8IEFTVFVuYXJ5Tm9kZSA9IHBhcnNlVW5hcnkocGFyc2VyKTtcblxuXHRcdHJldHVybiBuZXcgQVNUVW5hcnlOb2RlKEdSQU1NQVIuRVhDTEFNQVRJT05fTUFSSywgdW5hcnkpO1xuXHR9XG5cblx0cmV0dXJuIHBhcnNlUHJpbWFyeShwYXJzZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQcmltYXJ5KHBhcnNlcjogUGFyc2VyKTogQVNUTm9kZSB7XG5cdGlmIChsb29rc0xpa2VMYW1iZGEocGFyc2VyKSkge1xuXHRcdHJldHVybiBwYXJzZUxhbWJkYShwYXJzZXIpO1xuXHR9XG5cblx0Y29uc3QgdG9rZW4gPSBwYXJzZXIubmV4dCgpO1xuXG5cdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9PUEVOKSB7XG5cdFx0cGFyc2VyLnJld2luZCgpO1xuXHRcdHJldHVybiBwYXJzZUFycmF5KHBhcnNlcik7XG5cdH1cblxuXHRpZiAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLk5VTUJFUikge1xuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5OVU1CRVIpO1xuXHRcdG5vZGUudmFsdWUgPSB0b2tlbi52YWx1ZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuU1RSSU5HKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLlNUUklORyk7XG5cdFx0bm9kZS52YWx1ZSA9IHRva2VuLnZhbHVlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5CT09MRUFOKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLkJPT0xFQU4pO1xuXHRcdG5vZGUudmFsdWUgPSB0b2tlbi52YWx1ZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuSURFTlRJRklFUikge1xuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5JREVOVElGSUVSKTtcblx0XHRub2RlLm5hbWUgPSB0b2tlbi52YWx1ZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5OVUxMKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLk5VTEwpO1xuXHRcdG5vZGUudmFsdWUgPSB0b2tlbi52YWx1ZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5USElTKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLlRISVMpO1xuXHRcdG5vZGUubmFtZSA9IHRva2VuLnZhbHVlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLk5FVykge1xuXG5cdFx0bGV0IHR5cGVBbm5vdGF0aW9uID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cblx0XHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKTtcblxuXHRcdHJldHVybiBuZXcgQVNUTmV3Tm9kZShwYXJzZUFyZ3VtZW50cyhwYXJzZXIpLCB0eXBlQW5ub3RhdGlvbik7XG5cdH1cblxuXHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTikge1xuXHRcdGNvbnN0IGV4cHIgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0XHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cdFx0cmV0dXJuIGV4cHI7XG5cdH1cblxuXHR0aHJvd1BhcnNlckVycm9yKGBVbmV4cGVjdGVkIHRva2VuOiAke3Rva2VuLnR5cGV9ICR7dG9rZW4udmFsdWV9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBvc3RmaXgocGFyc2VyOiBQYXJzZXIsIGV4cHI6IEFTVE5vZGUgfCBudWxsKTogQVNUTm9kZSB7XG5cdGlmIChleHByID09PSBudWxsKSB7XG5cdFx0dGhyb3dQYXJzZXJFcnJvcihgRXhwZWN0ZWQgZXhwcmVzc2lvbiwgZ290IG51bGwuYCk7XG5cdH1cblxuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdGNvbnN0IHRva2VuID0gcGFyc2VyLnBlZWsoKTtcblx0XHRpZiAoIXRva2VuKSBicmVhaztcblxuXHRcdC8vIENhbGw6IGZvbyguLi4pXG5cdFx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0XHRleHByID0gbmV3IEFTVENhbGxOb2RlKGV4cHIsIHBhcnNlQXJndW1lbnRzKHBhcnNlcikpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gTWVtYmVyOiBmb28uYmFyXG5cdFx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLkRPVCkge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHRcdGV4cHIgPSBuZXcgQVNUTWVtYmVyTm9kZShleHByLCBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpLnZhbHVlKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIElOREVYOiBmb29bZXhwcl1cblx0XHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfT1BFTikge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblxuXHRcdFx0Y29uc3QgaW5kZXggPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblxuXHRcdFx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfQ0xPU0UpO1xuXG5cdFx0XHRleHByID0gbmV3IEFTVEluZGV4Tm9kZShleHByLCBpbmRleCk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRicmVhaztcblx0fVxuXG5cdHJldHVybiBleHByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9va3VwUHJlY2VkZW5jZSh0b2tlbjogVG9rZW4pOiBudW1iZXIge1xuXHRzd2l0Y2ggKHRva2VuLnZhbHVlKSB7XG5cdFx0Y2FzZSBHUkFNTUFSLkRPVDpcblx0XHRcdHJldHVybiAxMDA7XG5cdFx0Y2FzZSBHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU46XG5cdFx0XHRyZXR1cm4gOTA7XG5cdFx0Y2FzZSBHUkFNTUFSLk1VTFRJUExZOlxuXHRcdGNhc2UgR1JBTU1BUi5ESVZJREU6XG5cdFx0Y2FzZSBHUkFNTUFSLk1PRFVMVVM6XG5cdFx0XHRyZXR1cm4gNjA7XG5cdFx0Y2FzZSBHUkFNTUFSLlBMVVM6XG5cdFx0Y2FzZSBHUkFNTUFSLk1JTlVTOlxuXHRcdFx0cmV0dXJuIDUwO1xuXHRcdGNhc2UgR1JBTU1BUi5MRVNTX1RIQU46XG5cdFx0Y2FzZSBHUkFNTUFSLkdSRUFURVJfVEhBTjpcblx0XHRjYXNlIEdSQU1NQVIuTEVTU19FUVVBTDpcblx0XHRjYXNlIEdSQU1NQVIuR1JFQVRFUl9FUVVBTDpcblx0XHRcdHJldHVybiA0MDtcblx0XHRjYXNlIEdSQU1NQVIuRVFVQUw6XG5cdFx0Y2FzZSBHUkFNTUFSLk5PVF9FUVVBTDpcblx0XHRcdHJldHVybiAzMDtcblx0XHRjYXNlIEdSQU1NQVIuQU5EOlxuXHRcdFx0cmV0dXJuIDIwO1xuXHRcdGNhc2UgR1JBTU1BUi5PUjpcblx0XHRcdHJldHVybiAxMDtcblx0XHRjYXNlIEdSQU1NQVIuQVNTSUdOOlxuXHRcdFx0cmV0dXJuIDU7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiAwO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7VG9rZW4sIFRva2VuVHlwZX0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcbmltcG9ydCB7VG9rZW5TdHJlYW19IGZyb20gXCIuLi90b2tlbml6ZXIvdG9rZW5pemVyXCI7XG5pbXBvcnQge3BhcnNlUHJvZ3JhbX0gZnJvbSBcIi4vcGFyc2VyX3N0YXRtZW50c1wiO1xuaW1wb3J0IHt0aHJvd1BhcnNlckVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4vcGFyc2VyX3NvdXJjZVwiO1xuXG5cbmV4cG9ydCBjbGFzcyBQYXJzZXIge1xuXHRzb3VyY2U6IFNvdXJjZTtcblx0dG9rZW5TdHJlYW06IFRva2VuU3RyZWFtIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3Ioc291cmNlOiBTb3VyY2UpIHtcblx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0fVxuXG5cdHBhcnNlKCkge1xuXHRcdHRoaXMudG9rZW5TdHJlYW0gPSB0aGlzLnNvdXJjZVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgLmdldFRva2VuaXplcigpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAuZ2V0VG9rZW5TdHJlYW0oKVxuXG5cdFx0cmV0dXJuIHBhcnNlUHJvZ3JhbSh0aGlzKTtcblx0fVxuXG5cdHN0cmVhbSgpOiBUb2tlblN0cmVhbSB7XG5cdFx0aWYgKCF0aGlzLnRva2VuU3RyZWFtKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKCdQYXJzZXIgaGFzIG5vdCBiZWVuIHBhcnNlZCB5ZXQuJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMudG9rZW5TdHJlYW07XG5cdH1cblxuXHRleHBlY3QodG9rZW5UeXBlOiBzdHJpbmcsIGtleXdvcmQ6IHN0cmluZyB8IG51bGwgPSBudWxsKTogVG9rZW4ge1xuXHRcdGNvbnN0IHRva2VuID0gdGhpc1xuXHRcdFx0LnN0cmVhbSgpXG5cdFx0XHQubmV4dCgpO1xuXG5cdFx0aWYgKCF0b2tlbikge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcihgVW5leHBlY3RlZCBlbmQgb2YgZmlsZS4gRXhwZWN0ZWQgJHt0b2tlblR5cGV9JHtrZXl3b3JkID8gJyAnICsga2V5d29yZCA6ICcnfWApO1xuXHRcdH1cblxuXHRcdGlmICh0b2tlbi50eXBlICE9PSB0b2tlblR5cGUgfHwgKGtleXdvcmQgJiYgdG9rZW4udmFsdWUgIT09IGtleXdvcmQpKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKGBFeHBlY3RlZCAke3Rva2VuVHlwZX0ke2tleXdvcmQgPyAnICcgKyBrZXl3b3JkIDogJyd9LCBnb3QgJHt0b2tlbi50eXBlfSAke3Rva2VuLnZhbHVlfWApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0b2tlbjtcblx0fVxuXG5cdGV4cGVjdE9wZXJhdG9yKGtleXdvcmQ6IHN0cmluZyB8IG51bGwgPSBudWxsKTogVG9rZW4ge1xuXHRcdHJldHVybiB0aGlzLmV4cGVjdChUb2tlblR5cGUuT1BFUkFUT1IsIGtleXdvcmQpO1xuXHR9XG5cblx0ZXhwZWN0QW5ub3RhdGlvbigpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZWN0KFRva2VuVHlwZS5BTk5PVEFUSU9OKTtcblx0fVxuXG5cdGV4cGVjdElkZW50aWZpZXIoa2V5d29yZDogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZWN0KFRva2VuVHlwZS5JREVOVElGSUVSLCBrZXl3b3JkKTtcblx0fVxuXG5cdGV4cGVjdEtleXdvcmQoa2V5d29yZDogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZWN0KFRva2VuVHlwZS5LRVlXT1JELCBrZXl3b3JkKTtcblx0fVxuXG5cdGV4cGVjdFN0cmluZygpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZWN0KFRva2VuVHlwZS5TVFJJTkcpO1xuXHR9XG5cblx0ZXhwZWN0VGV4dCgpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZWN0KFRva2VuVHlwZS5URVhUKTtcblx0fVxuXG5cdGV4cGVjdFB1bmN0dWF0aW9uKGtleXdvcmQ6IHN0cmluZyB8IG51bGwgPSBudWxsKTogVG9rZW4ge1xuXHRcdHJldHVybiB0aGlzLmV4cGVjdChUb2tlblR5cGUuUFVOQ1RVQVRJT04sIGtleXdvcmQpO1xuXHR9XG5cblx0ZXhwZWN0T25lT2YodG9rZW5UeXBlczogc3RyaW5nW10sIGtleXdvcmRzOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IFRva2VuIHtcblx0XHRjb25zdCB0b2tlbiA9IHRoaXNcblx0XHRcdC5zdHJlYW0oKVxuXHRcdFx0Lm5leHQoKTtcblxuXHRcdGlmICghdG9rZW4pIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoYFVuZXhwZWN0ZWQgZW5kIG9mIGZpbGUuIEV4cGVjdGVkIG9uZSBvZiB0eXBlcyAke3Rva2VuVHlwZXN9LCBnb3QgbnVsbC5gKTtcblx0XHR9XG5cblx0XHRpZiAoIXRva2VuVHlwZXMuaW5jbHVkZXModG9rZW4udHlwZSkpIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoYEV4cGVjdGVkIG9uZSBvZiB0eXBlcyAke3Rva2VuVHlwZXN9LCBnb3QgJHt0b2tlbi50eXBlfWApO1xuXHRcdH1cblxuXHRcdGlmIChrZXl3b3JkcyAmJiAha2V5d29yZHMuaW5jbHVkZXModG9rZW4udmFsdWUpKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKGBFeHBlY3RlZCBvbmUgb2YgdmFsdWVzICR7a2V5d29yZHN9LCBnb3QgJHt0b2tlbi52YWx1ZX1gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdG9rZW47XG5cdH1cblxuXHRjb25zdW1lSWYodG9rZW5UeXBlOiBzdHJpbmcsIGtleXdvcmQ6IHN0cmluZyB8IG51bGwgPSBudWxsKTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgdG9rZW4gPSB0aGlzLnBlZWsoKTtcblxuXHRcdGlmICh0b2tlbi50eXBlID09PSB0b2tlblR5cGUgJiYgKGtleXdvcmQgJiYgdG9rZW4udmFsdWUgPT09IGtleXdvcmQpKSB7XG5cdFx0XHR0aGlzLm5leHQoKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGNvbnN1bWVJZlB1bmN0dWF0aW9uKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdW1lSWYoVG9rZW5UeXBlLlBVTkNUVUFUSU9OLCB2YWx1ZSk7XG5cdH1cblxuXHRjb25zdW1lSWZPcGVyYXRvcih2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3VtZUlmKFRva2VuVHlwZS5PUEVSQVRPUiwgdmFsdWUpO1xuXHR9XG5cblx0Y29uc3VtZUlmQ29tbWVudCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdW1lSWYoVG9rZW5UeXBlLkNPTU1FTlQpO1xuXHR9XG5cblx0Y29uc3VtZUlmS2V5d29yZChrZXl3b3JkOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdW1lSWYoVG9rZW5UeXBlLktFWVdPUkQsIGtleXdvcmQpO1xuXHR9XG5cblx0cGVlaygpOiBUb2tlbiB7XG5cdFx0Y29uc3QgdG9rZW4gPSB0aGlzXG5cdFx0XHQuc3RyZWFtKClcblx0XHRcdC5wZWVrKCk7XG5cblx0XHRpZiAodG9rZW4gPT09IG51bGwpIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoJ1VuZXhwZWN0ZWQgZW5kIG9mIGZpbGUuIEV4cGVjdGVkIHRva2VuLCBnb3QgbnVsbC4nKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdG9rZW47XG5cdH1cblxuXHRwZWVrSXMoa2V5d29yZDogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucGVlaygpXG5cdFx0ICAgICAgICAgICAudmFsdWVcblx0XHQgICAgICAgICAgIC50cmltKCkgPT09IGtleXdvcmQ7XG5cdH1cblxuXHRuZXh0KCk6IFRva2VuIHtcblx0XHRjb25zdCB0b2tlbiA9IHRoaXNcblx0XHRcdC5zdHJlYW0oKVxuXHRcdFx0Lm5leHQoKTtcblxuXHRcdGlmICh0b2tlbiA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZmlsZS4gRXhwZWN0ZWQgdG9rZW4sIGdvdCBudWxsLicpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0b2tlbjtcblx0fVxuXG5cdHJld2luZCgpOiB2b2lkIHtcblx0XHR0aGlzLnN0cmVhbSgpXG5cdFx0ICAgIC5yZXdpbmQoKTtcblx0fVxuXG5cdHBvc2l0aW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuc3RyZWFtKCkuaW5kZXg7XG5cdH1cblxuXHRzZWVrQXQocG9zaXRpb246IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuc3RyZWFtKCkuaW5kZXggPSBwb3NpdGlvbjtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0FTVENsYXNzTm9kZSwgQVNUSW50ZXJmYWNlTm9kZSwgQVNUTm9kZX0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHtDbGFzc0RlZmluaXRpb24sIEludGVyZmFjZURlZmluaXRpb259IGZyb20gXCIuL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7Q2xhc3NTeW1ib2wsIEludGVyZmFjZVN5bWJvbH0gZnJvbSBcIi4uL3R5cGVzL3R5cGVfb2JqZWN0c1wiO1xuaW1wb3J0IHt0aHJvd1J1bnRpbWVFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuXG5leHBvcnQgY2xhc3MgQ2xhc3NSZWdpc3RyeSB7XG5cdG1hcDogTWFwPHN0cmluZywgQ2xhc3NEZWZpbml0aW9uPiA9IG5ldyBNYXAoKTtcblxuXHRyZWdpc3Rlcihub2RlOiBBU1RDbGFzc05vZGUpOiB2b2lkIHtcblx0XHR0aGlzLnNldChub2RlLm5hbWUsIENsYXNzRGVmaW5pdGlvbi5jb25zdHJ1Y3RGcm9tQVNUKG5vZGUpKTtcblx0fVxuXG5cdGFsbCgpOiBJdGVyYWJsZUl0ZXJhdG9yPENsYXNzRGVmaW5pdGlvbj4ge1xuXHRcdHJldHVybiB0aGlzLm1hcC52YWx1ZXMoKTtcblx0fVxuXG5cdHNldChuYW1lOiBzdHJpbmcsIGNsYXNzRGVmaW5pdGlvbjogQ2xhc3NEZWZpbml0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5tYXAuc2V0KG5hbWUsIGNsYXNzRGVmaW5pdGlvbik7XG5cdH1cblxuXHRnZXQobmFtZTogc3RyaW5nKTogQ2xhc3NEZWZpbml0aW9uIHtcblx0XHRjb25zdCBjbGFzc0RlZiA9IHRoaXMubWFwLmdldChuYW1lKTtcblx0XHRpZiAoIWNsYXNzRGVmKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgQ2xhc3MgJHtuYW1lfSBub3QgZm91bmQuYCk7XG5cdFx0fVxuXHRcdHJldHVybiBjbGFzc0RlZjtcblx0fVxuXG5cdGhhcyhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAuaGFzKG5hbWUpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2VSZWdpc3RyeSB7XG5cdG1hcDogTWFwPHN0cmluZywgSW50ZXJmYWNlRGVmaW5pdGlvbj4gPSBuZXcgTWFwKCk7XG5cblx0cmVnaXN0ZXIobm9kZTogQVNUSW50ZXJmYWNlTm9kZSk6IHZvaWQge1xuXHRcdHRoaXMuc2V0KG5vZGUubmFtZSwgSW50ZXJmYWNlRGVmaW5pdGlvbi5jb25zdHJ1Y3RGcm9tQVNUKG5vZGUpKTtcblx0fVxuXG5cdGFsbCgpOiBJdGVyYWJsZUl0ZXJhdG9yPEludGVyZmFjZURlZmluaXRpb24+IHtcblx0XHRyZXR1cm4gdGhpcy5tYXAudmFsdWVzKCk7XG5cdH1cblxuXHRzZXQobmFtZTogc3RyaW5nLCBpbnRlcmZhY2VEZWZpbml0aW9uOiBJbnRlcmZhY2VEZWZpbml0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5tYXAuc2V0KG5hbWUsIGludGVyZmFjZURlZmluaXRpb24pO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlUmVnaXN0cnkge1xuXHRjbGFzc1N5bWJvbHM6IE1hcDxzdHJpbmcsIENsYXNzU3ltYm9sPiA9IG5ldyBNYXAoKTtcblx0aW50ZXJmYWNlU3ltYm9sczogTWFwPHN0cmluZywgSW50ZXJmYWNlU3ltYm9sPiA9IG5ldyBNYXAoKTtcblxuXHRhbGxDbGFzc1N5bWJvbHMoKTogSXRlcmFibGVJdGVyYXRvcjxDbGFzc1N5bWJvbD4ge1xuXHRcdHJldHVybiB0aGlzLmNsYXNzU3ltYm9scy52YWx1ZXMoKTtcblx0fVxuXG5cdGFsbEludGVyZmFjZVN5bWJvbHMoKTogSXRlcmFibGVJdGVyYXRvcjxJbnRlcmZhY2VTeW1ib2w+IHtcblx0XHRyZXR1cm4gdGhpcy5pbnRlcmZhY2VTeW1ib2xzLnZhbHVlcygpO1xuXHR9XG5cblx0YWRkQ2xhc3NTeW1ib2woc3ltYm9sOiBDbGFzc1N5bWJvbCk6IHZvaWQge1xuXHRcdHRoaXMuY2xhc3NTeW1ib2xzLnNldChzeW1ib2wubmFtZSwgc3ltYm9sKTtcblx0fVxuXG5cdGFkZEludGVyZmFjZVN5bWJvbChzeW1ib2w6IEludGVyZmFjZVN5bWJvbCk6IHZvaWQge1xuXHRcdHRoaXMuaW50ZXJmYWNlU3ltYm9scy5zZXQoc3ltYm9sLm5hbWUsIHN5bWJvbCk7XG5cdH1cblxuXHRoYXNTeW1ib2wobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY2xhc3NTeW1ib2xzLmhhcyhuYW1lKSB8fCB0aGlzLmludGVyZmFjZVN5bWJvbHMuaGFzKG5hbWUpO1xuXHR9XG5cblx0cHVibGljIGdldENsYXNzU3ltYm9sKG5hbWU6IHN0cmluZyk6IENsYXNzU3ltYm9sIHtcblx0XHRjb25zdCBzeW1ib2w6IENsYXNzU3ltYm9sIHwgdW5kZWZpbmVkID0gdGhpcy5jbGFzc1N5bWJvbHMuZ2V0KG5hbWUpO1xuXHRcdGlmIChzeW1ib2wgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFN5bWJvbCAke25hbWV9IG5vdCBmb3VuZC5gKTtcblx0XHR9XG5cdFx0cmV0dXJuIHN5bWJvbDtcblx0fVxuXG5cdHB1YmxpYyBnZXRJbnRlcmFjZVN5bWJvbChuYW1lOiBzdHJpbmcpOiBJbnRlcmZhY2VTeW1ib2wge1xuXHRcdGNvbnN0IHN5bWJvbDogSW50ZXJmYWNlU3ltYm9sIHwgdW5kZWZpbmVkID0gdGhpcy5pbnRlcmZhY2VTeW1ib2xzLmdldChuYW1lKTtcblx0XHRpZiAoc3ltYm9sID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBTeW1ib2wgJHtuYW1lfSBub3QgZm91bmQuYCk7XG5cdFx0fVxuXHRcdHJldHVybiBzeW1ib2w7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE9iamVjdFJlZ2lzdHJ5IHtcblx0Y2xhc3NlcyA9IG5ldyBDbGFzc1JlZ2lzdHJ5KCk7XG5cdGludGVyZmFjZXMgPSBuZXcgSW50ZXJmYWNlUmVnaXN0cnkoKTtcblx0dHlwZXMgPSBuZXcgVHlwZVJlZ2lzdHJ5KCk7XG5cblx0ZmV0Y2hBbGxPYmplY3REZWZpbml0aW9ucygpOiBNYXA8c3RyaW5nLCBDbGFzc0RlZmluaXRpb24gfCBJbnRlcmZhY2VEZWZpbml0aW9uPiB7XG5cdFx0Y29uc3QgbWFwID0gbmV3IE1hcCgpO1xuXG5cdFx0Zm9yIChjb25zdCBjbGFzc0RlZiBvZiB0aGlzLmludGVyZmFjZXMuYWxsKCkpIHtcblx0XHRcdG1hcC5zZXQoY2xhc3NEZWYubmFtZSwgY2xhc3NEZWYpO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgY2xhc3NEZWYgb2YgdGhpcy5jbGFzc2VzLmFsbCgpKSB7XG5cdFx0XHRtYXAuc2V0KGNsYXNzRGVmLm5hbWUsIGNsYXNzRGVmKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWFwO1xuXHR9XG5cblx0Y29sbGVjdEFsbChhc3Q6IEFTVE5vZGUpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgYXN0LmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEludGVyZmFjZU5vZGUpIHtcblx0XHRcdFx0dGhpcy5pbnRlcmZhY2VzLnJlZ2lzdGVyKG5vZGUpO1xuXHRcdFx0fSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgQVNUQ2xhc3NOb2RlKSB7XG5cdFx0XHRcdHRoaXMuY2xhc3Nlcy5yZWdpc3Rlcihub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuIiwKICAgICJpbXBvcnQge1RZUEVfRU5VTX0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcbmltcG9ydCB7XG5cdEFTVENsYXNzTm9kZSxcblx0QVNURmllbGROb2RlLFxuXHRBU1RJbnRlcmZhY2VOb2RlLFxuXHRBU1RNZXRob2ROb2RlLFxuXHRBU1ROb2RlLFxuXHRBU1RQYXJhbWV0ZXJOb2RlLFxuXHRBU1RUeXBlTm9kZVxufSBmcm9tIFwiLi4vYXN0XCI7XG5pbXBvcnQge3Rocm93VHlwZUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcblxuZXhwb3J0IGNsYXNzIFByaW1pdGl2ZVR5cGVzIHtcblx0c3RhdGljIHJlYWRvbmx5IE5VTUJFUjogc3RyaW5nID0gVFlQRV9FTlVNLk5VTUJFUjtcblx0c3RhdGljIHJlYWRvbmx5IFNUUklORzogc3RyaW5nID0gVFlQRV9FTlVNLlNUUklORztcblx0c3RhdGljIHJlYWRvbmx5IEJPT0xFQU46IHN0cmluZyA9IFRZUEVfRU5VTS5CT09MRUFOO1xuXHRzdGF0aWMgcmVhZG9ubHkgTUlYRUQ6IHN0cmluZyA9IFRZUEVfRU5VTS5NSVhFRDtcblx0c3RhdGljIHJlYWRvbmx5IE5VTEw6IHN0cmluZyA9IFRZUEVfRU5VTS5OVUxMO1xuXHRzdGF0aWMgcmVhZG9ubHkgVk9JRDogc3RyaW5nID0gVFlQRV9FTlVNLlZPSUQ7XG5cblx0c3RhdGljIGhhc1R5cGUodHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKFByaW1pdGl2ZVR5cGVzLCB0eXBlLnRvVXBwZXJDYXNlKCkpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBQcmltaXRpdmVDbGFzc1R5cGVzIHtcblx0c3RhdGljIHJlYWRvbmx5IEFSUkFZOiBzdHJpbmcgPSBUWVBFX0VOVU0uQVJSQVk7XG5cblx0c3RhdGljIENMQVNTTkFNRV9NQVA6IHsgW3M6IHN0cmluZ106IHN0cmluZzsgfSA9IHtcblx0XHRhcnJheTogJ0FycmF5J1xuXHR9XG5cblx0c3RhdGljIGdldENsYXNzUmVmTmFtZSh0eXBlOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcblx0XHRyZXR1cm4gUHJpbWl0aXZlQ2xhc3NUeXBlcy5DTEFTU05BTUVfTUFQW3R5cGVdIHx8IG51bGw7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGUge1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0fVxuXG5cdGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzID09PSBvdGhlcjtcblx0fVxuXG5cdGFjY2VwdHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lcXVhbHMob3RoZXIpO1xuXHR9XG5cblx0dG9TdHJpbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gYFR5cGUoJHt0aGlzLm5hbWV9KWA7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFByaW1pdGl2ZVR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIobmFtZSk7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBQcmltaXRpdmVUeXBlXG5cdFx0XHQmJiB0aGlzLm5hbWUgPT09IG90aGVyLm5hbWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE1peGVkVHlwZSBleHRlbmRzIFR5cGUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihQcmltaXRpdmVUeXBlcy5NSVhFRCk7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBNaXhlZFR5cGU7XG5cdH1cblxuXHRvdmVycmlkZSBhY2NlcHRzKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBWb2lkVHlwZSBleHRlbmRzIFR5cGUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihQcmltaXRpdmVUeXBlcy5WT0lEKTtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBvdGhlciBpbnN0YW5jZW9mIFZvaWRUeXBlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBOdWxsVHlwZSBleHRlbmRzIFR5cGUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihQcmltaXRpdmVUeXBlcy5OVUxMKTtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBvdGhlciBpbnN0YW5jZW9mIE51bGxUeXBlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBOdWxsYWJsZVR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0aW5uZXI6IFR5cGU7XG5cblx0Y29uc3RydWN0b3IoaW5uZXI6IFR5cGUpIHtcblx0XHRzdXBlcihpbm5lci50b1N0cmluZygpICsgJz8nKTtcblx0XHR0aGlzLmlubmVyID0gaW5uZXI7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRpZiAob3RoZXIgPT09IFR5cGVzLk5VTEwpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChvdGhlciBpbnN0YW5jZW9mIE51bGxhYmxlVHlwZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuaW5uZXIuZXF1YWxzKG90aGVyLmlubmVyKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRvdmVycmlkZSBhY2NlcHRzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIG90aGVyID09PSBUeXBlcy5OVUxMIHx8IHRoaXMuaW5uZXIuYWNjZXB0cyhvdGhlcik7XG5cdH1cblxuXHRvdmVycmlkZSB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmlubmVyLnRvU3RyaW5nKCkgKyAnPyc7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFZOb2RlVHlwZSBleHRlbmRzIFR5cGUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigndm5vZGUnKTtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBvdGhlciBpbnN0YW5jZW9mIFZvaWRUeXBlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlcyB7XG5cdHN0YXRpYyByZWFkb25seSBOVU1CRVI6IFByaW1pdGl2ZVR5cGUgPSBuZXcgUHJpbWl0aXZlVHlwZShQcmltaXRpdmVUeXBlcy5OVU1CRVIpO1xuXHRzdGF0aWMgcmVhZG9ubHkgU1RSSU5HOiBQcmltaXRpdmVUeXBlID0gbmV3IFByaW1pdGl2ZVR5cGUoUHJpbWl0aXZlVHlwZXMuU1RSSU5HKTtcblx0c3RhdGljIHJlYWRvbmx5IEJPT0xFQU46IFByaW1pdGl2ZVR5cGUgPSBuZXcgUHJpbWl0aXZlVHlwZShQcmltaXRpdmVUeXBlcy5CT09MRUFOKTtcblx0c3RhdGljIHJlYWRvbmx5IE1JWEVEOiBNaXhlZFR5cGUgPSBuZXcgTWl4ZWRUeXBlKCk7XG5cdHN0YXRpYyByZWFkb25seSBOVUxMOiBOdWxsVHlwZSA9IG5ldyBOdWxsVHlwZSgpO1xuXHRzdGF0aWMgcmVhZG9ubHkgVk9JRDogVm9pZFR5cGUgPSBuZXcgVm9pZFR5cGUoKTtcblx0c3RhdGljIHJlYWRvbmx5IFZOT0RFOiBWTm9kZVR5cGUgPSBuZXcgVk5vZGVUeXBlKCk7XG5cblx0c3RhdGljIGdldFR5cGUobmFtZTogc3RyaW5nKTogVHlwZSB7XG5cdFx0aWYgKCFPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChQcmltaXRpdmVUeXBlcywgbmFtZS50b1VwcGVyQ2FzZSgpKSkge1xuXHRcdFx0dGhyb3dUeXBlRXJyb3IoYFVua25vd24gcHJpbWl0aXZlIHR5cGUgJHtuYW1lfS5gKTtcblx0XHR9XG5cblx0XHRjb25zdCB0eXBlczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0gVHlwZXM7XG5cdFx0cmV0dXJuIHR5cGVzW25hbWUudG9VcHBlckNhc2UoKV07XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGVWYXJpYWJsZSBleHRlbmRzIFR5cGUge1xuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcblx0XHRzdXBlcihuYW1lKTtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSkge1xuXHRcdHJldHVybiBvdGhlciBpbnN0YW5jZW9mIFR5cGVWYXJpYWJsZVxuXHRcdFx0JiYgdGhpcy5uYW1lID09PSBvdGhlci5uYW1lO1xuXHR9XG5cblx0b3ZlcnJpZGUgYWNjZXB0cygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVHlwZVBhcmFtZXRlclN5bWJvbCB7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblx0cmVhZG9ubHkgdmFyaWFibGVUeXBlOiBUeXBlVmFyaWFibGU7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnZhcmlhYmxlVHlwZSA9IG5ldyBUeXBlVmFyaWFibGUobmFtZSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpZWxkU3ltYm9sIHtcblx0cmVhZG9ubHkgbm9kZTogQVNURmllbGROb2RlO1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGZpZWxkVHlwZTogVHlwZTtcblx0cmVhZG9ubHkgaXNTdGF0aWM6IGJvb2xlYW4gPSBmYWxzZTtcblx0cmVhZG9ubHkgaXNQcml2YXRlOiBib29sZWFuID0gZmFsc2U7XG5cdHJlYWRvbmx5IGlzUHVibGljOiBib29sZWFuID0gZmFsc2U7XG5cdHJlYWRvbmx5IGlzUmVhZG9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcblx0b3duZXI6IENsYXNzU3ltYm9sIHwgSW50ZXJmYWNlU3ltYm9sIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3Iobm9kZTogQVNURmllbGROb2RlLCBmaWVsZFR5cGU6IFR5cGUpIHtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHRcdHRoaXMubmFtZSA9IG5vZGUubmFtZTtcblx0XHR0aGlzLmZpZWxkVHlwZSA9IGZpZWxkVHlwZTtcblx0XHR0aGlzLmlzU3RhdGljID0gbm9kZS5tb2RpZmllcnMuc3RhdGljO1xuXHRcdHRoaXMuaXNQcml2YXRlID0gbm9kZS5tb2RpZmllcnMucHJpdmF0ZTtcblx0XHR0aGlzLmlzUHVibGljID0gbm9kZS5tb2RpZmllcnMucHVibGljO1xuXHRcdHRoaXMuaXNSZWFkb25seSA9IG5vZGUubW9kaWZpZXJzLnJlYWRvbmx5O1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJTeW1ib2wge1xuXHRyZWFkb25seSBub2RlOiBBU1RQYXJhbWV0ZXJOb2RlIHwgbnVsbDtcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXHRyZWFkb25seSBwYXJhbWV0ZXJUeXBlOiBUeXBlO1xuXHRyZWFkb25seSBkZWZhdWx0VHlwZTogVHlwZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZTogVHlwZSwgZGVmYXVsdFZhbHVlOiBUeXBlIHwgbnVsbCA9IG51bGwsIG5vZGU6IEFTVFBhcmFtZXRlck5vZGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5wYXJhbWV0ZXJUeXBlID0gdHlwZTtcblx0XHR0aGlzLmRlZmF1bHRUeXBlID0gZGVmYXVsdFZhbHVlO1xuXHRcdHRoaXMubm9kZSA9IG5vZGU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE1ldGhvZFN5bWJvbCB7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblx0cmVhZG9ubHkgbm9kZTogQVNUTWV0aG9kTm9kZTtcblx0cmVhZG9ubHkgaXNTdGF0aWM6IGJvb2xlYW4gPSBmYWxzZTtcblx0cmVhZG9ubHkgaXNQcml2YXRlOiBib29sZWFuID0gZmFsc2U7XG5cdHJlYWRvbmx5IGlzUHVibGljOiBib29sZWFuID0gZmFsc2U7XG5cblx0dHlwZVBhcmFtZXRlclN5bWJvbHM6IFR5cGVQYXJhbWV0ZXJTeW1ib2xbXSA9IFtdO1xuXHRwYXJhbWV0ZXJTeW1ib2xzOiBQYXJhbWV0ZXJTeW1ib2xbXSA9IFtdO1xuXHRyZXR1cm5UeXBlOiBUeXBlID0gVHlwZXMuTUlYRUQ7XG5cblx0b3duZXI6IENsYXNzU3ltYm9sIHwgSW50ZXJmYWNlU3ltYm9sIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3Iobm9kZTogQVNUTWV0aG9kTm9kZSkge1xuXHRcdHRoaXMubmFtZSA9IG5vZGUubmFtZTtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHRcdHRoaXMuaXNTdGF0aWMgPSBub2RlLm1vZGlmaWVycy5zdGF0aWM7XG5cdFx0dGhpcy5pc1ByaXZhdGUgPSBub2RlLm1vZGlmaWVycy5wcml2YXRlO1xuXHRcdHRoaXMuaXNQdWJsaWMgPSBub2RlLm1vZGlmaWVycy5wdWJsaWM7XG5cdH1cblxuXHRnZXQgYm9keSgpOiBBU1ROb2RlW10ge1xuXHRcdHJldHVybiB0aGlzLm5vZGUuY2hpbGRyZW47XG5cdH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBPYmplY3RTeW1ib2wge1xuXHRuYW1lOiBzdHJpbmc7XG5cdHR5cGVQYXJhbWV0ZXJTeW1ib2xzOiBUeXBlUGFyYW1ldGVyU3ltYm9sW107XG5cdHN0YXRpY0ZpZWxkU3ltYm9sczogTWFwPHN0cmluZywgRmllbGRTeW1ib2w+O1xuXHRpbnN0YW5jZU1ldGhvZFN5bWJvbHM6IE1hcDxzdHJpbmcsIE1ldGhvZFN5bWJvbD47XG59XG5cbmV4cG9ydCBjbGFzcyBDbGFzc1N5bWJvbCBpbXBsZW1lbnRzIE9iamVjdFN5bWJvbCB7XG5cdHJlYWRvbmx5IG5vZGU6IEFTVENsYXNzTm9kZTtcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXHRyZWFkb25seSBzdXBlckNsYXNzOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuXHRzdXBlckNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCB8IG51bGwgPSBudWxsO1xuXHR0eXBlUGFyYW1ldGVyU3ltYm9sczogVHlwZVBhcmFtZXRlclN5bWJvbFtdID0gW107XG5cdGluc3RhbmNlRmllbGRTeW1ib2xzOiBNYXA8c3RyaW5nLCBGaWVsZFN5bWJvbD4gPSBuZXcgTWFwKCk7XG5cdHN0YXRpY0ZpZWxkU3ltYm9sczogTWFwPHN0cmluZywgRmllbGRTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRpbnN0YW5jZU1ldGhvZFN5bWJvbHM6IE1hcDxzdHJpbmcsIE1ldGhvZFN5bWJvbD4gPSBuZXcgTWFwKCk7XG5cdHN0YXRpY01ldGhvZFN5bWJvbHM6IE1hcDxzdHJpbmcsIE1ldGhvZFN5bWJvbD4gPSBuZXcgTWFwKCk7XG5cdGNvbnN0cnVjdG9yTWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wgfCBudWxsID0gbnVsbDtcblx0aW1wbGVtZW50c0ludGVyZmFjZXM6IEludGVyZmFjZVJlZlR5cGVbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKG5vZGU6IEFTVENsYXNzTm9kZSkge1xuXHRcdHRoaXMubm9kZSA9IG5vZGU7XG5cdFx0dGhpcy5uYW1lID0gbm9kZS5uYW1lO1xuXHRcdHRoaXMuc3VwZXJDbGFzcyA9IG5vZGUuc3VwZXJDbGFzcz8ubmFtZSA/PyBudWxsO1xuXHR9XG5cblx0cmVzb2x2ZUluc3RhbmNlRmllbGRTeW1ib2wobmFtZTogc3RyaW5nKTogRmllbGRTeW1ib2wgfCBudWxsIHtcblx0XHRpZiAodGhpcy5pbnN0YW5jZUZpZWxkU3ltYm9scy5oYXMobmFtZSkpIHtcblx0XHRcdHJldHVybiB0aGlzLmluc3RhbmNlRmllbGRTeW1ib2xzLmdldChuYW1lKSB8fCBudWxsO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnN1cGVyQ2xhc3MpIHtcblx0XHRcdHJldHVybiB0aGlzLnN1cGVyQ2xhc3NTeW1ib2w/LnJlc29sdmVJbnN0YW5jZUZpZWxkU3ltYm9sKG5hbWUpIHx8IG51bGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXNvbHZlU3RhdGljRmllbGRTeW1ib2wobmFtZTogc3RyaW5nKTogRmllbGRTeW1ib2wgfCBudWxsIHtcblx0XHRpZiAodGhpcy5zdGF0aWNGaWVsZFN5bWJvbHMuaGFzKG5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdGF0aWNGaWVsZFN5bWJvbHMuZ2V0KG5hbWUpIHx8IG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc3VwZXJDbGFzcykge1xuXHRcdFx0cmV0dXJuIHRoaXMuc3VwZXJDbGFzc1N5bWJvbD8ucmVzb2x2ZVN0YXRpY0ZpZWxkU3ltYm9sKG5hbWUpIHx8IG51bGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEludGVyZmFjZVN5bWJvbCBpbXBsZW1lbnRzIE9iamVjdFN5bWJvbCB7XG5cdHJlYWRvbmx5IG5vZGU6IEFTVEludGVyZmFjZU5vZGU7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblxuXHR0eXBlUGFyYW1ldGVyU3ltYm9sczogVHlwZVBhcmFtZXRlclN5bWJvbFtdID0gW107XG5cdHN0YXRpY0ZpZWxkU3ltYm9sczogTWFwPHN0cmluZywgRmllbGRTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRpbnN0YW5jZU1ldGhvZFN5bWJvbHM6IE1hcDxzdHJpbmcsIE1ldGhvZFN5bWJvbD4gPSBuZXcgTWFwKCk7XG5cdGV4dGVuZHNJbnRlcmZhY2VzOiBJbnRlcmZhY2VTeW1ib2xbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKG5vZGU6IEFTVEludGVyZmFjZU5vZGUpIHtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHRcdHRoaXMubmFtZSA9IG5vZGUubmFtZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xhc3NSZWZUeXBlIGV4dGVuZHMgVHlwZSB7XG5cdHJlYWRvbmx5IGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbDtcblx0cmVhZG9ubHkgdHlwZUFyZ3VtZW50czogVHlwZVtdO1xuXG5cdGNvbnN0cnVjdG9yKGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCwgdHlwZUFyZ3VtZW50czogVHlwZVtdID0gW10pIHtcblx0XHRzdXBlcihDbGFzc1JlZlR5cGUuZm9ybWF0U3ltYm9sTmFtZShjbGFzc1N5bWJvbC5uYW1lLCB0eXBlQXJndW1lbnRzKSk7XG5cdFx0dGhpcy5jbGFzc1N5bWJvbCA9IGNsYXNzU3ltYm9sO1xuXHRcdHRoaXMudHlwZUFyZ3VtZW50cyA9IHR5cGVBcmd1bWVudHM7XG5cdH1cblxuXHRzdGF0aWMgZm9ybWF0U3ltYm9sTmFtZShuYW1lOiBzdHJpbmcsIHR5cGVBcmd1bWVudHM6IFR5cGVbXSkge1xuXHRcdGlmICh0eXBlQXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIGBjbGFzc1JlZlR5cGUoJHtuYW1lfSlgO1xuXHRcdH1cblxuXHRcdHJldHVybiBgY2xhc3NSZWZUeXBlKCR7bmFtZX08JHt0eXBlQXJndW1lbnRzLm1hcCh0eXBlID0+IHR5cGUudG9TdHJpbmcoKSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKCcsICcpfT4pYDtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAob3RoZXIgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGVcblx0XHRcdCYmIG90aGVyLmNsYXNzU3ltYm9sID09PSB0aGlzLmNsYXNzU3ltYm9sKTtcblx0fVxuXG5cdG92ZXJyaWRlIGFjY2VwdHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRpZiAoIXRoaXMuZXF1YWxzKG90aGVyKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmIChvdGhlciBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSkge1xuXHRcdFx0aWYgKHRoaXMudHlwZUFyZ3VtZW50cy5sZW5ndGggIT09IG90aGVyLnR5cGVBcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnR5cGVBcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3Qgb3RoZXJUeXBlID0gb3RoZXIudHlwZUFyZ3VtZW50c1tpXTtcblxuXHRcdFx0XHRpZiAoIW90aGVyVHlwZSB8fCAhdGhpcy50eXBlQXJndW1lbnRzW2ldPy5hY2NlcHRzKG90aGVyVHlwZSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2VSZWZUeXBlIGV4dGVuZHMgVHlwZSB7XG5cdHJlYWRvbmx5IGludGVyZmFjZVN5bWJvbDogSW50ZXJmYWNlU3ltYm9sO1xuXHRyZWFkb25seSB0eXBlQXJndW1lbnRzOiBUeXBlW107XG5cblx0Y29uc3RydWN0b3IoaW50ZXJmYWNlU3ltYm9sOiBJbnRlcmZhY2VTeW1ib2wsIHR5cGVBcmd1bWVudHM6IFR5cGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoSW50ZXJmYWNlUmVmVHlwZS5mb3JtYXRTeW1ib2xOYW1lKGludGVyZmFjZVN5bWJvbC5uYW1lLCB0eXBlQXJndW1lbnRzKSk7XG5cdFx0dGhpcy5pbnRlcmZhY2VTeW1ib2wgPSBpbnRlcmZhY2VTeW1ib2w7XG5cdFx0dGhpcy50eXBlQXJndW1lbnRzID0gdHlwZUFyZ3VtZW50cztcblx0fVxuXG5cdHN0YXRpYyBmb3JtYXRTeW1ib2xOYW1lKG5hbWU6IHN0cmluZywgdHlwZUFyZ3VtZW50czogVHlwZVtdKTogc3RyaW5nIHtcblx0XHRpZiAodHlwZUFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBgaW50ZXJmYWNlUmVmVHlwZSgke25hbWV9KWA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGBpbnRlcmZhY2VSZWZUeXBlKCR7bmFtZX08JHt0eXBlQXJndW1lbnRzLm1hcCh0eXBlID0+IHR5cGUudG9TdHJpbmcoKSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbignLCAnKX0+KWA7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gKG90aGVyIGluc3RhbmNlb2YgSW50ZXJmYWNlUmVmVHlwZVxuXHRcdFx0JiYgb3RoZXIuaW50ZXJmYWNlU3ltYm9sID09PSB0aGlzLmludGVyZmFjZVN5bWJvbCk7XG5cdH1cblxuXHRvdmVycmlkZSBhY2NlcHRzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0aWYgKCF0aGlzLmVxdWFscyhvdGhlcikpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAob3RoZXIgaW5zdGFuY2VvZiBJbnRlcmZhY2VSZWZUeXBlKSB7XG5cdFx0XHRpZiAodGhpcy50eXBlQXJndW1lbnRzLmxlbmd0aCAhPT0gb3RoZXIudHlwZUFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHlwZUFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBvdGhlclR5cGUgPSBvdGhlci50eXBlQXJndW1lbnRzW2ldO1xuXG5cdFx0XHRcdGlmICghb3RoZXJUeXBlIHx8ICF0aGlzLnR5cGVBcmd1bWVudHNbaV0/LmFjY2VwdHMob3RoZXJUeXBlKSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIExhbWJkYVR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0cmVhZG9ubHkgcGFyYW1ldGVyU3ltYm9sczogUGFyYW1ldGVyU3ltYm9sW10gPSBbXTtcblx0cmVhZG9ubHkgcmV0dXJuVHlwZTogVHlwZTtcblxuXHRjb25zdHJ1Y3RvcihwYXJhbWV0ZXJzOiBQYXJhbWV0ZXJTeW1ib2xbXSwgcmV0dXJuVHlwZTogVHlwZSkge1xuXHRcdHN1cGVyKExhbWJkYVR5cGUuY3JlYXRlU2lnbmF0dXJlKHBhcmFtZXRlcnMsIHJldHVyblR5cGUpKTtcblx0XHR0aGlzLnBhcmFtZXRlclN5bWJvbHMgPSBwYXJhbWV0ZXJzO1xuXHRcdHRoaXMucmV0dXJuVHlwZSA9IHJldHVyblR5cGU7XG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlU2lnbmF0dXJlKHBhcmFtZXRlcnM6IFBhcmFtZXRlclN5bWJvbFtdLCByZXR1cm5UeXBlOiBUeXBlKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gYGxhbWJkYSgke3BhcmFtZXRlcnMubWFwKHBhcmFtZXRlciA9PiBwYXJhbWV0ZXIucGFyYW1ldGVyVHlwZS50b1N0cmluZygpKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKCcsICcpfSkgLT4gJHtyZXR1cm5UeXBlLnRvU3RyaW5nKCl9KWA7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRpZiAoIShvdGhlciBpbnN0YW5jZW9mIExhbWJkYVR5cGUpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucGFyYW1ldGVyU3ltYm9scy5sZW5ndGggIT09IG90aGVyLnBhcmFtZXRlclN5bWJvbHMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcmFtZXRlclN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IG90aGVyVHlwZSA9IG90aGVyLnBhcmFtZXRlclN5bWJvbHNbaV0/LnBhcmFtZXRlclR5cGU7XG5cblx0XHRcdGlmICghb3RoZXJUeXBlIHx8ICF0aGlzLnBhcmFtZXRlclN5bWJvbHNbaV0/LnBhcmFtZXRlclR5cGUuYWNjZXB0cyhvdGhlclR5cGUpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXR1cm5UeXBlLmFjY2VwdHMob3RoZXIucmV0dXJuVHlwZSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGVTY29wZSB7XG5cdHJlYWRvbmx5IHBhcmVudDogVHlwZVNjb3BlIHwgbnVsbDtcblx0cmVhZG9ubHkgdHlwZXM6IE1hcDxzdHJpbmcsIFR5cGU+ID0gbmV3IE1hcCgpO1xuXHRyZWFkb25seSB0eXBlQmluZGluZ3M6IE1hcDxzdHJpbmcsIFR5cGU+ID0gbmV3IE1hcCgpO1xuXG5cdGN1cnJlbnRPYmplY3RTeW1ib2w6IENsYXNzU3ltYm9sIHwgSW50ZXJmYWNlU3ltYm9sIHwgbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFR5cGVTY29wZSB8IG51bGwgPSBudWxsKSB7XG5cdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cdFx0dGhpcy5jdXJyZW50T2JqZWN0U3ltYm9sID0gcGFyZW50Py5jdXJyZW50T2JqZWN0U3ltYm9sID8/IG51bGw7XG5cdH1cblxuXHRkZWZpbmVUeXBlKG5hbWU6IHN0cmluZywgdHlwZTogVHlwZSk6IHZvaWQge1xuXHRcdHRoaXMudHlwZXMuc2V0KG5hbWUsIHR5cGUpO1xuXHR9XG5cblx0ZGVmaW5lVHlwZUJpbmRpbmcobmFtZTogc3RyaW5nLCB0eXBlVmFyaWFibGU6IFR5cGVWYXJpYWJsZSk6IHZvaWQge1xuXHRcdHRoaXMudHlwZUJpbmRpbmdzLnNldChuYW1lLCB0eXBlVmFyaWFibGUpO1xuXHR9XG5cblx0aGFzVHlwZShuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy50eXBlcy5oYXMobmFtZSkgfHwgdGhpcy5wYXJlbnQ/Lmhhc1R5cGUobmFtZSkgfHwgZmFsc2U7XG5cdH1cblxuXHRoYXNUeXBlQmluZGluZyhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy50eXBlQmluZGluZ3MuaGFzKG5hbWUpIHx8IHRoaXMucGFyZW50Py5oYXNUeXBlQmluZGluZyhuYW1lKSB8fCBmYWxzZTtcblx0fVxuXG5cdGdldFR5cGUobmFtZTogc3RyaW5nKTogVHlwZSB7XG5cdFx0aWYgKHRoaXMudHlwZXMuaGFzKG5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50eXBlcy5nZXQobmFtZSkgfHwgVHlwZXMuTlVMTDtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMucGFyZW50Py5nZXRUeXBlKG5hbWUpIHx8IFR5cGVzLk5VTEw7XG5cdH1cblxuXHRnZXRUeXBlQmluZGluZyhuYW1lOiBzdHJpbmcpOiBUeXBlIHtcblx0XHRpZiAodGhpcy50eXBlQmluZGluZ3MuaGFzKG5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50eXBlQmluZGluZ3MuZ2V0KG5hbWUpIHx8IFR5cGVzLk5VTEw7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnBhcmVudD8uZ2V0VHlwZUJpbmRpbmcobmFtZSkgfHwgVHlwZXMuTlVMTDtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gd3JhcFR5cGUodHlwZU5vZGU6IEFTVFR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIHNjb3BlOiBUeXBlU2NvcGUgfCBudWxsID0gbnVsbCk6IFR5cGUge1xuXHRsZXQgYmFzZVR5cGUgPSByZXNvbHZlQmFzZVR5cGUodHlwZU5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBzY29wZSk7XG5cdGlmIChiYXNlVHlwZSkge1xuXHRcdGlmICghKGJhc2VUeXBlIGluc3RhbmNlb2YgTnVsbGFibGVUeXBlKSAmJiB0eXBlTm9kZS5udWxsYWJsZSkge1xuXHRcdFx0cmV0dXJuIG5ldyBOdWxsYWJsZVR5cGUoYmFzZVR5cGUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBiYXNlVHlwZTtcblx0fVxuXG5cdHRocm93VHlwZUVycm9yKGBDb3VsZCBub3QgcmVzb2x2ZSB0eXBlICR7dHlwZU5vZGUubmFtZX0uYCwgdHlwZU5vZGUuc3Bhbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlQmFzZVR5cGUodHlwZU5vZGU6IEFTVFR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIHNjb3BlOiBUeXBlU2NvcGUgfCBudWxsID0gbnVsbCk6IFR5cGUge1xuXHRzd2l0Y2ggKHR5cGVOb2RlLmtpbmQpIHtcblx0XHRjYXNlIEFTVFR5cGVOb2RlLktJTkRfU0lNUExFOiB7XG5cdFx0XHRpZiAoc2NvcGUgJiYgc2NvcGUuaGFzVHlwZUJpbmRpbmcodHlwZU5vZGUubmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIHNjb3BlLmdldFR5cGVCaW5kaW5nKHR5cGVOb2RlLm5hbWUpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAob2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiByZXNvbHZlUmVmVHlwZSh0eXBlTm9kZSwgb2JqZWN0UmVnaXN0cnkpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoUHJpbWl0aXZlVHlwZXMuaGFzVHlwZSh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzb2x2ZVByaW1pdGl2ZVR5cGUodHlwZU5vZGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbmV3IFR5cGVWYXJpYWJsZSh0eXBlTm9kZS5uYW1lKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1RUeXBlTm9kZS5LSU5EX0dFTkVSSUM6IHtcblx0XHRcdGlmICghb2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0XHRcdHRocm93VHlwZUVycm9yKGBTeW1ib2wgJHt0eXBlTm9kZS5uYW1lfSBpcyBub3QgYSBjbGFzcyByZWZlcmVuY2UuYCwgdHlwZU5vZGUuc3Bhbik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzb2x2ZUdlbmVyaWNSZWZUeXBlKHR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeSk7XG5cdFx0fVxuXHRcdGNhc2UgQVNUVHlwZU5vZGUuS0lORF9MQU1CREE6IHtcblx0XHRcdHJldHVybiByZXNvbHZlTGFtYmRhVHlwZSh0eXBlTm9kZSwgb2JqZWN0UmVnaXN0cnkpO1xuXHRcdH1cblx0XHRkZWZhdWx0OiB7XG5cdFx0XHR0aHJvd1R5cGVFcnJvcihcblx0XHRcdFx0YEludmFsaWQgdHlwZSBhbm5vdGF0aW9uLCBraW5kICR7dHlwZU5vZGUua2luZH0uYCxcblx0XHRcdFx0dHlwZU5vZGUuc3BhblxuXHRcdFx0KTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVSZWZUeXBlKHR5cGVOb2RlOiBBU1RUeXBlTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogQ2xhc3NSZWZUeXBlIHwgSW50ZXJmYWNlUmVmVHlwZSB8IFR5cGUge1xuXHRpZiAodHlwZU5vZGUudHlwZUFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0dGhyb3dUeXBlRXJyb3IoYEdlbmVyaWMgY2xhc3MgJHt0eXBlTm9kZS5uYW1lfSBjYW5ub3QgaGF2ZSB0eXBlIGFyZ3VtZW50cy5gLCB0eXBlTm9kZS5zcGFuKTtcblx0fVxuXG5cdGlmIChvYmplY3RSZWdpc3RyeS50eXBlcy5jbGFzc1N5bWJvbHMuaGFzKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0cmV0dXJuIG5ldyBDbGFzc1JlZlR5cGUob2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2wodHlwZU5vZGUubmFtZSkpO1xuXHR9XG5cblx0aWYgKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmludGVyZmFjZVN5bWJvbHMuaGFzKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0cmV0dXJuIG5ldyBJbnRlcmZhY2VSZWZUeXBlKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldEludGVyYWNlU3ltYm9sKHR5cGVOb2RlLm5hbWUpKTtcblx0fVxuXG5cdHRocm93VHlwZUVycm9yKGBVbmtub3duIGNsYXNzIG9yIGludGVyZmFjZSAke3R5cGVOb2RlLm5hbWV9LmAsIHR5cGVOb2RlLnNwYW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUdlbmVyaWNSZWZUeXBlKHR5cGVOb2RlOiBBU1RUeXBlTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogQ2xhc3NSZWZUeXBlIHwgSW50ZXJmYWNlUmVmVHlwZSB8IFR5cGUge1xuXHRpZiAob2JqZWN0UmVnaXN0cnkudHlwZXMuY2xhc3NTeW1ib2xzLmhhcyh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdHJldHVybiBuZXcgQ2xhc3NSZWZUeXBlKFxuXHRcdFx0b2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2wodHlwZU5vZGUubmFtZSksXG5cdFx0XHR0eXBlTm9kZS50eXBlQXJndW1lbnRzLm1hcCh0eXBlQXJndW1lbnQgPT4gcmVzb2x2ZUJhc2VUeXBlKHR5cGVBcmd1bWVudCwgb2JqZWN0UmVnaXN0cnkpKVxuXHRcdCk7XG5cdH1cblxuXHRpZiAob2JqZWN0UmVnaXN0cnkudHlwZXMuaW50ZXJmYWNlU3ltYm9scy5oYXModHlwZU5vZGUubmFtZSkpIHtcblx0XHRyZXR1cm4gbmV3IEludGVyZmFjZVJlZlR5cGUoXG5cdFx0XHRvYmplY3RSZWdpc3RyeS50eXBlcy5nZXRJbnRlcmFjZVN5bWJvbCh0eXBlTm9kZS5uYW1lKSxcblx0XHRcdHR5cGVOb2RlLnR5cGVBcmd1bWVudHMubWFwKHR5cGVBcmd1bWVudCA9PiByZXNvbHZlQmFzZVR5cGUodHlwZUFyZ3VtZW50LCBvYmplY3RSZWdpc3RyeSkpXG5cdFx0KTtcblx0fVxuXG5cdHRocm93VHlwZUVycm9yKGBVbmtub3duIGNsYXNzIG9yIGludGVyZmFjZSAke3R5cGVOb2RlLm5hbWV9LmAsIHR5cGVOb2RlLnNwYW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVByaW1pdGl2ZVR5cGUodHlwZU5vZGU6IEFTVFR5cGVOb2RlKTogVHlwZSB7XG5cdHJldHVybiBUeXBlcy5nZXRUeXBlKHR5cGVOb2RlLm5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUxhbWJkYVR5cGUodHlwZU5vZGU6IEFTVFR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIHNjb3BlOiBUeXBlU2NvcGUgfCBudWxsID0gbnVsbCk6IExhbWJkYVR5cGUge1xuXHRjb25zdCBwYXJhbWV0ZXJTeW1ib2xzID0gdHlwZU5vZGUucGFyYW1ldGVyVHlwZXMubWFwKFxuXHRcdHR5cGVBbm5vdGF0aW9uID0+IHtcblx0XHRcdHJldHVybiBuZXcgUGFyYW1ldGVyU3ltYm9sKFxuXHRcdFx0XHR0eXBlQW5ub3RhdGlvbi5uYW1lLFxuXHRcdFx0XHR3cmFwVHlwZSh0eXBlQW5ub3RhdGlvbiwgb2JqZWN0UmVnaXN0cnksIHNjb3BlKVxuXHRcdFx0KTtcblx0XHR9XG5cdCk7XG5cblx0cmV0dXJuIG5ldyBMYW1iZGFUeXBlKFxuXHRcdHBhcmFtZXRlclN5bWJvbHMsXG5cdFx0dHlwZU5vZGUucmV0dXJuVHlwZVxuXHRcdFx0PyB3cmFwVHlwZSh0eXBlTm9kZS5yZXR1cm5UeXBlLCBvYmplY3RSZWdpc3RyeSwgc2NvcGUpXG5cdFx0XHQ6IFR5cGVzLk1JWEVEXG5cdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdGl0dXRlVHlwZSh0eXBlOiBUeXBlLCBzdWJzdGl0dXRpb25NYXA6IE1hcDxzdHJpbmcsIFR5cGU+KTogVHlwZSB7XG5cdGlmICh0eXBlIGluc3RhbmNlb2YgVHlwZVZhcmlhYmxlKSB7XG5cdFx0cmV0dXJuIHN1YnN0aXR1dGlvbk1hcC5nZXQodHlwZS5uYW1lKSA/PyB0eXBlO1xuXHR9XG5cblx0aWYgKHR5cGUgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUpIHtcblx0XHRyZXR1cm4gbmV3IENsYXNzUmVmVHlwZShcblx0XHRcdHR5cGUuY2xhc3NTeW1ib2wsXG5cdFx0XHR0eXBlLnR5cGVBcmd1bWVudHMubWFwKHR5cGVBcmd1bWVudCA9PiBzdWJzdGl0dXRlVHlwZSh0eXBlQXJndW1lbnQsIHN1YnN0aXR1dGlvbk1hcCkpXG5cdFx0KTtcblx0fVxuXG5cdGlmICh0eXBlIGluc3RhbmNlb2YgTnVsbGFibGVUeXBlKSB7XG5cdFx0cmV0dXJuIG5ldyBOdWxsYWJsZVR5cGUoc3Vic3RpdHV0ZVR5cGUodHlwZS5pbm5lciwgc3Vic3RpdHV0aW9uTWFwKSk7XG5cdH1cblxuXHRyZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkVHlwZVN1YnN0aXR1dGlvbk1hcCh0eXBlUGFyYW1ldGVyczogVHlwZVBhcmFtZXRlclN5bWJvbFtdLCB0eXBlQXJndW1lbnRzOiBUeXBlW10pOiBNYXA8c3RyaW5nLCBUeXBlPiB7XG5cdGNvbnN0IHN1YnN0aXR1dGlvbk1hcCA9IG5ldyBNYXAoKTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHR5cGVQYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgdHlwZVBhcmFtZXRlcjogVHlwZVBhcmFtZXRlclN5bWJvbCB8IG51bGwgPSB0eXBlUGFyYW1ldGVyc1tpXSB8fCBudWxsO1xuXHRcdGNvbnN0IHR5cGVBcmd1bWVudDogVHlwZSB8IG51bGwgPSB0eXBlQXJndW1lbnRzW2ldIHx8IG51bGw7XG5cblx0XHRpZiAodHlwZVBhcmFtZXRlciAmJiB0eXBlQXJndW1lbnQpIHtcblx0XHRcdHN1YnN0aXR1dGlvbk1hcC5zZXQodHlwZVBhcmFtZXRlci5uYW1lLCB0eXBlQXJndW1lbnQpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdWJzdGl0dXRpb25NYXA7XG59XG4iLAogICAgImltcG9ydCB7Q2xhc3NSZWZUeXBlLCBUeXBlLCBUeXBlc30gZnJvbSBcIi4vdHlwZV9vYmplY3RzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB7dGhyb3dSdW50aW1lRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcblxuZXhwb3J0IGNsYXNzIEF1dG9ib3hlZFR5cGVzIHtcblx0c3RhdGljIE5VTUJFUjogc3RyaW5nID0gJ051bWJlcic7XG5cdHN0YXRpYyBTVFJJTkc6IHN0cmluZyA9ICdTdHJpbmcnO1xuXHRzdGF0aWMgQk9PTEVBTjogc3RyaW5nID0gJ0Jvb2xlYW4nO1xuXG5cdHN0YXRpYyBDTEFTU05BTUVfTUFQOiB7IFtzOiBzdHJpbmddOiBzdHJpbmc7IH0gPSB7XG5cdFx0bnVtYmVyOiBBdXRvYm94ZWRUeXBlcy5OVU1CRVIsXG5cdFx0c3RyaW5nOiBBdXRvYm94ZWRUeXBlcy5TVFJJTkcsXG5cdFx0Ym9vbGVhbjogQXV0b2JveGVkVHlwZXMuQk9PTEVBTlxuXHR9O1xuXG5cdHN0YXRpYyBnZXRDbGFzc05hbWUoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdGNvbnN0IGNsYXNzTmFtZSA9IEF1dG9ib3hlZFR5cGVzLkNMQVNTTkFNRV9NQVBba2V5XTtcblx0XHRpZiAoIWNsYXNzTmFtZSkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYE5vIGNsYXNzIGZvdW5kIGZvciBwcmltaXRpdmUgdHlwZSAke2tleX0uYCk7XG5cdFx0fVxuXHRcdHJldHVybiBjbGFzc05hbWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9ib3hpbmcge1xuXHRzdGF0aWMgQ0xBU1NOQU1FX01BUDogTWFwPFR5cGUsIHN0cmluZz4gPSBuZXcgTWFwKFxuXHRcdFtcblx0XHRcdFtUeXBlcy5OVU1CRVIsIEF1dG9ib3hlZFR5cGVzLk5VTUJFUl0sXG5cdFx0XHRbVHlwZXMuU1RSSU5HLCBBdXRvYm94ZWRUeXBlcy5TVFJJTkddLFxuXHRcdFx0W1R5cGVzLkJPT0xFQU4sIEF1dG9ib3hlZFR5cGVzLkJPT0xFQU5dXG5cdFx0XVxuXHQpO1xuXG5cdHN0YXRpYyBhdXRvYm94SWZOZWVkZWQob2JqZWN0VHlwZTogVHlwZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogQ2xhc3NSZWZUeXBlIHwgVHlwZSB7XG5cdFx0Y29uc3QgY2xhc3NOYW1lID0gQXV0b2JveGluZy5DTEFTU05BTUVfTUFQLmdldChvYmplY3RUeXBlKTtcblx0XHRpZiAoY2xhc3NOYW1lKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENsYXNzUmVmVHlwZShvYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChjbGFzc05hbWUpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gb2JqZWN0VHlwZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0FTVFBhcmFtZXRlck5vZGUsIEFTVFR5cGVOb2RlfSBmcm9tIFwiLi4vY29yZS9hc3RcIjtcbmltcG9ydCB7VFlQRV9FTlVNfSBmcm9tIFwiLi4vY29yZS9ncmFtbWFyXCI7XG5pbXBvcnQge3Rocm93TmF0aXZlRXJyb3J9IGZyb20gXCIuLi9jb3JlL2Vycm9yc1wiO1xuXG5leHBvcnQgY2xhc3MgTmF0aXZlRnVuY3Rpb24ge1xuXHRuYW1lOiBzdHJpbmc7XG5cdHBhcmFtZXRlck5vZGVzOiBBU1RQYXJhbWV0ZXJOb2RlW10gPSBbXTtcblx0cmV0dXJuVHlwZTogQVNUVHlwZU5vZGU7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sIHJldHVyblR5cGU6IEFTVFR5cGVOb2RlKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnBhcmFtZXRlck5vZGVzID0gcGFyYW1ldGVycztcblx0XHR0aGlzLnJldHVyblR5cGUgPSByZXR1cm5UeXBlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBOYXRpdmVGdW5jdGlvblR5cGVSZWdpc3RyeSB7XG5cdGZ1bmN0aW9uczogTWFwPHN0cmluZywgTmF0aXZlRnVuY3Rpb24+ID0gbmV3IE1hcCgpO1xuXG5cdGhhcyhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5mdW5jdGlvbnMuaGFzKG5hbWUpO1xuXHR9XG5cblx0Z2V0KG5hbWU6IHN0cmluZyk6IE5hdGl2ZUZ1bmN0aW9uIHtcblx0XHRjb25zdCBuYXRpdmVGdW5jdGlvbjogTmF0aXZlRnVuY3Rpb24gfCB1bmRlZmluZWQgPSB0aGlzLmZ1bmN0aW9ucy5nZXQobmFtZSk7XG5cdFx0aWYgKCFuYXRpdmVGdW5jdGlvbikge1xuXHRcdFx0dGhyb3dOYXRpdmVFcnJvcihgRnVuY3Rpb24gJHtuYW1lfSBub3QgZm91bmQuYCk7XG5cdFx0fVxuXHRcdHJldHVybiBuYXRpdmVGdW5jdGlvbjtcblx0fVxuXG5cdHNldChuYW1lOiBzdHJpbmcsIHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSwgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGUpOiBOYXRpdmVGdW5jdGlvblR5cGVSZWdpc3RyeSB7XG5cdFx0dGhpcy5mdW5jdGlvbnMuc2V0KG5hbWUsIG5ldyBOYXRpdmVGdW5jdGlvbihuYW1lLCBwYXJhbWV0ZXJzLCByZXR1cm5UeXBlKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE5hdGl2ZUZ1bmN0aW9ucyB7XG5cdHN0YXRpYyBQUklOVCA9ICdwcmludCc7XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj59XG5cdCAqL1xuXHRnZXRHbG9iYWxGdW5jdGlvbnMoKTogeyBba2V5OiBzdHJpbmddOiAoLi4uYXJnczogYW55W10pID0+IGFueSB9IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0W05hdGl2ZUZ1bmN0aW9ucy5QUklOVF06ICguLi5hcmdzKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHRnZXRHbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeSgpOiBOYXRpdmVGdW5jdGlvblR5cGVSZWdpc3RyeSB7XG5cdFx0Y29uc3QgZnVuY3Rpb25zID0gbmV3IE5hdGl2ZUZ1bmN0aW9uVHlwZVJlZ2lzdHJ5KCk7XG5cdFx0ZnVuY3Rpb25zLnNldChcblx0XHRcdE5hdGl2ZUZ1bmN0aW9ucy5QUklOVCxcblx0XHRcdFtwYXJhbWV0ZXIodHlwZShUWVBFX0VOVU0uU1RSSU5HKSwgJ21lc3NhZ2UnKV0sXG5cdFx0XHR0eXBlKFRZUEVfRU5VTS5WT0lEKVxuXHRcdClcblxuXHRcdHJldHVybiBmdW5jdGlvbnM7XG5cdH1cbn1cblxuZnVuY3Rpb24gdHlwZShuYW1lOiBzdHJpbmcsIG51bGxhYmxlID0gZmFsc2UpOiBBU1RUeXBlTm9kZSB7XG5cdHJldHVybiBuZXcgQVNUVHlwZU5vZGUoQVNUVHlwZU5vZGUuS0lORF9TSU1QTEUsIG5hbWUsIG51bGxhYmxlKTtcbn1cblxuZnVuY3Rpb24gcGFyYW1ldGVyKHR5cGVBbm5vdGF0aW9uOiBBU1RUeXBlTm9kZSwgbmFtZTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGFueSA9IG51bGwpOiBBU1RQYXJhbWV0ZXJOb2RlIHtcblx0cmV0dXJuIG5ldyBBU1RQYXJhbWV0ZXJOb2RlKG5hbWUsIHR5cGVBbm5vdGF0aW9uLCBkZWZhdWx0VmFsdWUpO1xufVxuIiwKICAgICJpbXBvcnQge1xuXHRBU1RBcnJheU5vZGUsXG5cdEFTVEJpbmFyeU5vZGUsXG5cdEFTVENhbGxOb2RlLFxuXHRBU1RDbGFzc05vZGUsXG5cdEFTVEV4cHJlc3Npb25Ob2RlLFxuXHRBU1RGaWVsZE5vZGUsXG5cdEFTVEZvcmVhY2hOb2RlLFxuXHRBU1RJbmRleE5vZGUsXG5cdEFTVEludGVyZmFjZU5vZGUsXG5cdEFTVExhbWJkYU5vZGUsXG5cdEFTVE1lbWJlck5vZGUsXG5cdEFTVE1ldGhvZE5vZGUsXG5cdEFTVE5ld05vZGUsXG5cdEFTVE5vZGUsXG5cdEFTVE5vZGVUeXBlLFxuXHRBU1RQYXJhbWV0ZXJOb2RlLFxuXHRBU1RSZXR1cm5Ob2RlLFxuXHRBU1RUeXBlTm9kZSxcblx0QVNUVW5hcnlOb2RlLFxuXHRBU1RWYXJpYWJsZU5vZGUsXG5cdEFTVFZEb21Ob2RlXG59IGZyb20gJy4uL2FzdC50cyc7XG5pbXBvcnQge1xuXHRidWlsZFR5cGVTdWJzdGl0dXRpb25NYXAsXG5cdENsYXNzUmVmVHlwZSxcblx0Q2xhc3NTeW1ib2wsXG5cdEZpZWxkU3ltYm9sLFxuXHRJbnRlcmZhY2VSZWZUeXBlLFxuXHRJbnRlcmZhY2VTeW1ib2wsXG5cdExhbWJkYVR5cGUsXG5cdE1ldGhvZFN5bWJvbCxcblx0TWl4ZWRUeXBlLFxuXHROdWxsYWJsZVR5cGUsXG5cdFBhcmFtZXRlclN5bWJvbCxcblx0UHJpbWl0aXZlQ2xhc3NUeXBlcyxcblx0c3Vic3RpdHV0ZVR5cGUsXG5cdFR5cGUsXG5cdFR5cGVQYXJhbWV0ZXJTeW1ib2wsXG5cdFR5cGVzLFxuXHRUeXBlU2NvcGUsXG5cdFR5cGVWYXJpYWJsZSxcblx0d3JhcFR5cGVcbn0gZnJvbSBcIi4vdHlwZV9vYmplY3RzXCI7XG5pbXBvcnQge0F1dG9ib3hpbmd9IGZyb20gXCIuL2F1dG9ib3hpbmdcIjtcbmltcG9ydCB7TmF0aXZlRnVuY3Rpb24sIE5hdGl2ZUZ1bmN0aW9uc30gZnJvbSBcIi4uLy4uL2xpYnJhcnkvbmF0aXZlX2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHtHUkFNTUFSfSBmcm9tIFwiLi4vZ3JhbW1hclwiO1xuaW1wb3J0IHt0aHJvd1R5cGVFcnJvcn0gZnJvbSBcIi4uL2Vycm9ycy50c1wiXG5pbXBvcnQge0NsYXNzRGVmaW5pdGlvbiwgSW50ZXJmYWNlRGVmaW5pdGlvbn0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuXG5cbmNvbnN0IGdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5ID0gbmV3IE5hdGl2ZUZ1bmN0aW9ucygpXG5cdC5nZXRHbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeSgpO1xuXG5leHBvcnQgY2xhc3MgU3RhdGVtZW50UmVzdWx0IHtcblx0ZGlkUmV0dXJuOiBib29sZWFuO1xuXHRyZXR1cm5UeXBlOiBUeXBlIHwgbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihkaWRSZXR1cm46IGJvb2xlYW4sIHJldHVyblR5cGU6IFR5cGUgfCBudWxsKSB7XG5cdFx0dGhpcy5kaWRSZXR1cm4gPSBkaWRSZXR1cm47XG5cdFx0dGhpcy5yZXR1cm5UeXBlID0gcmV0dXJuVHlwZTtcblx0fVxuXG5cdHN0YXRpYyB3aXRoUmV0dXJuKHJldHVyblR5cGU6IFR5cGUpOiBTdGF0ZW1lbnRSZXN1bHQge1xuXHRcdHJldHVybiBuZXcgU3RhdGVtZW50UmVzdWx0KHRydWUsIHJldHVyblR5cGUpO1xuXHR9XG5cblx0c3RhdGljIG5vUmV0dXJuKCk6IFN0YXRlbWVudFJlc3VsdCB7XG5cdFx0cmV0dXJuIG5ldyBTdGF0ZW1lbnRSZXN1bHQoZmFsc2UsIG51bGwpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlQ2hlY2tlciB7XG5cdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeTtcblxuXHRjb25zdHJ1Y3RvcihvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpIHtcblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5ID0gb2JqZWN0UmVnaXN0cnk7XG5cdH1cblxuXHRjb2xsZWN0QWxsU3ltYm9sc0Zyb21Ob2RlKGFzdDogQVNUTm9kZSk6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUSW50ZXJmYWNlTm9kZSkge1xuXHRcdFx0XHR0aGlzLnJlZ2lzdGVySW50ZXJmYWNlU3ltYm9sKG5vZGUpXG5cdFx0XHR9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RDbGFzc05vZGUpIHtcblx0XHRcdFx0dGhpcy5yZWdpc3RlckNsYXNzU3ltYm9sKG5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNvbGxlY3RBbGxTeW1ib2xzRnJvbVJlZ2lzdHJ5KG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IHZvaWQge1xuXHRcdGNvbnN0IG9iamVjdERlZmluaXRpb25zOiBNYXBJdGVyYXRvcjxDbGFzc0RlZmluaXRpb24gfCBJbnRlcmZhY2VEZWZpbml0aW9uPiA9IG9iamVjdFJlZ2lzdHJ5XG5cdFx0XHQuZmV0Y2hBbGxPYmplY3REZWZpbml0aW9ucygpXG5cdFx0XHQudmFsdWVzKCk7XG5cblx0XHRmb3IgKGxldCBvYmplY3REZWYgb2Ygb2JqZWN0RGVmaW5pdGlvbnMpIHtcblx0XHRcdGlmIChvYmplY3REZWYgaW5zdGFuY2VvZiBJbnRlcmZhY2VEZWZpbml0aW9uKSB7XG5cdFx0XHRcdHRoaXMucmVnaXN0ZXJJbnRlcmZhY2VTeW1ib2wob2JqZWN0RGVmLm5vZGUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5yZWdpc3RlckNsYXNzU3ltYm9sKG9iamVjdERlZi5ub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjaGVjayhhc3Q6IEFTVE5vZGUpOiB2b2lkIHtcblx0XHR0aGlzLmNvbGxlY3RBbGxTeW1ib2xzRnJvbU5vZGUoYXN0KTtcblx0XHR0aGlzLnZhbGlkYXRlSW5oZXJpdGFuY2UoKTtcblx0XHR0aGlzLmNoZWNrUHJvZ3JhbShhc3QpO1xuXHRcdHRoaXMuY2hlY2tJbnRlcmZhY2VCb2RpZXMoKTtcblx0XHR0aGlzLmNoZWNrQ2xhc3Nlc0JvZGllcygpO1xuXHRcdHRoaXMuY2hlY2tDbGFzc2VzSW1wbGVtZW50cygpO1xuXHR9XG5cblx0cHJpdmF0ZSB2YWxpZGF0ZUluaGVyaXRhbmNlKCkge1xuXHRcdGZvciAoY29uc3QgY2xhc3NTeW1ib2wgb2YgdGhpcy5vYmplY3RSZWdpc3RyeS5jbGFzc2VzLmFsbCgpKSB7XG5cdFx0XHRpZiAoY2xhc3NTeW1ib2wuc3VwZXJDbGFzcyAmJiAhdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5oYXNTeW1ib2woY2xhc3NTeW1ib2wuc3VwZXJDbGFzcykpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYFVua25vd24gc3VwZXJjbGFzcyAke2NsYXNzU3ltYm9sLnN1cGVyQ2xhc3N9YCwgY2xhc3NTeW1ib2wubm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1Byb2dyYW0oYXN0OiBBU1ROb2RlKTogdm9pZCB7XG5cdFx0Y29uc3Qgc2NvcGUgPSBuZXcgVHlwZVNjb3BlKCk7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIGFzdC5jaGlsZHJlbikge1xuXHRcdFx0dGhpcy5jaGVja1N0YXRlbWVudChub2RlLCBzY29wZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0NsYXNzZXNCb2RpZXMoKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBvYmplY3RTeW1ib2wgb2YgdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5hbGxDbGFzc1N5bWJvbHMoKSkge1xuXHRcdFx0Y29uc3QgaW5zdGFuY2VTY29wZSA9IG5ldyBUeXBlU2NvcGUoKTtcblx0XHRcdGluc3RhbmNlU2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCA9IG9iamVjdFN5bWJvbDtcblxuXHRcdFx0b2JqZWN0U3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmZvckVhY2godHlwZVBhcmFtZXRlciA9PiB7XG5cdFx0XHRcdGluc3RhbmNlU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcoXG5cdFx0XHRcdFx0dHlwZVBhcmFtZXRlci5uYW1lLFxuXHRcdFx0XHRcdG5ldyBUeXBlVmFyaWFibGUodHlwZVBhcmFtZXRlci5uYW1lKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmIChvYmplY3RTeW1ib2wuY29uc3RydWN0b3JNZXRob2RTeW1ib2wpIHtcblx0XHRcdFx0Y29uc3QgY29uc3RydWN0b3JTeW1ib2wgPSBvYmplY3RTeW1ib2wuY29uc3RydWN0b3JNZXRob2RTeW1ib2w7XG5cdFx0XHRcdGNvbnN0IGNvbnN0cnVjdG9yU2NvcGUgPSBuZXcgVHlwZVNjb3BlKGluc3RhbmNlU2NvcGUpO1xuXG5cdFx0XHRcdG9iamVjdFN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5mb3JFYWNoKHR5cGVQYXJhbWV0ZXJTeW1ib2wgPT4ge1xuXHRcdFx0XHRcdGNvbnN0cnVjdG9yU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcoXG5cdFx0XHRcdFx0XHR0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUsXG5cdFx0XHRcdFx0XHRuZXcgVHlwZVZhcmlhYmxlKHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRmb3IgKGNvbnN0IHBhcmFtZXRlclN5bWJvbCBvZiBjb25zdHJ1Y3RvclN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzKSB7XG5cdFx0XHRcdFx0Y29uc3RydWN0b3JTY29wZS5kZWZpbmVUeXBlKHBhcmFtZXRlclN5bWJvbC5uYW1lLCBwYXJhbWV0ZXJTeW1ib2wucGFyYW1ldGVyVHlwZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmNoZWNrQm9keShjb25zdHJ1Y3RvclN5bWJvbC5ib2R5LCBjb25zdHJ1Y3RvclNjb3BlKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChjb25zdCBtZXRob2RTeW1ib2wgb2Ygb2JqZWN0U3ltYm9sLmluc3RhbmNlTWV0aG9kU3ltYm9scy52YWx1ZXMoKSkge1xuXHRcdFx0XHRjb25zdCBtZXRob2RTY29wZSA9IG5ldyBUeXBlU2NvcGUoaW5zdGFuY2VTY29wZSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmZvckVhY2godHlwZVBhcmFtZXRlclN5bWJvbCA9PiB7XG5cdFx0XHRcdFx0bWV0aG9kU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcoXG5cdFx0XHRcdFx0XHR0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUsXG5cdFx0XHRcdFx0XHRuZXcgVHlwZVZhcmlhYmxlKHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRmb3IgKGNvbnN0IHBhcmFtZXRlclN5bWJvbCBvZiBtZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9scykge1xuXHRcdFx0XHRcdG1ldGhvZFNjb3BlLmRlZmluZVR5cGUocGFyYW1ldGVyU3ltYm9sLm5hbWUsIHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGhhc0JvZHkgPSBtZXRob2RTeW1ib2wuYm9keSAmJiBtZXRob2RTeW1ib2wuYm9keS5sZW5ndGggPiAwO1xuXHRcdFx0XHRpZiAoaGFzQm9keSkge1xuXHRcdFx0XHRcdGNvbnN0IGFjdHVhbCA9IHRoaXMuY2hlY2tCb2R5KG1ldGhvZFN5bWJvbC5ib2R5LCBtZXRob2RTY29wZSk7XG5cdFx0XHRcdFx0dGhpcy5jaGVja1JldHVyblR5cGUobWV0aG9kU3ltYm9sLnJldHVyblR5cGUsIGFjdHVhbCwgbWV0aG9kU3ltYm9sLm5vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoY29uc3QgbWV0aG9kU3ltYm9sIG9mIG9iamVjdFN5bWJvbC5zdGF0aWNNZXRob2RTeW1ib2xzLnZhbHVlcygpKSB7XG5cdFx0XHRcdGNvbnN0IHN0YXRpY1Njb3BlID0gbmV3IFR5cGVTY29wZShpbnN0YW5jZVNjb3BlKTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMuZm9yRWFjaCh0eXBlUGFyYW1ldGVyU3ltYm9sID0+IHtcblx0XHRcdFx0XHRzdGF0aWNTY29wZS5kZWZpbmVUeXBlQmluZGluZyhcblx0XHRcdFx0XHRcdHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSxcblx0XHRcdFx0XHRcdG5ldyBUeXBlVmFyaWFibGUodHlwZVBhcmFtZXRlclN5bWJvbC5uYW1lKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGZvciAoY29uc3QgcGFyYW1ldGVyU3ltYm9sIG9mIG1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzKSB7XG5cdFx0XHRcdFx0c3RhdGljU2NvcGUuZGVmaW5lVHlwZShwYXJhbWV0ZXJTeW1ib2wubmFtZSwgcGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgaGFzQm9keSA9IG1ldGhvZFN5bWJvbC5ib2R5ICYmIG1ldGhvZFN5bWJvbC5ib2R5Lmxlbmd0aCA+IDA7XG5cdFx0XHRcdGlmIChoYXNCb2R5KSB7XG5cdFx0XHRcdFx0Y29uc3QgYWN0dWFsID0gdGhpcy5jaGVja0JvZHkobWV0aG9kU3ltYm9sLmJvZHksIHN0YXRpY1Njb3BlKTtcblx0XHRcdFx0XHR0aGlzLmNoZWNrUmV0dXJuVHlwZShtZXRob2RTeW1ib2wucmV0dXJuVHlwZSwgYWN0dWFsLCBtZXRob2RTeW1ib2wubm9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrSW50ZXJmYWNlQm9kaWVzKCk6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qgb2JqZWN0U3ltYm9sIG9mIHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuYWxsSW50ZXJmYWNlU3ltYm9scygpKSB7XG5cdFx0XHRjb25zdCBpbnN0YW5jZVNjb3BlID0gbmV3IFR5cGVTY29wZSgpO1xuXHRcdFx0aW5zdGFuY2VTY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sID0gb2JqZWN0U3ltYm9sO1xuXG5cdFx0XHRvYmplY3RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMuZm9yRWFjaCh0eXBlUGFyYW1ldGVyID0+IHtcblx0XHRcdFx0aW5zdGFuY2VTY29wZS5kZWZpbmVUeXBlQmluZGluZyhcblx0XHRcdFx0XHR0eXBlUGFyYW1ldGVyLm5hbWUsXG5cdFx0XHRcdFx0bmV3IFR5cGVWYXJpYWJsZSh0eXBlUGFyYW1ldGVyLm5hbWUpXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Zm9yIChjb25zdCBtZXRob2RTeW1ib2wgb2Ygb2JqZWN0U3ltYm9sLmluc3RhbmNlTWV0aG9kU3ltYm9scy52YWx1ZXMoKSkge1xuXHRcdFx0XHRjb25zdCBtZXRob2RTY29wZSA9IG5ldyBUeXBlU2NvcGUoaW5zdGFuY2VTY29wZSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmZvckVhY2godHlwZVBhcmFtZXRlclN5bWJvbCA9PiB7XG5cdFx0XHRcdFx0bWV0aG9kU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcoXG5cdFx0XHRcdFx0XHR0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUsXG5cdFx0XHRcdFx0XHRuZXcgVHlwZVZhcmlhYmxlKHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRmb3IgKGNvbnN0IHBhcmFtZXRlclN5bWJvbCBvZiBtZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9scykge1xuXHRcdFx0XHRcdG1ldGhvZFNjb3BlLmRlZmluZVR5cGUocGFyYW1ldGVyU3ltYm9sLm5hbWUsIHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGhhc0JvZHkgPSBtZXRob2RTeW1ib2wuYm9keSAmJiBtZXRob2RTeW1ib2wuYm9keS5sZW5ndGggPiAwO1xuXHRcdFx0XHRpZiAoaGFzQm9keSkge1xuXHRcdFx0XHRcdGNvbnN0IGFjdHVhbCA9IHRoaXMuY2hlY2tCb2R5KG1ldGhvZFN5bWJvbC5ib2R5LCBtZXRob2RTY29wZSk7XG5cdFx0XHRcdFx0dGhpcy5jaGVja1JldHVyblR5cGUobWV0aG9kU3ltYm9sLnJldHVyblR5cGUsIGFjdHVhbCwgbWV0aG9kU3ltYm9sLm5vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0NsYXNzZXNJbXBsZW1lbnRzKCk6IHZvaWQge1xuXHRcdGZvciAoY29uc3QgY2xhc3NTeW1ib2wgb2YgdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5hbGxDbGFzc1N5bWJvbHMoKSkge1xuXHRcdFx0Zm9yIChjb25zdCBpbnRlcmZhY2VSZWZUeXBlIG9mIGNsYXNzU3ltYm9sLmltcGxlbWVudHNJbnRlcmZhY2VzKSB7XG5cdFx0XHRcdHRoaXMuY2hlY2tJbXBsZW1lbnRzSW50ZXJmYWNlKGNsYXNzU3ltYm9sLCBpbnRlcmZhY2VSZWZUeXBlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrSW1wbGVtZW50c0ludGVyZmFjZShjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wsIGludGVyZmFjZVJlZlR5cGU6IEludGVyZmFjZVJlZlR5cGUpOiB2b2lkIHtcblx0XHRjb25zdCBpbnRlcmZhY2VTeW1ib2wgPSBpbnRlcmZhY2VSZWZUeXBlLmludGVyZmFjZVN5bWJvbDtcblxuXHRcdGNvbnN0IHN1YnN0aXR1dGlvbk1hcCA9IGJ1aWxkVHlwZVN1YnN0aXR1dGlvbk1hcChcblx0XHRcdGludGVyZmFjZVN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scyxcblx0XHRcdGludGVyZmFjZVJlZlR5cGUudHlwZUFyZ3VtZW50c1xuXHRcdCk7XG5cblx0XHRmb3IgKGNvbnN0IGludGVyZmFjZU1ldGhvZFN5bWJvbCBvZiBpbnRlcmZhY2VTeW1ib2wuaW5zdGFuY2VNZXRob2RTeW1ib2xzLnZhbHVlcygpKSB7XG5cdFx0XHRjb25zdCBjbGFzc01ldGhvZFN5bWJvbCA9IHRoaXMucmVzb2x2ZUluc3RhbmNlTWV0aG9kZShcblx0XHRcdFx0Y2xhc3NTeW1ib2wsXG5cdFx0XHRcdGludGVyZmFjZU1ldGhvZFN5bWJvbC5uYW1lXG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAoIWNsYXNzTWV0aG9kU3ltYm9sKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKFxuXHRcdFx0XHRcdGBDbGFzcyAke2NsYXNzU3ltYm9sLm5hbWV9IGRvZXMgbm90IGltcGxlbWVudCBtZXRob2QgJHtpbnRlcmZhY2VNZXRob2RTeW1ib2wubmFtZX0gZnJvbSBpbnRlcmZhY2UgJHtpbnRlcmZhY2VTeW1ib2wubmFtZX1gLFxuXHRcdFx0XHRcdGNsYXNzU3ltYm9sLm5vZGVcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5jaGVja01ldGhvZENvbXBhdGliaWxpdHkoXG5cdFx0XHRcdGNsYXNzTWV0aG9kU3ltYm9sLFxuXHRcdFx0XHRpbnRlcmZhY2VNZXRob2RTeW1ib2wsXG5cdFx0XHRcdHN1YnN0aXR1dGlvbk1hcFxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrTWV0aG9kQ29tcGF0aWJpbGl0eShjbGFzc01ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sLCBpbnRlcmZhY2VNZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCwgc3Vic3RpdHV0aW9uTWFwOiBNYXA8c3RyaW5nLCBUeXBlPik6IHZvaWQge1xuXHRcdGlmIChjbGFzc01ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aCAhPT0gaW50ZXJmYWNlTWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgTWV0aG9kICR7Y2xhc3NNZXRob2RTeW1ib2wubmFtZX0gaGFzIHdyb25nIHBhcmFtZXRlciBjb3VudGApO1xuXHRcdH1cblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgaW50ZXJmYWNlTWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHBhcmFtZXRlclN5bWJvbDogUGFyYW1ldGVyU3ltYm9sIHwgbnVsbCA9IGludGVyZmFjZU1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzW2ldIHx8IG51bGw7XG5cblx0XHRcdGlmICghcGFyYW1ldGVyU3ltYm9sKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBNZXRob2QgJHtjbGFzc01ldGhvZFN5bWJvbC5uYW1lfSBoYXMgdG9vIG1hbnkgcGFyYW1ldGVyc2ApO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZXhwZWN0ZWRUeXBlOiBUeXBlID0gc3Vic3RpdHV0ZVR5cGUocGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGUsIHN1YnN0aXR1dGlvbk1hcCk7XG5cblx0XHRcdGNvbnN0IGFjdHVhbFR5cGU6IFR5cGUgPSBwYXJhbWV0ZXJTeW1ib2wucGFyYW1ldGVyVHlwZTtcblxuXHRcdFx0aWYgKCFleHBlY3RlZFR5cGUuYWNjZXB0cyhhY3R1YWxUeXBlKSkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgUGFyYW1ldGVyICR7aSArIDF9IG9mICR7Y2xhc3NNZXRob2RTeW1ib2wubmFtZX0gaW5jb21wYXRpYmxlIHdpdGggaW50ZXJmYWNlYCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgZXhwZWN0ZWRSZXR1cm46IFR5cGUgPSBzdWJzdGl0dXRlVHlwZShpbnRlcmZhY2VNZXRob2RTeW1ib2wucmV0dXJuVHlwZSwgc3Vic3RpdHV0aW9uTWFwKTtcblxuXHRcdGlmICghZXhwZWN0ZWRSZXR1cm4uYWNjZXB0cyhjbGFzc01ldGhvZFN5bWJvbC5yZXR1cm5UeXBlKSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFJldHVybiB0eXBlIG9mICR7Y2xhc3NNZXRob2RTeW1ib2wubmFtZX0gaW5jb21wYXRpYmxlIHdpdGggaW50ZXJmYWNlYCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1N0YXRlbWVudChub2RlOiBBU1ROb2RlLCBzY29wZTogVHlwZVNjb3BlKTogU3RhdGVtZW50UmVzdWx0IHtcblx0XHRzd2l0Y2ggKG5vZGUudHlwZSkge1xuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5SRVRVUk46XG5cdFx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUUmV0dXJuTm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiBTdGF0ZW1lbnRSZXN1bHQud2l0aFJldHVybihcblx0XHRcdFx0XHRcdHRoaXMuY2hlY2tFeHByZXNzaW9uKG5vZGUuYXJndW1lbnQsIHNjb3BlKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLlZBUklBQkxFOlxuXHRcdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVFZhcmlhYmxlTm9kZSkge1xuXHRcdFx0XHRcdHRoaXMuY2hlY2tWYXJpYWJsZShub2RlLCBzY29wZSk7XG5cdFx0XHRcdFx0cmV0dXJuIFN0YXRlbWVudFJlc3VsdC5ub1JldHVybigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5GT1JFQUNIOlxuXHRcdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEZvcmVhY2hOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFN0YXRlbWVudFJlc3VsdC53aXRoUmV0dXJuKFxuXHRcdFx0XHRcdFx0dGhpcy5jaGVja0ZvcmVhY2gobm9kZSwgc2NvcGUpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuRVhQUkVTU0lPTjpcblx0XHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RFeHByZXNzaW9uTm9kZSkge1xuXHRcdFx0XHRcdHRoaXMuY2hlY2tFeHByZXNzaW9uKG5vZGUuZXhwciwgc2NvcGUpO1xuXHRcdFx0XHRcdHJldHVybiBTdGF0ZW1lbnRSZXN1bHQubm9SZXR1cm4oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRyZXR1cm4gU3RhdGVtZW50UmVzdWx0Lm5vUmV0dXJuKCk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrVmFyaWFibGUobm9kZTogQVNUVmFyaWFibGVOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogdm9pZCB7XG5cdFx0Y29uc3QgZGVjbGFyZWRUeXBlOiBUeXBlIHwgbnVsbCA9IG5vZGUudHlwZUFubm90YXRpb25cblx0XHRcdD8gdGhpcy53cmFwVHlwZShub2RlLnR5cGVBbm5vdGF0aW9uLCBzY29wZSlcblx0XHRcdDogbnVsbDtcblxuXHRcdGNvbnN0IGFjdHVhbFR5cGU6IFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLmluaXQsIHNjb3BlLCBkZWNsYXJlZFR5cGUpO1xuXG5cdFx0aWYgKGRlY2xhcmVkVHlwZSAmJiAhZGVjbGFyZWRUeXBlLmFjY2VwdHMoYWN0dWFsVHlwZSkpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBUeXBlIG1pc21hdGNoOiAke2RlY2xhcmVkVHlwZX0gPD4gJHthY3R1YWxUeXBlfWAsIG5vZGUpO1xuXHRcdH1cblxuXHRcdHNjb3BlLmRlZmluZVR5cGUobm9kZS5uYW1lLCBkZWNsYXJlZFR5cGUgPz8gYWN0dWFsVHlwZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrRm9yZWFjaChub2RlOiBBU1RGb3JlYWNoTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGxldCBpdGVyYWJsZVR5cGU6IFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLml0ZXJhYmxlLCBzY29wZSk7XG5cblx0XHRpdGVyYWJsZVR5cGUgPSBBdXRvYm94aW5nLmF1dG9ib3hJZk5lZWRlZChpdGVyYWJsZVR5cGUsIHRoaXMub2JqZWN0UmVnaXN0cnkpO1xuXG5cdFx0aWYgKGl0ZXJhYmxlVHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSAmJiBpdGVyYWJsZVR5cGUuY2xhc3NTeW1ib2wubmFtZSA9PT0gJ0FycmF5Jykge1xuXHRcdFx0aWYgKGl0ZXJhYmxlVHlwZS50eXBlQXJndW1lbnRzLmxlbmd0aCAhPT0gMSkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcignQXJyYXkgaW4gZm9yZWFjaCBtdXNzdCBoYXZlIGV4YWN0bHkgb25lIHR5cGUgYXJndW1lbnQuJywgbm9kZS5pdGVyYWJsZSk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGVsZW1lbnRUeXBlOiBUeXBlIHwgbnVsbCA9IGl0ZXJhYmxlVHlwZS50eXBlQXJndW1lbnRzWzBdIHx8IG51bGw7XG5cblx0XHRcdGlmIChlbGVtZW50VHlwZSA9PT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcignQXJyYXkgaW4gZm9yZWFjaCBtdXN0IGhhdmUgZXhhY3RseSBvbmUgdHlwZSBhcmd1bWVudC4nLCBub2RlLml0ZXJhYmxlKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgbG9vcFNjb3BlID0gbmV3IFR5cGVTY29wZShzY29wZSk7XG5cdFx0XHRsb29wU2NvcGUuZGVmaW5lVHlwZShub2RlLml0ZXJhdG9yLCBlbGVtZW50VHlwZSk7XG5cblx0XHRcdHJldHVybiB0aGlzLmNoZWNrQm9keShub2RlLmJvZHksIGxvb3BTY29wZSk7XG5cblx0XHR9XG5cblx0XHR0aGlzLnR5cGVFcnJvcihgZm9yZWFjaCBleHBlY3RzIEFycmF5PFQ+LCBnb3QgJHtpdGVyYWJsZVR5cGUudG9TdHJpbmcoKX1gLCBub2RlLml0ZXJhYmxlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tFeHByZXNzaW9uKGV4cHI6IEFTVE5vZGUgfCBudWxsLCBzY29wZTogVHlwZVNjb3BlLCBleHBlY3RlZFR5cGU6IFR5cGUgfCBudWxsID0gbnVsbCk6IFR5cGUge1xuXHRcdGlmIChleHByID09PSBudWxsKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcignRXhwcmVzc2lvbiBleHBlY3RlZCwgZ290IG51bGwuJywgZXhwcik7XG5cdFx0fVxuXG5cdFx0c3dpdGNoIChleHByLnR5cGUpIHtcblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuTlVNQkVSOlxuXHRcdFx0XHRyZXR1cm4gVHlwZXMuTlVNQkVSO1xuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLlNUUklORzpcblx0XHRcdFx0cmV0dXJuIFR5cGVzLlNUUklORztcblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5CT09MRUFOOlxuXHRcdFx0XHRyZXR1cm4gVHlwZXMuQk9PTEVBTjtcblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5OVUxMOlxuXHRcdFx0XHRyZXR1cm4gVHlwZXMuTlVMTDtcblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5WRE9NOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUVkRvbU5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja1ZEb21Ob2RlKGV4cHIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkFSUkFZOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQXJyYXlOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tBcnJheUV4cHJlc3Npb24oZXhwciwgc2NvcGUsIGV4cGVjdGVkVHlwZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuSU5ERVg6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RJbmRleE5vZGUpIHtcblx0XHRcdFx0XHRjb25zdCBvYmplY3RUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24oZXhwci5vYmplY3QsIHNjb3BlKTtcblx0XHRcdFx0XHRjb25zdCBpbmRleCA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKGV4cHIuaW5kZXgsIHNjb3BlKTtcblxuXHRcdFx0XHRcdGlmIChvYmplY3RUeXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gb2JqZWN0VHlwZS50eXBlQXJndW1lbnRzWzBdIHx8IFR5cGVzLk1JWEVEO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgaW5kZXggJHtvYmplY3RUeXBlLm5hbWV9IHdpdGggJHtpbmRleC5uYW1lfWAsIGV4cHIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLlVOQVJZOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUVW5hcnlOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tVbmFyeUV4cHJlc3Npb24oZXhwciwgc2NvcGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLk1FTUJFUjoge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja01lbWJlckV4cHJlc3Npb24oZXhwciwgc2NvcGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLlRISVM6IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tUaGlzRXhwcmVzc2lvbihleHByLCBzY29wZSk7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuSURFTlRJRklFUjpcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tJZGVudGlmaWVyRXhwcmVzc2lvbihleHByLCBzY29wZSk7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuTkVXOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTmV3Tm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrTmV3RXhwcmVzc2lvbihleHByLCBzY29wZSwgZXhwZWN0ZWRUeXBlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5CSU5BUlk6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RCaW5hcnlOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tCaW5hcnlFeHByZXNzaW9uKGV4cHIsIHNjb3BlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5MQU1CREE6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RMYW1iZGFOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tMYW1iZGFFeHByZXNzaW9uKGV4cHIsIHNjb3BlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5DQUxMOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQ2FsbE5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0NhbGxFeHByZXNzaW9uKGV4cHIsIHNjb3BlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gVHlwZXMuTUlYRUQ7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQmluYXJ5RXhwcmVzc2lvbihleHByOiBBU1RCaW5hcnlOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0Y29uc3QgbGVmdDogVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKGV4cHIubGVmdCwgc2NvcGUpO1xuXHRcdGNvbnN0IHJpZ2h0OiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24oZXhwci5yaWdodCwgc2NvcGUpO1xuXHRcdGNvbnN0IG9wOiBzdHJpbmcgPSBleHByLm9wZXJhdG9yO1xuXG5cdFx0aWYgKEdSQU1NQVIuQVJJVEhNRVRJQy5pbmNsdWRlcyhvcCkpIHtcblx0XHRcdGlmIChsZWZ0LmFjY2VwdHMoVHlwZXMuTlVNQkVSKSAmJiByaWdodC5hY2NlcHRzKFR5cGVzLk5VTUJFUikpIHtcblx0XHRcdFx0cmV0dXJuIFR5cGVzLk5VTUJFUjtcblx0XHRcdH1cblx0XHRcdGlmIChsZWZ0LmFjY2VwdHMoVHlwZXMuU1RSSU5HKSB8fCByaWdodC5hY2NlcHRzKFR5cGVzLlNUUklORykpIHtcblx0XHRcdFx0cmV0dXJuIFR5cGVzLlNUUklORztcblx0XHRcdH1cblx0XHRcdHRoaXMudHlwZUVycm9yKGBBcml0aG1ldGljIG9wZXJhdG9yICcke29wfScgcmVxdWlyZXMgbnVtYmVyc2AsIGV4cHIpO1xuXHRcdH1cblxuXHRcdGlmIChHUkFNTUFSLkNPTVBBUklTT04uaW5jbHVkZXMob3ApKSB7XG5cdFx0XHRpZiAobGVmdC5hY2NlcHRzKFR5cGVzLk5VTUJFUikgJiYgcmlnaHQuYWNjZXB0cyhUeXBlcy5OVU1CRVIpKSB7XG5cdFx0XHRcdHJldHVybiBUeXBlcy5CT09MRUFOO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENvbXBhcmlzb24gJyR7b3B9JyByZXF1aXJlcyBudW1iZXJzYCwgZXhwcik7XG5cdFx0fVxuXG5cdFx0aWYgKEdSQU1NQVIuRVFVQUxJVFkuaW5jbHVkZXMob3ApKSB7XG5cdFx0XHRpZiAobGVmdC5hY2NlcHRzKHJpZ2h0KSkge1xuXHRcdFx0XHRyZXR1cm4gVHlwZXMuQk9PTEVBTjtcblx0XHRcdH1cblx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgY29tcGFyZSAke2xlZnQubmFtZX0gd2l0aCAke3JpZ2h0Lm5hbWV9YCwgZXhwcik7XG5cdFx0fVxuXG5cdFx0aWYgKEdSQU1NQVIuTE9HSUNBTC5pbmNsdWRlcyhvcCkpIHtcblx0XHRcdGlmIChsZWZ0LmFjY2VwdHMoVHlwZXMuQk9PTEVBTikgJiYgcmlnaHQuYWNjZXB0cyhUeXBlcy5CT09MRUFOKSkge1xuXHRcdFx0XHRyZXR1cm4gVHlwZXMuQk9PTEVBTjtcblx0XHRcdH1cblx0XHRcdHRoaXMudHlwZUVycm9yKGBMb2dpY2FsIG9wZXJhdG9yICcke29wfScgcmVxdWlyZXMgYm9vbGVhbnNgLCBleHByKTtcblx0XHR9XG5cblx0XHR0aGlzLnR5cGVFcnJvcihgSW52YWxpZCBiaW5hcnkgb3BlcmF0aW9uYCwgZXhwcik7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrRmllbGRBY2Nlc3Mobm9kZTogQVNUTWVtYmVyTm9kZSwgY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sLCBmaWVsZFN5bWJvbDogRmllbGRTeW1ib2wsIHNjb3BlOiBUeXBlU2NvcGUpOiB2b2lkIHtcblx0XHRpZiAoZmllbGRTeW1ib2wuaXNQdWJsaWMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIXNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgYWNjZXNzIHByaXZhdGUgbWVtYmVyICR7bm9kZS5wcm9wZXJ0eX0gb2YgJHtjbGFzc1N5bWJvbC5uYW1lfWAsIG5vZGUpO1xuXHRcdH1cblxuXHRcdGlmIChzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sICE9PSBmaWVsZFN5bWJvbC5vd25lcikge1xuXHRcdFx0aWYgKHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgaW5zdGFuY2VvZiBDbGFzc1N5bWJvbFxuXHRcdFx0XHQmJiBzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sLnN1cGVyQ2xhc3NTeW1ib2wgIT09IGZpZWxkU3ltYm9sLm93bmVyKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgYWNjZXNzIHByaXZhdGUgbWVtYmVyICR7bm9kZS5wcm9wZXJ0eX0gb2YgJHtjbGFzc1N5bWJvbC5uYW1lfWAsIG5vZGUpO1xuXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0luc3RhbmNlTWV0aG9kQWNjZXNzKG5vZGU6IEFTVE1lbWJlck5vZGUsIGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCwgbWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wsIHNjb3BlOiBUeXBlU2NvcGUpOiB2b2lkIHtcblx0XHRpZiAobWV0aG9kU3ltYm9sLmlzUHVibGljKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCFzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGFjY2VzcyBwcml2YXRlIG1ldGhvZCAke25vZGUucHJvcGVydHl9IG9mICR7Y2xhc3NTeW1ib2wubmFtZX1gLCBub2RlKTtcblx0XHR9XG5cblx0XHRpZiAoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCAhPT0gbWV0aG9kU3ltYm9sLm93bmVyKSB7XG5cdFx0XHRpZiAoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCBpbnN0YW5jZW9mIENsYXNzU3ltYm9sXG5cdFx0XHRcdCYmIHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wuc3VwZXJDbGFzc1N5bWJvbCAhPT0gbWV0aG9kU3ltYm9sLm93bmVyKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgYWNjZXNzIHByaXZhdGUgbWV0aG9kICR7bm9kZS5wcm9wZXJ0eX0gb2YgJHtjbGFzc1N5bWJvbC5uYW1lfWAsIG5vZGUpO1xuXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1N0YXRpY01ldGhvZEFjY2VzcyhjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wsIG1ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sLCBzY29wZTogVHlwZVNjb3BlKTogdm9pZCB7XG5cdFx0aWYgKCFtZXRob2RTeW1ib2wuaXNTdGF0aWMpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgY2FsbCBpbnN0YW5jZSBtZXRob2QgJHtjbGFzc1N5bWJvbC5uYW1lfS4ke21ldGhvZFN5bWJvbC5uYW1lfSBhcyBzdGF0aWMgbWV0aG9kYCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKG1ldGhvZFN5bWJvbC5pc1B1YmxpYykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICghc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBhY2Nlc3MgcHJpdmF0ZSBtZXRob2QgJHttZXRob2RTeW1ib2wubmFtZX0gb2YgJHtjbGFzc1N5bWJvbC5uYW1lfWAsXG5cdFx0XHQgICAgICAgICAgICAgICBtZXRob2RTeW1ib2wubm9kZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgIT09IG1ldGhvZFN5bWJvbC5vd25lcikge1xuXHRcdFx0aWYgKHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgaW5zdGFuY2VvZiBDbGFzc1N5bWJvbFxuXHRcdFx0XHQmJiBzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sLnN1cGVyQ2xhc3NTeW1ib2wgIT09IG1ldGhvZFN5bWJvbC5vd25lcikge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGFjY2VzcyBwcml2YXRlIG1ldGhvZCAke21ldGhvZFN5bWJvbC5uYW1lfSBvZiAke2NsYXNzU3ltYm9sLm5hbWV9YCxcblx0XHRcdFx0ICAgICAgICAgICAgICAgbWV0aG9kU3ltYm9sLm5vZGUpO1xuXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja01lbWJlckV4cHJlc3Npb24obm9kZTogQVNUTWVtYmVyTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGNvbnN0IG9iamVjdFR5cGU6IFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLm9iamVjdCwgc2NvcGUpO1xuXG5cdFx0aWYgKG9iamVjdFR5cGUgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUpIHtcblx0XHRcdGNvbnN0IGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCA9IG9iamVjdFR5cGUuY2xhc3NTeW1ib2w7XG5cblx0XHRcdGNvbnN0IGluc3RhbmNlRmllbGRTeW1ib2w6IEZpZWxkU3ltYm9sIHwgbnVsbCA9IGNsYXNzU3ltYm9sLnJlc29sdmVJbnN0YW5jZUZpZWxkU3ltYm9sKG5vZGUucHJvcGVydHkpO1xuXHRcdFx0aWYgKGluc3RhbmNlRmllbGRTeW1ib2wpIHtcblx0XHRcdFx0dGhpcy5jaGVja0ZpZWxkQWNjZXNzKG5vZGUsIGNsYXNzU3ltYm9sLCBpbnN0YW5jZUZpZWxkU3ltYm9sLCBzY29wZSk7XG5cdFx0XHRcdHJldHVybiBpbnN0YW5jZUZpZWxkU3ltYm9sLmZpZWxkVHlwZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc3RhdGljRmllbGRTeW1ib2w6IEZpZWxkU3ltYm9sIHwgbnVsbCA9IGNsYXNzU3ltYm9sLnJlc29sdmVTdGF0aWNGaWVsZFN5bWJvbChub2RlLnByb3BlcnR5KTtcblx0XHRcdGlmIChzdGF0aWNGaWVsZFN5bWJvbCkge1xuXHRcdFx0XHR0aGlzLmNoZWNrRmllbGRBY2Nlc3Mobm9kZSwgY2xhc3NTeW1ib2wsIHN0YXRpY0ZpZWxkU3ltYm9sLCBzY29wZSk7XG5cdFx0XHRcdHJldHVybiBzdGF0aWNGaWVsZFN5bWJvbC5maWVsZFR5cGU7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMudHlwZUVycm9yKGBVbmtub3duIG1lbWJlciAke25vZGUucHJvcGVydHl9YCwgbm9kZSk7XG5cdFx0fVxuXG5cdFx0dGhpcy50eXBlRXJyb3IoXCJDYW5ub3QgYWNjZXNzIG1lbWJlciBvZiBub24tb2JqZWN0XCIsIG5vZGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1RoaXNFeHByZXNzaW9uKG5vZGU6IEFTVE5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBDbGFzc1JlZlR5cGUge1xuXHRcdGlmIChzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sIGluc3RhbmNlb2YgQ2xhc3NTeW1ib2wpIHtcblx0XHRcdHJldHVybiBuZXcgQ2xhc3NSZWZUeXBlKHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wpO1xuXHRcdH1cblx0XHR0aGlzLnR5cGVFcnJvcigndGhpcyBvdXRzaWRlIG9mIGNsYXNzJywgbm9kZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrSWRlbnRpZmllckV4cHJlc3Npb24obm9kZTogQVNUTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGlmIChzY29wZS5oYXNUeXBlKG5vZGUubmFtZSkpIHtcblx0XHRcdHJldHVybiBzY29wZS5nZXRUeXBlKG5vZGUubmFtZSk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmhhc1N5bWJvbChub2RlLm5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENsYXNzUmVmVHlwZSh0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKG5vZGUubmFtZSkpO1xuXHRcdH1cblx0XHR0aGlzLnR5cGVFcnJvcihgVW5kZWZpbmVkIGlkZW50aWZpZXIgJHtub2RlLm5hbWV9YCwgbm9kZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrTmV3RXhwcmVzc2lvbihub2RlOiBBU1ROZXdOb2RlLCBzY29wZTogVHlwZVNjb3BlLCBleHBlY3RlZFR5cGU6IFR5cGUgfCBudWxsID0gbnVsbCk6IENsYXNzUmVmVHlwZSB7XG5cdFx0Y29uc3QgY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sID0gdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChub2RlLm5hbWUpO1xuXG5cdFx0bGV0IGluc3RhbmNlVHlwZTtcblx0XHRpZiAobm9kZS50eXBlQW5ub3RhdGlvbi50eXBlQXJndW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHRcdGNvbnN0IHR5cGVBcmd1bWVudHMgPSBub2RlXG5cdFx0XHRcdC50eXBlQW5ub3RhdGlvblxuXHRcdFx0XHQudHlwZUFyZ3VtZW50c1xuXHRcdFx0XHQubWFwKHR5cGVBcmd1bWVudCA9PiB0aGlzLndyYXBUeXBlKHR5cGVBcmd1bWVudCwgc2NvcGUpKTtcblxuXHRcdFx0aWYgKHR5cGVBcmd1bWVudHMubGVuZ3RoICE9PSBjbGFzc1N5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5sZW5ndGgpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYFdyb25nIG51bWJlciBvZiB0eXBlIGFyZ3VtZW50c2AsIG5vZGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRpbnN0YW5jZVR5cGUgPSBuZXcgQ2xhc3NSZWZUeXBlKGNsYXNzU3ltYm9sLCB0eXBlQXJndW1lbnRzKTtcblx0XHR9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSkge1xuXHRcdFx0aW5zdGFuY2VUeXBlID0gZXhwZWN0ZWRUeXBlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpbnN0YW5jZVR5cGUgPSBuZXcgQ2xhc3NSZWZUeXBlKFxuXHRcdFx0XHRjbGFzc1N5bWJvbCxcblx0XHRcdFx0Y2xhc3NTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMubWFwKCgpID0+IFR5cGVzLk1JWEVEKVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAoY2xhc3NTeW1ib2wuY29uc3RydWN0b3JNZXRob2RTeW1ib2wpIHtcblx0XHRcdHRoaXMuY2hlY2tDYWxsQXJndW1lbnRzKGNsYXNzU3ltYm9sLmNvbnN0cnVjdG9yTWV0aG9kU3ltYm9sLCBub2RlLmFyZ3VtZW50cywgc2NvcGUpO1xuXHRcdH1cblxuXHRcdGlmIChleHBlY3RlZFR5cGUgJiYgIWV4cGVjdGVkVHlwZS5hY2NlcHRzKGluc3RhbmNlVHlwZSkpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBUeXBlIG1pc21hdGNoOiAke2V4cGVjdGVkVHlwZX0gPD4gJHtpbnN0YW5jZVR5cGV9YCwgbm9kZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGluc3RhbmNlVHlwZTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tBcnJheUV4cHJlc3Npb24obm9kZTogQVNUQXJyYXlOb2RlLCBzY29wZTogVHlwZVNjb3BlLCBleHBlY3RlZFR5cGU6IFR5cGUgfCBudWxsID0gbnVsbCk6IENsYXNzUmVmVHlwZSB7XG5cblx0XHRpZiAobm9kZS5lbGVtZW50cy5sZW5ndGggPT09IDApIHtcblx0XHRcdGlmIChleHBlY3RlZFR5cGUgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUpIHtcblx0XHRcdFx0ZXhwZWN0ZWRUeXBlID0gZXhwZWN0ZWRUeXBlLnR5cGVBcmd1bWVudHNbMF0gfHwgbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXMubmV3QXJyYXlUeXBlT2YoZXhwZWN0ZWRUeXBlIHx8IFR5cGVzLk1JWEVEKTtcblx0XHR9XG5cblx0XHRjb25zdCBjbGFzc1JlZk5hbWUgPSBQcmltaXRpdmVDbGFzc1R5cGVzLmdldENsYXNzUmVmTmFtZShQcmltaXRpdmVDbGFzc1R5cGVzLkFSUkFZKTtcblxuXHRcdGxldCBleHBlY3RlZFR5cGVPZkl0ZW06IFR5cGU7XG5cdFx0aWYgKGV4cGVjdGVkVHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSAmJiBleHBlY3RlZFR5cGUuY2xhc3NTeW1ib2wubmFtZSA9PT0gY2xhc3NSZWZOYW1lKSB7XG5cdFx0XHRleHBlY3RlZFR5cGVPZkl0ZW0gPSBleHBlY3RlZFR5cGUudHlwZUFyZ3VtZW50c1swXSB8fCBUeXBlcy5NSVhFRDtcblx0XHR9IGVsc2UgaWYgKG5vZGUuZWxlbWVudHNbMF0pIHtcblx0XHRcdGV4cGVjdGVkVHlwZU9mSXRlbSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKG5vZGUuZWxlbWVudHNbMF0sIHNjb3BlLCBleHBlY3RlZFR5cGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcignQXJyYXkgZXhwcmVzc2lvbiBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIGVsZW1lbnQnLCBub2RlKTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGl0ZW0gb2Ygbm9kZS5lbGVtZW50cykge1xuXHRcdFx0Y29uc3QgYWN0dWFsVHlwZU9mSXRlbTogVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKGl0ZW0sIHNjb3BlLCBleHBlY3RlZFR5cGVPZkl0ZW0pO1xuXHRcdFx0aWYgKCFleHBlY3RlZFR5cGVPZkl0ZW0uYWNjZXB0cyhhY3R1YWxUeXBlT2ZJdGVtKSkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihcblx0XHRcdFx0XHRgQXJyYXkgZWxlbWVudHMgbXVzdCBoYXZlIHNhbWUgdHlwZSwgZ290ICR7ZXhwZWN0ZWRUeXBlT2ZJdGVtfSBhbmQgJHthY3R1YWxUeXBlT2ZJdGVtfWAsXG5cdFx0XHRcdFx0bm9kZVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLm5ld0FycmF5VHlwZU9mKGV4cGVjdGVkVHlwZU9mSXRlbSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrVW5hcnlFeHByZXNzaW9uKG5vZGU6IEFTVFVuYXJ5Tm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGNvbnN0IG9wZXJhbmQgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLmFyZ3VtZW50LCBzY29wZSk7XG5cdFx0Y29uc3Qgb3AgPSBub2RlLm9wZXJhdG9yO1xuXHRcdGlmIChvcCA9PT0gR1JBTU1BUi5FWENMQU1BVElPTl9NQVJLKSB7XG5cdFx0XHRpZiAob3BlcmFuZC5lcXVhbHMoVHlwZXMuQk9PTEVBTikpIHtcblx0XHRcdFx0cmV0dXJuIFR5cGVzLkJPT0xFQU47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgVW5hcnkgJyEnIHJlcXVpcmVzIGJvb2xlYW4sIGdvdCAke29wZXJhbmQubmFtZX1gLCBub2RlKTtcblx0XHR9XG5cdFx0dGhpcy50eXBlRXJyb3IoYEludmFsaWQgdW5hcnkgb3BlcmF0b3IgJHtvcH1gLCBub2RlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tMYW1iZGFFeHByZXNzaW9uKG5vZGU6IEFTVExhbWJkYU5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBMYW1iZGFUeXBlIHtcblx0XHRjb25zdCBsYW1iZGFTY29wZSA9IG5ldyBUeXBlU2NvcGUoc2NvcGUpO1xuXHRcdGNvbnN0IHBhcmFtZXRlcnMgPSBub2RlLnBhcmFtZXRlcnMubWFwKHBhcmFtZXRlck5vZGUgPT4ge1xuXHRcdFx0Y29uc3QgcGFyYW1ldGVyU3ltYm9sOiBQYXJhbWV0ZXJTeW1ib2wgPSB0aGlzLnBhcmFtZXRlck5vZGVUb1N5bWJvbChwYXJhbWV0ZXJOb2RlKTtcblxuXHRcdFx0bGFtYmRhU2NvcGUuZGVmaW5lVHlwZShwYXJhbWV0ZXJOb2RlLm5hbWUsIHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlKTtcblxuXHRcdFx0cmV0dXJuIHBhcmFtZXRlclN5bWJvbDtcblx0XHR9KTtcblxuXHRcdGlmIChub2RlLmNoaWxkcmVuWzBdKSB7XG5cdFx0XHRyZXR1cm4gbmV3IExhbWJkYVR5cGUocGFyYW1ldGVycywgdGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5jaGlsZHJlblswXSwgbGFtYmRhU2NvcGUpKTtcblx0XHR9XG5cblx0XHR0aGlzLnR5cGVFcnJvcignTGFtYmRhIGV4cHJlc3Npb24gbXVzdCBoYXZlIGEgcmV0dXJuIHR5cGUnLCBub2RlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tDYWxsRXhwcmVzc2lvbihub2RlOiBBU1RDYWxsTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGNvbnN0IGNhbGxlZSA9IG5vZGUuY2FsbGVlO1xuXG5cdFx0aWYgKGNhbGxlZS50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSICYmIGNhbGxlZS5uYW1lID09PSBHUkFNTUFSLlNVUEVSKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jaGVja1N1cGVyQ29uc3RydWN0b3JDYWxsKG5vZGUsIHNjb3BlKTtcblx0XHR9XG5cblx0XHQvLyBDbGFzcy5tZXRob2QoKVxuXHRcdGlmIChjYWxsZWUgaW5zdGFuY2VvZiBBU1RNZW1iZXJOb2RlXG5cdFx0XHQmJiBjYWxsZWUub2JqZWN0LnR5cGUgPT09IEFTVE5vZGVUeXBlLklERU5USUZJRVJcblx0XHRcdCYmIHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKGNhbGxlZS5vYmplY3QubmFtZSlcblx0XHQpIHtcblx0XHRcdHJldHVybiB0aGlzLmNoZWNrU3RhdGljQ2FsbChcblx0XHRcdFx0Y2FsbGVlLm9iamVjdC5uYW1lLFxuXHRcdFx0XHRjYWxsZWUucHJvcGVydHksXG5cdFx0XHRcdG5vZGUuYXJndW1lbnRzLFxuXHRcdFx0XHRzY29wZVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBleHByLm1ldGhvZCgpXG5cdFx0aWYgKGNhbGxlZSBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpIHtcblx0XHRcdHJldHVybiB0aGlzLmNoZWNrSW5zdGFuY2VDYWxsKGNhbGxlZSwgbm9kZS5hcmd1bWVudHMsIHNjb3BlKTtcblx0XHR9XG5cblx0XHRpZiAoY2FsbGVlIGluc3RhbmNlb2YgQVNUTGFtYmRhTm9kZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tMYW1iZGFDYWxsKHRoaXMuY2hlY2tMYW1iZGFFeHByZXNzaW9uKGNhbGxlZSwgc2NvcGUpLCBub2RlLmFyZ3VtZW50cywgc2NvcGUpO1xuXHRcdH1cblxuXHRcdC8vIElkZW50aWZpZXI6IFZhcmlhYmxlIC8gTGFtYmRhXG5cdFx0aWYgKGNhbGxlZS50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0XHRpZiAoc2NvcGUuaGFzVHlwZShjYWxsZWUubmFtZSkpIHtcblx0XHRcdFx0Y29uc3QgdHlwZSA9IHNjb3BlLmdldFR5cGUoY2FsbGVlLm5hbWUpO1xuXHRcdFx0XHRpZiAodHlwZSBpbnN0YW5jZW9mIExhbWJkYVR5cGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0xhbWJkYUNhbGwodHlwZSwgbm9kZS5hcmd1bWVudHMsIHNjb3BlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNhbGwgbm9uLWZ1bmN0aW9uICR7Y2FsbGVlLm5hbWV9YCwgbm9kZSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZhbGxiYWNrOiBnbG9iYWxlIEZ1bmt0aW9uXG5cdFx0XHRyZXR1cm4gdGhpcy5jaGVja0Z1bmN0aW9uQ2FsbChjYWxsZWUubmFtZSwgbm9kZS5hcmd1bWVudHMsIHNjb3BlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gVHlwZXMuTUlYRUQ7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrU3VwZXJDb25zdHJ1Y3RvckNhbGwobm9kZTogQVNUQ2FsbE5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRjb25zdCBjdXJyZW50Q2xhc3MgPSBzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sO1xuXG5cdFx0aWYgKCEoY3VycmVudENsYXNzIGluc3RhbmNlb2YgQ2xhc3NTeW1ib2wpKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcignc3VwZXIoKSB1c2VkIG91dHNpZGUgb2YgY2xhc3MnLCBub2RlKTtcblx0XHR9XG5cblx0XHRpZiAoIWN1cnJlbnRDbGFzcy5zdXBlckNsYXNzKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcignc3VwZXIoKSB1c2VkIG91dHNpZGUgb2YgY2xhc3MgaGllcmFyY2h5Jywgbm9kZSk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc3VwZXJTeW1ib2w6IENsYXNzU3ltYm9sID0gdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChjdXJyZW50Q2xhc3Muc3VwZXJDbGFzcyk7XG5cdFx0aWYgKCFzdXBlclN5bWJvbC5jb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbCkge1xuXHRcdFx0aWYgKG5vZGUuYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoJ1N1cGVyIGNvbnN0cnVjdG9yIHRha2VzIG5vIGFyZ3VtZW50cycsIG5vZGUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIFR5cGVzLlZPSUQ7XG5cdFx0fVxuXG5cdFx0dGhpcy5jaGVja0NhbGxBcmd1bWVudHMoc3VwZXJTeW1ib2wuY29uc3RydWN0b3JNZXRob2RTeW1ib2wsIG5vZGUuYXJndW1lbnRzLCBzY29wZSk7XG5cblx0XHRyZXR1cm4gVHlwZXMuVk9JRDtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tDYWxsT25OdWxsT2JqZWN0VHlwZShvYmplY3RUeXBlOiBUeXBlLCBub2RlOiBBU1ROb2RlKTogdm9pZCB7XG5cdFx0aWYgKG9iamVjdFR5cGUuZXF1YWxzKFR5cGVzLk5VTEwpKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNhbGwgbWV0aG9kIG9uIG51bGxgLCBub2RlKTtcblx0XHR9XG5cdFx0aWYgKG9iamVjdFR5cGUgaW5zdGFuY2VvZiBOdWxsYWJsZVR5cGUpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgY2FsbCBtZXRob2Qgb24gbnVsbGFibGUgdHlwZSAke29iamVjdFR5cGV9YCwgbm9kZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0luc3RhbmNlQ2FsbChjYWxsZWU6IEFTVE1lbWJlck5vZGUsIGNhbGxBcmd1bWVudHM6IEFTVE5vZGVbXSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGxldCBvYmplY3RUeXBlOiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24oY2FsbGVlLm9iamVjdCwgc2NvcGUpO1xuXG5cdFx0b2JqZWN0VHlwZSA9IEF1dG9ib3hpbmcuYXV0b2JveElmTmVlZGVkKG9iamVjdFR5cGUsIHRoaXMub2JqZWN0UmVnaXN0cnkpO1xuXG5cdFx0dGhpcy5jaGVja0NhbGxPbk51bGxPYmplY3RUeXBlKG9iamVjdFR5cGUsIGNhbGxlZSk7XG5cblx0XHRpZiAob2JqZWN0VHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSkge1xuXHRcdFx0Y29uc3QgbWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wgPSB0aGlzLnJlc29sdmVJbnN0YW5jZU1ldGhvZGUoXG5cdFx0XHRcdG9iamVjdFR5cGUuY2xhc3NTeW1ib2wsXG5cdFx0XHRcdGNhbGxlZS5wcm9wZXJ0eVxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKG1ldGhvZFN5bWJvbC5pc1N0YXRpYykge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNhbGwgc3RhdGljIG1ldGhvZCAke2NhbGxlZS5wcm9wZXJ0eX0gb24gaW5zdGFuY2Ugb2YgJHtjYWxsZWUub2JqZWN0Lm5hbWV9YCxcblx0XHRcdFx0ICAgICAgICAgICAgICAgY2FsbGVlKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5jaGVja0luc3RhbmNlTWV0aG9kQWNjZXNzKGNhbGxlZSwgb2JqZWN0VHlwZS5jbGFzc1N5bWJvbCwgbWV0aG9kU3ltYm9sLCBzY29wZSk7XG5cblx0XHRcdGNvbnN0IG93bmVyOiBDbGFzc1N5bWJvbCB8IEludGVyZmFjZVN5bWJvbCB8IG51bGwgPSBtZXRob2RTeW1ib2wub3duZXI7XG5cblx0XHRcdGlmIChvd25lciA9PT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNhbGwgbWV0aG9kIG9uIG5vbi1vYmplY3RgLCBjYWxsZWUpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzdWJzdGl0dXRpb25NYXA6IE1hcDxzdHJpbmcsIFR5cGU+ID0gYnVpbGRUeXBlU3Vic3RpdHV0aW9uTWFwKFxuXHRcdFx0XHRvd25lci50eXBlUGFyYW1ldGVyU3ltYm9scyxcblx0XHRcdFx0b2JqZWN0VHlwZS50eXBlQXJndW1lbnRzXG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLmNoZWNrQ2FsbEFyZ3VtZW50cyhtZXRob2RTeW1ib2wsIGNhbGxBcmd1bWVudHMsIHNjb3BlLCBzdWJzdGl0dXRpb25NYXApO1xuXG5cdFx0XHRyZXR1cm4gc3Vic3RpdHV0ZVR5cGUobWV0aG9kU3ltYm9sLnJldHVyblR5cGUsIHN1YnN0aXR1dGlvbk1hcCk7XG5cdFx0fVxuXG5cdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBjYWxsIG1ldGhvZCBvbiBub24tb2JqZWN0YCwgY2FsbGVlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tTdGF0aWNDYWxsKGNsYXNzTmFtZTogc3RyaW5nLCBtZXRob2ROYW1lOiBzdHJpbmcsIGNhbGxBcmd1bWVudHM6IEFTVE5vZGVbXSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGNvbnN0IGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCA9IHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2woY2xhc3NOYW1lKTtcblxuXHRcdGNvbnN0IG1ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sIHwgbnVsbCA9IGNsYXNzU3ltYm9sLnN0YXRpY01ldGhvZFN5bWJvbHMuZ2V0KG1ldGhvZE5hbWUpIHx8IG51bGw7XG5cdFx0aWYgKCFtZXRob2RTeW1ib2wpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBVbmtub3duIHN0YXRpYyBtZXRob2QgJHtjbGFzc05hbWV9LiR7bWV0aG9kTmFtZX1gKTtcblx0XHR9XG5cblx0XHR0aGlzLmNoZWNrU3RhdGljTWV0aG9kQWNjZXNzKGNsYXNzU3ltYm9sLCBtZXRob2RTeW1ib2wsIHNjb3BlKVxuXG5cdFx0dGhpcy5jaGVja0NhbGxBcmd1bWVudHMobWV0aG9kU3ltYm9sLCBjYWxsQXJndW1lbnRzLCBzY29wZSk7XG5cblx0XHRyZXR1cm4gbWV0aG9kU3ltYm9sLnJldHVyblR5cGU7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrTGFtYmRhQ2FsbChsYW1iZGE6IExhbWJkYVR5cGUsIGNhbGxBcmd1bWVudHM6IEFTVE5vZGVbXSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXG5cdFx0dGhpcy5jaGVja0NhbGxBcmd1bWVudHMobGFtYmRhLCBjYWxsQXJndW1lbnRzLCBzY29wZSk7XG5cblx0XHRyZXR1cm4gbGFtYmRhLnJldHVyblR5cGU7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrRnVuY3Rpb25DYWxsKG5hbWU6IHN0cmluZywgY2FsbEFyZ3VtZW50czogQVNUTm9kZVtdLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0aWYgKCFnbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeS5oYXMobmFtZSkpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBVbmtub3duIGZ1bmN0aW9uICR7bmFtZX1gKTtcblx0XHR9XG5cblx0XHRjb25zdCBuYXRpdmVGdW5jdGlvbjogTmF0aXZlRnVuY3Rpb24gPSBnbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeS5nZXQobmFtZSk7XG5cblx0XHR0aGlzLmNoZWNrQ2FsbEFyZ3VtZW50cyhuYXRpdmVGdW5jdGlvbiwgY2FsbEFyZ3VtZW50cywgc2NvcGUpO1xuXG5cdFx0cmV0dXJuIG5hdGl2ZUZ1bmN0aW9uLnJldHVyblR5cGVcblx0XHRcdD8gdGhpcy53cmFwVHlwZShuYXRpdmVGdW5jdGlvbi5yZXR1cm5UeXBlLCBzY29wZSlcblx0XHRcdDogVHlwZXMuVk9JRDtcblx0fVxuXG5cdHByaXZhdGUgcGFyYW1ldGVyc1N5bWJvbHNGcm9tQ2FsbGFibGVTeW1ib2woY2FsbGFibGVTeW1ib2w6IE1ldGhvZFN5bWJvbCB8IExhbWJkYVR5cGUgfCBOYXRpdmVGdW5jdGlvbik6IFBhcmFtZXRlclN5bWJvbFtdIHtcblx0XHRpZiAoY2FsbGFibGVTeW1ib2wgaW5zdGFuY2VvZiBOYXRpdmVGdW5jdGlvbikge1xuXHRcdFx0cmV0dXJuIGNhbGxhYmxlU3ltYm9sXG5cdFx0XHRcdC5wYXJhbWV0ZXJOb2Rlc1xuXHRcdFx0XHQubWFwKHBhcmFtZXRlck5vZGUgPT4gdGhpcy5wYXJhbWV0ZXJOb2RlVG9TeW1ib2wocGFyYW1ldGVyTm9kZSkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjYWxsYWJsZVN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzXG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQ2FsbEFyZ3VtZW50cyhcblx0XHRjYWxsYWJsZVN5bWJvbDogTWV0aG9kU3ltYm9sIHwgTGFtYmRhVHlwZSB8IE5hdGl2ZUZ1bmN0aW9uLFxuXHRcdGNhbGxBcmd1bWVudHM6IEFTVE5vZGVbXSxcblx0XHRzY29wZTogVHlwZVNjb3BlLFxuXHRcdHN1YnN0aXR1dGlvbk1hcDogTWFwPHN0cmluZywgVHlwZT4gPSBuZXcgTWFwKClcblx0KTogdm9pZCB7XG5cdFx0Y29uc3QgY2FsbFNjb3BlID0gbmV3IFR5cGVTY29wZShzY29wZSk7XG5cdFx0bGV0IHBhcmFtZXRlclN5bWJvbHMgPSB0aGlzLnBhcmFtZXRlcnNTeW1ib2xzRnJvbUNhbGxhYmxlU3ltYm9sKGNhbGxhYmxlU3ltYm9sKTtcblxuXHRcdGlmIChjYWxsQXJndW1lbnRzLmxlbmd0aCA+IHBhcmFtZXRlclN5bWJvbHMubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihcIkFyZ3VtZW50IGNvdW50IG1pc21hdGNoXCIpO1xuXHRcdH1cblxuXHRcdGxldCBhY3R1YWxUeXBlOiBUeXBlO1xuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBwYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBwYXJhbWV0ZXJTeW1ib2w6IFBhcmFtZXRlclN5bWJvbCB8IG51bGwgPSBwYXJhbWV0ZXJTeW1ib2xzW2ldIHx8IG51bGw7XG5cdFx0XHRjb25zdCBjYWxsQXJndW1lbnQ6IEFTVE5vZGUgfCBudWxsID0gY2FsbEFyZ3VtZW50c1tpXSB8fCBudWxsO1xuXG5cdFx0XHRpZiAocGFyYW1ldGVyU3ltYm9sKSB7XG5cdFx0XHRcdGNvbnN0IGV4cGVjdGVkVHlwZTogVHlwZSA9IHN1YnN0aXR1dGVUeXBlKHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlLCBzdWJzdGl0dXRpb25NYXApO1xuXG5cdFx0XHRcdGlmIChjYWxsQXJndW1lbnQpIHtcblx0XHRcdFx0XHRhY3R1YWxUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24oY2FsbEFyZ3VtZW50LCBjYWxsU2NvcGUsIGV4cGVjdGVkVHlwZSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAocGFyYW1ldGVyU3ltYm9sLmRlZmF1bHRUeXBlKSB7XG5cdFx0XHRcdFx0YWN0dWFsVHlwZSA9IHBhcmFtZXRlclN5bWJvbC5kZWZhdWx0VHlwZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgTWlzc2luZyBhcmd1bWVudCAke3BhcmFtZXRlclN5bWJvbC5uYW1lfWAsIGNhbGxBcmd1bWVudCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmNoZWNrQXNzaWduYWJsZShleHBlY3RlZFR5cGUsIGFjdHVhbFR5cGUsIGNhbGxBcmd1bWVudHNbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tBc3NpZ25hYmxlKGV4cGVjdGVkVHlwZTogVHlwZSwgYWN0dWFsVHlwZTogVHlwZSwgbm9kZTogQVNUTm9kZSB8IG51bGwgPSBudWxsKTogdm9pZCB7XG5cdFx0aWYgKGV4cGVjdGVkVHlwZS5lcXVhbHMoYWN0dWFsVHlwZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoZXhwZWN0ZWRUeXBlIGluc3RhbmNlb2YgTWl4ZWRUeXBlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGV4cGVjdGVkVHlwZSBpbnN0YW5jZW9mIE51bGxhYmxlVHlwZSkge1xuXHRcdFx0aWYgKGFjdHVhbFR5cGUgPT09IFR5cGVzLk5VTEwpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGV4cGVjdGVkVHlwZS5pbm5lci5hY2NlcHRzKGFjdHVhbFR5cGUpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZXhwZWN0ZWRUeXBlLmFjY2VwdHMoYWN0dWFsVHlwZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnR5cGVFcnJvcihgVHlwZSBtaXNtYXRjaDogJHtleHBlY3RlZFR5cGV9IDw+ICR7YWN0dWFsVHlwZX1gLCBub2RlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tCb2R5KGNoaWxkcmVuOiBBU1ROb2RlW10sIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRsZXQgcmV0dXJuVHlwZTogVHlwZSA9IFR5cGVzLk1JWEVEO1xuXG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuXHRcdFx0Y29uc3Qgc3RhdGVtZW50UmVzdWx0ID0gdGhpcy5jaGVja1N0YXRlbWVudChjaGlsZCwgc2NvcGUpO1xuXHRcdFx0aWYgKHN0YXRlbWVudFJlc3VsdC5kaWRSZXR1cm4gJiYgc3RhdGVtZW50UmVzdWx0LnJldHVyblR5cGUpIHtcblx0XHRcdFx0cmV0dXJuVHlwZSA9IHN0YXRlbWVudFJlc3VsdC5yZXR1cm5UeXBlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXR1cm5UeXBlO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1JldHVyblR5cGUoZXhwZWN0ZWRUeXBlOiBUeXBlLCBhY3R1YWxUeXBlOiBUeXBlLCBub2RlOiBBU1RNZXRob2ROb2RlKTogdm9pZCB7XG5cdFx0Ly8gdm9pZC1NZXRob2RlXG5cdFx0aWYgKGV4cGVjdGVkVHlwZSA9PT0gVHlwZXMuVk9JRCkge1xuXHRcdFx0aWYgKGFjdHVhbFR5cGUgIT09IFR5cGVzLk1JWEVEICYmIGFjdHVhbFR5cGUgIT09IFR5cGVzLlZPSUQpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCByZXR1cm4gJHthY3R1YWxUeXBlfSBmcm9tIHZvaWQgbWV0aG9kYCwgbm9kZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8ga2VpbiByZXR1cm4gdm9yaGFuZGVuXG5cdFx0aWYgKGFjdHVhbFR5cGUgPT09IFR5cGVzLk1JWEVEKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgTWlzc2luZyByZXR1cm4gc3RhdGVtZW50IChleHBlY3RlZCAke2V4cGVjdGVkVHlwZX0pYCwgbm9kZSk7XG5cdFx0fVxuXG5cdFx0Ly8gdHlwLWlua29tcGF0aWJlbFxuXHRcdGlmICghZXhwZWN0ZWRUeXBlLmFjY2VwdHMoYWN0dWFsVHlwZSkpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBSZXR1cm4gdHlwZSBtaXNtYXRjaDogZXhwZWN0ZWQgJHtleHBlY3RlZFR5cGV9LCBnb3QgJHthY3R1YWxUeXBlfWAsIG5vZGUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tWRG9tTm9kZShub2RlOiBBU1RWRG9tTm9kZSk6IFR5cGUge1xuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCA9IHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2wobm9kZS50YWcpO1xuXG5cdFx0XHRjb25zdCBtZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCA9IHRoaXMucmVzb2x2ZUluc3RhbmNlTWV0aG9kZShjbGFzc1N5bWJvbCwgJ3JlbmRlcicpO1xuXG5cdFx0XHRpZiAoIW1ldGhvZFN5bWJvbCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ29tcG9uZW50ICcke25vZGUudGFnfScgaGFzIG5vIHJlbmRlcigpIG1ldGhvZGAsIG5vZGUpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmNoZWNrQXNzaWduYWJsZShtZXRob2RTeW1ib2wucmV0dXJuVHlwZSwgVHlwZXMuVk5PREUsIG5vZGUpO1xuXG5cdFx0XHRyZXR1cm4gVHlwZXMuVk5PREU7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdH1cblxuXHRcdHJldHVybiBUeXBlcy5WTk9ERTtcblx0fVxuXG5cdHByaXZhdGUgcmVzb2x2ZUluc3RhbmNlTWV0aG9kZShjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wsIG1ldGhvZE5hbWU6IHN0cmluZyk6IE1ldGhvZFN5bWJvbCB7XG5cdFx0LyoqIEB0eXBlIHtNZXRob2RTeW1ib2x8bnVsbH0gKi9cblx0XHRjb25zdCBtZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCB8IG51bGwgPSB0aGlzLnJlc29sdmVJbkhpZXJhcmNoeShcblx0XHRcdGNsYXNzU3ltYm9sLFxuXHRcdFx0Y2xhc3NTeW1ib2wgPT4gY2xhc3NTeW1ib2wuaW5zdGFuY2VNZXRob2RTeW1ib2xzLmdldChtZXRob2ROYW1lKSB8fCBudWxsXG5cdFx0KTtcblxuXHRcdGlmICghbWV0aG9kU3ltYm9sKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgVW5rbm93biBtZXRob2QgJHtjbGFzc1N5bWJvbC5uYW1lfS4ke21ldGhvZE5hbWV9YCwgY2xhc3NTeW1ib2wubm9kZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1ldGhvZFN5bWJvbDtcblx0fVxuXG5cdHByaXZhdGUgcmVzb2x2ZUluSGllcmFyY2h5KGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCwgcmVzb2x2ZXI6IChjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wpID0+IGFueSk6IGFueSB7XG5cdFx0bGV0IGN1cnJlbnQ6IENsYXNzU3ltYm9sIHwgbnVsbCA9IGNsYXNzU3ltYm9sO1xuXG5cdFx0d2hpbGUgKGN1cnJlbnQpIHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IHJlc29sdmVyKGN1cnJlbnQpO1xuXHRcdFx0aWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkICYmIHJlc3VsdCAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWN1cnJlbnQuc3VwZXJDbGFzcykge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0Y3VycmVudCA9IHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2woY3VycmVudC5zdXBlckNsYXNzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHByaXZhdGUgbmV3QXJyYXlUeXBlT2YoZWxlbWVudFR5cGU6IFR5cGUpOiBDbGFzc1JlZlR5cGUge1xuXHRcdGNvbnN0IGNsYXNzTmFtZTogc3RyaW5nIHwgbnVsbCA9IFByaW1pdGl2ZUNsYXNzVHlwZXMuZ2V0Q2xhc3NSZWZOYW1lKFByaW1pdGl2ZUNsYXNzVHlwZXMuQVJSQVkpO1xuXG5cdFx0aWYgKGNsYXNzTmFtZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoJ0ludGVybmFsIGVycm9yOiBDYW5ub3QgZmluZCBjbGFzcyBuYW1lIGZvciBhcnJheSB0eXBlLicpO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgQ2xhc3NSZWZUeXBlKHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2woY2xhc3NOYW1lKSwgW2VsZW1lbnRUeXBlXSk7XG5cdH1cblxuXHRwcml2YXRlIHdyYXBUeXBlKHR5cGU6IEFTVFR5cGVOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0cmV0dXJuIHdyYXBUeXBlKHR5cGUsIHRoaXMub2JqZWN0UmVnaXN0cnksIHNjb3BlKTtcblx0fVxuXG5cdHByaXZhdGUgcGFyYW1ldGVyTm9kZVRvU3ltYm9sKHBhcmFtZXRlck5vZGU6IEFTVFBhcmFtZXRlck5vZGUsIHNjb3BlOiBUeXBlU2NvcGUgPSBuZXcgVHlwZVNjb3BlKCkpOiBQYXJhbWV0ZXJTeW1ib2wge1xuXHRcdGNvbnN0IHBhcmFtZXRlclR5cGUgPSBwYXJhbWV0ZXJOb2RlLnR5cGVBbm5vdGF0aW9uXG5cdFx0XHQ/IHRoaXMud3JhcFR5cGUocGFyYW1ldGVyTm9kZS50eXBlQW5ub3RhdGlvbiwgc2NvcGUpXG5cdFx0XHQ6IFR5cGVzLk1JWEVEO1xuXG5cdFx0bGV0IGRlZmF1bHRUeXBlID0gbnVsbDtcblx0XHRpZiAocGFyYW1ldGVyTm9kZS5kZWZhdWx0VmFsdWUpIHtcblx0XHRcdGRlZmF1bHRUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24ocGFyYW1ldGVyTm9kZS5kZWZhdWx0VmFsdWUsIG5ldyBUeXBlU2NvcGUoKSk7XG5cblx0XHRcdGlmIChkZWZhdWx0VHlwZVxuXHRcdFx0XHQmJiAhcGFyYW1ldGVyVHlwZS5lcXVhbHMoVHlwZXMuTUlYRUQpXG5cdFx0XHRcdCYmICFwYXJhbWV0ZXJUeXBlLmVxdWFscyhkZWZhdWx0VHlwZSkpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoXG5cdFx0XHRcdFx0YERlZmF1bHQgdmFsdWUgZm9yIHBhcmFtZXRlciAnJHtwYXJhbWV0ZXJOb2RlLm5hbWV9JyBkb2VzIG5vdCBtYXRjaCB0eXBlLmAsXG5cdFx0XHRcdFx0cGFyYW1ldGVyTm9kZVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgUGFyYW1ldGVyU3ltYm9sKFxuXHRcdFx0cGFyYW1ldGVyTm9kZS5uYW1lLFxuXHRcdFx0cGFyYW1ldGVyVHlwZSxcblx0XHRcdGRlZmF1bHRUeXBlLFxuXHRcdFx0cGFyYW1ldGVyTm9kZVxuXHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIHJlZ2lzdGVyQ2xhc3NTeW1ib2woY2xhc3NOb2RlOiBBU1RDbGFzc05vZGUpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5oYXNTeW1ib2woY2xhc3NOb2RlLm5hbWUpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgY2xhc3NTY29wZSA9IG5ldyBUeXBlU2NvcGUoKTtcblx0XHRjb25zdCBjbGFzc1N5bWJvbCA9IG5ldyBDbGFzc1N5bWJvbChjbGFzc05vZGUpO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGlmIChjbGFzc1N5bWJvbC5zdXBlckNsYXNzKSB7XG5cdFx0XHRcdGNsYXNzU3ltYm9sLnN1cGVyQ2xhc3NTeW1ib2wgPSB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKGNsYXNzU3ltYm9sLnN1cGVyQ2xhc3MpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHR9XG5cblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmFkZENsYXNzU3ltYm9sKGNsYXNzU3ltYm9sKTtcblxuXHRcdGNsYXNzTm9kZS50eXBlUGFyYW1ldGVycy5mb3JFYWNoKG5hbWUgPT4ge1xuXHRcdFx0Y2xhc3NTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMucHVzaChuZXcgVHlwZVBhcmFtZXRlclN5bWJvbChuYW1lKSk7XG5cdFx0XHRjbGFzc1Njb3BlLmRlZmluZVR5cGVCaW5kaW5nKG5hbWUsIG5ldyBUeXBlVmFyaWFibGUobmFtZSkpO1xuXHRcdH0pO1xuXG5cdFx0Zm9yIChjb25zdCB0eXBlTm9kZSBvZiBjbGFzc05vZGUuaW1wbGVtZW50c0ludGVyZmFjZXMpIHtcblx0XHRcdGNvbnN0IGludGVyZmFjZVR5cGU6IFR5cGUgPSB0aGlzLndyYXBUeXBlKHR5cGVOb2RlLCBjbGFzc1Njb3BlKTtcblx0XHRcdGlmIChpbnRlcmZhY2VUeXBlIGluc3RhbmNlb2YgSW50ZXJmYWNlUmVmVHlwZSkge1xuXHRcdFx0XHRjbGFzc1N5bWJvbC5pbXBsZW1lbnRzSW50ZXJmYWNlcy5wdXNoKGludGVyZmFjZVR5cGUpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHRoaXMudHlwZUVycm9yKGBFeHBlY3RlZCBpbnRlcmZhY2UgdHlwZSwgZ290ICR7aW50ZXJmYWNlVHlwZX1gLCB0eXBlTm9kZSk7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBtZW1iZXJOb2RlIG9mIGNsYXNzTm9kZS5jaGlsZHJlbikge1xuXHRcdFx0aWYgKG1lbWJlck5vZGUudHlwZSA9PT0gQVNUTm9kZVR5cGUuRklFTEQgJiYgbWVtYmVyTm9kZSBpbnN0YW5jZW9mIEFTVEZpZWxkTm9kZSkge1xuXHRcdFx0XHRjb25zdCB0YXJnZXQ6IE1hcDxzdHJpbmcsIEZpZWxkU3ltYm9sPiA9IG1lbWJlck5vZGUubW9kaWZpZXJzLnN0YXRpY1xuXHRcdFx0XHRcdD8gY2xhc3NTeW1ib2wuc3RhdGljRmllbGRTeW1ib2xzXG5cdFx0XHRcdFx0OiBjbGFzc1N5bWJvbC5pbnN0YW5jZUZpZWxkU3ltYm9scztcblxuXHRcdFx0XHRjb25zdCBmaWVsZFN5bWJvbCA9IG5ldyBGaWVsZFN5bWJvbChcblx0XHRcdFx0XHRtZW1iZXJOb2RlLFxuXHRcdFx0XHRcdG1lbWJlck5vZGUuZmllbGRUeXBlXG5cdFx0XHRcdFx0XHQ/IHRoaXMud3JhcFR5cGUobWVtYmVyTm9kZS5maWVsZFR5cGUsIGNsYXNzU2NvcGUpXG5cdFx0XHRcdFx0XHQ6IFR5cGVzLk1JWEVEXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0ZmllbGRTeW1ib2wub3duZXIgPSBjbGFzc1N5bWJvbDtcblxuXHRcdFx0XHR0YXJnZXQuc2V0KGZpZWxkU3ltYm9sLm5hbWUsIGZpZWxkU3ltYm9sKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKChtZW1iZXJOb2RlLnR5cGUgPT09IEFTVE5vZGVUeXBlLk1FVEhPRCB8fCBtZW1iZXJOb2RlLnR5cGUgPT09IEFTVE5vZGVUeXBlLkNPTlNUUlVDVE9SKVxuXHRcdFx0XHQmJiBtZW1iZXJOb2RlIGluc3RhbmNlb2YgQVNUTWV0aG9kTm9kZSkge1xuXG5cdFx0XHRcdGNvbnN0IG1ldGhvZFNjb3BlID0gbmV3IFR5cGVTY29wZShjbGFzc1Njb3BlKTtcblx0XHRcdFx0Y29uc3QgbWV0aG9kU3ltYm9sID0gbmV3IE1ldGhvZFN5bWJvbChtZW1iZXJOb2RlKTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wub3duZXIgPSBjbGFzc1N5bWJvbDtcblxuXHRcdFx0XHRtZW1iZXJOb2RlLnR5cGVQYXJhbWV0ZXJzLmZvckVhY2gobmFtZSA9PiB7XG5cdFx0XHRcdFx0bWV0aG9kU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLnB1c2gobmV3IFR5cGVQYXJhbWV0ZXJTeW1ib2wobmFtZSkpO1xuXHRcdFx0XHRcdG1ldGhvZFNjb3BlLmRlZmluZVR5cGVCaW5kaW5nKG5hbWUsIG5ldyBUeXBlVmFyaWFibGUobmFtZSkpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9scyA9IG1lbWJlck5vZGVcblx0XHRcdFx0XHQucGFyYW1ldGVyc1xuXHRcdFx0XHRcdC5tYXAocGFyYW1ldGVyTm9kZSA9PiB0aGlzLnBhcmFtZXRlck5vZGVUb1N5bWJvbChwYXJhbWV0ZXJOb2RlLCBtZXRob2RTY29wZSkpO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlID0gbWVtYmVyTm9kZS5yZXR1cm5UeXBlXG5cdFx0XHRcdFx0PyB0aGlzLndyYXBUeXBlKG1lbWJlck5vZGUucmV0dXJuVHlwZSwgbWV0aG9kU2NvcGUpXG5cdFx0XHRcdFx0OiBUeXBlcy5WT0lEO1xuXG5cdFx0XHRcdGlmIChtZW1iZXJOb2RlLnR5cGUgPT09IEFTVE5vZGVUeXBlLkNPTlNUUlVDVE9SKSB7XG5cdFx0XHRcdFx0Y2xhc3NTeW1ib2wuY29uc3RydWN0b3JNZXRob2RTeW1ib2wgPSBtZXRob2RTeW1ib2w7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gbWV0aG9kU3ltYm9sLmlzU3RhdGljXG5cdFx0XHRcdFx0XHQ/IGNsYXNzU3ltYm9sLnN0YXRpY01ldGhvZFN5bWJvbHNcblx0XHRcdFx0XHRcdDogY2xhc3NTeW1ib2wuaW5zdGFuY2VNZXRob2RTeW1ib2xzO1xuXG5cdFx0XHRcdFx0dGFyZ2V0LnNldChtZW1iZXJOb2RlLm5hbWUsIG1ldGhvZFN5bWJvbCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJlZ2lzdGVySW50ZXJmYWNlU3ltYm9sKGludGVyZmFjZU5vZGU6IEFTVEludGVyZmFjZU5vZGUpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5oYXNTeW1ib2woaW50ZXJmYWNlTm9kZS5uYW1lKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGludGVyZmFjZVNjb3BlID0gbmV3IFR5cGVTY29wZSgpO1xuXHRcdGNvbnN0IGludGVyZmFjZVN5bWJvbCA9IG5ldyBJbnRlcmZhY2VTeW1ib2woaW50ZXJmYWNlTm9kZSk7XG5cblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmFkZEludGVyZmFjZVN5bWJvbChpbnRlcmZhY2VTeW1ib2wpO1xuXG5cdFx0aW50ZXJmYWNlTm9kZS50eXBlUGFyYW1ldGVycy5mb3JFYWNoKG5hbWUgPT4ge1xuXHRcdFx0aW50ZXJmYWNlU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLnB1c2gobmV3IFR5cGVQYXJhbWV0ZXJTeW1ib2wobmFtZSkpO1xuXHRcdFx0aW50ZXJmYWNlU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcobmFtZSwgbmV3IFR5cGVWYXJpYWJsZShuYW1lKSk7XG5cdFx0fSk7XG5cblx0XHRmb3IgKGNvbnN0IGludGVyZmFjZU5hbWUgb2YgaW50ZXJmYWNlTm9kZS5leHRlbmRzSW50ZXJmYWNlcykge1xuXHRcdFx0Y29uc3QgaW50ZXJmYWNlU3ltYm9sOiBJbnRlcmZhY2VTeW1ib2wgPSB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldEludGVyYWNlU3ltYm9sKGludGVyZmFjZU5hbWUpO1xuXG5cdFx0XHRpbnRlcmZhY2VTeW1ib2wuZXh0ZW5kc0ludGVyZmFjZXMucHVzaChpbnRlcmZhY2VTeW1ib2wpO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgbWVtYmVyTm9kZSBvZiBpbnRlcmZhY2VOb2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobWVtYmVyTm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5GSUVMRCAmJiBtZW1iZXJOb2RlIGluc3RhbmNlb2YgQVNURmllbGROb2RlKSB7XG5cdFx0XHRcdGNvbnN0IGZpZWxkU3ltYm9sID0gbmV3IEZpZWxkU3ltYm9sKFxuXHRcdFx0XHRcdG1lbWJlck5vZGUsXG5cdFx0XHRcdFx0bWVtYmVyTm9kZS5maWVsZFR5cGVcblx0XHRcdFx0XHRcdD8gdGhpcy53cmFwVHlwZShtZW1iZXJOb2RlLmZpZWxkVHlwZSwgaW50ZXJmYWNlU2NvcGUpXG5cdFx0XHRcdFx0XHQ6IFR5cGVzLk1JWEVEXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0ZmllbGRTeW1ib2wub3duZXIgPSBpbnRlcmZhY2VTeW1ib2w7XG5cblx0XHRcdFx0aW50ZXJmYWNlU3ltYm9sLnN0YXRpY0ZpZWxkU3ltYm9scy5zZXQoZmllbGRTeW1ib2wubmFtZSwgZmllbGRTeW1ib2wpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoKG1lbWJlck5vZGUudHlwZSA9PT0gQVNUTm9kZVR5cGUuTUVUSE9EKSAmJiBtZW1iZXJOb2RlIGluc3RhbmNlb2YgQVNUTWV0aG9kTm9kZSkge1xuXG5cdFx0XHRcdGNvbnN0IG1ldGhvZFNjb3BlID0gbmV3IFR5cGVTY29wZShpbnRlcmZhY2VTY29wZSk7XG5cdFx0XHRcdGNvbnN0IG1ldGhvZFN5bWJvbCA9IG5ldyBNZXRob2RTeW1ib2wobWVtYmVyTm9kZSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLm93bmVyID0gaW50ZXJmYWNlU3ltYm9sO1xuXG5cdFx0XHRcdG1lbWJlck5vZGUudHlwZVBhcmFtZXRlcnMuZm9yRWFjaChuYW1lID0+IHtcblx0XHRcdFx0XHRtZXRob2RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMucHVzaChuZXcgVHlwZVBhcmFtZXRlclN5bWJvbChuYW1lKSk7XG5cdFx0XHRcdFx0bWV0aG9kU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcobmFtZSwgbmV3IFR5cGVWYXJpYWJsZShuYW1lKSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzID0gbWVtYmVyTm9kZVxuXHRcdFx0XHRcdC5wYXJhbWV0ZXJzXG5cdFx0XHRcdFx0Lm1hcChwYXJhbWV0ZXJOb2RlID0+IHRoaXMucGFyYW1ldGVyTm9kZVRvU3ltYm9sKHBhcmFtZXRlck5vZGUsIG1ldGhvZFNjb3BlKSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnJldHVyblR5cGUgPSBtZW1iZXJOb2RlLnJldHVyblR5cGVcblx0XHRcdFx0XHQ/IHRoaXMud3JhcFR5cGUobWVtYmVyTm9kZS5yZXR1cm5UeXBlLCBtZXRob2RTY29wZSlcblx0XHRcdFx0XHQ6IFR5cGVzLlZPSUQ7XG5cblx0XHRcdFx0aW50ZXJmYWNlU3ltYm9sLmluc3RhbmNlTWV0aG9kU3ltYm9scy5zZXQobWVtYmVyTm9kZS5uYW1lLCBtZXRob2RTeW1ib2wpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgdHlwZUVycm9yKG1lc3NhZ2U6IHN0cmluZywgbm9kZTogQVNUTm9kZSB8IG51bGwgPSBudWxsKTogbmV2ZXIge1xuXHRcdHRocm93VHlwZUVycm9yKG1lc3NhZ2UsIG5vZGU/LnNwYW4pO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9yZWdpc3RyeS50c1wiO1xuaW1wb3J0IHtBU1RJbXBvcnROb2RlLCBBU1ROb2RlLCBBU1ROb2RlVHlwZX0gZnJvbSBcIi4uL2FzdC50c1wiO1xuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuLi9wYXJzZXIvcGFyc2VyX3NvdXJjZS50c1wiO1xuaW1wb3J0IHtQYXJzZXJ9IGZyb20gXCIuLi9wYXJzZXIvcGFyc2VyLnRzXCI7XG5pbXBvcnQge0Vudmlyb25tZW50fSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0cy50c1wiO1xuaW1wb3J0IHR5cGUge0Fic3RyYWN0RmlsZUxvYWRlcn0gZnJvbSBcIi4uL2xvYWRlcnMudHNcIjtcbmltcG9ydCB7dGhyb3dSdW50aW1lRXJyb3J9IGZyb20gXCIuLi9lcnJvcnMudHNcIjtcblxuZXhwb3J0IGNsYXNzIERlcGVuZGVuY3kge1xuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkgPSBuZXcgT2JqZWN0UmVnaXN0cnkoKTtcblx0bmFtZXM6IHN0cmluZ1tdO1xuXHR1cmw6IHN0cmluZztcblx0YXN0OiBBU1ROb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IobmFtZXM6IHN0cmluZ1tdLCB1cmw6IHN0cmluZykge1xuXHRcdHRoaXMubmFtZXMgPSBuYW1lcztcblx0XHR0aGlzLnVybCA9IHVybDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgRGVwZW5kZW5jeUxvYWRlciB7XG5cdGVudmlyb25tZW50OiBFbnZpcm9ubWVudDtcblx0b2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5O1xuXHRmaWxlTG9hZGVyOiBBYnN0cmFjdEZpbGVMb2FkZXI7XG5cblx0Y29uc3RydWN0b3IoZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGZpbGVMb2FkZXI6IEFic3RyYWN0RmlsZUxvYWRlcikge1xuXHRcdHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5ID0gb2JqZWN0UmVnaXN0cnk7XG5cdFx0dGhpcy5maWxlTG9hZGVyID0gZmlsZUxvYWRlcjtcblx0fVxuXG5cdGFzeW5jIHBhcnNlRGVwZW5kZW5jeShkZXBlbmRlbmN5OiBEZXBlbmRlbmN5KTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIGF3YWl0IHRoaXMucGFyc2VGaWxlKGRlcGVuZGVuY3kudXJsKVxuXHRcdCAgICAgICAgICAgICAgICAgLnRoZW4oYXN0ID0+IGRlcGVuZGVuY3kuYXN0ID0gYXN0KVxuXHRcdCAgICAgICAgICAgICAgICAgLnRoZW4oYXN0ID0+IGRlcGVuZGVuY3kub2JqZWN0UmVnaXN0cnkuY29sbGVjdEFsbChhc3QpKTtcblx0fVxuXG5cdGFzeW5jIGNvbGxlY3REZXBlbmRlbmNpZXMoZGVwZW5kZW5jeTogRGVwZW5kZW5jeSwgZGVwZW5kZW5jaWVzOiBNYXA8c3RyaW5nLCBEZXBlbmRlbmN5Pik6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiBhd2FpdCB0aGlzLmNvbGxlY3RQcm9ncmFtRGVwZW5kZW5jaWVzKGRlcGVuZGVuY3kuYXN0KVxuXHRcdCAgICAgICAgICAgICAgICAgLnRoZW4oY2xhc3NEZXBlbmRlbmNpZXMgPT4ge1xuXHRcdFx0ICAgICAgICAgICAgICAgICBjbGFzc0RlcGVuZGVuY2llcy5mb3JFYWNoKGNsYXNzRGVwZW5kZW5jeSA9PiB7XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgaWYgKGRlcGVuZGVuY2llcy5oYXMoY2xhc3NEZXBlbmRlbmN5LnVybCkpIHtcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgIHJldHVybjtcblx0XHRcdFx0ICAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgZGVwZW5kZW5jaWVzLnNldChjbGFzc0RlcGVuZGVuY3kudXJsLCBjbGFzc0RlcGVuZGVuY3kpO1xuXHRcdFx0ICAgICAgICAgICAgICAgICB9KTtcblx0XHQgICAgICAgICAgICAgICAgIH0pO1xuXHR9XG5cblx0YXN5bmMgY29sbGVjdFByb2dyYW1EZXBlbmRlbmNpZXMoYXN0OiBBU1ROb2RlIHwgbnVsbCk6IFByb21pc2U8TWFwPHN0cmluZywgRGVwZW5kZW5jeT4+IHtcblx0XHRpZiAoYXN0ID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gbmV3IE1hcCgpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGRlZmF1bHREZXBlbmRlbmNpZXMgPSB0aGlzLmRlZmF1bHREZXBlbmRlbmNpZXMoKTtcblx0XHRmb3IgKGNvbnN0IGRlcGVuZGVuY3kgb2YgZGVmYXVsdERlcGVuZGVuY2llcy52YWx1ZXMoKSkge1xuXHRcdFx0YXdhaXQgdGhpcy5wYXJzZURlcGVuZGVuY3koZGVwZW5kZW5jeSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZGVwZW5kZW5jaWVzID0gdGhpcy5jb2xsZWN0Q2xhc3NEZXBlbmRlbmNpZXMoYXN0KTtcblx0XHRmb3IgKGNvbnN0IGRlcGVuZGVuY3kgb2YgZGVwZW5kZW5jaWVzLnZhbHVlcygpKSB7XG5cdFx0XHRhd2FpdCB0aGlzLnBhcnNlRGVwZW5kZW5jeShkZXBlbmRlbmN5KTtcblx0XHRcdGF3YWl0IHRoaXMuY29sbGVjdERlcGVuZGVuY2llcyhkZXBlbmRlbmN5LCBkZXBlbmRlbmNpZXMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgTWFwKFsuLi5kZWZhdWx0RGVwZW5kZW5jaWVzLCAuLi5kZXBlbmRlbmNpZXNdKTtcblx0fVxuXG5cdGRlZmF1bHREZXBlbmRlbmNpZXMoKTogTWFwPHN0cmluZywgRGVwZW5kZW5jeT4ge1xuXHRcdGNvbnN0IGRlcGVuZGVuY2llcyA9IFtcblx0XHRcdG5ldyBEZXBlbmRlbmN5KFsnSXRlcmF0b3InLCAnSXRlcmFibGUnXSwgJy9saWJyYXJ5L2NvbnRyYWN0cy5seXJhJylcblx0XHRdO1xuXG5cdFx0Y29uc3QgbWFwID0gbmV3IE1hcCgpO1xuXHRcdGZvciAoY29uc3QgZGVwZW5kZW5jeSBvZiBkZXBlbmRlbmNpZXMpIHtcblx0XHRcdG1hcC5zZXQoZGVwZW5kZW5jeS51cmwsIGRlcGVuZGVuY3kpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtYXA7XG5cdH1cblxuXHRjb2xsZWN0Q2xhc3NEZXBlbmRlbmNpZXMoYXN0OiBBU1ROb2RlKTogTWFwPHN0cmluZywgRGVwZW5kZW5jeT4ge1xuXHRcdGNvbnN0IGNsYXNzRGVwZW5kZW5jaWVzID0gbmV3IE1hcCgpO1xuXG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIGFzdC5jaGlsZHJlbikge1xuXHRcdFx0aWYgKG5vZGUudHlwZSA9PT0gQVNUTm9kZVR5cGUuSU1QT1JUKSB7XG5cdFx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUSW1wb3J0Tm9kZSkge1xuXHRcdFx0XHRcdGlmIChub2RlLmZyb20gPT09IG51bGwpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoY2xhc3NEZXBlbmRlbmNpZXMuaGFzKG5vZGUuZnJvbSkpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjbGFzc0RlcGVuZGVuY2llcy5zZXQobm9kZS5mcm9tLCBuZXcgRGVwZW5kZW5jeShub2RlLm5hbWVzLCBub2RlLmZyb20pKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBpbXBvcnQgbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZT8uc3Bhbik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3NEZXBlbmRlbmNpZXM7XG5cdH1cblxuXHRwYXJzZUZpbGUodXJsOiBzdHJpbmcpOiBQcm9taXNlPEFTVE5vZGU+IHtcblx0XHRyZXR1cm4gdGhpcy5maWxlTG9hZGVyXG5cdFx0ICAgICAgICAgICAubG9hZCh1cmwpXG5cdFx0ICAgICAgICAgICAudGhlbihjb2RlID0+IHRoaXMucGFyc2VyU291cmNlKG5ldyBTb3VyY2UoY29kZSwgdXJsKSkpO1xuXHR9XG5cblx0cGFyc2VyU291cmNlKHNvdXJjZTogU291cmNlKTogQVNUTm9kZSB7XG5cdFx0cmV0dXJuIG5ldyBQYXJzZXIoc291cmNlKS5wYXJzZSgpO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7QVNUQ2xhc3NOb2RlLCBBU1ROb2RlVHlwZX0gZnJvbSBcIi4uL2NvcmUvYXN0XCI7XG5pbXBvcnQge0NsYXNzRGVmaW5pdGlvbn0gZnJvbSBcIi4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0cy50c1wiO1xuaW1wb3J0IHtQYXJzZXJ9IGZyb20gXCIuLi9jb3JlL3BhcnNlci9wYXJzZXIudHNcIjtcbmltcG9ydCB7dGhyb3dSdW50aW1lRXJyb3J9IGZyb20gXCIuLi9jb3JlL2Vycm9yc1wiO1xuaW1wb3J0IHR5cGUge1NvdXJjZX0gZnJvbSBcIi4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2UudHNcIjtcblxuZXhwb3J0IGNsYXNzIE5hdGl2ZUNsYXNzIHtcblx0bmFtZTogc3RyaW5nO1xuXHRuYXRpdmVJbnN0YW5jZTogYW55O1xuXHRuYXRpdmVDbGFzc1NvdXJjZTogU291cmNlO1xuXHRpc0F1dG9sb2FkQWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbmF0aXZlSW5zdGFuY2U6IGFueSwgc291cmNlOiBTb3VyY2UpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMubmF0aXZlSW5zdGFuY2UgPSBuYXRpdmVJbnN0YW5jZTtcblx0XHR0aGlzLm5hdGl2ZUNsYXNzU291cmNlID0gc291cmNlO1xuXHR9XG5cblx0Z2V0Q2xhc3NEZWZpbml0aW9uKCk6IENsYXNzRGVmaW5pdGlvbiB8IG51bGwge1xuXHRcdGNvbnN0IGFzdCA9IG5ldyBQYXJzZXIodGhpcy5uYXRpdmVDbGFzc1NvdXJjZSkucGFyc2UoKTtcblxuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChub2RlLnR5cGUgPT09IEFTVE5vZGVUeXBlLkNMQVNTKSB7XG5cdFx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUQ2xhc3NOb2RlICYmIG5vZGUubmFtZSA9PT0gdGhpcy5uYW1lKSB7XG5cdFx0XHRcdFx0Y29uc3QgY2xhc3NEZWYgPSBDbGFzc0RlZmluaXRpb24uY29uc3RydWN0RnJvbUFTVChub2RlKTtcblxuXHRcdFx0XHRcdGNsYXNzRGVmLm5hdGl2ZUluc3RhbmNlID0gdGhpcy5uYXRpdmVJbnN0YW5jZTtcblxuXHRcdFx0XHRcdHJldHVybiBjbGFzc0RlZjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRocm93UnVudGltZUVycm9yKGBDbGFzcyAke3RoaXMubmFtZX0gbm90IGZvdW5kLmAsIGFzdC5zcGFuKTtcblxuXHRcdHJldHVybiBudWxsOyAvLyBuZXZlciByZWFjaGVkXG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtBU1RBcnJheU5vZGUsIEFTVE5vZGUsIEFTVE5vZGVUeXBlLCBBU1RSZXR1cm5Ob2RlfSBmcm9tIFwiLi4vYXN0XCI7XG5pbXBvcnQge0dSQU1NQVIsIFRZUEVfRU5VTX0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcbmltcG9ydCB7Q2xhc3NEZWZpbml0aW9uLCBJbnN0YW5jZX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB7dGhyb3dOYXRpdmVFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuXG5pbnRlcmZhY2UgU2VyaWFsaXphdGlvbk9iamVjdCB7XG5cdFtpbmRleDogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdGNsYXNzTmFtZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGNsYXNzTmFtZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG5cdH1cblxuXHRwdWJsaWMgc2VyaWFsaXplKCk6IFNlcmlhbGl6YXRpb25PYmplY3Qge1xuXHRcdGNvbnN0IG9iamVjdDogU2VyaWFsaXphdGlvbk9iamVjdCA9IHt9O1xuXG5cdFx0b2JqZWN0W3RoaXMuY2xhc3NOYW1lXSA9IE9iamVjdFxuXHRcdFx0LmtleXModGhpcylcblx0XHRcdC5maWx0ZXIoa2V5ID0+IGtleSAhPT0gJ2NsYXNzTmFtZScpXG5cdFx0XHQucmVkdWNlKChvYmplY3Q6IFNlcmlhbGl6YXRpb25PYmplY3QsIGtleTogc3RyaW5nKTogU2VyaWFsaXphdGlvbk9iamVjdCA9PiB7XG5cdFx0XHRcdGNvbnN0IGNvcHk6IFNlcmlhbGl6YXRpb25PYmplY3QgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzKTtcblx0XHRcdFx0b2JqZWN0W2tleV0gPSBjb3B5W2tleV07XG5cdFx0XHRcdHJldHVybiBvYmplY3Q7XG5cdFx0XHR9LCB7fSk7XG5cblx0XHRyZXR1cm4gb2JqZWN0O1xuXHR9XG5cblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHtjbGFzc05hbWU6IHRoaXMuY2xhc3NOYW1lfSwgbnVsbCwgMik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFPYmplY3RWaWV3IGV4dGVuZHMgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdHByaXZhdGUgX19pbnN0YW5jZTogSW5zdGFuY2U7XG5cblx0Y29uc3RydWN0b3IoaW5zdGFuY2U6IEluc3RhbmNlKSB7XG5cdFx0c3VwZXIoaW5zdGFuY2UuX19jbGFzc0RlZi5uYW1lKTtcblxuXHRcdHRoaXMuX19pbnN0YW5jZSA9IGluc3RhbmNlO1xuXG5cdFx0cmV0dXJuIG5ldyBQcm94eSh0aGlzLCB7XG5cdFx0XHRnZXQ6IChfOiBhbnksIG5hbWU6IHN0cmluZyk6IGFueSA9PiB7XG5cdFx0XHRcdGlmIChuYW1lIGluIHRoaXMuX19pbnN0YW5jZS5fX2luc3RhbmNlRmllbGRzKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX19pbnN0YW5jZS5fX2luc3RhbmNlRmllbGRzW25hbWVdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKG5hbWUgaW4gdGhpcy5fX2luc3RhbmNlLl9fc3RhdGljRmllbGRzKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX19pbnN0YW5jZS5fX3N0YXRpY0ZpZWxkc1tuYW1lXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChuYW1lIGluIHRoaXMpIHtcblx0XHRcdFx0XHRjb25zdCBzZWxmOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB0aGlzO1xuXHRcdFx0XHRcdHJldHVybiBzZWxmW25hbWVdO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IChfOiBhbnksIG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IGFueSA9PiB7XG5cdFx0XHRcdGlmIChuYW1lIGluIHRoaXMuX19pbnN0YW5jZS5fX2luc3RhbmNlRmllbGRzKSB7XG5cdFx0XHRcdFx0dGhpcy5fX2luc3RhbmNlLl9faW5zdGFuY2VGaWVsZHNbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChuYW1lIGluIHRoaXMuX19pbnN0YW5jZS5fX3N0YXRpY0ZpZWxkcykge1xuXHRcdFx0XHRcdHRoaXMuX19pbnN0YW5jZS5fX3N0YXRpY0ZpZWxkc1tuYW1lXSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdH0pXG5cdH1cblxuXHRwdWJsaWMgb3ZlcnJpZGUgc2VyaWFsaXplKCk6IFNlcmlhbGl6YXRpb25PYmplY3Qge1xuXHRcdGNvbnN0IG9iamVjdDogU2VyaWFsaXphdGlvbk9iamVjdCA9IHt9O1xuXG5cdFx0b2JqZWN0W3RoaXMuY2xhc3NOYW1lXSA9IHsuLi50aGlzLl9faW5zdGFuY2U/Ll9faW5zdGFuY2VGaWVsZHN9O1xuXG5cdFx0cmV0dXJuIG9iamVjdDtcblx0fVxuXG5cdHB1YmxpYyBvdmVycmlkZSB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnNlcmlhbGl6ZSgpLCBudWxsLCAyKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FzdFZhbHVlKHZhbHVlOiBhbnksIGV4cGVjdGVkOiBhbnkgPSBudWxsKTogYW55IHtcblx0Y29uc3QgdHlwZU9mID0gdHlwZW9mIHZhbHVlO1xuXG5cdGlmIChleHBlY3RlZCA9PT0gbnVsbCkge1xuXHRcdGlmICh2YWx1ZSA9PT0gR1JBTU1BUi5OVUxMKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0aWYgKHZhbHVlID09PSBHUkFNTUFSLlRSVUUpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRpZiAodmFsdWUgPT09IEdSQU1NQVIuRkFMU0UpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKHR5cGVPZiA9PT0gJ3N0cmluZycgJiYgdmFsdWUudHJpbSgpICE9PSAnJyAmJiAhaXNOYU4odmFsdWUpKSB7XG5cdFx0XHRyZXR1cm4gTnVtYmVyKHZhbHVlKTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0c3dpdGNoIChleHBlY3RlZCkge1xuXHRcdGNhc2UgVFlQRV9FTlVNLlNUUklORzpcblx0XHRcdHJldHVybiB0eXBlT2YgPT09ICdzdHJpbmcnID8gdmFsdWUgOiBTdHJpbmcodmFsdWUpO1xuXG5cdFx0Y2FzZSBUWVBFX0VOVU0uTlVNQkVSOlxuXHRcdFx0cmV0dXJuIHR5cGVPZiA9PT0gJ251bWJlcicgPyB2YWx1ZSA6IE51bWJlcih2YWx1ZSk7XG5cblx0XHRjYXNlIFRZUEVfRU5VTS5CT09MRUFOOlxuXHRcdFx0cmV0dXJuIHR5cGVPZiA9PT0gJ2Jvb2xlYW4nID8gdmFsdWUgOiB2YWx1ZSA9PT0gJ3RydWUnO1xuXG5cdFx0Y2FzZSBUWVBFX0VOVU0uTlVMTDpcblx0XHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9MeXJhU3RyaW5nKHZhbHVlOiBzdHJpbmcpOiBBU1ROb2RlIHtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLlNUUklORyk7XG5cdG5vZGUudmFsdWUgPSB2YWx1ZTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0x5cmFOdW1iZXIodmFsdWU6IG51bWJlcik6IEFTVE5vZGUge1xuXHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuTlVNQkVSKTtcblx0bm9kZS52YWx1ZSA9IHZhbHVlO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTHlyYUJvb2xlYW4odmFsdWU6IGJvb2xlYW4pOiBBU1ROb2RlIHtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLkJPT0xFQU4pO1xuXHRub2RlLnZhbHVlID0gdmFsdWU7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9MeXJhTnVsbCgpOiBBU1ROb2RlIHtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLk5VTEwpO1xuXHRub2RlLnZhbHVlID0gR1JBTU1BUi5OVUxMO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTHlyYUFycmF5KHZhbHVlczogYW55W10pOiBBU1ROb2RlIHtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RBcnJheU5vZGUoKTtcblx0bm9kZS5lbGVtZW50cyA9IHZhbHVlcy5tYXAodmFsdWUgPT4gdG9MeXJhVmFsdWUodmFsdWUpKTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0x5cmFWYWx1ZSh2YWx1ZTogYW55KTogQVNUTm9kZSB7XG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFTVE5vZGUpIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSBUWVBFX0VOVU0uU1RSSU5HKSB7XG5cdFx0cmV0dXJuIHRvTHlyYVN0cmluZyh2YWx1ZSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSBUWVBFX0VOVU0uTlVNQkVSKSB7XG5cdFx0cmV0dXJuIHRvTHlyYU51bWJlcih2YWx1ZSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSBUWVBFX0VOVU0uQk9PTEVBTikge1xuXHRcdHJldHVybiB0b0x5cmFCb29sZWFuKHZhbHVlKTtcblx0fVxuXG5cdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIHRvTHlyYU51bGwoKTtcblx0fVxuXG5cdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdHJldHVybiB0b0x5cmFBcnJheSh2YWx1ZSk7XG5cdH1cblxuXHR0aHJvd05hdGl2ZUVycm9yKCdDYW5ub3QgY29udmVydCBuYXRpdmUgb2JqZWN0IHRvIEx5cmEgdmFsdWUnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21MeXJhVmFsdWUodmFsdWU6IGFueSk6IGFueSB7XG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFTVE5vZGUpIHtcblx0XHRyZXR1cm4gY2FzdFZhbHVlKHZhbHVlLnZhbHVlKTtcblx0fVxuXG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEluc3RhbmNlKSB7XG5cdFx0aWYgKHZhbHVlLl9fbmF0aXZlSW5zdGFuY2UpIHtcblx0XHRcdHJldHVybiB2YWx1ZS5fX25hdGl2ZUluc3RhbmNlO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgTHlyYU9iamVjdFZpZXcodmFsdWUpO1xuXHR9XG5cblx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0cmV0dXJuIHZhbHVlLm1hcChmcm9tTHlyYVZhbHVlKTtcblx0fVxuXG5cdHJldHVybiBjYXN0VmFsdWUodmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuVmFsdWUodmFsdWU6IGFueSk6IEFTVFJldHVybk5vZGUge1xuXHRjb25zdCBub2RlID0gbmV3IEFTVFJldHVybk5vZGUoKTtcblx0bm9kZS5hcmd1bWVudCA9IHRvTHlyYVZhbHVlKHZhbHVlKTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwTmF0aXZlSW5zdGFuY2UobHlyYU5hdGl2ZU9iamVjdDogTHlyYU5hdGl2ZU9iamVjdCwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogSW5zdGFuY2Uge1xuXHRpZiAoIW9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuaGFzKGx5cmFOYXRpdmVPYmplY3QuY2xhc3NOYW1lKSkge1xuXHRcdHRocm93TmF0aXZlRXJyb3IoYENsYXNzICR7bHlyYU5hdGl2ZU9iamVjdC5jbGFzc05hbWV9IG5vdCBmb3VuZC5gKTtcblx0fVxuXG5cdGNvbnN0IGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24gPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChseXJhTmF0aXZlT2JqZWN0LmNsYXNzTmFtZSk7XG5cblx0Y29uc3QgaW5zdGFuY2UgPSBuZXcgSW5zdGFuY2UoY2xhc3NEZWYpXG5cblx0aW5zdGFuY2UuX19uYXRpdmVJbnN0YW5jZSA9IGx5cmFOYXRpdmVPYmplY3Q7XG5cblx0cmV0dXJuIGluc3RhbmNlO1xufVxuXG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7THlyYU5hdGl2ZU9iamVjdH0gZnJvbSBcIi4uLy4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfY29udmVyc2lvbi50c1wiO1xuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuLi8uLi9jb3JlL3BhcnNlci9wYXJzZXJfc291cmNlLnRzXCI7XG5cbmNvbnN0IENMQVNTX05BTUUgPSAnU3RyaW5nJztcblxuZXhwb3J0IGNsYXNzIEx5cmFTdHJpbmcgZXh0ZW5kcyBMeXJhTmF0aXZlT2JqZWN0IHtcblx0dmFsdWU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIoQ0xBU1NfTkFNRSk7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHR9XG5cblx0Ly8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuXHR0b1VwcGVyQ2FzZSgpOiBMeXJhU3RyaW5nIHtcblx0XHRyZXR1cm4gbmV3IEx5cmFTdHJpbmcodGhpcy52YWx1ZS50b1VwcGVyQ2FzZSgpKTtcblx0fVxuXG5cdC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcblx0dG9Mb3dlckNhc2UoKTogTHlyYVN0cmluZyB7XG5cdFx0cmV0dXJuIG5ldyBMeXJhU3RyaW5nKHRoaXMudmFsdWUudG9Mb3dlckNhc2UoKSk7XG5cdH1cblxuXHRvdmVycmlkZSB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTdHJpbmdUeXBlIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IENMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRDTEFTU19OQU1FLFxuXHRcdFx0THlyYVN0cmluZyxcblx0XHRcdG5ldyBTb3VyY2UoXG5cdFx0XHRcdGBcbmNsYXNzICR7Q0xBU1NfTkFNRX0ge1xuXHRwdWJsaWMgY29uc3RydWN0b3IodmFsdWUpO1xuXHRcdFx0XHRcblx0cHVibGljIHRvVXBwZXJDYXNlKCk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwdWJsaWMgdG9Mb3dlckNhc2UoKTogJHtDTEFTU19OQU1FfTtcblxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IHRydWU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9jb252ZXJzaW9uLnRzXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uLy4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2UudHNcIjtcblxuY29uc3QgQ0xBU1NfTkFNRSA9ICdTeXN0ZW0nO1xuXG5leHBvcnQgY2xhc3MgTHlyYVN5c3RlbSB7XG5cdHN0YXRpYyBhbGVydChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRhbGVydChtZXNzYWdlKTtcblx0fVxuXG5cdHN0YXRpYyBwcmludChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRjb25zb2xlLmxvZyhtZXNzYWdlKTtcblx0fVxuXG5cdHN0YXRpYyBpbmZvKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRjb25zb2xlLmluZm8odmFsdWUuc2VyaWFsaXplKCkpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zb2xlLmluZm8odmFsdWUpO1xuXHR9XG5cblx0c3RhdGljIHdhcm5pbmcodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdGNvbnNvbGUud2Fybih2YWx1ZS5zZXJpYWxpemUoKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnNvbGUud2Fybih2YWx1ZSk7XG5cdH1cblxuXHRzdGF0aWMgZXJyb3IodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IodmFsdWUuc2VyaWFsaXplKCkpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zb2xlLmVycm9yKHZhbHVlKTtcblx0fVxuXG5cdHN0YXRpYyBsb2codmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdGNvbnNvbGUubG9nKHZhbHVlLnNlcmlhbGl6ZSgpKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc29sZS5sb2codmFsdWUpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTeXN0ZW0gZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdENMQVNTX05BTUUsXG5cdFx0XHRMeXJhU3lzdGVtLFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfSB7XG5cdHB1YmxpYyBzdGF0aWMgYWxlcnQobWVzc2FnZTogc3RyaW5nKTogdm9pZDtcblx0XG5cdHB1YmxpYyBzdGF0aWMgcHJpbnQobWVzc2FnZTogc3RyaW5nKTogdm9pZDtcblx0XG5cdHB1YmxpYyBzdGF0aWMgaW5mbyh2YWx1ZTogbWl4ZWQpOiB2b2lkO1xuXHRcblx0cHVibGljIHN0YXRpYyB3YXJuaW5nKHZhbHVlOiBtaXhlZCk6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgc3RhdGljIGVycm9yKHZhbHVlOiBtaXhlZCk6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgc3RhdGljIGxvZyh2YWx1ZTogbWl4ZWQpOiB2b2lkO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IGZhbHNlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vLi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZS50c1wiO1xuXG5jb25zdCBDTEFTU19OQU1FID0gJ0Fzc2VydCc7XG5cbmNvbnN0IGlmRmFpbGVkID0gKG1lc3NhZ2U6IHN0cmluZyA9ICcnKSA9PiB7XG5cdHRocm93IG5ldyBFcnJvcignW0Fzc2VydGlvbkVycm9yXSAnICsgKG1lc3NhZ2UgfHwgJ0Fzc2VydGlvbiBmYWlsZWQuJykpO1xufTtcblxuZXhwb3J0IGNsYXNzIEx5cmFBc3NlcnQge1xuXHRzdGF0aWMgaXNUcnVlKGNvbmRpdGlvbjogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nID0gJycpIHtcblx0XHRpZiAoIWNvbmRpdGlvbikge1xuXHRcdFx0aWZGYWlsZWQobWVzc2FnZSk7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIGlzRmFsc2UoY29uZGl0aW9uOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcgPSAnJykge1xuXHRcdGlmIChjb25kaXRpb24pIHtcblx0XHRcdGlmRmFpbGVkKG1lc3NhZ2UpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQXNzZXJ0IGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IENMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRDTEFTU19OQU1FLFxuXHRcdFx0THlyYUFzc2VydCxcblx0XHRcdG5ldyBTb3VyY2UoXG5cdFx0XHRcdGBcbmNsYXNzICR7Q0xBU1NfTkFNRX0ge1xuXHRwdWJsaWMgc3RhdGljIGlzVHJ1ZShjb25kaXRpb246IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZyA9IFwiXCIpOiB2b2lkO1xuXHRcblx0cHVibGljIHN0YXRpYyBpc0ZhbHNlKGNvbmRpdGlvbjogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nID0gXCJcIik6IHZvaWQ7XG59YFxuXHRcdFx0KSk7XG5cblx0XHR0aGlzLmlzQXV0b2xvYWRBYmxlID0gZmFsc2U7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9jb252ZXJzaW9uLnRzXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uLy4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2UudHNcIjtcblxuY29uc3QgQ0xBU1NfTkFNRSA9ICdOdW1iZXInO1xuXG5leHBvcnQgY2xhc3MgTHlyYU51bWJlciBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHR2YWx1ZTogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKHZhbHVlOiBudW1iZXIpIHtcblx0XHRzdXBlcihDTEFTU19OQU1FKTtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdH1cblxuXHRvdmVycmlkZSB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlLnRvU3RyaW5nKCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE51bWJlclR5cGUgZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdENMQVNTX05BTUUsXG5cdFx0XHRMeXJhTnVtYmVyLFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfSB7XG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWx1ZSk7XG5cblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZztcbn1gXG5cdFx0XHQpKTtcblxuXHRcdHRoaXMuaXNBdXRvbG9hZEFibGUgPSB0cnVlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7THlyYU5hdGl2ZU9iamVjdH0gZnJvbSBcIi4uLy4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfY29udmVyc2lvbi50c1wiO1xuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuLi8uLi9jb3JlL3BhcnNlci9wYXJzZXJfc291cmNlLnRzXCI7XG5cbmNvbnN0IEFSUkFZX0NMQVNTX05BTUUgPSAnQXJyYXknO1xuY29uc3QgQVJSQVlfSVRFUkFUT1JfQ0xBU1NfTkFNRSA9ICdBcnJheUl0ZXJhdG9yJztcblxuZXhwb3J0IGNsYXNzIEx5cmFBcnJheSBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHR2YWx1ZXM6IGFueVtdO1xuXG5cdGNvbnN0cnVjdG9yKHZhbHVlczogYW55W10gPSBbXSkge1xuXHRcdHN1cGVyKEFSUkFZX0NMQVNTX05BTUUpO1xuXG5cdFx0dGhpcy52YWx1ZXMgPSB2YWx1ZXM7XG5cdH1cblxuXHRpdGVyYXRvcigpOiBMeXJhQXJyYXlJdGVyYXRvciB7XG5cdFx0cmV0dXJuIG5ldyBMeXJhQXJyYXlJdGVyYXRvcih0aGlzKTtcblx0fVxuXG5cdGxlbmd0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlcy5sZW5ndGg7XG5cdH1cblxuXHRwdXNoKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLnZhbHVlcy5wdXNoKHZhbHVlKTtcblx0fVxuXG5cdC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcblx0Z2V0KGluZGV4OiBudW1iZXIpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlc1tpbmRleF0gPz8gbnVsbDtcblx0fVxuXG5cdC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcblx0cmVtb3ZlQXQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMudmFsdWVzID0gdGhpcy52YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcblx0fVxuXG5cdG92ZXJyaWRlIHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0Y29uc3QgdmFsdWVzID0gdGhpc1xuXHRcdFx0LnZhbHVlc1xuXHRcdFx0Lm1hcCh2YWx1ZSA9PiB7XG5cdFx0XHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFBcnJheSkge1xuXHRcdFx0XHRcdHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdH0pO1xuXG5cdFx0cmV0dXJuIGBbJHt2YWx1ZXMuam9pbignLCAnKX1dYDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQXJyYXlUeXBlIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IEFSUkFZX0NMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRBUlJBWV9DTEFTU19OQU1FLFxuXHRcdFx0THlyYUFycmF5LFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtBUlJBWV9DTEFTU19OQU1FfTxUPiBpbXBsZW1lbnRzIEl0ZXJhYmxlPFQ+IHtcblx0cHVibGljIGNvbnN0cnVjdG9yKHZhbHVlcyA9IFtdKTtcblx0XG5cdHB1YmxpYyBpdGVyYXRvcigpOiBJdGVyYXRvcjxUPjtcblx0XG5cdHB1YmxpYyBsZW5ndGgoKTogbnVtYmVyO1xuXHRcblx0cHVibGljIHB1c2godmFsdWU6IFQpOiB2b2lkO1xuXHRcblx0cHVibGljIGdldChpbmRleDogbnVtYmVyKTogVD87XG5cdFxuXHRwdWJsaWMgcmVtb3ZlQXQoaW5kZXg6IG51bWJlcik6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFBcnJheUl0ZXJhdG9yIGV4dGVuZHMgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdHZhbHVlczogYW55W107XG5cdGluZGV4OiBudW1iZXIgPSAwO1xuXG5cdGNvbnN0cnVjdG9yKGFycmF5OiBMeXJhQXJyYXkpIHtcblx0XHRzdXBlcihBUlJBWV9JVEVSQVRPUl9DTEFTU19OQU1FKTtcblxuXHRcdHRoaXMudmFsdWVzID0gYXJyYXkudmFsdWVzO1xuXHR9XG5cblx0cmV3aW5kKCkge1xuXHRcdHRoaXMuaW5kZXggPSAwO1xuXHR9XG5cblx0aGFzTmV4dCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pbmRleCA8IHRoaXMudmFsdWVzLmxlbmd0aDtcblx0fVxuXG5cdG5leHQoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaW5kZXggKyAxID4gdGhpcy52YWx1ZXMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5pbmRleCsrO1xuXHR9XG5cblx0Ly8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuXHRwcmV2aW91cygpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pbmRleCArIDEgPCAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5pbmRleC0tO1xuXHR9XG5cblx0Ly8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuXHRrZXkoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5pbmRleDtcblx0fVxuXG5cdGN1cnJlbnQoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXNbdGhpcy5pbmRleF07XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFycmF5SXRlcmF0b3JUeXBlIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IEFSUkFZX0lURVJBVE9SX0NMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRBUlJBWV9JVEVSQVRPUl9DTEFTU19OQU1FLFxuXHRcdFx0THlyYUFycmF5LFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtBUlJBWV9JVEVSQVRPUl9DTEFTU19OQU1FfTxUPiBpbXBsZW1lbnRzIEl0ZXJhdG9yPFQ+IHtcblx0cHVibGljIGNvbnN0cnVjdG9yKGFycmF5OiBBcnJheTxUPik7XG5cdFxuXHRwdWJsaWMgaGFzTmV4dCgpOiBib29sZWFuO1xuXHRcblx0cHVibGljIG5leHQoKTogdm9pZDtcblx0XG5cdHB1YmxpYyBwcmV2aW91cygpOiB2b2lkO1xuXHRcblx0cHVibGljIGtleSgpOiBudW1iZXI7XG5cdFxuXHRwdWJsaWMgY3VycmVudCgpOiBUO1xuXHRcblx0cHVibGljIHJld2luZCgpOiB2b2lkO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IHRydWU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4vbmF0aXZlX2NsYXNzXCI7XG5pbXBvcnQge1N0cmluZ1R5cGV9IGZyb20gXCIuL2NsYXNzZXMvc3RyaW5nXCI7XG5pbXBvcnQge1N5c3RlbX0gZnJvbSBcIi4vY2xhc3Nlcy9zeXN0ZW1cIjtcbmltcG9ydCB7QXNzZXJ0fSBmcm9tIFwiLi9jbGFzc2VzL2Fzc2VydFwiO1xuaW1wb3J0IHtOdW1iZXJUeXBlfSBmcm9tIFwiLi9jbGFzc2VzL251bWJlclwiO1xuaW1wb3J0IHtBcnJheUl0ZXJhdG9yVHlwZSwgQXJyYXlUeXBlfSBmcm9tIFwiLi9jbGFzc2VzL2FycmF5XCI7XG5cbmV4cG9ydCBjbGFzcyBOYXRpdmVDbGFzc2VzIHtcblx0Y2xhc3NlczogTWFwPHN0cmluZywgTmF0aXZlQ2xhc3M+ID0gbmV3IE1hcCgpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuY2xhc3Nlcy5zZXQoQXNzZXJ0LkNMQVNTX05BTUUsIG5ldyBBc3NlcnQoKSk7XG5cdFx0dGhpcy5jbGFzc2VzLnNldChTeXN0ZW0uQ0xBU1NfTkFNRSwgbmV3IFN5c3RlbSgpKTtcblx0XHR0aGlzLmNsYXNzZXMuc2V0KFN0cmluZ1R5cGUuQ0xBU1NfTkFNRSwgbmV3IFN0cmluZ1R5cGUoKSk7XG5cdFx0dGhpcy5jbGFzc2VzLnNldChOdW1iZXJUeXBlLkNMQVNTX05BTUUsIG5ldyBOdW1iZXJUeXBlKCkpO1xuXHRcdHRoaXMuY2xhc3Nlcy5zZXQoQXJyYXlUeXBlLkNMQVNTX05BTUUsIG5ldyBBcnJheVR5cGUoKSk7XG5cdFx0dGhpcy5jbGFzc2VzLnNldChBcnJheUl0ZXJhdG9yVHlwZS5DTEFTU19OQU1FLCBuZXcgQXJyYXlJdGVyYXRvclR5cGUoKSlcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0RlcGVuZGVuY3lMb2FkZXJ9IGZyb20gXCIuL2RlcGVuZGVuY2llcy50c1wiO1xuaW1wb3J0IHtBU1RJbXBvcnROb2RlLCBBU1ROb2RlfSBmcm9tIFwiLi4vYXN0LnRzXCI7XG5pbXBvcnQge05hdGl2ZUNsYXNzZXN9IGZyb20gXCIuLi8uLi9saWJyYXJ5L25hdGl2ZV9jbGFzc2VzLnRzXCI7XG5pbXBvcnQge0Vudmlyb25tZW50LCBJbnRlcmZhY2VEZWZpbml0aW9ufSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0cy50c1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5LnRzXCI7XG5pbXBvcnQgdHlwZSB7QWJzdHJhY3RGaWxlTG9hZGVyfSBmcm9tIFwiLi4vbG9hZGVycy50c1wiO1xuaW1wb3J0IHR5cGUge05hdGl2ZUNsYXNzfSBmcm9tIFwiLi4vLi4vbGlicmFyeS9uYXRpdmVfY2xhc3MudHNcIjtcbmltcG9ydCB7dGhyb3dEZXBlbmRlbmN5RXJyb3J9IGZyb20gXCIuLi9lcnJvcnMudHNcIjtcblxuY29uc3QgbmF0aXZlQ2xhc3NlcyA9IG5ldyBOYXRpdmVDbGFzc2VzKCk7XG5cbmV4cG9ydCBjbGFzcyBMaW5rZXIge1xuXHRlbnZpcm9ubWVudDogRW52aXJvbm1lbnQ7XG5cdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeTtcblx0ZGVwZW5kZW5jeUxvYWRlcjogRGVwZW5kZW5jeUxvYWRlcjtcblxuXHRjb25zdHJ1Y3RvcihlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZmlsZUxvYWRlcjogQWJzdHJhY3RGaWxlTG9hZGVyKSB7XG5cdFx0dGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkgPSBvYmplY3RSZWdpc3RyeTtcblx0XHR0aGlzLmRlcGVuZGVuY3lMb2FkZXIgPSBuZXcgRGVwZW5kZW5jeUxvYWRlcihlbnZpcm9ubWVudCwgb2JqZWN0UmVnaXN0cnksIGZpbGVMb2FkZXIpO1xuXHR9XG5cblx0bGlua1NvdXJjZXMoYXN0OiBBU1ROb2RlKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHRoaXMuZGVwZW5kZW5jeUxvYWRlclxuXHRcdCAgICAgICAgICAgLmNvbGxlY3RQcm9ncmFtRGVwZW5kZW5jaWVzKGFzdClcblx0XHQgICAgICAgICAgIC50aGVuKGRlcGVuZGVuY2llcyA9PiB7XG5cdFx0XHQgICAgICAgICAgIGZvciAoY29uc3QgZGVwZW5kZW5jeSBvZiBkZXBlbmRlbmNpZXMudmFsdWVzKCkpIHtcblx0XHRcdFx0ICAgICAgICAgICBjb25zdCBvYmplY3REZWZpbml0aW9ucyA9IGRlcGVuZGVuY3kub2JqZWN0UmVnaXN0cnlcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmV0Y2hBbGxPYmplY3REZWZpbml0aW9ucygpXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlcygpO1xuXHRcdFx0XHQgICAgICAgICAgIGZvciAobGV0IG9iamVjdERlZiBvZiBvYmplY3REZWZpbml0aW9ucykge1xuXHRcdFx0XHRcdCAgICAgICAgICAgaWYgKG9iamVjdERlZiBpbnN0YW5jZW9mIEludGVyZmFjZURlZmluaXRpb24pIHtcblx0XHRcdFx0XHRcdCAgICAgICAgICAgdGhpcy5vYmplY3RSZWdpc3RyeS5pbnRlcmZhY2VzLnNldChvYmplY3REZWYubmFtZSwgb2JqZWN0RGVmKTtcblx0XHRcdFx0XHQgICAgICAgICAgIH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgIHRoaXMub2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5zZXQob2JqZWN0RGVmLm5hbWUsIG9iamVjdERlZik7XG5cdFx0XHRcdFx0ICAgICAgICAgICB9XG5cdFx0XHRcdFx0ICAgICAgICAgICB0aGlzLmVudmlyb25tZW50LmRlZmluZShvYmplY3REZWYubmFtZSwgb2JqZWN0RGVmKTtcblx0XHRcdFx0ICAgICAgICAgICB9XG5cdFx0XHQgICAgICAgICAgIH1cblx0XHQgICAgICAgICAgIH0pXG5cdFx0ICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLmxvYWROYXRpdmVDbGFzc2VzKGFzdCkpXG5cdH1cblxuXHRsb2FkTmF0aXZlQ2xhc3Nlcyhhc3Q6IEFTVE5vZGUpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgYXN0LmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEltcG9ydE5vZGUpIHtcblx0XHRcdFx0aWYgKG5vZGUuZnJvbSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdGNvbnN0IGNsYXNzTmFtZSA9IG5vZGUubmFtZXNbMF07XG5cdFx0XHRcdFx0aWYgKCFjbGFzc05hbWUpIHtcblx0XHRcdFx0XHRcdHRocm93RGVwZW5kZW5jeUVycm9yKGBJbnZhbGlkIGltcG9ydCBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlPy5zcGFuKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc3QgbmF0aXZlQ2xhc3M6IE5hdGl2ZUNsYXNzIHwgbnVsbCA9IG5hdGl2ZUNsYXNzZXMuY2xhc3Nlcy5nZXQoY2xhc3NOYW1lKSB8fCBudWxsO1xuXHRcdFx0XHRcdGlmICghbmF0aXZlQ2xhc3MpIHtcblx0XHRcdFx0XHRcdHRocm93RGVwZW5kZW5jeUVycm9yKGBVbmtub3duIG5hdGl2ZSBjbGFzcyAke2NsYXNzTmFtZX1gLCBub2RlPy5zcGFuKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc3QgY2xhc3NEZWYgPSBuYXRpdmVDbGFzcy5nZXRDbGFzc0RlZmluaXRpb24oKTtcblx0XHRcdFx0XHRpZiAoIWNsYXNzRGVmKSB7XG5cdFx0XHRcdFx0XHR0aHJvd0RlcGVuZGVuY3lFcnJvcihgQ2xhc3MgZGVmaW5pdGlvbiBmb3IgbmF0aXZlIGNsYXNzICR7Y2xhc3NOYW1lfSBub3QgZm91bmQuYCwgbm9kZT8uc3Bhbik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0aGlzLm9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuaGFzKGNsYXNzTmFtZSkpIHtcblx0XHRcdFx0XHRcdHRocm93RGVwZW5kZW5jeUVycm9yKGBDb3VsZCBub3QgcmVzb2x2ZSBjbGFzcyAke2NsYXNzTmFtZX0uYCwgbm9kZT8uc3Bhbik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMub2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5zZXQoY2xhc3NOYW1lLCBjbGFzc0RlZik7XG5cdFx0XHRcdFx0dGhpcy5lbnZpcm9ubWVudC5kZWZpbmUoY2xhc3NOYW1lLCBjbGFzc0RlZik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtDbGFzc0RlZmluaXRpb24sIENsYXNzTWV0aG9kRGVmaW5pdGlvbiwgRW52aXJvbm1lbnQsIEluc3RhbmNlLCBSZXR1cm5WYWx1ZX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB7XG5cdEFTVEFubm90YXRpb25Ob2RlLFxuXHRBU1RBcnJheU5vZGUsXG5cdEFTVEFzc2lnbm1lbnROb2RlLFxuXHRBU1RCaW5hcnlOb2RlLFxuXHRBU1RDYWxsTm9kZSxcblx0QVNUQ2xhc3NOb2RlLFxuXHRBU1RFeHByZXNzaW9uTm9kZSxcblx0QVNURm9yZWFjaE5vZGUsXG5cdEFTVElmTm9kZSxcblx0QVNUSW5kZXhOb2RlLFxuXHRBU1RMYW1iZGFOb2RlLFxuXHRBU1RNYXRjaENhc2VOb2RlLFxuXHRBU1RNYXRjaE5vZGUsXG5cdEFTVE1lbWJlck5vZGUsXG5cdEFTVE1ldGhvZE5vZGUsXG5cdEFTVE5ld05vZGUsXG5cdEFTVE5vZGUsXG5cdEFTVE5vZGVUeXBlLFxuXHRBU1RQYXJhbWV0ZXJOb2RlLFxuXHRBU1RSZXR1cm5Ob2RlLFxuXHRBU1RUeXBlTm9kZSxcblx0QVNUVW5hcnlOb2RlLFxuXHRBU1RWYXJpYWJsZU5vZGUsXG5cdEFTVFZEb21Ob2RlLFxuXHRBU1RWRG9tVGV4dE5vZGVcbn0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHtHUkFNTUFSLCBUWVBFX0VOVU19IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5pbXBvcnQge05hdGl2ZUNsYXNzZXN9IGZyb20gXCIuLi8uLi9saWJyYXJ5L25hdGl2ZV9jbGFzc2VzXCI7XG5pbXBvcnQge05hdGl2ZUZ1bmN0aW9uLCBOYXRpdmVGdW5jdGlvbnN9IGZyb20gXCIuLi8uLi9saWJyYXJ5L25hdGl2ZV9mdW5jdGlvbnNcIjtcbmltcG9ydCB7Y2FzdFZhbHVlLCBmcm9tTHlyYVZhbHVlLCBMeXJhTmF0aXZlT2JqZWN0LCByZXR1cm5WYWx1ZSwgd3JhcE5hdGl2ZUluc3RhbmNlfSBmcm9tIFwiLi9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge3Rocm93UnVudGltZUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQge0F1dG9ib3hlZFR5cGVzfSBmcm9tIFwiLi4vdHlwZXMvYXV0b2JveGluZ1wiO1xuaW1wb3J0IHtMeXJhQXJyYXl9IGZyb20gXCIuLi8uLi9saWJyYXJ5L2NsYXNzZXMvYXJyYXlcIjtcbmltcG9ydCB0eXBlIHtTb3VyY2VTcGFufSBmcm9tIFwiLi4vcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcbmltcG9ydCB0eXBlIHtWTm9kZX0gZnJvbSBcIi4uL3Zkb20vdmRvbVwiO1xuXG5jb25zdCBuYXRpdmVDbGFzc2VzID0gbmV3IE5hdGl2ZUNsYXNzZXMoKTtcbmNvbnN0IG5hdGl2ZUZ1bmN0aW9ucyA9IG5ldyBOYXRpdmVGdW5jdGlvbnMoKTtcbmNvbnN0IGdsb2JhbEZ1bmN0aW9ucyA9IG5hdGl2ZUZ1bmN0aW9ucy5nZXRHbG9iYWxGdW5jdGlvbnMoKTtcbmNvbnN0IGdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5ID0gbmF0aXZlRnVuY3Rpb25zLmdldEdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5KCk7XG5cbmV4cG9ydCBjbGFzcyBBYnN0cmFjdEZ1bmN0aW9uQ2FsbCB7XG5cdG5vZGU6IEFTVE5vZGU7XG5cdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeTtcblx0ZnVuY3Rpb25FbnY6IEVudmlyb25tZW50O1xuXG5cdGNvbnN0cnVjdG9yKG5vZGU6IEFTVE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZnVuY3Rpb25FbnY6IEVudmlyb25tZW50KSB7XG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5ID0gb2JqZWN0UmVnaXN0cnk7XG5cdFx0dGhpcy5mdW5jdGlvbkVudiA9IGZ1bmN0aW9uRW52O1xuXHR9XG5cblx0Z2V0QVNUQ2FsbE5vZGUoKTogQVNUQ2FsbE5vZGUgfCBudWxsIHtcblx0XHRpZiAodGhpcy5ub2RlIGluc3RhbmNlb2YgQVNUQ2FsbE5vZGUpIHtcblx0XHRcdHJldHVybiB0aGlzLm5vZGU7XG5cdFx0fVxuXHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIG5hdGl2ZSBmdW5jdGlvbiBjYWxsICR7dGhpcy5ub2RlLnR5cGV9LmAsIHRoaXMubm9kZS5zcGFuKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtBU1RMYW1iZGFOb2RlfVxuXHQgKi9cblx0Z2V0QVNUTGFtYmRhTm9kZSgpOiBBU1RMYW1iZGFOb2RlIHwgbnVsbCB7XG5cdFx0aWYgKHRoaXMubm9kZSBpbnN0YW5jZW9mIEFTVExhbWJkYU5vZGUpIHtcblx0XHRcdHJldHVybiB0aGlzLm5vZGU7XG5cdFx0fVxuXHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGxhbWJkYSBjYWxsICR7dGhpcy5ub2RlLnR5cGV9LmAsIHRoaXMubm9kZS5zcGFuKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTGFtYmRhRnVuY3Rpb25DYWxsIGV4dGVuZHMgQWJzdHJhY3RGdW5jdGlvbkNhbGwge1xuXHRldmFsQ2FsbCh0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCwgLi4uYXJnczogYW55W10pOiBhbnkge1xuXHRcdGNvbnN0IG5vZGUgPSB0aGlzLmdldEFTVExhbWJkYU5vZGUoKTtcblx0XHRpZiAobm9kZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoXCJJbnZhbGlkIGZ1bmN0aW9uIGNhbGwuXCIpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNsb3N1cmVFbnYgPSBuZXcgRW52aXJvbm1lbnQodGhpcy5mdW5jdGlvbkVudik7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUucGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgcGFyYW1ldGVyOiBBU1RQYXJhbWV0ZXJOb2RlIHwgbnVsbCA9IG5vZGUucGFyYW1ldGVyc1tpXSB8fCBudWxsO1xuXHRcdFx0aWYgKCFwYXJhbWV0ZXIpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRjbG9zdXJlRW52LmRlZmluZShwYXJhbWV0ZXIubmFtZSwgYXJnc1tpXSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2YWxCbG9jayhub2RlLmNoaWxkcmVuLCB0aGlzLm9iamVjdFJlZ2lzdHJ5LCBjbG9zdXJlRW52LCB0aGlzVmFsdWUsIG5vZGUucmV0dXJuVHlwZSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE5hdGl2ZUZ1bmN0aW9uQ2FsbCBleHRlbmRzIEFic3RyYWN0RnVuY3Rpb25DYWxsIHtcblx0ZXZhbENhbGwodGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwsIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcblx0XHRjb25zdCBjYWxsTm9kZTogQVNUQ2FsbE5vZGUgfCBudWxsID0gdGhpcy5nZXRBU1RDYWxsTm9kZSgpO1xuXHRcdGlmIChjYWxsTm9kZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoJ0ludmFsaWQgZnVuY3Rpb24gY2FsbC4nKTtcblx0XHR9XG5cblx0XHRsZXQgcmVzdWx0OiBhbnkgPSB0aGlzLnJlc29sdmVDYWxsKHRoaXNWYWx1ZSlbY2FsbE5vZGUuY2FsbGVlLm5hbWVdKC4uLmFyZ3MpO1xuXHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRyZXN1bHQgPSB3cmFwTmF0aXZlSW5zdGFuY2UocmVzdWx0LCB0aGlzLm9iamVjdFJlZ2lzdHJ5KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0ID0gcmV0dXJuVmFsdWUocmVzdWx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZhbEJsb2NrKFxuXHRcdFx0W3Jlc3VsdF0sXG5cdFx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0dGhpcy5mdW5jdGlvbkVudixcblx0XHRcdHRoaXNWYWx1ZSxcblx0XHRcdHRoaXMubG9va3VwRnVuY3Rpb25UeXBlKGNhbGxOb2RlLmNhbGxlZS5uYW1lKS5yZXR1cm5UeXBlXG5cdFx0KTtcblx0fVxuXG5cdGxvb2t1cEZ1bmN0aW9uVHlwZShuYW1lOiBzdHJpbmcpOiBOYXRpdmVGdW5jdGlvbiB7XG5cdFx0cmV0dXJuIGdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5LmdldChuYW1lKTtcblx0fVxuXG5cdHJlc29sdmVDYWxsKHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsKTogYW55IHtcblx0XHRjb25zdCBub2RlOiBBU1RDYWxsTm9kZSB8IG51bGwgPSB0aGlzLmdldEFTVENhbGxOb2RlKCk7XG5cdFx0aWYgKG5vZGUgPT09IG51bGwpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKFwiSW52YWxpZCBmdW5jdGlvbiBjYWxsLlwiKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZhbEV4cHJlc3Npb24obm9kZS5jYWxsZWUsIHRoaXMub2JqZWN0UmVnaXN0cnksIHRoaXMuZnVuY3Rpb25FbnYsIHRoaXNWYWx1ZSk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTmF0aXZlQ2xhc3NlcyhvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCk6IHZvaWQge1xuXHRmb3IgKGNvbnN0IG5hdGl2ZUNsYXNzIG9mIG5hdGl2ZUNsYXNzZXMuY2xhc3Nlcy52YWx1ZXMoKSkge1xuXHRcdGlmIChuYXRpdmVDbGFzcy5pc0F1dG9sb2FkQWJsZSkge1xuXHRcdFx0Y29uc3QgY2xhc3NEZWYgPSBuYXRpdmVDbGFzcy5nZXRDbGFzc0RlZmluaXRpb24oKTtcblx0XHRcdGlmIChjbGFzc0RlZiA9PT0gbnVsbCkge1xuXHRcdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihcIkNsYXNzIGRlZmluaXRpb24gaXMgbnVsbC5cIik7XG5cdFx0XHR9XG5cdFx0XHRvYmplY3RSZWdpc3RyeS5jbGFzc2VzLnNldChuYXRpdmVDbGFzcy5uYW1lLCBjbGFzc0RlZik7XG5cdFx0XHRlbnZpcm9ubWVudC5kZWZpbmUobmF0aXZlQ2xhc3MubmFtZSwgY2xhc3NEZWYpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJOYXRpdmVGdW5jdGlvbnMoZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogdm9pZCB7XG5cdGZvciAoY29uc3QgbmFtZSBpbiBnbG9iYWxGdW5jdGlvbnMpIHtcblx0XHRjb25zdCBnbG9iYWxGdW5jdGlvbjogYW55ID0gZ2xvYmFsRnVuY3Rpb25zW25hbWVdO1xuXHRcdGlmICghZ2xvYmFsRnVuY3Rpb24pIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKFwiR2xvYmFsIGZ1bmN0aW9uIGlzIG51bGwuXCIpO1xuXHRcdH1cblx0XHRlbnZpcm9ubWVudC5kZWZpbmUobmFtZSwgZ2xvYmFsRnVuY3Rpb25zKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbE5vZGUobm9kZTogQVNUTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGlmIChub2RlLmlzRXhwcmVzc2lvbikge1xuXHRcdHJldHVybiBuZXcgUmV0dXJuVmFsdWUoZXZhbEV4cHJlc3Npb24obm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpKTtcblx0fVxuXG5cdHN3aXRjaCAobm9kZS50eXBlKSB7XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5QUk9HUkFNTToge1xuXHRcdFx0Zm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRcdGV2YWxOb2RlKGNoaWxkLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5JTVBPUlQ6XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5JTlRFUkZBQ0U6IHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkNMQVNTOiB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVENsYXNzTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbENsYXNzKG5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBjbGFzcyBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLlZBUklBQkxFOiB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVFZhcmlhYmxlTm9kZSkge1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IG5vZGUuaW5pdFxuXHRcdFx0XHRcdD8gZXZhbEV4cHJlc3Npb24obm9kZS5pbml0LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSlcblx0XHRcdFx0XHQ6IG51bGw7XG5cdFx0XHRcdGVudmlyb25tZW50LmRlZmluZShub2RlLm5hbWUsIHZhbHVlKTtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCB2YXJpYWJsZSBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLklGOiB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVElmTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbElmKG5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGlmIG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuTUFUQ0g6IHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUTWF0Y2hOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsTWF0Y2gobm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgbWF0Y2ggbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5GT1JFQUNIOiB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEZvcmVhY2hOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsRm9yZWFjaChub2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBmb3JlYWNoIG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuRVhQUkVTU0lPTjoge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RFeHByZXNzaW9uTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbEV4cHJlc3Npb24obm9kZS5leHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBleHByZXNzaW9uIG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuUkVUVVJOOiB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVFJldHVybk5vZGUpIHtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBub2RlLmFyZ3VtZW50XG5cdFx0XHRcdFx0PyBldmFsRXhwcmVzc2lvbihub2RlLmFyZ3VtZW50LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSlcblx0XHRcdFx0XHQ6IG51bGw7XG5cdFx0XHRcdHJldHVybiBuZXcgUmV0dXJuVmFsdWUodmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgcmV0dXJuIG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXHRcdGRlZmF1bHQ6IHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBVbmhhbmRsZWQgbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlRnJvbU5vZGUobm9kZTogQVNUQ2xhc3NOb2RlKTogSW5zdGFuY2Uge1xuXHRyZXR1cm4gbmV3IEluc3RhbmNlKENsYXNzRGVmaW5pdGlvbi5jb25zdHJ1Y3RGcm9tQVNUKG5vZGUpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVySW5zdGFuY2Uobm9kZTogQVNUQ2xhc3NOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpOiBJbnN0YW5jZSB7XG5cdGxldCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uO1xuXG5cdGlmIChvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmhhcyhub2RlLm5hbWUpKSB7XG5cdFx0Y2xhc3NEZWYgPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChub2RlLm5hbWUpO1xuXHR9IGVsc2Uge1xuXHRcdGNsYXNzRGVmID0gQ2xhc3NEZWZpbml0aW9uLmNvbnN0cnVjdEZyb21BU1Qobm9kZSk7XG5cblx0XHRvYmplY3RSZWdpc3RyeS5jbGFzc2VzLnNldChub2RlLm5hbWUsIGNsYXNzRGVmKTtcblx0fVxuXG5cdHJldHVybiBuZXcgSW5zdGFuY2UoY2xhc3NEZWYpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbE5hdGl2ZUluc3RhbmNlKGV4cHI6IEFTVE5ld05vZGUsIGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogSW5zdGFuY2Uge1xuXHRjb25zdCBpbnN0YW5jZTogSW5zdGFuY2UgPSBuZXcgSW5zdGFuY2UoY2xhc3NEZWYpO1xuXHRjb25zdCBjb25zdHJ1Y3RvcjogQ2xhc3NNZXRob2REZWZpbml0aW9uIHwgbnVsbCA9IGNsYXNzRGVmLmNvbnN0cnVjdG9yTWV0aG9kO1xuXHRjb25zdCBjb25zdHJ1Y3RvckVudjogRW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpO1xuXG5cdGNvbnN0IGNvbnN0cnVjdG9yQXJnczogYW55W10gPSBldmFsTWV0aG9kQXJndW1lbnRzKFxuXHRcdGV4cHIsXG5cdFx0Y29uc3RydWN0b3Jcblx0XHRcdD8gY29uc3RydWN0b3IucGFyYW1ldGVyc1xuXHRcdFx0OiBbXSxcblx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRlbnZpcm9ubWVudCxcblx0XHRpbnN0YW5jZVxuXHQpO1xuXG5cdGNvbnN0cnVjdG9yRW52LmRlZmluZShHUkFNTUFSLlRISVMsIGluc3RhbmNlKTtcblxuXHRpZiAoY2xhc3NEZWYubmF0aXZlSW5zdGFuY2UgPT09IG51bGwpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcignQ2xhc3MgaGFzIG5vIG5hdGl2ZSBpbnN0YW5jZScpO1xuXHR9XG5cblx0Y29uc3QgbmF0aXZlSW5zdGFuY2UgPSBuZXcgY2xhc3NEZWYubmF0aXZlSW5zdGFuY2UoLi4uY29uc3RydWN0b3JBcmdzLm1hcChmcm9tTHlyYVZhbHVlKSk7XG5cdGlmIChuYXRpdmVJbnN0YW5jZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlID0gbmF0aXZlSW5zdGFuY2U7XG5cdH1cblxuXHRyZXR1cm4gaW5zdGFuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsSW5zdGFuY2UoZXhwcjogQVNUTmV3Tm9kZSwgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQpOiBJbnN0YW5jZSB7XG5cdGNvbnN0IGluc3RhbmNlID0gbmV3IEluc3RhbmNlKGNsYXNzRGVmKTtcblxuXHRpZiAoY2xhc3NEZWYuY29uc3RydWN0b3JNZXRob2QpIHtcblx0XHRjb25zdCBjb25zdHJ1Y3RvciA9IGNsYXNzRGVmLmNvbnN0cnVjdG9yTWV0aG9kO1xuXHRcdGNvbnN0IGNvbnN0cnVjdG9yRW52ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblxuXHRcdGNvbnN0IGNvbnN0cnVjdG9yQXJncyA9IGV2YWxNZXRob2RBcmd1bWVudHMoZXhwcixcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yLnBhcmFtZXRlcnMsXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RSZWdpc3RyeSxcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudmlyb25tZW50LFxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UpO1xuXG5cdFx0Y29uc3RydWN0b3JFbnYuZGVmaW5lKEdSQU1NQVIuVEhJUywgaW5zdGFuY2UpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb25zdHJ1Y3RvckFyZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHBhcmFtZXRlcjogQVNUUGFyYW1ldGVyTm9kZSB8IG51bGwgPSBjb25zdHJ1Y3Rvci5wYXJhbWV0ZXJzW2ldIHx8IG51bGw7XG5cdFx0XHRpZiAocGFyYW1ldGVyKSB7XG5cdFx0XHRcdGNvbnN0cnVjdG9yRW52LmRlZmluZShwYXJhbWV0ZXIubmFtZSwgY29uc3RydWN0b3JBcmdzW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIGNvbnN0cnVjdG9yLmNoaWxkcmVuKSB7XG5cdFx0XHRldmFsTm9kZShjaGlsZCwgb2JqZWN0UmVnaXN0cnksIGNvbnN0cnVjdG9yRW52LCBpbnN0YW5jZSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGluc3RhbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbENsYXNzKG5vZGU6IEFTVENsYXNzTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQpOiB2b2lkIHtcblx0Y29uc3QgaW5zdGFuY2UgPSByZWdpc3Rlckluc3RhbmNlKG5vZGUsIG9iamVjdFJlZ2lzdHJ5KTtcblx0bGV0IHJhd1ZhbHVlO1xuXHRmb3IgKGNvbnN0IGZpZWxkIG9mIGluc3RhbmNlLl9fY2xhc3NEZWYuaW5zdGFuY2VGaWVsZHMpIHtcblx0XHRyYXdWYWx1ZSA9IGZpZWxkLmluaXRpYWxpemVyXG5cdFx0XHQ/IGV2YWxFeHByZXNzaW9uKGZpZWxkLmluaXRpYWxpemVyLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpXG5cdFx0XHQ6IG51bGw7XG5cblx0XHRpbnN0YW5jZS5fX2luc3RhbmNlRmllbGRzW2ZpZWxkLm5hbWVdID0gY2FzdFZhbHVlKHJhd1ZhbHVlLCBmaWVsZC50eXBlKTtcblx0fVxuXHRmb3IgKGNvbnN0IGZpZWxkIG9mIGluc3RhbmNlLl9fY2xhc3NEZWYuc3RhdGljRmllbGRzKSB7XG5cdFx0cmF3VmFsdWUgPSBmaWVsZC5pbml0aWFsaXplclxuXHRcdFx0PyBldmFsRXhwcmVzc2lvbihmaWVsZC5pbml0aWFsaXplciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50KVxuXHRcdFx0OiBudWxsO1xuXG5cdFx0aW5zdGFuY2UuX19zdGF0aWNGaWVsZHNbZmllbGQubmFtZV0gPSBjYXN0VmFsdWUocmF3VmFsdWUsIGZpZWxkLnR5cGUpO1xuXHR9XG5cdGVudmlyb25tZW50LmRlZmluZShub2RlLm5hbWUsIGluc3RhbmNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxOZXcoZXhwcjogQVNUTmV3Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQpOiBJbnN0YW5jZSB7XG5cdGlmICghb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5oYXMoZXhwci5uYW1lKSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBVbmtub3duIGNsYXNzICR7ZXhwci5uYW1lfS5gLCBleHByLnNwYW4pO1xuXG5cdH1cblx0Y29uc3QgY2xhc3NEZWYgPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChleHByLm5hbWUpO1xuXHRpZiAoY2xhc3NEZWYubmF0aXZlSW5zdGFuY2UpIHtcblx0XHRyZXR1cm4gZXZhbE5hdGl2ZUluc3RhbmNlKGV4cHIsIGNsYXNzRGVmLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpO1xuXHR9XG5cdHJldHVybiBldmFsSW5zdGFuY2UoZXhwciwgY2xhc3NEZWYsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsRXhwcmVzc2lvbihleHByOiBBU1ROb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0c3dpdGNoIChleHByLnR5cGUpIHtcblx0XHRjYXNlIEFTVE5vZGVUeXBlLlNUUklORzpcblx0XHRjYXNlIEFTVE5vZGVUeXBlLk5VTUJFUjpcblx0XHRjYXNlIEFTVE5vZGVUeXBlLkJPT0xFQU46IHtcblx0XHRcdHJldHVybiBleHByLnZhbHVlO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLk5VTEw6IHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLklERU5USUZJRVI6IHtcblx0XHRcdHJldHVybiBlbnZpcm9ubWVudC5nZXQoZXhwci5uYW1lKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5USElTOiB7XG5cdFx0XHRpZiAoIXRoaXNWYWx1ZSkge1xuXHRcdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgdGhpcyB1c2VkIG91dHNpZGUgb2YgbWV0aG9kLmAsIGV4cHIuc3Bhbik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpc1ZhbHVlO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkJJTkFSWToge1xuXHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RCaW5hcnlOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsQmluYXJ5KGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGJpbmFyeSBleHByZXNzaW9uICR7ZXhwci50eXBlfWApO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLlVOQVJZOiB7XG5cdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVFVuYXJ5Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbFVuYXJ5KGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIHVuYXJ5IGV4cHJlc3Npb24gJHtleHByLnR5cGV9LmAsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuQVNTSUdOTUVOVDoge1xuXHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RBc3NpZ25tZW50Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbEFzc2lnbihleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBhc3NpZ25tZW50IGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5NRU1CRVI6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbE1lbWJlcihleHByLCBlbnZpcm9ubWVudCk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBtZW1iZXIgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkNBTEw6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQ2FsbE5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxDYWxsKGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGNhbGwgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLlZET006IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUVkRvbU5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxWRG9tTm9kZShleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBjYWxsIGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5ORVc6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTmV3Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbE5ldyhleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgY2FsbCBleHByZXNzaW9uICR7ZXhwci50eXBlfWAsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuQVJSQVk6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQXJyYXlOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsQXJyYXkoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgYXJyYXkgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLklOREVYOiB7XG5cdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVEluZGV4Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbEluZGV4KGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGluZGV4IGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5MQU1CREE6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTGFtYmRhTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbExhbWJkYShleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgbGFtYmRhIGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0ZGVmYXVsdDoge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVuaGFuZGxlZCBleHByZXNzaW9uICR7ZXhwci50eXBlfS5gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEJpbmFyeShleHByOiBBU1RCaW5hcnlOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0Y29uc3QgbGVmdDogYW55ID0gY2FzdFZhbHVlKGV2YWxFeHByZXNzaW9uKGV4cHIubGVmdCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpKVxuXHRjb25zdCByaWdodDogYW55ID0gY2FzdFZhbHVlKGV2YWxFeHByZXNzaW9uKGV4cHIucmlnaHQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKSlcblxuXHRzd2l0Y2ggKGV4cHIub3BlcmF0b3IpIHtcblx0XHRjYXNlIEdSQU1NQVIuUExVUzoge1xuXHRcdFx0cmV0dXJuIGxlZnQgKyByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLk1JTlVTOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCAtIHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTVVMVElQTFk6IHtcblx0XHRcdHJldHVybiBsZWZ0ICogcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5ESVZJREU6IHtcblx0XHRcdHJldHVybiBsZWZ0IC8gcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5NT0RVTFVTOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCAlIHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTEVTU19USEFOOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCA8IHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuR1JFQVRFUl9USEFOOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCA+IHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTEVTU19FUVVBTDoge1xuXHRcdFx0cmV0dXJuIGxlZnQgPD0gcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5HUkVBVEVSX0VRVUFMOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCA+PSByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkVRVUFMOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCA9PT0gcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5OT1RfRVFVQUw6IHtcblx0XHRcdHJldHVybiBsZWZ0ICE9PSByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkFORDoge1xuXHRcdFx0cmV0dXJuIGxlZnQgJiYgcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5PUjoge1xuXHRcdFx0cmV0dXJuIGxlZnQgfHwgcmlnaHQ7XG5cdFx0fVxuXHRcdGRlZmF1bHQ6IHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBVbmtub3duIG9wZXJhdG9yICR7ZXhwci5vcGVyYXRvcn1gKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxBcnJheShleHByOiBBU1RBcnJheU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBJbnN0YW5jZSB7XG5cdGNvbnN0IHZhbHVlczogYW55W10gPSBbXTtcblx0Zm9yIChjb25zdCBlbGVtIG9mIGV4cHIuZWxlbWVudHMpIHtcblx0XHR2YWx1ZXMucHVzaChldmFsRXhwcmVzc2lvbihlbGVtLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSkpO1xuXHR9XG5cblx0Y29uc3QgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KCdBcnJheScpO1xuXHRjb25zdCBpbnN0YW5jZSA9IG5ldyBJbnN0YW5jZShjbGFzc0RlZik7XG5cblx0aW5zdGFuY2UuX19uYXRpdmVJbnN0YW5jZSA9IG5ldyBjbGFzc0RlZi5uYXRpdmVJbnN0YW5jZShmcm9tTHlyYVZhbHVlKHZhbHVlcykpO1xuXG5cdHJldHVybiBpbnN0YW5jZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FTVEluZGV4Tm9kZX0gZXhwclxuICogQHBhcmFtIHtPYmplY3RSZWdpc3RyeX0gb2JqZWN0UmVnaXN0cnlcbiAqIEBwYXJhbSB7RW52aXJvbm1lbnR9IGVudmlyb25tZW50XG4gKiBAcGFyYW0ge0luc3RhbmNlfG51bGx9IHRoaXNWYWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZXZhbEluZGV4KGV4cHI6IEFTVEluZGV4Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCkge1xuXHRpZiAoIWV4cHIub2JqZWN0KSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYEluZGV4IGFjY2VzcyBvbiBudWxsLmAsIGV4cHIuc3Bhbik7XG5cdH1cblxuXHRpZiAoIWV4cHIuaW5kZXgpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgQWNjZXNzIHdpdGggdW5zcGVjaWZpYyBpbmRleC5gLCBleHByLnNwYW4pO1xuXHR9XG5cblx0Y29uc3Qgb2JqZWN0ID0gZXZhbEV4cHJlc3Npb24oZXhwci5vYmplY3QsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0Y29uc3QgaW5kZXggPSBldmFsRXhwcmVzc2lvbihleHByLmluZGV4LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cblx0aWYgKCEob2JqZWN0IGluc3RhbmNlb2YgTHlyYUFycmF5IHx8IG9iamVjdC5fX25hdGl2ZUluc3RhbmNlIGluc3RhbmNlb2YgTHlyYUFycmF5KSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKCdJbmRleCBhY2Nlc3Mgb24gbm9uLWFycmF5JywgZXhwci5zcGFuKTtcblx0fVxuXG5cdGNvbnN0IHRhcmdldCA9IG9iamVjdCBpbnN0YW5jZW9mIEx5cmFBcnJheSA/IG9iamVjdCA6IG9iamVjdC5fX25hdGl2ZUluc3RhbmNlO1xuXHRjb25zdCB2YWx1ZSA9IHRhcmdldC52YWx1ZXNbaW5kZXhdO1xuXG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRyZXR1cm4gd3JhcE5hdGl2ZUluc3RhbmNlKHZhbHVlLCBvYmplY3RSZWdpc3RyeSk7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsTGFtYmRhKG5vZGU6IEFTVExhbWJkYU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgbGFtYmRhRW52OiBFbnZpcm9ubWVudCk6IExhbWJkYUZ1bmN0aW9uQ2FsbCB7XG5cdHJldHVybiBuZXcgTGFtYmRhRnVuY3Rpb25DYWxsKG5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBsYW1iZGFFbnYpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsQXNzaWduKGV4cHI6IEFTVEFzc2lnbm1lbnROb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0Y29uc3QgdmFsdWUgPSBldmFsRXhwcmVzc2lvbihleHByLnJpZ2h0LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cblx0aWYgKGV4cHIubGVmdC50eXBlID09PSBBU1ROb2RlVHlwZS5NRU1CRVIpIHtcblx0XHRpZiAoZXhwci5sZWZ0IGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkge1xuXHRcdFx0Y29uc3Qgb2JqZWN0ID0gZXZhbEV4cHJlc3Npb24oZXhwci5sZWZ0Lm9iamVjdCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXG5cdFx0XHRpZiAoZXhwci5sZWZ0Lm9iamVjdC50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0XHRcdG9iamVjdC5fX3N0YXRpY0ZpZWxkc1tleHByLmxlZnQucHJvcGVydHldID0gdmFsdWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvYmplY3QuX19pbnN0YW5jZUZpZWxkc1tleHByLmxlZnQucHJvcGVydHldID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIG1lbWJlciBleHByZXNzaW9uICR7ZXhwci50eXBlfWAsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGVudmlyb25tZW50LnNldChleHByLmxlZnQubmFtZSwgdmFsdWUpO1xuXHR9XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxNZW1iZXIoZXhwcjogQVNUTWVtYmVyTm9kZSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogYW55IHtcblx0Y29uc3Qgb2JqZWN0ID0gZW52aXJvbm1lbnQuZ2V0KGV4cHIub2JqZWN0Lm5hbWUpO1xuXG5cdGlmIChleHByLnByb3BlcnR5IGluIG9iamVjdC5fX2luc3RhbmNlRmllbGRzKSB7XG5cdFx0cmV0dXJuIG9iamVjdC5fX2luc3RhbmNlRmllbGRzW2V4cHIucHJvcGVydHldO1xuXHR9XG5cblx0aWYgKGV4cHIucHJvcGVydHkgaW4gb2JqZWN0Ll9fc3RhdGljRmllbGRzKSB7XG5cdFx0cmV0dXJuIG9iamVjdC5fX3N0YXRpY0ZpZWxkc1tleHByLnByb3BlcnR5XTtcblx0fVxuXG5cdHRocm93UnVudGltZUVycm9yKGBVbmtub3duIG1lbWJlciAke2V4cHIucHJvcGVydHl9YCwgZXhwci5zcGFuKTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbENhbGwoZXhwcjogQVNUQ2FsbE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHQvLyBzdXBlciBjYWxsIGluc2lkZSBjb25zdHJ1Y3RvclxuXHRpZiAoZXhwci5jYWxsZWUudHlwZSA9PT0gQVNUTm9kZVR5cGUuSURFTlRJRklFUiAmJiBleHByLmNhbGxlZS5uYW1lID09PSBHUkFNTUFSLlNVUEVSKSB7XG5cdFx0aWYgKCF0aGlzVmFsdWUgfHwgIXRoaXNWYWx1ZS5fX2NsYXNzRGVmPy5zdXBlckNsYXNzKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcignc3VwZXIoKSB1c2VkIG91dHNpZGUgb2Ygc3ViY2xhc3MgY29uc3RydWN0b3InKTtcblx0XHR9XG5cblx0XHRjb25zdCBzdXBlckNsYXNzRGVmID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQodGhpc1ZhbHVlLl9fY2xhc3NEZWYuc3VwZXJDbGFzcyk7XG5cdFx0Y29uc3QgY29uc3RydWN0b3JNZXRob2QgPSBzdXBlckNsYXNzRGVmLmNvbnN0cnVjdG9yTWV0aG9kO1xuXG5cdFx0aWYgKCFjb25zdHJ1Y3Rvck1ldGhvZCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY29uc3RydWN0b3JFbnYgPSBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpO1xuXHRcdGNvbnN0cnVjdG9yRW52LmRlZmluZShHUkFNTUFSLlRISVMsIHRoaXNWYWx1ZSk7XG5cblx0XHRiaW5kTWV0aG9kUGFyYW1ldGVycyhleHByLFxuXHRcdCAgICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yTWV0aG9kLnBhcmFtZXRlcnMsXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgb2JqZWN0UmVnaXN0cnksXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3JFbnYsXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgZW52aXJvbm1lbnQsXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgdGhpc1ZhbHVlXG5cdFx0KTtcblxuXHRcdGZvciAoY29uc3QgY2hpbGQgb2YgY29uc3RydWN0b3JNZXRob2QuY2hpbGRyZW4pIHtcblx0XHRcdGV2YWxOb2RlKGNoaWxkLCBvYmplY3RSZWdpc3RyeSwgY29uc3RydWN0b3JFbnYsIHRoaXNWYWx1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRpZiAoZXhwci5jYWxsZWUudHlwZSA9PT0gQVNUTm9kZVR5cGUuTUVNQkVSKSB7XG5cdFx0aWYgKGV4cHIuY2FsbGVlIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkge1xuXHRcdFx0aWYgKGV4cHIuY2FsbGVlLm9iamVjdC50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0XHRcdGNvbnN0IGNsYXNzTmFtZSA9IGV4cHIuY2FsbGVlLm9iamVjdC5uYW1lO1xuXG5cdFx0XHRcdGlmIChvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmhhcyhjbGFzc05hbWUpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGV2YWxTdGF0aWNDYWxsKGV4cHIsIGNsYXNzTmFtZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZXZhbEluc3RhbmNlQ2FsbChleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gZXZhbEZ1bmN0aW9uQ2FsbChleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsRnVuY3Rpb25DYWxsKGV4cHI6IEFTVENhbGxOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKSB7XG5cdGNvbnN0IGZ1bmN0aW9uQ2FsbCA9IGV2YWxFeHByZXNzaW9uKGV4cHIuY2FsbGVlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdGNvbnN0IGFyZ3MgPSBldmFsQ2FsbEFyZ3VtZW50cyhleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cblx0aWYgKGZ1bmN0aW9uQ2FsbCBpbnN0YW5jZW9mIExhbWJkYUZ1bmN0aW9uQ2FsbCkge1xuXHRcdHJldHVybiBmdW5jdGlvbkNhbGwuZXZhbENhbGwodGhpc1ZhbHVlLCAuLi5hcmdzKTtcblx0fVxuXG5cdHJldHVybiAobmV3IE5hdGl2ZUZ1bmN0aW9uQ2FsbChleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpKS5ldmFsQ2FsbCh0aGlzVmFsdWUsIC4uLmFyZ3MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbFN0YXRpY0NhbGwoZXhwcjogQVNUQ2FsbE5vZGUsIGNsYXNzTmFtZTogc3RyaW5nLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKSB7XG5cblx0aWYgKCEoZXhwci5jYWxsZWUgaW5zdGFuY2VvZiBBU1RNZW1iZXJOb2RlKSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIG1lbWJlciBleHByZXNzaW9uICR7ZXhwci50eXBlfWAsIGV4cHIuc3Bhbik7XG5cdH1cblxuXHRjb25zdCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQoY2xhc3NOYW1lKTtcblx0Y29uc3QgbWV0aG9kRGVmOiBDbGFzc01ldGhvZERlZmluaXRpb24gfCB1bmRlZmluZWQgPSBjbGFzc0RlZi5zdGF0aWNNZXRob2RzW2V4cHIuY2FsbGVlLnByb3BlcnR5XTtcblxuXHRpZiAoIW1ldGhvZERlZikge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBTdGF0aWMgbWV0aG9kICR7Y2xhc3NOYW1lfS4ke2V4cHIuY2FsbGVlLnByb3BlcnR5fSBub3QgZm91bmRgLCBleHByLmNhbGxlZS5zcGFuKTtcblx0fVxuXG5cdGlmIChjbGFzc0RlZi5uYXRpdmVJbnN0YW5jZSAmJiBjbGFzc0RlZi5uYXRpdmVJbnN0YW5jZVttZXRob2REZWYubmFtZV0pIHtcblx0XHRjb25zdCBhcmdzID0gZXZhbE1ldGhvZEFyZ3VtZW50cyhleHByLCBtZXRob2REZWYucGFyYW1ldGVycywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpXG5cdFx0Y29uc3QgcmF3QXJncyA9IGFyZ3MubWFwKGZyb21MeXJhVmFsdWUpO1xuXHRcdGNvbnN0IHJlc3VsdCA9IGNsYXNzRGVmLm5hdGl2ZUluc3RhbmNlW21ldGhvZERlZi5uYW1lXSguLi5yYXdBcmdzKTtcblxuXHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRyZXR1cm4gd3JhcE5hdGl2ZUluc3RhbmNlKHJlc3VsdCwgb2JqZWN0UmVnaXN0cnkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmFsQmxvY2soW3JldHVyblZhbHVlKHJlc3VsdCldLFxuXHRcdCAgICAgICAgICAgICAgICAgb2JqZWN0UmVnaXN0cnksXG5cdFx0ICAgICAgICAgICAgICAgICBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpLFxuXHRcdCAgICAgICAgICAgICAgICAgdGhpc1ZhbHVlLFxuXHRcdCAgICAgICAgICAgICAgICAgbWV0aG9kRGVmLnJldHVyblR5cGVcblx0XHQpO1xuXHR9XG5cblx0Y29uc3QgbWV0aG9kRW52ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblxuXHRiaW5kTWV0aG9kUGFyYW1ldGVycyhleHByLCBtZXRob2REZWYucGFyYW1ldGVycywgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cblx0cmV0dXJuIGV2YWxCbG9jayhtZXRob2REZWYuY2hpbGRyZW4sIG9iamVjdFJlZ2lzdHJ5LCBtZXRob2RFbnYsIHRoaXNWYWx1ZSwgbWV0aG9kRGVmLnJldHVyblR5cGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEluc3RhbmNlQ2FsbChleHByOiBBU1RDYWxsTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCkge1xuXHRpZiAoIShleHByLmNhbGxlZSBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpKSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgbWVtYmVyIGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0fVxuXG5cdC8vIE9iamVrdCBhdXN3ZXJ0ZW4gKHUgfCB0aGlzIHwgc3VwZXIpXG5cdGxldCB0YXJnZXQgPSBldmFsRXhwcmVzc2lvbihleHByLmNhbGxlZS5vYmplY3QsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblxuXHR0YXJnZXQgPSBhdXRvQm94SWZOZWVkZWQodGFyZ2V0LCBvYmplY3RSZWdpc3RyeSwgZXhwci5jYWxsZWUuc3Bhbik7XG5cblx0aWYgKCF0YXJnZXQgfHwgIXRhcmdldC5fX2NsYXNzRGVmKSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoJ0luc3RhbmNlIGNhbGwgb24gbm9uLW9iamVjdCcsIGV4cHIuY2FsbGVlLnNwYW4pO1xuXHR9XG5cblx0bGV0IGNsYXNzRGVmID0gdGFyZ2V0Ll9fY2xhc3NEZWY7XG5cblx0Ly8gc3VwZXIubWV0aG9kKClcblx0aWYgKGV4cHIuY2FsbGVlLm9iamVjdC50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSICYmIGV4cHIuY2FsbGVlLm9iamVjdC5uYW1lID09PSAnc3VwZXInKSB7XG5cdFx0Y29uc3Qgc3VwZXJOYW1lID0gY2xhc3NEZWYuc3VwZXJDbGFzcztcblx0XHRpZiAoIXN1cGVyTmFtZSkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoJ3N1cGVyIHVzZWQgYnV0IG5vIHN1cGVyY2xhc3MnLCBleHByLmNhbGxlZS5zcGFuKTtcblx0XHR9XG5cdFx0Y2xhc3NEZWYgPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChzdXBlck5hbWUpO1xuXHR9XG5cblxuXHRjb25zdCBtZXRob2REZWY6IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB8IG51bGwgPSByZXNvbHZlSW5zdGFuY2VNZXRob2QoY2xhc3NEZWYsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RSZWdpc3RyeSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHIuY2FsbGVlLnByb3BlcnR5KTtcblx0aWYgKCFtZXRob2REZWYpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgTWV0aG9kICR7ZXhwci5jYWxsZWUucHJvcGVydHl9IG5vdCBmb3VuZCBvbiAke2NsYXNzRGVmLm5hbWV9YCwgZXhwci5jYWxsZWUuc3Bhbik7XG5cdH1cblxuXHRjb25zdCBtZXRob2RFbnYgPSBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpO1xuXHRtZXRob2RFbnYuZGVmaW5lKEdSQU1NQVIuVEhJUywgdGFyZ2V0KTtcblxuXHRpZiAodGFyZ2V0Ll9fbmF0aXZlSW5zdGFuY2UgJiYgbWV0aG9kRGVmLm5hbWUgaW4gdGFyZ2V0Ll9fbmF0aXZlSW5zdGFuY2UpIHtcblx0XHRjb25zdCBhcmdzID0gZXZhbE1ldGhvZEFyZ3VtZW50cyhleHByLCBtZXRob2REZWYucGFyYW1ldGVycywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdGNvbnN0IHJhd0FyZ3MgPSBhcmdzLm1hcChmcm9tTHlyYVZhbHVlKTtcblx0XHRjb25zdCByZXN1bHQgPSB0YXJnZXQuX19uYXRpdmVJbnN0YW5jZVttZXRob2REZWYubmFtZV0oLi4ucmF3QXJncyk7XG5cblx0XHRpZiAocmVzdWx0IGluc3RhbmNlb2YgTHlyYU5hdGl2ZU9iamVjdCkge1xuXHRcdFx0cmV0dXJuIHdyYXBOYXRpdmVJbnN0YW5jZShyZXN1bHQsIG9iamVjdFJlZ2lzdHJ5KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZhbEJsb2NrKFtyZXR1cm5WYWx1ZShyZXN1bHQpXSwgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgdGFyZ2V0LCBtZXRob2REZWYucmV0dXJuVHlwZSk7XG5cdH1cblxuXHRiaW5kTWV0aG9kUGFyYW1ldGVycyhleHByLCBtZXRob2REZWYucGFyYW1ldGVycywgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cblx0cmV0dXJuIGV2YWxCbG9jayhtZXRob2REZWYuY2hpbGRyZW4sIG9iamVjdFJlZ2lzdHJ5LCBtZXRob2RFbnYsIHRhcmdldCwgbWV0aG9kRGVmLnJldHVyblR5cGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUluc3RhbmNlTWV0aG9kKGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgbWV0aG9kTmFtZTogc3RyaW5nKTogQ2xhc3NNZXRob2REZWZpbml0aW9uIHwgbnVsbCB7XG5cdGlmIChjbGFzc0RlZi5pbnN0YW5jZU1ldGhvZHNbbWV0aG9kTmFtZV0pIHtcblx0XHRyZXR1cm4gY2xhc3NEZWYuaW5zdGFuY2VNZXRob2RzW21ldGhvZE5hbWVdO1xuXHR9XG5cblx0aWYgKGNsYXNzRGVmLnN1cGVyQ2xhc3MpIHtcblx0XHRjb25zdCBzdXBlckRlZiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KGNsYXNzRGVmLnN1cGVyQ2xhc3MpO1xuXHRcdHJldHVybiByZXNvbHZlSW5zdGFuY2VNZXRob2Qoc3VwZXJEZWYsIG9iamVjdFJlZ2lzdHJ5LCBtZXRob2ROYW1lKTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmluZE1ldGhvZFBhcmFtZXRlcnMoXG5cdGNhbGxOb2RlOiBBU1RDYWxsTm9kZSxcblx0cGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdLFxuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksXG5cdG1ldGhvZEVudjogRW52aXJvbm1lbnQsXG5cdGVudmlyb25tZW50OiBFbnZpcm9ubWVudCxcblx0dGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsXG4pIHtcblxuXHRjb25zdCBhcmdzID0gY2FsbE5vZGUuYXJndW1lbnRzO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtZXRlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBwYXJhbWV0ZXI6IEFTVFBhcmFtZXRlck5vZGUgfCBudWxsID0gcGFyYW1ldGVyc1tpXSB8fCBudWxsO1xuXHRcdGNvbnN0IGFyZ3VtZW50OiBhbnkgPSBhcmdzW2ldIHx8IG51bGw7XG5cblx0XHRpZiAoIXBhcmFtZXRlcikge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoJ01pc3NpbmcgcGFyYW1ldGVyIG5hbWUgaW4gbWV0aG9kIGNhbGwuJyk7XG5cdFx0fVxuXG5cdFx0bGV0IHJhd1ZhbHVlO1xuXG5cdFx0aWYgKGFyZ3VtZW50KSB7XG5cdFx0XHRyYXdWYWx1ZSA9IGV2YWxFeHByZXNzaW9uKGFyZ3VtZW50LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdFx0fSBlbHNlIGlmIChwYXJhbWV0ZXI/LmRlZmF1bHRWYWx1ZSkge1xuXHRcdFx0cmF3VmFsdWUgPSBldmFsRXhwcmVzc2lvbihwYXJhbWV0ZXIuZGVmYXVsdFZhbHVlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY2FzdGVkID0gcGFyYW1ldGVyLnR5cGVBbm5vdGF0aW9uXG5cdFx0XHQ/IGNhc3RWYWx1ZShyYXdWYWx1ZSwgcGFyYW1ldGVyLnR5cGVBbm5vdGF0aW9uLm5hbWUpXG5cdFx0XHQ6IGNhc3RWYWx1ZShyYXdWYWx1ZSwgVFlQRV9FTlVNLk1JWEVEKTtcblxuXHRcdG1ldGhvZEVudi5kZWZpbmUocGFyYW1ldGVyLm5hbWUsIGNhc3RlZCk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxDYWxsQXJndW1lbnRzKG5vZGU6IEFTVENhbGxOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55W10ge1xuXHRpZiAobm9kZS5jYWxsZWUgaW5zdGFuY2VvZiBBU1RMYW1iZGFOb2RlKSB7XG5cdFx0Y29uc3QgbGFtYmRhID0gbm9kZS5jYWxsZWU7XG5cdFx0cmV0dXJuIGV2YWxNZXRob2RBcmd1bWVudHMobm9kZSwgbGFtYmRhLnBhcmFtZXRlcnMsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0fVxuXG5cdGlmIChub2RlLmNhbGxlZS50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0cmV0dXJuIG5vZGUuYXJndW1lbnRzLm1hcChhcmd1bWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gY2FzdFZhbHVlKFxuXHRcdFx0XHRldmFsRXhwcmVzc2lvbihhcmd1bWVudCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpLFxuXHRcdFx0XHRhcmd1bWVudC50eXBlXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHR9XG5cblx0bGV0IG1vZHVsZU5hbWU6IHN0cmluZyA9ICd1bmtub3duJztcblx0bGV0IG1ldGhvZE5hbWU6IHN0cmluZyA9ICd1bmtub3duJztcblxuXHRpZiAobm9kZS5jYWxsZWUgaW5zdGFuY2VvZiBBU1RNZW1iZXJOb2RlKSB7XG5cdFx0bW9kdWxlTmFtZSA9IG5vZGUuY2FsbGVlLm9iamVjdC5uYW1lO1xuXHRcdG1ldGhvZE5hbWUgPSBub2RlLmNhbGxlZS5wcm9wZXJ0eTtcblx0fVxuXG5cdHRocm93UnVudGltZUVycm9yKGBVbmtub3duIGZ1bmN0aW9uICR7bW9kdWxlTmFtZX0uJHttZXRob2ROYW1lfWAsIG5vZGUuc3Bhbik7XG59XG5cbmZ1bmN0aW9uIGV2YWxNZXRob2RBcmd1bWVudHMoZXhwcjogQVNUQ2FsbE5vZGUgfCBBU1ROZXdOb2RlLCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnlbXSB7XG5cdGNvbnN0IGFyZ3MgPSBbXTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtZXRlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBwYXJhbWV0ZXI6IEFTVFBhcmFtZXRlck5vZGUgfCBudWxsID0gcGFyYW1ldGVyc1tpXSB8fCBudWxsO1xuXHRcdGNvbnN0IGFyZ3VtZW50ID0gZXhwci5hcmd1bWVudHNbaV0gfHwgbnVsbDtcblxuXHRcdGxldCB2YWx1ZTtcblxuXHRcdGlmIChhcmd1bWVudCkge1xuXHRcdFx0dmFsdWUgPSBldmFsRXhwcmVzc2lvbihhcmd1bWVudCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdH0gZWxzZSBpZiAocGFyYW1ldGVyPy5kZWZhdWx0VmFsdWUpIHtcblx0XHRcdHZhbHVlID0gZXZhbEV4cHJlc3Npb24ocGFyYW1ldGVyLmRlZmF1bHRWYWx1ZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgW1J1bnRpbWVFcnJvcl0gTWlzc2luZyBhcmd1bWVudCAnJHtwYXJhbWV0ZXI/Lm5hbWV9J2AsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXG5cdFx0YXJncy5wdXNoKHZhbHVlKTtcblx0fVxuXG5cdHJldHVybiBhcmdzLm1hcCgoYXJndW1lbnQsIGkpID0+IHtcblx0XHRjb25zdCBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJzW2ldO1xuXHRcdHJldHVybiBwYXJhbWV0ZXI/LnR5cGVBbm5vdGF0aW9uXG5cdFx0XHQ/IGNhc3RWYWx1ZShhcmd1bWVudCwgcGFyYW1ldGVyLnR5cGVBbm5vdGF0aW9uLm5hbWUpXG5cdFx0XHQ6IGNhc3RWYWx1ZShhcmd1bWVudCwgVFlQRV9FTlVNLk1JWEVEKTtcblx0fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsSWYobm9kZTogQVNUSWZOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0Y29uc3QgY29uZGl0aW9uID0gY2FzdFZhbHVlKFxuXHRcdGV2YWxFeHByZXNzaW9uKG5vZGUuY29uZGl0aW9uLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSksXG5cdFx0VFlQRV9FTlVNLkJPT0xFQU5cblx0KTtcblxuXHQvLyBUSEVOXG5cdGlmIChjb25kaXRpb24gPT09IHRydWUpIHtcblx0XHRyZXR1cm4gZXZhbEJsb2NrKG5vZGUudGhlbi5jaGlsZHJlbiwgb2JqZWN0UmVnaXN0cnksIG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCksIHRoaXNWYWx1ZSk7XG5cdH1cblxuXHQvLyBFTFNFXG5cdGlmIChub2RlLmVsc2UpIHtcblx0XHRpZiAobm9kZS5lbHNlIGluc3RhbmNlb2YgQVNUSWZOb2RlKSB7XG5cdFx0XHRyZXR1cm4gZXZhbElmKG5vZGUuZWxzZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmFsQmxvY2sobm9kZS5lbHNlLmNoaWxkcmVuLCBvYmplY3RSZWdpc3RyeSwgbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KSwgdGhpc1ZhbHVlKTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbE1hdGNoKG5vZGU6IEFTVE1hdGNoTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGNvbnN0IG1hdGNoVmFsdWUgPSBldmFsRXhwcmVzc2lvbihub2RlLmV4cHJlc3Npb24sIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCk7XG5cblx0Zm9yIChjb25zdCBjYXNlTm9kZSBvZiBub2RlLmNhc2VzKSB7XG5cdFx0aWYgKGNhc2VOb2RlLnRlc3QgPT09IG51bGwpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHRlc3RWYWx1ZSA9IGV2YWxFeHByZXNzaW9uKGNhc2VOb2RlLnRlc3QsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblxuXHRcdGlmICh0ZXN0VmFsdWUgPT09IG1hdGNoVmFsdWUpIHtcblx0XHRcdHJldHVybiBldmFsTWF0Y2hDYXNlKGNhc2VOb2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKG5vZGUuZGVmYXVsdENhc2UpIHtcblx0XHRyZXR1cm4gZXZhbE1hdGNoQ2FzZShub2RlLmRlZmF1bHRDYXNlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxNYXRjaENhc2Uobm9kZTogQVNUTWF0Y2hDYXNlTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdHJldHVybiBldmFsQmxvY2sobm9kZS5jaGlsZHJlbiwgb2JqZWN0UmVnaXN0cnksIG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCksIHRoaXNWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsRm9yZWFjaChub2RlOiBBU1RGb3JlYWNoTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGxldCBpdGVyYWJsZSA9IGV2YWxFeHByZXNzaW9uKG5vZGUuaXRlcmFibGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblxuXHRpZiAoIShpdGVyYWJsZSBpbnN0YW5jZW9mIEluc3RhbmNlKSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBmb3JlYWNoIGV4cGVjdHMgYW4gb2JqZWN0IGltcGxlbWVudGluZyBJdGVyYWJsZWAsIG5vZGUuaXRlcmFibGUuc3Bhbik7XG5cdH1cblxuXHRjb25zdCBpdGVyYXRvck1ldGhvZCA9IHJlc29sdmVJbnN0YW5jZU1ldGhvZChcblx0XHRpdGVyYWJsZS5fX2NsYXNzRGVmLFxuXHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdCdpdGVyYXRvcidcblx0KTtcblxuXHRpZiAoIWl0ZXJhdG9yTWV0aG9kKSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYE9iamVjdCBkb2VzIG5vdCBpbXBsZW1lbnQgSXRlcmFibGUgKG1pc3NpbmcgaXRlcmF0b3IoKSlgLCBub2RlLml0ZXJhYmxlLnNwYW4pO1xuXHR9XG5cblx0Y29uc3QgaXRlcmF0b3IgPSBldmFsSW5zdGFuY2VDYWxsKFxuXHRcdCgoKSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IEFTVENhbGxOb2RlKG5ldyBBU1RNZW1iZXJOb2RlKG5vZGUuaXRlcmFibGUsICdpdGVyYXRvcicpKTtcblx0XHR9KSgpLFxuXHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdGVudmlyb25tZW50LFxuXHRcdHRoaXNWYWx1ZVxuXHQpO1xuXG5cdGlmICghKGl0ZXJhdG9yIGluc3RhbmNlb2YgSW5zdGFuY2UpKSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYGl0ZXJhdG9yKCkgbXVzdCByZXR1cm4gYW4gSXRlcmF0b3Igb2JqZWN0YCwgbm9kZS5pdGVyYWJsZS5zcGFuKTtcblx0fVxuXG5cdGNhbGxJdGVyYXRvck1ldGhvZChpdGVyYXRvciwgJ3Jld2luZCcsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCk7XG5cblx0d2hpbGUgKGNhbGxJdGVyYXRvck1ldGhvZChpdGVyYXRvciwgJ2hhc05leHQnLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpKSB7XG5cdFx0Y29uc3QgdmFsdWUgPSBjYWxsSXRlcmF0b3JNZXRob2QoaXRlcmF0b3IsICdjdXJyZW50Jywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50KTtcblxuXHRcdGNvbnN0IGxvb3BFbnYgPSBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpO1xuXG5cdFx0bG9vcEVudi5kZWZpbmUobm9kZS5pdGVyYXRvciwgdmFsdWUpO1xuXG5cdFx0Y29uc3QgcmVzdWx0ID0gZXZhbEJsb2NrKG5vZGUuYm9keSwgb2JqZWN0UmVnaXN0cnksIGxvb3BFbnYsIHRoaXNWYWx1ZSk7XG5cdFx0aWYgKHJlc3VsdCBpbnN0YW5jZW9mIFJldHVyblZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblxuXHRcdGNhbGxJdGVyYXRvck1ldGhvZChpdGVyYXRvciwgJ25leHQnLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxsSXRlcmF0b3JNZXRob2QoaXRlcmF0b3I6IEluc3RhbmNlLCBtZXRob2ROYW1lOiBzdHJpbmcsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogYW55IHtcblx0cmV0dXJuIGNhbGxJbnN0YW5jZU1ldGhvZChcblx0XHRpdGVyYXRvcixcblx0XHRpdGVyYXRvci5fX2NsYXNzRGVmLmZpbmRNZXRob2QobWV0aG9kTmFtZSksXG5cdFx0W10sXG5cdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0ZW52aXJvbm1lbnRcblx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxVbmFyeShub2RlOiBBU1RVbmFyeU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRjb25zdCB2YWx1ZSA9IGV2YWxFeHByZXNzaW9uKG5vZGUuYXJndW1lbnQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblxuXHRzd2l0Y2ggKG5vZGUub3BlcmF0b3IpIHtcblx0XHRjYXNlIEdSQU1NQVIuRVhDTEFNQVRJT05fTUFSSzpcblx0XHRcdHJldHVybiAhY2FzdFZhbHVlKHZhbHVlKTtcblx0fVxuXG5cdHRocm93UnVudGltZUVycm9yKGBVbnN1cHBvcnRlZCB1bmFyeSBvcGVyYXRvciAke25vZGUub3BlcmF0b3J9YCwgbm9kZS5zcGFuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxWRG9tTm9kZShub2RlOiBBU1RWRG9tTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IFZOb2RlIHtcblx0dHJ5IHtcblx0XHRjb25zdCBjbGFzc0RlZiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KG5vZGUudGFnKTtcblxuXHRcdGlmIChjbGFzc0RlZikge1xuXHRcdFx0cmV0dXJuIGV2YWxEb21Db21wb25lbnROb2RlKG5vZGUsIGNsYXNzRGVmLCBlbnZpcm9ubWVudCwgb2JqZWN0UmVnaXN0cnkpO1xuXHRcdH1cblx0fSBjYXRjaCAoZSkge1xuXHR9XG5cblx0cmV0dXJuIGV2YWxEb21IdG1sTm9kZShub2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsRG9tSHRtbE5vZGUobm9kZTogQVNUVkRvbU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBWTm9kZSB7XG5cdGNvbnN0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG5cblx0Zm9yIChjb25zdCBbbmFtZSwgdmFsdWVdIG9mIG5vZGUucHJvcHMpIHtcblx0XHRwcm9wc1tuYW1lXSA9IGV2YWxFeHByZXNzaW9uKHZhbHVlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdH1cblxuXHRjb25zdCBjaGlsZHJlbjogQXJyYXk8Vk5vZGUgfCBzdHJpbmc+ID0gW107XG5cdGxldCB0ZXh0Q2FjaGU6IHN0cmluZ1tdID0gW107XG5cblx0ZnVuY3Rpb24gZmx1c2hUZXh0Q2FjaGUoKTogdm9pZCB7XG5cdFx0aWYgKHRleHRDYWNoZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRjaGlsZHJlbi5wdXNoKHRleHRDYWNoZS5qb2luKCcgJykpO1xuXHRcdFx0dGV4dENhY2hlID0gW107XG5cdFx0fVxuXHR9XG5cblx0Zm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG5cdFx0aWYgKGNoaWxkIGluc3RhbmNlb2YgQVNUVkRvbVRleHROb2RlKSB7XG5cdFx0XHR0ZXh0Q2FjaGUucHVzaChjaGlsZC52YWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNoaWxkcmVuLnB1c2goZXZhbEV4cHJlc3Npb24oY2hpbGQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKSk7XG5cdFx0fVxuXG5cdFx0Zmx1c2hUZXh0Q2FjaGUoKTtcblx0fVxuXG5cdGZsdXNoVGV4dENhY2hlKCk7XG5cblx0cmV0dXJuIHtcblx0XHR0YWc6IG5vZGUudGFnLFxuXHRcdHByb3BzOiBwcm9wcyxcblx0XHRjaGlsZHJlbjogY2hpbGRyZW5cblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxEb21Db21wb25lbnROb2RlKG5vZGU6IEFTVFZEb21Ob2RlLCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uLCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IFZOb2RlIHtcblxuXHRjb25zdCBpbnN0YW5jZSA9IG5ldyBJbnN0YW5jZShjbGFzc0RlZik7XG5cdGNvbnN0IG1ldGhvZE5vZGU6IEFTVE1ldGhvZE5vZGUgPSBjbGFzc0RlZi5maW5kTWV0aG9kKCdyZW5kZXInKTtcblxuXHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlTm9kZV0gb2Ygbm9kZS5wcm9wcy5lbnRyaWVzKCkpIHtcblx0XHRpbnN0YW5jZS5fX2luc3RhbmNlRmllbGRzW2tleV0gPSBldmFsRXhwcmVzc2lvbih2YWx1ZU5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgaW5zdGFuY2UpO1xuXHR9XG5cblx0cmV0dXJuIGNhbGxJbnN0YW5jZU1ldGhvZChpbnN0YW5jZSwgbWV0aG9kTm9kZSwgW10sIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCkgYXMgVk5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsQmxvY2soYmxvY2tOb2RlczogQVNUTm9kZVtdLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsLCByZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0Zm9yIChjb25zdCBibG9ja05vZGUgb2YgYmxvY2tOb2Rlcykge1xuXHRcdGNvbnN0IHJlc3VsdCA9IGV2YWxOb2RlKGJsb2NrTm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBSZXR1cm5WYWx1ZSkge1xuXHRcdFx0cmV0dXJuIGNhc3RWYWx1ZShyZXN1bHQudmFsdWUsIHJldHVyblR5cGU/Lm5hbWUpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxBbm5vdGF0aW9uVmFsdWUobm9kZTogQVNUTm9kZSk6IGFueSB7XG5cdHN3aXRjaCAobm9kZS50eXBlKSB7XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5TVFJJTkc6XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5OVU1CRVI6XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5CT09MRUFOOlxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuSURFTlRJRklFUjoge1xuXHRcdFx0cmV0dXJuIGNhc3RWYWx1ZShub2RlLnZhbHVlKTtcblx0XHR9XG5cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkFSUkFZIDoge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RBcnJheU5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIG5vZGUuZWxlbWVudHMubWFwKGNoaWxkID0+IGV2YWxBbm5vdGF0aW9uVmFsdWUoY2hpbGQpKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGFubm90YXRpb24gcHJvcGVydHkgdmFsdWU6ICR7bm9kZS50eXBlfWAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXG5cdFx0ZGVmYXVsdDoge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVuc3VwcG9ydGVkIGFubm90YXRpb24gZXhwcmVzc2lvbjogJHtub2RlLnR5cGV9YCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxBbm5vdGF0aW9uUHJvcGVydGllcyhhbm5vdGF0aW9uOiBBU1RBbm5vdGF0aW9uTm9kZSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuXHRjb25zdCBwcm9wZXJ0aWVzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG5cblx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZU5vZGVdIG9mIGFubm90YXRpb24ucHJvcGVydGllcykge1xuXHRcdHByb3BlcnRpZXNba2V5XSA9IGV2YWxBbm5vdGF0aW9uVmFsdWUodmFsdWVOb2RlKTtcblx0fVxuXG5cdHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsbEluc3RhbmNlTWV0aG9kKGluc3RhbmNlOiBJbnN0YW5jZSwgbWV0aG9kTm9kZTogQVNUTWV0aG9kTm9kZSwgYXJnczogYW55W10sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogYW55IHtcblx0Y29uc3QgbWV0aG9kRW52ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblxuXHRtZXRob2RFbnYuZGVmaW5lKEdSQU1NQVIuVEhJUywgaW5zdGFuY2UpO1xuXG5cdGlmIChpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlICYmIG1ldGhvZE5vZGUubmFtZSBpbiBpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlKSB7XG5cdFx0Y29uc3QgcmF3QXJncyA9IGFyZ3MubWFwKGZyb21MeXJhVmFsdWUpO1xuXHRcdGNvbnN0IHJlc3VsdCA9IGluc3RhbmNlLl9fbmF0aXZlSW5zdGFuY2VbbWV0aG9kTm9kZS5uYW1lXSguLi5yYXdBcmdzKTtcblxuXHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRyZXR1cm4gd3JhcE5hdGl2ZUluc3RhbmNlKHJlc3VsdCwgb2JqZWN0UmVnaXN0cnkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmFsQmxvY2soW3JldHVyblZhbHVlKHJlc3VsdCldLCBvYmplY3RSZWdpc3RyeSwgbWV0aG9kRW52LCBpbnN0YW5jZSwgbWV0aG9kTm9kZS5yZXR1cm5UeXBlKTtcblx0fVxuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbWV0aG9kTm9kZS5wYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgcGFyYW1ldGVyOiBBU1RQYXJhbWV0ZXJOb2RlIHwgbnVsbCA9IG1ldGhvZE5vZGUucGFyYW1ldGVyc1tpXSB8fCBudWxsO1xuXHRcdGNvbnN0IGFyZ3VtZW50OiBhbnkgPSBhcmdzW2ldIHx8IG51bGw7XG5cblx0XHRpZiAoIXBhcmFtZXRlcikge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoJ01ldGhvZCBwYXJhbWV0ZXIgaXMgbnVsbC4nKTtcblx0XHR9XG5cblx0XHRsZXQgdmFsdWU7XG5cdFx0aWYgKCFhcmd1bWVudCkge1xuXHRcdFx0dmFsdWUgPSBwYXJhbWV0ZXIuZGVmYXVsdFZhbHVlXG5cdFx0XHRcdD8gZXZhbE5vZGUocGFyYW1ldGVyLmRlZmF1bHRWYWx1ZSwgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgaW5zdGFuY2UpXG5cdFx0XHRcdDogbnVsbDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFsdWUgPSBhcmdzW2ldO1xuXHRcdH1cblxuXHRcdG1ldGhvZEVudi5kZWZpbmUocGFyYW1ldGVyLm5hbWUsIHZhbHVlKTtcblx0fVxuXG5cdHJldHVybiBldmFsQmxvY2sobWV0aG9kTm9kZS5jaGlsZHJlbiwgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgaW5zdGFuY2UsIG1ldGhvZE5vZGUucmV0dXJuVHlwZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvQm94SWZOZWVkZWQodmFsdWU6IGFueSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwpOiBJbnN0YW5jZSB7XG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEluc3RhbmNlKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gVFlQRV9FTlVNLk5VTUJFUikge1xuXHRcdHJldHVybiBjcmVhdGVCb3hlZEluc3RhbmNlKFxuXHRcdFx0QXV0b2JveGVkVHlwZXMuZ2V0Q2xhc3NOYW1lKFRZUEVfRU5VTS5OVU1CRVIpLFxuXHRcdFx0dmFsdWUsXG5cdFx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRcdHNwYW5cblx0XHQpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gVFlQRV9FTlVNLlNUUklORykge1xuXHRcdHJldHVybiBjcmVhdGVCb3hlZEluc3RhbmNlKFxuXHRcdFx0QXV0b2JveGVkVHlwZXMuZ2V0Q2xhc3NOYW1lKFRZUEVfRU5VTS5TVFJJTkcpLFxuXHRcdFx0dmFsdWUsXG5cdFx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRcdHNwYW5cblx0XHQpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gVFlQRV9FTlVNLkJPT0xFQU4pIHtcblx0XHRyZXR1cm4gY3JlYXRlQm94ZWRJbnN0YW5jZShcblx0XHRcdEF1dG9ib3hlZFR5cGVzLmdldENsYXNzTmFtZShUWVBFX0VOVU0uQk9PTEVBTiksXG5cdFx0XHR2YWx1ZSxcblx0XHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0c3BhblxuXHRcdCk7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCb3hlZEluc3RhbmNlKGNsYXNzTmFtZTogc3RyaW5nLCBwcmltaXRpdmVWYWx1ZTogYW55LCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCk6IEluc3RhbmNlIHtcblx0Y29uc3QgY2xhc3NEZWYgPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChjbGFzc05hbWUpO1xuXG5cdGlmICghY2xhc3NEZWYpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgQXV0b2JveGluZyBmYWlsZWQ6ICR7Y2xhc3NOYW1lfSBub3QgZGVmaW5lZGAsIHNwYW4pO1xuXHR9XG5cblx0Y29uc3QgaW5zdGFuY2UgPSBuZXcgSW5zdGFuY2UoY2xhc3NEZWYpO1xuXG5cdGluc3RhbmNlLl9fbmF0aXZlSW5zdGFuY2UgPSBuZXcgY2xhc3NEZWYubmF0aXZlSW5zdGFuY2UoZnJvbUx5cmFWYWx1ZShwcmltaXRpdmVWYWx1ZSkpO1xuXG5cdHJldHVybiBpbnN0YW5jZTtcbn1cbiIsCiAgICAiaW1wb3J0IHtBU1RBbm5vdGF0aW9uTm9kZSwgQVNUQ2xhc3NOb2RlLCBBU1RNZXRob2ROb2RlLCBBU1ROb2RlfSBmcm9tIFwiLi4vYXN0XCI7XG5pbXBvcnQge2NhbGxJbnN0YW5jZU1ldGhvZCwgY3JlYXRlSW5zdGFuY2VGcm9tTm9kZSwgZXZhbEFubm90YXRpb25Qcm9wZXJ0aWVzfSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcnVudGltZVwiO1xuaW1wb3J0IHR5cGUge0Vudmlyb25tZW50fSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHR5cGUge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcblxuZXhwb3J0IGNsYXNzIFRlc3RTdWl0ZXMge1xuXHRlbnZpcm9ubWVudDogRW52aXJvbm1lbnQ7XG5cdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeTtcblxuXHRjb25zdHJ1Y3RvcihlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSkge1xuXHRcdHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5ID0gb2JqZWN0UmVnaXN0cnk7XG5cdH1cblxuXHRydW4oYXN0OiBBU1ROb2RlKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIGFzdC5jaGlsZHJlbikge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RDbGFzc05vZGUpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coYPCfp6ogUnVubmluZyBUZXN0IENhc2VzIGZvciAke25vZGUubmFtZX0gLi4uYCk7XG5cdFx0XHRcdHRoaXMucnVuVGVzdENhc2VzKG5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcnVuVGVzdENhc2VzKGNsYXNzTm9kZTogQVNUQ2xhc3NOb2RlKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBtZW1iZXIgb2YgY2xhc3NOb2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobWVtYmVyIGluc3RhbmNlb2YgQVNUTWV0aG9kTm9kZSkge1xuXHRcdFx0XHRjb25zdCBhbm5vdGF0aW9uID0gbWVtYmVyLmFubm90YXRpb25zPy5maW5kKGEgPT4gYS5uYW1lID09PSAndGVzdCcpO1xuXHRcdFx0XHRpZiAoIWFubm90YXRpb24pIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnJ1blRlc3RDYXNlKGNsYXNzTm9kZSwgbWVtYmVyLCBhbm5vdGF0aW9uKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJ1blRlc3RDYXNlKGNsYXNzTm9kZTogQVNUQ2xhc3NOb2RlLCBtZXRob2ROb2RlOiBBU1RNZXRob2ROb2RlLCBhbm5vdGF0aW9uOiBBU1RBbm5vdGF0aW9uTm9kZSk6IHZvaWQge1xuXHRcdGNvbnN0IGluc3RhbmNlID0gY3JlYXRlSW5zdGFuY2VGcm9tTm9kZShjbGFzc05vZGUpO1xuXHRcdGNvbnN0IHByb3BlcnRpZXMgPSBldmFsQW5ub3RhdGlvblByb3BlcnRpZXMoYW5ub3RhdGlvbik7XG5cblx0XHRjb25zdCB0aXRsZSA9IHByb3BlcnRpZXMudGl0bGUgPz8gYCR7Y2xhc3NOb2RlLm5hbWV9LiR7bWV0aG9kTm9kZS5uYW1lfWA7XG5cblx0XHRsZXQgZXJyb3JNZXNzYWdlID0gbnVsbDtcblxuXHRcdHRyeSB7XG5cdFx0XHRjYWxsSW5zdGFuY2VNZXRob2QoaW5zdGFuY2UsIG1ldGhvZE5vZGUsIFtdLCB0aGlzLm9iamVjdFJlZ2lzdHJ5LCB0aGlzLmVudmlyb25tZW50KTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0ZXJyb3JNZXNzYWdlID0gZXJyb3I7XG5cdFx0fVxuXG5cdFx0aWYgKGVycm9yTWVzc2FnZSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcihgIOKdjCAke3RpdGxlfSwgJHtlcnJvck1lc3NhZ2V9YCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKGAg4pyFICR7dGl0bGV9YCk7XG5cdFx0fVxuXHR9XG59XG4iLAogICAgImltcG9ydCB7QVNUTm9kZX0gZnJvbSAnLi4vYXN0LnRzJztcbmltcG9ydCB7RW52aXJvbm1lbnR9IGZyb20gXCIuL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7ZXZhbE5vZGUsIHJlZ2lzdGVyTmF0aXZlQ2xhc3NlcywgcmVnaXN0ZXJOYXRpdmVGdW5jdGlvbnN9IGZyb20gXCIuL2ludGVycHJldGVyX3J1bnRpbWVcIjtcbmltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5cbmV4cG9ydCBjbGFzcyBJbnRlcnByZXRlciB7XG5cdGVudmlyb25tZW50OiBFbnZpcm9ubWVudDtcblx0b2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5O1xuXG5cdGNvbnN0cnVjdG9yKGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KSB7XG5cdFx0dGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkgPSBvYmplY3RSZWdpc3RyeTtcblxuXHRcdHJlZ2lzdGVyTmF0aXZlQ2xhc3NlcyhvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpO1xuXHRcdHJlZ2lzdGVyTmF0aXZlRnVuY3Rpb25zKGVudmlyb25tZW50KTtcblx0fVxuXG5cdHJ1bihhc3Q6IEFTVE5vZGUpIHtcblx0XHRldmFsTm9kZShhc3QsIHRoaXMub2JqZWN0UmVnaXN0cnksIHRoaXMuZW52aXJvbm1lbnQpO1xuXHR9XG59XG4iLAogICAgImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEZpbGVMb2FkZXIge1xuXHRhYnN0cmFjdCBsb2FkKHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+O1xufVxuXG5leHBvcnQgY2xhc3MgRmV0Y2hGaWxlTG9hZGVyIGV4dGVuZHMgQWJzdHJhY3RGaWxlTG9hZGVyIHtcblx0b3ZlcnJpZGUgbG9hZCh1cmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIGZldGNoKHVybClcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcblx0fVxufVxuIiwKICAgICJpbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4vcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcbmltcG9ydCB7RW52aXJvbm1lbnR9IGZyb20gXCIuL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge1R5cGVDaGVja2VyfSBmcm9tIFwiLi90eXBlcy90eXBlY2hlY2tlclwiO1xuaW1wb3J0IHtMaW5rZXJ9IGZyb20gXCIuL2xpbmtlci9saW5rZXIudHNcIjtcbmltcG9ydCB7VGVzdFN1aXRlc30gZnJvbSBcIi4vdGVzdHMvdGVzdHN1aXRlc1wiO1xuaW1wb3J0IHtJbnRlcnByZXRlcn0gZnJvbSBcIi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJcIjtcbmltcG9ydCB7RmV0Y2hGaWxlTG9hZGVyfSBmcm9tIFwiLi9sb2FkZXJzXCI7XG5pbXBvcnQge0FTVE5vZGV9IGZyb20gXCIuL2FzdFwiO1xuaW1wb3J0IHtQYXJzZXJ9IGZyb20gXCIuL3BhcnNlci9wYXJzZXJcIjtcblxuZXhwb3J0IGNsYXNzIEx5cmFTY3JpcHRQcm9ncmFtIHtcblx0cHJpdmF0ZSBnbG9iYWxFbnZpcm9ubWVudDogRW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQoKTtcblx0cHJpdmF0ZSBnbG9iYWxPYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkgPSBuZXcgT2JqZWN0UmVnaXN0cnkoKTtcblxuXHRwcml2YXRlIHR5cGVDaGVja2VyOiBUeXBlQ2hlY2tlciA9IG5ldyBUeXBlQ2hlY2tlcih0aGlzLmdsb2JhbE9iamVjdFJlZ2lzdHJ5KTtcblxuXHRwcml2YXRlIGxpbmtlcjogTGlua2VyID0gbmV3IExpbmtlcih0aGlzLmdsb2JhbEVudmlyb25tZW50LCB0aGlzLmdsb2JhbE9iamVjdFJlZ2lzdHJ5LCBuZXcgRmV0Y2hGaWxlTG9hZGVyKCkpO1xuXG5cdHByaXZhdGUgaW50ZXJwcmV0ZXI6IEludGVycHJldGVyID0gbmV3IEludGVycHJldGVyKHRoaXMuZ2xvYmFsRW52aXJvbm1lbnQsIHRoaXMuZ2xvYmFsT2JqZWN0UmVnaXN0cnkpO1xuXG5cdHByaXZhdGUgdGVzdFN1aXRlOiBUZXN0U3VpdGVzID0gbmV3IFRlc3RTdWl0ZXModGhpcy5nbG9iYWxFbnZpcm9ubWVudCwgdGhpcy5nbG9iYWxPYmplY3RSZWdpc3RyeSk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBpc0RlYnVnOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgc3RhcnRUaW1lOiBudW1iZXIgPSAwO1xuXG5cdGNvbnN0cnVjdG9yKGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSkge1xuXHRcdHRoaXMuaXNEZWJ1ZyA9IGlzRGVidWc7XG5cdH1cblxuXHRnZXRHbG9iYWxPYmplY3RSZWdpc3RyeSgpOiBPYmplY3RSZWdpc3RyeSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2xvYmFsT2JqZWN0UmVnaXN0cnk7XG5cdH1cblxuXG5cdGdldEdsb2JhbEVudmlyb25tZW50KCk6IEVudmlyb25tZW50IHtcblx0XHRyZXR1cm4gdGhpcy5nbG9iYWxFbnZpcm9ubWVudDtcblx0fVxuXG5cdGFzeW5jIGV4ZWN1dGUoc291cmNlOiBTb3VyY2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gdGhpcy5ydW5QaXBlbGluZShzb3VyY2UpXG5cdFx0ICAgICAgICAgICAudGhlbigoYXN0OiBBU1ROb2RlKSA9PiB7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlU3RhcnRUaW1lKCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuaW50ZXJwcmV0ZXIucnVuKGFzdCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlRW5kVGltZSgnaW50ZXJwcmV0ZXInKTtcblx0XHQgICAgICAgICAgIH0pO1xuXHR9XG5cblx0YXN5bmMgZXhlY3V0ZVRlc3Qoc291cmNlOiBTb3VyY2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gdGhpcy5ydW5QaXBlbGluZShzb3VyY2UpXG5cdFx0ICAgICAgICAgICAudGhlbigoYXN0OiBBU1ROb2RlKSA9PiB7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlU3RhcnRUaW1lKCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMudGVzdFN1aXRlLnJ1bihhc3QpO1xuXHRcdFx0ICAgICAgICAgICB0aGlzLmRlYnVnTWVhc3VyZUVuZFRpbWUoJ3Rlc3QnKTtcblx0XHQgICAgICAgICAgIH0pO1xuXHR9XG5cblx0ZGVidWcodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzRGVidWcpIHtcblx0XHRcdGNvbnNvbGUubG9nKHZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRkZWJ1Z01lYXN1cmVTdGFydFRpbWUoKTogdm9pZCB7XG5cdFx0dGhpcy5zdGFydFRpbWUgPSB0aGlzLmRlYnVnVGltZXN0YW1wKCk7XG5cdH1cblxuXHRkZWJ1Z01lYXN1cmVFbmRUaW1lKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuZGVidWcobWVzc2FnZSArICc6ICcgKyAodGhpcy5kZWJ1Z1RpbWVzdGFtcCgpIC0gdGhpcy5zdGFydFRpbWUpICsgJ21zJyk7XG5cdH1cblxuXHRkZWJ1Z1RpbWVzdGFtcCgpOiBudW1iZXIge1xuXHRcdGlmICghdGhpcy5pc0RlYnVnKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdFx0cmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3luYyBydW5QaXBlbGluZShzb3VyY2U6IFNvdXJjZSk6IFByb21pc2U8QVNUTm9kZT4ge1xuXHRcdHRoaXMuZGVidWdNZWFzdXJlU3RhcnRUaW1lKClcblx0XHRjb25zdCBhc3Q6IEFTVE5vZGUgPSBuZXcgUGFyc2VyKHNvdXJjZSkucGFyc2UoKTtcblx0XHR0aGlzLmRlYnVnTWVhc3VyZUVuZFRpbWUoJ3BhcnNlcicpXG5cdFx0dGhpcy5kZWJ1Zyhhc3QpO1xuXG5cdFx0cmV0dXJuIHRoaXMubGlua2VyLmxpbmtTb3VyY2VzKGFzdClcblx0XHQgICAgICAgICAgIC50aGVuKCgpID0+IHtcblx0XHRcdCAgICAgICAgICAgdGhpcy50eXBlQ2hlY2tlci5jb2xsZWN0QWxsU3ltYm9sc0Zyb21SZWdpc3RyeSh0aGlzLmdsb2JhbE9iamVjdFJlZ2lzdHJ5KTtcblx0XHQgICAgICAgICAgIH0pXG5cdFx0ICAgICAgICAgICAudGhlbigoKSA9PiB7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlU3RhcnRUaW1lKCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMudHlwZUNoZWNrZXIuY2hlY2soYXN0KTtcblx0XHRcdCAgICAgICAgICAgdGhpcy5kZWJ1Z01lYXN1cmVFbmRUaW1lKCd0eXBlY2hlY2tlcicpO1xuXG5cdFx0XHQgICAgICAgICAgIHJldHVybiBhc3Q7XG5cdFx0ICAgICAgICAgICB9KTtcblx0fVxufVxuIiwKICAgICJleHBvcnQgdHlwZSBFdmVudEhhbmRsZXI8VCA9IGFueT4gPSAocGF5bG9hZDogVCkgPT4gdm9pZDtcblxuZXhwb3J0IGNsYXNzIEV2ZW50UGlwZWxpbmUge1xuXHRwcml2YXRlIGxpc3RlbmVyczogTWFwPHN0cmluZywgU2V0PEV2ZW50SGFuZGxlcj4+ID0gbmV3IE1hcDxzdHJpbmcsIFNldDxFdmVudEhhbmRsZXI+PigpO1xuXG5cdG9uPFQgPSBhbnk+KGV2ZW50OiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50SGFuZGxlcjxUPik6IHZvaWQge1xuXHRcdGlmICghdGhpcy5saXN0ZW5lcnMuaGFzKGV2ZW50KSkge1xuXHRcdFx0dGhpcy5saXN0ZW5lcnMuc2V0KGV2ZW50LCBuZXcgU2V0KCkpO1xuXHRcdH1cblx0XHR0aGlzLmxpc3RlbmVycy5nZXQoZXZlbnQpIS5hZGQoaGFuZGxlcik7XG5cdH1cblxuXHRvZmY8VCA9IGFueT4oZXZlbnQ6IHN0cmluZywgaGFuZGxlcjogRXZlbnRIYW5kbGVyPFQ+KTogdm9pZCB7XG5cdFx0dGhpcy5saXN0ZW5lcnMuZ2V0KGV2ZW50KVxuXHRcdCAgICA/LmRlbGV0ZShoYW5kbGVyKTtcblx0fVxuXG5cdGVtaXQ8VCA9IGFueT4oZXZlbnQ6IHN0cmluZywgcGF5bG9hZDogVCk6IHZvaWQge1xuXHRcdHRoaXMubGlzdGVuZXJzLmdldChldmVudClcblx0XHQgICAgPy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlcihwYXlsb2FkKSk7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHR5cGUge0V2ZW50UGlwZWxpbmV9IGZyb20gXCIuL3BpcGVsaW5lXCI7XG5cbmV4cG9ydCBjbGFzcyBTdGF0ZTxUID0gYW55PiB7XG5cdHByaXZhdGUgdmFsdWU6IFQ7XG5cdHByaXZhdGUgc3Vic2NyaWJlcnM6IFNldDwodmFsdWU6IFQpID0+IHZvaWQ+ID0gbmV3IFNldDwodmFsdWU6IFQpID0+IHZvaWQ+KCk7XG5cblx0Y29uc3RydWN0b3IoaW5pdGlhbDogVCkge1xuXHRcdHRoaXMudmFsdWUgPSBpbml0aWFsO1xuXHR9XG5cblx0Z2V0KCk6IFQge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHR9XG5cblx0c2V0KHZhbHVlOiBUKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMudmFsdWUgPT09IHZhbHVlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMubm90aWZ5KCk7XG5cdH1cblxuXHRzdWJzY3JpYmUoZm46ICh2YWx1ZTogVCkgPT4gdm9pZCk6ICgpID0+IGJvb2xlYW4ge1xuXHRcdHRoaXMuc3Vic2NyaWJlcnMuYWRkKGZuKTtcblx0XHRyZXR1cm4gKCk6IGJvb2xlYW4gPT4gdGhpcy5zdWJzY3JpYmVycy5kZWxldGUoZm4pO1xuXHR9XG5cblx0cHJpdmF0ZSBub3RpZnkoKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBmbiBvZiB0aGlzLnN1YnNjcmliZXJzKSB7XG5cdFx0XHRmbih0aGlzLnZhbHVlKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRTdGF0ZVRvRXZlbnQ8VD4ocGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIGV2ZW50OiBzdHJpbmcsIHN0YXRlOiBTdGF0ZTxUPiwgbWFwPzogKHBheWxvYWQ6IGFueSkgPT4gVCk6IHZvaWQge1xuXHRwaXBlbGluZS5vbihldmVudCwgKHBheWxvYWQpOiB2b2lkID0+IHtcblx0XHRjb25zdCB2YWx1ZTogYW55ID0gbWFwID8gbWFwKHBheWxvYWQpIDogcGF5bG9hZDtcblx0XHRzdGF0ZS5zZXQodmFsdWUpO1xuXHR9KTtcbn1cbiIsCiAgICAiaW1wb3J0IHtMeXJhU2NyaXB0UHJvZ3JhbX0gZnJvbSBcIi4uL2NvcmUvcHJvZ3JhbVwiO1xuaW1wb3J0IHtmZXRjaFNvdXJjZX0gZnJvbSBcIi4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2UudHNcIjtcbmltcG9ydCB7RW52aXJvbm1lbnQsIEluc3RhbmNlfSBmcm9tIFwiLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzLnRzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9yZWdpc3RyeS50c1wiO1xuaW1wb3J0IHtjYWxsSW5zdGFuY2VNZXRob2R9IGZyb20gXCIuLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX3J1bnRpbWUudHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBFbmdpbmUge1xuXHRleGVjdXRlRW50cnlGaWxlKHVybDogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG5cblx0Y3JlYXRlSW5zdGFuY2UoY2xhc3NOYW1lOiBzdHJpbmcpOiBJbnN0YW5jZTtcblxuXHRjYWxsSW5zdGFuY2VNZXRob2QobWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBBcnJheTxhbnk+KTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgV2ViTHlyYVNjcmlwdCBpbXBsZW1lbnRzIEVuZ2luZSB7XG5cdHByaXZhdGUgcmVhZG9ubHkgcHJvZ3JhbTogTHlyYVNjcmlwdFByb2dyYW07XG5cdHByaXZhdGUgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5ID0gbmV3IE9iamVjdFJlZ2lzdHJ5KCk7XG5cdHByaXZhdGUgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KCk7XG5cdHByaXZhdGUgcm9vdEluc3RhbmNlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSkge1xuXHRcdHRoaXMucHJvZ3JhbSA9IG5ldyBMeXJhU2NyaXB0UHJvZ3JhbShpc0RlYnVnKTtcblx0fVxuXG5cdGNyZWF0ZUluc3RhbmNlKGNsYXNzTmFtZTogc3RyaW5nKTogSW5zdGFuY2Uge1xuXHRcdHJldHVybiBuZXcgSW5zdGFuY2UodGhpcy5vYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChjbGFzc05hbWUpKTtcblx0fVxuXG5cdGNhbGxJbnN0YW5jZU1ldGhvZChtZXRob2ROYW1lOiBzdHJpbmcsIGFyZ3M6IGFueVtdKTogYW55IHtcblx0XHRpZiAodGhpcy5yb290SW5zdGFuY2UgPT09IG51bGwpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignTm8gcm9vdCBpbnN0YW5jZSBhdmFpbGFibGUuJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNhbGxJbnN0YW5jZU1ldGhvZChcblx0XHRcdHRoaXMucm9vdEluc3RhbmNlLFxuXHRcdFx0dGhpcy5yb290SW5zdGFuY2UuX19jbGFzc0RlZi5maW5kTWV0aG9kKG1ldGhvZE5hbWUpLFxuXHRcdFx0YXJncyxcblx0XHRcdHRoaXMub2JqZWN0UmVnaXN0cnksXG5cdFx0XHR0aGlzLmVudmlyb25tZW50XG5cdFx0KTtcblx0fVxuXG5cdGFzeW5jIGV4ZWN1dGVFbnRyeUZpbGUodXJsOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHRoaXMucHJvZ3JhbS5leGVjdXRlKGF3YWl0IGZldGNoU291cmNlKHVybCkpXG5cdFx0ICAgICAgICAgICAudGhlbigoKSA9PiB7XG5cdFx0XHQgICAgICAgICAgIHRoaXMub2JqZWN0UmVnaXN0cnkgPSB0aGlzLnByb2dyYW0uZ2V0R2xvYmFsT2JqZWN0UmVnaXN0cnkoKTtcblx0XHRcdCAgICAgICAgICAgdGhpcy5lbnZpcm9ubWVudCA9IHRoaXMucHJvZ3JhbS5nZXRHbG9iYWxFbnZpcm9ubWVudCgpO1xuXHRcdCAgICAgICAgICAgfSlcblx0XHQgICAgICAgICAgIC50aGVuKCgpID0+IHtcblx0XHRcdCAgICAgICAgICAgdGhpcy5yb290SW5zdGFuY2UgPSB0aGlzLmNyZWF0ZUluc3RhbmNlKGNsYXNzTmFtZSk7XG5cdFx0ICAgICAgICAgICB9KTtcblx0fVxufVxuIiwKICAgICIvLy8gPHJlZmVyZW5jZSBsaWI9XCJkb21cIiAvPlxuXG5pbXBvcnQgdHlwZSB7Vk5vZGV9IGZyb20gXCIuLi9jb3JlL3Zkb20vdmRvbS50c1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRDcmVhdG9yIHtcblx0Y3JlYXRlRWxlbWVudCh2Tm9kZTogVk5vZGUpOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBIVE1MRWxlbWVudENyZWF0b3IgaW1wbGVtZW50cyBFbGVtZW50Q3JlYXRvciB7XG5cdGNyZWF0ZUVsZW1lbnQodk5vZGU6IFZOb2RlKTogTm9kZSB7XG5cdFx0Y29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHZOb2RlLnRhZykgYXMgSFRNTEVsZW1lbnQ7XG5cblx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh2Tm9kZS5wcm9wcykpIHtcblx0XHRcdGlmIChrZXkuc3RhcnRzV2l0aCgnb24nKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y29uc3QgZXZlbnQ6IHN0cmluZyA9IGtleS5zbGljZSgyKVxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgdmFsdWUgYXMgRXZlbnRMaXN0ZW5lcik7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiB2Tm9kZS5jaGlsZHJlbikge1xuXHRcdFx0aWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZCkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVsZW1lbnQoY2hpbGQpIGFzIEhUTUxFbGVtZW50KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge3R5cGUgRW5naW5lLCBXZWJMeXJhU2NyaXB0fSBmcm9tIFwiLi9lbmdpbmVcIjtcbmltcG9ydCB7SFRNTEVsZW1lbnRDcmVhdG9yfSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCB0eXBlIHtWTm9kZX0gZnJvbSBcIi4uL2NvcmUvdmRvbS92ZG9tLnRzXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEFwcGxpY2F0aW9uUnVudGltZSB7XG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihcblx0XHRwcm90ZWN0ZWQgcmVhZG9ubHkgZW5naW5lOiBFbmdpbmVcblx0KSB7XG5cblx0fVxuXG5cdHByb3RlY3RlZCBjYWxsTWV0aG9kKG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10gPSBbXSk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuZW5naW5lLmNhbGxJbnN0YW5jZU1ldGhvZChtZXRob2ROYW1lLCBhcmdzKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgV2ViQXBwbGljYXRpb25SdW50aW1lIGV4dGVuZHMgQWJzdHJhY3RBcHBsaWNhdGlvblJ1bnRpbWUge1xuXHRwcml2YXRlIGN1cnJlbnRWTm9kZTogVk5vZGUgfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSBpc1JlbmRlcmluZzogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIHJlbmRlckZ1bmN0aW9uOiAoKCkgPT4gVk5vZGUpIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBtb3VudFBvaW50OiBIVE1MRWxlbWVudCxcblx0ICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBlbGVtZW50Q3JlYXRvcjogSFRNTEVsZW1lbnRDcmVhdG9yID0gbmV3IEhUTUxFbGVtZW50Q3JlYXRvcigpKSB7XG5cdFx0c3VwZXIobmV3IFdlYkx5cmFTY3JpcHQoKSk7XG5cdH1cblxuXHRhc3luYyBzdGFydCh1cmw6IHN0cmluZywgY2xhc3NOYW1lID0gJ0FwcCcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRhd2FpdCB0aGlzLmVuZ2luZS5leGVjdXRlRW50cnlGaWxlKHVybCwgY2xhc3NOYW1lKTtcblxuXHRcdHRoaXMucmVuZGVyRnVuY3Rpb24gPSAoKSA9PiB0aGlzLmNhbGxSZW5kZXIoKTtcblxuXHRcdHRoaXMucGVyZm9ybVJlbmRlcigpO1xuXHR9XG5cblx0Ly8gV2lyZCB2b20gU3RvcmUgYXVmZ2VydWZlblxuXHRyZXF1ZXN0UmVuZGVyKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzUmVuZGVyaW5nKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0cXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuXHRcdFx0dGhpcy5wZXJmb3JtUmVuZGVyKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGxSZW5kZXIoKTogVk5vZGUge1xuXHRcdHJldHVybiB0aGlzLmNhbGxNZXRob2QoJ3JlbmRlcicsIFtdKSBhcyBWTm9kZTtcblx0fVxuXG5cdHByaXZhdGUgcGVyZm9ybVJlbmRlcigpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMucmVuZGVyRnVuY3Rpb24pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmlzUmVuZGVyaW5nID0gdHJ1ZTtcblxuXHRcdGNvbnN0IG5leHRWTm9kZTogVk5vZGUgPSB0aGlzLnJlbmRlckZ1bmN0aW9uKCk7XG5cblxuXHRcdHRoaXMucGF0Y2godGhpcy5jdXJyZW50Vk5vZGUsIG5leHRWTm9kZSk7XG5cblx0XHR0aGlzLmN1cnJlbnRWTm9kZSA9IG5leHRWTm9kZTtcblxuXHRcdHRoaXMuaXNSZW5kZXJpbmcgPSBmYWxzZTtcblx0fVxuXG5cdHByaXZhdGUgcGF0Y2gob2xkVk5vZGU6IFZOb2RlIHwgbnVsbCwgbmV3Vk5vZGU6IFZOb2RlKTogdm9pZCB7XG5cblx0XHQvLyBFcnN0bWFsIHNpbXBlbDogRnVsbCBSZXBsYWNlXG5cdFx0Ly8gU3DDpHRlciBkaWZmICsgcGF0Y2hcblxuXHRcdHRoaXMubW91bnRQb2ludC5pbm5lckhUTUwgPSAnJztcblx0XHRjb25zdCBlbGVtZW50OiBOb2RlID0gdGhpcy5lbGVtZW50Q3JlYXRvci5jcmVhdGVFbGVtZW50KG5ld1ZOb2RlKTtcblx0XHR0aGlzLm1vdW50UG9pbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtQYXJzZXJ9IGZyb20gXCIuL2NvcmUvcGFyc2VyL3BhcnNlclwiO1xuaW1wb3J0IHt3cmFwSnNFcnJvcn0gZnJvbSBcIi4vY29yZS9lcnJvcnNcIjtcbmltcG9ydCB7ZmV0Y2hTb3VyY2UsIFNvdXJjZX0gZnJvbSBcIi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuaW1wb3J0IHtBU1ROb2RlfSBmcm9tIFwiLi9jb3JlL2FzdFwiO1xuaW1wb3J0IHtUb2tlbml6ZXJ9IGZyb20gXCIuL2NvcmUvdG9rZW5pemVyL3Rva2VuaXplclwiO1xuaW1wb3J0IHtUb2tlbn0gZnJvbSBcIi4vY29yZS9ncmFtbWFyXCI7XG5pbXBvcnQge0x5cmFTY3JpcHRQcm9ncmFtfSBmcm9tIFwiLi9jb3JlL3Byb2dyYW1cIjtcbmltcG9ydCB7RXZlbnRQaXBlbGluZX0gZnJvbSBcIi4vY29yZS9ldmVudC9waXBlbGluZVwiO1xuaW1wb3J0IHtiaW5kU3RhdGVUb0V2ZW50LCBTdGF0ZX0gZnJvbSBcIi4vY29yZS9ldmVudC9zdGF0ZVwiO1xuXG5leHBvcnQge1dlYkx5cmFTY3JpcHR9IGZyb20gXCIuL2hvc3QvZW5naW5lXCI7XG5leHBvcnQge1dlYkFwcGxpY2F0aW9uUnVudGltZX0gZnJvbSBcIi4vaG9zdC9ydW50aW1lXCI7XG5cbmNvbnN0IEx5cmEgPSB7XG5cdFNvdXJjZSxcblx0UGFyc2VyLFxuXHRUb2tlbml6ZXIsXG5cdEV2ZW50UGlwZWxpbmUsXG5cdFN0YXRlLFxuXHRiaW5kU3RhdGVUb0V2ZW50LFxuXHRQcm9ncmFtOiAoaXNEZWJ1ZzogYm9vbGVhbik6IEx5cmFTY3JpcHRQcm9ncmFtID0+IFByb2dyYW0oaXNEZWJ1ZyksXG5cdGV4ZWN1dGU6IChzb3VyY2U6IFNvdXJjZSwgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiBleGVjdXRlKHNvdXJjZSwgaXNEZWJ1ZyksXG5cdGV4ZWN1dGVGcm9tU3RyaW5nOiAoY29kZTogc3RyaW5nLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+ID0+IGV4ZWN1dGVGcm9tU3RyaW5nKGNvZGUsIGlzRGVidWcpLFxuXHRleGVjdXRlRnJvbVVybDogYXN5bmMgKHVybDogc3RyaW5nLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+ID0+IGV4ZWN1dGVGcm9tVXJsKHVybCwgaXNEZWJ1ZyksXG5cdGV4ZWN1dGVUZXN0OiAoc291cmNlOiBTb3VyY2UsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4gPT4gZXhlY3V0ZVRlc3Qoc291cmNlLCBpc0RlYnVnKSxcblx0ZXhlY3V0ZVRlc3RTdHJpbmc6IChjb2RlOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4gPT4gZXhlY3V0ZVRlc3RTdHJpbmcoY29kZSwgaXNEZWJ1ZyksXG5cdGV4ZWN1dGVUZXN0VXJsOiAodXJsOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4gPT4gZXhlY3V0ZVRlc3RVcmwodXJsLCBpc0RlYnVnKSxcblx0dG9rZW5pemU6IChzb3VyY2U6IFNvdXJjZSk6IFRva2VuW10gPT4gdG9rZW5pemUoc291cmNlKSxcblx0dG9rZW5pemVVcmw6ICh1cmw6IHN0cmluZyk6IFByb21pc2U8VG9rZW5bXT4gPT4gdG9rZW5pemVVcmwodXJsKSxcblx0cGFyc2VUcmVlOiAoc291cmNlOiBTb3VyY2UpOiBBU1ROb2RlID0+IHBhcnNlVHJlZShzb3VyY2UpLFxuXHRwYXJzZVRyZWVVcmw6ICh1cmw6IHN0cmluZyk6IFByb21pc2U8QVNUTm9kZT4gPT4gcGFyc2VUcmVlVXJsKHVybCksXG59O1xuXG5mdW5jdGlvbiBQcm9ncmFtKGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IEx5cmFTY3JpcHRQcm9ncmFtIHtcblx0cmV0dXJuIG5ldyBMeXJhU2NyaXB0UHJvZ3JhbShpc0RlYnVnKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZShzb3VyY2U6IFNvdXJjZSwgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IFByb2dyYW0oaXNEZWJ1Zylcblx0XHRcdC5leGVjdXRlKHNvdXJjZSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3Iod3JhcEpzRXJyb3IoZXJyb3IsIHNvdXJjZSlcblx0XHRcdFx0ICAgICAgICAgICAgICAuZm9ybWF0KCkpO1xuXHRcdH1cblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlRnJvbVVybCh1cmw6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdHJldHVybiBhd2FpdCBleGVjdXRlKGF3YWl0IGZldGNoU291cmNlKHVybCksIGlzRGVidWcpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlRnJvbVN0cmluZyhjb2RlOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBzb3VyY2UgPSBuZXcgU291cmNlKGNvZGUpO1xuXG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IFByb2dyYW0oaXNEZWJ1Zylcblx0XHRcdC5leGVjdXRlKHNvdXJjZSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3Iod3JhcEpzRXJyb3IoZXJyb3IsIHNvdXJjZSlcblx0XHRcdFx0ICAgICAgICAgICAgICAuZm9ybWF0KCkpO1xuXHRcdH1cblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlVGVzdChzb3VyY2U6IFNvdXJjZSwgaXNEZWJ1ZyA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IFByb2dyYW0oaXNEZWJ1Zylcblx0XHRcdC5leGVjdXRlVGVzdChzb3VyY2UpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKHdyYXBKc0Vycm9yKGVycm9yLCBzb3VyY2UpXG5cdFx0XHRcdCAgICAgICAgICAgICAgLmZvcm1hdCgpKTtcblx0XHR9XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZVRlc3RVcmwodXJsOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4ge1xuXHRyZXR1cm4gYXdhaXQgZXhlY3V0ZVRlc3QoYXdhaXQgZmV0Y2hTb3VyY2UodXJsKSwgaXNEZWJ1Zyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVUZXN0U3RyaW5nKGNvZGU6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHNvdXJjZSA9IG5ldyBTb3VyY2UoY29kZSk7XG5cblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgUHJvZ3JhbShpc0RlYnVnKVxuXHRcdFx0LmV4ZWN1dGVUZXN0KHNvdXJjZSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3Iod3JhcEpzRXJyb3IoZXJyb3IsIHNvdXJjZSlcblx0XHRcdFx0ICAgICAgICAgICAgICAuZm9ybWF0KCkpO1xuXHRcdH1cblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9rZW5pemUoc291cmNlOiBTb3VyY2UpOiBUb2tlbltdIHtcblx0cmV0dXJuIG5ldyBUb2tlbml6ZXIoc291cmNlKS50b2tlbml6ZSgpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdG9rZW5pemVVcmwodXJsOiBzdHJpbmcpOiBQcm9taXNlPFRva2VuW10+IHtcblx0cmV0dXJuIHRva2VuaXplKGF3YWl0IGZldGNoU291cmNlKHVybCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUcmVlKHNvdXJjZTogU291cmNlKTogQVNUTm9kZSB7XG5cdHJldHVybiBuZXcgUGFyc2VyKHNvdXJjZSkucGFyc2UoKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBhcnNlVHJlZVVybCh1cmw6IHN0cmluZyk6IFByb21pc2U8QVNUTm9kZT4ge1xuXHRyZXR1cm4gcGFyc2VUcmVlKGF3YWl0IGZldGNoU291cmNlKHVybCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMeXJhO1xuIgogIF0sCiAgIm1hcHBpbmdzIjogIjtBQUVPLE1BQU0sUUFBUTtBQUFBLFNBQ2IsU0FBaUI7QUFBQSxTQUNqQixPQUFlO0FBQUEsU0FDZixNQUFjO0FBQUEsU0FDZCxPQUFlO0FBQUEsU0FDZixRQUFnQjtBQUFBLFNBQ2hCLFlBQW9CO0FBQUEsU0FDcEIsVUFBa0I7QUFBQSxTQUNsQixhQUFxQjtBQUFBLFNBQ3JCLGNBQXNCO0FBQUEsU0FDdEIsTUFBYztBQUFBLFNBQ2QsT0FBZTtBQUFBLFNBQ2YsU0FBaUI7QUFBQSxTQUNqQixVQUFrQjtBQUFBLFNBQ2xCLFNBQWlCO0FBQUEsU0FDakIsV0FBbUI7QUFBQSxTQUNuQixTQUFpQjtBQUFBLFNBQ2pCLFFBQWdCO0FBQUEsU0FDaEIsT0FBZTtBQUFBLFNBQ2YsUUFBZ0I7QUFBQSxTQUNoQixLQUFhO0FBQUEsU0FDYixPQUFlO0FBQUEsU0FDZixRQUFnQjtBQUFBLFNBQ2hCLFVBQWtCO0FBQUEsU0FDbEIsVUFBa0I7QUFBQSxTQUNsQixLQUFhO0FBQUEsU0FDYixPQUFlO0FBQUEsU0FDZixPQUFlO0FBQUEsU0FFZixzQkFBOEI7QUFBQSxTQUM5Qix1QkFBK0I7QUFBQSxTQUMvQixhQUFxQjtBQUFBLFNBQ3JCLGNBQXNCO0FBQUEsU0FDdEIsbUJBQTJCO0FBQUEsU0FDM0Isb0JBQTRCO0FBQUEsU0FDNUIsWUFBb0I7QUFBQSxTQUNwQixRQUFnQjtBQUFBLFNBQ2hCLFFBQWdCO0FBQUEsU0FFaEIsUUFBZ0I7QUFBQSxTQUNoQixNQUFjO0FBQUEsU0FDZCxTQUFpQjtBQUFBLFNBQ2pCLE9BQWU7QUFBQSxTQUNmLFFBQWdCO0FBQUEsU0FDaEIsU0FBaUI7QUFBQSxTQUNqQixXQUFtQjtBQUFBLFNBQ25CLFVBQWtCO0FBQUEsU0FFbEIsbUJBQTJCO0FBQUEsU0FDM0IsZ0JBQXdCO0FBQUEsU0FDeEIsWUFBb0I7QUFBQSxTQUNwQixlQUF1QjtBQUFBLFNBQ3ZCLGFBQXFCO0FBQUEsU0FDckIsZ0JBQXdCO0FBQUEsU0FDeEIsUUFBZ0I7QUFBQSxTQUNoQixZQUFvQjtBQUFBLFNBQ3BCLE1BQWM7QUFBQSxTQUNkLEtBQWE7QUFBQSxTQUViLGdCQUF3QjtBQUFBLFNBQ3hCLHFCQUE2QjtBQUFBLFNBRTdCLFdBQXFCO0FBQUEsSUFDM0IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLEVBQ1Q7QUFBQSxTQUNPLGFBQXVCO0FBQUEsSUFDN0IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLEVBQ1Q7QUFBQSxTQUNPLGFBQXVCO0FBQUEsSUFDN0IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLEVBQ1Q7QUFBQSxTQUNPLFdBQXFCO0FBQUEsSUFDM0IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLEVBQ1Q7QUFBQSxTQUNPLFVBQW9CO0FBQUEsSUFDMUIsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLEVBQ1Q7QUFBQSxTQUNPLFlBQXNCO0FBQUEsSUFDNUIsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLEVBQ1Q7QUFBQSxTQUNPLGdCQUEwQjtBQUFBLElBQ2hDLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7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
