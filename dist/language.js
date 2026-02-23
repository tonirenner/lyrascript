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
	
	public subscribe(fn: (T) -> mixed): number;
	
	public unsubscribe(id: number): boolean;
}`));
    this.isAutoloadAble = true;
  }
}

// language/src/library/classes/event.ts
var CLASS_NAME6 = "LyraEvents";

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
  eventPipeline;
  constructor(node, objectRegistry, functionEnv, eventPipeline) {
    this.node = node;
    this.objectRegistry = objectRegistry;
    this.functionEnv = functionEnv;
    this.eventPipeline = eventPipeline;
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
    return evalReturn(node.children, this.objectRegistry, closureEnv, this.eventPipeline, thisValue, node.returnType);
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
    return evalReturn([result], this.objectRegistry, this.functionEnv, this.eventPipeline, thisValue, this.lookupFunctionType(callNode.callee.name).returnType);
  }
  lookupFunctionType(name) {
    return globalFunctionTypeRegistry.get(name);
  }
  resolveCall(thisValue) {
    const node = this.getASTCallNode();
    if (node === null) {
      throwRuntimeError("Invalid function call.");
    }
    return evalExpression(node.callee, this.objectRegistry, this.functionEnv, this.eventPipeline, thisValue);
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
function evalNode(node, objectRegistry, environment, eventPipeline, thisValue = null) {
  if (node.isExpression) {
    return new ReturnValue(evalExpression(node, objectRegistry, environment, eventPipeline, thisValue));
  }
  switch (node.type) {
    case ASTNodeType.PROGRAMM: {
      for (const child of node.children) {
        evalNode(child, objectRegistry, environment, eventPipeline, thisValue);
      }
      return null;
    }
    case ASTNodeType.IMPORT:
    case ASTNodeType.INTERFACE: {
      return null;
    }
    case ASTNodeType.CLASS: {
      if (node instanceof ASTClassNode) {
        return evalClass(node, objectRegistry, environment, eventPipeline);
      }
      throwRuntimeError(`Invalid class node ${node.type}.`, node.span);
    }
    case ASTNodeType.VARIABLE: {
      if (node instanceof ASTVariableNode) {
        const value = node.init ? evalExpression(node.init, objectRegistry, environment, eventPipeline, thisValue) : null;
        environment.define(node.name, value);
        return null;
      }
      throwRuntimeError(`Invalid variable node ${node.type}.`, node.span);
    }
    case ASTNodeType.IF: {
      if (node instanceof ASTIfNode) {
        return evalIf(node, objectRegistry, environment, eventPipeline, thisValue);
      }
      throwRuntimeError(`Invalid if node ${node.type}.`, node.span);
    }
    case ASTNodeType.MATCH: {
      if (node instanceof ASTMatchNode) {
        return evalMatch(node, objectRegistry, environment, eventPipeline, thisValue);
      }
      throwRuntimeError(`Invalid match node ${node.type}.`, node.span);
    }
    case ASTNodeType.FOREACH: {
      if (node instanceof ASTForeachNode) {
        return evalForeach(node, objectRegistry, environment, eventPipeline, thisValue);
      }
      throwRuntimeError(`Invalid foreach node ${node.type}.`, node.span);
    }
    case ASTNodeType.VDOM: {
      if (node instanceof ASTVDomNode) {
        return evalVDomNode(node, objectRegistry, environment, eventPipeline, thisValue);
      }
      throwRuntimeError(`Invalid foreach node ${node.type}.`, node.span);
    }
    case ASTNodeType.EXPRESSION: {
      if (node instanceof ASTExpressionNode) {
        return evalExpression(node.expr, objectRegistry, environment, eventPipeline, thisValue);
      }
      throwRuntimeError(`Invalid expression node ${node.type}.`, node.span);
    }
    case ASTNodeType.RETURN: {
      if (node instanceof ASTReturnNode) {
        const value = node.argument ? evalExpression(node.argument, objectRegistry, environment, eventPipeline, thisValue) : null;
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
  return classDef.constructEmptyInstance();
}
function constructNativeInstance(expr, classDef, objectRegistry, environment, eventPipeline) {
  return classDef.constructNativeInstanceByNewNode(expr, objectRegistry, environment, eventPipeline);
}
function constructInstance(expr, classDef, objectRegistry, environment, eventPipeline) {
  return classDef.constructInstanceByNewNode(expr, objectRegistry, environment, eventPipeline);
}
function evalClass(node, objectRegistry, environment, eventPipeline) {
  const instance = constructEmptyInstance(node, objectRegistry);
  instance.initializeInstanceFields(objectRegistry, environment, eventPipeline);
  environment.define(node.name, instance);
}
function evalNew(expr, objectRegistry, environment, eventPipeline) {
  if (!objectRegistry.classes.has(expr.name)) {
    throwRuntimeError(`Unknown class ${expr.name}.`, expr.span);
  }
  const classDef = objectRegistry.classes.get(expr.name);
  if (classDef.nativeInstance) {
    return constructNativeInstance(expr, classDef, objectRegistry, environment, eventPipeline);
  }
  return constructInstance(expr, classDef, objectRegistry, environment, eventPipeline);
}
function evalExpression(expr, objectRegistry, environment, eventPipeline, thisValue = null) {
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
        return evalBinary(expr, objectRegistry, environment, eventPipeline, thisValue);
      }
      throwRuntimeError(`Invalid binary expression ${expr.type}`);
    }
    case ASTNodeType.UNARY: {
      if (expr instanceof ASTUnaryNode) {
        return evalUnary(expr, objectRegistry, environment, eventPipeline, thisValue);
      }
      throwRuntimeError(`Invalid unary expression ${expr.type}.`, expr.span);
    }
    case ASTNodeType.ASSIGNMENT: {
      if (expr instanceof ASTAssignmentNode) {
        return evalAssign(expr, objectRegistry, environment, eventPipeline, thisValue);
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
        return evalCall(expr, objectRegistry, environment, eventPipeline, thisValue);
      }
      throwRuntimeError(`Invalid call expression ${expr.type}`, expr.span);
    }
    case ASTNodeType.VDOM: {
      if (expr instanceof ASTVDomNode) {
        return evalVDomNode(expr, objectRegistry, environment, eventPipeline, thisValue);
      }
      throwRuntimeError(`Invalid call expression ${expr.type}`, expr.span);
    }
    case ASTNodeType.NEW: {
      if (expr instanceof ASTNewNode) {
        return evalNew(expr, objectRegistry, environment, eventPipeline);
      }
      throwRuntimeError(`Invalid call expression ${expr.type}`, expr.span);
    }
    case ASTNodeType.ARRAY: {
      if (expr instanceof ASTArrayNode) {
        return evalArray(expr, objectRegistry, environment, eventPipeline, thisValue);
      }
      throwRuntimeError(`Invalid array expression ${expr.type}`, expr.span);
    }
    case ASTNodeType.INDEX: {
      if (expr instanceof ASTIndexNode) {
        return evalIndex(expr, objectRegistry, environment, eventPipeline, thisValue);
      }
      throwRuntimeError(`Invalid index expression ${expr.type}`, expr.span);
    }
    case ASTNodeType.LAMBDA: {
      if (expr instanceof ASTLambdaNode) {
        return evalLambda(expr, objectRegistry, environment, eventPipeline);
      }
      throwRuntimeError(`Invalid lambda expression ${expr.type}`, expr.span);
    }
    default: {
      throwRuntimeError(`Unhandled expression ${expr.type}.`, expr.span);
    }
  }
}
function evalBinary(expr, objectRegistry, environment, eventPipeline, thisValue = null) {
  const left = castValue(evalExpression(expr.left, objectRegistry, environment, eventPipeline, thisValue));
  const right = castValue(evalExpression(expr.right, objectRegistry, environment, eventPipeline, thisValue));
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
function evalArray(expr, objectRegistry, environment, eventPipeline, thisValue = null) {
  const values = [];
  for (const elem of expr.elements) {
    values.push(evalExpression(elem, objectRegistry, environment, eventPipeline, thisValue));
  }
  const classDef = objectRegistry.classes.get("Array");
  const instance = classDef.constructEmptyInstance();
  instance.__nativeInstance = new classDef.nativeInstance(fromLyraValue(values));
  return instance;
}
function evalIndex(expr, objectRegistry, environment, eventPipeline, thisValue = null) {
  if (!expr.object) {
    throwRuntimeError(`Index access on null.`, expr.span);
  }
  if (!expr.index) {
    throwRuntimeError(`Access with unspecific index.`, expr.span);
  }
  const object = evalExpression(expr.object, objectRegistry, environment, eventPipeline, thisValue);
  const index = evalExpression(expr.index, objectRegistry, environment, eventPipeline, thisValue);
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
function evalLambda(node, objectRegistry, lambdaEnv, eventPipeline) {
  return new LambdaFunctionCall(node, objectRegistry, lambdaEnv, eventPipeline);
}
function evalAssign(expr, objectRegistry, environment, eventPipeline, thisValue = null) {
  const value = evalExpression(expr.right, objectRegistry, environment, eventPipeline, thisValue);
  if (expr.left.type === ASTNodeType.MEMBER) {
    if (expr.left instanceof ASTMemberNode) {
      const object = evalExpression(expr.left.object, objectRegistry, environment, eventPipeline, thisValue);
      if (expr.left.object.type === ASTNodeType.IDENTIFIER) {
        object.__staticFields[expr.left.property] = value;
      } else {
        object.__instanceFields[expr.left.property] = value;
      }
      object.markDirty(eventPipeline);
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
function evalCall(expr, objectRegistry, environment, eventPipeline, thisValue = null) {
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
    bindMethodParameters(expr, constructorMethod.parameters, objectRegistry, constructorEnv, environment, eventPipeline, thisValue);
    for (const child of constructorMethod.children) {
      evalNode(child, objectRegistry, constructorEnv, eventPipeline, thisValue);
    }
    return null;
  }
  if (expr.callee.type === ASTNodeType.MEMBER) {
    if (expr.callee instanceof ASTMemberNode) {
      if (expr.callee.object.type === ASTNodeType.IDENTIFIER) {
        const className = expr.callee.object.name;
        if (objectRegistry.classes.has(className)) {
          return evalStaticCall(expr, className, objectRegistry, environment, eventPipeline, thisValue);
        }
      }
      return evalInstanceCall(expr, objectRegistry, environment, eventPipeline, thisValue);
    }
    return null;
  }
  return evalFunctionCall(expr, objectRegistry, environment, eventPipeline, thisValue);
}
function evalFunctionCall(expr, objectRegistry, environment, eventPipeline, thisValue = null) {
  const functionCall = evalExpression(expr.callee, objectRegistry, environment, eventPipeline, thisValue);
  const args = evalCallArguments(expr, objectRegistry, environment, eventPipeline, thisValue);
  if (functionCall instanceof LambdaFunctionCall) {
    return functionCall.evalCall(thisValue, ...args);
  }
  return new NativeFunctionCall(expr, objectRegistry, environment, eventPipeline).evalCall(thisValue, ...args);
}
function evalStaticCall(expr, className, objectRegistry, environment, eventPipeline, thisValue = null) {
  if (!(expr.callee instanceof ASTMemberNode)) {
    throwRuntimeError(`Invalid member expression ${expr.type}`, expr.span);
  }
  const classDef = objectRegistry.classes.get(className);
  const methodDef = classDef.staticMethods[expr.callee.property];
  if (!methodDef) {
    throwRuntimeError(`Static method ${className}.${expr.callee.property} not found`, expr.callee.span);
  }
  if (classDef.nativeInstance && classDef.nativeInstance[methodDef.name]) {
    const args = evalMethodArguments(expr, methodDef.parameters, objectRegistry, environment, eventPipeline, thisValue);
    const rawArgs = args.map(fromLyraValue);
    const result = classDef.nativeInstance[methodDef.name](...rawArgs);
    if (result instanceof LyraNativeObject) {
      return wrapNativeInstance(result, objectRegistry);
    }
    return evalReturn([returnValue(result)], objectRegistry, new Environment(environment), eventPipeline, thisValue, methodDef.returnType);
  }
  const methodEnv = new Environment(environment);
  bindMethodParameters(expr, methodDef.parameters, objectRegistry, methodEnv, environment, eventPipeline, thisValue);
  return evalReturn(methodDef.children, objectRegistry, methodEnv, eventPipeline, thisValue, methodDef.returnType);
}
function evalInstanceCall(expr, objectRegistry, environment, eventPipeline, thisValue = null) {
  if (!(expr.callee instanceof ASTMemberNode)) {
    throwRuntimeError(`Invalid member expression ${expr.type}`, expr.span);
  }
  let target = evalExpression(expr.callee.object, objectRegistry, environment, eventPipeline, thisValue);
  target = autoBoxIfNeeded(target, objectRegistry);
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
    const args = evalMethodArguments(expr, methodDef.parameters, objectRegistry, environment, eventPipeline, thisValue);
    const rawArgs = args.map(fromLyraValue);
    const result = target.__nativeInstance[methodDef.name](...rawArgs);
    if (result instanceof LyraNativeObject) {
      return wrapNativeInstance(result, objectRegistry);
    }
    return evalReturn([returnValue(result)], objectRegistry, methodEnv, eventPipeline, target, methodDef.returnType);
  }
  bindMethodParameters(expr, methodDef.parameters, objectRegistry, methodEnv, environment, eventPipeline, thisValue);
  return evalReturn(methodDef.children, objectRegistry, methodEnv, eventPipeline, target, methodDef.returnType);
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
function bindMethodParameters(callNode, parameters, objectRegistry, methodEnv, environment, eventPipeline, thisValue = null) {
  const args = callNode.arguments;
  for (let i = 0;i < parameters.length; i++) {
    const parameter2 = parameters[i] || null;
    const argument = args[i] || null;
    if (!parameter2) {
      throwRuntimeError("Missing parameter name in method call.");
    }
    let rawValue;
    if (argument) {
      rawValue = evalExpression(argument, objectRegistry, environment, eventPipeline, thisValue);
    } else if (parameter2?.defaultValue) {
      rawValue = evalExpression(parameter2.defaultValue, objectRegistry, environment, eventPipeline, thisValue);
    }
    const casted = parameter2.typeAnnotation ? castValue(rawValue, parameter2.typeAnnotation.name) : castValue(rawValue, TYPE_ENUM.MIXED);
    methodEnv.define(parameter2.name, casted);
  }
}
function evalCallArguments(node, objectRegistry, environment, eventPipeline, thisValue = null) {
  if (node.callee instanceof ASTLambdaNode) {
    const lambda = node.callee;
    return evalMethodArguments(node, lambda.parameters, objectRegistry, environment, eventPipeline, thisValue);
  }
  if (node.callee.type === ASTNodeType.IDENTIFIER) {
    return node.arguments.map((argument) => {
      return castValue(evalExpression(argument, objectRegistry, environment, eventPipeline, thisValue), argument.type);
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
function evalMethodArguments(expr, parameters, objectRegistry, environment, eventPipeline, thisValue = null) {
  const args = [];
  for (let i = 0;i < parameters.length; i++) {
    const parameter2 = parameters[i] || null;
    const argument = expr.arguments[i] || null;
    let value;
    if (argument) {
      value = evalExpression(argument, objectRegistry, environment, eventPipeline, thisValue);
    } else if (parameter2?.defaultValue) {
      value = evalExpression(parameter2.defaultValue, objectRegistry, environment, eventPipeline, thisValue);
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
function evalIf(node, objectRegistry, environment, eventPipeline, thisValue = null) {
  const condition = castValue(evalExpression(node.condition, objectRegistry, environment, eventPipeline, thisValue), TYPE_ENUM.BOOLEAN);
  if (condition === true) {
    return evalBlock(node.then.children, objectRegistry, new Environment(environment), eventPipeline, thisValue);
  }
  if (node.else) {
    if (node.else instanceof ASTIfNode) {
      return evalIf(node.else, objectRegistry, environment, eventPipeline, thisValue);
    }
    return evalBlock(node.else.children, objectRegistry, new Environment(environment), eventPipeline, thisValue);
  }
  return null;
}
function evalMatch(node, objectRegistry, environment, eventPipeline, thisValue = null) {
  const matchValue = evalExpression(node.expression, objectRegistry, environment, eventPipeline);
  for (const caseNode of node.cases) {
    if (caseNode.test === null) {
      continue;
    }
    const testValue = evalExpression(caseNode.test, objectRegistry, environment, eventPipeline, thisValue);
    if (testValue === matchValue) {
      return evalMatchCase(caseNode, objectRegistry, environment, eventPipeline, thisValue);
    }
  }
  if (node.defaultCase) {
    return evalMatchCase(node.defaultCase, objectRegistry, environment, eventPipeline, thisValue);
  }
  return null;
}
function evalMatchCase(node, objectRegistry, environment, eventPipeline, thisValue = null) {
  return evalBlock(node.children, objectRegistry, new Environment(environment), eventPipeline, thisValue);
}
function evalForeach(node, objectRegistry, environment, eventPipeline, thisValue = null) {
  let iterable = evalExpression(node.iterable, objectRegistry, environment, eventPipeline, thisValue);
  if (!(iterable instanceof Instance)) {
    throwRuntimeError(`foreach expects an object implementing Iterable`, node.iterable.span);
  }
  const iteratorMethod = resolveInstanceMethod(iterable.__classDef, objectRegistry, "iterator");
  if (!iteratorMethod) {
    throwRuntimeError(`Object does not implement Iterable (missing iterator())`, node.iterable.span);
  }
  const iterator = evalInstanceCall((() => {
    return new ASTCallNode(new ASTMemberNode(node.iterable, "iterator"));
  })(), objectRegistry, environment, eventPipeline, thisValue);
  if (!(iterator instanceof Instance)) {
    throwRuntimeError(`iterator() must return an Iterator object`, node.iterable.span);
  }
  callIteratorMethod(iterator, "rewind", objectRegistry, environment, eventPipeline);
  while (callIteratorMethod(iterator, "hasNext", objectRegistry, environment, eventPipeline)) {
    const value = callIteratorMethod(iterator, "current", objectRegistry, environment, eventPipeline);
    const loopEnv = new Environment(environment);
    loopEnv.define(node.iterator, value);
    const result = evalBlock(node.body, objectRegistry, loopEnv, eventPipeline, thisValue);
    if (result instanceof ReturnValue) {
      return result;
    }
    callIteratorMethod(iterator, "next", objectRegistry, environment, eventPipeline);
  }
  return null;
}
function callIteratorMethod(iterator, methodName, objectRegistry, environment, eventPipeline) {
  return callInstanceMethod(iterator, iterator.findeMethodNode(methodName), [], objectRegistry, environment, eventPipeline);
}
function evalUnary(node, objectRegistry, environment, eventPipeline, thisValue = null) {
  const value = evalExpression(node.argument, objectRegistry, environment, eventPipeline, thisValue);
  switch (node.operator) {
    case GRAMMAR.EXCLAMATION_MARK:
      return !castValue(value);
  }
  throwRuntimeError(`Unsupported unary operator ${node.operator}`, node.span);
}
function evalVDomNode(node, objectRegistry, environment, eventPipeline, thisValue = null) {
  const props = {};
  for (const [name, value] of node.props) {
    props[name] = evalExpression(value, objectRegistry, environment, eventPipeline, thisValue);
  }
  const children = [];
  const vNode = {
    tag: node.tag,
    isComponent: objectRegistry.classes.has(node.tag),
    parent: null,
    component: null,
    props,
    children,
    dom: null
  };
  for (const child of node.children) {
    if (child instanceof ASTVDomTextNode) {
      children.push(child.value);
    } else {
      const childVNode = evalExpression(child, objectRegistry, environment, eventPipeline, thisValue);
      childVNode.parent = vNode;
      children.push(childVNode);
    }
  }
  return vNode;
}
function evalReturn(blockNodes, objectRegistry, environment, eventPipeline, thisValue = null, returnType = null) {
  try {
    return evalBlock(blockNodes, objectRegistry, environment, eventPipeline, thisValue, returnType);
  } catch (executionStop) {
    if (executionStop instanceof ExecutionStop) {
      return castValue(executionStop.returnValue.value, executionStop.returnType?.name);
    }
    throw executionStop;
  }
}
function evalBlock(blockNodes, objectRegistry, environment, eventPipeline, thisValue = null, returnType = null) {
  for (const blockNode of blockNodes) {
    const returnValue2 = evalNode(blockNode, objectRegistry, environment, eventPipeline, thisValue);
    if (returnValue2 instanceof ReturnValue) {
      throw new ExecutionStop(returnValue2, returnType);
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
function callInstanceMethod(instance, methodNode, args, objectRegistry, environment, eventPipeline) {
  const methodEnv = new Environment(environment);
  methodEnv.define(GRAMMAR.THIS, instance);
  if (instance.__nativeInstance && methodNode.name in instance.__nativeInstance) {
    const rawArgs = args.map(fromLyraValue);
    const result = instance.__nativeInstance[methodNode.name](...rawArgs);
    if (result instanceof LyraNativeObject) {
      return wrapNativeInstance(result, objectRegistry);
    }
    return evalReturn([returnValue(result)], objectRegistry, methodEnv, eventPipeline, instance, methodNode.returnType);
  }
  for (let i = 0;i < methodNode.parameters.length; i++) {
    const parameter2 = methodNode.parameters[i] || null;
    const argument = args[i] || null;
    if (!parameter2) {
      throwRuntimeError("Method parameter is null.");
    }
    let value;
    if (!argument) {
      value = parameter2.defaultValue ? evalNode(parameter2.defaultValue, objectRegistry, methodEnv, eventPipeline, instance) : null;
    } else {
      value = args[i];
    }
    methodEnv.define(parameter2.name, value);
  }
  return evalReturn(methodNode.children, objectRegistry, methodEnv, eventPipeline, instance, methodNode.returnType);
}
function autoBoxIfNeeded(value, objectRegistry) {
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
  const instance = classDef.constructEmptyInstance();
  instance.__nativeInstance = new classDef.nativeInstance(fromLyraValue(primitiveValue));
  return instance;
}

// language/src/core/event/events.ts
var LyraEvents = {
  LYRA_INSTANCE_DIRTY_STATE: "lyra:instance_dirty_state",
  LYRA_INSTANCE_CLEAN_STATE: "lyra:instance_clean_state"
};
var events_default = LyraEvents;

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
  __fieldsInitialized = false;
  __instanceFields;
  __staticFields;
  __nativeInstance = null;
  __isDirty = false;
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
  markDirty(eventPipeline) {
    this.__isDirty = true;
    eventPipeline.emit(events_default.LYRA_INSTANCE_DIRTY_STATE, { instance: this });
  }
  markClean(eventPipeline) {
    this.__isDirty = false;
    eventPipeline.emit(events_default.LYRA_INSTANCE_CLEAN_STATE, { instance: this });
  }
  findeMethodNode(name) {
    return this.__classDef.findMethodNode(name);
  }
  hasPublicProperty(name) {
    try {
      return this.__classDef.findInstanceFieldDefinition(name).modifiers.public;
    } catch (e) {}
    return false;
  }
  setPublicProperty(name, value, expected = null) {
    let fieldDefinition = this.__classDef.findInstanceFieldDefinition(name);
    if (fieldDefinition.modifiers.public) {
      this.__instanceFields[name] = castValue(value, expected);
      return;
    }
    throwRuntimeError(`Field ${name} is not public.`);
  }
  initializeInstanceFields(objectRegistry, environment, eventPipeline) {
    this.__classDef.initializeInstanceFields(this, objectRegistry, environment, eventPipeline);
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

class ExecutionStop extends Error {
  returnValue;
  returnType;
  constructor(returnValue2, returnType) {
    super("Execution stoppend with return.");
    this.returnValue = returnValue2;
    this.returnType = returnType;
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
  findMethodNode(name) {
    const node = this.node.children.find((node2) => node2.name === name);
    if (node instanceof ASTMethodNode) {
      return node;
    }
    throwRuntimeError(`Method ${name} not found in class ${this.name}.`);
  }
  findInstanceFieldDefinition(name) {
    const fieldDefinition = this.instanceFields.find((field) => field.name === name);
    if (fieldDefinition instanceof ClassFieldDefinition) {
      return fieldDefinition;
    }
    throwRuntimeError(`Field ${name} not found in class ${this.name}.`);
  }
  constructEmptyInstance() {
    return new Instance(this);
  }
  constructNativeInstance(args = []) {
    const instance = this.constructEmptyInstance();
    instance.__nativeInstance = new this.nativeInstance(...args);
    return instance;
  }
  constructNewInstanceWithoutArguments(objectRegistry, environment, eventPipeline) {
    return this.constructNewInstance([], objectRegistry, environment, eventPipeline);
  }
  constructNewInstance(args, objectRegistry, environment, eventPipeline) {
    const newNode = new ASTNewNode(args, new ASTTypeNode(ASTTypeNode.KIND_SIMPLE, this.name));
    return this.constructInstanceByNewNode(newNode, objectRegistry, environment, eventPipeline);
  }
  constructInstanceByNewNode(expr, objectRegistry, environment, eventPipeline) {
    const instance = this.constructEmptyInstance();
    objectRegistry.instances.register(instance);
    instance.initializeInstanceFields(objectRegistry, environment, eventPipeline);
    if (!this.constructorMethod) {
      return instance;
    }
    const constructor = this.constructorMethod;
    const constructorEnv = new Environment(environment);
    const constructorArgs = evalMethodArguments(expr, constructor.parameters, objectRegistry, environment, eventPipeline, instance);
    constructorEnv.define(GRAMMAR.THIS, instance);
    for (let i = 0;i < constructorArgs.length; i++) {
      const parameter2 = constructor.parameters[i];
      if (parameter2) {
        constructorEnv.define(parameter2.name, constructorArgs[i]);
      }
    }
    for (const child of constructor.children) {
      evalNode(child, objectRegistry, constructorEnv, eventPipeline, instance);
    }
    return instance;
  }
  constructNativeInstanceByNewNode(expr, objectRegistry, environment, eventPipeline) {
    const instance = this.constructEmptyInstance();
    objectRegistry.instances.register(instance);
    const constructor = this.constructorMethod;
    const constructorEnv = new Environment(environment);
    const constructorArgs = evalMethodArguments(expr, constructor ? constructor.parameters : [], objectRegistry, environment, eventPipeline, instance);
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
  initializeInstanceFields(instance, objectRegistry, environment, eventPipeline) {
    if (instance.__fieldsInitialized) {
      return;
    }
    let rawValue;
    for (const field of this.instanceFields) {
      rawValue = field.initializer ? evalExpression(field.initializer, objectRegistry, environment, eventPipeline) : null;
      instance.__instanceFields[field.name] = castValue(rawValue, field.type);
    }
    for (const field of this.staticFields) {
      rawValue = field.initializer ? evalExpression(field.initializer, objectRegistry, environment, eventPipeline) : null;
      instance.__staticFields[field.name] = castValue(rawValue, field.type);
    }
    instance.__fieldsInitialized = true;
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
  static fromAST(node) {
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
  while (true) {
    if (parser.peekIs(GRAMMAR.GREATER_THAN)) {
      break;
    }
    if (parser.peekIs(GRAMMAR.XML_CLOSE_TAG)) {
      break;
    }
    const nameToken = parser.expectIdentifier();
    parser.expectOperator(GRAMMAR.ASSIGN);
    let value;
    if (parser.peekIs(GRAMMAR.BRACE_OPEN)) {
      if (looksLikeLambda(parser)) {
        value = parseLambda(parser);
      } else {
        parser.next();
        value = parseExpression(parser);
        parser.expectPunctuation(GRAMMAR.BRACE_CLOSE);
      }
    } else {
      value = parseExpression(parser);
    }
    props.set(nameToken.value, value);
    parser.consumeIfText();
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
    this.set(node.name, InterfaceDefinition.fromAST(node));
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
  eventPipeline;
  constructor(environment, objectRegistry, eventPipeline) {
    this.environment = environment;
    this.objectRegistry = objectRegistry;
    this.eventPipeline = eventPipeline;
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
        const annotation = member.annotations?.find((annotation2) => annotation2.name === "test");
        if (!annotation) {
          continue;
        }
        this.runTestCase(classNode, member, annotation);
      }
    }
  }
  runTestCase(classNode, methodNode, annotation) {
    const instance = ClassDefinition.fromAST(classNode).constructNewInstanceWithoutArguments(this.objectRegistry, this.environment, this.eventPipeline);
    const properties = evalAnnotationProperties(annotation);
    const title = properties.title ?? `${classNode.name}.${methodNode.name}`;
    let errorMessage = null;
    try {
      callInstanceMethod(instance, methodNode, [], this.objectRegistry, this.environment, this.eventPipeline);
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
  eventPipeline;
  constructor(environment, objectRegistry, eventPipeline) {
    this.environment = environment;
    this.objectRegistry = objectRegistry;
    this.eventPipeline = eventPipeline;
    registerNativeClasses(objectRegistry, environment);
    registerNativeFunctions(environment);
  }
  run(ast) {
    evalNode(ast, this.objectRegistry, this.environment, this.eventPipeline);
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

// language/src/core/program.ts
class LyraScriptProgram {
  globalEnvironment = new Environment;
  globalObjectRegistry = new ObjectRegistry;
  globalEventPipeline;
  typeChecker = new TypeChecker(this.globalObjectRegistry);
  linker = new Linker(this.globalEnvironment, this.globalObjectRegistry, new FetchFileLoader);
  interpreter;
  testSuite;
  isDebug = false;
  startTime = 0;
  constructor(isDebug = false, globalEventPipeline = new EventPipeline) {
    this.isDebug = isDebug;
    this.interpreter = new Interpreter(this.globalEnvironment, this.globalObjectRegistry, globalEventPipeline);
    this.testSuite = new TestSuites(this.globalEnvironment, this.globalObjectRegistry, globalEventPipeline);
    this.globalEventPipeline = globalEventPipeline;
  }
  getGlobalObjectRegistry() {
    return this.globalObjectRegistry;
  }
  getGlobalEnvironment() {
    return this.globalEnvironment;
  }
  getGlobalEventPipeline() {
    return this.globalEventPipeline;
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

// language/src/host/events.ts
var DOM_EVENT = "dom:event";
var isEvent = (propertyKey) => {
  return propertyKey.toLowerCase().startsWith("on");
};
var Events = {
  DOM_EVENT,
  isEvent
};
var events_default2 = Events;

// language/src/host/dom.ts
class HTMLElementCreator {
  applicationRuntime;
  vdom;
  textBuffer = [];
  constructor(applicationRuntime, vdom) {
    this.applicationRuntime = applicationRuntime;
    this.vdom = vdom;
  }
  create(vNode) {
    if (typeof vNode === "string") {
      return document.createTextNode(vNode);
    }
    if (vNode.isComponent && vNode.component === null) {
      vNode.component = this.applicationRuntime.createInstance(vNode.tag);
      for (const [propertyKey, value] of Object.entries(vNode.props)) {
        if (vNode.component.hasPublicProperty(propertyKey)) {
          vNode.component.setPublicProperty(propertyKey, value);
        }
      }
      const subTree = this.applicationRuntime.callMethod(vNode.component, "render", []);
      this.vdom.register(vNode.component, subTree);
      const element2 = this.create(subTree);
      for (const [propertyKey, value] of Object.entries(vNode.props)) {
        element2.setAttribute(propertyKey, String(value));
      }
      vNode.dom = element2;
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
      if (events_default2.isEvent(propertyKey)) {
        this.applicationRuntime.addEventHandler(element, propertyKey, value);
      } else {
        element.setAttribute(propertyKey, String(value));
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
  constructor(mountPoint, applicationRuntime, vdom, elementCreator = new HTMLElementCreator(applicationRuntime, vdom)) {
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
    if (newNode.isComponent && newNode.component === null) {
      newNode.component = oldNode.component;
      const newElement = this.elementCreator.create(this.applicationRuntime.renderComponent(oldNode.component));
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
        if (events_default2.isEvent(propertyKey)) {
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
      if (events_default2.isEvent(propertyKey)) {
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
  globalEventPipeline;
  program;
  _globalObjectRegistry;
  _globalEnvironment;
  rootInstance = null;
  constructor(globalEventPipeline = new EventPipeline, isDebug = false) {
    this.globalEventPipeline = globalEventPipeline;
    this.program = new LyraScriptProgram(isDebug, this.globalEventPipeline);
    this._globalObjectRegistry = this.program.getGlobalObjectRegistry();
    this._globalEnvironment = this.program.getGlobalEnvironment();
  }
  getObjectRegistry() {
    return this._globalObjectRegistry;
  }
  getEnvironment() {
    return this._globalEnvironment;
  }
  getRootInstance() {
    if (this.rootInstance === null) {
      throw new Error("No root instance available.");
    }
    return this.rootInstance;
  }
  createInstance(className) {
    return this.getClassDefinition(className).constructNewInstanceWithoutArguments(this._globalObjectRegistry, this._globalEnvironment, this.globalEventPipeline);
  }
  callRootInstanceMethod(methodName, args) {
    return this.callInstanceMethod(this.getRootInstance(), methodName, args);
  }
  callInstanceMethod(instance, methodName, args) {
    return callInstanceMethod(instance, instance.findeMethodNode(methodName), args, this._globalObjectRegistry, this._globalEnvironment, this.globalEventPipeline);
  }
  async executeEntryFile(url, className) {
    return this.program.execute(await fetchSource(url)).then(() => {
      this.rootInstance = this.createInstance(className);
    });
  }
  createEvent(event) {
    return lyraEventClassDef.constructNativeInstance([event]);
  }
  createEventHandler(handler, eventName) {
    return (event) => {
      this.globalEventPipeline.emit(eventName, {
        invoke: () => {
          const instance = handler.functionEnv.get(GRAMMAR.THIS);
          handler.evalCall(instance, this.createEvent(event));
        },
        event
      });
    };
  }
  getClassDefinition(className) {
    return this._globalObjectRegistry.classes.get(className);
  }
}
// language/src/host/registry.ts
class EventHandlerRegistry {
  registry = new WeakMap;
  register(element, propertyKey, handler) {
    const eventHandlers = this.registry.get(element) ?? {};
    eventHandlers[propertyKey] = handler;
    this.registry.set(element, eventHandlers);
  }
  unregister(element, propertyKey) {
    const eventHandlers = this.registry.get(element) ?? {};
    const eventHandler = eventHandlers[propertyKey];
    if (eventHandler) {
      delete eventHandlers[propertyKey];
      this.registry.set(element, eventHandlers);
      return eventHandler;
    }
    return null;
  }
}

class VDOM {
  instanceMap = new Map;
  register(instance, node) {
    this.instanceMap.set(instance.id, node);
  }
  getNodeByInstance(instance) {
    const vNode = this.instanceMap.get(instance.id);
    if (!vNode) {
      throw new Error(`Instance with id ${instance.id} not found.`);
    }
    return vNode;
  }
}

// language/src/host/runtime.ts
class AbstractApplicationRuntime {
  _engine;
  _eventPipeline;
  eventHandlerRegistry;
  constructor(_engine, _eventPipeline = new EventPipeline, eventHandlerRegistry = new EventHandlerRegistry) {
    this._engine = _engine;
    this._eventPipeline = _eventPipeline;
    this.eventHandlerRegistry = eventHandlerRegistry;
  }
  get engine() {
    return this._engine;
  }
  get eventPipeline() {
    return this._eventPipeline;
  }
  renderRootComponent() {
    return this.renderComponent(this._engine.getRootInstance());
  }
  renderComponent(instance) {
    return this.callMethod(instance, "render", []);
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
    const eventHandler = this.engine.createEventHandler(handler, events_default2.DOM_EVENT);
    this.eventHandlerRegistry.register(element, propertyKey, eventHandler);
    element.addEventListener(eventName, eventHandler);
  }
  removeEventHandler(element, propertyKey) {
    const eventName = propertyKey.slice(2).toLowerCase();
    const eventHandler = this.eventHandlerRegistry.unregister(element, propertyKey);
    if (eventHandler) {
      element.removeEventListener(eventName, eventHandler);
    }
  }
}

class WebApplicationRuntime extends AbstractApplicationRuntime {
  vdom = new VDOM;
  patcher;
  currentVNode = null;
  isRendering = false;
  constructor(mountPoint, isDebug = false, eventPipeline = new EventPipeline, eventHandlerRegistry = new EventHandlerRegistry) {
    super(new WebLyraScript(eventPipeline, isDebug), eventPipeline, eventHandlerRegistry);
    this.patcher = new HTMLElementPatcher(mountPoint, this, this.vdom);
    this.exposeRuntime();
  }
  async start(url, className = "App") {
    await this.engine.executeEntryFile(url, className);
    this.listenToDomEvents();
    this.requestFullRender();
  }
  requestFullRender() {
    if (this.isRendering) {
      return;
    }
    queueMicrotask(() => {
      this.performFullRender();
    });
  }
  requestComponentRender(oldVNode, instance) {
    if (this.isRendering) {
      return;
    }
    queueMicrotask(() => {
      this.performComponentRender(oldVNode, instance);
    });
  }
  performFullRender() {
    this.isRendering = true;
    const next = this.renderRootComponent();
    this.patcher.patch(this.currentVNode, next);
    this.currentVNode = next;
    this.vdom.register(this.engine.getRootInstance(), next);
    this.isRendering = false;
  }
  performComponentRender(oldVNode, instance) {
    this.isRendering = true;
    const next = this.renderComponent(instance);
    this.patcher.patch(oldVNode, next);
    this.vdom.register(instance, next);
    instance.markClean(this.eventPipeline);
    this.isRendering = false;
  }
  listenToDomEvents() {
    this.eventPipeline.on(events_default2.DOM_EVENT, ({ invoke }) => {
      invoke();
    });
    this.eventPipeline.on(events_default.LYRA_INSTANCE_DIRTY_STATE, ({ instance }) => {
      this.requestComponentRender(this.vdom.getNodeByInstance(instance), instance);
    });
  }
  exposeRuntime() {
    const global = window;
    global.__LYRA__ = global.__LYRA__ || {
      version: "0.0.1",
      runtime: this
    };
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

//# debugId=FDA0A690CCB2CB4564756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibGFuZ3VhZ2Uvc3JjL2NvcmUvZ3JhbW1hci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9hc3QudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvdG9rZW5pemVyL3Rva2VuaXplci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9lcnJvcnMudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvbmF0aXZlX2NsYXNzLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX2NvbnZlcnNpb24udHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9zdHJpbmcudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9zeXN0ZW0udHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9hc3NlcnQudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9udW1iZXIudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9hcnJheS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9ldmVudC9zdGF0ZS50cyIsICJsYW5ndWFnZS9zcmMvbGlicmFyeS9jbGFzc2VzL3N0YXRlLnRzIiwgImxhbmd1YWdlL3NyYy9saWJyYXJ5L2NsYXNzZXMvZXZlbnQudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvbmF0aXZlX2NsYXNzZXMudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvbmF0aXZlX2Z1bmN0aW9ucy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS90eXBlcy90eXBlX29iamVjdHMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvdHlwZXMvYXV0b2JveGluZy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9ydW50aW1lLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2V2ZW50L2V2ZW50cy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL3BhcnNlci9wYXJzZXJfc3RhdG1lbnRzLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL3BhcnNlci9wYXJzZXIudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcmVnaXN0cnkudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvdHlwZXMvdHlwZWNoZWNrZXIudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvbGlua2VyL2RlcGVuZGVuY2llcy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9saW5rZXIvbGlua2VyLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL3Rlc3RzL3Rlc3RzdWl0ZXMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXIudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvbG9hZGVycy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9ldmVudC9waXBlbGluZS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9wcm9ncmFtLnRzIiwgImxhbmd1YWdlL3NyYy9ob3N0L2V2ZW50cy50cyIsICJsYW5ndWFnZS9zcmMvaG9zdC9kb20udHMiLCAibGFuZ3VhZ2Uvc3JjL2hvc3QvZW5naW5lLnRzIiwgImxhbmd1YWdlL3NyYy9ob3N0L3JlZ2lzdHJ5LnRzIiwgImxhbmd1YWdlL3NyYy9ob3N0L3J1bnRpbWUudHMiLCAibGFuZ3VhZ2Uvc3JjL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWwogICAgImltcG9ydCB0eXBlIHtTb3VyY2V9IGZyb20gXCIuL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmV4cG9ydCBjbGFzcyBHUkFNTUFSIHtcblx0c3RhdGljIElNUE9SVDogc3RyaW5nID0gJ2ltcG9ydCc7XG5cdHN0YXRpYyBGUk9NOiBzdHJpbmcgPSAnZnJvbSc7XG5cdHN0YXRpYyBMRVQ6IHN0cmluZyA9ICdsZXQnO1xuXHRzdGF0aWMgT1BFTjogc3RyaW5nID0gJ29wZW4nO1xuXHRzdGF0aWMgQ0xBU1M6IHN0cmluZyA9ICdjbGFzcyc7XG5cdHN0YXRpYyBJTlRFUkZBQ0U6IHN0cmluZyA9ICdpbnRlcmZhY2UnO1xuXHRzdGF0aWMgRVhURU5EUzogc3RyaW5nID0gJ2V4dGVuZHMnO1xuXHRzdGF0aWMgSU1QTEVNRU5UUzogc3RyaW5nID0gJ2ltcGxlbWVudHMnO1xuXHRzdGF0aWMgQ09OU1RSVUNUT1I6IHN0cmluZyA9ICdjb25zdHJ1Y3Rvcic7XG5cdHN0YXRpYyBORVc6IHN0cmluZyA9ICduZXcnO1xuXHRzdGF0aWMgVEhJUzogc3RyaW5nID0gJ3RoaXMnO1xuXHRzdGF0aWMgUFVCTElDOiBzdHJpbmcgPSAncHVibGljJztcblx0c3RhdGljIFBSSVZBVEU6IHN0cmluZyA9ICdwcml2YXRlJztcblx0c3RhdGljIFNUQVRJQzogc3RyaW5nID0gJ3N0YXRpYyc7XG5cdHN0YXRpYyBSRUFET05MWTogc3RyaW5nID0gJ3JlYWRvbmx5Jztcblx0c3RhdGljIFJFVFVSTjogc3RyaW5nID0gJ3JldHVybic7XG5cdHN0YXRpYyBTVVBFUjogc3RyaW5nID0gJ3N1cGVyJztcblx0c3RhdGljIFRSVUU6IHN0cmluZyA9ICd0cnVlJztcblx0c3RhdGljIEZBTFNFOiBzdHJpbmcgPSAnZmFsc2UnO1xuXHRzdGF0aWMgSUY6IHN0cmluZyA9ICdpZic7XG5cdHN0YXRpYyBFTFNFOiBzdHJpbmcgPSAnZWxzZSc7XG5cdHN0YXRpYyBNQVRDSDogc3RyaW5nID0gJ21hdGNoJztcblx0c3RhdGljIERFRkFVTFQ6IHN0cmluZyA9ICdkZWZhdWx0Jztcblx0c3RhdGljIEZPUkVBQ0g6IHN0cmluZyA9ICdmb3JlYWNoJztcblx0c3RhdGljIElOOiBzdHJpbmcgPSAnaW4nO1xuXHRzdGF0aWMgTlVMTDogc3RyaW5nID0gJ251bGwnO1xuXHRzdGF0aWMgVkRPTTogc3RyaW5nID0gJ3Zkb20nO1xuXG5cdHN0YXRpYyBCUkFDS0VUX1NRVUFSRV9PUEVOOiBzdHJpbmcgPSAnWyc7XG5cdHN0YXRpYyBCUkFDS0VUX1NRVUFSRV9DTE9TRTogc3RyaW5nID0gJ10nO1xuXHRzdGF0aWMgQlJBQ0VfT1BFTjogc3RyaW5nID0gJ3snO1xuXHRzdGF0aWMgQlJBQ0VfQ0xPU0U6IHN0cmluZyA9ICd9Jztcblx0c3RhdGljIFBBUkVOVEhFU0VTX09QRU46IHN0cmluZyA9ICcoJztcblx0c3RhdGljIFBBUkVOVEhFU0VTX0NMT1NFOiBzdHJpbmcgPSAnKSc7XG5cdHN0YXRpYyBTRU1JQ09MT046IHN0cmluZyA9ICc7Jztcblx0c3RhdGljIENPTE9OOiBzdHJpbmcgPSAnOic7XG5cdHN0YXRpYyBDT01NQTogc3RyaW5nID0gJywnO1xuXG5cdHN0YXRpYyBBUlJPVzogc3RyaW5nID0gJy0+Jztcblx0c3RhdGljIERPVDogc3RyaW5nID0gJy4nO1xuXHRzdGF0aWMgQVNTSUdOOiBzdHJpbmcgPSAnPSc7XG5cdHN0YXRpYyBQTFVTOiBzdHJpbmcgPSAnKyc7XG5cdHN0YXRpYyBNSU5VUzogc3RyaW5nID0gJy0nO1xuXHRzdGF0aWMgRElWSURFOiBzdHJpbmcgPSAnLyc7XG5cdHN0YXRpYyBNVUxUSVBMWTogc3RyaW5nID0gJyonO1xuXHRzdGF0aWMgTU9EVUxVUzogc3RyaW5nID0gJyUnO1xuXG5cdHN0YXRpYyBFWENMQU1BVElPTl9NQVJLOiBzdHJpbmcgPSAnISc7XG5cdHN0YXRpYyBRVUVTVElPTl9NQVJLOiBzdHJpbmcgPSAnPyc7XG5cdHN0YXRpYyBMRVNTX1RIQU46IHN0cmluZyA9ICc8Jztcblx0c3RhdGljIEdSRUFURVJfVEhBTjogc3RyaW5nID0gJz4nO1xuXHRzdGF0aWMgTEVTU19FUVVBTDogc3RyaW5nID0gJzw9Jztcblx0c3RhdGljIEdSRUFURVJfRVFVQUw6IHN0cmluZyA9ICc+PSc7XG5cdHN0YXRpYyBFUVVBTDogc3RyaW5nID0gJz09Jztcblx0c3RhdGljIE5PVF9FUVVBTDogc3RyaW5nID0gJyE9Jztcblx0c3RhdGljIEFORDogc3RyaW5nID0gJyYmJztcblx0c3RhdGljIE9SOiBzdHJpbmcgPSAnfHwnO1xuXG5cdHN0YXRpYyBYTUxfQ0xPU0VfVEFHOiBzdHJpbmcgPSAnLz4nO1xuXHRzdGF0aWMgWE1MX09QRU5fQ0xPU0VfVEFHOiBzdHJpbmcgPSAnPC8nO1xuXG5cdHN0YXRpYyBLRVlXT1JEUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5JTVBPUlQsXG5cdFx0R1JBTU1BUi5GUk9NLFxuXHRcdEdSQU1NQVIuT1BFTixcblx0XHRHUkFNTUFSLkNMQVNTLFxuXHRcdEdSQU1NQVIuSU5URVJGQUNFLFxuXHRcdEdSQU1NQVIuRVhURU5EUyxcblx0XHRHUkFNTUFSLklNUExFTUVOVFMsXG5cdFx0R1JBTU1BUi5QVUJMSUMsXG5cdFx0R1JBTU1BUi5QUklWQVRFLFxuXHRcdEdSQU1NQVIuU1RBVElDLFxuXHRcdEdSQU1NQVIuUkVBRE9OTFksXG5cdFx0R1JBTU1BUi5SRVRVUk4sXG5cdFx0R1JBTU1BUi5MRVQsXG5cdFx0R1JBTU1BUi5ORVcsXG5cdFx0R1JBTU1BUi5USElTLFxuXHRcdEdSQU1NQVIuSUYsXG5cdFx0R1JBTU1BUi5FTFNFLFxuXHRcdEdSQU1NQVIuTUFUQ0gsXG5cdFx0R1JBTU1BUi5ERUZBVUxULFxuXHRcdEdSQU1NQVIuRk9SRUFDSCxcblx0XHRHUkFNTUFSLklOLFxuXHRcdEdSQU1NQVIuTlVMTCxcblx0XHRHUkFNTUFSLlZET00sXG5cdF07XG5cdHN0YXRpYyBBUklUSE1FVElDOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLlBMVVMsXG5cdFx0R1JBTU1BUi5NSU5VUyxcblx0XHRHUkFNTUFSLkRJVklERSxcblx0XHRHUkFNTUFSLk1VTFRJUExZLFxuXHRcdEdSQU1NQVIuTU9EVUxVU1xuXHRdO1xuXHRzdGF0aWMgQ09NUEFSSVNPTjogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5MRVNTX1RIQU4sXG5cdFx0R1JBTU1BUi5HUkVBVEVSX1RIQU4sXG5cdFx0R1JBTU1BUi5MRVNTX0VRVUFMLFxuXHRcdEdSQU1NQVIuR1JFQVRFUl9FUVVBTFxuXHRdO1xuXHRzdGF0aWMgRVFVQUxJVFk6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuRVFVQUwsXG5cdFx0R1JBTU1BUi5OT1RfRVFVQUxcblx0XTtcblx0c3RhdGljIExPR0lDQUw6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuQU5ELFxuXHRcdEdSQU1NQVIuT1Jcblx0XTtcblx0c3RhdGljIE9QRVJBVE9SUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5FWENMQU1BVElPTl9NQVJLLFxuXHRcdEdSQU1NQVIuUVVFU1RJT05fTUFSSyxcblx0XHRHUkFNTUFSLkFSUk9XLFxuXHRcdEdSQU1NQVIuRE9ULFxuXHRcdEdSQU1NQVIuQVNTSUdOLFxuXHRcdEdSQU1NQVIuUExVUyxcblx0XHRHUkFNTUFSLk1JTlVTLFxuXHRcdEdSQU1NQVIuRElWSURFLFxuXHRcdEdSQU1NQVIuTVVMVElQTFksXG5cdFx0R1JBTU1BUi5NT0RVTFVTLFxuXHRcdEdSQU1NQVIuTEVTU19USEFOLFxuXHRcdEdSQU1NQVIuR1JFQVRFUl9USEFOLFxuXHRcdEdSQU1NQVIuTEVTU19FUVVBTCxcblx0XHRHUkFNTUFSLkdSRUFURVJfRVFVQUwsXG5cdFx0R1JBTU1BUi5FUVVBTCxcblx0XHRHUkFNTUFSLk5PVF9FUVVBTCxcblx0XHRHUkFNTUFSLkFORCxcblx0XHRHUkFNTUFSLk9SLFxuXHRdO1xuXHRzdGF0aWMgTUFUSF9PUEVSQVRPUlM6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuUExVUyxcblx0XHRHUkFNTUFSLk1JTlVTLFxuXHRcdEdSQU1NQVIuRElWSURFLFxuXHRcdEdSQU1NQVIuTVVMVElQTFksXG5cdFx0R1JBTU1BUi5NT0RVTFVTXG5cdF07XG5cdHN0YXRpYyBMT0dJQ19PUEVSQVRPUlM6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuTEVTU19USEFOLFxuXHRcdEdSQU1NQVIuR1JFQVRFUl9USEFOLFxuXHRcdEdSQU1NQVIuTEVTU19FUVVBTCxcblx0XHRHUkFNTUFSLkdSRUFURVJfRVFVQUwsXG5cdFx0R1JBTU1BUi5FUVVBTCxcblx0XHRHUkFNTUFSLk5PVF9FUVVBTCxcblx0XHRHUkFNTUFSLkFORCxcblx0XHRHUkFNTUFSLk9SLFxuXHRdO1xuXHRzdGF0aWMgUFVOQ1RVQVRJT05TOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX09QRU4sXG5cdFx0R1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9DTE9TRSxcblx0XHRHUkFNTUFSLkJSQUNFX09QRU4sXG5cdFx0R1JBTU1BUi5CUkFDRV9DTE9TRSxcblx0XHRHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4sXG5cdFx0R1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSxcblx0XHRHUkFNTUFSLlNFTUlDT0xPTixcblx0XHRHUkFNTUFSLkNPTE9OLFxuXHRcdEdSQU1NQVIuQ09NTUFcblx0XTtcblx0c3RhdGljIERPTV9PUEVSQVRPUlM6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuQVJST1csXG5cdFx0R1JBTU1BUi5ET1QsXG5cdFx0R1JBTU1BUi5BU1NJR04sXG5cdFx0R1JBTU1BUi5MRVNTX1RIQU4sXG5cdFx0R1JBTU1BUi5HUkVBVEVSX1RIQU4sXG5cdFx0R1JBTU1BUi5YTUxfT1BFTl9DTE9TRV9UQUcsXG5cdFx0R1JBTU1BUi5YTUxfQ0xPU0VfVEFHXG5cdF07XG5cdHN0YXRpYyBET01fUFVOQ1RVQVRJT05TOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX09QRU4sXG5cdFx0R1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9DTE9TRSxcblx0XHRHUkFNTUFSLkJSQUNFX09QRU4sXG5cdFx0R1JBTU1BUi5CUkFDRV9DTE9TRSxcblx0XHRHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4sXG5cdFx0R1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSxcblx0XHRHUkFNTUFSLlNFTUlDT0xPTixcblx0XHRHUkFNTUFSLkNPTE9OLFxuXHRcdEdSQU1NQVIuQ09NTUFcblx0XTtcbn1cblxuZXhwb3J0IGNsYXNzIFRZUEVfRU5VTSB7XG5cdHN0YXRpYyBNSVhFRDogc3RyaW5nID0gJ21peGVkJztcblx0c3RhdGljIFZPSUQ6IHN0cmluZyA9ICd2b2lkJztcblx0c3RhdGljIE5VTUJFUjogc3RyaW5nID0gJ251bWJlcic7XG5cdHN0YXRpYyBTVFJJTkc6IHN0cmluZyA9ICdzdHJpbmcnO1xuXHRzdGF0aWMgQk9PTEVBTjogc3RyaW5nID0gJ2Jvb2xlYW4nO1xuXHRzdGF0aWMgQVJSQVk6IHN0cmluZyA9ICdhcnJheSc7XG5cdHN0YXRpYyBOVUxMOiBzdHJpbmcgPSAnbnVsbCc7XG59XG5cbmV4cG9ydCBjbGFzcyBSdWxlcyB7XG5cdHN0YXRpYyBLRVlXT1JEUzogU2V0PHN0cmluZz4gPSBuZXcgU2V0KEdSQU1NQVIuS0VZV09SRFMpO1xuXHRzdGF0aWMgT1BFUkFUT1JTOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoR1JBTU1BUi5PUEVSQVRPUlMpO1xuXHRzdGF0aWMgUFVOQ1RVQVRJT05TOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoR1JBTU1BUi5QVU5DVFVBVElPTlMpO1xuXHRzdGF0aWMgRE9NX09QRVJBVE9SUzogU2V0PHN0cmluZz4gPSBuZXcgU2V0KEdSQU1NQVIuRE9NX09QRVJBVE9SUyk7XG5cdHN0YXRpYyBET01fUFVOQ1RVQVRJT05TOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoR1JBTU1BUi5ET01fUFVOQ1RVQVRJT05TKTtcblx0c3RhdGljIENPTU1FTlRfTElORTogc3RyaW5nID0gJy8vJztcblxuXHRpc0FscGhhKGNoYXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAvW2Etel9dL2kudGVzdChjaGFyKTtcblx0fVxuXG5cdGlzTnVtZXJpYyhjaGFyOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gL1swLTldLy50ZXN0KGNoYXIpO1xuXHR9XG5cblx0aXNBbHBoYU51bWVyaWMoY2hhcjogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaXNBbHBoYShjaGFyKSB8fCB0aGlzLmlzTnVtZXJpYyhjaGFyKTtcblx0fVxuXG5cdGlzV2hpdGVzcGFjZShjaGFyOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gL1xccy8udGVzdChjaGFyKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVG9rZW5UeXBlIHtcblx0c3RhdGljIENPTU1FTlQ6IHN0cmluZyA9ICdjb21tZW50Jztcblx0c3RhdGljIEFOTk9UQVRJT046IHN0cmluZyA9ICdhbm5vdGF0aW9uJztcblx0c3RhdGljIElERU5USUZJRVI6IHN0cmluZyA9ICdpZGVudGlmaWVyJztcblx0c3RhdGljIEtFWVdPUkQ6IHN0cmluZyA9ICdrZXl3b3JkJztcblx0c3RhdGljIFBVTkNUVUFUSU9OOiBzdHJpbmcgPSAncHVuY3R1YXRpb24nO1xuXHRzdGF0aWMgTlVNQkVSOiBzdHJpbmcgPSAnbnVtYmVyJztcblx0c3RhdGljIFNUUklORzogc3RyaW5nID0gJ3N0cmluZyc7XG5cdHN0YXRpYyBCT09MRUFOOiBzdHJpbmcgPSAnYm9vbGVhbic7XG5cdHN0YXRpYyBPUEVSQVRPUjogc3RyaW5nID0gJ29wZXJhdG9yJztcblx0c3RhdGljIFRFWFQ6IHN0cmluZyA9ICd0ZXh0Jztcblx0c3RhdGljIEVPRjogc3RyaW5nID0gJ2VvZic7XG59XG5cbmV4cG9ydCBjbGFzcyBUb2tlbiB7XG5cdHR5cGU6IHN0cmluZztcblx0dmFsdWU6IHN0cmluZztcblx0bGluZTogbnVtYmVyID0gMTtcblx0Y29sdW1uOiBudW1iZXIgPSAxO1xuXHRzdGFydDogbnVtYmVyO1xuXHRlbmQ6IG51bWJlcjtcblx0c291cmNlOiBTb3VyY2U7XG5cblx0Y29uc3RydWN0b3IodHlwZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlciwgc291cmNlOiBTb3VyY2UpIHtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0XHR0aGlzLnN0YXJ0ID0gc3RhcnQ7XG5cdFx0dGhpcy5lbmQgPSBlbmQ7XG5cdFx0dGhpcy5zb3VyY2UgPSBzb3VyY2U7XG5cdH1cblxuXHR3aXRoTGluZUFuZENvbHVtbihsaW5lOiBudW1iZXIsIGNvbHVtbjogbnVtYmVyKTogVG9rZW4ge1xuXHRcdHRoaXMubGluZSA9IGxpbmU7XG5cdFx0dGhpcy5jb2x1bW4gPSBjb2x1bW47XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtHUkFNTUFSLCBUWVBFX0VOVU19IGZyb20gXCIuL2dyYW1tYXJcIjtcbmltcG9ydCB7TW9kaWZpZXJzLCBTdXBlckNsYXNzfSBmcm9tIFwiLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge1NvdXJjZVNwYW59IGZyb20gXCIuL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmV4cG9ydCBjbGFzcyBBU1ROb2RlVHlwZSB7XG5cdHN0YXRpYyBQUk9HUkFNTSA9ICdwcm9ncmFtJztcblx0c3RhdGljIElOREVYID0gJ2luZGV4Jztcblx0c3RhdGljIElERU5USUZJRVIgPSAnaWRlbnRpZmllcic7XG5cdHN0YXRpYyBBTk5PVEFUSU9OID0gJ2Fubm90YXRpb24nO1xuXHRzdGF0aWMgUEFSQU1FVEVSID0gJ3BhcmFtZXRlcic7XG5cdHN0YXRpYyBJTVBPUlQgPSBHUkFNTUFSLklNUE9SVDtcblx0c3RhdGljIE5VTUJFUiA9IFRZUEVfRU5VTS5OVU1CRVI7XG5cdHN0YXRpYyBTVFJJTkcgPSBUWVBFX0VOVU0uU1RSSU5HO1xuXHRzdGF0aWMgQk9PTEVBTiA9IFRZUEVfRU5VTS5CT09MRUFOO1xuXHRzdGF0aWMgTlVMTCA9IFRZUEVfRU5VTS5OVUxMO1xuXHRzdGF0aWMgTkVXID0gR1JBTU1BUi5ORVc7XG5cdHN0YXRpYyBDTEFTUyA9IEdSQU1NQVIuQ0xBU1M7XG5cdHN0YXRpYyBJTlRFUkZBQ0UgPSBHUkFNTUFSLklOVEVSRkFDRTtcblx0c3RhdGljIENPTlNUUlVDVE9SID0gR1JBTU1BUi5DT05TVFJVQ1RPUjtcblx0c3RhdGljIFRISVMgPSBHUkFNTUFSLlRISVM7XG5cdHN0YXRpYyBSRVRVUk4gPSBHUkFNTUFSLlJFVFVSTjtcblx0c3RhdGljIFZET00gPSAndmRvbV9kZWNsYXJhdGlvbic7XG5cdHN0YXRpYyBWRE9NX1RFWFQgPSAndmRvbV90ZXh0X2RlY2xhcmF0aW9uJztcblx0c3RhdGljIFVOQVJZID0gJ3VuYXJ5X2V4cHJlc3Npb24nO1xuXHRzdGF0aWMgTEFNQkRBID0gJ2xhbWJkYV9leHByZXNzaW9uJztcblx0c3RhdGljIEFSUkFZID0gJ2FycmF5X2RlY2xhcmF0aW9uJztcblx0c3RhdGljIFRZUEUgPSAndHlwZV9kZWNsYXJhdGlvbic7XG5cdHN0YXRpYyBGSUVMRCA9ICdmaWVsZF9kZWNsYXJhdGlvbic7XG5cdHN0YXRpYyBNRU1CRVIgPSAnbWVtYmVyX2V4cHJlc3Npb24nO1xuXHRzdGF0aWMgTUVUSE9EID0gJ21ldGhvZF9kZWNsYXJhdGlvbic7XG5cdHN0YXRpYyBDQUxMID0gJ2NhbGxfZXhwcmVzc2lvbic7XG5cdHN0YXRpYyBWQVJJQUJMRSA9ICd2YXJpYWJsZV9kZWNsYXJhdGlvbic7XG5cdHN0YXRpYyBFWFBSRVNTSU9OID0gJ2V4cHJlc3Npb25fc3RhdGVtZW50Jztcblx0c3RhdGljIEJJTkFSWSA9ICdiaW5hcnlfZXhwcmVzc2lvbic7XG5cdHN0YXRpYyBBU1NJR05NRU5UID0gJ2Fzc2lnbm1lbnRfZXhwcmVzc2lvbic7XG5cdHN0YXRpYyBJRiA9ICdpZl9zdGF0ZW1lbnQnO1xuXHRzdGF0aWMgVEhFTiA9ICd0aGVuX3N0YXRlbWVudCc7XG5cdHN0YXRpYyBFTFNFID0gJ2Vsc2Vfc3RhdGVtZW50Jztcblx0c3RhdGljIE1BVENIID0gJ21hdGNoX3N0YXRlbWVudCc7XG5cdHN0YXRpYyBNQVRDSF9DQVNFID0gJ21hdGNoX2Nhc2Vfc3RhdGVtZW50Jztcblx0c3RhdGljIEZPUkVBQ0ggPSAnZm9yZWFjaF9zdGF0ZW1lbnQnO1xufVxuXG5leHBvcnQgY2xhc3MgQVNUTm9kZSB7XG5cdGlzRXhwcmVzc2lvbjogYm9vbGVhbiA9IGZhbHNlO1xuXHRuYW1lOiBzdHJpbmcgPSAnJztcblxuXHRzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGw7XG5cdHR5cGU6IHN0cmluZztcblx0dmFsdWU6IGFueSB8IG51bGwgPSBudWxsO1xuXHRjaGlsZHJlbjogQVNUTm9kZVtdO1xuXG5cdGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZywgY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdKSB7XG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHR0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVENhbGxOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGNhbGxlZTogQVNUTm9kZTtcblx0YXJndW1lbnRzOiBBU1ROb2RlW107XG5cblx0Y29uc3RydWN0b3IoY2FsbGVlOiBBU1ROb2RlLCBhcmdzOiBBU1ROb2RlW10gPSBbXSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkNBTEwpO1xuXG5cdFx0dGhpcy5jYWxsZWUgPSBjYWxsZWU7XG5cdFx0dGhpcy5hcmd1bWVudHMgPSBhcmdzO1xuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUTmV3Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRhcmd1bWVudHM6IEFTVE5vZGVbXTtcblx0dHlwZUFubm90YXRpb246IEFTVFR5cGVOb2RlO1xuXG5cdGNvbnN0cnVjdG9yKGFyZ3M6IEFTVE5vZGVbXSwgdHlwZUFubm90YXRpb246IEFTVFR5cGVOb2RlKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuTkVXKTtcblxuXHRcdHRoaXMuYXJndW1lbnRzID0gYXJncztcblx0XHR0aGlzLnR5cGVBbm5vdGF0aW9uID0gdHlwZUFubm90YXRpb247XG5cdFx0dGhpcy5uYW1lID0gdHlwZUFubm90YXRpb24ubmFtZTtcblx0XHR0aGlzLmlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEJpbmFyeU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0bGVmdDogQVNUTm9kZTtcblx0cmlnaHQ6IEFTVE5vZGU7XG5cdG9wZXJhdG9yOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IobGVmdDogQVNUTm9kZSwgcmlnaHQ6IEFTVE5vZGUsIG9wZXJhdG9yOiBzdHJpbmcpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5CSU5BUlkpO1xuXG5cdFx0dGhpcy5sZWZ0ID0gbGVmdDtcblx0XHR0aGlzLnJpZ2h0ID0gcmlnaHQ7XG5cdFx0dGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUQXNzaWdubWVudE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0bGVmdDogQVNUTm9kZTtcblx0cmlnaHQ6IEFTVE5vZGU7XG5cblx0Y29uc3RydWN0b3IobGVmdDogQVNUTm9kZSwgcmlnaHQ6IEFTVE5vZGUpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5BU1NJR05NRU5UKTtcblxuXHRcdHRoaXMubGVmdCA9IGxlZnQ7XG5cdFx0dGhpcy5yaWdodCA9IHJpZ2h0O1xuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUTWVtYmVyTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRvYmplY3Q6IEFTVE5vZGU7XG5cdHByb3BlcnR5OiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3Iob2JqZWN0OiBBU1ROb2RlLCBwcm9wZXJ0eTogc3RyaW5nKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuTUVNQkVSKTtcblxuXHRcdHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuXHRcdHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcblx0XHR0aGlzLmlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFVuYXJ5Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRvcGVyYXRvcjogc3RyaW5nO1xuXHRhcmd1bWVudDogQVNUTm9kZSB8IEFTVFVuYXJ5Tm9kZTtcblxuXHRjb25zdHJ1Y3RvcihvcGVyYXRvcjogc3RyaW5nLCBhcmd1bWVudDogQVNUTm9kZSB8IEFTVFVuYXJ5Tm9kZSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLlVOQVJZKTtcblxuXHRcdHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcblx0XHR0aGlzLmFyZ3VtZW50ID0gYXJndW1lbnQ7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RJbmRleE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0b2JqZWN0OiBBU1ROb2RlO1xuXHRpbmRleDogQVNUTm9kZTtcblxuXHRjb25zdHJ1Y3RvcihvYmplY3Q6IEFTVE5vZGUsIGluZGV4OiBBU1ROb2RlKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuSU5ERVgpO1xuXG5cdFx0dGhpcy5vYmplY3QgPSBvYmplY3Q7XG5cdFx0dGhpcy5pbmRleCA9IGluZGV4O1xuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUQXJyYXlOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGVsZW1lbnRzOiBBU1ROb2RlW10gPSBbXTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5BUlJBWSk7XG5cblx0XHR0aGlzLmlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVExhbWJkYU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0cGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdO1xuXHRyZXR1cm5UeXBlOiBBU1RUeXBlTm9kZTtcblxuXHRjb25zdHJ1Y3RvcihwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sIHJldHVyblR5cGU6IEFTVFR5cGVOb2RlLCBjaGlsZHJlbjogQVNUTm9kZVtdKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuTEFNQkRBLCBjaGlsZHJlbik7XG5cblx0XHR0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuXHRcdHRoaXMucmV0dXJuVHlwZSA9IHJldHVyblR5cGU7XG5cblx0XHR0aGlzLmlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEZpZWxkTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRtb2RpZmllcnM6IE1vZGlmaWVycztcblx0ZmllbGRUeXBlOiBBU1RUeXBlTm9kZSB8IG51bGw7XG5cdGluaXQ6IEFTVE5vZGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIG1vZGlmaWVyczogTW9kaWZpZXJzLCBmaWVsZFR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbCwgaW5pdDogQVNUTm9kZSB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuRklFTEQpO1xuXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcblx0XHR0aGlzLmZpZWxkVHlwZSA9IGZpZWxkVHlwZTtcblx0XHR0aGlzLmluaXQgPSBpbml0O1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RWYXJpYWJsZU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0dHlwZUFubm90YXRpb246IEFTVFR5cGVOb2RlIHwgbnVsbCA9IG51bGw7XG5cdGluaXQ6IEFTVE5vZGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGVBbm5vdGF0aW9uOiBBU1RUeXBlTm9kZSB8IG51bGwgPSBudWxsLCBpbml0OiBBU1ROb2RlIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5WQVJJQUJMRSk7XG5cblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMudHlwZUFubm90YXRpb24gPSB0eXBlQW5ub3RhdGlvbjtcblx0XHR0aGlzLmluaXQgPSBpbml0O1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRleHByOiBBU1ROb2RlO1xuXG5cdGNvbnN0cnVjdG9yKGV4cHI6IEFTVE5vZGUpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5FWFBSRVNTSU9OKTtcblxuXHRcdHRoaXMuZXhwciA9IGV4cHI7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFJldHVybk5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0YXJndW1lbnQ6IEFTVE5vZGUgfCBBU1RFeHByZXNzaW9uTm9kZSB8IG51bGw7XG5cblx0Y29uc3RydWN0b3IoYXJndW1lbnQ6IEFTVE5vZGUgfCBBU1RFeHByZXNzaW9uTm9kZSB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuUkVUVVJOKTtcblxuXHRcdHRoaXMuYXJndW1lbnQgPSBhcmd1bWVudDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUQ2xhc3NOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGFubm90YXRpb25zOiBBU1RBbm5vdGF0aW9uTm9kZVtdO1xuXHRtb2RpZmllcnM6IE1vZGlmaWVycztcblx0dHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdO1xuXHRzdXBlckNsYXNzOiBTdXBlckNsYXNzIHwgbnVsbDtcblx0aW1wbGVtZW50c0ludGVyZmFjZXM6IEFTVFR5cGVOb2RlW107XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0bmFtZTogc3RyaW5nLFxuXHRcdGFubm90YXRpb25zOiBBU1RBbm5vdGF0aW9uTm9kZVtdLFxuXHRcdG1vZGlmaWVyczogTW9kaWZpZXJzLFxuXHRcdHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXSxcblx0XHRpbXBsZW1lbnRzSW50ZXJmYWNlczogQVNUVHlwZU5vZGVbXSxcblx0XHRzdXBlckNsYXNzOiBTdXBlckNsYXNzIHwgbnVsbCA9IG51bGwsXG5cdFx0Y2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdXG5cdCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkNMQVNTLCBjaGlsZHJlbik7XG5cblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuYW5ub3RhdGlvbnMgPSBhbm5vdGF0aW9ucztcblx0XHR0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcblx0XHR0aGlzLnR5cGVQYXJhbWV0ZXJzID0gdHlwZVBhcmFtZXRlcnM7XG5cdFx0dGhpcy5zdXBlckNsYXNzID0gc3VwZXJDbGFzcztcblx0XHR0aGlzLmltcGxlbWVudHNJbnRlcmZhY2VzID0gaW1wbGVtZW50c0ludGVyZmFjZXM7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEludGVyZmFjZU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0YW5ub3RhdGlvbnM6IEFTVEFubm90YXRpb25Ob2RlW107XG5cdG1vZGlmaWVyczogTW9kaWZpZXJzO1xuXHR0eXBlUGFyYW1ldGVyczogc3RyaW5nW107XG5cdGV4dGVuZHNJbnRlcmZhY2VzOiBzdHJpbmdbXTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0YW5ub3RhdGlvbnM6IEFTVEFubm90YXRpb25Ob2RlW10sXG5cdFx0bW9kaWZpZXJzOiBNb2RpZmllcnMsXG5cdFx0dHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdLFxuXHRcdGV4dGVuZHNJbnRlcmZhY2VzOiBzdHJpbmdbXSxcblx0XHRjaGlsZHJlbjogQVNUTm9kZVtdID0gW11cblx0KSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuSU5URVJGQUNFLCBjaGlsZHJlbik7XG5cblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuYW5ub3RhdGlvbnMgPSBhbm5vdGF0aW9ucztcblx0XHR0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcblx0XHR0aGlzLnR5cGVQYXJhbWV0ZXJzID0gdHlwZVBhcmFtZXRlcnM7XG5cdFx0dGhpcy5leHRlbmRzSW50ZXJmYWNlcyA9IGV4dGVuZHNJbnRlcmZhY2VzO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RBbm5vdGF0aW9uTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRwcm9wZXJ0aWVzOiBNYXA8c3RyaW5nLCBBU1ROb2RlPiA9IG5ldyBNYXAoKTtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5BTk5PVEFUSU9OKTtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RQYXJhbWV0ZXJOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdHR5cGVBbm5vdGF0aW9uOiBBU1RUeXBlTm9kZSB8IG51bGw7XG5cdGRlZmF1bHRWYWx1ZTogQVNUTm9kZSB8IG51bGw7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGUgfCBudWxsLCBkZWZhdWx0VmFsdWU6IEFTVE5vZGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLlBBUkFNRVRFUik7XG5cdFx0dGhpcy50eXBlQW5ub3RhdGlvbiA9IHR5cGVBbm5vdGF0aW9uO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5kZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVE1ldGhvZE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0YW5ub3RhdGlvbnM6IEFTVEFubm90YXRpb25Ob2RlW107XG5cdG1vZGlmaWVyczogTW9kaWZpZXJzO1xuXHR0eXBlUGFyYW1ldGVyczogc3RyaW5nW107XG5cdHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXTtcblx0cmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsO1xuXG5cblx0Y29uc3RydWN0b3IoXG5cdFx0bmFtZTogc3RyaW5nLFxuXHRcdHR5cGU6IHN0cmluZyxcblx0XHRhbm5vdGF0aW9uczogQVNUQW5ub3RhdGlvbk5vZGVbXSxcblx0XHRtb2RpZmllcnM6IE1vZGlmaWVycyxcblx0XHR0eXBlUGFyYW1ldGVyczogc3RyaW5nW10sXG5cdFx0cGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdLFxuXHRcdHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbCA9IG51bGwsXG5cdFx0Y2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdLFxuXHQpIHtcblx0XHRzdXBlcih0eXBlLCBjaGlsZHJlbik7XG5cblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuYW5ub3RhdGlvbnMgPSBhbm5vdGF0aW9ucztcblx0XHR0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcblx0XHR0aGlzLnR5cGVQYXJhbWV0ZXJzID0gdHlwZVBhcmFtZXRlcnM7XG5cdFx0dGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcblx0XHR0aGlzLnJldHVyblR5cGUgPSByZXR1cm5UeXBlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RJbXBvcnROb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdG5hbWVzOiBzdHJpbmdbXTtcblx0ZnJvbTogc3RyaW5nIHwgbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lczogc3RyaW5nW10sIGZyb206IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuSU1QT1JUKTtcblxuXHRcdHRoaXMubmFtZXMgPSBuYW1lcztcblx0XHR0aGlzLmZyb20gPSBmcm9tO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RUaGVuTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRjb25zdHJ1Y3RvcihjaGlsZHJlbjogQVNUTm9kZVtdID0gW10pIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5USEVOLCBjaGlsZHJlbik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVElmTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRjb25kaXRpb246IEFTVE5vZGU7XG5cdHRoZW46IEFTVFRoZW5Ob2RlO1xuXHRlbHNlOiBBU1RJZk5vZGUgfCBBU1RFbHNlTm9kZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKGNvbmRpdGlvbjogQVNUTm9kZSwgdGhlbjogQVNUVGhlbk5vZGUpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5JRik7XG5cblx0XHR0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcblx0XHR0aGlzLnRoZW4gPSB0aGVuO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RFbHNlTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRjb25zdHJ1Y3RvcihjaGlsZHJlbjogQVNUTm9kZVtdID0gW10pIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5FTFNFLCBjaGlsZHJlbik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVE1hdGNoTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRleHByZXNzaW9uOiBBU1ROb2RlO1xuXHRjYXNlczogQVNUTWF0Y2hDYXNlTm9kZVtdO1xuXHRkZWZhdWx0Q2FzZTogQVNUTWF0Y2hDYXNlTm9kZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKGV4cHJlc3Npb246IEFTVE5vZGUsIGNhc2VzOiBBU1RNYXRjaENhc2VOb2RlW10sIGRlZmF1bHRDYXNlOiBBU1RNYXRjaENhc2VOb2RlIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5NQVRDSCk7XG5cblx0XHR0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuXHRcdHRoaXMuY2FzZXMgPSBjYXNlcztcblx0XHR0aGlzLmRlZmF1bHRDYXNlID0gZGVmYXVsdENhc2U7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVE1hdGNoQ2FzZU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0dGVzdDogQVNUTm9kZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLk1BVENIX0NBU0UsIGNoaWxkcmVuKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNURm9yZWFjaE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0aXRlcmF0b3I6IHN0cmluZztcblx0aXRlcmFibGU6IEFTVE5vZGU7XG5cdGJvZHk6IEFTVE5vZGVbXTtcblxuXHRjb25zdHJ1Y3RvcihpdGVyYXRvcjogc3RyaW5nLCBpdGVyYWJsZTogQVNUTm9kZSwgYm9keTogQVNUTm9kZVtdID0gW10pIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5GT1JFQUNIKTtcblxuXHRcdHRoaXMuaXRlcmF0b3IgPSBpdGVyYXRvcjtcblx0XHR0aGlzLml0ZXJhYmxlID0gaXRlcmFibGU7XG5cdFx0dGhpcy5ib2R5ID0gYm9keTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUVHlwZU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0c3RhdGljIEtJTkRfU0lNUExFID0gJ3NpbXBsZSc7XG5cdHN0YXRpYyBLSU5EX0dFTkVSSUMgPSAnZ2VuZXJpYyc7XG5cdHN0YXRpYyBLSU5EX0xBTUJEQSA9ICdsYW1iZGEnO1xuXG5cdGtpbmQ6IHN0cmluZztcblx0dHlwZUFyZ3VtZW50czogQVNUVHlwZU5vZGVbXSA9IFtdO1xuXHRwYXJhbWV0ZXJUeXBlczogQVNUVHlwZU5vZGVbXSA9IFtdO1xuXHRyZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGwgPSBudWxsO1xuXHRudWxsYWJsZTogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihraW5kOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgbnVsbGFibGU6IGJvb2xlYW4gPSBmYWxzZSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLlRZUEUpO1xuXG5cdFx0dGhpcy5raW5kID0ga2luZDtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMubnVsbGFibGUgPSBudWxsYWJsZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUVkRvbU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0cmVhZG9ubHkgdGFnOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHByb3BzOiBNYXA8c3RyaW5nLCBBU1ROb2RlPiA9IG5ldyBNYXAoKTtcblxuXHRjb25zdHJ1Y3Rvcih0YWc6IHN0cmluZywgcHJvcHM6IE1hcDxzdHJpbmcsIEFTVE5vZGU+LCBjaGlsZHJlbjogQVNUTm9kZVtdID0gW10pIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5WRE9NLCBjaGlsZHJlbik7XG5cdFx0dGhpcy50YWcgPSB0YWc7XG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RWRG9tVGV4dE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0Y29uc3RydWN0b3IodmFsdWU6IHN0cmluZykge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLlZET01fVEVYVCk7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7R1JBTU1BUiwgUnVsZXMsIFRva2VuLCBUb2tlblR5cGV9IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5pbXBvcnQge3Rocm93VG9rZW5FcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuaW1wb3J0IHR5cGUge1NvdXJjZX0gZnJvbSBcIi4uL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmV4cG9ydCBjbGFzcyBUb2tlbml6ZXIge1xuXHRwcml2YXRlIHJlYWRvbmx5IHJ1bGVzID0gbmV3IFJ1bGVzKCk7XG5cdHByaXZhdGUgcmVhZG9ubHkgc291cmNlOiBTb3VyY2U7XG5cblx0Y29uc3RydWN0b3Ioc291cmNlOiBTb3VyY2UpIHtcblx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0fVxuXG5cdGdldFRva2VuU3RyZWFtKCk6IFRva2VuU3RyZWFtIHtcblx0XHRyZXR1cm4gbmV3IFRva2VuU3RyZWFtKHRoaXMudG9rZW5pemUoKSk7XG5cdH1cblxuXHR0b2tlbml6ZSgpOiBUb2tlbltdIHtcblx0XHRjb25zdCB0b2tlbnM6IFRva2VuW10gPSBbXTtcblxuXHRcdGxldCBpOiBudW1iZXIgPSAwO1xuXHRcdGxldCBsaW5lOiBudW1iZXIgPSAxO1xuXHRcdGxldCBjb2x1bW46IG51bWJlciA9IDA7XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nTGluZUNvbW1lbnQgPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBsaW5lQ29tbWVudDogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaExpbmVDb21tZW50QXQoaSk7XG5cdFx0XHRpZiAobGluZUNvbW1lbnQpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2gobGluZUNvbW1lbnQud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBsaW5lQ29tbWVudC5lbmQgKyAxO1xuXG5cdFx0XHRcdGxpbmUrKztcblx0XHRcdFx0Y29sdW1uID0gMDtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ1N0cmluZyA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IHN0cmluZzogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaFN0cmluZ0F0KGkpO1xuXHRcdFx0aWYgKHN0cmluZykge1xuXHRcdFx0XHR0b2tlbnMucHVzaChzdHJpbmcud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBzdHJpbmcuZW5kICsgMTtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChzdHJpbmcpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nUHVuY3R1YXRpb24gPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBwdW5jdHVhdGlvbjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaFB1bmN0dWF0aW9uQXQoaSk7XG5cdFx0XHRpZiAocHVuY3R1YXRpb24pIHtcblx0XHRcdFx0dG9rZW5zLnB1c2gocHVuY3R1YXRpb24ud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBwdW5jdHVhdGlvbi5lbmQgKyAxO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KHB1bmN0dWF0aW9uKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ0lkZW50aWZpZXIgPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBpZGVudGlmaWVyOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoSWRlbnRpZmllckF0KGkpO1xuXHRcdFx0aWYgKGlkZW50aWZpZXIpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2goaWRlbnRpZmllci53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IGlkZW50aWZpZXIuZW5kO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KGlkZW50aWZpZXIpO1xuXG5cdFx0XHRcdGlmIChpZGVudGlmaWVyLnZhbHVlID09PSBHUkFNTUFSLlZET00pIHtcblx0XHRcdFx0XHRjb25zdCB0b2tlbml6ZWRWRG9tID0gdGhpcy50b2tlbml6ZVZEb20oaSwgbGluZSwgY29sdW1uKTtcblx0XHRcdFx0XHR0b2tlbnMucHVzaCguLi50b2tlbml6ZWRWRG9tLnRva2Vucyk7XG5cdFx0XHRcdFx0aSA9IHRva2VuaXplZFZEb20ubmV3SW5kZXg7XG5cdFx0XHRcdFx0bGluZSA9IHRva2VuaXplZFZEb20ubGluZTtcblx0XHRcdFx0XHRjb2x1bW4gPSB0b2tlbml6ZWRWRG9tLmNvbHVtbjtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nTnVtYmVyID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgbnVtYmVyOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoTnVtYmVyQXQoaSk7XG5cdFx0XHRpZiAobnVtYmVyKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKG51bWJlci53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IG51bWJlci5lbmQ7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQobnVtYmVyKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ09wZXJhdG9yID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3Qgb3BlcmF0b3I6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hPcGVyYXRvckF0KGkpO1xuXHRcdFx0aWYgKG9wZXJhdG9yKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKG9wZXJhdG9yLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gb3BlcmF0b3IuZW5kICsgMTtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChvcGVyYXRvcik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdBbm5vdGF0aW9uID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgYW5ub3RhdGlvbjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaEFubm90YXRpb25BdChpKTtcblx0XHRcdGlmIChhbm5vdGF0aW9uKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKGFubm90YXRpb24ud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBhbm5vdGF0aW9uLmVuZCArIDE7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQoYW5ub3RhdGlvbik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0d2hpbGUgKGkgPCB0aGlzLnNvdXJjZS5sZW5ndGgpIHtcblx0XHRcdGlmICh0aGlzLnNvdXJjZS5jaGFyQXQoaSkgPT09ICdcXG4nKSB7XG5cdFx0XHRcdGxpbmUrKztcblx0XHRcdFx0Y29sdW1uID0gMDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbHVtbisrO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5tYXRjaFdoaXRlc3BhY2VBdChpKSkge1xuXHRcdFx0XHRpKys7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaWZJc0NvbnN1bWluZ0xpbmVDb21tZW50KClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ1B1bmN0dWF0aW9uKClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ1N0cmluZygpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdOdW1iZXIoKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nSWRlbnRpZmllcigpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdPcGVyYXRvcigpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdBbm5vdGF0aW9uKCkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHRocm93VG9rZW5FcnJvcignVW5leHBlY3RlZCBjaGFyYWN0ZXI6ICcgKyB0aGlzLnNvdXJjZS5jaGFyQXQoaSkpO1xuXHRcdH1cblxuXHRcdHRva2Vucy5wdXNoKFxuXHRcdFx0dGhpcy5lb2YoaSlcblx0XHRcdCAgICAud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKVxuXHRcdCk7XG5cblx0XHRyZXR1cm4gdG9rZW5zO1xuXHR9XG5cblx0ZW9mKGVuZDogbnVtYmVyKTogVG9rZW4ge1xuXHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLkVPRiwgJycsIGVuZCwgZW5kLCB0aGlzLnNvdXJjZSlcblx0fVxuXG5cdGNvbHVtT2Zmc2V0KHRva2VuOiBUb2tlbik6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRva2VuLnZhbHVlLmxlbmd0aCAtIDE7XG5cdH1cblxuXHRtYXRjaFdoaXRlc3BhY2VBdChpOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5ydWxlcy5pc1doaXRlc3BhY2UodGhpcy5zb3VyY2UuY2hhckF0KGkpKTtcblx0fVxuXG5cdG1hdGNoTnVtYmVyQXQoaTogbnVtYmVyKTogVG9rZW4gfCBudWxsIHtcblx0XHRpZiAoIXRoaXMucnVsZXMuaXNOdW1lcmljKHRoaXMuc291cmNlLmNoYXJBdChpKSkpIHtcblx0XHRcdHJldHVybiBudWxsXG5cdFx0fVxuXHRcdGxldCBzdGFydCA9IGk7XG5cdFx0d2hpbGUgKHRoaXMucnVsZXMuaXNOdW1lcmljKHRoaXMuc291cmNlLmNoYXJBdChpKSkpIGkrKztcblx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5OVU1CRVIsIHRoaXMuc291cmNlLnNsaWNlKHN0YXJ0LCBpKSwgc3RhcnQsIGksIHRoaXMuc291cmNlKTtcblx0fVxuXG5cdG1hdGNoU3RyaW5nQXQoaTogbnVtYmVyKTogVG9rZW4gfCBudWxsIHtcblx0XHRpZiAodGhpcy5zb3VyY2UuY2hhckF0KGkpICE9PSAnXCInKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0bGV0IHN0YXJ0ID0gKytpO1xuXHRcdHdoaWxlICh0aGlzLnNvdXJjZS5jaGFyQXQoaSkgIT09ICdcIicpIGkrKztcblx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5TVFJJTkcsIHRoaXMuc291cmNlLnNsaWNlKHN0YXJ0LCBpKSwgc3RhcnQsIGksIHRoaXMuc291cmNlKTtcblx0fVxuXG5cdG1hdGNoSWRlbnRpZmllckF0KGk6IG51bWJlcik6IFRva2VuIHwgbnVsbCB7XG5cdFx0aWYgKCF0aGlzLnJ1bGVzLmlzQWxwaGEodGhpcy5zb3VyY2UuY2hhckF0KGkpKSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGxldCBzdGFydCA9IGk7XG5cdFx0bGV0IGogPSBpO1xuXHRcdHdoaWxlICh0aGlzLnJ1bGVzLmlzQWxwaGFOdW1lcmljKHRoaXMuc291cmNlLmNoYXJBdChqKSkpIGorKztcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuc291cmNlLnNsaWNlKHN0YXJ0LCBqKTtcblxuXHRcdGxldCB0eXBlID0gVG9rZW5UeXBlLklERU5USUZJRVI7XG5cdFx0aWYgKFtHUkFNTUFSLlRSVUUsIEdSQU1NQVIuRkFMU0VdLmluY2x1ZGVzKHZhbHVlKSkge1xuXHRcdFx0dHlwZSA9IFRva2VuVHlwZS5CT09MRUFOO1xuXHRcdH0gZWxzZSBpZiAoUnVsZXMuS0VZV09SRFMuaGFzKHZhbHVlKSkge1xuXHRcdFx0dHlwZSA9IFRva2VuVHlwZS5LRVlXT1JEO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgVG9rZW4odHlwZSwgdmFsdWUsIHN0YXJ0LCBqLCB0aGlzLnNvdXJjZSk7XG5cdH1cblxuXHRtYXRjaE9wZXJhdG9yQXQoaTogbnVtYmVyLCBvcGVyYXRvcnM6IFNldDxzdHJpbmc+ID0gUnVsZXMuT1BFUkFUT1JTKTogVG9rZW4gfCBudWxsIHtcblx0XHRjb25zdCBjaGFycyA9IHRoaXMuc291cmNlLmNoYXJBdChpKSArIHRoaXMuc291cmNlLmNoYXJBdChpICsgMSk7XG5cdFx0aWYgKG9wZXJhdG9ycy5oYXMoY2hhcnMpKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5PUEVSQVRPUiwgY2hhcnMsIGksIGkgKyAxLCB0aGlzLnNvdXJjZSk7XG5cdFx0fVxuXG5cdFx0aWYgKG9wZXJhdG9ycy5oYXModGhpcy5zb3VyY2UuY2hhckF0KGkpKSkge1xuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuT1BFUkFUT1IsIHRoaXMuc291cmNlLmNoYXJBdChpKSwgaSwgaSwgdGhpcy5zb3VyY2UpO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0bWF0Y2hQdW5jdHVhdGlvbkF0KGk6IG51bWJlciwgcHVuY3R1YXRpb25zID0gUnVsZXMuUFVOQ1RVQVRJT05TKTogVG9rZW4gfCBudWxsIHtcblx0XHRjb25zdCBjaGFycyA9IHRoaXMuc291cmNlLmNoYXJBdChpKSArIHRoaXMuc291cmNlLmNoYXJBdChpICsgMSk7XG5cdFx0aWYgKHB1bmN0dWF0aW9ucy5oYXMoY2hhcnMpKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5QVU5DVFVBVElPTiwgY2hhcnMsIGksIGkgKyAxLCB0aGlzLnNvdXJjZSk7XG5cdFx0fVxuXG5cdFx0aWYgKCFwdW5jdHVhdGlvbnMuaGFzKHRoaXMuc291cmNlLmNoYXJBdChpKSkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5QVU5DVFVBVElPTiwgdGhpcy5zb3VyY2UuY2hhckF0KGkpLCBpLCBpLCB0aGlzLnNvdXJjZSk7XG5cdH1cblxuXHRtYXRjaExpbmVDb21tZW50QXQoaTogbnVtYmVyKTogVG9rZW4gfCBudWxsIHtcblx0XHRpZiAoIXRoaXMuc291cmNlLnN0YXJ0c1dpdGgoUnVsZXMuQ09NTUVOVF9MSU5FLCBpKSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGxldCBqID0gaSArIFJ1bGVzLkNPTU1FTlRfTElORS5sZW5ndGg7XG5cdFx0d2hpbGUgKGogPCB0aGlzLnNvdXJjZS5sZW5ndGggJiYgdGhpcy5zb3VyY2UuY2hhckF0KGopICE9PSAnXFxuJykgaisrO1xuXHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLkNPTU1FTlQsIHRoaXMuc291cmNlLnNsaWNlKGksIGopLCBpLCBqLCB0aGlzLnNvdXJjZSk7XG5cdH1cblxuXHRtYXRjaEFubm90YXRpb25BdChpOiBudW1iZXIpOiBUb2tlbiB8IG51bGwge1xuXHRcdGlmICh0aGlzLnNvdXJjZS5jaGFyQXQoaSkgIT09ICdAJykge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0bGV0IHN0YXJ0ID0gaSArIDE7XG5cdFx0bGV0IGogPSBpICsgMTtcblx0XHR3aGlsZSAodGhpcy5ydWxlcy5pc0FscGhhKHRoaXMuc291cmNlLmNoYXJBdChqKSkpIGorKztcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuc291cmNlLnNsaWNlKHN0YXJ0LCBqKTtcblxuXHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLkFOTk9UQVRJT04sIHZhbHVlLCBzdGFydCwgaiwgdGhpcy5zb3VyY2UpO1xuXHR9XG5cblx0cHJpdmF0ZSB0b2tlbml6ZVZEb20oc3RhcnRJbmRleDogbnVtYmVyLCBsaW5lOiBudW1iZXIsIGNvbHVtbjogbnVtYmVyKToge1xuXHRcdHRva2VuczogVG9rZW5bXSxcblx0XHRuZXdJbmRleDogbnVtYmVyLFxuXHRcdGxpbmU6IG51bWJlcixcblx0XHRjb2x1bW46IG51bWJlclxuXHR9IHtcblx0XHRjb25zdCB0b2tlbnM6IFRva2VuW10gPSBbXTtcblx0XHRsZXQgaTogbnVtYmVyID0gc3RhcnRJbmRleDtcblx0XHRsZXQgdGV4dEJ1ZmZlcjogc3RyaW5nID0gJyc7XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nU3RyaW5nID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3Qgc3RyaW5nOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoU3RyaW5nQXQoaSk7XG5cdFx0XHRpZiAoc3RyaW5nKSB7XG5cdFx0XHRcdGZsdXNoVGV4dEJ1ZmZlcigpO1xuXHRcdFx0XHR0b2tlbnMucHVzaChzdHJpbmcud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBzdHJpbmcuZW5kICsgMTtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChzdHJpbmcpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nUHVuY3R1YXRpb24gPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBwdW5jdHVhdGlvbjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaFB1bmN0dWF0aW9uQXQoaSwgUnVsZXMuRE9NX1BVTkNUVUFUSU9OUyk7XG5cdFx0XHRpZiAocHVuY3R1YXRpb24pIHtcblx0XHRcdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cdFx0XHRcdHRva2Vucy5wdXNoKHB1bmN0dWF0aW9uLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gcHVuY3R1YXRpb24uZW5kICsgMTtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChwdW5jdHVhdGlvbik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdJZGVudGlmaWVyID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgaWRlbnRpZmllcjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaElkZW50aWZpZXJBdChpKTtcblx0XHRcdGlmIChpZGVudGlmaWVyKSB7XG5cdFx0XHRcdGZsdXNoVGV4dEJ1ZmZlcigpO1xuXHRcdFx0XHR0b2tlbnMucHVzaChpZGVudGlmaWVyLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gaWRlbnRpZmllci5lbmQ7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQoaWRlbnRpZmllcik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdOdW1iZXIgPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBudW1iZXI6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hOdW1iZXJBdChpKTtcblx0XHRcdGlmIChudW1iZXIpIHtcblx0XHRcdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cblx0XHRcdFx0dG9rZW5zLnB1c2gobnVtYmVyLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gbnVtYmVyLmVuZDtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChudW1iZXIpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nT3BlcmF0b3IgPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBvcGVyYXRvcjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaE9wZXJhdG9yQXQoaSwgUnVsZXMuRE9NX09QRVJBVE9SUyk7XG5cdFx0XHRpZiAob3BlcmF0b3IpIHtcblx0XHRcdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cblx0XHRcdFx0dG9rZW5zLnB1c2gob3BlcmF0b3Iud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBvcGVyYXRvci5lbmQgKyAxO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KG9wZXJhdG9yKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZmx1c2hUZXh0QnVmZmVyID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKHRleHRCdWZmZXIubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR0b2tlbnMucHVzaChcblx0XHRcdFx0XHRuZXcgVG9rZW4oXG5cdFx0XHRcdFx0XHRUb2tlblR5cGUuVEVYVCxcblx0XHRcdFx0XHRcdHRleHRCdWZmZXIsXG5cdFx0XHRcdFx0XHRpIC0gdGV4dEJ1ZmZlci5sZW5ndGgsXG5cdFx0XHRcdFx0XHRpLFxuXHRcdFx0XHRcdFx0dGhpcy5zb3VyY2Vcblx0XHRcdFx0XHQpLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbiAtIHRleHRCdWZmZXIubGVuZ3RoKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHR0ZXh0QnVmZmVyID0gJyc7XG5cdFx0XHR9XG5cdFx0fTtcblxuXG5cdFx0bGV0IGlnbm9yZVdoaXRlc3BhY2UgPSBmYWxzZTtcblx0XHR3aGlsZSAoaSA8IHRoaXMuc291cmNlLmxlbmd0aCkge1xuXHRcdFx0Y29uc3QgY2hhcjogc3RyaW5nID0gdGhpcy5zb3VyY2UuY2hhckF0KGkpO1xuXG5cdFx0XHRpZiAoY2hhciA9PT0gR1JBTU1BUi5TRU1JQ09MT04pIHtcblx0XHRcdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cblx0XHRcdFx0dG9rZW5zLnB1c2gobmV3IFRva2VuKFRva2VuVHlwZS5QVU5DVFVBVElPTiwgY2hhciwgaSwgaSwgdGhpcy5zb3VyY2UpXG5cdFx0XHRcdFx0ICAgICAgICAgICAgLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXG5cdFx0XHRcdGkrKztcblx0XHRcdFx0Y29sdW1uKys7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fSBlbHNlIGlmIChjaGFyID09PSBHUkFNTUFSLkJSQUNFX09QRU4pIHtcblx0XHRcdFx0aWdub3JlV2hpdGVzcGFjZSA9IHRydWU7XG5cdFx0XHR9IGVsc2UgaWYgKGNoYXIgPT09IEdSQU1NQVIuQlJBQ0VfQ0xPU0UpIHtcblx0XHRcdFx0aWdub3JlV2hpdGVzcGFjZSA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaWdub3JlV2hpdGVzcGFjZSkge1xuXHRcdFx0XHRpZiAodGhpcy5tYXRjaFdoaXRlc3BhY2VBdChpKSkge1xuXHRcdFx0XHRcdGkrKztcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaWZJc0NvbnN1bWluZ1B1bmN0dWF0aW9uKClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ1N0cmluZygpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdOdW1iZXIoKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nSWRlbnRpZmllcigpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdPcGVyYXRvcigpXG5cdFx0XHQpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHRleHRCdWZmZXIgKz0gY2hhcjtcblxuXHRcdFx0aWYgKGNoYXIgPT09ICdcXG4nKSB7XG5cdFx0XHRcdGxpbmUrKztcblx0XHRcdFx0Y29sdW1uID0gMDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbHVtbisrO1xuXHRcdFx0fVxuXG5cdFx0XHRpKys7XG5cdFx0fVxuXG5cdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cblx0XHRyZXR1cm4ge3Rva2VucywgbmV3SW5kZXg6IGksIGxpbmUsIGNvbHVtbn07XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFRva2VuU3RyZWFtIHtcblx0dG9rZW5zOiBUb2tlbltdO1xuXHRpbmRleDogbnVtYmVyID0gMDtcblxuXHRjb25zdHJ1Y3Rvcih0b2tlbnM6IFRva2VuW10pIHtcblx0XHR0aGlzLnRva2VucyA9IHRva2Vucztcblx0fVxuXG5cdHJld2luZCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pbmRleCA+IDApIHtcblx0XHRcdHRoaXMuaW5kZXgtLTtcblx0XHR9XG5cdH1cblxuXHRwZWVrKCk6IFRva2VuIHwgbnVsbCB7XG5cdFx0cmV0dXJuIHRoaXMudG9rZW5zW3RoaXMuaW5kZXhdIHx8IG51bGw7XG5cdH1cblxuXHRuZXh0KCk6IFRva2VuIHwgbnVsbCB7XG5cdFx0cmV0dXJuIHRoaXMudG9rZW5zW3RoaXMuaW5kZXgrK10gfHwgbnVsbDtcblx0fVxuXG5cdGhhc05leHQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGg7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtUb2tlbml6ZXJ9IGZyb20gXCIuLi90b2tlbml6ZXIvdG9rZW5pemVyXCI7XG5pbXBvcnQge3Rocm93RGVwZW5kZW5jeUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQgdHlwZSB7VG9rZW59IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5cbmV4cG9ydCBjbGFzcyBTb3VyY2Uge1xuXHRzdGF0aWMgTkVXTElORSA9ICdcXG4nO1xuXHRwdWJsaWMgcmVhZG9ubHkgdXJsOiBzdHJpbmc7XG5cdHByaXZhdGUgY29kZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGNvZGU6IHN0cmluZywgdXJsOiBzdHJpbmcgPSAnPGlubGluZT4nKSB7XG5cdFx0dGhpcy51cmwgPSB1cmw7XG5cdFx0dGhpcy5jb2RlID0gY29kZTtcblx0fVxuXG5cdGdldCBsZW5ndGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5jb2RlLmxlbmd0aDtcblx0fVxuXG5cdGdldFRva2VuaXplcigpOiBUb2tlbml6ZXIge1xuXHRcdHJldHVybiBuZXcgVG9rZW5pemVyKHRoaXMpO1xuXHR9XG5cblx0c2xpY2Uoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmNvZGUuc2xpY2Uoc3RhcnQsIGVuZCk7XG5cdH1cblxuXHRjaGFyQXQoaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuY29kZS5jaGFyQXQoaW5kZXgpO1xuXHR9XG5cblx0c3RhcnRzV2l0aCh0ZXh0OiBzdHJpbmcsIHBvc2l0aW9uPzogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29kZS5zdGFydHNXaXRoKHRleHQsIHBvc2l0aW9uKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgU291cmNlU3BhbiB7XG5cdHNvdXJjZTogU291cmNlO1xuXHRzdGFydDogbnVtYmVyO1xuXHRlbmQ6IG51bWJlcjtcblx0bGluZTogbnVtYmVyO1xuXHRjb2x1bW46IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcihzb3VyY2U6IFNvdXJjZSwgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpIHtcblx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0XHR0aGlzLnN0YXJ0ID0gc3RhcnQ7XG5cdFx0dGhpcy5lbmQgPSBlbmQ7XG5cblx0XHRjb25zdCBiZWZvcmUgPSBzb3VyY2Uuc2xpY2UoMCwgc3RhcnQpO1xuXHRcdGNvbnN0IGxpbmVzID0gYmVmb3JlLnNwbGl0KFNvdXJjZS5ORVdMSU5FKTtcblxuXHRcdHRoaXMubGluZSA9IGxpbmVzLmxlbmd0aDtcblx0XHR0aGlzLmNvbHVtbiA9IChsaW5lc1tsaW5lcy5sZW5ndGggLSAxXSB8fCAnJykubGVuZ3RoICsgMTtcblx0fVxuXG5cdHRleHQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2Uuc2xpY2UodGhpcy5zdGFydCwgdGhpcy5lbmQpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGFuRnJvbShzdGFydFRva2VuOiBUb2tlbiwgZW5kVG9rZW46IFRva2VuKTogU291cmNlU3BhbiB7XG5cdHJldHVybiBuZXcgU291cmNlU3BhbihzdGFydFRva2VuLnNvdXJjZSwgc3RhcnRUb2tlbi5zdGFydCwgZW5kVG9rZW4uZW5kKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoU291cmNlKHVybDogc3RyaW5nKTogUHJvbWlzZTxTb3VyY2U+IHtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXHRpZiAoIXJlc3BvbnNlLm9rKSB7XG5cdFx0dGhyb3dEZXBlbmRlbmN5RXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHt1cmx9YCk7XG5cdH1cblxuXHRyZXR1cm4gbmV3IFNvdXJjZShhd2FpdCByZXNwb25zZS50ZXh0KCksIHVybCk7XG59XG4iLAogICAgImltcG9ydCB7U291cmNlLCBTb3VyY2VTcGFufSBmcm9tIFwiLi9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5jbGFzcyBFcnJvclR5cGVzIHtcblx0c3RhdGljIFRZUEVfRVJST1I6IHN0cmluZyA9ICdUeXBlRXJyb3InO1xuXHRzdGF0aWMgVE9LRU5fRVJST1I6IHN0cmluZyA9ICdUb2tlbkVycm9yJztcblx0c3RhdGljIFBBUlNFUl9FUlJPUjogc3RyaW5nID0gJ1BhcnNlckVycm9yJztcblx0c3RhdGljIFJVTlRJTUVfRVJST1I6IHN0cmluZyA9ICdSdW50aW1lRXJyb3InO1xuXHRzdGF0aWMgSU5URVJOQUxfRVJST1I6IHN0cmluZyA9ICdJbnRlcm5hbEVycm9yJztcblx0c3RhdGljIE5BVElWRV9FUlJPUjogc3RyaW5nID0gJ05hdGl2ZUVycm9yJztcblx0c3RhdGljIERFUEVOREVOQ1lfRVJST1I6IHN0cmluZyA9ICdEZXBlbmRlbmN5RXJyb3InO1xufVxuXG5leHBvcnQgY2xhc3MgTHlyYUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXHRraW5kOiBzdHJpbmc7XG5cdHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbDtcblx0b3ZlcnJpZGUgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdGtpbmQ6IHN0cmluZyxcblx0XHRtZXNzYWdlOiBzdHJpbmcsXG5cdFx0c3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLFxuXHRcdGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuXHQpIHtcblx0XHRzdXBlcihtZXNzYWdlKTtcblx0XHR0aGlzLmtpbmQgPSBraW5kO1xuXHRcdHRoaXMuc3BhbiA9IHNwYW47XG5cdFx0dGhpcy5jYXVzZSA9IGNhdXNlO1xuXHR9XG5cblx0Zm9ybWF0KCk6IHN0cmluZyB7XG5cdFx0aWYgKHRoaXMuc3Bhbikge1xuXG5cdFx0XHRyZXR1cm4gYFxuWyR7dGhpcy5raW5kfV0gJHt0aGlzLm1lc3NhZ2V9XG4gIGF0ICR7dGhpcy5zcGFuLnNvdXJjZS51cmx9OiR7dGhpcy5zcGFuLmxpbmV9OiR7dGhpcy5zcGFuLmNvbHVtbn1cblxuJHt0aGlzLnNwYW4udGV4dCgpfVxuJHtcIiBcIi5yZXBlYXQodGhpcy5zcGFuLmNvbHVtbil9JHtcIl5cIi5yZXBlYXQodGhpcy5zcGFuLmVuZCAtIHRoaXMuc3Bhbi5zdGFydCl9XG5gO1xuXHRcdH1cblxuXHRcdHJldHVybiBgWyR7dGhpcy5raW5kfV0gJHt0aGlzLm1lc3NhZ2V9YDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYVRva2VuRXJyb3IgZXh0ZW5kcyBMeXJhRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRFcnJvclR5cGVzLlRPS0VOX0VSUk9SLFxuXHRcdFx0bWVzc2FnZSxcblx0XHRcdHNwYW4sXG5cdFx0XHRjYXVzZVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFUeXBlRXJyb3IgZXh0ZW5kcyBMeXJhRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRFcnJvclR5cGVzLlRZUEVfRVJST1IsXG5cdFx0XHRtZXNzYWdlLFxuXHRcdFx0c3Bhbixcblx0XHRcdGNhdXNlXG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYVBhcnNlckVycm9yIGV4dGVuZHMgTHlyYUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0RXJyb3JUeXBlcy5QQVJTRVJfRVJST1IsXG5cdFx0XHRtZXNzYWdlLFxuXHRcdFx0c3Bhbixcblx0XHRcdGNhdXNlXG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYVJ1bnRpbWVFcnJvciBleHRlbmRzIEx5cmFFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihcblx0XHRcdEVycm9yVHlwZXMuUlVOVElNRV9FUlJPUixcblx0XHRcdG1lc3NhZ2UsXG5cdFx0XHRzcGFuLFxuXHRcdFx0Y2F1c2Vcblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhTmF0aXZlRXJyb3IgZXh0ZW5kcyBMeXJhRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRFcnJvclR5cGVzLk5BVElWRV9FUlJPUixcblx0XHRcdG1lc3NhZ2UsXG5cdFx0XHRzcGFuLFxuXHRcdFx0Y2F1c2Vcblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhRGVwZW5kZW5jeUVycm9yIGV4dGVuZHMgTHlyYUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0RXJyb3JUeXBlcy5ERVBFTkRFTkNZX0VSUk9SLFxuXHRcdFx0bWVzc2FnZSxcblx0XHRcdHNwYW4sXG5cdFx0XHRjYXVzZVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93VG9rZW5FcnJvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKTogbmV2ZXIge1xuXHR0aHJvdyBuZXcgTHlyYVRva2VuRXJyb3IobWVzc2FnZSwgc3BhbiwgY2F1c2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dUeXBlRXJyb3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IG5ldmVyIHtcblx0dGhyb3cgbmV3IEx5cmFUeXBlRXJyb3IobWVzc2FnZSwgc3BhbiwgY2F1c2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQYXJzZXJFcnJvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKTogbmV2ZXIge1xuXHR0aHJvdyBuZXcgTHlyYVBhcnNlckVycm9yKG1lc3NhZ2UsIHNwYW4sIGNhdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UnVudGltZUVycm9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBuZXZlciB7XG5cdHRocm93IG5ldyBMeXJhUnVudGltZUVycm9yKG1lc3NhZ2UsIHNwYW4sIGNhdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93TmF0aXZlRXJyb3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IG5ldmVyIHtcblx0dGhyb3cgbmV3IEx5cmFOYXRpdmVFcnJvcihtZXNzYWdlLCBzcGFuLCBjYXVzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd0RlcGVuZGVuY3lFcnJvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKTogbmV2ZXIge1xuXHR0aHJvdyBuZXcgTHlyYURlcGVuZGVuY3lFcnJvcihtZXNzYWdlLCBzcGFuLCBjYXVzZSk7XG59XG5cbi8qKlxuICogQHRocm93cyB7RXJyb3J9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3cmFwSnNFcnJvcihlcnJvcjogRXJyb3IsIHNvdXJjZTogU291cmNlKTogTHlyYUVycm9yIHtcblx0aWYgKGVycm9yIGluc3RhbmNlb2YgTHlyYUVycm9yKSB7XG5cdFx0cmV0dXJuIGVycm9yO1xuXHR9XG5cblx0cmV0dXJuIG5ldyBMeXJhRXJyb3IoXG5cdFx0RXJyb3JUeXBlcy5JTlRFUk5BTF9FUlJPUixcblx0XHRlcnJvci5tZXNzYWdlIHx8IFN0cmluZyhlcnJvciksXG5cdFx0bmV3IFNvdXJjZVNwYW4oc291cmNlLCAwLCBzb3VyY2UubGVuZ3RoKVxuXHQpO1xufVxuIiwKICAgICJpbXBvcnQge0FTVENsYXNzTm9kZSwgQVNUTm9kZVR5cGV9IGZyb20gXCIuLi9jb3JlL2FzdFwiO1xuaW1wb3J0IHtDbGFzc0RlZmluaXRpb259IGZyb20gXCIuLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7UGFyc2VyfSBmcm9tIFwiLi4vY29yZS9wYXJzZXIvcGFyc2VyXCI7XG5pbXBvcnQge3Rocm93UnVudGltZUVycm9yfSBmcm9tIFwiLi4vY29yZS9lcnJvcnNcIjtcbmltcG9ydCB0eXBlIHtTb3VyY2V9IGZyb20gXCIuLi9jb3JlL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmV4cG9ydCBjbGFzcyBOYXRpdmVDbGFzcyB7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblx0cmVhZG9ubHkgbmF0aXZlSW5zdGFuY2U6IGFueTtcblx0cmVhZG9ubHkgbmF0aXZlQ2xhc3NTb3VyY2U6IFNvdXJjZTtcblx0aXNBdXRvbG9hZEFibGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIG5hdGl2ZUluc3RhbmNlOiBhbnksIHNvdXJjZTogU291cmNlKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLm5hdGl2ZUluc3RhbmNlID0gbmF0aXZlSW5zdGFuY2U7XG5cdFx0dGhpcy5uYXRpdmVDbGFzc1NvdXJjZSA9IHNvdXJjZTtcblx0fVxuXG5cdGdldENsYXNzRGVmaW5pdGlvbigpOiBDbGFzc0RlZmluaXRpb24ge1xuXHRcdGNvbnN0IGFzdCA9IG5ldyBQYXJzZXIodGhpcy5uYXRpdmVDbGFzc1NvdXJjZSkucGFyc2UoKTtcblxuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChub2RlLnR5cGUgPT09IEFTVE5vZGVUeXBlLkNMQVNTKSB7XG5cdFx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUQ2xhc3NOb2RlICYmIG5vZGUubmFtZSA9PT0gdGhpcy5uYW1lKSB7XG5cdFx0XHRcdFx0Y29uc3QgY2xhc3NEZWYgPSBDbGFzc0RlZmluaXRpb24uZnJvbUFTVChub2RlKTtcblxuXHRcdFx0XHRcdGNsYXNzRGVmLm5hdGl2ZUluc3RhbmNlID0gdGhpcy5uYXRpdmVJbnN0YW5jZTtcblxuXHRcdFx0XHRcdHJldHVybiBjbGFzc0RlZjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRocm93UnVudGltZUVycm9yKGBDbGFzcyAke3RoaXMubmFtZX0gbm90IGZvdW5kLmAsIGFzdC5zcGFuKTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0FTVEFycmF5Tm9kZSwgQVNUTm9kZSwgQVNUTm9kZVR5cGUsIEFTVFJldHVybk5vZGV9IGZyb20gXCIuLi9hc3RcIjtcbmltcG9ydCB7R1JBTU1BUiwgVFlQRV9FTlVNfSBmcm9tIFwiLi4vZ3JhbW1hclwiO1xuaW1wb3J0IHtDbGFzc0RlZmluaXRpb24sIEluc3RhbmNlfSBmcm9tIFwiLi9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuaW1wb3J0IHt0aHJvd05hdGl2ZUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5cbmludGVyZmFjZSBTZXJpYWxpemF0aW9uT2JqZWN0IHtcblx0W2luZGV4OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhTmF0aXZlT2JqZWN0IHtcblx0Y2xhc3NOYW1lOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoY2xhc3NOYW1lOiBzdHJpbmcpIHtcblx0XHR0aGlzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcblx0fVxuXG5cdHB1YmxpYyBzZXJpYWxpemUoKTogU2VyaWFsaXphdGlvbk9iamVjdCB7XG5cdFx0Y29uc3Qgb2JqZWN0OiBTZXJpYWxpemF0aW9uT2JqZWN0ID0ge307XG5cblx0XHRvYmplY3RbdGhpcy5jbGFzc05hbWVdID0gT2JqZWN0XG5cdFx0XHQua2V5cyh0aGlzKVxuXHRcdFx0LmZpbHRlcihrZXkgPT4ga2V5ICE9PSAnY2xhc3NOYW1lJylcblx0XHRcdC5yZWR1Y2UoKG9iamVjdDogU2VyaWFsaXphdGlvbk9iamVjdCwga2V5OiBzdHJpbmcpOiBTZXJpYWxpemF0aW9uT2JqZWN0ID0+IHtcblx0XHRcdFx0Y29uc3QgY29weTogU2VyaWFsaXphdGlvbk9iamVjdCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMpO1xuXHRcdFx0XHRvYmplY3Rba2V5XSA9IGNvcHlba2V5XTtcblx0XHRcdFx0cmV0dXJuIG9iamVjdDtcblx0XHRcdH0sIHt9KTtcblxuXHRcdHJldHVybiBvYmplY3Q7XG5cdH1cblxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoe2NsYXNzTmFtZTogdGhpcy5jbGFzc05hbWV9LCBudWxsLCAyKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYU9iamVjdFZpZXcgZXh0ZW5kcyBMeXJhTmF0aXZlT2JqZWN0IHtcblx0cHJpdmF0ZSBfX2luc3RhbmNlOiBJbnN0YW5jZTtcblxuXHRjb25zdHJ1Y3RvcihpbnN0YW5jZTogSW5zdGFuY2UpIHtcblx0XHRzdXBlcihpbnN0YW5jZS5fX2NsYXNzRGVmLm5hbWUpO1xuXG5cdFx0dGhpcy5fX2luc3RhbmNlID0gaW5zdGFuY2U7XG5cblx0XHRyZXR1cm4gbmV3IFByb3h5KHRoaXMsIHtcblx0XHRcdGdldDogKF86IGFueSwgbmFtZTogc3RyaW5nKTogYW55ID0+IHtcblx0XHRcdFx0aWYgKG5hbWUgaW4gdGhpcy5fX2luc3RhbmNlLl9faW5zdGFuY2VGaWVsZHMpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5fX2luc3RhbmNlLl9faW5zdGFuY2VGaWVsZHNbbmFtZV07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAobmFtZSBpbiB0aGlzLl9faW5zdGFuY2UuX19zdGF0aWNGaWVsZHMpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5fX2luc3RhbmNlLl9fc3RhdGljRmllbGRzW25hbWVdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKG5hbWUgaW4gdGhpcykge1xuXHRcdFx0XHRcdGNvbnN0IHNlbGY6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHRoaXM7XG5cdFx0XHRcdFx0cmV0dXJuIHNlbGZbbmFtZV07XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdHNldDogKF86IGFueSwgbmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogYW55ID0+IHtcblx0XHRcdFx0aWYgKG5hbWUgaW4gdGhpcy5fX2luc3RhbmNlLl9faW5zdGFuY2VGaWVsZHMpIHtcblx0XHRcdFx0XHR0aGlzLl9faW5zdGFuY2UuX19pbnN0YW5jZUZpZWxkc1tuYW1lXSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKG5hbWUgaW4gdGhpcy5fX2luc3RhbmNlLl9fc3RhdGljRmllbGRzKSB7XG5cdFx0XHRcdFx0dGhpcy5fX2luc3RhbmNlLl9fc3RhdGljRmllbGRzW25hbWVdID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0fSlcblx0fVxuXG5cdHB1YmxpYyBvdmVycmlkZSBzZXJpYWxpemUoKTogU2VyaWFsaXphdGlvbk9iamVjdCB7XG5cdFx0Y29uc3Qgb2JqZWN0OiBTZXJpYWxpemF0aW9uT2JqZWN0ID0ge307XG5cblx0XHRvYmplY3RbdGhpcy5jbGFzc05hbWVdID0gey4uLnRoaXMuX19pbnN0YW5jZT8uX19pbnN0YW5jZUZpZWxkc307XG5cblx0XHRyZXR1cm4gb2JqZWN0O1xuXHR9XG5cblx0cHVibGljIG92ZXJyaWRlIHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuc2VyaWFsaXplKCksIG51bGwsIDIpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXN0VmFsdWUodmFsdWU6IGFueSwgZXhwZWN0ZWQ6IGFueSA9IG51bGwpOiBhbnkge1xuXHRjb25zdCB0eXBlT2YgPSB0eXBlb2YgdmFsdWU7XG5cblx0aWYgKGV4cGVjdGVkID09PSBudWxsKSB7XG5cdFx0aWYgKHZhbHVlID09PSBHUkFNTUFSLk5VTEwpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRpZiAodmFsdWUgPT09IEdSQU1NQVIuVFJVRSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGlmICh2YWx1ZSA9PT0gR1JBTU1BUi5GQUxTRSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAodHlwZU9mID09PSAnc3RyaW5nJyAmJiB2YWx1ZS50cmltKCkgIT09ICcnICYmICFpc05hTih2YWx1ZSkpIHtcblx0XHRcdHJldHVybiBOdW1iZXIodmFsdWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRzd2l0Y2ggKGV4cGVjdGVkKSB7XG5cdFx0Y2FzZSBUWVBFX0VOVU0uU1RSSU5HOlxuXHRcdFx0cmV0dXJuIHR5cGVPZiA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IFN0cmluZyh2YWx1ZSk7XG5cblx0XHRjYXNlIFRZUEVfRU5VTS5OVU1CRVI6XG5cdFx0XHRyZXR1cm4gdHlwZU9mID09PSAnbnVtYmVyJyA/IHZhbHVlIDogTnVtYmVyKHZhbHVlKTtcblxuXHRcdGNhc2UgVFlQRV9FTlVNLkJPT0xFQU46XG5cdFx0XHRyZXR1cm4gdHlwZU9mID09PSAnYm9vbGVhbicgPyB2YWx1ZSA6IHZhbHVlID09PSAndHJ1ZSc7XG5cblx0XHRjYXNlIFRZUEVfRU5VTS5OVUxMOlxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0x5cmFTdHJpbmcodmFsdWU6IHN0cmluZyk6IEFTVE5vZGUge1xuXHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuU1RSSU5HKTtcblx0bm9kZS52YWx1ZSA9IHZhbHVlO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTHlyYU51bWJlcih2YWx1ZTogbnVtYmVyKTogQVNUTm9kZSB7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5OVU1CRVIpO1xuXHRub2RlLnZhbHVlID0gdmFsdWU7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9MeXJhQm9vbGVhbih2YWx1ZTogYm9vbGVhbik6IEFTVE5vZGUge1xuXHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuQk9PTEVBTik7XG5cdG5vZGUudmFsdWUgPSB2YWx1ZTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0x5cmFOdWxsKCk6IEFTVE5vZGUge1xuXHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuTlVMTCk7XG5cdG5vZGUudmFsdWUgPSBHUkFNTUFSLk5VTEw7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9MeXJhQXJyYXkodmFsdWVzOiBhbnlbXSk6IEFTVE5vZGUge1xuXHRjb25zdCBub2RlID0gbmV3IEFTVEFycmF5Tm9kZSgpO1xuXHRub2RlLmVsZW1lbnRzID0gdmFsdWVzLm1hcCh2YWx1ZSA9PiB0b0x5cmFWYWx1ZSh2YWx1ZSkpO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTHlyYVZhbHVlKHZhbHVlOiBhbnkpOiBBU1ROb2RlIHtcblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgQVNUTm9kZSkge1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09IFRZUEVfRU5VTS5TVFJJTkcpIHtcblx0XHRyZXR1cm4gdG9MeXJhU3RyaW5nKHZhbHVlKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09IFRZUEVfRU5VTS5OVU1CRVIpIHtcblx0XHRyZXR1cm4gdG9MeXJhTnVtYmVyKHZhbHVlKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09IFRZUEVfRU5VTS5CT09MRUFOKSB7XG5cdFx0cmV0dXJuIHRvTHlyYUJvb2xlYW4odmFsdWUpO1xuXHR9XG5cblx0aWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gdG9MeXJhTnVsbCgpO1xuXHR9XG5cblx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0cmV0dXJuIHRvTHlyYUFycmF5KHZhbHVlKTtcblx0fVxuXG5cdHRocm93TmF0aXZlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IG5hdGl2ZSBvYmplY3QgdG8gTHlyYSB2YWx1ZScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJvbUx5cmFWYWx1ZSh2YWx1ZTogYW55KTogYW55IHtcblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgQVNUTm9kZSkge1xuXHRcdHJldHVybiBjYXN0VmFsdWUodmFsdWUudmFsdWUpO1xuXHR9XG5cblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgSW5zdGFuY2UpIHtcblx0XHRpZiAodmFsdWUuX19uYXRpdmVJbnN0YW5jZSkge1xuXHRcdFx0cmV0dXJuIHZhbHVlLl9fbmF0aXZlSW5zdGFuY2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBMeXJhT2JqZWN0Vmlldyh2YWx1ZSk7XG5cdH1cblxuXHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRyZXR1cm4gdmFsdWUubWFwKGZyb21MeXJhVmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIGNhc3RWYWx1ZSh2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5WYWx1ZSh2YWx1ZTogYW55KTogQVNUUmV0dXJuTm9kZSB7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUUmV0dXJuTm9kZSgpO1xuXHRub2RlLmFyZ3VtZW50ID0gdG9MeXJhVmFsdWUodmFsdWUpO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBOYXRpdmVJbnN0YW5jZShseXJhTmF0aXZlT2JqZWN0OiBMeXJhTmF0aXZlT2JqZWN0LCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpOiBJbnN0YW5jZSB7XG5cdGlmICghb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5oYXMobHlyYU5hdGl2ZU9iamVjdC5jbGFzc05hbWUpKSB7XG5cdFx0dGhyb3dOYXRpdmVFcnJvcihgQ2xhc3MgJHtseXJhTmF0aXZlT2JqZWN0LmNsYXNzTmFtZX0gbm90IGZvdW5kLmApO1xuXHR9XG5cblx0Y29uc3QgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KGx5cmFOYXRpdmVPYmplY3QuY2xhc3NOYW1lKTtcblx0Y29uc3QgaW5zdGFuY2U6IEluc3RhbmNlID0gY2xhc3NEZWYuY29uc3RydWN0RW1wdHlJbnN0YW5jZSgpO1xuXG5cdGluc3RhbmNlLl9fbmF0aXZlSW5zdGFuY2UgPSBseXJhTmF0aXZlT2JqZWN0O1xuXG5cdHJldHVybiBpbnN0YW5jZTtcbn1cblxuIiwKICAgICJpbXBvcnQge05hdGl2ZUNsYXNzfSBmcm9tIFwiLi4vbmF0aXZlX2NsYXNzXCI7XG5pbXBvcnQge0x5cmFOYXRpdmVPYmplY3R9IGZyb20gXCIuLi8uLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX2NvbnZlcnNpb25cIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vLi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5jb25zdCBDTEFTU19OQU1FID0gJ1N0cmluZyc7XG5cbmV4cG9ydCBjbGFzcyBMeXJhU3RyaW5nIGV4dGVuZHMgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdHZhbHVlOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IodmFsdWU6IHN0cmluZykge1xuXHRcdHN1cGVyKENMQVNTX05BTUUpO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0fVxuXG5cdC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcblx0dG9VcHBlckNhc2UoKTogTHlyYVN0cmluZyB7XG5cdFx0cmV0dXJuIG5ldyBMeXJhU3RyaW5nKHRoaXMudmFsdWUudG9VcHBlckNhc2UoKSk7XG5cdH1cblxuXHQvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG5cdHRvTG93ZXJDYXNlKCk6IEx5cmFTdHJpbmcge1xuXHRcdHJldHVybiBuZXcgTHlyYVN0cmluZyh0aGlzLnZhbHVlLnRvTG93ZXJDYXNlKCkpO1xuXHR9XG5cblx0b3ZlcnJpZGUgdG9TdHJpbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgU3RyaW5nVHlwZSBleHRlbmRzIE5hdGl2ZUNsYXNzIHtcblx0c3RhdGljIENMQVNTX05BTUUgPSBDTEFTU19OQU1FO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0Q0xBU1NfTkFNRSxcblx0XHRcdEx5cmFTdHJpbmcsXG5cdFx0XHRuZXcgU291cmNlKFxuXHRcdFx0XHRgXG5jbGFzcyAke0NMQVNTX05BTUV9IHtcblx0cHVibGljIGNvbnN0cnVjdG9yKHZhbHVlKTtcblx0XHRcdFx0XG5cdHB1YmxpYyB0b1VwcGVyQ2FzZSgpOiAke0NMQVNTX05BTUV9O1xuXHRcblx0cHVibGljIHRvTG93ZXJDYXNlKCk6ICR7Q0xBU1NfTkFNRX07XG5cblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZztcbn1gXG5cdFx0XHQpKTtcblxuXHRcdHRoaXMuaXNBdXRvbG9hZEFibGUgPSB0cnVlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7THlyYU5hdGl2ZU9iamVjdH0gZnJvbSBcIi4uLy4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfY29udmVyc2lvblwiO1xuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuLi8uLi9jb3JlL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmNvbnN0IENMQVNTX05BTUUgPSAnU3lzdGVtJztcblxuZXhwb3J0IGNsYXNzIEx5cmFTeXN0ZW0ge1xuXHRzdGF0aWMgYWxlcnQobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0YWxlcnQobWVzc2FnZSk7XG5cdH1cblxuXHRzdGF0aWMgcHJpbnQobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0Y29uc29sZS5sb2cobWVzc2FnZSk7XG5cdH1cblxuXHRzdGF0aWMgaW5mbyh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgTHlyYU5hdGl2ZU9iamVjdCkge1xuXHRcdFx0Y29uc29sZS5pbmZvKHZhbHVlLnNlcmlhbGl6ZSgpKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc29sZS5pbmZvKHZhbHVlKTtcblx0fVxuXG5cdHN0YXRpYyB3YXJuaW5nKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRjb25zb2xlLndhcm4odmFsdWUuc2VyaWFsaXplKCkpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zb2xlLndhcm4odmFsdWUpO1xuXHR9XG5cblx0c3RhdGljIGVycm9yKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKHZhbHVlLnNlcmlhbGl6ZSgpKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc29sZS5lcnJvcih2YWx1ZSk7XG5cdH1cblxuXHRzdGF0aWMgbG9nKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRjb25zb2xlLmxvZyh2YWx1ZS5zZXJpYWxpemUoKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKHZhbHVlKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgU3lzdGVtIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IENMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRDTEFTU19OQU1FLFxuXHRcdFx0THlyYVN5c3RlbSxcblx0XHRcdG5ldyBTb3VyY2UoXG5cdFx0XHRcdGBcbmNsYXNzICR7Q0xBU1NfTkFNRX0ge1xuXHRwdWJsaWMgc3RhdGljIGFsZXJ0KG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgc3RhdGljIHByaW50KG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgc3RhdGljIGluZm8odmFsdWU6IG1peGVkKTogdm9pZDtcblx0XG5cdHB1YmxpYyBzdGF0aWMgd2FybmluZyh2YWx1ZTogbWl4ZWQpOiB2b2lkO1xuXHRcblx0cHVibGljIHN0YXRpYyBlcnJvcih2YWx1ZTogbWl4ZWQpOiB2b2lkO1xuXHRcblx0cHVibGljIHN0YXRpYyBsb2codmFsdWU6IG1peGVkKTogdm9pZDtcbn1gXG5cdFx0XHQpKTtcblxuXHRcdHRoaXMuaXNBdXRvbG9hZEFibGUgPSBmYWxzZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge05hdGl2ZUNsYXNzfSBmcm9tIFwiLi4vbmF0aXZlX2NsYXNzXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uLy4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuY29uc3QgQ0xBU1NfTkFNRSA9ICdBc3NlcnQnO1xuXG5jb25zdCBpZkZhaWxlZCA9IChtZXNzYWdlOiBzdHJpbmcgPSAnJykgPT4ge1xuXHR0aHJvdyBuZXcgRXJyb3IoJ1tBc3NlcnRpb25FcnJvcl0gJyArIChtZXNzYWdlIHx8ICdBc3NlcnRpb24gZmFpbGVkLicpKTtcbn07XG5cbmV4cG9ydCBjbGFzcyBMeXJhQXNzZXJ0IHtcblx0c3RhdGljIGlzVHJ1ZShjb25kaXRpb246IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZyA9ICcnKSB7XG5cdFx0aWYgKCFjb25kaXRpb24pIHtcblx0XHRcdGlmRmFpbGVkKG1lc3NhZ2UpO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBpc0ZhbHNlKGNvbmRpdGlvbjogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nID0gJycpIHtcblx0XHRpZiAoY29uZGl0aW9uKSB7XG5cdFx0XHRpZkZhaWxlZChtZXNzYWdlKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFzc2VydCBleHRlbmRzIE5hdGl2ZUNsYXNzIHtcblx0c3RhdGljIENMQVNTX05BTUUgPSBDTEFTU19OQU1FO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0Q0xBU1NfTkFNRSxcblx0XHRcdEx5cmFBc3NlcnQsXG5cdFx0XHRuZXcgU291cmNlKFxuXHRcdFx0XHRgXG5jbGFzcyAke0NMQVNTX05BTUV9IHtcblx0cHVibGljIHN0YXRpYyBpc1RydWUoY29uZGl0aW9uOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcgPSBcIlwiKTogdm9pZDtcblx0XG5cdHB1YmxpYyBzdGF0aWMgaXNGYWxzZShjb25kaXRpb246IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZyA9IFwiXCIpOiB2b2lkO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IGZhbHNlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7THlyYU5hdGl2ZU9iamVjdH0gZnJvbSBcIi4uLy4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfY29udmVyc2lvblwiO1xuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuLi8uLi9jb3JlL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmNvbnN0IENMQVNTX05BTUUgPSAnTnVtYmVyJztcblxuZXhwb3J0IGNsYXNzIEx5cmFOdW1iZXIgZXh0ZW5kcyBMeXJhTmF0aXZlT2JqZWN0IHtcblx0dmFsdWU6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcih2YWx1ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIoQ0xBU1NfTkFNRSk7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHR9XG5cblx0b3ZlcnJpZGUgdG9TdHJpbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZS50b1N0cmluZygpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBOdW1iZXJUeXBlIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IENMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRDTEFTU19OQU1FLFxuXHRcdFx0THlyYU51bWJlcixcblx0XHRcdG5ldyBTb3VyY2UoXG5cdFx0XHRcdGBcbmNsYXNzICR7Q0xBU1NfTkFNRX0ge1xuXHRwdWJsaWMgY29uc3RydWN0b3IodmFsdWUpO1xuXG5cdHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmc7XG59YFxuXHRcdFx0KSk7XG5cblx0XHR0aGlzLmlzQXV0b2xvYWRBYmxlID0gdHJ1ZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge05hdGl2ZUNsYXNzfSBmcm9tIFwiLi4vbmF0aXZlX2NsYXNzXCI7XG5pbXBvcnQge0x5cmFOYXRpdmVPYmplY3R9IGZyb20gXCIuLi8uLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX2NvbnZlcnNpb25cIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vLi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5jb25zdCBBUlJBWV9DTEFTU19OQU1FID0gJ0FycmF5JztcbmNvbnN0IEFSUkFZX0lURVJBVE9SX0NMQVNTX05BTUUgPSAnQXJyYXlJdGVyYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBMeXJhQXJyYXkgZXh0ZW5kcyBMeXJhTmF0aXZlT2JqZWN0IHtcblx0dmFsdWVzOiBhbnlbXTtcblxuXHRjb25zdHJ1Y3Rvcih2YWx1ZXM6IGFueVtdID0gW10pIHtcblx0XHRzdXBlcihBUlJBWV9DTEFTU19OQU1FKTtcblxuXHRcdHRoaXMudmFsdWVzID0gdmFsdWVzO1xuXHR9XG5cblx0aXRlcmF0b3IoKTogTHlyYUFycmF5SXRlcmF0b3Ige1xuXHRcdHJldHVybiBuZXcgTHlyYUFycmF5SXRlcmF0b3IodGhpcyk7XG5cdH1cblxuXHRsZW5ndGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMubGVuZ3RoO1xuXHR9XG5cblx0cHVzaCh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0dGhpcy52YWx1ZXMucHVzaCh2YWx1ZSk7XG5cdH1cblxuXHQvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG5cdGdldChpbmRleDogbnVtYmVyKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXNbaW5kZXhdID8/IG51bGw7XG5cdH1cblxuXHQvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG5cdHJlbW92ZUF0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnZhbHVlcyA9IHRoaXMudmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG5cdH1cblxuXHRvdmVycmlkZSB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdGNvbnN0IHZhbHVlcyA9IHRoaXNcblx0XHRcdC52YWx1ZXNcblx0XHRcdC5tYXAodmFsdWUgPT4ge1xuXHRcdFx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBMeXJhQXJyYXkpIHtcblx0XHRcdFx0XHRyZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHR9KTtcblxuXHRcdHJldHVybiBgWyR7dmFsdWVzLmpvaW4oJywgJyl9XWA7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFycmF5VHlwZSBleHRlbmRzIE5hdGl2ZUNsYXNzIHtcblx0c3RhdGljIENMQVNTX05BTUUgPSBBUlJBWV9DTEFTU19OQU1FO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0QVJSQVlfQ0xBU1NfTkFNRSxcblx0XHRcdEx5cmFBcnJheSxcblx0XHRcdG5ldyBTb3VyY2UoXG5cdFx0XHRcdGBcbmNsYXNzICR7QVJSQVlfQ0xBU1NfTkFNRX08VD4gaW1wbGVtZW50cyBJdGVyYWJsZTxUPiB7XG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWx1ZXMgPSBbXSk7XG5cdFxuXHRwdWJsaWMgaXRlcmF0b3IoKTogSXRlcmF0b3I8VD47XG5cdFxuXHRwdWJsaWMgbGVuZ3RoKCk6IG51bWJlcjtcblx0XG5cdHB1YmxpYyBwdXNoKHZhbHVlOiBUKTogdm9pZDtcblx0XG5cdHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IFQ/O1xuXHRcblx0cHVibGljIHJlbW92ZUF0KGluZGV4OiBudW1iZXIpOiB2b2lkO1xuXHRcblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZztcbn1gXG5cdFx0XHQpKTtcblxuXHRcdHRoaXMuaXNBdXRvbG9hZEFibGUgPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhQXJyYXlJdGVyYXRvciBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHR2YWx1ZXM6IGFueVtdO1xuXHRpbmRleDogbnVtYmVyID0gMDtcblxuXHRjb25zdHJ1Y3RvcihhcnJheTogTHlyYUFycmF5KSB7XG5cdFx0c3VwZXIoQVJSQVlfSVRFUkFUT1JfQ0xBU1NfTkFNRSk7XG5cblx0XHR0aGlzLnZhbHVlcyA9IGFycmF5LnZhbHVlcztcblx0fVxuXG5cdHJld2luZCgpIHtcblx0XHR0aGlzLmluZGV4ID0gMDtcblx0fVxuXG5cdGhhc05leHQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaW5kZXggPCB0aGlzLnZhbHVlcy5sZW5ndGg7XG5cdH1cblxuXHRuZXh0KCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmluZGV4ICsgMSA+IHRoaXMudmFsdWVzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuaW5kZXgrKztcblx0fVxuXG5cdC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcblx0cHJldmlvdXMoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaW5kZXggKyAxIDwgMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuaW5kZXgtLTtcblx0fVxuXG5cdC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcblx0a2V5KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuaW5kZXg7XG5cdH1cblxuXHRjdXJyZW50KCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzW3RoaXMuaW5kZXhdO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBcnJheUl0ZXJhdG9yVHlwZSBleHRlbmRzIE5hdGl2ZUNsYXNzIHtcblx0c3RhdGljIENMQVNTX05BTUUgPSBBUlJBWV9JVEVSQVRPUl9DTEFTU19OQU1FO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0QVJSQVlfSVRFUkFUT1JfQ0xBU1NfTkFNRSxcblx0XHRcdEx5cmFBcnJheSxcblx0XHRcdG5ldyBTb3VyY2UoXG5cdFx0XHRcdGBcbmNsYXNzICR7QVJSQVlfSVRFUkFUT1JfQ0xBU1NfTkFNRX08VD4gaW1wbGVtZW50cyBJdGVyYXRvcjxUPiB7XG5cdHB1YmxpYyBjb25zdHJ1Y3RvcihhcnJheTogQXJyYXk8VD4pO1xuXHRcblx0cHVibGljIGhhc05leHQoKTogYm9vbGVhbjtcblx0XG5cdHB1YmxpYyBuZXh0KCk6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgcHJldmlvdXMoKTogdm9pZDtcblx0XG5cdHB1YmxpYyBrZXkoKTogbnVtYmVyO1xuXHRcblx0cHVibGljIGN1cnJlbnQoKTogVDtcblx0XG5cdHB1YmxpYyByZXdpbmQoKTogdm9pZDtcbn1gXG5cdFx0XHQpKTtcblxuXHRcdHRoaXMuaXNBdXRvbG9hZEFibGUgPSB0cnVlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7dG9MeXJhVmFsdWV9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge0xhbWJkYUZ1bmN0aW9uQ2FsbH0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX3J1bnRpbWVcIjtcblxuXG5leHBvcnQgY2xhc3MgU3RhdGU8VCA9IGFueT4ge1xuXHRwcml2YXRlIHZhbHVlOiBUO1xuXHRwcml2YXRlIHN1YnNjcmliZXJzOiBNYXA8bnVtYmVyLCAodmFsdWU6IFQpID0+IHZvaWQ+ID0gbmV3IE1hcDxudW1iZXIsICh2YWx1ZTogVCkgPT4gdm9pZD4oKTtcblx0cHJpdmF0ZSBpZDogbnVtYmVyID0gMDtcblxuXHRjb25zdHJ1Y3Rvcihpbml0aWFsOiBUKSB7XG5cdFx0dGhpcy52YWx1ZSA9IGluaXRpYWw7XG5cdH1cblxuXHRnZXQoKTogVCB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdH1cblxuXHRzZXQodmFsdWU6IFQpOiB2b2lkIHtcblx0XHRpZiAodGhpcy52YWx1ZSA9PT0gdmFsdWUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdFx0dGhpcy5ub3RpZnkoKTtcblx0fVxuXG5cdHN1YnNjcmliZShmbjogTGFtYmRhRnVuY3Rpb25DYWxsKTogbnVtYmVyIHtcblx0XHRjb25zdCBuZXh0SWQ6IG51bWJlciA9IHRoaXMuaWQrKztcblx0XHR0aGlzLnN1YnNjcmliZXJzLnNldChuZXh0SWQsIHRoaXMud3JhcENhbGxiYWNrKGZuKSk7XG5cdFx0cmV0dXJuIG5leHRJZDtcblx0fVxuXG5cdHVuc3Vic2NyaWJlKGlkOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zdWJzY3JpYmVycy5kZWxldGUoaWQpO1xuXHR9XG5cblx0cHJpdmF0ZSBub3RpZnkoKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBmbiBvZiB0aGlzLnN1YnNjcmliZXJzLnZhbHVlcygpKSB7XG5cdFx0XHRmbih0aGlzLnZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHdyYXBDYWxsYmFjayhmbjogTGFtYmRhRnVuY3Rpb25DYWxsKSB7XG5cdFx0cmV0dXJuICh2YWx1ZTogVCk6IHZvaWQgPT4ge1xuXHRcdFx0Zm4uZXZhbENhbGwobnVsbCwgdG9MeXJhVmFsdWUodmFsdWUpKTtcblx0XHR9XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uLy4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcbmltcG9ydCB7U3RhdGV9IGZyb20gXCIuLi8uLi9jb3JlL2V2ZW50L3N0YXRlXCI7XG5pbXBvcnQgdHlwZSB7TGFtYmRhRnVuY3Rpb25DYWxsfSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9ydW50aW1lXCI7XG5cbmNvbnN0IENMQVNTX05BTUUgPSAnU3RhdGUnO1xuXG5leHBvcnQgY2xhc3MgTHlyYVN0YXRlPFQ+IGV4dGVuZHMgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdHByaXZhdGUgc3RhdGU6IFN0YXRlPFQ+O1xuXG5cdGNvbnN0cnVjdG9yKGluaXRpYWw6IFQpIHtcblx0XHRzdXBlcihDTEFTU19OQU1FKTtcblx0XHR0aGlzLnN0YXRlID0gbmV3IFN0YXRlPFQ+KGluaXRpYWwpO1xuXHR9XG5cblx0Z2V0KCk6IFQge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLmdldCgpO1xuXHR9XG5cblx0c2V0KHZhbHVlOiBUKTogdm9pZCB7XG5cdFx0dGhpcy5zdGF0ZS5zZXQodmFsdWUpO1xuXHR9XG5cblx0c3Vic2NyaWJlKGZuOiBMYW1iZGFGdW5jdGlvbkNhbGwpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLnN1YnNjcmliZShmbik7XG5cdH1cblxuXHR1bnN1YnNjcmliZShpZDogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUudW5zdWJzY3JpYmUoaWQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTdGF0ZVR5cGUgZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdENMQVNTX05BTUUsXG5cdFx0XHRMeXJhU3RhdGUsXG5cdFx0XHRuZXcgU291cmNlKFxuXHRcdFx0XHRgXG5jbGFzcyAke0NMQVNTX05BTUV9PFQ+IHtcblx0cHVibGljIGNvbnN0cnVjdG9yKGluaXRpYWw6IFQpO1xuXG5cdHB1YmxpYyBnZXQoKTogVDtcblx0XG5cdHB1YmxpYyBzZXQodmFsdWU6IFQpOiB2b2lkO1xuXHRcblx0cHVibGljIHN1YnNjcmliZShmbjogKFQpIC0+IG1peGVkKTogbnVtYmVyO1xuXHRcblx0cHVibGljIHVuc3Vic2NyaWJlKGlkOiBudW1iZXIpOiBib29sZWFuO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IHRydWU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uLy4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuY29uc3QgQ0xBU1NfTkFNRSA9ICdMeXJhRXZlbnRzJztcblxuZXhwb3J0IGNsYXNzIEx5cmFFdmVudCBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGV2ZW50OiBFdmVudCkge1xuXHRcdHN1cGVyKENMQVNTX05BTUUpO1xuXHR9XG5cblx0Z2V0VHlwZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmV2ZW50LnR5cGU7XG5cdH1cblxuXHRwcmV2ZW50RGVmYXVsdCgpOiB2b2lkIHtcblx0XHR0aGlzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEV2ZW50VHlwZSBleHRlbmRzIE5hdGl2ZUNsYXNzIHtcblx0c3RhdGljIENMQVNTX05BTUUgPSBDTEFTU19OQU1FO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0Q0xBU1NfTkFNRSxcblx0XHRcdEx5cmFFdmVudCxcblx0XHRcdG5ldyBTb3VyY2UoXG5cdFx0XHRcdGBcbmNsYXNzICR7Q0xBU1NfTkFNRX0ge1xuXHRwdWJsaWMgY29uc3RydWN0b3IoZXZlbnQpO1xuXG5cdHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZztcblxuXHRwdWJsaWMgcHJldmVudERlZmF1bHQoKTogdm9pZDtcbn1gKSk7XG5cblx0XHR0aGlzLmlzQXV0b2xvYWRBYmxlID0gdHJ1ZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge05hdGl2ZUNsYXNzfSBmcm9tIFwiLi9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7U3RyaW5nVHlwZX0gZnJvbSBcIi4vY2xhc3Nlcy9zdHJpbmdcIjtcbmltcG9ydCB7U3lzdGVtfSBmcm9tIFwiLi9jbGFzc2VzL3N5c3RlbVwiO1xuaW1wb3J0IHtBc3NlcnR9IGZyb20gXCIuL2NsYXNzZXMvYXNzZXJ0XCI7XG5pbXBvcnQge051bWJlclR5cGV9IGZyb20gXCIuL2NsYXNzZXMvbnVtYmVyXCI7XG5pbXBvcnQge0FycmF5SXRlcmF0b3JUeXBlLCBBcnJheVR5cGV9IGZyb20gXCIuL2NsYXNzZXMvYXJyYXlcIjtcbmltcG9ydCB7U3RhdGVUeXBlfSBmcm9tIFwiLi9jbGFzc2VzL3N0YXRlXCI7XG5pbXBvcnQge0V2ZW50VHlwZX0gZnJvbSBcIi4vY2xhc3Nlcy9ldmVudFwiO1xuXG5leHBvcnQgY2xhc3MgTmF0aXZlQ2xhc3NlcyB7XG5cdHJlYWRvbmx5IHJlZ2lzdHJ5OiBNYXA8c3RyaW5nLCBOYXRpdmVDbGFzcz4gPSBuZXcgTWFwKCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoQXNzZXJ0LkNMQVNTX05BTUUsIG5ldyBBc3NlcnQoKSk7XG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoU3lzdGVtLkNMQVNTX05BTUUsIG5ldyBTeXN0ZW0oKSk7XG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoU3RyaW5nVHlwZS5DTEFTU19OQU1FLCBuZXcgU3RyaW5nVHlwZSgpKTtcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChOdW1iZXJUeXBlLkNMQVNTX05BTUUsIG5ldyBOdW1iZXJUeXBlKCkpO1xuXHRcdHRoaXMucmVnaXN0cnkuc2V0KEFycmF5VHlwZS5DTEFTU19OQU1FLCBuZXcgQXJyYXlUeXBlKCkpO1xuXHRcdHRoaXMucmVnaXN0cnkuc2V0KEFycmF5SXRlcmF0b3JUeXBlLkNMQVNTX05BTUUsIG5ldyBBcnJheUl0ZXJhdG9yVHlwZSgpKVxuXHRcdHRoaXMucmVnaXN0cnkuc2V0KFN0YXRlVHlwZS5DTEFTU19OQU1FLCBuZXcgU3RhdGVUeXBlKCkpO1xuXHRcdHRoaXMucmVnaXN0cnkuc2V0KEV2ZW50VHlwZS5DTEFTU19OQU1FLCBuZXcgRXZlbnRUeXBlKCkpXG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtBU1RQYXJhbWV0ZXJOb2RlLCBBU1RUeXBlTm9kZX0gZnJvbSBcIi4uL2NvcmUvYXN0XCI7XG5pbXBvcnQge1RZUEVfRU5VTX0gZnJvbSBcIi4uL2NvcmUvZ3JhbW1hclwiO1xuaW1wb3J0IHt0aHJvd05hdGl2ZUVycm9yfSBmcm9tIFwiLi4vY29yZS9lcnJvcnNcIjtcblxuZXhwb3J0IGNsYXNzIE5hdGl2ZUZ1bmN0aW9uIHtcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXHRyZWFkb25seSBwYXJhbWV0ZXJOb2RlczogQVNUUGFyYW1ldGVyTm9kZVtdID0gW107XG5cdHJlYWRvbmx5IHJldHVyblR5cGU6IEFTVFR5cGVOb2RlO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgcGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdLCByZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5wYXJhbWV0ZXJOb2RlcyA9IHBhcmFtZXRlcnM7XG5cdFx0dGhpcy5yZXR1cm5UeXBlID0gcmV0dXJuVHlwZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTmF0aXZlRnVuY3Rpb25UeXBlUmVnaXN0cnkge1xuXHRyZWFkb25seSBmdW5jdGlvbnM6IE1hcDxzdHJpbmcsIE5hdGl2ZUZ1bmN0aW9uPiA9IG5ldyBNYXAoKTtcblxuXHRwdWJsaWMgaGFzKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmZ1bmN0aW9ucy5oYXMobmFtZSk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0KG5hbWU6IHN0cmluZyk6IE5hdGl2ZUZ1bmN0aW9uIHtcblx0XHRjb25zdCBuYXRpdmVGdW5jdGlvbjogTmF0aXZlRnVuY3Rpb24gfCB1bmRlZmluZWQgPSB0aGlzLmZ1bmN0aW9ucy5nZXQobmFtZSk7XG5cdFx0aWYgKCFuYXRpdmVGdW5jdGlvbikge1xuXHRcdFx0dGhyb3dOYXRpdmVFcnJvcihgRnVuY3Rpb24gJHtuYW1lfSBub3QgZm91bmQuYCk7XG5cdFx0fVxuXHRcdHJldHVybiBuYXRpdmVGdW5jdGlvbjtcblx0fVxuXG5cdHB1YmxpYyBzZXQobmFtZTogc3RyaW5nLCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sIHJldHVyblR5cGU6IEFTVFR5cGVOb2RlKTogTmF0aXZlRnVuY3Rpb25UeXBlUmVnaXN0cnkge1xuXHRcdHRoaXMuZnVuY3Rpb25zLnNldChuYW1lLCBuZXcgTmF0aXZlRnVuY3Rpb24obmFtZSwgcGFyYW1ldGVycywgcmV0dXJuVHlwZSkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBOYXRpdmVGdW5jdGlvbnMge1xuXHRzdGF0aWMgUFJJTlQgPSAncHJpbnQnO1xuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fVxuXHQgKi9cblx0cHVibGljIGdldEdsb2JhbEZ1bmN0aW9ucygpOiB7IFtrZXk6IHN0cmluZ106ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55IH0ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRbTmF0aXZlRnVuY3Rpb25zLlBSSU5UXTogKC4uLmFyZ3MpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coLi4uYXJncyk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cdHB1YmxpYyBnZXRHbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeSgpOiBOYXRpdmVGdW5jdGlvblR5cGVSZWdpc3RyeSB7XG5cdFx0Y29uc3QgZnVuY3Rpb25zID0gbmV3IE5hdGl2ZUZ1bmN0aW9uVHlwZVJlZ2lzdHJ5KCk7XG5cdFx0ZnVuY3Rpb25zLnNldChcblx0XHRcdE5hdGl2ZUZ1bmN0aW9ucy5QUklOVCxcblx0XHRcdFtwYXJhbWV0ZXIodHlwZShUWVBFX0VOVU0uU1RSSU5HKSwgJ21lc3NhZ2UnKV0sXG5cdFx0XHR0eXBlKFRZUEVfRU5VTS5WT0lEKVxuXHRcdClcblxuXHRcdHJldHVybiBmdW5jdGlvbnM7XG5cdH1cbn1cblxuZnVuY3Rpb24gdHlwZShuYW1lOiBzdHJpbmcsIG51bGxhYmxlID0gZmFsc2UpOiBBU1RUeXBlTm9kZSB7XG5cdHJldHVybiBuZXcgQVNUVHlwZU5vZGUoQVNUVHlwZU5vZGUuS0lORF9TSU1QTEUsIG5hbWUsIG51bGxhYmxlKTtcbn1cblxuZnVuY3Rpb24gcGFyYW1ldGVyKHR5cGVBbm5vdGF0aW9uOiBBU1RUeXBlTm9kZSwgbmFtZTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGFueSA9IG51bGwpOiBBU1RQYXJhbWV0ZXJOb2RlIHtcblx0cmV0dXJuIG5ldyBBU1RQYXJhbWV0ZXJOb2RlKG5hbWUsIHR5cGVBbm5vdGF0aW9uLCBkZWZhdWx0VmFsdWUpO1xufVxuIiwKICAgICJpbXBvcnQge1RZUEVfRU5VTX0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcbmltcG9ydCB7XG5cdEFTVENsYXNzTm9kZSxcblx0QVNURmllbGROb2RlLFxuXHRBU1RJbnRlcmZhY2VOb2RlLFxuXHRBU1RNZXRob2ROb2RlLFxuXHRBU1ROb2RlLFxuXHRBU1RQYXJhbWV0ZXJOb2RlLFxuXHRBU1RUeXBlTm9kZVxufSBmcm9tIFwiLi4vYXN0XCI7XG5pbXBvcnQge3Rocm93VHlwZUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcblxuZXhwb3J0IGNsYXNzIFByaW1pdGl2ZVR5cGVzIHtcblx0c3RhdGljIHJlYWRvbmx5IE5VTUJFUjogc3RyaW5nID0gVFlQRV9FTlVNLk5VTUJFUjtcblx0c3RhdGljIHJlYWRvbmx5IFNUUklORzogc3RyaW5nID0gVFlQRV9FTlVNLlNUUklORztcblx0c3RhdGljIHJlYWRvbmx5IEJPT0xFQU46IHN0cmluZyA9IFRZUEVfRU5VTS5CT09MRUFOO1xuXHRzdGF0aWMgcmVhZG9ubHkgTUlYRUQ6IHN0cmluZyA9IFRZUEVfRU5VTS5NSVhFRDtcblx0c3RhdGljIHJlYWRvbmx5IE5VTEw6IHN0cmluZyA9IFRZUEVfRU5VTS5OVUxMO1xuXHRzdGF0aWMgcmVhZG9ubHkgVk9JRDogc3RyaW5nID0gVFlQRV9FTlVNLlZPSUQ7XG5cblx0c3RhdGljIGhhc1R5cGUodHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKFByaW1pdGl2ZVR5cGVzLCB0eXBlLnRvVXBwZXJDYXNlKCkpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBQcmltaXRpdmVDbGFzc1R5cGVzIHtcblx0c3RhdGljIHJlYWRvbmx5IEFSUkFZOiBzdHJpbmcgPSBUWVBFX0VOVU0uQVJSQVk7XG5cblx0c3RhdGljIENMQVNTTkFNRV9NQVA6IHsgW3M6IHN0cmluZ106IHN0cmluZzsgfSA9IHtcblx0XHRhcnJheTogJ0FycmF5J1xuXHR9XG5cblx0c3RhdGljIGdldENsYXNzUmVmTmFtZSh0eXBlOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcblx0XHRyZXR1cm4gUHJpbWl0aXZlQ2xhc3NUeXBlcy5DTEFTU05BTUVfTUFQW3R5cGVdIHx8IG51bGw7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGUge1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0fVxuXG5cdGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzID09PSBvdGhlcjtcblx0fVxuXG5cdGFjY2VwdHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lcXVhbHMob3RoZXIpO1xuXHR9XG5cblx0dG9TdHJpbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gYFR5cGUoJHt0aGlzLm5hbWV9KWA7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFByaW1pdGl2ZVR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIobmFtZSk7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBQcmltaXRpdmVUeXBlXG5cdFx0XHQmJiB0aGlzLm5hbWUgPT09IG90aGVyLm5hbWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE1peGVkVHlwZSBleHRlbmRzIFR5cGUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihQcmltaXRpdmVUeXBlcy5NSVhFRCk7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBNaXhlZFR5cGU7XG5cdH1cblxuXHRvdmVycmlkZSBhY2NlcHRzKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBWb2lkVHlwZSBleHRlbmRzIFR5cGUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihQcmltaXRpdmVUeXBlcy5WT0lEKTtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBvdGhlciBpbnN0YW5jZW9mIFZvaWRUeXBlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBOdWxsVHlwZSBleHRlbmRzIFR5cGUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihQcmltaXRpdmVUeXBlcy5OVUxMKTtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBvdGhlciBpbnN0YW5jZW9mIE51bGxUeXBlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBOdWxsYWJsZVR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0aW5uZXI6IFR5cGU7XG5cblx0Y29uc3RydWN0b3IoaW5uZXI6IFR5cGUpIHtcblx0XHRzdXBlcihpbm5lci50b1N0cmluZygpICsgJz8nKTtcblx0XHR0aGlzLmlubmVyID0gaW5uZXI7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRpZiAob3RoZXIgPT09IFR5cGVzLk5VTEwpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChvdGhlciBpbnN0YW5jZW9mIE51bGxhYmxlVHlwZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuaW5uZXIuZXF1YWxzKG90aGVyLmlubmVyKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRvdmVycmlkZSBhY2NlcHRzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIG90aGVyID09PSBUeXBlcy5OVUxMIHx8IHRoaXMuaW5uZXIuYWNjZXB0cyhvdGhlcik7XG5cdH1cblxuXHRvdmVycmlkZSB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmlubmVyLnRvU3RyaW5nKCkgKyAnPyc7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFZOb2RlVHlwZSBleHRlbmRzIFR5cGUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigndm5vZGUnKTtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBvdGhlciBpbnN0YW5jZW9mIFZvaWRUeXBlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlcyB7XG5cdHN0YXRpYyByZWFkb25seSBOVU1CRVI6IFByaW1pdGl2ZVR5cGUgPSBuZXcgUHJpbWl0aXZlVHlwZShQcmltaXRpdmVUeXBlcy5OVU1CRVIpO1xuXHRzdGF0aWMgcmVhZG9ubHkgU1RSSU5HOiBQcmltaXRpdmVUeXBlID0gbmV3IFByaW1pdGl2ZVR5cGUoUHJpbWl0aXZlVHlwZXMuU1RSSU5HKTtcblx0c3RhdGljIHJlYWRvbmx5IEJPT0xFQU46IFByaW1pdGl2ZVR5cGUgPSBuZXcgUHJpbWl0aXZlVHlwZShQcmltaXRpdmVUeXBlcy5CT09MRUFOKTtcblx0c3RhdGljIHJlYWRvbmx5IE1JWEVEOiBNaXhlZFR5cGUgPSBuZXcgTWl4ZWRUeXBlKCk7XG5cdHN0YXRpYyByZWFkb25seSBOVUxMOiBOdWxsVHlwZSA9IG5ldyBOdWxsVHlwZSgpO1xuXHRzdGF0aWMgcmVhZG9ubHkgVk9JRDogVm9pZFR5cGUgPSBuZXcgVm9pZFR5cGUoKTtcblx0c3RhdGljIHJlYWRvbmx5IFZOT0RFOiBWTm9kZVR5cGUgPSBuZXcgVk5vZGVUeXBlKCk7XG5cblx0c3RhdGljIGdldFR5cGUobmFtZTogc3RyaW5nKTogVHlwZSB7XG5cdFx0aWYgKCFPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChQcmltaXRpdmVUeXBlcywgbmFtZS50b1VwcGVyQ2FzZSgpKSkge1xuXHRcdFx0dGhyb3dUeXBlRXJyb3IoYFVua25vd24gcHJpbWl0aXZlIHR5cGUgJHtuYW1lfS5gKTtcblx0XHR9XG5cblx0XHRjb25zdCB0eXBlczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0gVHlwZXM7XG5cdFx0cmV0dXJuIHR5cGVzW25hbWUudG9VcHBlckNhc2UoKV07XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGVWYXJpYWJsZSBleHRlbmRzIFR5cGUge1xuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcblx0XHRzdXBlcihuYW1lKTtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSkge1xuXHRcdHJldHVybiBvdGhlciBpbnN0YW5jZW9mIFR5cGVWYXJpYWJsZVxuXHRcdFx0JiYgdGhpcy5uYW1lID09PSBvdGhlci5uYW1lO1xuXHR9XG5cblx0b3ZlcnJpZGUgYWNjZXB0cygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVHlwZVBhcmFtZXRlclN5bWJvbCB7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblx0cmVhZG9ubHkgdmFyaWFibGVUeXBlOiBUeXBlVmFyaWFibGU7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnZhcmlhYmxlVHlwZSA9IG5ldyBUeXBlVmFyaWFibGUobmFtZSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpZWxkU3ltYm9sIHtcblx0cmVhZG9ubHkgbm9kZTogQVNURmllbGROb2RlO1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGZpZWxkVHlwZTogVHlwZTtcblx0cmVhZG9ubHkgaXNTdGF0aWM6IGJvb2xlYW4gPSBmYWxzZTtcblx0cmVhZG9ubHkgaXNQcml2YXRlOiBib29sZWFuID0gZmFsc2U7XG5cdHJlYWRvbmx5IGlzUHVibGljOiBib29sZWFuID0gZmFsc2U7XG5cdHJlYWRvbmx5IGlzUmVhZG9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcblx0b3duZXI6IENsYXNzU3ltYm9sIHwgSW50ZXJmYWNlU3ltYm9sIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3Iobm9kZTogQVNURmllbGROb2RlLCBmaWVsZFR5cGU6IFR5cGUpIHtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHRcdHRoaXMubmFtZSA9IG5vZGUubmFtZTtcblx0XHR0aGlzLmZpZWxkVHlwZSA9IGZpZWxkVHlwZTtcblx0XHR0aGlzLmlzU3RhdGljID0gbm9kZS5tb2RpZmllcnMuc3RhdGljO1xuXHRcdHRoaXMuaXNQcml2YXRlID0gbm9kZS5tb2RpZmllcnMucHJpdmF0ZTtcblx0XHR0aGlzLmlzUHVibGljID0gbm9kZS5tb2RpZmllcnMucHVibGljO1xuXHRcdHRoaXMuaXNSZWFkb25seSA9IG5vZGUubW9kaWZpZXJzLnJlYWRvbmx5O1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJTeW1ib2wge1xuXHRyZWFkb25seSBub2RlOiBBU1RQYXJhbWV0ZXJOb2RlIHwgbnVsbDtcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXHRyZWFkb25seSBwYXJhbWV0ZXJUeXBlOiBUeXBlO1xuXHRyZWFkb25seSBkZWZhdWx0VHlwZTogVHlwZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZTogVHlwZSwgZGVmYXVsdFZhbHVlOiBUeXBlIHwgbnVsbCA9IG51bGwsIG5vZGU6IEFTVFBhcmFtZXRlck5vZGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5wYXJhbWV0ZXJUeXBlID0gdHlwZTtcblx0XHR0aGlzLmRlZmF1bHRUeXBlID0gZGVmYXVsdFZhbHVlO1xuXHRcdHRoaXMubm9kZSA9IG5vZGU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE1ldGhvZFN5bWJvbCB7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblx0cmVhZG9ubHkgbm9kZTogQVNUTWV0aG9kTm9kZTtcblx0cmVhZG9ubHkgaXNTdGF0aWM6IGJvb2xlYW4gPSBmYWxzZTtcblx0cmVhZG9ubHkgaXNQcml2YXRlOiBib29sZWFuID0gZmFsc2U7XG5cdHJlYWRvbmx5IGlzUHVibGljOiBib29sZWFuID0gZmFsc2U7XG5cblx0dHlwZVBhcmFtZXRlclN5bWJvbHM6IFR5cGVQYXJhbWV0ZXJTeW1ib2xbXSA9IFtdO1xuXHRwYXJhbWV0ZXJTeW1ib2xzOiBQYXJhbWV0ZXJTeW1ib2xbXSA9IFtdO1xuXHRyZXR1cm5UeXBlOiBUeXBlID0gVHlwZXMuTUlYRUQ7XG5cblx0b3duZXI6IENsYXNzU3ltYm9sIHwgSW50ZXJmYWNlU3ltYm9sIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3Iobm9kZTogQVNUTWV0aG9kTm9kZSkge1xuXHRcdHRoaXMubmFtZSA9IG5vZGUubmFtZTtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHRcdHRoaXMuaXNTdGF0aWMgPSBub2RlLm1vZGlmaWVycy5zdGF0aWM7XG5cdFx0dGhpcy5pc1ByaXZhdGUgPSBub2RlLm1vZGlmaWVycy5wcml2YXRlO1xuXHRcdHRoaXMuaXNQdWJsaWMgPSBub2RlLm1vZGlmaWVycy5wdWJsaWM7XG5cdH1cblxuXHRnZXQgYm9keSgpOiBBU1ROb2RlW10ge1xuXHRcdHJldHVybiB0aGlzLm5vZGUuY2hpbGRyZW47XG5cdH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBPYmplY3RTeW1ib2wge1xuXHRuYW1lOiBzdHJpbmc7XG5cdHR5cGVQYXJhbWV0ZXJTeW1ib2xzOiBUeXBlUGFyYW1ldGVyU3ltYm9sW107XG5cdHN0YXRpY0ZpZWxkU3ltYm9sczogTWFwPHN0cmluZywgRmllbGRTeW1ib2w+O1xuXHRpbnN0YW5jZU1ldGhvZFN5bWJvbHM6IE1hcDxzdHJpbmcsIE1ldGhvZFN5bWJvbD47XG59XG5cbmV4cG9ydCBjbGFzcyBDbGFzc1N5bWJvbCBpbXBsZW1lbnRzIE9iamVjdFN5bWJvbCB7XG5cdHJlYWRvbmx5IG5vZGU6IEFTVENsYXNzTm9kZTtcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXHRyZWFkb25seSBzdXBlckNsYXNzOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuXHRzdXBlckNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCB8IG51bGwgPSBudWxsO1xuXHR0eXBlUGFyYW1ldGVyU3ltYm9sczogVHlwZVBhcmFtZXRlclN5bWJvbFtdID0gW107XG5cdGluc3RhbmNlRmllbGRTeW1ib2xzOiBNYXA8c3RyaW5nLCBGaWVsZFN5bWJvbD4gPSBuZXcgTWFwKCk7XG5cdHN0YXRpY0ZpZWxkU3ltYm9sczogTWFwPHN0cmluZywgRmllbGRTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRpbnN0YW5jZU1ldGhvZFN5bWJvbHM6IE1hcDxzdHJpbmcsIE1ldGhvZFN5bWJvbD4gPSBuZXcgTWFwKCk7XG5cdHN0YXRpY01ldGhvZFN5bWJvbHM6IE1hcDxzdHJpbmcsIE1ldGhvZFN5bWJvbD4gPSBuZXcgTWFwKCk7XG5cdGNvbnN0cnVjdG9yTWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wgfCBudWxsID0gbnVsbDtcblx0aW1wbGVtZW50c0ludGVyZmFjZXM6IEludGVyZmFjZVJlZlR5cGVbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKG5vZGU6IEFTVENsYXNzTm9kZSkge1xuXHRcdHRoaXMubm9kZSA9IG5vZGU7XG5cdFx0dGhpcy5uYW1lID0gbm9kZS5uYW1lO1xuXHRcdHRoaXMuc3VwZXJDbGFzcyA9IG5vZGUuc3VwZXJDbGFzcz8ubmFtZSA/PyBudWxsO1xuXHR9XG5cblx0cmVzb2x2ZUluc3RhbmNlRmllbGRTeW1ib2wobmFtZTogc3RyaW5nKTogRmllbGRTeW1ib2wgfCBudWxsIHtcblx0XHRpZiAodGhpcy5pbnN0YW5jZUZpZWxkU3ltYm9scy5oYXMobmFtZSkpIHtcblx0XHRcdHJldHVybiB0aGlzLmluc3RhbmNlRmllbGRTeW1ib2xzLmdldChuYW1lKSB8fCBudWxsO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnN1cGVyQ2xhc3MpIHtcblx0XHRcdHJldHVybiB0aGlzLnN1cGVyQ2xhc3NTeW1ib2w/LnJlc29sdmVJbnN0YW5jZUZpZWxkU3ltYm9sKG5hbWUpIHx8IG51bGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXNvbHZlU3RhdGljRmllbGRTeW1ib2wobmFtZTogc3RyaW5nKTogRmllbGRTeW1ib2wgfCBudWxsIHtcblx0XHRpZiAodGhpcy5zdGF0aWNGaWVsZFN5bWJvbHMuaGFzKG5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdGF0aWNGaWVsZFN5bWJvbHMuZ2V0KG5hbWUpIHx8IG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc3VwZXJDbGFzcykge1xuXHRcdFx0cmV0dXJuIHRoaXMuc3VwZXJDbGFzc1N5bWJvbD8ucmVzb2x2ZVN0YXRpY0ZpZWxkU3ltYm9sKG5hbWUpIHx8IG51bGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEludGVyZmFjZVN5bWJvbCBpbXBsZW1lbnRzIE9iamVjdFN5bWJvbCB7XG5cdHJlYWRvbmx5IG5vZGU6IEFTVEludGVyZmFjZU5vZGU7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblxuXHR0eXBlUGFyYW1ldGVyU3ltYm9sczogVHlwZVBhcmFtZXRlclN5bWJvbFtdID0gW107XG5cdHN0YXRpY0ZpZWxkU3ltYm9sczogTWFwPHN0cmluZywgRmllbGRTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRpbnN0YW5jZU1ldGhvZFN5bWJvbHM6IE1hcDxzdHJpbmcsIE1ldGhvZFN5bWJvbD4gPSBuZXcgTWFwKCk7XG5cdGV4dGVuZHNJbnRlcmZhY2VzOiBJbnRlcmZhY2VTeW1ib2xbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKG5vZGU6IEFTVEludGVyZmFjZU5vZGUpIHtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHRcdHRoaXMubmFtZSA9IG5vZGUubmFtZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xhc3NSZWZUeXBlIGV4dGVuZHMgVHlwZSB7XG5cdHJlYWRvbmx5IGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbDtcblx0cmVhZG9ubHkgdHlwZUFyZ3VtZW50czogVHlwZVtdO1xuXG5cdGNvbnN0cnVjdG9yKGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCwgdHlwZUFyZ3VtZW50czogVHlwZVtdID0gW10pIHtcblx0XHRzdXBlcihDbGFzc1JlZlR5cGUuZm9ybWF0U3ltYm9sTmFtZShjbGFzc1N5bWJvbC5uYW1lLCB0eXBlQXJndW1lbnRzKSk7XG5cdFx0dGhpcy5jbGFzc1N5bWJvbCA9IGNsYXNzU3ltYm9sO1xuXHRcdHRoaXMudHlwZUFyZ3VtZW50cyA9IHR5cGVBcmd1bWVudHM7XG5cdH1cblxuXHRzdGF0aWMgZm9ybWF0U3ltYm9sTmFtZShuYW1lOiBzdHJpbmcsIHR5cGVBcmd1bWVudHM6IFR5cGVbXSkge1xuXHRcdGlmICh0eXBlQXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIGBjbGFzc1JlZlR5cGUoJHtuYW1lfSlgO1xuXHRcdH1cblxuXHRcdHJldHVybiBgY2xhc3NSZWZUeXBlKCR7bmFtZX08JHt0eXBlQXJndW1lbnRzLm1hcCh0eXBlID0+IHR5cGUudG9TdHJpbmcoKSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKCcsICcpfT4pYDtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAob3RoZXIgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGVcblx0XHRcdCYmIG90aGVyLmNsYXNzU3ltYm9sID09PSB0aGlzLmNsYXNzU3ltYm9sKTtcblx0fVxuXG5cdG92ZXJyaWRlIGFjY2VwdHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRpZiAoIXRoaXMuZXF1YWxzKG90aGVyKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmIChvdGhlciBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSkge1xuXHRcdFx0aWYgKHRoaXMudHlwZUFyZ3VtZW50cy5sZW5ndGggIT09IG90aGVyLnR5cGVBcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnR5cGVBcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3Qgb3RoZXJUeXBlID0gb3RoZXIudHlwZUFyZ3VtZW50c1tpXTtcblxuXHRcdFx0XHRpZiAoIW90aGVyVHlwZSB8fCAhdGhpcy50eXBlQXJndW1lbnRzW2ldPy5hY2NlcHRzKG90aGVyVHlwZSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2VSZWZUeXBlIGV4dGVuZHMgVHlwZSB7XG5cdHJlYWRvbmx5IGludGVyZmFjZVN5bWJvbDogSW50ZXJmYWNlU3ltYm9sO1xuXHRyZWFkb25seSB0eXBlQXJndW1lbnRzOiBUeXBlW107XG5cblx0Y29uc3RydWN0b3IoaW50ZXJmYWNlU3ltYm9sOiBJbnRlcmZhY2VTeW1ib2wsIHR5cGVBcmd1bWVudHM6IFR5cGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoSW50ZXJmYWNlUmVmVHlwZS5mb3JtYXRTeW1ib2xOYW1lKGludGVyZmFjZVN5bWJvbC5uYW1lLCB0eXBlQXJndW1lbnRzKSk7XG5cdFx0dGhpcy5pbnRlcmZhY2VTeW1ib2wgPSBpbnRlcmZhY2VTeW1ib2w7XG5cdFx0dGhpcy50eXBlQXJndW1lbnRzID0gdHlwZUFyZ3VtZW50cztcblx0fVxuXG5cdHN0YXRpYyBmb3JtYXRTeW1ib2xOYW1lKG5hbWU6IHN0cmluZywgdHlwZUFyZ3VtZW50czogVHlwZVtdKTogc3RyaW5nIHtcblx0XHRpZiAodHlwZUFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBgaW50ZXJmYWNlUmVmVHlwZSgke25hbWV9KWA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGBpbnRlcmZhY2VSZWZUeXBlKCR7bmFtZX08JHt0eXBlQXJndW1lbnRzLm1hcCh0eXBlID0+IHR5cGUudG9TdHJpbmcoKSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbignLCAnKX0+KWA7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gKG90aGVyIGluc3RhbmNlb2YgSW50ZXJmYWNlUmVmVHlwZVxuXHRcdFx0JiYgb3RoZXIuaW50ZXJmYWNlU3ltYm9sID09PSB0aGlzLmludGVyZmFjZVN5bWJvbCk7XG5cdH1cblxuXHRvdmVycmlkZSBhY2NlcHRzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0aWYgKCF0aGlzLmVxdWFscyhvdGhlcikpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAob3RoZXIgaW5zdGFuY2VvZiBJbnRlcmZhY2VSZWZUeXBlKSB7XG5cdFx0XHRpZiAodGhpcy50eXBlQXJndW1lbnRzLmxlbmd0aCAhPT0gb3RoZXIudHlwZUFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHlwZUFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBvdGhlclR5cGUgPSBvdGhlci50eXBlQXJndW1lbnRzW2ldO1xuXG5cdFx0XHRcdGlmICghb3RoZXJUeXBlIHx8ICF0aGlzLnR5cGVBcmd1bWVudHNbaV0/LmFjY2VwdHMob3RoZXJUeXBlKSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIExhbWJkYVR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0cmVhZG9ubHkgcGFyYW1ldGVyU3ltYm9sczogUGFyYW1ldGVyU3ltYm9sW10gPSBbXTtcblx0cmVhZG9ubHkgcmV0dXJuVHlwZTogVHlwZTtcblxuXHRjb25zdHJ1Y3RvcihwYXJhbWV0ZXJzOiBQYXJhbWV0ZXJTeW1ib2xbXSwgcmV0dXJuVHlwZTogVHlwZSkge1xuXHRcdHN1cGVyKExhbWJkYVR5cGUuY3JlYXRlU2lnbmF0dXJlKHBhcmFtZXRlcnMsIHJldHVyblR5cGUpKTtcblx0XHR0aGlzLnBhcmFtZXRlclN5bWJvbHMgPSBwYXJhbWV0ZXJzO1xuXHRcdHRoaXMucmV0dXJuVHlwZSA9IHJldHVyblR5cGU7XG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlU2lnbmF0dXJlKHBhcmFtZXRlcnM6IFBhcmFtZXRlclN5bWJvbFtdLCByZXR1cm5UeXBlOiBUeXBlKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gYGxhbWJkYSgke3BhcmFtZXRlcnMubWFwKHBhcmFtZXRlciA9PiBwYXJhbWV0ZXIucGFyYW1ldGVyVHlwZS50b1N0cmluZygpKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKCcsICcpfSkgLT4gJHtyZXR1cm5UeXBlLnRvU3RyaW5nKCl9KWA7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRpZiAoIShvdGhlciBpbnN0YW5jZW9mIExhbWJkYVR5cGUpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucGFyYW1ldGVyU3ltYm9scy5sZW5ndGggIT09IG90aGVyLnBhcmFtZXRlclN5bWJvbHMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcmFtZXRlclN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IG90aGVyVHlwZSA9IG90aGVyLnBhcmFtZXRlclN5bWJvbHNbaV0/LnBhcmFtZXRlclR5cGU7XG5cblx0XHRcdGlmICghb3RoZXJUeXBlIHx8ICF0aGlzLnBhcmFtZXRlclN5bWJvbHNbaV0/LnBhcmFtZXRlclR5cGUuYWNjZXB0cyhvdGhlclR5cGUpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXR1cm5UeXBlLmFjY2VwdHMob3RoZXIucmV0dXJuVHlwZSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGVTY29wZSB7XG5cdHJlYWRvbmx5IHBhcmVudDogVHlwZVNjb3BlIHwgbnVsbDtcblx0cmVhZG9ubHkgdHlwZXM6IE1hcDxzdHJpbmcsIFR5cGU+ID0gbmV3IE1hcCgpO1xuXHRyZWFkb25seSB0eXBlQmluZGluZ3M6IE1hcDxzdHJpbmcsIFR5cGU+ID0gbmV3IE1hcCgpO1xuXG5cdGN1cnJlbnRPYmplY3RTeW1ib2w6IENsYXNzU3ltYm9sIHwgSW50ZXJmYWNlU3ltYm9sIHwgbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFR5cGVTY29wZSB8IG51bGwgPSBudWxsKSB7XG5cdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cdFx0dGhpcy5jdXJyZW50T2JqZWN0U3ltYm9sID0gcGFyZW50Py5jdXJyZW50T2JqZWN0U3ltYm9sID8/IG51bGw7XG5cdH1cblxuXHRkZWZpbmVUeXBlKG5hbWU6IHN0cmluZywgdHlwZTogVHlwZSk6IHZvaWQge1xuXHRcdHRoaXMudHlwZXMuc2V0KG5hbWUsIHR5cGUpO1xuXHR9XG5cblx0ZGVmaW5lVHlwZUJpbmRpbmcobmFtZTogc3RyaW5nLCB0eXBlVmFyaWFibGU6IFR5cGVWYXJpYWJsZSk6IHZvaWQge1xuXHRcdHRoaXMudHlwZUJpbmRpbmdzLnNldChuYW1lLCB0eXBlVmFyaWFibGUpO1xuXHR9XG5cblx0aGFzVHlwZShuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy50eXBlcy5oYXMobmFtZSkgfHwgdGhpcy5wYXJlbnQ/Lmhhc1R5cGUobmFtZSkgfHwgZmFsc2U7XG5cdH1cblxuXHRoYXNUeXBlQmluZGluZyhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy50eXBlQmluZGluZ3MuaGFzKG5hbWUpIHx8IHRoaXMucGFyZW50Py5oYXNUeXBlQmluZGluZyhuYW1lKSB8fCBmYWxzZTtcblx0fVxuXG5cdGdldFR5cGUobmFtZTogc3RyaW5nKTogVHlwZSB7XG5cdFx0aWYgKHRoaXMudHlwZXMuaGFzKG5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50eXBlcy5nZXQobmFtZSkgfHwgVHlwZXMuTlVMTDtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMucGFyZW50Py5nZXRUeXBlKG5hbWUpIHx8IFR5cGVzLk5VTEw7XG5cdH1cblxuXHRnZXRUeXBlQmluZGluZyhuYW1lOiBzdHJpbmcpOiBUeXBlIHtcblx0XHRpZiAodGhpcy50eXBlQmluZGluZ3MuaGFzKG5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50eXBlQmluZGluZ3MuZ2V0KG5hbWUpIHx8IFR5cGVzLk5VTEw7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnBhcmVudD8uZ2V0VHlwZUJpbmRpbmcobmFtZSkgfHwgVHlwZXMuTlVMTDtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gd3JhcFR5cGUodHlwZU5vZGU6IEFTVFR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIHNjb3BlOiBUeXBlU2NvcGUgfCBudWxsID0gbnVsbCk6IFR5cGUge1xuXHRsZXQgYmFzZVR5cGUgPSByZXNvbHZlQmFzZVR5cGUodHlwZU5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBzY29wZSk7XG5cdGlmIChiYXNlVHlwZSkge1xuXHRcdGlmICghKGJhc2VUeXBlIGluc3RhbmNlb2YgTnVsbGFibGVUeXBlKSAmJiB0eXBlTm9kZS5udWxsYWJsZSkge1xuXHRcdFx0cmV0dXJuIG5ldyBOdWxsYWJsZVR5cGUoYmFzZVR5cGUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBiYXNlVHlwZTtcblx0fVxuXG5cdHRocm93VHlwZUVycm9yKGBDb3VsZCBub3QgcmVzb2x2ZSB0eXBlICR7dHlwZU5vZGUubmFtZX0uYCwgdHlwZU5vZGUuc3Bhbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlQmFzZVR5cGUodHlwZU5vZGU6IEFTVFR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIHNjb3BlOiBUeXBlU2NvcGUgfCBudWxsID0gbnVsbCk6IFR5cGUge1xuXHRzd2l0Y2ggKHR5cGVOb2RlLmtpbmQpIHtcblx0XHRjYXNlIEFTVFR5cGVOb2RlLktJTkRfU0lNUExFOiB7XG5cdFx0XHRpZiAoc2NvcGUgJiYgc2NvcGUuaGFzVHlwZUJpbmRpbmcodHlwZU5vZGUubmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIHNjb3BlLmdldFR5cGVCaW5kaW5nKHR5cGVOb2RlLm5hbWUpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAob2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiByZXNvbHZlUmVmVHlwZSh0eXBlTm9kZSwgb2JqZWN0UmVnaXN0cnkpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoUHJpbWl0aXZlVHlwZXMuaGFzVHlwZSh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzb2x2ZVByaW1pdGl2ZVR5cGUodHlwZU5vZGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbmV3IFR5cGVWYXJpYWJsZSh0eXBlTm9kZS5uYW1lKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1RUeXBlTm9kZS5LSU5EX0dFTkVSSUM6IHtcblx0XHRcdGlmICghb2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0XHRcdHRocm93VHlwZUVycm9yKGBTeW1ib2wgJHt0eXBlTm9kZS5uYW1lfSBpcyBub3QgYSBjbGFzcyByZWZlcmVuY2UuYCwgdHlwZU5vZGUuc3Bhbik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzb2x2ZUdlbmVyaWNSZWZUeXBlKHR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeSk7XG5cdFx0fVxuXHRcdGNhc2UgQVNUVHlwZU5vZGUuS0lORF9MQU1CREE6IHtcblx0XHRcdHJldHVybiByZXNvbHZlTGFtYmRhVHlwZSh0eXBlTm9kZSwgb2JqZWN0UmVnaXN0cnkpO1xuXHRcdH1cblx0XHRkZWZhdWx0OiB7XG5cdFx0XHR0aHJvd1R5cGVFcnJvcihcblx0XHRcdFx0YEludmFsaWQgdHlwZSBhbm5vdGF0aW9uLCBraW5kICR7dHlwZU5vZGUua2luZH0uYCxcblx0XHRcdFx0dHlwZU5vZGUuc3BhblxuXHRcdFx0KTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVSZWZUeXBlKHR5cGVOb2RlOiBBU1RUeXBlTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogQ2xhc3NSZWZUeXBlIHwgSW50ZXJmYWNlUmVmVHlwZSB8IFR5cGUge1xuXHRpZiAodHlwZU5vZGUudHlwZUFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0dGhyb3dUeXBlRXJyb3IoYEdlbmVyaWMgY2xhc3MgJHt0eXBlTm9kZS5uYW1lfSBjYW5ub3QgaGF2ZSB0eXBlIGFyZ3VtZW50cy5gLCB0eXBlTm9kZS5zcGFuKTtcblx0fVxuXG5cdGlmIChvYmplY3RSZWdpc3RyeS50eXBlcy5jbGFzc1N5bWJvbHMuaGFzKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0cmV0dXJuIG5ldyBDbGFzc1JlZlR5cGUob2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2wodHlwZU5vZGUubmFtZSkpO1xuXHR9XG5cblx0aWYgKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmludGVyZmFjZVN5bWJvbHMuaGFzKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0cmV0dXJuIG5ldyBJbnRlcmZhY2VSZWZUeXBlKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldEludGVyYWNlU3ltYm9sKHR5cGVOb2RlLm5hbWUpKTtcblx0fVxuXG5cdHRocm93VHlwZUVycm9yKGBVbmtub3duIGNsYXNzIG9yIGludGVyZmFjZSAke3R5cGVOb2RlLm5hbWV9LmAsIHR5cGVOb2RlLnNwYW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUdlbmVyaWNSZWZUeXBlKHR5cGVOb2RlOiBBU1RUeXBlTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogQ2xhc3NSZWZUeXBlIHwgSW50ZXJmYWNlUmVmVHlwZSB8IFR5cGUge1xuXHRpZiAob2JqZWN0UmVnaXN0cnkudHlwZXMuY2xhc3NTeW1ib2xzLmhhcyh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdHJldHVybiBuZXcgQ2xhc3NSZWZUeXBlKFxuXHRcdFx0b2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2wodHlwZU5vZGUubmFtZSksXG5cdFx0XHR0eXBlTm9kZS50eXBlQXJndW1lbnRzLm1hcCh0eXBlQXJndW1lbnQgPT4gcmVzb2x2ZUJhc2VUeXBlKHR5cGVBcmd1bWVudCwgb2JqZWN0UmVnaXN0cnkpKVxuXHRcdCk7XG5cdH1cblxuXHRpZiAob2JqZWN0UmVnaXN0cnkudHlwZXMuaW50ZXJmYWNlU3ltYm9scy5oYXModHlwZU5vZGUubmFtZSkpIHtcblx0XHRyZXR1cm4gbmV3IEludGVyZmFjZVJlZlR5cGUoXG5cdFx0XHRvYmplY3RSZWdpc3RyeS50eXBlcy5nZXRJbnRlcmFjZVN5bWJvbCh0eXBlTm9kZS5uYW1lKSxcblx0XHRcdHR5cGVOb2RlLnR5cGVBcmd1bWVudHMubWFwKHR5cGVBcmd1bWVudCA9PiByZXNvbHZlQmFzZVR5cGUodHlwZUFyZ3VtZW50LCBvYmplY3RSZWdpc3RyeSkpXG5cdFx0KTtcblx0fVxuXG5cdHRocm93VHlwZUVycm9yKGBVbmtub3duIGNsYXNzIG9yIGludGVyZmFjZSAke3R5cGVOb2RlLm5hbWV9LmAsIHR5cGVOb2RlLnNwYW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVByaW1pdGl2ZVR5cGUodHlwZU5vZGU6IEFTVFR5cGVOb2RlKTogVHlwZSB7XG5cdHJldHVybiBUeXBlcy5nZXRUeXBlKHR5cGVOb2RlLm5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUxhbWJkYVR5cGUodHlwZU5vZGU6IEFTVFR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIHNjb3BlOiBUeXBlU2NvcGUgfCBudWxsID0gbnVsbCk6IExhbWJkYVR5cGUge1xuXHRjb25zdCBwYXJhbWV0ZXJTeW1ib2xzID0gdHlwZU5vZGUucGFyYW1ldGVyVHlwZXMubWFwKFxuXHRcdHR5cGVBbm5vdGF0aW9uID0+IHtcblx0XHRcdHJldHVybiBuZXcgUGFyYW1ldGVyU3ltYm9sKFxuXHRcdFx0XHR0eXBlQW5ub3RhdGlvbi5uYW1lLFxuXHRcdFx0XHR3cmFwVHlwZSh0eXBlQW5ub3RhdGlvbiwgb2JqZWN0UmVnaXN0cnksIHNjb3BlKVxuXHRcdFx0KTtcblx0XHR9XG5cdCk7XG5cblx0cmV0dXJuIG5ldyBMYW1iZGFUeXBlKFxuXHRcdHBhcmFtZXRlclN5bWJvbHMsXG5cdFx0dHlwZU5vZGUucmV0dXJuVHlwZVxuXHRcdFx0PyB3cmFwVHlwZSh0eXBlTm9kZS5yZXR1cm5UeXBlLCBvYmplY3RSZWdpc3RyeSwgc2NvcGUpXG5cdFx0XHQ6IFR5cGVzLk1JWEVEXG5cdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdGl0dXRlVHlwZSh0eXBlOiBUeXBlLCBzdWJzdGl0dXRpb25NYXA6IE1hcDxzdHJpbmcsIFR5cGU+KTogVHlwZSB7XG5cdGlmICh0eXBlIGluc3RhbmNlb2YgVHlwZVZhcmlhYmxlKSB7XG5cdFx0cmV0dXJuIHN1YnN0aXR1dGlvbk1hcC5nZXQodHlwZS5uYW1lKSA/PyB0eXBlO1xuXHR9XG5cblx0aWYgKHR5cGUgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUpIHtcblx0XHRyZXR1cm4gbmV3IENsYXNzUmVmVHlwZShcblx0XHRcdHR5cGUuY2xhc3NTeW1ib2wsXG5cdFx0XHR0eXBlLnR5cGVBcmd1bWVudHMubWFwKHR5cGVBcmd1bWVudCA9PiBzdWJzdGl0dXRlVHlwZSh0eXBlQXJndW1lbnQsIHN1YnN0aXR1dGlvbk1hcCkpXG5cdFx0KTtcblx0fVxuXG5cdGlmICh0eXBlIGluc3RhbmNlb2YgTnVsbGFibGVUeXBlKSB7XG5cdFx0cmV0dXJuIG5ldyBOdWxsYWJsZVR5cGUoc3Vic3RpdHV0ZVR5cGUodHlwZS5pbm5lciwgc3Vic3RpdHV0aW9uTWFwKSk7XG5cdH1cblxuXHRyZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkVHlwZVN1YnN0aXR1dGlvbk1hcCh0eXBlUGFyYW1ldGVyczogVHlwZVBhcmFtZXRlclN5bWJvbFtdLCB0eXBlQXJndW1lbnRzOiBUeXBlW10pOiBNYXA8c3RyaW5nLCBUeXBlPiB7XG5cdGNvbnN0IHN1YnN0aXR1dGlvbk1hcCA9IG5ldyBNYXAoKTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHR5cGVQYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgdHlwZVBhcmFtZXRlcjogVHlwZVBhcmFtZXRlclN5bWJvbCB8IG51bGwgPSB0eXBlUGFyYW1ldGVyc1tpXSB8fCBudWxsO1xuXHRcdGNvbnN0IHR5cGVBcmd1bWVudDogVHlwZSB8IG51bGwgPSB0eXBlQXJndW1lbnRzW2ldIHx8IG51bGw7XG5cblx0XHRpZiAodHlwZVBhcmFtZXRlciAmJiB0eXBlQXJndW1lbnQpIHtcblx0XHRcdHN1YnN0aXR1dGlvbk1hcC5zZXQodHlwZVBhcmFtZXRlci5uYW1lLCB0eXBlQXJndW1lbnQpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdWJzdGl0dXRpb25NYXA7XG59XG4iLAogICAgImltcG9ydCB7Q2xhc3NSZWZUeXBlLCBUeXBlLCBUeXBlc30gZnJvbSBcIi4vdHlwZV9vYmplY3RzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB7dGhyb3dSdW50aW1lRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcblxuZXhwb3J0IGNsYXNzIEF1dG9ib3hlZFR5cGVzIHtcblx0c3RhdGljIE5VTUJFUjogc3RyaW5nID0gJ051bWJlcic7XG5cdHN0YXRpYyBTVFJJTkc6IHN0cmluZyA9ICdTdHJpbmcnO1xuXHRzdGF0aWMgQk9PTEVBTjogc3RyaW5nID0gJ0Jvb2xlYW4nO1xuXG5cdHN0YXRpYyBDTEFTU05BTUVfTUFQOiB7IFtzOiBzdHJpbmddOiBzdHJpbmc7IH0gPSB7XG5cdFx0bnVtYmVyOiBBdXRvYm94ZWRUeXBlcy5OVU1CRVIsXG5cdFx0c3RyaW5nOiBBdXRvYm94ZWRUeXBlcy5TVFJJTkcsXG5cdFx0Ym9vbGVhbjogQXV0b2JveGVkVHlwZXMuQk9PTEVBTlxuXHR9O1xuXG5cdHN0YXRpYyBnZXRDbGFzc05hbWUoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdGNvbnN0IGNsYXNzTmFtZSA9IEF1dG9ib3hlZFR5cGVzLkNMQVNTTkFNRV9NQVBba2V5XTtcblx0XHRpZiAoIWNsYXNzTmFtZSkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYE5vIGNsYXNzIGZvdW5kIGZvciBwcmltaXRpdmUgdHlwZSAke2tleX0uYCk7XG5cdFx0fVxuXHRcdHJldHVybiBjbGFzc05hbWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9ib3hpbmcge1xuXHRzdGF0aWMgQ0xBU1NOQU1FX01BUDogTWFwPFR5cGUsIHN0cmluZz4gPSBuZXcgTWFwKFxuXHRcdFtcblx0XHRcdFtUeXBlcy5OVU1CRVIsIEF1dG9ib3hlZFR5cGVzLk5VTUJFUl0sXG5cdFx0XHRbVHlwZXMuU1RSSU5HLCBBdXRvYm94ZWRUeXBlcy5TVFJJTkddLFxuXHRcdFx0W1R5cGVzLkJPT0xFQU4sIEF1dG9ib3hlZFR5cGVzLkJPT0xFQU5dXG5cdFx0XVxuXHQpO1xuXG5cdHN0YXRpYyBhdXRvYm94SWZOZWVkZWQob2JqZWN0VHlwZTogVHlwZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogQ2xhc3NSZWZUeXBlIHwgVHlwZSB7XG5cdFx0Y29uc3QgY2xhc3NOYW1lID0gQXV0b2JveGluZy5DTEFTU05BTUVfTUFQLmdldChvYmplY3RUeXBlKTtcblx0XHRpZiAoY2xhc3NOYW1lKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENsYXNzUmVmVHlwZShvYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChjbGFzc05hbWUpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gb2JqZWN0VHlwZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge1xuXHRDbGFzc0RlZmluaXRpb24sXG5cdENsYXNzTWV0aG9kRGVmaW5pdGlvbixcblx0RW52aXJvbm1lbnQsXG5cdEV4ZWN1dGlvblN0b3AsXG5cdEluc3RhbmNlLFxuXHRSZXR1cm5WYWx1ZVxufSBmcm9tIFwiLi9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuaW1wb3J0IHtcblx0QVNUQW5ub3RhdGlvbk5vZGUsXG5cdEFTVEFycmF5Tm9kZSxcblx0QVNUQXNzaWdubWVudE5vZGUsXG5cdEFTVEJpbmFyeU5vZGUsXG5cdEFTVENhbGxOb2RlLFxuXHRBU1RDbGFzc05vZGUsXG5cdEFTVEV4cHJlc3Npb25Ob2RlLFxuXHRBU1RGb3JlYWNoTm9kZSxcblx0QVNUSWZOb2RlLFxuXHRBU1RJbmRleE5vZGUsXG5cdEFTVExhbWJkYU5vZGUsXG5cdEFTVE1hdGNoQ2FzZU5vZGUsXG5cdEFTVE1hdGNoTm9kZSxcblx0QVNUTWVtYmVyTm9kZSxcblx0QVNUTWV0aG9kTm9kZSxcblx0QVNUTmV3Tm9kZSxcblx0QVNUTm9kZSxcblx0QVNUTm9kZVR5cGUsXG5cdEFTVFBhcmFtZXRlck5vZGUsXG5cdEFTVFJldHVybk5vZGUsXG5cdEFTVFR5cGVOb2RlLFxuXHRBU1RVbmFyeU5vZGUsXG5cdEFTVFZhcmlhYmxlTm9kZSxcblx0QVNUVkRvbU5vZGUsXG5cdEFTVFZEb21UZXh0Tm9kZVxufSBmcm9tIFwiLi4vYXN0XCI7XG5pbXBvcnQge0dSQU1NQVIsIFRZUEVfRU5VTX0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcbmltcG9ydCB7TmF0aXZlQ2xhc3Nlc30gZnJvbSBcIi4uLy4uL2xpYnJhcnkvbmF0aXZlX2NsYXNzZXNcIjtcbmltcG9ydCB7TmF0aXZlRnVuY3Rpb24sIE5hdGl2ZUZ1bmN0aW9ucywgTmF0aXZlRnVuY3Rpb25UeXBlUmVnaXN0cnl9IGZyb20gXCIuLi8uLi9saWJyYXJ5L25hdGl2ZV9mdW5jdGlvbnNcIjtcbmltcG9ydCB7Y2FzdFZhbHVlLCBmcm9tTHlyYVZhbHVlLCBMeXJhTmF0aXZlT2JqZWN0LCByZXR1cm5WYWx1ZSwgd3JhcE5hdGl2ZUluc3RhbmNlfSBmcm9tIFwiLi9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge3Rocm93UnVudGltZUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQge0F1dG9ib3hlZFR5cGVzfSBmcm9tIFwiLi4vdHlwZXMvYXV0b2JveGluZ1wiO1xuaW1wb3J0IHtMeXJhQXJyYXl9IGZyb20gXCIuLi8uLi9saWJyYXJ5L2NsYXNzZXMvYXJyYXlcIjtcbmltcG9ydCB0eXBlIHtWTm9kZX0gZnJvbSBcIi4uL3Zkb20vdmRvbVwiO1xuaW1wb3J0IHR5cGUge0V2ZW50UGlwZWxpbmV9IGZyb20gXCIuLi9ldmVudC9waXBlbGluZVwiO1xuXG5jb25zdCBuYXRpdmVDbGFzc2VzID0gbmV3IE5hdGl2ZUNsYXNzZXMoKTtcbmNvbnN0IG5hdGl2ZUZ1bmN0aW9ucyA9IG5ldyBOYXRpdmVGdW5jdGlvbnMoKTtcbmNvbnN0IGdsb2JhbEZ1bmN0aW9ucyA9IG5hdGl2ZUZ1bmN0aW9ucy5nZXRHbG9iYWxGdW5jdGlvbnMoKTtcbmNvbnN0IGdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5OiBOYXRpdmVGdW5jdGlvblR5cGVSZWdpc3RyeSA9IG5hdGl2ZUZ1bmN0aW9ucy5nZXRHbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeSgpO1xuXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RGdW5jdGlvbkNhbGwge1xuXHRub2RlOiBBU1ROb2RlO1xuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cdGZ1bmN0aW9uRW52OiBFbnZpcm9ubWVudDtcblx0ZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZTtcblxuXHRjb25zdHJ1Y3Rvcihub2RlOiBBU1ROb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGZ1bmN0aW9uRW52OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSkge1xuXHRcdHRoaXMubm9kZSA9IG5vZGU7XG5cdFx0dGhpcy5vYmplY3RSZWdpc3RyeSA9IG9iamVjdFJlZ2lzdHJ5O1xuXHRcdHRoaXMuZnVuY3Rpb25FbnYgPSBmdW5jdGlvbkVudjtcblx0XHR0aGlzLmV2ZW50UGlwZWxpbmUgPSBldmVudFBpcGVsaW5lO1xuXHR9XG5cblx0Z2V0QVNUQ2FsbE5vZGUoKTogQVNUQ2FsbE5vZGUge1xuXHRcdGlmICghKHRoaXMubm9kZSBpbnN0YW5jZW9mIEFTVENhbGxOb2RlKSkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgbmF0aXZlIGZ1bmN0aW9uIGNhbGwgJHt0aGlzLm5vZGUudHlwZX0uYCwgdGhpcy5ub2RlLnNwYW4pO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5ub2RlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge0FTVExhbWJkYU5vZGV9XG5cdCAqL1xuXHRnZXRBU1RMYW1iZGFOb2RlKCk6IEFTVExhbWJkYU5vZGUge1xuXHRcdGlmICghKHRoaXMubm9kZSBpbnN0YW5jZW9mIEFTVExhbWJkYU5vZGUpKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBsYW1iZGEgY2FsbCAke3RoaXMubm9kZS50eXBlfS5gLCB0aGlzLm5vZGUuc3Bhbik7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLm5vZGU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIExhbWJkYUZ1bmN0aW9uQ2FsbCBleHRlbmRzIEFic3RyYWN0RnVuY3Rpb25DYWxsIHtcblx0ZXZhbENhbGwodGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwsIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcblx0XHRjb25zdCBub2RlOiBBU1RMYW1iZGFOb2RlID0gdGhpcy5nZXRBU1RMYW1iZGFOb2RlKCk7XG5cdFx0Y29uc3QgY2xvc3VyZUVudiA9IG5ldyBFbnZpcm9ubWVudCh0aGlzLmZ1bmN0aW9uRW52KTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5wYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBwYXJhbWV0ZXI6IEFTVFBhcmFtZXRlck5vZGUgfCBudWxsID0gbm9kZS5wYXJhbWV0ZXJzW2ldIHx8IG51bGw7XG5cdFx0XHRpZiAoIXBhcmFtZXRlcikge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGNsb3N1cmVFbnYuZGVmaW5lKHBhcmFtZXRlci5uYW1lLCBhcmdzW2ldKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZhbFJldHVybihcblx0XHRcdG5vZGUuY2hpbGRyZW4sXG5cdFx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0Y2xvc3VyZUVudixcblx0XHRcdHRoaXMuZXZlbnRQaXBlbGluZSxcblx0XHRcdHRoaXNWYWx1ZSxcblx0XHRcdG5vZGUucmV0dXJuVHlwZVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE5hdGl2ZUZ1bmN0aW9uQ2FsbCBleHRlbmRzIEFic3RyYWN0RnVuY3Rpb25DYWxsIHtcblx0ZXZhbENhbGwodGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwsIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcblx0XHRjb25zdCBjYWxsTm9kZTogQVNUQ2FsbE5vZGUgPSB0aGlzLmdldEFTVENhbGxOb2RlKCk7XG5cblx0XHRsZXQgcmVzdWx0OiBhbnkgPSB0aGlzLnJlc29sdmVDYWxsKHRoaXNWYWx1ZSlbY2FsbE5vZGUuY2FsbGVlLm5hbWVdKC4uLmFyZ3MpO1xuXHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRyZXN1bHQgPSB3cmFwTmF0aXZlSW5zdGFuY2UocmVzdWx0LCB0aGlzLm9iamVjdFJlZ2lzdHJ5KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0ID0gcmV0dXJuVmFsdWUocmVzdWx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZhbFJldHVybihcblx0XHRcdFtyZXN1bHRdLFxuXHRcdFx0dGhpcy5vYmplY3RSZWdpc3RyeSxcblx0XHRcdHRoaXMuZnVuY3Rpb25FbnYsXG5cdFx0XHR0aGlzLmV2ZW50UGlwZWxpbmUsXG5cdFx0XHR0aGlzVmFsdWUsXG5cdFx0XHR0aGlzLmxvb2t1cEZ1bmN0aW9uVHlwZShjYWxsTm9kZS5jYWxsZWUubmFtZSkucmV0dXJuVHlwZVxuXHRcdCk7XG5cdH1cblxuXHRsb29rdXBGdW5jdGlvblR5cGUobmFtZTogc3RyaW5nKTogTmF0aXZlRnVuY3Rpb24ge1xuXHRcdHJldHVybiBnbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeS5nZXQobmFtZSk7XG5cdH1cblxuXHRyZXNvbHZlQ2FsbCh0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCk6IGFueSB7XG5cdFx0Y29uc3Qgbm9kZTogQVNUQ2FsbE5vZGUgfCBudWxsID0gdGhpcy5nZXRBU1RDYWxsTm9kZSgpO1xuXHRcdGlmIChub2RlID09PSBudWxsKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcignSW52YWxpZCBmdW5jdGlvbiBjYWxsLicpO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmFsRXhwcmVzc2lvbihub2RlLmNhbGxlZSwgdGhpcy5vYmplY3RSZWdpc3RyeSwgdGhpcy5mdW5jdGlvbkVudiwgdGhpcy5ldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck5hdGl2ZUNsYXNzZXMob2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQpOiB2b2lkIHtcblx0Zm9yIChjb25zdCBuYXRpdmVDbGFzcyBvZiBuYXRpdmVDbGFzc2VzLnJlZ2lzdHJ5LnZhbHVlcygpKSB7XG5cdFx0aWYgKG5hdGl2ZUNsYXNzLmlzQXV0b2xvYWRBYmxlKSB7XG5cdFx0XHRjb25zdCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uID0gbmF0aXZlQ2xhc3MuZ2V0Q2xhc3NEZWZpbml0aW9uKCk7XG5cdFx0XHRvYmplY3RSZWdpc3RyeS5jbGFzc2VzLnNldChuYXRpdmVDbGFzcy5uYW1lLCBjbGFzc0RlZik7XG5cdFx0XHRlbnZpcm9ubWVudC5kZWZpbmUobmF0aXZlQ2xhc3MubmFtZSwgY2xhc3NEZWYpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJOYXRpdmVGdW5jdGlvbnMoZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogdm9pZCB7XG5cdGZvciAoY29uc3QgbmFtZSBpbiBnbG9iYWxGdW5jdGlvbnMpIHtcblx0XHRjb25zdCBnbG9iYWxGdW5jdGlvbjogYW55ID0gZ2xvYmFsRnVuY3Rpb25zW25hbWVdO1xuXHRcdGlmICghZ2xvYmFsRnVuY3Rpb24pIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKCdHbG9iYWwgZnVuY3Rpb24gaXMgbnVsbC4nKTtcblx0XHR9XG5cdFx0ZW52aXJvbm1lbnQuZGVmaW5lKG5hbWUsIGdsb2JhbEZ1bmN0aW9ucyk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxOb2RlKFxuXHRub2RlOiBBU1ROb2RlLFxuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksXG5cdGVudmlyb25tZW50OiBFbnZpcm9ubWVudCxcblx0ZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSxcblx0dGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsXG4pOiBhbnkge1xuXHRpZiAobm9kZS5pc0V4cHJlc3Npb24pIHtcblx0XHRyZXR1cm4gbmV3IFJldHVyblZhbHVlKGV2YWxFeHByZXNzaW9uKG5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKSk7XG5cdH1cblxuXHRzd2l0Y2ggKG5vZGUudHlwZSkge1xuXHRcdGNhc2UgQVNUTm9kZVR5cGUuUFJPR1JBTU06IHtcblx0XHRcdGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuXHRcdFx0XHRldmFsTm9kZShjaGlsZCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuSU1QT1JUOlxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuSU5URVJGQUNFOiB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5DTEFTUzoge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RDbGFzc05vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxDbGFzcyhub2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgY2xhc3Mgbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5WQVJJQUJMRToge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RWYXJpYWJsZU5vZGUpIHtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBub2RlLmluaXRcblx0XHRcdFx0XHQ/IGV2YWxFeHByZXNzaW9uKG5vZGUuaW5pdCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpXG5cdFx0XHRcdFx0OiBudWxsO1xuXHRcdFx0XHRlbnZpcm9ubWVudC5kZWZpbmUobm9kZS5uYW1lLCB2YWx1ZSk7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgdmFyaWFibGUgbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5JRjoge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RJZk5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxJZihub2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBpZiBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLk1BVENIOiB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVE1hdGNoTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbE1hdGNoKG5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIG1hdGNoIG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuRk9SRUFDSDoge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RGb3JlYWNoTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbEZvcmVhY2gobm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgZm9yZWFjaCBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLlZET006IHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUVkRvbU5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxWRG9tTm9kZShub2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBmb3JlYWNoIG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuRVhQUkVTU0lPTjoge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RFeHByZXNzaW9uTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbEV4cHJlc3Npb24obm9kZS5leHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBleHByZXNzaW9uIG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuUkVUVVJOOiB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVFJldHVybk5vZGUpIHtcblx0XHRcdFx0Y29uc3QgdmFsdWU6IGFueSA9IG5vZGUuYXJndW1lbnRcblx0XHRcdFx0XHQ/IGV2YWxFeHByZXNzaW9uKG5vZGUuYXJndW1lbnQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKVxuXHRcdFx0XHRcdDogbnVsbDtcblx0XHRcdFx0cmV0dXJuIG5ldyBSZXR1cm5WYWx1ZSh2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCByZXR1cm4gbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0ZGVmYXVsdDoge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVuaGFuZGxlZCBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlLnNwYW4pO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0RW1wdHlJbnN0YW5jZShub2RlOiBBU1RDbGFzc05vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IEluc3RhbmNlIHtcblx0bGV0IGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb247XG5cblx0aWYgKG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuaGFzKG5vZGUubmFtZSkpIHtcblx0XHRjbGFzc0RlZiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KG5vZGUubmFtZSk7XG5cdH0gZWxzZSB7XG5cdFx0Y2xhc3NEZWYgPSBDbGFzc0RlZmluaXRpb24uZnJvbUFTVChub2RlKTtcblx0XHRvYmplY3RSZWdpc3RyeS5jbGFzc2VzLnNldChub2RlLm5hbWUsIGNsYXNzRGVmKTtcblx0fVxuXG5cdHJldHVybiBjbGFzc0RlZi5jb25zdHJ1Y3RFbXB0eUluc3RhbmNlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3ROYXRpdmVJbnN0YW5jZShleHByOiBBU1ROZXdOb2RlLCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IEluc3RhbmNlIHtcblx0cmV0dXJuIGNsYXNzRGVmLmNvbnN0cnVjdE5hdGl2ZUluc3RhbmNlQnlOZXdOb2RlKGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RJbnN0YW5jZShleHByOiBBU1ROZXdOb2RlLCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IEluc3RhbmNlIHtcblx0cmV0dXJuIGNsYXNzRGVmLmNvbnN0cnVjdEluc3RhbmNlQnlOZXdOb2RlKGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsQ2xhc3Mobm9kZTogQVNUQ2xhc3NOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IHZvaWQge1xuXHRjb25zdCBpbnN0YW5jZTogSW5zdGFuY2UgPSBjb25zdHJ1Y3RFbXB0eUluc3RhbmNlKG5vZGUsIG9iamVjdFJlZ2lzdHJ5KTtcblxuXHRpbnN0YW5jZS5pbml0aWFsaXplSW5zdGFuY2VGaWVsZHMob2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcblxuXHRlbnZpcm9ubWVudC5kZWZpbmUobm9kZS5uYW1lLCBpbnN0YW5jZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsTmV3KGV4cHI6IEFTVE5ld05vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogSW5zdGFuY2Uge1xuXHRpZiAoIW9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuaGFzKGV4cHIubmFtZSkpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5rbm93biBjbGFzcyAke2V4cHIubmFtZX0uYCwgZXhwci5zcGFuKTtcblx0fVxuXG5cdGNvbnN0IGNsYXNzRGVmID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQoZXhwci5uYW1lKTtcblx0aWYgKGNsYXNzRGVmLm5hdGl2ZUluc3RhbmNlKSB7XG5cdFx0cmV0dXJuIGNvbnN0cnVjdE5hdGl2ZUluc3RhbmNlKGV4cHIsIGNsYXNzRGVmLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXHR9XG5cblx0cmV0dXJuIGNvbnN0cnVjdEluc3RhbmNlKGV4cHIsIGNsYXNzRGVmLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEV4cHJlc3Npb24oZXhwcjogQVNUTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdHN3aXRjaCAoZXhwci50eXBlKSB7XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5TVFJJTkc6XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5OVU1CRVI6XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5CT09MRUFOOiB7XG5cdFx0XHRyZXR1cm4gZXhwci52YWx1ZTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5OVUxMOiB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5JREVOVElGSUVSOiB7XG5cdFx0XHRyZXR1cm4gZW52aXJvbm1lbnQuZ2V0KGV4cHIubmFtZSk7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuVEhJUzoge1xuXHRcdFx0aWYgKCF0aGlzVmFsdWUpIHtcblx0XHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYHRoaXMgdXNlZCBvdXRzaWRlIG9mIG1ldGhvZC5gLCBleHByLnNwYW4pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXNWYWx1ZTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5CSU5BUlk6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQmluYXJ5Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbEJpbmFyeShleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBiaW5hcnkgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5VTkFSWToge1xuXHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RVbmFyeU5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxVbmFyeShleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCB1bmFyeSBleHByZXNzaW9uICR7ZXhwci50eXBlfS5gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkFTU0lHTk1FTlQ6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQXNzaWdubWVudE5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxBc3NpZ24oZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgYXNzaWdubWVudCBleHByZXNzaW9uICR7ZXhwci50eXBlfWAsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuTUVNQkVSOiB7XG5cdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxNZW1iZXIoZXhwciwgZW52aXJvbm1lbnQpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgbWVtYmVyIGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5DQUxMOiB7XG5cdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVENhbGxOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsQ2FsbChleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBjYWxsIGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5WRE9NOiB7XG5cdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVFZEb21Ob2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsVkRvbU5vZGUoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgY2FsbCBleHByZXNzaW9uICR7ZXhwci50eXBlfWAsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuTkVXOiB7XG5cdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVE5ld05vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxOZXcoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGNhbGwgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkFSUkFZOiB7XG5cdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVEFycmF5Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbEFycmF5KGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGFycmF5IGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5JTkRFWDoge1xuXHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RJbmRleE5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxJbmRleChleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBpbmRleCBleHByZXNzaW9uICR7ZXhwci50eXBlfWAsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuTEFNQkRBOiB7XG5cdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVExhbWJkYU5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxMYW1iZGEoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGxhbWJkYSBleHByZXNzaW9uICR7ZXhwci50eXBlfWAsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXHRcdGRlZmF1bHQ6IHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBVbmhhbmRsZWQgZXhwcmVzc2lvbiAke2V4cHIudHlwZX0uYCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxCaW5hcnkoZXhwcjogQVNUQmluYXJ5Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGNvbnN0IGxlZnQ6IGFueSA9IGNhc3RWYWx1ZShldmFsRXhwcmVzc2lvbihleHByLmxlZnQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKSlcblx0Y29uc3QgcmlnaHQ6IGFueSA9IGNhc3RWYWx1ZShldmFsRXhwcmVzc2lvbihleHByLnJpZ2h0LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSkpXG5cblx0c3dpdGNoIChleHByLm9wZXJhdG9yKSB7XG5cdFx0Y2FzZSBHUkFNTUFSLlBMVVM6IHtcblx0XHRcdHJldHVybiBsZWZ0ICsgcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5NSU5VUzoge1xuXHRcdFx0cmV0dXJuIGxlZnQgLSByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLk1VTFRJUExZOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCAqIHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuRElWSURFOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCAvIHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTU9EVUxVUzoge1xuXHRcdFx0cmV0dXJuIGxlZnQgJSByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkxFU1NfVEhBTjoge1xuXHRcdFx0cmV0dXJuIGxlZnQgPCByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkdSRUFURVJfVEhBTjoge1xuXHRcdFx0cmV0dXJuIGxlZnQgPiByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkxFU1NfRVFVQUw6IHtcblx0XHRcdHJldHVybiBsZWZ0IDw9IHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuR1JFQVRFUl9FUVVBTDoge1xuXHRcdFx0cmV0dXJuIGxlZnQgPj0gcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5FUVVBTDoge1xuXHRcdFx0cmV0dXJuIGxlZnQgPT09IHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTk9UX0VRVUFMOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCAhPT0gcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5BTkQ6IHtcblx0XHRcdHJldHVybiBsZWZ0ICYmIHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuT1I6IHtcblx0XHRcdHJldHVybiBsZWZ0IHx8IHJpZ2h0O1xuXHRcdH1cblx0XHRkZWZhdWx0OiB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5rbm93biBvcGVyYXRvciAke2V4cHIub3BlcmF0b3J9YCk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsQXJyYXkoZXhwcjogQVNUQXJyYXlOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogSW5zdGFuY2Uge1xuXHRjb25zdCB2YWx1ZXM6IGFueVtdID0gW107XG5cdGZvciAoY29uc3QgZWxlbSBvZiBleHByLmVsZW1lbnRzKSB7XG5cdFx0dmFsdWVzLnB1c2goZXZhbEV4cHJlc3Npb24oZWxlbSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpKTtcblx0fVxuXG5cdGNvbnN0IGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24gPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldCgnQXJyYXknKTtcblx0Y29uc3QgaW5zdGFuY2U6IEluc3RhbmNlID0gY2xhc3NEZWYuY29uc3RydWN0RW1wdHlJbnN0YW5jZSgpO1xuXHRpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlID0gbmV3IGNsYXNzRGVmLm5hdGl2ZUluc3RhbmNlKGZyb21MeXJhVmFsdWUodmFsdWVzKSk7XG5cblx0cmV0dXJuIGluc3RhbmNlO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsSW5kZXgoZXhwcjogQVNUSW5kZXhOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKSB7XG5cdGlmICghZXhwci5vYmplY3QpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW5kZXggYWNjZXNzIG9uIG51bGwuYCwgZXhwci5zcGFuKTtcblx0fVxuXG5cdGlmICghZXhwci5pbmRleCkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBBY2Nlc3Mgd2l0aCB1bnNwZWNpZmljIGluZGV4LmAsIGV4cHIuc3Bhbik7XG5cdH1cblxuXHRjb25zdCBvYmplY3QgPSBldmFsRXhwcmVzc2lvbihleHByLm9iamVjdCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRjb25zdCBpbmRleCA9IGV2YWxFeHByZXNzaW9uKGV4cHIuaW5kZXgsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblxuXHRpZiAoIShvYmplY3QgaW5zdGFuY2VvZiBMeXJhQXJyYXkgfHwgb2JqZWN0Ll9fbmF0aXZlSW5zdGFuY2UgaW5zdGFuY2VvZiBMeXJhQXJyYXkpKSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoJ0luZGV4IGFjY2VzcyBvbiBub24tYXJyYXknLCBleHByLnNwYW4pO1xuXHR9XG5cblx0Y29uc3QgdGFyZ2V0ID0gb2JqZWN0IGluc3RhbmNlb2YgTHlyYUFycmF5ID8gb2JqZWN0IDogb2JqZWN0Ll9fbmF0aXZlSW5zdGFuY2U7XG5cdGNvbnN0IHZhbHVlID0gdGFyZ2V0LnZhbHVlc1tpbmRleF07XG5cblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgTHlyYU5hdGl2ZU9iamVjdCkge1xuXHRcdHJldHVybiB3cmFwTmF0aXZlSW5zdGFuY2UodmFsdWUsIG9iamVjdFJlZ2lzdHJ5KTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxMYW1iZGEobm9kZTogQVNUTGFtYmRhTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBsYW1iZGFFbnY6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogTGFtYmRhRnVuY3Rpb25DYWxsIHtcblx0cmV0dXJuIG5ldyBMYW1iZGFGdW5jdGlvbkNhbGwobm9kZSwgb2JqZWN0UmVnaXN0cnksIGxhbWJkYUVudiwgZXZlbnRQaXBlbGluZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxBc3NpZ24oZXhwcjogQVNUQXNzaWdubWVudE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRjb25zdCB2YWx1ZTogYW55ID0gZXZhbEV4cHJlc3Npb24oZXhwci5yaWdodCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXG5cdGlmIChleHByLmxlZnQudHlwZSA9PT0gQVNUTm9kZVR5cGUuTUVNQkVSKSB7XG5cdFx0aWYgKGV4cHIubGVmdCBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpIHtcblx0XHRcdGNvbnN0IG9iamVjdDogSW5zdGFuY2UgPSBldmFsRXhwcmVzc2lvbihcblx0XHRcdFx0ZXhwci5sZWZ0Lm9iamVjdCxcblx0XHRcdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0XHRcdGVudmlyb25tZW50LFxuXHRcdFx0XHRldmVudFBpcGVsaW5lLFxuXHRcdFx0XHR0aGlzVmFsdWVcblx0XHRcdCkgYXMgSW5zdGFuY2U7XG5cblx0XHRcdGlmIChleHByLmxlZnQub2JqZWN0LnR5cGUgPT09IEFTVE5vZGVUeXBlLklERU5USUZJRVIpIHtcblx0XHRcdFx0b2JqZWN0Ll9fc3RhdGljRmllbGRzW2V4cHIubGVmdC5wcm9wZXJ0eV0gPSB2YWx1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9iamVjdC5fX2luc3RhbmNlRmllbGRzW2V4cHIubGVmdC5wcm9wZXJ0eV0gPSB2YWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0b2JqZWN0Lm1hcmtEaXJ0eShldmVudFBpcGVsaW5lKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgbWVtYmVyIGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0ZW52aXJvbm1lbnQuc2V0KGV4cHIubGVmdC5uYW1lLCB2YWx1ZSk7XG5cdH1cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbE1lbWJlcihleHByOiBBU1RNZW1iZXJOb2RlLCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQpOiBhbnkge1xuXHRjb25zdCBvYmplY3Q6IGFueSA9IGVudmlyb25tZW50LmdldChleHByLm9iamVjdC5uYW1lKTtcblxuXHRpZiAoZXhwci5wcm9wZXJ0eSBpbiBvYmplY3QuX19pbnN0YW5jZUZpZWxkcykge1xuXHRcdHJldHVybiBvYmplY3QuX19pbnN0YW5jZUZpZWxkc1tleHByLnByb3BlcnR5XTtcblx0fVxuXG5cdGlmIChleHByLnByb3BlcnR5IGluIG9iamVjdC5fX3N0YXRpY0ZpZWxkcykge1xuXHRcdHJldHVybiBvYmplY3QuX19zdGF0aWNGaWVsZHNbZXhwci5wcm9wZXJ0eV07XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxDYWxsKGV4cHI6IEFTVENhbGxOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0Ly8gc3VwZXIgY2FsbCBpbnNpZGUgY29uc3RydWN0b3Jcblx0aWYgKGV4cHIuY2FsbGVlLnR5cGUgPT09IEFTVE5vZGVUeXBlLklERU5USUZJRVIgJiYgZXhwci5jYWxsZWUubmFtZSA9PT0gR1JBTU1BUi5TVVBFUikge1xuXHRcdGlmICghdGhpc1ZhbHVlIHx8ICF0aGlzVmFsdWUuX19jbGFzc0RlZj8uc3VwZXJDbGFzcykge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoJ3N1cGVyKCkgdXNlZCBvdXRzaWRlIG9mIHN1YmNsYXNzIGNvbnN0cnVjdG9yJyk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc3VwZXJDbGFzc0RlZiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KHRoaXNWYWx1ZS5fX2NsYXNzRGVmLnN1cGVyQ2xhc3MpO1xuXHRcdGNvbnN0IGNvbnN0cnVjdG9yTWV0aG9kID0gc3VwZXJDbGFzc0RlZi5jb25zdHJ1Y3Rvck1ldGhvZDtcblxuXHRcdGlmICghY29uc3RydWN0b3JNZXRob2QpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNvbnN0cnVjdG9yRW52ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblx0XHRjb25zdHJ1Y3RvckVudi5kZWZpbmUoR1JBTU1BUi5USElTLCB0aGlzVmFsdWUpO1xuXG5cdFx0YmluZE1ldGhvZFBhcmFtZXRlcnMoZXhwcixcblx0XHQgICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck1ldGhvZC5wYXJhbWV0ZXJzLFxuXHRcdCAgICAgICAgICAgICAgICAgICAgIG9iamVjdFJlZ2lzdHJ5LFxuXHRcdCAgICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yRW52LFxuXHRcdCAgICAgICAgICAgICAgICAgICAgIGVudmlyb25tZW50LFxuXHRcdCAgICAgICAgICAgICAgICAgICAgIGV2ZW50UGlwZWxpbmUsXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgdGhpc1ZhbHVlXG5cdFx0KTtcblxuXHRcdGZvciAoY29uc3QgY2hpbGQgb2YgY29uc3RydWN0b3JNZXRob2QuY2hpbGRyZW4pIHtcblx0XHRcdGV2YWxOb2RlKGNoaWxkLCBvYmplY3RSZWdpc3RyeSwgY29uc3RydWN0b3JFbnYsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRpZiAoZXhwci5jYWxsZWUudHlwZSA9PT0gQVNUTm9kZVR5cGUuTUVNQkVSKSB7XG5cdFx0aWYgKGV4cHIuY2FsbGVlIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkge1xuXHRcdFx0aWYgKGV4cHIuY2FsbGVlLm9iamVjdC50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0XHRcdGNvbnN0IGNsYXNzTmFtZSA9IGV4cHIuY2FsbGVlLm9iamVjdC5uYW1lO1xuXG5cdFx0XHRcdGlmIChvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmhhcyhjbGFzc05hbWUpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGV2YWxTdGF0aWNDYWxsKGV4cHIsIGNsYXNzTmFtZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZXZhbEluc3RhbmNlQ2FsbChleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gZXZhbEZ1bmN0aW9uQ2FsbChleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsRnVuY3Rpb25DYWxsKGV4cHI6IEFTVENhbGxOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKSB7XG5cdGNvbnN0IGZ1bmN0aW9uQ2FsbCA9IGV2YWxFeHByZXNzaW9uKGV4cHIuY2FsbGVlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdGNvbnN0IGFyZ3MgPSBldmFsQ2FsbEFyZ3VtZW50cyhleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cblx0aWYgKGZ1bmN0aW9uQ2FsbCBpbnN0YW5jZW9mIExhbWJkYUZ1bmN0aW9uQ2FsbCkge1xuXHRcdHJldHVybiBmdW5jdGlvbkNhbGwuZXZhbENhbGwodGhpc1ZhbHVlLCAuLi5hcmdzKTtcblx0fVxuXG5cdHJldHVybiAobmV3IE5hdGl2ZUZ1bmN0aW9uQ2FsbChleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpKS5ldmFsQ2FsbCh0aGlzVmFsdWUsIC4uLmFyZ3MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbFN0YXRpY0NhbGwoZXhwcjogQVNUQ2FsbE5vZGUsIGNsYXNzTmFtZTogc3RyaW5nLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0aWYgKCEoZXhwci5jYWxsZWUgaW5zdGFuY2VvZiBBU1RNZW1iZXJOb2RlKSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIG1lbWJlciBleHByZXNzaW9uICR7ZXhwci50eXBlfWAsIGV4cHIuc3Bhbik7XG5cdH1cblxuXHRjb25zdCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQoY2xhc3NOYW1lKTtcblx0Y29uc3QgbWV0aG9kRGVmOiBDbGFzc01ldGhvZERlZmluaXRpb24gfCB1bmRlZmluZWQgPSBjbGFzc0RlZi5zdGF0aWNNZXRob2RzW2V4cHIuY2FsbGVlLnByb3BlcnR5XTtcblxuXHRpZiAoIW1ldGhvZERlZikge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBTdGF0aWMgbWV0aG9kICR7Y2xhc3NOYW1lfS4ke2V4cHIuY2FsbGVlLnByb3BlcnR5fSBub3QgZm91bmRgLCBleHByLmNhbGxlZS5zcGFuKTtcblx0fVxuXG5cdGlmIChjbGFzc0RlZi5uYXRpdmVJbnN0YW5jZSAmJiBjbGFzc0RlZi5uYXRpdmVJbnN0YW5jZVttZXRob2REZWYubmFtZV0pIHtcblx0XHRjb25zdCBhcmdzID0gZXZhbE1ldGhvZEFyZ3VtZW50cyhleHByLFxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZERlZi5wYXJhbWV0ZXJzLFxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFJlZ2lzdHJ5LFxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudmlyb25tZW50LFxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50UGlwZWxpbmUsXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1ZhbHVlKVxuXHRcdGNvbnN0IHJhd0FyZ3MgPSBhcmdzLm1hcChmcm9tTHlyYVZhbHVlKTtcblx0XHRjb25zdCByZXN1bHQgPSBjbGFzc0RlZi5uYXRpdmVJbnN0YW5jZVttZXRob2REZWYubmFtZV0oLi4ucmF3QXJncyk7XG5cblx0XHRpZiAocmVzdWx0IGluc3RhbmNlb2YgTHlyYU5hdGl2ZU9iamVjdCkge1xuXHRcdFx0cmV0dXJuIHdyYXBOYXRpdmVJbnN0YW5jZShyZXN1bHQsIG9iamVjdFJlZ2lzdHJ5KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZhbFJldHVybihcblx0XHRcdFtyZXR1cm5WYWx1ZShyZXN1bHQpXSxcblx0XHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0bmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KSxcblx0XHRcdGV2ZW50UGlwZWxpbmUsXG5cdFx0XHR0aGlzVmFsdWUsXG5cdFx0XHRtZXRob2REZWYucmV0dXJuVHlwZVxuXHRcdCk7XG5cdH1cblxuXHRjb25zdCBtZXRob2RFbnYgPSBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpO1xuXG5cdGJpbmRNZXRob2RQYXJhbWV0ZXJzKGV4cHIsIG1ldGhvZERlZi5wYXJhbWV0ZXJzLCBvYmplY3RSZWdpc3RyeSwgbWV0aG9kRW52LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblxuXHRyZXR1cm4gZXZhbFJldHVybihtZXRob2REZWYuY2hpbGRyZW4sIG9iamVjdFJlZ2lzdHJ5LCBtZXRob2RFbnYsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSwgbWV0aG9kRGVmLnJldHVyblR5cGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEluc3RhbmNlQ2FsbChleHByOiBBU1RDYWxsTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCkge1xuXHRpZiAoIShleHByLmNhbGxlZSBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpKSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgbWVtYmVyIGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0fVxuXG5cdC8vIE9iamVrdCBhdXN3ZXJ0ZW4gKHUgfCB0aGlzIHwgc3VwZXIpXG5cdGxldCB0YXJnZXQgPSBldmFsRXhwcmVzc2lvbihleHByLmNhbGxlZS5vYmplY3QsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblxuXHR0YXJnZXQgPSBhdXRvQm94SWZOZWVkZWQodGFyZ2V0LCBvYmplY3RSZWdpc3RyeSk7XG5cblx0aWYgKCF0YXJnZXQgfHwgIXRhcmdldC5fX2NsYXNzRGVmKSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoJ0luc3RhbmNlIGNhbGwgb24gbm9uLW9iamVjdCcsIGV4cHIuY2FsbGVlLnNwYW4pO1xuXHR9XG5cblx0bGV0IGNsYXNzRGVmID0gdGFyZ2V0Ll9fY2xhc3NEZWY7XG5cblx0Ly8gc3VwZXIubWV0aG9kKClcblx0aWYgKGV4cHIuY2FsbGVlLm9iamVjdC50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSICYmIGV4cHIuY2FsbGVlLm9iamVjdC5uYW1lID09PSAnc3VwZXInKSB7XG5cdFx0Y29uc3Qgc3VwZXJOYW1lID0gY2xhc3NEZWYuc3VwZXJDbGFzcztcblx0XHRpZiAoIXN1cGVyTmFtZSkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoJ3N1cGVyIHVzZWQgYnV0IG5vIHN1cGVyY2xhc3MnLCBleHByLmNhbGxlZS5zcGFuKTtcblx0XHR9XG5cdFx0Y2xhc3NEZWYgPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChzdXBlck5hbWUpO1xuXHR9XG5cblxuXHRjb25zdCBtZXRob2REZWY6IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB8IG51bGwgPSByZXNvbHZlSW5zdGFuY2VNZXRob2QoY2xhc3NEZWYsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RSZWdpc3RyeSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHIuY2FsbGVlLnByb3BlcnR5KTtcblx0aWYgKCFtZXRob2REZWYpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgTWV0aG9kICR7ZXhwci5jYWxsZWUucHJvcGVydHl9IG5vdCBmb3VuZCBvbiAke2NsYXNzRGVmLm5hbWV9YCwgZXhwci5jYWxsZWUuc3Bhbik7XG5cdH1cblxuXHRjb25zdCBtZXRob2RFbnYgPSBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpO1xuXHRtZXRob2RFbnYuZGVmaW5lKEdSQU1NQVIuVEhJUywgdGFyZ2V0KTtcblxuXHRpZiAodGFyZ2V0Ll9fbmF0aXZlSW5zdGFuY2UgJiYgbWV0aG9kRGVmLm5hbWUgaW4gdGFyZ2V0Ll9fbmF0aXZlSW5zdGFuY2UpIHtcblx0XHRjb25zdCBhcmdzID0gZXZhbE1ldGhvZEFyZ3VtZW50cyhcblx0XHRcdGV4cHIsXG5cdFx0XHRtZXRob2REZWYucGFyYW1ldGVycyxcblx0XHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0ZW52aXJvbm1lbnQsXG5cdFx0XHRldmVudFBpcGVsaW5lLFxuXHRcdFx0dGhpc1ZhbHVlXG5cdFx0KTtcblx0XHRjb25zdCByYXdBcmdzID0gYXJncy5tYXAoZnJvbUx5cmFWYWx1ZSk7XG5cdFx0Y29uc3QgcmVzdWx0ID0gdGFyZ2V0Ll9fbmF0aXZlSW5zdGFuY2VbbWV0aG9kRGVmLm5hbWVdKC4uLnJhd0FyZ3MpO1xuXG5cdFx0aWYgKHJlc3VsdCBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdHJldHVybiB3cmFwTmF0aXZlSW5zdGFuY2UocmVzdWx0LCBvYmplY3RSZWdpc3RyeSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2YWxSZXR1cm4oW3JldHVyblZhbHVlKHJlc3VsdCldLFxuXHRcdCAgICAgICAgICAgICAgICAgIG9iamVjdFJlZ2lzdHJ5LFxuXHRcdCAgICAgICAgICAgICAgICAgIG1ldGhvZEVudixcblx0XHQgICAgICAgICAgICAgICAgICBldmVudFBpcGVsaW5lLFxuXHRcdCAgICAgICAgICAgICAgICAgIHRhcmdldCxcblx0XHQgICAgICAgICAgICAgICAgICBtZXRob2REZWYucmV0dXJuVHlwZSk7XG5cdH1cblxuXHRiaW5kTWV0aG9kUGFyYW1ldGVycyhleHByLCBtZXRob2REZWYucGFyYW1ldGVycywgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cblx0cmV0dXJuIGV2YWxSZXR1cm4obWV0aG9kRGVmLmNoaWxkcmVuLCBvYmplY3RSZWdpc3RyeSwgbWV0aG9kRW52LCBldmVudFBpcGVsaW5lLCB0YXJnZXQsIG1ldGhvZERlZi5yZXR1cm5UeXBlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVJbnN0YW5jZU1ldGhvZChjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIG1ldGhvZE5hbWU6IHN0cmluZyk6IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB8IG51bGwge1xuXHRpZiAoY2xhc3NEZWYuaW5zdGFuY2VNZXRob2RzW21ldGhvZE5hbWVdKSB7XG5cdFx0cmV0dXJuIGNsYXNzRGVmLmluc3RhbmNlTWV0aG9kc1ttZXRob2ROYW1lXTtcblx0fVxuXG5cdGlmIChjbGFzc0RlZi5zdXBlckNsYXNzKSB7XG5cdFx0Y29uc3Qgc3VwZXJEZWYgPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChjbGFzc0RlZi5zdXBlckNsYXNzKTtcblx0XHRyZXR1cm4gcmVzb2x2ZUluc3RhbmNlTWV0aG9kKHN1cGVyRGVmLCBvYmplY3RSZWdpc3RyeSwgbWV0aG9kTmFtZSk7XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRNZXRob2RQYXJhbWV0ZXJzKFxuXHRjYWxsTm9kZTogQVNUQ2FsbE5vZGUsXG5cdHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSxcblx0b2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LFxuXHRtZXRob2RFbnY6IEVudmlyb25tZW50LFxuXHRlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsXG5cdGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsXG5cdHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbFxuKTogdm9pZCB7XG5cblx0Y29uc3QgYXJncyA9IGNhbGxOb2RlLmFyZ3VtZW50cztcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgcGFyYW1ldGVyOiBBU1RQYXJhbWV0ZXJOb2RlIHwgbnVsbCA9IHBhcmFtZXRlcnNbaV0gfHwgbnVsbDtcblx0XHRjb25zdCBhcmd1bWVudDogYW55ID0gYXJnc1tpXSB8fCBudWxsO1xuXG5cdFx0aWYgKCFwYXJhbWV0ZXIpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKCdNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGluIG1ldGhvZCBjYWxsLicpO1xuXHRcdH1cblxuXHRcdGxldCByYXdWYWx1ZTtcblxuXHRcdGlmIChhcmd1bWVudCkge1xuXHRcdFx0cmF3VmFsdWUgPSBldmFsRXhwcmVzc2lvbihhcmd1bWVudCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdH0gZWxzZSBpZiAocGFyYW1ldGVyPy5kZWZhdWx0VmFsdWUpIHtcblx0XHRcdHJhd1ZhbHVlID0gZXZhbEV4cHJlc3Npb24ocGFyYW1ldGVyLmRlZmF1bHRWYWx1ZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNhc3RlZCA9IHBhcmFtZXRlci50eXBlQW5ub3RhdGlvblxuXHRcdFx0PyBjYXN0VmFsdWUocmF3VmFsdWUsIHBhcmFtZXRlci50eXBlQW5ub3RhdGlvbi5uYW1lKVxuXHRcdFx0OiBjYXN0VmFsdWUocmF3VmFsdWUsIFRZUEVfRU5VTS5NSVhFRCk7XG5cblx0XHRtZXRob2RFbnYuZGVmaW5lKHBhcmFtZXRlci5uYW1lLCBjYXN0ZWQpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsQ2FsbEFyZ3VtZW50cyhub2RlOiBBU1RDYWxsTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueVtdIHtcblx0aWYgKG5vZGUuY2FsbGVlIGluc3RhbmNlb2YgQVNUTGFtYmRhTm9kZSkge1xuXHRcdGNvbnN0IGxhbWJkYSA9IG5vZGUuY2FsbGVlO1xuXHRcdHJldHVybiBldmFsTWV0aG9kQXJndW1lbnRzKG5vZGUsIGxhbWJkYS5wYXJhbWV0ZXJzLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdH1cblxuXHRpZiAobm9kZS5jYWxsZWUudHlwZSA9PT0gQVNUTm9kZVR5cGUuSURFTlRJRklFUikge1xuXHRcdHJldHVybiBub2RlLmFyZ3VtZW50cy5tYXAoYXJndW1lbnQgPT4ge1xuXHRcdFx0cmV0dXJuIGNhc3RWYWx1ZShcblx0XHRcdFx0ZXZhbEV4cHJlc3Npb24oYXJndW1lbnQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKSxcblx0XHRcdFx0YXJndW1lbnQudHlwZVxuXHRcdFx0KTtcblx0XHR9KTtcblx0fVxuXG5cdGxldCBtb2R1bGVOYW1lOiBzdHJpbmcgPSAndW5rbm93bic7XG5cdGxldCBtZXRob2ROYW1lOiBzdHJpbmcgPSAndW5rbm93bic7XG5cblx0aWYgKG5vZGUuY2FsbGVlIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkge1xuXHRcdG1vZHVsZU5hbWUgPSBub2RlLmNhbGxlZS5vYmplY3QubmFtZTtcblx0XHRtZXRob2ROYW1lID0gbm9kZS5jYWxsZWUucHJvcGVydHk7XG5cdH1cblxuXHR0aHJvd1J1bnRpbWVFcnJvcihgVW5rbm93biBmdW5jdGlvbiAke21vZHVsZU5hbWV9LiR7bWV0aG9kTmFtZX1gLCBub2RlLnNwYW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbE1ldGhvZEFyZ3VtZW50cyhleHByOiBBU1RDYWxsTm9kZSB8IEFTVE5ld05vZGUsIHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueVtdIHtcblx0Y29uc3QgYXJncyA9IFtdO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHBhcmFtZXRlcjogQVNUUGFyYW1ldGVyTm9kZSB8IG51bGwgPSBwYXJhbWV0ZXJzW2ldIHx8IG51bGw7XG5cdFx0Y29uc3QgYXJndW1lbnQgPSBleHByLmFyZ3VtZW50c1tpXSB8fCBudWxsO1xuXG5cdFx0bGV0IHZhbHVlO1xuXG5cdFx0aWYgKGFyZ3VtZW50KSB7XG5cdFx0XHR2YWx1ZSA9IGV2YWxFeHByZXNzaW9uKGFyZ3VtZW50LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0fSBlbHNlIGlmIChwYXJhbWV0ZXI/LmRlZmF1bHRWYWx1ZSkge1xuXHRcdFx0dmFsdWUgPSBldmFsRXhwcmVzc2lvbihwYXJhbWV0ZXIuZGVmYXVsdFZhbHVlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBbUnVudGltZUVycm9yXSBNaXNzaW5nIGFyZ3VtZW50ICcke3BhcmFtZXRlcj8ubmFtZX0nYCwgZXhwci5zcGFuKTtcblx0XHR9XG5cblx0XHRhcmdzLnB1c2godmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIGFyZ3MubWFwKChhcmd1bWVudCwgaSkgPT4ge1xuXHRcdGNvbnN0IHBhcmFtZXRlciA9IHBhcmFtZXRlcnNbaV07XG5cdFx0cmV0dXJuIHBhcmFtZXRlcj8udHlwZUFubm90YXRpb25cblx0XHRcdD8gY2FzdFZhbHVlKGFyZ3VtZW50LCBwYXJhbWV0ZXIudHlwZUFubm90YXRpb24ubmFtZSlcblx0XHRcdDogY2FzdFZhbHVlKGFyZ3VtZW50LCBUWVBFX0VOVU0uTUlYRUQpO1xuXHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxJZihub2RlOiBBU1RJZk5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRjb25zdCBjb25kaXRpb24gPSBjYXN0VmFsdWUoXG5cdFx0ZXZhbEV4cHJlc3Npb24obm9kZS5jb25kaXRpb24sIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKSxcblx0XHRUWVBFX0VOVU0uQk9PTEVBTlxuXHQpO1xuXG5cdC8vIFRIRU5cblx0aWYgKGNvbmRpdGlvbiA9PT0gdHJ1ZSkge1xuXHRcdHJldHVybiBldmFsQmxvY2sobm9kZS50aGVuLmNoaWxkcmVuLCBvYmplY3RSZWdpc3RyeSwgbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KSwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0fVxuXG5cdC8vIEVMU0Vcblx0aWYgKG5vZGUuZWxzZSkge1xuXHRcdGlmIChub2RlLmVsc2UgaW5zdGFuY2VvZiBBU1RJZk5vZGUpIHtcblx0XHRcdHJldHVybiBldmFsSWYobm9kZS5lbHNlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2YWxCbG9jayhub2RlLmVsc2UuY2hpbGRyZW4sIG9iamVjdFJlZ2lzdHJ5LCBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpLCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsTWF0Y2gobm9kZTogQVNUTWF0Y2hOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0Y29uc3QgbWF0Y2hWYWx1ZTogYW55ID0gZXZhbEV4cHJlc3Npb24obm9kZS5leHByZXNzaW9uLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXG5cdGZvciAoY29uc3QgY2FzZU5vZGUgb2Ygbm9kZS5jYXNlcykge1xuXHRcdGlmIChjYXNlTm9kZS50ZXN0ID09PSBudWxsKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCB0ZXN0VmFsdWUgPSBldmFsRXhwcmVzc2lvbihjYXNlTm9kZS50ZXN0LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cblx0XHRpZiAodGVzdFZhbHVlID09PSBtYXRjaFZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gZXZhbE1hdGNoQ2FzZShjYXNlTm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdGlmIChub2RlLmRlZmF1bHRDYXNlKSB7XG5cdFx0cmV0dXJuIGV2YWxNYXRjaENhc2Uobm9kZS5kZWZhdWx0Q2FzZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsTWF0Y2hDYXNlKG5vZGU6IEFTVE1hdGNoQ2FzZU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRyZXR1cm4gZXZhbEJsb2NrKG5vZGUuY2hpbGRyZW4sIG9iamVjdFJlZ2lzdHJ5LCBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpLCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEZvcmVhY2gobm9kZTogQVNURm9yZWFjaE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRsZXQgaXRlcmFibGUgPSBldmFsRXhwcmVzc2lvbihub2RlLml0ZXJhYmxlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cblx0aWYgKCEoaXRlcmFibGUgaW5zdGFuY2VvZiBJbnN0YW5jZSkpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgZm9yZWFjaCBleHBlY3RzIGFuIG9iamVjdCBpbXBsZW1lbnRpbmcgSXRlcmFibGVgLCBub2RlLml0ZXJhYmxlLnNwYW4pO1xuXHR9XG5cblx0Y29uc3QgaXRlcmF0b3JNZXRob2QgPSByZXNvbHZlSW5zdGFuY2VNZXRob2QoXG5cdFx0aXRlcmFibGUuX19jbGFzc0RlZixcblx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHQnaXRlcmF0b3InXG5cdCk7XG5cblx0aWYgKCFpdGVyYXRvck1ldGhvZCkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBPYmplY3QgZG9lcyBub3QgaW1wbGVtZW50IEl0ZXJhYmxlIChtaXNzaW5nIGl0ZXJhdG9yKCkpYCwgbm9kZS5pdGVyYWJsZS5zcGFuKTtcblx0fVxuXG5cdGNvbnN0IGl0ZXJhdG9yOiBhbnkgPSBldmFsSW5zdGFuY2VDYWxsKFxuXHRcdCgoKTogQVNUQ2FsbE5vZGUgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBBU1RDYWxsTm9kZShuZXcgQVNUTWVtYmVyTm9kZShub2RlLml0ZXJhYmxlLCAnaXRlcmF0b3InKSk7XG5cdFx0fSkoKSxcblx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRlbnZpcm9ubWVudCxcblx0XHRldmVudFBpcGVsaW5lLFxuXHRcdHRoaXNWYWx1ZVxuXHQpO1xuXG5cdGlmICghKGl0ZXJhdG9yIGluc3RhbmNlb2YgSW5zdGFuY2UpKSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYGl0ZXJhdG9yKCkgbXVzdCByZXR1cm4gYW4gSXRlcmF0b3Igb2JqZWN0YCwgbm9kZS5pdGVyYWJsZS5zcGFuKTtcblx0fVxuXG5cdGNhbGxJdGVyYXRvck1ldGhvZChpdGVyYXRvciwgJ3Jld2luZCcsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG5cblx0d2hpbGUgKGNhbGxJdGVyYXRvck1ldGhvZChpdGVyYXRvciwgJ2hhc05leHQnLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpKSB7XG5cdFx0Y29uc3QgdmFsdWUgPSBjYWxsSXRlcmF0b3JNZXRob2QoaXRlcmF0b3IsICdjdXJyZW50Jywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcblxuXHRcdGNvbnN0IGxvb3BFbnYgPSBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpO1xuXG5cdFx0bG9vcEVudi5kZWZpbmUobm9kZS5pdGVyYXRvciwgdmFsdWUpO1xuXG5cdFx0Y29uc3QgcmVzdWx0ID0gZXZhbEJsb2NrKG5vZGUuYm9keSwgb2JqZWN0UmVnaXN0cnksIGxvb3BFbnYsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0aWYgKHJlc3VsdCBpbnN0YW5jZW9mIFJldHVyblZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblxuXHRcdGNhbGxJdGVyYXRvck1ldGhvZChpdGVyYXRvciwgJ25leHQnLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxsSXRlcmF0b3JNZXRob2QoaXRlcmF0b3I6IEluc3RhbmNlLCBtZXRob2ROYW1lOiBzdHJpbmcsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogYW55IHtcblx0cmV0dXJuIGNhbGxJbnN0YW5jZU1ldGhvZChcblx0XHRpdGVyYXRvcixcblx0XHRpdGVyYXRvci5maW5kZU1ldGhvZE5vZGUobWV0aG9kTmFtZSksXG5cdFx0W10sXG5cdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0ZW52aXJvbm1lbnQsXG5cdFx0ZXZlbnRQaXBlbGluZVxuXHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbFVuYXJ5KG5vZGU6IEFTVFVuYXJ5Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGNvbnN0IHZhbHVlID0gZXZhbEV4cHJlc3Npb24obm9kZS5hcmd1bWVudCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXG5cdHN3aXRjaCAobm9kZS5vcGVyYXRvcikge1xuXHRcdGNhc2UgR1JBTU1BUi5FWENMQU1BVElPTl9NQVJLOlxuXHRcdFx0cmV0dXJuICFjYXN0VmFsdWUodmFsdWUpO1xuXHR9XG5cblx0dGhyb3dSdW50aW1lRXJyb3IoYFVuc3VwcG9ydGVkIHVuYXJ5IG9wZXJhdG9yICR7bm9kZS5vcGVyYXRvcn1gLCBub2RlLnNwYW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbFZEb21Ob2RlKG5vZGU6IEFTVFZEb21Ob2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogVk5vZGUge1xuXHRjb25zdCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9O1xuXG5cdGZvciAoY29uc3QgW25hbWUsIHZhbHVlXSBvZiBub2RlLnByb3BzKSB7XG5cdFx0cHJvcHNbbmFtZV0gPSBldmFsRXhwcmVzc2lvbih2YWx1ZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHR9XG5cblx0Y29uc3QgY2hpbGRyZW46IEFycmF5PFZOb2RlIHwgc3RyaW5nPiA9IFtdO1xuXG5cblx0Y29uc3Qgdk5vZGU6IFZOb2RlID0ge1xuXHRcdHRhZzogbm9kZS50YWcsXG5cdFx0aXNDb21wb25lbnQ6IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuaGFzKG5vZGUudGFnKSxcblx0XHRwYXJlbnQ6IG51bGwsXG5cdFx0Y29tcG9uZW50OiBudWxsLFxuXHRcdHByb3BzOiBwcm9wcyxcblx0XHRjaGlsZHJlbjogY2hpbGRyZW4sXG5cdFx0ZG9tOiBudWxsXG5cdH07XG5cblx0Zm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG5cdFx0aWYgKGNoaWxkIGluc3RhbmNlb2YgQVNUVkRvbVRleHROb2RlKSB7XG5cdFx0XHRjaGlsZHJlbi5wdXNoKGNoaWxkLnZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgY2hpbGRWTm9kZSA9IGV2YWxFeHByZXNzaW9uKGNoaWxkLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSkgYXMgVk5vZGU7XG5cdFx0XHRjaGlsZFZOb2RlLnBhcmVudCA9IHZOb2RlO1xuXHRcdFx0Y2hpbGRyZW4ucHVzaChjaGlsZFZOb2RlKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdk5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsUmV0dXJuKGJsb2NrTm9kZXM6IEFTVE5vZGVbXSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCwgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGV2YWxCbG9jayhibG9ja05vZGVzLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSwgcmV0dXJuVHlwZSk7XG5cdH0gY2F0Y2ggKGV4ZWN1dGlvblN0b3ApIHtcblx0XHRpZiAoZXhlY3V0aW9uU3RvcCBpbnN0YW5jZW9mIEV4ZWN1dGlvblN0b3ApIHtcblx0XHRcdHJldHVybiBjYXN0VmFsdWUoZXhlY3V0aW9uU3RvcC5yZXR1cm5WYWx1ZS52YWx1ZSwgZXhlY3V0aW9uU3RvcC5yZXR1cm5UeXBlPy5uYW1lKTtcblx0XHR9XG5cdFx0dGhyb3cgZXhlY3V0aW9uU3RvcDtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEJsb2NrKGJsb2NrTm9kZXM6IEFTVE5vZGVbXSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCwgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGZvciAoY29uc3QgYmxvY2tOb2RlIG9mIGJsb2NrTm9kZXMpIHtcblx0XHRjb25zdCByZXR1cm5WYWx1ZTogYW55ID0gZXZhbE5vZGUoYmxvY2tOb2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0aWYgKHJldHVyblZhbHVlIGluc3RhbmNlb2YgUmV0dXJuVmFsdWUpIHtcblx0XHRcdHRocm93IG5ldyBFeGVjdXRpb25TdG9wKHJldHVyblZhbHVlLCByZXR1cm5UeXBlKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsQW5ub3RhdGlvblZhbHVlKG5vZGU6IEFTVE5vZGUpOiBhbnkge1xuXHRzd2l0Y2ggKG5vZGUudHlwZSkge1xuXHRcdGNhc2UgQVNUTm9kZVR5cGUuU1RSSU5HOlxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuTlVNQkVSOlxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuQk9PTEVBTjpcblx0XHRjYXNlIEFTVE5vZGVUeXBlLklERU5USUZJRVI6IHtcblx0XHRcdHJldHVybiBjYXN0VmFsdWUobm9kZS52YWx1ZSk7XG5cdFx0fVxuXG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5BUlJBWSA6IHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUQXJyYXlOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBub2RlLmVsZW1lbnRzLm1hcChjaGlsZCA9PiBldmFsQW5ub3RhdGlvblZhbHVlKGNoaWxkKSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBhbm5vdGF0aW9uIHByb3BlcnR5IHZhbHVlOiAke25vZGUudHlwZX1gLCBub2RlLnNwYW4pO1xuXHRcdH1cblxuXHRcdGRlZmF1bHQ6IHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBVbnN1cHBvcnRlZCBhbm5vdGF0aW9uIGV4cHJlc3Npb246ICR7bm9kZS50eXBlfWAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsQW5ub3RhdGlvblByb3BlcnRpZXMoYW5ub3RhdGlvbjogQVNUQW5ub3RhdGlvbk5vZGUpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcblx0Y29uc3QgcHJvcGVydGllczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuXG5cdGZvciAoY29uc3QgW2tleSwgdmFsdWVOb2RlXSBvZiBhbm5vdGF0aW9uLnByb3BlcnRpZXMpIHtcblx0XHRwcm9wZXJ0aWVzW2tleV0gPSBldmFsQW5ub3RhdGlvblZhbHVlKHZhbHVlTm9kZSk7XG5cdH1cblxuXHRyZXR1cm4gcHJvcGVydGllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGxJbnN0YW5jZU1ldGhvZChpbnN0YW5jZTogSW5zdGFuY2UsIG1ldGhvZE5vZGU6IEFTVE1ldGhvZE5vZGUsIGFyZ3M6IGFueVtdLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IGFueSB7XG5cdGNvbnN0IG1ldGhvZEVudiA9IG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCk7XG5cblx0bWV0aG9kRW52LmRlZmluZShHUkFNTUFSLlRISVMsIGluc3RhbmNlKTtcblxuXHRpZiAoaW5zdGFuY2UuX19uYXRpdmVJbnN0YW5jZSAmJiBtZXRob2ROb2RlLm5hbWUgaW4gaW5zdGFuY2UuX19uYXRpdmVJbnN0YW5jZSkge1xuXHRcdGNvbnN0IHJhd0FyZ3MgPSBhcmdzLm1hcChmcm9tTHlyYVZhbHVlKTtcblx0XHRjb25zdCByZXN1bHQgPSBpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlW21ldGhvZE5vZGUubmFtZV0oLi4ucmF3QXJncyk7XG5cblx0XHRpZiAocmVzdWx0IGluc3RhbmNlb2YgTHlyYU5hdGl2ZU9iamVjdCkge1xuXHRcdFx0cmV0dXJuIHdyYXBOYXRpdmVJbnN0YW5jZShyZXN1bHQsIG9iamVjdFJlZ2lzdHJ5KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZhbFJldHVybihcblx0XHRcdFtyZXR1cm5WYWx1ZShyZXN1bHQpXSxcblx0XHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0bWV0aG9kRW52LFxuXHRcdFx0ZXZlbnRQaXBlbGluZSxcblx0XHRcdGluc3RhbmNlLFxuXHRcdFx0bWV0aG9kTm9kZS5yZXR1cm5UeXBlXG5cdFx0KTtcblx0fVxuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbWV0aG9kTm9kZS5wYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgcGFyYW1ldGVyOiBBU1RQYXJhbWV0ZXJOb2RlIHwgbnVsbCA9IG1ldGhvZE5vZGUucGFyYW1ldGVyc1tpXSB8fCBudWxsO1xuXHRcdGNvbnN0IGFyZ3VtZW50OiBhbnkgPSBhcmdzW2ldIHx8IG51bGw7XG5cblx0XHRpZiAoIXBhcmFtZXRlcikge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoJ01ldGhvZCBwYXJhbWV0ZXIgaXMgbnVsbC4nKTtcblx0XHR9XG5cblx0XHRsZXQgdmFsdWU7XG5cdFx0aWYgKCFhcmd1bWVudCkge1xuXHRcdFx0dmFsdWUgPSBwYXJhbWV0ZXIuZGVmYXVsdFZhbHVlXG5cdFx0XHRcdD8gZXZhbE5vZGUocGFyYW1ldGVyLmRlZmF1bHRWYWx1ZSwgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgZXZlbnRQaXBlbGluZSwgaW5zdGFuY2UpXG5cdFx0XHRcdDogbnVsbDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFsdWUgPSBhcmdzW2ldO1xuXHRcdH1cblxuXHRcdG1ldGhvZEVudi5kZWZpbmUocGFyYW1ldGVyLm5hbWUsIHZhbHVlKTtcblx0fVxuXG5cdHJldHVybiBldmFsUmV0dXJuKG1ldGhvZE5vZGUuY2hpbGRyZW4sIG9iamVjdFJlZ2lzdHJ5LCBtZXRob2RFbnYsIGV2ZW50UGlwZWxpbmUsIGluc3RhbmNlLCBtZXRob2ROb2RlLnJldHVyblR5cGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b0JveElmTmVlZGVkKHZhbHVlOiBhbnksIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IEluc3RhbmNlIHtcblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgSW5zdGFuY2UpIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSBUWVBFX0VOVU0uTlVNQkVSKSB7XG5cdFx0cmV0dXJuIGNyZWF0ZUJveGVkSW5zdGFuY2UoQXV0b2JveGVkVHlwZXMuZ2V0Q2xhc3NOYW1lKFRZUEVfRU5VTS5OVU1CRVIpLCB2YWx1ZSwgb2JqZWN0UmVnaXN0cnkpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gVFlQRV9FTlVNLlNUUklORykge1xuXHRcdHJldHVybiBjcmVhdGVCb3hlZEluc3RhbmNlKEF1dG9ib3hlZFR5cGVzLmdldENsYXNzTmFtZShUWVBFX0VOVU0uU1RSSU5HKSwgdmFsdWUsIG9iamVjdFJlZ2lzdHJ5KTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09IFRZUEVfRU5VTS5CT09MRUFOKSB7XG5cdFx0cmV0dXJuIGNyZWF0ZUJveGVkSW5zdGFuY2UoQXV0b2JveGVkVHlwZXMuZ2V0Q2xhc3NOYW1lKFRZUEVfRU5VTS5CT09MRUFOKSwgdmFsdWUsIG9iamVjdFJlZ2lzdHJ5KTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJveGVkSW5zdGFuY2UoY2xhc3NOYW1lOiBzdHJpbmcsIHByaW1pdGl2ZVZhbHVlOiBhbnksIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IEluc3RhbmNlIHtcblx0Y29uc3QgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KGNsYXNzTmFtZSk7XG5cdGNvbnN0IGluc3RhbmNlOiBJbnN0YW5jZSA9IGNsYXNzRGVmLmNvbnN0cnVjdEVtcHR5SW5zdGFuY2UoKTtcblxuXHRpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlID0gbmV3IGNsYXNzRGVmLm5hdGl2ZUluc3RhbmNlKGZyb21MeXJhVmFsdWUocHJpbWl0aXZlVmFsdWUpKTtcblxuXHRyZXR1cm4gaW5zdGFuY2U7XG59XG4iLAogICAgImNvbnN0IEx5cmFFdmVudHMgPSB7XG5cdExZUkFfSU5TVEFOQ0VfRElSVFlfU1RBVEU6ICdseXJhOmluc3RhbmNlX2RpcnR5X3N0YXRlJyxcblx0TFlSQV9JTlNUQU5DRV9DTEVBTl9TVEFURTogJ2x5cmE6aW5zdGFuY2VfY2xlYW5fc3RhdGUnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMeXJhRXZlbnRzO1xuIiwKICAgICJpbXBvcnQge0dSQU1NQVJ9IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5pbXBvcnQge1xuXHRBU1RDbGFzc05vZGUsXG5cdEFTVEZpZWxkTm9kZSxcblx0QVNUSW50ZXJmYWNlTm9kZSxcblx0QVNUTWV0aG9kTm9kZSxcblx0QVNUTmV3Tm9kZSxcblx0QVNUTm9kZSxcblx0QVNUUGFyYW1ldGVyTm9kZSxcblx0QVNUVHlwZU5vZGVcbn0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHt0aHJvd1J1bnRpbWVFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuaW1wb3J0IHR5cGUge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuaW1wb3J0IHtldmFsRXhwcmVzc2lvbiwgZXZhbE1ldGhvZEFyZ3VtZW50cywgZXZhbE5vZGV9IGZyb20gXCIuL2ludGVycHJldGVyX3J1bnRpbWVcIjtcbmltcG9ydCB7Y2FzdFZhbHVlLCBmcm9tTHlyYVZhbHVlLCBMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQgdHlwZSB7RXZlbnRQaXBlbGluZX0gZnJvbSBcIi4uL2V2ZW50L3BpcGVsaW5lXCI7XG5pbXBvcnQgTHlyYUV2ZW50cyBmcm9tIFwiLi4vZXZlbnQvZXZlbnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCB7XG5cdHBhcmVudDogRW52aXJvbm1lbnQgfCBudWxsO1xuXHR2YWx1ZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfTtcblxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IEVudmlyb25tZW50IHwgbnVsbCA9IG51bGwpIHtcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcblx0XHR0aGlzLnZhbHVlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdH1cblxuXHRkZWZpbmUobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0dGhpcy52YWx1ZXNbbmFtZV0gPSB2YWx1ZTtcblx0fVxuXG5cdGdldChuYW1lOiBzdHJpbmcpOiBhbnkge1xuXHRcdGlmIChuYW1lIGluIHRoaXMudmFsdWVzKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZXNbbmFtZV07XG5cdFx0fVxuXHRcdGlmICh0aGlzLnBhcmVudCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucGFyZW50LmdldChuYW1lKTtcblx0XHR9XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVuZGVmaW5lZCB2YXJpYWJsZSAke25hbWV9YCk7XG5cdH1cblxuXHRzZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0aWYgKG5hbWUgaW4gdGhpcy52YWx1ZXMpIHtcblx0XHRcdHRoaXMudmFsdWVzW25hbWVdID0gdmFsdWU7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICh0aGlzLnBhcmVudCkge1xuXHRcdFx0dGhpcy5wYXJlbnQuc2V0KG5hbWUsIHZhbHVlKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVuZGVmaW5lZCB2YXJpYWJsZSAke25hbWV9YCk7XG5cdH1cblxuXHRoYXMobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzW25hbWVdIHx8ICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5oYXMobmFtZSkpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnN0YW5jZSB7XG5cdHB1YmxpYyByZWFkb25seSBpZDogc3RyaW5nO1xuXHRfX2NsYXNzRGVmOiBDbGFzc0RlZmluaXRpb247XG5cdF9fZmllbGRzSW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblx0X19pbnN0YW5jZUZpZWxkczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9O1xuXHRfX3N0YXRpY0ZpZWxkczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9O1xuXHRfX25hdGl2ZUluc3RhbmNlOiBhbnkgfCBudWxsID0gbnVsbDtcblx0X19pc0RpcnR5OiBib29sZWFuID0gZmFsc2VcblxuXHRjb25zdHJ1Y3RvcihjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uKSB7XG5cdFx0dGhpcy5fX2NsYXNzRGVmID0gY2xhc3NEZWY7XG5cdFx0dGhpcy5fX2luc3RhbmNlRmllbGRzID0ge307XG5cdFx0dGhpcy5fX3N0YXRpY0ZpZWxkcyA9IHt9O1xuXHRcdHRoaXMuX19uYXRpdmVJbnN0YW5jZSA9IG51bGw7XG5cblx0XHR0aGlzLmlkID0gSW5zdGFuY2UuZ2VuZXJhdGVJbnN0YW5jZVVVSUQoKTtcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIGdlbmVyYXRlSW5zdGFuY2VVVUlEKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHNlbGYuY3J5cHRvLnJhbmRvbVVVSUQoKTtcblx0fVxuXG5cdHB1YmxpYyBtYXJrRGlydHkoZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IHZvaWQge1xuXHRcdHRoaXMuX19pc0RpcnR5ID0gdHJ1ZTtcblxuXHRcdGV2ZW50UGlwZWxpbmUuZW1pdChMeXJhRXZlbnRzLkxZUkFfSU5TVEFOQ0VfRElSVFlfU1RBVEUsIHtpbnN0YW5jZTogdGhpc30pO1xuXHR9XG5cblx0cHVibGljIG1hcmtDbGVhbihldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogdm9pZCB7XG5cdFx0dGhpcy5fX2lzRGlydHkgPSBmYWxzZTtcblxuXHRcdGV2ZW50UGlwZWxpbmUuZW1pdChMeXJhRXZlbnRzLkxZUkFfSU5TVEFOQ0VfQ0xFQU5fU1RBVEUsIHtpbnN0YW5jZTogdGhpc30pO1xuXHR9XG5cblx0ZmluZGVNZXRob2ROb2RlKG5hbWU6IHN0cmluZyk6IEFTVE1ldGhvZE5vZGUge1xuXHRcdHJldHVybiB0aGlzLl9fY2xhc3NEZWYuZmluZE1ldGhvZE5vZGUobmFtZSk7XG5cdH1cblxuXHRoYXNQdWJsaWNQcm9wZXJ0eShuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX19jbGFzc0RlZi5maW5kSW5zdGFuY2VGaWVsZERlZmluaXRpb24obmFtZSkubW9kaWZpZXJzLnB1YmxpYztcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0c2V0UHVibGljUHJvcGVydHkobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55LCBleHBlY3RlZDogYW55ID0gbnVsbCk6IHZvaWQge1xuXHRcdGxldCBmaWVsZERlZmluaXRpb246IENsYXNzRmllbGREZWZpbml0aW9uID0gdGhpcy5fX2NsYXNzRGVmLmZpbmRJbnN0YW5jZUZpZWxkRGVmaW5pdGlvbihuYW1lKTtcblxuXHRcdGlmIChmaWVsZERlZmluaXRpb24ubW9kaWZpZXJzLnB1YmxpYykge1xuXHRcdFx0dGhpcy5fX2luc3RhbmNlRmllbGRzW25hbWVdID0gY2FzdFZhbHVlKHZhbHVlLCBleHBlY3RlZCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYEZpZWxkICR7bmFtZX0gaXMgbm90IHB1YmxpYy5gKTtcblx0fVxuXG5cdGluaXRpYWxpemVJbnN0YW5jZUZpZWxkcyhvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IHZvaWQge1xuXHRcdHRoaXMuX19jbGFzc0RlZi5pbml0aWFsaXplSW5zdGFuY2VGaWVsZHModGhpcywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTW9kaWZpZXJzIHtcblx0b3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuXHRwdWJsaWM6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXHRzdGF0aWM6IGJvb2xlYW4gPSBmYWxzZTtcblx0cmVhZG9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHQvKipcblx0ICogQHBhcmFtIHt7fX0gYXR0cmlidXRlc1xuXHQgKi9cblx0Y29uc3RydWN0b3IoYXR0cmlidXRlczogeyBbaW5kZXg6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9KSB7XG5cdFx0Zm9yIChsZXQgYXR0cmlidXRlIG9mIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpKSB7XG5cdFx0XHRpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShhdHRyaWJ1dGUpKSB7XG5cdFx0XHRcdGNvbnN0IG1vZGlmaWVyczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0gdGhpcztcblx0XHRcdFx0bW9kaWZpZXJzW2F0dHJpYnV0ZV0gPSBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTdXBlckNsYXNzIHtcblx0dHlwZTogc3RyaW5nO1xuXHRuYW1lOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IodHlwZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEV4ZWN1dGlvblN0b3AgZXh0ZW5kcyBFcnJvciB7XG5cdGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSByZXR1cm5WYWx1ZTogUmV0dXJuVmFsdWUsXG5cdCAgICAgICAgICAgIHB1YmxpYyByZWFkb25seSByZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGwpIHtcblx0XHRzdXBlcignRXhlY3V0aW9uIHN0b3BwZW5kIHdpdGggcmV0dXJuLicpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXR1cm5WYWx1ZSB7XG5cdHZhbHVlOiBhbnk7XG5cblx0Y29uc3RydWN0b3IodmFsdWU6IGFueSkge1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xhc3NGaWVsZERlZmluaXRpb24ge1xuXHRuYW1lOiBzdHJpbmc7XG5cdHR5cGU6IHN0cmluZyB8IG51bGw7XG5cdG1vZGlmaWVyczogTW9kaWZpZXJzO1xuXHRpbml0aWFsaXplcjogQVNUTm9kZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZTogc3RyaW5nIHwgbnVsbCwgbW9kaWZpZXJzOiBNb2RpZmllcnMsIGluaXRpYWxpemVyOiBBU1ROb2RlIHwgbnVsbCA9IG51bGwpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG5cdFx0dGhpcy5pbml0aWFsaXplciA9IGluaXRpYWxpemVyO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGFzc01ldGhvZERlZmluaXRpb24ge1xuXHRuYW1lOiBzdHJpbmc7XG5cdHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXTtcblx0cmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsO1xuXHRtb2RpZmllcnM6IE1vZGlmaWVycztcblx0Y2hpbGRyZW46IEFTVE5vZGVbXTtcblx0aXNDb25zdHJ1Y3RvcjogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSwgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsLCBtb2RpZmllcnM6IE1vZGlmaWVycywgY2hpbGRyZW46IEFTVE5vZGVbXSkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcblx0XHR0aGlzLnJldHVyblR5cGUgPSByZXR1cm5UeXBlO1xuXHRcdHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcblx0XHR0aGlzLmlzQ29uc3RydWN0b3IgPSBuYW1lID09PSBHUkFNTUFSLkNPTlNUUlVDVE9SO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGFzc0RlZmluaXRpb24ge1xuXHRub2RlOiBBU1RDbGFzc05vZGU7XG5cdG5hbWU6IHN0cmluZztcblx0c3VwZXJDbGFzczogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cdGluc3RhbmNlRmllbGRzOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbltdO1xuXHRpbnN0YW5jZU1ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfTtcblx0c3RhdGljRmllbGRzOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbltdO1xuXHRzdGF0aWNNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH07XG5cdGNvbnN0cnVjdG9yTWV0aG9kOiBDbGFzc01ldGhvZERlZmluaXRpb24gfCBudWxsID0gbnVsbDtcblx0bmF0aXZlSW5zdGFuY2U6IGFueSA9IG51bGw7XG5cdGlzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdGNsYXNzTm9kZTogQVNUQ2xhc3NOb2RlLFxuXHRcdHN1cGVyQ2xhc3M6IHN0cmluZyB8IG51bGwsXG5cdFx0bmFtZTogc3RyaW5nLFxuXHRcdGluc3RhbmNlRmllbGRzOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbltdLFxuXHRcdGluc3RhbmNlTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9LFxuXHRcdHN0YXRpY0ZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXSxcblx0XHRzdGF0aWNNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH0sXG5cdFx0Y29uc3RydWN0b3JNZXRob2Q6IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB8IG51bGwgPSBudWxsXG5cdCkge1xuXHRcdHRoaXMubm9kZSA9IGNsYXNzTm9kZTtcblx0XHR0aGlzLnN1cGVyQ2xhc3MgPSBzdXBlckNsYXNzO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5pbnN0YW5jZUZpZWxkcyA9IGluc3RhbmNlRmllbGRzO1xuXHRcdHRoaXMuaW5zdGFuY2VNZXRob2RzID0gaW5zdGFuY2VNZXRob2RzO1xuXHRcdHRoaXMuc3RhdGljRmllbGRzID0gc3RhdGljRmllbGRzO1xuXHRcdHRoaXMuc3RhdGljTWV0aG9kcyA9IHN0YXRpY01ldGhvZHM7XG5cdFx0dGhpcy5jb25zdHJ1Y3Rvck1ldGhvZCA9IGNvbnN0cnVjdG9yTWV0aG9kO1xuXHRcdHRoaXMuaXNPcGVuID0gY2xhc3NOb2RlLm1vZGlmaWVycy5vcGVuO1xuXHR9XG5cblx0c3RhdGljIGZyb21BU1Qobm9kZTogQVNUQ2xhc3NOb2RlKTogQ2xhc3NEZWZpbml0aW9uIHtcblx0XHRjb25zdCBpbnN0YW5jZUZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXSA9IFtdO1xuXHRcdGNvbnN0IGluc3RhbmNlTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9ID0ge307XG5cdFx0Y29uc3Qgc3RhdGljRmllbGRzOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbltdID0gW107XG5cdFx0Y29uc3Qgc3RhdGljTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9ID0ge307XG5cdFx0bGV0IGNvbnN0cnVjdG9yTWV0aG9kOiBDbGFzc01ldGhvZERlZmluaXRpb24gfCBudWxsID0gbnVsbDtcblxuXHRcdGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuXHRcdFx0aWYgKGNoaWxkIGluc3RhbmNlb2YgQVNURmllbGROb2RlKSB7XG5cdFx0XHRcdGNvbnN0IGZpZWxkID0gbmV3IENsYXNzRmllbGREZWZpbml0aW9uKFxuXHRcdFx0XHRcdGNoaWxkLm5hbWUsXG5cdFx0XHRcdFx0Y2hpbGQuZmllbGRUeXBlXG5cdFx0XHRcdFx0XHQ/IGNoaWxkLmZpZWxkVHlwZS5uYW1lXG5cdFx0XHRcdFx0XHQ6IG51bGwsXG5cdFx0XHRcdFx0Y2hpbGQubW9kaWZpZXJzLFxuXHRcdFx0XHRcdGNoaWxkLmluaXRcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRpZiAoZmllbGQubW9kaWZpZXJzLnN0YXRpYykge1xuXHRcdFx0XHRcdHN0YXRpY0ZpZWxkcy5wdXNoKGZpZWxkKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpbnN0YW5jZUZpZWxkcy5wdXNoKGZpZWxkKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChjaGlsZCBpbnN0YW5jZW9mIEFTVE1ldGhvZE5vZGUpIHtcblx0XHRcdFx0Y29uc3QgbWV0aG9kID0gbmV3IENsYXNzTWV0aG9kRGVmaW5pdGlvbihcblx0XHRcdFx0XHRjaGlsZC5uYW1lLFxuXHRcdFx0XHRcdGNoaWxkLnBhcmFtZXRlcnMsXG5cdFx0XHRcdFx0Y2hpbGQucmV0dXJuVHlwZSxcblx0XHRcdFx0XHRjaGlsZC5tb2RpZmllcnMsXG5cdFx0XHRcdFx0Y2hpbGQuY2hpbGRyZW5cblx0XHRcdFx0KTtcblx0XHRcdFx0aWYgKG1ldGhvZC5pc0NvbnN0cnVjdG9yKSB7XG5cdFx0XHRcdFx0Y29uc3RydWN0b3JNZXRob2QgPSBtZXRob2Q7XG5cdFx0XHRcdH0gZWxzZSBpZiAobWV0aG9kLm1vZGlmaWVycy5zdGF0aWMpIHtcblx0XHRcdFx0XHRzdGF0aWNNZXRob2RzW21ldGhvZC5uYW1lXSA9IG1ldGhvZDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpbnN0YW5jZU1ldGhvZHNbbWV0aG9kLm5hbWVdID0gbWV0aG9kO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5oYW5kbGVkIG5vZGUgJHtjaGlsZC50eXBlfS5gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IENsYXNzRGVmaW5pdGlvbihcblx0XHRcdG5vZGUsXG5cdFx0XHRub2RlLnN1cGVyQ2xhc3M/Lm5hbWUgfHwgbnVsbCxcblx0XHRcdG5vZGUubmFtZSxcblx0XHRcdGluc3RhbmNlRmllbGRzLFxuXHRcdFx0aW5zdGFuY2VNZXRob2RzLFxuXHRcdFx0c3RhdGljRmllbGRzLFxuXHRcdFx0c3RhdGljTWV0aG9kcyxcblx0XHRcdGNvbnN0cnVjdG9yTWV0aG9kXG5cdFx0KTtcblx0fVxuXG5cdGZpbmRNZXRob2ROb2RlKG5hbWU6IHN0cmluZyk6IEFTVE1ldGhvZE5vZGUge1xuXHRcdGNvbnN0IG5vZGUgPSB0aGlzLm5vZGVcblx0XHQgICAgICAgICAgICAgICAgIC5jaGlsZHJlblxuXHRcdCAgICAgICAgICAgICAgICAgLmZpbmQobm9kZSA9PiBub2RlLm5hbWUgPT09IG5hbWUpO1xuXG5cdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RNZXRob2ROb2RlKSB7XG5cdFx0XHRyZXR1cm4gbm9kZTtcblx0XHR9XG5cblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgTWV0aG9kICR7bmFtZX0gbm90IGZvdW5kIGluIGNsYXNzICR7dGhpcy5uYW1lfS5gKTtcblx0fVxuXG5cdGZpbmRJbnN0YW5jZUZpZWxkRGVmaW5pdGlvbihuYW1lOiBzdHJpbmcpOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbiB7XG5cdFx0Y29uc3QgZmllbGREZWZpbml0aW9uOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbiB8IHVuZGVmaW5lZCA9IHRoaXMuaW5zdGFuY2VGaWVsZHNcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKChmaWVsZDogQ2xhc3NGaWVsZERlZmluaXRpb24pOiBib29sZWFuID0+IGZpZWxkLm5hbWUgPT09IG5hbWUpO1xuXG5cdFx0aWYgKGZpZWxkRGVmaW5pdGlvbiBpbnN0YW5jZW9mIENsYXNzRmllbGREZWZpbml0aW9uKSB7XG5cdFx0XHRyZXR1cm4gZmllbGREZWZpbml0aW9uO1xuXHRcdH1cblxuXHRcdHRocm93UnVudGltZUVycm9yKGBGaWVsZCAke25hbWV9IG5vdCBmb3VuZCBpbiBjbGFzcyAke3RoaXMubmFtZX0uYCk7XG5cdH1cblxuXHRjb25zdHJ1Y3RFbXB0eUluc3RhbmNlKCk6IEluc3RhbmNlIHtcblx0XHRyZXR1cm4gbmV3IEluc3RhbmNlKHRoaXMpO1xuXHR9XG5cblx0Y29uc3RydWN0TmF0aXZlSW5zdGFuY2UoYXJnczogYW55W10gPSBbXSk6IEluc3RhbmNlIHtcblx0XHRjb25zdCBpbnN0YW5jZTogSW5zdGFuY2UgPSB0aGlzLmNvbnN0cnVjdEVtcHR5SW5zdGFuY2UoKTtcblx0XHRpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlID0gbmV3IHRoaXMubmF0aXZlSW5zdGFuY2UoLi4uYXJncyk7XG5cdFx0cmV0dXJuIGluc3RhbmNlO1xuXHR9XG5cblx0Y29uc3RydWN0TmV3SW5zdGFuY2VXaXRob3V0QXJndW1lbnRzKG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogSW5zdGFuY2Uge1xuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdE5ld0luc3RhbmNlKFtdLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXHR9XG5cblx0Y29uc3RydWN0TmV3SW5zdGFuY2UoYXJnczogQVNUTm9kZVtdLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IEluc3RhbmNlIHtcblx0XHRjb25zdCBuZXdOb2RlID0gbmV3IEFTVE5ld05vZGUoYXJncywgbmV3IEFTVFR5cGVOb2RlKEFTVFR5cGVOb2RlLktJTkRfU0lNUExFLCB0aGlzLm5hbWUpKTtcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3RJbnN0YW5jZUJ5TmV3Tm9kZShuZXdOb2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXHR9XG5cblx0Y29uc3RydWN0SW5zdGFuY2VCeU5ld05vZGUoZXhwcjogQVNUTmV3Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiBJbnN0YW5jZSB7XG5cdFx0Y29uc3QgaW5zdGFuY2U6IEluc3RhbmNlID0gdGhpcy5jb25zdHJ1Y3RFbXB0eUluc3RhbmNlKCk7XG5cblx0XHRvYmplY3RSZWdpc3RyeS5pbnN0YW5jZXMucmVnaXN0ZXIoaW5zdGFuY2UpO1xuXG5cdFx0aW5zdGFuY2UuaW5pdGlhbGl6ZUluc3RhbmNlRmllbGRzKG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG5cblx0XHRpZiAoIXRoaXMuY29uc3RydWN0b3JNZXRob2QpIHtcblx0XHRcdHJldHVybiBpbnN0YW5jZTtcblx0XHR9XG5cblx0XHRjb25zdCBjb25zdHJ1Y3RvcjogQ2xhc3NNZXRob2REZWZpbml0aW9uID0gdGhpcy5jb25zdHJ1Y3Rvck1ldGhvZDtcblx0XHRjb25zdCBjb25zdHJ1Y3RvckVudiA9IG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCk7XG5cblx0XHRjb25zdCBjb25zdHJ1Y3RvckFyZ3MgPSBldmFsTWV0aG9kQXJndW1lbnRzKFxuXHRcdFx0ZXhwcixcblx0XHRcdGNvbnN0cnVjdG9yLnBhcmFtZXRlcnMsXG5cdFx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRcdGVudmlyb25tZW50LFxuXHRcdFx0ZXZlbnRQaXBlbGluZSxcblx0XHRcdGluc3RhbmNlXG5cdFx0KTtcblxuXHRcdGNvbnN0cnVjdG9yRW52LmRlZmluZShHUkFNTUFSLlRISVMsIGluc3RhbmNlKTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY29uc3RydWN0b3JBcmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBwYXJhbWV0ZXI6IEFTVFBhcmFtZXRlck5vZGUgfCB1bmRlZmluZWQgPSBjb25zdHJ1Y3Rvci5wYXJhbWV0ZXJzW2ldO1xuXHRcdFx0aWYgKHBhcmFtZXRlcikge1xuXHRcdFx0XHRjb25zdHJ1Y3RvckVudi5kZWZpbmUocGFyYW1ldGVyLm5hbWUsIGNvbnN0cnVjdG9yQXJnc1tpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiBjb25zdHJ1Y3Rvci5jaGlsZHJlbikge1xuXHRcdFx0ZXZhbE5vZGUoY2hpbGQsIG9iamVjdFJlZ2lzdHJ5LCBjb25zdHJ1Y3RvckVudiwgZXZlbnRQaXBlbGluZSwgaW5zdGFuY2UpO1xuXHRcdH1cblxuXHRcdHJldHVybiBpbnN0YW5jZTtcblx0fVxuXG5cdGNvbnN0cnVjdE5hdGl2ZUluc3RhbmNlQnlOZXdOb2RlKGV4cHI6IEFTVE5ld05vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogSW5zdGFuY2Uge1xuXHRcdGNvbnN0IGluc3RhbmNlOiBJbnN0YW5jZSA9IHRoaXMuY29uc3RydWN0RW1wdHlJbnN0YW5jZSgpO1xuXG5cdFx0b2JqZWN0UmVnaXN0cnkuaW5zdGFuY2VzLnJlZ2lzdGVyKGluc3RhbmNlKTtcblxuXHRcdGNvbnN0IGNvbnN0cnVjdG9yOiBDbGFzc01ldGhvZERlZmluaXRpb24gfCBudWxsID0gdGhpcy5jb25zdHJ1Y3Rvck1ldGhvZDtcblx0XHRjb25zdCBjb25zdHJ1Y3RvckVudjogRW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpO1xuXG5cdFx0Y29uc3QgY29uc3RydWN0b3JBcmdzOiBhbnlbXSA9IGV2YWxNZXRob2RBcmd1bWVudHMoXG5cdFx0XHRleHByLFxuXHRcdFx0Y29uc3RydWN0b3Jcblx0XHRcdFx0PyBjb25zdHJ1Y3Rvci5wYXJhbWV0ZXJzXG5cdFx0XHRcdDogW10sXG5cdFx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRcdGVudmlyb25tZW50LFxuXHRcdFx0ZXZlbnRQaXBlbGluZSxcblx0XHRcdGluc3RhbmNlXG5cdFx0KTtcblxuXHRcdGNvbnN0cnVjdG9yRW52LmRlZmluZShHUkFNTUFSLlRISVMsIGluc3RhbmNlKTtcblxuXHRcdGlmICh0aGlzLm5hdGl2ZUluc3RhbmNlID09PSBudWxsKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcignQ2xhc3MgaGFzIG5vIG5hdGl2ZSBpbnN0YW5jZScpO1xuXHRcdH1cblxuXHRcdGNvbnN0IG5hdGl2ZUluc3RhbmNlID0gbmV3IHRoaXMubmF0aXZlSW5zdGFuY2UoLi4uY29uc3RydWN0b3JBcmdzLm1hcChmcm9tTHlyYVZhbHVlKSk7XG5cdFx0aWYgKG5hdGl2ZUluc3RhbmNlIGluc3RhbmNlb2YgTHlyYU5hdGl2ZU9iamVjdCkge1xuXHRcdFx0aW5zdGFuY2UuX19uYXRpdmVJbnN0YW5jZSA9IG5hdGl2ZUluc3RhbmNlO1xuXHRcdH1cblxuXHRcdHJldHVybiBpbnN0YW5jZTtcblx0fVxuXG5cdGluaXRpYWxpemVJbnN0YW5jZUZpZWxkcyhpbnN0YW5jZTogSW5zdGFuY2UsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogdm9pZCB7XG5cdFx0aWYgKGluc3RhbmNlLl9fZmllbGRzSW5pdGlhbGl6ZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgcmF3VmFsdWU7XG5cdFx0Zm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLmluc3RhbmNlRmllbGRzKSB7XG5cdFx0XHRyYXdWYWx1ZSA9IGZpZWxkLmluaXRpYWxpemVyXG5cdFx0XHRcdD8gZXZhbEV4cHJlc3Npb24oZmllbGQuaW5pdGlhbGl6ZXIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSlcblx0XHRcdFx0OiBudWxsO1xuXG5cdFx0XHRpbnN0YW5jZS5fX2luc3RhbmNlRmllbGRzW2ZpZWxkLm5hbWVdID0gY2FzdFZhbHVlKHJhd1ZhbHVlLCBmaWVsZC50eXBlKTtcblx0XHR9XG5cdFx0Zm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLnN0YXRpY0ZpZWxkcykge1xuXHRcdFx0cmF3VmFsdWUgPSBmaWVsZC5pbml0aWFsaXplclxuXHRcdFx0XHQ/IGV2YWxFeHByZXNzaW9uKGZpZWxkLmluaXRpYWxpemVyLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpXG5cdFx0XHRcdDogbnVsbDtcblxuXHRcdFx0aW5zdGFuY2UuX19zdGF0aWNGaWVsZHNbZmllbGQubmFtZV0gPSBjYXN0VmFsdWUocmF3VmFsdWUsIGZpZWxkLnR5cGUpO1xuXHRcdH1cblxuXHRcdGluc3RhbmNlLl9fZmllbGRzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2VEZWZpbml0aW9uIHtcblx0bm9kZTogQVNUSW50ZXJmYWNlTm9kZTtcblx0bmFtZTogc3RyaW5nO1xuXHRzdGF0aWNGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW107XG5cdGluc3RhbmNlTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdGludGVyZmFjZU5vZGU6IEFTVEludGVyZmFjZU5vZGUsXG5cdFx0bmFtZTogc3RyaW5nLFxuXHRcdHN0YXRpY0ZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXSxcblx0XHRpbnN0YW5jZU1ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfSxcblx0KSB7XG5cdFx0dGhpcy5ub2RlID0gaW50ZXJmYWNlTm9kZTtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuc3RhdGljRmllbGRzID0gc3RhdGljRmllbGRzO1xuXHRcdHRoaXMuaW5zdGFuY2VNZXRob2RzID0gaW5zdGFuY2VNZXRob2RzO1xuXHR9XG5cblx0c3RhdGljIGZyb21BU1Qobm9kZTogQVNUSW50ZXJmYWNlTm9kZSk6IEludGVyZmFjZURlZmluaXRpb24ge1xuXHRcdGNvbnN0IHN0YXRpY0ZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXSA9IFtdO1xuXHRcdGNvbnN0IGluc3RhbmNlTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9ID0ge307XG5cblx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChjaGlsZCBpbnN0YW5jZW9mIEFTVEZpZWxkTm9kZSkge1xuXHRcdFx0XHRjb25zdCBmaWVsZCA9IG5ldyBDbGFzc0ZpZWxkRGVmaW5pdGlvbihcblx0XHRcdFx0XHRjaGlsZC5uYW1lLFxuXHRcdFx0XHRcdGNoaWxkLmZpZWxkVHlwZVxuXHRcdFx0XHRcdFx0PyBjaGlsZC5maWVsZFR5cGUubmFtZVxuXHRcdFx0XHRcdFx0OiBudWxsLFxuXHRcdFx0XHRcdGNoaWxkLm1vZGlmaWVycyxcblx0XHRcdFx0XHRjaGlsZC5pbml0ID8/IG51bGxcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRzdGF0aWNGaWVsZHMucHVzaChmaWVsZCk7XG5cdFx0XHR9IGVsc2UgaWYgKGNoaWxkIGluc3RhbmNlb2YgQVNUTWV0aG9kTm9kZSkge1xuXHRcdFx0XHRjb25zdCBtZXRob2QgPSBuZXcgQ2xhc3NNZXRob2REZWZpbml0aW9uKFxuXHRcdFx0XHRcdGNoaWxkLm5hbWUsXG5cdFx0XHRcdFx0Y2hpbGQucGFyYW1ldGVycyxcblx0XHRcdFx0XHRjaGlsZC5yZXR1cm5UeXBlLFxuXHRcdFx0XHRcdGNoaWxkLm1vZGlmaWVycyxcblx0XHRcdFx0XHRjaGlsZC5jaGlsZHJlblxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdGluc3RhbmNlTWV0aG9kc1ttZXRob2QubmFtZV0gPSBtZXRob2Q7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5oYW5kbGVkIG5vZGUgJHtjaGlsZC50eXBlfS5gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IEludGVyZmFjZURlZmluaXRpb24oXG5cdFx0XHRub2RlLFxuXHRcdFx0bm9kZS5uYW1lLFxuXHRcdFx0c3RhdGljRmllbGRzLFxuXHRcdFx0aW5zdGFuY2VNZXRob2RzXG5cdFx0KTtcblx0fVxufVxuXG4iLAogICAgImltcG9ydCB7UGFyc2VyfSBmcm9tIFwiLi9wYXJzZXJcIjtcbmltcG9ydCB7R1JBTU1BUiwgVG9rZW4sIFRva2VuVHlwZSwgVFlQRV9FTlVNfSBmcm9tIFwiLi4vZ3JhbW1hclwiO1xuaW1wb3J0IHtNb2RpZmllcnMsIFN1cGVyQ2xhc3N9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge1xuXHRBU1RBbm5vdGF0aW9uTm9kZSxcblx0QVNUQXJyYXlOb2RlLFxuXHRBU1RBc3NpZ25tZW50Tm9kZSxcblx0QVNUQmluYXJ5Tm9kZSxcblx0QVNUQ2FsbE5vZGUsXG5cdEFTVENsYXNzTm9kZSxcblx0QVNURWxzZU5vZGUsXG5cdEFTVEV4cHJlc3Npb25Ob2RlLFxuXHRBU1RGaWVsZE5vZGUsXG5cdEFTVEZvcmVhY2hOb2RlLFxuXHRBU1RJZk5vZGUsXG5cdEFTVEltcG9ydE5vZGUsXG5cdEFTVEluZGV4Tm9kZSxcblx0QVNUSW50ZXJmYWNlTm9kZSxcblx0QVNUTGFtYmRhTm9kZSxcblx0QVNUTWF0Y2hDYXNlTm9kZSxcblx0QVNUTWF0Y2hOb2RlLFxuXHRBU1RNZW1iZXJOb2RlLFxuXHRBU1RNZXRob2ROb2RlLFxuXHRBU1ROZXdOb2RlLFxuXHRBU1ROb2RlLFxuXHRBU1ROb2RlVHlwZSxcblx0QVNUUGFyYW1ldGVyTm9kZSxcblx0QVNUUmV0dXJuTm9kZSxcblx0QVNUVGhlbk5vZGUsXG5cdEFTVFR5cGVOb2RlLFxuXHRBU1RVbmFyeU5vZGUsXG5cdEFTVFZhcmlhYmxlTm9kZSxcblx0QVNUVkRvbU5vZGUsXG5cdEFTVFZEb21UZXh0Tm9kZVxufSBmcm9tIFwiLi4vYXN0XCI7XG5pbXBvcnQge3Rocm93UGFyc2VyRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcbmltcG9ydCB7c3BhbkZyb219IGZyb20gXCIuL3BhcnNlcl9zb3VyY2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1peGVkVHlwZSgpOiBBU1RUeXBlTm9kZSB7XG5cdHJldHVybiBuZXcgQVNUVHlwZU5vZGUoQVNUVHlwZU5vZGUuS0lORF9TSU1QTEUsIFRZUEVfRU5VTS5NSVhFRCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVR5cGUocGFyc2VyOiBQYXJzZXIpOiBBU1RUeXBlTm9kZSB7XG5cdGxldCB0eXBlO1xuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pIHtcblx0XHR0eXBlID0gcGFyc2VMYW1iZGFUeXBlKHBhcnNlcik7XG5cdH0gZWxzZSB7XG5cdFx0dHlwZSA9IHBhcnNlU2ltcGxlT3JHZW5lcmljVHlwZShwYXJzZXIpO1xuXHR9XG5cblx0aWYgKHBhcnNlci5jb25zdW1lSWZPcGVyYXRvcihHUkFNTUFSLlFVRVNUSU9OX01BUkspKSB7XG5cdFx0dHlwZS5udWxsYWJsZSA9IHRydWU7XG5cdH1cblxuXHRyZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVHlwZVBhcmFtZXRlcnMocGFyc2VyOiBQYXJzZXIpOiBzdHJpbmdbXSB7XG5cdGNvbnN0IHBhcmFtZXRlcnMgPSBbXTtcblxuXHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5MRVNTX1RIQU4pO1xuXG5cdGRvIHtcblx0XHRjb25zdCBuYW1lID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKS52YWx1ZTtcblx0XHRwYXJhbWV0ZXJzLnB1c2gobmFtZSk7XG5cblx0XHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5DT01NQSkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHBhcnNlci5uZXh0KCk7XG5cdH0gd2hpbGUgKHRydWUpO1xuXG5cdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkdSRUFURVJfVEhBTik7XG5cblx0cmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVNpbXBsZU9yR2VuZXJpY1R5cGUocGFyc2VyOiBQYXJzZXIpOiBBU1RUeXBlTm9kZSB7XG5cdGNvbnN0IG5hbWVUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUVHlwZU5vZGUoQVNUVHlwZU5vZGUuS0lORF9TSU1QTEUsIG5hbWVUb2tlbi52YWx1ZSk7XG5cblx0aWYgKHBhcnNlci5jb25zdW1lSWZPcGVyYXRvcihHUkFNTUFSLkxFU1NfVEhBTikpIHtcblxuXHRcdG5vZGUua2luZCA9IEFTVFR5cGVOb2RlLktJTkRfR0VORVJJQztcblxuXHRcdGRvIHtcblx0XHRcdG5vZGUudHlwZUFyZ3VtZW50cy5wdXNoKHBhcnNlVHlwZShwYXJzZXIpKTtcblx0XHR9IHdoaWxlIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpO1xuXG5cdFx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuR1JFQVRFUl9USEFOKTtcblx0fVxuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VMYW1iZGFUeXBlKHBhcnNlcjogUGFyc2VyKTogQVNUVHlwZU5vZGUge1xuXHRjb25zdCBub2RlID0gbmV3IEFTVFR5cGVOb2RlKEFTVFR5cGVOb2RlLktJTkRfTEFNQkRBLCAnbGFtYmRhJyk7XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTik7XG5cblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpIHtcblx0XHRkbyB7XG5cdFx0XHRub2RlLnBhcmFtZXRlclR5cGVzLnB1c2gocGFyc2VUeXBlKHBhcnNlcikpO1xuXHRcdH0gd2hpbGUgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSk7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkFSUk9XKTtcblxuXHRub2RlLnJldHVyblR5cGUgPSBwYXJzZVR5cGUocGFyc2VyKTtcblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUHJvZ3JhbShwYXJzZXI6IFBhcnNlcik6IEFTVE5vZGUge1xuXHRjb25zdCBjaGlsZHJlbjogQVNUTm9kZVtdID0gW107XG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnR5cGUgIT09IFRva2VuVHlwZS5FT0YpIHtcblx0XHRpZiAocGFyc2VyLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuQ09NTUVOVCkge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3Qgbm9kZTogQVNUTm9kZSB8IG51bGwgPSBwYXJzZVN0YXRlbWVudChwYXJzZXIpO1xuXHRcdFx0aWYgKG5vZGUpIHtcblx0XHRcdFx0Y2hpbGRyZW4ucHVzaChub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLlBST0dSQU1NLCBjaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVN0YXRlbWVudChwYXJzZXI6IFBhcnNlcik6IEFTVE5vZGUgfCBudWxsIHtcblx0aWYgKHBhcnNlci5jb25zdW1lSWZDb21tZW50KCkpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHN3aXRjaCAocGFyc2VyLnBlZWsoKS52YWx1ZSkge1xuXHRcdGNhc2UgR1JBTU1BUi5JTVBPUlQ6IHtcblx0XHRcdHJldHVybiBwYXJzZUltcG9ydChwYXJzZXIpO1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuT1BFTjpcblx0XHRjYXNlIEdSQU1NQVIuQ0xBU1M6IHtcblx0XHRcdHJldHVybiBwYXJzZUNsYXNzRGVjbGFyYXRpb24ocGFyc2VyKTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLklOVEVSRkFDRToge1xuXHRcdFx0cmV0dXJuIHBhcnNlSW50ZXJmYWNlRGVjbGFyYXRpb24ocGFyc2VyKTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLlJFVFVSTjoge1xuXHRcdFx0cmV0dXJuIHBhcnNlUmV0dXJuU3RhdGVtZW50KHBhcnNlcik7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5MRVQ6IHtcblx0XHRcdHJldHVybiBwYXJzZVZhcmlhYmxlRGVjbGFyYXRpb24ocGFyc2VyKTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLklGOiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VJZkRlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5NQVRDSDoge1xuXHRcdFx0cmV0dXJuIHBhcnNlTWF0Y2hEZWNsYXJhdGlvbihwYXJzZXIpO1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuRk9SRUFDSDoge1xuXHRcdFx0cmV0dXJuIHBhcnNlRm9yZWFjaERlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0fVxuXHRcdGRlZmF1bHQ6IHtcblx0XHRcdHJldHVybiBwYXJzZUV4cHJlc3Npb25TdGF0ZW1lbnQocGFyc2VyKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmV0dXJuU3RhdGVtZW50KHBhcnNlcjogUGFyc2VyKTogQVNUUmV0dXJuTm9kZSB7XG5cdHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuUkVUVVJOKTtcblxuXHRsZXQgYXJndW1lbnQgPSBudWxsO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5TRU1JQ09MT04pIHtcblx0XHRhcmd1bWVudCA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuU0VNSUNPTE9OKTtcblxuXHRyZXR1cm4gbmV3IEFTVFJldHVybk5vZGUoYXJndW1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJbXBvcnQocGFyc2VyOiBQYXJzZXIpOiBBU1RJbXBvcnROb2RlIHtcblx0cGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5JTVBPUlQpO1xuXG5cdGxldCBuYW1lcyA9IFtdO1xuXHRsZXQgZnJvbSA9IG51bGw7XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkJSQUNFX09QRU4pIHtcblx0XHRuYW1lcyA9IHBhcnNlSW1wb3J0TGlzdChwYXJzZXIpO1xuXHRcdHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuRlJPTSk7XG5cdFx0ZnJvbSA9IHBhcnNlci5leHBlY3RTdHJpbmcoKS52YWx1ZTtcblx0fSBlbHNlIHtcblx0XHRuYW1lcy5wdXNoKHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCkudmFsdWUpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuU0VNSUNPTE9OKTtcblxuXHRyZXR1cm4gbmV3IEFTVEltcG9ydE5vZGUobmFtZXMsIGZyb20pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJbXBvcnRMaXN0KHBhcnNlcjogUGFyc2VyKTogc3RyaW5nW10ge1xuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9PUEVOKTtcblxuXHRjb25zdCBuYW1lczogc3RyaW5nW10gPSBbXTtcblxuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdGNvbnN0IG5hbWVUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cblx0XHRuYW1lcy5wdXNoKG5hbWVUb2tlbi52YWx1ZSk7XG5cblx0XHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRicmVhaztcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX0NMT1NFKTtcblxuXHRyZXR1cm4gbmFtZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNsYXNzRGVjbGFyYXRpb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RDbGFzc05vZGUge1xuXHRjb25zdCBhbm5vdGF0aW9ucyA9IHBhcnNlQW5ub3RhdGlvbnMocGFyc2VyKTtcblx0Y29uc3QgbW9kaWZpZXJzID0gcGFyc2VNb2RpZmllcnMocGFyc2VyLCBbR1JBTU1BUi5PUEVOXSk7XG5cblx0Y29uc3QgY2xhc3NUb2tlbiA9IHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuQ0xBU1MpO1xuXHRjb25zdCBuYW1lVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXG5cdGxldCB0eXBlUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuTEVTU19USEFOKSB7XG5cdFx0dHlwZVBhcmFtZXRlcnMgPSBwYXJzZVR5cGVQYXJhbWV0ZXJzKHBhcnNlcik7XG5cdH1cblxuXHRsZXQgc3VwZXJDbGFzcyA9IG51bGw7XG5cdGlmIChwYXJzZXIuY29uc3VtZUlmS2V5d29yZChHUkFNTUFSLkVYVEVORFMpKSB7XG5cdFx0c3VwZXJDbGFzcyA9IG5ldyBTdXBlckNsYXNzKFxuXHRcdFx0QVNUTm9kZVR5cGUuSURFTlRJRklFUixcblx0XHRcdHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCkudmFsdWVcblx0XHQpO1xuXHR9XG5cblx0bGV0IGltcGxlbWVudHNJbnRlcmZhY2VzID0gW107XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLklNUExFTUVOVFMpIHtcblx0XHRwYXJzZXIubmV4dCgpO1xuXG5cdFx0ZG8ge1xuXHRcdFx0Y29uc3QgaW50ZXJmYWNlVHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHRcdFx0aW1wbGVtZW50c0ludGVyZmFjZXMucHVzaChpbnRlcmZhY2VUeXBlKTtcblx0XHR9IHdoaWxlIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfT1BFTik7XG5cblx0Y29uc3QgY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdO1xuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5CUkFDRV9DTE9TRSkge1xuXHRcdGlmIChwYXJzZXIucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5DT01NRU5UKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbWVtYmVyOiBBU1ROb2RlIHwgbnVsbCA9IHBhcnNlQ2xhc3NNZW1iZXIocGFyc2VyKTtcblx0XHRpZiAobWVtYmVyID09PSBudWxsKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y2hpbGRyZW4ucHVzaChtZW1iZXIpO1xuXHR9XG5cblx0Y29uc3QgYnJhY2VDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfQ0xPU0UpO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUQ2xhc3NOb2RlKFxuXHRcdG5hbWVUb2tlbi52YWx1ZSxcblx0XHRhbm5vdGF0aW9ucyxcblx0XHRtb2RpZmllcnMsXG5cdFx0dHlwZVBhcmFtZXRlcnMsXG5cdFx0aW1wbGVtZW50c0ludGVyZmFjZXMsXG5cdFx0c3VwZXJDbGFzcyxcblx0XHRjaGlsZHJlblxuXHQpO1xuXG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKGNsYXNzVG9rZW4sIGJyYWNlQ2xvc2VUb2tlbik7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJbnRlcmZhY2VEZWNsYXJhdGlvbihwYXJzZXI6IFBhcnNlcik6IEFTVEludGVyZmFjZU5vZGUge1xuXHRjb25zdCBhbm5vdGF0aW9ucyA9IHBhcnNlQW5ub3RhdGlvbnMocGFyc2VyKTtcblx0Y29uc3QgbW9kaWZpZXJzID0gcGFyc2VNb2RpZmllcnMocGFyc2VyLCBbXSk7IC8vIGludGVyZmFjZXMgc2luZCBpbXBsaXppdCBwdWJsaWNcblxuXHRjb25zdCBpbnRlcmZhY2VUb2tlbiA9IHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuSU5URVJGQUNFKTtcblx0Y29uc3QgbmFtZVRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblxuXHRsZXQgdHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdID0gW107XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkxFU1NfVEhBTikge1xuXHRcdHR5cGVQYXJhbWV0ZXJzID0gcGFyc2VUeXBlUGFyYW1ldGVycyhwYXJzZXIpO1xuXHR9XG5cblx0bGV0IGV4dGVuZHNJbnRlcmZhY2VzID0gW107XG5cdGlmIChwYXJzZXIuY29uc3VtZUlmS2V5d29yZChHUkFNTUFSLkVYVEVORFMpKSB7XG5cdFx0ZG8ge1xuXHRcdFx0ZXh0ZW5kc0ludGVyZmFjZXMucHVzaChwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpLnZhbHVlKTtcblx0XHR9IHdoaWxlIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfT1BFTik7XG5cblx0Y29uc3QgY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdO1xuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5CUkFDRV9DTE9TRSkge1xuXHRcdGlmIChwYXJzZXIuY29uc3VtZUlmQ29tbWVudCgpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBtZW1iZXIgPSBwYXJzZUNsYXNzTWVtYmVyKHBhcnNlcik7XG5cdFx0aWYgKG1lbWJlciA9PT0gbnVsbCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKG1lbWJlciBpbnN0YW5jZW9mIEFTVEZpZWxkTm9kZSAmJiAhbWVtYmVyLm1vZGlmaWVycy5zdGF0aWMpIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoJ0ludGVyZmFjZSBmaWVsZHMgbXVzdCBiZSBzdGF0aWMuJyk7XG5cdFx0fVxuXG5cdFx0aWYgKG1lbWJlciBpbnN0YW5jZW9mIEFTVE1ldGhvZE5vZGUgJiYgbWVtYmVyLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoJ0ludGVyZmFjZSBtZXRob2RzIG11c3Qgbm90IGhhdmUgYSBib2R5LicpO1xuXHRcdH1cblxuXHRcdGNoaWxkcmVuLnB1c2gobWVtYmVyKTtcblx0fVxuXG5cdGNvbnN0IGJyYWNlQ2xvc2VUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX0NMT1NFKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVEludGVyZmFjZU5vZGUoXG5cdFx0bmFtZVRva2VuLnZhbHVlLFxuXHRcdGFubm90YXRpb25zLFxuXHRcdG1vZGlmaWVycyxcblx0XHR0eXBlUGFyYW1ldGVycyxcblx0XHRleHRlbmRzSW50ZXJmYWNlcyxcblx0XHRjaGlsZHJlblxuXHQpO1xuXG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKGludGVyZmFjZVRva2VuLCBicmFjZUNsb3NlVG9rZW4pO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQW5ub3RhdGlvbnMocGFyc2VyOiBQYXJzZXIpOiBBU1RBbm5vdGF0aW9uTm9kZVtdIHtcblx0Y29uc3QgYW5ub3RhdGlvbnMgPSBbXTtcblxuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuQU5OT1RBVElPTikge1xuXHRcdGFubm90YXRpb25zLnB1c2gocGFyc2VBbm5vdGF0aW9uKHBhcnNlcikpO1xuXHR9XG5cblx0cmV0dXJuIGFubm90YXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBbm5vdGF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUQW5ub3RhdGlvbk5vZGUge1xuXHRjb25zdCB0b2tlbiA9IHBhcnNlci5leHBlY3RBbm5vdGF0aW9uKCk7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUQW5ub3RhdGlvbk5vZGUodG9rZW4udmFsdWUpO1xuXG5cdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKSkge1xuXHRcdHdoaWxlIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKSB7XG5cdFx0XHRjb25zdCBrZXkgPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpLnZhbHVlO1xuXHRcdFx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuQVNTSUdOKTtcblxuXHRcdFx0Y29uc3QgdmFsdWUgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0XHRcdG5vZGUucHJvcGVydGllcy5zZXQoa2V5LCB2YWx1ZSk7XG5cblx0XHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkNPTU1BKSB7XG5cdFx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXHR9XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU1vZGlmaWVycyhwYXJzZXI6IFBhcnNlciwgYWxsb3dlZDogc3RyaW5nW10pOiBNb2RpZmllcnMge1xuXHRjb25zdCBtb2RpZmllcnM6IHsgW2luZGV4OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcblxuXHRhbGxvd2VkLmZvckVhY2gobW9kaWZpZXIgPT4gbW9kaWZpZXJzW21vZGlmaWVyXSA9IGZhbHNlKTtcblxuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuS0VZV09SRCAmJiBhbGxvd2VkLmluY2x1ZGVzKHBhcnNlci5wZWVrKCkudmFsdWUpKSB7XG5cdFx0Y29uc3QgbW9kaWZpZXIgPSBwYXJzZXIubmV4dCgpLnZhbHVlO1xuXG5cdFx0aWYgKG1vZGlmaWVyc1ttb2RpZmllcl0pIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoYER1cGxpY2F0ZSBtb2RpZmllcjogJHttb2RpZmllcn1gKTtcblx0XHR9XG5cblx0XHRtb2RpZmllcnNbbW9kaWZpZXJdID0gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBuZXcgTW9kaWZpZXJzKG1vZGlmaWVycyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBhcmFtZXRlcnMocGFyc2VyOiBQYXJzZXIpOiBBU1RQYXJhbWV0ZXJOb2RlW10ge1xuXHRjb25zdCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10gPSBbXTtcblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSkge1xuXHRcdHJldHVybiBwYXJhbWV0ZXJzO1xuXHR9XG5cblx0ZG8ge1xuXHRcdGNvbnN0IG5hbWVUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cdFx0bGV0IHR5cGUgPSBudWxsO1xuXHRcdGxldCBkZWZhdWx0VmFsdWUgPSBudWxsO1xuXG5cdFx0bGV0IHR5cGVUb2tlbiA9IG51bGw7XG5cdFx0bGV0IGRlZmF1bHRWYWx1ZVRva2VuID0gbnVsbDtcblxuXHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkNPTE9OKSB7XG5cdFx0XHR0eXBlVG9rZW4gPSBwYXJzZXIubmV4dCgpO1xuXHRcdFx0dHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHRcdH1cblxuXHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkFTU0lHTikge1xuXHRcdFx0ZGVmYXVsdFZhbHVlVG9rZW4gPSBwYXJzZXIubmV4dCgpO1xuXHRcdFx0ZGVmYXVsdFZhbHVlID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RQYXJhbWV0ZXJOb2RlKG5hbWVUb2tlbi52YWx1ZSwgdHlwZSwgZGVmYXVsdFZhbHVlKTtcblx0XHRub2RlLnNwYW4gPSBzcGFuRnJvbSh0eXBlVG9rZW4gfHwgbmFtZVRva2VuLCBkZWZhdWx0VmFsdWVUb2tlbiB8fCBuYW1lVG9rZW4pO1xuXG5cdFx0cGFyYW1ldGVycy5wdXNoKG5vZGUpO1xuXHR9IHdoaWxlIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpO1xuXG5cdHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDbGFzc01lbWJlcihwYXJzZXI6IFBhcnNlcik6IEFTVE5vZGUgfCBudWxsIHtcblx0Y29uc3Qgc3RhcnRUb2tlbiA9IHBhcnNlci5wZWVrKCk7XG5cblx0Y29uc3QgYW5ub3RhdGlvbnMgPSBwYXJzZUFubm90YXRpb25zKHBhcnNlcik7XG5cdGNvbnN0IG1vZGlmaWVycyA9IHBhcnNlTW9kaWZpZXJzKFxuXHRcdHBhcnNlcixcblx0XHRbXG5cdFx0XHRHUkFNTUFSLlBVQkxJQyxcblx0XHRcdEdSQU1NQVIuUFJJVkFURSxcblx0XHRcdEdSQU1NQVIuU1RBVElDLFxuXHRcdFx0R1JBTU1BUi5SRUFET05MWVxuXHRcdF1cblx0KTtcblxuXHRjb25zdCBuYW1lVG9rZW4gPSBwYXJzZXIuZXhwZWN0T25lT2YoW1Rva2VuVHlwZS5JREVOVElGSUVSLCBUb2tlblR5cGUuS0VZV09SRF0pO1xuXG5cdGxldCBmaWVsZFR5cGUgPSBudWxsO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5DT0xPTikge1xuXHRcdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT0xPTikpIHtcblx0XHRcdGZpZWxkVHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHRcdH1cblx0fVxuXG5cdGxldCBpbml0ID0gbnVsbDtcblx0aWYgKHBhcnNlci5jb25zdW1lSWZPcGVyYXRvcihHUkFNTUFSLkFTU0lHTikpIHtcblx0XHRpbml0ID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdH1cblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5TRU1JQ09MT04pIHtcblx0XHRpZiAoIW1vZGlmaWVycy5wdWJsaWMgJiYgIW1vZGlmaWVycy5wcml2YXRlKSB7XG5cdFx0XHRtb2RpZmllcnMucHJpdmF0ZSA9IHRydWU7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc2VtaWNvbG9uVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5TRU1JQ09MT04pO1xuXG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RGaWVsZE5vZGUobmFtZVRva2VuLnZhbHVlLCBtb2RpZmllcnMsIGZpZWxkVHlwZSwgaW5pdCk7XG5cdFx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgc2VtaWNvbG9uVG9rZW4pO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0bGV0IHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5MRVNTX1RIQU4pIHtcblx0XHR0eXBlUGFyYW1ldGVycyA9IHBhcnNlVHlwZVBhcmFtZXRlcnMocGFyc2VyKTtcblx0fVxuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pIHtcblx0XHRpZiAoIW1vZGlmaWVycy5wdWJsaWMgJiYgIW1vZGlmaWVycy5wcml2YXRlKSB7XG5cdFx0XHRtb2RpZmllcnMucHVibGljID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKTtcblx0XHRjb25zdCBwYXJhbWV0ZXJzID0gcGFyc2VQYXJhbWV0ZXJzKHBhcnNlcik7XG5cdFx0Y29uc3QgcGFyZW50aGVzZXNDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXG5cdFx0bGV0IHJldHVyblR5cGUgPSBudWxsO1xuXHRcdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT0xPTikpIHtcblx0XHRcdHJldHVyblR5cGUgPSBwYXJzZVR5cGUocGFyc2VyKTtcblx0XHR9XG5cblx0XHRjb25zdCBjaGlsZHJlbjogQVNUTm9kZVtdID0gcGFyc2VCbG9jayhwYXJzZXIpO1xuXG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RNZXRob2ROb2RlKFxuXHRcdFx0bmFtZVRva2VuLnZhbHVlLFxuXHRcdFx0bmFtZVRva2VuLnZhbHVlID09PSBHUkFNTUFSLkNPTlNUUlVDVE9SID8gQVNUTm9kZVR5cGUuQ09OU1RSVUNUT1IgOiBBU1ROb2RlVHlwZS5NRVRIT0QsXG5cdFx0XHRhbm5vdGF0aW9ucyxcblx0XHRcdG1vZGlmaWVycyxcblx0XHRcdHR5cGVQYXJhbWV0ZXJzLFxuXHRcdFx0cGFyYW1ldGVycyxcblx0XHRcdHJldHVyblR5cGUsXG5cdFx0XHRjaGlsZHJlblxuXHRcdCk7XG5cblx0XHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBwYXJlbnRoZXNlc0Nsb3NlVG9rZW4pO1xuXG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHR0aHJvd1BhcnNlckVycm9yKGBJbnZhbGlkIGNsYXNzIG1lbWJlcjogJHtuYW1lVG9rZW4udmFsdWV9YCk7XG5cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUJsb2NrKHBhcnNlcjogUGFyc2VyKTogQVNUTm9kZVtdIHtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuU0VNSUNPTE9OKSB7XG5cdFx0cGFyc2VyLm5leHQoKTtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9PUEVOKTtcblxuXHRjb25zdCBjaGlsZHJlbiA9IFtdO1xuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5CUkFDRV9DTE9TRSkge1xuXHRcdGlmIChwYXJzZXIucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5DT01NRU5UKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGNvbnN0IGNoaWxkOiBBU1ROb2RlIHwgbnVsbCA9IHBhcnNlU3RhdGVtZW50KHBhcnNlcik7XG5cdFx0aWYgKGNoaWxkKSB7XG5cdFx0XHRjaGlsZHJlbi5wdXNoKGNoaWxkKTtcblx0XHR9XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9DTE9TRSk7XG5cblx0cmV0dXJuIGNoaWxkcmVuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VWYXJpYWJsZURlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUVmFyaWFibGVOb2RlIHtcblx0Y29uc3QgbGV0VG9rZW4gPSBwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLkxFVCk7XG5cdGNvbnN0IG5hbWVUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cblx0bGV0IHR5cGVBbm5vdGF0aW9uID0gbnVsbDtcblx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTE9OKSkge1xuXHRcdHR5cGVBbm5vdGF0aW9uID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cdH1cblxuXHRsZXQgaW5pdCA9IG51bGw7XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkFTU0lHTikge1xuXHRcdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkFTU0lHTik7XG5cdFx0aW5pdCA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHR9XG5cblx0Y29uc3Qgc2VtaWNvbG9uVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5TRU1JQ09MT04pO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUVmFyaWFibGVOb2RlKG5hbWVUb2tlbi52YWx1ZSwgdHlwZUFubm90YXRpb24sIGluaXQpO1xuXHRub2RlLnNwYW4gPSBzcGFuRnJvbShsZXRUb2tlbiwgc2VtaWNvbG9uVG9rZW4pO1xuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJZkRlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUSWZOb2RlIHtcblx0Y29uc3Qgc3RhcnRUb2tlbiA9IHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuSUYpO1xuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pO1xuXHRjb25zdCBjb25kaXRpb24gPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0Y29uc3QgcGFyZW50aGVzZXNDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUSWZOb2RlKGNvbmRpdGlvbiwgbmV3IEFTVFRoZW5Ob2RlKHBhcnNlQmxvY2socGFyc2VyKSkpO1xuXG5cdGlmIChwYXJzZXIuY29uc3VtZUlmS2V5d29yZChHUkFNTUFSLkVMU0UpKSB7XG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuSUYpIHtcblx0XHRcdG5vZGUuZWxzZSA9IHBhcnNlSWZEZWNsYXJhdGlvbihwYXJzZXIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRub2RlLmVsc2UgPSBuZXcgQVNURWxzZU5vZGUocGFyc2VCbG9jayhwYXJzZXIpKTtcblx0XHR9XG5cdH1cblxuXHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBwYXJlbnRoZXNlc0Nsb3NlVG9rZW4pO1xuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VNYXRjaERlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUTWF0Y2hOb2RlIHtcblx0Y29uc3Qgc3RhcnRUb2tlbiA9IHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuTUFUQ0gpO1xuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKTtcblxuXHRjb25zdCBleHByZXNzaW9uID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9PUEVOKTtcblxuXHRjb25zdCBtYXRjaENhc2VzOiBBU1RNYXRjaENhc2VOb2RlW10gPSBbXTtcblx0bGV0IGRlZmF1bHRDYXNlOiBBU1RNYXRjaENhc2VOb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQlJBQ0VfQ0xPU0UpIHtcblx0XHRjb25zdCBtYXRjaENhc2U6IEFTVE1hdGNoQ2FzZU5vZGUgPSBwYXJzZU1hdGNoQ2FzZURlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0aWYgKG1hdGNoQ2FzZS50ZXN0ID09PSBudWxsKSB7XG5cdFx0XHRkZWZhdWx0Q2FzZSA9IG1hdGNoQ2FzZTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRtYXRjaENhc2VzLnB1c2gobWF0Y2hDYXNlKTtcblx0fVxuXG5cdGNvbnN0IGJyYWNlQ2xvc2VUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX0NMT1NFKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVE1hdGNoTm9kZShleHByZXNzaW9uLCBtYXRjaENhc2VzLCBkZWZhdWx0Q2FzZSk7XG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIGJyYWNlQ2xvc2VUb2tlbik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU1hdGNoQ2FzZURlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUTWF0Y2hDYXNlTm9kZSB7XG5cdGNvbnN0IGNhc2VOb2RlID0gbmV3IEFTVE1hdGNoQ2FzZU5vZGUoKTtcblxuXHRpZiAocGFyc2VyLmNvbnN1bWVJZktleXdvcmQoR1JBTU1BUi5ERUZBVUxUKSkge1xuXHRcdGNhc2VOb2RlLnRlc3QgPSBudWxsO1xuXHR9IGVsc2Uge1xuXHRcdGNhc2VOb2RlLnRlc3QgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkNPTE9OKTtcblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5CUkFDRV9PUEVOKSB7XG5cdFx0Y2FzZU5vZGUuY2hpbGRyZW4gPSBwYXJzZUJsb2NrKHBhcnNlcik7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3QgY2hpbGQ6IEFTVE5vZGUgfCBudWxsID0gcGFyc2VTdGF0ZW1lbnQocGFyc2VyKTtcblx0XHRpZiAoY2hpbGQpIHtcblx0XHRcdGNhc2VOb2RlLmNoaWxkcmVuLnB1c2goY2hpbGQpXG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGNhc2VOb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VGb3JlYWNoRGVjbGFyYXRpb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RGb3JlYWNoTm9kZSB7XG5cdGNvbnN0IHN0YXJ0VG9rZW4gPSBwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLkZPUkVBQ0gpO1xuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pO1xuXG5cdGNvbnN0IGl0ZXJhdG9yVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXHRjb25zdCBpdGVyYXRvciA9IGl0ZXJhdG9yVG9rZW4udmFsdWU7XG5cblx0cGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5JTik7XG5cblx0Y29uc3QgaXRlcmFibGUgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblxuXHRjb25zdCBwYXJlbnRoZXNlc0Nsb3NlVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RGb3JlYWNoTm9kZShpdGVyYXRvciwgaXRlcmFibGUsIHBhcnNlQmxvY2socGFyc2VyKSk7XG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIHBhcmVudGhlc2VzQ2xvc2VUb2tlbik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUFycmF5KHBhcnNlcjogUGFyc2VyKTogQVNUQXJyYXlOb2RlIHtcblx0Y29uc3Qgc3RhcnRUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX09QRU4pO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUQXJyYXlOb2RlKCk7XG5cblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfQ0xPU0UpIHtcblx0XHRkbyB7XG5cdFx0XHRub2RlLmVsZW1lbnRzLnB1c2gocGFyc2VFeHByZXNzaW9uKHBhcnNlcikpO1xuXHRcdH0gd2hpbGUgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSk7XG5cdH1cblxuXHRjb25zdCBicmFja2V0U3F1YXJlQ2xvc2VUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX0NMT1NFKTtcblxuXHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBicmFja2V0U3F1YXJlQ2xvc2VUb2tlbik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUxhbWJkYShwYXJzZXI6IFBhcnNlcik6IEFTVExhbWJkYU5vZGUge1xuXHRjb25zdCBzdGFydFRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfT1BFTik7XG5cblx0Y29uc3QgcGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdID0gW107XG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLkFSUk9XKSB7XG5cdFx0Y29uc3QgbmFtZSA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCkudmFsdWU7XG5cdFx0bGV0IHR5cGUgPSBudWxsO1xuXHRcdGxldCBkZWZhdWx0VmFsdWUgPSBudWxsO1xuXG5cdFx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTE9OKSkge1xuXHRcdFx0dHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHRcdH1cblxuXHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkFTU0lHTikge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHRcdGRlZmF1bHRWYWx1ZSA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHRcdH1cblxuXHRcdHBhcmFtZXRlcnMucHVzaChuZXcgQVNUUGFyYW1ldGVyTm9kZShuYW1lLCB0eXBlLCBkZWZhdWx0VmFsdWUpKTtcblxuXHRcdHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkFSUk9XKTtcblxuXHRsZXQgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgPSBjcmVhdGVNaXhlZFR5cGUoKTtcblx0aWYgKHBhcnNlci5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLklERU5USUZJRVIpIHtcblx0XHRyZXR1cm5UeXBlID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQ09MT04pIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVyblR5cGUgPSBjcmVhdGVNaXhlZFR5cGUoKTtcblx0XHRcdHBhcnNlci5yZXdpbmQoKTtcblx0XHR9XG5cdH1cblxuXHRsZXQgY2hpbGRyZW4gPSBbXTtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQlJBQ0VfT1BFTikge1xuXHRcdGNoaWxkcmVuID0gcGFyc2VCbG9jayhwYXJzZXIpO1xuXHR9IGVsc2Uge1xuXHRcdGNoaWxkcmVuLnB1c2gocGFyc2VFeHByZXNzaW9uKHBhcnNlcikpO1xuXHR9XG5cblx0Y29uc3QgYnJhY2VDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfQ0xPU0UpO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUTGFtYmRhTm9kZShwYXJhbWV0ZXJzLCByZXR1cm5UeXBlLCBjaGlsZHJlbik7XG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIGJyYWNlQ2xvc2VUb2tlbik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb29rc0xpa2VMYW1iZGEocGFyc2VyOiBQYXJzZXIpOiBib29sZWFuIHtcblx0Y29uc3Qgc3RhcnQ6IG51bWJlciA9IHBhcnNlci5wb3NpdGlvbigpO1xuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLkJSQUNFX09QRU4pIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRwYXJzZXIubmV4dCgpO1xuXG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0cGFyc2VyLm5leHQoKTtcblx0XHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09MT04pKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdH1cblx0XHRpZiAoIXBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgaXNMYW1iZGE6IGJvb2xlYW4gPSBwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkFSUk9XO1xuXHRwYXJzZXIuc2Vla0F0KHN0YXJ0KVxuXHRyZXR1cm4gaXNMYW1iZGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUV4cHJlc3Npb25TdGF0ZW1lbnQocGFyc2VyOiBQYXJzZXIpOiBBU1RFeHByZXNzaW9uTm9kZSB7XG5cdGNvbnN0IGV4cHIgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5TRU1JQ09MT04pO1xuXG5cdHJldHVybiBuZXcgQVNURXhwcmVzc2lvbk5vZGUoZXhwcik7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRXhwcmVzc2lvbihwYXJzZXI6IFBhcnNlciwgcHJlY2VkZW5jZTogbnVtYmVyID0gMCk6IEFTVE5vZGUge1xuXHRsZXQgZXhwcjogQVNUTm9kZSA9IHBhcnNlUG9zdGZpeChwYXJzZXIsIHBhcnNlVW5hcnkocGFyc2VyKSk7XG5cblx0d2hpbGUgKHRydWUpIHtcblx0XHRjb25zdCB0b2tlbiA9IHBhcnNlci5wZWVrKCk7XG5cdFx0aWYgKCF0b2tlbikge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0bGV0IHRva2VuUHJlY2VkZW5jZSA9IGxvb2t1cFByZWNlZGVuY2UodG9rZW4pO1xuXHRcdGlmICh0b2tlblByZWNlZGVuY2UgPCBwcmVjZWRlbmNlKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuQVNTSUdOKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdFx0ZXhwciA9IG5ldyBBU1RBc3NpZ25tZW50Tm9kZShleHByLCBwYXJzZUV4cHJlc3Npb24ocGFyc2VyLCB0b2tlblByZWNlZGVuY2UpKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChHUkFNTUFSLk1BVEhfT1BFUkFUT1JTLmluY2x1ZGVzKHRva2VuLnZhbHVlKVxuXHRcdFx0fHwgR1JBTU1BUi5MT0dJQ19PUEVSQVRPUlMuaW5jbHVkZXModG9rZW4udmFsdWUpKSB7XG5cdFx0XHRjb25zdCBzdGFydFRva2VuID0gcGFyc2VyLm5leHQoKTtcblx0XHRcdGNvbnN0IHJpZ2h0ID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlciwgdG9rZW5QcmVjZWRlbmNlICsgMSk7XG5cdFx0XHRjb25zdCBlbmRUb2tlbiA9IHBhcnNlci5wZWVrKCk7XG5cblx0XHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUQmluYXJ5Tm9kZShleHByLCByaWdodCwgdG9rZW4udmFsdWUpO1xuXHRcdFx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgZW5kVG9rZW4pO1xuXHRcdFx0ZXhwciA9IG5vZGU7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRicmVhaztcblx0fVxuXG5cdHJldHVybiBleHByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VWRG9tRXhwcmVzc2lvbihwYXJzZXI6IFBhcnNlcik6IEFTVFZEb21Ob2RlIHtcblx0cGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5WRE9NKTtcblx0cmV0dXJuIHBhcnNlVkRvbUVsZW1lbnQocGFyc2VyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVkRvbUVsZW1lbnQocGFyc2VyOiBQYXJzZXIpOiBBU1RWRG9tTm9kZSB7XG5cdHBhcnNlci5jb25zdW1lSWZUZXh0KCk7XG5cblx0Y29uc3Qgc3RhcnRUb2tlbjogVG9rZW4gPSBwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5MRVNTX1RIQU4pO1xuXHRjb25zdCB0YWdUb2tlbjogVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXHRjb25zdCB0YWc6IHN0cmluZyA9IHRhZ1Rva2VuLnZhbHVlO1xuXG5cdHBhcnNlci5jb25zdW1lSWZUZXh0KCk7XG5cblx0Y29uc3QgcHJvcHMgPSBuZXcgTWFwPHN0cmluZywgQVNUTm9kZT4oKTtcblx0d2hpbGUgKHRydWUpIHtcblxuXHRcdGlmIChwYXJzZXIucGVla0lzKEdSQU1NQVIuR1JFQVRFUl9USEFOKSkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0aWYgKHBhcnNlci5wZWVrSXMoR1JBTU1BUi5YTUxfQ0xPU0VfVEFHKSkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbmFtZVRva2VuOiBUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cdFx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuQVNTSUdOKTtcblxuXHRcdGxldCB2YWx1ZTogQVNUTm9kZTtcblxuXHRcdGlmIChwYXJzZXIucGVla0lzKEdSQU1NQVIuQlJBQ0VfT1BFTikpIHtcblx0XHRcdGlmIChsb29rc0xpa2VMYW1iZGEocGFyc2VyKSkge1xuXHRcdFx0XHR2YWx1ZSA9IHBhcnNlTGFtYmRhKHBhcnNlcik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdFx0XHR2YWx1ZSA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHRcdFx0XHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9DTE9TRSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhbHVlID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdFx0fVxuXG5cdFx0cHJvcHMuc2V0KG5hbWVUb2tlbi52YWx1ZSwgdmFsdWUpO1xuXG5cdFx0cGFyc2VyLmNvbnN1bWVJZlRleHQoKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkdSRUFURVJfVEhBTik7XG5cblx0Y29uc3QgY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdO1xuXHR3aGlsZSAoIXBhcnNlci5wZWVrSXMoR1JBTU1BUi5YTUxfT1BFTl9DTE9TRV9UQUcpKSB7XG5cblx0XHRpZiAocGFyc2VyLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuT1BFUkFUT1IpIHtcblx0XHRcdGNoaWxkcmVuLnB1c2gocGFyc2VWRG9tRWxlbWVudChwYXJzZXIpKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNoaWxkcmVuLnB1c2gocGFyc2VWRG9tVGV4dChwYXJzZXIpKTtcblxuXHR9XG5cblx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuWE1MX09QRU5fQ0xPU0VfVEFHKTtcblx0cGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuR1JFQVRFUl9USEFOKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVFZEb21Ob2RlKHRhZywgcHJvcHMsIGNoaWxkcmVuKTtcblx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgcGFyc2VyLnBlZWsoKSk7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VWRG9tVGV4dChwYXJzZXI6IFBhcnNlcik6IEFTVFZEb21UZXh0Tm9kZSB7XG5cdGNvbnN0IHRva2VuOiBUb2tlbiA9IHBhcnNlci5leHBlY3RPbmVPZihcblx0XHRbXG5cdFx0XHRUb2tlblR5cGUuSURFTlRJRklFUixcblx0XHRcdFRva2VuVHlwZS5PUEVSQVRPUixcblx0XHRcdFRva2VuVHlwZS5LRVlXT1JELFxuXHRcdFx0VG9rZW5UeXBlLlBVTkNUVUFUSU9OLFxuXHRcdFx0VG9rZW5UeXBlLlRFWFRcblx0XHRdXG5cdCk7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUVkRvbVRleHROb2RlKHRva2VuLnZhbHVlKTtcblx0bm9kZS5zcGFuID0gc3BhbkZyb20odG9rZW4sIHRva2VuKTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUFyZ3VtZW50cyhwYXJzZXI6IFBhcnNlcik6IEFTVE5vZGVbXSB7XG5cdGNvbnN0IGFyZ3M6IEFTVE5vZGVbXSA9IFtdO1xuXG5cdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSkpIHtcblx0XHRyZXR1cm4gYXJncztcblx0fVxuXG5cdGFyZ3MucHVzaChwYXJzZUV4cHJlc3Npb24ocGFyc2VyKSk7XG5cblx0d2hpbGUgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSkge1xuXHRcdGFyZ3MucHVzaChwYXJzZUV4cHJlc3Npb24ocGFyc2VyKSk7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cdHJldHVybiBhcmdzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VVbmFyeShwYXJzZXI6IFBhcnNlcik6IEFTVE5vZGUgfCBBU1RVbmFyeU5vZGUge1xuXHRjb25zdCB0b2tlbjogVG9rZW4gPSBwYXJzZXIucGVlaygpO1xuXG5cdGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuS0VZV09SRCAmJiB0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5WRE9NKSB7XG5cdFx0cmV0dXJuIHBhcnNlVkRvbUV4cHJlc3Npb24ocGFyc2VyKTtcblx0fVxuXG5cdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5FWENMQU1BVElPTl9NQVJLKSB7XG5cdFx0cGFyc2VyLm5leHQoKTtcblxuXHRcdGNvbnN0IHVuYXJ5OiBBU1ROb2RlIHwgQVNUVW5hcnlOb2RlID0gcGFyc2VVbmFyeShwYXJzZXIpO1xuXG5cdFx0cmV0dXJuIG5ldyBBU1RVbmFyeU5vZGUoR1JBTU1BUi5FWENMQU1BVElPTl9NQVJLLCB1bmFyeSk7XG5cdH1cblxuXHRyZXR1cm4gcGFyc2VQcmltYXJ5KHBhcnNlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVByaW1hcnkocGFyc2VyOiBQYXJzZXIpOiBBU1ROb2RlIHtcblx0aWYgKGxvb2tzTGlrZUxhbWJkYShwYXJzZXIpKSB7XG5cdFx0cmV0dXJuIHBhcnNlTGFtYmRhKHBhcnNlcik7XG5cdH1cblxuXHRjb25zdCB0b2tlbjogVG9rZW4gPSBwYXJzZXIubmV4dCgpO1xuXG5cdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9PUEVOKSB7XG5cdFx0cGFyc2VyLnJld2luZCgpO1xuXHRcdHJldHVybiBwYXJzZUFycmF5KHBhcnNlcik7XG5cdH1cblxuXHRpZiAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLk5VTUJFUikge1xuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5OVU1CRVIpO1xuXHRcdG5vZGUudmFsdWUgPSB0b2tlbi52YWx1ZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuU1RSSU5HKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLlNUUklORyk7XG5cdFx0bm9kZS52YWx1ZSA9IHRva2VuLnZhbHVlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5CT09MRUFOKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLkJPT0xFQU4pO1xuXHRcdG5vZGUudmFsdWUgPSB0b2tlbi52YWx1ZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuSURFTlRJRklFUikge1xuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5JREVOVElGSUVSKTtcblx0XHRub2RlLm5hbWUgPSB0b2tlbi52YWx1ZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5OVUxMKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLk5VTEwpO1xuXHRcdG5vZGUudmFsdWUgPSB0b2tlbi52YWx1ZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5USElTKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLlRISVMpO1xuXHRcdG5vZGUubmFtZSA9IHRva2VuLnZhbHVlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLk5FVykge1xuXG5cdFx0bGV0IHR5cGVBbm5vdGF0aW9uID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cblx0XHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKTtcblxuXHRcdHJldHVybiBuZXcgQVNUTmV3Tm9kZShwYXJzZUFyZ3VtZW50cyhwYXJzZXIpLCB0eXBlQW5ub3RhdGlvbik7XG5cdH1cblxuXHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTikge1xuXHRcdGNvbnN0IGV4cHIgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0XHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cdFx0cmV0dXJuIGV4cHI7XG5cdH1cblxuXHR0aHJvd1BhcnNlckVycm9yKGBVbmV4cGVjdGVkIHRva2VuOiAke3Rva2VuLnR5cGV9ICR7dG9rZW4udmFsdWV9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBvc3RmaXgocGFyc2VyOiBQYXJzZXIsIGV4cHI6IEFTVE5vZGUgfCBudWxsKTogQVNUTm9kZSB7XG5cdGlmIChleHByID09PSBudWxsKSB7XG5cdFx0dGhyb3dQYXJzZXJFcnJvcihgRXhwZWN0ZWQgZXhwcmVzc2lvbiwgZ290IG51bGwuYCk7XG5cdH1cblxuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdGNvbnN0IHRva2VuID0gcGFyc2VyLnBlZWsoKTtcblx0XHRpZiAoIXRva2VuKSBicmVhaztcblxuXHRcdC8vIENhbGw6IGZvbyguLi4pXG5cdFx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0XHRleHByID0gbmV3IEFTVENhbGxOb2RlKGV4cHIsIHBhcnNlQXJndW1lbnRzKHBhcnNlcikpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gTWVtYmVyOiBmb28uYmFyXG5cdFx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLkRPVCkge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHRcdGV4cHIgPSBuZXcgQVNUTWVtYmVyTm9kZShleHByLCBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpLnZhbHVlKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIElOREVYOiBmb29bZXhwcl1cblx0XHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfT1BFTikge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblxuXHRcdFx0Y29uc3QgaW5kZXggPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblxuXHRcdFx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfQ0xPU0UpO1xuXG5cdFx0XHRleHByID0gbmV3IEFTVEluZGV4Tm9kZShleHByLCBpbmRleCk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRicmVhaztcblx0fVxuXG5cdHJldHVybiBleHByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9va3VwUHJlY2VkZW5jZSh0b2tlbjogVG9rZW4pOiBudW1iZXIge1xuXHRzd2l0Y2ggKHRva2VuLnZhbHVlKSB7XG5cdFx0Y2FzZSBHUkFNTUFSLkRPVDpcblx0XHRcdHJldHVybiAxMDA7XG5cdFx0Y2FzZSBHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU46XG5cdFx0XHRyZXR1cm4gOTA7XG5cdFx0Y2FzZSBHUkFNTUFSLk1VTFRJUExZOlxuXHRcdGNhc2UgR1JBTU1BUi5ESVZJREU6XG5cdFx0Y2FzZSBHUkFNTUFSLk1PRFVMVVM6XG5cdFx0XHRyZXR1cm4gNjA7XG5cdFx0Y2FzZSBHUkFNTUFSLlBMVVM6XG5cdFx0Y2FzZSBHUkFNTUFSLk1JTlVTOlxuXHRcdFx0cmV0dXJuIDUwO1xuXHRcdGNhc2UgR1JBTU1BUi5MRVNTX1RIQU46XG5cdFx0Y2FzZSBHUkFNTUFSLkdSRUFURVJfVEhBTjpcblx0XHRjYXNlIEdSQU1NQVIuTEVTU19FUVVBTDpcblx0XHRjYXNlIEdSQU1NQVIuR1JFQVRFUl9FUVVBTDpcblx0XHRcdHJldHVybiA0MDtcblx0XHRjYXNlIEdSQU1NQVIuRVFVQUw6XG5cdFx0Y2FzZSBHUkFNTUFSLk5PVF9FUVVBTDpcblx0XHRcdHJldHVybiAzMDtcblx0XHRjYXNlIEdSQU1NQVIuQU5EOlxuXHRcdFx0cmV0dXJuIDIwO1xuXHRcdGNhc2UgR1JBTU1BUi5PUjpcblx0XHRcdHJldHVybiAxMDtcblx0XHRjYXNlIEdSQU1NQVIuQVNTSUdOOlxuXHRcdFx0cmV0dXJuIDU7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiAwO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7VG9rZW4sIFRva2VuVHlwZX0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcbmltcG9ydCB7VG9rZW5TdHJlYW19IGZyb20gXCIuLi90b2tlbml6ZXIvdG9rZW5pemVyXCI7XG5pbXBvcnQge3BhcnNlUHJvZ3JhbX0gZnJvbSBcIi4vcGFyc2VyX3N0YXRtZW50c1wiO1xuaW1wb3J0IHt0aHJvd1BhcnNlckVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4vcGFyc2VyX3NvdXJjZVwiO1xuXG5cbmV4cG9ydCBjbGFzcyBQYXJzZXIge1xuXHRzb3VyY2U6IFNvdXJjZTtcblx0dG9rZW5TdHJlYW06IFRva2VuU3RyZWFtIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3Ioc291cmNlOiBTb3VyY2UpIHtcblx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0fVxuXG5cdHBhcnNlKCkge1xuXHRcdHRoaXMudG9rZW5TdHJlYW0gPSB0aGlzLnNvdXJjZVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgLmdldFRva2VuaXplcigpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAuZ2V0VG9rZW5TdHJlYW0oKVxuXG5cdFx0cmV0dXJuIHBhcnNlUHJvZ3JhbSh0aGlzKTtcblx0fVxuXG5cdHN0cmVhbSgpOiBUb2tlblN0cmVhbSB7XG5cdFx0aWYgKCF0aGlzLnRva2VuU3RyZWFtKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKCdQYXJzZXIgaGFzIG5vdCBiZWVuIHBhcnNlZCB5ZXQuJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMudG9rZW5TdHJlYW07XG5cdH1cblxuXHRleHBlY3QodG9rZW5UeXBlOiBzdHJpbmcsIGtleXdvcmQ6IHN0cmluZyB8IG51bGwgPSBudWxsKTogVG9rZW4ge1xuXHRcdGNvbnN0IHRva2VuID0gdGhpc1xuXHRcdFx0LnN0cmVhbSgpXG5cdFx0XHQubmV4dCgpO1xuXG5cdFx0aWYgKCF0b2tlbikge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcihgVW5leHBlY3RlZCBlbmQgb2YgZmlsZS4gRXhwZWN0ZWQgJHt0b2tlblR5cGV9JHtrZXl3b3JkID8gJyAnICsga2V5d29yZCA6ICcnfWApO1xuXHRcdH1cblxuXHRcdGlmICh0b2tlbi50eXBlICE9PSB0b2tlblR5cGUgfHwgKGtleXdvcmQgJiYgdG9rZW4udmFsdWUgIT09IGtleXdvcmQpKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKGBFeHBlY3RlZCAke3Rva2VuVHlwZX0ke2tleXdvcmQgPyAnICcgKyBrZXl3b3JkIDogJyd9LCBnb3QgJHt0b2tlbi50eXBlfSAke3Rva2VuLnZhbHVlfWApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0b2tlbjtcblx0fVxuXG5cdGV4cGVjdE9wZXJhdG9yKGtleXdvcmQ6IHN0cmluZyB8IG51bGwgPSBudWxsKTogVG9rZW4ge1xuXHRcdHJldHVybiB0aGlzLmV4cGVjdChUb2tlblR5cGUuT1BFUkFUT1IsIGtleXdvcmQpO1xuXHR9XG5cblx0ZXhwZWN0QW5ub3RhdGlvbigpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZWN0KFRva2VuVHlwZS5BTk5PVEFUSU9OKTtcblx0fVxuXG5cdGV4cGVjdElkZW50aWZpZXIoa2V5d29yZDogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZWN0KFRva2VuVHlwZS5JREVOVElGSUVSLCBrZXl3b3JkKTtcblx0fVxuXG5cdGV4cGVjdEtleXdvcmQoa2V5d29yZDogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZWN0KFRva2VuVHlwZS5LRVlXT1JELCBrZXl3b3JkKTtcblx0fVxuXG5cdGV4cGVjdFN0cmluZygpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZWN0KFRva2VuVHlwZS5TVFJJTkcpO1xuXHR9XG5cblx0ZXhwZWN0VGV4dCgpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZWN0KFRva2VuVHlwZS5URVhUKTtcblx0fVxuXG5cdGV4cGVjdFB1bmN0dWF0aW9uKGtleXdvcmQ6IHN0cmluZyB8IG51bGwgPSBudWxsKTogVG9rZW4ge1xuXHRcdHJldHVybiB0aGlzLmV4cGVjdChUb2tlblR5cGUuUFVOQ1RVQVRJT04sIGtleXdvcmQpO1xuXHR9XG5cblx0ZXhwZWN0T25lT2YodG9rZW5UeXBlczogc3RyaW5nW10sIGtleXdvcmRzOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IFRva2VuIHtcblx0XHRjb25zdCB0b2tlbiA9IHRoaXNcblx0XHRcdC5zdHJlYW0oKVxuXHRcdFx0Lm5leHQoKTtcblxuXHRcdGlmICghdG9rZW4pIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoYFVuZXhwZWN0ZWQgZW5kIG9mIGZpbGUuIEV4cGVjdGVkIG9uZSBvZiB0eXBlcyAke3Rva2VuVHlwZXN9LCBnb3QgbnVsbC5gKTtcblx0XHR9XG5cblx0XHRpZiAoIXRva2VuVHlwZXMuaW5jbHVkZXModG9rZW4udHlwZSkpIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoYEV4cGVjdGVkIG9uZSBvZiB0eXBlcyAke3Rva2VuVHlwZXN9LCBnb3QgJHt0b2tlbi50eXBlfWApO1xuXHRcdH1cblxuXHRcdGlmIChrZXl3b3JkcyAmJiAha2V5d29yZHMuaW5jbHVkZXModG9rZW4udmFsdWUpKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKGBFeHBlY3RlZCBvbmUgb2YgdmFsdWVzICR7a2V5d29yZHN9LCBnb3QgJHt0b2tlbi52YWx1ZX1gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdG9rZW47XG5cdH1cblxuXHRjb25zdW1lSWYodG9rZW5UeXBlOiBzdHJpbmcsIGtleXdvcmQ6IHN0cmluZyB8IG51bGwgPSBudWxsKTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgdG9rZW4gPSB0aGlzLnBlZWsoKTtcblxuXHRcdGlmICh0b2tlbi50eXBlID09PSB0b2tlblR5cGUgJiYgKGtleXdvcmQgJiYgdG9rZW4udmFsdWUudHJpbSgpID09PSBrZXl3b3JkKSkge1xuXHRcdFx0dGhpcy5uZXh0KCk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRjb25zdW1lSWZQdW5jdHVhdGlvbih2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3VtZUlmKFRva2VuVHlwZS5QVU5DVFVBVElPTiwgdmFsdWUpO1xuXHR9XG5cblx0Y29uc3VtZUlmT3BlcmF0b3IodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbnN1bWVJZihUb2tlblR5cGUuT1BFUkFUT1IsIHZhbHVlKTtcblx0fVxuXG5cdGNvbnN1bWVJZkNvbW1lbnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3VtZUlmKFRva2VuVHlwZS5DT01NRU5UKTtcblx0fVxuXG5cdGNvbnN1bWVJZktleXdvcmQoa2V5d29yZDogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3VtZUlmKFRva2VuVHlwZS5LRVlXT1JELCBrZXl3b3JkKTtcblx0fVxuXG5cdGNvbnN1bWVJZlRleHQoKTogYm9vbGVhbiB7XG5cdFx0aWYgKHRoaXMucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5URVhUICYmIHRoaXMucGVla0lzKCcnKSkge1xuXHRcdFx0dGhpcy5uZXh0KCk7XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHBlZWsoKTogVG9rZW4ge1xuXHRcdGNvbnN0IHRva2VuID0gdGhpc1xuXHRcdFx0LnN0cmVhbSgpXG5cdFx0XHQucGVlaygpO1xuXG5cdFx0aWYgKHRva2VuID09PSBudWxsKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKCdVbmV4cGVjdGVkIGVuZCBvZiBmaWxlLiBFeHBlY3RlZCB0b2tlbiwgZ290IG51bGwuJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRva2VuO1xuXHR9XG5cblx0cGVla0lzKGtleXdvcmQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnBlZWsoKVxuXHRcdCAgICAgICAgICAgLnZhbHVlXG5cdFx0ICAgICAgICAgICAudHJpbSgpID09PSBrZXl3b3JkO1xuXHR9XG5cblx0bmV4dCgpOiBUb2tlbiB7XG5cdFx0Y29uc3QgdG9rZW4gPSB0aGlzXG5cdFx0XHQuc3RyZWFtKClcblx0XHRcdC5uZXh0KCk7XG5cblx0XHRpZiAodG9rZW4gPT09IG51bGwpIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoJ1VuZXhwZWN0ZWQgZW5kIG9mIGZpbGUuIEV4cGVjdGVkIHRva2VuLCBnb3QgbnVsbC4nKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdG9rZW47XG5cdH1cblxuXHRyZXdpbmQoKTogdm9pZCB7XG5cdFx0dGhpcy5zdHJlYW0oKVxuXHRcdCAgICAucmV3aW5kKCk7XG5cdH1cblxuXHRwb3NpdGlvbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnN0cmVhbSgpLmluZGV4O1xuXHR9XG5cblx0c2Vla0F0KHBvc2l0aW9uOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnN0cmVhbSgpLmluZGV4ID0gcG9zaXRpb247XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtBU1RDbGFzc05vZGUsIEFTVEludGVyZmFjZU5vZGUsIEFTVE5vZGV9IGZyb20gXCIuLi9hc3RcIjtcbmltcG9ydCB7Q2xhc3NEZWZpbml0aW9uLCBJbnN0YW5jZSwgSW50ZXJmYWNlRGVmaW5pdGlvbn0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtDbGFzc1N5bWJvbCwgSW50ZXJmYWNlU3ltYm9sfSBmcm9tIFwiLi4vdHlwZXMvdHlwZV9vYmplY3RzXCI7XG5pbXBvcnQge3Rocm93UnVudGltZUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5cbmV4cG9ydCBjbGFzcyBDbGFzc1JlZ2lzdHJ5IHtcblx0bWFwOiBNYXA8c3RyaW5nLCBDbGFzc0RlZmluaXRpb24+ID0gbmV3IE1hcCgpO1xuXG5cdHJlZ2lzdGVyKG5vZGU6IEFTVENsYXNzTm9kZSk6IHZvaWQge1xuXHRcdHRoaXMuc2V0KG5vZGUubmFtZSwgQ2xhc3NEZWZpbml0aW9uLmZyb21BU1Qobm9kZSkpO1xuXHR9XG5cblx0YWxsKCk6IEl0ZXJhYmxlSXRlcmF0b3I8Q2xhc3NEZWZpbml0aW9uPiB7XG5cdFx0cmV0dXJuIHRoaXMubWFwLnZhbHVlcygpO1xuXHR9XG5cblx0c2V0KG5hbWU6IHN0cmluZywgY2xhc3NEZWZpbml0aW9uOiBDbGFzc0RlZmluaXRpb24pOiB2b2lkIHtcblx0XHR0aGlzLm1hcC5zZXQobmFtZSwgY2xhc3NEZWZpbml0aW9uKTtcblx0fVxuXG5cdGdldChuYW1lOiBzdHJpbmcpOiBDbGFzc0RlZmluaXRpb24ge1xuXHRcdGNvbnN0IGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24gfCBudWxsID0gdGhpcy5tYXAuZ2V0KG5hbWUpIHx8IG51bGw7XG5cdFx0aWYgKCFjbGFzc0RlZikge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYENsYXNzICR7bmFtZX0gbm90IGZvdW5kLmApO1xuXHRcdH1cblx0XHRyZXR1cm4gY2xhc3NEZWY7XG5cdH1cblxuXHRoYXMobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubWFwLmhhcyhuYW1lKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgSW50ZXJmYWNlUmVnaXN0cnkge1xuXHRtYXA6IE1hcDxzdHJpbmcsIEludGVyZmFjZURlZmluaXRpb24+ID0gbmV3IE1hcCgpO1xuXG5cdHJlZ2lzdGVyKG5vZGU6IEFTVEludGVyZmFjZU5vZGUpOiB2b2lkIHtcblx0XHR0aGlzLnNldChub2RlLm5hbWUsIEludGVyZmFjZURlZmluaXRpb24uZnJvbUFTVChub2RlKSk7XG5cdH1cblxuXHRhbGwoKTogSXRlcmFibGVJdGVyYXRvcjxJbnRlcmZhY2VEZWZpbml0aW9uPiB7XG5cdFx0cmV0dXJuIHRoaXMubWFwLnZhbHVlcygpO1xuXHR9XG5cblx0c2V0KG5hbWU6IHN0cmluZywgaW50ZXJmYWNlRGVmaW5pdGlvbjogSW50ZXJmYWNlRGVmaW5pdGlvbik6IHZvaWQge1xuXHRcdHRoaXMubWFwLnNldChuYW1lLCBpbnRlcmZhY2VEZWZpbml0aW9uKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgSW5zdGFuY2VSZWdpc3RyeSB7XG5cdHByaXZhdGUgaW5zdGFuY2VzOiBNYXA8c3RyaW5nLCBJbnN0YW5jZT4gPSBuZXcgTWFwPHN0cmluZywgSW5zdGFuY2U+KCk7XG5cblx0cmVnaXN0ZXIoaW5zdGFuY2U6IEluc3RhbmNlKTogdm9pZCB7XG5cdFx0dGhpcy5pbnN0YW5jZXMuc2V0KGluc3RhbmNlLmlkLCBpbnN0YW5jZSk7XG5cdH1cblxuXHR1bnJlZ2lzdGVyKGluc3RhbmNlOiBJbnN0YW5jZSk6IHZvaWQge1xuXHRcdHRoaXMuaW5zdGFuY2VzLmRlbGV0ZShpbnN0YW5jZS5pZCk7XG5cdH1cblxuXHRnZXQoaWQ6IHN0cmluZyk6IEluc3RhbmNlIHwgbnVsbCB7XG5cdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2VzLmdldChpZCkgfHwgbnVsbDtcblx0fVxuXG5cdGFsbEluc3RhbmNlcygpOiBJbnN0YW5jZVtdIHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmluc3RhbmNlcy52YWx1ZXMoKSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGVSZWdpc3RyeSB7XG5cdGNsYXNzU3ltYm9sczogTWFwPHN0cmluZywgQ2xhc3NTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRpbnRlcmZhY2VTeW1ib2xzOiBNYXA8c3RyaW5nLCBJbnRlcmZhY2VTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXG5cdGFsbENsYXNzU3ltYm9scygpOiBJdGVyYWJsZUl0ZXJhdG9yPENsYXNzU3ltYm9sPiB7XG5cdFx0cmV0dXJuIHRoaXMuY2xhc3NTeW1ib2xzLnZhbHVlcygpO1xuXHR9XG5cblx0YWxsSW50ZXJmYWNlU3ltYm9scygpOiBJdGVyYWJsZUl0ZXJhdG9yPEludGVyZmFjZVN5bWJvbD4ge1xuXHRcdHJldHVybiB0aGlzLmludGVyZmFjZVN5bWJvbHMudmFsdWVzKCk7XG5cdH1cblxuXHRhZGRDbGFzc1N5bWJvbChzeW1ib2w6IENsYXNzU3ltYm9sKTogdm9pZCB7XG5cdFx0dGhpcy5jbGFzc1N5bWJvbHMuc2V0KHN5bWJvbC5uYW1lLCBzeW1ib2wpO1xuXHR9XG5cblx0YWRkSW50ZXJmYWNlU3ltYm9sKHN5bWJvbDogSW50ZXJmYWNlU3ltYm9sKTogdm9pZCB7XG5cdFx0dGhpcy5pbnRlcmZhY2VTeW1ib2xzLnNldChzeW1ib2wubmFtZSwgc3ltYm9sKTtcblx0fVxuXG5cdGhhc1N5bWJvbChuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jbGFzc1N5bWJvbHMuaGFzKG5hbWUpIHx8IHRoaXMuaW50ZXJmYWNlU3ltYm9scy5oYXMobmFtZSk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0Q2xhc3NTeW1ib2wobmFtZTogc3RyaW5nKTogQ2xhc3NTeW1ib2wge1xuXHRcdGNvbnN0IHN5bWJvbDogQ2xhc3NTeW1ib2wgfCB1bmRlZmluZWQgPSB0aGlzLmNsYXNzU3ltYm9scy5nZXQobmFtZSk7XG5cdFx0aWYgKHN5bWJvbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgU3ltYm9sICR7bmFtZX0gbm90IGZvdW5kLmApO1xuXHRcdH1cblx0XHRyZXR1cm4gc3ltYm9sO1xuXHR9XG5cblx0cHVibGljIGdldEludGVyYWNlU3ltYm9sKG5hbWU6IHN0cmluZyk6IEludGVyZmFjZVN5bWJvbCB7XG5cdFx0Y29uc3Qgc3ltYm9sOiBJbnRlcmZhY2VTeW1ib2wgfCB1bmRlZmluZWQgPSB0aGlzLmludGVyZmFjZVN5bWJvbHMuZ2V0KG5hbWUpO1xuXHRcdGlmIChzeW1ib2wgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFN5bWJvbCAke25hbWV9IG5vdCBmb3VuZC5gKTtcblx0XHR9XG5cdFx0cmV0dXJuIHN5bWJvbDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgT2JqZWN0UmVnaXN0cnkge1xuXHRwdWJsaWMgcmVhZG9ubHkgY2xhc3NlczogQ2xhc3NSZWdpc3RyeSA9IG5ldyBDbGFzc1JlZ2lzdHJ5KCk7XG5cdHB1YmxpYyByZWFkb25seSBpbnRlcmZhY2VzOiBJbnRlcmZhY2VSZWdpc3RyeSA9IG5ldyBJbnRlcmZhY2VSZWdpc3RyeSgpO1xuXHRwdWJsaWMgcmVhZG9ubHkgaW5zdGFuY2VzOiBJbnN0YW5jZVJlZ2lzdHJ5ID0gbmV3IEluc3RhbmNlUmVnaXN0cnkoKTtcblx0cHVibGljIHJlYWRvbmx5IHR5cGVzOiBUeXBlUmVnaXN0cnkgPSBuZXcgVHlwZVJlZ2lzdHJ5KCk7XG5cblx0ZmV0Y2hBbGxPYmplY3REZWZpbml0aW9ucygpOiBNYXA8c3RyaW5nLCBDbGFzc0RlZmluaXRpb24gfCBJbnRlcmZhY2VEZWZpbml0aW9uPiB7XG5cdFx0Y29uc3QgbWFwID0gbmV3IE1hcCgpO1xuXG5cdFx0Zm9yIChjb25zdCBjbGFzc0RlZiBvZiB0aGlzLmludGVyZmFjZXMuYWxsKCkpIHtcblx0XHRcdG1hcC5zZXQoY2xhc3NEZWYubmFtZSwgY2xhc3NEZWYpO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgY2xhc3NEZWYgb2YgdGhpcy5jbGFzc2VzLmFsbCgpKSB7XG5cdFx0XHRtYXAuc2V0KGNsYXNzRGVmLm5hbWUsIGNsYXNzRGVmKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWFwO1xuXHR9XG5cblx0Y29sbGVjdEFsbChhc3Q6IEFTVE5vZGUpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgYXN0LmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEludGVyZmFjZU5vZGUpIHtcblx0XHRcdFx0dGhpcy5pbnRlcmZhY2VzLnJlZ2lzdGVyKG5vZGUpO1xuXHRcdFx0fSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgQVNUQ2xhc3NOb2RlKSB7XG5cdFx0XHRcdHRoaXMuY2xhc3Nlcy5yZWdpc3Rlcihub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuIiwKICAgICJpbXBvcnQge1xuXHRBU1RBcnJheU5vZGUsXG5cdEFTVEJpbmFyeU5vZGUsXG5cdEFTVENhbGxOb2RlLFxuXHRBU1RDbGFzc05vZGUsXG5cdEFTVEV4cHJlc3Npb25Ob2RlLFxuXHRBU1RGaWVsZE5vZGUsXG5cdEFTVEZvcmVhY2hOb2RlLFxuXHRBU1RJbmRleE5vZGUsXG5cdEFTVEludGVyZmFjZU5vZGUsXG5cdEFTVExhbWJkYU5vZGUsXG5cdEFTVE1lbWJlck5vZGUsXG5cdEFTVE1ldGhvZE5vZGUsXG5cdEFTVE5ld05vZGUsXG5cdEFTVE5vZGUsXG5cdEFTVE5vZGVUeXBlLFxuXHRBU1RQYXJhbWV0ZXJOb2RlLFxuXHRBU1RSZXR1cm5Ob2RlLFxuXHRBU1RUeXBlTm9kZSxcblx0QVNUVW5hcnlOb2RlLFxuXHRBU1RWYXJpYWJsZU5vZGUsXG5cdEFTVFZEb21Ob2RlXG59IGZyb20gJy4uL2FzdC50cyc7XG5pbXBvcnQge1xuXHRidWlsZFR5cGVTdWJzdGl0dXRpb25NYXAsXG5cdENsYXNzUmVmVHlwZSxcblx0Q2xhc3NTeW1ib2wsXG5cdEZpZWxkU3ltYm9sLFxuXHRJbnRlcmZhY2VSZWZUeXBlLFxuXHRJbnRlcmZhY2VTeW1ib2wsXG5cdExhbWJkYVR5cGUsXG5cdE1ldGhvZFN5bWJvbCxcblx0TWl4ZWRUeXBlLFxuXHROdWxsYWJsZVR5cGUsXG5cdFBhcmFtZXRlclN5bWJvbCxcblx0UHJpbWl0aXZlQ2xhc3NUeXBlcyxcblx0c3Vic3RpdHV0ZVR5cGUsXG5cdFR5cGUsXG5cdFR5cGVQYXJhbWV0ZXJTeW1ib2wsXG5cdFR5cGVzLFxuXHRUeXBlU2NvcGUsXG5cdFR5cGVWYXJpYWJsZSxcblx0d3JhcFR5cGVcbn0gZnJvbSBcIi4vdHlwZV9vYmplY3RzXCI7XG5pbXBvcnQge0F1dG9ib3hpbmd9IGZyb20gXCIuL2F1dG9ib3hpbmdcIjtcbmltcG9ydCB7TmF0aXZlRnVuY3Rpb24sIE5hdGl2ZUZ1bmN0aW9uc30gZnJvbSBcIi4uLy4uL2xpYnJhcnkvbmF0aXZlX2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHtHUkFNTUFSfSBmcm9tIFwiLi4vZ3JhbW1hclwiO1xuaW1wb3J0IHt0aHJvd1R5cGVFcnJvcn0gZnJvbSBcIi4uL2Vycm9ycy50c1wiXG5pbXBvcnQge0NsYXNzRGVmaW5pdGlvbiwgSW50ZXJmYWNlRGVmaW5pdGlvbn0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuXG5cbmNvbnN0IGdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5ID0gbmV3IE5hdGl2ZUZ1bmN0aW9ucygpXG5cdC5nZXRHbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeSgpO1xuXG5leHBvcnQgY2xhc3MgU3RhdGVtZW50UmVzdWx0IHtcblx0ZGlkUmV0dXJuOiBib29sZWFuO1xuXHRyZXR1cm5UeXBlOiBUeXBlIHwgbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihkaWRSZXR1cm46IGJvb2xlYW4sIHJldHVyblR5cGU6IFR5cGUgfCBudWxsKSB7XG5cdFx0dGhpcy5kaWRSZXR1cm4gPSBkaWRSZXR1cm47XG5cdFx0dGhpcy5yZXR1cm5UeXBlID0gcmV0dXJuVHlwZTtcblx0fVxuXG5cdHN0YXRpYyB3aXRoUmV0dXJuKHJldHVyblR5cGU6IFR5cGUpOiBTdGF0ZW1lbnRSZXN1bHQge1xuXHRcdHJldHVybiBuZXcgU3RhdGVtZW50UmVzdWx0KHRydWUsIHJldHVyblR5cGUpO1xuXHR9XG5cblx0c3RhdGljIG5vUmV0dXJuKCk6IFN0YXRlbWVudFJlc3VsdCB7XG5cdFx0cmV0dXJuIG5ldyBTdGF0ZW1lbnRSZXN1bHQoZmFsc2UsIG51bGwpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlQ2hlY2tlciB7XG5cdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeTtcblxuXHRjb25zdHJ1Y3RvcihvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpIHtcblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5ID0gb2JqZWN0UmVnaXN0cnk7XG5cdH1cblxuXHRjb2xsZWN0QWxsU3ltYm9sc0Zyb21Ob2RlKGFzdDogQVNUTm9kZSk6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUSW50ZXJmYWNlTm9kZSkge1xuXHRcdFx0XHR0aGlzLnJlZ2lzdGVySW50ZXJmYWNlU3ltYm9sKG5vZGUpXG5cdFx0XHR9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RDbGFzc05vZGUpIHtcblx0XHRcdFx0dGhpcy5yZWdpc3RlckNsYXNzU3ltYm9sKG5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNvbGxlY3RBbGxTeW1ib2xzRnJvbVJlZ2lzdHJ5KG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IHZvaWQge1xuXHRcdGNvbnN0IG9iamVjdERlZmluaXRpb25zOiBNYXBJdGVyYXRvcjxDbGFzc0RlZmluaXRpb24gfCBJbnRlcmZhY2VEZWZpbml0aW9uPiA9IG9iamVjdFJlZ2lzdHJ5XG5cdFx0XHQuZmV0Y2hBbGxPYmplY3REZWZpbml0aW9ucygpXG5cdFx0XHQudmFsdWVzKCk7XG5cblx0XHRmb3IgKGxldCBvYmplY3REZWYgb2Ygb2JqZWN0RGVmaW5pdGlvbnMpIHtcblx0XHRcdGlmIChvYmplY3REZWYgaW5zdGFuY2VvZiBJbnRlcmZhY2VEZWZpbml0aW9uKSB7XG5cdFx0XHRcdHRoaXMucmVnaXN0ZXJJbnRlcmZhY2VTeW1ib2wob2JqZWN0RGVmLm5vZGUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5yZWdpc3RlckNsYXNzU3ltYm9sKG9iamVjdERlZi5ub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjaGVjayhhc3Q6IEFTVE5vZGUpOiB2b2lkIHtcblx0XHR0aGlzLmNvbGxlY3RBbGxTeW1ib2xzRnJvbU5vZGUoYXN0KTtcblx0XHR0aGlzLnZhbGlkYXRlSW5oZXJpdGFuY2UoKTtcblx0XHR0aGlzLmNoZWNrUHJvZ3JhbShhc3QpO1xuXHRcdHRoaXMuY2hlY2tJbnRlcmZhY2VCb2RpZXMoKTtcblx0XHR0aGlzLmNoZWNrQ2xhc3Nlc0JvZGllcygpO1xuXHRcdHRoaXMuY2hlY2tDbGFzc2VzSW1wbGVtZW50cygpO1xuXHR9XG5cblx0cHJpdmF0ZSB2YWxpZGF0ZUluaGVyaXRhbmNlKCkge1xuXHRcdGZvciAoY29uc3QgY2xhc3NTeW1ib2wgb2YgdGhpcy5vYmplY3RSZWdpc3RyeS5jbGFzc2VzLmFsbCgpKSB7XG5cdFx0XHRpZiAoY2xhc3NTeW1ib2wuc3VwZXJDbGFzcyAmJiAhdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5oYXNTeW1ib2woY2xhc3NTeW1ib2wuc3VwZXJDbGFzcykpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYFVua25vd24gc3VwZXJjbGFzcyAke2NsYXNzU3ltYm9sLnN1cGVyQ2xhc3N9YCwgY2xhc3NTeW1ib2wubm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1Byb2dyYW0oYXN0OiBBU1ROb2RlKTogdm9pZCB7XG5cdFx0Y29uc3Qgc2NvcGUgPSBuZXcgVHlwZVNjb3BlKCk7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIGFzdC5jaGlsZHJlbikge1xuXHRcdFx0dGhpcy5jaGVja1N0YXRlbWVudChub2RlLCBzY29wZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0NsYXNzZXNCb2RpZXMoKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBvYmplY3RTeW1ib2wgb2YgdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5hbGxDbGFzc1N5bWJvbHMoKSkge1xuXHRcdFx0Y29uc3QgaW5zdGFuY2VTY29wZSA9IG5ldyBUeXBlU2NvcGUoKTtcblx0XHRcdGluc3RhbmNlU2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCA9IG9iamVjdFN5bWJvbDtcblxuXHRcdFx0b2JqZWN0U3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmZvckVhY2godHlwZVBhcmFtZXRlciA9PiB7XG5cdFx0XHRcdGluc3RhbmNlU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcoXG5cdFx0XHRcdFx0dHlwZVBhcmFtZXRlci5uYW1lLFxuXHRcdFx0XHRcdG5ldyBUeXBlVmFyaWFibGUodHlwZVBhcmFtZXRlci5uYW1lKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmIChvYmplY3RTeW1ib2wuY29uc3RydWN0b3JNZXRob2RTeW1ib2wpIHtcblx0XHRcdFx0Y29uc3QgY29uc3RydWN0b3JTeW1ib2wgPSBvYmplY3RTeW1ib2wuY29uc3RydWN0b3JNZXRob2RTeW1ib2w7XG5cdFx0XHRcdGNvbnN0IGNvbnN0cnVjdG9yU2NvcGUgPSBuZXcgVHlwZVNjb3BlKGluc3RhbmNlU2NvcGUpO1xuXG5cdFx0XHRcdG9iamVjdFN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5mb3JFYWNoKHR5cGVQYXJhbWV0ZXJTeW1ib2wgPT4ge1xuXHRcdFx0XHRcdGNvbnN0cnVjdG9yU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcoXG5cdFx0XHRcdFx0XHR0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUsXG5cdFx0XHRcdFx0XHRuZXcgVHlwZVZhcmlhYmxlKHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRmb3IgKGNvbnN0IHBhcmFtZXRlclN5bWJvbCBvZiBjb25zdHJ1Y3RvclN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzKSB7XG5cdFx0XHRcdFx0Y29uc3RydWN0b3JTY29wZS5kZWZpbmVUeXBlKHBhcmFtZXRlclN5bWJvbC5uYW1lLCBwYXJhbWV0ZXJTeW1ib2wucGFyYW1ldGVyVHlwZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmNoZWNrQm9keShjb25zdHJ1Y3RvclN5bWJvbC5ib2R5LCBjb25zdHJ1Y3RvclNjb3BlKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChjb25zdCBtZXRob2RTeW1ib2wgb2Ygb2JqZWN0U3ltYm9sLmluc3RhbmNlTWV0aG9kU3ltYm9scy52YWx1ZXMoKSkge1xuXHRcdFx0XHRjb25zdCBtZXRob2RTY29wZSA9IG5ldyBUeXBlU2NvcGUoaW5zdGFuY2VTY29wZSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmZvckVhY2godHlwZVBhcmFtZXRlclN5bWJvbCA9PiB7XG5cdFx0XHRcdFx0bWV0aG9kU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcoXG5cdFx0XHRcdFx0XHR0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUsXG5cdFx0XHRcdFx0XHRuZXcgVHlwZVZhcmlhYmxlKHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRmb3IgKGNvbnN0IHBhcmFtZXRlclN5bWJvbCBvZiBtZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9scykge1xuXHRcdFx0XHRcdG1ldGhvZFNjb3BlLmRlZmluZVR5cGUocGFyYW1ldGVyU3ltYm9sLm5hbWUsIHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGhhc0JvZHkgPSBtZXRob2RTeW1ib2wuYm9keSAmJiBtZXRob2RTeW1ib2wuYm9keS5sZW5ndGggPiAwO1xuXHRcdFx0XHRpZiAoaGFzQm9keSkge1xuXHRcdFx0XHRcdGNvbnN0IGFjdHVhbCA9IHRoaXMuY2hlY2tCb2R5KG1ldGhvZFN5bWJvbC5ib2R5LCBtZXRob2RTY29wZSk7XG5cdFx0XHRcdFx0dGhpcy5jaGVja1JldHVyblR5cGUobWV0aG9kU3ltYm9sLnJldHVyblR5cGUsIGFjdHVhbCwgbWV0aG9kU3ltYm9sLm5vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoY29uc3QgbWV0aG9kU3ltYm9sIG9mIG9iamVjdFN5bWJvbC5zdGF0aWNNZXRob2RTeW1ib2xzLnZhbHVlcygpKSB7XG5cdFx0XHRcdGNvbnN0IHN0YXRpY1Njb3BlID0gbmV3IFR5cGVTY29wZShpbnN0YW5jZVNjb3BlKTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMuZm9yRWFjaCh0eXBlUGFyYW1ldGVyU3ltYm9sID0+IHtcblx0XHRcdFx0XHRzdGF0aWNTY29wZS5kZWZpbmVUeXBlQmluZGluZyhcblx0XHRcdFx0XHRcdHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSxcblx0XHRcdFx0XHRcdG5ldyBUeXBlVmFyaWFibGUodHlwZVBhcmFtZXRlclN5bWJvbC5uYW1lKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGZvciAoY29uc3QgcGFyYW1ldGVyU3ltYm9sIG9mIG1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzKSB7XG5cdFx0XHRcdFx0c3RhdGljU2NvcGUuZGVmaW5lVHlwZShwYXJhbWV0ZXJTeW1ib2wubmFtZSwgcGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgaGFzQm9keSA9IG1ldGhvZFN5bWJvbC5ib2R5ICYmIG1ldGhvZFN5bWJvbC5ib2R5Lmxlbmd0aCA+IDA7XG5cdFx0XHRcdGlmIChoYXNCb2R5KSB7XG5cdFx0XHRcdFx0Y29uc3QgYWN0dWFsID0gdGhpcy5jaGVja0JvZHkobWV0aG9kU3ltYm9sLmJvZHksIHN0YXRpY1Njb3BlKTtcblx0XHRcdFx0XHR0aGlzLmNoZWNrUmV0dXJuVHlwZShtZXRob2RTeW1ib2wucmV0dXJuVHlwZSwgYWN0dWFsLCBtZXRob2RTeW1ib2wubm9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrSW50ZXJmYWNlQm9kaWVzKCk6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qgb2JqZWN0U3ltYm9sIG9mIHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuYWxsSW50ZXJmYWNlU3ltYm9scygpKSB7XG5cdFx0XHRjb25zdCBpbnN0YW5jZVNjb3BlID0gbmV3IFR5cGVTY29wZSgpO1xuXHRcdFx0aW5zdGFuY2VTY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sID0gb2JqZWN0U3ltYm9sO1xuXG5cdFx0XHRvYmplY3RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMuZm9yRWFjaCh0eXBlUGFyYW1ldGVyID0+IHtcblx0XHRcdFx0aW5zdGFuY2VTY29wZS5kZWZpbmVUeXBlQmluZGluZyhcblx0XHRcdFx0XHR0eXBlUGFyYW1ldGVyLm5hbWUsXG5cdFx0XHRcdFx0bmV3IFR5cGVWYXJpYWJsZSh0eXBlUGFyYW1ldGVyLm5hbWUpXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Zm9yIChjb25zdCBtZXRob2RTeW1ib2wgb2Ygb2JqZWN0U3ltYm9sLmluc3RhbmNlTWV0aG9kU3ltYm9scy52YWx1ZXMoKSkge1xuXHRcdFx0XHRjb25zdCBtZXRob2RTY29wZSA9IG5ldyBUeXBlU2NvcGUoaW5zdGFuY2VTY29wZSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmZvckVhY2godHlwZVBhcmFtZXRlclN5bWJvbCA9PiB7XG5cdFx0XHRcdFx0bWV0aG9kU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcoXG5cdFx0XHRcdFx0XHR0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUsXG5cdFx0XHRcdFx0XHRuZXcgVHlwZVZhcmlhYmxlKHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRmb3IgKGNvbnN0IHBhcmFtZXRlclN5bWJvbCBvZiBtZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9scykge1xuXHRcdFx0XHRcdG1ldGhvZFNjb3BlLmRlZmluZVR5cGUocGFyYW1ldGVyU3ltYm9sLm5hbWUsIHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGhhc0JvZHkgPSBtZXRob2RTeW1ib2wuYm9keSAmJiBtZXRob2RTeW1ib2wuYm9keS5sZW5ndGggPiAwO1xuXHRcdFx0XHRpZiAoaGFzQm9keSkge1xuXHRcdFx0XHRcdGNvbnN0IGFjdHVhbCA9IHRoaXMuY2hlY2tCb2R5KG1ldGhvZFN5bWJvbC5ib2R5LCBtZXRob2RTY29wZSk7XG5cdFx0XHRcdFx0dGhpcy5jaGVja1JldHVyblR5cGUobWV0aG9kU3ltYm9sLnJldHVyblR5cGUsIGFjdHVhbCwgbWV0aG9kU3ltYm9sLm5vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0NsYXNzZXNJbXBsZW1lbnRzKCk6IHZvaWQge1xuXHRcdGZvciAoY29uc3QgY2xhc3NTeW1ib2wgb2YgdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5hbGxDbGFzc1N5bWJvbHMoKSkge1xuXHRcdFx0Zm9yIChjb25zdCBpbnRlcmZhY2VSZWZUeXBlIG9mIGNsYXNzU3ltYm9sLmltcGxlbWVudHNJbnRlcmZhY2VzKSB7XG5cdFx0XHRcdHRoaXMuY2hlY2tJbXBsZW1lbnRzSW50ZXJmYWNlKGNsYXNzU3ltYm9sLCBpbnRlcmZhY2VSZWZUeXBlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrSW1wbGVtZW50c0ludGVyZmFjZShjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wsIGludGVyZmFjZVJlZlR5cGU6IEludGVyZmFjZVJlZlR5cGUpOiB2b2lkIHtcblx0XHRjb25zdCBpbnRlcmZhY2VTeW1ib2wgPSBpbnRlcmZhY2VSZWZUeXBlLmludGVyZmFjZVN5bWJvbDtcblxuXHRcdGNvbnN0IHN1YnN0aXR1dGlvbk1hcCA9IGJ1aWxkVHlwZVN1YnN0aXR1dGlvbk1hcChcblx0XHRcdGludGVyZmFjZVN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scyxcblx0XHRcdGludGVyZmFjZVJlZlR5cGUudHlwZUFyZ3VtZW50c1xuXHRcdCk7XG5cblx0XHRmb3IgKGNvbnN0IGludGVyZmFjZU1ldGhvZFN5bWJvbCBvZiBpbnRlcmZhY2VTeW1ib2wuaW5zdGFuY2VNZXRob2RTeW1ib2xzLnZhbHVlcygpKSB7XG5cdFx0XHRjb25zdCBjbGFzc01ldGhvZFN5bWJvbCA9IHRoaXMucmVzb2x2ZUluc3RhbmNlTWV0aG9kZShcblx0XHRcdFx0Y2xhc3NTeW1ib2wsXG5cdFx0XHRcdGludGVyZmFjZU1ldGhvZFN5bWJvbC5uYW1lXG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAoIWNsYXNzTWV0aG9kU3ltYm9sKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKFxuXHRcdFx0XHRcdGBDbGFzcyAke2NsYXNzU3ltYm9sLm5hbWV9IGRvZXMgbm90IGltcGxlbWVudCBtZXRob2QgJHtpbnRlcmZhY2VNZXRob2RTeW1ib2wubmFtZX0gZnJvbSBpbnRlcmZhY2UgJHtpbnRlcmZhY2VTeW1ib2wubmFtZX1gLFxuXHRcdFx0XHRcdGNsYXNzU3ltYm9sLm5vZGVcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5jaGVja01ldGhvZENvbXBhdGliaWxpdHkoXG5cdFx0XHRcdGNsYXNzTWV0aG9kU3ltYm9sLFxuXHRcdFx0XHRpbnRlcmZhY2VNZXRob2RTeW1ib2wsXG5cdFx0XHRcdHN1YnN0aXR1dGlvbk1hcFxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrTWV0aG9kQ29tcGF0aWJpbGl0eShjbGFzc01ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sLCBpbnRlcmZhY2VNZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCwgc3Vic3RpdHV0aW9uTWFwOiBNYXA8c3RyaW5nLCBUeXBlPik6IHZvaWQge1xuXHRcdGlmIChjbGFzc01ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aCAhPT0gaW50ZXJmYWNlTWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgTWV0aG9kICR7Y2xhc3NNZXRob2RTeW1ib2wubmFtZX0gaGFzIHdyb25nIHBhcmFtZXRlciBjb3VudGApO1xuXHRcdH1cblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgaW50ZXJmYWNlTWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHBhcmFtZXRlclN5bWJvbDogUGFyYW1ldGVyU3ltYm9sIHwgbnVsbCA9IGludGVyZmFjZU1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzW2ldIHx8IG51bGw7XG5cblx0XHRcdGlmICghcGFyYW1ldGVyU3ltYm9sKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBNZXRob2QgJHtjbGFzc01ldGhvZFN5bWJvbC5uYW1lfSBoYXMgdG9vIG1hbnkgcGFyYW1ldGVyc2ApO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZXhwZWN0ZWRUeXBlOiBUeXBlID0gc3Vic3RpdHV0ZVR5cGUocGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGUsIHN1YnN0aXR1dGlvbk1hcCk7XG5cblx0XHRcdGNvbnN0IGFjdHVhbFR5cGU6IFR5cGUgPSBwYXJhbWV0ZXJTeW1ib2wucGFyYW1ldGVyVHlwZTtcblxuXHRcdFx0aWYgKCFleHBlY3RlZFR5cGUuYWNjZXB0cyhhY3R1YWxUeXBlKSkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgUGFyYW1ldGVyICR7aSArIDF9IG9mICR7Y2xhc3NNZXRob2RTeW1ib2wubmFtZX0gaW5jb21wYXRpYmxlIHdpdGggaW50ZXJmYWNlYCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgZXhwZWN0ZWRSZXR1cm46IFR5cGUgPSBzdWJzdGl0dXRlVHlwZShpbnRlcmZhY2VNZXRob2RTeW1ib2wucmV0dXJuVHlwZSwgc3Vic3RpdHV0aW9uTWFwKTtcblxuXHRcdGlmICghZXhwZWN0ZWRSZXR1cm4uYWNjZXB0cyhjbGFzc01ldGhvZFN5bWJvbC5yZXR1cm5UeXBlKSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFJldHVybiB0eXBlIG9mICR7Y2xhc3NNZXRob2RTeW1ib2wubmFtZX0gaW5jb21wYXRpYmxlIHdpdGggaW50ZXJmYWNlYCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1N0YXRlbWVudChub2RlOiBBU1ROb2RlLCBzY29wZTogVHlwZVNjb3BlKTogU3RhdGVtZW50UmVzdWx0IHtcblx0XHRzd2l0Y2ggKG5vZGUudHlwZSkge1xuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5SRVRVUk46XG5cdFx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUUmV0dXJuTm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiBTdGF0ZW1lbnRSZXN1bHQud2l0aFJldHVybihcblx0XHRcdFx0XHRcdHRoaXMuY2hlY2tFeHByZXNzaW9uKG5vZGUuYXJndW1lbnQsIHNjb3BlKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLlZBUklBQkxFOlxuXHRcdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVFZhcmlhYmxlTm9kZSkge1xuXHRcdFx0XHRcdHRoaXMuY2hlY2tWYXJpYWJsZShub2RlLCBzY29wZSk7XG5cdFx0XHRcdFx0cmV0dXJuIFN0YXRlbWVudFJlc3VsdC5ub1JldHVybigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5GT1JFQUNIOlxuXHRcdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEZvcmVhY2hOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFN0YXRlbWVudFJlc3VsdC53aXRoUmV0dXJuKFxuXHRcdFx0XHRcdFx0dGhpcy5jaGVja0ZvcmVhY2gobm9kZSwgc2NvcGUpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuRVhQUkVTU0lPTjpcblx0XHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RFeHByZXNzaW9uTm9kZSkge1xuXHRcdFx0XHRcdHRoaXMuY2hlY2tFeHByZXNzaW9uKG5vZGUuZXhwciwgc2NvcGUpO1xuXHRcdFx0XHRcdHJldHVybiBTdGF0ZW1lbnRSZXN1bHQubm9SZXR1cm4oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRyZXR1cm4gU3RhdGVtZW50UmVzdWx0Lm5vUmV0dXJuKCk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrVmFyaWFibGUobm9kZTogQVNUVmFyaWFibGVOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogdm9pZCB7XG5cdFx0Y29uc3QgZGVjbGFyZWRUeXBlOiBUeXBlIHwgbnVsbCA9IG5vZGUudHlwZUFubm90YXRpb25cblx0XHRcdD8gdGhpcy53cmFwVHlwZShub2RlLnR5cGVBbm5vdGF0aW9uLCBzY29wZSlcblx0XHRcdDogbnVsbDtcblxuXHRcdGNvbnN0IGFjdHVhbFR5cGU6IFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLmluaXQsIHNjb3BlLCBkZWNsYXJlZFR5cGUpO1xuXG5cdFx0aWYgKGRlY2xhcmVkVHlwZSAmJiAhZGVjbGFyZWRUeXBlLmFjY2VwdHMoYWN0dWFsVHlwZSkpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBUeXBlIG1pc21hdGNoOiAke2RlY2xhcmVkVHlwZX0gPD4gJHthY3R1YWxUeXBlfWAsIG5vZGUpO1xuXHRcdH1cblxuXHRcdHNjb3BlLmRlZmluZVR5cGUobm9kZS5uYW1lLCBkZWNsYXJlZFR5cGUgPz8gYWN0dWFsVHlwZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrRm9yZWFjaChub2RlOiBBU1RGb3JlYWNoTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGxldCBpdGVyYWJsZVR5cGU6IFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLml0ZXJhYmxlLCBzY29wZSk7XG5cblx0XHRpdGVyYWJsZVR5cGUgPSBBdXRvYm94aW5nLmF1dG9ib3hJZk5lZWRlZChpdGVyYWJsZVR5cGUsIHRoaXMub2JqZWN0UmVnaXN0cnkpO1xuXG5cdFx0aWYgKGl0ZXJhYmxlVHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSAmJiBpdGVyYWJsZVR5cGUuY2xhc3NTeW1ib2wubmFtZSA9PT0gJ0FycmF5Jykge1xuXHRcdFx0aWYgKGl0ZXJhYmxlVHlwZS50eXBlQXJndW1lbnRzLmxlbmd0aCAhPT0gMSkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcignQXJyYXkgaW4gZm9yZWFjaCBtdXNzdCBoYXZlIGV4YWN0bHkgb25lIHR5cGUgYXJndW1lbnQuJywgbm9kZS5pdGVyYWJsZSk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGVsZW1lbnRUeXBlOiBUeXBlIHwgbnVsbCA9IGl0ZXJhYmxlVHlwZS50eXBlQXJndW1lbnRzWzBdIHx8IG51bGw7XG5cblx0XHRcdGlmIChlbGVtZW50VHlwZSA9PT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcignQXJyYXkgaW4gZm9yZWFjaCBtdXN0IGhhdmUgZXhhY3RseSBvbmUgdHlwZSBhcmd1bWVudC4nLCBub2RlLml0ZXJhYmxlKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgbG9vcFNjb3BlID0gbmV3IFR5cGVTY29wZShzY29wZSk7XG5cdFx0XHRsb29wU2NvcGUuZGVmaW5lVHlwZShub2RlLml0ZXJhdG9yLCBlbGVtZW50VHlwZSk7XG5cblx0XHRcdHJldHVybiB0aGlzLmNoZWNrQm9keShub2RlLmJvZHksIGxvb3BTY29wZSk7XG5cblx0XHR9XG5cblx0XHR0aGlzLnR5cGVFcnJvcihgZm9yZWFjaCBleHBlY3RzIEFycmF5PFQ+LCBnb3QgJHtpdGVyYWJsZVR5cGUudG9TdHJpbmcoKX1gLCBub2RlLml0ZXJhYmxlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tFeHByZXNzaW9uKGV4cHI6IEFTVE5vZGUgfCBudWxsLCBzY29wZTogVHlwZVNjb3BlLCBleHBlY3RlZFR5cGU6IFR5cGUgfCBudWxsID0gbnVsbCk6IFR5cGUge1xuXHRcdGlmIChleHByID09PSBudWxsKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcignRXhwcmVzc2lvbiBleHBlY3RlZCwgZ290IG51bGwuJywgZXhwcik7XG5cdFx0fVxuXG5cdFx0c3dpdGNoIChleHByLnR5cGUpIHtcblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuTlVNQkVSOlxuXHRcdFx0XHRyZXR1cm4gVHlwZXMuTlVNQkVSO1xuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLlNUUklORzpcblx0XHRcdFx0cmV0dXJuIFR5cGVzLlNUUklORztcblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5CT09MRUFOOlxuXHRcdFx0XHRyZXR1cm4gVHlwZXMuQk9PTEVBTjtcblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5OVUxMOlxuXHRcdFx0XHRyZXR1cm4gVHlwZXMuTlVMTDtcblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5WRE9NOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUVkRvbU5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja1ZEb21Ob2RlKGV4cHIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkFSUkFZOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQXJyYXlOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tBcnJheUV4cHJlc3Npb24oZXhwciwgc2NvcGUsIGV4cGVjdGVkVHlwZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuSU5ERVg6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RJbmRleE5vZGUpIHtcblx0XHRcdFx0XHRjb25zdCBvYmplY3RUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24oZXhwci5vYmplY3QsIHNjb3BlKTtcblx0XHRcdFx0XHRjb25zdCBpbmRleCA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKGV4cHIuaW5kZXgsIHNjb3BlKTtcblxuXHRcdFx0XHRcdGlmIChvYmplY3RUeXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gb2JqZWN0VHlwZS50eXBlQXJndW1lbnRzWzBdIHx8IFR5cGVzLk1JWEVEO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgaW5kZXggJHtvYmplY3RUeXBlLm5hbWV9IHdpdGggJHtpbmRleC5uYW1lfWAsIGV4cHIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLlVOQVJZOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUVW5hcnlOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tVbmFyeUV4cHJlc3Npb24oZXhwciwgc2NvcGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLk1FTUJFUjoge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja01lbWJlckV4cHJlc3Npb24oZXhwciwgc2NvcGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLlRISVM6IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tUaGlzRXhwcmVzc2lvbihleHByLCBzY29wZSk7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuSURFTlRJRklFUjpcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tJZGVudGlmaWVyRXhwcmVzc2lvbihleHByLCBzY29wZSk7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuTkVXOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTmV3Tm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrTmV3RXhwcmVzc2lvbihleHByLCBzY29wZSwgZXhwZWN0ZWRUeXBlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5CSU5BUlk6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RCaW5hcnlOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tCaW5hcnlFeHByZXNzaW9uKGV4cHIsIHNjb3BlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5MQU1CREE6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RMYW1iZGFOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tMYW1iZGFFeHByZXNzaW9uKGV4cHIsIHNjb3BlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5DQUxMOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQ2FsbE5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0NhbGxFeHByZXNzaW9uKGV4cHIsIHNjb3BlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gVHlwZXMuTUlYRUQ7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQmluYXJ5RXhwcmVzc2lvbihleHByOiBBU1RCaW5hcnlOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0Y29uc3QgbGVmdDogVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKGV4cHIubGVmdCwgc2NvcGUpO1xuXHRcdGNvbnN0IHJpZ2h0OiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24oZXhwci5yaWdodCwgc2NvcGUpO1xuXHRcdGNvbnN0IG9wOiBzdHJpbmcgPSBleHByLm9wZXJhdG9yO1xuXG5cdFx0aWYgKEdSQU1NQVIuQVJJVEhNRVRJQy5pbmNsdWRlcyhvcCkpIHtcblx0XHRcdGlmIChsZWZ0LmFjY2VwdHMoVHlwZXMuTlVNQkVSKSAmJiByaWdodC5hY2NlcHRzKFR5cGVzLk5VTUJFUikpIHtcblx0XHRcdFx0cmV0dXJuIFR5cGVzLk5VTUJFUjtcblx0XHRcdH1cblx0XHRcdGlmIChsZWZ0LmFjY2VwdHMoVHlwZXMuU1RSSU5HKSB8fCByaWdodC5hY2NlcHRzKFR5cGVzLlNUUklORykpIHtcblx0XHRcdFx0cmV0dXJuIFR5cGVzLlNUUklORztcblx0XHRcdH1cblx0XHRcdHRoaXMudHlwZUVycm9yKGBBcml0aG1ldGljIG9wZXJhdG9yICcke29wfScgcmVxdWlyZXMgbnVtYmVyc2AsIGV4cHIpO1xuXHRcdH1cblxuXHRcdGlmIChHUkFNTUFSLkNPTVBBUklTT04uaW5jbHVkZXMob3ApKSB7XG5cdFx0XHRpZiAobGVmdC5hY2NlcHRzKFR5cGVzLk5VTUJFUikgJiYgcmlnaHQuYWNjZXB0cyhUeXBlcy5OVU1CRVIpKSB7XG5cdFx0XHRcdHJldHVybiBUeXBlcy5CT09MRUFOO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENvbXBhcmlzb24gJyR7b3B9JyByZXF1aXJlcyBudW1iZXJzYCwgZXhwcik7XG5cdFx0fVxuXG5cdFx0aWYgKEdSQU1NQVIuRVFVQUxJVFkuaW5jbHVkZXMob3ApKSB7XG5cdFx0XHRpZiAobGVmdC5hY2NlcHRzKHJpZ2h0KSkge1xuXHRcdFx0XHRyZXR1cm4gVHlwZXMuQk9PTEVBTjtcblx0XHRcdH1cblx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgY29tcGFyZSAke2xlZnQubmFtZX0gd2l0aCAke3JpZ2h0Lm5hbWV9YCwgZXhwcik7XG5cdFx0fVxuXG5cdFx0aWYgKEdSQU1NQVIuTE9HSUNBTC5pbmNsdWRlcyhvcCkpIHtcblx0XHRcdGlmIChsZWZ0LmFjY2VwdHMoVHlwZXMuQk9PTEVBTikgJiYgcmlnaHQuYWNjZXB0cyhUeXBlcy5CT09MRUFOKSkge1xuXHRcdFx0XHRyZXR1cm4gVHlwZXMuQk9PTEVBTjtcblx0XHRcdH1cblx0XHRcdHRoaXMudHlwZUVycm9yKGBMb2dpY2FsIG9wZXJhdG9yICcke29wfScgcmVxdWlyZXMgYm9vbGVhbnNgLCBleHByKTtcblx0XHR9XG5cblx0XHR0aGlzLnR5cGVFcnJvcihgSW52YWxpZCBiaW5hcnkgb3BlcmF0aW9uYCwgZXhwcik7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrRmllbGRBY2Nlc3Mobm9kZTogQVNUTWVtYmVyTm9kZSwgY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sLCBmaWVsZFN5bWJvbDogRmllbGRTeW1ib2wsIHNjb3BlOiBUeXBlU2NvcGUpOiB2b2lkIHtcblx0XHRpZiAoZmllbGRTeW1ib2wuaXNQdWJsaWMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIXNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgYWNjZXNzIHByaXZhdGUgbWVtYmVyICR7bm9kZS5wcm9wZXJ0eX0gb2YgJHtjbGFzc1N5bWJvbC5uYW1lfWAsIG5vZGUpO1xuXHRcdH1cblxuXHRcdGlmIChzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sICE9PSBmaWVsZFN5bWJvbC5vd25lcikge1xuXHRcdFx0aWYgKHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgaW5zdGFuY2VvZiBDbGFzc1N5bWJvbFxuXHRcdFx0XHQmJiBzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sLnN1cGVyQ2xhc3NTeW1ib2wgIT09IGZpZWxkU3ltYm9sLm93bmVyKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgYWNjZXNzIHByaXZhdGUgbWVtYmVyICR7bm9kZS5wcm9wZXJ0eX0gb2YgJHtjbGFzc1N5bWJvbC5uYW1lfWAsIG5vZGUpO1xuXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0luc3RhbmNlTWV0aG9kQWNjZXNzKG5vZGU6IEFTVE1lbWJlck5vZGUsIGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCwgbWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wsIHNjb3BlOiBUeXBlU2NvcGUpOiB2b2lkIHtcblx0XHRpZiAobWV0aG9kU3ltYm9sLmlzUHVibGljKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCFzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGFjY2VzcyBwcml2YXRlIG1ldGhvZCAke25vZGUucHJvcGVydHl9IG9mICR7Y2xhc3NTeW1ib2wubmFtZX1gLCBub2RlKTtcblx0XHR9XG5cblx0XHRpZiAoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCAhPT0gbWV0aG9kU3ltYm9sLm93bmVyKSB7XG5cdFx0XHRpZiAoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCBpbnN0YW5jZW9mIENsYXNzU3ltYm9sXG5cdFx0XHRcdCYmIHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wuc3VwZXJDbGFzc1N5bWJvbCAhPT0gbWV0aG9kU3ltYm9sLm93bmVyKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgYWNjZXNzIHByaXZhdGUgbWV0aG9kICR7bm9kZS5wcm9wZXJ0eX0gb2YgJHtjbGFzc1N5bWJvbC5uYW1lfWAsIG5vZGUpO1xuXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1N0YXRpY01ldGhvZEFjY2VzcyhjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wsIG1ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sLCBzY29wZTogVHlwZVNjb3BlKTogdm9pZCB7XG5cdFx0aWYgKCFtZXRob2RTeW1ib2wuaXNTdGF0aWMpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgY2FsbCBpbnN0YW5jZSBtZXRob2QgJHtjbGFzc1N5bWJvbC5uYW1lfS4ke21ldGhvZFN5bWJvbC5uYW1lfSBhcyBzdGF0aWMgbWV0aG9kYCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKG1ldGhvZFN5bWJvbC5pc1B1YmxpYykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICghc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBhY2Nlc3MgcHJpdmF0ZSBtZXRob2QgJHttZXRob2RTeW1ib2wubmFtZX0gb2YgJHtjbGFzc1N5bWJvbC5uYW1lfWAsXG5cdFx0XHQgICAgICAgICAgICAgICBtZXRob2RTeW1ib2wubm9kZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgIT09IG1ldGhvZFN5bWJvbC5vd25lcikge1xuXHRcdFx0aWYgKHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgaW5zdGFuY2VvZiBDbGFzc1N5bWJvbFxuXHRcdFx0XHQmJiBzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sLnN1cGVyQ2xhc3NTeW1ib2wgIT09IG1ldGhvZFN5bWJvbC5vd25lcikge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGFjY2VzcyBwcml2YXRlIG1ldGhvZCAke21ldGhvZFN5bWJvbC5uYW1lfSBvZiAke2NsYXNzU3ltYm9sLm5hbWV9YCxcblx0XHRcdFx0ICAgICAgICAgICAgICAgbWV0aG9kU3ltYm9sLm5vZGUpO1xuXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja01lbWJlckV4cHJlc3Npb24obm9kZTogQVNUTWVtYmVyTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGNvbnN0IG9iamVjdFR5cGU6IFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLm9iamVjdCwgc2NvcGUpO1xuXG5cdFx0aWYgKG9iamVjdFR5cGUgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUpIHtcblx0XHRcdGNvbnN0IGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCA9IG9iamVjdFR5cGUuY2xhc3NTeW1ib2w7XG5cblx0XHRcdGNvbnN0IGluc3RhbmNlRmllbGRTeW1ib2w6IEZpZWxkU3ltYm9sIHwgbnVsbCA9IGNsYXNzU3ltYm9sLnJlc29sdmVJbnN0YW5jZUZpZWxkU3ltYm9sKG5vZGUucHJvcGVydHkpO1xuXHRcdFx0aWYgKGluc3RhbmNlRmllbGRTeW1ib2wpIHtcblx0XHRcdFx0dGhpcy5jaGVja0ZpZWxkQWNjZXNzKG5vZGUsIGNsYXNzU3ltYm9sLCBpbnN0YW5jZUZpZWxkU3ltYm9sLCBzY29wZSk7XG5cdFx0XHRcdHJldHVybiBpbnN0YW5jZUZpZWxkU3ltYm9sLmZpZWxkVHlwZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc3RhdGljRmllbGRTeW1ib2w6IEZpZWxkU3ltYm9sIHwgbnVsbCA9IGNsYXNzU3ltYm9sLnJlc29sdmVTdGF0aWNGaWVsZFN5bWJvbChub2RlLnByb3BlcnR5KTtcblx0XHRcdGlmIChzdGF0aWNGaWVsZFN5bWJvbCkge1xuXHRcdFx0XHR0aGlzLmNoZWNrRmllbGRBY2Nlc3Mobm9kZSwgY2xhc3NTeW1ib2wsIHN0YXRpY0ZpZWxkU3ltYm9sLCBzY29wZSk7XG5cdFx0XHRcdHJldHVybiBzdGF0aWNGaWVsZFN5bWJvbC5maWVsZFR5cGU7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMudHlwZUVycm9yKGBVbmtub3duIG1lbWJlciAke25vZGUucHJvcGVydHl9YCwgbm9kZSk7XG5cdFx0fVxuXG5cdFx0dGhpcy50eXBlRXJyb3IoXCJDYW5ub3QgYWNjZXNzIG1lbWJlciBvZiBub24tb2JqZWN0XCIsIG5vZGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1RoaXNFeHByZXNzaW9uKG5vZGU6IEFTVE5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBDbGFzc1JlZlR5cGUge1xuXHRcdGlmIChzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sIGluc3RhbmNlb2YgQ2xhc3NTeW1ib2wpIHtcblx0XHRcdHJldHVybiBuZXcgQ2xhc3NSZWZUeXBlKHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wpO1xuXHRcdH1cblx0XHR0aGlzLnR5cGVFcnJvcigndGhpcyBvdXRzaWRlIG9mIGNsYXNzJywgbm9kZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrSWRlbnRpZmllckV4cHJlc3Npb24obm9kZTogQVNUTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGlmIChzY29wZS5oYXNUeXBlKG5vZGUubmFtZSkpIHtcblx0XHRcdHJldHVybiBzY29wZS5nZXRUeXBlKG5vZGUubmFtZSk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmhhc1N5bWJvbChub2RlLm5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENsYXNzUmVmVHlwZSh0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKG5vZGUubmFtZSkpO1xuXHRcdH1cblx0XHR0aGlzLnR5cGVFcnJvcihgVW5kZWZpbmVkIGlkZW50aWZpZXIgJHtub2RlLm5hbWV9YCwgbm9kZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrTmV3RXhwcmVzc2lvbihub2RlOiBBU1ROZXdOb2RlLCBzY29wZTogVHlwZVNjb3BlLCBleHBlY3RlZFR5cGU6IFR5cGUgfCBudWxsID0gbnVsbCk6IENsYXNzUmVmVHlwZSB7XG5cdFx0Y29uc3QgY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sID0gdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChub2RlLm5hbWUpO1xuXG5cdFx0bGV0IGluc3RhbmNlVHlwZTtcblx0XHRpZiAobm9kZS50eXBlQW5ub3RhdGlvbi50eXBlQXJndW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHRcdGNvbnN0IHR5cGVBcmd1bWVudHMgPSBub2RlXG5cdFx0XHRcdC50eXBlQW5ub3RhdGlvblxuXHRcdFx0XHQudHlwZUFyZ3VtZW50c1xuXHRcdFx0XHQubWFwKHR5cGVBcmd1bWVudCA9PiB0aGlzLndyYXBUeXBlKHR5cGVBcmd1bWVudCwgc2NvcGUpKTtcblxuXHRcdFx0aWYgKHR5cGVBcmd1bWVudHMubGVuZ3RoICE9PSBjbGFzc1N5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5sZW5ndGgpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYFdyb25nIG51bWJlciBvZiB0eXBlIGFyZ3VtZW50c2AsIG5vZGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRpbnN0YW5jZVR5cGUgPSBuZXcgQ2xhc3NSZWZUeXBlKGNsYXNzU3ltYm9sLCB0eXBlQXJndW1lbnRzKTtcblx0XHR9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSkge1xuXHRcdFx0aW5zdGFuY2VUeXBlID0gZXhwZWN0ZWRUeXBlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpbnN0YW5jZVR5cGUgPSBuZXcgQ2xhc3NSZWZUeXBlKFxuXHRcdFx0XHRjbGFzc1N5bWJvbCxcblx0XHRcdFx0Y2xhc3NTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMubWFwKCgpID0+IFR5cGVzLk1JWEVEKVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAoY2xhc3NTeW1ib2wuY29uc3RydWN0b3JNZXRob2RTeW1ib2wpIHtcblx0XHRcdHRoaXMuY2hlY2tDYWxsQXJndW1lbnRzKGNsYXNzU3ltYm9sLmNvbnN0cnVjdG9yTWV0aG9kU3ltYm9sLCBub2RlLmFyZ3VtZW50cywgc2NvcGUpO1xuXHRcdH1cblxuXHRcdGlmIChleHBlY3RlZFR5cGUgJiYgIWV4cGVjdGVkVHlwZS5hY2NlcHRzKGluc3RhbmNlVHlwZSkpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBUeXBlIG1pc21hdGNoOiAke2V4cGVjdGVkVHlwZX0gPD4gJHtpbnN0YW5jZVR5cGV9YCwgbm9kZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGluc3RhbmNlVHlwZTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tBcnJheUV4cHJlc3Npb24obm9kZTogQVNUQXJyYXlOb2RlLCBzY29wZTogVHlwZVNjb3BlLCBleHBlY3RlZFR5cGU6IFR5cGUgfCBudWxsID0gbnVsbCk6IENsYXNzUmVmVHlwZSB7XG5cblx0XHRpZiAobm9kZS5lbGVtZW50cy5sZW5ndGggPT09IDApIHtcblx0XHRcdGlmIChleHBlY3RlZFR5cGUgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUpIHtcblx0XHRcdFx0ZXhwZWN0ZWRUeXBlID0gZXhwZWN0ZWRUeXBlLnR5cGVBcmd1bWVudHNbMF0gfHwgbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXMubmV3QXJyYXlUeXBlT2YoZXhwZWN0ZWRUeXBlIHx8IFR5cGVzLk1JWEVEKTtcblx0XHR9XG5cblx0XHRjb25zdCBjbGFzc1JlZk5hbWUgPSBQcmltaXRpdmVDbGFzc1R5cGVzLmdldENsYXNzUmVmTmFtZShQcmltaXRpdmVDbGFzc1R5cGVzLkFSUkFZKTtcblxuXHRcdGxldCBleHBlY3RlZFR5cGVPZkl0ZW06IFR5cGU7XG5cdFx0aWYgKGV4cGVjdGVkVHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSAmJiBleHBlY3RlZFR5cGUuY2xhc3NTeW1ib2wubmFtZSA9PT0gY2xhc3NSZWZOYW1lKSB7XG5cdFx0XHRleHBlY3RlZFR5cGVPZkl0ZW0gPSBleHBlY3RlZFR5cGUudHlwZUFyZ3VtZW50c1swXSB8fCBUeXBlcy5NSVhFRDtcblx0XHR9IGVsc2UgaWYgKG5vZGUuZWxlbWVudHNbMF0pIHtcblx0XHRcdGV4cGVjdGVkVHlwZU9mSXRlbSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKG5vZGUuZWxlbWVudHNbMF0sIHNjb3BlLCBleHBlY3RlZFR5cGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcignQXJyYXkgZXhwcmVzc2lvbiBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIGVsZW1lbnQnLCBub2RlKTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGl0ZW0gb2Ygbm9kZS5lbGVtZW50cykge1xuXHRcdFx0Y29uc3QgYWN0dWFsVHlwZU9mSXRlbTogVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKGl0ZW0sIHNjb3BlLCBleHBlY3RlZFR5cGVPZkl0ZW0pO1xuXHRcdFx0aWYgKCFleHBlY3RlZFR5cGVPZkl0ZW0uYWNjZXB0cyhhY3R1YWxUeXBlT2ZJdGVtKSkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihcblx0XHRcdFx0XHRgQXJyYXkgZWxlbWVudHMgbXVzdCBoYXZlIHNhbWUgdHlwZSwgZ290ICR7ZXhwZWN0ZWRUeXBlT2ZJdGVtfSBhbmQgJHthY3R1YWxUeXBlT2ZJdGVtfWAsXG5cdFx0XHRcdFx0bm9kZVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLm5ld0FycmF5VHlwZU9mKGV4cGVjdGVkVHlwZU9mSXRlbSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrVW5hcnlFeHByZXNzaW9uKG5vZGU6IEFTVFVuYXJ5Tm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGNvbnN0IG9wZXJhbmQgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLmFyZ3VtZW50LCBzY29wZSk7XG5cdFx0Y29uc3Qgb3AgPSBub2RlLm9wZXJhdG9yO1xuXHRcdGlmIChvcCA9PT0gR1JBTU1BUi5FWENMQU1BVElPTl9NQVJLKSB7XG5cdFx0XHRpZiAob3BlcmFuZC5lcXVhbHMoVHlwZXMuQk9PTEVBTikpIHtcblx0XHRcdFx0cmV0dXJuIFR5cGVzLkJPT0xFQU47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgVW5hcnkgJyEnIHJlcXVpcmVzIGJvb2xlYW4sIGdvdCAke29wZXJhbmQubmFtZX1gLCBub2RlKTtcblx0XHR9XG5cdFx0dGhpcy50eXBlRXJyb3IoYEludmFsaWQgdW5hcnkgb3BlcmF0b3IgJHtvcH1gLCBub2RlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tMYW1iZGFFeHByZXNzaW9uKG5vZGU6IEFTVExhbWJkYU5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBMYW1iZGFUeXBlIHtcblx0XHRjb25zdCBsYW1iZGFTY29wZSA9IG5ldyBUeXBlU2NvcGUoc2NvcGUpO1xuXHRcdGNvbnN0IHBhcmFtZXRlcnMgPSBub2RlLnBhcmFtZXRlcnMubWFwKHBhcmFtZXRlck5vZGUgPT4ge1xuXHRcdFx0Y29uc3QgcGFyYW1ldGVyU3ltYm9sOiBQYXJhbWV0ZXJTeW1ib2wgPSB0aGlzLnBhcmFtZXRlck5vZGVUb1N5bWJvbChwYXJhbWV0ZXJOb2RlKTtcblxuXHRcdFx0bGFtYmRhU2NvcGUuZGVmaW5lVHlwZShwYXJhbWV0ZXJOb2RlLm5hbWUsIHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlKTtcblxuXHRcdFx0cmV0dXJuIHBhcmFtZXRlclN5bWJvbDtcblx0XHR9KTtcblxuXHRcdGlmIChub2RlLmNoaWxkcmVuWzBdKSB7XG5cdFx0XHRyZXR1cm4gbmV3IExhbWJkYVR5cGUocGFyYW1ldGVycywgdGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5jaGlsZHJlblswXSwgbGFtYmRhU2NvcGUpKTtcblx0XHR9XG5cblx0XHR0aGlzLnR5cGVFcnJvcignTGFtYmRhIGV4cHJlc3Npb24gbXVzdCBoYXZlIGEgcmV0dXJuIHR5cGUnLCBub2RlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tDYWxsRXhwcmVzc2lvbihub2RlOiBBU1RDYWxsTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGNvbnN0IGNhbGxlZSA9IG5vZGUuY2FsbGVlO1xuXG5cdFx0aWYgKGNhbGxlZS50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSICYmIGNhbGxlZS5uYW1lID09PSBHUkFNTUFSLlNVUEVSKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jaGVja1N1cGVyQ29uc3RydWN0b3JDYWxsKG5vZGUsIHNjb3BlKTtcblx0XHR9XG5cblx0XHQvLyBDbGFzcy5tZXRob2QoKVxuXHRcdGlmIChjYWxsZWUgaW5zdGFuY2VvZiBBU1RNZW1iZXJOb2RlXG5cdFx0XHQmJiBjYWxsZWUub2JqZWN0LnR5cGUgPT09IEFTVE5vZGVUeXBlLklERU5USUZJRVJcblx0XHRcdCYmIHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKGNhbGxlZS5vYmplY3QubmFtZSlcblx0XHQpIHtcblx0XHRcdHJldHVybiB0aGlzLmNoZWNrU3RhdGljQ2FsbChcblx0XHRcdFx0Y2FsbGVlLm9iamVjdC5uYW1lLFxuXHRcdFx0XHRjYWxsZWUucHJvcGVydHksXG5cdFx0XHRcdG5vZGUuYXJndW1lbnRzLFxuXHRcdFx0XHRzY29wZVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBleHByLm1ldGhvZCgpXG5cdFx0aWYgKGNhbGxlZSBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpIHtcblx0XHRcdHJldHVybiB0aGlzLmNoZWNrSW5zdGFuY2VDYWxsKGNhbGxlZSwgbm9kZS5hcmd1bWVudHMsIHNjb3BlKTtcblx0XHR9XG5cblx0XHRpZiAoY2FsbGVlIGluc3RhbmNlb2YgQVNUTGFtYmRhTm9kZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tMYW1iZGFDYWxsKHRoaXMuY2hlY2tMYW1iZGFFeHByZXNzaW9uKGNhbGxlZSwgc2NvcGUpLCBub2RlLmFyZ3VtZW50cywgc2NvcGUpO1xuXHRcdH1cblxuXHRcdC8vIElkZW50aWZpZXI6IFZhcmlhYmxlIC8gTGFtYmRhXG5cdFx0aWYgKGNhbGxlZS50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0XHRpZiAoc2NvcGUuaGFzVHlwZShjYWxsZWUubmFtZSkpIHtcblx0XHRcdFx0Y29uc3QgdHlwZSA9IHNjb3BlLmdldFR5cGUoY2FsbGVlLm5hbWUpO1xuXHRcdFx0XHRpZiAodHlwZSBpbnN0YW5jZW9mIExhbWJkYVR5cGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0xhbWJkYUNhbGwodHlwZSwgbm9kZS5hcmd1bWVudHMsIHNjb3BlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNhbGwgbm9uLWZ1bmN0aW9uICR7Y2FsbGVlLm5hbWV9YCwgbm9kZSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZhbGxiYWNrOiBnbG9iYWxlIEZ1bmt0aW9uXG5cdFx0XHRyZXR1cm4gdGhpcy5jaGVja0Z1bmN0aW9uQ2FsbChjYWxsZWUubmFtZSwgbm9kZS5hcmd1bWVudHMsIHNjb3BlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gVHlwZXMuTUlYRUQ7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrU3VwZXJDb25zdHJ1Y3RvckNhbGwobm9kZTogQVNUQ2FsbE5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRjb25zdCBjdXJyZW50Q2xhc3MgPSBzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sO1xuXG5cdFx0aWYgKCEoY3VycmVudENsYXNzIGluc3RhbmNlb2YgQ2xhc3NTeW1ib2wpKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcignc3VwZXIoKSB1c2VkIG91dHNpZGUgb2YgY2xhc3MnLCBub2RlKTtcblx0XHR9XG5cblx0XHRpZiAoIWN1cnJlbnRDbGFzcy5zdXBlckNsYXNzKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcignc3VwZXIoKSB1c2VkIG91dHNpZGUgb2YgY2xhc3MgaGllcmFyY2h5Jywgbm9kZSk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc3VwZXJTeW1ib2w6IENsYXNzU3ltYm9sID0gdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChjdXJyZW50Q2xhc3Muc3VwZXJDbGFzcyk7XG5cdFx0aWYgKCFzdXBlclN5bWJvbC5jb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbCkge1xuXHRcdFx0aWYgKG5vZGUuYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoJ1N1cGVyIGNvbnN0cnVjdG9yIHRha2VzIG5vIGFyZ3VtZW50cycsIG5vZGUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIFR5cGVzLlZPSUQ7XG5cdFx0fVxuXG5cdFx0dGhpcy5jaGVja0NhbGxBcmd1bWVudHMoc3VwZXJTeW1ib2wuY29uc3RydWN0b3JNZXRob2RTeW1ib2wsIG5vZGUuYXJndW1lbnRzLCBzY29wZSk7XG5cblx0XHRyZXR1cm4gVHlwZXMuVk9JRDtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tDYWxsT25OdWxsT2JqZWN0VHlwZShvYmplY3RUeXBlOiBUeXBlLCBub2RlOiBBU1ROb2RlKTogdm9pZCB7XG5cdFx0aWYgKG9iamVjdFR5cGUuZXF1YWxzKFR5cGVzLk5VTEwpKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNhbGwgbWV0aG9kIG9uIG51bGxgLCBub2RlKTtcblx0XHR9XG5cdFx0aWYgKG9iamVjdFR5cGUgaW5zdGFuY2VvZiBOdWxsYWJsZVR5cGUpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgY2FsbCBtZXRob2Qgb24gbnVsbGFibGUgdHlwZSAke29iamVjdFR5cGV9YCwgbm9kZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0luc3RhbmNlQ2FsbChjYWxsZWU6IEFTVE1lbWJlck5vZGUsIGNhbGxBcmd1bWVudHM6IEFTVE5vZGVbXSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGxldCBvYmplY3RUeXBlOiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24oY2FsbGVlLm9iamVjdCwgc2NvcGUpO1xuXG5cdFx0b2JqZWN0VHlwZSA9IEF1dG9ib3hpbmcuYXV0b2JveElmTmVlZGVkKG9iamVjdFR5cGUsIHRoaXMub2JqZWN0UmVnaXN0cnkpO1xuXG5cdFx0dGhpcy5jaGVja0NhbGxPbk51bGxPYmplY3RUeXBlKG9iamVjdFR5cGUsIGNhbGxlZSk7XG5cblx0XHRpZiAob2JqZWN0VHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSkge1xuXHRcdFx0Y29uc3QgbWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wgPSB0aGlzLnJlc29sdmVJbnN0YW5jZU1ldGhvZGUoXG5cdFx0XHRcdG9iamVjdFR5cGUuY2xhc3NTeW1ib2wsXG5cdFx0XHRcdGNhbGxlZS5wcm9wZXJ0eVxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKG1ldGhvZFN5bWJvbC5pc1N0YXRpYykge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNhbGwgc3RhdGljIG1ldGhvZCAke2NhbGxlZS5wcm9wZXJ0eX0gb24gaW5zdGFuY2Ugb2YgJHtjYWxsZWUub2JqZWN0Lm5hbWV9YCxcblx0XHRcdFx0ICAgICAgICAgICAgICAgY2FsbGVlKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5jaGVja0luc3RhbmNlTWV0aG9kQWNjZXNzKGNhbGxlZSwgb2JqZWN0VHlwZS5jbGFzc1N5bWJvbCwgbWV0aG9kU3ltYm9sLCBzY29wZSk7XG5cblx0XHRcdGNvbnN0IG93bmVyOiBDbGFzc1N5bWJvbCB8IEludGVyZmFjZVN5bWJvbCB8IG51bGwgPSBtZXRob2RTeW1ib2wub3duZXI7XG5cblx0XHRcdGlmIChvd25lciA9PT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNhbGwgbWV0aG9kIG9uIG5vbi1vYmplY3RgLCBjYWxsZWUpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzdWJzdGl0dXRpb25NYXA6IE1hcDxzdHJpbmcsIFR5cGU+ID0gYnVpbGRUeXBlU3Vic3RpdHV0aW9uTWFwKFxuXHRcdFx0XHRvd25lci50eXBlUGFyYW1ldGVyU3ltYm9scyxcblx0XHRcdFx0b2JqZWN0VHlwZS50eXBlQXJndW1lbnRzXG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLmNoZWNrQ2FsbEFyZ3VtZW50cyhtZXRob2RTeW1ib2wsIGNhbGxBcmd1bWVudHMsIHNjb3BlLCBzdWJzdGl0dXRpb25NYXApO1xuXG5cdFx0XHRyZXR1cm4gc3Vic3RpdHV0ZVR5cGUobWV0aG9kU3ltYm9sLnJldHVyblR5cGUsIHN1YnN0aXR1dGlvbk1hcCk7XG5cdFx0fVxuXG5cdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBjYWxsIG1ldGhvZCBvbiBub24tb2JqZWN0YCwgY2FsbGVlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tTdGF0aWNDYWxsKGNsYXNzTmFtZTogc3RyaW5nLCBtZXRob2ROYW1lOiBzdHJpbmcsIGNhbGxBcmd1bWVudHM6IEFTVE5vZGVbXSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGNvbnN0IGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCA9IHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2woY2xhc3NOYW1lKTtcblxuXHRcdGNvbnN0IG1ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sIHwgbnVsbCA9IGNsYXNzU3ltYm9sLnN0YXRpY01ldGhvZFN5bWJvbHMuZ2V0KG1ldGhvZE5hbWUpIHx8IG51bGw7XG5cdFx0aWYgKCFtZXRob2RTeW1ib2wpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBVbmtub3duIHN0YXRpYyBtZXRob2QgJHtjbGFzc05hbWV9LiR7bWV0aG9kTmFtZX1gKTtcblx0XHR9XG5cblx0XHR0aGlzLmNoZWNrU3RhdGljTWV0aG9kQWNjZXNzKGNsYXNzU3ltYm9sLCBtZXRob2RTeW1ib2wsIHNjb3BlKVxuXG5cdFx0dGhpcy5jaGVja0NhbGxBcmd1bWVudHMobWV0aG9kU3ltYm9sLCBjYWxsQXJndW1lbnRzLCBzY29wZSk7XG5cblx0XHRyZXR1cm4gbWV0aG9kU3ltYm9sLnJldHVyblR5cGU7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrTGFtYmRhQ2FsbChsYW1iZGE6IExhbWJkYVR5cGUsIGNhbGxBcmd1bWVudHM6IEFTVE5vZGVbXSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXG5cdFx0dGhpcy5jaGVja0NhbGxBcmd1bWVudHMobGFtYmRhLCBjYWxsQXJndW1lbnRzLCBzY29wZSk7XG5cblx0XHRyZXR1cm4gbGFtYmRhLnJldHVyblR5cGU7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrRnVuY3Rpb25DYWxsKG5hbWU6IHN0cmluZywgY2FsbEFyZ3VtZW50czogQVNUTm9kZVtdLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0aWYgKCFnbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeS5oYXMobmFtZSkpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBVbmtub3duIGZ1bmN0aW9uICR7bmFtZX1gKTtcblx0XHR9XG5cblx0XHRjb25zdCBuYXRpdmVGdW5jdGlvbjogTmF0aXZlRnVuY3Rpb24gPSBnbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeS5nZXQobmFtZSk7XG5cblx0XHR0aGlzLmNoZWNrQ2FsbEFyZ3VtZW50cyhuYXRpdmVGdW5jdGlvbiwgY2FsbEFyZ3VtZW50cywgc2NvcGUpO1xuXG5cdFx0cmV0dXJuIG5hdGl2ZUZ1bmN0aW9uLnJldHVyblR5cGVcblx0XHRcdD8gdGhpcy53cmFwVHlwZShuYXRpdmVGdW5jdGlvbi5yZXR1cm5UeXBlLCBzY29wZSlcblx0XHRcdDogVHlwZXMuVk9JRDtcblx0fVxuXG5cdHByaXZhdGUgcGFyYW1ldGVyc1N5bWJvbHNGcm9tQ2FsbGFibGVTeW1ib2woY2FsbGFibGVTeW1ib2w6IE1ldGhvZFN5bWJvbCB8IExhbWJkYVR5cGUgfCBOYXRpdmVGdW5jdGlvbik6IFBhcmFtZXRlclN5bWJvbFtdIHtcblx0XHRpZiAoY2FsbGFibGVTeW1ib2wgaW5zdGFuY2VvZiBOYXRpdmVGdW5jdGlvbikge1xuXHRcdFx0cmV0dXJuIGNhbGxhYmxlU3ltYm9sXG5cdFx0XHRcdC5wYXJhbWV0ZXJOb2Rlc1xuXHRcdFx0XHQubWFwKHBhcmFtZXRlck5vZGUgPT4gdGhpcy5wYXJhbWV0ZXJOb2RlVG9TeW1ib2wocGFyYW1ldGVyTm9kZSkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjYWxsYWJsZVN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzXG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQ2FsbEFyZ3VtZW50cyhcblx0XHRjYWxsYWJsZVN5bWJvbDogTWV0aG9kU3ltYm9sIHwgTGFtYmRhVHlwZSB8IE5hdGl2ZUZ1bmN0aW9uLFxuXHRcdGNhbGxBcmd1bWVudHM6IEFTVE5vZGVbXSxcblx0XHRzY29wZTogVHlwZVNjb3BlLFxuXHRcdHN1YnN0aXR1dGlvbk1hcDogTWFwPHN0cmluZywgVHlwZT4gPSBuZXcgTWFwKClcblx0KTogdm9pZCB7XG5cdFx0Y29uc3QgY2FsbFNjb3BlID0gbmV3IFR5cGVTY29wZShzY29wZSk7XG5cdFx0bGV0IHBhcmFtZXRlclN5bWJvbHMgPSB0aGlzLnBhcmFtZXRlcnNTeW1ib2xzRnJvbUNhbGxhYmxlU3ltYm9sKGNhbGxhYmxlU3ltYm9sKTtcblxuXHRcdGlmIChjYWxsQXJndW1lbnRzLmxlbmd0aCA+IHBhcmFtZXRlclN5bWJvbHMubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihcIkFyZ3VtZW50IGNvdW50IG1pc21hdGNoXCIpO1xuXHRcdH1cblxuXHRcdGxldCBhY3R1YWxUeXBlOiBUeXBlO1xuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBwYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBwYXJhbWV0ZXJTeW1ib2w6IFBhcmFtZXRlclN5bWJvbCB8IG51bGwgPSBwYXJhbWV0ZXJTeW1ib2xzW2ldIHx8IG51bGw7XG5cdFx0XHRjb25zdCBjYWxsQXJndW1lbnQ6IEFTVE5vZGUgfCBudWxsID0gY2FsbEFyZ3VtZW50c1tpXSB8fCBudWxsO1xuXG5cdFx0XHRpZiAocGFyYW1ldGVyU3ltYm9sKSB7XG5cdFx0XHRcdGNvbnN0IGV4cGVjdGVkVHlwZTogVHlwZSA9IHN1YnN0aXR1dGVUeXBlKHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlLCBzdWJzdGl0dXRpb25NYXApO1xuXG5cdFx0XHRcdGlmIChjYWxsQXJndW1lbnQpIHtcblx0XHRcdFx0XHRhY3R1YWxUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24oY2FsbEFyZ3VtZW50LCBjYWxsU2NvcGUsIGV4cGVjdGVkVHlwZSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAocGFyYW1ldGVyU3ltYm9sLmRlZmF1bHRUeXBlKSB7XG5cdFx0XHRcdFx0YWN0dWFsVHlwZSA9IHBhcmFtZXRlclN5bWJvbC5kZWZhdWx0VHlwZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgTWlzc2luZyBhcmd1bWVudCAke3BhcmFtZXRlclN5bWJvbC5uYW1lfWAsIGNhbGxBcmd1bWVudCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmNoZWNrQXNzaWduYWJsZShleHBlY3RlZFR5cGUsIGFjdHVhbFR5cGUsIGNhbGxBcmd1bWVudHNbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tBc3NpZ25hYmxlKGV4cGVjdGVkVHlwZTogVHlwZSwgYWN0dWFsVHlwZTogVHlwZSwgbm9kZTogQVNUTm9kZSB8IG51bGwgPSBudWxsKTogdm9pZCB7XG5cdFx0aWYgKGV4cGVjdGVkVHlwZS5lcXVhbHMoYWN0dWFsVHlwZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoZXhwZWN0ZWRUeXBlIGluc3RhbmNlb2YgTWl4ZWRUeXBlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGV4cGVjdGVkVHlwZSBpbnN0YW5jZW9mIE51bGxhYmxlVHlwZSkge1xuXHRcdFx0aWYgKGFjdHVhbFR5cGUgPT09IFR5cGVzLk5VTEwpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGV4cGVjdGVkVHlwZS5pbm5lci5hY2NlcHRzKGFjdHVhbFR5cGUpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZXhwZWN0ZWRUeXBlLmFjY2VwdHMoYWN0dWFsVHlwZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnR5cGVFcnJvcihgVHlwZSBtaXNtYXRjaDogJHtleHBlY3RlZFR5cGV9IDw+ICR7YWN0dWFsVHlwZX1gLCBub2RlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tCb2R5KGNoaWxkcmVuOiBBU1ROb2RlW10sIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRsZXQgcmV0dXJuVHlwZTogVHlwZSA9IFR5cGVzLk1JWEVEO1xuXG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuXHRcdFx0Y29uc3Qgc3RhdGVtZW50UmVzdWx0ID0gdGhpcy5jaGVja1N0YXRlbWVudChjaGlsZCwgc2NvcGUpO1xuXHRcdFx0aWYgKHN0YXRlbWVudFJlc3VsdC5kaWRSZXR1cm4gJiYgc3RhdGVtZW50UmVzdWx0LnJldHVyblR5cGUpIHtcblx0XHRcdFx0cmV0dXJuVHlwZSA9IHN0YXRlbWVudFJlc3VsdC5yZXR1cm5UeXBlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXR1cm5UeXBlO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1JldHVyblR5cGUoZXhwZWN0ZWRUeXBlOiBUeXBlLCBhY3R1YWxUeXBlOiBUeXBlLCBub2RlOiBBU1RNZXRob2ROb2RlKTogdm9pZCB7XG5cdFx0Ly8gdm9pZC1NZXRob2RlXG5cdFx0aWYgKGV4cGVjdGVkVHlwZSA9PT0gVHlwZXMuVk9JRCkge1xuXHRcdFx0aWYgKGFjdHVhbFR5cGUgIT09IFR5cGVzLk1JWEVEICYmIGFjdHVhbFR5cGUgIT09IFR5cGVzLlZPSUQpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCByZXR1cm4gJHthY3R1YWxUeXBlfSBmcm9tIHZvaWQgbWV0aG9kYCwgbm9kZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8ga2VpbiByZXR1cm4gdm9yaGFuZGVuXG5cdFx0aWYgKGFjdHVhbFR5cGUgPT09IFR5cGVzLk1JWEVEKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgTWlzc2luZyByZXR1cm4gc3RhdGVtZW50IChleHBlY3RlZCAke2V4cGVjdGVkVHlwZX0pYCwgbm9kZSk7XG5cdFx0fVxuXG5cdFx0Ly8gdHlwLWlua29tcGF0aWJlbFxuXHRcdGlmICghZXhwZWN0ZWRUeXBlLmFjY2VwdHMoYWN0dWFsVHlwZSkpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBSZXR1cm4gdHlwZSBtaXNtYXRjaDogZXhwZWN0ZWQgJHtleHBlY3RlZFR5cGV9LCBnb3QgJHthY3R1YWxUeXBlfWAsIG5vZGUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tWRG9tTm9kZShub2RlOiBBU1RWRG9tTm9kZSk6IFR5cGUge1xuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCA9IHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2wobm9kZS50YWcpO1xuXG5cdFx0XHRjb25zdCBtZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCA9IHRoaXMucmVzb2x2ZUluc3RhbmNlTWV0aG9kZShjbGFzc1N5bWJvbCwgJ3JlbmRlcicpO1xuXG5cdFx0XHRpZiAoIW1ldGhvZFN5bWJvbCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ29tcG9uZW50ICcke25vZGUudGFnfScgaGFzIG5vIHJlbmRlcigpIG1ldGhvZGAsIG5vZGUpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmNoZWNrQXNzaWduYWJsZShtZXRob2RTeW1ib2wucmV0dXJuVHlwZSwgVHlwZXMuVk5PREUsIG5vZGUpO1xuXG5cdFx0XHRyZXR1cm4gVHlwZXMuVk5PREU7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdH1cblxuXHRcdHJldHVybiBUeXBlcy5WTk9ERTtcblx0fVxuXG5cdHByaXZhdGUgcmVzb2x2ZUluc3RhbmNlTWV0aG9kZShjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wsIG1ldGhvZE5hbWU6IHN0cmluZyk6IE1ldGhvZFN5bWJvbCB7XG5cdFx0LyoqIEB0eXBlIHtNZXRob2RTeW1ib2x8bnVsbH0gKi9cblx0XHRjb25zdCBtZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCB8IG51bGwgPSB0aGlzLnJlc29sdmVJbkhpZXJhcmNoeShcblx0XHRcdGNsYXNzU3ltYm9sLFxuXHRcdFx0Y2xhc3NTeW1ib2wgPT4gY2xhc3NTeW1ib2wuaW5zdGFuY2VNZXRob2RTeW1ib2xzLmdldChtZXRob2ROYW1lKSB8fCBudWxsXG5cdFx0KTtcblxuXHRcdGlmICghbWV0aG9kU3ltYm9sKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgVW5rbm93biBtZXRob2QgJHtjbGFzc1N5bWJvbC5uYW1lfS4ke21ldGhvZE5hbWV9YCwgY2xhc3NTeW1ib2wubm9kZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1ldGhvZFN5bWJvbDtcblx0fVxuXG5cdHByaXZhdGUgcmVzb2x2ZUluSGllcmFyY2h5KGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCwgcmVzb2x2ZXI6IChjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wpID0+IGFueSk6IGFueSB7XG5cdFx0bGV0IGN1cnJlbnQ6IENsYXNzU3ltYm9sIHwgbnVsbCA9IGNsYXNzU3ltYm9sO1xuXG5cdFx0d2hpbGUgKGN1cnJlbnQpIHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IHJlc29sdmVyKGN1cnJlbnQpO1xuXHRcdFx0aWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkICYmIHJlc3VsdCAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWN1cnJlbnQuc3VwZXJDbGFzcykge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0Y3VycmVudCA9IHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2woY3VycmVudC5zdXBlckNsYXNzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHByaXZhdGUgbmV3QXJyYXlUeXBlT2YoZWxlbWVudFR5cGU6IFR5cGUpOiBDbGFzc1JlZlR5cGUge1xuXHRcdGNvbnN0IGNsYXNzTmFtZTogc3RyaW5nIHwgbnVsbCA9IFByaW1pdGl2ZUNsYXNzVHlwZXMuZ2V0Q2xhc3NSZWZOYW1lKFByaW1pdGl2ZUNsYXNzVHlwZXMuQVJSQVkpO1xuXG5cdFx0aWYgKGNsYXNzTmFtZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoJ0ludGVybmFsIGVycm9yOiBDYW5ub3QgZmluZCBjbGFzcyBuYW1lIGZvciBhcnJheSB0eXBlLicpO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgQ2xhc3NSZWZUeXBlKHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2woY2xhc3NOYW1lKSwgW2VsZW1lbnRUeXBlXSk7XG5cdH1cblxuXHRwcml2YXRlIHdyYXBUeXBlKHR5cGU6IEFTVFR5cGVOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0cmV0dXJuIHdyYXBUeXBlKHR5cGUsIHRoaXMub2JqZWN0UmVnaXN0cnksIHNjb3BlKTtcblx0fVxuXG5cdHByaXZhdGUgcGFyYW1ldGVyTm9kZVRvU3ltYm9sKHBhcmFtZXRlck5vZGU6IEFTVFBhcmFtZXRlck5vZGUsIHNjb3BlOiBUeXBlU2NvcGUgPSBuZXcgVHlwZVNjb3BlKCkpOiBQYXJhbWV0ZXJTeW1ib2wge1xuXHRcdGNvbnN0IHBhcmFtZXRlclR5cGUgPSBwYXJhbWV0ZXJOb2RlLnR5cGVBbm5vdGF0aW9uXG5cdFx0XHQ/IHRoaXMud3JhcFR5cGUocGFyYW1ldGVyTm9kZS50eXBlQW5ub3RhdGlvbiwgc2NvcGUpXG5cdFx0XHQ6IFR5cGVzLk1JWEVEO1xuXG5cdFx0bGV0IGRlZmF1bHRUeXBlID0gbnVsbDtcblx0XHRpZiAocGFyYW1ldGVyTm9kZS5kZWZhdWx0VmFsdWUpIHtcblx0XHRcdGRlZmF1bHRUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24ocGFyYW1ldGVyTm9kZS5kZWZhdWx0VmFsdWUsIG5ldyBUeXBlU2NvcGUoKSk7XG5cblx0XHRcdGlmIChkZWZhdWx0VHlwZVxuXHRcdFx0XHQmJiAhcGFyYW1ldGVyVHlwZS5lcXVhbHMoVHlwZXMuTUlYRUQpXG5cdFx0XHRcdCYmICFwYXJhbWV0ZXJUeXBlLmVxdWFscyhkZWZhdWx0VHlwZSkpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoXG5cdFx0XHRcdFx0YERlZmF1bHQgdmFsdWUgZm9yIHBhcmFtZXRlciAnJHtwYXJhbWV0ZXJOb2RlLm5hbWV9JyBkb2VzIG5vdCBtYXRjaCB0eXBlLmAsXG5cdFx0XHRcdFx0cGFyYW1ldGVyTm9kZVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgUGFyYW1ldGVyU3ltYm9sKFxuXHRcdFx0cGFyYW1ldGVyTm9kZS5uYW1lLFxuXHRcdFx0cGFyYW1ldGVyVHlwZSxcblx0XHRcdGRlZmF1bHRUeXBlLFxuXHRcdFx0cGFyYW1ldGVyTm9kZVxuXHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIHJlZ2lzdGVyQ2xhc3NTeW1ib2woY2xhc3NOb2RlOiBBU1RDbGFzc05vZGUpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5oYXNTeW1ib2woY2xhc3NOb2RlLm5hbWUpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgY2xhc3NTY29wZSA9IG5ldyBUeXBlU2NvcGUoKTtcblx0XHRjb25zdCBjbGFzc1N5bWJvbCA9IG5ldyBDbGFzc1N5bWJvbChjbGFzc05vZGUpO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGlmIChjbGFzc1N5bWJvbC5zdXBlckNsYXNzKSB7XG5cdFx0XHRcdGNsYXNzU3ltYm9sLnN1cGVyQ2xhc3NTeW1ib2wgPSB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKGNsYXNzU3ltYm9sLnN1cGVyQ2xhc3MpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHR9XG5cblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmFkZENsYXNzU3ltYm9sKGNsYXNzU3ltYm9sKTtcblxuXHRcdGNsYXNzTm9kZS50eXBlUGFyYW1ldGVycy5mb3JFYWNoKG5hbWUgPT4ge1xuXHRcdFx0Y2xhc3NTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMucHVzaChuZXcgVHlwZVBhcmFtZXRlclN5bWJvbChuYW1lKSk7XG5cdFx0XHRjbGFzc1Njb3BlLmRlZmluZVR5cGVCaW5kaW5nKG5hbWUsIG5ldyBUeXBlVmFyaWFibGUobmFtZSkpO1xuXHRcdH0pO1xuXG5cdFx0Zm9yIChjb25zdCB0eXBlTm9kZSBvZiBjbGFzc05vZGUuaW1wbGVtZW50c0ludGVyZmFjZXMpIHtcblx0XHRcdGNvbnN0IGludGVyZmFjZVR5cGU6IFR5cGUgPSB0aGlzLndyYXBUeXBlKHR5cGVOb2RlLCBjbGFzc1Njb3BlKTtcblx0XHRcdGlmIChpbnRlcmZhY2VUeXBlIGluc3RhbmNlb2YgSW50ZXJmYWNlUmVmVHlwZSkge1xuXHRcdFx0XHRjbGFzc1N5bWJvbC5pbXBsZW1lbnRzSW50ZXJmYWNlcy5wdXNoKGludGVyZmFjZVR5cGUpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHRoaXMudHlwZUVycm9yKGBFeHBlY3RlZCBpbnRlcmZhY2UgdHlwZSwgZ290ICR7aW50ZXJmYWNlVHlwZX1gLCB0eXBlTm9kZSk7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBtZW1iZXJOb2RlIG9mIGNsYXNzTm9kZS5jaGlsZHJlbikge1xuXHRcdFx0aWYgKG1lbWJlck5vZGUudHlwZSA9PT0gQVNUTm9kZVR5cGUuRklFTEQgJiYgbWVtYmVyTm9kZSBpbnN0YW5jZW9mIEFTVEZpZWxkTm9kZSkge1xuXHRcdFx0XHRjb25zdCB0YXJnZXQ6IE1hcDxzdHJpbmcsIEZpZWxkU3ltYm9sPiA9IG1lbWJlck5vZGUubW9kaWZpZXJzLnN0YXRpY1xuXHRcdFx0XHRcdD8gY2xhc3NTeW1ib2wuc3RhdGljRmllbGRTeW1ib2xzXG5cdFx0XHRcdFx0OiBjbGFzc1N5bWJvbC5pbnN0YW5jZUZpZWxkU3ltYm9scztcblxuXHRcdFx0XHRjb25zdCBmaWVsZFN5bWJvbCA9IG5ldyBGaWVsZFN5bWJvbChcblx0XHRcdFx0XHRtZW1iZXJOb2RlLFxuXHRcdFx0XHRcdG1lbWJlck5vZGUuZmllbGRUeXBlXG5cdFx0XHRcdFx0XHQ/IHRoaXMud3JhcFR5cGUobWVtYmVyTm9kZS5maWVsZFR5cGUsIGNsYXNzU2NvcGUpXG5cdFx0XHRcdFx0XHQ6IFR5cGVzLk1JWEVEXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0ZmllbGRTeW1ib2wub3duZXIgPSBjbGFzc1N5bWJvbDtcblxuXHRcdFx0XHR0YXJnZXQuc2V0KGZpZWxkU3ltYm9sLm5hbWUsIGZpZWxkU3ltYm9sKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKChtZW1iZXJOb2RlLnR5cGUgPT09IEFTVE5vZGVUeXBlLk1FVEhPRCB8fCBtZW1iZXJOb2RlLnR5cGUgPT09IEFTVE5vZGVUeXBlLkNPTlNUUlVDVE9SKVxuXHRcdFx0XHQmJiBtZW1iZXJOb2RlIGluc3RhbmNlb2YgQVNUTWV0aG9kTm9kZSkge1xuXG5cdFx0XHRcdGNvbnN0IG1ldGhvZFNjb3BlID0gbmV3IFR5cGVTY29wZShjbGFzc1Njb3BlKTtcblx0XHRcdFx0Y29uc3QgbWV0aG9kU3ltYm9sID0gbmV3IE1ldGhvZFN5bWJvbChtZW1iZXJOb2RlKTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wub3duZXIgPSBjbGFzc1N5bWJvbDtcblxuXHRcdFx0XHRtZW1iZXJOb2RlLnR5cGVQYXJhbWV0ZXJzLmZvckVhY2gobmFtZSA9PiB7XG5cdFx0XHRcdFx0bWV0aG9kU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLnB1c2gobmV3IFR5cGVQYXJhbWV0ZXJTeW1ib2wobmFtZSkpO1xuXHRcdFx0XHRcdG1ldGhvZFNjb3BlLmRlZmluZVR5cGVCaW5kaW5nKG5hbWUsIG5ldyBUeXBlVmFyaWFibGUobmFtZSkpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9scyA9IG1lbWJlck5vZGVcblx0XHRcdFx0XHQucGFyYW1ldGVyc1xuXHRcdFx0XHRcdC5tYXAocGFyYW1ldGVyTm9kZSA9PiB0aGlzLnBhcmFtZXRlck5vZGVUb1N5bWJvbChwYXJhbWV0ZXJOb2RlLCBtZXRob2RTY29wZSkpO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlID0gbWVtYmVyTm9kZS5yZXR1cm5UeXBlXG5cdFx0XHRcdFx0PyB0aGlzLndyYXBUeXBlKG1lbWJlck5vZGUucmV0dXJuVHlwZSwgbWV0aG9kU2NvcGUpXG5cdFx0XHRcdFx0OiBUeXBlcy5WT0lEO1xuXG5cdFx0XHRcdGlmIChtZW1iZXJOb2RlLnR5cGUgPT09IEFTVE5vZGVUeXBlLkNPTlNUUlVDVE9SKSB7XG5cdFx0XHRcdFx0Y2xhc3NTeW1ib2wuY29uc3RydWN0b3JNZXRob2RTeW1ib2wgPSBtZXRob2RTeW1ib2w7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gbWV0aG9kU3ltYm9sLmlzU3RhdGljXG5cdFx0XHRcdFx0XHQ/IGNsYXNzU3ltYm9sLnN0YXRpY01ldGhvZFN5bWJvbHNcblx0XHRcdFx0XHRcdDogY2xhc3NTeW1ib2wuaW5zdGFuY2VNZXRob2RTeW1ib2xzO1xuXG5cdFx0XHRcdFx0dGFyZ2V0LnNldChtZW1iZXJOb2RlLm5hbWUsIG1ldGhvZFN5bWJvbCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJlZ2lzdGVySW50ZXJmYWNlU3ltYm9sKGludGVyZmFjZU5vZGU6IEFTVEludGVyZmFjZU5vZGUpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5oYXNTeW1ib2woaW50ZXJmYWNlTm9kZS5uYW1lKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGludGVyZmFjZVNjb3BlID0gbmV3IFR5cGVTY29wZSgpO1xuXHRcdGNvbnN0IGludGVyZmFjZVN5bWJvbCA9IG5ldyBJbnRlcmZhY2VTeW1ib2woaW50ZXJmYWNlTm9kZSk7XG5cblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmFkZEludGVyZmFjZVN5bWJvbChpbnRlcmZhY2VTeW1ib2wpO1xuXG5cdFx0aW50ZXJmYWNlTm9kZS50eXBlUGFyYW1ldGVycy5mb3JFYWNoKG5hbWUgPT4ge1xuXHRcdFx0aW50ZXJmYWNlU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLnB1c2gobmV3IFR5cGVQYXJhbWV0ZXJTeW1ib2wobmFtZSkpO1xuXHRcdFx0aW50ZXJmYWNlU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcobmFtZSwgbmV3IFR5cGVWYXJpYWJsZShuYW1lKSk7XG5cdFx0fSk7XG5cblx0XHRmb3IgKGNvbnN0IGludGVyZmFjZU5hbWUgb2YgaW50ZXJmYWNlTm9kZS5leHRlbmRzSW50ZXJmYWNlcykge1xuXHRcdFx0Y29uc3QgaW50ZXJmYWNlU3ltYm9sOiBJbnRlcmZhY2VTeW1ib2wgPSB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldEludGVyYWNlU3ltYm9sKGludGVyZmFjZU5hbWUpO1xuXG5cdFx0XHRpbnRlcmZhY2VTeW1ib2wuZXh0ZW5kc0ludGVyZmFjZXMucHVzaChpbnRlcmZhY2VTeW1ib2wpO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgbWVtYmVyTm9kZSBvZiBpbnRlcmZhY2VOb2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobWVtYmVyTm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5GSUVMRCAmJiBtZW1iZXJOb2RlIGluc3RhbmNlb2YgQVNURmllbGROb2RlKSB7XG5cdFx0XHRcdGNvbnN0IGZpZWxkU3ltYm9sID0gbmV3IEZpZWxkU3ltYm9sKFxuXHRcdFx0XHRcdG1lbWJlck5vZGUsXG5cdFx0XHRcdFx0bWVtYmVyTm9kZS5maWVsZFR5cGVcblx0XHRcdFx0XHRcdD8gdGhpcy53cmFwVHlwZShtZW1iZXJOb2RlLmZpZWxkVHlwZSwgaW50ZXJmYWNlU2NvcGUpXG5cdFx0XHRcdFx0XHQ6IFR5cGVzLk1JWEVEXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0ZmllbGRTeW1ib2wub3duZXIgPSBpbnRlcmZhY2VTeW1ib2w7XG5cblx0XHRcdFx0aW50ZXJmYWNlU3ltYm9sLnN0YXRpY0ZpZWxkU3ltYm9scy5zZXQoZmllbGRTeW1ib2wubmFtZSwgZmllbGRTeW1ib2wpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoKG1lbWJlck5vZGUudHlwZSA9PT0gQVNUTm9kZVR5cGUuTUVUSE9EKSAmJiBtZW1iZXJOb2RlIGluc3RhbmNlb2YgQVNUTWV0aG9kTm9kZSkge1xuXG5cdFx0XHRcdGNvbnN0IG1ldGhvZFNjb3BlID0gbmV3IFR5cGVTY29wZShpbnRlcmZhY2VTY29wZSk7XG5cdFx0XHRcdGNvbnN0IG1ldGhvZFN5bWJvbCA9IG5ldyBNZXRob2RTeW1ib2wobWVtYmVyTm9kZSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLm93bmVyID0gaW50ZXJmYWNlU3ltYm9sO1xuXG5cdFx0XHRcdG1lbWJlck5vZGUudHlwZVBhcmFtZXRlcnMuZm9yRWFjaChuYW1lID0+IHtcblx0XHRcdFx0XHRtZXRob2RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMucHVzaChuZXcgVHlwZVBhcmFtZXRlclN5bWJvbChuYW1lKSk7XG5cdFx0XHRcdFx0bWV0aG9kU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcobmFtZSwgbmV3IFR5cGVWYXJpYWJsZShuYW1lKSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzID0gbWVtYmVyTm9kZVxuXHRcdFx0XHRcdC5wYXJhbWV0ZXJzXG5cdFx0XHRcdFx0Lm1hcChwYXJhbWV0ZXJOb2RlID0+IHRoaXMucGFyYW1ldGVyTm9kZVRvU3ltYm9sKHBhcmFtZXRlck5vZGUsIG1ldGhvZFNjb3BlKSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnJldHVyblR5cGUgPSBtZW1iZXJOb2RlLnJldHVyblR5cGVcblx0XHRcdFx0XHQ/IHRoaXMud3JhcFR5cGUobWVtYmVyTm9kZS5yZXR1cm5UeXBlLCBtZXRob2RTY29wZSlcblx0XHRcdFx0XHQ6IFR5cGVzLlZPSUQ7XG5cblx0XHRcdFx0aW50ZXJmYWNlU3ltYm9sLmluc3RhbmNlTWV0aG9kU3ltYm9scy5zZXQobWVtYmVyTm9kZS5uYW1lLCBtZXRob2RTeW1ib2wpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgdHlwZUVycm9yKG1lc3NhZ2U6IHN0cmluZywgbm9kZTogQVNUTm9kZSB8IG51bGwgPSBudWxsKTogbmV2ZXIge1xuXHRcdHRocm93VHlwZUVycm9yKG1lc3NhZ2UsIG5vZGU/LnNwYW4pO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuaW1wb3J0IHtBU1RJbXBvcnROb2RlLCBBU1ROb2RlLCBBU1ROb2RlVHlwZX0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuLi9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuaW1wb3J0IHtQYXJzZXJ9IGZyb20gXCIuLi9wYXJzZXIvcGFyc2VyXCI7XG5pbXBvcnQge0Vudmlyb25tZW50fSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHR5cGUge0Fic3RyYWN0RmlsZUxvYWRlcn0gZnJvbSBcIi4uL2xvYWRlcnNcIjtcbmltcG9ydCB7dGhyb3dSdW50aW1lRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcblxuZXhwb3J0IGNsYXNzIERlcGVuZGVuY3kge1xuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkgPSBuZXcgT2JqZWN0UmVnaXN0cnkoKTtcblx0bmFtZXM6IHN0cmluZ1tdO1xuXHR1cmw6IHN0cmluZztcblx0YXN0OiBBU1ROb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IobmFtZXM6IHN0cmluZ1tdLCB1cmw6IHN0cmluZykge1xuXHRcdHRoaXMubmFtZXMgPSBuYW1lcztcblx0XHR0aGlzLnVybCA9IHVybDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgRGVwZW5kZW5jeUxvYWRlciB7XG5cdGVudmlyb25tZW50OiBFbnZpcm9ubWVudDtcblx0b2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5O1xuXHRmaWxlTG9hZGVyOiBBYnN0cmFjdEZpbGVMb2FkZXI7XG5cblx0Y29uc3RydWN0b3IoZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGZpbGVMb2FkZXI6IEFic3RyYWN0RmlsZUxvYWRlcikge1xuXHRcdHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5ID0gb2JqZWN0UmVnaXN0cnk7XG5cdFx0dGhpcy5maWxlTG9hZGVyID0gZmlsZUxvYWRlcjtcblx0fVxuXG5cdGFzeW5jIHBhcnNlRGVwZW5kZW5jeShkZXBlbmRlbmN5OiBEZXBlbmRlbmN5KTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIGF3YWl0IHRoaXMucGFyc2VGaWxlKGRlcGVuZGVuY3kudXJsKVxuXHRcdCAgICAgICAgICAgICAgICAgLnRoZW4oYXN0ID0+IGRlcGVuZGVuY3kuYXN0ID0gYXN0KVxuXHRcdCAgICAgICAgICAgICAgICAgLnRoZW4oYXN0ID0+IGRlcGVuZGVuY3kub2JqZWN0UmVnaXN0cnkuY29sbGVjdEFsbChhc3QpKTtcblx0fVxuXG5cdGFzeW5jIGNvbGxlY3REZXBlbmRlbmNpZXMoZGVwZW5kZW5jeTogRGVwZW5kZW5jeSwgZGVwZW5kZW5jaWVzOiBNYXA8c3RyaW5nLCBEZXBlbmRlbmN5Pik6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiBhd2FpdCB0aGlzLmNvbGxlY3RQcm9ncmFtRGVwZW5kZW5jaWVzKGRlcGVuZGVuY3kuYXN0KVxuXHRcdCAgICAgICAgICAgICAgICAgLnRoZW4oY2xhc3NEZXBlbmRlbmNpZXMgPT4ge1xuXHRcdFx0ICAgICAgICAgICAgICAgICBjbGFzc0RlcGVuZGVuY2llcy5mb3JFYWNoKGNsYXNzRGVwZW5kZW5jeSA9PiB7XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgaWYgKGRlcGVuZGVuY2llcy5oYXMoY2xhc3NEZXBlbmRlbmN5LnVybCkpIHtcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgIHJldHVybjtcblx0XHRcdFx0ICAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgZGVwZW5kZW5jaWVzLnNldChjbGFzc0RlcGVuZGVuY3kudXJsLCBjbGFzc0RlcGVuZGVuY3kpO1xuXHRcdFx0ICAgICAgICAgICAgICAgICB9KTtcblx0XHQgICAgICAgICAgICAgICAgIH0pO1xuXHR9XG5cblx0YXN5bmMgY29sbGVjdFByb2dyYW1EZXBlbmRlbmNpZXMoYXN0OiBBU1ROb2RlIHwgbnVsbCk6IFByb21pc2U8TWFwPHN0cmluZywgRGVwZW5kZW5jeT4+IHtcblx0XHRpZiAoYXN0ID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gbmV3IE1hcCgpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGRlZmF1bHREZXBlbmRlbmNpZXMgPSB0aGlzLmRlZmF1bHREZXBlbmRlbmNpZXMoKTtcblx0XHRmb3IgKGNvbnN0IGRlcGVuZGVuY3kgb2YgZGVmYXVsdERlcGVuZGVuY2llcy52YWx1ZXMoKSkge1xuXHRcdFx0YXdhaXQgdGhpcy5wYXJzZURlcGVuZGVuY3koZGVwZW5kZW5jeSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZGVwZW5kZW5jaWVzID0gdGhpcy5jb2xsZWN0Q2xhc3NEZXBlbmRlbmNpZXMoYXN0KTtcblx0XHRmb3IgKGNvbnN0IGRlcGVuZGVuY3kgb2YgZGVwZW5kZW5jaWVzLnZhbHVlcygpKSB7XG5cdFx0XHRhd2FpdCB0aGlzLnBhcnNlRGVwZW5kZW5jeShkZXBlbmRlbmN5KTtcblx0XHRcdGF3YWl0IHRoaXMuY29sbGVjdERlcGVuZGVuY2llcyhkZXBlbmRlbmN5LCBkZXBlbmRlbmNpZXMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgTWFwKFsuLi5kZWZhdWx0RGVwZW5kZW5jaWVzLCAuLi5kZXBlbmRlbmNpZXNdKTtcblx0fVxuXG5cdGRlZmF1bHREZXBlbmRlbmNpZXMoKTogTWFwPHN0cmluZywgRGVwZW5kZW5jeT4ge1xuXHRcdGNvbnN0IGRlcGVuZGVuY2llcyA9IFtcblx0XHRcdG5ldyBEZXBlbmRlbmN5KFsnSXRlcmF0b3InLCAnSXRlcmFibGUnXSwgJy9saWJyYXJ5L2NvbnRyYWN0cy5seXJhJylcblx0XHRdO1xuXG5cdFx0Y29uc3QgbWFwID0gbmV3IE1hcCgpO1xuXHRcdGZvciAoY29uc3QgZGVwZW5kZW5jeSBvZiBkZXBlbmRlbmNpZXMpIHtcblx0XHRcdG1hcC5zZXQoZGVwZW5kZW5jeS51cmwsIGRlcGVuZGVuY3kpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtYXA7XG5cdH1cblxuXHRjb2xsZWN0Q2xhc3NEZXBlbmRlbmNpZXMoYXN0OiBBU1ROb2RlKTogTWFwPHN0cmluZywgRGVwZW5kZW5jeT4ge1xuXHRcdGNvbnN0IGNsYXNzRGVwZW5kZW5jaWVzID0gbmV3IE1hcCgpO1xuXG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIGFzdC5jaGlsZHJlbikge1xuXHRcdFx0aWYgKG5vZGUudHlwZSA9PT0gQVNUTm9kZVR5cGUuSU1QT1JUKSB7XG5cdFx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUSW1wb3J0Tm9kZSkge1xuXHRcdFx0XHRcdGlmIChub2RlLmZyb20gPT09IG51bGwpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoY2xhc3NEZXBlbmRlbmNpZXMuaGFzKG5vZGUuZnJvbSkpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjbGFzc0RlcGVuZGVuY2llcy5zZXQobm9kZS5mcm9tLCBuZXcgRGVwZW5kZW5jeShub2RlLm5hbWVzLCBub2RlLmZyb20pKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBpbXBvcnQgbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZT8uc3Bhbik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3NEZXBlbmRlbmNpZXM7XG5cdH1cblxuXHRwYXJzZUZpbGUodXJsOiBzdHJpbmcpOiBQcm9taXNlPEFTVE5vZGU+IHtcblx0XHRyZXR1cm4gdGhpcy5maWxlTG9hZGVyXG5cdFx0ICAgICAgICAgICAubG9hZCh1cmwpXG5cdFx0ICAgICAgICAgICAudGhlbihjb2RlID0+IHRoaXMucGFyc2VyU291cmNlKG5ldyBTb3VyY2UoY29kZSwgdXJsKSkpO1xuXHR9XG5cblx0cGFyc2VyU291cmNlKHNvdXJjZTogU291cmNlKTogQVNUTm9kZSB7XG5cdFx0cmV0dXJuIG5ldyBQYXJzZXIoc291cmNlKS5wYXJzZSgpO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7RGVwZW5kZW5jeUxvYWRlcn0gZnJvbSBcIi4vZGVwZW5kZW5jaWVzXCI7XG5pbXBvcnQge0FTVEltcG9ydE5vZGUsIEFTVE5vZGV9IGZyb20gXCIuLi9hc3RcIjtcbmltcG9ydCB7TmF0aXZlQ2xhc3Nlc30gZnJvbSBcIi4uLy4uL2xpYnJhcnkvbmF0aXZlX2NsYXNzZXNcIjtcbmltcG9ydCB7Q2xhc3NEZWZpbml0aW9uLCBFbnZpcm9ubWVudCwgSW50ZXJmYWNlRGVmaW5pdGlvbn0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuaW1wb3J0IHR5cGUge0Fic3RyYWN0RmlsZUxvYWRlcn0gZnJvbSBcIi4uL2xvYWRlcnNcIjtcbmltcG9ydCB0eXBlIHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uLy4uL2xpYnJhcnkvbmF0aXZlX2NsYXNzXCI7XG5pbXBvcnQge3Rocm93RGVwZW5kZW5jeUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5cbmNvbnN0IG5hdGl2ZUNsYXNzZXMgPSBuZXcgTmF0aXZlQ2xhc3NlcygpO1xuXG5leHBvcnQgY2xhc3MgTGlua2VyIHtcblx0ZW52aXJvbm1lbnQ6IEVudmlyb25tZW50O1xuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cdGRlcGVuZGVuY3lMb2FkZXI6IERlcGVuZGVuY3lMb2FkZXI7XG5cblx0Y29uc3RydWN0b3IoZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGZpbGVMb2FkZXI6IEFic3RyYWN0RmlsZUxvYWRlcikge1xuXHRcdHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5ID0gb2JqZWN0UmVnaXN0cnk7XG5cdFx0dGhpcy5kZXBlbmRlbmN5TG9hZGVyID0gbmV3IERlcGVuZGVuY3lMb2FkZXIoZW52aXJvbm1lbnQsIG9iamVjdFJlZ2lzdHJ5LCBmaWxlTG9hZGVyKTtcblx0fVxuXG5cdGxpbmtTb3VyY2VzKGFzdDogQVNUTm9kZSk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiB0aGlzLmRlcGVuZGVuY3lMb2FkZXJcblx0XHQgICAgICAgICAgIC5jb2xsZWN0UHJvZ3JhbURlcGVuZGVuY2llcyhhc3QpXG5cdFx0ICAgICAgICAgICAudGhlbihkZXBlbmRlbmNpZXMgPT4ge1xuXHRcdFx0ICAgICAgICAgICBmb3IgKGNvbnN0IGRlcGVuZGVuY3kgb2YgZGVwZW5kZW5jaWVzLnZhbHVlcygpKSB7XG5cdFx0XHRcdCAgICAgICAgICAgY29uc3Qgb2JqZWN0RGVmaW5pdGlvbnMgPSBkZXBlbmRlbmN5Lm9iamVjdFJlZ2lzdHJ5XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZldGNoQWxsT2JqZWN0RGVmaW5pdGlvbnMoKVxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52YWx1ZXMoKTtcblx0XHRcdFx0ICAgICAgICAgICBmb3IgKGxldCBvYmplY3REZWYgb2Ygb2JqZWN0RGVmaW5pdGlvbnMpIHtcblx0XHRcdFx0XHQgICAgICAgICAgIGlmIChvYmplY3REZWYgaW5zdGFuY2VvZiBJbnRlcmZhY2VEZWZpbml0aW9uKSB7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgIHRoaXMub2JqZWN0UmVnaXN0cnkuaW50ZXJmYWNlcy5zZXQob2JqZWN0RGVmLm5hbWUsIG9iamVjdERlZik7XG5cdFx0XHRcdFx0ICAgICAgICAgICB9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICB0aGlzLm9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuc2V0KG9iamVjdERlZi5uYW1lLCBvYmplY3REZWYpO1xuXHRcdFx0XHRcdCAgICAgICAgICAgfVxuXHRcdFx0XHRcdCAgICAgICAgICAgdGhpcy5lbnZpcm9ubWVudC5kZWZpbmUob2JqZWN0RGVmLm5hbWUsIG9iamVjdERlZik7XG5cdFx0XHRcdCAgICAgICAgICAgfVxuXHRcdFx0ICAgICAgICAgICB9XG5cdFx0ICAgICAgICAgICB9KVxuXHRcdCAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5sb2FkTmF0aXZlQ2xhc3Nlcyhhc3QpKVxuXHR9XG5cblx0bG9hZE5hdGl2ZUNsYXNzZXMoYXN0OiBBU1ROb2RlKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIGFzdC5jaGlsZHJlbikge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RJbXBvcnROb2RlKSB7XG5cdFx0XHRcdGlmIChub2RlLmZyb20gPT09IG51bGwpIHtcblx0XHRcdFx0XHRjb25zdCBjbGFzc05hbWUgPSBub2RlLm5hbWVzWzBdO1xuXHRcdFx0XHRcdGlmICghY2xhc3NOYW1lKSB7XG5cdFx0XHRcdFx0XHR0aHJvd0RlcGVuZGVuY3lFcnJvcihgSW52YWxpZCBpbXBvcnQgbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZT8uc3Bhbik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnN0IG5hdGl2ZUNsYXNzOiBOYXRpdmVDbGFzcyB8IG51bGwgPSBuYXRpdmVDbGFzc2VzLnJlZ2lzdHJ5LmdldChjbGFzc05hbWUpIHx8IG51bGw7XG5cdFx0XHRcdFx0aWYgKCFuYXRpdmVDbGFzcykge1xuXHRcdFx0XHRcdFx0dGhyb3dEZXBlbmRlbmN5RXJyb3IoYFVua25vd24gbmF0aXZlIGNsYXNzICR7Y2xhc3NOYW1lfWAsIG5vZGU/LnNwYW4pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zdCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uID0gbmF0aXZlQ2xhc3MuZ2V0Q2xhc3NEZWZpbml0aW9uKCk7XG5cdFx0XHRcdFx0aWYgKHRoaXMub2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5oYXMoY2xhc3NOYW1lKSkge1xuXHRcdFx0XHRcdFx0dGhyb3dEZXBlbmRlbmN5RXJyb3IoYENvdWxkIG5vdCByZXNvbHZlIGNsYXNzICR7Y2xhc3NOYW1lfS5gLCBub2RlPy5zcGFuKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5vYmplY3RSZWdpc3RyeS5jbGFzc2VzLnNldChjbGFzc05hbWUsIGNsYXNzRGVmKTtcblx0XHRcdFx0XHR0aGlzLmVudmlyb25tZW50LmRlZmluZShjbGFzc05hbWUsIGNsYXNzRGVmKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwKICAgICJpbXBvcnQge0FTVEFubm90YXRpb25Ob2RlLCBBU1RDbGFzc05vZGUsIEFTVE1ldGhvZE5vZGUsIEFTVE5vZGV9IGZyb20gXCIuLi9hc3RcIjtcbmltcG9ydCB7Y2FsbEluc3RhbmNlTWV0aG9kLCBldmFsQW5ub3RhdGlvblByb3BlcnRpZXN9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9ydW50aW1lXCI7XG5pbXBvcnQge0NsYXNzRGVmaW5pdGlvbiwgdHlwZSBFbnZpcm9ubWVudCwgSW5zdGFuY2V9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQgdHlwZSB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuaW1wb3J0IHR5cGUge0V2ZW50UGlwZWxpbmV9IGZyb20gXCIuLi9ldmVudC9waXBlbGluZVwiO1xuXG5leHBvcnQgY2xhc3MgVGVzdFN1aXRlcyB7XG5cdHByaXZhdGUgcmVhZG9ubHkgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50O1xuXHRwcml2YXRlIHJlYWRvbmx5IG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeTtcblx0cHJpdmF0ZSByZWFkb25seSBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lO1xuXG5cdGNvbnN0cnVjdG9yKGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKSB7XG5cdFx0dGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkgPSBvYmplY3RSZWdpc3RyeTtcblx0XHR0aGlzLmV2ZW50UGlwZWxpbmUgPSBldmVudFBpcGVsaW5lO1xuXHR9XG5cblx0cnVuKGFzdDogQVNUTm9kZSk6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUQ2xhc3NOb2RlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGDwn6eqIFJ1bm5pbmcgVGVzdCBDYXNlcyBmb3IgJHtub2RlLm5hbWV9IC4uLmApO1xuXHRcdFx0XHR0aGlzLnJ1blRlc3RDYXNlcyhub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJ1blRlc3RDYXNlcyhjbGFzc05vZGU6IEFTVENsYXNzTm9kZSk6IHZvaWQge1xuXHRcdGZvciAoY29uc3QgbWVtYmVyIG9mIGNsYXNzTm9kZS5jaGlsZHJlbikge1xuXHRcdFx0aWYgKG1lbWJlciBpbnN0YW5jZW9mIEFTVE1ldGhvZE5vZGUpIHtcblx0XHRcdFx0Y29uc3QgYW5ub3RhdGlvbjogQVNUQW5ub3RhdGlvbk5vZGUgfCB1bmRlZmluZWQgPSBtZW1iZXIuYW5ub3RhdGlvbnNcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmZpbmQoYW5ub3RhdGlvbiA9PiBhbm5vdGF0aW9uLm5hbWUgPT09ICd0ZXN0Jyk7XG5cdFx0XHRcdGlmICghYW5ub3RhdGlvbikge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMucnVuVGVzdENhc2UoY2xhc3NOb2RlLCBtZW1iZXIsIGFubm90YXRpb24pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcnVuVGVzdENhc2UoY2xhc3NOb2RlOiBBU1RDbGFzc05vZGUsIG1ldGhvZE5vZGU6IEFTVE1ldGhvZE5vZGUsIGFubm90YXRpb246IEFTVEFubm90YXRpb25Ob2RlKTogdm9pZCB7XG5cdFx0Y29uc3QgaW5zdGFuY2U6IEluc3RhbmNlID0gQ2xhc3NEZWZpbml0aW9uLmZyb21BU1QoY2xhc3NOb2RlKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25zdHJ1Y3ROZXdJbnN0YW5jZVdpdGhvdXRBcmd1bWVudHMoXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbnZpcm9ubWVudCxcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRQaXBlbGluZVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cblx0XHRjb25zdCBwcm9wZXJ0aWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSBldmFsQW5ub3RhdGlvblByb3BlcnRpZXMoYW5ub3RhdGlvbik7XG5cdFx0Y29uc3QgdGl0bGU6IHN0cmluZyA9IHByb3BlcnRpZXMudGl0bGUgPz8gYCR7Y2xhc3NOb2RlLm5hbWV9LiR7bWV0aG9kTm9kZS5uYW1lfWA7XG5cblx0XHRsZXQgZXJyb3JNZXNzYWdlID0gbnVsbDtcblxuXHRcdHRyeSB7XG5cdFx0XHRjYWxsSW5zdGFuY2VNZXRob2QoaW5zdGFuY2UsIG1ldGhvZE5vZGUsIFtdLCB0aGlzLm9iamVjdFJlZ2lzdHJ5LCB0aGlzLmVudmlyb25tZW50LCB0aGlzLmV2ZW50UGlwZWxpbmUpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRlcnJvck1lc3NhZ2UgPSBlcnJvcjtcblx0XHR9XG5cblx0XHRpZiAoZXJyb3JNZXNzYWdlKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGAg4p2MICR7dGl0bGV9LCAke2Vycm9yTWVzc2FnZX1gKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coYCDinIUgJHt0aXRsZX1gKTtcblx0XHR9XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtBU1ROb2RlfSBmcm9tICcuLi9hc3QudHMnO1xuaW1wb3J0IHtFbnZpcm9ubWVudH0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtldmFsTm9kZSwgcmVnaXN0ZXJOYXRpdmVDbGFzc2VzLCByZWdpc3Rlck5hdGl2ZUZ1bmN0aW9uc30gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfcnVudGltZVwiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB0eXBlIHtFdmVudFBpcGVsaW5lfSBmcm9tIFwiLi4vZXZlbnQvcGlwZWxpbmVcIjtcblxuZXhwb3J0IGNsYXNzIEludGVycHJldGVyIHtcblx0ZW52aXJvbm1lbnQ6IEVudmlyb25tZW50O1xuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cdGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmU7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0ZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LFxuXHRcdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSxcblx0XHRldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lXG5cdCkge1xuXHRcdHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5ID0gb2JqZWN0UmVnaXN0cnk7XG5cdFx0dGhpcy5ldmVudFBpcGVsaW5lID0gZXZlbnRQaXBlbGluZTtcblxuXHRcdHJlZ2lzdGVyTmF0aXZlQ2xhc3NlcyhvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpO1xuXHRcdHJlZ2lzdGVyTmF0aXZlRnVuY3Rpb25zKGVudmlyb25tZW50KTtcblx0fVxuXG5cdHJ1bihhc3Q6IEFTVE5vZGUpIHtcblx0XHRldmFsTm9kZShhc3QsIHRoaXMub2JqZWN0UmVnaXN0cnksIHRoaXMuZW52aXJvbm1lbnQsIHRoaXMuZXZlbnRQaXBlbGluZSk7XG5cdH1cbn1cbiIsCiAgICAiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0RmlsZUxvYWRlciB7XG5cdGFic3RyYWN0IGxvYWQodXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz47XG59XG5cbmV4cG9ydCBjbGFzcyBGZXRjaEZpbGVMb2FkZXIgZXh0ZW5kcyBBYnN0cmFjdEZpbGVMb2FkZXIge1xuXHRvdmVycmlkZSBsb2FkKHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gZmV0Y2godXJsKVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxuXHR9XG59XG4iLAogICAgImV4cG9ydCB0eXBlIEV2ZW50SGFuZGxlcjxUID0gYW55PiA9IChwYXlsb2FkOiBUKSA9PiB2b2lkO1xuXG5leHBvcnQgY2xhc3MgRXZlbnRQaXBlbGluZSB7XG5cdHByaXZhdGUgbGlzdGVuZXJzOiBNYXA8c3RyaW5nLCBTZXQ8RXZlbnRIYW5kbGVyPj4gPSBuZXcgTWFwPHN0cmluZywgU2V0PEV2ZW50SGFuZGxlcj4+KCk7XG5cblx0b248VCA9IGFueT4oZXZlbnQ6IHN0cmluZywgaGFuZGxlcjogRXZlbnRIYW5kbGVyPFQ+KTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLmxpc3RlbmVycy5oYXMoZXZlbnQpKSB7XG5cdFx0XHR0aGlzLmxpc3RlbmVycy5zZXQoZXZlbnQsIG5ldyBTZXQoKSk7XG5cdFx0fVxuXHRcdHRoaXMubGlzdGVuZXJzLmdldChldmVudCkhLmFkZChoYW5kbGVyKTtcblx0fVxuXG5cdG9mZjxUID0gYW55PihldmVudDogc3RyaW5nLCBoYW5kbGVyOiBFdmVudEhhbmRsZXI8VD4pOiB2b2lkIHtcblx0XHR0aGlzLmxpc3RlbmVycy5nZXQoZXZlbnQpXG5cdFx0ICAgID8uZGVsZXRlKGhhbmRsZXIpO1xuXHR9XG5cblx0ZW1pdDxUID0gYW55PihldmVudDogc3RyaW5nLCBwYXlsb2FkOiBUKTogdm9pZCB7XG5cdFx0dGhpcy5saXN0ZW5lcnMuZ2V0KGV2ZW50KVxuXHRcdCAgICA/LmZvckVhY2goKGhhbmRsZXI6IEV2ZW50SGFuZGxlcik6IHZvaWQgPT4gaGFuZGxlcihwYXlsb2FkKSk7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5pbXBvcnQge0Vudmlyb25tZW50fSBmcm9tIFwiLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuaW1wb3J0IHtUeXBlQ2hlY2tlcn0gZnJvbSBcIi4vdHlwZXMvdHlwZWNoZWNrZXJcIjtcbmltcG9ydCB7TGlua2VyfSBmcm9tIFwiLi9saW5rZXIvbGlua2VyXCI7XG5pbXBvcnQge1Rlc3RTdWl0ZXN9IGZyb20gXCIuL3Rlc3RzL3Rlc3RzdWl0ZXNcIjtcbmltcG9ydCB7SW50ZXJwcmV0ZXJ9IGZyb20gXCIuL2ludGVycHJldGVyL2ludGVycHJldGVyXCI7XG5pbXBvcnQge0ZldGNoRmlsZUxvYWRlcn0gZnJvbSBcIi4vbG9hZGVyc1wiO1xuaW1wb3J0IHtBU1ROb2RlfSBmcm9tIFwiLi9hc3RcIjtcbmltcG9ydCB7UGFyc2VyfSBmcm9tIFwiLi9wYXJzZXIvcGFyc2VyXCI7XG5pbXBvcnQge0V2ZW50UGlwZWxpbmV9IGZyb20gXCIuL2V2ZW50L3BpcGVsaW5lXCI7XG5cbmV4cG9ydCBjbGFzcyBMeXJhU2NyaXB0UHJvZ3JhbSB7XG5cdHByaXZhdGUgZ2xvYmFsRW52aXJvbm1lbnQ6IEVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KCk7XG5cdHByaXZhdGUgZ2xvYmFsT2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5ID0gbmV3IE9iamVjdFJlZ2lzdHJ5KCk7XG5cdHByaXZhdGUgZ2xvYmFsRXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZTtcblxuXHRwcml2YXRlIHR5cGVDaGVja2VyOiBUeXBlQ2hlY2tlciA9IG5ldyBUeXBlQ2hlY2tlcih0aGlzLmdsb2JhbE9iamVjdFJlZ2lzdHJ5KTtcblx0cHJpdmF0ZSBsaW5rZXI6IExpbmtlciA9IG5ldyBMaW5rZXIodGhpcy5nbG9iYWxFbnZpcm9ubWVudCwgdGhpcy5nbG9iYWxPYmplY3RSZWdpc3RyeSwgbmV3IEZldGNoRmlsZUxvYWRlcigpKTtcblxuXHRwcml2YXRlIGludGVycHJldGVyOiBJbnRlcnByZXRlcjtcblx0cHJpdmF0ZSB0ZXN0U3VpdGU6IFRlc3RTdWl0ZXM7XG5cblx0cHJpdmF0ZSByZWFkb25seSBpc0RlYnVnOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgc3RhcnRUaW1lOiBudW1iZXIgPSAwO1xuXG5cdGNvbnN0cnVjdG9yKGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSwgZ2xvYmFsRXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSA9IG5ldyBFdmVudFBpcGVsaW5lKCkpIHtcblx0XHR0aGlzLmlzRGVidWcgPSBpc0RlYnVnO1xuXG5cdFx0dGhpcy5pbnRlcnByZXRlciA9IG5ldyBJbnRlcnByZXRlcihcblx0XHRcdHRoaXMuZ2xvYmFsRW52aXJvbm1lbnQsXG5cdFx0XHR0aGlzLmdsb2JhbE9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0Z2xvYmFsRXZlbnRQaXBlbGluZVxuXHRcdCk7XG5cblx0XHR0aGlzLnRlc3RTdWl0ZSA9IG5ldyBUZXN0U3VpdGVzKFxuXHRcdFx0dGhpcy5nbG9iYWxFbnZpcm9ubWVudCxcblx0XHRcdHRoaXMuZ2xvYmFsT2JqZWN0UmVnaXN0cnksXG5cdFx0XHRnbG9iYWxFdmVudFBpcGVsaW5lXG5cdFx0KTtcblxuXHRcdHRoaXMuZ2xvYmFsRXZlbnRQaXBlbGluZSA9IGdsb2JhbEV2ZW50UGlwZWxpbmU7XG5cdH1cblxuXHRnZXRHbG9iYWxPYmplY3RSZWdpc3RyeSgpOiBPYmplY3RSZWdpc3RyeSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2xvYmFsT2JqZWN0UmVnaXN0cnk7XG5cdH1cblxuXG5cdGdldEdsb2JhbEVudmlyb25tZW50KCk6IEVudmlyb25tZW50IHtcblx0XHRyZXR1cm4gdGhpcy5nbG9iYWxFbnZpcm9ubWVudDtcblx0fVxuXG5cdGdldEdsb2JhbEV2ZW50UGlwZWxpbmUoKTogRXZlbnRQaXBlbGluZSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2xvYmFsRXZlbnRQaXBlbGluZTtcblx0fVxuXG5cdGFzeW5jIGV4ZWN1dGUoc291cmNlOiBTb3VyY2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gdGhpcy5ydW5QaXBlbGluZShzb3VyY2UpXG5cdFx0ICAgICAgICAgICAudGhlbigoYXN0OiBBU1ROb2RlKSA9PiB7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlU3RhcnRUaW1lKCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuaW50ZXJwcmV0ZXIucnVuKGFzdCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlRW5kVGltZSgnaW50ZXJwcmV0ZXInKTtcblx0XHQgICAgICAgICAgIH0pO1xuXHR9XG5cblx0YXN5bmMgZXhlY3V0ZVRlc3Qoc291cmNlOiBTb3VyY2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gdGhpcy5ydW5QaXBlbGluZShzb3VyY2UpXG5cdFx0ICAgICAgICAgICAudGhlbigoYXN0OiBBU1ROb2RlKSA9PiB7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlU3RhcnRUaW1lKCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMudGVzdFN1aXRlLnJ1bihhc3QpO1xuXHRcdFx0ICAgICAgICAgICB0aGlzLmRlYnVnTWVhc3VyZUVuZFRpbWUoJ3Rlc3QnKTtcblx0XHQgICAgICAgICAgIH0pO1xuXHR9XG5cblx0ZGVidWcodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzRGVidWcpIHtcblx0XHRcdGNvbnNvbGUubG9nKHZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRkZWJ1Z01lYXN1cmVTdGFydFRpbWUoKTogdm9pZCB7XG5cdFx0dGhpcy5zdGFydFRpbWUgPSB0aGlzLmRlYnVnVGltZXN0YW1wKCk7XG5cdH1cblxuXHRkZWJ1Z01lYXN1cmVFbmRUaW1lKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuZGVidWcobWVzc2FnZSArICc6ICcgKyAodGhpcy5kZWJ1Z1RpbWVzdGFtcCgpIC0gdGhpcy5zdGFydFRpbWUpICsgJ21zJyk7XG5cdH1cblxuXHRkZWJ1Z1RpbWVzdGFtcCgpOiBudW1iZXIge1xuXHRcdGlmICghdGhpcy5pc0RlYnVnKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdFx0cmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3luYyBydW5QaXBlbGluZShzb3VyY2U6IFNvdXJjZSk6IFByb21pc2U8QVNUTm9kZT4ge1xuXHRcdHRoaXMuZGVidWdNZWFzdXJlU3RhcnRUaW1lKClcblx0XHRjb25zdCBhc3Q6IEFTVE5vZGUgPSBuZXcgUGFyc2VyKHNvdXJjZSkucGFyc2UoKTtcblx0XHR0aGlzLmRlYnVnTWVhc3VyZUVuZFRpbWUoJ3BhcnNlcicpXG5cdFx0dGhpcy5kZWJ1Zyhhc3QpO1xuXG5cdFx0cmV0dXJuIHRoaXMubGlua2VyLmxpbmtTb3VyY2VzKGFzdClcblx0XHQgICAgICAgICAgIC50aGVuKCgpID0+IHtcblx0XHRcdCAgICAgICAgICAgdGhpcy50eXBlQ2hlY2tlci5jb2xsZWN0QWxsU3ltYm9sc0Zyb21SZWdpc3RyeSh0aGlzLmdsb2JhbE9iamVjdFJlZ2lzdHJ5KTtcblx0XHQgICAgICAgICAgIH0pXG5cdFx0ICAgICAgICAgICAudGhlbigoKSA9PiB7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlU3RhcnRUaW1lKCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMudHlwZUNoZWNrZXIuY2hlY2soYXN0KTtcblx0XHRcdCAgICAgICAgICAgdGhpcy5kZWJ1Z01lYXN1cmVFbmRUaW1lKCd0eXBlY2hlY2tlcicpO1xuXG5cdFx0XHQgICAgICAgICAgIHJldHVybiBhc3Q7XG5cdFx0ICAgICAgICAgICB9KTtcblx0fVxufVxuIiwKICAgICJjb25zdCBET01fRVZFTlQ6IHN0cmluZyA9ICdkb206ZXZlbnQnO1xuXG5jb25zdCBpc0V2ZW50OiAocHJvcGVydHlLZXk6IHN0cmluZykgPT4gYm9vbGVhbiA9IChwcm9wZXJ0eUtleTogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG5cdHJldHVybiBwcm9wZXJ0eUtleS50b0xvd2VyQ2FzZSgpXG5cdCAgICAgICAgICAgICAgICAgIC5zdGFydHNXaXRoKCdvbicpO1xufVxuXG5leHBvcnQgY29uc3QgRXZlbnRzID0ge1xuXHRET01fRVZFTlQsXG5cdGlzRXZlbnQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudHM7XG4iLAogICAgIi8vLyA8cmVmZXJlbmNlIGxpYj1cImRvbVwiIC8+XG5cbmltcG9ydCB0eXBlIHtWTm9kZX0gZnJvbSBcIi4uL2NvcmUvdmRvbS92ZG9tXCI7XG5pbXBvcnQge0xhbWJkYUZ1bmN0aW9uQ2FsbH0gZnJvbSBcIi4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcnVudGltZVwiO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcbmltcG9ydCB0eXBlIHtBcHBsaWNhdGlvblJ1bnRpbWV9IGZyb20gXCIuL3J1bnRpbWVcIjtcbmltcG9ydCB7VkRPTX0gZnJvbSBcIi4vcmVnaXN0cnlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBFbGVtZW50Q3JlYXRvciB7XG5cdGNyZWF0ZSh2Tm9kZTogVk5vZGUgfCBzdHJpbmcpOiBOb2RlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRQYXRjaGVyIHtcblx0cGF0Y2gob2xkVk5vZGU6IFZOb2RlIHwgc3RyaW5nIHwgbnVsbCwgbmV3Vk5vZGU6IFZOb2RlIHwgc3RyaW5nKTogdm9pZFxufVxuXG5leHBvcnQgY2xhc3MgSFRNTEVsZW1lbnRDcmVhdG9yIGltcGxlbWVudHMgRWxlbWVudENyZWF0b3Ige1xuXHRwcml2YXRlIHRleHRCdWZmZXI6IHN0cmluZ1tdID0gW107XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZWFkb25seSBhcHBsaWNhdGlvblJ1bnRpbWU6IEFwcGxpY2F0aW9uUnVudGltZSxcblx0XHRwcml2YXRlIHJlYWRvbmx5IHZkb206IFZET01cblx0KSB7XG5cdH1cblxuXHRwdWJsaWMgY3JlYXRlKHZOb2RlOiBWTm9kZSB8IHN0cmluZyk6IE5vZGUge1xuXHRcdGlmICh0eXBlb2Ygdk5vZGUgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2Tm9kZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHZOb2RlLmlzQ29tcG9uZW50ICYmIHZOb2RlLmNvbXBvbmVudCA9PT0gbnVsbCkge1xuXHRcdFx0dk5vZGUuY29tcG9uZW50ID0gdGhpcy5hcHBsaWNhdGlvblJ1bnRpbWUuY3JlYXRlSW5zdGFuY2Uodk5vZGUudGFnKTtcblxuXHRcdFx0Zm9yIChjb25zdCBbcHJvcGVydHlLZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh2Tm9kZS5wcm9wcykpIHtcblx0XHRcdFx0aWYgKHZOb2RlLmNvbXBvbmVudC5oYXNQdWJsaWNQcm9wZXJ0eShwcm9wZXJ0eUtleSkpIHtcblx0XHRcdFx0XHR2Tm9kZS5jb21wb25lbnQuc2V0UHVibGljUHJvcGVydHkocHJvcGVydHlLZXksIHZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzdWJUcmVlID0gdGhpcy5hcHBsaWNhdGlvblJ1bnRpbWUuY2FsbE1ldGhvZCh2Tm9kZS5jb21wb25lbnQsICdyZW5kZXInLCBbXSkgYXMgVk5vZGU7XG5cblx0XHRcdHRoaXMudmRvbS5yZWdpc3Rlcih2Tm9kZS5jb21wb25lbnQsIHN1YlRyZWUpO1xuXG5cdFx0XHRjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuY3JlYXRlKHN1YlRyZWUpIGFzIEhUTUxFbGVtZW50O1xuXG5cdFx0XHRmb3IgKGNvbnN0IFtwcm9wZXJ0eUtleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHZOb2RlLnByb3BzKSkge1xuXHRcdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShwcm9wZXJ0eUtleSwgU3RyaW5nKHZhbHVlKSk7XG5cdFx0XHR9XG5cblx0XHRcdHZOb2RlLmRvbSA9IGVsZW1lbnQ7XG5cblx0XHRcdHJldHVybiB2Tm9kZS5kb207XG5cdFx0fVxuXG5cdFx0Y29uc3QgZmx1c2hUZXh0QnVmZmVyOiAoKSA9PiB2b2lkID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0Y29uc3QgdGV4dDogTm9kZSB8IG51bGwgPSB0aGlzLmZsdXNoVGV4dEJ1ZmZlcigpO1xuXHRcdFx0aWYgKHRleHQpIHtcblx0XHRcdFx0ZWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodk5vZGUudGFnKSBhcyBIVE1MRWxlbWVudDtcblx0XHR2Tm9kZS5kb20gPSBlbGVtZW50O1xuXG5cdFx0Zm9yIChjb25zdCBbcHJvcGVydHlLZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh2Tm9kZS5wcm9wcykpIHtcblx0XHRcdGlmIChFdmVudHMuaXNFdmVudChwcm9wZXJ0eUtleSkpIHtcblx0XHRcdFx0dGhpcy5hcHBsaWNhdGlvblJ1bnRpbWUuYWRkRXZlbnRIYW5kbGVyKGVsZW1lbnQsIHByb3BlcnR5S2V5LCB2YWx1ZSBhcyBMYW1iZGFGdW5jdGlvbkNhbGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcGVydHlLZXksIFN0cmluZyh2YWx1ZSkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgY2hpbGQgb2Ygdk5vZGUuY2hpbGRyZW4pIHtcblx0XHRcdGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdHRoaXMudGV4dEJ1ZmZlci5wdXNoKGNoaWxkKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGUoY2hpbGQpIGFzIEhUTUxFbGVtZW50KTtcblx0XHRcdH1cblxuXHRcdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cdFx0fVxuXG5cdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fVxuXG5cdHByaXZhdGUgZmx1c2hUZXh0QnVmZmVyKCk6IE5vZGUgfCBudWxsIHtcblx0XHRpZiAodGhpcy50ZXh0QnVmZmVyLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IGVsZW1lbnQ6IFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLnRleHRCdWZmZXIuam9pbignJykpO1xuXHRcdHRoaXMudGV4dEJ1ZmZlciA9IFtdO1xuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBIVE1MRWxlbWVudFBhdGNoZXIgaW1wbGVtZW50cyBFbGVtZW50UGF0Y2hlciB7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgbW91bnRQb2ludDogSFRNTEVsZW1lbnQsXG5cdCAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgYXBwbGljYXRpb25SdW50aW1lOiBBcHBsaWNhdGlvblJ1bnRpbWUsXG5cdCAgICAgICAgICAgIHZkb206IFZET00sXG5cdCAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudENyZWF0b3I6IEVsZW1lbnRDcmVhdG9yID0gbmV3IEhUTUxFbGVtZW50Q3JlYXRvcihhcHBsaWNhdGlvblJ1bnRpbWUsIHZkb20pKSB7XG5cdH1cblxuXHRwdWJsaWMgcGF0Y2gob2xkVk5vZGU6IFZOb2RlIHwgc3RyaW5nIHwgbnVsbCwgbmV3Vk5vZGU6IFZOb2RlIHwgc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKG9sZFZOb2RlKSB7XG5cdFx0XHR0aGlzLnBhdGNoTm9kZSh0aGlzLm1vdW50UG9pbnQsIG9sZFZOb2RlLCBuZXdWTm9kZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgZWxlbWVudDogTm9kZSA9IHRoaXMuZWxlbWVudENyZWF0b3IuY3JlYXRlKG5ld1ZOb2RlKTtcblxuXHRcdHRoaXMubW91bnRQb2ludC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuXHRcdGlmICh0eXBlb2YgbmV3Vk5vZGUgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRuZXdWTm9kZS5kb20gPSBlbGVtZW50O1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcGF0Y2hOb2RlKHBhcmVudDogTm9kZSwgb2xkTm9kZTogVk5vZGUgfCBzdHJpbmcsIG5ld05vZGU6IFZOb2RlIHwgc3RyaW5nKTogdm9pZCB7XG5cblx0XHRpZiAodHlwZW9mIG9sZE5vZGUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiBuZXdOb2RlID09PSAnc3RyaW5nJykge1xuXHRcdFx0aWYgKG9sZE5vZGUgIT09IG5ld05vZGUpIHtcblx0XHRcdFx0Y29uc3QgdGV4dE5vZGU6IENoaWxkTm9kZSB8IG51bGwgPSBwYXJlbnQuZmlyc3RDaGlsZDtcblx0XHRcdFx0aWYgKHRleHROb2RlKSB7XG5cdFx0XHRcdFx0dGV4dE5vZGUudGV4dENvbnRlbnQgPSBuZXdOb2RlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiBvbGROb2RlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgbmV3Tm9kZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdGNvbnN0IG5ld0VsZW1lbnQ6IE5vZGUgPSB0aGlzLmVsZW1lbnRDcmVhdG9yLmNyZWF0ZShuZXdOb2RlKTtcblx0XHRcdHBhcmVudC5yZXBsYWNlQ2hpbGQobmV3RWxlbWVudCwgcGFyZW50LmZpcnN0Q2hpbGQhKTtcblx0XHRcdGlmICh0eXBlb2YgbmV3Tm9kZSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0bmV3Tm9kZS5kb20gPSBuZXdFbGVtZW50O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChvbGROb2RlLnRhZyAhPT0gbmV3Tm9kZS50YWcpIHtcblx0XHRcdGNvbnN0IG5ld0VsZW1lbnQ6IE5vZGUgPSB0aGlzLmVsZW1lbnRDcmVhdG9yLmNyZWF0ZShuZXdOb2RlKTtcblx0XHRcdHBhcmVudC5yZXBsYWNlQ2hpbGQobmV3RWxlbWVudCwgb2xkTm9kZS5kb20hKTtcblx0XHRcdG5ld05vZGUuZG9tID0gbmV3RWxlbWVudDtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAobmV3Tm9kZS5pc0NvbXBvbmVudCAmJiBuZXdOb2RlLmNvbXBvbmVudCA9PT0gbnVsbCkge1xuXHRcdFx0bmV3Tm9kZS5jb21wb25lbnQgPSBvbGROb2RlLmNvbXBvbmVudDtcblx0XHRcdGNvbnN0IG5ld0VsZW1lbnQ6IE5vZGUgPSB0aGlzLmVsZW1lbnRDcmVhdG9yLmNyZWF0ZShcblx0XHRcdFx0dGhpcy5hcHBsaWNhdGlvblJ1bnRpbWUucmVuZGVyQ29tcG9uZW50KG9sZE5vZGUuY29tcG9uZW50ISlcblx0XHRcdCk7XG5cdFx0XHRwYXJlbnQucmVwbGFjZUNoaWxkKG5ld0VsZW1lbnQsIG9sZE5vZGUuZG9tISk7XG5cdFx0XHRuZXdOb2RlLmRvbSA9IG5ld0VsZW1lbnQ7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgZG9tOiBOb2RlID0gb2xkTm9kZS5kb20hO1xuXHRcdG5ld05vZGUuZG9tID0gZG9tO1xuXG5cdFx0dGhpcy51cGRhdGVQcm9wZXJ0aWVzKGRvbSBhcyBIVE1MRWxlbWVudCwgb2xkTm9kZS5wcm9wcywgbmV3Tm9kZS5wcm9wcyk7XG5cdFx0dGhpcy5wYXRjaENoaWxkcmVuKGRvbSwgb2xkTm9kZS5jaGlsZHJlbiwgbmV3Tm9kZS5jaGlsZHJlbik7XG5cdH1cblxuXHRwcml2YXRlIHVwZGF0ZVByb3BlcnRpZXMoZWxlbWVudDogSFRNTEVsZW1lbnQsIG9sZFByb3BlcnRpZXM6IFJlY29yZDxzdHJpbmcsIGFueT4sIG5ld1Byb3BlcnRpZXM6IFJlY29yZDxzdHJpbmcsIGFueT4pOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IHByb3BlcnR5S2V5IGluIG9sZFByb3BlcnRpZXMpIHtcblx0XHRcdGlmICghKHByb3BlcnR5S2V5IGluIG5ld1Byb3BlcnRpZXMpKSB7XG5cdFx0XHRcdGlmIChFdmVudHMuaXNFdmVudChwcm9wZXJ0eUtleSkpIHtcblx0XHRcdFx0XHR0aGlzLmFwcGxpY2F0aW9uUnVudGltZS5yZW1vdmVFdmVudEhhbmRsZXIoZWxlbWVudCwgcHJvcGVydHlLZXkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHByb3BlcnR5S2V5KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgcHJvcGVydHlLZXkgaW4gbmV3UHJvcGVydGllcykge1xuXHRcdFx0Y29uc3Qgb2xkVmFsdWU6IGFueSA9IG9sZFByb3BlcnRpZXNbcHJvcGVydHlLZXldO1xuXHRcdFx0Y29uc3QgbmV3VmFsdWU6IGFueSA9IG5ld1Byb3BlcnRpZXNbcHJvcGVydHlLZXldO1xuXG5cdFx0XHRpZiAob2xkVmFsdWUgPT09IG5ld1ZhbHVlKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoRXZlbnRzLmlzRXZlbnQocHJvcGVydHlLZXkpKSB7XG5cdFx0XHRcdGlmIChvbGRWYWx1ZSkge1xuXHRcdFx0XHRcdHRoaXMuYXBwbGljYXRpb25SdW50aW1lLnJlbW92ZUV2ZW50SGFuZGxlcihlbGVtZW50LCBwcm9wZXJ0eUtleSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5hcHBsaWNhdGlvblJ1bnRpbWUuYWRkRXZlbnRIYW5kbGVyKGVsZW1lbnQsIHByb3BlcnR5S2V5LCBuZXdWYWx1ZSBhcyBMYW1iZGFGdW5jdGlvbkNhbGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcGVydHlLZXksIG5ld1ZhbHVlIGFzIHN0cmluZyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBwYXRjaENoaWxkcmVuKHBhcmVudDogTm9kZSwgb2xkQ2hpbGRyZW46IChWTm9kZSB8IHN0cmluZylbXSwgbmV3Q2hpbGRyZW46IChWTm9kZSB8IHN0cmluZylbXSk6IHZvaWQge1xuXHRcdGNvbnN0IG1heDogbnVtYmVyID0gTWF0aC5tYXgob2xkQ2hpbGRyZW4ubGVuZ3RoLCBuZXdDaGlsZHJlbi5sZW5ndGgpO1xuXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG1heDsgaSsrKSB7XG5cblx0XHRcdGNvbnN0IG9sZENoaWxkOiBWTm9kZSB8IHN0cmluZyB8IHVuZGVmaW5lZCA9IG9sZENoaWxkcmVuW2ldO1xuXHRcdFx0Y29uc3QgbmV3Q2hpbGQ6IFZOb2RlIHwgc3RyaW5nIHwgdW5kZWZpbmVkID0gbmV3Q2hpbGRyZW5baV07XG5cblx0XHRcdGlmICghb2xkQ2hpbGQgJiYgbmV3Q2hpbGQpIHtcblx0XHRcdFx0cGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudENyZWF0b3IuY3JlYXRlKG5ld0NoaWxkKSk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwYXJlbnRDaGlsZE5vZGU6IENoaWxkTm9kZSB8IHVuZGVmaW5lZCA9IHBhcmVudC5jaGlsZE5vZGVzW2ldO1xuXHRcdFx0aWYgKHBhcmVudENoaWxkTm9kZSkge1xuXHRcdFx0XHRpZiAob2xkQ2hpbGQgJiYgIW5ld0NoaWxkKSB7XG5cdFx0XHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudENoaWxkTm9kZSk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAobmV3Q2hpbGQgJiYgb2xkQ2hpbGQpIHtcblx0XHRcdFx0XHR0aGlzLnBhdGNoTm9kZShwYXJlbnRDaGlsZE5vZGUucGFyZW50Tm9kZSEsIG9sZENoaWxkLCBuZXdDaGlsZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtMeXJhU2NyaXB0UHJvZ3JhbX0gZnJvbSBcIi4uL2NvcmUvcHJvZ3JhbVwiO1xuaW1wb3J0IHtmZXRjaFNvdXJjZX0gZnJvbSBcIi4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcbmltcG9ydCB7Q2xhc3NEZWZpbml0aW9uLCBFbnZpcm9ubWVudCwgSW5zdGFuY2V9IGZyb20gXCIuLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge2NhbGxJbnN0YW5jZU1ldGhvZCwgTGFtYmRhRnVuY3Rpb25DYWxsfSBmcm9tIFwiLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9ydW50aW1lXCI7XG5pbXBvcnQge0V2ZW50VHlwZX0gZnJvbSBcIi4uL2xpYnJhcnkvY2xhc3Nlcy9ldmVudFwiO1xuaW1wb3J0IHtFdmVudFBpcGVsaW5lfSBmcm9tIFwiLi4vY29yZS9ldmVudC9waXBlbGluZVwiO1xuaW1wb3J0IHtHUkFNTUFSfSBmcm9tIFwiLi4vY29yZS9ncmFtbWFyXCI7XG5cbmNvbnN0IGx5cmFFdmVudENsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24gPSBuZXcgRXZlbnRUeXBlKCkuZ2V0Q2xhc3NEZWZpbml0aW9uKCk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW5naW5lIHtcblx0ZXhlY3V0ZUVudHJ5RmlsZSh1cmw6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuXG5cdGNyZWF0ZUluc3RhbmNlKGNsYXNzTmFtZTogc3RyaW5nKTogSW5zdGFuY2U7XG5cblx0Z2V0T2JqZWN0UmVnaXN0cnkoKTogT2JqZWN0UmVnaXN0cnk7XG5cblx0Z2V0RW52aXJvbm1lbnQoKTogRW52aXJvbm1lbnQ7XG5cblx0Z2V0Um9vdEluc3RhbmNlKCk6IEluc3RhbmNlO1xuXG5cdGNhbGxSb290SW5zdGFuY2VNZXRob2QobWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSk6IGFueTtcblxuXHRjYWxsSW5zdGFuY2VNZXRob2QoaW5zdGFuY2U6IEluc3RhbmNlLCBtZXRob2ROYW1lOiBzdHJpbmcsIGFyZ3M6IEFycmF5PGFueT4pOiBhbnk7XG5cblx0Y3JlYXRlRXZlbnQoZXZlbnQ6IEV2ZW50KTogSW5zdGFuY2U7XG5cblx0Y3JlYXRlRXZlbnRIYW5kbGVyKGhhbmRsZXI6IExhbWJkYUZ1bmN0aW9uQ2FsbCwgZXZlbnROYW1lOiBzdHJpbmcpOiAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgV2ViTHlyYVNjcmlwdCBpbXBsZW1lbnRzIEVuZ2luZSB7XG5cdHByaXZhdGUgcmVhZG9ubHkgcHJvZ3JhbTogTHlyYVNjcmlwdFByb2dyYW07XG5cdHByaXZhdGUgcmVhZG9ubHkgX2dsb2JhbE9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeTtcblx0cHJpdmF0ZSByZWFkb25seSBfZ2xvYmFsRW52aXJvbm1lbnQ6IEVudmlyb25tZW50O1xuXHRwcml2YXRlIHJvb3RJbnN0YW5jZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbDtcblxuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZ2xvYmFsRXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSA9IG5ldyBFdmVudFBpcGVsaW5lKCksIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSkge1xuXHRcdHRoaXMucHJvZ3JhbSA9IG5ldyBMeXJhU2NyaXB0UHJvZ3JhbShpc0RlYnVnLCB0aGlzLmdsb2JhbEV2ZW50UGlwZWxpbmUpO1xuXHRcdHRoaXMuX2dsb2JhbE9iamVjdFJlZ2lzdHJ5ID0gdGhpcy5wcm9ncmFtLmdldEdsb2JhbE9iamVjdFJlZ2lzdHJ5KCk7XG5cdFx0dGhpcy5fZ2xvYmFsRW52aXJvbm1lbnQgPSB0aGlzLnByb2dyYW0uZ2V0R2xvYmFsRW52aXJvbm1lbnQoKTtcblx0fVxuXG5cdGdldE9iamVjdFJlZ2lzdHJ5KCk6IE9iamVjdFJlZ2lzdHJ5IHtcblx0XHRyZXR1cm4gdGhpcy5fZ2xvYmFsT2JqZWN0UmVnaXN0cnk7XG5cdH1cblxuXHRnZXRFbnZpcm9ubWVudCgpOiBFbnZpcm9ubWVudCB7XG5cdFx0cmV0dXJuIHRoaXMuX2dsb2JhbEVudmlyb25tZW50O1xuXHR9XG5cblx0cHVibGljIGdldFJvb3RJbnN0YW5jZSgpOiBJbnN0YW5jZSB7XG5cdFx0aWYgKHRoaXMucm9vdEluc3RhbmNlID09PSBudWxsKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ05vIHJvb3QgaW5zdGFuY2UgYXZhaWxhYmxlLicpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5yb290SW5zdGFuY2U7XG5cdH1cblxuXHRwdWJsaWMgY3JlYXRlSW5zdGFuY2UoY2xhc3NOYW1lOiBzdHJpbmcpOiBJbnN0YW5jZSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0Q2xhc3NEZWZpbml0aW9uKGNsYXNzTmFtZSlcblx0XHQgICAgICAgICAgIC5jb25zdHJ1Y3ROZXdJbnN0YW5jZVdpdGhvdXRBcmd1bWVudHMoXG5cdFx0XHQgICAgICAgICAgIHRoaXMuX2dsb2JhbE9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0ICAgICAgICAgICB0aGlzLl9nbG9iYWxFbnZpcm9ubWVudCxcblx0XHRcdCAgICAgICAgICAgdGhpcy5nbG9iYWxFdmVudFBpcGVsaW5lXG5cdFx0ICAgICAgICAgICApO1xuXHR9XG5cblx0cHVibGljIGNhbGxSb290SW5zdGFuY2VNZXRob2QobWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuY2FsbEluc3RhbmNlTWV0aG9kKHRoaXMuZ2V0Um9vdEluc3RhbmNlKCksIG1ldGhvZE5hbWUsIGFyZ3MpO1xuXHR9XG5cblx0cHVibGljIGNhbGxJbnN0YW5jZU1ldGhvZChpbnN0YW5jZTogSW5zdGFuY2UsIG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10pOiBhbnkge1xuXHRcdHJldHVybiBjYWxsSW5zdGFuY2VNZXRob2QoXG5cdFx0XHRpbnN0YW5jZSxcblx0XHRcdGluc3RhbmNlLmZpbmRlTWV0aG9kTm9kZShtZXRob2ROYW1lKSxcblx0XHRcdGFyZ3MsXG5cdFx0XHR0aGlzLl9nbG9iYWxPYmplY3RSZWdpc3RyeSxcblx0XHRcdHRoaXMuX2dsb2JhbEVudmlyb25tZW50LFxuXHRcdFx0dGhpcy5nbG9iYWxFdmVudFBpcGVsaW5lXG5cdFx0KTtcblx0fVxuXG5cdHB1YmxpYyBhc3luYyBleGVjdXRlRW50cnlGaWxlKHVybDogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiB0aGlzLnByb2dyYW0uZXhlY3V0ZShhd2FpdCBmZXRjaFNvdXJjZSh1cmwpKVxuXHRcdCAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuXHRcdFx0ICAgICAgICAgICB0aGlzLnJvb3RJbnN0YW5jZSA9IHRoaXMuY3JlYXRlSW5zdGFuY2UoY2xhc3NOYW1lKTtcblx0XHQgICAgICAgICAgIH0pO1xuXHR9XG5cblx0cHVibGljIGNyZWF0ZUV2ZW50KGV2ZW50OiBFdmVudCk6IEluc3RhbmNlIHtcblx0XHRyZXR1cm4gbHlyYUV2ZW50Q2xhc3NEZWYuY29uc3RydWN0TmF0aXZlSW5zdGFuY2UoW2V2ZW50XSk7XG5cdH1cblxuXHRwdWJsaWMgY3JlYXRlRXZlbnRIYW5kbGVyKGhhbmRsZXI6IExhbWJkYUZ1bmN0aW9uQ2FsbCwgZXZlbnROYW1lOiBzdHJpbmcpOiAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkIHtcblx0XHRyZXR1cm4gKGV2ZW50OiBFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0dGhpcy5nbG9iYWxFdmVudFBpcGVsaW5lLmVtaXQoXG5cdFx0XHRcdGV2ZW50TmFtZSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGludm9rZTogKCk6IGFueSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBpbnN0YW5jZTogSW5zdGFuY2UgPSBoYW5kbGVyLmZ1bmN0aW9uRW52LmdldChHUkFNTUFSLlRISVMpO1xuXG5cdFx0XHRcdFx0XHRoYW5kbGVyLmV2YWxDYWxsKGluc3RhbmNlLCB0aGlzLmNyZWF0ZUV2ZW50KGV2ZW50KSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRldmVudFxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH07XG5cdH1cblxuXG5cdHByaXZhdGUgZ2V0Q2xhc3NEZWZpbml0aW9uKGNsYXNzTmFtZTogc3RyaW5nKTogQ2xhc3NEZWZpbml0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5fZ2xvYmFsT2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQoY2xhc3NOYW1lKTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQgdHlwZSB7Vk5vZGV9IGZyb20gXCIuLi9jb3JlL3Zkb20vdmRvbVwiO1xuaW1wb3J0IHR5cGUge0luc3RhbmNlfSBmcm9tIFwiLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5cbmV4cG9ydCBjbGFzcyBFdmVudEhhbmRsZXJSZWdpc3RyeSB7XG5cdHByaXZhdGUgcmVnaXN0cnk6IFdlYWtNYXA8SFRNTEVsZW1lbnQsIFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uPj4gPSBuZXcgV2Vha01hcDxIVE1MRWxlbWVudCwgUmVjb3JkPHN0cmluZywgRnVuY3Rpb24+PigpO1xuXG5cdHB1YmxpYyByZWdpc3RlcihlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcGVydHlLZXk6IHN0cmluZywgaGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcblx0XHRjb25zdCBldmVudEhhbmRsZXJzOiBSZWNvcmQ8c3RyaW5nLCBGdW5jdGlvbj4gPSB0aGlzLnJlZ2lzdHJ5LmdldChlbGVtZW50KSA/PyB7fTtcblxuXHRcdGV2ZW50SGFuZGxlcnNbcHJvcGVydHlLZXldID0gaGFuZGxlcjtcblxuXHRcdHRoaXMucmVnaXN0cnkuc2V0KGVsZW1lbnQsIGV2ZW50SGFuZGxlcnMpO1xuXHR9XG5cblx0cHVibGljIHVucmVnaXN0ZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIHByb3BlcnR5S2V5OiBzdHJpbmcpOiBGdW5jdGlvbiB8IG51bGwge1xuXHRcdGNvbnN0IGV2ZW50SGFuZGxlcnM6IFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uPiA9IHRoaXMucmVnaXN0cnkuZ2V0KGVsZW1lbnQpID8/IHt9O1xuXG5cdFx0Y29uc3QgZXZlbnRIYW5kbGVyOiBGdW5jdGlvbiB8IHVuZGVmaW5lZCA9IGV2ZW50SGFuZGxlcnNbcHJvcGVydHlLZXldO1xuXHRcdGlmIChldmVudEhhbmRsZXIpIHtcblx0XHRcdGRlbGV0ZSBldmVudEhhbmRsZXJzW3Byb3BlcnR5S2V5XTtcblxuXHRcdFx0dGhpcy5yZWdpc3RyeS5zZXQoZWxlbWVudCwgZXZlbnRIYW5kbGVycyk7XG5cblx0XHRcdHJldHVybiBldmVudEhhbmRsZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFZET00ge1xuXHRwcml2YXRlIGluc3RhbmNlTWFwOiBNYXA8c3RyaW5nLCBWTm9kZT4gPSBuZXcgTWFwPHN0cmluZywgVk5vZGU+KCk7XG5cblx0cHVibGljIHJlZ2lzdGVyKGluc3RhbmNlOiBJbnN0YW5jZSwgbm9kZTogVk5vZGUpOiB2b2lkIHtcblx0XHR0aGlzLmluc3RhbmNlTWFwLnNldChpbnN0YW5jZS5pZCwgbm9kZSk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0Tm9kZUJ5SW5zdGFuY2UoaW5zdGFuY2U6IEluc3RhbmNlKTogVk5vZGUge1xuXHRcdGNvbnN0IHZOb2RlOiBWTm9kZSB8IHVuZGVmaW5lZCA9IHRoaXMuaW5zdGFuY2VNYXAuZ2V0KGluc3RhbmNlLmlkKTtcblx0XHRpZiAoIXZOb2RlKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEluc3RhbmNlIHdpdGggaWQgJHtpbnN0YW5jZS5pZH0gbm90IGZvdW5kLmApO1xuXHRcdH1cblx0XHRyZXR1cm4gdk5vZGU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHt0eXBlIEVuZ2luZSwgV2ViTHlyYVNjcmlwdH0gZnJvbSBcIi4vZW5naW5lXCI7XG5pbXBvcnQge3R5cGUgRWxlbWVudFBhdGNoZXIsIEhUTUxFbGVtZW50UGF0Y2hlcn0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgdHlwZSB7Vk5vZGV9IGZyb20gXCIuLi9jb3JlL3Zkb20vdmRvbVwiO1xuaW1wb3J0IHtFdmVudFBpcGVsaW5lfSBmcm9tIFwiLi4vY29yZS9ldmVudC9waXBlbGluZVwiO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcbmltcG9ydCB7dHlwZSBJbnN0YW5jZX0gZnJvbSBcIi4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtMYW1iZGFGdW5jdGlvbkNhbGx9IGZyb20gXCIuLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX3J1bnRpbWVcIjtcbmltcG9ydCB7RXZlbnRIYW5kbGVyUmVnaXN0cnksIFZET019IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5pbXBvcnQgTHlyYUV2ZW50cyBmcm9tIFwiLi4vY29yZS9ldmVudC9ldmVudHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBcHBsaWNhdGlvblJ1bnRpbWUge1xuXHRnZXQgZW5naW5lKCk6IEVuZ2luZTtcblxuXHRnZXQgZXZlbnRQaXBlbGluZSgpOiBFdmVudFBpcGVsaW5lO1xuXG5cdHN0YXJ0KHVybDogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG5cblx0Y3JlYXRlSW5zdGFuY2UoY2xhc3NOYW1lOiBzdHJpbmcpOiBJbnN0YW5jZTtcblxuXHRjYWxsUm9vdEluc3RhbmNlTWV0aG9kKG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10pOiBhbnk7XG5cblx0Y2FsbE1ldGhvZChpbnN0YW5jZTogSW5zdGFuY2UsIG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10pOiBhbnk7XG5cblx0cmVuZGVyUm9vdENvbXBvbmVudCgpOiBWTm9kZTtcblxuXHRyZW5kZXJDb21wb25lbnQoaW5zdGFuY2U6IEluc3RhbmNlKTogVk5vZGU7XG5cblx0YWRkRXZlbnRIYW5kbGVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwcm9wZXJ0eUtleTogc3RyaW5nLCBoYW5kbGVyOiBMYW1iZGFGdW5jdGlvbkNhbGwpOiB2b2lkO1xuXG5cdHJlbW92ZUV2ZW50SGFuZGxlcihlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcGVydHlLZXk6IHN0cmluZyk6IHZvaWQ7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEFwcGxpY2F0aW9uUnVudGltZSBpbXBsZW1lbnRzIEFwcGxpY2F0aW9uUnVudGltZSB7XG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJlYWRvbmx5IF9lbmdpbmU6IEVuZ2luZSxcblx0XHRwcml2YXRlIHJlYWRvbmx5IF9ldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lID0gbmV3IEV2ZW50UGlwZWxpbmUoKSxcblx0XHRwcml2YXRlIHJlYWRvbmx5IGV2ZW50SGFuZGxlclJlZ2lzdHJ5OiBFdmVudEhhbmRsZXJSZWdpc3RyeSA9IG5ldyBFdmVudEhhbmRsZXJSZWdpc3RyeSgpXG5cdCkge1xuXHR9XG5cblx0Z2V0IGVuZ2luZSgpOiBFbmdpbmUge1xuXHRcdHJldHVybiB0aGlzLl9lbmdpbmU7XG5cdH1cblxuXHRnZXQgZXZlbnRQaXBlbGluZSgpOiBFdmVudFBpcGVsaW5lIHtcblx0XHRyZXR1cm4gdGhpcy5fZXZlbnRQaXBlbGluZTtcblx0fVxuXG5cdHB1YmxpYyByZW5kZXJSb290Q29tcG9uZW50KCk6IFZOb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5yZW5kZXJDb21wb25lbnQodGhpcy5fZW5naW5lLmdldFJvb3RJbnN0YW5jZSgpKTtcblx0fVxuXG5cdHB1YmxpYyByZW5kZXJDb21wb25lbnQoaW5zdGFuY2U6IEluc3RhbmNlKTogVk5vZGUge1xuXHRcdHJldHVybiB0aGlzLmNhbGxNZXRob2QoaW5zdGFuY2UsICdyZW5kZXInLCBbXSkgYXMgVk5vZGVcblx0fVxuXG5cdHB1YmxpYyBzdGFydCh1cmw6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcblx0fVxuXG5cdHB1YmxpYyBjcmVhdGVJbnN0YW5jZShjbGFzc05hbWU6IHN0cmluZyk6IEluc3RhbmNlIHtcblx0XHRyZXR1cm4gdGhpcy5fZW5naW5lLmNyZWF0ZUluc3RhbmNlKGNsYXNzTmFtZSk7XG5cdH1cblxuXHRwdWJsaWMgY2FsbFJvb3RJbnN0YW5jZU1ldGhvZChtZXRob2ROYW1lOiBzdHJpbmcsIGFyZ3M6IGFueVtdID0gW10pOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLl9lbmdpbmUuY2FsbFJvb3RJbnN0YW5jZU1ldGhvZChtZXRob2ROYW1lLCBhcmdzKTtcblx0fVxuXG5cdHB1YmxpYyBjYWxsTWV0aG9kKGluc3RhbmNlOiBJbnN0YW5jZSwgbWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSA9IFtdKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5fZW5naW5lLmNhbGxJbnN0YW5jZU1ldGhvZChpbnN0YW5jZSwgbWV0aG9kTmFtZSwgYXJncyk7XG5cdH1cblxuXHRwdWJsaWMgYWRkRXZlbnRIYW5kbGVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwcm9wZXJ0eUtleTogc3RyaW5nLCBoYW5kbGVyOiBMYW1iZGFGdW5jdGlvbkNhbGwpOiB2b2lkIHtcblx0XHRjb25zdCBldmVudE5hbWU6IHN0cmluZyA9IHByb3BlcnR5S2V5LnNsaWNlKDIpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0Y29uc3QgZXZlbnRIYW5kbGVyOiAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkID0gdGhpcy5lbmdpbmUuY3JlYXRlRXZlbnRIYW5kbGVyKGhhbmRsZXIsIEV2ZW50cy5ET01fRVZFTlQpO1xuXG5cdFx0dGhpcy5ldmVudEhhbmRsZXJSZWdpc3RyeS5yZWdpc3RlcihlbGVtZW50LCBwcm9wZXJ0eUtleSwgZXZlbnRIYW5kbGVyKTtcblxuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50SGFuZGxlcik7XG5cdH1cblxuXHRwdWJsaWMgcmVtb3ZlRXZlbnRIYW5kbGVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwcm9wZXJ0eUtleTogc3RyaW5nKTogdm9pZCB7XG5cdFx0Y29uc3QgZXZlbnROYW1lOiBzdHJpbmcgPSBwcm9wZXJ0eUtleS5zbGljZSgyKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcblxuXHRcdGNvbnN0IGV2ZW50SGFuZGxlcjogRnVuY3Rpb24gfCBudWxsID0gdGhpcy5ldmVudEhhbmRsZXJSZWdpc3RyeS51bnJlZ2lzdGVyKGVsZW1lbnQsIHByb3BlcnR5S2V5KTtcblxuXHRcdGlmIChldmVudEhhbmRsZXIpIHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50SGFuZGxlciBhcyBFdmVudExpc3RlbmVyKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFdlYkFwcGxpY2F0aW9uUnVudGltZSBleHRlbmRzIEFic3RyYWN0QXBwbGljYXRpb25SdW50aW1lIHtcblx0cHJpdmF0ZSByZWFkb25seSB2ZG9tOiBWRE9NID0gbmV3IFZET00oKTtcblx0cHJpdmF0ZSByZWFkb25seSBwYXRjaGVyOiBFbGVtZW50UGF0Y2hlcjtcblxuXHRwcml2YXRlIGN1cnJlbnRWTm9kZTogVk5vZGUgfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSBpc1JlbmRlcmluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdG1vdW50UG9pbnQ6IEhUTUxFbGVtZW50LFxuXHRcdGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSxcblx0XHRldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lID0gbmV3IEV2ZW50UGlwZWxpbmUoKSxcblx0XHRldmVudEhhbmRsZXJSZWdpc3RyeTogRXZlbnRIYW5kbGVyUmVnaXN0cnkgPSBuZXcgRXZlbnRIYW5kbGVyUmVnaXN0cnkoKVxuXHQpIHtcblx0XHRzdXBlcihuZXcgV2ViTHlyYVNjcmlwdChldmVudFBpcGVsaW5lLCBpc0RlYnVnKSwgZXZlbnRQaXBlbGluZSwgZXZlbnRIYW5kbGVyUmVnaXN0cnkpO1xuXG5cdFx0dGhpcy5wYXRjaGVyID0gbmV3IEhUTUxFbGVtZW50UGF0Y2hlcihtb3VudFBvaW50LCB0aGlzLCB0aGlzLnZkb20pO1xuXG5cdFx0dGhpcy5leHBvc2VSdW50aW1lKCk7XG5cdH1cblxuXHRwdWJsaWMgb3ZlcnJpZGUgYXN5bmMgc3RhcnQodXJsOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nID0gJ0FwcCcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRhd2FpdCB0aGlzLmVuZ2luZS5leGVjdXRlRW50cnlGaWxlKHVybCwgY2xhc3NOYW1lKTtcblxuXHRcdHRoaXMubGlzdGVuVG9Eb21FdmVudHMoKTtcblxuXHRcdHRoaXMucmVxdWVzdEZ1bGxSZW5kZXIoKTtcblx0fVxuXG5cdHB1YmxpYyByZXF1ZXN0RnVsbFJlbmRlcigpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pc1JlbmRlcmluZykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHF1ZXVlTWljcm90YXNrKCgpOiB2b2lkID0+IHtcblx0XHRcdHRoaXMucGVyZm9ybUZ1bGxSZW5kZXIoKTtcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyByZXF1ZXN0Q29tcG9uZW50UmVuZGVyKG9sZFZOb2RlOiBWTm9kZSwgaW5zdGFuY2U6IEluc3RhbmNlKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNSZW5kZXJpbmcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRxdWV1ZU1pY3JvdGFzaygoKTogdm9pZCA9PiB7XG5cdFx0XHR0aGlzLnBlcmZvcm1Db21wb25lbnRSZW5kZXIob2xkVk5vZGUsIGluc3RhbmNlKTtcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgcGVyZm9ybUZ1bGxSZW5kZXIoKTogdm9pZCB7XG5cdFx0dGhpcy5pc1JlbmRlcmluZyA9IHRydWU7XG5cblx0XHRjb25zdCBuZXh0OiBWTm9kZSA9IHRoaXMucmVuZGVyUm9vdENvbXBvbmVudCgpO1xuXG5cdFx0dGhpcy5wYXRjaGVyLnBhdGNoKHRoaXMuY3VycmVudFZOb2RlLCBuZXh0KTtcblxuXHRcdHRoaXMuY3VycmVudFZOb2RlID0gbmV4dDtcblxuXHRcdHRoaXMudmRvbS5yZWdpc3Rlcih0aGlzLmVuZ2luZS5nZXRSb290SW5zdGFuY2UoKSwgbmV4dCk7XG5cblx0XHR0aGlzLmlzUmVuZGVyaW5nID0gZmFsc2U7XG5cdH1cblxuXHRwcml2YXRlIHBlcmZvcm1Db21wb25lbnRSZW5kZXIob2xkVk5vZGU6IFZOb2RlLCBpbnN0YW5jZTogSW5zdGFuY2UpOiB2b2lkIHtcblx0XHR0aGlzLmlzUmVuZGVyaW5nID0gdHJ1ZTtcblxuXHRcdGNvbnN0IG5leHQ6IFZOb2RlID0gdGhpcy5yZW5kZXJDb21wb25lbnQoaW5zdGFuY2UpO1xuXG5cdFx0dGhpcy5wYXRjaGVyLnBhdGNoKG9sZFZOb2RlLCBuZXh0KTtcblxuXHRcdHRoaXMudmRvbS5yZWdpc3RlcihpbnN0YW5jZSwgbmV4dCk7XG5cblx0XHRpbnN0YW5jZS5tYXJrQ2xlYW4odGhpcy5ldmVudFBpcGVsaW5lKTtcblxuXHRcdHRoaXMuaXNSZW5kZXJpbmcgPSBmYWxzZTtcblx0fVxuXG5cdHByaXZhdGUgbGlzdGVuVG9Eb21FdmVudHMoKTogdm9pZCB7XG5cdFx0dGhpcy5ldmVudFBpcGVsaW5lXG5cdFx0ICAgIC5vbihFdmVudHMuRE9NX0VWRU5ULCAoe2ludm9rZX06IGFueSk6IHZvaWQgPT4ge1xuXHRcdFx0ICAgIGludm9rZSgpO1xuXHRcdCAgICB9KTtcblxuXHRcdHRoaXMuZXZlbnRQaXBlbGluZVxuXHRcdCAgICAub24oTHlyYUV2ZW50cy5MWVJBX0lOU1RBTkNFX0RJUlRZX1NUQVRFLCAoe2luc3RhbmNlfTogYW55KTogdm9pZCA9PiB7XG5cdFx0XHQgICAgdGhpcy5yZXF1ZXN0Q29tcG9uZW50UmVuZGVyKFxuXHRcdFx0XHQgICAgdGhpcy52ZG9tLmdldE5vZGVCeUluc3RhbmNlKGluc3RhbmNlKSxcblx0XHRcdFx0ICAgIGluc3RhbmNlXG5cdFx0XHQgICAgKTtcblx0XHQgICAgfSk7XG5cdH1cblxuXHRwcml2YXRlIGV4cG9zZVJ1bnRpbWUoKTogdm9pZCB7XG5cdFx0Y29uc3QgZ2xvYmFsOiBhbnkgPSB3aW5kb3cgYXMgV2luZG93O1xuXG5cdFx0Z2xvYmFsLl9fTFlSQV9fID0gZ2xvYmFsLl9fTFlSQV9fIHx8IHtcblx0XHRcdHZlcnNpb246ICcwLjAuMScsXG5cdFx0XHRydW50aW1lOiB0aGlzLFxuXHRcdH07XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtQYXJzZXJ9IGZyb20gXCIuL2NvcmUvcGFyc2VyL3BhcnNlclwiO1xuaW1wb3J0IHt3cmFwSnNFcnJvcn0gZnJvbSBcIi4vY29yZS9lcnJvcnNcIjtcbmltcG9ydCB7ZmV0Y2hTb3VyY2UsIFNvdXJjZX0gZnJvbSBcIi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuaW1wb3J0IHtBU1ROb2RlfSBmcm9tIFwiLi9jb3JlL2FzdFwiO1xuaW1wb3J0IHtUb2tlbml6ZXJ9IGZyb20gXCIuL2NvcmUvdG9rZW5pemVyL3Rva2VuaXplclwiO1xuaW1wb3J0IHtUb2tlbn0gZnJvbSBcIi4vY29yZS9ncmFtbWFyXCI7XG5pbXBvcnQge0x5cmFTY3JpcHRQcm9ncmFtfSBmcm9tIFwiLi9jb3JlL3Byb2dyYW1cIjtcbmltcG9ydCB7RXZlbnRQaXBlbGluZX0gZnJvbSBcIi4vY29yZS9ldmVudC9waXBlbGluZVwiO1xuaW1wb3J0IHtTdGF0ZX0gZnJvbSBcIi4vY29yZS9ldmVudC9zdGF0ZVwiO1xuaW1wb3J0IHtIVE1MRWxlbWVudENyZWF0b3J9IGZyb20gXCIuL2hvc3QvZG9tXCI7XG5cbmV4cG9ydCB7V2ViTHlyYVNjcmlwdH0gZnJvbSBcIi4vaG9zdC9lbmdpbmVcIjtcbmV4cG9ydCB7V2ViQXBwbGljYXRpb25SdW50aW1lfSBmcm9tIFwiLi9ob3N0L3J1bnRpbWVcIjtcblxuY29uc3QgTHlyYSA9IHtcblx0U291cmNlLFxuXHRQYXJzZXIsXG5cdFRva2VuaXplcixcblx0RXZlbnRQaXBlbGluZSxcblx0SFRNTEVsZW1lbnRDcmVhdG9yLFxuXHRTdGF0ZSxcblx0UHJvZ3JhbTogKGlzRGVidWc6IGJvb2xlYW4pOiBMeXJhU2NyaXB0UHJvZ3JhbSA9PiBQcm9ncmFtKGlzRGVidWcpLFxuXHRleGVjdXRlOiAoc291cmNlOiBTb3VyY2UsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4gPT4gZXhlY3V0ZShzb3VyY2UsIGlzRGVidWcpLFxuXHRleGVjdXRlRnJvbVN0cmluZzogKGNvZGU6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiBleGVjdXRlRnJvbVN0cmluZyhjb2RlLCBpc0RlYnVnKSxcblx0ZXhlY3V0ZUZyb21Vcmw6IGFzeW5jICh1cmw6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiBleGVjdXRlRnJvbVVybCh1cmwsIGlzRGVidWcpLFxuXHRleGVjdXRlVGVzdDogKHNvdXJjZTogU291cmNlLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+ID0+IGV4ZWN1dGVUZXN0KHNvdXJjZSwgaXNEZWJ1ZyksXG5cdGV4ZWN1dGVUZXN0U3RyaW5nOiAoY29kZTogc3RyaW5nLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+ID0+IGV4ZWN1dGVUZXN0U3RyaW5nKGNvZGUsIGlzRGVidWcpLFxuXHRleGVjdXRlVGVzdFVybDogKHVybDogc3RyaW5nLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+ID0+IGV4ZWN1dGVUZXN0VXJsKHVybCwgaXNEZWJ1ZyksXG5cdHRva2VuaXplOiAoc291cmNlOiBTb3VyY2UpOiBUb2tlbltdID0+IHRva2VuaXplKHNvdXJjZSksXG5cdHRva2VuaXplVXJsOiAodXJsOiBzdHJpbmcpOiBQcm9taXNlPFRva2VuW10+ID0+IHRva2VuaXplVXJsKHVybCksXG5cdHBhcnNlVHJlZTogKHNvdXJjZTogU291cmNlKTogQVNUTm9kZSA9PiBwYXJzZVRyZWUoc291cmNlKSxcblx0cGFyc2VUcmVlVXJsOiAodXJsOiBzdHJpbmcpOiBQcm9taXNlPEFTVE5vZGU+ID0+IHBhcnNlVHJlZVVybCh1cmwpLFxufTtcblxuZnVuY3Rpb24gUHJvZ3JhbShpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBMeXJhU2NyaXB0UHJvZ3JhbSB7XG5cdHJldHVybiBuZXcgTHlyYVNjcmlwdFByb2dyYW0oaXNEZWJ1Zyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGUoc291cmNlOiBTb3VyY2UsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBQcm9ncmFtKGlzRGVidWcpXG5cdFx0XHQuZXhlY3V0ZShzb3VyY2UpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKHdyYXBKc0Vycm9yKGVycm9yLCBzb3VyY2UpXG5cdFx0XHRcdCAgICAgICAgICAgICAgLmZvcm1hdCgpKTtcblx0XHR9XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZUZyb21VcmwodXJsOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4ge1xuXHRyZXR1cm4gYXdhaXQgZXhlY3V0ZShhd2FpdCBmZXRjaFNvdXJjZSh1cmwpLCBpc0RlYnVnKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZUZyb21TdHJpbmcoY29kZTogc3RyaW5nLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgc291cmNlID0gbmV3IFNvdXJjZShjb2RlKTtcblxuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBQcm9ncmFtKGlzRGVidWcpXG5cdFx0XHQuZXhlY3V0ZShzb3VyY2UpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKHdyYXBKc0Vycm9yKGVycm9yLCBzb3VyY2UpXG5cdFx0XHRcdCAgICAgICAgICAgICAgLmZvcm1hdCgpKTtcblx0XHR9XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZVRlc3Qoc291cmNlOiBTb3VyY2UsIGlzRGVidWcgPSBmYWxzZSk6IFByb21pc2U8dm9pZD4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBQcm9ncmFtKGlzRGVidWcpXG5cdFx0XHQuZXhlY3V0ZVRlc3Qoc291cmNlKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcih3cmFwSnNFcnJvcihlcnJvciwgc291cmNlKVxuXHRcdFx0XHQgICAgICAgICAgICAgIC5mb3JtYXQoKSk7XG5cdFx0fVxuXHRcdHRocm93IGVycm9yO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVUZXN0VXJsKHVybDogc3RyaW5nLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0cmV0dXJuIGF3YWl0IGV4ZWN1dGVUZXN0KGF3YWl0IGZldGNoU291cmNlKHVybCksIGlzRGVidWcpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlVGVzdFN0cmluZyhjb2RlOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBzb3VyY2UgPSBuZXcgU291cmNlKGNvZGUpO1xuXG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IFByb2dyYW0oaXNEZWJ1Zylcblx0XHRcdC5leGVjdXRlVGVzdChzb3VyY2UpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKHdyYXBKc0Vycm9yKGVycm9yLCBzb3VyY2UpXG5cdFx0XHRcdCAgICAgICAgICAgICAgLmZvcm1hdCgpKTtcblx0XHR9XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRva2VuaXplKHNvdXJjZTogU291cmNlKTogVG9rZW5bXSB7XG5cdHJldHVybiBuZXcgVG9rZW5pemVyKHNvdXJjZSkudG9rZW5pemUoKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRva2VuaXplVXJsKHVybDogc3RyaW5nKTogUHJvbWlzZTxUb2tlbltdPiB7XG5cdHJldHVybiB0b2tlbml6ZShhd2FpdCBmZXRjaFNvdXJjZSh1cmwpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVHJlZShzb3VyY2U6IFNvdXJjZSk6IEFTVE5vZGUge1xuXHRyZXR1cm4gbmV3IFBhcnNlcihzb3VyY2UpLnBhcnNlKCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwYXJzZVRyZWVVcmwodXJsOiBzdHJpbmcpOiBQcm9taXNlPEFTVE5vZGU+IHtcblx0cmV0dXJuIHBhcnNlVHJlZShhd2FpdCBmZXRjaFNvdXJjZSh1cmwpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTHlyYTtcbiIKICBdLAogICJtYXBwaW5ncyI6ICI7QUFFTyxNQUFNLFFBQVE7QUFBQSxTQUNiLFNBQWlCO0FBQUEsU0FDakIsT0FBZTtBQUFBLFNBQ2YsTUFBYztBQUFBLFNBQ2QsT0FBZTtBQUFBLFNBQ2YsUUFBZ0I7QUFBQSxTQUNoQixZQUFvQjtBQUFBLFNBQ3BCLFVBQWtCO0FBQUEsU0FDbEIsYUFBcUI7QUFBQSxTQUNyQixjQUFzQjtBQUFBLFNBQ3RCLE1BQWM7QUFBQSxTQUNkLE9BQWU7QUFBQSxTQUNmLFNBQWlCO0FBQUEsU0FDakIsVUFBa0I7QUFBQSxTQUNsQixTQUFpQjtBQUFBLFNBQ2pCLFdBQW1CO0FBQUEsU0FDbkIsU0FBaUI7QUFBQSxTQUNqQixRQUFnQjtBQUFBLFNBQ2hCLE9BQWU7QUFBQSxTQUNmLFFBQWdCO0FBQUEsU0FDaEIsS0FBYTtBQUFBLFNBQ2IsT0FBZTtBQUFBLFNBQ2YsUUFBZ0I7QUFBQSxTQUNoQixVQUFrQjtBQUFBLFNBQ2xC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QVksTUFBTSxZQUFZLEdBQUcsR0FBRyxPQUFPO0FBQUE7QUFHekQsZUFBZSxpQkFBaUIsQ0FBQyxNQUFjLFVBQW1CLE9BQXNCO0FBQUEsRUFDdkYsTUFBTSxTQUFTLElBQUksT0FBTyxJQUFJO0FBQUEsRUFFOUIsSUFBSTtBQUFBLElBQ0gsT0FBTyxNQUFNLFFBQVEsT0FBTyxFQUMxQixZQUFZLE1BQU07QUFBQSxJQUNuQixPQUFPLE9BQU87QUFBQSxJQUNmLElBQUksaUJBQWlCLE9BQU87QUFBQSxNQUMzQixRQUFRLE1BQU0sWUFBWSxPQUFPLE1BQU0sRUFDdkIsT0FBTyxDQUFDO0FBQUEsSUFDekI7QUFBQSxJQUNBLE1BQU07QUFBQTtBQUFBO0FBSUQsU0FBUyxRQUFRLENBQUMsUUFBeUI7QUFBQSxFQUNqRCxPQUFPLElBQUksVUFBVSxNQUFNLEVBQUUsU0FBUztBQUFBO0FBR3ZDLGVBQXNCLFdBQVcsQ0FBQyxLQUErQjtBQUFBLEVBQ2hFLE9BQU8sU0FBUyxNQUFNLFlBQVksR0FBRyxDQUFDO0FBQUE7QUFHaEMsU0FBUyxTQUFTLENBQUMsUUFBeUI7QUFBQSxFQUNsRCxPQUFPLElBQUksT0FBTyxNQUFNLEVBQUUsTUFBTTtBQUFBO0FBR2pDLGVBQXNCLFlBQVksQ0FBQyxLQUErQjtBQUFBLEVBQ2pFLE9BQU8sVUFBVSxNQUFNLFlBQVksR0FBRyxDQUFDO0FBQUE7QUFHeEMsSUFBZTsiLAogICJkZWJ1Z0lkIjogIkZEQTBBNjkwQ0NCMkNCNDU2NDc1NkUyMTY0NzU2RTIxIiwKICAibmFtZXMiOiBbXQp9
