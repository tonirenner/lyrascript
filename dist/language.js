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
  static DOM_OPERATORS = [
    GRAMMAR.ARROW,
    GRAMMAR.DOT,
    GRAMMAR.ASSIGN,
    GRAMMAR.LESS_THAN,
    GRAMMAR.GREATER_THAN,
    GRAMMAR.XML_OPEN_CLOSE_TAG,
    GRAMMAR.XML_CLOSE_TAG
  ];
  static DOM_PUNCTUATIONS = [
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
  static DOM_OPERATORS = new Set(GRAMMAR.DOM_OPERATORS);
  static DOM_PUNCTUATIONS = new Set(GRAMMAR.DOM_PUNCTUATIONS);
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
      const operator = this.matchOperatorAt(i);
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
  matchOperatorAt(i, operators = Rules.OPERATORS) {
    const chars = this.source.charAt(i) + this.source.charAt(i + 1);
    if (operators.has(chars)) {
      return new Token(TokenType.OPERATOR, chars, i, i + 1, this.source);
    }
    if (operators.has(this.source.charAt(i))) {
      return new Token(TokenType.OPERATOR, this.source.charAt(i), i, i, this.source);
    }
    return null;
  }
  matchPunctuationAt(i, punctuations = Rules.PUNCTUATIONS) {
    const chars = this.source.charAt(i) + this.source.charAt(i + 1);
    if (punctuations.has(chars)) {
      return new Token(TokenType.PUNCTUATION, chars, i, i + 1, this.source);
    }
    if (!punctuations.has(this.source.charAt(i))) {
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
    const ifIsConsumingString = () => {
      const string = this.matchStringAt(i);
      if (string) {
        flushTextBuffer();
        tokens.push(string.withLineAndColumn(line, column));
        i = string.end + 1;
        column += this.columOffset(string);
        return true;
      }
      return false;
    };
    const ifIsConsumingPunctuation = () => {
      const punctuation = this.matchPunctuationAt(i, Rules.DOM_PUNCTUATIONS);
      if (punctuation) {
        flushTextBuffer();
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
        flushTextBuffer();
        tokens.push(identifier.withLineAndColumn(line, column));
        i = identifier.end;
        column += this.columOffset(identifier);
        return true;
      }
      return false;
    };
    const ifIsConsumingNumber = () => {
      const number = this.matchNumberAt(i);
      if (number) {
        flushTextBuffer();
        tokens.push(number.withLineAndColumn(line, column));
        i = number.end;
        column += this.columOffset(number);
        return true;
      }
      return false;
    };
    const ifIsConsumingOperator = () => {
      const operator = this.matchOperatorAt(i, Rules.DOM_OPERATORS);
      if (operator) {
        flushTextBuffer();
        tokens.push(operator.withLineAndColumn(line, column));
        i = operator.end + 1;
        column += this.columOffset(operator);
        return true;
      }
      return false;
    };
    const flushTextBuffer = () => {
      if (textBuffer.length > 0) {
        tokens.push(new Token(TokenType.TEXT, textBuffer, i - textBuffer.length, i, this.source).withLineAndColumn(line, column - textBuffer.length));
        textBuffer = "";
      }
    };
    let ignoreWhitespace = false;
    while (i < this.source.length) {
      const char = this.source.charAt(i);
      if (char === GRAMMAR.SEMICOLON) {
        flushTextBuffer();
        tokens.push(new Token(TokenType.PUNCTUATION, char, i, i, this.source).withLineAndColumn(line, column));
        i++;
        column++;
        break;
      } else if (char === GRAMMAR.BRACE_OPEN) {
        ignoreWhitespace = true;
      } else if (char === GRAMMAR.BRACE_CLOSE) {
        ignoreWhitespace = false;
      }
      if (ignoreWhitespace) {
        if (this.matchWhitespaceAt(i)) {
          i++;
          continue;
        }
      }
      if (ifIsConsumingPunctuation() || ifIsConsumingString() || ifIsConsumingNumber() || ifIsConsumingIdentifier() || ifIsConsumingOperator()) {
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
    flushTextBuffer();
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
          const classDef = ClassDefinition.fromAST(node);
          classDef.nativeInstance = this.nativeInstance;
          return classDef;
        }
      }
    }
    throwRuntimeError(`Class ${this.name} not found.`, ast.span);
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
          const self2 = this;
          return self2[name];
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
  const instance = classDef.constructEmptyInstance();
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

// language/src/core/event/state.ts
class State {
  value;
  subscribers = new Map;
  id = 0;
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
    const nextId = this.id++;
    this.subscribers.set(nextId, this.wrapCallback(fn));
    return nextId;
  }
  unsubscribe(id) {
    return this.subscribers.delete(id);
  }
  notify() {
    for (const fn of this.subscribers.values()) {
      fn(this.value);
    }
  }
  wrapCallback(fn) {
    return (value) => {
      fn.evalCall(null, toLyraValue(value));
    };
  }
}
function bindStateToEvent(pipeline, event, state, map) {
  pipeline.on(event, (payload) => {
    const value = map ? map(payload) : payload;
    state.set(value);
  });
}

// language/src/library/classes/state.ts
var CLASS_NAME5 = "State";

class LyraState extends LyraNativeObject {
  state;
  constructor(initial) {
    super(CLASS_NAME5);
    this.state = new State(initial);
  }
  get() {
    return this.state.get();
  }
  set(value) {
    this.state.set(value);
  }
  subscribe(fn) {
    return this.state.subscribe(fn);
  }
  unsubscribe(id) {
    return this.state.unsubscribe(id);
  }
}

class StateType extends NativeClass {
  static CLASS_NAME = CLASS_NAME5;
  constructor() {
    super(CLASS_NAME5, LyraState, new Source(`
class ${CLASS_NAME5}<T> {
	public constructor(initial: T);

	public get(): T;
	
	public set(value: T): void;
	
	public subscribe(fn: (T) -> void): number;
	
	public unsubscribe(id: number): boolean;
}`));
    this.isAutoloadAble = true;
  }
}

// language/src/library/classes/event.ts
var CLASS_NAME6 = "Events";

class LyraEvent extends LyraNativeObject {
  event;
  constructor(event) {
    super(CLASS_NAME6);
    this.event = event;
  }
  getType() {
    return this.event.type;
  }
  preventDefault() {
    this.event.preventDefault();
  }
}

class EventType extends NativeClass {
  static CLASS_NAME = CLASS_NAME6;
  constructor() {
    super(CLASS_NAME6, LyraEvent, new Source(`
class ${CLASS_NAME6} {
	public constructor(event);

	public getType(): string;

	public preventDefault(): void;
}`));
    this.isAutoloadAble = true;
  }
}

// language/src/library/native_classes.ts
class NativeClasses {
  registry = new Map;
  constructor() {
    this.registry.set(Assert.CLASS_NAME, new Assert);
    this.registry.set(System.CLASS_NAME, new System);
    this.registry.set(StringType.CLASS_NAME, new StringType);
    this.registry.set(NumberType.CLASS_NAME, new NumberType);
    this.registry.set(ArrayType.CLASS_NAME, new ArrayType);
    this.registry.set(ArrayIteratorType.CLASS_NAME, new ArrayIteratorType);
    this.registry.set(StateType.CLASS_NAME, new StateType);
    this.registry.set(EventType.CLASS_NAME, new EventType);
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

// language/src/core/types/type_objects.ts
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

// language/src/core/interpreter/interpreter_runtime.ts
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
    if (!(this.node instanceof ASTCallNode)) {
      throwRuntimeError(`Invalid native function call ${this.node.type}.`, this.node.span);
    }
    return this.node;
  }
  getASTLambdaNode() {
    if (!(this.node instanceof ASTLambdaNode)) {
      throwRuntimeError(`Invalid lambda call ${this.node.type}.`, this.node.span);
    }
    return this.node;
  }
}

class LambdaFunctionCall extends AbstractFunctionCall {
  evalCall(thisValue, ...args) {
    const node = this.getASTLambdaNode();
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
  for (const nativeClass of nativeClasses.registry.values()) {
    if (nativeClass.isAutoloadAble) {
      const classDef = nativeClass.getClassDefinition();
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
function constructEmptyInstance(node, objectRegistry) {
  let classDef;
  if (objectRegistry.classes.has(node.name)) {
    classDef = objectRegistry.classes.get(node.name);
  } else {
    classDef = ClassDefinition.fromAST(node);
    objectRegistry.classes.set(node.name, classDef);
  }
  return classDef.constructEmptyInstance(objectRegistry);
}
function constructNativeInstance(expr, classDef, objectRegistry, environment) {
  return classDef.constructNativeInstanceByNewNode(expr, objectRegistry, environment);
}
function constructInstance(expr, classDef, objectRegistry, environment) {
  return classDef.constructInstanceByNewNode(expr, objectRegistry, environment);
}
function evalClass(node, objectRegistry, environment) {
  const instance = constructEmptyInstance(node, objectRegistry);
  instance.initializeInstanceFields(objectRegistry, environment);
  environment.define(node.name, instance);
}
function evalNew(expr, objectRegistry, environment) {
  if (!objectRegistry.classes.has(expr.name)) {
    throwRuntimeError(`Unknown class ${expr.name}.`, expr.span);
  }
  const classDef = objectRegistry.classes.get(expr.name);
  if (classDef.nativeInstance) {
    return constructNativeInstance(expr, classDef, objectRegistry, environment);
  }
  return constructInstance(expr, classDef, objectRegistry, environment);
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
  const instance = classDef.constructEmptyInstance(objectRegistry);
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
  const props = {};
  for (const [name, value] of node.props) {
    props[name] = evalExpression(value, objectRegistry, environment, thisValue);
  }
  const children = [];
  for (const child of node.children) {
    if (child instanceof ASTVDomTextNode) {
      children.push(child.value);
    } else if (child instanceof ASTVDomNode) {
      children.push(evalVDomNode(child, objectRegistry, environment, thisValue));
    }
  }
  return {
    tag: node.tag,
    isComponent: objectRegistry.classes.has(node.tag),
    component: null,
    props,
    children,
    dom: null
  };
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
    return createBoxedInstance(AutoboxedTypes.getClassName(TYPE_ENUM.NUMBER), value, objectRegistry);
  }
  if (typeof value === TYPE_ENUM.STRING) {
    return createBoxedInstance(AutoboxedTypes.getClassName(TYPE_ENUM.STRING), value, objectRegistry);
  }
  if (typeof value === TYPE_ENUM.BOOLEAN) {
    return createBoxedInstance(AutoboxedTypes.getClassName(TYPE_ENUM.BOOLEAN), value, objectRegistry);
  }
  return value;
}
function createBoxedInstance(className, primitiveValue, objectRegistry) {
  const classDef = objectRegistry.classes.get(className);
  const instance = classDef.constructEmptyInstance(objectRegistry);
  instance.__nativeInstance = new classDef.nativeInstance(fromLyraValue(primitiveValue));
  return instance;
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
  id;
  __classDef;
  __instanceFields;
  __staticFields;
  __nativeInstance = null;
  constructor(classDef) {
    this.__classDef = classDef;
    this.__instanceFields = {};
    this.__staticFields = {};
    this.__nativeInstance = null;
    this.id = Instance.generateInstanceUUID();
  }
  static generateInstanceUUID() {
    return self.crypto.randomUUID();
  }
  initializeInstanceFields(objectRegistry, environment) {
    this.__classDef.initializeInstanceFields(this, objectRegistry, environment);
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
  constructor(type2, name) {
    this.type = type2;
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
  constructor(name, type2, modifiers, initializer = null) {
    this.name = name;
    this.type = type2;
    this.modifiers = modifiers;
    this.initializer = initializer;
  }
}

class ClassMethodDefinition2 {
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
  static fromAST(node) {
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
        const method = new ClassMethodDefinition2(child.name, child.parameters, child.returnType, child.modifiers, child.children);
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
  constructEmptyInstance(objectRegistry) {
    const instance = new Instance(this);
    objectRegistry.instances.register(instance);
    return instance;
  }
  constructNativeInstance(objectRegistry, args = []) {
    const instance = this.constructEmptyInstance(objectRegistry);
    instance.__nativeInstance = new this.nativeInstance(...args);
    return instance;
  }
  constructNewInstanceWithoutArguments(objectRegistry, environment) {
    return this.constructNewInstance([], objectRegistry, environment);
  }
  constructNewInstance(args, objectRegistry, environment) {
    const newNode = new ASTNewNode(args, new ASTTypeNode(ASTTypeNode.KIND_SIMPLE, this.name));
    return this.constructInstanceByNewNode(newNode, objectRegistry, environment);
  }
  constructInstanceByNewNode(expr, objectRegistry, environment) {
    const instance = this.constructEmptyInstance(objectRegistry);
    instance.initializeInstanceFields(objectRegistry, environment);
    if (!this.constructorMethod) {
      return instance;
    }
    const constructor = this.constructorMethod;
    const constructorEnv = new Environment(environment);
    const constructorArgs = evalMethodArguments(expr, constructor.parameters, objectRegistry, environment, instance);
    constructorEnv.define(GRAMMAR.THIS, instance);
    for (let i = 0;i < constructorArgs.length; i++) {
      const parameter2 = constructor.parameters[i];
      if (parameter2) {
        constructorEnv.define(parameter2.name, constructorArgs[i]);
      }
    }
    for (const child of constructor.children) {
      evalNode(child, objectRegistry, constructorEnv, instance);
    }
    return instance;
  }
  constructNativeInstanceByNewNode(expr, objectRegistry, environment) {
    const instance = this.constructEmptyInstance(objectRegistry);
    const constructor = this.constructorMethod;
    const constructorEnv = new Environment(environment);
    const constructorArgs = evalMethodArguments(expr, constructor ? constructor.parameters : [], objectRegistry, environment, instance);
    constructorEnv.define(GRAMMAR.THIS, instance);
    if (this.nativeInstance === null) {
      throwRuntimeError("Class has no native instance");
    }
    const nativeInstance = new this.nativeInstance(...constructorArgs.map(fromLyraValue));
    if (nativeInstance instanceof LyraNativeObject) {
      instance.__nativeInstance = nativeInstance;
    }
    return instance;
  }
  initializeInstanceFields(instance, objectRegistry, environment) {
    let rawValue;
    for (const field of this.instanceFields) {
      rawValue = field.initializer ? evalExpression(field.initializer, objectRegistry, environment) : null;
      instance.__instanceFields[field.name] = castValue(rawValue, field.type);
    }
    for (const field of this.staticFields) {
      rawValue = field.initializer ? evalExpression(field.initializer, objectRegistry, environment) : null;
      instance.__staticFields[field.name] = castValue(rawValue, field.type);
    }
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
        const method = new ClassMethodDefinition2(child.name, child.parameters, child.returnType, child.modifiers, child.children);
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
  let type2;
  if (parser.peek().value === GRAMMAR.PARENTHESES_OPEN) {
    type2 = parseLambdaType(parser);
  } else {
    type2 = parseSimpleOrGenericType(parser);
  }
  if (parser.consumeIfOperator(GRAMMAR.QUESTION_MARK)) {
    type2.nullable = true;
  }
  return type2;
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
    let type2 = null;
    let defaultValue = null;
    let typeToken = null;
    let defaultValueToken = null;
    if (parser.peek().value === GRAMMAR.COLON) {
      typeToken = parser.next();
      type2 = parseType(parser);
    }
    if (parser.peek().value === GRAMMAR.ASSIGN) {
      defaultValueToken = parser.next();
      defaultValue = parseExpression(parser);
    }
    const node = new ASTParameterNode(nameToken.value, type2, defaultValue);
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
    let type2 = null;
    let defaultValue = null;
    if (parser.consumeIfPunctuation(GRAMMAR.COLON)) {
      type2 = parseType(parser);
    }
    if (parser.peek().value === GRAMMAR.ASSIGN) {
      parser.next();
      defaultValue = parseExpression(parser);
    }
    parameters.push(new ASTParameterNode(name, type2, defaultValue));
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
  parser.consumeIfText();
  const startToken = parser.expectOperator(GRAMMAR.LESS_THAN);
  const tagToken = parser.expectIdentifier();
  const tag = tagToken.value;
  parser.consumeIfText();
  const props = new Map;
  while (!parser.peekIs(GRAMMAR.GREATER_THAN) && !parser.peekIs(GRAMMAR.XML_CLOSE_TAG)) {
    const nameToken = parser.expectIdentifier();
    parser.expectOperator(GRAMMAR.ASSIGN);
    let value;
    if (parser.peekIs(GRAMMAR.BRACE_OPEN)) {
      value = parseLambda(parser);
    } else {
      value = parseExpression(parser);
    }
    props.set(nameToken.value, value);
  }
  parser.expectOperator(GRAMMAR.GREATER_THAN);
  const children = [];
  while (!parser.peekIs(GRAMMAR.XML_OPEN_CLOSE_TAG)) {
    if (parser.peek().type === TokenType.OPERATOR) {
      children.push(parseVDomElement(parser));
      continue;
    }
    children.push(parseVDomText(parser));
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
    TokenType.PUNCTUATION,
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
    if (token.type === tokenType && (keyword && token.value.trim() === keyword)) {
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
  consumeIfText() {
    if (this.peek().type === TokenType.TEXT && this.peekIs("")) {
      this.next();
      return true;
    }
    return false;
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
    this.set(node.name, ClassDefinition.fromAST(node));
  }
  all() {
    return this.map.values();
  }
  set(name, classDefinition) {
    this.map.set(name, classDefinition);
  }
  get(name) {
    const classDef = this.map.get(name) || null;
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

class InstanceRegistry {
  instances = new Map;
  register(instance) {
    this.instances.set(instance.id, instance);
  }
  unregister(instance) {
    this.instances.delete(instance.id);
  }
  get(id) {
    return this.instances.get(id) || null;
  }
  allInstances() {
    return Array.from(this.instances.values());
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
  instances = new InstanceRegistry;
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

// language/src/core/types/typechecker.ts
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

// language/src/core/linker/linker.ts
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
          const nativeClass = nativeClasses2.registry.get(className) || null;
          if (!nativeClass) {
            throwDependencyError(`Unknown native class ${className}`, node?.span);
          }
          const classDef = nativeClass.getClassDefinition();
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
    const instance = ClassDefinition.fromAST(classNode).constructNewInstanceWithoutArguments(this.objectRegistry, this.environment);
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

// language/src/host/events.ts
var DOM_EVENT = "dom:event";

class EventHandlerStore {
  eventHandlers = new WeakMap;
  addEventHandler(element, propertyKey, handler) {
    const eventHandlers = this.eventHandlers.get(element) ?? {};
    eventHandlers[propertyKey] = handler;
    this.eventHandlers.set(element, eventHandlers);
  }
  removeEventHandler(element, propertyKey) {
    const eventHandlers = this.eventHandlers.get(element) ?? {};
    const eventHandler = eventHandlers[propertyKey];
    if (eventHandler) {
      delete eventHandlers[propertyKey];
      this.eventHandlers.set(element, eventHandlers);
      return eventHandler;
    }
    return null;
  }
}
var isEvent = (propertyKey) => {
  return propertyKey.toLowerCase().startsWith("on");
};
var Events = {
  DOM_EVENT,
  isEvent
};
var events_default = Events;

// language/src/host/dom.ts
class HTMLElementCreator {
  applicationRuntime;
  textBuffer = [];
  constructor(applicationRuntime) {
    this.applicationRuntime = applicationRuntime;
  }
  create(vNode) {
    if (typeof vNode === "string") {
      return document.createTextNode(vNode);
    }
    if (vNode.isComponent && vNode.component === null) {
      vNode.component = this.applicationRuntime.createInstance(vNode.tag);
      vNode.dom = this.create(this.applicationRuntime.callMethod(vNode.component, "render", []));
      return vNode.dom;
    }
    const flushTextBuffer = () => {
      const text = this.flushTextBuffer();
      if (text) {
        element.appendChild(text);
      }
    };
    const element = document.createElement(vNode.tag);
    vNode.dom = element;
    for (const [propertyKey, value] of Object.entries(vNode.props)) {
      if (events_default.isEvent(propertyKey)) {
        this.applicationRuntime.addEventHandler(element, propertyKey, value);
      } else if (typeof value === "string") {
        element.setAttribute(propertyKey, value);
      }
    }
    for (const child of vNode.children) {
      if (typeof child === "string") {
        this.textBuffer.push(child);
      } else {
        element.appendChild(this.create(child));
      }
      flushTextBuffer();
    }
    flushTextBuffer();
    return element;
  }
  flushTextBuffer() {
    if (this.textBuffer.length === 0) {
      return null;
    }
    const element = document.createTextNode(this.textBuffer.join(""));
    this.textBuffer = [];
    return element;
  }
}

class HTMLElementPatcher {
  mountPoint;
  applicationRuntime;
  elementCreator;
  constructor(mountPoint, applicationRuntime, elementCreator = new HTMLElementCreator(applicationRuntime)) {
    this.mountPoint = mountPoint;
    this.applicationRuntime = applicationRuntime;
    this.elementCreator = elementCreator;
  }
  patch(oldVNode, newVNode) {
    if (oldVNode) {
      this.patchNode(this.mountPoint, oldVNode, newVNode);
      return;
    }
    const element = this.elementCreator.create(newVNode);
    this.mountPoint.appendChild(element);
    if (typeof newVNode !== "string") {
      newVNode.dom = element;
    }
  }
  patchNode(parent, oldNode, newNode) {
    if (typeof oldNode === "string" && typeof newNode === "string") {
      if (oldNode !== newNode) {
        const textNode = parent.firstChild;
        if (textNode) {
          textNode.textContent = newNode;
        }
      }
      return;
    }
    if (typeof oldNode === "string" || typeof newNode === "string") {
      const newElement = this.elementCreator.create(newNode);
      parent.replaceChild(newElement, parent.firstChild);
      if (typeof newNode !== "string") {
        newNode.dom = newElement;
      }
      return;
    }
    if (oldNode.tag !== newNode.tag) {
      const newElement = this.elementCreator.create(newNode);
      parent.replaceChild(newElement, oldNode.dom);
      newNode.dom = newElement;
      return;
    }
    const dom = oldNode.dom;
    newNode.dom = dom;
    this.updateProperties(dom, oldNode.props, newNode.props);
    this.patchChildren(dom, oldNode.children, newNode.children);
  }
  updateProperties(element, oldProperties, newProperties) {
    for (const propertyKey in oldProperties) {
      if (!(propertyKey in newProperties)) {
        if (events_default.isEvent(propertyKey)) {
          this.applicationRuntime.removeEventHandler(element, propertyKey);
        } else {
          element.removeAttribute(propertyKey);
        }
      }
    }
    for (const propertyKey in newProperties) {
      const oldValue = oldProperties[propertyKey];
      const newValue = newProperties[propertyKey];
      if (oldValue === newValue) {
        continue;
      }
      if (events_default.isEvent(propertyKey)) {
        if (oldValue) {
          this.applicationRuntime.removeEventHandler(element, propertyKey);
        }
        this.applicationRuntime.addEventHandler(element, propertyKey, newValue);
      } else {
        element.setAttribute(propertyKey, newValue);
      }
    }
  }
  patchChildren(parent, oldChildren, newChildren) {
    const max = Math.max(oldChildren.length, newChildren.length);
    for (let i = 0;i < max; i++) {
      const oldChild = oldChildren[i];
      const newChild = newChildren[i];
      if (!oldChild && newChild) {
        parent.appendChild(this.elementCreator.create(newChild));
        continue;
      }
      const parentChildNode = parent.childNodes[i];
      if (parentChildNode) {
        if (oldChild && !newChild) {
          parent.removeChild(parentChildNode);
          continue;
        }
        if (newChild && oldChild) {
          this.patchNode(parentChildNode.parentNode, oldChild, newChild);
        }
      }
    }
  }
}

// language/src/host/engine.ts
var lyraEventClassDef = new EventType().getClassDefinition();

class WebLyraScript {
  eventPipeline;
  program;
  objectRegistry = new ObjectRegistry;
  environment = new Environment;
  rootInstance = null;
  constructor(eventPipeline = new EventPipeline, isDebug = false) {
    this.eventPipeline = eventPipeline;
    this.program = new LyraScriptProgram(isDebug);
  }
  createInstance(className) {
    return this.getClassDefinition(className).constructNewInstanceWithoutArguments(this.objectRegistry, this.environment);
  }
  callRootInstanceMethod(methodName, args) {
    if (this.rootInstance === null) {
      throw new Error("No root instance available.");
    }
    return this.callInstanceMethod(this.rootInstance, methodName, args);
  }
  callInstanceMethod(instance, methodName, args) {
    if (this.rootInstance === null) {
      throw new Error("No root instance available.");
    }
    return callInstanceMethod(instance, instance.__classDef.findMethod(methodName), args, this.objectRegistry, this.environment);
  }
  async executeEntryFile(url, className) {
    return this.program.execute(await fetchSource(url)).then(() => {
      this.objectRegistry = this.program.getGlobalObjectRegistry();
      this.environment = this.program.getGlobalEnvironment();
      this.rootInstance = this.createInstance(className);
    });
  }
  createEvent(event) {
    return lyraEventClassDef.constructNativeInstance(this.objectRegistry, [event]);
  }
  createEventHandler(handler, eventName) {
    return (event) => {
      this.eventPipeline.emit(eventName, {
        invoke: () => {
          handler.evalCall(handler.functionEnv.get(GRAMMAR.THIS), this.createEvent(event));
        },
        event
      });
    };
  }
  getClassDefinition(className) {
    return this.objectRegistry.classes.get(className);
  }
}
// language/src/host/runtime.ts
class AbstractApplicationRuntime {
  _engine;
  _eventPipeline;
  eventHandlerStore;
  constructor(_engine, _eventPipeline = new EventPipeline, eventHandlerStore = new EventHandlerStore) {
    this._engine = _engine;
    this._eventPipeline = _eventPipeline;
    this.eventHandlerStore = eventHandlerStore;
  }
  get engine() {
    return this._engine;
  }
  get eventPipeline() {
    return this._eventPipeline;
  }
  start(url, className) {
    throw new Error("Method not implemented.");
  }
  createInstance(className) {
    return this._engine.createInstance(className);
  }
  callRootInstanceMethod(methodName, args = []) {
    return this._engine.callRootInstanceMethod(methodName, args);
  }
  callMethod(instance, methodName, args = []) {
    return this._engine.callInstanceMethod(instance, methodName, args);
  }
  addEventHandler(element, propertyKey, handler) {
    const eventName = propertyKey.slice(2).toLowerCase();
    const eventHandler = this.engine.createEventHandler(handler, events_default.DOM_EVENT);
    this.eventHandlerStore.addEventHandler(element, propertyKey, eventHandler);
    element.addEventListener(eventName, eventHandler);
  }
  removeEventHandler(element, propertyKey) {
    const eventName = propertyKey.slice(2).toLowerCase();
    const eventHandler = this.eventHandlerStore.removeEventHandler(element, propertyKey);
    if (eventHandler) {
      element.removeEventListener(eventName, eventHandler);
    }
  }
}

class WebApplicationRuntime extends AbstractApplicationRuntime {
  patcher;
  currentVNode = null;
  isRendering = false;
  renderFunction = null;
  constructor(mountPoint, isDebug = false, eventPipeline = new EventPipeline, eventHandlerStore = new EventHandlerStore) {
    super(new WebLyraScript(eventPipeline, isDebug), eventPipeline, eventHandlerStore);
    this.patcher = new HTMLElementPatcher(mountPoint, this);
  }
  async start(url, className = "App") {
    await this.engine.executeEntryFile(url, className);
    this.listenToDomEvents();
    this.renderFunction = () => this.render();
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
  listenToDomEvents() {
    this.eventPipeline.on(events_default.DOM_EVENT, ({ invoke }) => {
      invoke();
      this.performRender();
    });
  }
  performRender() {
    if (!this.renderFunction) {
      return;
    }
    this.isRendering = true;
    const nextVNode = this.renderFunction();
    this.patcher.patch(this.currentVNode, nextVNode);
    this.currentVNode = nextVNode;
    this.isRendering = false;
  }
  render() {
    return this.callRootInstanceMethod("render");
  }
}

// language/src/index.ts
var Lyra = {
  Source,
  Parser,
  Tokenizer,
  EventPipeline,
  HTMLElementCreator,
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

//# debugId=8BD6608982F991BC64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibGFuZ3VhZ2Uvc3JjL2NvcmUvZ3JhbW1hci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9hc3QudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvdG9rZW5pemVyL3Rva2VuaXplci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9lcnJvcnMudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvbmF0aXZlX2NsYXNzLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX2NvbnZlcnNpb24udHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9zdHJpbmcudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9zeXN0ZW0udHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9hc3NlcnQudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9udW1iZXIudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9hcnJheS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9ldmVudC9zdGF0ZS50cyIsICJsYW5ndWFnZS9zcmMvbGlicmFyeS9jbGFzc2VzL3N0YXRlLnRzIiwgImxhbmd1YWdlL3NyYy9saWJyYXJ5L2NsYXNzZXMvZXZlbnQudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvbmF0aXZlX2NsYXNzZXMudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvbmF0aXZlX2Z1bmN0aW9ucy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS90eXBlcy90eXBlX29iamVjdHMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvdHlwZXMvYXV0b2JveGluZy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9ydW50aW1lLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvcGFyc2VyL3BhcnNlcl9zdGF0bWVudHMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvcGFyc2VyL3BhcnNlci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9yZWdpc3RyeS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS90eXBlcy90eXBlY2hlY2tlci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9saW5rZXIvZGVwZW5kZW5jaWVzLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2xpbmtlci9saW5rZXIudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvdGVzdHMvdGVzdHN1aXRlcy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9sb2FkZXJzLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL3Byb2dyYW0udHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvZXZlbnQvcGlwZWxpbmUudHMiLCAibGFuZ3VhZ2Uvc3JjL2hvc3QvZXZlbnRzLnRzIiwgImxhbmd1YWdlL3NyYy9ob3N0L2RvbS50cyIsICJsYW5ndWFnZS9zcmMvaG9zdC9lbmdpbmUudHMiLCAibGFuZ3VhZ2Uvc3JjL2hvc3QvcnVudGltZS50cyIsICJsYW5ndWFnZS9zcmMvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiaW1wb3J0IHR5cGUge1NvdXJjZX0gZnJvbSBcIi4vcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuZXhwb3J0IGNsYXNzIEdSQU1NQVIge1xuXHRzdGF0aWMgSU1QT1JUOiBzdHJpbmcgPSAnaW1wb3J0Jztcblx0c3RhdGljIEZST006IHN0cmluZyA9ICdmcm9tJztcblx0c3RhdGljIExFVDogc3RyaW5nID0gJ2xldCc7XG5cdHN0YXRpYyBPUEVOOiBzdHJpbmcgPSAnb3Blbic7XG5cdHN0YXRpYyBDTEFTUzogc3RyaW5nID0gJ2NsYXNzJztcblx0c3RhdGljIElOVEVSRkFDRTogc3RyaW5nID0gJ2ludGVyZmFjZSc7XG5cdHN0YXRpYyBFWFRFTkRTOiBzdHJpbmcgPSAnZXh0ZW5kcyc7XG5cdHN0YXRpYyBJTVBMRU1FTlRTOiBzdHJpbmcgPSAnaW1wbGVtZW50cyc7XG5cdHN0YXRpYyBDT05TVFJVQ1RPUjogc3RyaW5nID0gJ2NvbnN0cnVjdG9yJztcblx0c3RhdGljIE5FVzogc3RyaW5nID0gJ25ldyc7XG5cdHN0YXRpYyBUSElTOiBzdHJpbmcgPSAndGhpcyc7XG5cdHN0YXRpYyBQVUJMSUM6IHN0cmluZyA9ICdwdWJsaWMnO1xuXHRzdGF0aWMgUFJJVkFURTogc3RyaW5nID0gJ3ByaXZhdGUnO1xuXHRzdGF0aWMgU1RBVElDOiBzdHJpbmcgPSAnc3RhdGljJztcblx0c3RhdGljIFJFQURPTkxZOiBzdHJpbmcgPSAncmVhZG9ubHknO1xuXHRzdGF0aWMgUkVUVVJOOiBzdHJpbmcgPSAncmV0dXJuJztcblx0c3RhdGljIFNVUEVSOiBzdHJpbmcgPSAnc3VwZXInO1xuXHRzdGF0aWMgVFJVRTogc3RyaW5nID0gJ3RydWUnO1xuXHRzdGF0aWMgRkFMU0U6IHN0cmluZyA9ICdmYWxzZSc7XG5cdHN0YXRpYyBJRjogc3RyaW5nID0gJ2lmJztcblx0c3RhdGljIEVMU0U6IHN0cmluZyA9ICdlbHNlJztcblx0c3RhdGljIE1BVENIOiBzdHJpbmcgPSAnbWF0Y2gnO1xuXHRzdGF0aWMgREVGQVVMVDogc3RyaW5nID0gJ2RlZmF1bHQnO1xuXHRzdGF0aWMgRk9SRUFDSDogc3RyaW5nID0gJ2ZvcmVhY2gnO1xuXHRzdGF0aWMgSU46IHN0cmluZyA9ICdpbic7XG5cdHN0YXRpYyBOVUxMOiBzdHJpbmcgPSAnbnVsbCc7XG5cdHN0YXRpYyBWRE9NOiBzdHJpbmcgPSAndmRvbSc7XG5cblx0c3RhdGljIEJSQUNLRVRfU1FVQVJFX09QRU46IHN0cmluZyA9ICdbJztcblx0c3RhdGljIEJSQUNLRVRfU1FVQVJFX0NMT1NFOiBzdHJpbmcgPSAnXSc7XG5cdHN0YXRpYyBCUkFDRV9PUEVOOiBzdHJpbmcgPSAneyc7XG5cdHN0YXRpYyBCUkFDRV9DTE9TRTogc3RyaW5nID0gJ30nO1xuXHRzdGF0aWMgUEFSRU5USEVTRVNfT1BFTjogc3RyaW5nID0gJygnO1xuXHRzdGF0aWMgUEFSRU5USEVTRVNfQ0xPU0U6IHN0cmluZyA9ICcpJztcblx0c3RhdGljIFNFTUlDT0xPTjogc3RyaW5nID0gJzsnO1xuXHRzdGF0aWMgQ09MT046IHN0cmluZyA9ICc6Jztcblx0c3RhdGljIENPTU1BOiBzdHJpbmcgPSAnLCc7XG5cblx0c3RhdGljIEFSUk9XOiBzdHJpbmcgPSAnLT4nO1xuXHRzdGF0aWMgRE9UOiBzdHJpbmcgPSAnLic7XG5cdHN0YXRpYyBBU1NJR046IHN0cmluZyA9ICc9Jztcblx0c3RhdGljIFBMVVM6IHN0cmluZyA9ICcrJztcblx0c3RhdGljIE1JTlVTOiBzdHJpbmcgPSAnLSc7XG5cdHN0YXRpYyBESVZJREU6IHN0cmluZyA9ICcvJztcblx0c3RhdGljIE1VTFRJUExZOiBzdHJpbmcgPSAnKic7XG5cdHN0YXRpYyBNT0RVTFVTOiBzdHJpbmcgPSAnJSc7XG5cblx0c3RhdGljIEVYQ0xBTUFUSU9OX01BUks6IHN0cmluZyA9ICchJztcblx0c3RhdGljIFFVRVNUSU9OX01BUks6IHN0cmluZyA9ICc/Jztcblx0c3RhdGljIExFU1NfVEhBTjogc3RyaW5nID0gJzwnO1xuXHRzdGF0aWMgR1JFQVRFUl9USEFOOiBzdHJpbmcgPSAnPic7XG5cdHN0YXRpYyBMRVNTX0VRVUFMOiBzdHJpbmcgPSAnPD0nO1xuXHRzdGF0aWMgR1JFQVRFUl9FUVVBTDogc3RyaW5nID0gJz49Jztcblx0c3RhdGljIEVRVUFMOiBzdHJpbmcgPSAnPT0nO1xuXHRzdGF0aWMgTk9UX0VRVUFMOiBzdHJpbmcgPSAnIT0nO1xuXHRzdGF0aWMgQU5EOiBzdHJpbmcgPSAnJiYnO1xuXHRzdGF0aWMgT1I6IHN0cmluZyA9ICd8fCc7XG5cblx0c3RhdGljIFhNTF9DTE9TRV9UQUc6IHN0cmluZyA9ICcvPic7XG5cdHN0YXRpYyBYTUxfT1BFTl9DTE9TRV9UQUc6IHN0cmluZyA9ICc8Lyc7XG5cblx0c3RhdGljIEtFWVdPUkRTOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLklNUE9SVCxcblx0XHRHUkFNTUFSLkZST00sXG5cdFx0R1JBTU1BUi5PUEVOLFxuXHRcdEdSQU1NQVIuQ0xBU1MsXG5cdFx0R1JBTU1BUi5JTlRFUkZBQ0UsXG5cdFx0R1JBTU1BUi5FWFRFTkRTLFxuXHRcdEdSQU1NQVIuSU1QTEVNRU5UUyxcblx0XHRHUkFNTUFSLlBVQkxJQyxcblx0XHRHUkFNTUFSLlBSSVZBVEUsXG5cdFx0R1JBTU1BUi5TVEFUSUMsXG5cdFx0R1JBTU1BUi5SRUFET05MWSxcblx0XHRHUkFNTUFSLlJFVFVSTixcblx0XHRHUkFNTUFSLkxFVCxcblx0XHRHUkFNTUFSLk5FVyxcblx0XHRHUkFNTUFSLlRISVMsXG5cdFx0R1JBTU1BUi5JRixcblx0XHRHUkFNTUFSLkVMU0UsXG5cdFx0R1JBTU1BUi5NQVRDSCxcblx0XHRHUkFNTUFSLkRFRkFVTFQsXG5cdFx0R1JBTU1BUi5GT1JFQUNILFxuXHRcdEdSQU1NQVIuSU4sXG5cdFx0R1JBTU1BUi5OVUxMLFxuXHRcdEdSQU1NQVIuVkRPTSxcblx0XTtcblx0c3RhdGljIEFSSVRITUVUSUM6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuUExVUyxcblx0XHRHUkFNTUFSLk1JTlVTLFxuXHRcdEdSQU1NQVIuRElWSURFLFxuXHRcdEdSQU1NQVIuTVVMVElQTFksXG5cdFx0R1JBTU1BUi5NT0RVTFVTXG5cdF07XG5cdHN0YXRpYyBDT01QQVJJU09OOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLkxFU1NfVEhBTixcblx0XHRHUkFNTUFSLkdSRUFURVJfVEhBTixcblx0XHRHUkFNTUFSLkxFU1NfRVFVQUwsXG5cdFx0R1JBTU1BUi5HUkVBVEVSX0VRVUFMXG5cdF07XG5cdHN0YXRpYyBFUVVBTElUWTogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5FUVVBTCxcblx0XHRHUkFNTUFSLk5PVF9FUVVBTFxuXHRdO1xuXHRzdGF0aWMgTE9HSUNBTDogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5BTkQsXG5cdFx0R1JBTU1BUi5PUlxuXHRdO1xuXHRzdGF0aWMgT1BFUkFUT1JTOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLkVYQ0xBTUFUSU9OX01BUkssXG5cdFx0R1JBTU1BUi5RVUVTVElPTl9NQVJLLFxuXHRcdEdSQU1NQVIuQVJST1csXG5cdFx0R1JBTU1BUi5ET1QsXG5cdFx0R1JBTU1BUi5BU1NJR04sXG5cdFx0R1JBTU1BUi5QTFVTLFxuXHRcdEdSQU1NQVIuTUlOVVMsXG5cdFx0R1JBTU1BUi5ESVZJREUsXG5cdFx0R1JBTU1BUi5NVUxUSVBMWSxcblx0XHRHUkFNTUFSLk1PRFVMVVMsXG5cdFx0R1JBTU1BUi5MRVNTX1RIQU4sXG5cdFx0R1JBTU1BUi5HUkVBVEVSX1RIQU4sXG5cdFx0R1JBTU1BUi5MRVNTX0VRVUFMLFxuXHRcdEdSQU1NQVIuR1JFQVRFUl9FUVVBTCxcblx0XHRHUkFNTUFSLkVRVUFMLFxuXHRcdEdSQU1NQVIuTk9UX0VRVUFMLFxuXHRcdEdSQU1NQVIuQU5ELFxuXHRcdEdSQU1NQVIuT1IsXG5cdF07XG5cdHN0YXRpYyBNQVRIX09QRVJBVE9SUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5QTFVTLFxuXHRcdEdSQU1NQVIuTUlOVVMsXG5cdFx0R1JBTU1BUi5ESVZJREUsXG5cdFx0R1JBTU1BUi5NVUxUSVBMWSxcblx0XHRHUkFNTUFSLk1PRFVMVVNcblx0XTtcblx0c3RhdGljIExPR0lDX09QRVJBVE9SUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5MRVNTX1RIQU4sXG5cdFx0R1JBTU1BUi5HUkVBVEVSX1RIQU4sXG5cdFx0R1JBTU1BUi5MRVNTX0VRVUFMLFxuXHRcdEdSQU1NQVIuR1JFQVRFUl9FUVVBTCxcblx0XHRHUkFNTUFSLkVRVUFMLFxuXHRcdEdSQU1NQVIuTk9UX0VRVUFMLFxuXHRcdEdSQU1NQVIuQU5ELFxuXHRcdEdSQU1NQVIuT1IsXG5cdF07XG5cdHN0YXRpYyBQVU5DVFVBVElPTlM6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfT1BFTixcblx0XHRHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX0NMT1NFLFxuXHRcdEdSQU1NQVIuQlJBQ0VfT1BFTixcblx0XHRHUkFNTUFSLkJSQUNFX0NMT1NFLFxuXHRcdEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTixcblx0XHRHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFLFxuXHRcdEdSQU1NQVIuU0VNSUNPTE9OLFxuXHRcdEdSQU1NQVIuQ09MT04sXG5cdFx0R1JBTU1BUi5DT01NQVxuXHRdO1xuXHRzdGF0aWMgRE9NX09QRVJBVE9SUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5BUlJPVyxcblx0XHRHUkFNTUFSLkRPVCxcblx0XHRHUkFNTUFSLkFTU0lHTixcblx0XHRHUkFNTUFSLkxFU1NfVEhBTixcblx0XHRHUkFNTUFSLkdSRUFURVJfVEhBTixcblx0XHRHUkFNTUFSLlhNTF9PUEVOX0NMT1NFX1RBRyxcblx0XHRHUkFNTUFSLlhNTF9DTE9TRV9UQUdcblx0XTtcblx0c3RhdGljIERPTV9QVU5DVFVBVElPTlM6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfT1BFTixcblx0XHRHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX0NMT1NFLFxuXHRcdEdSQU1NQVIuQlJBQ0VfT1BFTixcblx0XHRHUkFNTUFSLkJSQUNFX0NMT1NFLFxuXHRcdEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTixcblx0XHRHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFLFxuXHRcdEdSQU1NQVIuU0VNSUNPTE9OLFxuXHRcdEdSQU1NQVIuQ09MT04sXG5cdFx0R1JBTU1BUi5DT01NQVxuXHRdO1xufVxuXG5leHBvcnQgY2xhc3MgVFlQRV9FTlVNIHtcblx0c3RhdGljIE1JWEVEOiBzdHJpbmcgPSAnbWl4ZWQnO1xuXHRzdGF0aWMgVk9JRDogc3RyaW5nID0gJ3ZvaWQnO1xuXHRzdGF0aWMgTlVNQkVSOiBzdHJpbmcgPSAnbnVtYmVyJztcblx0c3RhdGljIFNUUklORzogc3RyaW5nID0gJ3N0cmluZyc7XG5cdHN0YXRpYyBCT09MRUFOOiBzdHJpbmcgPSAnYm9vbGVhbic7XG5cdHN0YXRpYyBBUlJBWTogc3RyaW5nID0gJ2FycmF5Jztcblx0c3RhdGljIE5VTEw6IHN0cmluZyA9ICdudWxsJztcbn1cblxuZXhwb3J0IGNsYXNzIFJ1bGVzIHtcblx0c3RhdGljIEtFWVdPUkRTOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoR1JBTU1BUi5LRVlXT1JEUyk7XG5cdHN0YXRpYyBPUEVSQVRPUlM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChHUkFNTUFSLk9QRVJBVE9SUyk7XG5cdHN0YXRpYyBQVU5DVFVBVElPTlM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChHUkFNTUFSLlBVTkNUVUFUSU9OUyk7XG5cdHN0YXRpYyBET01fT1BFUkFUT1JTOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoR1JBTU1BUi5ET01fT1BFUkFUT1JTKTtcblx0c3RhdGljIERPTV9QVU5DVFVBVElPTlM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChHUkFNTUFSLkRPTV9QVU5DVFVBVElPTlMpO1xuXHRzdGF0aWMgQ09NTUVOVF9MSU5FOiBzdHJpbmcgPSAnLy8nO1xuXG5cdGlzQWxwaGEoY2hhcjogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIC9bYS16X10vaS50ZXN0KGNoYXIpO1xuXHR9XG5cblx0aXNOdW1lcmljKGNoYXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAvWzAtOV0vLnRlc3QoY2hhcik7XG5cdH1cblxuXHRpc0FscGhhTnVtZXJpYyhjaGFyOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pc0FscGhhKGNoYXIpIHx8IHRoaXMuaXNOdW1lcmljKGNoYXIpO1xuXHR9XG5cblx0aXNXaGl0ZXNwYWNlKGNoYXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAvXFxzLy50ZXN0KGNoYXIpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUb2tlblR5cGUge1xuXHRzdGF0aWMgQ09NTUVOVDogc3RyaW5nID0gJ2NvbW1lbnQnO1xuXHRzdGF0aWMgQU5OT1RBVElPTjogc3RyaW5nID0gJ2Fubm90YXRpb24nO1xuXHRzdGF0aWMgSURFTlRJRklFUjogc3RyaW5nID0gJ2lkZW50aWZpZXInO1xuXHRzdGF0aWMgS0VZV09SRDogc3RyaW5nID0gJ2tleXdvcmQnO1xuXHRzdGF0aWMgUFVOQ1RVQVRJT046IHN0cmluZyA9ICdwdW5jdHVhdGlvbic7XG5cdHN0YXRpYyBOVU1CRVI6IHN0cmluZyA9ICdudW1iZXInO1xuXHRzdGF0aWMgU1RSSU5HOiBzdHJpbmcgPSAnc3RyaW5nJztcblx0c3RhdGljIEJPT0xFQU46IHN0cmluZyA9ICdib29sZWFuJztcblx0c3RhdGljIE9QRVJBVE9SOiBzdHJpbmcgPSAnb3BlcmF0b3InO1xuXHRzdGF0aWMgVEVYVDogc3RyaW5nID0gJ3RleHQnO1xuXHRzdGF0aWMgRU9GOiBzdHJpbmcgPSAnZW9mJztcbn1cblxuZXhwb3J0IGNsYXNzIFRva2VuIHtcblx0dHlwZTogc3RyaW5nO1xuXHR2YWx1ZTogc3RyaW5nO1xuXHRsaW5lOiBudW1iZXIgPSAxO1xuXHRjb2x1bW46IG51bWJlciA9IDE7XG5cdHN0YXJ0OiBudW1iZXI7XG5cdGVuZDogbnVtYmVyO1xuXHRzb3VyY2U6IFNvdXJjZTtcblxuXHRjb25zdHJ1Y3Rvcih0eXBlOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyLCBzb3VyY2U6IFNvdXJjZSkge1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMuc3RhcnQgPSBzdGFydDtcblx0XHR0aGlzLmVuZCA9IGVuZDtcblx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0fVxuXG5cdHdpdGhMaW5lQW5kQ29sdW1uKGxpbmU6IG51bWJlciwgY29sdW1uOiBudW1iZXIpOiBUb2tlbiB7XG5cdFx0dGhpcy5saW5lID0gbGluZTtcblx0XHR0aGlzLmNvbHVtbiA9IGNvbHVtbjtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0dSQU1NQVIsIFRZUEVfRU5VTX0gZnJvbSBcIi4vZ3JhbW1hclwiO1xuaW1wb3J0IHtNb2RpZmllcnMsIFN1cGVyQ2xhc3N9IGZyb20gXCIuL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7U291cmNlU3Bhbn0gZnJvbSBcIi4vcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuZXhwb3J0IGNsYXNzIEFTVE5vZGVUeXBlIHtcblx0c3RhdGljIFBST0dSQU1NID0gJ3Byb2dyYW0nO1xuXHRzdGF0aWMgSU5ERVggPSAnaW5kZXgnO1xuXHRzdGF0aWMgSURFTlRJRklFUiA9ICdpZGVudGlmaWVyJztcblx0c3RhdGljIEFOTk9UQVRJT04gPSAnYW5ub3RhdGlvbic7XG5cdHN0YXRpYyBQQVJBTUVURVIgPSAncGFyYW1ldGVyJztcblx0c3RhdGljIElNUE9SVCA9IEdSQU1NQVIuSU1QT1JUO1xuXHRzdGF0aWMgTlVNQkVSID0gVFlQRV9FTlVNLk5VTUJFUjtcblx0c3RhdGljIFNUUklORyA9IFRZUEVfRU5VTS5TVFJJTkc7XG5cdHN0YXRpYyBCT09MRUFOID0gVFlQRV9FTlVNLkJPT0xFQU47XG5cdHN0YXRpYyBOVUxMID0gVFlQRV9FTlVNLk5VTEw7XG5cdHN0YXRpYyBORVcgPSBHUkFNTUFSLk5FVztcblx0c3RhdGljIENMQVNTID0gR1JBTU1BUi5DTEFTUztcblx0c3RhdGljIElOVEVSRkFDRSA9IEdSQU1NQVIuSU5URVJGQUNFO1xuXHRzdGF0aWMgQ09OU1RSVUNUT1IgPSBHUkFNTUFSLkNPTlNUUlVDVE9SO1xuXHRzdGF0aWMgVEhJUyA9IEdSQU1NQVIuVEhJUztcblx0c3RhdGljIFJFVFVSTiA9IEdSQU1NQVIuUkVUVVJOO1xuXHRzdGF0aWMgVkRPTSA9ICd2ZG9tX2RlY2xhcmF0aW9uJztcblx0c3RhdGljIFZET01fVEVYVCA9ICd2ZG9tX3RleHRfZGVjbGFyYXRpb24nO1xuXHRzdGF0aWMgVU5BUlkgPSAndW5hcnlfZXhwcmVzc2lvbic7XG5cdHN0YXRpYyBMQU1CREEgPSAnbGFtYmRhX2V4cHJlc3Npb24nO1xuXHRzdGF0aWMgQVJSQVkgPSAnYXJyYXlfZGVjbGFyYXRpb24nO1xuXHRzdGF0aWMgVFlQRSA9ICd0eXBlX2RlY2xhcmF0aW9uJztcblx0c3RhdGljIEZJRUxEID0gJ2ZpZWxkX2RlY2xhcmF0aW9uJztcblx0c3RhdGljIE1FTUJFUiA9ICdtZW1iZXJfZXhwcmVzc2lvbic7XG5cdHN0YXRpYyBNRVRIT0QgPSAnbWV0aG9kX2RlY2xhcmF0aW9uJztcblx0c3RhdGljIENBTEwgPSAnY2FsbF9leHByZXNzaW9uJztcblx0c3RhdGljIFZBUklBQkxFID0gJ3ZhcmlhYmxlX2RlY2xhcmF0aW9uJztcblx0c3RhdGljIEVYUFJFU1NJT04gPSAnZXhwcmVzc2lvbl9zdGF0ZW1lbnQnO1xuXHRzdGF0aWMgQklOQVJZID0gJ2JpbmFyeV9leHByZXNzaW9uJztcblx0c3RhdGljIEFTU0lHTk1FTlQgPSAnYXNzaWdubWVudF9leHByZXNzaW9uJztcblx0c3RhdGljIElGID0gJ2lmX3N0YXRlbWVudCc7XG5cdHN0YXRpYyBUSEVOID0gJ3RoZW5fc3RhdGVtZW50Jztcblx0c3RhdGljIEVMU0UgPSAnZWxzZV9zdGF0ZW1lbnQnO1xuXHRzdGF0aWMgTUFUQ0ggPSAnbWF0Y2hfc3RhdGVtZW50Jztcblx0c3RhdGljIE1BVENIX0NBU0UgPSAnbWF0Y2hfY2FzZV9zdGF0ZW1lbnQnO1xuXHRzdGF0aWMgRk9SRUFDSCA9ICdmb3JlYWNoX3N0YXRlbWVudCc7XG59XG5cbmV4cG9ydCBjbGFzcyBBU1ROb2RlIHtcblx0aXNFeHByZXNzaW9uOiBib29sZWFuID0gZmFsc2U7XG5cdG5hbWU6IHN0cmluZyA9ICcnO1xuXG5cdHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbDtcblx0dHlwZTogc3RyaW5nO1xuXHR2YWx1ZTogYW55IHwgbnVsbCA9IG51bGw7XG5cdGNoaWxkcmVuOiBBU1ROb2RlW107XG5cblx0Y29uc3RydWN0b3IodHlwZTogc3RyaW5nLCBjaGlsZHJlbjogQVNUTm9kZVtdID0gW10pIHtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUQ2FsbE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0Y2FsbGVlOiBBU1ROb2RlO1xuXHRhcmd1bWVudHM6IEFTVE5vZGVbXTtcblxuXHRjb25zdHJ1Y3RvcihjYWxsZWU6IEFTVE5vZGUsIGFyZ3M6IEFTVE5vZGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuQ0FMTCk7XG5cblx0XHR0aGlzLmNhbGxlZSA9IGNhbGxlZTtcblx0XHR0aGlzLmFyZ3VtZW50cyA9IGFyZ3M7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1ROZXdOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGFyZ3VtZW50czogQVNUTm9kZVtdO1xuXHR0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGU7XG5cblx0Y29uc3RydWN0b3IoYXJnczogQVNUTm9kZVtdLCB0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGUpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5ORVcpO1xuXG5cdFx0dGhpcy5hcmd1bWVudHMgPSBhcmdzO1xuXHRcdHRoaXMudHlwZUFubm90YXRpb24gPSB0eXBlQW5ub3RhdGlvbjtcblx0XHR0aGlzLm5hbWUgPSB0eXBlQW5ub3RhdGlvbi5uYW1lO1xuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUQmluYXJ5Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRsZWZ0OiBBU1ROb2RlO1xuXHRyaWdodDogQVNUTm9kZTtcblx0b3BlcmF0b3I6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihsZWZ0OiBBU1ROb2RlLCByaWdodDogQVNUTm9kZSwgb3BlcmF0b3I6IHN0cmluZykge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkJJTkFSWSk7XG5cblx0XHR0aGlzLmxlZnQgPSBsZWZ0O1xuXHRcdHRoaXMucmlnaHQgPSByaWdodDtcblx0XHR0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RBc3NpZ25tZW50Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRsZWZ0OiBBU1ROb2RlO1xuXHRyaWdodDogQVNUTm9kZTtcblxuXHRjb25zdHJ1Y3RvcihsZWZ0OiBBU1ROb2RlLCByaWdodDogQVNUTm9kZSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkFTU0lHTk1FTlQpO1xuXG5cdFx0dGhpcy5sZWZ0ID0gbGVmdDtcblx0XHR0aGlzLnJpZ2h0ID0gcmlnaHQ7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RNZW1iZXJOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdG9iamVjdDogQVNUTm9kZTtcblx0cHJvcGVydHk6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihvYmplY3Q6IEFTVE5vZGUsIHByb3BlcnR5OiBzdHJpbmcpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5NRU1CRVIpO1xuXG5cdFx0dGhpcy5vYmplY3QgPSBvYmplY3Q7XG5cdFx0dGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUVW5hcnlOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdG9wZXJhdG9yOiBzdHJpbmc7XG5cdGFyZ3VtZW50OiBBU1ROb2RlIHwgQVNUVW5hcnlOb2RlO1xuXG5cdGNvbnN0cnVjdG9yKG9wZXJhdG9yOiBzdHJpbmcsIGFyZ3VtZW50OiBBU1ROb2RlIHwgQVNUVW5hcnlOb2RlKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuVU5BUlkpO1xuXG5cdFx0dGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuXHRcdHRoaXMuYXJndW1lbnQgPSBhcmd1bWVudDtcblx0XHR0aGlzLmlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEluZGV4Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRvYmplY3Q6IEFTVE5vZGU7XG5cdGluZGV4OiBBU1ROb2RlO1xuXG5cdGNvbnN0cnVjdG9yKG9iamVjdDogQVNUTm9kZSwgaW5kZXg6IEFTVE5vZGUpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5JTkRFWCk7XG5cblx0XHR0aGlzLm9iamVjdCA9IG9iamVjdDtcblx0XHR0aGlzLmluZGV4ID0gaW5kZXg7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RBcnJheU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0ZWxlbWVudHM6IEFTVE5vZGVbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkFSUkFZKTtcblxuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUTGFtYmRhTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW107XG5cdHJldHVyblR5cGU6IEFTVFR5cGVOb2RlO1xuXG5cdGNvbnN0cnVjdG9yKHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSwgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGUsIGNoaWxkcmVuOiBBU1ROb2RlW10pIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5MQU1CREEsIGNoaWxkcmVuKTtcblxuXHRcdHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG5cdFx0dGhpcy5yZXR1cm5UeXBlID0gcmV0dXJuVHlwZTtcblxuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNURmllbGROb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdG1vZGlmaWVyczogTW9kaWZpZXJzO1xuXHRmaWVsZFR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbDtcblx0aW5pdDogQVNUTm9kZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbW9kaWZpZXJzOiBNb2RpZmllcnMsIGZpZWxkVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsLCBpbml0OiBBU1ROb2RlIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5GSUVMRCk7XG5cblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuXHRcdHRoaXMuZmllbGRUeXBlID0gZmllbGRUeXBlO1xuXHRcdHRoaXMuaW5pdCA9IGluaXQ7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFZhcmlhYmxlTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHR0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGUgfCBudWxsID0gbnVsbDtcblx0aW5pdDogQVNUTm9kZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZUFubm90YXRpb246IEFTVFR5cGVOb2RlIHwgbnVsbCA9IG51bGwsIGluaXQ6IEFTVE5vZGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLlZBUklBQkxFKTtcblxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy50eXBlQW5ub3RhdGlvbiA9IHR5cGVBbm5vdGF0aW9uO1xuXHRcdHRoaXMuaW5pdCA9IGluaXQ7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGV4cHI6IEFTVE5vZGU7XG5cblx0Y29uc3RydWN0b3IoZXhwcjogQVNUTm9kZSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkVYUFJFU1NJT04pO1xuXG5cdFx0dGhpcy5leHByID0gZXhwcjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUUmV0dXJuTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRhcmd1bWVudDogQVNUTm9kZSB8IEFTVEV4cHJlc3Npb25Ob2RlIHwgbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihhcmd1bWVudDogQVNUTm9kZSB8IEFTVEV4cHJlc3Npb25Ob2RlIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5SRVRVUk4pO1xuXG5cdFx0dGhpcy5hcmd1bWVudCA9IGFyZ3VtZW50O1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RDbGFzc05vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0YW5ub3RhdGlvbnM6IEFTVEFubm90YXRpb25Ob2RlW107XG5cdG1vZGlmaWVyczogTW9kaWZpZXJzO1xuXHR0eXBlUGFyYW1ldGVyczogc3RyaW5nW107XG5cdHN1cGVyQ2xhc3M6IFN1cGVyQ2xhc3MgfCBudWxsO1xuXHRpbXBsZW1lbnRzSW50ZXJmYWNlczogQVNUVHlwZU5vZGVbXTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0YW5ub3RhdGlvbnM6IEFTVEFubm90YXRpb25Ob2RlW10sXG5cdFx0bW9kaWZpZXJzOiBNb2RpZmllcnMsXG5cdFx0dHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdLFxuXHRcdGltcGxlbWVudHNJbnRlcmZhY2VzOiBBU1RUeXBlTm9kZVtdLFxuXHRcdHN1cGVyQ2xhc3M6IFN1cGVyQ2xhc3MgfCBudWxsID0gbnVsbCxcblx0XHRjaGlsZHJlbjogQVNUTm9kZVtdID0gW11cblx0KSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuQ0xBU1MsIGNoaWxkcmVuKTtcblxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5hbm5vdGF0aW9ucyA9IGFubm90YXRpb25zO1xuXHRcdHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuXHRcdHRoaXMudHlwZVBhcmFtZXRlcnMgPSB0eXBlUGFyYW1ldGVycztcblx0XHR0aGlzLnN1cGVyQ2xhc3MgPSBzdXBlckNsYXNzO1xuXHRcdHRoaXMuaW1wbGVtZW50c0ludGVyZmFjZXMgPSBpbXBsZW1lbnRzSW50ZXJmYWNlcztcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUSW50ZXJmYWNlTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRhbm5vdGF0aW9uczogQVNUQW5ub3RhdGlvbk5vZGVbXTtcblx0bW9kaWZpZXJzOiBNb2RpZmllcnM7XG5cdHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXTtcblx0ZXh0ZW5kc0ludGVyZmFjZXM6IHN0cmluZ1tdO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdG5hbWU6IHN0cmluZyxcblx0XHRhbm5vdGF0aW9uczogQVNUQW5ub3RhdGlvbk5vZGVbXSxcblx0XHRtb2RpZmllcnM6IE1vZGlmaWVycyxcblx0XHR0eXBlUGFyYW1ldGVyczogc3RyaW5nW10sXG5cdFx0ZXh0ZW5kc0ludGVyZmFjZXM6IHN0cmluZ1tdLFxuXHRcdGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXVxuXHQpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5JTlRFUkZBQ0UsIGNoaWxkcmVuKTtcblxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5hbm5vdGF0aW9ucyA9IGFubm90YXRpb25zO1xuXHRcdHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuXHRcdHRoaXMudHlwZVBhcmFtZXRlcnMgPSB0eXBlUGFyYW1ldGVycztcblx0XHR0aGlzLmV4dGVuZHNJbnRlcmZhY2VzID0gZXh0ZW5kc0ludGVyZmFjZXM7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEFubm90YXRpb25Ob2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdHByb3BlcnRpZXM6IE1hcDxzdHJpbmcsIEFTVE5vZGU+ID0gbmV3IE1hcCgpO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkFOTk9UQVRJT04pO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFBhcmFtZXRlck5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0dHlwZUFubm90YXRpb246IEFTVFR5cGVOb2RlIHwgbnVsbDtcblx0ZGVmYXVsdFZhbHVlOiBBU1ROb2RlIHwgbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGVBbm5vdGF0aW9uOiBBU1RUeXBlTm9kZSB8IG51bGwsIGRlZmF1bHRWYWx1ZTogQVNUTm9kZSB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuUEFSQU1FVEVSKTtcblx0XHR0aGlzLnR5cGVBbm5vdGF0aW9uID0gdHlwZUFubm90YXRpb247XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmRlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUTWV0aG9kTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRhbm5vdGF0aW9uczogQVNUQW5ub3RhdGlvbk5vZGVbXTtcblx0bW9kaWZpZXJzOiBNb2RpZmllcnM7XG5cdHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXTtcblx0cGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdO1xuXHRyZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGw7XG5cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0dHlwZTogc3RyaW5nLFxuXHRcdGFubm90YXRpb25zOiBBU1RBbm5vdGF0aW9uTm9kZVtdLFxuXHRcdG1vZGlmaWVyczogTW9kaWZpZXJzLFxuXHRcdHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXSxcblx0XHRwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sXG5cdFx0cmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsID0gbnVsbCxcblx0XHRjaGlsZHJlbjogQVNUTm9kZVtdID0gW10sXG5cdCkge1xuXHRcdHN1cGVyKHR5cGUsIGNoaWxkcmVuKTtcblxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5hbm5vdGF0aW9ucyA9IGFubm90YXRpb25zO1xuXHRcdHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuXHRcdHRoaXMudHlwZVBhcmFtZXRlcnMgPSB0eXBlUGFyYW1ldGVycztcblx0XHR0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuXHRcdHRoaXMucmV0dXJuVHlwZSA9IHJldHVyblR5cGU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEltcG9ydE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0bmFtZXM6IHN0cmluZ1tdO1xuXHRmcm9tOiBzdHJpbmcgfCBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWVzOiBzdHJpbmdbXSwgZnJvbTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5JTVBPUlQpO1xuXG5cdFx0dGhpcy5uYW1lcyA9IG5hbWVzO1xuXHRcdHRoaXMuZnJvbSA9IGZyb207XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFRoZW5Ob2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGNvbnN0cnVjdG9yKGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLlRIRU4sIGNoaWxkcmVuKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUSWZOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGNvbmRpdGlvbjogQVNUTm9kZTtcblx0dGhlbjogQVNUVGhlbk5vZGU7XG5cdGVsc2U6IEFTVElmTm9kZSB8IEFTVEVsc2VOb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IoY29uZGl0aW9uOiBBU1ROb2RlLCB0aGVuOiBBU1RUaGVuTm9kZSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLklGKTtcblxuXHRcdHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuXHRcdHRoaXMudGhlbiA9IHRoZW47XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEVsc2VOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGNvbnN0cnVjdG9yKGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkVMU0UsIGNoaWxkcmVuKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUTWF0Y2hOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGV4cHJlc3Npb246IEFTVE5vZGU7XG5cdGNhc2VzOiBBU1RNYXRjaENhc2VOb2RlW107XG5cdGRlZmF1bHRDYXNlOiBBU1RNYXRjaENhc2VOb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IoZXhwcmVzc2lvbjogQVNUTm9kZSwgY2FzZXM6IEFTVE1hdGNoQ2FzZU5vZGVbXSwgZGVmYXVsdENhc2U6IEFTVE1hdGNoQ2FzZU5vZGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLk1BVENIKTtcblxuXHRcdHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG5cdFx0dGhpcy5jYXNlcyA9IGNhc2VzO1xuXHRcdHRoaXMuZGVmYXVsdENhc2UgPSBkZWZhdWx0Q2FzZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUTWF0Y2hDYXNlTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHR0ZXN0OiBBU1ROb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IoY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuTUFUQ0hfQ0FTRSwgY2hpbGRyZW4pO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RGb3JlYWNoTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRpdGVyYXRvcjogc3RyaW5nO1xuXHRpdGVyYWJsZTogQVNUTm9kZTtcblx0Ym9keTogQVNUTm9kZVtdO1xuXG5cdGNvbnN0cnVjdG9yKGl0ZXJhdG9yOiBzdHJpbmcsIGl0ZXJhYmxlOiBBU1ROb2RlLCBib2R5OiBBU1ROb2RlW10gPSBbXSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkZPUkVBQ0gpO1xuXG5cdFx0dGhpcy5pdGVyYXRvciA9IGl0ZXJhdG9yO1xuXHRcdHRoaXMuaXRlcmFibGUgPSBpdGVyYWJsZTtcblx0XHR0aGlzLmJvZHkgPSBib2R5O1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RUeXBlTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRzdGF0aWMgS0lORF9TSU1QTEUgPSAnc2ltcGxlJztcblx0c3RhdGljIEtJTkRfR0VORVJJQyA9ICdnZW5lcmljJztcblx0c3RhdGljIEtJTkRfTEFNQkRBID0gJ2xhbWJkYSc7XG5cblx0a2luZDogc3RyaW5nO1xuXHR0eXBlQXJndW1lbnRzOiBBU1RUeXBlTm9kZVtdID0gW107XG5cdHBhcmFtZXRlclR5cGVzOiBBU1RUeXBlTm9kZVtdID0gW107XG5cdHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbCA9IG51bGw7XG5cdG51bGxhYmxlOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKGtpbmQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBudWxsYWJsZTogYm9vbGVhbiA9IGZhbHNlKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuVFlQRSk7XG5cblx0XHR0aGlzLmtpbmQgPSBraW5kO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5udWxsYWJsZSA9IG51bGxhYmxlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RWRG9tTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRyZWFkb25seSB0YWc6IHN0cmluZztcblx0cmVhZG9ubHkgcHJvcHM6IE1hcDxzdHJpbmcsIEFTVE5vZGU+ID0gbmV3IE1hcCgpO1xuXG5cdGNvbnN0cnVjdG9yKHRhZzogc3RyaW5nLCBwcm9wczogTWFwPHN0cmluZywgQVNUTm9kZT4sIGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLlZET00sIGNoaWxkcmVuKTtcblx0XHR0aGlzLnRhZyA9IHRhZztcblx0XHR0aGlzLnByb3BzID0gcHJvcHM7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFZEb21UZXh0Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuVkRPTV9URVhUKTtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtHUkFNTUFSLCBSdWxlcywgVG9rZW4sIFRva2VuVHlwZX0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcbmltcG9ydCB7dGhyb3dUb2tlbkVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQgdHlwZSB7U291cmNlfSBmcm9tIFwiLi4vcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuZXhwb3J0IGNsYXNzIFRva2VuaXplciB7XG5cdHByaXZhdGUgcmVhZG9ubHkgcnVsZXMgPSBuZXcgUnVsZXMoKTtcblx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2U6IFNvdXJjZTtcblxuXHRjb25zdHJ1Y3Rvcihzb3VyY2U6IFNvdXJjZSkge1xuXHRcdHRoaXMuc291cmNlID0gc291cmNlO1xuXHR9XG5cblx0Z2V0VG9rZW5TdHJlYW0oKTogVG9rZW5TdHJlYW0ge1xuXHRcdHJldHVybiBuZXcgVG9rZW5TdHJlYW0odGhpcy50b2tlbml6ZSgpKTtcblx0fVxuXG5cdHRva2VuaXplKCk6IFRva2VuW10ge1xuXHRcdGNvbnN0IHRva2VuczogVG9rZW5bXSA9IFtdO1xuXG5cdFx0bGV0IGk6IG51bWJlciA9IDA7XG5cdFx0bGV0IGxpbmU6IG51bWJlciA9IDE7XG5cdFx0bGV0IGNvbHVtbjogbnVtYmVyID0gMDtcblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdMaW5lQ29tbWVudCA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IGxpbmVDb21tZW50OiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoTGluZUNvbW1lbnRBdChpKTtcblx0XHRcdGlmIChsaW5lQ29tbWVudCkge1xuXHRcdFx0XHR0b2tlbnMucHVzaChsaW5lQ29tbWVudC53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IGxpbmVDb21tZW50LmVuZCArIDE7XG5cblx0XHRcdFx0bGluZSsrO1xuXHRcdFx0XHRjb2x1bW4gPSAwO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nU3RyaW5nID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3Qgc3RyaW5nOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoU3RyaW5nQXQoaSk7XG5cdFx0XHRpZiAoc3RyaW5nKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKHN0cmluZy53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IHN0cmluZy5lbmQgKyAxO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KHN0cmluZyk7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdQdW5jdHVhdGlvbiA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IHB1bmN0dWF0aW9uOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoUHVuY3R1YXRpb25BdChpKTtcblx0XHRcdGlmIChwdW5jdHVhdGlvbikge1xuXHRcdFx0XHR0b2tlbnMucHVzaChwdW5jdHVhdGlvbi53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IHB1bmN0dWF0aW9uLmVuZCArIDE7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQocHVuY3R1YXRpb24pO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nSWRlbnRpZmllciA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IGlkZW50aWZpZXI6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hJZGVudGlmaWVyQXQoaSk7XG5cdFx0XHRpZiAoaWRlbnRpZmllcikge1xuXHRcdFx0XHR0b2tlbnMucHVzaChpZGVudGlmaWVyLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gaWRlbnRpZmllci5lbmQ7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQoaWRlbnRpZmllcik7XG5cblx0XHRcdFx0aWYgKGlkZW50aWZpZXIudmFsdWUgPT09IEdSQU1NQVIuVkRPTSkge1xuXHRcdFx0XHRcdGNvbnN0IHRva2VuaXplZFZEb20gPSB0aGlzLnRva2VuaXplVkRvbShpLCBsaW5lLCBjb2x1bW4pO1xuXHRcdFx0XHRcdHRva2Vucy5wdXNoKC4uLnRva2VuaXplZFZEb20udG9rZW5zKTtcblx0XHRcdFx0XHRpID0gdG9rZW5pemVkVkRvbS5uZXdJbmRleDtcblx0XHRcdFx0XHRsaW5lID0gdG9rZW5pemVkVkRvbS5saW5lO1xuXHRcdFx0XHRcdGNvbHVtbiA9IHRva2VuaXplZFZEb20uY29sdW1uO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdOdW1iZXIgPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBudW1iZXI6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hOdW1iZXJBdChpKTtcblx0XHRcdGlmIChudW1iZXIpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2gobnVtYmVyLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gbnVtYmVyLmVuZDtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChudW1iZXIpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nT3BlcmF0b3IgPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBvcGVyYXRvcjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaE9wZXJhdG9yQXQoaSk7XG5cdFx0XHRpZiAob3BlcmF0b3IpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2gob3BlcmF0b3Iud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBvcGVyYXRvci5lbmQgKyAxO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KG9wZXJhdG9yKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ0Fubm90YXRpb24gPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBhbm5vdGF0aW9uOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoQW5ub3RhdGlvbkF0KGkpO1xuXHRcdFx0aWYgKGFubm90YXRpb24pIHtcblx0XHRcdFx0dG9rZW5zLnB1c2goYW5ub3RhdGlvbi53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IGFubm90YXRpb24uZW5kICsgMTtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChhbm5vdGF0aW9uKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR3aGlsZSAoaSA8IHRoaXMuc291cmNlLmxlbmd0aCkge1xuXHRcdFx0aWYgKHRoaXMuc291cmNlLmNoYXJBdChpKSA9PT0gJ1xcbicpIHtcblx0XHRcdFx0bGluZSsrO1xuXHRcdFx0XHRjb2x1bW4gPSAwO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29sdW1uKys7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLm1hdGNoV2hpdGVzcGFjZUF0KGkpKSB7XG5cdFx0XHRcdGkrKztcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpZklzQ29uc3VtaW5nTGluZUNvbW1lbnQoKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nUHVuY3R1YXRpb24oKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nU3RyaW5nKClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ051bWJlcigpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdJZGVudGlmaWVyKClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ09wZXJhdG9yKClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ0Fubm90YXRpb24oKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0dGhyb3dUb2tlbkVycm9yKCdVbmV4cGVjdGVkIGNoYXJhY3RlcjogJyArIHRoaXMuc291cmNlLmNoYXJBdChpKSk7XG5cdFx0fVxuXG5cdFx0dG9rZW5zLnB1c2goXG5cdFx0XHR0aGlzLmVvZihpKVxuXHRcdFx0ICAgIC53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pXG5cdFx0KTtcblxuXHRcdHJldHVybiB0b2tlbnM7XG5cdH1cblxuXHRlb2YoZW5kOiBudW1iZXIpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuRU9GLCAnJywgZW5kLCBlbmQsIHRoaXMuc291cmNlKVxuXHR9XG5cblx0Y29sdW1PZmZzZXQodG9rZW46IFRva2VuKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdG9rZW4udmFsdWUubGVuZ3RoIC0gMTtcblx0fVxuXG5cdG1hdGNoV2hpdGVzcGFjZUF0KGk6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnJ1bGVzLmlzV2hpdGVzcGFjZSh0aGlzLnNvdXJjZS5jaGFyQXQoaSkpO1xuXHR9XG5cblx0bWF0Y2hOdW1iZXJBdChpOiBudW1iZXIpOiBUb2tlbiB8IG51bGwge1xuXHRcdGlmICghdGhpcy5ydWxlcy5pc051bWVyaWModGhpcy5zb3VyY2UuY2hhckF0KGkpKSkge1xuXHRcdFx0cmV0dXJuIG51bGxcblx0XHR9XG5cdFx0bGV0IHN0YXJ0ID0gaTtcblx0XHR3aGlsZSAodGhpcy5ydWxlcy5pc051bWVyaWModGhpcy5zb3VyY2UuY2hhckF0KGkpKSkgaSsrO1xuXHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLk5VTUJFUiwgdGhpcy5zb3VyY2Uuc2xpY2Uoc3RhcnQsIGkpLCBzdGFydCwgaSwgdGhpcy5zb3VyY2UpO1xuXHR9XG5cblx0bWF0Y2hTdHJpbmdBdChpOiBudW1iZXIpOiBUb2tlbiB8IG51bGwge1xuXHRcdGlmICh0aGlzLnNvdXJjZS5jaGFyQXQoaSkgIT09ICdcIicpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRsZXQgc3RhcnQgPSArK2k7XG5cdFx0d2hpbGUgKHRoaXMuc291cmNlLmNoYXJBdChpKSAhPT0gJ1wiJykgaSsrO1xuXHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLlNUUklORywgdGhpcy5zb3VyY2Uuc2xpY2Uoc3RhcnQsIGkpLCBzdGFydCwgaSwgdGhpcy5zb3VyY2UpO1xuXHR9XG5cblx0bWF0Y2hJZGVudGlmaWVyQXQoaTogbnVtYmVyKTogVG9rZW4gfCBudWxsIHtcblx0XHRpZiAoIXRoaXMucnVsZXMuaXNBbHBoYSh0aGlzLnNvdXJjZS5jaGFyQXQoaSkpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0bGV0IHN0YXJ0ID0gaTtcblx0XHRsZXQgaiA9IGk7XG5cdFx0d2hpbGUgKHRoaXMucnVsZXMuaXNBbHBoYU51bWVyaWModGhpcy5zb3VyY2UuY2hhckF0KGopKSkgaisrO1xuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5zb3VyY2Uuc2xpY2Uoc3RhcnQsIGopO1xuXG5cdFx0bGV0IHR5cGUgPSBUb2tlblR5cGUuSURFTlRJRklFUjtcblx0XHRpZiAoW0dSQU1NQVIuVFJVRSwgR1JBTU1BUi5GQUxTRV0uaW5jbHVkZXModmFsdWUpKSB7XG5cdFx0XHR0eXBlID0gVG9rZW5UeXBlLkJPT0xFQU47XG5cdFx0fSBlbHNlIGlmIChSdWxlcy5LRVlXT1JEUy5oYXModmFsdWUpKSB7XG5cdFx0XHR0eXBlID0gVG9rZW5UeXBlLktFWVdPUkQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBUb2tlbih0eXBlLCB2YWx1ZSwgc3RhcnQsIGosIHRoaXMuc291cmNlKTtcblx0fVxuXG5cdG1hdGNoT3BlcmF0b3JBdChpOiBudW1iZXIsIG9wZXJhdG9yczogU2V0PHN0cmluZz4gPSBSdWxlcy5PUEVSQVRPUlMpOiBUb2tlbiB8IG51bGwge1xuXHRcdGNvbnN0IGNoYXJzID0gdGhpcy5zb3VyY2UuY2hhckF0KGkpICsgdGhpcy5zb3VyY2UuY2hhckF0KGkgKyAxKTtcblx0XHRpZiAob3BlcmF0b3JzLmhhcyhjaGFycykpIHtcblx0XHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLk9QRVJBVE9SLCBjaGFycywgaSwgaSArIDEsIHRoaXMuc291cmNlKTtcblx0XHR9XG5cblx0XHRpZiAob3BlcmF0b3JzLmhhcyh0aGlzLnNvdXJjZS5jaGFyQXQoaSkpKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5PUEVSQVRPUiwgdGhpcy5zb3VyY2UuY2hhckF0KGkpLCBpLCBpLCB0aGlzLnNvdXJjZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRtYXRjaFB1bmN0dWF0aW9uQXQoaTogbnVtYmVyLCBwdW5jdHVhdGlvbnMgPSBSdWxlcy5QVU5DVFVBVElPTlMpOiBUb2tlbiB8IG51bGwge1xuXHRcdGNvbnN0IGNoYXJzID0gdGhpcy5zb3VyY2UuY2hhckF0KGkpICsgdGhpcy5zb3VyY2UuY2hhckF0KGkgKyAxKTtcblx0XHRpZiAocHVuY3R1YXRpb25zLmhhcyhjaGFycykpIHtcblx0XHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLlBVTkNUVUFUSU9OLCBjaGFycywgaSwgaSArIDEsIHRoaXMuc291cmNlKTtcblx0XHR9XG5cblx0XHRpZiAoIXB1bmN0dWF0aW9ucy5oYXModGhpcy5zb3VyY2UuY2hhckF0KGkpKSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLlBVTkNUVUFUSU9OLCB0aGlzLnNvdXJjZS5jaGFyQXQoaSksIGksIGksIHRoaXMuc291cmNlKTtcblx0fVxuXG5cdG1hdGNoTGluZUNvbW1lbnRBdChpOiBudW1iZXIpOiBUb2tlbiB8IG51bGwge1xuXHRcdGlmICghdGhpcy5zb3VyY2Uuc3RhcnRzV2l0aChSdWxlcy5DT01NRU5UX0xJTkUsIGkpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0bGV0IGogPSBpICsgUnVsZXMuQ09NTUVOVF9MSU5FLmxlbmd0aDtcblx0XHR3aGlsZSAoaiA8IHRoaXMuc291cmNlLmxlbmd0aCAmJiB0aGlzLnNvdXJjZS5jaGFyQXQoaikgIT09ICdcXG4nKSBqKys7XG5cdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuQ09NTUVOVCwgdGhpcy5zb3VyY2Uuc2xpY2UoaSwgaiksIGksIGosIHRoaXMuc291cmNlKTtcblx0fVxuXG5cdG1hdGNoQW5ub3RhdGlvbkF0KGk6IG51bWJlcik6IFRva2VuIHwgbnVsbCB7XG5cdFx0aWYgKHRoaXMuc291cmNlLmNoYXJBdChpKSAhPT0gJ0AnKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRsZXQgc3RhcnQgPSBpICsgMTtcblx0XHRsZXQgaiA9IGkgKyAxO1xuXHRcdHdoaWxlICh0aGlzLnJ1bGVzLmlzQWxwaGEodGhpcy5zb3VyY2UuY2hhckF0KGopKSkgaisrO1xuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5zb3VyY2Uuc2xpY2Uoc3RhcnQsIGopO1xuXG5cdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuQU5OT1RBVElPTiwgdmFsdWUsIHN0YXJ0LCBqLCB0aGlzLnNvdXJjZSk7XG5cdH1cblxuXHRwcml2YXRlIHRva2VuaXplVkRvbShzdGFydEluZGV4OiBudW1iZXIsIGxpbmU6IG51bWJlciwgY29sdW1uOiBudW1iZXIpOiB7XG5cdFx0dG9rZW5zOiBUb2tlbltdLFxuXHRcdG5ld0luZGV4OiBudW1iZXIsXG5cdFx0bGluZTogbnVtYmVyLFxuXHRcdGNvbHVtbjogbnVtYmVyXG5cdH0ge1xuXHRcdGNvbnN0IHRva2VuczogVG9rZW5bXSA9IFtdO1xuXHRcdGxldCBpOiBudW1iZXIgPSBzdGFydEluZGV4O1xuXHRcdGxldCB0ZXh0QnVmZmVyOiBzdHJpbmcgPSAnJztcblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdTdHJpbmcgPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBzdHJpbmc6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hTdHJpbmdBdChpKTtcblx0XHRcdGlmIChzdHJpbmcpIHtcblx0XHRcdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cdFx0XHRcdHRva2Vucy5wdXNoKHN0cmluZy53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IHN0cmluZy5lbmQgKyAxO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KHN0cmluZyk7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdQdW5jdHVhdGlvbiA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IHB1bmN0dWF0aW9uOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoUHVuY3R1YXRpb25BdChpLCBSdWxlcy5ET01fUFVOQ1RVQVRJT05TKTtcblx0XHRcdGlmIChwdW5jdHVhdGlvbikge1xuXHRcdFx0XHRmbHVzaFRleHRCdWZmZXIoKTtcblx0XHRcdFx0dG9rZW5zLnB1c2gocHVuY3R1YXRpb24ud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBwdW5jdHVhdGlvbi5lbmQgKyAxO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KHB1bmN0dWF0aW9uKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ0lkZW50aWZpZXIgPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBpZGVudGlmaWVyOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoSWRlbnRpZmllckF0KGkpO1xuXHRcdFx0aWYgKGlkZW50aWZpZXIpIHtcblx0XHRcdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cdFx0XHRcdHRva2Vucy5wdXNoKGlkZW50aWZpZXIud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBpZGVudGlmaWVyLmVuZDtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChpZGVudGlmaWVyKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ051bWJlciA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IG51bWJlcjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaE51bWJlckF0KGkpO1xuXHRcdFx0aWYgKG51bWJlcikge1xuXHRcdFx0XHRmbHVzaFRleHRCdWZmZXIoKTtcblxuXHRcdFx0XHR0b2tlbnMucHVzaChudW1iZXIud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBudW1iZXIuZW5kO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KG51bWJlcik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdPcGVyYXRvciA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IG9wZXJhdG9yOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoT3BlcmF0b3JBdChpLCBSdWxlcy5ET01fT1BFUkFUT1JTKTtcblx0XHRcdGlmIChvcGVyYXRvcikge1xuXHRcdFx0XHRmbHVzaFRleHRCdWZmZXIoKTtcblxuXHRcdFx0XHR0b2tlbnMucHVzaChvcGVyYXRvci53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IG9wZXJhdG9yLmVuZCArIDE7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQob3BlcmF0b3IpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBmbHVzaFRleHRCdWZmZXIgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRpZiAodGV4dEJ1ZmZlci5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKFxuXHRcdFx0XHRcdG5ldyBUb2tlbihcblx0XHRcdFx0XHRcdFRva2VuVHlwZS5URVhULFxuXHRcdFx0XHRcdFx0dGV4dEJ1ZmZlcixcblx0XHRcdFx0XHRcdGkgLSB0ZXh0QnVmZmVyLmxlbmd0aCxcblx0XHRcdFx0XHRcdGksXG5cdFx0XHRcdFx0XHR0aGlzLnNvdXJjZVxuXHRcdFx0XHRcdCkud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uIC0gdGV4dEJ1ZmZlci5sZW5ndGgpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHRleHRCdWZmZXIgPSAnJztcblx0XHRcdH1cblx0XHR9O1xuXG5cblx0XHRsZXQgaWdub3JlV2hpdGVzcGFjZSA9IGZhbHNlO1xuXHRcdHdoaWxlIChpIDwgdGhpcy5zb3VyY2UubGVuZ3RoKSB7XG5cdFx0XHRjb25zdCBjaGFyOiBzdHJpbmcgPSB0aGlzLnNvdXJjZS5jaGFyQXQoaSk7XG5cblx0XHRcdGlmIChjaGFyID09PSBHUkFNTUFSLlNFTUlDT0xPTikge1xuXHRcdFx0XHRmbHVzaFRleHRCdWZmZXIoKTtcblxuXHRcdFx0XHR0b2tlbnMucHVzaChuZXcgVG9rZW4oVG9rZW5UeXBlLlBVTkNUVUFUSU9OLCBjaGFyLCBpLCBpLCB0aGlzLnNvdXJjZSlcblx0XHRcdFx0XHQgICAgICAgICAgICAud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cblx0XHRcdFx0aSsrO1xuXHRcdFx0XHRjb2x1bW4rKztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9IGVsc2UgaWYgKGNoYXIgPT09IEdSQU1NQVIuQlJBQ0VfT1BFTikge1xuXHRcdFx0XHRpZ25vcmVXaGl0ZXNwYWNlID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSBpZiAoY2hhciA9PT0gR1JBTU1BUi5CUkFDRV9DTE9TRSkge1xuXHRcdFx0XHRpZ25vcmVXaGl0ZXNwYWNlID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpZ25vcmVXaGl0ZXNwYWNlKSB7XG5cdFx0XHRcdGlmICh0aGlzLm1hdGNoV2hpdGVzcGFjZUF0KGkpKSB7XG5cdFx0XHRcdFx0aSsrO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpZklzQ29uc3VtaW5nUHVuY3R1YXRpb24oKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nU3RyaW5nKClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ051bWJlcigpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdJZGVudGlmaWVyKClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ09wZXJhdG9yKClcblx0XHRcdCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0dGV4dEJ1ZmZlciArPSBjaGFyO1xuXG5cdFx0XHRpZiAoY2hhciA9PT0gJ1xcbicpIHtcblx0XHRcdFx0bGluZSsrO1xuXHRcdFx0XHRjb2x1bW4gPSAwO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29sdW1uKys7XG5cdFx0XHR9XG5cblx0XHRcdGkrKztcblx0XHR9XG5cblx0XHRmbHVzaFRleHRCdWZmZXIoKTtcblxuXHRcdHJldHVybiB7dG9rZW5zLCBuZXdJbmRleDogaSwgbGluZSwgY29sdW1ufTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVG9rZW5TdHJlYW0ge1xuXHR0b2tlbnM6IFRva2VuW107XG5cdGluZGV4OiBudW1iZXIgPSAwO1xuXG5cdGNvbnN0cnVjdG9yKHRva2VuczogVG9rZW5bXSkge1xuXHRcdHRoaXMudG9rZW5zID0gdG9rZW5zO1xuXHR9XG5cblx0cmV3aW5kKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmluZGV4ID4gMCkge1xuXHRcdFx0dGhpcy5pbmRleC0tO1xuXHRcdH1cblx0fVxuXG5cdHBlZWsoKTogVG9rZW4gfCBudWxsIHtcblx0XHRyZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5pbmRleF0gfHwgbnVsbDtcblx0fVxuXG5cdG5leHQoKTogVG9rZW4gfCBudWxsIHtcblx0XHRyZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5pbmRleCsrXSB8fCBudWxsO1xuXHR9XG5cblx0aGFzTmV4dCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aDtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge1Rva2VuaXplcn0gZnJvbSBcIi4uL3Rva2VuaXplci90b2tlbml6ZXJcIjtcbmltcG9ydCB7dGhyb3dEZXBlbmRlbmN5RXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcbmltcG9ydCB0eXBlIHtUb2tlbn0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcblxuZXhwb3J0IGNsYXNzIFNvdXJjZSB7XG5cdHN0YXRpYyBORVdMSU5FID0gJ1xcbic7XG5cdHB1YmxpYyByZWFkb25seSB1cmw6IHN0cmluZztcblx0cHJpdmF0ZSBjb2RlOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoY29kZTogc3RyaW5nLCB1cmw6IHN0cmluZyA9ICc8aW5saW5lPicpIHtcblx0XHR0aGlzLnVybCA9IHVybDtcblx0XHR0aGlzLmNvZGUgPSBjb2RlO1xuXHR9XG5cblx0Z2V0IGxlbmd0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmNvZGUubGVuZ3RoO1xuXHR9XG5cblx0Z2V0VG9rZW5pemVyKCk6IFRva2VuaXplciB7XG5cdFx0cmV0dXJuIG5ldyBUb2tlbml6ZXIodGhpcyk7XG5cdH1cblxuXHRzbGljZShzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcik6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuY29kZS5zbGljZShzdGFydCwgZW5kKTtcblx0fVxuXG5cdGNoYXJBdChpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5jb2RlLmNoYXJBdChpbmRleCk7XG5cdH1cblxuXHRzdGFydHNXaXRoKHRleHQ6IHN0cmluZywgcG9zaXRpb24/OiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb2RlLnN0YXJ0c1dpdGgodGV4dCwgcG9zaXRpb24pO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTb3VyY2VTcGFuIHtcblx0c291cmNlOiBTb3VyY2U7XG5cdHN0YXJ0OiBudW1iZXI7XG5cdGVuZDogbnVtYmVyO1xuXHRsaW5lOiBudW1iZXI7XG5cdGNvbHVtbjogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKHNvdXJjZTogU291cmNlLCBzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcikge1xuXHRcdHRoaXMuc291cmNlID0gc291cmNlO1xuXHRcdHRoaXMuc3RhcnQgPSBzdGFydDtcblx0XHR0aGlzLmVuZCA9IGVuZDtcblxuXHRcdGNvbnN0IGJlZm9yZSA9IHNvdXJjZS5zbGljZSgwLCBzdGFydCk7XG5cdFx0Y29uc3QgbGluZXMgPSBiZWZvcmUuc3BsaXQoU291cmNlLk5FV0xJTkUpO1xuXG5cdFx0dGhpcy5saW5lID0gbGluZXMubGVuZ3RoO1xuXHRcdHRoaXMuY29sdW1uID0gKGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdIHx8ICcnKS5sZW5ndGggKyAxO1xuXHR9XG5cblx0dGV4dCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZS5zbGljZSh0aGlzLnN0YXJ0LCB0aGlzLmVuZCk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwYW5Gcm9tKHN0YXJ0VG9rZW46IFRva2VuLCBlbmRUb2tlbjogVG9rZW4pOiBTb3VyY2VTcGFuIHtcblx0cmV0dXJuIG5ldyBTb3VyY2VTcGFuKHN0YXJ0VG9rZW4uc291cmNlLCBzdGFydFRva2VuLnN0YXJ0LCBlbmRUb2tlbi5lbmQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hTb3VyY2UodXJsOiBzdHJpbmcpOiBQcm9taXNlPFNvdXJjZT4ge1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG5cdGlmICghcmVzcG9uc2Uub2spIHtcblx0XHR0aHJvd0RlcGVuZGVuY3lFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3VybH1gKTtcblx0fVxuXG5cdHJldHVybiBuZXcgU291cmNlKGF3YWl0IHJlc3BvbnNlLnRleHQoKSwgdXJsKTtcbn1cbiIsCiAgICAiaW1wb3J0IHtTb3VyY2UsIFNvdXJjZVNwYW59IGZyb20gXCIuL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmNsYXNzIEVycm9yVHlwZXMge1xuXHRzdGF0aWMgVFlQRV9FUlJPUjogc3RyaW5nID0gJ1R5cGVFcnJvcic7XG5cdHN0YXRpYyBUT0tFTl9FUlJPUjogc3RyaW5nID0gJ1Rva2VuRXJyb3InO1xuXHRzdGF0aWMgUEFSU0VSX0VSUk9SOiBzdHJpbmcgPSAnUGFyc2VyRXJyb3InO1xuXHRzdGF0aWMgUlVOVElNRV9FUlJPUjogc3RyaW5nID0gJ1J1bnRpbWVFcnJvcic7XG5cdHN0YXRpYyBJTlRFUk5BTF9FUlJPUjogc3RyaW5nID0gJ0ludGVybmFsRXJyb3InO1xuXHRzdGF0aWMgTkFUSVZFX0VSUk9SOiBzdHJpbmcgPSAnTmF0aXZlRXJyb3InO1xuXHRzdGF0aWMgREVQRU5ERU5DWV9FUlJPUjogc3RyaW5nID0gJ0RlcGVuZGVuY3lFcnJvcic7XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cdGtpbmQ6IHN0cmluZztcblx0c3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsO1xuXHRvdmVycmlkZSBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0a2luZDogc3RyaW5nLFxuXHRcdG1lc3NhZ2U6IHN0cmluZyxcblx0XHRzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsXG5cdFx0Y2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsXG5cdCkge1xuXHRcdHN1cGVyKG1lc3NhZ2UpO1xuXHRcdHRoaXMua2luZCA9IGtpbmQ7XG5cdFx0dGhpcy5zcGFuID0gc3Bhbjtcblx0XHR0aGlzLmNhdXNlID0gY2F1c2U7XG5cdH1cblxuXHRmb3JtYXQoKTogc3RyaW5nIHtcblx0XHRpZiAodGhpcy5zcGFuKSB7XG5cblx0XHRcdHJldHVybiBgXG5bJHt0aGlzLmtpbmR9XSAke3RoaXMubWVzc2FnZX1cbiAgYXQgJHt0aGlzLnNwYW4uc291cmNlLnVybH06JHt0aGlzLnNwYW4ubGluZX06JHt0aGlzLnNwYW4uY29sdW1ufVxuXG4ke3RoaXMuc3Bhbi50ZXh0KCl9XG4ke1wiIFwiLnJlcGVhdCh0aGlzLnNwYW4uY29sdW1uKX0ke1wiXlwiLnJlcGVhdCh0aGlzLnNwYW4uZW5kIC0gdGhpcy5zcGFuLnN0YXJ0KX1cbmA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGBbJHt0aGlzLmtpbmR9XSAke3RoaXMubWVzc2FnZX1gO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhVG9rZW5FcnJvciBleHRlbmRzIEx5cmFFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihcblx0XHRcdEVycm9yVHlwZXMuVE9LRU5fRVJST1IsXG5cdFx0XHRtZXNzYWdlLFxuXHRcdFx0c3Bhbixcblx0XHRcdGNhdXNlXG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYVR5cGVFcnJvciBleHRlbmRzIEx5cmFFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihcblx0XHRcdEVycm9yVHlwZXMuVFlQRV9FUlJPUixcblx0XHRcdG1lc3NhZ2UsXG5cdFx0XHRzcGFuLFxuXHRcdFx0Y2F1c2Vcblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhUGFyc2VyRXJyb3IgZXh0ZW5kcyBMeXJhRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRFcnJvclR5cGVzLlBBUlNFUl9FUlJPUixcblx0XHRcdG1lc3NhZ2UsXG5cdFx0XHRzcGFuLFxuXHRcdFx0Y2F1c2Vcblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhUnVudGltZUVycm9yIGV4dGVuZHMgTHlyYUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0RXJyb3JUeXBlcy5SVU5USU1FX0VSUk9SLFxuXHRcdFx0bWVzc2FnZSxcblx0XHRcdHNwYW4sXG5cdFx0XHRjYXVzZVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFOYXRpdmVFcnJvciBleHRlbmRzIEx5cmFFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihcblx0XHRcdEVycm9yVHlwZXMuTkFUSVZFX0VSUk9SLFxuXHRcdFx0bWVzc2FnZSxcblx0XHRcdHNwYW4sXG5cdFx0XHRjYXVzZVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFEZXBlbmRlbmN5RXJyb3IgZXh0ZW5kcyBMeXJhRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRFcnJvclR5cGVzLkRFUEVOREVOQ1lfRVJST1IsXG5cdFx0XHRtZXNzYWdlLFxuXHRcdFx0c3Bhbixcblx0XHRcdGNhdXNlXG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dUb2tlbkVycm9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBuZXZlciB7XG5cdHRocm93IG5ldyBMeXJhVG9rZW5FcnJvcihtZXNzYWdlLCBzcGFuLCBjYXVzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1R5cGVFcnJvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKTogbmV2ZXIge1xuXHR0aHJvdyBuZXcgTHlyYVR5cGVFcnJvcihtZXNzYWdlLCBzcGFuLCBjYXVzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1BhcnNlckVycm9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBuZXZlciB7XG5cdHRocm93IG5ldyBMeXJhUGFyc2VyRXJyb3IobWVzc2FnZSwgc3BhbiwgY2F1c2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dSdW50aW1lRXJyb3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IG5ldmVyIHtcblx0dGhyb3cgbmV3IEx5cmFSdW50aW1lRXJyb3IobWVzc2FnZSwgc3BhbiwgY2F1c2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dOYXRpdmVFcnJvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKTogbmV2ZXIge1xuXHR0aHJvdyBuZXcgTHlyYU5hdGl2ZUVycm9yKG1lc3NhZ2UsIHNwYW4sIGNhdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93RGVwZW5kZW5jeUVycm9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBuZXZlciB7XG5cdHRocm93IG5ldyBMeXJhRGVwZW5kZW5jeUVycm9yKG1lc3NhZ2UsIHNwYW4sIGNhdXNlKTtcbn1cblxuLyoqXG4gKiBAdGhyb3dzIHtFcnJvcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXBKc0Vycm9yKGVycm9yOiBFcnJvciwgc291cmNlOiBTb3VyY2UpOiBMeXJhRXJyb3Ige1xuXHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBMeXJhRXJyb3IpIHtcblx0XHRyZXR1cm4gZXJyb3I7XG5cdH1cblxuXHRyZXR1cm4gbmV3IEx5cmFFcnJvcihcblx0XHRFcnJvclR5cGVzLklOVEVSTkFMX0VSUk9SLFxuXHRcdGVycm9yLm1lc3NhZ2UgfHwgU3RyaW5nKGVycm9yKSxcblx0XHRuZXcgU291cmNlU3Bhbihzb3VyY2UsIDAsIHNvdXJjZS5sZW5ndGgpXG5cdCk7XG59XG4iLAogICAgImltcG9ydCB7QVNUQ2xhc3NOb2RlLCBBU1ROb2RlVHlwZX0gZnJvbSBcIi4uL2NvcmUvYXN0XCI7XG5pbXBvcnQge0NsYXNzRGVmaW5pdGlvbn0gZnJvbSBcIi4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtQYXJzZXJ9IGZyb20gXCIuLi9jb3JlL3BhcnNlci9wYXJzZXJcIjtcbmltcG9ydCB7dGhyb3dSdW50aW1lRXJyb3J9IGZyb20gXCIuLi9jb3JlL2Vycm9yc1wiO1xuaW1wb3J0IHR5cGUge1NvdXJjZX0gZnJvbSBcIi4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuZXhwb3J0IGNsYXNzIE5hdGl2ZUNsYXNzIHtcblx0bmFtZTogc3RyaW5nO1xuXHRuYXRpdmVJbnN0YW5jZTogYW55O1xuXHRuYXRpdmVDbGFzc1NvdXJjZTogU291cmNlO1xuXHRpc0F1dG9sb2FkQWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbmF0aXZlSW5zdGFuY2U6IGFueSwgc291cmNlOiBTb3VyY2UpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMubmF0aXZlSW5zdGFuY2UgPSBuYXRpdmVJbnN0YW5jZTtcblx0XHR0aGlzLm5hdGl2ZUNsYXNzU291cmNlID0gc291cmNlO1xuXHR9XG5cblx0Z2V0Q2xhc3NEZWZpbml0aW9uKCk6IENsYXNzRGVmaW5pdGlvbiB7XG5cdFx0Y29uc3QgYXN0ID0gbmV3IFBhcnNlcih0aGlzLm5hdGl2ZUNsYXNzU291cmNlKS5wYXJzZSgpO1xuXG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIGFzdC5jaGlsZHJlbikge1xuXHRcdFx0aWYgKG5vZGUudHlwZSA9PT0gQVNUTm9kZVR5cGUuQ0xBU1MpIHtcblx0XHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RDbGFzc05vZGUgJiYgbm9kZS5uYW1lID09PSB0aGlzLm5hbWUpIHtcblx0XHRcdFx0XHRjb25zdCBjbGFzc0RlZiA9IENsYXNzRGVmaW5pdGlvbi5mcm9tQVNUKG5vZGUpO1xuXG5cdFx0XHRcdFx0Y2xhc3NEZWYubmF0aXZlSW5zdGFuY2UgPSB0aGlzLm5hdGl2ZUluc3RhbmNlO1xuXG5cdFx0XHRcdFx0cmV0dXJuIGNsYXNzRGVmO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYENsYXNzICR7dGhpcy5uYW1lfSBub3QgZm91bmQuYCwgYXN0LnNwYW4pO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7QVNUQXJyYXlOb2RlLCBBU1ROb2RlLCBBU1ROb2RlVHlwZSwgQVNUUmV0dXJuTm9kZX0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHtHUkFNTUFSLCBUWVBFX0VOVU19IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5pbXBvcnQge0NsYXNzRGVmaW5pdGlvbiwgSW5zdGFuY2V9IGZyb20gXCIuL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge3Rocm93TmF0aXZlRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcblxuaW50ZXJmYWNlIFNlcmlhbGl6YXRpb25PYmplY3Qge1xuXHRbaW5kZXg6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHRjbGFzc05hbWU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihjbGFzc05hbWU6IHN0cmluZykge1xuXHRcdHRoaXMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuXHR9XG5cblx0cHVibGljIHNlcmlhbGl6ZSgpOiBTZXJpYWxpemF0aW9uT2JqZWN0IHtcblx0XHRjb25zdCBvYmplY3Q6IFNlcmlhbGl6YXRpb25PYmplY3QgPSB7fTtcblxuXHRcdG9iamVjdFt0aGlzLmNsYXNzTmFtZV0gPSBPYmplY3Rcblx0XHRcdC5rZXlzKHRoaXMpXG5cdFx0XHQuZmlsdGVyKGtleSA9PiBrZXkgIT09ICdjbGFzc05hbWUnKVxuXHRcdFx0LnJlZHVjZSgob2JqZWN0OiBTZXJpYWxpemF0aW9uT2JqZWN0LCBrZXk6IHN0cmluZyk6IFNlcmlhbGl6YXRpb25PYmplY3QgPT4ge1xuXHRcdFx0XHRjb25zdCBjb3B5OiBTZXJpYWxpemF0aW9uT2JqZWN0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcyk7XG5cdFx0XHRcdG9iamVjdFtrZXldID0gY29weVtrZXldO1xuXHRcdFx0XHRyZXR1cm4gb2JqZWN0O1xuXHRcdFx0fSwge30pO1xuXG5cdFx0cmV0dXJuIG9iamVjdDtcblx0fVxuXG5cdHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSh7Y2xhc3NOYW1lOiB0aGlzLmNsYXNzTmFtZX0sIG51bGwsIDIpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhT2JqZWN0VmlldyBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHRwcml2YXRlIF9faW5zdGFuY2U6IEluc3RhbmNlO1xuXG5cdGNvbnN0cnVjdG9yKGluc3RhbmNlOiBJbnN0YW5jZSkge1xuXHRcdHN1cGVyKGluc3RhbmNlLl9fY2xhc3NEZWYubmFtZSk7XG5cblx0XHR0aGlzLl9faW5zdGFuY2UgPSBpbnN0YW5jZTtcblxuXHRcdHJldHVybiBuZXcgUHJveHkodGhpcywge1xuXHRcdFx0Z2V0OiAoXzogYW55LCBuYW1lOiBzdHJpbmcpOiBhbnkgPT4ge1xuXHRcdFx0XHRpZiAobmFtZSBpbiB0aGlzLl9faW5zdGFuY2UuX19pbnN0YW5jZUZpZWxkcykge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLl9faW5zdGFuY2UuX19pbnN0YW5jZUZpZWxkc1tuYW1lXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChuYW1lIGluIHRoaXMuX19pbnN0YW5jZS5fX3N0YXRpY0ZpZWxkcykge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLl9faW5zdGFuY2UuX19zdGF0aWNGaWVsZHNbbmFtZV07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAobmFtZSBpbiB0aGlzKSB7XG5cdFx0XHRcdFx0Y29uc3Qgc2VsZjogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0gdGhpcztcblx0XHRcdFx0XHRyZXR1cm4gc2VsZltuYW1lXTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0c2V0OiAoXzogYW55LCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBhbnkgPT4ge1xuXHRcdFx0XHRpZiAobmFtZSBpbiB0aGlzLl9faW5zdGFuY2UuX19pbnN0YW5jZUZpZWxkcykge1xuXHRcdFx0XHRcdHRoaXMuX19pbnN0YW5jZS5fX2luc3RhbmNlRmllbGRzW25hbWVdID0gdmFsdWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAobmFtZSBpbiB0aGlzLl9faW5zdGFuY2UuX19zdGF0aWNGaWVsZHMpIHtcblx0XHRcdFx0XHR0aGlzLl9faW5zdGFuY2UuX19zdGF0aWNGaWVsZHNbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG5cblx0cHVibGljIG92ZXJyaWRlIHNlcmlhbGl6ZSgpOiBTZXJpYWxpemF0aW9uT2JqZWN0IHtcblx0XHRjb25zdCBvYmplY3Q6IFNlcmlhbGl6YXRpb25PYmplY3QgPSB7fTtcblxuXHRcdG9iamVjdFt0aGlzLmNsYXNzTmFtZV0gPSB7Li4udGhpcy5fX2luc3RhbmNlPy5fX2luc3RhbmNlRmllbGRzfTtcblxuXHRcdHJldHVybiBvYmplY3Q7XG5cdH1cblxuXHRwdWJsaWMgb3ZlcnJpZGUgdG9TdHJpbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5zZXJpYWxpemUoKSwgbnVsbCwgMik7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhc3RWYWx1ZSh2YWx1ZTogYW55LCBleHBlY3RlZDogYW55ID0gbnVsbCk6IGFueSB7XG5cdGNvbnN0IHR5cGVPZiA9IHR5cGVvZiB2YWx1ZTtcblxuXHRpZiAoZXhwZWN0ZWQgPT09IG51bGwpIHtcblx0XHRpZiAodmFsdWUgPT09IEdSQU1NQVIuTlVMTCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGlmICh2YWx1ZSA9PT0gR1JBTU1BUi5UUlVFKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0aWYgKHZhbHVlID09PSBHUkFNTUFSLkZBTFNFKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmICh0eXBlT2YgPT09ICdzdHJpbmcnICYmIHZhbHVlLnRyaW0oKSAhPT0gJycgJiYgIWlzTmFOKHZhbHVlKSkge1xuXHRcdFx0cmV0dXJuIE51bWJlcih2YWx1ZSk7XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdHN3aXRjaCAoZXhwZWN0ZWQpIHtcblx0XHRjYXNlIFRZUEVfRU5VTS5TVFJJTkc6XG5cdFx0XHRyZXR1cm4gdHlwZU9mID09PSAnc3RyaW5nJyA/IHZhbHVlIDogU3RyaW5nKHZhbHVlKTtcblxuXHRcdGNhc2UgVFlQRV9FTlVNLk5VTUJFUjpcblx0XHRcdHJldHVybiB0eXBlT2YgPT09ICdudW1iZXInID8gdmFsdWUgOiBOdW1iZXIodmFsdWUpO1xuXG5cdFx0Y2FzZSBUWVBFX0VOVU0uQk9PTEVBTjpcblx0XHRcdHJldHVybiB0eXBlT2YgPT09ICdib29sZWFuJyA/IHZhbHVlIDogdmFsdWUgPT09ICd0cnVlJztcblxuXHRcdGNhc2UgVFlQRV9FTlVNLk5VTEw6XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTHlyYVN0cmluZyh2YWx1ZTogc3RyaW5nKTogQVNUTm9kZSB7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5TVFJJTkcpO1xuXHRub2RlLnZhbHVlID0gdmFsdWU7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9MeXJhTnVtYmVyKHZhbHVlOiBudW1iZXIpOiBBU1ROb2RlIHtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLk5VTUJFUik7XG5cdG5vZGUudmFsdWUgPSB2YWx1ZTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0x5cmFCb29sZWFuKHZhbHVlOiBib29sZWFuKTogQVNUTm9kZSB7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5CT09MRUFOKTtcblx0bm9kZS52YWx1ZSA9IHZhbHVlO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTHlyYU51bGwoKTogQVNUTm9kZSB7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5OVUxMKTtcblx0bm9kZS52YWx1ZSA9IEdSQU1NQVIuTlVMTDtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0x5cmFBcnJheSh2YWx1ZXM6IGFueVtdKTogQVNUTm9kZSB7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUQXJyYXlOb2RlKCk7XG5cdG5vZGUuZWxlbWVudHMgPSB2YWx1ZXMubWFwKHZhbHVlID0+IHRvTHlyYVZhbHVlKHZhbHVlKSk7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9MeXJhVmFsdWUodmFsdWU6IGFueSk6IEFTVE5vZGUge1xuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBBU1ROb2RlKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gVFlQRV9FTlVNLlNUUklORykge1xuXHRcdHJldHVybiB0b0x5cmFTdHJpbmcodmFsdWUpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gVFlQRV9FTlVNLk5VTUJFUikge1xuXHRcdHJldHVybiB0b0x5cmFOdW1iZXIodmFsdWUpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gVFlQRV9FTlVNLkJPT0xFQU4pIHtcblx0XHRyZXR1cm4gdG9MeXJhQm9vbGVhbih2YWx1ZSk7XG5cdH1cblxuXHRpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiB0b0x5cmFOdWxsKCk7XG5cdH1cblxuXHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRyZXR1cm4gdG9MeXJhQXJyYXkodmFsdWUpO1xuXHR9XG5cblx0dGhyb3dOYXRpdmVFcnJvcignQ2Fubm90IGNvbnZlcnQgbmF0aXZlIG9iamVjdCB0byBMeXJhIHZhbHVlJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tTHlyYVZhbHVlKHZhbHVlOiBhbnkpOiBhbnkge1xuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBBU1ROb2RlKSB7XG5cdFx0cmV0dXJuIGNhc3RWYWx1ZSh2YWx1ZS52YWx1ZSk7XG5cdH1cblxuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBJbnN0YW5jZSkge1xuXHRcdGlmICh2YWx1ZS5fX25hdGl2ZUluc3RhbmNlKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWUuX19uYXRpdmVJbnN0YW5jZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IEx5cmFPYmplY3RWaWV3KHZhbHVlKTtcblx0fVxuXG5cdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdHJldHVybiB2YWx1ZS5tYXAoZnJvbUx5cmFWYWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4gY2FzdFZhbHVlKHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblZhbHVlKHZhbHVlOiBhbnkpOiBBU1RSZXR1cm5Ob2RlIHtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RSZXR1cm5Ob2RlKCk7XG5cdG5vZGUuYXJndW1lbnQgPSB0b0x5cmFWYWx1ZSh2YWx1ZSk7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd3JhcE5hdGl2ZUluc3RhbmNlKGx5cmFOYXRpdmVPYmplY3Q6IEx5cmFOYXRpdmVPYmplY3QsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IEluc3RhbmNlIHtcblx0aWYgKCFvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmhhcyhseXJhTmF0aXZlT2JqZWN0LmNsYXNzTmFtZSkpIHtcblx0XHR0aHJvd05hdGl2ZUVycm9yKGBDbGFzcyAke2x5cmFOYXRpdmVPYmplY3QuY2xhc3NOYW1lfSBub3QgZm91bmQuYCk7XG5cdH1cblxuXHRjb25zdCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQobHlyYU5hdGl2ZU9iamVjdC5jbGFzc05hbWUpO1xuXHRjb25zdCBpbnN0YW5jZTogSW5zdGFuY2UgPSBjbGFzc0RlZi5jb25zdHJ1Y3RFbXB0eUluc3RhbmNlKCk7XG5cblx0aW5zdGFuY2UuX19uYXRpdmVJbnN0YW5jZSA9IGx5cmFOYXRpdmVPYmplY3Q7XG5cblx0cmV0dXJuIGluc3RhbmNlO1xufVxuXG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7THlyYU5hdGl2ZU9iamVjdH0gZnJvbSBcIi4uLy4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfY29udmVyc2lvblwiO1xuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuLi8uLi9jb3JlL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmNvbnN0IENMQVNTX05BTUUgPSAnU3RyaW5nJztcblxuZXhwb3J0IGNsYXNzIEx5cmFTdHJpbmcgZXh0ZW5kcyBMeXJhTmF0aXZlT2JqZWN0IHtcblx0dmFsdWU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIoQ0xBU1NfTkFNRSk7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHR9XG5cblx0Ly8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuXHR0b1VwcGVyQ2FzZSgpOiBMeXJhU3RyaW5nIHtcblx0XHRyZXR1cm4gbmV3IEx5cmFTdHJpbmcodGhpcy52YWx1ZS50b1VwcGVyQ2FzZSgpKTtcblx0fVxuXG5cdC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcblx0dG9Mb3dlckNhc2UoKTogTHlyYVN0cmluZyB7XG5cdFx0cmV0dXJuIG5ldyBMeXJhU3RyaW5nKHRoaXMudmFsdWUudG9Mb3dlckNhc2UoKSk7XG5cdH1cblxuXHRvdmVycmlkZSB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTdHJpbmdUeXBlIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IENMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRDTEFTU19OQU1FLFxuXHRcdFx0THlyYVN0cmluZyxcblx0XHRcdG5ldyBTb3VyY2UoXG5cdFx0XHRcdGBcbmNsYXNzICR7Q0xBU1NfTkFNRX0ge1xuXHRwdWJsaWMgY29uc3RydWN0b3IodmFsdWUpO1xuXHRcdFx0XHRcblx0cHVibGljIHRvVXBwZXJDYXNlKCk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwdWJsaWMgdG9Mb3dlckNhc2UoKTogJHtDTEFTU19OQU1FfTtcblxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IHRydWU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uLy4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuY29uc3QgQ0xBU1NfTkFNRSA9ICdTeXN0ZW0nO1xuXG5leHBvcnQgY2xhc3MgTHlyYVN5c3RlbSB7XG5cdHN0YXRpYyBhbGVydChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRhbGVydChtZXNzYWdlKTtcblx0fVxuXG5cdHN0YXRpYyBwcmludChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRjb25zb2xlLmxvZyhtZXNzYWdlKTtcblx0fVxuXG5cdHN0YXRpYyBpbmZvKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRjb25zb2xlLmluZm8odmFsdWUuc2VyaWFsaXplKCkpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zb2xlLmluZm8odmFsdWUpO1xuXHR9XG5cblx0c3RhdGljIHdhcm5pbmcodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdGNvbnNvbGUud2Fybih2YWx1ZS5zZXJpYWxpemUoKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnNvbGUud2Fybih2YWx1ZSk7XG5cdH1cblxuXHRzdGF0aWMgZXJyb3IodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IodmFsdWUuc2VyaWFsaXplKCkpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zb2xlLmVycm9yKHZhbHVlKTtcblx0fVxuXG5cdHN0YXRpYyBsb2codmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdGNvbnNvbGUubG9nKHZhbHVlLnNlcmlhbGl6ZSgpKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc29sZS5sb2codmFsdWUpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTeXN0ZW0gZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdENMQVNTX05BTUUsXG5cdFx0XHRMeXJhU3lzdGVtLFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfSB7XG5cdHB1YmxpYyBzdGF0aWMgYWxlcnQobWVzc2FnZTogc3RyaW5nKTogdm9pZDtcblx0XG5cdHB1YmxpYyBzdGF0aWMgcHJpbnQobWVzc2FnZTogc3RyaW5nKTogdm9pZDtcblx0XG5cdHB1YmxpYyBzdGF0aWMgaW5mbyh2YWx1ZTogbWl4ZWQpOiB2b2lkO1xuXHRcblx0cHVibGljIHN0YXRpYyB3YXJuaW5nKHZhbHVlOiBtaXhlZCk6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgc3RhdGljIGVycm9yKHZhbHVlOiBtaXhlZCk6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgc3RhdGljIGxvZyh2YWx1ZTogbWl4ZWQpOiB2b2lkO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IGZhbHNlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vLi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5jb25zdCBDTEFTU19OQU1FID0gJ0Fzc2VydCc7XG5cbmNvbnN0IGlmRmFpbGVkID0gKG1lc3NhZ2U6IHN0cmluZyA9ICcnKSA9PiB7XG5cdHRocm93IG5ldyBFcnJvcignW0Fzc2VydGlvbkVycm9yXSAnICsgKG1lc3NhZ2UgfHwgJ0Fzc2VydGlvbiBmYWlsZWQuJykpO1xufTtcblxuZXhwb3J0IGNsYXNzIEx5cmFBc3NlcnQge1xuXHRzdGF0aWMgaXNUcnVlKGNvbmRpdGlvbjogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nID0gJycpIHtcblx0XHRpZiAoIWNvbmRpdGlvbikge1xuXHRcdFx0aWZGYWlsZWQobWVzc2FnZSk7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIGlzRmFsc2UoY29uZGl0aW9uOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcgPSAnJykge1xuXHRcdGlmIChjb25kaXRpb24pIHtcblx0XHRcdGlmRmFpbGVkKG1lc3NhZ2UpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQXNzZXJ0IGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IENMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRDTEFTU19OQU1FLFxuXHRcdFx0THlyYUFzc2VydCxcblx0XHRcdG5ldyBTb3VyY2UoXG5cdFx0XHRcdGBcbmNsYXNzICR7Q0xBU1NfTkFNRX0ge1xuXHRwdWJsaWMgc3RhdGljIGlzVHJ1ZShjb25kaXRpb246IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZyA9IFwiXCIpOiB2b2lkO1xuXHRcblx0cHVibGljIHN0YXRpYyBpc0ZhbHNlKGNvbmRpdGlvbjogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nID0gXCJcIik6IHZvaWQ7XG59YFxuXHRcdFx0KSk7XG5cblx0XHR0aGlzLmlzQXV0b2xvYWRBYmxlID0gZmFsc2U7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uLy4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuY29uc3QgQ0xBU1NfTkFNRSA9ICdOdW1iZXInO1xuXG5leHBvcnQgY2xhc3MgTHlyYU51bWJlciBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHR2YWx1ZTogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKHZhbHVlOiBudW1iZXIpIHtcblx0XHRzdXBlcihDTEFTU19OQU1FKTtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdH1cblxuXHRvdmVycmlkZSB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlLnRvU3RyaW5nKCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE51bWJlclR5cGUgZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdENMQVNTX05BTUUsXG5cdFx0XHRMeXJhTnVtYmVyLFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfSB7XG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWx1ZSk7XG5cblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZztcbn1gXG5cdFx0XHQpKTtcblxuXHRcdHRoaXMuaXNBdXRvbG9hZEFibGUgPSB0cnVlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7THlyYU5hdGl2ZU9iamVjdH0gZnJvbSBcIi4uLy4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfY29udmVyc2lvblwiO1xuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuLi8uLi9jb3JlL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmNvbnN0IEFSUkFZX0NMQVNTX05BTUUgPSAnQXJyYXknO1xuY29uc3QgQVJSQVlfSVRFUkFUT1JfQ0xBU1NfTkFNRSA9ICdBcnJheUl0ZXJhdG9yJztcblxuZXhwb3J0IGNsYXNzIEx5cmFBcnJheSBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHR2YWx1ZXM6IGFueVtdO1xuXG5cdGNvbnN0cnVjdG9yKHZhbHVlczogYW55W10gPSBbXSkge1xuXHRcdHN1cGVyKEFSUkFZX0NMQVNTX05BTUUpO1xuXG5cdFx0dGhpcy52YWx1ZXMgPSB2YWx1ZXM7XG5cdH1cblxuXHRpdGVyYXRvcigpOiBMeXJhQXJyYXlJdGVyYXRvciB7XG5cdFx0cmV0dXJuIG5ldyBMeXJhQXJyYXlJdGVyYXRvcih0aGlzKTtcblx0fVxuXG5cdGxlbmd0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlcy5sZW5ndGg7XG5cdH1cblxuXHRwdXNoKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLnZhbHVlcy5wdXNoKHZhbHVlKTtcblx0fVxuXG5cdC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcblx0Z2V0KGluZGV4OiBudW1iZXIpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlc1tpbmRleF0gPz8gbnVsbDtcblx0fVxuXG5cdC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcblx0cmVtb3ZlQXQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMudmFsdWVzID0gdGhpcy52YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcblx0fVxuXG5cdG92ZXJyaWRlIHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0Y29uc3QgdmFsdWVzID0gdGhpc1xuXHRcdFx0LnZhbHVlc1xuXHRcdFx0Lm1hcCh2YWx1ZSA9PiB7XG5cdFx0XHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFBcnJheSkge1xuXHRcdFx0XHRcdHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdH0pO1xuXG5cdFx0cmV0dXJuIGBbJHt2YWx1ZXMuam9pbignLCAnKX1dYDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQXJyYXlUeXBlIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IEFSUkFZX0NMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRBUlJBWV9DTEFTU19OQU1FLFxuXHRcdFx0THlyYUFycmF5LFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtBUlJBWV9DTEFTU19OQU1FfTxUPiBpbXBsZW1lbnRzIEl0ZXJhYmxlPFQ+IHtcblx0cHVibGljIGNvbnN0cnVjdG9yKHZhbHVlcyA9IFtdKTtcblx0XG5cdHB1YmxpYyBpdGVyYXRvcigpOiBJdGVyYXRvcjxUPjtcblx0XG5cdHB1YmxpYyBsZW5ndGgoKTogbnVtYmVyO1xuXHRcblx0cHVibGljIHB1c2godmFsdWU6IFQpOiB2b2lkO1xuXHRcblx0cHVibGljIGdldChpbmRleDogbnVtYmVyKTogVD87XG5cdFxuXHRwdWJsaWMgcmVtb3ZlQXQoaW5kZXg6IG51bWJlcik6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFBcnJheUl0ZXJhdG9yIGV4dGVuZHMgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdHZhbHVlczogYW55W107XG5cdGluZGV4OiBudW1iZXIgPSAwO1xuXG5cdGNvbnN0cnVjdG9yKGFycmF5OiBMeXJhQXJyYXkpIHtcblx0XHRzdXBlcihBUlJBWV9JVEVSQVRPUl9DTEFTU19OQU1FKTtcblxuXHRcdHRoaXMudmFsdWVzID0gYXJyYXkudmFsdWVzO1xuXHR9XG5cblx0cmV3aW5kKCkge1xuXHRcdHRoaXMuaW5kZXggPSAwO1xuXHR9XG5cblx0aGFzTmV4dCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pbmRleCA8IHRoaXMudmFsdWVzLmxlbmd0aDtcblx0fVxuXG5cdG5leHQoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaW5kZXggKyAxID4gdGhpcy52YWx1ZXMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5pbmRleCsrO1xuXHR9XG5cblx0Ly8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuXHRwcmV2aW91cygpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pbmRleCArIDEgPCAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5pbmRleC0tO1xuXHR9XG5cblx0Ly8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuXHRrZXkoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5pbmRleDtcblx0fVxuXG5cdGN1cnJlbnQoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXNbdGhpcy5pbmRleF07XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFycmF5SXRlcmF0b3JUeXBlIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IEFSUkFZX0lURVJBVE9SX0NMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRBUlJBWV9JVEVSQVRPUl9DTEFTU19OQU1FLFxuXHRcdFx0THlyYUFycmF5LFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtBUlJBWV9JVEVSQVRPUl9DTEFTU19OQU1FfTxUPiBpbXBsZW1lbnRzIEl0ZXJhdG9yPFQ+IHtcblx0cHVibGljIGNvbnN0cnVjdG9yKGFycmF5OiBBcnJheTxUPik7XG5cdFxuXHRwdWJsaWMgaGFzTmV4dCgpOiBib29sZWFuO1xuXHRcblx0cHVibGljIG5leHQoKTogdm9pZDtcblx0XG5cdHB1YmxpYyBwcmV2aW91cygpOiB2b2lkO1xuXHRcblx0cHVibGljIGtleSgpOiBudW1iZXI7XG5cdFxuXHRwdWJsaWMgY3VycmVudCgpOiBUO1xuXHRcblx0cHVibGljIHJld2luZCgpOiB2b2lkO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IHRydWU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHR5cGUge0V2ZW50UGlwZWxpbmV9IGZyb20gXCIuL3BpcGVsaW5lXCI7XG5pbXBvcnQge3RvTHlyYVZhbHVlfSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfY29udmVyc2lvblwiO1xuaW1wb3J0IHtMYW1iZGFGdW5jdGlvbkNhbGx9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9ydW50aW1lXCI7XG5cblxuZXhwb3J0IGNsYXNzIFN0YXRlPFQgPSBhbnk+IHtcblx0cHJpdmF0ZSB2YWx1ZTogVDtcblx0cHJpdmF0ZSBzdWJzY3JpYmVyczogTWFwPG51bWJlciwgKHZhbHVlOiBUKSA9PiB2b2lkPiA9IG5ldyBNYXA8bnVtYmVyLCAodmFsdWU6IFQpID0+IHZvaWQ+KCk7XG5cdHByaXZhdGUgaWQ6IG51bWJlciA9IDA7XG5cblx0Y29uc3RydWN0b3IoaW5pdGlhbDogVCkge1xuXHRcdHRoaXMudmFsdWUgPSBpbml0aWFsO1xuXHR9XG5cblx0Z2V0KCk6IFQge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHR9XG5cblx0c2V0KHZhbHVlOiBUKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMudmFsdWUgPT09IHZhbHVlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMubm90aWZ5KCk7XG5cdH1cblxuXHRzdWJzY3JpYmUoZm46IExhbWJkYUZ1bmN0aW9uQ2FsbCk6IG51bWJlciB7XG5cdFx0Y29uc3QgbmV4dElkOiBudW1iZXIgPSB0aGlzLmlkKys7XG5cdFx0dGhpcy5zdWJzY3JpYmVycy5zZXQobmV4dElkLCB0aGlzLndyYXBDYWxsYmFjayhmbikpO1xuXHRcdHJldHVybiBuZXh0SWQ7XG5cdH1cblxuXHR1bnN1YnNjcmliZShpZDogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3Vic2NyaWJlcnMuZGVsZXRlKGlkKTtcblx0fVxuXG5cdHByaXZhdGUgbm90aWZ5KCk6IHZvaWQge1xuXHRcdGZvciAoY29uc3QgZm4gb2YgdGhpcy5zdWJzY3JpYmVycy52YWx1ZXMoKSkge1xuXHRcdFx0Zm4odGhpcy52YWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSB3cmFwQ2FsbGJhY2soZm46IExhbWJkYUZ1bmN0aW9uQ2FsbCkge1xuXHRcdHJldHVybiAodmFsdWU6IFQpOiB2b2lkID0+IHtcblx0XHRcdGZuLmV2YWxDYWxsKG51bGwsIHRvTHlyYVZhbHVlKHZhbHVlKSk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kU3RhdGVUb0V2ZW50PFQ+KHBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCBldmVudDogc3RyaW5nLCBzdGF0ZTogU3RhdGU8VD4sIG1hcD86IChwYXlsb2FkOiBhbnkpID0+IFQpOiB2b2lkIHtcblx0cGlwZWxpbmUub24oZXZlbnQsIChwYXlsb2FkKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgdmFsdWU6IGFueSA9IG1hcCA/IG1hcChwYXlsb2FkKSA6IHBheWxvYWQ7XG5cdFx0c3RhdGUuc2V0KHZhbHVlKTtcblx0fSk7XG59XG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7THlyYU5hdGl2ZU9iamVjdH0gZnJvbSBcIi4uLy4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfY29udmVyc2lvblwiO1xuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuLi8uLi9jb3JlL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5pbXBvcnQge1N0YXRlfSBmcm9tIFwiLi4vLi4vY29yZS9ldmVudC9zdGF0ZVwiO1xuaW1wb3J0IHR5cGUge0xhbWJkYUZ1bmN0aW9uQ2FsbH0gZnJvbSBcIi4uLy4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcnVudGltZVwiO1xuXG5jb25zdCBDTEFTU19OQU1FID0gJ1N0YXRlJztcblxuZXhwb3J0IGNsYXNzIEx5cmFTdGF0ZTxUPiBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHRwcml2YXRlIHN0YXRlOiBTdGF0ZTxUPjtcblxuXHRjb25zdHJ1Y3Rvcihpbml0aWFsOiBUKSB7XG5cdFx0c3VwZXIoQ0xBU1NfTkFNRSk7XG5cdFx0dGhpcy5zdGF0ZSA9IG5ldyBTdGF0ZTxUPihpbml0aWFsKTtcblx0fVxuXG5cdGdldCgpOiBUIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5nZXQoKTtcblx0fVxuXG5cdHNldCh2YWx1ZTogVCk6IHZvaWQge1xuXHRcdHRoaXMuc3RhdGUuc2V0KHZhbHVlKTtcblx0fVxuXG5cdHN1YnNjcmliZShmbjogTGFtYmRhRnVuY3Rpb25DYWxsKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5zdWJzY3JpYmUoZm4pO1xuXHR9XG5cblx0dW5zdWJzY3JpYmUoaWQ6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLnVuc3Vic2NyaWJlKGlkKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgU3RhdGVUeXBlIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IENMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRDTEFTU19OQU1FLFxuXHRcdFx0THlyYVN0YXRlLFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfTxUPiB7XG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcihpbml0aWFsOiBUKTtcblxuXHRwdWJsaWMgZ2V0KCk6IFQ7XG5cdFxuXHRwdWJsaWMgc2V0KHZhbHVlOiBUKTogdm9pZDtcblx0XG5cdHB1YmxpYyBzdWJzY3JpYmUoZm46IChUKSAtPiB2b2lkKTogbnVtYmVyO1xuXHRcblx0cHVibGljIHVuc3Vic2NyaWJlKGlkOiBudW1iZXIpOiBib29sZWFuO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IHRydWU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uLy4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuY29uc3QgQ0xBU1NfTkFNRSA9ICdFdmVudHMnO1xuXG5leHBvcnQgY2xhc3MgTHlyYUV2ZW50IGV4dGVuZHMgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZXZlbnQ6IEV2ZW50KSB7XG5cdFx0c3VwZXIoQ0xBU1NfTkFNRSk7XG5cdH1cblxuXHRnZXRUeXBlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuZXZlbnQudHlwZTtcblx0fVxuXG5cdHByZXZlbnREZWZhdWx0KCk6IHZvaWQge1xuXHRcdHRoaXMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgRXZlbnRUeXBlIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IENMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRDTEFTU19OQU1FLFxuXHRcdFx0THlyYUV2ZW50LFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfSB7XG5cdHB1YmxpYyBjb25zdHJ1Y3RvcihldmVudCk7XG5cblx0cHVibGljIGdldFR5cGUoKTogc3RyaW5nO1xuXG5cdHB1YmxpYyBwcmV2ZW50RGVmYXVsdCgpOiB2b2lkO1xufWApKTtcblxuXHRcdHRoaXMuaXNBdXRvbG9hZEFibGUgPSB0cnVlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtTdHJpbmdUeXBlfSBmcm9tIFwiLi9jbGFzc2VzL3N0cmluZ1wiO1xuaW1wb3J0IHtTeXN0ZW19IGZyb20gXCIuL2NsYXNzZXMvc3lzdGVtXCI7XG5pbXBvcnQge0Fzc2VydH0gZnJvbSBcIi4vY2xhc3Nlcy9hc3NlcnRcIjtcbmltcG9ydCB7TnVtYmVyVHlwZX0gZnJvbSBcIi4vY2xhc3Nlcy9udW1iZXJcIjtcbmltcG9ydCB7QXJyYXlJdGVyYXRvclR5cGUsIEFycmF5VHlwZX0gZnJvbSBcIi4vY2xhc3Nlcy9hcnJheVwiO1xuaW1wb3J0IHtTdGF0ZVR5cGV9IGZyb20gXCIuL2NsYXNzZXMvc3RhdGVcIjtcbmltcG9ydCB7RXZlbnRUeXBlfSBmcm9tIFwiLi9jbGFzc2VzL2V2ZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBOYXRpdmVDbGFzc2VzIHtcblx0cmVnaXN0cnk6IE1hcDxzdHJpbmcsIE5hdGl2ZUNsYXNzPiA9IG5ldyBNYXAoKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChBc3NlcnQuQ0xBU1NfTkFNRSwgbmV3IEFzc2VydCgpKTtcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChTeXN0ZW0uQ0xBU1NfTkFNRSwgbmV3IFN5c3RlbSgpKTtcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChTdHJpbmdUeXBlLkNMQVNTX05BTUUsIG5ldyBTdHJpbmdUeXBlKCkpO1xuXHRcdHRoaXMucmVnaXN0cnkuc2V0KE51bWJlclR5cGUuQ0xBU1NfTkFNRSwgbmV3IE51bWJlclR5cGUoKSk7XG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoQXJyYXlUeXBlLkNMQVNTX05BTUUsIG5ldyBBcnJheVR5cGUoKSk7XG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoQXJyYXlJdGVyYXRvclR5cGUuQ0xBU1NfTkFNRSwgbmV3IEFycmF5SXRlcmF0b3JUeXBlKCkpXG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoU3RhdGVUeXBlLkNMQVNTX05BTUUsIG5ldyBTdGF0ZVR5cGUoKSk7XG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoRXZlbnRUeXBlLkNMQVNTX05BTUUsIG5ldyBFdmVudFR5cGUoKSlcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0FTVFBhcmFtZXRlck5vZGUsIEFTVFR5cGVOb2RlfSBmcm9tIFwiLi4vY29yZS9hc3RcIjtcbmltcG9ydCB7VFlQRV9FTlVNfSBmcm9tIFwiLi4vY29yZS9ncmFtbWFyXCI7XG5pbXBvcnQge3Rocm93TmF0aXZlRXJyb3J9IGZyb20gXCIuLi9jb3JlL2Vycm9yc1wiO1xuXG5leHBvcnQgY2xhc3MgTmF0aXZlRnVuY3Rpb24ge1xuXHRuYW1lOiBzdHJpbmc7XG5cdHBhcmFtZXRlck5vZGVzOiBBU1RQYXJhbWV0ZXJOb2RlW10gPSBbXTtcblx0cmV0dXJuVHlwZTogQVNUVHlwZU5vZGU7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sIHJldHVyblR5cGU6IEFTVFR5cGVOb2RlKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnBhcmFtZXRlck5vZGVzID0gcGFyYW1ldGVycztcblx0XHR0aGlzLnJldHVyblR5cGUgPSByZXR1cm5UeXBlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBOYXRpdmVGdW5jdGlvblR5cGVSZWdpc3RyeSB7XG5cdGZ1bmN0aW9uczogTWFwPHN0cmluZywgTmF0aXZlRnVuY3Rpb24+ID0gbmV3IE1hcCgpO1xuXG5cdGhhcyhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5mdW5jdGlvbnMuaGFzKG5hbWUpO1xuXHR9XG5cblx0Z2V0KG5hbWU6IHN0cmluZyk6IE5hdGl2ZUZ1bmN0aW9uIHtcblx0XHRjb25zdCBuYXRpdmVGdW5jdGlvbjogTmF0aXZlRnVuY3Rpb24gfCB1bmRlZmluZWQgPSB0aGlzLmZ1bmN0aW9ucy5nZXQobmFtZSk7XG5cdFx0aWYgKCFuYXRpdmVGdW5jdGlvbikge1xuXHRcdFx0dGhyb3dOYXRpdmVFcnJvcihgRnVuY3Rpb24gJHtuYW1lfSBub3QgZm91bmQuYCk7XG5cdFx0fVxuXHRcdHJldHVybiBuYXRpdmVGdW5jdGlvbjtcblx0fVxuXG5cdHNldChuYW1lOiBzdHJpbmcsIHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSwgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGUpOiBOYXRpdmVGdW5jdGlvblR5cGVSZWdpc3RyeSB7XG5cdFx0dGhpcy5mdW5jdGlvbnMuc2V0KG5hbWUsIG5ldyBOYXRpdmVGdW5jdGlvbihuYW1lLCBwYXJhbWV0ZXJzLCByZXR1cm5UeXBlKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE5hdGl2ZUZ1bmN0aW9ucyB7XG5cdHN0YXRpYyBQUklOVCA9ICdwcmludCc7XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj59XG5cdCAqL1xuXHRnZXRHbG9iYWxGdW5jdGlvbnMoKTogeyBba2V5OiBzdHJpbmddOiAoLi4uYXJnczogYW55W10pID0+IGFueSB9IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0W05hdGl2ZUZ1bmN0aW9ucy5QUklOVF06ICguLi5hcmdzKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHRnZXRHbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeSgpOiBOYXRpdmVGdW5jdGlvblR5cGVSZWdpc3RyeSB7XG5cdFx0Y29uc3QgZnVuY3Rpb25zID0gbmV3IE5hdGl2ZUZ1bmN0aW9uVHlwZVJlZ2lzdHJ5KCk7XG5cdFx0ZnVuY3Rpb25zLnNldChcblx0XHRcdE5hdGl2ZUZ1bmN0aW9ucy5QUklOVCxcblx0XHRcdFtwYXJhbWV0ZXIodHlwZShUWVBFX0VOVU0uU1RSSU5HKSwgJ21lc3NhZ2UnKV0sXG5cdFx0XHR0eXBlKFRZUEVfRU5VTS5WT0lEKVxuXHRcdClcblxuXHRcdHJldHVybiBmdW5jdGlvbnM7XG5cdH1cbn1cblxuZnVuY3Rpb24gdHlwZShuYW1lOiBzdHJpbmcsIG51bGxhYmxlID0gZmFsc2UpOiBBU1RUeXBlTm9kZSB7XG5cdHJldHVybiBuZXcgQVNUVHlwZU5vZGUoQVNUVHlwZU5vZGUuS0lORF9TSU1QTEUsIG5hbWUsIG51bGxhYmxlKTtcbn1cblxuZnVuY3Rpb24gcGFyYW1ldGVyKHR5cGVBbm5vdGF0aW9uOiBBU1RUeXBlTm9kZSwgbmFtZTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGFueSA9IG51bGwpOiBBU1RQYXJhbWV0ZXJOb2RlIHtcblx0cmV0dXJuIG5ldyBBU1RQYXJhbWV0ZXJOb2RlKG5hbWUsIHR5cGVBbm5vdGF0aW9uLCBkZWZhdWx0VmFsdWUpO1xufVxuIiwKICAgICJpbXBvcnQge1RZUEVfRU5VTX0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcbmltcG9ydCB7XG5cdEFTVENsYXNzTm9kZSxcblx0QVNURmllbGROb2RlLFxuXHRBU1RJbnRlcmZhY2VOb2RlLFxuXHRBU1RNZXRob2ROb2RlLFxuXHRBU1ROb2RlLFxuXHRBU1RQYXJhbWV0ZXJOb2RlLFxuXHRBU1RUeXBlTm9kZVxufSBmcm9tIFwiLi4vYXN0XCI7XG5pbXBvcnQge3Rocm93VHlwZUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcblxuZXhwb3J0IGNsYXNzIFByaW1pdGl2ZVR5cGVzIHtcblx0c3RhdGljIHJlYWRvbmx5IE5VTUJFUjogc3RyaW5nID0gVFlQRV9FTlVNLk5VTUJFUjtcblx0c3RhdGljIHJlYWRvbmx5IFNUUklORzogc3RyaW5nID0gVFlQRV9FTlVNLlNUUklORztcblx0c3RhdGljIHJlYWRvbmx5IEJPT0xFQU46IHN0cmluZyA9IFRZUEVfRU5VTS5CT09MRUFOO1xuXHRzdGF0aWMgcmVhZG9ubHkgTUlYRUQ6IHN0cmluZyA9IFRZUEVfRU5VTS5NSVhFRDtcblx0c3RhdGljIHJlYWRvbmx5IE5VTEw6IHN0cmluZyA9IFRZUEVfRU5VTS5OVUxMO1xuXHRzdGF0aWMgcmVhZG9ubHkgVk9JRDogc3RyaW5nID0gVFlQRV9FTlVNLlZPSUQ7XG5cblx0c3RhdGljIGhhc1R5cGUodHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKFByaW1pdGl2ZVR5cGVzLCB0eXBlLnRvVXBwZXJDYXNlKCkpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBQcmltaXRpdmVDbGFzc1R5cGVzIHtcblx0c3RhdGljIHJlYWRvbmx5IEFSUkFZOiBzdHJpbmcgPSBUWVBFX0VOVU0uQVJSQVk7XG5cblx0c3RhdGljIENMQVNTTkFNRV9NQVA6IHsgW3M6IHN0cmluZ106IHN0cmluZzsgfSA9IHtcblx0XHRhcnJheTogJ0FycmF5J1xuXHR9XG5cblx0c3RhdGljIGdldENsYXNzUmVmTmFtZSh0eXBlOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcblx0XHRyZXR1cm4gUHJpbWl0aXZlQ2xhc3NUeXBlcy5DTEFTU05BTUVfTUFQW3R5cGVdIHx8IG51bGw7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGUge1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0fVxuXG5cdGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzID09PSBvdGhlcjtcblx0fVxuXG5cdGFjY2VwdHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lcXVhbHMob3RoZXIpO1xuXHR9XG5cblx0dG9TdHJpbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gYFR5cGUoJHt0aGlzLm5hbWV9KWA7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFByaW1pdGl2ZVR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIobmFtZSk7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBQcmltaXRpdmVUeXBlXG5cdFx0XHQmJiB0aGlzLm5hbWUgPT09IG90aGVyLm5hbWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE1peGVkVHlwZSBleHRlbmRzIFR5cGUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihQcmltaXRpdmVUeXBlcy5NSVhFRCk7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBNaXhlZFR5cGU7XG5cdH1cblxuXHRvdmVycmlkZSBhY2NlcHRzKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBWb2lkVHlwZSBleHRlbmRzIFR5cGUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihQcmltaXRpdmVUeXBlcy5WT0lEKTtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBvdGhlciBpbnN0YW5jZW9mIFZvaWRUeXBlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBOdWxsVHlwZSBleHRlbmRzIFR5cGUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihQcmltaXRpdmVUeXBlcy5OVUxMKTtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBvdGhlciBpbnN0YW5jZW9mIE51bGxUeXBlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBOdWxsYWJsZVR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0aW5uZXI6IFR5cGU7XG5cblx0Y29uc3RydWN0b3IoaW5uZXI6IFR5cGUpIHtcblx0XHRzdXBlcihpbm5lci50b1N0cmluZygpICsgJz8nKTtcblx0XHR0aGlzLmlubmVyID0gaW5uZXI7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRpZiAob3RoZXIgPT09IFR5cGVzLk5VTEwpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChvdGhlciBpbnN0YW5jZW9mIE51bGxhYmxlVHlwZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuaW5uZXIuZXF1YWxzKG90aGVyLmlubmVyKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRvdmVycmlkZSBhY2NlcHRzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIG90aGVyID09PSBUeXBlcy5OVUxMIHx8IHRoaXMuaW5uZXIuYWNjZXB0cyhvdGhlcik7XG5cdH1cblxuXHRvdmVycmlkZSB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmlubmVyLnRvU3RyaW5nKCkgKyAnPyc7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFZOb2RlVHlwZSBleHRlbmRzIFR5cGUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigndm5vZGUnKTtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBvdGhlciBpbnN0YW5jZW9mIFZvaWRUeXBlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlcyB7XG5cdHN0YXRpYyByZWFkb25seSBOVU1CRVI6IFByaW1pdGl2ZVR5cGUgPSBuZXcgUHJpbWl0aXZlVHlwZShQcmltaXRpdmVUeXBlcy5OVU1CRVIpO1xuXHRzdGF0aWMgcmVhZG9ubHkgU1RSSU5HOiBQcmltaXRpdmVUeXBlID0gbmV3IFByaW1pdGl2ZVR5cGUoUHJpbWl0aXZlVHlwZXMuU1RSSU5HKTtcblx0c3RhdGljIHJlYWRvbmx5IEJPT0xFQU46IFByaW1pdGl2ZVR5cGUgPSBuZXcgUHJpbWl0aXZlVHlwZShQcmltaXRpdmVUeXBlcy5CT09MRUFOKTtcblx0c3RhdGljIHJlYWRvbmx5IE1JWEVEOiBNaXhlZFR5cGUgPSBuZXcgTWl4ZWRUeXBlKCk7XG5cdHN0YXRpYyByZWFkb25seSBOVUxMOiBOdWxsVHlwZSA9IG5ldyBOdWxsVHlwZSgpO1xuXHRzdGF0aWMgcmVhZG9ubHkgVk9JRDogVm9pZFR5cGUgPSBuZXcgVm9pZFR5cGUoKTtcblx0c3RhdGljIHJlYWRvbmx5IFZOT0RFOiBWTm9kZVR5cGUgPSBuZXcgVk5vZGVUeXBlKCk7XG5cblx0c3RhdGljIGdldFR5cGUobmFtZTogc3RyaW5nKTogVHlwZSB7XG5cdFx0aWYgKCFPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChQcmltaXRpdmVUeXBlcywgbmFtZS50b1VwcGVyQ2FzZSgpKSkge1xuXHRcdFx0dGhyb3dUeXBlRXJyb3IoYFVua25vd24gcHJpbWl0aXZlIHR5cGUgJHtuYW1lfS5gKTtcblx0XHR9XG5cblx0XHRjb25zdCB0eXBlczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0gVHlwZXM7XG5cdFx0cmV0dXJuIHR5cGVzW25hbWUudG9VcHBlckNhc2UoKV07XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGVWYXJpYWJsZSBleHRlbmRzIFR5cGUge1xuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcblx0XHRzdXBlcihuYW1lKTtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSkge1xuXHRcdHJldHVybiBvdGhlciBpbnN0YW5jZW9mIFR5cGVWYXJpYWJsZVxuXHRcdFx0JiYgdGhpcy5uYW1lID09PSBvdGhlci5uYW1lO1xuXHR9XG5cblx0b3ZlcnJpZGUgYWNjZXB0cygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVHlwZVBhcmFtZXRlclN5bWJvbCB7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblx0cmVhZG9ubHkgdmFyaWFibGVUeXBlOiBUeXBlVmFyaWFibGU7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnZhcmlhYmxlVHlwZSA9IG5ldyBUeXBlVmFyaWFibGUobmFtZSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpZWxkU3ltYm9sIHtcblx0cmVhZG9ubHkgbm9kZTogQVNURmllbGROb2RlO1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGZpZWxkVHlwZTogVHlwZTtcblx0cmVhZG9ubHkgaXNTdGF0aWM6IGJvb2xlYW4gPSBmYWxzZTtcblx0cmVhZG9ubHkgaXNQcml2YXRlOiBib29sZWFuID0gZmFsc2U7XG5cdHJlYWRvbmx5IGlzUHVibGljOiBib29sZWFuID0gZmFsc2U7XG5cdHJlYWRvbmx5IGlzUmVhZG9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcblx0b3duZXI6IENsYXNzU3ltYm9sIHwgSW50ZXJmYWNlU3ltYm9sIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3Iobm9kZTogQVNURmllbGROb2RlLCBmaWVsZFR5cGU6IFR5cGUpIHtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHRcdHRoaXMubmFtZSA9IG5vZGUubmFtZTtcblx0XHR0aGlzLmZpZWxkVHlwZSA9IGZpZWxkVHlwZTtcblx0XHR0aGlzLmlzU3RhdGljID0gbm9kZS5tb2RpZmllcnMuc3RhdGljO1xuXHRcdHRoaXMuaXNQcml2YXRlID0gbm9kZS5tb2RpZmllcnMucHJpdmF0ZTtcblx0XHR0aGlzLmlzUHVibGljID0gbm9kZS5tb2RpZmllcnMucHVibGljO1xuXHRcdHRoaXMuaXNSZWFkb25seSA9IG5vZGUubW9kaWZpZXJzLnJlYWRvbmx5O1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJTeW1ib2wge1xuXHRyZWFkb25seSBub2RlOiBBU1RQYXJhbWV0ZXJOb2RlIHwgbnVsbDtcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXHRyZWFkb25seSBwYXJhbWV0ZXJUeXBlOiBUeXBlO1xuXHRyZWFkb25seSBkZWZhdWx0VHlwZTogVHlwZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZTogVHlwZSwgZGVmYXVsdFZhbHVlOiBUeXBlIHwgbnVsbCA9IG51bGwsIG5vZGU6IEFTVFBhcmFtZXRlck5vZGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5wYXJhbWV0ZXJUeXBlID0gdHlwZTtcblx0XHR0aGlzLmRlZmF1bHRUeXBlID0gZGVmYXVsdFZhbHVlO1xuXHRcdHRoaXMubm9kZSA9IG5vZGU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE1ldGhvZFN5bWJvbCB7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblx0cmVhZG9ubHkgbm9kZTogQVNUTWV0aG9kTm9kZTtcblx0cmVhZG9ubHkgaXNTdGF0aWM6IGJvb2xlYW4gPSBmYWxzZTtcblx0cmVhZG9ubHkgaXNQcml2YXRlOiBib29sZWFuID0gZmFsc2U7XG5cdHJlYWRvbmx5IGlzUHVibGljOiBib29sZWFuID0gZmFsc2U7XG5cblx0dHlwZVBhcmFtZXRlclN5bWJvbHM6IFR5cGVQYXJhbWV0ZXJTeW1ib2xbXSA9IFtdO1xuXHRwYXJhbWV0ZXJTeW1ib2xzOiBQYXJhbWV0ZXJTeW1ib2xbXSA9IFtdO1xuXHRyZXR1cm5UeXBlOiBUeXBlID0gVHlwZXMuTUlYRUQ7XG5cblx0b3duZXI6IENsYXNzU3ltYm9sIHwgSW50ZXJmYWNlU3ltYm9sIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3Iobm9kZTogQVNUTWV0aG9kTm9kZSkge1xuXHRcdHRoaXMubmFtZSA9IG5vZGUubmFtZTtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHRcdHRoaXMuaXNTdGF0aWMgPSBub2RlLm1vZGlmaWVycy5zdGF0aWM7XG5cdFx0dGhpcy5pc1ByaXZhdGUgPSBub2RlLm1vZGlmaWVycy5wcml2YXRlO1xuXHRcdHRoaXMuaXNQdWJsaWMgPSBub2RlLm1vZGlmaWVycy5wdWJsaWM7XG5cdH1cblxuXHRnZXQgYm9keSgpOiBBU1ROb2RlW10ge1xuXHRcdHJldHVybiB0aGlzLm5vZGUuY2hpbGRyZW47XG5cdH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBPYmplY3RTeW1ib2wge1xuXHRuYW1lOiBzdHJpbmc7XG5cdHR5cGVQYXJhbWV0ZXJTeW1ib2xzOiBUeXBlUGFyYW1ldGVyU3ltYm9sW107XG5cdHN0YXRpY0ZpZWxkU3ltYm9sczogTWFwPHN0cmluZywgRmllbGRTeW1ib2w+O1xuXHRpbnN0YW5jZU1ldGhvZFN5bWJvbHM6IE1hcDxzdHJpbmcsIE1ldGhvZFN5bWJvbD47XG59XG5cbmV4cG9ydCBjbGFzcyBDbGFzc1N5bWJvbCBpbXBsZW1lbnRzIE9iamVjdFN5bWJvbCB7XG5cdHJlYWRvbmx5IG5vZGU6IEFTVENsYXNzTm9kZTtcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXHRyZWFkb25seSBzdXBlckNsYXNzOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuXHRzdXBlckNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCB8IG51bGwgPSBudWxsO1xuXHR0eXBlUGFyYW1ldGVyU3ltYm9sczogVHlwZVBhcmFtZXRlclN5bWJvbFtdID0gW107XG5cdGluc3RhbmNlRmllbGRTeW1ib2xzOiBNYXA8c3RyaW5nLCBGaWVsZFN5bWJvbD4gPSBuZXcgTWFwKCk7XG5cdHN0YXRpY0ZpZWxkU3ltYm9sczogTWFwPHN0cmluZywgRmllbGRTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRpbnN0YW5jZU1ldGhvZFN5bWJvbHM6IE1hcDxzdHJpbmcsIE1ldGhvZFN5bWJvbD4gPSBuZXcgTWFwKCk7XG5cdHN0YXRpY01ldGhvZFN5bWJvbHM6IE1hcDxzdHJpbmcsIE1ldGhvZFN5bWJvbD4gPSBuZXcgTWFwKCk7XG5cdGNvbnN0cnVjdG9yTWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wgfCBudWxsID0gbnVsbDtcblx0aW1wbGVtZW50c0ludGVyZmFjZXM6IEludGVyZmFjZVJlZlR5cGVbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKG5vZGU6IEFTVENsYXNzTm9kZSkge1xuXHRcdHRoaXMubm9kZSA9IG5vZGU7XG5cdFx0dGhpcy5uYW1lID0gbm9kZS5uYW1lO1xuXHRcdHRoaXMuc3VwZXJDbGFzcyA9IG5vZGUuc3VwZXJDbGFzcz8ubmFtZSA/PyBudWxsO1xuXHR9XG5cblx0cmVzb2x2ZUluc3RhbmNlRmllbGRTeW1ib2wobmFtZTogc3RyaW5nKTogRmllbGRTeW1ib2wgfCBudWxsIHtcblx0XHRpZiAodGhpcy5pbnN0YW5jZUZpZWxkU3ltYm9scy5oYXMobmFtZSkpIHtcblx0XHRcdHJldHVybiB0aGlzLmluc3RhbmNlRmllbGRTeW1ib2xzLmdldChuYW1lKSB8fCBudWxsO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnN1cGVyQ2xhc3MpIHtcblx0XHRcdHJldHVybiB0aGlzLnN1cGVyQ2xhc3NTeW1ib2w/LnJlc29sdmVJbnN0YW5jZUZpZWxkU3ltYm9sKG5hbWUpIHx8IG51bGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXNvbHZlU3RhdGljRmllbGRTeW1ib2wobmFtZTogc3RyaW5nKTogRmllbGRTeW1ib2wgfCBudWxsIHtcblx0XHRpZiAodGhpcy5zdGF0aWNGaWVsZFN5bWJvbHMuaGFzKG5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdGF0aWNGaWVsZFN5bWJvbHMuZ2V0KG5hbWUpIHx8IG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc3VwZXJDbGFzcykge1xuXHRcdFx0cmV0dXJuIHRoaXMuc3VwZXJDbGFzc1N5bWJvbD8ucmVzb2x2ZVN0YXRpY0ZpZWxkU3ltYm9sKG5hbWUpIHx8IG51bGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEludGVyZmFjZVN5bWJvbCBpbXBsZW1lbnRzIE9iamVjdFN5bWJvbCB7XG5cdHJlYWRvbmx5IG5vZGU6IEFTVEludGVyZmFjZU5vZGU7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblxuXHR0eXBlUGFyYW1ldGVyU3ltYm9sczogVHlwZVBhcmFtZXRlclN5bWJvbFtdID0gW107XG5cdHN0YXRpY0ZpZWxkU3ltYm9sczogTWFwPHN0cmluZywgRmllbGRTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRpbnN0YW5jZU1ldGhvZFN5bWJvbHM6IE1hcDxzdHJpbmcsIE1ldGhvZFN5bWJvbD4gPSBuZXcgTWFwKCk7XG5cdGV4dGVuZHNJbnRlcmZhY2VzOiBJbnRlcmZhY2VTeW1ib2xbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKG5vZGU6IEFTVEludGVyZmFjZU5vZGUpIHtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHRcdHRoaXMubmFtZSA9IG5vZGUubmFtZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xhc3NSZWZUeXBlIGV4dGVuZHMgVHlwZSB7XG5cdHJlYWRvbmx5IGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbDtcblx0cmVhZG9ubHkgdHlwZUFyZ3VtZW50czogVHlwZVtdO1xuXG5cdGNvbnN0cnVjdG9yKGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCwgdHlwZUFyZ3VtZW50czogVHlwZVtdID0gW10pIHtcblx0XHRzdXBlcihDbGFzc1JlZlR5cGUuZm9ybWF0U3ltYm9sTmFtZShjbGFzc1N5bWJvbC5uYW1lLCB0eXBlQXJndW1lbnRzKSk7XG5cdFx0dGhpcy5jbGFzc1N5bWJvbCA9IGNsYXNzU3ltYm9sO1xuXHRcdHRoaXMudHlwZUFyZ3VtZW50cyA9IHR5cGVBcmd1bWVudHM7XG5cdH1cblxuXHRzdGF0aWMgZm9ybWF0U3ltYm9sTmFtZShuYW1lOiBzdHJpbmcsIHR5cGVBcmd1bWVudHM6IFR5cGVbXSkge1xuXHRcdGlmICh0eXBlQXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIGBjbGFzc1JlZlR5cGUoJHtuYW1lfSlgO1xuXHRcdH1cblxuXHRcdHJldHVybiBgY2xhc3NSZWZUeXBlKCR7bmFtZX08JHt0eXBlQXJndW1lbnRzLm1hcCh0eXBlID0+IHR5cGUudG9TdHJpbmcoKSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKCcsICcpfT4pYDtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAob3RoZXIgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGVcblx0XHRcdCYmIG90aGVyLmNsYXNzU3ltYm9sID09PSB0aGlzLmNsYXNzU3ltYm9sKTtcblx0fVxuXG5cdG92ZXJyaWRlIGFjY2VwdHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRpZiAoIXRoaXMuZXF1YWxzKG90aGVyKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmIChvdGhlciBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSkge1xuXHRcdFx0aWYgKHRoaXMudHlwZUFyZ3VtZW50cy5sZW5ndGggIT09IG90aGVyLnR5cGVBcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnR5cGVBcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3Qgb3RoZXJUeXBlID0gb3RoZXIudHlwZUFyZ3VtZW50c1tpXTtcblxuXHRcdFx0XHRpZiAoIW90aGVyVHlwZSB8fCAhdGhpcy50eXBlQXJndW1lbnRzW2ldPy5hY2NlcHRzKG90aGVyVHlwZSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2VSZWZUeXBlIGV4dGVuZHMgVHlwZSB7XG5cdHJlYWRvbmx5IGludGVyZmFjZVN5bWJvbDogSW50ZXJmYWNlU3ltYm9sO1xuXHRyZWFkb25seSB0eXBlQXJndW1lbnRzOiBUeXBlW107XG5cblx0Y29uc3RydWN0b3IoaW50ZXJmYWNlU3ltYm9sOiBJbnRlcmZhY2VTeW1ib2wsIHR5cGVBcmd1bWVudHM6IFR5cGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoSW50ZXJmYWNlUmVmVHlwZS5mb3JtYXRTeW1ib2xOYW1lKGludGVyZmFjZVN5bWJvbC5uYW1lLCB0eXBlQXJndW1lbnRzKSk7XG5cdFx0dGhpcy5pbnRlcmZhY2VTeW1ib2wgPSBpbnRlcmZhY2VTeW1ib2w7XG5cdFx0dGhpcy50eXBlQXJndW1lbnRzID0gdHlwZUFyZ3VtZW50cztcblx0fVxuXG5cdHN0YXRpYyBmb3JtYXRTeW1ib2xOYW1lKG5hbWU6IHN0cmluZywgdHlwZUFyZ3VtZW50czogVHlwZVtdKTogc3RyaW5nIHtcblx0XHRpZiAodHlwZUFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBgaW50ZXJmYWNlUmVmVHlwZSgke25hbWV9KWA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGBpbnRlcmZhY2VSZWZUeXBlKCR7bmFtZX08JHt0eXBlQXJndW1lbnRzLm1hcCh0eXBlID0+IHR5cGUudG9TdHJpbmcoKSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbignLCAnKX0+KWA7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gKG90aGVyIGluc3RhbmNlb2YgSW50ZXJmYWNlUmVmVHlwZVxuXHRcdFx0JiYgb3RoZXIuaW50ZXJmYWNlU3ltYm9sID09PSB0aGlzLmludGVyZmFjZVN5bWJvbCk7XG5cdH1cblxuXHRvdmVycmlkZSBhY2NlcHRzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0aWYgKCF0aGlzLmVxdWFscyhvdGhlcikpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAob3RoZXIgaW5zdGFuY2VvZiBJbnRlcmZhY2VSZWZUeXBlKSB7XG5cdFx0XHRpZiAodGhpcy50eXBlQXJndW1lbnRzLmxlbmd0aCAhPT0gb3RoZXIudHlwZUFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHlwZUFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBvdGhlclR5cGUgPSBvdGhlci50eXBlQXJndW1lbnRzW2ldO1xuXG5cdFx0XHRcdGlmICghb3RoZXJUeXBlIHx8ICF0aGlzLnR5cGVBcmd1bWVudHNbaV0/LmFjY2VwdHMob3RoZXJUeXBlKSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIExhbWJkYVR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0cmVhZG9ubHkgcGFyYW1ldGVyU3ltYm9sczogUGFyYW1ldGVyU3ltYm9sW10gPSBbXTtcblx0cmVhZG9ubHkgcmV0dXJuVHlwZTogVHlwZTtcblxuXHRjb25zdHJ1Y3RvcihwYXJhbWV0ZXJzOiBQYXJhbWV0ZXJTeW1ib2xbXSwgcmV0dXJuVHlwZTogVHlwZSkge1xuXHRcdHN1cGVyKExhbWJkYVR5cGUuY3JlYXRlU2lnbmF0dXJlKHBhcmFtZXRlcnMsIHJldHVyblR5cGUpKTtcblx0XHR0aGlzLnBhcmFtZXRlclN5bWJvbHMgPSBwYXJhbWV0ZXJzO1xuXHRcdHRoaXMucmV0dXJuVHlwZSA9IHJldHVyblR5cGU7XG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlU2lnbmF0dXJlKHBhcmFtZXRlcnM6IFBhcmFtZXRlclN5bWJvbFtdLCByZXR1cm5UeXBlOiBUeXBlKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gYGxhbWJkYSgke3BhcmFtZXRlcnMubWFwKHBhcmFtZXRlciA9PiBwYXJhbWV0ZXIucGFyYW1ldGVyVHlwZS50b1N0cmluZygpKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKCcsICcpfSkgLT4gJHtyZXR1cm5UeXBlLnRvU3RyaW5nKCl9KWA7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRpZiAoIShvdGhlciBpbnN0YW5jZW9mIExhbWJkYVR5cGUpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucGFyYW1ldGVyU3ltYm9scy5sZW5ndGggIT09IG90aGVyLnBhcmFtZXRlclN5bWJvbHMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcmFtZXRlclN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IG90aGVyVHlwZSA9IG90aGVyLnBhcmFtZXRlclN5bWJvbHNbaV0/LnBhcmFtZXRlclR5cGU7XG5cblx0XHRcdGlmICghb3RoZXJUeXBlIHx8ICF0aGlzLnBhcmFtZXRlclN5bWJvbHNbaV0/LnBhcmFtZXRlclR5cGUuYWNjZXB0cyhvdGhlclR5cGUpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXR1cm5UeXBlLmFjY2VwdHMob3RoZXIucmV0dXJuVHlwZSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGVTY29wZSB7XG5cdHJlYWRvbmx5IHBhcmVudDogVHlwZVNjb3BlIHwgbnVsbDtcblx0cmVhZG9ubHkgdHlwZXM6IE1hcDxzdHJpbmcsIFR5cGU+ID0gbmV3IE1hcCgpO1xuXHRyZWFkb25seSB0eXBlQmluZGluZ3M6IE1hcDxzdHJpbmcsIFR5cGU+ID0gbmV3IE1hcCgpO1xuXG5cdGN1cnJlbnRPYmplY3RTeW1ib2w6IENsYXNzU3ltYm9sIHwgSW50ZXJmYWNlU3ltYm9sIHwgbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFR5cGVTY29wZSB8IG51bGwgPSBudWxsKSB7XG5cdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cdFx0dGhpcy5jdXJyZW50T2JqZWN0U3ltYm9sID0gcGFyZW50Py5jdXJyZW50T2JqZWN0U3ltYm9sID8/IG51bGw7XG5cdH1cblxuXHRkZWZpbmVUeXBlKG5hbWU6IHN0cmluZywgdHlwZTogVHlwZSk6IHZvaWQge1xuXHRcdHRoaXMudHlwZXMuc2V0KG5hbWUsIHR5cGUpO1xuXHR9XG5cblx0ZGVmaW5lVHlwZUJpbmRpbmcobmFtZTogc3RyaW5nLCB0eXBlVmFyaWFibGU6IFR5cGVWYXJpYWJsZSk6IHZvaWQge1xuXHRcdHRoaXMudHlwZUJpbmRpbmdzLnNldChuYW1lLCB0eXBlVmFyaWFibGUpO1xuXHR9XG5cblx0aGFzVHlwZShuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy50eXBlcy5oYXMobmFtZSkgfHwgdGhpcy5wYXJlbnQ/Lmhhc1R5cGUobmFtZSkgfHwgZmFsc2U7XG5cdH1cblxuXHRoYXNUeXBlQmluZGluZyhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy50eXBlQmluZGluZ3MuaGFzKG5hbWUpIHx8IHRoaXMucGFyZW50Py5oYXNUeXBlQmluZGluZyhuYW1lKSB8fCBmYWxzZTtcblx0fVxuXG5cdGdldFR5cGUobmFtZTogc3RyaW5nKTogVHlwZSB7XG5cdFx0aWYgKHRoaXMudHlwZXMuaGFzKG5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50eXBlcy5nZXQobmFtZSkgfHwgVHlwZXMuTlVMTDtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMucGFyZW50Py5nZXRUeXBlKG5hbWUpIHx8IFR5cGVzLk5VTEw7XG5cdH1cblxuXHRnZXRUeXBlQmluZGluZyhuYW1lOiBzdHJpbmcpOiBUeXBlIHtcblx0XHRpZiAodGhpcy50eXBlQmluZGluZ3MuaGFzKG5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50eXBlQmluZGluZ3MuZ2V0KG5hbWUpIHx8IFR5cGVzLk5VTEw7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnBhcmVudD8uZ2V0VHlwZUJpbmRpbmcobmFtZSkgfHwgVHlwZXMuTlVMTDtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gd3JhcFR5cGUodHlwZU5vZGU6IEFTVFR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIHNjb3BlOiBUeXBlU2NvcGUgfCBudWxsID0gbnVsbCk6IFR5cGUge1xuXHRsZXQgYmFzZVR5cGUgPSByZXNvbHZlQmFzZVR5cGUodHlwZU5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBzY29wZSk7XG5cdGlmIChiYXNlVHlwZSkge1xuXHRcdGlmICghKGJhc2VUeXBlIGluc3RhbmNlb2YgTnVsbGFibGVUeXBlKSAmJiB0eXBlTm9kZS5udWxsYWJsZSkge1xuXHRcdFx0cmV0dXJuIG5ldyBOdWxsYWJsZVR5cGUoYmFzZVR5cGUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBiYXNlVHlwZTtcblx0fVxuXG5cdHRocm93VHlwZUVycm9yKGBDb3VsZCBub3QgcmVzb2x2ZSB0eXBlICR7dHlwZU5vZGUubmFtZX0uYCwgdHlwZU5vZGUuc3Bhbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlQmFzZVR5cGUodHlwZU5vZGU6IEFTVFR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIHNjb3BlOiBUeXBlU2NvcGUgfCBudWxsID0gbnVsbCk6IFR5cGUge1xuXHRzd2l0Y2ggKHR5cGVOb2RlLmtpbmQpIHtcblx0XHRjYXNlIEFTVFR5cGVOb2RlLktJTkRfU0lNUExFOiB7XG5cdFx0XHRpZiAoc2NvcGUgJiYgc2NvcGUuaGFzVHlwZUJpbmRpbmcodHlwZU5vZGUubmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIHNjb3BlLmdldFR5cGVCaW5kaW5nKHR5cGVOb2RlLm5hbWUpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAob2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiByZXNvbHZlUmVmVHlwZSh0eXBlTm9kZSwgb2JqZWN0UmVnaXN0cnkpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoUHJpbWl0aXZlVHlwZXMuaGFzVHlwZSh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzb2x2ZVByaW1pdGl2ZVR5cGUodHlwZU5vZGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbmV3IFR5cGVWYXJpYWJsZSh0eXBlTm9kZS5uYW1lKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1RUeXBlTm9kZS5LSU5EX0dFTkVSSUM6IHtcblx0XHRcdGlmICghb2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0XHRcdHRocm93VHlwZUVycm9yKGBTeW1ib2wgJHt0eXBlTm9kZS5uYW1lfSBpcyBub3QgYSBjbGFzcyByZWZlcmVuY2UuYCwgdHlwZU5vZGUuc3Bhbik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzb2x2ZUdlbmVyaWNSZWZUeXBlKHR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeSk7XG5cdFx0fVxuXHRcdGNhc2UgQVNUVHlwZU5vZGUuS0lORF9MQU1CREE6IHtcblx0XHRcdHJldHVybiByZXNvbHZlTGFtYmRhVHlwZSh0eXBlTm9kZSwgb2JqZWN0UmVnaXN0cnkpO1xuXHRcdH1cblx0XHRkZWZhdWx0OiB7XG5cdFx0XHR0aHJvd1R5cGVFcnJvcihcblx0XHRcdFx0YEludmFsaWQgdHlwZSBhbm5vdGF0aW9uLCBraW5kICR7dHlwZU5vZGUua2luZH0uYCxcblx0XHRcdFx0dHlwZU5vZGUuc3BhblxuXHRcdFx0KTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVSZWZUeXBlKHR5cGVOb2RlOiBBU1RUeXBlTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogQ2xhc3NSZWZUeXBlIHwgSW50ZXJmYWNlUmVmVHlwZSB8IFR5cGUge1xuXHRpZiAodHlwZU5vZGUudHlwZUFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0dGhyb3dUeXBlRXJyb3IoYEdlbmVyaWMgY2xhc3MgJHt0eXBlTm9kZS5uYW1lfSBjYW5ub3QgaGF2ZSB0eXBlIGFyZ3VtZW50cy5gLCB0eXBlTm9kZS5zcGFuKTtcblx0fVxuXG5cdGlmIChvYmplY3RSZWdpc3RyeS50eXBlcy5jbGFzc1N5bWJvbHMuaGFzKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0cmV0dXJuIG5ldyBDbGFzc1JlZlR5cGUob2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2wodHlwZU5vZGUubmFtZSkpO1xuXHR9XG5cblx0aWYgKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmludGVyZmFjZVN5bWJvbHMuaGFzKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0cmV0dXJuIG5ldyBJbnRlcmZhY2VSZWZUeXBlKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldEludGVyYWNlU3ltYm9sKHR5cGVOb2RlLm5hbWUpKTtcblx0fVxuXG5cdHRocm93VHlwZUVycm9yKGBVbmtub3duIGNsYXNzIG9yIGludGVyZmFjZSAke3R5cGVOb2RlLm5hbWV9LmAsIHR5cGVOb2RlLnNwYW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUdlbmVyaWNSZWZUeXBlKHR5cGVOb2RlOiBBU1RUeXBlTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogQ2xhc3NSZWZUeXBlIHwgSW50ZXJmYWNlUmVmVHlwZSB8IFR5cGUge1xuXHRpZiAob2JqZWN0UmVnaXN0cnkudHlwZXMuY2xhc3NTeW1ib2xzLmhhcyh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdHJldHVybiBuZXcgQ2xhc3NSZWZUeXBlKFxuXHRcdFx0b2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2wodHlwZU5vZGUubmFtZSksXG5cdFx0XHR0eXBlTm9kZS50eXBlQXJndW1lbnRzLm1hcCh0eXBlQXJndW1lbnQgPT4gcmVzb2x2ZUJhc2VUeXBlKHR5cGVBcmd1bWVudCwgb2JqZWN0UmVnaXN0cnkpKVxuXHRcdCk7XG5cdH1cblxuXHRpZiAob2JqZWN0UmVnaXN0cnkudHlwZXMuaW50ZXJmYWNlU3ltYm9scy5oYXModHlwZU5vZGUubmFtZSkpIHtcblx0XHRyZXR1cm4gbmV3IEludGVyZmFjZVJlZlR5cGUoXG5cdFx0XHRvYmplY3RSZWdpc3RyeS50eXBlcy5nZXRJbnRlcmFjZVN5bWJvbCh0eXBlTm9kZS5uYW1lKSxcblx0XHRcdHR5cGVOb2RlLnR5cGVBcmd1bWVudHMubWFwKHR5cGVBcmd1bWVudCA9PiByZXNvbHZlQmFzZVR5cGUodHlwZUFyZ3VtZW50LCBvYmplY3RSZWdpc3RyeSkpXG5cdFx0KTtcblx0fVxuXG5cdHRocm93VHlwZUVycm9yKGBVbmtub3duIGNsYXNzIG9yIGludGVyZmFjZSAke3R5cGVOb2RlLm5hbWV9LmAsIHR5cGVOb2RlLnNwYW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVByaW1pdGl2ZVR5cGUodHlwZU5vZGU6IEFTVFR5cGVOb2RlKTogVHlwZSB7XG5cdHJldHVybiBUeXBlcy5nZXRUeXBlKHR5cGVOb2RlLm5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUxhbWJkYVR5cGUodHlwZU5vZGU6IEFTVFR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIHNjb3BlOiBUeXBlU2NvcGUgfCBudWxsID0gbnVsbCk6IExhbWJkYVR5cGUge1xuXHRjb25zdCBwYXJhbWV0ZXJTeW1ib2xzID0gdHlwZU5vZGUucGFyYW1ldGVyVHlwZXMubWFwKFxuXHRcdHR5cGVBbm5vdGF0aW9uID0+IHtcblx0XHRcdHJldHVybiBuZXcgUGFyYW1ldGVyU3ltYm9sKFxuXHRcdFx0XHR0eXBlQW5ub3RhdGlvbi5uYW1lLFxuXHRcdFx0XHR3cmFwVHlwZSh0eXBlQW5ub3RhdGlvbiwgb2JqZWN0UmVnaXN0cnksIHNjb3BlKVxuXHRcdFx0KTtcblx0XHR9XG5cdCk7XG5cblx0cmV0dXJuIG5ldyBMYW1iZGFUeXBlKFxuXHRcdHBhcmFtZXRlclN5bWJvbHMsXG5cdFx0dHlwZU5vZGUucmV0dXJuVHlwZVxuXHRcdFx0PyB3cmFwVHlwZSh0eXBlTm9kZS5yZXR1cm5UeXBlLCBvYmplY3RSZWdpc3RyeSwgc2NvcGUpXG5cdFx0XHQ6IFR5cGVzLk1JWEVEXG5cdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdGl0dXRlVHlwZSh0eXBlOiBUeXBlLCBzdWJzdGl0dXRpb25NYXA6IE1hcDxzdHJpbmcsIFR5cGU+KTogVHlwZSB7XG5cdGlmICh0eXBlIGluc3RhbmNlb2YgVHlwZVZhcmlhYmxlKSB7XG5cdFx0cmV0dXJuIHN1YnN0aXR1dGlvbk1hcC5nZXQodHlwZS5uYW1lKSA/PyB0eXBlO1xuXHR9XG5cblx0aWYgKHR5cGUgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUpIHtcblx0XHRyZXR1cm4gbmV3IENsYXNzUmVmVHlwZShcblx0XHRcdHR5cGUuY2xhc3NTeW1ib2wsXG5cdFx0XHR0eXBlLnR5cGVBcmd1bWVudHMubWFwKHR5cGVBcmd1bWVudCA9PiBzdWJzdGl0dXRlVHlwZSh0eXBlQXJndW1lbnQsIHN1YnN0aXR1dGlvbk1hcCkpXG5cdFx0KTtcblx0fVxuXG5cdGlmICh0eXBlIGluc3RhbmNlb2YgTnVsbGFibGVUeXBlKSB7XG5cdFx0cmV0dXJuIG5ldyBOdWxsYWJsZVR5cGUoc3Vic3RpdHV0ZVR5cGUodHlwZS5pbm5lciwgc3Vic3RpdHV0aW9uTWFwKSk7XG5cdH1cblxuXHRyZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkVHlwZVN1YnN0aXR1dGlvbk1hcCh0eXBlUGFyYW1ldGVyczogVHlwZVBhcmFtZXRlclN5bWJvbFtdLCB0eXBlQXJndW1lbnRzOiBUeXBlW10pOiBNYXA8c3RyaW5nLCBUeXBlPiB7XG5cdGNvbnN0IHN1YnN0aXR1dGlvbk1hcCA9IG5ldyBNYXAoKTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHR5cGVQYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgdHlwZVBhcmFtZXRlcjogVHlwZVBhcmFtZXRlclN5bWJvbCB8IG51bGwgPSB0eXBlUGFyYW1ldGVyc1tpXSB8fCBudWxsO1xuXHRcdGNvbnN0IHR5cGVBcmd1bWVudDogVHlwZSB8IG51bGwgPSB0eXBlQXJndW1lbnRzW2ldIHx8IG51bGw7XG5cblx0XHRpZiAodHlwZVBhcmFtZXRlciAmJiB0eXBlQXJndW1lbnQpIHtcblx0XHRcdHN1YnN0aXR1dGlvbk1hcC5zZXQodHlwZVBhcmFtZXRlci5uYW1lLCB0eXBlQXJndW1lbnQpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdWJzdGl0dXRpb25NYXA7XG59XG4iLAogICAgImltcG9ydCB7Q2xhc3NSZWZUeXBlLCBUeXBlLCBUeXBlc30gZnJvbSBcIi4vdHlwZV9vYmplY3RzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB7dGhyb3dSdW50aW1lRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcblxuZXhwb3J0IGNsYXNzIEF1dG9ib3hlZFR5cGVzIHtcblx0c3RhdGljIE5VTUJFUjogc3RyaW5nID0gJ051bWJlcic7XG5cdHN0YXRpYyBTVFJJTkc6IHN0cmluZyA9ICdTdHJpbmcnO1xuXHRzdGF0aWMgQk9PTEVBTjogc3RyaW5nID0gJ0Jvb2xlYW4nO1xuXG5cdHN0YXRpYyBDTEFTU05BTUVfTUFQOiB7IFtzOiBzdHJpbmddOiBzdHJpbmc7IH0gPSB7XG5cdFx0bnVtYmVyOiBBdXRvYm94ZWRUeXBlcy5OVU1CRVIsXG5cdFx0c3RyaW5nOiBBdXRvYm94ZWRUeXBlcy5TVFJJTkcsXG5cdFx0Ym9vbGVhbjogQXV0b2JveGVkVHlwZXMuQk9PTEVBTlxuXHR9O1xuXG5cdHN0YXRpYyBnZXRDbGFzc05hbWUoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdGNvbnN0IGNsYXNzTmFtZSA9IEF1dG9ib3hlZFR5cGVzLkNMQVNTTkFNRV9NQVBba2V5XTtcblx0XHRpZiAoIWNsYXNzTmFtZSkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYE5vIGNsYXNzIGZvdW5kIGZvciBwcmltaXRpdmUgdHlwZSAke2tleX0uYCk7XG5cdFx0fVxuXHRcdHJldHVybiBjbGFzc05hbWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9ib3hpbmcge1xuXHRzdGF0aWMgQ0xBU1NOQU1FX01BUDogTWFwPFR5cGUsIHN0cmluZz4gPSBuZXcgTWFwKFxuXHRcdFtcblx0XHRcdFtUeXBlcy5OVU1CRVIsIEF1dG9ib3hlZFR5cGVzLk5VTUJFUl0sXG5cdFx0XHRbVHlwZXMuU1RSSU5HLCBBdXRvYm94ZWRUeXBlcy5TVFJJTkddLFxuXHRcdFx0W1R5cGVzLkJPT0xFQU4sIEF1dG9ib3hlZFR5cGVzLkJPT0xFQU5dXG5cdFx0XVxuXHQpO1xuXG5cdHN0YXRpYyBhdXRvYm94SWZOZWVkZWQob2JqZWN0VHlwZTogVHlwZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogQ2xhc3NSZWZUeXBlIHwgVHlwZSB7XG5cdFx0Y29uc3QgY2xhc3NOYW1lID0gQXV0b2JveGluZy5DTEFTU05BTUVfTUFQLmdldChvYmplY3RUeXBlKTtcblx0XHRpZiAoY2xhc3NOYW1lKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENsYXNzUmVmVHlwZShvYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChjbGFzc05hbWUpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gb2JqZWN0VHlwZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0NsYXNzRGVmaW5pdGlvbiwgQ2xhc3NNZXRob2REZWZpbml0aW9uLCBFbnZpcm9ubWVudCwgSW5zdGFuY2UsIFJldHVyblZhbHVlfSBmcm9tIFwiLi9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuaW1wb3J0IHtcblx0QVNUQW5ub3RhdGlvbk5vZGUsXG5cdEFTVEFycmF5Tm9kZSxcblx0QVNUQXNzaWdubWVudE5vZGUsXG5cdEFTVEJpbmFyeU5vZGUsXG5cdEFTVENhbGxOb2RlLFxuXHRBU1RDbGFzc05vZGUsXG5cdEFTVEV4cHJlc3Npb25Ob2RlLFxuXHRBU1RGb3JlYWNoTm9kZSxcblx0QVNUSWZOb2RlLFxuXHRBU1RJbmRleE5vZGUsXG5cdEFTVExhbWJkYU5vZGUsXG5cdEFTVE1hdGNoQ2FzZU5vZGUsXG5cdEFTVE1hdGNoTm9kZSxcblx0QVNUTWVtYmVyTm9kZSxcblx0QVNUTWV0aG9kTm9kZSxcblx0QVNUTmV3Tm9kZSxcblx0QVNUTm9kZSxcblx0QVNUTm9kZVR5cGUsXG5cdEFTVFBhcmFtZXRlck5vZGUsXG5cdEFTVFJldHVybk5vZGUsXG5cdEFTVFR5cGVOb2RlLFxuXHRBU1RVbmFyeU5vZGUsXG5cdEFTVFZhcmlhYmxlTm9kZSxcblx0QVNUVkRvbU5vZGUsXG5cdEFTVFZEb21UZXh0Tm9kZVxufSBmcm9tIFwiLi4vYXN0XCI7XG5pbXBvcnQge0dSQU1NQVIsIFRZUEVfRU5VTX0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcbmltcG9ydCB7TmF0aXZlQ2xhc3Nlc30gZnJvbSBcIi4uLy4uL2xpYnJhcnkvbmF0aXZlX2NsYXNzZXNcIjtcbmltcG9ydCB7TmF0aXZlRnVuY3Rpb24sIE5hdGl2ZUZ1bmN0aW9ucywgTmF0aXZlRnVuY3Rpb25UeXBlUmVnaXN0cnl9IGZyb20gXCIuLi8uLi9saWJyYXJ5L25hdGl2ZV9mdW5jdGlvbnNcIjtcbmltcG9ydCB7Y2FzdFZhbHVlLCBmcm9tTHlyYVZhbHVlLCBMeXJhTmF0aXZlT2JqZWN0LCByZXR1cm5WYWx1ZSwgd3JhcE5hdGl2ZUluc3RhbmNlfSBmcm9tIFwiLi9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge3Rocm93UnVudGltZUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQge0F1dG9ib3hlZFR5cGVzfSBmcm9tIFwiLi4vdHlwZXMvYXV0b2JveGluZ1wiO1xuaW1wb3J0IHtMeXJhQXJyYXl9IGZyb20gXCIuLi8uLi9saWJyYXJ5L2NsYXNzZXMvYXJyYXlcIjtcbmltcG9ydCB0eXBlIHtTb3VyY2VTcGFufSBmcm9tIFwiLi4vcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcbmltcG9ydCB0eXBlIHtWTm9kZX0gZnJvbSBcIi4uL3Zkb20vdmRvbVwiO1xuXG5jb25zdCBuYXRpdmVDbGFzc2VzID0gbmV3IE5hdGl2ZUNsYXNzZXMoKTtcbmNvbnN0IG5hdGl2ZUZ1bmN0aW9ucyA9IG5ldyBOYXRpdmVGdW5jdGlvbnMoKTtcbmNvbnN0IGdsb2JhbEZ1bmN0aW9ucyA9IG5hdGl2ZUZ1bmN0aW9ucy5nZXRHbG9iYWxGdW5jdGlvbnMoKTtcbmNvbnN0IGdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5OiBOYXRpdmVGdW5jdGlvblR5cGVSZWdpc3RyeSA9IG5hdGl2ZUZ1bmN0aW9ucy5nZXRHbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeSgpO1xuXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RGdW5jdGlvbkNhbGwge1xuXHRub2RlOiBBU1ROb2RlO1xuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cdGZ1bmN0aW9uRW52OiBFbnZpcm9ubWVudDtcblxuXHRjb25zdHJ1Y3Rvcihub2RlOiBBU1ROb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGZ1bmN0aW9uRW52OiBFbnZpcm9ubWVudCkge1xuXHRcdHRoaXMubm9kZSA9IG5vZGU7XG5cdFx0dGhpcy5vYmplY3RSZWdpc3RyeSA9IG9iamVjdFJlZ2lzdHJ5O1xuXHRcdHRoaXMuZnVuY3Rpb25FbnYgPSBmdW5jdGlvbkVudjtcblx0fVxuXG5cdGdldEFTVENhbGxOb2RlKCk6IEFTVENhbGxOb2RlIHtcblx0XHRpZiAoISh0aGlzLm5vZGUgaW5zdGFuY2VvZiBBU1RDYWxsTm9kZSkpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIG5hdGl2ZSBmdW5jdGlvbiBjYWxsICR7dGhpcy5ub2RlLnR5cGV9LmAsIHRoaXMubm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMubm9kZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtBU1RMYW1iZGFOb2RlfVxuXHQgKi9cblx0Z2V0QVNUTGFtYmRhTm9kZSgpOiBBU1RMYW1iZGFOb2RlIHtcblx0XHRpZiAoISh0aGlzLm5vZGUgaW5zdGFuY2VvZiBBU1RMYW1iZGFOb2RlKSkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgbGFtYmRhIGNhbGwgJHt0aGlzLm5vZGUudHlwZX0uYCwgdGhpcy5ub2RlLnNwYW4pO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5ub2RlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMYW1iZGFGdW5jdGlvbkNhbGwgZXh0ZW5kcyBBYnN0cmFjdEZ1bmN0aW9uQ2FsbCB7XG5cdGV2YWxDYWxsKHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsLCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XG5cdFx0Y29uc3Qgbm9kZTogQVNUTGFtYmRhTm9kZSA9IHRoaXMuZ2V0QVNUTGFtYmRhTm9kZSgpO1xuXHRcdGNvbnN0IGNsb3N1cmVFbnYgPSBuZXcgRW52aXJvbm1lbnQodGhpcy5mdW5jdGlvbkVudik7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUucGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgcGFyYW1ldGVyOiBBU1RQYXJhbWV0ZXJOb2RlIHwgbnVsbCA9IG5vZGUucGFyYW1ldGVyc1tpXSB8fCBudWxsO1xuXHRcdFx0aWYgKCFwYXJhbWV0ZXIpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRjbG9zdXJlRW52LmRlZmluZShwYXJhbWV0ZXIubmFtZSwgYXJnc1tpXSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2YWxCbG9jayhub2RlLmNoaWxkcmVuLCB0aGlzLm9iamVjdFJlZ2lzdHJ5LCBjbG9zdXJlRW52LCB0aGlzVmFsdWUsIG5vZGUucmV0dXJuVHlwZSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE5hdGl2ZUZ1bmN0aW9uQ2FsbCBleHRlbmRzIEFic3RyYWN0RnVuY3Rpb25DYWxsIHtcblx0ZXZhbENhbGwodGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwsIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcblx0XHRjb25zdCBjYWxsTm9kZTogQVNUQ2FsbE5vZGUgPSB0aGlzLmdldEFTVENhbGxOb2RlKCk7XG5cblx0XHRsZXQgcmVzdWx0OiBhbnkgPSB0aGlzLnJlc29sdmVDYWxsKHRoaXNWYWx1ZSlbY2FsbE5vZGUuY2FsbGVlLm5hbWVdKC4uLmFyZ3MpO1xuXHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRyZXN1bHQgPSB3cmFwTmF0aXZlSW5zdGFuY2UocmVzdWx0LCB0aGlzLm9iamVjdFJlZ2lzdHJ5KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0ID0gcmV0dXJuVmFsdWUocmVzdWx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZhbEJsb2NrKFxuXHRcdFx0W3Jlc3VsdF0sXG5cdFx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0dGhpcy5mdW5jdGlvbkVudixcblx0XHRcdHRoaXNWYWx1ZSxcblx0XHRcdHRoaXMubG9va3VwRnVuY3Rpb25UeXBlKGNhbGxOb2RlLmNhbGxlZS5uYW1lKS5yZXR1cm5UeXBlXG5cdFx0KTtcblx0fVxuXG5cdGxvb2t1cEZ1bmN0aW9uVHlwZShuYW1lOiBzdHJpbmcpOiBOYXRpdmVGdW5jdGlvbiB7XG5cdFx0cmV0dXJuIGdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5LmdldChuYW1lKTtcblx0fVxuXG5cdHJlc29sdmVDYWxsKHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsKTogYW55IHtcblx0XHRjb25zdCBub2RlOiBBU1RDYWxsTm9kZSB8IG51bGwgPSB0aGlzLmdldEFTVENhbGxOb2RlKCk7XG5cdFx0aWYgKG5vZGUgPT09IG51bGwpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKFwiSW52YWxpZCBmdW5jdGlvbiBjYWxsLlwiKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZhbEV4cHJlc3Npb24obm9kZS5jYWxsZWUsIHRoaXMub2JqZWN0UmVnaXN0cnksIHRoaXMuZnVuY3Rpb25FbnYsIHRoaXNWYWx1ZSk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTmF0aXZlQ2xhc3NlcyhvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCk6IHZvaWQge1xuXHRmb3IgKGNvbnN0IG5hdGl2ZUNsYXNzIG9mIG5hdGl2ZUNsYXNzZXMucmVnaXN0cnkudmFsdWVzKCkpIHtcblx0XHRpZiAobmF0aXZlQ2xhc3MuaXNBdXRvbG9hZEFibGUpIHtcblx0XHRcdGNvbnN0IGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24gPSBuYXRpdmVDbGFzcy5nZXRDbGFzc0RlZmluaXRpb24oKTtcblx0XHRcdG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuc2V0KG5hdGl2ZUNsYXNzLm5hbWUsIGNsYXNzRGVmKTtcblx0XHRcdGVudmlyb25tZW50LmRlZmluZShuYXRpdmVDbGFzcy5uYW1lLCBjbGFzc0RlZik7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck5hdGl2ZUZ1bmN0aW9ucyhlbnZpcm9ubWVudDogRW52aXJvbm1lbnQpOiB2b2lkIHtcblx0Zm9yIChjb25zdCBuYW1lIGluIGdsb2JhbEZ1bmN0aW9ucykge1xuXHRcdGNvbnN0IGdsb2JhbEZ1bmN0aW9uOiBhbnkgPSBnbG9iYWxGdW5jdGlvbnNbbmFtZV07XG5cdFx0aWYgKCFnbG9iYWxGdW5jdGlvbikge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoXCJHbG9iYWwgZnVuY3Rpb24gaXMgbnVsbC5cIik7XG5cdFx0fVxuXHRcdGVudmlyb25tZW50LmRlZmluZShuYW1lLCBnbG9iYWxGdW5jdGlvbnMpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsTm9kZShub2RlOiBBU1ROb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0aWYgKG5vZGUuaXNFeHByZXNzaW9uKSB7XG5cdFx0cmV0dXJuIG5ldyBSZXR1cm5WYWx1ZShldmFsRXhwcmVzc2lvbihub2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSkpO1xuXHR9XG5cblx0c3dpdGNoIChub2RlLnR5cGUpIHtcblx0XHRjYXNlIEFTVE5vZGVUeXBlLlBST0dSQU1NOiB7XG5cdFx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcblx0XHRcdFx0ZXZhbE5vZGUoY2hpbGQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLklNUE9SVDpcblx0XHRjYXNlIEFTVE5vZGVUeXBlLklOVEVSRkFDRToge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuQ0xBU1M6IHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUQ2xhc3NOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsQ2xhc3Mobm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50KTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGNsYXNzIG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuVkFSSUFCTEU6IHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUVmFyaWFibGVOb2RlKSB7XG5cdFx0XHRcdGNvbnN0IHZhbHVlID0gbm9kZS5pbml0XG5cdFx0XHRcdFx0PyBldmFsRXhwcmVzc2lvbihub2RlLmluaXQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKVxuXHRcdFx0XHRcdDogbnVsbDtcblx0XHRcdFx0ZW52aXJvbm1lbnQuZGVmaW5lKG5vZGUubmFtZSwgdmFsdWUpO1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIHZhcmlhYmxlIG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuSUY6IHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUSWZOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsSWYobm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgaWYgbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5NQVRDSDoge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RNYXRjaE5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxNYXRjaChub2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBtYXRjaCBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkZPUkVBQ0g6IHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNURm9yZWFjaE5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxGb3JlYWNoKG5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGZvcmVhY2ggbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5FWFBSRVNTSU9OOiB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEV4cHJlc3Npb25Ob2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsRXhwcmVzc2lvbihub2RlLmV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGV4cHJlc3Npb24gbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5SRVRVUk46IHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUUmV0dXJuTm9kZSkge1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IG5vZGUuYXJndW1lbnRcblx0XHRcdFx0XHQ/IGV2YWxFeHByZXNzaW9uKG5vZGUuYXJndW1lbnQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKVxuXHRcdFx0XHRcdDogbnVsbDtcblx0XHRcdFx0cmV0dXJuIG5ldyBSZXR1cm5WYWx1ZSh2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCByZXR1cm4gbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0ZGVmYXVsdDoge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVuaGFuZGxlZCBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlLnNwYW4pO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0RW1wdHlJbnN0YW5jZShub2RlOiBBU1RDbGFzc05vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IEluc3RhbmNlIHtcblx0bGV0IGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb247XG5cblx0aWYgKG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuaGFzKG5vZGUubmFtZSkpIHtcblx0XHRjbGFzc0RlZiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KG5vZGUubmFtZSk7XG5cdH0gZWxzZSB7XG5cdFx0Y2xhc3NEZWYgPSBDbGFzc0RlZmluaXRpb24uZnJvbUFTVChub2RlKTtcblx0XHRvYmplY3RSZWdpc3RyeS5jbGFzc2VzLnNldChub2RlLm5hbWUsIGNsYXNzRGVmKTtcblx0fVxuXG5cdHJldHVybiBjbGFzc0RlZi5jb25zdHJ1Y3RFbXB0eUluc3RhbmNlKG9iamVjdFJlZ2lzdHJ5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdE5hdGl2ZUluc3RhbmNlKGV4cHI6IEFTVE5ld05vZGUsIGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogSW5zdGFuY2Uge1xuXHRyZXR1cm4gY2xhc3NEZWYuY29uc3RydWN0TmF0aXZlSW5zdGFuY2VCeU5ld05vZGUoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEluc3RhbmNlKGV4cHI6IEFTVE5ld05vZGUsIGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogSW5zdGFuY2Uge1xuXHRyZXR1cm4gY2xhc3NEZWYuY29uc3RydWN0SW5zdGFuY2VCeU5ld05vZGUoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxDbGFzcyhub2RlOiBBU1RDbGFzc05vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogdm9pZCB7XG5cdGNvbnN0IGluc3RhbmNlOiBJbnN0YW5jZSA9IGNvbnN0cnVjdEVtcHR5SW5zdGFuY2Uobm9kZSwgb2JqZWN0UmVnaXN0cnkpO1xuXG5cdGluc3RhbmNlLmluaXRpYWxpemVJbnN0YW5jZUZpZWxkcyhvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpO1xuXG5cdGVudmlyb25tZW50LmRlZmluZShub2RlLm5hbWUsIGluc3RhbmNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxOZXcoZXhwcjogQVNUTmV3Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQpOiBJbnN0YW5jZSB7XG5cdGlmICghb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5oYXMoZXhwci5uYW1lKSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBVbmtub3duIGNsYXNzICR7ZXhwci5uYW1lfS5gLCBleHByLnNwYW4pO1xuXHR9XG5cblx0Y29uc3QgY2xhc3NEZWYgPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChleHByLm5hbWUpO1xuXHRpZiAoY2xhc3NEZWYubmF0aXZlSW5zdGFuY2UpIHtcblx0XHRyZXR1cm4gY29uc3RydWN0TmF0aXZlSW5zdGFuY2UoZXhwciwgY2xhc3NEZWYsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCk7XG5cdH1cblxuXHRyZXR1cm4gY29uc3RydWN0SW5zdGFuY2UoZXhwciwgY2xhc3NEZWYsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsRXhwcmVzc2lvbihleHByOiBBU1ROb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0c3dpdGNoIChleHByLnR5cGUpIHtcblx0XHRjYXNlIEFTVE5vZGVUeXBlLlNUUklORzpcblx0XHRjYXNlIEFTVE5vZGVUeXBlLk5VTUJFUjpcblx0XHRjYXNlIEFTVE5vZGVUeXBlLkJPT0xFQU46IHtcblx0XHRcdHJldHVybiBleHByLnZhbHVlO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLk5VTEw6IHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLklERU5USUZJRVI6IHtcblx0XHRcdHJldHVybiBlbnZpcm9ubWVudC5nZXQoZXhwci5uYW1lKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5USElTOiB7XG5cdFx0XHRpZiAoIXRoaXNWYWx1ZSkge1xuXHRcdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgdGhpcyB1c2VkIG91dHNpZGUgb2YgbWV0aG9kLmAsIGV4cHIuc3Bhbik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpc1ZhbHVlO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkJJTkFSWToge1xuXHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RCaW5hcnlOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsQmluYXJ5KGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGJpbmFyeSBleHByZXNzaW9uICR7ZXhwci50eXBlfWApO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLlVOQVJZOiB7XG5cdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVFVuYXJ5Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbFVuYXJ5KGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIHVuYXJ5IGV4cHJlc3Npb24gJHtleHByLnR5cGV9LmAsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuQVNTSUdOTUVOVDoge1xuXHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RBc3NpZ25tZW50Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbEFzc2lnbihleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBhc3NpZ25tZW50IGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5NRU1CRVI6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbE1lbWJlcihleHByLCBlbnZpcm9ubWVudCk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBtZW1iZXIgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkNBTEw6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQ2FsbE5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxDYWxsKGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGNhbGwgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLlZET006IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUVkRvbU5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxWRG9tTm9kZShleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBjYWxsIGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5ORVc6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTmV3Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbE5ldyhleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgY2FsbCBleHByZXNzaW9uICR7ZXhwci50eXBlfWAsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuQVJSQVk6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQXJyYXlOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsQXJyYXkoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgYXJyYXkgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLklOREVYOiB7XG5cdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVEluZGV4Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbEluZGV4KGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGluZGV4IGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5MQU1CREE6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTGFtYmRhTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbExhbWJkYShleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgbGFtYmRhIGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0ZGVmYXVsdDoge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVuaGFuZGxlZCBleHByZXNzaW9uICR7ZXhwci50eXBlfS5gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEJpbmFyeShleHByOiBBU1RCaW5hcnlOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0Y29uc3QgbGVmdDogYW55ID0gY2FzdFZhbHVlKGV2YWxFeHByZXNzaW9uKGV4cHIubGVmdCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpKVxuXHRjb25zdCByaWdodDogYW55ID0gY2FzdFZhbHVlKGV2YWxFeHByZXNzaW9uKGV4cHIucmlnaHQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKSlcblxuXHRzd2l0Y2ggKGV4cHIub3BlcmF0b3IpIHtcblx0XHRjYXNlIEdSQU1NQVIuUExVUzoge1xuXHRcdFx0cmV0dXJuIGxlZnQgKyByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLk1JTlVTOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCAtIHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTVVMVElQTFk6IHtcblx0XHRcdHJldHVybiBsZWZ0ICogcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5ESVZJREU6IHtcblx0XHRcdHJldHVybiBsZWZ0IC8gcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5NT0RVTFVTOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCAlIHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTEVTU19USEFOOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCA8IHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuR1JFQVRFUl9USEFOOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCA+IHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTEVTU19FUVVBTDoge1xuXHRcdFx0cmV0dXJuIGxlZnQgPD0gcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5HUkVBVEVSX0VRVUFMOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCA+PSByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkVRVUFMOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCA9PT0gcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5OT1RfRVFVQUw6IHtcblx0XHRcdHJldHVybiBsZWZ0ICE9PSByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkFORDoge1xuXHRcdFx0cmV0dXJuIGxlZnQgJiYgcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5PUjoge1xuXHRcdFx0cmV0dXJuIGxlZnQgfHwgcmlnaHQ7XG5cdFx0fVxuXHRcdGRlZmF1bHQ6IHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBVbmtub3duIG9wZXJhdG9yICR7ZXhwci5vcGVyYXRvcn1gKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxBcnJheShleHByOiBBU1RBcnJheU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBJbnN0YW5jZSB7XG5cdGNvbnN0IHZhbHVlczogYW55W10gPSBbXTtcblx0Zm9yIChjb25zdCBlbGVtIG9mIGV4cHIuZWxlbWVudHMpIHtcblx0XHR2YWx1ZXMucHVzaChldmFsRXhwcmVzc2lvbihlbGVtLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSkpO1xuXHR9XG5cblx0Y29uc3QgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KCdBcnJheScpO1xuXHRjb25zdCBpbnN0YW5jZTogSW5zdGFuY2UgPSBjbGFzc0RlZi5jb25zdHJ1Y3RFbXB0eUluc3RhbmNlKG9iamVjdFJlZ2lzdHJ5KTtcblx0aW5zdGFuY2UuX19uYXRpdmVJbnN0YW5jZSA9IG5ldyBjbGFzc0RlZi5uYXRpdmVJbnN0YW5jZShmcm9tTHlyYVZhbHVlKHZhbHVlcykpO1xuXG5cdHJldHVybiBpbnN0YW5jZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FTVEluZGV4Tm9kZX0gZXhwclxuICogQHBhcmFtIHtPYmplY3RSZWdpc3RyeX0gb2JqZWN0UmVnaXN0cnlcbiAqIEBwYXJhbSB7RW52aXJvbm1lbnR9IGVudmlyb25tZW50XG4gKiBAcGFyYW0ge0luc3RhbmNlfG51bGx9IHRoaXNWYWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZXZhbEluZGV4KGV4cHI6IEFTVEluZGV4Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCkge1xuXHRpZiAoIWV4cHIub2JqZWN0KSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYEluZGV4IGFjY2VzcyBvbiBudWxsLmAsIGV4cHIuc3Bhbik7XG5cdH1cblxuXHRpZiAoIWV4cHIuaW5kZXgpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgQWNjZXNzIHdpdGggdW5zcGVjaWZpYyBpbmRleC5gLCBleHByLnNwYW4pO1xuXHR9XG5cblx0Y29uc3Qgb2JqZWN0ID0gZXZhbEV4cHJlc3Npb24oZXhwci5vYmplY3QsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0Y29uc3QgaW5kZXggPSBldmFsRXhwcmVzc2lvbihleHByLmluZGV4LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cblx0aWYgKCEob2JqZWN0IGluc3RhbmNlb2YgTHlyYUFycmF5IHx8IG9iamVjdC5fX25hdGl2ZUluc3RhbmNlIGluc3RhbmNlb2YgTHlyYUFycmF5KSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKCdJbmRleCBhY2Nlc3Mgb24gbm9uLWFycmF5JywgZXhwci5zcGFuKTtcblx0fVxuXG5cdGNvbnN0IHRhcmdldCA9IG9iamVjdCBpbnN0YW5jZW9mIEx5cmFBcnJheSA/IG9iamVjdCA6IG9iamVjdC5fX25hdGl2ZUluc3RhbmNlO1xuXHRjb25zdCB2YWx1ZSA9IHRhcmdldC52YWx1ZXNbaW5kZXhdO1xuXG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRyZXR1cm4gd3JhcE5hdGl2ZUluc3RhbmNlKHZhbHVlLCBvYmplY3RSZWdpc3RyeSk7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsTGFtYmRhKG5vZGU6IEFTVExhbWJkYU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgbGFtYmRhRW52OiBFbnZpcm9ubWVudCk6IExhbWJkYUZ1bmN0aW9uQ2FsbCB7XG5cdHJldHVybiBuZXcgTGFtYmRhRnVuY3Rpb25DYWxsKG5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBsYW1iZGFFbnYpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsQXNzaWduKGV4cHI6IEFTVEFzc2lnbm1lbnROb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0Y29uc3QgdmFsdWUgPSBldmFsRXhwcmVzc2lvbihleHByLnJpZ2h0LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cblx0aWYgKGV4cHIubGVmdC50eXBlID09PSBBU1ROb2RlVHlwZS5NRU1CRVIpIHtcblx0XHRpZiAoZXhwci5sZWZ0IGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkge1xuXHRcdFx0Y29uc3Qgb2JqZWN0ID0gZXZhbEV4cHJlc3Npb24oZXhwci5sZWZ0Lm9iamVjdCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXG5cdFx0XHRpZiAoZXhwci5sZWZ0Lm9iamVjdC50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0XHRcdG9iamVjdC5fX3N0YXRpY0ZpZWxkc1tleHByLmxlZnQucHJvcGVydHldID0gdmFsdWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvYmplY3QuX19pbnN0YW5jZUZpZWxkc1tleHByLmxlZnQucHJvcGVydHldID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIG1lbWJlciBleHByZXNzaW9uICR7ZXhwci50eXBlfWAsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGVudmlyb25tZW50LnNldChleHByLmxlZnQubmFtZSwgdmFsdWUpO1xuXHR9XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxNZW1iZXIoZXhwcjogQVNUTWVtYmVyTm9kZSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogYW55IHtcblx0Y29uc3Qgb2JqZWN0OiBhbnkgPSBlbnZpcm9ubWVudC5nZXQoZXhwci5vYmplY3QubmFtZSk7XG5cblx0aWYgKGV4cHIucHJvcGVydHkgaW4gb2JqZWN0Ll9faW5zdGFuY2VGaWVsZHMpIHtcblx0XHRyZXR1cm4gb2JqZWN0Ll9faW5zdGFuY2VGaWVsZHNbZXhwci5wcm9wZXJ0eV07XG5cdH1cblxuXHRpZiAoZXhwci5wcm9wZXJ0eSBpbiBvYmplY3QuX19zdGF0aWNGaWVsZHMpIHtcblx0XHRyZXR1cm4gb2JqZWN0Ll9fc3RhdGljRmllbGRzW2V4cHIucHJvcGVydHldO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsQ2FsbChleHByOiBBU1RDYWxsTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdC8vIHN1cGVyIGNhbGwgaW5zaWRlIGNvbnN0cnVjdG9yXG5cdGlmIChleHByLmNhbGxlZS50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSICYmIGV4cHIuY2FsbGVlLm5hbWUgPT09IEdSQU1NQVIuU1VQRVIpIHtcblx0XHRpZiAoIXRoaXNWYWx1ZSB8fCAhdGhpc1ZhbHVlLl9fY2xhc3NEZWY/LnN1cGVyQ2xhc3MpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKCdzdXBlcigpIHVzZWQgb3V0c2lkZSBvZiBzdWJjbGFzcyBjb25zdHJ1Y3RvcicpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHN1cGVyQ2xhc3NEZWYgPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldCh0aGlzVmFsdWUuX19jbGFzc0RlZi5zdXBlckNsYXNzKTtcblx0XHRjb25zdCBjb25zdHJ1Y3Rvck1ldGhvZCA9IHN1cGVyQ2xhc3NEZWYuY29uc3RydWN0b3JNZXRob2Q7XG5cblx0XHRpZiAoIWNvbnN0cnVjdG9yTWV0aG9kKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRjb25zdCBjb25zdHJ1Y3RvckVudiA9IG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCk7XG5cdFx0Y29uc3RydWN0b3JFbnYuZGVmaW5lKEdSQU1NQVIuVEhJUywgdGhpc1ZhbHVlKTtcblxuXHRcdGJpbmRNZXRob2RQYXJhbWV0ZXJzKGV4cHIsXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3JNZXRob2QucGFyYW1ldGVycyxcblx0XHQgICAgICAgICAgICAgICAgICAgICBvYmplY3RSZWdpc3RyeSxcblx0XHQgICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvckVudixcblx0XHQgICAgICAgICAgICAgICAgICAgICBlbnZpcm9ubWVudCxcblx0XHQgICAgICAgICAgICAgICAgICAgICB0aGlzVmFsdWVcblx0XHQpO1xuXG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiBjb25zdHJ1Y3Rvck1ldGhvZC5jaGlsZHJlbikge1xuXHRcdFx0ZXZhbE5vZGUoY2hpbGQsIG9iamVjdFJlZ2lzdHJ5LCBjb25zdHJ1Y3RvckVudiwgdGhpc1ZhbHVlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGlmIChleHByLmNhbGxlZS50eXBlID09PSBBU1ROb2RlVHlwZS5NRU1CRVIpIHtcblx0XHRpZiAoZXhwci5jYWxsZWUgaW5zdGFuY2VvZiBBU1RNZW1iZXJOb2RlKSB7XG5cdFx0XHRpZiAoZXhwci5jYWxsZWUub2JqZWN0LnR5cGUgPT09IEFTVE5vZGVUeXBlLklERU5USUZJRVIpIHtcblx0XHRcdFx0Y29uc3QgY2xhc3NOYW1lID0gZXhwci5jYWxsZWUub2JqZWN0Lm5hbWU7XG5cblx0XHRcdFx0aWYgKG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuaGFzKGNsYXNzTmFtZSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZXZhbFN0YXRpY0NhbGwoZXhwciwgY2xhc3NOYW1lLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBldmFsSW5zdGFuY2VDYWxsKGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBldmFsRnVuY3Rpb25DYWxsKGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxGdW5jdGlvbkNhbGwoZXhwcjogQVNUQ2FsbE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpIHtcblx0Y29uc3QgZnVuY3Rpb25DYWxsID0gZXZhbEV4cHJlc3Npb24oZXhwci5jYWxsZWUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0Y29uc3QgYXJncyA9IGV2YWxDYWxsQXJndW1lbnRzKGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblxuXHRpZiAoZnVuY3Rpb25DYWxsIGluc3RhbmNlb2YgTGFtYmRhRnVuY3Rpb25DYWxsKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uQ2FsbC5ldmFsQ2FsbCh0aGlzVmFsdWUsIC4uLmFyZ3MpO1xuXHR9XG5cblx0cmV0dXJuIChuZXcgTmF0aXZlRnVuY3Rpb25DYWxsKGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCkpLmV2YWxDYWxsKHRoaXNWYWx1ZSwgLi4uYXJncyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsU3RhdGljQ2FsbChleHByOiBBU1RDYWxsTm9kZSwgY2xhc3NOYW1lOiBzdHJpbmcsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpIHtcblxuXHRpZiAoIShleHByLmNhbGxlZSBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpKSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgbWVtYmVyIGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0fVxuXG5cdGNvbnN0IGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24gPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChjbGFzc05hbWUpO1xuXHRjb25zdCBtZXRob2REZWY6IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB8IHVuZGVmaW5lZCA9IGNsYXNzRGVmLnN0YXRpY01ldGhvZHNbZXhwci5jYWxsZWUucHJvcGVydHldO1xuXG5cdGlmICghbWV0aG9kRGVmKSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYFN0YXRpYyBtZXRob2QgJHtjbGFzc05hbWV9LiR7ZXhwci5jYWxsZWUucHJvcGVydHl9IG5vdCBmb3VuZGAsIGV4cHIuY2FsbGVlLnNwYW4pO1xuXHR9XG5cblx0aWYgKGNsYXNzRGVmLm5hdGl2ZUluc3RhbmNlICYmIGNsYXNzRGVmLm5hdGl2ZUluc3RhbmNlW21ldGhvZERlZi5uYW1lXSkge1xuXHRcdGNvbnN0IGFyZ3MgPSBldmFsTWV0aG9kQXJndW1lbnRzKGV4cHIsIG1ldGhvZERlZi5wYXJhbWV0ZXJzLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSlcblx0XHRjb25zdCByYXdBcmdzID0gYXJncy5tYXAoZnJvbUx5cmFWYWx1ZSk7XG5cdFx0Y29uc3QgcmVzdWx0ID0gY2xhc3NEZWYubmF0aXZlSW5zdGFuY2VbbWV0aG9kRGVmLm5hbWVdKC4uLnJhd0FyZ3MpO1xuXG5cdFx0aWYgKHJlc3VsdCBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdHJldHVybiB3cmFwTmF0aXZlSW5zdGFuY2UocmVzdWx0LCBvYmplY3RSZWdpc3RyeSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2YWxCbG9jayhbcmV0dXJuVmFsdWUocmVzdWx0KV0sXG5cdFx0ICAgICAgICAgICAgICAgICBvYmplY3RSZWdpc3RyeSxcblx0XHQgICAgICAgICAgICAgICAgIG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCksXG5cdFx0ICAgICAgICAgICAgICAgICB0aGlzVmFsdWUsXG5cdFx0ICAgICAgICAgICAgICAgICBtZXRob2REZWYucmV0dXJuVHlwZVxuXHRcdCk7XG5cdH1cblxuXHRjb25zdCBtZXRob2RFbnYgPSBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpO1xuXG5cdGJpbmRNZXRob2RQYXJhbWV0ZXJzKGV4cHIsIG1ldGhvZERlZi5wYXJhbWV0ZXJzLCBvYmplY3RSZWdpc3RyeSwgbWV0aG9kRW52LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblxuXHRyZXR1cm4gZXZhbEJsb2NrKG1ldGhvZERlZi5jaGlsZHJlbiwgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgdGhpc1ZhbHVlLCBtZXRob2REZWYucmV0dXJuVHlwZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsSW5zdGFuY2VDYWxsKGV4cHI6IEFTVENhbGxOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKSB7XG5cdGlmICghKGV4cHIuY2FsbGVlIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBtZW1iZXIgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHR9XG5cblx0Ly8gT2JqZWt0IGF1c3dlcnRlbiAodSB8IHRoaXMgfCBzdXBlcilcblx0bGV0IHRhcmdldCA9IGV2YWxFeHByZXNzaW9uKGV4cHIuY2FsbGVlLm9iamVjdCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXG5cdHRhcmdldCA9IGF1dG9Cb3hJZk5lZWRlZCh0YXJnZXQsIG9iamVjdFJlZ2lzdHJ5LCBleHByLmNhbGxlZS5zcGFuKTtcblxuXHRpZiAoIXRhcmdldCB8fCAhdGFyZ2V0Ll9fY2xhc3NEZWYpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcignSW5zdGFuY2UgY2FsbCBvbiBub24tb2JqZWN0JywgZXhwci5jYWxsZWUuc3Bhbik7XG5cdH1cblxuXHRsZXQgY2xhc3NEZWYgPSB0YXJnZXQuX19jbGFzc0RlZjtcblxuXHQvLyBzdXBlci5tZXRob2QoKVxuXHRpZiAoZXhwci5jYWxsZWUub2JqZWN0LnR5cGUgPT09IEFTVE5vZGVUeXBlLklERU5USUZJRVIgJiYgZXhwci5jYWxsZWUub2JqZWN0Lm5hbWUgPT09ICdzdXBlcicpIHtcblx0XHRjb25zdCBzdXBlck5hbWUgPSBjbGFzc0RlZi5zdXBlckNsYXNzO1xuXHRcdGlmICghc3VwZXJOYW1lKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcignc3VwZXIgdXNlZCBidXQgbm8gc3VwZXJjbGFzcycsIGV4cHIuY2FsbGVlLnNwYW4pO1xuXHRcdH1cblx0XHRjbGFzc0RlZiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KHN1cGVyTmFtZSk7XG5cdH1cblxuXG5cdGNvbnN0IG1ldGhvZERlZjogQ2xhc3NNZXRob2REZWZpbml0aW9uIHwgbnVsbCA9IHJlc29sdmVJbnN0YW5jZU1ldGhvZChjbGFzc0RlZixcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFJlZ2lzdHJ5LFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwci5jYWxsZWUucHJvcGVydHkpO1xuXHRpZiAoIW1ldGhvZERlZikge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBNZXRob2QgJHtleHByLmNhbGxlZS5wcm9wZXJ0eX0gbm90IGZvdW5kIG9uICR7Y2xhc3NEZWYubmFtZX1gLCBleHByLmNhbGxlZS5zcGFuKTtcblx0fVxuXG5cdGNvbnN0IG1ldGhvZEVudiA9IG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCk7XG5cdG1ldGhvZEVudi5kZWZpbmUoR1JBTU1BUi5USElTLCB0YXJnZXQpO1xuXG5cdGlmICh0YXJnZXQuX19uYXRpdmVJbnN0YW5jZSAmJiBtZXRob2REZWYubmFtZSBpbiB0YXJnZXQuX19uYXRpdmVJbnN0YW5jZSkge1xuXHRcdGNvbnN0IGFyZ3MgPSBldmFsTWV0aG9kQXJndW1lbnRzKGV4cHIsIG1ldGhvZERlZi5wYXJhbWV0ZXJzLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdFx0Y29uc3QgcmF3QXJncyA9IGFyZ3MubWFwKGZyb21MeXJhVmFsdWUpO1xuXHRcdGNvbnN0IHJlc3VsdCA9IHRhcmdldC5fX25hdGl2ZUluc3RhbmNlW21ldGhvZERlZi5uYW1lXSguLi5yYXdBcmdzKTtcblxuXHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRyZXR1cm4gd3JhcE5hdGl2ZUluc3RhbmNlKHJlc3VsdCwgb2JqZWN0UmVnaXN0cnkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmFsQmxvY2soW3JldHVyblZhbHVlKHJlc3VsdCldLCBvYmplY3RSZWdpc3RyeSwgbWV0aG9kRW52LCB0YXJnZXQsIG1ldGhvZERlZi5yZXR1cm5UeXBlKTtcblx0fVxuXG5cdGJpbmRNZXRob2RQYXJhbWV0ZXJzKGV4cHIsIG1ldGhvZERlZi5wYXJhbWV0ZXJzLCBvYmplY3RSZWdpc3RyeSwgbWV0aG9kRW52LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblxuXHRyZXR1cm4gZXZhbEJsb2NrKG1ldGhvZERlZi5jaGlsZHJlbiwgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgdGFyZ2V0LCBtZXRob2REZWYucmV0dXJuVHlwZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSW5zdGFuY2VNZXRob2QoY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBtZXRob2ROYW1lOiBzdHJpbmcpOiBDbGFzc01ldGhvZERlZmluaXRpb24gfCBudWxsIHtcblx0aWYgKGNsYXNzRGVmLmluc3RhbmNlTWV0aG9kc1ttZXRob2ROYW1lXSkge1xuXHRcdHJldHVybiBjbGFzc0RlZi5pbnN0YW5jZU1ldGhvZHNbbWV0aG9kTmFtZV07XG5cdH1cblxuXHRpZiAoY2xhc3NEZWYuc3VwZXJDbGFzcykge1xuXHRcdGNvbnN0IHN1cGVyRGVmID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQoY2xhc3NEZWYuc3VwZXJDbGFzcyk7XG5cdFx0cmV0dXJuIHJlc29sdmVJbnN0YW5jZU1ldGhvZChzdXBlckRlZiwgb2JqZWN0UmVnaXN0cnksIG1ldGhvZE5hbWUpO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kTWV0aG9kUGFyYW1ldGVycyhcblx0Y2FsbE5vZGU6IEFTVENhbGxOb2RlLFxuXHRwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sXG5cdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSxcblx0bWV0aG9kRW52OiBFbnZpcm9ubWVudCxcblx0ZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LFxuXHR0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGxcbikge1xuXG5cdGNvbnN0IGFyZ3MgPSBjYWxsTm9kZS5hcmd1bWVudHM7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHBhcmFtZXRlcjogQVNUUGFyYW1ldGVyTm9kZSB8IG51bGwgPSBwYXJhbWV0ZXJzW2ldIHx8IG51bGw7XG5cdFx0Y29uc3QgYXJndW1lbnQ6IGFueSA9IGFyZ3NbaV0gfHwgbnVsbDtcblxuXHRcdGlmICghcGFyYW1ldGVyKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcignTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBpbiBtZXRob2QgY2FsbC4nKTtcblx0XHR9XG5cblx0XHRsZXQgcmF3VmFsdWU7XG5cblx0XHRpZiAoYXJndW1lbnQpIHtcblx0XHRcdHJhd1ZhbHVlID0gZXZhbEV4cHJlc3Npb24oYXJndW1lbnQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHR9IGVsc2UgaWYgKHBhcmFtZXRlcj8uZGVmYXVsdFZhbHVlKSB7XG5cdFx0XHRyYXdWYWx1ZSA9IGV2YWxFeHByZXNzaW9uKHBhcmFtZXRlci5kZWZhdWx0VmFsdWUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHR9XG5cblx0XHRjb25zdCBjYXN0ZWQgPSBwYXJhbWV0ZXIudHlwZUFubm90YXRpb25cblx0XHRcdD8gY2FzdFZhbHVlKHJhd1ZhbHVlLCBwYXJhbWV0ZXIudHlwZUFubm90YXRpb24ubmFtZSlcblx0XHRcdDogY2FzdFZhbHVlKHJhd1ZhbHVlLCBUWVBFX0VOVU0uTUlYRUQpO1xuXG5cdFx0bWV0aG9kRW52LmRlZmluZShwYXJhbWV0ZXIubmFtZSwgY2FzdGVkKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbENhbGxBcmd1bWVudHMobm9kZTogQVNUQ2FsbE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnlbXSB7XG5cdGlmIChub2RlLmNhbGxlZSBpbnN0YW5jZW9mIEFTVExhbWJkYU5vZGUpIHtcblx0XHRjb25zdCBsYW1iZGEgPSBub2RlLmNhbGxlZTtcblx0XHRyZXR1cm4gZXZhbE1ldGhvZEFyZ3VtZW50cyhub2RlLCBsYW1iZGEucGFyYW1ldGVycywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHR9XG5cblx0aWYgKG5vZGUuY2FsbGVlLnR5cGUgPT09IEFTVE5vZGVUeXBlLklERU5USUZJRVIpIHtcblx0XHRyZXR1cm4gbm9kZS5hcmd1bWVudHMubWFwKGFyZ3VtZW50ID0+IHtcblx0XHRcdHJldHVybiBjYXN0VmFsdWUoXG5cdFx0XHRcdGV2YWxFeHByZXNzaW9uKGFyZ3VtZW50LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSksXG5cdFx0XHRcdGFyZ3VtZW50LnR5cGVcblx0XHRcdCk7XG5cdFx0fSk7XG5cdH1cblxuXHRsZXQgbW9kdWxlTmFtZTogc3RyaW5nID0gJ3Vua25vd24nO1xuXHRsZXQgbWV0aG9kTmFtZTogc3RyaW5nID0gJ3Vua25vd24nO1xuXG5cdGlmIChub2RlLmNhbGxlZSBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpIHtcblx0XHRtb2R1bGVOYW1lID0gbm9kZS5jYWxsZWUub2JqZWN0Lm5hbWU7XG5cdFx0bWV0aG9kTmFtZSA9IG5vZGUuY2FsbGVlLnByb3BlcnR5O1xuXHR9XG5cblx0dGhyb3dSdW50aW1lRXJyb3IoYFVua25vd24gZnVuY3Rpb24gJHttb2R1bGVOYW1lfS4ke21ldGhvZE5hbWV9YCwgbm9kZS5zcGFuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxNZXRob2RBcmd1bWVudHMoZXhwcjogQVNUQ2FsbE5vZGUgfCBBU1ROZXdOb2RlLCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnlbXSB7XG5cdGNvbnN0IGFyZ3MgPSBbXTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtZXRlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBwYXJhbWV0ZXI6IEFTVFBhcmFtZXRlck5vZGUgfCBudWxsID0gcGFyYW1ldGVyc1tpXSB8fCBudWxsO1xuXHRcdGNvbnN0IGFyZ3VtZW50ID0gZXhwci5hcmd1bWVudHNbaV0gfHwgbnVsbDtcblxuXHRcdGxldCB2YWx1ZTtcblxuXHRcdGlmIChhcmd1bWVudCkge1xuXHRcdFx0dmFsdWUgPSBldmFsRXhwcmVzc2lvbihhcmd1bWVudCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdH0gZWxzZSBpZiAocGFyYW1ldGVyPy5kZWZhdWx0VmFsdWUpIHtcblx0XHRcdHZhbHVlID0gZXZhbEV4cHJlc3Npb24ocGFyYW1ldGVyLmRlZmF1bHRWYWx1ZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgW1J1bnRpbWVFcnJvcl0gTWlzc2luZyBhcmd1bWVudCAnJHtwYXJhbWV0ZXI/Lm5hbWV9J2AsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXG5cdFx0YXJncy5wdXNoKHZhbHVlKTtcblx0fVxuXG5cdHJldHVybiBhcmdzLm1hcCgoYXJndW1lbnQsIGkpID0+IHtcblx0XHRjb25zdCBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJzW2ldO1xuXHRcdHJldHVybiBwYXJhbWV0ZXI/LnR5cGVBbm5vdGF0aW9uXG5cdFx0XHQ/IGNhc3RWYWx1ZShhcmd1bWVudCwgcGFyYW1ldGVyLnR5cGVBbm5vdGF0aW9uLm5hbWUpXG5cdFx0XHQ6IGNhc3RWYWx1ZShhcmd1bWVudCwgVFlQRV9FTlVNLk1JWEVEKTtcblx0fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsSWYobm9kZTogQVNUSWZOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0Y29uc3QgY29uZGl0aW9uID0gY2FzdFZhbHVlKFxuXHRcdGV2YWxFeHByZXNzaW9uKG5vZGUuY29uZGl0aW9uLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSksXG5cdFx0VFlQRV9FTlVNLkJPT0xFQU5cblx0KTtcblxuXHQvLyBUSEVOXG5cdGlmIChjb25kaXRpb24gPT09IHRydWUpIHtcblx0XHRyZXR1cm4gZXZhbEJsb2NrKG5vZGUudGhlbi5jaGlsZHJlbiwgb2JqZWN0UmVnaXN0cnksIG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCksIHRoaXNWYWx1ZSk7XG5cdH1cblxuXHQvLyBFTFNFXG5cdGlmIChub2RlLmVsc2UpIHtcblx0XHRpZiAobm9kZS5lbHNlIGluc3RhbmNlb2YgQVNUSWZOb2RlKSB7XG5cdFx0XHRyZXR1cm4gZXZhbElmKG5vZGUuZWxzZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmFsQmxvY2sobm9kZS5lbHNlLmNoaWxkcmVuLCBvYmplY3RSZWdpc3RyeSwgbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KSwgdGhpc1ZhbHVlKTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbE1hdGNoKG5vZGU6IEFTVE1hdGNoTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGNvbnN0IG1hdGNoVmFsdWUgPSBldmFsRXhwcmVzc2lvbihub2RlLmV4cHJlc3Npb24sIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCk7XG5cblx0Zm9yIChjb25zdCBjYXNlTm9kZSBvZiBub2RlLmNhc2VzKSB7XG5cdFx0aWYgKGNhc2VOb2RlLnRlc3QgPT09IG51bGwpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHRlc3RWYWx1ZSA9IGV2YWxFeHByZXNzaW9uKGNhc2VOb2RlLnRlc3QsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblxuXHRcdGlmICh0ZXN0VmFsdWUgPT09IG1hdGNoVmFsdWUpIHtcblx0XHRcdHJldHVybiBldmFsTWF0Y2hDYXNlKGNhc2VOb2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKG5vZGUuZGVmYXVsdENhc2UpIHtcblx0XHRyZXR1cm4gZXZhbE1hdGNoQ2FzZShub2RlLmRlZmF1bHRDYXNlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxNYXRjaENhc2Uobm9kZTogQVNUTWF0Y2hDYXNlTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdHJldHVybiBldmFsQmxvY2sobm9kZS5jaGlsZHJlbiwgb2JqZWN0UmVnaXN0cnksIG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCksIHRoaXNWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsRm9yZWFjaChub2RlOiBBU1RGb3JlYWNoTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGxldCBpdGVyYWJsZSA9IGV2YWxFeHByZXNzaW9uKG5vZGUuaXRlcmFibGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblxuXHRpZiAoIShpdGVyYWJsZSBpbnN0YW5jZW9mIEluc3RhbmNlKSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBmb3JlYWNoIGV4cGVjdHMgYW4gb2JqZWN0IGltcGxlbWVudGluZyBJdGVyYWJsZWAsIG5vZGUuaXRlcmFibGUuc3Bhbik7XG5cdH1cblxuXHRjb25zdCBpdGVyYXRvck1ldGhvZCA9IHJlc29sdmVJbnN0YW5jZU1ldGhvZChcblx0XHRpdGVyYWJsZS5fX2NsYXNzRGVmLFxuXHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdCdpdGVyYXRvcidcblx0KTtcblxuXHRpZiAoIWl0ZXJhdG9yTWV0aG9kKSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYE9iamVjdCBkb2VzIG5vdCBpbXBsZW1lbnQgSXRlcmFibGUgKG1pc3NpbmcgaXRlcmF0b3IoKSlgLCBub2RlLml0ZXJhYmxlLnNwYW4pO1xuXHR9XG5cblx0Y29uc3QgaXRlcmF0b3IgPSBldmFsSW5zdGFuY2VDYWxsKFxuXHRcdCgoKSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IEFTVENhbGxOb2RlKG5ldyBBU1RNZW1iZXJOb2RlKG5vZGUuaXRlcmFibGUsICdpdGVyYXRvcicpKTtcblx0XHR9KSgpLFxuXHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdGVudmlyb25tZW50LFxuXHRcdHRoaXNWYWx1ZVxuXHQpO1xuXG5cdGlmICghKGl0ZXJhdG9yIGluc3RhbmNlb2YgSW5zdGFuY2UpKSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYGl0ZXJhdG9yKCkgbXVzdCByZXR1cm4gYW4gSXRlcmF0b3Igb2JqZWN0YCwgbm9kZS5pdGVyYWJsZS5zcGFuKTtcblx0fVxuXG5cdGNhbGxJdGVyYXRvck1ldGhvZChpdGVyYXRvciwgJ3Jld2luZCcsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCk7XG5cblx0d2hpbGUgKGNhbGxJdGVyYXRvck1ldGhvZChpdGVyYXRvciwgJ2hhc05leHQnLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpKSB7XG5cdFx0Y29uc3QgdmFsdWUgPSBjYWxsSXRlcmF0b3JNZXRob2QoaXRlcmF0b3IsICdjdXJyZW50Jywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50KTtcblxuXHRcdGNvbnN0IGxvb3BFbnYgPSBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpO1xuXG5cdFx0bG9vcEVudi5kZWZpbmUobm9kZS5pdGVyYXRvciwgdmFsdWUpO1xuXG5cdFx0Y29uc3QgcmVzdWx0ID0gZXZhbEJsb2NrKG5vZGUuYm9keSwgb2JqZWN0UmVnaXN0cnksIGxvb3BFbnYsIHRoaXNWYWx1ZSk7XG5cdFx0aWYgKHJlc3VsdCBpbnN0YW5jZW9mIFJldHVyblZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblxuXHRcdGNhbGxJdGVyYXRvck1ldGhvZChpdGVyYXRvciwgJ25leHQnLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxsSXRlcmF0b3JNZXRob2QoaXRlcmF0b3I6IEluc3RhbmNlLCBtZXRob2ROYW1lOiBzdHJpbmcsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogYW55IHtcblx0cmV0dXJuIGNhbGxJbnN0YW5jZU1ldGhvZChcblx0XHRpdGVyYXRvcixcblx0XHRpdGVyYXRvci5fX2NsYXNzRGVmLmZpbmRNZXRob2QobWV0aG9kTmFtZSksXG5cdFx0W10sXG5cdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0ZW52aXJvbm1lbnRcblx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxVbmFyeShub2RlOiBBU1RVbmFyeU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRjb25zdCB2YWx1ZSA9IGV2YWxFeHByZXNzaW9uKG5vZGUuYXJndW1lbnQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblxuXHRzd2l0Y2ggKG5vZGUub3BlcmF0b3IpIHtcblx0XHRjYXNlIEdSQU1NQVIuRVhDTEFNQVRJT05fTUFSSzpcblx0XHRcdHJldHVybiAhY2FzdFZhbHVlKHZhbHVlKTtcblx0fVxuXG5cdHRocm93UnVudGltZUVycm9yKGBVbnN1cHBvcnRlZCB1bmFyeSBvcGVyYXRvciAke25vZGUub3BlcmF0b3J9YCwgbm9kZS5zcGFuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxWRG9tTm9kZShub2RlOiBBU1RWRG9tTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IFZOb2RlIHtcblx0Y29uc3QgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcblxuXHRmb3IgKGNvbnN0IFtuYW1lLCB2YWx1ZV0gb2Ygbm9kZS5wcm9wcykge1xuXHRcdHByb3BzW25hbWVdID0gZXZhbEV4cHJlc3Npb24odmFsdWUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0fVxuXG5cdGNvbnN0IGNoaWxkcmVuOiBBcnJheTxWTm9kZSB8IHN0cmluZz4gPSBbXTtcblxuXHRmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcblx0XHRpZiAoY2hpbGQgaW5zdGFuY2VvZiBBU1RWRG9tVGV4dE5vZGUpIHtcblx0XHRcdGNoaWxkcmVuLnB1c2goY2hpbGQudmFsdWUpO1xuXHRcdH0gZWxzZSBpZiAoY2hpbGQgaW5zdGFuY2VvZiBBU1RWRG9tTm9kZSkge1xuXHRcdFx0Y2hpbGRyZW4ucHVzaChldmFsVkRvbU5vZGUoY2hpbGQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHtcblx0XHR0YWc6IG5vZGUudGFnLFxuXHRcdGlzQ29tcG9uZW50OiBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmhhcyhub2RlLnRhZyksXG5cdFx0Y29tcG9uZW50OiBudWxsLFxuXHRcdHByb3BzOiBwcm9wcyxcblx0XHRjaGlsZHJlbjogY2hpbGRyZW4sXG5cdFx0ZG9tOiBudWxsXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsQmxvY2soYmxvY2tOb2RlczogQVNUTm9kZVtdLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsLCByZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0Zm9yIChjb25zdCBibG9ja05vZGUgb2YgYmxvY2tOb2Rlcykge1xuXHRcdGNvbnN0IHJlc3VsdCA9IGV2YWxOb2RlKGJsb2NrTm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBSZXR1cm5WYWx1ZSkge1xuXHRcdFx0cmV0dXJuIGNhc3RWYWx1ZShyZXN1bHQudmFsdWUsIHJldHVyblR5cGU/Lm5hbWUpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxBbm5vdGF0aW9uVmFsdWUobm9kZTogQVNUTm9kZSk6IGFueSB7XG5cdHN3aXRjaCAobm9kZS50eXBlKSB7XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5TVFJJTkc6XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5OVU1CRVI6XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5CT09MRUFOOlxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuSURFTlRJRklFUjoge1xuXHRcdFx0cmV0dXJuIGNhc3RWYWx1ZShub2RlLnZhbHVlKTtcblx0XHR9XG5cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkFSUkFZIDoge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RBcnJheU5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIG5vZGUuZWxlbWVudHMubWFwKGNoaWxkID0+IGV2YWxBbm5vdGF0aW9uVmFsdWUoY2hpbGQpKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGFubm90YXRpb24gcHJvcGVydHkgdmFsdWU6ICR7bm9kZS50eXBlfWAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXG5cdFx0ZGVmYXVsdDoge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVuc3VwcG9ydGVkIGFubm90YXRpb24gZXhwcmVzc2lvbjogJHtub2RlLnR5cGV9YCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxBbm5vdGF0aW9uUHJvcGVydGllcyhhbm5vdGF0aW9uOiBBU1RBbm5vdGF0aW9uTm9kZSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuXHRjb25zdCBwcm9wZXJ0aWVzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG5cblx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZU5vZGVdIG9mIGFubm90YXRpb24ucHJvcGVydGllcykge1xuXHRcdHByb3BlcnRpZXNba2V5XSA9IGV2YWxBbm5vdGF0aW9uVmFsdWUodmFsdWVOb2RlKTtcblx0fVxuXG5cdHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsbEluc3RhbmNlTWV0aG9kKGluc3RhbmNlOiBJbnN0YW5jZSwgbWV0aG9kTm9kZTogQVNUTWV0aG9kTm9kZSwgYXJnczogYW55W10sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogYW55IHtcblx0Y29uc3QgbWV0aG9kRW52ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblxuXHRtZXRob2RFbnYuZGVmaW5lKEdSQU1NQVIuVEhJUywgaW5zdGFuY2UpO1xuXG5cdGlmIChpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlICYmIG1ldGhvZE5vZGUubmFtZSBpbiBpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlKSB7XG5cdFx0Y29uc3QgcmF3QXJncyA9IGFyZ3MubWFwKGZyb21MeXJhVmFsdWUpO1xuXHRcdGNvbnN0IHJlc3VsdCA9IGluc3RhbmNlLl9fbmF0aXZlSW5zdGFuY2VbbWV0aG9kTm9kZS5uYW1lXSguLi5yYXdBcmdzKTtcblxuXHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRyZXR1cm4gd3JhcE5hdGl2ZUluc3RhbmNlKHJlc3VsdCwgb2JqZWN0UmVnaXN0cnkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmFsQmxvY2soW3JldHVyblZhbHVlKHJlc3VsdCldLCBvYmplY3RSZWdpc3RyeSwgbWV0aG9kRW52LCBpbnN0YW5jZSwgbWV0aG9kTm9kZS5yZXR1cm5UeXBlKTtcblx0fVxuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbWV0aG9kTm9kZS5wYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgcGFyYW1ldGVyOiBBU1RQYXJhbWV0ZXJOb2RlIHwgbnVsbCA9IG1ldGhvZE5vZGUucGFyYW1ldGVyc1tpXSB8fCBudWxsO1xuXHRcdGNvbnN0IGFyZ3VtZW50OiBhbnkgPSBhcmdzW2ldIHx8IG51bGw7XG5cblx0XHRpZiAoIXBhcmFtZXRlcikge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoJ01ldGhvZCBwYXJhbWV0ZXIgaXMgbnVsbC4nKTtcblx0XHR9XG5cblx0XHRsZXQgdmFsdWU7XG5cdFx0aWYgKCFhcmd1bWVudCkge1xuXHRcdFx0dmFsdWUgPSBwYXJhbWV0ZXIuZGVmYXVsdFZhbHVlXG5cdFx0XHRcdD8gZXZhbE5vZGUocGFyYW1ldGVyLmRlZmF1bHRWYWx1ZSwgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgaW5zdGFuY2UpXG5cdFx0XHRcdDogbnVsbDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFsdWUgPSBhcmdzW2ldO1xuXHRcdH1cblxuXHRcdG1ldGhvZEVudi5kZWZpbmUocGFyYW1ldGVyLm5hbWUsIHZhbHVlKTtcblx0fVxuXG5cdHJldHVybiBldmFsQmxvY2sobWV0aG9kTm9kZS5jaGlsZHJlbiwgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgaW5zdGFuY2UsIG1ldGhvZE5vZGUucmV0dXJuVHlwZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvQm94SWZOZWVkZWQodmFsdWU6IGFueSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwpOiBJbnN0YW5jZSB7XG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEluc3RhbmNlKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gVFlQRV9FTlVNLk5VTUJFUikge1xuXHRcdHJldHVybiBjcmVhdGVCb3hlZEluc3RhbmNlKEF1dG9ib3hlZFR5cGVzLmdldENsYXNzTmFtZShUWVBFX0VOVU0uTlVNQkVSKSwgdmFsdWUsIG9iamVjdFJlZ2lzdHJ5KTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09IFRZUEVfRU5VTS5TVFJJTkcpIHtcblx0XHRyZXR1cm4gY3JlYXRlQm94ZWRJbnN0YW5jZShBdXRvYm94ZWRUeXBlcy5nZXRDbGFzc05hbWUoVFlQRV9FTlVNLlNUUklORyksIHZhbHVlLCBvYmplY3RSZWdpc3RyeSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSBUWVBFX0VOVU0uQk9PTEVBTikge1xuXHRcdHJldHVybiBjcmVhdGVCb3hlZEluc3RhbmNlKEF1dG9ib3hlZFR5cGVzLmdldENsYXNzTmFtZShUWVBFX0VOVU0uQk9PTEVBTiksIHZhbHVlLCBvYmplY3RSZWdpc3RyeSk7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCb3hlZEluc3RhbmNlKGNsYXNzTmFtZTogc3RyaW5nLCBwcmltaXRpdmVWYWx1ZTogYW55LCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpOiBJbnN0YW5jZSB7XG5cdGNvbnN0IGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24gPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChjbGFzc05hbWUpO1xuXHRjb25zdCBpbnN0YW5jZTogSW5zdGFuY2UgPSBjbGFzc0RlZi5jb25zdHJ1Y3RFbXB0eUluc3RhbmNlKG9iamVjdFJlZ2lzdHJ5KTtcblxuXHRpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlID0gbmV3IGNsYXNzRGVmLm5hdGl2ZUluc3RhbmNlKGZyb21MeXJhVmFsdWUocHJpbWl0aXZlVmFsdWUpKTtcblxuXHRyZXR1cm4gaW5zdGFuY2U7XG59XG4iLAogICAgImltcG9ydCB7R1JBTU1BUn0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcbmltcG9ydCB7XG5cdEFTVENsYXNzTm9kZSxcblx0QVNURmllbGROb2RlLFxuXHRBU1RJbnRlcmZhY2VOb2RlLFxuXHRBU1RNZXRob2ROb2RlLFxuXHRBU1ROZXdOb2RlLFxuXHRBU1ROb2RlLFxuXHRBU1RQYXJhbWV0ZXJOb2RlLFxuXHRBU1RUeXBlTm9kZVxufSBmcm9tIFwiLi4vYXN0XCI7XG5pbXBvcnQge3Rocm93UnVudGltZUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQgdHlwZSB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge2V2YWxFeHByZXNzaW9uLCBldmFsTWV0aG9kQXJndW1lbnRzLCBldmFsTm9kZX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfcnVudGltZVwiO1xuaW1wb3J0IHtjYXN0VmFsdWUsIGZyb21MeXJhVmFsdWUsIEx5cmFOYXRpdmVPYmplY3R9IGZyb20gXCIuL2ludGVycHJldGVyX2NvbnZlcnNpb25cIjtcblxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IHtcblx0cGFyZW50OiBFbnZpcm9ubWVudCB8IG51bGw7XG5cdHZhbHVlczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9O1xuXG5cdGNvbnN0cnVjdG9yKHBhcmVudDogRW52aXJvbm1lbnQgfCBudWxsID0gbnVsbCkge1xuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xuXHRcdHRoaXMudmFsdWVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0fVxuXG5cdGRlZmluZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLnZhbHVlc1tuYW1lXSA9IHZhbHVlO1xuXHR9XG5cblx0Z2V0KG5hbWU6IHN0cmluZyk6IGFueSB7XG5cdFx0aWYgKG5hbWUgaW4gdGhpcy52YWx1ZXMpIHtcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlc1tuYW1lXTtcblx0XHR9XG5cdFx0aWYgKHRoaXMucGFyZW50KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJlbnQuZ2V0KG5hbWUpO1xuXHRcdH1cblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5kZWZpbmVkIHZhcmlhYmxlICR7bmFtZX1gKTtcblx0fVxuXG5cdHNldChuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHRpZiAobmFtZSBpbiB0aGlzLnZhbHVlcykge1xuXHRcdFx0dGhpcy52YWx1ZXNbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKHRoaXMucGFyZW50KSB7XG5cdFx0XHR0aGlzLnBhcmVudC5zZXQobmFtZSwgdmFsdWUpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5kZWZpbmVkIHZhcmlhYmxlICR7bmFtZX1gKTtcblx0fVxuXG5cdGhhcyhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXNbbmFtZV0gfHwgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmhhcyhuYW1lKSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEluc3RhbmNlIHtcblx0cHVibGljIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG5cdF9fY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbjtcblx0X19pbnN0YW5jZUZpZWxkczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9O1xuXHRfX3N0YXRpY0ZpZWxkczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9O1xuXHRfX25hdGl2ZUluc3RhbmNlOiBhbnkgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uKSB7XG5cdFx0dGhpcy5fX2NsYXNzRGVmID0gY2xhc3NEZWY7XG5cdFx0dGhpcy5fX2luc3RhbmNlRmllbGRzID0ge307XG5cdFx0dGhpcy5fX3N0YXRpY0ZpZWxkcyA9IHt9O1xuXHRcdHRoaXMuX19uYXRpdmVJbnN0YW5jZSA9IG51bGw7XG5cblx0XHR0aGlzLmlkID0gSW5zdGFuY2UuZ2VuZXJhdGVJbnN0YW5jZVVVSUQoKTtcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIGdlbmVyYXRlSW5zdGFuY2VVVUlEKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHNlbGYuY3J5cHRvLnJhbmRvbVVVSUQoKTtcblx0fVxuXG5cdGluaXRpYWxpemVJbnN0YW5jZUZpZWxkcyhvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCk6IHZvaWQge1xuXHRcdHRoaXMuX19jbGFzc0RlZi5pbml0aWFsaXplSW5zdGFuY2VGaWVsZHModGhpcywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50KTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTW9kaWZpZXJzIHtcblx0b3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuXHRwdWJsaWM6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXHRzdGF0aWM6IGJvb2xlYW4gPSBmYWxzZTtcblx0cmVhZG9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHQvKipcblx0ICogQHBhcmFtIHt7fX0gYXR0cmlidXRlc1xuXHQgKi9cblx0Y29uc3RydWN0b3IoYXR0cmlidXRlczogeyBbaW5kZXg6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9KSB7XG5cdFx0Zm9yIChsZXQgYXR0cmlidXRlIG9mIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpKSB7XG5cdFx0XHRpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShhdHRyaWJ1dGUpKSB7XG5cdFx0XHRcdGNvbnN0IG1vZGlmaWVyczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0gdGhpcztcblx0XHRcdFx0bW9kaWZpZXJzW2F0dHJpYnV0ZV0gPSBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTdXBlckNsYXNzIHtcblx0dHlwZTogc3RyaW5nO1xuXHRuYW1lOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IodHlwZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFJldHVyblZhbHVlIHtcblx0dmFsdWU6IGFueTtcblxuXHRjb25zdHJ1Y3Rvcih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGFzc0ZpZWxkRGVmaW5pdGlvbiB7XG5cdG5hbWU6IHN0cmluZztcblx0dHlwZTogc3RyaW5nIHwgbnVsbDtcblx0bW9kaWZpZXJzOiBNb2RpZmllcnM7XG5cdGluaXRpYWxpemVyOiBBU1ROb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlOiBzdHJpbmcgfCBudWxsLCBtb2RpZmllcnM6IE1vZGlmaWVycywgaW5pdGlhbGl6ZXI6IEFTVE5vZGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHR0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcblx0XHR0aGlzLmluaXRpYWxpemVyID0gaW5pdGlhbGl6ZXI7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIENsYXNzTWV0aG9kRGVmaW5pdGlvbiB7XG5cdG5hbWU6IHN0cmluZztcblx0cGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdO1xuXHRyZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGw7XG5cdG1vZGlmaWVyczogTW9kaWZpZXJzO1xuXHRjaGlsZHJlbjogQVNUTm9kZVtdO1xuXHRpc0NvbnN0cnVjdG9yOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgcGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdLCByZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGwsIG1vZGlmaWVyczogTW9kaWZpZXJzLCBjaGlsZHJlbjogQVNUTm9kZVtdKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuXHRcdHRoaXMucmV0dXJuVHlwZSA9IHJldHVyblR5cGU7XG5cdFx0dGhpcy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXHRcdHRoaXMuaXNDb25zdHJ1Y3RvciA9IG5hbWUgPT09IEdSQU1NQVIuQ09OU1RSVUNUT1I7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIENsYXNzRGVmaW5pdGlvbiB7XG5cdG5vZGU6IEFTVENsYXNzTm9kZTtcblx0bmFtZTogc3RyaW5nO1xuXHRzdXBlckNsYXNzOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0aW5zdGFuY2VGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW107XG5cdGluc3RhbmNlTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9O1xuXHRzdGF0aWNGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW107XG5cdHN0YXRpY01ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfTtcblx0Y29uc3RydWN0b3JNZXRob2Q6IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB8IG51bGwgPSBudWxsO1xuXHRuYXRpdmVJbnN0YW5jZTogYW55ID0gbnVsbDtcblx0aXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0Y2xhc3NOb2RlOiBBU1RDbGFzc05vZGUsXG5cdFx0c3VwZXJDbGFzczogc3RyaW5nIHwgbnVsbCxcblx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0aW5zdGFuY2VGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW10sXG5cdFx0aW5zdGFuY2VNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH0sXG5cdFx0c3RhdGljRmllbGRzOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbltdLFxuXHRcdHN0YXRpY01ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfSxcblx0XHRjb25zdHJ1Y3Rvck1ldGhvZDogQ2xhc3NNZXRob2REZWZpbml0aW9uIHwgbnVsbCA9IG51bGxcblx0KSB7XG5cdFx0dGhpcy5ub2RlID0gY2xhc3NOb2RlO1xuXHRcdHRoaXMuc3VwZXJDbGFzcyA9IHN1cGVyQ2xhc3M7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmluc3RhbmNlRmllbGRzID0gaW5zdGFuY2VGaWVsZHM7XG5cdFx0dGhpcy5pbnN0YW5jZU1ldGhvZHMgPSBpbnN0YW5jZU1ldGhvZHM7XG5cdFx0dGhpcy5zdGF0aWNGaWVsZHMgPSBzdGF0aWNGaWVsZHM7XG5cdFx0dGhpcy5zdGF0aWNNZXRob2RzID0gc3RhdGljTWV0aG9kcztcblx0XHR0aGlzLmNvbnN0cnVjdG9yTWV0aG9kID0gY29uc3RydWN0b3JNZXRob2Q7XG5cdFx0dGhpcy5pc09wZW4gPSBjbGFzc05vZGUubW9kaWZpZXJzLm9wZW47XG5cdH1cblxuXHRzdGF0aWMgZnJvbUFTVChub2RlOiBBU1RDbGFzc05vZGUpOiBDbGFzc0RlZmluaXRpb24ge1xuXHRcdGNvbnN0IGluc3RhbmNlRmllbGRzOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbltdID0gW107XG5cdFx0Y29uc3QgaW5zdGFuY2VNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH0gPSB7fTtcblx0XHRjb25zdCBzdGF0aWNGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW10gPSBbXTtcblx0XHRjb25zdCBzdGF0aWNNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH0gPSB7fTtcblx0XHRsZXQgY29uc3RydWN0b3JNZXRob2Q6IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB8IG51bGwgPSBudWxsO1xuXG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAoY2hpbGQgaW5zdGFuY2VvZiBBU1RGaWVsZE5vZGUpIHtcblx0XHRcdFx0Y29uc3QgZmllbGQgPSBuZXcgQ2xhc3NGaWVsZERlZmluaXRpb24oXG5cdFx0XHRcdFx0Y2hpbGQubmFtZSxcblx0XHRcdFx0XHRjaGlsZC5maWVsZFR5cGVcblx0XHRcdFx0XHRcdD8gY2hpbGQuZmllbGRUeXBlLm5hbWVcblx0XHRcdFx0XHRcdDogbnVsbCxcblx0XHRcdFx0XHRjaGlsZC5tb2RpZmllcnMsXG5cdFx0XHRcdFx0Y2hpbGQuaW5pdFxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdGlmIChmaWVsZC5tb2RpZmllcnMuc3RhdGljKSB7XG5cdFx0XHRcdFx0c3RhdGljRmllbGRzLnB1c2goZmllbGQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGluc3RhbmNlRmllbGRzLnB1c2goZmllbGQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGNoaWxkIGluc3RhbmNlb2YgQVNUTWV0aG9kTm9kZSkge1xuXHRcdFx0XHRjb25zdCBtZXRob2QgPSBuZXcgQ2xhc3NNZXRob2REZWZpbml0aW9uKFxuXHRcdFx0XHRcdGNoaWxkLm5hbWUsXG5cdFx0XHRcdFx0Y2hpbGQucGFyYW1ldGVycyxcblx0XHRcdFx0XHRjaGlsZC5yZXR1cm5UeXBlLFxuXHRcdFx0XHRcdGNoaWxkLm1vZGlmaWVycyxcblx0XHRcdFx0XHRjaGlsZC5jaGlsZHJlblxuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAobWV0aG9kLmlzQ29uc3RydWN0b3IpIHtcblx0XHRcdFx0XHRjb25zdHJ1Y3Rvck1ldGhvZCA9IG1ldGhvZDtcblx0XHRcdFx0fSBlbHNlIGlmIChtZXRob2QubW9kaWZpZXJzLnN0YXRpYykge1xuXHRcdFx0XHRcdHN0YXRpY01ldGhvZHNbbWV0aG9kLm5hbWVdID0gbWV0aG9kO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGluc3RhbmNlTWV0aG9kc1ttZXRob2QubmFtZV0gPSBtZXRob2Q7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93UnVudGltZUVycm9yKGBVbmhhbmRsZWQgbm9kZSAke2NoaWxkLnR5cGV9LmApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgQ2xhc3NEZWZpbml0aW9uKFxuXHRcdFx0bm9kZSxcblx0XHRcdG5vZGUuc3VwZXJDbGFzcz8ubmFtZSB8fCBudWxsLFxuXHRcdFx0bm9kZS5uYW1lLFxuXHRcdFx0aW5zdGFuY2VGaWVsZHMsXG5cdFx0XHRpbnN0YW5jZU1ldGhvZHMsXG5cdFx0XHRzdGF0aWNGaWVsZHMsXG5cdFx0XHRzdGF0aWNNZXRob2RzLFxuXHRcdFx0Y29uc3RydWN0b3JNZXRob2Rcblx0XHQpO1xuXHR9XG5cblx0ZmluZE1ldGhvZChuYW1lOiBzdHJpbmcpOiBBU1RNZXRob2ROb2RlIHtcblx0XHRjb25zdCBub2RlID0gdGhpcy5ub2RlXG5cdFx0ICAgICAgICAgICAgICAgICAuY2hpbGRyZW5cblx0XHQgICAgICAgICAgICAgICAgIC5maW5kKG5vZGUgPT4gbm9kZS5uYW1lID09PSBuYW1lKTtcblxuXHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUTWV0aG9kTm9kZSkge1xuXHRcdFx0cmV0dXJuIG5vZGU7XG5cdFx0fVxuXG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYE1ldGhvZCAke25hbWV9IG5vdCBmb3VuZCBpbiBjbGFzcyAke3RoaXMubmFtZX0uYCk7XG5cdH1cblxuXHRjb25zdHJ1Y3RFbXB0eUluc3RhbmNlKG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IEluc3RhbmNlIHtcblx0XHRjb25zdCBpbnN0YW5jZSA9IG5ldyBJbnN0YW5jZSh0aGlzKTtcblx0XHRvYmplY3RSZWdpc3RyeS5pbnN0YW5jZXMucmVnaXN0ZXIoaW5zdGFuY2UpO1xuXHRcdHJldHVybiBpbnN0YW5jZTtcblx0fVxuXG5cdGNvbnN0cnVjdE5hdGl2ZUluc3RhbmNlKG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgYXJnczogYW55W10gPSBbXSk6IEluc3RhbmNlIHtcblx0XHRjb25zdCBpbnN0YW5jZTogSW5zdGFuY2UgPSB0aGlzLmNvbnN0cnVjdEVtcHR5SW5zdGFuY2Uob2JqZWN0UmVnaXN0cnkpO1xuXHRcdGluc3RhbmNlLl9fbmF0aXZlSW5zdGFuY2UgPSBuZXcgdGhpcy5uYXRpdmVJbnN0YW5jZSguLi5hcmdzKTtcblx0XHRyZXR1cm4gaW5zdGFuY2U7XG5cdH1cblxuXHRjb25zdHJ1Y3ROZXdJbnN0YW5jZVdpdGhvdXRBcmd1bWVudHMob2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQpOiBJbnN0YW5jZSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0TmV3SW5zdGFuY2UoW10sIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCk7XG5cdH1cblxuXHRjb25zdHJ1Y3ROZXdJbnN0YW5jZShhcmdzOiBBU1ROb2RlW10sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogSW5zdGFuY2Uge1xuXHRcdGNvbnN0IG5ld05vZGUgPSBuZXcgQVNUTmV3Tm9kZShhcmdzLCBuZXcgQVNUVHlwZU5vZGUoQVNUVHlwZU5vZGUuS0lORF9TSU1QTEUsIHRoaXMubmFtZSkpO1xuXG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0SW5zdGFuY2VCeU5ld05vZGUobmV3Tm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50KTtcblx0fVxuXG5cdGNvbnN0cnVjdEluc3RhbmNlQnlOZXdOb2RlKGV4cHI6IEFTVE5ld05vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogSW5zdGFuY2Uge1xuXHRcdGNvbnN0IGluc3RhbmNlID0gdGhpcy5jb25zdHJ1Y3RFbXB0eUluc3RhbmNlKG9iamVjdFJlZ2lzdHJ5KTtcblxuXHRcdGluc3RhbmNlLmluaXRpYWxpemVJbnN0YW5jZUZpZWxkcyhvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpO1xuXG5cdFx0aWYgKCF0aGlzLmNvbnN0cnVjdG9yTWV0aG9kKSB7XG5cdFx0XHRyZXR1cm4gaW5zdGFuY2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY29uc3RydWN0b3I6IENsYXNzTWV0aG9kRGVmaW5pdGlvbiA9IHRoaXMuY29uc3RydWN0b3JNZXRob2Q7XG5cdFx0Y29uc3QgY29uc3RydWN0b3JFbnYgPSBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpO1xuXG5cdFx0Y29uc3QgY29uc3RydWN0b3JBcmdzID0gZXZhbE1ldGhvZEFyZ3VtZW50cyhcblx0XHRcdGV4cHIsXG5cdFx0XHRjb25zdHJ1Y3Rvci5wYXJhbWV0ZXJzLFxuXHRcdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0XHRlbnZpcm9ubWVudCxcblx0XHRcdGluc3RhbmNlXG5cdFx0KTtcblxuXHRcdGNvbnN0cnVjdG9yRW52LmRlZmluZShHUkFNTUFSLlRISVMsIGluc3RhbmNlKTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY29uc3RydWN0b3JBcmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBwYXJhbWV0ZXI6IEFTVFBhcmFtZXRlck5vZGUgfCB1bmRlZmluZWQgPSBjb25zdHJ1Y3Rvci5wYXJhbWV0ZXJzW2ldO1xuXHRcdFx0aWYgKHBhcmFtZXRlcikge1xuXHRcdFx0XHRjb25zdHJ1Y3RvckVudi5kZWZpbmUocGFyYW1ldGVyLm5hbWUsIGNvbnN0cnVjdG9yQXJnc1tpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiBjb25zdHJ1Y3Rvci5jaGlsZHJlbikge1xuXHRcdFx0ZXZhbE5vZGUoY2hpbGQsIG9iamVjdFJlZ2lzdHJ5LCBjb25zdHJ1Y3RvckVudiwgaW5zdGFuY2UpO1xuXHRcdH1cblxuXHRcdHJldHVybiBpbnN0YW5jZTtcblx0fVxuXG5cdGNvbnN0cnVjdE5hdGl2ZUluc3RhbmNlQnlOZXdOb2RlKGV4cHI6IEFTVE5ld05vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogSW5zdGFuY2Uge1xuXHRcdGNvbnN0IGluc3RhbmNlOiBJbnN0YW5jZSA9IHRoaXMuY29uc3RydWN0RW1wdHlJbnN0YW5jZShvYmplY3RSZWdpc3RyeSk7XG5cdFx0Y29uc3QgY29uc3RydWN0b3I6IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB8IG51bGwgPSB0aGlzLmNvbnN0cnVjdG9yTWV0aG9kO1xuXHRcdGNvbnN0IGNvbnN0cnVjdG9yRW52OiBFbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCk7XG5cblx0XHRjb25zdCBjb25zdHJ1Y3RvckFyZ3M6IGFueVtdID0gZXZhbE1ldGhvZEFyZ3VtZW50cyhcblx0XHRcdGV4cHIsXG5cdFx0XHRjb25zdHJ1Y3RvclxuXHRcdFx0XHQ/IGNvbnN0cnVjdG9yLnBhcmFtZXRlcnNcblx0XHRcdFx0OiBbXSxcblx0XHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0ZW52aXJvbm1lbnQsXG5cdFx0XHRpbnN0YW5jZVxuXHRcdCk7XG5cblx0XHRjb25zdHJ1Y3RvckVudi5kZWZpbmUoR1JBTU1BUi5USElTLCBpbnN0YW5jZSk7XG5cblx0XHRpZiAodGhpcy5uYXRpdmVJbnN0YW5jZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoJ0NsYXNzIGhhcyBubyBuYXRpdmUgaW5zdGFuY2UnKTtcblx0XHR9XG5cblx0XHRjb25zdCBuYXRpdmVJbnN0YW5jZSA9IG5ldyB0aGlzLm5hdGl2ZUluc3RhbmNlKC4uLmNvbnN0cnVjdG9yQXJncy5tYXAoZnJvbUx5cmFWYWx1ZSkpO1xuXHRcdGlmIChuYXRpdmVJbnN0YW5jZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdGluc3RhbmNlLl9fbmF0aXZlSW5zdGFuY2UgPSBuYXRpdmVJbnN0YW5jZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaW5zdGFuY2U7XG5cdH1cblxuXHRpbml0aWFsaXplSW5zdGFuY2VGaWVsZHMoaW5zdGFuY2U6IEluc3RhbmNlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCk6IHZvaWQge1xuXHRcdGxldCByYXdWYWx1ZTtcblx0XHRmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMuaW5zdGFuY2VGaWVsZHMpIHtcblx0XHRcdHJhd1ZhbHVlID0gZmllbGQuaW5pdGlhbGl6ZXJcblx0XHRcdFx0PyBldmFsRXhwcmVzc2lvbihmaWVsZC5pbml0aWFsaXplciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50KVxuXHRcdFx0XHQ6IG51bGw7XG5cblx0XHRcdGluc3RhbmNlLl9faW5zdGFuY2VGaWVsZHNbZmllbGQubmFtZV0gPSBjYXN0VmFsdWUocmF3VmFsdWUsIGZpZWxkLnR5cGUpO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMuc3RhdGljRmllbGRzKSB7XG5cdFx0XHRyYXdWYWx1ZSA9IGZpZWxkLmluaXRpYWxpemVyXG5cdFx0XHRcdD8gZXZhbEV4cHJlc3Npb24oZmllbGQuaW5pdGlhbGl6ZXIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudClcblx0XHRcdFx0OiBudWxsO1xuXG5cdFx0XHRpbnN0YW5jZS5fX3N0YXRpY0ZpZWxkc1tmaWVsZC5uYW1lXSA9IGNhc3RWYWx1ZShyYXdWYWx1ZSwgZmllbGQudHlwZSk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2VEZWZpbml0aW9uIHtcblx0bm9kZTogQVNUSW50ZXJmYWNlTm9kZTtcblx0bmFtZTogc3RyaW5nO1xuXHRzdGF0aWNGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW107XG5cdGluc3RhbmNlTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdGludGVyZmFjZU5vZGU6IEFTVEludGVyZmFjZU5vZGUsXG5cdFx0bmFtZTogc3RyaW5nLFxuXHRcdHN0YXRpY0ZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXSxcblx0XHRpbnN0YW5jZU1ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfSxcblx0KSB7XG5cdFx0dGhpcy5ub2RlID0gaW50ZXJmYWNlTm9kZTtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuc3RhdGljRmllbGRzID0gc3RhdGljRmllbGRzO1xuXHRcdHRoaXMuaW5zdGFuY2VNZXRob2RzID0gaW5zdGFuY2VNZXRob2RzO1xuXHR9XG5cblx0c3RhdGljIGNvbnN0cnVjdEZyb21BU1Qobm9kZTogQVNUSW50ZXJmYWNlTm9kZSk6IEludGVyZmFjZURlZmluaXRpb24ge1xuXHRcdGNvbnN0IHN0YXRpY0ZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXSA9IFtdO1xuXHRcdGNvbnN0IGluc3RhbmNlTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9ID0ge307XG5cblx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChjaGlsZCBpbnN0YW5jZW9mIEFTVEZpZWxkTm9kZSkge1xuXHRcdFx0XHRjb25zdCBmaWVsZCA9IG5ldyBDbGFzc0ZpZWxkRGVmaW5pdGlvbihcblx0XHRcdFx0XHRjaGlsZC5uYW1lLFxuXHRcdFx0XHRcdGNoaWxkLmZpZWxkVHlwZVxuXHRcdFx0XHRcdFx0PyBjaGlsZC5maWVsZFR5cGUubmFtZVxuXHRcdFx0XHRcdFx0OiBudWxsLFxuXHRcdFx0XHRcdGNoaWxkLm1vZGlmaWVycyxcblx0XHRcdFx0XHRjaGlsZC5pbml0ID8/IG51bGxcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRzdGF0aWNGaWVsZHMucHVzaChmaWVsZCk7XG5cdFx0XHR9IGVsc2UgaWYgKGNoaWxkIGluc3RhbmNlb2YgQVNUTWV0aG9kTm9kZSkge1xuXHRcdFx0XHRjb25zdCBtZXRob2QgPSBuZXcgQ2xhc3NNZXRob2REZWZpbml0aW9uKFxuXHRcdFx0XHRcdGNoaWxkLm5hbWUsXG5cdFx0XHRcdFx0Y2hpbGQucGFyYW1ldGVycyxcblx0XHRcdFx0XHRjaGlsZC5yZXR1cm5UeXBlLFxuXHRcdFx0XHRcdGNoaWxkLm1vZGlmaWVycyxcblx0XHRcdFx0XHRjaGlsZC5jaGlsZHJlblxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdGluc3RhbmNlTWV0aG9kc1ttZXRob2QubmFtZV0gPSBtZXRob2Q7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5oYW5kbGVkIG5vZGUgJHtjaGlsZC50eXBlfS5gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IEludGVyZmFjZURlZmluaXRpb24oXG5cdFx0XHRub2RlLFxuXHRcdFx0bm9kZS5uYW1lLFxuXHRcdFx0c3RhdGljRmllbGRzLFxuXHRcdFx0aW5zdGFuY2VNZXRob2RzXG5cdFx0KTtcblx0fVxufVxuXG4iLAogICAgImltcG9ydCB7UGFyc2VyfSBmcm9tIFwiLi9wYXJzZXJcIjtcbmltcG9ydCB7R1JBTU1BUiwgVG9rZW4sIFRva2VuVHlwZSwgVFlQRV9FTlVNfSBmcm9tIFwiLi4vZ3JhbW1hclwiO1xuaW1wb3J0IHtNb2RpZmllcnMsIFN1cGVyQ2xhc3N9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge1xuXHRBU1RBbm5vdGF0aW9uTm9kZSxcblx0QVNUQXJyYXlOb2RlLFxuXHRBU1RBc3NpZ25tZW50Tm9kZSxcblx0QVNUQmluYXJ5Tm9kZSxcblx0QVNUQ2FsbE5vZGUsXG5cdEFTVENsYXNzTm9kZSxcblx0QVNURWxzZU5vZGUsXG5cdEFTVEV4cHJlc3Npb25Ob2RlLFxuXHRBU1RGaWVsZE5vZGUsXG5cdEFTVEZvcmVhY2hOb2RlLFxuXHRBU1RJZk5vZGUsXG5cdEFTVEltcG9ydE5vZGUsXG5cdEFTVEluZGV4Tm9kZSxcblx0QVNUSW50ZXJmYWNlTm9kZSxcblx0QVNUTGFtYmRhTm9kZSxcblx0QVNUTWF0Y2hDYXNlTm9kZSxcblx0QVNUTWF0Y2hOb2RlLFxuXHRBU1RNZW1iZXJOb2RlLFxuXHRBU1RNZXRob2ROb2RlLFxuXHRBU1ROZXdOb2RlLFxuXHRBU1ROb2RlLFxuXHRBU1ROb2RlVHlwZSxcblx0QVNUUGFyYW1ldGVyTm9kZSxcblx0QVNUUmV0dXJuTm9kZSxcblx0QVNUVGhlbk5vZGUsXG5cdEFTVFR5cGVOb2RlLFxuXHRBU1RVbmFyeU5vZGUsXG5cdEFTVFZhcmlhYmxlTm9kZSxcblx0QVNUVkRvbU5vZGUsXG5cdEFTVFZEb21UZXh0Tm9kZVxufSBmcm9tIFwiLi4vYXN0XCI7XG5pbXBvcnQge3Rocm93UGFyc2VyRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcbmltcG9ydCB7c3BhbkZyb219IGZyb20gXCIuL3BhcnNlcl9zb3VyY2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1peGVkVHlwZSgpOiBBU1RUeXBlTm9kZSB7XG5cdHJldHVybiBuZXcgQVNUVHlwZU5vZGUoQVNUVHlwZU5vZGUuS0lORF9TSU1QTEUsIFRZUEVfRU5VTS5NSVhFRCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVR5cGUocGFyc2VyOiBQYXJzZXIpOiBBU1RUeXBlTm9kZSB7XG5cdGxldCB0eXBlO1xuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pIHtcblx0XHR0eXBlID0gcGFyc2VMYW1iZGFUeXBlKHBhcnNlcik7XG5cdH0gZWxzZSB7XG5cdFx0dHlwZSA9IHBhcnNlU2ltcGxlT3JHZW5lcmljVHlwZShwYXJzZXIpO1xuXHR9XG5cblx0aWYgKHBhcnNlci5jb25zdW1lSWZPcGVyYXRvcihHUkFNTUFSLlFVRVNUSU9OX01BUkspKSB7XG5cdFx0dHlwZS5udWxsYWJsZSA9IHRydWU7XG5cdH1cblxuXHRyZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVHlwZVBhcmFtZXRlcnMocGFyc2VyOiBQYXJzZXIpOiBzdHJpbmdbXSB7XG5cdGNvbnN0IHBhcmFtZXRlcnMgPSBbXTtcblxuXHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5MRVNTX1RIQU4pO1xuXG5cdGRvIHtcblx0XHRjb25zdCBuYW1lID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKS52YWx1ZTtcblx0XHRwYXJhbWV0ZXJzLnB1c2gobmFtZSk7XG5cblx0XHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5DT01NQSkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHBhcnNlci5uZXh0KCk7XG5cdH0gd2hpbGUgKHRydWUpO1xuXG5cdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkdSRUFURVJfVEhBTik7XG5cblx0cmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVNpbXBsZU9yR2VuZXJpY1R5cGUocGFyc2VyOiBQYXJzZXIpOiBBU1RUeXBlTm9kZSB7XG5cdGNvbnN0IG5hbWVUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUVHlwZU5vZGUoQVNUVHlwZU5vZGUuS0lORF9TSU1QTEUsIG5hbWVUb2tlbi52YWx1ZSk7XG5cblx0aWYgKHBhcnNlci5jb25zdW1lSWZPcGVyYXRvcihHUkFNTUFSLkxFU1NfVEhBTikpIHtcblxuXHRcdG5vZGUua2luZCA9IEFTVFR5cGVOb2RlLktJTkRfR0VORVJJQztcblxuXHRcdGRvIHtcblx0XHRcdG5vZGUudHlwZUFyZ3VtZW50cy5wdXNoKHBhcnNlVHlwZShwYXJzZXIpKTtcblx0XHR9IHdoaWxlIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpO1xuXG5cdFx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuR1JFQVRFUl9USEFOKTtcblx0fVxuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VMYW1iZGFUeXBlKHBhcnNlcjogUGFyc2VyKTogQVNUVHlwZU5vZGUge1xuXHRjb25zdCBub2RlID0gbmV3IEFTVFR5cGVOb2RlKEFTVFR5cGVOb2RlLktJTkRfTEFNQkRBLCAnbGFtYmRhJyk7XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTik7XG5cblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpIHtcblx0XHRkbyB7XG5cdFx0XHRub2RlLnBhcmFtZXRlclR5cGVzLnB1c2gocGFyc2VUeXBlKHBhcnNlcikpO1xuXHRcdH0gd2hpbGUgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSk7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkFSUk9XKTtcblxuXHRub2RlLnJldHVyblR5cGUgPSBwYXJzZVR5cGUocGFyc2VyKTtcblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUHJvZ3JhbShwYXJzZXI6IFBhcnNlcik6IEFTVE5vZGUge1xuXHRjb25zdCBjaGlsZHJlbjogQVNUTm9kZVtdID0gW107XG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnR5cGUgIT09IFRva2VuVHlwZS5FT0YpIHtcblx0XHRpZiAocGFyc2VyLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuQ09NTUVOVCkge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3Qgbm9kZTogQVNUTm9kZSB8IG51bGwgPSBwYXJzZVN0YXRlbWVudChwYXJzZXIpO1xuXHRcdFx0aWYgKG5vZGUpIHtcblx0XHRcdFx0Y2hpbGRyZW4ucHVzaChub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLlBST0dSQU1NLCBjaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVN0YXRlbWVudChwYXJzZXI6IFBhcnNlcik6IEFTVE5vZGUgfCBudWxsIHtcblx0aWYgKHBhcnNlci5jb25zdW1lSWZDb21tZW50KCkpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHN3aXRjaCAocGFyc2VyLnBlZWsoKS52YWx1ZSkge1xuXHRcdGNhc2UgR1JBTU1BUi5JTVBPUlQ6IHtcblx0XHRcdHJldHVybiBwYXJzZUltcG9ydChwYXJzZXIpO1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuT1BFTjpcblx0XHRjYXNlIEdSQU1NQVIuQ0xBU1M6IHtcblx0XHRcdHJldHVybiBwYXJzZUNsYXNzRGVjbGFyYXRpb24ocGFyc2VyKTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLklOVEVSRkFDRToge1xuXHRcdFx0cmV0dXJuIHBhcnNlSW50ZXJmYWNlRGVjbGFyYXRpb24ocGFyc2VyKTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLlJFVFVSTjoge1xuXHRcdFx0cmV0dXJuIHBhcnNlUmV0dXJuU3RhdGVtZW50KHBhcnNlcik7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5MRVQ6IHtcblx0XHRcdHJldHVybiBwYXJzZVZhcmlhYmxlRGVjbGFyYXRpb24ocGFyc2VyKTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLklGOiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VJZkRlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5NQVRDSDoge1xuXHRcdFx0cmV0dXJuIHBhcnNlTWF0Y2hEZWNsYXJhdGlvbihwYXJzZXIpO1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuRk9SRUFDSDoge1xuXHRcdFx0cmV0dXJuIHBhcnNlRm9yZWFjaERlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0fVxuXHRcdGRlZmF1bHQ6IHtcblx0XHRcdHJldHVybiBwYXJzZUV4cHJlc3Npb25TdGF0ZW1lbnQocGFyc2VyKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmV0dXJuU3RhdGVtZW50KHBhcnNlcjogUGFyc2VyKTogQVNUUmV0dXJuTm9kZSB7XG5cdHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuUkVUVVJOKTtcblxuXHRsZXQgYXJndW1lbnQgPSBudWxsO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5TRU1JQ09MT04pIHtcblx0XHRhcmd1bWVudCA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuU0VNSUNPTE9OKTtcblxuXHRyZXR1cm4gbmV3IEFTVFJldHVybk5vZGUoYXJndW1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJbXBvcnQocGFyc2VyOiBQYXJzZXIpOiBBU1RJbXBvcnROb2RlIHtcblx0cGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5JTVBPUlQpO1xuXG5cdGxldCBuYW1lcyA9IFtdO1xuXHRsZXQgZnJvbSA9IG51bGw7XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkJSQUNFX09QRU4pIHtcblx0XHRuYW1lcyA9IHBhcnNlSW1wb3J0TGlzdChwYXJzZXIpO1xuXHRcdHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuRlJPTSk7XG5cdFx0ZnJvbSA9IHBhcnNlci5leHBlY3RTdHJpbmcoKS52YWx1ZTtcblx0fSBlbHNlIHtcblx0XHRuYW1lcy5wdXNoKHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCkudmFsdWUpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuU0VNSUNPTE9OKTtcblxuXHRyZXR1cm4gbmV3IEFTVEltcG9ydE5vZGUobmFtZXMsIGZyb20pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJbXBvcnRMaXN0KHBhcnNlcjogUGFyc2VyKTogc3RyaW5nW10ge1xuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9PUEVOKTtcblxuXHRjb25zdCBuYW1lczogc3RyaW5nW10gPSBbXTtcblxuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdGNvbnN0IG5hbWVUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cblx0XHRuYW1lcy5wdXNoKG5hbWVUb2tlbi52YWx1ZSk7XG5cblx0XHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRicmVhaztcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX0NMT1NFKTtcblxuXHRyZXR1cm4gbmFtZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNsYXNzRGVjbGFyYXRpb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RDbGFzc05vZGUge1xuXHRjb25zdCBhbm5vdGF0aW9ucyA9IHBhcnNlQW5ub3RhdGlvbnMocGFyc2VyKTtcblx0Y29uc3QgbW9kaWZpZXJzID0gcGFyc2VNb2RpZmllcnMocGFyc2VyLCBbR1JBTU1BUi5PUEVOXSk7XG5cblx0Y29uc3QgY2xhc3NUb2tlbiA9IHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuQ0xBU1MpO1xuXHRjb25zdCBuYW1lVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXG5cdGxldCB0eXBlUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuTEVTU19USEFOKSB7XG5cdFx0dHlwZVBhcmFtZXRlcnMgPSBwYXJzZVR5cGVQYXJhbWV0ZXJzKHBhcnNlcik7XG5cdH1cblxuXHRsZXQgc3VwZXJDbGFzcyA9IG51bGw7XG5cdGlmIChwYXJzZXIuY29uc3VtZUlmS2V5d29yZChHUkFNTUFSLkVYVEVORFMpKSB7XG5cdFx0c3VwZXJDbGFzcyA9IG5ldyBTdXBlckNsYXNzKFxuXHRcdFx0QVNUTm9kZVR5cGUuSURFTlRJRklFUixcblx0XHRcdHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCkudmFsdWVcblx0XHQpO1xuXHR9XG5cblx0bGV0IGltcGxlbWVudHNJbnRlcmZhY2VzID0gW107XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLklNUExFTUVOVFMpIHtcblx0XHRwYXJzZXIubmV4dCgpO1xuXG5cdFx0ZG8ge1xuXHRcdFx0Y29uc3QgaW50ZXJmYWNlVHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHRcdFx0aW1wbGVtZW50c0ludGVyZmFjZXMucHVzaChpbnRlcmZhY2VUeXBlKTtcblx0XHR9IHdoaWxlIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfT1BFTik7XG5cblx0Y29uc3QgY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdO1xuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5CUkFDRV9DTE9TRSkge1xuXHRcdGlmIChwYXJzZXIucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5DT01NRU5UKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbWVtYmVyOiBBU1ROb2RlIHwgbnVsbCA9IHBhcnNlQ2xhc3NNZW1iZXIocGFyc2VyKTtcblx0XHRpZiAobWVtYmVyID09PSBudWxsKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y2hpbGRyZW4ucHVzaChtZW1iZXIpO1xuXHR9XG5cblx0Y29uc3QgYnJhY2VDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfQ0xPU0UpO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUQ2xhc3NOb2RlKFxuXHRcdG5hbWVUb2tlbi52YWx1ZSxcblx0XHRhbm5vdGF0aW9ucyxcblx0XHRtb2RpZmllcnMsXG5cdFx0dHlwZVBhcmFtZXRlcnMsXG5cdFx0aW1wbGVtZW50c0ludGVyZmFjZXMsXG5cdFx0c3VwZXJDbGFzcyxcblx0XHRjaGlsZHJlblxuXHQpO1xuXG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKGNsYXNzVG9rZW4sIGJyYWNlQ2xvc2VUb2tlbik7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJbnRlcmZhY2VEZWNsYXJhdGlvbihwYXJzZXI6IFBhcnNlcik6IEFTVEludGVyZmFjZU5vZGUge1xuXHRjb25zdCBhbm5vdGF0aW9ucyA9IHBhcnNlQW5ub3RhdGlvbnMocGFyc2VyKTtcblx0Y29uc3QgbW9kaWZpZXJzID0gcGFyc2VNb2RpZmllcnMocGFyc2VyLCBbXSk7IC8vIGludGVyZmFjZXMgc2luZCBpbXBsaXppdCBwdWJsaWNcblxuXHRjb25zdCBpbnRlcmZhY2VUb2tlbiA9IHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuSU5URVJGQUNFKTtcblx0Y29uc3QgbmFtZVRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblxuXHRsZXQgdHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdID0gW107XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkxFU1NfVEhBTikge1xuXHRcdHR5cGVQYXJhbWV0ZXJzID0gcGFyc2VUeXBlUGFyYW1ldGVycyhwYXJzZXIpO1xuXHR9XG5cblx0bGV0IGV4dGVuZHNJbnRlcmZhY2VzID0gW107XG5cdGlmIChwYXJzZXIuY29uc3VtZUlmS2V5d29yZChHUkFNTUFSLkVYVEVORFMpKSB7XG5cdFx0ZG8ge1xuXHRcdFx0ZXh0ZW5kc0ludGVyZmFjZXMucHVzaChwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpLnZhbHVlKTtcblx0XHR9IHdoaWxlIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfT1BFTik7XG5cblx0Y29uc3QgY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdO1xuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5CUkFDRV9DTE9TRSkge1xuXHRcdGlmIChwYXJzZXIuY29uc3VtZUlmQ29tbWVudCgpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBtZW1iZXIgPSBwYXJzZUNsYXNzTWVtYmVyKHBhcnNlcik7XG5cdFx0aWYgKG1lbWJlciA9PT0gbnVsbCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKG1lbWJlciBpbnN0YW5jZW9mIEFTVEZpZWxkTm9kZSAmJiAhbWVtYmVyLm1vZGlmaWVycy5zdGF0aWMpIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoJ0ludGVyZmFjZSBmaWVsZHMgbXVzdCBiZSBzdGF0aWMuJyk7XG5cdFx0fVxuXG5cdFx0aWYgKG1lbWJlciBpbnN0YW5jZW9mIEFTVE1ldGhvZE5vZGUgJiYgbWVtYmVyLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoJ0ludGVyZmFjZSBtZXRob2RzIG11c3Qgbm90IGhhdmUgYSBib2R5LicpO1xuXHRcdH1cblxuXHRcdGNoaWxkcmVuLnB1c2gobWVtYmVyKTtcblx0fVxuXG5cdGNvbnN0IGJyYWNlQ2xvc2VUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX0NMT1NFKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVEludGVyZmFjZU5vZGUoXG5cdFx0bmFtZVRva2VuLnZhbHVlLFxuXHRcdGFubm90YXRpb25zLFxuXHRcdG1vZGlmaWVycyxcblx0XHR0eXBlUGFyYW1ldGVycyxcblx0XHRleHRlbmRzSW50ZXJmYWNlcyxcblx0XHRjaGlsZHJlblxuXHQpO1xuXG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKGludGVyZmFjZVRva2VuLCBicmFjZUNsb3NlVG9rZW4pO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQW5ub3RhdGlvbnMocGFyc2VyOiBQYXJzZXIpOiBBU1RBbm5vdGF0aW9uTm9kZVtdIHtcblx0Y29uc3QgYW5ub3RhdGlvbnMgPSBbXTtcblxuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuQU5OT1RBVElPTikge1xuXHRcdGFubm90YXRpb25zLnB1c2gocGFyc2VBbm5vdGF0aW9uKHBhcnNlcikpO1xuXHR9XG5cblx0cmV0dXJuIGFubm90YXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBbm5vdGF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUQW5ub3RhdGlvbk5vZGUge1xuXHRjb25zdCB0b2tlbiA9IHBhcnNlci5leHBlY3RBbm5vdGF0aW9uKCk7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUQW5ub3RhdGlvbk5vZGUodG9rZW4udmFsdWUpO1xuXG5cdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKSkge1xuXHRcdHdoaWxlIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKSB7XG5cdFx0XHRjb25zdCBrZXkgPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpLnZhbHVlO1xuXHRcdFx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuQVNTSUdOKTtcblxuXHRcdFx0Y29uc3QgdmFsdWUgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0XHRcdG5vZGUucHJvcGVydGllcy5zZXQoa2V5LCB2YWx1ZSk7XG5cblx0XHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkNPTU1BKSB7XG5cdFx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXHR9XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU1vZGlmaWVycyhwYXJzZXI6IFBhcnNlciwgYWxsb3dlZDogc3RyaW5nW10pOiBNb2RpZmllcnMge1xuXHRjb25zdCBtb2RpZmllcnM6IHsgW2luZGV4OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcblxuXHRhbGxvd2VkLmZvckVhY2gobW9kaWZpZXIgPT4gbW9kaWZpZXJzW21vZGlmaWVyXSA9IGZhbHNlKTtcblxuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuS0VZV09SRCAmJiBhbGxvd2VkLmluY2x1ZGVzKHBhcnNlci5wZWVrKCkudmFsdWUpKSB7XG5cdFx0Y29uc3QgbW9kaWZpZXIgPSBwYXJzZXIubmV4dCgpLnZhbHVlO1xuXG5cdFx0aWYgKG1vZGlmaWVyc1ttb2RpZmllcl0pIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoYER1cGxpY2F0ZSBtb2RpZmllcjogJHttb2RpZmllcn1gKTtcblx0XHR9XG5cblx0XHRtb2RpZmllcnNbbW9kaWZpZXJdID0gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBuZXcgTW9kaWZpZXJzKG1vZGlmaWVycyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBhcmFtZXRlcnMocGFyc2VyOiBQYXJzZXIpOiBBU1RQYXJhbWV0ZXJOb2RlW10ge1xuXHRjb25zdCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10gPSBbXTtcblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSkge1xuXHRcdHJldHVybiBwYXJhbWV0ZXJzO1xuXHR9XG5cblx0ZG8ge1xuXHRcdGNvbnN0IG5hbWVUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cdFx0bGV0IHR5cGUgPSBudWxsO1xuXHRcdGxldCBkZWZhdWx0VmFsdWUgPSBudWxsO1xuXG5cdFx0bGV0IHR5cGVUb2tlbiA9IG51bGw7XG5cdFx0bGV0IGRlZmF1bHRWYWx1ZVRva2VuID0gbnVsbDtcblxuXHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkNPTE9OKSB7XG5cdFx0XHR0eXBlVG9rZW4gPSBwYXJzZXIubmV4dCgpO1xuXHRcdFx0dHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHRcdH1cblxuXHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkFTU0lHTikge1xuXHRcdFx0ZGVmYXVsdFZhbHVlVG9rZW4gPSBwYXJzZXIubmV4dCgpO1xuXHRcdFx0ZGVmYXVsdFZhbHVlID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RQYXJhbWV0ZXJOb2RlKG5hbWVUb2tlbi52YWx1ZSwgdHlwZSwgZGVmYXVsdFZhbHVlKTtcblx0XHRub2RlLnNwYW4gPSBzcGFuRnJvbSh0eXBlVG9rZW4gfHwgbmFtZVRva2VuLCBkZWZhdWx0VmFsdWVUb2tlbiB8fCBuYW1lVG9rZW4pO1xuXG5cdFx0cGFyYW1ldGVycy5wdXNoKG5vZGUpO1xuXHR9IHdoaWxlIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpO1xuXG5cdHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDbGFzc01lbWJlcihwYXJzZXI6IFBhcnNlcik6IEFTVE5vZGUgfCBudWxsIHtcblx0Y29uc3Qgc3RhcnRUb2tlbiA9IHBhcnNlci5wZWVrKCk7XG5cblx0Y29uc3QgYW5ub3RhdGlvbnMgPSBwYXJzZUFubm90YXRpb25zKHBhcnNlcik7XG5cdGNvbnN0IG1vZGlmaWVycyA9IHBhcnNlTW9kaWZpZXJzKFxuXHRcdHBhcnNlcixcblx0XHRbXG5cdFx0XHRHUkFNTUFSLlBVQkxJQyxcblx0XHRcdEdSQU1NQVIuUFJJVkFURSxcblx0XHRcdEdSQU1NQVIuU1RBVElDLFxuXHRcdFx0R1JBTU1BUi5SRUFET05MWVxuXHRcdF1cblx0KTtcblxuXHRjb25zdCBuYW1lVG9rZW4gPSBwYXJzZXIuZXhwZWN0T25lT2YoW1Rva2VuVHlwZS5JREVOVElGSUVSLCBUb2tlblR5cGUuS0VZV09SRF0pO1xuXG5cdGxldCBmaWVsZFR5cGUgPSBudWxsO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5DT0xPTikge1xuXHRcdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT0xPTikpIHtcblx0XHRcdGZpZWxkVHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHRcdH1cblx0fVxuXG5cdGxldCBpbml0ID0gbnVsbDtcblx0aWYgKHBhcnNlci5jb25zdW1lSWZPcGVyYXRvcihHUkFNTUFSLkFTU0lHTikpIHtcblx0XHRpbml0ID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdH1cblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5TRU1JQ09MT04pIHtcblx0XHRpZiAoIW1vZGlmaWVycy5wdWJsaWMgJiYgIW1vZGlmaWVycy5wcml2YXRlKSB7XG5cdFx0XHRtb2RpZmllcnMucHJpdmF0ZSA9IHRydWU7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc2VtaWNvbG9uVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5TRU1JQ09MT04pO1xuXG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RGaWVsZE5vZGUobmFtZVRva2VuLnZhbHVlLCBtb2RpZmllcnMsIGZpZWxkVHlwZSwgaW5pdCk7XG5cdFx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgc2VtaWNvbG9uVG9rZW4pO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0bGV0IHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5MRVNTX1RIQU4pIHtcblx0XHR0eXBlUGFyYW1ldGVycyA9IHBhcnNlVHlwZVBhcmFtZXRlcnMocGFyc2VyKTtcblx0fVxuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pIHtcblx0XHRpZiAoIW1vZGlmaWVycy5wdWJsaWMgJiYgIW1vZGlmaWVycy5wcml2YXRlKSB7XG5cdFx0XHRtb2RpZmllcnMucHVibGljID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKTtcblx0XHRjb25zdCBwYXJhbWV0ZXJzID0gcGFyc2VQYXJhbWV0ZXJzKHBhcnNlcik7XG5cdFx0Y29uc3QgcGFyZW50aGVzZXNDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXG5cdFx0bGV0IHJldHVyblR5cGUgPSBudWxsO1xuXHRcdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT0xPTikpIHtcblx0XHRcdHJldHVyblR5cGUgPSBwYXJzZVR5cGUocGFyc2VyKTtcblx0XHR9XG5cblx0XHRjb25zdCBjaGlsZHJlbjogQVNUTm9kZVtdID0gcGFyc2VCbG9jayhwYXJzZXIpO1xuXG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RNZXRob2ROb2RlKFxuXHRcdFx0bmFtZVRva2VuLnZhbHVlLFxuXHRcdFx0bmFtZVRva2VuLnZhbHVlID09PSBHUkFNTUFSLkNPTlNUUlVDVE9SID8gQVNUTm9kZVR5cGUuQ09OU1RSVUNUT1IgOiBBU1ROb2RlVHlwZS5NRVRIT0QsXG5cdFx0XHRhbm5vdGF0aW9ucyxcblx0XHRcdG1vZGlmaWVycyxcblx0XHRcdHR5cGVQYXJhbWV0ZXJzLFxuXHRcdFx0cGFyYW1ldGVycyxcblx0XHRcdHJldHVyblR5cGUsXG5cdFx0XHRjaGlsZHJlblxuXHRcdCk7XG5cblx0XHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBwYXJlbnRoZXNlc0Nsb3NlVG9rZW4pO1xuXG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHR0aHJvd1BhcnNlckVycm9yKGBJbnZhbGlkIGNsYXNzIG1lbWJlcjogJHtuYW1lVG9rZW4udmFsdWV9YCk7XG5cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUJsb2NrKHBhcnNlcjogUGFyc2VyKTogQVNUTm9kZVtdIHtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuU0VNSUNPTE9OKSB7XG5cdFx0cGFyc2VyLm5leHQoKTtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9PUEVOKTtcblxuXHRjb25zdCBjaGlsZHJlbiA9IFtdO1xuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5CUkFDRV9DTE9TRSkge1xuXHRcdGlmIChwYXJzZXIucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5DT01NRU5UKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGNvbnN0IGNoaWxkOiBBU1ROb2RlIHwgbnVsbCA9IHBhcnNlU3RhdGVtZW50KHBhcnNlcik7XG5cdFx0aWYgKGNoaWxkKSB7XG5cdFx0XHRjaGlsZHJlbi5wdXNoKGNoaWxkKTtcblx0XHR9XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9DTE9TRSk7XG5cblx0cmV0dXJuIGNoaWxkcmVuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VWYXJpYWJsZURlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUVmFyaWFibGVOb2RlIHtcblx0Y29uc3QgbGV0VG9rZW4gPSBwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLkxFVCk7XG5cdGNvbnN0IG5hbWVUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cblx0bGV0IHR5cGVBbm5vdGF0aW9uID0gbnVsbDtcblx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTE9OKSkge1xuXHRcdHR5cGVBbm5vdGF0aW9uID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cdH1cblxuXHRsZXQgaW5pdCA9IG51bGw7XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkFTU0lHTikge1xuXHRcdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkFTU0lHTik7XG5cdFx0aW5pdCA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHR9XG5cblx0Y29uc3Qgc2VtaWNvbG9uVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5TRU1JQ09MT04pO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUVmFyaWFibGVOb2RlKG5hbWVUb2tlbi52YWx1ZSwgdHlwZUFubm90YXRpb24sIGluaXQpO1xuXHRub2RlLnNwYW4gPSBzcGFuRnJvbShsZXRUb2tlbiwgc2VtaWNvbG9uVG9rZW4pO1xuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJZkRlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUSWZOb2RlIHtcblx0Y29uc3Qgc3RhcnRUb2tlbiA9IHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuSUYpO1xuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pO1xuXHRjb25zdCBjb25kaXRpb24gPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0Y29uc3QgcGFyZW50aGVzZXNDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUSWZOb2RlKGNvbmRpdGlvbiwgbmV3IEFTVFRoZW5Ob2RlKHBhcnNlQmxvY2socGFyc2VyKSkpO1xuXG5cdGlmIChwYXJzZXIuY29uc3VtZUlmS2V5d29yZChHUkFNTUFSLkVMU0UpKSB7XG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuSUYpIHtcblx0XHRcdG5vZGUuZWxzZSA9IHBhcnNlSWZEZWNsYXJhdGlvbihwYXJzZXIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRub2RlLmVsc2UgPSBuZXcgQVNURWxzZU5vZGUocGFyc2VCbG9jayhwYXJzZXIpKTtcblx0XHR9XG5cdH1cblxuXHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBwYXJlbnRoZXNlc0Nsb3NlVG9rZW4pO1xuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VNYXRjaERlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUTWF0Y2hOb2RlIHtcblx0Y29uc3Qgc3RhcnRUb2tlbiA9IHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuTUFUQ0gpO1xuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKTtcblxuXHRjb25zdCBleHByZXNzaW9uID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9PUEVOKTtcblxuXHRjb25zdCBtYXRjaENhc2VzOiBBU1RNYXRjaENhc2VOb2RlW10gPSBbXTtcblx0bGV0IGRlZmF1bHRDYXNlOiBBU1RNYXRjaENhc2VOb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQlJBQ0VfQ0xPU0UpIHtcblx0XHRjb25zdCBtYXRjaENhc2U6IEFTVE1hdGNoQ2FzZU5vZGUgPSBwYXJzZU1hdGNoQ2FzZURlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0aWYgKG1hdGNoQ2FzZS50ZXN0ID09PSBudWxsKSB7XG5cdFx0XHRkZWZhdWx0Q2FzZSA9IG1hdGNoQ2FzZTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRtYXRjaENhc2VzLnB1c2gobWF0Y2hDYXNlKTtcblx0fVxuXG5cdGNvbnN0IGJyYWNlQ2xvc2VUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX0NMT1NFKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVE1hdGNoTm9kZShleHByZXNzaW9uLCBtYXRjaENhc2VzLCBkZWZhdWx0Q2FzZSk7XG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIGJyYWNlQ2xvc2VUb2tlbik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU1hdGNoQ2FzZURlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUTWF0Y2hDYXNlTm9kZSB7XG5cdGNvbnN0IGNhc2VOb2RlID0gbmV3IEFTVE1hdGNoQ2FzZU5vZGUoKTtcblxuXHRpZiAocGFyc2VyLmNvbnN1bWVJZktleXdvcmQoR1JBTU1BUi5ERUZBVUxUKSkge1xuXHRcdGNhc2VOb2RlLnRlc3QgPSBudWxsO1xuXHR9IGVsc2Uge1xuXHRcdGNhc2VOb2RlLnRlc3QgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkNPTE9OKTtcblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5CUkFDRV9PUEVOKSB7XG5cdFx0Y2FzZU5vZGUuY2hpbGRyZW4gPSBwYXJzZUJsb2NrKHBhcnNlcik7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3QgY2hpbGQ6IEFTVE5vZGUgfCBudWxsID0gcGFyc2VTdGF0ZW1lbnQocGFyc2VyKTtcblx0XHRpZiAoY2hpbGQpIHtcblx0XHRcdGNhc2VOb2RlLmNoaWxkcmVuLnB1c2goY2hpbGQpXG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGNhc2VOb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VGb3JlYWNoRGVjbGFyYXRpb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RGb3JlYWNoTm9kZSB7XG5cdGNvbnN0IHN0YXJ0VG9rZW4gPSBwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLkZPUkVBQ0gpO1xuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pO1xuXG5cdGNvbnN0IGl0ZXJhdG9yVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXHRjb25zdCBpdGVyYXRvciA9IGl0ZXJhdG9yVG9rZW4udmFsdWU7XG5cblx0cGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5JTik7XG5cblx0Y29uc3QgaXRlcmFibGUgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblxuXHRjb25zdCBwYXJlbnRoZXNlc0Nsb3NlVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RGb3JlYWNoTm9kZShpdGVyYXRvciwgaXRlcmFibGUsIHBhcnNlQmxvY2socGFyc2VyKSk7XG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIHBhcmVudGhlc2VzQ2xvc2VUb2tlbik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUFycmF5KHBhcnNlcjogUGFyc2VyKTogQVNUQXJyYXlOb2RlIHtcblx0Y29uc3Qgc3RhcnRUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX09QRU4pO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUQXJyYXlOb2RlKCk7XG5cblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfQ0xPU0UpIHtcblx0XHRkbyB7XG5cdFx0XHRub2RlLmVsZW1lbnRzLnB1c2gocGFyc2VFeHByZXNzaW9uKHBhcnNlcikpO1xuXHRcdH0gd2hpbGUgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSk7XG5cdH1cblxuXHRjb25zdCBicmFja2V0U3F1YXJlQ2xvc2VUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX0NMT1NFKTtcblxuXHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBicmFja2V0U3F1YXJlQ2xvc2VUb2tlbik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUxhbWJkYShwYXJzZXI6IFBhcnNlcik6IEFTVExhbWJkYU5vZGUge1xuXHRjb25zdCBzdGFydFRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfT1BFTik7XG5cblx0Y29uc3QgcGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdID0gW107XG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLkFSUk9XKSB7XG5cdFx0Y29uc3QgbmFtZSA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCkudmFsdWU7XG5cdFx0bGV0IHR5cGUgPSBudWxsO1xuXHRcdGxldCBkZWZhdWx0VmFsdWUgPSBudWxsO1xuXG5cdFx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTE9OKSkge1xuXHRcdFx0dHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHRcdH1cblxuXHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkFTU0lHTikge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHRcdGRlZmF1bHRWYWx1ZSA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHRcdH1cblxuXHRcdHBhcmFtZXRlcnMucHVzaChuZXcgQVNUUGFyYW1ldGVyTm9kZShuYW1lLCB0eXBlLCBkZWZhdWx0VmFsdWUpKTtcblxuXHRcdHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkFSUk9XKTtcblxuXHRsZXQgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgPSBjcmVhdGVNaXhlZFR5cGUoKTtcblx0aWYgKHBhcnNlci5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLklERU5USUZJRVIpIHtcblx0XHRyZXR1cm5UeXBlID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQ09MT04pIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVyblR5cGUgPSBjcmVhdGVNaXhlZFR5cGUoKTtcblx0XHRcdHBhcnNlci5yZXdpbmQoKTtcblx0XHR9XG5cdH1cblxuXHRsZXQgY2hpbGRyZW4gPSBbXTtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQlJBQ0VfT1BFTikge1xuXHRcdGNoaWxkcmVuID0gcGFyc2VCbG9jayhwYXJzZXIpO1xuXHR9IGVsc2Uge1xuXHRcdGNoaWxkcmVuLnB1c2gocGFyc2VFeHByZXNzaW9uKHBhcnNlcikpO1xuXHR9XG5cblx0Y29uc3QgYnJhY2VDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfQ0xPU0UpO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUTGFtYmRhTm9kZShwYXJhbWV0ZXJzLCByZXR1cm5UeXBlLCBjaGlsZHJlbik7XG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIGJyYWNlQ2xvc2VUb2tlbik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb29rc0xpa2VMYW1iZGEocGFyc2VyOiBQYXJzZXIpOiBib29sZWFuIHtcblx0Y29uc3Qgc3RhcnQgPSBwYXJzZXIucG9zaXRpb24oKTtcblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5CUkFDRV9PUEVOKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cGFyc2VyLm5leHQoKTtcblxuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuSURFTlRJRklFUikge1xuXHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTE9OKSkge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHR9XG5cdFx0aWYgKCFwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGlzTGFtYmRhID0gcGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5BUlJPVztcblx0cGFyc2VyLnNlZWtBdChzdGFydClcblx0cmV0dXJuIGlzTGFtYmRhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VFeHByZXNzaW9uU3RhdGVtZW50KHBhcnNlcjogUGFyc2VyKTogQVNURXhwcmVzc2lvbk5vZGUge1xuXHRjb25zdCBleHByID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuU0VNSUNPTE9OKTtcblxuXHRyZXR1cm4gbmV3IEFTVEV4cHJlc3Npb25Ob2RlKGV4cHIpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUV4cHJlc3Npb24ocGFyc2VyOiBQYXJzZXIsIHByZWNlZGVuY2U6IG51bWJlciA9IDApOiBBU1ROb2RlIHtcblx0bGV0IGV4cHIgPSBwYXJzZVBvc3RmaXgocGFyc2VyLCBwYXJzZVVuYXJ5KHBhcnNlcikpO1xuXG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0Y29uc3QgdG9rZW4gPSBwYXJzZXIucGVlaygpO1xuXHRcdGlmICghdG9rZW4pIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGxldCB0b2tlblByZWNlZGVuY2UgPSBsb29rdXBQcmVjZWRlbmNlKHRva2VuKTtcblx0XHRpZiAodG9rZW5QcmVjZWRlbmNlIDwgcHJlY2VkZW5jZSkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLkFTU0lHTikge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHRcdGV4cHIgPSBuZXcgQVNUQXNzaWdubWVudE5vZGUoZXhwciwgcGFyc2VFeHByZXNzaW9uKHBhcnNlciwgdG9rZW5QcmVjZWRlbmNlKSk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoR1JBTU1BUi5NQVRIX09QRVJBVE9SUy5pbmNsdWRlcyh0b2tlbi52YWx1ZSlcblx0XHRcdHx8IEdSQU1NQVIuTE9HSUNfT1BFUkFUT1JTLmluY2x1ZGVzKHRva2VuLnZhbHVlKSkge1xuXHRcdFx0Y29uc3Qgc3RhcnRUb2tlbiA9IHBhcnNlci5uZXh0KCk7XG5cdFx0XHRjb25zdCByaWdodCA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIsIHRva2VuUHJlY2VkZW5jZSArIDEpO1xuXHRcdFx0Y29uc3QgZW5kVG9rZW4gPSBwYXJzZXIucGVlaygpO1xuXG5cdFx0XHRjb25zdCBub2RlID0gbmV3IEFTVEJpbmFyeU5vZGUoZXhwciwgcmlnaHQsIHRva2VuLnZhbHVlKTtcblx0XHRcdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIGVuZFRva2VuKTtcblx0XHRcdGV4cHIgPSBub2RlO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0YnJlYWs7XG5cdH1cblxuXHRyZXR1cm4gZXhwcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVkRvbUV4cHJlc3Npb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RWRG9tTm9kZSB7XG5cdHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuVkRPTSk7XG5cdHJldHVybiBwYXJzZVZEb21FbGVtZW50KHBhcnNlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVZEb21FbGVtZW50KHBhcnNlcjogUGFyc2VyKTogQVNUVkRvbU5vZGUge1xuXHRwYXJzZXIuY29uc3VtZUlmVGV4dCgpO1xuXG5cdGNvbnN0IHN0YXJ0VG9rZW46IFRva2VuID0gcGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuTEVTU19USEFOKTtcblx0Y29uc3QgdGFnVG9rZW46IFRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblx0Y29uc3QgdGFnOiBzdHJpbmcgPSB0YWdUb2tlbi52YWx1ZTtcblxuXHRwYXJzZXIuY29uc3VtZUlmVGV4dCgpO1xuXG5cdGNvbnN0IHByb3BzID0gbmV3IE1hcDxzdHJpbmcsIEFTVE5vZGU+KCk7XG5cdHdoaWxlICghcGFyc2VyLnBlZWtJcyhHUkFNTUFSLkdSRUFURVJfVEhBTikgJiYgIXBhcnNlci5wZWVrSXMoR1JBTU1BUi5YTUxfQ0xPU0VfVEFHKSkge1xuXHRcdGNvbnN0IG5hbWVUb2tlbjogVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXHRcdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkFTU0lHTik7XG5cblx0XHRsZXQgdmFsdWU6IEFTVE5vZGU7XG5cdFx0aWYgKHBhcnNlci5wZWVrSXMoR1JBTU1BUi5CUkFDRV9PUEVOKSkge1xuXHRcdFx0dmFsdWUgPSBwYXJzZUxhbWJkYShwYXJzZXIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YWx1ZSA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHRcdH1cblxuXHRcdHByb3BzLnNldChuYW1lVG9rZW4udmFsdWUsIHZhbHVlKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkdSRUFURVJfVEhBTik7XG5cblx0Y29uc3QgY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdO1xuXHR3aGlsZSAoIXBhcnNlci5wZWVrSXMoR1JBTU1BUi5YTUxfT1BFTl9DTE9TRV9UQUcpKSB7XG5cblx0XHRpZiAocGFyc2VyLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuT1BFUkFUT1IpIHtcblx0XHRcdGNoaWxkcmVuLnB1c2gocGFyc2VWRG9tRWxlbWVudChwYXJzZXIpKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNoaWxkcmVuLnB1c2gocGFyc2VWRG9tVGV4dChwYXJzZXIpKTtcblxuXHR9XG5cblx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuWE1MX09QRU5fQ0xPU0VfVEFHKTtcblx0cGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuR1JFQVRFUl9USEFOKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVFZEb21Ob2RlKHRhZywgcHJvcHMsIGNoaWxkcmVuKTtcblx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgcGFyc2VyLnBlZWsoKSk7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VWRG9tVGV4dChwYXJzZXI6IFBhcnNlcik6IEFTVFZEb21UZXh0Tm9kZSB7XG5cdGNvbnN0IHRva2VuOiBUb2tlbiA9IHBhcnNlci5leHBlY3RPbmVPZihcblx0XHRbXG5cdFx0XHRUb2tlblR5cGUuSURFTlRJRklFUixcblx0XHRcdFRva2VuVHlwZS5PUEVSQVRPUixcblx0XHRcdFRva2VuVHlwZS5LRVlXT1JELFxuXHRcdFx0VG9rZW5UeXBlLlBVTkNUVUFUSU9OLFxuXHRcdFx0VG9rZW5UeXBlLlRFWFRcblx0XHRdXG5cdCk7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUVkRvbVRleHROb2RlKHRva2VuLnZhbHVlKTtcblx0bm9kZS5zcGFuID0gc3BhbkZyb20odG9rZW4sIHRva2VuKTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUFyZ3VtZW50cyhwYXJzZXI6IFBhcnNlcik6IEFTVE5vZGVbXSB7XG5cdGNvbnN0IGFyZ3M6IEFTVE5vZGVbXSA9IFtdO1xuXG5cdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSkpIHtcblx0XHRyZXR1cm4gYXJncztcblx0fVxuXG5cdGFyZ3MucHVzaChwYXJzZUV4cHJlc3Npb24ocGFyc2VyKSk7XG5cblx0d2hpbGUgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSkge1xuXHRcdGFyZ3MucHVzaChwYXJzZUV4cHJlc3Npb24ocGFyc2VyKSk7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cdHJldHVybiBhcmdzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VVbmFyeShwYXJzZXI6IFBhcnNlcik6IEFTVE5vZGUgfCBBU1RVbmFyeU5vZGUge1xuXHRjb25zdCB0b2tlbjogVG9rZW4gPSBwYXJzZXIucGVlaygpO1xuXG5cdGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuS0VZV09SRCAmJiB0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5WRE9NKSB7XG5cdFx0cmV0dXJuIHBhcnNlVkRvbUV4cHJlc3Npb24ocGFyc2VyKTtcblx0fVxuXG5cdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5FWENMQU1BVElPTl9NQVJLKSB7XG5cdFx0cGFyc2VyLm5leHQoKTtcblxuXHRcdGNvbnN0IHVuYXJ5OiBBU1ROb2RlIHwgQVNUVW5hcnlOb2RlID0gcGFyc2VVbmFyeShwYXJzZXIpO1xuXG5cdFx0cmV0dXJuIG5ldyBBU1RVbmFyeU5vZGUoR1JBTU1BUi5FWENMQU1BVElPTl9NQVJLLCB1bmFyeSk7XG5cdH1cblxuXHRyZXR1cm4gcGFyc2VQcmltYXJ5KHBhcnNlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVByaW1hcnkocGFyc2VyOiBQYXJzZXIpOiBBU1ROb2RlIHtcblx0aWYgKGxvb2tzTGlrZUxhbWJkYShwYXJzZXIpKSB7XG5cdFx0cmV0dXJuIHBhcnNlTGFtYmRhKHBhcnNlcik7XG5cdH1cblxuXHRjb25zdCB0b2tlbiA9IHBhcnNlci5uZXh0KCk7XG5cblx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX09QRU4pIHtcblx0XHRwYXJzZXIucmV3aW5kKCk7XG5cdFx0cmV0dXJuIHBhcnNlQXJyYXkocGFyc2VyKTtcblx0fVxuXG5cdGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuTlVNQkVSKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLk5VTUJFUik7XG5cdFx0bm9kZS52YWx1ZSA9IHRva2VuLnZhbHVlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5TVFJJTkcpIHtcblx0XHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuU1RSSU5HKTtcblx0XHRub2RlLnZhbHVlID0gdG9rZW4udmFsdWU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRpZiAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLkJPT0xFQU4pIHtcblx0XHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuQk9PTEVBTik7XG5cdFx0bm9kZS52YWx1ZSA9IHRva2VuLnZhbHVlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLklERU5USUZJRVIpO1xuXHRcdG5vZGUubmFtZSA9IHRva2VuLnZhbHVlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLk5VTEwpIHtcblx0XHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuTlVMTCk7XG5cdFx0bm9kZS52YWx1ZSA9IHRva2VuLnZhbHVlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLlRISVMpIHtcblx0XHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuVEhJUyk7XG5cdFx0bm9kZS5uYW1lID0gdG9rZW4udmFsdWU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuTkVXKSB7XG5cblx0XHRsZXQgdHlwZUFubm90YXRpb24gPSBwYXJzZVR5cGUocGFyc2VyKTtcblxuXHRcdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pO1xuXG5cdFx0cmV0dXJuIG5ldyBBU1ROZXdOb2RlKHBhcnNlQXJndW1lbnRzKHBhcnNlciksIHR5cGVBbm5vdGF0aW9uKTtcblx0fVxuXG5cdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKSB7XG5cdFx0Y29uc3QgZXhwciA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHRcdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKTtcblx0XHRyZXR1cm4gZXhwcjtcblx0fVxuXG5cdHRocm93UGFyc2VyRXJyb3IoYFVuZXhwZWN0ZWQgdG9rZW46ICR7dG9rZW4udHlwZX0gJHt0b2tlbi52YWx1ZX1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUG9zdGZpeChwYXJzZXI6IFBhcnNlciwgZXhwcjogQVNUTm9kZSB8IG51bGwpOiBBU1ROb2RlIHtcblx0aWYgKGV4cHIgPT09IG51bGwpIHtcblx0XHR0aHJvd1BhcnNlckVycm9yKGBFeHBlY3RlZCBleHByZXNzaW9uLCBnb3QgbnVsbC5gKTtcblx0fVxuXG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0Y29uc3QgdG9rZW4gPSBwYXJzZXIucGVlaygpO1xuXHRcdGlmICghdG9rZW4pIGJyZWFrO1xuXG5cdFx0Ly8gQ2FsbDogZm9vKC4uLilcblx0XHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTikge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHRcdGV4cHIgPSBuZXcgQVNUQ2FsbE5vZGUoZXhwciwgcGFyc2VBcmd1bWVudHMocGFyc2VyKSk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBNZW1iZXI6IGZvby5iYXJcblx0XHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuRE9UKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdFx0ZXhwciA9IG5ldyBBU1RNZW1iZXJOb2RlKGV4cHIsIHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCkudmFsdWUpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gSU5ERVg6IGZvb1tleHByXVxuXHRcdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9PUEVOKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXG5cdFx0XHRjb25zdCBpbmRleCA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXG5cdFx0XHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9DTE9TRSk7XG5cblx0XHRcdGV4cHIgPSBuZXcgQVNUSW5kZXhOb2RlKGV4cHIsIGluZGV4KTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGJyZWFrO1xuXHR9XG5cblx0cmV0dXJuIGV4cHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb29rdXBQcmVjZWRlbmNlKHRva2VuOiBUb2tlbik6IG51bWJlciB7XG5cdHN3aXRjaCAodG9rZW4udmFsdWUpIHtcblx0XHRjYXNlIEdSQU1NQVIuRE9UOlxuXHRcdFx0cmV0dXJuIDEwMDtcblx0XHRjYXNlIEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTjpcblx0XHRcdHJldHVybiA5MDtcblx0XHRjYXNlIEdSQU1NQVIuTVVMVElQTFk6XG5cdFx0Y2FzZSBHUkFNTUFSLkRJVklERTpcblx0XHRjYXNlIEdSQU1NQVIuTU9EVUxVUzpcblx0XHRcdHJldHVybiA2MDtcblx0XHRjYXNlIEdSQU1NQVIuUExVUzpcblx0XHRjYXNlIEdSQU1NQVIuTUlOVVM6XG5cdFx0XHRyZXR1cm4gNTA7XG5cdFx0Y2FzZSBHUkFNTUFSLkxFU1NfVEhBTjpcblx0XHRjYXNlIEdSQU1NQVIuR1JFQVRFUl9USEFOOlxuXHRcdGNhc2UgR1JBTU1BUi5MRVNTX0VRVUFMOlxuXHRcdGNhc2UgR1JBTU1BUi5HUkVBVEVSX0VRVUFMOlxuXHRcdFx0cmV0dXJuIDQwO1xuXHRcdGNhc2UgR1JBTU1BUi5FUVVBTDpcblx0XHRjYXNlIEdSQU1NQVIuTk9UX0VRVUFMOlxuXHRcdFx0cmV0dXJuIDMwO1xuXHRcdGNhc2UgR1JBTU1BUi5BTkQ6XG5cdFx0XHRyZXR1cm4gMjA7XG5cdFx0Y2FzZSBHUkFNTUFSLk9SOlxuXHRcdFx0cmV0dXJuIDEwO1xuXHRcdGNhc2UgR1JBTU1BUi5BU1NJR046XG5cdFx0XHRyZXR1cm4gNTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIDA7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtUb2tlbiwgVG9rZW5UeXBlfSBmcm9tIFwiLi4vZ3JhbW1hclwiO1xuaW1wb3J0IHtUb2tlblN0cmVhbX0gZnJvbSBcIi4uL3Rva2VuaXplci90b2tlbml6ZXJcIjtcbmltcG9ydCB7cGFyc2VQcm9ncmFtfSBmcm9tIFwiLi9wYXJzZXJfc3RhdG1lbnRzXCI7XG5pbXBvcnQge3Rocm93UGFyc2VyRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi9wYXJzZXJfc291cmNlXCI7XG5cblxuZXhwb3J0IGNsYXNzIFBhcnNlciB7XG5cdHNvdXJjZTogU291cmNlO1xuXHR0b2tlblN0cmVhbTogVG9rZW5TdHJlYW0gfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihzb3VyY2U6IFNvdXJjZSkge1xuXHRcdHRoaXMuc291cmNlID0gc291cmNlO1xuXHR9XG5cblx0cGFyc2UoKSB7XG5cdFx0dGhpcy50b2tlblN0cmVhbSA9IHRoaXMuc291cmNlXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAuZ2V0VG9rZW5pemVyKClcblx0XHQgICAgICAgICAgICAgICAgICAgICAgIC5nZXRUb2tlblN0cmVhbSgpXG5cblx0XHRyZXR1cm4gcGFyc2VQcm9ncmFtKHRoaXMpO1xuXHR9XG5cblx0c3RyZWFtKCk6IFRva2VuU3RyZWFtIHtcblx0XHRpZiAoIXRoaXMudG9rZW5TdHJlYW0pIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoJ1BhcnNlciBoYXMgbm90IGJlZW4gcGFyc2VkIHlldC4nKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy50b2tlblN0cmVhbTtcblx0fVxuXG5cdGV4cGVjdCh0b2tlblR5cGU6IHN0cmluZywga2V5d29yZDogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBUb2tlbiB7XG5cdFx0Y29uc3QgdG9rZW4gPSB0aGlzXG5cdFx0XHQuc3RyZWFtKClcblx0XHRcdC5uZXh0KCk7XG5cblx0XHRpZiAoIXRva2VuKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKGBVbmV4cGVjdGVkIGVuZCBvZiBmaWxlLiBFeHBlY3RlZCAke3Rva2VuVHlwZX0ke2tleXdvcmQgPyAnICcgKyBrZXl3b3JkIDogJyd9YCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRva2VuLnR5cGUgIT09IHRva2VuVHlwZSB8fCAoa2V5d29yZCAmJiB0b2tlbi52YWx1ZSAhPT0ga2V5d29yZCkpIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoYEV4cGVjdGVkICR7dG9rZW5UeXBlfSR7a2V5d29yZCA/ICcgJyArIGtleXdvcmQgOiAnJ30sIGdvdCAke3Rva2VuLnR5cGV9ICR7dG9rZW4udmFsdWV9YCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRva2VuO1xuXHR9XG5cblx0ZXhwZWN0T3BlcmF0b3Ioa2V5d29yZDogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZWN0KFRva2VuVHlwZS5PUEVSQVRPUiwga2V5d29yZCk7XG5cdH1cblxuXHRleHBlY3RBbm5vdGF0aW9uKCk6IFRva2VuIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlY3QoVG9rZW5UeXBlLkFOTk9UQVRJT04pO1xuXHR9XG5cblx0ZXhwZWN0SWRlbnRpZmllcihrZXl3b3JkOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IFRva2VuIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlY3QoVG9rZW5UeXBlLklERU5USUZJRVIsIGtleXdvcmQpO1xuXHR9XG5cblx0ZXhwZWN0S2V5d29yZChrZXl3b3JkOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IFRva2VuIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlY3QoVG9rZW5UeXBlLktFWVdPUkQsIGtleXdvcmQpO1xuXHR9XG5cblx0ZXhwZWN0U3RyaW5nKCk6IFRva2VuIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlY3QoVG9rZW5UeXBlLlNUUklORyk7XG5cdH1cblxuXHRleHBlY3RUZXh0KCk6IFRva2VuIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlY3QoVG9rZW5UeXBlLlRFWFQpO1xuXHR9XG5cblx0ZXhwZWN0UHVuY3R1YXRpb24oa2V5d29yZDogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZWN0KFRva2VuVHlwZS5QVU5DVFVBVElPTiwga2V5d29yZCk7XG5cdH1cblxuXHRleHBlY3RPbmVPZih0b2tlblR5cGVzOiBzdHJpbmdbXSwga2V5d29yZHM6IHN0cmluZyB8IG51bGwgPSBudWxsKTogVG9rZW4ge1xuXHRcdGNvbnN0IHRva2VuID0gdGhpc1xuXHRcdFx0LnN0cmVhbSgpXG5cdFx0XHQubmV4dCgpO1xuXG5cdFx0aWYgKCF0b2tlbikge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcihgVW5leHBlY3RlZCBlbmQgb2YgZmlsZS4gRXhwZWN0ZWQgb25lIG9mIHR5cGVzICR7dG9rZW5UeXBlc30sIGdvdCBudWxsLmApO1xuXHRcdH1cblxuXHRcdGlmICghdG9rZW5UeXBlcy5pbmNsdWRlcyh0b2tlbi50eXBlKSkge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcihgRXhwZWN0ZWQgb25lIG9mIHR5cGVzICR7dG9rZW5UeXBlc30sIGdvdCAke3Rva2VuLnR5cGV9YCk7XG5cdFx0fVxuXG5cdFx0aWYgKGtleXdvcmRzICYmICFrZXl3b3Jkcy5pbmNsdWRlcyh0b2tlbi52YWx1ZSkpIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoYEV4cGVjdGVkIG9uZSBvZiB2YWx1ZXMgJHtrZXl3b3Jkc30sIGdvdCAke3Rva2VuLnZhbHVlfWApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0b2tlbjtcblx0fVxuXG5cdGNvbnN1bWVJZih0b2tlblR5cGU6IHN0cmluZywga2V5d29yZDogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBib29sZWFuIHtcblx0XHRjb25zdCB0b2tlbiA9IHRoaXMucGVlaygpO1xuXG5cdFx0aWYgKHRva2VuLnR5cGUgPT09IHRva2VuVHlwZSAmJiAoa2V5d29yZCAmJiB0b2tlbi52YWx1ZS50cmltKCkgPT09IGtleXdvcmQpKSB7XG5cdFx0XHR0aGlzLm5leHQoKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGNvbnN1bWVJZlB1bmN0dWF0aW9uKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdW1lSWYoVG9rZW5UeXBlLlBVTkNUVUFUSU9OLCB2YWx1ZSk7XG5cdH1cblxuXHRjb25zdW1lSWZPcGVyYXRvcih2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3VtZUlmKFRva2VuVHlwZS5PUEVSQVRPUiwgdmFsdWUpO1xuXHR9XG5cblx0Y29uc3VtZUlmQ29tbWVudCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdW1lSWYoVG9rZW5UeXBlLkNPTU1FTlQpO1xuXHR9XG5cblx0Y29uc3VtZUlmS2V5d29yZChrZXl3b3JkOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdW1lSWYoVG9rZW5UeXBlLktFWVdPUkQsIGtleXdvcmQpO1xuXHR9XG5cblx0Y29uc3VtZUlmVGV4dCgpOiBib29sZWFuIHtcblx0XHRpZiAodGhpcy5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLlRFWFQgJiYgdGhpcy5wZWVrSXMoJycpKSB7XG5cdFx0XHR0aGlzLm5leHQoKTtcblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cGVlaygpOiBUb2tlbiB7XG5cdFx0Y29uc3QgdG9rZW4gPSB0aGlzXG5cdFx0XHQuc3RyZWFtKClcblx0XHRcdC5wZWVrKCk7XG5cblx0XHRpZiAodG9rZW4gPT09IG51bGwpIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoJ1VuZXhwZWN0ZWQgZW5kIG9mIGZpbGUuIEV4cGVjdGVkIHRva2VuLCBnb3QgbnVsbC4nKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdG9rZW47XG5cdH1cblxuXHRwZWVrSXMoa2V5d29yZDogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucGVlaygpXG5cdFx0ICAgICAgICAgICAudmFsdWVcblx0XHQgICAgICAgICAgIC50cmltKCkgPT09IGtleXdvcmQ7XG5cdH1cblxuXHRuZXh0KCk6IFRva2VuIHtcblx0XHRjb25zdCB0b2tlbiA9IHRoaXNcblx0XHRcdC5zdHJlYW0oKVxuXHRcdFx0Lm5leHQoKTtcblxuXHRcdGlmICh0b2tlbiA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZmlsZS4gRXhwZWN0ZWQgdG9rZW4sIGdvdCBudWxsLicpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0b2tlbjtcblx0fVxuXG5cdHJld2luZCgpOiB2b2lkIHtcblx0XHR0aGlzLnN0cmVhbSgpXG5cdFx0ICAgIC5yZXdpbmQoKTtcblx0fVxuXG5cdHBvc2l0aW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuc3RyZWFtKCkuaW5kZXg7XG5cdH1cblxuXHRzZWVrQXQocG9zaXRpb246IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuc3RyZWFtKCkuaW5kZXggPSBwb3NpdGlvbjtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0FTVENsYXNzTm9kZSwgQVNUSW50ZXJmYWNlTm9kZSwgQVNUTm9kZX0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHtDbGFzc0RlZmluaXRpb24sIEluc3RhbmNlLCBJbnRlcmZhY2VEZWZpbml0aW9ufSBmcm9tIFwiLi9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge0NsYXNzU3ltYm9sLCBJbnRlcmZhY2VTeW1ib2x9IGZyb20gXCIuLi90eXBlcy90eXBlX29iamVjdHNcIjtcbmltcG9ydCB7dGhyb3dSdW50aW1lRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcblxuZXhwb3J0IGNsYXNzIENsYXNzUmVnaXN0cnkge1xuXHRtYXA6IE1hcDxzdHJpbmcsIENsYXNzRGVmaW5pdGlvbj4gPSBuZXcgTWFwKCk7XG5cblx0cmVnaXN0ZXIobm9kZTogQVNUQ2xhc3NOb2RlKTogdm9pZCB7XG5cdFx0dGhpcy5zZXQobm9kZS5uYW1lLCBDbGFzc0RlZmluaXRpb24uZnJvbUFTVChub2RlKSk7XG5cdH1cblxuXHRhbGwoKTogSXRlcmFibGVJdGVyYXRvcjxDbGFzc0RlZmluaXRpb24+IHtcblx0XHRyZXR1cm4gdGhpcy5tYXAudmFsdWVzKCk7XG5cdH1cblxuXHRzZXQobmFtZTogc3RyaW5nLCBjbGFzc0RlZmluaXRpb246IENsYXNzRGVmaW5pdGlvbik6IHZvaWQge1xuXHRcdHRoaXMubWFwLnNldChuYW1lLCBjbGFzc0RlZmluaXRpb24pO1xuXHR9XG5cblx0Z2V0KG5hbWU6IHN0cmluZyk6IENsYXNzRGVmaW5pdGlvbiB7XG5cdFx0Y29uc3QgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiB8IG51bGwgPSB0aGlzLm1hcC5nZXQobmFtZSkgfHwgbnVsbDtcblx0XHRpZiAoIWNsYXNzRGVmKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgQ2xhc3MgJHtuYW1lfSBub3QgZm91bmQuYCk7XG5cdFx0fVxuXHRcdHJldHVybiBjbGFzc0RlZjtcblx0fVxuXG5cdGhhcyhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAuaGFzKG5hbWUpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2VSZWdpc3RyeSB7XG5cdG1hcDogTWFwPHN0cmluZywgSW50ZXJmYWNlRGVmaW5pdGlvbj4gPSBuZXcgTWFwKCk7XG5cblx0cmVnaXN0ZXIobm9kZTogQVNUSW50ZXJmYWNlTm9kZSk6IHZvaWQge1xuXHRcdHRoaXMuc2V0KG5vZGUubmFtZSwgSW50ZXJmYWNlRGVmaW5pdGlvbi5jb25zdHJ1Y3RGcm9tQVNUKG5vZGUpKTtcblx0fVxuXG5cdGFsbCgpOiBJdGVyYWJsZUl0ZXJhdG9yPEludGVyZmFjZURlZmluaXRpb24+IHtcblx0XHRyZXR1cm4gdGhpcy5tYXAudmFsdWVzKCk7XG5cdH1cblxuXHRzZXQobmFtZTogc3RyaW5nLCBpbnRlcmZhY2VEZWZpbml0aW9uOiBJbnRlcmZhY2VEZWZpbml0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5tYXAuc2V0KG5hbWUsIGludGVyZmFjZURlZmluaXRpb24pO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnN0YW5jZVJlZ2lzdHJ5IHtcblx0cHJpdmF0ZSBpbnN0YW5jZXM6IE1hcDxzdHJpbmcsIEluc3RhbmNlPiA9IG5ldyBNYXA8c3RyaW5nLCBJbnN0YW5jZT4oKTtcblxuXHRyZWdpc3RlcihpbnN0YW5jZTogSW5zdGFuY2UpOiB2b2lkIHtcblx0XHR0aGlzLmluc3RhbmNlcy5zZXQoaW5zdGFuY2UuaWQsIGluc3RhbmNlKTtcblx0fVxuXG5cdHVucmVnaXN0ZXIoaW5zdGFuY2U6IEluc3RhbmNlKTogdm9pZCB7XG5cdFx0dGhpcy5pbnN0YW5jZXMuZGVsZXRlKGluc3RhbmNlLmlkKTtcblx0fVxuXG5cdGdldChpZDogc3RyaW5nKTogSW5zdGFuY2UgfCBudWxsIHtcblx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZXMuZ2V0KGlkKSB8fCBudWxsO1xuXHR9XG5cblx0YWxsSW5zdGFuY2VzKCk6IEluc3RhbmNlW10ge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKHRoaXMuaW5zdGFuY2VzLnZhbHVlcygpKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVHlwZVJlZ2lzdHJ5IHtcblx0Y2xhc3NTeW1ib2xzOiBNYXA8c3RyaW5nLCBDbGFzc1N5bWJvbD4gPSBuZXcgTWFwKCk7XG5cdGludGVyZmFjZVN5bWJvbHM6IE1hcDxzdHJpbmcsIEludGVyZmFjZVN5bWJvbD4gPSBuZXcgTWFwKCk7XG5cblx0YWxsQ2xhc3NTeW1ib2xzKCk6IEl0ZXJhYmxlSXRlcmF0b3I8Q2xhc3NTeW1ib2w+IHtcblx0XHRyZXR1cm4gdGhpcy5jbGFzc1N5bWJvbHMudmFsdWVzKCk7XG5cdH1cblxuXHRhbGxJbnRlcmZhY2VTeW1ib2xzKCk6IEl0ZXJhYmxlSXRlcmF0b3I8SW50ZXJmYWNlU3ltYm9sPiB7XG5cdFx0cmV0dXJuIHRoaXMuaW50ZXJmYWNlU3ltYm9scy52YWx1ZXMoKTtcblx0fVxuXG5cdGFkZENsYXNzU3ltYm9sKHN5bWJvbDogQ2xhc3NTeW1ib2wpOiB2b2lkIHtcblx0XHR0aGlzLmNsYXNzU3ltYm9scy5zZXQoc3ltYm9sLm5hbWUsIHN5bWJvbCk7XG5cdH1cblxuXHRhZGRJbnRlcmZhY2VTeW1ib2woc3ltYm9sOiBJbnRlcmZhY2VTeW1ib2wpOiB2b2lkIHtcblx0XHR0aGlzLmludGVyZmFjZVN5bWJvbHMuc2V0KHN5bWJvbC5uYW1lLCBzeW1ib2wpO1xuXHR9XG5cblx0aGFzU3ltYm9sKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNsYXNzU3ltYm9scy5oYXMobmFtZSkgfHwgdGhpcy5pbnRlcmZhY2VTeW1ib2xzLmhhcyhuYW1lKTtcblx0fVxuXG5cdHB1YmxpYyBnZXRDbGFzc1N5bWJvbChuYW1lOiBzdHJpbmcpOiBDbGFzc1N5bWJvbCB7XG5cdFx0Y29uc3Qgc3ltYm9sOiBDbGFzc1N5bWJvbCB8IHVuZGVmaW5lZCA9IHRoaXMuY2xhc3NTeW1ib2xzLmdldChuYW1lKTtcblx0XHRpZiAoc3ltYm9sID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBTeW1ib2wgJHtuYW1lfSBub3QgZm91bmQuYCk7XG5cdFx0fVxuXHRcdHJldHVybiBzeW1ib2w7XG5cdH1cblxuXHRwdWJsaWMgZ2V0SW50ZXJhY2VTeW1ib2wobmFtZTogc3RyaW5nKTogSW50ZXJmYWNlU3ltYm9sIHtcblx0XHRjb25zdCBzeW1ib2w6IEludGVyZmFjZVN5bWJvbCB8IHVuZGVmaW5lZCA9IHRoaXMuaW50ZXJmYWNlU3ltYm9scy5nZXQobmFtZSk7XG5cdFx0aWYgKHN5bWJvbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgU3ltYm9sICR7bmFtZX0gbm90IGZvdW5kLmApO1xuXHRcdH1cblx0XHRyZXR1cm4gc3ltYm9sO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBPYmplY3RSZWdpc3RyeSB7XG5cdHB1YmxpYyByZWFkb25seSBjbGFzc2VzOiBDbGFzc1JlZ2lzdHJ5ID0gbmV3IENsYXNzUmVnaXN0cnkoKTtcblx0cHVibGljIHJlYWRvbmx5IGludGVyZmFjZXM6IEludGVyZmFjZVJlZ2lzdHJ5ID0gbmV3IEludGVyZmFjZVJlZ2lzdHJ5KCk7XG5cdHB1YmxpYyByZWFkb25seSBpbnN0YW5jZXM6IEluc3RhbmNlUmVnaXN0cnkgPSBuZXcgSW5zdGFuY2VSZWdpc3RyeSgpO1xuXHRwdWJsaWMgcmVhZG9ubHkgdHlwZXM6IFR5cGVSZWdpc3RyeSA9IG5ldyBUeXBlUmVnaXN0cnkoKTtcblxuXHRmZXRjaEFsbE9iamVjdERlZmluaXRpb25zKCk6IE1hcDxzdHJpbmcsIENsYXNzRGVmaW5pdGlvbiB8IEludGVyZmFjZURlZmluaXRpb24+IHtcblx0XHRjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG5cblx0XHRmb3IgKGNvbnN0IGNsYXNzRGVmIG9mIHRoaXMuaW50ZXJmYWNlcy5hbGwoKSkge1xuXHRcdFx0bWFwLnNldChjbGFzc0RlZi5uYW1lLCBjbGFzc0RlZik7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBjbGFzc0RlZiBvZiB0aGlzLmNsYXNzZXMuYWxsKCkpIHtcblx0XHRcdG1hcC5zZXQoY2xhc3NEZWYubmFtZSwgY2xhc3NEZWYpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtYXA7XG5cdH1cblxuXHRjb2xsZWN0QWxsKGFzdDogQVNUTm9kZSk6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUSW50ZXJmYWNlTm9kZSkge1xuXHRcdFx0XHR0aGlzLmludGVyZmFjZXMucmVnaXN0ZXIobm9kZSk7XG5cdFx0XHR9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RDbGFzc05vZGUpIHtcblx0XHRcdFx0dGhpcy5jbGFzc2VzLnJlZ2lzdGVyKG5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4iLAogICAgImltcG9ydCB7XG5cdEFTVEFycmF5Tm9kZSxcblx0QVNUQmluYXJ5Tm9kZSxcblx0QVNUQ2FsbE5vZGUsXG5cdEFTVENsYXNzTm9kZSxcblx0QVNURXhwcmVzc2lvbk5vZGUsXG5cdEFTVEZpZWxkTm9kZSxcblx0QVNURm9yZWFjaE5vZGUsXG5cdEFTVEluZGV4Tm9kZSxcblx0QVNUSW50ZXJmYWNlTm9kZSxcblx0QVNUTGFtYmRhTm9kZSxcblx0QVNUTWVtYmVyTm9kZSxcblx0QVNUTWV0aG9kTm9kZSxcblx0QVNUTmV3Tm9kZSxcblx0QVNUTm9kZSxcblx0QVNUTm9kZVR5cGUsXG5cdEFTVFBhcmFtZXRlck5vZGUsXG5cdEFTVFJldHVybk5vZGUsXG5cdEFTVFR5cGVOb2RlLFxuXHRBU1RVbmFyeU5vZGUsXG5cdEFTVFZhcmlhYmxlTm9kZSxcblx0QVNUVkRvbU5vZGVcbn0gZnJvbSAnLi4vYXN0LnRzJztcbmltcG9ydCB7XG5cdGJ1aWxkVHlwZVN1YnN0aXR1dGlvbk1hcCxcblx0Q2xhc3NSZWZUeXBlLFxuXHRDbGFzc1N5bWJvbCxcblx0RmllbGRTeW1ib2wsXG5cdEludGVyZmFjZVJlZlR5cGUsXG5cdEludGVyZmFjZVN5bWJvbCxcblx0TGFtYmRhVHlwZSxcblx0TWV0aG9kU3ltYm9sLFxuXHRNaXhlZFR5cGUsXG5cdE51bGxhYmxlVHlwZSxcblx0UGFyYW1ldGVyU3ltYm9sLFxuXHRQcmltaXRpdmVDbGFzc1R5cGVzLFxuXHRzdWJzdGl0dXRlVHlwZSxcblx0VHlwZSxcblx0VHlwZVBhcmFtZXRlclN5bWJvbCxcblx0VHlwZXMsXG5cdFR5cGVTY29wZSxcblx0VHlwZVZhcmlhYmxlLFxuXHR3cmFwVHlwZVxufSBmcm9tIFwiLi90eXBlX29iamVjdHNcIjtcbmltcG9ydCB7QXV0b2JveGluZ30gZnJvbSBcIi4vYXV0b2JveGluZ1wiO1xuaW1wb3J0IHtOYXRpdmVGdW5jdGlvbiwgTmF0aXZlRnVuY3Rpb25zfSBmcm9tIFwiLi4vLi4vbGlicmFyeS9uYXRpdmVfZnVuY3Rpb25zXCI7XG5pbXBvcnQge0dSQU1NQVJ9IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5pbXBvcnQge3Rocm93VHlwZUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzLnRzXCJcbmltcG9ydCB7Q2xhc3NEZWZpbml0aW9uLCBJbnRlcmZhY2VEZWZpbml0aW9ufSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5cblxuY29uc3QgZ2xvYmFsRnVuY3Rpb25UeXBlUmVnaXN0cnkgPSBuZXcgTmF0aXZlRnVuY3Rpb25zKClcblx0LmdldEdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5KCk7XG5cbmV4cG9ydCBjbGFzcyBTdGF0ZW1lbnRSZXN1bHQge1xuXHRkaWRSZXR1cm46IGJvb2xlYW47XG5cdHJldHVyblR5cGU6IFR5cGUgfCBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKGRpZFJldHVybjogYm9vbGVhbiwgcmV0dXJuVHlwZTogVHlwZSB8IG51bGwpIHtcblx0XHR0aGlzLmRpZFJldHVybiA9IGRpZFJldHVybjtcblx0XHR0aGlzLnJldHVyblR5cGUgPSByZXR1cm5UeXBlO1xuXHR9XG5cblx0c3RhdGljIHdpdGhSZXR1cm4ocmV0dXJuVHlwZTogVHlwZSk6IFN0YXRlbWVudFJlc3VsdCB7XG5cdFx0cmV0dXJuIG5ldyBTdGF0ZW1lbnRSZXN1bHQodHJ1ZSwgcmV0dXJuVHlwZSk7XG5cdH1cblxuXHRzdGF0aWMgbm9SZXR1cm4oKTogU3RhdGVtZW50UmVzdWx0IHtcblx0XHRyZXR1cm4gbmV3IFN0YXRlbWVudFJlc3VsdChmYWxzZSwgbnVsbCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGVDaGVja2VyIHtcblx0b2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5O1xuXG5cdGNvbnN0cnVjdG9yKG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSkge1xuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkgPSBvYmplY3RSZWdpc3RyeTtcblx0fVxuXG5cdGNvbGxlY3RBbGxTeW1ib2xzRnJvbU5vZGUoYXN0OiBBU1ROb2RlKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIGFzdC5jaGlsZHJlbikge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RJbnRlcmZhY2VOb2RlKSB7XG5cdFx0XHRcdHRoaXMucmVnaXN0ZXJJbnRlcmZhY2VTeW1ib2wobm9kZSlcblx0XHRcdH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIEFTVENsYXNzTm9kZSkge1xuXHRcdFx0XHR0aGlzLnJlZ2lzdGVyQ2xhc3NTeW1ib2wobm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y29sbGVjdEFsbFN5bWJvbHNGcm9tUmVnaXN0cnkob2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogdm9pZCB7XG5cdFx0Y29uc3Qgb2JqZWN0RGVmaW5pdGlvbnM6IE1hcEl0ZXJhdG9yPENsYXNzRGVmaW5pdGlvbiB8IEludGVyZmFjZURlZmluaXRpb24+ID0gb2JqZWN0UmVnaXN0cnlcblx0XHRcdC5mZXRjaEFsbE9iamVjdERlZmluaXRpb25zKClcblx0XHRcdC52YWx1ZXMoKTtcblxuXHRcdGZvciAobGV0IG9iamVjdERlZiBvZiBvYmplY3REZWZpbml0aW9ucykge1xuXHRcdFx0aWYgKG9iamVjdERlZiBpbnN0YW5jZW9mIEludGVyZmFjZURlZmluaXRpb24pIHtcblx0XHRcdFx0dGhpcy5yZWdpc3RlckludGVyZmFjZVN5bWJvbChvYmplY3REZWYubm9kZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnJlZ2lzdGVyQ2xhc3NTeW1ib2wob2JqZWN0RGVmLm5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNoZWNrKGFzdDogQVNUTm9kZSk6IHZvaWQge1xuXHRcdHRoaXMuY29sbGVjdEFsbFN5bWJvbHNGcm9tTm9kZShhc3QpO1xuXHRcdHRoaXMudmFsaWRhdGVJbmhlcml0YW5jZSgpO1xuXHRcdHRoaXMuY2hlY2tQcm9ncmFtKGFzdCk7XG5cdFx0dGhpcy5jaGVja0ludGVyZmFjZUJvZGllcygpO1xuXHRcdHRoaXMuY2hlY2tDbGFzc2VzQm9kaWVzKCk7XG5cdFx0dGhpcy5jaGVja0NsYXNzZXNJbXBsZW1lbnRzKCk7XG5cdH1cblxuXHRwcml2YXRlIHZhbGlkYXRlSW5oZXJpdGFuY2UoKSB7XG5cdFx0Zm9yIChjb25zdCBjbGFzc1N5bWJvbCBvZiB0aGlzLm9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuYWxsKCkpIHtcblx0XHRcdGlmIChjbGFzc1N5bWJvbC5zdXBlckNsYXNzICYmICF0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmhhc1N5bWJvbChjbGFzc1N5bWJvbC5zdXBlckNsYXNzKSkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgVW5rbm93biBzdXBlcmNsYXNzICR7Y2xhc3NTeW1ib2wuc3VwZXJDbGFzc31gLCBjbGFzc1N5bWJvbC5ub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrUHJvZ3JhbShhc3Q6IEFTVE5vZGUpOiB2b2lkIHtcblx0XHRjb25zdCBzY29wZSA9IG5ldyBUeXBlU2NvcGUoKTtcblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgYXN0LmNoaWxkcmVuKSB7XG5cdFx0XHR0aGlzLmNoZWNrU3RhdGVtZW50KG5vZGUsIHNjb3BlKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQ2xhc3Nlc0JvZGllcygpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IG9iamVjdFN5bWJvbCBvZiB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmFsbENsYXNzU3ltYm9scygpKSB7XG5cdFx0XHRjb25zdCBpbnN0YW5jZVNjb3BlID0gbmV3IFR5cGVTY29wZSgpO1xuXHRcdFx0aW5zdGFuY2VTY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sID0gb2JqZWN0U3ltYm9sO1xuXG5cdFx0XHRvYmplY3RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMuZm9yRWFjaCh0eXBlUGFyYW1ldGVyID0+IHtcblx0XHRcdFx0aW5zdGFuY2VTY29wZS5kZWZpbmVUeXBlQmluZGluZyhcblx0XHRcdFx0XHR0eXBlUGFyYW1ldGVyLm5hbWUsXG5cdFx0XHRcdFx0bmV3IFR5cGVWYXJpYWJsZSh0eXBlUGFyYW1ldGVyLm5hbWUpXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKG9iamVjdFN5bWJvbC5jb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbCkge1xuXHRcdFx0XHRjb25zdCBjb25zdHJ1Y3RvclN5bWJvbCA9IG9iamVjdFN5bWJvbC5jb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbDtcblx0XHRcdFx0Y29uc3QgY29uc3RydWN0b3JTY29wZSA9IG5ldyBUeXBlU2NvcGUoaW5zdGFuY2VTY29wZSk7XG5cblx0XHRcdFx0b2JqZWN0U3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmZvckVhY2godHlwZVBhcmFtZXRlclN5bWJvbCA9PiB7XG5cdFx0XHRcdFx0Y29uc3RydWN0b3JTY29wZS5kZWZpbmVUeXBlQmluZGluZyhcblx0XHRcdFx0XHRcdHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSxcblx0XHRcdFx0XHRcdG5ldyBUeXBlVmFyaWFibGUodHlwZVBhcmFtZXRlclN5bWJvbC5uYW1lKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGZvciAoY29uc3QgcGFyYW1ldGVyU3ltYm9sIG9mIGNvbnN0cnVjdG9yU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMpIHtcblx0XHRcdFx0XHRjb25zdHJ1Y3RvclNjb3BlLmRlZmluZVR5cGUocGFyYW1ldGVyU3ltYm9sLm5hbWUsIHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuY2hlY2tCb2R5KGNvbnN0cnVjdG9yU3ltYm9sLmJvZHksIGNvbnN0cnVjdG9yU2NvcGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGNvbnN0IG1ldGhvZFN5bWJvbCBvZiBvYmplY3RTeW1ib2wuaW5zdGFuY2VNZXRob2RTeW1ib2xzLnZhbHVlcygpKSB7XG5cdFx0XHRcdGNvbnN0IG1ldGhvZFNjb3BlID0gbmV3IFR5cGVTY29wZShpbnN0YW5jZVNjb3BlKTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMuZm9yRWFjaCh0eXBlUGFyYW1ldGVyU3ltYm9sID0+IHtcblx0XHRcdFx0XHRtZXRob2RTY29wZS5kZWZpbmVUeXBlQmluZGluZyhcblx0XHRcdFx0XHRcdHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSxcblx0XHRcdFx0XHRcdG5ldyBUeXBlVmFyaWFibGUodHlwZVBhcmFtZXRlclN5bWJvbC5uYW1lKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGZvciAoY29uc3QgcGFyYW1ldGVyU3ltYm9sIG9mIG1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzKSB7XG5cdFx0XHRcdFx0bWV0aG9kU2NvcGUuZGVmaW5lVHlwZShwYXJhbWV0ZXJTeW1ib2wubmFtZSwgcGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgaGFzQm9keSA9IG1ldGhvZFN5bWJvbC5ib2R5ICYmIG1ldGhvZFN5bWJvbC5ib2R5Lmxlbmd0aCA+IDA7XG5cdFx0XHRcdGlmIChoYXNCb2R5KSB7XG5cdFx0XHRcdFx0Y29uc3QgYWN0dWFsID0gdGhpcy5jaGVja0JvZHkobWV0aG9kU3ltYm9sLmJvZHksIG1ldGhvZFNjb3BlKTtcblx0XHRcdFx0XHR0aGlzLmNoZWNrUmV0dXJuVHlwZShtZXRob2RTeW1ib2wucmV0dXJuVHlwZSwgYWN0dWFsLCBtZXRob2RTeW1ib2wubm9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Zm9yIChjb25zdCBtZXRob2RTeW1ib2wgb2Ygb2JqZWN0U3ltYm9sLnN0YXRpY01ldGhvZFN5bWJvbHMudmFsdWVzKCkpIHtcblx0XHRcdFx0Y29uc3Qgc3RhdGljU2NvcGUgPSBuZXcgVHlwZVNjb3BlKGluc3RhbmNlU2NvcGUpO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5mb3JFYWNoKHR5cGVQYXJhbWV0ZXJTeW1ib2wgPT4ge1xuXHRcdFx0XHRcdHN0YXRpY1Njb3BlLmRlZmluZVR5cGVCaW5kaW5nKFxuXHRcdFx0XHRcdFx0dHlwZVBhcmFtZXRlclN5bWJvbC5uYW1lLFxuXHRcdFx0XHRcdFx0bmV3IFR5cGVWYXJpYWJsZSh0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Zm9yIChjb25zdCBwYXJhbWV0ZXJTeW1ib2wgb2YgbWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMpIHtcblx0XHRcdFx0XHRzdGF0aWNTY29wZS5kZWZpbmVUeXBlKHBhcmFtZXRlclN5bWJvbC5uYW1lLCBwYXJhbWV0ZXJTeW1ib2wucGFyYW1ldGVyVHlwZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBoYXNCb2R5ID0gbWV0aG9kU3ltYm9sLmJvZHkgJiYgbWV0aG9kU3ltYm9sLmJvZHkubGVuZ3RoID4gMDtcblx0XHRcdFx0aWYgKGhhc0JvZHkpIHtcblx0XHRcdFx0XHRjb25zdCBhY3R1YWwgPSB0aGlzLmNoZWNrQm9keShtZXRob2RTeW1ib2wuYm9keSwgc3RhdGljU2NvcGUpO1xuXHRcdFx0XHRcdHRoaXMuY2hlY2tSZXR1cm5UeXBlKG1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlLCBhY3R1YWwsIG1ldGhvZFN5bWJvbC5ub2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tJbnRlcmZhY2VCb2RpZXMoKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBvYmplY3RTeW1ib2wgb2YgdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5hbGxJbnRlcmZhY2VTeW1ib2xzKCkpIHtcblx0XHRcdGNvbnN0IGluc3RhbmNlU2NvcGUgPSBuZXcgVHlwZVNjb3BlKCk7XG5cdFx0XHRpbnN0YW5jZVNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgPSBvYmplY3RTeW1ib2w7XG5cblx0XHRcdG9iamVjdFN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5mb3JFYWNoKHR5cGVQYXJhbWV0ZXIgPT4ge1xuXHRcdFx0XHRpbnN0YW5jZVNjb3BlLmRlZmluZVR5cGVCaW5kaW5nKFxuXHRcdFx0XHRcdHR5cGVQYXJhbWV0ZXIubmFtZSxcblx0XHRcdFx0XHRuZXcgVHlwZVZhcmlhYmxlKHR5cGVQYXJhbWV0ZXIubmFtZSlcblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXG5cdFx0XHRmb3IgKGNvbnN0IG1ldGhvZFN5bWJvbCBvZiBvYmplY3RTeW1ib2wuaW5zdGFuY2VNZXRob2RTeW1ib2xzLnZhbHVlcygpKSB7XG5cdFx0XHRcdGNvbnN0IG1ldGhvZFNjb3BlID0gbmV3IFR5cGVTY29wZShpbnN0YW5jZVNjb3BlKTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMuZm9yRWFjaCh0eXBlUGFyYW1ldGVyU3ltYm9sID0+IHtcblx0XHRcdFx0XHRtZXRob2RTY29wZS5kZWZpbmVUeXBlQmluZGluZyhcblx0XHRcdFx0XHRcdHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSxcblx0XHRcdFx0XHRcdG5ldyBUeXBlVmFyaWFibGUodHlwZVBhcmFtZXRlclN5bWJvbC5uYW1lKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGZvciAoY29uc3QgcGFyYW1ldGVyU3ltYm9sIG9mIG1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzKSB7XG5cdFx0XHRcdFx0bWV0aG9kU2NvcGUuZGVmaW5lVHlwZShwYXJhbWV0ZXJTeW1ib2wubmFtZSwgcGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgaGFzQm9keSA9IG1ldGhvZFN5bWJvbC5ib2R5ICYmIG1ldGhvZFN5bWJvbC5ib2R5Lmxlbmd0aCA+IDA7XG5cdFx0XHRcdGlmIChoYXNCb2R5KSB7XG5cdFx0XHRcdFx0Y29uc3QgYWN0dWFsID0gdGhpcy5jaGVja0JvZHkobWV0aG9kU3ltYm9sLmJvZHksIG1ldGhvZFNjb3BlKTtcblx0XHRcdFx0XHR0aGlzLmNoZWNrUmV0dXJuVHlwZShtZXRob2RTeW1ib2wucmV0dXJuVHlwZSwgYWN0dWFsLCBtZXRob2RTeW1ib2wubm9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQ2xhc3Nlc0ltcGxlbWVudHMoKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBjbGFzc1N5bWJvbCBvZiB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmFsbENsYXNzU3ltYm9scygpKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGludGVyZmFjZVJlZlR5cGUgb2YgY2xhc3NTeW1ib2wuaW1wbGVtZW50c0ludGVyZmFjZXMpIHtcblx0XHRcdFx0dGhpcy5jaGVja0ltcGxlbWVudHNJbnRlcmZhY2UoY2xhc3NTeW1ib2wsIGludGVyZmFjZVJlZlR5cGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tJbXBsZW1lbnRzSW50ZXJmYWNlKGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCwgaW50ZXJmYWNlUmVmVHlwZTogSW50ZXJmYWNlUmVmVHlwZSk6IHZvaWQge1xuXHRcdGNvbnN0IGludGVyZmFjZVN5bWJvbCA9IGludGVyZmFjZVJlZlR5cGUuaW50ZXJmYWNlU3ltYm9sO1xuXG5cdFx0Y29uc3Qgc3Vic3RpdHV0aW9uTWFwID0gYnVpbGRUeXBlU3Vic3RpdHV0aW9uTWFwKFxuXHRcdFx0aW50ZXJmYWNlU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLFxuXHRcdFx0aW50ZXJmYWNlUmVmVHlwZS50eXBlQXJndW1lbnRzXG5cdFx0KTtcblxuXHRcdGZvciAoY29uc3QgaW50ZXJmYWNlTWV0aG9kU3ltYm9sIG9mIGludGVyZmFjZVN5bWJvbC5pbnN0YW5jZU1ldGhvZFN5bWJvbHMudmFsdWVzKCkpIHtcblx0XHRcdGNvbnN0IGNsYXNzTWV0aG9kU3ltYm9sID0gdGhpcy5yZXNvbHZlSW5zdGFuY2VNZXRob2RlKFxuXHRcdFx0XHRjbGFzc1N5bWJvbCxcblx0XHRcdFx0aW50ZXJmYWNlTWV0aG9kU3ltYm9sLm5hbWVcblx0XHRcdCk7XG5cblx0XHRcdGlmICghY2xhc3NNZXRob2RTeW1ib2wpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoXG5cdFx0XHRcdFx0YENsYXNzICR7Y2xhc3NTeW1ib2wubmFtZX0gZG9lcyBub3QgaW1wbGVtZW50IG1ldGhvZCAke2ludGVyZmFjZU1ldGhvZFN5bWJvbC5uYW1lfSBmcm9tIGludGVyZmFjZSAke2ludGVyZmFjZVN5bWJvbC5uYW1lfWAsXG5cdFx0XHRcdFx0Y2xhc3NTeW1ib2wubm9kZVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmNoZWNrTWV0aG9kQ29tcGF0aWJpbGl0eShcblx0XHRcdFx0Y2xhc3NNZXRob2RTeW1ib2wsXG5cdFx0XHRcdGludGVyZmFjZU1ldGhvZFN5bWJvbCxcblx0XHRcdFx0c3Vic3RpdHV0aW9uTWFwXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tNZXRob2RDb21wYXRpYmlsaXR5KGNsYXNzTWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wsIGludGVyZmFjZU1ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sLCBzdWJzdGl0dXRpb25NYXA6IE1hcDxzdHJpbmcsIFR5cGU+KTogdm9pZCB7XG5cdFx0aWYgKGNsYXNzTWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMubGVuZ3RoICE9PSBpbnRlcmZhY2VNZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9scy5sZW5ndGgpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBNZXRob2QgJHtjbGFzc01ldGhvZFN5bWJvbC5uYW1lfSBoYXMgd3JvbmcgcGFyYW1ldGVyIGNvdW50YCk7XG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBpbnRlcmZhY2VNZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgcGFyYW1ldGVyU3ltYm9sOiBQYXJhbWV0ZXJTeW1ib2wgfCBudWxsID0gaW50ZXJmYWNlTWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHNbaV0gfHwgbnVsbDtcblxuXHRcdFx0aWYgKCFwYXJhbWV0ZXJTeW1ib2wpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYE1ldGhvZCAke2NsYXNzTWV0aG9kU3ltYm9sLm5hbWV9IGhhcyB0b28gbWFueSBwYXJhbWV0ZXJzYCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBleHBlY3RlZFR5cGU6IFR5cGUgPSBzdWJzdGl0dXRlVHlwZShwYXJhbWV0ZXJTeW1ib2wucGFyYW1ldGVyVHlwZSwgc3Vic3RpdHV0aW9uTWFwKTtcblxuXHRcdFx0Y29uc3QgYWN0dWFsVHlwZTogVHlwZSA9IHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlO1xuXG5cdFx0XHRpZiAoIWV4cGVjdGVkVHlwZS5hY2NlcHRzKGFjdHVhbFR5cGUpKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBQYXJhbWV0ZXIgJHtpICsgMX0gb2YgJHtjbGFzc01ldGhvZFN5bWJvbC5uYW1lfSBpbmNvbXBhdGlibGUgd2l0aCBpbnRlcmZhY2VgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBleHBlY3RlZFJldHVybjogVHlwZSA9IHN1YnN0aXR1dGVUeXBlKGludGVyZmFjZU1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlLCBzdWJzdGl0dXRpb25NYXApO1xuXG5cdFx0aWYgKCFleHBlY3RlZFJldHVybi5hY2NlcHRzKGNsYXNzTWV0aG9kU3ltYm9sLnJldHVyblR5cGUpKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgUmV0dXJuIHR5cGUgb2YgJHtjbGFzc01ldGhvZFN5bWJvbC5uYW1lfSBpbmNvbXBhdGlibGUgd2l0aCBpbnRlcmZhY2VgKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrU3RhdGVtZW50KG5vZGU6IEFTVE5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBTdGF0ZW1lbnRSZXN1bHQge1xuXHRcdHN3aXRjaCAobm9kZS50eXBlKSB7XG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLlJFVFVSTjpcblx0XHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RSZXR1cm5Ob2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFN0YXRlbWVudFJlc3VsdC53aXRoUmV0dXJuKFxuXHRcdFx0XHRcdFx0dGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5hcmd1bWVudCwgc2NvcGUpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuVkFSSUFCTEU6XG5cdFx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUVmFyaWFibGVOb2RlKSB7XG5cdFx0XHRcdFx0dGhpcy5jaGVja1ZhcmlhYmxlKG5vZGUsIHNjb3BlKTtcblx0XHRcdFx0XHRyZXR1cm4gU3RhdGVtZW50UmVzdWx0Lm5vUmV0dXJuKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkZPUkVBQ0g6XG5cdFx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNURm9yZWFjaE5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gU3RhdGVtZW50UmVzdWx0LndpdGhSZXR1cm4oXG5cdFx0XHRcdFx0XHR0aGlzLmNoZWNrRm9yZWFjaChub2RlLCBzY29wZSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5FWFBSRVNTSU9OOlxuXHRcdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEV4cHJlc3Npb25Ob2RlKSB7XG5cdFx0XHRcdFx0dGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5leHByLCBzY29wZSk7XG5cdFx0XHRcdFx0cmV0dXJuIFN0YXRlbWVudFJlc3VsdC5ub1JldHVybigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiBTdGF0ZW1lbnRSZXN1bHQubm9SZXR1cm4oKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tWYXJpYWJsZShub2RlOiBBU1RWYXJpYWJsZU5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiB2b2lkIHtcblx0XHRjb25zdCBkZWNsYXJlZFR5cGU6IFR5cGUgfCBudWxsID0gbm9kZS50eXBlQW5ub3RhdGlvblxuXHRcdFx0PyB0aGlzLndyYXBUeXBlKG5vZGUudHlwZUFubm90YXRpb24sIHNjb3BlKVxuXHRcdFx0OiBudWxsO1xuXG5cdFx0Y29uc3QgYWN0dWFsVHlwZTogVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKG5vZGUuaW5pdCwgc2NvcGUsIGRlY2xhcmVkVHlwZSk7XG5cblx0XHRpZiAoZGVjbGFyZWRUeXBlICYmICFkZWNsYXJlZFR5cGUuYWNjZXB0cyhhY3R1YWxUeXBlKSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFR5cGUgbWlzbWF0Y2g6ICR7ZGVjbGFyZWRUeXBlfSA8PiAke2FjdHVhbFR5cGV9YCwgbm9kZSk7XG5cdFx0fVxuXG5cdFx0c2NvcGUuZGVmaW5lVHlwZShub2RlLm5hbWUsIGRlY2xhcmVkVHlwZSA/PyBhY3R1YWxUeXBlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tGb3JlYWNoKG5vZGU6IEFTVEZvcmVhY2hOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0bGV0IGl0ZXJhYmxlVHlwZTogVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKG5vZGUuaXRlcmFibGUsIHNjb3BlKTtcblxuXHRcdGl0ZXJhYmxlVHlwZSA9IEF1dG9ib3hpbmcuYXV0b2JveElmTmVlZGVkKGl0ZXJhYmxlVHlwZSwgdGhpcy5vYmplY3RSZWdpc3RyeSk7XG5cblx0XHRpZiAoaXRlcmFibGVUeXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlICYmIGl0ZXJhYmxlVHlwZS5jbGFzc1N5bWJvbC5uYW1lID09PSAnQXJyYXknKSB7XG5cdFx0XHRpZiAoaXRlcmFibGVUeXBlLnR5cGVBcmd1bWVudHMubGVuZ3RoICE9PSAxKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKCdBcnJheSBpbiBmb3JlYWNoIG11c3N0IGhhdmUgZXhhY3RseSBvbmUgdHlwZSBhcmd1bWVudC4nLCBub2RlLml0ZXJhYmxlKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZWxlbWVudFR5cGU6IFR5cGUgfCBudWxsID0gaXRlcmFibGVUeXBlLnR5cGVBcmd1bWVudHNbMF0gfHwgbnVsbDtcblxuXHRcdFx0aWYgKGVsZW1lbnRUeXBlID09PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKCdBcnJheSBpbiBmb3JlYWNoIG11c3QgaGF2ZSBleGFjdGx5IG9uZSB0eXBlIGFyZ3VtZW50LicsIG5vZGUuaXRlcmFibGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBsb29wU2NvcGUgPSBuZXcgVHlwZVNjb3BlKHNjb3BlKTtcblx0XHRcdGxvb3BTY29wZS5kZWZpbmVUeXBlKG5vZGUuaXRlcmF0b3IsIGVsZW1lbnRUeXBlKTtcblxuXHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tCb2R5KG5vZGUuYm9keSwgbG9vcFNjb3BlKTtcblxuXHRcdH1cblxuXHRcdHRoaXMudHlwZUVycm9yKGBmb3JlYWNoIGV4cGVjdHMgQXJyYXk8VD4sIGdvdCAke2l0ZXJhYmxlVHlwZS50b1N0cmluZygpfWAsIG5vZGUuaXRlcmFibGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0V4cHJlc3Npb24oZXhwcjogQVNUTm9kZSB8IG51bGwsIHNjb3BlOiBUeXBlU2NvcGUsIGV4cGVjdGVkVHlwZTogVHlwZSB8IG51bGwgPSBudWxsKTogVHlwZSB7XG5cdFx0aWYgKGV4cHIgPT09IG51bGwpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKCdFeHByZXNzaW9uIGV4cGVjdGVkLCBnb3QgbnVsbC4nLCBleHByKTtcblx0XHR9XG5cblx0XHRzd2l0Y2ggKGV4cHIudHlwZSkge1xuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5OVU1CRVI6XG5cdFx0XHRcdHJldHVybiBUeXBlcy5OVU1CRVI7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuU1RSSU5HOlxuXHRcdFx0XHRyZXR1cm4gVHlwZXMuU1RSSU5HO1xuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkJPT0xFQU46XG5cdFx0XHRcdHJldHVybiBUeXBlcy5CT09MRUFOO1xuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLk5VTEw6XG5cdFx0XHRcdHJldHVybiBUeXBlcy5OVUxMO1xuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLlZET006IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RWRG9tTm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrVkRvbU5vZGUoZXhwcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuQVJSQVk6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RBcnJheU5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0FycmF5RXhwcmVzc2lvbihleHByLCBzY29wZSwgZXhwZWN0ZWRUeXBlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5JTkRFWDoge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVEluZGV4Tm9kZSkge1xuXHRcdFx0XHRcdGNvbnN0IG9iamVjdFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihleHByLm9iamVjdCwgc2NvcGUpO1xuXHRcdFx0XHRcdGNvbnN0IGluZGV4ID0gdGhpcy5jaGVja0V4cHJlc3Npb24oZXhwci5pbmRleCwgc2NvcGUpO1xuXG5cdFx0XHRcdFx0aWYgKG9iamVjdFR5cGUgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUpIHtcblx0XHRcdFx0XHRcdHJldHVybiBvYmplY3RUeXBlLnR5cGVBcmd1bWVudHNbMF0gfHwgVHlwZXMuTUlYRUQ7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBpbmRleCAke29iamVjdFR5cGUubmFtZX0gd2l0aCAke2luZGV4Lm5hbWV9YCwgZXhwcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuVU5BUlk6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RVbmFyeU5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja1VuYXJ5RXhwcmVzc2lvbihleHByLCBzY29wZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuTUVNQkVSOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrTWVtYmVyRXhwcmVzc2lvbihleHByLCBzY29wZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuVEhJUzoge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja1RoaXNFeHByZXNzaW9uKGV4cHIsIHNjb3BlKTtcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5JREVOVElGSUVSOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0lkZW50aWZpZXJFeHByZXNzaW9uKGV4cHIsIHNjb3BlKTtcblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5ORVc6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1ROZXdOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tOZXdFeHByZXNzaW9uKGV4cHIsIHNjb3BlLCBleHBlY3RlZFR5cGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkJJTkFSWToge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVEJpbmFyeU5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0JpbmFyeUV4cHJlc3Npb24oZXhwciwgc2NvcGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkxBTUJEQToge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVExhbWJkYU5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0xhbWJkYUV4cHJlc3Npb24oZXhwciwgc2NvcGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkNBTEw6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RDYWxsTm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrQ2FsbEV4cHJlc3Npb24oZXhwciwgc2NvcGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBUeXBlcy5NSVhFRDtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tCaW5hcnlFeHByZXNzaW9uKGV4cHI6IEFTVEJpbmFyeU5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRjb25zdCBsZWZ0OiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24oZXhwci5sZWZ0LCBzY29wZSk7XG5cdFx0Y29uc3QgcmlnaHQ6IFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihleHByLnJpZ2h0LCBzY29wZSk7XG5cdFx0Y29uc3Qgb3A6IHN0cmluZyA9IGV4cHIub3BlcmF0b3I7XG5cblx0XHRpZiAoR1JBTU1BUi5BUklUSE1FVElDLmluY2x1ZGVzKG9wKSkge1xuXHRcdFx0aWYgKGxlZnQuYWNjZXB0cyhUeXBlcy5OVU1CRVIpICYmIHJpZ2h0LmFjY2VwdHMoVHlwZXMuTlVNQkVSKSkge1xuXHRcdFx0XHRyZXR1cm4gVHlwZXMuTlVNQkVSO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGxlZnQuYWNjZXB0cyhUeXBlcy5TVFJJTkcpIHx8IHJpZ2h0LmFjY2VwdHMoVHlwZXMuU1RSSU5HKSkge1xuXHRcdFx0XHRyZXR1cm4gVHlwZXMuU1RSSU5HO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYEFyaXRobWV0aWMgb3BlcmF0b3IgJyR7b3B9JyByZXF1aXJlcyBudW1iZXJzYCwgZXhwcik7XG5cdFx0fVxuXG5cdFx0aWYgKEdSQU1NQVIuQ09NUEFSSVNPTi5pbmNsdWRlcyhvcCkpIHtcblx0XHRcdGlmIChsZWZ0LmFjY2VwdHMoVHlwZXMuTlVNQkVSKSAmJiByaWdodC5hY2NlcHRzKFR5cGVzLk5VTUJFUikpIHtcblx0XHRcdFx0cmV0dXJuIFR5cGVzLkJPT0xFQU47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQ29tcGFyaXNvbiAnJHtvcH0nIHJlcXVpcmVzIG51bWJlcnNgLCBleHByKTtcblx0XHR9XG5cblx0XHRpZiAoR1JBTU1BUi5FUVVBTElUWS5pbmNsdWRlcyhvcCkpIHtcblx0XHRcdGlmIChsZWZ0LmFjY2VwdHMocmlnaHQpKSB7XG5cdFx0XHRcdHJldHVybiBUeXBlcy5CT09MRUFOO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBjb21wYXJlICR7bGVmdC5uYW1lfSB3aXRoICR7cmlnaHQubmFtZX1gLCBleHByKTtcblx0XHR9XG5cblx0XHRpZiAoR1JBTU1BUi5MT0dJQ0FMLmluY2x1ZGVzKG9wKSkge1xuXHRcdFx0aWYgKGxlZnQuYWNjZXB0cyhUeXBlcy5CT09MRUFOKSAmJiByaWdodC5hY2NlcHRzKFR5cGVzLkJPT0xFQU4pKSB7XG5cdFx0XHRcdHJldHVybiBUeXBlcy5CT09MRUFOO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYExvZ2ljYWwgb3BlcmF0b3IgJyR7b3B9JyByZXF1aXJlcyBib29sZWFuc2AsIGV4cHIpO1xuXHRcdH1cblxuXHRcdHRoaXMudHlwZUVycm9yKGBJbnZhbGlkIGJpbmFyeSBvcGVyYXRpb25gLCBleHByKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tGaWVsZEFjY2Vzcyhub2RlOiBBU1RNZW1iZXJOb2RlLCBjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wsIGZpZWxkU3ltYm9sOiBGaWVsZFN5bWJvbCwgc2NvcGU6IFR5cGVTY29wZSk6IHZvaWQge1xuXHRcdGlmIChmaWVsZFN5bWJvbC5pc1B1YmxpYykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICghc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBhY2Nlc3MgcHJpdmF0ZSBtZW1iZXIgJHtub2RlLnByb3BlcnR5fSBvZiAke2NsYXNzU3ltYm9sLm5hbWV9YCwgbm9kZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgIT09IGZpZWxkU3ltYm9sLm93bmVyKSB7XG5cdFx0XHRpZiAoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCBpbnN0YW5jZW9mIENsYXNzU3ltYm9sXG5cdFx0XHRcdCYmIHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wuc3VwZXJDbGFzc1N5bWJvbCAhPT0gZmllbGRTeW1ib2wub3duZXIpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBhY2Nlc3MgcHJpdmF0ZSBtZW1iZXIgJHtub2RlLnByb3BlcnR5fSBvZiAke2NsYXNzU3ltYm9sLm5hbWV9YCwgbm9kZSk7XG5cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrSW5zdGFuY2VNZXRob2RBY2Nlc3Mobm9kZTogQVNUTWVtYmVyTm9kZSwgY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sLCBtZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCwgc2NvcGU6IFR5cGVTY29wZSk6IHZvaWQge1xuXHRcdGlmIChtZXRob2RTeW1ib2wuaXNQdWJsaWMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIXNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgYWNjZXNzIHByaXZhdGUgbWV0aG9kICR7bm9kZS5wcm9wZXJ0eX0gb2YgJHtjbGFzc1N5bWJvbC5uYW1lfWAsIG5vZGUpO1xuXHRcdH1cblxuXHRcdGlmIChzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sICE9PSBtZXRob2RTeW1ib2wub3duZXIpIHtcblx0XHRcdGlmIChzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sIGluc3RhbmNlb2YgQ2xhc3NTeW1ib2xcblx0XHRcdFx0JiYgc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbC5zdXBlckNsYXNzU3ltYm9sICE9PSBtZXRob2RTeW1ib2wub3duZXIpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBhY2Nlc3MgcHJpdmF0ZSBtZXRob2QgJHtub2RlLnByb3BlcnR5fSBvZiAke2NsYXNzU3ltYm9sLm5hbWV9YCwgbm9kZSk7XG5cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrU3RhdGljTWV0aG9kQWNjZXNzKGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCwgbWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wsIHNjb3BlOiBUeXBlU2NvcGUpOiB2b2lkIHtcblx0XHRpZiAoIW1ldGhvZFN5bWJvbC5pc1N0YXRpYykge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBjYWxsIGluc3RhbmNlIG1ldGhvZCAke2NsYXNzU3ltYm9sLm5hbWV9LiR7bWV0aG9kU3ltYm9sLm5hbWV9IGFzIHN0YXRpYyBtZXRob2RgKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAobWV0aG9kU3ltYm9sLmlzUHVibGljKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCFzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGFjY2VzcyBwcml2YXRlIG1ldGhvZCAke21ldGhvZFN5bWJvbC5uYW1lfSBvZiAke2NsYXNzU3ltYm9sLm5hbWV9YCxcblx0XHRcdCAgICAgICAgICAgICAgIG1ldGhvZFN5bWJvbC5ub2RlKTtcblx0XHR9XG5cblx0XHRpZiAoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCAhPT0gbWV0aG9kU3ltYm9sLm93bmVyKSB7XG5cdFx0XHRpZiAoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCBpbnN0YW5jZW9mIENsYXNzU3ltYm9sXG5cdFx0XHRcdCYmIHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wuc3VwZXJDbGFzc1N5bWJvbCAhPT0gbWV0aG9kU3ltYm9sLm93bmVyKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgYWNjZXNzIHByaXZhdGUgbWV0aG9kICR7bWV0aG9kU3ltYm9sLm5hbWV9IG9mICR7Y2xhc3NTeW1ib2wubmFtZX1gLFxuXHRcdFx0XHQgICAgICAgICAgICAgICBtZXRob2RTeW1ib2wubm9kZSk7XG5cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrTWVtYmVyRXhwcmVzc2lvbihub2RlOiBBU1RNZW1iZXJOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0Y29uc3Qgb2JqZWN0VHlwZTogVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKG5vZGUub2JqZWN0LCBzY29wZSk7XG5cblx0XHRpZiAob2JqZWN0VHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSkge1xuXHRcdFx0Y29uc3QgY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sID0gb2JqZWN0VHlwZS5jbGFzc1N5bWJvbDtcblxuXHRcdFx0Y29uc3QgaW5zdGFuY2VGaWVsZFN5bWJvbDogRmllbGRTeW1ib2wgfCBudWxsID0gY2xhc3NTeW1ib2wucmVzb2x2ZUluc3RhbmNlRmllbGRTeW1ib2wobm9kZS5wcm9wZXJ0eSk7XG5cdFx0XHRpZiAoaW5zdGFuY2VGaWVsZFN5bWJvbCkge1xuXHRcdFx0XHR0aGlzLmNoZWNrRmllbGRBY2Nlc3Mobm9kZSwgY2xhc3NTeW1ib2wsIGluc3RhbmNlRmllbGRTeW1ib2wsIHNjb3BlKTtcblx0XHRcdFx0cmV0dXJuIGluc3RhbmNlRmllbGRTeW1ib2wuZmllbGRUeXBlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzdGF0aWNGaWVsZFN5bWJvbDogRmllbGRTeW1ib2wgfCBudWxsID0gY2xhc3NTeW1ib2wucmVzb2x2ZVN0YXRpY0ZpZWxkU3ltYm9sKG5vZGUucHJvcGVydHkpO1xuXHRcdFx0aWYgKHN0YXRpY0ZpZWxkU3ltYm9sKSB7XG5cdFx0XHRcdHRoaXMuY2hlY2tGaWVsZEFjY2Vzcyhub2RlLCBjbGFzc1N5bWJvbCwgc3RhdGljRmllbGRTeW1ib2wsIHNjb3BlKTtcblx0XHRcdFx0cmV0dXJuIHN0YXRpY0ZpZWxkU3ltYm9sLmZpZWxkVHlwZTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFVua25vd24gbWVtYmVyICR7bm9kZS5wcm9wZXJ0eX1gLCBub2RlKTtcblx0XHR9XG5cblx0XHR0aGlzLnR5cGVFcnJvcihcIkNhbm5vdCBhY2Nlc3MgbWVtYmVyIG9mIG5vbi1vYmplY3RcIiwgbm9kZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrVGhpc0V4cHJlc3Npb24obm9kZTogQVNUTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IENsYXNzUmVmVHlwZSB7XG5cdFx0aWYgKHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgaW5zdGFuY2VvZiBDbGFzc1N5bWJvbCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDbGFzc1JlZlR5cGUoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCk7XG5cdFx0fVxuXHRcdHRoaXMudHlwZUVycm9yKCd0aGlzIG91dHNpZGUgb2YgY2xhc3MnLCBub2RlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlOiBBU1ROb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0aWYgKHNjb3BlLmhhc1R5cGUobm9kZS5uYW1lKSkge1xuXHRcdFx0cmV0dXJuIHNjb3BlLmdldFR5cGUobm9kZS5uYW1lKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKG5vZGUubmFtZSkpIHtcblx0XHRcdHJldHVybiBuZXcgQ2xhc3NSZWZUeXBlKHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2wobm9kZS5uYW1lKSk7XG5cdFx0fVxuXHRcdHRoaXMudHlwZUVycm9yKGBVbmRlZmluZWQgaWRlbnRpZmllciAke25vZGUubmFtZX1gLCBub2RlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tOZXdFeHByZXNzaW9uKG5vZGU6IEFTVE5ld05vZGUsIHNjb3BlOiBUeXBlU2NvcGUsIGV4cGVjdGVkVHlwZTogVHlwZSB8IG51bGwgPSBudWxsKTogQ2xhc3NSZWZUeXBlIHtcblx0XHRjb25zdCBjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wgPSB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKG5vZGUubmFtZSk7XG5cblx0XHRsZXQgaW5zdGFuY2VUeXBlO1xuXHRcdGlmIChub2RlLnR5cGVBbm5vdGF0aW9uLnR5cGVBcmd1bWVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0Y29uc3QgdHlwZUFyZ3VtZW50cyA9IG5vZGVcblx0XHRcdFx0LnR5cGVBbm5vdGF0aW9uXG5cdFx0XHRcdC50eXBlQXJndW1lbnRzXG5cdFx0XHRcdC5tYXAodHlwZUFyZ3VtZW50ID0+IHRoaXMud3JhcFR5cGUodHlwZUFyZ3VtZW50LCBzY29wZSkpO1xuXG5cdFx0XHRpZiAodHlwZUFyZ3VtZW50cy5sZW5ndGggIT09IGNsYXNzU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgV3JvbmcgbnVtYmVyIG9mIHR5cGUgYXJndW1lbnRzYCwgbm9kZSk7XG5cdFx0XHR9XG5cblx0XHRcdGluc3RhbmNlVHlwZSA9IG5ldyBDbGFzc1JlZlR5cGUoY2xhc3NTeW1ib2wsIHR5cGVBcmd1bWVudHMpO1xuXHRcdH0gZWxzZSBpZiAoZXhwZWN0ZWRUeXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0XHRpbnN0YW5jZVR5cGUgPSBleHBlY3RlZFR5cGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGluc3RhbmNlVHlwZSA9IG5ldyBDbGFzc1JlZlR5cGUoXG5cdFx0XHRcdGNsYXNzU3ltYm9sLFxuXHRcdFx0XHRjbGFzc1N5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5tYXAoKCkgPT4gVHlwZXMuTUlYRUQpXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmIChjbGFzc1N5bWJvbC5jb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbCkge1xuXHRcdFx0dGhpcy5jaGVja0NhbGxBcmd1bWVudHMoY2xhc3NTeW1ib2wuY29uc3RydWN0b3JNZXRob2RTeW1ib2wsIG5vZGUuYXJndW1lbnRzLCBzY29wZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGV4cGVjdGVkVHlwZSAmJiAhZXhwZWN0ZWRUeXBlLmFjY2VwdHMoaW5zdGFuY2VUeXBlKSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFR5cGUgbWlzbWF0Y2g6ICR7ZXhwZWN0ZWRUeXBlfSA8PiAke2luc3RhbmNlVHlwZX1gLCBub2RlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaW5zdGFuY2VUeXBlO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0FycmF5RXhwcmVzc2lvbihub2RlOiBBU1RBcnJheU5vZGUsIHNjb3BlOiBUeXBlU2NvcGUsIGV4cGVjdGVkVHlwZTogVHlwZSB8IG51bGwgPSBudWxsKTogQ2xhc3NSZWZUeXBlIHtcblxuXHRcdGlmIChub2RlLmVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0aWYgKGV4cGVjdGVkVHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSkge1xuXHRcdFx0XHRleHBlY3RlZFR5cGUgPSBleHBlY3RlZFR5cGUudHlwZUFyZ3VtZW50c1swXSB8fCBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcy5uZXdBcnJheVR5cGVPZihleHBlY3RlZFR5cGUgfHwgVHlwZXMuTUlYRUQpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNsYXNzUmVmTmFtZSA9IFByaW1pdGl2ZUNsYXNzVHlwZXMuZ2V0Q2xhc3NSZWZOYW1lKFByaW1pdGl2ZUNsYXNzVHlwZXMuQVJSQVkpO1xuXG5cdFx0bGV0IGV4cGVjdGVkVHlwZU9mSXRlbTogVHlwZTtcblx0XHRpZiAoZXhwZWN0ZWRUeXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlICYmIGV4cGVjdGVkVHlwZS5jbGFzc1N5bWJvbC5uYW1lID09PSBjbGFzc1JlZk5hbWUpIHtcblx0XHRcdGV4cGVjdGVkVHlwZU9mSXRlbSA9IGV4cGVjdGVkVHlwZS50eXBlQXJndW1lbnRzWzBdIHx8IFR5cGVzLk1JWEVEO1xuXHRcdH0gZWxzZSBpZiAobm9kZS5lbGVtZW50c1swXSkge1xuXHRcdFx0ZXhwZWN0ZWRUeXBlT2ZJdGVtID0gdGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5lbGVtZW50c1swXSwgc2NvcGUsIGV4cGVjdGVkVHlwZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKCdBcnJheSBleHByZXNzaW9uIG11c3QgaGF2ZSBhdCBsZWFzdCBvbmUgZWxlbWVudCcsIG5vZGUpO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgaXRlbSBvZiBub2RlLmVsZW1lbnRzKSB7XG5cdFx0XHRjb25zdCBhY3R1YWxUeXBlT2ZJdGVtOiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24oaXRlbSwgc2NvcGUsIGV4cGVjdGVkVHlwZU9mSXRlbSk7XG5cdFx0XHRpZiAoIWV4cGVjdGVkVHlwZU9mSXRlbS5hY2NlcHRzKGFjdHVhbFR5cGVPZkl0ZW0pKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKFxuXHRcdFx0XHRcdGBBcnJheSBlbGVtZW50cyBtdXN0IGhhdmUgc2FtZSB0eXBlLCBnb3QgJHtleHBlY3RlZFR5cGVPZkl0ZW19IGFuZCAke2FjdHVhbFR5cGVPZkl0ZW19YCxcblx0XHRcdFx0XHRub2RlXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMubmV3QXJyYXlUeXBlT2YoZXhwZWN0ZWRUeXBlT2ZJdGVtKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tVbmFyeUV4cHJlc3Npb24obm9kZTogQVNUVW5hcnlOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0Y29uc3Qgb3BlcmFuZCA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKG5vZGUuYXJndW1lbnQsIHNjb3BlKTtcblx0XHRjb25zdCBvcCA9IG5vZGUub3BlcmF0b3I7XG5cdFx0aWYgKG9wID09PSBHUkFNTUFSLkVYQ0xBTUFUSU9OX01BUkspIHtcblx0XHRcdGlmIChvcGVyYW5kLmVxdWFscyhUeXBlcy5CT09MRUFOKSkge1xuXHRcdFx0XHRyZXR1cm4gVHlwZXMuQk9PTEVBTjtcblx0XHRcdH1cblx0XHRcdHRoaXMudHlwZUVycm9yKGBVbmFyeSAnIScgcmVxdWlyZXMgYm9vbGVhbiwgZ290ICR7b3BlcmFuZC5uYW1lfWAsIG5vZGUpO1xuXHRcdH1cblx0XHR0aGlzLnR5cGVFcnJvcihgSW52YWxpZCB1bmFyeSBvcGVyYXRvciAke29wfWAsIG5vZGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0xhbWJkYUV4cHJlc3Npb24obm9kZTogQVNUTGFtYmRhTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IExhbWJkYVR5cGUge1xuXHRcdGNvbnN0IGxhbWJkYVNjb3BlID0gbmV3IFR5cGVTY29wZShzY29wZSk7XG5cdFx0Y29uc3QgcGFyYW1ldGVycyA9IG5vZGUucGFyYW1ldGVycy5tYXAocGFyYW1ldGVyTm9kZSA9PiB7XG5cdFx0XHRjb25zdCBwYXJhbWV0ZXJTeW1ib2w6IFBhcmFtZXRlclN5bWJvbCA9IHRoaXMucGFyYW1ldGVyTm9kZVRvU3ltYm9sKHBhcmFtZXRlck5vZGUpO1xuXG5cdFx0XHRsYW1iZGFTY29wZS5kZWZpbmVUeXBlKHBhcmFtZXRlck5vZGUubmFtZSwgcGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGUpO1xuXG5cdFx0XHRyZXR1cm4gcGFyYW1ldGVyU3ltYm9sO1xuXHRcdH0pO1xuXG5cdFx0aWYgKG5vZGUuY2hpbGRyZW5bMF0pIHtcblx0XHRcdHJldHVybiBuZXcgTGFtYmRhVHlwZShwYXJhbWV0ZXJzLCB0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLmNoaWxkcmVuWzBdLCBsYW1iZGFTY29wZSkpO1xuXHRcdH1cblxuXHRcdHRoaXMudHlwZUVycm9yKCdMYW1iZGEgZXhwcmVzc2lvbiBtdXN0IGhhdmUgYSByZXR1cm4gdHlwZScsIG5vZGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0NhbGxFeHByZXNzaW9uKG5vZGU6IEFTVENhbGxOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0Y29uc3QgY2FsbGVlID0gbm9kZS5jYWxsZWU7XG5cblx0XHRpZiAoY2FsbGVlLnR5cGUgPT09IEFTVE5vZGVUeXBlLklERU5USUZJRVIgJiYgY2FsbGVlLm5hbWUgPT09IEdSQU1NQVIuU1VQRVIpIHtcblx0XHRcdHJldHVybiB0aGlzLmNoZWNrU3VwZXJDb25zdHJ1Y3RvckNhbGwobm9kZSwgc2NvcGUpO1xuXHRcdH1cblxuXHRcdC8vIENsYXNzLm1ldGhvZCgpXG5cdFx0aWYgKGNhbGxlZSBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGVcblx0XHRcdCYmIGNhbGxlZS5vYmplY3QudHlwZSA9PT0gQVNUTm9kZVR5cGUuSURFTlRJRklFUlxuXHRcdFx0JiYgdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5oYXNTeW1ib2woY2FsbGVlLm9iamVjdC5uYW1lKVxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tTdGF0aWNDYWxsKFxuXHRcdFx0XHRjYWxsZWUub2JqZWN0Lm5hbWUsXG5cdFx0XHRcdGNhbGxlZS5wcm9wZXJ0eSxcblx0XHRcdFx0bm9kZS5hcmd1bWVudHMsXG5cdFx0XHRcdHNjb3BlXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIGV4cHIubWV0aG9kKClcblx0XHRpZiAoY2FsbGVlIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tJbnN0YW5jZUNhbGwoY2FsbGVlLCBub2RlLmFyZ3VtZW50cywgc2NvcGUpO1xuXHRcdH1cblxuXHRcdGlmIChjYWxsZWUgaW5zdGFuY2VvZiBBU1RMYW1iZGFOb2RlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jaGVja0xhbWJkYUNhbGwodGhpcy5jaGVja0xhbWJkYUV4cHJlc3Npb24oY2FsbGVlLCBzY29wZSksIG5vZGUuYXJndW1lbnRzLCBzY29wZSk7XG5cdFx0fVxuXG5cdFx0Ly8gSWRlbnRpZmllcjogVmFyaWFibGUgLyBMYW1iZGFcblx0XHRpZiAoY2FsbGVlLnR5cGUgPT09IEFTVE5vZGVUeXBlLklERU5USUZJRVIpIHtcblx0XHRcdGlmIChzY29wZS5oYXNUeXBlKGNhbGxlZS5uYW1lKSkge1xuXHRcdFx0XHRjb25zdCB0eXBlID0gc2NvcGUuZ2V0VHlwZShjYWxsZWUubmFtZSk7XG5cdFx0XHRcdGlmICh0eXBlIGluc3RhbmNlb2YgTGFtYmRhVHlwZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrTGFtYmRhQ2FsbCh0eXBlLCBub2RlLmFyZ3VtZW50cywgc2NvcGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgY2FsbCBub24tZnVuY3Rpb24gJHtjYWxsZWUubmFtZX1gLCBub2RlKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRmFsbGJhY2s6IGdsb2JhbGUgRnVua3Rpb25cblx0XHRcdHJldHVybiB0aGlzLmNoZWNrRnVuY3Rpb25DYWxsKGNhbGxlZS5uYW1lLCBub2RlLmFyZ3VtZW50cywgc2NvcGUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBUeXBlcy5NSVhFRDtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tTdXBlckNvbnN0cnVjdG9yQ2FsbChub2RlOiBBU1RDYWxsTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGNvbnN0IGN1cnJlbnRDbGFzcyA9IHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2w7XG5cblx0XHRpZiAoIShjdXJyZW50Q2xhc3MgaW5zdGFuY2VvZiBDbGFzc1N5bWJvbCkpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKCdzdXBlcigpIHVzZWQgb3V0c2lkZSBvZiBjbGFzcycsIG5vZGUpO1xuXHRcdH1cblxuXHRcdGlmICghY3VycmVudENsYXNzLnN1cGVyQ2xhc3MpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKCdzdXBlcigpIHVzZWQgb3V0c2lkZSBvZiBjbGFzcyBoaWVyYXJjaHknLCBub2RlKTtcblx0XHR9XG5cblx0XHRjb25zdCBzdXBlclN5bWJvbDogQ2xhc3NTeW1ib2wgPSB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKGN1cnJlbnRDbGFzcy5zdXBlckNsYXNzKTtcblx0XHRpZiAoIXN1cGVyU3ltYm9sLmNvbnN0cnVjdG9yTWV0aG9kU3ltYm9sKSB7XG5cdFx0XHRpZiAobm9kZS5hcmd1bWVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcignU3VwZXIgY29uc3RydWN0b3IgdGFrZXMgbm8gYXJndW1lbnRzJywgbm9kZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gVHlwZXMuVk9JRDtcblx0XHR9XG5cblx0XHR0aGlzLmNoZWNrQ2FsbEFyZ3VtZW50cyhzdXBlclN5bWJvbC5jb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbCwgbm9kZS5hcmd1bWVudHMsIHNjb3BlKTtcblxuXHRcdHJldHVybiBUeXBlcy5WT0lEO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0NhbGxPbk51bGxPYmplY3RUeXBlKG9iamVjdFR5cGU6IFR5cGUsIG5vZGU6IEFTVE5vZGUpOiB2b2lkIHtcblx0XHRpZiAob2JqZWN0VHlwZS5lcXVhbHMoVHlwZXMuTlVMTCkpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgY2FsbCBtZXRob2Qgb24gbnVsbGAsIG5vZGUpO1xuXHRcdH1cblx0XHRpZiAob2JqZWN0VHlwZSBpbnN0YW5jZW9mIE51bGxhYmxlVHlwZSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBjYWxsIG1ldGhvZCBvbiBudWxsYWJsZSB0eXBlICR7b2JqZWN0VHlwZX1gLCBub2RlKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrSW5zdGFuY2VDYWxsKGNhbGxlZTogQVNUTWVtYmVyTm9kZSwgY2FsbEFyZ3VtZW50czogQVNUTm9kZVtdLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0bGV0IG9iamVjdFR5cGU6IFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihjYWxsZWUub2JqZWN0LCBzY29wZSk7XG5cblx0XHRvYmplY3RUeXBlID0gQXV0b2JveGluZy5hdXRvYm94SWZOZWVkZWQob2JqZWN0VHlwZSwgdGhpcy5vYmplY3RSZWdpc3RyeSk7XG5cblx0XHR0aGlzLmNoZWNrQ2FsbE9uTnVsbE9iamVjdFR5cGUob2JqZWN0VHlwZSwgY2FsbGVlKTtcblxuXHRcdGlmIChvYmplY3RUeXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0XHRjb25zdCBtZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCA9IHRoaXMucmVzb2x2ZUluc3RhbmNlTWV0aG9kZShcblx0XHRcdFx0b2JqZWN0VHlwZS5jbGFzc1N5bWJvbCxcblx0XHRcdFx0Y2FsbGVlLnByb3BlcnR5XG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAobWV0aG9kU3ltYm9sLmlzU3RhdGljKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgY2FsbCBzdGF0aWMgbWV0aG9kICR7Y2FsbGVlLnByb3BlcnR5fSBvbiBpbnN0YW5jZSBvZiAke2NhbGxlZS5vYmplY3QubmFtZX1gLFxuXHRcdFx0XHQgICAgICAgICAgICAgICBjYWxsZWUpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmNoZWNrSW5zdGFuY2VNZXRob2RBY2Nlc3MoY2FsbGVlLCBvYmplY3RUeXBlLmNsYXNzU3ltYm9sLCBtZXRob2RTeW1ib2wsIHNjb3BlKTtcblxuXHRcdFx0Y29uc3Qgb3duZXI6IENsYXNzU3ltYm9sIHwgSW50ZXJmYWNlU3ltYm9sIHwgbnVsbCA9IG1ldGhvZFN5bWJvbC5vd25lcjtcblxuXHRcdFx0aWYgKG93bmVyID09PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgY2FsbCBtZXRob2Qgb24gbm9uLW9iamVjdGAsIGNhbGxlZSk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHN1YnN0aXR1dGlvbk1hcDogTWFwPHN0cmluZywgVHlwZT4gPSBidWlsZFR5cGVTdWJzdGl0dXRpb25NYXAoXG5cdFx0XHRcdG93bmVyLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLFxuXHRcdFx0XHRvYmplY3RUeXBlLnR5cGVBcmd1bWVudHNcblx0XHRcdCk7XG5cblx0XHRcdHRoaXMuY2hlY2tDYWxsQXJndW1lbnRzKG1ldGhvZFN5bWJvbCwgY2FsbEFyZ3VtZW50cywgc2NvcGUsIHN1YnN0aXR1dGlvbk1hcCk7XG5cblx0XHRcdHJldHVybiBzdWJzdGl0dXRlVHlwZShtZXRob2RTeW1ib2wucmV0dXJuVHlwZSwgc3Vic3RpdHV0aW9uTWFwKTtcblx0XHR9XG5cblx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNhbGwgbWV0aG9kIG9uIG5vbi1vYmplY3RgLCBjYWxsZWUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1N0YXRpY0NhbGwoY2xhc3NOYW1lOiBzdHJpbmcsIG1ldGhvZE5hbWU6IHN0cmluZywgY2FsbEFyZ3VtZW50czogQVNUTm9kZVtdLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0Y29uc3QgY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sID0gdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChjbGFzc05hbWUpO1xuXG5cdFx0Y29uc3QgbWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wgfCBudWxsID0gY2xhc3NTeW1ib2wuc3RhdGljTWV0aG9kU3ltYm9scy5nZXQobWV0aG9kTmFtZSkgfHwgbnVsbDtcblx0XHRpZiAoIW1ldGhvZFN5bWJvbCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFVua25vd24gc3RhdGljIG1ldGhvZCAke2NsYXNzTmFtZX0uJHttZXRob2ROYW1lfWApO1xuXHRcdH1cblxuXHRcdHRoaXMuY2hlY2tTdGF0aWNNZXRob2RBY2Nlc3MoY2xhc3NTeW1ib2wsIG1ldGhvZFN5bWJvbCwgc2NvcGUpXG5cblx0XHR0aGlzLmNoZWNrQ2FsbEFyZ3VtZW50cyhtZXRob2RTeW1ib2wsIGNhbGxBcmd1bWVudHMsIHNjb3BlKTtcblxuXHRcdHJldHVybiBtZXRob2RTeW1ib2wucmV0dXJuVHlwZTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tMYW1iZGFDYWxsKGxhbWJkYTogTGFtYmRhVHlwZSwgY2FsbEFyZ3VtZW50czogQVNUTm9kZVtdLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cblx0XHR0aGlzLmNoZWNrQ2FsbEFyZ3VtZW50cyhsYW1iZGEsIGNhbGxBcmd1bWVudHMsIHNjb3BlKTtcblxuXHRcdHJldHVybiBsYW1iZGEucmV0dXJuVHlwZTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tGdW5jdGlvbkNhbGwobmFtZTogc3RyaW5nLCBjYWxsQXJndW1lbnRzOiBBU1ROb2RlW10sIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRpZiAoIWdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5LmhhcyhuYW1lKSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFVua25vd24gZnVuY3Rpb24gJHtuYW1lfWApO1xuXHRcdH1cblxuXHRcdGNvbnN0IG5hdGl2ZUZ1bmN0aW9uOiBOYXRpdmVGdW5jdGlvbiA9IGdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5LmdldChuYW1lKTtcblxuXHRcdHRoaXMuY2hlY2tDYWxsQXJndW1lbnRzKG5hdGl2ZUZ1bmN0aW9uLCBjYWxsQXJndW1lbnRzLCBzY29wZSk7XG5cblx0XHRyZXR1cm4gbmF0aXZlRnVuY3Rpb24ucmV0dXJuVHlwZVxuXHRcdFx0PyB0aGlzLndyYXBUeXBlKG5hdGl2ZUZ1bmN0aW9uLnJldHVyblR5cGUsIHNjb3BlKVxuXHRcdFx0OiBUeXBlcy5WT0lEO1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJhbWV0ZXJzU3ltYm9sc0Zyb21DYWxsYWJsZVN5bWJvbChjYWxsYWJsZVN5bWJvbDogTWV0aG9kU3ltYm9sIHwgTGFtYmRhVHlwZSB8IE5hdGl2ZUZ1bmN0aW9uKTogUGFyYW1ldGVyU3ltYm9sW10ge1xuXHRcdGlmIChjYWxsYWJsZVN5bWJvbCBpbnN0YW5jZW9mIE5hdGl2ZUZ1bmN0aW9uKSB7XG5cdFx0XHRyZXR1cm4gY2FsbGFibGVTeW1ib2xcblx0XHRcdFx0LnBhcmFtZXRlck5vZGVzXG5cdFx0XHRcdC5tYXAocGFyYW1ldGVyTm9kZSA9PiB0aGlzLnBhcmFtZXRlck5vZGVUb1N5bWJvbChwYXJhbWV0ZXJOb2RlKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNhbGxhYmxlU3ltYm9sLnBhcmFtZXRlclN5bWJvbHNcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tDYWxsQXJndW1lbnRzKFxuXHRcdGNhbGxhYmxlU3ltYm9sOiBNZXRob2RTeW1ib2wgfCBMYW1iZGFUeXBlIHwgTmF0aXZlRnVuY3Rpb24sXG5cdFx0Y2FsbEFyZ3VtZW50czogQVNUTm9kZVtdLFxuXHRcdHNjb3BlOiBUeXBlU2NvcGUsXG5cdFx0c3Vic3RpdHV0aW9uTWFwOiBNYXA8c3RyaW5nLCBUeXBlPiA9IG5ldyBNYXAoKVxuXHQpOiB2b2lkIHtcblx0XHRjb25zdCBjYWxsU2NvcGUgPSBuZXcgVHlwZVNjb3BlKHNjb3BlKTtcblx0XHRsZXQgcGFyYW1ldGVyU3ltYm9scyA9IHRoaXMucGFyYW1ldGVyc1N5bWJvbHNGcm9tQ2FsbGFibGVTeW1ib2woY2FsbGFibGVTeW1ib2wpO1xuXG5cdFx0aWYgKGNhbGxBcmd1bWVudHMubGVuZ3RoID4gcGFyYW1ldGVyU3ltYm9scy5sZW5ndGgpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKFwiQXJndW1lbnQgY291bnQgbWlzbWF0Y2hcIik7XG5cdFx0fVxuXG5cdFx0bGV0IGFjdHVhbFR5cGU6IFR5cGU7XG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHBhcmFtZXRlclN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHBhcmFtZXRlclN5bWJvbDogUGFyYW1ldGVyU3ltYm9sIHwgbnVsbCA9IHBhcmFtZXRlclN5bWJvbHNbaV0gfHwgbnVsbDtcblx0XHRcdGNvbnN0IGNhbGxBcmd1bWVudDogQVNUTm9kZSB8IG51bGwgPSBjYWxsQXJndW1lbnRzW2ldIHx8IG51bGw7XG5cblx0XHRcdGlmIChwYXJhbWV0ZXJTeW1ib2wpIHtcblx0XHRcdFx0Y29uc3QgZXhwZWN0ZWRUeXBlOiBUeXBlID0gc3Vic3RpdHV0ZVR5cGUocGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGUsIHN1YnN0aXR1dGlvbk1hcCk7XG5cblx0XHRcdFx0aWYgKGNhbGxBcmd1bWVudCkge1xuXHRcdFx0XHRcdGFjdHVhbFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihjYWxsQXJndW1lbnQsIGNhbGxTY29wZSwgZXhwZWN0ZWRUeXBlKTtcblx0XHRcdFx0fSBlbHNlIGlmIChwYXJhbWV0ZXJTeW1ib2wuZGVmYXVsdFR5cGUpIHtcblx0XHRcdFx0XHRhY3R1YWxUeXBlID0gcGFyYW1ldGVyU3ltYm9sLmRlZmF1bHRUeXBlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMudHlwZUVycm9yKGBNaXNzaW5nIGFyZ3VtZW50ICR7cGFyYW1ldGVyU3ltYm9sLm5hbWV9YCwgY2FsbEFyZ3VtZW50KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuY2hlY2tBc3NpZ25hYmxlKGV4cGVjdGVkVHlwZSwgYWN0dWFsVHlwZSwgY2FsbEFyZ3VtZW50c1tpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0Fzc2lnbmFibGUoZXhwZWN0ZWRUeXBlOiBUeXBlLCBhY3R1YWxUeXBlOiBUeXBlLCBub2RlOiBBU1ROb2RlIHwgbnVsbCA9IG51bGwpOiB2b2lkIHtcblx0XHRpZiAoZXhwZWN0ZWRUeXBlLmVxdWFscyhhY3R1YWxUeXBlKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChleHBlY3RlZFR5cGUgaW5zdGFuY2VvZiBNaXhlZFR5cGUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoZXhwZWN0ZWRUeXBlIGluc3RhbmNlb2YgTnVsbGFibGVUeXBlKSB7XG5cdFx0XHRpZiAoYWN0dWFsVHlwZSA9PT0gVHlwZXMuTlVMTCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoZXhwZWN0ZWRUeXBlLmlubmVyLmFjY2VwdHMoYWN0dWFsVHlwZSkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChleHBlY3RlZFR5cGUuYWNjZXB0cyhhY3R1YWxUeXBlKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMudHlwZUVycm9yKGBUeXBlIG1pc21hdGNoOiAke2V4cGVjdGVkVHlwZX0gPD4gJHthY3R1YWxUeXBlfWAsIG5vZGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0JvZHkoY2hpbGRyZW46IEFTVE5vZGVbXSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGxldCByZXR1cm5UeXBlOiBUeXBlID0gVHlwZXMuTUlYRUQ7XG5cblx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG5cdFx0XHRjb25zdCBzdGF0ZW1lbnRSZXN1bHQgPSB0aGlzLmNoZWNrU3RhdGVtZW50KGNoaWxkLCBzY29wZSk7XG5cdFx0XHRpZiAoc3RhdGVtZW50UmVzdWx0LmRpZFJldHVybiAmJiBzdGF0ZW1lbnRSZXN1bHQucmV0dXJuVHlwZSkge1xuXHRcdFx0XHRyZXR1cm5UeXBlID0gc3RhdGVtZW50UmVzdWx0LnJldHVyblR5cGU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJldHVyblR5cGU7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrUmV0dXJuVHlwZShleHBlY3RlZFR5cGU6IFR5cGUsIGFjdHVhbFR5cGU6IFR5cGUsIG5vZGU6IEFTVE1ldGhvZE5vZGUpOiB2b2lkIHtcblx0XHQvLyB2b2lkLU1ldGhvZGVcblx0XHRpZiAoZXhwZWN0ZWRUeXBlID09PSBUeXBlcy5WT0lEKSB7XG5cdFx0XHRpZiAoYWN0dWFsVHlwZSAhPT0gVHlwZXMuTUlYRUQgJiYgYWN0dWFsVHlwZSAhPT0gVHlwZXMuVk9JRCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IHJldHVybiAke2FjdHVhbFR5cGV9IGZyb20gdm9pZCBtZXRob2RgLCBub2RlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBrZWluIHJldHVybiB2b3JoYW5kZW5cblx0XHRpZiAoYWN0dWFsVHlwZSA9PT0gVHlwZXMuTUlYRUQpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBNaXNzaW5nIHJldHVybiBzdGF0ZW1lbnQgKGV4cGVjdGVkICR7ZXhwZWN0ZWRUeXBlfSlgLCBub2RlKTtcblx0XHR9XG5cblx0XHQvLyB0eXAtaW5rb21wYXRpYmVsXG5cdFx0aWYgKCFleHBlY3RlZFR5cGUuYWNjZXB0cyhhY3R1YWxUeXBlKSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFJldHVybiB0eXBlIG1pc21hdGNoOiBleHBlY3RlZCAke2V4cGVjdGVkVHlwZX0sIGdvdCAke2FjdHVhbFR5cGV9YCwgbm9kZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1ZEb21Ob2RlKG5vZGU6IEFTVFZEb21Ob2RlKTogVHlwZSB7XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sID0gdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChub2RlLnRhZyk7XG5cblx0XHRcdGNvbnN0IG1ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sID0gdGhpcy5yZXNvbHZlSW5zdGFuY2VNZXRob2RlKGNsYXNzU3ltYm9sLCAncmVuZGVyJyk7XG5cblx0XHRcdGlmICghbWV0aG9kU3ltYm9sKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDb21wb25lbnQgJyR7bm9kZS50YWd9JyBoYXMgbm8gcmVuZGVyKCkgbWV0aG9kYCwgbm9kZSk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuY2hlY2tBc3NpZ25hYmxlKG1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlLCBUeXBlcy5WTk9ERSwgbm9kZSk7XG5cblx0XHRcdHJldHVybiBUeXBlcy5WTk9ERTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFR5cGVzLlZOT0RFO1xuXHR9XG5cblx0cHJpdmF0ZSByZXNvbHZlSW5zdGFuY2VNZXRob2RlKGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCwgbWV0aG9kTmFtZTogc3RyaW5nKTogTWV0aG9kU3ltYm9sIHtcblx0XHQvKiogQHR5cGUge01ldGhvZFN5bWJvbHxudWxsfSAqL1xuXHRcdGNvbnN0IG1ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sIHwgbnVsbCA9IHRoaXMucmVzb2x2ZUluSGllcmFyY2h5KFxuXHRcdFx0Y2xhc3NTeW1ib2wsXG5cdFx0XHRjbGFzc1N5bWJvbCA9PiBjbGFzc1N5bWJvbC5pbnN0YW5jZU1ldGhvZFN5bWJvbHMuZ2V0KG1ldGhvZE5hbWUpIHx8IG51bGxcblx0XHQpO1xuXG5cdFx0aWYgKCFtZXRob2RTeW1ib2wpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBVbmtub3duIG1ldGhvZCAke2NsYXNzU3ltYm9sLm5hbWV9LiR7bWV0aG9kTmFtZX1gLCBjbGFzc1N5bWJvbC5ub2RlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWV0aG9kU3ltYm9sO1xuXHR9XG5cblx0cHJpdmF0ZSByZXNvbHZlSW5IaWVyYXJjaHkoY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sLCByZXNvbHZlcjogKGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCkgPT4gYW55KTogYW55IHtcblx0XHRsZXQgY3VycmVudDogQ2xhc3NTeW1ib2wgfCBudWxsID0gY2xhc3NTeW1ib2w7XG5cblx0XHR3aGlsZSAoY3VycmVudCkge1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gcmVzb2x2ZXIoY3VycmVudCk7XG5cdFx0XHRpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQgJiYgcmVzdWx0ICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghY3VycmVudC5zdXBlckNsYXNzKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRjdXJyZW50ID0gdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChjdXJyZW50LnN1cGVyQ2xhc3MpO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cHJpdmF0ZSBuZXdBcnJheVR5cGVPZihlbGVtZW50VHlwZTogVHlwZSk6IENsYXNzUmVmVHlwZSB7XG5cdFx0Y29uc3QgY2xhc3NOYW1lOiBzdHJpbmcgfCBudWxsID0gUHJpbWl0aXZlQ2xhc3NUeXBlcy5nZXRDbGFzc1JlZk5hbWUoUHJpbWl0aXZlQ2xhc3NUeXBlcy5BUlJBWSk7XG5cblx0XHRpZiAoY2xhc3NOYW1lID09PSBudWxsKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcignSW50ZXJuYWwgZXJyb3I6IENhbm5vdCBmaW5kIGNsYXNzIG5hbWUgZm9yIGFycmF5IHR5cGUuJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBDbGFzc1JlZlR5cGUodGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChjbGFzc05hbWUpLCBbZWxlbWVudFR5cGVdKTtcblx0fVxuXG5cdHByaXZhdGUgd3JhcFR5cGUodHlwZTogQVNUVHlwZU5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRyZXR1cm4gd3JhcFR5cGUodHlwZSwgdGhpcy5vYmplY3RSZWdpc3RyeSwgc2NvcGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJhbWV0ZXJOb2RlVG9TeW1ib2wocGFyYW1ldGVyTm9kZTogQVNUUGFyYW1ldGVyTm9kZSwgc2NvcGU6IFR5cGVTY29wZSA9IG5ldyBUeXBlU2NvcGUoKSk6IFBhcmFtZXRlclN5bWJvbCB7XG5cdFx0Y29uc3QgcGFyYW1ldGVyVHlwZSA9IHBhcmFtZXRlck5vZGUudHlwZUFubm90YXRpb25cblx0XHRcdD8gdGhpcy53cmFwVHlwZShwYXJhbWV0ZXJOb2RlLnR5cGVBbm5vdGF0aW9uLCBzY29wZSlcblx0XHRcdDogVHlwZXMuTUlYRUQ7XG5cblx0XHRsZXQgZGVmYXVsdFR5cGUgPSBudWxsO1xuXHRcdGlmIChwYXJhbWV0ZXJOb2RlLmRlZmF1bHRWYWx1ZSkge1xuXHRcdFx0ZGVmYXVsdFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihwYXJhbWV0ZXJOb2RlLmRlZmF1bHRWYWx1ZSwgbmV3IFR5cGVTY29wZSgpKTtcblxuXHRcdFx0aWYgKGRlZmF1bHRUeXBlXG5cdFx0XHRcdCYmICFwYXJhbWV0ZXJUeXBlLmVxdWFscyhUeXBlcy5NSVhFRClcblx0XHRcdFx0JiYgIXBhcmFtZXRlclR5cGUuZXF1YWxzKGRlZmF1bHRUeXBlKSkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihcblx0XHRcdFx0XHRgRGVmYXVsdCB2YWx1ZSBmb3IgcGFyYW1ldGVyICcke3BhcmFtZXRlck5vZGUubmFtZX0nIGRvZXMgbm90IG1hdGNoIHR5cGUuYCxcblx0XHRcdFx0XHRwYXJhbWV0ZXJOb2RlXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBQYXJhbWV0ZXJTeW1ib2woXG5cdFx0XHRwYXJhbWV0ZXJOb2RlLm5hbWUsXG5cdFx0XHRwYXJhbWV0ZXJUeXBlLFxuXHRcdFx0ZGVmYXVsdFR5cGUsXG5cdFx0XHRwYXJhbWV0ZXJOb2RlXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgcmVnaXN0ZXJDbGFzc1N5bWJvbChjbGFzc05vZGU6IEFTVENsYXNzTm9kZSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmhhc1N5bWJvbChjbGFzc05vZGUubmFtZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBjbGFzc1Njb3BlID0gbmV3IFR5cGVTY29wZSgpO1xuXHRcdGNvbnN0IGNsYXNzU3ltYm9sID0gbmV3IENsYXNzU3ltYm9sKGNsYXNzTm9kZSk7XG5cblx0XHR0cnkge1xuXHRcdFx0aWYgKGNsYXNzU3ltYm9sLnN1cGVyQ2xhc3MpIHtcblx0XHRcdFx0Y2xhc3NTeW1ib2wuc3VwZXJDbGFzc1N5bWJvbCA9IHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2woY2xhc3NTeW1ib2wuc3VwZXJDbGFzcyk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdH1cblxuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuYWRkQ2xhc3NTeW1ib2woY2xhc3NTeW1ib2wpO1xuXG5cdFx0Y2xhc3NOb2RlLnR5cGVQYXJhbWV0ZXJzLmZvckVhY2gobmFtZSA9PiB7XG5cdFx0XHRjbGFzc1N5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5wdXNoKG5ldyBUeXBlUGFyYW1ldGVyU3ltYm9sKG5hbWUpKTtcblx0XHRcdGNsYXNzU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcobmFtZSwgbmV3IFR5cGVWYXJpYWJsZShuYW1lKSk7XG5cdFx0fSk7XG5cblx0XHRmb3IgKGNvbnN0IHR5cGVOb2RlIG9mIGNsYXNzTm9kZS5pbXBsZW1lbnRzSW50ZXJmYWNlcykge1xuXHRcdFx0Y29uc3QgaW50ZXJmYWNlVHlwZTogVHlwZSA9IHRoaXMud3JhcFR5cGUodHlwZU5vZGUsIGNsYXNzU2NvcGUpO1xuXHRcdFx0aWYgKGludGVyZmFjZVR5cGUgaW5zdGFuY2VvZiBJbnRlcmZhY2VSZWZUeXBlKSB7XG5cdFx0XHRcdGNsYXNzU3ltYm9sLmltcGxlbWVudHNJbnRlcmZhY2VzLnB1c2goaW50ZXJmYWNlVHlwZSk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYEV4cGVjdGVkIGludGVyZmFjZSB0eXBlLCBnb3QgJHtpbnRlcmZhY2VUeXBlfWAsIHR5cGVOb2RlKTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IG1lbWJlck5vZGUgb2YgY2xhc3NOb2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobWVtYmVyTm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5GSUVMRCAmJiBtZW1iZXJOb2RlIGluc3RhbmNlb2YgQVNURmllbGROb2RlKSB7XG5cdFx0XHRcdGNvbnN0IHRhcmdldDogTWFwPHN0cmluZywgRmllbGRTeW1ib2w+ID0gbWVtYmVyTm9kZS5tb2RpZmllcnMuc3RhdGljXG5cdFx0XHRcdFx0PyBjbGFzc1N5bWJvbC5zdGF0aWNGaWVsZFN5bWJvbHNcblx0XHRcdFx0XHQ6IGNsYXNzU3ltYm9sLmluc3RhbmNlRmllbGRTeW1ib2xzO1xuXG5cdFx0XHRcdGNvbnN0IGZpZWxkU3ltYm9sID0gbmV3IEZpZWxkU3ltYm9sKFxuXHRcdFx0XHRcdG1lbWJlck5vZGUsXG5cdFx0XHRcdFx0bWVtYmVyTm9kZS5maWVsZFR5cGVcblx0XHRcdFx0XHRcdD8gdGhpcy53cmFwVHlwZShtZW1iZXJOb2RlLmZpZWxkVHlwZSwgY2xhc3NTY29wZSlcblx0XHRcdFx0XHRcdDogVHlwZXMuTUlYRURcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRmaWVsZFN5bWJvbC5vd25lciA9IGNsYXNzU3ltYm9sO1xuXG5cdFx0XHRcdHRhcmdldC5zZXQoZmllbGRTeW1ib2wubmFtZSwgZmllbGRTeW1ib2wpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoKG1lbWJlck5vZGUudHlwZSA9PT0gQVNUTm9kZVR5cGUuTUVUSE9EIHx8IG1lbWJlck5vZGUudHlwZSA9PT0gQVNUTm9kZVR5cGUuQ09OU1RSVUNUT1IpXG5cdFx0XHRcdCYmIG1lbWJlck5vZGUgaW5zdGFuY2VvZiBBU1RNZXRob2ROb2RlKSB7XG5cblx0XHRcdFx0Y29uc3QgbWV0aG9kU2NvcGUgPSBuZXcgVHlwZVNjb3BlKGNsYXNzU2NvcGUpO1xuXHRcdFx0XHRjb25zdCBtZXRob2RTeW1ib2wgPSBuZXcgTWV0aG9kU3ltYm9sKG1lbWJlck5vZGUpO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC5vd25lciA9IGNsYXNzU3ltYm9sO1xuXG5cdFx0XHRcdG1lbWJlck5vZGUudHlwZVBhcmFtZXRlcnMuZm9yRWFjaChuYW1lID0+IHtcblx0XHRcdFx0XHRtZXRob2RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMucHVzaChuZXcgVHlwZVBhcmFtZXRlclN5bWJvbChuYW1lKSk7XG5cdFx0XHRcdFx0bWV0aG9kU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcobmFtZSwgbmV3IFR5cGVWYXJpYWJsZShuYW1lKSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzID0gbWVtYmVyTm9kZVxuXHRcdFx0XHRcdC5wYXJhbWV0ZXJzXG5cdFx0XHRcdFx0Lm1hcChwYXJhbWV0ZXJOb2RlID0+IHRoaXMucGFyYW1ldGVyTm9kZVRvU3ltYm9sKHBhcmFtZXRlck5vZGUsIG1ldGhvZFNjb3BlKSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnJldHVyblR5cGUgPSBtZW1iZXJOb2RlLnJldHVyblR5cGVcblx0XHRcdFx0XHQ/IHRoaXMud3JhcFR5cGUobWVtYmVyTm9kZS5yZXR1cm5UeXBlLCBtZXRob2RTY29wZSlcblx0XHRcdFx0XHQ6IFR5cGVzLlZPSUQ7XG5cblx0XHRcdFx0aWYgKG1lbWJlck5vZGUudHlwZSA9PT0gQVNUTm9kZVR5cGUuQ09OU1RSVUNUT1IpIHtcblx0XHRcdFx0XHRjbGFzc1N5bWJvbC5jb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbCA9IG1ldGhvZFN5bWJvbDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zdCB0YXJnZXQgPSBtZXRob2RTeW1ib2wuaXNTdGF0aWNcblx0XHRcdFx0XHRcdD8gY2xhc3NTeW1ib2wuc3RhdGljTWV0aG9kU3ltYm9sc1xuXHRcdFx0XHRcdFx0OiBjbGFzc1N5bWJvbC5pbnN0YW5jZU1ldGhvZFN5bWJvbHM7XG5cblx0XHRcdFx0XHR0YXJnZXQuc2V0KG1lbWJlck5vZGUubmFtZSwgbWV0aG9kU3ltYm9sKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVnaXN0ZXJJbnRlcmZhY2VTeW1ib2woaW50ZXJmYWNlTm9kZTogQVNUSW50ZXJmYWNlTm9kZSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmhhc1N5bWJvbChpbnRlcmZhY2VOb2RlLm5hbWUpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW50ZXJmYWNlU2NvcGUgPSBuZXcgVHlwZVNjb3BlKCk7XG5cdFx0Y29uc3QgaW50ZXJmYWNlU3ltYm9sID0gbmV3IEludGVyZmFjZVN5bWJvbChpbnRlcmZhY2VOb2RlKTtcblxuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuYWRkSW50ZXJmYWNlU3ltYm9sKGludGVyZmFjZVN5bWJvbCk7XG5cblx0XHRpbnRlcmZhY2VOb2RlLnR5cGVQYXJhbWV0ZXJzLmZvckVhY2gobmFtZSA9PiB7XG5cdFx0XHRpbnRlcmZhY2VTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMucHVzaChuZXcgVHlwZVBhcmFtZXRlclN5bWJvbChuYW1lKSk7XG5cdFx0XHRpbnRlcmZhY2VTY29wZS5kZWZpbmVUeXBlQmluZGluZyhuYW1lLCBuZXcgVHlwZVZhcmlhYmxlKG5hbWUpKTtcblx0XHR9KTtcblxuXHRcdGZvciAoY29uc3QgaW50ZXJmYWNlTmFtZSBvZiBpbnRlcmZhY2VOb2RlLmV4dGVuZHNJbnRlcmZhY2VzKSB7XG5cdFx0XHRjb25zdCBpbnRlcmZhY2VTeW1ib2w6IEludGVyZmFjZVN5bWJvbCA9IHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0SW50ZXJhY2VTeW1ib2woaW50ZXJmYWNlTmFtZSk7XG5cblx0XHRcdGludGVyZmFjZVN5bWJvbC5leHRlbmRzSW50ZXJmYWNlcy5wdXNoKGludGVyZmFjZVN5bWJvbCk7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBtZW1iZXJOb2RlIG9mIGludGVyZmFjZU5vZGUuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChtZW1iZXJOb2RlLnR5cGUgPT09IEFTVE5vZGVUeXBlLkZJRUxEICYmIG1lbWJlck5vZGUgaW5zdGFuY2VvZiBBU1RGaWVsZE5vZGUpIHtcblx0XHRcdFx0Y29uc3QgZmllbGRTeW1ib2wgPSBuZXcgRmllbGRTeW1ib2woXG5cdFx0XHRcdFx0bWVtYmVyTm9kZSxcblx0XHRcdFx0XHRtZW1iZXJOb2RlLmZpZWxkVHlwZVxuXHRcdFx0XHRcdFx0PyB0aGlzLndyYXBUeXBlKG1lbWJlck5vZGUuZmllbGRUeXBlLCBpbnRlcmZhY2VTY29wZSlcblx0XHRcdFx0XHRcdDogVHlwZXMuTUlYRURcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRmaWVsZFN5bWJvbC5vd25lciA9IGludGVyZmFjZVN5bWJvbDtcblxuXHRcdFx0XHRpbnRlcmZhY2VTeW1ib2wuc3RhdGljRmllbGRTeW1ib2xzLnNldChmaWVsZFN5bWJvbC5uYW1lLCBmaWVsZFN5bWJvbCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICgobWVtYmVyTm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5NRVRIT0QpICYmIG1lbWJlck5vZGUgaW5zdGFuY2VvZiBBU1RNZXRob2ROb2RlKSB7XG5cblx0XHRcdFx0Y29uc3QgbWV0aG9kU2NvcGUgPSBuZXcgVHlwZVNjb3BlKGludGVyZmFjZVNjb3BlKTtcblx0XHRcdFx0Y29uc3QgbWV0aG9kU3ltYm9sID0gbmV3IE1ldGhvZFN5bWJvbChtZW1iZXJOb2RlKTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wub3duZXIgPSBpbnRlcmZhY2VTeW1ib2w7XG5cblx0XHRcdFx0bWVtYmVyTm9kZS50eXBlUGFyYW1ldGVycy5mb3JFYWNoKG5hbWUgPT4ge1xuXHRcdFx0XHRcdG1ldGhvZFN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5wdXNoKG5ldyBUeXBlUGFyYW1ldGVyU3ltYm9sKG5hbWUpKTtcblx0XHRcdFx0XHRtZXRob2RTY29wZS5kZWZpbmVUeXBlQmluZGluZyhuYW1lLCBuZXcgVHlwZVZhcmlhYmxlKG5hbWUpKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMgPSBtZW1iZXJOb2RlXG5cdFx0XHRcdFx0LnBhcmFtZXRlcnNcblx0XHRcdFx0XHQubWFwKHBhcmFtZXRlck5vZGUgPT4gdGhpcy5wYXJhbWV0ZXJOb2RlVG9TeW1ib2wocGFyYW1ldGVyTm9kZSwgbWV0aG9kU2NvcGUpKTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wucmV0dXJuVHlwZSA9IG1lbWJlck5vZGUucmV0dXJuVHlwZVxuXHRcdFx0XHRcdD8gdGhpcy53cmFwVHlwZShtZW1iZXJOb2RlLnJldHVyblR5cGUsIG1ldGhvZFNjb3BlKVxuXHRcdFx0XHRcdDogVHlwZXMuVk9JRDtcblxuXHRcdFx0XHRpbnRlcmZhY2VTeW1ib2wuaW5zdGFuY2VNZXRob2RTeW1ib2xzLnNldChtZW1iZXJOb2RlLm5hbWUsIG1ldGhvZFN5bWJvbCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSB0eXBlRXJyb3IobWVzc2FnZTogc3RyaW5nLCBub2RlOiBBU1ROb2RlIHwgbnVsbCA9IG51bGwpOiBuZXZlciB7XG5cdFx0dGhyb3dUeXBlRXJyb3IobWVzc2FnZSwgbm9kZT8uc3Bhbik7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge0FTVEltcG9ydE5vZGUsIEFTVE5vZGUsIEFTVE5vZGVUeXBlfSBmcm9tIFwiLi4vYXN0XCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5pbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4uL3BhcnNlci9wYXJzZXJcIjtcbmltcG9ydCB7RW52aXJvbm1lbnR9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQgdHlwZSB7QWJzdHJhY3RGaWxlTG9hZGVyfSBmcm9tIFwiLi4vbG9hZGVyc1wiO1xuaW1wb3J0IHt0aHJvd1J1bnRpbWVFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuXG5leHBvcnQgY2xhc3MgRGVwZW5kZW5jeSB7XG5cdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSA9IG5ldyBPYmplY3RSZWdpc3RyeSgpO1xuXHRuYW1lczogc3RyaW5nW107XG5cdHVybDogc3RyaW5nO1xuXHRhc3Q6IEFTVE5vZGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lczogc3RyaW5nW10sIHVybDogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYW1lcyA9IG5hbWVzO1xuXHRcdHRoaXMudXJsID0gdXJsO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBEZXBlbmRlbmN5TG9hZGVyIHtcblx0ZW52aXJvbm1lbnQ6IEVudmlyb25tZW50O1xuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cdGZpbGVMb2FkZXI6IEFic3RyYWN0RmlsZUxvYWRlcjtcblxuXHRjb25zdHJ1Y3RvcihlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZmlsZUxvYWRlcjogQWJzdHJhY3RGaWxlTG9hZGVyKSB7XG5cdFx0dGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkgPSBvYmplY3RSZWdpc3RyeTtcblx0XHR0aGlzLmZpbGVMb2FkZXIgPSBmaWxlTG9hZGVyO1xuXHR9XG5cblx0YXN5bmMgcGFyc2VEZXBlbmRlbmN5KGRlcGVuZGVuY3k6IERlcGVuZGVuY3kpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gYXdhaXQgdGhpcy5wYXJzZUZpbGUoZGVwZW5kZW5jeS51cmwpXG5cdFx0ICAgICAgICAgICAgICAgICAudGhlbihhc3QgPT4gZGVwZW5kZW5jeS5hc3QgPSBhc3QpXG5cdFx0ICAgICAgICAgICAgICAgICAudGhlbihhc3QgPT4gZGVwZW5kZW5jeS5vYmplY3RSZWdpc3RyeS5jb2xsZWN0QWxsKGFzdCkpO1xuXHR9XG5cblx0YXN5bmMgY29sbGVjdERlcGVuZGVuY2llcyhkZXBlbmRlbmN5OiBEZXBlbmRlbmN5LCBkZXBlbmRlbmNpZXM6IE1hcDxzdHJpbmcsIERlcGVuZGVuY3k+KTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIGF3YWl0IHRoaXMuY29sbGVjdFByb2dyYW1EZXBlbmRlbmNpZXMoZGVwZW5kZW5jeS5hc3QpXG5cdFx0ICAgICAgICAgICAgICAgICAudGhlbihjbGFzc0RlcGVuZGVuY2llcyA9PiB7XG5cdFx0XHQgICAgICAgICAgICAgICAgIGNsYXNzRGVwZW5kZW5jaWVzLmZvckVhY2goY2xhc3NEZXBlbmRlbmN5ID0+IHtcblx0XHRcdFx0ICAgICAgICAgICAgICAgICBpZiAoZGVwZW5kZW5jaWVzLmhhcyhjbGFzc0RlcGVuZGVuY3kudXJsKSkge1xuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXHRcdFx0XHQgICAgICAgICAgICAgICAgIH1cblx0XHRcdFx0ICAgICAgICAgICAgICAgICBkZXBlbmRlbmNpZXMuc2V0KGNsYXNzRGVwZW5kZW5jeS51cmwsIGNsYXNzRGVwZW5kZW5jeSk7XG5cdFx0XHQgICAgICAgICAgICAgICAgIH0pO1xuXHRcdCAgICAgICAgICAgICAgICAgfSk7XG5cdH1cblxuXHRhc3luYyBjb2xsZWN0UHJvZ3JhbURlcGVuZGVuY2llcyhhc3Q6IEFTVE5vZGUgfCBudWxsKTogUHJvbWlzZTxNYXA8c3RyaW5nLCBEZXBlbmRlbmN5Pj4ge1xuXHRcdGlmIChhc3QgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBuZXcgTWFwKCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZGVmYXVsdERlcGVuZGVuY2llcyA9IHRoaXMuZGVmYXVsdERlcGVuZGVuY2llcygpO1xuXHRcdGZvciAoY29uc3QgZGVwZW5kZW5jeSBvZiBkZWZhdWx0RGVwZW5kZW5jaWVzLnZhbHVlcygpKSB7XG5cdFx0XHRhd2FpdCB0aGlzLnBhcnNlRGVwZW5kZW5jeShkZXBlbmRlbmN5KTtcblx0XHR9XG5cblx0XHRjb25zdCBkZXBlbmRlbmNpZXMgPSB0aGlzLmNvbGxlY3RDbGFzc0RlcGVuZGVuY2llcyhhc3QpO1xuXHRcdGZvciAoY29uc3QgZGVwZW5kZW5jeSBvZiBkZXBlbmRlbmNpZXMudmFsdWVzKCkpIHtcblx0XHRcdGF3YWl0IHRoaXMucGFyc2VEZXBlbmRlbmN5KGRlcGVuZGVuY3kpO1xuXHRcdFx0YXdhaXQgdGhpcy5jb2xsZWN0RGVwZW5kZW5jaWVzKGRlcGVuZGVuY3ksIGRlcGVuZGVuY2llcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBNYXAoWy4uLmRlZmF1bHREZXBlbmRlbmNpZXMsIC4uLmRlcGVuZGVuY2llc10pO1xuXHR9XG5cblx0ZGVmYXVsdERlcGVuZGVuY2llcygpOiBNYXA8c3RyaW5nLCBEZXBlbmRlbmN5PiB7XG5cdFx0Y29uc3QgZGVwZW5kZW5jaWVzID0gW1xuXHRcdFx0bmV3IERlcGVuZGVuY3koWydJdGVyYXRvcicsICdJdGVyYWJsZSddLCAnL2xpYnJhcnkvY29udHJhY3RzLmx5cmEnKVxuXHRcdF07XG5cblx0XHRjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG5cdFx0Zm9yIChjb25zdCBkZXBlbmRlbmN5IG9mIGRlcGVuZGVuY2llcykge1xuXHRcdFx0bWFwLnNldChkZXBlbmRlbmN5LnVybCwgZGVwZW5kZW5jeSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1hcDtcblx0fVxuXG5cdGNvbGxlY3RDbGFzc0RlcGVuZGVuY2llcyhhc3Q6IEFTVE5vZGUpOiBNYXA8c3RyaW5nLCBEZXBlbmRlbmN5PiB7XG5cdFx0Y29uc3QgY2xhc3NEZXBlbmRlbmNpZXMgPSBuZXcgTWFwKCk7XG5cblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgYXN0LmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5JTVBPUlQpIHtcblx0XHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RJbXBvcnROb2RlKSB7XG5cdFx0XHRcdFx0aWYgKG5vZGUuZnJvbSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChjbGFzc0RlcGVuZGVuY2llcy5oYXMobm9kZS5mcm9tKSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNsYXNzRGVwZW5kZW5jaWVzLnNldChub2RlLmZyb20sIG5ldyBEZXBlbmRlbmN5KG5vZGUubmFtZXMsIG5vZGUuZnJvbSkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGltcG9ydCBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlPy5zcGFuKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc0RlcGVuZGVuY2llcztcblx0fVxuXG5cdHBhcnNlRmlsZSh1cmw6IHN0cmluZyk6IFByb21pc2U8QVNUTm9kZT4ge1xuXHRcdHJldHVybiB0aGlzLmZpbGVMb2FkZXJcblx0XHQgICAgICAgICAgIC5sb2FkKHVybClcblx0XHQgICAgICAgICAgIC50aGVuKGNvZGUgPT4gdGhpcy5wYXJzZXJTb3VyY2UobmV3IFNvdXJjZShjb2RlLCB1cmwpKSk7XG5cdH1cblxuXHRwYXJzZXJTb3VyY2Uoc291cmNlOiBTb3VyY2UpOiBBU1ROb2RlIHtcblx0XHRyZXR1cm4gbmV3IFBhcnNlcihzb3VyY2UpLnBhcnNlKCk7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtEZXBlbmRlbmN5TG9hZGVyfSBmcm9tIFwiLi9kZXBlbmRlbmNpZXNcIjtcbmltcG9ydCB7QVNUSW1wb3J0Tm9kZSwgQVNUTm9kZX0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHtOYXRpdmVDbGFzc2VzfSBmcm9tIFwiLi4vLi4vbGlicmFyeS9uYXRpdmVfY2xhc3Nlc1wiO1xuaW1wb3J0IHtDbGFzc0RlZmluaXRpb24sIEVudmlyb25tZW50LCBJbnRlcmZhY2VEZWZpbml0aW9ufSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5pbXBvcnQgdHlwZSB7QWJzdHJhY3RGaWxlTG9hZGVyfSBmcm9tIFwiLi4vbG9hZGVyc1wiO1xuaW1wb3J0IHR5cGUge05hdGl2ZUNsYXNzfSBmcm9tIFwiLi4vLi4vbGlicmFyeS9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7dGhyb3dEZXBlbmRlbmN5RXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcblxuY29uc3QgbmF0aXZlQ2xhc3NlcyA9IG5ldyBOYXRpdmVDbGFzc2VzKCk7XG5cbmV4cG9ydCBjbGFzcyBMaW5rZXIge1xuXHRlbnZpcm9ubWVudDogRW52aXJvbm1lbnQ7XG5cdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeTtcblx0ZGVwZW5kZW5jeUxvYWRlcjogRGVwZW5kZW5jeUxvYWRlcjtcblxuXHRjb25zdHJ1Y3RvcihlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZmlsZUxvYWRlcjogQWJzdHJhY3RGaWxlTG9hZGVyKSB7XG5cdFx0dGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkgPSBvYmplY3RSZWdpc3RyeTtcblx0XHR0aGlzLmRlcGVuZGVuY3lMb2FkZXIgPSBuZXcgRGVwZW5kZW5jeUxvYWRlcihlbnZpcm9ubWVudCwgb2JqZWN0UmVnaXN0cnksIGZpbGVMb2FkZXIpO1xuXHR9XG5cblx0bGlua1NvdXJjZXMoYXN0OiBBU1ROb2RlKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHRoaXMuZGVwZW5kZW5jeUxvYWRlclxuXHRcdCAgICAgICAgICAgLmNvbGxlY3RQcm9ncmFtRGVwZW5kZW5jaWVzKGFzdClcblx0XHQgICAgICAgICAgIC50aGVuKGRlcGVuZGVuY2llcyA9PiB7XG5cdFx0XHQgICAgICAgICAgIGZvciAoY29uc3QgZGVwZW5kZW5jeSBvZiBkZXBlbmRlbmNpZXMudmFsdWVzKCkpIHtcblx0XHRcdFx0ICAgICAgICAgICBjb25zdCBvYmplY3REZWZpbml0aW9ucyA9IGRlcGVuZGVuY3kub2JqZWN0UmVnaXN0cnlcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmV0Y2hBbGxPYmplY3REZWZpbml0aW9ucygpXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlcygpO1xuXHRcdFx0XHQgICAgICAgICAgIGZvciAobGV0IG9iamVjdERlZiBvZiBvYmplY3REZWZpbml0aW9ucykge1xuXHRcdFx0XHRcdCAgICAgICAgICAgaWYgKG9iamVjdERlZiBpbnN0YW5jZW9mIEludGVyZmFjZURlZmluaXRpb24pIHtcblx0XHRcdFx0XHRcdCAgICAgICAgICAgdGhpcy5vYmplY3RSZWdpc3RyeS5pbnRlcmZhY2VzLnNldChvYmplY3REZWYubmFtZSwgb2JqZWN0RGVmKTtcblx0XHRcdFx0XHQgICAgICAgICAgIH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgIHRoaXMub2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5zZXQob2JqZWN0RGVmLm5hbWUsIG9iamVjdERlZik7XG5cdFx0XHRcdFx0ICAgICAgICAgICB9XG5cdFx0XHRcdFx0ICAgICAgICAgICB0aGlzLmVudmlyb25tZW50LmRlZmluZShvYmplY3REZWYubmFtZSwgb2JqZWN0RGVmKTtcblx0XHRcdFx0ICAgICAgICAgICB9XG5cdFx0XHQgICAgICAgICAgIH1cblx0XHQgICAgICAgICAgIH0pXG5cdFx0ICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLmxvYWROYXRpdmVDbGFzc2VzKGFzdCkpXG5cdH1cblxuXHRsb2FkTmF0aXZlQ2xhc3Nlcyhhc3Q6IEFTVE5vZGUpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgYXN0LmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEltcG9ydE5vZGUpIHtcblx0XHRcdFx0aWYgKG5vZGUuZnJvbSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdGNvbnN0IGNsYXNzTmFtZSA9IG5vZGUubmFtZXNbMF07XG5cdFx0XHRcdFx0aWYgKCFjbGFzc05hbWUpIHtcblx0XHRcdFx0XHRcdHRocm93RGVwZW5kZW5jeUVycm9yKGBJbnZhbGlkIGltcG9ydCBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlPy5zcGFuKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc3QgbmF0aXZlQ2xhc3M6IE5hdGl2ZUNsYXNzIHwgbnVsbCA9IG5hdGl2ZUNsYXNzZXMucmVnaXN0cnkuZ2V0KGNsYXNzTmFtZSkgfHwgbnVsbDtcblx0XHRcdFx0XHRpZiAoIW5hdGl2ZUNsYXNzKSB7XG5cdFx0XHRcdFx0XHR0aHJvd0RlcGVuZGVuY3lFcnJvcihgVW5rbm93biBuYXRpdmUgY2xhc3MgJHtjbGFzc05hbWV9YCwgbm9kZT8uc3Bhbik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnN0IGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24gPSBuYXRpdmVDbGFzcy5nZXRDbGFzc0RlZmluaXRpb24oKTtcblx0XHRcdFx0XHRpZiAodGhpcy5vYmplY3RSZWdpc3RyeS5jbGFzc2VzLmhhcyhjbGFzc05hbWUpKSB7XG5cdFx0XHRcdFx0XHR0aHJvd0RlcGVuZGVuY3lFcnJvcihgQ291bGQgbm90IHJlc29sdmUgY2xhc3MgJHtjbGFzc05hbWV9LmAsIG5vZGU/LnNwYW4pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuc2V0KGNsYXNzTmFtZSwgY2xhc3NEZWYpO1xuXHRcdFx0XHRcdHRoaXMuZW52aXJvbm1lbnQuZGVmaW5lKGNsYXNzTmFtZSwgY2xhc3NEZWYpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLAogICAgImltcG9ydCB7QVNUQW5ub3RhdGlvbk5vZGUsIEFTVENsYXNzTm9kZSwgQVNUTWV0aG9kTm9kZSwgQVNUTm9kZX0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHtjYWxsSW5zdGFuY2VNZXRob2QsIGV2YWxBbm5vdGF0aW9uUHJvcGVydGllc30gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX3J1bnRpbWVcIjtcbmltcG9ydCB7Q2xhc3NEZWZpbml0aW9uLCB0eXBlIEVudmlyb25tZW50LCBJbnN0YW5jZX0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB0eXBlIHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5cbmV4cG9ydCBjbGFzcyBUZXN0U3VpdGVzIHtcblx0ZW52aXJvbm1lbnQ6IEVudmlyb25tZW50O1xuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cblx0Y29uc3RydWN0b3IoZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpIHtcblx0XHR0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG5cdFx0dGhpcy5vYmplY3RSZWdpc3RyeSA9IG9iamVjdFJlZ2lzdHJ5O1xuXHR9XG5cblx0cnVuKGFzdDogQVNUTm9kZSk6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUQ2xhc3NOb2RlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGDwn6eqIFJ1bm5pbmcgVGVzdCBDYXNlcyBmb3IgJHtub2RlLm5hbWV9IC4uLmApO1xuXHRcdFx0XHR0aGlzLnJ1blRlc3RDYXNlcyhub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJ1blRlc3RDYXNlcyhjbGFzc05vZGU6IEFTVENsYXNzTm9kZSk6IHZvaWQge1xuXHRcdGZvciAoY29uc3QgbWVtYmVyIG9mIGNsYXNzTm9kZS5jaGlsZHJlbikge1xuXHRcdFx0aWYgKG1lbWJlciBpbnN0YW5jZW9mIEFTVE1ldGhvZE5vZGUpIHtcblx0XHRcdFx0Y29uc3QgYW5ub3RhdGlvbiA9IG1lbWJlci5hbm5vdGF0aW9ucz8uZmluZChhID0+IGEubmFtZSA9PT0gJ3Rlc3QnKTtcblx0XHRcdFx0aWYgKCFhbm5vdGF0aW9uKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5ydW5UZXN0Q2FzZShjbGFzc05vZGUsIG1lbWJlciwgYW5ub3RhdGlvbik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBydW5UZXN0Q2FzZShjbGFzc05vZGU6IEFTVENsYXNzTm9kZSwgbWV0aG9kTm9kZTogQVNUTWV0aG9kTm9kZSwgYW5ub3RhdGlvbjogQVNUQW5ub3RhdGlvbk5vZGUpOiB2b2lkIHtcblx0XHRjb25zdCBpbnN0YW5jZTogSW5zdGFuY2UgPSBDbGFzc0RlZmluaXRpb24uZnJvbUFTVChjbGFzc05vZGUpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnN0cnVjdE5ld0luc3RhbmNlV2l0aG91dEFyZ3VtZW50cyhcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0UmVnaXN0cnksXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVudmlyb25tZW50XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuXHRcdGNvbnN0IHByb3BlcnRpZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IGV2YWxBbm5vdGF0aW9uUHJvcGVydGllcyhhbm5vdGF0aW9uKTtcblx0XHRjb25zdCB0aXRsZTogc3RyaW5nID0gcHJvcGVydGllcy50aXRsZSA/PyBgJHtjbGFzc05vZGUubmFtZX0uJHttZXRob2ROb2RlLm5hbWV9YDtcblxuXHRcdGxldCBlcnJvck1lc3NhZ2UgPSBudWxsO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGNhbGxJbnN0YW5jZU1ldGhvZChpbnN0YW5jZSwgbWV0aG9kTm9kZSwgW10sIHRoaXMub2JqZWN0UmVnaXN0cnksIHRoaXMuZW52aXJvbm1lbnQpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRlcnJvck1lc3NhZ2UgPSBlcnJvcjtcblx0XHR9XG5cblx0XHRpZiAoZXJyb3JNZXNzYWdlKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGAg4p2MICR7dGl0bGV9LCAke2Vycm9yTWVzc2FnZX1gKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coYCDinIUgJHt0aXRsZX1gKTtcblx0XHR9XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtBU1ROb2RlfSBmcm9tICcuLi9hc3QudHMnO1xuaW1wb3J0IHtFbnZpcm9ubWVudH0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtldmFsTm9kZSwgcmVnaXN0ZXJOYXRpdmVDbGFzc2VzLCByZWdpc3Rlck5hdGl2ZUZ1bmN0aW9uc30gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfcnVudGltZVwiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcblxuZXhwb3J0IGNsYXNzIEludGVycHJldGVyIHtcblx0ZW52aXJvbm1lbnQ6IEVudmlyb25tZW50O1xuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cblx0Y29uc3RydWN0b3IoZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpIHtcblx0XHR0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG5cdFx0dGhpcy5vYmplY3RSZWdpc3RyeSA9IG9iamVjdFJlZ2lzdHJ5O1xuXG5cdFx0cmVnaXN0ZXJOYXRpdmVDbGFzc2VzKG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCk7XG5cdFx0cmVnaXN0ZXJOYXRpdmVGdW5jdGlvbnMoZW52aXJvbm1lbnQpO1xuXHR9XG5cblx0cnVuKGFzdDogQVNUTm9kZSkge1xuXHRcdGV2YWxOb2RlKGFzdCwgdGhpcy5vYmplY3RSZWdpc3RyeSwgdGhpcy5lbnZpcm9ubWVudCk7XG5cdH1cbn1cbiIsCiAgICAiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0RmlsZUxvYWRlciB7XG5cdGFic3RyYWN0IGxvYWQodXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz47XG59XG5cbmV4cG9ydCBjbGFzcyBGZXRjaEZpbGVMb2FkZXIgZXh0ZW5kcyBBYnN0cmFjdEZpbGVMb2FkZXIge1xuXHRvdmVycmlkZSBsb2FkKHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gZmV0Y2godXJsKVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxuXHR9XG59XG4iLAogICAgImltcG9ydCB7U291cmNlfSBmcm9tIFwiLi9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuaW1wb3J0IHtFbnZpcm9ubWVudH0gZnJvbSBcIi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB7VHlwZUNoZWNrZXJ9IGZyb20gXCIuL3R5cGVzL3R5cGVjaGVja2VyXCI7XG5pbXBvcnQge0xpbmtlcn0gZnJvbSBcIi4vbGlua2VyL2xpbmtlclwiO1xuaW1wb3J0IHtUZXN0U3VpdGVzfSBmcm9tIFwiLi90ZXN0cy90ZXN0c3VpdGVzXCI7XG5pbXBvcnQge0ludGVycHJldGVyfSBmcm9tIFwiLi9pbnRlcnByZXRlci9pbnRlcnByZXRlclwiO1xuaW1wb3J0IHtGZXRjaEZpbGVMb2FkZXJ9IGZyb20gXCIuL2xvYWRlcnNcIjtcbmltcG9ydCB7QVNUTm9kZX0gZnJvbSBcIi4vYXN0XCI7XG5pbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4vcGFyc2VyL3BhcnNlclwiO1xuXG5leHBvcnQgY2xhc3MgTHlyYVNjcmlwdFByb2dyYW0ge1xuXHRwcml2YXRlIGdsb2JhbEVudmlyb25tZW50OiBFbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudCgpO1xuXHRwcml2YXRlIGdsb2JhbE9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSA9IG5ldyBPYmplY3RSZWdpc3RyeSgpO1xuXG5cdHByaXZhdGUgdHlwZUNoZWNrZXI6IFR5cGVDaGVja2VyID0gbmV3IFR5cGVDaGVja2VyKHRoaXMuZ2xvYmFsT2JqZWN0UmVnaXN0cnkpO1xuXG5cdHByaXZhdGUgbGlua2VyOiBMaW5rZXIgPSBuZXcgTGlua2VyKHRoaXMuZ2xvYmFsRW52aXJvbm1lbnQsIHRoaXMuZ2xvYmFsT2JqZWN0UmVnaXN0cnksIG5ldyBGZXRjaEZpbGVMb2FkZXIoKSk7XG5cblx0cHJpdmF0ZSBpbnRlcnByZXRlcjogSW50ZXJwcmV0ZXIgPSBuZXcgSW50ZXJwcmV0ZXIodGhpcy5nbG9iYWxFbnZpcm9ubWVudCwgdGhpcy5nbG9iYWxPYmplY3RSZWdpc3RyeSk7XG5cblx0cHJpdmF0ZSB0ZXN0U3VpdGU6IFRlc3RTdWl0ZXMgPSBuZXcgVGVzdFN1aXRlcyh0aGlzLmdsb2JhbEVudmlyb25tZW50LCB0aGlzLmdsb2JhbE9iamVjdFJlZ2lzdHJ5KTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBzdGFydFRpbWU6IG51bWJlciA9IDA7XG5cblx0Y29uc3RydWN0b3IoaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKSB7XG5cdFx0dGhpcy5pc0RlYnVnID0gaXNEZWJ1Zztcblx0fVxuXG5cdGdldEdsb2JhbE9iamVjdFJlZ2lzdHJ5KCk6IE9iamVjdFJlZ2lzdHJ5IHtcblx0XHRyZXR1cm4gdGhpcy5nbG9iYWxPYmplY3RSZWdpc3RyeTtcblx0fVxuXG5cblx0Z2V0R2xvYmFsRW52aXJvbm1lbnQoKTogRW52aXJvbm1lbnQge1xuXHRcdHJldHVybiB0aGlzLmdsb2JhbEVudmlyb25tZW50O1xuXHR9XG5cblx0YXN5bmMgZXhlY3V0ZShzb3VyY2U6IFNvdXJjZSk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiB0aGlzLnJ1blBpcGVsaW5lKHNvdXJjZSlcblx0XHQgICAgICAgICAgIC50aGVuKChhc3Q6IEFTVE5vZGUpID0+IHtcblx0XHRcdCAgICAgICAgICAgdGhpcy5kZWJ1Z01lYXN1cmVTdGFydFRpbWUoKTtcblx0XHRcdCAgICAgICAgICAgdGhpcy5pbnRlcnByZXRlci5ydW4oYXN0KTtcblx0XHRcdCAgICAgICAgICAgdGhpcy5kZWJ1Z01lYXN1cmVFbmRUaW1lKCdpbnRlcnByZXRlcicpO1xuXHRcdCAgICAgICAgICAgfSk7XG5cdH1cblxuXHRhc3luYyBleGVjdXRlVGVzdChzb3VyY2U6IFNvdXJjZSk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiB0aGlzLnJ1blBpcGVsaW5lKHNvdXJjZSlcblx0XHQgICAgICAgICAgIC50aGVuKChhc3Q6IEFTVE5vZGUpID0+IHtcblx0XHRcdCAgICAgICAgICAgdGhpcy5kZWJ1Z01lYXN1cmVTdGFydFRpbWUoKTtcblx0XHRcdCAgICAgICAgICAgdGhpcy50ZXN0U3VpdGUucnVuKGFzdCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlRW5kVGltZSgndGVzdCcpO1xuXHRcdCAgICAgICAgICAgfSk7XG5cdH1cblxuXHRkZWJ1Zyh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNEZWJ1Zykge1xuXHRcdFx0Y29uc29sZS5sb2codmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdGRlYnVnTWVhc3VyZVN0YXJ0VGltZSgpOiB2b2lkIHtcblx0XHR0aGlzLnN0YXJ0VGltZSA9IHRoaXMuZGVidWdUaW1lc3RhbXAoKTtcblx0fVxuXG5cdGRlYnVnTWVhc3VyZUVuZFRpbWUobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5kZWJ1ZyhtZXNzYWdlICsgJzogJyArICh0aGlzLmRlYnVnVGltZXN0YW1wKCkgLSB0aGlzLnN0YXJ0VGltZSkgKyAnbXMnKTtcblx0fVxuXG5cdGRlYnVnVGltZXN0YW1wKCk6IG51bWJlciB7XG5cdFx0aWYgKCF0aGlzLmlzRGVidWcpIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblx0XHRyZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG5cdH1cblxuXHRwcml2YXRlIGFzeW5jIHJ1blBpcGVsaW5lKHNvdXJjZTogU291cmNlKTogUHJvbWlzZTxBU1ROb2RlPiB7XG5cdFx0dGhpcy5kZWJ1Z01lYXN1cmVTdGFydFRpbWUoKVxuXHRcdGNvbnN0IGFzdDogQVNUTm9kZSA9IG5ldyBQYXJzZXIoc291cmNlKS5wYXJzZSgpO1xuXHRcdHRoaXMuZGVidWdNZWFzdXJlRW5kVGltZSgncGFyc2VyJylcblx0XHR0aGlzLmRlYnVnKGFzdCk7XG5cblx0XHRyZXR1cm4gdGhpcy5saW5rZXIubGlua1NvdXJjZXMoYXN0KVxuXHRcdCAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuXHRcdFx0ICAgICAgICAgICB0aGlzLnR5cGVDaGVja2VyLmNvbGxlY3RBbGxTeW1ib2xzRnJvbVJlZ2lzdHJ5KHRoaXMuZ2xvYmFsT2JqZWN0UmVnaXN0cnkpO1xuXHRcdCAgICAgICAgICAgfSlcblx0XHQgICAgICAgICAgIC50aGVuKCgpID0+IHtcblx0XHRcdCAgICAgICAgICAgdGhpcy5kZWJ1Z01lYXN1cmVTdGFydFRpbWUoKTtcblx0XHRcdCAgICAgICAgICAgdGhpcy50eXBlQ2hlY2tlci5jaGVjayhhc3QpO1xuXHRcdFx0ICAgICAgICAgICB0aGlzLmRlYnVnTWVhc3VyZUVuZFRpbWUoJ3R5cGVjaGVja2VyJyk7XG5cblx0XHRcdCAgICAgICAgICAgcmV0dXJuIGFzdDtcblx0XHQgICAgICAgICAgIH0pO1xuXHR9XG59XG4iLAogICAgImV4cG9ydCB0eXBlIEV2ZW50SGFuZGxlcjxUID0gYW55PiA9IChwYXlsb2FkOiBUKSA9PiB2b2lkO1xuXG5leHBvcnQgY2xhc3MgRXZlbnRQaXBlbGluZSB7XG5cdHByaXZhdGUgbGlzdGVuZXJzOiBNYXA8c3RyaW5nLCBTZXQ8RXZlbnRIYW5kbGVyPj4gPSBuZXcgTWFwPHN0cmluZywgU2V0PEV2ZW50SGFuZGxlcj4+KCk7XG5cblx0b248VCA9IGFueT4oZXZlbnQ6IHN0cmluZywgaGFuZGxlcjogRXZlbnRIYW5kbGVyPFQ+KTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLmxpc3RlbmVycy5oYXMoZXZlbnQpKSB7XG5cdFx0XHR0aGlzLmxpc3RlbmVycy5zZXQoZXZlbnQsIG5ldyBTZXQoKSk7XG5cdFx0fVxuXHRcdHRoaXMubGlzdGVuZXJzLmdldChldmVudCkhLmFkZChoYW5kbGVyKTtcblx0fVxuXG5cdG9mZjxUID0gYW55PihldmVudDogc3RyaW5nLCBoYW5kbGVyOiBFdmVudEhhbmRsZXI8VD4pOiB2b2lkIHtcblx0XHR0aGlzLmxpc3RlbmVycy5nZXQoZXZlbnQpXG5cdFx0ICAgID8uZGVsZXRlKGhhbmRsZXIpO1xuXHR9XG5cblx0ZW1pdDxUID0gYW55PihldmVudDogc3RyaW5nLCBwYXlsb2FkOiBUKTogdm9pZCB7XG5cdFx0dGhpcy5saXN0ZW5lcnMuZ2V0KGV2ZW50KVxuXHRcdCAgICA/LmZvckVhY2goKGhhbmRsZXI6IEV2ZW50SGFuZGxlcik6IHZvaWQgPT4gaGFuZGxlcihwYXlsb2FkKSk7XG5cdH1cbn1cbiIsCiAgICAiY29uc3QgRE9NX0VWRU5UOiBzdHJpbmcgPSAnZG9tOmV2ZW50JztcblxuZXhwb3J0IGNsYXNzIEV2ZW50SGFuZGxlclN0b3JlIHtcblx0cHJpdmF0ZSBldmVudEhhbmRsZXJzOiBXZWFrTWFwPEhUTUxFbGVtZW50LCBSZWNvcmQ8c3RyaW5nLCBGdW5jdGlvbj4+ID0gbmV3IFdlYWtNYXA8SFRNTEVsZW1lbnQsIFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uPj4oKTtcblxuXHRwdWJsaWMgYWRkRXZlbnRIYW5kbGVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwcm9wZXJ0eUtleTogc3RyaW5nLCBoYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xuXHRcdGNvbnN0IGV2ZW50SGFuZGxlcnM6IFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uPiA9IHRoaXMuZXZlbnRIYW5kbGVycy5nZXQoZWxlbWVudCkgPz8ge307XG5cblx0XHRldmVudEhhbmRsZXJzW3Byb3BlcnR5S2V5XSA9IGhhbmRsZXI7XG5cblx0XHR0aGlzLmV2ZW50SGFuZGxlcnMuc2V0KGVsZW1lbnQsIGV2ZW50SGFuZGxlcnMpO1xuXHR9XG5cblx0cHVibGljIHJlbW92ZUV2ZW50SGFuZGxlcihlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcGVydHlLZXk6IHN0cmluZyk6IEZ1bmN0aW9uIHwgbnVsbCB7XG5cdFx0Y29uc3QgZXZlbnRIYW5kbGVyczogUmVjb3JkPHN0cmluZywgRnVuY3Rpb24+ID0gdGhpcy5ldmVudEhhbmRsZXJzLmdldChlbGVtZW50KSA/PyB7fTtcblxuXHRcdGNvbnN0IGV2ZW50SGFuZGxlcjogRnVuY3Rpb24gfCB1bmRlZmluZWQgPSBldmVudEhhbmRsZXJzW3Byb3BlcnR5S2V5XTtcblx0XHRpZiAoZXZlbnRIYW5kbGVyKSB7XG5cdFx0XHRkZWxldGUgZXZlbnRIYW5kbGVyc1twcm9wZXJ0eUtleV07XG5cdFx0XHR0aGlzLmV2ZW50SGFuZGxlcnMuc2V0KGVsZW1lbnQsIGV2ZW50SGFuZGxlcnMpO1xuXHRcdFx0cmV0dXJuIGV2ZW50SGFuZGxlcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufVxuXG5cbmNvbnN0IGlzRXZlbnQ6IChwcm9wZXJ0eUtleTogc3RyaW5nKSA9PiBib29sZWFuID0gKHByb3BlcnR5S2V5OiBzdHJpbmcpOiBib29sZWFuID0+IHtcblx0cmV0dXJuIHByb3BlcnR5S2V5LnRvTG93ZXJDYXNlKClcblx0ICAgICAgICAgICAgICAgICAgLnN0YXJ0c1dpdGgoJ29uJyk7XG59XG5cbmV4cG9ydCBjb25zdCBFdmVudHMgPSB7XG5cdERPTV9FVkVOVCxcblx0aXNFdmVudCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50cztcbiIsCiAgICAiLy8vIDxyZWZlcmVuY2UgbGliPVwiZG9tXCIgLz5cblxuaW1wb3J0IHR5cGUge1ZOb2RlfSBmcm9tIFwiLi4vY29yZS92ZG9tL3Zkb21cIjtcbmltcG9ydCB7TGFtYmRhRnVuY3Rpb25DYWxsfSBmcm9tIFwiLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9ydW50aW1lXCI7XG5pbXBvcnQgRXZlbnRzIGZyb20gXCIuL2V2ZW50c1wiO1xuaW1wb3J0IHR5cGUge0FwcGxpY2F0aW9uUnVudGltZX0gZnJvbSBcIi4vcnVudGltZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRDcmVhdG9yIHtcblx0Y3JlYXRlKHZOb2RlOiBWTm9kZSB8IHN0cmluZyk6IE5vZGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudFBhdGNoZXIge1xuXHRwYXRjaChvbGRWTm9kZTogVk5vZGUgfCBzdHJpbmcgfCBudWxsLCBuZXdWTm9kZTogVk5vZGUgfCBzdHJpbmcpOiB2b2lkXG59XG5cbmV4cG9ydCBjbGFzcyBIVE1MRWxlbWVudENyZWF0b3IgaW1wbGVtZW50cyBFbGVtZW50Q3JlYXRvciB7XG5cdHByaXZhdGUgdGV4dEJ1ZmZlcjogc3RyaW5nW10gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJlYWRvbmx5IGFwcGxpY2F0aW9uUnVudGltZTogQXBwbGljYXRpb25SdW50aW1lXG5cdCkge1xuXHR9XG5cblx0cHVibGljIGNyZWF0ZSh2Tm9kZTogVk5vZGUgfCBzdHJpbmcpOiBOb2RlIHtcblxuXHRcdGlmICh0eXBlb2Ygdk5vZGUgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2Tm9kZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHZOb2RlLmlzQ29tcG9uZW50ICYmIHZOb2RlLmNvbXBvbmVudCA9PT0gbnVsbCkge1xuXHRcdFx0dk5vZGUuY29tcG9uZW50ID0gdGhpcy5hcHBsaWNhdGlvblJ1bnRpbWUuY3JlYXRlSW5zdGFuY2Uodk5vZGUudGFnKTtcblxuXHRcdFx0dk5vZGUuZG9tID0gdGhpcy5jcmVhdGUoXG5cdFx0XHRcdHRoaXMuYXBwbGljYXRpb25SdW50aW1lLmNhbGxNZXRob2Qodk5vZGUuY29tcG9uZW50LCAncmVuZGVyJywgW10pIGFzIFZOb2RlXG5cdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm4gdk5vZGUuZG9tO1xuXHRcdH1cblxuXHRcdGNvbnN0IGZsdXNoVGV4dEJ1ZmZlcjogKCkgPT4gdm9pZCA9ICgpOiB2b2lkID0+IHtcblx0XHRcdGNvbnN0IHRleHQ6IE5vZGUgfCBudWxsID0gdGhpcy5mbHVzaFRleHRCdWZmZXIoKTtcblx0XHRcdGlmICh0ZXh0KSB7XG5cdFx0XHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHZOb2RlLnRhZykgYXMgSFRNTEVsZW1lbnQ7XG5cdFx0dk5vZGUuZG9tID0gZWxlbWVudDtcblxuXHRcdGZvciAoY29uc3QgW3Byb3BlcnR5S2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModk5vZGUucHJvcHMpKSB7XG5cdFx0XHRpZiAoRXZlbnRzLmlzRXZlbnQocHJvcGVydHlLZXkpKSB7XG5cdFx0XHRcdHRoaXMuYXBwbGljYXRpb25SdW50aW1lLmFkZEV2ZW50SGFuZGxlcihlbGVtZW50LCBwcm9wZXJ0eUtleSwgdmFsdWUgYXMgTGFtYmRhRnVuY3Rpb25DYWxsKTtcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShwcm9wZXJ0eUtleSwgdmFsdWUgYXMgc3RyaW5nKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIHZOb2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHR0aGlzLnRleHRCdWZmZXIucHVzaChjaGlsZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlKGNoaWxkKSBhcyBIVE1MRWxlbWVudCk7XG5cdFx0XHR9XG5cblx0XHRcdGZsdXNoVGV4dEJ1ZmZlcigpO1xuXHRcdH1cblxuXHRcdGZsdXNoVGV4dEJ1ZmZlcigpO1xuXG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cblxuXHRwcml2YXRlIGZsdXNoVGV4dEJ1ZmZlcigpOiBOb2RlIHwgbnVsbCB7XG5cdFx0aWYgKHRoaXMudGV4dEJ1ZmZlci5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjb25zdCBlbGVtZW50OiBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy50ZXh0QnVmZmVyLmpvaW4oJycpKTtcblx0XHR0aGlzLnRleHRCdWZmZXIgPSBbXTtcblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgSFRNTEVsZW1lbnRQYXRjaGVyIGltcGxlbWVudHMgRWxlbWVudFBhdGNoZXIge1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IG1vdW50UG9pbnQ6IEhUTUxFbGVtZW50LFxuXHQgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGFwcGxpY2F0aW9uUnVudGltZTogQXBwbGljYXRpb25SdW50aW1lLFxuXHQgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRDcmVhdG9yOiBFbGVtZW50Q3JlYXRvciA9IG5ldyBIVE1MRWxlbWVudENyZWF0b3IoYXBwbGljYXRpb25SdW50aW1lKSkge1xuXHR9XG5cblx0cHVibGljIHBhdGNoKG9sZFZOb2RlOiBWTm9kZSB8IHN0cmluZyB8IG51bGwsIG5ld1ZOb2RlOiBWTm9kZSB8IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmIChvbGRWTm9kZSkge1xuXHRcdFx0dGhpcy5wYXRjaE5vZGUodGhpcy5tb3VudFBvaW50LCBvbGRWTm9kZSwgbmV3Vk5vZGUpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGVsZW1lbnQ6IE5vZGUgPSB0aGlzLmVsZW1lbnRDcmVhdG9yLmNyZWF0ZShuZXdWTm9kZSk7XG5cblx0XHR0aGlzLm1vdW50UG9pbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cblx0XHRpZiAodHlwZW9mIG5ld1ZOb2RlICE9PSAnc3RyaW5nJykge1xuXHRcdFx0bmV3Vk5vZGUuZG9tID0gZWxlbWVudDtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHBhdGNoTm9kZShwYXJlbnQ6IE5vZGUsIG9sZE5vZGU6IFZOb2RlIHwgc3RyaW5nLCBuZXdOb2RlOiBWTm9kZSB8IHN0cmluZyk6IHZvaWQge1xuXG5cdFx0aWYgKHR5cGVvZiBvbGROb2RlID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgbmV3Tm9kZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdGlmIChvbGROb2RlICE9PSBuZXdOb2RlKSB7XG5cdFx0XHRcdGNvbnN0IHRleHROb2RlOiBDaGlsZE5vZGUgfCBudWxsID0gcGFyZW50LmZpcnN0Q2hpbGQ7XG5cdFx0XHRcdGlmICh0ZXh0Tm9kZSkge1xuXHRcdFx0XHRcdHRleHROb2RlLnRleHRDb250ZW50ID0gbmV3Tm9kZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2Ygb2xkTm9kZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIG5ld05vZGUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRjb25zdCBuZXdFbGVtZW50OiBOb2RlID0gdGhpcy5lbGVtZW50Q3JlYXRvci5jcmVhdGUobmV3Tm9kZSk7XG5cdFx0XHRwYXJlbnQucmVwbGFjZUNoaWxkKG5ld0VsZW1lbnQsIHBhcmVudC5maXJzdENoaWxkISk7XG5cdFx0XHRpZiAodHlwZW9mIG5ld05vZGUgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdG5ld05vZGUuZG9tID0gbmV3RWxlbWVudDtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAob2xkTm9kZS50YWcgIT09IG5ld05vZGUudGFnKSB7XG5cdFx0XHRjb25zdCBuZXdFbGVtZW50OiBOb2RlID0gdGhpcy5lbGVtZW50Q3JlYXRvci5jcmVhdGUobmV3Tm9kZSk7XG5cdFx0XHRwYXJlbnQucmVwbGFjZUNoaWxkKG5ld0VsZW1lbnQsIG9sZE5vZGUuZG9tISk7XG5cdFx0XHRuZXdOb2RlLmRvbSA9IG5ld0VsZW1lbnQ7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgZG9tOiBOb2RlID0gb2xkTm9kZS5kb20hO1xuXHRcdG5ld05vZGUuZG9tID0gZG9tO1xuXG5cdFx0dGhpcy51cGRhdGVQcm9wZXJ0aWVzKGRvbSBhcyBIVE1MRWxlbWVudCwgb2xkTm9kZS5wcm9wcywgbmV3Tm9kZS5wcm9wcyk7XG5cdFx0dGhpcy5wYXRjaENoaWxkcmVuKGRvbSwgb2xkTm9kZS5jaGlsZHJlbiwgbmV3Tm9kZS5jaGlsZHJlbik7XG5cdH1cblxuXHRwcml2YXRlIHVwZGF0ZVByb3BlcnRpZXMoZWxlbWVudDogSFRNTEVsZW1lbnQsIG9sZFByb3BlcnRpZXM6IFJlY29yZDxzdHJpbmcsIGFueT4sIG5ld1Byb3BlcnRpZXM6IFJlY29yZDxzdHJpbmcsIGFueT4pOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IHByb3BlcnR5S2V5IGluIG9sZFByb3BlcnRpZXMpIHtcblx0XHRcdGlmICghKHByb3BlcnR5S2V5IGluIG5ld1Byb3BlcnRpZXMpKSB7XG5cdFx0XHRcdGlmIChFdmVudHMuaXNFdmVudChwcm9wZXJ0eUtleSkpIHtcblx0XHRcdFx0XHR0aGlzLmFwcGxpY2F0aW9uUnVudGltZS5yZW1vdmVFdmVudEhhbmRsZXIoZWxlbWVudCwgcHJvcGVydHlLZXkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHByb3BlcnR5S2V5KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgcHJvcGVydHlLZXkgaW4gbmV3UHJvcGVydGllcykge1xuXHRcdFx0Y29uc3Qgb2xkVmFsdWU6IGFueSA9IG9sZFByb3BlcnRpZXNbcHJvcGVydHlLZXldO1xuXHRcdFx0Y29uc3QgbmV3VmFsdWU6IGFueSA9IG5ld1Byb3BlcnRpZXNbcHJvcGVydHlLZXldO1xuXG5cdFx0XHRpZiAob2xkVmFsdWUgPT09IG5ld1ZhbHVlKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoRXZlbnRzLmlzRXZlbnQocHJvcGVydHlLZXkpKSB7XG5cdFx0XHRcdGlmIChvbGRWYWx1ZSkge1xuXHRcdFx0XHRcdHRoaXMuYXBwbGljYXRpb25SdW50aW1lLnJlbW92ZUV2ZW50SGFuZGxlcihlbGVtZW50LCBwcm9wZXJ0eUtleSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5hcHBsaWNhdGlvblJ1bnRpbWUuYWRkRXZlbnRIYW5kbGVyKGVsZW1lbnQsIHByb3BlcnR5S2V5LCBuZXdWYWx1ZSBhcyBMYW1iZGFGdW5jdGlvbkNhbGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcGVydHlLZXksIG5ld1ZhbHVlIGFzIHN0cmluZyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBwYXRjaENoaWxkcmVuKHBhcmVudDogTm9kZSwgb2xkQ2hpbGRyZW46IChWTm9kZSB8IHN0cmluZylbXSwgbmV3Q2hpbGRyZW46IChWTm9kZSB8IHN0cmluZylbXSk6IHZvaWQge1xuXHRcdGNvbnN0IG1heDogbnVtYmVyID0gTWF0aC5tYXgob2xkQ2hpbGRyZW4ubGVuZ3RoLCBuZXdDaGlsZHJlbi5sZW5ndGgpO1xuXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG1heDsgaSsrKSB7XG5cblx0XHRcdGNvbnN0IG9sZENoaWxkOiBWTm9kZSB8IHN0cmluZyB8IHVuZGVmaW5lZCA9IG9sZENoaWxkcmVuW2ldO1xuXHRcdFx0Y29uc3QgbmV3Q2hpbGQ6IFZOb2RlIHwgc3RyaW5nIHwgdW5kZWZpbmVkID0gbmV3Q2hpbGRyZW5baV07XG5cblx0XHRcdGlmICghb2xkQ2hpbGQgJiYgbmV3Q2hpbGQpIHtcblx0XHRcdFx0cGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudENyZWF0b3IuY3JlYXRlKG5ld0NoaWxkKSk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwYXJlbnRDaGlsZE5vZGU6IENoaWxkTm9kZSB8IHVuZGVmaW5lZCA9IHBhcmVudC5jaGlsZE5vZGVzW2ldO1xuXHRcdFx0aWYgKHBhcmVudENoaWxkTm9kZSkge1xuXHRcdFx0XHRpZiAob2xkQ2hpbGQgJiYgIW5ld0NoaWxkKSB7XG5cdFx0XHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudENoaWxkTm9kZSk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAobmV3Q2hpbGQgJiYgb2xkQ2hpbGQpIHtcblx0XHRcdFx0XHR0aGlzLnBhdGNoTm9kZShwYXJlbnRDaGlsZE5vZGUucGFyZW50Tm9kZSEsIG9sZENoaWxkLCBuZXdDaGlsZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtMeXJhU2NyaXB0UHJvZ3JhbX0gZnJvbSBcIi4uL2NvcmUvcHJvZ3JhbVwiO1xuaW1wb3J0IHtmZXRjaFNvdXJjZX0gZnJvbSBcIi4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcbmltcG9ydCB7Q2xhc3NEZWZpbml0aW9uLCBFbnZpcm9ubWVudCwgSW5zdGFuY2V9IGZyb20gXCIuLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge2NhbGxJbnN0YW5jZU1ldGhvZCwgTGFtYmRhRnVuY3Rpb25DYWxsfSBmcm9tIFwiLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9ydW50aW1lXCI7XG5pbXBvcnQge0V2ZW50VHlwZX0gZnJvbSBcIi4uL2xpYnJhcnkvY2xhc3Nlcy9ldmVudFwiO1xuaW1wb3J0IHtFdmVudFBpcGVsaW5lfSBmcm9tIFwiLi4vY29yZS9ldmVudC9waXBlbGluZVwiO1xuaW1wb3J0IHtHUkFNTUFSfSBmcm9tIFwiLi4vY29yZS9ncmFtbWFyLnRzXCI7XG5cbmNvbnN0IGx5cmFFdmVudENsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24gPSBuZXcgRXZlbnRUeXBlKCkuZ2V0Q2xhc3NEZWZpbml0aW9uKCk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW5naW5lIHtcblx0ZXhlY3V0ZUVudHJ5RmlsZSh1cmw6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuXG5cdGNyZWF0ZUluc3RhbmNlKGNsYXNzTmFtZTogc3RyaW5nKTogSW5zdGFuY2U7XG5cblx0Y2FsbFJvb3RJbnN0YW5jZU1ldGhvZChtZXRob2ROYW1lOiBzdHJpbmcsIGFyZ3M6IGFueVtdKTogYW55O1xuXG5cdGNhbGxJbnN0YW5jZU1ldGhvZChpbnN0YW5jZTogSW5zdGFuY2UsIG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogQXJyYXk8YW55Pik6IGFueTtcblxuXHRjcmVhdGVFdmVudChldmVudDogRXZlbnQpOiBJbnN0YW5jZTtcblxuXHRjcmVhdGVFdmVudEhhbmRsZXIoaGFuZGxlcjogTGFtYmRhRnVuY3Rpb25DYWxsLCBldmVudE5hbWU6IHN0cmluZyk6IChldmVudDogRXZlbnQpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBXZWJMeXJhU2NyaXB0IGltcGxlbWVudHMgRW5naW5lIHtcblx0cHJpdmF0ZSByZWFkb25seSBwcm9ncmFtOiBMeXJhU2NyaXB0UHJvZ3JhbTtcblx0cHJpdmF0ZSBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkgPSBuZXcgT2JqZWN0UmVnaXN0cnkoKTtcblx0cHJpdmF0ZSBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQoKTtcblx0cHJpdmF0ZSByb290SW5zdGFuY2U6IEluc3RhbmNlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZWFkb25seSBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lID0gbmV3IEV2ZW50UGlwZWxpbmUoKSxcblx0XHRpc0RlYnVnOiBib29sZWFuID0gZmFsc2Vcblx0KSB7XG5cdFx0dGhpcy5wcm9ncmFtID0gbmV3IEx5cmFTY3JpcHRQcm9ncmFtKGlzRGVidWcpO1xuXHR9XG5cblx0cHVibGljIGNyZWF0ZUluc3RhbmNlKGNsYXNzTmFtZTogc3RyaW5nKTogSW5zdGFuY2Uge1xuXHRcdHJldHVybiB0aGlzLmdldENsYXNzRGVmaW5pdGlvbihjbGFzc05hbWUpXG5cdFx0ICAgICAgICAgICAuY29uc3RydWN0TmV3SW5zdGFuY2VXaXRob3V0QXJndW1lbnRzKHRoaXMub2JqZWN0UmVnaXN0cnksIHRoaXMuZW52aXJvbm1lbnQpO1xuXHR9XG5cblx0cHVibGljIGNhbGxSb290SW5zdGFuY2VNZXRob2QobWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSk6IGFueSB7XG5cdFx0aWYgKHRoaXMucm9vdEluc3RhbmNlID09PSBudWxsKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ05vIHJvb3QgaW5zdGFuY2UgYXZhaWxhYmxlLicpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmNhbGxJbnN0YW5jZU1ldGhvZCh0aGlzLnJvb3RJbnN0YW5jZSwgbWV0aG9kTmFtZSwgYXJncyk7XG5cdH1cblxuXHRwdWJsaWMgY2FsbEluc3RhbmNlTWV0aG9kKGluc3RhbmNlOiBJbnN0YW5jZSwgbWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSk6IGFueSB7XG5cdFx0aWYgKHRoaXMucm9vdEluc3RhbmNlID09PSBudWxsKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ05vIHJvb3QgaW5zdGFuY2UgYXZhaWxhYmxlLicpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjYWxsSW5zdGFuY2VNZXRob2QoXG5cdFx0XHRpbnN0YW5jZSxcblx0XHRcdGluc3RhbmNlLl9fY2xhc3NEZWYuZmluZE1ldGhvZChtZXRob2ROYW1lKSxcblx0XHRcdGFyZ3MsXG5cdFx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0dGhpcy5lbnZpcm9ubWVudFxuXHRcdCk7XG5cdH1cblxuXHRwdWJsaWMgYXN5bmMgZXhlY3V0ZUVudHJ5RmlsZSh1cmw6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gdGhpcy5wcm9ncmFtLmV4ZWN1dGUoYXdhaXQgZmV0Y2hTb3VyY2UodXJsKSlcblx0XHQgICAgICAgICAgIC50aGVuKCgpID0+IHtcblx0XHRcdCAgICAgICAgICAgdGhpcy5vYmplY3RSZWdpc3RyeSA9IHRoaXMucHJvZ3JhbS5nZXRHbG9iYWxPYmplY3RSZWdpc3RyeSgpO1xuXHRcdFx0ICAgICAgICAgICB0aGlzLmVudmlyb25tZW50ID0gdGhpcy5wcm9ncmFtLmdldEdsb2JhbEVudmlyb25tZW50KCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMucm9vdEluc3RhbmNlID0gdGhpcy5jcmVhdGVJbnN0YW5jZShjbGFzc05hbWUpO1xuXHRcdCAgICAgICAgICAgfSk7XG5cdH1cblxuXHRwdWJsaWMgY3JlYXRlRXZlbnQoZXZlbnQ6IEV2ZW50KTogSW5zdGFuY2Uge1xuXHRcdHJldHVybiBseXJhRXZlbnRDbGFzc0RlZi5jb25zdHJ1Y3ROYXRpdmVJbnN0YW5jZSh0aGlzLm9iamVjdFJlZ2lzdHJ5LCBbZXZlbnRdKTtcblx0fVxuXG5cdHB1YmxpYyBjcmVhdGVFdmVudEhhbmRsZXIoaGFuZGxlcjogTGFtYmRhRnVuY3Rpb25DYWxsLCBldmVudE5hbWU6IHN0cmluZyk6IChldmVudDogRXZlbnQpID0+IHZvaWQge1xuXHRcdHJldHVybiAoZXZlbnQ6IEV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHR0aGlzLmV2ZW50UGlwZWxpbmUuZW1pdChcblx0XHRcdFx0ZXZlbnROYW1lLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aW52b2tlOiAoKTogYW55ID0+IHtcblx0XHRcdFx0XHRcdGhhbmRsZXIuZXZhbENhbGwoXG5cdFx0XHRcdFx0XHRcdGhhbmRsZXIuZnVuY3Rpb25FbnYuZ2V0KEdSQU1NQVIuVEhJUykgYXMgSW5zdGFuY2UsXG5cdFx0XHRcdFx0XHRcdHRoaXMuY3JlYXRlRXZlbnQoZXZlbnQpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZXZlbnRcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9O1xuXHR9XG5cblxuXHRwcml2YXRlIGdldENsYXNzRGVmaW5pdGlvbihjbGFzc05hbWU6IHN0cmluZyk6IENsYXNzRGVmaW5pdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMub2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQoY2xhc3NOYW1lKTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge3R5cGUgRW5naW5lLCBXZWJMeXJhU2NyaXB0fSBmcm9tIFwiLi9lbmdpbmVcIjtcbmltcG9ydCB7dHlwZSBFbGVtZW50UGF0Y2hlciwgSFRNTEVsZW1lbnRQYXRjaGVyfSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCB0eXBlIHtWTm9kZX0gZnJvbSBcIi4uL2NvcmUvdmRvbS92ZG9tXCI7XG5pbXBvcnQge0V2ZW50UGlwZWxpbmV9IGZyb20gXCIuLi9jb3JlL2V2ZW50L3BpcGVsaW5lXCI7XG5pbXBvcnQgRXZlbnRzLCB7RXZlbnRIYW5kbGVyU3RvcmV9IGZyb20gXCIuL2V2ZW50cy50c1wiO1xuaW1wb3J0IHt0eXBlIEluc3RhbmNlfSBmcm9tIFwiLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge0xhbWJkYUZ1bmN0aW9uQ2FsbH0gZnJvbSBcIi4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcnVudGltZS50c1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpY2F0aW9uUnVudGltZSB7XG5cdGdldCBlbmdpbmUoKTogRW5naW5lO1xuXG5cdGdldCBldmVudFBpcGVsaW5lKCk6IEV2ZW50UGlwZWxpbmU7XG5cblx0c3RhcnQodXJsOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcblxuXHRjcmVhdGVJbnN0YW5jZShjbGFzc05hbWU6IHN0cmluZyk6IEluc3RhbmNlO1xuXG5cdGNhbGxSb290SW5zdGFuY2VNZXRob2QobWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSk6IGFueTtcblxuXHRjYWxsTWV0aG9kKGluc3RhbmNlOiBJbnN0YW5jZSwgbWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSk6IGFueTtcblxuXHRhZGRFdmVudEhhbmRsZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIHByb3BlcnR5S2V5OiBzdHJpbmcsIGhhbmRsZXI6IExhbWJkYUZ1bmN0aW9uQ2FsbCk6IHZvaWQ7XG5cblx0cmVtb3ZlRXZlbnRIYW5kbGVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwcm9wZXJ0eUtleTogc3RyaW5nKTogdm9pZDtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0QXBwbGljYXRpb25SdW50aW1lIGltcGxlbWVudHMgQXBwbGljYXRpb25SdW50aW1lIHtcblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgX2VuZ2luZTogRW5naW5lLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgX2V2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUgPSBuZXcgRXZlbnRQaXBlbGluZSgpLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgZXZlbnRIYW5kbGVyU3RvcmU6IEV2ZW50SGFuZGxlclN0b3JlID0gbmV3IEV2ZW50SGFuZGxlclN0b3JlKClcblx0KSB7XG5cblx0fVxuXG5cdGdldCBlbmdpbmUoKTogRW5naW5lIHtcblx0XHRyZXR1cm4gdGhpcy5fZW5naW5lO1xuXHR9XG5cblx0Z2V0IGV2ZW50UGlwZWxpbmUoKTogRXZlbnRQaXBlbGluZSB7XG5cdFx0cmV0dXJuIHRoaXMuX2V2ZW50UGlwZWxpbmU7XG5cdH1cblxuXG5cdHB1YmxpYyBzdGFydCh1cmw6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcblx0fVxuXG5cdHB1YmxpYyBjcmVhdGVJbnN0YW5jZShjbGFzc05hbWU6IHN0cmluZyk6IEluc3RhbmNlIHtcblx0XHRyZXR1cm4gdGhpcy5fZW5naW5lLmNyZWF0ZUluc3RhbmNlKGNsYXNzTmFtZSk7XG5cdH1cblxuXHRwdWJsaWMgY2FsbFJvb3RJbnN0YW5jZU1ldGhvZChtZXRob2ROYW1lOiBzdHJpbmcsIGFyZ3M6IGFueVtdID0gW10pOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLl9lbmdpbmUuY2FsbFJvb3RJbnN0YW5jZU1ldGhvZChtZXRob2ROYW1lLCBhcmdzKTtcblx0fVxuXG5cdHB1YmxpYyBjYWxsTWV0aG9kKGluc3RhbmNlOiBJbnN0YW5jZSwgbWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSA9IFtdKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5fZW5naW5lLmNhbGxJbnN0YW5jZU1ldGhvZChpbnN0YW5jZSwgbWV0aG9kTmFtZSwgYXJncyk7XG5cdH1cblxuXHRwdWJsaWMgYWRkRXZlbnRIYW5kbGVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwcm9wZXJ0eUtleTogc3RyaW5nLCBoYW5kbGVyOiBMYW1iZGFGdW5jdGlvbkNhbGwpOiB2b2lkIHtcblx0XHRjb25zdCBldmVudE5hbWU6IHN0cmluZyA9IHByb3BlcnR5S2V5LnNsaWNlKDIpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0Y29uc3QgZXZlbnRIYW5kbGVyOiAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkID0gdGhpcy5lbmdpbmUuY3JlYXRlRXZlbnRIYW5kbGVyKGhhbmRsZXIsIEV2ZW50cy5ET01fRVZFTlQpO1xuXG5cdFx0dGhpcy5ldmVudEhhbmRsZXJTdG9yZS5hZGRFdmVudEhhbmRsZXIoZWxlbWVudCwgcHJvcGVydHlLZXksIGV2ZW50SGFuZGxlcik7XG5cblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudEhhbmRsZXIpO1xuXHR9XG5cblx0cHVibGljIHJlbW92ZUV2ZW50SGFuZGxlcihlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcGVydHlLZXk6IHN0cmluZyk6IHZvaWQge1xuXHRcdGNvbnN0IGV2ZW50TmFtZTogc3RyaW5nID0gcHJvcGVydHlLZXkuc2xpY2UoMilcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRjb25zdCBldmVudEhhbmRsZXI6IEZ1bmN0aW9uIHwgbnVsbCA9IHRoaXMuZXZlbnRIYW5kbGVyU3RvcmUucmVtb3ZlRXZlbnRIYW5kbGVyKGVsZW1lbnQsIHByb3BlcnR5S2V5KTtcblxuXHRcdGlmIChldmVudEhhbmRsZXIpIHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50SGFuZGxlciBhcyBFdmVudExpc3RlbmVyKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFdlYkFwcGxpY2F0aW9uUnVudGltZSBleHRlbmRzIEFic3RyYWN0QXBwbGljYXRpb25SdW50aW1lIHtcblx0cHJpdmF0ZSByZWFkb25seSBwYXRjaGVyOiBFbGVtZW50UGF0Y2hlcjtcblxuXHRwcml2YXRlIGN1cnJlbnRWTm9kZTogVk5vZGUgfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSBpc1JlbmRlcmluZzogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIHJlbmRlckZ1bmN0aW9uOiAoKCkgPT4gVk5vZGUpIHwgbnVsbCA9IG51bGw7XG5cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRtb3VudFBvaW50OiBIVE1MRWxlbWVudCxcblx0XHRpc0RlYnVnOiBib29sZWFuID0gZmFsc2UsXG5cdFx0ZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSA9IG5ldyBFdmVudFBpcGVsaW5lKCksXG5cdFx0ZXZlbnRIYW5kbGVyU3RvcmU6IEV2ZW50SGFuZGxlclN0b3JlID0gbmV3IEV2ZW50SGFuZGxlclN0b3JlKClcblx0KSB7XG5cdFx0c3VwZXIobmV3IFdlYkx5cmFTY3JpcHQoZXZlbnRQaXBlbGluZSwgaXNEZWJ1ZyksIGV2ZW50UGlwZWxpbmUsIGV2ZW50SGFuZGxlclN0b3JlKTtcblxuXHRcdHRoaXMucGF0Y2hlciA9IG5ldyBIVE1MRWxlbWVudFBhdGNoZXIobW91bnRQb2ludCwgdGhpcylcblx0fVxuXG5cdHB1YmxpYyBvdmVycmlkZSBhc3luYyBzdGFydCh1cmw6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcgPSAnQXBwJyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdGF3YWl0IHRoaXMuZW5naW5lLmV4ZWN1dGVFbnRyeUZpbGUodXJsLCBjbGFzc05hbWUpO1xuXG5cdFx0dGhpcy5saXN0ZW5Ub0RvbUV2ZW50cygpO1xuXG5cdFx0dGhpcy5yZW5kZXJGdW5jdGlvbiA9ICgpOiBWTm9kZSA9PiB0aGlzLnJlbmRlcigpO1xuXG5cdFx0dGhpcy5wZXJmb3JtUmVuZGVyKCk7XG5cdH1cblxuXHRwdWJsaWMgcmVxdWVzdFJlbmRlcigpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pc1JlbmRlcmluZykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHF1ZXVlTWljcm90YXNrKCgpOiB2b2lkID0+IHtcblx0XHRcdHRoaXMucGVyZm9ybVJlbmRlcigpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBsaXN0ZW5Ub0RvbUV2ZW50cygpOiB2b2lkIHtcblx0XHR0aGlzLmV2ZW50UGlwZWxpbmVcblx0XHQgICAgLm9uKEV2ZW50cy5ET01fRVZFTlQsICh7aW52b2tlfTogYW55KTogdm9pZCA9PiB7XG5cdFx0XHQgICAgaW52b2tlKCk7XG5cdFx0XHQgICAgdGhpcy5wZXJmb3JtUmVuZGVyKCk7XG5cdFx0ICAgIH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBwZXJmb3JtUmVuZGVyKCk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5yZW5kZXJGdW5jdGlvbikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuaXNSZW5kZXJpbmcgPSB0cnVlO1xuXG5cdFx0Y29uc3QgbmV4dFZOb2RlOiBWTm9kZSA9IHRoaXMucmVuZGVyRnVuY3Rpb24oKTtcblxuXHRcdHRoaXMucGF0Y2hlci5wYXRjaCh0aGlzLmN1cnJlbnRWTm9kZSwgbmV4dFZOb2RlKTtcblxuXHRcdHRoaXMuY3VycmVudFZOb2RlID0gbmV4dFZOb2RlO1xuXG5cdFx0dGhpcy5pc1JlbmRlcmluZyA9IGZhbHNlO1xuXHR9XG5cblxuXHRwcml2YXRlIHJlbmRlcigpOiBWTm9kZSB7XG5cdFx0cmV0dXJuIHRoaXMuY2FsbFJvb3RJbnN0YW5jZU1ldGhvZCgncmVuZGVyJykgYXMgVk5vZGU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtQYXJzZXJ9IGZyb20gXCIuL2NvcmUvcGFyc2VyL3BhcnNlclwiO1xuaW1wb3J0IHt3cmFwSnNFcnJvcn0gZnJvbSBcIi4vY29yZS9lcnJvcnNcIjtcbmltcG9ydCB7ZmV0Y2hTb3VyY2UsIFNvdXJjZX0gZnJvbSBcIi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuaW1wb3J0IHtBU1ROb2RlfSBmcm9tIFwiLi9jb3JlL2FzdFwiO1xuaW1wb3J0IHtUb2tlbml6ZXJ9IGZyb20gXCIuL2NvcmUvdG9rZW5pemVyL3Rva2VuaXplclwiO1xuaW1wb3J0IHtUb2tlbn0gZnJvbSBcIi4vY29yZS9ncmFtbWFyXCI7XG5pbXBvcnQge0x5cmFTY3JpcHRQcm9ncmFtfSBmcm9tIFwiLi9jb3JlL3Byb2dyYW1cIjtcbmltcG9ydCB7RXZlbnRQaXBlbGluZX0gZnJvbSBcIi4vY29yZS9ldmVudC9waXBlbGluZVwiO1xuaW1wb3J0IHtiaW5kU3RhdGVUb0V2ZW50LCBTdGF0ZX0gZnJvbSBcIi4vY29yZS9ldmVudC9zdGF0ZVwiO1xuaW1wb3J0IHtIVE1MRWxlbWVudENyZWF0b3J9IGZyb20gXCIuL2hvc3QvZG9tXCI7XG5cbmV4cG9ydCB7V2ViTHlyYVNjcmlwdH0gZnJvbSBcIi4vaG9zdC9lbmdpbmVcIjtcbmV4cG9ydCB7V2ViQXBwbGljYXRpb25SdW50aW1lfSBmcm9tIFwiLi9ob3N0L3J1bnRpbWVcIjtcblxuY29uc3QgTHlyYSA9IHtcblx0U291cmNlLFxuXHRQYXJzZXIsXG5cdFRva2VuaXplcixcblx0RXZlbnRQaXBlbGluZSxcblx0SFRNTEVsZW1lbnRDcmVhdG9yLFxuXHRTdGF0ZSxcblx0YmluZFN0YXRlVG9FdmVudCxcblx0UHJvZ3JhbTogKGlzRGVidWc6IGJvb2xlYW4pOiBMeXJhU2NyaXB0UHJvZ3JhbSA9PiBQcm9ncmFtKGlzRGVidWcpLFxuXHRleGVjdXRlOiAoc291cmNlOiBTb3VyY2UsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4gPT4gZXhlY3V0ZShzb3VyY2UsIGlzRGVidWcpLFxuXHRleGVjdXRlRnJvbVN0cmluZzogKGNvZGU6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiBleGVjdXRlRnJvbVN0cmluZyhjb2RlLCBpc0RlYnVnKSxcblx0ZXhlY3V0ZUZyb21Vcmw6IGFzeW5jICh1cmw6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiBleGVjdXRlRnJvbVVybCh1cmwsIGlzRGVidWcpLFxuXHRleGVjdXRlVGVzdDogKHNvdXJjZTogU291cmNlLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+ID0+IGV4ZWN1dGVUZXN0KHNvdXJjZSwgaXNEZWJ1ZyksXG5cdGV4ZWN1dGVUZXN0U3RyaW5nOiAoY29kZTogc3RyaW5nLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+ID0+IGV4ZWN1dGVUZXN0U3RyaW5nKGNvZGUsIGlzRGVidWcpLFxuXHRleGVjdXRlVGVzdFVybDogKHVybDogc3RyaW5nLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+ID0+IGV4ZWN1dGVUZXN0VXJsKHVybCwgaXNEZWJ1ZyksXG5cdHRva2VuaXplOiAoc291cmNlOiBTb3VyY2UpOiBUb2tlbltdID0+IHRva2VuaXplKHNvdXJjZSksXG5cdHRva2VuaXplVXJsOiAodXJsOiBzdHJpbmcpOiBQcm9taXNlPFRva2VuW10+ID0+IHRva2VuaXplVXJsKHVybCksXG5cdHBhcnNlVHJlZTogKHNvdXJjZTogU291cmNlKTogQVNUTm9kZSA9PiBwYXJzZVRyZWUoc291cmNlKSxcblx0cGFyc2VUcmVlVXJsOiAodXJsOiBzdHJpbmcpOiBQcm9taXNlPEFTVE5vZGU+ID0+IHBhcnNlVHJlZVVybCh1cmwpLFxufTtcblxuZnVuY3Rpb24gUHJvZ3JhbShpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBMeXJhU2NyaXB0UHJvZ3JhbSB7XG5cdHJldHVybiBuZXcgTHlyYVNjcmlwdFByb2dyYW0oaXNEZWJ1Zyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGUoc291cmNlOiBTb3VyY2UsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBQcm9ncmFtKGlzRGVidWcpXG5cdFx0XHQuZXhlY3V0ZShzb3VyY2UpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKHdyYXBKc0Vycm9yKGVycm9yLCBzb3VyY2UpXG5cdFx0XHRcdCAgICAgICAgICAgICAgLmZvcm1hdCgpKTtcblx0XHR9XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZUZyb21VcmwodXJsOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4ge1xuXHRyZXR1cm4gYXdhaXQgZXhlY3V0ZShhd2FpdCBmZXRjaFNvdXJjZSh1cmwpLCBpc0RlYnVnKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZUZyb21TdHJpbmcoY29kZTogc3RyaW5nLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgc291cmNlID0gbmV3IFNvdXJjZShjb2RlKTtcblxuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBQcm9ncmFtKGlzRGVidWcpXG5cdFx0XHQuZXhlY3V0ZShzb3VyY2UpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKHdyYXBKc0Vycm9yKGVycm9yLCBzb3VyY2UpXG5cdFx0XHRcdCAgICAgICAgICAgICAgLmZvcm1hdCgpKTtcblx0XHR9XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZVRlc3Qoc291cmNlOiBTb3VyY2UsIGlzRGVidWcgPSBmYWxzZSk6IFByb21pc2U8dm9pZD4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBQcm9ncmFtKGlzRGVidWcpXG5cdFx0XHQuZXhlY3V0ZVRlc3Qoc291cmNlKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcih3cmFwSnNFcnJvcihlcnJvciwgc291cmNlKVxuXHRcdFx0XHQgICAgICAgICAgICAgIC5mb3JtYXQoKSk7XG5cdFx0fVxuXHRcdHRocm93IGVycm9yO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVUZXN0VXJsKHVybDogc3RyaW5nLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0cmV0dXJuIGF3YWl0IGV4ZWN1dGVUZXN0KGF3YWl0IGZldGNoU291cmNlKHVybCksIGlzRGVidWcpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlVGVzdFN0cmluZyhjb2RlOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBzb3VyY2UgPSBuZXcgU291cmNlKGNvZGUpO1xuXG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IFByb2dyYW0oaXNEZWJ1Zylcblx0XHRcdC5leGVjdXRlVGVzdChzb3VyY2UpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKHdyYXBKc0Vycm9yKGVycm9yLCBzb3VyY2UpXG5cdFx0XHRcdCAgICAgICAgICAgICAgLmZvcm1hdCgpKTtcblx0XHR9XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRva2VuaXplKHNvdXJjZTogU291cmNlKTogVG9rZW5bXSB7XG5cdHJldHVybiBuZXcgVG9rZW5pemVyKHNvdXJjZSkudG9rZW5pemUoKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRva2VuaXplVXJsKHVybDogc3RyaW5nKTogUHJvbWlzZTxUb2tlbltdPiB7XG5cdHJldHVybiB0b2tlbml6ZShhd2FpdCBmZXRjaFNvdXJjZSh1cmwpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVHJlZShzb3VyY2U6IFNvdXJjZSk6IEFTVE5vZGUge1xuXHRyZXR1cm4gbmV3IFBhcnNlcihzb3VyY2UpLnBhcnNlKCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwYXJzZVRyZWVVcmwodXJsOiBzdHJpbmcpOiBQcm9taXNlPEFTVE5vZGU+IHtcblx0cmV0dXJuIHBhcnNlVHJlZShhd2FpdCBmZXRjaFNvdXJjZSh1cmwpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTHlyYTtcbiIKICBdLAogICJtYXBwaW5ncyI6ICI7QUFFTyxNQUFNLFFBQVE7QUFBQSxTQUNiLFNBQWlCO0FBQUEsU0FDakIsT0FBZTtBQUFBLFNBQ2YsTUFBYztBQUFBLFNBQ2QsT0FBZTtBQUFBLFNBQ2YsUUFBZ0I7QUFBQSxTQUNoQixZQUFvQjtBQUFBLFNBQ3BCLFVBQWtCO0FBQUEsU0FDbEIsYUFBcUI7QUFBQSxTQUNyQixjQUFzQjtBQUFBLFNBQ3RCLE1BQWM7QUFBQSxTQUNkLE9BQWU7QUFBQSxTQUNmLFNBQWlCO0FBQUEsU0FDakIsVUFBa0I7QUFBQSxTQUNsQixTQUFpQjtBQUFBLFNBQ2pCLFdBQW1CO0FBQUEsU0FDbkIsU0FBaUI7QUFBQSxTQUNqQixRQUFnQjtBQUFBLFNBQ2hCLE9BQWU7QUFBQSxTQUNmLFFBQWdCO0FBQUEsU0FDaEIsS0FBYTtBQUFBLFNBQ2IsT0FBZTtBQUFBLFNBQ2YsUUFBZ0I7QUFBQSxTQUNoQixVQUFrQjtBQUFBLFNBQ2xCLFVBQWtCO0FBQUEsU0FDbEIsS0FBYTtBQUFBLFNBQ2IsT0FBZTtBQUFBLFNBQ2YsT0FBZTtBQUFBLFNBRWYsc0JBQThCO0FBQUEsU0FDOUIsdUJBQStCO0FBQUEsU0FDL0IsYUFBcUI7QUFBQSxTQUNyQixjQUFzQjtBQUFBLFNBQ3RCLG1CQUEyQjtBQUFBLFNBQzNCLG9CQUE0QjtBQUFBLFNBQzVCLFlBQW9CO0FBQUEsU0FDcEIsUUFBZ0I7QUFBQSxTQUNoQixRQUFnQjtBQUFBLFNBRWhCLFFBQWdCO0FBQUEsU0FDaEIsTUFBYztBQUFBLFNBQ2QsU0FBaUI7QUFBQSxTQUNqQixPQUFlO0FBQUEsU0FDZixRQUFnQjtBQUFBLFNBQ2hCLFNBQWlCO0FBQUEsU0FDakIsV0FBbUI7QUFBQSxTQUNuQixVQUFrQjtBQUFBLFNBRWxCLG1CQUEyQjtB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QW1CLE9BQXNCO0FBQUEsRUFDdkYsTUFBTSxTQUFTLElBQUksT0FBTyxJQUFJO0FBQUEsRUFFOUIsSUFBSTtBQUFBLElBQ0gsT0FBTyxNQUFNLFFBQVEsT0FBTyxFQUMxQixZQUFZLE1BQU07QUFBQSxJQUNuQixPQUFPLE9BQU87QUFBQSxJQUNmLElBQUksaUJBQWlCLE9BQU87QUFBQSxNQUMzQixRQUFRLE1BQU0sWUFBWSxPQUFPLE1BQU0sRUFDdkIsT0FBTyxDQUFDO0FBQUEsSUFDekI7QUFBQSxJQUNBLE1BQU07QUFBQTtBQUFBO0FBSUQsU0FBUyxRQUFRLENBQUMsUUFBeUI7QUFBQSxFQUNqRCxPQUFPLElBQUksVUFBVSxNQUFNLEVBQUUsU0FBUztBQUFBO0FBR3ZDLGVBQXNCLFdBQVcsQ0FBQyxLQUErQjtBQUFBLEVBQ2hFLE9BQU8sU0FBUyxNQUFNLFlBQVksR0FBRyxDQUFDO0FBQUE7QUFHaEMsU0FBUyxTQUFTLENBQUMsUUFBeUI7QUFBQSxFQUNsRCxPQUFPLElBQUksT0FBTyxNQUFNLEVBQUUsTUFBTTtBQUFBO0FBR2pDLGVBQXNCLFlBQVksQ0FBQyxLQUErQjtBQUFBLEVBQ2pFLE9BQU8sVUFBVSxNQUFNLFlBQVksR0FBRyxDQUFDO0FBQUE7QUFHeEMsSUFBZTsiLAogICJkZWJ1Z0lkIjogIjhCRDY2MDg5ODJGOTkxQkM2NDc1NkUyMTY0NzU2RTIxIiwKICAibmFtZXMiOiBbXQp9
