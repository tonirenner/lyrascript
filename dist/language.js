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
var CLASS_NAME6 = "Event";

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
  return classDef.constructEmptyInstance();
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
  const instance = classDef.constructEmptyInstance();
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
  try {
    const classDef = objectRegistry.classes.get(node.tag);
    return evalDomComponentNode(node, classDef, environment, objectRegistry);
  } catch (e) {}
  return evalDomHtmlNode(node, objectRegistry, environment, thisValue);
}
function evalDomHtmlNode(node, objectRegistry, environment, thisValue = null) {
  const props = {};
  for (const [name, value] of node.props) {
    props[name] = evalExpression(value, objectRegistry, environment, thisValue);
  }
  const children = [];
  for (const child of node.children) {
    if (child instanceof ASTVDomTextNode) {
      children.push(child.value);
    } else {
      children.push(evalExpression(child, objectRegistry, environment, thisValue));
    }
  }
  return {
    tag: node.tag,
    props,
    children
  };
}
function evalDomComponentNode(node, classDef, environment, objectRegistry) {
  const instance = classDef.constructNewInstanceWithoutArguments(objectRegistry, environment);
  const methodNode = classDef.findMethod("render");
  for (const [key, value] of node.props.entries()) {
    instance.__instanceFields[key] = evalExpression(value, objectRegistry, environment, instance);
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
  constructEmptyInstance() {
    return new Instance(this);
  }
  constructNewInstanceWithoutArguments(objectRegistry, environment) {
    return this.constructNewInstance([], objectRegistry, environment);
  }
  constructNewInstance(args, objectRegistry, environment) {
    const newNode = new ASTNewNode(args, new ASTTypeNode(ASTTypeNode.KIND_SIMPLE, this.name));
    return this.constructInstanceByNewNode(newNode, objectRegistry, environment);
  }
  constructInstanceByNewNode(expr, objectRegistry, environment) {
    const instance = this.constructEmptyInstance();
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
    const instance = this.constructEmptyInstance();
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

// language/src/host/event.ts
var Events = {
  DOM_EVENT: "dom:event"
};
var event_default = Events;

// language/src/host/dom.ts
class HTMLElementCreator {
  evenPipeline;
  lyraEventClassDef;
  constructor(evenPipeline) {
    this.evenPipeline = evenPipeline;
    this.lyraEventClassDef = new EventType().getClassDefinition();
  }
  createElement(vNode) {
    const element = document.createElement(vNode.tag);
    let textBuffer = [];
    function flushTextBuffer() {
      if (textBuffer.length > 0) {
        element.appendChild(document.createTextNode(textBuffer.join("")));
        textBuffer = [];
      }
    }
    for (const [property, fn] of Object.entries(vNode.props)) {
      if (!property.startsWith("on")) {
        continue;
      }
      if (!(fn instanceof LambdaFunctionCall)) {
        continue;
      }
      this.attachEventListener(element, property, fn);
    }
    for (const child of vNode.children) {
      if (typeof child === "string") {
        textBuffer.push(child);
      } else {
        element.appendChild(this.createElement(child));
      }
      flushTextBuffer();
    }
    flushTextBuffer();
    return element;
  }
  attachEventListener(element, property, fn) {
    const event = property.slice(2).toLowerCase();
    element.addEventListener(event, this.wrapCallback(fn));
  }
  wrapCallback(fn) {
    return (event) => {
      this.evenPipeline.emit(event_default.DOM_EVENT, {
        invoke: () => {
          fn.evalCall(fn.functionEnv.get(GRAMMAR.THIS), this.createLyraEventInstance(event));
        },
        event
      });
    };
  }
  createLyraEventInstance(event) {
    const eventInstance = this.lyraEventClassDef.constructEmptyInstance();
    eventInstance.__nativeInstance = new this.lyraEventClassDef.nativeInstance(event);
    return eventInstance;
  }
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
    return this.getClassDefinition(className).constructNewInstanceWithoutArguments(this.objectRegistry, this.environment);
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
      this.rootInstance = this.createInstance(className);
    });
  }
  getClassDefinition(className) {
    return this.objectRegistry.classes.get(className);
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
  eventPipeline;
  elementCreator;
  currentVNode = null;
  isRendering = false;
  renderFunction = null;
  constructor(mountPoint, isDebug = false, eventPipeline = new EventPipeline, elementCreator = new HTMLElementCreator(eventPipeline)) {
    super(new WebLyraScript(isDebug));
    this.mountPoint = mountPoint;
    this.eventPipeline = eventPipeline;
    this.elementCreator = elementCreator;
  }
  async start(url, className = "App") {
    await this.engine.executeEntryFile(url, className);
    this.startListeningToDomEvents();
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
  startListeningToDomEvents() {
    this.eventPipeline.on(event_default.DOM_EVENT, ({ invoke }) => {
      invoke();
    });
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

//# debugId=4AF100428A3980E964756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibGFuZ3VhZ2Uvc3JjL2NvcmUvZ3JhbW1hci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9hc3QudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvdG9rZW5pemVyL3Rva2VuaXplci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9lcnJvcnMudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvbmF0aXZlX2NsYXNzLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX2NvbnZlcnNpb24udHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9zdHJpbmcudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9zeXN0ZW0udHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9hc3NlcnQudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9udW1iZXIudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9hcnJheS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9ldmVudC9zdGF0ZS50cyIsICJsYW5ndWFnZS9zcmMvbGlicmFyeS9jbGFzc2VzL3N0YXRlLnRzIiwgImxhbmd1YWdlL3NyYy9saWJyYXJ5L2NsYXNzZXMvZXZlbnQudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvbmF0aXZlX2NsYXNzZXMudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvbmF0aXZlX2Z1bmN0aW9ucy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS90eXBlcy90eXBlX29iamVjdHMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvdHlwZXMvYXV0b2JveGluZy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9ydW50aW1lLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvcGFyc2VyL3BhcnNlcl9zdGF0bWVudHMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvcGFyc2VyL3BhcnNlci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9yZWdpc3RyeS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS90eXBlcy90eXBlY2hlY2tlci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9saW5rZXIvZGVwZW5kZW5jaWVzLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2xpbmtlci9saW5rZXIudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvdGVzdHMvdGVzdHN1aXRlcy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9sb2FkZXJzLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL3Byb2dyYW0udHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvZXZlbnQvcGlwZWxpbmUudHMiLCAibGFuZ3VhZ2Uvc3JjL2hvc3QvZXZlbnQudHMiLCAibGFuZ3VhZ2Uvc3JjL2hvc3QvZG9tLnRzIiwgImxhbmd1YWdlL3NyYy9ob3N0L2VuZ2luZS50cyIsICJsYW5ndWFnZS9zcmMvaG9zdC9ydW50aW1lLnRzIiwgImxhbmd1YWdlL3NyYy9pbmRleC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICJpbXBvcnQgdHlwZSB7U291cmNlfSBmcm9tIFwiLi9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5leHBvcnQgY2xhc3MgR1JBTU1BUiB7XG5cdHN0YXRpYyBJTVBPUlQ6IHN0cmluZyA9ICdpbXBvcnQnO1xuXHRzdGF0aWMgRlJPTTogc3RyaW5nID0gJ2Zyb20nO1xuXHRzdGF0aWMgTEVUOiBzdHJpbmcgPSAnbGV0Jztcblx0c3RhdGljIE9QRU46IHN0cmluZyA9ICdvcGVuJztcblx0c3RhdGljIENMQVNTOiBzdHJpbmcgPSAnY2xhc3MnO1xuXHRzdGF0aWMgSU5URVJGQUNFOiBzdHJpbmcgPSAnaW50ZXJmYWNlJztcblx0c3RhdGljIEVYVEVORFM6IHN0cmluZyA9ICdleHRlbmRzJztcblx0c3RhdGljIElNUExFTUVOVFM6IHN0cmluZyA9ICdpbXBsZW1lbnRzJztcblx0c3RhdGljIENPTlNUUlVDVE9SOiBzdHJpbmcgPSAnY29uc3RydWN0b3InO1xuXHRzdGF0aWMgTkVXOiBzdHJpbmcgPSAnbmV3Jztcblx0c3RhdGljIFRISVM6IHN0cmluZyA9ICd0aGlzJztcblx0c3RhdGljIFBVQkxJQzogc3RyaW5nID0gJ3B1YmxpYyc7XG5cdHN0YXRpYyBQUklWQVRFOiBzdHJpbmcgPSAncHJpdmF0ZSc7XG5cdHN0YXRpYyBTVEFUSUM6IHN0cmluZyA9ICdzdGF0aWMnO1xuXHRzdGF0aWMgUkVBRE9OTFk6IHN0cmluZyA9ICdyZWFkb25seSc7XG5cdHN0YXRpYyBSRVRVUk46IHN0cmluZyA9ICdyZXR1cm4nO1xuXHRzdGF0aWMgU1VQRVI6IHN0cmluZyA9ICdzdXBlcic7XG5cdHN0YXRpYyBUUlVFOiBzdHJpbmcgPSAndHJ1ZSc7XG5cdHN0YXRpYyBGQUxTRTogc3RyaW5nID0gJ2ZhbHNlJztcblx0c3RhdGljIElGOiBzdHJpbmcgPSAnaWYnO1xuXHRzdGF0aWMgRUxTRTogc3RyaW5nID0gJ2Vsc2UnO1xuXHRzdGF0aWMgTUFUQ0g6IHN0cmluZyA9ICdtYXRjaCc7XG5cdHN0YXRpYyBERUZBVUxUOiBzdHJpbmcgPSAnZGVmYXVsdCc7XG5cdHN0YXRpYyBGT1JFQUNIOiBzdHJpbmcgPSAnZm9yZWFjaCc7XG5cdHN0YXRpYyBJTjogc3RyaW5nID0gJ2luJztcblx0c3RhdGljIE5VTEw6IHN0cmluZyA9ICdudWxsJztcblx0c3RhdGljIFZET006IHN0cmluZyA9ICd2ZG9tJztcblxuXHRzdGF0aWMgQlJBQ0tFVF9TUVVBUkVfT1BFTjogc3RyaW5nID0gJ1snO1xuXHRzdGF0aWMgQlJBQ0tFVF9TUVVBUkVfQ0xPU0U6IHN0cmluZyA9ICddJztcblx0c3RhdGljIEJSQUNFX09QRU46IHN0cmluZyA9ICd7Jztcblx0c3RhdGljIEJSQUNFX0NMT1NFOiBzdHJpbmcgPSAnfSc7XG5cdHN0YXRpYyBQQVJFTlRIRVNFU19PUEVOOiBzdHJpbmcgPSAnKCc7XG5cdHN0YXRpYyBQQVJFTlRIRVNFU19DTE9TRTogc3RyaW5nID0gJyknO1xuXHRzdGF0aWMgU0VNSUNPTE9OOiBzdHJpbmcgPSAnOyc7XG5cdHN0YXRpYyBDT0xPTjogc3RyaW5nID0gJzonO1xuXHRzdGF0aWMgQ09NTUE6IHN0cmluZyA9ICcsJztcblxuXHRzdGF0aWMgQVJST1c6IHN0cmluZyA9ICctPic7XG5cdHN0YXRpYyBET1Q6IHN0cmluZyA9ICcuJztcblx0c3RhdGljIEFTU0lHTjogc3RyaW5nID0gJz0nO1xuXHRzdGF0aWMgUExVUzogc3RyaW5nID0gJysnO1xuXHRzdGF0aWMgTUlOVVM6IHN0cmluZyA9ICctJztcblx0c3RhdGljIERJVklERTogc3RyaW5nID0gJy8nO1xuXHRzdGF0aWMgTVVMVElQTFk6IHN0cmluZyA9ICcqJztcblx0c3RhdGljIE1PRFVMVVM6IHN0cmluZyA9ICclJztcblxuXHRzdGF0aWMgRVhDTEFNQVRJT05fTUFSSzogc3RyaW5nID0gJyEnO1xuXHRzdGF0aWMgUVVFU1RJT05fTUFSSzogc3RyaW5nID0gJz8nO1xuXHRzdGF0aWMgTEVTU19USEFOOiBzdHJpbmcgPSAnPCc7XG5cdHN0YXRpYyBHUkVBVEVSX1RIQU46IHN0cmluZyA9ICc+Jztcblx0c3RhdGljIExFU1NfRVFVQUw6IHN0cmluZyA9ICc8PSc7XG5cdHN0YXRpYyBHUkVBVEVSX0VRVUFMOiBzdHJpbmcgPSAnPj0nO1xuXHRzdGF0aWMgRVFVQUw6IHN0cmluZyA9ICc9PSc7XG5cdHN0YXRpYyBOT1RfRVFVQUw6IHN0cmluZyA9ICchPSc7XG5cdHN0YXRpYyBBTkQ6IHN0cmluZyA9ICcmJic7XG5cdHN0YXRpYyBPUjogc3RyaW5nID0gJ3x8JztcblxuXHRzdGF0aWMgWE1MX0NMT1NFX1RBRzogc3RyaW5nID0gJy8+Jztcblx0c3RhdGljIFhNTF9PUEVOX0NMT1NFX1RBRzogc3RyaW5nID0gJzwvJztcblxuXHRzdGF0aWMgS0VZV09SRFM6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuSU1QT1JULFxuXHRcdEdSQU1NQVIuRlJPTSxcblx0XHRHUkFNTUFSLk9QRU4sXG5cdFx0R1JBTU1BUi5DTEFTUyxcblx0XHRHUkFNTUFSLklOVEVSRkFDRSxcblx0XHRHUkFNTUFSLkVYVEVORFMsXG5cdFx0R1JBTU1BUi5JTVBMRU1FTlRTLFxuXHRcdEdSQU1NQVIuUFVCTElDLFxuXHRcdEdSQU1NQVIuUFJJVkFURSxcblx0XHRHUkFNTUFSLlNUQVRJQyxcblx0XHRHUkFNTUFSLlJFQURPTkxZLFxuXHRcdEdSQU1NQVIuUkVUVVJOLFxuXHRcdEdSQU1NQVIuTEVULFxuXHRcdEdSQU1NQVIuTkVXLFxuXHRcdEdSQU1NQVIuVEhJUyxcblx0XHRHUkFNTUFSLklGLFxuXHRcdEdSQU1NQVIuRUxTRSxcblx0XHRHUkFNTUFSLk1BVENILFxuXHRcdEdSQU1NQVIuREVGQVVMVCxcblx0XHRHUkFNTUFSLkZPUkVBQ0gsXG5cdFx0R1JBTU1BUi5JTixcblx0XHRHUkFNTUFSLk5VTEwsXG5cdFx0R1JBTU1BUi5WRE9NLFxuXHRdO1xuXHRzdGF0aWMgQVJJVEhNRVRJQzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5QTFVTLFxuXHRcdEdSQU1NQVIuTUlOVVMsXG5cdFx0R1JBTU1BUi5ESVZJREUsXG5cdFx0R1JBTU1BUi5NVUxUSVBMWSxcblx0XHRHUkFNTUFSLk1PRFVMVVNcblx0XTtcblx0c3RhdGljIENPTVBBUklTT046IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuTEVTU19USEFOLFxuXHRcdEdSQU1NQVIuR1JFQVRFUl9USEFOLFxuXHRcdEdSQU1NQVIuTEVTU19FUVVBTCxcblx0XHRHUkFNTUFSLkdSRUFURVJfRVFVQUxcblx0XTtcblx0c3RhdGljIEVRVUFMSVRZOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLkVRVUFMLFxuXHRcdEdSQU1NQVIuTk9UX0VRVUFMXG5cdF07XG5cdHN0YXRpYyBMT0dJQ0FMOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLkFORCxcblx0XHRHUkFNTUFSLk9SXG5cdF07XG5cdHN0YXRpYyBPUEVSQVRPUlM6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuRVhDTEFNQVRJT05fTUFSSyxcblx0XHRHUkFNTUFSLlFVRVNUSU9OX01BUkssXG5cdFx0R1JBTU1BUi5BUlJPVyxcblx0XHRHUkFNTUFSLkRPVCxcblx0XHRHUkFNTUFSLkFTU0lHTixcblx0XHRHUkFNTUFSLlBMVVMsXG5cdFx0R1JBTU1BUi5NSU5VUyxcblx0XHRHUkFNTUFSLkRJVklERSxcblx0XHRHUkFNTUFSLk1VTFRJUExZLFxuXHRcdEdSQU1NQVIuTU9EVUxVUyxcblx0XHRHUkFNTUFSLkxFU1NfVEhBTixcblx0XHRHUkFNTUFSLkdSRUFURVJfVEhBTixcblx0XHRHUkFNTUFSLkxFU1NfRVFVQUwsXG5cdFx0R1JBTU1BUi5HUkVBVEVSX0VRVUFMLFxuXHRcdEdSQU1NQVIuRVFVQUwsXG5cdFx0R1JBTU1BUi5OT1RfRVFVQUwsXG5cdFx0R1JBTU1BUi5BTkQsXG5cdFx0R1JBTU1BUi5PUixcblx0XTtcblx0c3RhdGljIE1BVEhfT1BFUkFUT1JTOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLlBMVVMsXG5cdFx0R1JBTU1BUi5NSU5VUyxcblx0XHRHUkFNTUFSLkRJVklERSxcblx0XHRHUkFNTUFSLk1VTFRJUExZLFxuXHRcdEdSQU1NQVIuTU9EVUxVU1xuXHRdO1xuXHRzdGF0aWMgTE9HSUNfT1BFUkFUT1JTOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLkxFU1NfVEhBTixcblx0XHRHUkFNTUFSLkdSRUFURVJfVEhBTixcblx0XHRHUkFNTUFSLkxFU1NfRVFVQUwsXG5cdFx0R1JBTU1BUi5HUkVBVEVSX0VRVUFMLFxuXHRcdEdSQU1NQVIuRVFVQUwsXG5cdFx0R1JBTU1BUi5OT1RfRVFVQUwsXG5cdFx0R1JBTU1BUi5BTkQsXG5cdFx0R1JBTU1BUi5PUixcblx0XTtcblx0c3RhdGljIFBVTkNUVUFUSU9OUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9PUEVOLFxuXHRcdEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfQ0xPU0UsXG5cdFx0R1JBTU1BUi5CUkFDRV9PUEVOLFxuXHRcdEdSQU1NQVIuQlJBQ0VfQ0xPU0UsXG5cdFx0R1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOLFxuXHRcdEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UsXG5cdFx0R1JBTU1BUi5TRU1JQ09MT04sXG5cdFx0R1JBTU1BUi5DT0xPTixcblx0XHRHUkFNTUFSLkNPTU1BXG5cdF07XG5cdHN0YXRpYyBET01fT1BFUkFUT1JTOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLkFSUk9XLFxuXHRcdEdSQU1NQVIuRE9ULFxuXHRcdEdSQU1NQVIuQVNTSUdOLFxuXHRcdEdSQU1NQVIuTEVTU19USEFOLFxuXHRcdEdSQU1NQVIuR1JFQVRFUl9USEFOLFxuXHRcdEdSQU1NQVIuWE1MX09QRU5fQ0xPU0VfVEFHLFxuXHRcdEdSQU1NQVIuWE1MX0NMT1NFX1RBR1xuXHRdO1xuXHRzdGF0aWMgRE9NX1BVTkNUVUFUSU9OUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9PUEVOLFxuXHRcdEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfQ0xPU0UsXG5cdFx0R1JBTU1BUi5CUkFDRV9PUEVOLFxuXHRcdEdSQU1NQVIuQlJBQ0VfQ0xPU0UsXG5cdFx0R1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOLFxuXHRcdEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UsXG5cdFx0R1JBTU1BUi5TRU1JQ09MT04sXG5cdFx0R1JBTU1BUi5DT0xPTixcblx0XHRHUkFNTUFSLkNPTU1BXG5cdF07XG59XG5cbmV4cG9ydCBjbGFzcyBUWVBFX0VOVU0ge1xuXHRzdGF0aWMgTUlYRUQ6IHN0cmluZyA9ICdtaXhlZCc7XG5cdHN0YXRpYyBWT0lEOiBzdHJpbmcgPSAndm9pZCc7XG5cdHN0YXRpYyBOVU1CRVI6IHN0cmluZyA9ICdudW1iZXInO1xuXHRzdGF0aWMgU1RSSU5HOiBzdHJpbmcgPSAnc3RyaW5nJztcblx0c3RhdGljIEJPT0xFQU46IHN0cmluZyA9ICdib29sZWFuJztcblx0c3RhdGljIEFSUkFZOiBzdHJpbmcgPSAnYXJyYXknO1xuXHRzdGF0aWMgTlVMTDogc3RyaW5nID0gJ251bGwnO1xufVxuXG5leHBvcnQgY2xhc3MgUnVsZXMge1xuXHRzdGF0aWMgS0VZV09SRFM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChHUkFNTUFSLktFWVdPUkRTKTtcblx0c3RhdGljIE9QRVJBVE9SUzogU2V0PHN0cmluZz4gPSBuZXcgU2V0KEdSQU1NQVIuT1BFUkFUT1JTKTtcblx0c3RhdGljIFBVTkNUVUFUSU9OUzogU2V0PHN0cmluZz4gPSBuZXcgU2V0KEdSQU1NQVIuUFVOQ1RVQVRJT05TKTtcblx0c3RhdGljIERPTV9PUEVSQVRPUlM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChHUkFNTUFSLkRPTV9PUEVSQVRPUlMpO1xuXHRzdGF0aWMgRE9NX1BVTkNUVUFUSU9OUzogU2V0PHN0cmluZz4gPSBuZXcgU2V0KEdSQU1NQVIuRE9NX1BVTkNUVUFUSU9OUyk7XG5cdHN0YXRpYyBDT01NRU5UX0xJTkU6IHN0cmluZyA9ICcvLyc7XG5cblx0aXNBbHBoYShjaGFyOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gL1thLXpfXS9pLnRlc3QoY2hhcik7XG5cdH1cblxuXHRpc051bWVyaWMoY2hhcjogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIC9bMC05XS8udGVzdChjaGFyKTtcblx0fVxuXG5cdGlzQWxwaGFOdW1lcmljKGNoYXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmlzQWxwaGEoY2hhcikgfHwgdGhpcy5pc051bWVyaWMoY2hhcik7XG5cdH1cblxuXHRpc1doaXRlc3BhY2UoY2hhcjogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIC9cXHMvLnRlc3QoY2hhcik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFRva2VuVHlwZSB7XG5cdHN0YXRpYyBDT01NRU5UOiBzdHJpbmcgPSAnY29tbWVudCc7XG5cdHN0YXRpYyBBTk5PVEFUSU9OOiBzdHJpbmcgPSAnYW5ub3RhdGlvbic7XG5cdHN0YXRpYyBJREVOVElGSUVSOiBzdHJpbmcgPSAnaWRlbnRpZmllcic7XG5cdHN0YXRpYyBLRVlXT1JEOiBzdHJpbmcgPSAna2V5d29yZCc7XG5cdHN0YXRpYyBQVU5DVFVBVElPTjogc3RyaW5nID0gJ3B1bmN0dWF0aW9uJztcblx0c3RhdGljIE5VTUJFUjogc3RyaW5nID0gJ251bWJlcic7XG5cdHN0YXRpYyBTVFJJTkc6IHN0cmluZyA9ICdzdHJpbmcnO1xuXHRzdGF0aWMgQk9PTEVBTjogc3RyaW5nID0gJ2Jvb2xlYW4nO1xuXHRzdGF0aWMgT1BFUkFUT1I6IHN0cmluZyA9ICdvcGVyYXRvcic7XG5cdHN0YXRpYyBURVhUOiBzdHJpbmcgPSAndGV4dCc7XG5cdHN0YXRpYyBFT0Y6IHN0cmluZyA9ICdlb2YnO1xufVxuXG5leHBvcnQgY2xhc3MgVG9rZW4ge1xuXHR0eXBlOiBzdHJpbmc7XG5cdHZhbHVlOiBzdHJpbmc7XG5cdGxpbmU6IG51bWJlciA9IDE7XG5cdGNvbHVtbjogbnVtYmVyID0gMTtcblx0c3RhcnQ6IG51bWJlcjtcblx0ZW5kOiBudW1iZXI7XG5cdHNvdXJjZTogU291cmNlO1xuXG5cdGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIsIHNvdXJjZTogU291cmNlKSB7XG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdFx0dGhpcy5zdGFydCA9IHN0YXJ0O1xuXHRcdHRoaXMuZW5kID0gZW5kO1xuXHRcdHRoaXMuc291cmNlID0gc291cmNlO1xuXHR9XG5cblx0d2l0aExpbmVBbmRDb2x1bW4obGluZTogbnVtYmVyLCBjb2x1bW46IG51bWJlcik6IFRva2VuIHtcblx0XHR0aGlzLmxpbmUgPSBsaW5lO1xuXHRcdHRoaXMuY29sdW1uID0gY29sdW1uO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7R1JBTU1BUiwgVFlQRV9FTlVNfSBmcm9tIFwiLi9ncmFtbWFyXCI7XG5pbXBvcnQge01vZGlmaWVycywgU3VwZXJDbGFzc30gZnJvbSBcIi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtTb3VyY2VTcGFufSBmcm9tIFwiLi9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5leHBvcnQgY2xhc3MgQVNUTm9kZVR5cGUge1xuXHRzdGF0aWMgUFJPR1JBTU0gPSAncHJvZ3JhbSc7XG5cdHN0YXRpYyBJTkRFWCA9ICdpbmRleCc7XG5cdHN0YXRpYyBJREVOVElGSUVSID0gJ2lkZW50aWZpZXInO1xuXHRzdGF0aWMgQU5OT1RBVElPTiA9ICdhbm5vdGF0aW9uJztcblx0c3RhdGljIFBBUkFNRVRFUiA9ICdwYXJhbWV0ZXInO1xuXHRzdGF0aWMgSU1QT1JUID0gR1JBTU1BUi5JTVBPUlQ7XG5cdHN0YXRpYyBOVU1CRVIgPSBUWVBFX0VOVU0uTlVNQkVSO1xuXHRzdGF0aWMgU1RSSU5HID0gVFlQRV9FTlVNLlNUUklORztcblx0c3RhdGljIEJPT0xFQU4gPSBUWVBFX0VOVU0uQk9PTEVBTjtcblx0c3RhdGljIE5VTEwgPSBUWVBFX0VOVU0uTlVMTDtcblx0c3RhdGljIE5FVyA9IEdSQU1NQVIuTkVXO1xuXHRzdGF0aWMgQ0xBU1MgPSBHUkFNTUFSLkNMQVNTO1xuXHRzdGF0aWMgSU5URVJGQUNFID0gR1JBTU1BUi5JTlRFUkZBQ0U7XG5cdHN0YXRpYyBDT05TVFJVQ1RPUiA9IEdSQU1NQVIuQ09OU1RSVUNUT1I7XG5cdHN0YXRpYyBUSElTID0gR1JBTU1BUi5USElTO1xuXHRzdGF0aWMgUkVUVVJOID0gR1JBTU1BUi5SRVRVUk47XG5cdHN0YXRpYyBWRE9NID0gJ3Zkb21fZGVjbGFyYXRpb24nO1xuXHRzdGF0aWMgVkRPTV9URVhUID0gJ3Zkb21fdGV4dF9kZWNsYXJhdGlvbic7XG5cdHN0YXRpYyBVTkFSWSA9ICd1bmFyeV9leHByZXNzaW9uJztcblx0c3RhdGljIExBTUJEQSA9ICdsYW1iZGFfZXhwcmVzc2lvbic7XG5cdHN0YXRpYyBBUlJBWSA9ICdhcnJheV9kZWNsYXJhdGlvbic7XG5cdHN0YXRpYyBUWVBFID0gJ3R5cGVfZGVjbGFyYXRpb24nO1xuXHRzdGF0aWMgRklFTEQgPSAnZmllbGRfZGVjbGFyYXRpb24nO1xuXHRzdGF0aWMgTUVNQkVSID0gJ21lbWJlcl9leHByZXNzaW9uJztcblx0c3RhdGljIE1FVEhPRCA9ICdtZXRob2RfZGVjbGFyYXRpb24nO1xuXHRzdGF0aWMgQ0FMTCA9ICdjYWxsX2V4cHJlc3Npb24nO1xuXHRzdGF0aWMgVkFSSUFCTEUgPSAndmFyaWFibGVfZGVjbGFyYXRpb24nO1xuXHRzdGF0aWMgRVhQUkVTU0lPTiA9ICdleHByZXNzaW9uX3N0YXRlbWVudCc7XG5cdHN0YXRpYyBCSU5BUlkgPSAnYmluYXJ5X2V4cHJlc3Npb24nO1xuXHRzdGF0aWMgQVNTSUdOTUVOVCA9ICdhc3NpZ25tZW50X2V4cHJlc3Npb24nO1xuXHRzdGF0aWMgSUYgPSAnaWZfc3RhdGVtZW50Jztcblx0c3RhdGljIFRIRU4gPSAndGhlbl9zdGF0ZW1lbnQnO1xuXHRzdGF0aWMgRUxTRSA9ICdlbHNlX3N0YXRlbWVudCc7XG5cdHN0YXRpYyBNQVRDSCA9ICdtYXRjaF9zdGF0ZW1lbnQnO1xuXHRzdGF0aWMgTUFUQ0hfQ0FTRSA9ICdtYXRjaF9jYXNlX3N0YXRlbWVudCc7XG5cdHN0YXRpYyBGT1JFQUNIID0gJ2ZvcmVhY2hfc3RhdGVtZW50Jztcbn1cblxuZXhwb3J0IGNsYXNzIEFTVE5vZGUge1xuXHRpc0V4cHJlc3Npb246IGJvb2xlYW4gPSBmYWxzZTtcblx0bmFtZTogc3RyaW5nID0gJyc7XG5cblx0c3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsO1xuXHR0eXBlOiBzdHJpbmc7XG5cdHZhbHVlOiBhbnkgfCBudWxsID0gbnVsbDtcblx0Y2hpbGRyZW46IEFTVE5vZGVbXTtcblxuXHRjb25zdHJ1Y3Rvcih0eXBlOiBzdHJpbmcsIGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXSkge1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RDYWxsTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRjYWxsZWU6IEFTVE5vZGU7XG5cdGFyZ3VtZW50czogQVNUTm9kZVtdO1xuXG5cdGNvbnN0cnVjdG9yKGNhbGxlZTogQVNUTm9kZSwgYXJnczogQVNUTm9kZVtdID0gW10pIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5DQUxMKTtcblxuXHRcdHRoaXMuY2FsbGVlID0gY2FsbGVlO1xuXHRcdHRoaXMuYXJndW1lbnRzID0gYXJncztcblx0XHR0aGlzLmlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVE5ld05vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0YXJndW1lbnRzOiBBU1ROb2RlW107XG5cdHR5cGVBbm5vdGF0aW9uOiBBU1RUeXBlTm9kZTtcblxuXHRjb25zdHJ1Y3RvcihhcmdzOiBBU1ROb2RlW10sIHR5cGVBbm5vdGF0aW9uOiBBU1RUeXBlTm9kZSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLk5FVyk7XG5cblx0XHR0aGlzLmFyZ3VtZW50cyA9IGFyZ3M7XG5cdFx0dGhpcy50eXBlQW5ub3RhdGlvbiA9IHR5cGVBbm5vdGF0aW9uO1xuXHRcdHRoaXMubmFtZSA9IHR5cGVBbm5vdGF0aW9uLm5hbWU7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RCaW5hcnlOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGxlZnQ6IEFTVE5vZGU7XG5cdHJpZ2h0OiBBU1ROb2RlO1xuXHRvcGVyYXRvcjogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGxlZnQ6IEFTVE5vZGUsIHJpZ2h0OiBBU1ROb2RlLCBvcGVyYXRvcjogc3RyaW5nKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuQklOQVJZKTtcblxuXHRcdHRoaXMubGVmdCA9IGxlZnQ7XG5cdFx0dGhpcy5yaWdodCA9IHJpZ2h0O1xuXHRcdHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcblx0XHR0aGlzLmlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEFzc2lnbm1lbnROb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGxlZnQ6IEFTVE5vZGU7XG5cdHJpZ2h0OiBBU1ROb2RlO1xuXG5cdGNvbnN0cnVjdG9yKGxlZnQ6IEFTVE5vZGUsIHJpZ2h0OiBBU1ROb2RlKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuQVNTSUdOTUVOVCk7XG5cblx0XHR0aGlzLmxlZnQgPSBsZWZ0O1xuXHRcdHRoaXMucmlnaHQgPSByaWdodDtcblx0XHR0aGlzLmlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVE1lbWJlck5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0b2JqZWN0OiBBU1ROb2RlO1xuXHRwcm9wZXJ0eTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKG9iamVjdDogQVNUTm9kZSwgcHJvcGVydHk6IHN0cmluZykge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLk1FTUJFUik7XG5cblx0XHR0aGlzLm9iamVjdCA9IG9iamVjdDtcblx0XHR0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RVbmFyeU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0b3BlcmF0b3I6IHN0cmluZztcblx0YXJndW1lbnQ6IEFTVE5vZGUgfCBBU1RVbmFyeU5vZGU7XG5cblx0Y29uc3RydWN0b3Iob3BlcmF0b3I6IHN0cmluZywgYXJndW1lbnQ6IEFTVE5vZGUgfCBBU1RVbmFyeU5vZGUpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5VTkFSWSk7XG5cblx0XHR0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG5cdFx0dGhpcy5hcmd1bWVudCA9IGFyZ3VtZW50O1xuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUSW5kZXhOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdG9iamVjdDogQVNUTm9kZTtcblx0aW5kZXg6IEFTVE5vZGU7XG5cblx0Y29uc3RydWN0b3Iob2JqZWN0OiBBU1ROb2RlLCBpbmRleDogQVNUTm9kZSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLklOREVYKTtcblxuXHRcdHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuXHRcdHRoaXMuaW5kZXggPSBpbmRleDtcblx0XHR0aGlzLmlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEFycmF5Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRlbGVtZW50czogQVNUTm9kZVtdID0gW107XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuQVJSQVkpO1xuXG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RMYW1iZGFOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXTtcblx0cmV0dXJuVHlwZTogQVNUVHlwZU5vZGU7XG5cblx0Y29uc3RydWN0b3IocGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdLCByZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSwgY2hpbGRyZW46IEFTVE5vZGVbXSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkxBTUJEQSwgY2hpbGRyZW4pO1xuXG5cdFx0dGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcblx0XHR0aGlzLnJldHVyblR5cGUgPSByZXR1cm5UeXBlO1xuXG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RGaWVsZE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0bW9kaWZpZXJzOiBNb2RpZmllcnM7XG5cdGZpZWxkVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsO1xuXHRpbml0OiBBU1ROb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBtb2RpZmllcnM6IE1vZGlmaWVycywgZmllbGRUeXBlOiBBU1RUeXBlTm9kZSB8IG51bGwsIGluaXQ6IEFTVE5vZGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkZJRUxEKTtcblxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG5cdFx0dGhpcy5maWVsZFR5cGUgPSBmaWVsZFR5cGU7XG5cdFx0dGhpcy5pbml0ID0gaW5pdDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUVmFyaWFibGVOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdHR5cGVBbm5vdGF0aW9uOiBBU1RUeXBlTm9kZSB8IG51bGwgPSBudWxsO1xuXHRpbml0OiBBU1ROb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGUgfCBudWxsID0gbnVsbCwgaW5pdDogQVNUTm9kZSB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuVkFSSUFCTEUpO1xuXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnR5cGVBbm5vdGF0aW9uID0gdHlwZUFubm90YXRpb247XG5cdFx0dGhpcy5pbml0ID0gaW5pdDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNURXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0ZXhwcjogQVNUTm9kZTtcblxuXHRjb25zdHJ1Y3RvcihleHByOiBBU1ROb2RlKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuRVhQUkVTU0lPTik7XG5cblx0XHR0aGlzLmV4cHIgPSBleHByO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RSZXR1cm5Ob2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGFyZ3VtZW50OiBBU1ROb2RlIHwgQVNURXhwcmVzc2lvbk5vZGUgfCBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKGFyZ3VtZW50OiBBU1ROb2RlIHwgQVNURXhwcmVzc2lvbk5vZGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLlJFVFVSTik7XG5cblx0XHR0aGlzLmFyZ3VtZW50ID0gYXJndW1lbnQ7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVENsYXNzTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRhbm5vdGF0aW9uczogQVNUQW5ub3RhdGlvbk5vZGVbXTtcblx0bW9kaWZpZXJzOiBNb2RpZmllcnM7XG5cdHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXTtcblx0c3VwZXJDbGFzczogU3VwZXJDbGFzcyB8IG51bGw7XG5cdGltcGxlbWVudHNJbnRlcmZhY2VzOiBBU1RUeXBlTm9kZVtdO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdG5hbWU6IHN0cmluZyxcblx0XHRhbm5vdGF0aW9uczogQVNUQW5ub3RhdGlvbk5vZGVbXSxcblx0XHRtb2RpZmllcnM6IE1vZGlmaWVycyxcblx0XHR0eXBlUGFyYW1ldGVyczogc3RyaW5nW10sXG5cdFx0aW1wbGVtZW50c0ludGVyZmFjZXM6IEFTVFR5cGVOb2RlW10sXG5cdFx0c3VwZXJDbGFzczogU3VwZXJDbGFzcyB8IG51bGwgPSBudWxsLFxuXHRcdGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXVxuXHQpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5DTEFTUywgY2hpbGRyZW4pO1xuXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmFubm90YXRpb25zID0gYW5ub3RhdGlvbnM7XG5cdFx0dGhpcy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG5cdFx0dGhpcy50eXBlUGFyYW1ldGVycyA9IHR5cGVQYXJhbWV0ZXJzO1xuXHRcdHRoaXMuc3VwZXJDbGFzcyA9IHN1cGVyQ2xhc3M7XG5cdFx0dGhpcy5pbXBsZW1lbnRzSW50ZXJmYWNlcyA9IGltcGxlbWVudHNJbnRlcmZhY2VzO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RJbnRlcmZhY2VOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGFubm90YXRpb25zOiBBU1RBbm5vdGF0aW9uTm9kZVtdO1xuXHRtb2RpZmllcnM6IE1vZGlmaWVycztcblx0dHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdO1xuXHRleHRlbmRzSW50ZXJmYWNlczogc3RyaW5nW107XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0bmFtZTogc3RyaW5nLFxuXHRcdGFubm90YXRpb25zOiBBU1RBbm5vdGF0aW9uTm9kZVtdLFxuXHRcdG1vZGlmaWVyczogTW9kaWZpZXJzLFxuXHRcdHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXSxcblx0XHRleHRlbmRzSW50ZXJmYWNlczogc3RyaW5nW10sXG5cdFx0Y2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdXG5cdCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLklOVEVSRkFDRSwgY2hpbGRyZW4pO1xuXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmFubm90YXRpb25zID0gYW5ub3RhdGlvbnM7XG5cdFx0dGhpcy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG5cdFx0dGhpcy50eXBlUGFyYW1ldGVycyA9IHR5cGVQYXJhbWV0ZXJzO1xuXHRcdHRoaXMuZXh0ZW5kc0ludGVyZmFjZXMgPSBleHRlbmRzSW50ZXJmYWNlcztcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUQW5ub3RhdGlvbk5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0cHJvcGVydGllczogTWFwPHN0cmluZywgQVNUTm9kZT4gPSBuZXcgTWFwKCk7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuQU5OT1RBVElPTik7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUUGFyYW1ldGVyTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHR0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGUgfCBudWxsO1xuXHRkZWZhdWx0VmFsdWU6IEFTVE5vZGUgfCBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZUFubm90YXRpb246IEFTVFR5cGVOb2RlIHwgbnVsbCwgZGVmYXVsdFZhbHVlOiBBU1ROb2RlIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5QQVJBTUVURVIpO1xuXHRcdHRoaXMudHlwZUFubm90YXRpb24gPSB0eXBlQW5ub3RhdGlvbjtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuZGVmYXVsdFZhbHVlID0gZGVmYXVsdFZhbHVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RNZXRob2ROb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGFubm90YXRpb25zOiBBU1RBbm5vdGF0aW9uTm9kZVtdO1xuXHRtb2RpZmllcnM6IE1vZGlmaWVycztcblx0dHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdO1xuXHRwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW107XG5cdHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbDtcblxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdG5hbWU6IHN0cmluZyxcblx0XHR0eXBlOiBzdHJpbmcsXG5cdFx0YW5ub3RhdGlvbnM6IEFTVEFubm90YXRpb25Ob2RlW10sXG5cdFx0bW9kaWZpZXJzOiBNb2RpZmllcnMsXG5cdFx0dHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdLFxuXHRcdHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSxcblx0XHRyZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGwgPSBudWxsLFxuXHRcdGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXSxcblx0KSB7XG5cdFx0c3VwZXIodHlwZSwgY2hpbGRyZW4pO1xuXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmFubm90YXRpb25zID0gYW5ub3RhdGlvbnM7XG5cdFx0dGhpcy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG5cdFx0dGhpcy50eXBlUGFyYW1ldGVycyA9IHR5cGVQYXJhbWV0ZXJzO1xuXHRcdHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG5cdFx0dGhpcy5yZXR1cm5UeXBlID0gcmV0dXJuVHlwZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUSW1wb3J0Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRuYW1lczogc3RyaW5nW107XG5cdGZyb206IHN0cmluZyB8IG51bGw7XG5cblx0Y29uc3RydWN0b3IobmFtZXM6IHN0cmluZ1tdLCBmcm9tOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLklNUE9SVCk7XG5cblx0XHR0aGlzLm5hbWVzID0gbmFtZXM7XG5cdFx0dGhpcy5mcm9tID0gZnJvbTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUVGhlbk5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0Y29uc3RydWN0b3IoY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuVEhFTiwgY2hpbGRyZW4pO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RJZk5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0Y29uZGl0aW9uOiBBU1ROb2RlO1xuXHR0aGVuOiBBU1RUaGVuTm9kZTtcblx0ZWxzZTogQVNUSWZOb2RlIHwgQVNURWxzZU5vZGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihjb25kaXRpb246IEFTVE5vZGUsIHRoZW46IEFTVFRoZW5Ob2RlKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuSUYpO1xuXG5cdFx0dGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG5cdFx0dGhpcy50aGVuID0gdGhlbjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNURWxzZU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0Y29uc3RydWN0b3IoY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuRUxTRSwgY2hpbGRyZW4pO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RNYXRjaE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0ZXhwcmVzc2lvbjogQVNUTm9kZTtcblx0Y2FzZXM6IEFTVE1hdGNoQ2FzZU5vZGVbXTtcblx0ZGVmYXVsdENhc2U6IEFTVE1hdGNoQ2FzZU5vZGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihleHByZXNzaW9uOiBBU1ROb2RlLCBjYXNlczogQVNUTWF0Y2hDYXNlTm9kZVtdLCBkZWZhdWx0Q2FzZTogQVNUTWF0Y2hDYXNlTm9kZSB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuTUFUQ0gpO1xuXG5cdFx0dGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcblx0XHR0aGlzLmNhc2VzID0gY2FzZXM7XG5cdFx0dGhpcy5kZWZhdWx0Q2FzZSA9IGRlZmF1bHRDYXNlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RNYXRjaENhc2VOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdHRlc3Q6IEFTVE5vZGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihjaGlsZHJlbjogQVNUTm9kZVtdID0gW10pIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5NQVRDSF9DQVNFLCBjaGlsZHJlbik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEZvcmVhY2hOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGl0ZXJhdG9yOiBzdHJpbmc7XG5cdGl0ZXJhYmxlOiBBU1ROb2RlO1xuXHRib2R5OiBBU1ROb2RlW107XG5cblx0Y29uc3RydWN0b3IoaXRlcmF0b3I6IHN0cmluZywgaXRlcmFibGU6IEFTVE5vZGUsIGJvZHk6IEFTVE5vZGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuRk9SRUFDSCk7XG5cblx0XHR0aGlzLml0ZXJhdG9yID0gaXRlcmF0b3I7XG5cdFx0dGhpcy5pdGVyYWJsZSA9IGl0ZXJhYmxlO1xuXHRcdHRoaXMuYm9keSA9IGJvZHk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFR5cGVOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdHN0YXRpYyBLSU5EX1NJTVBMRSA9ICdzaW1wbGUnO1xuXHRzdGF0aWMgS0lORF9HRU5FUklDID0gJ2dlbmVyaWMnO1xuXHRzdGF0aWMgS0lORF9MQU1CREEgPSAnbGFtYmRhJztcblxuXHRraW5kOiBzdHJpbmc7XG5cdHR5cGVBcmd1bWVudHM6IEFTVFR5cGVOb2RlW10gPSBbXTtcblx0cGFyYW1ldGVyVHlwZXM6IEFTVFR5cGVOb2RlW10gPSBbXTtcblx0cmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsID0gbnVsbDtcblx0bnVsbGFibGU6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3Ioa2luZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIG51bGxhYmxlOiBib29sZWFuID0gZmFsc2UpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5UWVBFKTtcblxuXHRcdHRoaXMua2luZCA9IGtpbmQ7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLm51bGxhYmxlID0gbnVsbGFibGU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFZEb21Ob2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdHJlYWRvbmx5IHRhZzogc3RyaW5nO1xuXHRyZWFkb25seSBwcm9wczogTWFwPHN0cmluZywgQVNUTm9kZT4gPSBuZXcgTWFwKCk7XG5cblx0Y29uc3RydWN0b3IodGFnOiBzdHJpbmcsIHByb3BzOiBNYXA8c3RyaW5nLCBBU1ROb2RlPiwgY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuVkRPTSwgY2hpbGRyZW4pO1xuXHRcdHRoaXMudGFnID0gdGFnO1xuXHRcdHRoaXMucHJvcHMgPSBwcm9wcztcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUVkRvbVRleHROb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5WRE9NX1RFWFQpO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0dSQU1NQVIsIFJ1bGVzLCBUb2tlbiwgVG9rZW5UeXBlfSBmcm9tIFwiLi4vZ3JhbW1hclwiO1xuaW1wb3J0IHt0aHJvd1Rva2VuRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcbmltcG9ydCB0eXBlIHtTb3VyY2V9IGZyb20gXCIuLi9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5leHBvcnQgY2xhc3MgVG9rZW5pemVyIHtcblx0cHJpdmF0ZSByZWFkb25seSBydWxlcyA9IG5ldyBSdWxlcygpO1xuXHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZTogU291cmNlO1xuXG5cdGNvbnN0cnVjdG9yKHNvdXJjZTogU291cmNlKSB7XG5cdFx0dGhpcy5zb3VyY2UgPSBzb3VyY2U7XG5cdH1cblxuXHRnZXRUb2tlblN0cmVhbSgpOiBUb2tlblN0cmVhbSB7XG5cdFx0cmV0dXJuIG5ldyBUb2tlblN0cmVhbSh0aGlzLnRva2VuaXplKCkpO1xuXHR9XG5cblx0dG9rZW5pemUoKTogVG9rZW5bXSB7XG5cdFx0Y29uc3QgdG9rZW5zOiBUb2tlbltdID0gW107XG5cblx0XHRsZXQgaTogbnVtYmVyID0gMDtcblx0XHRsZXQgbGluZTogbnVtYmVyID0gMTtcblx0XHRsZXQgY29sdW1uOiBudW1iZXIgPSAwO1xuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ0xpbmVDb21tZW50ID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgbGluZUNvbW1lbnQ6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hMaW5lQ29tbWVudEF0KGkpO1xuXHRcdFx0aWYgKGxpbmVDb21tZW50KSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKGxpbmVDb21tZW50LndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gbGluZUNvbW1lbnQuZW5kICsgMTtcblxuXHRcdFx0XHRsaW5lKys7XG5cdFx0XHRcdGNvbHVtbiA9IDA7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdTdHJpbmcgPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBzdHJpbmc6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hTdHJpbmdBdChpKTtcblx0XHRcdGlmIChzdHJpbmcpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2goc3RyaW5nLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gc3RyaW5nLmVuZCArIDE7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQoc3RyaW5nKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ1B1bmN0dWF0aW9uID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgcHVuY3R1YXRpb246IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hQdW5jdHVhdGlvbkF0KGkpO1xuXHRcdFx0aWYgKHB1bmN0dWF0aW9uKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKHB1bmN0dWF0aW9uLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gcHVuY3R1YXRpb24uZW5kICsgMTtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChwdW5jdHVhdGlvbik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdJZGVudGlmaWVyID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgaWRlbnRpZmllcjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaElkZW50aWZpZXJBdChpKTtcblx0XHRcdGlmIChpZGVudGlmaWVyKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKGlkZW50aWZpZXIud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBpZGVudGlmaWVyLmVuZDtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChpZGVudGlmaWVyKTtcblxuXHRcdFx0XHRpZiAoaWRlbnRpZmllci52YWx1ZSA9PT0gR1JBTU1BUi5WRE9NKSB7XG5cdFx0XHRcdFx0Y29uc3QgdG9rZW5pemVkVkRvbSA9IHRoaXMudG9rZW5pemVWRG9tKGksIGxpbmUsIGNvbHVtbik7XG5cdFx0XHRcdFx0dG9rZW5zLnB1c2goLi4udG9rZW5pemVkVkRvbS50b2tlbnMpO1xuXHRcdFx0XHRcdGkgPSB0b2tlbml6ZWRWRG9tLm5ld0luZGV4O1xuXHRcdFx0XHRcdGxpbmUgPSB0b2tlbml6ZWRWRG9tLmxpbmU7XG5cdFx0XHRcdFx0Y29sdW1uID0gdG9rZW5pemVkVkRvbS5jb2x1bW47XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ051bWJlciA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IG51bWJlcjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaE51bWJlckF0KGkpO1xuXHRcdFx0aWYgKG51bWJlcikge1xuXHRcdFx0XHR0b2tlbnMucHVzaChudW1iZXIud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBudW1iZXIuZW5kO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KG51bWJlcik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdPcGVyYXRvciA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IG9wZXJhdG9yOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoT3BlcmF0b3JBdChpKTtcblx0XHRcdGlmIChvcGVyYXRvcikge1xuXHRcdFx0XHR0b2tlbnMucHVzaChvcGVyYXRvci53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IG9wZXJhdG9yLmVuZCArIDE7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQob3BlcmF0b3IpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nQW5ub3RhdGlvbiA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IGFubm90YXRpb246IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hBbm5vdGF0aW9uQXQoaSk7XG5cdFx0XHRpZiAoYW5ub3RhdGlvbikge1xuXHRcdFx0XHR0b2tlbnMucHVzaChhbm5vdGF0aW9uLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gYW5ub3RhdGlvbi5lbmQgKyAxO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KGFubm90YXRpb24pO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHdoaWxlIChpIDwgdGhpcy5zb3VyY2UubGVuZ3RoKSB7XG5cdFx0XHRpZiAodGhpcy5zb3VyY2UuY2hhckF0KGkpID09PSAnXFxuJykge1xuXHRcdFx0XHRsaW5lKys7XG5cdFx0XHRcdGNvbHVtbiA9IDA7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb2x1bW4rKztcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMubWF0Y2hXaGl0ZXNwYWNlQXQoaSkpIHtcblx0XHRcdFx0aSsrO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGlmSXNDb25zdW1pbmdMaW5lQ29tbWVudCgpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdQdW5jdHVhdGlvbigpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdTdHJpbmcoKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nTnVtYmVyKClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ0lkZW50aWZpZXIoKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nT3BlcmF0b3IoKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nQW5ub3RhdGlvbigpKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHR0aHJvd1Rva2VuRXJyb3IoJ1VuZXhwZWN0ZWQgY2hhcmFjdGVyOiAnICsgdGhpcy5zb3VyY2UuY2hhckF0KGkpKTtcblx0XHR9XG5cblx0XHR0b2tlbnMucHVzaChcblx0XHRcdHRoaXMuZW9mKGkpXG5cdFx0XHQgICAgLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbilcblx0XHQpO1xuXG5cdFx0cmV0dXJuIHRva2Vucztcblx0fVxuXG5cdGVvZihlbmQ6IG51bWJlcik6IFRva2VuIHtcblx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5FT0YsICcnLCBlbmQsIGVuZCwgdGhpcy5zb3VyY2UpXG5cdH1cblxuXHRjb2x1bU9mZnNldCh0b2tlbjogVG9rZW4pOiBudW1iZXIge1xuXHRcdHJldHVybiB0b2tlbi52YWx1ZS5sZW5ndGggLSAxO1xuXHR9XG5cblx0bWF0Y2hXaGl0ZXNwYWNlQXQoaTogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucnVsZXMuaXNXaGl0ZXNwYWNlKHRoaXMuc291cmNlLmNoYXJBdChpKSk7XG5cdH1cblxuXHRtYXRjaE51bWJlckF0KGk6IG51bWJlcik6IFRva2VuIHwgbnVsbCB7XG5cdFx0aWYgKCF0aGlzLnJ1bGVzLmlzTnVtZXJpYyh0aGlzLnNvdXJjZS5jaGFyQXQoaSkpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbFxuXHRcdH1cblx0XHRsZXQgc3RhcnQgPSBpO1xuXHRcdHdoaWxlICh0aGlzLnJ1bGVzLmlzTnVtZXJpYyh0aGlzLnNvdXJjZS5jaGFyQXQoaSkpKSBpKys7XG5cdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuTlVNQkVSLCB0aGlzLnNvdXJjZS5zbGljZShzdGFydCwgaSksIHN0YXJ0LCBpLCB0aGlzLnNvdXJjZSk7XG5cdH1cblxuXHRtYXRjaFN0cmluZ0F0KGk6IG51bWJlcik6IFRva2VuIHwgbnVsbCB7XG5cdFx0aWYgKHRoaXMuc291cmNlLmNoYXJBdChpKSAhPT0gJ1wiJykge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGxldCBzdGFydCA9ICsraTtcblx0XHR3aGlsZSAodGhpcy5zb3VyY2UuY2hhckF0KGkpICE9PSAnXCInKSBpKys7XG5cdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuU1RSSU5HLCB0aGlzLnNvdXJjZS5zbGljZShzdGFydCwgaSksIHN0YXJ0LCBpLCB0aGlzLnNvdXJjZSk7XG5cdH1cblxuXHRtYXRjaElkZW50aWZpZXJBdChpOiBudW1iZXIpOiBUb2tlbiB8IG51bGwge1xuXHRcdGlmICghdGhpcy5ydWxlcy5pc0FscGhhKHRoaXMuc291cmNlLmNoYXJBdChpKSkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRsZXQgc3RhcnQgPSBpO1xuXHRcdGxldCBqID0gaTtcblx0XHR3aGlsZSAodGhpcy5ydWxlcy5pc0FscGhhTnVtZXJpYyh0aGlzLnNvdXJjZS5jaGFyQXQoaikpKSBqKys7XG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnNvdXJjZS5zbGljZShzdGFydCwgaik7XG5cblx0XHRsZXQgdHlwZSA9IFRva2VuVHlwZS5JREVOVElGSUVSO1xuXHRcdGlmIChbR1JBTU1BUi5UUlVFLCBHUkFNTUFSLkZBTFNFXS5pbmNsdWRlcyh2YWx1ZSkpIHtcblx0XHRcdHR5cGUgPSBUb2tlblR5cGUuQk9PTEVBTjtcblx0XHR9IGVsc2UgaWYgKFJ1bGVzLktFWVdPUkRTLmhhcyh2YWx1ZSkpIHtcblx0XHRcdHR5cGUgPSBUb2tlblR5cGUuS0VZV09SRDtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IFRva2VuKHR5cGUsIHZhbHVlLCBzdGFydCwgaiwgdGhpcy5zb3VyY2UpO1xuXHR9XG5cblx0bWF0Y2hPcGVyYXRvckF0KGk6IG51bWJlciwgb3BlcmF0b3JzOiBTZXQ8c3RyaW5nPiA9IFJ1bGVzLk9QRVJBVE9SUyk6IFRva2VuIHwgbnVsbCB7XG5cdFx0Y29uc3QgY2hhcnMgPSB0aGlzLnNvdXJjZS5jaGFyQXQoaSkgKyB0aGlzLnNvdXJjZS5jaGFyQXQoaSArIDEpO1xuXHRcdGlmIChvcGVyYXRvcnMuaGFzKGNoYXJzKSkge1xuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuT1BFUkFUT1IsIGNoYXJzLCBpLCBpICsgMSwgdGhpcy5zb3VyY2UpO1xuXHRcdH1cblxuXHRcdGlmIChvcGVyYXRvcnMuaGFzKHRoaXMuc291cmNlLmNoYXJBdChpKSkpIHtcblx0XHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLk9QRVJBVE9SLCB0aGlzLnNvdXJjZS5jaGFyQXQoaSksIGksIGksIHRoaXMuc291cmNlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdG1hdGNoUHVuY3R1YXRpb25BdChpOiBudW1iZXIsIHB1bmN0dWF0aW9ucyA9IFJ1bGVzLlBVTkNUVUFUSU9OUyk6IFRva2VuIHwgbnVsbCB7XG5cdFx0Y29uc3QgY2hhcnMgPSB0aGlzLnNvdXJjZS5jaGFyQXQoaSkgKyB0aGlzLnNvdXJjZS5jaGFyQXQoaSArIDEpO1xuXHRcdGlmIChwdW5jdHVhdGlvbnMuaGFzKGNoYXJzKSkge1xuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuUFVOQ1RVQVRJT04sIGNoYXJzLCBpLCBpICsgMSwgdGhpcy5zb3VyY2UpO1xuXHRcdH1cblxuXHRcdGlmICghcHVuY3R1YXRpb25zLmhhcyh0aGlzLnNvdXJjZS5jaGFyQXQoaSkpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuUFVOQ1RVQVRJT04sIHRoaXMuc291cmNlLmNoYXJBdChpKSwgaSwgaSwgdGhpcy5zb3VyY2UpO1xuXHR9XG5cblx0bWF0Y2hMaW5lQ29tbWVudEF0KGk6IG51bWJlcik6IFRva2VuIHwgbnVsbCB7XG5cdFx0aWYgKCF0aGlzLnNvdXJjZS5zdGFydHNXaXRoKFJ1bGVzLkNPTU1FTlRfTElORSwgaSkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRsZXQgaiA9IGkgKyBSdWxlcy5DT01NRU5UX0xJTkUubGVuZ3RoO1xuXHRcdHdoaWxlIChqIDwgdGhpcy5zb3VyY2UubGVuZ3RoICYmIHRoaXMuc291cmNlLmNoYXJBdChqKSAhPT0gJ1xcbicpIGorKztcblx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5DT01NRU5ULCB0aGlzLnNvdXJjZS5zbGljZShpLCBqKSwgaSwgaiwgdGhpcy5zb3VyY2UpO1xuXHR9XG5cblx0bWF0Y2hBbm5vdGF0aW9uQXQoaTogbnVtYmVyKTogVG9rZW4gfCBudWxsIHtcblx0XHRpZiAodGhpcy5zb3VyY2UuY2hhckF0KGkpICE9PSAnQCcpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGxldCBzdGFydCA9IGkgKyAxO1xuXHRcdGxldCBqID0gaSArIDE7XG5cdFx0d2hpbGUgKHRoaXMucnVsZXMuaXNBbHBoYSh0aGlzLnNvdXJjZS5jaGFyQXQoaikpKSBqKys7XG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnNvdXJjZS5zbGljZShzdGFydCwgaik7XG5cblx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5BTk5PVEFUSU9OLCB2YWx1ZSwgc3RhcnQsIGosIHRoaXMuc291cmNlKTtcblx0fVxuXG5cdHByaXZhdGUgdG9rZW5pemVWRG9tKHN0YXJ0SW5kZXg6IG51bWJlciwgbGluZTogbnVtYmVyLCBjb2x1bW46IG51bWJlcik6IHtcblx0XHR0b2tlbnM6IFRva2VuW10sXG5cdFx0bmV3SW5kZXg6IG51bWJlcixcblx0XHRsaW5lOiBudW1iZXIsXG5cdFx0Y29sdW1uOiBudW1iZXJcblx0fSB7XG5cdFx0Y29uc3QgdG9rZW5zOiBUb2tlbltdID0gW107XG5cdFx0bGV0IGk6IG51bWJlciA9IHN0YXJ0SW5kZXg7XG5cdFx0bGV0IHRleHRCdWZmZXI6IHN0cmluZyA9ICcnO1xuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ1N0cmluZyA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IHN0cmluZzogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaFN0cmluZ0F0KGkpO1xuXHRcdFx0aWYgKHN0cmluZykge1xuXHRcdFx0XHRmbHVzaFRleHRCdWZmZXIoKTtcblx0XHRcdFx0dG9rZW5zLnB1c2goc3RyaW5nLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gc3RyaW5nLmVuZCArIDE7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQoc3RyaW5nKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ1B1bmN0dWF0aW9uID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgcHVuY3R1YXRpb246IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hQdW5jdHVhdGlvbkF0KGksIFJ1bGVzLkRPTV9QVU5DVFVBVElPTlMpO1xuXHRcdFx0aWYgKHB1bmN0dWF0aW9uKSB7XG5cdFx0XHRcdGZsdXNoVGV4dEJ1ZmZlcigpO1xuXHRcdFx0XHR0b2tlbnMucHVzaChwdW5jdHVhdGlvbi53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IHB1bmN0dWF0aW9uLmVuZCArIDE7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQocHVuY3R1YXRpb24pO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nSWRlbnRpZmllciA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IGlkZW50aWZpZXI6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hJZGVudGlmaWVyQXQoaSk7XG5cdFx0XHRpZiAoaWRlbnRpZmllcikge1xuXHRcdFx0XHRmbHVzaFRleHRCdWZmZXIoKTtcblx0XHRcdFx0dG9rZW5zLnB1c2goaWRlbnRpZmllci53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IGlkZW50aWZpZXIuZW5kO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KGlkZW50aWZpZXIpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nTnVtYmVyID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgbnVtYmVyOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoTnVtYmVyQXQoaSk7XG5cdFx0XHRpZiAobnVtYmVyKSB7XG5cdFx0XHRcdGZsdXNoVGV4dEJ1ZmZlcigpO1xuXG5cdFx0XHRcdHRva2Vucy5wdXNoKG51bWJlci53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IG51bWJlci5lbmQ7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQobnVtYmVyKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ09wZXJhdG9yID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3Qgb3BlcmF0b3I6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hPcGVyYXRvckF0KGksIFJ1bGVzLkRPTV9PUEVSQVRPUlMpO1xuXHRcdFx0aWYgKG9wZXJhdG9yKSB7XG5cdFx0XHRcdGZsdXNoVGV4dEJ1ZmZlcigpO1xuXG5cdFx0XHRcdHRva2Vucy5wdXNoKG9wZXJhdG9yLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gb3BlcmF0b3IuZW5kICsgMTtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChvcGVyYXRvcik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGZsdXNoVGV4dEJ1ZmZlciA9ICgpOiB2b2lkID0+IHtcblx0XHRcdGlmICh0ZXh0QnVmZmVyLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dG9rZW5zLnB1c2goXG5cdFx0XHRcdFx0bmV3IFRva2VuKFxuXHRcdFx0XHRcdFx0VG9rZW5UeXBlLlRFWFQsXG5cdFx0XHRcdFx0XHR0ZXh0QnVmZmVyLFxuXHRcdFx0XHRcdFx0aSAtIHRleHRCdWZmZXIubGVuZ3RoLFxuXHRcdFx0XHRcdFx0aSxcblx0XHRcdFx0XHRcdHRoaXMuc291cmNlXG5cdFx0XHRcdFx0KS53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4gLSB0ZXh0QnVmZmVyLmxlbmd0aClcblx0XHRcdFx0KTtcblx0XHRcdFx0dGV4dEJ1ZmZlciA9ICcnO1xuXHRcdFx0fVxuXHRcdH07XG5cblxuXHRcdGxldCBpZ25vcmVXaGl0ZXNwYWNlID0gZmFsc2U7XG5cdFx0d2hpbGUgKGkgPCB0aGlzLnNvdXJjZS5sZW5ndGgpIHtcblx0XHRcdGNvbnN0IGNoYXI6IHN0cmluZyA9IHRoaXMuc291cmNlLmNoYXJBdChpKTtcblxuXHRcdFx0aWYgKGNoYXIgPT09IEdSQU1NQVIuU0VNSUNPTE9OKSB7XG5cdFx0XHRcdGZsdXNoVGV4dEJ1ZmZlcigpO1xuXG5cdFx0XHRcdHRva2Vucy5wdXNoKG5ldyBUb2tlbihUb2tlblR5cGUuUFVOQ1RVQVRJT04sIGNoYXIsIGksIGksIHRoaXMuc291cmNlKVxuXHRcdFx0XHRcdCAgICAgICAgICAgIC53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblxuXHRcdFx0XHRpKys7XG5cdFx0XHRcdGNvbHVtbisrO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH0gZWxzZSBpZiAoY2hhciA9PT0gR1JBTU1BUi5CUkFDRV9PUEVOKSB7XG5cdFx0XHRcdGlnbm9yZVdoaXRlc3BhY2UgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIGlmIChjaGFyID09PSBHUkFNTUFSLkJSQUNFX0NMT1NFKSB7XG5cdFx0XHRcdGlnbm9yZVdoaXRlc3BhY2UgPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGlnbm9yZVdoaXRlc3BhY2UpIHtcblx0XHRcdFx0aWYgKHRoaXMubWF0Y2hXaGl0ZXNwYWNlQXQoaSkpIHtcblx0XHRcdFx0XHRpKys7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKGlmSXNDb25zdW1pbmdQdW5jdHVhdGlvbigpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdTdHJpbmcoKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nTnVtYmVyKClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ0lkZW50aWZpZXIoKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nT3BlcmF0b3IoKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHR0ZXh0QnVmZmVyICs9IGNoYXI7XG5cblx0XHRcdGlmIChjaGFyID09PSAnXFxuJykge1xuXHRcdFx0XHRsaW5lKys7XG5cdFx0XHRcdGNvbHVtbiA9IDA7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb2x1bW4rKztcblx0XHRcdH1cblxuXHRcdFx0aSsrO1xuXHRcdH1cblxuXHRcdGZsdXNoVGV4dEJ1ZmZlcigpO1xuXG5cdFx0cmV0dXJuIHt0b2tlbnMsIG5ld0luZGV4OiBpLCBsaW5lLCBjb2x1bW59O1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUb2tlblN0cmVhbSB7XG5cdHRva2VuczogVG9rZW5bXTtcblx0aW5kZXg6IG51bWJlciA9IDA7XG5cblx0Y29uc3RydWN0b3IodG9rZW5zOiBUb2tlbltdKSB7XG5cdFx0dGhpcy50b2tlbnMgPSB0b2tlbnM7XG5cdH1cblxuXHRyZXdpbmQoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaW5kZXggPiAwKSB7XG5cdFx0XHR0aGlzLmluZGV4LS07XG5cdFx0fVxuXHR9XG5cblx0cGVlaygpOiBUb2tlbiB8IG51bGwge1xuXHRcdHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmluZGV4XSB8fCBudWxsO1xuXHR9XG5cblx0bmV4dCgpOiBUb2tlbiB8IG51bGwge1xuXHRcdHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmluZGV4KytdIHx8IG51bGw7XG5cdH1cblxuXHRoYXNOZXh0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7VG9rZW5pemVyfSBmcm9tIFwiLi4vdG9rZW5pemVyL3Rva2VuaXplclwiO1xuaW1wb3J0IHt0aHJvd0RlcGVuZGVuY3lFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuaW1wb3J0IHR5cGUge1Rva2VufSBmcm9tIFwiLi4vZ3JhbW1hclwiO1xuXG5leHBvcnQgY2xhc3MgU291cmNlIHtcblx0c3RhdGljIE5FV0xJTkUgPSAnXFxuJztcblx0cHVibGljIHJlYWRvbmx5IHVybDogc3RyaW5nO1xuXHRwcml2YXRlIGNvZGU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihjb2RlOiBzdHJpbmcsIHVybDogc3RyaW5nID0gJzxpbmxpbmU+Jykge1xuXHRcdHRoaXMudXJsID0gdXJsO1xuXHRcdHRoaXMuY29kZSA9IGNvZGU7XG5cdH1cblxuXHRnZXQgbGVuZ3RoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuY29kZS5sZW5ndGg7XG5cdH1cblxuXHRnZXRUb2tlbml6ZXIoKTogVG9rZW5pemVyIHtcblx0XHRyZXR1cm4gbmV3IFRva2VuaXplcih0aGlzKTtcblx0fVxuXG5cdHNsaWNlKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5jb2RlLnNsaWNlKHN0YXJ0LCBlbmQpO1xuXHR9XG5cblx0Y2hhckF0KGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmNvZGUuY2hhckF0KGluZGV4KTtcblx0fVxuXG5cdHN0YXJ0c1dpdGgodGV4dDogc3RyaW5nLCBwb3NpdGlvbj86IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvZGUuc3RhcnRzV2l0aCh0ZXh0LCBwb3NpdGlvbik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFNvdXJjZVNwYW4ge1xuXHRzb3VyY2U6IFNvdXJjZTtcblx0c3RhcnQ6IG51bWJlcjtcblx0ZW5kOiBudW1iZXI7XG5cdGxpbmU6IG51bWJlcjtcblx0Y29sdW1uOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3Ioc291cmNlOiBTb3VyY2UsIHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XG5cdFx0dGhpcy5zb3VyY2UgPSBzb3VyY2U7XG5cdFx0dGhpcy5zdGFydCA9IHN0YXJ0O1xuXHRcdHRoaXMuZW5kID0gZW5kO1xuXG5cdFx0Y29uc3QgYmVmb3JlID0gc291cmNlLnNsaWNlKDAsIHN0YXJ0KTtcblx0XHRjb25zdCBsaW5lcyA9IGJlZm9yZS5zcGxpdChTb3VyY2UuTkVXTElORSk7XG5cblx0XHR0aGlzLmxpbmUgPSBsaW5lcy5sZW5ndGg7XG5cdFx0dGhpcy5jb2x1bW4gPSAobGluZXNbbGluZXMubGVuZ3RoIC0gMV0gfHwgJycpLmxlbmd0aCArIDE7XG5cdH1cblxuXHR0ZXh0KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlLnNsaWNlKHRoaXMuc3RhcnQsIHRoaXMuZW5kKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BhbkZyb20oc3RhcnRUb2tlbjogVG9rZW4sIGVuZFRva2VuOiBUb2tlbik6IFNvdXJjZVNwYW4ge1xuXHRyZXR1cm4gbmV3IFNvdXJjZVNwYW4oc3RhcnRUb2tlbi5zb3VyY2UsIHN0YXJ0VG9rZW4uc3RhcnQsIGVuZFRva2VuLmVuZCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFNvdXJjZSh1cmw6IHN0cmluZyk6IFByb21pc2U8U291cmNlPiB7XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcblx0aWYgKCFyZXNwb25zZS5vaykge1xuXHRcdHRocm93RGVwZW5kZW5jeUVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7dXJsfWApO1xuXHR9XG5cblx0cmV0dXJuIG5ldyBTb3VyY2UoYXdhaXQgcmVzcG9uc2UudGV4dCgpLCB1cmwpO1xufVxuIiwKICAgICJpbXBvcnQge1NvdXJjZSwgU291cmNlU3Bhbn0gZnJvbSBcIi4vcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuY2xhc3MgRXJyb3JUeXBlcyB7XG5cdHN0YXRpYyBUWVBFX0VSUk9SOiBzdHJpbmcgPSAnVHlwZUVycm9yJztcblx0c3RhdGljIFRPS0VOX0VSUk9SOiBzdHJpbmcgPSAnVG9rZW5FcnJvcic7XG5cdHN0YXRpYyBQQVJTRVJfRVJST1I6IHN0cmluZyA9ICdQYXJzZXJFcnJvcic7XG5cdHN0YXRpYyBSVU5USU1FX0VSUk9SOiBzdHJpbmcgPSAnUnVudGltZUVycm9yJztcblx0c3RhdGljIElOVEVSTkFMX0VSUk9SOiBzdHJpbmcgPSAnSW50ZXJuYWxFcnJvcic7XG5cdHN0YXRpYyBOQVRJVkVfRVJST1I6IHN0cmluZyA9ICdOYXRpdmVFcnJvcic7XG5cdHN0YXRpYyBERVBFTkRFTkNZX0VSUk9SOiBzdHJpbmcgPSAnRGVwZW5kZW5jeUVycm9yJztcbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFFcnJvciBleHRlbmRzIEVycm9yIHtcblx0a2luZDogc3RyaW5nO1xuXHRzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGw7XG5cdG92ZXJyaWRlIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRraW5kOiBzdHJpbmcsXG5cdFx0bWVzc2FnZTogc3RyaW5nLFxuXHRcdHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCxcblx0XHRjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGxcblx0KSB7XG5cdFx0c3VwZXIobWVzc2FnZSk7XG5cdFx0dGhpcy5raW5kID0ga2luZDtcblx0XHR0aGlzLnNwYW4gPSBzcGFuO1xuXHRcdHRoaXMuY2F1c2UgPSBjYXVzZTtcblx0fVxuXG5cdGZvcm1hdCgpOiBzdHJpbmcge1xuXHRcdGlmICh0aGlzLnNwYW4pIHtcblxuXHRcdFx0cmV0dXJuIGBcblske3RoaXMua2luZH1dICR7dGhpcy5tZXNzYWdlfVxuICBhdCAke3RoaXMuc3Bhbi5zb3VyY2UudXJsfToke3RoaXMuc3Bhbi5saW5lfToke3RoaXMuc3Bhbi5jb2x1bW59XG5cbiR7dGhpcy5zcGFuLnRleHQoKX1cbiR7XCIgXCIucmVwZWF0KHRoaXMuc3Bhbi5jb2x1bW4pfSR7XCJeXCIucmVwZWF0KHRoaXMuc3Bhbi5lbmQgLSB0aGlzLnNwYW4uc3RhcnQpfVxuYDtcblx0XHR9XG5cblx0XHRyZXR1cm4gYFske3RoaXMua2luZH1dICR7dGhpcy5tZXNzYWdlfWA7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFUb2tlbkVycm9yIGV4dGVuZHMgTHlyYUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0RXJyb3JUeXBlcy5UT0tFTl9FUlJPUixcblx0XHRcdG1lc3NhZ2UsXG5cdFx0XHRzcGFuLFxuXHRcdFx0Y2F1c2Vcblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhVHlwZUVycm9yIGV4dGVuZHMgTHlyYUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0RXJyb3JUeXBlcy5UWVBFX0VSUk9SLFxuXHRcdFx0bWVzc2FnZSxcblx0XHRcdHNwYW4sXG5cdFx0XHRjYXVzZVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFQYXJzZXJFcnJvciBleHRlbmRzIEx5cmFFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihcblx0XHRcdEVycm9yVHlwZXMuUEFSU0VSX0VSUk9SLFxuXHRcdFx0bWVzc2FnZSxcblx0XHRcdHNwYW4sXG5cdFx0XHRjYXVzZVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFSdW50aW1lRXJyb3IgZXh0ZW5kcyBMeXJhRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRFcnJvclR5cGVzLlJVTlRJTUVfRVJST1IsXG5cdFx0XHRtZXNzYWdlLFxuXHRcdFx0c3Bhbixcblx0XHRcdGNhdXNlXG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYU5hdGl2ZUVycm9yIGV4dGVuZHMgTHlyYUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0RXJyb3JUeXBlcy5OQVRJVkVfRVJST1IsXG5cdFx0XHRtZXNzYWdlLFxuXHRcdFx0c3Bhbixcblx0XHRcdGNhdXNlXG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYURlcGVuZGVuY3lFcnJvciBleHRlbmRzIEx5cmFFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihcblx0XHRcdEVycm9yVHlwZXMuREVQRU5ERU5DWV9FUlJPUixcblx0XHRcdG1lc3NhZ2UsXG5cdFx0XHRzcGFuLFxuXHRcdFx0Y2F1c2Vcblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Rva2VuRXJyb3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IG5ldmVyIHtcblx0dGhyb3cgbmV3IEx5cmFUb2tlbkVycm9yKG1lc3NhZ2UsIHNwYW4sIGNhdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93VHlwZUVycm9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBuZXZlciB7XG5cdHRocm93IG5ldyBMeXJhVHlwZUVycm9yKG1lc3NhZ2UsIHNwYW4sIGNhdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UGFyc2VyRXJyb3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IG5ldmVyIHtcblx0dGhyb3cgbmV3IEx5cmFQYXJzZXJFcnJvcihtZXNzYWdlLCBzcGFuLCBjYXVzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1J1bnRpbWVFcnJvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKTogbmV2ZXIge1xuXHR0aHJvdyBuZXcgTHlyYVJ1bnRpbWVFcnJvcihtZXNzYWdlLCBzcGFuLCBjYXVzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd05hdGl2ZUVycm9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBuZXZlciB7XG5cdHRocm93IG5ldyBMeXJhTmF0aXZlRXJyb3IobWVzc2FnZSwgc3BhbiwgY2F1c2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dEZXBlbmRlbmN5RXJyb3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IG5ldmVyIHtcblx0dGhyb3cgbmV3IEx5cmFEZXBlbmRlbmN5RXJyb3IobWVzc2FnZSwgc3BhbiwgY2F1c2UpO1xufVxuXG4vKipcbiAqIEB0aHJvd3Mge0Vycm9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24gd3JhcEpzRXJyb3IoZXJyb3I6IEVycm9yLCBzb3VyY2U6IFNvdXJjZSk6IEx5cmFFcnJvciB7XG5cdGlmIChlcnJvciBpbnN0YW5jZW9mIEx5cmFFcnJvcikge1xuXHRcdHJldHVybiBlcnJvcjtcblx0fVxuXG5cdHJldHVybiBuZXcgTHlyYUVycm9yKFxuXHRcdEVycm9yVHlwZXMuSU5URVJOQUxfRVJST1IsXG5cdFx0ZXJyb3IubWVzc2FnZSB8fCBTdHJpbmcoZXJyb3IpLFxuXHRcdG5ldyBTb3VyY2VTcGFuKHNvdXJjZSwgMCwgc291cmNlLmxlbmd0aClcblx0KTtcbn1cbiIsCiAgICAiaW1wb3J0IHtBU1RDbGFzc05vZGUsIEFTVE5vZGVUeXBlfSBmcm9tIFwiLi4vY29yZS9hc3RcIjtcbmltcG9ydCB7Q2xhc3NEZWZpbml0aW9ufSBmcm9tIFwiLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4uL2NvcmUvcGFyc2VyL3BhcnNlclwiO1xuaW1wb3J0IHt0aHJvd1J1bnRpbWVFcnJvcn0gZnJvbSBcIi4uL2NvcmUvZXJyb3JzXCI7XG5pbXBvcnQgdHlwZSB7U291cmNlfSBmcm9tIFwiLi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5leHBvcnQgY2xhc3MgTmF0aXZlQ2xhc3Mge1xuXHRuYW1lOiBzdHJpbmc7XG5cdG5hdGl2ZUluc3RhbmNlOiBhbnk7XG5cdG5hdGl2ZUNsYXNzU291cmNlOiBTb3VyY2U7XG5cdGlzQXV0b2xvYWRBYmxlOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBuYXRpdmVJbnN0YW5jZTogYW55LCBzb3VyY2U6IFNvdXJjZSkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5uYXRpdmVJbnN0YW5jZSA9IG5hdGl2ZUluc3RhbmNlO1xuXHRcdHRoaXMubmF0aXZlQ2xhc3NTb3VyY2UgPSBzb3VyY2U7XG5cdH1cblxuXHRnZXRDbGFzc0RlZmluaXRpb24oKTogQ2xhc3NEZWZpbml0aW9uIHtcblx0XHRjb25zdCBhc3QgPSBuZXcgUGFyc2VyKHRoaXMubmF0aXZlQ2xhc3NTb3VyY2UpLnBhcnNlKCk7XG5cblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgYXN0LmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5DTEFTUykge1xuXHRcdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVENsYXNzTm9kZSAmJiBub2RlLm5hbWUgPT09IHRoaXMubmFtZSkge1xuXHRcdFx0XHRcdGNvbnN0IGNsYXNzRGVmID0gQ2xhc3NEZWZpbml0aW9uLmZyb21BU1Qobm9kZSk7XG5cblx0XHRcdFx0XHRjbGFzc0RlZi5uYXRpdmVJbnN0YW5jZSA9IHRoaXMubmF0aXZlSW5zdGFuY2U7XG5cblx0XHRcdFx0XHRyZXR1cm4gY2xhc3NEZWY7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgQ2xhc3MgJHt0aGlzLm5hbWV9IG5vdCBmb3VuZC5gLCBhc3Quc3Bhbik7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtBU1RBcnJheU5vZGUsIEFTVE5vZGUsIEFTVE5vZGVUeXBlLCBBU1RSZXR1cm5Ob2RlfSBmcm9tIFwiLi4vYXN0XCI7XG5pbXBvcnQge0dSQU1NQVIsIFRZUEVfRU5VTX0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcbmltcG9ydCB7Q2xhc3NEZWZpbml0aW9uLCBJbnN0YW5jZX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB7dGhyb3dOYXRpdmVFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuXG5pbnRlcmZhY2UgU2VyaWFsaXphdGlvbk9iamVjdCB7XG5cdFtpbmRleDogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdGNsYXNzTmFtZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGNsYXNzTmFtZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG5cdH1cblxuXHRwdWJsaWMgc2VyaWFsaXplKCk6IFNlcmlhbGl6YXRpb25PYmplY3Qge1xuXHRcdGNvbnN0IG9iamVjdDogU2VyaWFsaXphdGlvbk9iamVjdCA9IHt9O1xuXG5cdFx0b2JqZWN0W3RoaXMuY2xhc3NOYW1lXSA9IE9iamVjdFxuXHRcdFx0LmtleXModGhpcylcblx0XHRcdC5maWx0ZXIoa2V5ID0+IGtleSAhPT0gJ2NsYXNzTmFtZScpXG5cdFx0XHQucmVkdWNlKChvYmplY3Q6IFNlcmlhbGl6YXRpb25PYmplY3QsIGtleTogc3RyaW5nKTogU2VyaWFsaXphdGlvbk9iamVjdCA9PiB7XG5cdFx0XHRcdGNvbnN0IGNvcHk6IFNlcmlhbGl6YXRpb25PYmplY3QgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzKTtcblx0XHRcdFx0b2JqZWN0W2tleV0gPSBjb3B5W2tleV07XG5cdFx0XHRcdHJldHVybiBvYmplY3Q7XG5cdFx0XHR9LCB7fSk7XG5cblx0XHRyZXR1cm4gb2JqZWN0O1xuXHR9XG5cblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHtjbGFzc05hbWU6IHRoaXMuY2xhc3NOYW1lfSwgbnVsbCwgMik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFPYmplY3RWaWV3IGV4dGVuZHMgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdHByaXZhdGUgX19pbnN0YW5jZTogSW5zdGFuY2U7XG5cblx0Y29uc3RydWN0b3IoaW5zdGFuY2U6IEluc3RhbmNlKSB7XG5cdFx0c3VwZXIoaW5zdGFuY2UuX19jbGFzc0RlZi5uYW1lKTtcblxuXHRcdHRoaXMuX19pbnN0YW5jZSA9IGluc3RhbmNlO1xuXG5cdFx0cmV0dXJuIG5ldyBQcm94eSh0aGlzLCB7XG5cdFx0XHRnZXQ6IChfOiBhbnksIG5hbWU6IHN0cmluZyk6IGFueSA9PiB7XG5cdFx0XHRcdGlmIChuYW1lIGluIHRoaXMuX19pbnN0YW5jZS5fX2luc3RhbmNlRmllbGRzKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX19pbnN0YW5jZS5fX2luc3RhbmNlRmllbGRzW25hbWVdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKG5hbWUgaW4gdGhpcy5fX2luc3RhbmNlLl9fc3RhdGljRmllbGRzKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX19pbnN0YW5jZS5fX3N0YXRpY0ZpZWxkc1tuYW1lXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChuYW1lIGluIHRoaXMpIHtcblx0XHRcdFx0XHRjb25zdCBzZWxmOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB0aGlzO1xuXHRcdFx0XHRcdHJldHVybiBzZWxmW25hbWVdO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IChfOiBhbnksIG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IGFueSA9PiB7XG5cdFx0XHRcdGlmIChuYW1lIGluIHRoaXMuX19pbnN0YW5jZS5fX2luc3RhbmNlRmllbGRzKSB7XG5cdFx0XHRcdFx0dGhpcy5fX2luc3RhbmNlLl9faW5zdGFuY2VGaWVsZHNbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChuYW1lIGluIHRoaXMuX19pbnN0YW5jZS5fX3N0YXRpY0ZpZWxkcykge1xuXHRcdFx0XHRcdHRoaXMuX19pbnN0YW5jZS5fX3N0YXRpY0ZpZWxkc1tuYW1lXSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdH0pXG5cdH1cblxuXHRwdWJsaWMgb3ZlcnJpZGUgc2VyaWFsaXplKCk6IFNlcmlhbGl6YXRpb25PYmplY3Qge1xuXHRcdGNvbnN0IG9iamVjdDogU2VyaWFsaXphdGlvbk9iamVjdCA9IHt9O1xuXG5cdFx0b2JqZWN0W3RoaXMuY2xhc3NOYW1lXSA9IHsuLi50aGlzLl9faW5zdGFuY2U/Ll9faW5zdGFuY2VGaWVsZHN9O1xuXG5cdFx0cmV0dXJuIG9iamVjdDtcblx0fVxuXG5cdHB1YmxpYyBvdmVycmlkZSB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnNlcmlhbGl6ZSgpLCBudWxsLCAyKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FzdFZhbHVlKHZhbHVlOiBhbnksIGV4cGVjdGVkOiBhbnkgPSBudWxsKTogYW55IHtcblx0Y29uc3QgdHlwZU9mID0gdHlwZW9mIHZhbHVlO1xuXG5cdGlmIChleHBlY3RlZCA9PT0gbnVsbCkge1xuXHRcdGlmICh2YWx1ZSA9PT0gR1JBTU1BUi5OVUxMKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0aWYgKHZhbHVlID09PSBHUkFNTUFSLlRSVUUpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRpZiAodmFsdWUgPT09IEdSQU1NQVIuRkFMU0UpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKHR5cGVPZiA9PT0gJ3N0cmluZycgJiYgdmFsdWUudHJpbSgpICE9PSAnJyAmJiAhaXNOYU4odmFsdWUpKSB7XG5cdFx0XHRyZXR1cm4gTnVtYmVyKHZhbHVlKTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0c3dpdGNoIChleHBlY3RlZCkge1xuXHRcdGNhc2UgVFlQRV9FTlVNLlNUUklORzpcblx0XHRcdHJldHVybiB0eXBlT2YgPT09ICdzdHJpbmcnID8gdmFsdWUgOiBTdHJpbmcodmFsdWUpO1xuXG5cdFx0Y2FzZSBUWVBFX0VOVU0uTlVNQkVSOlxuXHRcdFx0cmV0dXJuIHR5cGVPZiA9PT0gJ251bWJlcicgPyB2YWx1ZSA6IE51bWJlcih2YWx1ZSk7XG5cblx0XHRjYXNlIFRZUEVfRU5VTS5CT09MRUFOOlxuXHRcdFx0cmV0dXJuIHR5cGVPZiA9PT0gJ2Jvb2xlYW4nID8gdmFsdWUgOiB2YWx1ZSA9PT0gJ3RydWUnO1xuXG5cdFx0Y2FzZSBUWVBFX0VOVU0uTlVMTDpcblx0XHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9MeXJhU3RyaW5nKHZhbHVlOiBzdHJpbmcpOiBBU1ROb2RlIHtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLlNUUklORyk7XG5cdG5vZGUudmFsdWUgPSB2YWx1ZTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0x5cmFOdW1iZXIodmFsdWU6IG51bWJlcik6IEFTVE5vZGUge1xuXHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuTlVNQkVSKTtcblx0bm9kZS52YWx1ZSA9IHZhbHVlO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTHlyYUJvb2xlYW4odmFsdWU6IGJvb2xlYW4pOiBBU1ROb2RlIHtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLkJPT0xFQU4pO1xuXHRub2RlLnZhbHVlID0gdmFsdWU7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9MeXJhTnVsbCgpOiBBU1ROb2RlIHtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLk5VTEwpO1xuXHRub2RlLnZhbHVlID0gR1JBTU1BUi5OVUxMO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTHlyYUFycmF5KHZhbHVlczogYW55W10pOiBBU1ROb2RlIHtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RBcnJheU5vZGUoKTtcblx0bm9kZS5lbGVtZW50cyA9IHZhbHVlcy5tYXAodmFsdWUgPT4gdG9MeXJhVmFsdWUodmFsdWUpKTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0x5cmFWYWx1ZSh2YWx1ZTogYW55KTogQVNUTm9kZSB7XG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFTVE5vZGUpIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSBUWVBFX0VOVU0uU1RSSU5HKSB7XG5cdFx0cmV0dXJuIHRvTHlyYVN0cmluZyh2YWx1ZSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSBUWVBFX0VOVU0uTlVNQkVSKSB7XG5cdFx0cmV0dXJuIHRvTHlyYU51bWJlcih2YWx1ZSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSBUWVBFX0VOVU0uQk9PTEVBTikge1xuXHRcdHJldHVybiB0b0x5cmFCb29sZWFuKHZhbHVlKTtcblx0fVxuXG5cdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIHRvTHlyYU51bGwoKTtcblx0fVxuXG5cdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdHJldHVybiB0b0x5cmFBcnJheSh2YWx1ZSk7XG5cdH1cblxuXHR0aHJvd05hdGl2ZUVycm9yKCdDYW5ub3QgY29udmVydCBuYXRpdmUgb2JqZWN0IHRvIEx5cmEgdmFsdWUnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21MeXJhVmFsdWUodmFsdWU6IGFueSk6IGFueSB7XG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFTVE5vZGUpIHtcblx0XHRyZXR1cm4gY2FzdFZhbHVlKHZhbHVlLnZhbHVlKTtcblx0fVxuXG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEluc3RhbmNlKSB7XG5cdFx0aWYgKHZhbHVlLl9fbmF0aXZlSW5zdGFuY2UpIHtcblx0XHRcdHJldHVybiB2YWx1ZS5fX25hdGl2ZUluc3RhbmNlO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgTHlyYU9iamVjdFZpZXcodmFsdWUpO1xuXHR9XG5cblx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0cmV0dXJuIHZhbHVlLm1hcChmcm9tTHlyYVZhbHVlKTtcblx0fVxuXG5cdHJldHVybiBjYXN0VmFsdWUodmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuVmFsdWUodmFsdWU6IGFueSk6IEFTVFJldHVybk5vZGUge1xuXHRjb25zdCBub2RlID0gbmV3IEFTVFJldHVybk5vZGUoKTtcblx0bm9kZS5hcmd1bWVudCA9IHRvTHlyYVZhbHVlKHZhbHVlKTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwTmF0aXZlSW5zdGFuY2UobHlyYU5hdGl2ZU9iamVjdDogTHlyYU5hdGl2ZU9iamVjdCwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogSW5zdGFuY2Uge1xuXHRpZiAoIW9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuaGFzKGx5cmFOYXRpdmVPYmplY3QuY2xhc3NOYW1lKSkge1xuXHRcdHRocm93TmF0aXZlRXJyb3IoYENsYXNzICR7bHlyYU5hdGl2ZU9iamVjdC5jbGFzc05hbWV9IG5vdCBmb3VuZC5gKTtcblx0fVxuXG5cdGNvbnN0IGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24gPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChseXJhTmF0aXZlT2JqZWN0LmNsYXNzTmFtZSk7XG5cdGNvbnN0IGluc3RhbmNlOiBJbnN0YW5jZSA9IGNsYXNzRGVmLmNvbnN0cnVjdEVtcHR5SW5zdGFuY2UoKTtcblxuXHRpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlID0gbHlyYU5hdGl2ZU9iamVjdDtcblxuXHRyZXR1cm4gaW5zdGFuY2U7XG59XG5cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uLy4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuY29uc3QgQ0xBU1NfTkFNRSA9ICdTdHJpbmcnO1xuXG5leHBvcnQgY2xhc3MgTHlyYVN0cmluZyBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHR2YWx1ZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcpIHtcblx0XHRzdXBlcihDTEFTU19OQU1FKTtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdH1cblxuXHQvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG5cdHRvVXBwZXJDYXNlKCk6IEx5cmFTdHJpbmcge1xuXHRcdHJldHVybiBuZXcgTHlyYVN0cmluZyh0aGlzLnZhbHVlLnRvVXBwZXJDYXNlKCkpO1xuXHR9XG5cblx0Ly8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuXHR0b0xvd2VyQ2FzZSgpOiBMeXJhU3RyaW5nIHtcblx0XHRyZXR1cm4gbmV3IEx5cmFTdHJpbmcodGhpcy52YWx1ZS50b0xvd2VyQ2FzZSgpKTtcblx0fVxuXG5cdG92ZXJyaWRlIHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0cmluZ1R5cGUgZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdENMQVNTX05BTUUsXG5cdFx0XHRMeXJhU3RyaW5nLFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfSB7XG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWx1ZSk7XG5cdFx0XHRcdFxuXHRwdWJsaWMgdG9VcHBlckNhc2UoKTogJHtDTEFTU19OQU1FfTtcblx0XG5cdHB1YmxpYyB0b0xvd2VyQ2FzZSgpOiAke0NMQVNTX05BTUV9O1xuXG5cdHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmc7XG59YFxuXHRcdFx0KSk7XG5cblx0XHR0aGlzLmlzQXV0b2xvYWRBYmxlID0gdHJ1ZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge05hdGl2ZUNsYXNzfSBmcm9tIFwiLi4vbmF0aXZlX2NsYXNzXCI7XG5pbXBvcnQge0x5cmFOYXRpdmVPYmplY3R9IGZyb20gXCIuLi8uLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX2NvbnZlcnNpb25cIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vLi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5jb25zdCBDTEFTU19OQU1FID0gJ1N5c3RlbSc7XG5cbmV4cG9ydCBjbGFzcyBMeXJhU3lzdGVtIHtcblx0c3RhdGljIGFsZXJ0KG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuXHRcdGFsZXJ0KG1lc3NhZ2UpO1xuXHR9XG5cblx0c3RhdGljIHByaW50KG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuXHRcdGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuXHR9XG5cblx0c3RhdGljIGluZm8odmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdGNvbnNvbGUuaW5mbyh2YWx1ZS5zZXJpYWxpemUoKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnNvbGUuaW5mbyh2YWx1ZSk7XG5cdH1cblxuXHRzdGF0aWMgd2FybmluZyh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgTHlyYU5hdGl2ZU9iamVjdCkge1xuXHRcdFx0Y29uc29sZS53YXJuKHZhbHVlLnNlcmlhbGl6ZSgpKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc29sZS53YXJuKHZhbHVlKTtcblx0fVxuXG5cdHN0YXRpYyBlcnJvcih2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgTHlyYU5hdGl2ZU9iamVjdCkge1xuXHRcdFx0Y29uc29sZS5lcnJvcih2YWx1ZS5zZXJpYWxpemUoKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnNvbGUuZXJyb3IodmFsdWUpO1xuXHR9XG5cblx0c3RhdGljIGxvZyh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgTHlyYU5hdGl2ZU9iamVjdCkge1xuXHRcdFx0Y29uc29sZS5sb2codmFsdWUuc2VyaWFsaXplKCkpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zb2xlLmxvZyh2YWx1ZSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFN5c3RlbSBleHRlbmRzIE5hdGl2ZUNsYXNzIHtcblx0c3RhdGljIENMQVNTX05BTUUgPSBDTEFTU19OQU1FO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0Q0xBU1NfTkFNRSxcblx0XHRcdEx5cmFTeXN0ZW0sXG5cdFx0XHRuZXcgU291cmNlKFxuXHRcdFx0XHRgXG5jbGFzcyAke0NMQVNTX05BTUV9IHtcblx0cHVibGljIHN0YXRpYyBhbGVydChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkO1xuXHRcblx0cHVibGljIHN0YXRpYyBwcmludChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkO1xuXHRcblx0cHVibGljIHN0YXRpYyBpbmZvKHZhbHVlOiBtaXhlZCk6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgc3RhdGljIHdhcm5pbmcodmFsdWU6IG1peGVkKTogdm9pZDtcblx0XG5cdHB1YmxpYyBzdGF0aWMgZXJyb3IodmFsdWU6IG1peGVkKTogdm9pZDtcblx0XG5cdHB1YmxpYyBzdGF0aWMgbG9nKHZhbHVlOiBtaXhlZCk6IHZvaWQ7XG59YFxuXHRcdFx0KSk7XG5cblx0XHR0aGlzLmlzQXV0b2xvYWRBYmxlID0gZmFsc2U7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuLi8uLi9jb3JlL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmNvbnN0IENMQVNTX05BTUUgPSAnQXNzZXJ0JztcblxuY29uc3QgaWZGYWlsZWQgPSAobWVzc2FnZTogc3RyaW5nID0gJycpID0+IHtcblx0dGhyb3cgbmV3IEVycm9yKCdbQXNzZXJ0aW9uRXJyb3JdICcgKyAobWVzc2FnZSB8fCAnQXNzZXJ0aW9uIGZhaWxlZC4nKSk7XG59O1xuXG5leHBvcnQgY2xhc3MgTHlyYUFzc2VydCB7XG5cdHN0YXRpYyBpc1RydWUoY29uZGl0aW9uOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcgPSAnJykge1xuXHRcdGlmICghY29uZGl0aW9uKSB7XG5cdFx0XHRpZkZhaWxlZChtZXNzYWdlKTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgaXNGYWxzZShjb25kaXRpb246IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZyA9ICcnKSB7XG5cdFx0aWYgKGNvbmRpdGlvbikge1xuXHRcdFx0aWZGYWlsZWQobWVzc2FnZSk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBc3NlcnQgZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdENMQVNTX05BTUUsXG5cdFx0XHRMeXJhQXNzZXJ0LFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfSB7XG5cdHB1YmxpYyBzdGF0aWMgaXNUcnVlKGNvbmRpdGlvbjogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nID0gXCJcIik6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgc3RhdGljIGlzRmFsc2UoY29uZGl0aW9uOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcgPSBcIlwiKTogdm9pZDtcbn1gXG5cdFx0XHQpKTtcblxuXHRcdHRoaXMuaXNBdXRvbG9hZEFibGUgPSBmYWxzZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge05hdGl2ZUNsYXNzfSBmcm9tIFwiLi4vbmF0aXZlX2NsYXNzXCI7XG5pbXBvcnQge0x5cmFOYXRpdmVPYmplY3R9IGZyb20gXCIuLi8uLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX2NvbnZlcnNpb25cIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vLi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5jb25zdCBDTEFTU19OQU1FID0gJ051bWJlcic7XG5cbmV4cG9ydCBjbGFzcyBMeXJhTnVtYmVyIGV4dGVuZHMgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdHZhbHVlOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IodmFsdWU6IG51bWJlcikge1xuXHRcdHN1cGVyKENMQVNTX05BTUUpO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0fVxuXG5cdG92ZXJyaWRlIHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWUudG9TdHJpbmcoKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTnVtYmVyVHlwZSBleHRlbmRzIE5hdGl2ZUNsYXNzIHtcblx0c3RhdGljIENMQVNTX05BTUUgPSBDTEFTU19OQU1FO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0Q0xBU1NfTkFNRSxcblx0XHRcdEx5cmFOdW1iZXIsXG5cdFx0XHRuZXcgU291cmNlKFxuXHRcdFx0XHRgXG5jbGFzcyAke0NMQVNTX05BTUV9IHtcblx0cHVibGljIGNvbnN0cnVjdG9yKHZhbHVlKTtcblxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IHRydWU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uLy4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuY29uc3QgQVJSQVlfQ0xBU1NfTkFNRSA9ICdBcnJheSc7XG5jb25zdCBBUlJBWV9JVEVSQVRPUl9DTEFTU19OQU1FID0gJ0FycmF5SXRlcmF0b3InO1xuXG5leHBvcnQgY2xhc3MgTHlyYUFycmF5IGV4dGVuZHMgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdHZhbHVlczogYW55W107XG5cblx0Y29uc3RydWN0b3IodmFsdWVzOiBhbnlbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQVJSQVlfQ0xBU1NfTkFNRSk7XG5cblx0XHR0aGlzLnZhbHVlcyA9IHZhbHVlcztcblx0fVxuXG5cdGl0ZXJhdG9yKCk6IEx5cmFBcnJheUl0ZXJhdG9yIHtcblx0XHRyZXR1cm4gbmV3IEx5cmFBcnJheUl0ZXJhdG9yKHRoaXMpO1xuXHR9XG5cblx0bGVuZ3RoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzLmxlbmd0aDtcblx0fVxuXG5cdHB1c2godmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMudmFsdWVzLnB1c2godmFsdWUpO1xuXHR9XG5cblx0Ly8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuXHRnZXQoaW5kZXg6IG51bWJlcik6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzW2luZGV4XSA/PyBudWxsO1xuXHR9XG5cblx0Ly8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuXHRyZW1vdmVBdChpbmRleDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy52YWx1ZXMgPSB0aGlzLnZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHR9XG5cblx0b3ZlcnJpZGUgdG9TdHJpbmcoKTogc3RyaW5nIHtcblx0XHRjb25zdCB2YWx1ZXMgPSB0aGlzXG5cdFx0XHQudmFsdWVzXG5cdFx0XHQubWFwKHZhbHVlID0+IHtcblx0XHRcdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgTHlyYUFycmF5KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0fSk7XG5cblx0XHRyZXR1cm4gYFske3ZhbHVlcy5qb2luKCcsICcpfV1gO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBcnJheVR5cGUgZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQVJSQVlfQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdEFSUkFZX0NMQVNTX05BTUUsXG5cdFx0XHRMeXJhQXJyYXksXG5cdFx0XHRuZXcgU291cmNlKFxuXHRcdFx0XHRgXG5jbGFzcyAke0FSUkFZX0NMQVNTX05BTUV9PFQ+IGltcGxlbWVudHMgSXRlcmFibGU8VD4ge1xuXHRwdWJsaWMgY29uc3RydWN0b3IodmFsdWVzID0gW10pO1xuXHRcblx0cHVibGljIGl0ZXJhdG9yKCk6IEl0ZXJhdG9yPFQ+O1xuXHRcblx0cHVibGljIGxlbmd0aCgpOiBudW1iZXI7XG5cdFxuXHRwdWJsaWMgcHVzaCh2YWx1ZTogVCk6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBUPztcblx0XG5cdHB1YmxpYyByZW1vdmVBdChpbmRleDogbnVtYmVyKTogdm9pZDtcblx0XG5cdHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmc7XG59YFxuXHRcdFx0KSk7XG5cblx0XHR0aGlzLmlzQXV0b2xvYWRBYmxlID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYUFycmF5SXRlcmF0b3IgZXh0ZW5kcyBMeXJhTmF0aXZlT2JqZWN0IHtcblx0dmFsdWVzOiBhbnlbXTtcblx0aW5kZXg6IG51bWJlciA9IDA7XG5cblx0Y29uc3RydWN0b3IoYXJyYXk6IEx5cmFBcnJheSkge1xuXHRcdHN1cGVyKEFSUkFZX0lURVJBVE9SX0NMQVNTX05BTUUpO1xuXG5cdFx0dGhpcy52YWx1ZXMgPSBhcnJheS52YWx1ZXM7XG5cdH1cblxuXHRyZXdpbmQoKSB7XG5cdFx0dGhpcy5pbmRleCA9IDA7XG5cdH1cblxuXHRoYXNOZXh0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmluZGV4IDwgdGhpcy52YWx1ZXMubGVuZ3RoO1xuXHR9XG5cblx0bmV4dCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pbmRleCArIDEgPiB0aGlzLnZhbHVlcy5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmluZGV4Kys7XG5cdH1cblxuXHQvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG5cdHByZXZpb3VzKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmluZGV4ICsgMSA8IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmluZGV4LS07XG5cdH1cblxuXHQvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG5cdGtleSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmluZGV4O1xuXHR9XG5cblx0Y3VycmVudCgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlc1t0aGlzLmluZGV4XTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQXJyYXlJdGVyYXRvclR5cGUgZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQVJSQVlfSVRFUkFUT1JfQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdEFSUkFZX0lURVJBVE9SX0NMQVNTX05BTUUsXG5cdFx0XHRMeXJhQXJyYXksXG5cdFx0XHRuZXcgU291cmNlKFxuXHRcdFx0XHRgXG5jbGFzcyAke0FSUkFZX0lURVJBVE9SX0NMQVNTX05BTUV9PFQ+IGltcGxlbWVudHMgSXRlcmF0b3I8VD4ge1xuXHRwdWJsaWMgY29uc3RydWN0b3IoYXJyYXk6IEFycmF5PFQ+KTtcblx0XG5cdHB1YmxpYyBoYXNOZXh0KCk6IGJvb2xlYW47XG5cdFxuXHRwdWJsaWMgbmV4dCgpOiB2b2lkO1xuXHRcblx0cHVibGljIHByZXZpb3VzKCk6IHZvaWQ7XG5cdFxuXHRwdWJsaWMga2V5KCk6IG51bWJlcjtcblx0XG5cdHB1YmxpYyBjdXJyZW50KCk6IFQ7XG5cdFxuXHRwdWJsaWMgcmV3aW5kKCk6IHZvaWQ7XG59YFxuXHRcdFx0KSk7XG5cblx0XHR0aGlzLmlzQXV0b2xvYWRBYmxlID0gdHJ1ZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQgdHlwZSB7RXZlbnRQaXBlbGluZX0gZnJvbSBcIi4vcGlwZWxpbmVcIjtcbmltcG9ydCB7dG9MeXJhVmFsdWV9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge0xhbWJkYUZ1bmN0aW9uQ2FsbH0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX3J1bnRpbWVcIjtcblxuXG5leHBvcnQgY2xhc3MgU3RhdGU8VCA9IGFueT4ge1xuXHRwcml2YXRlIHZhbHVlOiBUO1xuXHRwcml2YXRlIHN1YnNjcmliZXJzOiBNYXA8bnVtYmVyLCAodmFsdWU6IFQpID0+IHZvaWQ+ID0gbmV3IE1hcDxudW1iZXIsICh2YWx1ZTogVCkgPT4gdm9pZD4oKTtcblx0cHJpdmF0ZSBpZDogbnVtYmVyID0gMDtcblxuXHRjb25zdHJ1Y3Rvcihpbml0aWFsOiBUKSB7XG5cdFx0dGhpcy52YWx1ZSA9IGluaXRpYWw7XG5cdH1cblxuXHRnZXQoKTogVCB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdH1cblxuXHRzZXQodmFsdWU6IFQpOiB2b2lkIHtcblx0XHRpZiAodGhpcy52YWx1ZSA9PT0gdmFsdWUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdFx0dGhpcy5ub3RpZnkoKTtcblx0fVxuXG5cdHN1YnNjcmliZShmbjogTGFtYmRhRnVuY3Rpb25DYWxsKTogbnVtYmVyIHtcblx0XHRjb25zdCBuZXh0SWQ6IG51bWJlciA9IHRoaXMuaWQrKztcblx0XHR0aGlzLnN1YnNjcmliZXJzLnNldChuZXh0SWQsIHRoaXMud3JhcENhbGxiYWNrKGZuKSk7XG5cdFx0cmV0dXJuIG5leHRJZDtcblx0fVxuXG5cdHVuc3Vic2NyaWJlKGlkOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zdWJzY3JpYmVycy5kZWxldGUoaWQpO1xuXHR9XG5cblx0cHJpdmF0ZSBub3RpZnkoKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBmbiBvZiB0aGlzLnN1YnNjcmliZXJzLnZhbHVlcygpKSB7XG5cdFx0XHRmbih0aGlzLnZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHdyYXBDYWxsYmFjayhmbjogTGFtYmRhRnVuY3Rpb25DYWxsKSB7XG5cdFx0cmV0dXJuICh2YWx1ZTogVCk6IHZvaWQgPT4ge1xuXHRcdFx0Zm4uZXZhbENhbGwobnVsbCwgdG9MeXJhVmFsdWUodmFsdWUpKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRTdGF0ZVRvRXZlbnQ8VD4ocGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIGV2ZW50OiBzdHJpbmcsIHN0YXRlOiBTdGF0ZTxUPiwgbWFwPzogKHBheWxvYWQ6IGFueSkgPT4gVCk6IHZvaWQge1xuXHRwaXBlbGluZS5vbihldmVudCwgKHBheWxvYWQpOiB2b2lkID0+IHtcblx0XHRjb25zdCB2YWx1ZTogYW55ID0gbWFwID8gbWFwKHBheWxvYWQpIDogcGF5bG9hZDtcblx0XHRzdGF0ZS5zZXQodmFsdWUpO1xuXHR9KTtcbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uLy4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcbmltcG9ydCB7U3RhdGV9IGZyb20gXCIuLi8uLi9jb3JlL2V2ZW50L3N0YXRlXCI7XG5pbXBvcnQgdHlwZSB7TGFtYmRhRnVuY3Rpb25DYWxsfSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9ydW50aW1lXCI7XG5cbmNvbnN0IENMQVNTX05BTUUgPSAnU3RhdGUnO1xuXG5leHBvcnQgY2xhc3MgTHlyYVN0YXRlPFQ+IGV4dGVuZHMgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdHByaXZhdGUgc3RhdGU6IFN0YXRlPFQ+O1xuXG5cdGNvbnN0cnVjdG9yKGluaXRpYWw6IFQpIHtcblx0XHRzdXBlcihDTEFTU19OQU1FKTtcblx0XHR0aGlzLnN0YXRlID0gbmV3IFN0YXRlPFQ+KGluaXRpYWwpO1xuXHR9XG5cblx0Z2V0KCk6IFQge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLmdldCgpO1xuXHR9XG5cblx0c2V0KHZhbHVlOiBUKTogdm9pZCB7XG5cdFx0dGhpcy5zdGF0ZS5zZXQodmFsdWUpO1xuXHR9XG5cblx0c3Vic2NyaWJlKGZuOiBMYW1iZGFGdW5jdGlvbkNhbGwpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLnN1YnNjcmliZShmbik7XG5cdH1cblxuXHR1bnN1YnNjcmliZShpZDogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUudW5zdWJzY3JpYmUoaWQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTdGF0ZVR5cGUgZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdENMQVNTX05BTUUsXG5cdFx0XHRMeXJhU3RhdGUsXG5cdFx0XHRuZXcgU291cmNlKFxuXHRcdFx0XHRgXG5jbGFzcyAke0NMQVNTX05BTUV9PFQ+IHtcblx0cHVibGljIGNvbnN0cnVjdG9yKGluaXRpYWw6IFQpO1xuXG5cdHB1YmxpYyBnZXQoKTogVDtcblx0XG5cdHB1YmxpYyBzZXQodmFsdWU6IFQpOiB2b2lkO1xuXHRcblx0cHVibGljIHN1YnNjcmliZShmbjogKFQpIC0+IHZvaWQpOiBudW1iZXI7XG5cdFxuXHRwdWJsaWMgdW5zdWJzY3JpYmUoaWQ6IG51bWJlcik6IGJvb2xlYW47XG59YFxuXHRcdFx0KSk7XG5cblx0XHR0aGlzLmlzQXV0b2xvYWRBYmxlID0gdHJ1ZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge05hdGl2ZUNsYXNzfSBmcm9tIFwiLi4vbmF0aXZlX2NsYXNzXCI7XG5pbXBvcnQge0x5cmFOYXRpdmVPYmplY3R9IGZyb20gXCIuLi8uLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX2NvbnZlcnNpb25cIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vLi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5jb25zdCBDTEFTU19OQU1FID0gJ0V2ZW50JztcblxuZXhwb3J0IGNsYXNzIEx5cmFFdmVudCBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGV2ZW50OiBFdmVudCkge1xuXHRcdHN1cGVyKENMQVNTX05BTUUpO1xuXHR9XG5cblx0Z2V0VHlwZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmV2ZW50LnR5cGU7XG5cdH1cblxuXHRwcmV2ZW50RGVmYXVsdCgpOiB2b2lkIHtcblx0XHR0aGlzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEV2ZW50VHlwZSBleHRlbmRzIE5hdGl2ZUNsYXNzIHtcblx0c3RhdGljIENMQVNTX05BTUUgPSBDTEFTU19OQU1FO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0Q0xBU1NfTkFNRSxcblx0XHRcdEx5cmFFdmVudCxcblx0XHRcdG5ldyBTb3VyY2UoXG5cdFx0XHRcdGBcbmNsYXNzICR7Q0xBU1NfTkFNRX0ge1xuXHRwdWJsaWMgY29uc3RydWN0b3IoZXZlbnQpO1xuXG5cdHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZztcblxuXHRwdWJsaWMgcHJldmVudERlZmF1bHQoKTogdm9pZDtcbn1gKSk7XG5cblx0XHR0aGlzLmlzQXV0b2xvYWRBYmxlID0gdHJ1ZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge05hdGl2ZUNsYXNzfSBmcm9tIFwiLi9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7U3RyaW5nVHlwZX0gZnJvbSBcIi4vY2xhc3Nlcy9zdHJpbmdcIjtcbmltcG9ydCB7U3lzdGVtfSBmcm9tIFwiLi9jbGFzc2VzL3N5c3RlbVwiO1xuaW1wb3J0IHtBc3NlcnR9IGZyb20gXCIuL2NsYXNzZXMvYXNzZXJ0XCI7XG5pbXBvcnQge051bWJlclR5cGV9IGZyb20gXCIuL2NsYXNzZXMvbnVtYmVyXCI7XG5pbXBvcnQge0FycmF5SXRlcmF0b3JUeXBlLCBBcnJheVR5cGV9IGZyb20gXCIuL2NsYXNzZXMvYXJyYXlcIjtcbmltcG9ydCB7U3RhdGVUeXBlfSBmcm9tIFwiLi9jbGFzc2VzL3N0YXRlXCI7XG5pbXBvcnQge0V2ZW50VHlwZX0gZnJvbSBcIi4vY2xhc3Nlcy9ldmVudC50c1wiO1xuXG5leHBvcnQgY2xhc3MgTmF0aXZlQ2xhc3NlcyB7XG5cdHJlZ2lzdHJ5OiBNYXA8c3RyaW5nLCBOYXRpdmVDbGFzcz4gPSBuZXcgTWFwKCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoQXNzZXJ0LkNMQVNTX05BTUUsIG5ldyBBc3NlcnQoKSk7XG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoU3lzdGVtLkNMQVNTX05BTUUsIG5ldyBTeXN0ZW0oKSk7XG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoU3RyaW5nVHlwZS5DTEFTU19OQU1FLCBuZXcgU3RyaW5nVHlwZSgpKTtcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChOdW1iZXJUeXBlLkNMQVNTX05BTUUsIG5ldyBOdW1iZXJUeXBlKCkpO1xuXHRcdHRoaXMucmVnaXN0cnkuc2V0KEFycmF5VHlwZS5DTEFTU19OQU1FLCBuZXcgQXJyYXlUeXBlKCkpO1xuXHRcdHRoaXMucmVnaXN0cnkuc2V0KEFycmF5SXRlcmF0b3JUeXBlLkNMQVNTX05BTUUsIG5ldyBBcnJheUl0ZXJhdG9yVHlwZSgpKVxuXHRcdHRoaXMucmVnaXN0cnkuc2V0KFN0YXRlVHlwZS5DTEFTU19OQU1FLCBuZXcgU3RhdGVUeXBlKCkpO1xuXHRcdHRoaXMucmVnaXN0cnkuc2V0KEV2ZW50VHlwZS5DTEFTU19OQU1FLCBuZXcgRXZlbnRUeXBlKCkpXG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtBU1RQYXJhbWV0ZXJOb2RlLCBBU1RUeXBlTm9kZX0gZnJvbSBcIi4uL2NvcmUvYXN0XCI7XG5pbXBvcnQge1RZUEVfRU5VTX0gZnJvbSBcIi4uL2NvcmUvZ3JhbW1hclwiO1xuaW1wb3J0IHt0aHJvd05hdGl2ZUVycm9yfSBmcm9tIFwiLi4vY29yZS9lcnJvcnNcIjtcblxuZXhwb3J0IGNsYXNzIE5hdGl2ZUZ1bmN0aW9uIHtcblx0bmFtZTogc3RyaW5nO1xuXHRwYXJhbWV0ZXJOb2RlczogQVNUUGFyYW1ldGVyTm9kZVtdID0gW107XG5cdHJldHVyblR5cGU6IEFTVFR5cGVOb2RlO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgcGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdLCByZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5wYXJhbWV0ZXJOb2RlcyA9IHBhcmFtZXRlcnM7XG5cdFx0dGhpcy5yZXR1cm5UeXBlID0gcmV0dXJuVHlwZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTmF0aXZlRnVuY3Rpb25UeXBlUmVnaXN0cnkge1xuXHRmdW5jdGlvbnM6IE1hcDxzdHJpbmcsIE5hdGl2ZUZ1bmN0aW9uPiA9IG5ldyBNYXAoKTtcblxuXHRoYXMobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZnVuY3Rpb25zLmhhcyhuYW1lKTtcblx0fVxuXG5cdGdldChuYW1lOiBzdHJpbmcpOiBOYXRpdmVGdW5jdGlvbiB7XG5cdFx0Y29uc3QgbmF0aXZlRnVuY3Rpb246IE5hdGl2ZUZ1bmN0aW9uIHwgdW5kZWZpbmVkID0gdGhpcy5mdW5jdGlvbnMuZ2V0KG5hbWUpO1xuXHRcdGlmICghbmF0aXZlRnVuY3Rpb24pIHtcblx0XHRcdHRocm93TmF0aXZlRXJyb3IoYEZ1bmN0aW9uICR7bmFtZX0gbm90IGZvdW5kLmApO1xuXHRcdH1cblx0XHRyZXR1cm4gbmF0aXZlRnVuY3Rpb247XG5cdH1cblxuXHRzZXQobmFtZTogc3RyaW5nLCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sIHJldHVyblR5cGU6IEFTVFR5cGVOb2RlKTogTmF0aXZlRnVuY3Rpb25UeXBlUmVnaXN0cnkge1xuXHRcdHRoaXMuZnVuY3Rpb25zLnNldChuYW1lLCBuZXcgTmF0aXZlRnVuY3Rpb24obmFtZSwgcGFyYW1ldGVycywgcmV0dXJuVHlwZSkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBOYXRpdmVGdW5jdGlvbnMge1xuXHRzdGF0aWMgUFJJTlQgPSAncHJpbnQnO1xuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fVxuXHQgKi9cblx0Z2V0R2xvYmFsRnVuY3Rpb25zKCk6IHsgW2tleTogc3RyaW5nXTogKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkgfSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFtOYXRpdmVGdW5jdGlvbnMuUFJJTlRdOiAoLi4uYXJncykgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyguLi5hcmdzKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cblx0Z2V0R2xvYmFsRnVuY3Rpb25UeXBlUmVnaXN0cnkoKTogTmF0aXZlRnVuY3Rpb25UeXBlUmVnaXN0cnkge1xuXHRcdGNvbnN0IGZ1bmN0aW9ucyA9IG5ldyBOYXRpdmVGdW5jdGlvblR5cGVSZWdpc3RyeSgpO1xuXHRcdGZ1bmN0aW9ucy5zZXQoXG5cdFx0XHROYXRpdmVGdW5jdGlvbnMuUFJJTlQsXG5cdFx0XHRbcGFyYW1ldGVyKHR5cGUoVFlQRV9FTlVNLlNUUklORyksICdtZXNzYWdlJyldLFxuXHRcdFx0dHlwZShUWVBFX0VOVU0uVk9JRClcblx0XHQpXG5cblx0XHRyZXR1cm4gZnVuY3Rpb25zO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHR5cGUobmFtZTogc3RyaW5nLCBudWxsYWJsZSA9IGZhbHNlKTogQVNUVHlwZU5vZGUge1xuXHRyZXR1cm4gbmV3IEFTVFR5cGVOb2RlKEFTVFR5cGVOb2RlLktJTkRfU0lNUExFLCBuYW1lLCBudWxsYWJsZSk7XG59XG5cbmZ1bmN0aW9uIHBhcmFtZXRlcih0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGUsIG5hbWU6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBhbnkgPSBudWxsKTogQVNUUGFyYW1ldGVyTm9kZSB7XG5cdHJldHVybiBuZXcgQVNUUGFyYW1ldGVyTm9kZShuYW1lLCB0eXBlQW5ub3RhdGlvbiwgZGVmYXVsdFZhbHVlKTtcbn1cbiIsCiAgICAiaW1wb3J0IHtUWVBFX0VOVU19IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5pbXBvcnQge1xuXHRBU1RDbGFzc05vZGUsXG5cdEFTVEZpZWxkTm9kZSxcblx0QVNUSW50ZXJmYWNlTm9kZSxcblx0QVNUTWV0aG9kTm9kZSxcblx0QVNUTm9kZSxcblx0QVNUUGFyYW1ldGVyTm9kZSxcblx0QVNUVHlwZU5vZGVcbn0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHt0aHJvd1R5cGVFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5cbmV4cG9ydCBjbGFzcyBQcmltaXRpdmVUeXBlcyB7XG5cdHN0YXRpYyByZWFkb25seSBOVU1CRVI6IHN0cmluZyA9IFRZUEVfRU5VTS5OVU1CRVI7XG5cdHN0YXRpYyByZWFkb25seSBTVFJJTkc6IHN0cmluZyA9IFRZUEVfRU5VTS5TVFJJTkc7XG5cdHN0YXRpYyByZWFkb25seSBCT09MRUFOOiBzdHJpbmcgPSBUWVBFX0VOVU0uQk9PTEVBTjtcblx0c3RhdGljIHJlYWRvbmx5IE1JWEVEOiBzdHJpbmcgPSBUWVBFX0VOVU0uTUlYRUQ7XG5cdHN0YXRpYyByZWFkb25seSBOVUxMOiBzdHJpbmcgPSBUWVBFX0VOVU0uTlVMTDtcblx0c3RhdGljIHJlYWRvbmx5IFZPSUQ6IHN0cmluZyA9IFRZUEVfRU5VTS5WT0lEO1xuXG5cdHN0YXRpYyBoYXNUeXBlKHR5cGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChQcmltaXRpdmVUeXBlcywgdHlwZS50b1VwcGVyQ2FzZSgpKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgUHJpbWl0aXZlQ2xhc3NUeXBlcyB7XG5cdHN0YXRpYyByZWFkb25seSBBUlJBWTogc3RyaW5nID0gVFlQRV9FTlVNLkFSUkFZO1xuXG5cdHN0YXRpYyBDTEFTU05BTUVfTUFQOiB7IFtzOiBzdHJpbmddOiBzdHJpbmc7IH0gPSB7XG5cdFx0YXJyYXk6ICdBcnJheSdcblx0fVxuXG5cdHN0YXRpYyBnZXRDbGFzc1JlZk5hbWUodHlwZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG5cdFx0cmV0dXJuIFByaW1pdGl2ZUNsYXNzVHlwZXMuQ0xBU1NOQU1FX01BUFt0eXBlXSB8fCBudWxsO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlIHtcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdH1cblxuXHRlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcyA9PT0gb3RoZXI7XG5cdH1cblxuXHRhY2NlcHRzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXF1YWxzKG90aGVyKTtcblx0fVxuXG5cdHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGBUeXBlKCR7dGhpcy5uYW1lfSlgO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBQcmltaXRpdmVUeXBlIGV4dGVuZHMgVHlwZSB7XG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuXHRcdHN1cGVyKG5hbWUpO1xuXHR9XG5cblx0b3ZlcnJpZGUgZXF1YWxzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIG90aGVyIGluc3RhbmNlb2YgUHJpbWl0aXZlVHlwZVxuXHRcdFx0JiYgdGhpcy5uYW1lID09PSBvdGhlci5uYW1lO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBNaXhlZFR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoUHJpbWl0aXZlVHlwZXMuTUlYRUQpO1xuXHR9XG5cblx0b3ZlcnJpZGUgZXF1YWxzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIG90aGVyIGluc3RhbmNlb2YgTWl4ZWRUeXBlO1xuXHR9XG5cblx0b3ZlcnJpZGUgYWNjZXB0cygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVm9pZFR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoUHJpbWl0aXZlVHlwZXMuVk9JRCk7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBWb2lkVHlwZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTnVsbFR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoUHJpbWl0aXZlVHlwZXMuTlVMTCk7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBOdWxsVHlwZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTnVsbGFibGVUeXBlIGV4dGVuZHMgVHlwZSB7XG5cdGlubmVyOiBUeXBlO1xuXG5cdGNvbnN0cnVjdG9yKGlubmVyOiBUeXBlKSB7XG5cdFx0c3VwZXIoaW5uZXIudG9TdHJpbmcoKSArICc/Jyk7XG5cdFx0dGhpcy5pbm5lciA9IGlubmVyO1xuXHR9XG5cblx0b3ZlcnJpZGUgZXF1YWxzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0aWYgKG90aGVyID09PSBUeXBlcy5OVUxMKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAob3RoZXIgaW5zdGFuY2VvZiBOdWxsYWJsZVR5cGUpIHtcblx0XHRcdHJldHVybiB0aGlzLmlubmVyLmVxdWFscyhvdGhlci5pbm5lcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0b3ZlcnJpZGUgYWNjZXB0cyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBvdGhlciA9PT0gVHlwZXMuTlVMTCB8fCB0aGlzLmlubmVyLmFjY2VwdHMob3RoZXIpO1xuXHR9XG5cblx0b3ZlcnJpZGUgdG9TdHJpbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5pbm5lci50b1N0cmluZygpICsgJz8nO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBWTm9kZVR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoJ3Zub2RlJyk7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBWb2lkVHlwZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVHlwZXMge1xuXHRzdGF0aWMgcmVhZG9ubHkgTlVNQkVSOiBQcmltaXRpdmVUeXBlID0gbmV3IFByaW1pdGl2ZVR5cGUoUHJpbWl0aXZlVHlwZXMuTlVNQkVSKTtcblx0c3RhdGljIHJlYWRvbmx5IFNUUklORzogUHJpbWl0aXZlVHlwZSA9IG5ldyBQcmltaXRpdmVUeXBlKFByaW1pdGl2ZVR5cGVzLlNUUklORyk7XG5cdHN0YXRpYyByZWFkb25seSBCT09MRUFOOiBQcmltaXRpdmVUeXBlID0gbmV3IFByaW1pdGl2ZVR5cGUoUHJpbWl0aXZlVHlwZXMuQk9PTEVBTik7XG5cdHN0YXRpYyByZWFkb25seSBNSVhFRDogTWl4ZWRUeXBlID0gbmV3IE1peGVkVHlwZSgpO1xuXHRzdGF0aWMgcmVhZG9ubHkgTlVMTDogTnVsbFR5cGUgPSBuZXcgTnVsbFR5cGUoKTtcblx0c3RhdGljIHJlYWRvbmx5IFZPSUQ6IFZvaWRUeXBlID0gbmV3IFZvaWRUeXBlKCk7XG5cdHN0YXRpYyByZWFkb25seSBWTk9ERTogVk5vZGVUeXBlID0gbmV3IFZOb2RlVHlwZSgpO1xuXG5cdHN0YXRpYyBnZXRUeXBlKG5hbWU6IHN0cmluZyk6IFR5cGUge1xuXHRcdGlmICghT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoUHJpbWl0aXZlVHlwZXMsIG5hbWUudG9VcHBlckNhc2UoKSkpIHtcblx0XHRcdHRocm93VHlwZUVycm9yKGBVbmtub3duIHByaW1pdGl2ZSB0eXBlICR7bmFtZX0uYCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdHlwZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IFR5cGVzO1xuXHRcdHJldHVybiB0eXBlc1tuYW1lLnRvVXBwZXJDYXNlKCldO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlVmFyaWFibGUgZXh0ZW5kcyBUeXBlIHtcblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIobmFtZSk7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpIHtcblx0XHRyZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBUeXBlVmFyaWFibGVcblx0XHRcdCYmIHRoaXMubmFtZSA9PT0gb3RoZXIubmFtZTtcblx0fVxuXG5cdG92ZXJyaWRlIGFjY2VwdHMoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGVQYXJhbWV0ZXJTeW1ib2wge1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHZhcmlhYmxlVHlwZTogVHlwZVZhcmlhYmxlO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy52YXJpYWJsZVR5cGUgPSBuZXcgVHlwZVZhcmlhYmxlKG5hbWUpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBGaWVsZFN5bWJvbCB7XG5cdHJlYWRvbmx5IG5vZGU6IEFTVEZpZWxkTm9kZTtcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXHRyZWFkb25seSBmaWVsZFR5cGU6IFR5cGU7XG5cdHJlYWRvbmx5IGlzU3RhdGljOiBib29sZWFuID0gZmFsc2U7XG5cdHJlYWRvbmx5IGlzUHJpdmF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXHRyZWFkb25seSBpc1B1YmxpYzogYm9vbGVhbiA9IGZhbHNlO1xuXHRyZWFkb25seSBpc1JlYWRvbmx5OiBib29sZWFuID0gZmFsc2U7XG5cdG93bmVyOiBDbGFzc1N5bWJvbCB8IEludGVyZmFjZVN5bWJvbCB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5vZGU6IEFTVEZpZWxkTm9kZSwgZmllbGRUeXBlOiBUeXBlKSB7XG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0XHR0aGlzLm5hbWUgPSBub2RlLm5hbWU7XG5cdFx0dGhpcy5maWVsZFR5cGUgPSBmaWVsZFR5cGU7XG5cdFx0dGhpcy5pc1N0YXRpYyA9IG5vZGUubW9kaWZpZXJzLnN0YXRpYztcblx0XHR0aGlzLmlzUHJpdmF0ZSA9IG5vZGUubW9kaWZpZXJzLnByaXZhdGU7XG5cdFx0dGhpcy5pc1B1YmxpYyA9IG5vZGUubW9kaWZpZXJzLnB1YmxpYztcblx0XHR0aGlzLmlzUmVhZG9ubHkgPSBub2RlLm1vZGlmaWVycy5yZWFkb25seTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyU3ltYm9sIHtcblx0cmVhZG9ubHkgbm9kZTogQVNUUGFyYW1ldGVyTm9kZSB8IG51bGw7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblx0cmVhZG9ubHkgcGFyYW1ldGVyVHlwZTogVHlwZTtcblx0cmVhZG9ubHkgZGVmYXVsdFR5cGU6IFR5cGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGU6IFR5cGUsIGRlZmF1bHRWYWx1ZTogVHlwZSB8IG51bGwgPSBudWxsLCBub2RlOiBBU1RQYXJhbWV0ZXJOb2RlIHwgbnVsbCA9IG51bGwpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMucGFyYW1ldGVyVHlwZSA9IHR5cGU7XG5cdFx0dGhpcy5kZWZhdWx0VHlwZSA9IGRlZmF1bHRWYWx1ZTtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBNZXRob2RTeW1ib2wge1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cdHJlYWRvbmx5IG5vZGU6IEFTVE1ldGhvZE5vZGU7XG5cdHJlYWRvbmx5IGlzU3RhdGljOiBib29sZWFuID0gZmFsc2U7XG5cdHJlYWRvbmx5IGlzUHJpdmF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXHRyZWFkb25seSBpc1B1YmxpYzogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHR5cGVQYXJhbWV0ZXJTeW1ib2xzOiBUeXBlUGFyYW1ldGVyU3ltYm9sW10gPSBbXTtcblx0cGFyYW1ldGVyU3ltYm9sczogUGFyYW1ldGVyU3ltYm9sW10gPSBbXTtcblx0cmV0dXJuVHlwZTogVHlwZSA9IFR5cGVzLk1JWEVEO1xuXG5cdG93bmVyOiBDbGFzc1N5bWJvbCB8IEludGVyZmFjZVN5bWJvbCB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5vZGU6IEFTVE1ldGhvZE5vZGUpIHtcblx0XHR0aGlzLm5hbWUgPSBub2RlLm5hbWU7XG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0XHR0aGlzLmlzU3RhdGljID0gbm9kZS5tb2RpZmllcnMuc3RhdGljO1xuXHRcdHRoaXMuaXNQcml2YXRlID0gbm9kZS5tb2RpZmllcnMucHJpdmF0ZTtcblx0XHR0aGlzLmlzUHVibGljID0gbm9kZS5tb2RpZmllcnMucHVibGljO1xuXHR9XG5cblx0Z2V0IGJvZHkoKTogQVNUTm9kZVtdIHtcblx0XHRyZXR1cm4gdGhpcy5ub2RlLmNoaWxkcmVuO1xuXHR9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT2JqZWN0U3ltYm9sIHtcblx0bmFtZTogc3RyaW5nO1xuXHR0eXBlUGFyYW1ldGVyU3ltYm9sczogVHlwZVBhcmFtZXRlclN5bWJvbFtdO1xuXHRzdGF0aWNGaWVsZFN5bWJvbHM6IE1hcDxzdHJpbmcsIEZpZWxkU3ltYm9sPjtcblx0aW5zdGFuY2VNZXRob2RTeW1ib2xzOiBNYXA8c3RyaW5nLCBNZXRob2RTeW1ib2w+O1xufVxuXG5leHBvcnQgY2xhc3MgQ2xhc3NTeW1ib2wgaW1wbGVtZW50cyBPYmplY3RTeW1ib2wge1xuXHRyZWFkb25seSBub2RlOiBBU1RDbGFzc05vZGU7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblx0cmVhZG9ubHkgc3VwZXJDbGFzczogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cblx0c3VwZXJDbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wgfCBudWxsID0gbnVsbDtcblx0dHlwZVBhcmFtZXRlclN5bWJvbHM6IFR5cGVQYXJhbWV0ZXJTeW1ib2xbXSA9IFtdO1xuXHRpbnN0YW5jZUZpZWxkU3ltYm9sczogTWFwPHN0cmluZywgRmllbGRTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRzdGF0aWNGaWVsZFN5bWJvbHM6IE1hcDxzdHJpbmcsIEZpZWxkU3ltYm9sPiA9IG5ldyBNYXAoKTtcblx0aW5zdGFuY2VNZXRob2RTeW1ib2xzOiBNYXA8c3RyaW5nLCBNZXRob2RTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRzdGF0aWNNZXRob2RTeW1ib2xzOiBNYXA8c3RyaW5nLCBNZXRob2RTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRjb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sIHwgbnVsbCA9IG51bGw7XG5cdGltcGxlbWVudHNJbnRlcmZhY2VzOiBJbnRlcmZhY2VSZWZUeXBlW10gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihub2RlOiBBU1RDbGFzc05vZGUpIHtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHRcdHRoaXMubmFtZSA9IG5vZGUubmFtZTtcblx0XHR0aGlzLnN1cGVyQ2xhc3MgPSBub2RlLnN1cGVyQ2xhc3M/Lm5hbWUgPz8gbnVsbDtcblx0fVxuXG5cdHJlc29sdmVJbnN0YW5jZUZpZWxkU3ltYm9sKG5hbWU6IHN0cmluZyk6IEZpZWxkU3ltYm9sIHwgbnVsbCB7XG5cdFx0aWYgKHRoaXMuaW5zdGFuY2VGaWVsZFN5bWJvbHMuaGFzKG5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZUZpZWxkU3ltYm9scy5nZXQobmFtZSkgfHwgbnVsbDtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zdXBlckNsYXNzKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdXBlckNsYXNzU3ltYm9sPy5yZXNvbHZlSW5zdGFuY2VGaWVsZFN5bWJvbChuYW1lKSB8fCBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmVzb2x2ZVN0YXRpY0ZpZWxkU3ltYm9sKG5hbWU6IHN0cmluZyk6IEZpZWxkU3ltYm9sIHwgbnVsbCB7XG5cdFx0aWYgKHRoaXMuc3RhdGljRmllbGRTeW1ib2xzLmhhcyhuYW1lKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGljRmllbGRTeW1ib2xzLmdldChuYW1lKSB8fCBudWxsO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnN1cGVyQ2xhc3MpIHtcblx0XHRcdHJldHVybiB0aGlzLnN1cGVyQ2xhc3NTeW1ib2w/LnJlc29sdmVTdGF0aWNGaWVsZFN5bWJvbChuYW1lKSB8fCBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2VTeW1ib2wgaW1wbGVtZW50cyBPYmplY3RTeW1ib2wge1xuXHRyZWFkb25seSBub2RlOiBBU1RJbnRlcmZhY2VOb2RlO1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cblx0dHlwZVBhcmFtZXRlclN5bWJvbHM6IFR5cGVQYXJhbWV0ZXJTeW1ib2xbXSA9IFtdO1xuXHRzdGF0aWNGaWVsZFN5bWJvbHM6IE1hcDxzdHJpbmcsIEZpZWxkU3ltYm9sPiA9IG5ldyBNYXAoKTtcblx0aW5zdGFuY2VNZXRob2RTeW1ib2xzOiBNYXA8c3RyaW5nLCBNZXRob2RTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRleHRlbmRzSW50ZXJmYWNlczogSW50ZXJmYWNlU3ltYm9sW10gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihub2RlOiBBU1RJbnRlcmZhY2VOb2RlKSB7XG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0XHR0aGlzLm5hbWUgPSBub2RlLm5hbWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIENsYXNzUmVmVHlwZSBleHRlbmRzIFR5cGUge1xuXHRyZWFkb25seSBjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2w7XG5cdHJlYWRvbmx5IHR5cGVBcmd1bWVudHM6IFR5cGVbXTtcblxuXHRjb25zdHJ1Y3RvcihjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wsIHR5cGVBcmd1bWVudHM6IFR5cGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQ2xhc3NSZWZUeXBlLmZvcm1hdFN5bWJvbE5hbWUoY2xhc3NTeW1ib2wubmFtZSwgdHlwZUFyZ3VtZW50cykpO1xuXHRcdHRoaXMuY2xhc3NTeW1ib2wgPSBjbGFzc1N5bWJvbDtcblx0XHR0aGlzLnR5cGVBcmd1bWVudHMgPSB0eXBlQXJndW1lbnRzO1xuXHR9XG5cblx0c3RhdGljIGZvcm1hdFN5bWJvbE5hbWUobmFtZTogc3RyaW5nLCB0eXBlQXJndW1lbnRzOiBUeXBlW10pIHtcblx0XHRpZiAodHlwZUFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBgY2xhc3NSZWZUeXBlKCR7bmFtZX0pYDtcblx0XHR9XG5cblx0XHRyZXR1cm4gYGNsYXNzUmVmVHlwZSgke25hbWV9PCR7dHlwZUFyZ3VtZW50cy5tYXAodHlwZSA9PiB0eXBlLnRvU3RyaW5nKCkpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbignLCAnKX0+KWA7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gKG90aGVyIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlXG5cdFx0XHQmJiBvdGhlci5jbGFzc1N5bWJvbCA9PT0gdGhpcy5jbGFzc1N5bWJvbCk7XG5cdH1cblxuXHRvdmVycmlkZSBhY2NlcHRzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0aWYgKCF0aGlzLmVxdWFscyhvdGhlcikpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAob3RoZXIgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUpIHtcblx0XHRcdGlmICh0aGlzLnR5cGVBcmd1bWVudHMubGVuZ3RoICE9PSBvdGhlci50eXBlQXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50eXBlQXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IG90aGVyVHlwZSA9IG90aGVyLnR5cGVBcmd1bWVudHNbaV07XG5cblx0XHRcdFx0aWYgKCFvdGhlclR5cGUgfHwgIXRoaXMudHlwZUFyZ3VtZW50c1tpXT8uYWNjZXB0cyhvdGhlclR5cGUpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgSW50ZXJmYWNlUmVmVHlwZSBleHRlbmRzIFR5cGUge1xuXHRyZWFkb25seSBpbnRlcmZhY2VTeW1ib2w6IEludGVyZmFjZVN5bWJvbDtcblx0cmVhZG9ubHkgdHlwZUFyZ3VtZW50czogVHlwZVtdO1xuXG5cdGNvbnN0cnVjdG9yKGludGVyZmFjZVN5bWJvbDogSW50ZXJmYWNlU3ltYm9sLCB0eXBlQXJndW1lbnRzOiBUeXBlW10gPSBbXSkge1xuXHRcdHN1cGVyKEludGVyZmFjZVJlZlR5cGUuZm9ybWF0U3ltYm9sTmFtZShpbnRlcmZhY2VTeW1ib2wubmFtZSwgdHlwZUFyZ3VtZW50cykpO1xuXHRcdHRoaXMuaW50ZXJmYWNlU3ltYm9sID0gaW50ZXJmYWNlU3ltYm9sO1xuXHRcdHRoaXMudHlwZUFyZ3VtZW50cyA9IHR5cGVBcmd1bWVudHM7XG5cdH1cblxuXHRzdGF0aWMgZm9ybWF0U3ltYm9sTmFtZShuYW1lOiBzdHJpbmcsIHR5cGVBcmd1bWVudHM6IFR5cGVbXSk6IHN0cmluZyB7XG5cdFx0aWYgKHR5cGVBcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gYGludGVyZmFjZVJlZlR5cGUoJHtuYW1lfSlgO1xuXHRcdH1cblxuXHRcdHJldHVybiBgaW50ZXJmYWNlUmVmVHlwZSgke25hbWV9PCR7dHlwZUFyZ3VtZW50cy5tYXAodHlwZSA9PiB0eXBlLnRvU3RyaW5nKCkpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oJywgJyl9PilgO1xuXHR9XG5cblx0b3ZlcnJpZGUgZXF1YWxzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIChvdGhlciBpbnN0YW5jZW9mIEludGVyZmFjZVJlZlR5cGVcblx0XHRcdCYmIG90aGVyLmludGVyZmFjZVN5bWJvbCA9PT0gdGhpcy5pbnRlcmZhY2VTeW1ib2wpO1xuXHR9XG5cblx0b3ZlcnJpZGUgYWNjZXB0cyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdGlmICghdGhpcy5lcXVhbHMob3RoZXIpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKG90aGVyIGluc3RhbmNlb2YgSW50ZXJmYWNlUmVmVHlwZSkge1xuXHRcdFx0aWYgKHRoaXMudHlwZUFyZ3VtZW50cy5sZW5ndGggIT09IG90aGVyLnR5cGVBcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnR5cGVBcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3Qgb3RoZXJUeXBlID0gb3RoZXIudHlwZUFyZ3VtZW50c1tpXTtcblxuXHRcdFx0XHRpZiAoIW90aGVyVHlwZSB8fCAhdGhpcy50eXBlQXJndW1lbnRzW2ldPy5hY2NlcHRzKG90aGVyVHlwZSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMYW1iZGFUeXBlIGV4dGVuZHMgVHlwZSB7XG5cdHJlYWRvbmx5IHBhcmFtZXRlclN5bWJvbHM6IFBhcmFtZXRlclN5bWJvbFtdID0gW107XG5cdHJlYWRvbmx5IHJldHVyblR5cGU6IFR5cGU7XG5cblx0Y29uc3RydWN0b3IocGFyYW1ldGVyczogUGFyYW1ldGVyU3ltYm9sW10sIHJldHVyblR5cGU6IFR5cGUpIHtcblx0XHRzdXBlcihMYW1iZGFUeXBlLmNyZWF0ZVNpZ25hdHVyZShwYXJhbWV0ZXJzLCByZXR1cm5UeXBlKSk7XG5cdFx0dGhpcy5wYXJhbWV0ZXJTeW1ib2xzID0gcGFyYW1ldGVycztcblx0XHR0aGlzLnJldHVyblR5cGUgPSByZXR1cm5UeXBlO1xuXHR9XG5cblx0c3RhdGljIGNyZWF0ZVNpZ25hdHVyZShwYXJhbWV0ZXJzOiBQYXJhbWV0ZXJTeW1ib2xbXSwgcmV0dXJuVHlwZTogVHlwZSk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGBsYW1iZGEoJHtwYXJhbWV0ZXJzLm1hcChwYXJhbWV0ZXIgPT4gcGFyYW1ldGVyLnBhcmFtZXRlclR5cGUudG9TdHJpbmcoKSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbignLCAnKX0pIC0+ICR7cmV0dXJuVHlwZS50b1N0cmluZygpfSlgO1xuXHR9XG5cblx0b3ZlcnJpZGUgZXF1YWxzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0aWYgKCEob3RoZXIgaW5zdGFuY2VvZiBMYW1iZGFUeXBlKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnBhcmFtZXRlclN5bWJvbHMubGVuZ3RoICE9PSBvdGhlci5wYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBvdGhlclR5cGUgPSBvdGhlci5wYXJhbWV0ZXJTeW1ib2xzW2ldPy5wYXJhbWV0ZXJUeXBlO1xuXG5cdFx0XHRpZiAoIW90aGVyVHlwZSB8fCAhdGhpcy5wYXJhbWV0ZXJTeW1ib2xzW2ldPy5wYXJhbWV0ZXJUeXBlLmFjY2VwdHMob3RoZXJUeXBlKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucmV0dXJuVHlwZS5hY2NlcHRzKG90aGVyLnJldHVyblR5cGUpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlU2NvcGUge1xuXHRyZWFkb25seSBwYXJlbnQ6IFR5cGVTY29wZSB8IG51bGw7XG5cdHJlYWRvbmx5IHR5cGVzOiBNYXA8c3RyaW5nLCBUeXBlPiA9IG5ldyBNYXAoKTtcblx0cmVhZG9ubHkgdHlwZUJpbmRpbmdzOiBNYXA8c3RyaW5nLCBUeXBlPiA9IG5ldyBNYXAoKTtcblxuXHRjdXJyZW50T2JqZWN0U3ltYm9sOiBDbGFzc1N5bWJvbCB8IEludGVyZmFjZVN5bWJvbCB8IG51bGw7XG5cblx0Y29uc3RydWN0b3IocGFyZW50OiBUeXBlU2NvcGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xuXHRcdHRoaXMuY3VycmVudE9iamVjdFN5bWJvbCA9IHBhcmVudD8uY3VycmVudE9iamVjdFN5bWJvbCA/PyBudWxsO1xuXHR9XG5cblx0ZGVmaW5lVHlwZShuYW1lOiBzdHJpbmcsIHR5cGU6IFR5cGUpOiB2b2lkIHtcblx0XHR0aGlzLnR5cGVzLnNldChuYW1lLCB0eXBlKTtcblx0fVxuXG5cdGRlZmluZVR5cGVCaW5kaW5nKG5hbWU6IHN0cmluZywgdHlwZVZhcmlhYmxlOiBUeXBlVmFyaWFibGUpOiB2b2lkIHtcblx0XHR0aGlzLnR5cGVCaW5kaW5ncy5zZXQobmFtZSwgdHlwZVZhcmlhYmxlKTtcblx0fVxuXG5cdGhhc1R5cGUobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudHlwZXMuaGFzKG5hbWUpIHx8IHRoaXMucGFyZW50Py5oYXNUeXBlKG5hbWUpIHx8IGZhbHNlO1xuXHR9XG5cblx0aGFzVHlwZUJpbmRpbmcobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudHlwZUJpbmRpbmdzLmhhcyhuYW1lKSB8fCB0aGlzLnBhcmVudD8uaGFzVHlwZUJpbmRpbmcobmFtZSkgfHwgZmFsc2U7XG5cdH1cblxuXHRnZXRUeXBlKG5hbWU6IHN0cmluZyk6IFR5cGUge1xuXHRcdGlmICh0aGlzLnR5cGVzLmhhcyhuYW1lKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMudHlwZXMuZ2V0KG5hbWUpIHx8IFR5cGVzLk5VTEw7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnBhcmVudD8uZ2V0VHlwZShuYW1lKSB8fCBUeXBlcy5OVUxMO1xuXHR9XG5cblx0Z2V0VHlwZUJpbmRpbmcobmFtZTogc3RyaW5nKTogVHlwZSB7XG5cdFx0aWYgKHRoaXMudHlwZUJpbmRpbmdzLmhhcyhuYW1lKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMudHlwZUJpbmRpbmdzLmdldChuYW1lKSB8fCBUeXBlcy5OVUxMO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5wYXJlbnQ/LmdldFR5cGVCaW5kaW5nKG5hbWUpIHx8IFR5cGVzLk5VTEw7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBUeXBlKHR5cGVOb2RlOiBBU1RUeXBlTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBzY29wZTogVHlwZVNjb3BlIHwgbnVsbCA9IG51bGwpOiBUeXBlIHtcblx0bGV0IGJhc2VUeXBlID0gcmVzb2x2ZUJhc2VUeXBlKHR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeSwgc2NvcGUpO1xuXHRpZiAoYmFzZVR5cGUpIHtcblx0XHRpZiAoIShiYXNlVHlwZSBpbnN0YW5jZW9mIE51bGxhYmxlVHlwZSkgJiYgdHlwZU5vZGUubnVsbGFibGUpIHtcblx0XHRcdHJldHVybiBuZXcgTnVsbGFibGVUeXBlKGJhc2VUeXBlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYmFzZVR5cGU7XG5cdH1cblxuXHR0aHJvd1R5cGVFcnJvcihgQ291bGQgbm90IHJlc29sdmUgdHlwZSAke3R5cGVOb2RlLm5hbWV9LmAsIHR5cGVOb2RlLnNwYW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUJhc2VUeXBlKHR5cGVOb2RlOiBBU1RUeXBlTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBzY29wZTogVHlwZVNjb3BlIHwgbnVsbCA9IG51bGwpOiBUeXBlIHtcblx0c3dpdGNoICh0eXBlTm9kZS5raW5kKSB7XG5cdFx0Y2FzZSBBU1RUeXBlTm9kZS5LSU5EX1NJTVBMRToge1xuXHRcdFx0aWYgKHNjb3BlICYmIHNjb3BlLmhhc1R5cGVCaW5kaW5nKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiBzY29wZS5nZXRUeXBlQmluZGluZyh0eXBlTm9kZS5uYW1lKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmhhc1N5bWJvbCh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzb2x2ZVJlZlR5cGUodHlwZU5vZGUsIG9iamVjdFJlZ2lzdHJ5KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKFByaW1pdGl2ZVR5cGVzLmhhc1R5cGUodHlwZU5vZGUubmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIHJlc29sdmVQcmltaXRpdmVUeXBlKHR5cGVOb2RlKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG5ldyBUeXBlVmFyaWFibGUodHlwZU5vZGUubmFtZSk7XG5cdFx0fVxuXHRcdGNhc2UgQVNUVHlwZU5vZGUuS0lORF9HRU5FUklDOiB7XG5cdFx0XHRpZiAoIW9iamVjdFJlZ2lzdHJ5LnR5cGVzLmhhc1N5bWJvbCh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdFx0XHR0aHJvd1R5cGVFcnJvcihgU3ltYm9sICR7dHlwZU5vZGUubmFtZX0gaXMgbm90IGEgY2xhc3MgcmVmZXJlbmNlLmAsIHR5cGVOb2RlLnNwYW4pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc29sdmVHZW5lcmljUmVmVHlwZSh0eXBlTm9kZSwgb2JqZWN0UmVnaXN0cnkpO1xuXHRcdH1cblx0XHRjYXNlIEFTVFR5cGVOb2RlLktJTkRfTEFNQkRBOiB7XG5cdFx0XHRyZXR1cm4gcmVzb2x2ZUxhbWJkYVR5cGUodHlwZU5vZGUsIG9iamVjdFJlZ2lzdHJ5KTtcblx0XHR9XG5cdFx0ZGVmYXVsdDoge1xuXHRcdFx0dGhyb3dUeXBlRXJyb3IoXG5cdFx0XHRcdGBJbnZhbGlkIHR5cGUgYW5ub3RhdGlvbiwga2luZCAke3R5cGVOb2RlLmtpbmR9LmAsXG5cdFx0XHRcdHR5cGVOb2RlLnNwYW5cblx0XHRcdCk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlUmVmVHlwZSh0eXBlTm9kZTogQVNUVHlwZU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IENsYXNzUmVmVHlwZSB8IEludGVyZmFjZVJlZlR5cGUgfCBUeXBlIHtcblx0aWYgKHR5cGVOb2RlLnR5cGVBcmd1bWVudHMubGVuZ3RoID4gMCkge1xuXHRcdHRocm93VHlwZUVycm9yKGBHZW5lcmljIGNsYXNzICR7dHlwZU5vZGUubmFtZX0gY2Fubm90IGhhdmUgdHlwZSBhcmd1bWVudHMuYCwgdHlwZU5vZGUuc3Bhbik7XG5cdH1cblxuXHRpZiAob2JqZWN0UmVnaXN0cnkudHlwZXMuY2xhc3NTeW1ib2xzLmhhcyh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdHJldHVybiBuZXcgQ2xhc3NSZWZUeXBlKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKHR5cGVOb2RlLm5hbWUpKTtcblx0fVxuXG5cdGlmIChvYmplY3RSZWdpc3RyeS50eXBlcy5pbnRlcmZhY2VTeW1ib2xzLmhhcyh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdHJldHVybiBuZXcgSW50ZXJmYWNlUmVmVHlwZShvYmplY3RSZWdpc3RyeS50eXBlcy5nZXRJbnRlcmFjZVN5bWJvbCh0eXBlTm9kZS5uYW1lKSk7XG5cdH1cblxuXHR0aHJvd1R5cGVFcnJvcihgVW5rbm93biBjbGFzcyBvciBpbnRlcmZhY2UgJHt0eXBlTm9kZS5uYW1lfS5gLCB0eXBlTm9kZS5zcGFuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVHZW5lcmljUmVmVHlwZSh0eXBlTm9kZTogQVNUVHlwZU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IENsYXNzUmVmVHlwZSB8IEludGVyZmFjZVJlZlR5cGUgfCBUeXBlIHtcblx0aWYgKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmNsYXNzU3ltYm9scy5oYXModHlwZU5vZGUubmFtZSkpIHtcblx0XHRyZXR1cm4gbmV3IENsYXNzUmVmVHlwZShcblx0XHRcdG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKHR5cGVOb2RlLm5hbWUpLFxuXHRcdFx0dHlwZU5vZGUudHlwZUFyZ3VtZW50cy5tYXAodHlwZUFyZ3VtZW50ID0+IHJlc29sdmVCYXNlVHlwZSh0eXBlQXJndW1lbnQsIG9iamVjdFJlZ2lzdHJ5KSlcblx0XHQpO1xuXHR9XG5cblx0aWYgKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmludGVyZmFjZVN5bWJvbHMuaGFzKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0cmV0dXJuIG5ldyBJbnRlcmZhY2VSZWZUeXBlKFxuXHRcdFx0b2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0SW50ZXJhY2VTeW1ib2wodHlwZU5vZGUubmFtZSksXG5cdFx0XHR0eXBlTm9kZS50eXBlQXJndW1lbnRzLm1hcCh0eXBlQXJndW1lbnQgPT4gcmVzb2x2ZUJhc2VUeXBlKHR5cGVBcmd1bWVudCwgb2JqZWN0UmVnaXN0cnkpKVxuXHRcdCk7XG5cdH1cblxuXHR0aHJvd1R5cGVFcnJvcihgVW5rbm93biBjbGFzcyBvciBpbnRlcmZhY2UgJHt0eXBlTm9kZS5uYW1lfS5gLCB0eXBlTm9kZS5zcGFuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVQcmltaXRpdmVUeXBlKHR5cGVOb2RlOiBBU1RUeXBlTm9kZSk6IFR5cGUge1xuXHRyZXR1cm4gVHlwZXMuZ2V0VHlwZSh0eXBlTm9kZS5uYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVMYW1iZGFUeXBlKHR5cGVOb2RlOiBBU1RUeXBlTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBzY29wZTogVHlwZVNjb3BlIHwgbnVsbCA9IG51bGwpOiBMYW1iZGFUeXBlIHtcblx0Y29uc3QgcGFyYW1ldGVyU3ltYm9scyA9IHR5cGVOb2RlLnBhcmFtZXRlclR5cGVzLm1hcChcblx0XHR0eXBlQW5ub3RhdGlvbiA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IFBhcmFtZXRlclN5bWJvbChcblx0XHRcdFx0dHlwZUFubm90YXRpb24ubmFtZSxcblx0XHRcdFx0d3JhcFR5cGUodHlwZUFubm90YXRpb24sIG9iamVjdFJlZ2lzdHJ5LCBzY29wZSlcblx0XHRcdCk7XG5cdFx0fVxuXHQpO1xuXG5cdHJldHVybiBuZXcgTGFtYmRhVHlwZShcblx0XHRwYXJhbWV0ZXJTeW1ib2xzLFxuXHRcdHR5cGVOb2RlLnJldHVyblR5cGVcblx0XHRcdD8gd3JhcFR5cGUodHlwZU5vZGUucmV0dXJuVHlwZSwgb2JqZWN0UmVnaXN0cnksIHNjb3BlKVxuXHRcdFx0OiBUeXBlcy5NSVhFRFxuXHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RpdHV0ZVR5cGUodHlwZTogVHlwZSwgc3Vic3RpdHV0aW9uTWFwOiBNYXA8c3RyaW5nLCBUeXBlPik6IFR5cGUge1xuXHRpZiAodHlwZSBpbnN0YW5jZW9mIFR5cGVWYXJpYWJsZSkge1xuXHRcdHJldHVybiBzdWJzdGl0dXRpb25NYXAuZ2V0KHR5cGUubmFtZSkgPz8gdHlwZTtcblx0fVxuXG5cdGlmICh0eXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0cmV0dXJuIG5ldyBDbGFzc1JlZlR5cGUoXG5cdFx0XHR0eXBlLmNsYXNzU3ltYm9sLFxuXHRcdFx0dHlwZS50eXBlQXJndW1lbnRzLm1hcCh0eXBlQXJndW1lbnQgPT4gc3Vic3RpdHV0ZVR5cGUodHlwZUFyZ3VtZW50LCBzdWJzdGl0dXRpb25NYXApKVxuXHRcdCk7XG5cdH1cblxuXHRpZiAodHlwZSBpbnN0YW5jZW9mIE51bGxhYmxlVHlwZSkge1xuXHRcdHJldHVybiBuZXcgTnVsbGFibGVUeXBlKHN1YnN0aXR1dGVUeXBlKHR5cGUuaW5uZXIsIHN1YnN0aXR1dGlvbk1hcCkpO1xuXHR9XG5cblx0cmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFR5cGVTdWJzdGl0dXRpb25NYXAodHlwZVBhcmFtZXRlcnM6IFR5cGVQYXJhbWV0ZXJTeW1ib2xbXSwgdHlwZUFyZ3VtZW50czogVHlwZVtdKTogTWFwPHN0cmluZywgVHlwZT4ge1xuXHRjb25zdCBzdWJzdGl0dXRpb25NYXAgPSBuZXcgTWFwKCk7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0eXBlUGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHR5cGVQYXJhbWV0ZXI6IFR5cGVQYXJhbWV0ZXJTeW1ib2wgfCBudWxsID0gdHlwZVBhcmFtZXRlcnNbaV0gfHwgbnVsbDtcblx0XHRjb25zdCB0eXBlQXJndW1lbnQ6IFR5cGUgfCBudWxsID0gdHlwZUFyZ3VtZW50c1tpXSB8fCBudWxsO1xuXG5cdFx0aWYgKHR5cGVQYXJhbWV0ZXIgJiYgdHlwZUFyZ3VtZW50KSB7XG5cdFx0XHRzdWJzdGl0dXRpb25NYXAuc2V0KHR5cGVQYXJhbWV0ZXIubmFtZSwgdHlwZUFyZ3VtZW50KTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3Vic3RpdHV0aW9uTWFwO1xufVxuIiwKICAgICJpbXBvcnQge0NsYXNzUmVmVHlwZSwgVHlwZSwgVHlwZXN9IGZyb20gXCIuL3R5cGVfb2JqZWN0c1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge3Rocm93UnVudGltZUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5cbmV4cG9ydCBjbGFzcyBBdXRvYm94ZWRUeXBlcyB7XG5cdHN0YXRpYyBOVU1CRVI6IHN0cmluZyA9ICdOdW1iZXInO1xuXHRzdGF0aWMgU1RSSU5HOiBzdHJpbmcgPSAnU3RyaW5nJztcblx0c3RhdGljIEJPT0xFQU46IHN0cmluZyA9ICdCb29sZWFuJztcblxuXHRzdGF0aWMgQ0xBU1NOQU1FX01BUDogeyBbczogc3RyaW5nXTogc3RyaW5nOyB9ID0ge1xuXHRcdG51bWJlcjogQXV0b2JveGVkVHlwZXMuTlVNQkVSLFxuXHRcdHN0cmluZzogQXV0b2JveGVkVHlwZXMuU1RSSU5HLFxuXHRcdGJvb2xlYW46IEF1dG9ib3hlZFR5cGVzLkJPT0xFQU5cblx0fTtcblxuXHRzdGF0aWMgZ2V0Q2xhc3NOYW1lKGtleTogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRjb25zdCBjbGFzc05hbWUgPSBBdXRvYm94ZWRUeXBlcy5DTEFTU05BTUVfTUFQW2tleV07XG5cdFx0aWYgKCFjbGFzc05hbWUpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBObyBjbGFzcyBmb3VuZCBmb3IgcHJpbWl0aXZlIHR5cGUgJHtrZXl9LmApO1xuXHRcdH1cblx0XHRyZXR1cm4gY2xhc3NOYW1lO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvYm94aW5nIHtcblx0c3RhdGljIENMQVNTTkFNRV9NQVA6IE1hcDxUeXBlLCBzdHJpbmc+ID0gbmV3IE1hcChcblx0XHRbXG5cdFx0XHRbVHlwZXMuTlVNQkVSLCBBdXRvYm94ZWRUeXBlcy5OVU1CRVJdLFxuXHRcdFx0W1R5cGVzLlNUUklORywgQXV0b2JveGVkVHlwZXMuU1RSSU5HXSxcblx0XHRcdFtUeXBlcy5CT09MRUFOLCBBdXRvYm94ZWRUeXBlcy5CT09MRUFOXVxuXHRcdF1cblx0KTtcblxuXHRzdGF0aWMgYXV0b2JveElmTmVlZGVkKG9iamVjdFR5cGU6IFR5cGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IENsYXNzUmVmVHlwZSB8IFR5cGUge1xuXHRcdGNvbnN0IGNsYXNzTmFtZSA9IEF1dG9ib3hpbmcuQ0xBU1NOQU1FX01BUC5nZXQob2JqZWN0VHlwZSk7XG5cdFx0aWYgKGNsYXNzTmFtZSkge1xuXHRcdFx0cmV0dXJuIG5ldyBDbGFzc1JlZlR5cGUob2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2woY2xhc3NOYW1lKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG9iamVjdFR5cGU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtDbGFzc0RlZmluaXRpb24sIENsYXNzTWV0aG9kRGVmaW5pdGlvbiwgRW52aXJvbm1lbnQsIEluc3RhbmNlLCBSZXR1cm5WYWx1ZX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB7XG5cdEFTVEFubm90YXRpb25Ob2RlLFxuXHRBU1RBcnJheU5vZGUsXG5cdEFTVEFzc2lnbm1lbnROb2RlLFxuXHRBU1RCaW5hcnlOb2RlLFxuXHRBU1RDYWxsTm9kZSxcblx0QVNUQ2xhc3NOb2RlLFxuXHRBU1RFeHByZXNzaW9uTm9kZSxcblx0QVNURm9yZWFjaE5vZGUsXG5cdEFTVElmTm9kZSxcblx0QVNUSW5kZXhOb2RlLFxuXHRBU1RMYW1iZGFOb2RlLFxuXHRBU1RNYXRjaENhc2VOb2RlLFxuXHRBU1RNYXRjaE5vZGUsXG5cdEFTVE1lbWJlck5vZGUsXG5cdEFTVE1ldGhvZE5vZGUsXG5cdEFTVE5ld05vZGUsXG5cdEFTVE5vZGUsXG5cdEFTVE5vZGVUeXBlLFxuXHRBU1RQYXJhbWV0ZXJOb2RlLFxuXHRBU1RSZXR1cm5Ob2RlLFxuXHRBU1RUeXBlTm9kZSxcblx0QVNUVW5hcnlOb2RlLFxuXHRBU1RWYXJpYWJsZU5vZGUsXG5cdEFTVFZEb21Ob2RlLFxuXHRBU1RWRG9tVGV4dE5vZGVcbn0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHtHUkFNTUFSLCBUWVBFX0VOVU19IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5pbXBvcnQge05hdGl2ZUNsYXNzZXN9IGZyb20gXCIuLi8uLi9saWJyYXJ5L25hdGl2ZV9jbGFzc2VzXCI7XG5pbXBvcnQge05hdGl2ZUZ1bmN0aW9uLCBOYXRpdmVGdW5jdGlvbnN9IGZyb20gXCIuLi8uLi9saWJyYXJ5L25hdGl2ZV9mdW5jdGlvbnNcIjtcbmltcG9ydCB7Y2FzdFZhbHVlLCBmcm9tTHlyYVZhbHVlLCBMeXJhTmF0aXZlT2JqZWN0LCByZXR1cm5WYWx1ZSwgd3JhcE5hdGl2ZUluc3RhbmNlfSBmcm9tIFwiLi9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge3Rocm93UnVudGltZUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQge0F1dG9ib3hlZFR5cGVzfSBmcm9tIFwiLi4vdHlwZXMvYXV0b2JveGluZ1wiO1xuaW1wb3J0IHtMeXJhQXJyYXl9IGZyb20gXCIuLi8uLi9saWJyYXJ5L2NsYXNzZXMvYXJyYXlcIjtcbmltcG9ydCB0eXBlIHtTb3VyY2VTcGFufSBmcm9tIFwiLi4vcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcbmltcG9ydCB0eXBlIHtWTm9kZX0gZnJvbSBcIi4uL3Zkb20vdmRvbVwiO1xuXG5jb25zdCBuYXRpdmVDbGFzc2VzID0gbmV3IE5hdGl2ZUNsYXNzZXMoKTtcbmNvbnN0IG5hdGl2ZUZ1bmN0aW9ucyA9IG5ldyBOYXRpdmVGdW5jdGlvbnMoKTtcbmNvbnN0IGdsb2JhbEZ1bmN0aW9ucyA9IG5hdGl2ZUZ1bmN0aW9ucy5nZXRHbG9iYWxGdW5jdGlvbnMoKTtcbmNvbnN0IGdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5ID0gbmF0aXZlRnVuY3Rpb25zLmdldEdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5KCk7XG5cbmV4cG9ydCBjbGFzcyBBYnN0cmFjdEZ1bmN0aW9uQ2FsbCB7XG5cdG5vZGU6IEFTVE5vZGU7XG5cdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeTtcblx0ZnVuY3Rpb25FbnY6IEVudmlyb25tZW50O1xuXG5cdGNvbnN0cnVjdG9yKG5vZGU6IEFTVE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZnVuY3Rpb25FbnY6IEVudmlyb25tZW50KSB7XG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5ID0gb2JqZWN0UmVnaXN0cnk7XG5cdFx0dGhpcy5mdW5jdGlvbkVudiA9IGZ1bmN0aW9uRW52O1xuXHR9XG5cblx0Z2V0QVNUQ2FsbE5vZGUoKTogQVNUQ2FsbE5vZGUge1xuXHRcdGlmICghKHRoaXMubm9kZSBpbnN0YW5jZW9mIEFTVENhbGxOb2RlKSkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgbmF0aXZlIGZ1bmN0aW9uIGNhbGwgJHt0aGlzLm5vZGUudHlwZX0uYCwgdGhpcy5ub2RlLnNwYW4pO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5ub2RlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge0FTVExhbWJkYU5vZGV9XG5cdCAqL1xuXHRnZXRBU1RMYW1iZGFOb2RlKCk6IEFTVExhbWJkYU5vZGUge1xuXHRcdGlmICghKHRoaXMubm9kZSBpbnN0YW5jZW9mIEFTVExhbWJkYU5vZGUpKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBsYW1iZGEgY2FsbCAke3RoaXMubm9kZS50eXBlfS5gLCB0aGlzLm5vZGUuc3Bhbik7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLm5vZGU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIExhbWJkYUZ1bmN0aW9uQ2FsbCBleHRlbmRzIEFic3RyYWN0RnVuY3Rpb25DYWxsIHtcblx0ZXZhbENhbGwodGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwsIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcblx0XHRjb25zdCBub2RlOiBBU1RMYW1iZGFOb2RlID0gdGhpcy5nZXRBU1RMYW1iZGFOb2RlKCk7XG5cdFx0Y29uc3QgY2xvc3VyZUVudiA9IG5ldyBFbnZpcm9ubWVudCh0aGlzLmZ1bmN0aW9uRW52KTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5wYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBwYXJhbWV0ZXI6IEFTVFBhcmFtZXRlck5vZGUgfCBudWxsID0gbm9kZS5wYXJhbWV0ZXJzW2ldIHx8IG51bGw7XG5cdFx0XHRpZiAoIXBhcmFtZXRlcikge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGNsb3N1cmVFbnYuZGVmaW5lKHBhcmFtZXRlci5uYW1lLCBhcmdzW2ldKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZhbEJsb2NrKG5vZGUuY2hpbGRyZW4sIHRoaXMub2JqZWN0UmVnaXN0cnksIGNsb3N1cmVFbnYsIHRoaXNWYWx1ZSwgbm9kZS5yZXR1cm5UeXBlKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTmF0aXZlRnVuY3Rpb25DYWxsIGV4dGVuZHMgQWJzdHJhY3RGdW5jdGlvbkNhbGwge1xuXHRldmFsQ2FsbCh0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCwgLi4uYXJnczogYW55W10pOiBhbnkge1xuXHRcdGNvbnN0IGNhbGxOb2RlOiBBU1RDYWxsTm9kZSA9IHRoaXMuZ2V0QVNUQ2FsbE5vZGUoKTtcblxuXHRcdGxldCByZXN1bHQ6IGFueSA9IHRoaXMucmVzb2x2ZUNhbGwodGhpc1ZhbHVlKVtjYWxsTm9kZS5jYWxsZWUubmFtZV0oLi4uYXJncyk7XG5cdFx0aWYgKHJlc3VsdCBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdHJlc3VsdCA9IHdyYXBOYXRpdmVJbnN0YW5jZShyZXN1bHQsIHRoaXMub2JqZWN0UmVnaXN0cnkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHQgPSByZXR1cm5WYWx1ZShyZXN1bHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmFsQmxvY2soXG5cdFx0XHRbcmVzdWx0XSxcblx0XHRcdHRoaXMub2JqZWN0UmVnaXN0cnksXG5cdFx0XHR0aGlzLmZ1bmN0aW9uRW52LFxuXHRcdFx0dGhpc1ZhbHVlLFxuXHRcdFx0dGhpcy5sb29rdXBGdW5jdGlvblR5cGUoY2FsbE5vZGUuY2FsbGVlLm5hbWUpLnJldHVyblR5cGVcblx0XHQpO1xuXHR9XG5cblx0bG9va3VwRnVuY3Rpb25UeXBlKG5hbWU6IHN0cmluZyk6IE5hdGl2ZUZ1bmN0aW9uIHtcblx0XHRyZXR1cm4gZ2xvYmFsRnVuY3Rpb25UeXBlUmVnaXN0cnkuZ2V0KG5hbWUpO1xuXHR9XG5cblx0cmVzb2x2ZUNhbGwodGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwpOiBhbnkge1xuXHRcdGNvbnN0IG5vZGU6IEFTVENhbGxOb2RlIHwgbnVsbCA9IHRoaXMuZ2V0QVNUQ2FsbE5vZGUoKTtcblx0XHRpZiAobm9kZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoXCJJbnZhbGlkIGZ1bmN0aW9uIGNhbGwuXCIpO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmFsRXhwcmVzc2lvbihub2RlLmNhbGxlZSwgdGhpcy5vYmplY3RSZWdpc3RyeSwgdGhpcy5mdW5jdGlvbkVudiwgdGhpc1ZhbHVlKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJOYXRpdmVDbGFzc2VzKG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogdm9pZCB7XG5cdGZvciAoY29uc3QgbmF0aXZlQ2xhc3Mgb2YgbmF0aXZlQ2xhc3Nlcy5yZWdpc3RyeS52YWx1ZXMoKSkge1xuXHRcdGlmIChuYXRpdmVDbGFzcy5pc0F1dG9sb2FkQWJsZSkge1xuXHRcdFx0Y29uc3QgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiA9IG5hdGl2ZUNsYXNzLmdldENsYXNzRGVmaW5pdGlvbigpO1xuXHRcdFx0b2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5zZXQobmF0aXZlQ2xhc3MubmFtZSwgY2xhc3NEZWYpO1xuXHRcdFx0ZW52aXJvbm1lbnQuZGVmaW5lKG5hdGl2ZUNsYXNzLm5hbWUsIGNsYXNzRGVmKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTmF0aXZlRnVuY3Rpb25zKGVudmlyb25tZW50OiBFbnZpcm9ubWVudCk6IHZvaWQge1xuXHRmb3IgKGNvbnN0IG5hbWUgaW4gZ2xvYmFsRnVuY3Rpb25zKSB7XG5cdFx0Y29uc3QgZ2xvYmFsRnVuY3Rpb246IGFueSA9IGdsb2JhbEZ1bmN0aW9uc1tuYW1lXTtcblx0XHRpZiAoIWdsb2JhbEZ1bmN0aW9uKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihcIkdsb2JhbCBmdW5jdGlvbiBpcyBudWxsLlwiKTtcblx0XHR9XG5cdFx0ZW52aXJvbm1lbnQuZGVmaW5lKG5hbWUsIGdsb2JhbEZ1bmN0aW9ucyk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxOb2RlKG5vZGU6IEFTVE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRpZiAobm9kZS5pc0V4cHJlc3Npb24pIHtcblx0XHRyZXR1cm4gbmV3IFJldHVyblZhbHVlKGV2YWxFeHByZXNzaW9uKG5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKSk7XG5cdH1cblxuXHRzd2l0Y2ggKG5vZGUudHlwZSkge1xuXHRcdGNhc2UgQVNUTm9kZVR5cGUuUFJPR1JBTU06IHtcblx0XHRcdGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuXHRcdFx0XHRldmFsTm9kZShjaGlsZCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuSU1QT1JUOlxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuSU5URVJGQUNFOiB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5DTEFTUzoge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RDbGFzc05vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxDbGFzcyhub2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgY2xhc3Mgbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5WQVJJQUJMRToge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RWYXJpYWJsZU5vZGUpIHtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBub2RlLmluaXRcblx0XHRcdFx0XHQ/IGV2YWxFeHByZXNzaW9uKG5vZGUuaW5pdCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpXG5cdFx0XHRcdFx0OiBudWxsO1xuXHRcdFx0XHRlbnZpcm9ubWVudC5kZWZpbmUobm9kZS5uYW1lLCB2YWx1ZSk7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgdmFyaWFibGUgbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5JRjoge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RJZk5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxJZihub2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBpZiBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLk1BVENIOiB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVE1hdGNoTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbE1hdGNoKG5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIG1hdGNoIG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuRk9SRUFDSDoge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RGb3JlYWNoTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbEZvcmVhY2gobm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgZm9yZWFjaCBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkVYUFJFU1NJT046IHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNURXhwcmVzc2lvbk5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxFeHByZXNzaW9uKG5vZGUuZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgZXhwcmVzc2lvbiBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLlJFVFVSTjoge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RSZXR1cm5Ob2RlKSB7XG5cdFx0XHRcdGNvbnN0IHZhbHVlID0gbm9kZS5hcmd1bWVudFxuXHRcdFx0XHRcdD8gZXZhbEV4cHJlc3Npb24obm9kZS5hcmd1bWVudCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpXG5cdFx0XHRcdFx0OiBudWxsO1xuXHRcdFx0XHRyZXR1cm4gbmV3IFJldHVyblZhbHVlKHZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIHJldHVybiBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlLnNwYW4pO1xuXHRcdH1cblx0XHRkZWZhdWx0OiB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5oYW5kbGVkIG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RFbXB0eUluc3RhbmNlKG5vZGU6IEFTVENsYXNzTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogSW5zdGFuY2Uge1xuXHRsZXQgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbjtcblxuXHRpZiAob2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5oYXMobm9kZS5uYW1lKSkge1xuXHRcdGNsYXNzRGVmID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQobm9kZS5uYW1lKTtcblx0fSBlbHNlIHtcblx0XHRjbGFzc0RlZiA9IENsYXNzRGVmaW5pdGlvbi5mcm9tQVNUKG5vZGUpO1xuXHRcdG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuc2V0KG5vZGUubmFtZSwgY2xhc3NEZWYpO1xuXHR9XG5cblx0cmV0dXJuIGNsYXNzRGVmLmNvbnN0cnVjdEVtcHR5SW5zdGFuY2UoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdE5hdGl2ZUluc3RhbmNlKGV4cHI6IEFTVE5ld05vZGUsIGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogSW5zdGFuY2Uge1xuXHRyZXR1cm4gY2xhc3NEZWYuY29uc3RydWN0TmF0aXZlSW5zdGFuY2VCeU5ld05vZGUoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEluc3RhbmNlKGV4cHI6IEFTVE5ld05vZGUsIGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogSW5zdGFuY2Uge1xuXHRyZXR1cm4gY2xhc3NEZWYuY29uc3RydWN0SW5zdGFuY2VCeU5ld05vZGUoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxDbGFzcyhub2RlOiBBU1RDbGFzc05vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogdm9pZCB7XG5cdGNvbnN0IGluc3RhbmNlOiBJbnN0YW5jZSA9IGNvbnN0cnVjdEVtcHR5SW5zdGFuY2Uobm9kZSwgb2JqZWN0UmVnaXN0cnkpO1xuXG5cdGluc3RhbmNlLmluaXRpYWxpemVJbnN0YW5jZUZpZWxkcyhvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpO1xuXG5cdGVudmlyb25tZW50LmRlZmluZShub2RlLm5hbWUsIGluc3RhbmNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxOZXcoZXhwcjogQVNUTmV3Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQpOiBJbnN0YW5jZSB7XG5cdGlmICghb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5oYXMoZXhwci5uYW1lKSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBVbmtub3duIGNsYXNzICR7ZXhwci5uYW1lfS5gLCBleHByLnNwYW4pO1xuXHR9XG5cblx0Y29uc3QgY2xhc3NEZWYgPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChleHByLm5hbWUpO1xuXHRpZiAoY2xhc3NEZWYubmF0aXZlSW5zdGFuY2UpIHtcblx0XHRyZXR1cm4gY29uc3RydWN0TmF0aXZlSW5zdGFuY2UoZXhwciwgY2xhc3NEZWYsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCk7XG5cdH1cblxuXHRyZXR1cm4gY29uc3RydWN0SW5zdGFuY2UoZXhwciwgY2xhc3NEZWYsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsRXhwcmVzc2lvbihleHByOiBBU1ROb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0c3dpdGNoIChleHByLnR5cGUpIHtcblx0XHRjYXNlIEFTVE5vZGVUeXBlLlNUUklORzpcblx0XHRjYXNlIEFTVE5vZGVUeXBlLk5VTUJFUjpcblx0XHRjYXNlIEFTVE5vZGVUeXBlLkJPT0xFQU46IHtcblx0XHRcdHJldHVybiBleHByLnZhbHVlO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLk5VTEw6IHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLklERU5USUZJRVI6IHtcblx0XHRcdHJldHVybiBlbnZpcm9ubWVudC5nZXQoZXhwci5uYW1lKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5USElTOiB7XG5cdFx0XHRpZiAoIXRoaXNWYWx1ZSkge1xuXHRcdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgdGhpcyB1c2VkIG91dHNpZGUgb2YgbWV0aG9kLmAsIGV4cHIuc3Bhbik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpc1ZhbHVlO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkJJTkFSWToge1xuXHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RCaW5hcnlOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsQmluYXJ5KGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGJpbmFyeSBleHByZXNzaW9uICR7ZXhwci50eXBlfWApO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLlVOQVJZOiB7XG5cdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVFVuYXJ5Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbFVuYXJ5KGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIHVuYXJ5IGV4cHJlc3Npb24gJHtleHByLnR5cGV9LmAsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuQVNTSUdOTUVOVDoge1xuXHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RBc3NpZ25tZW50Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbEFzc2lnbihleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBhc3NpZ25tZW50IGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5NRU1CRVI6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbE1lbWJlcihleHByLCBlbnZpcm9ubWVudCk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBtZW1iZXIgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkNBTEw6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQ2FsbE5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxDYWxsKGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGNhbGwgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLlZET006IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUVkRvbU5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxWRG9tTm9kZShleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBjYWxsIGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5ORVc6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTmV3Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbE5ldyhleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgY2FsbCBleHByZXNzaW9uICR7ZXhwci50eXBlfWAsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuQVJSQVk6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQXJyYXlOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsQXJyYXkoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgYXJyYXkgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLklOREVYOiB7XG5cdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVEluZGV4Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbEluZGV4KGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGluZGV4IGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5MQU1CREE6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTGFtYmRhTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbExhbWJkYShleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgbGFtYmRhIGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0ZGVmYXVsdDoge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVuaGFuZGxlZCBleHByZXNzaW9uICR7ZXhwci50eXBlfS5gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEJpbmFyeShleHByOiBBU1RCaW5hcnlOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0Y29uc3QgbGVmdDogYW55ID0gY2FzdFZhbHVlKGV2YWxFeHByZXNzaW9uKGV4cHIubGVmdCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpKVxuXHRjb25zdCByaWdodDogYW55ID0gY2FzdFZhbHVlKGV2YWxFeHByZXNzaW9uKGV4cHIucmlnaHQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKSlcblxuXHRzd2l0Y2ggKGV4cHIub3BlcmF0b3IpIHtcblx0XHRjYXNlIEdSQU1NQVIuUExVUzoge1xuXHRcdFx0cmV0dXJuIGxlZnQgKyByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLk1JTlVTOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCAtIHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTVVMVElQTFk6IHtcblx0XHRcdHJldHVybiBsZWZ0ICogcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5ESVZJREU6IHtcblx0XHRcdHJldHVybiBsZWZ0IC8gcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5NT0RVTFVTOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCAlIHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTEVTU19USEFOOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCA8IHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuR1JFQVRFUl9USEFOOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCA+IHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTEVTU19FUVVBTDoge1xuXHRcdFx0cmV0dXJuIGxlZnQgPD0gcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5HUkVBVEVSX0VRVUFMOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCA+PSByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkVRVUFMOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCA9PT0gcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5OT1RfRVFVQUw6IHtcblx0XHRcdHJldHVybiBsZWZ0ICE9PSByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkFORDoge1xuXHRcdFx0cmV0dXJuIGxlZnQgJiYgcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5PUjoge1xuXHRcdFx0cmV0dXJuIGxlZnQgfHwgcmlnaHQ7XG5cdFx0fVxuXHRcdGRlZmF1bHQ6IHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBVbmtub3duIG9wZXJhdG9yICR7ZXhwci5vcGVyYXRvcn1gKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxBcnJheShleHByOiBBU1RBcnJheU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBJbnN0YW5jZSB7XG5cdGNvbnN0IHZhbHVlczogYW55W10gPSBbXTtcblx0Zm9yIChjb25zdCBlbGVtIG9mIGV4cHIuZWxlbWVudHMpIHtcblx0XHR2YWx1ZXMucHVzaChldmFsRXhwcmVzc2lvbihlbGVtLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSkpO1xuXHR9XG5cblx0Y29uc3QgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KCdBcnJheScpO1xuXHRjb25zdCBpbnN0YW5jZTogSW5zdGFuY2UgPSBjbGFzc0RlZi5jb25zdHJ1Y3RFbXB0eUluc3RhbmNlKCk7XG5cdGluc3RhbmNlLl9fbmF0aXZlSW5zdGFuY2UgPSBuZXcgY2xhc3NEZWYubmF0aXZlSW5zdGFuY2UoZnJvbUx5cmFWYWx1ZSh2YWx1ZXMpKTtcblxuXHRyZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHtBU1RJbmRleE5vZGV9IGV4cHJcbiAqIEBwYXJhbSB7T2JqZWN0UmVnaXN0cnl9IG9iamVjdFJlZ2lzdHJ5XG4gKiBAcGFyYW0ge0Vudmlyb25tZW50fSBlbnZpcm9ubWVudFxuICogQHBhcmFtIHtJbnN0YW5jZXxudWxsfSB0aGlzVmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV2YWxJbmRleChleHByOiBBU1RJbmRleE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpIHtcblx0aWYgKCFleHByLm9iamVjdCkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBJbmRleCBhY2Nlc3Mgb24gbnVsbC5gLCBleHByLnNwYW4pO1xuXHR9XG5cblx0aWYgKCFleHByLmluZGV4KSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYEFjY2VzcyB3aXRoIHVuc3BlY2lmaWMgaW5kZXguYCwgZXhwci5zcGFuKTtcblx0fVxuXG5cdGNvbnN0IG9iamVjdCA9IGV2YWxFeHByZXNzaW9uKGV4cHIub2JqZWN0LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdGNvbnN0IGluZGV4ID0gZXZhbEV4cHJlc3Npb24oZXhwci5pbmRleCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXG5cdGlmICghKG9iamVjdCBpbnN0YW5jZW9mIEx5cmFBcnJheSB8fCBvYmplY3QuX19uYXRpdmVJbnN0YW5jZSBpbnN0YW5jZW9mIEx5cmFBcnJheSkpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcignSW5kZXggYWNjZXNzIG9uIG5vbi1hcnJheScsIGV4cHIuc3Bhbik7XG5cdH1cblxuXHRjb25zdCB0YXJnZXQgPSBvYmplY3QgaW5zdGFuY2VvZiBMeXJhQXJyYXkgPyBvYmplY3QgOiBvYmplY3QuX19uYXRpdmVJbnN0YW5jZTtcblx0Y29uc3QgdmFsdWUgPSB0YXJnZXQudmFsdWVzW2luZGV4XTtcblxuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0cmV0dXJuIHdyYXBOYXRpdmVJbnN0YW5jZSh2YWx1ZSwgb2JqZWN0UmVnaXN0cnkpO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbExhbWJkYShub2RlOiBBU1RMYW1iZGFOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGxhbWJkYUVudjogRW52aXJvbm1lbnQpOiBMYW1iZGFGdW5jdGlvbkNhbGwge1xuXHRyZXR1cm4gbmV3IExhbWJkYUZ1bmN0aW9uQ2FsbChub2RlLCBvYmplY3RSZWdpc3RyeSwgbGFtYmRhRW52KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEFzc2lnbihleHByOiBBU1RBc3NpZ25tZW50Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGNvbnN0IHZhbHVlID0gZXZhbEV4cHJlc3Npb24oZXhwci5yaWdodCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXG5cdGlmIChleHByLmxlZnQudHlwZSA9PT0gQVNUTm9kZVR5cGUuTUVNQkVSKSB7XG5cdFx0aWYgKGV4cHIubGVmdCBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpIHtcblx0XHRcdGNvbnN0IG9iamVjdCA9IGV2YWxFeHByZXNzaW9uKGV4cHIubGVmdC5vYmplY3QsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblxuXHRcdFx0aWYgKGV4cHIubGVmdC5vYmplY3QudHlwZSA9PT0gQVNUTm9kZVR5cGUuSURFTlRJRklFUikge1xuXHRcdFx0XHRvYmplY3QuX19zdGF0aWNGaWVsZHNbZXhwci5sZWZ0LnByb3BlcnR5XSA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b2JqZWN0Ll9faW5zdGFuY2VGaWVsZHNbZXhwci5sZWZ0LnByb3BlcnR5XSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBtZW1iZXIgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRlbnZpcm9ubWVudC5zZXQoZXhwci5sZWZ0Lm5hbWUsIHZhbHVlKTtcblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsTWVtYmVyKGV4cHI6IEFTVE1lbWJlck5vZGUsIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCk6IGFueSB7XG5cdGNvbnN0IG9iamVjdDogYW55ID0gZW52aXJvbm1lbnQuZ2V0KGV4cHIub2JqZWN0Lm5hbWUpO1xuXG5cdGlmIChleHByLnByb3BlcnR5IGluIG9iamVjdC5fX2luc3RhbmNlRmllbGRzKSB7XG5cdFx0cmV0dXJuIG9iamVjdC5fX2luc3RhbmNlRmllbGRzW2V4cHIucHJvcGVydHldO1xuXHR9XG5cblx0aWYgKGV4cHIucHJvcGVydHkgaW4gb2JqZWN0Ll9fc3RhdGljRmllbGRzKSB7XG5cdFx0cmV0dXJuIG9iamVjdC5fX3N0YXRpY0ZpZWxkc1tleHByLnByb3BlcnR5XTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbENhbGwoZXhwcjogQVNUQ2FsbE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHQvLyBzdXBlciBjYWxsIGluc2lkZSBjb25zdHJ1Y3RvclxuXHRpZiAoZXhwci5jYWxsZWUudHlwZSA9PT0gQVNUTm9kZVR5cGUuSURFTlRJRklFUiAmJiBleHByLmNhbGxlZS5uYW1lID09PSBHUkFNTUFSLlNVUEVSKSB7XG5cdFx0aWYgKCF0aGlzVmFsdWUgfHwgIXRoaXNWYWx1ZS5fX2NsYXNzRGVmPy5zdXBlckNsYXNzKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcignc3VwZXIoKSB1c2VkIG91dHNpZGUgb2Ygc3ViY2xhc3MgY29uc3RydWN0b3InKTtcblx0XHR9XG5cblx0XHRjb25zdCBzdXBlckNsYXNzRGVmID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQodGhpc1ZhbHVlLl9fY2xhc3NEZWYuc3VwZXJDbGFzcyk7XG5cdFx0Y29uc3QgY29uc3RydWN0b3JNZXRob2QgPSBzdXBlckNsYXNzRGVmLmNvbnN0cnVjdG9yTWV0aG9kO1xuXG5cdFx0aWYgKCFjb25zdHJ1Y3Rvck1ldGhvZCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY29uc3RydWN0b3JFbnYgPSBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpO1xuXHRcdGNvbnN0cnVjdG9yRW52LmRlZmluZShHUkFNTUFSLlRISVMsIHRoaXNWYWx1ZSk7XG5cblx0XHRiaW5kTWV0aG9kUGFyYW1ldGVycyhleHByLFxuXHRcdCAgICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yTWV0aG9kLnBhcmFtZXRlcnMsXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgb2JqZWN0UmVnaXN0cnksXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3JFbnYsXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgZW52aXJvbm1lbnQsXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgdGhpc1ZhbHVlXG5cdFx0KTtcblxuXHRcdGZvciAoY29uc3QgY2hpbGQgb2YgY29uc3RydWN0b3JNZXRob2QuY2hpbGRyZW4pIHtcblx0XHRcdGV2YWxOb2RlKGNoaWxkLCBvYmplY3RSZWdpc3RyeSwgY29uc3RydWN0b3JFbnYsIHRoaXNWYWx1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRpZiAoZXhwci5jYWxsZWUudHlwZSA9PT0gQVNUTm9kZVR5cGUuTUVNQkVSKSB7XG5cdFx0aWYgKGV4cHIuY2FsbGVlIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkge1xuXHRcdFx0aWYgKGV4cHIuY2FsbGVlLm9iamVjdC50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0XHRcdGNvbnN0IGNsYXNzTmFtZSA9IGV4cHIuY2FsbGVlLm9iamVjdC5uYW1lO1xuXG5cdFx0XHRcdGlmIChvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmhhcyhjbGFzc05hbWUpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGV2YWxTdGF0aWNDYWxsKGV4cHIsIGNsYXNzTmFtZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZXZhbEluc3RhbmNlQ2FsbChleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gZXZhbEZ1bmN0aW9uQ2FsbChleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsRnVuY3Rpb25DYWxsKGV4cHI6IEFTVENhbGxOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKSB7XG5cdGNvbnN0IGZ1bmN0aW9uQ2FsbCA9IGV2YWxFeHByZXNzaW9uKGV4cHIuY2FsbGVlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdGNvbnN0IGFyZ3MgPSBldmFsQ2FsbEFyZ3VtZW50cyhleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cblx0aWYgKGZ1bmN0aW9uQ2FsbCBpbnN0YW5jZW9mIExhbWJkYUZ1bmN0aW9uQ2FsbCkge1xuXHRcdHJldHVybiBmdW5jdGlvbkNhbGwuZXZhbENhbGwodGhpc1ZhbHVlLCAuLi5hcmdzKTtcblx0fVxuXG5cdHJldHVybiAobmV3IE5hdGl2ZUZ1bmN0aW9uQ2FsbChleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpKS5ldmFsQ2FsbCh0aGlzVmFsdWUsIC4uLmFyZ3MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbFN0YXRpY0NhbGwoZXhwcjogQVNUQ2FsbE5vZGUsIGNsYXNzTmFtZTogc3RyaW5nLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKSB7XG5cblx0aWYgKCEoZXhwci5jYWxsZWUgaW5zdGFuY2VvZiBBU1RNZW1iZXJOb2RlKSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIG1lbWJlciBleHByZXNzaW9uICR7ZXhwci50eXBlfWAsIGV4cHIuc3Bhbik7XG5cdH1cblxuXHRjb25zdCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQoY2xhc3NOYW1lKTtcblx0Y29uc3QgbWV0aG9kRGVmOiBDbGFzc01ldGhvZERlZmluaXRpb24gfCB1bmRlZmluZWQgPSBjbGFzc0RlZi5zdGF0aWNNZXRob2RzW2V4cHIuY2FsbGVlLnByb3BlcnR5XTtcblxuXHRpZiAoIW1ldGhvZERlZikge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBTdGF0aWMgbWV0aG9kICR7Y2xhc3NOYW1lfS4ke2V4cHIuY2FsbGVlLnByb3BlcnR5fSBub3QgZm91bmRgLCBleHByLmNhbGxlZS5zcGFuKTtcblx0fVxuXG5cdGlmIChjbGFzc0RlZi5uYXRpdmVJbnN0YW5jZSAmJiBjbGFzc0RlZi5uYXRpdmVJbnN0YW5jZVttZXRob2REZWYubmFtZV0pIHtcblx0XHRjb25zdCBhcmdzID0gZXZhbE1ldGhvZEFyZ3VtZW50cyhleHByLCBtZXRob2REZWYucGFyYW1ldGVycywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpXG5cdFx0Y29uc3QgcmF3QXJncyA9IGFyZ3MubWFwKGZyb21MeXJhVmFsdWUpO1xuXHRcdGNvbnN0IHJlc3VsdCA9IGNsYXNzRGVmLm5hdGl2ZUluc3RhbmNlW21ldGhvZERlZi5uYW1lXSguLi5yYXdBcmdzKTtcblxuXHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRyZXR1cm4gd3JhcE5hdGl2ZUluc3RhbmNlKHJlc3VsdCwgb2JqZWN0UmVnaXN0cnkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmFsQmxvY2soW3JldHVyblZhbHVlKHJlc3VsdCldLFxuXHRcdCAgICAgICAgICAgICAgICAgb2JqZWN0UmVnaXN0cnksXG5cdFx0ICAgICAgICAgICAgICAgICBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpLFxuXHRcdCAgICAgICAgICAgICAgICAgdGhpc1ZhbHVlLFxuXHRcdCAgICAgICAgICAgICAgICAgbWV0aG9kRGVmLnJldHVyblR5cGVcblx0XHQpO1xuXHR9XG5cblx0Y29uc3QgbWV0aG9kRW52ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblxuXHRiaW5kTWV0aG9kUGFyYW1ldGVycyhleHByLCBtZXRob2REZWYucGFyYW1ldGVycywgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cblx0cmV0dXJuIGV2YWxCbG9jayhtZXRob2REZWYuY2hpbGRyZW4sIG9iamVjdFJlZ2lzdHJ5LCBtZXRob2RFbnYsIHRoaXNWYWx1ZSwgbWV0aG9kRGVmLnJldHVyblR5cGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEluc3RhbmNlQ2FsbChleHByOiBBU1RDYWxsTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCkge1xuXHRpZiAoIShleHByLmNhbGxlZSBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpKSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgbWVtYmVyIGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0fVxuXG5cdC8vIE9iamVrdCBhdXN3ZXJ0ZW4gKHUgfCB0aGlzIHwgc3VwZXIpXG5cdGxldCB0YXJnZXQgPSBldmFsRXhwcmVzc2lvbihleHByLmNhbGxlZS5vYmplY3QsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblxuXHR0YXJnZXQgPSBhdXRvQm94SWZOZWVkZWQodGFyZ2V0LCBvYmplY3RSZWdpc3RyeSwgZXhwci5jYWxsZWUuc3Bhbik7XG5cblx0aWYgKCF0YXJnZXQgfHwgIXRhcmdldC5fX2NsYXNzRGVmKSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoJ0luc3RhbmNlIGNhbGwgb24gbm9uLW9iamVjdCcsIGV4cHIuY2FsbGVlLnNwYW4pO1xuXHR9XG5cblx0bGV0IGNsYXNzRGVmID0gdGFyZ2V0Ll9fY2xhc3NEZWY7XG5cblx0Ly8gc3VwZXIubWV0aG9kKClcblx0aWYgKGV4cHIuY2FsbGVlLm9iamVjdC50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSICYmIGV4cHIuY2FsbGVlLm9iamVjdC5uYW1lID09PSAnc3VwZXInKSB7XG5cdFx0Y29uc3Qgc3VwZXJOYW1lID0gY2xhc3NEZWYuc3VwZXJDbGFzcztcblx0XHRpZiAoIXN1cGVyTmFtZSkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoJ3N1cGVyIHVzZWQgYnV0IG5vIHN1cGVyY2xhc3MnLCBleHByLmNhbGxlZS5zcGFuKTtcblx0XHR9XG5cdFx0Y2xhc3NEZWYgPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChzdXBlck5hbWUpO1xuXHR9XG5cblxuXHRjb25zdCBtZXRob2REZWY6IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB8IG51bGwgPSByZXNvbHZlSW5zdGFuY2VNZXRob2QoY2xhc3NEZWYsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RSZWdpc3RyeSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHIuY2FsbGVlLnByb3BlcnR5KTtcblx0aWYgKCFtZXRob2REZWYpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgTWV0aG9kICR7ZXhwci5jYWxsZWUucHJvcGVydHl9IG5vdCBmb3VuZCBvbiAke2NsYXNzRGVmLm5hbWV9YCwgZXhwci5jYWxsZWUuc3Bhbik7XG5cdH1cblxuXHRjb25zdCBtZXRob2RFbnYgPSBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpO1xuXHRtZXRob2RFbnYuZGVmaW5lKEdSQU1NQVIuVEhJUywgdGFyZ2V0KTtcblxuXHRpZiAodGFyZ2V0Ll9fbmF0aXZlSW5zdGFuY2UgJiYgbWV0aG9kRGVmLm5hbWUgaW4gdGFyZ2V0Ll9fbmF0aXZlSW5zdGFuY2UpIHtcblx0XHRjb25zdCBhcmdzID0gZXZhbE1ldGhvZEFyZ3VtZW50cyhleHByLCBtZXRob2REZWYucGFyYW1ldGVycywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdGNvbnN0IHJhd0FyZ3MgPSBhcmdzLm1hcChmcm9tTHlyYVZhbHVlKTtcblx0XHRjb25zdCByZXN1bHQgPSB0YXJnZXQuX19uYXRpdmVJbnN0YW5jZVttZXRob2REZWYubmFtZV0oLi4ucmF3QXJncyk7XG5cblx0XHRpZiAocmVzdWx0IGluc3RhbmNlb2YgTHlyYU5hdGl2ZU9iamVjdCkge1xuXHRcdFx0cmV0dXJuIHdyYXBOYXRpdmVJbnN0YW5jZShyZXN1bHQsIG9iamVjdFJlZ2lzdHJ5KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZhbEJsb2NrKFtyZXR1cm5WYWx1ZShyZXN1bHQpXSwgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgdGFyZ2V0LCBtZXRob2REZWYucmV0dXJuVHlwZSk7XG5cdH1cblxuXHRiaW5kTWV0aG9kUGFyYW1ldGVycyhleHByLCBtZXRob2REZWYucGFyYW1ldGVycywgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cblx0cmV0dXJuIGV2YWxCbG9jayhtZXRob2REZWYuY2hpbGRyZW4sIG9iamVjdFJlZ2lzdHJ5LCBtZXRob2RFbnYsIHRhcmdldCwgbWV0aG9kRGVmLnJldHVyblR5cGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUluc3RhbmNlTWV0aG9kKGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgbWV0aG9kTmFtZTogc3RyaW5nKTogQ2xhc3NNZXRob2REZWZpbml0aW9uIHwgbnVsbCB7XG5cdGlmIChjbGFzc0RlZi5pbnN0YW5jZU1ldGhvZHNbbWV0aG9kTmFtZV0pIHtcblx0XHRyZXR1cm4gY2xhc3NEZWYuaW5zdGFuY2VNZXRob2RzW21ldGhvZE5hbWVdO1xuXHR9XG5cblx0aWYgKGNsYXNzRGVmLnN1cGVyQ2xhc3MpIHtcblx0XHRjb25zdCBzdXBlckRlZiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KGNsYXNzRGVmLnN1cGVyQ2xhc3MpO1xuXHRcdHJldHVybiByZXNvbHZlSW5zdGFuY2VNZXRob2Qoc3VwZXJEZWYsIG9iamVjdFJlZ2lzdHJ5LCBtZXRob2ROYW1lKTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmluZE1ldGhvZFBhcmFtZXRlcnMoXG5cdGNhbGxOb2RlOiBBU1RDYWxsTm9kZSxcblx0cGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdLFxuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksXG5cdG1ldGhvZEVudjogRW52aXJvbm1lbnQsXG5cdGVudmlyb25tZW50OiBFbnZpcm9ubWVudCxcblx0dGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsXG4pIHtcblxuXHRjb25zdCBhcmdzID0gY2FsbE5vZGUuYXJndW1lbnRzO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtZXRlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBwYXJhbWV0ZXI6IEFTVFBhcmFtZXRlck5vZGUgfCBudWxsID0gcGFyYW1ldGVyc1tpXSB8fCBudWxsO1xuXHRcdGNvbnN0IGFyZ3VtZW50OiBhbnkgPSBhcmdzW2ldIHx8IG51bGw7XG5cblx0XHRpZiAoIXBhcmFtZXRlcikge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoJ01pc3NpbmcgcGFyYW1ldGVyIG5hbWUgaW4gbWV0aG9kIGNhbGwuJyk7XG5cdFx0fVxuXG5cdFx0bGV0IHJhd1ZhbHVlO1xuXG5cdFx0aWYgKGFyZ3VtZW50KSB7XG5cdFx0XHRyYXdWYWx1ZSA9IGV2YWxFeHByZXNzaW9uKGFyZ3VtZW50LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdFx0fSBlbHNlIGlmIChwYXJhbWV0ZXI/LmRlZmF1bHRWYWx1ZSkge1xuXHRcdFx0cmF3VmFsdWUgPSBldmFsRXhwcmVzc2lvbihwYXJhbWV0ZXIuZGVmYXVsdFZhbHVlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY2FzdGVkID0gcGFyYW1ldGVyLnR5cGVBbm5vdGF0aW9uXG5cdFx0XHQ/IGNhc3RWYWx1ZShyYXdWYWx1ZSwgcGFyYW1ldGVyLnR5cGVBbm5vdGF0aW9uLm5hbWUpXG5cdFx0XHQ6IGNhc3RWYWx1ZShyYXdWYWx1ZSwgVFlQRV9FTlVNLk1JWEVEKTtcblxuXHRcdG1ldGhvZEVudi5kZWZpbmUocGFyYW1ldGVyLm5hbWUsIGNhc3RlZCk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxDYWxsQXJndW1lbnRzKG5vZGU6IEFTVENhbGxOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55W10ge1xuXHRpZiAobm9kZS5jYWxsZWUgaW5zdGFuY2VvZiBBU1RMYW1iZGFOb2RlKSB7XG5cdFx0Y29uc3QgbGFtYmRhID0gbm9kZS5jYWxsZWU7XG5cdFx0cmV0dXJuIGV2YWxNZXRob2RBcmd1bWVudHMobm9kZSwgbGFtYmRhLnBhcmFtZXRlcnMsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0fVxuXG5cdGlmIChub2RlLmNhbGxlZS50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0cmV0dXJuIG5vZGUuYXJndW1lbnRzLm1hcChhcmd1bWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gY2FzdFZhbHVlKFxuXHRcdFx0XHRldmFsRXhwcmVzc2lvbihhcmd1bWVudCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpLFxuXHRcdFx0XHRhcmd1bWVudC50eXBlXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHR9XG5cblx0bGV0IG1vZHVsZU5hbWU6IHN0cmluZyA9ICd1bmtub3duJztcblx0bGV0IG1ldGhvZE5hbWU6IHN0cmluZyA9ICd1bmtub3duJztcblxuXHRpZiAobm9kZS5jYWxsZWUgaW5zdGFuY2VvZiBBU1RNZW1iZXJOb2RlKSB7XG5cdFx0bW9kdWxlTmFtZSA9IG5vZGUuY2FsbGVlLm9iamVjdC5uYW1lO1xuXHRcdG1ldGhvZE5hbWUgPSBub2RlLmNhbGxlZS5wcm9wZXJ0eTtcblx0fVxuXG5cdHRocm93UnVudGltZUVycm9yKGBVbmtub3duIGZ1bmN0aW9uICR7bW9kdWxlTmFtZX0uJHttZXRob2ROYW1lfWAsIG5vZGUuc3Bhbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsTWV0aG9kQXJndW1lbnRzKGV4cHI6IEFTVENhbGxOb2RlIHwgQVNUTmV3Tm9kZSwgcGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55W10ge1xuXHRjb25zdCBhcmdzID0gW107XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgcGFyYW1ldGVyOiBBU1RQYXJhbWV0ZXJOb2RlIHwgbnVsbCA9IHBhcmFtZXRlcnNbaV0gfHwgbnVsbDtcblx0XHRjb25zdCBhcmd1bWVudCA9IGV4cHIuYXJndW1lbnRzW2ldIHx8IG51bGw7XG5cblx0XHRsZXQgdmFsdWU7XG5cblx0XHRpZiAoYXJndW1lbnQpIHtcblx0XHRcdHZhbHVlID0gZXZhbEV4cHJlc3Npb24oYXJndW1lbnQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHR9IGVsc2UgaWYgKHBhcmFtZXRlcj8uZGVmYXVsdFZhbHVlKSB7XG5cdFx0XHR2YWx1ZSA9IGV2YWxFeHByZXNzaW9uKHBhcmFtZXRlci5kZWZhdWx0VmFsdWUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFtSdW50aW1lRXJyb3JdIE1pc3NpbmcgYXJndW1lbnQgJyR7cGFyYW1ldGVyPy5uYW1lfSdgLCBleHByLnNwYW4pO1xuXHRcdH1cblxuXHRcdGFyZ3MucHVzaCh2YWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4gYXJncy5tYXAoKGFyZ3VtZW50LCBpKSA9PiB7XG5cdFx0Y29uc3QgcGFyYW1ldGVyID0gcGFyYW1ldGVyc1tpXTtcblx0XHRyZXR1cm4gcGFyYW1ldGVyPy50eXBlQW5ub3RhdGlvblxuXHRcdFx0PyBjYXN0VmFsdWUoYXJndW1lbnQsIHBhcmFtZXRlci50eXBlQW5ub3RhdGlvbi5uYW1lKVxuXHRcdFx0OiBjYXN0VmFsdWUoYXJndW1lbnQsIFRZUEVfRU5VTS5NSVhFRCk7XG5cdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbElmKG5vZGU6IEFTVElmTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGNvbnN0IGNvbmRpdGlvbiA9IGNhc3RWYWx1ZShcblx0XHRldmFsRXhwcmVzc2lvbihub2RlLmNvbmRpdGlvbiwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpLFxuXHRcdFRZUEVfRU5VTS5CT09MRUFOXG5cdCk7XG5cblx0Ly8gVEhFTlxuXHRpZiAoY29uZGl0aW9uID09PSB0cnVlKSB7XG5cdFx0cmV0dXJuIGV2YWxCbG9jayhub2RlLnRoZW4uY2hpbGRyZW4sIG9iamVjdFJlZ2lzdHJ5LCBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpLCB0aGlzVmFsdWUpO1xuXHR9XG5cblx0Ly8gRUxTRVxuXHRpZiAobm9kZS5lbHNlKSB7XG5cdFx0aWYgKG5vZGUuZWxzZSBpbnN0YW5jZW9mIEFTVElmTm9kZSkge1xuXHRcdFx0cmV0dXJuIGV2YWxJZihub2RlLmVsc2UsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZhbEJsb2NrKG5vZGUuZWxzZS5jaGlsZHJlbiwgb2JqZWN0UmVnaXN0cnksIG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCksIHRoaXNWYWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxNYXRjaChub2RlOiBBU1RNYXRjaE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRjb25zdCBtYXRjaFZhbHVlID0gZXZhbEV4cHJlc3Npb24obm9kZS5leHByZXNzaW9uLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpO1xuXG5cdGZvciAoY29uc3QgY2FzZU5vZGUgb2Ygbm9kZS5jYXNlcykge1xuXHRcdGlmIChjYXNlTm9kZS50ZXN0ID09PSBudWxsKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCB0ZXN0VmFsdWUgPSBldmFsRXhwcmVzc2lvbihjYXNlTm9kZS50ZXN0LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cblx0XHRpZiAodGVzdFZhbHVlID09PSBtYXRjaFZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gZXZhbE1hdGNoQ2FzZShjYXNlTm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdGlmIChub2RlLmRlZmF1bHRDYXNlKSB7XG5cdFx0cmV0dXJuIGV2YWxNYXRjaENhc2Uobm9kZS5kZWZhdWx0Q2FzZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsTWF0Y2hDYXNlKG5vZGU6IEFTVE1hdGNoQ2FzZU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRyZXR1cm4gZXZhbEJsb2NrKG5vZGUuY2hpbGRyZW4sIG9iamVjdFJlZ2lzdHJ5LCBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpLCB0aGlzVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEZvcmVhY2gobm9kZTogQVNURm9yZWFjaE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRsZXQgaXRlcmFibGUgPSBldmFsRXhwcmVzc2lvbihub2RlLml0ZXJhYmxlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cblx0aWYgKCEoaXRlcmFibGUgaW5zdGFuY2VvZiBJbnN0YW5jZSkpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgZm9yZWFjaCBleHBlY3RzIGFuIG9iamVjdCBpbXBsZW1lbnRpbmcgSXRlcmFibGVgLCBub2RlLml0ZXJhYmxlLnNwYW4pO1xuXHR9XG5cblx0Y29uc3QgaXRlcmF0b3JNZXRob2QgPSByZXNvbHZlSW5zdGFuY2VNZXRob2QoXG5cdFx0aXRlcmFibGUuX19jbGFzc0RlZixcblx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHQnaXRlcmF0b3InXG5cdCk7XG5cblx0aWYgKCFpdGVyYXRvck1ldGhvZCkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBPYmplY3QgZG9lcyBub3QgaW1wbGVtZW50IEl0ZXJhYmxlIChtaXNzaW5nIGl0ZXJhdG9yKCkpYCwgbm9kZS5pdGVyYWJsZS5zcGFuKTtcblx0fVxuXG5cdGNvbnN0IGl0ZXJhdG9yID0gZXZhbEluc3RhbmNlQ2FsbChcblx0XHQoKCkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBBU1RDYWxsTm9kZShuZXcgQVNUTWVtYmVyTm9kZShub2RlLml0ZXJhYmxlLCAnaXRlcmF0b3InKSk7XG5cdFx0fSkoKSxcblx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRlbnZpcm9ubWVudCxcblx0XHR0aGlzVmFsdWVcblx0KTtcblxuXHRpZiAoIShpdGVyYXRvciBpbnN0YW5jZW9mIEluc3RhbmNlKSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBpdGVyYXRvcigpIG11c3QgcmV0dXJuIGFuIEl0ZXJhdG9yIG9iamVjdGAsIG5vZGUuaXRlcmFibGUuc3Bhbik7XG5cdH1cblxuXHRjYWxsSXRlcmF0b3JNZXRob2QoaXRlcmF0b3IsICdyZXdpbmQnLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpO1xuXG5cdHdoaWxlIChjYWxsSXRlcmF0b3JNZXRob2QoaXRlcmF0b3IsICdoYXNOZXh0Jywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50KSkge1xuXHRcdGNvbnN0IHZhbHVlID0gY2FsbEl0ZXJhdG9yTWV0aG9kKGl0ZXJhdG9yLCAnY3VycmVudCcsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCk7XG5cblx0XHRjb25zdCBsb29wRW52ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblxuXHRcdGxvb3BFbnYuZGVmaW5lKG5vZGUuaXRlcmF0b3IsIHZhbHVlKTtcblxuXHRcdGNvbnN0IHJlc3VsdCA9IGV2YWxCbG9jayhub2RlLmJvZHksIG9iamVjdFJlZ2lzdHJ5LCBsb29wRW52LCB0aGlzVmFsdWUpO1xuXHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBSZXR1cm5WYWx1ZSkge1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cblx0XHRjYWxsSXRlcmF0b3JNZXRob2QoaXRlcmF0b3IsICduZXh0Jywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50KTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsbEl0ZXJhdG9yTWV0aG9kKGl0ZXJhdG9yOiBJbnN0YW5jZSwgbWV0aG9kTmFtZTogc3RyaW5nLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCk6IGFueSB7XG5cdHJldHVybiBjYWxsSW5zdGFuY2VNZXRob2QoXG5cdFx0aXRlcmF0b3IsXG5cdFx0aXRlcmF0b3IuX19jbGFzc0RlZi5maW5kTWV0aG9kKG1ldGhvZE5hbWUpLFxuXHRcdFtdLFxuXHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdGVudmlyb25tZW50XG5cdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsVW5hcnkobm9kZTogQVNUVW5hcnlOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0Y29uc3QgdmFsdWUgPSBldmFsRXhwcmVzc2lvbihub2RlLmFyZ3VtZW50LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cblx0c3dpdGNoIChub2RlLm9wZXJhdG9yKSB7XG5cdFx0Y2FzZSBHUkFNTUFSLkVYQ0xBTUFUSU9OX01BUks6XG5cdFx0XHRyZXR1cm4gIWNhc3RWYWx1ZSh2YWx1ZSk7XG5cdH1cblxuXHR0aHJvd1J1bnRpbWVFcnJvcihgVW5zdXBwb3J0ZWQgdW5hcnkgb3BlcmF0b3IgJHtub2RlLm9wZXJhdG9yfWAsIG5vZGUuc3Bhbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsVkRvbU5vZGUobm9kZTogQVNUVkRvbU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBWTm9kZSB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KG5vZGUudGFnKTtcblxuXHRcdHJldHVybiBldmFsRG9tQ29tcG9uZW50Tm9kZShub2RlLCBjbGFzc0RlZiwgZW52aXJvbm1lbnQsIG9iamVjdFJlZ2lzdHJ5KTtcblx0fSBjYXRjaCAoZSkge1xuXHR9XG5cblx0cmV0dXJuIGV2YWxEb21IdG1sTm9kZShub2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsRG9tSHRtbE5vZGUobm9kZTogQVNUVkRvbU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBWTm9kZSB7XG5cdGNvbnN0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG5cblx0Zm9yIChjb25zdCBbbmFtZSwgdmFsdWVdIG9mIG5vZGUucHJvcHMpIHtcblx0XHRwcm9wc1tuYW1lXSA9IGV2YWxFeHByZXNzaW9uKHZhbHVlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdH1cblxuXHRjb25zdCBjaGlsZHJlbjogQXJyYXk8Vk5vZGUgfCBzdHJpbmc+ID0gW107XG5cblx0Zm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG5cdFx0aWYgKGNoaWxkIGluc3RhbmNlb2YgQVNUVkRvbVRleHROb2RlKSB7XG5cdFx0XHRjaGlsZHJlbi5wdXNoKGNoaWxkLnZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2hpbGRyZW4ucHVzaChldmFsRXhwcmVzc2lvbihjaGlsZCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHRhZzogbm9kZS50YWcsXG5cdFx0cHJvcHM6IHByb3BzLFxuXHRcdGNoaWxkcmVuOiBjaGlsZHJlblxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbERvbUNvbXBvbmVudE5vZGUobm9kZTogQVNUVkRvbU5vZGUsIGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24sIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogVk5vZGUge1xuXG5cdGNvbnN0IGluc3RhbmNlOiBJbnN0YW5jZSA9IGNsYXNzRGVmLmNvbnN0cnVjdE5ld0luc3RhbmNlV2l0aG91dEFyZ3VtZW50cyhvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpO1xuXG5cdGNvbnN0IG1ldGhvZE5vZGU6IEFTVE1ldGhvZE5vZGUgPSBjbGFzc0RlZi5maW5kTWV0aG9kKCdyZW5kZXInKTtcblxuXHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBub2RlLnByb3BzLmVudHJpZXMoKSkge1xuXHRcdGluc3RhbmNlLl9faW5zdGFuY2VGaWVsZHNba2V5XSA9IGV2YWxFeHByZXNzaW9uKHZhbHVlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGluc3RhbmNlKTtcblx0fVxuXG5cdHJldHVybiBjYWxsSW5zdGFuY2VNZXRob2QoaW5zdGFuY2UsIG1ldGhvZE5vZGUsIFtdLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpIGFzIFZOb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEJsb2NrKGJsb2NrTm9kZXM6IEFTVE5vZGVbXSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCwgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGZvciAoY29uc3QgYmxvY2tOb2RlIG9mIGJsb2NrTm9kZXMpIHtcblx0XHRjb25zdCByZXN1bHQgPSBldmFsTm9kZShibG9ja05vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHRpZiAocmVzdWx0IGluc3RhbmNlb2YgUmV0dXJuVmFsdWUpIHtcblx0XHRcdHJldHVybiBjYXN0VmFsdWUocmVzdWx0LnZhbHVlLCByZXR1cm5UeXBlPy5uYW1lKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsQW5ub3RhdGlvblZhbHVlKG5vZGU6IEFTVE5vZGUpOiBhbnkge1xuXHRzd2l0Y2ggKG5vZGUudHlwZSkge1xuXHRcdGNhc2UgQVNUTm9kZVR5cGUuU1RSSU5HOlxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuTlVNQkVSOlxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuQk9PTEVBTjpcblx0XHRjYXNlIEFTVE5vZGVUeXBlLklERU5USUZJRVI6IHtcblx0XHRcdHJldHVybiBjYXN0VmFsdWUobm9kZS52YWx1ZSk7XG5cdFx0fVxuXG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5BUlJBWSA6IHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUQXJyYXlOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBub2RlLmVsZW1lbnRzLm1hcChjaGlsZCA9PiBldmFsQW5ub3RhdGlvblZhbHVlKGNoaWxkKSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBhbm5vdGF0aW9uIHByb3BlcnR5IHZhbHVlOiAke25vZGUudHlwZX1gLCBub2RlLnNwYW4pO1xuXHRcdH1cblxuXHRcdGRlZmF1bHQ6IHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBVbnN1cHBvcnRlZCBhbm5vdGF0aW9uIGV4cHJlc3Npb246ICR7bm9kZS50eXBlfWAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsQW5ub3RhdGlvblByb3BlcnRpZXMoYW5ub3RhdGlvbjogQVNUQW5ub3RhdGlvbk5vZGUpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcblx0Y29uc3QgcHJvcGVydGllczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuXG5cdGZvciAoY29uc3QgW2tleSwgdmFsdWVOb2RlXSBvZiBhbm5vdGF0aW9uLnByb3BlcnRpZXMpIHtcblx0XHRwcm9wZXJ0aWVzW2tleV0gPSBldmFsQW5ub3RhdGlvblZhbHVlKHZhbHVlTm9kZSk7XG5cdH1cblxuXHRyZXR1cm4gcHJvcGVydGllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGxJbnN0YW5jZU1ldGhvZChpbnN0YW5jZTogSW5zdGFuY2UsIG1ldGhvZE5vZGU6IEFTVE1ldGhvZE5vZGUsIGFyZ3M6IGFueVtdLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCk6IGFueSB7XG5cdGNvbnN0IG1ldGhvZEVudiA9IG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCk7XG5cblx0bWV0aG9kRW52LmRlZmluZShHUkFNTUFSLlRISVMsIGluc3RhbmNlKTtcblxuXHRpZiAoaW5zdGFuY2UuX19uYXRpdmVJbnN0YW5jZSAmJiBtZXRob2ROb2RlLm5hbWUgaW4gaW5zdGFuY2UuX19uYXRpdmVJbnN0YW5jZSkge1xuXHRcdGNvbnN0IHJhd0FyZ3MgPSBhcmdzLm1hcChmcm9tTHlyYVZhbHVlKTtcblx0XHRjb25zdCByZXN1bHQgPSBpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlW21ldGhvZE5vZGUubmFtZV0oLi4ucmF3QXJncyk7XG5cblx0XHRpZiAocmVzdWx0IGluc3RhbmNlb2YgTHlyYU5hdGl2ZU9iamVjdCkge1xuXHRcdFx0cmV0dXJuIHdyYXBOYXRpdmVJbnN0YW5jZShyZXN1bHQsIG9iamVjdFJlZ2lzdHJ5KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZhbEJsb2NrKFtyZXR1cm5WYWx1ZShyZXN1bHQpXSwgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgaW5zdGFuY2UsIG1ldGhvZE5vZGUucmV0dXJuVHlwZSk7XG5cdH1cblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IG1ldGhvZE5vZGUucGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHBhcmFtZXRlcjogQVNUUGFyYW1ldGVyTm9kZSB8IG51bGwgPSBtZXRob2ROb2RlLnBhcmFtZXRlcnNbaV0gfHwgbnVsbDtcblx0XHRjb25zdCBhcmd1bWVudDogYW55ID0gYXJnc1tpXSB8fCBudWxsO1xuXG5cdFx0aWYgKCFwYXJhbWV0ZXIpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKCdNZXRob2QgcGFyYW1ldGVyIGlzIG51bGwuJyk7XG5cdFx0fVxuXG5cdFx0bGV0IHZhbHVlO1xuXHRcdGlmICghYXJndW1lbnQpIHtcblx0XHRcdHZhbHVlID0gcGFyYW1ldGVyLmRlZmF1bHRWYWx1ZVxuXHRcdFx0XHQ/IGV2YWxOb2RlKHBhcmFtZXRlci5kZWZhdWx0VmFsdWUsIG9iamVjdFJlZ2lzdHJ5LCBtZXRob2RFbnYsIGluc3RhbmNlKVxuXHRcdFx0XHQ6IG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhbHVlID0gYXJnc1tpXTtcblx0XHR9XG5cblx0XHRtZXRob2RFbnYuZGVmaW5lKHBhcmFtZXRlci5uYW1lLCB2YWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4gZXZhbEJsb2NrKG1ldGhvZE5vZGUuY2hpbGRyZW4sIG9iamVjdFJlZ2lzdHJ5LCBtZXRob2RFbnYsIGluc3RhbmNlLCBtZXRob2ROb2RlLnJldHVyblR5cGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b0JveElmTmVlZGVkKHZhbHVlOiBhbnksIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsKTogSW5zdGFuY2Uge1xuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBJbnN0YW5jZSkge1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09IFRZUEVfRU5VTS5OVU1CRVIpIHtcblx0XHRyZXR1cm4gY3JlYXRlQm94ZWRJbnN0YW5jZShBdXRvYm94ZWRUeXBlcy5nZXRDbGFzc05hbWUoVFlQRV9FTlVNLk5VTUJFUiksIHZhbHVlLCBvYmplY3RSZWdpc3RyeSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSBUWVBFX0VOVU0uU1RSSU5HKSB7XG5cdFx0cmV0dXJuIGNyZWF0ZUJveGVkSW5zdGFuY2UoQXV0b2JveGVkVHlwZXMuZ2V0Q2xhc3NOYW1lKFRZUEVfRU5VTS5TVFJJTkcpLCB2YWx1ZSwgb2JqZWN0UmVnaXN0cnkpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gVFlQRV9FTlVNLkJPT0xFQU4pIHtcblx0XHRyZXR1cm4gY3JlYXRlQm94ZWRJbnN0YW5jZShBdXRvYm94ZWRUeXBlcy5nZXRDbGFzc05hbWUoVFlQRV9FTlVNLkJPT0xFQU4pLCB2YWx1ZSwgb2JqZWN0UmVnaXN0cnkpO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQm94ZWRJbnN0YW5jZShjbGFzc05hbWU6IHN0cmluZywgcHJpbWl0aXZlVmFsdWU6IGFueSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogSW5zdGFuY2Uge1xuXHRjb25zdCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQoY2xhc3NOYW1lKTtcblx0Y29uc3QgaW5zdGFuY2U6IEluc3RhbmNlID0gY2xhc3NEZWYuY29uc3RydWN0RW1wdHlJbnN0YW5jZSgpO1xuXG5cdGluc3RhbmNlLl9fbmF0aXZlSW5zdGFuY2UgPSBuZXcgY2xhc3NEZWYubmF0aXZlSW5zdGFuY2UoZnJvbUx5cmFWYWx1ZShwcmltaXRpdmVWYWx1ZSkpO1xuXG5cdHJldHVybiBpbnN0YW5jZTtcbn1cbiIsCiAgICAiaW1wb3J0IHtHUkFNTUFSfSBmcm9tIFwiLi4vZ3JhbW1hclwiO1xuaW1wb3J0IHtcblx0QVNUQ2xhc3NOb2RlLFxuXHRBU1RGaWVsZE5vZGUsXG5cdEFTVEludGVyZmFjZU5vZGUsXG5cdEFTVE1ldGhvZE5vZGUsXG5cdEFTVE5ld05vZGUsXG5cdEFTVE5vZGUsXG5cdEFTVFBhcmFtZXRlck5vZGUsXG5cdEFTVFR5cGVOb2RlXG59IGZyb20gXCIuLi9hc3RcIjtcbmltcG9ydCB7dGhyb3dSdW50aW1lRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcbmltcG9ydCB0eXBlIHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfcmVnaXN0cnkudHNcIjtcbmltcG9ydCB7ZXZhbEV4cHJlc3Npb24sIGV2YWxNZXRob2RBcmd1bWVudHMsIGV2YWxOb2RlfSBmcm9tIFwiLi9pbnRlcnByZXRlcl9ydW50aW1lLnRzXCI7XG5pbXBvcnQge2Nhc3RWYWx1ZSwgZnJvbUx5cmFWYWx1ZSwgTHlyYU5hdGl2ZU9iamVjdH0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfY29udmVyc2lvbi50c1wiO1xuXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQge1xuXHRwYXJlbnQ6IEVudmlyb25tZW50IHwgbnVsbDtcblx0dmFsdWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH07XG5cblx0Y29uc3RydWN0b3IocGFyZW50OiBFbnZpcm9ubWVudCB8IG51bGwgPSBudWxsKSB7XG5cdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cdFx0dGhpcy52YWx1ZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHR9XG5cblx0ZGVmaW5lKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMudmFsdWVzW25hbWVdID0gdmFsdWU7XG5cdH1cblxuXHRnZXQobmFtZTogc3RyaW5nKTogYW55IHtcblx0XHRpZiAobmFtZSBpbiB0aGlzLnZhbHVlcykge1xuXHRcdFx0cmV0dXJuIHRoaXMudmFsdWVzW25hbWVdO1xuXHRcdH1cblx0XHRpZiAodGhpcy5wYXJlbnQpIHtcblx0XHRcdHJldHVybiB0aGlzLnBhcmVudC5nZXQobmFtZSk7XG5cdFx0fVxuXHRcdHRocm93UnVudGltZUVycm9yKGBVbmRlZmluZWQgdmFyaWFibGUgJHtuYW1lfWApO1xuXHR9XG5cblx0c2V0KG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmIChuYW1lIGluIHRoaXMudmFsdWVzKSB7XG5cdFx0XHR0aGlzLnZhbHVlc1tuYW1lXSA9IHZhbHVlO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAodGhpcy5wYXJlbnQpIHtcblx0XHRcdHRoaXMucGFyZW50LnNldChuYW1lLCB2YWx1ZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRocm93UnVudGltZUVycm9yKGBVbmRlZmluZWQgdmFyaWFibGUgJHtuYW1lfWApO1xuXHR9XG5cblx0aGFzKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlc1tuYW1lXSB8fCAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuaGFzKG5hbWUpKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgSW5zdGFuY2Uge1xuXHRfX2NsYXNzRGVmOiBDbGFzc0RlZmluaXRpb247XG5cdF9faW5zdGFuY2VGaWVsZHM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfTtcblx0X19zdGF0aWNGaWVsZHM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfTtcblx0X19uYXRpdmVJbnN0YW5jZTogYW55IHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IoY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbikge1xuXHRcdHRoaXMuX19jbGFzc0RlZiA9IGNsYXNzRGVmO1xuXHRcdHRoaXMuX19pbnN0YW5jZUZpZWxkcyA9IHt9O1xuXHRcdHRoaXMuX19zdGF0aWNGaWVsZHMgPSB7fTtcblx0XHR0aGlzLl9fbmF0aXZlSW5zdGFuY2UgPSBudWxsO1xuXHR9XG5cblx0aW5pdGlhbGl6ZUluc3RhbmNlRmllbGRzKG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogdm9pZCB7XG5cdFx0dGhpcy5fX2NsYXNzRGVmLmluaXRpYWxpemVJbnN0YW5jZUZpZWxkcyh0aGlzLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBNb2RpZmllcnMge1xuXHRvcGVuOiBib29sZWFuID0gZmFsc2U7XG5cdHB1YmxpYzogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlOiBib29sZWFuID0gZmFsc2U7XG5cdHN0YXRpYzogYm9vbGVhbiA9IGZhbHNlO1xuXHRyZWFkb25seTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3t9fSBhdHRyaWJ1dGVzXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihhdHRyaWJ1dGVzOiB7IFtpbmRleDogc3RyaW5nXTogYm9vbGVhbiB9ID0ge30pIHtcblx0XHRmb3IgKGxldCBhdHRyaWJ1dGUgb2YgT2JqZWN0LmtleXMoYXR0cmlidXRlcykpIHtcblx0XHRcdGlmICh0aGlzLmhhc093blByb3BlcnR5KGF0dHJpYnV0ZSkpIHtcblx0XHRcdFx0Y29uc3QgbW9kaWZpZXJzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB0aGlzO1xuXHRcdFx0XHRtb2RpZmllcnNbYXR0cmlidXRlXSA9IGF0dHJpYnV0ZXNbYXR0cmlidXRlXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1cGVyQ2xhc3Mge1xuXHR0eXBlOiBzdHJpbmc7XG5cdG5hbWU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcih0eXBlOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgUmV0dXJuVmFsdWUge1xuXHR2YWx1ZTogYW55O1xuXG5cdGNvbnN0cnVjdG9yKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIENsYXNzRmllbGREZWZpbml0aW9uIHtcblx0bmFtZTogc3RyaW5nO1xuXHR0eXBlOiBzdHJpbmcgfCBudWxsO1xuXHRtb2RpZmllcnM6IE1vZGlmaWVycztcblx0aW5pdGlhbGl6ZXI6IEFTVE5vZGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGU6IHN0cmluZyB8IG51bGwsIG1vZGlmaWVyczogTW9kaWZpZXJzLCBpbml0aWFsaXplcjogQVNUTm9kZSB8IG51bGwgPSBudWxsKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuXHRcdHRoaXMuaW5pdGlhbGl6ZXIgPSBpbml0aWFsaXplcjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xhc3NNZXRob2REZWZpbml0aW9uIHtcblx0bmFtZTogc3RyaW5nO1xuXHRwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW107XG5cdHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbDtcblx0bW9kaWZpZXJzOiBNb2RpZmllcnM7XG5cdGNoaWxkcmVuOiBBU1ROb2RlW107XG5cdGlzQ29uc3RydWN0b3I6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sIHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbCwgbW9kaWZpZXJzOiBNb2RpZmllcnMsIGNoaWxkcmVuOiBBU1ROb2RlW10pIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG5cdFx0dGhpcy5yZXR1cm5UeXBlID0gcmV0dXJuVHlwZTtcblx0XHR0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcblx0XHR0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG5cdFx0dGhpcy5pc0NvbnN0cnVjdG9yID0gbmFtZSA9PT0gR1JBTU1BUi5DT05TVFJVQ1RPUjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xhc3NEZWZpbml0aW9uIHtcblx0bm9kZTogQVNUQ2xhc3NOb2RlO1xuXHRuYW1lOiBzdHJpbmc7XG5cdHN1cGVyQ2xhc3M6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRpbnN0YW5jZUZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXTtcblx0aW5zdGFuY2VNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH07XG5cdHN0YXRpY0ZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXTtcblx0c3RhdGljTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9O1xuXHRjb25zdHJ1Y3Rvck1ldGhvZDogQ2xhc3NNZXRob2REZWZpbml0aW9uIHwgbnVsbCA9IG51bGw7XG5cdG5hdGl2ZUluc3RhbmNlOiBhbnkgPSBudWxsO1xuXHRpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRjbGFzc05vZGU6IEFTVENsYXNzTm9kZSxcblx0XHRzdXBlckNsYXNzOiBzdHJpbmcgfCBudWxsLFxuXHRcdG5hbWU6IHN0cmluZyxcblx0XHRpbnN0YW5jZUZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXSxcblx0XHRpbnN0YW5jZU1ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfSxcblx0XHRzdGF0aWNGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW10sXG5cdFx0c3RhdGljTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9LFxuXHRcdGNvbnN0cnVjdG9yTWV0aG9kOiBDbGFzc01ldGhvZERlZmluaXRpb24gfCBudWxsID0gbnVsbFxuXHQpIHtcblx0XHR0aGlzLm5vZGUgPSBjbGFzc05vZGU7XG5cdFx0dGhpcy5zdXBlckNsYXNzID0gc3VwZXJDbGFzcztcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuaW5zdGFuY2VGaWVsZHMgPSBpbnN0YW5jZUZpZWxkcztcblx0XHR0aGlzLmluc3RhbmNlTWV0aG9kcyA9IGluc3RhbmNlTWV0aG9kcztcblx0XHR0aGlzLnN0YXRpY0ZpZWxkcyA9IHN0YXRpY0ZpZWxkcztcblx0XHR0aGlzLnN0YXRpY01ldGhvZHMgPSBzdGF0aWNNZXRob2RzO1xuXHRcdHRoaXMuY29uc3RydWN0b3JNZXRob2QgPSBjb25zdHJ1Y3Rvck1ldGhvZDtcblx0XHR0aGlzLmlzT3BlbiA9IGNsYXNzTm9kZS5tb2RpZmllcnMub3Blbjtcblx0fVxuXG5cdHN0YXRpYyBmcm9tQVNUKG5vZGU6IEFTVENsYXNzTm9kZSk6IENsYXNzRGVmaW5pdGlvbiB7XG5cdFx0Y29uc3QgaW5zdGFuY2VGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW10gPSBbXTtcblx0XHRjb25zdCBpbnN0YW5jZU1ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfSA9IHt9O1xuXHRcdGNvbnN0IHN0YXRpY0ZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXSA9IFtdO1xuXHRcdGNvbnN0IHN0YXRpY01ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfSA9IHt9O1xuXHRcdGxldCBjb25zdHJ1Y3Rvck1ldGhvZDogQ2xhc3NNZXRob2REZWZpbml0aW9uIHwgbnVsbCA9IG51bGw7XG5cblx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChjaGlsZCBpbnN0YW5jZW9mIEFTVEZpZWxkTm9kZSkge1xuXHRcdFx0XHRjb25zdCBmaWVsZCA9IG5ldyBDbGFzc0ZpZWxkRGVmaW5pdGlvbihcblx0XHRcdFx0XHRjaGlsZC5uYW1lLFxuXHRcdFx0XHRcdGNoaWxkLmZpZWxkVHlwZVxuXHRcdFx0XHRcdFx0PyBjaGlsZC5maWVsZFR5cGUubmFtZVxuXHRcdFx0XHRcdFx0OiBudWxsLFxuXHRcdFx0XHRcdGNoaWxkLm1vZGlmaWVycyxcblx0XHRcdFx0XHRjaGlsZC5pbml0XG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0aWYgKGZpZWxkLm1vZGlmaWVycy5zdGF0aWMpIHtcblx0XHRcdFx0XHRzdGF0aWNGaWVsZHMucHVzaChmaWVsZCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aW5zdGFuY2VGaWVsZHMucHVzaChmaWVsZCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoY2hpbGQgaW5zdGFuY2VvZiBBU1RNZXRob2ROb2RlKSB7XG5cdFx0XHRcdGNvbnN0IG1ldGhvZCA9IG5ldyBDbGFzc01ldGhvZERlZmluaXRpb24oXG5cdFx0XHRcdFx0Y2hpbGQubmFtZSxcblx0XHRcdFx0XHRjaGlsZC5wYXJhbWV0ZXJzLFxuXHRcdFx0XHRcdGNoaWxkLnJldHVyblR5cGUsXG5cdFx0XHRcdFx0Y2hpbGQubW9kaWZpZXJzLFxuXHRcdFx0XHRcdGNoaWxkLmNoaWxkcmVuXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGlmIChtZXRob2QuaXNDb25zdHJ1Y3Rvcikge1xuXHRcdFx0XHRcdGNvbnN0cnVjdG9yTWV0aG9kID0gbWV0aG9kO1xuXHRcdFx0XHR9IGVsc2UgaWYgKG1ldGhvZC5tb2RpZmllcnMuc3RhdGljKSB7XG5cdFx0XHRcdFx0c3RhdGljTWV0aG9kc1ttZXRob2QubmFtZV0gPSBtZXRob2Q7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aW5zdGFuY2VNZXRob2RzW21ldGhvZC5uYW1lXSA9IG1ldGhvZDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVuaGFuZGxlZCBub2RlICR7Y2hpbGQudHlwZX0uYCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBDbGFzc0RlZmluaXRpb24oXG5cdFx0XHRub2RlLFxuXHRcdFx0bm9kZS5zdXBlckNsYXNzPy5uYW1lIHx8IG51bGwsXG5cdFx0XHRub2RlLm5hbWUsXG5cdFx0XHRpbnN0YW5jZUZpZWxkcyxcblx0XHRcdGluc3RhbmNlTWV0aG9kcyxcblx0XHRcdHN0YXRpY0ZpZWxkcyxcblx0XHRcdHN0YXRpY01ldGhvZHMsXG5cdFx0XHRjb25zdHJ1Y3Rvck1ldGhvZFxuXHRcdCk7XG5cdH1cblxuXHRmaW5kTWV0aG9kKG5hbWU6IHN0cmluZyk6IEFTVE1ldGhvZE5vZGUge1xuXHRcdGNvbnN0IG5vZGUgPSB0aGlzLm5vZGVcblx0XHQgICAgICAgICAgICAgICAgIC5jaGlsZHJlblxuXHRcdCAgICAgICAgICAgICAgICAgLmZpbmQobm9kZSA9PiBub2RlLm5hbWUgPT09IG5hbWUpO1xuXG5cdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RNZXRob2ROb2RlKSB7XG5cdFx0XHRyZXR1cm4gbm9kZTtcblx0XHR9XG5cblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgTWV0aG9kICR7bmFtZX0gbm90IGZvdW5kIGluIGNsYXNzICR7dGhpcy5uYW1lfS5gKTtcblx0fVxuXG5cdGNvbnN0cnVjdEVtcHR5SW5zdGFuY2UoKTogSW5zdGFuY2Uge1xuXHRcdHJldHVybiBuZXcgSW5zdGFuY2UodGhpcyk7XG5cdH1cblxuXHRjb25zdHJ1Y3ROZXdJbnN0YW5jZVdpdGhvdXRBcmd1bWVudHMob2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQpOiBJbnN0YW5jZSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0TmV3SW5zdGFuY2UoW10sIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCk7XG5cdH1cblxuXHRjb25zdHJ1Y3ROZXdJbnN0YW5jZShhcmdzOiBBU1ROb2RlW10sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogSW5zdGFuY2Uge1xuXHRcdGNvbnN0IG5ld05vZGUgPSBuZXcgQVNUTmV3Tm9kZShhcmdzLCBuZXcgQVNUVHlwZU5vZGUoQVNUVHlwZU5vZGUuS0lORF9TSU1QTEUsIHRoaXMubmFtZSkpO1xuXG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0SW5zdGFuY2VCeU5ld05vZGUobmV3Tm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50KTtcblx0fVxuXG5cdGNvbnN0cnVjdEluc3RhbmNlQnlOZXdOb2RlKGV4cHI6IEFTVE5ld05vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogSW5zdGFuY2Uge1xuXHRcdGNvbnN0IGluc3RhbmNlID0gdGhpcy5jb25zdHJ1Y3RFbXB0eUluc3RhbmNlKCk7XG5cblx0XHRpbnN0YW5jZS5pbml0aWFsaXplSW5zdGFuY2VGaWVsZHMob2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50KTtcblxuXHRcdGlmICghdGhpcy5jb25zdHJ1Y3Rvck1ldGhvZCkge1xuXHRcdFx0cmV0dXJuIGluc3RhbmNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNvbnN0cnVjdG9yOiBDbGFzc01ldGhvZERlZmluaXRpb24gPSB0aGlzLmNvbnN0cnVjdG9yTWV0aG9kO1xuXHRcdGNvbnN0IGNvbnN0cnVjdG9yRW52ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblxuXHRcdGNvbnN0IGNvbnN0cnVjdG9yQXJncyA9IGV2YWxNZXRob2RBcmd1bWVudHMoXG5cdFx0XHRleHByLFxuXHRcdFx0Y29uc3RydWN0b3IucGFyYW1ldGVycyxcblx0XHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0ZW52aXJvbm1lbnQsXG5cdFx0XHRpbnN0YW5jZVxuXHRcdCk7XG5cblx0XHRjb25zdHJ1Y3RvckVudi5kZWZpbmUoR1JBTU1BUi5USElTLCBpbnN0YW5jZSk7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNvbnN0cnVjdG9yQXJncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgcGFyYW1ldGVyOiBBU1RQYXJhbWV0ZXJOb2RlIHwgdW5kZWZpbmVkID0gY29uc3RydWN0b3IucGFyYW1ldGVyc1tpXTtcblx0XHRcdGlmIChwYXJhbWV0ZXIpIHtcblx0XHRcdFx0Y29uc3RydWN0b3JFbnYuZGVmaW5lKHBhcmFtZXRlci5uYW1lLCBjb25zdHJ1Y3RvckFyZ3NbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgY2hpbGQgb2YgY29uc3RydWN0b3IuY2hpbGRyZW4pIHtcblx0XHRcdGV2YWxOb2RlKGNoaWxkLCBvYmplY3RSZWdpc3RyeSwgY29uc3RydWN0b3JFbnYsIGluc3RhbmNlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaW5zdGFuY2U7XG5cdH1cblxuXHRjb25zdHJ1Y3ROYXRpdmVJbnN0YW5jZUJ5TmV3Tm9kZShleHByOiBBU1ROZXdOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCk6IEluc3RhbmNlIHtcblx0XHRjb25zdCBpbnN0YW5jZTogSW5zdGFuY2UgPSB0aGlzLmNvbnN0cnVjdEVtcHR5SW5zdGFuY2UoKTtcblx0XHRjb25zdCBjb25zdHJ1Y3RvcjogQ2xhc3NNZXRob2REZWZpbml0aW9uIHwgbnVsbCA9IHRoaXMuY29uc3RydWN0b3JNZXRob2Q7XG5cdFx0Y29uc3QgY29uc3RydWN0b3JFbnY6IEVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblxuXHRcdGNvbnN0IGNvbnN0cnVjdG9yQXJnczogYW55W10gPSBldmFsTWV0aG9kQXJndW1lbnRzKFxuXHRcdFx0ZXhwcixcblx0XHRcdGNvbnN0cnVjdG9yXG5cdFx0XHRcdD8gY29uc3RydWN0b3IucGFyYW1ldGVyc1xuXHRcdFx0XHQ6IFtdLFxuXHRcdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0XHRlbnZpcm9ubWVudCxcblx0XHRcdGluc3RhbmNlXG5cdFx0KTtcblxuXHRcdGNvbnN0cnVjdG9yRW52LmRlZmluZShHUkFNTUFSLlRISVMsIGluc3RhbmNlKTtcblxuXHRcdGlmICh0aGlzLm5hdGl2ZUluc3RhbmNlID09PSBudWxsKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcignQ2xhc3MgaGFzIG5vIG5hdGl2ZSBpbnN0YW5jZScpO1xuXHRcdH1cblxuXHRcdGNvbnN0IG5hdGl2ZUluc3RhbmNlID0gbmV3IHRoaXMubmF0aXZlSW5zdGFuY2UoLi4uY29uc3RydWN0b3JBcmdzLm1hcChmcm9tTHlyYVZhbHVlKSk7XG5cdFx0aWYgKG5hdGl2ZUluc3RhbmNlIGluc3RhbmNlb2YgTHlyYU5hdGl2ZU9iamVjdCkge1xuXHRcdFx0aW5zdGFuY2UuX19uYXRpdmVJbnN0YW5jZSA9IG5hdGl2ZUluc3RhbmNlO1xuXHRcdH1cblxuXHRcdHJldHVybiBpbnN0YW5jZTtcblx0fVxuXG5cdGluaXRpYWxpemVJbnN0YW5jZUZpZWxkcyhpbnN0YW5jZTogSW5zdGFuY2UsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogdm9pZCB7XG5cdFx0bGV0IHJhd1ZhbHVlO1xuXHRcdGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5pbnN0YW5jZUZpZWxkcykge1xuXHRcdFx0cmF3VmFsdWUgPSBmaWVsZC5pbml0aWFsaXplclxuXHRcdFx0XHQ/IGV2YWxFeHByZXNzaW9uKGZpZWxkLmluaXRpYWxpemVyLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpXG5cdFx0XHRcdDogbnVsbDtcblxuXHRcdFx0aW5zdGFuY2UuX19pbnN0YW5jZUZpZWxkc1tmaWVsZC5uYW1lXSA9IGNhc3RWYWx1ZShyYXdWYWx1ZSwgZmllbGQudHlwZSk7XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5zdGF0aWNGaWVsZHMpIHtcblx0XHRcdHJhd1ZhbHVlID0gZmllbGQuaW5pdGlhbGl6ZXJcblx0XHRcdFx0PyBldmFsRXhwcmVzc2lvbihmaWVsZC5pbml0aWFsaXplciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50KVxuXHRcdFx0XHQ6IG51bGw7XG5cblx0XHRcdGluc3RhbmNlLl9fc3RhdGljRmllbGRzW2ZpZWxkLm5hbWVdID0gY2FzdFZhbHVlKHJhd1ZhbHVlLCBmaWVsZC50eXBlKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEludGVyZmFjZURlZmluaXRpb24ge1xuXHRub2RlOiBBU1RJbnRlcmZhY2VOb2RlO1xuXHRuYW1lOiBzdHJpbmc7XG5cdHN0YXRpY0ZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXTtcblx0aW5zdGFuY2VNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH07XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0aW50ZXJmYWNlTm9kZTogQVNUSW50ZXJmYWNlTm9kZSxcblx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0c3RhdGljRmllbGRzOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbltdLFxuXHRcdGluc3RhbmNlTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9LFxuXHQpIHtcblx0XHR0aGlzLm5vZGUgPSBpbnRlcmZhY2VOb2RlO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5zdGF0aWNGaWVsZHMgPSBzdGF0aWNGaWVsZHM7XG5cdFx0dGhpcy5pbnN0YW5jZU1ldGhvZHMgPSBpbnN0YW5jZU1ldGhvZHM7XG5cdH1cblxuXHRzdGF0aWMgY29uc3RydWN0RnJvbUFTVChub2RlOiBBU1RJbnRlcmZhY2VOb2RlKTogSW50ZXJmYWNlRGVmaW5pdGlvbiB7XG5cdFx0Y29uc3Qgc3RhdGljRmllbGRzOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbltdID0gW107XG5cdFx0Y29uc3QgaW5zdGFuY2VNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH0gPSB7fTtcblxuXHRcdGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuXHRcdFx0aWYgKGNoaWxkIGluc3RhbmNlb2YgQVNURmllbGROb2RlKSB7XG5cdFx0XHRcdGNvbnN0IGZpZWxkID0gbmV3IENsYXNzRmllbGREZWZpbml0aW9uKFxuXHRcdFx0XHRcdGNoaWxkLm5hbWUsXG5cdFx0XHRcdFx0Y2hpbGQuZmllbGRUeXBlXG5cdFx0XHRcdFx0XHQ/IGNoaWxkLmZpZWxkVHlwZS5uYW1lXG5cdFx0XHRcdFx0XHQ6IG51bGwsXG5cdFx0XHRcdFx0Y2hpbGQubW9kaWZpZXJzLFxuXHRcdFx0XHRcdGNoaWxkLmluaXQgPz8gbnVsbFxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdHN0YXRpY0ZpZWxkcy5wdXNoKGZpZWxkKTtcblx0XHRcdH0gZWxzZSBpZiAoY2hpbGQgaW5zdGFuY2VvZiBBU1RNZXRob2ROb2RlKSB7XG5cdFx0XHRcdGNvbnN0IG1ldGhvZCA9IG5ldyBDbGFzc01ldGhvZERlZmluaXRpb24oXG5cdFx0XHRcdFx0Y2hpbGQubmFtZSxcblx0XHRcdFx0XHRjaGlsZC5wYXJhbWV0ZXJzLFxuXHRcdFx0XHRcdGNoaWxkLnJldHVyblR5cGUsXG5cdFx0XHRcdFx0Y2hpbGQubW9kaWZpZXJzLFxuXHRcdFx0XHRcdGNoaWxkLmNoaWxkcmVuXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0aW5zdGFuY2VNZXRob2RzW21ldGhvZC5uYW1lXSA9IG1ldGhvZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93UnVudGltZUVycm9yKGBVbmhhbmRsZWQgbm9kZSAke2NoaWxkLnR5cGV9LmApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgSW50ZXJmYWNlRGVmaW5pdGlvbihcblx0XHRcdG5vZGUsXG5cdFx0XHRub2RlLm5hbWUsXG5cdFx0XHRzdGF0aWNGaWVsZHMsXG5cdFx0XHRpbnN0YW5jZU1ldGhvZHNcblx0XHQpO1xuXHR9XG59XG5cbiIsCiAgICAiaW1wb3J0IHtQYXJzZXJ9IGZyb20gXCIuL3BhcnNlclwiO1xuaW1wb3J0IHtHUkFNTUFSLCBUb2tlbiwgVG9rZW5UeXBlLCBUWVBFX0VOVU19IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5pbXBvcnQge01vZGlmaWVycywgU3VwZXJDbGFzc30gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7XG5cdEFTVEFubm90YXRpb25Ob2RlLFxuXHRBU1RBcnJheU5vZGUsXG5cdEFTVEFzc2lnbm1lbnROb2RlLFxuXHRBU1RCaW5hcnlOb2RlLFxuXHRBU1RDYWxsTm9kZSxcblx0QVNUQ2xhc3NOb2RlLFxuXHRBU1RFbHNlTm9kZSxcblx0QVNURXhwcmVzc2lvbk5vZGUsXG5cdEFTVEZpZWxkTm9kZSxcblx0QVNURm9yZWFjaE5vZGUsXG5cdEFTVElmTm9kZSxcblx0QVNUSW1wb3J0Tm9kZSxcblx0QVNUSW5kZXhOb2RlLFxuXHRBU1RJbnRlcmZhY2VOb2RlLFxuXHRBU1RMYW1iZGFOb2RlLFxuXHRBU1RNYXRjaENhc2VOb2RlLFxuXHRBU1RNYXRjaE5vZGUsXG5cdEFTVE1lbWJlck5vZGUsXG5cdEFTVE1ldGhvZE5vZGUsXG5cdEFTVE5ld05vZGUsXG5cdEFTVE5vZGUsXG5cdEFTVE5vZGVUeXBlLFxuXHRBU1RQYXJhbWV0ZXJOb2RlLFxuXHRBU1RSZXR1cm5Ob2RlLFxuXHRBU1RUaGVuTm9kZSxcblx0QVNUVHlwZU5vZGUsXG5cdEFTVFVuYXJ5Tm9kZSxcblx0QVNUVmFyaWFibGVOb2RlLFxuXHRBU1RWRG9tTm9kZSxcblx0QVNUVkRvbVRleHROb2RlXG59IGZyb20gXCIuLi9hc3RcIjtcbmltcG9ydCB7dGhyb3dQYXJzZXJFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuaW1wb3J0IHtzcGFuRnJvbX0gZnJvbSBcIi4vcGFyc2VyX3NvdXJjZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWl4ZWRUeXBlKCk6IEFTVFR5cGVOb2RlIHtcblx0cmV0dXJuIG5ldyBBU1RUeXBlTm9kZShBU1RUeXBlTm9kZS5LSU5EX1NJTVBMRSwgVFlQRV9FTlVNLk1JWEVEKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVHlwZShwYXJzZXI6IFBhcnNlcik6IEFTVFR5cGVOb2RlIHtcblx0bGV0IHR5cGU7XG5cblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTikge1xuXHRcdHR5cGUgPSBwYXJzZUxhbWJkYVR5cGUocGFyc2VyKTtcblx0fSBlbHNlIHtcblx0XHR0eXBlID0gcGFyc2VTaW1wbGVPckdlbmVyaWNUeXBlKHBhcnNlcik7XG5cdH1cblxuXHRpZiAocGFyc2VyLmNvbnN1bWVJZk9wZXJhdG9yKEdSQU1NQVIuUVVFU1RJT05fTUFSSykpIHtcblx0XHR0eXBlLm51bGxhYmxlID0gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUeXBlUGFyYW1ldGVycyhwYXJzZXI6IFBhcnNlcik6IHN0cmluZ1tdIHtcblx0Y29uc3QgcGFyYW1ldGVycyA9IFtdO1xuXG5cdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkxFU1NfVEhBTik7XG5cblx0ZG8ge1xuXHRcdGNvbnN0IG5hbWUgPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpLnZhbHVlO1xuXHRcdHBhcmFtZXRlcnMucHVzaChuYW1lKTtcblxuXHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLkNPTU1BKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cGFyc2VyLm5leHQoKTtcblx0fSB3aGlsZSAodHJ1ZSk7XG5cblx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuR1JFQVRFUl9USEFOKTtcblxuXHRyZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU2ltcGxlT3JHZW5lcmljVHlwZShwYXJzZXI6IFBhcnNlcik6IEFTVFR5cGVOb2RlIHtcblx0Y29uc3QgbmFtZVRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RUeXBlTm9kZShBU1RUeXBlTm9kZS5LSU5EX1NJTVBMRSwgbmFtZVRva2VuLnZhbHVlKTtcblxuXHRpZiAocGFyc2VyLmNvbnN1bWVJZk9wZXJhdG9yKEdSQU1NQVIuTEVTU19USEFOKSkge1xuXG5cdFx0bm9kZS5raW5kID0gQVNUVHlwZU5vZGUuS0lORF9HRU5FUklDO1xuXG5cdFx0ZG8ge1xuXHRcdFx0bm9kZS50eXBlQXJndW1lbnRzLnB1c2gocGFyc2VUeXBlKHBhcnNlcikpO1xuXHRcdH0gd2hpbGUgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSk7XG5cblx0XHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5HUkVBVEVSX1RIQU4pO1xuXHR9XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUxhbWJkYVR5cGUocGFyc2VyOiBQYXJzZXIpOiBBU1RUeXBlTm9kZSB7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUVHlwZU5vZGUoQVNUVHlwZU5vZGUuS0lORF9MQU1CREEsICdsYW1iZGEnKTtcblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKTtcblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSkge1xuXHRcdGRvIHtcblx0XHRcdG5vZGUucGFyYW1ldGVyVHlwZXMucHVzaChwYXJzZVR5cGUocGFyc2VyKSk7XG5cdFx0fSB3aGlsZSAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKTtcblx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuQVJST1cpO1xuXG5cdG5vZGUucmV0dXJuVHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQcm9ncmFtKHBhcnNlcjogUGFyc2VyKTogQVNUTm9kZSB7XG5cdGNvbnN0IGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXTtcblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudHlwZSAhPT0gVG9rZW5UeXBlLkVPRikge1xuXHRcdGlmIChwYXJzZXIucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5DT01NRU5UKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBub2RlOiBBU1ROb2RlIHwgbnVsbCA9IHBhcnNlU3RhdGVtZW50KHBhcnNlcik7XG5cdFx0XHRpZiAobm9kZSkge1xuXHRcdFx0XHRjaGlsZHJlbi5wdXNoKG5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuUFJPR1JBTU0sIGNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU3RhdGVtZW50KHBhcnNlcjogUGFyc2VyKTogQVNUTm9kZSB8IG51bGwge1xuXHRpZiAocGFyc2VyLmNvbnN1bWVJZkNvbW1lbnQoKSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0c3dpdGNoIChwYXJzZXIucGVlaygpLnZhbHVlKSB7XG5cdFx0Y2FzZSBHUkFNTUFSLklNUE9SVDoge1xuXHRcdFx0cmV0dXJuIHBhcnNlSW1wb3J0KHBhcnNlcik7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5PUEVOOlxuXHRcdGNhc2UgR1JBTU1BUi5DTEFTUzoge1xuXHRcdFx0cmV0dXJuIHBhcnNlQ2xhc3NEZWNsYXJhdGlvbihwYXJzZXIpO1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuSU5URVJGQUNFOiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VJbnRlcmZhY2VEZWNsYXJhdGlvbihwYXJzZXIpO1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuUkVUVVJOOiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VSZXR1cm5TdGF0ZW1lbnQocGFyc2VyKTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkxFVDoge1xuXHRcdFx0cmV0dXJuIHBhcnNlVmFyaWFibGVEZWNsYXJhdGlvbihwYXJzZXIpO1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuSUY6IHtcblx0XHRcdHJldHVybiBwYXJzZUlmRGVjbGFyYXRpb24ocGFyc2VyKTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLk1BVENIOiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VNYXRjaERlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5GT1JFQUNIOiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VGb3JlYWNoRGVjbGFyYXRpb24ocGFyc2VyKTtcblx0XHR9XG5cdFx0ZGVmYXVsdDoge1xuXHRcdFx0cmV0dXJuIHBhcnNlRXhwcmVzc2lvblN0YXRlbWVudChwYXJzZXIpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZXR1cm5TdGF0ZW1lbnQocGFyc2VyOiBQYXJzZXIpOiBBU1RSZXR1cm5Ob2RlIHtcblx0cGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5SRVRVUk4pO1xuXG5cdGxldCBhcmd1bWVudCA9IG51bGw7XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLlNFTUlDT0xPTikge1xuXHRcdGFyZ3VtZW50ID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5TRU1JQ09MT04pO1xuXG5cdHJldHVybiBuZXcgQVNUUmV0dXJuTm9kZShhcmd1bWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUltcG9ydChwYXJzZXI6IFBhcnNlcik6IEFTVEltcG9ydE5vZGUge1xuXHRwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLklNUE9SVCk7XG5cblx0bGV0IG5hbWVzID0gW107XG5cdGxldCBmcm9tID0gbnVsbDtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQlJBQ0VfT1BFTikge1xuXHRcdG5hbWVzID0gcGFyc2VJbXBvcnRMaXN0KHBhcnNlcik7XG5cdFx0cGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5GUk9NKTtcblx0XHRmcm9tID0gcGFyc2VyLmV4cGVjdFN0cmluZygpLnZhbHVlO1xuXHR9IGVsc2Uge1xuXHRcdG5hbWVzLnB1c2gocGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKS52YWx1ZSk7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5TRU1JQ09MT04pO1xuXG5cdHJldHVybiBuZXcgQVNUSW1wb3J0Tm9kZShuYW1lcywgZnJvbSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUltcG9ydExpc3QocGFyc2VyOiBQYXJzZXIpOiBzdHJpbmdbXSB7XG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX09QRU4pO1xuXG5cdGNvbnN0IG5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0Y29uc3QgbmFtZVRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblxuXHRcdG5hbWVzLnB1c2gobmFtZVRva2VuLnZhbHVlKTtcblxuXHRcdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGJyZWFrO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfQ0xPU0UpO1xuXG5cdHJldHVybiBuYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ2xhc3NEZWNsYXJhdGlvbihwYXJzZXI6IFBhcnNlcik6IEFTVENsYXNzTm9kZSB7XG5cdGNvbnN0IGFubm90YXRpb25zID0gcGFyc2VBbm5vdGF0aW9ucyhwYXJzZXIpO1xuXHRjb25zdCBtb2RpZmllcnMgPSBwYXJzZU1vZGlmaWVycyhwYXJzZXIsIFtHUkFNTUFSLk9QRU5dKTtcblxuXHRjb25zdCBjbGFzc1Rva2VuID0gcGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5DTEFTUyk7XG5cdGNvbnN0IG5hbWVUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cblx0bGV0IHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5MRVNTX1RIQU4pIHtcblx0XHR0eXBlUGFyYW1ldGVycyA9IHBhcnNlVHlwZVBhcmFtZXRlcnMocGFyc2VyKTtcblx0fVxuXG5cdGxldCBzdXBlckNsYXNzID0gbnVsbDtcblx0aWYgKHBhcnNlci5jb25zdW1lSWZLZXl3b3JkKEdSQU1NQVIuRVhURU5EUykpIHtcblx0XHRzdXBlckNsYXNzID0gbmV3IFN1cGVyQ2xhc3MoXG5cdFx0XHRBU1ROb2RlVHlwZS5JREVOVElGSUVSLFxuXHRcdFx0cGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKS52YWx1ZVxuXHRcdCk7XG5cdH1cblxuXHRsZXQgaW1wbGVtZW50c0ludGVyZmFjZXMgPSBbXTtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuSU1QTEVNRU5UUykge1xuXHRcdHBhcnNlci5uZXh0KCk7XG5cblx0XHRkbyB7XG5cdFx0XHRjb25zdCBpbnRlcmZhY2VUeXBlID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cdFx0XHRpbXBsZW1lbnRzSW50ZXJmYWNlcy5wdXNoKGludGVyZmFjZVR5cGUpO1xuXHRcdH0gd2hpbGUgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSk7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9PUEVOKTtcblxuXHRjb25zdCBjaGlsZHJlbjogQVNUTm9kZVtdID0gW107XG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLkJSQUNFX0NMT1NFKSB7XG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLkNPTU1FTlQpIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBtZW1iZXI6IEFTVE5vZGUgfCBudWxsID0gcGFyc2VDbGFzc01lbWJlcihwYXJzZXIpO1xuXHRcdGlmIChtZW1iZXIgPT09IG51bGwpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjaGlsZHJlbi5wdXNoKG1lbWJlcik7XG5cdH1cblxuXHRjb25zdCBicmFjZUNsb3NlVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9DTE9TRSk7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RDbGFzc05vZGUoXG5cdFx0bmFtZVRva2VuLnZhbHVlLFxuXHRcdGFubm90YXRpb25zLFxuXHRcdG1vZGlmaWVycyxcblx0XHR0eXBlUGFyYW1ldGVycyxcblx0XHRpbXBsZW1lbnRzSW50ZXJmYWNlcyxcblx0XHRzdXBlckNsYXNzLFxuXHRcdGNoaWxkcmVuXG5cdCk7XG5cblx0bm9kZS5zcGFuID0gc3BhbkZyb20oY2xhc3NUb2tlbiwgYnJhY2VDbG9zZVRva2VuKTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUludGVyZmFjZURlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUSW50ZXJmYWNlTm9kZSB7XG5cdGNvbnN0IGFubm90YXRpb25zID0gcGFyc2VBbm5vdGF0aW9ucyhwYXJzZXIpO1xuXHRjb25zdCBtb2RpZmllcnMgPSBwYXJzZU1vZGlmaWVycyhwYXJzZXIsIFtdKTsgLy8gaW50ZXJmYWNlcyBzaW5kIGltcGxpeml0IHB1YmxpY1xuXG5cdGNvbnN0IGludGVyZmFjZVRva2VuID0gcGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5JTlRFUkZBQ0UpO1xuXHRjb25zdCBuYW1lVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXG5cdGxldCB0eXBlUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuTEVTU19USEFOKSB7XG5cdFx0dHlwZVBhcmFtZXRlcnMgPSBwYXJzZVR5cGVQYXJhbWV0ZXJzKHBhcnNlcik7XG5cdH1cblxuXHRsZXQgZXh0ZW5kc0ludGVyZmFjZXMgPSBbXTtcblx0aWYgKHBhcnNlci5jb25zdW1lSWZLZXl3b3JkKEdSQU1NQVIuRVhURU5EUykpIHtcblx0XHRkbyB7XG5cdFx0XHRleHRlbmRzSW50ZXJmYWNlcy5wdXNoKHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCkudmFsdWUpO1xuXHRcdH0gd2hpbGUgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSk7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9PUEVOKTtcblxuXHRjb25zdCBjaGlsZHJlbjogQVNUTm9kZVtdID0gW107XG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLkJSQUNFX0NMT1NFKSB7XG5cdFx0aWYgKHBhcnNlci5jb25zdW1lSWZDb21tZW50KCkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IG1lbWJlciA9IHBhcnNlQ2xhc3NNZW1iZXIocGFyc2VyKTtcblx0XHRpZiAobWVtYmVyID09PSBudWxsKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAobWVtYmVyIGluc3RhbmNlb2YgQVNURmllbGROb2RlICYmICFtZW1iZXIubW9kaWZpZXJzLnN0YXRpYykge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcignSW50ZXJmYWNlIGZpZWxkcyBtdXN0IGJlIHN0YXRpYy4nKTtcblx0XHR9XG5cblx0XHRpZiAobWVtYmVyIGluc3RhbmNlb2YgQVNUTWV0aG9kTm9kZSAmJiBtZW1iZXIuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcignSW50ZXJmYWNlIG1ldGhvZHMgbXVzdCBub3QgaGF2ZSBhIGJvZHkuJyk7XG5cdFx0fVxuXG5cdFx0Y2hpbGRyZW4ucHVzaChtZW1iZXIpO1xuXHR9XG5cblx0Y29uc3QgYnJhY2VDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfQ0xPU0UpO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUSW50ZXJmYWNlTm9kZShcblx0XHRuYW1lVG9rZW4udmFsdWUsXG5cdFx0YW5ub3RhdGlvbnMsXG5cdFx0bW9kaWZpZXJzLFxuXHRcdHR5cGVQYXJhbWV0ZXJzLFxuXHRcdGV4dGVuZHNJbnRlcmZhY2VzLFxuXHRcdGNoaWxkcmVuXG5cdCk7XG5cblx0bm9kZS5zcGFuID0gc3BhbkZyb20oaW50ZXJmYWNlVG9rZW4sIGJyYWNlQ2xvc2VUb2tlbik7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBbm5vdGF0aW9ucyhwYXJzZXI6IFBhcnNlcik6IEFTVEFubm90YXRpb25Ob2RlW10ge1xuXHRjb25zdCBhbm5vdGF0aW9ucyA9IFtdO1xuXG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5BTk5PVEFUSU9OKSB7XG5cdFx0YW5ub3RhdGlvbnMucHVzaChwYXJzZUFubm90YXRpb24ocGFyc2VyKSk7XG5cdH1cblxuXHRyZXR1cm4gYW5ub3RhdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUFubm90YXRpb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RBbm5vdGF0aW9uTm9kZSB7XG5cdGNvbnN0IHRva2VuID0gcGFyc2VyLmV4cGVjdEFubm90YXRpb24oKTtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RBbm5vdGF0aW9uTm9kZSh0b2tlbi52YWx1ZSk7XG5cblx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pKSB7XG5cdFx0d2hpbGUgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpIHtcblx0XHRcdGNvbnN0IGtleSA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCkudmFsdWU7XG5cdFx0XHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5BU1NJR04pO1xuXG5cdFx0XHRjb25zdCB2YWx1ZSA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHRcdFx0bm9kZS5wcm9wZXJ0aWVzLnNldChrZXksIHZhbHVlKTtcblxuXHRcdFx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQ09NTUEpIHtcblx0XHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cdH1cblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTW9kaWZpZXJzKHBhcnNlcjogUGFyc2VyLCBhbGxvd2VkOiBzdHJpbmdbXSk6IE1vZGlmaWVycyB7XG5cdGNvbnN0IG1vZGlmaWVyczogeyBbaW5kZXg6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuXG5cdGFsbG93ZWQuZm9yRWFjaChtb2RpZmllciA9PiBtb2RpZmllcnNbbW9kaWZpZXJdID0gZmFsc2UpO1xuXG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5LRVlXT1JEICYmIGFsbG93ZWQuaW5jbHVkZXMocGFyc2VyLnBlZWsoKS52YWx1ZSkpIHtcblx0XHRjb25zdCBtb2RpZmllciA9IHBhcnNlci5uZXh0KCkudmFsdWU7XG5cblx0XHRpZiAobW9kaWZpZXJzW21vZGlmaWVyXSkge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcihgRHVwbGljYXRlIG1vZGlmaWVyOiAke21vZGlmaWVyfWApO1xuXHRcdH1cblxuXHRcdG1vZGlmaWVyc1ttb2RpZmllcl0gPSB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIG5ldyBNb2RpZmllcnMobW9kaWZpZXJzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVycyhwYXJzZXI6IFBhcnNlcik6IEFTVFBhcmFtZXRlck5vZGVbXSB7XG5cdGNvbnN0IHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSA9IFtdO1xuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKSB7XG5cdFx0cmV0dXJuIHBhcmFtZXRlcnM7XG5cdH1cblxuXHRkbyB7XG5cdFx0Y29uc3QgbmFtZVRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblx0XHRsZXQgdHlwZSA9IG51bGw7XG5cdFx0bGV0IGRlZmF1bHRWYWx1ZSA9IG51bGw7XG5cblx0XHRsZXQgdHlwZVRva2VuID0gbnVsbDtcblx0XHRsZXQgZGVmYXVsdFZhbHVlVG9rZW4gPSBudWxsO1xuXG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQ09MT04pIHtcblx0XHRcdHR5cGVUb2tlbiA9IHBhcnNlci5uZXh0KCk7XG5cdFx0XHR0eXBlID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cdFx0fVxuXG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQVNTSUdOKSB7XG5cdFx0XHRkZWZhdWx0VmFsdWVUb2tlbiA9IHBhcnNlci5uZXh0KCk7XG5cdFx0XHRkZWZhdWx0VmFsdWUgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0XHR9XG5cblx0XHRjb25zdCBub2RlID0gbmV3IEFTVFBhcmFtZXRlck5vZGUobmFtZVRva2VuLnZhbHVlLCB0eXBlLCBkZWZhdWx0VmFsdWUpO1xuXHRcdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHR5cGVUb2tlbiB8fCBuYW1lVG9rZW4sIGRlZmF1bHRWYWx1ZVRva2VuIHx8IG5hbWVUb2tlbik7XG5cblx0XHRwYXJhbWV0ZXJzLnB1c2gobm9kZSk7XG5cdH0gd2hpbGUgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSk7XG5cblx0cmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNsYXNzTWVtYmVyKHBhcnNlcjogUGFyc2VyKTogQVNUTm9kZSB8IG51bGwge1xuXHRjb25zdCBzdGFydFRva2VuID0gcGFyc2VyLnBlZWsoKTtcblxuXHRjb25zdCBhbm5vdGF0aW9ucyA9IHBhcnNlQW5ub3RhdGlvbnMocGFyc2VyKTtcblx0Y29uc3QgbW9kaWZpZXJzID0gcGFyc2VNb2RpZmllcnMoXG5cdFx0cGFyc2VyLFxuXHRcdFtcblx0XHRcdEdSQU1NQVIuUFVCTElDLFxuXHRcdFx0R1JBTU1BUi5QUklWQVRFLFxuXHRcdFx0R1JBTU1BUi5TVEFUSUMsXG5cdFx0XHRHUkFNTUFSLlJFQURPTkxZXG5cdFx0XVxuXHQpO1xuXG5cdGNvbnN0IG5hbWVUb2tlbiA9IHBhcnNlci5leHBlY3RPbmVPZihbVG9rZW5UeXBlLklERU5USUZJRVIsIFRva2VuVHlwZS5LRVlXT1JEXSk7XG5cblx0bGV0IGZpZWxkVHlwZSA9IG51bGw7XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkNPTE9OKSB7XG5cdFx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTE9OKSkge1xuXHRcdFx0ZmllbGRUeXBlID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cdFx0fVxuXHR9XG5cblx0bGV0IGluaXQgPSBudWxsO1xuXHRpZiAocGFyc2VyLmNvbnN1bWVJZk9wZXJhdG9yKEdSQU1NQVIuQVNTSUdOKSkge1xuXHRcdGluaXQgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0fVxuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLlNFTUlDT0xPTikge1xuXHRcdGlmICghbW9kaWZpZXJzLnB1YmxpYyAmJiAhbW9kaWZpZXJzLnByaXZhdGUpIHtcblx0XHRcdG1vZGlmaWVycy5wcml2YXRlID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRjb25zdCBzZW1pY29sb25Ub2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlNFTUlDT0xPTik7XG5cblx0XHRjb25zdCBub2RlID0gbmV3IEFTVEZpZWxkTm9kZShuYW1lVG9rZW4udmFsdWUsIG1vZGlmaWVycywgZmllbGRUeXBlLCBpbml0KTtcblx0XHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBzZW1pY29sb25Ub2tlbik7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRsZXQgdHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdID0gW107XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkxFU1NfVEhBTikge1xuXHRcdHR5cGVQYXJhbWV0ZXJzID0gcGFyc2VUeXBlUGFyYW1ldGVycyhwYXJzZXIpO1xuXHR9XG5cblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTikge1xuXHRcdGlmICghbW9kaWZpZXJzLnB1YmxpYyAmJiAhbW9kaWZpZXJzLnByaXZhdGUpIHtcblx0XHRcdG1vZGlmaWVycy5wdWJsaWMgPSB0cnVlO1xuXHRcdH1cblxuXHRcdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pO1xuXHRcdGNvbnN0IHBhcmFtZXRlcnMgPSBwYXJzZVBhcmFtZXRlcnMocGFyc2VyKTtcblx0XHRjb25zdCBwYXJlbnRoZXNlc0Nsb3NlVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cblx0XHRsZXQgcmV0dXJuVHlwZSA9IG51bGw7XG5cdFx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTE9OKSkge1xuXHRcdFx0cmV0dXJuVHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNoaWxkcmVuOiBBU1ROb2RlW10gPSBwYXJzZUJsb2NrKHBhcnNlcik7XG5cblx0XHRjb25zdCBub2RlID0gbmV3IEFTVE1ldGhvZE5vZGUoXG5cdFx0XHRuYW1lVG9rZW4udmFsdWUsXG5cdFx0XHRuYW1lVG9rZW4udmFsdWUgPT09IEdSQU1NQVIuQ09OU1RSVUNUT1IgPyBBU1ROb2RlVHlwZS5DT05TVFJVQ1RPUiA6IEFTVE5vZGVUeXBlLk1FVEhPRCxcblx0XHRcdGFubm90YXRpb25zLFxuXHRcdFx0bW9kaWZpZXJzLFxuXHRcdFx0dHlwZVBhcmFtZXRlcnMsXG5cdFx0XHRwYXJhbWV0ZXJzLFxuXHRcdFx0cmV0dXJuVHlwZSxcblx0XHRcdGNoaWxkcmVuXG5cdFx0KTtcblxuXHRcdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIHBhcmVudGhlc2VzQ2xvc2VUb2tlbik7XG5cblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdHRocm93UGFyc2VyRXJyb3IoYEludmFsaWQgY2xhc3MgbWVtYmVyOiAke25hbWVUb2tlbi52YWx1ZX1gKTtcblxuXHRyZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQmxvY2socGFyc2VyOiBQYXJzZXIpOiBBU1ROb2RlW10ge1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5TRU1JQ09MT04pIHtcblx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX09QRU4pO1xuXG5cdGNvbnN0IGNoaWxkcmVuID0gW107XG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLkJSQUNFX0NMT1NFKSB7XG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLkNPTU1FTlQpIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y29uc3QgY2hpbGQ6IEFTVE5vZGUgfCBudWxsID0gcGFyc2VTdGF0ZW1lbnQocGFyc2VyKTtcblx0XHRpZiAoY2hpbGQpIHtcblx0XHRcdGNoaWxkcmVuLnB1c2goY2hpbGQpO1xuXHRcdH1cblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX0NMT1NFKTtcblxuXHRyZXR1cm4gY2hpbGRyZW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVZhcmlhYmxlRGVjbGFyYXRpb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RWYXJpYWJsZU5vZGUge1xuXHRjb25zdCBsZXRUb2tlbiA9IHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuTEVUKTtcblx0Y29uc3QgbmFtZVRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblxuXHRsZXQgdHlwZUFubm90YXRpb24gPSBudWxsO1xuXHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09MT04pKSB7XG5cdFx0dHlwZUFubm90YXRpb24gPSBwYXJzZVR5cGUocGFyc2VyKTtcblx0fVxuXG5cdGxldCBpbml0ID0gbnVsbDtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQVNTSUdOKSB7XG5cdFx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuQVNTSUdOKTtcblx0XHRpbml0ID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdH1cblxuXHRjb25zdCBzZW1pY29sb25Ub2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlNFTUlDT0xPTik7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RWYXJpYWJsZU5vZGUobmFtZVRva2VuLnZhbHVlLCB0eXBlQW5ub3RhdGlvbiwgaW5pdCk7XG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKGxldFRva2VuLCBzZW1pY29sb25Ub2tlbik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUlmRGVjbGFyYXRpb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RJZk5vZGUge1xuXHRjb25zdCBzdGFydFRva2VuID0gcGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5JRik7XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTik7XG5cdGNvbnN0IGNvbmRpdGlvbiA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHRjb25zdCBwYXJlbnRoZXNlc0Nsb3NlVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RJZk5vZGUoY29uZGl0aW9uLCBuZXcgQVNUVGhlbk5vZGUocGFyc2VCbG9jayhwYXJzZXIpKSk7XG5cblx0aWYgKHBhcnNlci5jb25zdW1lSWZLZXl3b3JkKEdSQU1NQVIuRUxTRSkpIHtcblx0XHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5JRikge1xuXHRcdFx0bm9kZS5lbHNlID0gcGFyc2VJZkRlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5vZGUuZWxzZSA9IG5ldyBBU1RFbHNlTm9kZShwYXJzZUJsb2NrKHBhcnNlcikpO1xuXHRcdH1cblx0fVxuXG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIHBhcmVudGhlc2VzQ2xvc2VUb2tlbik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU1hdGNoRGVjbGFyYXRpb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RNYXRjaE5vZGUge1xuXHRjb25zdCBzdGFydFRva2VuID0gcGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5NQVRDSCk7XG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pO1xuXG5cdGNvbnN0IGV4cHJlc3Npb24gPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX09QRU4pO1xuXG5cdGNvbnN0IG1hdGNoQ2FzZXM6IEFTVE1hdGNoQ2FzZU5vZGVbXSA9IFtdO1xuXHRsZXQgZGVmYXVsdENhc2U6IEFTVE1hdGNoQ2FzZU5vZGUgfCBudWxsID0gbnVsbDtcblxuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5CUkFDRV9DTE9TRSkge1xuXHRcdGNvbnN0IG1hdGNoQ2FzZTogQVNUTWF0Y2hDYXNlTm9kZSA9IHBhcnNlTWF0Y2hDYXNlRGVjbGFyYXRpb24ocGFyc2VyKTtcblx0XHRpZiAobWF0Y2hDYXNlLnRlc3QgPT09IG51bGwpIHtcblx0XHRcdGRlZmF1bHRDYXNlID0gbWF0Y2hDYXNlO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdG1hdGNoQ2FzZXMucHVzaChtYXRjaENhc2UpO1xuXHR9XG5cblx0Y29uc3QgYnJhY2VDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfQ0xPU0UpO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUTWF0Y2hOb2RlKGV4cHJlc3Npb24sIG1hdGNoQ2FzZXMsIGRlZmF1bHRDYXNlKTtcblx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgYnJhY2VDbG9zZVRva2VuKTtcblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTWF0Y2hDYXNlRGVjbGFyYXRpb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RNYXRjaENhc2VOb2RlIHtcblx0Y29uc3QgY2FzZU5vZGUgPSBuZXcgQVNUTWF0Y2hDYXNlTm9kZSgpO1xuXG5cdGlmIChwYXJzZXIuY29uc3VtZUlmS2V5d29yZChHUkFNTUFSLkRFRkFVTFQpKSB7XG5cdFx0Y2FzZU5vZGUudGVzdCA9IG51bGw7XG5cdH0gZWxzZSB7XG5cdFx0Y2FzZU5vZGUudGVzdCA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQ09MT04pO1xuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkJSQUNFX09QRU4pIHtcblx0XHRjYXNlTm9kZS5jaGlsZHJlbiA9IHBhcnNlQmxvY2socGFyc2VyKTtcblx0fSBlbHNlIHtcblx0XHRjb25zdCBjaGlsZDogQVNUTm9kZSB8IG51bGwgPSBwYXJzZVN0YXRlbWVudChwYXJzZXIpO1xuXHRcdGlmIChjaGlsZCkge1xuXHRcdFx0Y2FzZU5vZGUuY2hpbGRyZW4ucHVzaChjaGlsZClcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY2FzZU5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUZvcmVhY2hEZWNsYXJhdGlvbihwYXJzZXI6IFBhcnNlcik6IEFTVEZvcmVhY2hOb2RlIHtcblx0Y29uc3Qgc3RhcnRUb2tlbiA9IHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuRk9SRUFDSCk7XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTik7XG5cblx0Y29uc3QgaXRlcmF0b3JUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cdGNvbnN0IGl0ZXJhdG9yID0gaXRlcmF0b3JUb2tlbi52YWx1ZTtcblxuXHRwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLklOKTtcblxuXHRjb25zdCBpdGVyYWJsZSA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXG5cdGNvbnN0IHBhcmVudGhlc2VzQ2xvc2VUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVEZvcmVhY2hOb2RlKGl0ZXJhdG9yLCBpdGVyYWJsZSwgcGFyc2VCbG9jayhwYXJzZXIpKTtcblx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgcGFyZW50aGVzZXNDbG9zZVRva2VuKTtcblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQXJyYXkocGFyc2VyOiBQYXJzZXIpOiBBU1RBcnJheU5vZGUge1xuXHRjb25zdCBzdGFydFRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfT1BFTik7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RBcnJheU5vZGUoKTtcblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9DTE9TRSkge1xuXHRcdGRvIHtcblx0XHRcdG5vZGUuZWxlbWVudHMucHVzaChwYXJzZUV4cHJlc3Npb24ocGFyc2VyKSk7XG5cdFx0fSB3aGlsZSAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKTtcblx0fVxuXG5cdGNvbnN0IGJyYWNrZXRTcXVhcmVDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfQ0xPU0UpO1xuXG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIGJyYWNrZXRTcXVhcmVDbG9zZVRva2VuKTtcblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTGFtYmRhKHBhcnNlcjogUGFyc2VyKTogQVNUTGFtYmRhTm9kZSB7XG5cdGNvbnN0IHN0YXJ0VG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9PUEVOKTtcblxuXHRjb25zdCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10gPSBbXTtcblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQVJST1cpIHtcblx0XHRjb25zdCBuYW1lID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKS52YWx1ZTtcblx0XHRsZXQgdHlwZSA9IG51bGw7XG5cdFx0bGV0IGRlZmF1bHRWYWx1ZSA9IG51bGw7XG5cblx0XHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09MT04pKSB7XG5cdFx0XHR0eXBlID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cdFx0fVxuXG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQVNTSUdOKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdFx0ZGVmYXVsdFZhbHVlID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdFx0fVxuXG5cdFx0cGFyYW1ldGVycy5wdXNoKG5ldyBBU1RQYXJhbWV0ZXJOb2RlKG5hbWUsIHR5cGUsIGRlZmF1bHRWYWx1ZSkpO1xuXG5cdFx0cGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuQVJST1cpO1xuXG5cdGxldCByZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSA9IGNyZWF0ZU1peGVkVHlwZSgpO1xuXHRpZiAocGFyc2VyLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuSURFTlRJRklFUikge1xuXHRcdHJldHVyblR5cGUgPSBwYXJzZVR5cGUocGFyc2VyKTtcblx0XHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5DT0xPTikge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuVHlwZSA9IGNyZWF0ZU1peGVkVHlwZSgpO1xuXHRcdFx0cGFyc2VyLnJld2luZCgpO1xuXHRcdH1cblx0fVxuXG5cdGxldCBjaGlsZHJlbiA9IFtdO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5CUkFDRV9PUEVOKSB7XG5cdFx0Y2hpbGRyZW4gPSBwYXJzZUJsb2NrKHBhcnNlcik7XG5cdH0gZWxzZSB7XG5cdFx0Y2hpbGRyZW4ucHVzaChwYXJzZUV4cHJlc3Npb24ocGFyc2VyKSk7XG5cdH1cblxuXHRjb25zdCBicmFjZUNsb3NlVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9DTE9TRSk7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RMYW1iZGFOb2RlKHBhcmFtZXRlcnMsIHJldHVyblR5cGUsIGNoaWxkcmVuKTtcblx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgYnJhY2VDbG9zZVRva2VuKTtcblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvb2tzTGlrZUxhbWJkYShwYXJzZXI6IFBhcnNlcik6IGJvb2xlYW4ge1xuXHRjb25zdCBzdGFydCA9IHBhcnNlci5wb3NpdGlvbigpO1xuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLkJSQUNFX09QRU4pIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRwYXJzZXIubmV4dCgpO1xuXG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0cGFyc2VyLm5leHQoKTtcblx0XHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09MT04pKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdH1cblx0XHRpZiAoIXBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgaXNMYW1iZGEgPSBwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkFSUk9XO1xuXHRwYXJzZXIuc2Vla0F0KHN0YXJ0KVxuXHRyZXR1cm4gaXNMYW1iZGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUV4cHJlc3Npb25TdGF0ZW1lbnQocGFyc2VyOiBQYXJzZXIpOiBBU1RFeHByZXNzaW9uTm9kZSB7XG5cdGNvbnN0IGV4cHIgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5TRU1JQ09MT04pO1xuXG5cdHJldHVybiBuZXcgQVNURXhwcmVzc2lvbk5vZGUoZXhwcik7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRXhwcmVzc2lvbihwYXJzZXI6IFBhcnNlciwgcHJlY2VkZW5jZTogbnVtYmVyID0gMCk6IEFTVE5vZGUge1xuXHRsZXQgZXhwciA9IHBhcnNlUG9zdGZpeChwYXJzZXIsIHBhcnNlVW5hcnkocGFyc2VyKSk7XG5cblx0d2hpbGUgKHRydWUpIHtcblx0XHRjb25zdCB0b2tlbiA9IHBhcnNlci5wZWVrKCk7XG5cdFx0aWYgKCF0b2tlbikge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0bGV0IHRva2VuUHJlY2VkZW5jZSA9IGxvb2t1cFByZWNlZGVuY2UodG9rZW4pO1xuXHRcdGlmICh0b2tlblByZWNlZGVuY2UgPCBwcmVjZWRlbmNlKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuQVNTSUdOKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdFx0ZXhwciA9IG5ldyBBU1RBc3NpZ25tZW50Tm9kZShleHByLCBwYXJzZUV4cHJlc3Npb24ocGFyc2VyLCB0b2tlblByZWNlZGVuY2UpKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChHUkFNTUFSLk1BVEhfT1BFUkFUT1JTLmluY2x1ZGVzKHRva2VuLnZhbHVlKVxuXHRcdFx0fHwgR1JBTU1BUi5MT0dJQ19PUEVSQVRPUlMuaW5jbHVkZXModG9rZW4udmFsdWUpKSB7XG5cdFx0XHRjb25zdCBzdGFydFRva2VuID0gcGFyc2VyLm5leHQoKTtcblx0XHRcdGNvbnN0IHJpZ2h0ID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlciwgdG9rZW5QcmVjZWRlbmNlICsgMSk7XG5cdFx0XHRjb25zdCBlbmRUb2tlbiA9IHBhcnNlci5wZWVrKCk7XG5cblx0XHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUQmluYXJ5Tm9kZShleHByLCByaWdodCwgdG9rZW4udmFsdWUpO1xuXHRcdFx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgZW5kVG9rZW4pO1xuXHRcdFx0ZXhwciA9IG5vZGU7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRicmVhaztcblx0fVxuXG5cdHJldHVybiBleHByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VWRG9tRXhwcmVzc2lvbihwYXJzZXI6IFBhcnNlcik6IEFTVFZEb21Ob2RlIHtcblx0cGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5WRE9NKTtcblx0cmV0dXJuIHBhcnNlVkRvbUVsZW1lbnQocGFyc2VyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVkRvbUVsZW1lbnQocGFyc2VyOiBQYXJzZXIpOiBBU1RWRG9tTm9kZSB7XG5cdHBhcnNlci5jb25zdW1lSWZUZXh0KCk7XG5cblx0Y29uc3Qgc3RhcnRUb2tlbjogVG9rZW4gPSBwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5MRVNTX1RIQU4pO1xuXHRjb25zdCB0YWdUb2tlbjogVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXHRjb25zdCB0YWc6IHN0cmluZyA9IHRhZ1Rva2VuLnZhbHVlO1xuXG5cdHBhcnNlci5jb25zdW1lSWZUZXh0KCk7XG5cblx0Y29uc3QgcHJvcHMgPSBuZXcgTWFwPHN0cmluZywgQVNUTm9kZT4oKTtcblx0d2hpbGUgKCFwYXJzZXIucGVla0lzKEdSQU1NQVIuR1JFQVRFUl9USEFOKSAmJiAhcGFyc2VyLnBlZWtJcyhHUkFNTUFSLlhNTF9DTE9TRV9UQUcpKSB7XG5cdFx0Y29uc3QgbmFtZVRva2VuOiBUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cdFx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuQVNTSUdOKTtcblxuXHRcdGxldCB2YWx1ZTogQVNUTm9kZTtcblx0XHRpZiAocGFyc2VyLnBlZWtJcyhHUkFNTUFSLkJSQUNFX09QRU4pKSB7XG5cdFx0XHR2YWx1ZSA9IHBhcnNlTGFtYmRhKHBhcnNlcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhbHVlID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdFx0fVxuXG5cdFx0cHJvcHMuc2V0KG5hbWVUb2tlbi52YWx1ZSwgdmFsdWUpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuR1JFQVRFUl9USEFOKTtcblxuXHRjb25zdCBjaGlsZHJlbjogQVNUTm9kZVtdID0gW107XG5cdHdoaWxlICghcGFyc2VyLnBlZWtJcyhHUkFNTUFSLlhNTF9PUEVOX0NMT1NFX1RBRykpIHtcblxuXHRcdGlmIChwYXJzZXIucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5PUEVSQVRPUikge1xuXHRcdFx0Y2hpbGRyZW4ucHVzaChwYXJzZVZEb21FbGVtZW50KHBhcnNlcikpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y2hpbGRyZW4ucHVzaChwYXJzZVZEb21UZXh0KHBhcnNlcikpO1xuXHRcdFxuXHR9XG5cblx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuWE1MX09QRU5fQ0xPU0VfVEFHKTtcblx0cGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuR1JFQVRFUl9USEFOKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVFZEb21Ob2RlKHRhZywgcHJvcHMsIGNoaWxkcmVuKTtcblx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgcGFyc2VyLnBlZWsoKSk7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VWRG9tVGV4dChwYXJzZXI6IFBhcnNlcik6IEFTVFZEb21UZXh0Tm9kZSB7XG5cdGNvbnN0IHRva2VuOiBUb2tlbiA9IHBhcnNlci5leHBlY3RPbmVPZihcblx0XHRbXG5cdFx0XHRUb2tlblR5cGUuSURFTlRJRklFUixcblx0XHRcdFRva2VuVHlwZS5PUEVSQVRPUixcblx0XHRcdFRva2VuVHlwZS5LRVlXT1JELFxuXHRcdFx0VG9rZW5UeXBlLlRFWFRcblx0XHRdXG5cdCk7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUVkRvbVRleHROb2RlKHRva2VuLnZhbHVlKTtcblx0bm9kZS5zcGFuID0gc3BhbkZyb20odG9rZW4sIHRva2VuKTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUFyZ3VtZW50cyhwYXJzZXI6IFBhcnNlcik6IEFTVE5vZGVbXSB7XG5cdGNvbnN0IGFyZ3M6IEFTVE5vZGVbXSA9IFtdO1xuXG5cdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSkpIHtcblx0XHRyZXR1cm4gYXJncztcblx0fVxuXG5cdGFyZ3MucHVzaChwYXJzZUV4cHJlc3Npb24ocGFyc2VyKSk7XG5cblx0d2hpbGUgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSkge1xuXHRcdGFyZ3MucHVzaChwYXJzZUV4cHJlc3Npb24ocGFyc2VyKSk7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cdHJldHVybiBhcmdzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VVbmFyeShwYXJzZXI6IFBhcnNlcik6IEFTVE5vZGUgfCBBU1RVbmFyeU5vZGUge1xuXHRjb25zdCB0b2tlbjogVG9rZW4gPSBwYXJzZXIucGVlaygpO1xuXG5cdGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuS0VZV09SRCAmJiB0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5WRE9NKSB7XG5cdFx0cmV0dXJuIHBhcnNlVkRvbUV4cHJlc3Npb24ocGFyc2VyKTtcblx0fVxuXG5cdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5FWENMQU1BVElPTl9NQVJLKSB7XG5cdFx0cGFyc2VyLm5leHQoKTtcblxuXHRcdGNvbnN0IHVuYXJ5OiBBU1ROb2RlIHwgQVNUVW5hcnlOb2RlID0gcGFyc2VVbmFyeShwYXJzZXIpO1xuXG5cdFx0cmV0dXJuIG5ldyBBU1RVbmFyeU5vZGUoR1JBTU1BUi5FWENMQU1BVElPTl9NQVJLLCB1bmFyeSk7XG5cdH1cblxuXHRyZXR1cm4gcGFyc2VQcmltYXJ5KHBhcnNlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVByaW1hcnkocGFyc2VyOiBQYXJzZXIpOiBBU1ROb2RlIHtcblx0aWYgKGxvb2tzTGlrZUxhbWJkYShwYXJzZXIpKSB7XG5cdFx0cmV0dXJuIHBhcnNlTGFtYmRhKHBhcnNlcik7XG5cdH1cblxuXHRjb25zdCB0b2tlbiA9IHBhcnNlci5uZXh0KCk7XG5cblx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX09QRU4pIHtcblx0XHRwYXJzZXIucmV3aW5kKCk7XG5cdFx0cmV0dXJuIHBhcnNlQXJyYXkocGFyc2VyKTtcblx0fVxuXG5cdGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuTlVNQkVSKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLk5VTUJFUik7XG5cdFx0bm9kZS52YWx1ZSA9IHRva2VuLnZhbHVlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5TVFJJTkcpIHtcblx0XHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuU1RSSU5HKTtcblx0XHRub2RlLnZhbHVlID0gdG9rZW4udmFsdWU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRpZiAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLkJPT0xFQU4pIHtcblx0XHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuQk9PTEVBTik7XG5cdFx0bm9kZS52YWx1ZSA9IHRva2VuLnZhbHVlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLklERU5USUZJRVIpO1xuXHRcdG5vZGUubmFtZSA9IHRva2VuLnZhbHVlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLk5VTEwpIHtcblx0XHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuTlVMTCk7XG5cdFx0bm9kZS52YWx1ZSA9IHRva2VuLnZhbHVlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLlRISVMpIHtcblx0XHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuVEhJUyk7XG5cdFx0bm9kZS5uYW1lID0gdG9rZW4udmFsdWU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuTkVXKSB7XG5cblx0XHRsZXQgdHlwZUFubm90YXRpb24gPSBwYXJzZVR5cGUocGFyc2VyKTtcblxuXHRcdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pO1xuXG5cdFx0cmV0dXJuIG5ldyBBU1ROZXdOb2RlKHBhcnNlQXJndW1lbnRzKHBhcnNlciksIHR5cGVBbm5vdGF0aW9uKTtcblx0fVxuXG5cdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKSB7XG5cdFx0Y29uc3QgZXhwciA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHRcdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKTtcblx0XHRyZXR1cm4gZXhwcjtcblx0fVxuXG5cdHRocm93UGFyc2VyRXJyb3IoYFVuZXhwZWN0ZWQgdG9rZW46ICR7dG9rZW4udHlwZX0gJHt0b2tlbi52YWx1ZX1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUG9zdGZpeChwYXJzZXI6IFBhcnNlciwgZXhwcjogQVNUTm9kZSB8IG51bGwpOiBBU1ROb2RlIHtcblx0aWYgKGV4cHIgPT09IG51bGwpIHtcblx0XHR0aHJvd1BhcnNlckVycm9yKGBFeHBlY3RlZCBleHByZXNzaW9uLCBnb3QgbnVsbC5gKTtcblx0fVxuXG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0Y29uc3QgdG9rZW4gPSBwYXJzZXIucGVlaygpO1xuXHRcdGlmICghdG9rZW4pIGJyZWFrO1xuXG5cdFx0Ly8gQ2FsbDogZm9vKC4uLilcblx0XHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTikge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHRcdGV4cHIgPSBuZXcgQVNUQ2FsbE5vZGUoZXhwciwgcGFyc2VBcmd1bWVudHMocGFyc2VyKSk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBNZW1iZXI6IGZvby5iYXJcblx0XHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuRE9UKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdFx0ZXhwciA9IG5ldyBBU1RNZW1iZXJOb2RlKGV4cHIsIHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCkudmFsdWUpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gSU5ERVg6IGZvb1tleHByXVxuXHRcdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9PUEVOKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXG5cdFx0XHRjb25zdCBpbmRleCA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXG5cdFx0XHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9DTE9TRSk7XG5cblx0XHRcdGV4cHIgPSBuZXcgQVNUSW5kZXhOb2RlKGV4cHIsIGluZGV4KTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGJyZWFrO1xuXHR9XG5cblx0cmV0dXJuIGV4cHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb29rdXBQcmVjZWRlbmNlKHRva2VuOiBUb2tlbik6IG51bWJlciB7XG5cdHN3aXRjaCAodG9rZW4udmFsdWUpIHtcblx0XHRjYXNlIEdSQU1NQVIuRE9UOlxuXHRcdFx0cmV0dXJuIDEwMDtcblx0XHRjYXNlIEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTjpcblx0XHRcdHJldHVybiA5MDtcblx0XHRjYXNlIEdSQU1NQVIuTVVMVElQTFk6XG5cdFx0Y2FzZSBHUkFNTUFSLkRJVklERTpcblx0XHRjYXNlIEdSQU1NQVIuTU9EVUxVUzpcblx0XHRcdHJldHVybiA2MDtcblx0XHRjYXNlIEdSQU1NQVIuUExVUzpcblx0XHRjYXNlIEdSQU1NQVIuTUlOVVM6XG5cdFx0XHRyZXR1cm4gNTA7XG5cdFx0Y2FzZSBHUkFNTUFSLkxFU1NfVEhBTjpcblx0XHRjYXNlIEdSQU1NQVIuR1JFQVRFUl9USEFOOlxuXHRcdGNhc2UgR1JBTU1BUi5MRVNTX0VRVUFMOlxuXHRcdGNhc2UgR1JBTU1BUi5HUkVBVEVSX0VRVUFMOlxuXHRcdFx0cmV0dXJuIDQwO1xuXHRcdGNhc2UgR1JBTU1BUi5FUVVBTDpcblx0XHRjYXNlIEdSQU1NQVIuTk9UX0VRVUFMOlxuXHRcdFx0cmV0dXJuIDMwO1xuXHRcdGNhc2UgR1JBTU1BUi5BTkQ6XG5cdFx0XHRyZXR1cm4gMjA7XG5cdFx0Y2FzZSBHUkFNTUFSLk9SOlxuXHRcdFx0cmV0dXJuIDEwO1xuXHRcdGNhc2UgR1JBTU1BUi5BU1NJR046XG5cdFx0XHRyZXR1cm4gNTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIDA7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtUb2tlbiwgVG9rZW5UeXBlfSBmcm9tIFwiLi4vZ3JhbW1hclwiO1xuaW1wb3J0IHtUb2tlblN0cmVhbX0gZnJvbSBcIi4uL3Rva2VuaXplci90b2tlbml6ZXJcIjtcbmltcG9ydCB7cGFyc2VQcm9ncmFtfSBmcm9tIFwiLi9wYXJzZXJfc3RhdG1lbnRzXCI7XG5pbXBvcnQge3Rocm93UGFyc2VyRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi9wYXJzZXJfc291cmNlXCI7XG5cblxuZXhwb3J0IGNsYXNzIFBhcnNlciB7XG5cdHNvdXJjZTogU291cmNlO1xuXHR0b2tlblN0cmVhbTogVG9rZW5TdHJlYW0gfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihzb3VyY2U6IFNvdXJjZSkge1xuXHRcdHRoaXMuc291cmNlID0gc291cmNlO1xuXHR9XG5cblx0cGFyc2UoKSB7XG5cdFx0dGhpcy50b2tlblN0cmVhbSA9IHRoaXMuc291cmNlXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAuZ2V0VG9rZW5pemVyKClcblx0XHQgICAgICAgICAgICAgICAgICAgICAgIC5nZXRUb2tlblN0cmVhbSgpXG5cblx0XHRyZXR1cm4gcGFyc2VQcm9ncmFtKHRoaXMpO1xuXHR9XG5cblx0c3RyZWFtKCk6IFRva2VuU3RyZWFtIHtcblx0XHRpZiAoIXRoaXMudG9rZW5TdHJlYW0pIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoJ1BhcnNlciBoYXMgbm90IGJlZW4gcGFyc2VkIHlldC4nKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy50b2tlblN0cmVhbTtcblx0fVxuXG5cdGV4cGVjdCh0b2tlblR5cGU6IHN0cmluZywga2V5d29yZDogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBUb2tlbiB7XG5cdFx0Y29uc3QgdG9rZW4gPSB0aGlzXG5cdFx0XHQuc3RyZWFtKClcblx0XHRcdC5uZXh0KCk7XG5cblx0XHRpZiAoIXRva2VuKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKGBVbmV4cGVjdGVkIGVuZCBvZiBmaWxlLiBFeHBlY3RlZCAke3Rva2VuVHlwZX0ke2tleXdvcmQgPyAnICcgKyBrZXl3b3JkIDogJyd9YCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRva2VuLnR5cGUgIT09IHRva2VuVHlwZSB8fCAoa2V5d29yZCAmJiB0b2tlbi52YWx1ZSAhPT0ga2V5d29yZCkpIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoYEV4cGVjdGVkICR7dG9rZW5UeXBlfSR7a2V5d29yZCA/ICcgJyArIGtleXdvcmQgOiAnJ30sIGdvdCAke3Rva2VuLnR5cGV9ICR7dG9rZW4udmFsdWV9YCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRva2VuO1xuXHR9XG5cblx0ZXhwZWN0T3BlcmF0b3Ioa2V5d29yZDogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZWN0KFRva2VuVHlwZS5PUEVSQVRPUiwga2V5d29yZCk7XG5cdH1cblxuXHRleHBlY3RBbm5vdGF0aW9uKCk6IFRva2VuIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlY3QoVG9rZW5UeXBlLkFOTk9UQVRJT04pO1xuXHR9XG5cblx0ZXhwZWN0SWRlbnRpZmllcihrZXl3b3JkOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IFRva2VuIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlY3QoVG9rZW5UeXBlLklERU5USUZJRVIsIGtleXdvcmQpO1xuXHR9XG5cblx0ZXhwZWN0S2V5d29yZChrZXl3b3JkOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IFRva2VuIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlY3QoVG9rZW5UeXBlLktFWVdPUkQsIGtleXdvcmQpO1xuXHR9XG5cblx0ZXhwZWN0U3RyaW5nKCk6IFRva2VuIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlY3QoVG9rZW5UeXBlLlNUUklORyk7XG5cdH1cblxuXHRleHBlY3RUZXh0KCk6IFRva2VuIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlY3QoVG9rZW5UeXBlLlRFWFQpO1xuXHR9XG5cblx0ZXhwZWN0UHVuY3R1YXRpb24oa2V5d29yZDogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZWN0KFRva2VuVHlwZS5QVU5DVFVBVElPTiwga2V5d29yZCk7XG5cdH1cblxuXHRleHBlY3RPbmVPZih0b2tlblR5cGVzOiBzdHJpbmdbXSwga2V5d29yZHM6IHN0cmluZyB8IG51bGwgPSBudWxsKTogVG9rZW4ge1xuXHRcdGNvbnN0IHRva2VuID0gdGhpc1xuXHRcdFx0LnN0cmVhbSgpXG5cdFx0XHQubmV4dCgpO1xuXG5cdFx0aWYgKCF0b2tlbikge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcihgVW5leHBlY3RlZCBlbmQgb2YgZmlsZS4gRXhwZWN0ZWQgb25lIG9mIHR5cGVzICR7dG9rZW5UeXBlc30sIGdvdCBudWxsLmApO1xuXHRcdH1cblxuXHRcdGlmICghdG9rZW5UeXBlcy5pbmNsdWRlcyh0b2tlbi50eXBlKSkge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcihgRXhwZWN0ZWQgb25lIG9mIHR5cGVzICR7dG9rZW5UeXBlc30sIGdvdCAke3Rva2VuLnR5cGV9YCk7XG5cdFx0fVxuXG5cdFx0aWYgKGtleXdvcmRzICYmICFrZXl3b3Jkcy5pbmNsdWRlcyh0b2tlbi52YWx1ZSkpIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoYEV4cGVjdGVkIG9uZSBvZiB2YWx1ZXMgJHtrZXl3b3Jkc30sIGdvdCAke3Rva2VuLnZhbHVlfWApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0b2tlbjtcblx0fVxuXG5cdGNvbnN1bWVJZih0b2tlblR5cGU6IHN0cmluZywga2V5d29yZDogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBib29sZWFuIHtcblx0XHRjb25zdCB0b2tlbiA9IHRoaXMucGVlaygpO1xuXG5cdFx0aWYgKHRva2VuLnR5cGUgPT09IHRva2VuVHlwZSAmJiAoa2V5d29yZCAmJiB0b2tlbi52YWx1ZS50cmltKCkgPT09IGtleXdvcmQpKSB7XG5cdFx0XHR0aGlzLm5leHQoKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGNvbnN1bWVJZlB1bmN0dWF0aW9uKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdW1lSWYoVG9rZW5UeXBlLlBVTkNUVUFUSU9OLCB2YWx1ZSk7XG5cdH1cblxuXHRjb25zdW1lSWZPcGVyYXRvcih2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3VtZUlmKFRva2VuVHlwZS5PUEVSQVRPUiwgdmFsdWUpO1xuXHR9XG5cblx0Y29uc3VtZUlmQ29tbWVudCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdW1lSWYoVG9rZW5UeXBlLkNPTU1FTlQpO1xuXHR9XG5cblx0Y29uc3VtZUlmS2V5d29yZChrZXl3b3JkOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdW1lSWYoVG9rZW5UeXBlLktFWVdPUkQsIGtleXdvcmQpO1xuXHR9XG5cblx0Y29uc3VtZUlmVGV4dCgpOiBib29sZWFuIHtcblx0XHRpZiAodGhpcy5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLlRFWFQgJiYgdGhpcy5wZWVrSXMoJycpKSB7XG5cdFx0XHR0aGlzLm5leHQoKTtcblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cGVlaygpOiBUb2tlbiB7XG5cdFx0Y29uc3QgdG9rZW4gPSB0aGlzXG5cdFx0XHQuc3RyZWFtKClcblx0XHRcdC5wZWVrKCk7XG5cblx0XHRpZiAodG9rZW4gPT09IG51bGwpIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoJ1VuZXhwZWN0ZWQgZW5kIG9mIGZpbGUuIEV4cGVjdGVkIHRva2VuLCBnb3QgbnVsbC4nKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdG9rZW47XG5cdH1cblxuXHRwZWVrSXMoa2V5d29yZDogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucGVlaygpXG5cdFx0ICAgICAgICAgICAudmFsdWVcblx0XHQgICAgICAgICAgIC50cmltKCkgPT09IGtleXdvcmQ7XG5cdH1cblxuXHRuZXh0KCk6IFRva2VuIHtcblx0XHRjb25zdCB0b2tlbiA9IHRoaXNcblx0XHRcdC5zdHJlYW0oKVxuXHRcdFx0Lm5leHQoKTtcblxuXHRcdGlmICh0b2tlbiA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZmlsZS4gRXhwZWN0ZWQgdG9rZW4sIGdvdCBudWxsLicpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0b2tlbjtcblx0fVxuXG5cdHJld2luZCgpOiB2b2lkIHtcblx0XHR0aGlzLnN0cmVhbSgpXG5cdFx0ICAgIC5yZXdpbmQoKTtcblx0fVxuXG5cdHBvc2l0aW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuc3RyZWFtKCkuaW5kZXg7XG5cdH1cblxuXHRzZWVrQXQocG9zaXRpb246IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuc3RyZWFtKCkuaW5kZXggPSBwb3NpdGlvbjtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0FTVENsYXNzTm9kZSwgQVNUSW50ZXJmYWNlTm9kZSwgQVNUTm9kZX0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHtDbGFzc0RlZmluaXRpb24sIEludGVyZmFjZURlZmluaXRpb259IGZyb20gXCIuL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7Q2xhc3NTeW1ib2wsIEludGVyZmFjZVN5bWJvbH0gZnJvbSBcIi4uL3R5cGVzL3R5cGVfb2JqZWN0c1wiO1xuaW1wb3J0IHt0aHJvd1J1bnRpbWVFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuXG5leHBvcnQgY2xhc3MgQ2xhc3NSZWdpc3RyeSB7XG5cdG1hcDogTWFwPHN0cmluZywgQ2xhc3NEZWZpbml0aW9uPiA9IG5ldyBNYXAoKTtcblxuXHRyZWdpc3Rlcihub2RlOiBBU1RDbGFzc05vZGUpOiB2b2lkIHtcblx0XHR0aGlzLnNldChub2RlLm5hbWUsIENsYXNzRGVmaW5pdGlvbi5mcm9tQVNUKG5vZGUpKTtcblx0fVxuXG5cdGFsbCgpOiBJdGVyYWJsZUl0ZXJhdG9yPENsYXNzRGVmaW5pdGlvbj4ge1xuXHRcdHJldHVybiB0aGlzLm1hcC52YWx1ZXMoKTtcblx0fVxuXG5cdHNldChuYW1lOiBzdHJpbmcsIGNsYXNzRGVmaW5pdGlvbjogQ2xhc3NEZWZpbml0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5tYXAuc2V0KG5hbWUsIGNsYXNzRGVmaW5pdGlvbik7XG5cdH1cblxuXHRnZXQobmFtZTogc3RyaW5nKTogQ2xhc3NEZWZpbml0aW9uIHtcblx0XHRjb25zdCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uIHwgbnVsbCA9IHRoaXMubWFwLmdldChuYW1lKSB8fCBudWxsO1xuXHRcdGlmICghY2xhc3NEZWYpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBDbGFzcyAke25hbWV9IG5vdCBmb3VuZC5gKTtcblx0XHR9XG5cdFx0cmV0dXJuIGNsYXNzRGVmO1xuXHR9XG5cblx0aGFzKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm1hcC5oYXMobmFtZSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEludGVyZmFjZVJlZ2lzdHJ5IHtcblx0bWFwOiBNYXA8c3RyaW5nLCBJbnRlcmZhY2VEZWZpbml0aW9uPiA9IG5ldyBNYXAoKTtcblxuXHRyZWdpc3Rlcihub2RlOiBBU1RJbnRlcmZhY2VOb2RlKTogdm9pZCB7XG5cdFx0dGhpcy5zZXQobm9kZS5uYW1lLCBJbnRlcmZhY2VEZWZpbml0aW9uLmNvbnN0cnVjdEZyb21BU1Qobm9kZSkpO1xuXHR9XG5cblx0YWxsKCk6IEl0ZXJhYmxlSXRlcmF0b3I8SW50ZXJmYWNlRGVmaW5pdGlvbj4ge1xuXHRcdHJldHVybiB0aGlzLm1hcC52YWx1ZXMoKTtcblx0fVxuXG5cdHNldChuYW1lOiBzdHJpbmcsIGludGVyZmFjZURlZmluaXRpb246IEludGVyZmFjZURlZmluaXRpb24pOiB2b2lkIHtcblx0XHR0aGlzLm1hcC5zZXQobmFtZSwgaW50ZXJmYWNlRGVmaW5pdGlvbik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGVSZWdpc3RyeSB7XG5cdGNsYXNzU3ltYm9sczogTWFwPHN0cmluZywgQ2xhc3NTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRpbnRlcmZhY2VTeW1ib2xzOiBNYXA8c3RyaW5nLCBJbnRlcmZhY2VTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXG5cdGFsbENsYXNzU3ltYm9scygpOiBJdGVyYWJsZUl0ZXJhdG9yPENsYXNzU3ltYm9sPiB7XG5cdFx0cmV0dXJuIHRoaXMuY2xhc3NTeW1ib2xzLnZhbHVlcygpO1xuXHR9XG5cblx0YWxsSW50ZXJmYWNlU3ltYm9scygpOiBJdGVyYWJsZUl0ZXJhdG9yPEludGVyZmFjZVN5bWJvbD4ge1xuXHRcdHJldHVybiB0aGlzLmludGVyZmFjZVN5bWJvbHMudmFsdWVzKCk7XG5cdH1cblxuXHRhZGRDbGFzc1N5bWJvbChzeW1ib2w6IENsYXNzU3ltYm9sKTogdm9pZCB7XG5cdFx0dGhpcy5jbGFzc1N5bWJvbHMuc2V0KHN5bWJvbC5uYW1lLCBzeW1ib2wpO1xuXHR9XG5cblx0YWRkSW50ZXJmYWNlU3ltYm9sKHN5bWJvbDogSW50ZXJmYWNlU3ltYm9sKTogdm9pZCB7XG5cdFx0dGhpcy5pbnRlcmZhY2VTeW1ib2xzLnNldChzeW1ib2wubmFtZSwgc3ltYm9sKTtcblx0fVxuXG5cdGhhc1N5bWJvbChuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jbGFzc1N5bWJvbHMuaGFzKG5hbWUpIHx8IHRoaXMuaW50ZXJmYWNlU3ltYm9scy5oYXMobmFtZSk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0Q2xhc3NTeW1ib2wobmFtZTogc3RyaW5nKTogQ2xhc3NTeW1ib2wge1xuXHRcdGNvbnN0IHN5bWJvbDogQ2xhc3NTeW1ib2wgfCB1bmRlZmluZWQgPSB0aGlzLmNsYXNzU3ltYm9scy5nZXQobmFtZSk7XG5cdFx0aWYgKHN5bWJvbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgU3ltYm9sICR7bmFtZX0gbm90IGZvdW5kLmApO1xuXHRcdH1cblx0XHRyZXR1cm4gc3ltYm9sO1xuXHR9XG5cblx0cHVibGljIGdldEludGVyYWNlU3ltYm9sKG5hbWU6IHN0cmluZyk6IEludGVyZmFjZVN5bWJvbCB7XG5cdFx0Y29uc3Qgc3ltYm9sOiBJbnRlcmZhY2VTeW1ib2wgfCB1bmRlZmluZWQgPSB0aGlzLmludGVyZmFjZVN5bWJvbHMuZ2V0KG5hbWUpO1xuXHRcdGlmIChzeW1ib2wgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFN5bWJvbCAke25hbWV9IG5vdCBmb3VuZC5gKTtcblx0XHR9XG5cdFx0cmV0dXJuIHN5bWJvbDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgT2JqZWN0UmVnaXN0cnkge1xuXHRjbGFzc2VzID0gbmV3IENsYXNzUmVnaXN0cnkoKTtcblx0aW50ZXJmYWNlcyA9IG5ldyBJbnRlcmZhY2VSZWdpc3RyeSgpO1xuXHR0eXBlcyA9IG5ldyBUeXBlUmVnaXN0cnkoKTtcblxuXHRmZXRjaEFsbE9iamVjdERlZmluaXRpb25zKCk6IE1hcDxzdHJpbmcsIENsYXNzRGVmaW5pdGlvbiB8IEludGVyZmFjZURlZmluaXRpb24+IHtcblx0XHRjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG5cblx0XHRmb3IgKGNvbnN0IGNsYXNzRGVmIG9mIHRoaXMuaW50ZXJmYWNlcy5hbGwoKSkge1xuXHRcdFx0bWFwLnNldChjbGFzc0RlZi5uYW1lLCBjbGFzc0RlZik7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBjbGFzc0RlZiBvZiB0aGlzLmNsYXNzZXMuYWxsKCkpIHtcblx0XHRcdG1hcC5zZXQoY2xhc3NEZWYubmFtZSwgY2xhc3NEZWYpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtYXA7XG5cdH1cblxuXHRjb2xsZWN0QWxsKGFzdDogQVNUTm9kZSk6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUSW50ZXJmYWNlTm9kZSkge1xuXHRcdFx0XHR0aGlzLmludGVyZmFjZXMucmVnaXN0ZXIobm9kZSk7XG5cdFx0XHR9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RDbGFzc05vZGUpIHtcblx0XHRcdFx0dGhpcy5jbGFzc2VzLnJlZ2lzdGVyKG5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4iLAogICAgImltcG9ydCB7XG5cdEFTVEFycmF5Tm9kZSxcblx0QVNUQmluYXJ5Tm9kZSxcblx0QVNUQ2FsbE5vZGUsXG5cdEFTVENsYXNzTm9kZSxcblx0QVNURXhwcmVzc2lvbk5vZGUsXG5cdEFTVEZpZWxkTm9kZSxcblx0QVNURm9yZWFjaE5vZGUsXG5cdEFTVEluZGV4Tm9kZSxcblx0QVNUSW50ZXJmYWNlTm9kZSxcblx0QVNUTGFtYmRhTm9kZSxcblx0QVNUTWVtYmVyTm9kZSxcblx0QVNUTWV0aG9kTm9kZSxcblx0QVNUTmV3Tm9kZSxcblx0QVNUTm9kZSxcblx0QVNUTm9kZVR5cGUsXG5cdEFTVFBhcmFtZXRlck5vZGUsXG5cdEFTVFJldHVybk5vZGUsXG5cdEFTVFR5cGVOb2RlLFxuXHRBU1RVbmFyeU5vZGUsXG5cdEFTVFZhcmlhYmxlTm9kZSxcblx0QVNUVkRvbU5vZGVcbn0gZnJvbSAnLi4vYXN0LnRzJztcbmltcG9ydCB7XG5cdGJ1aWxkVHlwZVN1YnN0aXR1dGlvbk1hcCxcblx0Q2xhc3NSZWZUeXBlLFxuXHRDbGFzc1N5bWJvbCxcblx0RmllbGRTeW1ib2wsXG5cdEludGVyZmFjZVJlZlR5cGUsXG5cdEludGVyZmFjZVN5bWJvbCxcblx0TGFtYmRhVHlwZSxcblx0TWV0aG9kU3ltYm9sLFxuXHRNaXhlZFR5cGUsXG5cdE51bGxhYmxlVHlwZSxcblx0UGFyYW1ldGVyU3ltYm9sLFxuXHRQcmltaXRpdmVDbGFzc1R5cGVzLFxuXHRzdWJzdGl0dXRlVHlwZSxcblx0VHlwZSxcblx0VHlwZVBhcmFtZXRlclN5bWJvbCxcblx0VHlwZXMsXG5cdFR5cGVTY29wZSxcblx0VHlwZVZhcmlhYmxlLFxuXHR3cmFwVHlwZVxufSBmcm9tIFwiLi90eXBlX29iamVjdHNcIjtcbmltcG9ydCB7QXV0b2JveGluZ30gZnJvbSBcIi4vYXV0b2JveGluZ1wiO1xuaW1wb3J0IHtOYXRpdmVGdW5jdGlvbiwgTmF0aXZlRnVuY3Rpb25zfSBmcm9tIFwiLi4vLi4vbGlicmFyeS9uYXRpdmVfZnVuY3Rpb25zXCI7XG5pbXBvcnQge0dSQU1NQVJ9IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5pbXBvcnQge3Rocm93VHlwZUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzLnRzXCJcbmltcG9ydCB7Q2xhc3NEZWZpbml0aW9uLCBJbnRlcmZhY2VEZWZpbml0aW9ufSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5cblxuY29uc3QgZ2xvYmFsRnVuY3Rpb25UeXBlUmVnaXN0cnkgPSBuZXcgTmF0aXZlRnVuY3Rpb25zKClcblx0LmdldEdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5KCk7XG5cbmV4cG9ydCBjbGFzcyBTdGF0ZW1lbnRSZXN1bHQge1xuXHRkaWRSZXR1cm46IGJvb2xlYW47XG5cdHJldHVyblR5cGU6IFR5cGUgfCBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKGRpZFJldHVybjogYm9vbGVhbiwgcmV0dXJuVHlwZTogVHlwZSB8IG51bGwpIHtcblx0XHR0aGlzLmRpZFJldHVybiA9IGRpZFJldHVybjtcblx0XHR0aGlzLnJldHVyblR5cGUgPSByZXR1cm5UeXBlO1xuXHR9XG5cblx0c3RhdGljIHdpdGhSZXR1cm4ocmV0dXJuVHlwZTogVHlwZSk6IFN0YXRlbWVudFJlc3VsdCB7XG5cdFx0cmV0dXJuIG5ldyBTdGF0ZW1lbnRSZXN1bHQodHJ1ZSwgcmV0dXJuVHlwZSk7XG5cdH1cblxuXHRzdGF0aWMgbm9SZXR1cm4oKTogU3RhdGVtZW50UmVzdWx0IHtcblx0XHRyZXR1cm4gbmV3IFN0YXRlbWVudFJlc3VsdChmYWxzZSwgbnVsbCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGVDaGVja2VyIHtcblx0b2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5O1xuXG5cdGNvbnN0cnVjdG9yKG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSkge1xuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkgPSBvYmplY3RSZWdpc3RyeTtcblx0fVxuXG5cdGNvbGxlY3RBbGxTeW1ib2xzRnJvbU5vZGUoYXN0OiBBU1ROb2RlKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIGFzdC5jaGlsZHJlbikge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RJbnRlcmZhY2VOb2RlKSB7XG5cdFx0XHRcdHRoaXMucmVnaXN0ZXJJbnRlcmZhY2VTeW1ib2wobm9kZSlcblx0XHRcdH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIEFTVENsYXNzTm9kZSkge1xuXHRcdFx0XHR0aGlzLnJlZ2lzdGVyQ2xhc3NTeW1ib2wobm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y29sbGVjdEFsbFN5bWJvbHNGcm9tUmVnaXN0cnkob2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogdm9pZCB7XG5cdFx0Y29uc3Qgb2JqZWN0RGVmaW5pdGlvbnM6IE1hcEl0ZXJhdG9yPENsYXNzRGVmaW5pdGlvbiB8IEludGVyZmFjZURlZmluaXRpb24+ID0gb2JqZWN0UmVnaXN0cnlcblx0XHRcdC5mZXRjaEFsbE9iamVjdERlZmluaXRpb25zKClcblx0XHRcdC52YWx1ZXMoKTtcblxuXHRcdGZvciAobGV0IG9iamVjdERlZiBvZiBvYmplY3REZWZpbml0aW9ucykge1xuXHRcdFx0aWYgKG9iamVjdERlZiBpbnN0YW5jZW9mIEludGVyZmFjZURlZmluaXRpb24pIHtcblx0XHRcdFx0dGhpcy5yZWdpc3RlckludGVyZmFjZVN5bWJvbChvYmplY3REZWYubm9kZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnJlZ2lzdGVyQ2xhc3NTeW1ib2wob2JqZWN0RGVmLm5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNoZWNrKGFzdDogQVNUTm9kZSk6IHZvaWQge1xuXHRcdHRoaXMuY29sbGVjdEFsbFN5bWJvbHNGcm9tTm9kZShhc3QpO1xuXHRcdHRoaXMudmFsaWRhdGVJbmhlcml0YW5jZSgpO1xuXHRcdHRoaXMuY2hlY2tQcm9ncmFtKGFzdCk7XG5cdFx0dGhpcy5jaGVja0ludGVyZmFjZUJvZGllcygpO1xuXHRcdHRoaXMuY2hlY2tDbGFzc2VzQm9kaWVzKCk7XG5cdFx0dGhpcy5jaGVja0NsYXNzZXNJbXBsZW1lbnRzKCk7XG5cdH1cblxuXHRwcml2YXRlIHZhbGlkYXRlSW5oZXJpdGFuY2UoKSB7XG5cdFx0Zm9yIChjb25zdCBjbGFzc1N5bWJvbCBvZiB0aGlzLm9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuYWxsKCkpIHtcblx0XHRcdGlmIChjbGFzc1N5bWJvbC5zdXBlckNsYXNzICYmICF0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmhhc1N5bWJvbChjbGFzc1N5bWJvbC5zdXBlckNsYXNzKSkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgVW5rbm93biBzdXBlcmNsYXNzICR7Y2xhc3NTeW1ib2wuc3VwZXJDbGFzc31gLCBjbGFzc1N5bWJvbC5ub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrUHJvZ3JhbShhc3Q6IEFTVE5vZGUpOiB2b2lkIHtcblx0XHRjb25zdCBzY29wZSA9IG5ldyBUeXBlU2NvcGUoKTtcblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgYXN0LmNoaWxkcmVuKSB7XG5cdFx0XHR0aGlzLmNoZWNrU3RhdGVtZW50KG5vZGUsIHNjb3BlKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQ2xhc3Nlc0JvZGllcygpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IG9iamVjdFN5bWJvbCBvZiB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmFsbENsYXNzU3ltYm9scygpKSB7XG5cdFx0XHRjb25zdCBpbnN0YW5jZVNjb3BlID0gbmV3IFR5cGVTY29wZSgpO1xuXHRcdFx0aW5zdGFuY2VTY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sID0gb2JqZWN0U3ltYm9sO1xuXG5cdFx0XHRvYmplY3RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMuZm9yRWFjaCh0eXBlUGFyYW1ldGVyID0+IHtcblx0XHRcdFx0aW5zdGFuY2VTY29wZS5kZWZpbmVUeXBlQmluZGluZyhcblx0XHRcdFx0XHR0eXBlUGFyYW1ldGVyLm5hbWUsXG5cdFx0XHRcdFx0bmV3IFR5cGVWYXJpYWJsZSh0eXBlUGFyYW1ldGVyLm5hbWUpXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKG9iamVjdFN5bWJvbC5jb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbCkge1xuXHRcdFx0XHRjb25zdCBjb25zdHJ1Y3RvclN5bWJvbCA9IG9iamVjdFN5bWJvbC5jb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbDtcblx0XHRcdFx0Y29uc3QgY29uc3RydWN0b3JTY29wZSA9IG5ldyBUeXBlU2NvcGUoaW5zdGFuY2VTY29wZSk7XG5cblx0XHRcdFx0b2JqZWN0U3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmZvckVhY2godHlwZVBhcmFtZXRlclN5bWJvbCA9PiB7XG5cdFx0XHRcdFx0Y29uc3RydWN0b3JTY29wZS5kZWZpbmVUeXBlQmluZGluZyhcblx0XHRcdFx0XHRcdHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSxcblx0XHRcdFx0XHRcdG5ldyBUeXBlVmFyaWFibGUodHlwZVBhcmFtZXRlclN5bWJvbC5uYW1lKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGZvciAoY29uc3QgcGFyYW1ldGVyU3ltYm9sIG9mIGNvbnN0cnVjdG9yU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMpIHtcblx0XHRcdFx0XHRjb25zdHJ1Y3RvclNjb3BlLmRlZmluZVR5cGUocGFyYW1ldGVyU3ltYm9sLm5hbWUsIHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuY2hlY2tCb2R5KGNvbnN0cnVjdG9yU3ltYm9sLmJvZHksIGNvbnN0cnVjdG9yU2NvcGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGNvbnN0IG1ldGhvZFN5bWJvbCBvZiBvYmplY3RTeW1ib2wuaW5zdGFuY2VNZXRob2RTeW1ib2xzLnZhbHVlcygpKSB7XG5cdFx0XHRcdGNvbnN0IG1ldGhvZFNjb3BlID0gbmV3IFR5cGVTY29wZShpbnN0YW5jZVNjb3BlKTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMuZm9yRWFjaCh0eXBlUGFyYW1ldGVyU3ltYm9sID0+IHtcblx0XHRcdFx0XHRtZXRob2RTY29wZS5kZWZpbmVUeXBlQmluZGluZyhcblx0XHRcdFx0XHRcdHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSxcblx0XHRcdFx0XHRcdG5ldyBUeXBlVmFyaWFibGUodHlwZVBhcmFtZXRlclN5bWJvbC5uYW1lKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGZvciAoY29uc3QgcGFyYW1ldGVyU3ltYm9sIG9mIG1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzKSB7XG5cdFx0XHRcdFx0bWV0aG9kU2NvcGUuZGVmaW5lVHlwZShwYXJhbWV0ZXJTeW1ib2wubmFtZSwgcGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgaGFzQm9keSA9IG1ldGhvZFN5bWJvbC5ib2R5ICYmIG1ldGhvZFN5bWJvbC5ib2R5Lmxlbmd0aCA+IDA7XG5cdFx0XHRcdGlmIChoYXNCb2R5KSB7XG5cdFx0XHRcdFx0Y29uc3QgYWN0dWFsID0gdGhpcy5jaGVja0JvZHkobWV0aG9kU3ltYm9sLmJvZHksIG1ldGhvZFNjb3BlKTtcblx0XHRcdFx0XHR0aGlzLmNoZWNrUmV0dXJuVHlwZShtZXRob2RTeW1ib2wucmV0dXJuVHlwZSwgYWN0dWFsLCBtZXRob2RTeW1ib2wubm9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Zm9yIChjb25zdCBtZXRob2RTeW1ib2wgb2Ygb2JqZWN0U3ltYm9sLnN0YXRpY01ldGhvZFN5bWJvbHMudmFsdWVzKCkpIHtcblx0XHRcdFx0Y29uc3Qgc3RhdGljU2NvcGUgPSBuZXcgVHlwZVNjb3BlKGluc3RhbmNlU2NvcGUpO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5mb3JFYWNoKHR5cGVQYXJhbWV0ZXJTeW1ib2wgPT4ge1xuXHRcdFx0XHRcdHN0YXRpY1Njb3BlLmRlZmluZVR5cGVCaW5kaW5nKFxuXHRcdFx0XHRcdFx0dHlwZVBhcmFtZXRlclN5bWJvbC5uYW1lLFxuXHRcdFx0XHRcdFx0bmV3IFR5cGVWYXJpYWJsZSh0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Zm9yIChjb25zdCBwYXJhbWV0ZXJTeW1ib2wgb2YgbWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMpIHtcblx0XHRcdFx0XHRzdGF0aWNTY29wZS5kZWZpbmVUeXBlKHBhcmFtZXRlclN5bWJvbC5uYW1lLCBwYXJhbWV0ZXJTeW1ib2wucGFyYW1ldGVyVHlwZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBoYXNCb2R5ID0gbWV0aG9kU3ltYm9sLmJvZHkgJiYgbWV0aG9kU3ltYm9sLmJvZHkubGVuZ3RoID4gMDtcblx0XHRcdFx0aWYgKGhhc0JvZHkpIHtcblx0XHRcdFx0XHRjb25zdCBhY3R1YWwgPSB0aGlzLmNoZWNrQm9keShtZXRob2RTeW1ib2wuYm9keSwgc3RhdGljU2NvcGUpO1xuXHRcdFx0XHRcdHRoaXMuY2hlY2tSZXR1cm5UeXBlKG1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlLCBhY3R1YWwsIG1ldGhvZFN5bWJvbC5ub2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tJbnRlcmZhY2VCb2RpZXMoKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBvYmplY3RTeW1ib2wgb2YgdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5hbGxJbnRlcmZhY2VTeW1ib2xzKCkpIHtcblx0XHRcdGNvbnN0IGluc3RhbmNlU2NvcGUgPSBuZXcgVHlwZVNjb3BlKCk7XG5cdFx0XHRpbnN0YW5jZVNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgPSBvYmplY3RTeW1ib2w7XG5cblx0XHRcdG9iamVjdFN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5mb3JFYWNoKHR5cGVQYXJhbWV0ZXIgPT4ge1xuXHRcdFx0XHRpbnN0YW5jZVNjb3BlLmRlZmluZVR5cGVCaW5kaW5nKFxuXHRcdFx0XHRcdHR5cGVQYXJhbWV0ZXIubmFtZSxcblx0XHRcdFx0XHRuZXcgVHlwZVZhcmlhYmxlKHR5cGVQYXJhbWV0ZXIubmFtZSlcblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXG5cdFx0XHRmb3IgKGNvbnN0IG1ldGhvZFN5bWJvbCBvZiBvYmplY3RTeW1ib2wuaW5zdGFuY2VNZXRob2RTeW1ib2xzLnZhbHVlcygpKSB7XG5cdFx0XHRcdGNvbnN0IG1ldGhvZFNjb3BlID0gbmV3IFR5cGVTY29wZShpbnN0YW5jZVNjb3BlKTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMuZm9yRWFjaCh0eXBlUGFyYW1ldGVyU3ltYm9sID0+IHtcblx0XHRcdFx0XHRtZXRob2RTY29wZS5kZWZpbmVUeXBlQmluZGluZyhcblx0XHRcdFx0XHRcdHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSxcblx0XHRcdFx0XHRcdG5ldyBUeXBlVmFyaWFibGUodHlwZVBhcmFtZXRlclN5bWJvbC5uYW1lKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGZvciAoY29uc3QgcGFyYW1ldGVyU3ltYm9sIG9mIG1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzKSB7XG5cdFx0XHRcdFx0bWV0aG9kU2NvcGUuZGVmaW5lVHlwZShwYXJhbWV0ZXJTeW1ib2wubmFtZSwgcGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgaGFzQm9keSA9IG1ldGhvZFN5bWJvbC5ib2R5ICYmIG1ldGhvZFN5bWJvbC5ib2R5Lmxlbmd0aCA+IDA7XG5cdFx0XHRcdGlmIChoYXNCb2R5KSB7XG5cdFx0XHRcdFx0Y29uc3QgYWN0dWFsID0gdGhpcy5jaGVja0JvZHkobWV0aG9kU3ltYm9sLmJvZHksIG1ldGhvZFNjb3BlKTtcblx0XHRcdFx0XHR0aGlzLmNoZWNrUmV0dXJuVHlwZShtZXRob2RTeW1ib2wucmV0dXJuVHlwZSwgYWN0dWFsLCBtZXRob2RTeW1ib2wubm9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQ2xhc3Nlc0ltcGxlbWVudHMoKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBjbGFzc1N5bWJvbCBvZiB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmFsbENsYXNzU3ltYm9scygpKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGludGVyZmFjZVJlZlR5cGUgb2YgY2xhc3NTeW1ib2wuaW1wbGVtZW50c0ludGVyZmFjZXMpIHtcblx0XHRcdFx0dGhpcy5jaGVja0ltcGxlbWVudHNJbnRlcmZhY2UoY2xhc3NTeW1ib2wsIGludGVyZmFjZVJlZlR5cGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tJbXBsZW1lbnRzSW50ZXJmYWNlKGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCwgaW50ZXJmYWNlUmVmVHlwZTogSW50ZXJmYWNlUmVmVHlwZSk6IHZvaWQge1xuXHRcdGNvbnN0IGludGVyZmFjZVN5bWJvbCA9IGludGVyZmFjZVJlZlR5cGUuaW50ZXJmYWNlU3ltYm9sO1xuXG5cdFx0Y29uc3Qgc3Vic3RpdHV0aW9uTWFwID0gYnVpbGRUeXBlU3Vic3RpdHV0aW9uTWFwKFxuXHRcdFx0aW50ZXJmYWNlU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLFxuXHRcdFx0aW50ZXJmYWNlUmVmVHlwZS50eXBlQXJndW1lbnRzXG5cdFx0KTtcblxuXHRcdGZvciAoY29uc3QgaW50ZXJmYWNlTWV0aG9kU3ltYm9sIG9mIGludGVyZmFjZVN5bWJvbC5pbnN0YW5jZU1ldGhvZFN5bWJvbHMudmFsdWVzKCkpIHtcblx0XHRcdGNvbnN0IGNsYXNzTWV0aG9kU3ltYm9sID0gdGhpcy5yZXNvbHZlSW5zdGFuY2VNZXRob2RlKFxuXHRcdFx0XHRjbGFzc1N5bWJvbCxcblx0XHRcdFx0aW50ZXJmYWNlTWV0aG9kU3ltYm9sLm5hbWVcblx0XHRcdCk7XG5cblx0XHRcdGlmICghY2xhc3NNZXRob2RTeW1ib2wpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoXG5cdFx0XHRcdFx0YENsYXNzICR7Y2xhc3NTeW1ib2wubmFtZX0gZG9lcyBub3QgaW1wbGVtZW50IG1ldGhvZCAke2ludGVyZmFjZU1ldGhvZFN5bWJvbC5uYW1lfSBmcm9tIGludGVyZmFjZSAke2ludGVyZmFjZVN5bWJvbC5uYW1lfWAsXG5cdFx0XHRcdFx0Y2xhc3NTeW1ib2wubm9kZVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmNoZWNrTWV0aG9kQ29tcGF0aWJpbGl0eShcblx0XHRcdFx0Y2xhc3NNZXRob2RTeW1ib2wsXG5cdFx0XHRcdGludGVyZmFjZU1ldGhvZFN5bWJvbCxcblx0XHRcdFx0c3Vic3RpdHV0aW9uTWFwXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tNZXRob2RDb21wYXRpYmlsaXR5KGNsYXNzTWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wsIGludGVyZmFjZU1ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sLCBzdWJzdGl0dXRpb25NYXA6IE1hcDxzdHJpbmcsIFR5cGU+KTogdm9pZCB7XG5cdFx0aWYgKGNsYXNzTWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMubGVuZ3RoICE9PSBpbnRlcmZhY2VNZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9scy5sZW5ndGgpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBNZXRob2QgJHtjbGFzc01ldGhvZFN5bWJvbC5uYW1lfSBoYXMgd3JvbmcgcGFyYW1ldGVyIGNvdW50YCk7XG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBpbnRlcmZhY2VNZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgcGFyYW1ldGVyU3ltYm9sOiBQYXJhbWV0ZXJTeW1ib2wgfCBudWxsID0gaW50ZXJmYWNlTWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHNbaV0gfHwgbnVsbDtcblxuXHRcdFx0aWYgKCFwYXJhbWV0ZXJTeW1ib2wpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYE1ldGhvZCAke2NsYXNzTWV0aG9kU3ltYm9sLm5hbWV9IGhhcyB0b28gbWFueSBwYXJhbWV0ZXJzYCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBleHBlY3RlZFR5cGU6IFR5cGUgPSBzdWJzdGl0dXRlVHlwZShwYXJhbWV0ZXJTeW1ib2wucGFyYW1ldGVyVHlwZSwgc3Vic3RpdHV0aW9uTWFwKTtcblxuXHRcdFx0Y29uc3QgYWN0dWFsVHlwZTogVHlwZSA9IHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlO1xuXG5cdFx0XHRpZiAoIWV4cGVjdGVkVHlwZS5hY2NlcHRzKGFjdHVhbFR5cGUpKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBQYXJhbWV0ZXIgJHtpICsgMX0gb2YgJHtjbGFzc01ldGhvZFN5bWJvbC5uYW1lfSBpbmNvbXBhdGlibGUgd2l0aCBpbnRlcmZhY2VgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBleHBlY3RlZFJldHVybjogVHlwZSA9IHN1YnN0aXR1dGVUeXBlKGludGVyZmFjZU1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlLCBzdWJzdGl0dXRpb25NYXApO1xuXG5cdFx0aWYgKCFleHBlY3RlZFJldHVybi5hY2NlcHRzKGNsYXNzTWV0aG9kU3ltYm9sLnJldHVyblR5cGUpKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgUmV0dXJuIHR5cGUgb2YgJHtjbGFzc01ldGhvZFN5bWJvbC5uYW1lfSBpbmNvbXBhdGlibGUgd2l0aCBpbnRlcmZhY2VgKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrU3RhdGVtZW50KG5vZGU6IEFTVE5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBTdGF0ZW1lbnRSZXN1bHQge1xuXHRcdHN3aXRjaCAobm9kZS50eXBlKSB7XG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLlJFVFVSTjpcblx0XHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RSZXR1cm5Ob2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFN0YXRlbWVudFJlc3VsdC53aXRoUmV0dXJuKFxuXHRcdFx0XHRcdFx0dGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5hcmd1bWVudCwgc2NvcGUpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuVkFSSUFCTEU6XG5cdFx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUVmFyaWFibGVOb2RlKSB7XG5cdFx0XHRcdFx0dGhpcy5jaGVja1ZhcmlhYmxlKG5vZGUsIHNjb3BlKTtcblx0XHRcdFx0XHRyZXR1cm4gU3RhdGVtZW50UmVzdWx0Lm5vUmV0dXJuKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkZPUkVBQ0g6XG5cdFx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNURm9yZWFjaE5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gU3RhdGVtZW50UmVzdWx0LndpdGhSZXR1cm4oXG5cdFx0XHRcdFx0XHR0aGlzLmNoZWNrRm9yZWFjaChub2RlLCBzY29wZSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5FWFBSRVNTSU9OOlxuXHRcdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEV4cHJlc3Npb25Ob2RlKSB7XG5cdFx0XHRcdFx0dGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5leHByLCBzY29wZSk7XG5cdFx0XHRcdFx0cmV0dXJuIFN0YXRlbWVudFJlc3VsdC5ub1JldHVybigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiBTdGF0ZW1lbnRSZXN1bHQubm9SZXR1cm4oKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tWYXJpYWJsZShub2RlOiBBU1RWYXJpYWJsZU5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiB2b2lkIHtcblx0XHRjb25zdCBkZWNsYXJlZFR5cGU6IFR5cGUgfCBudWxsID0gbm9kZS50eXBlQW5ub3RhdGlvblxuXHRcdFx0PyB0aGlzLndyYXBUeXBlKG5vZGUudHlwZUFubm90YXRpb24sIHNjb3BlKVxuXHRcdFx0OiBudWxsO1xuXG5cdFx0Y29uc3QgYWN0dWFsVHlwZTogVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKG5vZGUuaW5pdCwgc2NvcGUsIGRlY2xhcmVkVHlwZSk7XG5cblx0XHRpZiAoZGVjbGFyZWRUeXBlICYmICFkZWNsYXJlZFR5cGUuYWNjZXB0cyhhY3R1YWxUeXBlKSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFR5cGUgbWlzbWF0Y2g6ICR7ZGVjbGFyZWRUeXBlfSA8PiAke2FjdHVhbFR5cGV9YCwgbm9kZSk7XG5cdFx0fVxuXG5cdFx0c2NvcGUuZGVmaW5lVHlwZShub2RlLm5hbWUsIGRlY2xhcmVkVHlwZSA/PyBhY3R1YWxUeXBlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tGb3JlYWNoKG5vZGU6IEFTVEZvcmVhY2hOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0bGV0IGl0ZXJhYmxlVHlwZTogVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKG5vZGUuaXRlcmFibGUsIHNjb3BlKTtcblxuXHRcdGl0ZXJhYmxlVHlwZSA9IEF1dG9ib3hpbmcuYXV0b2JveElmTmVlZGVkKGl0ZXJhYmxlVHlwZSwgdGhpcy5vYmplY3RSZWdpc3RyeSk7XG5cblx0XHRpZiAoaXRlcmFibGVUeXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlICYmIGl0ZXJhYmxlVHlwZS5jbGFzc1N5bWJvbC5uYW1lID09PSAnQXJyYXknKSB7XG5cdFx0XHRpZiAoaXRlcmFibGVUeXBlLnR5cGVBcmd1bWVudHMubGVuZ3RoICE9PSAxKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKCdBcnJheSBpbiBmb3JlYWNoIG11c3N0IGhhdmUgZXhhY3RseSBvbmUgdHlwZSBhcmd1bWVudC4nLCBub2RlLml0ZXJhYmxlKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZWxlbWVudFR5cGU6IFR5cGUgfCBudWxsID0gaXRlcmFibGVUeXBlLnR5cGVBcmd1bWVudHNbMF0gfHwgbnVsbDtcblxuXHRcdFx0aWYgKGVsZW1lbnRUeXBlID09PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKCdBcnJheSBpbiBmb3JlYWNoIG11c3QgaGF2ZSBleGFjdGx5IG9uZSB0eXBlIGFyZ3VtZW50LicsIG5vZGUuaXRlcmFibGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBsb29wU2NvcGUgPSBuZXcgVHlwZVNjb3BlKHNjb3BlKTtcblx0XHRcdGxvb3BTY29wZS5kZWZpbmVUeXBlKG5vZGUuaXRlcmF0b3IsIGVsZW1lbnRUeXBlKTtcblxuXHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tCb2R5KG5vZGUuYm9keSwgbG9vcFNjb3BlKTtcblxuXHRcdH1cblxuXHRcdHRoaXMudHlwZUVycm9yKGBmb3JlYWNoIGV4cGVjdHMgQXJyYXk8VD4sIGdvdCAke2l0ZXJhYmxlVHlwZS50b1N0cmluZygpfWAsIG5vZGUuaXRlcmFibGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0V4cHJlc3Npb24oZXhwcjogQVNUTm9kZSB8IG51bGwsIHNjb3BlOiBUeXBlU2NvcGUsIGV4cGVjdGVkVHlwZTogVHlwZSB8IG51bGwgPSBudWxsKTogVHlwZSB7XG5cdFx0aWYgKGV4cHIgPT09IG51bGwpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKCdFeHByZXNzaW9uIGV4cGVjdGVkLCBnb3QgbnVsbC4nLCBleHByKTtcblx0XHR9XG5cblx0XHRzd2l0Y2ggKGV4cHIudHlwZSkge1xuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5OVU1CRVI6XG5cdFx0XHRcdHJldHVybiBUeXBlcy5OVU1CRVI7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuU1RSSU5HOlxuXHRcdFx0XHRyZXR1cm4gVHlwZXMuU1RSSU5HO1xuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkJPT0xFQU46XG5cdFx0XHRcdHJldHVybiBUeXBlcy5CT09MRUFOO1xuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLk5VTEw6XG5cdFx0XHRcdHJldHVybiBUeXBlcy5OVUxMO1xuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLlZET006IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RWRG9tTm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrVkRvbU5vZGUoZXhwcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuQVJSQVk6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RBcnJheU5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0FycmF5RXhwcmVzc2lvbihleHByLCBzY29wZSwgZXhwZWN0ZWRUeXBlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5JTkRFWDoge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVEluZGV4Tm9kZSkge1xuXHRcdFx0XHRcdGNvbnN0IG9iamVjdFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihleHByLm9iamVjdCwgc2NvcGUpO1xuXHRcdFx0XHRcdGNvbnN0IGluZGV4ID0gdGhpcy5jaGVja0V4cHJlc3Npb24oZXhwci5pbmRleCwgc2NvcGUpO1xuXG5cdFx0XHRcdFx0aWYgKG9iamVjdFR5cGUgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUpIHtcblx0XHRcdFx0XHRcdHJldHVybiBvYmplY3RUeXBlLnR5cGVBcmd1bWVudHNbMF0gfHwgVHlwZXMuTUlYRUQ7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBpbmRleCAke29iamVjdFR5cGUubmFtZX0gd2l0aCAke2luZGV4Lm5hbWV9YCwgZXhwcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuVU5BUlk6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RVbmFyeU5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja1VuYXJ5RXhwcmVzc2lvbihleHByLCBzY29wZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuTUVNQkVSOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrTWVtYmVyRXhwcmVzc2lvbihleHByLCBzY29wZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuVEhJUzoge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja1RoaXNFeHByZXNzaW9uKGV4cHIsIHNjb3BlKTtcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5JREVOVElGSUVSOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0lkZW50aWZpZXJFeHByZXNzaW9uKGV4cHIsIHNjb3BlKTtcblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5ORVc6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1ROZXdOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tOZXdFeHByZXNzaW9uKGV4cHIsIHNjb3BlLCBleHBlY3RlZFR5cGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkJJTkFSWToge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVEJpbmFyeU5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0JpbmFyeUV4cHJlc3Npb24oZXhwciwgc2NvcGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkxBTUJEQToge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVExhbWJkYU5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0xhbWJkYUV4cHJlc3Npb24oZXhwciwgc2NvcGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkNBTEw6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RDYWxsTm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrQ2FsbEV4cHJlc3Npb24oZXhwciwgc2NvcGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBUeXBlcy5NSVhFRDtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tCaW5hcnlFeHByZXNzaW9uKGV4cHI6IEFTVEJpbmFyeU5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRjb25zdCBsZWZ0OiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24oZXhwci5sZWZ0LCBzY29wZSk7XG5cdFx0Y29uc3QgcmlnaHQ6IFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihleHByLnJpZ2h0LCBzY29wZSk7XG5cdFx0Y29uc3Qgb3A6IHN0cmluZyA9IGV4cHIub3BlcmF0b3I7XG5cblx0XHRpZiAoR1JBTU1BUi5BUklUSE1FVElDLmluY2x1ZGVzKG9wKSkge1xuXHRcdFx0aWYgKGxlZnQuYWNjZXB0cyhUeXBlcy5OVU1CRVIpICYmIHJpZ2h0LmFjY2VwdHMoVHlwZXMuTlVNQkVSKSkge1xuXHRcdFx0XHRyZXR1cm4gVHlwZXMuTlVNQkVSO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGxlZnQuYWNjZXB0cyhUeXBlcy5TVFJJTkcpIHx8IHJpZ2h0LmFjY2VwdHMoVHlwZXMuU1RSSU5HKSkge1xuXHRcdFx0XHRyZXR1cm4gVHlwZXMuU1RSSU5HO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYEFyaXRobWV0aWMgb3BlcmF0b3IgJyR7b3B9JyByZXF1aXJlcyBudW1iZXJzYCwgZXhwcik7XG5cdFx0fVxuXG5cdFx0aWYgKEdSQU1NQVIuQ09NUEFSSVNPTi5pbmNsdWRlcyhvcCkpIHtcblx0XHRcdGlmIChsZWZ0LmFjY2VwdHMoVHlwZXMuTlVNQkVSKSAmJiByaWdodC5hY2NlcHRzKFR5cGVzLk5VTUJFUikpIHtcblx0XHRcdFx0cmV0dXJuIFR5cGVzLkJPT0xFQU47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQ29tcGFyaXNvbiAnJHtvcH0nIHJlcXVpcmVzIG51bWJlcnNgLCBleHByKTtcblx0XHR9XG5cblx0XHRpZiAoR1JBTU1BUi5FUVVBTElUWS5pbmNsdWRlcyhvcCkpIHtcblx0XHRcdGlmIChsZWZ0LmFjY2VwdHMocmlnaHQpKSB7XG5cdFx0XHRcdHJldHVybiBUeXBlcy5CT09MRUFOO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBjb21wYXJlICR7bGVmdC5uYW1lfSB3aXRoICR7cmlnaHQubmFtZX1gLCBleHByKTtcblx0XHR9XG5cblx0XHRpZiAoR1JBTU1BUi5MT0dJQ0FMLmluY2x1ZGVzKG9wKSkge1xuXHRcdFx0aWYgKGxlZnQuYWNjZXB0cyhUeXBlcy5CT09MRUFOKSAmJiByaWdodC5hY2NlcHRzKFR5cGVzLkJPT0xFQU4pKSB7XG5cdFx0XHRcdHJldHVybiBUeXBlcy5CT09MRUFOO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYExvZ2ljYWwgb3BlcmF0b3IgJyR7b3B9JyByZXF1aXJlcyBib29sZWFuc2AsIGV4cHIpO1xuXHRcdH1cblxuXHRcdHRoaXMudHlwZUVycm9yKGBJbnZhbGlkIGJpbmFyeSBvcGVyYXRpb25gLCBleHByKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tGaWVsZEFjY2Vzcyhub2RlOiBBU1RNZW1iZXJOb2RlLCBjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wsIGZpZWxkU3ltYm9sOiBGaWVsZFN5bWJvbCwgc2NvcGU6IFR5cGVTY29wZSk6IHZvaWQge1xuXHRcdGlmIChmaWVsZFN5bWJvbC5pc1B1YmxpYykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICghc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBhY2Nlc3MgcHJpdmF0ZSBtZW1iZXIgJHtub2RlLnByb3BlcnR5fSBvZiAke2NsYXNzU3ltYm9sLm5hbWV9YCwgbm9kZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgIT09IGZpZWxkU3ltYm9sLm93bmVyKSB7XG5cdFx0XHRpZiAoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCBpbnN0YW5jZW9mIENsYXNzU3ltYm9sXG5cdFx0XHRcdCYmIHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wuc3VwZXJDbGFzc1N5bWJvbCAhPT0gZmllbGRTeW1ib2wub3duZXIpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBhY2Nlc3MgcHJpdmF0ZSBtZW1iZXIgJHtub2RlLnByb3BlcnR5fSBvZiAke2NsYXNzU3ltYm9sLm5hbWV9YCwgbm9kZSk7XG5cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrSW5zdGFuY2VNZXRob2RBY2Nlc3Mobm9kZTogQVNUTWVtYmVyTm9kZSwgY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sLCBtZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCwgc2NvcGU6IFR5cGVTY29wZSk6IHZvaWQge1xuXHRcdGlmIChtZXRob2RTeW1ib2wuaXNQdWJsaWMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIXNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgYWNjZXNzIHByaXZhdGUgbWV0aG9kICR7bm9kZS5wcm9wZXJ0eX0gb2YgJHtjbGFzc1N5bWJvbC5uYW1lfWAsIG5vZGUpO1xuXHRcdH1cblxuXHRcdGlmIChzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sICE9PSBtZXRob2RTeW1ib2wub3duZXIpIHtcblx0XHRcdGlmIChzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sIGluc3RhbmNlb2YgQ2xhc3NTeW1ib2xcblx0XHRcdFx0JiYgc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbC5zdXBlckNsYXNzU3ltYm9sICE9PSBtZXRob2RTeW1ib2wub3duZXIpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBhY2Nlc3MgcHJpdmF0ZSBtZXRob2QgJHtub2RlLnByb3BlcnR5fSBvZiAke2NsYXNzU3ltYm9sLm5hbWV9YCwgbm9kZSk7XG5cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrU3RhdGljTWV0aG9kQWNjZXNzKGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCwgbWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wsIHNjb3BlOiBUeXBlU2NvcGUpOiB2b2lkIHtcblx0XHRpZiAoIW1ldGhvZFN5bWJvbC5pc1N0YXRpYykge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBjYWxsIGluc3RhbmNlIG1ldGhvZCAke2NsYXNzU3ltYm9sLm5hbWV9LiR7bWV0aG9kU3ltYm9sLm5hbWV9IGFzIHN0YXRpYyBtZXRob2RgKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAobWV0aG9kU3ltYm9sLmlzUHVibGljKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCFzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGFjY2VzcyBwcml2YXRlIG1ldGhvZCAke21ldGhvZFN5bWJvbC5uYW1lfSBvZiAke2NsYXNzU3ltYm9sLm5hbWV9YCxcblx0XHRcdCAgICAgICAgICAgICAgIG1ldGhvZFN5bWJvbC5ub2RlKTtcblx0XHR9XG5cblx0XHRpZiAoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCAhPT0gbWV0aG9kU3ltYm9sLm93bmVyKSB7XG5cdFx0XHRpZiAoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCBpbnN0YW5jZW9mIENsYXNzU3ltYm9sXG5cdFx0XHRcdCYmIHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wuc3VwZXJDbGFzc1N5bWJvbCAhPT0gbWV0aG9kU3ltYm9sLm93bmVyKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgYWNjZXNzIHByaXZhdGUgbWV0aG9kICR7bWV0aG9kU3ltYm9sLm5hbWV9IG9mICR7Y2xhc3NTeW1ib2wubmFtZX1gLFxuXHRcdFx0XHQgICAgICAgICAgICAgICBtZXRob2RTeW1ib2wubm9kZSk7XG5cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrTWVtYmVyRXhwcmVzc2lvbihub2RlOiBBU1RNZW1iZXJOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0Y29uc3Qgb2JqZWN0VHlwZTogVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKG5vZGUub2JqZWN0LCBzY29wZSk7XG5cblx0XHRpZiAob2JqZWN0VHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSkge1xuXHRcdFx0Y29uc3QgY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sID0gb2JqZWN0VHlwZS5jbGFzc1N5bWJvbDtcblxuXHRcdFx0Y29uc3QgaW5zdGFuY2VGaWVsZFN5bWJvbDogRmllbGRTeW1ib2wgfCBudWxsID0gY2xhc3NTeW1ib2wucmVzb2x2ZUluc3RhbmNlRmllbGRTeW1ib2wobm9kZS5wcm9wZXJ0eSk7XG5cdFx0XHRpZiAoaW5zdGFuY2VGaWVsZFN5bWJvbCkge1xuXHRcdFx0XHR0aGlzLmNoZWNrRmllbGRBY2Nlc3Mobm9kZSwgY2xhc3NTeW1ib2wsIGluc3RhbmNlRmllbGRTeW1ib2wsIHNjb3BlKTtcblx0XHRcdFx0cmV0dXJuIGluc3RhbmNlRmllbGRTeW1ib2wuZmllbGRUeXBlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzdGF0aWNGaWVsZFN5bWJvbDogRmllbGRTeW1ib2wgfCBudWxsID0gY2xhc3NTeW1ib2wucmVzb2x2ZVN0YXRpY0ZpZWxkU3ltYm9sKG5vZGUucHJvcGVydHkpO1xuXHRcdFx0aWYgKHN0YXRpY0ZpZWxkU3ltYm9sKSB7XG5cdFx0XHRcdHRoaXMuY2hlY2tGaWVsZEFjY2Vzcyhub2RlLCBjbGFzc1N5bWJvbCwgc3RhdGljRmllbGRTeW1ib2wsIHNjb3BlKTtcblx0XHRcdFx0cmV0dXJuIHN0YXRpY0ZpZWxkU3ltYm9sLmZpZWxkVHlwZTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFVua25vd24gbWVtYmVyICR7bm9kZS5wcm9wZXJ0eX1gLCBub2RlKTtcblx0XHR9XG5cblx0XHR0aGlzLnR5cGVFcnJvcihcIkNhbm5vdCBhY2Nlc3MgbWVtYmVyIG9mIG5vbi1vYmplY3RcIiwgbm9kZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrVGhpc0V4cHJlc3Npb24obm9kZTogQVNUTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IENsYXNzUmVmVHlwZSB7XG5cdFx0aWYgKHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgaW5zdGFuY2VvZiBDbGFzc1N5bWJvbCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDbGFzc1JlZlR5cGUoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCk7XG5cdFx0fVxuXHRcdHRoaXMudHlwZUVycm9yKCd0aGlzIG91dHNpZGUgb2YgY2xhc3MnLCBub2RlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlOiBBU1ROb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0aWYgKHNjb3BlLmhhc1R5cGUobm9kZS5uYW1lKSkge1xuXHRcdFx0cmV0dXJuIHNjb3BlLmdldFR5cGUobm9kZS5uYW1lKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKG5vZGUubmFtZSkpIHtcblx0XHRcdHJldHVybiBuZXcgQ2xhc3NSZWZUeXBlKHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2wobm9kZS5uYW1lKSk7XG5cdFx0fVxuXHRcdHRoaXMudHlwZUVycm9yKGBVbmRlZmluZWQgaWRlbnRpZmllciAke25vZGUubmFtZX1gLCBub2RlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tOZXdFeHByZXNzaW9uKG5vZGU6IEFTVE5ld05vZGUsIHNjb3BlOiBUeXBlU2NvcGUsIGV4cGVjdGVkVHlwZTogVHlwZSB8IG51bGwgPSBudWxsKTogQ2xhc3NSZWZUeXBlIHtcblx0XHRjb25zdCBjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wgPSB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKG5vZGUubmFtZSk7XG5cblx0XHRsZXQgaW5zdGFuY2VUeXBlO1xuXHRcdGlmIChub2RlLnR5cGVBbm5vdGF0aW9uLnR5cGVBcmd1bWVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0Y29uc3QgdHlwZUFyZ3VtZW50cyA9IG5vZGVcblx0XHRcdFx0LnR5cGVBbm5vdGF0aW9uXG5cdFx0XHRcdC50eXBlQXJndW1lbnRzXG5cdFx0XHRcdC5tYXAodHlwZUFyZ3VtZW50ID0+IHRoaXMud3JhcFR5cGUodHlwZUFyZ3VtZW50LCBzY29wZSkpO1xuXG5cdFx0XHRpZiAodHlwZUFyZ3VtZW50cy5sZW5ndGggIT09IGNsYXNzU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgV3JvbmcgbnVtYmVyIG9mIHR5cGUgYXJndW1lbnRzYCwgbm9kZSk7XG5cdFx0XHR9XG5cblx0XHRcdGluc3RhbmNlVHlwZSA9IG5ldyBDbGFzc1JlZlR5cGUoY2xhc3NTeW1ib2wsIHR5cGVBcmd1bWVudHMpO1xuXHRcdH0gZWxzZSBpZiAoZXhwZWN0ZWRUeXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0XHRpbnN0YW5jZVR5cGUgPSBleHBlY3RlZFR5cGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGluc3RhbmNlVHlwZSA9IG5ldyBDbGFzc1JlZlR5cGUoXG5cdFx0XHRcdGNsYXNzU3ltYm9sLFxuXHRcdFx0XHRjbGFzc1N5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5tYXAoKCkgPT4gVHlwZXMuTUlYRUQpXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmIChjbGFzc1N5bWJvbC5jb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbCkge1xuXHRcdFx0dGhpcy5jaGVja0NhbGxBcmd1bWVudHMoY2xhc3NTeW1ib2wuY29uc3RydWN0b3JNZXRob2RTeW1ib2wsIG5vZGUuYXJndW1lbnRzLCBzY29wZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGV4cGVjdGVkVHlwZSAmJiAhZXhwZWN0ZWRUeXBlLmFjY2VwdHMoaW5zdGFuY2VUeXBlKSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFR5cGUgbWlzbWF0Y2g6ICR7ZXhwZWN0ZWRUeXBlfSA8PiAke2luc3RhbmNlVHlwZX1gLCBub2RlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaW5zdGFuY2VUeXBlO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0FycmF5RXhwcmVzc2lvbihub2RlOiBBU1RBcnJheU5vZGUsIHNjb3BlOiBUeXBlU2NvcGUsIGV4cGVjdGVkVHlwZTogVHlwZSB8IG51bGwgPSBudWxsKTogQ2xhc3NSZWZUeXBlIHtcblxuXHRcdGlmIChub2RlLmVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0aWYgKGV4cGVjdGVkVHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSkge1xuXHRcdFx0XHRleHBlY3RlZFR5cGUgPSBleHBlY3RlZFR5cGUudHlwZUFyZ3VtZW50c1swXSB8fCBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcy5uZXdBcnJheVR5cGVPZihleHBlY3RlZFR5cGUgfHwgVHlwZXMuTUlYRUQpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNsYXNzUmVmTmFtZSA9IFByaW1pdGl2ZUNsYXNzVHlwZXMuZ2V0Q2xhc3NSZWZOYW1lKFByaW1pdGl2ZUNsYXNzVHlwZXMuQVJSQVkpO1xuXG5cdFx0bGV0IGV4cGVjdGVkVHlwZU9mSXRlbTogVHlwZTtcblx0XHRpZiAoZXhwZWN0ZWRUeXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlICYmIGV4cGVjdGVkVHlwZS5jbGFzc1N5bWJvbC5uYW1lID09PSBjbGFzc1JlZk5hbWUpIHtcblx0XHRcdGV4cGVjdGVkVHlwZU9mSXRlbSA9IGV4cGVjdGVkVHlwZS50eXBlQXJndW1lbnRzWzBdIHx8IFR5cGVzLk1JWEVEO1xuXHRcdH0gZWxzZSBpZiAobm9kZS5lbGVtZW50c1swXSkge1xuXHRcdFx0ZXhwZWN0ZWRUeXBlT2ZJdGVtID0gdGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5lbGVtZW50c1swXSwgc2NvcGUsIGV4cGVjdGVkVHlwZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKCdBcnJheSBleHByZXNzaW9uIG11c3QgaGF2ZSBhdCBsZWFzdCBvbmUgZWxlbWVudCcsIG5vZGUpO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgaXRlbSBvZiBub2RlLmVsZW1lbnRzKSB7XG5cdFx0XHRjb25zdCBhY3R1YWxUeXBlT2ZJdGVtOiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24oaXRlbSwgc2NvcGUsIGV4cGVjdGVkVHlwZU9mSXRlbSk7XG5cdFx0XHRpZiAoIWV4cGVjdGVkVHlwZU9mSXRlbS5hY2NlcHRzKGFjdHVhbFR5cGVPZkl0ZW0pKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKFxuXHRcdFx0XHRcdGBBcnJheSBlbGVtZW50cyBtdXN0IGhhdmUgc2FtZSB0eXBlLCBnb3QgJHtleHBlY3RlZFR5cGVPZkl0ZW19IGFuZCAke2FjdHVhbFR5cGVPZkl0ZW19YCxcblx0XHRcdFx0XHRub2RlXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMubmV3QXJyYXlUeXBlT2YoZXhwZWN0ZWRUeXBlT2ZJdGVtKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tVbmFyeUV4cHJlc3Npb24obm9kZTogQVNUVW5hcnlOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0Y29uc3Qgb3BlcmFuZCA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKG5vZGUuYXJndW1lbnQsIHNjb3BlKTtcblx0XHRjb25zdCBvcCA9IG5vZGUub3BlcmF0b3I7XG5cdFx0aWYgKG9wID09PSBHUkFNTUFSLkVYQ0xBTUFUSU9OX01BUkspIHtcblx0XHRcdGlmIChvcGVyYW5kLmVxdWFscyhUeXBlcy5CT09MRUFOKSkge1xuXHRcdFx0XHRyZXR1cm4gVHlwZXMuQk9PTEVBTjtcblx0XHRcdH1cblx0XHRcdHRoaXMudHlwZUVycm9yKGBVbmFyeSAnIScgcmVxdWlyZXMgYm9vbGVhbiwgZ290ICR7b3BlcmFuZC5uYW1lfWAsIG5vZGUpO1xuXHRcdH1cblx0XHR0aGlzLnR5cGVFcnJvcihgSW52YWxpZCB1bmFyeSBvcGVyYXRvciAke29wfWAsIG5vZGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0xhbWJkYUV4cHJlc3Npb24obm9kZTogQVNUTGFtYmRhTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IExhbWJkYVR5cGUge1xuXHRcdGNvbnN0IGxhbWJkYVNjb3BlID0gbmV3IFR5cGVTY29wZShzY29wZSk7XG5cdFx0Y29uc3QgcGFyYW1ldGVycyA9IG5vZGUucGFyYW1ldGVycy5tYXAocGFyYW1ldGVyTm9kZSA9PiB7XG5cdFx0XHRjb25zdCBwYXJhbWV0ZXJTeW1ib2w6IFBhcmFtZXRlclN5bWJvbCA9IHRoaXMucGFyYW1ldGVyTm9kZVRvU3ltYm9sKHBhcmFtZXRlck5vZGUpO1xuXG5cdFx0XHRsYW1iZGFTY29wZS5kZWZpbmVUeXBlKHBhcmFtZXRlck5vZGUubmFtZSwgcGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGUpO1xuXG5cdFx0XHRyZXR1cm4gcGFyYW1ldGVyU3ltYm9sO1xuXHRcdH0pO1xuXG5cdFx0aWYgKG5vZGUuY2hpbGRyZW5bMF0pIHtcblx0XHRcdHJldHVybiBuZXcgTGFtYmRhVHlwZShwYXJhbWV0ZXJzLCB0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLmNoaWxkcmVuWzBdLCBsYW1iZGFTY29wZSkpO1xuXHRcdH1cblxuXHRcdHRoaXMudHlwZUVycm9yKCdMYW1iZGEgZXhwcmVzc2lvbiBtdXN0IGhhdmUgYSByZXR1cm4gdHlwZScsIG5vZGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0NhbGxFeHByZXNzaW9uKG5vZGU6IEFTVENhbGxOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0Y29uc3QgY2FsbGVlID0gbm9kZS5jYWxsZWU7XG5cblx0XHRpZiAoY2FsbGVlLnR5cGUgPT09IEFTVE5vZGVUeXBlLklERU5USUZJRVIgJiYgY2FsbGVlLm5hbWUgPT09IEdSQU1NQVIuU1VQRVIpIHtcblx0XHRcdHJldHVybiB0aGlzLmNoZWNrU3VwZXJDb25zdHJ1Y3RvckNhbGwobm9kZSwgc2NvcGUpO1xuXHRcdH1cblxuXHRcdC8vIENsYXNzLm1ldGhvZCgpXG5cdFx0aWYgKGNhbGxlZSBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGVcblx0XHRcdCYmIGNhbGxlZS5vYmplY3QudHlwZSA9PT0gQVNUTm9kZVR5cGUuSURFTlRJRklFUlxuXHRcdFx0JiYgdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5oYXNTeW1ib2woY2FsbGVlLm9iamVjdC5uYW1lKVxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tTdGF0aWNDYWxsKFxuXHRcdFx0XHRjYWxsZWUub2JqZWN0Lm5hbWUsXG5cdFx0XHRcdGNhbGxlZS5wcm9wZXJ0eSxcblx0XHRcdFx0bm9kZS5hcmd1bWVudHMsXG5cdFx0XHRcdHNjb3BlXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIGV4cHIubWV0aG9kKClcblx0XHRpZiAoY2FsbGVlIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tJbnN0YW5jZUNhbGwoY2FsbGVlLCBub2RlLmFyZ3VtZW50cywgc2NvcGUpO1xuXHRcdH1cblxuXHRcdGlmIChjYWxsZWUgaW5zdGFuY2VvZiBBU1RMYW1iZGFOb2RlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jaGVja0xhbWJkYUNhbGwodGhpcy5jaGVja0xhbWJkYUV4cHJlc3Npb24oY2FsbGVlLCBzY29wZSksIG5vZGUuYXJndW1lbnRzLCBzY29wZSk7XG5cdFx0fVxuXG5cdFx0Ly8gSWRlbnRpZmllcjogVmFyaWFibGUgLyBMYW1iZGFcblx0XHRpZiAoY2FsbGVlLnR5cGUgPT09IEFTVE5vZGVUeXBlLklERU5USUZJRVIpIHtcblx0XHRcdGlmIChzY29wZS5oYXNUeXBlKGNhbGxlZS5uYW1lKSkge1xuXHRcdFx0XHRjb25zdCB0eXBlID0gc2NvcGUuZ2V0VHlwZShjYWxsZWUubmFtZSk7XG5cdFx0XHRcdGlmICh0eXBlIGluc3RhbmNlb2YgTGFtYmRhVHlwZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrTGFtYmRhQ2FsbCh0eXBlLCBub2RlLmFyZ3VtZW50cywgc2NvcGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgY2FsbCBub24tZnVuY3Rpb24gJHtjYWxsZWUubmFtZX1gLCBub2RlKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRmFsbGJhY2s6IGdsb2JhbGUgRnVua3Rpb25cblx0XHRcdHJldHVybiB0aGlzLmNoZWNrRnVuY3Rpb25DYWxsKGNhbGxlZS5uYW1lLCBub2RlLmFyZ3VtZW50cywgc2NvcGUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBUeXBlcy5NSVhFRDtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tTdXBlckNvbnN0cnVjdG9yQ2FsbChub2RlOiBBU1RDYWxsTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGNvbnN0IGN1cnJlbnRDbGFzcyA9IHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2w7XG5cblx0XHRpZiAoIShjdXJyZW50Q2xhc3MgaW5zdGFuY2VvZiBDbGFzc1N5bWJvbCkpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKCdzdXBlcigpIHVzZWQgb3V0c2lkZSBvZiBjbGFzcycsIG5vZGUpO1xuXHRcdH1cblxuXHRcdGlmICghY3VycmVudENsYXNzLnN1cGVyQ2xhc3MpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKCdzdXBlcigpIHVzZWQgb3V0c2lkZSBvZiBjbGFzcyBoaWVyYXJjaHknLCBub2RlKTtcblx0XHR9XG5cblx0XHRjb25zdCBzdXBlclN5bWJvbDogQ2xhc3NTeW1ib2wgPSB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKGN1cnJlbnRDbGFzcy5zdXBlckNsYXNzKTtcblx0XHRpZiAoIXN1cGVyU3ltYm9sLmNvbnN0cnVjdG9yTWV0aG9kU3ltYm9sKSB7XG5cdFx0XHRpZiAobm9kZS5hcmd1bWVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcignU3VwZXIgY29uc3RydWN0b3IgdGFrZXMgbm8gYXJndW1lbnRzJywgbm9kZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gVHlwZXMuVk9JRDtcblx0XHR9XG5cblx0XHR0aGlzLmNoZWNrQ2FsbEFyZ3VtZW50cyhzdXBlclN5bWJvbC5jb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbCwgbm9kZS5hcmd1bWVudHMsIHNjb3BlKTtcblxuXHRcdHJldHVybiBUeXBlcy5WT0lEO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0NhbGxPbk51bGxPYmplY3RUeXBlKG9iamVjdFR5cGU6IFR5cGUsIG5vZGU6IEFTVE5vZGUpOiB2b2lkIHtcblx0XHRpZiAob2JqZWN0VHlwZS5lcXVhbHMoVHlwZXMuTlVMTCkpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgY2FsbCBtZXRob2Qgb24gbnVsbGAsIG5vZGUpO1xuXHRcdH1cblx0XHRpZiAob2JqZWN0VHlwZSBpbnN0YW5jZW9mIE51bGxhYmxlVHlwZSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBjYWxsIG1ldGhvZCBvbiBudWxsYWJsZSB0eXBlICR7b2JqZWN0VHlwZX1gLCBub2RlKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrSW5zdGFuY2VDYWxsKGNhbGxlZTogQVNUTWVtYmVyTm9kZSwgY2FsbEFyZ3VtZW50czogQVNUTm9kZVtdLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0bGV0IG9iamVjdFR5cGU6IFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihjYWxsZWUub2JqZWN0LCBzY29wZSk7XG5cblx0XHRvYmplY3RUeXBlID0gQXV0b2JveGluZy5hdXRvYm94SWZOZWVkZWQob2JqZWN0VHlwZSwgdGhpcy5vYmplY3RSZWdpc3RyeSk7XG5cblx0XHR0aGlzLmNoZWNrQ2FsbE9uTnVsbE9iamVjdFR5cGUob2JqZWN0VHlwZSwgY2FsbGVlKTtcblxuXHRcdGlmIChvYmplY3RUeXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0XHRjb25zdCBtZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCA9IHRoaXMucmVzb2x2ZUluc3RhbmNlTWV0aG9kZShcblx0XHRcdFx0b2JqZWN0VHlwZS5jbGFzc1N5bWJvbCxcblx0XHRcdFx0Y2FsbGVlLnByb3BlcnR5XG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAobWV0aG9kU3ltYm9sLmlzU3RhdGljKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgY2FsbCBzdGF0aWMgbWV0aG9kICR7Y2FsbGVlLnByb3BlcnR5fSBvbiBpbnN0YW5jZSBvZiAke2NhbGxlZS5vYmplY3QubmFtZX1gLFxuXHRcdFx0XHQgICAgICAgICAgICAgICBjYWxsZWUpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmNoZWNrSW5zdGFuY2VNZXRob2RBY2Nlc3MoY2FsbGVlLCBvYmplY3RUeXBlLmNsYXNzU3ltYm9sLCBtZXRob2RTeW1ib2wsIHNjb3BlKTtcblxuXHRcdFx0Y29uc3Qgb3duZXI6IENsYXNzU3ltYm9sIHwgSW50ZXJmYWNlU3ltYm9sIHwgbnVsbCA9IG1ldGhvZFN5bWJvbC5vd25lcjtcblxuXHRcdFx0aWYgKG93bmVyID09PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgY2FsbCBtZXRob2Qgb24gbm9uLW9iamVjdGAsIGNhbGxlZSk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHN1YnN0aXR1dGlvbk1hcDogTWFwPHN0cmluZywgVHlwZT4gPSBidWlsZFR5cGVTdWJzdGl0dXRpb25NYXAoXG5cdFx0XHRcdG93bmVyLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLFxuXHRcdFx0XHRvYmplY3RUeXBlLnR5cGVBcmd1bWVudHNcblx0XHRcdCk7XG5cblx0XHRcdHRoaXMuY2hlY2tDYWxsQXJndW1lbnRzKG1ldGhvZFN5bWJvbCwgY2FsbEFyZ3VtZW50cywgc2NvcGUsIHN1YnN0aXR1dGlvbk1hcCk7XG5cblx0XHRcdHJldHVybiBzdWJzdGl0dXRlVHlwZShtZXRob2RTeW1ib2wucmV0dXJuVHlwZSwgc3Vic3RpdHV0aW9uTWFwKTtcblx0XHR9XG5cblx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNhbGwgbWV0aG9kIG9uIG5vbi1vYmplY3RgLCBjYWxsZWUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1N0YXRpY0NhbGwoY2xhc3NOYW1lOiBzdHJpbmcsIG1ldGhvZE5hbWU6IHN0cmluZywgY2FsbEFyZ3VtZW50czogQVNUTm9kZVtdLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0Y29uc3QgY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sID0gdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChjbGFzc05hbWUpO1xuXG5cdFx0Y29uc3QgbWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wgfCBudWxsID0gY2xhc3NTeW1ib2wuc3RhdGljTWV0aG9kU3ltYm9scy5nZXQobWV0aG9kTmFtZSkgfHwgbnVsbDtcblx0XHRpZiAoIW1ldGhvZFN5bWJvbCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFVua25vd24gc3RhdGljIG1ldGhvZCAke2NsYXNzTmFtZX0uJHttZXRob2ROYW1lfWApO1xuXHRcdH1cblxuXHRcdHRoaXMuY2hlY2tTdGF0aWNNZXRob2RBY2Nlc3MoY2xhc3NTeW1ib2wsIG1ldGhvZFN5bWJvbCwgc2NvcGUpXG5cblx0XHR0aGlzLmNoZWNrQ2FsbEFyZ3VtZW50cyhtZXRob2RTeW1ib2wsIGNhbGxBcmd1bWVudHMsIHNjb3BlKTtcblxuXHRcdHJldHVybiBtZXRob2RTeW1ib2wucmV0dXJuVHlwZTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tMYW1iZGFDYWxsKGxhbWJkYTogTGFtYmRhVHlwZSwgY2FsbEFyZ3VtZW50czogQVNUTm9kZVtdLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cblx0XHR0aGlzLmNoZWNrQ2FsbEFyZ3VtZW50cyhsYW1iZGEsIGNhbGxBcmd1bWVudHMsIHNjb3BlKTtcblxuXHRcdHJldHVybiBsYW1iZGEucmV0dXJuVHlwZTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tGdW5jdGlvbkNhbGwobmFtZTogc3RyaW5nLCBjYWxsQXJndW1lbnRzOiBBU1ROb2RlW10sIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRpZiAoIWdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5LmhhcyhuYW1lKSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFVua25vd24gZnVuY3Rpb24gJHtuYW1lfWApO1xuXHRcdH1cblxuXHRcdGNvbnN0IG5hdGl2ZUZ1bmN0aW9uOiBOYXRpdmVGdW5jdGlvbiA9IGdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5LmdldChuYW1lKTtcblxuXHRcdHRoaXMuY2hlY2tDYWxsQXJndW1lbnRzKG5hdGl2ZUZ1bmN0aW9uLCBjYWxsQXJndW1lbnRzLCBzY29wZSk7XG5cblx0XHRyZXR1cm4gbmF0aXZlRnVuY3Rpb24ucmV0dXJuVHlwZVxuXHRcdFx0PyB0aGlzLndyYXBUeXBlKG5hdGl2ZUZ1bmN0aW9uLnJldHVyblR5cGUsIHNjb3BlKVxuXHRcdFx0OiBUeXBlcy5WT0lEO1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJhbWV0ZXJzU3ltYm9sc0Zyb21DYWxsYWJsZVN5bWJvbChjYWxsYWJsZVN5bWJvbDogTWV0aG9kU3ltYm9sIHwgTGFtYmRhVHlwZSB8IE5hdGl2ZUZ1bmN0aW9uKTogUGFyYW1ldGVyU3ltYm9sW10ge1xuXHRcdGlmIChjYWxsYWJsZVN5bWJvbCBpbnN0YW5jZW9mIE5hdGl2ZUZ1bmN0aW9uKSB7XG5cdFx0XHRyZXR1cm4gY2FsbGFibGVTeW1ib2xcblx0XHRcdFx0LnBhcmFtZXRlck5vZGVzXG5cdFx0XHRcdC5tYXAocGFyYW1ldGVyTm9kZSA9PiB0aGlzLnBhcmFtZXRlck5vZGVUb1N5bWJvbChwYXJhbWV0ZXJOb2RlKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNhbGxhYmxlU3ltYm9sLnBhcmFtZXRlclN5bWJvbHNcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tDYWxsQXJndW1lbnRzKFxuXHRcdGNhbGxhYmxlU3ltYm9sOiBNZXRob2RTeW1ib2wgfCBMYW1iZGFUeXBlIHwgTmF0aXZlRnVuY3Rpb24sXG5cdFx0Y2FsbEFyZ3VtZW50czogQVNUTm9kZVtdLFxuXHRcdHNjb3BlOiBUeXBlU2NvcGUsXG5cdFx0c3Vic3RpdHV0aW9uTWFwOiBNYXA8c3RyaW5nLCBUeXBlPiA9IG5ldyBNYXAoKVxuXHQpOiB2b2lkIHtcblx0XHRjb25zdCBjYWxsU2NvcGUgPSBuZXcgVHlwZVNjb3BlKHNjb3BlKTtcblx0XHRsZXQgcGFyYW1ldGVyU3ltYm9scyA9IHRoaXMucGFyYW1ldGVyc1N5bWJvbHNGcm9tQ2FsbGFibGVTeW1ib2woY2FsbGFibGVTeW1ib2wpO1xuXG5cdFx0aWYgKGNhbGxBcmd1bWVudHMubGVuZ3RoID4gcGFyYW1ldGVyU3ltYm9scy5sZW5ndGgpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKFwiQXJndW1lbnQgY291bnQgbWlzbWF0Y2hcIik7XG5cdFx0fVxuXG5cdFx0bGV0IGFjdHVhbFR5cGU6IFR5cGU7XG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHBhcmFtZXRlclN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHBhcmFtZXRlclN5bWJvbDogUGFyYW1ldGVyU3ltYm9sIHwgbnVsbCA9IHBhcmFtZXRlclN5bWJvbHNbaV0gfHwgbnVsbDtcblx0XHRcdGNvbnN0IGNhbGxBcmd1bWVudDogQVNUTm9kZSB8IG51bGwgPSBjYWxsQXJndW1lbnRzW2ldIHx8IG51bGw7XG5cblx0XHRcdGlmIChwYXJhbWV0ZXJTeW1ib2wpIHtcblx0XHRcdFx0Y29uc3QgZXhwZWN0ZWRUeXBlOiBUeXBlID0gc3Vic3RpdHV0ZVR5cGUocGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGUsIHN1YnN0aXR1dGlvbk1hcCk7XG5cblx0XHRcdFx0aWYgKGNhbGxBcmd1bWVudCkge1xuXHRcdFx0XHRcdGFjdHVhbFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihjYWxsQXJndW1lbnQsIGNhbGxTY29wZSwgZXhwZWN0ZWRUeXBlKTtcblx0XHRcdFx0fSBlbHNlIGlmIChwYXJhbWV0ZXJTeW1ib2wuZGVmYXVsdFR5cGUpIHtcblx0XHRcdFx0XHRhY3R1YWxUeXBlID0gcGFyYW1ldGVyU3ltYm9sLmRlZmF1bHRUeXBlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMudHlwZUVycm9yKGBNaXNzaW5nIGFyZ3VtZW50ICR7cGFyYW1ldGVyU3ltYm9sLm5hbWV9YCwgY2FsbEFyZ3VtZW50KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuY2hlY2tBc3NpZ25hYmxlKGV4cGVjdGVkVHlwZSwgYWN0dWFsVHlwZSwgY2FsbEFyZ3VtZW50c1tpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0Fzc2lnbmFibGUoZXhwZWN0ZWRUeXBlOiBUeXBlLCBhY3R1YWxUeXBlOiBUeXBlLCBub2RlOiBBU1ROb2RlIHwgbnVsbCA9IG51bGwpOiB2b2lkIHtcblx0XHRpZiAoZXhwZWN0ZWRUeXBlLmVxdWFscyhhY3R1YWxUeXBlKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChleHBlY3RlZFR5cGUgaW5zdGFuY2VvZiBNaXhlZFR5cGUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoZXhwZWN0ZWRUeXBlIGluc3RhbmNlb2YgTnVsbGFibGVUeXBlKSB7XG5cdFx0XHRpZiAoYWN0dWFsVHlwZSA9PT0gVHlwZXMuTlVMTCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoZXhwZWN0ZWRUeXBlLmlubmVyLmFjY2VwdHMoYWN0dWFsVHlwZSkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChleHBlY3RlZFR5cGUuYWNjZXB0cyhhY3R1YWxUeXBlKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMudHlwZUVycm9yKGBUeXBlIG1pc21hdGNoOiAke2V4cGVjdGVkVHlwZX0gPD4gJHthY3R1YWxUeXBlfWAsIG5vZGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0JvZHkoY2hpbGRyZW46IEFTVE5vZGVbXSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGxldCByZXR1cm5UeXBlOiBUeXBlID0gVHlwZXMuTUlYRUQ7XG5cblx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG5cdFx0XHRjb25zdCBzdGF0ZW1lbnRSZXN1bHQgPSB0aGlzLmNoZWNrU3RhdGVtZW50KGNoaWxkLCBzY29wZSk7XG5cdFx0XHRpZiAoc3RhdGVtZW50UmVzdWx0LmRpZFJldHVybiAmJiBzdGF0ZW1lbnRSZXN1bHQucmV0dXJuVHlwZSkge1xuXHRcdFx0XHRyZXR1cm5UeXBlID0gc3RhdGVtZW50UmVzdWx0LnJldHVyblR5cGU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJldHVyblR5cGU7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrUmV0dXJuVHlwZShleHBlY3RlZFR5cGU6IFR5cGUsIGFjdHVhbFR5cGU6IFR5cGUsIG5vZGU6IEFTVE1ldGhvZE5vZGUpOiB2b2lkIHtcblx0XHQvLyB2b2lkLU1ldGhvZGVcblx0XHRpZiAoZXhwZWN0ZWRUeXBlID09PSBUeXBlcy5WT0lEKSB7XG5cdFx0XHRpZiAoYWN0dWFsVHlwZSAhPT0gVHlwZXMuTUlYRUQgJiYgYWN0dWFsVHlwZSAhPT0gVHlwZXMuVk9JRCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IHJldHVybiAke2FjdHVhbFR5cGV9IGZyb20gdm9pZCBtZXRob2RgLCBub2RlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBrZWluIHJldHVybiB2b3JoYW5kZW5cblx0XHRpZiAoYWN0dWFsVHlwZSA9PT0gVHlwZXMuTUlYRUQpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBNaXNzaW5nIHJldHVybiBzdGF0ZW1lbnQgKGV4cGVjdGVkICR7ZXhwZWN0ZWRUeXBlfSlgLCBub2RlKTtcblx0XHR9XG5cblx0XHQvLyB0eXAtaW5rb21wYXRpYmVsXG5cdFx0aWYgKCFleHBlY3RlZFR5cGUuYWNjZXB0cyhhY3R1YWxUeXBlKSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFJldHVybiB0eXBlIG1pc21hdGNoOiBleHBlY3RlZCAke2V4cGVjdGVkVHlwZX0sIGdvdCAke2FjdHVhbFR5cGV9YCwgbm9kZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1ZEb21Ob2RlKG5vZGU6IEFTVFZEb21Ob2RlKTogVHlwZSB7XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sID0gdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChub2RlLnRhZyk7XG5cblx0XHRcdGNvbnN0IG1ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sID0gdGhpcy5yZXNvbHZlSW5zdGFuY2VNZXRob2RlKGNsYXNzU3ltYm9sLCAncmVuZGVyJyk7XG5cblx0XHRcdGlmICghbWV0aG9kU3ltYm9sKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDb21wb25lbnQgJyR7bm9kZS50YWd9JyBoYXMgbm8gcmVuZGVyKCkgbWV0aG9kYCwgbm9kZSk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuY2hlY2tBc3NpZ25hYmxlKG1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlLCBUeXBlcy5WTk9ERSwgbm9kZSk7XG5cblx0XHRcdHJldHVybiBUeXBlcy5WTk9ERTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFR5cGVzLlZOT0RFO1xuXHR9XG5cblx0cHJpdmF0ZSByZXNvbHZlSW5zdGFuY2VNZXRob2RlKGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCwgbWV0aG9kTmFtZTogc3RyaW5nKTogTWV0aG9kU3ltYm9sIHtcblx0XHQvKiogQHR5cGUge01ldGhvZFN5bWJvbHxudWxsfSAqL1xuXHRcdGNvbnN0IG1ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sIHwgbnVsbCA9IHRoaXMucmVzb2x2ZUluSGllcmFyY2h5KFxuXHRcdFx0Y2xhc3NTeW1ib2wsXG5cdFx0XHRjbGFzc1N5bWJvbCA9PiBjbGFzc1N5bWJvbC5pbnN0YW5jZU1ldGhvZFN5bWJvbHMuZ2V0KG1ldGhvZE5hbWUpIHx8IG51bGxcblx0XHQpO1xuXG5cdFx0aWYgKCFtZXRob2RTeW1ib2wpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBVbmtub3duIG1ldGhvZCAke2NsYXNzU3ltYm9sLm5hbWV9LiR7bWV0aG9kTmFtZX1gLCBjbGFzc1N5bWJvbC5ub2RlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWV0aG9kU3ltYm9sO1xuXHR9XG5cblx0cHJpdmF0ZSByZXNvbHZlSW5IaWVyYXJjaHkoY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sLCByZXNvbHZlcjogKGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCkgPT4gYW55KTogYW55IHtcblx0XHRsZXQgY3VycmVudDogQ2xhc3NTeW1ib2wgfCBudWxsID0gY2xhc3NTeW1ib2w7XG5cblx0XHR3aGlsZSAoY3VycmVudCkge1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gcmVzb2x2ZXIoY3VycmVudCk7XG5cdFx0XHRpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQgJiYgcmVzdWx0ICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghY3VycmVudC5zdXBlckNsYXNzKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRjdXJyZW50ID0gdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChjdXJyZW50LnN1cGVyQ2xhc3MpO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cHJpdmF0ZSBuZXdBcnJheVR5cGVPZihlbGVtZW50VHlwZTogVHlwZSk6IENsYXNzUmVmVHlwZSB7XG5cdFx0Y29uc3QgY2xhc3NOYW1lOiBzdHJpbmcgfCBudWxsID0gUHJpbWl0aXZlQ2xhc3NUeXBlcy5nZXRDbGFzc1JlZk5hbWUoUHJpbWl0aXZlQ2xhc3NUeXBlcy5BUlJBWSk7XG5cblx0XHRpZiAoY2xhc3NOYW1lID09PSBudWxsKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcignSW50ZXJuYWwgZXJyb3I6IENhbm5vdCBmaW5kIGNsYXNzIG5hbWUgZm9yIGFycmF5IHR5cGUuJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBDbGFzc1JlZlR5cGUodGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChjbGFzc05hbWUpLCBbZWxlbWVudFR5cGVdKTtcblx0fVxuXG5cdHByaXZhdGUgd3JhcFR5cGUodHlwZTogQVNUVHlwZU5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRyZXR1cm4gd3JhcFR5cGUodHlwZSwgdGhpcy5vYmplY3RSZWdpc3RyeSwgc2NvcGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJhbWV0ZXJOb2RlVG9TeW1ib2wocGFyYW1ldGVyTm9kZTogQVNUUGFyYW1ldGVyTm9kZSwgc2NvcGU6IFR5cGVTY29wZSA9IG5ldyBUeXBlU2NvcGUoKSk6IFBhcmFtZXRlclN5bWJvbCB7XG5cdFx0Y29uc3QgcGFyYW1ldGVyVHlwZSA9IHBhcmFtZXRlck5vZGUudHlwZUFubm90YXRpb25cblx0XHRcdD8gdGhpcy53cmFwVHlwZShwYXJhbWV0ZXJOb2RlLnR5cGVBbm5vdGF0aW9uLCBzY29wZSlcblx0XHRcdDogVHlwZXMuTUlYRUQ7XG5cblx0XHRsZXQgZGVmYXVsdFR5cGUgPSBudWxsO1xuXHRcdGlmIChwYXJhbWV0ZXJOb2RlLmRlZmF1bHRWYWx1ZSkge1xuXHRcdFx0ZGVmYXVsdFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihwYXJhbWV0ZXJOb2RlLmRlZmF1bHRWYWx1ZSwgbmV3IFR5cGVTY29wZSgpKTtcblxuXHRcdFx0aWYgKGRlZmF1bHRUeXBlXG5cdFx0XHRcdCYmICFwYXJhbWV0ZXJUeXBlLmVxdWFscyhUeXBlcy5NSVhFRClcblx0XHRcdFx0JiYgIXBhcmFtZXRlclR5cGUuZXF1YWxzKGRlZmF1bHRUeXBlKSkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihcblx0XHRcdFx0XHRgRGVmYXVsdCB2YWx1ZSBmb3IgcGFyYW1ldGVyICcke3BhcmFtZXRlck5vZGUubmFtZX0nIGRvZXMgbm90IG1hdGNoIHR5cGUuYCxcblx0XHRcdFx0XHRwYXJhbWV0ZXJOb2RlXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBQYXJhbWV0ZXJTeW1ib2woXG5cdFx0XHRwYXJhbWV0ZXJOb2RlLm5hbWUsXG5cdFx0XHRwYXJhbWV0ZXJUeXBlLFxuXHRcdFx0ZGVmYXVsdFR5cGUsXG5cdFx0XHRwYXJhbWV0ZXJOb2RlXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgcmVnaXN0ZXJDbGFzc1N5bWJvbChjbGFzc05vZGU6IEFTVENsYXNzTm9kZSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmhhc1N5bWJvbChjbGFzc05vZGUubmFtZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBjbGFzc1Njb3BlID0gbmV3IFR5cGVTY29wZSgpO1xuXHRcdGNvbnN0IGNsYXNzU3ltYm9sID0gbmV3IENsYXNzU3ltYm9sKGNsYXNzTm9kZSk7XG5cblx0XHR0cnkge1xuXHRcdFx0aWYgKGNsYXNzU3ltYm9sLnN1cGVyQ2xhc3MpIHtcblx0XHRcdFx0Y2xhc3NTeW1ib2wuc3VwZXJDbGFzc1N5bWJvbCA9IHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2woY2xhc3NTeW1ib2wuc3VwZXJDbGFzcyk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdH1cblxuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuYWRkQ2xhc3NTeW1ib2woY2xhc3NTeW1ib2wpO1xuXG5cdFx0Y2xhc3NOb2RlLnR5cGVQYXJhbWV0ZXJzLmZvckVhY2gobmFtZSA9PiB7XG5cdFx0XHRjbGFzc1N5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5wdXNoKG5ldyBUeXBlUGFyYW1ldGVyU3ltYm9sKG5hbWUpKTtcblx0XHRcdGNsYXNzU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcobmFtZSwgbmV3IFR5cGVWYXJpYWJsZShuYW1lKSk7XG5cdFx0fSk7XG5cblx0XHRmb3IgKGNvbnN0IHR5cGVOb2RlIG9mIGNsYXNzTm9kZS5pbXBsZW1lbnRzSW50ZXJmYWNlcykge1xuXHRcdFx0Y29uc3QgaW50ZXJmYWNlVHlwZTogVHlwZSA9IHRoaXMud3JhcFR5cGUodHlwZU5vZGUsIGNsYXNzU2NvcGUpO1xuXHRcdFx0aWYgKGludGVyZmFjZVR5cGUgaW5zdGFuY2VvZiBJbnRlcmZhY2VSZWZUeXBlKSB7XG5cdFx0XHRcdGNsYXNzU3ltYm9sLmltcGxlbWVudHNJbnRlcmZhY2VzLnB1c2goaW50ZXJmYWNlVHlwZSk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYEV4cGVjdGVkIGludGVyZmFjZSB0eXBlLCBnb3QgJHtpbnRlcmZhY2VUeXBlfWAsIHR5cGVOb2RlKTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IG1lbWJlck5vZGUgb2YgY2xhc3NOb2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobWVtYmVyTm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5GSUVMRCAmJiBtZW1iZXJOb2RlIGluc3RhbmNlb2YgQVNURmllbGROb2RlKSB7XG5cdFx0XHRcdGNvbnN0IHRhcmdldDogTWFwPHN0cmluZywgRmllbGRTeW1ib2w+ID0gbWVtYmVyTm9kZS5tb2RpZmllcnMuc3RhdGljXG5cdFx0XHRcdFx0PyBjbGFzc1N5bWJvbC5zdGF0aWNGaWVsZFN5bWJvbHNcblx0XHRcdFx0XHQ6IGNsYXNzU3ltYm9sLmluc3RhbmNlRmllbGRTeW1ib2xzO1xuXG5cdFx0XHRcdGNvbnN0IGZpZWxkU3ltYm9sID0gbmV3IEZpZWxkU3ltYm9sKFxuXHRcdFx0XHRcdG1lbWJlck5vZGUsXG5cdFx0XHRcdFx0bWVtYmVyTm9kZS5maWVsZFR5cGVcblx0XHRcdFx0XHRcdD8gdGhpcy53cmFwVHlwZShtZW1iZXJOb2RlLmZpZWxkVHlwZSwgY2xhc3NTY29wZSlcblx0XHRcdFx0XHRcdDogVHlwZXMuTUlYRURcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRmaWVsZFN5bWJvbC5vd25lciA9IGNsYXNzU3ltYm9sO1xuXG5cdFx0XHRcdHRhcmdldC5zZXQoZmllbGRTeW1ib2wubmFtZSwgZmllbGRTeW1ib2wpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoKG1lbWJlck5vZGUudHlwZSA9PT0gQVNUTm9kZVR5cGUuTUVUSE9EIHx8IG1lbWJlck5vZGUudHlwZSA9PT0gQVNUTm9kZVR5cGUuQ09OU1RSVUNUT1IpXG5cdFx0XHRcdCYmIG1lbWJlck5vZGUgaW5zdGFuY2VvZiBBU1RNZXRob2ROb2RlKSB7XG5cblx0XHRcdFx0Y29uc3QgbWV0aG9kU2NvcGUgPSBuZXcgVHlwZVNjb3BlKGNsYXNzU2NvcGUpO1xuXHRcdFx0XHRjb25zdCBtZXRob2RTeW1ib2wgPSBuZXcgTWV0aG9kU3ltYm9sKG1lbWJlck5vZGUpO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC5vd25lciA9IGNsYXNzU3ltYm9sO1xuXG5cdFx0XHRcdG1lbWJlck5vZGUudHlwZVBhcmFtZXRlcnMuZm9yRWFjaChuYW1lID0+IHtcblx0XHRcdFx0XHRtZXRob2RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMucHVzaChuZXcgVHlwZVBhcmFtZXRlclN5bWJvbChuYW1lKSk7XG5cdFx0XHRcdFx0bWV0aG9kU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcobmFtZSwgbmV3IFR5cGVWYXJpYWJsZShuYW1lKSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzID0gbWVtYmVyTm9kZVxuXHRcdFx0XHRcdC5wYXJhbWV0ZXJzXG5cdFx0XHRcdFx0Lm1hcChwYXJhbWV0ZXJOb2RlID0+IHRoaXMucGFyYW1ldGVyTm9kZVRvU3ltYm9sKHBhcmFtZXRlck5vZGUsIG1ldGhvZFNjb3BlKSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnJldHVyblR5cGUgPSBtZW1iZXJOb2RlLnJldHVyblR5cGVcblx0XHRcdFx0XHQ/IHRoaXMud3JhcFR5cGUobWVtYmVyTm9kZS5yZXR1cm5UeXBlLCBtZXRob2RTY29wZSlcblx0XHRcdFx0XHQ6IFR5cGVzLlZPSUQ7XG5cblx0XHRcdFx0aWYgKG1lbWJlck5vZGUudHlwZSA9PT0gQVNUTm9kZVR5cGUuQ09OU1RSVUNUT1IpIHtcblx0XHRcdFx0XHRjbGFzc1N5bWJvbC5jb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbCA9IG1ldGhvZFN5bWJvbDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zdCB0YXJnZXQgPSBtZXRob2RTeW1ib2wuaXNTdGF0aWNcblx0XHRcdFx0XHRcdD8gY2xhc3NTeW1ib2wuc3RhdGljTWV0aG9kU3ltYm9sc1xuXHRcdFx0XHRcdFx0OiBjbGFzc1N5bWJvbC5pbnN0YW5jZU1ldGhvZFN5bWJvbHM7XG5cblx0XHRcdFx0XHR0YXJnZXQuc2V0KG1lbWJlck5vZGUubmFtZSwgbWV0aG9kU3ltYm9sKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVnaXN0ZXJJbnRlcmZhY2VTeW1ib2woaW50ZXJmYWNlTm9kZTogQVNUSW50ZXJmYWNlTm9kZSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmhhc1N5bWJvbChpbnRlcmZhY2VOb2RlLm5hbWUpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW50ZXJmYWNlU2NvcGUgPSBuZXcgVHlwZVNjb3BlKCk7XG5cdFx0Y29uc3QgaW50ZXJmYWNlU3ltYm9sID0gbmV3IEludGVyZmFjZVN5bWJvbChpbnRlcmZhY2VOb2RlKTtcblxuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuYWRkSW50ZXJmYWNlU3ltYm9sKGludGVyZmFjZVN5bWJvbCk7XG5cblx0XHRpbnRlcmZhY2VOb2RlLnR5cGVQYXJhbWV0ZXJzLmZvckVhY2gobmFtZSA9PiB7XG5cdFx0XHRpbnRlcmZhY2VTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMucHVzaChuZXcgVHlwZVBhcmFtZXRlclN5bWJvbChuYW1lKSk7XG5cdFx0XHRpbnRlcmZhY2VTY29wZS5kZWZpbmVUeXBlQmluZGluZyhuYW1lLCBuZXcgVHlwZVZhcmlhYmxlKG5hbWUpKTtcblx0XHR9KTtcblxuXHRcdGZvciAoY29uc3QgaW50ZXJmYWNlTmFtZSBvZiBpbnRlcmZhY2VOb2RlLmV4dGVuZHNJbnRlcmZhY2VzKSB7XG5cdFx0XHRjb25zdCBpbnRlcmZhY2VTeW1ib2w6IEludGVyZmFjZVN5bWJvbCA9IHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0SW50ZXJhY2VTeW1ib2woaW50ZXJmYWNlTmFtZSk7XG5cblx0XHRcdGludGVyZmFjZVN5bWJvbC5leHRlbmRzSW50ZXJmYWNlcy5wdXNoKGludGVyZmFjZVN5bWJvbCk7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBtZW1iZXJOb2RlIG9mIGludGVyZmFjZU5vZGUuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChtZW1iZXJOb2RlLnR5cGUgPT09IEFTVE5vZGVUeXBlLkZJRUxEICYmIG1lbWJlck5vZGUgaW5zdGFuY2VvZiBBU1RGaWVsZE5vZGUpIHtcblx0XHRcdFx0Y29uc3QgZmllbGRTeW1ib2wgPSBuZXcgRmllbGRTeW1ib2woXG5cdFx0XHRcdFx0bWVtYmVyTm9kZSxcblx0XHRcdFx0XHRtZW1iZXJOb2RlLmZpZWxkVHlwZVxuXHRcdFx0XHRcdFx0PyB0aGlzLndyYXBUeXBlKG1lbWJlck5vZGUuZmllbGRUeXBlLCBpbnRlcmZhY2VTY29wZSlcblx0XHRcdFx0XHRcdDogVHlwZXMuTUlYRURcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRmaWVsZFN5bWJvbC5vd25lciA9IGludGVyZmFjZVN5bWJvbDtcblxuXHRcdFx0XHRpbnRlcmZhY2VTeW1ib2wuc3RhdGljRmllbGRTeW1ib2xzLnNldChmaWVsZFN5bWJvbC5uYW1lLCBmaWVsZFN5bWJvbCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICgobWVtYmVyTm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5NRVRIT0QpICYmIG1lbWJlck5vZGUgaW5zdGFuY2VvZiBBU1RNZXRob2ROb2RlKSB7XG5cblx0XHRcdFx0Y29uc3QgbWV0aG9kU2NvcGUgPSBuZXcgVHlwZVNjb3BlKGludGVyZmFjZVNjb3BlKTtcblx0XHRcdFx0Y29uc3QgbWV0aG9kU3ltYm9sID0gbmV3IE1ldGhvZFN5bWJvbChtZW1iZXJOb2RlKTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wub3duZXIgPSBpbnRlcmZhY2VTeW1ib2w7XG5cblx0XHRcdFx0bWVtYmVyTm9kZS50eXBlUGFyYW1ldGVycy5mb3JFYWNoKG5hbWUgPT4ge1xuXHRcdFx0XHRcdG1ldGhvZFN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5wdXNoKG5ldyBUeXBlUGFyYW1ldGVyU3ltYm9sKG5hbWUpKTtcblx0XHRcdFx0XHRtZXRob2RTY29wZS5kZWZpbmVUeXBlQmluZGluZyhuYW1lLCBuZXcgVHlwZVZhcmlhYmxlKG5hbWUpKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMgPSBtZW1iZXJOb2RlXG5cdFx0XHRcdFx0LnBhcmFtZXRlcnNcblx0XHRcdFx0XHQubWFwKHBhcmFtZXRlck5vZGUgPT4gdGhpcy5wYXJhbWV0ZXJOb2RlVG9TeW1ib2wocGFyYW1ldGVyTm9kZSwgbWV0aG9kU2NvcGUpKTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wucmV0dXJuVHlwZSA9IG1lbWJlck5vZGUucmV0dXJuVHlwZVxuXHRcdFx0XHRcdD8gdGhpcy53cmFwVHlwZShtZW1iZXJOb2RlLnJldHVyblR5cGUsIG1ldGhvZFNjb3BlKVxuXHRcdFx0XHRcdDogVHlwZXMuVk9JRDtcblxuXHRcdFx0XHRpbnRlcmZhY2VTeW1ib2wuaW5zdGFuY2VNZXRob2RTeW1ib2xzLnNldChtZW1iZXJOb2RlLm5hbWUsIG1ldGhvZFN5bWJvbCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSB0eXBlRXJyb3IobWVzc2FnZTogc3RyaW5nLCBub2RlOiBBU1ROb2RlIHwgbnVsbCA9IG51bGwpOiBuZXZlciB7XG5cdFx0dGhyb3dUeXBlRXJyb3IobWVzc2FnZSwgbm9kZT8uc3Bhbik7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge0FTVEltcG9ydE5vZGUsIEFTVE5vZGUsIEFTVE5vZGVUeXBlfSBmcm9tIFwiLi4vYXN0XCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5pbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4uL3BhcnNlci9wYXJzZXJcIjtcbmltcG9ydCB7RW52aXJvbm1lbnR9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQgdHlwZSB7QWJzdHJhY3RGaWxlTG9hZGVyfSBmcm9tIFwiLi4vbG9hZGVyc1wiO1xuaW1wb3J0IHt0aHJvd1J1bnRpbWVFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuXG5leHBvcnQgY2xhc3MgRGVwZW5kZW5jeSB7XG5cdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSA9IG5ldyBPYmplY3RSZWdpc3RyeSgpO1xuXHRuYW1lczogc3RyaW5nW107XG5cdHVybDogc3RyaW5nO1xuXHRhc3Q6IEFTVE5vZGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lczogc3RyaW5nW10sIHVybDogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYW1lcyA9IG5hbWVzO1xuXHRcdHRoaXMudXJsID0gdXJsO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBEZXBlbmRlbmN5TG9hZGVyIHtcblx0ZW52aXJvbm1lbnQ6IEVudmlyb25tZW50O1xuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cdGZpbGVMb2FkZXI6IEFic3RyYWN0RmlsZUxvYWRlcjtcblxuXHRjb25zdHJ1Y3RvcihlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZmlsZUxvYWRlcjogQWJzdHJhY3RGaWxlTG9hZGVyKSB7XG5cdFx0dGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkgPSBvYmplY3RSZWdpc3RyeTtcblx0XHR0aGlzLmZpbGVMb2FkZXIgPSBmaWxlTG9hZGVyO1xuXHR9XG5cblx0YXN5bmMgcGFyc2VEZXBlbmRlbmN5KGRlcGVuZGVuY3k6IERlcGVuZGVuY3kpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gYXdhaXQgdGhpcy5wYXJzZUZpbGUoZGVwZW5kZW5jeS51cmwpXG5cdFx0ICAgICAgICAgICAgICAgICAudGhlbihhc3QgPT4gZGVwZW5kZW5jeS5hc3QgPSBhc3QpXG5cdFx0ICAgICAgICAgICAgICAgICAudGhlbihhc3QgPT4gZGVwZW5kZW5jeS5vYmplY3RSZWdpc3RyeS5jb2xsZWN0QWxsKGFzdCkpO1xuXHR9XG5cblx0YXN5bmMgY29sbGVjdERlcGVuZGVuY2llcyhkZXBlbmRlbmN5OiBEZXBlbmRlbmN5LCBkZXBlbmRlbmNpZXM6IE1hcDxzdHJpbmcsIERlcGVuZGVuY3k+KTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIGF3YWl0IHRoaXMuY29sbGVjdFByb2dyYW1EZXBlbmRlbmNpZXMoZGVwZW5kZW5jeS5hc3QpXG5cdFx0ICAgICAgICAgICAgICAgICAudGhlbihjbGFzc0RlcGVuZGVuY2llcyA9PiB7XG5cdFx0XHQgICAgICAgICAgICAgICAgIGNsYXNzRGVwZW5kZW5jaWVzLmZvckVhY2goY2xhc3NEZXBlbmRlbmN5ID0+IHtcblx0XHRcdFx0ICAgICAgICAgICAgICAgICBpZiAoZGVwZW5kZW5jaWVzLmhhcyhjbGFzc0RlcGVuZGVuY3kudXJsKSkge1xuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXHRcdFx0XHQgICAgICAgICAgICAgICAgIH1cblx0XHRcdFx0ICAgICAgICAgICAgICAgICBkZXBlbmRlbmNpZXMuc2V0KGNsYXNzRGVwZW5kZW5jeS51cmwsIGNsYXNzRGVwZW5kZW5jeSk7XG5cdFx0XHQgICAgICAgICAgICAgICAgIH0pO1xuXHRcdCAgICAgICAgICAgICAgICAgfSk7XG5cdH1cblxuXHRhc3luYyBjb2xsZWN0UHJvZ3JhbURlcGVuZGVuY2llcyhhc3Q6IEFTVE5vZGUgfCBudWxsKTogUHJvbWlzZTxNYXA8c3RyaW5nLCBEZXBlbmRlbmN5Pj4ge1xuXHRcdGlmIChhc3QgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBuZXcgTWFwKCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZGVmYXVsdERlcGVuZGVuY2llcyA9IHRoaXMuZGVmYXVsdERlcGVuZGVuY2llcygpO1xuXHRcdGZvciAoY29uc3QgZGVwZW5kZW5jeSBvZiBkZWZhdWx0RGVwZW5kZW5jaWVzLnZhbHVlcygpKSB7XG5cdFx0XHRhd2FpdCB0aGlzLnBhcnNlRGVwZW5kZW5jeShkZXBlbmRlbmN5KTtcblx0XHR9XG5cblx0XHRjb25zdCBkZXBlbmRlbmNpZXMgPSB0aGlzLmNvbGxlY3RDbGFzc0RlcGVuZGVuY2llcyhhc3QpO1xuXHRcdGZvciAoY29uc3QgZGVwZW5kZW5jeSBvZiBkZXBlbmRlbmNpZXMudmFsdWVzKCkpIHtcblx0XHRcdGF3YWl0IHRoaXMucGFyc2VEZXBlbmRlbmN5KGRlcGVuZGVuY3kpO1xuXHRcdFx0YXdhaXQgdGhpcy5jb2xsZWN0RGVwZW5kZW5jaWVzKGRlcGVuZGVuY3ksIGRlcGVuZGVuY2llcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBNYXAoWy4uLmRlZmF1bHREZXBlbmRlbmNpZXMsIC4uLmRlcGVuZGVuY2llc10pO1xuXHR9XG5cblx0ZGVmYXVsdERlcGVuZGVuY2llcygpOiBNYXA8c3RyaW5nLCBEZXBlbmRlbmN5PiB7XG5cdFx0Y29uc3QgZGVwZW5kZW5jaWVzID0gW1xuXHRcdFx0bmV3IERlcGVuZGVuY3koWydJdGVyYXRvcicsICdJdGVyYWJsZSddLCAnL2xpYnJhcnkvY29udHJhY3RzLmx5cmEnKVxuXHRcdF07XG5cblx0XHRjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG5cdFx0Zm9yIChjb25zdCBkZXBlbmRlbmN5IG9mIGRlcGVuZGVuY2llcykge1xuXHRcdFx0bWFwLnNldChkZXBlbmRlbmN5LnVybCwgZGVwZW5kZW5jeSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1hcDtcblx0fVxuXG5cdGNvbGxlY3RDbGFzc0RlcGVuZGVuY2llcyhhc3Q6IEFTVE5vZGUpOiBNYXA8c3RyaW5nLCBEZXBlbmRlbmN5PiB7XG5cdFx0Y29uc3QgY2xhc3NEZXBlbmRlbmNpZXMgPSBuZXcgTWFwKCk7XG5cblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgYXN0LmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5JTVBPUlQpIHtcblx0XHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RJbXBvcnROb2RlKSB7XG5cdFx0XHRcdFx0aWYgKG5vZGUuZnJvbSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChjbGFzc0RlcGVuZGVuY2llcy5oYXMobm9kZS5mcm9tKSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNsYXNzRGVwZW5kZW5jaWVzLnNldChub2RlLmZyb20sIG5ldyBEZXBlbmRlbmN5KG5vZGUubmFtZXMsIG5vZGUuZnJvbSkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGltcG9ydCBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlPy5zcGFuKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc0RlcGVuZGVuY2llcztcblx0fVxuXG5cdHBhcnNlRmlsZSh1cmw6IHN0cmluZyk6IFByb21pc2U8QVNUTm9kZT4ge1xuXHRcdHJldHVybiB0aGlzLmZpbGVMb2FkZXJcblx0XHQgICAgICAgICAgIC5sb2FkKHVybClcblx0XHQgICAgICAgICAgIC50aGVuKGNvZGUgPT4gdGhpcy5wYXJzZXJTb3VyY2UobmV3IFNvdXJjZShjb2RlLCB1cmwpKSk7XG5cdH1cblxuXHRwYXJzZXJTb3VyY2Uoc291cmNlOiBTb3VyY2UpOiBBU1ROb2RlIHtcblx0XHRyZXR1cm4gbmV3IFBhcnNlcihzb3VyY2UpLnBhcnNlKCk7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtEZXBlbmRlbmN5TG9hZGVyfSBmcm9tIFwiLi9kZXBlbmRlbmNpZXNcIjtcbmltcG9ydCB7QVNUSW1wb3J0Tm9kZSwgQVNUTm9kZX0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHtOYXRpdmVDbGFzc2VzfSBmcm9tIFwiLi4vLi4vbGlicmFyeS9uYXRpdmVfY2xhc3Nlc1wiO1xuaW1wb3J0IHtDbGFzc0RlZmluaXRpb24sIEVudmlyb25tZW50LCBJbnRlcmZhY2VEZWZpbml0aW9ufSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5pbXBvcnQgdHlwZSB7QWJzdHJhY3RGaWxlTG9hZGVyfSBmcm9tIFwiLi4vbG9hZGVyc1wiO1xuaW1wb3J0IHR5cGUge05hdGl2ZUNsYXNzfSBmcm9tIFwiLi4vLi4vbGlicmFyeS9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7dGhyb3dEZXBlbmRlbmN5RXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcblxuY29uc3QgbmF0aXZlQ2xhc3NlcyA9IG5ldyBOYXRpdmVDbGFzc2VzKCk7XG5cbmV4cG9ydCBjbGFzcyBMaW5rZXIge1xuXHRlbnZpcm9ubWVudDogRW52aXJvbm1lbnQ7XG5cdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeTtcblx0ZGVwZW5kZW5jeUxvYWRlcjogRGVwZW5kZW5jeUxvYWRlcjtcblxuXHRjb25zdHJ1Y3RvcihlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZmlsZUxvYWRlcjogQWJzdHJhY3RGaWxlTG9hZGVyKSB7XG5cdFx0dGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkgPSBvYmplY3RSZWdpc3RyeTtcblx0XHR0aGlzLmRlcGVuZGVuY3lMb2FkZXIgPSBuZXcgRGVwZW5kZW5jeUxvYWRlcihlbnZpcm9ubWVudCwgb2JqZWN0UmVnaXN0cnksIGZpbGVMb2FkZXIpO1xuXHR9XG5cblx0bGlua1NvdXJjZXMoYXN0OiBBU1ROb2RlKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHRoaXMuZGVwZW5kZW5jeUxvYWRlclxuXHRcdCAgICAgICAgICAgLmNvbGxlY3RQcm9ncmFtRGVwZW5kZW5jaWVzKGFzdClcblx0XHQgICAgICAgICAgIC50aGVuKGRlcGVuZGVuY2llcyA9PiB7XG5cdFx0XHQgICAgICAgICAgIGZvciAoY29uc3QgZGVwZW5kZW5jeSBvZiBkZXBlbmRlbmNpZXMudmFsdWVzKCkpIHtcblx0XHRcdFx0ICAgICAgICAgICBjb25zdCBvYmplY3REZWZpbml0aW9ucyA9IGRlcGVuZGVuY3kub2JqZWN0UmVnaXN0cnlcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmV0Y2hBbGxPYmplY3REZWZpbml0aW9ucygpXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlcygpO1xuXHRcdFx0XHQgICAgICAgICAgIGZvciAobGV0IG9iamVjdERlZiBvZiBvYmplY3REZWZpbml0aW9ucykge1xuXHRcdFx0XHRcdCAgICAgICAgICAgaWYgKG9iamVjdERlZiBpbnN0YW5jZW9mIEludGVyZmFjZURlZmluaXRpb24pIHtcblx0XHRcdFx0XHRcdCAgICAgICAgICAgdGhpcy5vYmplY3RSZWdpc3RyeS5pbnRlcmZhY2VzLnNldChvYmplY3REZWYubmFtZSwgb2JqZWN0RGVmKTtcblx0XHRcdFx0XHQgICAgICAgICAgIH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgIHRoaXMub2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5zZXQob2JqZWN0RGVmLm5hbWUsIG9iamVjdERlZik7XG5cdFx0XHRcdFx0ICAgICAgICAgICB9XG5cdFx0XHRcdFx0ICAgICAgICAgICB0aGlzLmVudmlyb25tZW50LmRlZmluZShvYmplY3REZWYubmFtZSwgb2JqZWN0RGVmKTtcblx0XHRcdFx0ICAgICAgICAgICB9XG5cdFx0XHQgICAgICAgICAgIH1cblx0XHQgICAgICAgICAgIH0pXG5cdFx0ICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLmxvYWROYXRpdmVDbGFzc2VzKGFzdCkpXG5cdH1cblxuXHRsb2FkTmF0aXZlQ2xhc3Nlcyhhc3Q6IEFTVE5vZGUpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgYXN0LmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEltcG9ydE5vZGUpIHtcblx0XHRcdFx0aWYgKG5vZGUuZnJvbSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdGNvbnN0IGNsYXNzTmFtZSA9IG5vZGUubmFtZXNbMF07XG5cdFx0XHRcdFx0aWYgKCFjbGFzc05hbWUpIHtcblx0XHRcdFx0XHRcdHRocm93RGVwZW5kZW5jeUVycm9yKGBJbnZhbGlkIGltcG9ydCBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlPy5zcGFuKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc3QgbmF0aXZlQ2xhc3M6IE5hdGl2ZUNsYXNzIHwgbnVsbCA9IG5hdGl2ZUNsYXNzZXMucmVnaXN0cnkuZ2V0KGNsYXNzTmFtZSkgfHwgbnVsbDtcblx0XHRcdFx0XHRpZiAoIW5hdGl2ZUNsYXNzKSB7XG5cdFx0XHRcdFx0XHR0aHJvd0RlcGVuZGVuY3lFcnJvcihgVW5rbm93biBuYXRpdmUgY2xhc3MgJHtjbGFzc05hbWV9YCwgbm9kZT8uc3Bhbik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnN0IGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24gPSBuYXRpdmVDbGFzcy5nZXRDbGFzc0RlZmluaXRpb24oKTtcblx0XHRcdFx0XHRpZiAodGhpcy5vYmplY3RSZWdpc3RyeS5jbGFzc2VzLmhhcyhjbGFzc05hbWUpKSB7XG5cdFx0XHRcdFx0XHR0aHJvd0RlcGVuZGVuY3lFcnJvcihgQ291bGQgbm90IHJlc29sdmUgY2xhc3MgJHtjbGFzc05hbWV9LmAsIG5vZGU/LnNwYW4pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuc2V0KGNsYXNzTmFtZSwgY2xhc3NEZWYpO1xuXHRcdFx0XHRcdHRoaXMuZW52aXJvbm1lbnQuZGVmaW5lKGNsYXNzTmFtZSwgY2xhc3NEZWYpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLAogICAgImltcG9ydCB7QVNUQW5ub3RhdGlvbk5vZGUsIEFTVENsYXNzTm9kZSwgQVNUTWV0aG9kTm9kZSwgQVNUTm9kZX0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHtjYWxsSW5zdGFuY2VNZXRob2QsIGV2YWxBbm5vdGF0aW9uUHJvcGVydGllc30gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX3J1bnRpbWVcIjtcbmltcG9ydCB7Q2xhc3NEZWZpbml0aW9uLCB0eXBlIEVudmlyb25tZW50LCBJbnN0YW5jZX0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB0eXBlIHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5cbmV4cG9ydCBjbGFzcyBUZXN0U3VpdGVzIHtcblx0ZW52aXJvbm1lbnQ6IEVudmlyb25tZW50O1xuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cblx0Y29uc3RydWN0b3IoZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpIHtcblx0XHR0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG5cdFx0dGhpcy5vYmplY3RSZWdpc3RyeSA9IG9iamVjdFJlZ2lzdHJ5O1xuXHR9XG5cblx0cnVuKGFzdDogQVNUTm9kZSk6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUQ2xhc3NOb2RlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGDwn6eqIFJ1bm5pbmcgVGVzdCBDYXNlcyBmb3IgJHtub2RlLm5hbWV9IC4uLmApO1xuXHRcdFx0XHR0aGlzLnJ1blRlc3RDYXNlcyhub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJ1blRlc3RDYXNlcyhjbGFzc05vZGU6IEFTVENsYXNzTm9kZSk6IHZvaWQge1xuXHRcdGZvciAoY29uc3QgbWVtYmVyIG9mIGNsYXNzTm9kZS5jaGlsZHJlbikge1xuXHRcdFx0aWYgKG1lbWJlciBpbnN0YW5jZW9mIEFTVE1ldGhvZE5vZGUpIHtcblx0XHRcdFx0Y29uc3QgYW5ub3RhdGlvbiA9IG1lbWJlci5hbm5vdGF0aW9ucz8uZmluZChhID0+IGEubmFtZSA9PT0gJ3Rlc3QnKTtcblx0XHRcdFx0aWYgKCFhbm5vdGF0aW9uKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5ydW5UZXN0Q2FzZShjbGFzc05vZGUsIG1lbWJlciwgYW5ub3RhdGlvbik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBydW5UZXN0Q2FzZShjbGFzc05vZGU6IEFTVENsYXNzTm9kZSwgbWV0aG9kTm9kZTogQVNUTWV0aG9kTm9kZSwgYW5ub3RhdGlvbjogQVNUQW5ub3RhdGlvbk5vZGUpOiB2b2lkIHtcblx0XHRjb25zdCBpbnN0YW5jZTogSW5zdGFuY2UgPSBDbGFzc0RlZmluaXRpb24uZnJvbUFTVChjbGFzc05vZGUpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnN0cnVjdE5ld0luc3RhbmNlV2l0aG91dEFyZ3VtZW50cyhcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0UmVnaXN0cnksXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVudmlyb25tZW50XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuXHRcdGNvbnN0IHByb3BlcnRpZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IGV2YWxBbm5vdGF0aW9uUHJvcGVydGllcyhhbm5vdGF0aW9uKTtcblx0XHRjb25zdCB0aXRsZTogc3RyaW5nID0gcHJvcGVydGllcy50aXRsZSA/PyBgJHtjbGFzc05vZGUubmFtZX0uJHttZXRob2ROb2RlLm5hbWV9YDtcblxuXHRcdGxldCBlcnJvck1lc3NhZ2UgPSBudWxsO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGNhbGxJbnN0YW5jZU1ldGhvZChpbnN0YW5jZSwgbWV0aG9kTm9kZSwgW10sIHRoaXMub2JqZWN0UmVnaXN0cnksIHRoaXMuZW52aXJvbm1lbnQpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRlcnJvck1lc3NhZ2UgPSBlcnJvcjtcblx0XHR9XG5cblx0XHRpZiAoZXJyb3JNZXNzYWdlKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGAg4p2MICR7dGl0bGV9LCAke2Vycm9yTWVzc2FnZX1gKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coYCDinIUgJHt0aXRsZX1gKTtcblx0XHR9XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtBU1ROb2RlfSBmcm9tICcuLi9hc3QudHMnO1xuaW1wb3J0IHtFbnZpcm9ubWVudH0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtldmFsTm9kZSwgcmVnaXN0ZXJOYXRpdmVDbGFzc2VzLCByZWdpc3Rlck5hdGl2ZUZ1bmN0aW9uc30gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfcnVudGltZVwiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcblxuZXhwb3J0IGNsYXNzIEludGVycHJldGVyIHtcblx0ZW52aXJvbm1lbnQ6IEVudmlyb25tZW50O1xuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cblx0Y29uc3RydWN0b3IoZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpIHtcblx0XHR0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG5cdFx0dGhpcy5vYmplY3RSZWdpc3RyeSA9IG9iamVjdFJlZ2lzdHJ5O1xuXG5cdFx0cmVnaXN0ZXJOYXRpdmVDbGFzc2VzKG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCk7XG5cdFx0cmVnaXN0ZXJOYXRpdmVGdW5jdGlvbnMoZW52aXJvbm1lbnQpO1xuXHR9XG5cblx0cnVuKGFzdDogQVNUTm9kZSkge1xuXHRcdGV2YWxOb2RlKGFzdCwgdGhpcy5vYmplY3RSZWdpc3RyeSwgdGhpcy5lbnZpcm9ubWVudCk7XG5cdH1cbn1cbiIsCiAgICAiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0RmlsZUxvYWRlciB7XG5cdGFic3RyYWN0IGxvYWQodXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz47XG59XG5cbmV4cG9ydCBjbGFzcyBGZXRjaEZpbGVMb2FkZXIgZXh0ZW5kcyBBYnN0cmFjdEZpbGVMb2FkZXIge1xuXHRvdmVycmlkZSBsb2FkKHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gZmV0Y2godXJsKVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxuXHR9XG59XG4iLAogICAgImltcG9ydCB7U291cmNlfSBmcm9tIFwiLi9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuaW1wb3J0IHtFbnZpcm9ubWVudH0gZnJvbSBcIi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB7VHlwZUNoZWNrZXJ9IGZyb20gXCIuL3R5cGVzL3R5cGVjaGVja2VyXCI7XG5pbXBvcnQge0xpbmtlcn0gZnJvbSBcIi4vbGlua2VyL2xpbmtlclwiO1xuaW1wb3J0IHtUZXN0U3VpdGVzfSBmcm9tIFwiLi90ZXN0cy90ZXN0c3VpdGVzXCI7XG5pbXBvcnQge0ludGVycHJldGVyfSBmcm9tIFwiLi9pbnRlcnByZXRlci9pbnRlcnByZXRlclwiO1xuaW1wb3J0IHtGZXRjaEZpbGVMb2FkZXJ9IGZyb20gXCIuL2xvYWRlcnNcIjtcbmltcG9ydCB7QVNUTm9kZX0gZnJvbSBcIi4vYXN0XCI7XG5pbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4vcGFyc2VyL3BhcnNlclwiO1xuXG5leHBvcnQgY2xhc3MgTHlyYVNjcmlwdFByb2dyYW0ge1xuXHRwcml2YXRlIGdsb2JhbEVudmlyb25tZW50OiBFbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudCgpO1xuXHRwcml2YXRlIGdsb2JhbE9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSA9IG5ldyBPYmplY3RSZWdpc3RyeSgpO1xuXG5cdHByaXZhdGUgdHlwZUNoZWNrZXI6IFR5cGVDaGVja2VyID0gbmV3IFR5cGVDaGVja2VyKHRoaXMuZ2xvYmFsT2JqZWN0UmVnaXN0cnkpO1xuXG5cdHByaXZhdGUgbGlua2VyOiBMaW5rZXIgPSBuZXcgTGlua2VyKHRoaXMuZ2xvYmFsRW52aXJvbm1lbnQsIHRoaXMuZ2xvYmFsT2JqZWN0UmVnaXN0cnksIG5ldyBGZXRjaEZpbGVMb2FkZXIoKSk7XG5cblx0cHJpdmF0ZSBpbnRlcnByZXRlcjogSW50ZXJwcmV0ZXIgPSBuZXcgSW50ZXJwcmV0ZXIodGhpcy5nbG9iYWxFbnZpcm9ubWVudCwgdGhpcy5nbG9iYWxPYmplY3RSZWdpc3RyeSk7XG5cblx0cHJpdmF0ZSB0ZXN0U3VpdGU6IFRlc3RTdWl0ZXMgPSBuZXcgVGVzdFN1aXRlcyh0aGlzLmdsb2JhbEVudmlyb25tZW50LCB0aGlzLmdsb2JhbE9iamVjdFJlZ2lzdHJ5KTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBzdGFydFRpbWU6IG51bWJlciA9IDA7XG5cblx0Y29uc3RydWN0b3IoaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKSB7XG5cdFx0dGhpcy5pc0RlYnVnID0gaXNEZWJ1Zztcblx0fVxuXG5cdGdldEdsb2JhbE9iamVjdFJlZ2lzdHJ5KCk6IE9iamVjdFJlZ2lzdHJ5IHtcblx0XHRyZXR1cm4gdGhpcy5nbG9iYWxPYmplY3RSZWdpc3RyeTtcblx0fVxuXG5cblx0Z2V0R2xvYmFsRW52aXJvbm1lbnQoKTogRW52aXJvbm1lbnQge1xuXHRcdHJldHVybiB0aGlzLmdsb2JhbEVudmlyb25tZW50O1xuXHR9XG5cblx0YXN5bmMgZXhlY3V0ZShzb3VyY2U6IFNvdXJjZSk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiB0aGlzLnJ1blBpcGVsaW5lKHNvdXJjZSlcblx0XHQgICAgICAgICAgIC50aGVuKChhc3Q6IEFTVE5vZGUpID0+IHtcblx0XHRcdCAgICAgICAgICAgdGhpcy5kZWJ1Z01lYXN1cmVTdGFydFRpbWUoKTtcblx0XHRcdCAgICAgICAgICAgdGhpcy5pbnRlcnByZXRlci5ydW4oYXN0KTtcblx0XHRcdCAgICAgICAgICAgdGhpcy5kZWJ1Z01lYXN1cmVFbmRUaW1lKCdpbnRlcnByZXRlcicpO1xuXHRcdCAgICAgICAgICAgfSk7XG5cdH1cblxuXHRhc3luYyBleGVjdXRlVGVzdChzb3VyY2U6IFNvdXJjZSk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiB0aGlzLnJ1blBpcGVsaW5lKHNvdXJjZSlcblx0XHQgICAgICAgICAgIC50aGVuKChhc3Q6IEFTVE5vZGUpID0+IHtcblx0XHRcdCAgICAgICAgICAgdGhpcy5kZWJ1Z01lYXN1cmVTdGFydFRpbWUoKTtcblx0XHRcdCAgICAgICAgICAgdGhpcy50ZXN0U3VpdGUucnVuKGFzdCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlRW5kVGltZSgndGVzdCcpO1xuXHRcdCAgICAgICAgICAgfSk7XG5cdH1cblxuXHRkZWJ1Zyh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNEZWJ1Zykge1xuXHRcdFx0Y29uc29sZS5sb2codmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdGRlYnVnTWVhc3VyZVN0YXJ0VGltZSgpOiB2b2lkIHtcblx0XHR0aGlzLnN0YXJ0VGltZSA9IHRoaXMuZGVidWdUaW1lc3RhbXAoKTtcblx0fVxuXG5cdGRlYnVnTWVhc3VyZUVuZFRpbWUobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5kZWJ1ZyhtZXNzYWdlICsgJzogJyArICh0aGlzLmRlYnVnVGltZXN0YW1wKCkgLSB0aGlzLnN0YXJ0VGltZSkgKyAnbXMnKTtcblx0fVxuXG5cdGRlYnVnVGltZXN0YW1wKCk6IG51bWJlciB7XG5cdFx0aWYgKCF0aGlzLmlzRGVidWcpIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblx0XHRyZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG5cdH1cblxuXHRwcml2YXRlIGFzeW5jIHJ1blBpcGVsaW5lKHNvdXJjZTogU291cmNlKTogUHJvbWlzZTxBU1ROb2RlPiB7XG5cdFx0dGhpcy5kZWJ1Z01lYXN1cmVTdGFydFRpbWUoKVxuXHRcdGNvbnN0IGFzdDogQVNUTm9kZSA9IG5ldyBQYXJzZXIoc291cmNlKS5wYXJzZSgpO1xuXHRcdHRoaXMuZGVidWdNZWFzdXJlRW5kVGltZSgncGFyc2VyJylcblx0XHR0aGlzLmRlYnVnKGFzdCk7XG5cblx0XHRyZXR1cm4gdGhpcy5saW5rZXIubGlua1NvdXJjZXMoYXN0KVxuXHRcdCAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuXHRcdFx0ICAgICAgICAgICB0aGlzLnR5cGVDaGVja2VyLmNvbGxlY3RBbGxTeW1ib2xzRnJvbVJlZ2lzdHJ5KHRoaXMuZ2xvYmFsT2JqZWN0UmVnaXN0cnkpO1xuXHRcdCAgICAgICAgICAgfSlcblx0XHQgICAgICAgICAgIC50aGVuKCgpID0+IHtcblx0XHRcdCAgICAgICAgICAgdGhpcy5kZWJ1Z01lYXN1cmVTdGFydFRpbWUoKTtcblx0XHRcdCAgICAgICAgICAgdGhpcy50eXBlQ2hlY2tlci5jaGVjayhhc3QpO1xuXHRcdFx0ICAgICAgICAgICB0aGlzLmRlYnVnTWVhc3VyZUVuZFRpbWUoJ3R5cGVjaGVja2VyJyk7XG5cblx0XHRcdCAgICAgICAgICAgcmV0dXJuIGFzdDtcblx0XHQgICAgICAgICAgIH0pO1xuXHR9XG59XG4iLAogICAgImV4cG9ydCB0eXBlIEV2ZW50SGFuZGxlcjxUID0gYW55PiA9IChwYXlsb2FkOiBUKSA9PiB2b2lkO1xuXG5leHBvcnQgY2xhc3MgRXZlbnRQaXBlbGluZSB7XG5cdHByaXZhdGUgbGlzdGVuZXJzOiBNYXA8c3RyaW5nLCBTZXQ8RXZlbnRIYW5kbGVyPj4gPSBuZXcgTWFwPHN0cmluZywgU2V0PEV2ZW50SGFuZGxlcj4+KCk7XG5cblx0b248VCA9IGFueT4oZXZlbnQ6IHN0cmluZywgaGFuZGxlcjogRXZlbnRIYW5kbGVyPFQ+KTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLmxpc3RlbmVycy5oYXMoZXZlbnQpKSB7XG5cdFx0XHR0aGlzLmxpc3RlbmVycy5zZXQoZXZlbnQsIG5ldyBTZXQoKSk7XG5cdFx0fVxuXHRcdHRoaXMubGlzdGVuZXJzLmdldChldmVudCkhLmFkZChoYW5kbGVyKTtcblx0fVxuXG5cdG9mZjxUID0gYW55PihldmVudDogc3RyaW5nLCBoYW5kbGVyOiBFdmVudEhhbmRsZXI8VD4pOiB2b2lkIHtcblx0XHR0aGlzLmxpc3RlbmVycy5nZXQoZXZlbnQpXG5cdFx0ICAgID8uZGVsZXRlKGhhbmRsZXIpO1xuXHR9XG5cblx0ZW1pdDxUID0gYW55PihldmVudDogc3RyaW5nLCBwYXlsb2FkOiBUKTogdm9pZCB7XG5cdFx0dGhpcy5saXN0ZW5lcnMuZ2V0KGV2ZW50KVxuXHRcdCAgICA/LmZvckVhY2goKGhhbmRsZXI6IEV2ZW50SGFuZGxlcik6IHZvaWQgPT4gaGFuZGxlcihwYXlsb2FkKSk7XG5cdH1cbn1cbiIsCiAgICAiY29uc3QgRXZlbnRzID0ge1xuXHRET01fRVZFTlQ6ICdkb206ZXZlbnQnXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50cztcbiIsCiAgICAiLy8vIDxyZWZlcmVuY2UgbGliPVwiZG9tXCIgLz5cblxuaW1wb3J0IHR5cGUge1ZOb2RlfSBmcm9tIFwiLi4vY29yZS92ZG9tL3Zkb21cIjtcbmltcG9ydCB7TGFtYmRhRnVuY3Rpb25DYWxsfSBmcm9tIFwiLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9ydW50aW1lXCI7XG5pbXBvcnQge3R5cGUgRXZlbnRQaXBlbGluZX0gZnJvbSBcIi4uL2NvcmUvZXZlbnQvcGlwZWxpbmVcIjtcbmltcG9ydCBFdmVudHMgZnJvbSBcIi4vZXZlbnQudHNcIjtcbmltcG9ydCBFdmVudCBmcm9tIFwiLi9ldmVudC50c1wiO1xuaW1wb3J0IHtHUkFNTUFSfSBmcm9tIFwiLi4vY29yZS9ncmFtbWFyLnRzXCI7XG5pbXBvcnQge0V2ZW50VHlwZX0gZnJvbSBcIi4uL2xpYnJhcnkvY2xhc3Nlcy9ldmVudC50c1wiO1xuaW1wb3J0IHtDbGFzc0RlZmluaXRpb24sIEluc3RhbmNlfSBmcm9tIFwiLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzLnRzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudENyZWF0b3Ige1xuXHRjcmVhdGVFbGVtZW50KHZOb2RlOiBWTm9kZSk6IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIEhUTUxFbGVtZW50Q3JlYXRvciBpbXBsZW1lbnRzIEVsZW1lbnRDcmVhdG9yIHtcblx0cHJpdmF0ZSByZWFkb25seSBseXJhRXZlbnRDbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZXZlblBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKSB7XG5cdFx0dGhpcy5seXJhRXZlbnRDbGFzc0RlZiA9IG5ldyBFdmVudFR5cGUoKS5nZXRDbGFzc0RlZmluaXRpb24oKTtcblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQodk5vZGU6IFZOb2RlKTogTm9kZSB7XG5cdFx0Y29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHZOb2RlLnRhZykgYXMgSFRNTEVsZW1lbnQ7XG5cblx0XHRsZXQgdGV4dEJ1ZmZlcjogc3RyaW5nW10gPSBbXTtcblxuXHRcdGZ1bmN0aW9uIGZsdXNoVGV4dEJ1ZmZlcigpOiB2b2lkIHtcblx0XHRcdGlmICh0ZXh0QnVmZmVyLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0QnVmZmVyLmpvaW4oJycpKSk7XG5cdFx0XHRcdHRleHRCdWZmZXIgPSBbXTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IFtwcm9wZXJ0eSwgZm5dIG9mIE9iamVjdC5lbnRyaWVzKHZOb2RlLnByb3BzKSkge1xuXHRcdFx0aWYgKCFwcm9wZXJ0eS5zdGFydHNXaXRoKCdvbicpKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIShmbiBpbnN0YW5jZW9mIExhbWJkYUZ1bmN0aW9uQ2FsbCkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuYXR0YWNoRXZlbnRMaXN0ZW5lcihlbGVtZW50LCBwcm9wZXJ0eSwgZm4pO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgY2hpbGQgb2Ygdk5vZGUuY2hpbGRyZW4pIHtcblx0XHRcdGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdHRleHRCdWZmZXIucHVzaChjaGlsZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRWxlbWVudChjaGlsZCkgYXMgSFRNTEVsZW1lbnQpO1xuXHRcdFx0fVxuXG5cdFx0XHRmbHVzaFRleHRCdWZmZXIoKTtcblx0XHR9XG5cblx0XHRmbHVzaFRleHRCdWZmZXIoKTtcblxuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9XG5cblx0cHJpdmF0ZSBhdHRhY2hFdmVudExpc3RlbmVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwcm9wZXJ0eTogc3RyaW5nLCBmbjogTGFtYmRhRnVuY3Rpb25DYWxsKTogdm9pZCB7XG5cdFx0Y29uc3QgZXZlbnQ6IHN0cmluZyA9IHByb3BlcnR5LnNsaWNlKDIpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIHRoaXMud3JhcENhbGxiYWNrKGZuKSk7XG5cdH1cblxuXHRwcml2YXRlIHdyYXBDYWxsYmFjayhmbjogTGFtYmRhRnVuY3Rpb25DYWxsKSB7XG5cdFx0cmV0dXJuIChldmVudDogRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdHRoaXMuZXZlblBpcGVsaW5lLmVtaXQoXG5cdFx0XHRcdEV2ZW50cy5ET01fRVZFTlQsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpbnZva2U6ICgpOiBhbnkgPT4ge1xuXHRcdFx0XHRcdFx0Zm4uZXZhbENhbGwoXG5cdFx0XHRcdFx0XHRcdGZuLmZ1bmN0aW9uRW52LmdldChHUkFNTUFSLlRISVMpIGFzIEluc3RhbmNlLFxuXHRcdFx0XHRcdFx0XHR0aGlzLmNyZWF0ZUx5cmFFdmVudEluc3RhbmNlKGV2ZW50KVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGV2ZW50XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlTHlyYUV2ZW50SW5zdGFuY2UoZXZlbnQ6IEV2ZW50KTogSW5zdGFuY2Uge1xuXHRcdGNvbnN0IGV2ZW50SW5zdGFuY2UgPSB0aGlzLmx5cmFFdmVudENsYXNzRGVmLmNvbnN0cnVjdEVtcHR5SW5zdGFuY2UoKTtcblx0XHRldmVudEluc3RhbmNlLl9fbmF0aXZlSW5zdGFuY2UgPSBuZXcgdGhpcy5seXJhRXZlbnRDbGFzc0RlZi5uYXRpdmVJbnN0YW5jZShldmVudCk7XG5cblx0XHRyZXR1cm4gZXZlbnRJbnN0YW5jZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0x5cmFTY3JpcHRQcm9ncmFtfSBmcm9tIFwiLi4vY29yZS9wcm9ncmFtXCI7XG5pbXBvcnQge2ZldGNoU291cmNlfSBmcm9tIFwiLi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuaW1wb3J0IHtDbGFzc0RlZmluaXRpb24sIEVudmlyb25tZW50LCBJbnN0YW5jZX0gZnJvbSBcIi4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB7Y2FsbEluc3RhbmNlTWV0aG9kfSBmcm9tIFwiLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9ydW50aW1lXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW5naW5lIHtcblx0ZXhlY3V0ZUVudHJ5RmlsZSh1cmw6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuXG5cdGNyZWF0ZUluc3RhbmNlKGNsYXNzTmFtZTogc3RyaW5nKTogSW5zdGFuY2U7XG5cblx0Y2FsbEluc3RhbmNlTWV0aG9kKG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogQXJyYXk8YW55Pik6IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIFdlYkx5cmFTY3JpcHQgaW1wbGVtZW50cyBFbmdpbmUge1xuXHRwcml2YXRlIHJlYWRvbmx5IHByb2dyYW06IEx5cmFTY3JpcHRQcm9ncmFtO1xuXHRwcml2YXRlIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSA9IG5ldyBPYmplY3RSZWdpc3RyeSgpO1xuXHRwcml2YXRlIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudCgpO1xuXHRwcml2YXRlIHJvb3RJbnN0YW5jZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpIHtcblx0XHR0aGlzLnByb2dyYW0gPSBuZXcgTHlyYVNjcmlwdFByb2dyYW0oaXNEZWJ1Zyk7XG5cdH1cblxuXHRjcmVhdGVJbnN0YW5jZShjbGFzc05hbWU6IHN0cmluZyk6IEluc3RhbmNlIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRDbGFzc0RlZmluaXRpb24oY2xhc3NOYW1lKVxuXHRcdCAgICAgICAgICAgLmNvbnN0cnVjdE5ld0luc3RhbmNlV2l0aG91dEFyZ3VtZW50cyh0aGlzLm9iamVjdFJlZ2lzdHJ5LCB0aGlzLmVudmlyb25tZW50KTtcblx0fVxuXG5cdGNhbGxJbnN0YW5jZU1ldGhvZChtZXRob2ROYW1lOiBzdHJpbmcsIGFyZ3M6IGFueVtdKTogYW55IHtcblx0XHRpZiAodGhpcy5yb290SW5zdGFuY2UgPT09IG51bGwpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignTm8gcm9vdCBpbnN0YW5jZSBhdmFpbGFibGUuJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNhbGxJbnN0YW5jZU1ldGhvZChcblx0XHRcdHRoaXMucm9vdEluc3RhbmNlLFxuXHRcdFx0dGhpcy5yb290SW5zdGFuY2UuX19jbGFzc0RlZi5maW5kTWV0aG9kKG1ldGhvZE5hbWUpLFxuXHRcdFx0YXJncyxcblx0XHRcdHRoaXMub2JqZWN0UmVnaXN0cnksXG5cdFx0XHR0aGlzLmVudmlyb25tZW50XG5cdFx0KTtcblx0fVxuXG5cdGFzeW5jIGV4ZWN1dGVFbnRyeUZpbGUodXJsOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHRoaXMucHJvZ3JhbS5leGVjdXRlKGF3YWl0IGZldGNoU291cmNlKHVybCkpXG5cdFx0ICAgICAgICAgICAudGhlbigoKSA9PiB7XG5cdFx0XHQgICAgICAgICAgIHRoaXMub2JqZWN0UmVnaXN0cnkgPSB0aGlzLnByb2dyYW0uZ2V0R2xvYmFsT2JqZWN0UmVnaXN0cnkoKTtcblx0XHRcdCAgICAgICAgICAgdGhpcy5lbnZpcm9ubWVudCA9IHRoaXMucHJvZ3JhbS5nZXRHbG9iYWxFbnZpcm9ubWVudCgpO1xuXHRcdFx0ICAgICAgICAgICB0aGlzLnJvb3RJbnN0YW5jZSA9IHRoaXMuY3JlYXRlSW5zdGFuY2UoY2xhc3NOYW1lKTtcblx0XHQgICAgICAgICAgIH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRDbGFzc0RlZmluaXRpb24oY2xhc3NOYW1lOiBzdHJpbmcpOiBDbGFzc0RlZmluaXRpb24ge1xuXHRcdHJldHVybiB0aGlzLm9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KGNsYXNzTmFtZSk7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHt0eXBlIEVuZ2luZSwgV2ViTHlyYVNjcmlwdH0gZnJvbSBcIi4vZW5naW5lXCI7XG5pbXBvcnQge0hUTUxFbGVtZW50Q3JlYXRvcn0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgdHlwZSB7Vk5vZGV9IGZyb20gXCIuLi9jb3JlL3Zkb20vdmRvbVwiO1xuaW1wb3J0IHtFdmVudFBpcGVsaW5lfSBmcm9tIFwiLi4vY29yZS9ldmVudC9waXBlbGluZVwiO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiLi9ldmVudFwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RBcHBsaWNhdGlvblJ1bnRpbWUge1xuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoXG5cdFx0cHJvdGVjdGVkIHJlYWRvbmx5IGVuZ2luZTogRW5naW5lXG5cdCkge1xuXG5cdH1cblxuXHRwcm90ZWN0ZWQgY2FsbE1ldGhvZChtZXRob2ROYW1lOiBzdHJpbmcsIGFyZ3M6IGFueVtdID0gW10pOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLmVuZ2luZS5jYWxsSW5zdGFuY2VNZXRob2QobWV0aG9kTmFtZSwgYXJncyk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFdlYkFwcGxpY2F0aW9uUnVudGltZSBleHRlbmRzIEFic3RyYWN0QXBwbGljYXRpb25SdW50aW1lIHtcblx0cHJpdmF0ZSBjdXJyZW50Vk5vZGU6IFZOb2RlIHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgaXNSZW5kZXJpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSByZW5kZXJGdW5jdGlvbjogKCgpID0+IFZOb2RlKSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgbW91bnRQb2ludDogSFRNTEVsZW1lbnQsXG5cdFx0aXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSA9IG5ldyBFdmVudFBpcGVsaW5lKCksXG5cdFx0cHJpdmF0ZSByZWFkb25seSBlbGVtZW50Q3JlYXRvcjogSFRNTEVsZW1lbnRDcmVhdG9yID0gbmV3IEhUTUxFbGVtZW50Q3JlYXRvcihldmVudFBpcGVsaW5lKVxuXHQpIHtcblx0XHRzdXBlcihuZXcgV2ViTHlyYVNjcmlwdChpc0RlYnVnKSk7XG5cdH1cblxuXHRhc3luYyBzdGFydCh1cmw6IHN0cmluZywgY2xhc3NOYW1lID0gJ0FwcCcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRhd2FpdCB0aGlzLmVuZ2luZS5leGVjdXRlRW50cnlGaWxlKHVybCwgY2xhc3NOYW1lKTtcblxuXHRcdHRoaXMuc3RhcnRMaXN0ZW5pbmdUb0RvbUV2ZW50cygpO1xuXG5cdFx0dGhpcy5yZW5kZXJGdW5jdGlvbiA9ICgpID0+IHRoaXMuY2FsbFJlbmRlcigpO1xuXG5cdFx0dGhpcy5wZXJmb3JtUmVuZGVyKCk7XG5cdH1cblxuXHQvLyBXaXJkIHZvbSBTdG9yZSBhdWZnZXJ1ZmVuXG5cdHJlcXVlc3RSZW5kZXIoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNSZW5kZXJpbmcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG5cdFx0XHR0aGlzLnBlcmZvcm1SZW5kZXIoKTtcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgY2FsbFJlbmRlcigpOiBWTm9kZSB7XG5cdFx0cmV0dXJuIHRoaXMuY2FsbE1ldGhvZCgncmVuZGVyJywgW10pIGFzIFZOb2RlO1xuXHR9XG5cblx0cHJpdmF0ZSBwZXJmb3JtUmVuZGVyKCk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5yZW5kZXJGdW5jdGlvbikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuaXNSZW5kZXJpbmcgPSB0cnVlO1xuXG5cdFx0Y29uc3QgbmV4dFZOb2RlOiBWTm9kZSA9IHRoaXMucmVuZGVyRnVuY3Rpb24oKTtcblxuXHRcdHRoaXMucGF0Y2godGhpcy5jdXJyZW50Vk5vZGUsIG5leHRWTm9kZSk7XG5cblx0XHR0aGlzLmN1cnJlbnRWTm9kZSA9IG5leHRWTm9kZTtcblxuXHRcdHRoaXMuaXNSZW5kZXJpbmcgPSBmYWxzZTtcblx0fVxuXG5cdHByaXZhdGUgcGF0Y2gob2xkVk5vZGU6IFZOb2RlIHwgbnVsbCwgbmV3Vk5vZGU6IFZOb2RlKTogdm9pZCB7XG5cblx0XHQvLyBFcnN0bWFsIHNpbXBlbDogRnVsbCBSZXBsYWNlXG5cdFx0Ly8gU3DDpHRlciBkaWZmICsgcGF0Y2hcblxuXHRcdHRoaXMubW91bnRQb2ludC5pbm5lckhUTUwgPSAnJztcblx0XHRjb25zdCBlbGVtZW50OiBOb2RlID0gdGhpcy5lbGVtZW50Q3JlYXRvci5jcmVhdGVFbGVtZW50KG5ld1ZOb2RlKTtcblx0XHR0aGlzLm1vdW50UG9pbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cdH1cblxuXHRwcml2YXRlIHN0YXJ0TGlzdGVuaW5nVG9Eb21FdmVudHMoKTogdm9pZCB7XG5cdFx0dGhpcy5ldmVudFBpcGVsaW5lLm9uKEV2ZW50cy5ET01fRVZFTlQsICh7aW52b2tlfTogYW55KTogdm9pZCA9PiB7XG5cdFx0XHRpbnZva2UoKTtcblx0XHR9KTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4vY29yZS9wYXJzZXIvcGFyc2VyXCI7XG5pbXBvcnQge3dyYXBKc0Vycm9yfSBmcm9tIFwiLi9jb3JlL2Vycm9yc1wiO1xuaW1wb3J0IHtmZXRjaFNvdXJjZSwgU291cmNlfSBmcm9tIFwiLi9jb3JlL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5pbXBvcnQge0FTVE5vZGV9IGZyb20gXCIuL2NvcmUvYXN0XCI7XG5pbXBvcnQge1Rva2VuaXplcn0gZnJvbSBcIi4vY29yZS90b2tlbml6ZXIvdG9rZW5pemVyXCI7XG5pbXBvcnQge1Rva2VufSBmcm9tIFwiLi9jb3JlL2dyYW1tYXJcIjtcbmltcG9ydCB7THlyYVNjcmlwdFByb2dyYW19IGZyb20gXCIuL2NvcmUvcHJvZ3JhbVwiO1xuaW1wb3J0IHtFdmVudFBpcGVsaW5lfSBmcm9tIFwiLi9jb3JlL2V2ZW50L3BpcGVsaW5lXCI7XG5pbXBvcnQge2JpbmRTdGF0ZVRvRXZlbnQsIFN0YXRlfSBmcm9tIFwiLi9jb3JlL2V2ZW50L3N0YXRlXCI7XG5pbXBvcnQge0hUTUxFbGVtZW50Q3JlYXRvcn0gZnJvbSBcIi4vaG9zdC9kb21cIjtcblxuZXhwb3J0IHtXZWJMeXJhU2NyaXB0fSBmcm9tIFwiLi9ob3N0L2VuZ2luZVwiO1xuZXhwb3J0IHtXZWJBcHBsaWNhdGlvblJ1bnRpbWV9IGZyb20gXCIuL2hvc3QvcnVudGltZVwiO1xuXG5jb25zdCBMeXJhID0ge1xuXHRTb3VyY2UsXG5cdFBhcnNlcixcblx0VG9rZW5pemVyLFxuXHRFdmVudFBpcGVsaW5lLFxuXHRIVE1MRWxlbWVudENyZWF0b3IsXG5cdFN0YXRlLFxuXHRiaW5kU3RhdGVUb0V2ZW50LFxuXHRQcm9ncmFtOiAoaXNEZWJ1ZzogYm9vbGVhbik6IEx5cmFTY3JpcHRQcm9ncmFtID0+IFByb2dyYW0oaXNEZWJ1ZyksXG5cdGV4ZWN1dGU6IChzb3VyY2U6IFNvdXJjZSwgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiBleGVjdXRlKHNvdXJjZSwgaXNEZWJ1ZyksXG5cdGV4ZWN1dGVGcm9tU3RyaW5nOiAoY29kZTogc3RyaW5nLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+ID0+IGV4ZWN1dGVGcm9tU3RyaW5nKGNvZGUsIGlzRGVidWcpLFxuXHRleGVjdXRlRnJvbVVybDogYXN5bmMgKHVybDogc3RyaW5nLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+ID0+IGV4ZWN1dGVGcm9tVXJsKHVybCwgaXNEZWJ1ZyksXG5cdGV4ZWN1dGVUZXN0OiAoc291cmNlOiBTb3VyY2UsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4gPT4gZXhlY3V0ZVRlc3Qoc291cmNlLCBpc0RlYnVnKSxcblx0ZXhlY3V0ZVRlc3RTdHJpbmc6IChjb2RlOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4gPT4gZXhlY3V0ZVRlc3RTdHJpbmcoY29kZSwgaXNEZWJ1ZyksXG5cdGV4ZWN1dGVUZXN0VXJsOiAodXJsOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4gPT4gZXhlY3V0ZVRlc3RVcmwodXJsLCBpc0RlYnVnKSxcblx0dG9rZW5pemU6IChzb3VyY2U6IFNvdXJjZSk6IFRva2VuW10gPT4gdG9rZW5pemUoc291cmNlKSxcblx0dG9rZW5pemVVcmw6ICh1cmw6IHN0cmluZyk6IFByb21pc2U8VG9rZW5bXT4gPT4gdG9rZW5pemVVcmwodXJsKSxcblx0cGFyc2VUcmVlOiAoc291cmNlOiBTb3VyY2UpOiBBU1ROb2RlID0+IHBhcnNlVHJlZShzb3VyY2UpLFxuXHRwYXJzZVRyZWVVcmw6ICh1cmw6IHN0cmluZyk6IFByb21pc2U8QVNUTm9kZT4gPT4gcGFyc2VUcmVlVXJsKHVybCksXG59O1xuXG5mdW5jdGlvbiBQcm9ncmFtKGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IEx5cmFTY3JpcHRQcm9ncmFtIHtcblx0cmV0dXJuIG5ldyBMeXJhU2NyaXB0UHJvZ3JhbShpc0RlYnVnKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZShzb3VyY2U6IFNvdXJjZSwgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IFByb2dyYW0oaXNEZWJ1Zylcblx0XHRcdC5leGVjdXRlKHNvdXJjZSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3Iod3JhcEpzRXJyb3IoZXJyb3IsIHNvdXJjZSlcblx0XHRcdFx0ICAgICAgICAgICAgICAuZm9ybWF0KCkpO1xuXHRcdH1cblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlRnJvbVVybCh1cmw6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdHJldHVybiBhd2FpdCBleGVjdXRlKGF3YWl0IGZldGNoU291cmNlKHVybCksIGlzRGVidWcpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlRnJvbVN0cmluZyhjb2RlOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBzb3VyY2UgPSBuZXcgU291cmNlKGNvZGUpO1xuXG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IFByb2dyYW0oaXNEZWJ1Zylcblx0XHRcdC5leGVjdXRlKHNvdXJjZSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3Iod3JhcEpzRXJyb3IoZXJyb3IsIHNvdXJjZSlcblx0XHRcdFx0ICAgICAgICAgICAgICAuZm9ybWF0KCkpO1xuXHRcdH1cblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlVGVzdChzb3VyY2U6IFNvdXJjZSwgaXNEZWJ1ZyA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IFByb2dyYW0oaXNEZWJ1Zylcblx0XHRcdC5leGVjdXRlVGVzdChzb3VyY2UpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKHdyYXBKc0Vycm9yKGVycm9yLCBzb3VyY2UpXG5cdFx0XHRcdCAgICAgICAgICAgICAgLmZvcm1hdCgpKTtcblx0XHR9XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZVRlc3RVcmwodXJsOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4ge1xuXHRyZXR1cm4gYXdhaXQgZXhlY3V0ZVRlc3QoYXdhaXQgZmV0Y2hTb3VyY2UodXJsKSwgaXNEZWJ1Zyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVUZXN0U3RyaW5nKGNvZGU6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHNvdXJjZSA9IG5ldyBTb3VyY2UoY29kZSk7XG5cblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgUHJvZ3JhbShpc0RlYnVnKVxuXHRcdFx0LmV4ZWN1dGVUZXN0KHNvdXJjZSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3Iod3JhcEpzRXJyb3IoZXJyb3IsIHNvdXJjZSlcblx0XHRcdFx0ICAgICAgICAgICAgICAuZm9ybWF0KCkpO1xuXHRcdH1cblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9rZW5pemUoc291cmNlOiBTb3VyY2UpOiBUb2tlbltdIHtcblx0cmV0dXJuIG5ldyBUb2tlbml6ZXIoc291cmNlKS50b2tlbml6ZSgpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdG9rZW5pemVVcmwodXJsOiBzdHJpbmcpOiBQcm9taXNlPFRva2VuW10+IHtcblx0cmV0dXJuIHRva2VuaXplKGF3YWl0IGZldGNoU291cmNlKHVybCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUcmVlKHNvdXJjZTogU291cmNlKTogQVNUTm9kZSB7XG5cdHJldHVybiBuZXcgUGFyc2VyKHNvdXJjZSkucGFyc2UoKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBhcnNlVHJlZVVybCh1cmw6IHN0cmluZyk6IFByb21pc2U8QVNUTm9kZT4ge1xuXHRyZXR1cm4gcGFyc2VUcmVlKGF3YWl0IGZldGNoU291cmNlKHVybCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMeXJhO1xuIgogIF0sCiAgIm1hcHBpbmdzIjogIjtBQUVPLE1BQU0sUUFBUTtBQUFBLFNBQ2IsU0FBaUI7QUFBQSxTQUNqQixPQUFlO0FBQUEsU0FDZixNQUFjO0FBQUEsU0FDZCxPQUFlO0FBQUEsU0FDZixRQUFnQjtBQUFBLFNBQ2hCLFlBQW9CO0FBQUEsU0FDcEIsVUFBa0I7QUFBQSxTQUNsQixhQUFxQjtBQUFBLFNBQ3JCLGNBQXNCO0FBQUEsU0FDdEIsTUFBYztBQUFBLFNBQ2QsT0FBZTtBQUFBLFNBQ2YsU0FBaUI7QUFBQSxTQUNqQixVQUFrQjtBQUFBLFNBQ2xCLFNBQWlCO0FBQUEsU0FDakIsV0FBbUI7QUFBQSxTQUNuQixTQUFpQjtBQUFBLFNBQ2pCLFFBQWdCO0FBQUEsU0FDaEIsT0FBZTtBQUFBLFNBQ2YsUUFBZ0I7QUFBQSxTQUNoQixLQUFhO0FBQUEsU0FDYixPQUFlO0FBQUEsU0FDZixRQUFnQjtBQUFBLFNBQ2hCLFVBQWtCO0FBQUEsU0FDbEIsVUFBa0I7QUFBQSxTQUNsQixLQUFhO0FBQUEsU0FDYixPQUFlO0FBQUEsU0FDZixPQUFlO0FBQUEsU0FFZixzQkFBOEI7QUFBQSxTQUM5Qix1QkFBK0I7QUFBQSxTQUMvQixhQUFxQjtBQUFBLFNBQ3JCLGNBQXNCO0FBQUEsU0FDdEIsbUJBQTJCO0FBQUEsU0FDM0Isb0JBQTRCO0FBQUEsU0FDNUIsWUFBb0I7QUFBQSxTQUNwQixRQUFnQjtBQUFBLFNBQ2hCLFFBQWdCO0FBQUEsU0FFaEIsUUFBZ0I7QUFBQSxTQUNoQixNQUFjO0FBQUEsU0FDZCxTQUFpQjtBQUFBLFNBQ2pCLE9BQWU7QUFBQSxTQUNmLFFBQWdCO0FBQUEsU0FDaEIsU0FBaUI7QUFBQSxTQUNqQixXQUFtQjtBQUFBLFNBQ25CLFVBQWtCO0FBQUEsU0FFbEIsbUJBQTJCO0FBQUEsU0FDM0IsZ0JBQXdCO0FBQUEsU0FDeEIsWUFBb0I7QUFBQSxTQUNwQixlQUF1QjtBQUFBLFNBQ3ZCLGFBQXFCO0FBQUEsU0FDckIsZ0JBQXdCO0FBQUEsU0FDeEIsUUFBZ0I7QUFBQSxTQUNoQixZQUFvQjtBQUFBLFNBQ3BCLE1BQWM7QUFBQSxTQUNkLEtBQWE7QUFBQSxTQUViLGdCQUF3QjtBQUFBLFNBQ3hCLHFCQUE2QjtBQUFBLFNBRTdCLFdBQXFCO0FBQUEsSUFDM0IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLEVBQ1Q7QUFBQSxTQUNPLGFBQXVCO0FBQUEsSUFDN0IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLEVBQ1Q7QUFBQSxTQUNPLGFBQXVCO0FBQUEsSUFDN0IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLEVBQ1Q7QUFBQSxTQUNPLFdBQXFCO0FBQUEsSUFDM0IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLEVBQ1Q7QUFBQSxTQUNPLFVBQW9CO0FBQUEsSUFDMUIsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLEVBQ1Q7QUFBQSxTQUNPLFlBQXNCO0FBQUEsSUFDNUIsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLEVBQ1Q7QUFBQSxTQUNPLGlCQUEyQjtBQUFBLElBQ2pDLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxFQUNUO0FBQUEsU0FDTyxrQkFBNEI7QUFBQSxJQUNsQyxRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFD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LFVBQW1CLE9BQXNCO0FBQUEsRUFDbkYsT0FBTyxNQUFNLFFBQVEsTUFBTSxZQUFZLEdBQUcsR0FBRyxPQUFPO0FBQUE7QUFHckQsZUFBZSxpQkFBaUIsQ0FBQyxNQUFjLFVBQW1CLE9BQXNCO0FBQUEsRUFDdkYsTUFBTSxTQUFTLElBQUksT0FBTyxJQUFJO0FBQUEsRUFFOUIsSUFBSTtBQUFBLElBQ0gsT0FBTyxNQUFNLFFBQVEsT0FBTyxFQUMxQixRQUFRLE1BQU07QUFBQSxJQUNmLE9BQU8sT0FBTztBQUFBLElBQ2YsSUFBSSxpQkFBaUIsT0FBTztBQUFBLE1BQzNCLFFBQVEsTUFBTSxZQUFZLE9BQU8sTUFBTSxFQUN2QixPQUFPLENBQUM7QUFBQSxJQUN6QjtBQUFBLElBQ0EsTUFBTTtBQUFBO0FBQUE7QUFJUixlQUFlLFdBQVcsQ0FBQyxRQUFnQixVQUFVLE9BQXNCO0FBQUEsRUFDMUUsSUFBSTtBQUFBLElBQ0gsT0FBTyxNQUFNLFFBQVEsT0FBTyxFQUMxQixZQUFZLE1BQU07QUFBQSxJQUNuQixPQUFPLE9BQU87QUFBQSxJQUNmLElBQUksaUJBQWlCLE9BQU87QUFBQSxNQUMzQixRQUFRLE1BQU0sWUFBWSxPQUFPLE1BQU0sRUFDdkIsT0FBTyxDQUFDO0FBQUEsSUFDekI7QUFBQSxJQUNBLE1BQU07QUFBQTtBQUFBO0FBSVIsZUFBZSxjQUFjLENBQUMsS0FBYSxVQUFtQixPQUFzQjtBQUFBLEVBQ25GLE9BQU8sTUFBTSxZQUFZLE1BQU0sWUFBWSxHQUFHLEdBQUcsT0FBTztBQUFBO0FBR3pELGVBQWUsaUJBQWlCLENBQUMsTUFBYyxVQUFtQixPQUFzQjtBQUFBLEVBQ3ZGLE1BQU0sU0FBUyxJQUFJLE9BQU8sSUFBSTtBQUFBLEVBRTlCLElBQUk7QUFBQSxJQUNILE9BQU8sTUFBTSxRQUFRLE9BQU8sRUFDMUIsWUFBWSxNQUFNO0FBQUEsSUFDbkIsT0FBTyxPQUFPO0FBQUEsSUFDZixJQUFJLGlCQUFpQixPQUFPO0FBQUEsTUFDM0IsUUFBUSxNQUFNLFlBQVksT0FBTyxNQUFNLEVBQ3ZCLE9BQU8sQ0FBQztBQUFBLElBQ3pCO0FBQUEsSUFDQSxNQUFNO0FBQUE7QUFBQTtBQUlELFNBQVMsUUFBUSxDQUFDLFFBQXlCO0FBQUEsRUFDakQsT0FBTyxJQUFJLFVBQVUsTUFBTSxFQUFFLFNBQVM7QUFBQTtBQUd2QyxlQUFzQixXQUFXLENBQUMsS0FBK0I7QUFBQSxFQUNoRSxPQUFPLFNBQVMsTUFBTSxZQUFZLEdBQUcsQ0FBQztBQUFBO0FBR2hDLFNBQVMsU0FBUyxDQUFDLFFBQXlCO0FBQUEsRUFDbEQsT0FBTyxJQUFJLE9BQU8sTUFBTSxFQUFFLE1BQU07QUFBQTtBQUdqQyxlQUFzQixZQUFZLENBQUMsS0FBK0I7QUFBQSxFQUNqRSxPQUFPLFVBQVUsTUFBTSxZQUFZLEdBQUcsQ0FBQztBQUFBO0FBR3hDLElBQWU7IiwKICAiZGVidWdJZCI6ICI0QUYxMDA0MjhBMzk4MEU5NjQ3NTZFMjE2NDc1NkUyMSIsCiAgIm5hbWVzIjogW10KfQ==
