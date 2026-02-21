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
  LYRA_INSTANCE_DIRTY_STATE: "lyra:instance_dirty_state"
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
  markDirty(eventPipeline) {
    this.__isDirty = true;
    eventPipeline.emit(events_default.LYRA_INSTANCE_DIRTY_STATE, { instance: this });
  }
  markClean(eventPipeline) {
    this.__isDirty = false;
    eventPipeline.emit(events_default.LYRA_INSTANCE_DIRTY_STATE, { instance: this });
  }
  static generateInstanceUUID() {
    return self.crypto.randomUUID();
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
      for (const [propertyKey, value] of Object.entries(vNode.props)) {
        if (vNode.component.hasPublicProperty(propertyKey)) {
          vNode.component.setPublicProperty(propertyKey, value);
        }
      }
      const element2 = this.create(this.applicationRuntime.callMethod(vNode.component, "render", []));
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
          instance.markDirty(this.globalEventPipeline);
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
  patcher;
  currentVNode = null;
  isRendering = false;
  constructor(mountPoint, isDebug = false, eventPipeline = new EventPipeline, eventHandlerRegistry = new EventHandlerRegistry) {
    super(new WebLyraScript(eventPipeline, isDebug), eventPipeline, eventHandlerRegistry);
    this.patcher = new HTMLElementPatcher(mountPoint, this);
  }
  async start(url, className = "App") {
    await this.engine.executeEntryFile(url, className);
    this.listenToDomEvents();
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
    this.eventPipeline.on(events_default2.DOM_EVENT, ({ invoke }) => {
      invoke();
    });
    this.eventPipeline.on(events_default.LYRA_INSTANCE_DIRTY_STATE, (payload) => {
      this.requestRender();
    });
  }
  performRender() {
    this.isRendering = true;
    const next = this.renderRootComponent();
    this.patcher.patch(this.currentVNode, next);
    this.currentVNode = next;
    this.isRendering = false;
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

//# debugId=4ABBE62ED3E3F4EA64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibGFuZ3VhZ2Uvc3JjL2NvcmUvZ3JhbW1hci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9hc3QudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvdG9rZW5pemVyL3Rva2VuaXplci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9lcnJvcnMudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvbmF0aXZlX2NsYXNzLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX2NvbnZlcnNpb24udHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9zdHJpbmcudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9zeXN0ZW0udHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9hc3NlcnQudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9udW1iZXIudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9hcnJheS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9ldmVudC9zdGF0ZS50cyIsICJsYW5ndWFnZS9zcmMvbGlicmFyeS9jbGFzc2VzL3N0YXRlLnRzIiwgImxhbmd1YWdlL3NyYy9saWJyYXJ5L2NsYXNzZXMvZXZlbnQudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvbmF0aXZlX2NsYXNzZXMudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvbmF0aXZlX2Z1bmN0aW9ucy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS90eXBlcy90eXBlX29iamVjdHMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvdHlwZXMvYXV0b2JveGluZy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9ydW50aW1lLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2V2ZW50L2V2ZW50cy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL3BhcnNlci9wYXJzZXJfc3RhdG1lbnRzLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL3BhcnNlci9wYXJzZXIudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcmVnaXN0cnkudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvdHlwZXMvdHlwZWNoZWNrZXIudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvbGlua2VyL2RlcGVuZGVuY2llcy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9saW5rZXIvbGlua2VyLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL3Rlc3RzL3Rlc3RzdWl0ZXMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXIudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvbG9hZGVycy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9ldmVudC9waXBlbGluZS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9wcm9ncmFtLnRzIiwgImxhbmd1YWdlL3NyYy9ob3N0L2V2ZW50cy50cyIsICJsYW5ndWFnZS9zcmMvaG9zdC9kb20udHMiLCAibGFuZ3VhZ2Uvc3JjL2hvc3QvZW5naW5lLnRzIiwgImxhbmd1YWdlL3NyYy9ob3N0L3JlZ2lzdHJ5LnRzIiwgImxhbmd1YWdlL3NyYy9ob3N0L3J1bnRpbWUudHMiLCAibGFuZ3VhZ2Uvc3JjL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWwogICAgImltcG9ydCB0eXBlIHtTb3VyY2V9IGZyb20gXCIuL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmV4cG9ydCBjbGFzcyBHUkFNTUFSIHtcblx0c3RhdGljIElNUE9SVDogc3RyaW5nID0gJ2ltcG9ydCc7XG5cdHN0YXRpYyBGUk9NOiBzdHJpbmcgPSAnZnJvbSc7XG5cdHN0YXRpYyBMRVQ6IHN0cmluZyA9ICdsZXQnO1xuXHRzdGF0aWMgT1BFTjogc3RyaW5nID0gJ29wZW4nO1xuXHRzdGF0aWMgQ0xBU1M6IHN0cmluZyA9ICdjbGFzcyc7XG5cdHN0YXRpYyBJTlRFUkZBQ0U6IHN0cmluZyA9ICdpbnRlcmZhY2UnO1xuXHRzdGF0aWMgRVhURU5EUzogc3RyaW5nID0gJ2V4dGVuZHMnO1xuXHRzdGF0aWMgSU1QTEVNRU5UUzogc3RyaW5nID0gJ2ltcGxlbWVudHMnO1xuXHRzdGF0aWMgQ09OU1RSVUNUT1I6IHN0cmluZyA9ICdjb25zdHJ1Y3Rvcic7XG5cdHN0YXRpYyBORVc6IHN0cmluZyA9ICduZXcnO1xuXHRzdGF0aWMgVEhJUzogc3RyaW5nID0gJ3RoaXMnO1xuXHRzdGF0aWMgUFVCTElDOiBzdHJpbmcgPSAncHVibGljJztcblx0c3RhdGljIFBSSVZBVEU6IHN0cmluZyA9ICdwcml2YXRlJztcblx0c3RhdGljIFNUQVRJQzogc3RyaW5nID0gJ3N0YXRpYyc7XG5cdHN0YXRpYyBSRUFET05MWTogc3RyaW5nID0gJ3JlYWRvbmx5Jztcblx0c3RhdGljIFJFVFVSTjogc3RyaW5nID0gJ3JldHVybic7XG5cdHN0YXRpYyBTVVBFUjogc3RyaW5nID0gJ3N1cGVyJztcblx0c3RhdGljIFRSVUU6IHN0cmluZyA9ICd0cnVlJztcblx0c3RhdGljIEZBTFNFOiBzdHJpbmcgPSAnZmFsc2UnO1xuXHRzdGF0aWMgSUY6IHN0cmluZyA9ICdpZic7XG5cdHN0YXRpYyBFTFNFOiBzdHJpbmcgPSAnZWxzZSc7XG5cdHN0YXRpYyBNQVRDSDogc3RyaW5nID0gJ21hdGNoJztcblx0c3RhdGljIERFRkFVTFQ6IHN0cmluZyA9ICdkZWZhdWx0Jztcblx0c3RhdGljIEZPUkVBQ0g6IHN0cmluZyA9ICdmb3JlYWNoJztcblx0c3RhdGljIElOOiBzdHJpbmcgPSAnaW4nO1xuXHRzdGF0aWMgTlVMTDogc3RyaW5nID0gJ251bGwnO1xuXHRzdGF0aWMgVkRPTTogc3RyaW5nID0gJ3Zkb20nO1xuXG5cdHN0YXRpYyBCUkFDS0VUX1NRVUFSRV9PUEVOOiBzdHJpbmcgPSAnWyc7XG5cdHN0YXRpYyBCUkFDS0VUX1NRVUFSRV9DTE9TRTogc3RyaW5nID0gJ10nO1xuXHRzdGF0aWMgQlJBQ0VfT1BFTjogc3RyaW5nID0gJ3snO1xuXHRzdGF0aWMgQlJBQ0VfQ0xPU0U6IHN0cmluZyA9ICd9Jztcblx0c3RhdGljIFBBUkVOVEhFU0VTX09QRU46IHN0cmluZyA9ICcoJztcblx0c3RhdGljIFBBUkVOVEhFU0VTX0NMT1NFOiBzdHJpbmcgPSAnKSc7XG5cdHN0YXRpYyBTRU1JQ09MT046IHN0cmluZyA9ICc7Jztcblx0c3RhdGljIENPTE9OOiBzdHJpbmcgPSAnOic7XG5cdHN0YXRpYyBDT01NQTogc3RyaW5nID0gJywnO1xuXG5cdHN0YXRpYyBBUlJPVzogc3RyaW5nID0gJy0+Jztcblx0c3RhdGljIERPVDogc3RyaW5nID0gJy4nO1xuXHRzdGF0aWMgQVNTSUdOOiBzdHJpbmcgPSAnPSc7XG5cdHN0YXRpYyBQTFVTOiBzdHJpbmcgPSAnKyc7XG5cdHN0YXRpYyBNSU5VUzogc3RyaW5nID0gJy0nO1xuXHRzdGF0aWMgRElWSURFOiBzdHJpbmcgPSAnLyc7XG5cdHN0YXRpYyBNVUxUSVBMWTogc3RyaW5nID0gJyonO1xuXHRzdGF0aWMgTU9EVUxVUzogc3RyaW5nID0gJyUnO1xuXG5cdHN0YXRpYyBFWENMQU1BVElPTl9NQVJLOiBzdHJpbmcgPSAnISc7XG5cdHN0YXRpYyBRVUVTVElPTl9NQVJLOiBzdHJpbmcgPSAnPyc7XG5cdHN0YXRpYyBMRVNTX1RIQU46IHN0cmluZyA9ICc8Jztcblx0c3RhdGljIEdSRUFURVJfVEhBTjogc3RyaW5nID0gJz4nO1xuXHRzdGF0aWMgTEVTU19FUVVBTDogc3RyaW5nID0gJzw9Jztcblx0c3RhdGljIEdSRUFURVJfRVFVQUw6IHN0cmluZyA9ICc+PSc7XG5cdHN0YXRpYyBFUVVBTDogc3RyaW5nID0gJz09Jztcblx0c3RhdGljIE5PVF9FUVVBTDogc3RyaW5nID0gJyE9Jztcblx0c3RhdGljIEFORDogc3RyaW5nID0gJyYmJztcblx0c3RhdGljIE9SOiBzdHJpbmcgPSAnfHwnO1xuXG5cdHN0YXRpYyBYTUxfQ0xPU0VfVEFHOiBzdHJpbmcgPSAnLz4nO1xuXHRzdGF0aWMgWE1MX09QRU5fQ0xPU0VfVEFHOiBzdHJpbmcgPSAnPC8nO1xuXG5cdHN0YXRpYyBLRVlXT1JEUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5JTVBPUlQsXG5cdFx0R1JBTU1BUi5GUk9NLFxuXHRcdEdSQU1NQVIuT1BFTixcblx0XHRHUkFNTUFSLkNMQVNTLFxuXHRcdEdSQU1NQVIuSU5URVJGQUNFLFxuXHRcdEdSQU1NQVIuRVhURU5EUyxcblx0XHRHUkFNTUFSLklNUExFTUVOVFMsXG5cdFx0R1JBTU1BUi5QVUJMSUMsXG5cdFx0R1JBTU1BUi5QUklWQVRFLFxuXHRcdEdSQU1NQVIuU1RBVElDLFxuXHRcdEdSQU1NQVIuUkVBRE9OTFksXG5cdFx0R1JBTU1BUi5SRVRVUk4sXG5cdFx0R1JBTU1BUi5MRVQsXG5cdFx0R1JBTU1BUi5ORVcsXG5cdFx0R1JBTU1BUi5USElTLFxuXHRcdEdSQU1NQVIuSUYsXG5cdFx0R1JBTU1BUi5FTFNFLFxuXHRcdEdSQU1NQVIuTUFUQ0gsXG5cdFx0R1JBTU1BUi5ERUZBVUxULFxuXHRcdEdSQU1NQVIuRk9SRUFDSCxcblx0XHRHUkFNTUFSLklOLFxuXHRcdEdSQU1NQVIuTlVMTCxcblx0XHRHUkFNTUFSLlZET00sXG5cdF07XG5cdHN0YXRpYyBBUklUSE1FVElDOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLlBMVVMsXG5cdFx0R1JBTU1BUi5NSU5VUyxcblx0XHRHUkFNTUFSLkRJVklERSxcblx0XHRHUkFNTUFSLk1VTFRJUExZLFxuXHRcdEdSQU1NQVIuTU9EVUxVU1xuXHRdO1xuXHRzdGF0aWMgQ09NUEFSSVNPTjogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5MRVNTX1RIQU4sXG5cdFx0R1JBTU1BUi5HUkVBVEVSX1RIQU4sXG5cdFx0R1JBTU1BUi5MRVNTX0VRVUFMLFxuXHRcdEdSQU1NQVIuR1JFQVRFUl9FUVVBTFxuXHRdO1xuXHRzdGF0aWMgRVFVQUxJVFk6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuRVFVQUwsXG5cdFx0R1JBTU1BUi5OT1RfRVFVQUxcblx0XTtcblx0c3RhdGljIExPR0lDQUw6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuQU5ELFxuXHRcdEdSQU1NQVIuT1Jcblx0XTtcblx0c3RhdGljIE9QRVJBVE9SUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5FWENMQU1BVElPTl9NQVJLLFxuXHRcdEdSQU1NQVIuUVVFU1RJT05fTUFSSyxcblx0XHRHUkFNTUFSLkFSUk9XLFxuXHRcdEdSQU1NQVIuRE9ULFxuXHRcdEdSQU1NQVIuQVNTSUdOLFxuXHRcdEdSQU1NQVIuUExVUyxcblx0XHRHUkFNTUFSLk1JTlVTLFxuXHRcdEdSQU1NQVIuRElWSURFLFxuXHRcdEdSQU1NQVIuTVVMVElQTFksXG5cdFx0R1JBTU1BUi5NT0RVTFVTLFxuXHRcdEdSQU1NQVIuTEVTU19USEFOLFxuXHRcdEdSQU1NQVIuR1JFQVRFUl9USEFOLFxuXHRcdEdSQU1NQVIuTEVTU19FUVVBTCxcblx0XHRHUkFNTUFSLkdSRUFURVJfRVFVQUwsXG5cdFx0R1JBTU1BUi5FUVVBTCxcblx0XHRHUkFNTUFSLk5PVF9FUVVBTCxcblx0XHRHUkFNTUFSLkFORCxcblx0XHRHUkFNTUFSLk9SLFxuXHRdO1xuXHRzdGF0aWMgTUFUSF9PUEVSQVRPUlM6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuUExVUyxcblx0XHRHUkFNTUFSLk1JTlVTLFxuXHRcdEdSQU1NQVIuRElWSURFLFxuXHRcdEdSQU1NQVIuTVVMVElQTFksXG5cdFx0R1JBTU1BUi5NT0RVTFVTXG5cdF07XG5cdHN0YXRpYyBMT0dJQ19PUEVSQVRPUlM6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuTEVTU19USEFOLFxuXHRcdEdSQU1NQVIuR1JFQVRFUl9USEFOLFxuXHRcdEdSQU1NQVIuTEVTU19FUVVBTCxcblx0XHRHUkFNTUFSLkdSRUFURVJfRVFVQUwsXG5cdFx0R1JBTU1BUi5FUVVBTCxcblx0XHRHUkFNTUFSLk5PVF9FUVVBTCxcblx0XHRHUkFNTUFSLkFORCxcblx0XHRHUkFNTUFSLk9SLFxuXHRdO1xuXHRzdGF0aWMgUFVOQ1RVQVRJT05TOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX09QRU4sXG5cdFx0R1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9DTE9TRSxcblx0XHRHUkFNTUFSLkJSQUNFX09QRU4sXG5cdFx0R1JBTU1BUi5CUkFDRV9DTE9TRSxcblx0XHRHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4sXG5cdFx0R1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSxcblx0XHRHUkFNTUFSLlNFTUlDT0xPTixcblx0XHRHUkFNTUFSLkNPTE9OLFxuXHRcdEdSQU1NQVIuQ09NTUFcblx0XTtcblx0c3RhdGljIERPTV9PUEVSQVRPUlM6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuQVJST1csXG5cdFx0R1JBTU1BUi5ET1QsXG5cdFx0R1JBTU1BUi5BU1NJR04sXG5cdFx0R1JBTU1BUi5MRVNTX1RIQU4sXG5cdFx0R1JBTU1BUi5HUkVBVEVSX1RIQU4sXG5cdFx0R1JBTU1BUi5YTUxfT1BFTl9DTE9TRV9UQUcsXG5cdFx0R1JBTU1BUi5YTUxfQ0xPU0VfVEFHXG5cdF07XG5cdHN0YXRpYyBET01fUFVOQ1RVQVRJT05TOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX09QRU4sXG5cdFx0R1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9DTE9TRSxcblx0XHRHUkFNTUFSLkJSQUNFX09QRU4sXG5cdFx0R1JBTU1BUi5CUkFDRV9DTE9TRSxcblx0XHRHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4sXG5cdFx0R1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSxcblx0XHRHUkFNTUFSLlNFTUlDT0xPTixcblx0XHRHUkFNTUFSLkNPTE9OLFxuXHRcdEdSQU1NQVIuQ09NTUFcblx0XTtcbn1cblxuZXhwb3J0IGNsYXNzIFRZUEVfRU5VTSB7XG5cdHN0YXRpYyBNSVhFRDogc3RyaW5nID0gJ21peGVkJztcblx0c3RhdGljIFZPSUQ6IHN0cmluZyA9ICd2b2lkJztcblx0c3RhdGljIE5VTUJFUjogc3RyaW5nID0gJ251bWJlcic7XG5cdHN0YXRpYyBTVFJJTkc6IHN0cmluZyA9ICdzdHJpbmcnO1xuXHRzdGF0aWMgQk9PTEVBTjogc3RyaW5nID0gJ2Jvb2xlYW4nO1xuXHRzdGF0aWMgQVJSQVk6IHN0cmluZyA9ICdhcnJheSc7XG5cdHN0YXRpYyBOVUxMOiBzdHJpbmcgPSAnbnVsbCc7XG59XG5cbmV4cG9ydCBjbGFzcyBSdWxlcyB7XG5cdHN0YXRpYyBLRVlXT1JEUzogU2V0PHN0cmluZz4gPSBuZXcgU2V0KEdSQU1NQVIuS0VZV09SRFMpO1xuXHRzdGF0aWMgT1BFUkFUT1JTOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoR1JBTU1BUi5PUEVSQVRPUlMpO1xuXHRzdGF0aWMgUFVOQ1RVQVRJT05TOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoR1JBTU1BUi5QVU5DVFVBVElPTlMpO1xuXHRzdGF0aWMgRE9NX09QRVJBVE9SUzogU2V0PHN0cmluZz4gPSBuZXcgU2V0KEdSQU1NQVIuRE9NX09QRVJBVE9SUyk7XG5cdHN0YXRpYyBET01fUFVOQ1RVQVRJT05TOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoR1JBTU1BUi5ET01fUFVOQ1RVQVRJT05TKTtcblx0c3RhdGljIENPTU1FTlRfTElORTogc3RyaW5nID0gJy8vJztcblxuXHRpc0FscGhhKGNoYXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAvW2Etel9dL2kudGVzdChjaGFyKTtcblx0fVxuXG5cdGlzTnVtZXJpYyhjaGFyOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gL1swLTldLy50ZXN0KGNoYXIpO1xuXHR9XG5cblx0aXNBbHBoYU51bWVyaWMoY2hhcjogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaXNBbHBoYShjaGFyKSB8fCB0aGlzLmlzTnVtZXJpYyhjaGFyKTtcblx0fVxuXG5cdGlzV2hpdGVzcGFjZShjaGFyOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gL1xccy8udGVzdChjaGFyKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVG9rZW5UeXBlIHtcblx0c3RhdGljIENPTU1FTlQ6IHN0cmluZyA9ICdjb21tZW50Jztcblx0c3RhdGljIEFOTk9UQVRJT046IHN0cmluZyA9ICdhbm5vdGF0aW9uJztcblx0c3RhdGljIElERU5USUZJRVI6IHN0cmluZyA9ICdpZGVudGlmaWVyJztcblx0c3RhdGljIEtFWVdPUkQ6IHN0cmluZyA9ICdrZXl3b3JkJztcblx0c3RhdGljIFBVTkNUVUFUSU9OOiBzdHJpbmcgPSAncHVuY3R1YXRpb24nO1xuXHRzdGF0aWMgTlVNQkVSOiBzdHJpbmcgPSAnbnVtYmVyJztcblx0c3RhdGljIFNUUklORzogc3RyaW5nID0gJ3N0cmluZyc7XG5cdHN0YXRpYyBCT09MRUFOOiBzdHJpbmcgPSAnYm9vbGVhbic7XG5cdHN0YXRpYyBPUEVSQVRPUjogc3RyaW5nID0gJ29wZXJhdG9yJztcblx0c3RhdGljIFRFWFQ6IHN0cmluZyA9ICd0ZXh0Jztcblx0c3RhdGljIEVPRjogc3RyaW5nID0gJ2VvZic7XG59XG5cbmV4cG9ydCBjbGFzcyBUb2tlbiB7XG5cdHR5cGU6IHN0cmluZztcblx0dmFsdWU6IHN0cmluZztcblx0bGluZTogbnVtYmVyID0gMTtcblx0Y29sdW1uOiBudW1iZXIgPSAxO1xuXHRzdGFydDogbnVtYmVyO1xuXHRlbmQ6IG51bWJlcjtcblx0c291cmNlOiBTb3VyY2U7XG5cblx0Y29uc3RydWN0b3IodHlwZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlciwgc291cmNlOiBTb3VyY2UpIHtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0XHR0aGlzLnN0YXJ0ID0gc3RhcnQ7XG5cdFx0dGhpcy5lbmQgPSBlbmQ7XG5cdFx0dGhpcy5zb3VyY2UgPSBzb3VyY2U7XG5cdH1cblxuXHR3aXRoTGluZUFuZENvbHVtbihsaW5lOiBudW1iZXIsIGNvbHVtbjogbnVtYmVyKTogVG9rZW4ge1xuXHRcdHRoaXMubGluZSA9IGxpbmU7XG5cdFx0dGhpcy5jb2x1bW4gPSBjb2x1bW47XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtHUkFNTUFSLCBUWVBFX0VOVU19IGZyb20gXCIuL2dyYW1tYXJcIjtcbmltcG9ydCB7TW9kaWZpZXJzLCBTdXBlckNsYXNzfSBmcm9tIFwiLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge1NvdXJjZVNwYW59IGZyb20gXCIuL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmV4cG9ydCBjbGFzcyBBU1ROb2RlVHlwZSB7XG5cdHN0YXRpYyBQUk9HUkFNTSA9ICdwcm9ncmFtJztcblx0c3RhdGljIElOREVYID0gJ2luZGV4Jztcblx0c3RhdGljIElERU5USUZJRVIgPSAnaWRlbnRpZmllcic7XG5cdHN0YXRpYyBBTk5PVEFUSU9OID0gJ2Fubm90YXRpb24nO1xuXHRzdGF0aWMgUEFSQU1FVEVSID0gJ3BhcmFtZXRlcic7XG5cdHN0YXRpYyBJTVBPUlQgPSBHUkFNTUFSLklNUE9SVDtcblx0c3RhdGljIE5VTUJFUiA9IFRZUEVfRU5VTS5OVU1CRVI7XG5cdHN0YXRpYyBTVFJJTkcgPSBUWVBFX0VOVU0uU1RSSU5HO1xuXHRzdGF0aWMgQk9PTEVBTiA9IFRZUEVfRU5VTS5CT09MRUFOO1xuXHRzdGF0aWMgTlVMTCA9IFRZUEVfRU5VTS5OVUxMO1xuXHRzdGF0aWMgTkVXID0gR1JBTU1BUi5ORVc7XG5cdHN0YXRpYyBDTEFTUyA9IEdSQU1NQVIuQ0xBU1M7XG5cdHN0YXRpYyBJTlRFUkZBQ0UgPSBHUkFNTUFSLklOVEVSRkFDRTtcblx0c3RhdGljIENPTlNUUlVDVE9SID0gR1JBTU1BUi5DT05TVFJVQ1RPUjtcblx0c3RhdGljIFRISVMgPSBHUkFNTUFSLlRISVM7XG5cdHN0YXRpYyBSRVRVUk4gPSBHUkFNTUFSLlJFVFVSTjtcblx0c3RhdGljIFZET00gPSAndmRvbV9kZWNsYXJhdGlvbic7XG5cdHN0YXRpYyBWRE9NX1RFWFQgPSAndmRvbV90ZXh0X2RlY2xhcmF0aW9uJztcblx0c3RhdGljIFVOQVJZID0gJ3VuYXJ5X2V4cHJlc3Npb24nO1xuXHRzdGF0aWMgTEFNQkRBID0gJ2xhbWJkYV9leHByZXNzaW9uJztcblx0c3RhdGljIEFSUkFZID0gJ2FycmF5X2RlY2xhcmF0aW9uJztcblx0c3RhdGljIFRZUEUgPSAndHlwZV9kZWNsYXJhdGlvbic7XG5cdHN0YXRpYyBGSUVMRCA9ICdmaWVsZF9kZWNsYXJhdGlvbic7XG5cdHN0YXRpYyBNRU1CRVIgPSAnbWVtYmVyX2V4cHJlc3Npb24nO1xuXHRzdGF0aWMgTUVUSE9EID0gJ21ldGhvZF9kZWNsYXJhdGlvbic7XG5cdHN0YXRpYyBDQUxMID0gJ2NhbGxfZXhwcmVzc2lvbic7XG5cdHN0YXRpYyBWQVJJQUJMRSA9ICd2YXJpYWJsZV9kZWNsYXJhdGlvbic7XG5cdHN0YXRpYyBFWFBSRVNTSU9OID0gJ2V4cHJlc3Npb25fc3RhdGVtZW50Jztcblx0c3RhdGljIEJJTkFSWSA9ICdiaW5hcnlfZXhwcmVzc2lvbic7XG5cdHN0YXRpYyBBU1NJR05NRU5UID0gJ2Fzc2lnbm1lbnRfZXhwcmVzc2lvbic7XG5cdHN0YXRpYyBJRiA9ICdpZl9zdGF0ZW1lbnQnO1xuXHRzdGF0aWMgVEhFTiA9ICd0aGVuX3N0YXRlbWVudCc7XG5cdHN0YXRpYyBFTFNFID0gJ2Vsc2Vfc3RhdGVtZW50Jztcblx0c3RhdGljIE1BVENIID0gJ21hdGNoX3N0YXRlbWVudCc7XG5cdHN0YXRpYyBNQVRDSF9DQVNFID0gJ21hdGNoX2Nhc2Vfc3RhdGVtZW50Jztcblx0c3RhdGljIEZPUkVBQ0ggPSAnZm9yZWFjaF9zdGF0ZW1lbnQnO1xufVxuXG5leHBvcnQgY2xhc3MgQVNUTm9kZSB7XG5cdGlzRXhwcmVzc2lvbjogYm9vbGVhbiA9IGZhbHNlO1xuXHRuYW1lOiBzdHJpbmcgPSAnJztcblxuXHRzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGw7XG5cdHR5cGU6IHN0cmluZztcblx0dmFsdWU6IGFueSB8IG51bGwgPSBudWxsO1xuXHRjaGlsZHJlbjogQVNUTm9kZVtdO1xuXG5cdGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZywgY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdKSB7XG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHR0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVENhbGxOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGNhbGxlZTogQVNUTm9kZTtcblx0YXJndW1lbnRzOiBBU1ROb2RlW107XG5cblx0Y29uc3RydWN0b3IoY2FsbGVlOiBBU1ROb2RlLCBhcmdzOiBBU1ROb2RlW10gPSBbXSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkNBTEwpO1xuXG5cdFx0dGhpcy5jYWxsZWUgPSBjYWxsZWU7XG5cdFx0dGhpcy5hcmd1bWVudHMgPSBhcmdzO1xuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUTmV3Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRhcmd1bWVudHM6IEFTVE5vZGVbXTtcblx0dHlwZUFubm90YXRpb246IEFTVFR5cGVOb2RlO1xuXG5cdGNvbnN0cnVjdG9yKGFyZ3M6IEFTVE5vZGVbXSwgdHlwZUFubm90YXRpb246IEFTVFR5cGVOb2RlKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuTkVXKTtcblxuXHRcdHRoaXMuYXJndW1lbnRzID0gYXJncztcblx0XHR0aGlzLnR5cGVBbm5vdGF0aW9uID0gdHlwZUFubm90YXRpb247XG5cdFx0dGhpcy5uYW1lID0gdHlwZUFubm90YXRpb24ubmFtZTtcblx0XHR0aGlzLmlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEJpbmFyeU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0bGVmdDogQVNUTm9kZTtcblx0cmlnaHQ6IEFTVE5vZGU7XG5cdG9wZXJhdG9yOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IobGVmdDogQVNUTm9kZSwgcmlnaHQ6IEFTVE5vZGUsIG9wZXJhdG9yOiBzdHJpbmcpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5CSU5BUlkpO1xuXG5cdFx0dGhpcy5sZWZ0ID0gbGVmdDtcblx0XHR0aGlzLnJpZ2h0ID0gcmlnaHQ7XG5cdFx0dGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUQXNzaWdubWVudE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0bGVmdDogQVNUTm9kZTtcblx0cmlnaHQ6IEFTVE5vZGU7XG5cblx0Y29uc3RydWN0b3IobGVmdDogQVNUTm9kZSwgcmlnaHQ6IEFTVE5vZGUpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5BU1NJR05NRU5UKTtcblxuXHRcdHRoaXMubGVmdCA9IGxlZnQ7XG5cdFx0dGhpcy5yaWdodCA9IHJpZ2h0O1xuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUTWVtYmVyTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRvYmplY3Q6IEFTVE5vZGU7XG5cdHByb3BlcnR5OiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3Iob2JqZWN0OiBBU1ROb2RlLCBwcm9wZXJ0eTogc3RyaW5nKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuTUVNQkVSKTtcblxuXHRcdHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuXHRcdHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcblx0XHR0aGlzLmlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFVuYXJ5Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRvcGVyYXRvcjogc3RyaW5nO1xuXHRhcmd1bWVudDogQVNUTm9kZSB8IEFTVFVuYXJ5Tm9kZTtcblxuXHRjb25zdHJ1Y3RvcihvcGVyYXRvcjogc3RyaW5nLCBhcmd1bWVudDogQVNUTm9kZSB8IEFTVFVuYXJ5Tm9kZSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLlVOQVJZKTtcblxuXHRcdHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcblx0XHR0aGlzLmFyZ3VtZW50ID0gYXJndW1lbnQ7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RJbmRleE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0b2JqZWN0OiBBU1ROb2RlO1xuXHRpbmRleDogQVNUTm9kZTtcblxuXHRjb25zdHJ1Y3RvcihvYmplY3Q6IEFTVE5vZGUsIGluZGV4OiBBU1ROb2RlKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuSU5ERVgpO1xuXG5cdFx0dGhpcy5vYmplY3QgPSBvYmplY3Q7XG5cdFx0dGhpcy5pbmRleCA9IGluZGV4O1xuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUQXJyYXlOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGVsZW1lbnRzOiBBU1ROb2RlW10gPSBbXTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5BUlJBWSk7XG5cblx0XHR0aGlzLmlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVExhbWJkYU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0cGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdO1xuXHRyZXR1cm5UeXBlOiBBU1RUeXBlTm9kZTtcblxuXHRjb25zdHJ1Y3RvcihwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sIHJldHVyblR5cGU6IEFTVFR5cGVOb2RlLCBjaGlsZHJlbjogQVNUTm9kZVtdKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuTEFNQkRBLCBjaGlsZHJlbik7XG5cblx0XHR0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuXHRcdHRoaXMucmV0dXJuVHlwZSA9IHJldHVyblR5cGU7XG5cblx0XHR0aGlzLmlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEZpZWxkTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRtb2RpZmllcnM6IE1vZGlmaWVycztcblx0ZmllbGRUeXBlOiBBU1RUeXBlTm9kZSB8IG51bGw7XG5cdGluaXQ6IEFTVE5vZGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIG1vZGlmaWVyczogTW9kaWZpZXJzLCBmaWVsZFR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbCwgaW5pdDogQVNUTm9kZSB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuRklFTEQpO1xuXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcblx0XHR0aGlzLmZpZWxkVHlwZSA9IGZpZWxkVHlwZTtcblx0XHR0aGlzLmluaXQgPSBpbml0O1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RWYXJpYWJsZU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0dHlwZUFubm90YXRpb246IEFTVFR5cGVOb2RlIHwgbnVsbCA9IG51bGw7XG5cdGluaXQ6IEFTVE5vZGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGVBbm5vdGF0aW9uOiBBU1RUeXBlTm9kZSB8IG51bGwgPSBudWxsLCBpbml0OiBBU1ROb2RlIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5WQVJJQUJMRSk7XG5cblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMudHlwZUFubm90YXRpb24gPSB0eXBlQW5ub3RhdGlvbjtcblx0XHR0aGlzLmluaXQgPSBpbml0O1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRleHByOiBBU1ROb2RlO1xuXG5cdGNvbnN0cnVjdG9yKGV4cHI6IEFTVE5vZGUpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5FWFBSRVNTSU9OKTtcblxuXHRcdHRoaXMuZXhwciA9IGV4cHI7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFJldHVybk5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0YXJndW1lbnQ6IEFTVE5vZGUgfCBBU1RFeHByZXNzaW9uTm9kZSB8IG51bGw7XG5cblx0Y29uc3RydWN0b3IoYXJndW1lbnQ6IEFTVE5vZGUgfCBBU1RFeHByZXNzaW9uTm9kZSB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuUkVUVVJOKTtcblxuXHRcdHRoaXMuYXJndW1lbnQgPSBhcmd1bWVudDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUQ2xhc3NOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGFubm90YXRpb25zOiBBU1RBbm5vdGF0aW9uTm9kZVtdO1xuXHRtb2RpZmllcnM6IE1vZGlmaWVycztcblx0dHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdO1xuXHRzdXBlckNsYXNzOiBTdXBlckNsYXNzIHwgbnVsbDtcblx0aW1wbGVtZW50c0ludGVyZmFjZXM6IEFTVFR5cGVOb2RlW107XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0bmFtZTogc3RyaW5nLFxuXHRcdGFubm90YXRpb25zOiBBU1RBbm5vdGF0aW9uTm9kZVtdLFxuXHRcdG1vZGlmaWVyczogTW9kaWZpZXJzLFxuXHRcdHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXSxcblx0XHRpbXBsZW1lbnRzSW50ZXJmYWNlczogQVNUVHlwZU5vZGVbXSxcblx0XHRzdXBlckNsYXNzOiBTdXBlckNsYXNzIHwgbnVsbCA9IG51bGwsXG5cdFx0Y2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdXG5cdCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkNMQVNTLCBjaGlsZHJlbik7XG5cblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuYW5ub3RhdGlvbnMgPSBhbm5vdGF0aW9ucztcblx0XHR0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcblx0XHR0aGlzLnR5cGVQYXJhbWV0ZXJzID0gdHlwZVBhcmFtZXRlcnM7XG5cdFx0dGhpcy5zdXBlckNsYXNzID0gc3VwZXJDbGFzcztcblx0XHR0aGlzLmltcGxlbWVudHNJbnRlcmZhY2VzID0gaW1wbGVtZW50c0ludGVyZmFjZXM7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEludGVyZmFjZU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0YW5ub3RhdGlvbnM6IEFTVEFubm90YXRpb25Ob2RlW107XG5cdG1vZGlmaWVyczogTW9kaWZpZXJzO1xuXHR0eXBlUGFyYW1ldGVyczogc3RyaW5nW107XG5cdGV4dGVuZHNJbnRlcmZhY2VzOiBzdHJpbmdbXTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0YW5ub3RhdGlvbnM6IEFTVEFubm90YXRpb25Ob2RlW10sXG5cdFx0bW9kaWZpZXJzOiBNb2RpZmllcnMsXG5cdFx0dHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdLFxuXHRcdGV4dGVuZHNJbnRlcmZhY2VzOiBzdHJpbmdbXSxcblx0XHRjaGlsZHJlbjogQVNUTm9kZVtdID0gW11cblx0KSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuSU5URVJGQUNFLCBjaGlsZHJlbik7XG5cblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuYW5ub3RhdGlvbnMgPSBhbm5vdGF0aW9ucztcblx0XHR0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcblx0XHR0aGlzLnR5cGVQYXJhbWV0ZXJzID0gdHlwZVBhcmFtZXRlcnM7XG5cdFx0dGhpcy5leHRlbmRzSW50ZXJmYWNlcyA9IGV4dGVuZHNJbnRlcmZhY2VzO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RBbm5vdGF0aW9uTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRwcm9wZXJ0aWVzOiBNYXA8c3RyaW5nLCBBU1ROb2RlPiA9IG5ldyBNYXAoKTtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5BTk5PVEFUSU9OKTtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RQYXJhbWV0ZXJOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdHR5cGVBbm5vdGF0aW9uOiBBU1RUeXBlTm9kZSB8IG51bGw7XG5cdGRlZmF1bHRWYWx1ZTogQVNUTm9kZSB8IG51bGw7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGUgfCBudWxsLCBkZWZhdWx0VmFsdWU6IEFTVE5vZGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLlBBUkFNRVRFUik7XG5cdFx0dGhpcy50eXBlQW5ub3RhdGlvbiA9IHR5cGVBbm5vdGF0aW9uO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5kZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVE1ldGhvZE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0YW5ub3RhdGlvbnM6IEFTVEFubm90YXRpb25Ob2RlW107XG5cdG1vZGlmaWVyczogTW9kaWZpZXJzO1xuXHR0eXBlUGFyYW1ldGVyczogc3RyaW5nW107XG5cdHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXTtcblx0cmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsO1xuXG5cblx0Y29uc3RydWN0b3IoXG5cdFx0bmFtZTogc3RyaW5nLFxuXHRcdHR5cGU6IHN0cmluZyxcblx0XHRhbm5vdGF0aW9uczogQVNUQW5ub3RhdGlvbk5vZGVbXSxcblx0XHRtb2RpZmllcnM6IE1vZGlmaWVycyxcblx0XHR0eXBlUGFyYW1ldGVyczogc3RyaW5nW10sXG5cdFx0cGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdLFxuXHRcdHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbCA9IG51bGwsXG5cdFx0Y2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdLFxuXHQpIHtcblx0XHRzdXBlcih0eXBlLCBjaGlsZHJlbik7XG5cblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuYW5ub3RhdGlvbnMgPSBhbm5vdGF0aW9ucztcblx0XHR0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcblx0XHR0aGlzLnR5cGVQYXJhbWV0ZXJzID0gdHlwZVBhcmFtZXRlcnM7XG5cdFx0dGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcblx0XHR0aGlzLnJldHVyblR5cGUgPSByZXR1cm5UeXBlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RJbXBvcnROb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdG5hbWVzOiBzdHJpbmdbXTtcblx0ZnJvbTogc3RyaW5nIHwgbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lczogc3RyaW5nW10sIGZyb206IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuSU1QT1JUKTtcblxuXHRcdHRoaXMubmFtZXMgPSBuYW1lcztcblx0XHR0aGlzLmZyb20gPSBmcm9tO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RUaGVuTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRjb25zdHJ1Y3RvcihjaGlsZHJlbjogQVNUTm9kZVtdID0gW10pIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5USEVOLCBjaGlsZHJlbik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVElmTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRjb25kaXRpb246IEFTVE5vZGU7XG5cdHRoZW46IEFTVFRoZW5Ob2RlO1xuXHRlbHNlOiBBU1RJZk5vZGUgfCBBU1RFbHNlTm9kZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKGNvbmRpdGlvbjogQVNUTm9kZSwgdGhlbjogQVNUVGhlbk5vZGUpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5JRik7XG5cblx0XHR0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcblx0XHR0aGlzLnRoZW4gPSB0aGVuO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RFbHNlTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRjb25zdHJ1Y3RvcihjaGlsZHJlbjogQVNUTm9kZVtdID0gW10pIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5FTFNFLCBjaGlsZHJlbik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVE1hdGNoTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRleHByZXNzaW9uOiBBU1ROb2RlO1xuXHRjYXNlczogQVNUTWF0Y2hDYXNlTm9kZVtdO1xuXHRkZWZhdWx0Q2FzZTogQVNUTWF0Y2hDYXNlTm9kZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKGV4cHJlc3Npb246IEFTVE5vZGUsIGNhc2VzOiBBU1RNYXRjaENhc2VOb2RlW10sIGRlZmF1bHRDYXNlOiBBU1RNYXRjaENhc2VOb2RlIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5NQVRDSCk7XG5cblx0XHR0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuXHRcdHRoaXMuY2FzZXMgPSBjYXNlcztcblx0XHR0aGlzLmRlZmF1bHRDYXNlID0gZGVmYXVsdENhc2U7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVE1hdGNoQ2FzZU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0dGVzdDogQVNUTm9kZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLk1BVENIX0NBU0UsIGNoaWxkcmVuKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNURm9yZWFjaE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0aXRlcmF0b3I6IHN0cmluZztcblx0aXRlcmFibGU6IEFTVE5vZGU7XG5cdGJvZHk6IEFTVE5vZGVbXTtcblxuXHRjb25zdHJ1Y3RvcihpdGVyYXRvcjogc3RyaW5nLCBpdGVyYWJsZTogQVNUTm9kZSwgYm9keTogQVNUTm9kZVtdID0gW10pIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5GT1JFQUNIKTtcblxuXHRcdHRoaXMuaXRlcmF0b3IgPSBpdGVyYXRvcjtcblx0XHR0aGlzLml0ZXJhYmxlID0gaXRlcmFibGU7XG5cdFx0dGhpcy5ib2R5ID0gYm9keTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUVHlwZU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0c3RhdGljIEtJTkRfU0lNUExFID0gJ3NpbXBsZSc7XG5cdHN0YXRpYyBLSU5EX0dFTkVSSUMgPSAnZ2VuZXJpYyc7XG5cdHN0YXRpYyBLSU5EX0xBTUJEQSA9ICdsYW1iZGEnO1xuXG5cdGtpbmQ6IHN0cmluZztcblx0dHlwZUFyZ3VtZW50czogQVNUVHlwZU5vZGVbXSA9IFtdO1xuXHRwYXJhbWV0ZXJUeXBlczogQVNUVHlwZU5vZGVbXSA9IFtdO1xuXHRyZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGwgPSBudWxsO1xuXHRudWxsYWJsZTogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihraW5kOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgbnVsbGFibGU6IGJvb2xlYW4gPSBmYWxzZSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLlRZUEUpO1xuXG5cdFx0dGhpcy5raW5kID0ga2luZDtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMubnVsbGFibGUgPSBudWxsYWJsZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUVkRvbU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0cmVhZG9ubHkgdGFnOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHByb3BzOiBNYXA8c3RyaW5nLCBBU1ROb2RlPiA9IG5ldyBNYXAoKTtcblxuXHRjb25zdHJ1Y3Rvcih0YWc6IHN0cmluZywgcHJvcHM6IE1hcDxzdHJpbmcsIEFTVE5vZGU+LCBjaGlsZHJlbjogQVNUTm9kZVtdID0gW10pIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5WRE9NLCBjaGlsZHJlbik7XG5cdFx0dGhpcy50YWcgPSB0YWc7XG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RWRG9tVGV4dE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0Y29uc3RydWN0b3IodmFsdWU6IHN0cmluZykge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLlZET01fVEVYVCk7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7R1JBTU1BUiwgUnVsZXMsIFRva2VuLCBUb2tlblR5cGV9IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5pbXBvcnQge3Rocm93VG9rZW5FcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuaW1wb3J0IHR5cGUge1NvdXJjZX0gZnJvbSBcIi4uL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmV4cG9ydCBjbGFzcyBUb2tlbml6ZXIge1xuXHRwcml2YXRlIHJlYWRvbmx5IHJ1bGVzID0gbmV3IFJ1bGVzKCk7XG5cdHByaXZhdGUgcmVhZG9ubHkgc291cmNlOiBTb3VyY2U7XG5cblx0Y29uc3RydWN0b3Ioc291cmNlOiBTb3VyY2UpIHtcblx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0fVxuXG5cdGdldFRva2VuU3RyZWFtKCk6IFRva2VuU3RyZWFtIHtcblx0XHRyZXR1cm4gbmV3IFRva2VuU3RyZWFtKHRoaXMudG9rZW5pemUoKSk7XG5cdH1cblxuXHR0b2tlbml6ZSgpOiBUb2tlbltdIHtcblx0XHRjb25zdCB0b2tlbnM6IFRva2VuW10gPSBbXTtcblxuXHRcdGxldCBpOiBudW1iZXIgPSAwO1xuXHRcdGxldCBsaW5lOiBudW1iZXIgPSAxO1xuXHRcdGxldCBjb2x1bW46IG51bWJlciA9IDA7XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nTGluZUNvbW1lbnQgPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBsaW5lQ29tbWVudDogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaExpbmVDb21tZW50QXQoaSk7XG5cdFx0XHRpZiAobGluZUNvbW1lbnQpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2gobGluZUNvbW1lbnQud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBsaW5lQ29tbWVudC5lbmQgKyAxO1xuXG5cdFx0XHRcdGxpbmUrKztcblx0XHRcdFx0Y29sdW1uID0gMDtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ1N0cmluZyA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IHN0cmluZzogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaFN0cmluZ0F0KGkpO1xuXHRcdFx0aWYgKHN0cmluZykge1xuXHRcdFx0XHR0b2tlbnMucHVzaChzdHJpbmcud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBzdHJpbmcuZW5kICsgMTtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChzdHJpbmcpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nUHVuY3R1YXRpb24gPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBwdW5jdHVhdGlvbjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaFB1bmN0dWF0aW9uQXQoaSk7XG5cdFx0XHRpZiAocHVuY3R1YXRpb24pIHtcblx0XHRcdFx0dG9rZW5zLnB1c2gocHVuY3R1YXRpb24ud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBwdW5jdHVhdGlvbi5lbmQgKyAxO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KHB1bmN0dWF0aW9uKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ0lkZW50aWZpZXIgPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBpZGVudGlmaWVyOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoSWRlbnRpZmllckF0KGkpO1xuXHRcdFx0aWYgKGlkZW50aWZpZXIpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2goaWRlbnRpZmllci53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IGlkZW50aWZpZXIuZW5kO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KGlkZW50aWZpZXIpO1xuXG5cdFx0XHRcdGlmIChpZGVudGlmaWVyLnZhbHVlID09PSBHUkFNTUFSLlZET00pIHtcblx0XHRcdFx0XHRjb25zdCB0b2tlbml6ZWRWRG9tID0gdGhpcy50b2tlbml6ZVZEb20oaSwgbGluZSwgY29sdW1uKTtcblx0XHRcdFx0XHR0b2tlbnMucHVzaCguLi50b2tlbml6ZWRWRG9tLnRva2Vucyk7XG5cdFx0XHRcdFx0aSA9IHRva2VuaXplZFZEb20ubmV3SW5kZXg7XG5cdFx0XHRcdFx0bGluZSA9IHRva2VuaXplZFZEb20ubGluZTtcblx0XHRcdFx0XHRjb2x1bW4gPSB0b2tlbml6ZWRWRG9tLmNvbHVtbjtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nTnVtYmVyID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgbnVtYmVyOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoTnVtYmVyQXQoaSk7XG5cdFx0XHRpZiAobnVtYmVyKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKG51bWJlci53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IG51bWJlci5lbmQ7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQobnVtYmVyKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ09wZXJhdG9yID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3Qgb3BlcmF0b3I6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hPcGVyYXRvckF0KGkpO1xuXHRcdFx0aWYgKG9wZXJhdG9yKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKG9wZXJhdG9yLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gb3BlcmF0b3IuZW5kICsgMTtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChvcGVyYXRvcik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdBbm5vdGF0aW9uID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgYW5ub3RhdGlvbjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaEFubm90YXRpb25BdChpKTtcblx0XHRcdGlmIChhbm5vdGF0aW9uKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKGFubm90YXRpb24ud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBhbm5vdGF0aW9uLmVuZCArIDE7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQoYW5ub3RhdGlvbik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0d2hpbGUgKGkgPCB0aGlzLnNvdXJjZS5sZW5ndGgpIHtcblx0XHRcdGlmICh0aGlzLnNvdXJjZS5jaGFyQXQoaSkgPT09ICdcXG4nKSB7XG5cdFx0XHRcdGxpbmUrKztcblx0XHRcdFx0Y29sdW1uID0gMDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbHVtbisrO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5tYXRjaFdoaXRlc3BhY2VBdChpKSkge1xuXHRcdFx0XHRpKys7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaWZJc0NvbnN1bWluZ0xpbmVDb21tZW50KClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ1B1bmN0dWF0aW9uKClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ1N0cmluZygpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdOdW1iZXIoKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nSWRlbnRpZmllcigpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdPcGVyYXRvcigpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdBbm5vdGF0aW9uKCkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHRocm93VG9rZW5FcnJvcignVW5leHBlY3RlZCBjaGFyYWN0ZXI6ICcgKyB0aGlzLnNvdXJjZS5jaGFyQXQoaSkpO1xuXHRcdH1cblxuXHRcdHRva2Vucy5wdXNoKFxuXHRcdFx0dGhpcy5lb2YoaSlcblx0XHRcdCAgICAud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKVxuXHRcdCk7XG5cblx0XHRyZXR1cm4gdG9rZW5zO1xuXHR9XG5cblx0ZW9mKGVuZDogbnVtYmVyKTogVG9rZW4ge1xuXHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLkVPRiwgJycsIGVuZCwgZW5kLCB0aGlzLnNvdXJjZSlcblx0fVxuXG5cdGNvbHVtT2Zmc2V0KHRva2VuOiBUb2tlbik6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRva2VuLnZhbHVlLmxlbmd0aCAtIDE7XG5cdH1cblxuXHRtYXRjaFdoaXRlc3BhY2VBdChpOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5ydWxlcy5pc1doaXRlc3BhY2UodGhpcy5zb3VyY2UuY2hhckF0KGkpKTtcblx0fVxuXG5cdG1hdGNoTnVtYmVyQXQoaTogbnVtYmVyKTogVG9rZW4gfCBudWxsIHtcblx0XHRpZiAoIXRoaXMucnVsZXMuaXNOdW1lcmljKHRoaXMuc291cmNlLmNoYXJBdChpKSkpIHtcblx0XHRcdHJldHVybiBudWxsXG5cdFx0fVxuXHRcdGxldCBzdGFydCA9IGk7XG5cdFx0d2hpbGUgKHRoaXMucnVsZXMuaXNOdW1lcmljKHRoaXMuc291cmNlLmNoYXJBdChpKSkpIGkrKztcblx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5OVU1CRVIsIHRoaXMuc291cmNlLnNsaWNlKHN0YXJ0LCBpKSwgc3RhcnQsIGksIHRoaXMuc291cmNlKTtcblx0fVxuXG5cdG1hdGNoU3RyaW5nQXQoaTogbnVtYmVyKTogVG9rZW4gfCBudWxsIHtcblx0XHRpZiAodGhpcy5zb3VyY2UuY2hhckF0KGkpICE9PSAnXCInKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0bGV0IHN0YXJ0ID0gKytpO1xuXHRcdHdoaWxlICh0aGlzLnNvdXJjZS5jaGFyQXQoaSkgIT09ICdcIicpIGkrKztcblx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5TVFJJTkcsIHRoaXMuc291cmNlLnNsaWNlKHN0YXJ0LCBpKSwgc3RhcnQsIGksIHRoaXMuc291cmNlKTtcblx0fVxuXG5cdG1hdGNoSWRlbnRpZmllckF0KGk6IG51bWJlcik6IFRva2VuIHwgbnVsbCB7XG5cdFx0aWYgKCF0aGlzLnJ1bGVzLmlzQWxwaGEodGhpcy5zb3VyY2UuY2hhckF0KGkpKSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGxldCBzdGFydCA9IGk7XG5cdFx0bGV0IGogPSBpO1xuXHRcdHdoaWxlICh0aGlzLnJ1bGVzLmlzQWxwaGFOdW1lcmljKHRoaXMuc291cmNlLmNoYXJBdChqKSkpIGorKztcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuc291cmNlLnNsaWNlKHN0YXJ0LCBqKTtcblxuXHRcdGxldCB0eXBlID0gVG9rZW5UeXBlLklERU5USUZJRVI7XG5cdFx0aWYgKFtHUkFNTUFSLlRSVUUsIEdSQU1NQVIuRkFMU0VdLmluY2x1ZGVzKHZhbHVlKSkge1xuXHRcdFx0dHlwZSA9IFRva2VuVHlwZS5CT09MRUFOO1xuXHRcdH0gZWxzZSBpZiAoUnVsZXMuS0VZV09SRFMuaGFzKHZhbHVlKSkge1xuXHRcdFx0dHlwZSA9IFRva2VuVHlwZS5LRVlXT1JEO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgVG9rZW4odHlwZSwgdmFsdWUsIHN0YXJ0LCBqLCB0aGlzLnNvdXJjZSk7XG5cdH1cblxuXHRtYXRjaE9wZXJhdG9yQXQoaTogbnVtYmVyLCBvcGVyYXRvcnM6IFNldDxzdHJpbmc+ID0gUnVsZXMuT1BFUkFUT1JTKTogVG9rZW4gfCBudWxsIHtcblx0XHRjb25zdCBjaGFycyA9IHRoaXMuc291cmNlLmNoYXJBdChpKSArIHRoaXMuc291cmNlLmNoYXJBdChpICsgMSk7XG5cdFx0aWYgKG9wZXJhdG9ycy5oYXMoY2hhcnMpKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5PUEVSQVRPUiwgY2hhcnMsIGksIGkgKyAxLCB0aGlzLnNvdXJjZSk7XG5cdFx0fVxuXG5cdFx0aWYgKG9wZXJhdG9ycy5oYXModGhpcy5zb3VyY2UuY2hhckF0KGkpKSkge1xuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuT1BFUkFUT1IsIHRoaXMuc291cmNlLmNoYXJBdChpKSwgaSwgaSwgdGhpcy5zb3VyY2UpO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0bWF0Y2hQdW5jdHVhdGlvbkF0KGk6IG51bWJlciwgcHVuY3R1YXRpb25zID0gUnVsZXMuUFVOQ1RVQVRJT05TKTogVG9rZW4gfCBudWxsIHtcblx0XHRjb25zdCBjaGFycyA9IHRoaXMuc291cmNlLmNoYXJBdChpKSArIHRoaXMuc291cmNlLmNoYXJBdChpICsgMSk7XG5cdFx0aWYgKHB1bmN0dWF0aW9ucy5oYXMoY2hhcnMpKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5QVU5DVFVBVElPTiwgY2hhcnMsIGksIGkgKyAxLCB0aGlzLnNvdXJjZSk7XG5cdFx0fVxuXG5cdFx0aWYgKCFwdW5jdHVhdGlvbnMuaGFzKHRoaXMuc291cmNlLmNoYXJBdChpKSkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5QVU5DVFVBVElPTiwgdGhpcy5zb3VyY2UuY2hhckF0KGkpLCBpLCBpLCB0aGlzLnNvdXJjZSk7XG5cdH1cblxuXHRtYXRjaExpbmVDb21tZW50QXQoaTogbnVtYmVyKTogVG9rZW4gfCBudWxsIHtcblx0XHRpZiAoIXRoaXMuc291cmNlLnN0YXJ0c1dpdGgoUnVsZXMuQ09NTUVOVF9MSU5FLCBpKSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGxldCBqID0gaSArIFJ1bGVzLkNPTU1FTlRfTElORS5sZW5ndGg7XG5cdFx0d2hpbGUgKGogPCB0aGlzLnNvdXJjZS5sZW5ndGggJiYgdGhpcy5zb3VyY2UuY2hhckF0KGopICE9PSAnXFxuJykgaisrO1xuXHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLkNPTU1FTlQsIHRoaXMuc291cmNlLnNsaWNlKGksIGopLCBpLCBqLCB0aGlzLnNvdXJjZSk7XG5cdH1cblxuXHRtYXRjaEFubm90YXRpb25BdChpOiBudW1iZXIpOiBUb2tlbiB8IG51bGwge1xuXHRcdGlmICh0aGlzLnNvdXJjZS5jaGFyQXQoaSkgIT09ICdAJykge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0bGV0IHN0YXJ0ID0gaSArIDE7XG5cdFx0bGV0IGogPSBpICsgMTtcblx0XHR3aGlsZSAodGhpcy5ydWxlcy5pc0FscGhhKHRoaXMuc291cmNlLmNoYXJBdChqKSkpIGorKztcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuc291cmNlLnNsaWNlKHN0YXJ0LCBqKTtcblxuXHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLkFOTk9UQVRJT04sIHZhbHVlLCBzdGFydCwgaiwgdGhpcy5zb3VyY2UpO1xuXHR9XG5cblx0cHJpdmF0ZSB0b2tlbml6ZVZEb20oc3RhcnRJbmRleDogbnVtYmVyLCBsaW5lOiBudW1iZXIsIGNvbHVtbjogbnVtYmVyKToge1xuXHRcdHRva2VuczogVG9rZW5bXSxcblx0XHRuZXdJbmRleDogbnVtYmVyLFxuXHRcdGxpbmU6IG51bWJlcixcblx0XHRjb2x1bW46IG51bWJlclxuXHR9IHtcblx0XHRjb25zdCB0b2tlbnM6IFRva2VuW10gPSBbXTtcblx0XHRsZXQgaTogbnVtYmVyID0gc3RhcnRJbmRleDtcblx0XHRsZXQgdGV4dEJ1ZmZlcjogc3RyaW5nID0gJyc7XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nU3RyaW5nID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3Qgc3RyaW5nOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoU3RyaW5nQXQoaSk7XG5cdFx0XHRpZiAoc3RyaW5nKSB7XG5cdFx0XHRcdGZsdXNoVGV4dEJ1ZmZlcigpO1xuXHRcdFx0XHR0b2tlbnMucHVzaChzdHJpbmcud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBzdHJpbmcuZW5kICsgMTtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChzdHJpbmcpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nUHVuY3R1YXRpb24gPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBwdW5jdHVhdGlvbjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaFB1bmN0dWF0aW9uQXQoaSwgUnVsZXMuRE9NX1BVTkNUVUFUSU9OUyk7XG5cdFx0XHRpZiAocHVuY3R1YXRpb24pIHtcblx0XHRcdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cdFx0XHRcdHRva2Vucy5wdXNoKHB1bmN0dWF0aW9uLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gcHVuY3R1YXRpb24uZW5kICsgMTtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChwdW5jdHVhdGlvbik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdJZGVudGlmaWVyID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgaWRlbnRpZmllcjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaElkZW50aWZpZXJBdChpKTtcblx0XHRcdGlmIChpZGVudGlmaWVyKSB7XG5cdFx0XHRcdGZsdXNoVGV4dEJ1ZmZlcigpO1xuXHRcdFx0XHR0b2tlbnMucHVzaChpZGVudGlmaWVyLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gaWRlbnRpZmllci5lbmQ7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQoaWRlbnRpZmllcik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdOdW1iZXIgPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBudW1iZXI6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hOdW1iZXJBdChpKTtcblx0XHRcdGlmIChudW1iZXIpIHtcblx0XHRcdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cblx0XHRcdFx0dG9rZW5zLnB1c2gobnVtYmVyLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gbnVtYmVyLmVuZDtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChudW1iZXIpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nT3BlcmF0b3IgPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBvcGVyYXRvcjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaE9wZXJhdG9yQXQoaSwgUnVsZXMuRE9NX09QRVJBVE9SUyk7XG5cdFx0XHRpZiAob3BlcmF0b3IpIHtcblx0XHRcdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cblx0XHRcdFx0dG9rZW5zLnB1c2gob3BlcmF0b3Iud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBvcGVyYXRvci5lbmQgKyAxO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KG9wZXJhdG9yKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZmx1c2hUZXh0QnVmZmVyID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKHRleHRCdWZmZXIubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR0b2tlbnMucHVzaChcblx0XHRcdFx0XHRuZXcgVG9rZW4oXG5cdFx0XHRcdFx0XHRUb2tlblR5cGUuVEVYVCxcblx0XHRcdFx0XHRcdHRleHRCdWZmZXIsXG5cdFx0XHRcdFx0XHRpIC0gdGV4dEJ1ZmZlci5sZW5ndGgsXG5cdFx0XHRcdFx0XHRpLFxuXHRcdFx0XHRcdFx0dGhpcy5zb3VyY2Vcblx0XHRcdFx0XHQpLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbiAtIHRleHRCdWZmZXIubGVuZ3RoKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHR0ZXh0QnVmZmVyID0gJyc7XG5cdFx0XHR9XG5cdFx0fTtcblxuXG5cdFx0bGV0IGlnbm9yZVdoaXRlc3BhY2UgPSBmYWxzZTtcblx0XHR3aGlsZSAoaSA8IHRoaXMuc291cmNlLmxlbmd0aCkge1xuXHRcdFx0Y29uc3QgY2hhcjogc3RyaW5nID0gdGhpcy5zb3VyY2UuY2hhckF0KGkpO1xuXG5cdFx0XHRpZiAoY2hhciA9PT0gR1JBTU1BUi5TRU1JQ09MT04pIHtcblx0XHRcdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cblx0XHRcdFx0dG9rZW5zLnB1c2gobmV3IFRva2VuKFRva2VuVHlwZS5QVU5DVFVBVElPTiwgY2hhciwgaSwgaSwgdGhpcy5zb3VyY2UpXG5cdFx0XHRcdFx0ICAgICAgICAgICAgLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXG5cdFx0XHRcdGkrKztcblx0XHRcdFx0Y29sdW1uKys7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fSBlbHNlIGlmIChjaGFyID09PSBHUkFNTUFSLkJSQUNFX09QRU4pIHtcblx0XHRcdFx0aWdub3JlV2hpdGVzcGFjZSA9IHRydWU7XG5cdFx0XHR9IGVsc2UgaWYgKGNoYXIgPT09IEdSQU1NQVIuQlJBQ0VfQ0xPU0UpIHtcblx0XHRcdFx0aWdub3JlV2hpdGVzcGFjZSA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaWdub3JlV2hpdGVzcGFjZSkge1xuXHRcdFx0XHRpZiAodGhpcy5tYXRjaFdoaXRlc3BhY2VBdChpKSkge1xuXHRcdFx0XHRcdGkrKztcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaWZJc0NvbnN1bWluZ1B1bmN0dWF0aW9uKClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ1N0cmluZygpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdOdW1iZXIoKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nSWRlbnRpZmllcigpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdPcGVyYXRvcigpXG5cdFx0XHQpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHRleHRCdWZmZXIgKz0gY2hhcjtcblxuXHRcdFx0aWYgKGNoYXIgPT09ICdcXG4nKSB7XG5cdFx0XHRcdGxpbmUrKztcblx0XHRcdFx0Y29sdW1uID0gMDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbHVtbisrO1xuXHRcdFx0fVxuXG5cdFx0XHRpKys7XG5cdFx0fVxuXG5cdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cblx0XHRyZXR1cm4ge3Rva2VucywgbmV3SW5kZXg6IGksIGxpbmUsIGNvbHVtbn07XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFRva2VuU3RyZWFtIHtcblx0dG9rZW5zOiBUb2tlbltdO1xuXHRpbmRleDogbnVtYmVyID0gMDtcblxuXHRjb25zdHJ1Y3Rvcih0b2tlbnM6IFRva2VuW10pIHtcblx0XHR0aGlzLnRva2VucyA9IHRva2Vucztcblx0fVxuXG5cdHJld2luZCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pbmRleCA+IDApIHtcblx0XHRcdHRoaXMuaW5kZXgtLTtcblx0XHR9XG5cdH1cblxuXHRwZWVrKCk6IFRva2VuIHwgbnVsbCB7XG5cdFx0cmV0dXJuIHRoaXMudG9rZW5zW3RoaXMuaW5kZXhdIHx8IG51bGw7XG5cdH1cblxuXHRuZXh0KCk6IFRva2VuIHwgbnVsbCB7XG5cdFx0cmV0dXJuIHRoaXMudG9rZW5zW3RoaXMuaW5kZXgrK10gfHwgbnVsbDtcblx0fVxuXG5cdGhhc05leHQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGg7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtUb2tlbml6ZXJ9IGZyb20gXCIuLi90b2tlbml6ZXIvdG9rZW5pemVyXCI7XG5pbXBvcnQge3Rocm93RGVwZW5kZW5jeUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQgdHlwZSB7VG9rZW59IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5cbmV4cG9ydCBjbGFzcyBTb3VyY2Uge1xuXHRzdGF0aWMgTkVXTElORSA9ICdcXG4nO1xuXHRwdWJsaWMgcmVhZG9ubHkgdXJsOiBzdHJpbmc7XG5cdHByaXZhdGUgY29kZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGNvZGU6IHN0cmluZywgdXJsOiBzdHJpbmcgPSAnPGlubGluZT4nKSB7XG5cdFx0dGhpcy51cmwgPSB1cmw7XG5cdFx0dGhpcy5jb2RlID0gY29kZTtcblx0fVxuXG5cdGdldCBsZW5ndGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5jb2RlLmxlbmd0aDtcblx0fVxuXG5cdGdldFRva2VuaXplcigpOiBUb2tlbml6ZXIge1xuXHRcdHJldHVybiBuZXcgVG9rZW5pemVyKHRoaXMpO1xuXHR9XG5cblx0c2xpY2Uoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmNvZGUuc2xpY2Uoc3RhcnQsIGVuZCk7XG5cdH1cblxuXHRjaGFyQXQoaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuY29kZS5jaGFyQXQoaW5kZXgpO1xuXHR9XG5cblx0c3RhcnRzV2l0aCh0ZXh0OiBzdHJpbmcsIHBvc2l0aW9uPzogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29kZS5zdGFydHNXaXRoKHRleHQsIHBvc2l0aW9uKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgU291cmNlU3BhbiB7XG5cdHNvdXJjZTogU291cmNlO1xuXHRzdGFydDogbnVtYmVyO1xuXHRlbmQ6IG51bWJlcjtcblx0bGluZTogbnVtYmVyO1xuXHRjb2x1bW46IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcihzb3VyY2U6IFNvdXJjZSwgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpIHtcblx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0XHR0aGlzLnN0YXJ0ID0gc3RhcnQ7XG5cdFx0dGhpcy5lbmQgPSBlbmQ7XG5cblx0XHRjb25zdCBiZWZvcmUgPSBzb3VyY2Uuc2xpY2UoMCwgc3RhcnQpO1xuXHRcdGNvbnN0IGxpbmVzID0gYmVmb3JlLnNwbGl0KFNvdXJjZS5ORVdMSU5FKTtcblxuXHRcdHRoaXMubGluZSA9IGxpbmVzLmxlbmd0aDtcblx0XHR0aGlzLmNvbHVtbiA9IChsaW5lc1tsaW5lcy5sZW5ndGggLSAxXSB8fCAnJykubGVuZ3RoICsgMTtcblx0fVxuXG5cdHRleHQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2Uuc2xpY2UodGhpcy5zdGFydCwgdGhpcy5lbmQpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGFuRnJvbShzdGFydFRva2VuOiBUb2tlbiwgZW5kVG9rZW46IFRva2VuKTogU291cmNlU3BhbiB7XG5cdHJldHVybiBuZXcgU291cmNlU3BhbihzdGFydFRva2VuLnNvdXJjZSwgc3RhcnRUb2tlbi5zdGFydCwgZW5kVG9rZW4uZW5kKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoU291cmNlKHVybDogc3RyaW5nKTogUHJvbWlzZTxTb3VyY2U+IHtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXHRpZiAoIXJlc3BvbnNlLm9rKSB7XG5cdFx0dGhyb3dEZXBlbmRlbmN5RXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHt1cmx9YCk7XG5cdH1cblxuXHRyZXR1cm4gbmV3IFNvdXJjZShhd2FpdCByZXNwb25zZS50ZXh0KCksIHVybCk7XG59XG4iLAogICAgImltcG9ydCB7U291cmNlLCBTb3VyY2VTcGFufSBmcm9tIFwiLi9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5jbGFzcyBFcnJvclR5cGVzIHtcblx0c3RhdGljIFRZUEVfRVJST1I6IHN0cmluZyA9ICdUeXBlRXJyb3InO1xuXHRzdGF0aWMgVE9LRU5fRVJST1I6IHN0cmluZyA9ICdUb2tlbkVycm9yJztcblx0c3RhdGljIFBBUlNFUl9FUlJPUjogc3RyaW5nID0gJ1BhcnNlckVycm9yJztcblx0c3RhdGljIFJVTlRJTUVfRVJST1I6IHN0cmluZyA9ICdSdW50aW1lRXJyb3InO1xuXHRzdGF0aWMgSU5URVJOQUxfRVJST1I6IHN0cmluZyA9ICdJbnRlcm5hbEVycm9yJztcblx0c3RhdGljIE5BVElWRV9FUlJPUjogc3RyaW5nID0gJ05hdGl2ZUVycm9yJztcblx0c3RhdGljIERFUEVOREVOQ1lfRVJST1I6IHN0cmluZyA9ICdEZXBlbmRlbmN5RXJyb3InO1xufVxuXG5leHBvcnQgY2xhc3MgTHlyYUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXHRraW5kOiBzdHJpbmc7XG5cdHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbDtcblx0b3ZlcnJpZGUgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdGtpbmQ6IHN0cmluZyxcblx0XHRtZXNzYWdlOiBzdHJpbmcsXG5cdFx0c3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLFxuXHRcdGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuXHQpIHtcblx0XHRzdXBlcihtZXNzYWdlKTtcblx0XHR0aGlzLmtpbmQgPSBraW5kO1xuXHRcdHRoaXMuc3BhbiA9IHNwYW47XG5cdFx0dGhpcy5jYXVzZSA9IGNhdXNlO1xuXHR9XG5cblx0Zm9ybWF0KCk6IHN0cmluZyB7XG5cdFx0aWYgKHRoaXMuc3Bhbikge1xuXG5cdFx0XHRyZXR1cm4gYFxuWyR7dGhpcy5raW5kfV0gJHt0aGlzLm1lc3NhZ2V9XG4gIGF0ICR7dGhpcy5zcGFuLnNvdXJjZS51cmx9OiR7dGhpcy5zcGFuLmxpbmV9OiR7dGhpcy5zcGFuLmNvbHVtbn1cblxuJHt0aGlzLnNwYW4udGV4dCgpfVxuJHtcIiBcIi5yZXBlYXQodGhpcy5zcGFuLmNvbHVtbil9JHtcIl5cIi5yZXBlYXQodGhpcy5zcGFuLmVuZCAtIHRoaXMuc3Bhbi5zdGFydCl9XG5gO1xuXHRcdH1cblxuXHRcdHJldHVybiBgWyR7dGhpcy5raW5kfV0gJHt0aGlzLm1lc3NhZ2V9YDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYVRva2VuRXJyb3IgZXh0ZW5kcyBMeXJhRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRFcnJvclR5cGVzLlRPS0VOX0VSUk9SLFxuXHRcdFx0bWVzc2FnZSxcblx0XHRcdHNwYW4sXG5cdFx0XHRjYXVzZVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFUeXBlRXJyb3IgZXh0ZW5kcyBMeXJhRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRFcnJvclR5cGVzLlRZUEVfRVJST1IsXG5cdFx0XHRtZXNzYWdlLFxuXHRcdFx0c3Bhbixcblx0XHRcdGNhdXNlXG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYVBhcnNlckVycm9yIGV4dGVuZHMgTHlyYUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0RXJyb3JUeXBlcy5QQVJTRVJfRVJST1IsXG5cdFx0XHRtZXNzYWdlLFxuXHRcdFx0c3Bhbixcblx0XHRcdGNhdXNlXG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYVJ1bnRpbWVFcnJvciBleHRlbmRzIEx5cmFFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihcblx0XHRcdEVycm9yVHlwZXMuUlVOVElNRV9FUlJPUixcblx0XHRcdG1lc3NhZ2UsXG5cdFx0XHRzcGFuLFxuXHRcdFx0Y2F1c2Vcblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhTmF0aXZlRXJyb3IgZXh0ZW5kcyBMeXJhRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRFcnJvclR5cGVzLk5BVElWRV9FUlJPUixcblx0XHRcdG1lc3NhZ2UsXG5cdFx0XHRzcGFuLFxuXHRcdFx0Y2F1c2Vcblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhRGVwZW5kZW5jeUVycm9yIGV4dGVuZHMgTHlyYUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0RXJyb3JUeXBlcy5ERVBFTkRFTkNZX0VSUk9SLFxuXHRcdFx0bWVzc2FnZSxcblx0XHRcdHNwYW4sXG5cdFx0XHRjYXVzZVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93VG9rZW5FcnJvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKTogbmV2ZXIge1xuXHR0aHJvdyBuZXcgTHlyYVRva2VuRXJyb3IobWVzc2FnZSwgc3BhbiwgY2F1c2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dUeXBlRXJyb3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IG5ldmVyIHtcblx0dGhyb3cgbmV3IEx5cmFUeXBlRXJyb3IobWVzc2FnZSwgc3BhbiwgY2F1c2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQYXJzZXJFcnJvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKTogbmV2ZXIge1xuXHR0aHJvdyBuZXcgTHlyYVBhcnNlckVycm9yKG1lc3NhZ2UsIHNwYW4sIGNhdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UnVudGltZUVycm9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBuZXZlciB7XG5cdHRocm93IG5ldyBMeXJhUnVudGltZUVycm9yKG1lc3NhZ2UsIHNwYW4sIGNhdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93TmF0aXZlRXJyb3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IG5ldmVyIHtcblx0dGhyb3cgbmV3IEx5cmFOYXRpdmVFcnJvcihtZXNzYWdlLCBzcGFuLCBjYXVzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd0RlcGVuZGVuY3lFcnJvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKTogbmV2ZXIge1xuXHR0aHJvdyBuZXcgTHlyYURlcGVuZGVuY3lFcnJvcihtZXNzYWdlLCBzcGFuLCBjYXVzZSk7XG59XG5cbi8qKlxuICogQHRocm93cyB7RXJyb3J9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3cmFwSnNFcnJvcihlcnJvcjogRXJyb3IsIHNvdXJjZTogU291cmNlKTogTHlyYUVycm9yIHtcblx0aWYgKGVycm9yIGluc3RhbmNlb2YgTHlyYUVycm9yKSB7XG5cdFx0cmV0dXJuIGVycm9yO1xuXHR9XG5cblx0cmV0dXJuIG5ldyBMeXJhRXJyb3IoXG5cdFx0RXJyb3JUeXBlcy5JTlRFUk5BTF9FUlJPUixcblx0XHRlcnJvci5tZXNzYWdlIHx8IFN0cmluZyhlcnJvciksXG5cdFx0bmV3IFNvdXJjZVNwYW4oc291cmNlLCAwLCBzb3VyY2UubGVuZ3RoKVxuXHQpO1xufVxuIiwKICAgICJpbXBvcnQge0FTVENsYXNzTm9kZSwgQVNUTm9kZVR5cGV9IGZyb20gXCIuLi9jb3JlL2FzdFwiO1xuaW1wb3J0IHtDbGFzc0RlZmluaXRpb259IGZyb20gXCIuLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7UGFyc2VyfSBmcm9tIFwiLi4vY29yZS9wYXJzZXIvcGFyc2VyXCI7XG5pbXBvcnQge3Rocm93UnVudGltZUVycm9yfSBmcm9tIFwiLi4vY29yZS9lcnJvcnNcIjtcbmltcG9ydCB0eXBlIHtTb3VyY2V9IGZyb20gXCIuLi9jb3JlL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmV4cG9ydCBjbGFzcyBOYXRpdmVDbGFzcyB7XG5cdG5hbWU6IHN0cmluZztcblx0bmF0aXZlSW5zdGFuY2U6IGFueTtcblx0bmF0aXZlQ2xhc3NTb3VyY2U6IFNvdXJjZTtcblx0aXNBdXRvbG9hZEFibGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIG5hdGl2ZUluc3RhbmNlOiBhbnksIHNvdXJjZTogU291cmNlKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLm5hdGl2ZUluc3RhbmNlID0gbmF0aXZlSW5zdGFuY2U7XG5cdFx0dGhpcy5uYXRpdmVDbGFzc1NvdXJjZSA9IHNvdXJjZTtcblx0fVxuXG5cdGdldENsYXNzRGVmaW5pdGlvbigpOiBDbGFzc0RlZmluaXRpb24ge1xuXHRcdGNvbnN0IGFzdCA9IG5ldyBQYXJzZXIodGhpcy5uYXRpdmVDbGFzc1NvdXJjZSkucGFyc2UoKTtcblxuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChub2RlLnR5cGUgPT09IEFTVE5vZGVUeXBlLkNMQVNTKSB7XG5cdFx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUQ2xhc3NOb2RlICYmIG5vZGUubmFtZSA9PT0gdGhpcy5uYW1lKSB7XG5cdFx0XHRcdFx0Y29uc3QgY2xhc3NEZWYgPSBDbGFzc0RlZmluaXRpb24uZnJvbUFTVChub2RlKTtcblxuXHRcdFx0XHRcdGNsYXNzRGVmLm5hdGl2ZUluc3RhbmNlID0gdGhpcy5uYXRpdmVJbnN0YW5jZTtcblxuXHRcdFx0XHRcdHJldHVybiBjbGFzc0RlZjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRocm93UnVudGltZUVycm9yKGBDbGFzcyAke3RoaXMubmFtZX0gbm90IGZvdW5kLmAsIGFzdC5zcGFuKTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0FTVEFycmF5Tm9kZSwgQVNUTm9kZSwgQVNUTm9kZVR5cGUsIEFTVFJldHVybk5vZGV9IGZyb20gXCIuLi9hc3RcIjtcbmltcG9ydCB7R1JBTU1BUiwgVFlQRV9FTlVNfSBmcm9tIFwiLi4vZ3JhbW1hclwiO1xuaW1wb3J0IHtDbGFzc0RlZmluaXRpb24sIEluc3RhbmNlfSBmcm9tIFwiLi9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuaW1wb3J0IHt0aHJvd05hdGl2ZUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5cbmludGVyZmFjZSBTZXJpYWxpemF0aW9uT2JqZWN0IHtcblx0W2luZGV4OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhTmF0aXZlT2JqZWN0IHtcblx0Y2xhc3NOYW1lOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoY2xhc3NOYW1lOiBzdHJpbmcpIHtcblx0XHR0aGlzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcblx0fVxuXG5cdHB1YmxpYyBzZXJpYWxpemUoKTogU2VyaWFsaXphdGlvbk9iamVjdCB7XG5cdFx0Y29uc3Qgb2JqZWN0OiBTZXJpYWxpemF0aW9uT2JqZWN0ID0ge307XG5cblx0XHRvYmplY3RbdGhpcy5jbGFzc05hbWVdID0gT2JqZWN0XG5cdFx0XHQua2V5cyh0aGlzKVxuXHRcdFx0LmZpbHRlcihrZXkgPT4ga2V5ICE9PSAnY2xhc3NOYW1lJylcblx0XHRcdC5yZWR1Y2UoKG9iamVjdDogU2VyaWFsaXphdGlvbk9iamVjdCwga2V5OiBzdHJpbmcpOiBTZXJpYWxpemF0aW9uT2JqZWN0ID0+IHtcblx0XHRcdFx0Y29uc3QgY29weTogU2VyaWFsaXphdGlvbk9iamVjdCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMpO1xuXHRcdFx0XHRvYmplY3Rba2V5XSA9IGNvcHlba2V5XTtcblx0XHRcdFx0cmV0dXJuIG9iamVjdDtcblx0XHRcdH0sIHt9KTtcblxuXHRcdHJldHVybiBvYmplY3Q7XG5cdH1cblxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoe2NsYXNzTmFtZTogdGhpcy5jbGFzc05hbWV9LCBudWxsLCAyKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYU9iamVjdFZpZXcgZXh0ZW5kcyBMeXJhTmF0aXZlT2JqZWN0IHtcblx0cHJpdmF0ZSBfX2luc3RhbmNlOiBJbnN0YW5jZTtcblxuXHRjb25zdHJ1Y3RvcihpbnN0YW5jZTogSW5zdGFuY2UpIHtcblx0XHRzdXBlcihpbnN0YW5jZS5fX2NsYXNzRGVmLm5hbWUpO1xuXG5cdFx0dGhpcy5fX2luc3RhbmNlID0gaW5zdGFuY2U7XG5cblx0XHRyZXR1cm4gbmV3IFByb3h5KHRoaXMsIHtcblx0XHRcdGdldDogKF86IGFueSwgbmFtZTogc3RyaW5nKTogYW55ID0+IHtcblx0XHRcdFx0aWYgKG5hbWUgaW4gdGhpcy5fX2luc3RhbmNlLl9faW5zdGFuY2VGaWVsZHMpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5fX2luc3RhbmNlLl9faW5zdGFuY2VGaWVsZHNbbmFtZV07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAobmFtZSBpbiB0aGlzLl9faW5zdGFuY2UuX19zdGF0aWNGaWVsZHMpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5fX2luc3RhbmNlLl9fc3RhdGljRmllbGRzW25hbWVdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKG5hbWUgaW4gdGhpcykge1xuXHRcdFx0XHRcdGNvbnN0IHNlbGY6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHRoaXM7XG5cdFx0XHRcdFx0cmV0dXJuIHNlbGZbbmFtZV07XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdHNldDogKF86IGFueSwgbmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogYW55ID0+IHtcblx0XHRcdFx0aWYgKG5hbWUgaW4gdGhpcy5fX2luc3RhbmNlLl9faW5zdGFuY2VGaWVsZHMpIHtcblx0XHRcdFx0XHR0aGlzLl9faW5zdGFuY2UuX19pbnN0YW5jZUZpZWxkc1tuYW1lXSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKG5hbWUgaW4gdGhpcy5fX2luc3RhbmNlLl9fc3RhdGljRmllbGRzKSB7XG5cdFx0XHRcdFx0dGhpcy5fX2luc3RhbmNlLl9fc3RhdGljRmllbGRzW25hbWVdID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0fSlcblx0fVxuXG5cdHB1YmxpYyBvdmVycmlkZSBzZXJpYWxpemUoKTogU2VyaWFsaXphdGlvbk9iamVjdCB7XG5cdFx0Y29uc3Qgb2JqZWN0OiBTZXJpYWxpemF0aW9uT2JqZWN0ID0ge307XG5cblx0XHRvYmplY3RbdGhpcy5jbGFzc05hbWVdID0gey4uLnRoaXMuX19pbnN0YW5jZT8uX19pbnN0YW5jZUZpZWxkc307XG5cblx0XHRyZXR1cm4gb2JqZWN0O1xuXHR9XG5cblx0cHVibGljIG92ZXJyaWRlIHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuc2VyaWFsaXplKCksIG51bGwsIDIpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXN0VmFsdWUodmFsdWU6IGFueSwgZXhwZWN0ZWQ6IGFueSA9IG51bGwpOiBhbnkge1xuXHRjb25zdCB0eXBlT2YgPSB0eXBlb2YgdmFsdWU7XG5cblx0aWYgKGV4cGVjdGVkID09PSBudWxsKSB7XG5cdFx0aWYgKHZhbHVlID09PSBHUkFNTUFSLk5VTEwpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRpZiAodmFsdWUgPT09IEdSQU1NQVIuVFJVRSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGlmICh2YWx1ZSA9PT0gR1JBTU1BUi5GQUxTRSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAodHlwZU9mID09PSAnc3RyaW5nJyAmJiB2YWx1ZS50cmltKCkgIT09ICcnICYmICFpc05hTih2YWx1ZSkpIHtcblx0XHRcdHJldHVybiBOdW1iZXIodmFsdWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRzd2l0Y2ggKGV4cGVjdGVkKSB7XG5cdFx0Y2FzZSBUWVBFX0VOVU0uU1RSSU5HOlxuXHRcdFx0cmV0dXJuIHR5cGVPZiA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IFN0cmluZyh2YWx1ZSk7XG5cblx0XHRjYXNlIFRZUEVfRU5VTS5OVU1CRVI6XG5cdFx0XHRyZXR1cm4gdHlwZU9mID09PSAnbnVtYmVyJyA/IHZhbHVlIDogTnVtYmVyKHZhbHVlKTtcblxuXHRcdGNhc2UgVFlQRV9FTlVNLkJPT0xFQU46XG5cdFx0XHRyZXR1cm4gdHlwZU9mID09PSAnYm9vbGVhbicgPyB2YWx1ZSA6IHZhbHVlID09PSAndHJ1ZSc7XG5cblx0XHRjYXNlIFRZUEVfRU5VTS5OVUxMOlxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0x5cmFTdHJpbmcodmFsdWU6IHN0cmluZyk6IEFTVE5vZGUge1xuXHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuU1RSSU5HKTtcblx0bm9kZS52YWx1ZSA9IHZhbHVlO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTHlyYU51bWJlcih2YWx1ZTogbnVtYmVyKTogQVNUTm9kZSB7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5OVU1CRVIpO1xuXHRub2RlLnZhbHVlID0gdmFsdWU7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9MeXJhQm9vbGVhbih2YWx1ZTogYm9vbGVhbik6IEFTVE5vZGUge1xuXHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuQk9PTEVBTik7XG5cdG5vZGUudmFsdWUgPSB2YWx1ZTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0x5cmFOdWxsKCk6IEFTVE5vZGUge1xuXHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuTlVMTCk7XG5cdG5vZGUudmFsdWUgPSBHUkFNTUFSLk5VTEw7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9MeXJhQXJyYXkodmFsdWVzOiBhbnlbXSk6IEFTVE5vZGUge1xuXHRjb25zdCBub2RlID0gbmV3IEFTVEFycmF5Tm9kZSgpO1xuXHRub2RlLmVsZW1lbnRzID0gdmFsdWVzLm1hcCh2YWx1ZSA9PiB0b0x5cmFWYWx1ZSh2YWx1ZSkpO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTHlyYVZhbHVlKHZhbHVlOiBhbnkpOiBBU1ROb2RlIHtcblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgQVNUTm9kZSkge1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09IFRZUEVfRU5VTS5TVFJJTkcpIHtcblx0XHRyZXR1cm4gdG9MeXJhU3RyaW5nKHZhbHVlKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09IFRZUEVfRU5VTS5OVU1CRVIpIHtcblx0XHRyZXR1cm4gdG9MeXJhTnVtYmVyKHZhbHVlKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09IFRZUEVfRU5VTS5CT09MRUFOKSB7XG5cdFx0cmV0dXJuIHRvTHlyYUJvb2xlYW4odmFsdWUpO1xuXHR9XG5cblx0aWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gdG9MeXJhTnVsbCgpO1xuXHR9XG5cblx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0cmV0dXJuIHRvTHlyYUFycmF5KHZhbHVlKTtcblx0fVxuXG5cdHRocm93TmF0aXZlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IG5hdGl2ZSBvYmplY3QgdG8gTHlyYSB2YWx1ZScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJvbUx5cmFWYWx1ZSh2YWx1ZTogYW55KTogYW55IHtcblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgQVNUTm9kZSkge1xuXHRcdHJldHVybiBjYXN0VmFsdWUodmFsdWUudmFsdWUpO1xuXHR9XG5cblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgSW5zdGFuY2UpIHtcblx0XHRpZiAodmFsdWUuX19uYXRpdmVJbnN0YW5jZSkge1xuXHRcdFx0cmV0dXJuIHZhbHVlLl9fbmF0aXZlSW5zdGFuY2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBMeXJhT2JqZWN0Vmlldyh2YWx1ZSk7XG5cdH1cblxuXHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRyZXR1cm4gdmFsdWUubWFwKGZyb21MeXJhVmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIGNhc3RWYWx1ZSh2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5WYWx1ZSh2YWx1ZTogYW55KTogQVNUUmV0dXJuTm9kZSB7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUUmV0dXJuTm9kZSgpO1xuXHRub2RlLmFyZ3VtZW50ID0gdG9MeXJhVmFsdWUodmFsdWUpO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBOYXRpdmVJbnN0YW5jZShseXJhTmF0aXZlT2JqZWN0OiBMeXJhTmF0aXZlT2JqZWN0LCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpOiBJbnN0YW5jZSB7XG5cdGlmICghb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5oYXMobHlyYU5hdGl2ZU9iamVjdC5jbGFzc05hbWUpKSB7XG5cdFx0dGhyb3dOYXRpdmVFcnJvcihgQ2xhc3MgJHtseXJhTmF0aXZlT2JqZWN0LmNsYXNzTmFtZX0gbm90IGZvdW5kLmApO1xuXHR9XG5cblx0Y29uc3QgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KGx5cmFOYXRpdmVPYmplY3QuY2xhc3NOYW1lKTtcblx0Y29uc3QgaW5zdGFuY2U6IEluc3RhbmNlID0gY2xhc3NEZWYuY29uc3RydWN0RW1wdHlJbnN0YW5jZShvYmplY3RSZWdpc3RyeSk7XG5cblx0aW5zdGFuY2UuX19uYXRpdmVJbnN0YW5jZSA9IGx5cmFOYXRpdmVPYmplY3Q7XG5cblx0cmV0dXJuIGluc3RhbmNlO1xufVxuXG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7THlyYU5hdGl2ZU9iamVjdH0gZnJvbSBcIi4uLy4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfY29udmVyc2lvblwiO1xuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuLi8uLi9jb3JlL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmNvbnN0IENMQVNTX05BTUUgPSAnU3RyaW5nJztcblxuZXhwb3J0IGNsYXNzIEx5cmFTdHJpbmcgZXh0ZW5kcyBMeXJhTmF0aXZlT2JqZWN0IHtcblx0dmFsdWU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIoQ0xBU1NfTkFNRSk7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHR9XG5cblx0Ly8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuXHR0b1VwcGVyQ2FzZSgpOiBMeXJhU3RyaW5nIHtcblx0XHRyZXR1cm4gbmV3IEx5cmFTdHJpbmcodGhpcy52YWx1ZS50b1VwcGVyQ2FzZSgpKTtcblx0fVxuXG5cdC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcblx0dG9Mb3dlckNhc2UoKTogTHlyYVN0cmluZyB7XG5cdFx0cmV0dXJuIG5ldyBMeXJhU3RyaW5nKHRoaXMudmFsdWUudG9Mb3dlckNhc2UoKSk7XG5cdH1cblxuXHRvdmVycmlkZSB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTdHJpbmdUeXBlIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IENMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRDTEFTU19OQU1FLFxuXHRcdFx0THlyYVN0cmluZyxcblx0XHRcdG5ldyBTb3VyY2UoXG5cdFx0XHRcdGBcbmNsYXNzICR7Q0xBU1NfTkFNRX0ge1xuXHRwdWJsaWMgY29uc3RydWN0b3IodmFsdWUpO1xuXHRcdFx0XHRcblx0cHVibGljIHRvVXBwZXJDYXNlKCk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwdWJsaWMgdG9Mb3dlckNhc2UoKTogJHtDTEFTU19OQU1FfTtcblxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IHRydWU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uLy4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuY29uc3QgQ0xBU1NfTkFNRSA9ICdTeXN0ZW0nO1xuXG5leHBvcnQgY2xhc3MgTHlyYVN5c3RlbSB7XG5cdHN0YXRpYyBhbGVydChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRhbGVydChtZXNzYWdlKTtcblx0fVxuXG5cdHN0YXRpYyBwcmludChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRjb25zb2xlLmxvZyhtZXNzYWdlKTtcblx0fVxuXG5cdHN0YXRpYyBpbmZvKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRjb25zb2xlLmluZm8odmFsdWUuc2VyaWFsaXplKCkpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zb2xlLmluZm8odmFsdWUpO1xuXHR9XG5cblx0c3RhdGljIHdhcm5pbmcodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdGNvbnNvbGUud2Fybih2YWx1ZS5zZXJpYWxpemUoKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnNvbGUud2Fybih2YWx1ZSk7XG5cdH1cblxuXHRzdGF0aWMgZXJyb3IodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IodmFsdWUuc2VyaWFsaXplKCkpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zb2xlLmVycm9yKHZhbHVlKTtcblx0fVxuXG5cdHN0YXRpYyBsb2codmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdGNvbnNvbGUubG9nKHZhbHVlLnNlcmlhbGl6ZSgpKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc29sZS5sb2codmFsdWUpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTeXN0ZW0gZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdENMQVNTX05BTUUsXG5cdFx0XHRMeXJhU3lzdGVtLFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfSB7XG5cdHB1YmxpYyBzdGF0aWMgYWxlcnQobWVzc2FnZTogc3RyaW5nKTogdm9pZDtcblx0XG5cdHB1YmxpYyBzdGF0aWMgcHJpbnQobWVzc2FnZTogc3RyaW5nKTogdm9pZDtcblx0XG5cdHB1YmxpYyBzdGF0aWMgaW5mbyh2YWx1ZTogbWl4ZWQpOiB2b2lkO1xuXHRcblx0cHVibGljIHN0YXRpYyB3YXJuaW5nKHZhbHVlOiBtaXhlZCk6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgc3RhdGljIGVycm9yKHZhbHVlOiBtaXhlZCk6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgc3RhdGljIGxvZyh2YWx1ZTogbWl4ZWQpOiB2b2lkO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IGZhbHNlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vLi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5jb25zdCBDTEFTU19OQU1FID0gJ0Fzc2VydCc7XG5cbmNvbnN0IGlmRmFpbGVkID0gKG1lc3NhZ2U6IHN0cmluZyA9ICcnKSA9PiB7XG5cdHRocm93IG5ldyBFcnJvcignW0Fzc2VydGlvbkVycm9yXSAnICsgKG1lc3NhZ2UgfHwgJ0Fzc2VydGlvbiBmYWlsZWQuJykpO1xufTtcblxuZXhwb3J0IGNsYXNzIEx5cmFBc3NlcnQge1xuXHRzdGF0aWMgaXNUcnVlKGNvbmRpdGlvbjogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nID0gJycpIHtcblx0XHRpZiAoIWNvbmRpdGlvbikge1xuXHRcdFx0aWZGYWlsZWQobWVzc2FnZSk7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIGlzRmFsc2UoY29uZGl0aW9uOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcgPSAnJykge1xuXHRcdGlmIChjb25kaXRpb24pIHtcblx0XHRcdGlmRmFpbGVkKG1lc3NhZ2UpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQXNzZXJ0IGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IENMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRDTEFTU19OQU1FLFxuXHRcdFx0THlyYUFzc2VydCxcblx0XHRcdG5ldyBTb3VyY2UoXG5cdFx0XHRcdGBcbmNsYXNzICR7Q0xBU1NfTkFNRX0ge1xuXHRwdWJsaWMgc3RhdGljIGlzVHJ1ZShjb25kaXRpb246IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZyA9IFwiXCIpOiB2b2lkO1xuXHRcblx0cHVibGljIHN0YXRpYyBpc0ZhbHNlKGNvbmRpdGlvbjogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nID0gXCJcIik6IHZvaWQ7XG59YFxuXHRcdFx0KSk7XG5cblx0XHR0aGlzLmlzQXV0b2xvYWRBYmxlID0gZmFsc2U7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uLy4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuY29uc3QgQ0xBU1NfTkFNRSA9ICdOdW1iZXInO1xuXG5leHBvcnQgY2xhc3MgTHlyYU51bWJlciBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHR2YWx1ZTogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKHZhbHVlOiBudW1iZXIpIHtcblx0XHRzdXBlcihDTEFTU19OQU1FKTtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdH1cblxuXHRvdmVycmlkZSB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlLnRvU3RyaW5nKCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE51bWJlclR5cGUgZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdENMQVNTX05BTUUsXG5cdFx0XHRMeXJhTnVtYmVyLFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfSB7XG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWx1ZSk7XG5cblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZztcbn1gXG5cdFx0XHQpKTtcblxuXHRcdHRoaXMuaXNBdXRvbG9hZEFibGUgPSB0cnVlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7THlyYU5hdGl2ZU9iamVjdH0gZnJvbSBcIi4uLy4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfY29udmVyc2lvblwiO1xuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuLi8uLi9jb3JlL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmNvbnN0IEFSUkFZX0NMQVNTX05BTUUgPSAnQXJyYXknO1xuY29uc3QgQVJSQVlfSVRFUkFUT1JfQ0xBU1NfTkFNRSA9ICdBcnJheUl0ZXJhdG9yJztcblxuZXhwb3J0IGNsYXNzIEx5cmFBcnJheSBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHR2YWx1ZXM6IGFueVtdO1xuXG5cdGNvbnN0cnVjdG9yKHZhbHVlczogYW55W10gPSBbXSkge1xuXHRcdHN1cGVyKEFSUkFZX0NMQVNTX05BTUUpO1xuXG5cdFx0dGhpcy52YWx1ZXMgPSB2YWx1ZXM7XG5cdH1cblxuXHRpdGVyYXRvcigpOiBMeXJhQXJyYXlJdGVyYXRvciB7XG5cdFx0cmV0dXJuIG5ldyBMeXJhQXJyYXlJdGVyYXRvcih0aGlzKTtcblx0fVxuXG5cdGxlbmd0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlcy5sZW5ndGg7XG5cdH1cblxuXHRwdXNoKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLnZhbHVlcy5wdXNoKHZhbHVlKTtcblx0fVxuXG5cdC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcblx0Z2V0KGluZGV4OiBudW1iZXIpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlc1tpbmRleF0gPz8gbnVsbDtcblx0fVxuXG5cdC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcblx0cmVtb3ZlQXQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMudmFsdWVzID0gdGhpcy52YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcblx0fVxuXG5cdG92ZXJyaWRlIHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0Y29uc3QgdmFsdWVzID0gdGhpc1xuXHRcdFx0LnZhbHVlc1xuXHRcdFx0Lm1hcCh2YWx1ZSA9PiB7XG5cdFx0XHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFBcnJheSkge1xuXHRcdFx0XHRcdHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdH0pO1xuXG5cdFx0cmV0dXJuIGBbJHt2YWx1ZXMuam9pbignLCAnKX1dYDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQXJyYXlUeXBlIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IEFSUkFZX0NMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRBUlJBWV9DTEFTU19OQU1FLFxuXHRcdFx0THlyYUFycmF5LFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtBUlJBWV9DTEFTU19OQU1FfTxUPiBpbXBsZW1lbnRzIEl0ZXJhYmxlPFQ+IHtcblx0cHVibGljIGNvbnN0cnVjdG9yKHZhbHVlcyA9IFtdKTtcblx0XG5cdHB1YmxpYyBpdGVyYXRvcigpOiBJdGVyYXRvcjxUPjtcblx0XG5cdHB1YmxpYyBsZW5ndGgoKTogbnVtYmVyO1xuXHRcblx0cHVibGljIHB1c2godmFsdWU6IFQpOiB2b2lkO1xuXHRcblx0cHVibGljIGdldChpbmRleDogbnVtYmVyKTogVD87XG5cdFxuXHRwdWJsaWMgcmVtb3ZlQXQoaW5kZXg6IG51bWJlcik6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFBcnJheUl0ZXJhdG9yIGV4dGVuZHMgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdHZhbHVlczogYW55W107XG5cdGluZGV4OiBudW1iZXIgPSAwO1xuXG5cdGNvbnN0cnVjdG9yKGFycmF5OiBMeXJhQXJyYXkpIHtcblx0XHRzdXBlcihBUlJBWV9JVEVSQVRPUl9DTEFTU19OQU1FKTtcblxuXHRcdHRoaXMudmFsdWVzID0gYXJyYXkudmFsdWVzO1xuXHR9XG5cblx0cmV3aW5kKCkge1xuXHRcdHRoaXMuaW5kZXggPSAwO1xuXHR9XG5cblx0aGFzTmV4dCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pbmRleCA8IHRoaXMudmFsdWVzLmxlbmd0aDtcblx0fVxuXG5cdG5leHQoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaW5kZXggKyAxID4gdGhpcy52YWx1ZXMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5pbmRleCsrO1xuXHR9XG5cblx0Ly8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuXHRwcmV2aW91cygpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pbmRleCArIDEgPCAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5pbmRleC0tO1xuXHR9XG5cblx0Ly8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuXHRrZXkoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5pbmRleDtcblx0fVxuXG5cdGN1cnJlbnQoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXNbdGhpcy5pbmRleF07XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFycmF5SXRlcmF0b3JUeXBlIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IEFSUkFZX0lURVJBVE9SX0NMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRBUlJBWV9JVEVSQVRPUl9DTEFTU19OQU1FLFxuXHRcdFx0THlyYUFycmF5LFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtBUlJBWV9JVEVSQVRPUl9DTEFTU19OQU1FfTxUPiBpbXBsZW1lbnRzIEl0ZXJhdG9yPFQ+IHtcblx0cHVibGljIGNvbnN0cnVjdG9yKGFycmF5OiBBcnJheTxUPik7XG5cdFxuXHRwdWJsaWMgaGFzTmV4dCgpOiBib29sZWFuO1xuXHRcblx0cHVibGljIG5leHQoKTogdm9pZDtcblx0XG5cdHB1YmxpYyBwcmV2aW91cygpOiB2b2lkO1xuXHRcblx0cHVibGljIGtleSgpOiBudW1iZXI7XG5cdFxuXHRwdWJsaWMgY3VycmVudCgpOiBUO1xuXHRcblx0cHVibGljIHJld2luZCgpOiB2b2lkO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IHRydWU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHt0b0x5cmFWYWx1ZX0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX2NvbnZlcnNpb25cIjtcbmltcG9ydCB7TGFtYmRhRnVuY3Rpb25DYWxsfSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcnVudGltZVwiO1xuXG5cbmV4cG9ydCBjbGFzcyBTdGF0ZTxUID0gYW55PiB7XG5cdHByaXZhdGUgdmFsdWU6IFQ7XG5cdHByaXZhdGUgc3Vic2NyaWJlcnM6IE1hcDxudW1iZXIsICh2YWx1ZTogVCkgPT4gdm9pZD4gPSBuZXcgTWFwPG51bWJlciwgKHZhbHVlOiBUKSA9PiB2b2lkPigpO1xuXHRwcml2YXRlIGlkOiBudW1iZXIgPSAwO1xuXG5cdGNvbnN0cnVjdG9yKGluaXRpYWw6IFQpIHtcblx0XHR0aGlzLnZhbHVlID0gaW5pdGlhbDtcblx0fVxuXG5cdGdldCgpOiBUIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0fVxuXG5cdHNldCh2YWx1ZTogVCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnZhbHVlID09PSB2YWx1ZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0XHR0aGlzLm5vdGlmeSgpO1xuXHR9XG5cblx0c3Vic2NyaWJlKGZuOiBMYW1iZGFGdW5jdGlvbkNhbGwpOiBudW1iZXIge1xuXHRcdGNvbnN0IG5leHRJZDogbnVtYmVyID0gdGhpcy5pZCsrO1xuXHRcdHRoaXMuc3Vic2NyaWJlcnMuc2V0KG5leHRJZCwgdGhpcy53cmFwQ2FsbGJhY2soZm4pKTtcblx0XHRyZXR1cm4gbmV4dElkO1xuXHR9XG5cblx0dW5zdWJzY3JpYmUoaWQ6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnN1YnNjcmliZXJzLmRlbGV0ZShpZCk7XG5cdH1cblxuXHRwcml2YXRlIG5vdGlmeSgpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IGZuIG9mIHRoaXMuc3Vic2NyaWJlcnMudmFsdWVzKCkpIHtcblx0XHRcdGZuKHRoaXMudmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgd3JhcENhbGxiYWNrKGZuOiBMYW1iZGFGdW5jdGlvbkNhbGwpIHtcblx0XHRyZXR1cm4gKHZhbHVlOiBUKTogdm9pZCA9PiB7XG5cdFx0XHRmbi5ldmFsQ2FsbChudWxsLCB0b0x5cmFWYWx1ZSh2YWx1ZSkpO1xuXHRcdH1cblx0fVxufVxuIiwKICAgICJpbXBvcnQge05hdGl2ZUNsYXNzfSBmcm9tIFwiLi4vbmF0aXZlX2NsYXNzXCI7XG5pbXBvcnQge0x5cmFOYXRpdmVPYmplY3R9IGZyb20gXCIuLi8uLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX2NvbnZlcnNpb25cIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vLi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuaW1wb3J0IHtTdGF0ZX0gZnJvbSBcIi4uLy4uL2NvcmUvZXZlbnQvc3RhdGVcIjtcbmltcG9ydCB0eXBlIHtMYW1iZGFGdW5jdGlvbkNhbGx9IGZyb20gXCIuLi8uLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX3J1bnRpbWVcIjtcblxuY29uc3QgQ0xBU1NfTkFNRSA9ICdTdGF0ZSc7XG5cbmV4cG9ydCBjbGFzcyBMeXJhU3RhdGU8VD4gZXh0ZW5kcyBMeXJhTmF0aXZlT2JqZWN0IHtcblx0cHJpdmF0ZSBzdGF0ZTogU3RhdGU8VD47XG5cblx0Y29uc3RydWN0b3IoaW5pdGlhbDogVCkge1xuXHRcdHN1cGVyKENMQVNTX05BTUUpO1xuXHRcdHRoaXMuc3RhdGUgPSBuZXcgU3RhdGU8VD4oaW5pdGlhbCk7XG5cdH1cblxuXHRnZXQoKTogVCB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUuZ2V0KCk7XG5cdH1cblxuXHRzZXQodmFsdWU6IFQpOiB2b2lkIHtcblx0XHR0aGlzLnN0YXRlLnNldCh2YWx1ZSk7XG5cdH1cblxuXHRzdWJzY3JpYmUoZm46IExhbWJkYUZ1bmN0aW9uQ2FsbCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUuc3Vic2NyaWJlKGZuKTtcblx0fVxuXG5cdHVuc3Vic2NyaWJlKGlkOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS51bnN1YnNjcmliZShpZCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0YXRlVHlwZSBleHRlbmRzIE5hdGl2ZUNsYXNzIHtcblx0c3RhdGljIENMQVNTX05BTUUgPSBDTEFTU19OQU1FO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0Q0xBU1NfTkFNRSxcblx0XHRcdEx5cmFTdGF0ZSxcblx0XHRcdG5ldyBTb3VyY2UoXG5cdFx0XHRcdGBcbmNsYXNzICR7Q0xBU1NfTkFNRX08VD4ge1xuXHRwdWJsaWMgY29uc3RydWN0b3IoaW5pdGlhbDogVCk7XG5cblx0cHVibGljIGdldCgpOiBUO1xuXHRcblx0cHVibGljIHNldCh2YWx1ZTogVCk6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgc3Vic2NyaWJlKGZuOiAoVCkgLT4gbWl4ZWQpOiBudW1iZXI7XG5cdFxuXHRwdWJsaWMgdW5zdWJzY3JpYmUoaWQ6IG51bWJlcik6IGJvb2xlYW47XG59YFxuXHRcdFx0KSk7XG5cblx0XHR0aGlzLmlzQXV0b2xvYWRBYmxlID0gdHJ1ZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge05hdGl2ZUNsYXNzfSBmcm9tIFwiLi4vbmF0aXZlX2NsYXNzXCI7XG5pbXBvcnQge0x5cmFOYXRpdmVPYmplY3R9IGZyb20gXCIuLi8uLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX2NvbnZlcnNpb25cIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vLi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5jb25zdCBDTEFTU19OQU1FID0gJ0x5cmFFdmVudHMnO1xuXG5leHBvcnQgY2xhc3MgTHlyYUV2ZW50IGV4dGVuZHMgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZXZlbnQ6IEV2ZW50KSB7XG5cdFx0c3VwZXIoQ0xBU1NfTkFNRSk7XG5cdH1cblxuXHRnZXRUeXBlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuZXZlbnQudHlwZTtcblx0fVxuXG5cdHByZXZlbnREZWZhdWx0KCk6IHZvaWQge1xuXHRcdHRoaXMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgRXZlbnRUeXBlIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IENMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRDTEFTU19OQU1FLFxuXHRcdFx0THlyYUV2ZW50LFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfSB7XG5cdHB1YmxpYyBjb25zdHJ1Y3RvcihldmVudCk7XG5cblx0cHVibGljIGdldFR5cGUoKTogc3RyaW5nO1xuXG5cdHB1YmxpYyBwcmV2ZW50RGVmYXVsdCgpOiB2b2lkO1xufWApKTtcblxuXHRcdHRoaXMuaXNBdXRvbG9hZEFibGUgPSB0cnVlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtTdHJpbmdUeXBlfSBmcm9tIFwiLi9jbGFzc2VzL3N0cmluZ1wiO1xuaW1wb3J0IHtTeXN0ZW19IGZyb20gXCIuL2NsYXNzZXMvc3lzdGVtXCI7XG5pbXBvcnQge0Fzc2VydH0gZnJvbSBcIi4vY2xhc3Nlcy9hc3NlcnRcIjtcbmltcG9ydCB7TnVtYmVyVHlwZX0gZnJvbSBcIi4vY2xhc3Nlcy9udW1iZXJcIjtcbmltcG9ydCB7QXJyYXlJdGVyYXRvclR5cGUsIEFycmF5VHlwZX0gZnJvbSBcIi4vY2xhc3Nlcy9hcnJheVwiO1xuaW1wb3J0IHtTdGF0ZVR5cGV9IGZyb20gXCIuL2NsYXNzZXMvc3RhdGVcIjtcbmltcG9ydCB7RXZlbnRUeXBlfSBmcm9tIFwiLi9jbGFzc2VzL2V2ZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBOYXRpdmVDbGFzc2VzIHtcblx0cmVnaXN0cnk6IE1hcDxzdHJpbmcsIE5hdGl2ZUNsYXNzPiA9IG5ldyBNYXAoKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChBc3NlcnQuQ0xBU1NfTkFNRSwgbmV3IEFzc2VydCgpKTtcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChTeXN0ZW0uQ0xBU1NfTkFNRSwgbmV3IFN5c3RlbSgpKTtcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChTdHJpbmdUeXBlLkNMQVNTX05BTUUsIG5ldyBTdHJpbmdUeXBlKCkpO1xuXHRcdHRoaXMucmVnaXN0cnkuc2V0KE51bWJlclR5cGUuQ0xBU1NfTkFNRSwgbmV3IE51bWJlclR5cGUoKSk7XG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoQXJyYXlUeXBlLkNMQVNTX05BTUUsIG5ldyBBcnJheVR5cGUoKSk7XG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoQXJyYXlJdGVyYXRvclR5cGUuQ0xBU1NfTkFNRSwgbmV3IEFycmF5SXRlcmF0b3JUeXBlKCkpXG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoU3RhdGVUeXBlLkNMQVNTX05BTUUsIG5ldyBTdGF0ZVR5cGUoKSk7XG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoRXZlbnRUeXBlLkNMQVNTX05BTUUsIG5ldyBFdmVudFR5cGUoKSlcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0FTVFBhcmFtZXRlck5vZGUsIEFTVFR5cGVOb2RlfSBmcm9tIFwiLi4vY29yZS9hc3RcIjtcbmltcG9ydCB7VFlQRV9FTlVNfSBmcm9tIFwiLi4vY29yZS9ncmFtbWFyXCI7XG5pbXBvcnQge3Rocm93TmF0aXZlRXJyb3J9IGZyb20gXCIuLi9jb3JlL2Vycm9yc1wiO1xuXG5leHBvcnQgY2xhc3MgTmF0aXZlRnVuY3Rpb24ge1xuXHRuYW1lOiBzdHJpbmc7XG5cdHBhcmFtZXRlck5vZGVzOiBBU1RQYXJhbWV0ZXJOb2RlW10gPSBbXTtcblx0cmV0dXJuVHlwZTogQVNUVHlwZU5vZGU7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sIHJldHVyblR5cGU6IEFTVFR5cGVOb2RlKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnBhcmFtZXRlck5vZGVzID0gcGFyYW1ldGVycztcblx0XHR0aGlzLnJldHVyblR5cGUgPSByZXR1cm5UeXBlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBOYXRpdmVGdW5jdGlvblR5cGVSZWdpc3RyeSB7XG5cdGZ1bmN0aW9uczogTWFwPHN0cmluZywgTmF0aXZlRnVuY3Rpb24+ID0gbmV3IE1hcCgpO1xuXG5cdGhhcyhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5mdW5jdGlvbnMuaGFzKG5hbWUpO1xuXHR9XG5cblx0Z2V0KG5hbWU6IHN0cmluZyk6IE5hdGl2ZUZ1bmN0aW9uIHtcblx0XHRjb25zdCBuYXRpdmVGdW5jdGlvbjogTmF0aXZlRnVuY3Rpb24gfCB1bmRlZmluZWQgPSB0aGlzLmZ1bmN0aW9ucy5nZXQobmFtZSk7XG5cdFx0aWYgKCFuYXRpdmVGdW5jdGlvbikge1xuXHRcdFx0dGhyb3dOYXRpdmVFcnJvcihgRnVuY3Rpb24gJHtuYW1lfSBub3QgZm91bmQuYCk7XG5cdFx0fVxuXHRcdHJldHVybiBuYXRpdmVGdW5jdGlvbjtcblx0fVxuXG5cdHNldChuYW1lOiBzdHJpbmcsIHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSwgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGUpOiBOYXRpdmVGdW5jdGlvblR5cGVSZWdpc3RyeSB7XG5cdFx0dGhpcy5mdW5jdGlvbnMuc2V0KG5hbWUsIG5ldyBOYXRpdmVGdW5jdGlvbihuYW1lLCBwYXJhbWV0ZXJzLCByZXR1cm5UeXBlKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE5hdGl2ZUZ1bmN0aW9ucyB7XG5cdHN0YXRpYyBQUklOVCA9ICdwcmludCc7XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj59XG5cdCAqL1xuXHRnZXRHbG9iYWxGdW5jdGlvbnMoKTogeyBba2V5OiBzdHJpbmddOiAoLi4uYXJnczogYW55W10pID0+IGFueSB9IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0W05hdGl2ZUZ1bmN0aW9ucy5QUklOVF06ICguLi5hcmdzKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHRnZXRHbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeSgpOiBOYXRpdmVGdW5jdGlvblR5cGVSZWdpc3RyeSB7XG5cdFx0Y29uc3QgZnVuY3Rpb25zID0gbmV3IE5hdGl2ZUZ1bmN0aW9uVHlwZVJlZ2lzdHJ5KCk7XG5cdFx0ZnVuY3Rpb25zLnNldChcblx0XHRcdE5hdGl2ZUZ1bmN0aW9ucy5QUklOVCxcblx0XHRcdFtwYXJhbWV0ZXIodHlwZShUWVBFX0VOVU0uU1RSSU5HKSwgJ21lc3NhZ2UnKV0sXG5cdFx0XHR0eXBlKFRZUEVfRU5VTS5WT0lEKVxuXHRcdClcblxuXHRcdHJldHVybiBmdW5jdGlvbnM7XG5cdH1cbn1cblxuZnVuY3Rpb24gdHlwZShuYW1lOiBzdHJpbmcsIG51bGxhYmxlID0gZmFsc2UpOiBBU1RUeXBlTm9kZSB7XG5cdHJldHVybiBuZXcgQVNUVHlwZU5vZGUoQVNUVHlwZU5vZGUuS0lORF9TSU1QTEUsIG5hbWUsIG51bGxhYmxlKTtcbn1cblxuZnVuY3Rpb24gcGFyYW1ldGVyKHR5cGVBbm5vdGF0aW9uOiBBU1RUeXBlTm9kZSwgbmFtZTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGFueSA9IG51bGwpOiBBU1RQYXJhbWV0ZXJOb2RlIHtcblx0cmV0dXJuIG5ldyBBU1RQYXJhbWV0ZXJOb2RlKG5hbWUsIHR5cGVBbm5vdGF0aW9uLCBkZWZhdWx0VmFsdWUpO1xufVxuIiwKICAgICJpbXBvcnQge1RZUEVfRU5VTX0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcbmltcG9ydCB7XG5cdEFTVENsYXNzTm9kZSxcblx0QVNURmllbGROb2RlLFxuXHRBU1RJbnRlcmZhY2VOb2RlLFxuXHRBU1RNZXRob2ROb2RlLFxuXHRBU1ROb2RlLFxuXHRBU1RQYXJhbWV0ZXJOb2RlLFxuXHRBU1RUeXBlTm9kZVxufSBmcm9tIFwiLi4vYXN0XCI7XG5pbXBvcnQge3Rocm93VHlwZUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcblxuZXhwb3J0IGNsYXNzIFByaW1pdGl2ZVR5cGVzIHtcblx0c3RhdGljIHJlYWRvbmx5IE5VTUJFUjogc3RyaW5nID0gVFlQRV9FTlVNLk5VTUJFUjtcblx0c3RhdGljIHJlYWRvbmx5IFNUUklORzogc3RyaW5nID0gVFlQRV9FTlVNLlNUUklORztcblx0c3RhdGljIHJlYWRvbmx5IEJPT0xFQU46IHN0cmluZyA9IFRZUEVfRU5VTS5CT09MRUFOO1xuXHRzdGF0aWMgcmVhZG9ubHkgTUlYRUQ6IHN0cmluZyA9IFRZUEVfRU5VTS5NSVhFRDtcblx0c3RhdGljIHJlYWRvbmx5IE5VTEw6IHN0cmluZyA9IFRZUEVfRU5VTS5OVUxMO1xuXHRzdGF0aWMgcmVhZG9ubHkgVk9JRDogc3RyaW5nID0gVFlQRV9FTlVNLlZPSUQ7XG5cblx0c3RhdGljIGhhc1R5cGUodHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKFByaW1pdGl2ZVR5cGVzLCB0eXBlLnRvVXBwZXJDYXNlKCkpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBQcmltaXRpdmVDbGFzc1R5cGVzIHtcblx0c3RhdGljIHJlYWRvbmx5IEFSUkFZOiBzdHJpbmcgPSBUWVBFX0VOVU0uQVJSQVk7XG5cblx0c3RhdGljIENMQVNTTkFNRV9NQVA6IHsgW3M6IHN0cmluZ106IHN0cmluZzsgfSA9IHtcblx0XHRhcnJheTogJ0FycmF5J1xuXHR9XG5cblx0c3RhdGljIGdldENsYXNzUmVmTmFtZSh0eXBlOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcblx0XHRyZXR1cm4gUHJpbWl0aXZlQ2xhc3NUeXBlcy5DTEFTU05BTUVfTUFQW3R5cGVdIHx8IG51bGw7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGUge1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0fVxuXG5cdGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzID09PSBvdGhlcjtcblx0fVxuXG5cdGFjY2VwdHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lcXVhbHMob3RoZXIpO1xuXHR9XG5cblx0dG9TdHJpbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gYFR5cGUoJHt0aGlzLm5hbWV9KWA7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFByaW1pdGl2ZVR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIobmFtZSk7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBQcmltaXRpdmVUeXBlXG5cdFx0XHQmJiB0aGlzLm5hbWUgPT09IG90aGVyLm5hbWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE1peGVkVHlwZSBleHRlbmRzIFR5cGUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihQcmltaXRpdmVUeXBlcy5NSVhFRCk7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBNaXhlZFR5cGU7XG5cdH1cblxuXHRvdmVycmlkZSBhY2NlcHRzKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBWb2lkVHlwZSBleHRlbmRzIFR5cGUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihQcmltaXRpdmVUeXBlcy5WT0lEKTtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBvdGhlciBpbnN0YW5jZW9mIFZvaWRUeXBlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBOdWxsVHlwZSBleHRlbmRzIFR5cGUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihQcmltaXRpdmVUeXBlcy5OVUxMKTtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBvdGhlciBpbnN0YW5jZW9mIE51bGxUeXBlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBOdWxsYWJsZVR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0aW5uZXI6IFR5cGU7XG5cblx0Y29uc3RydWN0b3IoaW5uZXI6IFR5cGUpIHtcblx0XHRzdXBlcihpbm5lci50b1N0cmluZygpICsgJz8nKTtcblx0XHR0aGlzLmlubmVyID0gaW5uZXI7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRpZiAob3RoZXIgPT09IFR5cGVzLk5VTEwpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChvdGhlciBpbnN0YW5jZW9mIE51bGxhYmxlVHlwZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuaW5uZXIuZXF1YWxzKG90aGVyLmlubmVyKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRvdmVycmlkZSBhY2NlcHRzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIG90aGVyID09PSBUeXBlcy5OVUxMIHx8IHRoaXMuaW5uZXIuYWNjZXB0cyhvdGhlcik7XG5cdH1cblxuXHRvdmVycmlkZSB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmlubmVyLnRvU3RyaW5nKCkgKyAnPyc7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFZOb2RlVHlwZSBleHRlbmRzIFR5cGUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigndm5vZGUnKTtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBvdGhlciBpbnN0YW5jZW9mIFZvaWRUeXBlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlcyB7XG5cdHN0YXRpYyByZWFkb25seSBOVU1CRVI6IFByaW1pdGl2ZVR5cGUgPSBuZXcgUHJpbWl0aXZlVHlwZShQcmltaXRpdmVUeXBlcy5OVU1CRVIpO1xuXHRzdGF0aWMgcmVhZG9ubHkgU1RSSU5HOiBQcmltaXRpdmVUeXBlID0gbmV3IFByaW1pdGl2ZVR5cGUoUHJpbWl0aXZlVHlwZXMuU1RSSU5HKTtcblx0c3RhdGljIHJlYWRvbmx5IEJPT0xFQU46IFByaW1pdGl2ZVR5cGUgPSBuZXcgUHJpbWl0aXZlVHlwZShQcmltaXRpdmVUeXBlcy5CT09MRUFOKTtcblx0c3RhdGljIHJlYWRvbmx5IE1JWEVEOiBNaXhlZFR5cGUgPSBuZXcgTWl4ZWRUeXBlKCk7XG5cdHN0YXRpYyByZWFkb25seSBOVUxMOiBOdWxsVHlwZSA9IG5ldyBOdWxsVHlwZSgpO1xuXHRzdGF0aWMgcmVhZG9ubHkgVk9JRDogVm9pZFR5cGUgPSBuZXcgVm9pZFR5cGUoKTtcblx0c3RhdGljIHJlYWRvbmx5IFZOT0RFOiBWTm9kZVR5cGUgPSBuZXcgVk5vZGVUeXBlKCk7XG5cblx0c3RhdGljIGdldFR5cGUobmFtZTogc3RyaW5nKTogVHlwZSB7XG5cdFx0aWYgKCFPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChQcmltaXRpdmVUeXBlcywgbmFtZS50b1VwcGVyQ2FzZSgpKSkge1xuXHRcdFx0dGhyb3dUeXBlRXJyb3IoYFVua25vd24gcHJpbWl0aXZlIHR5cGUgJHtuYW1lfS5gKTtcblx0XHR9XG5cblx0XHRjb25zdCB0eXBlczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0gVHlwZXM7XG5cdFx0cmV0dXJuIHR5cGVzW25hbWUudG9VcHBlckNhc2UoKV07XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGVWYXJpYWJsZSBleHRlbmRzIFR5cGUge1xuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcblx0XHRzdXBlcihuYW1lKTtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSkge1xuXHRcdHJldHVybiBvdGhlciBpbnN0YW5jZW9mIFR5cGVWYXJpYWJsZVxuXHRcdFx0JiYgdGhpcy5uYW1lID09PSBvdGhlci5uYW1lO1xuXHR9XG5cblx0b3ZlcnJpZGUgYWNjZXB0cygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVHlwZVBhcmFtZXRlclN5bWJvbCB7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblx0cmVhZG9ubHkgdmFyaWFibGVUeXBlOiBUeXBlVmFyaWFibGU7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnZhcmlhYmxlVHlwZSA9IG5ldyBUeXBlVmFyaWFibGUobmFtZSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpZWxkU3ltYm9sIHtcblx0cmVhZG9ubHkgbm9kZTogQVNURmllbGROb2RlO1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGZpZWxkVHlwZTogVHlwZTtcblx0cmVhZG9ubHkgaXNTdGF0aWM6IGJvb2xlYW4gPSBmYWxzZTtcblx0cmVhZG9ubHkgaXNQcml2YXRlOiBib29sZWFuID0gZmFsc2U7XG5cdHJlYWRvbmx5IGlzUHVibGljOiBib29sZWFuID0gZmFsc2U7XG5cdHJlYWRvbmx5IGlzUmVhZG9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcblx0b3duZXI6IENsYXNzU3ltYm9sIHwgSW50ZXJmYWNlU3ltYm9sIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3Iobm9kZTogQVNURmllbGROb2RlLCBmaWVsZFR5cGU6IFR5cGUpIHtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHRcdHRoaXMubmFtZSA9IG5vZGUubmFtZTtcblx0XHR0aGlzLmZpZWxkVHlwZSA9IGZpZWxkVHlwZTtcblx0XHR0aGlzLmlzU3RhdGljID0gbm9kZS5tb2RpZmllcnMuc3RhdGljO1xuXHRcdHRoaXMuaXNQcml2YXRlID0gbm9kZS5tb2RpZmllcnMucHJpdmF0ZTtcblx0XHR0aGlzLmlzUHVibGljID0gbm9kZS5tb2RpZmllcnMucHVibGljO1xuXHRcdHRoaXMuaXNSZWFkb25seSA9IG5vZGUubW9kaWZpZXJzLnJlYWRvbmx5O1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJTeW1ib2wge1xuXHRyZWFkb25seSBub2RlOiBBU1RQYXJhbWV0ZXJOb2RlIHwgbnVsbDtcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXHRyZWFkb25seSBwYXJhbWV0ZXJUeXBlOiBUeXBlO1xuXHRyZWFkb25seSBkZWZhdWx0VHlwZTogVHlwZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZTogVHlwZSwgZGVmYXVsdFZhbHVlOiBUeXBlIHwgbnVsbCA9IG51bGwsIG5vZGU6IEFTVFBhcmFtZXRlck5vZGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5wYXJhbWV0ZXJUeXBlID0gdHlwZTtcblx0XHR0aGlzLmRlZmF1bHRUeXBlID0gZGVmYXVsdFZhbHVlO1xuXHRcdHRoaXMubm9kZSA9IG5vZGU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE1ldGhvZFN5bWJvbCB7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblx0cmVhZG9ubHkgbm9kZTogQVNUTWV0aG9kTm9kZTtcblx0cmVhZG9ubHkgaXNTdGF0aWM6IGJvb2xlYW4gPSBmYWxzZTtcblx0cmVhZG9ubHkgaXNQcml2YXRlOiBib29sZWFuID0gZmFsc2U7XG5cdHJlYWRvbmx5IGlzUHVibGljOiBib29sZWFuID0gZmFsc2U7XG5cblx0dHlwZVBhcmFtZXRlclN5bWJvbHM6IFR5cGVQYXJhbWV0ZXJTeW1ib2xbXSA9IFtdO1xuXHRwYXJhbWV0ZXJTeW1ib2xzOiBQYXJhbWV0ZXJTeW1ib2xbXSA9IFtdO1xuXHRyZXR1cm5UeXBlOiBUeXBlID0gVHlwZXMuTUlYRUQ7XG5cblx0b3duZXI6IENsYXNzU3ltYm9sIHwgSW50ZXJmYWNlU3ltYm9sIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3Iobm9kZTogQVNUTWV0aG9kTm9kZSkge1xuXHRcdHRoaXMubmFtZSA9IG5vZGUubmFtZTtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHRcdHRoaXMuaXNTdGF0aWMgPSBub2RlLm1vZGlmaWVycy5zdGF0aWM7XG5cdFx0dGhpcy5pc1ByaXZhdGUgPSBub2RlLm1vZGlmaWVycy5wcml2YXRlO1xuXHRcdHRoaXMuaXNQdWJsaWMgPSBub2RlLm1vZGlmaWVycy5wdWJsaWM7XG5cdH1cblxuXHRnZXQgYm9keSgpOiBBU1ROb2RlW10ge1xuXHRcdHJldHVybiB0aGlzLm5vZGUuY2hpbGRyZW47XG5cdH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBPYmplY3RTeW1ib2wge1xuXHRuYW1lOiBzdHJpbmc7XG5cdHR5cGVQYXJhbWV0ZXJTeW1ib2xzOiBUeXBlUGFyYW1ldGVyU3ltYm9sW107XG5cdHN0YXRpY0ZpZWxkU3ltYm9sczogTWFwPHN0cmluZywgRmllbGRTeW1ib2w+O1xuXHRpbnN0YW5jZU1ldGhvZFN5bWJvbHM6IE1hcDxzdHJpbmcsIE1ldGhvZFN5bWJvbD47XG59XG5cbmV4cG9ydCBjbGFzcyBDbGFzc1N5bWJvbCBpbXBsZW1lbnRzIE9iamVjdFN5bWJvbCB7XG5cdHJlYWRvbmx5IG5vZGU6IEFTVENsYXNzTm9kZTtcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXHRyZWFkb25seSBzdXBlckNsYXNzOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuXHRzdXBlckNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCB8IG51bGwgPSBudWxsO1xuXHR0eXBlUGFyYW1ldGVyU3ltYm9sczogVHlwZVBhcmFtZXRlclN5bWJvbFtdID0gW107XG5cdGluc3RhbmNlRmllbGRTeW1ib2xzOiBNYXA8c3RyaW5nLCBGaWVsZFN5bWJvbD4gPSBuZXcgTWFwKCk7XG5cdHN0YXRpY0ZpZWxkU3ltYm9sczogTWFwPHN0cmluZywgRmllbGRTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRpbnN0YW5jZU1ldGhvZFN5bWJvbHM6IE1hcDxzdHJpbmcsIE1ldGhvZFN5bWJvbD4gPSBuZXcgTWFwKCk7XG5cdHN0YXRpY01ldGhvZFN5bWJvbHM6IE1hcDxzdHJpbmcsIE1ldGhvZFN5bWJvbD4gPSBuZXcgTWFwKCk7XG5cdGNvbnN0cnVjdG9yTWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wgfCBudWxsID0gbnVsbDtcblx0aW1wbGVtZW50c0ludGVyZmFjZXM6IEludGVyZmFjZVJlZlR5cGVbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKG5vZGU6IEFTVENsYXNzTm9kZSkge1xuXHRcdHRoaXMubm9kZSA9IG5vZGU7XG5cdFx0dGhpcy5uYW1lID0gbm9kZS5uYW1lO1xuXHRcdHRoaXMuc3VwZXJDbGFzcyA9IG5vZGUuc3VwZXJDbGFzcz8ubmFtZSA/PyBudWxsO1xuXHR9XG5cblx0cmVzb2x2ZUluc3RhbmNlRmllbGRTeW1ib2wobmFtZTogc3RyaW5nKTogRmllbGRTeW1ib2wgfCBudWxsIHtcblx0XHRpZiAodGhpcy5pbnN0YW5jZUZpZWxkU3ltYm9scy5oYXMobmFtZSkpIHtcblx0XHRcdHJldHVybiB0aGlzLmluc3RhbmNlRmllbGRTeW1ib2xzLmdldChuYW1lKSB8fCBudWxsO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnN1cGVyQ2xhc3MpIHtcblx0XHRcdHJldHVybiB0aGlzLnN1cGVyQ2xhc3NTeW1ib2w/LnJlc29sdmVJbnN0YW5jZUZpZWxkU3ltYm9sKG5hbWUpIHx8IG51bGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXNvbHZlU3RhdGljRmllbGRTeW1ib2wobmFtZTogc3RyaW5nKTogRmllbGRTeW1ib2wgfCBudWxsIHtcblx0XHRpZiAodGhpcy5zdGF0aWNGaWVsZFN5bWJvbHMuaGFzKG5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdGF0aWNGaWVsZFN5bWJvbHMuZ2V0KG5hbWUpIHx8IG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc3VwZXJDbGFzcykge1xuXHRcdFx0cmV0dXJuIHRoaXMuc3VwZXJDbGFzc1N5bWJvbD8ucmVzb2x2ZVN0YXRpY0ZpZWxkU3ltYm9sKG5hbWUpIHx8IG51bGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEludGVyZmFjZVN5bWJvbCBpbXBsZW1lbnRzIE9iamVjdFN5bWJvbCB7XG5cdHJlYWRvbmx5IG5vZGU6IEFTVEludGVyZmFjZU5vZGU7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblxuXHR0eXBlUGFyYW1ldGVyU3ltYm9sczogVHlwZVBhcmFtZXRlclN5bWJvbFtdID0gW107XG5cdHN0YXRpY0ZpZWxkU3ltYm9sczogTWFwPHN0cmluZywgRmllbGRTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRpbnN0YW5jZU1ldGhvZFN5bWJvbHM6IE1hcDxzdHJpbmcsIE1ldGhvZFN5bWJvbD4gPSBuZXcgTWFwKCk7XG5cdGV4dGVuZHNJbnRlcmZhY2VzOiBJbnRlcmZhY2VTeW1ib2xbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKG5vZGU6IEFTVEludGVyZmFjZU5vZGUpIHtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHRcdHRoaXMubmFtZSA9IG5vZGUubmFtZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xhc3NSZWZUeXBlIGV4dGVuZHMgVHlwZSB7XG5cdHJlYWRvbmx5IGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbDtcblx0cmVhZG9ubHkgdHlwZUFyZ3VtZW50czogVHlwZVtdO1xuXG5cdGNvbnN0cnVjdG9yKGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCwgdHlwZUFyZ3VtZW50czogVHlwZVtdID0gW10pIHtcblx0XHRzdXBlcihDbGFzc1JlZlR5cGUuZm9ybWF0U3ltYm9sTmFtZShjbGFzc1N5bWJvbC5uYW1lLCB0eXBlQXJndW1lbnRzKSk7XG5cdFx0dGhpcy5jbGFzc1N5bWJvbCA9IGNsYXNzU3ltYm9sO1xuXHRcdHRoaXMudHlwZUFyZ3VtZW50cyA9IHR5cGVBcmd1bWVudHM7XG5cdH1cblxuXHRzdGF0aWMgZm9ybWF0U3ltYm9sTmFtZShuYW1lOiBzdHJpbmcsIHR5cGVBcmd1bWVudHM6IFR5cGVbXSkge1xuXHRcdGlmICh0eXBlQXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIGBjbGFzc1JlZlR5cGUoJHtuYW1lfSlgO1xuXHRcdH1cblxuXHRcdHJldHVybiBgY2xhc3NSZWZUeXBlKCR7bmFtZX08JHt0eXBlQXJndW1lbnRzLm1hcCh0eXBlID0+IHR5cGUudG9TdHJpbmcoKSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKCcsICcpfT4pYDtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAob3RoZXIgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGVcblx0XHRcdCYmIG90aGVyLmNsYXNzU3ltYm9sID09PSB0aGlzLmNsYXNzU3ltYm9sKTtcblx0fVxuXG5cdG92ZXJyaWRlIGFjY2VwdHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRpZiAoIXRoaXMuZXF1YWxzKG90aGVyKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmIChvdGhlciBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSkge1xuXHRcdFx0aWYgKHRoaXMudHlwZUFyZ3VtZW50cy5sZW5ndGggIT09IG90aGVyLnR5cGVBcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnR5cGVBcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3Qgb3RoZXJUeXBlID0gb3RoZXIudHlwZUFyZ3VtZW50c1tpXTtcblxuXHRcdFx0XHRpZiAoIW90aGVyVHlwZSB8fCAhdGhpcy50eXBlQXJndW1lbnRzW2ldPy5hY2NlcHRzKG90aGVyVHlwZSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2VSZWZUeXBlIGV4dGVuZHMgVHlwZSB7XG5cdHJlYWRvbmx5IGludGVyZmFjZVN5bWJvbDogSW50ZXJmYWNlU3ltYm9sO1xuXHRyZWFkb25seSB0eXBlQXJndW1lbnRzOiBUeXBlW107XG5cblx0Y29uc3RydWN0b3IoaW50ZXJmYWNlU3ltYm9sOiBJbnRlcmZhY2VTeW1ib2wsIHR5cGVBcmd1bWVudHM6IFR5cGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoSW50ZXJmYWNlUmVmVHlwZS5mb3JtYXRTeW1ib2xOYW1lKGludGVyZmFjZVN5bWJvbC5uYW1lLCB0eXBlQXJndW1lbnRzKSk7XG5cdFx0dGhpcy5pbnRlcmZhY2VTeW1ib2wgPSBpbnRlcmZhY2VTeW1ib2w7XG5cdFx0dGhpcy50eXBlQXJndW1lbnRzID0gdHlwZUFyZ3VtZW50cztcblx0fVxuXG5cdHN0YXRpYyBmb3JtYXRTeW1ib2xOYW1lKG5hbWU6IHN0cmluZywgdHlwZUFyZ3VtZW50czogVHlwZVtdKTogc3RyaW5nIHtcblx0XHRpZiAodHlwZUFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBgaW50ZXJmYWNlUmVmVHlwZSgke25hbWV9KWA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGBpbnRlcmZhY2VSZWZUeXBlKCR7bmFtZX08JHt0eXBlQXJndW1lbnRzLm1hcCh0eXBlID0+IHR5cGUudG9TdHJpbmcoKSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbignLCAnKX0+KWA7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gKG90aGVyIGluc3RhbmNlb2YgSW50ZXJmYWNlUmVmVHlwZVxuXHRcdFx0JiYgb3RoZXIuaW50ZXJmYWNlU3ltYm9sID09PSB0aGlzLmludGVyZmFjZVN5bWJvbCk7XG5cdH1cblxuXHRvdmVycmlkZSBhY2NlcHRzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0aWYgKCF0aGlzLmVxdWFscyhvdGhlcikpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAob3RoZXIgaW5zdGFuY2VvZiBJbnRlcmZhY2VSZWZUeXBlKSB7XG5cdFx0XHRpZiAodGhpcy50eXBlQXJndW1lbnRzLmxlbmd0aCAhPT0gb3RoZXIudHlwZUFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHlwZUFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBvdGhlclR5cGUgPSBvdGhlci50eXBlQXJndW1lbnRzW2ldO1xuXG5cdFx0XHRcdGlmICghb3RoZXJUeXBlIHx8ICF0aGlzLnR5cGVBcmd1bWVudHNbaV0/LmFjY2VwdHMob3RoZXJUeXBlKSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIExhbWJkYVR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0cmVhZG9ubHkgcGFyYW1ldGVyU3ltYm9sczogUGFyYW1ldGVyU3ltYm9sW10gPSBbXTtcblx0cmVhZG9ubHkgcmV0dXJuVHlwZTogVHlwZTtcblxuXHRjb25zdHJ1Y3RvcihwYXJhbWV0ZXJzOiBQYXJhbWV0ZXJTeW1ib2xbXSwgcmV0dXJuVHlwZTogVHlwZSkge1xuXHRcdHN1cGVyKExhbWJkYVR5cGUuY3JlYXRlU2lnbmF0dXJlKHBhcmFtZXRlcnMsIHJldHVyblR5cGUpKTtcblx0XHR0aGlzLnBhcmFtZXRlclN5bWJvbHMgPSBwYXJhbWV0ZXJzO1xuXHRcdHRoaXMucmV0dXJuVHlwZSA9IHJldHVyblR5cGU7XG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlU2lnbmF0dXJlKHBhcmFtZXRlcnM6IFBhcmFtZXRlclN5bWJvbFtdLCByZXR1cm5UeXBlOiBUeXBlKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gYGxhbWJkYSgke3BhcmFtZXRlcnMubWFwKHBhcmFtZXRlciA9PiBwYXJhbWV0ZXIucGFyYW1ldGVyVHlwZS50b1N0cmluZygpKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKCcsICcpfSkgLT4gJHtyZXR1cm5UeXBlLnRvU3RyaW5nKCl9KWA7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRpZiAoIShvdGhlciBpbnN0YW5jZW9mIExhbWJkYVR5cGUpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucGFyYW1ldGVyU3ltYm9scy5sZW5ndGggIT09IG90aGVyLnBhcmFtZXRlclN5bWJvbHMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcmFtZXRlclN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IG90aGVyVHlwZSA9IG90aGVyLnBhcmFtZXRlclN5bWJvbHNbaV0/LnBhcmFtZXRlclR5cGU7XG5cblx0XHRcdGlmICghb3RoZXJUeXBlIHx8ICF0aGlzLnBhcmFtZXRlclN5bWJvbHNbaV0/LnBhcmFtZXRlclR5cGUuYWNjZXB0cyhvdGhlclR5cGUpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXR1cm5UeXBlLmFjY2VwdHMob3RoZXIucmV0dXJuVHlwZSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGVTY29wZSB7XG5cdHJlYWRvbmx5IHBhcmVudDogVHlwZVNjb3BlIHwgbnVsbDtcblx0cmVhZG9ubHkgdHlwZXM6IE1hcDxzdHJpbmcsIFR5cGU+ID0gbmV3IE1hcCgpO1xuXHRyZWFkb25seSB0eXBlQmluZGluZ3M6IE1hcDxzdHJpbmcsIFR5cGU+ID0gbmV3IE1hcCgpO1xuXG5cdGN1cnJlbnRPYmplY3RTeW1ib2w6IENsYXNzU3ltYm9sIHwgSW50ZXJmYWNlU3ltYm9sIHwgbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFR5cGVTY29wZSB8IG51bGwgPSBudWxsKSB7XG5cdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cdFx0dGhpcy5jdXJyZW50T2JqZWN0U3ltYm9sID0gcGFyZW50Py5jdXJyZW50T2JqZWN0U3ltYm9sID8/IG51bGw7XG5cdH1cblxuXHRkZWZpbmVUeXBlKG5hbWU6IHN0cmluZywgdHlwZTogVHlwZSk6IHZvaWQge1xuXHRcdHRoaXMudHlwZXMuc2V0KG5hbWUsIHR5cGUpO1xuXHR9XG5cblx0ZGVmaW5lVHlwZUJpbmRpbmcobmFtZTogc3RyaW5nLCB0eXBlVmFyaWFibGU6IFR5cGVWYXJpYWJsZSk6IHZvaWQge1xuXHRcdHRoaXMudHlwZUJpbmRpbmdzLnNldChuYW1lLCB0eXBlVmFyaWFibGUpO1xuXHR9XG5cblx0aGFzVHlwZShuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy50eXBlcy5oYXMobmFtZSkgfHwgdGhpcy5wYXJlbnQ/Lmhhc1R5cGUobmFtZSkgfHwgZmFsc2U7XG5cdH1cblxuXHRoYXNUeXBlQmluZGluZyhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy50eXBlQmluZGluZ3MuaGFzKG5hbWUpIHx8IHRoaXMucGFyZW50Py5oYXNUeXBlQmluZGluZyhuYW1lKSB8fCBmYWxzZTtcblx0fVxuXG5cdGdldFR5cGUobmFtZTogc3RyaW5nKTogVHlwZSB7XG5cdFx0aWYgKHRoaXMudHlwZXMuaGFzKG5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50eXBlcy5nZXQobmFtZSkgfHwgVHlwZXMuTlVMTDtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMucGFyZW50Py5nZXRUeXBlKG5hbWUpIHx8IFR5cGVzLk5VTEw7XG5cdH1cblxuXHRnZXRUeXBlQmluZGluZyhuYW1lOiBzdHJpbmcpOiBUeXBlIHtcblx0XHRpZiAodGhpcy50eXBlQmluZGluZ3MuaGFzKG5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50eXBlQmluZGluZ3MuZ2V0KG5hbWUpIHx8IFR5cGVzLk5VTEw7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnBhcmVudD8uZ2V0VHlwZUJpbmRpbmcobmFtZSkgfHwgVHlwZXMuTlVMTDtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gd3JhcFR5cGUodHlwZU5vZGU6IEFTVFR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIHNjb3BlOiBUeXBlU2NvcGUgfCBudWxsID0gbnVsbCk6IFR5cGUge1xuXHRsZXQgYmFzZVR5cGUgPSByZXNvbHZlQmFzZVR5cGUodHlwZU5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBzY29wZSk7XG5cdGlmIChiYXNlVHlwZSkge1xuXHRcdGlmICghKGJhc2VUeXBlIGluc3RhbmNlb2YgTnVsbGFibGVUeXBlKSAmJiB0eXBlTm9kZS5udWxsYWJsZSkge1xuXHRcdFx0cmV0dXJuIG5ldyBOdWxsYWJsZVR5cGUoYmFzZVR5cGUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBiYXNlVHlwZTtcblx0fVxuXG5cdHRocm93VHlwZUVycm9yKGBDb3VsZCBub3QgcmVzb2x2ZSB0eXBlICR7dHlwZU5vZGUubmFtZX0uYCwgdHlwZU5vZGUuc3Bhbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlQmFzZVR5cGUodHlwZU5vZGU6IEFTVFR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIHNjb3BlOiBUeXBlU2NvcGUgfCBudWxsID0gbnVsbCk6IFR5cGUge1xuXHRzd2l0Y2ggKHR5cGVOb2RlLmtpbmQpIHtcblx0XHRjYXNlIEFTVFR5cGVOb2RlLktJTkRfU0lNUExFOiB7XG5cdFx0XHRpZiAoc2NvcGUgJiYgc2NvcGUuaGFzVHlwZUJpbmRpbmcodHlwZU5vZGUubmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIHNjb3BlLmdldFR5cGVCaW5kaW5nKHR5cGVOb2RlLm5hbWUpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAob2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiByZXNvbHZlUmVmVHlwZSh0eXBlTm9kZSwgb2JqZWN0UmVnaXN0cnkpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoUHJpbWl0aXZlVHlwZXMuaGFzVHlwZSh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzb2x2ZVByaW1pdGl2ZVR5cGUodHlwZU5vZGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbmV3IFR5cGVWYXJpYWJsZSh0eXBlTm9kZS5uYW1lKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1RUeXBlTm9kZS5LSU5EX0dFTkVSSUM6IHtcblx0XHRcdGlmICghb2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0XHRcdHRocm93VHlwZUVycm9yKGBTeW1ib2wgJHt0eXBlTm9kZS5uYW1lfSBpcyBub3QgYSBjbGFzcyByZWZlcmVuY2UuYCwgdHlwZU5vZGUuc3Bhbik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzb2x2ZUdlbmVyaWNSZWZUeXBlKHR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeSk7XG5cdFx0fVxuXHRcdGNhc2UgQVNUVHlwZU5vZGUuS0lORF9MQU1CREE6IHtcblx0XHRcdHJldHVybiByZXNvbHZlTGFtYmRhVHlwZSh0eXBlTm9kZSwgb2JqZWN0UmVnaXN0cnkpO1xuXHRcdH1cblx0XHRkZWZhdWx0OiB7XG5cdFx0XHR0aHJvd1R5cGVFcnJvcihcblx0XHRcdFx0YEludmFsaWQgdHlwZSBhbm5vdGF0aW9uLCBraW5kICR7dHlwZU5vZGUua2luZH0uYCxcblx0XHRcdFx0dHlwZU5vZGUuc3BhblxuXHRcdFx0KTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVSZWZUeXBlKHR5cGVOb2RlOiBBU1RUeXBlTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogQ2xhc3NSZWZUeXBlIHwgSW50ZXJmYWNlUmVmVHlwZSB8IFR5cGUge1xuXHRpZiAodHlwZU5vZGUudHlwZUFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0dGhyb3dUeXBlRXJyb3IoYEdlbmVyaWMgY2xhc3MgJHt0eXBlTm9kZS5uYW1lfSBjYW5ub3QgaGF2ZSB0eXBlIGFyZ3VtZW50cy5gLCB0eXBlTm9kZS5zcGFuKTtcblx0fVxuXG5cdGlmIChvYmplY3RSZWdpc3RyeS50eXBlcy5jbGFzc1N5bWJvbHMuaGFzKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0cmV0dXJuIG5ldyBDbGFzc1JlZlR5cGUob2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2wodHlwZU5vZGUubmFtZSkpO1xuXHR9XG5cblx0aWYgKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmludGVyZmFjZVN5bWJvbHMuaGFzKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0cmV0dXJuIG5ldyBJbnRlcmZhY2VSZWZUeXBlKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldEludGVyYWNlU3ltYm9sKHR5cGVOb2RlLm5hbWUpKTtcblx0fVxuXG5cdHRocm93VHlwZUVycm9yKGBVbmtub3duIGNsYXNzIG9yIGludGVyZmFjZSAke3R5cGVOb2RlLm5hbWV9LmAsIHR5cGVOb2RlLnNwYW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUdlbmVyaWNSZWZUeXBlKHR5cGVOb2RlOiBBU1RUeXBlTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogQ2xhc3NSZWZUeXBlIHwgSW50ZXJmYWNlUmVmVHlwZSB8IFR5cGUge1xuXHRpZiAob2JqZWN0UmVnaXN0cnkudHlwZXMuY2xhc3NTeW1ib2xzLmhhcyh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdHJldHVybiBuZXcgQ2xhc3NSZWZUeXBlKFxuXHRcdFx0b2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2wodHlwZU5vZGUubmFtZSksXG5cdFx0XHR0eXBlTm9kZS50eXBlQXJndW1lbnRzLm1hcCh0eXBlQXJndW1lbnQgPT4gcmVzb2x2ZUJhc2VUeXBlKHR5cGVBcmd1bWVudCwgb2JqZWN0UmVnaXN0cnkpKVxuXHRcdCk7XG5cdH1cblxuXHRpZiAob2JqZWN0UmVnaXN0cnkudHlwZXMuaW50ZXJmYWNlU3ltYm9scy5oYXModHlwZU5vZGUubmFtZSkpIHtcblx0XHRyZXR1cm4gbmV3IEludGVyZmFjZVJlZlR5cGUoXG5cdFx0XHRvYmplY3RSZWdpc3RyeS50eXBlcy5nZXRJbnRlcmFjZVN5bWJvbCh0eXBlTm9kZS5uYW1lKSxcblx0XHRcdHR5cGVOb2RlLnR5cGVBcmd1bWVudHMubWFwKHR5cGVBcmd1bWVudCA9PiByZXNvbHZlQmFzZVR5cGUodHlwZUFyZ3VtZW50LCBvYmplY3RSZWdpc3RyeSkpXG5cdFx0KTtcblx0fVxuXG5cdHRocm93VHlwZUVycm9yKGBVbmtub3duIGNsYXNzIG9yIGludGVyZmFjZSAke3R5cGVOb2RlLm5hbWV9LmAsIHR5cGVOb2RlLnNwYW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVByaW1pdGl2ZVR5cGUodHlwZU5vZGU6IEFTVFR5cGVOb2RlKTogVHlwZSB7XG5cdHJldHVybiBUeXBlcy5nZXRUeXBlKHR5cGVOb2RlLm5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUxhbWJkYVR5cGUodHlwZU5vZGU6IEFTVFR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIHNjb3BlOiBUeXBlU2NvcGUgfCBudWxsID0gbnVsbCk6IExhbWJkYVR5cGUge1xuXHRjb25zdCBwYXJhbWV0ZXJTeW1ib2xzID0gdHlwZU5vZGUucGFyYW1ldGVyVHlwZXMubWFwKFxuXHRcdHR5cGVBbm5vdGF0aW9uID0+IHtcblx0XHRcdHJldHVybiBuZXcgUGFyYW1ldGVyU3ltYm9sKFxuXHRcdFx0XHR0eXBlQW5ub3RhdGlvbi5uYW1lLFxuXHRcdFx0XHR3cmFwVHlwZSh0eXBlQW5ub3RhdGlvbiwgb2JqZWN0UmVnaXN0cnksIHNjb3BlKVxuXHRcdFx0KTtcblx0XHR9XG5cdCk7XG5cblx0cmV0dXJuIG5ldyBMYW1iZGFUeXBlKFxuXHRcdHBhcmFtZXRlclN5bWJvbHMsXG5cdFx0dHlwZU5vZGUucmV0dXJuVHlwZVxuXHRcdFx0PyB3cmFwVHlwZSh0eXBlTm9kZS5yZXR1cm5UeXBlLCBvYmplY3RSZWdpc3RyeSwgc2NvcGUpXG5cdFx0XHQ6IFR5cGVzLk1JWEVEXG5cdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdGl0dXRlVHlwZSh0eXBlOiBUeXBlLCBzdWJzdGl0dXRpb25NYXA6IE1hcDxzdHJpbmcsIFR5cGU+KTogVHlwZSB7XG5cdGlmICh0eXBlIGluc3RhbmNlb2YgVHlwZVZhcmlhYmxlKSB7XG5cdFx0cmV0dXJuIHN1YnN0aXR1dGlvbk1hcC5nZXQodHlwZS5uYW1lKSA/PyB0eXBlO1xuXHR9XG5cblx0aWYgKHR5cGUgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUpIHtcblx0XHRyZXR1cm4gbmV3IENsYXNzUmVmVHlwZShcblx0XHRcdHR5cGUuY2xhc3NTeW1ib2wsXG5cdFx0XHR0eXBlLnR5cGVBcmd1bWVudHMubWFwKHR5cGVBcmd1bWVudCA9PiBzdWJzdGl0dXRlVHlwZSh0eXBlQXJndW1lbnQsIHN1YnN0aXR1dGlvbk1hcCkpXG5cdFx0KTtcblx0fVxuXG5cdGlmICh0eXBlIGluc3RhbmNlb2YgTnVsbGFibGVUeXBlKSB7XG5cdFx0cmV0dXJuIG5ldyBOdWxsYWJsZVR5cGUoc3Vic3RpdHV0ZVR5cGUodHlwZS5pbm5lciwgc3Vic3RpdHV0aW9uTWFwKSk7XG5cdH1cblxuXHRyZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkVHlwZVN1YnN0aXR1dGlvbk1hcCh0eXBlUGFyYW1ldGVyczogVHlwZVBhcmFtZXRlclN5bWJvbFtdLCB0eXBlQXJndW1lbnRzOiBUeXBlW10pOiBNYXA8c3RyaW5nLCBUeXBlPiB7XG5cdGNvbnN0IHN1YnN0aXR1dGlvbk1hcCA9IG5ldyBNYXAoKTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHR5cGVQYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgdHlwZVBhcmFtZXRlcjogVHlwZVBhcmFtZXRlclN5bWJvbCB8IG51bGwgPSB0eXBlUGFyYW1ldGVyc1tpXSB8fCBudWxsO1xuXHRcdGNvbnN0IHR5cGVBcmd1bWVudDogVHlwZSB8IG51bGwgPSB0eXBlQXJndW1lbnRzW2ldIHx8IG51bGw7XG5cblx0XHRpZiAodHlwZVBhcmFtZXRlciAmJiB0eXBlQXJndW1lbnQpIHtcblx0XHRcdHN1YnN0aXR1dGlvbk1hcC5zZXQodHlwZVBhcmFtZXRlci5uYW1lLCB0eXBlQXJndW1lbnQpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdWJzdGl0dXRpb25NYXA7XG59XG4iLAogICAgImltcG9ydCB7Q2xhc3NSZWZUeXBlLCBUeXBlLCBUeXBlc30gZnJvbSBcIi4vdHlwZV9vYmplY3RzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB7dGhyb3dSdW50aW1lRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcblxuZXhwb3J0IGNsYXNzIEF1dG9ib3hlZFR5cGVzIHtcblx0c3RhdGljIE5VTUJFUjogc3RyaW5nID0gJ051bWJlcic7XG5cdHN0YXRpYyBTVFJJTkc6IHN0cmluZyA9ICdTdHJpbmcnO1xuXHRzdGF0aWMgQk9PTEVBTjogc3RyaW5nID0gJ0Jvb2xlYW4nO1xuXG5cdHN0YXRpYyBDTEFTU05BTUVfTUFQOiB7IFtzOiBzdHJpbmddOiBzdHJpbmc7IH0gPSB7XG5cdFx0bnVtYmVyOiBBdXRvYm94ZWRUeXBlcy5OVU1CRVIsXG5cdFx0c3RyaW5nOiBBdXRvYm94ZWRUeXBlcy5TVFJJTkcsXG5cdFx0Ym9vbGVhbjogQXV0b2JveGVkVHlwZXMuQk9PTEVBTlxuXHR9O1xuXG5cdHN0YXRpYyBnZXRDbGFzc05hbWUoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdGNvbnN0IGNsYXNzTmFtZSA9IEF1dG9ib3hlZFR5cGVzLkNMQVNTTkFNRV9NQVBba2V5XTtcblx0XHRpZiAoIWNsYXNzTmFtZSkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYE5vIGNsYXNzIGZvdW5kIGZvciBwcmltaXRpdmUgdHlwZSAke2tleX0uYCk7XG5cdFx0fVxuXHRcdHJldHVybiBjbGFzc05hbWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9ib3hpbmcge1xuXHRzdGF0aWMgQ0xBU1NOQU1FX01BUDogTWFwPFR5cGUsIHN0cmluZz4gPSBuZXcgTWFwKFxuXHRcdFtcblx0XHRcdFtUeXBlcy5OVU1CRVIsIEF1dG9ib3hlZFR5cGVzLk5VTUJFUl0sXG5cdFx0XHRbVHlwZXMuU1RSSU5HLCBBdXRvYm94ZWRUeXBlcy5TVFJJTkddLFxuXHRcdFx0W1R5cGVzLkJPT0xFQU4sIEF1dG9ib3hlZFR5cGVzLkJPT0xFQU5dXG5cdFx0XVxuXHQpO1xuXG5cdHN0YXRpYyBhdXRvYm94SWZOZWVkZWQob2JqZWN0VHlwZTogVHlwZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogQ2xhc3NSZWZUeXBlIHwgVHlwZSB7XG5cdFx0Y29uc3QgY2xhc3NOYW1lID0gQXV0b2JveGluZy5DTEFTU05BTUVfTUFQLmdldChvYmplY3RUeXBlKTtcblx0XHRpZiAoY2xhc3NOYW1lKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENsYXNzUmVmVHlwZShvYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChjbGFzc05hbWUpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gb2JqZWN0VHlwZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge1xuXHRDbGFzc0RlZmluaXRpb24sXG5cdENsYXNzTWV0aG9kRGVmaW5pdGlvbixcblx0RW52aXJvbm1lbnQsXG5cdEV4ZWN1dGlvblN0b3AsXG5cdEluc3RhbmNlLFxuXHRSZXR1cm5WYWx1ZVxufSBmcm9tIFwiLi9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuaW1wb3J0IHtcblx0QVNUQW5ub3RhdGlvbk5vZGUsXG5cdEFTVEFycmF5Tm9kZSxcblx0QVNUQXNzaWdubWVudE5vZGUsXG5cdEFTVEJpbmFyeU5vZGUsXG5cdEFTVENhbGxOb2RlLFxuXHRBU1RDbGFzc05vZGUsXG5cdEFTVEV4cHJlc3Npb25Ob2RlLFxuXHRBU1RGb3JlYWNoTm9kZSxcblx0QVNUSWZOb2RlLFxuXHRBU1RJbmRleE5vZGUsXG5cdEFTVExhbWJkYU5vZGUsXG5cdEFTVE1hdGNoQ2FzZU5vZGUsXG5cdEFTVE1hdGNoTm9kZSxcblx0QVNUTWVtYmVyTm9kZSxcblx0QVNUTWV0aG9kTm9kZSxcblx0QVNUTmV3Tm9kZSxcblx0QVNUTm9kZSxcblx0QVNUTm9kZVR5cGUsXG5cdEFTVFBhcmFtZXRlck5vZGUsXG5cdEFTVFJldHVybk5vZGUsXG5cdEFTVFR5cGVOb2RlLFxuXHRBU1RVbmFyeU5vZGUsXG5cdEFTVFZhcmlhYmxlTm9kZSxcblx0QVNUVkRvbU5vZGUsXG5cdEFTVFZEb21UZXh0Tm9kZVxufSBmcm9tIFwiLi4vYXN0XCI7XG5pbXBvcnQge0dSQU1NQVIsIFRZUEVfRU5VTX0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcbmltcG9ydCB7TmF0aXZlQ2xhc3Nlc30gZnJvbSBcIi4uLy4uL2xpYnJhcnkvbmF0aXZlX2NsYXNzZXNcIjtcbmltcG9ydCB7TmF0aXZlRnVuY3Rpb24sIE5hdGl2ZUZ1bmN0aW9ucywgTmF0aXZlRnVuY3Rpb25UeXBlUmVnaXN0cnl9IGZyb20gXCIuLi8uLi9saWJyYXJ5L25hdGl2ZV9mdW5jdGlvbnNcIjtcbmltcG9ydCB7Y2FzdFZhbHVlLCBmcm9tTHlyYVZhbHVlLCBMeXJhTmF0aXZlT2JqZWN0LCByZXR1cm5WYWx1ZSwgd3JhcE5hdGl2ZUluc3RhbmNlfSBmcm9tIFwiLi9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge3Rocm93UnVudGltZUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQge0F1dG9ib3hlZFR5cGVzfSBmcm9tIFwiLi4vdHlwZXMvYXV0b2JveGluZ1wiO1xuaW1wb3J0IHtMeXJhQXJyYXl9IGZyb20gXCIuLi8uLi9saWJyYXJ5L2NsYXNzZXMvYXJyYXlcIjtcbmltcG9ydCB0eXBlIHtWTm9kZX0gZnJvbSBcIi4uL3Zkb20vdmRvbVwiO1xuaW1wb3J0IHR5cGUge0V2ZW50UGlwZWxpbmV9IGZyb20gXCIuLi9ldmVudC9waXBlbGluZVwiO1xuXG5jb25zdCBuYXRpdmVDbGFzc2VzID0gbmV3IE5hdGl2ZUNsYXNzZXMoKTtcbmNvbnN0IG5hdGl2ZUZ1bmN0aW9ucyA9IG5ldyBOYXRpdmVGdW5jdGlvbnMoKTtcbmNvbnN0IGdsb2JhbEZ1bmN0aW9ucyA9IG5hdGl2ZUZ1bmN0aW9ucy5nZXRHbG9iYWxGdW5jdGlvbnMoKTtcbmNvbnN0IGdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5OiBOYXRpdmVGdW5jdGlvblR5cGVSZWdpc3RyeSA9IG5hdGl2ZUZ1bmN0aW9ucy5nZXRHbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeSgpO1xuXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RGdW5jdGlvbkNhbGwge1xuXHRub2RlOiBBU1ROb2RlO1xuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cdGZ1bmN0aW9uRW52OiBFbnZpcm9ubWVudDtcblx0ZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZTtcblxuXHRjb25zdHJ1Y3Rvcihub2RlOiBBU1ROb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGZ1bmN0aW9uRW52OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSkge1xuXHRcdHRoaXMubm9kZSA9IG5vZGU7XG5cdFx0dGhpcy5vYmplY3RSZWdpc3RyeSA9IG9iamVjdFJlZ2lzdHJ5O1xuXHRcdHRoaXMuZnVuY3Rpb25FbnYgPSBmdW5jdGlvbkVudjtcblx0XHR0aGlzLmV2ZW50UGlwZWxpbmUgPSBldmVudFBpcGVsaW5lO1xuXHR9XG5cblx0Z2V0QVNUQ2FsbE5vZGUoKTogQVNUQ2FsbE5vZGUge1xuXHRcdGlmICghKHRoaXMubm9kZSBpbnN0YW5jZW9mIEFTVENhbGxOb2RlKSkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgbmF0aXZlIGZ1bmN0aW9uIGNhbGwgJHt0aGlzLm5vZGUudHlwZX0uYCwgdGhpcy5ub2RlLnNwYW4pO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5ub2RlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge0FTVExhbWJkYU5vZGV9XG5cdCAqL1xuXHRnZXRBU1RMYW1iZGFOb2RlKCk6IEFTVExhbWJkYU5vZGUge1xuXHRcdGlmICghKHRoaXMubm9kZSBpbnN0YW5jZW9mIEFTVExhbWJkYU5vZGUpKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBsYW1iZGEgY2FsbCAke3RoaXMubm9kZS50eXBlfS5gLCB0aGlzLm5vZGUuc3Bhbik7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLm5vZGU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIExhbWJkYUZ1bmN0aW9uQ2FsbCBleHRlbmRzIEFic3RyYWN0RnVuY3Rpb25DYWxsIHtcblx0ZXZhbENhbGwodGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwsIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcblx0XHRjb25zdCBub2RlOiBBU1RMYW1iZGFOb2RlID0gdGhpcy5nZXRBU1RMYW1iZGFOb2RlKCk7XG5cdFx0Y29uc3QgY2xvc3VyZUVudiA9IG5ldyBFbnZpcm9ubWVudCh0aGlzLmZ1bmN0aW9uRW52KTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5wYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBwYXJhbWV0ZXI6IEFTVFBhcmFtZXRlck5vZGUgfCBudWxsID0gbm9kZS5wYXJhbWV0ZXJzW2ldIHx8IG51bGw7XG5cdFx0XHRpZiAoIXBhcmFtZXRlcikge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGNsb3N1cmVFbnYuZGVmaW5lKHBhcmFtZXRlci5uYW1lLCBhcmdzW2ldKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZhbFJldHVybihcblx0XHRcdG5vZGUuY2hpbGRyZW4sXG5cdFx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0Y2xvc3VyZUVudixcblx0XHRcdHRoaXMuZXZlbnRQaXBlbGluZSxcblx0XHRcdHRoaXNWYWx1ZSxcblx0XHRcdG5vZGUucmV0dXJuVHlwZVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE5hdGl2ZUZ1bmN0aW9uQ2FsbCBleHRlbmRzIEFic3RyYWN0RnVuY3Rpb25DYWxsIHtcblx0ZXZhbENhbGwodGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwsIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcblx0XHRjb25zdCBjYWxsTm9kZTogQVNUQ2FsbE5vZGUgPSB0aGlzLmdldEFTVENhbGxOb2RlKCk7XG5cblx0XHRsZXQgcmVzdWx0OiBhbnkgPSB0aGlzLnJlc29sdmVDYWxsKHRoaXNWYWx1ZSlbY2FsbE5vZGUuY2FsbGVlLm5hbWVdKC4uLmFyZ3MpO1xuXHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRyZXN1bHQgPSB3cmFwTmF0aXZlSW5zdGFuY2UocmVzdWx0LCB0aGlzLm9iamVjdFJlZ2lzdHJ5KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0ID0gcmV0dXJuVmFsdWUocmVzdWx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZhbFJldHVybihcblx0XHRcdFtyZXN1bHRdLFxuXHRcdFx0dGhpcy5vYmplY3RSZWdpc3RyeSxcblx0XHRcdHRoaXMuZnVuY3Rpb25FbnYsXG5cdFx0XHR0aGlzLmV2ZW50UGlwZWxpbmUsXG5cdFx0XHR0aGlzVmFsdWUsXG5cdFx0XHR0aGlzLmxvb2t1cEZ1bmN0aW9uVHlwZShjYWxsTm9kZS5jYWxsZWUubmFtZSkucmV0dXJuVHlwZVxuXHRcdCk7XG5cdH1cblxuXHRsb29rdXBGdW5jdGlvblR5cGUobmFtZTogc3RyaW5nKTogTmF0aXZlRnVuY3Rpb24ge1xuXHRcdHJldHVybiBnbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeS5nZXQobmFtZSk7XG5cdH1cblxuXHRyZXNvbHZlQ2FsbCh0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCk6IGFueSB7XG5cdFx0Y29uc3Qgbm9kZTogQVNUQ2FsbE5vZGUgfCBudWxsID0gdGhpcy5nZXRBU1RDYWxsTm9kZSgpO1xuXHRcdGlmIChub2RlID09PSBudWxsKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcignSW52YWxpZCBmdW5jdGlvbiBjYWxsLicpO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmFsRXhwcmVzc2lvbihub2RlLmNhbGxlZSwgdGhpcy5vYmplY3RSZWdpc3RyeSwgdGhpcy5mdW5jdGlvbkVudiwgdGhpcy5ldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck5hdGl2ZUNsYXNzZXMob2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQpOiB2b2lkIHtcblx0Zm9yIChjb25zdCBuYXRpdmVDbGFzcyBvZiBuYXRpdmVDbGFzc2VzLnJlZ2lzdHJ5LnZhbHVlcygpKSB7XG5cdFx0aWYgKG5hdGl2ZUNsYXNzLmlzQXV0b2xvYWRBYmxlKSB7XG5cdFx0XHRjb25zdCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uID0gbmF0aXZlQ2xhc3MuZ2V0Q2xhc3NEZWZpbml0aW9uKCk7XG5cdFx0XHRvYmplY3RSZWdpc3RyeS5jbGFzc2VzLnNldChuYXRpdmVDbGFzcy5uYW1lLCBjbGFzc0RlZik7XG5cdFx0XHRlbnZpcm9ubWVudC5kZWZpbmUobmF0aXZlQ2xhc3MubmFtZSwgY2xhc3NEZWYpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJOYXRpdmVGdW5jdGlvbnMoZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogdm9pZCB7XG5cdGZvciAoY29uc3QgbmFtZSBpbiBnbG9iYWxGdW5jdGlvbnMpIHtcblx0XHRjb25zdCBnbG9iYWxGdW5jdGlvbjogYW55ID0gZ2xvYmFsRnVuY3Rpb25zW25hbWVdO1xuXHRcdGlmICghZ2xvYmFsRnVuY3Rpb24pIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKCdHbG9iYWwgZnVuY3Rpb24gaXMgbnVsbC4nKTtcblx0XHR9XG5cdFx0ZW52aXJvbm1lbnQuZGVmaW5lKG5hbWUsIGdsb2JhbEZ1bmN0aW9ucyk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxOb2RlKFxuXHRub2RlOiBBU1ROb2RlLFxuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksXG5cdGVudmlyb25tZW50OiBFbnZpcm9ubWVudCxcblx0ZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSxcblx0dGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsXG4pOiBhbnkge1xuXHRpZiAobm9kZS5pc0V4cHJlc3Npb24pIHtcblx0XHRyZXR1cm4gbmV3IFJldHVyblZhbHVlKGV2YWxFeHByZXNzaW9uKG5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKSk7XG5cdH1cblxuXHRzd2l0Y2ggKG5vZGUudHlwZSkge1xuXHRcdGNhc2UgQVNUTm9kZVR5cGUuUFJPR1JBTU06IHtcblx0XHRcdGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuXHRcdFx0XHRldmFsTm9kZShjaGlsZCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuSU1QT1JUOlxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuSU5URVJGQUNFOiB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5DTEFTUzoge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RDbGFzc05vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxDbGFzcyhub2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgY2xhc3Mgbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5WQVJJQUJMRToge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RWYXJpYWJsZU5vZGUpIHtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBub2RlLmluaXRcblx0XHRcdFx0XHQ/IGV2YWxFeHByZXNzaW9uKG5vZGUuaW5pdCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpXG5cdFx0XHRcdFx0OiBudWxsO1xuXHRcdFx0XHRlbnZpcm9ubWVudC5kZWZpbmUobm9kZS5uYW1lLCB2YWx1ZSk7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgdmFyaWFibGUgbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5JRjoge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RJZk5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxJZihub2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBpZiBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLk1BVENIOiB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVE1hdGNoTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbE1hdGNoKG5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIG1hdGNoIG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuRk9SRUFDSDoge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RGb3JlYWNoTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbEZvcmVhY2gobm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgZm9yZWFjaCBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLlZET006IHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUVkRvbU5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxWRG9tTm9kZShub2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBmb3JlYWNoIG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuRVhQUkVTU0lPTjoge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RFeHByZXNzaW9uTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbEV4cHJlc3Npb24obm9kZS5leHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBleHByZXNzaW9uIG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuUkVUVVJOOiB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVFJldHVybk5vZGUpIHtcblx0XHRcdFx0Y29uc3QgdmFsdWU6IGFueSA9IG5vZGUuYXJndW1lbnRcblx0XHRcdFx0XHQ/IGV2YWxFeHByZXNzaW9uKG5vZGUuYXJndW1lbnQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKVxuXHRcdFx0XHRcdDogbnVsbDtcblx0XHRcdFx0cmV0dXJuIG5ldyBSZXR1cm5WYWx1ZSh2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCByZXR1cm4gbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0ZGVmYXVsdDoge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVuaGFuZGxlZCBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlLnNwYW4pO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0RW1wdHlJbnN0YW5jZShub2RlOiBBU1RDbGFzc05vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IEluc3RhbmNlIHtcblx0bGV0IGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb247XG5cblx0aWYgKG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuaGFzKG5vZGUubmFtZSkpIHtcblx0XHRjbGFzc0RlZiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KG5vZGUubmFtZSk7XG5cdH0gZWxzZSB7XG5cdFx0Y2xhc3NEZWYgPSBDbGFzc0RlZmluaXRpb24uZnJvbUFTVChub2RlKTtcblx0XHRvYmplY3RSZWdpc3RyeS5jbGFzc2VzLnNldChub2RlLm5hbWUsIGNsYXNzRGVmKTtcblx0fVxuXG5cdHJldHVybiBjbGFzc0RlZi5jb25zdHJ1Y3RFbXB0eUluc3RhbmNlKG9iamVjdFJlZ2lzdHJ5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdE5hdGl2ZUluc3RhbmNlKGV4cHI6IEFTVE5ld05vZGUsIGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogSW5zdGFuY2Uge1xuXHRyZXR1cm4gY2xhc3NEZWYuY29uc3RydWN0TmF0aXZlSW5zdGFuY2VCeU5ld05vZGUoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEluc3RhbmNlKGV4cHI6IEFTVE5ld05vZGUsIGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogSW5zdGFuY2Uge1xuXHRyZXR1cm4gY2xhc3NEZWYuY29uc3RydWN0SW5zdGFuY2VCeU5ld05vZGUoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxDbGFzcyhub2RlOiBBU1RDbGFzc05vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogdm9pZCB7XG5cdGNvbnN0IGluc3RhbmNlOiBJbnN0YW5jZSA9IGNvbnN0cnVjdEVtcHR5SW5zdGFuY2Uobm9kZSwgb2JqZWN0UmVnaXN0cnkpO1xuXG5cdGluc3RhbmNlLmluaXRpYWxpemVJbnN0YW5jZUZpZWxkcyhvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXG5cdGVudmlyb25tZW50LmRlZmluZShub2RlLm5hbWUsIGluc3RhbmNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxOZXcoZXhwcjogQVNUTmV3Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiBJbnN0YW5jZSB7XG5cdGlmICghb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5oYXMoZXhwci5uYW1lKSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBVbmtub3duIGNsYXNzICR7ZXhwci5uYW1lfS5gLCBleHByLnNwYW4pO1xuXHR9XG5cblx0Y29uc3QgY2xhc3NEZWYgPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChleHByLm5hbWUpO1xuXHRpZiAoY2xhc3NEZWYubmF0aXZlSW5zdGFuY2UpIHtcblx0XHRyZXR1cm4gY29uc3RydWN0TmF0aXZlSW5zdGFuY2UoZXhwciwgY2xhc3NEZWYsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG5cdH1cblxuXHRyZXR1cm4gY29uc3RydWN0SW5zdGFuY2UoZXhwciwgY2xhc3NEZWYsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsRXhwcmVzc2lvbihleHByOiBBU1ROb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0c3dpdGNoIChleHByLnR5cGUpIHtcblx0XHRjYXNlIEFTVE5vZGVUeXBlLlNUUklORzpcblx0XHRjYXNlIEFTVE5vZGVUeXBlLk5VTUJFUjpcblx0XHRjYXNlIEFTVE5vZGVUeXBlLkJPT0xFQU46IHtcblx0XHRcdHJldHVybiBleHByLnZhbHVlO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLk5VTEw6IHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLklERU5USUZJRVI6IHtcblx0XHRcdHJldHVybiBlbnZpcm9ubWVudC5nZXQoZXhwci5uYW1lKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5USElTOiB7XG5cdFx0XHRpZiAoIXRoaXNWYWx1ZSkge1xuXHRcdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgdGhpcyB1c2VkIG91dHNpZGUgb2YgbWV0aG9kLmAsIGV4cHIuc3Bhbik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpc1ZhbHVlO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkJJTkFSWToge1xuXHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RCaW5hcnlOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsQmluYXJ5KGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGJpbmFyeSBleHByZXNzaW9uICR7ZXhwci50eXBlfWApO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLlVOQVJZOiB7XG5cdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVFVuYXJ5Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbFVuYXJ5KGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIHVuYXJ5IGV4cHJlc3Npb24gJHtleHByLnR5cGV9LmAsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuQVNTSUdOTUVOVDoge1xuXHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RBc3NpZ25tZW50Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbEFzc2lnbihleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBhc3NpZ25tZW50IGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5NRU1CRVI6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbE1lbWJlcihleHByLCBlbnZpcm9ubWVudCk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBtZW1iZXIgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkNBTEw6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQ2FsbE5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxDYWxsKGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGNhbGwgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLlZET006IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUVkRvbU5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxWRG9tTm9kZShleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBjYWxsIGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5ORVc6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTmV3Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbE5ldyhleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgY2FsbCBleHByZXNzaW9uICR7ZXhwci50eXBlfWAsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuQVJSQVk6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQXJyYXlOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsQXJyYXkoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgYXJyYXkgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLklOREVYOiB7XG5cdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVEluZGV4Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbEluZGV4KGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGluZGV4IGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5MQU1CREE6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTGFtYmRhTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbExhbWJkYShleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgbGFtYmRhIGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0ZGVmYXVsdDoge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVuaGFuZGxlZCBleHByZXNzaW9uICR7ZXhwci50eXBlfS5gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEJpbmFyeShleHByOiBBU1RCaW5hcnlOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0Y29uc3QgbGVmdDogYW55ID0gY2FzdFZhbHVlKGV2YWxFeHByZXNzaW9uKGV4cHIubGVmdCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpKVxuXHRjb25zdCByaWdodDogYW55ID0gY2FzdFZhbHVlKGV2YWxFeHByZXNzaW9uKGV4cHIucmlnaHQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKSlcblxuXHRzd2l0Y2ggKGV4cHIub3BlcmF0b3IpIHtcblx0XHRjYXNlIEdSQU1NQVIuUExVUzoge1xuXHRcdFx0cmV0dXJuIGxlZnQgKyByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLk1JTlVTOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCAtIHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTVVMVElQTFk6IHtcblx0XHRcdHJldHVybiBsZWZ0ICogcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5ESVZJREU6IHtcblx0XHRcdHJldHVybiBsZWZ0IC8gcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5NT0RVTFVTOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCAlIHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTEVTU19USEFOOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCA8IHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuR1JFQVRFUl9USEFOOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCA+IHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTEVTU19FUVVBTDoge1xuXHRcdFx0cmV0dXJuIGxlZnQgPD0gcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5HUkVBVEVSX0VRVUFMOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCA+PSByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkVRVUFMOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCA9PT0gcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5OT1RfRVFVQUw6IHtcblx0XHRcdHJldHVybiBsZWZ0ICE9PSByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkFORDoge1xuXHRcdFx0cmV0dXJuIGxlZnQgJiYgcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5PUjoge1xuXHRcdFx0cmV0dXJuIGxlZnQgfHwgcmlnaHQ7XG5cdFx0fVxuXHRcdGRlZmF1bHQ6IHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBVbmtub3duIG9wZXJhdG9yICR7ZXhwci5vcGVyYXRvcn1gKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxBcnJheShleHByOiBBU1RBcnJheU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBJbnN0YW5jZSB7XG5cdGNvbnN0IHZhbHVlczogYW55W10gPSBbXTtcblx0Zm9yIChjb25zdCBlbGVtIG9mIGV4cHIuZWxlbWVudHMpIHtcblx0XHR2YWx1ZXMucHVzaChldmFsRXhwcmVzc2lvbihlbGVtLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSkpO1xuXHR9XG5cblx0Y29uc3QgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KCdBcnJheScpO1xuXHRjb25zdCBpbnN0YW5jZTogSW5zdGFuY2UgPSBjbGFzc0RlZi5jb25zdHJ1Y3RFbXB0eUluc3RhbmNlKG9iamVjdFJlZ2lzdHJ5KTtcblx0aW5zdGFuY2UuX19uYXRpdmVJbnN0YW5jZSA9IG5ldyBjbGFzc0RlZi5uYXRpdmVJbnN0YW5jZShmcm9tTHlyYVZhbHVlKHZhbHVlcykpO1xuXG5cdHJldHVybiBpbnN0YW5jZTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEluZGV4KGV4cHI6IEFTVEluZGV4Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCkge1xuXHRpZiAoIWV4cHIub2JqZWN0KSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYEluZGV4IGFjY2VzcyBvbiBudWxsLmAsIGV4cHIuc3Bhbik7XG5cdH1cblxuXHRpZiAoIWV4cHIuaW5kZXgpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgQWNjZXNzIHdpdGggdW5zcGVjaWZpYyBpbmRleC5gLCBleHByLnNwYW4pO1xuXHR9XG5cblx0Y29uc3Qgb2JqZWN0ID0gZXZhbEV4cHJlc3Npb24oZXhwci5vYmplY3QsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0Y29uc3QgaW5kZXggPSBldmFsRXhwcmVzc2lvbihleHByLmluZGV4LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cblx0aWYgKCEob2JqZWN0IGluc3RhbmNlb2YgTHlyYUFycmF5IHx8IG9iamVjdC5fX25hdGl2ZUluc3RhbmNlIGluc3RhbmNlb2YgTHlyYUFycmF5KSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKCdJbmRleCBhY2Nlc3Mgb24gbm9uLWFycmF5JywgZXhwci5zcGFuKTtcblx0fVxuXG5cdGNvbnN0IHRhcmdldCA9IG9iamVjdCBpbnN0YW5jZW9mIEx5cmFBcnJheSA/IG9iamVjdCA6IG9iamVjdC5fX25hdGl2ZUluc3RhbmNlO1xuXHRjb25zdCB2YWx1ZSA9IHRhcmdldC52YWx1ZXNbaW5kZXhdO1xuXG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRyZXR1cm4gd3JhcE5hdGl2ZUluc3RhbmNlKHZhbHVlLCBvYmplY3RSZWdpc3RyeSk7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsTGFtYmRhKG5vZGU6IEFTVExhbWJkYU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgbGFtYmRhRW52OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IExhbWJkYUZ1bmN0aW9uQ2FsbCB7XG5cdHJldHVybiBuZXcgTGFtYmRhRnVuY3Rpb25DYWxsKG5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBsYW1iZGFFbnYsIGV2ZW50UGlwZWxpbmUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsQXNzaWduKGV4cHI6IEFTVEFzc2lnbm1lbnROb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0Y29uc3QgdmFsdWU6IGFueSA9IGV2YWxFeHByZXNzaW9uKGV4cHIucmlnaHQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblxuXHRpZiAoZXhwci5sZWZ0LnR5cGUgPT09IEFTVE5vZGVUeXBlLk1FTUJFUikge1xuXHRcdGlmIChleHByLmxlZnQgaW5zdGFuY2VvZiBBU1RNZW1iZXJOb2RlKSB7XG5cdFx0XHRjb25zdCBvYmplY3Q6IEluc3RhbmNlID0gZXZhbEV4cHJlc3Npb24oXG5cdFx0XHRcdGV4cHIubGVmdC5vYmplY3QsXG5cdFx0XHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0XHRlbnZpcm9ubWVudCxcblx0XHRcdFx0ZXZlbnRQaXBlbGluZSxcblx0XHRcdFx0dGhpc1ZhbHVlXG5cdFx0XHQpIGFzIEluc3RhbmNlO1xuXG5cdFx0XHRpZiAoZXhwci5sZWZ0Lm9iamVjdC50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0XHRcdG9iamVjdC5fX3N0YXRpY0ZpZWxkc1tleHByLmxlZnQucHJvcGVydHldID0gdmFsdWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvYmplY3QuX19pbnN0YW5jZUZpZWxkc1tleHByLmxlZnQucHJvcGVydHldID0gdmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdG9iamVjdC5tYXJrRGlydHkoZXZlbnRQaXBlbGluZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIG1lbWJlciBleHByZXNzaW9uICR7ZXhwci50eXBlfWAsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGVudmlyb25tZW50LnNldChleHByLmxlZnQubmFtZSwgdmFsdWUpO1xuXHR9XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxNZW1iZXIoZXhwcjogQVNUTWVtYmVyTm9kZSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogYW55IHtcblx0Y29uc3Qgb2JqZWN0OiBhbnkgPSBlbnZpcm9ubWVudC5nZXQoZXhwci5vYmplY3QubmFtZSk7XG5cblx0aWYgKGV4cHIucHJvcGVydHkgaW4gb2JqZWN0Ll9faW5zdGFuY2VGaWVsZHMpIHtcblx0XHRyZXR1cm4gb2JqZWN0Ll9faW5zdGFuY2VGaWVsZHNbZXhwci5wcm9wZXJ0eV07XG5cdH1cblxuXHRpZiAoZXhwci5wcm9wZXJ0eSBpbiBvYmplY3QuX19zdGF0aWNGaWVsZHMpIHtcblx0XHRyZXR1cm4gb2JqZWN0Ll9fc3RhdGljRmllbGRzW2V4cHIucHJvcGVydHldO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsQ2FsbChleHByOiBBU1RDYWxsTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdC8vIHN1cGVyIGNhbGwgaW5zaWRlIGNvbnN0cnVjdG9yXG5cdGlmIChleHByLmNhbGxlZS50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSICYmIGV4cHIuY2FsbGVlLm5hbWUgPT09IEdSQU1NQVIuU1VQRVIpIHtcblx0XHRpZiAoIXRoaXNWYWx1ZSB8fCAhdGhpc1ZhbHVlLl9fY2xhc3NEZWY/LnN1cGVyQ2xhc3MpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKCdzdXBlcigpIHVzZWQgb3V0c2lkZSBvZiBzdWJjbGFzcyBjb25zdHJ1Y3RvcicpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHN1cGVyQ2xhc3NEZWYgPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldCh0aGlzVmFsdWUuX19jbGFzc0RlZi5zdXBlckNsYXNzKTtcblx0XHRjb25zdCBjb25zdHJ1Y3Rvck1ldGhvZCA9IHN1cGVyQ2xhc3NEZWYuY29uc3RydWN0b3JNZXRob2Q7XG5cblx0XHRpZiAoIWNvbnN0cnVjdG9yTWV0aG9kKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRjb25zdCBjb25zdHJ1Y3RvckVudiA9IG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCk7XG5cdFx0Y29uc3RydWN0b3JFbnYuZGVmaW5lKEdSQU1NQVIuVEhJUywgdGhpc1ZhbHVlKTtcblxuXHRcdGJpbmRNZXRob2RQYXJhbWV0ZXJzKGV4cHIsXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3JNZXRob2QucGFyYW1ldGVycyxcblx0XHQgICAgICAgICAgICAgICAgICAgICBvYmplY3RSZWdpc3RyeSxcblx0XHQgICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvckVudixcblx0XHQgICAgICAgICAgICAgICAgICAgICBlbnZpcm9ubWVudCxcblx0XHQgICAgICAgICAgICAgICAgICAgICBldmVudFBpcGVsaW5lLFxuXHRcdCAgICAgICAgICAgICAgICAgICAgIHRoaXNWYWx1ZVxuXHRcdCk7XG5cblx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIGNvbnN0cnVjdG9yTWV0aG9kLmNoaWxkcmVuKSB7XG5cdFx0XHRldmFsTm9kZShjaGlsZCwgb2JqZWN0UmVnaXN0cnksIGNvbnN0cnVjdG9yRW52LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0aWYgKGV4cHIuY2FsbGVlLnR5cGUgPT09IEFTVE5vZGVUeXBlLk1FTUJFUikge1xuXHRcdGlmIChleHByLmNhbGxlZSBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpIHtcblx0XHRcdGlmIChleHByLmNhbGxlZS5vYmplY3QudHlwZSA9PT0gQVNUTm9kZVR5cGUuSURFTlRJRklFUikge1xuXHRcdFx0XHRjb25zdCBjbGFzc05hbWUgPSBleHByLmNhbGxlZS5vYmplY3QubmFtZTtcblxuXHRcdFx0XHRpZiAob2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5oYXMoY2xhc3NOYW1lKSkge1xuXHRcdFx0XHRcdHJldHVybiBldmFsU3RhdGljQ2FsbChleHByLCBjbGFzc05hbWUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGV2YWxJbnN0YW5jZUNhbGwoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIGV2YWxGdW5jdGlvbkNhbGwoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEZ1bmN0aW9uQ2FsbChleHByOiBBU1RDYWxsTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCkge1xuXHRjb25zdCBmdW5jdGlvbkNhbGwgPSBldmFsRXhwcmVzc2lvbihleHByLmNhbGxlZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRjb25zdCBhcmdzID0gZXZhbENhbGxBcmd1bWVudHMoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXG5cdGlmIChmdW5jdGlvbkNhbGwgaW5zdGFuY2VvZiBMYW1iZGFGdW5jdGlvbkNhbGwpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb25DYWxsLmV2YWxDYWxsKHRoaXNWYWx1ZSwgLi4uYXJncyk7XG5cdH1cblxuXHRyZXR1cm4gKG5ldyBOYXRpdmVGdW5jdGlvbkNhbGwoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKSkuZXZhbENhbGwodGhpc1ZhbHVlLCAuLi5hcmdzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxTdGF0aWNDYWxsKGV4cHI6IEFTVENhbGxOb2RlLCBjbGFzc05hbWU6IHN0cmluZywgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGlmICghKGV4cHIuY2FsbGVlIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBtZW1iZXIgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHR9XG5cblx0Y29uc3QgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KGNsYXNzTmFtZSk7XG5cdGNvbnN0IG1ldGhvZERlZjogQ2xhc3NNZXRob2REZWZpbml0aW9uIHwgdW5kZWZpbmVkID0gY2xhc3NEZWYuc3RhdGljTWV0aG9kc1tleHByLmNhbGxlZS5wcm9wZXJ0eV07XG5cblx0aWYgKCFtZXRob2REZWYpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgU3RhdGljIG1ldGhvZCAke2NsYXNzTmFtZX0uJHtleHByLmNhbGxlZS5wcm9wZXJ0eX0gbm90IGZvdW5kYCwgZXhwci5jYWxsZWUuc3Bhbik7XG5cdH1cblxuXHRpZiAoY2xhc3NEZWYubmF0aXZlSW5zdGFuY2UgJiYgY2xhc3NEZWYubmF0aXZlSW5zdGFuY2VbbWV0aG9kRGVmLm5hbWVdKSB7XG5cdFx0Y29uc3QgYXJncyA9IGV2YWxNZXRob2RBcmd1bWVudHMoZXhwcixcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2REZWYucGFyYW1ldGVycyxcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RSZWdpc3RyeSxcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnZpcm9ubWVudCxcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudFBpcGVsaW5lLFxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNWYWx1ZSlcblx0XHRjb25zdCByYXdBcmdzID0gYXJncy5tYXAoZnJvbUx5cmFWYWx1ZSk7XG5cdFx0Y29uc3QgcmVzdWx0ID0gY2xhc3NEZWYubmF0aXZlSW5zdGFuY2VbbWV0aG9kRGVmLm5hbWVdKC4uLnJhd0FyZ3MpO1xuXG5cdFx0aWYgKHJlc3VsdCBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdHJldHVybiB3cmFwTmF0aXZlSW5zdGFuY2UocmVzdWx0LCBvYmplY3RSZWdpc3RyeSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2YWxSZXR1cm4oXG5cdFx0XHRbcmV0dXJuVmFsdWUocmVzdWx0KV0sXG5cdFx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRcdG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCksXG5cdFx0XHRldmVudFBpcGVsaW5lLFxuXHRcdFx0dGhpc1ZhbHVlLFxuXHRcdFx0bWV0aG9kRGVmLnJldHVyblR5cGVcblx0XHQpO1xuXHR9XG5cblx0Y29uc3QgbWV0aG9kRW52ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblxuXHRiaW5kTWV0aG9kUGFyYW1ldGVycyhleHByLCBtZXRob2REZWYucGFyYW1ldGVycywgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cblx0cmV0dXJuIGV2YWxSZXR1cm4obWV0aG9kRGVmLmNoaWxkcmVuLCBvYmplY3RSZWdpc3RyeSwgbWV0aG9kRW52LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUsIG1ldGhvZERlZi5yZXR1cm5UeXBlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxJbnN0YW5jZUNhbGwoZXhwcjogQVNUQ2FsbE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpIHtcblx0aWYgKCEoZXhwci5jYWxsZWUgaW5zdGFuY2VvZiBBU1RNZW1iZXJOb2RlKSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIG1lbWJlciBleHByZXNzaW9uICR7ZXhwci50eXBlfWAsIGV4cHIuc3Bhbik7XG5cdH1cblxuXHQvLyBPYmpla3QgYXVzd2VydGVuICh1IHwgdGhpcyB8IHN1cGVyKVxuXHRsZXQgdGFyZ2V0ID0gZXZhbEV4cHJlc3Npb24oZXhwci5jYWxsZWUub2JqZWN0LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cblx0dGFyZ2V0ID0gYXV0b0JveElmTmVlZGVkKHRhcmdldCwgb2JqZWN0UmVnaXN0cnkpO1xuXG5cdGlmICghdGFyZ2V0IHx8ICF0YXJnZXQuX19jbGFzc0RlZikge1xuXHRcdHRocm93UnVudGltZUVycm9yKCdJbnN0YW5jZSBjYWxsIG9uIG5vbi1vYmplY3QnLCBleHByLmNhbGxlZS5zcGFuKTtcblx0fVxuXG5cdGxldCBjbGFzc0RlZiA9IHRhcmdldC5fX2NsYXNzRGVmO1xuXG5cdC8vIHN1cGVyLm1ldGhvZCgpXG5cdGlmIChleHByLmNhbGxlZS5vYmplY3QudHlwZSA9PT0gQVNUTm9kZVR5cGUuSURFTlRJRklFUiAmJiBleHByLmNhbGxlZS5vYmplY3QubmFtZSA9PT0gJ3N1cGVyJykge1xuXHRcdGNvbnN0IHN1cGVyTmFtZSA9IGNsYXNzRGVmLnN1cGVyQ2xhc3M7XG5cdFx0aWYgKCFzdXBlck5hbWUpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKCdzdXBlciB1c2VkIGJ1dCBubyBzdXBlcmNsYXNzJywgZXhwci5jYWxsZWUuc3Bhbik7XG5cdFx0fVxuXHRcdGNsYXNzRGVmID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQoc3VwZXJOYW1lKTtcblx0fVxuXG5cblx0Y29uc3QgbWV0aG9kRGVmOiBDbGFzc01ldGhvZERlZmluaXRpb24gfCBudWxsID0gcmVzb2x2ZUluc3RhbmNlTWV0aG9kKGNsYXNzRGVmLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0UmVnaXN0cnksXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByLmNhbGxlZS5wcm9wZXJ0eSk7XG5cdGlmICghbWV0aG9kRGVmKSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYE1ldGhvZCAke2V4cHIuY2FsbGVlLnByb3BlcnR5fSBub3QgZm91bmQgb24gJHtjbGFzc0RlZi5uYW1lfWAsIGV4cHIuY2FsbGVlLnNwYW4pO1xuXHR9XG5cblx0Y29uc3QgbWV0aG9kRW52ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblx0bWV0aG9kRW52LmRlZmluZShHUkFNTUFSLlRISVMsIHRhcmdldCk7XG5cblx0aWYgKHRhcmdldC5fX25hdGl2ZUluc3RhbmNlICYmIG1ldGhvZERlZi5uYW1lIGluIHRhcmdldC5fX25hdGl2ZUluc3RhbmNlKSB7XG5cdFx0Y29uc3QgYXJncyA9IGV2YWxNZXRob2RBcmd1bWVudHMoXG5cdFx0XHRleHByLFxuXHRcdFx0bWV0aG9kRGVmLnBhcmFtZXRlcnMsXG5cdFx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRcdGVudmlyb25tZW50LFxuXHRcdFx0ZXZlbnRQaXBlbGluZSxcblx0XHRcdHRoaXNWYWx1ZVxuXHRcdCk7XG5cdFx0Y29uc3QgcmF3QXJncyA9IGFyZ3MubWFwKGZyb21MeXJhVmFsdWUpO1xuXHRcdGNvbnN0IHJlc3VsdCA9IHRhcmdldC5fX25hdGl2ZUluc3RhbmNlW21ldGhvZERlZi5uYW1lXSguLi5yYXdBcmdzKTtcblxuXHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRyZXR1cm4gd3JhcE5hdGl2ZUluc3RhbmNlKHJlc3VsdCwgb2JqZWN0UmVnaXN0cnkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmFsUmV0dXJuKFtyZXR1cm5WYWx1ZShyZXN1bHQpXSxcblx0XHQgICAgICAgICAgICAgICAgICBvYmplY3RSZWdpc3RyeSxcblx0XHQgICAgICAgICAgICAgICAgICBtZXRob2RFbnYsXG5cdFx0ICAgICAgICAgICAgICAgICAgZXZlbnRQaXBlbGluZSxcblx0XHQgICAgICAgICAgICAgICAgICB0YXJnZXQsXG5cdFx0ICAgICAgICAgICAgICAgICAgbWV0aG9kRGVmLnJldHVyblR5cGUpO1xuXHR9XG5cblx0YmluZE1ldGhvZFBhcmFtZXRlcnMoZXhwciwgbWV0aG9kRGVmLnBhcmFtZXRlcnMsIG9iamVjdFJlZ2lzdHJ5LCBtZXRob2RFbnYsIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXG5cdHJldHVybiBldmFsUmV0dXJuKG1ldGhvZERlZi5jaGlsZHJlbiwgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgZXZlbnRQaXBlbGluZSwgdGFyZ2V0LCBtZXRob2REZWYucmV0dXJuVHlwZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSW5zdGFuY2VNZXRob2QoY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBtZXRob2ROYW1lOiBzdHJpbmcpOiBDbGFzc01ldGhvZERlZmluaXRpb24gfCBudWxsIHtcblx0aWYgKGNsYXNzRGVmLmluc3RhbmNlTWV0aG9kc1ttZXRob2ROYW1lXSkge1xuXHRcdHJldHVybiBjbGFzc0RlZi5pbnN0YW5jZU1ldGhvZHNbbWV0aG9kTmFtZV07XG5cdH1cblxuXHRpZiAoY2xhc3NEZWYuc3VwZXJDbGFzcykge1xuXHRcdGNvbnN0IHN1cGVyRGVmID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQoY2xhc3NEZWYuc3VwZXJDbGFzcyk7XG5cdFx0cmV0dXJuIHJlc29sdmVJbnN0YW5jZU1ldGhvZChzdXBlckRlZiwgb2JqZWN0UmVnaXN0cnksIG1ldGhvZE5hbWUpO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kTWV0aG9kUGFyYW1ldGVycyhcblx0Y2FsbE5vZGU6IEFTVENhbGxOb2RlLFxuXHRwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sXG5cdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSxcblx0bWV0aG9kRW52OiBFbnZpcm9ubWVudCxcblx0ZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LFxuXHRldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLFxuXHR0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGxcbik6IHZvaWQge1xuXG5cdGNvbnN0IGFyZ3MgPSBjYWxsTm9kZS5hcmd1bWVudHM7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHBhcmFtZXRlcjogQVNUUGFyYW1ldGVyTm9kZSB8IG51bGwgPSBwYXJhbWV0ZXJzW2ldIHx8IG51bGw7XG5cdFx0Y29uc3QgYXJndW1lbnQ6IGFueSA9IGFyZ3NbaV0gfHwgbnVsbDtcblxuXHRcdGlmICghcGFyYW1ldGVyKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcignTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBpbiBtZXRob2QgY2FsbC4nKTtcblx0XHR9XG5cblx0XHRsZXQgcmF3VmFsdWU7XG5cblx0XHRpZiAoYXJndW1lbnQpIHtcblx0XHRcdHJhd1ZhbHVlID0gZXZhbEV4cHJlc3Npb24oYXJndW1lbnQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHR9IGVsc2UgaWYgKHBhcmFtZXRlcj8uZGVmYXVsdFZhbHVlKSB7XG5cdFx0XHRyYXdWYWx1ZSA9IGV2YWxFeHByZXNzaW9uKHBhcmFtZXRlci5kZWZhdWx0VmFsdWUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHR9XG5cblx0XHRjb25zdCBjYXN0ZWQgPSBwYXJhbWV0ZXIudHlwZUFubm90YXRpb25cblx0XHRcdD8gY2FzdFZhbHVlKHJhd1ZhbHVlLCBwYXJhbWV0ZXIudHlwZUFubm90YXRpb24ubmFtZSlcblx0XHRcdDogY2FzdFZhbHVlKHJhd1ZhbHVlLCBUWVBFX0VOVU0uTUlYRUQpO1xuXG5cdFx0bWV0aG9kRW52LmRlZmluZShwYXJhbWV0ZXIubmFtZSwgY2FzdGVkKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbENhbGxBcmd1bWVudHMobm9kZTogQVNUQ2FsbE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnlbXSB7XG5cdGlmIChub2RlLmNhbGxlZSBpbnN0YW5jZW9mIEFTVExhbWJkYU5vZGUpIHtcblx0XHRjb25zdCBsYW1iZGEgPSBub2RlLmNhbGxlZTtcblx0XHRyZXR1cm4gZXZhbE1ldGhvZEFyZ3VtZW50cyhub2RlLCBsYW1iZGEucGFyYW1ldGVycywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHR9XG5cblx0aWYgKG5vZGUuY2FsbGVlLnR5cGUgPT09IEFTVE5vZGVUeXBlLklERU5USUZJRVIpIHtcblx0XHRyZXR1cm4gbm9kZS5hcmd1bWVudHMubWFwKGFyZ3VtZW50ID0+IHtcblx0XHRcdHJldHVybiBjYXN0VmFsdWUoXG5cdFx0XHRcdGV2YWxFeHByZXNzaW9uKGFyZ3VtZW50LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSksXG5cdFx0XHRcdGFyZ3VtZW50LnR5cGVcblx0XHRcdCk7XG5cdFx0fSk7XG5cdH1cblxuXHRsZXQgbW9kdWxlTmFtZTogc3RyaW5nID0gJ3Vua25vd24nO1xuXHRsZXQgbWV0aG9kTmFtZTogc3RyaW5nID0gJ3Vua25vd24nO1xuXG5cdGlmIChub2RlLmNhbGxlZSBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpIHtcblx0XHRtb2R1bGVOYW1lID0gbm9kZS5jYWxsZWUub2JqZWN0Lm5hbWU7XG5cdFx0bWV0aG9kTmFtZSA9IG5vZGUuY2FsbGVlLnByb3BlcnR5O1xuXHR9XG5cblx0dGhyb3dSdW50aW1lRXJyb3IoYFVua25vd24gZnVuY3Rpb24gJHttb2R1bGVOYW1lfS4ke21ldGhvZE5hbWV9YCwgbm9kZS5zcGFuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxNZXRob2RBcmd1bWVudHMoZXhwcjogQVNUQ2FsbE5vZGUgfCBBU1ROZXdOb2RlLCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnlbXSB7XG5cdGNvbnN0IGFyZ3MgPSBbXTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtZXRlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBwYXJhbWV0ZXI6IEFTVFBhcmFtZXRlck5vZGUgfCBudWxsID0gcGFyYW1ldGVyc1tpXSB8fCBudWxsO1xuXHRcdGNvbnN0IGFyZ3VtZW50ID0gZXhwci5hcmd1bWVudHNbaV0gfHwgbnVsbDtcblxuXHRcdGxldCB2YWx1ZTtcblxuXHRcdGlmIChhcmd1bWVudCkge1xuXHRcdFx0dmFsdWUgPSBldmFsRXhwcmVzc2lvbihhcmd1bWVudCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdH0gZWxzZSBpZiAocGFyYW1ldGVyPy5kZWZhdWx0VmFsdWUpIHtcblx0XHRcdHZhbHVlID0gZXZhbEV4cHJlc3Npb24ocGFyYW1ldGVyLmRlZmF1bHRWYWx1ZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgW1J1bnRpbWVFcnJvcl0gTWlzc2luZyBhcmd1bWVudCAnJHtwYXJhbWV0ZXI/Lm5hbWV9J2AsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXG5cdFx0YXJncy5wdXNoKHZhbHVlKTtcblx0fVxuXG5cdHJldHVybiBhcmdzLm1hcCgoYXJndW1lbnQsIGkpID0+IHtcblx0XHRjb25zdCBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJzW2ldO1xuXHRcdHJldHVybiBwYXJhbWV0ZXI/LnR5cGVBbm5vdGF0aW9uXG5cdFx0XHQ/IGNhc3RWYWx1ZShhcmd1bWVudCwgcGFyYW1ldGVyLnR5cGVBbm5vdGF0aW9uLm5hbWUpXG5cdFx0XHQ6IGNhc3RWYWx1ZShhcmd1bWVudCwgVFlQRV9FTlVNLk1JWEVEKTtcblx0fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsSWYobm9kZTogQVNUSWZOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0Y29uc3QgY29uZGl0aW9uID0gY2FzdFZhbHVlKFxuXHRcdGV2YWxFeHByZXNzaW9uKG5vZGUuY29uZGl0aW9uLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSksXG5cdFx0VFlQRV9FTlVNLkJPT0xFQU5cblx0KTtcblxuXHQvLyBUSEVOXG5cdGlmIChjb25kaXRpb24gPT09IHRydWUpIHtcblx0XHRyZXR1cm4gZXZhbEJsb2NrKG5vZGUudGhlbi5jaGlsZHJlbiwgb2JqZWN0UmVnaXN0cnksIG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCksIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdH1cblxuXHQvLyBFTFNFXG5cdGlmIChub2RlLmVsc2UpIHtcblx0XHRpZiAobm9kZS5lbHNlIGluc3RhbmNlb2YgQVNUSWZOb2RlKSB7XG5cdFx0XHRyZXR1cm4gZXZhbElmKG5vZGUuZWxzZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmFsQmxvY2sobm9kZS5lbHNlLmNoaWxkcmVuLCBvYmplY3RSZWdpc3RyeSwgbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KSwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbE1hdGNoKG5vZGU6IEFTVE1hdGNoTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGNvbnN0IG1hdGNoVmFsdWU6IGFueSA9IGV2YWxFeHByZXNzaW9uKG5vZGUuZXhwcmVzc2lvbiwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcblxuXHRmb3IgKGNvbnN0IGNhc2VOb2RlIG9mIG5vZGUuY2FzZXMpIHtcblx0XHRpZiAoY2FzZU5vZGUudGVzdCA9PT0gbnVsbCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdGVzdFZhbHVlID0gZXZhbEV4cHJlc3Npb24oY2FzZU5vZGUudGVzdCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXG5cdFx0aWYgKHRlc3RWYWx1ZSA9PT0gbWF0Y2hWYWx1ZSkge1xuXHRcdFx0cmV0dXJuIGV2YWxNYXRjaENhc2UoY2FzZU5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRpZiAobm9kZS5kZWZhdWx0Q2FzZSkge1xuXHRcdHJldHVybiBldmFsTWF0Y2hDYXNlKG5vZGUuZGVmYXVsdENhc2UsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbE1hdGNoQ2FzZShub2RlOiBBU1RNYXRjaENhc2VOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0cmV0dXJuIGV2YWxCbG9jayhub2RlLmNoaWxkcmVuLCBvYmplY3RSZWdpc3RyeSwgbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KSwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxGb3JlYWNoKG5vZGU6IEFTVEZvcmVhY2hOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0bGV0IGl0ZXJhYmxlID0gZXZhbEV4cHJlc3Npb24obm9kZS5pdGVyYWJsZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXG5cdGlmICghKGl0ZXJhYmxlIGluc3RhbmNlb2YgSW5zdGFuY2UpKSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYGZvcmVhY2ggZXhwZWN0cyBhbiBvYmplY3QgaW1wbGVtZW50aW5nIEl0ZXJhYmxlYCwgbm9kZS5pdGVyYWJsZS5zcGFuKTtcblx0fVxuXG5cdGNvbnN0IGl0ZXJhdG9yTWV0aG9kID0gcmVzb2x2ZUluc3RhbmNlTWV0aG9kKFxuXHRcdGl0ZXJhYmxlLl9fY2xhc3NEZWYsXG5cdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0J2l0ZXJhdG9yJ1xuXHQpO1xuXG5cdGlmICghaXRlcmF0b3JNZXRob2QpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgT2JqZWN0IGRvZXMgbm90IGltcGxlbWVudCBJdGVyYWJsZSAobWlzc2luZyBpdGVyYXRvcigpKWAsIG5vZGUuaXRlcmFibGUuc3Bhbik7XG5cdH1cblxuXHRjb25zdCBpdGVyYXRvcjogYW55ID0gZXZhbEluc3RhbmNlQ2FsbChcblx0XHQoKCk6IEFTVENhbGxOb2RlID0+IHtcblx0XHRcdHJldHVybiBuZXcgQVNUQ2FsbE5vZGUobmV3IEFTVE1lbWJlck5vZGUobm9kZS5pdGVyYWJsZSwgJ2l0ZXJhdG9yJykpO1xuXHRcdH0pKCksXG5cdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0ZW52aXJvbm1lbnQsXG5cdFx0ZXZlbnRQaXBlbGluZSxcblx0XHR0aGlzVmFsdWVcblx0KTtcblxuXHRpZiAoIShpdGVyYXRvciBpbnN0YW5jZW9mIEluc3RhbmNlKSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBpdGVyYXRvcigpIG11c3QgcmV0dXJuIGFuIEl0ZXJhdG9yIG9iamVjdGAsIG5vZGUuaXRlcmFibGUuc3Bhbik7XG5cdH1cblxuXHRjYWxsSXRlcmF0b3JNZXRob2QoaXRlcmF0b3IsICdyZXdpbmQnLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXG5cdHdoaWxlIChjYWxsSXRlcmF0b3JNZXRob2QoaXRlcmF0b3IsICdoYXNOZXh0Jywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKSkge1xuXHRcdGNvbnN0IHZhbHVlID0gY2FsbEl0ZXJhdG9yTWV0aG9kKGl0ZXJhdG9yLCAnY3VycmVudCcsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG5cblx0XHRjb25zdCBsb29wRW52ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblxuXHRcdGxvb3BFbnYuZGVmaW5lKG5vZGUuaXRlcmF0b3IsIHZhbHVlKTtcblxuXHRcdGNvbnN0IHJlc3VsdCA9IGV2YWxCbG9jayhub2RlLmJvZHksIG9iamVjdFJlZ2lzdHJ5LCBsb29wRW52LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBSZXR1cm5WYWx1ZSkge1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cblx0XHRjYWxsSXRlcmF0b3JNZXRob2QoaXRlcmF0b3IsICduZXh0Jywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsbEl0ZXJhdG9yTWV0aG9kKGl0ZXJhdG9yOiBJbnN0YW5jZSwgbWV0aG9kTmFtZTogc3RyaW5nLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IGFueSB7XG5cdHJldHVybiBjYWxsSW5zdGFuY2VNZXRob2QoXG5cdFx0aXRlcmF0b3IsXG5cdFx0aXRlcmF0b3IuZmluZGVNZXRob2ROb2RlKG1ldGhvZE5hbWUpLFxuXHRcdFtdLFxuXHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdGVudmlyb25tZW50LFxuXHRcdGV2ZW50UGlwZWxpbmVcblx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxVbmFyeShub2RlOiBBU1RVbmFyeU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRjb25zdCB2YWx1ZSA9IGV2YWxFeHByZXNzaW9uKG5vZGUuYXJndW1lbnQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblxuXHRzd2l0Y2ggKG5vZGUub3BlcmF0b3IpIHtcblx0XHRjYXNlIEdSQU1NQVIuRVhDTEFNQVRJT05fTUFSSzpcblx0XHRcdHJldHVybiAhY2FzdFZhbHVlKHZhbHVlKTtcblx0fVxuXG5cdHRocm93UnVudGltZUVycm9yKGBVbnN1cHBvcnRlZCB1bmFyeSBvcGVyYXRvciAke25vZGUub3BlcmF0b3J9YCwgbm9kZS5zcGFuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxWRG9tTm9kZShub2RlOiBBU1RWRG9tTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IFZOb2RlIHtcblx0Y29uc3QgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcblxuXHRmb3IgKGNvbnN0IFtuYW1lLCB2YWx1ZV0gb2Ygbm9kZS5wcm9wcykge1xuXHRcdHByb3BzW25hbWVdID0gZXZhbEV4cHJlc3Npb24odmFsdWUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0fVxuXG5cdGNvbnN0IGNoaWxkcmVuOiBBcnJheTxWTm9kZSB8IHN0cmluZz4gPSBbXTtcblxuXG5cdGNvbnN0IHZOb2RlOiBWTm9kZSA9IHtcblx0XHR0YWc6IG5vZGUudGFnLFxuXHRcdGlzQ29tcG9uZW50OiBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmhhcyhub2RlLnRhZyksXG5cdFx0cGFyZW50OiBudWxsLFxuXHRcdGNvbXBvbmVudDogbnVsbCxcblx0XHRwcm9wczogcHJvcHMsXG5cdFx0Y2hpbGRyZW46IGNoaWxkcmVuLFxuXHRcdGRvbTogbnVsbFxuXHR9O1xuXG5cdGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuXHRcdGlmIChjaGlsZCBpbnN0YW5jZW9mIEFTVFZEb21UZXh0Tm9kZSkge1xuXHRcdFx0Y2hpbGRyZW4ucHVzaChjaGlsZC52YWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGNoaWxkVk5vZGUgPSBldmFsRXhwcmVzc2lvbihjaGlsZCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpIGFzIFZOb2RlO1xuXHRcdFx0Y2hpbGRWTm9kZS5wYXJlbnQgPSB2Tm9kZTtcblx0XHRcdGNoaWxkcmVuLnB1c2goY2hpbGRWTm9kZSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHZOb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbFJldHVybihibG9ja05vZGVzOiBBU1ROb2RlW10sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwsIHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHR0cnkge1xuXHRcdHJldHVybiBldmFsQmxvY2soYmxvY2tOb2Rlcywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUsIHJldHVyblR5cGUpO1xuXHR9IGNhdGNoIChleGVjdXRpb25TdG9wKSB7XG5cdFx0aWYgKGV4ZWN1dGlvblN0b3AgaW5zdGFuY2VvZiBFeGVjdXRpb25TdG9wKSB7XG5cdFx0XHRyZXR1cm4gY2FzdFZhbHVlKGV4ZWN1dGlvblN0b3AucmV0dXJuVmFsdWUudmFsdWUsIGV4ZWN1dGlvblN0b3AucmV0dXJuVHlwZT8ubmFtZSk7XG5cdFx0fVxuXHRcdHRocm93IGV4ZWN1dGlvblN0b3A7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxCbG9jayhibG9ja05vZGVzOiBBU1ROb2RlW10sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwsIHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRmb3IgKGNvbnN0IGJsb2NrTm9kZSBvZiBibG9ja05vZGVzKSB7XG5cdFx0Y29uc3QgcmV0dXJuVmFsdWU6IGFueSA9IGV2YWxOb2RlKGJsb2NrTm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdGlmIChyZXR1cm5WYWx1ZSBpbnN0YW5jZW9mIFJldHVyblZhbHVlKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXhlY3V0aW9uU3RvcChyZXR1cm5WYWx1ZSwgcmV0dXJuVHlwZSk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEFubm90YXRpb25WYWx1ZShub2RlOiBBU1ROb2RlKTogYW55IHtcblx0c3dpdGNoIChub2RlLnR5cGUpIHtcblx0XHRjYXNlIEFTVE5vZGVUeXBlLlNUUklORzpcblx0XHRjYXNlIEFTVE5vZGVUeXBlLk5VTUJFUjpcblx0XHRjYXNlIEFTVE5vZGVUeXBlLkJPT0xFQU46XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5JREVOVElGSUVSOiB7XG5cdFx0XHRyZXR1cm4gY2FzdFZhbHVlKG5vZGUudmFsdWUpO1xuXHRcdH1cblxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuQVJSQVkgOiB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEFycmF5Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gbm9kZS5lbGVtZW50cy5tYXAoY2hpbGQgPT4gZXZhbEFubm90YXRpb25WYWx1ZShjaGlsZCkpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgYW5ub3RhdGlvbiBwcm9wZXJ0eSB2YWx1ZTogJHtub2RlLnR5cGV9YCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cblx0XHRkZWZhdWx0OiB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5zdXBwb3J0ZWQgYW5ub3RhdGlvbiBleHByZXNzaW9uOiAke25vZGUudHlwZX1gLCBub2RlLnNwYW4pO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEFubm90YXRpb25Qcm9wZXJ0aWVzKGFubm90YXRpb246IEFTVEFubm90YXRpb25Ob2RlKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG5cdGNvbnN0IHByb3BlcnRpZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuXHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlTm9kZV0gb2YgYW5ub3RhdGlvbi5wcm9wZXJ0aWVzKSB7XG5cdFx0cHJvcGVydGllc1trZXldID0gZXZhbEFubm90YXRpb25WYWx1ZSh2YWx1ZU5vZGUpO1xuXHR9XG5cblx0cmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxsSW5zdGFuY2VNZXRob2QoaW5zdGFuY2U6IEluc3RhbmNlLCBtZXRob2ROb2RlOiBBU1RNZXRob2ROb2RlLCBhcmdzOiBhbnlbXSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiBhbnkge1xuXHRjb25zdCBtZXRob2RFbnYgPSBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpO1xuXG5cdG1ldGhvZEVudi5kZWZpbmUoR1JBTU1BUi5USElTLCBpbnN0YW5jZSk7XG5cblx0aWYgKGluc3RhbmNlLl9fbmF0aXZlSW5zdGFuY2UgJiYgbWV0aG9kTm9kZS5uYW1lIGluIGluc3RhbmNlLl9fbmF0aXZlSW5zdGFuY2UpIHtcblx0XHRjb25zdCByYXdBcmdzID0gYXJncy5tYXAoZnJvbUx5cmFWYWx1ZSk7XG5cdFx0Y29uc3QgcmVzdWx0ID0gaW5zdGFuY2UuX19uYXRpdmVJbnN0YW5jZVttZXRob2ROb2RlLm5hbWVdKC4uLnJhd0FyZ3MpO1xuXG5cdFx0aWYgKHJlc3VsdCBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdHJldHVybiB3cmFwTmF0aXZlSW5zdGFuY2UocmVzdWx0LCBvYmplY3RSZWdpc3RyeSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2YWxSZXR1cm4oXG5cdFx0XHRbcmV0dXJuVmFsdWUocmVzdWx0KV0sXG5cdFx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRcdG1ldGhvZEVudixcblx0XHRcdGV2ZW50UGlwZWxpbmUsXG5cdFx0XHRpbnN0YW5jZSxcblx0XHRcdG1ldGhvZE5vZGUucmV0dXJuVHlwZVxuXHRcdCk7XG5cdH1cblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IG1ldGhvZE5vZGUucGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHBhcmFtZXRlcjogQVNUUGFyYW1ldGVyTm9kZSB8IG51bGwgPSBtZXRob2ROb2RlLnBhcmFtZXRlcnNbaV0gfHwgbnVsbDtcblx0XHRjb25zdCBhcmd1bWVudDogYW55ID0gYXJnc1tpXSB8fCBudWxsO1xuXG5cdFx0aWYgKCFwYXJhbWV0ZXIpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKCdNZXRob2QgcGFyYW1ldGVyIGlzIG51bGwuJyk7XG5cdFx0fVxuXG5cdFx0bGV0IHZhbHVlO1xuXHRcdGlmICghYXJndW1lbnQpIHtcblx0XHRcdHZhbHVlID0gcGFyYW1ldGVyLmRlZmF1bHRWYWx1ZVxuXHRcdFx0XHQ/IGV2YWxOb2RlKHBhcmFtZXRlci5kZWZhdWx0VmFsdWUsIG9iamVjdFJlZ2lzdHJ5LCBtZXRob2RFbnYsIGV2ZW50UGlwZWxpbmUsIGluc3RhbmNlKVxuXHRcdFx0XHQ6IG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhbHVlID0gYXJnc1tpXTtcblx0XHR9XG5cblx0XHRtZXRob2RFbnYuZGVmaW5lKHBhcmFtZXRlci5uYW1lLCB2YWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4gZXZhbFJldHVybihtZXRob2ROb2RlLmNoaWxkcmVuLCBvYmplY3RSZWdpc3RyeSwgbWV0aG9kRW52LCBldmVudFBpcGVsaW5lLCBpbnN0YW5jZSwgbWV0aG9kTm9kZS5yZXR1cm5UeXBlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9Cb3hJZk5lZWRlZCh2YWx1ZTogYW55LCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpOiBJbnN0YW5jZSB7XG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEluc3RhbmNlKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gVFlQRV9FTlVNLk5VTUJFUikge1xuXHRcdHJldHVybiBjcmVhdGVCb3hlZEluc3RhbmNlKEF1dG9ib3hlZFR5cGVzLmdldENsYXNzTmFtZShUWVBFX0VOVU0uTlVNQkVSKSwgdmFsdWUsIG9iamVjdFJlZ2lzdHJ5KTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09IFRZUEVfRU5VTS5TVFJJTkcpIHtcblx0XHRyZXR1cm4gY3JlYXRlQm94ZWRJbnN0YW5jZShBdXRvYm94ZWRUeXBlcy5nZXRDbGFzc05hbWUoVFlQRV9FTlVNLlNUUklORyksIHZhbHVlLCBvYmplY3RSZWdpc3RyeSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSBUWVBFX0VOVU0uQk9PTEVBTikge1xuXHRcdHJldHVybiBjcmVhdGVCb3hlZEluc3RhbmNlKEF1dG9ib3hlZFR5cGVzLmdldENsYXNzTmFtZShUWVBFX0VOVU0uQk9PTEVBTiksIHZhbHVlLCBvYmplY3RSZWdpc3RyeSk7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCb3hlZEluc3RhbmNlKGNsYXNzTmFtZTogc3RyaW5nLCBwcmltaXRpdmVWYWx1ZTogYW55LCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpOiBJbnN0YW5jZSB7XG5cdGNvbnN0IGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24gPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChjbGFzc05hbWUpO1xuXHRjb25zdCBpbnN0YW5jZTogSW5zdGFuY2UgPSBjbGFzc0RlZi5jb25zdHJ1Y3RFbXB0eUluc3RhbmNlKG9iamVjdFJlZ2lzdHJ5KTtcblxuXHRpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlID0gbmV3IGNsYXNzRGVmLm5hdGl2ZUluc3RhbmNlKGZyb21MeXJhVmFsdWUocHJpbWl0aXZlVmFsdWUpKTtcblxuXHRyZXR1cm4gaW5zdGFuY2U7XG59XG4iLAogICAgImNvbnN0IEx5cmFFdmVudHMgPVxuXHR7XG5cdFx0TFlSQV9JTlNUQU5DRV9ESVJUWV9TVEFURTogJ2x5cmE6aW5zdGFuY2VfZGlydHlfc3RhdGUnXG5cdH1cblxuZXhwb3J0IGRlZmF1bHQgTHlyYUV2ZW50cztcbiIsCiAgICAiaW1wb3J0IHtHUkFNTUFSfSBmcm9tIFwiLi4vZ3JhbW1hclwiO1xuaW1wb3J0IHtcblx0QVNUQ2xhc3NOb2RlLFxuXHRBU1RGaWVsZE5vZGUsXG5cdEFTVEludGVyZmFjZU5vZGUsXG5cdEFTVE1ldGhvZE5vZGUsXG5cdEFTVE5ld05vZGUsXG5cdEFTVE5vZGUsXG5cdEFTVFBhcmFtZXRlck5vZGUsXG5cdEFTVFR5cGVOb2RlXG59IGZyb20gXCIuLi9hc3RcIjtcbmltcG9ydCB7dGhyb3dSdW50aW1lRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcbmltcG9ydCB0eXBlIHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB7ZXZhbEV4cHJlc3Npb24sIGV2YWxNZXRob2RBcmd1bWVudHMsIGV2YWxOb2RlfSBmcm9tIFwiLi9pbnRlcnByZXRlcl9ydW50aW1lXCI7XG5pbXBvcnQge2Nhc3RWYWx1ZSwgZnJvbUx5cmFWYWx1ZSwgTHlyYU5hdGl2ZU9iamVjdH0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfY29udmVyc2lvblwiO1xuaW1wb3J0IHR5cGUge0V2ZW50UGlwZWxpbmV9IGZyb20gXCIuLi9ldmVudC9waXBlbGluZVwiO1xuaW1wb3J0IEx5cmFFdmVudHMgZnJvbSBcIi4uL2V2ZW50L2V2ZW50c1wiO1xuXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQge1xuXHRwYXJlbnQ6IEVudmlyb25tZW50IHwgbnVsbDtcblx0dmFsdWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH07XG5cblx0Y29uc3RydWN0b3IocGFyZW50OiBFbnZpcm9ubWVudCB8IG51bGwgPSBudWxsKSB7XG5cdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cdFx0dGhpcy52YWx1ZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHR9XG5cblx0ZGVmaW5lKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMudmFsdWVzW25hbWVdID0gdmFsdWU7XG5cdH1cblxuXHRnZXQobmFtZTogc3RyaW5nKTogYW55IHtcblx0XHRpZiAobmFtZSBpbiB0aGlzLnZhbHVlcykge1xuXHRcdFx0cmV0dXJuIHRoaXMudmFsdWVzW25hbWVdO1xuXHRcdH1cblx0XHRpZiAodGhpcy5wYXJlbnQpIHtcblx0XHRcdHJldHVybiB0aGlzLnBhcmVudC5nZXQobmFtZSk7XG5cdFx0fVxuXHRcdHRocm93UnVudGltZUVycm9yKGBVbmRlZmluZWQgdmFyaWFibGUgJHtuYW1lfWApO1xuXHR9XG5cblx0c2V0KG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmIChuYW1lIGluIHRoaXMudmFsdWVzKSB7XG5cdFx0XHR0aGlzLnZhbHVlc1tuYW1lXSA9IHZhbHVlO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAodGhpcy5wYXJlbnQpIHtcblx0XHRcdHRoaXMucGFyZW50LnNldChuYW1lLCB2YWx1ZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRocm93UnVudGltZUVycm9yKGBVbmRlZmluZWQgdmFyaWFibGUgJHtuYW1lfWApO1xuXHR9XG5cblx0aGFzKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlc1tuYW1lXSB8fCAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuaGFzKG5hbWUpKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgSW5zdGFuY2Uge1xuXHRwdWJsaWMgcmVhZG9ubHkgaWQ6IHN0cmluZztcblx0X19jbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uO1xuXHRfX2ZpZWxkc0luaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XG5cdF9faW5zdGFuY2VGaWVsZHM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfTtcblx0X19zdGF0aWNGaWVsZHM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfTtcblx0X19uYXRpdmVJbnN0YW5jZTogYW55IHwgbnVsbCA9IG51bGw7XG5cdF9faXNEaXJ0eTogYm9vbGVhbiA9IGZhbHNlXG5cblx0Y29uc3RydWN0b3IoY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbikge1xuXHRcdHRoaXMuX19jbGFzc0RlZiA9IGNsYXNzRGVmO1xuXHRcdHRoaXMuX19pbnN0YW5jZUZpZWxkcyA9IHt9O1xuXHRcdHRoaXMuX19zdGF0aWNGaWVsZHMgPSB7fTtcblx0XHR0aGlzLl9fbmF0aXZlSW5zdGFuY2UgPSBudWxsO1xuXG5cdFx0dGhpcy5pZCA9IEluc3RhbmNlLmdlbmVyYXRlSW5zdGFuY2VVVUlEKCk7XG5cdH1cblxuXHRwdWJsaWMgbWFya0RpcnR5KGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiB2b2lkIHtcblx0XHR0aGlzLl9faXNEaXJ0eSA9IHRydWU7XG5cblx0XHRldmVudFBpcGVsaW5lLmVtaXQoTHlyYUV2ZW50cy5MWVJBX0lOU1RBTkNFX0RJUlRZX1NUQVRFLCB7aW5zdGFuY2U6IHRoaXN9KTtcblx0fVxuXG5cdHB1YmxpYyBtYXJrQ2xlYW4oZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IHZvaWQge1xuXHRcdHRoaXMuX19pc0RpcnR5ID0gZmFsc2U7XG5cblx0XHRldmVudFBpcGVsaW5lLmVtaXQoTHlyYUV2ZW50cy5MWVJBX0lOU1RBTkNFX0RJUlRZX1NUQVRFLCB7aW5zdGFuY2U6IHRoaXN9KTtcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIGdlbmVyYXRlSW5zdGFuY2VVVUlEKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHNlbGYuY3J5cHRvLnJhbmRvbVVVSUQoKTtcblx0fVxuXG5cdGZpbmRlTWV0aG9kTm9kZShuYW1lOiBzdHJpbmcpOiBBU1RNZXRob2ROb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5fX2NsYXNzRGVmLmZpbmRNZXRob2ROb2RlKG5hbWUpO1xuXHR9XG5cblx0aGFzUHVibGljUHJvcGVydHkobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiB0aGlzLl9fY2xhc3NEZWYuZmluZEluc3RhbmNlRmllbGREZWZpbml0aW9uKG5hbWUpLm1vZGlmaWVycy5wdWJsaWM7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHNldFB1YmxpY1Byb3BlcnR5KG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSwgZXhwZWN0ZWQ6IGFueSA9IG51bGwpOiB2b2lkIHtcblx0XHRsZXQgZmllbGREZWZpbml0aW9uOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbiA9IHRoaXMuX19jbGFzc0RlZi5maW5kSW5zdGFuY2VGaWVsZERlZmluaXRpb24obmFtZSk7XG5cblx0XHRpZiAoZmllbGREZWZpbml0aW9uLm1vZGlmaWVycy5wdWJsaWMpIHtcblx0XHRcdHRoaXMuX19pbnN0YW5jZUZpZWxkc1tuYW1lXSA9IGNhc3RWYWx1ZSh2YWx1ZSwgZXhwZWN0ZWQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRocm93UnVudGltZUVycm9yKGBGaWVsZCAke25hbWV9IGlzIG5vdCBwdWJsaWMuYCk7XG5cdH1cblxuXHRpbml0aWFsaXplSW5zdGFuY2VGaWVsZHMob2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiB2b2lkIHtcblx0XHR0aGlzLl9fY2xhc3NEZWYuaW5pdGlhbGl6ZUluc3RhbmNlRmllbGRzKHRoaXMsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vZGlmaWVycyB7XG5cdG9wZW46IGJvb2xlYW4gPSBmYWxzZTtcblx0cHVibGljOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGU6IGJvb2xlYW4gPSBmYWxzZTtcblx0c3RhdGljOiBib29sZWFuID0gZmFsc2U7XG5cdHJlYWRvbmx5OiBib29sZWFuID0gZmFsc2U7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7e319IGF0dHJpYnV0ZXNcblx0ICovXG5cdGNvbnN0cnVjdG9yKGF0dHJpYnV0ZXM6IHsgW2luZGV4OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fSkge1xuXHRcdGZvciAobGV0IGF0dHJpYnV0ZSBvZiBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKSkge1xuXHRcdFx0aWYgKHRoaXMuaGFzT3duUHJvcGVydHkoYXR0cmlidXRlKSkge1xuXHRcdFx0XHRjb25zdCBtb2RpZmllcnM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHRoaXM7XG5cdFx0XHRcdG1vZGlmaWVyc1thdHRyaWJ1dGVdID0gYXR0cmlidXRlc1thdHRyaWJ1dGVdO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgY2xhc3MgU3VwZXJDbGFzcyB7XG5cdHR5cGU6IHN0cmluZztcblx0bmFtZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBFeGVjdXRpb25TdG9wIGV4dGVuZHMgRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgcmV0dXJuVmFsdWU6IFJldHVyblZhbHVlLFxuXHQgICAgICAgICAgICBwdWJsaWMgcmVhZG9ubHkgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsKSB7XG5cdFx0c3VwZXIoJ0V4ZWN1dGlvbiBzdG9wcGVuZCB3aXRoIHJldHVybi4nKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgUmV0dXJuVmFsdWUge1xuXHR2YWx1ZTogYW55O1xuXG5cdGNvbnN0cnVjdG9yKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIENsYXNzRmllbGREZWZpbml0aW9uIHtcblx0bmFtZTogc3RyaW5nO1xuXHR0eXBlOiBzdHJpbmcgfCBudWxsO1xuXHRtb2RpZmllcnM6IE1vZGlmaWVycztcblx0aW5pdGlhbGl6ZXI6IEFTVE5vZGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGU6IHN0cmluZyB8IG51bGwsIG1vZGlmaWVyczogTW9kaWZpZXJzLCBpbml0aWFsaXplcjogQVNUTm9kZSB8IG51bGwgPSBudWxsKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuXHRcdHRoaXMuaW5pdGlhbGl6ZXIgPSBpbml0aWFsaXplcjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xhc3NNZXRob2REZWZpbml0aW9uIHtcblx0bmFtZTogc3RyaW5nO1xuXHRwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW107XG5cdHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbDtcblx0bW9kaWZpZXJzOiBNb2RpZmllcnM7XG5cdGNoaWxkcmVuOiBBU1ROb2RlW107XG5cdGlzQ29uc3RydWN0b3I6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sIHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbCwgbW9kaWZpZXJzOiBNb2RpZmllcnMsIGNoaWxkcmVuOiBBU1ROb2RlW10pIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG5cdFx0dGhpcy5yZXR1cm5UeXBlID0gcmV0dXJuVHlwZTtcblx0XHR0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcblx0XHR0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG5cdFx0dGhpcy5pc0NvbnN0cnVjdG9yID0gbmFtZSA9PT0gR1JBTU1BUi5DT05TVFJVQ1RPUjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xhc3NEZWZpbml0aW9uIHtcblx0bm9kZTogQVNUQ2xhc3NOb2RlO1xuXHRuYW1lOiBzdHJpbmc7XG5cdHN1cGVyQ2xhc3M6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRpbnN0YW5jZUZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXTtcblx0aW5zdGFuY2VNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH07XG5cdHN0YXRpY0ZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXTtcblx0c3RhdGljTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9O1xuXHRjb25zdHJ1Y3Rvck1ldGhvZDogQ2xhc3NNZXRob2REZWZpbml0aW9uIHwgbnVsbCA9IG51bGw7XG5cdG5hdGl2ZUluc3RhbmNlOiBhbnkgPSBudWxsO1xuXHRpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRjbGFzc05vZGU6IEFTVENsYXNzTm9kZSxcblx0XHRzdXBlckNsYXNzOiBzdHJpbmcgfCBudWxsLFxuXHRcdG5hbWU6IHN0cmluZyxcblx0XHRpbnN0YW5jZUZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXSxcblx0XHRpbnN0YW5jZU1ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfSxcblx0XHRzdGF0aWNGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW10sXG5cdFx0c3RhdGljTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9LFxuXHRcdGNvbnN0cnVjdG9yTWV0aG9kOiBDbGFzc01ldGhvZERlZmluaXRpb24gfCBudWxsID0gbnVsbFxuXHQpIHtcblx0XHR0aGlzLm5vZGUgPSBjbGFzc05vZGU7XG5cdFx0dGhpcy5zdXBlckNsYXNzID0gc3VwZXJDbGFzcztcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuaW5zdGFuY2VGaWVsZHMgPSBpbnN0YW5jZUZpZWxkcztcblx0XHR0aGlzLmluc3RhbmNlTWV0aG9kcyA9IGluc3RhbmNlTWV0aG9kcztcblx0XHR0aGlzLnN0YXRpY0ZpZWxkcyA9IHN0YXRpY0ZpZWxkcztcblx0XHR0aGlzLnN0YXRpY01ldGhvZHMgPSBzdGF0aWNNZXRob2RzO1xuXHRcdHRoaXMuY29uc3RydWN0b3JNZXRob2QgPSBjb25zdHJ1Y3Rvck1ldGhvZDtcblx0XHR0aGlzLmlzT3BlbiA9IGNsYXNzTm9kZS5tb2RpZmllcnMub3Blbjtcblx0fVxuXG5cdHN0YXRpYyBmcm9tQVNUKG5vZGU6IEFTVENsYXNzTm9kZSk6IENsYXNzRGVmaW5pdGlvbiB7XG5cdFx0Y29uc3QgaW5zdGFuY2VGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW10gPSBbXTtcblx0XHRjb25zdCBpbnN0YW5jZU1ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfSA9IHt9O1xuXHRcdGNvbnN0IHN0YXRpY0ZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXSA9IFtdO1xuXHRcdGNvbnN0IHN0YXRpY01ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfSA9IHt9O1xuXHRcdGxldCBjb25zdHJ1Y3Rvck1ldGhvZDogQ2xhc3NNZXRob2REZWZpbml0aW9uIHwgbnVsbCA9IG51bGw7XG5cblx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChjaGlsZCBpbnN0YW5jZW9mIEFTVEZpZWxkTm9kZSkge1xuXHRcdFx0XHRjb25zdCBmaWVsZCA9IG5ldyBDbGFzc0ZpZWxkRGVmaW5pdGlvbihcblx0XHRcdFx0XHRjaGlsZC5uYW1lLFxuXHRcdFx0XHRcdGNoaWxkLmZpZWxkVHlwZVxuXHRcdFx0XHRcdFx0PyBjaGlsZC5maWVsZFR5cGUubmFtZVxuXHRcdFx0XHRcdFx0OiBudWxsLFxuXHRcdFx0XHRcdGNoaWxkLm1vZGlmaWVycyxcblx0XHRcdFx0XHRjaGlsZC5pbml0XG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0aWYgKGZpZWxkLm1vZGlmaWVycy5zdGF0aWMpIHtcblx0XHRcdFx0XHRzdGF0aWNGaWVsZHMucHVzaChmaWVsZCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aW5zdGFuY2VGaWVsZHMucHVzaChmaWVsZCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoY2hpbGQgaW5zdGFuY2VvZiBBU1RNZXRob2ROb2RlKSB7XG5cdFx0XHRcdGNvbnN0IG1ldGhvZCA9IG5ldyBDbGFzc01ldGhvZERlZmluaXRpb24oXG5cdFx0XHRcdFx0Y2hpbGQubmFtZSxcblx0XHRcdFx0XHRjaGlsZC5wYXJhbWV0ZXJzLFxuXHRcdFx0XHRcdGNoaWxkLnJldHVyblR5cGUsXG5cdFx0XHRcdFx0Y2hpbGQubW9kaWZpZXJzLFxuXHRcdFx0XHRcdGNoaWxkLmNoaWxkcmVuXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGlmIChtZXRob2QuaXNDb25zdHJ1Y3Rvcikge1xuXHRcdFx0XHRcdGNvbnN0cnVjdG9yTWV0aG9kID0gbWV0aG9kO1xuXHRcdFx0XHR9IGVsc2UgaWYgKG1ldGhvZC5tb2RpZmllcnMuc3RhdGljKSB7XG5cdFx0XHRcdFx0c3RhdGljTWV0aG9kc1ttZXRob2QubmFtZV0gPSBtZXRob2Q7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aW5zdGFuY2VNZXRob2RzW21ldGhvZC5uYW1lXSA9IG1ldGhvZDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVuaGFuZGxlZCBub2RlICR7Y2hpbGQudHlwZX0uYCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBDbGFzc0RlZmluaXRpb24oXG5cdFx0XHRub2RlLFxuXHRcdFx0bm9kZS5zdXBlckNsYXNzPy5uYW1lIHx8IG51bGwsXG5cdFx0XHRub2RlLm5hbWUsXG5cdFx0XHRpbnN0YW5jZUZpZWxkcyxcblx0XHRcdGluc3RhbmNlTWV0aG9kcyxcblx0XHRcdHN0YXRpY0ZpZWxkcyxcblx0XHRcdHN0YXRpY01ldGhvZHMsXG5cdFx0XHRjb25zdHJ1Y3Rvck1ldGhvZFxuXHRcdCk7XG5cdH1cblxuXHRmaW5kTWV0aG9kTm9kZShuYW1lOiBzdHJpbmcpOiBBU1RNZXRob2ROb2RlIHtcblx0XHRjb25zdCBub2RlID0gdGhpcy5ub2RlXG5cdFx0ICAgICAgICAgICAgICAgICAuY2hpbGRyZW5cblx0XHQgICAgICAgICAgICAgICAgIC5maW5kKG5vZGUgPT4gbm9kZS5uYW1lID09PSBuYW1lKTtcblxuXHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUTWV0aG9kTm9kZSkge1xuXHRcdFx0cmV0dXJuIG5vZGU7XG5cdFx0fVxuXG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYE1ldGhvZCAke25hbWV9IG5vdCBmb3VuZCBpbiBjbGFzcyAke3RoaXMubmFtZX0uYCk7XG5cdH1cblxuXHRmaW5kSW5zdGFuY2VGaWVsZERlZmluaXRpb24obmFtZTogc3RyaW5nKTogQ2xhc3NGaWVsZERlZmluaXRpb24ge1xuXHRcdGNvbnN0IGZpZWxkRGVmaW5pdGlvbjogQ2xhc3NGaWVsZERlZmluaXRpb24gfCB1bmRlZmluZWQgPSB0aGlzLmluc3RhbmNlRmllbGRzXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmluZCgoZmllbGQ6IENsYXNzRmllbGREZWZpbml0aW9uKTogYm9vbGVhbiA9PiBmaWVsZC5uYW1lID09PSBuYW1lKTtcblxuXHRcdGlmIChmaWVsZERlZmluaXRpb24gaW5zdGFuY2VvZiBDbGFzc0ZpZWxkRGVmaW5pdGlvbikge1xuXHRcdFx0cmV0dXJuIGZpZWxkRGVmaW5pdGlvbjtcblx0XHR9XG5cblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgRmllbGQgJHtuYW1lfSBub3QgZm91bmQgaW4gY2xhc3MgJHt0aGlzLm5hbWV9LmApO1xuXHR9XG5cblx0Y29uc3RydWN0RW1wdHlJbnN0YW5jZShvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpOiBJbnN0YW5jZSB7XG5cdFx0Y29uc3QgaW5zdGFuY2UgPSBuZXcgSW5zdGFuY2UodGhpcyk7XG5cdFx0b2JqZWN0UmVnaXN0cnkuaW5zdGFuY2VzLnJlZ2lzdGVyKGluc3RhbmNlKTtcblx0XHRyZXR1cm4gaW5zdGFuY2U7XG5cdH1cblxuXHRjb25zdHJ1Y3ROYXRpdmVJbnN0YW5jZShvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGFyZ3M6IGFueVtdID0gW10pOiBJbnN0YW5jZSB7XG5cdFx0Y29uc3QgaW5zdGFuY2U6IEluc3RhbmNlID0gdGhpcy5jb25zdHJ1Y3RFbXB0eUluc3RhbmNlKG9iamVjdFJlZ2lzdHJ5KTtcblx0XHRpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlID0gbmV3IHRoaXMubmF0aXZlSW5zdGFuY2UoLi4uYXJncyk7XG5cdFx0cmV0dXJuIGluc3RhbmNlO1xuXHR9XG5cblx0Y29uc3RydWN0TmV3SW5zdGFuY2VXaXRob3V0QXJndW1lbnRzKG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogSW5zdGFuY2Uge1xuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdE5ld0luc3RhbmNlKFtdLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXHR9XG5cblx0Y29uc3RydWN0TmV3SW5zdGFuY2UoYXJnczogQVNUTm9kZVtdLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IEluc3RhbmNlIHtcblx0XHRjb25zdCBuZXdOb2RlID0gbmV3IEFTVE5ld05vZGUoYXJncywgbmV3IEFTVFR5cGVOb2RlKEFTVFR5cGVOb2RlLktJTkRfU0lNUExFLCB0aGlzLm5hbWUpKTtcblxuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdEluc3RhbmNlQnlOZXdOb2RlKG5ld05vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG5cdH1cblxuXHRjb25zdHJ1Y3RJbnN0YW5jZUJ5TmV3Tm9kZShleHByOiBBU1ROZXdOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IEluc3RhbmNlIHtcblx0XHRjb25zdCBpbnN0YW5jZSA9IHRoaXMuY29uc3RydWN0RW1wdHlJbnN0YW5jZShvYmplY3RSZWdpc3RyeSk7XG5cblx0XHRpbnN0YW5jZS5pbml0aWFsaXplSW5zdGFuY2VGaWVsZHMob2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcblxuXHRcdGlmICghdGhpcy5jb25zdHJ1Y3Rvck1ldGhvZCkge1xuXHRcdFx0cmV0dXJuIGluc3RhbmNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNvbnN0cnVjdG9yOiBDbGFzc01ldGhvZERlZmluaXRpb24gPSB0aGlzLmNvbnN0cnVjdG9yTWV0aG9kO1xuXHRcdGNvbnN0IGNvbnN0cnVjdG9yRW52ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblxuXHRcdGNvbnN0IGNvbnN0cnVjdG9yQXJncyA9IGV2YWxNZXRob2RBcmd1bWVudHMoXG5cdFx0XHRleHByLFxuXHRcdFx0Y29uc3RydWN0b3IucGFyYW1ldGVycyxcblx0XHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0ZW52aXJvbm1lbnQsXG5cdFx0XHRldmVudFBpcGVsaW5lLFxuXHRcdFx0aW5zdGFuY2Vcblx0XHQpO1xuXG5cdFx0Y29uc3RydWN0b3JFbnYuZGVmaW5lKEdSQU1NQVIuVEhJUywgaW5zdGFuY2UpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb25zdHJ1Y3RvckFyZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHBhcmFtZXRlcjogQVNUUGFyYW1ldGVyTm9kZSB8IHVuZGVmaW5lZCA9IGNvbnN0cnVjdG9yLnBhcmFtZXRlcnNbaV07XG5cdFx0XHRpZiAocGFyYW1ldGVyKSB7XG5cdFx0XHRcdGNvbnN0cnVjdG9yRW52LmRlZmluZShwYXJhbWV0ZXIubmFtZSwgY29uc3RydWN0b3JBcmdzW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIGNvbnN0cnVjdG9yLmNoaWxkcmVuKSB7XG5cdFx0XHRldmFsTm9kZShjaGlsZCwgb2JqZWN0UmVnaXN0cnksIGNvbnN0cnVjdG9yRW52LCBldmVudFBpcGVsaW5lLCBpbnN0YW5jZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGluc3RhbmNlO1xuXHR9XG5cblx0Y29uc3RydWN0TmF0aXZlSW5zdGFuY2VCeU5ld05vZGUoZXhwcjogQVNUTmV3Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiBJbnN0YW5jZSB7XG5cdFx0Y29uc3QgaW5zdGFuY2U6IEluc3RhbmNlID0gdGhpcy5jb25zdHJ1Y3RFbXB0eUluc3RhbmNlKG9iamVjdFJlZ2lzdHJ5KTtcblx0XHRjb25zdCBjb25zdHJ1Y3RvcjogQ2xhc3NNZXRob2REZWZpbml0aW9uIHwgbnVsbCA9IHRoaXMuY29uc3RydWN0b3JNZXRob2Q7XG5cdFx0Y29uc3QgY29uc3RydWN0b3JFbnY6IEVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblxuXHRcdGNvbnN0IGNvbnN0cnVjdG9yQXJnczogYW55W10gPSBldmFsTWV0aG9kQXJndW1lbnRzKFxuXHRcdFx0ZXhwcixcblx0XHRcdGNvbnN0cnVjdG9yXG5cdFx0XHRcdD8gY29uc3RydWN0b3IucGFyYW1ldGVyc1xuXHRcdFx0XHQ6IFtdLFxuXHRcdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0XHRlbnZpcm9ubWVudCxcblx0XHRcdGV2ZW50UGlwZWxpbmUsXG5cdFx0XHRpbnN0YW5jZVxuXHRcdCk7XG5cblx0XHRjb25zdHJ1Y3RvckVudi5kZWZpbmUoR1JBTU1BUi5USElTLCBpbnN0YW5jZSk7XG5cblx0XHRpZiAodGhpcy5uYXRpdmVJbnN0YW5jZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoJ0NsYXNzIGhhcyBubyBuYXRpdmUgaW5zdGFuY2UnKTtcblx0XHR9XG5cblx0XHRjb25zdCBuYXRpdmVJbnN0YW5jZSA9IG5ldyB0aGlzLm5hdGl2ZUluc3RhbmNlKC4uLmNvbnN0cnVjdG9yQXJncy5tYXAoZnJvbUx5cmFWYWx1ZSkpO1xuXHRcdGlmIChuYXRpdmVJbnN0YW5jZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdGluc3RhbmNlLl9fbmF0aXZlSW5zdGFuY2UgPSBuYXRpdmVJbnN0YW5jZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaW5zdGFuY2U7XG5cdH1cblxuXHRpbml0aWFsaXplSW5zdGFuY2VGaWVsZHMoaW5zdGFuY2U6IEluc3RhbmNlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IHZvaWQge1xuXHRcdGlmIChpbnN0YW5jZS5fX2ZpZWxkc0luaXRpYWxpemVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0IHJhd1ZhbHVlO1xuXHRcdGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5pbnN0YW5jZUZpZWxkcykge1xuXHRcdFx0cmF3VmFsdWUgPSBmaWVsZC5pbml0aWFsaXplclxuXHRcdFx0XHQ/IGV2YWxFeHByZXNzaW9uKGZpZWxkLmluaXRpYWxpemVyLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpXG5cdFx0XHRcdDogbnVsbDtcblxuXHRcdFx0aW5zdGFuY2UuX19pbnN0YW5jZUZpZWxkc1tmaWVsZC5uYW1lXSA9IGNhc3RWYWx1ZShyYXdWYWx1ZSwgZmllbGQudHlwZSk7XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5zdGF0aWNGaWVsZHMpIHtcblx0XHRcdHJhd1ZhbHVlID0gZmllbGQuaW5pdGlhbGl6ZXJcblx0XHRcdFx0PyBldmFsRXhwcmVzc2lvbihmaWVsZC5pbml0aWFsaXplciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKVxuXHRcdFx0XHQ6IG51bGw7XG5cblx0XHRcdGluc3RhbmNlLl9fc3RhdGljRmllbGRzW2ZpZWxkLm5hbWVdID0gY2FzdFZhbHVlKHJhd1ZhbHVlLCBmaWVsZC50eXBlKTtcblx0XHR9XG5cblx0XHRpbnN0YW5jZS5fX2ZpZWxkc0luaXRpYWxpemVkID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgSW50ZXJmYWNlRGVmaW5pdGlvbiB7XG5cdG5vZGU6IEFTVEludGVyZmFjZU5vZGU7XG5cdG5hbWU6IHN0cmluZztcblx0c3RhdGljRmllbGRzOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbltdO1xuXHRpbnN0YW5jZU1ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRpbnRlcmZhY2VOb2RlOiBBU1RJbnRlcmZhY2VOb2RlLFxuXHRcdG5hbWU6IHN0cmluZyxcblx0XHRzdGF0aWNGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW10sXG5cdFx0aW5zdGFuY2VNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH0sXG5cdCkge1xuXHRcdHRoaXMubm9kZSA9IGludGVyZmFjZU5vZGU7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnN0YXRpY0ZpZWxkcyA9IHN0YXRpY0ZpZWxkcztcblx0XHR0aGlzLmluc3RhbmNlTWV0aG9kcyA9IGluc3RhbmNlTWV0aG9kcztcblx0fVxuXG5cdHN0YXRpYyBmcm9tQVNUKG5vZGU6IEFTVEludGVyZmFjZU5vZGUpOiBJbnRlcmZhY2VEZWZpbml0aW9uIHtcblx0XHRjb25zdCBzdGF0aWNGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW10gPSBbXTtcblx0XHRjb25zdCBpbnN0YW5jZU1ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfSA9IHt9O1xuXG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAoY2hpbGQgaW5zdGFuY2VvZiBBU1RGaWVsZE5vZGUpIHtcblx0XHRcdFx0Y29uc3QgZmllbGQgPSBuZXcgQ2xhc3NGaWVsZERlZmluaXRpb24oXG5cdFx0XHRcdFx0Y2hpbGQubmFtZSxcblx0XHRcdFx0XHRjaGlsZC5maWVsZFR5cGVcblx0XHRcdFx0XHRcdD8gY2hpbGQuZmllbGRUeXBlLm5hbWVcblx0XHRcdFx0XHRcdDogbnVsbCxcblx0XHRcdFx0XHRjaGlsZC5tb2RpZmllcnMsXG5cdFx0XHRcdFx0Y2hpbGQuaW5pdCA/PyBudWxsXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0c3RhdGljRmllbGRzLnB1c2goZmllbGQpO1xuXHRcdFx0fSBlbHNlIGlmIChjaGlsZCBpbnN0YW5jZW9mIEFTVE1ldGhvZE5vZGUpIHtcblx0XHRcdFx0Y29uc3QgbWV0aG9kID0gbmV3IENsYXNzTWV0aG9kRGVmaW5pdGlvbihcblx0XHRcdFx0XHRjaGlsZC5uYW1lLFxuXHRcdFx0XHRcdGNoaWxkLnBhcmFtZXRlcnMsXG5cdFx0XHRcdFx0Y2hpbGQucmV0dXJuVHlwZSxcblx0XHRcdFx0XHRjaGlsZC5tb2RpZmllcnMsXG5cdFx0XHRcdFx0Y2hpbGQuY2hpbGRyZW5cblx0XHRcdFx0KTtcblxuXHRcdFx0XHRpbnN0YW5jZU1ldGhvZHNbbWV0aG9kLm5hbWVdID0gbWV0aG9kO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVuaGFuZGxlZCBub2RlICR7Y2hpbGQudHlwZX0uYCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBJbnRlcmZhY2VEZWZpbml0aW9uKFxuXHRcdFx0bm9kZSxcblx0XHRcdG5vZGUubmFtZSxcblx0XHRcdHN0YXRpY0ZpZWxkcyxcblx0XHRcdGluc3RhbmNlTWV0aG9kc1xuXHRcdCk7XG5cdH1cbn1cblxuIiwKICAgICJpbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4vcGFyc2VyXCI7XG5pbXBvcnQge0dSQU1NQVIsIFRva2VuLCBUb2tlblR5cGUsIFRZUEVfRU5VTX0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcbmltcG9ydCB7TW9kaWZpZXJzLCBTdXBlckNsYXNzfSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtcblx0QVNUQW5ub3RhdGlvbk5vZGUsXG5cdEFTVEFycmF5Tm9kZSxcblx0QVNUQXNzaWdubWVudE5vZGUsXG5cdEFTVEJpbmFyeU5vZGUsXG5cdEFTVENhbGxOb2RlLFxuXHRBU1RDbGFzc05vZGUsXG5cdEFTVEVsc2VOb2RlLFxuXHRBU1RFeHByZXNzaW9uTm9kZSxcblx0QVNURmllbGROb2RlLFxuXHRBU1RGb3JlYWNoTm9kZSxcblx0QVNUSWZOb2RlLFxuXHRBU1RJbXBvcnROb2RlLFxuXHRBU1RJbmRleE5vZGUsXG5cdEFTVEludGVyZmFjZU5vZGUsXG5cdEFTVExhbWJkYU5vZGUsXG5cdEFTVE1hdGNoQ2FzZU5vZGUsXG5cdEFTVE1hdGNoTm9kZSxcblx0QVNUTWVtYmVyTm9kZSxcblx0QVNUTWV0aG9kTm9kZSxcblx0QVNUTmV3Tm9kZSxcblx0QVNUTm9kZSxcblx0QVNUTm9kZVR5cGUsXG5cdEFTVFBhcmFtZXRlck5vZGUsXG5cdEFTVFJldHVybk5vZGUsXG5cdEFTVFRoZW5Ob2RlLFxuXHRBU1RUeXBlTm9kZSxcblx0QVNUVW5hcnlOb2RlLFxuXHRBU1RWYXJpYWJsZU5vZGUsXG5cdEFTVFZEb21Ob2RlLFxuXHRBU1RWRG9tVGV4dE5vZGVcbn0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHt0aHJvd1BhcnNlckVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQge3NwYW5Gcm9tfSBmcm9tIFwiLi9wYXJzZXJfc291cmNlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNaXhlZFR5cGUoKTogQVNUVHlwZU5vZGUge1xuXHRyZXR1cm4gbmV3IEFTVFR5cGVOb2RlKEFTVFR5cGVOb2RlLktJTkRfU0lNUExFLCBUWVBFX0VOVU0uTUlYRUQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUeXBlKHBhcnNlcjogUGFyc2VyKTogQVNUVHlwZU5vZGUge1xuXHRsZXQgdHlwZTtcblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKSB7XG5cdFx0dHlwZSA9IHBhcnNlTGFtYmRhVHlwZShwYXJzZXIpO1xuXHR9IGVsc2Uge1xuXHRcdHR5cGUgPSBwYXJzZVNpbXBsZU9yR2VuZXJpY1R5cGUocGFyc2VyKTtcblx0fVxuXG5cdGlmIChwYXJzZXIuY29uc3VtZUlmT3BlcmF0b3IoR1JBTU1BUi5RVUVTVElPTl9NQVJLKSkge1xuXHRcdHR5cGUubnVsbGFibGUgPSB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVR5cGVQYXJhbWV0ZXJzKHBhcnNlcjogUGFyc2VyKTogc3RyaW5nW10ge1xuXHRjb25zdCBwYXJhbWV0ZXJzID0gW107XG5cblx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuTEVTU19USEFOKTtcblxuXHRkbyB7XG5cdFx0Y29uc3QgbmFtZSA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCkudmFsdWU7XG5cdFx0cGFyYW1ldGVycy5wdXNoKG5hbWUpO1xuXG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQ09NTUEpIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRwYXJzZXIubmV4dCgpO1xuXHR9IHdoaWxlICh0cnVlKTtcblxuXHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5HUkVBVEVSX1RIQU4pO1xuXG5cdHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTaW1wbGVPckdlbmVyaWNUeXBlKHBhcnNlcjogUGFyc2VyKTogQVNUVHlwZU5vZGUge1xuXHRjb25zdCBuYW1lVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXHRjb25zdCBub2RlID0gbmV3IEFTVFR5cGVOb2RlKEFTVFR5cGVOb2RlLktJTkRfU0lNUExFLCBuYW1lVG9rZW4udmFsdWUpO1xuXG5cdGlmIChwYXJzZXIuY29uc3VtZUlmT3BlcmF0b3IoR1JBTU1BUi5MRVNTX1RIQU4pKSB7XG5cblx0XHRub2RlLmtpbmQgPSBBU1RUeXBlTm9kZS5LSU5EX0dFTkVSSUM7XG5cblx0XHRkbyB7XG5cdFx0XHRub2RlLnR5cGVBcmd1bWVudHMucHVzaChwYXJzZVR5cGUocGFyc2VyKSk7XG5cdFx0fSB3aGlsZSAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKTtcblxuXHRcdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkdSRUFURVJfVEhBTik7XG5cdH1cblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTGFtYmRhVHlwZShwYXJzZXI6IFBhcnNlcik6IEFTVFR5cGVOb2RlIHtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RUeXBlTm9kZShBU1RUeXBlTm9kZS5LSU5EX0xBTUJEQSwgJ2xhbWJkYScpO1xuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pO1xuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKSB7XG5cdFx0ZG8ge1xuXHRcdFx0bm9kZS5wYXJhbWV0ZXJUeXBlcy5wdXNoKHBhcnNlVHlwZShwYXJzZXIpKTtcblx0XHR9IHdoaWxlIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5BUlJPVyk7XG5cblx0bm9kZS5yZXR1cm5UeXBlID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVByb2dyYW0ocGFyc2VyOiBQYXJzZXIpOiBBU1ROb2RlIHtcblx0Y29uc3QgY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdO1xuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS50eXBlICE9PSBUb2tlblR5cGUuRU9GKSB7XG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLkNPTU1FTlQpIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IG5vZGU6IEFTVE5vZGUgfCBudWxsID0gcGFyc2VTdGF0ZW1lbnQocGFyc2VyKTtcblx0XHRcdGlmIChub2RlKSB7XG5cdFx0XHRcdGNoaWxkcmVuLnB1c2gobm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5QUk9HUkFNTSwgY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTdGF0ZW1lbnQocGFyc2VyOiBQYXJzZXIpOiBBU1ROb2RlIHwgbnVsbCB7XG5cdGlmIChwYXJzZXIuY29uc3VtZUlmQ29tbWVudCgpKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRzd2l0Y2ggKHBhcnNlci5wZWVrKCkudmFsdWUpIHtcblx0XHRjYXNlIEdSQU1NQVIuSU1QT1JUOiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VJbXBvcnQocGFyc2VyKTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLk9QRU46XG5cdFx0Y2FzZSBHUkFNTUFSLkNMQVNTOiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VDbGFzc0RlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5JTlRFUkZBQ0U6IHtcblx0XHRcdHJldHVybiBwYXJzZUludGVyZmFjZURlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5SRVRVUk46IHtcblx0XHRcdHJldHVybiBwYXJzZVJldHVyblN0YXRlbWVudChwYXJzZXIpO1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTEVUOiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VWYXJpYWJsZURlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5JRjoge1xuXHRcdFx0cmV0dXJuIHBhcnNlSWZEZWNsYXJhdGlvbihwYXJzZXIpO1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTUFUQ0g6IHtcblx0XHRcdHJldHVybiBwYXJzZU1hdGNoRGVjbGFyYXRpb24ocGFyc2VyKTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkZPUkVBQ0g6IHtcblx0XHRcdHJldHVybiBwYXJzZUZvcmVhY2hEZWNsYXJhdGlvbihwYXJzZXIpO1xuXHRcdH1cblx0XHRkZWZhdWx0OiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VFeHByZXNzaW9uU3RhdGVtZW50KHBhcnNlcik7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJldHVyblN0YXRlbWVudChwYXJzZXI6IFBhcnNlcik6IEFTVFJldHVybk5vZGUge1xuXHRwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLlJFVFVSTik7XG5cblx0bGV0IGFyZ3VtZW50ID0gbnVsbDtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuU0VNSUNPTE9OKSB7XG5cdFx0YXJndW1lbnQgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlNFTUlDT0xPTik7XG5cblx0cmV0dXJuIG5ldyBBU1RSZXR1cm5Ob2RlKGFyZ3VtZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSW1wb3J0KHBhcnNlcjogUGFyc2VyKTogQVNUSW1wb3J0Tm9kZSB7XG5cdHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuSU1QT1JUKTtcblxuXHRsZXQgbmFtZXMgPSBbXTtcblx0bGV0IGZyb20gPSBudWxsO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5CUkFDRV9PUEVOKSB7XG5cdFx0bmFtZXMgPSBwYXJzZUltcG9ydExpc3QocGFyc2VyKTtcblx0XHRwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLkZST00pO1xuXHRcdGZyb20gPSBwYXJzZXIuZXhwZWN0U3RyaW5nKCkudmFsdWU7XG5cdH0gZWxzZSB7XG5cdFx0bmFtZXMucHVzaChwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpLnZhbHVlKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlNFTUlDT0xPTik7XG5cblx0cmV0dXJuIG5ldyBBU1RJbXBvcnROb2RlKG5hbWVzLCBmcm9tKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSW1wb3J0TGlzdChwYXJzZXI6IFBhcnNlcik6IHN0cmluZ1tdIHtcblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfT1BFTik7XG5cblx0Y29uc3QgbmFtZXM6IHN0cmluZ1tdID0gW107XG5cblx0d2hpbGUgKHRydWUpIHtcblx0XHRjb25zdCBuYW1lVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXG5cdFx0bmFtZXMucHVzaChuYW1lVG9rZW4udmFsdWUpO1xuXG5cdFx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0YnJlYWs7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9DTE9TRSk7XG5cblx0cmV0dXJuIG5hbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDbGFzc0RlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUQ2xhc3NOb2RlIHtcblx0Y29uc3QgYW5ub3RhdGlvbnMgPSBwYXJzZUFubm90YXRpb25zKHBhcnNlcik7XG5cdGNvbnN0IG1vZGlmaWVycyA9IHBhcnNlTW9kaWZpZXJzKHBhcnNlciwgW0dSQU1NQVIuT1BFTl0pO1xuXG5cdGNvbnN0IGNsYXNzVG9rZW4gPSBwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLkNMQVNTKTtcblx0Y29uc3QgbmFtZVRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblxuXHRsZXQgdHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdID0gW107XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkxFU1NfVEhBTikge1xuXHRcdHR5cGVQYXJhbWV0ZXJzID0gcGFyc2VUeXBlUGFyYW1ldGVycyhwYXJzZXIpO1xuXHR9XG5cblx0bGV0IHN1cGVyQ2xhc3MgPSBudWxsO1xuXHRpZiAocGFyc2VyLmNvbnN1bWVJZktleXdvcmQoR1JBTU1BUi5FWFRFTkRTKSkge1xuXHRcdHN1cGVyQ2xhc3MgPSBuZXcgU3VwZXJDbGFzcyhcblx0XHRcdEFTVE5vZGVUeXBlLklERU5USUZJRVIsXG5cdFx0XHRwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpLnZhbHVlXG5cdFx0KTtcblx0fVxuXG5cdGxldCBpbXBsZW1lbnRzSW50ZXJmYWNlcyA9IFtdO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5JTVBMRU1FTlRTKSB7XG5cdFx0cGFyc2VyLm5leHQoKTtcblxuXHRcdGRvIHtcblx0XHRcdGNvbnN0IGludGVyZmFjZVR5cGUgPSBwYXJzZVR5cGUocGFyc2VyKTtcblx0XHRcdGltcGxlbWVudHNJbnRlcmZhY2VzLnB1c2goaW50ZXJmYWNlVHlwZSk7XG5cdFx0fSB3aGlsZSAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX09QRU4pO1xuXG5cdGNvbnN0IGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXTtcblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQlJBQ0VfQ0xPU0UpIHtcblx0XHRpZiAocGFyc2VyLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuQ09NTUVOVCkge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IG1lbWJlcjogQVNUTm9kZSB8IG51bGwgPSBwYXJzZUNsYXNzTWVtYmVyKHBhcnNlcik7XG5cdFx0aWYgKG1lbWJlciA9PT0gbnVsbCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGNoaWxkcmVuLnB1c2gobWVtYmVyKTtcblx0fVxuXG5cdGNvbnN0IGJyYWNlQ2xvc2VUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX0NMT1NFKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVENsYXNzTm9kZShcblx0XHRuYW1lVG9rZW4udmFsdWUsXG5cdFx0YW5ub3RhdGlvbnMsXG5cdFx0bW9kaWZpZXJzLFxuXHRcdHR5cGVQYXJhbWV0ZXJzLFxuXHRcdGltcGxlbWVudHNJbnRlcmZhY2VzLFxuXHRcdHN1cGVyQ2xhc3MsXG5cdFx0Y2hpbGRyZW5cblx0KTtcblxuXHRub2RlLnNwYW4gPSBzcGFuRnJvbShjbGFzc1Rva2VuLCBicmFjZUNsb3NlVG9rZW4pO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSW50ZXJmYWNlRGVjbGFyYXRpb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RJbnRlcmZhY2VOb2RlIHtcblx0Y29uc3QgYW5ub3RhdGlvbnMgPSBwYXJzZUFubm90YXRpb25zKHBhcnNlcik7XG5cdGNvbnN0IG1vZGlmaWVycyA9IHBhcnNlTW9kaWZpZXJzKHBhcnNlciwgW10pOyAvLyBpbnRlcmZhY2VzIHNpbmQgaW1wbGl6aXQgcHVibGljXG5cblx0Y29uc3QgaW50ZXJmYWNlVG9rZW4gPSBwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLklOVEVSRkFDRSk7XG5cdGNvbnN0IG5hbWVUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cblx0bGV0IHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5MRVNTX1RIQU4pIHtcblx0XHR0eXBlUGFyYW1ldGVycyA9IHBhcnNlVHlwZVBhcmFtZXRlcnMocGFyc2VyKTtcblx0fVxuXG5cdGxldCBleHRlbmRzSW50ZXJmYWNlcyA9IFtdO1xuXHRpZiAocGFyc2VyLmNvbnN1bWVJZktleXdvcmQoR1JBTU1BUi5FWFRFTkRTKSkge1xuXHRcdGRvIHtcblx0XHRcdGV4dGVuZHNJbnRlcmZhY2VzLnB1c2gocGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKS52YWx1ZSk7XG5cdFx0fSB3aGlsZSAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX09QRU4pO1xuXG5cdGNvbnN0IGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXTtcblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQlJBQ0VfQ0xPU0UpIHtcblx0XHRpZiAocGFyc2VyLmNvbnN1bWVJZkNvbW1lbnQoKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbWVtYmVyID0gcGFyc2VDbGFzc01lbWJlcihwYXJzZXIpO1xuXHRcdGlmIChtZW1iZXIgPT09IG51bGwpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChtZW1iZXIgaW5zdGFuY2VvZiBBU1RGaWVsZE5vZGUgJiYgIW1lbWJlci5tb2RpZmllcnMuc3RhdGljKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKCdJbnRlcmZhY2UgZmllbGRzIG11c3QgYmUgc3RhdGljLicpO1xuXHRcdH1cblxuXHRcdGlmIChtZW1iZXIgaW5zdGFuY2VvZiBBU1RNZXRob2ROb2RlICYmIG1lbWJlci5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKCdJbnRlcmZhY2UgbWV0aG9kcyBtdXN0IG5vdCBoYXZlIGEgYm9keS4nKTtcblx0XHR9XG5cblx0XHRjaGlsZHJlbi5wdXNoKG1lbWJlcik7XG5cdH1cblxuXHRjb25zdCBicmFjZUNsb3NlVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9DTE9TRSk7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RJbnRlcmZhY2VOb2RlKFxuXHRcdG5hbWVUb2tlbi52YWx1ZSxcblx0XHRhbm5vdGF0aW9ucyxcblx0XHRtb2RpZmllcnMsXG5cdFx0dHlwZVBhcmFtZXRlcnMsXG5cdFx0ZXh0ZW5kc0ludGVyZmFjZXMsXG5cdFx0Y2hpbGRyZW5cblx0KTtcblxuXHRub2RlLnNwYW4gPSBzcGFuRnJvbShpbnRlcmZhY2VUb2tlbiwgYnJhY2VDbG9zZVRva2VuKTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUFubm90YXRpb25zKHBhcnNlcjogUGFyc2VyKTogQVNUQW5ub3RhdGlvbk5vZGVbXSB7XG5cdGNvbnN0IGFubm90YXRpb25zID0gW107XG5cblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLkFOTk9UQVRJT04pIHtcblx0XHRhbm5vdGF0aW9ucy5wdXNoKHBhcnNlQW5ub3RhdGlvbihwYXJzZXIpKTtcblx0fVxuXG5cdHJldHVybiBhbm5vdGF0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQW5ub3RhdGlvbihwYXJzZXI6IFBhcnNlcik6IEFTVEFubm90YXRpb25Ob2RlIHtcblx0Y29uc3QgdG9rZW4gPSBwYXJzZXIuZXhwZWN0QW5ub3RhdGlvbigpO1xuXHRjb25zdCBub2RlID0gbmV3IEFTVEFubm90YXRpb25Ob2RlKHRva2VuLnZhbHVlKTtcblxuXHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTikpIHtcblx0XHR3aGlsZSAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSkge1xuXHRcdFx0Y29uc3Qga2V5ID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKS52YWx1ZTtcblx0XHRcdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkFTU0lHTik7XG5cblx0XHRcdGNvbnN0IHZhbHVlID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdFx0XHRub2RlLnByb3BlcnRpZXMuc2V0KGtleSwgdmFsdWUpO1xuXG5cdFx0XHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5DT01NQSkge1xuXHRcdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKTtcblx0fVxuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VNb2RpZmllcnMocGFyc2VyOiBQYXJzZXIsIGFsbG93ZWQ6IHN0cmluZ1tdKTogTW9kaWZpZXJzIHtcblx0Y29uc3QgbW9kaWZpZXJzOiB7IFtpbmRleDogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XG5cblx0YWxsb3dlZC5mb3JFYWNoKG1vZGlmaWVyID0+IG1vZGlmaWVyc1ttb2RpZmllcl0gPSBmYWxzZSk7XG5cblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLktFWVdPUkQgJiYgYWxsb3dlZC5pbmNsdWRlcyhwYXJzZXIucGVlaygpLnZhbHVlKSkge1xuXHRcdGNvbnN0IG1vZGlmaWVyID0gcGFyc2VyLm5leHQoKS52YWx1ZTtcblxuXHRcdGlmIChtb2RpZmllcnNbbW9kaWZpZXJdKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKGBEdXBsaWNhdGUgbW9kaWZpZXI6ICR7bW9kaWZpZXJ9YCk7XG5cdFx0fVxuXG5cdFx0bW9kaWZpZXJzW21vZGlmaWVyXSA9IHRydWU7XG5cdH1cblxuXHRyZXR1cm4gbmV3IE1vZGlmaWVycyhtb2RpZmllcnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXJzKHBhcnNlcjogUGFyc2VyKTogQVNUUGFyYW1ldGVyTm9kZVtdIHtcblx0Y29uc3QgcGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdID0gW107XG5cblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpIHtcblx0XHRyZXR1cm4gcGFyYW1ldGVycztcblx0fVxuXG5cdGRvIHtcblx0XHRjb25zdCBuYW1lVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXHRcdGxldCB0eXBlID0gbnVsbDtcblx0XHRsZXQgZGVmYXVsdFZhbHVlID0gbnVsbDtcblxuXHRcdGxldCB0eXBlVG9rZW4gPSBudWxsO1xuXHRcdGxldCBkZWZhdWx0VmFsdWVUb2tlbiA9IG51bGw7XG5cblx0XHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5DT0xPTikge1xuXHRcdFx0dHlwZVRva2VuID0gcGFyc2VyLm5leHQoKTtcblx0XHRcdHR5cGUgPSBwYXJzZVR5cGUocGFyc2VyKTtcblx0XHR9XG5cblx0XHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5BU1NJR04pIHtcblx0XHRcdGRlZmF1bHRWYWx1ZVRva2VuID0gcGFyc2VyLm5leHQoKTtcblx0XHRcdGRlZmF1bHRWYWx1ZSA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHRcdH1cblxuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUUGFyYW1ldGVyTm9kZShuYW1lVG9rZW4udmFsdWUsIHR5cGUsIGRlZmF1bHRWYWx1ZSk7XG5cdFx0bm9kZS5zcGFuID0gc3BhbkZyb20odHlwZVRva2VuIHx8IG5hbWVUb2tlbiwgZGVmYXVsdFZhbHVlVG9rZW4gfHwgbmFtZVRva2VuKTtcblxuXHRcdHBhcmFtZXRlcnMucHVzaChub2RlKTtcblx0fSB3aGlsZSAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKTtcblxuXHRyZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ2xhc3NNZW1iZXIocGFyc2VyOiBQYXJzZXIpOiBBU1ROb2RlIHwgbnVsbCB7XG5cdGNvbnN0IHN0YXJ0VG9rZW4gPSBwYXJzZXIucGVlaygpO1xuXG5cdGNvbnN0IGFubm90YXRpb25zID0gcGFyc2VBbm5vdGF0aW9ucyhwYXJzZXIpO1xuXHRjb25zdCBtb2RpZmllcnMgPSBwYXJzZU1vZGlmaWVycyhcblx0XHRwYXJzZXIsXG5cdFx0W1xuXHRcdFx0R1JBTU1BUi5QVUJMSUMsXG5cdFx0XHRHUkFNTUFSLlBSSVZBVEUsXG5cdFx0XHRHUkFNTUFSLlNUQVRJQyxcblx0XHRcdEdSQU1NQVIuUkVBRE9OTFlcblx0XHRdXG5cdCk7XG5cblx0Y29uc3QgbmFtZVRva2VuID0gcGFyc2VyLmV4cGVjdE9uZU9mKFtUb2tlblR5cGUuSURFTlRJRklFUiwgVG9rZW5UeXBlLktFWVdPUkRdKTtcblxuXHRsZXQgZmllbGRUeXBlID0gbnVsbDtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQ09MT04pIHtcblx0XHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09MT04pKSB7XG5cdFx0XHRmaWVsZFR5cGUgPSBwYXJzZVR5cGUocGFyc2VyKTtcblx0XHR9XG5cdH1cblxuXHRsZXQgaW5pdCA9IG51bGw7XG5cdGlmIChwYXJzZXIuY29uc3VtZUlmT3BlcmF0b3IoR1JBTU1BUi5BU1NJR04pKSB7XG5cdFx0aW5pdCA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHR9XG5cblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuU0VNSUNPTE9OKSB7XG5cdFx0aWYgKCFtb2RpZmllcnMucHVibGljICYmICFtb2RpZmllcnMucHJpdmF0ZSkge1xuXHRcdFx0bW9kaWZpZXJzLnByaXZhdGUgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNlbWljb2xvblRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuU0VNSUNPTE9OKTtcblxuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNURmllbGROb2RlKG5hbWVUb2tlbi52YWx1ZSwgbW9kaWZpZXJzLCBmaWVsZFR5cGUsIGluaXQpO1xuXHRcdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIHNlbWljb2xvblRva2VuKTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGxldCB0eXBlUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuTEVTU19USEFOKSB7XG5cdFx0dHlwZVBhcmFtZXRlcnMgPSBwYXJzZVR5cGVQYXJhbWV0ZXJzKHBhcnNlcik7XG5cdH1cblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKSB7XG5cdFx0aWYgKCFtb2RpZmllcnMucHVibGljICYmICFtb2RpZmllcnMucHJpdmF0ZSkge1xuXHRcdFx0bW9kaWZpZXJzLnB1YmxpYyA9IHRydWU7XG5cdFx0fVxuXG5cdFx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTik7XG5cdFx0Y29uc3QgcGFyYW1ldGVycyA9IHBhcnNlUGFyYW1ldGVycyhwYXJzZXIpO1xuXHRcdGNvbnN0IHBhcmVudGhlc2VzQ2xvc2VUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKTtcblxuXHRcdGxldCByZXR1cm5UeXBlID0gbnVsbDtcblx0XHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09MT04pKSB7XG5cdFx0XHRyZXR1cm5UeXBlID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY2hpbGRyZW46IEFTVE5vZGVbXSA9IHBhcnNlQmxvY2socGFyc2VyKTtcblxuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUTWV0aG9kTm9kZShcblx0XHRcdG5hbWVUb2tlbi52YWx1ZSxcblx0XHRcdG5hbWVUb2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5DT05TVFJVQ1RPUiA/IEFTVE5vZGVUeXBlLkNPTlNUUlVDVE9SIDogQVNUTm9kZVR5cGUuTUVUSE9ELFxuXHRcdFx0YW5ub3RhdGlvbnMsXG5cdFx0XHRtb2RpZmllcnMsXG5cdFx0XHR0eXBlUGFyYW1ldGVycyxcblx0XHRcdHBhcmFtZXRlcnMsXG5cdFx0XHRyZXR1cm5UeXBlLFxuXHRcdFx0Y2hpbGRyZW5cblx0XHQpO1xuXG5cdFx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgcGFyZW50aGVzZXNDbG9zZVRva2VuKTtcblxuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0dGhyb3dQYXJzZXJFcnJvcihgSW52YWxpZCBjbGFzcyBtZW1iZXI6ICR7bmFtZVRva2VuLnZhbHVlfWApO1xuXG5cdHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VCbG9jayhwYXJzZXI6IFBhcnNlcik6IEFTVE5vZGVbXSB7XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLlNFTUlDT0xPTikge1xuXHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfT1BFTik7XG5cblx0Y29uc3QgY2hpbGRyZW4gPSBbXTtcblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQlJBQ0VfQ0xPU0UpIHtcblx0XHRpZiAocGFyc2VyLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuQ09NTUVOVCkge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjb25zdCBjaGlsZDogQVNUTm9kZSB8IG51bGwgPSBwYXJzZVN0YXRlbWVudChwYXJzZXIpO1xuXHRcdGlmIChjaGlsZCkge1xuXHRcdFx0Y2hpbGRyZW4ucHVzaChjaGlsZCk7XG5cdFx0fVxuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfQ0xPU0UpO1xuXG5cdHJldHVybiBjaGlsZHJlbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVmFyaWFibGVEZWNsYXJhdGlvbihwYXJzZXI6IFBhcnNlcik6IEFTVFZhcmlhYmxlTm9kZSB7XG5cdGNvbnN0IGxldFRva2VuID0gcGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5MRVQpO1xuXHRjb25zdCBuYW1lVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXG5cdGxldCB0eXBlQW5ub3RhdGlvbiA9IG51bGw7XG5cdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT0xPTikpIHtcblx0XHR0eXBlQW5ub3RhdGlvbiA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHR9XG5cblx0bGV0IGluaXQgPSBudWxsO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5BU1NJR04pIHtcblx0XHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5BU1NJR04pO1xuXHRcdGluaXQgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0fVxuXG5cdGNvbnN0IHNlbWljb2xvblRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuU0VNSUNPTE9OKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVFZhcmlhYmxlTm9kZShuYW1lVG9rZW4udmFsdWUsIHR5cGVBbm5vdGF0aW9uLCBpbml0KTtcblx0bm9kZS5zcGFuID0gc3BhbkZyb20obGV0VG9rZW4sIHNlbWljb2xvblRva2VuKTtcblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSWZEZWNsYXJhdGlvbihwYXJzZXI6IFBhcnNlcik6IEFTVElmTm9kZSB7XG5cdGNvbnN0IHN0YXJ0VG9rZW4gPSBwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLklGKTtcblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKTtcblx0Y29uc3QgY29uZGl0aW9uID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdGNvbnN0IHBhcmVudGhlc2VzQ2xvc2VUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVElmTm9kZShjb25kaXRpb24sIG5ldyBBU1RUaGVuTm9kZShwYXJzZUJsb2NrKHBhcnNlcikpKTtcblxuXHRpZiAocGFyc2VyLmNvbnN1bWVJZktleXdvcmQoR1JBTU1BUi5FTFNFKSkge1xuXHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLklGKSB7XG5cdFx0XHRub2RlLmVsc2UgPSBwYXJzZUlmRGVjbGFyYXRpb24ocGFyc2VyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bm9kZS5lbHNlID0gbmV3IEFTVEVsc2VOb2RlKHBhcnNlQmxvY2socGFyc2VyKSk7XG5cdFx0fVxuXHR9XG5cblx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgcGFyZW50aGVzZXNDbG9zZVRva2VuKTtcblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTWF0Y2hEZWNsYXJhdGlvbihwYXJzZXI6IFBhcnNlcik6IEFTVE1hdGNoTm9kZSB7XG5cdGNvbnN0IHN0YXJ0VG9rZW4gPSBwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLk1BVENIKTtcblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTik7XG5cblx0Y29uc3QgZXhwcmVzc2lvbiA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKTtcblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfT1BFTik7XG5cblx0Y29uc3QgbWF0Y2hDYXNlczogQVNUTWF0Y2hDYXNlTm9kZVtdID0gW107XG5cdGxldCBkZWZhdWx0Q2FzZTogQVNUTWF0Y2hDYXNlTm9kZSB8IG51bGwgPSBudWxsO1xuXG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLkJSQUNFX0NMT1NFKSB7XG5cdFx0Y29uc3QgbWF0Y2hDYXNlOiBBU1RNYXRjaENhc2VOb2RlID0gcGFyc2VNYXRjaENhc2VEZWNsYXJhdGlvbihwYXJzZXIpO1xuXHRcdGlmIChtYXRjaENhc2UudGVzdCA9PT0gbnVsbCkge1xuXHRcdFx0ZGVmYXVsdENhc2UgPSBtYXRjaENhc2U7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0bWF0Y2hDYXNlcy5wdXNoKG1hdGNoQ2FzZSk7XG5cdH1cblxuXHRjb25zdCBicmFjZUNsb3NlVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9DTE9TRSk7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RNYXRjaE5vZGUoZXhwcmVzc2lvbiwgbWF0Y2hDYXNlcywgZGVmYXVsdENhc2UpO1xuXHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBicmFjZUNsb3NlVG9rZW4pO1xuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VNYXRjaENhc2VEZWNsYXJhdGlvbihwYXJzZXI6IFBhcnNlcik6IEFTVE1hdGNoQ2FzZU5vZGUge1xuXHRjb25zdCBjYXNlTm9kZSA9IG5ldyBBU1RNYXRjaENhc2VOb2RlKCk7XG5cblx0aWYgKHBhcnNlci5jb25zdW1lSWZLZXl3b3JkKEdSQU1NQVIuREVGQVVMVCkpIHtcblx0XHRjYXNlTm9kZS50ZXN0ID0gbnVsbDtcblx0fSBlbHNlIHtcblx0XHRjYXNlTm9kZS50ZXN0ID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5DT0xPTik7XG5cblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQlJBQ0VfT1BFTikge1xuXHRcdGNhc2VOb2RlLmNoaWxkcmVuID0gcGFyc2VCbG9jayhwYXJzZXIpO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnN0IGNoaWxkOiBBU1ROb2RlIHwgbnVsbCA9IHBhcnNlU3RhdGVtZW50KHBhcnNlcik7XG5cdFx0aWYgKGNoaWxkKSB7XG5cdFx0XHRjYXNlTm9kZS5jaGlsZHJlbi5wdXNoKGNoaWxkKVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjYXNlTm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRm9yZWFjaERlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNURm9yZWFjaE5vZGUge1xuXHRjb25zdCBzdGFydFRva2VuID0gcGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5GT1JFQUNIKTtcblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKTtcblxuXHRjb25zdCBpdGVyYXRvclRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblx0Y29uc3QgaXRlcmF0b3IgPSBpdGVyYXRvclRva2VuLnZhbHVlO1xuXG5cdHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuSU4pO1xuXG5cdGNvbnN0IGl0ZXJhYmxlID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cblx0Y29uc3QgcGFyZW50aGVzZXNDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNURm9yZWFjaE5vZGUoaXRlcmF0b3IsIGl0ZXJhYmxlLCBwYXJzZUJsb2NrKHBhcnNlcikpO1xuXHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBwYXJlbnRoZXNlc0Nsb3NlVG9rZW4pO1xuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBcnJheShwYXJzZXI6IFBhcnNlcik6IEFTVEFycmF5Tm9kZSB7XG5cdGNvbnN0IHN0YXJ0VG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9PUEVOKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVEFycmF5Tm9kZSgpO1xuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX0NMT1NFKSB7XG5cdFx0ZG8ge1xuXHRcdFx0bm9kZS5lbGVtZW50cy5wdXNoKHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpKTtcblx0XHR9IHdoaWxlIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpO1xuXHR9XG5cblx0Y29uc3QgYnJhY2tldFNxdWFyZUNsb3NlVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9DTE9TRSk7XG5cblx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgYnJhY2tldFNxdWFyZUNsb3NlVG9rZW4pO1xuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VMYW1iZGEocGFyc2VyOiBQYXJzZXIpOiBBU1RMYW1iZGFOb2RlIHtcblx0Y29uc3Qgc3RhcnRUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX09QRU4pO1xuXG5cdGNvbnN0IHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSA9IFtdO1xuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5BUlJPVykge1xuXHRcdGNvbnN0IG5hbWUgPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpLnZhbHVlO1xuXHRcdGxldCB0eXBlID0gbnVsbDtcblx0XHRsZXQgZGVmYXVsdFZhbHVlID0gbnVsbDtcblxuXHRcdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT0xPTikpIHtcblx0XHRcdHR5cGUgPSBwYXJzZVR5cGUocGFyc2VyKTtcblx0XHR9XG5cblx0XHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5BU1NJR04pIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0XHRkZWZhdWx0VmFsdWUgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0XHR9XG5cblx0XHRwYXJhbWV0ZXJzLnB1c2gobmV3IEFTVFBhcmFtZXRlck5vZGUobmFtZSwgdHlwZSwgZGVmYXVsdFZhbHVlKSk7XG5cblx0XHRwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSk7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5BUlJPVyk7XG5cblx0bGV0IHJldHVyblR5cGU6IEFTVFR5cGVOb2RlID0gY3JlYXRlTWl4ZWRUeXBlKCk7XG5cdGlmIChwYXJzZXIucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0cmV0dXJuVHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkNPTE9OKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm5UeXBlID0gY3JlYXRlTWl4ZWRUeXBlKCk7XG5cdFx0XHRwYXJzZXIucmV3aW5kKCk7XG5cdFx0fVxuXHR9XG5cblx0bGV0IGNoaWxkcmVuID0gW107XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkJSQUNFX09QRU4pIHtcblx0XHRjaGlsZHJlbiA9IHBhcnNlQmxvY2socGFyc2VyKTtcblx0fSBlbHNlIHtcblx0XHRjaGlsZHJlbi5wdXNoKHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpKTtcblx0fVxuXG5cdGNvbnN0IGJyYWNlQ2xvc2VUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX0NMT1NFKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVExhbWJkYU5vZGUocGFyYW1ldGVycywgcmV0dXJuVHlwZSwgY2hpbGRyZW4pO1xuXHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBicmFjZUNsb3NlVG9rZW4pO1xuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9va3NMaWtlTGFtYmRhKHBhcnNlcjogUGFyc2VyKTogYm9vbGVhbiB7XG5cdGNvbnN0IHN0YXJ0OiBudW1iZXIgPSBwYXJzZXIucG9zaXRpb24oKTtcblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5CUkFDRV9PUEVOKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cGFyc2VyLm5leHQoKTtcblxuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuSURFTlRJRklFUikge1xuXHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTE9OKSkge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHR9XG5cdFx0aWYgKCFwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGlzTGFtYmRhOiBib29sZWFuID0gcGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5BUlJPVztcblx0cGFyc2VyLnNlZWtBdChzdGFydClcblx0cmV0dXJuIGlzTGFtYmRhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VFeHByZXNzaW9uU3RhdGVtZW50KHBhcnNlcjogUGFyc2VyKTogQVNURXhwcmVzc2lvbk5vZGUge1xuXHRjb25zdCBleHByID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuU0VNSUNPTE9OKTtcblxuXHRyZXR1cm4gbmV3IEFTVEV4cHJlc3Npb25Ob2RlKGV4cHIpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUV4cHJlc3Npb24ocGFyc2VyOiBQYXJzZXIsIHByZWNlZGVuY2U6IG51bWJlciA9IDApOiBBU1ROb2RlIHtcblx0bGV0IGV4cHI6IEFTVE5vZGUgPSBwYXJzZVBvc3RmaXgocGFyc2VyLCBwYXJzZVVuYXJ5KHBhcnNlcikpO1xuXG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0Y29uc3QgdG9rZW4gPSBwYXJzZXIucGVlaygpO1xuXHRcdGlmICghdG9rZW4pIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGxldCB0b2tlblByZWNlZGVuY2UgPSBsb29rdXBQcmVjZWRlbmNlKHRva2VuKTtcblx0XHRpZiAodG9rZW5QcmVjZWRlbmNlIDwgcHJlY2VkZW5jZSkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLkFTU0lHTikge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHRcdGV4cHIgPSBuZXcgQVNUQXNzaWdubWVudE5vZGUoZXhwciwgcGFyc2VFeHByZXNzaW9uKHBhcnNlciwgdG9rZW5QcmVjZWRlbmNlKSk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoR1JBTU1BUi5NQVRIX09QRVJBVE9SUy5pbmNsdWRlcyh0b2tlbi52YWx1ZSlcblx0XHRcdHx8IEdSQU1NQVIuTE9HSUNfT1BFUkFUT1JTLmluY2x1ZGVzKHRva2VuLnZhbHVlKSkge1xuXHRcdFx0Y29uc3Qgc3RhcnRUb2tlbiA9IHBhcnNlci5uZXh0KCk7XG5cdFx0XHRjb25zdCByaWdodCA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIsIHRva2VuUHJlY2VkZW5jZSArIDEpO1xuXHRcdFx0Y29uc3QgZW5kVG9rZW4gPSBwYXJzZXIucGVlaygpO1xuXG5cdFx0XHRjb25zdCBub2RlID0gbmV3IEFTVEJpbmFyeU5vZGUoZXhwciwgcmlnaHQsIHRva2VuLnZhbHVlKTtcblx0XHRcdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIGVuZFRva2VuKTtcblx0XHRcdGV4cHIgPSBub2RlO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0YnJlYWs7XG5cdH1cblxuXHRyZXR1cm4gZXhwcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVkRvbUV4cHJlc3Npb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RWRG9tTm9kZSB7XG5cdHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuVkRPTSk7XG5cdHJldHVybiBwYXJzZVZEb21FbGVtZW50KHBhcnNlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVZEb21FbGVtZW50KHBhcnNlcjogUGFyc2VyKTogQVNUVkRvbU5vZGUge1xuXHRwYXJzZXIuY29uc3VtZUlmVGV4dCgpO1xuXG5cdGNvbnN0IHN0YXJ0VG9rZW46IFRva2VuID0gcGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuTEVTU19USEFOKTtcblx0Y29uc3QgdGFnVG9rZW46IFRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblx0Y29uc3QgdGFnOiBzdHJpbmcgPSB0YWdUb2tlbi52YWx1ZTtcblxuXHRwYXJzZXIuY29uc3VtZUlmVGV4dCgpO1xuXG5cdGNvbnN0IHByb3BzID0gbmV3IE1hcDxzdHJpbmcsIEFTVE5vZGU+KCk7XG5cdHdoaWxlICh0cnVlKSB7XG5cblx0XHRpZiAocGFyc2VyLnBlZWtJcyhHUkFNTUFSLkdSRUFURVJfVEhBTikpIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGlmIChwYXJzZXIucGVla0lzKEdSQU1NQVIuWE1MX0NMT1NFX1RBRykpIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGNvbnN0IG5hbWVUb2tlbjogVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXHRcdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkFTU0lHTik7XG5cblx0XHRsZXQgdmFsdWU6IEFTVE5vZGU7XG5cblx0XHRpZiAocGFyc2VyLnBlZWtJcyhHUkFNTUFSLkJSQUNFX09QRU4pKSB7XG5cdFx0XHRpZiAobG9va3NMaWtlTGFtYmRhKHBhcnNlcikpIHtcblx0XHRcdFx0dmFsdWUgPSBwYXJzZUxhbWJkYShwYXJzZXIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHRcdFx0dmFsdWUgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0XHRcdFx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfQ0xPU0UpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YWx1ZSA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHRcdH1cblxuXHRcdHByb3BzLnNldChuYW1lVG9rZW4udmFsdWUsIHZhbHVlKTtcblxuXHRcdHBhcnNlci5jb25zdW1lSWZUZXh0KCk7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5HUkVBVEVSX1RIQU4pO1xuXG5cdGNvbnN0IGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXTtcblx0d2hpbGUgKCFwYXJzZXIucGVla0lzKEdSQU1NQVIuWE1MX09QRU5fQ0xPU0VfVEFHKSkge1xuXG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLk9QRVJBVE9SKSB7XG5cdFx0XHRjaGlsZHJlbi5wdXNoKHBhcnNlVkRvbUVsZW1lbnQocGFyc2VyKSk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjaGlsZHJlbi5wdXNoKHBhcnNlVkRvbVRleHQocGFyc2VyKSk7XG5cblx0fVxuXG5cdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLlhNTF9PUEVOX0NMT1NFX1RBRyk7XG5cdHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkdSRUFURVJfVEhBTik7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RWRG9tTm9kZSh0YWcsIHByb3BzLCBjaGlsZHJlbik7XG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIHBhcnNlci5wZWVrKCkpO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVkRvbVRleHQocGFyc2VyOiBQYXJzZXIpOiBBU1RWRG9tVGV4dE5vZGUge1xuXHRjb25zdCB0b2tlbjogVG9rZW4gPSBwYXJzZXIuZXhwZWN0T25lT2YoXG5cdFx0W1xuXHRcdFx0VG9rZW5UeXBlLklERU5USUZJRVIsXG5cdFx0XHRUb2tlblR5cGUuT1BFUkFUT1IsXG5cdFx0XHRUb2tlblR5cGUuS0VZV09SRCxcblx0XHRcdFRva2VuVHlwZS5QVU5DVFVBVElPTixcblx0XHRcdFRva2VuVHlwZS5URVhUXG5cdFx0XVxuXHQpO1xuXHRjb25zdCBub2RlID0gbmV3IEFTVFZEb21UZXh0Tm9kZSh0b2tlbi52YWx1ZSk7XG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHRva2VuLCB0b2tlbik7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBcmd1bWVudHMocGFyc2VyOiBQYXJzZXIpOiBBU1ROb2RlW10ge1xuXHRjb25zdCBhcmdzOiBBU1ROb2RlW10gPSBbXTtcblxuXHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpKSB7XG5cdFx0cmV0dXJuIGFyZ3M7XG5cdH1cblxuXHRhcmdzLnB1c2gocGFyc2VFeHByZXNzaW9uKHBhcnNlcikpO1xuXG5cdHdoaWxlIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpIHtcblx0XHRhcmdzLnB1c2gocGFyc2VFeHByZXNzaW9uKHBhcnNlcikpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXHRyZXR1cm4gYXJncztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVW5hcnkocGFyc2VyOiBQYXJzZXIpOiBBU1ROb2RlIHwgQVNUVW5hcnlOb2RlIHtcblx0Y29uc3QgdG9rZW46IFRva2VuID0gcGFyc2VyLnBlZWsoKTtcblxuXHRpZiAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLktFWVdPUkQgJiYgdG9rZW4udmFsdWUgPT09IEdSQU1NQVIuVkRPTSkge1xuXHRcdHJldHVybiBwYXJzZVZEb21FeHByZXNzaW9uKHBhcnNlcik7XG5cdH1cblxuXHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuRVhDTEFNQVRJT05fTUFSSykge1xuXHRcdHBhcnNlci5uZXh0KCk7XG5cblx0XHRjb25zdCB1bmFyeTogQVNUTm9kZSB8IEFTVFVuYXJ5Tm9kZSA9IHBhcnNlVW5hcnkocGFyc2VyKTtcblxuXHRcdHJldHVybiBuZXcgQVNUVW5hcnlOb2RlKEdSQU1NQVIuRVhDTEFNQVRJT05fTUFSSywgdW5hcnkpO1xuXHR9XG5cblx0cmV0dXJuIHBhcnNlUHJpbWFyeShwYXJzZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQcmltYXJ5KHBhcnNlcjogUGFyc2VyKTogQVNUTm9kZSB7XG5cdGlmIChsb29rc0xpa2VMYW1iZGEocGFyc2VyKSkge1xuXHRcdHJldHVybiBwYXJzZUxhbWJkYShwYXJzZXIpO1xuXHR9XG5cblx0Y29uc3QgdG9rZW46IFRva2VuID0gcGFyc2VyLm5leHQoKTtcblxuXHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfT1BFTikge1xuXHRcdHBhcnNlci5yZXdpbmQoKTtcblx0XHRyZXR1cm4gcGFyc2VBcnJheShwYXJzZXIpO1xuXHR9XG5cblx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5OVU1CRVIpIHtcblx0XHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuTlVNQkVSKTtcblx0XHRub2RlLnZhbHVlID0gdG9rZW4udmFsdWU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRpZiAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLlNUUklORykge1xuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5TVFJJTkcpO1xuXHRcdG5vZGUudmFsdWUgPSB0b2tlbi52YWx1ZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuQk9PTEVBTikge1xuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5CT09MRUFOKTtcblx0XHRub2RlLnZhbHVlID0gdG9rZW4udmFsdWU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRpZiAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLklERU5USUZJRVIpIHtcblx0XHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuSURFTlRJRklFUik7XG5cdFx0bm9kZS5uYW1lID0gdG9rZW4udmFsdWU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuTlVMTCkge1xuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5OVUxMKTtcblx0XHRub2RlLnZhbHVlID0gdG9rZW4udmFsdWU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuVEhJUykge1xuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5USElTKTtcblx0XHRub2RlLm5hbWUgPSB0b2tlbi52YWx1ZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5ORVcpIHtcblxuXHRcdGxldCB0eXBlQW5ub3RhdGlvbiA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXG5cdFx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTik7XG5cblx0XHRyZXR1cm4gbmV3IEFTVE5ld05vZGUocGFyc2VBcmd1bWVudHMocGFyc2VyKSwgdHlwZUFubm90YXRpb24pO1xuXHR9XG5cblx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pIHtcblx0XHRjb25zdCBleHByID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdFx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXHRcdHJldHVybiBleHByO1xuXHR9XG5cblx0dGhyb3dQYXJzZXJFcnJvcihgVW5leHBlY3RlZCB0b2tlbjogJHt0b2tlbi50eXBlfSAke3Rva2VuLnZhbHVlfWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQb3N0Zml4KHBhcnNlcjogUGFyc2VyLCBleHByOiBBU1ROb2RlIHwgbnVsbCk6IEFTVE5vZGUge1xuXHRpZiAoZXhwciA9PT0gbnVsbCkge1xuXHRcdHRocm93UGFyc2VyRXJyb3IoYEV4cGVjdGVkIGV4cHJlc3Npb24sIGdvdCBudWxsLmApO1xuXHR9XG5cblx0d2hpbGUgKHRydWUpIHtcblx0XHRjb25zdCB0b2tlbiA9IHBhcnNlci5wZWVrKCk7XG5cdFx0aWYgKCF0b2tlbikgYnJlYWs7XG5cblx0XHQvLyBDYWxsOiBmb28oLi4uKVxuXHRcdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdFx0ZXhwciA9IG5ldyBBU1RDYWxsTm9kZShleHByLCBwYXJzZUFyZ3VtZW50cyhwYXJzZXIpKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIE1lbWJlcjogZm9vLmJhclxuXHRcdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5ET1QpIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0XHRleHByID0gbmV3IEFTVE1lbWJlck5vZGUoZXhwciwgcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKS52YWx1ZSk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBJTkRFWDogZm9vW2V4cHJdXG5cdFx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX09QRU4pIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cblx0XHRcdGNvbnN0IGluZGV4ID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cblx0XHRcdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX0NMT1NFKTtcblxuXHRcdFx0ZXhwciA9IG5ldyBBU1RJbmRleE5vZGUoZXhwciwgaW5kZXgpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0YnJlYWs7XG5cdH1cblxuXHRyZXR1cm4gZXhwcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvb2t1cFByZWNlZGVuY2UodG9rZW46IFRva2VuKTogbnVtYmVyIHtcblx0c3dpdGNoICh0b2tlbi52YWx1ZSkge1xuXHRcdGNhc2UgR1JBTU1BUi5ET1Q6XG5cdFx0XHRyZXR1cm4gMTAwO1xuXHRcdGNhc2UgR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOOlxuXHRcdFx0cmV0dXJuIDkwO1xuXHRcdGNhc2UgR1JBTU1BUi5NVUxUSVBMWTpcblx0XHRjYXNlIEdSQU1NQVIuRElWSURFOlxuXHRcdGNhc2UgR1JBTU1BUi5NT0RVTFVTOlxuXHRcdFx0cmV0dXJuIDYwO1xuXHRcdGNhc2UgR1JBTU1BUi5QTFVTOlxuXHRcdGNhc2UgR1JBTU1BUi5NSU5VUzpcblx0XHRcdHJldHVybiA1MDtcblx0XHRjYXNlIEdSQU1NQVIuTEVTU19USEFOOlxuXHRcdGNhc2UgR1JBTU1BUi5HUkVBVEVSX1RIQU46XG5cdFx0Y2FzZSBHUkFNTUFSLkxFU1NfRVFVQUw6XG5cdFx0Y2FzZSBHUkFNTUFSLkdSRUFURVJfRVFVQUw6XG5cdFx0XHRyZXR1cm4gNDA7XG5cdFx0Y2FzZSBHUkFNTUFSLkVRVUFMOlxuXHRcdGNhc2UgR1JBTU1BUi5OT1RfRVFVQUw6XG5cdFx0XHRyZXR1cm4gMzA7XG5cdFx0Y2FzZSBHUkFNTUFSLkFORDpcblx0XHRcdHJldHVybiAyMDtcblx0XHRjYXNlIEdSQU1NQVIuT1I6XG5cdFx0XHRyZXR1cm4gMTA7XG5cdFx0Y2FzZSBHUkFNTUFSLkFTU0lHTjpcblx0XHRcdHJldHVybiA1O1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gMDtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge1Rva2VuLCBUb2tlblR5cGV9IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5pbXBvcnQge1Rva2VuU3RyZWFtfSBmcm9tIFwiLi4vdG9rZW5pemVyL3Rva2VuaXplclwiO1xuaW1wb3J0IHtwYXJzZVByb2dyYW19IGZyb20gXCIuL3BhcnNlcl9zdGF0bWVudHNcIjtcbmltcG9ydCB7dGhyb3dQYXJzZXJFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuL3BhcnNlcl9zb3VyY2VcIjtcblxuXG5leHBvcnQgY2xhc3MgUGFyc2VyIHtcblx0c291cmNlOiBTb3VyY2U7XG5cdHRva2VuU3RyZWFtOiBUb2tlblN0cmVhbSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKHNvdXJjZTogU291cmNlKSB7XG5cdFx0dGhpcy5zb3VyY2UgPSBzb3VyY2U7XG5cdH1cblxuXHRwYXJzZSgpIHtcblx0XHR0aGlzLnRva2VuU3RyZWFtID0gdGhpcy5zb3VyY2Vcblx0XHQgICAgICAgICAgICAgICAgICAgICAgIC5nZXRUb2tlbml6ZXIoKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgLmdldFRva2VuU3RyZWFtKClcblxuXHRcdHJldHVybiBwYXJzZVByb2dyYW0odGhpcyk7XG5cdH1cblxuXHRzdHJlYW0oKTogVG9rZW5TdHJlYW0ge1xuXHRcdGlmICghdGhpcy50b2tlblN0cmVhbSkge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcignUGFyc2VyIGhhcyBub3QgYmVlbiBwYXJzZWQgeWV0LicpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnRva2VuU3RyZWFtO1xuXHR9XG5cblx0ZXhwZWN0KHRva2VuVHlwZTogc3RyaW5nLCBrZXl3b3JkOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IFRva2VuIHtcblx0XHRjb25zdCB0b2tlbiA9IHRoaXNcblx0XHRcdC5zdHJlYW0oKVxuXHRcdFx0Lm5leHQoKTtcblxuXHRcdGlmICghdG9rZW4pIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoYFVuZXhwZWN0ZWQgZW5kIG9mIGZpbGUuIEV4cGVjdGVkICR7dG9rZW5UeXBlfSR7a2V5d29yZCA/ICcgJyArIGtleXdvcmQgOiAnJ31gKTtcblx0XHR9XG5cblx0XHRpZiAodG9rZW4udHlwZSAhPT0gdG9rZW5UeXBlIHx8IChrZXl3b3JkICYmIHRva2VuLnZhbHVlICE9PSBrZXl3b3JkKSkge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcihgRXhwZWN0ZWQgJHt0b2tlblR5cGV9JHtrZXl3b3JkID8gJyAnICsga2V5d29yZCA6ICcnfSwgZ290ICR7dG9rZW4udHlwZX0gJHt0b2tlbi52YWx1ZX1gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdG9rZW47XG5cdH1cblxuXHRleHBlY3RPcGVyYXRvcihrZXl3b3JkOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IFRva2VuIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlY3QoVG9rZW5UeXBlLk9QRVJBVE9SLCBrZXl3b3JkKTtcblx0fVxuXG5cdGV4cGVjdEFubm90YXRpb24oKTogVG9rZW4ge1xuXHRcdHJldHVybiB0aGlzLmV4cGVjdChUb2tlblR5cGUuQU5OT1RBVElPTik7XG5cdH1cblxuXHRleHBlY3RJZGVudGlmaWVyKGtleXdvcmQ6IHN0cmluZyB8IG51bGwgPSBudWxsKTogVG9rZW4ge1xuXHRcdHJldHVybiB0aGlzLmV4cGVjdChUb2tlblR5cGUuSURFTlRJRklFUiwga2V5d29yZCk7XG5cdH1cblxuXHRleHBlY3RLZXl3b3JkKGtleXdvcmQ6IHN0cmluZyB8IG51bGwgPSBudWxsKTogVG9rZW4ge1xuXHRcdHJldHVybiB0aGlzLmV4cGVjdChUb2tlblR5cGUuS0VZV09SRCwga2V5d29yZCk7XG5cdH1cblxuXHRleHBlY3RTdHJpbmcoKTogVG9rZW4ge1xuXHRcdHJldHVybiB0aGlzLmV4cGVjdChUb2tlblR5cGUuU1RSSU5HKTtcblx0fVxuXG5cdGV4cGVjdFRleHQoKTogVG9rZW4ge1xuXHRcdHJldHVybiB0aGlzLmV4cGVjdChUb2tlblR5cGUuVEVYVCk7XG5cdH1cblxuXHRleHBlY3RQdW5jdHVhdGlvbihrZXl3b3JkOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IFRva2VuIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlY3QoVG9rZW5UeXBlLlBVTkNUVUFUSU9OLCBrZXl3b3JkKTtcblx0fVxuXG5cdGV4cGVjdE9uZU9mKHRva2VuVHlwZXM6IHN0cmluZ1tdLCBrZXl3b3Jkczogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBUb2tlbiB7XG5cdFx0Y29uc3QgdG9rZW4gPSB0aGlzXG5cdFx0XHQuc3RyZWFtKClcblx0XHRcdC5uZXh0KCk7XG5cblx0XHRpZiAoIXRva2VuKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKGBVbmV4cGVjdGVkIGVuZCBvZiBmaWxlLiBFeHBlY3RlZCBvbmUgb2YgdHlwZXMgJHt0b2tlblR5cGVzfSwgZ290IG51bGwuYCk7XG5cdFx0fVxuXG5cdFx0aWYgKCF0b2tlblR5cGVzLmluY2x1ZGVzKHRva2VuLnR5cGUpKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKGBFeHBlY3RlZCBvbmUgb2YgdHlwZXMgJHt0b2tlblR5cGVzfSwgZ290ICR7dG9rZW4udHlwZX1gKTtcblx0XHR9XG5cblx0XHRpZiAoa2V5d29yZHMgJiYgIWtleXdvcmRzLmluY2x1ZGVzKHRva2VuLnZhbHVlKSkge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcihgRXhwZWN0ZWQgb25lIG9mIHZhbHVlcyAke2tleXdvcmRzfSwgZ290ICR7dG9rZW4udmFsdWV9YCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRva2VuO1xuXHR9XG5cblx0Y29uc3VtZUlmKHRva2VuVHlwZTogc3RyaW5nLCBrZXl3b3JkOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IHRva2VuID0gdGhpcy5wZWVrKCk7XG5cblx0XHRpZiAodG9rZW4udHlwZSA9PT0gdG9rZW5UeXBlICYmIChrZXl3b3JkICYmIHRva2VuLnZhbHVlLnRyaW0oKSA9PT0ga2V5d29yZCkpIHtcblx0XHRcdHRoaXMubmV4dCgpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Y29uc3VtZUlmUHVuY3R1YXRpb24odmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbnN1bWVJZihUb2tlblR5cGUuUFVOQ1RVQVRJT04sIHZhbHVlKTtcblx0fVxuXG5cdGNvbnN1bWVJZk9wZXJhdG9yKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdW1lSWYoVG9rZW5UeXBlLk9QRVJBVE9SLCB2YWx1ZSk7XG5cdH1cblxuXHRjb25zdW1lSWZDb21tZW50KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbnN1bWVJZihUb2tlblR5cGUuQ09NTUVOVCk7XG5cdH1cblxuXHRjb25zdW1lSWZLZXl3b3JkKGtleXdvcmQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbnN1bWVJZihUb2tlblR5cGUuS0VZV09SRCwga2V5d29yZCk7XG5cdH1cblxuXHRjb25zdW1lSWZUZXh0KCk6IGJvb2xlYW4ge1xuXHRcdGlmICh0aGlzLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuVEVYVCAmJiB0aGlzLnBlZWtJcygnJykpIHtcblx0XHRcdHRoaXMubmV4dCgpO1xuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRwZWVrKCk6IFRva2VuIHtcblx0XHRjb25zdCB0b2tlbiA9IHRoaXNcblx0XHRcdC5zdHJlYW0oKVxuXHRcdFx0LnBlZWsoKTtcblxuXHRcdGlmICh0b2tlbiA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZmlsZS4gRXhwZWN0ZWQgdG9rZW4sIGdvdCBudWxsLicpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0b2tlbjtcblx0fVxuXG5cdHBlZWtJcyhrZXl3b3JkOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5wZWVrKClcblx0XHQgICAgICAgICAgIC52YWx1ZVxuXHRcdCAgICAgICAgICAgLnRyaW0oKSA9PT0ga2V5d29yZDtcblx0fVxuXG5cdG5leHQoKTogVG9rZW4ge1xuXHRcdGNvbnN0IHRva2VuID0gdGhpc1xuXHRcdFx0LnN0cmVhbSgpXG5cdFx0XHQubmV4dCgpO1xuXG5cdFx0aWYgKHRva2VuID09PSBudWxsKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKCdVbmV4cGVjdGVkIGVuZCBvZiBmaWxlLiBFeHBlY3RlZCB0b2tlbiwgZ290IG51bGwuJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRva2VuO1xuXHR9XG5cblx0cmV3aW5kKCk6IHZvaWQge1xuXHRcdHRoaXMuc3RyZWFtKClcblx0XHQgICAgLnJld2luZCgpO1xuXHR9XG5cblx0cG9zaXRpb24oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5zdHJlYW0oKS5pbmRleDtcblx0fVxuXG5cdHNlZWtBdChwb3NpdGlvbjogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5zdHJlYW0oKS5pbmRleCA9IHBvc2l0aW9uO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7QVNUQ2xhc3NOb2RlLCBBU1RJbnRlcmZhY2VOb2RlLCBBU1ROb2RlfSBmcm9tIFwiLi4vYXN0XCI7XG5pbXBvcnQge0NsYXNzRGVmaW5pdGlvbiwgSW5zdGFuY2UsIEludGVyZmFjZURlZmluaXRpb259IGZyb20gXCIuL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7Q2xhc3NTeW1ib2wsIEludGVyZmFjZVN5bWJvbH0gZnJvbSBcIi4uL3R5cGVzL3R5cGVfb2JqZWN0c1wiO1xuaW1wb3J0IHt0aHJvd1J1bnRpbWVFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuXG5leHBvcnQgY2xhc3MgQ2xhc3NSZWdpc3RyeSB7XG5cdG1hcDogTWFwPHN0cmluZywgQ2xhc3NEZWZpbml0aW9uPiA9IG5ldyBNYXAoKTtcblxuXHRyZWdpc3Rlcihub2RlOiBBU1RDbGFzc05vZGUpOiB2b2lkIHtcblx0XHR0aGlzLnNldChub2RlLm5hbWUsIENsYXNzRGVmaW5pdGlvbi5mcm9tQVNUKG5vZGUpKTtcblx0fVxuXG5cdGFsbCgpOiBJdGVyYWJsZUl0ZXJhdG9yPENsYXNzRGVmaW5pdGlvbj4ge1xuXHRcdHJldHVybiB0aGlzLm1hcC52YWx1ZXMoKTtcblx0fVxuXG5cdHNldChuYW1lOiBzdHJpbmcsIGNsYXNzRGVmaW5pdGlvbjogQ2xhc3NEZWZpbml0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5tYXAuc2V0KG5hbWUsIGNsYXNzRGVmaW5pdGlvbik7XG5cdH1cblxuXHRnZXQobmFtZTogc3RyaW5nKTogQ2xhc3NEZWZpbml0aW9uIHtcblx0XHRjb25zdCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uIHwgbnVsbCA9IHRoaXMubWFwLmdldChuYW1lKSB8fCBudWxsO1xuXHRcdGlmICghY2xhc3NEZWYpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBDbGFzcyAke25hbWV9IG5vdCBmb3VuZC5gKTtcblx0XHR9XG5cdFx0cmV0dXJuIGNsYXNzRGVmO1xuXHR9XG5cblx0aGFzKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm1hcC5oYXMobmFtZSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEludGVyZmFjZVJlZ2lzdHJ5IHtcblx0bWFwOiBNYXA8c3RyaW5nLCBJbnRlcmZhY2VEZWZpbml0aW9uPiA9IG5ldyBNYXAoKTtcblxuXHRyZWdpc3Rlcihub2RlOiBBU1RJbnRlcmZhY2VOb2RlKTogdm9pZCB7XG5cdFx0dGhpcy5zZXQobm9kZS5uYW1lLCBJbnRlcmZhY2VEZWZpbml0aW9uLmZyb21BU1Qobm9kZSkpO1xuXHR9XG5cblx0YWxsKCk6IEl0ZXJhYmxlSXRlcmF0b3I8SW50ZXJmYWNlRGVmaW5pdGlvbj4ge1xuXHRcdHJldHVybiB0aGlzLm1hcC52YWx1ZXMoKTtcblx0fVxuXG5cdHNldChuYW1lOiBzdHJpbmcsIGludGVyZmFjZURlZmluaXRpb246IEludGVyZmFjZURlZmluaXRpb24pOiB2b2lkIHtcblx0XHR0aGlzLm1hcC5zZXQobmFtZSwgaW50ZXJmYWNlRGVmaW5pdGlvbik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEluc3RhbmNlUmVnaXN0cnkge1xuXHRwcml2YXRlIGluc3RhbmNlczogTWFwPHN0cmluZywgSW5zdGFuY2U+ID0gbmV3IE1hcDxzdHJpbmcsIEluc3RhbmNlPigpO1xuXG5cdHJlZ2lzdGVyKGluc3RhbmNlOiBJbnN0YW5jZSk6IHZvaWQge1xuXHRcdHRoaXMuaW5zdGFuY2VzLnNldChpbnN0YW5jZS5pZCwgaW5zdGFuY2UpO1xuXHR9XG5cblx0dW5yZWdpc3RlcihpbnN0YW5jZTogSW5zdGFuY2UpOiB2b2lkIHtcblx0XHR0aGlzLmluc3RhbmNlcy5kZWxldGUoaW5zdGFuY2UuaWQpO1xuXHR9XG5cblx0Z2V0KGlkOiBzdHJpbmcpOiBJbnN0YW5jZSB8IG51bGwge1xuXHRcdHJldHVybiB0aGlzLmluc3RhbmNlcy5nZXQoaWQpIHx8IG51bGw7XG5cdH1cblxuXHRhbGxJbnN0YW5jZXMoKTogSW5zdGFuY2VbXSB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy5pbnN0YW5jZXMudmFsdWVzKCkpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlUmVnaXN0cnkge1xuXHRjbGFzc1N5bWJvbHM6IE1hcDxzdHJpbmcsIENsYXNzU3ltYm9sPiA9IG5ldyBNYXAoKTtcblx0aW50ZXJmYWNlU3ltYm9sczogTWFwPHN0cmluZywgSW50ZXJmYWNlU3ltYm9sPiA9IG5ldyBNYXAoKTtcblxuXHRhbGxDbGFzc1N5bWJvbHMoKTogSXRlcmFibGVJdGVyYXRvcjxDbGFzc1N5bWJvbD4ge1xuXHRcdHJldHVybiB0aGlzLmNsYXNzU3ltYm9scy52YWx1ZXMoKTtcblx0fVxuXG5cdGFsbEludGVyZmFjZVN5bWJvbHMoKTogSXRlcmFibGVJdGVyYXRvcjxJbnRlcmZhY2VTeW1ib2w+IHtcblx0XHRyZXR1cm4gdGhpcy5pbnRlcmZhY2VTeW1ib2xzLnZhbHVlcygpO1xuXHR9XG5cblx0YWRkQ2xhc3NTeW1ib2woc3ltYm9sOiBDbGFzc1N5bWJvbCk6IHZvaWQge1xuXHRcdHRoaXMuY2xhc3NTeW1ib2xzLnNldChzeW1ib2wubmFtZSwgc3ltYm9sKTtcblx0fVxuXG5cdGFkZEludGVyZmFjZVN5bWJvbChzeW1ib2w6IEludGVyZmFjZVN5bWJvbCk6IHZvaWQge1xuXHRcdHRoaXMuaW50ZXJmYWNlU3ltYm9scy5zZXQoc3ltYm9sLm5hbWUsIHN5bWJvbCk7XG5cdH1cblxuXHRoYXNTeW1ib2wobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY2xhc3NTeW1ib2xzLmhhcyhuYW1lKSB8fCB0aGlzLmludGVyZmFjZVN5bWJvbHMuaGFzKG5hbWUpO1xuXHR9XG5cblx0cHVibGljIGdldENsYXNzU3ltYm9sKG5hbWU6IHN0cmluZyk6IENsYXNzU3ltYm9sIHtcblx0XHRjb25zdCBzeW1ib2w6IENsYXNzU3ltYm9sIHwgdW5kZWZpbmVkID0gdGhpcy5jbGFzc1N5bWJvbHMuZ2V0KG5hbWUpO1xuXHRcdGlmIChzeW1ib2wgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFN5bWJvbCAke25hbWV9IG5vdCBmb3VuZC5gKTtcblx0XHR9XG5cdFx0cmV0dXJuIHN5bWJvbDtcblx0fVxuXG5cdHB1YmxpYyBnZXRJbnRlcmFjZVN5bWJvbChuYW1lOiBzdHJpbmcpOiBJbnRlcmZhY2VTeW1ib2wge1xuXHRcdGNvbnN0IHN5bWJvbDogSW50ZXJmYWNlU3ltYm9sIHwgdW5kZWZpbmVkID0gdGhpcy5pbnRlcmZhY2VTeW1ib2xzLmdldChuYW1lKTtcblx0XHRpZiAoc3ltYm9sID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBTeW1ib2wgJHtuYW1lfSBub3QgZm91bmQuYCk7XG5cdFx0fVxuXHRcdHJldHVybiBzeW1ib2w7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE9iamVjdFJlZ2lzdHJ5IHtcblx0cHVibGljIHJlYWRvbmx5IGNsYXNzZXM6IENsYXNzUmVnaXN0cnkgPSBuZXcgQ2xhc3NSZWdpc3RyeSgpO1xuXHRwdWJsaWMgcmVhZG9ubHkgaW50ZXJmYWNlczogSW50ZXJmYWNlUmVnaXN0cnkgPSBuZXcgSW50ZXJmYWNlUmVnaXN0cnkoKTtcblx0cHVibGljIHJlYWRvbmx5IGluc3RhbmNlczogSW5zdGFuY2VSZWdpc3RyeSA9IG5ldyBJbnN0YW5jZVJlZ2lzdHJ5KCk7XG5cdHB1YmxpYyByZWFkb25seSB0eXBlczogVHlwZVJlZ2lzdHJ5ID0gbmV3IFR5cGVSZWdpc3RyeSgpO1xuXG5cdGZldGNoQWxsT2JqZWN0RGVmaW5pdGlvbnMoKTogTWFwPHN0cmluZywgQ2xhc3NEZWZpbml0aW9uIHwgSW50ZXJmYWNlRGVmaW5pdGlvbj4ge1xuXHRcdGNvbnN0IG1hcCA9IG5ldyBNYXAoKTtcblxuXHRcdGZvciAoY29uc3QgY2xhc3NEZWYgb2YgdGhpcy5pbnRlcmZhY2VzLmFsbCgpKSB7XG5cdFx0XHRtYXAuc2V0KGNsYXNzRGVmLm5hbWUsIGNsYXNzRGVmKTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGNsYXNzRGVmIG9mIHRoaXMuY2xhc3Nlcy5hbGwoKSkge1xuXHRcdFx0bWFwLnNldChjbGFzc0RlZi5uYW1lLCBjbGFzc0RlZik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1hcDtcblx0fVxuXG5cdGNvbGxlY3RBbGwoYXN0OiBBU1ROb2RlKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIGFzdC5jaGlsZHJlbikge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RJbnRlcmZhY2VOb2RlKSB7XG5cdFx0XHRcdHRoaXMuaW50ZXJmYWNlcy5yZWdpc3Rlcihub2RlKTtcblx0XHRcdH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIEFTVENsYXNzTm9kZSkge1xuXHRcdFx0XHR0aGlzLmNsYXNzZXMucmVnaXN0ZXIobm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbiIsCiAgICAiaW1wb3J0IHtcblx0QVNUQXJyYXlOb2RlLFxuXHRBU1RCaW5hcnlOb2RlLFxuXHRBU1RDYWxsTm9kZSxcblx0QVNUQ2xhc3NOb2RlLFxuXHRBU1RFeHByZXNzaW9uTm9kZSxcblx0QVNURmllbGROb2RlLFxuXHRBU1RGb3JlYWNoTm9kZSxcblx0QVNUSW5kZXhOb2RlLFxuXHRBU1RJbnRlcmZhY2VOb2RlLFxuXHRBU1RMYW1iZGFOb2RlLFxuXHRBU1RNZW1iZXJOb2RlLFxuXHRBU1RNZXRob2ROb2RlLFxuXHRBU1ROZXdOb2RlLFxuXHRBU1ROb2RlLFxuXHRBU1ROb2RlVHlwZSxcblx0QVNUUGFyYW1ldGVyTm9kZSxcblx0QVNUUmV0dXJuTm9kZSxcblx0QVNUVHlwZU5vZGUsXG5cdEFTVFVuYXJ5Tm9kZSxcblx0QVNUVmFyaWFibGVOb2RlLFxuXHRBU1RWRG9tTm9kZVxufSBmcm9tICcuLi9hc3QudHMnO1xuaW1wb3J0IHtcblx0YnVpbGRUeXBlU3Vic3RpdHV0aW9uTWFwLFxuXHRDbGFzc1JlZlR5cGUsXG5cdENsYXNzU3ltYm9sLFxuXHRGaWVsZFN5bWJvbCxcblx0SW50ZXJmYWNlUmVmVHlwZSxcblx0SW50ZXJmYWNlU3ltYm9sLFxuXHRMYW1iZGFUeXBlLFxuXHRNZXRob2RTeW1ib2wsXG5cdE1peGVkVHlwZSxcblx0TnVsbGFibGVUeXBlLFxuXHRQYXJhbWV0ZXJTeW1ib2wsXG5cdFByaW1pdGl2ZUNsYXNzVHlwZXMsXG5cdHN1YnN0aXR1dGVUeXBlLFxuXHRUeXBlLFxuXHRUeXBlUGFyYW1ldGVyU3ltYm9sLFxuXHRUeXBlcyxcblx0VHlwZVNjb3BlLFxuXHRUeXBlVmFyaWFibGUsXG5cdHdyYXBUeXBlXG59IGZyb20gXCIuL3R5cGVfb2JqZWN0c1wiO1xuaW1wb3J0IHtBdXRvYm94aW5nfSBmcm9tIFwiLi9hdXRvYm94aW5nXCI7XG5pbXBvcnQge05hdGl2ZUZ1bmN0aW9uLCBOYXRpdmVGdW5jdGlvbnN9IGZyb20gXCIuLi8uLi9saWJyYXJ5L25hdGl2ZV9mdW5jdGlvbnNcIjtcbmltcG9ydCB7R1JBTU1BUn0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcbmltcG9ydCB7dGhyb3dUeXBlRXJyb3J9IGZyb20gXCIuLi9lcnJvcnMudHNcIlxuaW1wb3J0IHtDbGFzc0RlZmluaXRpb24sIEludGVyZmFjZURlZmluaXRpb259IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcblxuXG5jb25zdCBnbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeSA9IG5ldyBOYXRpdmVGdW5jdGlvbnMoKVxuXHQuZ2V0R2xvYmFsRnVuY3Rpb25UeXBlUmVnaXN0cnkoKTtcblxuZXhwb3J0IGNsYXNzIFN0YXRlbWVudFJlc3VsdCB7XG5cdGRpZFJldHVybjogYm9vbGVhbjtcblx0cmV0dXJuVHlwZTogVHlwZSB8IG51bGw7XG5cblx0Y29uc3RydWN0b3IoZGlkUmV0dXJuOiBib29sZWFuLCByZXR1cm5UeXBlOiBUeXBlIHwgbnVsbCkge1xuXHRcdHRoaXMuZGlkUmV0dXJuID0gZGlkUmV0dXJuO1xuXHRcdHRoaXMucmV0dXJuVHlwZSA9IHJldHVyblR5cGU7XG5cdH1cblxuXHRzdGF0aWMgd2l0aFJldHVybihyZXR1cm5UeXBlOiBUeXBlKTogU3RhdGVtZW50UmVzdWx0IHtcblx0XHRyZXR1cm4gbmV3IFN0YXRlbWVudFJlc3VsdCh0cnVlLCByZXR1cm5UeXBlKTtcblx0fVxuXG5cdHN0YXRpYyBub1JldHVybigpOiBTdGF0ZW1lbnRSZXN1bHQge1xuXHRcdHJldHVybiBuZXcgU3RhdGVtZW50UmVzdWx0KGZhbHNlLCBudWxsKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVHlwZUNoZWNrZXIge1xuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cblx0Y29uc3RydWN0b3Iob2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KSB7XG5cdFx0dGhpcy5vYmplY3RSZWdpc3RyeSA9IG9iamVjdFJlZ2lzdHJ5O1xuXHR9XG5cblx0Y29sbGVjdEFsbFN5bWJvbHNGcm9tTm9kZShhc3Q6IEFTVE5vZGUpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgYXN0LmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEludGVyZmFjZU5vZGUpIHtcblx0XHRcdFx0dGhpcy5yZWdpc3RlckludGVyZmFjZVN5bWJvbChub2RlKVxuXHRcdFx0fSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgQVNUQ2xhc3NOb2RlKSB7XG5cdFx0XHRcdHRoaXMucmVnaXN0ZXJDbGFzc1N5bWJvbChub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjb2xsZWN0QWxsU3ltYm9sc0Zyb21SZWdpc3RyeShvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpOiB2b2lkIHtcblx0XHRjb25zdCBvYmplY3REZWZpbml0aW9uczogTWFwSXRlcmF0b3I8Q2xhc3NEZWZpbml0aW9uIHwgSW50ZXJmYWNlRGVmaW5pdGlvbj4gPSBvYmplY3RSZWdpc3RyeVxuXHRcdFx0LmZldGNoQWxsT2JqZWN0RGVmaW5pdGlvbnMoKVxuXHRcdFx0LnZhbHVlcygpO1xuXG5cdFx0Zm9yIChsZXQgb2JqZWN0RGVmIG9mIG9iamVjdERlZmluaXRpb25zKSB7XG5cdFx0XHRpZiAob2JqZWN0RGVmIGluc3RhbmNlb2YgSW50ZXJmYWNlRGVmaW5pdGlvbikge1xuXHRcdFx0XHR0aGlzLnJlZ2lzdGVySW50ZXJmYWNlU3ltYm9sKG9iamVjdERlZi5ub2RlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucmVnaXN0ZXJDbGFzc1N5bWJvbChvYmplY3REZWYubm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y2hlY2soYXN0OiBBU1ROb2RlKTogdm9pZCB7XG5cdFx0dGhpcy5jb2xsZWN0QWxsU3ltYm9sc0Zyb21Ob2RlKGFzdCk7XG5cdFx0dGhpcy52YWxpZGF0ZUluaGVyaXRhbmNlKCk7XG5cdFx0dGhpcy5jaGVja1Byb2dyYW0oYXN0KTtcblx0XHR0aGlzLmNoZWNrSW50ZXJmYWNlQm9kaWVzKCk7XG5cdFx0dGhpcy5jaGVja0NsYXNzZXNCb2RpZXMoKTtcblx0XHR0aGlzLmNoZWNrQ2xhc3Nlc0ltcGxlbWVudHMoKTtcblx0fVxuXG5cdHByaXZhdGUgdmFsaWRhdGVJbmhlcml0YW5jZSgpIHtcblx0XHRmb3IgKGNvbnN0IGNsYXNzU3ltYm9sIG9mIHRoaXMub2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5hbGwoKSkge1xuXHRcdFx0aWYgKGNsYXNzU3ltYm9sLnN1cGVyQ2xhc3MgJiYgIXRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKGNsYXNzU3ltYm9sLnN1cGVyQ2xhc3MpKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBVbmtub3duIHN1cGVyY2xhc3MgJHtjbGFzc1N5bWJvbC5zdXBlckNsYXNzfWAsIGNsYXNzU3ltYm9sLm5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tQcm9ncmFtKGFzdDogQVNUTm9kZSk6IHZvaWQge1xuXHRcdGNvbnN0IHNjb3BlID0gbmV3IFR5cGVTY29wZSgpO1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdHRoaXMuY2hlY2tTdGF0ZW1lbnQobm9kZSwgc2NvcGUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tDbGFzc2VzQm9kaWVzKCk6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qgb2JqZWN0U3ltYm9sIG9mIHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuYWxsQ2xhc3NTeW1ib2xzKCkpIHtcblx0XHRcdGNvbnN0IGluc3RhbmNlU2NvcGUgPSBuZXcgVHlwZVNjb3BlKCk7XG5cdFx0XHRpbnN0YW5jZVNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgPSBvYmplY3RTeW1ib2w7XG5cblx0XHRcdG9iamVjdFN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5mb3JFYWNoKHR5cGVQYXJhbWV0ZXIgPT4ge1xuXHRcdFx0XHRpbnN0YW5jZVNjb3BlLmRlZmluZVR5cGVCaW5kaW5nKFxuXHRcdFx0XHRcdHR5cGVQYXJhbWV0ZXIubmFtZSxcblx0XHRcdFx0XHRuZXcgVHlwZVZhcmlhYmxlKHR5cGVQYXJhbWV0ZXIubmFtZSlcblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAob2JqZWN0U3ltYm9sLmNvbnN0cnVjdG9yTWV0aG9kU3ltYm9sKSB7XG5cdFx0XHRcdGNvbnN0IGNvbnN0cnVjdG9yU3ltYm9sID0gb2JqZWN0U3ltYm9sLmNvbnN0cnVjdG9yTWV0aG9kU3ltYm9sO1xuXHRcdFx0XHRjb25zdCBjb25zdHJ1Y3RvclNjb3BlID0gbmV3IFR5cGVTY29wZShpbnN0YW5jZVNjb3BlKTtcblxuXHRcdFx0XHRvYmplY3RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMuZm9yRWFjaCh0eXBlUGFyYW1ldGVyU3ltYm9sID0+IHtcblx0XHRcdFx0XHRjb25zdHJ1Y3RvclNjb3BlLmRlZmluZVR5cGVCaW5kaW5nKFxuXHRcdFx0XHRcdFx0dHlwZVBhcmFtZXRlclN5bWJvbC5uYW1lLFxuXHRcdFx0XHRcdFx0bmV3IFR5cGVWYXJpYWJsZSh0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Zm9yIChjb25zdCBwYXJhbWV0ZXJTeW1ib2wgb2YgY29uc3RydWN0b3JTeW1ib2wucGFyYW1ldGVyU3ltYm9scykge1xuXHRcdFx0XHRcdGNvbnN0cnVjdG9yU2NvcGUuZGVmaW5lVHlwZShwYXJhbWV0ZXJTeW1ib2wubmFtZSwgcGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5jaGVja0JvZHkoY29uc3RydWN0b3JTeW1ib2wuYm9keSwgY29uc3RydWN0b3JTY29wZSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoY29uc3QgbWV0aG9kU3ltYm9sIG9mIG9iamVjdFN5bWJvbC5pbnN0YW5jZU1ldGhvZFN5bWJvbHMudmFsdWVzKCkpIHtcblx0XHRcdFx0Y29uc3QgbWV0aG9kU2NvcGUgPSBuZXcgVHlwZVNjb3BlKGluc3RhbmNlU2NvcGUpO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5mb3JFYWNoKHR5cGVQYXJhbWV0ZXJTeW1ib2wgPT4ge1xuXHRcdFx0XHRcdG1ldGhvZFNjb3BlLmRlZmluZVR5cGVCaW5kaW5nKFxuXHRcdFx0XHRcdFx0dHlwZVBhcmFtZXRlclN5bWJvbC5uYW1lLFxuXHRcdFx0XHRcdFx0bmV3IFR5cGVWYXJpYWJsZSh0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Zm9yIChjb25zdCBwYXJhbWV0ZXJTeW1ib2wgb2YgbWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMpIHtcblx0XHRcdFx0XHRtZXRob2RTY29wZS5kZWZpbmVUeXBlKHBhcmFtZXRlclN5bWJvbC5uYW1lLCBwYXJhbWV0ZXJTeW1ib2wucGFyYW1ldGVyVHlwZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBoYXNCb2R5ID0gbWV0aG9kU3ltYm9sLmJvZHkgJiYgbWV0aG9kU3ltYm9sLmJvZHkubGVuZ3RoID4gMDtcblx0XHRcdFx0aWYgKGhhc0JvZHkpIHtcblx0XHRcdFx0XHRjb25zdCBhY3R1YWwgPSB0aGlzLmNoZWNrQm9keShtZXRob2RTeW1ib2wuYm9keSwgbWV0aG9kU2NvcGUpO1xuXHRcdFx0XHRcdHRoaXMuY2hlY2tSZXR1cm5UeXBlKG1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlLCBhY3R1YWwsIG1ldGhvZFN5bWJvbC5ub2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGNvbnN0IG1ldGhvZFN5bWJvbCBvZiBvYmplY3RTeW1ib2wuc3RhdGljTWV0aG9kU3ltYm9scy52YWx1ZXMoKSkge1xuXHRcdFx0XHRjb25zdCBzdGF0aWNTY29wZSA9IG5ldyBUeXBlU2NvcGUoaW5zdGFuY2VTY29wZSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmZvckVhY2godHlwZVBhcmFtZXRlclN5bWJvbCA9PiB7XG5cdFx0XHRcdFx0c3RhdGljU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcoXG5cdFx0XHRcdFx0XHR0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUsXG5cdFx0XHRcdFx0XHRuZXcgVHlwZVZhcmlhYmxlKHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRmb3IgKGNvbnN0IHBhcmFtZXRlclN5bWJvbCBvZiBtZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9scykge1xuXHRcdFx0XHRcdHN0YXRpY1Njb3BlLmRlZmluZVR5cGUocGFyYW1ldGVyU3ltYm9sLm5hbWUsIHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGhhc0JvZHkgPSBtZXRob2RTeW1ib2wuYm9keSAmJiBtZXRob2RTeW1ib2wuYm9keS5sZW5ndGggPiAwO1xuXHRcdFx0XHRpZiAoaGFzQm9keSkge1xuXHRcdFx0XHRcdGNvbnN0IGFjdHVhbCA9IHRoaXMuY2hlY2tCb2R5KG1ldGhvZFN5bWJvbC5ib2R5LCBzdGF0aWNTY29wZSk7XG5cdFx0XHRcdFx0dGhpcy5jaGVja1JldHVyblR5cGUobWV0aG9kU3ltYm9sLnJldHVyblR5cGUsIGFjdHVhbCwgbWV0aG9kU3ltYm9sLm5vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0ludGVyZmFjZUJvZGllcygpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IG9iamVjdFN5bWJvbCBvZiB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmFsbEludGVyZmFjZVN5bWJvbHMoKSkge1xuXHRcdFx0Y29uc3QgaW5zdGFuY2VTY29wZSA9IG5ldyBUeXBlU2NvcGUoKTtcblx0XHRcdGluc3RhbmNlU2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCA9IG9iamVjdFN5bWJvbDtcblxuXHRcdFx0b2JqZWN0U3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmZvckVhY2godHlwZVBhcmFtZXRlciA9PiB7XG5cdFx0XHRcdGluc3RhbmNlU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcoXG5cdFx0XHRcdFx0dHlwZVBhcmFtZXRlci5uYW1lLFxuXHRcdFx0XHRcdG5ldyBUeXBlVmFyaWFibGUodHlwZVBhcmFtZXRlci5uYW1lKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGZvciAoY29uc3QgbWV0aG9kU3ltYm9sIG9mIG9iamVjdFN5bWJvbC5pbnN0YW5jZU1ldGhvZFN5bWJvbHMudmFsdWVzKCkpIHtcblx0XHRcdFx0Y29uc3QgbWV0aG9kU2NvcGUgPSBuZXcgVHlwZVNjb3BlKGluc3RhbmNlU2NvcGUpO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5mb3JFYWNoKHR5cGVQYXJhbWV0ZXJTeW1ib2wgPT4ge1xuXHRcdFx0XHRcdG1ldGhvZFNjb3BlLmRlZmluZVR5cGVCaW5kaW5nKFxuXHRcdFx0XHRcdFx0dHlwZVBhcmFtZXRlclN5bWJvbC5uYW1lLFxuXHRcdFx0XHRcdFx0bmV3IFR5cGVWYXJpYWJsZSh0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Zm9yIChjb25zdCBwYXJhbWV0ZXJTeW1ib2wgb2YgbWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMpIHtcblx0XHRcdFx0XHRtZXRob2RTY29wZS5kZWZpbmVUeXBlKHBhcmFtZXRlclN5bWJvbC5uYW1lLCBwYXJhbWV0ZXJTeW1ib2wucGFyYW1ldGVyVHlwZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBoYXNCb2R5ID0gbWV0aG9kU3ltYm9sLmJvZHkgJiYgbWV0aG9kU3ltYm9sLmJvZHkubGVuZ3RoID4gMDtcblx0XHRcdFx0aWYgKGhhc0JvZHkpIHtcblx0XHRcdFx0XHRjb25zdCBhY3R1YWwgPSB0aGlzLmNoZWNrQm9keShtZXRob2RTeW1ib2wuYm9keSwgbWV0aG9kU2NvcGUpO1xuXHRcdFx0XHRcdHRoaXMuY2hlY2tSZXR1cm5UeXBlKG1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlLCBhY3R1YWwsIG1ldGhvZFN5bWJvbC5ub2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tDbGFzc2VzSW1wbGVtZW50cygpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IGNsYXNzU3ltYm9sIG9mIHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuYWxsQ2xhc3NTeW1ib2xzKCkpIHtcblx0XHRcdGZvciAoY29uc3QgaW50ZXJmYWNlUmVmVHlwZSBvZiBjbGFzc1N5bWJvbC5pbXBsZW1lbnRzSW50ZXJmYWNlcykge1xuXHRcdFx0XHR0aGlzLmNoZWNrSW1wbGVtZW50c0ludGVyZmFjZShjbGFzc1N5bWJvbCwgaW50ZXJmYWNlUmVmVHlwZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0ltcGxlbWVudHNJbnRlcmZhY2UoY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sLCBpbnRlcmZhY2VSZWZUeXBlOiBJbnRlcmZhY2VSZWZUeXBlKTogdm9pZCB7XG5cdFx0Y29uc3QgaW50ZXJmYWNlU3ltYm9sID0gaW50ZXJmYWNlUmVmVHlwZS5pbnRlcmZhY2VTeW1ib2w7XG5cblx0XHRjb25zdCBzdWJzdGl0dXRpb25NYXAgPSBidWlsZFR5cGVTdWJzdGl0dXRpb25NYXAoXG5cdFx0XHRpbnRlcmZhY2VTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMsXG5cdFx0XHRpbnRlcmZhY2VSZWZUeXBlLnR5cGVBcmd1bWVudHNcblx0XHQpO1xuXG5cdFx0Zm9yIChjb25zdCBpbnRlcmZhY2VNZXRob2RTeW1ib2wgb2YgaW50ZXJmYWNlU3ltYm9sLmluc3RhbmNlTWV0aG9kU3ltYm9scy52YWx1ZXMoKSkge1xuXHRcdFx0Y29uc3QgY2xhc3NNZXRob2RTeW1ib2wgPSB0aGlzLnJlc29sdmVJbnN0YW5jZU1ldGhvZGUoXG5cdFx0XHRcdGNsYXNzU3ltYm9sLFxuXHRcdFx0XHRpbnRlcmZhY2VNZXRob2RTeW1ib2wubmFtZVxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKCFjbGFzc01ldGhvZFN5bWJvbCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihcblx0XHRcdFx0XHRgQ2xhc3MgJHtjbGFzc1N5bWJvbC5uYW1lfSBkb2VzIG5vdCBpbXBsZW1lbnQgbWV0aG9kICR7aW50ZXJmYWNlTWV0aG9kU3ltYm9sLm5hbWV9IGZyb20gaW50ZXJmYWNlICR7aW50ZXJmYWNlU3ltYm9sLm5hbWV9YCxcblx0XHRcdFx0XHRjbGFzc1N5bWJvbC5ub2RlXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuY2hlY2tNZXRob2RDb21wYXRpYmlsaXR5KFxuXHRcdFx0XHRjbGFzc01ldGhvZFN5bWJvbCxcblx0XHRcdFx0aW50ZXJmYWNlTWV0aG9kU3ltYm9sLFxuXHRcdFx0XHRzdWJzdGl0dXRpb25NYXBcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja01ldGhvZENvbXBhdGliaWxpdHkoY2xhc3NNZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCwgaW50ZXJmYWNlTWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wsIHN1YnN0aXR1dGlvbk1hcDogTWFwPHN0cmluZywgVHlwZT4pOiB2b2lkIHtcblx0XHRpZiAoY2xhc3NNZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9scy5sZW5ndGggIT09IGludGVyZmFjZU1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYE1ldGhvZCAke2NsYXNzTWV0aG9kU3ltYm9sLm5hbWV9IGhhcyB3cm9uZyBwYXJhbWV0ZXIgY291bnRgKTtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGludGVyZmFjZU1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBwYXJhbWV0ZXJTeW1ib2w6IFBhcmFtZXRlclN5bWJvbCB8IG51bGwgPSBpbnRlcmZhY2VNZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9sc1tpXSB8fCBudWxsO1xuXG5cdFx0XHRpZiAoIXBhcmFtZXRlclN5bWJvbCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgTWV0aG9kICR7Y2xhc3NNZXRob2RTeW1ib2wubmFtZX0gaGFzIHRvbyBtYW55IHBhcmFtZXRlcnNgKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGV4cGVjdGVkVHlwZTogVHlwZSA9IHN1YnN0aXR1dGVUeXBlKHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlLCBzdWJzdGl0dXRpb25NYXApO1xuXG5cdFx0XHRjb25zdCBhY3R1YWxUeXBlOiBUeXBlID0gcGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGU7XG5cblx0XHRcdGlmICghZXhwZWN0ZWRUeXBlLmFjY2VwdHMoYWN0dWFsVHlwZSkpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYFBhcmFtZXRlciAke2kgKyAxfSBvZiAke2NsYXNzTWV0aG9kU3ltYm9sLm5hbWV9IGluY29tcGF0aWJsZSB3aXRoIGludGVyZmFjZWApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IGV4cGVjdGVkUmV0dXJuOiBUeXBlID0gc3Vic3RpdHV0ZVR5cGUoaW50ZXJmYWNlTWV0aG9kU3ltYm9sLnJldHVyblR5cGUsIHN1YnN0aXR1dGlvbk1hcCk7XG5cblx0XHRpZiAoIWV4cGVjdGVkUmV0dXJuLmFjY2VwdHMoY2xhc3NNZXRob2RTeW1ib2wucmV0dXJuVHlwZSkpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBSZXR1cm4gdHlwZSBvZiAke2NsYXNzTWV0aG9kU3ltYm9sLm5hbWV9IGluY29tcGF0aWJsZSB3aXRoIGludGVyZmFjZWApO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tTdGF0ZW1lbnQobm9kZTogQVNUTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFN0YXRlbWVudFJlc3VsdCB7XG5cdFx0c3dpdGNoIChub2RlLnR5cGUpIHtcblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuUkVUVVJOOlxuXHRcdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVFJldHVybk5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gU3RhdGVtZW50UmVzdWx0LndpdGhSZXR1cm4oXG5cdFx0XHRcdFx0XHR0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLmFyZ3VtZW50LCBzY29wZSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5WQVJJQUJMRTpcblx0XHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RWYXJpYWJsZU5vZGUpIHtcblx0XHRcdFx0XHR0aGlzLmNoZWNrVmFyaWFibGUobm9kZSwgc2NvcGUpO1xuXHRcdFx0XHRcdHJldHVybiBTdGF0ZW1lbnRSZXN1bHQubm9SZXR1cm4oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuRk9SRUFDSDpcblx0XHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RGb3JlYWNoTm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiBTdGF0ZW1lbnRSZXN1bHQud2l0aFJldHVybihcblx0XHRcdFx0XHRcdHRoaXMuY2hlY2tGb3JlYWNoKG5vZGUsIHNjb3BlKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkVYUFJFU1NJT046XG5cdFx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNURXhwcmVzc2lvbk5vZGUpIHtcblx0XHRcdFx0XHR0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLmV4cHIsIHNjb3BlKTtcblx0XHRcdFx0XHRyZXR1cm4gU3RhdGVtZW50UmVzdWx0Lm5vUmV0dXJuKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFN0YXRlbWVudFJlc3VsdC5ub1JldHVybigpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1ZhcmlhYmxlKG5vZGU6IEFTVFZhcmlhYmxlTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IHZvaWQge1xuXHRcdGNvbnN0IGRlY2xhcmVkVHlwZTogVHlwZSB8IG51bGwgPSBub2RlLnR5cGVBbm5vdGF0aW9uXG5cdFx0XHQ/IHRoaXMud3JhcFR5cGUobm9kZS50eXBlQW5ub3RhdGlvbiwgc2NvcGUpXG5cdFx0XHQ6IG51bGw7XG5cblx0XHRjb25zdCBhY3R1YWxUeXBlOiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5pbml0LCBzY29wZSwgZGVjbGFyZWRUeXBlKTtcblxuXHRcdGlmIChkZWNsYXJlZFR5cGUgJiYgIWRlY2xhcmVkVHlwZS5hY2NlcHRzKGFjdHVhbFR5cGUpKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgVHlwZSBtaXNtYXRjaDogJHtkZWNsYXJlZFR5cGV9IDw+ICR7YWN0dWFsVHlwZX1gLCBub2RlKTtcblx0XHR9XG5cblx0XHRzY29wZS5kZWZpbmVUeXBlKG5vZGUubmFtZSwgZGVjbGFyZWRUeXBlID8/IGFjdHVhbFR5cGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0ZvcmVhY2gobm9kZTogQVNURm9yZWFjaE5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRsZXQgaXRlcmFibGVUeXBlOiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5pdGVyYWJsZSwgc2NvcGUpO1xuXG5cdFx0aXRlcmFibGVUeXBlID0gQXV0b2JveGluZy5hdXRvYm94SWZOZWVkZWQoaXRlcmFibGVUeXBlLCB0aGlzLm9iamVjdFJlZ2lzdHJ5KTtcblxuXHRcdGlmIChpdGVyYWJsZVR5cGUgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUgJiYgaXRlcmFibGVUeXBlLmNsYXNzU3ltYm9sLm5hbWUgPT09ICdBcnJheScpIHtcblx0XHRcdGlmIChpdGVyYWJsZVR5cGUudHlwZUFyZ3VtZW50cy5sZW5ndGggIT09IDEpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoJ0FycmF5IGluIGZvcmVhY2ggbXVzc3QgaGF2ZSBleGFjdGx5IG9uZSB0eXBlIGFyZ3VtZW50LicsIG5vZGUuaXRlcmFibGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBlbGVtZW50VHlwZTogVHlwZSB8IG51bGwgPSBpdGVyYWJsZVR5cGUudHlwZUFyZ3VtZW50c1swXSB8fCBudWxsO1xuXG5cdFx0XHRpZiAoZWxlbWVudFR5cGUgPT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoJ0FycmF5IGluIGZvcmVhY2ggbXVzdCBoYXZlIGV4YWN0bHkgb25lIHR5cGUgYXJndW1lbnQuJywgbm9kZS5pdGVyYWJsZSk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGxvb3BTY29wZSA9IG5ldyBUeXBlU2NvcGUoc2NvcGUpO1xuXHRcdFx0bG9vcFNjb3BlLmRlZmluZVR5cGUobm9kZS5pdGVyYXRvciwgZWxlbWVudFR5cGUpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy5jaGVja0JvZHkobm9kZS5ib2R5LCBsb29wU2NvcGUpO1xuXG5cdFx0fVxuXG5cdFx0dGhpcy50eXBlRXJyb3IoYGZvcmVhY2ggZXhwZWN0cyBBcnJheTxUPiwgZ290ICR7aXRlcmFibGVUeXBlLnRvU3RyaW5nKCl9YCwgbm9kZS5pdGVyYWJsZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrRXhwcmVzc2lvbihleHByOiBBU1ROb2RlIHwgbnVsbCwgc2NvcGU6IFR5cGVTY29wZSwgZXhwZWN0ZWRUeXBlOiBUeXBlIHwgbnVsbCA9IG51bGwpOiBUeXBlIHtcblx0XHRpZiAoZXhwciA9PT0gbnVsbCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoJ0V4cHJlc3Npb24gZXhwZWN0ZWQsIGdvdCBudWxsLicsIGV4cHIpO1xuXHRcdH1cblxuXHRcdHN3aXRjaCAoZXhwci50eXBlKSB7XG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLk5VTUJFUjpcblx0XHRcdFx0cmV0dXJuIFR5cGVzLk5VTUJFUjtcblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5TVFJJTkc6XG5cdFx0XHRcdHJldHVybiBUeXBlcy5TVFJJTkc7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuQk9PTEVBTjpcblx0XHRcdFx0cmV0dXJuIFR5cGVzLkJPT0xFQU47XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuTlVMTDpcblx0XHRcdFx0cmV0dXJuIFR5cGVzLk5VTEw7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuVkRPTToge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVFZEb21Ob2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tWRG9tTm9kZShleHByKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5BUlJBWToge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVEFycmF5Tm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrQXJyYXlFeHByZXNzaW9uKGV4cHIsIHNjb3BlLCBleHBlY3RlZFR5cGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLklOREVYOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUSW5kZXhOb2RlKSB7XG5cdFx0XHRcdFx0Y29uc3Qgb2JqZWN0VHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKGV4cHIub2JqZWN0LCBzY29wZSk7XG5cdFx0XHRcdFx0Y29uc3QgaW5kZXggPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihleHByLmluZGV4LCBzY29wZSk7XG5cblx0XHRcdFx0XHRpZiAob2JqZWN0VHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG9iamVjdFR5cGUudHlwZUFyZ3VtZW50c1swXSB8fCBUeXBlcy5NSVhFRDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGluZGV4ICR7b2JqZWN0VHlwZS5uYW1lfSB3aXRoICR7aW5kZXgubmFtZX1gLCBleHByKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5VTkFSWToge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVFVuYXJ5Tm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrVW5hcnlFeHByZXNzaW9uKGV4cHIsIHNjb3BlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5NRU1CRVI6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RNZW1iZXJOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tNZW1iZXJFeHByZXNzaW9uKGV4cHIsIHNjb3BlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5USElTOiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrVGhpc0V4cHJlc3Npb24oZXhwciwgc2NvcGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLklERU5USUZJRVI6XG5cdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrSWRlbnRpZmllckV4cHJlc3Npb24oZXhwciwgc2NvcGUpO1xuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLk5FVzoge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVE5ld05vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja05ld0V4cHJlc3Npb24oZXhwciwgc2NvcGUsIGV4cGVjdGVkVHlwZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuQklOQVJZOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQmluYXJ5Tm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrQmluYXJ5RXhwcmVzc2lvbihleHByLCBzY29wZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuTEFNQkRBOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTGFtYmRhTm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrTGFtYmRhRXhwcmVzc2lvbihleHByLCBzY29wZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuQ0FMTDoge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVENhbGxOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tDYWxsRXhwcmVzc2lvbihleHByLCBzY29wZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFR5cGVzLk1JWEVEO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0JpbmFyeUV4cHJlc3Npb24oZXhwcjogQVNUQmluYXJ5Tm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGNvbnN0IGxlZnQ6IFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihleHByLmxlZnQsIHNjb3BlKTtcblx0XHRjb25zdCByaWdodDogVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKGV4cHIucmlnaHQsIHNjb3BlKTtcblx0XHRjb25zdCBvcDogc3RyaW5nID0gZXhwci5vcGVyYXRvcjtcblxuXHRcdGlmIChHUkFNTUFSLkFSSVRITUVUSUMuaW5jbHVkZXMob3ApKSB7XG5cdFx0XHRpZiAobGVmdC5hY2NlcHRzKFR5cGVzLk5VTUJFUikgJiYgcmlnaHQuYWNjZXB0cyhUeXBlcy5OVU1CRVIpKSB7XG5cdFx0XHRcdHJldHVybiBUeXBlcy5OVU1CRVI7XG5cdFx0XHR9XG5cdFx0XHRpZiAobGVmdC5hY2NlcHRzKFR5cGVzLlNUUklORykgfHwgcmlnaHQuYWNjZXB0cyhUeXBlcy5TVFJJTkcpKSB7XG5cdFx0XHRcdHJldHVybiBUeXBlcy5TVFJJTkc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQXJpdGhtZXRpYyBvcGVyYXRvciAnJHtvcH0nIHJlcXVpcmVzIG51bWJlcnNgLCBleHByKTtcblx0XHR9XG5cblx0XHRpZiAoR1JBTU1BUi5DT01QQVJJU09OLmluY2x1ZGVzKG9wKSkge1xuXHRcdFx0aWYgKGxlZnQuYWNjZXB0cyhUeXBlcy5OVU1CRVIpICYmIHJpZ2h0LmFjY2VwdHMoVHlwZXMuTlVNQkVSKSkge1xuXHRcdFx0XHRyZXR1cm4gVHlwZXMuQk9PTEVBTjtcblx0XHRcdH1cblx0XHRcdHRoaXMudHlwZUVycm9yKGBDb21wYXJpc29uICcke29wfScgcmVxdWlyZXMgbnVtYmVyc2AsIGV4cHIpO1xuXHRcdH1cblxuXHRcdGlmIChHUkFNTUFSLkVRVUFMSVRZLmluY2x1ZGVzKG9wKSkge1xuXHRcdFx0aWYgKGxlZnQuYWNjZXB0cyhyaWdodCkpIHtcblx0XHRcdFx0cmV0dXJuIFR5cGVzLkJPT0xFQU47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNvbXBhcmUgJHtsZWZ0Lm5hbWV9IHdpdGggJHtyaWdodC5uYW1lfWAsIGV4cHIpO1xuXHRcdH1cblxuXHRcdGlmIChHUkFNTUFSLkxPR0lDQUwuaW5jbHVkZXMob3ApKSB7XG5cdFx0XHRpZiAobGVmdC5hY2NlcHRzKFR5cGVzLkJPT0xFQU4pICYmIHJpZ2h0LmFjY2VwdHMoVHlwZXMuQk9PTEVBTikpIHtcblx0XHRcdFx0cmV0dXJuIFR5cGVzLkJPT0xFQU47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgTG9naWNhbCBvcGVyYXRvciAnJHtvcH0nIHJlcXVpcmVzIGJvb2xlYW5zYCwgZXhwcik7XG5cdFx0fVxuXG5cdFx0dGhpcy50eXBlRXJyb3IoYEludmFsaWQgYmluYXJ5IG9wZXJhdGlvbmAsIGV4cHIpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0ZpZWxkQWNjZXNzKG5vZGU6IEFTVE1lbWJlck5vZGUsIGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCwgZmllbGRTeW1ib2w6IEZpZWxkU3ltYm9sLCBzY29wZTogVHlwZVNjb3BlKTogdm9pZCB7XG5cdFx0aWYgKGZpZWxkU3ltYm9sLmlzUHVibGljKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCFzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGFjY2VzcyBwcml2YXRlIG1lbWJlciAke25vZGUucHJvcGVydHl9IG9mICR7Y2xhc3NTeW1ib2wubmFtZX1gLCBub2RlKTtcblx0XHR9XG5cblx0XHRpZiAoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCAhPT0gZmllbGRTeW1ib2wub3duZXIpIHtcblx0XHRcdGlmIChzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sIGluc3RhbmNlb2YgQ2xhc3NTeW1ib2xcblx0XHRcdFx0JiYgc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbC5zdXBlckNsYXNzU3ltYm9sICE9PSBmaWVsZFN5bWJvbC5vd25lcikge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGFjY2VzcyBwcml2YXRlIG1lbWJlciAke25vZGUucHJvcGVydHl9IG9mICR7Y2xhc3NTeW1ib2wubmFtZX1gLCBub2RlKTtcblxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tJbnN0YW5jZU1ldGhvZEFjY2Vzcyhub2RlOiBBU1RNZW1iZXJOb2RlLCBjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wsIG1ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sLCBzY29wZTogVHlwZVNjb3BlKTogdm9pZCB7XG5cdFx0aWYgKG1ldGhvZFN5bWJvbC5pc1B1YmxpYykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICghc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBhY2Nlc3MgcHJpdmF0ZSBtZXRob2QgJHtub2RlLnByb3BlcnR5fSBvZiAke2NsYXNzU3ltYm9sLm5hbWV9YCwgbm9kZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgIT09IG1ldGhvZFN5bWJvbC5vd25lcikge1xuXHRcdFx0aWYgKHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgaW5zdGFuY2VvZiBDbGFzc1N5bWJvbFxuXHRcdFx0XHQmJiBzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sLnN1cGVyQ2xhc3NTeW1ib2wgIT09IG1ldGhvZFN5bWJvbC5vd25lcikge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGFjY2VzcyBwcml2YXRlIG1ldGhvZCAke25vZGUucHJvcGVydHl9IG9mICR7Y2xhc3NTeW1ib2wubmFtZX1gLCBub2RlKTtcblxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tTdGF0aWNNZXRob2RBY2Nlc3MoY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sLCBtZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCwgc2NvcGU6IFR5cGVTY29wZSk6IHZvaWQge1xuXHRcdGlmICghbWV0aG9kU3ltYm9sLmlzU3RhdGljKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNhbGwgaW5zdGFuY2UgbWV0aG9kICR7Y2xhc3NTeW1ib2wubmFtZX0uJHttZXRob2RTeW1ib2wubmFtZX0gYXMgc3RhdGljIG1ldGhvZGApO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChtZXRob2RTeW1ib2wuaXNQdWJsaWMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIXNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgYWNjZXNzIHByaXZhdGUgbWV0aG9kICR7bWV0aG9kU3ltYm9sLm5hbWV9IG9mICR7Y2xhc3NTeW1ib2wubmFtZX1gLFxuXHRcdFx0ICAgICAgICAgICAgICAgbWV0aG9kU3ltYm9sLm5vZGUpO1xuXHRcdH1cblxuXHRcdGlmIChzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sICE9PSBtZXRob2RTeW1ib2wub3duZXIpIHtcblx0XHRcdGlmIChzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sIGluc3RhbmNlb2YgQ2xhc3NTeW1ib2xcblx0XHRcdFx0JiYgc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbC5zdXBlckNsYXNzU3ltYm9sICE9PSBtZXRob2RTeW1ib2wub3duZXIpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBhY2Nlc3MgcHJpdmF0ZSBtZXRob2QgJHttZXRob2RTeW1ib2wubmFtZX0gb2YgJHtjbGFzc1N5bWJvbC5uYW1lfWAsXG5cdFx0XHRcdCAgICAgICAgICAgICAgIG1ldGhvZFN5bWJvbC5ub2RlKTtcblxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tNZW1iZXJFeHByZXNzaW9uKG5vZGU6IEFTVE1lbWJlck5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRjb25zdCBvYmplY3RUeXBlOiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5vYmplY3QsIHNjb3BlKTtcblxuXHRcdGlmIChvYmplY3RUeXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0XHRjb25zdCBjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wgPSBvYmplY3RUeXBlLmNsYXNzU3ltYm9sO1xuXG5cdFx0XHRjb25zdCBpbnN0YW5jZUZpZWxkU3ltYm9sOiBGaWVsZFN5bWJvbCB8IG51bGwgPSBjbGFzc1N5bWJvbC5yZXNvbHZlSW5zdGFuY2VGaWVsZFN5bWJvbChub2RlLnByb3BlcnR5KTtcblx0XHRcdGlmIChpbnN0YW5jZUZpZWxkU3ltYm9sKSB7XG5cdFx0XHRcdHRoaXMuY2hlY2tGaWVsZEFjY2Vzcyhub2RlLCBjbGFzc1N5bWJvbCwgaW5zdGFuY2VGaWVsZFN5bWJvbCwgc2NvcGUpO1xuXHRcdFx0XHRyZXR1cm4gaW5zdGFuY2VGaWVsZFN5bWJvbC5maWVsZFR5cGU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHN0YXRpY0ZpZWxkU3ltYm9sOiBGaWVsZFN5bWJvbCB8IG51bGwgPSBjbGFzc1N5bWJvbC5yZXNvbHZlU3RhdGljRmllbGRTeW1ib2wobm9kZS5wcm9wZXJ0eSk7XG5cdFx0XHRpZiAoc3RhdGljRmllbGRTeW1ib2wpIHtcblx0XHRcdFx0dGhpcy5jaGVja0ZpZWxkQWNjZXNzKG5vZGUsIGNsYXNzU3ltYm9sLCBzdGF0aWNGaWVsZFN5bWJvbCwgc2NvcGUpO1xuXHRcdFx0XHRyZXR1cm4gc3RhdGljRmllbGRTeW1ib2wuZmllbGRUeXBlO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgVW5rbm93biBtZW1iZXIgJHtub2RlLnByb3BlcnR5fWAsIG5vZGUpO1xuXHRcdH1cblxuXHRcdHRoaXMudHlwZUVycm9yKFwiQ2Fubm90IGFjY2VzcyBtZW1iZXIgb2Ygbm9uLW9iamVjdFwiLCBub2RlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tUaGlzRXhwcmVzc2lvbihub2RlOiBBU1ROb2RlLCBzY29wZTogVHlwZVNjb3BlKTogQ2xhc3NSZWZUeXBlIHtcblx0XHRpZiAoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCBpbnN0YW5jZW9mIENsYXNzU3ltYm9sKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENsYXNzUmVmVHlwZShzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sKTtcblx0XHR9XG5cdFx0dGhpcy50eXBlRXJyb3IoJ3RoaXMgb3V0c2lkZSBvZiBjbGFzcycsIG5vZGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0lkZW50aWZpZXJFeHByZXNzaW9uKG5vZGU6IEFTVE5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRpZiAoc2NvcGUuaGFzVHlwZShub2RlLm5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gc2NvcGUuZ2V0VHlwZShub2RlLm5hbWUpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5oYXNTeW1ib2wobm9kZS5uYW1lKSkge1xuXHRcdFx0cmV0dXJuIG5ldyBDbGFzc1JlZlR5cGUodGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChub2RlLm5hbWUpKTtcblx0XHR9XG5cdFx0dGhpcy50eXBlRXJyb3IoYFVuZGVmaW5lZCBpZGVudGlmaWVyICR7bm9kZS5uYW1lfWAsIG5vZGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja05ld0V4cHJlc3Npb24obm9kZTogQVNUTmV3Tm9kZSwgc2NvcGU6IFR5cGVTY29wZSwgZXhwZWN0ZWRUeXBlOiBUeXBlIHwgbnVsbCA9IG51bGwpOiBDbGFzc1JlZlR5cGUge1xuXHRcdGNvbnN0IGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCA9IHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2wobm9kZS5uYW1lKTtcblxuXHRcdGxldCBpbnN0YW5jZVR5cGU7XG5cdFx0aWYgKG5vZGUudHlwZUFubm90YXRpb24udHlwZUFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCB0eXBlQXJndW1lbnRzID0gbm9kZVxuXHRcdFx0XHQudHlwZUFubm90YXRpb25cblx0XHRcdFx0LnR5cGVBcmd1bWVudHNcblx0XHRcdFx0Lm1hcCh0eXBlQXJndW1lbnQgPT4gdGhpcy53cmFwVHlwZSh0eXBlQXJndW1lbnQsIHNjb3BlKSk7XG5cblx0XHRcdGlmICh0eXBlQXJndW1lbnRzLmxlbmd0aCAhPT0gY2xhc3NTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMubGVuZ3RoKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBXcm9uZyBudW1iZXIgb2YgdHlwZSBhcmd1bWVudHNgLCBub2RlKTtcblx0XHRcdH1cblxuXHRcdFx0aW5zdGFuY2VUeXBlID0gbmV3IENsYXNzUmVmVHlwZShjbGFzc1N5bWJvbCwgdHlwZUFyZ3VtZW50cyk7XG5cdFx0fSBlbHNlIGlmIChleHBlY3RlZFR5cGUgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUpIHtcblx0XHRcdGluc3RhbmNlVHlwZSA9IGV4cGVjdGVkVHlwZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aW5zdGFuY2VUeXBlID0gbmV3IENsYXNzUmVmVHlwZShcblx0XHRcdFx0Y2xhc3NTeW1ib2wsXG5cdFx0XHRcdGNsYXNzU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLm1hcCgoKSA9PiBUeXBlcy5NSVhFRClcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYgKGNsYXNzU3ltYm9sLmNvbnN0cnVjdG9yTWV0aG9kU3ltYm9sKSB7XG5cdFx0XHR0aGlzLmNoZWNrQ2FsbEFyZ3VtZW50cyhjbGFzc1N5bWJvbC5jb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbCwgbm9kZS5hcmd1bWVudHMsIHNjb3BlKTtcblx0XHR9XG5cblx0XHRpZiAoZXhwZWN0ZWRUeXBlICYmICFleHBlY3RlZFR5cGUuYWNjZXB0cyhpbnN0YW5jZVR5cGUpKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgVHlwZSBtaXNtYXRjaDogJHtleHBlY3RlZFR5cGV9IDw+ICR7aW5zdGFuY2VUeXBlfWAsIG5vZGUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBpbnN0YW5jZVR5cGU7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQXJyYXlFeHByZXNzaW9uKG5vZGU6IEFTVEFycmF5Tm9kZSwgc2NvcGU6IFR5cGVTY29wZSwgZXhwZWN0ZWRUeXBlOiBUeXBlIHwgbnVsbCA9IG51bGwpOiBDbGFzc1JlZlR5cGUge1xuXG5cdFx0aWYgKG5vZGUuZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRpZiAoZXhwZWN0ZWRUeXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0XHRcdGV4cGVjdGVkVHlwZSA9IGV4cGVjdGVkVHlwZS50eXBlQXJndW1lbnRzWzBdIHx8IG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzLm5ld0FycmF5VHlwZU9mKGV4cGVjdGVkVHlwZSB8fCBUeXBlcy5NSVhFRCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY2xhc3NSZWZOYW1lID0gUHJpbWl0aXZlQ2xhc3NUeXBlcy5nZXRDbGFzc1JlZk5hbWUoUHJpbWl0aXZlQ2xhc3NUeXBlcy5BUlJBWSk7XG5cblx0XHRsZXQgZXhwZWN0ZWRUeXBlT2ZJdGVtOiBUeXBlO1xuXHRcdGlmIChleHBlY3RlZFR5cGUgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUgJiYgZXhwZWN0ZWRUeXBlLmNsYXNzU3ltYm9sLm5hbWUgPT09IGNsYXNzUmVmTmFtZSkge1xuXHRcdFx0ZXhwZWN0ZWRUeXBlT2ZJdGVtID0gZXhwZWN0ZWRUeXBlLnR5cGVBcmd1bWVudHNbMF0gfHwgVHlwZXMuTUlYRUQ7XG5cdFx0fSBlbHNlIGlmIChub2RlLmVsZW1lbnRzWzBdKSB7XG5cdFx0XHRleHBlY3RlZFR5cGVPZkl0ZW0gPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLmVsZW1lbnRzWzBdLCBzY29wZSwgZXhwZWN0ZWRUeXBlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoJ0FycmF5IGV4cHJlc3Npb24gbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBlbGVtZW50Jywgbm9kZSk7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBpdGVtIG9mIG5vZGUuZWxlbWVudHMpIHtcblx0XHRcdGNvbnN0IGFjdHVhbFR5cGVPZkl0ZW06IFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihpdGVtLCBzY29wZSwgZXhwZWN0ZWRUeXBlT2ZJdGVtKTtcblx0XHRcdGlmICghZXhwZWN0ZWRUeXBlT2ZJdGVtLmFjY2VwdHMoYWN0dWFsVHlwZU9mSXRlbSkpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoXG5cdFx0XHRcdFx0YEFycmF5IGVsZW1lbnRzIG11c3QgaGF2ZSBzYW1lIHR5cGUsIGdvdCAke2V4cGVjdGVkVHlwZU9mSXRlbX0gYW5kICR7YWN0dWFsVHlwZU9mSXRlbX1gLFxuXHRcdFx0XHRcdG5vZGVcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5uZXdBcnJheVR5cGVPZihleHBlY3RlZFR5cGVPZkl0ZW0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1VuYXJ5RXhwcmVzc2lvbihub2RlOiBBU1RVbmFyeU5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRjb25zdCBvcGVyYW5kID0gdGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5hcmd1bWVudCwgc2NvcGUpO1xuXHRcdGNvbnN0IG9wID0gbm9kZS5vcGVyYXRvcjtcblx0XHRpZiAob3AgPT09IEdSQU1NQVIuRVhDTEFNQVRJT05fTUFSSykge1xuXHRcdFx0aWYgKG9wZXJhbmQuZXF1YWxzKFR5cGVzLkJPT0xFQU4pKSB7XG5cdFx0XHRcdHJldHVybiBUeXBlcy5CT09MRUFOO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFVuYXJ5ICchJyByZXF1aXJlcyBib29sZWFuLCBnb3QgJHtvcGVyYW5kLm5hbWV9YCwgbm9kZSk7XG5cdFx0fVxuXHRcdHRoaXMudHlwZUVycm9yKGBJbnZhbGlkIHVuYXJ5IG9wZXJhdG9yICR7b3B9YCwgbm9kZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrTGFtYmRhRXhwcmVzc2lvbihub2RlOiBBU1RMYW1iZGFOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogTGFtYmRhVHlwZSB7XG5cdFx0Y29uc3QgbGFtYmRhU2NvcGUgPSBuZXcgVHlwZVNjb3BlKHNjb3BlKTtcblx0XHRjb25zdCBwYXJhbWV0ZXJzID0gbm9kZS5wYXJhbWV0ZXJzLm1hcChwYXJhbWV0ZXJOb2RlID0+IHtcblx0XHRcdGNvbnN0IHBhcmFtZXRlclN5bWJvbDogUGFyYW1ldGVyU3ltYm9sID0gdGhpcy5wYXJhbWV0ZXJOb2RlVG9TeW1ib2wocGFyYW1ldGVyTm9kZSk7XG5cblx0XHRcdGxhbWJkYVNjb3BlLmRlZmluZVR5cGUocGFyYW1ldGVyTm9kZS5uYW1lLCBwYXJhbWV0ZXJTeW1ib2wucGFyYW1ldGVyVHlwZSk7XG5cblx0XHRcdHJldHVybiBwYXJhbWV0ZXJTeW1ib2w7XG5cdFx0fSk7XG5cblx0XHRpZiAobm9kZS5jaGlsZHJlblswXSkge1xuXHRcdFx0cmV0dXJuIG5ldyBMYW1iZGFUeXBlKHBhcmFtZXRlcnMsIHRoaXMuY2hlY2tFeHByZXNzaW9uKG5vZGUuY2hpbGRyZW5bMF0sIGxhbWJkYVNjb3BlKSk7XG5cdFx0fVxuXG5cdFx0dGhpcy50eXBlRXJyb3IoJ0xhbWJkYSBleHByZXNzaW9uIG11c3QgaGF2ZSBhIHJldHVybiB0eXBlJywgbm9kZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQ2FsbEV4cHJlc3Npb24obm9kZTogQVNUQ2FsbE5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRjb25zdCBjYWxsZWUgPSBub2RlLmNhbGxlZTtcblxuXHRcdGlmIChjYWxsZWUudHlwZSA9PT0gQVNUTm9kZVR5cGUuSURFTlRJRklFUiAmJiBjYWxsZWUubmFtZSA9PT0gR1JBTU1BUi5TVVBFUikge1xuXHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tTdXBlckNvbnN0cnVjdG9yQ2FsbChub2RlLCBzY29wZSk7XG5cdFx0fVxuXG5cdFx0Ly8gQ2xhc3MubWV0aG9kKClcblx0XHRpZiAoY2FsbGVlIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZVxuXHRcdFx0JiYgY2FsbGVlLm9iamVjdC50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSXG5cdFx0XHQmJiB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmhhc1N5bWJvbChjYWxsZWUub2JqZWN0Lm5hbWUpXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jaGVja1N0YXRpY0NhbGwoXG5cdFx0XHRcdGNhbGxlZS5vYmplY3QubmFtZSxcblx0XHRcdFx0Y2FsbGVlLnByb3BlcnR5LFxuXHRcdFx0XHRub2RlLmFyZ3VtZW50cyxcblx0XHRcdFx0c2NvcGVcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gZXhwci5tZXRob2QoKVxuXHRcdGlmIChjYWxsZWUgaW5zdGFuY2VvZiBBU1RNZW1iZXJOb2RlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jaGVja0luc3RhbmNlQ2FsbChjYWxsZWUsIG5vZGUuYXJndW1lbnRzLCBzY29wZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGNhbGxlZSBpbnN0YW5jZW9mIEFTVExhbWJkYU5vZGUpIHtcblx0XHRcdHJldHVybiB0aGlzLmNoZWNrTGFtYmRhQ2FsbCh0aGlzLmNoZWNrTGFtYmRhRXhwcmVzc2lvbihjYWxsZWUsIHNjb3BlKSwgbm9kZS5hcmd1bWVudHMsIHNjb3BlKTtcblx0XHR9XG5cblx0XHQvLyBJZGVudGlmaWVyOiBWYXJpYWJsZSAvIExhbWJkYVxuXHRcdGlmIChjYWxsZWUudHlwZSA9PT0gQVNUTm9kZVR5cGUuSURFTlRJRklFUikge1xuXHRcdFx0aWYgKHNjb3BlLmhhc1R5cGUoY2FsbGVlLm5hbWUpKSB7XG5cdFx0XHRcdGNvbnN0IHR5cGUgPSBzY29wZS5nZXRUeXBlKGNhbGxlZS5uYW1lKTtcblx0XHRcdFx0aWYgKHR5cGUgaW5zdGFuY2VvZiBMYW1iZGFUeXBlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tMYW1iZGFDYWxsKHR5cGUsIG5vZGUuYXJndW1lbnRzLCBzY29wZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBjYWxsIG5vbi1mdW5jdGlvbiAke2NhbGxlZS5uYW1lfWAsIG5vZGUpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBGYWxsYmFjazogZ2xvYmFsZSBGdW5rdGlvblxuXHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tGdW5jdGlvbkNhbGwoY2FsbGVlLm5hbWUsIG5vZGUuYXJndW1lbnRzLCBzY29wZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFR5cGVzLk1JWEVEO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1N1cGVyQ29uc3RydWN0b3JDYWxsKG5vZGU6IEFTVENhbGxOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0Y29uc3QgY3VycmVudENsYXNzID0gc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbDtcblxuXHRcdGlmICghKGN1cnJlbnRDbGFzcyBpbnN0YW5jZW9mIENsYXNzU3ltYm9sKSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoJ3N1cGVyKCkgdXNlZCBvdXRzaWRlIG9mIGNsYXNzJywgbm9kZSk7XG5cdFx0fVxuXG5cdFx0aWYgKCFjdXJyZW50Q2xhc3Muc3VwZXJDbGFzcykge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoJ3N1cGVyKCkgdXNlZCBvdXRzaWRlIG9mIGNsYXNzIGhpZXJhcmNoeScsIG5vZGUpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHN1cGVyU3ltYm9sOiBDbGFzc1N5bWJvbCA9IHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2woY3VycmVudENsYXNzLnN1cGVyQ2xhc3MpO1xuXHRcdGlmICghc3VwZXJTeW1ib2wuY29uc3RydWN0b3JNZXRob2RTeW1ib2wpIHtcblx0XHRcdGlmIChub2RlLmFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKCdTdXBlciBjb25zdHJ1Y3RvciB0YWtlcyBubyBhcmd1bWVudHMnLCBub2RlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBUeXBlcy5WT0lEO1xuXHRcdH1cblxuXHRcdHRoaXMuY2hlY2tDYWxsQXJndW1lbnRzKHN1cGVyU3ltYm9sLmNvbnN0cnVjdG9yTWV0aG9kU3ltYm9sLCBub2RlLmFyZ3VtZW50cywgc2NvcGUpO1xuXG5cdFx0cmV0dXJuIFR5cGVzLlZPSUQ7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQ2FsbE9uTnVsbE9iamVjdFR5cGUob2JqZWN0VHlwZTogVHlwZSwgbm9kZTogQVNUTm9kZSk6IHZvaWQge1xuXHRcdGlmIChvYmplY3RUeXBlLmVxdWFscyhUeXBlcy5OVUxMKSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBjYWxsIG1ldGhvZCBvbiBudWxsYCwgbm9kZSk7XG5cdFx0fVxuXHRcdGlmIChvYmplY3RUeXBlIGluc3RhbmNlb2YgTnVsbGFibGVUeXBlKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNhbGwgbWV0aG9kIG9uIG51bGxhYmxlIHR5cGUgJHtvYmplY3RUeXBlfWAsIG5vZGUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tJbnN0YW5jZUNhbGwoY2FsbGVlOiBBU1RNZW1iZXJOb2RlLCBjYWxsQXJndW1lbnRzOiBBU1ROb2RlW10sIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRsZXQgb2JqZWN0VHlwZTogVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKGNhbGxlZS5vYmplY3QsIHNjb3BlKTtcblxuXHRcdG9iamVjdFR5cGUgPSBBdXRvYm94aW5nLmF1dG9ib3hJZk5lZWRlZChvYmplY3RUeXBlLCB0aGlzLm9iamVjdFJlZ2lzdHJ5KTtcblxuXHRcdHRoaXMuY2hlY2tDYWxsT25OdWxsT2JqZWN0VHlwZShvYmplY3RUeXBlLCBjYWxsZWUpO1xuXG5cdFx0aWYgKG9iamVjdFR5cGUgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUpIHtcblx0XHRcdGNvbnN0IG1ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sID0gdGhpcy5yZXNvbHZlSW5zdGFuY2VNZXRob2RlKFxuXHRcdFx0XHRvYmplY3RUeXBlLmNsYXNzU3ltYm9sLFxuXHRcdFx0XHRjYWxsZWUucHJvcGVydHlcblx0XHRcdCk7XG5cblx0XHRcdGlmIChtZXRob2RTeW1ib2wuaXNTdGF0aWMpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBjYWxsIHN0YXRpYyBtZXRob2QgJHtjYWxsZWUucHJvcGVydHl9IG9uIGluc3RhbmNlIG9mICR7Y2FsbGVlLm9iamVjdC5uYW1lfWAsXG5cdFx0XHRcdCAgICAgICAgICAgICAgIGNhbGxlZSk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuY2hlY2tJbnN0YW5jZU1ldGhvZEFjY2VzcyhjYWxsZWUsIG9iamVjdFR5cGUuY2xhc3NTeW1ib2wsIG1ldGhvZFN5bWJvbCwgc2NvcGUpO1xuXG5cdFx0XHRjb25zdCBvd25lcjogQ2xhc3NTeW1ib2wgfCBJbnRlcmZhY2VTeW1ib2wgfCBudWxsID0gbWV0aG9kU3ltYm9sLm93bmVyO1xuXG5cdFx0XHRpZiAob3duZXIgPT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBjYWxsIG1ldGhvZCBvbiBub24tb2JqZWN0YCwgY2FsbGVlKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc3Vic3RpdHV0aW9uTWFwOiBNYXA8c3RyaW5nLCBUeXBlPiA9IGJ1aWxkVHlwZVN1YnN0aXR1dGlvbk1hcChcblx0XHRcdFx0b3duZXIudHlwZVBhcmFtZXRlclN5bWJvbHMsXG5cdFx0XHRcdG9iamVjdFR5cGUudHlwZUFyZ3VtZW50c1xuXHRcdFx0KTtcblxuXHRcdFx0dGhpcy5jaGVja0NhbGxBcmd1bWVudHMobWV0aG9kU3ltYm9sLCBjYWxsQXJndW1lbnRzLCBzY29wZSwgc3Vic3RpdHV0aW9uTWFwKTtcblxuXHRcdFx0cmV0dXJuIHN1YnN0aXR1dGVUeXBlKG1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlLCBzdWJzdGl0dXRpb25NYXApO1xuXHRcdH1cblxuXHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgY2FsbCBtZXRob2Qgb24gbm9uLW9iamVjdGAsIGNhbGxlZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrU3RhdGljQ2FsbChjbGFzc05hbWU6IHN0cmluZywgbWV0aG9kTmFtZTogc3RyaW5nLCBjYWxsQXJndW1lbnRzOiBBU1ROb2RlW10sIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRjb25zdCBjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wgPSB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKGNsYXNzTmFtZSk7XG5cblx0XHRjb25zdCBtZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCB8IG51bGwgPSBjbGFzc1N5bWJvbC5zdGF0aWNNZXRob2RTeW1ib2xzLmdldChtZXRob2ROYW1lKSB8fCBudWxsO1xuXHRcdGlmICghbWV0aG9kU3ltYm9sKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgVW5rbm93biBzdGF0aWMgbWV0aG9kICR7Y2xhc3NOYW1lfS4ke21ldGhvZE5hbWV9YCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jaGVja1N0YXRpY01ldGhvZEFjY2VzcyhjbGFzc1N5bWJvbCwgbWV0aG9kU3ltYm9sLCBzY29wZSlcblxuXHRcdHRoaXMuY2hlY2tDYWxsQXJndW1lbnRzKG1ldGhvZFN5bWJvbCwgY2FsbEFyZ3VtZW50cywgc2NvcGUpO1xuXG5cdFx0cmV0dXJuIG1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0xhbWJkYUNhbGwobGFtYmRhOiBMYW1iZGFUeXBlLCBjYWxsQXJndW1lbnRzOiBBU1ROb2RlW10sIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblxuXHRcdHRoaXMuY2hlY2tDYWxsQXJndW1lbnRzKGxhbWJkYSwgY2FsbEFyZ3VtZW50cywgc2NvcGUpO1xuXG5cdFx0cmV0dXJuIGxhbWJkYS5yZXR1cm5UeXBlO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0Z1bmN0aW9uQ2FsbChuYW1lOiBzdHJpbmcsIGNhbGxBcmd1bWVudHM6IEFTVE5vZGVbXSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGlmICghZ2xvYmFsRnVuY3Rpb25UeXBlUmVnaXN0cnkuaGFzKG5hbWUpKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgVW5rbm93biBmdW5jdGlvbiAke25hbWV9YCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbmF0aXZlRnVuY3Rpb246IE5hdGl2ZUZ1bmN0aW9uID0gZ2xvYmFsRnVuY3Rpb25UeXBlUmVnaXN0cnkuZ2V0KG5hbWUpO1xuXG5cdFx0dGhpcy5jaGVja0NhbGxBcmd1bWVudHMobmF0aXZlRnVuY3Rpb24sIGNhbGxBcmd1bWVudHMsIHNjb3BlKTtcblxuXHRcdHJldHVybiBuYXRpdmVGdW5jdGlvbi5yZXR1cm5UeXBlXG5cdFx0XHQ/IHRoaXMud3JhcFR5cGUobmF0aXZlRnVuY3Rpb24ucmV0dXJuVHlwZSwgc2NvcGUpXG5cdFx0XHQ6IFR5cGVzLlZPSUQ7XG5cdH1cblxuXHRwcml2YXRlIHBhcmFtZXRlcnNTeW1ib2xzRnJvbUNhbGxhYmxlU3ltYm9sKGNhbGxhYmxlU3ltYm9sOiBNZXRob2RTeW1ib2wgfCBMYW1iZGFUeXBlIHwgTmF0aXZlRnVuY3Rpb24pOiBQYXJhbWV0ZXJTeW1ib2xbXSB7XG5cdFx0aWYgKGNhbGxhYmxlU3ltYm9sIGluc3RhbmNlb2YgTmF0aXZlRnVuY3Rpb24pIHtcblx0XHRcdHJldHVybiBjYWxsYWJsZVN5bWJvbFxuXHRcdFx0XHQucGFyYW1ldGVyTm9kZXNcblx0XHRcdFx0Lm1hcChwYXJhbWV0ZXJOb2RlID0+IHRoaXMucGFyYW1ldGVyTm9kZVRvU3ltYm9sKHBhcmFtZXRlck5vZGUpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY2FsbGFibGVTeW1ib2wucGFyYW1ldGVyU3ltYm9sc1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0NhbGxBcmd1bWVudHMoXG5cdFx0Y2FsbGFibGVTeW1ib2w6IE1ldGhvZFN5bWJvbCB8IExhbWJkYVR5cGUgfCBOYXRpdmVGdW5jdGlvbixcblx0XHRjYWxsQXJndW1lbnRzOiBBU1ROb2RlW10sXG5cdFx0c2NvcGU6IFR5cGVTY29wZSxcblx0XHRzdWJzdGl0dXRpb25NYXA6IE1hcDxzdHJpbmcsIFR5cGU+ID0gbmV3IE1hcCgpXG5cdCk6IHZvaWQge1xuXHRcdGNvbnN0IGNhbGxTY29wZSA9IG5ldyBUeXBlU2NvcGUoc2NvcGUpO1xuXHRcdGxldCBwYXJhbWV0ZXJTeW1ib2xzID0gdGhpcy5wYXJhbWV0ZXJzU3ltYm9sc0Zyb21DYWxsYWJsZVN5bWJvbChjYWxsYWJsZVN5bWJvbCk7XG5cblx0XHRpZiAoY2FsbEFyZ3VtZW50cy5sZW5ndGggPiBwYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoXCJBcmd1bWVudCBjb3VudCBtaXNtYXRjaFwiKTtcblx0XHR9XG5cblx0XHRsZXQgYWN0dWFsVHlwZTogVHlwZTtcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcGFyYW1ldGVyU3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgcGFyYW1ldGVyU3ltYm9sOiBQYXJhbWV0ZXJTeW1ib2wgfCBudWxsID0gcGFyYW1ldGVyU3ltYm9sc1tpXSB8fCBudWxsO1xuXHRcdFx0Y29uc3QgY2FsbEFyZ3VtZW50OiBBU1ROb2RlIHwgbnVsbCA9IGNhbGxBcmd1bWVudHNbaV0gfHwgbnVsbDtcblxuXHRcdFx0aWYgKHBhcmFtZXRlclN5bWJvbCkge1xuXHRcdFx0XHRjb25zdCBleHBlY3RlZFR5cGU6IFR5cGUgPSBzdWJzdGl0dXRlVHlwZShwYXJhbWV0ZXJTeW1ib2wucGFyYW1ldGVyVHlwZSwgc3Vic3RpdHV0aW9uTWFwKTtcblxuXHRcdFx0XHRpZiAoY2FsbEFyZ3VtZW50KSB7XG5cdFx0XHRcdFx0YWN0dWFsVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKGNhbGxBcmd1bWVudCwgY2FsbFNjb3BlLCBleHBlY3RlZFR5cGUpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHBhcmFtZXRlclN5bWJvbC5kZWZhdWx0VHlwZSkge1xuXHRcdFx0XHRcdGFjdHVhbFR5cGUgPSBwYXJhbWV0ZXJTeW1ib2wuZGVmYXVsdFR5cGU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYE1pc3NpbmcgYXJndW1lbnQgJHtwYXJhbWV0ZXJTeW1ib2wubmFtZX1gLCBjYWxsQXJndW1lbnQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5jaGVja0Fzc2lnbmFibGUoZXhwZWN0ZWRUeXBlLCBhY3R1YWxUeXBlLCBjYWxsQXJndW1lbnRzW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQXNzaWduYWJsZShleHBlY3RlZFR5cGU6IFR5cGUsIGFjdHVhbFR5cGU6IFR5cGUsIG5vZGU6IEFTVE5vZGUgfCBudWxsID0gbnVsbCk6IHZvaWQge1xuXHRcdGlmIChleHBlY3RlZFR5cGUuZXF1YWxzKGFjdHVhbFR5cGUpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGV4cGVjdGVkVHlwZSBpbnN0YW5jZW9mIE1peGVkVHlwZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChleHBlY3RlZFR5cGUgaW5zdGFuY2VvZiBOdWxsYWJsZVR5cGUpIHtcblx0XHRcdGlmIChhY3R1YWxUeXBlID09PSBUeXBlcy5OVUxMKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChleHBlY3RlZFR5cGUuaW5uZXIuYWNjZXB0cyhhY3R1YWxUeXBlKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGV4cGVjdGVkVHlwZS5hY2NlcHRzKGFjdHVhbFR5cGUpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy50eXBlRXJyb3IoYFR5cGUgbWlzbWF0Y2g6ICR7ZXhwZWN0ZWRUeXBlfSA8PiAke2FjdHVhbFR5cGV9YCwgbm9kZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQm9keShjaGlsZHJlbjogQVNUTm9kZVtdLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0bGV0IHJldHVyblR5cGU6IFR5cGUgPSBUeXBlcy5NSVhFRDtcblxuXHRcdGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcblx0XHRcdGNvbnN0IHN0YXRlbWVudFJlc3VsdCA9IHRoaXMuY2hlY2tTdGF0ZW1lbnQoY2hpbGQsIHNjb3BlKTtcblx0XHRcdGlmIChzdGF0ZW1lbnRSZXN1bHQuZGlkUmV0dXJuICYmIHN0YXRlbWVudFJlc3VsdC5yZXR1cm5UeXBlKSB7XG5cdFx0XHRcdHJldHVyblR5cGUgPSBzdGF0ZW1lbnRSZXN1bHQucmV0dXJuVHlwZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmV0dXJuVHlwZTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tSZXR1cm5UeXBlKGV4cGVjdGVkVHlwZTogVHlwZSwgYWN0dWFsVHlwZTogVHlwZSwgbm9kZTogQVNUTWV0aG9kTm9kZSk6IHZvaWQge1xuXHRcdC8vIHZvaWQtTWV0aG9kZVxuXHRcdGlmIChleHBlY3RlZFR5cGUgPT09IFR5cGVzLlZPSUQpIHtcblx0XHRcdGlmIChhY3R1YWxUeXBlICE9PSBUeXBlcy5NSVhFRCAmJiBhY3R1YWxUeXBlICE9PSBUeXBlcy5WT0lEKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgcmV0dXJuICR7YWN0dWFsVHlwZX0gZnJvbSB2b2lkIG1ldGhvZGAsIG5vZGUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIGtlaW4gcmV0dXJuIHZvcmhhbmRlblxuXHRcdGlmIChhY3R1YWxUeXBlID09PSBUeXBlcy5NSVhFRCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYE1pc3NpbmcgcmV0dXJuIHN0YXRlbWVudCAoZXhwZWN0ZWQgJHtleHBlY3RlZFR5cGV9KWAsIG5vZGUpO1xuXHRcdH1cblxuXHRcdC8vIHR5cC1pbmtvbXBhdGliZWxcblx0XHRpZiAoIWV4cGVjdGVkVHlwZS5hY2NlcHRzKGFjdHVhbFR5cGUpKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgUmV0dXJuIHR5cGUgbWlzbWF0Y2g6IGV4cGVjdGVkICR7ZXhwZWN0ZWRUeXBlfSwgZ290ICR7YWN0dWFsVHlwZX1gLCBub2RlKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrVkRvbU5vZGUobm9kZTogQVNUVkRvbU5vZGUpOiBUeXBlIHtcblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wgPSB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKG5vZGUudGFnKTtcblxuXHRcdFx0Y29uc3QgbWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wgPSB0aGlzLnJlc29sdmVJbnN0YW5jZU1ldGhvZGUoY2xhc3NTeW1ib2wsICdyZW5kZXInKTtcblxuXHRcdFx0aWYgKCFtZXRob2RTeW1ib2wpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENvbXBvbmVudCAnJHtub2RlLnRhZ30nIGhhcyBubyByZW5kZXIoKSBtZXRob2RgLCBub2RlKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5jaGVja0Fzc2lnbmFibGUobWV0aG9kU3ltYm9sLnJldHVyblR5cGUsIFR5cGVzLlZOT0RFLCBub2RlKTtcblxuXHRcdFx0cmV0dXJuIFR5cGVzLlZOT0RFO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHR9XG5cblx0XHRyZXR1cm4gVHlwZXMuVk5PREU7XG5cdH1cblxuXHRwcml2YXRlIHJlc29sdmVJbnN0YW5jZU1ldGhvZGUoY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sLCBtZXRob2ROYW1lOiBzdHJpbmcpOiBNZXRob2RTeW1ib2wge1xuXHRcdC8qKiBAdHlwZSB7TWV0aG9kU3ltYm9sfG51bGx9ICovXG5cdFx0Y29uc3QgbWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wgfCBudWxsID0gdGhpcy5yZXNvbHZlSW5IaWVyYXJjaHkoXG5cdFx0XHRjbGFzc1N5bWJvbCxcblx0XHRcdGNsYXNzU3ltYm9sID0+IGNsYXNzU3ltYm9sLmluc3RhbmNlTWV0aG9kU3ltYm9scy5nZXQobWV0aG9kTmFtZSkgfHwgbnVsbFxuXHRcdCk7XG5cblx0XHRpZiAoIW1ldGhvZFN5bWJvbCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFVua25vd24gbWV0aG9kICR7Y2xhc3NTeW1ib2wubmFtZX0uJHttZXRob2ROYW1lfWAsIGNsYXNzU3ltYm9sLm5vZGUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtZXRob2RTeW1ib2w7XG5cdH1cblxuXHRwcml2YXRlIHJlc29sdmVJbkhpZXJhcmNoeShjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wsIHJlc29sdmVyOiAoY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sKSA9PiBhbnkpOiBhbnkge1xuXHRcdGxldCBjdXJyZW50OiBDbGFzc1N5bWJvbCB8IG51bGwgPSBjbGFzc1N5bWJvbDtcblxuXHRcdHdoaWxlIChjdXJyZW50KSB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSByZXNvbHZlcihjdXJyZW50KTtcblx0XHRcdGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCAmJiByZXN1bHQgIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFjdXJyZW50LnN1cGVyQ2xhc3MpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdGN1cnJlbnQgPSB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKGN1cnJlbnQuc3VwZXJDbGFzcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRwcml2YXRlIG5ld0FycmF5VHlwZU9mKGVsZW1lbnRUeXBlOiBUeXBlKTogQ2xhc3NSZWZUeXBlIHtcblx0XHRjb25zdCBjbGFzc05hbWU6IHN0cmluZyB8IG51bGwgPSBQcmltaXRpdmVDbGFzc1R5cGVzLmdldENsYXNzUmVmTmFtZShQcmltaXRpdmVDbGFzc1R5cGVzLkFSUkFZKTtcblxuXHRcdGlmIChjbGFzc05hbWUgPT09IG51bGwpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKCdJbnRlcm5hbCBlcnJvcjogQ2Fubm90IGZpbmQgY2xhc3MgbmFtZSBmb3IgYXJyYXkgdHlwZS4nKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IENsYXNzUmVmVHlwZSh0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKGNsYXNzTmFtZSksIFtlbGVtZW50VHlwZV0pO1xuXHR9XG5cblx0cHJpdmF0ZSB3cmFwVHlwZSh0eXBlOiBBU1RUeXBlTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdHJldHVybiB3cmFwVHlwZSh0eXBlLCB0aGlzLm9iamVjdFJlZ2lzdHJ5LCBzY29wZSk7XG5cdH1cblxuXHRwcml2YXRlIHBhcmFtZXRlck5vZGVUb1N5bWJvbChwYXJhbWV0ZXJOb2RlOiBBU1RQYXJhbWV0ZXJOb2RlLCBzY29wZTogVHlwZVNjb3BlID0gbmV3IFR5cGVTY29wZSgpKTogUGFyYW1ldGVyU3ltYm9sIHtcblx0XHRjb25zdCBwYXJhbWV0ZXJUeXBlID0gcGFyYW1ldGVyTm9kZS50eXBlQW5ub3RhdGlvblxuXHRcdFx0PyB0aGlzLndyYXBUeXBlKHBhcmFtZXRlck5vZGUudHlwZUFubm90YXRpb24sIHNjb3BlKVxuXHRcdFx0OiBUeXBlcy5NSVhFRDtcblxuXHRcdGxldCBkZWZhdWx0VHlwZSA9IG51bGw7XG5cdFx0aWYgKHBhcmFtZXRlck5vZGUuZGVmYXVsdFZhbHVlKSB7XG5cdFx0XHRkZWZhdWx0VHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKHBhcmFtZXRlck5vZGUuZGVmYXVsdFZhbHVlLCBuZXcgVHlwZVNjb3BlKCkpO1xuXG5cdFx0XHRpZiAoZGVmYXVsdFR5cGVcblx0XHRcdFx0JiYgIXBhcmFtZXRlclR5cGUuZXF1YWxzKFR5cGVzLk1JWEVEKVxuXHRcdFx0XHQmJiAhcGFyYW1ldGVyVHlwZS5lcXVhbHMoZGVmYXVsdFR5cGUpKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKFxuXHRcdFx0XHRcdGBEZWZhdWx0IHZhbHVlIGZvciBwYXJhbWV0ZXIgJyR7cGFyYW1ldGVyTm9kZS5uYW1lfScgZG9lcyBub3QgbWF0Y2ggdHlwZS5gLFxuXHRcdFx0XHRcdHBhcmFtZXRlck5vZGVcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IFBhcmFtZXRlclN5bWJvbChcblx0XHRcdHBhcmFtZXRlck5vZGUubmFtZSxcblx0XHRcdHBhcmFtZXRlclR5cGUsXG5cdFx0XHRkZWZhdWx0VHlwZSxcblx0XHRcdHBhcmFtZXRlck5vZGVcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSByZWdpc3RlckNsYXNzU3ltYm9sKGNsYXNzTm9kZTogQVNUQ2xhc3NOb2RlKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKGNsYXNzTm9kZS5uYW1lKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNsYXNzU2NvcGUgPSBuZXcgVHlwZVNjb3BlKCk7XG5cdFx0Y29uc3QgY2xhc3NTeW1ib2wgPSBuZXcgQ2xhc3NTeW1ib2woY2xhc3NOb2RlKTtcblxuXHRcdHRyeSB7XG5cdFx0XHRpZiAoY2xhc3NTeW1ib2wuc3VwZXJDbGFzcykge1xuXHRcdFx0XHRjbGFzc1N5bWJvbC5zdXBlckNsYXNzU3ltYm9sID0gdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChjbGFzc1N5bWJvbC5zdXBlckNsYXNzKTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0fVxuXG5cdFx0dGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5hZGRDbGFzc1N5bWJvbChjbGFzc1N5bWJvbCk7XG5cblx0XHRjbGFzc05vZGUudHlwZVBhcmFtZXRlcnMuZm9yRWFjaChuYW1lID0+IHtcblx0XHRcdGNsYXNzU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLnB1c2gobmV3IFR5cGVQYXJhbWV0ZXJTeW1ib2wobmFtZSkpO1xuXHRcdFx0Y2xhc3NTY29wZS5kZWZpbmVUeXBlQmluZGluZyhuYW1lLCBuZXcgVHlwZVZhcmlhYmxlKG5hbWUpKTtcblx0XHR9KTtcblxuXHRcdGZvciAoY29uc3QgdHlwZU5vZGUgb2YgY2xhc3NOb2RlLmltcGxlbWVudHNJbnRlcmZhY2VzKSB7XG5cdFx0XHRjb25zdCBpbnRlcmZhY2VUeXBlOiBUeXBlID0gdGhpcy53cmFwVHlwZSh0eXBlTm9kZSwgY2xhc3NTY29wZSk7XG5cdFx0XHRpZiAoaW50ZXJmYWNlVHlwZSBpbnN0YW5jZW9mIEludGVyZmFjZVJlZlR5cGUpIHtcblx0XHRcdFx0Y2xhc3NTeW1ib2wuaW1wbGVtZW50c0ludGVyZmFjZXMucHVzaChpbnRlcmZhY2VUeXBlKTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgRXhwZWN0ZWQgaW50ZXJmYWNlIHR5cGUsIGdvdCAke2ludGVyZmFjZVR5cGV9YCwgdHlwZU5vZGUpO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgbWVtYmVyTm9kZSBvZiBjbGFzc05vZGUuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChtZW1iZXJOb2RlLnR5cGUgPT09IEFTVE5vZGVUeXBlLkZJRUxEICYmIG1lbWJlck5vZGUgaW5zdGFuY2VvZiBBU1RGaWVsZE5vZGUpIHtcblx0XHRcdFx0Y29uc3QgdGFyZ2V0OiBNYXA8c3RyaW5nLCBGaWVsZFN5bWJvbD4gPSBtZW1iZXJOb2RlLm1vZGlmaWVycy5zdGF0aWNcblx0XHRcdFx0XHQ/IGNsYXNzU3ltYm9sLnN0YXRpY0ZpZWxkU3ltYm9sc1xuXHRcdFx0XHRcdDogY2xhc3NTeW1ib2wuaW5zdGFuY2VGaWVsZFN5bWJvbHM7XG5cblx0XHRcdFx0Y29uc3QgZmllbGRTeW1ib2wgPSBuZXcgRmllbGRTeW1ib2woXG5cdFx0XHRcdFx0bWVtYmVyTm9kZSxcblx0XHRcdFx0XHRtZW1iZXJOb2RlLmZpZWxkVHlwZVxuXHRcdFx0XHRcdFx0PyB0aGlzLndyYXBUeXBlKG1lbWJlck5vZGUuZmllbGRUeXBlLCBjbGFzc1Njb3BlKVxuXHRcdFx0XHRcdFx0OiBUeXBlcy5NSVhFRFxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdGZpZWxkU3ltYm9sLm93bmVyID0gY2xhc3NTeW1ib2w7XG5cblx0XHRcdFx0dGFyZ2V0LnNldChmaWVsZFN5bWJvbC5uYW1lLCBmaWVsZFN5bWJvbCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICgobWVtYmVyTm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5NRVRIT0QgfHwgbWVtYmVyTm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5DT05TVFJVQ1RPUilcblx0XHRcdFx0JiYgbWVtYmVyTm9kZSBpbnN0YW5jZW9mIEFTVE1ldGhvZE5vZGUpIHtcblxuXHRcdFx0XHRjb25zdCBtZXRob2RTY29wZSA9IG5ldyBUeXBlU2NvcGUoY2xhc3NTY29wZSk7XG5cdFx0XHRcdGNvbnN0IG1ldGhvZFN5bWJvbCA9IG5ldyBNZXRob2RTeW1ib2wobWVtYmVyTm9kZSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLm93bmVyID0gY2xhc3NTeW1ib2w7XG5cblx0XHRcdFx0bWVtYmVyTm9kZS50eXBlUGFyYW1ldGVycy5mb3JFYWNoKG5hbWUgPT4ge1xuXHRcdFx0XHRcdG1ldGhvZFN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5wdXNoKG5ldyBUeXBlUGFyYW1ldGVyU3ltYm9sKG5hbWUpKTtcblx0XHRcdFx0XHRtZXRob2RTY29wZS5kZWZpbmVUeXBlQmluZGluZyhuYW1lLCBuZXcgVHlwZVZhcmlhYmxlKG5hbWUpKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMgPSBtZW1iZXJOb2RlXG5cdFx0XHRcdFx0LnBhcmFtZXRlcnNcblx0XHRcdFx0XHQubWFwKHBhcmFtZXRlck5vZGUgPT4gdGhpcy5wYXJhbWV0ZXJOb2RlVG9TeW1ib2wocGFyYW1ldGVyTm9kZSwgbWV0aG9kU2NvcGUpKTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wucmV0dXJuVHlwZSA9IG1lbWJlck5vZGUucmV0dXJuVHlwZVxuXHRcdFx0XHRcdD8gdGhpcy53cmFwVHlwZShtZW1iZXJOb2RlLnJldHVyblR5cGUsIG1ldGhvZFNjb3BlKVxuXHRcdFx0XHRcdDogVHlwZXMuVk9JRDtcblxuXHRcdFx0XHRpZiAobWVtYmVyTm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5DT05TVFJVQ1RPUikge1xuXHRcdFx0XHRcdGNsYXNzU3ltYm9sLmNvbnN0cnVjdG9yTWV0aG9kU3ltYm9sID0gbWV0aG9kU3ltYm9sO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnN0IHRhcmdldCA9IG1ldGhvZFN5bWJvbC5pc1N0YXRpY1xuXHRcdFx0XHRcdFx0PyBjbGFzc1N5bWJvbC5zdGF0aWNNZXRob2RTeW1ib2xzXG5cdFx0XHRcdFx0XHQ6IGNsYXNzU3ltYm9sLmluc3RhbmNlTWV0aG9kU3ltYm9scztcblxuXHRcdFx0XHRcdHRhcmdldC5zZXQobWVtYmVyTm9kZS5uYW1lLCBtZXRob2RTeW1ib2wpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSByZWdpc3RlckludGVyZmFjZVN5bWJvbChpbnRlcmZhY2VOb2RlOiBBU1RJbnRlcmZhY2VOb2RlKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKGludGVyZmFjZU5vZGUubmFtZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBpbnRlcmZhY2VTY29wZSA9IG5ldyBUeXBlU2NvcGUoKTtcblx0XHRjb25zdCBpbnRlcmZhY2VTeW1ib2wgPSBuZXcgSW50ZXJmYWNlU3ltYm9sKGludGVyZmFjZU5vZGUpO1xuXG5cdFx0dGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5hZGRJbnRlcmZhY2VTeW1ib2woaW50ZXJmYWNlU3ltYm9sKTtcblxuXHRcdGludGVyZmFjZU5vZGUudHlwZVBhcmFtZXRlcnMuZm9yRWFjaChuYW1lID0+IHtcblx0XHRcdGludGVyZmFjZVN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5wdXNoKG5ldyBUeXBlUGFyYW1ldGVyU3ltYm9sKG5hbWUpKTtcblx0XHRcdGludGVyZmFjZVNjb3BlLmRlZmluZVR5cGVCaW5kaW5nKG5hbWUsIG5ldyBUeXBlVmFyaWFibGUobmFtZSkpO1xuXHRcdH0pO1xuXG5cdFx0Zm9yIChjb25zdCBpbnRlcmZhY2VOYW1lIG9mIGludGVyZmFjZU5vZGUuZXh0ZW5kc0ludGVyZmFjZXMpIHtcblx0XHRcdGNvbnN0IGludGVyZmFjZVN5bWJvbDogSW50ZXJmYWNlU3ltYm9sID0gdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRJbnRlcmFjZVN5bWJvbChpbnRlcmZhY2VOYW1lKTtcblxuXHRcdFx0aW50ZXJmYWNlU3ltYm9sLmV4dGVuZHNJbnRlcmZhY2VzLnB1c2goaW50ZXJmYWNlU3ltYm9sKTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IG1lbWJlck5vZGUgb2YgaW50ZXJmYWNlTm9kZS5jaGlsZHJlbikge1xuXHRcdFx0aWYgKG1lbWJlck5vZGUudHlwZSA9PT0gQVNUTm9kZVR5cGUuRklFTEQgJiYgbWVtYmVyTm9kZSBpbnN0YW5jZW9mIEFTVEZpZWxkTm9kZSkge1xuXHRcdFx0XHRjb25zdCBmaWVsZFN5bWJvbCA9IG5ldyBGaWVsZFN5bWJvbChcblx0XHRcdFx0XHRtZW1iZXJOb2RlLFxuXHRcdFx0XHRcdG1lbWJlck5vZGUuZmllbGRUeXBlXG5cdFx0XHRcdFx0XHQ/IHRoaXMud3JhcFR5cGUobWVtYmVyTm9kZS5maWVsZFR5cGUsIGludGVyZmFjZVNjb3BlKVxuXHRcdFx0XHRcdFx0OiBUeXBlcy5NSVhFRFxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdGZpZWxkU3ltYm9sLm93bmVyID0gaW50ZXJmYWNlU3ltYm9sO1xuXG5cdFx0XHRcdGludGVyZmFjZVN5bWJvbC5zdGF0aWNGaWVsZFN5bWJvbHMuc2V0KGZpZWxkU3ltYm9sLm5hbWUsIGZpZWxkU3ltYm9sKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKChtZW1iZXJOb2RlLnR5cGUgPT09IEFTVE5vZGVUeXBlLk1FVEhPRCkgJiYgbWVtYmVyTm9kZSBpbnN0YW5jZW9mIEFTVE1ldGhvZE5vZGUpIHtcblxuXHRcdFx0XHRjb25zdCBtZXRob2RTY29wZSA9IG5ldyBUeXBlU2NvcGUoaW50ZXJmYWNlU2NvcGUpO1xuXHRcdFx0XHRjb25zdCBtZXRob2RTeW1ib2wgPSBuZXcgTWV0aG9kU3ltYm9sKG1lbWJlck5vZGUpO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC5vd25lciA9IGludGVyZmFjZVN5bWJvbDtcblxuXHRcdFx0XHRtZW1iZXJOb2RlLnR5cGVQYXJhbWV0ZXJzLmZvckVhY2gobmFtZSA9PiB7XG5cdFx0XHRcdFx0bWV0aG9kU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLnB1c2gobmV3IFR5cGVQYXJhbWV0ZXJTeW1ib2wobmFtZSkpO1xuXHRcdFx0XHRcdG1ldGhvZFNjb3BlLmRlZmluZVR5cGVCaW5kaW5nKG5hbWUsIG5ldyBUeXBlVmFyaWFibGUobmFtZSkpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9scyA9IG1lbWJlck5vZGVcblx0XHRcdFx0XHQucGFyYW1ldGVyc1xuXHRcdFx0XHRcdC5tYXAocGFyYW1ldGVyTm9kZSA9PiB0aGlzLnBhcmFtZXRlck5vZGVUb1N5bWJvbChwYXJhbWV0ZXJOb2RlLCBtZXRob2RTY29wZSkpO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlID0gbWVtYmVyTm9kZS5yZXR1cm5UeXBlXG5cdFx0XHRcdFx0PyB0aGlzLndyYXBUeXBlKG1lbWJlck5vZGUucmV0dXJuVHlwZSwgbWV0aG9kU2NvcGUpXG5cdFx0XHRcdFx0OiBUeXBlcy5WT0lEO1xuXG5cdFx0XHRcdGludGVyZmFjZVN5bWJvbC5pbnN0YW5jZU1ldGhvZFN5bWJvbHMuc2V0KG1lbWJlck5vZGUubmFtZSwgbWV0aG9kU3ltYm9sKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHR5cGVFcnJvcihtZXNzYWdlOiBzdHJpbmcsIG5vZGU6IEFTVE5vZGUgfCBudWxsID0gbnVsbCk6IG5ldmVyIHtcblx0XHR0aHJvd1R5cGVFcnJvcihtZXNzYWdlLCBub2RlPy5zcGFuKTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB7QVNUSW1wb3J0Tm9kZSwgQVNUTm9kZSwgQVNUTm9kZVR5cGV9IGZyb20gXCIuLi9hc3RcIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcbmltcG9ydCB7UGFyc2VyfSBmcm9tIFwiLi4vcGFyc2VyL3BhcnNlclwiO1xuaW1wb3J0IHtFbnZpcm9ubWVudH0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB0eXBlIHtBYnN0cmFjdEZpbGVMb2FkZXJ9IGZyb20gXCIuLi9sb2FkZXJzXCI7XG5pbXBvcnQge3Rocm93UnVudGltZUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5cbmV4cG9ydCBjbGFzcyBEZXBlbmRlbmN5IHtcblx0b2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5ID0gbmV3IE9iamVjdFJlZ2lzdHJ5KCk7XG5cdG5hbWVzOiBzdHJpbmdbXTtcblx0dXJsOiBzdHJpbmc7XG5cdGFzdDogQVNUTm9kZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWVzOiBzdHJpbmdbXSwgdXJsOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hbWVzID0gbmFtZXM7XG5cdFx0dGhpcy51cmwgPSB1cmw7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIERlcGVuZGVuY3lMb2FkZXIge1xuXHRlbnZpcm9ubWVudDogRW52aXJvbm1lbnQ7XG5cdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeTtcblx0ZmlsZUxvYWRlcjogQWJzdHJhY3RGaWxlTG9hZGVyO1xuXG5cdGNvbnN0cnVjdG9yKGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBmaWxlTG9hZGVyOiBBYnN0cmFjdEZpbGVMb2FkZXIpIHtcblx0XHR0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG5cdFx0dGhpcy5vYmplY3RSZWdpc3RyeSA9IG9iamVjdFJlZ2lzdHJ5O1xuXHRcdHRoaXMuZmlsZUxvYWRlciA9IGZpbGVMb2FkZXI7XG5cdH1cblxuXHRhc3luYyBwYXJzZURlcGVuZGVuY3koZGVwZW5kZW5jeTogRGVwZW5kZW5jeSk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiBhd2FpdCB0aGlzLnBhcnNlRmlsZShkZXBlbmRlbmN5LnVybClcblx0XHQgICAgICAgICAgICAgICAgIC50aGVuKGFzdCA9PiBkZXBlbmRlbmN5LmFzdCA9IGFzdClcblx0XHQgICAgICAgICAgICAgICAgIC50aGVuKGFzdCA9PiBkZXBlbmRlbmN5Lm9iamVjdFJlZ2lzdHJ5LmNvbGxlY3RBbGwoYXN0KSk7XG5cdH1cblxuXHRhc3luYyBjb2xsZWN0RGVwZW5kZW5jaWVzKGRlcGVuZGVuY3k6IERlcGVuZGVuY3ksIGRlcGVuZGVuY2llczogTWFwPHN0cmluZywgRGVwZW5kZW5jeT4pOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gYXdhaXQgdGhpcy5jb2xsZWN0UHJvZ3JhbURlcGVuZGVuY2llcyhkZXBlbmRlbmN5LmFzdClcblx0XHQgICAgICAgICAgICAgICAgIC50aGVuKGNsYXNzRGVwZW5kZW5jaWVzID0+IHtcblx0XHRcdCAgICAgICAgICAgICAgICAgY2xhc3NEZXBlbmRlbmNpZXMuZm9yRWFjaChjbGFzc0RlcGVuZGVuY3kgPT4ge1xuXHRcdFx0XHQgICAgICAgICAgICAgICAgIGlmIChkZXBlbmRlbmNpZXMuaGFzKGNsYXNzRGVwZW5kZW5jeS51cmwpKSB7XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICByZXR1cm47XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgfVxuXHRcdFx0XHQgICAgICAgICAgICAgICAgIGRlcGVuZGVuY2llcy5zZXQoY2xhc3NEZXBlbmRlbmN5LnVybCwgY2xhc3NEZXBlbmRlbmN5KTtcblx0XHRcdCAgICAgICAgICAgICAgICAgfSk7XG5cdFx0ICAgICAgICAgICAgICAgICB9KTtcblx0fVxuXG5cdGFzeW5jIGNvbGxlY3RQcm9ncmFtRGVwZW5kZW5jaWVzKGFzdDogQVNUTm9kZSB8IG51bGwpOiBQcm9taXNlPE1hcDxzdHJpbmcsIERlcGVuZGVuY3k+PiB7XG5cdFx0aWYgKGFzdCA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIG5ldyBNYXAoKTtcblx0XHR9XG5cblx0XHRjb25zdCBkZWZhdWx0RGVwZW5kZW5jaWVzID0gdGhpcy5kZWZhdWx0RGVwZW5kZW5jaWVzKCk7XG5cdFx0Zm9yIChjb25zdCBkZXBlbmRlbmN5IG9mIGRlZmF1bHREZXBlbmRlbmNpZXMudmFsdWVzKCkpIHtcblx0XHRcdGF3YWl0IHRoaXMucGFyc2VEZXBlbmRlbmN5KGRlcGVuZGVuY3kpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGRlcGVuZGVuY2llcyA9IHRoaXMuY29sbGVjdENsYXNzRGVwZW5kZW5jaWVzKGFzdCk7XG5cdFx0Zm9yIChjb25zdCBkZXBlbmRlbmN5IG9mIGRlcGVuZGVuY2llcy52YWx1ZXMoKSkge1xuXHRcdFx0YXdhaXQgdGhpcy5wYXJzZURlcGVuZGVuY3koZGVwZW5kZW5jeSk7XG5cdFx0XHRhd2FpdCB0aGlzLmNvbGxlY3REZXBlbmRlbmNpZXMoZGVwZW5kZW5jeSwgZGVwZW5kZW5jaWVzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IE1hcChbLi4uZGVmYXVsdERlcGVuZGVuY2llcywgLi4uZGVwZW5kZW5jaWVzXSk7XG5cdH1cblxuXHRkZWZhdWx0RGVwZW5kZW5jaWVzKCk6IE1hcDxzdHJpbmcsIERlcGVuZGVuY3k+IHtcblx0XHRjb25zdCBkZXBlbmRlbmNpZXMgPSBbXG5cdFx0XHRuZXcgRGVwZW5kZW5jeShbJ0l0ZXJhdG9yJywgJ0l0ZXJhYmxlJ10sICcvbGlicmFyeS9jb250cmFjdHMubHlyYScpXG5cdFx0XTtcblxuXHRcdGNvbnN0IG1hcCA9IG5ldyBNYXAoKTtcblx0XHRmb3IgKGNvbnN0IGRlcGVuZGVuY3kgb2YgZGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRtYXAuc2V0KGRlcGVuZGVuY3kudXJsLCBkZXBlbmRlbmN5KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWFwO1xuXHR9XG5cblx0Y29sbGVjdENsYXNzRGVwZW5kZW5jaWVzKGFzdDogQVNUTm9kZSk6IE1hcDxzdHJpbmcsIERlcGVuZGVuY3k+IHtcblx0XHRjb25zdCBjbGFzc0RlcGVuZGVuY2llcyA9IG5ldyBNYXAoKTtcblxuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChub2RlLnR5cGUgPT09IEFTVE5vZGVUeXBlLklNUE9SVCkge1xuXHRcdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEltcG9ydE5vZGUpIHtcblx0XHRcdFx0XHRpZiAobm9kZS5mcm9tID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGNsYXNzRGVwZW5kZW5jaWVzLmhhcyhub2RlLmZyb20pKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2xhc3NEZXBlbmRlbmNpZXMuc2V0KG5vZGUuZnJvbSwgbmV3IERlcGVuZGVuY3kobm9kZS5uYW1lcywgbm9kZS5mcm9tKSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgaW1wb3J0IG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGU/LnNwYW4pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzRGVwZW5kZW5jaWVzO1xuXHR9XG5cblx0cGFyc2VGaWxlKHVybDogc3RyaW5nKTogUHJvbWlzZTxBU1ROb2RlPiB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsZUxvYWRlclxuXHRcdCAgICAgICAgICAgLmxvYWQodXJsKVxuXHRcdCAgICAgICAgICAgLnRoZW4oY29kZSA9PiB0aGlzLnBhcnNlclNvdXJjZShuZXcgU291cmNlKGNvZGUsIHVybCkpKTtcblx0fVxuXG5cdHBhcnNlclNvdXJjZShzb3VyY2U6IFNvdXJjZSk6IEFTVE5vZGUge1xuXHRcdHJldHVybiBuZXcgUGFyc2VyKHNvdXJjZSkucGFyc2UoKTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0RlcGVuZGVuY3lMb2FkZXJ9IGZyb20gXCIuL2RlcGVuZGVuY2llc1wiO1xuaW1wb3J0IHtBU1RJbXBvcnROb2RlLCBBU1ROb2RlfSBmcm9tIFwiLi4vYXN0XCI7XG5pbXBvcnQge05hdGl2ZUNsYXNzZXN9IGZyb20gXCIuLi8uLi9saWJyYXJ5L25hdGl2ZV9jbGFzc2VzXCI7XG5pbXBvcnQge0NsYXNzRGVmaW5pdGlvbiwgRW52aXJvbm1lbnQsIEludGVyZmFjZURlZmluaXRpb259IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB0eXBlIHtBYnN0cmFjdEZpbGVMb2FkZXJ9IGZyb20gXCIuLi9sb2FkZXJzXCI7XG5pbXBvcnQgdHlwZSB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi8uLi9saWJyYXJ5L25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHt0aHJvd0RlcGVuZGVuY3lFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuXG5jb25zdCBuYXRpdmVDbGFzc2VzID0gbmV3IE5hdGl2ZUNsYXNzZXMoKTtcblxuZXhwb3J0IGNsYXNzIExpbmtlciB7XG5cdGVudmlyb25tZW50OiBFbnZpcm9ubWVudDtcblx0b2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5O1xuXHRkZXBlbmRlbmN5TG9hZGVyOiBEZXBlbmRlbmN5TG9hZGVyO1xuXG5cdGNvbnN0cnVjdG9yKGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBmaWxlTG9hZGVyOiBBYnN0cmFjdEZpbGVMb2FkZXIpIHtcblx0XHR0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG5cdFx0dGhpcy5vYmplY3RSZWdpc3RyeSA9IG9iamVjdFJlZ2lzdHJ5O1xuXHRcdHRoaXMuZGVwZW5kZW5jeUxvYWRlciA9IG5ldyBEZXBlbmRlbmN5TG9hZGVyKGVudmlyb25tZW50LCBvYmplY3RSZWdpc3RyeSwgZmlsZUxvYWRlcik7XG5cdH1cblxuXHRsaW5rU291cmNlcyhhc3Q6IEFTVE5vZGUpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gdGhpcy5kZXBlbmRlbmN5TG9hZGVyXG5cdFx0ICAgICAgICAgICAuY29sbGVjdFByb2dyYW1EZXBlbmRlbmNpZXMoYXN0KVxuXHRcdCAgICAgICAgICAgLnRoZW4oZGVwZW5kZW5jaWVzID0+IHtcblx0XHRcdCAgICAgICAgICAgZm9yIChjb25zdCBkZXBlbmRlbmN5IG9mIGRlcGVuZGVuY2llcy52YWx1ZXMoKSkge1xuXHRcdFx0XHQgICAgICAgICAgIGNvbnN0IG9iamVjdERlZmluaXRpb25zID0gZGVwZW5kZW5jeS5vYmplY3RSZWdpc3RyeVxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mZXRjaEFsbE9iamVjdERlZmluaXRpb25zKClcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmFsdWVzKCk7XG5cdFx0XHRcdCAgICAgICAgICAgZm9yIChsZXQgb2JqZWN0RGVmIG9mIG9iamVjdERlZmluaXRpb25zKSB7XG5cdFx0XHRcdFx0ICAgICAgICAgICBpZiAob2JqZWN0RGVmIGluc3RhbmNlb2YgSW50ZXJmYWNlRGVmaW5pdGlvbikge1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICB0aGlzLm9iamVjdFJlZ2lzdHJ5LmludGVyZmFjZXMuc2V0KG9iamVjdERlZi5uYW1lLCBvYmplY3REZWYpO1xuXHRcdFx0XHRcdCAgICAgICAgICAgfSBlbHNlIHtcblx0XHRcdFx0XHRcdCAgICAgICAgICAgdGhpcy5vYmplY3RSZWdpc3RyeS5jbGFzc2VzLnNldChvYmplY3REZWYubmFtZSwgb2JqZWN0RGVmKTtcblx0XHRcdFx0XHQgICAgICAgICAgIH1cblx0XHRcdFx0XHQgICAgICAgICAgIHRoaXMuZW52aXJvbm1lbnQuZGVmaW5lKG9iamVjdERlZi5uYW1lLCBvYmplY3REZWYpO1xuXHRcdFx0XHQgICAgICAgICAgIH1cblx0XHRcdCAgICAgICAgICAgfVxuXHRcdCAgICAgICAgICAgfSlcblx0XHQgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMubG9hZE5hdGl2ZUNsYXNzZXMoYXN0KSlcblx0fVxuXG5cdGxvYWROYXRpdmVDbGFzc2VzKGFzdDogQVNUTm9kZSk6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUSW1wb3J0Tm9kZSkge1xuXHRcdFx0XHRpZiAobm9kZS5mcm9tID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Y29uc3QgY2xhc3NOYW1lID0gbm9kZS5uYW1lc1swXTtcblx0XHRcdFx0XHRpZiAoIWNsYXNzTmFtZSkge1xuXHRcdFx0XHRcdFx0dGhyb3dEZXBlbmRlbmN5RXJyb3IoYEludmFsaWQgaW1wb3J0IG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGU/LnNwYW4pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zdCBuYXRpdmVDbGFzczogTmF0aXZlQ2xhc3MgfCBudWxsID0gbmF0aXZlQ2xhc3Nlcy5yZWdpc3RyeS5nZXQoY2xhc3NOYW1lKSB8fCBudWxsO1xuXHRcdFx0XHRcdGlmICghbmF0aXZlQ2xhc3MpIHtcblx0XHRcdFx0XHRcdHRocm93RGVwZW5kZW5jeUVycm9yKGBVbmtub3duIG5hdGl2ZSBjbGFzcyAke2NsYXNzTmFtZX1gLCBub2RlPy5zcGFuKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc3QgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiA9IG5hdGl2ZUNsYXNzLmdldENsYXNzRGVmaW5pdGlvbigpO1xuXHRcdFx0XHRcdGlmICh0aGlzLm9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuaGFzKGNsYXNzTmFtZSkpIHtcblx0XHRcdFx0XHRcdHRocm93RGVwZW5kZW5jeUVycm9yKGBDb3VsZCBub3QgcmVzb2x2ZSBjbGFzcyAke2NsYXNzTmFtZX0uYCwgbm9kZT8uc3Bhbik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMub2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5zZXQoY2xhc3NOYW1lLCBjbGFzc0RlZik7XG5cdFx0XHRcdFx0dGhpcy5lbnZpcm9ubWVudC5kZWZpbmUoY2xhc3NOYW1lLCBjbGFzc0RlZik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtBU1RBbm5vdGF0aW9uTm9kZSwgQVNUQ2xhc3NOb2RlLCBBU1RNZXRob2ROb2RlLCBBU1ROb2RlfSBmcm9tIFwiLi4vYXN0XCI7XG5pbXBvcnQge2NhbGxJbnN0YW5jZU1ldGhvZCwgZXZhbEFubm90YXRpb25Qcm9wZXJ0aWVzfSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcnVudGltZVwiO1xuaW1wb3J0IHtDbGFzc0RlZmluaXRpb24sIHR5cGUgRW52aXJvbm1lbnQsIEluc3RhbmNlfSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHR5cGUge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB0eXBlIHtFdmVudFBpcGVsaW5lfSBmcm9tIFwiLi4vZXZlbnQvcGlwZWxpbmVcIjtcblxuZXhwb3J0IGNsYXNzIFRlc3RTdWl0ZXMge1xuXHRwcml2YXRlIHJlYWRvbmx5IGVudmlyb25tZW50OiBFbnZpcm9ubWVudDtcblx0cHJpdmF0ZSByZWFkb25seSBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cdHByaXZhdGUgcmVhZG9ubHkgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZTtcblxuXHRjb25zdHJ1Y3RvcihlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSkge1xuXHRcdHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5ID0gb2JqZWN0UmVnaXN0cnk7XG5cdFx0dGhpcy5ldmVudFBpcGVsaW5lID0gZXZlbnRQaXBlbGluZTtcblx0fVxuXG5cdHJ1bihhc3Q6IEFTVE5vZGUpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgYXN0LmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVENsYXNzTm9kZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhg8J+nqiBSdW5uaW5nIFRlc3QgQ2FzZXMgZm9yICR7bm9kZS5uYW1lfSAuLi5gKTtcblx0XHRcdFx0dGhpcy5ydW5UZXN0Q2FzZXMobm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBydW5UZXN0Q2FzZXMoY2xhc3NOb2RlOiBBU1RDbGFzc05vZGUpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IG1lbWJlciBvZiBjbGFzc05vZGUuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChtZW1iZXIgaW5zdGFuY2VvZiBBU1RNZXRob2ROb2RlKSB7XG5cdFx0XHRcdGNvbnN0IGFubm90YXRpb246IEFTVEFubm90YXRpb25Ob2RlIHwgdW5kZWZpbmVkID0gbWVtYmVyLmFubm90YXRpb25zXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5maW5kKGFubm90YXRpb24gPT4gYW5ub3RhdGlvbi5uYW1lID09PSAndGVzdCcpO1xuXHRcdFx0XHRpZiAoIWFubm90YXRpb24pIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnJ1blRlc3RDYXNlKGNsYXNzTm9kZSwgbWVtYmVyLCBhbm5vdGF0aW9uKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJ1blRlc3RDYXNlKGNsYXNzTm9kZTogQVNUQ2xhc3NOb2RlLCBtZXRob2ROb2RlOiBBU1RNZXRob2ROb2RlLCBhbm5vdGF0aW9uOiBBU1RBbm5vdGF0aW9uTm9kZSk6IHZvaWQge1xuXHRcdGNvbnN0IGluc3RhbmNlOiBJbnN0YW5jZSA9IENsYXNzRGVmaW5pdGlvbi5mcm9tQVNUKGNsYXNzTm9kZSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uc3RydWN0TmV3SW5zdGFuY2VXaXRob3V0QXJndW1lbnRzKFxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmplY3RSZWdpc3RyeSxcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW52aXJvbm1lbnQsXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50UGlwZWxpbmVcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuXG5cdFx0Y29uc3QgcHJvcGVydGllczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0gZXZhbEFubm90YXRpb25Qcm9wZXJ0aWVzKGFubm90YXRpb24pO1xuXHRcdGNvbnN0IHRpdGxlOiBzdHJpbmcgPSBwcm9wZXJ0aWVzLnRpdGxlID8/IGAke2NsYXNzTm9kZS5uYW1lfS4ke21ldGhvZE5vZGUubmFtZX1gO1xuXG5cdFx0bGV0IGVycm9yTWVzc2FnZSA9IG51bGw7XG5cblx0XHR0cnkge1xuXHRcdFx0Y2FsbEluc3RhbmNlTWV0aG9kKGluc3RhbmNlLCBtZXRob2ROb2RlLCBbXSwgdGhpcy5vYmplY3RSZWdpc3RyeSwgdGhpcy5lbnZpcm9ubWVudCwgdGhpcy5ldmVudFBpcGVsaW5lKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0ZXJyb3JNZXNzYWdlID0gZXJyb3I7XG5cdFx0fVxuXG5cdFx0aWYgKGVycm9yTWVzc2FnZSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcihgIOKdjCAke3RpdGxlfSwgJHtlcnJvck1lc3NhZ2V9YCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKGAg4pyFICR7dGl0bGV9YCk7XG5cdFx0fVxuXHR9XG59XG4iLAogICAgImltcG9ydCB7QVNUTm9kZX0gZnJvbSAnLi4vYXN0LnRzJztcbmltcG9ydCB7RW52aXJvbm1lbnR9IGZyb20gXCIuL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7ZXZhbE5vZGUsIHJlZ2lzdGVyTmF0aXZlQ2xhc3NlcywgcmVnaXN0ZXJOYXRpdmVGdW5jdGlvbnN9IGZyb20gXCIuL2ludGVycHJldGVyX3J1bnRpbWVcIjtcbmltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5pbXBvcnQgdHlwZSB7RXZlbnRQaXBlbGluZX0gZnJvbSBcIi4uL2V2ZW50L3BpcGVsaW5lXCI7XG5cbmV4cG9ydCBjbGFzcyBJbnRlcnByZXRlciB7XG5cdGVudmlyb25tZW50OiBFbnZpcm9ubWVudDtcblx0b2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5O1xuXHRldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdGVudmlyb25tZW50OiBFbnZpcm9ubWVudCxcblx0XHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksXG5cdFx0ZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZVxuXHQpIHtcblx0XHR0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG5cdFx0dGhpcy5vYmplY3RSZWdpc3RyeSA9IG9iamVjdFJlZ2lzdHJ5O1xuXHRcdHRoaXMuZXZlbnRQaXBlbGluZSA9IGV2ZW50UGlwZWxpbmU7XG5cblx0XHRyZWdpc3Rlck5hdGl2ZUNsYXNzZXMob2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50KTtcblx0XHRyZWdpc3Rlck5hdGl2ZUZ1bmN0aW9ucyhlbnZpcm9ubWVudCk7XG5cdH1cblxuXHRydW4oYXN0OiBBU1ROb2RlKSB7XG5cdFx0ZXZhbE5vZGUoYXN0LCB0aGlzLm9iamVjdFJlZ2lzdHJ5LCB0aGlzLmVudmlyb25tZW50LCB0aGlzLmV2ZW50UGlwZWxpbmUpO1xuXHR9XG59XG4iLAogICAgImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEZpbGVMb2FkZXIge1xuXHRhYnN0cmFjdCBsb2FkKHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+O1xufVxuXG5leHBvcnQgY2xhc3MgRmV0Y2hGaWxlTG9hZGVyIGV4dGVuZHMgQWJzdHJhY3RGaWxlTG9hZGVyIHtcblx0b3ZlcnJpZGUgbG9hZCh1cmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIGZldGNoKHVybClcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcblx0fVxufVxuIiwKICAgICJleHBvcnQgdHlwZSBFdmVudEhhbmRsZXI8VCA9IGFueT4gPSAocGF5bG9hZDogVCkgPT4gdm9pZDtcblxuZXhwb3J0IGNsYXNzIEV2ZW50UGlwZWxpbmUge1xuXHRwcml2YXRlIGxpc3RlbmVyczogTWFwPHN0cmluZywgU2V0PEV2ZW50SGFuZGxlcj4+ID0gbmV3IE1hcDxzdHJpbmcsIFNldDxFdmVudEhhbmRsZXI+PigpO1xuXG5cdG9uPFQgPSBhbnk+KGV2ZW50OiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50SGFuZGxlcjxUPik6IHZvaWQge1xuXHRcdGlmICghdGhpcy5saXN0ZW5lcnMuaGFzKGV2ZW50KSkge1xuXHRcdFx0dGhpcy5saXN0ZW5lcnMuc2V0KGV2ZW50LCBuZXcgU2V0KCkpO1xuXHRcdH1cblx0XHR0aGlzLmxpc3RlbmVycy5nZXQoZXZlbnQpIS5hZGQoaGFuZGxlcik7XG5cdH1cblxuXHRvZmY8VCA9IGFueT4oZXZlbnQ6IHN0cmluZywgaGFuZGxlcjogRXZlbnRIYW5kbGVyPFQ+KTogdm9pZCB7XG5cdFx0dGhpcy5saXN0ZW5lcnMuZ2V0KGV2ZW50KVxuXHRcdCAgICA/LmRlbGV0ZShoYW5kbGVyKTtcblx0fVxuXG5cdGVtaXQ8VCA9IGFueT4oZXZlbnQ6IHN0cmluZywgcGF5bG9hZDogVCk6IHZvaWQge1xuXHRcdHRoaXMubGlzdGVuZXJzLmdldChldmVudClcblx0XHQgICAgPy5mb3JFYWNoKChoYW5kbGVyOiBFdmVudEhhbmRsZXIpOiB2b2lkID0+IGhhbmRsZXIocGF5bG9hZCkpO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7U291cmNlfSBmcm9tIFwiLi9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuaW1wb3J0IHtFbnZpcm9ubWVudH0gZnJvbSBcIi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB7VHlwZUNoZWNrZXJ9IGZyb20gXCIuL3R5cGVzL3R5cGVjaGVja2VyXCI7XG5pbXBvcnQge0xpbmtlcn0gZnJvbSBcIi4vbGlua2VyL2xpbmtlclwiO1xuaW1wb3J0IHtUZXN0U3VpdGVzfSBmcm9tIFwiLi90ZXN0cy90ZXN0c3VpdGVzXCI7XG5pbXBvcnQge0ludGVycHJldGVyfSBmcm9tIFwiLi9pbnRlcnByZXRlci9pbnRlcnByZXRlclwiO1xuaW1wb3J0IHtGZXRjaEZpbGVMb2FkZXJ9IGZyb20gXCIuL2xvYWRlcnNcIjtcbmltcG9ydCB7QVNUTm9kZX0gZnJvbSBcIi4vYXN0XCI7XG5pbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4vcGFyc2VyL3BhcnNlclwiO1xuaW1wb3J0IHtFdmVudFBpcGVsaW5lfSBmcm9tIFwiLi9ldmVudC9waXBlbGluZVwiO1xuXG5leHBvcnQgY2xhc3MgTHlyYVNjcmlwdFByb2dyYW0ge1xuXHRwcml2YXRlIGdsb2JhbEVudmlyb25tZW50OiBFbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudCgpO1xuXHRwcml2YXRlIGdsb2JhbE9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSA9IG5ldyBPYmplY3RSZWdpc3RyeSgpO1xuXHRwcml2YXRlIGdsb2JhbEV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmU7XG5cblx0cHJpdmF0ZSB0eXBlQ2hlY2tlcjogVHlwZUNoZWNrZXIgPSBuZXcgVHlwZUNoZWNrZXIodGhpcy5nbG9iYWxPYmplY3RSZWdpc3RyeSk7XG5cdHByaXZhdGUgbGlua2VyOiBMaW5rZXIgPSBuZXcgTGlua2VyKHRoaXMuZ2xvYmFsRW52aXJvbm1lbnQsIHRoaXMuZ2xvYmFsT2JqZWN0UmVnaXN0cnksIG5ldyBGZXRjaEZpbGVMb2FkZXIoKSk7XG5cblx0cHJpdmF0ZSBpbnRlcnByZXRlcjogSW50ZXJwcmV0ZXI7XG5cdHByaXZhdGUgdGVzdFN1aXRlOiBUZXN0U3VpdGVzO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyID0gMDtcblxuXHRjb25zdHJ1Y3Rvcihpc0RlYnVnOiBib29sZWFuID0gZmFsc2UsIGdsb2JhbEV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUgPSBuZXcgRXZlbnRQaXBlbGluZSgpKSB7XG5cdFx0dGhpcy5pc0RlYnVnID0gaXNEZWJ1ZztcblxuXHRcdHRoaXMuaW50ZXJwcmV0ZXIgPSBuZXcgSW50ZXJwcmV0ZXIoXG5cdFx0XHR0aGlzLmdsb2JhbEVudmlyb25tZW50LFxuXHRcdFx0dGhpcy5nbG9iYWxPYmplY3RSZWdpc3RyeSxcblx0XHRcdGdsb2JhbEV2ZW50UGlwZWxpbmVcblx0XHQpO1xuXG5cdFx0dGhpcy50ZXN0U3VpdGUgPSBuZXcgVGVzdFN1aXRlcyhcblx0XHRcdHRoaXMuZ2xvYmFsRW52aXJvbm1lbnQsXG5cdFx0XHR0aGlzLmdsb2JhbE9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0Z2xvYmFsRXZlbnRQaXBlbGluZVxuXHRcdCk7XG5cblx0XHR0aGlzLmdsb2JhbEV2ZW50UGlwZWxpbmUgPSBnbG9iYWxFdmVudFBpcGVsaW5lO1xuXHR9XG5cblx0Z2V0R2xvYmFsT2JqZWN0UmVnaXN0cnkoKTogT2JqZWN0UmVnaXN0cnkge1xuXHRcdHJldHVybiB0aGlzLmdsb2JhbE9iamVjdFJlZ2lzdHJ5O1xuXHR9XG5cblxuXHRnZXRHbG9iYWxFbnZpcm9ubWVudCgpOiBFbnZpcm9ubWVudCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2xvYmFsRW52aXJvbm1lbnQ7XG5cdH1cblxuXHRnZXRHbG9iYWxFdmVudFBpcGVsaW5lKCk6IEV2ZW50UGlwZWxpbmUge1xuXHRcdHJldHVybiB0aGlzLmdsb2JhbEV2ZW50UGlwZWxpbmU7XG5cdH1cblxuXHRhc3luYyBleGVjdXRlKHNvdXJjZTogU291cmNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHRoaXMucnVuUGlwZWxpbmUoc291cmNlKVxuXHRcdCAgICAgICAgICAgLnRoZW4oKGFzdDogQVNUTm9kZSkgPT4ge1xuXHRcdFx0ICAgICAgICAgICB0aGlzLmRlYnVnTWVhc3VyZVN0YXJ0VGltZSgpO1xuXHRcdFx0ICAgICAgICAgICB0aGlzLmludGVycHJldGVyLnJ1bihhc3QpO1xuXHRcdFx0ICAgICAgICAgICB0aGlzLmRlYnVnTWVhc3VyZUVuZFRpbWUoJ2ludGVycHJldGVyJyk7XG5cdFx0ICAgICAgICAgICB9KTtcblx0fVxuXG5cdGFzeW5jIGV4ZWN1dGVUZXN0KHNvdXJjZTogU291cmNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHRoaXMucnVuUGlwZWxpbmUoc291cmNlKVxuXHRcdCAgICAgICAgICAgLnRoZW4oKGFzdDogQVNUTm9kZSkgPT4ge1xuXHRcdFx0ICAgICAgICAgICB0aGlzLmRlYnVnTWVhc3VyZVN0YXJ0VGltZSgpO1xuXHRcdFx0ICAgICAgICAgICB0aGlzLnRlc3RTdWl0ZS5ydW4oYXN0KTtcblx0XHRcdCAgICAgICAgICAgdGhpcy5kZWJ1Z01lYXN1cmVFbmRUaW1lKCd0ZXN0Jyk7XG5cdFx0ICAgICAgICAgICB9KTtcblx0fVxuXG5cdGRlYnVnKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pc0RlYnVnKSB7XG5cdFx0XHRjb25zb2xlLmxvZyh2YWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0ZGVidWdNZWFzdXJlU3RhcnRUaW1lKCk6IHZvaWQge1xuXHRcdHRoaXMuc3RhcnRUaW1lID0gdGhpcy5kZWJ1Z1RpbWVzdGFtcCgpO1xuXHR9XG5cblx0ZGVidWdNZWFzdXJlRW5kVGltZShtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmRlYnVnKG1lc3NhZ2UgKyAnOiAnICsgKHRoaXMuZGVidWdUaW1lc3RhbXAoKSAtIHRoaXMuc3RhcnRUaW1lKSArICdtcycpO1xuXHR9XG5cblx0ZGVidWdUaW1lc3RhbXAoKTogbnVtYmVyIHtcblx0XHRpZiAoIXRoaXMuaXNEZWJ1Zykge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXHRcdHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcblx0fVxuXG5cdHByaXZhdGUgYXN5bmMgcnVuUGlwZWxpbmUoc291cmNlOiBTb3VyY2UpOiBQcm9taXNlPEFTVE5vZGU+IHtcblx0XHR0aGlzLmRlYnVnTWVhc3VyZVN0YXJ0VGltZSgpXG5cdFx0Y29uc3QgYXN0OiBBU1ROb2RlID0gbmV3IFBhcnNlcihzb3VyY2UpLnBhcnNlKCk7XG5cdFx0dGhpcy5kZWJ1Z01lYXN1cmVFbmRUaW1lKCdwYXJzZXInKVxuXHRcdHRoaXMuZGVidWcoYXN0KTtcblxuXHRcdHJldHVybiB0aGlzLmxpbmtlci5saW5rU291cmNlcyhhc3QpXG5cdFx0ICAgICAgICAgICAudGhlbigoKSA9PiB7XG5cdFx0XHQgICAgICAgICAgIHRoaXMudHlwZUNoZWNrZXIuY29sbGVjdEFsbFN5bWJvbHNGcm9tUmVnaXN0cnkodGhpcy5nbG9iYWxPYmplY3RSZWdpc3RyeSk7XG5cdFx0ICAgICAgICAgICB9KVxuXHRcdCAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuXHRcdFx0ICAgICAgICAgICB0aGlzLmRlYnVnTWVhc3VyZVN0YXJ0VGltZSgpO1xuXHRcdFx0ICAgICAgICAgICB0aGlzLnR5cGVDaGVja2VyLmNoZWNrKGFzdCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlRW5kVGltZSgndHlwZWNoZWNrZXInKTtcblxuXHRcdFx0ICAgICAgICAgICByZXR1cm4gYXN0O1xuXHRcdCAgICAgICAgICAgfSk7XG5cdH1cbn1cbiIsCiAgICAiY29uc3QgRE9NX0VWRU5UOiBzdHJpbmcgPSAnZG9tOmV2ZW50JztcblxuY29uc3QgaXNFdmVudDogKHByb3BlcnR5S2V5OiBzdHJpbmcpID0+IGJvb2xlYW4gPSAocHJvcGVydHlLZXk6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuXHRyZXR1cm4gcHJvcGVydHlLZXkudG9Mb3dlckNhc2UoKVxuXHQgICAgICAgICAgICAgICAgICAuc3RhcnRzV2l0aCgnb24nKTtcbn1cblxuZXhwb3J0IGNvbnN0IEV2ZW50cyA9IHtcblx0RE9NX0VWRU5ULFxuXHRpc0V2ZW50LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzO1xuIiwKICAgICIvLy8gPHJlZmVyZW5jZSBsaWI9XCJkb21cIiAvPlxuXG5pbXBvcnQgdHlwZSB7Vk5vZGV9IGZyb20gXCIuLi9jb3JlL3Zkb20vdmRvbVwiO1xuaW1wb3J0IHtMYW1iZGFGdW5jdGlvbkNhbGx9IGZyb20gXCIuLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX3J1bnRpbWVcIjtcbmltcG9ydCBFdmVudHMgZnJvbSBcIi4vZXZlbnRzXCI7XG5pbXBvcnQgdHlwZSB7QXBwbGljYXRpb25SdW50aW1lfSBmcm9tIFwiLi9ydW50aW1lXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudENyZWF0b3Ige1xuXHRjcmVhdGUodk5vZGU6IFZOb2RlIHwgc3RyaW5nKTogTm9kZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbGVtZW50UGF0Y2hlciB7XG5cdHBhdGNoKG9sZFZOb2RlOiBWTm9kZSB8IHN0cmluZyB8IG51bGwsIG5ld1ZOb2RlOiBWTm9kZSB8IHN0cmluZyk6IHZvaWRcbn1cblxuZXhwb3J0IGNsYXNzIEhUTUxFbGVtZW50Q3JlYXRvciBpbXBsZW1lbnRzIEVsZW1lbnRDcmVhdG9yIHtcblx0cHJpdmF0ZSB0ZXh0QnVmZmVyOiBzdHJpbmdbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgYXBwbGljYXRpb25SdW50aW1lOiBBcHBsaWNhdGlvblJ1bnRpbWVcblx0KSB7XG5cdH1cblxuXHRwdWJsaWMgY3JlYXRlKHZOb2RlOiBWTm9kZSB8IHN0cmluZyk6IE5vZGUge1xuXHRcdGlmICh0eXBlb2Ygdk5vZGUgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2Tm9kZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHZOb2RlLmlzQ29tcG9uZW50ICYmIHZOb2RlLmNvbXBvbmVudCA9PT0gbnVsbCkge1xuXHRcdFx0dk5vZGUuY29tcG9uZW50ID0gdGhpcy5hcHBsaWNhdGlvblJ1bnRpbWUuY3JlYXRlSW5zdGFuY2Uodk5vZGUudGFnKTtcblxuXHRcdFx0Zm9yIChjb25zdCBbcHJvcGVydHlLZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh2Tm9kZS5wcm9wcykpIHtcblx0XHRcdFx0aWYgKHZOb2RlLmNvbXBvbmVudC5oYXNQdWJsaWNQcm9wZXJ0eShwcm9wZXJ0eUtleSkpIHtcblx0XHRcdFx0XHR2Tm9kZS5jb21wb25lbnQuc2V0UHVibGljUHJvcGVydHkocHJvcGVydHlLZXksIHZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXNcblx0XHRcdFx0LmNyZWF0ZSh0aGlzLmFwcGxpY2F0aW9uUnVudGltZS5jYWxsTWV0aG9kKHZOb2RlLmNvbXBvbmVudCwgJ3JlbmRlcicsIFtdKSBhcyBWTm9kZSkgYXMgSFRNTEVsZW1lbnQ7XG5cblx0XHRcdGZvciAoY29uc3QgW3Byb3BlcnR5S2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModk5vZGUucHJvcHMpKSB7XG5cdFx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKHByb3BlcnR5S2V5LCBTdHJpbmcodmFsdWUpKTtcblx0XHRcdH1cblxuXHRcdFx0dk5vZGUuZG9tID0gZWxlbWVudDtcblxuXHRcdFx0cmV0dXJuIHZOb2RlLmRvbTtcblx0XHR9XG5cblx0XHRjb25zdCBmbHVzaFRleHRCdWZmZXI6ICgpID0+IHZvaWQgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRjb25zdCB0ZXh0OiBOb2RlIHwgbnVsbCA9IHRoaXMuZmx1c2hUZXh0QnVmZmVyKCk7XG5cdFx0XHRpZiAodGV4dCkge1xuXHRcdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKHRleHQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh2Tm9kZS50YWcpIGFzIEhUTUxFbGVtZW50O1xuXHRcdHZOb2RlLmRvbSA9IGVsZW1lbnQ7XG5cblx0XHRmb3IgKGNvbnN0IFtwcm9wZXJ0eUtleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHZOb2RlLnByb3BzKSkge1xuXHRcdFx0aWYgKEV2ZW50cy5pc0V2ZW50KHByb3BlcnR5S2V5KSkge1xuXHRcdFx0XHR0aGlzLmFwcGxpY2F0aW9uUnVudGltZS5hZGRFdmVudEhhbmRsZXIoZWxlbWVudCwgcHJvcGVydHlLZXksIHZhbHVlIGFzIExhbWJkYUZ1bmN0aW9uQ2FsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShwcm9wZXJ0eUtleSwgU3RyaW5nKHZhbHVlKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiB2Tm9kZS5jaGlsZHJlbikge1xuXHRcdFx0aWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0dGhpcy50ZXh0QnVmZmVyLnB1c2goY2hpbGQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZShjaGlsZCkgYXMgSFRNTEVsZW1lbnQpO1xuXHRcdFx0fVxuXG5cdFx0XHRmbHVzaFRleHRCdWZmZXIoKTtcblx0XHR9XG5cblx0XHRmbHVzaFRleHRCdWZmZXIoKTtcblxuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9XG5cblx0cHJpdmF0ZSBmbHVzaFRleHRCdWZmZXIoKTogTm9kZSB8IG51bGwge1xuXHRcdGlmICh0aGlzLnRleHRCdWZmZXIubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y29uc3QgZWxlbWVudDogVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMudGV4dEJ1ZmZlci5qb2luKCcnKSk7XG5cdFx0dGhpcy50ZXh0QnVmZmVyID0gW107XG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEhUTUxFbGVtZW50UGF0Y2hlciBpbXBsZW1lbnRzIEVsZW1lbnRQYXRjaGVyIHtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBtb3VudFBvaW50OiBIVE1MRWxlbWVudCxcblx0ICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBhcHBsaWNhdGlvblJ1bnRpbWU6IEFwcGxpY2F0aW9uUnVudGltZSxcblx0ICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBlbGVtZW50Q3JlYXRvcjogRWxlbWVudENyZWF0b3IgPSBuZXcgSFRNTEVsZW1lbnRDcmVhdG9yKGFwcGxpY2F0aW9uUnVudGltZSkpIHtcblx0fVxuXG5cdHB1YmxpYyBwYXRjaChvbGRWTm9kZTogVk5vZGUgfCBzdHJpbmcgfCBudWxsLCBuZXdWTm9kZTogVk5vZGUgfCBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAob2xkVk5vZGUpIHtcblx0XHRcdHRoaXMucGF0Y2hOb2RlKHRoaXMubW91bnRQb2ludCwgb2xkVk5vZGUsIG5ld1ZOb2RlKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBlbGVtZW50OiBOb2RlID0gdGhpcy5lbGVtZW50Q3JlYXRvci5jcmVhdGUobmV3Vk5vZGUpO1xuXG5cdFx0dGhpcy5tb3VudFBvaW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG5cdFx0aWYgKHR5cGVvZiBuZXdWTm9kZSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdG5ld1ZOb2RlLmRvbSA9IGVsZW1lbnQ7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBwYXRjaE5vZGUocGFyZW50OiBOb2RlLCBvbGROb2RlOiBWTm9kZSB8IHN0cmluZywgbmV3Tm9kZTogVk5vZGUgfCBzdHJpbmcpOiB2b2lkIHtcblxuXHRcdGlmICh0eXBlb2Ygb2xkTm9kZSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIG5ld05vZGUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRpZiAob2xkTm9kZSAhPT0gbmV3Tm9kZSkge1xuXHRcdFx0XHRjb25zdCB0ZXh0Tm9kZTogQ2hpbGROb2RlIHwgbnVsbCA9IHBhcmVudC5maXJzdENoaWxkO1xuXHRcdFx0XHRpZiAodGV4dE5vZGUpIHtcblx0XHRcdFx0XHR0ZXh0Tm9kZS50ZXh0Q29udGVudCA9IG5ld05vZGU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIG9sZE5vZGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBuZXdOb2RlID09PSAnc3RyaW5nJykge1xuXHRcdFx0Y29uc3QgbmV3RWxlbWVudDogTm9kZSA9IHRoaXMuZWxlbWVudENyZWF0b3IuY3JlYXRlKG5ld05vZGUpO1xuXHRcdFx0cGFyZW50LnJlcGxhY2VDaGlsZChuZXdFbGVtZW50LCBwYXJlbnQuZmlyc3RDaGlsZCEpO1xuXHRcdFx0aWYgKHR5cGVvZiBuZXdOb2RlICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRuZXdOb2RlLmRvbSA9IG5ld0VsZW1lbnQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKG9sZE5vZGUudGFnICE9PSBuZXdOb2RlLnRhZykge1xuXHRcdFx0Y29uc3QgbmV3RWxlbWVudDogTm9kZSA9IHRoaXMuZWxlbWVudENyZWF0b3IuY3JlYXRlKG5ld05vZGUpO1xuXHRcdFx0cGFyZW50LnJlcGxhY2VDaGlsZChuZXdFbGVtZW50LCBvbGROb2RlLmRvbSEpO1xuXHRcdFx0bmV3Tm9kZS5kb20gPSBuZXdFbGVtZW50O1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChuZXdOb2RlLmlzQ29tcG9uZW50ICYmIG5ld05vZGUuY29tcG9uZW50ID09PSBudWxsKSB7XG5cdFx0XHRuZXdOb2RlLmNvbXBvbmVudCA9IG9sZE5vZGUuY29tcG9uZW50O1xuXHRcdFx0Y29uc3QgbmV3RWxlbWVudDogTm9kZSA9IHRoaXMuZWxlbWVudENyZWF0b3IuY3JlYXRlKFxuXHRcdFx0XHR0aGlzLmFwcGxpY2F0aW9uUnVudGltZS5yZW5kZXJDb21wb25lbnQob2xkTm9kZS5jb21wb25lbnQhKVxuXHRcdFx0KTtcblx0XHRcdHBhcmVudC5yZXBsYWNlQ2hpbGQobmV3RWxlbWVudCwgb2xkTm9kZS5kb20hKTtcblx0XHRcdG5ld05vZGUuZG9tID0gbmV3RWxlbWVudDtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBkb206IE5vZGUgPSBvbGROb2RlLmRvbSE7XG5cdFx0bmV3Tm9kZS5kb20gPSBkb207XG5cblx0XHR0aGlzLnVwZGF0ZVByb3BlcnRpZXMoZG9tIGFzIEhUTUxFbGVtZW50LCBvbGROb2RlLnByb3BzLCBuZXdOb2RlLnByb3BzKTtcblx0XHR0aGlzLnBhdGNoQ2hpbGRyZW4oZG9tLCBvbGROb2RlLmNoaWxkcmVuLCBuZXdOb2RlLmNoaWxkcmVuKTtcblx0fVxuXG5cdHByaXZhdGUgdXBkYXRlUHJvcGVydGllcyhlbGVtZW50OiBIVE1MRWxlbWVudCwgb2xkUHJvcGVydGllczogUmVjb3JkPHN0cmluZywgYW55PiwgbmV3UHJvcGVydGllczogUmVjb3JkPHN0cmluZywgYW55Pik6IHZvaWQge1xuXHRcdGZvciAoY29uc3QgcHJvcGVydHlLZXkgaW4gb2xkUHJvcGVydGllcykge1xuXHRcdFx0aWYgKCEocHJvcGVydHlLZXkgaW4gbmV3UHJvcGVydGllcykpIHtcblx0XHRcdFx0aWYgKEV2ZW50cy5pc0V2ZW50KHByb3BlcnR5S2V5KSkge1xuXHRcdFx0XHRcdHRoaXMuYXBwbGljYXRpb25SdW50aW1lLnJlbW92ZUV2ZW50SGFuZGxlcihlbGVtZW50LCBwcm9wZXJ0eUtleSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUocHJvcGVydHlLZXkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBwcm9wZXJ0eUtleSBpbiBuZXdQcm9wZXJ0aWVzKSB7XG5cdFx0XHRjb25zdCBvbGRWYWx1ZTogYW55ID0gb2xkUHJvcGVydGllc1twcm9wZXJ0eUtleV07XG5cdFx0XHRjb25zdCBuZXdWYWx1ZTogYW55ID0gbmV3UHJvcGVydGllc1twcm9wZXJ0eUtleV07XG5cblx0XHRcdGlmIChvbGRWYWx1ZSA9PT0gbmV3VmFsdWUpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChFdmVudHMuaXNFdmVudChwcm9wZXJ0eUtleSkpIHtcblx0XHRcdFx0aWYgKG9sZFZhbHVlKSB7XG5cdFx0XHRcdFx0dGhpcy5hcHBsaWNhdGlvblJ1bnRpbWUucmVtb3ZlRXZlbnRIYW5kbGVyKGVsZW1lbnQsIHByb3BlcnR5S2V5KTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmFwcGxpY2F0aW9uUnVudGltZS5hZGRFdmVudEhhbmRsZXIoZWxlbWVudCwgcHJvcGVydHlLZXksIG5ld1ZhbHVlIGFzIExhbWJkYUZ1bmN0aW9uQ2FsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShwcm9wZXJ0eUtleSwgbmV3VmFsdWUgYXMgc3RyaW5nKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHBhdGNoQ2hpbGRyZW4ocGFyZW50OiBOb2RlLCBvbGRDaGlsZHJlbjogKFZOb2RlIHwgc3RyaW5nKVtdLCBuZXdDaGlsZHJlbjogKFZOb2RlIHwgc3RyaW5nKVtdKTogdm9pZCB7XG5cdFx0Y29uc3QgbWF4OiBudW1iZXIgPSBNYXRoLm1heChvbGRDaGlsZHJlbi5sZW5ndGgsIG5ld0NoaWxkcmVuLmxlbmd0aCk7XG5cblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbWF4OyBpKyspIHtcblxuXHRcdFx0Y29uc3Qgb2xkQ2hpbGQ6IFZOb2RlIHwgc3RyaW5nIHwgdW5kZWZpbmVkID0gb2xkQ2hpbGRyZW5baV07XG5cdFx0XHRjb25zdCBuZXdDaGlsZDogVk5vZGUgfCBzdHJpbmcgfCB1bmRlZmluZWQgPSBuZXdDaGlsZHJlbltpXTtcblxuXHRcdFx0aWYgKCFvbGRDaGlsZCAmJiBuZXdDaGlsZCkge1xuXHRcdFx0XHRwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50Q3JlYXRvci5jcmVhdGUobmV3Q2hpbGQpKTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHBhcmVudENoaWxkTm9kZTogQ2hpbGROb2RlIHwgdW5kZWZpbmVkID0gcGFyZW50LmNoaWxkTm9kZXNbaV07XG5cdFx0XHRpZiAocGFyZW50Q2hpbGROb2RlKSB7XG5cdFx0XHRcdGlmIChvbGRDaGlsZCAmJiAhbmV3Q2hpbGQpIHtcblx0XHRcdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50Q2hpbGROb2RlKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChuZXdDaGlsZCAmJiBvbGRDaGlsZCkge1xuXHRcdFx0XHRcdHRoaXMucGF0Y2hOb2RlKHBhcmVudENoaWxkTm9kZS5wYXJlbnROb2RlISwgb2xkQ2hpbGQsIG5ld0NoaWxkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwKICAgICJpbXBvcnQge0x5cmFTY3JpcHRQcm9ncmFtfSBmcm9tIFwiLi4vY29yZS9wcm9ncmFtXCI7XG5pbXBvcnQge2ZldGNoU291cmNlfSBmcm9tIFwiLi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuaW1wb3J0IHtDbGFzc0RlZmluaXRpb24sIEVudmlyb25tZW50LCBJbnN0YW5jZX0gZnJvbSBcIi4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB7Y2FsbEluc3RhbmNlTWV0aG9kLCBMYW1iZGFGdW5jdGlvbkNhbGx9IGZyb20gXCIuLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX3J1bnRpbWVcIjtcbmltcG9ydCB7RXZlbnRUeXBlfSBmcm9tIFwiLi4vbGlicmFyeS9jbGFzc2VzL2V2ZW50XCI7XG5pbXBvcnQge0V2ZW50UGlwZWxpbmV9IGZyb20gXCIuLi9jb3JlL2V2ZW50L3BpcGVsaW5lXCI7XG5pbXBvcnQge0dSQU1NQVJ9IGZyb20gXCIuLi9jb3JlL2dyYW1tYXJcIjtcblxuY29uc3QgbHlyYUV2ZW50Q2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiA9IG5ldyBFdmVudFR5cGUoKS5nZXRDbGFzc0RlZmluaXRpb24oKTtcblxuZXhwb3J0IGludGVyZmFjZSBFbmdpbmUge1xuXHRleGVjdXRlRW50cnlGaWxlKHVybDogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG5cblx0Y3JlYXRlSW5zdGFuY2UoY2xhc3NOYW1lOiBzdHJpbmcpOiBJbnN0YW5jZTtcblxuXHRnZXRSb290SW5zdGFuY2UoKTogSW5zdGFuY2U7XG5cblx0Y2FsbFJvb3RJbnN0YW5jZU1ldGhvZChtZXRob2ROYW1lOiBzdHJpbmcsIGFyZ3M6IGFueVtdKTogYW55O1xuXG5cdGNhbGxJbnN0YW5jZU1ldGhvZChpbnN0YW5jZTogSW5zdGFuY2UsIG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogQXJyYXk8YW55Pik6IGFueTtcblxuXHRjcmVhdGVFdmVudChldmVudDogRXZlbnQpOiBJbnN0YW5jZTtcblxuXHRjcmVhdGVFdmVudEhhbmRsZXIoaGFuZGxlcjogTGFtYmRhRnVuY3Rpb25DYWxsLCBldmVudE5hbWU6IHN0cmluZyk6IChldmVudDogRXZlbnQpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBXZWJMeXJhU2NyaXB0IGltcGxlbWVudHMgRW5naW5lIHtcblx0cHJpdmF0ZSByZWFkb25seSBwcm9ncmFtOiBMeXJhU2NyaXB0UHJvZ3JhbTtcblx0cHJpdmF0ZSBnbG9iYWxPYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cdHByaXZhdGUgZ2xvYmFsRW52aXJvbm1lbnQ6IEVudmlyb25tZW50O1xuXHRwcml2YXRlIHJvb3RJbnN0YW5jZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbDtcblxuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZ2xvYmFsRXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSA9IG5ldyBFdmVudFBpcGVsaW5lKCksIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSkge1xuXHRcdHRoaXMucHJvZ3JhbSA9IG5ldyBMeXJhU2NyaXB0UHJvZ3JhbShpc0RlYnVnLCB0aGlzLmdsb2JhbEV2ZW50UGlwZWxpbmUpO1xuXHRcdHRoaXMuZ2xvYmFsT2JqZWN0UmVnaXN0cnkgPSB0aGlzLnByb2dyYW0uZ2V0R2xvYmFsT2JqZWN0UmVnaXN0cnkoKTtcblx0XHR0aGlzLmdsb2JhbEVudmlyb25tZW50ID0gdGhpcy5wcm9ncmFtLmdldEdsb2JhbEVudmlyb25tZW50KCk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0Um9vdEluc3RhbmNlKCk6IEluc3RhbmNlIHtcblx0XHRpZiAodGhpcy5yb290SW5zdGFuY2UgPT09IG51bGwpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignTm8gcm9vdCBpbnN0YW5jZSBhdmFpbGFibGUuJyk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnJvb3RJbnN0YW5jZTtcblx0fVxuXG5cdHB1YmxpYyBjcmVhdGVJbnN0YW5jZShjbGFzc05hbWU6IHN0cmluZyk6IEluc3RhbmNlIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRDbGFzc0RlZmluaXRpb24oY2xhc3NOYW1lKVxuXHRcdCAgICAgICAgICAgLmNvbnN0cnVjdE5ld0luc3RhbmNlV2l0aG91dEFyZ3VtZW50cyhcblx0XHRcdCAgICAgICAgICAgdGhpcy5nbG9iYWxPYmplY3RSZWdpc3RyeSxcblx0XHRcdCAgICAgICAgICAgdGhpcy5nbG9iYWxFbnZpcm9ubWVudCxcblx0XHRcdCAgICAgICAgICAgdGhpcy5nbG9iYWxFdmVudFBpcGVsaW5lXG5cdFx0ICAgICAgICAgICApO1xuXHR9XG5cblx0cHVibGljIGNhbGxSb290SW5zdGFuY2VNZXRob2QobWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuY2FsbEluc3RhbmNlTWV0aG9kKHRoaXMuZ2V0Um9vdEluc3RhbmNlKCksIG1ldGhvZE5hbWUsIGFyZ3MpO1xuXHR9XG5cblx0cHVibGljIGNhbGxJbnN0YW5jZU1ldGhvZChpbnN0YW5jZTogSW5zdGFuY2UsIG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10pOiBhbnkge1xuXG5cblx0XHRyZXR1cm4gY2FsbEluc3RhbmNlTWV0aG9kKFxuXHRcdFx0aW5zdGFuY2UsXG5cdFx0XHRpbnN0YW5jZS5maW5kZU1ldGhvZE5vZGUobWV0aG9kTmFtZSksXG5cdFx0XHRhcmdzLFxuXHRcdFx0dGhpcy5nbG9iYWxPYmplY3RSZWdpc3RyeSxcblx0XHRcdHRoaXMuZ2xvYmFsRW52aXJvbm1lbnQsXG5cdFx0XHR0aGlzLmdsb2JhbEV2ZW50UGlwZWxpbmVcblx0XHQpO1xuXHR9XG5cblx0cHVibGljIGFzeW5jIGV4ZWN1dGVFbnRyeUZpbGUodXJsOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHRoaXMucHJvZ3JhbS5leGVjdXRlKGF3YWl0IGZldGNoU291cmNlKHVybCkpXG5cdFx0ICAgICAgICAgICAudGhlbigoKSA9PiB7XG5cdFx0XHQgICAgICAgICAgIHRoaXMucm9vdEluc3RhbmNlID0gdGhpcy5jcmVhdGVJbnN0YW5jZShjbGFzc05hbWUpO1xuXHRcdCAgICAgICAgICAgfSk7XG5cdH1cblxuXHRwdWJsaWMgY3JlYXRlRXZlbnQoZXZlbnQ6IEV2ZW50KTogSW5zdGFuY2Uge1xuXHRcdHJldHVybiBseXJhRXZlbnRDbGFzc0RlZi5jb25zdHJ1Y3ROYXRpdmVJbnN0YW5jZSh0aGlzLmdsb2JhbE9iamVjdFJlZ2lzdHJ5LCBbZXZlbnRdKTtcblx0fVxuXG5cdHB1YmxpYyBjcmVhdGVFdmVudEhhbmRsZXIoaGFuZGxlcjogTGFtYmRhRnVuY3Rpb25DYWxsLCBldmVudE5hbWU6IHN0cmluZyk6IChldmVudDogRXZlbnQpID0+IHZvaWQge1xuXHRcdHJldHVybiAoZXZlbnQ6IEV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHR0aGlzLmdsb2JhbEV2ZW50UGlwZWxpbmUuZW1pdChcblx0XHRcdFx0ZXZlbnROYW1lLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aW52b2tlOiAoKTogYW55ID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IGluc3RhbmNlOiBJbnN0YW5jZSA9IGhhbmRsZXIuZnVuY3Rpb25FbnYuZ2V0KEdSQU1NQVIuVEhJUyk7XG5cblx0XHRcdFx0XHRcdGhhbmRsZXIuZXZhbENhbGwoaW5zdGFuY2UsIHRoaXMuY3JlYXRlRXZlbnQoZXZlbnQpKTtcblxuXHRcdFx0XHRcdFx0aW5zdGFuY2UubWFya0RpcnR5KHRoaXMuZ2xvYmFsRXZlbnRQaXBlbGluZSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRldmVudFxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH07XG5cdH1cblxuXG5cdHByaXZhdGUgZ2V0Q2xhc3NEZWZpbml0aW9uKGNsYXNzTmFtZTogc3RyaW5nKTogQ2xhc3NEZWZpbml0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5nbG9iYWxPYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChjbGFzc05hbWUpO1xuXHR9XG59XG4iLAogICAgImV4cG9ydCBjbGFzcyBFdmVudEhhbmRsZXJSZWdpc3RyeSB7XG5cdHByaXZhdGUgcmVnaXN0cnk6IFdlYWtNYXA8SFRNTEVsZW1lbnQsIFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uPj4gPSBuZXcgV2Vha01hcDxIVE1MRWxlbWVudCwgUmVjb3JkPHN0cmluZywgRnVuY3Rpb24+PigpO1xuXG5cdHB1YmxpYyByZWdpc3RlcihlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcGVydHlLZXk6IHN0cmluZywgaGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcblx0XHRjb25zdCBldmVudEhhbmRsZXJzOiBSZWNvcmQ8c3RyaW5nLCBGdW5jdGlvbj4gPSB0aGlzLnJlZ2lzdHJ5LmdldChlbGVtZW50KSA/PyB7fTtcblxuXHRcdGV2ZW50SGFuZGxlcnNbcHJvcGVydHlLZXldID0gaGFuZGxlcjtcblxuXHRcdHRoaXMucmVnaXN0cnkuc2V0KGVsZW1lbnQsIGV2ZW50SGFuZGxlcnMpO1xuXHR9XG5cblx0cHVibGljIHVucmVnaXN0ZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIHByb3BlcnR5S2V5OiBzdHJpbmcpOiBGdW5jdGlvbiB8IG51bGwge1xuXHRcdGNvbnN0IGV2ZW50SGFuZGxlcnM6IFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uPiA9IHRoaXMucmVnaXN0cnkuZ2V0KGVsZW1lbnQpID8/IHt9O1xuXG5cdFx0Y29uc3QgZXZlbnRIYW5kbGVyOiBGdW5jdGlvbiB8IHVuZGVmaW5lZCA9IGV2ZW50SGFuZGxlcnNbcHJvcGVydHlLZXldO1xuXHRcdGlmIChldmVudEhhbmRsZXIpIHtcblx0XHRcdGRlbGV0ZSBldmVudEhhbmRsZXJzW3Byb3BlcnR5S2V5XTtcblxuXHRcdFx0dGhpcy5yZWdpc3RyeS5zZXQoZWxlbWVudCwgZXZlbnRIYW5kbGVycyk7XG5cblx0XHRcdHJldHVybiBldmVudEhhbmRsZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHt0eXBlIEVuZ2luZSwgV2ViTHlyYVNjcmlwdH0gZnJvbSBcIi4vZW5naW5lXCI7XG5pbXBvcnQge3R5cGUgRWxlbWVudFBhdGNoZXIsIEhUTUxFbGVtZW50UGF0Y2hlcn0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgdHlwZSB7Vk5vZGV9IGZyb20gXCIuLi9jb3JlL3Zkb20vdmRvbVwiO1xuaW1wb3J0IHtFdmVudFBpcGVsaW5lfSBmcm9tIFwiLi4vY29yZS9ldmVudC9waXBlbGluZVwiO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcbmltcG9ydCB7dHlwZSBJbnN0YW5jZX0gZnJvbSBcIi4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtMYW1iZGFGdW5jdGlvbkNhbGx9IGZyb20gXCIuLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX3J1bnRpbWVcIjtcbmltcG9ydCB7RXZlbnRIYW5kbGVyUmVnaXN0cnl9IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5pbXBvcnQgTHlyYUV2ZW50cyBmcm9tIFwiLi4vY29yZS9ldmVudC9ldmVudHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBcHBsaWNhdGlvblJ1bnRpbWUge1xuXHRnZXQgZW5naW5lKCk6IEVuZ2luZTtcblxuXHRnZXQgZXZlbnRQaXBlbGluZSgpOiBFdmVudFBpcGVsaW5lO1xuXG5cdHN0YXJ0KHVybDogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG5cblx0Y3JlYXRlSW5zdGFuY2UoY2xhc3NOYW1lOiBzdHJpbmcpOiBJbnN0YW5jZTtcblxuXHRjYWxsUm9vdEluc3RhbmNlTWV0aG9kKG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10pOiBhbnk7XG5cblx0Y2FsbE1ldGhvZChpbnN0YW5jZTogSW5zdGFuY2UsIG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10pOiBhbnk7XG5cblx0cmVuZGVyUm9vdENvbXBvbmVudCgpOiBWTm9kZTtcblxuXHRyZW5kZXJDb21wb25lbnQoaW5zdGFuY2U6IEluc3RhbmNlKTogVk5vZGU7XG5cblx0YWRkRXZlbnRIYW5kbGVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwcm9wZXJ0eUtleTogc3RyaW5nLCBoYW5kbGVyOiBMYW1iZGFGdW5jdGlvbkNhbGwpOiB2b2lkO1xuXG5cdHJlbW92ZUV2ZW50SGFuZGxlcihlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcGVydHlLZXk6IHN0cmluZyk6IHZvaWQ7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEFwcGxpY2F0aW9uUnVudGltZSBpbXBsZW1lbnRzIEFwcGxpY2F0aW9uUnVudGltZSB7XG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJlYWRvbmx5IF9lbmdpbmU6IEVuZ2luZSxcblx0XHRwcml2YXRlIHJlYWRvbmx5IF9ldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lID0gbmV3IEV2ZW50UGlwZWxpbmUoKSxcblx0XHRwcml2YXRlIHJlYWRvbmx5IGV2ZW50SGFuZGxlclJlZ2lzdHJ5OiBFdmVudEhhbmRsZXJSZWdpc3RyeSA9IG5ldyBFdmVudEhhbmRsZXJSZWdpc3RyeSgpXG5cdCkge1xuXHR9XG5cblx0Z2V0IGVuZ2luZSgpOiBFbmdpbmUge1xuXHRcdHJldHVybiB0aGlzLl9lbmdpbmU7XG5cdH1cblxuXHRnZXQgZXZlbnRQaXBlbGluZSgpOiBFdmVudFBpcGVsaW5lIHtcblx0XHRyZXR1cm4gdGhpcy5fZXZlbnRQaXBlbGluZTtcblx0fVxuXG5cdHJlbmRlclJvb3RDb21wb25lbnQoKTogVk5vZGUge1xuXHRcdHJldHVybiB0aGlzLnJlbmRlckNvbXBvbmVudCh0aGlzLl9lbmdpbmUuZ2V0Um9vdEluc3RhbmNlKCkpO1xuXHR9XG5cblx0cmVuZGVyQ29tcG9uZW50KGluc3RhbmNlOiBJbnN0YW5jZSk6IFZOb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5jYWxsTWV0aG9kKGluc3RhbmNlLCAncmVuZGVyJywgW10pIGFzIFZOb2RlXG5cdH1cblxuXHRwdWJsaWMgc3RhcnQodXJsOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG5cdH1cblxuXHRwdWJsaWMgY3JlYXRlSW5zdGFuY2UoY2xhc3NOYW1lOiBzdHJpbmcpOiBJbnN0YW5jZSB7XG5cdFx0cmV0dXJuIHRoaXMuX2VuZ2luZS5jcmVhdGVJbnN0YW5jZShjbGFzc05hbWUpO1xuXHR9XG5cblx0cHVibGljIGNhbGxSb290SW5zdGFuY2VNZXRob2QobWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSA9IFtdKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5fZW5naW5lLmNhbGxSb290SW5zdGFuY2VNZXRob2QobWV0aG9kTmFtZSwgYXJncyk7XG5cdH1cblxuXHRwdWJsaWMgY2FsbE1ldGhvZChpbnN0YW5jZTogSW5zdGFuY2UsIG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10gPSBbXSk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuX2VuZ2luZS5jYWxsSW5zdGFuY2VNZXRob2QoaW5zdGFuY2UsIG1ldGhvZE5hbWUsIGFyZ3MpO1xuXHR9XG5cblx0cHVibGljIGFkZEV2ZW50SGFuZGxlcihlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcGVydHlLZXk6IHN0cmluZywgaGFuZGxlcjogTGFtYmRhRnVuY3Rpb25DYWxsKTogdm9pZCB7XG5cdFx0Y29uc3QgZXZlbnROYW1lOiBzdHJpbmcgPSBwcm9wZXJ0eUtleS5zbGljZSgyKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcblxuXHRcdGNvbnN0IGV2ZW50SGFuZGxlcjogKGV2ZW50OiBFdmVudCkgPT4gdm9pZCA9IHRoaXMuZW5naW5lLmNyZWF0ZUV2ZW50SGFuZGxlcihoYW5kbGVyLCBFdmVudHMuRE9NX0VWRU5UKTtcblxuXHRcdHRoaXMuZXZlbnRIYW5kbGVyUmVnaXN0cnkucmVnaXN0ZXIoZWxlbWVudCwgcHJvcGVydHlLZXksIGV2ZW50SGFuZGxlcik7XG5cblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudEhhbmRsZXIpO1xuXHR9XG5cblx0cHVibGljIHJlbW92ZUV2ZW50SGFuZGxlcihlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcGVydHlLZXk6IHN0cmluZyk6IHZvaWQge1xuXHRcdGNvbnN0IGV2ZW50TmFtZTogc3RyaW5nID0gcHJvcGVydHlLZXkuc2xpY2UoMilcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRjb25zdCBldmVudEhhbmRsZXI6IEZ1bmN0aW9uIHwgbnVsbCA9IHRoaXMuZXZlbnRIYW5kbGVyUmVnaXN0cnkudW5yZWdpc3RlcihlbGVtZW50LCBwcm9wZXJ0eUtleSk7XG5cblx0XHRpZiAoZXZlbnRIYW5kbGVyKSB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudEhhbmRsZXIgYXMgRXZlbnRMaXN0ZW5lcik7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBXZWJBcHBsaWNhdGlvblJ1bnRpbWUgZXh0ZW5kcyBBYnN0cmFjdEFwcGxpY2F0aW9uUnVudGltZSB7XG5cdHByaXZhdGUgcmVhZG9ubHkgcGF0Y2hlcjogRWxlbWVudFBhdGNoZXI7XG5cblx0cHJpdmF0ZSBjdXJyZW50Vk5vZGU6IFZOb2RlIHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgaXNSZW5kZXJpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdG1vdW50UG9pbnQ6IEhUTUxFbGVtZW50LFxuXHRcdGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSxcblx0XHRldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lID0gbmV3IEV2ZW50UGlwZWxpbmUoKSxcblx0XHRldmVudEhhbmRsZXJSZWdpc3RyeTogRXZlbnRIYW5kbGVyUmVnaXN0cnkgPSBuZXcgRXZlbnRIYW5kbGVyUmVnaXN0cnkoKVxuXHQpIHtcblx0XHRzdXBlcihuZXcgV2ViTHlyYVNjcmlwdChldmVudFBpcGVsaW5lLCBpc0RlYnVnKSwgZXZlbnRQaXBlbGluZSwgZXZlbnRIYW5kbGVyUmVnaXN0cnkpO1xuXG5cdFx0dGhpcy5wYXRjaGVyID0gbmV3IEhUTUxFbGVtZW50UGF0Y2hlcihtb3VudFBvaW50LCB0aGlzKVxuXHR9XG5cblx0cHVibGljIG92ZXJyaWRlIGFzeW5jIHN0YXJ0KHVybDogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZyA9ICdBcHAnKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0YXdhaXQgdGhpcy5lbmdpbmUuZXhlY3V0ZUVudHJ5RmlsZSh1cmwsIGNsYXNzTmFtZSk7XG5cblx0XHR0aGlzLmxpc3RlblRvRG9tRXZlbnRzKCk7XG5cblx0XHR0aGlzLnBlcmZvcm1SZW5kZXIoKTtcblx0fVxuXG5cdHB1YmxpYyByZXF1ZXN0UmVuZGVyKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzUmVuZGVyaW5nKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0cXVldWVNaWNyb3Rhc2soKCk6IHZvaWQgPT4ge1xuXHRcdFx0dGhpcy5wZXJmb3JtUmVuZGVyKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGxpc3RlblRvRG9tRXZlbnRzKCk6IHZvaWQge1xuXHRcdHRoaXMuZXZlbnRQaXBlbGluZVxuXHRcdCAgICAub24oRXZlbnRzLkRPTV9FVkVOVCwgKHtpbnZva2V9OiBhbnkpOiB2b2lkID0+IHtcblx0XHRcdCAgICBpbnZva2UoKTtcblx0XHQgICAgfSk7XG5cblx0XHR0aGlzLmV2ZW50UGlwZWxpbmVcblx0XHQgICAgLm9uKEx5cmFFdmVudHMuTFlSQV9JTlNUQU5DRV9ESVJUWV9TVEFURSwgKHBheWxvYWQpOiB2b2lkID0+IHtcblx0XHRcdCAgICB0aGlzLnJlcXVlc3RSZW5kZXIoKTtcblx0XHQgICAgfSk7XG5cdH1cblxuXHRwcml2YXRlIHBlcmZvcm1SZW5kZXIoKTogdm9pZCB7XG5cdFx0dGhpcy5pc1JlbmRlcmluZyA9IHRydWU7XG5cblx0XHRjb25zdCBuZXh0OiBWTm9kZSA9IHRoaXMucmVuZGVyUm9vdENvbXBvbmVudCgpO1xuXG5cdFx0dGhpcy5wYXRjaGVyLnBhdGNoKHRoaXMuY3VycmVudFZOb2RlLCBuZXh0KTtcblxuXHRcdHRoaXMuY3VycmVudFZOb2RlID0gbmV4dDtcblxuXHRcdHRoaXMuaXNSZW5kZXJpbmcgPSBmYWxzZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4vY29yZS9wYXJzZXIvcGFyc2VyXCI7XG5pbXBvcnQge3dyYXBKc0Vycm9yfSBmcm9tIFwiLi9jb3JlL2Vycm9yc1wiO1xuaW1wb3J0IHtmZXRjaFNvdXJjZSwgU291cmNlfSBmcm9tIFwiLi9jb3JlL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5pbXBvcnQge0FTVE5vZGV9IGZyb20gXCIuL2NvcmUvYXN0XCI7XG5pbXBvcnQge1Rva2VuaXplcn0gZnJvbSBcIi4vY29yZS90b2tlbml6ZXIvdG9rZW5pemVyXCI7XG5pbXBvcnQge1Rva2VufSBmcm9tIFwiLi9jb3JlL2dyYW1tYXJcIjtcbmltcG9ydCB7THlyYVNjcmlwdFByb2dyYW19IGZyb20gXCIuL2NvcmUvcHJvZ3JhbVwiO1xuaW1wb3J0IHtFdmVudFBpcGVsaW5lfSBmcm9tIFwiLi9jb3JlL2V2ZW50L3BpcGVsaW5lXCI7XG5pbXBvcnQge1N0YXRlfSBmcm9tIFwiLi9jb3JlL2V2ZW50L3N0YXRlXCI7XG5pbXBvcnQge0hUTUxFbGVtZW50Q3JlYXRvcn0gZnJvbSBcIi4vaG9zdC9kb21cIjtcblxuZXhwb3J0IHtXZWJMeXJhU2NyaXB0fSBmcm9tIFwiLi9ob3N0L2VuZ2luZVwiO1xuZXhwb3J0IHtXZWJBcHBsaWNhdGlvblJ1bnRpbWV9IGZyb20gXCIuL2hvc3QvcnVudGltZVwiO1xuXG5jb25zdCBMeXJhID0ge1xuXHRTb3VyY2UsXG5cdFBhcnNlcixcblx0VG9rZW5pemVyLFxuXHRFdmVudFBpcGVsaW5lLFxuXHRIVE1MRWxlbWVudENyZWF0b3IsXG5cdFN0YXRlLFxuXHRQcm9ncmFtOiAoaXNEZWJ1ZzogYm9vbGVhbik6IEx5cmFTY3JpcHRQcm9ncmFtID0+IFByb2dyYW0oaXNEZWJ1ZyksXG5cdGV4ZWN1dGU6IChzb3VyY2U6IFNvdXJjZSwgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiBleGVjdXRlKHNvdXJjZSwgaXNEZWJ1ZyksXG5cdGV4ZWN1dGVGcm9tU3RyaW5nOiAoY29kZTogc3RyaW5nLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+ID0+IGV4ZWN1dGVGcm9tU3RyaW5nKGNvZGUsIGlzRGVidWcpLFxuXHRleGVjdXRlRnJvbVVybDogYXN5bmMgKHVybDogc3RyaW5nLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+ID0+IGV4ZWN1dGVGcm9tVXJsKHVybCwgaXNEZWJ1ZyksXG5cdGV4ZWN1dGVUZXN0OiAoc291cmNlOiBTb3VyY2UsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4gPT4gZXhlY3V0ZVRlc3Qoc291cmNlLCBpc0RlYnVnKSxcblx0ZXhlY3V0ZVRlc3RTdHJpbmc6IChjb2RlOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4gPT4gZXhlY3V0ZVRlc3RTdHJpbmcoY29kZSwgaXNEZWJ1ZyksXG5cdGV4ZWN1dGVUZXN0VXJsOiAodXJsOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4gPT4gZXhlY3V0ZVRlc3RVcmwodXJsLCBpc0RlYnVnKSxcblx0dG9rZW5pemU6IChzb3VyY2U6IFNvdXJjZSk6IFRva2VuW10gPT4gdG9rZW5pemUoc291cmNlKSxcblx0dG9rZW5pemVVcmw6ICh1cmw6IHN0cmluZyk6IFByb21pc2U8VG9rZW5bXT4gPT4gdG9rZW5pemVVcmwodXJsKSxcblx0cGFyc2VUcmVlOiAoc291cmNlOiBTb3VyY2UpOiBBU1ROb2RlID0+IHBhcnNlVHJlZShzb3VyY2UpLFxuXHRwYXJzZVRyZWVVcmw6ICh1cmw6IHN0cmluZyk6IFByb21pc2U8QVNUTm9kZT4gPT4gcGFyc2VUcmVlVXJsKHVybCksXG59O1xuXG5mdW5jdGlvbiBQcm9ncmFtKGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IEx5cmFTY3JpcHRQcm9ncmFtIHtcblx0cmV0dXJuIG5ldyBMeXJhU2NyaXB0UHJvZ3JhbShpc0RlYnVnKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZShzb3VyY2U6IFNvdXJjZSwgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IFByb2dyYW0oaXNEZWJ1Zylcblx0XHRcdC5leGVjdXRlKHNvdXJjZSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3Iod3JhcEpzRXJyb3IoZXJyb3IsIHNvdXJjZSlcblx0XHRcdFx0ICAgICAgICAgICAgICAuZm9ybWF0KCkpO1xuXHRcdH1cblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlRnJvbVVybCh1cmw6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdHJldHVybiBhd2FpdCBleGVjdXRlKGF3YWl0IGZldGNoU291cmNlKHVybCksIGlzRGVidWcpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlRnJvbVN0cmluZyhjb2RlOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBzb3VyY2UgPSBuZXcgU291cmNlKGNvZGUpO1xuXG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IFByb2dyYW0oaXNEZWJ1Zylcblx0XHRcdC5leGVjdXRlKHNvdXJjZSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3Iod3JhcEpzRXJyb3IoZXJyb3IsIHNvdXJjZSlcblx0XHRcdFx0ICAgICAgICAgICAgICAuZm9ybWF0KCkpO1xuXHRcdH1cblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlVGVzdChzb3VyY2U6IFNvdXJjZSwgaXNEZWJ1ZyA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IFByb2dyYW0oaXNEZWJ1Zylcblx0XHRcdC5leGVjdXRlVGVzdChzb3VyY2UpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKHdyYXBKc0Vycm9yKGVycm9yLCBzb3VyY2UpXG5cdFx0XHRcdCAgICAgICAgICAgICAgLmZvcm1hdCgpKTtcblx0XHR9XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZVRlc3RVcmwodXJsOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4ge1xuXHRyZXR1cm4gYXdhaXQgZXhlY3V0ZVRlc3QoYXdhaXQgZmV0Y2hTb3VyY2UodXJsKSwgaXNEZWJ1Zyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVUZXN0U3RyaW5nKGNvZGU6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHNvdXJjZSA9IG5ldyBTb3VyY2UoY29kZSk7XG5cblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgUHJvZ3JhbShpc0RlYnVnKVxuXHRcdFx0LmV4ZWN1dGVUZXN0KHNvdXJjZSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3Iod3JhcEpzRXJyb3IoZXJyb3IsIHNvdXJjZSlcblx0XHRcdFx0ICAgICAgICAgICAgICAuZm9ybWF0KCkpO1xuXHRcdH1cblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9rZW5pemUoc291cmNlOiBTb3VyY2UpOiBUb2tlbltdIHtcblx0cmV0dXJuIG5ldyBUb2tlbml6ZXIoc291cmNlKS50b2tlbml6ZSgpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdG9rZW5pemVVcmwodXJsOiBzdHJpbmcpOiBQcm9taXNlPFRva2VuW10+IHtcblx0cmV0dXJuIHRva2VuaXplKGF3YWl0IGZldGNoU291cmNlKHVybCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUcmVlKHNvdXJjZTogU291cmNlKTogQVNUTm9kZSB7XG5cdHJldHVybiBuZXcgUGFyc2VyKHNvdXJjZSkucGFyc2UoKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBhcnNlVHJlZVVybCh1cmw6IHN0cmluZyk6IFByb21pc2U8QVNUTm9kZT4ge1xuXHRyZXR1cm4gcGFyc2VUcmVlKGF3YWl0IGZldGNoU291cmNlKHVybCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMeXJhO1xuIgogIF0sCiAgIm1hcHBpbmdzIjogIjtBQUVPLE1BQU0sUUFBUTtBQUFBLFNBQ2IsU0FBaUI7QUFBQSxTQUNqQixPQUFlO0FBQUEsU0FDZixNQUFjO0FBQUEsU0FDZCxPQUFlO0FBQUEsU0FDZixRQUFnQjtBQUFBLFNBQ2hCLFlBQW9CO0FBQUEsU0FDcEIsVUFBa0I7QUFBQSxTQUNsQixhQUFxQjtBQUFBLFNBQ3JCLGNBQXNCO0FBQUEsU0FDdEIsTUFBYztBQUFBLFNBQ2QsT0FBZTtBQUFBLFNBQ2YsU0FBaUI7QUFBQSxTQUNqQixVQUFrQjtBQUFBLFNBQ2xCLFNBQWlCO0FBQUEsU0FDakIsV0FBbUI7QUFBQSxTQUNuQixTQUFpQjtBQUFBLFNBQ2pCLFFBQWdCO0FBQUEsU0FDaEIsT0FBZTtBQUFBLFNBQ2YsUUFBZ0I7QUFBQSxTQUNoQixLQUFhO0FBQUEsU0FDYixPQUFlO0FBQUEsU0FDZixRQUFnQjtBQUFBLFNBQ2hCLFVBQWtCO0FBQUEsU0FDbEIsVUFBa0I7QUFBQSxTQUNsQixLQUFhO0FBQUEsU0FDYixPQUFlO0FBQUEsU0FDZixPQUFlO0FBQUEsU0FFZixzQkFBOEI7QUFBQSxTQUM5Qix1QkFBK0I7QUFBQSxTQUMvQixhQUFxQjtBQUFBLFNBQ3JCLGNBQXNCO0FBQUEsU0FDdEIsbUJBQTJCO0FBQUEsU0FDM0Isb0JBQTRCO0FBQUEsU0FDNUIsWUFBb0I7QUFBQSxTQUNwQixRQUFnQjtBQUFBLFNBQ2hCLFFBQWdCO0FBQUEsU0FFaEIsUUFBZ0I7QUFBQSxT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LE9BQU8sSUFBSTtBQUFBLEVBRTlCLElBQUk7QUFBQSxJQUNILE9BQU8sTUFBTSxRQUFRLE9BQU8sRUFDMUIsUUFBUSxNQUFNO0FBQUEsSUFDZixPQUFPLE9BQU87QUFBQSxJQUNmLElBQUksaUJBQWlCLE9BQU87QUFBQSxNQUMzQixRQUFRLE1BQU0sWUFBWSxPQUFPLE1BQU0sRUFDdkIsT0FBTyxDQUFDO0FBQUEsSUFDekI7QUFBQSxJQUNBLE1BQU07QUFBQTtBQUFBO0FBSVIsZUFBZSxXQUFXLENBQUMsUUFBZ0IsVUFBVSxPQUFzQjtBQUFBLEVBQzFFLElBQUk7QUFBQSxJQUNILE9BQU8sTUFBTSxRQUFRLE9BQU8sRUFDMUIsWUFBWSxNQUFNO0FBQUEsSUFDbkIsT0FBTyxPQUFPO0FBQUEsSUFDZixJQUFJLGlCQUFpQixPQUFPO0FBQUEsTUFDM0IsUUFBUSxNQUFNLFlBQVksT0FBTyxNQUFNLEVBQ3ZCLE9BQU8sQ0FBQztBQUFBLElBQ3pCO0FBQUEsSUFDQSxNQUFNO0FBQUE7QUFBQTtBQUlSLGVBQWUsY0FBYyxDQUFDLEtBQWEsVUFBbUIsT0FBc0I7QUFBQSxFQUNuRixPQUFPLE1BQU0sWUFBWSxNQUFNLFlBQVksR0FBRyxHQUFHLE9BQU87QUFBQTtBQUd6RCxlQUFlLGlCQUFpQixDQUFDLE1BQWMsVUFBbUIsT0FBc0I7QUFBQSxFQUN2RixNQUFNLFNBQVMsSUFBSSxPQUFPLElBQUk7QUFBQSxFQUU5QixJQUFJO0FBQUEsSUFDSCxPQUFPLE1BQU0sUUFBUSxPQUFPLEVBQzFCLFlBQVksTUFBTTtBQUFBLElBQ25CLE9BQU8sT0FBTztBQUFBLElBQ2YsSUFBSSxpQkFBaUIsT0FBTztBQUFBLE1BQzNCLFFBQVEsTUFBTSxZQUFZLE9BQU8sTUFBTSxFQUN2QixPQUFPLENBQUM7QUFBQSxJQUN6QjtBQUFBLElBQ0EsTUFBTTtBQUFBO0FBQUE7QUFJRCxTQUFTLFFBQVEsQ0FBQyxRQUF5QjtBQUFBLEVBQ2pELE9BQU8sSUFBSSxVQUFVLE1BQU0sRUFBRSxTQUFTO0FBQUE7QUFHdkMsZUFBc0IsV0FBVyxDQUFDLEtBQStCO0FBQUEsRUFDaEUsT0FBTyxTQUFTLE1BQU0sWUFBWSxHQUFHLENBQUM7QUFBQTtBQUdoQyxTQUFTLFNBQVMsQ0FBQyxRQUF5QjtBQUFBLEVBQ2xELE9BQU8sSUFBSSxPQUFPLE1BQU0sRUFBRSxNQUFNO0FBQUE7QUFHakMsZUFBc0IsWUFBWSxDQUFDLEtBQStCO0FBQUEsRUFDakUsT0FBTyxVQUFVLE1BQU0sWUFBWSxHQUFHLENBQUM7QUFBQTtBQUd4QyxJQUFlOyIsCiAgImRlYnVnSWQiOiAiNEFCQkU2MkVEM0UzRjRFQTY0NzU2RTIxNjQ3NTZFMjEiLAogICJuYW1lcyI6IFtdCn0=
