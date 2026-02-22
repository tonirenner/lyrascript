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
  const instance = classDef.constructEmptyInstance(objectRegistry);
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
  return classDef.constructEmptyInstance(objectRegistry);
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
  const instance = classDef.constructEmptyInstance(objectRegistry);
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
  const instance = classDef.constructEmptyInstance(objectRegistry);
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
  constructNewInstanceWithoutArguments(objectRegistry, environment, eventPipeline) {
    return this.constructNewInstance([], objectRegistry, environment, eventPipeline);
  }
  constructNewInstance(args, objectRegistry, environment, eventPipeline) {
    const newNode = new ASTNewNode(args, new ASTTypeNode(ASTTypeNode.KIND_SIMPLE, this.name));
    return this.constructInstanceByNewNode(newNode, objectRegistry, environment, eventPipeline);
  }
  constructInstanceByNewNode(expr, objectRegistry, environment, eventPipeline) {
    const instance = this.constructEmptyInstance(objectRegistry);
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
    const instance = this.constructEmptyInstance(objectRegistry);
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
  globalObjectRegistry;
  globalEnvironment;
  rootInstance = null;
  constructor(globalEventPipeline = new EventPipeline, isDebug = false) {
    this.globalEventPipeline = globalEventPipeline;
    this.program = new LyraScriptProgram(isDebug, this.globalEventPipeline);
    this.globalObjectRegistry = this.program.getGlobalObjectRegistry();
    this.globalEnvironment = this.program.getGlobalEnvironment();
  }
  getRootInstance() {
    if (this.rootInstance === null) {
      throw new Error("No root instance available.");
    }
    return this.rootInstance;
  }
  createInstance(className) {
    return this.getClassDefinition(className).constructNewInstanceWithoutArguments(this.globalObjectRegistry, this.globalEnvironment, this.globalEventPipeline);
  }
  callRootInstanceMethod(methodName, args) {
    return this.callInstanceMethod(this.getRootInstance(), methodName, args);
  }
  callInstanceMethod(instance, methodName, args) {
    return callInstanceMethod(instance, instance.findeMethodNode(methodName), args, this.globalObjectRegistry, this.globalEnvironment, this.globalEventPipeline);
  }
  async executeEntryFile(url, className) {
    return this.program.execute(await fetchSource(url)).then(() => {
      this.rootInstance = this.createInstance(className);
    });
  }
  createEvent(event) {
    return lyraEventClassDef.constructNativeInstance(this.globalObjectRegistry, [event]);
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
    return this.globalObjectRegistry.classes.get(className);
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

//# debugId=1A2C0636B43D2ECC64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibGFuZ3VhZ2Uvc3JjL2NvcmUvZ3JhbW1hci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9hc3QudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvdG9rZW5pemVyL3Rva2VuaXplci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9lcnJvcnMudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvbmF0aXZlX2NsYXNzLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX2NvbnZlcnNpb24udHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9zdHJpbmcudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9zeXN0ZW0udHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9hc3NlcnQudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9udW1iZXIudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9hcnJheS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9ldmVudC9zdGF0ZS50cyIsICJsYW5ndWFnZS9zcmMvbGlicmFyeS9jbGFzc2VzL3N0YXRlLnRzIiwgImxhbmd1YWdlL3NyYy9saWJyYXJ5L2NsYXNzZXMvZXZlbnQudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvbmF0aXZlX2NsYXNzZXMudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvbmF0aXZlX2Z1bmN0aW9ucy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS90eXBlcy90eXBlX29iamVjdHMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvdHlwZXMvYXV0b2JveGluZy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9ydW50aW1lLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2V2ZW50L2V2ZW50cy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL3BhcnNlci9wYXJzZXJfc3RhdG1lbnRzLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL3BhcnNlci9wYXJzZXIudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcmVnaXN0cnkudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvdHlwZXMvdHlwZWNoZWNrZXIudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvbGlua2VyL2RlcGVuZGVuY2llcy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9saW5rZXIvbGlua2VyLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL3Rlc3RzL3Rlc3RzdWl0ZXMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXIudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvbG9hZGVycy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9ldmVudC9waXBlbGluZS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9wcm9ncmFtLnRzIiwgImxhbmd1YWdlL3NyYy9ob3N0L2V2ZW50cy50cyIsICJsYW5ndWFnZS9zcmMvaG9zdC9kb20udHMiLCAibGFuZ3VhZ2Uvc3JjL2hvc3QvZW5naW5lLnRzIiwgImxhbmd1YWdlL3NyYy9ob3N0L3JlZ2lzdHJ5LnRzIiwgImxhbmd1YWdlL3NyYy9ob3N0L3J1bnRpbWUudHMiLCAibGFuZ3VhZ2Uvc3JjL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWwogICAgImltcG9ydCB0eXBlIHtTb3VyY2V9IGZyb20gXCIuL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmV4cG9ydCBjbGFzcyBHUkFNTUFSIHtcblx0c3RhdGljIElNUE9SVDogc3RyaW5nID0gJ2ltcG9ydCc7XG5cdHN0YXRpYyBGUk9NOiBzdHJpbmcgPSAnZnJvbSc7XG5cdHN0YXRpYyBMRVQ6IHN0cmluZyA9ICdsZXQnO1xuXHRzdGF0aWMgT1BFTjogc3RyaW5nID0gJ29wZW4nO1xuXHRzdGF0aWMgQ0xBU1M6IHN0cmluZyA9ICdjbGFzcyc7XG5cdHN0YXRpYyBJTlRFUkZBQ0U6IHN0cmluZyA9ICdpbnRlcmZhY2UnO1xuXHRzdGF0aWMgRVhURU5EUzogc3RyaW5nID0gJ2V4dGVuZHMnO1xuXHRzdGF0aWMgSU1QTEVNRU5UUzogc3RyaW5nID0gJ2ltcGxlbWVudHMnO1xuXHRzdGF0aWMgQ09OU1RSVUNUT1I6IHN0cmluZyA9ICdjb25zdHJ1Y3Rvcic7XG5cdHN0YXRpYyBORVc6IHN0cmluZyA9ICduZXcnO1xuXHRzdGF0aWMgVEhJUzogc3RyaW5nID0gJ3RoaXMnO1xuXHRzdGF0aWMgUFVCTElDOiBzdHJpbmcgPSAncHVibGljJztcblx0c3RhdGljIFBSSVZBVEU6IHN0cmluZyA9ICdwcml2YXRlJztcblx0c3RhdGljIFNUQVRJQzogc3RyaW5nID0gJ3N0YXRpYyc7XG5cdHN0YXRpYyBSRUFET05MWTogc3RyaW5nID0gJ3JlYWRvbmx5Jztcblx0c3RhdGljIFJFVFVSTjogc3RyaW5nID0gJ3JldHVybic7XG5cdHN0YXRpYyBTVVBFUjogc3RyaW5nID0gJ3N1cGVyJztcblx0c3RhdGljIFRSVUU6IHN0cmluZyA9ICd0cnVlJztcblx0c3RhdGljIEZBTFNFOiBzdHJpbmcgPSAnZmFsc2UnO1xuXHRzdGF0aWMgSUY6IHN0cmluZyA9ICdpZic7XG5cdHN0YXRpYyBFTFNFOiBzdHJpbmcgPSAnZWxzZSc7XG5cdHN0YXRpYyBNQVRDSDogc3RyaW5nID0gJ21hdGNoJztcblx0c3RhdGljIERFRkFVTFQ6IHN0cmluZyA9ICdkZWZhdWx0Jztcblx0c3RhdGljIEZPUkVBQ0g6IHN0cmluZyA9ICdmb3JlYWNoJztcblx0c3RhdGljIElOOiBzdHJpbmcgPSAnaW4nO1xuXHRzdGF0aWMgTlVMTDogc3RyaW5nID0gJ251bGwnO1xuXHRzdGF0aWMgVkRPTTogc3RyaW5nID0gJ3Zkb20nO1xuXG5cdHN0YXRpYyBCUkFDS0VUX1NRVUFSRV9PUEVOOiBzdHJpbmcgPSAnWyc7XG5cdHN0YXRpYyBCUkFDS0VUX1NRVUFSRV9DTE9TRTogc3RyaW5nID0gJ10nO1xuXHRzdGF0aWMgQlJBQ0VfT1BFTjogc3RyaW5nID0gJ3snO1xuXHRzdGF0aWMgQlJBQ0VfQ0xPU0U6IHN0cmluZyA9ICd9Jztcblx0c3RhdGljIFBBUkVOVEhFU0VTX09QRU46IHN0cmluZyA9ICcoJztcblx0c3RhdGljIFBBUkVOVEhFU0VTX0NMT1NFOiBzdHJpbmcgPSAnKSc7XG5cdHN0YXRpYyBTRU1JQ09MT046IHN0cmluZyA9ICc7Jztcblx0c3RhdGljIENPTE9OOiBzdHJpbmcgPSAnOic7XG5cdHN0YXRpYyBDT01NQTogc3RyaW5nID0gJywnO1xuXG5cdHN0YXRpYyBBUlJPVzogc3RyaW5nID0gJy0+Jztcblx0c3RhdGljIERPVDogc3RyaW5nID0gJy4nO1xuXHRzdGF0aWMgQVNTSUdOOiBzdHJpbmcgPSAnPSc7XG5cdHN0YXRpYyBQTFVTOiBzdHJpbmcgPSAnKyc7XG5cdHN0YXRpYyBNSU5VUzogc3RyaW5nID0gJy0nO1xuXHRzdGF0aWMgRElWSURFOiBzdHJpbmcgPSAnLyc7XG5cdHN0YXRpYyBNVUxUSVBMWTogc3RyaW5nID0gJyonO1xuXHRzdGF0aWMgTU9EVUxVUzogc3RyaW5nID0gJyUnO1xuXG5cdHN0YXRpYyBFWENMQU1BVElPTl9NQVJLOiBzdHJpbmcgPSAnISc7XG5cdHN0YXRpYyBRVUVTVElPTl9NQVJLOiBzdHJpbmcgPSAnPyc7XG5cdHN0YXRpYyBMRVNTX1RIQU46IHN0cmluZyA9ICc8Jztcblx0c3RhdGljIEdSRUFURVJfVEhBTjogc3RyaW5nID0gJz4nO1xuXHRzdGF0aWMgTEVTU19FUVVBTDogc3RyaW5nID0gJzw9Jztcblx0c3RhdGljIEdSRUFURVJfRVFVQUw6IHN0cmluZyA9ICc+PSc7XG5cdHN0YXRpYyBFUVVBTDogc3RyaW5nID0gJz09Jztcblx0c3RhdGljIE5PVF9FUVVBTDogc3RyaW5nID0gJyE9Jztcblx0c3RhdGljIEFORDogc3RyaW5nID0gJyYmJztcblx0c3RhdGljIE9SOiBzdHJpbmcgPSAnfHwnO1xuXG5cdHN0YXRpYyBYTUxfQ0xPU0VfVEFHOiBzdHJpbmcgPSAnLz4nO1xuXHRzdGF0aWMgWE1MX09QRU5fQ0xPU0VfVEFHOiBzdHJpbmcgPSAnPC8nO1xuXG5cdHN0YXRpYyBLRVlXT1JEUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5JTVBPUlQsXG5cdFx0R1JBTU1BUi5GUk9NLFxuXHRcdEdSQU1NQVIuT1BFTixcblx0XHRHUkFNTUFSLkNMQVNTLFxuXHRcdEdSQU1NQVIuSU5URVJGQUNFLFxuXHRcdEdSQU1NQVIuRVhURU5EUyxcblx0XHRHUkFNTUFSLklNUExFTUVOVFMsXG5cdFx0R1JBTU1BUi5QVUJMSUMsXG5cdFx0R1JBTU1BUi5QUklWQVRFLFxuXHRcdEdSQU1NQVIuU1RBVElDLFxuXHRcdEdSQU1NQVIuUkVBRE9OTFksXG5cdFx0R1JBTU1BUi5SRVRVUk4sXG5cdFx0R1JBTU1BUi5MRVQsXG5cdFx0R1JBTU1BUi5ORVcsXG5cdFx0R1JBTU1BUi5USElTLFxuXHRcdEdSQU1NQVIuSUYsXG5cdFx0R1JBTU1BUi5FTFNFLFxuXHRcdEdSQU1NQVIuTUFUQ0gsXG5cdFx0R1JBTU1BUi5ERUZBVUxULFxuXHRcdEdSQU1NQVIuRk9SRUFDSCxcblx0XHRHUkFNTUFSLklOLFxuXHRcdEdSQU1NQVIuTlVMTCxcblx0XHRHUkFNTUFSLlZET00sXG5cdF07XG5cdHN0YXRpYyBBUklUSE1FVElDOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLlBMVVMsXG5cdFx0R1JBTU1BUi5NSU5VUyxcblx0XHRHUkFNTUFSLkRJVklERSxcblx0XHRHUkFNTUFSLk1VTFRJUExZLFxuXHRcdEdSQU1NQVIuTU9EVUxVU1xuXHRdO1xuXHRzdGF0aWMgQ09NUEFSSVNPTjogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5MRVNTX1RIQU4sXG5cdFx0R1JBTU1BUi5HUkVBVEVSX1RIQU4sXG5cdFx0R1JBTU1BUi5MRVNTX0VRVUFMLFxuXHRcdEdSQU1NQVIuR1JFQVRFUl9FUVVBTFxuXHRdO1xuXHRzdGF0aWMgRVFVQUxJVFk6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuRVFVQUwsXG5cdFx0R1JBTU1BUi5OT1RfRVFVQUxcblx0XTtcblx0c3RhdGljIExPR0lDQUw6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuQU5ELFxuXHRcdEdSQU1NQVIuT1Jcblx0XTtcblx0c3RhdGljIE9QRVJBVE9SUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5FWENMQU1BVElPTl9NQVJLLFxuXHRcdEdSQU1NQVIuUVVFU1RJT05fTUFSSyxcblx0XHRHUkFNTUFSLkFSUk9XLFxuXHRcdEdSQU1NQVIuRE9ULFxuXHRcdEdSQU1NQVIuQVNTSUdOLFxuXHRcdEdSQU1NQVIuUExVUyxcblx0XHRHUkFNTUFSLk1JTlVTLFxuXHRcdEdSQU1NQVIuRElWSURFLFxuXHRcdEdSQU1NQVIuTVVMVElQTFksXG5cdFx0R1JBTU1BUi5NT0RVTFVTLFxuXHRcdEdSQU1NQVIuTEVTU19USEFOLFxuXHRcdEdSQU1NQVIuR1JFQVRFUl9USEFOLFxuXHRcdEdSQU1NQVIuTEVTU19FUVVBTCxcblx0XHRHUkFNTUFSLkdSRUFURVJfRVFVQUwsXG5cdFx0R1JBTU1BUi5FUVVBTCxcblx0XHRHUkFNTUFSLk5PVF9FUVVBTCxcblx0XHRHUkFNTUFSLkFORCxcblx0XHRHUkFNTUFSLk9SLFxuXHRdO1xuXHRzdGF0aWMgTUFUSF9PUEVSQVRPUlM6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuUExVUyxcblx0XHRHUkFNTUFSLk1JTlVTLFxuXHRcdEdSQU1NQVIuRElWSURFLFxuXHRcdEdSQU1NQVIuTVVMVElQTFksXG5cdFx0R1JBTU1BUi5NT0RVTFVTXG5cdF07XG5cdHN0YXRpYyBMT0dJQ19PUEVSQVRPUlM6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuTEVTU19USEFOLFxuXHRcdEdSQU1NQVIuR1JFQVRFUl9USEFOLFxuXHRcdEdSQU1NQVIuTEVTU19FUVVBTCxcblx0XHRHUkFNTUFSLkdSRUFURVJfRVFVQUwsXG5cdFx0R1JBTU1BUi5FUVVBTCxcblx0XHRHUkFNTUFSLk5PVF9FUVVBTCxcblx0XHRHUkFNTUFSLkFORCxcblx0XHRHUkFNTUFSLk9SLFxuXHRdO1xuXHRzdGF0aWMgUFVOQ1RVQVRJT05TOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX09QRU4sXG5cdFx0R1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9DTE9TRSxcblx0XHRHUkFNTUFSLkJSQUNFX09QRU4sXG5cdFx0R1JBTU1BUi5CUkFDRV9DTE9TRSxcblx0XHRHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4sXG5cdFx0R1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSxcblx0XHRHUkFNTUFSLlNFTUlDT0xPTixcblx0XHRHUkFNTUFSLkNPTE9OLFxuXHRcdEdSQU1NQVIuQ09NTUFcblx0XTtcblx0c3RhdGljIERPTV9PUEVSQVRPUlM6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuQVJST1csXG5cdFx0R1JBTU1BUi5ET1QsXG5cdFx0R1JBTU1BUi5BU1NJR04sXG5cdFx0R1JBTU1BUi5MRVNTX1RIQU4sXG5cdFx0R1JBTU1BUi5HUkVBVEVSX1RIQU4sXG5cdFx0R1JBTU1BUi5YTUxfT1BFTl9DTE9TRV9UQUcsXG5cdFx0R1JBTU1BUi5YTUxfQ0xPU0VfVEFHXG5cdF07XG5cdHN0YXRpYyBET01fUFVOQ1RVQVRJT05TOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX09QRU4sXG5cdFx0R1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9DTE9TRSxcblx0XHRHUkFNTUFSLkJSQUNFX09QRU4sXG5cdFx0R1JBTU1BUi5CUkFDRV9DTE9TRSxcblx0XHRHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4sXG5cdFx0R1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSxcblx0XHRHUkFNTUFSLlNFTUlDT0xPTixcblx0XHRHUkFNTUFSLkNPTE9OLFxuXHRcdEdSQU1NQVIuQ09NTUFcblx0XTtcbn1cblxuZXhwb3J0IGNsYXNzIFRZUEVfRU5VTSB7XG5cdHN0YXRpYyBNSVhFRDogc3RyaW5nID0gJ21peGVkJztcblx0c3RhdGljIFZPSUQ6IHN0cmluZyA9ICd2b2lkJztcblx0c3RhdGljIE5VTUJFUjogc3RyaW5nID0gJ251bWJlcic7XG5cdHN0YXRpYyBTVFJJTkc6IHN0cmluZyA9ICdzdHJpbmcnO1xuXHRzdGF0aWMgQk9PTEVBTjogc3RyaW5nID0gJ2Jvb2xlYW4nO1xuXHRzdGF0aWMgQVJSQVk6IHN0cmluZyA9ICdhcnJheSc7XG5cdHN0YXRpYyBOVUxMOiBzdHJpbmcgPSAnbnVsbCc7XG59XG5cbmV4cG9ydCBjbGFzcyBSdWxlcyB7XG5cdHN0YXRpYyBLRVlXT1JEUzogU2V0PHN0cmluZz4gPSBuZXcgU2V0KEdSQU1NQVIuS0VZV09SRFMpO1xuXHRzdGF0aWMgT1BFUkFUT1JTOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoR1JBTU1BUi5PUEVSQVRPUlMpO1xuXHRzdGF0aWMgUFVOQ1RVQVRJT05TOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoR1JBTU1BUi5QVU5DVFVBVElPTlMpO1xuXHRzdGF0aWMgRE9NX09QRVJBVE9SUzogU2V0PHN0cmluZz4gPSBuZXcgU2V0KEdSQU1NQVIuRE9NX09QRVJBVE9SUyk7XG5cdHN0YXRpYyBET01fUFVOQ1RVQVRJT05TOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoR1JBTU1BUi5ET01fUFVOQ1RVQVRJT05TKTtcblx0c3RhdGljIENPTU1FTlRfTElORTogc3RyaW5nID0gJy8vJztcblxuXHRpc0FscGhhKGNoYXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAvW2Etel9dL2kudGVzdChjaGFyKTtcblx0fVxuXG5cdGlzTnVtZXJpYyhjaGFyOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gL1swLTldLy50ZXN0KGNoYXIpO1xuXHR9XG5cblx0aXNBbHBoYU51bWVyaWMoY2hhcjogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaXNBbHBoYShjaGFyKSB8fCB0aGlzLmlzTnVtZXJpYyhjaGFyKTtcblx0fVxuXG5cdGlzV2hpdGVzcGFjZShjaGFyOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gL1xccy8udGVzdChjaGFyKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVG9rZW5UeXBlIHtcblx0c3RhdGljIENPTU1FTlQ6IHN0cmluZyA9ICdjb21tZW50Jztcblx0c3RhdGljIEFOTk9UQVRJT046IHN0cmluZyA9ICdhbm5vdGF0aW9uJztcblx0c3RhdGljIElERU5USUZJRVI6IHN0cmluZyA9ICdpZGVudGlmaWVyJztcblx0c3RhdGljIEtFWVdPUkQ6IHN0cmluZyA9ICdrZXl3b3JkJztcblx0c3RhdGljIFBVTkNUVUFUSU9OOiBzdHJpbmcgPSAncHVuY3R1YXRpb24nO1xuXHRzdGF0aWMgTlVNQkVSOiBzdHJpbmcgPSAnbnVtYmVyJztcblx0c3RhdGljIFNUUklORzogc3RyaW5nID0gJ3N0cmluZyc7XG5cdHN0YXRpYyBCT09MRUFOOiBzdHJpbmcgPSAnYm9vbGVhbic7XG5cdHN0YXRpYyBPUEVSQVRPUjogc3RyaW5nID0gJ29wZXJhdG9yJztcblx0c3RhdGljIFRFWFQ6IHN0cmluZyA9ICd0ZXh0Jztcblx0c3RhdGljIEVPRjogc3RyaW5nID0gJ2VvZic7XG59XG5cbmV4cG9ydCBjbGFzcyBUb2tlbiB7XG5cdHR5cGU6IHN0cmluZztcblx0dmFsdWU6IHN0cmluZztcblx0bGluZTogbnVtYmVyID0gMTtcblx0Y29sdW1uOiBudW1iZXIgPSAxO1xuXHRzdGFydDogbnVtYmVyO1xuXHRlbmQ6IG51bWJlcjtcblx0c291cmNlOiBTb3VyY2U7XG5cblx0Y29uc3RydWN0b3IodHlwZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlciwgc291cmNlOiBTb3VyY2UpIHtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0XHR0aGlzLnN0YXJ0ID0gc3RhcnQ7XG5cdFx0dGhpcy5lbmQgPSBlbmQ7XG5cdFx0dGhpcy5zb3VyY2UgPSBzb3VyY2U7XG5cdH1cblxuXHR3aXRoTGluZUFuZENvbHVtbihsaW5lOiBudW1iZXIsIGNvbHVtbjogbnVtYmVyKTogVG9rZW4ge1xuXHRcdHRoaXMubGluZSA9IGxpbmU7XG5cdFx0dGhpcy5jb2x1bW4gPSBjb2x1bW47XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtHUkFNTUFSLCBUWVBFX0VOVU19IGZyb20gXCIuL2dyYW1tYXJcIjtcbmltcG9ydCB7TW9kaWZpZXJzLCBTdXBlckNsYXNzfSBmcm9tIFwiLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge1NvdXJjZVNwYW59IGZyb20gXCIuL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmV4cG9ydCBjbGFzcyBBU1ROb2RlVHlwZSB7XG5cdHN0YXRpYyBQUk9HUkFNTSA9ICdwcm9ncmFtJztcblx0c3RhdGljIElOREVYID0gJ2luZGV4Jztcblx0c3RhdGljIElERU5USUZJRVIgPSAnaWRlbnRpZmllcic7XG5cdHN0YXRpYyBBTk5PVEFUSU9OID0gJ2Fubm90YXRpb24nO1xuXHRzdGF0aWMgUEFSQU1FVEVSID0gJ3BhcmFtZXRlcic7XG5cdHN0YXRpYyBJTVBPUlQgPSBHUkFNTUFSLklNUE9SVDtcblx0c3RhdGljIE5VTUJFUiA9IFRZUEVfRU5VTS5OVU1CRVI7XG5cdHN0YXRpYyBTVFJJTkcgPSBUWVBFX0VOVU0uU1RSSU5HO1xuXHRzdGF0aWMgQk9PTEVBTiA9IFRZUEVfRU5VTS5CT09MRUFOO1xuXHRzdGF0aWMgTlVMTCA9IFRZUEVfRU5VTS5OVUxMO1xuXHRzdGF0aWMgTkVXID0gR1JBTU1BUi5ORVc7XG5cdHN0YXRpYyBDTEFTUyA9IEdSQU1NQVIuQ0xBU1M7XG5cdHN0YXRpYyBJTlRFUkZBQ0UgPSBHUkFNTUFSLklOVEVSRkFDRTtcblx0c3RhdGljIENPTlNUUlVDVE9SID0gR1JBTU1BUi5DT05TVFJVQ1RPUjtcblx0c3RhdGljIFRISVMgPSBHUkFNTUFSLlRISVM7XG5cdHN0YXRpYyBSRVRVUk4gPSBHUkFNTUFSLlJFVFVSTjtcblx0c3RhdGljIFZET00gPSAndmRvbV9kZWNsYXJhdGlvbic7XG5cdHN0YXRpYyBWRE9NX1RFWFQgPSAndmRvbV90ZXh0X2RlY2xhcmF0aW9uJztcblx0c3RhdGljIFVOQVJZID0gJ3VuYXJ5X2V4cHJlc3Npb24nO1xuXHRzdGF0aWMgTEFNQkRBID0gJ2xhbWJkYV9leHByZXNzaW9uJztcblx0c3RhdGljIEFSUkFZID0gJ2FycmF5X2RlY2xhcmF0aW9uJztcblx0c3RhdGljIFRZUEUgPSAndHlwZV9kZWNsYXJhdGlvbic7XG5cdHN0YXRpYyBGSUVMRCA9ICdmaWVsZF9kZWNsYXJhdGlvbic7XG5cdHN0YXRpYyBNRU1CRVIgPSAnbWVtYmVyX2V4cHJlc3Npb24nO1xuXHRzdGF0aWMgTUVUSE9EID0gJ21ldGhvZF9kZWNsYXJhdGlvbic7XG5cdHN0YXRpYyBDQUxMID0gJ2NhbGxfZXhwcmVzc2lvbic7XG5cdHN0YXRpYyBWQVJJQUJMRSA9ICd2YXJpYWJsZV9kZWNsYXJhdGlvbic7XG5cdHN0YXRpYyBFWFBSRVNTSU9OID0gJ2V4cHJlc3Npb25fc3RhdGVtZW50Jztcblx0c3RhdGljIEJJTkFSWSA9ICdiaW5hcnlfZXhwcmVzc2lvbic7XG5cdHN0YXRpYyBBU1NJR05NRU5UID0gJ2Fzc2lnbm1lbnRfZXhwcmVzc2lvbic7XG5cdHN0YXRpYyBJRiA9ICdpZl9zdGF0ZW1lbnQnO1xuXHRzdGF0aWMgVEhFTiA9ICd0aGVuX3N0YXRlbWVudCc7XG5cdHN0YXRpYyBFTFNFID0gJ2Vsc2Vfc3RhdGVtZW50Jztcblx0c3RhdGljIE1BVENIID0gJ21hdGNoX3N0YXRlbWVudCc7XG5cdHN0YXRpYyBNQVRDSF9DQVNFID0gJ21hdGNoX2Nhc2Vfc3RhdGVtZW50Jztcblx0c3RhdGljIEZPUkVBQ0ggPSAnZm9yZWFjaF9zdGF0ZW1lbnQnO1xufVxuXG5leHBvcnQgY2xhc3MgQVNUTm9kZSB7XG5cdGlzRXhwcmVzc2lvbjogYm9vbGVhbiA9IGZhbHNlO1xuXHRuYW1lOiBzdHJpbmcgPSAnJztcblxuXHRzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGw7XG5cdHR5cGU6IHN0cmluZztcblx0dmFsdWU6IGFueSB8IG51bGwgPSBudWxsO1xuXHRjaGlsZHJlbjogQVNUTm9kZVtdO1xuXG5cdGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZywgY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdKSB7XG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHR0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVENhbGxOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGNhbGxlZTogQVNUTm9kZTtcblx0YXJndW1lbnRzOiBBU1ROb2RlW107XG5cblx0Y29uc3RydWN0b3IoY2FsbGVlOiBBU1ROb2RlLCBhcmdzOiBBU1ROb2RlW10gPSBbXSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkNBTEwpO1xuXG5cdFx0dGhpcy5jYWxsZWUgPSBjYWxsZWU7XG5cdFx0dGhpcy5hcmd1bWVudHMgPSBhcmdzO1xuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUTmV3Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRhcmd1bWVudHM6IEFTVE5vZGVbXTtcblx0dHlwZUFubm90YXRpb246IEFTVFR5cGVOb2RlO1xuXG5cdGNvbnN0cnVjdG9yKGFyZ3M6IEFTVE5vZGVbXSwgdHlwZUFubm90YXRpb246IEFTVFR5cGVOb2RlKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuTkVXKTtcblxuXHRcdHRoaXMuYXJndW1lbnRzID0gYXJncztcblx0XHR0aGlzLnR5cGVBbm5vdGF0aW9uID0gdHlwZUFubm90YXRpb247XG5cdFx0dGhpcy5uYW1lID0gdHlwZUFubm90YXRpb24ubmFtZTtcblx0XHR0aGlzLmlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEJpbmFyeU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0bGVmdDogQVNUTm9kZTtcblx0cmlnaHQ6IEFTVE5vZGU7XG5cdG9wZXJhdG9yOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IobGVmdDogQVNUTm9kZSwgcmlnaHQ6IEFTVE5vZGUsIG9wZXJhdG9yOiBzdHJpbmcpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5CSU5BUlkpO1xuXG5cdFx0dGhpcy5sZWZ0ID0gbGVmdDtcblx0XHR0aGlzLnJpZ2h0ID0gcmlnaHQ7XG5cdFx0dGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUQXNzaWdubWVudE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0bGVmdDogQVNUTm9kZTtcblx0cmlnaHQ6IEFTVE5vZGU7XG5cblx0Y29uc3RydWN0b3IobGVmdDogQVNUTm9kZSwgcmlnaHQ6IEFTVE5vZGUpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5BU1NJR05NRU5UKTtcblxuXHRcdHRoaXMubGVmdCA9IGxlZnQ7XG5cdFx0dGhpcy5yaWdodCA9IHJpZ2h0O1xuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUTWVtYmVyTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRvYmplY3Q6IEFTVE5vZGU7XG5cdHByb3BlcnR5OiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3Iob2JqZWN0OiBBU1ROb2RlLCBwcm9wZXJ0eTogc3RyaW5nKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuTUVNQkVSKTtcblxuXHRcdHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuXHRcdHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcblx0XHR0aGlzLmlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFVuYXJ5Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRvcGVyYXRvcjogc3RyaW5nO1xuXHRhcmd1bWVudDogQVNUTm9kZSB8IEFTVFVuYXJ5Tm9kZTtcblxuXHRjb25zdHJ1Y3RvcihvcGVyYXRvcjogc3RyaW5nLCBhcmd1bWVudDogQVNUTm9kZSB8IEFTVFVuYXJ5Tm9kZSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLlVOQVJZKTtcblxuXHRcdHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcblx0XHR0aGlzLmFyZ3VtZW50ID0gYXJndW1lbnQ7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RJbmRleE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0b2JqZWN0OiBBU1ROb2RlO1xuXHRpbmRleDogQVNUTm9kZTtcblxuXHRjb25zdHJ1Y3RvcihvYmplY3Q6IEFTVE5vZGUsIGluZGV4OiBBU1ROb2RlKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuSU5ERVgpO1xuXG5cdFx0dGhpcy5vYmplY3QgPSBvYmplY3Q7XG5cdFx0dGhpcy5pbmRleCA9IGluZGV4O1xuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUQXJyYXlOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGVsZW1lbnRzOiBBU1ROb2RlW10gPSBbXTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5BUlJBWSk7XG5cblx0XHR0aGlzLmlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVExhbWJkYU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0cGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdO1xuXHRyZXR1cm5UeXBlOiBBU1RUeXBlTm9kZTtcblxuXHRjb25zdHJ1Y3RvcihwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sIHJldHVyblR5cGU6IEFTVFR5cGVOb2RlLCBjaGlsZHJlbjogQVNUTm9kZVtdKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuTEFNQkRBLCBjaGlsZHJlbik7XG5cblx0XHR0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuXHRcdHRoaXMucmV0dXJuVHlwZSA9IHJldHVyblR5cGU7XG5cblx0XHR0aGlzLmlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEZpZWxkTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRtb2RpZmllcnM6IE1vZGlmaWVycztcblx0ZmllbGRUeXBlOiBBU1RUeXBlTm9kZSB8IG51bGw7XG5cdGluaXQ6IEFTVE5vZGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIG1vZGlmaWVyczogTW9kaWZpZXJzLCBmaWVsZFR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbCwgaW5pdDogQVNUTm9kZSB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuRklFTEQpO1xuXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcblx0XHR0aGlzLmZpZWxkVHlwZSA9IGZpZWxkVHlwZTtcblx0XHR0aGlzLmluaXQgPSBpbml0O1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RWYXJpYWJsZU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0dHlwZUFubm90YXRpb246IEFTVFR5cGVOb2RlIHwgbnVsbCA9IG51bGw7XG5cdGluaXQ6IEFTVE5vZGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGVBbm5vdGF0aW9uOiBBU1RUeXBlTm9kZSB8IG51bGwgPSBudWxsLCBpbml0OiBBU1ROb2RlIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5WQVJJQUJMRSk7XG5cblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMudHlwZUFubm90YXRpb24gPSB0eXBlQW5ub3RhdGlvbjtcblx0XHR0aGlzLmluaXQgPSBpbml0O1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRleHByOiBBU1ROb2RlO1xuXG5cdGNvbnN0cnVjdG9yKGV4cHI6IEFTVE5vZGUpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5FWFBSRVNTSU9OKTtcblxuXHRcdHRoaXMuZXhwciA9IGV4cHI7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFJldHVybk5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0YXJndW1lbnQ6IEFTVE5vZGUgfCBBU1RFeHByZXNzaW9uTm9kZSB8IG51bGw7XG5cblx0Y29uc3RydWN0b3IoYXJndW1lbnQ6IEFTVE5vZGUgfCBBU1RFeHByZXNzaW9uTm9kZSB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuUkVUVVJOKTtcblxuXHRcdHRoaXMuYXJndW1lbnQgPSBhcmd1bWVudDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUQ2xhc3NOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGFubm90YXRpb25zOiBBU1RBbm5vdGF0aW9uTm9kZVtdO1xuXHRtb2RpZmllcnM6IE1vZGlmaWVycztcblx0dHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdO1xuXHRzdXBlckNsYXNzOiBTdXBlckNsYXNzIHwgbnVsbDtcblx0aW1wbGVtZW50c0ludGVyZmFjZXM6IEFTVFR5cGVOb2RlW107XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0bmFtZTogc3RyaW5nLFxuXHRcdGFubm90YXRpb25zOiBBU1RBbm5vdGF0aW9uTm9kZVtdLFxuXHRcdG1vZGlmaWVyczogTW9kaWZpZXJzLFxuXHRcdHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXSxcblx0XHRpbXBsZW1lbnRzSW50ZXJmYWNlczogQVNUVHlwZU5vZGVbXSxcblx0XHRzdXBlckNsYXNzOiBTdXBlckNsYXNzIHwgbnVsbCA9IG51bGwsXG5cdFx0Y2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdXG5cdCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkNMQVNTLCBjaGlsZHJlbik7XG5cblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuYW5ub3RhdGlvbnMgPSBhbm5vdGF0aW9ucztcblx0XHR0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcblx0XHR0aGlzLnR5cGVQYXJhbWV0ZXJzID0gdHlwZVBhcmFtZXRlcnM7XG5cdFx0dGhpcy5zdXBlckNsYXNzID0gc3VwZXJDbGFzcztcblx0XHR0aGlzLmltcGxlbWVudHNJbnRlcmZhY2VzID0gaW1wbGVtZW50c0ludGVyZmFjZXM7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEludGVyZmFjZU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0YW5ub3RhdGlvbnM6IEFTVEFubm90YXRpb25Ob2RlW107XG5cdG1vZGlmaWVyczogTW9kaWZpZXJzO1xuXHR0eXBlUGFyYW1ldGVyczogc3RyaW5nW107XG5cdGV4dGVuZHNJbnRlcmZhY2VzOiBzdHJpbmdbXTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0YW5ub3RhdGlvbnM6IEFTVEFubm90YXRpb25Ob2RlW10sXG5cdFx0bW9kaWZpZXJzOiBNb2RpZmllcnMsXG5cdFx0dHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdLFxuXHRcdGV4dGVuZHNJbnRlcmZhY2VzOiBzdHJpbmdbXSxcblx0XHRjaGlsZHJlbjogQVNUTm9kZVtdID0gW11cblx0KSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuSU5URVJGQUNFLCBjaGlsZHJlbik7XG5cblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuYW5ub3RhdGlvbnMgPSBhbm5vdGF0aW9ucztcblx0XHR0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcblx0XHR0aGlzLnR5cGVQYXJhbWV0ZXJzID0gdHlwZVBhcmFtZXRlcnM7XG5cdFx0dGhpcy5leHRlbmRzSW50ZXJmYWNlcyA9IGV4dGVuZHNJbnRlcmZhY2VzO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RBbm5vdGF0aW9uTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRwcm9wZXJ0aWVzOiBNYXA8c3RyaW5nLCBBU1ROb2RlPiA9IG5ldyBNYXAoKTtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5BTk5PVEFUSU9OKTtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RQYXJhbWV0ZXJOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdHR5cGVBbm5vdGF0aW9uOiBBU1RUeXBlTm9kZSB8IG51bGw7XG5cdGRlZmF1bHRWYWx1ZTogQVNUTm9kZSB8IG51bGw7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGUgfCBudWxsLCBkZWZhdWx0VmFsdWU6IEFTVE5vZGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLlBBUkFNRVRFUik7XG5cdFx0dGhpcy50eXBlQW5ub3RhdGlvbiA9IHR5cGVBbm5vdGF0aW9uO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5kZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVE1ldGhvZE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0YW5ub3RhdGlvbnM6IEFTVEFubm90YXRpb25Ob2RlW107XG5cdG1vZGlmaWVyczogTW9kaWZpZXJzO1xuXHR0eXBlUGFyYW1ldGVyczogc3RyaW5nW107XG5cdHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXTtcblx0cmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsO1xuXG5cblx0Y29uc3RydWN0b3IoXG5cdFx0bmFtZTogc3RyaW5nLFxuXHRcdHR5cGU6IHN0cmluZyxcblx0XHRhbm5vdGF0aW9uczogQVNUQW5ub3RhdGlvbk5vZGVbXSxcblx0XHRtb2RpZmllcnM6IE1vZGlmaWVycyxcblx0XHR0eXBlUGFyYW1ldGVyczogc3RyaW5nW10sXG5cdFx0cGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdLFxuXHRcdHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbCA9IG51bGwsXG5cdFx0Y2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdLFxuXHQpIHtcblx0XHRzdXBlcih0eXBlLCBjaGlsZHJlbik7XG5cblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuYW5ub3RhdGlvbnMgPSBhbm5vdGF0aW9ucztcblx0XHR0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcblx0XHR0aGlzLnR5cGVQYXJhbWV0ZXJzID0gdHlwZVBhcmFtZXRlcnM7XG5cdFx0dGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcblx0XHR0aGlzLnJldHVyblR5cGUgPSByZXR1cm5UeXBlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RJbXBvcnROb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdG5hbWVzOiBzdHJpbmdbXTtcblx0ZnJvbTogc3RyaW5nIHwgbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lczogc3RyaW5nW10sIGZyb206IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuSU1QT1JUKTtcblxuXHRcdHRoaXMubmFtZXMgPSBuYW1lcztcblx0XHR0aGlzLmZyb20gPSBmcm9tO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RUaGVuTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRjb25zdHJ1Y3RvcihjaGlsZHJlbjogQVNUTm9kZVtdID0gW10pIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5USEVOLCBjaGlsZHJlbik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVElmTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRjb25kaXRpb246IEFTVE5vZGU7XG5cdHRoZW46IEFTVFRoZW5Ob2RlO1xuXHRlbHNlOiBBU1RJZk5vZGUgfCBBU1RFbHNlTm9kZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKGNvbmRpdGlvbjogQVNUTm9kZSwgdGhlbjogQVNUVGhlbk5vZGUpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5JRik7XG5cblx0XHR0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcblx0XHR0aGlzLnRoZW4gPSB0aGVuO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RFbHNlTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRjb25zdHJ1Y3RvcihjaGlsZHJlbjogQVNUTm9kZVtdID0gW10pIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5FTFNFLCBjaGlsZHJlbik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVE1hdGNoTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRleHByZXNzaW9uOiBBU1ROb2RlO1xuXHRjYXNlczogQVNUTWF0Y2hDYXNlTm9kZVtdO1xuXHRkZWZhdWx0Q2FzZTogQVNUTWF0Y2hDYXNlTm9kZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKGV4cHJlc3Npb246IEFTVE5vZGUsIGNhc2VzOiBBU1RNYXRjaENhc2VOb2RlW10sIGRlZmF1bHRDYXNlOiBBU1RNYXRjaENhc2VOb2RlIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5NQVRDSCk7XG5cblx0XHR0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuXHRcdHRoaXMuY2FzZXMgPSBjYXNlcztcblx0XHR0aGlzLmRlZmF1bHRDYXNlID0gZGVmYXVsdENhc2U7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVE1hdGNoQ2FzZU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0dGVzdDogQVNUTm9kZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLk1BVENIX0NBU0UsIGNoaWxkcmVuKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNURm9yZWFjaE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0aXRlcmF0b3I6IHN0cmluZztcblx0aXRlcmFibGU6IEFTVE5vZGU7XG5cdGJvZHk6IEFTVE5vZGVbXTtcblxuXHRjb25zdHJ1Y3RvcihpdGVyYXRvcjogc3RyaW5nLCBpdGVyYWJsZTogQVNUTm9kZSwgYm9keTogQVNUTm9kZVtdID0gW10pIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5GT1JFQUNIKTtcblxuXHRcdHRoaXMuaXRlcmF0b3IgPSBpdGVyYXRvcjtcblx0XHR0aGlzLml0ZXJhYmxlID0gaXRlcmFibGU7XG5cdFx0dGhpcy5ib2R5ID0gYm9keTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUVHlwZU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0c3RhdGljIEtJTkRfU0lNUExFID0gJ3NpbXBsZSc7XG5cdHN0YXRpYyBLSU5EX0dFTkVSSUMgPSAnZ2VuZXJpYyc7XG5cdHN0YXRpYyBLSU5EX0xBTUJEQSA9ICdsYW1iZGEnO1xuXG5cdGtpbmQ6IHN0cmluZztcblx0dHlwZUFyZ3VtZW50czogQVNUVHlwZU5vZGVbXSA9IFtdO1xuXHRwYXJhbWV0ZXJUeXBlczogQVNUVHlwZU5vZGVbXSA9IFtdO1xuXHRyZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGwgPSBudWxsO1xuXHRudWxsYWJsZTogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihraW5kOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgbnVsbGFibGU6IGJvb2xlYW4gPSBmYWxzZSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLlRZUEUpO1xuXG5cdFx0dGhpcy5raW5kID0ga2luZDtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMubnVsbGFibGUgPSBudWxsYWJsZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUVkRvbU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0cmVhZG9ubHkgdGFnOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHByb3BzOiBNYXA8c3RyaW5nLCBBU1ROb2RlPiA9IG5ldyBNYXAoKTtcblxuXHRjb25zdHJ1Y3Rvcih0YWc6IHN0cmluZywgcHJvcHM6IE1hcDxzdHJpbmcsIEFTVE5vZGU+LCBjaGlsZHJlbjogQVNUTm9kZVtdID0gW10pIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5WRE9NLCBjaGlsZHJlbik7XG5cdFx0dGhpcy50YWcgPSB0YWc7XG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RWRG9tVGV4dE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0Y29uc3RydWN0b3IodmFsdWU6IHN0cmluZykge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLlZET01fVEVYVCk7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7R1JBTU1BUiwgUnVsZXMsIFRva2VuLCBUb2tlblR5cGV9IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5pbXBvcnQge3Rocm93VG9rZW5FcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuaW1wb3J0IHR5cGUge1NvdXJjZX0gZnJvbSBcIi4uL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmV4cG9ydCBjbGFzcyBUb2tlbml6ZXIge1xuXHRwcml2YXRlIHJlYWRvbmx5IHJ1bGVzID0gbmV3IFJ1bGVzKCk7XG5cdHByaXZhdGUgcmVhZG9ubHkgc291cmNlOiBTb3VyY2U7XG5cblx0Y29uc3RydWN0b3Ioc291cmNlOiBTb3VyY2UpIHtcblx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0fVxuXG5cdGdldFRva2VuU3RyZWFtKCk6IFRva2VuU3RyZWFtIHtcblx0XHRyZXR1cm4gbmV3IFRva2VuU3RyZWFtKHRoaXMudG9rZW5pemUoKSk7XG5cdH1cblxuXHR0b2tlbml6ZSgpOiBUb2tlbltdIHtcblx0XHRjb25zdCB0b2tlbnM6IFRva2VuW10gPSBbXTtcblxuXHRcdGxldCBpOiBudW1iZXIgPSAwO1xuXHRcdGxldCBsaW5lOiBudW1iZXIgPSAxO1xuXHRcdGxldCBjb2x1bW46IG51bWJlciA9IDA7XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nTGluZUNvbW1lbnQgPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBsaW5lQ29tbWVudDogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaExpbmVDb21tZW50QXQoaSk7XG5cdFx0XHRpZiAobGluZUNvbW1lbnQpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2gobGluZUNvbW1lbnQud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBsaW5lQ29tbWVudC5lbmQgKyAxO1xuXG5cdFx0XHRcdGxpbmUrKztcblx0XHRcdFx0Y29sdW1uID0gMDtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ1N0cmluZyA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IHN0cmluZzogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaFN0cmluZ0F0KGkpO1xuXHRcdFx0aWYgKHN0cmluZykge1xuXHRcdFx0XHR0b2tlbnMucHVzaChzdHJpbmcud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBzdHJpbmcuZW5kICsgMTtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChzdHJpbmcpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nUHVuY3R1YXRpb24gPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBwdW5jdHVhdGlvbjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaFB1bmN0dWF0aW9uQXQoaSk7XG5cdFx0XHRpZiAocHVuY3R1YXRpb24pIHtcblx0XHRcdFx0dG9rZW5zLnB1c2gocHVuY3R1YXRpb24ud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBwdW5jdHVhdGlvbi5lbmQgKyAxO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KHB1bmN0dWF0aW9uKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ0lkZW50aWZpZXIgPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBpZGVudGlmaWVyOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoSWRlbnRpZmllckF0KGkpO1xuXHRcdFx0aWYgKGlkZW50aWZpZXIpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2goaWRlbnRpZmllci53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IGlkZW50aWZpZXIuZW5kO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KGlkZW50aWZpZXIpO1xuXG5cdFx0XHRcdGlmIChpZGVudGlmaWVyLnZhbHVlID09PSBHUkFNTUFSLlZET00pIHtcblx0XHRcdFx0XHRjb25zdCB0b2tlbml6ZWRWRG9tID0gdGhpcy50b2tlbml6ZVZEb20oaSwgbGluZSwgY29sdW1uKTtcblx0XHRcdFx0XHR0b2tlbnMucHVzaCguLi50b2tlbml6ZWRWRG9tLnRva2Vucyk7XG5cdFx0XHRcdFx0aSA9IHRva2VuaXplZFZEb20ubmV3SW5kZXg7XG5cdFx0XHRcdFx0bGluZSA9IHRva2VuaXplZFZEb20ubGluZTtcblx0XHRcdFx0XHRjb2x1bW4gPSB0b2tlbml6ZWRWRG9tLmNvbHVtbjtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nTnVtYmVyID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgbnVtYmVyOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoTnVtYmVyQXQoaSk7XG5cdFx0XHRpZiAobnVtYmVyKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKG51bWJlci53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IG51bWJlci5lbmQ7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQobnVtYmVyKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ09wZXJhdG9yID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3Qgb3BlcmF0b3I6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hPcGVyYXRvckF0KGkpO1xuXHRcdFx0aWYgKG9wZXJhdG9yKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKG9wZXJhdG9yLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gb3BlcmF0b3IuZW5kICsgMTtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChvcGVyYXRvcik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdBbm5vdGF0aW9uID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgYW5ub3RhdGlvbjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaEFubm90YXRpb25BdChpKTtcblx0XHRcdGlmIChhbm5vdGF0aW9uKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKGFubm90YXRpb24ud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBhbm5vdGF0aW9uLmVuZCArIDE7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQoYW5ub3RhdGlvbik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0d2hpbGUgKGkgPCB0aGlzLnNvdXJjZS5sZW5ndGgpIHtcblx0XHRcdGlmICh0aGlzLnNvdXJjZS5jaGFyQXQoaSkgPT09ICdcXG4nKSB7XG5cdFx0XHRcdGxpbmUrKztcblx0XHRcdFx0Y29sdW1uID0gMDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbHVtbisrO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5tYXRjaFdoaXRlc3BhY2VBdChpKSkge1xuXHRcdFx0XHRpKys7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaWZJc0NvbnN1bWluZ0xpbmVDb21tZW50KClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ1B1bmN0dWF0aW9uKClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ1N0cmluZygpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdOdW1iZXIoKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nSWRlbnRpZmllcigpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdPcGVyYXRvcigpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdBbm5vdGF0aW9uKCkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHRocm93VG9rZW5FcnJvcignVW5leHBlY3RlZCBjaGFyYWN0ZXI6ICcgKyB0aGlzLnNvdXJjZS5jaGFyQXQoaSkpO1xuXHRcdH1cblxuXHRcdHRva2Vucy5wdXNoKFxuXHRcdFx0dGhpcy5lb2YoaSlcblx0XHRcdCAgICAud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKVxuXHRcdCk7XG5cblx0XHRyZXR1cm4gdG9rZW5zO1xuXHR9XG5cblx0ZW9mKGVuZDogbnVtYmVyKTogVG9rZW4ge1xuXHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLkVPRiwgJycsIGVuZCwgZW5kLCB0aGlzLnNvdXJjZSlcblx0fVxuXG5cdGNvbHVtT2Zmc2V0KHRva2VuOiBUb2tlbik6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRva2VuLnZhbHVlLmxlbmd0aCAtIDE7XG5cdH1cblxuXHRtYXRjaFdoaXRlc3BhY2VBdChpOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5ydWxlcy5pc1doaXRlc3BhY2UodGhpcy5zb3VyY2UuY2hhckF0KGkpKTtcblx0fVxuXG5cdG1hdGNoTnVtYmVyQXQoaTogbnVtYmVyKTogVG9rZW4gfCBudWxsIHtcblx0XHRpZiAoIXRoaXMucnVsZXMuaXNOdW1lcmljKHRoaXMuc291cmNlLmNoYXJBdChpKSkpIHtcblx0XHRcdHJldHVybiBudWxsXG5cdFx0fVxuXHRcdGxldCBzdGFydCA9IGk7XG5cdFx0d2hpbGUgKHRoaXMucnVsZXMuaXNOdW1lcmljKHRoaXMuc291cmNlLmNoYXJBdChpKSkpIGkrKztcblx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5OVU1CRVIsIHRoaXMuc291cmNlLnNsaWNlKHN0YXJ0LCBpKSwgc3RhcnQsIGksIHRoaXMuc291cmNlKTtcblx0fVxuXG5cdG1hdGNoU3RyaW5nQXQoaTogbnVtYmVyKTogVG9rZW4gfCBudWxsIHtcblx0XHRpZiAodGhpcy5zb3VyY2UuY2hhckF0KGkpICE9PSAnXCInKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0bGV0IHN0YXJ0ID0gKytpO1xuXHRcdHdoaWxlICh0aGlzLnNvdXJjZS5jaGFyQXQoaSkgIT09ICdcIicpIGkrKztcblx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5TVFJJTkcsIHRoaXMuc291cmNlLnNsaWNlKHN0YXJ0LCBpKSwgc3RhcnQsIGksIHRoaXMuc291cmNlKTtcblx0fVxuXG5cdG1hdGNoSWRlbnRpZmllckF0KGk6IG51bWJlcik6IFRva2VuIHwgbnVsbCB7XG5cdFx0aWYgKCF0aGlzLnJ1bGVzLmlzQWxwaGEodGhpcy5zb3VyY2UuY2hhckF0KGkpKSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGxldCBzdGFydCA9IGk7XG5cdFx0bGV0IGogPSBpO1xuXHRcdHdoaWxlICh0aGlzLnJ1bGVzLmlzQWxwaGFOdW1lcmljKHRoaXMuc291cmNlLmNoYXJBdChqKSkpIGorKztcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuc291cmNlLnNsaWNlKHN0YXJ0LCBqKTtcblxuXHRcdGxldCB0eXBlID0gVG9rZW5UeXBlLklERU5USUZJRVI7XG5cdFx0aWYgKFtHUkFNTUFSLlRSVUUsIEdSQU1NQVIuRkFMU0VdLmluY2x1ZGVzKHZhbHVlKSkge1xuXHRcdFx0dHlwZSA9IFRva2VuVHlwZS5CT09MRUFOO1xuXHRcdH0gZWxzZSBpZiAoUnVsZXMuS0VZV09SRFMuaGFzKHZhbHVlKSkge1xuXHRcdFx0dHlwZSA9IFRva2VuVHlwZS5LRVlXT1JEO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgVG9rZW4odHlwZSwgdmFsdWUsIHN0YXJ0LCBqLCB0aGlzLnNvdXJjZSk7XG5cdH1cblxuXHRtYXRjaE9wZXJhdG9yQXQoaTogbnVtYmVyLCBvcGVyYXRvcnM6IFNldDxzdHJpbmc+ID0gUnVsZXMuT1BFUkFUT1JTKTogVG9rZW4gfCBudWxsIHtcblx0XHRjb25zdCBjaGFycyA9IHRoaXMuc291cmNlLmNoYXJBdChpKSArIHRoaXMuc291cmNlLmNoYXJBdChpICsgMSk7XG5cdFx0aWYgKG9wZXJhdG9ycy5oYXMoY2hhcnMpKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5PUEVSQVRPUiwgY2hhcnMsIGksIGkgKyAxLCB0aGlzLnNvdXJjZSk7XG5cdFx0fVxuXG5cdFx0aWYgKG9wZXJhdG9ycy5oYXModGhpcy5zb3VyY2UuY2hhckF0KGkpKSkge1xuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuT1BFUkFUT1IsIHRoaXMuc291cmNlLmNoYXJBdChpKSwgaSwgaSwgdGhpcy5zb3VyY2UpO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0bWF0Y2hQdW5jdHVhdGlvbkF0KGk6IG51bWJlciwgcHVuY3R1YXRpb25zID0gUnVsZXMuUFVOQ1RVQVRJT05TKTogVG9rZW4gfCBudWxsIHtcblx0XHRjb25zdCBjaGFycyA9IHRoaXMuc291cmNlLmNoYXJBdChpKSArIHRoaXMuc291cmNlLmNoYXJBdChpICsgMSk7XG5cdFx0aWYgKHB1bmN0dWF0aW9ucy5oYXMoY2hhcnMpKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5QVU5DVFVBVElPTiwgY2hhcnMsIGksIGkgKyAxLCB0aGlzLnNvdXJjZSk7XG5cdFx0fVxuXG5cdFx0aWYgKCFwdW5jdHVhdGlvbnMuaGFzKHRoaXMuc291cmNlLmNoYXJBdChpKSkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5QVU5DVFVBVElPTiwgdGhpcy5zb3VyY2UuY2hhckF0KGkpLCBpLCBpLCB0aGlzLnNvdXJjZSk7XG5cdH1cblxuXHRtYXRjaExpbmVDb21tZW50QXQoaTogbnVtYmVyKTogVG9rZW4gfCBudWxsIHtcblx0XHRpZiAoIXRoaXMuc291cmNlLnN0YXJ0c1dpdGgoUnVsZXMuQ09NTUVOVF9MSU5FLCBpKSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGxldCBqID0gaSArIFJ1bGVzLkNPTU1FTlRfTElORS5sZW5ndGg7XG5cdFx0d2hpbGUgKGogPCB0aGlzLnNvdXJjZS5sZW5ndGggJiYgdGhpcy5zb3VyY2UuY2hhckF0KGopICE9PSAnXFxuJykgaisrO1xuXHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLkNPTU1FTlQsIHRoaXMuc291cmNlLnNsaWNlKGksIGopLCBpLCBqLCB0aGlzLnNvdXJjZSk7XG5cdH1cblxuXHRtYXRjaEFubm90YXRpb25BdChpOiBudW1iZXIpOiBUb2tlbiB8IG51bGwge1xuXHRcdGlmICh0aGlzLnNvdXJjZS5jaGFyQXQoaSkgIT09ICdAJykge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0bGV0IHN0YXJ0ID0gaSArIDE7XG5cdFx0bGV0IGogPSBpICsgMTtcblx0XHR3aGlsZSAodGhpcy5ydWxlcy5pc0FscGhhKHRoaXMuc291cmNlLmNoYXJBdChqKSkpIGorKztcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuc291cmNlLnNsaWNlKHN0YXJ0LCBqKTtcblxuXHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLkFOTk9UQVRJT04sIHZhbHVlLCBzdGFydCwgaiwgdGhpcy5zb3VyY2UpO1xuXHR9XG5cblx0cHJpdmF0ZSB0b2tlbml6ZVZEb20oc3RhcnRJbmRleDogbnVtYmVyLCBsaW5lOiBudW1iZXIsIGNvbHVtbjogbnVtYmVyKToge1xuXHRcdHRva2VuczogVG9rZW5bXSxcblx0XHRuZXdJbmRleDogbnVtYmVyLFxuXHRcdGxpbmU6IG51bWJlcixcblx0XHRjb2x1bW46IG51bWJlclxuXHR9IHtcblx0XHRjb25zdCB0b2tlbnM6IFRva2VuW10gPSBbXTtcblx0XHRsZXQgaTogbnVtYmVyID0gc3RhcnRJbmRleDtcblx0XHRsZXQgdGV4dEJ1ZmZlcjogc3RyaW5nID0gJyc7XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nU3RyaW5nID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3Qgc3RyaW5nOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoU3RyaW5nQXQoaSk7XG5cdFx0XHRpZiAoc3RyaW5nKSB7XG5cdFx0XHRcdGZsdXNoVGV4dEJ1ZmZlcigpO1xuXHRcdFx0XHR0b2tlbnMucHVzaChzdHJpbmcud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBzdHJpbmcuZW5kICsgMTtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChzdHJpbmcpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nUHVuY3R1YXRpb24gPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBwdW5jdHVhdGlvbjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaFB1bmN0dWF0aW9uQXQoaSwgUnVsZXMuRE9NX1BVTkNUVUFUSU9OUyk7XG5cdFx0XHRpZiAocHVuY3R1YXRpb24pIHtcblx0XHRcdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cdFx0XHRcdHRva2Vucy5wdXNoKHB1bmN0dWF0aW9uLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gcHVuY3R1YXRpb24uZW5kICsgMTtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChwdW5jdHVhdGlvbik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdJZGVudGlmaWVyID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgaWRlbnRpZmllcjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaElkZW50aWZpZXJBdChpKTtcblx0XHRcdGlmIChpZGVudGlmaWVyKSB7XG5cdFx0XHRcdGZsdXNoVGV4dEJ1ZmZlcigpO1xuXHRcdFx0XHR0b2tlbnMucHVzaChpZGVudGlmaWVyLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gaWRlbnRpZmllci5lbmQ7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQoaWRlbnRpZmllcik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdOdW1iZXIgPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBudW1iZXI6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hOdW1iZXJBdChpKTtcblx0XHRcdGlmIChudW1iZXIpIHtcblx0XHRcdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cblx0XHRcdFx0dG9rZW5zLnB1c2gobnVtYmVyLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gbnVtYmVyLmVuZDtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChudW1iZXIpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nT3BlcmF0b3IgPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBvcGVyYXRvcjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaE9wZXJhdG9yQXQoaSwgUnVsZXMuRE9NX09QRVJBVE9SUyk7XG5cdFx0XHRpZiAob3BlcmF0b3IpIHtcblx0XHRcdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cblx0XHRcdFx0dG9rZW5zLnB1c2gob3BlcmF0b3Iud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBvcGVyYXRvci5lbmQgKyAxO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KG9wZXJhdG9yKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZmx1c2hUZXh0QnVmZmVyID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKHRleHRCdWZmZXIubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR0b2tlbnMucHVzaChcblx0XHRcdFx0XHRuZXcgVG9rZW4oXG5cdFx0XHRcdFx0XHRUb2tlblR5cGUuVEVYVCxcblx0XHRcdFx0XHRcdHRleHRCdWZmZXIsXG5cdFx0XHRcdFx0XHRpIC0gdGV4dEJ1ZmZlci5sZW5ndGgsXG5cdFx0XHRcdFx0XHRpLFxuXHRcdFx0XHRcdFx0dGhpcy5zb3VyY2Vcblx0XHRcdFx0XHQpLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbiAtIHRleHRCdWZmZXIubGVuZ3RoKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHR0ZXh0QnVmZmVyID0gJyc7XG5cdFx0XHR9XG5cdFx0fTtcblxuXG5cdFx0bGV0IGlnbm9yZVdoaXRlc3BhY2UgPSBmYWxzZTtcblx0XHR3aGlsZSAoaSA8IHRoaXMuc291cmNlLmxlbmd0aCkge1xuXHRcdFx0Y29uc3QgY2hhcjogc3RyaW5nID0gdGhpcy5zb3VyY2UuY2hhckF0KGkpO1xuXG5cdFx0XHRpZiAoY2hhciA9PT0gR1JBTU1BUi5TRU1JQ09MT04pIHtcblx0XHRcdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cblx0XHRcdFx0dG9rZW5zLnB1c2gobmV3IFRva2VuKFRva2VuVHlwZS5QVU5DVFVBVElPTiwgY2hhciwgaSwgaSwgdGhpcy5zb3VyY2UpXG5cdFx0XHRcdFx0ICAgICAgICAgICAgLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXG5cdFx0XHRcdGkrKztcblx0XHRcdFx0Y29sdW1uKys7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fSBlbHNlIGlmIChjaGFyID09PSBHUkFNTUFSLkJSQUNFX09QRU4pIHtcblx0XHRcdFx0aWdub3JlV2hpdGVzcGFjZSA9IHRydWU7XG5cdFx0XHR9IGVsc2UgaWYgKGNoYXIgPT09IEdSQU1NQVIuQlJBQ0VfQ0xPU0UpIHtcblx0XHRcdFx0aWdub3JlV2hpdGVzcGFjZSA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaWdub3JlV2hpdGVzcGFjZSkge1xuXHRcdFx0XHRpZiAodGhpcy5tYXRjaFdoaXRlc3BhY2VBdChpKSkge1xuXHRcdFx0XHRcdGkrKztcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaWZJc0NvbnN1bWluZ1B1bmN0dWF0aW9uKClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ1N0cmluZygpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdOdW1iZXIoKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nSWRlbnRpZmllcigpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdPcGVyYXRvcigpXG5cdFx0XHQpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHRleHRCdWZmZXIgKz0gY2hhcjtcblxuXHRcdFx0aWYgKGNoYXIgPT09ICdcXG4nKSB7XG5cdFx0XHRcdGxpbmUrKztcblx0XHRcdFx0Y29sdW1uID0gMDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbHVtbisrO1xuXHRcdFx0fVxuXG5cdFx0XHRpKys7XG5cdFx0fVxuXG5cdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cblx0XHRyZXR1cm4ge3Rva2VucywgbmV3SW5kZXg6IGksIGxpbmUsIGNvbHVtbn07XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFRva2VuU3RyZWFtIHtcblx0dG9rZW5zOiBUb2tlbltdO1xuXHRpbmRleDogbnVtYmVyID0gMDtcblxuXHRjb25zdHJ1Y3Rvcih0b2tlbnM6IFRva2VuW10pIHtcblx0XHR0aGlzLnRva2VucyA9IHRva2Vucztcblx0fVxuXG5cdHJld2luZCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pbmRleCA+IDApIHtcblx0XHRcdHRoaXMuaW5kZXgtLTtcblx0XHR9XG5cdH1cblxuXHRwZWVrKCk6IFRva2VuIHwgbnVsbCB7XG5cdFx0cmV0dXJuIHRoaXMudG9rZW5zW3RoaXMuaW5kZXhdIHx8IG51bGw7XG5cdH1cblxuXHRuZXh0KCk6IFRva2VuIHwgbnVsbCB7XG5cdFx0cmV0dXJuIHRoaXMudG9rZW5zW3RoaXMuaW5kZXgrK10gfHwgbnVsbDtcblx0fVxuXG5cdGhhc05leHQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGg7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtUb2tlbml6ZXJ9IGZyb20gXCIuLi90b2tlbml6ZXIvdG9rZW5pemVyXCI7XG5pbXBvcnQge3Rocm93RGVwZW5kZW5jeUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQgdHlwZSB7VG9rZW59IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5cbmV4cG9ydCBjbGFzcyBTb3VyY2Uge1xuXHRzdGF0aWMgTkVXTElORSA9ICdcXG4nO1xuXHRwdWJsaWMgcmVhZG9ubHkgdXJsOiBzdHJpbmc7XG5cdHByaXZhdGUgY29kZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGNvZGU6IHN0cmluZywgdXJsOiBzdHJpbmcgPSAnPGlubGluZT4nKSB7XG5cdFx0dGhpcy51cmwgPSB1cmw7XG5cdFx0dGhpcy5jb2RlID0gY29kZTtcblx0fVxuXG5cdGdldCBsZW5ndGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5jb2RlLmxlbmd0aDtcblx0fVxuXG5cdGdldFRva2VuaXplcigpOiBUb2tlbml6ZXIge1xuXHRcdHJldHVybiBuZXcgVG9rZW5pemVyKHRoaXMpO1xuXHR9XG5cblx0c2xpY2Uoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmNvZGUuc2xpY2Uoc3RhcnQsIGVuZCk7XG5cdH1cblxuXHRjaGFyQXQoaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuY29kZS5jaGFyQXQoaW5kZXgpO1xuXHR9XG5cblx0c3RhcnRzV2l0aCh0ZXh0OiBzdHJpbmcsIHBvc2l0aW9uPzogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29kZS5zdGFydHNXaXRoKHRleHQsIHBvc2l0aW9uKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgU291cmNlU3BhbiB7XG5cdHNvdXJjZTogU291cmNlO1xuXHRzdGFydDogbnVtYmVyO1xuXHRlbmQ6IG51bWJlcjtcblx0bGluZTogbnVtYmVyO1xuXHRjb2x1bW46IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcihzb3VyY2U6IFNvdXJjZSwgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpIHtcblx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0XHR0aGlzLnN0YXJ0ID0gc3RhcnQ7XG5cdFx0dGhpcy5lbmQgPSBlbmQ7XG5cblx0XHRjb25zdCBiZWZvcmUgPSBzb3VyY2Uuc2xpY2UoMCwgc3RhcnQpO1xuXHRcdGNvbnN0IGxpbmVzID0gYmVmb3JlLnNwbGl0KFNvdXJjZS5ORVdMSU5FKTtcblxuXHRcdHRoaXMubGluZSA9IGxpbmVzLmxlbmd0aDtcblx0XHR0aGlzLmNvbHVtbiA9IChsaW5lc1tsaW5lcy5sZW5ndGggLSAxXSB8fCAnJykubGVuZ3RoICsgMTtcblx0fVxuXG5cdHRleHQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2Uuc2xpY2UodGhpcy5zdGFydCwgdGhpcy5lbmQpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGFuRnJvbShzdGFydFRva2VuOiBUb2tlbiwgZW5kVG9rZW46IFRva2VuKTogU291cmNlU3BhbiB7XG5cdHJldHVybiBuZXcgU291cmNlU3BhbihzdGFydFRva2VuLnNvdXJjZSwgc3RhcnRUb2tlbi5zdGFydCwgZW5kVG9rZW4uZW5kKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoU291cmNlKHVybDogc3RyaW5nKTogUHJvbWlzZTxTb3VyY2U+IHtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXHRpZiAoIXJlc3BvbnNlLm9rKSB7XG5cdFx0dGhyb3dEZXBlbmRlbmN5RXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHt1cmx9YCk7XG5cdH1cblxuXHRyZXR1cm4gbmV3IFNvdXJjZShhd2FpdCByZXNwb25zZS50ZXh0KCksIHVybCk7XG59XG4iLAogICAgImltcG9ydCB7U291cmNlLCBTb3VyY2VTcGFufSBmcm9tIFwiLi9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5jbGFzcyBFcnJvclR5cGVzIHtcblx0c3RhdGljIFRZUEVfRVJST1I6IHN0cmluZyA9ICdUeXBlRXJyb3InO1xuXHRzdGF0aWMgVE9LRU5fRVJST1I6IHN0cmluZyA9ICdUb2tlbkVycm9yJztcblx0c3RhdGljIFBBUlNFUl9FUlJPUjogc3RyaW5nID0gJ1BhcnNlckVycm9yJztcblx0c3RhdGljIFJVTlRJTUVfRVJST1I6IHN0cmluZyA9ICdSdW50aW1lRXJyb3InO1xuXHRzdGF0aWMgSU5URVJOQUxfRVJST1I6IHN0cmluZyA9ICdJbnRlcm5hbEVycm9yJztcblx0c3RhdGljIE5BVElWRV9FUlJPUjogc3RyaW5nID0gJ05hdGl2ZUVycm9yJztcblx0c3RhdGljIERFUEVOREVOQ1lfRVJST1I6IHN0cmluZyA9ICdEZXBlbmRlbmN5RXJyb3InO1xufVxuXG5leHBvcnQgY2xhc3MgTHlyYUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXHRraW5kOiBzdHJpbmc7XG5cdHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbDtcblx0b3ZlcnJpZGUgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdGtpbmQ6IHN0cmluZyxcblx0XHRtZXNzYWdlOiBzdHJpbmcsXG5cdFx0c3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLFxuXHRcdGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuXHQpIHtcblx0XHRzdXBlcihtZXNzYWdlKTtcblx0XHR0aGlzLmtpbmQgPSBraW5kO1xuXHRcdHRoaXMuc3BhbiA9IHNwYW47XG5cdFx0dGhpcy5jYXVzZSA9IGNhdXNlO1xuXHR9XG5cblx0Zm9ybWF0KCk6IHN0cmluZyB7XG5cdFx0aWYgKHRoaXMuc3Bhbikge1xuXG5cdFx0XHRyZXR1cm4gYFxuWyR7dGhpcy5raW5kfV0gJHt0aGlzLm1lc3NhZ2V9XG4gIGF0ICR7dGhpcy5zcGFuLnNvdXJjZS51cmx9OiR7dGhpcy5zcGFuLmxpbmV9OiR7dGhpcy5zcGFuLmNvbHVtbn1cblxuJHt0aGlzLnNwYW4udGV4dCgpfVxuJHtcIiBcIi5yZXBlYXQodGhpcy5zcGFuLmNvbHVtbil9JHtcIl5cIi5yZXBlYXQodGhpcy5zcGFuLmVuZCAtIHRoaXMuc3Bhbi5zdGFydCl9XG5gO1xuXHRcdH1cblxuXHRcdHJldHVybiBgWyR7dGhpcy5raW5kfV0gJHt0aGlzLm1lc3NhZ2V9YDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYVRva2VuRXJyb3IgZXh0ZW5kcyBMeXJhRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRFcnJvclR5cGVzLlRPS0VOX0VSUk9SLFxuXHRcdFx0bWVzc2FnZSxcblx0XHRcdHNwYW4sXG5cdFx0XHRjYXVzZVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFUeXBlRXJyb3IgZXh0ZW5kcyBMeXJhRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRFcnJvclR5cGVzLlRZUEVfRVJST1IsXG5cdFx0XHRtZXNzYWdlLFxuXHRcdFx0c3Bhbixcblx0XHRcdGNhdXNlXG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYVBhcnNlckVycm9yIGV4dGVuZHMgTHlyYUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0RXJyb3JUeXBlcy5QQVJTRVJfRVJST1IsXG5cdFx0XHRtZXNzYWdlLFxuXHRcdFx0c3Bhbixcblx0XHRcdGNhdXNlXG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYVJ1bnRpbWVFcnJvciBleHRlbmRzIEx5cmFFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihcblx0XHRcdEVycm9yVHlwZXMuUlVOVElNRV9FUlJPUixcblx0XHRcdG1lc3NhZ2UsXG5cdFx0XHRzcGFuLFxuXHRcdFx0Y2F1c2Vcblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhTmF0aXZlRXJyb3IgZXh0ZW5kcyBMeXJhRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRFcnJvclR5cGVzLk5BVElWRV9FUlJPUixcblx0XHRcdG1lc3NhZ2UsXG5cdFx0XHRzcGFuLFxuXHRcdFx0Y2F1c2Vcblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhRGVwZW5kZW5jeUVycm9yIGV4dGVuZHMgTHlyYUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0RXJyb3JUeXBlcy5ERVBFTkRFTkNZX0VSUk9SLFxuXHRcdFx0bWVzc2FnZSxcblx0XHRcdHNwYW4sXG5cdFx0XHRjYXVzZVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93VG9rZW5FcnJvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKTogbmV2ZXIge1xuXHR0aHJvdyBuZXcgTHlyYVRva2VuRXJyb3IobWVzc2FnZSwgc3BhbiwgY2F1c2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dUeXBlRXJyb3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IG5ldmVyIHtcblx0dGhyb3cgbmV3IEx5cmFUeXBlRXJyb3IobWVzc2FnZSwgc3BhbiwgY2F1c2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQYXJzZXJFcnJvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKTogbmV2ZXIge1xuXHR0aHJvdyBuZXcgTHlyYVBhcnNlckVycm9yKG1lc3NhZ2UsIHNwYW4sIGNhdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UnVudGltZUVycm9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBuZXZlciB7XG5cdHRocm93IG5ldyBMeXJhUnVudGltZUVycm9yKG1lc3NhZ2UsIHNwYW4sIGNhdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93TmF0aXZlRXJyb3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IG5ldmVyIHtcblx0dGhyb3cgbmV3IEx5cmFOYXRpdmVFcnJvcihtZXNzYWdlLCBzcGFuLCBjYXVzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd0RlcGVuZGVuY3lFcnJvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKTogbmV2ZXIge1xuXHR0aHJvdyBuZXcgTHlyYURlcGVuZGVuY3lFcnJvcihtZXNzYWdlLCBzcGFuLCBjYXVzZSk7XG59XG5cbi8qKlxuICogQHRocm93cyB7RXJyb3J9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3cmFwSnNFcnJvcihlcnJvcjogRXJyb3IsIHNvdXJjZTogU291cmNlKTogTHlyYUVycm9yIHtcblx0aWYgKGVycm9yIGluc3RhbmNlb2YgTHlyYUVycm9yKSB7XG5cdFx0cmV0dXJuIGVycm9yO1xuXHR9XG5cblx0cmV0dXJuIG5ldyBMeXJhRXJyb3IoXG5cdFx0RXJyb3JUeXBlcy5JTlRFUk5BTF9FUlJPUixcblx0XHRlcnJvci5tZXNzYWdlIHx8IFN0cmluZyhlcnJvciksXG5cdFx0bmV3IFNvdXJjZVNwYW4oc291cmNlLCAwLCBzb3VyY2UubGVuZ3RoKVxuXHQpO1xufVxuIiwKICAgICJpbXBvcnQge0FTVENsYXNzTm9kZSwgQVNUTm9kZVR5cGV9IGZyb20gXCIuLi9jb3JlL2FzdFwiO1xuaW1wb3J0IHtDbGFzc0RlZmluaXRpb259IGZyb20gXCIuLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7UGFyc2VyfSBmcm9tIFwiLi4vY29yZS9wYXJzZXIvcGFyc2VyXCI7XG5pbXBvcnQge3Rocm93UnVudGltZUVycm9yfSBmcm9tIFwiLi4vY29yZS9lcnJvcnNcIjtcbmltcG9ydCB0eXBlIHtTb3VyY2V9IGZyb20gXCIuLi9jb3JlL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmV4cG9ydCBjbGFzcyBOYXRpdmVDbGFzcyB7XG5cdG5hbWU6IHN0cmluZztcblx0bmF0aXZlSW5zdGFuY2U6IGFueTtcblx0bmF0aXZlQ2xhc3NTb3VyY2U6IFNvdXJjZTtcblx0aXNBdXRvbG9hZEFibGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIG5hdGl2ZUluc3RhbmNlOiBhbnksIHNvdXJjZTogU291cmNlKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLm5hdGl2ZUluc3RhbmNlID0gbmF0aXZlSW5zdGFuY2U7XG5cdFx0dGhpcy5uYXRpdmVDbGFzc1NvdXJjZSA9IHNvdXJjZTtcblx0fVxuXG5cdGdldENsYXNzRGVmaW5pdGlvbigpOiBDbGFzc0RlZmluaXRpb24ge1xuXHRcdGNvbnN0IGFzdCA9IG5ldyBQYXJzZXIodGhpcy5uYXRpdmVDbGFzc1NvdXJjZSkucGFyc2UoKTtcblxuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChub2RlLnR5cGUgPT09IEFTVE5vZGVUeXBlLkNMQVNTKSB7XG5cdFx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUQ2xhc3NOb2RlICYmIG5vZGUubmFtZSA9PT0gdGhpcy5uYW1lKSB7XG5cdFx0XHRcdFx0Y29uc3QgY2xhc3NEZWYgPSBDbGFzc0RlZmluaXRpb24uZnJvbUFTVChub2RlKTtcblxuXHRcdFx0XHRcdGNsYXNzRGVmLm5hdGl2ZUluc3RhbmNlID0gdGhpcy5uYXRpdmVJbnN0YW5jZTtcblxuXHRcdFx0XHRcdHJldHVybiBjbGFzc0RlZjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRocm93UnVudGltZUVycm9yKGBDbGFzcyAke3RoaXMubmFtZX0gbm90IGZvdW5kLmAsIGFzdC5zcGFuKTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0FTVEFycmF5Tm9kZSwgQVNUTm9kZSwgQVNUTm9kZVR5cGUsIEFTVFJldHVybk5vZGV9IGZyb20gXCIuLi9hc3RcIjtcbmltcG9ydCB7R1JBTU1BUiwgVFlQRV9FTlVNfSBmcm9tIFwiLi4vZ3JhbW1hclwiO1xuaW1wb3J0IHtDbGFzc0RlZmluaXRpb24sIEluc3RhbmNlfSBmcm9tIFwiLi9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuaW1wb3J0IHt0aHJvd05hdGl2ZUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5cbmludGVyZmFjZSBTZXJpYWxpemF0aW9uT2JqZWN0IHtcblx0W2luZGV4OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhTmF0aXZlT2JqZWN0IHtcblx0Y2xhc3NOYW1lOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoY2xhc3NOYW1lOiBzdHJpbmcpIHtcblx0XHR0aGlzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcblx0fVxuXG5cdHB1YmxpYyBzZXJpYWxpemUoKTogU2VyaWFsaXphdGlvbk9iamVjdCB7XG5cdFx0Y29uc3Qgb2JqZWN0OiBTZXJpYWxpemF0aW9uT2JqZWN0ID0ge307XG5cblx0XHRvYmplY3RbdGhpcy5jbGFzc05hbWVdID0gT2JqZWN0XG5cdFx0XHQua2V5cyh0aGlzKVxuXHRcdFx0LmZpbHRlcihrZXkgPT4ga2V5ICE9PSAnY2xhc3NOYW1lJylcblx0XHRcdC5yZWR1Y2UoKG9iamVjdDogU2VyaWFsaXphdGlvbk9iamVjdCwga2V5OiBzdHJpbmcpOiBTZXJpYWxpemF0aW9uT2JqZWN0ID0+IHtcblx0XHRcdFx0Y29uc3QgY29weTogU2VyaWFsaXphdGlvbk9iamVjdCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMpO1xuXHRcdFx0XHRvYmplY3Rba2V5XSA9IGNvcHlba2V5XTtcblx0XHRcdFx0cmV0dXJuIG9iamVjdDtcblx0XHRcdH0sIHt9KTtcblxuXHRcdHJldHVybiBvYmplY3Q7XG5cdH1cblxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoe2NsYXNzTmFtZTogdGhpcy5jbGFzc05hbWV9LCBudWxsLCAyKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYU9iamVjdFZpZXcgZXh0ZW5kcyBMeXJhTmF0aXZlT2JqZWN0IHtcblx0cHJpdmF0ZSBfX2luc3RhbmNlOiBJbnN0YW5jZTtcblxuXHRjb25zdHJ1Y3RvcihpbnN0YW5jZTogSW5zdGFuY2UpIHtcblx0XHRzdXBlcihpbnN0YW5jZS5fX2NsYXNzRGVmLm5hbWUpO1xuXG5cdFx0dGhpcy5fX2luc3RhbmNlID0gaW5zdGFuY2U7XG5cblx0XHRyZXR1cm4gbmV3IFByb3h5KHRoaXMsIHtcblx0XHRcdGdldDogKF86IGFueSwgbmFtZTogc3RyaW5nKTogYW55ID0+IHtcblx0XHRcdFx0aWYgKG5hbWUgaW4gdGhpcy5fX2luc3RhbmNlLl9faW5zdGFuY2VGaWVsZHMpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5fX2luc3RhbmNlLl9faW5zdGFuY2VGaWVsZHNbbmFtZV07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAobmFtZSBpbiB0aGlzLl9faW5zdGFuY2UuX19zdGF0aWNGaWVsZHMpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5fX2luc3RhbmNlLl9fc3RhdGljRmllbGRzW25hbWVdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKG5hbWUgaW4gdGhpcykge1xuXHRcdFx0XHRcdGNvbnN0IHNlbGY6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHRoaXM7XG5cdFx0XHRcdFx0cmV0dXJuIHNlbGZbbmFtZV07XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdHNldDogKF86IGFueSwgbmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogYW55ID0+IHtcblx0XHRcdFx0aWYgKG5hbWUgaW4gdGhpcy5fX2luc3RhbmNlLl9faW5zdGFuY2VGaWVsZHMpIHtcblx0XHRcdFx0XHR0aGlzLl9faW5zdGFuY2UuX19pbnN0YW5jZUZpZWxkc1tuYW1lXSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKG5hbWUgaW4gdGhpcy5fX2luc3RhbmNlLl9fc3RhdGljRmllbGRzKSB7XG5cdFx0XHRcdFx0dGhpcy5fX2luc3RhbmNlLl9fc3RhdGljRmllbGRzW25hbWVdID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0fSlcblx0fVxuXG5cdHB1YmxpYyBvdmVycmlkZSBzZXJpYWxpemUoKTogU2VyaWFsaXphdGlvbk9iamVjdCB7XG5cdFx0Y29uc3Qgb2JqZWN0OiBTZXJpYWxpemF0aW9uT2JqZWN0ID0ge307XG5cblx0XHRvYmplY3RbdGhpcy5jbGFzc05hbWVdID0gey4uLnRoaXMuX19pbnN0YW5jZT8uX19pbnN0YW5jZUZpZWxkc307XG5cblx0XHRyZXR1cm4gb2JqZWN0O1xuXHR9XG5cblx0cHVibGljIG92ZXJyaWRlIHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuc2VyaWFsaXplKCksIG51bGwsIDIpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXN0VmFsdWUodmFsdWU6IGFueSwgZXhwZWN0ZWQ6IGFueSA9IG51bGwpOiBhbnkge1xuXHRjb25zdCB0eXBlT2YgPSB0eXBlb2YgdmFsdWU7XG5cblx0aWYgKGV4cGVjdGVkID09PSBudWxsKSB7XG5cdFx0aWYgKHZhbHVlID09PSBHUkFNTUFSLk5VTEwpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRpZiAodmFsdWUgPT09IEdSQU1NQVIuVFJVRSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGlmICh2YWx1ZSA9PT0gR1JBTU1BUi5GQUxTRSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAodHlwZU9mID09PSAnc3RyaW5nJyAmJiB2YWx1ZS50cmltKCkgIT09ICcnICYmICFpc05hTih2YWx1ZSkpIHtcblx0XHRcdHJldHVybiBOdW1iZXIodmFsdWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRzd2l0Y2ggKGV4cGVjdGVkKSB7XG5cdFx0Y2FzZSBUWVBFX0VOVU0uU1RSSU5HOlxuXHRcdFx0cmV0dXJuIHR5cGVPZiA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IFN0cmluZyh2YWx1ZSk7XG5cblx0XHRjYXNlIFRZUEVfRU5VTS5OVU1CRVI6XG5cdFx0XHRyZXR1cm4gdHlwZU9mID09PSAnbnVtYmVyJyA/IHZhbHVlIDogTnVtYmVyKHZhbHVlKTtcblxuXHRcdGNhc2UgVFlQRV9FTlVNLkJPT0xFQU46XG5cdFx0XHRyZXR1cm4gdHlwZU9mID09PSAnYm9vbGVhbicgPyB2YWx1ZSA6IHZhbHVlID09PSAndHJ1ZSc7XG5cblx0XHRjYXNlIFRZUEVfRU5VTS5OVUxMOlxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0x5cmFTdHJpbmcodmFsdWU6IHN0cmluZyk6IEFTVE5vZGUge1xuXHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuU1RSSU5HKTtcblx0bm9kZS52YWx1ZSA9IHZhbHVlO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTHlyYU51bWJlcih2YWx1ZTogbnVtYmVyKTogQVNUTm9kZSB7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5OVU1CRVIpO1xuXHRub2RlLnZhbHVlID0gdmFsdWU7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9MeXJhQm9vbGVhbih2YWx1ZTogYm9vbGVhbik6IEFTVE5vZGUge1xuXHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuQk9PTEVBTik7XG5cdG5vZGUudmFsdWUgPSB2YWx1ZTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0x5cmFOdWxsKCk6IEFTVE5vZGUge1xuXHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuTlVMTCk7XG5cdG5vZGUudmFsdWUgPSBHUkFNTUFSLk5VTEw7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9MeXJhQXJyYXkodmFsdWVzOiBhbnlbXSk6IEFTVE5vZGUge1xuXHRjb25zdCBub2RlID0gbmV3IEFTVEFycmF5Tm9kZSgpO1xuXHRub2RlLmVsZW1lbnRzID0gdmFsdWVzLm1hcCh2YWx1ZSA9PiB0b0x5cmFWYWx1ZSh2YWx1ZSkpO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTHlyYVZhbHVlKHZhbHVlOiBhbnkpOiBBU1ROb2RlIHtcblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgQVNUTm9kZSkge1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09IFRZUEVfRU5VTS5TVFJJTkcpIHtcblx0XHRyZXR1cm4gdG9MeXJhU3RyaW5nKHZhbHVlKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09IFRZUEVfRU5VTS5OVU1CRVIpIHtcblx0XHRyZXR1cm4gdG9MeXJhTnVtYmVyKHZhbHVlKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09IFRZUEVfRU5VTS5CT09MRUFOKSB7XG5cdFx0cmV0dXJuIHRvTHlyYUJvb2xlYW4odmFsdWUpO1xuXHR9XG5cblx0aWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gdG9MeXJhTnVsbCgpO1xuXHR9XG5cblx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0cmV0dXJuIHRvTHlyYUFycmF5KHZhbHVlKTtcblx0fVxuXG5cdHRocm93TmF0aXZlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IG5hdGl2ZSBvYmplY3QgdG8gTHlyYSB2YWx1ZScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJvbUx5cmFWYWx1ZSh2YWx1ZTogYW55KTogYW55IHtcblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgQVNUTm9kZSkge1xuXHRcdHJldHVybiBjYXN0VmFsdWUodmFsdWUudmFsdWUpO1xuXHR9XG5cblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgSW5zdGFuY2UpIHtcblx0XHRpZiAodmFsdWUuX19uYXRpdmVJbnN0YW5jZSkge1xuXHRcdFx0cmV0dXJuIHZhbHVlLl9fbmF0aXZlSW5zdGFuY2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBMeXJhT2JqZWN0Vmlldyh2YWx1ZSk7XG5cdH1cblxuXHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRyZXR1cm4gdmFsdWUubWFwKGZyb21MeXJhVmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIGNhc3RWYWx1ZSh2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5WYWx1ZSh2YWx1ZTogYW55KTogQVNUUmV0dXJuTm9kZSB7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUUmV0dXJuTm9kZSgpO1xuXHRub2RlLmFyZ3VtZW50ID0gdG9MeXJhVmFsdWUodmFsdWUpO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBOYXRpdmVJbnN0YW5jZShseXJhTmF0aXZlT2JqZWN0OiBMeXJhTmF0aXZlT2JqZWN0LCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpOiBJbnN0YW5jZSB7XG5cdGlmICghb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5oYXMobHlyYU5hdGl2ZU9iamVjdC5jbGFzc05hbWUpKSB7XG5cdFx0dGhyb3dOYXRpdmVFcnJvcihgQ2xhc3MgJHtseXJhTmF0aXZlT2JqZWN0LmNsYXNzTmFtZX0gbm90IGZvdW5kLmApO1xuXHR9XG5cblx0Y29uc3QgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KGx5cmFOYXRpdmVPYmplY3QuY2xhc3NOYW1lKTtcblx0Y29uc3QgaW5zdGFuY2U6IEluc3RhbmNlID0gY2xhc3NEZWYuY29uc3RydWN0RW1wdHlJbnN0YW5jZShvYmplY3RSZWdpc3RyeSk7XG5cblx0aW5zdGFuY2UuX19uYXRpdmVJbnN0YW5jZSA9IGx5cmFOYXRpdmVPYmplY3Q7XG5cblx0cmV0dXJuIGluc3RhbmNlO1xufVxuXG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7THlyYU5hdGl2ZU9iamVjdH0gZnJvbSBcIi4uLy4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfY29udmVyc2lvblwiO1xuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuLi8uLi9jb3JlL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmNvbnN0IENMQVNTX05BTUUgPSAnU3RyaW5nJztcblxuZXhwb3J0IGNsYXNzIEx5cmFTdHJpbmcgZXh0ZW5kcyBMeXJhTmF0aXZlT2JqZWN0IHtcblx0dmFsdWU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIoQ0xBU1NfTkFNRSk7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHR9XG5cblx0Ly8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuXHR0b1VwcGVyQ2FzZSgpOiBMeXJhU3RyaW5nIHtcblx0XHRyZXR1cm4gbmV3IEx5cmFTdHJpbmcodGhpcy52YWx1ZS50b1VwcGVyQ2FzZSgpKTtcblx0fVxuXG5cdC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcblx0dG9Mb3dlckNhc2UoKTogTHlyYVN0cmluZyB7XG5cdFx0cmV0dXJuIG5ldyBMeXJhU3RyaW5nKHRoaXMudmFsdWUudG9Mb3dlckNhc2UoKSk7XG5cdH1cblxuXHRvdmVycmlkZSB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTdHJpbmdUeXBlIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IENMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRDTEFTU19OQU1FLFxuXHRcdFx0THlyYVN0cmluZyxcblx0XHRcdG5ldyBTb3VyY2UoXG5cdFx0XHRcdGBcbmNsYXNzICR7Q0xBU1NfTkFNRX0ge1xuXHRwdWJsaWMgY29uc3RydWN0b3IodmFsdWUpO1xuXHRcdFx0XHRcblx0cHVibGljIHRvVXBwZXJDYXNlKCk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwdWJsaWMgdG9Mb3dlckNhc2UoKTogJHtDTEFTU19OQU1FfTtcblxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IHRydWU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uLy4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuY29uc3QgQ0xBU1NfTkFNRSA9ICdTeXN0ZW0nO1xuXG5leHBvcnQgY2xhc3MgTHlyYVN5c3RlbSB7XG5cdHN0YXRpYyBhbGVydChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRhbGVydChtZXNzYWdlKTtcblx0fVxuXG5cdHN0YXRpYyBwcmludChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRjb25zb2xlLmxvZyhtZXNzYWdlKTtcblx0fVxuXG5cdHN0YXRpYyBpbmZvKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRjb25zb2xlLmluZm8odmFsdWUuc2VyaWFsaXplKCkpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zb2xlLmluZm8odmFsdWUpO1xuXHR9XG5cblx0c3RhdGljIHdhcm5pbmcodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdGNvbnNvbGUud2Fybih2YWx1ZS5zZXJpYWxpemUoKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnNvbGUud2Fybih2YWx1ZSk7XG5cdH1cblxuXHRzdGF0aWMgZXJyb3IodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IodmFsdWUuc2VyaWFsaXplKCkpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zb2xlLmVycm9yKHZhbHVlKTtcblx0fVxuXG5cdHN0YXRpYyBsb2codmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdGNvbnNvbGUubG9nKHZhbHVlLnNlcmlhbGl6ZSgpKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc29sZS5sb2codmFsdWUpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTeXN0ZW0gZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdENMQVNTX05BTUUsXG5cdFx0XHRMeXJhU3lzdGVtLFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfSB7XG5cdHB1YmxpYyBzdGF0aWMgYWxlcnQobWVzc2FnZTogc3RyaW5nKTogdm9pZDtcblx0XG5cdHB1YmxpYyBzdGF0aWMgcHJpbnQobWVzc2FnZTogc3RyaW5nKTogdm9pZDtcblx0XG5cdHB1YmxpYyBzdGF0aWMgaW5mbyh2YWx1ZTogbWl4ZWQpOiB2b2lkO1xuXHRcblx0cHVibGljIHN0YXRpYyB3YXJuaW5nKHZhbHVlOiBtaXhlZCk6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgc3RhdGljIGVycm9yKHZhbHVlOiBtaXhlZCk6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgc3RhdGljIGxvZyh2YWx1ZTogbWl4ZWQpOiB2b2lkO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IGZhbHNlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vLi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5jb25zdCBDTEFTU19OQU1FID0gJ0Fzc2VydCc7XG5cbmNvbnN0IGlmRmFpbGVkID0gKG1lc3NhZ2U6IHN0cmluZyA9ICcnKSA9PiB7XG5cdHRocm93IG5ldyBFcnJvcignW0Fzc2VydGlvbkVycm9yXSAnICsgKG1lc3NhZ2UgfHwgJ0Fzc2VydGlvbiBmYWlsZWQuJykpO1xufTtcblxuZXhwb3J0IGNsYXNzIEx5cmFBc3NlcnQge1xuXHRzdGF0aWMgaXNUcnVlKGNvbmRpdGlvbjogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nID0gJycpIHtcblx0XHRpZiAoIWNvbmRpdGlvbikge1xuXHRcdFx0aWZGYWlsZWQobWVzc2FnZSk7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIGlzRmFsc2UoY29uZGl0aW9uOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcgPSAnJykge1xuXHRcdGlmIChjb25kaXRpb24pIHtcblx0XHRcdGlmRmFpbGVkKG1lc3NhZ2UpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQXNzZXJ0IGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IENMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRDTEFTU19OQU1FLFxuXHRcdFx0THlyYUFzc2VydCxcblx0XHRcdG5ldyBTb3VyY2UoXG5cdFx0XHRcdGBcbmNsYXNzICR7Q0xBU1NfTkFNRX0ge1xuXHRwdWJsaWMgc3RhdGljIGlzVHJ1ZShjb25kaXRpb246IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZyA9IFwiXCIpOiB2b2lkO1xuXHRcblx0cHVibGljIHN0YXRpYyBpc0ZhbHNlKGNvbmRpdGlvbjogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nID0gXCJcIik6IHZvaWQ7XG59YFxuXHRcdFx0KSk7XG5cblx0XHR0aGlzLmlzQXV0b2xvYWRBYmxlID0gZmFsc2U7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uLy4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuY29uc3QgQ0xBU1NfTkFNRSA9ICdOdW1iZXInO1xuXG5leHBvcnQgY2xhc3MgTHlyYU51bWJlciBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHR2YWx1ZTogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKHZhbHVlOiBudW1iZXIpIHtcblx0XHRzdXBlcihDTEFTU19OQU1FKTtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdH1cblxuXHRvdmVycmlkZSB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlLnRvU3RyaW5nKCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE51bWJlclR5cGUgZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdENMQVNTX05BTUUsXG5cdFx0XHRMeXJhTnVtYmVyLFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfSB7XG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWx1ZSk7XG5cblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZztcbn1gXG5cdFx0XHQpKTtcblxuXHRcdHRoaXMuaXNBdXRvbG9hZEFibGUgPSB0cnVlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7THlyYU5hdGl2ZU9iamVjdH0gZnJvbSBcIi4uLy4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfY29udmVyc2lvblwiO1xuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuLi8uLi9jb3JlL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmNvbnN0IEFSUkFZX0NMQVNTX05BTUUgPSAnQXJyYXknO1xuY29uc3QgQVJSQVlfSVRFUkFUT1JfQ0xBU1NfTkFNRSA9ICdBcnJheUl0ZXJhdG9yJztcblxuZXhwb3J0IGNsYXNzIEx5cmFBcnJheSBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHR2YWx1ZXM6IGFueVtdO1xuXG5cdGNvbnN0cnVjdG9yKHZhbHVlczogYW55W10gPSBbXSkge1xuXHRcdHN1cGVyKEFSUkFZX0NMQVNTX05BTUUpO1xuXG5cdFx0dGhpcy52YWx1ZXMgPSB2YWx1ZXM7XG5cdH1cblxuXHRpdGVyYXRvcigpOiBMeXJhQXJyYXlJdGVyYXRvciB7XG5cdFx0cmV0dXJuIG5ldyBMeXJhQXJyYXlJdGVyYXRvcih0aGlzKTtcblx0fVxuXG5cdGxlbmd0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlcy5sZW5ndGg7XG5cdH1cblxuXHRwdXNoKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLnZhbHVlcy5wdXNoKHZhbHVlKTtcblx0fVxuXG5cdC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcblx0Z2V0KGluZGV4OiBudW1iZXIpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlc1tpbmRleF0gPz8gbnVsbDtcblx0fVxuXG5cdC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcblx0cmVtb3ZlQXQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMudmFsdWVzID0gdGhpcy52YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcblx0fVxuXG5cdG92ZXJyaWRlIHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0Y29uc3QgdmFsdWVzID0gdGhpc1xuXHRcdFx0LnZhbHVlc1xuXHRcdFx0Lm1hcCh2YWx1ZSA9PiB7XG5cdFx0XHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFBcnJheSkge1xuXHRcdFx0XHRcdHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdH0pO1xuXG5cdFx0cmV0dXJuIGBbJHt2YWx1ZXMuam9pbignLCAnKX1dYDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQXJyYXlUeXBlIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IEFSUkFZX0NMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRBUlJBWV9DTEFTU19OQU1FLFxuXHRcdFx0THlyYUFycmF5LFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtBUlJBWV9DTEFTU19OQU1FfTxUPiBpbXBsZW1lbnRzIEl0ZXJhYmxlPFQ+IHtcblx0cHVibGljIGNvbnN0cnVjdG9yKHZhbHVlcyA9IFtdKTtcblx0XG5cdHB1YmxpYyBpdGVyYXRvcigpOiBJdGVyYXRvcjxUPjtcblx0XG5cdHB1YmxpYyBsZW5ndGgoKTogbnVtYmVyO1xuXHRcblx0cHVibGljIHB1c2godmFsdWU6IFQpOiB2b2lkO1xuXHRcblx0cHVibGljIGdldChpbmRleDogbnVtYmVyKTogVD87XG5cdFxuXHRwdWJsaWMgcmVtb3ZlQXQoaW5kZXg6IG51bWJlcik6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFBcnJheUl0ZXJhdG9yIGV4dGVuZHMgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdHZhbHVlczogYW55W107XG5cdGluZGV4OiBudW1iZXIgPSAwO1xuXG5cdGNvbnN0cnVjdG9yKGFycmF5OiBMeXJhQXJyYXkpIHtcblx0XHRzdXBlcihBUlJBWV9JVEVSQVRPUl9DTEFTU19OQU1FKTtcblxuXHRcdHRoaXMudmFsdWVzID0gYXJyYXkudmFsdWVzO1xuXHR9XG5cblx0cmV3aW5kKCkge1xuXHRcdHRoaXMuaW5kZXggPSAwO1xuXHR9XG5cblx0aGFzTmV4dCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pbmRleCA8IHRoaXMudmFsdWVzLmxlbmd0aDtcblx0fVxuXG5cdG5leHQoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaW5kZXggKyAxID4gdGhpcy52YWx1ZXMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5pbmRleCsrO1xuXHR9XG5cblx0Ly8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuXHRwcmV2aW91cygpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pbmRleCArIDEgPCAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5pbmRleC0tO1xuXHR9XG5cblx0Ly8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuXHRrZXkoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5pbmRleDtcblx0fVxuXG5cdGN1cnJlbnQoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXNbdGhpcy5pbmRleF07XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFycmF5SXRlcmF0b3JUeXBlIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IEFSUkFZX0lURVJBVE9SX0NMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRBUlJBWV9JVEVSQVRPUl9DTEFTU19OQU1FLFxuXHRcdFx0THlyYUFycmF5LFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtBUlJBWV9JVEVSQVRPUl9DTEFTU19OQU1FfTxUPiBpbXBsZW1lbnRzIEl0ZXJhdG9yPFQ+IHtcblx0cHVibGljIGNvbnN0cnVjdG9yKGFycmF5OiBBcnJheTxUPik7XG5cdFxuXHRwdWJsaWMgaGFzTmV4dCgpOiBib29sZWFuO1xuXHRcblx0cHVibGljIG5leHQoKTogdm9pZDtcblx0XG5cdHB1YmxpYyBwcmV2aW91cygpOiB2b2lkO1xuXHRcblx0cHVibGljIGtleSgpOiBudW1iZXI7XG5cdFxuXHRwdWJsaWMgY3VycmVudCgpOiBUO1xuXHRcblx0cHVibGljIHJld2luZCgpOiB2b2lkO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IHRydWU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHt0b0x5cmFWYWx1ZX0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX2NvbnZlcnNpb25cIjtcbmltcG9ydCB7TGFtYmRhRnVuY3Rpb25DYWxsfSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcnVudGltZVwiO1xuXG5cbmV4cG9ydCBjbGFzcyBTdGF0ZTxUID0gYW55PiB7XG5cdHByaXZhdGUgdmFsdWU6IFQ7XG5cdHByaXZhdGUgc3Vic2NyaWJlcnM6IE1hcDxudW1iZXIsICh2YWx1ZTogVCkgPT4gdm9pZD4gPSBuZXcgTWFwPG51bWJlciwgKHZhbHVlOiBUKSA9PiB2b2lkPigpO1xuXHRwcml2YXRlIGlkOiBudW1iZXIgPSAwO1xuXG5cdGNvbnN0cnVjdG9yKGluaXRpYWw6IFQpIHtcblx0XHR0aGlzLnZhbHVlID0gaW5pdGlhbDtcblx0fVxuXG5cdGdldCgpOiBUIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0fVxuXG5cdHNldCh2YWx1ZTogVCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnZhbHVlID09PSB2YWx1ZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0XHR0aGlzLm5vdGlmeSgpO1xuXHR9XG5cblx0c3Vic2NyaWJlKGZuOiBMYW1iZGFGdW5jdGlvbkNhbGwpOiBudW1iZXIge1xuXHRcdGNvbnN0IG5leHRJZDogbnVtYmVyID0gdGhpcy5pZCsrO1xuXHRcdHRoaXMuc3Vic2NyaWJlcnMuc2V0KG5leHRJZCwgdGhpcy53cmFwQ2FsbGJhY2soZm4pKTtcblx0XHRyZXR1cm4gbmV4dElkO1xuXHR9XG5cblx0dW5zdWJzY3JpYmUoaWQ6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnN1YnNjcmliZXJzLmRlbGV0ZShpZCk7XG5cdH1cblxuXHRwcml2YXRlIG5vdGlmeSgpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IGZuIG9mIHRoaXMuc3Vic2NyaWJlcnMudmFsdWVzKCkpIHtcblx0XHRcdGZuKHRoaXMudmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgd3JhcENhbGxiYWNrKGZuOiBMYW1iZGFGdW5jdGlvbkNhbGwpIHtcblx0XHRyZXR1cm4gKHZhbHVlOiBUKTogdm9pZCA9PiB7XG5cdFx0XHRmbi5ldmFsQ2FsbChudWxsLCB0b0x5cmFWYWx1ZSh2YWx1ZSkpO1xuXHRcdH1cblx0fVxufVxuIiwKICAgICJpbXBvcnQge05hdGl2ZUNsYXNzfSBmcm9tIFwiLi4vbmF0aXZlX2NsYXNzXCI7XG5pbXBvcnQge0x5cmFOYXRpdmVPYmplY3R9IGZyb20gXCIuLi8uLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX2NvbnZlcnNpb25cIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vLi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuaW1wb3J0IHtTdGF0ZX0gZnJvbSBcIi4uLy4uL2NvcmUvZXZlbnQvc3RhdGVcIjtcbmltcG9ydCB0eXBlIHtMYW1iZGFGdW5jdGlvbkNhbGx9IGZyb20gXCIuLi8uLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX3J1bnRpbWVcIjtcblxuY29uc3QgQ0xBU1NfTkFNRSA9ICdTdGF0ZSc7XG5cbmV4cG9ydCBjbGFzcyBMeXJhU3RhdGU8VD4gZXh0ZW5kcyBMeXJhTmF0aXZlT2JqZWN0IHtcblx0cHJpdmF0ZSBzdGF0ZTogU3RhdGU8VD47XG5cblx0Y29uc3RydWN0b3IoaW5pdGlhbDogVCkge1xuXHRcdHN1cGVyKENMQVNTX05BTUUpO1xuXHRcdHRoaXMuc3RhdGUgPSBuZXcgU3RhdGU8VD4oaW5pdGlhbCk7XG5cdH1cblxuXHRnZXQoKTogVCB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUuZ2V0KCk7XG5cdH1cblxuXHRzZXQodmFsdWU6IFQpOiB2b2lkIHtcblx0XHR0aGlzLnN0YXRlLnNldCh2YWx1ZSk7XG5cdH1cblxuXHRzdWJzY3JpYmUoZm46IExhbWJkYUZ1bmN0aW9uQ2FsbCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUuc3Vic2NyaWJlKGZuKTtcblx0fVxuXG5cdHVuc3Vic2NyaWJlKGlkOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS51bnN1YnNjcmliZShpZCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0YXRlVHlwZSBleHRlbmRzIE5hdGl2ZUNsYXNzIHtcblx0c3RhdGljIENMQVNTX05BTUUgPSBDTEFTU19OQU1FO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0Q0xBU1NfTkFNRSxcblx0XHRcdEx5cmFTdGF0ZSxcblx0XHRcdG5ldyBTb3VyY2UoXG5cdFx0XHRcdGBcbmNsYXNzICR7Q0xBU1NfTkFNRX08VD4ge1xuXHRwdWJsaWMgY29uc3RydWN0b3IoaW5pdGlhbDogVCk7XG5cblx0cHVibGljIGdldCgpOiBUO1xuXHRcblx0cHVibGljIHNldCh2YWx1ZTogVCk6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgc3Vic2NyaWJlKGZuOiAoVCkgLT4gbWl4ZWQpOiBudW1iZXI7XG5cdFxuXHRwdWJsaWMgdW5zdWJzY3JpYmUoaWQ6IG51bWJlcik6IGJvb2xlYW47XG59YFxuXHRcdFx0KSk7XG5cblx0XHR0aGlzLmlzQXV0b2xvYWRBYmxlID0gdHJ1ZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge05hdGl2ZUNsYXNzfSBmcm9tIFwiLi4vbmF0aXZlX2NsYXNzXCI7XG5pbXBvcnQge0x5cmFOYXRpdmVPYmplY3R9IGZyb20gXCIuLi8uLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX2NvbnZlcnNpb25cIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vLi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5jb25zdCBDTEFTU19OQU1FID0gJ0x5cmFFdmVudHMnO1xuXG5leHBvcnQgY2xhc3MgTHlyYUV2ZW50IGV4dGVuZHMgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZXZlbnQ6IEV2ZW50KSB7XG5cdFx0c3VwZXIoQ0xBU1NfTkFNRSk7XG5cdH1cblxuXHRnZXRUeXBlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuZXZlbnQudHlwZTtcblx0fVxuXG5cdHByZXZlbnREZWZhdWx0KCk6IHZvaWQge1xuXHRcdHRoaXMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgRXZlbnRUeXBlIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IENMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRDTEFTU19OQU1FLFxuXHRcdFx0THlyYUV2ZW50LFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfSB7XG5cdHB1YmxpYyBjb25zdHJ1Y3RvcihldmVudCk7XG5cblx0cHVibGljIGdldFR5cGUoKTogc3RyaW5nO1xuXG5cdHB1YmxpYyBwcmV2ZW50RGVmYXVsdCgpOiB2b2lkO1xufWApKTtcblxuXHRcdHRoaXMuaXNBdXRvbG9hZEFibGUgPSB0cnVlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtTdHJpbmdUeXBlfSBmcm9tIFwiLi9jbGFzc2VzL3N0cmluZ1wiO1xuaW1wb3J0IHtTeXN0ZW19IGZyb20gXCIuL2NsYXNzZXMvc3lzdGVtXCI7XG5pbXBvcnQge0Fzc2VydH0gZnJvbSBcIi4vY2xhc3Nlcy9hc3NlcnRcIjtcbmltcG9ydCB7TnVtYmVyVHlwZX0gZnJvbSBcIi4vY2xhc3Nlcy9udW1iZXJcIjtcbmltcG9ydCB7QXJyYXlJdGVyYXRvclR5cGUsIEFycmF5VHlwZX0gZnJvbSBcIi4vY2xhc3Nlcy9hcnJheVwiO1xuaW1wb3J0IHtTdGF0ZVR5cGV9IGZyb20gXCIuL2NsYXNzZXMvc3RhdGVcIjtcbmltcG9ydCB7RXZlbnRUeXBlfSBmcm9tIFwiLi9jbGFzc2VzL2V2ZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBOYXRpdmVDbGFzc2VzIHtcblx0cmVnaXN0cnk6IE1hcDxzdHJpbmcsIE5hdGl2ZUNsYXNzPiA9IG5ldyBNYXAoKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChBc3NlcnQuQ0xBU1NfTkFNRSwgbmV3IEFzc2VydCgpKTtcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChTeXN0ZW0uQ0xBU1NfTkFNRSwgbmV3IFN5c3RlbSgpKTtcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChTdHJpbmdUeXBlLkNMQVNTX05BTUUsIG5ldyBTdHJpbmdUeXBlKCkpO1xuXHRcdHRoaXMucmVnaXN0cnkuc2V0KE51bWJlclR5cGUuQ0xBU1NfTkFNRSwgbmV3IE51bWJlclR5cGUoKSk7XG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoQXJyYXlUeXBlLkNMQVNTX05BTUUsIG5ldyBBcnJheVR5cGUoKSk7XG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoQXJyYXlJdGVyYXRvclR5cGUuQ0xBU1NfTkFNRSwgbmV3IEFycmF5SXRlcmF0b3JUeXBlKCkpXG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoU3RhdGVUeXBlLkNMQVNTX05BTUUsIG5ldyBTdGF0ZVR5cGUoKSk7XG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoRXZlbnRUeXBlLkNMQVNTX05BTUUsIG5ldyBFdmVudFR5cGUoKSlcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0FTVFBhcmFtZXRlck5vZGUsIEFTVFR5cGVOb2RlfSBmcm9tIFwiLi4vY29yZS9hc3RcIjtcbmltcG9ydCB7VFlQRV9FTlVNfSBmcm9tIFwiLi4vY29yZS9ncmFtbWFyXCI7XG5pbXBvcnQge3Rocm93TmF0aXZlRXJyb3J9IGZyb20gXCIuLi9jb3JlL2Vycm9yc1wiO1xuXG5leHBvcnQgY2xhc3MgTmF0aXZlRnVuY3Rpb24ge1xuXHRuYW1lOiBzdHJpbmc7XG5cdHBhcmFtZXRlck5vZGVzOiBBU1RQYXJhbWV0ZXJOb2RlW10gPSBbXTtcblx0cmV0dXJuVHlwZTogQVNUVHlwZU5vZGU7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sIHJldHVyblR5cGU6IEFTVFR5cGVOb2RlKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnBhcmFtZXRlck5vZGVzID0gcGFyYW1ldGVycztcblx0XHR0aGlzLnJldHVyblR5cGUgPSByZXR1cm5UeXBlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBOYXRpdmVGdW5jdGlvblR5cGVSZWdpc3RyeSB7XG5cdGZ1bmN0aW9uczogTWFwPHN0cmluZywgTmF0aXZlRnVuY3Rpb24+ID0gbmV3IE1hcCgpO1xuXG5cdGhhcyhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5mdW5jdGlvbnMuaGFzKG5hbWUpO1xuXHR9XG5cblx0Z2V0KG5hbWU6IHN0cmluZyk6IE5hdGl2ZUZ1bmN0aW9uIHtcblx0XHRjb25zdCBuYXRpdmVGdW5jdGlvbjogTmF0aXZlRnVuY3Rpb24gfCB1bmRlZmluZWQgPSB0aGlzLmZ1bmN0aW9ucy5nZXQobmFtZSk7XG5cdFx0aWYgKCFuYXRpdmVGdW5jdGlvbikge1xuXHRcdFx0dGhyb3dOYXRpdmVFcnJvcihgRnVuY3Rpb24gJHtuYW1lfSBub3QgZm91bmQuYCk7XG5cdFx0fVxuXHRcdHJldHVybiBuYXRpdmVGdW5jdGlvbjtcblx0fVxuXG5cdHNldChuYW1lOiBzdHJpbmcsIHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSwgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGUpOiBOYXRpdmVGdW5jdGlvblR5cGVSZWdpc3RyeSB7XG5cdFx0dGhpcy5mdW5jdGlvbnMuc2V0KG5hbWUsIG5ldyBOYXRpdmVGdW5jdGlvbihuYW1lLCBwYXJhbWV0ZXJzLCByZXR1cm5UeXBlKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE5hdGl2ZUZ1bmN0aW9ucyB7XG5cdHN0YXRpYyBQUklOVCA9ICdwcmludCc7XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj59XG5cdCAqL1xuXHRnZXRHbG9iYWxGdW5jdGlvbnMoKTogeyBba2V5OiBzdHJpbmddOiAoLi4uYXJnczogYW55W10pID0+IGFueSB9IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0W05hdGl2ZUZ1bmN0aW9ucy5QUklOVF06ICguLi5hcmdzKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHRnZXRHbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeSgpOiBOYXRpdmVGdW5jdGlvblR5cGVSZWdpc3RyeSB7XG5cdFx0Y29uc3QgZnVuY3Rpb25zID0gbmV3IE5hdGl2ZUZ1bmN0aW9uVHlwZVJlZ2lzdHJ5KCk7XG5cdFx0ZnVuY3Rpb25zLnNldChcblx0XHRcdE5hdGl2ZUZ1bmN0aW9ucy5QUklOVCxcblx0XHRcdFtwYXJhbWV0ZXIodHlwZShUWVBFX0VOVU0uU1RSSU5HKSwgJ21lc3NhZ2UnKV0sXG5cdFx0XHR0eXBlKFRZUEVfRU5VTS5WT0lEKVxuXHRcdClcblxuXHRcdHJldHVybiBmdW5jdGlvbnM7XG5cdH1cbn1cblxuZnVuY3Rpb24gdHlwZShuYW1lOiBzdHJpbmcsIG51bGxhYmxlID0gZmFsc2UpOiBBU1RUeXBlTm9kZSB7XG5cdHJldHVybiBuZXcgQVNUVHlwZU5vZGUoQVNUVHlwZU5vZGUuS0lORF9TSU1QTEUsIG5hbWUsIG51bGxhYmxlKTtcbn1cblxuZnVuY3Rpb24gcGFyYW1ldGVyKHR5cGVBbm5vdGF0aW9uOiBBU1RUeXBlTm9kZSwgbmFtZTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGFueSA9IG51bGwpOiBBU1RQYXJhbWV0ZXJOb2RlIHtcblx0cmV0dXJuIG5ldyBBU1RQYXJhbWV0ZXJOb2RlKG5hbWUsIHR5cGVBbm5vdGF0aW9uLCBkZWZhdWx0VmFsdWUpO1xufVxuIiwKICAgICJpbXBvcnQge1RZUEVfRU5VTX0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcbmltcG9ydCB7XG5cdEFTVENsYXNzTm9kZSxcblx0QVNURmllbGROb2RlLFxuXHRBU1RJbnRlcmZhY2VOb2RlLFxuXHRBU1RNZXRob2ROb2RlLFxuXHRBU1ROb2RlLFxuXHRBU1RQYXJhbWV0ZXJOb2RlLFxuXHRBU1RUeXBlTm9kZVxufSBmcm9tIFwiLi4vYXN0XCI7XG5pbXBvcnQge3Rocm93VHlwZUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcblxuZXhwb3J0IGNsYXNzIFByaW1pdGl2ZVR5cGVzIHtcblx0c3RhdGljIHJlYWRvbmx5IE5VTUJFUjogc3RyaW5nID0gVFlQRV9FTlVNLk5VTUJFUjtcblx0c3RhdGljIHJlYWRvbmx5IFNUUklORzogc3RyaW5nID0gVFlQRV9FTlVNLlNUUklORztcblx0c3RhdGljIHJlYWRvbmx5IEJPT0xFQU46IHN0cmluZyA9IFRZUEVfRU5VTS5CT09MRUFOO1xuXHRzdGF0aWMgcmVhZG9ubHkgTUlYRUQ6IHN0cmluZyA9IFRZUEVfRU5VTS5NSVhFRDtcblx0c3RhdGljIHJlYWRvbmx5IE5VTEw6IHN0cmluZyA9IFRZUEVfRU5VTS5OVUxMO1xuXHRzdGF0aWMgcmVhZG9ubHkgVk9JRDogc3RyaW5nID0gVFlQRV9FTlVNLlZPSUQ7XG5cblx0c3RhdGljIGhhc1R5cGUodHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKFByaW1pdGl2ZVR5cGVzLCB0eXBlLnRvVXBwZXJDYXNlKCkpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBQcmltaXRpdmVDbGFzc1R5cGVzIHtcblx0c3RhdGljIHJlYWRvbmx5IEFSUkFZOiBzdHJpbmcgPSBUWVBFX0VOVU0uQVJSQVk7XG5cblx0c3RhdGljIENMQVNTTkFNRV9NQVA6IHsgW3M6IHN0cmluZ106IHN0cmluZzsgfSA9IHtcblx0XHRhcnJheTogJ0FycmF5J1xuXHR9XG5cblx0c3RhdGljIGdldENsYXNzUmVmTmFtZSh0eXBlOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcblx0XHRyZXR1cm4gUHJpbWl0aXZlQ2xhc3NUeXBlcy5DTEFTU05BTUVfTUFQW3R5cGVdIHx8IG51bGw7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGUge1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0fVxuXG5cdGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzID09PSBvdGhlcjtcblx0fVxuXG5cdGFjY2VwdHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lcXVhbHMob3RoZXIpO1xuXHR9XG5cblx0dG9TdHJpbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gYFR5cGUoJHt0aGlzLm5hbWV9KWA7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFByaW1pdGl2ZVR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIobmFtZSk7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBQcmltaXRpdmVUeXBlXG5cdFx0XHQmJiB0aGlzLm5hbWUgPT09IG90aGVyLm5hbWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE1peGVkVHlwZSBleHRlbmRzIFR5cGUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihQcmltaXRpdmVUeXBlcy5NSVhFRCk7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBNaXhlZFR5cGU7XG5cdH1cblxuXHRvdmVycmlkZSBhY2NlcHRzKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBWb2lkVHlwZSBleHRlbmRzIFR5cGUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihQcmltaXRpdmVUeXBlcy5WT0lEKTtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBvdGhlciBpbnN0YW5jZW9mIFZvaWRUeXBlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBOdWxsVHlwZSBleHRlbmRzIFR5cGUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihQcmltaXRpdmVUeXBlcy5OVUxMKTtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBvdGhlciBpbnN0YW5jZW9mIE51bGxUeXBlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBOdWxsYWJsZVR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0aW5uZXI6IFR5cGU7XG5cblx0Y29uc3RydWN0b3IoaW5uZXI6IFR5cGUpIHtcblx0XHRzdXBlcihpbm5lci50b1N0cmluZygpICsgJz8nKTtcblx0XHR0aGlzLmlubmVyID0gaW5uZXI7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRpZiAob3RoZXIgPT09IFR5cGVzLk5VTEwpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChvdGhlciBpbnN0YW5jZW9mIE51bGxhYmxlVHlwZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuaW5uZXIuZXF1YWxzKG90aGVyLmlubmVyKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRvdmVycmlkZSBhY2NlcHRzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIG90aGVyID09PSBUeXBlcy5OVUxMIHx8IHRoaXMuaW5uZXIuYWNjZXB0cyhvdGhlcik7XG5cdH1cblxuXHRvdmVycmlkZSB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmlubmVyLnRvU3RyaW5nKCkgKyAnPyc7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFZOb2RlVHlwZSBleHRlbmRzIFR5cGUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigndm5vZGUnKTtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBvdGhlciBpbnN0YW5jZW9mIFZvaWRUeXBlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlcyB7XG5cdHN0YXRpYyByZWFkb25seSBOVU1CRVI6IFByaW1pdGl2ZVR5cGUgPSBuZXcgUHJpbWl0aXZlVHlwZShQcmltaXRpdmVUeXBlcy5OVU1CRVIpO1xuXHRzdGF0aWMgcmVhZG9ubHkgU1RSSU5HOiBQcmltaXRpdmVUeXBlID0gbmV3IFByaW1pdGl2ZVR5cGUoUHJpbWl0aXZlVHlwZXMuU1RSSU5HKTtcblx0c3RhdGljIHJlYWRvbmx5IEJPT0xFQU46IFByaW1pdGl2ZVR5cGUgPSBuZXcgUHJpbWl0aXZlVHlwZShQcmltaXRpdmVUeXBlcy5CT09MRUFOKTtcblx0c3RhdGljIHJlYWRvbmx5IE1JWEVEOiBNaXhlZFR5cGUgPSBuZXcgTWl4ZWRUeXBlKCk7XG5cdHN0YXRpYyByZWFkb25seSBOVUxMOiBOdWxsVHlwZSA9IG5ldyBOdWxsVHlwZSgpO1xuXHRzdGF0aWMgcmVhZG9ubHkgVk9JRDogVm9pZFR5cGUgPSBuZXcgVm9pZFR5cGUoKTtcblx0c3RhdGljIHJlYWRvbmx5IFZOT0RFOiBWTm9kZVR5cGUgPSBuZXcgVk5vZGVUeXBlKCk7XG5cblx0c3RhdGljIGdldFR5cGUobmFtZTogc3RyaW5nKTogVHlwZSB7XG5cdFx0aWYgKCFPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChQcmltaXRpdmVUeXBlcywgbmFtZS50b1VwcGVyQ2FzZSgpKSkge1xuXHRcdFx0dGhyb3dUeXBlRXJyb3IoYFVua25vd24gcHJpbWl0aXZlIHR5cGUgJHtuYW1lfS5gKTtcblx0XHR9XG5cblx0XHRjb25zdCB0eXBlczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0gVHlwZXM7XG5cdFx0cmV0dXJuIHR5cGVzW25hbWUudG9VcHBlckNhc2UoKV07XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGVWYXJpYWJsZSBleHRlbmRzIFR5cGUge1xuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcblx0XHRzdXBlcihuYW1lKTtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSkge1xuXHRcdHJldHVybiBvdGhlciBpbnN0YW5jZW9mIFR5cGVWYXJpYWJsZVxuXHRcdFx0JiYgdGhpcy5uYW1lID09PSBvdGhlci5uYW1lO1xuXHR9XG5cblx0b3ZlcnJpZGUgYWNjZXB0cygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVHlwZVBhcmFtZXRlclN5bWJvbCB7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblx0cmVhZG9ubHkgdmFyaWFibGVUeXBlOiBUeXBlVmFyaWFibGU7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnZhcmlhYmxlVHlwZSA9IG5ldyBUeXBlVmFyaWFibGUobmFtZSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpZWxkU3ltYm9sIHtcblx0cmVhZG9ubHkgbm9kZTogQVNURmllbGROb2RlO1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGZpZWxkVHlwZTogVHlwZTtcblx0cmVhZG9ubHkgaXNTdGF0aWM6IGJvb2xlYW4gPSBmYWxzZTtcblx0cmVhZG9ubHkgaXNQcml2YXRlOiBib29sZWFuID0gZmFsc2U7XG5cdHJlYWRvbmx5IGlzUHVibGljOiBib29sZWFuID0gZmFsc2U7XG5cdHJlYWRvbmx5IGlzUmVhZG9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcblx0b3duZXI6IENsYXNzU3ltYm9sIHwgSW50ZXJmYWNlU3ltYm9sIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3Iobm9kZTogQVNURmllbGROb2RlLCBmaWVsZFR5cGU6IFR5cGUpIHtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHRcdHRoaXMubmFtZSA9IG5vZGUubmFtZTtcblx0XHR0aGlzLmZpZWxkVHlwZSA9IGZpZWxkVHlwZTtcblx0XHR0aGlzLmlzU3RhdGljID0gbm9kZS5tb2RpZmllcnMuc3RhdGljO1xuXHRcdHRoaXMuaXNQcml2YXRlID0gbm9kZS5tb2RpZmllcnMucHJpdmF0ZTtcblx0XHR0aGlzLmlzUHVibGljID0gbm9kZS5tb2RpZmllcnMucHVibGljO1xuXHRcdHRoaXMuaXNSZWFkb25seSA9IG5vZGUubW9kaWZpZXJzLnJlYWRvbmx5O1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJTeW1ib2wge1xuXHRyZWFkb25seSBub2RlOiBBU1RQYXJhbWV0ZXJOb2RlIHwgbnVsbDtcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXHRyZWFkb25seSBwYXJhbWV0ZXJUeXBlOiBUeXBlO1xuXHRyZWFkb25seSBkZWZhdWx0VHlwZTogVHlwZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZTogVHlwZSwgZGVmYXVsdFZhbHVlOiBUeXBlIHwgbnVsbCA9IG51bGwsIG5vZGU6IEFTVFBhcmFtZXRlck5vZGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5wYXJhbWV0ZXJUeXBlID0gdHlwZTtcblx0XHR0aGlzLmRlZmF1bHRUeXBlID0gZGVmYXVsdFZhbHVlO1xuXHRcdHRoaXMubm9kZSA9IG5vZGU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE1ldGhvZFN5bWJvbCB7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblx0cmVhZG9ubHkgbm9kZTogQVNUTWV0aG9kTm9kZTtcblx0cmVhZG9ubHkgaXNTdGF0aWM6IGJvb2xlYW4gPSBmYWxzZTtcblx0cmVhZG9ubHkgaXNQcml2YXRlOiBib29sZWFuID0gZmFsc2U7XG5cdHJlYWRvbmx5IGlzUHVibGljOiBib29sZWFuID0gZmFsc2U7XG5cblx0dHlwZVBhcmFtZXRlclN5bWJvbHM6IFR5cGVQYXJhbWV0ZXJTeW1ib2xbXSA9IFtdO1xuXHRwYXJhbWV0ZXJTeW1ib2xzOiBQYXJhbWV0ZXJTeW1ib2xbXSA9IFtdO1xuXHRyZXR1cm5UeXBlOiBUeXBlID0gVHlwZXMuTUlYRUQ7XG5cblx0b3duZXI6IENsYXNzU3ltYm9sIHwgSW50ZXJmYWNlU3ltYm9sIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3Iobm9kZTogQVNUTWV0aG9kTm9kZSkge1xuXHRcdHRoaXMubmFtZSA9IG5vZGUubmFtZTtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHRcdHRoaXMuaXNTdGF0aWMgPSBub2RlLm1vZGlmaWVycy5zdGF0aWM7XG5cdFx0dGhpcy5pc1ByaXZhdGUgPSBub2RlLm1vZGlmaWVycy5wcml2YXRlO1xuXHRcdHRoaXMuaXNQdWJsaWMgPSBub2RlLm1vZGlmaWVycy5wdWJsaWM7XG5cdH1cblxuXHRnZXQgYm9keSgpOiBBU1ROb2RlW10ge1xuXHRcdHJldHVybiB0aGlzLm5vZGUuY2hpbGRyZW47XG5cdH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBPYmplY3RTeW1ib2wge1xuXHRuYW1lOiBzdHJpbmc7XG5cdHR5cGVQYXJhbWV0ZXJTeW1ib2xzOiBUeXBlUGFyYW1ldGVyU3ltYm9sW107XG5cdHN0YXRpY0ZpZWxkU3ltYm9sczogTWFwPHN0cmluZywgRmllbGRTeW1ib2w+O1xuXHRpbnN0YW5jZU1ldGhvZFN5bWJvbHM6IE1hcDxzdHJpbmcsIE1ldGhvZFN5bWJvbD47XG59XG5cbmV4cG9ydCBjbGFzcyBDbGFzc1N5bWJvbCBpbXBsZW1lbnRzIE9iamVjdFN5bWJvbCB7XG5cdHJlYWRvbmx5IG5vZGU6IEFTVENsYXNzTm9kZTtcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXHRyZWFkb25seSBzdXBlckNsYXNzOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuXHRzdXBlckNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCB8IG51bGwgPSBudWxsO1xuXHR0eXBlUGFyYW1ldGVyU3ltYm9sczogVHlwZVBhcmFtZXRlclN5bWJvbFtdID0gW107XG5cdGluc3RhbmNlRmllbGRTeW1ib2xzOiBNYXA8c3RyaW5nLCBGaWVsZFN5bWJvbD4gPSBuZXcgTWFwKCk7XG5cdHN0YXRpY0ZpZWxkU3ltYm9sczogTWFwPHN0cmluZywgRmllbGRTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRpbnN0YW5jZU1ldGhvZFN5bWJvbHM6IE1hcDxzdHJpbmcsIE1ldGhvZFN5bWJvbD4gPSBuZXcgTWFwKCk7XG5cdHN0YXRpY01ldGhvZFN5bWJvbHM6IE1hcDxzdHJpbmcsIE1ldGhvZFN5bWJvbD4gPSBuZXcgTWFwKCk7XG5cdGNvbnN0cnVjdG9yTWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wgfCBudWxsID0gbnVsbDtcblx0aW1wbGVtZW50c0ludGVyZmFjZXM6IEludGVyZmFjZVJlZlR5cGVbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKG5vZGU6IEFTVENsYXNzTm9kZSkge1xuXHRcdHRoaXMubm9kZSA9IG5vZGU7XG5cdFx0dGhpcy5uYW1lID0gbm9kZS5uYW1lO1xuXHRcdHRoaXMuc3VwZXJDbGFzcyA9IG5vZGUuc3VwZXJDbGFzcz8ubmFtZSA/PyBudWxsO1xuXHR9XG5cblx0cmVzb2x2ZUluc3RhbmNlRmllbGRTeW1ib2wobmFtZTogc3RyaW5nKTogRmllbGRTeW1ib2wgfCBudWxsIHtcblx0XHRpZiAodGhpcy5pbnN0YW5jZUZpZWxkU3ltYm9scy5oYXMobmFtZSkpIHtcblx0XHRcdHJldHVybiB0aGlzLmluc3RhbmNlRmllbGRTeW1ib2xzLmdldChuYW1lKSB8fCBudWxsO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnN1cGVyQ2xhc3MpIHtcblx0XHRcdHJldHVybiB0aGlzLnN1cGVyQ2xhc3NTeW1ib2w/LnJlc29sdmVJbnN0YW5jZUZpZWxkU3ltYm9sKG5hbWUpIHx8IG51bGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXNvbHZlU3RhdGljRmllbGRTeW1ib2wobmFtZTogc3RyaW5nKTogRmllbGRTeW1ib2wgfCBudWxsIHtcblx0XHRpZiAodGhpcy5zdGF0aWNGaWVsZFN5bWJvbHMuaGFzKG5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdGF0aWNGaWVsZFN5bWJvbHMuZ2V0KG5hbWUpIHx8IG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc3VwZXJDbGFzcykge1xuXHRcdFx0cmV0dXJuIHRoaXMuc3VwZXJDbGFzc1N5bWJvbD8ucmVzb2x2ZVN0YXRpY0ZpZWxkU3ltYm9sKG5hbWUpIHx8IG51bGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEludGVyZmFjZVN5bWJvbCBpbXBsZW1lbnRzIE9iamVjdFN5bWJvbCB7XG5cdHJlYWRvbmx5IG5vZGU6IEFTVEludGVyZmFjZU5vZGU7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblxuXHR0eXBlUGFyYW1ldGVyU3ltYm9sczogVHlwZVBhcmFtZXRlclN5bWJvbFtdID0gW107XG5cdHN0YXRpY0ZpZWxkU3ltYm9sczogTWFwPHN0cmluZywgRmllbGRTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRpbnN0YW5jZU1ldGhvZFN5bWJvbHM6IE1hcDxzdHJpbmcsIE1ldGhvZFN5bWJvbD4gPSBuZXcgTWFwKCk7XG5cdGV4dGVuZHNJbnRlcmZhY2VzOiBJbnRlcmZhY2VTeW1ib2xbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKG5vZGU6IEFTVEludGVyZmFjZU5vZGUpIHtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHRcdHRoaXMubmFtZSA9IG5vZGUubmFtZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xhc3NSZWZUeXBlIGV4dGVuZHMgVHlwZSB7XG5cdHJlYWRvbmx5IGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbDtcblx0cmVhZG9ubHkgdHlwZUFyZ3VtZW50czogVHlwZVtdO1xuXG5cdGNvbnN0cnVjdG9yKGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCwgdHlwZUFyZ3VtZW50czogVHlwZVtdID0gW10pIHtcblx0XHRzdXBlcihDbGFzc1JlZlR5cGUuZm9ybWF0U3ltYm9sTmFtZShjbGFzc1N5bWJvbC5uYW1lLCB0eXBlQXJndW1lbnRzKSk7XG5cdFx0dGhpcy5jbGFzc1N5bWJvbCA9IGNsYXNzU3ltYm9sO1xuXHRcdHRoaXMudHlwZUFyZ3VtZW50cyA9IHR5cGVBcmd1bWVudHM7XG5cdH1cblxuXHRzdGF0aWMgZm9ybWF0U3ltYm9sTmFtZShuYW1lOiBzdHJpbmcsIHR5cGVBcmd1bWVudHM6IFR5cGVbXSkge1xuXHRcdGlmICh0eXBlQXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIGBjbGFzc1JlZlR5cGUoJHtuYW1lfSlgO1xuXHRcdH1cblxuXHRcdHJldHVybiBgY2xhc3NSZWZUeXBlKCR7bmFtZX08JHt0eXBlQXJndW1lbnRzLm1hcCh0eXBlID0+IHR5cGUudG9TdHJpbmcoKSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKCcsICcpfT4pYDtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAob3RoZXIgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGVcblx0XHRcdCYmIG90aGVyLmNsYXNzU3ltYm9sID09PSB0aGlzLmNsYXNzU3ltYm9sKTtcblx0fVxuXG5cdG92ZXJyaWRlIGFjY2VwdHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRpZiAoIXRoaXMuZXF1YWxzKG90aGVyKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmIChvdGhlciBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSkge1xuXHRcdFx0aWYgKHRoaXMudHlwZUFyZ3VtZW50cy5sZW5ndGggIT09IG90aGVyLnR5cGVBcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnR5cGVBcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3Qgb3RoZXJUeXBlID0gb3RoZXIudHlwZUFyZ3VtZW50c1tpXTtcblxuXHRcdFx0XHRpZiAoIW90aGVyVHlwZSB8fCAhdGhpcy50eXBlQXJndW1lbnRzW2ldPy5hY2NlcHRzKG90aGVyVHlwZSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2VSZWZUeXBlIGV4dGVuZHMgVHlwZSB7XG5cdHJlYWRvbmx5IGludGVyZmFjZVN5bWJvbDogSW50ZXJmYWNlU3ltYm9sO1xuXHRyZWFkb25seSB0eXBlQXJndW1lbnRzOiBUeXBlW107XG5cblx0Y29uc3RydWN0b3IoaW50ZXJmYWNlU3ltYm9sOiBJbnRlcmZhY2VTeW1ib2wsIHR5cGVBcmd1bWVudHM6IFR5cGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoSW50ZXJmYWNlUmVmVHlwZS5mb3JtYXRTeW1ib2xOYW1lKGludGVyZmFjZVN5bWJvbC5uYW1lLCB0eXBlQXJndW1lbnRzKSk7XG5cdFx0dGhpcy5pbnRlcmZhY2VTeW1ib2wgPSBpbnRlcmZhY2VTeW1ib2w7XG5cdFx0dGhpcy50eXBlQXJndW1lbnRzID0gdHlwZUFyZ3VtZW50cztcblx0fVxuXG5cdHN0YXRpYyBmb3JtYXRTeW1ib2xOYW1lKG5hbWU6IHN0cmluZywgdHlwZUFyZ3VtZW50czogVHlwZVtdKTogc3RyaW5nIHtcblx0XHRpZiAodHlwZUFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBgaW50ZXJmYWNlUmVmVHlwZSgke25hbWV9KWA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGBpbnRlcmZhY2VSZWZUeXBlKCR7bmFtZX08JHt0eXBlQXJndW1lbnRzLm1hcCh0eXBlID0+IHR5cGUudG9TdHJpbmcoKSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbignLCAnKX0+KWA7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gKG90aGVyIGluc3RhbmNlb2YgSW50ZXJmYWNlUmVmVHlwZVxuXHRcdFx0JiYgb3RoZXIuaW50ZXJmYWNlU3ltYm9sID09PSB0aGlzLmludGVyZmFjZVN5bWJvbCk7XG5cdH1cblxuXHRvdmVycmlkZSBhY2NlcHRzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0aWYgKCF0aGlzLmVxdWFscyhvdGhlcikpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAob3RoZXIgaW5zdGFuY2VvZiBJbnRlcmZhY2VSZWZUeXBlKSB7XG5cdFx0XHRpZiAodGhpcy50eXBlQXJndW1lbnRzLmxlbmd0aCAhPT0gb3RoZXIudHlwZUFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHlwZUFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBvdGhlclR5cGUgPSBvdGhlci50eXBlQXJndW1lbnRzW2ldO1xuXG5cdFx0XHRcdGlmICghb3RoZXJUeXBlIHx8ICF0aGlzLnR5cGVBcmd1bWVudHNbaV0/LmFjY2VwdHMob3RoZXJUeXBlKSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIExhbWJkYVR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0cmVhZG9ubHkgcGFyYW1ldGVyU3ltYm9sczogUGFyYW1ldGVyU3ltYm9sW10gPSBbXTtcblx0cmVhZG9ubHkgcmV0dXJuVHlwZTogVHlwZTtcblxuXHRjb25zdHJ1Y3RvcihwYXJhbWV0ZXJzOiBQYXJhbWV0ZXJTeW1ib2xbXSwgcmV0dXJuVHlwZTogVHlwZSkge1xuXHRcdHN1cGVyKExhbWJkYVR5cGUuY3JlYXRlU2lnbmF0dXJlKHBhcmFtZXRlcnMsIHJldHVyblR5cGUpKTtcblx0XHR0aGlzLnBhcmFtZXRlclN5bWJvbHMgPSBwYXJhbWV0ZXJzO1xuXHRcdHRoaXMucmV0dXJuVHlwZSA9IHJldHVyblR5cGU7XG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlU2lnbmF0dXJlKHBhcmFtZXRlcnM6IFBhcmFtZXRlclN5bWJvbFtdLCByZXR1cm5UeXBlOiBUeXBlKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gYGxhbWJkYSgke3BhcmFtZXRlcnMubWFwKHBhcmFtZXRlciA9PiBwYXJhbWV0ZXIucGFyYW1ldGVyVHlwZS50b1N0cmluZygpKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKCcsICcpfSkgLT4gJHtyZXR1cm5UeXBlLnRvU3RyaW5nKCl9KWA7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRpZiAoIShvdGhlciBpbnN0YW5jZW9mIExhbWJkYVR5cGUpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucGFyYW1ldGVyU3ltYm9scy5sZW5ndGggIT09IG90aGVyLnBhcmFtZXRlclN5bWJvbHMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcmFtZXRlclN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IG90aGVyVHlwZSA9IG90aGVyLnBhcmFtZXRlclN5bWJvbHNbaV0/LnBhcmFtZXRlclR5cGU7XG5cblx0XHRcdGlmICghb3RoZXJUeXBlIHx8ICF0aGlzLnBhcmFtZXRlclN5bWJvbHNbaV0/LnBhcmFtZXRlclR5cGUuYWNjZXB0cyhvdGhlclR5cGUpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXR1cm5UeXBlLmFjY2VwdHMob3RoZXIucmV0dXJuVHlwZSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGVTY29wZSB7XG5cdHJlYWRvbmx5IHBhcmVudDogVHlwZVNjb3BlIHwgbnVsbDtcblx0cmVhZG9ubHkgdHlwZXM6IE1hcDxzdHJpbmcsIFR5cGU+ID0gbmV3IE1hcCgpO1xuXHRyZWFkb25seSB0eXBlQmluZGluZ3M6IE1hcDxzdHJpbmcsIFR5cGU+ID0gbmV3IE1hcCgpO1xuXG5cdGN1cnJlbnRPYmplY3RTeW1ib2w6IENsYXNzU3ltYm9sIHwgSW50ZXJmYWNlU3ltYm9sIHwgbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFR5cGVTY29wZSB8IG51bGwgPSBudWxsKSB7XG5cdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cdFx0dGhpcy5jdXJyZW50T2JqZWN0U3ltYm9sID0gcGFyZW50Py5jdXJyZW50T2JqZWN0U3ltYm9sID8/IG51bGw7XG5cdH1cblxuXHRkZWZpbmVUeXBlKG5hbWU6IHN0cmluZywgdHlwZTogVHlwZSk6IHZvaWQge1xuXHRcdHRoaXMudHlwZXMuc2V0KG5hbWUsIHR5cGUpO1xuXHR9XG5cblx0ZGVmaW5lVHlwZUJpbmRpbmcobmFtZTogc3RyaW5nLCB0eXBlVmFyaWFibGU6IFR5cGVWYXJpYWJsZSk6IHZvaWQge1xuXHRcdHRoaXMudHlwZUJpbmRpbmdzLnNldChuYW1lLCB0eXBlVmFyaWFibGUpO1xuXHR9XG5cblx0aGFzVHlwZShuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy50eXBlcy5oYXMobmFtZSkgfHwgdGhpcy5wYXJlbnQ/Lmhhc1R5cGUobmFtZSkgfHwgZmFsc2U7XG5cdH1cblxuXHRoYXNUeXBlQmluZGluZyhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy50eXBlQmluZGluZ3MuaGFzKG5hbWUpIHx8IHRoaXMucGFyZW50Py5oYXNUeXBlQmluZGluZyhuYW1lKSB8fCBmYWxzZTtcblx0fVxuXG5cdGdldFR5cGUobmFtZTogc3RyaW5nKTogVHlwZSB7XG5cdFx0aWYgKHRoaXMudHlwZXMuaGFzKG5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50eXBlcy5nZXQobmFtZSkgfHwgVHlwZXMuTlVMTDtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMucGFyZW50Py5nZXRUeXBlKG5hbWUpIHx8IFR5cGVzLk5VTEw7XG5cdH1cblxuXHRnZXRUeXBlQmluZGluZyhuYW1lOiBzdHJpbmcpOiBUeXBlIHtcblx0XHRpZiAodGhpcy50eXBlQmluZGluZ3MuaGFzKG5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50eXBlQmluZGluZ3MuZ2V0KG5hbWUpIHx8IFR5cGVzLk5VTEw7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnBhcmVudD8uZ2V0VHlwZUJpbmRpbmcobmFtZSkgfHwgVHlwZXMuTlVMTDtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gd3JhcFR5cGUodHlwZU5vZGU6IEFTVFR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIHNjb3BlOiBUeXBlU2NvcGUgfCBudWxsID0gbnVsbCk6IFR5cGUge1xuXHRsZXQgYmFzZVR5cGUgPSByZXNvbHZlQmFzZVR5cGUodHlwZU5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBzY29wZSk7XG5cdGlmIChiYXNlVHlwZSkge1xuXHRcdGlmICghKGJhc2VUeXBlIGluc3RhbmNlb2YgTnVsbGFibGVUeXBlKSAmJiB0eXBlTm9kZS5udWxsYWJsZSkge1xuXHRcdFx0cmV0dXJuIG5ldyBOdWxsYWJsZVR5cGUoYmFzZVR5cGUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBiYXNlVHlwZTtcblx0fVxuXG5cdHRocm93VHlwZUVycm9yKGBDb3VsZCBub3QgcmVzb2x2ZSB0eXBlICR7dHlwZU5vZGUubmFtZX0uYCwgdHlwZU5vZGUuc3Bhbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlQmFzZVR5cGUodHlwZU5vZGU6IEFTVFR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIHNjb3BlOiBUeXBlU2NvcGUgfCBudWxsID0gbnVsbCk6IFR5cGUge1xuXHRzd2l0Y2ggKHR5cGVOb2RlLmtpbmQpIHtcblx0XHRjYXNlIEFTVFR5cGVOb2RlLktJTkRfU0lNUExFOiB7XG5cdFx0XHRpZiAoc2NvcGUgJiYgc2NvcGUuaGFzVHlwZUJpbmRpbmcodHlwZU5vZGUubmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIHNjb3BlLmdldFR5cGVCaW5kaW5nKHR5cGVOb2RlLm5hbWUpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAob2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiByZXNvbHZlUmVmVHlwZSh0eXBlTm9kZSwgb2JqZWN0UmVnaXN0cnkpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoUHJpbWl0aXZlVHlwZXMuaGFzVHlwZSh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzb2x2ZVByaW1pdGl2ZVR5cGUodHlwZU5vZGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbmV3IFR5cGVWYXJpYWJsZSh0eXBlTm9kZS5uYW1lKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1RUeXBlTm9kZS5LSU5EX0dFTkVSSUM6IHtcblx0XHRcdGlmICghb2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0XHRcdHRocm93VHlwZUVycm9yKGBTeW1ib2wgJHt0eXBlTm9kZS5uYW1lfSBpcyBub3QgYSBjbGFzcyByZWZlcmVuY2UuYCwgdHlwZU5vZGUuc3Bhbik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzb2x2ZUdlbmVyaWNSZWZUeXBlKHR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeSk7XG5cdFx0fVxuXHRcdGNhc2UgQVNUVHlwZU5vZGUuS0lORF9MQU1CREE6IHtcblx0XHRcdHJldHVybiByZXNvbHZlTGFtYmRhVHlwZSh0eXBlTm9kZSwgb2JqZWN0UmVnaXN0cnkpO1xuXHRcdH1cblx0XHRkZWZhdWx0OiB7XG5cdFx0XHR0aHJvd1R5cGVFcnJvcihcblx0XHRcdFx0YEludmFsaWQgdHlwZSBhbm5vdGF0aW9uLCBraW5kICR7dHlwZU5vZGUua2luZH0uYCxcblx0XHRcdFx0dHlwZU5vZGUuc3BhblxuXHRcdFx0KTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVSZWZUeXBlKHR5cGVOb2RlOiBBU1RUeXBlTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogQ2xhc3NSZWZUeXBlIHwgSW50ZXJmYWNlUmVmVHlwZSB8IFR5cGUge1xuXHRpZiAodHlwZU5vZGUudHlwZUFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0dGhyb3dUeXBlRXJyb3IoYEdlbmVyaWMgY2xhc3MgJHt0eXBlTm9kZS5uYW1lfSBjYW5ub3QgaGF2ZSB0eXBlIGFyZ3VtZW50cy5gLCB0eXBlTm9kZS5zcGFuKTtcblx0fVxuXG5cdGlmIChvYmplY3RSZWdpc3RyeS50eXBlcy5jbGFzc1N5bWJvbHMuaGFzKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0cmV0dXJuIG5ldyBDbGFzc1JlZlR5cGUob2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2wodHlwZU5vZGUubmFtZSkpO1xuXHR9XG5cblx0aWYgKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmludGVyZmFjZVN5bWJvbHMuaGFzKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0cmV0dXJuIG5ldyBJbnRlcmZhY2VSZWZUeXBlKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldEludGVyYWNlU3ltYm9sKHR5cGVOb2RlLm5hbWUpKTtcblx0fVxuXG5cdHRocm93VHlwZUVycm9yKGBVbmtub3duIGNsYXNzIG9yIGludGVyZmFjZSAke3R5cGVOb2RlLm5hbWV9LmAsIHR5cGVOb2RlLnNwYW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUdlbmVyaWNSZWZUeXBlKHR5cGVOb2RlOiBBU1RUeXBlTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogQ2xhc3NSZWZUeXBlIHwgSW50ZXJmYWNlUmVmVHlwZSB8IFR5cGUge1xuXHRpZiAob2JqZWN0UmVnaXN0cnkudHlwZXMuY2xhc3NTeW1ib2xzLmhhcyh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdHJldHVybiBuZXcgQ2xhc3NSZWZUeXBlKFxuXHRcdFx0b2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2wodHlwZU5vZGUubmFtZSksXG5cdFx0XHR0eXBlTm9kZS50eXBlQXJndW1lbnRzLm1hcCh0eXBlQXJndW1lbnQgPT4gcmVzb2x2ZUJhc2VUeXBlKHR5cGVBcmd1bWVudCwgb2JqZWN0UmVnaXN0cnkpKVxuXHRcdCk7XG5cdH1cblxuXHRpZiAob2JqZWN0UmVnaXN0cnkudHlwZXMuaW50ZXJmYWNlU3ltYm9scy5oYXModHlwZU5vZGUubmFtZSkpIHtcblx0XHRyZXR1cm4gbmV3IEludGVyZmFjZVJlZlR5cGUoXG5cdFx0XHRvYmplY3RSZWdpc3RyeS50eXBlcy5nZXRJbnRlcmFjZVN5bWJvbCh0eXBlTm9kZS5uYW1lKSxcblx0XHRcdHR5cGVOb2RlLnR5cGVBcmd1bWVudHMubWFwKHR5cGVBcmd1bWVudCA9PiByZXNvbHZlQmFzZVR5cGUodHlwZUFyZ3VtZW50LCBvYmplY3RSZWdpc3RyeSkpXG5cdFx0KTtcblx0fVxuXG5cdHRocm93VHlwZUVycm9yKGBVbmtub3duIGNsYXNzIG9yIGludGVyZmFjZSAke3R5cGVOb2RlLm5hbWV9LmAsIHR5cGVOb2RlLnNwYW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVByaW1pdGl2ZVR5cGUodHlwZU5vZGU6IEFTVFR5cGVOb2RlKTogVHlwZSB7XG5cdHJldHVybiBUeXBlcy5nZXRUeXBlKHR5cGVOb2RlLm5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUxhbWJkYVR5cGUodHlwZU5vZGU6IEFTVFR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIHNjb3BlOiBUeXBlU2NvcGUgfCBudWxsID0gbnVsbCk6IExhbWJkYVR5cGUge1xuXHRjb25zdCBwYXJhbWV0ZXJTeW1ib2xzID0gdHlwZU5vZGUucGFyYW1ldGVyVHlwZXMubWFwKFxuXHRcdHR5cGVBbm5vdGF0aW9uID0+IHtcblx0XHRcdHJldHVybiBuZXcgUGFyYW1ldGVyU3ltYm9sKFxuXHRcdFx0XHR0eXBlQW5ub3RhdGlvbi5uYW1lLFxuXHRcdFx0XHR3cmFwVHlwZSh0eXBlQW5ub3RhdGlvbiwgb2JqZWN0UmVnaXN0cnksIHNjb3BlKVxuXHRcdFx0KTtcblx0XHR9XG5cdCk7XG5cblx0cmV0dXJuIG5ldyBMYW1iZGFUeXBlKFxuXHRcdHBhcmFtZXRlclN5bWJvbHMsXG5cdFx0dHlwZU5vZGUucmV0dXJuVHlwZVxuXHRcdFx0PyB3cmFwVHlwZSh0eXBlTm9kZS5yZXR1cm5UeXBlLCBvYmplY3RSZWdpc3RyeSwgc2NvcGUpXG5cdFx0XHQ6IFR5cGVzLk1JWEVEXG5cdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdGl0dXRlVHlwZSh0eXBlOiBUeXBlLCBzdWJzdGl0dXRpb25NYXA6IE1hcDxzdHJpbmcsIFR5cGU+KTogVHlwZSB7XG5cdGlmICh0eXBlIGluc3RhbmNlb2YgVHlwZVZhcmlhYmxlKSB7XG5cdFx0cmV0dXJuIHN1YnN0aXR1dGlvbk1hcC5nZXQodHlwZS5uYW1lKSA/PyB0eXBlO1xuXHR9XG5cblx0aWYgKHR5cGUgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUpIHtcblx0XHRyZXR1cm4gbmV3IENsYXNzUmVmVHlwZShcblx0XHRcdHR5cGUuY2xhc3NTeW1ib2wsXG5cdFx0XHR0eXBlLnR5cGVBcmd1bWVudHMubWFwKHR5cGVBcmd1bWVudCA9PiBzdWJzdGl0dXRlVHlwZSh0eXBlQXJndW1lbnQsIHN1YnN0aXR1dGlvbk1hcCkpXG5cdFx0KTtcblx0fVxuXG5cdGlmICh0eXBlIGluc3RhbmNlb2YgTnVsbGFibGVUeXBlKSB7XG5cdFx0cmV0dXJuIG5ldyBOdWxsYWJsZVR5cGUoc3Vic3RpdHV0ZVR5cGUodHlwZS5pbm5lciwgc3Vic3RpdHV0aW9uTWFwKSk7XG5cdH1cblxuXHRyZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkVHlwZVN1YnN0aXR1dGlvbk1hcCh0eXBlUGFyYW1ldGVyczogVHlwZVBhcmFtZXRlclN5bWJvbFtdLCB0eXBlQXJndW1lbnRzOiBUeXBlW10pOiBNYXA8c3RyaW5nLCBUeXBlPiB7XG5cdGNvbnN0IHN1YnN0aXR1dGlvbk1hcCA9IG5ldyBNYXAoKTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHR5cGVQYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgdHlwZVBhcmFtZXRlcjogVHlwZVBhcmFtZXRlclN5bWJvbCB8IG51bGwgPSB0eXBlUGFyYW1ldGVyc1tpXSB8fCBudWxsO1xuXHRcdGNvbnN0IHR5cGVBcmd1bWVudDogVHlwZSB8IG51bGwgPSB0eXBlQXJndW1lbnRzW2ldIHx8IG51bGw7XG5cblx0XHRpZiAodHlwZVBhcmFtZXRlciAmJiB0eXBlQXJndW1lbnQpIHtcblx0XHRcdHN1YnN0aXR1dGlvbk1hcC5zZXQodHlwZVBhcmFtZXRlci5uYW1lLCB0eXBlQXJndW1lbnQpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdWJzdGl0dXRpb25NYXA7XG59XG4iLAogICAgImltcG9ydCB7Q2xhc3NSZWZUeXBlLCBUeXBlLCBUeXBlc30gZnJvbSBcIi4vdHlwZV9vYmplY3RzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB7dGhyb3dSdW50aW1lRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcblxuZXhwb3J0IGNsYXNzIEF1dG9ib3hlZFR5cGVzIHtcblx0c3RhdGljIE5VTUJFUjogc3RyaW5nID0gJ051bWJlcic7XG5cdHN0YXRpYyBTVFJJTkc6IHN0cmluZyA9ICdTdHJpbmcnO1xuXHRzdGF0aWMgQk9PTEVBTjogc3RyaW5nID0gJ0Jvb2xlYW4nO1xuXG5cdHN0YXRpYyBDTEFTU05BTUVfTUFQOiB7IFtzOiBzdHJpbmddOiBzdHJpbmc7IH0gPSB7XG5cdFx0bnVtYmVyOiBBdXRvYm94ZWRUeXBlcy5OVU1CRVIsXG5cdFx0c3RyaW5nOiBBdXRvYm94ZWRUeXBlcy5TVFJJTkcsXG5cdFx0Ym9vbGVhbjogQXV0b2JveGVkVHlwZXMuQk9PTEVBTlxuXHR9O1xuXG5cdHN0YXRpYyBnZXRDbGFzc05hbWUoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdGNvbnN0IGNsYXNzTmFtZSA9IEF1dG9ib3hlZFR5cGVzLkNMQVNTTkFNRV9NQVBba2V5XTtcblx0XHRpZiAoIWNsYXNzTmFtZSkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYE5vIGNsYXNzIGZvdW5kIGZvciBwcmltaXRpdmUgdHlwZSAke2tleX0uYCk7XG5cdFx0fVxuXHRcdHJldHVybiBjbGFzc05hbWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9ib3hpbmcge1xuXHRzdGF0aWMgQ0xBU1NOQU1FX01BUDogTWFwPFR5cGUsIHN0cmluZz4gPSBuZXcgTWFwKFxuXHRcdFtcblx0XHRcdFtUeXBlcy5OVU1CRVIsIEF1dG9ib3hlZFR5cGVzLk5VTUJFUl0sXG5cdFx0XHRbVHlwZXMuU1RSSU5HLCBBdXRvYm94ZWRUeXBlcy5TVFJJTkddLFxuXHRcdFx0W1R5cGVzLkJPT0xFQU4sIEF1dG9ib3hlZFR5cGVzLkJPT0xFQU5dXG5cdFx0XVxuXHQpO1xuXG5cdHN0YXRpYyBhdXRvYm94SWZOZWVkZWQob2JqZWN0VHlwZTogVHlwZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogQ2xhc3NSZWZUeXBlIHwgVHlwZSB7XG5cdFx0Y29uc3QgY2xhc3NOYW1lID0gQXV0b2JveGluZy5DTEFTU05BTUVfTUFQLmdldChvYmplY3RUeXBlKTtcblx0XHRpZiAoY2xhc3NOYW1lKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENsYXNzUmVmVHlwZShvYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChjbGFzc05hbWUpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gb2JqZWN0VHlwZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge1xuXHRDbGFzc0RlZmluaXRpb24sXG5cdENsYXNzTWV0aG9kRGVmaW5pdGlvbixcblx0RW52aXJvbm1lbnQsXG5cdEV4ZWN1dGlvblN0b3AsXG5cdEluc3RhbmNlLFxuXHRSZXR1cm5WYWx1ZVxufSBmcm9tIFwiLi9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuaW1wb3J0IHtcblx0QVNUQW5ub3RhdGlvbk5vZGUsXG5cdEFTVEFycmF5Tm9kZSxcblx0QVNUQXNzaWdubWVudE5vZGUsXG5cdEFTVEJpbmFyeU5vZGUsXG5cdEFTVENhbGxOb2RlLFxuXHRBU1RDbGFzc05vZGUsXG5cdEFTVEV4cHJlc3Npb25Ob2RlLFxuXHRBU1RGb3JlYWNoTm9kZSxcblx0QVNUSWZOb2RlLFxuXHRBU1RJbmRleE5vZGUsXG5cdEFTVExhbWJkYU5vZGUsXG5cdEFTVE1hdGNoQ2FzZU5vZGUsXG5cdEFTVE1hdGNoTm9kZSxcblx0QVNUTWVtYmVyTm9kZSxcblx0QVNUTWV0aG9kTm9kZSxcblx0QVNUTmV3Tm9kZSxcblx0QVNUTm9kZSxcblx0QVNUTm9kZVR5cGUsXG5cdEFTVFBhcmFtZXRlck5vZGUsXG5cdEFTVFJldHVybk5vZGUsXG5cdEFTVFR5cGVOb2RlLFxuXHRBU1RVbmFyeU5vZGUsXG5cdEFTVFZhcmlhYmxlTm9kZSxcblx0QVNUVkRvbU5vZGUsXG5cdEFTVFZEb21UZXh0Tm9kZVxufSBmcm9tIFwiLi4vYXN0XCI7XG5pbXBvcnQge0dSQU1NQVIsIFRZUEVfRU5VTX0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcbmltcG9ydCB7TmF0aXZlQ2xhc3Nlc30gZnJvbSBcIi4uLy4uL2xpYnJhcnkvbmF0aXZlX2NsYXNzZXNcIjtcbmltcG9ydCB7TmF0aXZlRnVuY3Rpb24sIE5hdGl2ZUZ1bmN0aW9ucywgTmF0aXZlRnVuY3Rpb25UeXBlUmVnaXN0cnl9IGZyb20gXCIuLi8uLi9saWJyYXJ5L25hdGl2ZV9mdW5jdGlvbnNcIjtcbmltcG9ydCB7Y2FzdFZhbHVlLCBmcm9tTHlyYVZhbHVlLCBMeXJhTmF0aXZlT2JqZWN0LCByZXR1cm5WYWx1ZSwgd3JhcE5hdGl2ZUluc3RhbmNlfSBmcm9tIFwiLi9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge3Rocm93UnVudGltZUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQge0F1dG9ib3hlZFR5cGVzfSBmcm9tIFwiLi4vdHlwZXMvYXV0b2JveGluZ1wiO1xuaW1wb3J0IHtMeXJhQXJyYXl9IGZyb20gXCIuLi8uLi9saWJyYXJ5L2NsYXNzZXMvYXJyYXlcIjtcbmltcG9ydCB0eXBlIHtWTm9kZX0gZnJvbSBcIi4uL3Zkb20vdmRvbVwiO1xuaW1wb3J0IHR5cGUge0V2ZW50UGlwZWxpbmV9IGZyb20gXCIuLi9ldmVudC9waXBlbGluZVwiO1xuXG5jb25zdCBuYXRpdmVDbGFzc2VzID0gbmV3IE5hdGl2ZUNsYXNzZXMoKTtcbmNvbnN0IG5hdGl2ZUZ1bmN0aW9ucyA9IG5ldyBOYXRpdmVGdW5jdGlvbnMoKTtcbmNvbnN0IGdsb2JhbEZ1bmN0aW9ucyA9IG5hdGl2ZUZ1bmN0aW9ucy5nZXRHbG9iYWxGdW5jdGlvbnMoKTtcbmNvbnN0IGdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5OiBOYXRpdmVGdW5jdGlvblR5cGVSZWdpc3RyeSA9IG5hdGl2ZUZ1bmN0aW9ucy5nZXRHbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeSgpO1xuXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RGdW5jdGlvbkNhbGwge1xuXHRub2RlOiBBU1ROb2RlO1xuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cdGZ1bmN0aW9uRW52OiBFbnZpcm9ubWVudDtcblx0ZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZTtcblxuXHRjb25zdHJ1Y3Rvcihub2RlOiBBU1ROb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGZ1bmN0aW9uRW52OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSkge1xuXHRcdHRoaXMubm9kZSA9IG5vZGU7XG5cdFx0dGhpcy5vYmplY3RSZWdpc3RyeSA9IG9iamVjdFJlZ2lzdHJ5O1xuXHRcdHRoaXMuZnVuY3Rpb25FbnYgPSBmdW5jdGlvbkVudjtcblx0XHR0aGlzLmV2ZW50UGlwZWxpbmUgPSBldmVudFBpcGVsaW5lO1xuXHR9XG5cblx0Z2V0QVNUQ2FsbE5vZGUoKTogQVNUQ2FsbE5vZGUge1xuXHRcdGlmICghKHRoaXMubm9kZSBpbnN0YW5jZW9mIEFTVENhbGxOb2RlKSkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgbmF0aXZlIGZ1bmN0aW9uIGNhbGwgJHt0aGlzLm5vZGUudHlwZX0uYCwgdGhpcy5ub2RlLnNwYW4pO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5ub2RlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge0FTVExhbWJkYU5vZGV9XG5cdCAqL1xuXHRnZXRBU1RMYW1iZGFOb2RlKCk6IEFTVExhbWJkYU5vZGUge1xuXHRcdGlmICghKHRoaXMubm9kZSBpbnN0YW5jZW9mIEFTVExhbWJkYU5vZGUpKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBsYW1iZGEgY2FsbCAke3RoaXMubm9kZS50eXBlfS5gLCB0aGlzLm5vZGUuc3Bhbik7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLm5vZGU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIExhbWJkYUZ1bmN0aW9uQ2FsbCBleHRlbmRzIEFic3RyYWN0RnVuY3Rpb25DYWxsIHtcblx0ZXZhbENhbGwodGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwsIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcblx0XHRjb25zdCBub2RlOiBBU1RMYW1iZGFOb2RlID0gdGhpcy5nZXRBU1RMYW1iZGFOb2RlKCk7XG5cdFx0Y29uc3QgY2xvc3VyZUVudiA9IG5ldyBFbnZpcm9ubWVudCh0aGlzLmZ1bmN0aW9uRW52KTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5wYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBwYXJhbWV0ZXI6IEFTVFBhcmFtZXRlck5vZGUgfCBudWxsID0gbm9kZS5wYXJhbWV0ZXJzW2ldIHx8IG51bGw7XG5cdFx0XHRpZiAoIXBhcmFtZXRlcikge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGNsb3N1cmVFbnYuZGVmaW5lKHBhcmFtZXRlci5uYW1lLCBhcmdzW2ldKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZhbFJldHVybihcblx0XHRcdG5vZGUuY2hpbGRyZW4sXG5cdFx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0Y2xvc3VyZUVudixcblx0XHRcdHRoaXMuZXZlbnRQaXBlbGluZSxcblx0XHRcdHRoaXNWYWx1ZSxcblx0XHRcdG5vZGUucmV0dXJuVHlwZVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE5hdGl2ZUZ1bmN0aW9uQ2FsbCBleHRlbmRzIEFic3RyYWN0RnVuY3Rpb25DYWxsIHtcblx0ZXZhbENhbGwodGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwsIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcblx0XHRjb25zdCBjYWxsTm9kZTogQVNUQ2FsbE5vZGUgPSB0aGlzLmdldEFTVENhbGxOb2RlKCk7XG5cblx0XHRsZXQgcmVzdWx0OiBhbnkgPSB0aGlzLnJlc29sdmVDYWxsKHRoaXNWYWx1ZSlbY2FsbE5vZGUuY2FsbGVlLm5hbWVdKC4uLmFyZ3MpO1xuXHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRyZXN1bHQgPSB3cmFwTmF0aXZlSW5zdGFuY2UocmVzdWx0LCB0aGlzLm9iamVjdFJlZ2lzdHJ5KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0ID0gcmV0dXJuVmFsdWUocmVzdWx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZhbFJldHVybihcblx0XHRcdFtyZXN1bHRdLFxuXHRcdFx0dGhpcy5vYmplY3RSZWdpc3RyeSxcblx0XHRcdHRoaXMuZnVuY3Rpb25FbnYsXG5cdFx0XHR0aGlzLmV2ZW50UGlwZWxpbmUsXG5cdFx0XHR0aGlzVmFsdWUsXG5cdFx0XHR0aGlzLmxvb2t1cEZ1bmN0aW9uVHlwZShjYWxsTm9kZS5jYWxsZWUubmFtZSkucmV0dXJuVHlwZVxuXHRcdCk7XG5cdH1cblxuXHRsb29rdXBGdW5jdGlvblR5cGUobmFtZTogc3RyaW5nKTogTmF0aXZlRnVuY3Rpb24ge1xuXHRcdHJldHVybiBnbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeS5nZXQobmFtZSk7XG5cdH1cblxuXHRyZXNvbHZlQ2FsbCh0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCk6IGFueSB7XG5cdFx0Y29uc3Qgbm9kZTogQVNUQ2FsbE5vZGUgfCBudWxsID0gdGhpcy5nZXRBU1RDYWxsTm9kZSgpO1xuXHRcdGlmIChub2RlID09PSBudWxsKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcignSW52YWxpZCBmdW5jdGlvbiBjYWxsLicpO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmFsRXhwcmVzc2lvbihub2RlLmNhbGxlZSwgdGhpcy5vYmplY3RSZWdpc3RyeSwgdGhpcy5mdW5jdGlvbkVudiwgdGhpcy5ldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck5hdGl2ZUNsYXNzZXMob2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQpOiB2b2lkIHtcblx0Zm9yIChjb25zdCBuYXRpdmVDbGFzcyBvZiBuYXRpdmVDbGFzc2VzLnJlZ2lzdHJ5LnZhbHVlcygpKSB7XG5cdFx0aWYgKG5hdGl2ZUNsYXNzLmlzQXV0b2xvYWRBYmxlKSB7XG5cdFx0XHRjb25zdCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uID0gbmF0aXZlQ2xhc3MuZ2V0Q2xhc3NEZWZpbml0aW9uKCk7XG5cdFx0XHRvYmplY3RSZWdpc3RyeS5jbGFzc2VzLnNldChuYXRpdmVDbGFzcy5uYW1lLCBjbGFzc0RlZik7XG5cdFx0XHRlbnZpcm9ubWVudC5kZWZpbmUobmF0aXZlQ2xhc3MubmFtZSwgY2xhc3NEZWYpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJOYXRpdmVGdW5jdGlvbnMoZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogdm9pZCB7XG5cdGZvciAoY29uc3QgbmFtZSBpbiBnbG9iYWxGdW5jdGlvbnMpIHtcblx0XHRjb25zdCBnbG9iYWxGdW5jdGlvbjogYW55ID0gZ2xvYmFsRnVuY3Rpb25zW25hbWVdO1xuXHRcdGlmICghZ2xvYmFsRnVuY3Rpb24pIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKCdHbG9iYWwgZnVuY3Rpb24gaXMgbnVsbC4nKTtcblx0XHR9XG5cdFx0ZW52aXJvbm1lbnQuZGVmaW5lKG5hbWUsIGdsb2JhbEZ1bmN0aW9ucyk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxOb2RlKFxuXHRub2RlOiBBU1ROb2RlLFxuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksXG5cdGVudmlyb25tZW50OiBFbnZpcm9ubWVudCxcblx0ZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSxcblx0dGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsXG4pOiBhbnkge1xuXHRpZiAobm9kZS5pc0V4cHJlc3Npb24pIHtcblx0XHRyZXR1cm4gbmV3IFJldHVyblZhbHVlKGV2YWxFeHByZXNzaW9uKG5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKSk7XG5cdH1cblxuXHRzd2l0Y2ggKG5vZGUudHlwZSkge1xuXHRcdGNhc2UgQVNUTm9kZVR5cGUuUFJPR1JBTU06IHtcblx0XHRcdGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuXHRcdFx0XHRldmFsTm9kZShjaGlsZCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuSU1QT1JUOlxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuSU5URVJGQUNFOiB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5DTEFTUzoge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RDbGFzc05vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxDbGFzcyhub2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgY2xhc3Mgbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5WQVJJQUJMRToge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RWYXJpYWJsZU5vZGUpIHtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBub2RlLmluaXRcblx0XHRcdFx0XHQ/IGV2YWxFeHByZXNzaW9uKG5vZGUuaW5pdCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpXG5cdFx0XHRcdFx0OiBudWxsO1xuXHRcdFx0XHRlbnZpcm9ubWVudC5kZWZpbmUobm9kZS5uYW1lLCB2YWx1ZSk7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgdmFyaWFibGUgbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5JRjoge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RJZk5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxJZihub2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBpZiBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLk1BVENIOiB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVE1hdGNoTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbE1hdGNoKG5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIG1hdGNoIG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuRk9SRUFDSDoge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RGb3JlYWNoTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbEZvcmVhY2gobm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgZm9yZWFjaCBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLlZET006IHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUVkRvbU5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxWRG9tTm9kZShub2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBmb3JlYWNoIG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuRVhQUkVTU0lPTjoge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RFeHByZXNzaW9uTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbEV4cHJlc3Npb24obm9kZS5leHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBleHByZXNzaW9uIG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuUkVUVVJOOiB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVFJldHVybk5vZGUpIHtcblx0XHRcdFx0Y29uc3QgdmFsdWU6IGFueSA9IG5vZGUuYXJndW1lbnRcblx0XHRcdFx0XHQ/IGV2YWxFeHByZXNzaW9uKG5vZGUuYXJndW1lbnQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKVxuXHRcdFx0XHRcdDogbnVsbDtcblx0XHRcdFx0cmV0dXJuIG5ldyBSZXR1cm5WYWx1ZSh2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCByZXR1cm4gbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0ZGVmYXVsdDoge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVuaGFuZGxlZCBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlLnNwYW4pO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0RW1wdHlJbnN0YW5jZShub2RlOiBBU1RDbGFzc05vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IEluc3RhbmNlIHtcblx0bGV0IGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb247XG5cblx0aWYgKG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuaGFzKG5vZGUubmFtZSkpIHtcblx0XHRjbGFzc0RlZiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KG5vZGUubmFtZSk7XG5cdH0gZWxzZSB7XG5cdFx0Y2xhc3NEZWYgPSBDbGFzc0RlZmluaXRpb24uZnJvbUFTVChub2RlKTtcblx0XHRvYmplY3RSZWdpc3RyeS5jbGFzc2VzLnNldChub2RlLm5hbWUsIGNsYXNzRGVmKTtcblx0fVxuXG5cdHJldHVybiBjbGFzc0RlZi5jb25zdHJ1Y3RFbXB0eUluc3RhbmNlKG9iamVjdFJlZ2lzdHJ5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdE5hdGl2ZUluc3RhbmNlKGV4cHI6IEFTVE5ld05vZGUsIGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogSW5zdGFuY2Uge1xuXHRyZXR1cm4gY2xhc3NEZWYuY29uc3RydWN0TmF0aXZlSW5zdGFuY2VCeU5ld05vZGUoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEluc3RhbmNlKGV4cHI6IEFTVE5ld05vZGUsIGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogSW5zdGFuY2Uge1xuXHRyZXR1cm4gY2xhc3NEZWYuY29uc3RydWN0SW5zdGFuY2VCeU5ld05vZGUoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxDbGFzcyhub2RlOiBBU1RDbGFzc05vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogdm9pZCB7XG5cdGNvbnN0IGluc3RhbmNlOiBJbnN0YW5jZSA9IGNvbnN0cnVjdEVtcHR5SW5zdGFuY2Uobm9kZSwgb2JqZWN0UmVnaXN0cnkpO1xuXG5cdGluc3RhbmNlLmluaXRpYWxpemVJbnN0YW5jZUZpZWxkcyhvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXG5cdGVudmlyb25tZW50LmRlZmluZShub2RlLm5hbWUsIGluc3RhbmNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxOZXcoZXhwcjogQVNUTmV3Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiBJbnN0YW5jZSB7XG5cdGlmICghb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5oYXMoZXhwci5uYW1lKSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBVbmtub3duIGNsYXNzICR7ZXhwci5uYW1lfS5gLCBleHByLnNwYW4pO1xuXHR9XG5cblx0Y29uc3QgY2xhc3NEZWYgPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChleHByLm5hbWUpO1xuXHRpZiAoY2xhc3NEZWYubmF0aXZlSW5zdGFuY2UpIHtcblx0XHRyZXR1cm4gY29uc3RydWN0TmF0aXZlSW5zdGFuY2UoZXhwciwgY2xhc3NEZWYsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG5cdH1cblxuXHRyZXR1cm4gY29uc3RydWN0SW5zdGFuY2UoZXhwciwgY2xhc3NEZWYsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsRXhwcmVzc2lvbihleHByOiBBU1ROb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0c3dpdGNoIChleHByLnR5cGUpIHtcblx0XHRjYXNlIEFTVE5vZGVUeXBlLlNUUklORzpcblx0XHRjYXNlIEFTVE5vZGVUeXBlLk5VTUJFUjpcblx0XHRjYXNlIEFTVE5vZGVUeXBlLkJPT0xFQU46IHtcblx0XHRcdHJldHVybiBleHByLnZhbHVlO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLk5VTEw6IHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLklERU5USUZJRVI6IHtcblx0XHRcdHJldHVybiBlbnZpcm9ubWVudC5nZXQoZXhwci5uYW1lKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5USElTOiB7XG5cdFx0XHRpZiAoIXRoaXNWYWx1ZSkge1xuXHRcdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgdGhpcyB1c2VkIG91dHNpZGUgb2YgbWV0aG9kLmAsIGV4cHIuc3Bhbik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpc1ZhbHVlO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkJJTkFSWToge1xuXHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RCaW5hcnlOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsQmluYXJ5KGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGJpbmFyeSBleHByZXNzaW9uICR7ZXhwci50eXBlfWApO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLlVOQVJZOiB7XG5cdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVFVuYXJ5Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbFVuYXJ5KGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIHVuYXJ5IGV4cHJlc3Npb24gJHtleHByLnR5cGV9LmAsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuQVNTSUdOTUVOVDoge1xuXHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RBc3NpZ25tZW50Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbEFzc2lnbihleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBhc3NpZ25tZW50IGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5NRU1CRVI6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbE1lbWJlcihleHByLCBlbnZpcm9ubWVudCk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBtZW1iZXIgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkNBTEw6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQ2FsbE5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxDYWxsKGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGNhbGwgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLlZET006IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUVkRvbU5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxWRG9tTm9kZShleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBjYWxsIGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5ORVc6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTmV3Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbE5ldyhleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgY2FsbCBleHByZXNzaW9uICR7ZXhwci50eXBlfWAsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuQVJSQVk6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQXJyYXlOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsQXJyYXkoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgYXJyYXkgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLklOREVYOiB7XG5cdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVEluZGV4Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbEluZGV4KGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGluZGV4IGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5MQU1CREE6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTGFtYmRhTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbExhbWJkYShleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgbGFtYmRhIGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0ZGVmYXVsdDoge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVuaGFuZGxlZCBleHByZXNzaW9uICR7ZXhwci50eXBlfS5gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEJpbmFyeShleHByOiBBU1RCaW5hcnlOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0Y29uc3QgbGVmdDogYW55ID0gY2FzdFZhbHVlKGV2YWxFeHByZXNzaW9uKGV4cHIubGVmdCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpKVxuXHRjb25zdCByaWdodDogYW55ID0gY2FzdFZhbHVlKGV2YWxFeHByZXNzaW9uKGV4cHIucmlnaHQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKSlcblxuXHRzd2l0Y2ggKGV4cHIub3BlcmF0b3IpIHtcblx0XHRjYXNlIEdSQU1NQVIuUExVUzoge1xuXHRcdFx0cmV0dXJuIGxlZnQgKyByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLk1JTlVTOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCAtIHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTVVMVElQTFk6IHtcblx0XHRcdHJldHVybiBsZWZ0ICogcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5ESVZJREU6IHtcblx0XHRcdHJldHVybiBsZWZ0IC8gcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5NT0RVTFVTOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCAlIHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTEVTU19USEFOOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCA8IHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuR1JFQVRFUl9USEFOOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCA+IHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTEVTU19FUVVBTDoge1xuXHRcdFx0cmV0dXJuIGxlZnQgPD0gcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5HUkVBVEVSX0VRVUFMOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCA+PSByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkVRVUFMOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCA9PT0gcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5OT1RfRVFVQUw6IHtcblx0XHRcdHJldHVybiBsZWZ0ICE9PSByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkFORDoge1xuXHRcdFx0cmV0dXJuIGxlZnQgJiYgcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5PUjoge1xuXHRcdFx0cmV0dXJuIGxlZnQgfHwgcmlnaHQ7XG5cdFx0fVxuXHRcdGRlZmF1bHQ6IHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBVbmtub3duIG9wZXJhdG9yICR7ZXhwci5vcGVyYXRvcn1gKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxBcnJheShleHByOiBBU1RBcnJheU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBJbnN0YW5jZSB7XG5cdGNvbnN0IHZhbHVlczogYW55W10gPSBbXTtcblx0Zm9yIChjb25zdCBlbGVtIG9mIGV4cHIuZWxlbWVudHMpIHtcblx0XHR2YWx1ZXMucHVzaChldmFsRXhwcmVzc2lvbihlbGVtLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSkpO1xuXHR9XG5cblx0Y29uc3QgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KCdBcnJheScpO1xuXHRjb25zdCBpbnN0YW5jZTogSW5zdGFuY2UgPSBjbGFzc0RlZi5jb25zdHJ1Y3RFbXB0eUluc3RhbmNlKG9iamVjdFJlZ2lzdHJ5KTtcblx0aW5zdGFuY2UuX19uYXRpdmVJbnN0YW5jZSA9IG5ldyBjbGFzc0RlZi5uYXRpdmVJbnN0YW5jZShmcm9tTHlyYVZhbHVlKHZhbHVlcykpO1xuXG5cdHJldHVybiBpbnN0YW5jZTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEluZGV4KGV4cHI6IEFTVEluZGV4Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCkge1xuXHRpZiAoIWV4cHIub2JqZWN0KSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYEluZGV4IGFjY2VzcyBvbiBudWxsLmAsIGV4cHIuc3Bhbik7XG5cdH1cblxuXHRpZiAoIWV4cHIuaW5kZXgpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgQWNjZXNzIHdpdGggdW5zcGVjaWZpYyBpbmRleC5gLCBleHByLnNwYW4pO1xuXHR9XG5cblx0Y29uc3Qgb2JqZWN0ID0gZXZhbEV4cHJlc3Npb24oZXhwci5vYmplY3QsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0Y29uc3QgaW5kZXggPSBldmFsRXhwcmVzc2lvbihleHByLmluZGV4LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cblx0aWYgKCEob2JqZWN0IGluc3RhbmNlb2YgTHlyYUFycmF5IHx8IG9iamVjdC5fX25hdGl2ZUluc3RhbmNlIGluc3RhbmNlb2YgTHlyYUFycmF5KSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKCdJbmRleCBhY2Nlc3Mgb24gbm9uLWFycmF5JywgZXhwci5zcGFuKTtcblx0fVxuXG5cdGNvbnN0IHRhcmdldCA9IG9iamVjdCBpbnN0YW5jZW9mIEx5cmFBcnJheSA/IG9iamVjdCA6IG9iamVjdC5fX25hdGl2ZUluc3RhbmNlO1xuXHRjb25zdCB2YWx1ZSA9IHRhcmdldC52YWx1ZXNbaW5kZXhdO1xuXG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRyZXR1cm4gd3JhcE5hdGl2ZUluc3RhbmNlKHZhbHVlLCBvYmplY3RSZWdpc3RyeSk7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsTGFtYmRhKG5vZGU6IEFTVExhbWJkYU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgbGFtYmRhRW52OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IExhbWJkYUZ1bmN0aW9uQ2FsbCB7XG5cdHJldHVybiBuZXcgTGFtYmRhRnVuY3Rpb25DYWxsKG5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBsYW1iZGFFbnYsIGV2ZW50UGlwZWxpbmUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsQXNzaWduKGV4cHI6IEFTVEFzc2lnbm1lbnROb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0Y29uc3QgdmFsdWU6IGFueSA9IGV2YWxFeHByZXNzaW9uKGV4cHIucmlnaHQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblxuXHRpZiAoZXhwci5sZWZ0LnR5cGUgPT09IEFTVE5vZGVUeXBlLk1FTUJFUikge1xuXHRcdGlmIChleHByLmxlZnQgaW5zdGFuY2VvZiBBU1RNZW1iZXJOb2RlKSB7XG5cdFx0XHRjb25zdCBvYmplY3Q6IEluc3RhbmNlID0gZXZhbEV4cHJlc3Npb24oXG5cdFx0XHRcdGV4cHIubGVmdC5vYmplY3QsXG5cdFx0XHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0XHRlbnZpcm9ubWVudCxcblx0XHRcdFx0ZXZlbnRQaXBlbGluZSxcblx0XHRcdFx0dGhpc1ZhbHVlXG5cdFx0XHQpIGFzIEluc3RhbmNlO1xuXG5cdFx0XHRpZiAoZXhwci5sZWZ0Lm9iamVjdC50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0XHRcdG9iamVjdC5fX3N0YXRpY0ZpZWxkc1tleHByLmxlZnQucHJvcGVydHldID0gdmFsdWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvYmplY3QuX19pbnN0YW5jZUZpZWxkc1tleHByLmxlZnQucHJvcGVydHldID0gdmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdG9iamVjdC5tYXJrRGlydHkoZXZlbnRQaXBlbGluZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIG1lbWJlciBleHByZXNzaW9uICR7ZXhwci50eXBlfWAsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGVudmlyb25tZW50LnNldChleHByLmxlZnQubmFtZSwgdmFsdWUpO1xuXHR9XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxNZW1iZXIoZXhwcjogQVNUTWVtYmVyTm9kZSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogYW55IHtcblx0Y29uc3Qgb2JqZWN0OiBhbnkgPSBlbnZpcm9ubWVudC5nZXQoZXhwci5vYmplY3QubmFtZSk7XG5cblx0aWYgKGV4cHIucHJvcGVydHkgaW4gb2JqZWN0Ll9faW5zdGFuY2VGaWVsZHMpIHtcblx0XHRyZXR1cm4gb2JqZWN0Ll9faW5zdGFuY2VGaWVsZHNbZXhwci5wcm9wZXJ0eV07XG5cdH1cblxuXHRpZiAoZXhwci5wcm9wZXJ0eSBpbiBvYmplY3QuX19zdGF0aWNGaWVsZHMpIHtcblx0XHRyZXR1cm4gb2JqZWN0Ll9fc3RhdGljRmllbGRzW2V4cHIucHJvcGVydHldO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsQ2FsbChleHByOiBBU1RDYWxsTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdC8vIHN1cGVyIGNhbGwgaW5zaWRlIGNvbnN0cnVjdG9yXG5cdGlmIChleHByLmNhbGxlZS50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSICYmIGV4cHIuY2FsbGVlLm5hbWUgPT09IEdSQU1NQVIuU1VQRVIpIHtcblx0XHRpZiAoIXRoaXNWYWx1ZSB8fCAhdGhpc1ZhbHVlLl9fY2xhc3NEZWY/LnN1cGVyQ2xhc3MpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKCdzdXBlcigpIHVzZWQgb3V0c2lkZSBvZiBzdWJjbGFzcyBjb25zdHJ1Y3RvcicpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHN1cGVyQ2xhc3NEZWYgPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldCh0aGlzVmFsdWUuX19jbGFzc0RlZi5zdXBlckNsYXNzKTtcblx0XHRjb25zdCBjb25zdHJ1Y3Rvck1ldGhvZCA9IHN1cGVyQ2xhc3NEZWYuY29uc3RydWN0b3JNZXRob2Q7XG5cblx0XHRpZiAoIWNvbnN0cnVjdG9yTWV0aG9kKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRjb25zdCBjb25zdHJ1Y3RvckVudiA9IG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCk7XG5cdFx0Y29uc3RydWN0b3JFbnYuZGVmaW5lKEdSQU1NQVIuVEhJUywgdGhpc1ZhbHVlKTtcblxuXHRcdGJpbmRNZXRob2RQYXJhbWV0ZXJzKGV4cHIsXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3JNZXRob2QucGFyYW1ldGVycyxcblx0XHQgICAgICAgICAgICAgICAgICAgICBvYmplY3RSZWdpc3RyeSxcblx0XHQgICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvckVudixcblx0XHQgICAgICAgICAgICAgICAgICAgICBlbnZpcm9ubWVudCxcblx0XHQgICAgICAgICAgICAgICAgICAgICBldmVudFBpcGVsaW5lLFxuXHRcdCAgICAgICAgICAgICAgICAgICAgIHRoaXNWYWx1ZVxuXHRcdCk7XG5cblx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIGNvbnN0cnVjdG9yTWV0aG9kLmNoaWxkcmVuKSB7XG5cdFx0XHRldmFsTm9kZShjaGlsZCwgb2JqZWN0UmVnaXN0cnksIGNvbnN0cnVjdG9yRW52LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0aWYgKGV4cHIuY2FsbGVlLnR5cGUgPT09IEFTVE5vZGVUeXBlLk1FTUJFUikge1xuXHRcdGlmIChleHByLmNhbGxlZSBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpIHtcblx0XHRcdGlmIChleHByLmNhbGxlZS5vYmplY3QudHlwZSA9PT0gQVNUTm9kZVR5cGUuSURFTlRJRklFUikge1xuXHRcdFx0XHRjb25zdCBjbGFzc05hbWUgPSBleHByLmNhbGxlZS5vYmplY3QubmFtZTtcblxuXHRcdFx0XHRpZiAob2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5oYXMoY2xhc3NOYW1lKSkge1xuXHRcdFx0XHRcdHJldHVybiBldmFsU3RhdGljQ2FsbChleHByLCBjbGFzc05hbWUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGV2YWxJbnN0YW5jZUNhbGwoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIGV2YWxGdW5jdGlvbkNhbGwoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEZ1bmN0aW9uQ2FsbChleHByOiBBU1RDYWxsTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCkge1xuXHRjb25zdCBmdW5jdGlvbkNhbGwgPSBldmFsRXhwcmVzc2lvbihleHByLmNhbGxlZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRjb25zdCBhcmdzID0gZXZhbENhbGxBcmd1bWVudHMoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXG5cdGlmIChmdW5jdGlvbkNhbGwgaW5zdGFuY2VvZiBMYW1iZGFGdW5jdGlvbkNhbGwpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb25DYWxsLmV2YWxDYWxsKHRoaXNWYWx1ZSwgLi4uYXJncyk7XG5cdH1cblxuXHRyZXR1cm4gKG5ldyBOYXRpdmVGdW5jdGlvbkNhbGwoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKSkuZXZhbENhbGwodGhpc1ZhbHVlLCAuLi5hcmdzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxTdGF0aWNDYWxsKGV4cHI6IEFTVENhbGxOb2RlLCBjbGFzc05hbWU6IHN0cmluZywgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGlmICghKGV4cHIuY2FsbGVlIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBtZW1iZXIgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHR9XG5cblx0Y29uc3QgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KGNsYXNzTmFtZSk7XG5cdGNvbnN0IG1ldGhvZERlZjogQ2xhc3NNZXRob2REZWZpbml0aW9uIHwgdW5kZWZpbmVkID0gY2xhc3NEZWYuc3RhdGljTWV0aG9kc1tleHByLmNhbGxlZS5wcm9wZXJ0eV07XG5cblx0aWYgKCFtZXRob2REZWYpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgU3RhdGljIG1ldGhvZCAke2NsYXNzTmFtZX0uJHtleHByLmNhbGxlZS5wcm9wZXJ0eX0gbm90IGZvdW5kYCwgZXhwci5jYWxsZWUuc3Bhbik7XG5cdH1cblxuXHRpZiAoY2xhc3NEZWYubmF0aXZlSW5zdGFuY2UgJiYgY2xhc3NEZWYubmF0aXZlSW5zdGFuY2VbbWV0aG9kRGVmLm5hbWVdKSB7XG5cdFx0Y29uc3QgYXJncyA9IGV2YWxNZXRob2RBcmd1bWVudHMoZXhwcixcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2REZWYucGFyYW1ldGVycyxcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RSZWdpc3RyeSxcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnZpcm9ubWVudCxcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudFBpcGVsaW5lLFxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNWYWx1ZSlcblx0XHRjb25zdCByYXdBcmdzID0gYXJncy5tYXAoZnJvbUx5cmFWYWx1ZSk7XG5cdFx0Y29uc3QgcmVzdWx0ID0gY2xhc3NEZWYubmF0aXZlSW5zdGFuY2VbbWV0aG9kRGVmLm5hbWVdKC4uLnJhd0FyZ3MpO1xuXG5cdFx0aWYgKHJlc3VsdCBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdHJldHVybiB3cmFwTmF0aXZlSW5zdGFuY2UocmVzdWx0LCBvYmplY3RSZWdpc3RyeSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2YWxSZXR1cm4oXG5cdFx0XHRbcmV0dXJuVmFsdWUocmVzdWx0KV0sXG5cdFx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRcdG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCksXG5cdFx0XHRldmVudFBpcGVsaW5lLFxuXHRcdFx0dGhpc1ZhbHVlLFxuXHRcdFx0bWV0aG9kRGVmLnJldHVyblR5cGVcblx0XHQpO1xuXHR9XG5cblx0Y29uc3QgbWV0aG9kRW52ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblxuXHRiaW5kTWV0aG9kUGFyYW1ldGVycyhleHByLCBtZXRob2REZWYucGFyYW1ldGVycywgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cblx0cmV0dXJuIGV2YWxSZXR1cm4obWV0aG9kRGVmLmNoaWxkcmVuLCBvYmplY3RSZWdpc3RyeSwgbWV0aG9kRW52LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUsIG1ldGhvZERlZi5yZXR1cm5UeXBlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxJbnN0YW5jZUNhbGwoZXhwcjogQVNUQ2FsbE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpIHtcblx0aWYgKCEoZXhwci5jYWxsZWUgaW5zdGFuY2VvZiBBU1RNZW1iZXJOb2RlKSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIG1lbWJlciBleHByZXNzaW9uICR7ZXhwci50eXBlfWAsIGV4cHIuc3Bhbik7XG5cdH1cblxuXHQvLyBPYmpla3QgYXVzd2VydGVuICh1IHwgdGhpcyB8IHN1cGVyKVxuXHRsZXQgdGFyZ2V0ID0gZXZhbEV4cHJlc3Npb24oZXhwci5jYWxsZWUub2JqZWN0LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cblx0dGFyZ2V0ID0gYXV0b0JveElmTmVlZGVkKHRhcmdldCwgb2JqZWN0UmVnaXN0cnkpO1xuXG5cdGlmICghdGFyZ2V0IHx8ICF0YXJnZXQuX19jbGFzc0RlZikge1xuXHRcdHRocm93UnVudGltZUVycm9yKCdJbnN0YW5jZSBjYWxsIG9uIG5vbi1vYmplY3QnLCBleHByLmNhbGxlZS5zcGFuKTtcblx0fVxuXG5cdGxldCBjbGFzc0RlZiA9IHRhcmdldC5fX2NsYXNzRGVmO1xuXG5cdC8vIHN1cGVyLm1ldGhvZCgpXG5cdGlmIChleHByLmNhbGxlZS5vYmplY3QudHlwZSA9PT0gQVNUTm9kZVR5cGUuSURFTlRJRklFUiAmJiBleHByLmNhbGxlZS5vYmplY3QubmFtZSA9PT0gJ3N1cGVyJykge1xuXHRcdGNvbnN0IHN1cGVyTmFtZSA9IGNsYXNzRGVmLnN1cGVyQ2xhc3M7XG5cdFx0aWYgKCFzdXBlck5hbWUpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKCdzdXBlciB1c2VkIGJ1dCBubyBzdXBlcmNsYXNzJywgZXhwci5jYWxsZWUuc3Bhbik7XG5cdFx0fVxuXHRcdGNsYXNzRGVmID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQoc3VwZXJOYW1lKTtcblx0fVxuXG5cblx0Y29uc3QgbWV0aG9kRGVmOiBDbGFzc01ldGhvZERlZmluaXRpb24gfCBudWxsID0gcmVzb2x2ZUluc3RhbmNlTWV0aG9kKGNsYXNzRGVmLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0UmVnaXN0cnksXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByLmNhbGxlZS5wcm9wZXJ0eSk7XG5cdGlmICghbWV0aG9kRGVmKSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYE1ldGhvZCAke2V4cHIuY2FsbGVlLnByb3BlcnR5fSBub3QgZm91bmQgb24gJHtjbGFzc0RlZi5uYW1lfWAsIGV4cHIuY2FsbGVlLnNwYW4pO1xuXHR9XG5cblx0Y29uc3QgbWV0aG9kRW52ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblx0bWV0aG9kRW52LmRlZmluZShHUkFNTUFSLlRISVMsIHRhcmdldCk7XG5cblx0aWYgKHRhcmdldC5fX25hdGl2ZUluc3RhbmNlICYmIG1ldGhvZERlZi5uYW1lIGluIHRhcmdldC5fX25hdGl2ZUluc3RhbmNlKSB7XG5cdFx0Y29uc3QgYXJncyA9IGV2YWxNZXRob2RBcmd1bWVudHMoXG5cdFx0XHRleHByLFxuXHRcdFx0bWV0aG9kRGVmLnBhcmFtZXRlcnMsXG5cdFx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRcdGVudmlyb25tZW50LFxuXHRcdFx0ZXZlbnRQaXBlbGluZSxcblx0XHRcdHRoaXNWYWx1ZVxuXHRcdCk7XG5cdFx0Y29uc3QgcmF3QXJncyA9IGFyZ3MubWFwKGZyb21MeXJhVmFsdWUpO1xuXHRcdGNvbnN0IHJlc3VsdCA9IHRhcmdldC5fX25hdGl2ZUluc3RhbmNlW21ldGhvZERlZi5uYW1lXSguLi5yYXdBcmdzKTtcblxuXHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRyZXR1cm4gd3JhcE5hdGl2ZUluc3RhbmNlKHJlc3VsdCwgb2JqZWN0UmVnaXN0cnkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmFsUmV0dXJuKFtyZXR1cm5WYWx1ZShyZXN1bHQpXSxcblx0XHQgICAgICAgICAgICAgICAgICBvYmplY3RSZWdpc3RyeSxcblx0XHQgICAgICAgICAgICAgICAgICBtZXRob2RFbnYsXG5cdFx0ICAgICAgICAgICAgICAgICAgZXZlbnRQaXBlbGluZSxcblx0XHQgICAgICAgICAgICAgICAgICB0YXJnZXQsXG5cdFx0ICAgICAgICAgICAgICAgICAgbWV0aG9kRGVmLnJldHVyblR5cGUpO1xuXHR9XG5cblx0YmluZE1ldGhvZFBhcmFtZXRlcnMoZXhwciwgbWV0aG9kRGVmLnBhcmFtZXRlcnMsIG9iamVjdFJlZ2lzdHJ5LCBtZXRob2RFbnYsIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXG5cdHJldHVybiBldmFsUmV0dXJuKG1ldGhvZERlZi5jaGlsZHJlbiwgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgZXZlbnRQaXBlbGluZSwgdGFyZ2V0LCBtZXRob2REZWYucmV0dXJuVHlwZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSW5zdGFuY2VNZXRob2QoY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBtZXRob2ROYW1lOiBzdHJpbmcpOiBDbGFzc01ldGhvZERlZmluaXRpb24gfCBudWxsIHtcblx0aWYgKGNsYXNzRGVmLmluc3RhbmNlTWV0aG9kc1ttZXRob2ROYW1lXSkge1xuXHRcdHJldHVybiBjbGFzc0RlZi5pbnN0YW5jZU1ldGhvZHNbbWV0aG9kTmFtZV07XG5cdH1cblxuXHRpZiAoY2xhc3NEZWYuc3VwZXJDbGFzcykge1xuXHRcdGNvbnN0IHN1cGVyRGVmID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQoY2xhc3NEZWYuc3VwZXJDbGFzcyk7XG5cdFx0cmV0dXJuIHJlc29sdmVJbnN0YW5jZU1ldGhvZChzdXBlckRlZiwgb2JqZWN0UmVnaXN0cnksIG1ldGhvZE5hbWUpO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kTWV0aG9kUGFyYW1ldGVycyhcblx0Y2FsbE5vZGU6IEFTVENhbGxOb2RlLFxuXHRwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sXG5cdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSxcblx0bWV0aG9kRW52OiBFbnZpcm9ubWVudCxcblx0ZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LFxuXHRldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLFxuXHR0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGxcbik6IHZvaWQge1xuXG5cdGNvbnN0IGFyZ3MgPSBjYWxsTm9kZS5hcmd1bWVudHM7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHBhcmFtZXRlcjogQVNUUGFyYW1ldGVyTm9kZSB8IG51bGwgPSBwYXJhbWV0ZXJzW2ldIHx8IG51bGw7XG5cdFx0Y29uc3QgYXJndW1lbnQ6IGFueSA9IGFyZ3NbaV0gfHwgbnVsbDtcblxuXHRcdGlmICghcGFyYW1ldGVyKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcignTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBpbiBtZXRob2QgY2FsbC4nKTtcblx0XHR9XG5cblx0XHRsZXQgcmF3VmFsdWU7XG5cblx0XHRpZiAoYXJndW1lbnQpIHtcblx0XHRcdHJhd1ZhbHVlID0gZXZhbEV4cHJlc3Npb24oYXJndW1lbnQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHR9IGVsc2UgaWYgKHBhcmFtZXRlcj8uZGVmYXVsdFZhbHVlKSB7XG5cdFx0XHRyYXdWYWx1ZSA9IGV2YWxFeHByZXNzaW9uKHBhcmFtZXRlci5kZWZhdWx0VmFsdWUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHR9XG5cblx0XHRjb25zdCBjYXN0ZWQgPSBwYXJhbWV0ZXIudHlwZUFubm90YXRpb25cblx0XHRcdD8gY2FzdFZhbHVlKHJhd1ZhbHVlLCBwYXJhbWV0ZXIudHlwZUFubm90YXRpb24ubmFtZSlcblx0XHRcdDogY2FzdFZhbHVlKHJhd1ZhbHVlLCBUWVBFX0VOVU0uTUlYRUQpO1xuXG5cdFx0bWV0aG9kRW52LmRlZmluZShwYXJhbWV0ZXIubmFtZSwgY2FzdGVkKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbENhbGxBcmd1bWVudHMobm9kZTogQVNUQ2FsbE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnlbXSB7XG5cdGlmIChub2RlLmNhbGxlZSBpbnN0YW5jZW9mIEFTVExhbWJkYU5vZGUpIHtcblx0XHRjb25zdCBsYW1iZGEgPSBub2RlLmNhbGxlZTtcblx0XHRyZXR1cm4gZXZhbE1ldGhvZEFyZ3VtZW50cyhub2RlLCBsYW1iZGEucGFyYW1ldGVycywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHR9XG5cblx0aWYgKG5vZGUuY2FsbGVlLnR5cGUgPT09IEFTVE5vZGVUeXBlLklERU5USUZJRVIpIHtcblx0XHRyZXR1cm4gbm9kZS5hcmd1bWVudHMubWFwKGFyZ3VtZW50ID0+IHtcblx0XHRcdHJldHVybiBjYXN0VmFsdWUoXG5cdFx0XHRcdGV2YWxFeHByZXNzaW9uKGFyZ3VtZW50LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSksXG5cdFx0XHRcdGFyZ3VtZW50LnR5cGVcblx0XHRcdCk7XG5cdFx0fSk7XG5cdH1cblxuXHRsZXQgbW9kdWxlTmFtZTogc3RyaW5nID0gJ3Vua25vd24nO1xuXHRsZXQgbWV0aG9kTmFtZTogc3RyaW5nID0gJ3Vua25vd24nO1xuXG5cdGlmIChub2RlLmNhbGxlZSBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpIHtcblx0XHRtb2R1bGVOYW1lID0gbm9kZS5jYWxsZWUub2JqZWN0Lm5hbWU7XG5cdFx0bWV0aG9kTmFtZSA9IG5vZGUuY2FsbGVlLnByb3BlcnR5O1xuXHR9XG5cblx0dGhyb3dSdW50aW1lRXJyb3IoYFVua25vd24gZnVuY3Rpb24gJHttb2R1bGVOYW1lfS4ke21ldGhvZE5hbWV9YCwgbm9kZS5zcGFuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxNZXRob2RBcmd1bWVudHMoZXhwcjogQVNUQ2FsbE5vZGUgfCBBU1ROZXdOb2RlLCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnlbXSB7XG5cdGNvbnN0IGFyZ3MgPSBbXTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtZXRlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBwYXJhbWV0ZXI6IEFTVFBhcmFtZXRlck5vZGUgfCBudWxsID0gcGFyYW1ldGVyc1tpXSB8fCBudWxsO1xuXHRcdGNvbnN0IGFyZ3VtZW50ID0gZXhwci5hcmd1bWVudHNbaV0gfHwgbnVsbDtcblxuXHRcdGxldCB2YWx1ZTtcblxuXHRcdGlmIChhcmd1bWVudCkge1xuXHRcdFx0dmFsdWUgPSBldmFsRXhwcmVzc2lvbihhcmd1bWVudCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdH0gZWxzZSBpZiAocGFyYW1ldGVyPy5kZWZhdWx0VmFsdWUpIHtcblx0XHRcdHZhbHVlID0gZXZhbEV4cHJlc3Npb24ocGFyYW1ldGVyLmRlZmF1bHRWYWx1ZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgW1J1bnRpbWVFcnJvcl0gTWlzc2luZyBhcmd1bWVudCAnJHtwYXJhbWV0ZXI/Lm5hbWV9J2AsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXG5cdFx0YXJncy5wdXNoKHZhbHVlKTtcblx0fVxuXG5cdHJldHVybiBhcmdzLm1hcCgoYXJndW1lbnQsIGkpID0+IHtcblx0XHRjb25zdCBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJzW2ldO1xuXHRcdHJldHVybiBwYXJhbWV0ZXI/LnR5cGVBbm5vdGF0aW9uXG5cdFx0XHQ/IGNhc3RWYWx1ZShhcmd1bWVudCwgcGFyYW1ldGVyLnR5cGVBbm5vdGF0aW9uLm5hbWUpXG5cdFx0XHQ6IGNhc3RWYWx1ZShhcmd1bWVudCwgVFlQRV9FTlVNLk1JWEVEKTtcblx0fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsSWYobm9kZTogQVNUSWZOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0Y29uc3QgY29uZGl0aW9uID0gY2FzdFZhbHVlKFxuXHRcdGV2YWxFeHByZXNzaW9uKG5vZGUuY29uZGl0aW9uLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSksXG5cdFx0VFlQRV9FTlVNLkJPT0xFQU5cblx0KTtcblxuXHQvLyBUSEVOXG5cdGlmIChjb25kaXRpb24gPT09IHRydWUpIHtcblx0XHRyZXR1cm4gZXZhbEJsb2NrKG5vZGUudGhlbi5jaGlsZHJlbiwgb2JqZWN0UmVnaXN0cnksIG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCksIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdH1cblxuXHQvLyBFTFNFXG5cdGlmIChub2RlLmVsc2UpIHtcblx0XHRpZiAobm9kZS5lbHNlIGluc3RhbmNlb2YgQVNUSWZOb2RlKSB7XG5cdFx0XHRyZXR1cm4gZXZhbElmKG5vZGUuZWxzZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmFsQmxvY2sobm9kZS5lbHNlLmNoaWxkcmVuLCBvYmplY3RSZWdpc3RyeSwgbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KSwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbE1hdGNoKG5vZGU6IEFTVE1hdGNoTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGNvbnN0IG1hdGNoVmFsdWU6IGFueSA9IGV2YWxFeHByZXNzaW9uKG5vZGUuZXhwcmVzc2lvbiwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcblxuXHRmb3IgKGNvbnN0IGNhc2VOb2RlIG9mIG5vZGUuY2FzZXMpIHtcblx0XHRpZiAoY2FzZU5vZGUudGVzdCA9PT0gbnVsbCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdGVzdFZhbHVlID0gZXZhbEV4cHJlc3Npb24oY2FzZU5vZGUudGVzdCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXG5cdFx0aWYgKHRlc3RWYWx1ZSA9PT0gbWF0Y2hWYWx1ZSkge1xuXHRcdFx0cmV0dXJuIGV2YWxNYXRjaENhc2UoY2FzZU5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRpZiAobm9kZS5kZWZhdWx0Q2FzZSkge1xuXHRcdHJldHVybiBldmFsTWF0Y2hDYXNlKG5vZGUuZGVmYXVsdENhc2UsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbE1hdGNoQ2FzZShub2RlOiBBU1RNYXRjaENhc2VOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0cmV0dXJuIGV2YWxCbG9jayhub2RlLmNoaWxkcmVuLCBvYmplY3RSZWdpc3RyeSwgbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KSwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxGb3JlYWNoKG5vZGU6IEFTVEZvcmVhY2hOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0bGV0IGl0ZXJhYmxlID0gZXZhbEV4cHJlc3Npb24obm9kZS5pdGVyYWJsZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXG5cdGlmICghKGl0ZXJhYmxlIGluc3RhbmNlb2YgSW5zdGFuY2UpKSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYGZvcmVhY2ggZXhwZWN0cyBhbiBvYmplY3QgaW1wbGVtZW50aW5nIEl0ZXJhYmxlYCwgbm9kZS5pdGVyYWJsZS5zcGFuKTtcblx0fVxuXG5cdGNvbnN0IGl0ZXJhdG9yTWV0aG9kID0gcmVzb2x2ZUluc3RhbmNlTWV0aG9kKFxuXHRcdGl0ZXJhYmxlLl9fY2xhc3NEZWYsXG5cdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0J2l0ZXJhdG9yJ1xuXHQpO1xuXG5cdGlmICghaXRlcmF0b3JNZXRob2QpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgT2JqZWN0IGRvZXMgbm90IGltcGxlbWVudCBJdGVyYWJsZSAobWlzc2luZyBpdGVyYXRvcigpKWAsIG5vZGUuaXRlcmFibGUuc3Bhbik7XG5cdH1cblxuXHRjb25zdCBpdGVyYXRvcjogYW55ID0gZXZhbEluc3RhbmNlQ2FsbChcblx0XHQoKCk6IEFTVENhbGxOb2RlID0+IHtcblx0XHRcdHJldHVybiBuZXcgQVNUQ2FsbE5vZGUobmV3IEFTVE1lbWJlck5vZGUobm9kZS5pdGVyYWJsZSwgJ2l0ZXJhdG9yJykpO1xuXHRcdH0pKCksXG5cdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0ZW52aXJvbm1lbnQsXG5cdFx0ZXZlbnRQaXBlbGluZSxcblx0XHR0aGlzVmFsdWVcblx0KTtcblxuXHRpZiAoIShpdGVyYXRvciBpbnN0YW5jZW9mIEluc3RhbmNlKSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBpdGVyYXRvcigpIG11c3QgcmV0dXJuIGFuIEl0ZXJhdG9yIG9iamVjdGAsIG5vZGUuaXRlcmFibGUuc3Bhbik7XG5cdH1cblxuXHRjYWxsSXRlcmF0b3JNZXRob2QoaXRlcmF0b3IsICdyZXdpbmQnLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXG5cdHdoaWxlIChjYWxsSXRlcmF0b3JNZXRob2QoaXRlcmF0b3IsICdoYXNOZXh0Jywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKSkge1xuXHRcdGNvbnN0IHZhbHVlID0gY2FsbEl0ZXJhdG9yTWV0aG9kKGl0ZXJhdG9yLCAnY3VycmVudCcsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG5cblx0XHRjb25zdCBsb29wRW52ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblxuXHRcdGxvb3BFbnYuZGVmaW5lKG5vZGUuaXRlcmF0b3IsIHZhbHVlKTtcblxuXHRcdGNvbnN0IHJlc3VsdCA9IGV2YWxCbG9jayhub2RlLmJvZHksIG9iamVjdFJlZ2lzdHJ5LCBsb29wRW52LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBSZXR1cm5WYWx1ZSkge1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cblx0XHRjYWxsSXRlcmF0b3JNZXRob2QoaXRlcmF0b3IsICduZXh0Jywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsbEl0ZXJhdG9yTWV0aG9kKGl0ZXJhdG9yOiBJbnN0YW5jZSwgbWV0aG9kTmFtZTogc3RyaW5nLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IGFueSB7XG5cdHJldHVybiBjYWxsSW5zdGFuY2VNZXRob2QoXG5cdFx0aXRlcmF0b3IsXG5cdFx0aXRlcmF0b3IuZmluZGVNZXRob2ROb2RlKG1ldGhvZE5hbWUpLFxuXHRcdFtdLFxuXHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdGVudmlyb25tZW50LFxuXHRcdGV2ZW50UGlwZWxpbmVcblx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxVbmFyeShub2RlOiBBU1RVbmFyeU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRjb25zdCB2YWx1ZSA9IGV2YWxFeHByZXNzaW9uKG5vZGUuYXJndW1lbnQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblxuXHRzd2l0Y2ggKG5vZGUub3BlcmF0b3IpIHtcblx0XHRjYXNlIEdSQU1NQVIuRVhDTEFNQVRJT05fTUFSSzpcblx0XHRcdHJldHVybiAhY2FzdFZhbHVlKHZhbHVlKTtcblx0fVxuXG5cdHRocm93UnVudGltZUVycm9yKGBVbnN1cHBvcnRlZCB1bmFyeSBvcGVyYXRvciAke25vZGUub3BlcmF0b3J9YCwgbm9kZS5zcGFuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxWRG9tTm9kZShub2RlOiBBU1RWRG9tTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IFZOb2RlIHtcblx0Y29uc3QgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcblxuXHRmb3IgKGNvbnN0IFtuYW1lLCB2YWx1ZV0gb2Ygbm9kZS5wcm9wcykge1xuXHRcdHByb3BzW25hbWVdID0gZXZhbEV4cHJlc3Npb24odmFsdWUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0fVxuXG5cdGNvbnN0IGNoaWxkcmVuOiBBcnJheTxWTm9kZSB8IHN0cmluZz4gPSBbXTtcblxuXG5cdGNvbnN0IHZOb2RlOiBWTm9kZSA9IHtcblx0XHR0YWc6IG5vZGUudGFnLFxuXHRcdGlzQ29tcG9uZW50OiBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmhhcyhub2RlLnRhZyksXG5cdFx0cGFyZW50OiBudWxsLFxuXHRcdGNvbXBvbmVudDogbnVsbCxcblx0XHRwcm9wczogcHJvcHMsXG5cdFx0Y2hpbGRyZW46IGNoaWxkcmVuLFxuXHRcdGRvbTogbnVsbFxuXHR9O1xuXG5cdGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuXHRcdGlmIChjaGlsZCBpbnN0YW5jZW9mIEFTVFZEb21UZXh0Tm9kZSkge1xuXHRcdFx0Y2hpbGRyZW4ucHVzaChjaGlsZC52YWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGNoaWxkVk5vZGUgPSBldmFsRXhwcmVzc2lvbihjaGlsZCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpIGFzIFZOb2RlO1xuXHRcdFx0Y2hpbGRWTm9kZS5wYXJlbnQgPSB2Tm9kZTtcblx0XHRcdGNoaWxkcmVuLnB1c2goY2hpbGRWTm9kZSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHZOb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbFJldHVybihibG9ja05vZGVzOiBBU1ROb2RlW10sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwsIHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHR0cnkge1xuXHRcdHJldHVybiBldmFsQmxvY2soYmxvY2tOb2Rlcywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUsIHJldHVyblR5cGUpO1xuXHR9IGNhdGNoIChleGVjdXRpb25TdG9wKSB7XG5cdFx0aWYgKGV4ZWN1dGlvblN0b3AgaW5zdGFuY2VvZiBFeGVjdXRpb25TdG9wKSB7XG5cdFx0XHRyZXR1cm4gY2FzdFZhbHVlKGV4ZWN1dGlvblN0b3AucmV0dXJuVmFsdWUudmFsdWUsIGV4ZWN1dGlvblN0b3AucmV0dXJuVHlwZT8ubmFtZSk7XG5cdFx0fVxuXHRcdHRocm93IGV4ZWN1dGlvblN0b3A7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxCbG9jayhibG9ja05vZGVzOiBBU1ROb2RlW10sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwsIHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRmb3IgKGNvbnN0IGJsb2NrTm9kZSBvZiBibG9ja05vZGVzKSB7XG5cdFx0Y29uc3QgcmV0dXJuVmFsdWU6IGFueSA9IGV2YWxOb2RlKGJsb2NrTm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdGlmIChyZXR1cm5WYWx1ZSBpbnN0YW5jZW9mIFJldHVyblZhbHVlKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXhlY3V0aW9uU3RvcChyZXR1cm5WYWx1ZSwgcmV0dXJuVHlwZSk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEFubm90YXRpb25WYWx1ZShub2RlOiBBU1ROb2RlKTogYW55IHtcblx0c3dpdGNoIChub2RlLnR5cGUpIHtcblx0XHRjYXNlIEFTVE5vZGVUeXBlLlNUUklORzpcblx0XHRjYXNlIEFTVE5vZGVUeXBlLk5VTUJFUjpcblx0XHRjYXNlIEFTVE5vZGVUeXBlLkJPT0xFQU46XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5JREVOVElGSUVSOiB7XG5cdFx0XHRyZXR1cm4gY2FzdFZhbHVlKG5vZGUudmFsdWUpO1xuXHRcdH1cblxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuQVJSQVkgOiB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEFycmF5Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gbm9kZS5lbGVtZW50cy5tYXAoY2hpbGQgPT4gZXZhbEFubm90YXRpb25WYWx1ZShjaGlsZCkpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgYW5ub3RhdGlvbiBwcm9wZXJ0eSB2YWx1ZTogJHtub2RlLnR5cGV9YCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cblx0XHRkZWZhdWx0OiB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5zdXBwb3J0ZWQgYW5ub3RhdGlvbiBleHByZXNzaW9uOiAke25vZGUudHlwZX1gLCBub2RlLnNwYW4pO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEFubm90YXRpb25Qcm9wZXJ0aWVzKGFubm90YXRpb246IEFTVEFubm90YXRpb25Ob2RlKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG5cdGNvbnN0IHByb3BlcnRpZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuXHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlTm9kZV0gb2YgYW5ub3RhdGlvbi5wcm9wZXJ0aWVzKSB7XG5cdFx0cHJvcGVydGllc1trZXldID0gZXZhbEFubm90YXRpb25WYWx1ZSh2YWx1ZU5vZGUpO1xuXHR9XG5cblx0cmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxsSW5zdGFuY2VNZXRob2QoaW5zdGFuY2U6IEluc3RhbmNlLCBtZXRob2ROb2RlOiBBU1RNZXRob2ROb2RlLCBhcmdzOiBhbnlbXSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiBhbnkge1xuXHRjb25zdCBtZXRob2RFbnYgPSBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpO1xuXG5cdG1ldGhvZEVudi5kZWZpbmUoR1JBTU1BUi5USElTLCBpbnN0YW5jZSk7XG5cblx0aWYgKGluc3RhbmNlLl9fbmF0aXZlSW5zdGFuY2UgJiYgbWV0aG9kTm9kZS5uYW1lIGluIGluc3RhbmNlLl9fbmF0aXZlSW5zdGFuY2UpIHtcblx0XHRjb25zdCByYXdBcmdzID0gYXJncy5tYXAoZnJvbUx5cmFWYWx1ZSk7XG5cdFx0Y29uc3QgcmVzdWx0ID0gaW5zdGFuY2UuX19uYXRpdmVJbnN0YW5jZVttZXRob2ROb2RlLm5hbWVdKC4uLnJhd0FyZ3MpO1xuXG5cdFx0aWYgKHJlc3VsdCBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdHJldHVybiB3cmFwTmF0aXZlSW5zdGFuY2UocmVzdWx0LCBvYmplY3RSZWdpc3RyeSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2YWxSZXR1cm4oXG5cdFx0XHRbcmV0dXJuVmFsdWUocmVzdWx0KV0sXG5cdFx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRcdG1ldGhvZEVudixcblx0XHRcdGV2ZW50UGlwZWxpbmUsXG5cdFx0XHRpbnN0YW5jZSxcblx0XHRcdG1ldGhvZE5vZGUucmV0dXJuVHlwZVxuXHRcdCk7XG5cdH1cblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IG1ldGhvZE5vZGUucGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHBhcmFtZXRlcjogQVNUUGFyYW1ldGVyTm9kZSB8IG51bGwgPSBtZXRob2ROb2RlLnBhcmFtZXRlcnNbaV0gfHwgbnVsbDtcblx0XHRjb25zdCBhcmd1bWVudDogYW55ID0gYXJnc1tpXSB8fCBudWxsO1xuXG5cdFx0aWYgKCFwYXJhbWV0ZXIpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKCdNZXRob2QgcGFyYW1ldGVyIGlzIG51bGwuJyk7XG5cdFx0fVxuXG5cdFx0bGV0IHZhbHVlO1xuXHRcdGlmICghYXJndW1lbnQpIHtcblx0XHRcdHZhbHVlID0gcGFyYW1ldGVyLmRlZmF1bHRWYWx1ZVxuXHRcdFx0XHQ/IGV2YWxOb2RlKHBhcmFtZXRlci5kZWZhdWx0VmFsdWUsIG9iamVjdFJlZ2lzdHJ5LCBtZXRob2RFbnYsIGV2ZW50UGlwZWxpbmUsIGluc3RhbmNlKVxuXHRcdFx0XHQ6IG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhbHVlID0gYXJnc1tpXTtcblx0XHR9XG5cblx0XHRtZXRob2RFbnYuZGVmaW5lKHBhcmFtZXRlci5uYW1lLCB2YWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4gZXZhbFJldHVybihtZXRob2ROb2RlLmNoaWxkcmVuLCBvYmplY3RSZWdpc3RyeSwgbWV0aG9kRW52LCBldmVudFBpcGVsaW5lLCBpbnN0YW5jZSwgbWV0aG9kTm9kZS5yZXR1cm5UeXBlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9Cb3hJZk5lZWRlZCh2YWx1ZTogYW55LCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpOiBJbnN0YW5jZSB7XG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEluc3RhbmNlKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gVFlQRV9FTlVNLk5VTUJFUikge1xuXHRcdHJldHVybiBjcmVhdGVCb3hlZEluc3RhbmNlKEF1dG9ib3hlZFR5cGVzLmdldENsYXNzTmFtZShUWVBFX0VOVU0uTlVNQkVSKSwgdmFsdWUsIG9iamVjdFJlZ2lzdHJ5KTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09IFRZUEVfRU5VTS5TVFJJTkcpIHtcblx0XHRyZXR1cm4gY3JlYXRlQm94ZWRJbnN0YW5jZShBdXRvYm94ZWRUeXBlcy5nZXRDbGFzc05hbWUoVFlQRV9FTlVNLlNUUklORyksIHZhbHVlLCBvYmplY3RSZWdpc3RyeSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSBUWVBFX0VOVU0uQk9PTEVBTikge1xuXHRcdHJldHVybiBjcmVhdGVCb3hlZEluc3RhbmNlKEF1dG9ib3hlZFR5cGVzLmdldENsYXNzTmFtZShUWVBFX0VOVU0uQk9PTEVBTiksIHZhbHVlLCBvYmplY3RSZWdpc3RyeSk7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCb3hlZEluc3RhbmNlKGNsYXNzTmFtZTogc3RyaW5nLCBwcmltaXRpdmVWYWx1ZTogYW55LCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpOiBJbnN0YW5jZSB7XG5cdGNvbnN0IGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24gPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChjbGFzc05hbWUpO1xuXHRjb25zdCBpbnN0YW5jZTogSW5zdGFuY2UgPSBjbGFzc0RlZi5jb25zdHJ1Y3RFbXB0eUluc3RhbmNlKG9iamVjdFJlZ2lzdHJ5KTtcblxuXHRpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlID0gbmV3IGNsYXNzRGVmLm5hdGl2ZUluc3RhbmNlKGZyb21MeXJhVmFsdWUocHJpbWl0aXZlVmFsdWUpKTtcblxuXHRyZXR1cm4gaW5zdGFuY2U7XG59XG4iLAogICAgImNvbnN0IEx5cmFFdmVudHMgPVxuXHR7XG5cdFx0TFlSQV9JTlNUQU5DRV9ESVJUWV9TVEFURTogJ2x5cmE6aW5zdGFuY2VfZGlydHlfc3RhdGUnLFxuXHRcdExZUkFfSU5TVEFOQ0VfQ0xFQU5fU1RBVEU6ICdseXJhOmluc3RhbmNlX2NsZWFuX3N0YXRlJ1xuXHR9XG5cbmV4cG9ydCBkZWZhdWx0IEx5cmFFdmVudHM7XG4iLAogICAgImltcG9ydCB7R1JBTU1BUn0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcbmltcG9ydCB7XG5cdEFTVENsYXNzTm9kZSxcblx0QVNURmllbGROb2RlLFxuXHRBU1RJbnRlcmZhY2VOb2RlLFxuXHRBU1RNZXRob2ROb2RlLFxuXHRBU1ROZXdOb2RlLFxuXHRBU1ROb2RlLFxuXHRBU1RQYXJhbWV0ZXJOb2RlLFxuXHRBU1RUeXBlTm9kZVxufSBmcm9tIFwiLi4vYXN0XCI7XG5pbXBvcnQge3Rocm93UnVudGltZUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQgdHlwZSB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge2V2YWxFeHByZXNzaW9uLCBldmFsTWV0aG9kQXJndW1lbnRzLCBldmFsTm9kZX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfcnVudGltZVwiO1xuaW1wb3J0IHtjYXN0VmFsdWUsIGZyb21MeXJhVmFsdWUsIEx5cmFOYXRpdmVPYmplY3R9IGZyb20gXCIuL2ludGVycHJldGVyX2NvbnZlcnNpb25cIjtcbmltcG9ydCB0eXBlIHtFdmVudFBpcGVsaW5lfSBmcm9tIFwiLi4vZXZlbnQvcGlwZWxpbmVcIjtcbmltcG9ydCBMeXJhRXZlbnRzIGZyb20gXCIuLi9ldmVudC9ldmVudHNcIjtcblxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IHtcblx0cGFyZW50OiBFbnZpcm9ubWVudCB8IG51bGw7XG5cdHZhbHVlczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9O1xuXG5cdGNvbnN0cnVjdG9yKHBhcmVudDogRW52aXJvbm1lbnQgfCBudWxsID0gbnVsbCkge1xuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xuXHRcdHRoaXMudmFsdWVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0fVxuXG5cdGRlZmluZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLnZhbHVlc1tuYW1lXSA9IHZhbHVlO1xuXHR9XG5cblx0Z2V0KG5hbWU6IHN0cmluZyk6IGFueSB7XG5cdFx0aWYgKG5hbWUgaW4gdGhpcy52YWx1ZXMpIHtcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlc1tuYW1lXTtcblx0XHR9XG5cdFx0aWYgKHRoaXMucGFyZW50KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJlbnQuZ2V0KG5hbWUpO1xuXHRcdH1cblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5kZWZpbmVkIHZhcmlhYmxlICR7bmFtZX1gKTtcblx0fVxuXG5cdHNldChuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHRpZiAobmFtZSBpbiB0aGlzLnZhbHVlcykge1xuXHRcdFx0dGhpcy52YWx1ZXNbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKHRoaXMucGFyZW50KSB7XG5cdFx0XHR0aGlzLnBhcmVudC5zZXQobmFtZSwgdmFsdWUpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5kZWZpbmVkIHZhcmlhYmxlICR7bmFtZX1gKTtcblx0fVxuXG5cdGhhcyhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXNbbmFtZV0gfHwgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmhhcyhuYW1lKSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEluc3RhbmNlIHtcblx0cHVibGljIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG5cdF9fY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbjtcblx0X19maWVsZHNJbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuXHRfX2luc3RhbmNlRmllbGRzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH07XG5cdF9fc3RhdGljRmllbGRzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH07XG5cdF9fbmF0aXZlSW5zdGFuY2U6IGFueSB8IG51bGwgPSBudWxsO1xuXHRfX2lzRGlydHk6IGJvb2xlYW4gPSBmYWxzZVxuXG5cdGNvbnN0cnVjdG9yKGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24pIHtcblx0XHR0aGlzLl9fY2xhc3NEZWYgPSBjbGFzc0RlZjtcblx0XHR0aGlzLl9faW5zdGFuY2VGaWVsZHMgPSB7fTtcblx0XHR0aGlzLl9fc3RhdGljRmllbGRzID0ge307XG5cdFx0dGhpcy5fX25hdGl2ZUluc3RhbmNlID0gbnVsbDtcblxuXHRcdHRoaXMuaWQgPSBJbnN0YW5jZS5nZW5lcmF0ZUluc3RhbmNlVVVJRCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgZ2VuZXJhdGVJbnN0YW5jZVVVSUQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gc2VsZi5jcnlwdG8ucmFuZG9tVVVJRCgpO1xuXHR9XG5cblx0cHVibGljIG1hcmtEaXJ0eShldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogdm9pZCB7XG5cdFx0dGhpcy5fX2lzRGlydHkgPSB0cnVlO1xuXG5cdFx0ZXZlbnRQaXBlbGluZS5lbWl0KEx5cmFFdmVudHMuTFlSQV9JTlNUQU5DRV9ESVJUWV9TVEFURSwge2luc3RhbmNlOiB0aGlzfSk7XG5cdH1cblxuXHRwdWJsaWMgbWFya0NsZWFuKGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiB2b2lkIHtcblx0XHR0aGlzLl9faXNEaXJ0eSA9IGZhbHNlO1xuXG5cdFx0ZXZlbnRQaXBlbGluZS5lbWl0KEx5cmFFdmVudHMuTFlSQV9JTlNUQU5DRV9DTEVBTl9TVEFURSwge2luc3RhbmNlOiB0aGlzfSk7XG5cdH1cblxuXHRmaW5kZU1ldGhvZE5vZGUobmFtZTogc3RyaW5nKTogQVNUTWV0aG9kTm9kZSB7XG5cdFx0cmV0dXJuIHRoaXMuX19jbGFzc0RlZi5maW5kTWV0aG9kTm9kZShuYW1lKTtcblx0fVxuXG5cdGhhc1B1YmxpY1Byb3BlcnR5KG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fX2NsYXNzRGVmLmZpbmRJbnN0YW5jZUZpZWxkRGVmaW5pdGlvbihuYW1lKS5tb2RpZmllcnMucHVibGljO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRzZXRQdWJsaWNQcm9wZXJ0eShuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnksIGV4cGVjdGVkOiBhbnkgPSBudWxsKTogdm9pZCB7XG5cdFx0bGV0IGZpZWxkRGVmaW5pdGlvbjogQ2xhc3NGaWVsZERlZmluaXRpb24gPSB0aGlzLl9fY2xhc3NEZWYuZmluZEluc3RhbmNlRmllbGREZWZpbml0aW9uKG5hbWUpO1xuXG5cdFx0aWYgKGZpZWxkRGVmaW5pdGlvbi5tb2RpZmllcnMucHVibGljKSB7XG5cdFx0XHR0aGlzLl9faW5zdGFuY2VGaWVsZHNbbmFtZV0gPSBjYXN0VmFsdWUodmFsdWUsIGV4cGVjdGVkKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgRmllbGQgJHtuYW1lfSBpcyBub3QgcHVibGljLmApO1xuXHR9XG5cblx0aW5pdGlhbGl6ZUluc3RhbmNlRmllbGRzKG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogdm9pZCB7XG5cdFx0dGhpcy5fX2NsYXNzRGVmLmluaXRpYWxpemVJbnN0YW5jZUZpZWxkcyh0aGlzLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBNb2RpZmllcnMge1xuXHRvcGVuOiBib29sZWFuID0gZmFsc2U7XG5cdHB1YmxpYzogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlOiBib29sZWFuID0gZmFsc2U7XG5cdHN0YXRpYzogYm9vbGVhbiA9IGZhbHNlO1xuXHRyZWFkb25seTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3t9fSBhdHRyaWJ1dGVzXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihhdHRyaWJ1dGVzOiB7IFtpbmRleDogc3RyaW5nXTogYm9vbGVhbiB9ID0ge30pIHtcblx0XHRmb3IgKGxldCBhdHRyaWJ1dGUgb2YgT2JqZWN0LmtleXMoYXR0cmlidXRlcykpIHtcblx0XHRcdGlmICh0aGlzLmhhc093blByb3BlcnR5KGF0dHJpYnV0ZSkpIHtcblx0XHRcdFx0Y29uc3QgbW9kaWZpZXJzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB0aGlzO1xuXHRcdFx0XHRtb2RpZmllcnNbYXR0cmlidXRlXSA9IGF0dHJpYnV0ZXNbYXR0cmlidXRlXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1cGVyQ2xhc3Mge1xuXHR0eXBlOiBzdHJpbmc7XG5cdG5hbWU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcih0eXBlOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgRXhlY3V0aW9uU3RvcCBleHRlbmRzIEVycm9yIHtcblx0Y29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IHJldHVyblZhbHVlOiBSZXR1cm5WYWx1ZSxcblx0ICAgICAgICAgICAgcHVibGljIHJlYWRvbmx5IHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbCkge1xuXHRcdHN1cGVyKCdFeGVjdXRpb24gc3RvcHBlbmQgd2l0aCByZXR1cm4uJyk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFJldHVyblZhbHVlIHtcblx0dmFsdWU6IGFueTtcblxuXHRjb25zdHJ1Y3Rvcih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGFzc0ZpZWxkRGVmaW5pdGlvbiB7XG5cdG5hbWU6IHN0cmluZztcblx0dHlwZTogc3RyaW5nIHwgbnVsbDtcblx0bW9kaWZpZXJzOiBNb2RpZmllcnM7XG5cdGluaXRpYWxpemVyOiBBU1ROb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlOiBzdHJpbmcgfCBudWxsLCBtb2RpZmllcnM6IE1vZGlmaWVycywgaW5pdGlhbGl6ZXI6IEFTVE5vZGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHR0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcblx0XHR0aGlzLmluaXRpYWxpemVyID0gaW5pdGlhbGl6ZXI7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIENsYXNzTWV0aG9kRGVmaW5pdGlvbiB7XG5cdG5hbWU6IHN0cmluZztcblx0cGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdO1xuXHRyZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGw7XG5cdG1vZGlmaWVyczogTW9kaWZpZXJzO1xuXHRjaGlsZHJlbjogQVNUTm9kZVtdO1xuXHRpc0NvbnN0cnVjdG9yOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgcGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdLCByZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGwsIG1vZGlmaWVyczogTW9kaWZpZXJzLCBjaGlsZHJlbjogQVNUTm9kZVtdKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuXHRcdHRoaXMucmV0dXJuVHlwZSA9IHJldHVyblR5cGU7XG5cdFx0dGhpcy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXHRcdHRoaXMuaXNDb25zdHJ1Y3RvciA9IG5hbWUgPT09IEdSQU1NQVIuQ09OU1RSVUNUT1I7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIENsYXNzRGVmaW5pdGlvbiB7XG5cdG5vZGU6IEFTVENsYXNzTm9kZTtcblx0bmFtZTogc3RyaW5nO1xuXHRzdXBlckNsYXNzOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0aW5zdGFuY2VGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW107XG5cdGluc3RhbmNlTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9O1xuXHRzdGF0aWNGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW107XG5cdHN0YXRpY01ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfTtcblx0Y29uc3RydWN0b3JNZXRob2Q6IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB8IG51bGwgPSBudWxsO1xuXHRuYXRpdmVJbnN0YW5jZTogYW55ID0gbnVsbDtcblx0aXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0Y2xhc3NOb2RlOiBBU1RDbGFzc05vZGUsXG5cdFx0c3VwZXJDbGFzczogc3RyaW5nIHwgbnVsbCxcblx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0aW5zdGFuY2VGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW10sXG5cdFx0aW5zdGFuY2VNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH0sXG5cdFx0c3RhdGljRmllbGRzOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbltdLFxuXHRcdHN0YXRpY01ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfSxcblx0XHRjb25zdHJ1Y3Rvck1ldGhvZDogQ2xhc3NNZXRob2REZWZpbml0aW9uIHwgbnVsbCA9IG51bGxcblx0KSB7XG5cdFx0dGhpcy5ub2RlID0gY2xhc3NOb2RlO1xuXHRcdHRoaXMuc3VwZXJDbGFzcyA9IHN1cGVyQ2xhc3M7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmluc3RhbmNlRmllbGRzID0gaW5zdGFuY2VGaWVsZHM7XG5cdFx0dGhpcy5pbnN0YW5jZU1ldGhvZHMgPSBpbnN0YW5jZU1ldGhvZHM7XG5cdFx0dGhpcy5zdGF0aWNGaWVsZHMgPSBzdGF0aWNGaWVsZHM7XG5cdFx0dGhpcy5zdGF0aWNNZXRob2RzID0gc3RhdGljTWV0aG9kcztcblx0XHR0aGlzLmNvbnN0cnVjdG9yTWV0aG9kID0gY29uc3RydWN0b3JNZXRob2Q7XG5cdFx0dGhpcy5pc09wZW4gPSBjbGFzc05vZGUubW9kaWZpZXJzLm9wZW47XG5cdH1cblxuXHRzdGF0aWMgZnJvbUFTVChub2RlOiBBU1RDbGFzc05vZGUpOiBDbGFzc0RlZmluaXRpb24ge1xuXHRcdGNvbnN0IGluc3RhbmNlRmllbGRzOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbltdID0gW107XG5cdFx0Y29uc3QgaW5zdGFuY2VNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH0gPSB7fTtcblx0XHRjb25zdCBzdGF0aWNGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW10gPSBbXTtcblx0XHRjb25zdCBzdGF0aWNNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH0gPSB7fTtcblx0XHRsZXQgY29uc3RydWN0b3JNZXRob2Q6IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB8IG51bGwgPSBudWxsO1xuXG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAoY2hpbGQgaW5zdGFuY2VvZiBBU1RGaWVsZE5vZGUpIHtcblx0XHRcdFx0Y29uc3QgZmllbGQgPSBuZXcgQ2xhc3NGaWVsZERlZmluaXRpb24oXG5cdFx0XHRcdFx0Y2hpbGQubmFtZSxcblx0XHRcdFx0XHRjaGlsZC5maWVsZFR5cGVcblx0XHRcdFx0XHRcdD8gY2hpbGQuZmllbGRUeXBlLm5hbWVcblx0XHRcdFx0XHRcdDogbnVsbCxcblx0XHRcdFx0XHRjaGlsZC5tb2RpZmllcnMsXG5cdFx0XHRcdFx0Y2hpbGQuaW5pdFxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdGlmIChmaWVsZC5tb2RpZmllcnMuc3RhdGljKSB7XG5cdFx0XHRcdFx0c3RhdGljRmllbGRzLnB1c2goZmllbGQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGluc3RhbmNlRmllbGRzLnB1c2goZmllbGQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGNoaWxkIGluc3RhbmNlb2YgQVNUTWV0aG9kTm9kZSkge1xuXHRcdFx0XHRjb25zdCBtZXRob2QgPSBuZXcgQ2xhc3NNZXRob2REZWZpbml0aW9uKFxuXHRcdFx0XHRcdGNoaWxkLm5hbWUsXG5cdFx0XHRcdFx0Y2hpbGQucGFyYW1ldGVycyxcblx0XHRcdFx0XHRjaGlsZC5yZXR1cm5UeXBlLFxuXHRcdFx0XHRcdGNoaWxkLm1vZGlmaWVycyxcblx0XHRcdFx0XHRjaGlsZC5jaGlsZHJlblxuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAobWV0aG9kLmlzQ29uc3RydWN0b3IpIHtcblx0XHRcdFx0XHRjb25zdHJ1Y3Rvck1ldGhvZCA9IG1ldGhvZDtcblx0XHRcdFx0fSBlbHNlIGlmIChtZXRob2QubW9kaWZpZXJzLnN0YXRpYykge1xuXHRcdFx0XHRcdHN0YXRpY01ldGhvZHNbbWV0aG9kLm5hbWVdID0gbWV0aG9kO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGluc3RhbmNlTWV0aG9kc1ttZXRob2QubmFtZV0gPSBtZXRob2Q7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93UnVudGltZUVycm9yKGBVbmhhbmRsZWQgbm9kZSAke2NoaWxkLnR5cGV9LmApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgQ2xhc3NEZWZpbml0aW9uKFxuXHRcdFx0bm9kZSxcblx0XHRcdG5vZGUuc3VwZXJDbGFzcz8ubmFtZSB8fCBudWxsLFxuXHRcdFx0bm9kZS5uYW1lLFxuXHRcdFx0aW5zdGFuY2VGaWVsZHMsXG5cdFx0XHRpbnN0YW5jZU1ldGhvZHMsXG5cdFx0XHRzdGF0aWNGaWVsZHMsXG5cdFx0XHRzdGF0aWNNZXRob2RzLFxuXHRcdFx0Y29uc3RydWN0b3JNZXRob2Rcblx0XHQpO1xuXHR9XG5cblx0ZmluZE1ldGhvZE5vZGUobmFtZTogc3RyaW5nKTogQVNUTWV0aG9kTm9kZSB7XG5cdFx0Y29uc3Qgbm9kZSA9IHRoaXMubm9kZVxuXHRcdCAgICAgICAgICAgICAgICAgLmNoaWxkcmVuXG5cdFx0ICAgICAgICAgICAgICAgICAuZmluZChub2RlID0+IG5vZGUubmFtZSA9PT0gbmFtZSk7XG5cblx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVE1ldGhvZE5vZGUpIHtcblx0XHRcdHJldHVybiBub2RlO1xuXHRcdH1cblxuXHRcdHRocm93UnVudGltZUVycm9yKGBNZXRob2QgJHtuYW1lfSBub3QgZm91bmQgaW4gY2xhc3MgJHt0aGlzLm5hbWV9LmApO1xuXHR9XG5cblx0ZmluZEluc3RhbmNlRmllbGREZWZpbml0aW9uKG5hbWU6IHN0cmluZyk6IENsYXNzRmllbGREZWZpbml0aW9uIHtcblx0XHRjb25zdCBmaWVsZERlZmluaXRpb246IENsYXNzRmllbGREZWZpbml0aW9uIHwgdW5kZWZpbmVkID0gdGhpcy5pbnN0YW5jZUZpZWxkc1xuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoKGZpZWxkOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbik6IGJvb2xlYW4gPT4gZmllbGQubmFtZSA9PT0gbmFtZSk7XG5cblx0XHRpZiAoZmllbGREZWZpbml0aW9uIGluc3RhbmNlb2YgQ2xhc3NGaWVsZERlZmluaXRpb24pIHtcblx0XHRcdHJldHVybiBmaWVsZERlZmluaXRpb247XG5cdFx0fVxuXG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYEZpZWxkICR7bmFtZX0gbm90IGZvdW5kIGluIGNsYXNzICR7dGhpcy5uYW1lfS5gKTtcblx0fVxuXG5cdGNvbnN0cnVjdEVtcHR5SW5zdGFuY2Uob2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogSW5zdGFuY2Uge1xuXHRcdGNvbnN0IGluc3RhbmNlID0gbmV3IEluc3RhbmNlKHRoaXMpO1xuXHRcdG9iamVjdFJlZ2lzdHJ5Lmluc3RhbmNlcy5yZWdpc3RlcihpbnN0YW5jZSk7XG5cdFx0cmV0dXJuIGluc3RhbmNlO1xuXHR9XG5cblx0Y29uc3RydWN0TmF0aXZlSW5zdGFuY2Uob2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBhcmdzOiBhbnlbXSA9IFtdKTogSW5zdGFuY2Uge1xuXHRcdGNvbnN0IGluc3RhbmNlOiBJbnN0YW5jZSA9IHRoaXMuY29uc3RydWN0RW1wdHlJbnN0YW5jZShvYmplY3RSZWdpc3RyeSk7XG5cdFx0aW5zdGFuY2UuX19uYXRpdmVJbnN0YW5jZSA9IG5ldyB0aGlzLm5hdGl2ZUluc3RhbmNlKC4uLmFyZ3MpO1xuXHRcdHJldHVybiBpbnN0YW5jZTtcblx0fVxuXG5cdGNvbnN0cnVjdE5ld0luc3RhbmNlV2l0aG91dEFyZ3VtZW50cyhvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IEluc3RhbmNlIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3ROZXdJbnN0YW5jZShbXSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcblx0fVxuXG5cdGNvbnN0cnVjdE5ld0luc3RhbmNlKGFyZ3M6IEFTVE5vZGVbXSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiBJbnN0YW5jZSB7XG5cdFx0Y29uc3QgbmV3Tm9kZSA9IG5ldyBBU1ROZXdOb2RlKGFyZ3MsIG5ldyBBU1RUeXBlTm9kZShBU1RUeXBlTm9kZS5LSU5EX1NJTVBMRSwgdGhpcy5uYW1lKSk7XG5cblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3RJbnN0YW5jZUJ5TmV3Tm9kZShuZXdOb2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXHR9XG5cblx0Y29uc3RydWN0SW5zdGFuY2VCeU5ld05vZGUoZXhwcjogQVNUTmV3Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiBJbnN0YW5jZSB7XG5cdFx0Y29uc3QgaW5zdGFuY2UgPSB0aGlzLmNvbnN0cnVjdEVtcHR5SW5zdGFuY2Uob2JqZWN0UmVnaXN0cnkpO1xuXG5cdFx0aW5zdGFuY2UuaW5pdGlhbGl6ZUluc3RhbmNlRmllbGRzKG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG5cblx0XHRpZiAoIXRoaXMuY29uc3RydWN0b3JNZXRob2QpIHtcblx0XHRcdHJldHVybiBpbnN0YW5jZTtcblx0XHR9XG5cblx0XHRjb25zdCBjb25zdHJ1Y3RvcjogQ2xhc3NNZXRob2REZWZpbml0aW9uID0gdGhpcy5jb25zdHJ1Y3Rvck1ldGhvZDtcblx0XHRjb25zdCBjb25zdHJ1Y3RvckVudiA9IG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCk7XG5cblx0XHRjb25zdCBjb25zdHJ1Y3RvckFyZ3MgPSBldmFsTWV0aG9kQXJndW1lbnRzKFxuXHRcdFx0ZXhwcixcblx0XHRcdGNvbnN0cnVjdG9yLnBhcmFtZXRlcnMsXG5cdFx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRcdGVudmlyb25tZW50LFxuXHRcdFx0ZXZlbnRQaXBlbGluZSxcblx0XHRcdGluc3RhbmNlXG5cdFx0KTtcblxuXHRcdGNvbnN0cnVjdG9yRW52LmRlZmluZShHUkFNTUFSLlRISVMsIGluc3RhbmNlKTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY29uc3RydWN0b3JBcmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBwYXJhbWV0ZXI6IEFTVFBhcmFtZXRlck5vZGUgfCB1bmRlZmluZWQgPSBjb25zdHJ1Y3Rvci5wYXJhbWV0ZXJzW2ldO1xuXHRcdFx0aWYgKHBhcmFtZXRlcikge1xuXHRcdFx0XHRjb25zdHJ1Y3RvckVudi5kZWZpbmUocGFyYW1ldGVyLm5hbWUsIGNvbnN0cnVjdG9yQXJnc1tpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiBjb25zdHJ1Y3Rvci5jaGlsZHJlbikge1xuXHRcdFx0ZXZhbE5vZGUoY2hpbGQsIG9iamVjdFJlZ2lzdHJ5LCBjb25zdHJ1Y3RvckVudiwgZXZlbnRQaXBlbGluZSwgaW5zdGFuY2UpO1xuXHRcdH1cblxuXHRcdHJldHVybiBpbnN0YW5jZTtcblx0fVxuXG5cdGNvbnN0cnVjdE5hdGl2ZUluc3RhbmNlQnlOZXdOb2RlKGV4cHI6IEFTVE5ld05vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogSW5zdGFuY2Uge1xuXHRcdGNvbnN0IGluc3RhbmNlOiBJbnN0YW5jZSA9IHRoaXMuY29uc3RydWN0RW1wdHlJbnN0YW5jZShvYmplY3RSZWdpc3RyeSk7XG5cdFx0Y29uc3QgY29uc3RydWN0b3I6IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB8IG51bGwgPSB0aGlzLmNvbnN0cnVjdG9yTWV0aG9kO1xuXHRcdGNvbnN0IGNvbnN0cnVjdG9yRW52OiBFbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCk7XG5cblx0XHRjb25zdCBjb25zdHJ1Y3RvckFyZ3M6IGFueVtdID0gZXZhbE1ldGhvZEFyZ3VtZW50cyhcblx0XHRcdGV4cHIsXG5cdFx0XHRjb25zdHJ1Y3RvclxuXHRcdFx0XHQ/IGNvbnN0cnVjdG9yLnBhcmFtZXRlcnNcblx0XHRcdFx0OiBbXSxcblx0XHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0ZW52aXJvbm1lbnQsXG5cdFx0XHRldmVudFBpcGVsaW5lLFxuXHRcdFx0aW5zdGFuY2Vcblx0XHQpO1xuXG5cdFx0Y29uc3RydWN0b3JFbnYuZGVmaW5lKEdSQU1NQVIuVEhJUywgaW5zdGFuY2UpO1xuXG5cdFx0aWYgKHRoaXMubmF0aXZlSW5zdGFuY2UgPT09IG51bGwpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKCdDbGFzcyBoYXMgbm8gbmF0aXZlIGluc3RhbmNlJyk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbmF0aXZlSW5zdGFuY2UgPSBuZXcgdGhpcy5uYXRpdmVJbnN0YW5jZSguLi5jb25zdHJ1Y3RvckFyZ3MubWFwKGZyb21MeXJhVmFsdWUpKTtcblx0XHRpZiAobmF0aXZlSW5zdGFuY2UgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlID0gbmF0aXZlSW5zdGFuY2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGluc3RhbmNlO1xuXHR9XG5cblx0aW5pdGlhbGl6ZUluc3RhbmNlRmllbGRzKGluc3RhbmNlOiBJbnN0YW5jZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiB2b2lkIHtcblx0XHRpZiAoaW5zdGFuY2UuX19maWVsZHNJbml0aWFsaXplZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCByYXdWYWx1ZTtcblx0XHRmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMuaW5zdGFuY2VGaWVsZHMpIHtcblx0XHRcdHJhd1ZhbHVlID0gZmllbGQuaW5pdGlhbGl6ZXJcblx0XHRcdFx0PyBldmFsRXhwcmVzc2lvbihmaWVsZC5pbml0aWFsaXplciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKVxuXHRcdFx0XHQ6IG51bGw7XG5cblx0XHRcdGluc3RhbmNlLl9faW5zdGFuY2VGaWVsZHNbZmllbGQubmFtZV0gPSBjYXN0VmFsdWUocmF3VmFsdWUsIGZpZWxkLnR5cGUpO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMuc3RhdGljRmllbGRzKSB7XG5cdFx0XHRyYXdWYWx1ZSA9IGZpZWxkLmluaXRpYWxpemVyXG5cdFx0XHRcdD8gZXZhbEV4cHJlc3Npb24oZmllbGQuaW5pdGlhbGl6ZXIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSlcblx0XHRcdFx0OiBudWxsO1xuXG5cdFx0XHRpbnN0YW5jZS5fX3N0YXRpY0ZpZWxkc1tmaWVsZC5uYW1lXSA9IGNhc3RWYWx1ZShyYXdWYWx1ZSwgZmllbGQudHlwZSk7XG5cdFx0fVxuXG5cdFx0aW5zdGFuY2UuX19maWVsZHNJbml0aWFsaXplZCA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEludGVyZmFjZURlZmluaXRpb24ge1xuXHRub2RlOiBBU1RJbnRlcmZhY2VOb2RlO1xuXHRuYW1lOiBzdHJpbmc7XG5cdHN0YXRpY0ZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXTtcblx0aW5zdGFuY2VNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH07XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0aW50ZXJmYWNlTm9kZTogQVNUSW50ZXJmYWNlTm9kZSxcblx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0c3RhdGljRmllbGRzOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbltdLFxuXHRcdGluc3RhbmNlTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9LFxuXHQpIHtcblx0XHR0aGlzLm5vZGUgPSBpbnRlcmZhY2VOb2RlO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5zdGF0aWNGaWVsZHMgPSBzdGF0aWNGaWVsZHM7XG5cdFx0dGhpcy5pbnN0YW5jZU1ldGhvZHMgPSBpbnN0YW5jZU1ldGhvZHM7XG5cdH1cblxuXHRzdGF0aWMgZnJvbUFTVChub2RlOiBBU1RJbnRlcmZhY2VOb2RlKTogSW50ZXJmYWNlRGVmaW5pdGlvbiB7XG5cdFx0Y29uc3Qgc3RhdGljRmllbGRzOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbltdID0gW107XG5cdFx0Y29uc3QgaW5zdGFuY2VNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH0gPSB7fTtcblxuXHRcdGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuXHRcdFx0aWYgKGNoaWxkIGluc3RhbmNlb2YgQVNURmllbGROb2RlKSB7XG5cdFx0XHRcdGNvbnN0IGZpZWxkID0gbmV3IENsYXNzRmllbGREZWZpbml0aW9uKFxuXHRcdFx0XHRcdGNoaWxkLm5hbWUsXG5cdFx0XHRcdFx0Y2hpbGQuZmllbGRUeXBlXG5cdFx0XHRcdFx0XHQ/IGNoaWxkLmZpZWxkVHlwZS5uYW1lXG5cdFx0XHRcdFx0XHQ6IG51bGwsXG5cdFx0XHRcdFx0Y2hpbGQubW9kaWZpZXJzLFxuXHRcdFx0XHRcdGNoaWxkLmluaXQgPz8gbnVsbFxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdHN0YXRpY0ZpZWxkcy5wdXNoKGZpZWxkKTtcblx0XHRcdH0gZWxzZSBpZiAoY2hpbGQgaW5zdGFuY2VvZiBBU1RNZXRob2ROb2RlKSB7XG5cdFx0XHRcdGNvbnN0IG1ldGhvZCA9IG5ldyBDbGFzc01ldGhvZERlZmluaXRpb24oXG5cdFx0XHRcdFx0Y2hpbGQubmFtZSxcblx0XHRcdFx0XHRjaGlsZC5wYXJhbWV0ZXJzLFxuXHRcdFx0XHRcdGNoaWxkLnJldHVyblR5cGUsXG5cdFx0XHRcdFx0Y2hpbGQubW9kaWZpZXJzLFxuXHRcdFx0XHRcdGNoaWxkLmNoaWxkcmVuXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0aW5zdGFuY2VNZXRob2RzW21ldGhvZC5uYW1lXSA9IG1ldGhvZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93UnVudGltZUVycm9yKGBVbmhhbmRsZWQgbm9kZSAke2NoaWxkLnR5cGV9LmApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgSW50ZXJmYWNlRGVmaW5pdGlvbihcblx0XHRcdG5vZGUsXG5cdFx0XHRub2RlLm5hbWUsXG5cdFx0XHRzdGF0aWNGaWVsZHMsXG5cdFx0XHRpbnN0YW5jZU1ldGhvZHNcblx0XHQpO1xuXHR9XG59XG5cbiIsCiAgICAiaW1wb3J0IHtQYXJzZXJ9IGZyb20gXCIuL3BhcnNlclwiO1xuaW1wb3J0IHtHUkFNTUFSLCBUb2tlbiwgVG9rZW5UeXBlLCBUWVBFX0VOVU19IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5pbXBvcnQge01vZGlmaWVycywgU3VwZXJDbGFzc30gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7XG5cdEFTVEFubm90YXRpb25Ob2RlLFxuXHRBU1RBcnJheU5vZGUsXG5cdEFTVEFzc2lnbm1lbnROb2RlLFxuXHRBU1RCaW5hcnlOb2RlLFxuXHRBU1RDYWxsTm9kZSxcblx0QVNUQ2xhc3NOb2RlLFxuXHRBU1RFbHNlTm9kZSxcblx0QVNURXhwcmVzc2lvbk5vZGUsXG5cdEFTVEZpZWxkTm9kZSxcblx0QVNURm9yZWFjaE5vZGUsXG5cdEFTVElmTm9kZSxcblx0QVNUSW1wb3J0Tm9kZSxcblx0QVNUSW5kZXhOb2RlLFxuXHRBU1RJbnRlcmZhY2VOb2RlLFxuXHRBU1RMYW1iZGFOb2RlLFxuXHRBU1RNYXRjaENhc2VOb2RlLFxuXHRBU1RNYXRjaE5vZGUsXG5cdEFTVE1lbWJlck5vZGUsXG5cdEFTVE1ldGhvZE5vZGUsXG5cdEFTVE5ld05vZGUsXG5cdEFTVE5vZGUsXG5cdEFTVE5vZGVUeXBlLFxuXHRBU1RQYXJhbWV0ZXJOb2RlLFxuXHRBU1RSZXR1cm5Ob2RlLFxuXHRBU1RUaGVuTm9kZSxcblx0QVNUVHlwZU5vZGUsXG5cdEFTVFVuYXJ5Tm9kZSxcblx0QVNUVmFyaWFibGVOb2RlLFxuXHRBU1RWRG9tTm9kZSxcblx0QVNUVkRvbVRleHROb2RlXG59IGZyb20gXCIuLi9hc3RcIjtcbmltcG9ydCB7dGhyb3dQYXJzZXJFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuaW1wb3J0IHtzcGFuRnJvbX0gZnJvbSBcIi4vcGFyc2VyX3NvdXJjZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWl4ZWRUeXBlKCk6IEFTVFR5cGVOb2RlIHtcblx0cmV0dXJuIG5ldyBBU1RUeXBlTm9kZShBU1RUeXBlTm9kZS5LSU5EX1NJTVBMRSwgVFlQRV9FTlVNLk1JWEVEKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVHlwZShwYXJzZXI6IFBhcnNlcik6IEFTVFR5cGVOb2RlIHtcblx0bGV0IHR5cGU7XG5cblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTikge1xuXHRcdHR5cGUgPSBwYXJzZUxhbWJkYVR5cGUocGFyc2VyKTtcblx0fSBlbHNlIHtcblx0XHR0eXBlID0gcGFyc2VTaW1wbGVPckdlbmVyaWNUeXBlKHBhcnNlcik7XG5cdH1cblxuXHRpZiAocGFyc2VyLmNvbnN1bWVJZk9wZXJhdG9yKEdSQU1NQVIuUVVFU1RJT05fTUFSSykpIHtcblx0XHR0eXBlLm51bGxhYmxlID0gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUeXBlUGFyYW1ldGVycyhwYXJzZXI6IFBhcnNlcik6IHN0cmluZ1tdIHtcblx0Y29uc3QgcGFyYW1ldGVycyA9IFtdO1xuXG5cdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkxFU1NfVEhBTik7XG5cblx0ZG8ge1xuXHRcdGNvbnN0IG5hbWUgPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpLnZhbHVlO1xuXHRcdHBhcmFtZXRlcnMucHVzaChuYW1lKTtcblxuXHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLkNPTU1BKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cGFyc2VyLm5leHQoKTtcblx0fSB3aGlsZSAodHJ1ZSk7XG5cblx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuR1JFQVRFUl9USEFOKTtcblxuXHRyZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU2ltcGxlT3JHZW5lcmljVHlwZShwYXJzZXI6IFBhcnNlcik6IEFTVFR5cGVOb2RlIHtcblx0Y29uc3QgbmFtZVRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RUeXBlTm9kZShBU1RUeXBlTm9kZS5LSU5EX1NJTVBMRSwgbmFtZVRva2VuLnZhbHVlKTtcblxuXHRpZiAocGFyc2VyLmNvbnN1bWVJZk9wZXJhdG9yKEdSQU1NQVIuTEVTU19USEFOKSkge1xuXG5cdFx0bm9kZS5raW5kID0gQVNUVHlwZU5vZGUuS0lORF9HRU5FUklDO1xuXG5cdFx0ZG8ge1xuXHRcdFx0bm9kZS50eXBlQXJndW1lbnRzLnB1c2gocGFyc2VUeXBlKHBhcnNlcikpO1xuXHRcdH0gd2hpbGUgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSk7XG5cblx0XHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5HUkVBVEVSX1RIQU4pO1xuXHR9XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUxhbWJkYVR5cGUocGFyc2VyOiBQYXJzZXIpOiBBU1RUeXBlTm9kZSB7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUVHlwZU5vZGUoQVNUVHlwZU5vZGUuS0lORF9MQU1CREEsICdsYW1iZGEnKTtcblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKTtcblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSkge1xuXHRcdGRvIHtcblx0XHRcdG5vZGUucGFyYW1ldGVyVHlwZXMucHVzaChwYXJzZVR5cGUocGFyc2VyKSk7XG5cdFx0fSB3aGlsZSAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKTtcblx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuQVJST1cpO1xuXG5cdG5vZGUucmV0dXJuVHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQcm9ncmFtKHBhcnNlcjogUGFyc2VyKTogQVNUTm9kZSB7XG5cdGNvbnN0IGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXTtcblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudHlwZSAhPT0gVG9rZW5UeXBlLkVPRikge1xuXHRcdGlmIChwYXJzZXIucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5DT01NRU5UKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBub2RlOiBBU1ROb2RlIHwgbnVsbCA9IHBhcnNlU3RhdGVtZW50KHBhcnNlcik7XG5cdFx0XHRpZiAobm9kZSkge1xuXHRcdFx0XHRjaGlsZHJlbi5wdXNoKG5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuUFJPR1JBTU0sIGNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU3RhdGVtZW50KHBhcnNlcjogUGFyc2VyKTogQVNUTm9kZSB8IG51bGwge1xuXHRpZiAocGFyc2VyLmNvbnN1bWVJZkNvbW1lbnQoKSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0c3dpdGNoIChwYXJzZXIucGVlaygpLnZhbHVlKSB7XG5cdFx0Y2FzZSBHUkFNTUFSLklNUE9SVDoge1xuXHRcdFx0cmV0dXJuIHBhcnNlSW1wb3J0KHBhcnNlcik7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5PUEVOOlxuXHRcdGNhc2UgR1JBTU1BUi5DTEFTUzoge1xuXHRcdFx0cmV0dXJuIHBhcnNlQ2xhc3NEZWNsYXJhdGlvbihwYXJzZXIpO1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuSU5URVJGQUNFOiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VJbnRlcmZhY2VEZWNsYXJhdGlvbihwYXJzZXIpO1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuUkVUVVJOOiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VSZXR1cm5TdGF0ZW1lbnQocGFyc2VyKTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkxFVDoge1xuXHRcdFx0cmV0dXJuIHBhcnNlVmFyaWFibGVEZWNsYXJhdGlvbihwYXJzZXIpO1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuSUY6IHtcblx0XHRcdHJldHVybiBwYXJzZUlmRGVjbGFyYXRpb24ocGFyc2VyKTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLk1BVENIOiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VNYXRjaERlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5GT1JFQUNIOiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VGb3JlYWNoRGVjbGFyYXRpb24ocGFyc2VyKTtcblx0XHR9XG5cdFx0ZGVmYXVsdDoge1xuXHRcdFx0cmV0dXJuIHBhcnNlRXhwcmVzc2lvblN0YXRlbWVudChwYXJzZXIpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZXR1cm5TdGF0ZW1lbnQocGFyc2VyOiBQYXJzZXIpOiBBU1RSZXR1cm5Ob2RlIHtcblx0cGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5SRVRVUk4pO1xuXG5cdGxldCBhcmd1bWVudCA9IG51bGw7XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLlNFTUlDT0xPTikge1xuXHRcdGFyZ3VtZW50ID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5TRU1JQ09MT04pO1xuXG5cdHJldHVybiBuZXcgQVNUUmV0dXJuTm9kZShhcmd1bWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUltcG9ydChwYXJzZXI6IFBhcnNlcik6IEFTVEltcG9ydE5vZGUge1xuXHRwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLklNUE9SVCk7XG5cblx0bGV0IG5hbWVzID0gW107XG5cdGxldCBmcm9tID0gbnVsbDtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQlJBQ0VfT1BFTikge1xuXHRcdG5hbWVzID0gcGFyc2VJbXBvcnRMaXN0KHBhcnNlcik7XG5cdFx0cGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5GUk9NKTtcblx0XHRmcm9tID0gcGFyc2VyLmV4cGVjdFN0cmluZygpLnZhbHVlO1xuXHR9IGVsc2Uge1xuXHRcdG5hbWVzLnB1c2gocGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKS52YWx1ZSk7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5TRU1JQ09MT04pO1xuXG5cdHJldHVybiBuZXcgQVNUSW1wb3J0Tm9kZShuYW1lcywgZnJvbSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUltcG9ydExpc3QocGFyc2VyOiBQYXJzZXIpOiBzdHJpbmdbXSB7XG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX09QRU4pO1xuXG5cdGNvbnN0IG5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0Y29uc3QgbmFtZVRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblxuXHRcdG5hbWVzLnB1c2gobmFtZVRva2VuLnZhbHVlKTtcblxuXHRcdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGJyZWFrO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfQ0xPU0UpO1xuXG5cdHJldHVybiBuYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ2xhc3NEZWNsYXJhdGlvbihwYXJzZXI6IFBhcnNlcik6IEFTVENsYXNzTm9kZSB7XG5cdGNvbnN0IGFubm90YXRpb25zID0gcGFyc2VBbm5vdGF0aW9ucyhwYXJzZXIpO1xuXHRjb25zdCBtb2RpZmllcnMgPSBwYXJzZU1vZGlmaWVycyhwYXJzZXIsIFtHUkFNTUFSLk9QRU5dKTtcblxuXHRjb25zdCBjbGFzc1Rva2VuID0gcGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5DTEFTUyk7XG5cdGNvbnN0IG5hbWVUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cblx0bGV0IHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5MRVNTX1RIQU4pIHtcblx0XHR0eXBlUGFyYW1ldGVycyA9IHBhcnNlVHlwZVBhcmFtZXRlcnMocGFyc2VyKTtcblx0fVxuXG5cdGxldCBzdXBlckNsYXNzID0gbnVsbDtcblx0aWYgKHBhcnNlci5jb25zdW1lSWZLZXl3b3JkKEdSQU1NQVIuRVhURU5EUykpIHtcblx0XHRzdXBlckNsYXNzID0gbmV3IFN1cGVyQ2xhc3MoXG5cdFx0XHRBU1ROb2RlVHlwZS5JREVOVElGSUVSLFxuXHRcdFx0cGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKS52YWx1ZVxuXHRcdCk7XG5cdH1cblxuXHRsZXQgaW1wbGVtZW50c0ludGVyZmFjZXMgPSBbXTtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuSU1QTEVNRU5UUykge1xuXHRcdHBhcnNlci5uZXh0KCk7XG5cblx0XHRkbyB7XG5cdFx0XHRjb25zdCBpbnRlcmZhY2VUeXBlID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cdFx0XHRpbXBsZW1lbnRzSW50ZXJmYWNlcy5wdXNoKGludGVyZmFjZVR5cGUpO1xuXHRcdH0gd2hpbGUgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSk7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9PUEVOKTtcblxuXHRjb25zdCBjaGlsZHJlbjogQVNUTm9kZVtdID0gW107XG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLkJSQUNFX0NMT1NFKSB7XG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLkNPTU1FTlQpIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBtZW1iZXI6IEFTVE5vZGUgfCBudWxsID0gcGFyc2VDbGFzc01lbWJlcihwYXJzZXIpO1xuXHRcdGlmIChtZW1iZXIgPT09IG51bGwpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjaGlsZHJlbi5wdXNoKG1lbWJlcik7XG5cdH1cblxuXHRjb25zdCBicmFjZUNsb3NlVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9DTE9TRSk7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RDbGFzc05vZGUoXG5cdFx0bmFtZVRva2VuLnZhbHVlLFxuXHRcdGFubm90YXRpb25zLFxuXHRcdG1vZGlmaWVycyxcblx0XHR0eXBlUGFyYW1ldGVycyxcblx0XHRpbXBsZW1lbnRzSW50ZXJmYWNlcyxcblx0XHRzdXBlckNsYXNzLFxuXHRcdGNoaWxkcmVuXG5cdCk7XG5cblx0bm9kZS5zcGFuID0gc3BhbkZyb20oY2xhc3NUb2tlbiwgYnJhY2VDbG9zZVRva2VuKTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUludGVyZmFjZURlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUSW50ZXJmYWNlTm9kZSB7XG5cdGNvbnN0IGFubm90YXRpb25zID0gcGFyc2VBbm5vdGF0aW9ucyhwYXJzZXIpO1xuXHRjb25zdCBtb2RpZmllcnMgPSBwYXJzZU1vZGlmaWVycyhwYXJzZXIsIFtdKTsgLy8gaW50ZXJmYWNlcyBzaW5kIGltcGxpeml0IHB1YmxpY1xuXG5cdGNvbnN0IGludGVyZmFjZVRva2VuID0gcGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5JTlRFUkZBQ0UpO1xuXHRjb25zdCBuYW1lVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXG5cdGxldCB0eXBlUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuTEVTU19USEFOKSB7XG5cdFx0dHlwZVBhcmFtZXRlcnMgPSBwYXJzZVR5cGVQYXJhbWV0ZXJzKHBhcnNlcik7XG5cdH1cblxuXHRsZXQgZXh0ZW5kc0ludGVyZmFjZXMgPSBbXTtcblx0aWYgKHBhcnNlci5jb25zdW1lSWZLZXl3b3JkKEdSQU1NQVIuRVhURU5EUykpIHtcblx0XHRkbyB7XG5cdFx0XHRleHRlbmRzSW50ZXJmYWNlcy5wdXNoKHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCkudmFsdWUpO1xuXHRcdH0gd2hpbGUgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSk7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9PUEVOKTtcblxuXHRjb25zdCBjaGlsZHJlbjogQVNUTm9kZVtdID0gW107XG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLkJSQUNFX0NMT1NFKSB7XG5cdFx0aWYgKHBhcnNlci5jb25zdW1lSWZDb21tZW50KCkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IG1lbWJlciA9IHBhcnNlQ2xhc3NNZW1iZXIocGFyc2VyKTtcblx0XHRpZiAobWVtYmVyID09PSBudWxsKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAobWVtYmVyIGluc3RhbmNlb2YgQVNURmllbGROb2RlICYmICFtZW1iZXIubW9kaWZpZXJzLnN0YXRpYykge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcignSW50ZXJmYWNlIGZpZWxkcyBtdXN0IGJlIHN0YXRpYy4nKTtcblx0XHR9XG5cblx0XHRpZiAobWVtYmVyIGluc3RhbmNlb2YgQVNUTWV0aG9kTm9kZSAmJiBtZW1iZXIuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcignSW50ZXJmYWNlIG1ldGhvZHMgbXVzdCBub3QgaGF2ZSBhIGJvZHkuJyk7XG5cdFx0fVxuXG5cdFx0Y2hpbGRyZW4ucHVzaChtZW1iZXIpO1xuXHR9XG5cblx0Y29uc3QgYnJhY2VDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfQ0xPU0UpO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUSW50ZXJmYWNlTm9kZShcblx0XHRuYW1lVG9rZW4udmFsdWUsXG5cdFx0YW5ub3RhdGlvbnMsXG5cdFx0bW9kaWZpZXJzLFxuXHRcdHR5cGVQYXJhbWV0ZXJzLFxuXHRcdGV4dGVuZHNJbnRlcmZhY2VzLFxuXHRcdGNoaWxkcmVuXG5cdCk7XG5cblx0bm9kZS5zcGFuID0gc3BhbkZyb20oaW50ZXJmYWNlVG9rZW4sIGJyYWNlQ2xvc2VUb2tlbik7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBbm5vdGF0aW9ucyhwYXJzZXI6IFBhcnNlcik6IEFTVEFubm90YXRpb25Ob2RlW10ge1xuXHRjb25zdCBhbm5vdGF0aW9ucyA9IFtdO1xuXG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5BTk5PVEFUSU9OKSB7XG5cdFx0YW5ub3RhdGlvbnMucHVzaChwYXJzZUFubm90YXRpb24ocGFyc2VyKSk7XG5cdH1cblxuXHRyZXR1cm4gYW5ub3RhdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUFubm90YXRpb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RBbm5vdGF0aW9uTm9kZSB7XG5cdGNvbnN0IHRva2VuID0gcGFyc2VyLmV4cGVjdEFubm90YXRpb24oKTtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RBbm5vdGF0aW9uTm9kZSh0b2tlbi52YWx1ZSk7XG5cblx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pKSB7XG5cdFx0d2hpbGUgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpIHtcblx0XHRcdGNvbnN0IGtleSA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCkudmFsdWU7XG5cdFx0XHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5BU1NJR04pO1xuXG5cdFx0XHRjb25zdCB2YWx1ZSA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHRcdFx0bm9kZS5wcm9wZXJ0aWVzLnNldChrZXksIHZhbHVlKTtcblxuXHRcdFx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQ09NTUEpIHtcblx0XHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cdH1cblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTW9kaWZpZXJzKHBhcnNlcjogUGFyc2VyLCBhbGxvd2VkOiBzdHJpbmdbXSk6IE1vZGlmaWVycyB7XG5cdGNvbnN0IG1vZGlmaWVyczogeyBbaW5kZXg6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuXG5cdGFsbG93ZWQuZm9yRWFjaChtb2RpZmllciA9PiBtb2RpZmllcnNbbW9kaWZpZXJdID0gZmFsc2UpO1xuXG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5LRVlXT1JEICYmIGFsbG93ZWQuaW5jbHVkZXMocGFyc2VyLnBlZWsoKS52YWx1ZSkpIHtcblx0XHRjb25zdCBtb2RpZmllciA9IHBhcnNlci5uZXh0KCkudmFsdWU7XG5cblx0XHRpZiAobW9kaWZpZXJzW21vZGlmaWVyXSkge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcihgRHVwbGljYXRlIG1vZGlmaWVyOiAke21vZGlmaWVyfWApO1xuXHRcdH1cblxuXHRcdG1vZGlmaWVyc1ttb2RpZmllcl0gPSB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIG5ldyBNb2RpZmllcnMobW9kaWZpZXJzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVycyhwYXJzZXI6IFBhcnNlcik6IEFTVFBhcmFtZXRlck5vZGVbXSB7XG5cdGNvbnN0IHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSA9IFtdO1xuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKSB7XG5cdFx0cmV0dXJuIHBhcmFtZXRlcnM7XG5cdH1cblxuXHRkbyB7XG5cdFx0Y29uc3QgbmFtZVRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblx0XHRsZXQgdHlwZSA9IG51bGw7XG5cdFx0bGV0IGRlZmF1bHRWYWx1ZSA9IG51bGw7XG5cblx0XHRsZXQgdHlwZVRva2VuID0gbnVsbDtcblx0XHRsZXQgZGVmYXVsdFZhbHVlVG9rZW4gPSBudWxsO1xuXG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQ09MT04pIHtcblx0XHRcdHR5cGVUb2tlbiA9IHBhcnNlci5uZXh0KCk7XG5cdFx0XHR0eXBlID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cdFx0fVxuXG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQVNTSUdOKSB7XG5cdFx0XHRkZWZhdWx0VmFsdWVUb2tlbiA9IHBhcnNlci5uZXh0KCk7XG5cdFx0XHRkZWZhdWx0VmFsdWUgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0XHR9XG5cblx0XHRjb25zdCBub2RlID0gbmV3IEFTVFBhcmFtZXRlck5vZGUobmFtZVRva2VuLnZhbHVlLCB0eXBlLCBkZWZhdWx0VmFsdWUpO1xuXHRcdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHR5cGVUb2tlbiB8fCBuYW1lVG9rZW4sIGRlZmF1bHRWYWx1ZVRva2VuIHx8IG5hbWVUb2tlbik7XG5cblx0XHRwYXJhbWV0ZXJzLnB1c2gobm9kZSk7XG5cdH0gd2hpbGUgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSk7XG5cblx0cmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNsYXNzTWVtYmVyKHBhcnNlcjogUGFyc2VyKTogQVNUTm9kZSB8IG51bGwge1xuXHRjb25zdCBzdGFydFRva2VuID0gcGFyc2VyLnBlZWsoKTtcblxuXHRjb25zdCBhbm5vdGF0aW9ucyA9IHBhcnNlQW5ub3RhdGlvbnMocGFyc2VyKTtcblx0Y29uc3QgbW9kaWZpZXJzID0gcGFyc2VNb2RpZmllcnMoXG5cdFx0cGFyc2VyLFxuXHRcdFtcblx0XHRcdEdSQU1NQVIuUFVCTElDLFxuXHRcdFx0R1JBTU1BUi5QUklWQVRFLFxuXHRcdFx0R1JBTU1BUi5TVEFUSUMsXG5cdFx0XHRHUkFNTUFSLlJFQURPTkxZXG5cdFx0XVxuXHQpO1xuXG5cdGNvbnN0IG5hbWVUb2tlbiA9IHBhcnNlci5leHBlY3RPbmVPZihbVG9rZW5UeXBlLklERU5USUZJRVIsIFRva2VuVHlwZS5LRVlXT1JEXSk7XG5cblx0bGV0IGZpZWxkVHlwZSA9IG51bGw7XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkNPTE9OKSB7XG5cdFx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTE9OKSkge1xuXHRcdFx0ZmllbGRUeXBlID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cdFx0fVxuXHR9XG5cblx0bGV0IGluaXQgPSBudWxsO1xuXHRpZiAocGFyc2VyLmNvbnN1bWVJZk9wZXJhdG9yKEdSQU1NQVIuQVNTSUdOKSkge1xuXHRcdGluaXQgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0fVxuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLlNFTUlDT0xPTikge1xuXHRcdGlmICghbW9kaWZpZXJzLnB1YmxpYyAmJiAhbW9kaWZpZXJzLnByaXZhdGUpIHtcblx0XHRcdG1vZGlmaWVycy5wcml2YXRlID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRjb25zdCBzZW1pY29sb25Ub2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlNFTUlDT0xPTik7XG5cblx0XHRjb25zdCBub2RlID0gbmV3IEFTVEZpZWxkTm9kZShuYW1lVG9rZW4udmFsdWUsIG1vZGlmaWVycywgZmllbGRUeXBlLCBpbml0KTtcblx0XHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBzZW1pY29sb25Ub2tlbik7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRsZXQgdHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdID0gW107XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkxFU1NfVEhBTikge1xuXHRcdHR5cGVQYXJhbWV0ZXJzID0gcGFyc2VUeXBlUGFyYW1ldGVycyhwYXJzZXIpO1xuXHR9XG5cblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTikge1xuXHRcdGlmICghbW9kaWZpZXJzLnB1YmxpYyAmJiAhbW9kaWZpZXJzLnByaXZhdGUpIHtcblx0XHRcdG1vZGlmaWVycy5wdWJsaWMgPSB0cnVlO1xuXHRcdH1cblxuXHRcdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pO1xuXHRcdGNvbnN0IHBhcmFtZXRlcnMgPSBwYXJzZVBhcmFtZXRlcnMocGFyc2VyKTtcblx0XHRjb25zdCBwYXJlbnRoZXNlc0Nsb3NlVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cblx0XHRsZXQgcmV0dXJuVHlwZSA9IG51bGw7XG5cdFx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTE9OKSkge1xuXHRcdFx0cmV0dXJuVHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNoaWxkcmVuOiBBU1ROb2RlW10gPSBwYXJzZUJsb2NrKHBhcnNlcik7XG5cblx0XHRjb25zdCBub2RlID0gbmV3IEFTVE1ldGhvZE5vZGUoXG5cdFx0XHRuYW1lVG9rZW4udmFsdWUsXG5cdFx0XHRuYW1lVG9rZW4udmFsdWUgPT09IEdSQU1NQVIuQ09OU1RSVUNUT1IgPyBBU1ROb2RlVHlwZS5DT05TVFJVQ1RPUiA6IEFTVE5vZGVUeXBlLk1FVEhPRCxcblx0XHRcdGFubm90YXRpb25zLFxuXHRcdFx0bW9kaWZpZXJzLFxuXHRcdFx0dHlwZVBhcmFtZXRlcnMsXG5cdFx0XHRwYXJhbWV0ZXJzLFxuXHRcdFx0cmV0dXJuVHlwZSxcblx0XHRcdGNoaWxkcmVuXG5cdFx0KTtcblxuXHRcdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIHBhcmVudGhlc2VzQ2xvc2VUb2tlbik7XG5cblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdHRocm93UGFyc2VyRXJyb3IoYEludmFsaWQgY2xhc3MgbWVtYmVyOiAke25hbWVUb2tlbi52YWx1ZX1gKTtcblxuXHRyZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQmxvY2socGFyc2VyOiBQYXJzZXIpOiBBU1ROb2RlW10ge1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5TRU1JQ09MT04pIHtcblx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX09QRU4pO1xuXG5cdGNvbnN0IGNoaWxkcmVuID0gW107XG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLkJSQUNFX0NMT1NFKSB7XG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLkNPTU1FTlQpIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y29uc3QgY2hpbGQ6IEFTVE5vZGUgfCBudWxsID0gcGFyc2VTdGF0ZW1lbnQocGFyc2VyKTtcblx0XHRpZiAoY2hpbGQpIHtcblx0XHRcdGNoaWxkcmVuLnB1c2goY2hpbGQpO1xuXHRcdH1cblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX0NMT1NFKTtcblxuXHRyZXR1cm4gY2hpbGRyZW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVZhcmlhYmxlRGVjbGFyYXRpb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RWYXJpYWJsZU5vZGUge1xuXHRjb25zdCBsZXRUb2tlbiA9IHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuTEVUKTtcblx0Y29uc3QgbmFtZVRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblxuXHRsZXQgdHlwZUFubm90YXRpb24gPSBudWxsO1xuXHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09MT04pKSB7XG5cdFx0dHlwZUFubm90YXRpb24gPSBwYXJzZVR5cGUocGFyc2VyKTtcblx0fVxuXG5cdGxldCBpbml0ID0gbnVsbDtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQVNTSUdOKSB7XG5cdFx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuQVNTSUdOKTtcblx0XHRpbml0ID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdH1cblxuXHRjb25zdCBzZW1pY29sb25Ub2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlNFTUlDT0xPTik7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RWYXJpYWJsZU5vZGUobmFtZVRva2VuLnZhbHVlLCB0eXBlQW5ub3RhdGlvbiwgaW5pdCk7XG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKGxldFRva2VuLCBzZW1pY29sb25Ub2tlbik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUlmRGVjbGFyYXRpb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RJZk5vZGUge1xuXHRjb25zdCBzdGFydFRva2VuID0gcGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5JRik7XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTik7XG5cdGNvbnN0IGNvbmRpdGlvbiA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHRjb25zdCBwYXJlbnRoZXNlc0Nsb3NlVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RJZk5vZGUoY29uZGl0aW9uLCBuZXcgQVNUVGhlbk5vZGUocGFyc2VCbG9jayhwYXJzZXIpKSk7XG5cblx0aWYgKHBhcnNlci5jb25zdW1lSWZLZXl3b3JkKEdSQU1NQVIuRUxTRSkpIHtcblx0XHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5JRikge1xuXHRcdFx0bm9kZS5lbHNlID0gcGFyc2VJZkRlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5vZGUuZWxzZSA9IG5ldyBBU1RFbHNlTm9kZShwYXJzZUJsb2NrKHBhcnNlcikpO1xuXHRcdH1cblx0fVxuXG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIHBhcmVudGhlc2VzQ2xvc2VUb2tlbik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU1hdGNoRGVjbGFyYXRpb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RNYXRjaE5vZGUge1xuXHRjb25zdCBzdGFydFRva2VuID0gcGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5NQVRDSCk7XG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pO1xuXG5cdGNvbnN0IGV4cHJlc3Npb24gPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX09QRU4pO1xuXG5cdGNvbnN0IG1hdGNoQ2FzZXM6IEFTVE1hdGNoQ2FzZU5vZGVbXSA9IFtdO1xuXHRsZXQgZGVmYXVsdENhc2U6IEFTVE1hdGNoQ2FzZU5vZGUgfCBudWxsID0gbnVsbDtcblxuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5CUkFDRV9DTE9TRSkge1xuXHRcdGNvbnN0IG1hdGNoQ2FzZTogQVNUTWF0Y2hDYXNlTm9kZSA9IHBhcnNlTWF0Y2hDYXNlRGVjbGFyYXRpb24ocGFyc2VyKTtcblx0XHRpZiAobWF0Y2hDYXNlLnRlc3QgPT09IG51bGwpIHtcblx0XHRcdGRlZmF1bHRDYXNlID0gbWF0Y2hDYXNlO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdG1hdGNoQ2FzZXMucHVzaChtYXRjaENhc2UpO1xuXHR9XG5cblx0Y29uc3QgYnJhY2VDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfQ0xPU0UpO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUTWF0Y2hOb2RlKGV4cHJlc3Npb24sIG1hdGNoQ2FzZXMsIGRlZmF1bHRDYXNlKTtcblx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgYnJhY2VDbG9zZVRva2VuKTtcblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTWF0Y2hDYXNlRGVjbGFyYXRpb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RNYXRjaENhc2VOb2RlIHtcblx0Y29uc3QgY2FzZU5vZGUgPSBuZXcgQVNUTWF0Y2hDYXNlTm9kZSgpO1xuXG5cdGlmIChwYXJzZXIuY29uc3VtZUlmS2V5d29yZChHUkFNTUFSLkRFRkFVTFQpKSB7XG5cdFx0Y2FzZU5vZGUudGVzdCA9IG51bGw7XG5cdH0gZWxzZSB7XG5cdFx0Y2FzZU5vZGUudGVzdCA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQ09MT04pO1xuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkJSQUNFX09QRU4pIHtcblx0XHRjYXNlTm9kZS5jaGlsZHJlbiA9IHBhcnNlQmxvY2socGFyc2VyKTtcblx0fSBlbHNlIHtcblx0XHRjb25zdCBjaGlsZDogQVNUTm9kZSB8IG51bGwgPSBwYXJzZVN0YXRlbWVudChwYXJzZXIpO1xuXHRcdGlmIChjaGlsZCkge1xuXHRcdFx0Y2FzZU5vZGUuY2hpbGRyZW4ucHVzaChjaGlsZClcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY2FzZU5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUZvcmVhY2hEZWNsYXJhdGlvbihwYXJzZXI6IFBhcnNlcik6IEFTVEZvcmVhY2hOb2RlIHtcblx0Y29uc3Qgc3RhcnRUb2tlbiA9IHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuRk9SRUFDSCk7XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTik7XG5cblx0Y29uc3QgaXRlcmF0b3JUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cdGNvbnN0IGl0ZXJhdG9yID0gaXRlcmF0b3JUb2tlbi52YWx1ZTtcblxuXHRwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLklOKTtcblxuXHRjb25zdCBpdGVyYWJsZSA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXG5cdGNvbnN0IHBhcmVudGhlc2VzQ2xvc2VUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVEZvcmVhY2hOb2RlKGl0ZXJhdG9yLCBpdGVyYWJsZSwgcGFyc2VCbG9jayhwYXJzZXIpKTtcblx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgcGFyZW50aGVzZXNDbG9zZVRva2VuKTtcblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQXJyYXkocGFyc2VyOiBQYXJzZXIpOiBBU1RBcnJheU5vZGUge1xuXHRjb25zdCBzdGFydFRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfT1BFTik7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RBcnJheU5vZGUoKTtcblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9DTE9TRSkge1xuXHRcdGRvIHtcblx0XHRcdG5vZGUuZWxlbWVudHMucHVzaChwYXJzZUV4cHJlc3Npb24ocGFyc2VyKSk7XG5cdFx0fSB3aGlsZSAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKTtcblx0fVxuXG5cdGNvbnN0IGJyYWNrZXRTcXVhcmVDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfQ0xPU0UpO1xuXG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIGJyYWNrZXRTcXVhcmVDbG9zZVRva2VuKTtcblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTGFtYmRhKHBhcnNlcjogUGFyc2VyKTogQVNUTGFtYmRhTm9kZSB7XG5cdGNvbnN0IHN0YXJ0VG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9PUEVOKTtcblxuXHRjb25zdCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10gPSBbXTtcblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQVJST1cpIHtcblx0XHRjb25zdCBuYW1lID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKS52YWx1ZTtcblx0XHRsZXQgdHlwZSA9IG51bGw7XG5cdFx0bGV0IGRlZmF1bHRWYWx1ZSA9IG51bGw7XG5cblx0XHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09MT04pKSB7XG5cdFx0XHR0eXBlID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cdFx0fVxuXG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQVNTSUdOKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdFx0ZGVmYXVsdFZhbHVlID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdFx0fVxuXG5cdFx0cGFyYW1ldGVycy5wdXNoKG5ldyBBU1RQYXJhbWV0ZXJOb2RlKG5hbWUsIHR5cGUsIGRlZmF1bHRWYWx1ZSkpO1xuXG5cdFx0cGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuQVJST1cpO1xuXG5cdGxldCByZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSA9IGNyZWF0ZU1peGVkVHlwZSgpO1xuXHRpZiAocGFyc2VyLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuSURFTlRJRklFUikge1xuXHRcdHJldHVyblR5cGUgPSBwYXJzZVR5cGUocGFyc2VyKTtcblx0XHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5DT0xPTikge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuVHlwZSA9IGNyZWF0ZU1peGVkVHlwZSgpO1xuXHRcdFx0cGFyc2VyLnJld2luZCgpO1xuXHRcdH1cblx0fVxuXG5cdGxldCBjaGlsZHJlbiA9IFtdO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5CUkFDRV9PUEVOKSB7XG5cdFx0Y2hpbGRyZW4gPSBwYXJzZUJsb2NrKHBhcnNlcik7XG5cdH0gZWxzZSB7XG5cdFx0Y2hpbGRyZW4ucHVzaChwYXJzZUV4cHJlc3Npb24ocGFyc2VyKSk7XG5cdH1cblxuXHRjb25zdCBicmFjZUNsb3NlVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9DTE9TRSk7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RMYW1iZGFOb2RlKHBhcmFtZXRlcnMsIHJldHVyblR5cGUsIGNoaWxkcmVuKTtcblx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgYnJhY2VDbG9zZVRva2VuKTtcblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvb2tzTGlrZUxhbWJkYShwYXJzZXI6IFBhcnNlcik6IGJvb2xlYW4ge1xuXHRjb25zdCBzdGFydDogbnVtYmVyID0gcGFyc2VyLnBvc2l0aW9uKCk7XG5cblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQlJBQ0VfT1BFTikge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHBhcnNlci5uZXh0KCk7XG5cblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLklERU5USUZJRVIpIHtcblx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT0xPTikpIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0fVxuXHRcdGlmICghcGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRjb25zdCBpc0xhbWJkYTogYm9vbGVhbiA9IHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQVJST1c7XG5cdHBhcnNlci5zZWVrQXQoc3RhcnQpXG5cdHJldHVybiBpc0xhbWJkYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRXhwcmVzc2lvblN0YXRlbWVudChwYXJzZXI6IFBhcnNlcik6IEFTVEV4cHJlc3Npb25Ob2RlIHtcblx0Y29uc3QgZXhwciA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlNFTUlDT0xPTik7XG5cblx0cmV0dXJuIG5ldyBBU1RFeHByZXNzaW9uTm9kZShleHByKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VFeHByZXNzaW9uKHBhcnNlcjogUGFyc2VyLCBwcmVjZWRlbmNlOiBudW1iZXIgPSAwKTogQVNUTm9kZSB7XG5cdGxldCBleHByOiBBU1ROb2RlID0gcGFyc2VQb3N0Zml4KHBhcnNlciwgcGFyc2VVbmFyeShwYXJzZXIpKTtcblxuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdGNvbnN0IHRva2VuID0gcGFyc2VyLnBlZWsoKTtcblx0XHRpZiAoIXRva2VuKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRsZXQgdG9rZW5QcmVjZWRlbmNlID0gbG9va3VwUHJlY2VkZW5jZSh0b2tlbik7XG5cdFx0aWYgKHRva2VuUHJlY2VkZW5jZSA8IHByZWNlZGVuY2UpIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5BU1NJR04pIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0XHRleHByID0gbmV3IEFTVEFzc2lnbm1lbnROb2RlKGV4cHIsIHBhcnNlRXhwcmVzc2lvbihwYXJzZXIsIHRva2VuUHJlY2VkZW5jZSkpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKEdSQU1NQVIuTUFUSF9PUEVSQVRPUlMuaW5jbHVkZXModG9rZW4udmFsdWUpXG5cdFx0XHR8fCBHUkFNTUFSLkxPR0lDX09QRVJBVE9SUy5pbmNsdWRlcyh0b2tlbi52YWx1ZSkpIHtcblx0XHRcdGNvbnN0IHN0YXJ0VG9rZW4gPSBwYXJzZXIubmV4dCgpO1xuXHRcdFx0Y29uc3QgcmlnaHQgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyLCB0b2tlblByZWNlZGVuY2UgKyAxKTtcblx0XHRcdGNvbnN0IGVuZFRva2VuID0gcGFyc2VyLnBlZWsoKTtcblxuXHRcdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RCaW5hcnlOb2RlKGV4cHIsIHJpZ2h0LCB0b2tlbi52YWx1ZSk7XG5cdFx0XHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBlbmRUb2tlbik7XG5cdFx0XHRleHByID0gbm9kZTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGJyZWFrO1xuXHR9XG5cblx0cmV0dXJuIGV4cHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVZEb21FeHByZXNzaW9uKHBhcnNlcjogUGFyc2VyKTogQVNUVkRvbU5vZGUge1xuXHRwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLlZET00pO1xuXHRyZXR1cm4gcGFyc2VWRG9tRWxlbWVudChwYXJzZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VWRG9tRWxlbWVudChwYXJzZXI6IFBhcnNlcik6IEFTVFZEb21Ob2RlIHtcblx0cGFyc2VyLmNvbnN1bWVJZlRleHQoKTtcblxuXHRjb25zdCBzdGFydFRva2VuOiBUb2tlbiA9IHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkxFU1NfVEhBTik7XG5cdGNvbnN0IHRhZ1Rva2VuOiBUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cdGNvbnN0IHRhZzogc3RyaW5nID0gdGFnVG9rZW4udmFsdWU7XG5cblx0cGFyc2VyLmNvbnN1bWVJZlRleHQoKTtcblxuXHRjb25zdCBwcm9wcyA9IG5ldyBNYXA8c3RyaW5nLCBBU1ROb2RlPigpO1xuXHR3aGlsZSAodHJ1ZSkge1xuXG5cdFx0aWYgKHBhcnNlci5wZWVrSXMoR1JBTU1BUi5HUkVBVEVSX1RIQU4pKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRpZiAocGFyc2VyLnBlZWtJcyhHUkFNTUFSLlhNTF9DTE9TRV9UQUcpKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRjb25zdCBuYW1lVG9rZW46IFRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblx0XHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5BU1NJR04pO1xuXG5cdFx0bGV0IHZhbHVlOiBBU1ROb2RlO1xuXG5cdFx0aWYgKHBhcnNlci5wZWVrSXMoR1JBTU1BUi5CUkFDRV9PUEVOKSkge1xuXHRcdFx0aWYgKGxvb2tzTGlrZUxhbWJkYShwYXJzZXIpKSB7XG5cdFx0XHRcdHZhbHVlID0gcGFyc2VMYW1iZGEocGFyc2VyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0XHRcdHZhbHVlID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdFx0XHRcdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX0NMT1NFKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFsdWUgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0XHR9XG5cblx0XHRwcm9wcy5zZXQobmFtZVRva2VuLnZhbHVlLCB2YWx1ZSk7XG5cblx0XHRwYXJzZXIuY29uc3VtZUlmVGV4dCgpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuR1JFQVRFUl9USEFOKTtcblxuXHRjb25zdCBjaGlsZHJlbjogQVNUTm9kZVtdID0gW107XG5cdHdoaWxlICghcGFyc2VyLnBlZWtJcyhHUkFNTUFSLlhNTF9PUEVOX0NMT1NFX1RBRykpIHtcblxuXHRcdGlmIChwYXJzZXIucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5PUEVSQVRPUikge1xuXHRcdFx0Y2hpbGRyZW4ucHVzaChwYXJzZVZEb21FbGVtZW50KHBhcnNlcikpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y2hpbGRyZW4ucHVzaChwYXJzZVZEb21UZXh0KHBhcnNlcikpO1xuXG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5YTUxfT1BFTl9DTE9TRV9UQUcpO1xuXHRwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5HUkVBVEVSX1RIQU4pO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUVkRvbU5vZGUodGFnLCBwcm9wcywgY2hpbGRyZW4pO1xuXHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBwYXJzZXIucGVlaygpKTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVZEb21UZXh0KHBhcnNlcjogUGFyc2VyKTogQVNUVkRvbVRleHROb2RlIHtcblx0Y29uc3QgdG9rZW46IFRva2VuID0gcGFyc2VyLmV4cGVjdE9uZU9mKFxuXHRcdFtcblx0XHRcdFRva2VuVHlwZS5JREVOVElGSUVSLFxuXHRcdFx0VG9rZW5UeXBlLk9QRVJBVE9SLFxuXHRcdFx0VG9rZW5UeXBlLktFWVdPUkQsXG5cdFx0XHRUb2tlblR5cGUuUFVOQ1RVQVRJT04sXG5cdFx0XHRUb2tlblR5cGUuVEVYVFxuXHRcdF1cblx0KTtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RWRG9tVGV4dE5vZGUodG9rZW4udmFsdWUpO1xuXHRub2RlLnNwYW4gPSBzcGFuRnJvbSh0b2tlbiwgdG9rZW4pO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQXJndW1lbnRzKHBhcnNlcjogUGFyc2VyKTogQVNUTm9kZVtdIHtcblx0Y29uc3QgYXJnczogQVNUTm9kZVtdID0gW107XG5cblx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKSkge1xuXHRcdHJldHVybiBhcmdzO1xuXHR9XG5cblx0YXJncy5wdXNoKHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpKTtcblxuXHR3aGlsZSAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKSB7XG5cdFx0YXJncy5wdXNoKHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKTtcblx0cmV0dXJuIGFyZ3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVVuYXJ5KHBhcnNlcjogUGFyc2VyKTogQVNUTm9kZSB8IEFTVFVuYXJ5Tm9kZSB7XG5cdGNvbnN0IHRva2VuOiBUb2tlbiA9IHBhcnNlci5wZWVrKCk7XG5cblx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5LRVlXT1JEICYmIHRva2VuLnZhbHVlID09PSBHUkFNTUFSLlZET00pIHtcblx0XHRyZXR1cm4gcGFyc2VWRG9tRXhwcmVzc2lvbihwYXJzZXIpO1xuXHR9XG5cblx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLkVYQ0xBTUFUSU9OX01BUkspIHtcblx0XHRwYXJzZXIubmV4dCgpO1xuXG5cdFx0Y29uc3QgdW5hcnk6IEFTVE5vZGUgfCBBU1RVbmFyeU5vZGUgPSBwYXJzZVVuYXJ5KHBhcnNlcik7XG5cblx0XHRyZXR1cm4gbmV3IEFTVFVuYXJ5Tm9kZShHUkFNTUFSLkVYQ0xBTUFUSU9OX01BUkssIHVuYXJ5KTtcblx0fVxuXG5cdHJldHVybiBwYXJzZVByaW1hcnkocGFyc2VyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUHJpbWFyeShwYXJzZXI6IFBhcnNlcik6IEFTVE5vZGUge1xuXHRpZiAobG9va3NMaWtlTGFtYmRhKHBhcnNlcikpIHtcblx0XHRyZXR1cm4gcGFyc2VMYW1iZGEocGFyc2VyKTtcblx0fVxuXG5cdGNvbnN0IHRva2VuOiBUb2tlbiA9IHBhcnNlci5uZXh0KCk7XG5cblx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX09QRU4pIHtcblx0XHRwYXJzZXIucmV3aW5kKCk7XG5cdFx0cmV0dXJuIHBhcnNlQXJyYXkocGFyc2VyKTtcblx0fVxuXG5cdGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuTlVNQkVSKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLk5VTUJFUik7XG5cdFx0bm9kZS52YWx1ZSA9IHRva2VuLnZhbHVlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5TVFJJTkcpIHtcblx0XHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuU1RSSU5HKTtcblx0XHRub2RlLnZhbHVlID0gdG9rZW4udmFsdWU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRpZiAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLkJPT0xFQU4pIHtcblx0XHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuQk9PTEVBTik7XG5cdFx0bm9kZS52YWx1ZSA9IHRva2VuLnZhbHVlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLklERU5USUZJRVIpO1xuXHRcdG5vZGUubmFtZSA9IHRva2VuLnZhbHVlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLk5VTEwpIHtcblx0XHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuTlVMTCk7XG5cdFx0bm9kZS52YWx1ZSA9IHRva2VuLnZhbHVlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLlRISVMpIHtcblx0XHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuVEhJUyk7XG5cdFx0bm9kZS5uYW1lID0gdG9rZW4udmFsdWU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuTkVXKSB7XG5cblx0XHRsZXQgdHlwZUFubm90YXRpb24gPSBwYXJzZVR5cGUocGFyc2VyKTtcblxuXHRcdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pO1xuXG5cdFx0cmV0dXJuIG5ldyBBU1ROZXdOb2RlKHBhcnNlQXJndW1lbnRzKHBhcnNlciksIHR5cGVBbm5vdGF0aW9uKTtcblx0fVxuXG5cdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKSB7XG5cdFx0Y29uc3QgZXhwciA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHRcdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKTtcblx0XHRyZXR1cm4gZXhwcjtcblx0fVxuXG5cdHRocm93UGFyc2VyRXJyb3IoYFVuZXhwZWN0ZWQgdG9rZW46ICR7dG9rZW4udHlwZX0gJHt0b2tlbi52YWx1ZX1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUG9zdGZpeChwYXJzZXI6IFBhcnNlciwgZXhwcjogQVNUTm9kZSB8IG51bGwpOiBBU1ROb2RlIHtcblx0aWYgKGV4cHIgPT09IG51bGwpIHtcblx0XHR0aHJvd1BhcnNlckVycm9yKGBFeHBlY3RlZCBleHByZXNzaW9uLCBnb3QgbnVsbC5gKTtcblx0fVxuXG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0Y29uc3QgdG9rZW4gPSBwYXJzZXIucGVlaygpO1xuXHRcdGlmICghdG9rZW4pIGJyZWFrO1xuXG5cdFx0Ly8gQ2FsbDogZm9vKC4uLilcblx0XHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTikge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHRcdGV4cHIgPSBuZXcgQVNUQ2FsbE5vZGUoZXhwciwgcGFyc2VBcmd1bWVudHMocGFyc2VyKSk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBNZW1iZXI6IGZvby5iYXJcblx0XHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuRE9UKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdFx0ZXhwciA9IG5ldyBBU1RNZW1iZXJOb2RlKGV4cHIsIHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCkudmFsdWUpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gSU5ERVg6IGZvb1tleHByXVxuXHRcdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9PUEVOKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXG5cdFx0XHRjb25zdCBpbmRleCA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXG5cdFx0XHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9DTE9TRSk7XG5cblx0XHRcdGV4cHIgPSBuZXcgQVNUSW5kZXhOb2RlKGV4cHIsIGluZGV4KTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGJyZWFrO1xuXHR9XG5cblx0cmV0dXJuIGV4cHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb29rdXBQcmVjZWRlbmNlKHRva2VuOiBUb2tlbik6IG51bWJlciB7XG5cdHN3aXRjaCAodG9rZW4udmFsdWUpIHtcblx0XHRjYXNlIEdSQU1NQVIuRE9UOlxuXHRcdFx0cmV0dXJuIDEwMDtcblx0XHRjYXNlIEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTjpcblx0XHRcdHJldHVybiA5MDtcblx0XHRjYXNlIEdSQU1NQVIuTVVMVElQTFk6XG5cdFx0Y2FzZSBHUkFNTUFSLkRJVklERTpcblx0XHRjYXNlIEdSQU1NQVIuTU9EVUxVUzpcblx0XHRcdHJldHVybiA2MDtcblx0XHRjYXNlIEdSQU1NQVIuUExVUzpcblx0XHRjYXNlIEdSQU1NQVIuTUlOVVM6XG5cdFx0XHRyZXR1cm4gNTA7XG5cdFx0Y2FzZSBHUkFNTUFSLkxFU1NfVEhBTjpcblx0XHRjYXNlIEdSQU1NQVIuR1JFQVRFUl9USEFOOlxuXHRcdGNhc2UgR1JBTU1BUi5MRVNTX0VRVUFMOlxuXHRcdGNhc2UgR1JBTU1BUi5HUkVBVEVSX0VRVUFMOlxuXHRcdFx0cmV0dXJuIDQwO1xuXHRcdGNhc2UgR1JBTU1BUi5FUVVBTDpcblx0XHRjYXNlIEdSQU1NQVIuTk9UX0VRVUFMOlxuXHRcdFx0cmV0dXJuIDMwO1xuXHRcdGNhc2UgR1JBTU1BUi5BTkQ6XG5cdFx0XHRyZXR1cm4gMjA7XG5cdFx0Y2FzZSBHUkFNTUFSLk9SOlxuXHRcdFx0cmV0dXJuIDEwO1xuXHRcdGNhc2UgR1JBTU1BUi5BU1NJR046XG5cdFx0XHRyZXR1cm4gNTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIDA7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtUb2tlbiwgVG9rZW5UeXBlfSBmcm9tIFwiLi4vZ3JhbW1hclwiO1xuaW1wb3J0IHtUb2tlblN0cmVhbX0gZnJvbSBcIi4uL3Rva2VuaXplci90b2tlbml6ZXJcIjtcbmltcG9ydCB7cGFyc2VQcm9ncmFtfSBmcm9tIFwiLi9wYXJzZXJfc3RhdG1lbnRzXCI7XG5pbXBvcnQge3Rocm93UGFyc2VyRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi9wYXJzZXJfc291cmNlXCI7XG5cblxuZXhwb3J0IGNsYXNzIFBhcnNlciB7XG5cdHNvdXJjZTogU291cmNlO1xuXHR0b2tlblN0cmVhbTogVG9rZW5TdHJlYW0gfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihzb3VyY2U6IFNvdXJjZSkge1xuXHRcdHRoaXMuc291cmNlID0gc291cmNlO1xuXHR9XG5cblx0cGFyc2UoKSB7XG5cdFx0dGhpcy50b2tlblN0cmVhbSA9IHRoaXMuc291cmNlXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAuZ2V0VG9rZW5pemVyKClcblx0XHQgICAgICAgICAgICAgICAgICAgICAgIC5nZXRUb2tlblN0cmVhbSgpXG5cblx0XHRyZXR1cm4gcGFyc2VQcm9ncmFtKHRoaXMpO1xuXHR9XG5cblx0c3RyZWFtKCk6IFRva2VuU3RyZWFtIHtcblx0XHRpZiAoIXRoaXMudG9rZW5TdHJlYW0pIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoJ1BhcnNlciBoYXMgbm90IGJlZW4gcGFyc2VkIHlldC4nKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy50b2tlblN0cmVhbTtcblx0fVxuXG5cdGV4cGVjdCh0b2tlblR5cGU6IHN0cmluZywga2V5d29yZDogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBUb2tlbiB7XG5cdFx0Y29uc3QgdG9rZW4gPSB0aGlzXG5cdFx0XHQuc3RyZWFtKClcblx0XHRcdC5uZXh0KCk7XG5cblx0XHRpZiAoIXRva2VuKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKGBVbmV4cGVjdGVkIGVuZCBvZiBmaWxlLiBFeHBlY3RlZCAke3Rva2VuVHlwZX0ke2tleXdvcmQgPyAnICcgKyBrZXl3b3JkIDogJyd9YCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRva2VuLnR5cGUgIT09IHRva2VuVHlwZSB8fCAoa2V5d29yZCAmJiB0b2tlbi52YWx1ZSAhPT0ga2V5d29yZCkpIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoYEV4cGVjdGVkICR7dG9rZW5UeXBlfSR7a2V5d29yZCA/ICcgJyArIGtleXdvcmQgOiAnJ30sIGdvdCAke3Rva2VuLnR5cGV9ICR7dG9rZW4udmFsdWV9YCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRva2VuO1xuXHR9XG5cblx0ZXhwZWN0T3BlcmF0b3Ioa2V5d29yZDogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZWN0KFRva2VuVHlwZS5PUEVSQVRPUiwga2V5d29yZCk7XG5cdH1cblxuXHRleHBlY3RBbm5vdGF0aW9uKCk6IFRva2VuIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlY3QoVG9rZW5UeXBlLkFOTk9UQVRJT04pO1xuXHR9XG5cblx0ZXhwZWN0SWRlbnRpZmllcihrZXl3b3JkOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IFRva2VuIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlY3QoVG9rZW5UeXBlLklERU5USUZJRVIsIGtleXdvcmQpO1xuXHR9XG5cblx0ZXhwZWN0S2V5d29yZChrZXl3b3JkOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IFRva2VuIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlY3QoVG9rZW5UeXBlLktFWVdPUkQsIGtleXdvcmQpO1xuXHR9XG5cblx0ZXhwZWN0U3RyaW5nKCk6IFRva2VuIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlY3QoVG9rZW5UeXBlLlNUUklORyk7XG5cdH1cblxuXHRleHBlY3RUZXh0KCk6IFRva2VuIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlY3QoVG9rZW5UeXBlLlRFWFQpO1xuXHR9XG5cblx0ZXhwZWN0UHVuY3R1YXRpb24oa2V5d29yZDogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZWN0KFRva2VuVHlwZS5QVU5DVFVBVElPTiwga2V5d29yZCk7XG5cdH1cblxuXHRleHBlY3RPbmVPZih0b2tlblR5cGVzOiBzdHJpbmdbXSwga2V5d29yZHM6IHN0cmluZyB8IG51bGwgPSBudWxsKTogVG9rZW4ge1xuXHRcdGNvbnN0IHRva2VuID0gdGhpc1xuXHRcdFx0LnN0cmVhbSgpXG5cdFx0XHQubmV4dCgpO1xuXG5cdFx0aWYgKCF0b2tlbikge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcihgVW5leHBlY3RlZCBlbmQgb2YgZmlsZS4gRXhwZWN0ZWQgb25lIG9mIHR5cGVzICR7dG9rZW5UeXBlc30sIGdvdCBudWxsLmApO1xuXHRcdH1cblxuXHRcdGlmICghdG9rZW5UeXBlcy5pbmNsdWRlcyh0b2tlbi50eXBlKSkge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcihgRXhwZWN0ZWQgb25lIG9mIHR5cGVzICR7dG9rZW5UeXBlc30sIGdvdCAke3Rva2VuLnR5cGV9YCk7XG5cdFx0fVxuXG5cdFx0aWYgKGtleXdvcmRzICYmICFrZXl3b3Jkcy5pbmNsdWRlcyh0b2tlbi52YWx1ZSkpIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoYEV4cGVjdGVkIG9uZSBvZiB2YWx1ZXMgJHtrZXl3b3Jkc30sIGdvdCAke3Rva2VuLnZhbHVlfWApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0b2tlbjtcblx0fVxuXG5cdGNvbnN1bWVJZih0b2tlblR5cGU6IHN0cmluZywga2V5d29yZDogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBib29sZWFuIHtcblx0XHRjb25zdCB0b2tlbiA9IHRoaXMucGVlaygpO1xuXG5cdFx0aWYgKHRva2VuLnR5cGUgPT09IHRva2VuVHlwZSAmJiAoa2V5d29yZCAmJiB0b2tlbi52YWx1ZS50cmltKCkgPT09IGtleXdvcmQpKSB7XG5cdFx0XHR0aGlzLm5leHQoKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGNvbnN1bWVJZlB1bmN0dWF0aW9uKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdW1lSWYoVG9rZW5UeXBlLlBVTkNUVUFUSU9OLCB2YWx1ZSk7XG5cdH1cblxuXHRjb25zdW1lSWZPcGVyYXRvcih2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3VtZUlmKFRva2VuVHlwZS5PUEVSQVRPUiwgdmFsdWUpO1xuXHR9XG5cblx0Y29uc3VtZUlmQ29tbWVudCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdW1lSWYoVG9rZW5UeXBlLkNPTU1FTlQpO1xuXHR9XG5cblx0Y29uc3VtZUlmS2V5d29yZChrZXl3b3JkOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdW1lSWYoVG9rZW5UeXBlLktFWVdPUkQsIGtleXdvcmQpO1xuXHR9XG5cblx0Y29uc3VtZUlmVGV4dCgpOiBib29sZWFuIHtcblx0XHRpZiAodGhpcy5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLlRFWFQgJiYgdGhpcy5wZWVrSXMoJycpKSB7XG5cdFx0XHR0aGlzLm5leHQoKTtcblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cGVlaygpOiBUb2tlbiB7XG5cdFx0Y29uc3QgdG9rZW4gPSB0aGlzXG5cdFx0XHQuc3RyZWFtKClcblx0XHRcdC5wZWVrKCk7XG5cblx0XHRpZiAodG9rZW4gPT09IG51bGwpIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoJ1VuZXhwZWN0ZWQgZW5kIG9mIGZpbGUuIEV4cGVjdGVkIHRva2VuLCBnb3QgbnVsbC4nKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdG9rZW47XG5cdH1cblxuXHRwZWVrSXMoa2V5d29yZDogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucGVlaygpXG5cdFx0ICAgICAgICAgICAudmFsdWVcblx0XHQgICAgICAgICAgIC50cmltKCkgPT09IGtleXdvcmQ7XG5cdH1cblxuXHRuZXh0KCk6IFRva2VuIHtcblx0XHRjb25zdCB0b2tlbiA9IHRoaXNcblx0XHRcdC5zdHJlYW0oKVxuXHRcdFx0Lm5leHQoKTtcblxuXHRcdGlmICh0b2tlbiA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZmlsZS4gRXhwZWN0ZWQgdG9rZW4sIGdvdCBudWxsLicpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0b2tlbjtcblx0fVxuXG5cdHJld2luZCgpOiB2b2lkIHtcblx0XHR0aGlzLnN0cmVhbSgpXG5cdFx0ICAgIC5yZXdpbmQoKTtcblx0fVxuXG5cdHBvc2l0aW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuc3RyZWFtKCkuaW5kZXg7XG5cdH1cblxuXHRzZWVrQXQocG9zaXRpb246IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuc3RyZWFtKCkuaW5kZXggPSBwb3NpdGlvbjtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0FTVENsYXNzTm9kZSwgQVNUSW50ZXJmYWNlTm9kZSwgQVNUTm9kZX0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHtDbGFzc0RlZmluaXRpb24sIEluc3RhbmNlLCBJbnRlcmZhY2VEZWZpbml0aW9ufSBmcm9tIFwiLi9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge0NsYXNzU3ltYm9sLCBJbnRlcmZhY2VTeW1ib2x9IGZyb20gXCIuLi90eXBlcy90eXBlX29iamVjdHNcIjtcbmltcG9ydCB7dGhyb3dSdW50aW1lRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcblxuZXhwb3J0IGNsYXNzIENsYXNzUmVnaXN0cnkge1xuXHRtYXA6IE1hcDxzdHJpbmcsIENsYXNzRGVmaW5pdGlvbj4gPSBuZXcgTWFwKCk7XG5cblx0cmVnaXN0ZXIobm9kZTogQVNUQ2xhc3NOb2RlKTogdm9pZCB7XG5cdFx0dGhpcy5zZXQobm9kZS5uYW1lLCBDbGFzc0RlZmluaXRpb24uZnJvbUFTVChub2RlKSk7XG5cdH1cblxuXHRhbGwoKTogSXRlcmFibGVJdGVyYXRvcjxDbGFzc0RlZmluaXRpb24+IHtcblx0XHRyZXR1cm4gdGhpcy5tYXAudmFsdWVzKCk7XG5cdH1cblxuXHRzZXQobmFtZTogc3RyaW5nLCBjbGFzc0RlZmluaXRpb246IENsYXNzRGVmaW5pdGlvbik6IHZvaWQge1xuXHRcdHRoaXMubWFwLnNldChuYW1lLCBjbGFzc0RlZmluaXRpb24pO1xuXHR9XG5cblx0Z2V0KG5hbWU6IHN0cmluZyk6IENsYXNzRGVmaW5pdGlvbiB7XG5cdFx0Y29uc3QgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiB8IG51bGwgPSB0aGlzLm1hcC5nZXQobmFtZSkgfHwgbnVsbDtcblx0XHRpZiAoIWNsYXNzRGVmKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgQ2xhc3MgJHtuYW1lfSBub3QgZm91bmQuYCk7XG5cdFx0fVxuXHRcdHJldHVybiBjbGFzc0RlZjtcblx0fVxuXG5cdGhhcyhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAuaGFzKG5hbWUpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2VSZWdpc3RyeSB7XG5cdG1hcDogTWFwPHN0cmluZywgSW50ZXJmYWNlRGVmaW5pdGlvbj4gPSBuZXcgTWFwKCk7XG5cblx0cmVnaXN0ZXIobm9kZTogQVNUSW50ZXJmYWNlTm9kZSk6IHZvaWQge1xuXHRcdHRoaXMuc2V0KG5vZGUubmFtZSwgSW50ZXJmYWNlRGVmaW5pdGlvbi5mcm9tQVNUKG5vZGUpKTtcblx0fVxuXG5cdGFsbCgpOiBJdGVyYWJsZUl0ZXJhdG9yPEludGVyZmFjZURlZmluaXRpb24+IHtcblx0XHRyZXR1cm4gdGhpcy5tYXAudmFsdWVzKCk7XG5cdH1cblxuXHRzZXQobmFtZTogc3RyaW5nLCBpbnRlcmZhY2VEZWZpbml0aW9uOiBJbnRlcmZhY2VEZWZpbml0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5tYXAuc2V0KG5hbWUsIGludGVyZmFjZURlZmluaXRpb24pO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnN0YW5jZVJlZ2lzdHJ5IHtcblx0cHJpdmF0ZSBpbnN0YW5jZXM6IE1hcDxzdHJpbmcsIEluc3RhbmNlPiA9IG5ldyBNYXA8c3RyaW5nLCBJbnN0YW5jZT4oKTtcblxuXHRyZWdpc3RlcihpbnN0YW5jZTogSW5zdGFuY2UpOiB2b2lkIHtcblx0XHR0aGlzLmluc3RhbmNlcy5zZXQoaW5zdGFuY2UuaWQsIGluc3RhbmNlKTtcblx0fVxuXG5cdHVucmVnaXN0ZXIoaW5zdGFuY2U6IEluc3RhbmNlKTogdm9pZCB7XG5cdFx0dGhpcy5pbnN0YW5jZXMuZGVsZXRlKGluc3RhbmNlLmlkKTtcblx0fVxuXG5cdGdldChpZDogc3RyaW5nKTogSW5zdGFuY2UgfCBudWxsIHtcblx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZXMuZ2V0KGlkKSB8fCBudWxsO1xuXHR9XG5cblx0YWxsSW5zdGFuY2VzKCk6IEluc3RhbmNlW10ge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKHRoaXMuaW5zdGFuY2VzLnZhbHVlcygpKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVHlwZVJlZ2lzdHJ5IHtcblx0Y2xhc3NTeW1ib2xzOiBNYXA8c3RyaW5nLCBDbGFzc1N5bWJvbD4gPSBuZXcgTWFwKCk7XG5cdGludGVyZmFjZVN5bWJvbHM6IE1hcDxzdHJpbmcsIEludGVyZmFjZVN5bWJvbD4gPSBuZXcgTWFwKCk7XG5cblx0YWxsQ2xhc3NTeW1ib2xzKCk6IEl0ZXJhYmxlSXRlcmF0b3I8Q2xhc3NTeW1ib2w+IHtcblx0XHRyZXR1cm4gdGhpcy5jbGFzc1N5bWJvbHMudmFsdWVzKCk7XG5cdH1cblxuXHRhbGxJbnRlcmZhY2VTeW1ib2xzKCk6IEl0ZXJhYmxlSXRlcmF0b3I8SW50ZXJmYWNlU3ltYm9sPiB7XG5cdFx0cmV0dXJuIHRoaXMuaW50ZXJmYWNlU3ltYm9scy52YWx1ZXMoKTtcblx0fVxuXG5cdGFkZENsYXNzU3ltYm9sKHN5bWJvbDogQ2xhc3NTeW1ib2wpOiB2b2lkIHtcblx0XHR0aGlzLmNsYXNzU3ltYm9scy5zZXQoc3ltYm9sLm5hbWUsIHN5bWJvbCk7XG5cdH1cblxuXHRhZGRJbnRlcmZhY2VTeW1ib2woc3ltYm9sOiBJbnRlcmZhY2VTeW1ib2wpOiB2b2lkIHtcblx0XHR0aGlzLmludGVyZmFjZVN5bWJvbHMuc2V0KHN5bWJvbC5uYW1lLCBzeW1ib2wpO1xuXHR9XG5cblx0aGFzU3ltYm9sKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNsYXNzU3ltYm9scy5oYXMobmFtZSkgfHwgdGhpcy5pbnRlcmZhY2VTeW1ib2xzLmhhcyhuYW1lKTtcblx0fVxuXG5cdHB1YmxpYyBnZXRDbGFzc1N5bWJvbChuYW1lOiBzdHJpbmcpOiBDbGFzc1N5bWJvbCB7XG5cdFx0Y29uc3Qgc3ltYm9sOiBDbGFzc1N5bWJvbCB8IHVuZGVmaW5lZCA9IHRoaXMuY2xhc3NTeW1ib2xzLmdldChuYW1lKTtcblx0XHRpZiAoc3ltYm9sID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBTeW1ib2wgJHtuYW1lfSBub3QgZm91bmQuYCk7XG5cdFx0fVxuXHRcdHJldHVybiBzeW1ib2w7XG5cdH1cblxuXHRwdWJsaWMgZ2V0SW50ZXJhY2VTeW1ib2wobmFtZTogc3RyaW5nKTogSW50ZXJmYWNlU3ltYm9sIHtcblx0XHRjb25zdCBzeW1ib2w6IEludGVyZmFjZVN5bWJvbCB8IHVuZGVmaW5lZCA9IHRoaXMuaW50ZXJmYWNlU3ltYm9scy5nZXQobmFtZSk7XG5cdFx0aWYgKHN5bWJvbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgU3ltYm9sICR7bmFtZX0gbm90IGZvdW5kLmApO1xuXHRcdH1cblx0XHRyZXR1cm4gc3ltYm9sO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBPYmplY3RSZWdpc3RyeSB7XG5cdHB1YmxpYyByZWFkb25seSBjbGFzc2VzOiBDbGFzc1JlZ2lzdHJ5ID0gbmV3IENsYXNzUmVnaXN0cnkoKTtcblx0cHVibGljIHJlYWRvbmx5IGludGVyZmFjZXM6IEludGVyZmFjZVJlZ2lzdHJ5ID0gbmV3IEludGVyZmFjZVJlZ2lzdHJ5KCk7XG5cdHB1YmxpYyByZWFkb25seSBpbnN0YW5jZXM6IEluc3RhbmNlUmVnaXN0cnkgPSBuZXcgSW5zdGFuY2VSZWdpc3RyeSgpO1xuXHRwdWJsaWMgcmVhZG9ubHkgdHlwZXM6IFR5cGVSZWdpc3RyeSA9IG5ldyBUeXBlUmVnaXN0cnkoKTtcblxuXHRmZXRjaEFsbE9iamVjdERlZmluaXRpb25zKCk6IE1hcDxzdHJpbmcsIENsYXNzRGVmaW5pdGlvbiB8IEludGVyZmFjZURlZmluaXRpb24+IHtcblx0XHRjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG5cblx0XHRmb3IgKGNvbnN0IGNsYXNzRGVmIG9mIHRoaXMuaW50ZXJmYWNlcy5hbGwoKSkge1xuXHRcdFx0bWFwLnNldChjbGFzc0RlZi5uYW1lLCBjbGFzc0RlZik7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBjbGFzc0RlZiBvZiB0aGlzLmNsYXNzZXMuYWxsKCkpIHtcblx0XHRcdG1hcC5zZXQoY2xhc3NEZWYubmFtZSwgY2xhc3NEZWYpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtYXA7XG5cdH1cblxuXHRjb2xsZWN0QWxsKGFzdDogQVNUTm9kZSk6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUSW50ZXJmYWNlTm9kZSkge1xuXHRcdFx0XHR0aGlzLmludGVyZmFjZXMucmVnaXN0ZXIobm9kZSk7XG5cdFx0XHR9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RDbGFzc05vZGUpIHtcblx0XHRcdFx0dGhpcy5jbGFzc2VzLnJlZ2lzdGVyKG5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4iLAogICAgImltcG9ydCB7XG5cdEFTVEFycmF5Tm9kZSxcblx0QVNUQmluYXJ5Tm9kZSxcblx0QVNUQ2FsbE5vZGUsXG5cdEFTVENsYXNzTm9kZSxcblx0QVNURXhwcmVzc2lvbk5vZGUsXG5cdEFTVEZpZWxkTm9kZSxcblx0QVNURm9yZWFjaE5vZGUsXG5cdEFTVEluZGV4Tm9kZSxcblx0QVNUSW50ZXJmYWNlTm9kZSxcblx0QVNUTGFtYmRhTm9kZSxcblx0QVNUTWVtYmVyTm9kZSxcblx0QVNUTWV0aG9kTm9kZSxcblx0QVNUTmV3Tm9kZSxcblx0QVNUTm9kZSxcblx0QVNUTm9kZVR5cGUsXG5cdEFTVFBhcmFtZXRlck5vZGUsXG5cdEFTVFJldHVybk5vZGUsXG5cdEFTVFR5cGVOb2RlLFxuXHRBU1RVbmFyeU5vZGUsXG5cdEFTVFZhcmlhYmxlTm9kZSxcblx0QVNUVkRvbU5vZGVcbn0gZnJvbSAnLi4vYXN0LnRzJztcbmltcG9ydCB7XG5cdGJ1aWxkVHlwZVN1YnN0aXR1dGlvbk1hcCxcblx0Q2xhc3NSZWZUeXBlLFxuXHRDbGFzc1N5bWJvbCxcblx0RmllbGRTeW1ib2wsXG5cdEludGVyZmFjZVJlZlR5cGUsXG5cdEludGVyZmFjZVN5bWJvbCxcblx0TGFtYmRhVHlwZSxcblx0TWV0aG9kU3ltYm9sLFxuXHRNaXhlZFR5cGUsXG5cdE51bGxhYmxlVHlwZSxcblx0UGFyYW1ldGVyU3ltYm9sLFxuXHRQcmltaXRpdmVDbGFzc1R5cGVzLFxuXHRzdWJzdGl0dXRlVHlwZSxcblx0VHlwZSxcblx0VHlwZVBhcmFtZXRlclN5bWJvbCxcblx0VHlwZXMsXG5cdFR5cGVTY29wZSxcblx0VHlwZVZhcmlhYmxlLFxuXHR3cmFwVHlwZVxufSBmcm9tIFwiLi90eXBlX29iamVjdHNcIjtcbmltcG9ydCB7QXV0b2JveGluZ30gZnJvbSBcIi4vYXV0b2JveGluZ1wiO1xuaW1wb3J0IHtOYXRpdmVGdW5jdGlvbiwgTmF0aXZlRnVuY3Rpb25zfSBmcm9tIFwiLi4vLi4vbGlicmFyeS9uYXRpdmVfZnVuY3Rpb25zXCI7XG5pbXBvcnQge0dSQU1NQVJ9IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5pbXBvcnQge3Rocm93VHlwZUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzLnRzXCJcbmltcG9ydCB7Q2xhc3NEZWZpbml0aW9uLCBJbnRlcmZhY2VEZWZpbml0aW9ufSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5cblxuY29uc3QgZ2xvYmFsRnVuY3Rpb25UeXBlUmVnaXN0cnkgPSBuZXcgTmF0aXZlRnVuY3Rpb25zKClcblx0LmdldEdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5KCk7XG5cbmV4cG9ydCBjbGFzcyBTdGF0ZW1lbnRSZXN1bHQge1xuXHRkaWRSZXR1cm46IGJvb2xlYW47XG5cdHJldHVyblR5cGU6IFR5cGUgfCBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKGRpZFJldHVybjogYm9vbGVhbiwgcmV0dXJuVHlwZTogVHlwZSB8IG51bGwpIHtcblx0XHR0aGlzLmRpZFJldHVybiA9IGRpZFJldHVybjtcblx0XHR0aGlzLnJldHVyblR5cGUgPSByZXR1cm5UeXBlO1xuXHR9XG5cblx0c3RhdGljIHdpdGhSZXR1cm4ocmV0dXJuVHlwZTogVHlwZSk6IFN0YXRlbWVudFJlc3VsdCB7XG5cdFx0cmV0dXJuIG5ldyBTdGF0ZW1lbnRSZXN1bHQodHJ1ZSwgcmV0dXJuVHlwZSk7XG5cdH1cblxuXHRzdGF0aWMgbm9SZXR1cm4oKTogU3RhdGVtZW50UmVzdWx0IHtcblx0XHRyZXR1cm4gbmV3IFN0YXRlbWVudFJlc3VsdChmYWxzZSwgbnVsbCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGVDaGVja2VyIHtcblx0b2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5O1xuXG5cdGNvbnN0cnVjdG9yKG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSkge1xuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkgPSBvYmplY3RSZWdpc3RyeTtcblx0fVxuXG5cdGNvbGxlY3RBbGxTeW1ib2xzRnJvbU5vZGUoYXN0OiBBU1ROb2RlKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIGFzdC5jaGlsZHJlbikge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RJbnRlcmZhY2VOb2RlKSB7XG5cdFx0XHRcdHRoaXMucmVnaXN0ZXJJbnRlcmZhY2VTeW1ib2wobm9kZSlcblx0XHRcdH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIEFTVENsYXNzTm9kZSkge1xuXHRcdFx0XHR0aGlzLnJlZ2lzdGVyQ2xhc3NTeW1ib2wobm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y29sbGVjdEFsbFN5bWJvbHNGcm9tUmVnaXN0cnkob2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogdm9pZCB7XG5cdFx0Y29uc3Qgb2JqZWN0RGVmaW5pdGlvbnM6IE1hcEl0ZXJhdG9yPENsYXNzRGVmaW5pdGlvbiB8IEludGVyZmFjZURlZmluaXRpb24+ID0gb2JqZWN0UmVnaXN0cnlcblx0XHRcdC5mZXRjaEFsbE9iamVjdERlZmluaXRpb25zKClcblx0XHRcdC52YWx1ZXMoKTtcblxuXHRcdGZvciAobGV0IG9iamVjdERlZiBvZiBvYmplY3REZWZpbml0aW9ucykge1xuXHRcdFx0aWYgKG9iamVjdERlZiBpbnN0YW5jZW9mIEludGVyZmFjZURlZmluaXRpb24pIHtcblx0XHRcdFx0dGhpcy5yZWdpc3RlckludGVyZmFjZVN5bWJvbChvYmplY3REZWYubm9kZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnJlZ2lzdGVyQ2xhc3NTeW1ib2wob2JqZWN0RGVmLm5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNoZWNrKGFzdDogQVNUTm9kZSk6IHZvaWQge1xuXHRcdHRoaXMuY29sbGVjdEFsbFN5bWJvbHNGcm9tTm9kZShhc3QpO1xuXHRcdHRoaXMudmFsaWRhdGVJbmhlcml0YW5jZSgpO1xuXHRcdHRoaXMuY2hlY2tQcm9ncmFtKGFzdCk7XG5cdFx0dGhpcy5jaGVja0ludGVyZmFjZUJvZGllcygpO1xuXHRcdHRoaXMuY2hlY2tDbGFzc2VzQm9kaWVzKCk7XG5cdFx0dGhpcy5jaGVja0NsYXNzZXNJbXBsZW1lbnRzKCk7XG5cdH1cblxuXHRwcml2YXRlIHZhbGlkYXRlSW5oZXJpdGFuY2UoKSB7XG5cdFx0Zm9yIChjb25zdCBjbGFzc1N5bWJvbCBvZiB0aGlzLm9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuYWxsKCkpIHtcblx0XHRcdGlmIChjbGFzc1N5bWJvbC5zdXBlckNsYXNzICYmICF0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmhhc1N5bWJvbChjbGFzc1N5bWJvbC5zdXBlckNsYXNzKSkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgVW5rbm93biBzdXBlcmNsYXNzICR7Y2xhc3NTeW1ib2wuc3VwZXJDbGFzc31gLCBjbGFzc1N5bWJvbC5ub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrUHJvZ3JhbShhc3Q6IEFTVE5vZGUpOiB2b2lkIHtcblx0XHRjb25zdCBzY29wZSA9IG5ldyBUeXBlU2NvcGUoKTtcblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgYXN0LmNoaWxkcmVuKSB7XG5cdFx0XHR0aGlzLmNoZWNrU3RhdGVtZW50KG5vZGUsIHNjb3BlKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQ2xhc3Nlc0JvZGllcygpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IG9iamVjdFN5bWJvbCBvZiB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmFsbENsYXNzU3ltYm9scygpKSB7XG5cdFx0XHRjb25zdCBpbnN0YW5jZVNjb3BlID0gbmV3IFR5cGVTY29wZSgpO1xuXHRcdFx0aW5zdGFuY2VTY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sID0gb2JqZWN0U3ltYm9sO1xuXG5cdFx0XHRvYmplY3RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMuZm9yRWFjaCh0eXBlUGFyYW1ldGVyID0+IHtcblx0XHRcdFx0aW5zdGFuY2VTY29wZS5kZWZpbmVUeXBlQmluZGluZyhcblx0XHRcdFx0XHR0eXBlUGFyYW1ldGVyLm5hbWUsXG5cdFx0XHRcdFx0bmV3IFR5cGVWYXJpYWJsZSh0eXBlUGFyYW1ldGVyLm5hbWUpXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKG9iamVjdFN5bWJvbC5jb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbCkge1xuXHRcdFx0XHRjb25zdCBjb25zdHJ1Y3RvclN5bWJvbCA9IG9iamVjdFN5bWJvbC5jb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbDtcblx0XHRcdFx0Y29uc3QgY29uc3RydWN0b3JTY29wZSA9IG5ldyBUeXBlU2NvcGUoaW5zdGFuY2VTY29wZSk7XG5cblx0XHRcdFx0b2JqZWN0U3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmZvckVhY2godHlwZVBhcmFtZXRlclN5bWJvbCA9PiB7XG5cdFx0XHRcdFx0Y29uc3RydWN0b3JTY29wZS5kZWZpbmVUeXBlQmluZGluZyhcblx0XHRcdFx0XHRcdHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSxcblx0XHRcdFx0XHRcdG5ldyBUeXBlVmFyaWFibGUodHlwZVBhcmFtZXRlclN5bWJvbC5uYW1lKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGZvciAoY29uc3QgcGFyYW1ldGVyU3ltYm9sIG9mIGNvbnN0cnVjdG9yU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMpIHtcblx0XHRcdFx0XHRjb25zdHJ1Y3RvclNjb3BlLmRlZmluZVR5cGUocGFyYW1ldGVyU3ltYm9sLm5hbWUsIHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuY2hlY2tCb2R5KGNvbnN0cnVjdG9yU3ltYm9sLmJvZHksIGNvbnN0cnVjdG9yU2NvcGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGNvbnN0IG1ldGhvZFN5bWJvbCBvZiBvYmplY3RTeW1ib2wuaW5zdGFuY2VNZXRob2RTeW1ib2xzLnZhbHVlcygpKSB7XG5cdFx0XHRcdGNvbnN0IG1ldGhvZFNjb3BlID0gbmV3IFR5cGVTY29wZShpbnN0YW5jZVNjb3BlKTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMuZm9yRWFjaCh0eXBlUGFyYW1ldGVyU3ltYm9sID0+IHtcblx0XHRcdFx0XHRtZXRob2RTY29wZS5kZWZpbmVUeXBlQmluZGluZyhcblx0XHRcdFx0XHRcdHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSxcblx0XHRcdFx0XHRcdG5ldyBUeXBlVmFyaWFibGUodHlwZVBhcmFtZXRlclN5bWJvbC5uYW1lKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGZvciAoY29uc3QgcGFyYW1ldGVyU3ltYm9sIG9mIG1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzKSB7XG5cdFx0XHRcdFx0bWV0aG9kU2NvcGUuZGVmaW5lVHlwZShwYXJhbWV0ZXJTeW1ib2wubmFtZSwgcGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgaGFzQm9keSA9IG1ldGhvZFN5bWJvbC5ib2R5ICYmIG1ldGhvZFN5bWJvbC5ib2R5Lmxlbmd0aCA+IDA7XG5cdFx0XHRcdGlmIChoYXNCb2R5KSB7XG5cdFx0XHRcdFx0Y29uc3QgYWN0dWFsID0gdGhpcy5jaGVja0JvZHkobWV0aG9kU3ltYm9sLmJvZHksIG1ldGhvZFNjb3BlKTtcblx0XHRcdFx0XHR0aGlzLmNoZWNrUmV0dXJuVHlwZShtZXRob2RTeW1ib2wucmV0dXJuVHlwZSwgYWN0dWFsLCBtZXRob2RTeW1ib2wubm9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Zm9yIChjb25zdCBtZXRob2RTeW1ib2wgb2Ygb2JqZWN0U3ltYm9sLnN0YXRpY01ldGhvZFN5bWJvbHMudmFsdWVzKCkpIHtcblx0XHRcdFx0Y29uc3Qgc3RhdGljU2NvcGUgPSBuZXcgVHlwZVNjb3BlKGluc3RhbmNlU2NvcGUpO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5mb3JFYWNoKHR5cGVQYXJhbWV0ZXJTeW1ib2wgPT4ge1xuXHRcdFx0XHRcdHN0YXRpY1Njb3BlLmRlZmluZVR5cGVCaW5kaW5nKFxuXHRcdFx0XHRcdFx0dHlwZVBhcmFtZXRlclN5bWJvbC5uYW1lLFxuXHRcdFx0XHRcdFx0bmV3IFR5cGVWYXJpYWJsZSh0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Zm9yIChjb25zdCBwYXJhbWV0ZXJTeW1ib2wgb2YgbWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMpIHtcblx0XHRcdFx0XHRzdGF0aWNTY29wZS5kZWZpbmVUeXBlKHBhcmFtZXRlclN5bWJvbC5uYW1lLCBwYXJhbWV0ZXJTeW1ib2wucGFyYW1ldGVyVHlwZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBoYXNCb2R5ID0gbWV0aG9kU3ltYm9sLmJvZHkgJiYgbWV0aG9kU3ltYm9sLmJvZHkubGVuZ3RoID4gMDtcblx0XHRcdFx0aWYgKGhhc0JvZHkpIHtcblx0XHRcdFx0XHRjb25zdCBhY3R1YWwgPSB0aGlzLmNoZWNrQm9keShtZXRob2RTeW1ib2wuYm9keSwgc3RhdGljU2NvcGUpO1xuXHRcdFx0XHRcdHRoaXMuY2hlY2tSZXR1cm5UeXBlKG1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlLCBhY3R1YWwsIG1ldGhvZFN5bWJvbC5ub2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tJbnRlcmZhY2VCb2RpZXMoKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBvYmplY3RTeW1ib2wgb2YgdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5hbGxJbnRlcmZhY2VTeW1ib2xzKCkpIHtcblx0XHRcdGNvbnN0IGluc3RhbmNlU2NvcGUgPSBuZXcgVHlwZVNjb3BlKCk7XG5cdFx0XHRpbnN0YW5jZVNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgPSBvYmplY3RTeW1ib2w7XG5cblx0XHRcdG9iamVjdFN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5mb3JFYWNoKHR5cGVQYXJhbWV0ZXIgPT4ge1xuXHRcdFx0XHRpbnN0YW5jZVNjb3BlLmRlZmluZVR5cGVCaW5kaW5nKFxuXHRcdFx0XHRcdHR5cGVQYXJhbWV0ZXIubmFtZSxcblx0XHRcdFx0XHRuZXcgVHlwZVZhcmlhYmxlKHR5cGVQYXJhbWV0ZXIubmFtZSlcblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXG5cdFx0XHRmb3IgKGNvbnN0IG1ldGhvZFN5bWJvbCBvZiBvYmplY3RTeW1ib2wuaW5zdGFuY2VNZXRob2RTeW1ib2xzLnZhbHVlcygpKSB7XG5cdFx0XHRcdGNvbnN0IG1ldGhvZFNjb3BlID0gbmV3IFR5cGVTY29wZShpbnN0YW5jZVNjb3BlKTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMuZm9yRWFjaCh0eXBlUGFyYW1ldGVyU3ltYm9sID0+IHtcblx0XHRcdFx0XHRtZXRob2RTY29wZS5kZWZpbmVUeXBlQmluZGluZyhcblx0XHRcdFx0XHRcdHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSxcblx0XHRcdFx0XHRcdG5ldyBUeXBlVmFyaWFibGUodHlwZVBhcmFtZXRlclN5bWJvbC5uYW1lKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGZvciAoY29uc3QgcGFyYW1ldGVyU3ltYm9sIG9mIG1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzKSB7XG5cdFx0XHRcdFx0bWV0aG9kU2NvcGUuZGVmaW5lVHlwZShwYXJhbWV0ZXJTeW1ib2wubmFtZSwgcGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgaGFzQm9keSA9IG1ldGhvZFN5bWJvbC5ib2R5ICYmIG1ldGhvZFN5bWJvbC5ib2R5Lmxlbmd0aCA+IDA7XG5cdFx0XHRcdGlmIChoYXNCb2R5KSB7XG5cdFx0XHRcdFx0Y29uc3QgYWN0dWFsID0gdGhpcy5jaGVja0JvZHkobWV0aG9kU3ltYm9sLmJvZHksIG1ldGhvZFNjb3BlKTtcblx0XHRcdFx0XHR0aGlzLmNoZWNrUmV0dXJuVHlwZShtZXRob2RTeW1ib2wucmV0dXJuVHlwZSwgYWN0dWFsLCBtZXRob2RTeW1ib2wubm9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQ2xhc3Nlc0ltcGxlbWVudHMoKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBjbGFzc1N5bWJvbCBvZiB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmFsbENsYXNzU3ltYm9scygpKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGludGVyZmFjZVJlZlR5cGUgb2YgY2xhc3NTeW1ib2wuaW1wbGVtZW50c0ludGVyZmFjZXMpIHtcblx0XHRcdFx0dGhpcy5jaGVja0ltcGxlbWVudHNJbnRlcmZhY2UoY2xhc3NTeW1ib2wsIGludGVyZmFjZVJlZlR5cGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tJbXBsZW1lbnRzSW50ZXJmYWNlKGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCwgaW50ZXJmYWNlUmVmVHlwZTogSW50ZXJmYWNlUmVmVHlwZSk6IHZvaWQge1xuXHRcdGNvbnN0IGludGVyZmFjZVN5bWJvbCA9IGludGVyZmFjZVJlZlR5cGUuaW50ZXJmYWNlU3ltYm9sO1xuXG5cdFx0Y29uc3Qgc3Vic3RpdHV0aW9uTWFwID0gYnVpbGRUeXBlU3Vic3RpdHV0aW9uTWFwKFxuXHRcdFx0aW50ZXJmYWNlU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLFxuXHRcdFx0aW50ZXJmYWNlUmVmVHlwZS50eXBlQXJndW1lbnRzXG5cdFx0KTtcblxuXHRcdGZvciAoY29uc3QgaW50ZXJmYWNlTWV0aG9kU3ltYm9sIG9mIGludGVyZmFjZVN5bWJvbC5pbnN0YW5jZU1ldGhvZFN5bWJvbHMudmFsdWVzKCkpIHtcblx0XHRcdGNvbnN0IGNsYXNzTWV0aG9kU3ltYm9sID0gdGhpcy5yZXNvbHZlSW5zdGFuY2VNZXRob2RlKFxuXHRcdFx0XHRjbGFzc1N5bWJvbCxcblx0XHRcdFx0aW50ZXJmYWNlTWV0aG9kU3ltYm9sLm5hbWVcblx0XHRcdCk7XG5cblx0XHRcdGlmICghY2xhc3NNZXRob2RTeW1ib2wpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoXG5cdFx0XHRcdFx0YENsYXNzICR7Y2xhc3NTeW1ib2wubmFtZX0gZG9lcyBub3QgaW1wbGVtZW50IG1ldGhvZCAke2ludGVyZmFjZU1ldGhvZFN5bWJvbC5uYW1lfSBmcm9tIGludGVyZmFjZSAke2ludGVyZmFjZVN5bWJvbC5uYW1lfWAsXG5cdFx0XHRcdFx0Y2xhc3NTeW1ib2wubm9kZVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmNoZWNrTWV0aG9kQ29tcGF0aWJpbGl0eShcblx0XHRcdFx0Y2xhc3NNZXRob2RTeW1ib2wsXG5cdFx0XHRcdGludGVyZmFjZU1ldGhvZFN5bWJvbCxcblx0XHRcdFx0c3Vic3RpdHV0aW9uTWFwXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tNZXRob2RDb21wYXRpYmlsaXR5KGNsYXNzTWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wsIGludGVyZmFjZU1ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sLCBzdWJzdGl0dXRpb25NYXA6IE1hcDxzdHJpbmcsIFR5cGU+KTogdm9pZCB7XG5cdFx0aWYgKGNsYXNzTWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMubGVuZ3RoICE9PSBpbnRlcmZhY2VNZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9scy5sZW5ndGgpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBNZXRob2QgJHtjbGFzc01ldGhvZFN5bWJvbC5uYW1lfSBoYXMgd3JvbmcgcGFyYW1ldGVyIGNvdW50YCk7XG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBpbnRlcmZhY2VNZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgcGFyYW1ldGVyU3ltYm9sOiBQYXJhbWV0ZXJTeW1ib2wgfCBudWxsID0gaW50ZXJmYWNlTWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHNbaV0gfHwgbnVsbDtcblxuXHRcdFx0aWYgKCFwYXJhbWV0ZXJTeW1ib2wpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYE1ldGhvZCAke2NsYXNzTWV0aG9kU3ltYm9sLm5hbWV9IGhhcyB0b28gbWFueSBwYXJhbWV0ZXJzYCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBleHBlY3RlZFR5cGU6IFR5cGUgPSBzdWJzdGl0dXRlVHlwZShwYXJhbWV0ZXJTeW1ib2wucGFyYW1ldGVyVHlwZSwgc3Vic3RpdHV0aW9uTWFwKTtcblxuXHRcdFx0Y29uc3QgYWN0dWFsVHlwZTogVHlwZSA9IHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlO1xuXG5cdFx0XHRpZiAoIWV4cGVjdGVkVHlwZS5hY2NlcHRzKGFjdHVhbFR5cGUpKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBQYXJhbWV0ZXIgJHtpICsgMX0gb2YgJHtjbGFzc01ldGhvZFN5bWJvbC5uYW1lfSBpbmNvbXBhdGlibGUgd2l0aCBpbnRlcmZhY2VgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBleHBlY3RlZFJldHVybjogVHlwZSA9IHN1YnN0aXR1dGVUeXBlKGludGVyZmFjZU1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlLCBzdWJzdGl0dXRpb25NYXApO1xuXG5cdFx0aWYgKCFleHBlY3RlZFJldHVybi5hY2NlcHRzKGNsYXNzTWV0aG9kU3ltYm9sLnJldHVyblR5cGUpKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgUmV0dXJuIHR5cGUgb2YgJHtjbGFzc01ldGhvZFN5bWJvbC5uYW1lfSBpbmNvbXBhdGlibGUgd2l0aCBpbnRlcmZhY2VgKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrU3RhdGVtZW50KG5vZGU6IEFTVE5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBTdGF0ZW1lbnRSZXN1bHQge1xuXHRcdHN3aXRjaCAobm9kZS50eXBlKSB7XG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLlJFVFVSTjpcblx0XHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RSZXR1cm5Ob2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFN0YXRlbWVudFJlc3VsdC53aXRoUmV0dXJuKFxuXHRcdFx0XHRcdFx0dGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5hcmd1bWVudCwgc2NvcGUpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuVkFSSUFCTEU6XG5cdFx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUVmFyaWFibGVOb2RlKSB7XG5cdFx0XHRcdFx0dGhpcy5jaGVja1ZhcmlhYmxlKG5vZGUsIHNjb3BlKTtcblx0XHRcdFx0XHRyZXR1cm4gU3RhdGVtZW50UmVzdWx0Lm5vUmV0dXJuKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkZPUkVBQ0g6XG5cdFx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNURm9yZWFjaE5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gU3RhdGVtZW50UmVzdWx0LndpdGhSZXR1cm4oXG5cdFx0XHRcdFx0XHR0aGlzLmNoZWNrRm9yZWFjaChub2RlLCBzY29wZSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5FWFBSRVNTSU9OOlxuXHRcdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEV4cHJlc3Npb25Ob2RlKSB7XG5cdFx0XHRcdFx0dGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5leHByLCBzY29wZSk7XG5cdFx0XHRcdFx0cmV0dXJuIFN0YXRlbWVudFJlc3VsdC5ub1JldHVybigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiBTdGF0ZW1lbnRSZXN1bHQubm9SZXR1cm4oKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tWYXJpYWJsZShub2RlOiBBU1RWYXJpYWJsZU5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiB2b2lkIHtcblx0XHRjb25zdCBkZWNsYXJlZFR5cGU6IFR5cGUgfCBudWxsID0gbm9kZS50eXBlQW5ub3RhdGlvblxuXHRcdFx0PyB0aGlzLndyYXBUeXBlKG5vZGUudHlwZUFubm90YXRpb24sIHNjb3BlKVxuXHRcdFx0OiBudWxsO1xuXG5cdFx0Y29uc3QgYWN0dWFsVHlwZTogVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKG5vZGUuaW5pdCwgc2NvcGUsIGRlY2xhcmVkVHlwZSk7XG5cblx0XHRpZiAoZGVjbGFyZWRUeXBlICYmICFkZWNsYXJlZFR5cGUuYWNjZXB0cyhhY3R1YWxUeXBlKSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFR5cGUgbWlzbWF0Y2g6ICR7ZGVjbGFyZWRUeXBlfSA8PiAke2FjdHVhbFR5cGV9YCwgbm9kZSk7XG5cdFx0fVxuXG5cdFx0c2NvcGUuZGVmaW5lVHlwZShub2RlLm5hbWUsIGRlY2xhcmVkVHlwZSA/PyBhY3R1YWxUeXBlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tGb3JlYWNoKG5vZGU6IEFTVEZvcmVhY2hOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0bGV0IGl0ZXJhYmxlVHlwZTogVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKG5vZGUuaXRlcmFibGUsIHNjb3BlKTtcblxuXHRcdGl0ZXJhYmxlVHlwZSA9IEF1dG9ib3hpbmcuYXV0b2JveElmTmVlZGVkKGl0ZXJhYmxlVHlwZSwgdGhpcy5vYmplY3RSZWdpc3RyeSk7XG5cblx0XHRpZiAoaXRlcmFibGVUeXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlICYmIGl0ZXJhYmxlVHlwZS5jbGFzc1N5bWJvbC5uYW1lID09PSAnQXJyYXknKSB7XG5cdFx0XHRpZiAoaXRlcmFibGVUeXBlLnR5cGVBcmd1bWVudHMubGVuZ3RoICE9PSAxKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKCdBcnJheSBpbiBmb3JlYWNoIG11c3N0IGhhdmUgZXhhY3RseSBvbmUgdHlwZSBhcmd1bWVudC4nLCBub2RlLml0ZXJhYmxlKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZWxlbWVudFR5cGU6IFR5cGUgfCBudWxsID0gaXRlcmFibGVUeXBlLnR5cGVBcmd1bWVudHNbMF0gfHwgbnVsbDtcblxuXHRcdFx0aWYgKGVsZW1lbnRUeXBlID09PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKCdBcnJheSBpbiBmb3JlYWNoIG11c3QgaGF2ZSBleGFjdGx5IG9uZSB0eXBlIGFyZ3VtZW50LicsIG5vZGUuaXRlcmFibGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBsb29wU2NvcGUgPSBuZXcgVHlwZVNjb3BlKHNjb3BlKTtcblx0XHRcdGxvb3BTY29wZS5kZWZpbmVUeXBlKG5vZGUuaXRlcmF0b3IsIGVsZW1lbnRUeXBlKTtcblxuXHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tCb2R5KG5vZGUuYm9keSwgbG9vcFNjb3BlKTtcblxuXHRcdH1cblxuXHRcdHRoaXMudHlwZUVycm9yKGBmb3JlYWNoIGV4cGVjdHMgQXJyYXk8VD4sIGdvdCAke2l0ZXJhYmxlVHlwZS50b1N0cmluZygpfWAsIG5vZGUuaXRlcmFibGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0V4cHJlc3Npb24oZXhwcjogQVNUTm9kZSB8IG51bGwsIHNjb3BlOiBUeXBlU2NvcGUsIGV4cGVjdGVkVHlwZTogVHlwZSB8IG51bGwgPSBudWxsKTogVHlwZSB7XG5cdFx0aWYgKGV4cHIgPT09IG51bGwpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKCdFeHByZXNzaW9uIGV4cGVjdGVkLCBnb3QgbnVsbC4nLCBleHByKTtcblx0XHR9XG5cblx0XHRzd2l0Y2ggKGV4cHIudHlwZSkge1xuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5OVU1CRVI6XG5cdFx0XHRcdHJldHVybiBUeXBlcy5OVU1CRVI7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuU1RSSU5HOlxuXHRcdFx0XHRyZXR1cm4gVHlwZXMuU1RSSU5HO1xuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkJPT0xFQU46XG5cdFx0XHRcdHJldHVybiBUeXBlcy5CT09MRUFOO1xuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLk5VTEw6XG5cdFx0XHRcdHJldHVybiBUeXBlcy5OVUxMO1xuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLlZET006IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RWRG9tTm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrVkRvbU5vZGUoZXhwcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuQVJSQVk6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RBcnJheU5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0FycmF5RXhwcmVzc2lvbihleHByLCBzY29wZSwgZXhwZWN0ZWRUeXBlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5JTkRFWDoge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVEluZGV4Tm9kZSkge1xuXHRcdFx0XHRcdGNvbnN0IG9iamVjdFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihleHByLm9iamVjdCwgc2NvcGUpO1xuXHRcdFx0XHRcdGNvbnN0IGluZGV4ID0gdGhpcy5jaGVja0V4cHJlc3Npb24oZXhwci5pbmRleCwgc2NvcGUpO1xuXG5cdFx0XHRcdFx0aWYgKG9iamVjdFR5cGUgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUpIHtcblx0XHRcdFx0XHRcdHJldHVybiBvYmplY3RUeXBlLnR5cGVBcmd1bWVudHNbMF0gfHwgVHlwZXMuTUlYRUQ7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBpbmRleCAke29iamVjdFR5cGUubmFtZX0gd2l0aCAke2luZGV4Lm5hbWV9YCwgZXhwcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuVU5BUlk6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RVbmFyeU5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja1VuYXJ5RXhwcmVzc2lvbihleHByLCBzY29wZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuTUVNQkVSOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrTWVtYmVyRXhwcmVzc2lvbihleHByLCBzY29wZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuVEhJUzoge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja1RoaXNFeHByZXNzaW9uKGV4cHIsIHNjb3BlKTtcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5JREVOVElGSUVSOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0lkZW50aWZpZXJFeHByZXNzaW9uKGV4cHIsIHNjb3BlKTtcblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5ORVc6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1ROZXdOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tOZXdFeHByZXNzaW9uKGV4cHIsIHNjb3BlLCBleHBlY3RlZFR5cGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkJJTkFSWToge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVEJpbmFyeU5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0JpbmFyeUV4cHJlc3Npb24oZXhwciwgc2NvcGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkxBTUJEQToge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVExhbWJkYU5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0xhbWJkYUV4cHJlc3Npb24oZXhwciwgc2NvcGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkNBTEw6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RDYWxsTm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrQ2FsbEV4cHJlc3Npb24oZXhwciwgc2NvcGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBUeXBlcy5NSVhFRDtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tCaW5hcnlFeHByZXNzaW9uKGV4cHI6IEFTVEJpbmFyeU5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRjb25zdCBsZWZ0OiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24oZXhwci5sZWZ0LCBzY29wZSk7XG5cdFx0Y29uc3QgcmlnaHQ6IFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihleHByLnJpZ2h0LCBzY29wZSk7XG5cdFx0Y29uc3Qgb3A6IHN0cmluZyA9IGV4cHIub3BlcmF0b3I7XG5cblx0XHRpZiAoR1JBTU1BUi5BUklUSE1FVElDLmluY2x1ZGVzKG9wKSkge1xuXHRcdFx0aWYgKGxlZnQuYWNjZXB0cyhUeXBlcy5OVU1CRVIpICYmIHJpZ2h0LmFjY2VwdHMoVHlwZXMuTlVNQkVSKSkge1xuXHRcdFx0XHRyZXR1cm4gVHlwZXMuTlVNQkVSO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGxlZnQuYWNjZXB0cyhUeXBlcy5TVFJJTkcpIHx8IHJpZ2h0LmFjY2VwdHMoVHlwZXMuU1RSSU5HKSkge1xuXHRcdFx0XHRyZXR1cm4gVHlwZXMuU1RSSU5HO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYEFyaXRobWV0aWMgb3BlcmF0b3IgJyR7b3B9JyByZXF1aXJlcyBudW1iZXJzYCwgZXhwcik7XG5cdFx0fVxuXG5cdFx0aWYgKEdSQU1NQVIuQ09NUEFSSVNPTi5pbmNsdWRlcyhvcCkpIHtcblx0XHRcdGlmIChsZWZ0LmFjY2VwdHMoVHlwZXMuTlVNQkVSKSAmJiByaWdodC5hY2NlcHRzKFR5cGVzLk5VTUJFUikpIHtcblx0XHRcdFx0cmV0dXJuIFR5cGVzLkJPT0xFQU47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQ29tcGFyaXNvbiAnJHtvcH0nIHJlcXVpcmVzIG51bWJlcnNgLCBleHByKTtcblx0XHR9XG5cblx0XHRpZiAoR1JBTU1BUi5FUVVBTElUWS5pbmNsdWRlcyhvcCkpIHtcblx0XHRcdGlmIChsZWZ0LmFjY2VwdHMocmlnaHQpKSB7XG5cdFx0XHRcdHJldHVybiBUeXBlcy5CT09MRUFOO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBjb21wYXJlICR7bGVmdC5uYW1lfSB3aXRoICR7cmlnaHQubmFtZX1gLCBleHByKTtcblx0XHR9XG5cblx0XHRpZiAoR1JBTU1BUi5MT0dJQ0FMLmluY2x1ZGVzKG9wKSkge1xuXHRcdFx0aWYgKGxlZnQuYWNjZXB0cyhUeXBlcy5CT09MRUFOKSAmJiByaWdodC5hY2NlcHRzKFR5cGVzLkJPT0xFQU4pKSB7XG5cdFx0XHRcdHJldHVybiBUeXBlcy5CT09MRUFOO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYExvZ2ljYWwgb3BlcmF0b3IgJyR7b3B9JyByZXF1aXJlcyBib29sZWFuc2AsIGV4cHIpO1xuXHRcdH1cblxuXHRcdHRoaXMudHlwZUVycm9yKGBJbnZhbGlkIGJpbmFyeSBvcGVyYXRpb25gLCBleHByKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tGaWVsZEFjY2Vzcyhub2RlOiBBU1RNZW1iZXJOb2RlLCBjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wsIGZpZWxkU3ltYm9sOiBGaWVsZFN5bWJvbCwgc2NvcGU6IFR5cGVTY29wZSk6IHZvaWQge1xuXHRcdGlmIChmaWVsZFN5bWJvbC5pc1B1YmxpYykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICghc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBhY2Nlc3MgcHJpdmF0ZSBtZW1iZXIgJHtub2RlLnByb3BlcnR5fSBvZiAke2NsYXNzU3ltYm9sLm5hbWV9YCwgbm9kZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgIT09IGZpZWxkU3ltYm9sLm93bmVyKSB7XG5cdFx0XHRpZiAoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCBpbnN0YW5jZW9mIENsYXNzU3ltYm9sXG5cdFx0XHRcdCYmIHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wuc3VwZXJDbGFzc1N5bWJvbCAhPT0gZmllbGRTeW1ib2wub3duZXIpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBhY2Nlc3MgcHJpdmF0ZSBtZW1iZXIgJHtub2RlLnByb3BlcnR5fSBvZiAke2NsYXNzU3ltYm9sLm5hbWV9YCwgbm9kZSk7XG5cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrSW5zdGFuY2VNZXRob2RBY2Nlc3Mobm9kZTogQVNUTWVtYmVyTm9kZSwgY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sLCBtZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCwgc2NvcGU6IFR5cGVTY29wZSk6IHZvaWQge1xuXHRcdGlmIChtZXRob2RTeW1ib2wuaXNQdWJsaWMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIXNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgYWNjZXNzIHByaXZhdGUgbWV0aG9kICR7bm9kZS5wcm9wZXJ0eX0gb2YgJHtjbGFzc1N5bWJvbC5uYW1lfWAsIG5vZGUpO1xuXHRcdH1cblxuXHRcdGlmIChzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sICE9PSBtZXRob2RTeW1ib2wub3duZXIpIHtcblx0XHRcdGlmIChzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sIGluc3RhbmNlb2YgQ2xhc3NTeW1ib2xcblx0XHRcdFx0JiYgc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbC5zdXBlckNsYXNzU3ltYm9sICE9PSBtZXRob2RTeW1ib2wub3duZXIpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBhY2Nlc3MgcHJpdmF0ZSBtZXRob2QgJHtub2RlLnByb3BlcnR5fSBvZiAke2NsYXNzU3ltYm9sLm5hbWV9YCwgbm9kZSk7XG5cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrU3RhdGljTWV0aG9kQWNjZXNzKGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCwgbWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wsIHNjb3BlOiBUeXBlU2NvcGUpOiB2b2lkIHtcblx0XHRpZiAoIW1ldGhvZFN5bWJvbC5pc1N0YXRpYykge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBjYWxsIGluc3RhbmNlIG1ldGhvZCAke2NsYXNzU3ltYm9sLm5hbWV9LiR7bWV0aG9kU3ltYm9sLm5hbWV9IGFzIHN0YXRpYyBtZXRob2RgKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAobWV0aG9kU3ltYm9sLmlzUHVibGljKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCFzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGFjY2VzcyBwcml2YXRlIG1ldGhvZCAke21ldGhvZFN5bWJvbC5uYW1lfSBvZiAke2NsYXNzU3ltYm9sLm5hbWV9YCxcblx0XHRcdCAgICAgICAgICAgICAgIG1ldGhvZFN5bWJvbC5ub2RlKTtcblx0XHR9XG5cblx0XHRpZiAoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCAhPT0gbWV0aG9kU3ltYm9sLm93bmVyKSB7XG5cdFx0XHRpZiAoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCBpbnN0YW5jZW9mIENsYXNzU3ltYm9sXG5cdFx0XHRcdCYmIHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wuc3VwZXJDbGFzc1N5bWJvbCAhPT0gbWV0aG9kU3ltYm9sLm93bmVyKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgYWNjZXNzIHByaXZhdGUgbWV0aG9kICR7bWV0aG9kU3ltYm9sLm5hbWV9IG9mICR7Y2xhc3NTeW1ib2wubmFtZX1gLFxuXHRcdFx0XHQgICAgICAgICAgICAgICBtZXRob2RTeW1ib2wubm9kZSk7XG5cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrTWVtYmVyRXhwcmVzc2lvbihub2RlOiBBU1RNZW1iZXJOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0Y29uc3Qgb2JqZWN0VHlwZTogVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKG5vZGUub2JqZWN0LCBzY29wZSk7XG5cblx0XHRpZiAob2JqZWN0VHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSkge1xuXHRcdFx0Y29uc3QgY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sID0gb2JqZWN0VHlwZS5jbGFzc1N5bWJvbDtcblxuXHRcdFx0Y29uc3QgaW5zdGFuY2VGaWVsZFN5bWJvbDogRmllbGRTeW1ib2wgfCBudWxsID0gY2xhc3NTeW1ib2wucmVzb2x2ZUluc3RhbmNlRmllbGRTeW1ib2wobm9kZS5wcm9wZXJ0eSk7XG5cdFx0XHRpZiAoaW5zdGFuY2VGaWVsZFN5bWJvbCkge1xuXHRcdFx0XHR0aGlzLmNoZWNrRmllbGRBY2Nlc3Mobm9kZSwgY2xhc3NTeW1ib2wsIGluc3RhbmNlRmllbGRTeW1ib2wsIHNjb3BlKTtcblx0XHRcdFx0cmV0dXJuIGluc3RhbmNlRmllbGRTeW1ib2wuZmllbGRUeXBlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzdGF0aWNGaWVsZFN5bWJvbDogRmllbGRTeW1ib2wgfCBudWxsID0gY2xhc3NTeW1ib2wucmVzb2x2ZVN0YXRpY0ZpZWxkU3ltYm9sKG5vZGUucHJvcGVydHkpO1xuXHRcdFx0aWYgKHN0YXRpY0ZpZWxkU3ltYm9sKSB7XG5cdFx0XHRcdHRoaXMuY2hlY2tGaWVsZEFjY2Vzcyhub2RlLCBjbGFzc1N5bWJvbCwgc3RhdGljRmllbGRTeW1ib2wsIHNjb3BlKTtcblx0XHRcdFx0cmV0dXJuIHN0YXRpY0ZpZWxkU3ltYm9sLmZpZWxkVHlwZTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFVua25vd24gbWVtYmVyICR7bm9kZS5wcm9wZXJ0eX1gLCBub2RlKTtcblx0XHR9XG5cblx0XHR0aGlzLnR5cGVFcnJvcihcIkNhbm5vdCBhY2Nlc3MgbWVtYmVyIG9mIG5vbi1vYmplY3RcIiwgbm9kZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrVGhpc0V4cHJlc3Npb24obm9kZTogQVNUTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IENsYXNzUmVmVHlwZSB7XG5cdFx0aWYgKHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgaW5zdGFuY2VvZiBDbGFzc1N5bWJvbCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDbGFzc1JlZlR5cGUoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCk7XG5cdFx0fVxuXHRcdHRoaXMudHlwZUVycm9yKCd0aGlzIG91dHNpZGUgb2YgY2xhc3MnLCBub2RlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlOiBBU1ROb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0aWYgKHNjb3BlLmhhc1R5cGUobm9kZS5uYW1lKSkge1xuXHRcdFx0cmV0dXJuIHNjb3BlLmdldFR5cGUobm9kZS5uYW1lKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKG5vZGUubmFtZSkpIHtcblx0XHRcdHJldHVybiBuZXcgQ2xhc3NSZWZUeXBlKHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2wobm9kZS5uYW1lKSk7XG5cdFx0fVxuXHRcdHRoaXMudHlwZUVycm9yKGBVbmRlZmluZWQgaWRlbnRpZmllciAke25vZGUubmFtZX1gLCBub2RlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tOZXdFeHByZXNzaW9uKG5vZGU6IEFTVE5ld05vZGUsIHNjb3BlOiBUeXBlU2NvcGUsIGV4cGVjdGVkVHlwZTogVHlwZSB8IG51bGwgPSBudWxsKTogQ2xhc3NSZWZUeXBlIHtcblx0XHRjb25zdCBjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wgPSB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKG5vZGUubmFtZSk7XG5cblx0XHRsZXQgaW5zdGFuY2VUeXBlO1xuXHRcdGlmIChub2RlLnR5cGVBbm5vdGF0aW9uLnR5cGVBcmd1bWVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0Y29uc3QgdHlwZUFyZ3VtZW50cyA9IG5vZGVcblx0XHRcdFx0LnR5cGVBbm5vdGF0aW9uXG5cdFx0XHRcdC50eXBlQXJndW1lbnRzXG5cdFx0XHRcdC5tYXAodHlwZUFyZ3VtZW50ID0+IHRoaXMud3JhcFR5cGUodHlwZUFyZ3VtZW50LCBzY29wZSkpO1xuXG5cdFx0XHRpZiAodHlwZUFyZ3VtZW50cy5sZW5ndGggIT09IGNsYXNzU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgV3JvbmcgbnVtYmVyIG9mIHR5cGUgYXJndW1lbnRzYCwgbm9kZSk7XG5cdFx0XHR9XG5cblx0XHRcdGluc3RhbmNlVHlwZSA9IG5ldyBDbGFzc1JlZlR5cGUoY2xhc3NTeW1ib2wsIHR5cGVBcmd1bWVudHMpO1xuXHRcdH0gZWxzZSBpZiAoZXhwZWN0ZWRUeXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0XHRpbnN0YW5jZVR5cGUgPSBleHBlY3RlZFR5cGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGluc3RhbmNlVHlwZSA9IG5ldyBDbGFzc1JlZlR5cGUoXG5cdFx0XHRcdGNsYXNzU3ltYm9sLFxuXHRcdFx0XHRjbGFzc1N5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5tYXAoKCkgPT4gVHlwZXMuTUlYRUQpXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmIChjbGFzc1N5bWJvbC5jb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbCkge1xuXHRcdFx0dGhpcy5jaGVja0NhbGxBcmd1bWVudHMoY2xhc3NTeW1ib2wuY29uc3RydWN0b3JNZXRob2RTeW1ib2wsIG5vZGUuYXJndW1lbnRzLCBzY29wZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGV4cGVjdGVkVHlwZSAmJiAhZXhwZWN0ZWRUeXBlLmFjY2VwdHMoaW5zdGFuY2VUeXBlKSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFR5cGUgbWlzbWF0Y2g6ICR7ZXhwZWN0ZWRUeXBlfSA8PiAke2luc3RhbmNlVHlwZX1gLCBub2RlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaW5zdGFuY2VUeXBlO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0FycmF5RXhwcmVzc2lvbihub2RlOiBBU1RBcnJheU5vZGUsIHNjb3BlOiBUeXBlU2NvcGUsIGV4cGVjdGVkVHlwZTogVHlwZSB8IG51bGwgPSBudWxsKTogQ2xhc3NSZWZUeXBlIHtcblxuXHRcdGlmIChub2RlLmVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0aWYgKGV4cGVjdGVkVHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSkge1xuXHRcdFx0XHRleHBlY3RlZFR5cGUgPSBleHBlY3RlZFR5cGUudHlwZUFyZ3VtZW50c1swXSB8fCBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcy5uZXdBcnJheVR5cGVPZihleHBlY3RlZFR5cGUgfHwgVHlwZXMuTUlYRUQpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNsYXNzUmVmTmFtZSA9IFByaW1pdGl2ZUNsYXNzVHlwZXMuZ2V0Q2xhc3NSZWZOYW1lKFByaW1pdGl2ZUNsYXNzVHlwZXMuQVJSQVkpO1xuXG5cdFx0bGV0IGV4cGVjdGVkVHlwZU9mSXRlbTogVHlwZTtcblx0XHRpZiAoZXhwZWN0ZWRUeXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlICYmIGV4cGVjdGVkVHlwZS5jbGFzc1N5bWJvbC5uYW1lID09PSBjbGFzc1JlZk5hbWUpIHtcblx0XHRcdGV4cGVjdGVkVHlwZU9mSXRlbSA9IGV4cGVjdGVkVHlwZS50eXBlQXJndW1lbnRzWzBdIHx8IFR5cGVzLk1JWEVEO1xuXHRcdH0gZWxzZSBpZiAobm9kZS5lbGVtZW50c1swXSkge1xuXHRcdFx0ZXhwZWN0ZWRUeXBlT2ZJdGVtID0gdGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5lbGVtZW50c1swXSwgc2NvcGUsIGV4cGVjdGVkVHlwZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKCdBcnJheSBleHByZXNzaW9uIG11c3QgaGF2ZSBhdCBsZWFzdCBvbmUgZWxlbWVudCcsIG5vZGUpO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgaXRlbSBvZiBub2RlLmVsZW1lbnRzKSB7XG5cdFx0XHRjb25zdCBhY3R1YWxUeXBlT2ZJdGVtOiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24oaXRlbSwgc2NvcGUsIGV4cGVjdGVkVHlwZU9mSXRlbSk7XG5cdFx0XHRpZiAoIWV4cGVjdGVkVHlwZU9mSXRlbS5hY2NlcHRzKGFjdHVhbFR5cGVPZkl0ZW0pKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKFxuXHRcdFx0XHRcdGBBcnJheSBlbGVtZW50cyBtdXN0IGhhdmUgc2FtZSB0eXBlLCBnb3QgJHtleHBlY3RlZFR5cGVPZkl0ZW19IGFuZCAke2FjdHVhbFR5cGVPZkl0ZW19YCxcblx0XHRcdFx0XHRub2RlXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMubmV3QXJyYXlUeXBlT2YoZXhwZWN0ZWRUeXBlT2ZJdGVtKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tVbmFyeUV4cHJlc3Npb24obm9kZTogQVNUVW5hcnlOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0Y29uc3Qgb3BlcmFuZCA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKG5vZGUuYXJndW1lbnQsIHNjb3BlKTtcblx0XHRjb25zdCBvcCA9IG5vZGUub3BlcmF0b3I7XG5cdFx0aWYgKG9wID09PSBHUkFNTUFSLkVYQ0xBTUFUSU9OX01BUkspIHtcblx0XHRcdGlmIChvcGVyYW5kLmVxdWFscyhUeXBlcy5CT09MRUFOKSkge1xuXHRcdFx0XHRyZXR1cm4gVHlwZXMuQk9PTEVBTjtcblx0XHRcdH1cblx0XHRcdHRoaXMudHlwZUVycm9yKGBVbmFyeSAnIScgcmVxdWlyZXMgYm9vbGVhbiwgZ290ICR7b3BlcmFuZC5uYW1lfWAsIG5vZGUpO1xuXHRcdH1cblx0XHR0aGlzLnR5cGVFcnJvcihgSW52YWxpZCB1bmFyeSBvcGVyYXRvciAke29wfWAsIG5vZGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0xhbWJkYUV4cHJlc3Npb24obm9kZTogQVNUTGFtYmRhTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IExhbWJkYVR5cGUge1xuXHRcdGNvbnN0IGxhbWJkYVNjb3BlID0gbmV3IFR5cGVTY29wZShzY29wZSk7XG5cdFx0Y29uc3QgcGFyYW1ldGVycyA9IG5vZGUucGFyYW1ldGVycy5tYXAocGFyYW1ldGVyTm9kZSA9PiB7XG5cdFx0XHRjb25zdCBwYXJhbWV0ZXJTeW1ib2w6IFBhcmFtZXRlclN5bWJvbCA9IHRoaXMucGFyYW1ldGVyTm9kZVRvU3ltYm9sKHBhcmFtZXRlck5vZGUpO1xuXG5cdFx0XHRsYW1iZGFTY29wZS5kZWZpbmVUeXBlKHBhcmFtZXRlck5vZGUubmFtZSwgcGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGUpO1xuXG5cdFx0XHRyZXR1cm4gcGFyYW1ldGVyU3ltYm9sO1xuXHRcdH0pO1xuXG5cdFx0aWYgKG5vZGUuY2hpbGRyZW5bMF0pIHtcblx0XHRcdHJldHVybiBuZXcgTGFtYmRhVHlwZShwYXJhbWV0ZXJzLCB0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLmNoaWxkcmVuWzBdLCBsYW1iZGFTY29wZSkpO1xuXHRcdH1cblxuXHRcdHRoaXMudHlwZUVycm9yKCdMYW1iZGEgZXhwcmVzc2lvbiBtdXN0IGhhdmUgYSByZXR1cm4gdHlwZScsIG5vZGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0NhbGxFeHByZXNzaW9uKG5vZGU6IEFTVENhbGxOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0Y29uc3QgY2FsbGVlID0gbm9kZS5jYWxsZWU7XG5cblx0XHRpZiAoY2FsbGVlLnR5cGUgPT09IEFTVE5vZGVUeXBlLklERU5USUZJRVIgJiYgY2FsbGVlLm5hbWUgPT09IEdSQU1NQVIuU1VQRVIpIHtcblx0XHRcdHJldHVybiB0aGlzLmNoZWNrU3VwZXJDb25zdHJ1Y3RvckNhbGwobm9kZSwgc2NvcGUpO1xuXHRcdH1cblxuXHRcdC8vIENsYXNzLm1ldGhvZCgpXG5cdFx0aWYgKGNhbGxlZSBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGVcblx0XHRcdCYmIGNhbGxlZS5vYmplY3QudHlwZSA9PT0gQVNUTm9kZVR5cGUuSURFTlRJRklFUlxuXHRcdFx0JiYgdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5oYXNTeW1ib2woY2FsbGVlLm9iamVjdC5uYW1lKVxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tTdGF0aWNDYWxsKFxuXHRcdFx0XHRjYWxsZWUub2JqZWN0Lm5hbWUsXG5cdFx0XHRcdGNhbGxlZS5wcm9wZXJ0eSxcblx0XHRcdFx0bm9kZS5hcmd1bWVudHMsXG5cdFx0XHRcdHNjb3BlXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIGV4cHIubWV0aG9kKClcblx0XHRpZiAoY2FsbGVlIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tJbnN0YW5jZUNhbGwoY2FsbGVlLCBub2RlLmFyZ3VtZW50cywgc2NvcGUpO1xuXHRcdH1cblxuXHRcdGlmIChjYWxsZWUgaW5zdGFuY2VvZiBBU1RMYW1iZGFOb2RlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jaGVja0xhbWJkYUNhbGwodGhpcy5jaGVja0xhbWJkYUV4cHJlc3Npb24oY2FsbGVlLCBzY29wZSksIG5vZGUuYXJndW1lbnRzLCBzY29wZSk7XG5cdFx0fVxuXG5cdFx0Ly8gSWRlbnRpZmllcjogVmFyaWFibGUgLyBMYW1iZGFcblx0XHRpZiAoY2FsbGVlLnR5cGUgPT09IEFTVE5vZGVUeXBlLklERU5USUZJRVIpIHtcblx0XHRcdGlmIChzY29wZS5oYXNUeXBlKGNhbGxlZS5uYW1lKSkge1xuXHRcdFx0XHRjb25zdCB0eXBlID0gc2NvcGUuZ2V0VHlwZShjYWxsZWUubmFtZSk7XG5cdFx0XHRcdGlmICh0eXBlIGluc3RhbmNlb2YgTGFtYmRhVHlwZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrTGFtYmRhQ2FsbCh0eXBlLCBub2RlLmFyZ3VtZW50cywgc2NvcGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgY2FsbCBub24tZnVuY3Rpb24gJHtjYWxsZWUubmFtZX1gLCBub2RlKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRmFsbGJhY2s6IGdsb2JhbGUgRnVua3Rpb25cblx0XHRcdHJldHVybiB0aGlzLmNoZWNrRnVuY3Rpb25DYWxsKGNhbGxlZS5uYW1lLCBub2RlLmFyZ3VtZW50cywgc2NvcGUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBUeXBlcy5NSVhFRDtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tTdXBlckNvbnN0cnVjdG9yQ2FsbChub2RlOiBBU1RDYWxsTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGNvbnN0IGN1cnJlbnRDbGFzcyA9IHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2w7XG5cblx0XHRpZiAoIShjdXJyZW50Q2xhc3MgaW5zdGFuY2VvZiBDbGFzc1N5bWJvbCkpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKCdzdXBlcigpIHVzZWQgb3V0c2lkZSBvZiBjbGFzcycsIG5vZGUpO1xuXHRcdH1cblxuXHRcdGlmICghY3VycmVudENsYXNzLnN1cGVyQ2xhc3MpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKCdzdXBlcigpIHVzZWQgb3V0c2lkZSBvZiBjbGFzcyBoaWVyYXJjaHknLCBub2RlKTtcblx0XHR9XG5cblx0XHRjb25zdCBzdXBlclN5bWJvbDogQ2xhc3NTeW1ib2wgPSB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKGN1cnJlbnRDbGFzcy5zdXBlckNsYXNzKTtcblx0XHRpZiAoIXN1cGVyU3ltYm9sLmNvbnN0cnVjdG9yTWV0aG9kU3ltYm9sKSB7XG5cdFx0XHRpZiAobm9kZS5hcmd1bWVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcignU3VwZXIgY29uc3RydWN0b3IgdGFrZXMgbm8gYXJndW1lbnRzJywgbm9kZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gVHlwZXMuVk9JRDtcblx0XHR9XG5cblx0XHR0aGlzLmNoZWNrQ2FsbEFyZ3VtZW50cyhzdXBlclN5bWJvbC5jb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbCwgbm9kZS5hcmd1bWVudHMsIHNjb3BlKTtcblxuXHRcdHJldHVybiBUeXBlcy5WT0lEO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0NhbGxPbk51bGxPYmplY3RUeXBlKG9iamVjdFR5cGU6IFR5cGUsIG5vZGU6IEFTVE5vZGUpOiB2b2lkIHtcblx0XHRpZiAob2JqZWN0VHlwZS5lcXVhbHMoVHlwZXMuTlVMTCkpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgY2FsbCBtZXRob2Qgb24gbnVsbGAsIG5vZGUpO1xuXHRcdH1cblx0XHRpZiAob2JqZWN0VHlwZSBpbnN0YW5jZW9mIE51bGxhYmxlVHlwZSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBjYWxsIG1ldGhvZCBvbiBudWxsYWJsZSB0eXBlICR7b2JqZWN0VHlwZX1gLCBub2RlKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrSW5zdGFuY2VDYWxsKGNhbGxlZTogQVNUTWVtYmVyTm9kZSwgY2FsbEFyZ3VtZW50czogQVNUTm9kZVtdLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0bGV0IG9iamVjdFR5cGU6IFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihjYWxsZWUub2JqZWN0LCBzY29wZSk7XG5cblx0XHRvYmplY3RUeXBlID0gQXV0b2JveGluZy5hdXRvYm94SWZOZWVkZWQob2JqZWN0VHlwZSwgdGhpcy5vYmplY3RSZWdpc3RyeSk7XG5cblx0XHR0aGlzLmNoZWNrQ2FsbE9uTnVsbE9iamVjdFR5cGUob2JqZWN0VHlwZSwgY2FsbGVlKTtcblxuXHRcdGlmIChvYmplY3RUeXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0XHRjb25zdCBtZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCA9IHRoaXMucmVzb2x2ZUluc3RhbmNlTWV0aG9kZShcblx0XHRcdFx0b2JqZWN0VHlwZS5jbGFzc1N5bWJvbCxcblx0XHRcdFx0Y2FsbGVlLnByb3BlcnR5XG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAobWV0aG9kU3ltYm9sLmlzU3RhdGljKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgY2FsbCBzdGF0aWMgbWV0aG9kICR7Y2FsbGVlLnByb3BlcnR5fSBvbiBpbnN0YW5jZSBvZiAke2NhbGxlZS5vYmplY3QubmFtZX1gLFxuXHRcdFx0XHQgICAgICAgICAgICAgICBjYWxsZWUpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmNoZWNrSW5zdGFuY2VNZXRob2RBY2Nlc3MoY2FsbGVlLCBvYmplY3RUeXBlLmNsYXNzU3ltYm9sLCBtZXRob2RTeW1ib2wsIHNjb3BlKTtcblxuXHRcdFx0Y29uc3Qgb3duZXI6IENsYXNzU3ltYm9sIHwgSW50ZXJmYWNlU3ltYm9sIHwgbnVsbCA9IG1ldGhvZFN5bWJvbC5vd25lcjtcblxuXHRcdFx0aWYgKG93bmVyID09PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgY2FsbCBtZXRob2Qgb24gbm9uLW9iamVjdGAsIGNhbGxlZSk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHN1YnN0aXR1dGlvbk1hcDogTWFwPHN0cmluZywgVHlwZT4gPSBidWlsZFR5cGVTdWJzdGl0dXRpb25NYXAoXG5cdFx0XHRcdG93bmVyLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLFxuXHRcdFx0XHRvYmplY3RUeXBlLnR5cGVBcmd1bWVudHNcblx0XHRcdCk7XG5cblx0XHRcdHRoaXMuY2hlY2tDYWxsQXJndW1lbnRzKG1ldGhvZFN5bWJvbCwgY2FsbEFyZ3VtZW50cywgc2NvcGUsIHN1YnN0aXR1dGlvbk1hcCk7XG5cblx0XHRcdHJldHVybiBzdWJzdGl0dXRlVHlwZShtZXRob2RTeW1ib2wucmV0dXJuVHlwZSwgc3Vic3RpdHV0aW9uTWFwKTtcblx0XHR9XG5cblx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNhbGwgbWV0aG9kIG9uIG5vbi1vYmplY3RgLCBjYWxsZWUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1N0YXRpY0NhbGwoY2xhc3NOYW1lOiBzdHJpbmcsIG1ldGhvZE5hbWU6IHN0cmluZywgY2FsbEFyZ3VtZW50czogQVNUTm9kZVtdLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0Y29uc3QgY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sID0gdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChjbGFzc05hbWUpO1xuXG5cdFx0Y29uc3QgbWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wgfCBudWxsID0gY2xhc3NTeW1ib2wuc3RhdGljTWV0aG9kU3ltYm9scy5nZXQobWV0aG9kTmFtZSkgfHwgbnVsbDtcblx0XHRpZiAoIW1ldGhvZFN5bWJvbCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFVua25vd24gc3RhdGljIG1ldGhvZCAke2NsYXNzTmFtZX0uJHttZXRob2ROYW1lfWApO1xuXHRcdH1cblxuXHRcdHRoaXMuY2hlY2tTdGF0aWNNZXRob2RBY2Nlc3MoY2xhc3NTeW1ib2wsIG1ldGhvZFN5bWJvbCwgc2NvcGUpXG5cblx0XHR0aGlzLmNoZWNrQ2FsbEFyZ3VtZW50cyhtZXRob2RTeW1ib2wsIGNhbGxBcmd1bWVudHMsIHNjb3BlKTtcblxuXHRcdHJldHVybiBtZXRob2RTeW1ib2wucmV0dXJuVHlwZTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tMYW1iZGFDYWxsKGxhbWJkYTogTGFtYmRhVHlwZSwgY2FsbEFyZ3VtZW50czogQVNUTm9kZVtdLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cblx0XHR0aGlzLmNoZWNrQ2FsbEFyZ3VtZW50cyhsYW1iZGEsIGNhbGxBcmd1bWVudHMsIHNjb3BlKTtcblxuXHRcdHJldHVybiBsYW1iZGEucmV0dXJuVHlwZTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tGdW5jdGlvbkNhbGwobmFtZTogc3RyaW5nLCBjYWxsQXJndW1lbnRzOiBBU1ROb2RlW10sIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRpZiAoIWdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5LmhhcyhuYW1lKSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFVua25vd24gZnVuY3Rpb24gJHtuYW1lfWApO1xuXHRcdH1cblxuXHRcdGNvbnN0IG5hdGl2ZUZ1bmN0aW9uOiBOYXRpdmVGdW5jdGlvbiA9IGdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5LmdldChuYW1lKTtcblxuXHRcdHRoaXMuY2hlY2tDYWxsQXJndW1lbnRzKG5hdGl2ZUZ1bmN0aW9uLCBjYWxsQXJndW1lbnRzLCBzY29wZSk7XG5cblx0XHRyZXR1cm4gbmF0aXZlRnVuY3Rpb24ucmV0dXJuVHlwZVxuXHRcdFx0PyB0aGlzLndyYXBUeXBlKG5hdGl2ZUZ1bmN0aW9uLnJldHVyblR5cGUsIHNjb3BlKVxuXHRcdFx0OiBUeXBlcy5WT0lEO1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJhbWV0ZXJzU3ltYm9sc0Zyb21DYWxsYWJsZVN5bWJvbChjYWxsYWJsZVN5bWJvbDogTWV0aG9kU3ltYm9sIHwgTGFtYmRhVHlwZSB8IE5hdGl2ZUZ1bmN0aW9uKTogUGFyYW1ldGVyU3ltYm9sW10ge1xuXHRcdGlmIChjYWxsYWJsZVN5bWJvbCBpbnN0YW5jZW9mIE5hdGl2ZUZ1bmN0aW9uKSB7XG5cdFx0XHRyZXR1cm4gY2FsbGFibGVTeW1ib2xcblx0XHRcdFx0LnBhcmFtZXRlck5vZGVzXG5cdFx0XHRcdC5tYXAocGFyYW1ldGVyTm9kZSA9PiB0aGlzLnBhcmFtZXRlck5vZGVUb1N5bWJvbChwYXJhbWV0ZXJOb2RlKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNhbGxhYmxlU3ltYm9sLnBhcmFtZXRlclN5bWJvbHNcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tDYWxsQXJndW1lbnRzKFxuXHRcdGNhbGxhYmxlU3ltYm9sOiBNZXRob2RTeW1ib2wgfCBMYW1iZGFUeXBlIHwgTmF0aXZlRnVuY3Rpb24sXG5cdFx0Y2FsbEFyZ3VtZW50czogQVNUTm9kZVtdLFxuXHRcdHNjb3BlOiBUeXBlU2NvcGUsXG5cdFx0c3Vic3RpdHV0aW9uTWFwOiBNYXA8c3RyaW5nLCBUeXBlPiA9IG5ldyBNYXAoKVxuXHQpOiB2b2lkIHtcblx0XHRjb25zdCBjYWxsU2NvcGUgPSBuZXcgVHlwZVNjb3BlKHNjb3BlKTtcblx0XHRsZXQgcGFyYW1ldGVyU3ltYm9scyA9IHRoaXMucGFyYW1ldGVyc1N5bWJvbHNGcm9tQ2FsbGFibGVTeW1ib2woY2FsbGFibGVTeW1ib2wpO1xuXG5cdFx0aWYgKGNhbGxBcmd1bWVudHMubGVuZ3RoID4gcGFyYW1ldGVyU3ltYm9scy5sZW5ndGgpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKFwiQXJndW1lbnQgY291bnQgbWlzbWF0Y2hcIik7XG5cdFx0fVxuXG5cdFx0bGV0IGFjdHVhbFR5cGU6IFR5cGU7XG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHBhcmFtZXRlclN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHBhcmFtZXRlclN5bWJvbDogUGFyYW1ldGVyU3ltYm9sIHwgbnVsbCA9IHBhcmFtZXRlclN5bWJvbHNbaV0gfHwgbnVsbDtcblx0XHRcdGNvbnN0IGNhbGxBcmd1bWVudDogQVNUTm9kZSB8IG51bGwgPSBjYWxsQXJndW1lbnRzW2ldIHx8IG51bGw7XG5cblx0XHRcdGlmIChwYXJhbWV0ZXJTeW1ib2wpIHtcblx0XHRcdFx0Y29uc3QgZXhwZWN0ZWRUeXBlOiBUeXBlID0gc3Vic3RpdHV0ZVR5cGUocGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGUsIHN1YnN0aXR1dGlvbk1hcCk7XG5cblx0XHRcdFx0aWYgKGNhbGxBcmd1bWVudCkge1xuXHRcdFx0XHRcdGFjdHVhbFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihjYWxsQXJndW1lbnQsIGNhbGxTY29wZSwgZXhwZWN0ZWRUeXBlKTtcblx0XHRcdFx0fSBlbHNlIGlmIChwYXJhbWV0ZXJTeW1ib2wuZGVmYXVsdFR5cGUpIHtcblx0XHRcdFx0XHRhY3R1YWxUeXBlID0gcGFyYW1ldGVyU3ltYm9sLmRlZmF1bHRUeXBlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMudHlwZUVycm9yKGBNaXNzaW5nIGFyZ3VtZW50ICR7cGFyYW1ldGVyU3ltYm9sLm5hbWV9YCwgY2FsbEFyZ3VtZW50KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuY2hlY2tBc3NpZ25hYmxlKGV4cGVjdGVkVHlwZSwgYWN0dWFsVHlwZSwgY2FsbEFyZ3VtZW50c1tpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0Fzc2lnbmFibGUoZXhwZWN0ZWRUeXBlOiBUeXBlLCBhY3R1YWxUeXBlOiBUeXBlLCBub2RlOiBBU1ROb2RlIHwgbnVsbCA9IG51bGwpOiB2b2lkIHtcblx0XHRpZiAoZXhwZWN0ZWRUeXBlLmVxdWFscyhhY3R1YWxUeXBlKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChleHBlY3RlZFR5cGUgaW5zdGFuY2VvZiBNaXhlZFR5cGUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoZXhwZWN0ZWRUeXBlIGluc3RhbmNlb2YgTnVsbGFibGVUeXBlKSB7XG5cdFx0XHRpZiAoYWN0dWFsVHlwZSA9PT0gVHlwZXMuTlVMTCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoZXhwZWN0ZWRUeXBlLmlubmVyLmFjY2VwdHMoYWN0dWFsVHlwZSkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChleHBlY3RlZFR5cGUuYWNjZXB0cyhhY3R1YWxUeXBlKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMudHlwZUVycm9yKGBUeXBlIG1pc21hdGNoOiAke2V4cGVjdGVkVHlwZX0gPD4gJHthY3R1YWxUeXBlfWAsIG5vZGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0JvZHkoY2hpbGRyZW46IEFTVE5vZGVbXSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGxldCByZXR1cm5UeXBlOiBUeXBlID0gVHlwZXMuTUlYRUQ7XG5cblx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG5cdFx0XHRjb25zdCBzdGF0ZW1lbnRSZXN1bHQgPSB0aGlzLmNoZWNrU3RhdGVtZW50KGNoaWxkLCBzY29wZSk7XG5cdFx0XHRpZiAoc3RhdGVtZW50UmVzdWx0LmRpZFJldHVybiAmJiBzdGF0ZW1lbnRSZXN1bHQucmV0dXJuVHlwZSkge1xuXHRcdFx0XHRyZXR1cm5UeXBlID0gc3RhdGVtZW50UmVzdWx0LnJldHVyblR5cGU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJldHVyblR5cGU7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrUmV0dXJuVHlwZShleHBlY3RlZFR5cGU6IFR5cGUsIGFjdHVhbFR5cGU6IFR5cGUsIG5vZGU6IEFTVE1ldGhvZE5vZGUpOiB2b2lkIHtcblx0XHQvLyB2b2lkLU1ldGhvZGVcblx0XHRpZiAoZXhwZWN0ZWRUeXBlID09PSBUeXBlcy5WT0lEKSB7XG5cdFx0XHRpZiAoYWN0dWFsVHlwZSAhPT0gVHlwZXMuTUlYRUQgJiYgYWN0dWFsVHlwZSAhPT0gVHlwZXMuVk9JRCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IHJldHVybiAke2FjdHVhbFR5cGV9IGZyb20gdm9pZCBtZXRob2RgLCBub2RlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBrZWluIHJldHVybiB2b3JoYW5kZW5cblx0XHRpZiAoYWN0dWFsVHlwZSA9PT0gVHlwZXMuTUlYRUQpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBNaXNzaW5nIHJldHVybiBzdGF0ZW1lbnQgKGV4cGVjdGVkICR7ZXhwZWN0ZWRUeXBlfSlgLCBub2RlKTtcblx0XHR9XG5cblx0XHQvLyB0eXAtaW5rb21wYXRpYmVsXG5cdFx0aWYgKCFleHBlY3RlZFR5cGUuYWNjZXB0cyhhY3R1YWxUeXBlKSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFJldHVybiB0eXBlIG1pc21hdGNoOiBleHBlY3RlZCAke2V4cGVjdGVkVHlwZX0sIGdvdCAke2FjdHVhbFR5cGV9YCwgbm9kZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1ZEb21Ob2RlKG5vZGU6IEFTVFZEb21Ob2RlKTogVHlwZSB7XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sID0gdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChub2RlLnRhZyk7XG5cblx0XHRcdGNvbnN0IG1ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sID0gdGhpcy5yZXNvbHZlSW5zdGFuY2VNZXRob2RlKGNsYXNzU3ltYm9sLCAncmVuZGVyJyk7XG5cblx0XHRcdGlmICghbWV0aG9kU3ltYm9sKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDb21wb25lbnQgJyR7bm9kZS50YWd9JyBoYXMgbm8gcmVuZGVyKCkgbWV0aG9kYCwgbm9kZSk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuY2hlY2tBc3NpZ25hYmxlKG1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlLCBUeXBlcy5WTk9ERSwgbm9kZSk7XG5cblx0XHRcdHJldHVybiBUeXBlcy5WTk9ERTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFR5cGVzLlZOT0RFO1xuXHR9XG5cblx0cHJpdmF0ZSByZXNvbHZlSW5zdGFuY2VNZXRob2RlKGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCwgbWV0aG9kTmFtZTogc3RyaW5nKTogTWV0aG9kU3ltYm9sIHtcblx0XHQvKiogQHR5cGUge01ldGhvZFN5bWJvbHxudWxsfSAqL1xuXHRcdGNvbnN0IG1ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sIHwgbnVsbCA9IHRoaXMucmVzb2x2ZUluSGllcmFyY2h5KFxuXHRcdFx0Y2xhc3NTeW1ib2wsXG5cdFx0XHRjbGFzc1N5bWJvbCA9PiBjbGFzc1N5bWJvbC5pbnN0YW5jZU1ldGhvZFN5bWJvbHMuZ2V0KG1ldGhvZE5hbWUpIHx8IG51bGxcblx0XHQpO1xuXG5cdFx0aWYgKCFtZXRob2RTeW1ib2wpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBVbmtub3duIG1ldGhvZCAke2NsYXNzU3ltYm9sLm5hbWV9LiR7bWV0aG9kTmFtZX1gLCBjbGFzc1N5bWJvbC5ub2RlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWV0aG9kU3ltYm9sO1xuXHR9XG5cblx0cHJpdmF0ZSByZXNvbHZlSW5IaWVyYXJjaHkoY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sLCByZXNvbHZlcjogKGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCkgPT4gYW55KTogYW55IHtcblx0XHRsZXQgY3VycmVudDogQ2xhc3NTeW1ib2wgfCBudWxsID0gY2xhc3NTeW1ib2w7XG5cblx0XHR3aGlsZSAoY3VycmVudCkge1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gcmVzb2x2ZXIoY3VycmVudCk7XG5cdFx0XHRpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQgJiYgcmVzdWx0ICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghY3VycmVudC5zdXBlckNsYXNzKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRjdXJyZW50ID0gdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChjdXJyZW50LnN1cGVyQ2xhc3MpO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cHJpdmF0ZSBuZXdBcnJheVR5cGVPZihlbGVtZW50VHlwZTogVHlwZSk6IENsYXNzUmVmVHlwZSB7XG5cdFx0Y29uc3QgY2xhc3NOYW1lOiBzdHJpbmcgfCBudWxsID0gUHJpbWl0aXZlQ2xhc3NUeXBlcy5nZXRDbGFzc1JlZk5hbWUoUHJpbWl0aXZlQ2xhc3NUeXBlcy5BUlJBWSk7XG5cblx0XHRpZiAoY2xhc3NOYW1lID09PSBudWxsKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcignSW50ZXJuYWwgZXJyb3I6IENhbm5vdCBmaW5kIGNsYXNzIG5hbWUgZm9yIGFycmF5IHR5cGUuJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBDbGFzc1JlZlR5cGUodGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChjbGFzc05hbWUpLCBbZWxlbWVudFR5cGVdKTtcblx0fVxuXG5cdHByaXZhdGUgd3JhcFR5cGUodHlwZTogQVNUVHlwZU5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRyZXR1cm4gd3JhcFR5cGUodHlwZSwgdGhpcy5vYmplY3RSZWdpc3RyeSwgc2NvcGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJhbWV0ZXJOb2RlVG9TeW1ib2wocGFyYW1ldGVyTm9kZTogQVNUUGFyYW1ldGVyTm9kZSwgc2NvcGU6IFR5cGVTY29wZSA9IG5ldyBUeXBlU2NvcGUoKSk6IFBhcmFtZXRlclN5bWJvbCB7XG5cdFx0Y29uc3QgcGFyYW1ldGVyVHlwZSA9IHBhcmFtZXRlck5vZGUudHlwZUFubm90YXRpb25cblx0XHRcdD8gdGhpcy53cmFwVHlwZShwYXJhbWV0ZXJOb2RlLnR5cGVBbm5vdGF0aW9uLCBzY29wZSlcblx0XHRcdDogVHlwZXMuTUlYRUQ7XG5cblx0XHRsZXQgZGVmYXVsdFR5cGUgPSBudWxsO1xuXHRcdGlmIChwYXJhbWV0ZXJOb2RlLmRlZmF1bHRWYWx1ZSkge1xuXHRcdFx0ZGVmYXVsdFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihwYXJhbWV0ZXJOb2RlLmRlZmF1bHRWYWx1ZSwgbmV3IFR5cGVTY29wZSgpKTtcblxuXHRcdFx0aWYgKGRlZmF1bHRUeXBlXG5cdFx0XHRcdCYmICFwYXJhbWV0ZXJUeXBlLmVxdWFscyhUeXBlcy5NSVhFRClcblx0XHRcdFx0JiYgIXBhcmFtZXRlclR5cGUuZXF1YWxzKGRlZmF1bHRUeXBlKSkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihcblx0XHRcdFx0XHRgRGVmYXVsdCB2YWx1ZSBmb3IgcGFyYW1ldGVyICcke3BhcmFtZXRlck5vZGUubmFtZX0nIGRvZXMgbm90IG1hdGNoIHR5cGUuYCxcblx0XHRcdFx0XHRwYXJhbWV0ZXJOb2RlXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBQYXJhbWV0ZXJTeW1ib2woXG5cdFx0XHRwYXJhbWV0ZXJOb2RlLm5hbWUsXG5cdFx0XHRwYXJhbWV0ZXJUeXBlLFxuXHRcdFx0ZGVmYXVsdFR5cGUsXG5cdFx0XHRwYXJhbWV0ZXJOb2RlXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgcmVnaXN0ZXJDbGFzc1N5bWJvbChjbGFzc05vZGU6IEFTVENsYXNzTm9kZSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmhhc1N5bWJvbChjbGFzc05vZGUubmFtZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBjbGFzc1Njb3BlID0gbmV3IFR5cGVTY29wZSgpO1xuXHRcdGNvbnN0IGNsYXNzU3ltYm9sID0gbmV3IENsYXNzU3ltYm9sKGNsYXNzTm9kZSk7XG5cblx0XHR0cnkge1xuXHRcdFx0aWYgKGNsYXNzU3ltYm9sLnN1cGVyQ2xhc3MpIHtcblx0XHRcdFx0Y2xhc3NTeW1ib2wuc3VwZXJDbGFzc1N5bWJvbCA9IHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2woY2xhc3NTeW1ib2wuc3VwZXJDbGFzcyk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdH1cblxuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuYWRkQ2xhc3NTeW1ib2woY2xhc3NTeW1ib2wpO1xuXG5cdFx0Y2xhc3NOb2RlLnR5cGVQYXJhbWV0ZXJzLmZvckVhY2gobmFtZSA9PiB7XG5cdFx0XHRjbGFzc1N5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5wdXNoKG5ldyBUeXBlUGFyYW1ldGVyU3ltYm9sKG5hbWUpKTtcblx0XHRcdGNsYXNzU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcobmFtZSwgbmV3IFR5cGVWYXJpYWJsZShuYW1lKSk7XG5cdFx0fSk7XG5cblx0XHRmb3IgKGNvbnN0IHR5cGVOb2RlIG9mIGNsYXNzTm9kZS5pbXBsZW1lbnRzSW50ZXJmYWNlcykge1xuXHRcdFx0Y29uc3QgaW50ZXJmYWNlVHlwZTogVHlwZSA9IHRoaXMud3JhcFR5cGUodHlwZU5vZGUsIGNsYXNzU2NvcGUpO1xuXHRcdFx0aWYgKGludGVyZmFjZVR5cGUgaW5zdGFuY2VvZiBJbnRlcmZhY2VSZWZUeXBlKSB7XG5cdFx0XHRcdGNsYXNzU3ltYm9sLmltcGxlbWVudHNJbnRlcmZhY2VzLnB1c2goaW50ZXJmYWNlVHlwZSk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYEV4cGVjdGVkIGludGVyZmFjZSB0eXBlLCBnb3QgJHtpbnRlcmZhY2VUeXBlfWAsIHR5cGVOb2RlKTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IG1lbWJlck5vZGUgb2YgY2xhc3NOb2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobWVtYmVyTm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5GSUVMRCAmJiBtZW1iZXJOb2RlIGluc3RhbmNlb2YgQVNURmllbGROb2RlKSB7XG5cdFx0XHRcdGNvbnN0IHRhcmdldDogTWFwPHN0cmluZywgRmllbGRTeW1ib2w+ID0gbWVtYmVyTm9kZS5tb2RpZmllcnMuc3RhdGljXG5cdFx0XHRcdFx0PyBjbGFzc1N5bWJvbC5zdGF0aWNGaWVsZFN5bWJvbHNcblx0XHRcdFx0XHQ6IGNsYXNzU3ltYm9sLmluc3RhbmNlRmllbGRTeW1ib2xzO1xuXG5cdFx0XHRcdGNvbnN0IGZpZWxkU3ltYm9sID0gbmV3IEZpZWxkU3ltYm9sKFxuXHRcdFx0XHRcdG1lbWJlck5vZGUsXG5cdFx0XHRcdFx0bWVtYmVyTm9kZS5maWVsZFR5cGVcblx0XHRcdFx0XHRcdD8gdGhpcy53cmFwVHlwZShtZW1iZXJOb2RlLmZpZWxkVHlwZSwgY2xhc3NTY29wZSlcblx0XHRcdFx0XHRcdDogVHlwZXMuTUlYRURcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRmaWVsZFN5bWJvbC5vd25lciA9IGNsYXNzU3ltYm9sO1xuXG5cdFx0XHRcdHRhcmdldC5zZXQoZmllbGRTeW1ib2wubmFtZSwgZmllbGRTeW1ib2wpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoKG1lbWJlck5vZGUudHlwZSA9PT0gQVNUTm9kZVR5cGUuTUVUSE9EIHx8IG1lbWJlck5vZGUudHlwZSA9PT0gQVNUTm9kZVR5cGUuQ09OU1RSVUNUT1IpXG5cdFx0XHRcdCYmIG1lbWJlck5vZGUgaW5zdGFuY2VvZiBBU1RNZXRob2ROb2RlKSB7XG5cblx0XHRcdFx0Y29uc3QgbWV0aG9kU2NvcGUgPSBuZXcgVHlwZVNjb3BlKGNsYXNzU2NvcGUpO1xuXHRcdFx0XHRjb25zdCBtZXRob2RTeW1ib2wgPSBuZXcgTWV0aG9kU3ltYm9sKG1lbWJlck5vZGUpO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC5vd25lciA9IGNsYXNzU3ltYm9sO1xuXG5cdFx0XHRcdG1lbWJlck5vZGUudHlwZVBhcmFtZXRlcnMuZm9yRWFjaChuYW1lID0+IHtcblx0XHRcdFx0XHRtZXRob2RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMucHVzaChuZXcgVHlwZVBhcmFtZXRlclN5bWJvbChuYW1lKSk7XG5cdFx0XHRcdFx0bWV0aG9kU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcobmFtZSwgbmV3IFR5cGVWYXJpYWJsZShuYW1lKSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzID0gbWVtYmVyTm9kZVxuXHRcdFx0XHRcdC5wYXJhbWV0ZXJzXG5cdFx0XHRcdFx0Lm1hcChwYXJhbWV0ZXJOb2RlID0+IHRoaXMucGFyYW1ldGVyTm9kZVRvU3ltYm9sKHBhcmFtZXRlck5vZGUsIG1ldGhvZFNjb3BlKSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnJldHVyblR5cGUgPSBtZW1iZXJOb2RlLnJldHVyblR5cGVcblx0XHRcdFx0XHQ/IHRoaXMud3JhcFR5cGUobWVtYmVyTm9kZS5yZXR1cm5UeXBlLCBtZXRob2RTY29wZSlcblx0XHRcdFx0XHQ6IFR5cGVzLlZPSUQ7XG5cblx0XHRcdFx0aWYgKG1lbWJlck5vZGUudHlwZSA9PT0gQVNUTm9kZVR5cGUuQ09OU1RSVUNUT1IpIHtcblx0XHRcdFx0XHRjbGFzc1N5bWJvbC5jb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbCA9IG1ldGhvZFN5bWJvbDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zdCB0YXJnZXQgPSBtZXRob2RTeW1ib2wuaXNTdGF0aWNcblx0XHRcdFx0XHRcdD8gY2xhc3NTeW1ib2wuc3RhdGljTWV0aG9kU3ltYm9sc1xuXHRcdFx0XHRcdFx0OiBjbGFzc1N5bWJvbC5pbnN0YW5jZU1ldGhvZFN5bWJvbHM7XG5cblx0XHRcdFx0XHR0YXJnZXQuc2V0KG1lbWJlck5vZGUubmFtZSwgbWV0aG9kU3ltYm9sKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVnaXN0ZXJJbnRlcmZhY2VTeW1ib2woaW50ZXJmYWNlTm9kZTogQVNUSW50ZXJmYWNlTm9kZSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmhhc1N5bWJvbChpbnRlcmZhY2VOb2RlLm5hbWUpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW50ZXJmYWNlU2NvcGUgPSBuZXcgVHlwZVNjb3BlKCk7XG5cdFx0Y29uc3QgaW50ZXJmYWNlU3ltYm9sID0gbmV3IEludGVyZmFjZVN5bWJvbChpbnRlcmZhY2VOb2RlKTtcblxuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuYWRkSW50ZXJmYWNlU3ltYm9sKGludGVyZmFjZVN5bWJvbCk7XG5cblx0XHRpbnRlcmZhY2VOb2RlLnR5cGVQYXJhbWV0ZXJzLmZvckVhY2gobmFtZSA9PiB7XG5cdFx0XHRpbnRlcmZhY2VTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMucHVzaChuZXcgVHlwZVBhcmFtZXRlclN5bWJvbChuYW1lKSk7XG5cdFx0XHRpbnRlcmZhY2VTY29wZS5kZWZpbmVUeXBlQmluZGluZyhuYW1lLCBuZXcgVHlwZVZhcmlhYmxlKG5hbWUpKTtcblx0XHR9KTtcblxuXHRcdGZvciAoY29uc3QgaW50ZXJmYWNlTmFtZSBvZiBpbnRlcmZhY2VOb2RlLmV4dGVuZHNJbnRlcmZhY2VzKSB7XG5cdFx0XHRjb25zdCBpbnRlcmZhY2VTeW1ib2w6IEludGVyZmFjZVN5bWJvbCA9IHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0SW50ZXJhY2VTeW1ib2woaW50ZXJmYWNlTmFtZSk7XG5cblx0XHRcdGludGVyZmFjZVN5bWJvbC5leHRlbmRzSW50ZXJmYWNlcy5wdXNoKGludGVyZmFjZVN5bWJvbCk7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBtZW1iZXJOb2RlIG9mIGludGVyZmFjZU5vZGUuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChtZW1iZXJOb2RlLnR5cGUgPT09IEFTVE5vZGVUeXBlLkZJRUxEICYmIG1lbWJlck5vZGUgaW5zdGFuY2VvZiBBU1RGaWVsZE5vZGUpIHtcblx0XHRcdFx0Y29uc3QgZmllbGRTeW1ib2wgPSBuZXcgRmllbGRTeW1ib2woXG5cdFx0XHRcdFx0bWVtYmVyTm9kZSxcblx0XHRcdFx0XHRtZW1iZXJOb2RlLmZpZWxkVHlwZVxuXHRcdFx0XHRcdFx0PyB0aGlzLndyYXBUeXBlKG1lbWJlck5vZGUuZmllbGRUeXBlLCBpbnRlcmZhY2VTY29wZSlcblx0XHRcdFx0XHRcdDogVHlwZXMuTUlYRURcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRmaWVsZFN5bWJvbC5vd25lciA9IGludGVyZmFjZVN5bWJvbDtcblxuXHRcdFx0XHRpbnRlcmZhY2VTeW1ib2wuc3RhdGljRmllbGRTeW1ib2xzLnNldChmaWVsZFN5bWJvbC5uYW1lLCBmaWVsZFN5bWJvbCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICgobWVtYmVyTm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5NRVRIT0QpICYmIG1lbWJlck5vZGUgaW5zdGFuY2VvZiBBU1RNZXRob2ROb2RlKSB7XG5cblx0XHRcdFx0Y29uc3QgbWV0aG9kU2NvcGUgPSBuZXcgVHlwZVNjb3BlKGludGVyZmFjZVNjb3BlKTtcblx0XHRcdFx0Y29uc3QgbWV0aG9kU3ltYm9sID0gbmV3IE1ldGhvZFN5bWJvbChtZW1iZXJOb2RlKTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wub3duZXIgPSBpbnRlcmZhY2VTeW1ib2w7XG5cblx0XHRcdFx0bWVtYmVyTm9kZS50eXBlUGFyYW1ldGVycy5mb3JFYWNoKG5hbWUgPT4ge1xuXHRcdFx0XHRcdG1ldGhvZFN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5wdXNoKG5ldyBUeXBlUGFyYW1ldGVyU3ltYm9sKG5hbWUpKTtcblx0XHRcdFx0XHRtZXRob2RTY29wZS5kZWZpbmVUeXBlQmluZGluZyhuYW1lLCBuZXcgVHlwZVZhcmlhYmxlKG5hbWUpKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMgPSBtZW1iZXJOb2RlXG5cdFx0XHRcdFx0LnBhcmFtZXRlcnNcblx0XHRcdFx0XHQubWFwKHBhcmFtZXRlck5vZGUgPT4gdGhpcy5wYXJhbWV0ZXJOb2RlVG9TeW1ib2wocGFyYW1ldGVyTm9kZSwgbWV0aG9kU2NvcGUpKTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wucmV0dXJuVHlwZSA9IG1lbWJlck5vZGUucmV0dXJuVHlwZVxuXHRcdFx0XHRcdD8gdGhpcy53cmFwVHlwZShtZW1iZXJOb2RlLnJldHVyblR5cGUsIG1ldGhvZFNjb3BlKVxuXHRcdFx0XHRcdDogVHlwZXMuVk9JRDtcblxuXHRcdFx0XHRpbnRlcmZhY2VTeW1ib2wuaW5zdGFuY2VNZXRob2RTeW1ib2xzLnNldChtZW1iZXJOb2RlLm5hbWUsIG1ldGhvZFN5bWJvbCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSB0eXBlRXJyb3IobWVzc2FnZTogc3RyaW5nLCBub2RlOiBBU1ROb2RlIHwgbnVsbCA9IG51bGwpOiBuZXZlciB7XG5cdFx0dGhyb3dUeXBlRXJyb3IobWVzc2FnZSwgbm9kZT8uc3Bhbik7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge0FTVEltcG9ydE5vZGUsIEFTVE5vZGUsIEFTVE5vZGVUeXBlfSBmcm9tIFwiLi4vYXN0XCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5pbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4uL3BhcnNlci9wYXJzZXJcIjtcbmltcG9ydCB7RW52aXJvbm1lbnR9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQgdHlwZSB7QWJzdHJhY3RGaWxlTG9hZGVyfSBmcm9tIFwiLi4vbG9hZGVyc1wiO1xuaW1wb3J0IHt0aHJvd1J1bnRpbWVFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuXG5leHBvcnQgY2xhc3MgRGVwZW5kZW5jeSB7XG5cdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSA9IG5ldyBPYmplY3RSZWdpc3RyeSgpO1xuXHRuYW1lczogc3RyaW5nW107XG5cdHVybDogc3RyaW5nO1xuXHRhc3Q6IEFTVE5vZGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lczogc3RyaW5nW10sIHVybDogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYW1lcyA9IG5hbWVzO1xuXHRcdHRoaXMudXJsID0gdXJsO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBEZXBlbmRlbmN5TG9hZGVyIHtcblx0ZW52aXJvbm1lbnQ6IEVudmlyb25tZW50O1xuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cdGZpbGVMb2FkZXI6IEFic3RyYWN0RmlsZUxvYWRlcjtcblxuXHRjb25zdHJ1Y3RvcihlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZmlsZUxvYWRlcjogQWJzdHJhY3RGaWxlTG9hZGVyKSB7XG5cdFx0dGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkgPSBvYmplY3RSZWdpc3RyeTtcblx0XHR0aGlzLmZpbGVMb2FkZXIgPSBmaWxlTG9hZGVyO1xuXHR9XG5cblx0YXN5bmMgcGFyc2VEZXBlbmRlbmN5KGRlcGVuZGVuY3k6IERlcGVuZGVuY3kpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gYXdhaXQgdGhpcy5wYXJzZUZpbGUoZGVwZW5kZW5jeS51cmwpXG5cdFx0ICAgICAgICAgICAgICAgICAudGhlbihhc3QgPT4gZGVwZW5kZW5jeS5hc3QgPSBhc3QpXG5cdFx0ICAgICAgICAgICAgICAgICAudGhlbihhc3QgPT4gZGVwZW5kZW5jeS5vYmplY3RSZWdpc3RyeS5jb2xsZWN0QWxsKGFzdCkpO1xuXHR9XG5cblx0YXN5bmMgY29sbGVjdERlcGVuZGVuY2llcyhkZXBlbmRlbmN5OiBEZXBlbmRlbmN5LCBkZXBlbmRlbmNpZXM6IE1hcDxzdHJpbmcsIERlcGVuZGVuY3k+KTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIGF3YWl0IHRoaXMuY29sbGVjdFByb2dyYW1EZXBlbmRlbmNpZXMoZGVwZW5kZW5jeS5hc3QpXG5cdFx0ICAgICAgICAgICAgICAgICAudGhlbihjbGFzc0RlcGVuZGVuY2llcyA9PiB7XG5cdFx0XHQgICAgICAgICAgICAgICAgIGNsYXNzRGVwZW5kZW5jaWVzLmZvckVhY2goY2xhc3NEZXBlbmRlbmN5ID0+IHtcblx0XHRcdFx0ICAgICAgICAgICAgICAgICBpZiAoZGVwZW5kZW5jaWVzLmhhcyhjbGFzc0RlcGVuZGVuY3kudXJsKSkge1xuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXHRcdFx0XHQgICAgICAgICAgICAgICAgIH1cblx0XHRcdFx0ICAgICAgICAgICAgICAgICBkZXBlbmRlbmNpZXMuc2V0KGNsYXNzRGVwZW5kZW5jeS51cmwsIGNsYXNzRGVwZW5kZW5jeSk7XG5cdFx0XHQgICAgICAgICAgICAgICAgIH0pO1xuXHRcdCAgICAgICAgICAgICAgICAgfSk7XG5cdH1cblxuXHRhc3luYyBjb2xsZWN0UHJvZ3JhbURlcGVuZGVuY2llcyhhc3Q6IEFTVE5vZGUgfCBudWxsKTogUHJvbWlzZTxNYXA8c3RyaW5nLCBEZXBlbmRlbmN5Pj4ge1xuXHRcdGlmIChhc3QgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBuZXcgTWFwKCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZGVmYXVsdERlcGVuZGVuY2llcyA9IHRoaXMuZGVmYXVsdERlcGVuZGVuY2llcygpO1xuXHRcdGZvciAoY29uc3QgZGVwZW5kZW5jeSBvZiBkZWZhdWx0RGVwZW5kZW5jaWVzLnZhbHVlcygpKSB7XG5cdFx0XHRhd2FpdCB0aGlzLnBhcnNlRGVwZW5kZW5jeShkZXBlbmRlbmN5KTtcblx0XHR9XG5cblx0XHRjb25zdCBkZXBlbmRlbmNpZXMgPSB0aGlzLmNvbGxlY3RDbGFzc0RlcGVuZGVuY2llcyhhc3QpO1xuXHRcdGZvciAoY29uc3QgZGVwZW5kZW5jeSBvZiBkZXBlbmRlbmNpZXMudmFsdWVzKCkpIHtcblx0XHRcdGF3YWl0IHRoaXMucGFyc2VEZXBlbmRlbmN5KGRlcGVuZGVuY3kpO1xuXHRcdFx0YXdhaXQgdGhpcy5jb2xsZWN0RGVwZW5kZW5jaWVzKGRlcGVuZGVuY3ksIGRlcGVuZGVuY2llcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBNYXAoWy4uLmRlZmF1bHREZXBlbmRlbmNpZXMsIC4uLmRlcGVuZGVuY2llc10pO1xuXHR9XG5cblx0ZGVmYXVsdERlcGVuZGVuY2llcygpOiBNYXA8c3RyaW5nLCBEZXBlbmRlbmN5PiB7XG5cdFx0Y29uc3QgZGVwZW5kZW5jaWVzID0gW1xuXHRcdFx0bmV3IERlcGVuZGVuY3koWydJdGVyYXRvcicsICdJdGVyYWJsZSddLCAnL2xpYnJhcnkvY29udHJhY3RzLmx5cmEnKVxuXHRcdF07XG5cblx0XHRjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG5cdFx0Zm9yIChjb25zdCBkZXBlbmRlbmN5IG9mIGRlcGVuZGVuY2llcykge1xuXHRcdFx0bWFwLnNldChkZXBlbmRlbmN5LnVybCwgZGVwZW5kZW5jeSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1hcDtcblx0fVxuXG5cdGNvbGxlY3RDbGFzc0RlcGVuZGVuY2llcyhhc3Q6IEFTVE5vZGUpOiBNYXA8c3RyaW5nLCBEZXBlbmRlbmN5PiB7XG5cdFx0Y29uc3QgY2xhc3NEZXBlbmRlbmNpZXMgPSBuZXcgTWFwKCk7XG5cblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgYXN0LmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5JTVBPUlQpIHtcblx0XHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RJbXBvcnROb2RlKSB7XG5cdFx0XHRcdFx0aWYgKG5vZGUuZnJvbSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChjbGFzc0RlcGVuZGVuY2llcy5oYXMobm9kZS5mcm9tKSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNsYXNzRGVwZW5kZW5jaWVzLnNldChub2RlLmZyb20sIG5ldyBEZXBlbmRlbmN5KG5vZGUubmFtZXMsIG5vZGUuZnJvbSkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGltcG9ydCBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlPy5zcGFuKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc0RlcGVuZGVuY2llcztcblx0fVxuXG5cdHBhcnNlRmlsZSh1cmw6IHN0cmluZyk6IFByb21pc2U8QVNUTm9kZT4ge1xuXHRcdHJldHVybiB0aGlzLmZpbGVMb2FkZXJcblx0XHQgICAgICAgICAgIC5sb2FkKHVybClcblx0XHQgICAgICAgICAgIC50aGVuKGNvZGUgPT4gdGhpcy5wYXJzZXJTb3VyY2UobmV3IFNvdXJjZShjb2RlLCB1cmwpKSk7XG5cdH1cblxuXHRwYXJzZXJTb3VyY2Uoc291cmNlOiBTb3VyY2UpOiBBU1ROb2RlIHtcblx0XHRyZXR1cm4gbmV3IFBhcnNlcihzb3VyY2UpLnBhcnNlKCk7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtEZXBlbmRlbmN5TG9hZGVyfSBmcm9tIFwiLi9kZXBlbmRlbmNpZXNcIjtcbmltcG9ydCB7QVNUSW1wb3J0Tm9kZSwgQVNUTm9kZX0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHtOYXRpdmVDbGFzc2VzfSBmcm9tIFwiLi4vLi4vbGlicmFyeS9uYXRpdmVfY2xhc3Nlc1wiO1xuaW1wb3J0IHtDbGFzc0RlZmluaXRpb24sIEVudmlyb25tZW50LCBJbnRlcmZhY2VEZWZpbml0aW9ufSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5pbXBvcnQgdHlwZSB7QWJzdHJhY3RGaWxlTG9hZGVyfSBmcm9tIFwiLi4vbG9hZGVyc1wiO1xuaW1wb3J0IHR5cGUge05hdGl2ZUNsYXNzfSBmcm9tIFwiLi4vLi4vbGlicmFyeS9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7dGhyb3dEZXBlbmRlbmN5RXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcblxuY29uc3QgbmF0aXZlQ2xhc3NlcyA9IG5ldyBOYXRpdmVDbGFzc2VzKCk7XG5cbmV4cG9ydCBjbGFzcyBMaW5rZXIge1xuXHRlbnZpcm9ubWVudDogRW52aXJvbm1lbnQ7XG5cdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeTtcblx0ZGVwZW5kZW5jeUxvYWRlcjogRGVwZW5kZW5jeUxvYWRlcjtcblxuXHRjb25zdHJ1Y3RvcihlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZmlsZUxvYWRlcjogQWJzdHJhY3RGaWxlTG9hZGVyKSB7XG5cdFx0dGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkgPSBvYmplY3RSZWdpc3RyeTtcblx0XHR0aGlzLmRlcGVuZGVuY3lMb2FkZXIgPSBuZXcgRGVwZW5kZW5jeUxvYWRlcihlbnZpcm9ubWVudCwgb2JqZWN0UmVnaXN0cnksIGZpbGVMb2FkZXIpO1xuXHR9XG5cblx0bGlua1NvdXJjZXMoYXN0OiBBU1ROb2RlKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHRoaXMuZGVwZW5kZW5jeUxvYWRlclxuXHRcdCAgICAgICAgICAgLmNvbGxlY3RQcm9ncmFtRGVwZW5kZW5jaWVzKGFzdClcblx0XHQgICAgICAgICAgIC50aGVuKGRlcGVuZGVuY2llcyA9PiB7XG5cdFx0XHQgICAgICAgICAgIGZvciAoY29uc3QgZGVwZW5kZW5jeSBvZiBkZXBlbmRlbmNpZXMudmFsdWVzKCkpIHtcblx0XHRcdFx0ICAgICAgICAgICBjb25zdCBvYmplY3REZWZpbml0aW9ucyA9IGRlcGVuZGVuY3kub2JqZWN0UmVnaXN0cnlcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmV0Y2hBbGxPYmplY3REZWZpbml0aW9ucygpXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlcygpO1xuXHRcdFx0XHQgICAgICAgICAgIGZvciAobGV0IG9iamVjdERlZiBvZiBvYmplY3REZWZpbml0aW9ucykge1xuXHRcdFx0XHRcdCAgICAgICAgICAgaWYgKG9iamVjdERlZiBpbnN0YW5jZW9mIEludGVyZmFjZURlZmluaXRpb24pIHtcblx0XHRcdFx0XHRcdCAgICAgICAgICAgdGhpcy5vYmplY3RSZWdpc3RyeS5pbnRlcmZhY2VzLnNldChvYmplY3REZWYubmFtZSwgb2JqZWN0RGVmKTtcblx0XHRcdFx0XHQgICAgICAgICAgIH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgIHRoaXMub2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5zZXQob2JqZWN0RGVmLm5hbWUsIG9iamVjdERlZik7XG5cdFx0XHRcdFx0ICAgICAgICAgICB9XG5cdFx0XHRcdFx0ICAgICAgICAgICB0aGlzLmVudmlyb25tZW50LmRlZmluZShvYmplY3REZWYubmFtZSwgb2JqZWN0RGVmKTtcblx0XHRcdFx0ICAgICAgICAgICB9XG5cdFx0XHQgICAgICAgICAgIH1cblx0XHQgICAgICAgICAgIH0pXG5cdFx0ICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLmxvYWROYXRpdmVDbGFzc2VzKGFzdCkpXG5cdH1cblxuXHRsb2FkTmF0aXZlQ2xhc3Nlcyhhc3Q6IEFTVE5vZGUpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgYXN0LmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEltcG9ydE5vZGUpIHtcblx0XHRcdFx0aWYgKG5vZGUuZnJvbSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdGNvbnN0IGNsYXNzTmFtZSA9IG5vZGUubmFtZXNbMF07XG5cdFx0XHRcdFx0aWYgKCFjbGFzc05hbWUpIHtcblx0XHRcdFx0XHRcdHRocm93RGVwZW5kZW5jeUVycm9yKGBJbnZhbGlkIGltcG9ydCBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlPy5zcGFuKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc3QgbmF0aXZlQ2xhc3M6IE5hdGl2ZUNsYXNzIHwgbnVsbCA9IG5hdGl2ZUNsYXNzZXMucmVnaXN0cnkuZ2V0KGNsYXNzTmFtZSkgfHwgbnVsbDtcblx0XHRcdFx0XHRpZiAoIW5hdGl2ZUNsYXNzKSB7XG5cdFx0XHRcdFx0XHR0aHJvd0RlcGVuZGVuY3lFcnJvcihgVW5rbm93biBuYXRpdmUgY2xhc3MgJHtjbGFzc05hbWV9YCwgbm9kZT8uc3Bhbik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnN0IGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24gPSBuYXRpdmVDbGFzcy5nZXRDbGFzc0RlZmluaXRpb24oKTtcblx0XHRcdFx0XHRpZiAodGhpcy5vYmplY3RSZWdpc3RyeS5jbGFzc2VzLmhhcyhjbGFzc05hbWUpKSB7XG5cdFx0XHRcdFx0XHR0aHJvd0RlcGVuZGVuY3lFcnJvcihgQ291bGQgbm90IHJlc29sdmUgY2xhc3MgJHtjbGFzc05hbWV9LmAsIG5vZGU/LnNwYW4pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuc2V0KGNsYXNzTmFtZSwgY2xhc3NEZWYpO1xuXHRcdFx0XHRcdHRoaXMuZW52aXJvbm1lbnQuZGVmaW5lKGNsYXNzTmFtZSwgY2xhc3NEZWYpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLAogICAgImltcG9ydCB7QVNUQW5ub3RhdGlvbk5vZGUsIEFTVENsYXNzTm9kZSwgQVNUTWV0aG9kTm9kZSwgQVNUTm9kZX0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHtjYWxsSW5zdGFuY2VNZXRob2QsIGV2YWxBbm5vdGF0aW9uUHJvcGVydGllc30gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX3J1bnRpbWVcIjtcbmltcG9ydCB7Q2xhc3NEZWZpbml0aW9uLCB0eXBlIEVudmlyb25tZW50LCBJbnN0YW5jZX0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB0eXBlIHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5pbXBvcnQgdHlwZSB7RXZlbnRQaXBlbGluZX0gZnJvbSBcIi4uL2V2ZW50L3BpcGVsaW5lXCI7XG5cbmV4cG9ydCBjbGFzcyBUZXN0U3VpdGVzIHtcblx0cHJpdmF0ZSByZWFkb25seSBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQ7XG5cdHByaXZhdGUgcmVhZG9ubHkgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5O1xuXHRwcml2YXRlIHJlYWRvbmx5IGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmU7XG5cblx0Y29uc3RydWN0b3IoZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpIHtcblx0XHR0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG5cdFx0dGhpcy5vYmplY3RSZWdpc3RyeSA9IG9iamVjdFJlZ2lzdHJ5O1xuXHRcdHRoaXMuZXZlbnRQaXBlbGluZSA9IGV2ZW50UGlwZWxpbmU7XG5cdH1cblxuXHRydW4oYXN0OiBBU1ROb2RlKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIGFzdC5jaGlsZHJlbikge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RDbGFzc05vZGUpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coYPCfp6ogUnVubmluZyBUZXN0IENhc2VzIGZvciAke25vZGUubmFtZX0gLi4uYCk7XG5cdFx0XHRcdHRoaXMucnVuVGVzdENhc2VzKG5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcnVuVGVzdENhc2VzKGNsYXNzTm9kZTogQVNUQ2xhc3NOb2RlKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBtZW1iZXIgb2YgY2xhc3NOb2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobWVtYmVyIGluc3RhbmNlb2YgQVNUTWV0aG9kTm9kZSkge1xuXHRcdFx0XHRjb25zdCBhbm5vdGF0aW9uOiBBU1RBbm5vdGF0aW9uTm9kZSB8IHVuZGVmaW5lZCA9IG1lbWJlci5hbm5vdGF0aW9uc1xuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZmluZChhbm5vdGF0aW9uID0+IGFubm90YXRpb24ubmFtZSA9PT0gJ3Rlc3QnKTtcblx0XHRcdFx0aWYgKCFhbm5vdGF0aW9uKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5ydW5UZXN0Q2FzZShjbGFzc05vZGUsIG1lbWJlciwgYW5ub3RhdGlvbik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBydW5UZXN0Q2FzZShjbGFzc05vZGU6IEFTVENsYXNzTm9kZSwgbWV0aG9kTm9kZTogQVNUTWV0aG9kTm9kZSwgYW5ub3RhdGlvbjogQVNUQW5ub3RhdGlvbk5vZGUpOiB2b2lkIHtcblx0XHRjb25zdCBpbnN0YW5jZTogSW5zdGFuY2UgPSBDbGFzc0RlZmluaXRpb24uZnJvbUFTVChjbGFzc05vZGUpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnN0cnVjdE5ld0luc3RhbmNlV2l0aG91dEFyZ3VtZW50cyhcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0UmVnaXN0cnksXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVudmlyb25tZW50LFxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudFBpcGVsaW5lXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuXHRcdGNvbnN0IHByb3BlcnRpZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IGV2YWxBbm5vdGF0aW9uUHJvcGVydGllcyhhbm5vdGF0aW9uKTtcblx0XHRjb25zdCB0aXRsZTogc3RyaW5nID0gcHJvcGVydGllcy50aXRsZSA/PyBgJHtjbGFzc05vZGUubmFtZX0uJHttZXRob2ROb2RlLm5hbWV9YDtcblxuXHRcdGxldCBlcnJvck1lc3NhZ2UgPSBudWxsO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGNhbGxJbnN0YW5jZU1ldGhvZChpbnN0YW5jZSwgbWV0aG9kTm9kZSwgW10sIHRoaXMub2JqZWN0UmVnaXN0cnksIHRoaXMuZW52aXJvbm1lbnQsIHRoaXMuZXZlbnRQaXBlbGluZSk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGVycm9yTWVzc2FnZSA9IGVycm9yO1xuXHRcdH1cblxuXHRcdGlmIChlcnJvck1lc3NhZ2UpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoYCDinYwgJHt0aXRsZX0sICR7ZXJyb3JNZXNzYWdlfWApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZyhgIOKchSAke3RpdGxlfWApO1xuXHRcdH1cblx0fVxufVxuIiwKICAgICJpbXBvcnQge0FTVE5vZGV9IGZyb20gJy4uL2FzdC50cyc7XG5pbXBvcnQge0Vudmlyb25tZW50fSBmcm9tIFwiLi9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge2V2YWxOb2RlLCByZWdpc3Rlck5hdGl2ZUNsYXNzZXMsIHJlZ2lzdGVyTmF0aXZlRnVuY3Rpb25zfSBmcm9tIFwiLi9pbnRlcnByZXRlcl9ydW50aW1lXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuaW1wb3J0IHR5cGUge0V2ZW50UGlwZWxpbmV9IGZyb20gXCIuLi9ldmVudC9waXBlbGluZVwiO1xuXG5leHBvcnQgY2xhc3MgSW50ZXJwcmV0ZXIge1xuXHRlbnZpcm9ubWVudDogRW52aXJvbm1lbnQ7XG5cdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeTtcblx0ZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsXG5cdFx0b2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LFxuXHRcdGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmVcblx0KSB7XG5cdFx0dGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkgPSBvYmplY3RSZWdpc3RyeTtcblx0XHR0aGlzLmV2ZW50UGlwZWxpbmUgPSBldmVudFBpcGVsaW5lO1xuXG5cdFx0cmVnaXN0ZXJOYXRpdmVDbGFzc2VzKG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCk7XG5cdFx0cmVnaXN0ZXJOYXRpdmVGdW5jdGlvbnMoZW52aXJvbm1lbnQpO1xuXHR9XG5cblx0cnVuKGFzdDogQVNUTm9kZSkge1xuXHRcdGV2YWxOb2RlKGFzdCwgdGhpcy5vYmplY3RSZWdpc3RyeSwgdGhpcy5lbnZpcm9ubWVudCwgdGhpcy5ldmVudFBpcGVsaW5lKTtcblx0fVxufVxuIiwKICAgICJleHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RGaWxlTG9hZGVyIHtcblx0YWJzdHJhY3QgbG9hZCh1cmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPjtcbn1cblxuZXhwb3J0IGNsYXNzIEZldGNoRmlsZUxvYWRlciBleHRlbmRzIEFic3RyYWN0RmlsZUxvYWRlciB7XG5cdG92ZXJyaWRlIGxvYWQodXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybiBmZXRjaCh1cmwpXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXG5cdH1cbn1cbiIsCiAgICAiZXhwb3J0IHR5cGUgRXZlbnRIYW5kbGVyPFQgPSBhbnk+ID0gKHBheWxvYWQ6IFQpID0+IHZvaWQ7XG5cbmV4cG9ydCBjbGFzcyBFdmVudFBpcGVsaW5lIHtcblx0cHJpdmF0ZSBsaXN0ZW5lcnM6IE1hcDxzdHJpbmcsIFNldDxFdmVudEhhbmRsZXI+PiA9IG5ldyBNYXA8c3RyaW5nLCBTZXQ8RXZlbnRIYW5kbGVyPj4oKTtcblxuXHRvbjxUID0gYW55PihldmVudDogc3RyaW5nLCBoYW5kbGVyOiBFdmVudEhhbmRsZXI8VD4pOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMubGlzdGVuZXJzLmhhcyhldmVudCkpIHtcblx0XHRcdHRoaXMubGlzdGVuZXJzLnNldChldmVudCwgbmV3IFNldCgpKTtcblx0XHR9XG5cdFx0dGhpcy5saXN0ZW5lcnMuZ2V0KGV2ZW50KSEuYWRkKGhhbmRsZXIpO1xuXHR9XG5cblx0b2ZmPFQgPSBhbnk+KGV2ZW50OiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50SGFuZGxlcjxUPik6IHZvaWQge1xuXHRcdHRoaXMubGlzdGVuZXJzLmdldChldmVudClcblx0XHQgICAgPy5kZWxldGUoaGFuZGxlcik7XG5cdH1cblxuXHRlbWl0PFQgPSBhbnk+KGV2ZW50OiBzdHJpbmcsIHBheWxvYWQ6IFQpOiB2b2lkIHtcblx0XHR0aGlzLmxpc3RlbmVycy5nZXQoZXZlbnQpXG5cdFx0ICAgID8uZm9yRWFjaCgoaGFuZGxlcjogRXZlbnRIYW5kbGVyKTogdm9pZCA9PiBoYW5kbGVyKHBheWxvYWQpKTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4vcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcbmltcG9ydCB7RW52aXJvbm1lbnR9IGZyb20gXCIuL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge1R5cGVDaGVja2VyfSBmcm9tIFwiLi90eXBlcy90eXBlY2hlY2tlclwiO1xuaW1wb3J0IHtMaW5rZXJ9IGZyb20gXCIuL2xpbmtlci9saW5rZXJcIjtcbmltcG9ydCB7VGVzdFN1aXRlc30gZnJvbSBcIi4vdGVzdHMvdGVzdHN1aXRlc1wiO1xuaW1wb3J0IHtJbnRlcnByZXRlcn0gZnJvbSBcIi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJcIjtcbmltcG9ydCB7RmV0Y2hGaWxlTG9hZGVyfSBmcm9tIFwiLi9sb2FkZXJzXCI7XG5pbXBvcnQge0FTVE5vZGV9IGZyb20gXCIuL2FzdFwiO1xuaW1wb3J0IHtQYXJzZXJ9IGZyb20gXCIuL3BhcnNlci9wYXJzZXJcIjtcbmltcG9ydCB7RXZlbnRQaXBlbGluZX0gZnJvbSBcIi4vZXZlbnQvcGlwZWxpbmVcIjtcblxuZXhwb3J0IGNsYXNzIEx5cmFTY3JpcHRQcm9ncmFtIHtcblx0cHJpdmF0ZSBnbG9iYWxFbnZpcm9ubWVudDogRW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQoKTtcblx0cHJpdmF0ZSBnbG9iYWxPYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkgPSBuZXcgT2JqZWN0UmVnaXN0cnkoKTtcblx0cHJpdmF0ZSBnbG9iYWxFdmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lO1xuXG5cdHByaXZhdGUgdHlwZUNoZWNrZXI6IFR5cGVDaGVja2VyID0gbmV3IFR5cGVDaGVja2VyKHRoaXMuZ2xvYmFsT2JqZWN0UmVnaXN0cnkpO1xuXHRwcml2YXRlIGxpbmtlcjogTGlua2VyID0gbmV3IExpbmtlcih0aGlzLmdsb2JhbEVudmlyb25tZW50LCB0aGlzLmdsb2JhbE9iamVjdFJlZ2lzdHJ5LCBuZXcgRmV0Y2hGaWxlTG9hZGVyKCkpO1xuXG5cdHByaXZhdGUgaW50ZXJwcmV0ZXI6IEludGVycHJldGVyO1xuXHRwcml2YXRlIHRlc3RTdWl0ZTogVGVzdFN1aXRlcztcblxuXHRwcml2YXRlIHJlYWRvbmx5IGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBzdGFydFRpbWU6IG51bWJlciA9IDA7XG5cblx0Y29uc3RydWN0b3IoaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlLCBnbG9iYWxFdmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lID0gbmV3IEV2ZW50UGlwZWxpbmUoKSkge1xuXHRcdHRoaXMuaXNEZWJ1ZyA9IGlzRGVidWc7XG5cblx0XHR0aGlzLmludGVycHJldGVyID0gbmV3IEludGVycHJldGVyKFxuXHRcdFx0dGhpcy5nbG9iYWxFbnZpcm9ubWVudCxcblx0XHRcdHRoaXMuZ2xvYmFsT2JqZWN0UmVnaXN0cnksXG5cdFx0XHRnbG9iYWxFdmVudFBpcGVsaW5lXG5cdFx0KTtcblxuXHRcdHRoaXMudGVzdFN1aXRlID0gbmV3IFRlc3RTdWl0ZXMoXG5cdFx0XHR0aGlzLmdsb2JhbEVudmlyb25tZW50LFxuXHRcdFx0dGhpcy5nbG9iYWxPYmplY3RSZWdpc3RyeSxcblx0XHRcdGdsb2JhbEV2ZW50UGlwZWxpbmVcblx0XHQpO1xuXG5cdFx0dGhpcy5nbG9iYWxFdmVudFBpcGVsaW5lID0gZ2xvYmFsRXZlbnRQaXBlbGluZTtcblx0fVxuXG5cdGdldEdsb2JhbE9iamVjdFJlZ2lzdHJ5KCk6IE9iamVjdFJlZ2lzdHJ5IHtcblx0XHRyZXR1cm4gdGhpcy5nbG9iYWxPYmplY3RSZWdpc3RyeTtcblx0fVxuXG5cblx0Z2V0R2xvYmFsRW52aXJvbm1lbnQoKTogRW52aXJvbm1lbnQge1xuXHRcdHJldHVybiB0aGlzLmdsb2JhbEVudmlyb25tZW50O1xuXHR9XG5cblx0Z2V0R2xvYmFsRXZlbnRQaXBlbGluZSgpOiBFdmVudFBpcGVsaW5lIHtcblx0XHRyZXR1cm4gdGhpcy5nbG9iYWxFdmVudFBpcGVsaW5lO1xuXHR9XG5cblx0YXN5bmMgZXhlY3V0ZShzb3VyY2U6IFNvdXJjZSk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiB0aGlzLnJ1blBpcGVsaW5lKHNvdXJjZSlcblx0XHQgICAgICAgICAgIC50aGVuKChhc3Q6IEFTVE5vZGUpID0+IHtcblx0XHRcdCAgICAgICAgICAgdGhpcy5kZWJ1Z01lYXN1cmVTdGFydFRpbWUoKTtcblx0XHRcdCAgICAgICAgICAgdGhpcy5pbnRlcnByZXRlci5ydW4oYXN0KTtcblx0XHRcdCAgICAgICAgICAgdGhpcy5kZWJ1Z01lYXN1cmVFbmRUaW1lKCdpbnRlcnByZXRlcicpO1xuXHRcdCAgICAgICAgICAgfSk7XG5cdH1cblxuXHRhc3luYyBleGVjdXRlVGVzdChzb3VyY2U6IFNvdXJjZSk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiB0aGlzLnJ1blBpcGVsaW5lKHNvdXJjZSlcblx0XHQgICAgICAgICAgIC50aGVuKChhc3Q6IEFTVE5vZGUpID0+IHtcblx0XHRcdCAgICAgICAgICAgdGhpcy5kZWJ1Z01lYXN1cmVTdGFydFRpbWUoKTtcblx0XHRcdCAgICAgICAgICAgdGhpcy50ZXN0U3VpdGUucnVuKGFzdCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlRW5kVGltZSgndGVzdCcpO1xuXHRcdCAgICAgICAgICAgfSk7XG5cdH1cblxuXHRkZWJ1Zyh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNEZWJ1Zykge1xuXHRcdFx0Y29uc29sZS5sb2codmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdGRlYnVnTWVhc3VyZVN0YXJ0VGltZSgpOiB2b2lkIHtcblx0XHR0aGlzLnN0YXJ0VGltZSA9IHRoaXMuZGVidWdUaW1lc3RhbXAoKTtcblx0fVxuXG5cdGRlYnVnTWVhc3VyZUVuZFRpbWUobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5kZWJ1ZyhtZXNzYWdlICsgJzogJyArICh0aGlzLmRlYnVnVGltZXN0YW1wKCkgLSB0aGlzLnN0YXJ0VGltZSkgKyAnbXMnKTtcblx0fVxuXG5cdGRlYnVnVGltZXN0YW1wKCk6IG51bWJlciB7XG5cdFx0aWYgKCF0aGlzLmlzRGVidWcpIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblx0XHRyZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG5cdH1cblxuXHRwcml2YXRlIGFzeW5jIHJ1blBpcGVsaW5lKHNvdXJjZTogU291cmNlKTogUHJvbWlzZTxBU1ROb2RlPiB7XG5cdFx0dGhpcy5kZWJ1Z01lYXN1cmVTdGFydFRpbWUoKVxuXHRcdGNvbnN0IGFzdDogQVNUTm9kZSA9IG5ldyBQYXJzZXIoc291cmNlKS5wYXJzZSgpO1xuXHRcdHRoaXMuZGVidWdNZWFzdXJlRW5kVGltZSgncGFyc2VyJylcblx0XHR0aGlzLmRlYnVnKGFzdCk7XG5cblx0XHRyZXR1cm4gdGhpcy5saW5rZXIubGlua1NvdXJjZXMoYXN0KVxuXHRcdCAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuXHRcdFx0ICAgICAgICAgICB0aGlzLnR5cGVDaGVja2VyLmNvbGxlY3RBbGxTeW1ib2xzRnJvbVJlZ2lzdHJ5KHRoaXMuZ2xvYmFsT2JqZWN0UmVnaXN0cnkpO1xuXHRcdCAgICAgICAgICAgfSlcblx0XHQgICAgICAgICAgIC50aGVuKCgpID0+IHtcblx0XHRcdCAgICAgICAgICAgdGhpcy5kZWJ1Z01lYXN1cmVTdGFydFRpbWUoKTtcblx0XHRcdCAgICAgICAgICAgdGhpcy50eXBlQ2hlY2tlci5jaGVjayhhc3QpO1xuXHRcdFx0ICAgICAgICAgICB0aGlzLmRlYnVnTWVhc3VyZUVuZFRpbWUoJ3R5cGVjaGVja2VyJyk7XG5cblx0XHRcdCAgICAgICAgICAgcmV0dXJuIGFzdDtcblx0XHQgICAgICAgICAgIH0pO1xuXHR9XG59XG4iLAogICAgImNvbnN0IERPTV9FVkVOVDogc3RyaW5nID0gJ2RvbTpldmVudCc7XG5cbmNvbnN0IGlzRXZlbnQ6IChwcm9wZXJ0eUtleTogc3RyaW5nKSA9PiBib29sZWFuID0gKHByb3BlcnR5S2V5OiBzdHJpbmcpOiBib29sZWFuID0+IHtcblx0cmV0dXJuIHByb3BlcnR5S2V5LnRvTG93ZXJDYXNlKClcblx0ICAgICAgICAgICAgICAgICAgLnN0YXJ0c1dpdGgoJ29uJyk7XG59XG5cbmV4cG9ydCBjb25zdCBFdmVudHMgPSB7XG5cdERPTV9FVkVOVCxcblx0aXNFdmVudCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50cztcbiIsCiAgICAiLy8vIDxyZWZlcmVuY2UgbGliPVwiZG9tXCIgLz5cblxuaW1wb3J0IHR5cGUge1ZOb2RlfSBmcm9tIFwiLi4vY29yZS92ZG9tL3Zkb21cIjtcbmltcG9ydCB7TGFtYmRhRnVuY3Rpb25DYWxsfSBmcm9tIFwiLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9ydW50aW1lXCI7XG5pbXBvcnQgRXZlbnRzIGZyb20gXCIuL2V2ZW50c1wiO1xuaW1wb3J0IHR5cGUge0FwcGxpY2F0aW9uUnVudGltZX0gZnJvbSBcIi4vcnVudGltZVwiO1xuaW1wb3J0IHtWRE9NfSBmcm9tIFwiLi9yZWdpc3RyeVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRDcmVhdG9yIHtcblx0Y3JlYXRlKHZOb2RlOiBWTm9kZSB8IHN0cmluZyk6IE5vZGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudFBhdGNoZXIge1xuXHRwYXRjaChvbGRWTm9kZTogVk5vZGUgfCBzdHJpbmcgfCBudWxsLCBuZXdWTm9kZTogVk5vZGUgfCBzdHJpbmcpOiB2b2lkXG59XG5cbmV4cG9ydCBjbGFzcyBIVE1MRWxlbWVudENyZWF0b3IgaW1wbGVtZW50cyBFbGVtZW50Q3JlYXRvciB7XG5cdHByaXZhdGUgdGV4dEJ1ZmZlcjogc3RyaW5nW10gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJlYWRvbmx5IGFwcGxpY2F0aW9uUnVudGltZTogQXBwbGljYXRpb25SdW50aW1lLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgdmRvbTogVkRPTVxuXHQpIHtcblx0fVxuXG5cdHB1YmxpYyBjcmVhdGUodk5vZGU6IFZOb2RlIHwgc3RyaW5nKTogTm9kZSB7XG5cdFx0aWYgKHR5cGVvZiB2Tm9kZSA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZOb2RlKTtcblx0XHR9XG5cblx0XHRpZiAodk5vZGUuaXNDb21wb25lbnQgJiYgdk5vZGUuY29tcG9uZW50ID09PSBudWxsKSB7XG5cdFx0XHR2Tm9kZS5jb21wb25lbnQgPSB0aGlzLmFwcGxpY2F0aW9uUnVudGltZS5jcmVhdGVJbnN0YW5jZSh2Tm9kZS50YWcpO1xuXG5cdFx0XHRmb3IgKGNvbnN0IFtwcm9wZXJ0eUtleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHZOb2RlLnByb3BzKSkge1xuXHRcdFx0XHRpZiAodk5vZGUuY29tcG9uZW50Lmhhc1B1YmxpY1Byb3BlcnR5KHByb3BlcnR5S2V5KSkge1xuXHRcdFx0XHRcdHZOb2RlLmNvbXBvbmVudC5zZXRQdWJsaWNQcm9wZXJ0eShwcm9wZXJ0eUtleSwgdmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHN1YlRyZWUgPSB0aGlzLmFwcGxpY2F0aW9uUnVudGltZS5jYWxsTWV0aG9kKHZOb2RlLmNvbXBvbmVudCwgJ3JlbmRlcicsIFtdKSBhcyBWTm9kZTtcblxuXHRcdFx0dGhpcy52ZG9tLnJlZ2lzdGVyKHZOb2RlLmNvbXBvbmVudCwgc3ViVHJlZSk7XG5cblx0XHRcdGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5jcmVhdGUoc3ViVHJlZSkgYXMgSFRNTEVsZW1lbnQ7XG5cblx0XHRcdGZvciAoY29uc3QgW3Byb3BlcnR5S2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModk5vZGUucHJvcHMpKSB7XG5cdFx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKHByb3BlcnR5S2V5LCBTdHJpbmcodmFsdWUpKTtcblx0XHRcdH1cblxuXHRcdFx0dk5vZGUuZG9tID0gZWxlbWVudDtcblxuXHRcdFx0cmV0dXJuIHZOb2RlLmRvbTtcblx0XHR9XG5cblx0XHRjb25zdCBmbHVzaFRleHRCdWZmZXI6ICgpID0+IHZvaWQgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRjb25zdCB0ZXh0OiBOb2RlIHwgbnVsbCA9IHRoaXMuZmx1c2hUZXh0QnVmZmVyKCk7XG5cdFx0XHRpZiAodGV4dCkge1xuXHRcdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKHRleHQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh2Tm9kZS50YWcpIGFzIEhUTUxFbGVtZW50O1xuXHRcdHZOb2RlLmRvbSA9IGVsZW1lbnQ7XG5cblx0XHRmb3IgKGNvbnN0IFtwcm9wZXJ0eUtleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHZOb2RlLnByb3BzKSkge1xuXHRcdFx0aWYgKEV2ZW50cy5pc0V2ZW50KHByb3BlcnR5S2V5KSkge1xuXHRcdFx0XHR0aGlzLmFwcGxpY2F0aW9uUnVudGltZS5hZGRFdmVudEhhbmRsZXIoZWxlbWVudCwgcHJvcGVydHlLZXksIHZhbHVlIGFzIExhbWJkYUZ1bmN0aW9uQ2FsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShwcm9wZXJ0eUtleSwgU3RyaW5nKHZhbHVlKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiB2Tm9kZS5jaGlsZHJlbikge1xuXHRcdFx0aWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0dGhpcy50ZXh0QnVmZmVyLnB1c2goY2hpbGQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZShjaGlsZCkgYXMgSFRNTEVsZW1lbnQpO1xuXHRcdFx0fVxuXG5cdFx0XHRmbHVzaFRleHRCdWZmZXIoKTtcblx0XHR9XG5cblx0XHRmbHVzaFRleHRCdWZmZXIoKTtcblxuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9XG5cblx0cHJpdmF0ZSBmbHVzaFRleHRCdWZmZXIoKTogTm9kZSB8IG51bGwge1xuXHRcdGlmICh0aGlzLnRleHRCdWZmZXIubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y29uc3QgZWxlbWVudDogVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMudGV4dEJ1ZmZlci5qb2luKCcnKSk7XG5cdFx0dGhpcy50ZXh0QnVmZmVyID0gW107XG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEhUTUxFbGVtZW50UGF0Y2hlciBpbXBsZW1lbnRzIEVsZW1lbnRQYXRjaGVyIHtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBtb3VudFBvaW50OiBIVE1MRWxlbWVudCxcblx0ICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBhcHBsaWNhdGlvblJ1bnRpbWU6IEFwcGxpY2F0aW9uUnVudGltZSxcblx0ICAgICAgICAgICAgdmRvbTogVkRPTSxcblx0ICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBlbGVtZW50Q3JlYXRvcjogRWxlbWVudENyZWF0b3IgPSBuZXcgSFRNTEVsZW1lbnRDcmVhdG9yKGFwcGxpY2F0aW9uUnVudGltZSwgdmRvbSkpIHtcblx0fVxuXG5cdHB1YmxpYyBwYXRjaChvbGRWTm9kZTogVk5vZGUgfCBzdHJpbmcgfCBudWxsLCBuZXdWTm9kZTogVk5vZGUgfCBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAob2xkVk5vZGUpIHtcblx0XHRcdHRoaXMucGF0Y2hOb2RlKHRoaXMubW91bnRQb2ludCwgb2xkVk5vZGUsIG5ld1ZOb2RlKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBlbGVtZW50OiBOb2RlID0gdGhpcy5lbGVtZW50Q3JlYXRvci5jcmVhdGUobmV3Vk5vZGUpO1xuXG5cdFx0dGhpcy5tb3VudFBvaW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG5cdFx0aWYgKHR5cGVvZiBuZXdWTm9kZSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdG5ld1ZOb2RlLmRvbSA9IGVsZW1lbnQ7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBwYXRjaE5vZGUocGFyZW50OiBOb2RlLCBvbGROb2RlOiBWTm9kZSB8IHN0cmluZywgbmV3Tm9kZTogVk5vZGUgfCBzdHJpbmcpOiB2b2lkIHtcblxuXHRcdGlmICh0eXBlb2Ygb2xkTm9kZSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIG5ld05vZGUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRpZiAob2xkTm9kZSAhPT0gbmV3Tm9kZSkge1xuXHRcdFx0XHRjb25zdCB0ZXh0Tm9kZTogQ2hpbGROb2RlIHwgbnVsbCA9IHBhcmVudC5maXJzdENoaWxkO1xuXHRcdFx0XHRpZiAodGV4dE5vZGUpIHtcblx0XHRcdFx0XHR0ZXh0Tm9kZS50ZXh0Q29udGVudCA9IG5ld05vZGU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIG9sZE5vZGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBuZXdOb2RlID09PSAnc3RyaW5nJykge1xuXHRcdFx0Y29uc3QgbmV3RWxlbWVudDogTm9kZSA9IHRoaXMuZWxlbWVudENyZWF0b3IuY3JlYXRlKG5ld05vZGUpO1xuXHRcdFx0cGFyZW50LnJlcGxhY2VDaGlsZChuZXdFbGVtZW50LCBwYXJlbnQuZmlyc3RDaGlsZCEpO1xuXHRcdFx0aWYgKHR5cGVvZiBuZXdOb2RlICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRuZXdOb2RlLmRvbSA9IG5ld0VsZW1lbnQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKG9sZE5vZGUudGFnICE9PSBuZXdOb2RlLnRhZykge1xuXHRcdFx0Y29uc3QgbmV3RWxlbWVudDogTm9kZSA9IHRoaXMuZWxlbWVudENyZWF0b3IuY3JlYXRlKG5ld05vZGUpO1xuXHRcdFx0cGFyZW50LnJlcGxhY2VDaGlsZChuZXdFbGVtZW50LCBvbGROb2RlLmRvbSEpO1xuXHRcdFx0bmV3Tm9kZS5kb20gPSBuZXdFbGVtZW50O1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChuZXdOb2RlLmlzQ29tcG9uZW50ICYmIG5ld05vZGUuY29tcG9uZW50ID09PSBudWxsKSB7XG5cdFx0XHRuZXdOb2RlLmNvbXBvbmVudCA9IG9sZE5vZGUuY29tcG9uZW50O1xuXHRcdFx0Y29uc3QgbmV3RWxlbWVudDogTm9kZSA9IHRoaXMuZWxlbWVudENyZWF0b3IuY3JlYXRlKFxuXHRcdFx0XHR0aGlzLmFwcGxpY2F0aW9uUnVudGltZS5yZW5kZXJDb21wb25lbnQob2xkTm9kZS5jb21wb25lbnQhKVxuXHRcdFx0KTtcblx0XHRcdHBhcmVudC5yZXBsYWNlQ2hpbGQobmV3RWxlbWVudCwgb2xkTm9kZS5kb20hKTtcblx0XHRcdG5ld05vZGUuZG9tID0gbmV3RWxlbWVudDtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBkb206IE5vZGUgPSBvbGROb2RlLmRvbSE7XG5cdFx0bmV3Tm9kZS5kb20gPSBkb207XG5cblx0XHR0aGlzLnVwZGF0ZVByb3BlcnRpZXMoZG9tIGFzIEhUTUxFbGVtZW50LCBvbGROb2RlLnByb3BzLCBuZXdOb2RlLnByb3BzKTtcblx0XHR0aGlzLnBhdGNoQ2hpbGRyZW4oZG9tLCBvbGROb2RlLmNoaWxkcmVuLCBuZXdOb2RlLmNoaWxkcmVuKTtcblx0fVxuXG5cdHByaXZhdGUgdXBkYXRlUHJvcGVydGllcyhlbGVtZW50OiBIVE1MRWxlbWVudCwgb2xkUHJvcGVydGllczogUmVjb3JkPHN0cmluZywgYW55PiwgbmV3UHJvcGVydGllczogUmVjb3JkPHN0cmluZywgYW55Pik6IHZvaWQge1xuXHRcdGZvciAoY29uc3QgcHJvcGVydHlLZXkgaW4gb2xkUHJvcGVydGllcykge1xuXHRcdFx0aWYgKCEocHJvcGVydHlLZXkgaW4gbmV3UHJvcGVydGllcykpIHtcblx0XHRcdFx0aWYgKEV2ZW50cy5pc0V2ZW50KHByb3BlcnR5S2V5KSkge1xuXHRcdFx0XHRcdHRoaXMuYXBwbGljYXRpb25SdW50aW1lLnJlbW92ZUV2ZW50SGFuZGxlcihlbGVtZW50LCBwcm9wZXJ0eUtleSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUocHJvcGVydHlLZXkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBwcm9wZXJ0eUtleSBpbiBuZXdQcm9wZXJ0aWVzKSB7XG5cdFx0XHRjb25zdCBvbGRWYWx1ZTogYW55ID0gb2xkUHJvcGVydGllc1twcm9wZXJ0eUtleV07XG5cdFx0XHRjb25zdCBuZXdWYWx1ZTogYW55ID0gbmV3UHJvcGVydGllc1twcm9wZXJ0eUtleV07XG5cblx0XHRcdGlmIChvbGRWYWx1ZSA9PT0gbmV3VmFsdWUpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChFdmVudHMuaXNFdmVudChwcm9wZXJ0eUtleSkpIHtcblx0XHRcdFx0aWYgKG9sZFZhbHVlKSB7XG5cdFx0XHRcdFx0dGhpcy5hcHBsaWNhdGlvblJ1bnRpbWUucmVtb3ZlRXZlbnRIYW5kbGVyKGVsZW1lbnQsIHByb3BlcnR5S2V5KTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmFwcGxpY2F0aW9uUnVudGltZS5hZGRFdmVudEhhbmRsZXIoZWxlbWVudCwgcHJvcGVydHlLZXksIG5ld1ZhbHVlIGFzIExhbWJkYUZ1bmN0aW9uQ2FsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShwcm9wZXJ0eUtleSwgbmV3VmFsdWUgYXMgc3RyaW5nKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHBhdGNoQ2hpbGRyZW4ocGFyZW50OiBOb2RlLCBvbGRDaGlsZHJlbjogKFZOb2RlIHwgc3RyaW5nKVtdLCBuZXdDaGlsZHJlbjogKFZOb2RlIHwgc3RyaW5nKVtdKTogdm9pZCB7XG5cdFx0Y29uc3QgbWF4OiBudW1iZXIgPSBNYXRoLm1heChvbGRDaGlsZHJlbi5sZW5ndGgsIG5ld0NoaWxkcmVuLmxlbmd0aCk7XG5cblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbWF4OyBpKyspIHtcblxuXHRcdFx0Y29uc3Qgb2xkQ2hpbGQ6IFZOb2RlIHwgc3RyaW5nIHwgdW5kZWZpbmVkID0gb2xkQ2hpbGRyZW5baV07XG5cdFx0XHRjb25zdCBuZXdDaGlsZDogVk5vZGUgfCBzdHJpbmcgfCB1bmRlZmluZWQgPSBuZXdDaGlsZHJlbltpXTtcblxuXHRcdFx0aWYgKCFvbGRDaGlsZCAmJiBuZXdDaGlsZCkge1xuXHRcdFx0XHRwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50Q3JlYXRvci5jcmVhdGUobmV3Q2hpbGQpKTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHBhcmVudENoaWxkTm9kZTogQ2hpbGROb2RlIHwgdW5kZWZpbmVkID0gcGFyZW50LmNoaWxkTm9kZXNbaV07XG5cdFx0XHRpZiAocGFyZW50Q2hpbGROb2RlKSB7XG5cdFx0XHRcdGlmIChvbGRDaGlsZCAmJiAhbmV3Q2hpbGQpIHtcblx0XHRcdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50Q2hpbGROb2RlKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChuZXdDaGlsZCAmJiBvbGRDaGlsZCkge1xuXHRcdFx0XHRcdHRoaXMucGF0Y2hOb2RlKHBhcmVudENoaWxkTm9kZS5wYXJlbnROb2RlISwgb2xkQ2hpbGQsIG5ld0NoaWxkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwKICAgICJpbXBvcnQge0x5cmFTY3JpcHRQcm9ncmFtfSBmcm9tIFwiLi4vY29yZS9wcm9ncmFtXCI7XG5pbXBvcnQge2ZldGNoU291cmNlfSBmcm9tIFwiLi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuaW1wb3J0IHtDbGFzc0RlZmluaXRpb24sIEVudmlyb25tZW50LCBJbnN0YW5jZX0gZnJvbSBcIi4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB7Y2FsbEluc3RhbmNlTWV0aG9kLCBMYW1iZGFGdW5jdGlvbkNhbGx9IGZyb20gXCIuLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX3J1bnRpbWVcIjtcbmltcG9ydCB7RXZlbnRUeXBlfSBmcm9tIFwiLi4vbGlicmFyeS9jbGFzc2VzL2V2ZW50XCI7XG5pbXBvcnQge0V2ZW50UGlwZWxpbmV9IGZyb20gXCIuLi9jb3JlL2V2ZW50L3BpcGVsaW5lXCI7XG5pbXBvcnQge0dSQU1NQVJ9IGZyb20gXCIuLi9jb3JlL2dyYW1tYXJcIjtcblxuY29uc3QgbHlyYUV2ZW50Q2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiA9IG5ldyBFdmVudFR5cGUoKS5nZXRDbGFzc0RlZmluaXRpb24oKTtcblxuZXhwb3J0IGludGVyZmFjZSBFbmdpbmUge1xuXHRleGVjdXRlRW50cnlGaWxlKHVybDogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG5cblx0Y3JlYXRlSW5zdGFuY2UoY2xhc3NOYW1lOiBzdHJpbmcpOiBJbnN0YW5jZTtcblxuXHRnZXRSb290SW5zdGFuY2UoKTogSW5zdGFuY2U7XG5cblx0Y2FsbFJvb3RJbnN0YW5jZU1ldGhvZChtZXRob2ROYW1lOiBzdHJpbmcsIGFyZ3M6IGFueVtdKTogYW55O1xuXG5cdGNhbGxJbnN0YW5jZU1ldGhvZChpbnN0YW5jZTogSW5zdGFuY2UsIG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogQXJyYXk8YW55Pik6IGFueTtcblxuXHRjcmVhdGVFdmVudChldmVudDogRXZlbnQpOiBJbnN0YW5jZTtcblxuXHRjcmVhdGVFdmVudEhhbmRsZXIoaGFuZGxlcjogTGFtYmRhRnVuY3Rpb25DYWxsLCBldmVudE5hbWU6IHN0cmluZyk6IChldmVudDogRXZlbnQpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBXZWJMeXJhU2NyaXB0IGltcGxlbWVudHMgRW5naW5lIHtcblx0cHJpdmF0ZSByZWFkb25seSBwcm9ncmFtOiBMeXJhU2NyaXB0UHJvZ3JhbTtcblx0cHJpdmF0ZSByZWFkb25seSBnbG9iYWxPYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cdHByaXZhdGUgcmVhZG9ubHkgZ2xvYmFsRW52aXJvbm1lbnQ6IEVudmlyb25tZW50O1xuXHRwcml2YXRlIHJvb3RJbnN0YW5jZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbDtcblxuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZ2xvYmFsRXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSA9IG5ldyBFdmVudFBpcGVsaW5lKCksIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSkge1xuXHRcdHRoaXMucHJvZ3JhbSA9IG5ldyBMeXJhU2NyaXB0UHJvZ3JhbShpc0RlYnVnLCB0aGlzLmdsb2JhbEV2ZW50UGlwZWxpbmUpO1xuXHRcdHRoaXMuZ2xvYmFsT2JqZWN0UmVnaXN0cnkgPSB0aGlzLnByb2dyYW0uZ2V0R2xvYmFsT2JqZWN0UmVnaXN0cnkoKTtcblx0XHR0aGlzLmdsb2JhbEVudmlyb25tZW50ID0gdGhpcy5wcm9ncmFtLmdldEdsb2JhbEVudmlyb25tZW50KCk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0Um9vdEluc3RhbmNlKCk6IEluc3RhbmNlIHtcblx0XHRpZiAodGhpcy5yb290SW5zdGFuY2UgPT09IG51bGwpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignTm8gcm9vdCBpbnN0YW5jZSBhdmFpbGFibGUuJyk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnJvb3RJbnN0YW5jZTtcblx0fVxuXG5cdHB1YmxpYyBjcmVhdGVJbnN0YW5jZShjbGFzc05hbWU6IHN0cmluZyk6IEluc3RhbmNlIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRDbGFzc0RlZmluaXRpb24oY2xhc3NOYW1lKVxuXHRcdCAgICAgICAgICAgLmNvbnN0cnVjdE5ld0luc3RhbmNlV2l0aG91dEFyZ3VtZW50cyhcblx0XHRcdCAgICAgICAgICAgdGhpcy5nbG9iYWxPYmplY3RSZWdpc3RyeSxcblx0XHRcdCAgICAgICAgICAgdGhpcy5nbG9iYWxFbnZpcm9ubWVudCxcblx0XHRcdCAgICAgICAgICAgdGhpcy5nbG9iYWxFdmVudFBpcGVsaW5lXG5cdFx0ICAgICAgICAgICApO1xuXHR9XG5cblx0cHVibGljIGNhbGxSb290SW5zdGFuY2VNZXRob2QobWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuY2FsbEluc3RhbmNlTWV0aG9kKHRoaXMuZ2V0Um9vdEluc3RhbmNlKCksIG1ldGhvZE5hbWUsIGFyZ3MpO1xuXHR9XG5cblx0cHVibGljIGNhbGxJbnN0YW5jZU1ldGhvZChpbnN0YW5jZTogSW5zdGFuY2UsIG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10pOiBhbnkge1xuXHRcdHJldHVybiBjYWxsSW5zdGFuY2VNZXRob2QoXG5cdFx0XHRpbnN0YW5jZSxcblx0XHRcdGluc3RhbmNlLmZpbmRlTWV0aG9kTm9kZShtZXRob2ROYW1lKSxcblx0XHRcdGFyZ3MsXG5cdFx0XHR0aGlzLmdsb2JhbE9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0dGhpcy5nbG9iYWxFbnZpcm9ubWVudCxcblx0XHRcdHRoaXMuZ2xvYmFsRXZlbnRQaXBlbGluZVxuXHRcdCk7XG5cdH1cblxuXHRwdWJsaWMgYXN5bmMgZXhlY3V0ZUVudHJ5RmlsZSh1cmw6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gdGhpcy5wcm9ncmFtLmV4ZWN1dGUoYXdhaXQgZmV0Y2hTb3VyY2UodXJsKSlcblx0XHQgICAgICAgICAgIC50aGVuKCgpID0+IHtcblx0XHRcdCAgICAgICAgICAgdGhpcy5yb290SW5zdGFuY2UgPSB0aGlzLmNyZWF0ZUluc3RhbmNlKGNsYXNzTmFtZSk7XG5cdFx0ICAgICAgICAgICB9KTtcblx0fVxuXG5cdHB1YmxpYyBjcmVhdGVFdmVudChldmVudDogRXZlbnQpOiBJbnN0YW5jZSB7XG5cdFx0cmV0dXJuIGx5cmFFdmVudENsYXNzRGVmLmNvbnN0cnVjdE5hdGl2ZUluc3RhbmNlKHRoaXMuZ2xvYmFsT2JqZWN0UmVnaXN0cnksIFtldmVudF0pO1xuXHR9XG5cblx0cHVibGljIGNyZWF0ZUV2ZW50SGFuZGxlcihoYW5kbGVyOiBMYW1iZGFGdW5jdGlvbkNhbGwsIGV2ZW50TmFtZTogc3RyaW5nKTogKGV2ZW50OiBFdmVudCkgPT4gdm9pZCB7XG5cdFx0cmV0dXJuIChldmVudDogRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdHRoaXMuZ2xvYmFsRXZlbnRQaXBlbGluZS5lbWl0KFxuXHRcdFx0XHRldmVudE5hbWUsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpbnZva2U6ICgpOiBhbnkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgaW5zdGFuY2U6IEluc3RhbmNlID0gaGFuZGxlci5mdW5jdGlvbkVudi5nZXQoR1JBTU1BUi5USElTKTtcblxuXHRcdFx0XHRcdFx0aGFuZGxlci5ldmFsQ2FsbChpbnN0YW5jZSwgdGhpcy5jcmVhdGVFdmVudChldmVudCkpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZXZlbnRcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9O1xuXHR9XG5cblxuXHRwcml2YXRlIGdldENsYXNzRGVmaW5pdGlvbihjbGFzc05hbWU6IHN0cmluZyk6IENsYXNzRGVmaW5pdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2xvYmFsT2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQoY2xhc3NOYW1lKTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQgdHlwZSB7Vk5vZGV9IGZyb20gXCIuLi9jb3JlL3Zkb20vdmRvbVwiO1xuaW1wb3J0IHR5cGUge0luc3RhbmNlfSBmcm9tIFwiLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5cbmV4cG9ydCBjbGFzcyBFdmVudEhhbmRsZXJSZWdpc3RyeSB7XG5cdHByaXZhdGUgcmVnaXN0cnk6IFdlYWtNYXA8SFRNTEVsZW1lbnQsIFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uPj4gPSBuZXcgV2Vha01hcDxIVE1MRWxlbWVudCwgUmVjb3JkPHN0cmluZywgRnVuY3Rpb24+PigpO1xuXG5cdHB1YmxpYyByZWdpc3RlcihlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcGVydHlLZXk6IHN0cmluZywgaGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcblx0XHRjb25zdCBldmVudEhhbmRsZXJzOiBSZWNvcmQ8c3RyaW5nLCBGdW5jdGlvbj4gPSB0aGlzLnJlZ2lzdHJ5LmdldChlbGVtZW50KSA/PyB7fTtcblxuXHRcdGV2ZW50SGFuZGxlcnNbcHJvcGVydHlLZXldID0gaGFuZGxlcjtcblxuXHRcdHRoaXMucmVnaXN0cnkuc2V0KGVsZW1lbnQsIGV2ZW50SGFuZGxlcnMpO1xuXHR9XG5cblx0cHVibGljIHVucmVnaXN0ZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIHByb3BlcnR5S2V5OiBzdHJpbmcpOiBGdW5jdGlvbiB8IG51bGwge1xuXHRcdGNvbnN0IGV2ZW50SGFuZGxlcnM6IFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uPiA9IHRoaXMucmVnaXN0cnkuZ2V0KGVsZW1lbnQpID8/IHt9O1xuXG5cdFx0Y29uc3QgZXZlbnRIYW5kbGVyOiBGdW5jdGlvbiB8IHVuZGVmaW5lZCA9IGV2ZW50SGFuZGxlcnNbcHJvcGVydHlLZXldO1xuXHRcdGlmIChldmVudEhhbmRsZXIpIHtcblx0XHRcdGRlbGV0ZSBldmVudEhhbmRsZXJzW3Byb3BlcnR5S2V5XTtcblxuXHRcdFx0dGhpcy5yZWdpc3RyeS5zZXQoZWxlbWVudCwgZXZlbnRIYW5kbGVycyk7XG5cblx0XHRcdHJldHVybiBldmVudEhhbmRsZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFZET00ge1xuXHRwcml2YXRlIGluc3RhbmNlTWFwOiBNYXA8c3RyaW5nLCBWTm9kZT4gPSBuZXcgTWFwPHN0cmluZywgVk5vZGU+KCk7XG5cblx0cHVibGljIHJlZ2lzdGVyKGluc3RhbmNlOiBJbnN0YW5jZSwgbm9kZTogVk5vZGUpOiB2b2lkIHtcblx0XHR0aGlzLmluc3RhbmNlTWFwLnNldChpbnN0YW5jZS5pZCwgbm9kZSk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0Tm9kZUJ5SW5zdGFuY2UoaW5zdGFuY2U6IEluc3RhbmNlKTogVk5vZGUge1xuXHRcdGNvbnN0IHZOb2RlOiBWTm9kZSB8IHVuZGVmaW5lZCA9IHRoaXMuaW5zdGFuY2VNYXAuZ2V0KGluc3RhbmNlLmlkKTtcblx0XHRpZiAoIXZOb2RlKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEluc3RhbmNlIHdpdGggaWQgJHtpbnN0YW5jZS5pZH0gbm90IGZvdW5kLmApO1xuXHRcdH1cblx0XHRyZXR1cm4gdk5vZGU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHt0eXBlIEVuZ2luZSwgV2ViTHlyYVNjcmlwdH0gZnJvbSBcIi4vZW5naW5lXCI7XG5pbXBvcnQge3R5cGUgRWxlbWVudFBhdGNoZXIsIEhUTUxFbGVtZW50UGF0Y2hlcn0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgdHlwZSB7Vk5vZGV9IGZyb20gXCIuLi9jb3JlL3Zkb20vdmRvbVwiO1xuaW1wb3J0IHtFdmVudFBpcGVsaW5lfSBmcm9tIFwiLi4vY29yZS9ldmVudC9waXBlbGluZVwiO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcbmltcG9ydCB7dHlwZSBJbnN0YW5jZX0gZnJvbSBcIi4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtMYW1iZGFGdW5jdGlvbkNhbGx9IGZyb20gXCIuLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX3J1bnRpbWVcIjtcbmltcG9ydCB7RXZlbnRIYW5kbGVyUmVnaXN0cnksIFZET019IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5pbXBvcnQgTHlyYUV2ZW50cyBmcm9tIFwiLi4vY29yZS9ldmVudC9ldmVudHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBcHBsaWNhdGlvblJ1bnRpbWUge1xuXHRnZXQgZW5naW5lKCk6IEVuZ2luZTtcblxuXHRnZXQgZXZlbnRQaXBlbGluZSgpOiBFdmVudFBpcGVsaW5lO1xuXG5cdHN0YXJ0KHVybDogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG5cblx0Y3JlYXRlSW5zdGFuY2UoY2xhc3NOYW1lOiBzdHJpbmcpOiBJbnN0YW5jZTtcblxuXHRjYWxsUm9vdEluc3RhbmNlTWV0aG9kKG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10pOiBhbnk7XG5cblx0Y2FsbE1ldGhvZChpbnN0YW5jZTogSW5zdGFuY2UsIG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10pOiBhbnk7XG5cblx0cmVuZGVyUm9vdENvbXBvbmVudCgpOiBWTm9kZTtcblxuXHRyZW5kZXJDb21wb25lbnQoaW5zdGFuY2U6IEluc3RhbmNlKTogVk5vZGU7XG5cblx0YWRkRXZlbnRIYW5kbGVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwcm9wZXJ0eUtleTogc3RyaW5nLCBoYW5kbGVyOiBMYW1iZGFGdW5jdGlvbkNhbGwpOiB2b2lkO1xuXG5cdHJlbW92ZUV2ZW50SGFuZGxlcihlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcGVydHlLZXk6IHN0cmluZyk6IHZvaWQ7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEFwcGxpY2F0aW9uUnVudGltZSBpbXBsZW1lbnRzIEFwcGxpY2F0aW9uUnVudGltZSB7XG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJlYWRvbmx5IF9lbmdpbmU6IEVuZ2luZSxcblx0XHRwcml2YXRlIHJlYWRvbmx5IF9ldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lID0gbmV3IEV2ZW50UGlwZWxpbmUoKSxcblx0XHRwcml2YXRlIHJlYWRvbmx5IGV2ZW50SGFuZGxlclJlZ2lzdHJ5OiBFdmVudEhhbmRsZXJSZWdpc3RyeSA9IG5ldyBFdmVudEhhbmRsZXJSZWdpc3RyeSgpXG5cdCkge1xuXHR9XG5cblx0Z2V0IGVuZ2luZSgpOiBFbmdpbmUge1xuXHRcdHJldHVybiB0aGlzLl9lbmdpbmU7XG5cdH1cblxuXHRnZXQgZXZlbnRQaXBlbGluZSgpOiBFdmVudFBpcGVsaW5lIHtcblx0XHRyZXR1cm4gdGhpcy5fZXZlbnRQaXBlbGluZTtcblx0fVxuXG5cdHJlbmRlclJvb3RDb21wb25lbnQoKTogVk5vZGUge1xuXHRcdHJldHVybiB0aGlzLnJlbmRlckNvbXBvbmVudCh0aGlzLl9lbmdpbmUuZ2V0Um9vdEluc3RhbmNlKCkpO1xuXHR9XG5cblx0cmVuZGVyQ29tcG9uZW50KGluc3RhbmNlOiBJbnN0YW5jZSk6IFZOb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5jYWxsTWV0aG9kKGluc3RhbmNlLCAncmVuZGVyJywgW10pIGFzIFZOb2RlXG5cdH1cblxuXHRwdWJsaWMgc3RhcnQodXJsOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG5cdH1cblxuXHRwdWJsaWMgY3JlYXRlSW5zdGFuY2UoY2xhc3NOYW1lOiBzdHJpbmcpOiBJbnN0YW5jZSB7XG5cdFx0cmV0dXJuIHRoaXMuX2VuZ2luZS5jcmVhdGVJbnN0YW5jZShjbGFzc05hbWUpO1xuXHR9XG5cblx0cHVibGljIGNhbGxSb290SW5zdGFuY2VNZXRob2QobWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSA9IFtdKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5fZW5naW5lLmNhbGxSb290SW5zdGFuY2VNZXRob2QobWV0aG9kTmFtZSwgYXJncyk7XG5cdH1cblxuXHRwdWJsaWMgY2FsbE1ldGhvZChpbnN0YW5jZTogSW5zdGFuY2UsIG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10gPSBbXSk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuX2VuZ2luZS5jYWxsSW5zdGFuY2VNZXRob2QoaW5zdGFuY2UsIG1ldGhvZE5hbWUsIGFyZ3MpO1xuXHR9XG5cblx0cHVibGljIGFkZEV2ZW50SGFuZGxlcihlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcGVydHlLZXk6IHN0cmluZywgaGFuZGxlcjogTGFtYmRhRnVuY3Rpb25DYWxsKTogdm9pZCB7XG5cdFx0Y29uc3QgZXZlbnROYW1lOiBzdHJpbmcgPSBwcm9wZXJ0eUtleS5zbGljZSgyKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcblxuXHRcdGNvbnN0IGV2ZW50SGFuZGxlcjogKGV2ZW50OiBFdmVudCkgPT4gdm9pZCA9IHRoaXMuZW5naW5lLmNyZWF0ZUV2ZW50SGFuZGxlcihoYW5kbGVyLCBFdmVudHMuRE9NX0VWRU5UKTtcblxuXHRcdHRoaXMuZXZlbnRIYW5kbGVyUmVnaXN0cnkucmVnaXN0ZXIoZWxlbWVudCwgcHJvcGVydHlLZXksIGV2ZW50SGFuZGxlcik7XG5cblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudEhhbmRsZXIpO1xuXHR9XG5cblx0cHVibGljIHJlbW92ZUV2ZW50SGFuZGxlcihlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcGVydHlLZXk6IHN0cmluZyk6IHZvaWQge1xuXHRcdGNvbnN0IGV2ZW50TmFtZTogc3RyaW5nID0gcHJvcGVydHlLZXkuc2xpY2UoMilcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRjb25zdCBldmVudEhhbmRsZXI6IEZ1bmN0aW9uIHwgbnVsbCA9IHRoaXMuZXZlbnRIYW5kbGVyUmVnaXN0cnkudW5yZWdpc3RlcihlbGVtZW50LCBwcm9wZXJ0eUtleSk7XG5cblx0XHRpZiAoZXZlbnRIYW5kbGVyKSB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudEhhbmRsZXIgYXMgRXZlbnRMaXN0ZW5lcik7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBXZWJBcHBsaWNhdGlvblJ1bnRpbWUgZXh0ZW5kcyBBYnN0cmFjdEFwcGxpY2F0aW9uUnVudGltZSB7XG5cdHByaXZhdGUgcmVhZG9ubHkgdmRvbTogVkRPTSA9IG5ldyBWRE9NKCk7XG5cdHByaXZhdGUgcmVhZG9ubHkgcGF0Y2hlcjogRWxlbWVudFBhdGNoZXI7XG5cblx0cHJpdmF0ZSBjdXJyZW50Vk5vZGU6IFZOb2RlIHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgaXNSZW5kZXJpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRtb3VudFBvaW50OiBIVE1MRWxlbWVudCxcblx0XHRpc0RlYnVnOiBib29sZWFuID0gZmFsc2UsXG5cdFx0ZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSA9IG5ldyBFdmVudFBpcGVsaW5lKCksXG5cdFx0ZXZlbnRIYW5kbGVyUmVnaXN0cnk6IEV2ZW50SGFuZGxlclJlZ2lzdHJ5ID0gbmV3IEV2ZW50SGFuZGxlclJlZ2lzdHJ5KClcblx0KSB7XG5cdFx0c3VwZXIobmV3IFdlYkx5cmFTY3JpcHQoZXZlbnRQaXBlbGluZSwgaXNEZWJ1ZyksIGV2ZW50UGlwZWxpbmUsIGV2ZW50SGFuZGxlclJlZ2lzdHJ5KTtcblxuXHRcdHRoaXMucGF0Y2hlciA9IG5ldyBIVE1MRWxlbWVudFBhdGNoZXIobW91bnRQb2ludCwgdGhpcywgdGhpcy52ZG9tKTtcblxuXHRcdHRoaXMuZXhwb3NlUnVudGltZSgpO1xuXHR9XG5cblx0cHVibGljIG92ZXJyaWRlIGFzeW5jIHN0YXJ0KHVybDogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZyA9ICdBcHAnKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0YXdhaXQgdGhpcy5lbmdpbmUuZXhlY3V0ZUVudHJ5RmlsZSh1cmwsIGNsYXNzTmFtZSk7XG5cblx0XHR0aGlzLmxpc3RlblRvRG9tRXZlbnRzKCk7XG5cblx0XHR0aGlzLnJlcXVlc3RGdWxsUmVuZGVyKCk7XG5cdH1cblxuXHRwdWJsaWMgcmVxdWVzdEZ1bGxSZW5kZXIoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNSZW5kZXJpbmcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRxdWV1ZU1pY3JvdGFzaygoKTogdm9pZCA9PiB7XG5cdFx0XHR0aGlzLnBlcmZvcm1GdWxsUmVuZGVyKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgcmVxdWVzdENvbXBvbmVudFJlbmRlcihvbGRWTm9kZTogVk5vZGUsIGluc3RhbmNlOiBJbnN0YW5jZSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzUmVuZGVyaW5nKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0cXVldWVNaWNyb3Rhc2soKCk6IHZvaWQgPT4ge1xuXHRcdFx0dGhpcy5wZXJmb3JtQ29tcG9uZW50UmVuZGVyKG9sZFZOb2RlLCBpbnN0YW5jZSk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIHBlcmZvcm1GdWxsUmVuZGVyKCk6IHZvaWQge1xuXHRcdHRoaXMuaXNSZW5kZXJpbmcgPSB0cnVlO1xuXG5cdFx0Y29uc3QgbmV4dDogVk5vZGUgPSB0aGlzLnJlbmRlclJvb3RDb21wb25lbnQoKTtcblxuXHRcdHRoaXMucGF0Y2hlci5wYXRjaCh0aGlzLmN1cnJlbnRWTm9kZSwgbmV4dCk7XG5cblx0XHR0aGlzLmN1cnJlbnRWTm9kZSA9IG5leHQ7XG5cblx0XHR0aGlzLnZkb20ucmVnaXN0ZXIodGhpcy5lbmdpbmUuZ2V0Um9vdEluc3RhbmNlKCksIG5leHQpO1xuXG5cdFx0dGhpcy5pc1JlbmRlcmluZyA9IGZhbHNlO1xuXHR9XG5cblx0cHJpdmF0ZSBwZXJmb3JtQ29tcG9uZW50UmVuZGVyKG9sZFZOb2RlOiBWTm9kZSwgaW5zdGFuY2U6IEluc3RhbmNlKTogdm9pZCB7XG5cdFx0dGhpcy5pc1JlbmRlcmluZyA9IHRydWU7XG5cblx0XHRjb25zdCBuZXh0OiBWTm9kZSA9IHRoaXMucmVuZGVyQ29tcG9uZW50KGluc3RhbmNlKTtcblxuXHRcdHRoaXMucGF0Y2hlci5wYXRjaChvbGRWTm9kZSwgbmV4dCk7XG5cblx0XHR0aGlzLnZkb20ucmVnaXN0ZXIoaW5zdGFuY2UsIG5leHQpO1xuXG5cdFx0aW5zdGFuY2UubWFya0NsZWFuKHRoaXMuZXZlbnRQaXBlbGluZSk7XG5cblx0XHR0aGlzLmlzUmVuZGVyaW5nID0gZmFsc2U7XG5cdH1cblxuXHRwcml2YXRlIGxpc3RlblRvRG9tRXZlbnRzKCk6IHZvaWQge1xuXHRcdHRoaXMuZXZlbnRQaXBlbGluZVxuXHRcdCAgICAub24oRXZlbnRzLkRPTV9FVkVOVCwgKHtpbnZva2V9OiBhbnkpOiB2b2lkID0+IHtcblx0XHRcdCAgICBpbnZva2UoKTtcblx0XHQgICAgfSk7XG5cblx0XHR0aGlzLmV2ZW50UGlwZWxpbmVcblx0XHQgICAgLm9uKEx5cmFFdmVudHMuTFlSQV9JTlNUQU5DRV9ESVJUWV9TVEFURSwgKHtpbnN0YW5jZX06IGFueSk6IHZvaWQgPT4ge1xuXHRcdFx0ICAgIHRoaXMucmVxdWVzdENvbXBvbmVudFJlbmRlcihcblx0XHRcdFx0ICAgIHRoaXMudmRvbS5nZXROb2RlQnlJbnN0YW5jZShpbnN0YW5jZSksXG5cdFx0XHRcdCAgICBpbnN0YW5jZVxuXHRcdFx0ICAgICk7XG5cdFx0ICAgIH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBleHBvc2VSdW50aW1lKCk6IHZvaWQge1xuXHRcdGNvbnN0IGdsb2JhbDogYW55ID0gd2luZG93IGFzIFdpbmRvdztcblxuXHRcdGdsb2JhbC5fX0xZUkFfXyA9IGdsb2JhbC5fX0xZUkFfXyB8fCB7XG5cdFx0XHR2ZXJzaW9uOiAnMC4wLjEnLFxuXHRcdFx0cnVudGltZTogdGhpcyxcblx0XHR9O1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7UGFyc2VyfSBmcm9tIFwiLi9jb3JlL3BhcnNlci9wYXJzZXJcIjtcbmltcG9ydCB7d3JhcEpzRXJyb3J9IGZyb20gXCIuL2NvcmUvZXJyb3JzXCI7XG5pbXBvcnQge2ZldGNoU291cmNlLCBTb3VyY2V9IGZyb20gXCIuL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcbmltcG9ydCB7QVNUTm9kZX0gZnJvbSBcIi4vY29yZS9hc3RcIjtcbmltcG9ydCB7VG9rZW5pemVyfSBmcm9tIFwiLi9jb3JlL3Rva2VuaXplci90b2tlbml6ZXJcIjtcbmltcG9ydCB7VG9rZW59IGZyb20gXCIuL2NvcmUvZ3JhbW1hclwiO1xuaW1wb3J0IHtMeXJhU2NyaXB0UHJvZ3JhbX0gZnJvbSBcIi4vY29yZS9wcm9ncmFtXCI7XG5pbXBvcnQge0V2ZW50UGlwZWxpbmV9IGZyb20gXCIuL2NvcmUvZXZlbnQvcGlwZWxpbmVcIjtcbmltcG9ydCB7U3RhdGV9IGZyb20gXCIuL2NvcmUvZXZlbnQvc3RhdGVcIjtcbmltcG9ydCB7SFRNTEVsZW1lbnRDcmVhdG9yfSBmcm9tIFwiLi9ob3N0L2RvbVwiO1xuXG5leHBvcnQge1dlYkx5cmFTY3JpcHR9IGZyb20gXCIuL2hvc3QvZW5naW5lXCI7XG5leHBvcnQge1dlYkFwcGxpY2F0aW9uUnVudGltZX0gZnJvbSBcIi4vaG9zdC9ydW50aW1lXCI7XG5cbmNvbnN0IEx5cmEgPSB7XG5cdFNvdXJjZSxcblx0UGFyc2VyLFxuXHRUb2tlbml6ZXIsXG5cdEV2ZW50UGlwZWxpbmUsXG5cdEhUTUxFbGVtZW50Q3JlYXRvcixcblx0U3RhdGUsXG5cdFByb2dyYW06IChpc0RlYnVnOiBib29sZWFuKTogTHlyYVNjcmlwdFByb2dyYW0gPT4gUHJvZ3JhbShpc0RlYnVnKSxcblx0ZXhlY3V0ZTogKHNvdXJjZTogU291cmNlLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+ID0+IGV4ZWN1dGUoc291cmNlLCBpc0RlYnVnKSxcblx0ZXhlY3V0ZUZyb21TdHJpbmc6IChjb2RlOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4gPT4gZXhlY3V0ZUZyb21TdHJpbmcoY29kZSwgaXNEZWJ1ZyksXG5cdGV4ZWN1dGVGcm9tVXJsOiBhc3luYyAodXJsOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4gPT4gZXhlY3V0ZUZyb21VcmwodXJsLCBpc0RlYnVnKSxcblx0ZXhlY3V0ZVRlc3Q6IChzb3VyY2U6IFNvdXJjZSwgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiBleGVjdXRlVGVzdChzb3VyY2UsIGlzRGVidWcpLFxuXHRleGVjdXRlVGVzdFN0cmluZzogKGNvZGU6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiBleGVjdXRlVGVzdFN0cmluZyhjb2RlLCBpc0RlYnVnKSxcblx0ZXhlY3V0ZVRlc3RVcmw6ICh1cmw6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiBleGVjdXRlVGVzdFVybCh1cmwsIGlzRGVidWcpLFxuXHR0b2tlbml6ZTogKHNvdXJjZTogU291cmNlKTogVG9rZW5bXSA9PiB0b2tlbml6ZShzb3VyY2UpLFxuXHR0b2tlbml6ZVVybDogKHVybDogc3RyaW5nKTogUHJvbWlzZTxUb2tlbltdPiA9PiB0b2tlbml6ZVVybCh1cmwpLFxuXHRwYXJzZVRyZWU6IChzb3VyY2U6IFNvdXJjZSk6IEFTVE5vZGUgPT4gcGFyc2VUcmVlKHNvdXJjZSksXG5cdHBhcnNlVHJlZVVybDogKHVybDogc3RyaW5nKTogUHJvbWlzZTxBU1ROb2RlPiA9PiBwYXJzZVRyZWVVcmwodXJsKSxcbn07XG5cbmZ1bmN0aW9uIFByb2dyYW0oaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogTHlyYVNjcmlwdFByb2dyYW0ge1xuXHRyZXR1cm4gbmV3IEx5cmFTY3JpcHRQcm9ncmFtKGlzRGVidWcpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlKHNvdXJjZTogU291cmNlLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgUHJvZ3JhbShpc0RlYnVnKVxuXHRcdFx0LmV4ZWN1dGUoc291cmNlKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcih3cmFwSnNFcnJvcihlcnJvciwgc291cmNlKVxuXHRcdFx0XHQgICAgICAgICAgICAgIC5mb3JtYXQoKSk7XG5cdFx0fVxuXHRcdHRocm93IGVycm9yO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVGcm9tVXJsKHVybDogc3RyaW5nLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0cmV0dXJuIGF3YWl0IGV4ZWN1dGUoYXdhaXQgZmV0Y2hTb3VyY2UodXJsKSwgaXNEZWJ1Zyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVGcm9tU3RyaW5nKGNvZGU6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHNvdXJjZSA9IG5ldyBTb3VyY2UoY29kZSk7XG5cblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgUHJvZ3JhbShpc0RlYnVnKVxuXHRcdFx0LmV4ZWN1dGUoc291cmNlKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcih3cmFwSnNFcnJvcihlcnJvciwgc291cmNlKVxuXHRcdFx0XHQgICAgICAgICAgICAgIC5mb3JtYXQoKSk7XG5cdFx0fVxuXHRcdHRocm93IGVycm9yO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVUZXN0KHNvdXJjZTogU291cmNlLCBpc0RlYnVnID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgUHJvZ3JhbShpc0RlYnVnKVxuXHRcdFx0LmV4ZWN1dGVUZXN0KHNvdXJjZSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3Iod3JhcEpzRXJyb3IoZXJyb3IsIHNvdXJjZSlcblx0XHRcdFx0ICAgICAgICAgICAgICAuZm9ybWF0KCkpO1xuXHRcdH1cblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlVGVzdFVybCh1cmw6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdHJldHVybiBhd2FpdCBleGVjdXRlVGVzdChhd2FpdCBmZXRjaFNvdXJjZSh1cmwpLCBpc0RlYnVnKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZVRlc3RTdHJpbmcoY29kZTogc3RyaW5nLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgc291cmNlID0gbmV3IFNvdXJjZShjb2RlKTtcblxuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBQcm9ncmFtKGlzRGVidWcpXG5cdFx0XHQuZXhlY3V0ZVRlc3Qoc291cmNlKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcih3cmFwSnNFcnJvcihlcnJvciwgc291cmNlKVxuXHRcdFx0XHQgICAgICAgICAgICAgIC5mb3JtYXQoKSk7XG5cdFx0fVxuXHRcdHRocm93IGVycm9yO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbml6ZShzb3VyY2U6IFNvdXJjZSk6IFRva2VuW10ge1xuXHRyZXR1cm4gbmV3IFRva2VuaXplcihzb3VyY2UpLnRva2VuaXplKCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0b2tlbml6ZVVybCh1cmw6IHN0cmluZyk6IFByb21pc2U8VG9rZW5bXT4ge1xuXHRyZXR1cm4gdG9rZW5pemUoYXdhaXQgZmV0Y2hTb3VyY2UodXJsKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRyZWUoc291cmNlOiBTb3VyY2UpOiBBU1ROb2RlIHtcblx0cmV0dXJuIG5ldyBQYXJzZXIoc291cmNlKS5wYXJzZSgpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGFyc2VUcmVlVXJsKHVybDogc3RyaW5nKTogUHJvbWlzZTxBU1ROb2RlPiB7XG5cdHJldHVybiBwYXJzZVRyZWUoYXdhaXQgZmV0Y2hTb3VyY2UodXJsKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEx5cmE7XG4iCiAgXSwKICAibWFwcGluZ3MiOiAiO0FBRU8sTUFBTSxRQUFRO0FBQUEsU0FDYixTQUFpQjtBQUFBLFNBQ2pCLE9BQWU7QUFBQSxTQUNmLE1BQWM7QUFBQSxTQUNkLE9BQWU7QUFBQSxTQUNmLFFBQWdCO0FBQUEsU0FDaEIsWUFBb0I7QUFBQSxTQUNwQixVQUFrQjtBQUFBLFNBQ2xCLGFBQXFCO0FBQUEsU0FDckIsY0FBc0I7QUFBQSxTQUN0QixNQUFjO0FBQUEsU0FDZCxPQUFlO0FBQUEsU0FDZixTQUFpQjtBQUFBLFNBQ2pCLFVBQWtCO0FBQUEsU0FDbEIsU0FBaUI7QUFBQSxTQUNqQixXQUFtQjtBQUFBLFNBQ25CLFNBQWlCO0FBQUEsU0FDakIsUUFBZ0I7QUFBQSxTQUNoQixPQUFlO0FBQUEsU0FDZixRQUFnQjtBQUFBLFNBQ2hCLEtBQWE7QUFBQSxTQUNiLE9BQWU7QUFBQSxTQUNmLFFBQWdCO0FBQUEsU0FDaEIsVUFBa0I7QUFBQSxTQUNsQixVQUFrQjtBQUFBLFNBQ2xCLEtBQWE7QUFBQSxTQUNiLE9BQWU7QUFBQSxTQUNmLE9BQWU7QUFBQSxTQUVmLHNCQUE4QjtBQUFBLFNBQzlCLHVCQUErQjtBQUFBLFNBQy9CLGFBQXFCO0FBQUEsU0FDckIsY0FBc0I7QUFBQSxTQUN0QixtQkFBMkI7QUFBQSxTQUMzQixvQkFBNEI7QUFBQSxTQUM1QixZQUFvQjtBQUFBLFNBQ3BCLFFBQWdCO0FBQUEsU0FDaEIsUUFBZ0I7QUFB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S0FBYSxVQUFtQixPQUFzQjtBQUFBLEVBQ25GLE9BQU8sTUFBTSxRQUFRLE1BQU0sWUFBWSxHQUFHLEdBQUcsT0FBTztBQUFBO0FBR3JELGVBQWUsaUJBQWlCLENBQUMsTUFBYyxVQUFtQixPQUFzQjtBQUFBLEVBQ3ZGLE1BQU0sU0FBUyxJQUFJLE9BQU8sSUFBSTtBQUFBLEVBRTlCLElBQUk7QUFBQSxJQUNILE9BQU8sTUFBTSxRQUFRLE9BQU8sRUFDMUIsUUFBUSxNQUFNO0FBQUEsSUFDZixPQUFPLE9BQU87QUFBQSxJQUNmLElBQUksaUJBQWlCLE9BQU87QUFBQSxNQUMzQixRQUFRLE1BQU0sWUFBWSxPQUFPLE1BQU0sRUFDdkIsT0FBTyxDQUFDO0FBQUEsSUFDekI7QUFBQSxJQUNBLE1BQU07QUFBQTtBQUFBO0FBSVIsZUFBZSxXQUFXLENBQUMsUUFBZ0IsVUFBVSxPQUFzQjtBQUFBLEVBQzFFLElBQUk7QUFBQSxJQUNILE9BQU8sTUFBTSxRQUFRLE9BQU8sRUFDMUIsWUFBWSxNQUFNO0FBQUEsSUFDbkIsT0FBTyxPQUFPO0FBQUEsSUFDZixJQUFJLGlCQUFpQixPQUFPO0FBQUEsTUFDM0IsUUFBUSxNQUFNLFlBQVksT0FBTyxNQUFNLEVBQ3ZCLE9BQU8sQ0FBQztBQUFBLElBQ3pCO0FBQUEsSUFDQSxNQUFNO0FBQUE7QUFBQTtBQUlSLGVBQWUsY0FBYyxDQUFDLEtBQWEsVUFBbUIsT0FBc0I7QUFBQSxFQUNuRixPQUFPLE1BQU0sWUFBWSxNQUFNLFlBQVksR0FBRyxHQUFHLE9BQU87QUFBQTtBQUd6RCxlQUFlLGlCQUFpQixDQUFDLE1BQWMsVUFBbUIsT0FBc0I7QUFBQSxFQUN2RixNQUFNLFNBQVMsSUFBSSxPQUFPLElBQUk7QUFBQSxFQUU5QixJQUFJO0FBQUEsSUFDSCxPQUFPLE1BQU0sUUFBUSxPQUFPLEVBQzFCLFlBQVksTUFBTTtBQUFBLElBQ25CLE9BQU8sT0FBTztBQUFBLElBQ2YsSUFBSSxpQkFBaUIsT0FBTztBQUFBLE1BQzNCLFFBQVEsTUFBTSxZQUFZLE9BQU8sTUFBTSxFQUN2QixPQUFPLENBQUM7QUFBQSxJQUN6QjtBQUFBLElBQ0EsTUFBTTtBQUFBO0FBQUE7QUFJRCxTQUFTLFFBQVEsQ0FBQyxRQUF5QjtBQUFBLEVBQ2pELE9BQU8sSUFBSSxVQUFVLE1BQU0sRUFBRSxTQUFTO0FBQUE7QUFHdkMsZUFBc0IsV0FBVyxDQUFDLEtBQStCO0FBQUEsRUFDaEUsT0FBTyxTQUFTLE1BQU0sWUFBWSxHQUFHLENBQUM7QUFBQTtBQUdoQyxTQUFTLFNBQVMsQ0FBQyxRQUF5QjtBQUFBLEVBQ2xELE9BQU8sSUFBSSxPQUFPLE1BQU0sRUFBRSxNQUFNO0FBQUE7QUFHakMsZUFBc0IsWUFBWSxDQUFDLEtBQStCO0FBQUEsRUFDakUsT0FBTyxVQUFVLE1BQU0sWUFBWSxHQUFHLENBQUM7QUFBQTtBQUd4QyxJQUFlOyIsCiAgImRlYnVnSWQiOiAiMUEyQzA2MzZCNDNEMkVDQzY0NzU2RTIxNjQ3NTZFMjEiLAogICJuYW1lcyI6IFtdCn0=
