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
      } else if (char === GRAMMAR.BRACE_OPEN) {
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
function parseDomeWhitespace(parser) {
  if (parser.consumeIfText()) {
    parser.rewind();
    const token = parser.next();
    const node = new ASTVDomTextNode(token.value);
    node.span = spanFrom(token, token);
    return node;
  }
  return null;
}
function parseVDomElement(parser) {
  const children = [];
  const textNode = parseDomeWhitespace(parser);
  if (textNode) {
    children.push(textNode);
  }
  const startToken = parser.expectOperator(GRAMMAR.LESS_THAN);
  const tagToken = parser.expectIdentifier();
  const tag = tagToken.value;
  const props = new Map;
  while (!parser.peekIs(GRAMMAR.GREATER_THAN) && !parser.peekIs(GRAMMAR.XML_CLOSE_TAG)) {
    const textNode2 = parseDomeWhitespace(parser);
    if (textNode2) {
      children.push(textNode2);
    }
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
          const nativeClass = nativeClasses.registry.get(className) || null;
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
  for (const nativeClass of nativeClasses2.registry.values()) {
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
    let textBuffer = [];
    function flushTextBuffer() {
      if (textBuffer.length > 0) {
        const textNode = document.createTextNode("");
        textNode.textContent = textBuffer.join("");
        element.appendChild(textNode);
        textBuffer = [];
      }
    }
    for (const [key, fn] of Object.entries(vNode.props)) {
      if (key.startsWith("on") && fn instanceof LambdaFunctionCall) {
        const event = key.slice(2).toLowerCase();
        element.addEventListener(event, this.wrapCallback(fn));
      }
    }
    for (const child of vNode.children) {
      if (typeof child === "string") {
        textBuffer.push(child);
      } else {
        element.appendChild(this.createElement(child));
      }
    }
    flushTextBuffer();
    return element;
  }
  wrapCallback(fn) {
    return () => {
      fn.evalCall(null);
    };
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

//# debugId=C90EFAD13D3B77BB64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibGFuZ3VhZ2Uvc3JjL2NvcmUvZ3JhbW1hci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9hc3QudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvdG9rZW5pemVyL3Rva2VuaXplci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9lcnJvcnMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0cy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9wYXJzZXIvcGFyc2VyX3N0YXRtZW50cy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9wYXJzZXIvcGFyc2VyLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5LnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL3R5cGVzL3R5cGVfb2JqZWN0cy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS90eXBlcy9hdXRvYm94aW5nLnRzIiwgImxhbmd1YWdlL3NyYy9saWJyYXJ5L25hdGl2ZV9mdW5jdGlvbnMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvdHlwZXMvdHlwZWNoZWNrZXIudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvbGlua2VyL2RlcGVuZGVuY2llcy50cyIsICJsYW5ndWFnZS9zcmMvbGlicmFyeS9uYXRpdmVfY2xhc3MudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfY29udmVyc2lvbi50cyIsICJsYW5ndWFnZS9zcmMvbGlicmFyeS9jbGFzc2VzL3N0cmluZy50cyIsICJsYW5ndWFnZS9zcmMvbGlicmFyeS9jbGFzc2VzL3N5c3RlbS50cyIsICJsYW5ndWFnZS9zcmMvbGlicmFyeS9jbGFzc2VzL2Fzc2VydC50cyIsICJsYW5ndWFnZS9zcmMvbGlicmFyeS9jbGFzc2VzL251bWJlci50cyIsICJsYW5ndWFnZS9zcmMvbGlicmFyeS9jbGFzc2VzL2FycmF5LnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2V2ZW50L3N0YXRlLnRzIiwgImxhbmd1YWdlL3NyYy9saWJyYXJ5L2NsYXNzZXMvc3RhdGUudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvbmF0aXZlX2NsYXNzZXMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvbGlua2VyL2xpbmtlci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9ydW50aW1lLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL3Rlc3RzL3Rlc3RzdWl0ZXMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXIudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvbG9hZGVycy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9wcm9ncmFtLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2V2ZW50L3BpcGVsaW5lLnRzIiwgImxhbmd1YWdlL3NyYy9ob3N0L2VuZ2luZS50cyIsICJsYW5ndWFnZS9zcmMvaG9zdC9kb20udHMiLCAibGFuZ3VhZ2Uvc3JjL2hvc3QvcnVudGltZS50cyIsICJsYW5ndWFnZS9zcmMvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiaW1wb3J0IHR5cGUge1NvdXJjZX0gZnJvbSBcIi4vcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuZXhwb3J0IGNsYXNzIEdSQU1NQVIge1xuXHRzdGF0aWMgSU1QT1JUOiBzdHJpbmcgPSAnaW1wb3J0Jztcblx0c3RhdGljIEZST006IHN0cmluZyA9ICdmcm9tJztcblx0c3RhdGljIExFVDogc3RyaW5nID0gJ2xldCc7XG5cdHN0YXRpYyBPUEVOOiBzdHJpbmcgPSAnb3Blbic7XG5cdHN0YXRpYyBDTEFTUzogc3RyaW5nID0gJ2NsYXNzJztcblx0c3RhdGljIElOVEVSRkFDRTogc3RyaW5nID0gJ2ludGVyZmFjZSc7XG5cdHN0YXRpYyBFWFRFTkRTOiBzdHJpbmcgPSAnZXh0ZW5kcyc7XG5cdHN0YXRpYyBJTVBMRU1FTlRTOiBzdHJpbmcgPSAnaW1wbGVtZW50cyc7XG5cdHN0YXRpYyBDT05TVFJVQ1RPUjogc3RyaW5nID0gJ2NvbnN0cnVjdG9yJztcblx0c3RhdGljIE5FVzogc3RyaW5nID0gJ25ldyc7XG5cdHN0YXRpYyBUSElTOiBzdHJpbmcgPSAndGhpcyc7XG5cdHN0YXRpYyBQVUJMSUM6IHN0cmluZyA9ICdwdWJsaWMnO1xuXHRzdGF0aWMgUFJJVkFURTogc3RyaW5nID0gJ3ByaXZhdGUnO1xuXHRzdGF0aWMgU1RBVElDOiBzdHJpbmcgPSAnc3RhdGljJztcblx0c3RhdGljIFJFQURPTkxZOiBzdHJpbmcgPSAncmVhZG9ubHknO1xuXHRzdGF0aWMgUkVUVVJOOiBzdHJpbmcgPSAncmV0dXJuJztcblx0c3RhdGljIFNVUEVSOiBzdHJpbmcgPSAnc3VwZXInO1xuXHRzdGF0aWMgVFJVRTogc3RyaW5nID0gJ3RydWUnO1xuXHRzdGF0aWMgRkFMU0U6IHN0cmluZyA9ICdmYWxzZSc7XG5cdHN0YXRpYyBJRjogc3RyaW5nID0gJ2lmJztcblx0c3RhdGljIEVMU0U6IHN0cmluZyA9ICdlbHNlJztcblx0c3RhdGljIE1BVENIOiBzdHJpbmcgPSAnbWF0Y2gnO1xuXHRzdGF0aWMgREVGQVVMVDogc3RyaW5nID0gJ2RlZmF1bHQnO1xuXHRzdGF0aWMgRk9SRUFDSDogc3RyaW5nID0gJ2ZvcmVhY2gnO1xuXHRzdGF0aWMgSU46IHN0cmluZyA9ICdpbic7XG5cdHN0YXRpYyBOVUxMOiBzdHJpbmcgPSAnbnVsbCc7XG5cdHN0YXRpYyBWRE9NOiBzdHJpbmcgPSAndmRvbSc7XG5cblx0c3RhdGljIEJSQUNLRVRfU1FVQVJFX09QRU46IHN0cmluZyA9ICdbJztcblx0c3RhdGljIEJSQUNLRVRfU1FVQVJFX0NMT1NFOiBzdHJpbmcgPSAnXSc7XG5cdHN0YXRpYyBCUkFDRV9PUEVOOiBzdHJpbmcgPSAneyc7XG5cdHN0YXRpYyBCUkFDRV9DTE9TRTogc3RyaW5nID0gJ30nO1xuXHRzdGF0aWMgUEFSRU5USEVTRVNfT1BFTjogc3RyaW5nID0gJygnO1xuXHRzdGF0aWMgUEFSRU5USEVTRVNfQ0xPU0U6IHN0cmluZyA9ICcpJztcblx0c3RhdGljIFNFTUlDT0xPTjogc3RyaW5nID0gJzsnO1xuXHRzdGF0aWMgQ09MT046IHN0cmluZyA9ICc6Jztcblx0c3RhdGljIENPTU1BOiBzdHJpbmcgPSAnLCc7XG5cblx0c3RhdGljIEFSUk9XOiBzdHJpbmcgPSAnLT4nO1xuXHRzdGF0aWMgRE9UOiBzdHJpbmcgPSAnLic7XG5cdHN0YXRpYyBBU1NJR046IHN0cmluZyA9ICc9Jztcblx0c3RhdGljIFBMVVM6IHN0cmluZyA9ICcrJztcblx0c3RhdGljIE1JTlVTOiBzdHJpbmcgPSAnLSc7XG5cdHN0YXRpYyBESVZJREU6IHN0cmluZyA9ICcvJztcblx0c3RhdGljIE1VTFRJUExZOiBzdHJpbmcgPSAnKic7XG5cdHN0YXRpYyBNT0RVTFVTOiBzdHJpbmcgPSAnJSc7XG5cblx0c3RhdGljIEVYQ0xBTUFUSU9OX01BUks6IHN0cmluZyA9ICchJztcblx0c3RhdGljIFFVRVNUSU9OX01BUks6IHN0cmluZyA9ICc/Jztcblx0c3RhdGljIExFU1NfVEhBTjogc3RyaW5nID0gJzwnO1xuXHRzdGF0aWMgR1JFQVRFUl9USEFOOiBzdHJpbmcgPSAnPic7XG5cdHN0YXRpYyBMRVNTX0VRVUFMOiBzdHJpbmcgPSAnPD0nO1xuXHRzdGF0aWMgR1JFQVRFUl9FUVVBTDogc3RyaW5nID0gJz49Jztcblx0c3RhdGljIEVRVUFMOiBzdHJpbmcgPSAnPT0nO1xuXHRzdGF0aWMgTk9UX0VRVUFMOiBzdHJpbmcgPSAnIT0nO1xuXHRzdGF0aWMgQU5EOiBzdHJpbmcgPSAnJiYnO1xuXHRzdGF0aWMgT1I6IHN0cmluZyA9ICd8fCc7XG5cblx0c3RhdGljIFhNTF9DTE9TRV9UQUc6IHN0cmluZyA9ICcvPic7XG5cdHN0YXRpYyBYTUxfT1BFTl9DTE9TRV9UQUc6IHN0cmluZyA9ICc8Lyc7XG5cblx0c3RhdGljIEtFWVdPUkRTOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLklNUE9SVCxcblx0XHRHUkFNTUFSLkZST00sXG5cdFx0R1JBTU1BUi5PUEVOLFxuXHRcdEdSQU1NQVIuQ0xBU1MsXG5cdFx0R1JBTU1BUi5JTlRFUkZBQ0UsXG5cdFx0R1JBTU1BUi5FWFRFTkRTLFxuXHRcdEdSQU1NQVIuSU1QTEVNRU5UUyxcblx0XHRHUkFNTUFSLlBVQkxJQyxcblx0XHRHUkFNTUFSLlBSSVZBVEUsXG5cdFx0R1JBTU1BUi5TVEFUSUMsXG5cdFx0R1JBTU1BUi5SRUFET05MWSxcblx0XHRHUkFNTUFSLlJFVFVSTixcblx0XHRHUkFNTUFSLkxFVCxcblx0XHRHUkFNTUFSLk5FVyxcblx0XHRHUkFNTUFSLlRISVMsXG5cdFx0R1JBTU1BUi5JRixcblx0XHRHUkFNTUFSLkVMU0UsXG5cdFx0R1JBTU1BUi5NQVRDSCxcblx0XHRHUkFNTUFSLkRFRkFVTFQsXG5cdFx0R1JBTU1BUi5GT1JFQUNILFxuXHRcdEdSQU1NQVIuSU4sXG5cdFx0R1JBTU1BUi5OVUxMLFxuXHRcdEdSQU1NQVIuVkRPTSxcblx0XTtcblx0c3RhdGljIEFSSVRITUVUSUM6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuUExVUyxcblx0XHRHUkFNTUFSLk1JTlVTLFxuXHRcdEdSQU1NQVIuRElWSURFLFxuXHRcdEdSQU1NQVIuTVVMVElQTFksXG5cdFx0R1JBTU1BUi5NT0RVTFVTXG5cdF07XG5cdHN0YXRpYyBDT01QQVJJU09OOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLkxFU1NfVEhBTixcblx0XHRHUkFNTUFSLkdSRUFURVJfVEhBTixcblx0XHRHUkFNTUFSLkxFU1NfRVFVQUwsXG5cdFx0R1JBTU1BUi5HUkVBVEVSX0VRVUFMXG5cdF07XG5cdHN0YXRpYyBFUVVBTElUWTogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5FUVVBTCxcblx0XHRHUkFNTUFSLk5PVF9FUVVBTFxuXHRdO1xuXHRzdGF0aWMgTE9HSUNBTDogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5BTkQsXG5cdFx0R1JBTU1BUi5PUlxuXHRdO1xuXHRzdGF0aWMgT1BFUkFUT1JTOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLkVYQ0xBTUFUSU9OX01BUkssXG5cdFx0R1JBTU1BUi5RVUVTVElPTl9NQVJLLFxuXHRcdEdSQU1NQVIuQVJST1csXG5cdFx0R1JBTU1BUi5ET1QsXG5cdFx0R1JBTU1BUi5BU1NJR04sXG5cdFx0R1JBTU1BUi5QTFVTLFxuXHRcdEdSQU1NQVIuTUlOVVMsXG5cdFx0R1JBTU1BUi5ESVZJREUsXG5cdFx0R1JBTU1BUi5NVUxUSVBMWSxcblx0XHRHUkFNTUFSLk1PRFVMVVMsXG5cdFx0R1JBTU1BUi5MRVNTX1RIQU4sXG5cdFx0R1JBTU1BUi5HUkVBVEVSX1RIQU4sXG5cdFx0R1JBTU1BUi5MRVNTX0VRVUFMLFxuXHRcdEdSQU1NQVIuR1JFQVRFUl9FUVVBTCxcblx0XHRHUkFNTUFSLkVRVUFMLFxuXHRcdEdSQU1NQVIuTk9UX0VRVUFMLFxuXHRcdEdSQU1NQVIuQU5ELFxuXHRcdEdSQU1NQVIuT1IsXG5cdF07XG5cdHN0YXRpYyBNQVRIX09QRVJBVE9SUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5QTFVTLFxuXHRcdEdSQU1NQVIuTUlOVVMsXG5cdFx0R1JBTU1BUi5ESVZJREUsXG5cdFx0R1JBTU1BUi5NVUxUSVBMWSxcblx0XHRHUkFNTUFSLk1PRFVMVVNcblx0XTtcblx0c3RhdGljIExPR0lDX09QRVJBVE9SUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5MRVNTX1RIQU4sXG5cdFx0R1JBTU1BUi5HUkVBVEVSX1RIQU4sXG5cdFx0R1JBTU1BUi5MRVNTX0VRVUFMLFxuXHRcdEdSQU1NQVIuR1JFQVRFUl9FUVVBTCxcblx0XHRHUkFNTUFSLkVRVUFMLFxuXHRcdEdSQU1NQVIuTk9UX0VRVUFMLFxuXHRcdEdSQU1NQVIuQU5ELFxuXHRcdEdSQU1NQVIuT1IsXG5cdF07XG5cdHN0YXRpYyBQVU5DVFVBVElPTlM6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfT1BFTixcblx0XHRHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX0NMT1NFLFxuXHRcdEdSQU1NQVIuQlJBQ0VfT1BFTixcblx0XHRHUkFNTUFSLkJSQUNFX0NMT1NFLFxuXHRcdEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTixcblx0XHRHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFLFxuXHRcdEdSQU1NQVIuU0VNSUNPTE9OLFxuXHRcdEdSQU1NQVIuQ09MT04sXG5cdFx0R1JBTU1BUi5DT01NQVxuXHRdO1xuXHRzdGF0aWMgRE9NX09QRVJBVE9SUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5BUlJPVyxcblx0XHRHUkFNTUFSLkRPVCxcblx0XHRHUkFNTUFSLkFTU0lHTixcblx0XHRHUkFNTUFSLkxFU1NfVEhBTixcblx0XHRHUkFNTUFSLkdSRUFURVJfVEhBTixcblx0XHRHUkFNTUFSLlhNTF9PUEVOX0NMT1NFX1RBRyxcblx0XHRHUkFNTUFSLlhNTF9DTE9TRV9UQUdcblx0XTtcblx0c3RhdGljIERPTV9QVU5DVFVBVElPTlM6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfT1BFTixcblx0XHRHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX0NMT1NFLFxuXHRcdEdSQU1NQVIuQlJBQ0VfT1BFTixcblx0XHRHUkFNTUFSLkJSQUNFX0NMT1NFLFxuXHRcdEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTixcblx0XHRHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFLFxuXHRcdEdSQU1NQVIuU0VNSUNPTE9OLFxuXHRcdEdSQU1NQVIuQ09MT04sXG5cdFx0R1JBTU1BUi5DT01NQVxuXHRdO1xufVxuXG5leHBvcnQgY2xhc3MgVFlQRV9FTlVNIHtcblx0c3RhdGljIE1JWEVEOiBzdHJpbmcgPSAnbWl4ZWQnO1xuXHRzdGF0aWMgVk9JRDogc3RyaW5nID0gJ3ZvaWQnO1xuXHRzdGF0aWMgTlVNQkVSOiBzdHJpbmcgPSAnbnVtYmVyJztcblx0c3RhdGljIFNUUklORzogc3RyaW5nID0gJ3N0cmluZyc7XG5cdHN0YXRpYyBCT09MRUFOOiBzdHJpbmcgPSAnYm9vbGVhbic7XG5cdHN0YXRpYyBBUlJBWTogc3RyaW5nID0gJ2FycmF5Jztcblx0c3RhdGljIE5VTEw6IHN0cmluZyA9ICdudWxsJztcbn1cblxuZXhwb3J0IGNsYXNzIFJ1bGVzIHtcblx0c3RhdGljIEtFWVdPUkRTOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoR1JBTU1BUi5LRVlXT1JEUyk7XG5cdHN0YXRpYyBPUEVSQVRPUlM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChHUkFNTUFSLk9QRVJBVE9SUyk7XG5cdHN0YXRpYyBQVU5DVFVBVElPTlM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChHUkFNTUFSLlBVTkNUVUFUSU9OUyk7XG5cdHN0YXRpYyBET01fT1BFUkFUT1JTOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoR1JBTU1BUi5ET01fT1BFUkFUT1JTKTtcblx0c3RhdGljIERPTV9QVU5DVFVBVElPTlM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChHUkFNTUFSLkRPTV9QVU5DVFVBVElPTlMpO1xuXHRzdGF0aWMgQ09NTUVOVF9MSU5FOiBzdHJpbmcgPSAnLy8nO1xuXG5cdGlzQWxwaGEoY2hhcjogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIC9bYS16X10vaS50ZXN0KGNoYXIpO1xuXHR9XG5cblx0aXNOdW1lcmljKGNoYXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAvWzAtOV0vLnRlc3QoY2hhcik7XG5cdH1cblxuXHRpc0FscGhhTnVtZXJpYyhjaGFyOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pc0FscGhhKGNoYXIpIHx8IHRoaXMuaXNOdW1lcmljKGNoYXIpO1xuXHR9XG5cblx0aXNXaGl0ZXNwYWNlKGNoYXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAvXFxzLy50ZXN0KGNoYXIpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUb2tlblR5cGUge1xuXHRzdGF0aWMgQ09NTUVOVDogc3RyaW5nID0gJ2NvbW1lbnQnO1xuXHRzdGF0aWMgQU5OT1RBVElPTjogc3RyaW5nID0gJ2Fubm90YXRpb24nO1xuXHRzdGF0aWMgSURFTlRJRklFUjogc3RyaW5nID0gJ2lkZW50aWZpZXInO1xuXHRzdGF0aWMgS0VZV09SRDogc3RyaW5nID0gJ2tleXdvcmQnO1xuXHRzdGF0aWMgUFVOQ1RVQVRJT046IHN0cmluZyA9ICdwdW5jdHVhdGlvbic7XG5cdHN0YXRpYyBOVU1CRVI6IHN0cmluZyA9ICdudW1iZXInO1xuXHRzdGF0aWMgU1RSSU5HOiBzdHJpbmcgPSAnc3RyaW5nJztcblx0c3RhdGljIEJPT0xFQU46IHN0cmluZyA9ICdib29sZWFuJztcblx0c3RhdGljIE9QRVJBVE9SOiBzdHJpbmcgPSAnb3BlcmF0b3InO1xuXHRzdGF0aWMgVEVYVDogc3RyaW5nID0gJ3RleHQnO1xuXHRzdGF0aWMgRU9GOiBzdHJpbmcgPSAnZW9mJztcbn1cblxuZXhwb3J0IGNsYXNzIFRva2VuIHtcblx0dHlwZTogc3RyaW5nO1xuXHR2YWx1ZTogc3RyaW5nO1xuXHRsaW5lOiBudW1iZXIgPSAxO1xuXHRjb2x1bW46IG51bWJlciA9IDE7XG5cdHN0YXJ0OiBudW1iZXI7XG5cdGVuZDogbnVtYmVyO1xuXHRzb3VyY2U6IFNvdXJjZTtcblxuXHRjb25zdHJ1Y3Rvcih0eXBlOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyLCBzb3VyY2U6IFNvdXJjZSkge1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMuc3RhcnQgPSBzdGFydDtcblx0XHR0aGlzLmVuZCA9IGVuZDtcblx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0fVxuXG5cdHdpdGhMaW5lQW5kQ29sdW1uKGxpbmU6IG51bWJlciwgY29sdW1uOiBudW1iZXIpOiBUb2tlbiB7XG5cdFx0dGhpcy5saW5lID0gbGluZTtcblx0XHR0aGlzLmNvbHVtbiA9IGNvbHVtbjtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0dSQU1NQVIsIFRZUEVfRU5VTX0gZnJvbSBcIi4vZ3JhbW1hclwiO1xuaW1wb3J0IHtNb2RpZmllcnMsIFN1cGVyQ2xhc3N9IGZyb20gXCIuL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7U291cmNlU3Bhbn0gZnJvbSBcIi4vcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuZXhwb3J0IGNsYXNzIEFTVE5vZGVUeXBlIHtcblx0c3RhdGljIFBST0dSQU1NID0gJ3Byb2dyYW0nO1xuXHRzdGF0aWMgSU5ERVggPSAnaW5kZXgnO1xuXHRzdGF0aWMgSURFTlRJRklFUiA9ICdpZGVudGlmaWVyJztcblx0c3RhdGljIEFOTk9UQVRJT04gPSAnYW5ub3RhdGlvbic7XG5cdHN0YXRpYyBQQVJBTUVURVIgPSAncGFyYW1ldGVyJztcblx0c3RhdGljIElNUE9SVCA9IEdSQU1NQVIuSU1QT1JUO1xuXHRzdGF0aWMgTlVNQkVSID0gVFlQRV9FTlVNLk5VTUJFUjtcblx0c3RhdGljIFNUUklORyA9IFRZUEVfRU5VTS5TVFJJTkc7XG5cdHN0YXRpYyBCT09MRUFOID0gVFlQRV9FTlVNLkJPT0xFQU47XG5cdHN0YXRpYyBOVUxMID0gVFlQRV9FTlVNLk5VTEw7XG5cdHN0YXRpYyBORVcgPSBHUkFNTUFSLk5FVztcblx0c3RhdGljIENMQVNTID0gR1JBTU1BUi5DTEFTUztcblx0c3RhdGljIElOVEVSRkFDRSA9IEdSQU1NQVIuSU5URVJGQUNFO1xuXHRzdGF0aWMgQ09OU1RSVUNUT1IgPSBHUkFNTUFSLkNPTlNUUlVDVE9SO1xuXHRzdGF0aWMgVEhJUyA9IEdSQU1NQVIuVEhJUztcblx0c3RhdGljIFJFVFVSTiA9IEdSQU1NQVIuUkVUVVJOO1xuXHRzdGF0aWMgVkRPTSA9ICd2ZG9tX2RlY2xhcmF0aW9uJztcblx0c3RhdGljIFZET01fVEVYVCA9ICd2ZG9tX3RleHRfZGVjbGFyYXRpb24nO1xuXHRzdGF0aWMgVU5BUlkgPSAndW5hcnlfZXhwcmVzc2lvbic7XG5cdHN0YXRpYyBMQU1CREEgPSAnbGFtYmRhX2V4cHJlc3Npb24nO1xuXHRzdGF0aWMgQVJSQVkgPSAnYXJyYXlfZGVjbGFyYXRpb24nO1xuXHRzdGF0aWMgVFlQRSA9ICd0eXBlX2RlY2xhcmF0aW9uJztcblx0c3RhdGljIEZJRUxEID0gJ2ZpZWxkX2RlY2xhcmF0aW9uJztcblx0c3RhdGljIE1FTUJFUiA9ICdtZW1iZXJfZXhwcmVzc2lvbic7XG5cdHN0YXRpYyBNRVRIT0QgPSAnbWV0aG9kX2RlY2xhcmF0aW9uJztcblx0c3RhdGljIENBTEwgPSAnY2FsbF9leHByZXNzaW9uJztcblx0c3RhdGljIFZBUklBQkxFID0gJ3ZhcmlhYmxlX2RlY2xhcmF0aW9uJztcblx0c3RhdGljIEVYUFJFU1NJT04gPSAnZXhwcmVzc2lvbl9zdGF0ZW1lbnQnO1xuXHRzdGF0aWMgQklOQVJZID0gJ2JpbmFyeV9leHByZXNzaW9uJztcblx0c3RhdGljIEFTU0lHTk1FTlQgPSAnYXNzaWdubWVudF9leHByZXNzaW9uJztcblx0c3RhdGljIElGID0gJ2lmX3N0YXRlbWVudCc7XG5cdHN0YXRpYyBUSEVOID0gJ3RoZW5fc3RhdGVtZW50Jztcblx0c3RhdGljIEVMU0UgPSAnZWxzZV9zdGF0ZW1lbnQnO1xuXHRzdGF0aWMgTUFUQ0ggPSAnbWF0Y2hfc3RhdGVtZW50Jztcblx0c3RhdGljIE1BVENIX0NBU0UgPSAnbWF0Y2hfY2FzZV9zdGF0ZW1lbnQnO1xuXHRzdGF0aWMgRk9SRUFDSCA9ICdmb3JlYWNoX3N0YXRlbWVudCc7XG59XG5cbmV4cG9ydCBjbGFzcyBBU1ROb2RlIHtcblx0aXNFeHByZXNzaW9uOiBib29sZWFuID0gZmFsc2U7XG5cdG5hbWU6IHN0cmluZyA9ICcnO1xuXG5cdHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbDtcblx0dHlwZTogc3RyaW5nO1xuXHR2YWx1ZTogYW55IHwgbnVsbCA9IG51bGw7XG5cdGNoaWxkcmVuOiBBU1ROb2RlW107XG5cblx0Y29uc3RydWN0b3IodHlwZTogc3RyaW5nLCBjaGlsZHJlbjogQVNUTm9kZVtdID0gW10pIHtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUQ2FsbE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0Y2FsbGVlOiBBU1ROb2RlO1xuXHRhcmd1bWVudHM6IEFTVE5vZGVbXTtcblxuXHRjb25zdHJ1Y3RvcihjYWxsZWU6IEFTVE5vZGUsIGFyZ3M6IEFTVE5vZGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuQ0FMTCk7XG5cblx0XHR0aGlzLmNhbGxlZSA9IGNhbGxlZTtcblx0XHR0aGlzLmFyZ3VtZW50cyA9IGFyZ3M7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1ROZXdOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGFyZ3VtZW50czogQVNUTm9kZVtdO1xuXHR0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGU7XG5cblx0Y29uc3RydWN0b3IoYXJnczogQVNUTm9kZVtdLCB0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGUpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5ORVcpO1xuXG5cdFx0dGhpcy5hcmd1bWVudHMgPSBhcmdzO1xuXHRcdHRoaXMudHlwZUFubm90YXRpb24gPSB0eXBlQW5ub3RhdGlvbjtcblx0XHR0aGlzLm5hbWUgPSB0eXBlQW5ub3RhdGlvbi5uYW1lO1xuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUQmluYXJ5Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRsZWZ0OiBBU1ROb2RlO1xuXHRyaWdodDogQVNUTm9kZTtcblx0b3BlcmF0b3I6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihsZWZ0OiBBU1ROb2RlLCByaWdodDogQVNUTm9kZSwgb3BlcmF0b3I6IHN0cmluZykge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkJJTkFSWSk7XG5cblx0XHR0aGlzLmxlZnQgPSBsZWZ0O1xuXHRcdHRoaXMucmlnaHQgPSByaWdodDtcblx0XHR0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RBc3NpZ25tZW50Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRsZWZ0OiBBU1ROb2RlO1xuXHRyaWdodDogQVNUTm9kZTtcblxuXHRjb25zdHJ1Y3RvcihsZWZ0OiBBU1ROb2RlLCByaWdodDogQVNUTm9kZSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkFTU0lHTk1FTlQpO1xuXG5cdFx0dGhpcy5sZWZ0ID0gbGVmdDtcblx0XHR0aGlzLnJpZ2h0ID0gcmlnaHQ7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RNZW1iZXJOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdG9iamVjdDogQVNUTm9kZTtcblx0cHJvcGVydHk6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihvYmplY3Q6IEFTVE5vZGUsIHByb3BlcnR5OiBzdHJpbmcpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5NRU1CRVIpO1xuXG5cdFx0dGhpcy5vYmplY3QgPSBvYmplY3Q7XG5cdFx0dGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUVW5hcnlOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdG9wZXJhdG9yOiBzdHJpbmc7XG5cdGFyZ3VtZW50OiBBU1ROb2RlIHwgQVNUVW5hcnlOb2RlO1xuXG5cdGNvbnN0cnVjdG9yKG9wZXJhdG9yOiBzdHJpbmcsIGFyZ3VtZW50OiBBU1ROb2RlIHwgQVNUVW5hcnlOb2RlKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuVU5BUlkpO1xuXG5cdFx0dGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuXHRcdHRoaXMuYXJndW1lbnQgPSBhcmd1bWVudDtcblx0XHR0aGlzLmlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEluZGV4Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRvYmplY3Q6IEFTVE5vZGU7XG5cdGluZGV4OiBBU1ROb2RlO1xuXG5cdGNvbnN0cnVjdG9yKG9iamVjdDogQVNUTm9kZSwgaW5kZXg6IEFTVE5vZGUpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5JTkRFWCk7XG5cblx0XHR0aGlzLm9iamVjdCA9IG9iamVjdDtcblx0XHR0aGlzLmluZGV4ID0gaW5kZXg7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RBcnJheU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0ZWxlbWVudHM6IEFTVE5vZGVbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkFSUkFZKTtcblxuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUTGFtYmRhTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW107XG5cdHJldHVyblR5cGU6IEFTVFR5cGVOb2RlO1xuXG5cdGNvbnN0cnVjdG9yKHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSwgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGUsIGNoaWxkcmVuOiBBU1ROb2RlW10pIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5MQU1CREEsIGNoaWxkcmVuKTtcblxuXHRcdHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG5cdFx0dGhpcy5yZXR1cm5UeXBlID0gcmV0dXJuVHlwZTtcblxuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNURmllbGROb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdG1vZGlmaWVyczogTW9kaWZpZXJzO1xuXHRmaWVsZFR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbDtcblx0aW5pdDogQVNUTm9kZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbW9kaWZpZXJzOiBNb2RpZmllcnMsIGZpZWxkVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsLCBpbml0OiBBU1ROb2RlIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5GSUVMRCk7XG5cblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuXHRcdHRoaXMuZmllbGRUeXBlID0gZmllbGRUeXBlO1xuXHRcdHRoaXMuaW5pdCA9IGluaXQ7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFZhcmlhYmxlTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHR0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGUgfCBudWxsID0gbnVsbDtcblx0aW5pdDogQVNUTm9kZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZUFubm90YXRpb246IEFTVFR5cGVOb2RlIHwgbnVsbCA9IG51bGwsIGluaXQ6IEFTVE5vZGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLlZBUklBQkxFKTtcblxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy50eXBlQW5ub3RhdGlvbiA9IHR5cGVBbm5vdGF0aW9uO1xuXHRcdHRoaXMuaW5pdCA9IGluaXQ7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGV4cHI6IEFTVE5vZGU7XG5cblx0Y29uc3RydWN0b3IoZXhwcjogQVNUTm9kZSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkVYUFJFU1NJT04pO1xuXG5cdFx0dGhpcy5leHByID0gZXhwcjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUUmV0dXJuTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRhcmd1bWVudDogQVNUTm9kZSB8IEFTVEV4cHJlc3Npb25Ob2RlIHwgbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihhcmd1bWVudDogQVNUTm9kZSB8IEFTVEV4cHJlc3Npb25Ob2RlIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5SRVRVUk4pO1xuXG5cdFx0dGhpcy5hcmd1bWVudCA9IGFyZ3VtZW50O1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RDbGFzc05vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0YW5ub3RhdGlvbnM6IEFTVEFubm90YXRpb25Ob2RlW107XG5cdG1vZGlmaWVyczogTW9kaWZpZXJzO1xuXHR0eXBlUGFyYW1ldGVyczogc3RyaW5nW107XG5cdHN1cGVyQ2xhc3M6IFN1cGVyQ2xhc3MgfCBudWxsO1xuXHRpbXBsZW1lbnRzSW50ZXJmYWNlczogQVNUVHlwZU5vZGVbXTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0YW5ub3RhdGlvbnM6IEFTVEFubm90YXRpb25Ob2RlW10sXG5cdFx0bW9kaWZpZXJzOiBNb2RpZmllcnMsXG5cdFx0dHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdLFxuXHRcdGltcGxlbWVudHNJbnRlcmZhY2VzOiBBU1RUeXBlTm9kZVtdLFxuXHRcdHN1cGVyQ2xhc3M6IFN1cGVyQ2xhc3MgfCBudWxsID0gbnVsbCxcblx0XHRjaGlsZHJlbjogQVNUTm9kZVtdID0gW11cblx0KSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuQ0xBU1MsIGNoaWxkcmVuKTtcblxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5hbm5vdGF0aW9ucyA9IGFubm90YXRpb25zO1xuXHRcdHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuXHRcdHRoaXMudHlwZVBhcmFtZXRlcnMgPSB0eXBlUGFyYW1ldGVycztcblx0XHR0aGlzLnN1cGVyQ2xhc3MgPSBzdXBlckNsYXNzO1xuXHRcdHRoaXMuaW1wbGVtZW50c0ludGVyZmFjZXMgPSBpbXBsZW1lbnRzSW50ZXJmYWNlcztcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUSW50ZXJmYWNlTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRhbm5vdGF0aW9uczogQVNUQW5ub3RhdGlvbk5vZGVbXTtcblx0bW9kaWZpZXJzOiBNb2RpZmllcnM7XG5cdHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXTtcblx0ZXh0ZW5kc0ludGVyZmFjZXM6IHN0cmluZ1tdO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdG5hbWU6IHN0cmluZyxcblx0XHRhbm5vdGF0aW9uczogQVNUQW5ub3RhdGlvbk5vZGVbXSxcblx0XHRtb2RpZmllcnM6IE1vZGlmaWVycyxcblx0XHR0eXBlUGFyYW1ldGVyczogc3RyaW5nW10sXG5cdFx0ZXh0ZW5kc0ludGVyZmFjZXM6IHN0cmluZ1tdLFxuXHRcdGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXVxuXHQpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5JTlRFUkZBQ0UsIGNoaWxkcmVuKTtcblxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5hbm5vdGF0aW9ucyA9IGFubm90YXRpb25zO1xuXHRcdHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuXHRcdHRoaXMudHlwZVBhcmFtZXRlcnMgPSB0eXBlUGFyYW1ldGVycztcblx0XHR0aGlzLmV4dGVuZHNJbnRlcmZhY2VzID0gZXh0ZW5kc0ludGVyZmFjZXM7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEFubm90YXRpb25Ob2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdHByb3BlcnRpZXM6IE1hcDxzdHJpbmcsIEFTVE5vZGU+ID0gbmV3IE1hcCgpO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkFOTk9UQVRJT04pO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFBhcmFtZXRlck5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0dHlwZUFubm90YXRpb246IEFTVFR5cGVOb2RlIHwgbnVsbDtcblx0ZGVmYXVsdFZhbHVlOiBBU1ROb2RlIHwgbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGVBbm5vdGF0aW9uOiBBU1RUeXBlTm9kZSB8IG51bGwsIGRlZmF1bHRWYWx1ZTogQVNUTm9kZSB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuUEFSQU1FVEVSKTtcblx0XHR0aGlzLnR5cGVBbm5vdGF0aW9uID0gdHlwZUFubm90YXRpb247XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmRlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUTWV0aG9kTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRhbm5vdGF0aW9uczogQVNUQW5ub3RhdGlvbk5vZGVbXTtcblx0bW9kaWZpZXJzOiBNb2RpZmllcnM7XG5cdHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXTtcblx0cGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdO1xuXHRyZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGw7XG5cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0dHlwZTogc3RyaW5nLFxuXHRcdGFubm90YXRpb25zOiBBU1RBbm5vdGF0aW9uTm9kZVtdLFxuXHRcdG1vZGlmaWVyczogTW9kaWZpZXJzLFxuXHRcdHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXSxcblx0XHRwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sXG5cdFx0cmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsID0gbnVsbCxcblx0XHRjaGlsZHJlbjogQVNUTm9kZVtdID0gW10sXG5cdCkge1xuXHRcdHN1cGVyKHR5cGUsIGNoaWxkcmVuKTtcblxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5hbm5vdGF0aW9ucyA9IGFubm90YXRpb25zO1xuXHRcdHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuXHRcdHRoaXMudHlwZVBhcmFtZXRlcnMgPSB0eXBlUGFyYW1ldGVycztcblx0XHR0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuXHRcdHRoaXMucmV0dXJuVHlwZSA9IHJldHVyblR5cGU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEltcG9ydE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0bmFtZXM6IHN0cmluZ1tdO1xuXHRmcm9tOiBzdHJpbmcgfCBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWVzOiBzdHJpbmdbXSwgZnJvbTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5JTVBPUlQpO1xuXG5cdFx0dGhpcy5uYW1lcyA9IG5hbWVzO1xuXHRcdHRoaXMuZnJvbSA9IGZyb207XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFRoZW5Ob2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGNvbnN0cnVjdG9yKGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLlRIRU4sIGNoaWxkcmVuKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUSWZOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGNvbmRpdGlvbjogQVNUTm9kZTtcblx0dGhlbjogQVNUVGhlbk5vZGU7XG5cdGVsc2U6IEFTVElmTm9kZSB8IEFTVEVsc2VOb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IoY29uZGl0aW9uOiBBU1ROb2RlLCB0aGVuOiBBU1RUaGVuTm9kZSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLklGKTtcblxuXHRcdHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuXHRcdHRoaXMudGhlbiA9IHRoZW47XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEVsc2VOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGNvbnN0cnVjdG9yKGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkVMU0UsIGNoaWxkcmVuKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUTWF0Y2hOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGV4cHJlc3Npb246IEFTVE5vZGU7XG5cdGNhc2VzOiBBU1RNYXRjaENhc2VOb2RlW107XG5cdGRlZmF1bHRDYXNlOiBBU1RNYXRjaENhc2VOb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IoZXhwcmVzc2lvbjogQVNUTm9kZSwgY2FzZXM6IEFTVE1hdGNoQ2FzZU5vZGVbXSwgZGVmYXVsdENhc2U6IEFTVE1hdGNoQ2FzZU5vZGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLk1BVENIKTtcblxuXHRcdHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG5cdFx0dGhpcy5jYXNlcyA9IGNhc2VzO1xuXHRcdHRoaXMuZGVmYXVsdENhc2UgPSBkZWZhdWx0Q2FzZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUTWF0Y2hDYXNlTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHR0ZXN0OiBBU1ROb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IoY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuTUFUQ0hfQ0FTRSwgY2hpbGRyZW4pO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RGb3JlYWNoTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRpdGVyYXRvcjogc3RyaW5nO1xuXHRpdGVyYWJsZTogQVNUTm9kZTtcblx0Ym9keTogQVNUTm9kZVtdO1xuXG5cdGNvbnN0cnVjdG9yKGl0ZXJhdG9yOiBzdHJpbmcsIGl0ZXJhYmxlOiBBU1ROb2RlLCBib2R5OiBBU1ROb2RlW10gPSBbXSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkZPUkVBQ0gpO1xuXG5cdFx0dGhpcy5pdGVyYXRvciA9IGl0ZXJhdG9yO1xuXHRcdHRoaXMuaXRlcmFibGUgPSBpdGVyYWJsZTtcblx0XHR0aGlzLmJvZHkgPSBib2R5O1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RUeXBlTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRzdGF0aWMgS0lORF9TSU1QTEUgPSAnc2ltcGxlJztcblx0c3RhdGljIEtJTkRfR0VORVJJQyA9ICdnZW5lcmljJztcblx0c3RhdGljIEtJTkRfTEFNQkRBID0gJ2xhbWJkYSc7XG5cblx0a2luZDogc3RyaW5nO1xuXHR0eXBlQXJndW1lbnRzOiBBU1RUeXBlTm9kZVtdID0gW107XG5cdHBhcmFtZXRlclR5cGVzOiBBU1RUeXBlTm9kZVtdID0gW107XG5cdHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbCA9IG51bGw7XG5cdG51bGxhYmxlOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKGtpbmQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBudWxsYWJsZTogYm9vbGVhbiA9IGZhbHNlKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuVFlQRSk7XG5cblx0XHR0aGlzLmtpbmQgPSBraW5kO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5udWxsYWJsZSA9IG51bGxhYmxlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RWRG9tTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRyZWFkb25seSB0YWc6IHN0cmluZztcblx0cmVhZG9ubHkgcHJvcHM6IE1hcDxzdHJpbmcsIEFTVE5vZGU+ID0gbmV3IE1hcCgpO1xuXG5cdGNvbnN0cnVjdG9yKHRhZzogc3RyaW5nLCBwcm9wczogTWFwPHN0cmluZywgQVNUTm9kZT4sIGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLlZET00sIGNoaWxkcmVuKTtcblx0XHR0aGlzLnRhZyA9IHRhZztcblx0XHR0aGlzLnByb3BzID0gcHJvcHM7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFZEb21UZXh0Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuVkRPTV9URVhUKTtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtHUkFNTUFSLCBSdWxlcywgVG9rZW4sIFRva2VuVHlwZX0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcbmltcG9ydCB7dGhyb3dUb2tlbkVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQgdHlwZSB7U291cmNlfSBmcm9tIFwiLi4vcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuZXhwb3J0IGNsYXNzIFRva2VuaXplciB7XG5cdHByaXZhdGUgcmVhZG9ubHkgcnVsZXMgPSBuZXcgUnVsZXMoKTtcblx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2U6IFNvdXJjZTtcblxuXHRjb25zdHJ1Y3Rvcihzb3VyY2U6IFNvdXJjZSkge1xuXHRcdHRoaXMuc291cmNlID0gc291cmNlO1xuXHR9XG5cblx0Z2V0VG9rZW5TdHJlYW0oKTogVG9rZW5TdHJlYW0ge1xuXHRcdHJldHVybiBuZXcgVG9rZW5TdHJlYW0odGhpcy50b2tlbml6ZSgpKTtcblx0fVxuXG5cdHRva2VuaXplKCk6IFRva2VuW10ge1xuXHRcdGNvbnN0IHRva2VuczogVG9rZW5bXSA9IFtdO1xuXG5cdFx0bGV0IGk6IG51bWJlciA9IDA7XG5cdFx0bGV0IGxpbmU6IG51bWJlciA9IDE7XG5cdFx0bGV0IGNvbHVtbjogbnVtYmVyID0gMDtcblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdMaW5lQ29tbWVudCA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IGxpbmVDb21tZW50OiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoTGluZUNvbW1lbnRBdChpKTtcblx0XHRcdGlmIChsaW5lQ29tbWVudCkge1xuXHRcdFx0XHR0b2tlbnMucHVzaChsaW5lQ29tbWVudC53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IGxpbmVDb21tZW50LmVuZCArIDE7XG5cblx0XHRcdFx0bGluZSsrO1xuXHRcdFx0XHRjb2x1bW4gPSAwO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nU3RyaW5nID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3Qgc3RyaW5nOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoU3RyaW5nQXQoaSk7XG5cdFx0XHRpZiAoc3RyaW5nKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKHN0cmluZy53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IHN0cmluZy5lbmQgKyAxO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KHN0cmluZyk7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdQdW5jdHVhdGlvbiA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IHB1bmN0dWF0aW9uOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoUHVuY3R1YXRpb25BdChpKTtcblx0XHRcdGlmIChwdW5jdHVhdGlvbikge1xuXHRcdFx0XHR0b2tlbnMucHVzaChwdW5jdHVhdGlvbi53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IHB1bmN0dWF0aW9uLmVuZCArIDE7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQocHVuY3R1YXRpb24pO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nSWRlbnRpZmllciA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IGlkZW50aWZpZXI6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hJZGVudGlmaWVyQXQoaSk7XG5cdFx0XHRpZiAoaWRlbnRpZmllcikge1xuXHRcdFx0XHR0b2tlbnMucHVzaChpZGVudGlmaWVyLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gaWRlbnRpZmllci5lbmQ7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQoaWRlbnRpZmllcik7XG5cblx0XHRcdFx0aWYgKGlkZW50aWZpZXIudmFsdWUgPT09IEdSQU1NQVIuVkRPTSkge1xuXHRcdFx0XHRcdGNvbnN0IHRva2VuaXplZFZEb20gPSB0aGlzLnRva2VuaXplVkRvbShpLCBsaW5lLCBjb2x1bW4pO1xuXHRcdFx0XHRcdHRva2Vucy5wdXNoKC4uLnRva2VuaXplZFZEb20udG9rZW5zKTtcblx0XHRcdFx0XHRpID0gdG9rZW5pemVkVkRvbS5uZXdJbmRleDtcblx0XHRcdFx0XHRsaW5lID0gdG9rZW5pemVkVkRvbS5saW5lO1xuXHRcdFx0XHRcdGNvbHVtbiA9IHRva2VuaXplZFZEb20uY29sdW1uO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdOdW1iZXIgPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBudW1iZXI6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hOdW1iZXJBdChpKTtcblx0XHRcdGlmIChudW1iZXIpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2gobnVtYmVyLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gbnVtYmVyLmVuZDtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChudW1iZXIpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nT3BlcmF0b3IgPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBvcGVyYXRvcjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaE9wZXJhdG9yQXQoaSk7XG5cdFx0XHRpZiAob3BlcmF0b3IpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2gob3BlcmF0b3Iud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBvcGVyYXRvci5lbmQgKyAxO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KG9wZXJhdG9yKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ0Fubm90YXRpb24gPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBhbm5vdGF0aW9uOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoQW5ub3RhdGlvbkF0KGkpO1xuXHRcdFx0aWYgKGFubm90YXRpb24pIHtcblx0XHRcdFx0dG9rZW5zLnB1c2goYW5ub3RhdGlvbi53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IGFubm90YXRpb24uZW5kICsgMTtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChhbm5vdGF0aW9uKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR3aGlsZSAoaSA8IHRoaXMuc291cmNlLmxlbmd0aCkge1xuXHRcdFx0aWYgKHRoaXMuc291cmNlLmNoYXJBdChpKSA9PT0gJ1xcbicpIHtcblx0XHRcdFx0bGluZSsrO1xuXHRcdFx0XHRjb2x1bW4gPSAwO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29sdW1uKys7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLm1hdGNoV2hpdGVzcGFjZUF0KGkpKSB7XG5cdFx0XHRcdGkrKztcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpZklzQ29uc3VtaW5nTGluZUNvbW1lbnQoKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nUHVuY3R1YXRpb24oKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nU3RyaW5nKClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ051bWJlcigpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdJZGVudGlmaWVyKClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ09wZXJhdG9yKClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ0Fubm90YXRpb24oKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0dGhyb3dUb2tlbkVycm9yKCdVbmV4cGVjdGVkIGNoYXJhY3RlcjogJyArIHRoaXMuc291cmNlLmNoYXJBdChpKSk7XG5cdFx0fVxuXG5cdFx0dG9rZW5zLnB1c2goXG5cdFx0XHR0aGlzLmVvZihpKVxuXHRcdFx0ICAgIC53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pXG5cdFx0KTtcblxuXHRcdHJldHVybiB0b2tlbnM7XG5cdH1cblxuXHRlb2YoZW5kOiBudW1iZXIpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuRU9GLCAnJywgZW5kLCBlbmQsIHRoaXMuc291cmNlKVxuXHR9XG5cblx0Y29sdW1PZmZzZXQodG9rZW46IFRva2VuKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdG9rZW4udmFsdWUubGVuZ3RoIC0gMTtcblx0fVxuXG5cdG1hdGNoV2hpdGVzcGFjZUF0KGk6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnJ1bGVzLmlzV2hpdGVzcGFjZSh0aGlzLnNvdXJjZS5jaGFyQXQoaSkpO1xuXHR9XG5cblx0bWF0Y2hOdW1iZXJBdChpOiBudW1iZXIpOiBUb2tlbiB8IG51bGwge1xuXHRcdGlmICghdGhpcy5ydWxlcy5pc051bWVyaWModGhpcy5zb3VyY2UuY2hhckF0KGkpKSkge1xuXHRcdFx0cmV0dXJuIG51bGxcblx0XHR9XG5cdFx0bGV0IHN0YXJ0ID0gaTtcblx0XHR3aGlsZSAodGhpcy5ydWxlcy5pc051bWVyaWModGhpcy5zb3VyY2UuY2hhckF0KGkpKSkgaSsrO1xuXHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLk5VTUJFUiwgdGhpcy5zb3VyY2Uuc2xpY2Uoc3RhcnQsIGkpLCBzdGFydCwgaSwgdGhpcy5zb3VyY2UpO1xuXHR9XG5cblx0bWF0Y2hTdHJpbmdBdChpOiBudW1iZXIpOiBUb2tlbiB8IG51bGwge1xuXHRcdGlmICh0aGlzLnNvdXJjZS5jaGFyQXQoaSkgIT09ICdcIicpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRsZXQgc3RhcnQgPSArK2k7XG5cdFx0d2hpbGUgKHRoaXMuc291cmNlLmNoYXJBdChpKSAhPT0gJ1wiJykgaSsrO1xuXHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLlNUUklORywgdGhpcy5zb3VyY2Uuc2xpY2Uoc3RhcnQsIGkpLCBzdGFydCwgaSwgdGhpcy5zb3VyY2UpO1xuXHR9XG5cblx0bWF0Y2hJZGVudGlmaWVyQXQoaTogbnVtYmVyKTogVG9rZW4gfCBudWxsIHtcblx0XHRpZiAoIXRoaXMucnVsZXMuaXNBbHBoYSh0aGlzLnNvdXJjZS5jaGFyQXQoaSkpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0bGV0IHN0YXJ0ID0gaTtcblx0XHRsZXQgaiA9IGk7XG5cdFx0d2hpbGUgKHRoaXMucnVsZXMuaXNBbHBoYU51bWVyaWModGhpcy5zb3VyY2UuY2hhckF0KGopKSkgaisrO1xuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5zb3VyY2Uuc2xpY2Uoc3RhcnQsIGopO1xuXG5cdFx0bGV0IHR5cGUgPSBUb2tlblR5cGUuSURFTlRJRklFUjtcblx0XHRpZiAoW0dSQU1NQVIuVFJVRSwgR1JBTU1BUi5GQUxTRV0uaW5jbHVkZXModmFsdWUpKSB7XG5cdFx0XHR0eXBlID0gVG9rZW5UeXBlLkJPT0xFQU47XG5cdFx0fSBlbHNlIGlmIChSdWxlcy5LRVlXT1JEUy5oYXModmFsdWUpKSB7XG5cdFx0XHR0eXBlID0gVG9rZW5UeXBlLktFWVdPUkQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBUb2tlbih0eXBlLCB2YWx1ZSwgc3RhcnQsIGosIHRoaXMuc291cmNlKTtcblx0fVxuXG5cdG1hdGNoT3BlcmF0b3JBdChpOiBudW1iZXIsIG9wZXJhdG9yczogU2V0PHN0cmluZz4gPSBSdWxlcy5PUEVSQVRPUlMpOiBUb2tlbiB8IG51bGwge1xuXHRcdGNvbnN0IGNoYXJzID0gdGhpcy5zb3VyY2UuY2hhckF0KGkpICsgdGhpcy5zb3VyY2UuY2hhckF0KGkgKyAxKTtcblx0XHRpZiAob3BlcmF0b3JzLmhhcyhjaGFycykpIHtcblx0XHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLk9QRVJBVE9SLCBjaGFycywgaSwgaSArIDEsIHRoaXMuc291cmNlKTtcblx0XHR9XG5cblx0XHRpZiAob3BlcmF0b3JzLmhhcyh0aGlzLnNvdXJjZS5jaGFyQXQoaSkpKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5PUEVSQVRPUiwgdGhpcy5zb3VyY2UuY2hhckF0KGkpLCBpLCBpLCB0aGlzLnNvdXJjZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRtYXRjaFB1bmN0dWF0aW9uQXQoaTogbnVtYmVyLCBwdW5jdHVhdGlvbnMgPSBSdWxlcy5QVU5DVFVBVElPTlMpOiBUb2tlbiB8IG51bGwge1xuXHRcdGNvbnN0IGNoYXJzID0gdGhpcy5zb3VyY2UuY2hhckF0KGkpICsgdGhpcy5zb3VyY2UuY2hhckF0KGkgKyAxKTtcblx0XHRpZiAocHVuY3R1YXRpb25zLmhhcyhjaGFycykpIHtcblx0XHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLlBVTkNUVUFUSU9OLCBjaGFycywgaSwgaSArIDEsIHRoaXMuc291cmNlKTtcblx0XHR9XG5cblx0XHRpZiAoIXB1bmN0dWF0aW9ucy5oYXModGhpcy5zb3VyY2UuY2hhckF0KGkpKSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLlBVTkNUVUFUSU9OLCB0aGlzLnNvdXJjZS5jaGFyQXQoaSksIGksIGksIHRoaXMuc291cmNlKTtcblx0fVxuXG5cdG1hdGNoTGluZUNvbW1lbnRBdChpOiBudW1iZXIpOiBUb2tlbiB8IG51bGwge1xuXHRcdGlmICghdGhpcy5zb3VyY2Uuc3RhcnRzV2l0aChSdWxlcy5DT01NRU5UX0xJTkUsIGkpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0bGV0IGogPSBpICsgUnVsZXMuQ09NTUVOVF9MSU5FLmxlbmd0aDtcblx0XHR3aGlsZSAoaiA8IHRoaXMuc291cmNlLmxlbmd0aCAmJiB0aGlzLnNvdXJjZS5jaGFyQXQoaikgIT09ICdcXG4nKSBqKys7XG5cdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuQ09NTUVOVCwgdGhpcy5zb3VyY2Uuc2xpY2UoaSwgaiksIGksIGosIHRoaXMuc291cmNlKTtcblx0fVxuXG5cdG1hdGNoQW5ub3RhdGlvbkF0KGk6IG51bWJlcik6IFRva2VuIHwgbnVsbCB7XG5cdFx0aWYgKHRoaXMuc291cmNlLmNoYXJBdChpKSAhPT0gJ0AnKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRsZXQgc3RhcnQgPSBpICsgMTtcblx0XHRsZXQgaiA9IGkgKyAxO1xuXHRcdHdoaWxlICh0aGlzLnJ1bGVzLmlzQWxwaGEodGhpcy5zb3VyY2UuY2hhckF0KGopKSkgaisrO1xuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5zb3VyY2Uuc2xpY2Uoc3RhcnQsIGopO1xuXG5cdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuQU5OT1RBVElPTiwgdmFsdWUsIHN0YXJ0LCBqLCB0aGlzLnNvdXJjZSk7XG5cdH1cblxuXHRwcml2YXRlIHRva2VuaXplVkRvbShzdGFydEluZGV4OiBudW1iZXIsIGxpbmU6IG51bWJlciwgY29sdW1uOiBudW1iZXIpOiB7XG5cdFx0dG9rZW5zOiBUb2tlbltdLFxuXHRcdG5ld0luZGV4OiBudW1iZXIsXG5cdFx0bGluZTogbnVtYmVyLFxuXHRcdGNvbHVtbjogbnVtYmVyXG5cdH0ge1xuXHRcdGNvbnN0IHRva2VuczogVG9rZW5bXSA9IFtdO1xuXHRcdGxldCBpOiBudW1iZXIgPSBzdGFydEluZGV4O1xuXHRcdGxldCB0ZXh0QnVmZmVyOiBzdHJpbmcgPSAnJztcblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdTdHJpbmcgPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBzdHJpbmc6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hTdHJpbmdBdChpKTtcblx0XHRcdGlmIChzdHJpbmcpIHtcblx0XHRcdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cdFx0XHRcdHRva2Vucy5wdXNoKHN0cmluZy53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IHN0cmluZy5lbmQgKyAxO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KHN0cmluZyk7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdQdW5jdHVhdGlvbiA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IHB1bmN0dWF0aW9uOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoUHVuY3R1YXRpb25BdChpLCBSdWxlcy5ET01fUFVOQ1RVQVRJT05TKTtcblx0XHRcdGlmIChwdW5jdHVhdGlvbikge1xuXHRcdFx0XHRmbHVzaFRleHRCdWZmZXIoKTtcblx0XHRcdFx0dG9rZW5zLnB1c2gocHVuY3R1YXRpb24ud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBwdW5jdHVhdGlvbi5lbmQgKyAxO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KHB1bmN0dWF0aW9uKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ0lkZW50aWZpZXIgPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBpZGVudGlmaWVyOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoSWRlbnRpZmllckF0KGkpO1xuXHRcdFx0aWYgKGlkZW50aWZpZXIpIHtcblx0XHRcdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cdFx0XHRcdHRva2Vucy5wdXNoKGlkZW50aWZpZXIud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBpZGVudGlmaWVyLmVuZDtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChpZGVudGlmaWVyKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ051bWJlciA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IG51bWJlcjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaE51bWJlckF0KGkpO1xuXHRcdFx0aWYgKG51bWJlcikge1xuXHRcdFx0XHRmbHVzaFRleHRCdWZmZXIoKTtcblxuXHRcdFx0XHR0b2tlbnMucHVzaChudW1iZXIud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBudW1iZXIuZW5kO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KG51bWJlcik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdPcGVyYXRvciA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IG9wZXJhdG9yOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoT3BlcmF0b3JBdChpLCBSdWxlcy5ET01fT1BFUkFUT1JTKTtcblx0XHRcdGlmIChvcGVyYXRvcikge1xuXHRcdFx0XHRmbHVzaFRleHRCdWZmZXIoKTtcblxuXHRcdFx0XHR0b2tlbnMucHVzaChvcGVyYXRvci53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IG9wZXJhdG9yLmVuZCArIDE7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQob3BlcmF0b3IpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBmbHVzaFRleHRCdWZmZXIgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRpZiAodGV4dEJ1ZmZlci5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKFxuXHRcdFx0XHRcdG5ldyBUb2tlbihcblx0XHRcdFx0XHRcdFRva2VuVHlwZS5URVhULFxuXHRcdFx0XHRcdFx0dGV4dEJ1ZmZlcixcblx0XHRcdFx0XHRcdGkgLSB0ZXh0QnVmZmVyLmxlbmd0aCxcblx0XHRcdFx0XHRcdGksXG5cdFx0XHRcdFx0XHR0aGlzLnNvdXJjZVxuXHRcdFx0XHRcdCkud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uIC0gdGV4dEJ1ZmZlci5sZW5ndGgpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHRleHRCdWZmZXIgPSAnJztcblx0XHRcdH1cblx0XHR9O1xuXG5cblx0XHRsZXQgaWdub3JlV2hpdGVzcGFjZSA9IGZhbHNlO1xuXHRcdHdoaWxlIChpIDwgdGhpcy5zb3VyY2UubGVuZ3RoKSB7XG5cdFx0XHRjb25zdCBjaGFyOiBzdHJpbmcgPSB0aGlzLnNvdXJjZS5jaGFyQXQoaSk7XG5cblx0XHRcdGlmIChjaGFyID09PSBHUkFNTUFSLlNFTUlDT0xPTikge1xuXHRcdFx0XHRmbHVzaFRleHRCdWZmZXIoKTtcblxuXHRcdFx0XHR0b2tlbnMucHVzaChuZXcgVG9rZW4oVG9rZW5UeXBlLlBVTkNUVUFUSU9OLCBjaGFyLCBpLCBpLCB0aGlzLnNvdXJjZSlcblx0XHRcdFx0XHQgICAgICAgICAgICAud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cblx0XHRcdFx0aSsrO1xuXHRcdFx0XHRjb2x1bW4rKztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9IGVsc2UgaWYgKGNoYXIgPT09IEdSQU1NQVIuQlJBQ0VfT1BFTikge1xuXHRcdFx0XHRpZ25vcmVXaGl0ZXNwYWNlID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSBpZiAoY2hhciA9PT0gR1JBTU1BUi5CUkFDRV9PUEVOKSB7XG5cdFx0XHRcdGlnbm9yZVdoaXRlc3BhY2UgPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGlnbm9yZVdoaXRlc3BhY2UpIHtcblx0XHRcdFx0aWYgKHRoaXMubWF0Y2hXaGl0ZXNwYWNlQXQoaSkpIHtcblx0XHRcdFx0XHRpKys7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKGlmSXNDb25zdW1pbmdQdW5jdHVhdGlvbigpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdTdHJpbmcoKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nTnVtYmVyKClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ0lkZW50aWZpZXIoKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nT3BlcmF0b3IoKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHR0ZXh0QnVmZmVyICs9IGNoYXI7XG5cblx0XHRcdGlmIChjaGFyID09PSAnXFxuJykge1xuXHRcdFx0XHRsaW5lKys7XG5cdFx0XHRcdGNvbHVtbiA9IDA7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb2x1bW4rKztcblx0XHRcdH1cblxuXHRcdFx0aSsrO1xuXHRcdH1cblxuXHRcdGZsdXNoVGV4dEJ1ZmZlcigpO1xuXG5cdFx0cmV0dXJuIHt0b2tlbnMsIG5ld0luZGV4OiBpLCBsaW5lLCBjb2x1bW59O1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUb2tlblN0cmVhbSB7XG5cdHRva2VuczogVG9rZW5bXTtcblx0aW5kZXg6IG51bWJlciA9IDA7XG5cblx0Y29uc3RydWN0b3IodG9rZW5zOiBUb2tlbltdKSB7XG5cdFx0dGhpcy50b2tlbnMgPSB0b2tlbnM7XG5cdH1cblxuXHRyZXdpbmQoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaW5kZXggPiAwKSB7XG5cdFx0XHR0aGlzLmluZGV4LS07XG5cdFx0fVxuXHR9XG5cblx0cGVlaygpOiBUb2tlbiB8IG51bGwge1xuXHRcdHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmluZGV4XSB8fCBudWxsO1xuXHR9XG5cblx0bmV4dCgpOiBUb2tlbiB8IG51bGwge1xuXHRcdHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmluZGV4KytdIHx8IG51bGw7XG5cdH1cblxuXHRoYXNOZXh0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7VG9rZW5pemVyfSBmcm9tIFwiLi4vdG9rZW5pemVyL3Rva2VuaXplclwiO1xuaW1wb3J0IHt0aHJvd0RlcGVuZGVuY3lFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuaW1wb3J0IHR5cGUge1Rva2VufSBmcm9tIFwiLi4vZ3JhbW1hclwiO1xuXG5leHBvcnQgY2xhc3MgU291cmNlIHtcblx0c3RhdGljIE5FV0xJTkUgPSAnXFxuJztcblx0cHVibGljIHJlYWRvbmx5IHVybDogc3RyaW5nO1xuXHRwcml2YXRlIGNvZGU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihjb2RlOiBzdHJpbmcsIHVybDogc3RyaW5nID0gJzxpbmxpbmU+Jykge1xuXHRcdHRoaXMudXJsID0gdXJsO1xuXHRcdHRoaXMuY29kZSA9IGNvZGU7XG5cdH1cblxuXHRnZXQgbGVuZ3RoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuY29kZS5sZW5ndGg7XG5cdH1cblxuXHRnZXRUb2tlbml6ZXIoKTogVG9rZW5pemVyIHtcblx0XHRyZXR1cm4gbmV3IFRva2VuaXplcih0aGlzKTtcblx0fVxuXG5cdHNsaWNlKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5jb2RlLnNsaWNlKHN0YXJ0LCBlbmQpO1xuXHR9XG5cblx0Y2hhckF0KGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmNvZGUuY2hhckF0KGluZGV4KTtcblx0fVxuXG5cdHN0YXJ0c1dpdGgodGV4dDogc3RyaW5nLCBwb3NpdGlvbj86IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvZGUuc3RhcnRzV2l0aCh0ZXh0LCBwb3NpdGlvbik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFNvdXJjZVNwYW4ge1xuXHRzb3VyY2U6IFNvdXJjZTtcblx0c3RhcnQ6IG51bWJlcjtcblx0ZW5kOiBudW1iZXI7XG5cdGxpbmU6IG51bWJlcjtcblx0Y29sdW1uOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3Ioc291cmNlOiBTb3VyY2UsIHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XG5cdFx0dGhpcy5zb3VyY2UgPSBzb3VyY2U7XG5cdFx0dGhpcy5zdGFydCA9IHN0YXJ0O1xuXHRcdHRoaXMuZW5kID0gZW5kO1xuXG5cdFx0Y29uc3QgYmVmb3JlID0gc291cmNlLnNsaWNlKDAsIHN0YXJ0KTtcblx0XHRjb25zdCBsaW5lcyA9IGJlZm9yZS5zcGxpdChTb3VyY2UuTkVXTElORSk7XG5cblx0XHR0aGlzLmxpbmUgPSBsaW5lcy5sZW5ndGg7XG5cdFx0dGhpcy5jb2x1bW4gPSAobGluZXNbbGluZXMubGVuZ3RoIC0gMV0gfHwgJycpLmxlbmd0aCArIDE7XG5cdH1cblxuXHR0ZXh0KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlLnNsaWNlKHRoaXMuc3RhcnQsIHRoaXMuZW5kKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BhbkZyb20oc3RhcnRUb2tlbjogVG9rZW4sIGVuZFRva2VuOiBUb2tlbik6IFNvdXJjZVNwYW4ge1xuXHRyZXR1cm4gbmV3IFNvdXJjZVNwYW4oc3RhcnRUb2tlbi5zb3VyY2UsIHN0YXJ0VG9rZW4uc3RhcnQsIGVuZFRva2VuLmVuZCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFNvdXJjZSh1cmw6IHN0cmluZyk6IFByb21pc2U8U291cmNlPiB7XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcblx0aWYgKCFyZXNwb25zZS5vaykge1xuXHRcdHRocm93RGVwZW5kZW5jeUVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7dXJsfWApO1xuXHR9XG5cblx0cmV0dXJuIG5ldyBTb3VyY2UoYXdhaXQgcmVzcG9uc2UudGV4dCgpLCB1cmwpO1xufVxuIiwKICAgICJpbXBvcnQge1NvdXJjZSwgU291cmNlU3Bhbn0gZnJvbSBcIi4vcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuY2xhc3MgRXJyb3JUeXBlcyB7XG5cdHN0YXRpYyBUWVBFX0VSUk9SOiBzdHJpbmcgPSAnVHlwZUVycm9yJztcblx0c3RhdGljIFRPS0VOX0VSUk9SOiBzdHJpbmcgPSAnVG9rZW5FcnJvcic7XG5cdHN0YXRpYyBQQVJTRVJfRVJST1I6IHN0cmluZyA9ICdQYXJzZXJFcnJvcic7XG5cdHN0YXRpYyBSVU5USU1FX0VSUk9SOiBzdHJpbmcgPSAnUnVudGltZUVycm9yJztcblx0c3RhdGljIElOVEVSTkFMX0VSUk9SOiBzdHJpbmcgPSAnSW50ZXJuYWxFcnJvcic7XG5cdHN0YXRpYyBOQVRJVkVfRVJST1I6IHN0cmluZyA9ICdOYXRpdmVFcnJvcic7XG5cdHN0YXRpYyBERVBFTkRFTkNZX0VSUk9SOiBzdHJpbmcgPSAnRGVwZW5kZW5jeUVycm9yJztcbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFFcnJvciBleHRlbmRzIEVycm9yIHtcblx0a2luZDogc3RyaW5nO1xuXHRzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGw7XG5cdG92ZXJyaWRlIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRraW5kOiBzdHJpbmcsXG5cdFx0bWVzc2FnZTogc3RyaW5nLFxuXHRcdHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCxcblx0XHRjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGxcblx0KSB7XG5cdFx0c3VwZXIobWVzc2FnZSk7XG5cdFx0dGhpcy5raW5kID0ga2luZDtcblx0XHR0aGlzLnNwYW4gPSBzcGFuO1xuXHRcdHRoaXMuY2F1c2UgPSBjYXVzZTtcblx0fVxuXG5cdGZvcm1hdCgpOiBzdHJpbmcge1xuXHRcdGlmICh0aGlzLnNwYW4pIHtcblxuXHRcdFx0cmV0dXJuIGBcblske3RoaXMua2luZH1dICR7dGhpcy5tZXNzYWdlfVxuICBhdCAke3RoaXMuc3Bhbi5zb3VyY2UudXJsfToke3RoaXMuc3Bhbi5saW5lfToke3RoaXMuc3Bhbi5jb2x1bW59XG5cbiR7dGhpcy5zcGFuLnRleHQoKX1cbiR7XCIgXCIucmVwZWF0KHRoaXMuc3Bhbi5jb2x1bW4pfSR7XCJeXCIucmVwZWF0KHRoaXMuc3Bhbi5lbmQgLSB0aGlzLnNwYW4uc3RhcnQpfVxuYDtcblx0XHR9XG5cblx0XHRyZXR1cm4gYFske3RoaXMua2luZH1dICR7dGhpcy5tZXNzYWdlfWA7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFUb2tlbkVycm9yIGV4dGVuZHMgTHlyYUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0RXJyb3JUeXBlcy5UT0tFTl9FUlJPUixcblx0XHRcdG1lc3NhZ2UsXG5cdFx0XHRzcGFuLFxuXHRcdFx0Y2F1c2Vcblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhVHlwZUVycm9yIGV4dGVuZHMgTHlyYUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0RXJyb3JUeXBlcy5UWVBFX0VSUk9SLFxuXHRcdFx0bWVzc2FnZSxcblx0XHRcdHNwYW4sXG5cdFx0XHRjYXVzZVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFQYXJzZXJFcnJvciBleHRlbmRzIEx5cmFFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihcblx0XHRcdEVycm9yVHlwZXMuUEFSU0VSX0VSUk9SLFxuXHRcdFx0bWVzc2FnZSxcblx0XHRcdHNwYW4sXG5cdFx0XHRjYXVzZVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFSdW50aW1lRXJyb3IgZXh0ZW5kcyBMeXJhRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRFcnJvclR5cGVzLlJVTlRJTUVfRVJST1IsXG5cdFx0XHRtZXNzYWdlLFxuXHRcdFx0c3Bhbixcblx0XHRcdGNhdXNlXG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYU5hdGl2ZUVycm9yIGV4dGVuZHMgTHlyYUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0RXJyb3JUeXBlcy5OQVRJVkVfRVJST1IsXG5cdFx0XHRtZXNzYWdlLFxuXHRcdFx0c3Bhbixcblx0XHRcdGNhdXNlXG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYURlcGVuZGVuY3lFcnJvciBleHRlbmRzIEx5cmFFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihcblx0XHRcdEVycm9yVHlwZXMuREVQRU5ERU5DWV9FUlJPUixcblx0XHRcdG1lc3NhZ2UsXG5cdFx0XHRzcGFuLFxuXHRcdFx0Y2F1c2Vcblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Rva2VuRXJyb3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IG5ldmVyIHtcblx0dGhyb3cgbmV3IEx5cmFUb2tlbkVycm9yKG1lc3NhZ2UsIHNwYW4sIGNhdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93VHlwZUVycm9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBuZXZlciB7XG5cdHRocm93IG5ldyBMeXJhVHlwZUVycm9yKG1lc3NhZ2UsIHNwYW4sIGNhdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UGFyc2VyRXJyb3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IG5ldmVyIHtcblx0dGhyb3cgbmV3IEx5cmFQYXJzZXJFcnJvcihtZXNzYWdlLCBzcGFuLCBjYXVzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1J1bnRpbWVFcnJvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKTogbmV2ZXIge1xuXHR0aHJvdyBuZXcgTHlyYVJ1bnRpbWVFcnJvcihtZXNzYWdlLCBzcGFuLCBjYXVzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd05hdGl2ZUVycm9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBuZXZlciB7XG5cdHRocm93IG5ldyBMeXJhTmF0aXZlRXJyb3IobWVzc2FnZSwgc3BhbiwgY2F1c2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dEZXBlbmRlbmN5RXJyb3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IG5ldmVyIHtcblx0dGhyb3cgbmV3IEx5cmFEZXBlbmRlbmN5RXJyb3IobWVzc2FnZSwgc3BhbiwgY2F1c2UpO1xufVxuXG4vKipcbiAqIEB0aHJvd3Mge0Vycm9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24gd3JhcEpzRXJyb3IoZXJyb3I6IEVycm9yLCBzb3VyY2U6IFNvdXJjZSk6IEx5cmFFcnJvciB7XG5cdGlmIChlcnJvciBpbnN0YW5jZW9mIEx5cmFFcnJvcikge1xuXHRcdHJldHVybiBlcnJvcjtcblx0fVxuXG5cdHJldHVybiBuZXcgTHlyYUVycm9yKFxuXHRcdEVycm9yVHlwZXMuSU5URVJOQUxfRVJST1IsXG5cdFx0ZXJyb3IubWVzc2FnZSB8fCBTdHJpbmcoZXJyb3IpLFxuXHRcdG5ldyBTb3VyY2VTcGFuKHNvdXJjZSwgMCwgc291cmNlLmxlbmd0aClcblx0KTtcbn1cbiIsCiAgICAiaW1wb3J0IHtHUkFNTUFSfSBmcm9tIFwiLi4vZ3JhbW1hclwiO1xuaW1wb3J0IHtcblx0QVNUQ2xhc3NOb2RlLFxuXHRBU1RGaWVsZE5vZGUsXG5cdEFTVEludGVyZmFjZU5vZGUsXG5cdEFTVE1ldGhvZE5vZGUsXG5cdEFTVE5vZGUsXG5cdEFTVFBhcmFtZXRlck5vZGUsXG5cdEFTVFR5cGVOb2RlXG59IGZyb20gXCIuLi9hc3RcIjtcbmltcG9ydCB7dGhyb3dSdW50aW1lRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcblxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IHtcblx0cGFyZW50OiBFbnZpcm9ubWVudCB8IG51bGw7XG5cdHZhbHVlczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9O1xuXG5cdGNvbnN0cnVjdG9yKHBhcmVudDogRW52aXJvbm1lbnQgfCBudWxsID0gbnVsbCkge1xuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xuXHRcdHRoaXMudmFsdWVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0fVxuXG5cdGRlZmluZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLnZhbHVlc1tuYW1lXSA9IHZhbHVlO1xuXHR9XG5cblx0Z2V0KG5hbWU6IHN0cmluZyk6IGFueSB7XG5cdFx0aWYgKG5hbWUgaW4gdGhpcy52YWx1ZXMpIHtcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlc1tuYW1lXTtcblx0XHR9XG5cdFx0aWYgKHRoaXMucGFyZW50KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJlbnQuZ2V0KG5hbWUpO1xuXHRcdH1cblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5kZWZpbmVkIHZhcmlhYmxlICR7bmFtZX1gKTtcblx0fVxuXG5cdHNldChuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHRpZiAobmFtZSBpbiB0aGlzLnZhbHVlcykge1xuXHRcdFx0dGhpcy52YWx1ZXNbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKHRoaXMucGFyZW50KSB7XG5cdFx0XHR0aGlzLnBhcmVudC5zZXQobmFtZSwgdmFsdWUpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5kZWZpbmVkIHZhcmlhYmxlICR7bmFtZX1gKTtcblx0fVxuXG5cdGhhcyhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXNbbmFtZV0gfHwgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmhhcyhuYW1lKSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEluc3RhbmNlIHtcblx0X19jbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uO1xuXHRfX2luc3RhbmNlRmllbGRzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH07XG5cdF9fc3RhdGljRmllbGRzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH07XG5cdF9fbmF0aXZlSW5zdGFuY2U6IGFueSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24pIHtcblx0XHR0aGlzLl9fY2xhc3NEZWYgPSBjbGFzc0RlZjtcblx0XHR0aGlzLl9faW5zdGFuY2VGaWVsZHMgPSB7fTtcblx0XHR0aGlzLl9fc3RhdGljRmllbGRzID0ge307XG5cdFx0dGhpcy5fX25hdGl2ZUluc3RhbmNlID0gbnVsbDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTW9kaWZpZXJzIHtcblx0b3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuXHRwdWJsaWM6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXHRzdGF0aWM6IGJvb2xlYW4gPSBmYWxzZTtcblx0cmVhZG9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHQvKipcblx0ICogQHBhcmFtIHt7fX0gYXR0cmlidXRlc1xuXHQgKi9cblx0Y29uc3RydWN0b3IoYXR0cmlidXRlczogeyBbaW5kZXg6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9KSB7XG5cdFx0Zm9yIChsZXQgYXR0cmlidXRlIG9mIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpKSB7XG5cdFx0XHRpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShhdHRyaWJ1dGUpKSB7XG5cdFx0XHRcdGNvbnN0IG1vZGlmaWVyczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0gdGhpcztcblx0XHRcdFx0bW9kaWZpZXJzW2F0dHJpYnV0ZV0gPSBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTdXBlckNsYXNzIHtcblx0dHlwZTogc3RyaW5nO1xuXHRuYW1lOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IodHlwZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFJldHVyblZhbHVlIHtcblx0dmFsdWU6IGFueTtcblxuXHRjb25zdHJ1Y3Rvcih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGFzc0ZpZWxkRGVmaW5pdGlvbiB7XG5cdG5hbWU6IHN0cmluZztcblx0dHlwZTogc3RyaW5nIHwgbnVsbDtcblx0bW9kaWZpZXJzOiBNb2RpZmllcnM7XG5cdGluaXRpYWxpemVyOiBBU1ROb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlOiBzdHJpbmcgfCBudWxsLCBtb2RpZmllcnM6IE1vZGlmaWVycywgaW5pdGlhbGl6ZXI6IEFTVE5vZGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHR0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcblx0XHR0aGlzLmluaXRpYWxpemVyID0gaW5pdGlhbGl6ZXI7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIENsYXNzTWV0aG9kRGVmaW5pdGlvbiB7XG5cdG5hbWU6IHN0cmluZztcblx0cGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdO1xuXHRyZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGw7XG5cdG1vZGlmaWVyczogTW9kaWZpZXJzO1xuXHRjaGlsZHJlbjogQVNUTm9kZVtdO1xuXHRpc0NvbnN0cnVjdG9yOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgcGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdLCByZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGwsIG1vZGlmaWVyczogTW9kaWZpZXJzLCBjaGlsZHJlbjogQVNUTm9kZVtdKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuXHRcdHRoaXMucmV0dXJuVHlwZSA9IHJldHVyblR5cGU7XG5cdFx0dGhpcy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXHRcdHRoaXMuaXNDb25zdHJ1Y3RvciA9IG5hbWUgPT09IEdSQU1NQVIuQ09OU1RSVUNUT1I7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIENsYXNzRGVmaW5pdGlvbiB7XG5cdG5vZGU6IEFTVENsYXNzTm9kZTtcblx0bmFtZTogc3RyaW5nO1xuXHRzdXBlckNsYXNzOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0aW5zdGFuY2VGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW107XG5cdGluc3RhbmNlTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9O1xuXHRzdGF0aWNGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW107XG5cdHN0YXRpY01ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfTtcblx0Y29uc3RydWN0b3JNZXRob2Q6IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB8IG51bGwgPSBudWxsO1xuXHRuYXRpdmVJbnN0YW5jZTogYW55ID0gbnVsbDtcblx0aXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0Y2xhc3NOb2RlOiBBU1RDbGFzc05vZGUsXG5cdFx0c3VwZXJDbGFzczogc3RyaW5nIHwgbnVsbCxcblx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0aW5zdGFuY2VGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW10sXG5cdFx0aW5zdGFuY2VNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH0sXG5cdFx0c3RhdGljRmllbGRzOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbltdLFxuXHRcdHN0YXRpY01ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfSxcblx0XHRjb25zdHJ1Y3Rvck1ldGhvZDogQ2xhc3NNZXRob2REZWZpbml0aW9uIHwgbnVsbCA9IG51bGxcblx0KSB7XG5cdFx0dGhpcy5ub2RlID0gY2xhc3NOb2RlO1xuXHRcdHRoaXMuc3VwZXJDbGFzcyA9IHN1cGVyQ2xhc3M7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmluc3RhbmNlRmllbGRzID0gaW5zdGFuY2VGaWVsZHM7XG5cdFx0dGhpcy5pbnN0YW5jZU1ldGhvZHMgPSBpbnN0YW5jZU1ldGhvZHM7XG5cdFx0dGhpcy5zdGF0aWNGaWVsZHMgPSBzdGF0aWNGaWVsZHM7XG5cdFx0dGhpcy5zdGF0aWNNZXRob2RzID0gc3RhdGljTWV0aG9kcztcblx0XHR0aGlzLmNvbnN0cnVjdG9yTWV0aG9kID0gY29uc3RydWN0b3JNZXRob2Q7XG5cdFx0dGhpcy5pc09wZW4gPSBjbGFzc05vZGUubW9kaWZpZXJzLm9wZW47XG5cdH1cblxuXHRzdGF0aWMgY29uc3RydWN0RnJvbUFTVChub2RlOiBBU1RDbGFzc05vZGUpOiBDbGFzc0RlZmluaXRpb24ge1xuXHRcdGNvbnN0IGluc3RhbmNlRmllbGRzOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbltdID0gW107XG5cdFx0Y29uc3QgaW5zdGFuY2VNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH0gPSB7fTtcblx0XHRjb25zdCBzdGF0aWNGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW10gPSBbXTtcblx0XHRjb25zdCBzdGF0aWNNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH0gPSB7fTtcblx0XHRsZXQgY29uc3RydWN0b3JNZXRob2Q6IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB8IG51bGwgPSBudWxsO1xuXG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAoY2hpbGQgaW5zdGFuY2VvZiBBU1RGaWVsZE5vZGUpIHtcblx0XHRcdFx0Y29uc3QgZmllbGQgPSBuZXcgQ2xhc3NGaWVsZERlZmluaXRpb24oXG5cdFx0XHRcdFx0Y2hpbGQubmFtZSxcblx0XHRcdFx0XHRjaGlsZC5maWVsZFR5cGVcblx0XHRcdFx0XHRcdD8gY2hpbGQuZmllbGRUeXBlLm5hbWVcblx0XHRcdFx0XHRcdDogbnVsbCxcblx0XHRcdFx0XHRjaGlsZC5tb2RpZmllcnMsXG5cdFx0XHRcdFx0Y2hpbGQuaW5pdFxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdGlmIChmaWVsZC5tb2RpZmllcnMuc3RhdGljKSB7XG5cdFx0XHRcdFx0c3RhdGljRmllbGRzLnB1c2goZmllbGQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGluc3RhbmNlRmllbGRzLnB1c2goZmllbGQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGNoaWxkIGluc3RhbmNlb2YgQVNUTWV0aG9kTm9kZSkge1xuXHRcdFx0XHRjb25zdCBtZXRob2QgPSBuZXcgQ2xhc3NNZXRob2REZWZpbml0aW9uKFxuXHRcdFx0XHRcdGNoaWxkLm5hbWUsXG5cdFx0XHRcdFx0Y2hpbGQucGFyYW1ldGVycyxcblx0XHRcdFx0XHRjaGlsZC5yZXR1cm5UeXBlLFxuXHRcdFx0XHRcdGNoaWxkLm1vZGlmaWVycyxcblx0XHRcdFx0XHRjaGlsZC5jaGlsZHJlblxuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAobWV0aG9kLmlzQ29uc3RydWN0b3IpIHtcblx0XHRcdFx0XHRjb25zdHJ1Y3Rvck1ldGhvZCA9IG1ldGhvZDtcblx0XHRcdFx0fSBlbHNlIGlmIChtZXRob2QubW9kaWZpZXJzLnN0YXRpYykge1xuXHRcdFx0XHRcdHN0YXRpY01ldGhvZHNbbWV0aG9kLm5hbWVdID0gbWV0aG9kO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGluc3RhbmNlTWV0aG9kc1ttZXRob2QubmFtZV0gPSBtZXRob2Q7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93UnVudGltZUVycm9yKGBVbmhhbmRsZWQgbm9kZSAke2NoaWxkLnR5cGV9LmApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgQ2xhc3NEZWZpbml0aW9uKFxuXHRcdFx0bm9kZSxcblx0XHRcdG5vZGUuc3VwZXJDbGFzcz8ubmFtZSB8fCBudWxsLFxuXHRcdFx0bm9kZS5uYW1lLFxuXHRcdFx0aW5zdGFuY2VGaWVsZHMsXG5cdFx0XHRpbnN0YW5jZU1ldGhvZHMsXG5cdFx0XHRzdGF0aWNGaWVsZHMsXG5cdFx0XHRzdGF0aWNNZXRob2RzLFxuXHRcdFx0Y29uc3RydWN0b3JNZXRob2Rcblx0XHQpO1xuXHR9XG5cblx0ZmluZE1ldGhvZChuYW1lOiBzdHJpbmcpOiBBU1RNZXRob2ROb2RlIHtcblx0XHRjb25zdCBub2RlID0gdGhpcy5ub2RlXG5cdFx0ICAgICAgICAgICAgICAgICAuY2hpbGRyZW5cblx0XHQgICAgICAgICAgICAgICAgIC5maW5kKG5vZGUgPT4gbm9kZS5uYW1lID09PSBuYW1lKTtcblxuXHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUTWV0aG9kTm9kZSkge1xuXHRcdFx0cmV0dXJuIG5vZGU7XG5cdFx0fVxuXG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYE1ldGhvZCAke25hbWV9IG5vdCBmb3VuZCBpbiBjbGFzcyAke3RoaXMubmFtZX0uYCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEludGVyZmFjZURlZmluaXRpb24ge1xuXHRub2RlOiBBU1RJbnRlcmZhY2VOb2RlO1xuXHRuYW1lOiBzdHJpbmc7XG5cdHN0YXRpY0ZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXTtcblx0aW5zdGFuY2VNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH07XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0aW50ZXJmYWNlTm9kZTogQVNUSW50ZXJmYWNlTm9kZSxcblx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0c3RhdGljRmllbGRzOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbltdLFxuXHRcdGluc3RhbmNlTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9LFxuXHQpIHtcblx0XHR0aGlzLm5vZGUgPSBpbnRlcmZhY2VOb2RlO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5zdGF0aWNGaWVsZHMgPSBzdGF0aWNGaWVsZHM7XG5cdFx0dGhpcy5pbnN0YW5jZU1ldGhvZHMgPSBpbnN0YW5jZU1ldGhvZHM7XG5cdH1cblxuXHRzdGF0aWMgY29uc3RydWN0RnJvbUFTVChub2RlOiBBU1RJbnRlcmZhY2VOb2RlKTogSW50ZXJmYWNlRGVmaW5pdGlvbiB7XG5cdFx0Y29uc3Qgc3RhdGljRmllbGRzOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbltdID0gW107XG5cdFx0Y29uc3QgaW5zdGFuY2VNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH0gPSB7fTtcblxuXHRcdGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuXHRcdFx0aWYgKGNoaWxkIGluc3RhbmNlb2YgQVNURmllbGROb2RlKSB7XG5cdFx0XHRcdGNvbnN0IGZpZWxkID0gbmV3IENsYXNzRmllbGREZWZpbml0aW9uKFxuXHRcdFx0XHRcdGNoaWxkLm5hbWUsXG5cdFx0XHRcdFx0Y2hpbGQuZmllbGRUeXBlXG5cdFx0XHRcdFx0XHQ/IGNoaWxkLmZpZWxkVHlwZS5uYW1lXG5cdFx0XHRcdFx0XHQ6IG51bGwsXG5cdFx0XHRcdFx0Y2hpbGQubW9kaWZpZXJzLFxuXHRcdFx0XHRcdGNoaWxkLmluaXQgPz8gbnVsbFxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdHN0YXRpY0ZpZWxkcy5wdXNoKGZpZWxkKTtcblx0XHRcdH0gZWxzZSBpZiAoY2hpbGQgaW5zdGFuY2VvZiBBU1RNZXRob2ROb2RlKSB7XG5cdFx0XHRcdGNvbnN0IG1ldGhvZCA9IG5ldyBDbGFzc01ldGhvZERlZmluaXRpb24oXG5cdFx0XHRcdFx0Y2hpbGQubmFtZSxcblx0XHRcdFx0XHRjaGlsZC5wYXJhbWV0ZXJzLFxuXHRcdFx0XHRcdGNoaWxkLnJldHVyblR5cGUsXG5cdFx0XHRcdFx0Y2hpbGQubW9kaWZpZXJzLFxuXHRcdFx0XHRcdGNoaWxkLmNoaWxkcmVuXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0aW5zdGFuY2VNZXRob2RzW21ldGhvZC5uYW1lXSA9IG1ldGhvZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93UnVudGltZUVycm9yKGBVbmhhbmRsZWQgbm9kZSAke2NoaWxkLnR5cGV9LmApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgSW50ZXJmYWNlRGVmaW5pdGlvbihcblx0XHRcdG5vZGUsXG5cdFx0XHRub2RlLm5hbWUsXG5cdFx0XHRzdGF0aWNGaWVsZHMsXG5cdFx0XHRpbnN0YW5jZU1ldGhvZHNcblx0XHQpO1xuXHR9XG59XG5cbiIsCiAgICAiaW1wb3J0IHtQYXJzZXJ9IGZyb20gXCIuL3BhcnNlclwiO1xuaW1wb3J0IHtHUkFNTUFSLCBUb2tlbiwgVG9rZW5UeXBlLCBUWVBFX0VOVU19IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5pbXBvcnQge01vZGlmaWVycywgU3VwZXJDbGFzc30gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7XG5cdEFTVEFubm90YXRpb25Ob2RlLFxuXHRBU1RBcnJheU5vZGUsXG5cdEFTVEFzc2lnbm1lbnROb2RlLFxuXHRBU1RCaW5hcnlOb2RlLFxuXHRBU1RDYWxsTm9kZSxcblx0QVNUQ2xhc3NOb2RlLFxuXHRBU1RFbHNlTm9kZSxcblx0QVNURXhwcmVzc2lvbk5vZGUsXG5cdEFTVEZpZWxkTm9kZSxcblx0QVNURm9yZWFjaE5vZGUsXG5cdEFTVElmTm9kZSxcblx0QVNUSW1wb3J0Tm9kZSxcblx0QVNUSW5kZXhOb2RlLFxuXHRBU1RJbnRlcmZhY2VOb2RlLFxuXHRBU1RMYW1iZGFOb2RlLFxuXHRBU1RNYXRjaENhc2VOb2RlLFxuXHRBU1RNYXRjaE5vZGUsXG5cdEFTVE1lbWJlck5vZGUsXG5cdEFTVE1ldGhvZE5vZGUsXG5cdEFTVE5ld05vZGUsXG5cdEFTVE5vZGUsXG5cdEFTVE5vZGVUeXBlLFxuXHRBU1RQYXJhbWV0ZXJOb2RlLFxuXHRBU1RSZXR1cm5Ob2RlLFxuXHRBU1RUaGVuTm9kZSxcblx0QVNUVHlwZU5vZGUsXG5cdEFTVFVuYXJ5Tm9kZSxcblx0QVNUVmFyaWFibGVOb2RlLFxuXHRBU1RWRG9tTm9kZSxcblx0QVNUVkRvbVRleHROb2RlXG59IGZyb20gXCIuLi9hc3RcIjtcbmltcG9ydCB7dGhyb3dQYXJzZXJFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuaW1wb3J0IHtzcGFuRnJvbX0gZnJvbSBcIi4vcGFyc2VyX3NvdXJjZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWl4ZWRUeXBlKCk6IEFTVFR5cGVOb2RlIHtcblx0cmV0dXJuIG5ldyBBU1RUeXBlTm9kZShBU1RUeXBlTm9kZS5LSU5EX1NJTVBMRSwgVFlQRV9FTlVNLk1JWEVEKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVHlwZShwYXJzZXI6IFBhcnNlcik6IEFTVFR5cGVOb2RlIHtcblx0bGV0IHR5cGU7XG5cblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTikge1xuXHRcdHR5cGUgPSBwYXJzZUxhbWJkYVR5cGUocGFyc2VyKTtcblx0fSBlbHNlIHtcblx0XHR0eXBlID0gcGFyc2VTaW1wbGVPckdlbmVyaWNUeXBlKHBhcnNlcik7XG5cdH1cblxuXHRpZiAocGFyc2VyLmNvbnN1bWVJZk9wZXJhdG9yKEdSQU1NQVIuUVVFU1RJT05fTUFSSykpIHtcblx0XHR0eXBlLm51bGxhYmxlID0gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUeXBlUGFyYW1ldGVycyhwYXJzZXI6IFBhcnNlcik6IHN0cmluZ1tdIHtcblx0Y29uc3QgcGFyYW1ldGVycyA9IFtdO1xuXG5cdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkxFU1NfVEhBTik7XG5cblx0ZG8ge1xuXHRcdGNvbnN0IG5hbWUgPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpLnZhbHVlO1xuXHRcdHBhcmFtZXRlcnMucHVzaChuYW1lKTtcblxuXHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLkNPTU1BKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cGFyc2VyLm5leHQoKTtcblx0fSB3aGlsZSAodHJ1ZSk7XG5cblx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuR1JFQVRFUl9USEFOKTtcblxuXHRyZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU2ltcGxlT3JHZW5lcmljVHlwZShwYXJzZXI6IFBhcnNlcik6IEFTVFR5cGVOb2RlIHtcblx0Y29uc3QgbmFtZVRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RUeXBlTm9kZShBU1RUeXBlTm9kZS5LSU5EX1NJTVBMRSwgbmFtZVRva2VuLnZhbHVlKTtcblxuXHRpZiAocGFyc2VyLmNvbnN1bWVJZk9wZXJhdG9yKEdSQU1NQVIuTEVTU19USEFOKSkge1xuXG5cdFx0bm9kZS5raW5kID0gQVNUVHlwZU5vZGUuS0lORF9HRU5FUklDO1xuXG5cdFx0ZG8ge1xuXHRcdFx0bm9kZS50eXBlQXJndW1lbnRzLnB1c2gocGFyc2VUeXBlKHBhcnNlcikpO1xuXHRcdH0gd2hpbGUgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSk7XG5cblx0XHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5HUkVBVEVSX1RIQU4pO1xuXHR9XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUxhbWJkYVR5cGUocGFyc2VyOiBQYXJzZXIpOiBBU1RUeXBlTm9kZSB7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUVHlwZU5vZGUoQVNUVHlwZU5vZGUuS0lORF9MQU1CREEsICdsYW1iZGEnKTtcblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKTtcblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSkge1xuXHRcdGRvIHtcblx0XHRcdG5vZGUucGFyYW1ldGVyVHlwZXMucHVzaChwYXJzZVR5cGUocGFyc2VyKSk7XG5cdFx0fSB3aGlsZSAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKTtcblx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuQVJST1cpO1xuXG5cdG5vZGUucmV0dXJuVHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQcm9ncmFtKHBhcnNlcjogUGFyc2VyKTogQVNUTm9kZSB7XG5cdGNvbnN0IGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXTtcblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudHlwZSAhPT0gVG9rZW5UeXBlLkVPRikge1xuXHRcdGlmIChwYXJzZXIucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5DT01NRU5UKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBub2RlOiBBU1ROb2RlIHwgbnVsbCA9IHBhcnNlU3RhdGVtZW50KHBhcnNlcik7XG5cdFx0XHRpZiAobm9kZSkge1xuXHRcdFx0XHRjaGlsZHJlbi5wdXNoKG5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuUFJPR1JBTU0sIGNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU3RhdGVtZW50KHBhcnNlcjogUGFyc2VyKTogQVNUTm9kZSB8IG51bGwge1xuXHRpZiAocGFyc2VyLmNvbnN1bWVJZkNvbW1lbnQoKSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0c3dpdGNoIChwYXJzZXIucGVlaygpLnZhbHVlKSB7XG5cdFx0Y2FzZSBHUkFNTUFSLklNUE9SVDoge1xuXHRcdFx0cmV0dXJuIHBhcnNlSW1wb3J0KHBhcnNlcik7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5PUEVOOlxuXHRcdGNhc2UgR1JBTU1BUi5DTEFTUzoge1xuXHRcdFx0cmV0dXJuIHBhcnNlQ2xhc3NEZWNsYXJhdGlvbihwYXJzZXIpO1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuSU5URVJGQUNFOiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VJbnRlcmZhY2VEZWNsYXJhdGlvbihwYXJzZXIpO1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuUkVUVVJOOiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VSZXR1cm5TdGF0ZW1lbnQocGFyc2VyKTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkxFVDoge1xuXHRcdFx0cmV0dXJuIHBhcnNlVmFyaWFibGVEZWNsYXJhdGlvbihwYXJzZXIpO1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuSUY6IHtcblx0XHRcdHJldHVybiBwYXJzZUlmRGVjbGFyYXRpb24ocGFyc2VyKTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLk1BVENIOiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VNYXRjaERlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5GT1JFQUNIOiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VGb3JlYWNoRGVjbGFyYXRpb24ocGFyc2VyKTtcblx0XHR9XG5cdFx0ZGVmYXVsdDoge1xuXHRcdFx0cmV0dXJuIHBhcnNlRXhwcmVzc2lvblN0YXRlbWVudChwYXJzZXIpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZXR1cm5TdGF0ZW1lbnQocGFyc2VyOiBQYXJzZXIpOiBBU1RSZXR1cm5Ob2RlIHtcblx0cGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5SRVRVUk4pO1xuXG5cdGxldCBhcmd1bWVudCA9IG51bGw7XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLlNFTUlDT0xPTikge1xuXHRcdGFyZ3VtZW50ID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5TRU1JQ09MT04pO1xuXG5cdHJldHVybiBuZXcgQVNUUmV0dXJuTm9kZShhcmd1bWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUltcG9ydChwYXJzZXI6IFBhcnNlcik6IEFTVEltcG9ydE5vZGUge1xuXHRwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLklNUE9SVCk7XG5cblx0bGV0IG5hbWVzID0gW107XG5cdGxldCBmcm9tID0gbnVsbDtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQlJBQ0VfT1BFTikge1xuXHRcdG5hbWVzID0gcGFyc2VJbXBvcnRMaXN0KHBhcnNlcik7XG5cdFx0cGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5GUk9NKTtcblx0XHRmcm9tID0gcGFyc2VyLmV4cGVjdFN0cmluZygpLnZhbHVlO1xuXHR9IGVsc2Uge1xuXHRcdG5hbWVzLnB1c2gocGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKS52YWx1ZSk7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5TRU1JQ09MT04pO1xuXG5cdHJldHVybiBuZXcgQVNUSW1wb3J0Tm9kZShuYW1lcywgZnJvbSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUltcG9ydExpc3QocGFyc2VyOiBQYXJzZXIpOiBzdHJpbmdbXSB7XG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX09QRU4pO1xuXG5cdGNvbnN0IG5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0Y29uc3QgbmFtZVRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblxuXHRcdG5hbWVzLnB1c2gobmFtZVRva2VuLnZhbHVlKTtcblxuXHRcdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGJyZWFrO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfQ0xPU0UpO1xuXG5cdHJldHVybiBuYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ2xhc3NEZWNsYXJhdGlvbihwYXJzZXI6IFBhcnNlcik6IEFTVENsYXNzTm9kZSB7XG5cdGNvbnN0IGFubm90YXRpb25zID0gcGFyc2VBbm5vdGF0aW9ucyhwYXJzZXIpO1xuXHRjb25zdCBtb2RpZmllcnMgPSBwYXJzZU1vZGlmaWVycyhwYXJzZXIsIFtHUkFNTUFSLk9QRU5dKTtcblxuXHRjb25zdCBjbGFzc1Rva2VuID0gcGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5DTEFTUyk7XG5cdGNvbnN0IG5hbWVUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cblx0bGV0IHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5MRVNTX1RIQU4pIHtcblx0XHR0eXBlUGFyYW1ldGVycyA9IHBhcnNlVHlwZVBhcmFtZXRlcnMocGFyc2VyKTtcblx0fVxuXG5cdGxldCBzdXBlckNsYXNzID0gbnVsbDtcblx0aWYgKHBhcnNlci5jb25zdW1lSWZLZXl3b3JkKEdSQU1NQVIuRVhURU5EUykpIHtcblx0XHRzdXBlckNsYXNzID0gbmV3IFN1cGVyQ2xhc3MoXG5cdFx0XHRBU1ROb2RlVHlwZS5JREVOVElGSUVSLFxuXHRcdFx0cGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKS52YWx1ZVxuXHRcdCk7XG5cdH1cblxuXHRsZXQgaW1wbGVtZW50c0ludGVyZmFjZXMgPSBbXTtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuSU1QTEVNRU5UUykge1xuXHRcdHBhcnNlci5uZXh0KCk7XG5cblx0XHRkbyB7XG5cdFx0XHRjb25zdCBpbnRlcmZhY2VUeXBlID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cdFx0XHRpbXBsZW1lbnRzSW50ZXJmYWNlcy5wdXNoKGludGVyZmFjZVR5cGUpO1xuXHRcdH0gd2hpbGUgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSk7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9PUEVOKTtcblxuXHRjb25zdCBjaGlsZHJlbjogQVNUTm9kZVtdID0gW107XG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLkJSQUNFX0NMT1NFKSB7XG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLkNPTU1FTlQpIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBtZW1iZXI6IEFTVE5vZGUgfCBudWxsID0gcGFyc2VDbGFzc01lbWJlcihwYXJzZXIpO1xuXHRcdGlmIChtZW1iZXIgPT09IG51bGwpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjaGlsZHJlbi5wdXNoKG1lbWJlcik7XG5cdH1cblxuXHRjb25zdCBicmFjZUNsb3NlVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9DTE9TRSk7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RDbGFzc05vZGUoXG5cdFx0bmFtZVRva2VuLnZhbHVlLFxuXHRcdGFubm90YXRpb25zLFxuXHRcdG1vZGlmaWVycyxcblx0XHR0eXBlUGFyYW1ldGVycyxcblx0XHRpbXBsZW1lbnRzSW50ZXJmYWNlcyxcblx0XHRzdXBlckNsYXNzLFxuXHRcdGNoaWxkcmVuXG5cdCk7XG5cblx0bm9kZS5zcGFuID0gc3BhbkZyb20oY2xhc3NUb2tlbiwgYnJhY2VDbG9zZVRva2VuKTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUludGVyZmFjZURlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUSW50ZXJmYWNlTm9kZSB7XG5cdGNvbnN0IGFubm90YXRpb25zID0gcGFyc2VBbm5vdGF0aW9ucyhwYXJzZXIpO1xuXHRjb25zdCBtb2RpZmllcnMgPSBwYXJzZU1vZGlmaWVycyhwYXJzZXIsIFtdKTsgLy8gaW50ZXJmYWNlcyBzaW5kIGltcGxpeml0IHB1YmxpY1xuXG5cdGNvbnN0IGludGVyZmFjZVRva2VuID0gcGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5JTlRFUkZBQ0UpO1xuXHRjb25zdCBuYW1lVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXG5cdGxldCB0eXBlUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuTEVTU19USEFOKSB7XG5cdFx0dHlwZVBhcmFtZXRlcnMgPSBwYXJzZVR5cGVQYXJhbWV0ZXJzKHBhcnNlcik7XG5cdH1cblxuXHRsZXQgZXh0ZW5kc0ludGVyZmFjZXMgPSBbXTtcblx0aWYgKHBhcnNlci5jb25zdW1lSWZLZXl3b3JkKEdSQU1NQVIuRVhURU5EUykpIHtcblx0XHRkbyB7XG5cdFx0XHRleHRlbmRzSW50ZXJmYWNlcy5wdXNoKHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCkudmFsdWUpO1xuXHRcdH0gd2hpbGUgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSk7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9PUEVOKTtcblxuXHRjb25zdCBjaGlsZHJlbjogQVNUTm9kZVtdID0gW107XG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLkJSQUNFX0NMT1NFKSB7XG5cdFx0aWYgKHBhcnNlci5jb25zdW1lSWZDb21tZW50KCkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IG1lbWJlciA9IHBhcnNlQ2xhc3NNZW1iZXIocGFyc2VyKTtcblx0XHRpZiAobWVtYmVyID09PSBudWxsKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAobWVtYmVyIGluc3RhbmNlb2YgQVNURmllbGROb2RlICYmICFtZW1iZXIubW9kaWZpZXJzLnN0YXRpYykge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcignSW50ZXJmYWNlIGZpZWxkcyBtdXN0IGJlIHN0YXRpYy4nKTtcblx0XHR9XG5cblx0XHRpZiAobWVtYmVyIGluc3RhbmNlb2YgQVNUTWV0aG9kTm9kZSAmJiBtZW1iZXIuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcignSW50ZXJmYWNlIG1ldGhvZHMgbXVzdCBub3QgaGF2ZSBhIGJvZHkuJyk7XG5cdFx0fVxuXG5cdFx0Y2hpbGRyZW4ucHVzaChtZW1iZXIpO1xuXHR9XG5cblx0Y29uc3QgYnJhY2VDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfQ0xPU0UpO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUSW50ZXJmYWNlTm9kZShcblx0XHRuYW1lVG9rZW4udmFsdWUsXG5cdFx0YW5ub3RhdGlvbnMsXG5cdFx0bW9kaWZpZXJzLFxuXHRcdHR5cGVQYXJhbWV0ZXJzLFxuXHRcdGV4dGVuZHNJbnRlcmZhY2VzLFxuXHRcdGNoaWxkcmVuXG5cdCk7XG5cblx0bm9kZS5zcGFuID0gc3BhbkZyb20oaW50ZXJmYWNlVG9rZW4sIGJyYWNlQ2xvc2VUb2tlbik7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBbm5vdGF0aW9ucyhwYXJzZXI6IFBhcnNlcik6IEFTVEFubm90YXRpb25Ob2RlW10ge1xuXHRjb25zdCBhbm5vdGF0aW9ucyA9IFtdO1xuXG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5BTk5PVEFUSU9OKSB7XG5cdFx0YW5ub3RhdGlvbnMucHVzaChwYXJzZUFubm90YXRpb24ocGFyc2VyKSk7XG5cdH1cblxuXHRyZXR1cm4gYW5ub3RhdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUFubm90YXRpb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RBbm5vdGF0aW9uTm9kZSB7XG5cdGNvbnN0IHRva2VuID0gcGFyc2VyLmV4cGVjdEFubm90YXRpb24oKTtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RBbm5vdGF0aW9uTm9kZSh0b2tlbi52YWx1ZSk7XG5cblx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pKSB7XG5cdFx0d2hpbGUgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpIHtcblx0XHRcdGNvbnN0IGtleSA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCkudmFsdWU7XG5cdFx0XHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5BU1NJR04pO1xuXG5cdFx0XHRjb25zdCB2YWx1ZSA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHRcdFx0bm9kZS5wcm9wZXJ0aWVzLnNldChrZXksIHZhbHVlKTtcblxuXHRcdFx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQ09NTUEpIHtcblx0XHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cdH1cblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTW9kaWZpZXJzKHBhcnNlcjogUGFyc2VyLCBhbGxvd2VkOiBzdHJpbmdbXSk6IE1vZGlmaWVycyB7XG5cdGNvbnN0IG1vZGlmaWVyczogeyBbaW5kZXg6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuXG5cdGFsbG93ZWQuZm9yRWFjaChtb2RpZmllciA9PiBtb2RpZmllcnNbbW9kaWZpZXJdID0gZmFsc2UpO1xuXG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5LRVlXT1JEICYmIGFsbG93ZWQuaW5jbHVkZXMocGFyc2VyLnBlZWsoKS52YWx1ZSkpIHtcblx0XHRjb25zdCBtb2RpZmllciA9IHBhcnNlci5uZXh0KCkudmFsdWU7XG5cblx0XHRpZiAobW9kaWZpZXJzW21vZGlmaWVyXSkge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcihgRHVwbGljYXRlIG1vZGlmaWVyOiAke21vZGlmaWVyfWApO1xuXHRcdH1cblxuXHRcdG1vZGlmaWVyc1ttb2RpZmllcl0gPSB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIG5ldyBNb2RpZmllcnMobW9kaWZpZXJzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVycyhwYXJzZXI6IFBhcnNlcik6IEFTVFBhcmFtZXRlck5vZGVbXSB7XG5cdGNvbnN0IHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSA9IFtdO1xuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKSB7XG5cdFx0cmV0dXJuIHBhcmFtZXRlcnM7XG5cdH1cblxuXHRkbyB7XG5cdFx0Y29uc3QgbmFtZVRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblx0XHRsZXQgdHlwZSA9IG51bGw7XG5cdFx0bGV0IGRlZmF1bHRWYWx1ZSA9IG51bGw7XG5cblx0XHRsZXQgdHlwZVRva2VuID0gbnVsbDtcblx0XHRsZXQgZGVmYXVsdFZhbHVlVG9rZW4gPSBudWxsO1xuXG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQ09MT04pIHtcblx0XHRcdHR5cGVUb2tlbiA9IHBhcnNlci5uZXh0KCk7XG5cdFx0XHR0eXBlID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cdFx0fVxuXG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQVNTSUdOKSB7XG5cdFx0XHRkZWZhdWx0VmFsdWVUb2tlbiA9IHBhcnNlci5uZXh0KCk7XG5cdFx0XHRkZWZhdWx0VmFsdWUgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0XHR9XG5cblx0XHRjb25zdCBub2RlID0gbmV3IEFTVFBhcmFtZXRlck5vZGUobmFtZVRva2VuLnZhbHVlLCB0eXBlLCBkZWZhdWx0VmFsdWUpO1xuXHRcdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHR5cGVUb2tlbiB8fCBuYW1lVG9rZW4sIGRlZmF1bHRWYWx1ZVRva2VuIHx8IG5hbWVUb2tlbik7XG5cblx0XHRwYXJhbWV0ZXJzLnB1c2gobm9kZSk7XG5cdH0gd2hpbGUgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSk7XG5cblx0cmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNsYXNzTWVtYmVyKHBhcnNlcjogUGFyc2VyKTogQVNUTm9kZSB8IG51bGwge1xuXHRjb25zdCBzdGFydFRva2VuID0gcGFyc2VyLnBlZWsoKTtcblxuXHRjb25zdCBhbm5vdGF0aW9ucyA9IHBhcnNlQW5ub3RhdGlvbnMocGFyc2VyKTtcblx0Y29uc3QgbW9kaWZpZXJzID0gcGFyc2VNb2RpZmllcnMoXG5cdFx0cGFyc2VyLFxuXHRcdFtcblx0XHRcdEdSQU1NQVIuUFVCTElDLFxuXHRcdFx0R1JBTU1BUi5QUklWQVRFLFxuXHRcdFx0R1JBTU1BUi5TVEFUSUMsXG5cdFx0XHRHUkFNTUFSLlJFQURPTkxZXG5cdFx0XVxuXHQpO1xuXG5cdGNvbnN0IG5hbWVUb2tlbiA9IHBhcnNlci5leHBlY3RPbmVPZihbVG9rZW5UeXBlLklERU5USUZJRVIsIFRva2VuVHlwZS5LRVlXT1JEXSk7XG5cblx0bGV0IGZpZWxkVHlwZSA9IG51bGw7XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkNPTE9OKSB7XG5cdFx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTE9OKSkge1xuXHRcdFx0ZmllbGRUeXBlID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cdFx0fVxuXHR9XG5cblx0bGV0IGluaXQgPSBudWxsO1xuXHRpZiAocGFyc2VyLmNvbnN1bWVJZk9wZXJhdG9yKEdSQU1NQVIuQVNTSUdOKSkge1xuXHRcdGluaXQgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0fVxuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLlNFTUlDT0xPTikge1xuXHRcdGlmICghbW9kaWZpZXJzLnB1YmxpYyAmJiAhbW9kaWZpZXJzLnByaXZhdGUpIHtcblx0XHRcdG1vZGlmaWVycy5wcml2YXRlID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRjb25zdCBzZW1pY29sb25Ub2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlNFTUlDT0xPTik7XG5cblx0XHRjb25zdCBub2RlID0gbmV3IEFTVEZpZWxkTm9kZShuYW1lVG9rZW4udmFsdWUsIG1vZGlmaWVycywgZmllbGRUeXBlLCBpbml0KTtcblx0XHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBzZW1pY29sb25Ub2tlbik7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRsZXQgdHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdID0gW107XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkxFU1NfVEhBTikge1xuXHRcdHR5cGVQYXJhbWV0ZXJzID0gcGFyc2VUeXBlUGFyYW1ldGVycyhwYXJzZXIpO1xuXHR9XG5cblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTikge1xuXHRcdGlmICghbW9kaWZpZXJzLnB1YmxpYyAmJiAhbW9kaWZpZXJzLnByaXZhdGUpIHtcblx0XHRcdG1vZGlmaWVycy5wdWJsaWMgPSB0cnVlO1xuXHRcdH1cblxuXHRcdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pO1xuXHRcdGNvbnN0IHBhcmFtZXRlcnMgPSBwYXJzZVBhcmFtZXRlcnMocGFyc2VyKTtcblx0XHRjb25zdCBwYXJlbnRoZXNlc0Nsb3NlVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cblx0XHRsZXQgcmV0dXJuVHlwZSA9IG51bGw7XG5cdFx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTE9OKSkge1xuXHRcdFx0cmV0dXJuVHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNoaWxkcmVuOiBBU1ROb2RlW10gPSBwYXJzZUJsb2NrKHBhcnNlcik7XG5cblx0XHRjb25zdCBub2RlID0gbmV3IEFTVE1ldGhvZE5vZGUoXG5cdFx0XHRuYW1lVG9rZW4udmFsdWUsXG5cdFx0XHRuYW1lVG9rZW4udmFsdWUgPT09IEdSQU1NQVIuQ09OU1RSVUNUT1IgPyBBU1ROb2RlVHlwZS5DT05TVFJVQ1RPUiA6IEFTVE5vZGVUeXBlLk1FVEhPRCxcblx0XHRcdGFubm90YXRpb25zLFxuXHRcdFx0bW9kaWZpZXJzLFxuXHRcdFx0dHlwZVBhcmFtZXRlcnMsXG5cdFx0XHRwYXJhbWV0ZXJzLFxuXHRcdFx0cmV0dXJuVHlwZSxcblx0XHRcdGNoaWxkcmVuXG5cdFx0KTtcblxuXHRcdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIHBhcmVudGhlc2VzQ2xvc2VUb2tlbik7XG5cblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdHRocm93UGFyc2VyRXJyb3IoYEludmFsaWQgY2xhc3MgbWVtYmVyOiAke25hbWVUb2tlbi52YWx1ZX1gKTtcblxuXHRyZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQmxvY2socGFyc2VyOiBQYXJzZXIpOiBBU1ROb2RlW10ge1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5TRU1JQ09MT04pIHtcblx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX09QRU4pO1xuXG5cdGNvbnN0IGNoaWxkcmVuID0gW107XG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLkJSQUNFX0NMT1NFKSB7XG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLkNPTU1FTlQpIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y29uc3QgY2hpbGQ6IEFTVE5vZGUgfCBudWxsID0gcGFyc2VTdGF0ZW1lbnQocGFyc2VyKTtcblx0XHRpZiAoY2hpbGQpIHtcblx0XHRcdGNoaWxkcmVuLnB1c2goY2hpbGQpO1xuXHRcdH1cblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX0NMT1NFKTtcblxuXHRyZXR1cm4gY2hpbGRyZW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVZhcmlhYmxlRGVjbGFyYXRpb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RWYXJpYWJsZU5vZGUge1xuXHRjb25zdCBsZXRUb2tlbiA9IHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuTEVUKTtcblx0Y29uc3QgbmFtZVRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblxuXHRsZXQgdHlwZUFubm90YXRpb24gPSBudWxsO1xuXHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09MT04pKSB7XG5cdFx0dHlwZUFubm90YXRpb24gPSBwYXJzZVR5cGUocGFyc2VyKTtcblx0fVxuXG5cdGxldCBpbml0ID0gbnVsbDtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQVNTSUdOKSB7XG5cdFx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuQVNTSUdOKTtcblx0XHRpbml0ID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdH1cblxuXHRjb25zdCBzZW1pY29sb25Ub2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlNFTUlDT0xPTik7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RWYXJpYWJsZU5vZGUobmFtZVRva2VuLnZhbHVlLCB0eXBlQW5ub3RhdGlvbiwgaW5pdCk7XG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKGxldFRva2VuLCBzZW1pY29sb25Ub2tlbik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUlmRGVjbGFyYXRpb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RJZk5vZGUge1xuXHRjb25zdCBzdGFydFRva2VuID0gcGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5JRik7XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTik7XG5cdGNvbnN0IGNvbmRpdGlvbiA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHRjb25zdCBwYXJlbnRoZXNlc0Nsb3NlVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RJZk5vZGUoY29uZGl0aW9uLCBuZXcgQVNUVGhlbk5vZGUocGFyc2VCbG9jayhwYXJzZXIpKSk7XG5cblx0aWYgKHBhcnNlci5jb25zdW1lSWZLZXl3b3JkKEdSQU1NQVIuRUxTRSkpIHtcblx0XHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5JRikge1xuXHRcdFx0bm9kZS5lbHNlID0gcGFyc2VJZkRlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5vZGUuZWxzZSA9IG5ldyBBU1RFbHNlTm9kZShwYXJzZUJsb2NrKHBhcnNlcikpO1xuXHRcdH1cblx0fVxuXG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIHBhcmVudGhlc2VzQ2xvc2VUb2tlbik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU1hdGNoRGVjbGFyYXRpb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RNYXRjaE5vZGUge1xuXHRjb25zdCBzdGFydFRva2VuID0gcGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5NQVRDSCk7XG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pO1xuXG5cdGNvbnN0IGV4cHJlc3Npb24gPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX09QRU4pO1xuXG5cdGNvbnN0IG1hdGNoQ2FzZXM6IEFTVE1hdGNoQ2FzZU5vZGVbXSA9IFtdO1xuXHRsZXQgZGVmYXVsdENhc2U6IEFTVE1hdGNoQ2FzZU5vZGUgfCBudWxsID0gbnVsbDtcblxuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5CUkFDRV9DTE9TRSkge1xuXHRcdGNvbnN0IG1hdGNoQ2FzZTogQVNUTWF0Y2hDYXNlTm9kZSA9IHBhcnNlTWF0Y2hDYXNlRGVjbGFyYXRpb24ocGFyc2VyKTtcblx0XHRpZiAobWF0Y2hDYXNlLnRlc3QgPT09IG51bGwpIHtcblx0XHRcdGRlZmF1bHRDYXNlID0gbWF0Y2hDYXNlO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdG1hdGNoQ2FzZXMucHVzaChtYXRjaENhc2UpO1xuXHR9XG5cblx0Y29uc3QgYnJhY2VDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfQ0xPU0UpO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUTWF0Y2hOb2RlKGV4cHJlc3Npb24sIG1hdGNoQ2FzZXMsIGRlZmF1bHRDYXNlKTtcblx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgYnJhY2VDbG9zZVRva2VuKTtcblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTWF0Y2hDYXNlRGVjbGFyYXRpb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RNYXRjaENhc2VOb2RlIHtcblx0Y29uc3QgY2FzZU5vZGUgPSBuZXcgQVNUTWF0Y2hDYXNlTm9kZSgpO1xuXG5cdGlmIChwYXJzZXIuY29uc3VtZUlmS2V5d29yZChHUkFNTUFSLkRFRkFVTFQpKSB7XG5cdFx0Y2FzZU5vZGUudGVzdCA9IG51bGw7XG5cdH0gZWxzZSB7XG5cdFx0Y2FzZU5vZGUudGVzdCA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQ09MT04pO1xuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkJSQUNFX09QRU4pIHtcblx0XHRjYXNlTm9kZS5jaGlsZHJlbiA9IHBhcnNlQmxvY2socGFyc2VyKTtcblx0fSBlbHNlIHtcblx0XHRjb25zdCBjaGlsZDogQVNUTm9kZSB8IG51bGwgPSBwYXJzZVN0YXRlbWVudChwYXJzZXIpO1xuXHRcdGlmIChjaGlsZCkge1xuXHRcdFx0Y2FzZU5vZGUuY2hpbGRyZW4ucHVzaChjaGlsZClcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY2FzZU5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUZvcmVhY2hEZWNsYXJhdGlvbihwYXJzZXI6IFBhcnNlcik6IEFTVEZvcmVhY2hOb2RlIHtcblx0Y29uc3Qgc3RhcnRUb2tlbiA9IHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuRk9SRUFDSCk7XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTik7XG5cblx0Y29uc3QgaXRlcmF0b3JUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cdGNvbnN0IGl0ZXJhdG9yID0gaXRlcmF0b3JUb2tlbi52YWx1ZTtcblxuXHRwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLklOKTtcblxuXHRjb25zdCBpdGVyYWJsZSA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXG5cdGNvbnN0IHBhcmVudGhlc2VzQ2xvc2VUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVEZvcmVhY2hOb2RlKGl0ZXJhdG9yLCBpdGVyYWJsZSwgcGFyc2VCbG9jayhwYXJzZXIpKTtcblx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgcGFyZW50aGVzZXNDbG9zZVRva2VuKTtcblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQXJyYXkocGFyc2VyOiBQYXJzZXIpOiBBU1RBcnJheU5vZGUge1xuXHRjb25zdCBzdGFydFRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfT1BFTik7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RBcnJheU5vZGUoKTtcblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9DTE9TRSkge1xuXHRcdGRvIHtcblx0XHRcdG5vZGUuZWxlbWVudHMucHVzaChwYXJzZUV4cHJlc3Npb24ocGFyc2VyKSk7XG5cdFx0fSB3aGlsZSAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKTtcblx0fVxuXG5cdGNvbnN0IGJyYWNrZXRTcXVhcmVDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfQ0xPU0UpO1xuXG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIGJyYWNrZXRTcXVhcmVDbG9zZVRva2VuKTtcblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTGFtYmRhKHBhcnNlcjogUGFyc2VyKTogQVNUTGFtYmRhTm9kZSB7XG5cdGNvbnN0IHN0YXJ0VG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9PUEVOKTtcblxuXHRjb25zdCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10gPSBbXTtcblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQVJST1cpIHtcblx0XHRjb25zdCBuYW1lID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKS52YWx1ZTtcblx0XHRsZXQgdHlwZSA9IG51bGw7XG5cdFx0bGV0IGRlZmF1bHRWYWx1ZSA9IG51bGw7XG5cblx0XHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09MT04pKSB7XG5cdFx0XHR0eXBlID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cdFx0fVxuXG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQVNTSUdOKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdFx0ZGVmYXVsdFZhbHVlID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdFx0fVxuXG5cdFx0cGFyYW1ldGVycy5wdXNoKG5ldyBBU1RQYXJhbWV0ZXJOb2RlKG5hbWUsIHR5cGUsIGRlZmF1bHRWYWx1ZSkpO1xuXG5cdFx0cGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuQVJST1cpO1xuXG5cdGxldCByZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSA9IGNyZWF0ZU1peGVkVHlwZSgpO1xuXHRpZiAocGFyc2VyLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuSURFTlRJRklFUikge1xuXHRcdHJldHVyblR5cGUgPSBwYXJzZVR5cGUocGFyc2VyKTtcblx0XHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5DT0xPTikge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuVHlwZSA9IGNyZWF0ZU1peGVkVHlwZSgpO1xuXHRcdFx0cGFyc2VyLnJld2luZCgpO1xuXHRcdH1cblx0fVxuXG5cdGxldCBjaGlsZHJlbiA9IFtdO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5CUkFDRV9PUEVOKSB7XG5cdFx0Y2hpbGRyZW4gPSBwYXJzZUJsb2NrKHBhcnNlcik7XG5cdH0gZWxzZSB7XG5cdFx0Y2hpbGRyZW4ucHVzaChwYXJzZUV4cHJlc3Npb24ocGFyc2VyKSk7XG5cdH1cblxuXHRjb25zdCBicmFjZUNsb3NlVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9DTE9TRSk7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RMYW1iZGFOb2RlKHBhcmFtZXRlcnMsIHJldHVyblR5cGUsIGNoaWxkcmVuKTtcblx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgYnJhY2VDbG9zZVRva2VuKTtcblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvb2tzTGlrZUxhbWJkYShwYXJzZXI6IFBhcnNlcik6IGJvb2xlYW4ge1xuXHRjb25zdCBzdGFydCA9IHBhcnNlci5wb3NpdGlvbigpO1xuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLkJSQUNFX09QRU4pIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRwYXJzZXIubmV4dCgpO1xuXG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0cGFyc2VyLm5leHQoKTtcblx0XHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09MT04pKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdH1cblx0XHRpZiAoIXBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgaXNMYW1iZGEgPSBwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkFSUk9XO1xuXHRwYXJzZXIuc2Vla0F0KHN0YXJ0KVxuXHRyZXR1cm4gaXNMYW1iZGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUV4cHJlc3Npb25TdGF0ZW1lbnQocGFyc2VyOiBQYXJzZXIpOiBBU1RFeHByZXNzaW9uTm9kZSB7XG5cdGNvbnN0IGV4cHIgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5TRU1JQ09MT04pO1xuXG5cdHJldHVybiBuZXcgQVNURXhwcmVzc2lvbk5vZGUoZXhwcik7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRXhwcmVzc2lvbihwYXJzZXI6IFBhcnNlciwgcHJlY2VkZW5jZTogbnVtYmVyID0gMCk6IEFTVE5vZGUge1xuXHRsZXQgZXhwciA9IHBhcnNlUG9zdGZpeChwYXJzZXIsIHBhcnNlVW5hcnkocGFyc2VyKSk7XG5cblx0d2hpbGUgKHRydWUpIHtcblx0XHRjb25zdCB0b2tlbiA9IHBhcnNlci5wZWVrKCk7XG5cdFx0aWYgKCF0b2tlbikge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0bGV0IHRva2VuUHJlY2VkZW5jZSA9IGxvb2t1cFByZWNlZGVuY2UodG9rZW4pO1xuXHRcdGlmICh0b2tlblByZWNlZGVuY2UgPCBwcmVjZWRlbmNlKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuQVNTSUdOKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdFx0ZXhwciA9IG5ldyBBU1RBc3NpZ25tZW50Tm9kZShleHByLCBwYXJzZUV4cHJlc3Npb24ocGFyc2VyLCB0b2tlblByZWNlZGVuY2UpKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChHUkFNTUFSLk1BVEhfT1BFUkFUT1JTLmluY2x1ZGVzKHRva2VuLnZhbHVlKVxuXHRcdFx0fHwgR1JBTU1BUi5MT0dJQ19PUEVSQVRPUlMuaW5jbHVkZXModG9rZW4udmFsdWUpKSB7XG5cdFx0XHRjb25zdCBzdGFydFRva2VuID0gcGFyc2VyLm5leHQoKTtcblx0XHRcdGNvbnN0IHJpZ2h0ID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlciwgdG9rZW5QcmVjZWRlbmNlICsgMSk7XG5cdFx0XHRjb25zdCBlbmRUb2tlbiA9IHBhcnNlci5wZWVrKCk7XG5cblx0XHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUQmluYXJ5Tm9kZShleHByLCByaWdodCwgdG9rZW4udmFsdWUpO1xuXHRcdFx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgZW5kVG9rZW4pO1xuXHRcdFx0ZXhwciA9IG5vZGU7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRicmVhaztcblx0fVxuXG5cdHJldHVybiBleHByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VWRG9tRXhwcmVzc2lvbihwYXJzZXI6IFBhcnNlcik6IEFTVFZEb21Ob2RlIHtcblx0cGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5WRE9NKTtcblx0cmV0dXJuIHBhcnNlVkRvbUVsZW1lbnQocGFyc2VyKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VEb21lV2hpdGVzcGFjZShwYXJzZXI6IFBhcnNlcik6IEFTVFZEb21UZXh0Tm9kZSB8IG51bGwge1xuXHRpZiAocGFyc2VyLmNvbnN1bWVJZlRleHQoKSkge1xuXHRcdHBhcnNlci5yZXdpbmQoKTtcblx0XHRjb25zdCB0b2tlbiA9IHBhcnNlci5uZXh0KCk7XG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RWRG9tVGV4dE5vZGUodG9rZW4udmFsdWUpO1xuXHRcdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHRva2VuLCB0b2tlbik7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVkRvbUVsZW1lbnQocGFyc2VyOiBQYXJzZXIpOiBBU1RWRG9tTm9kZSB7XG5cdGNvbnN0IGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXTtcblxuXHRjb25zdCB0ZXh0Tm9kZTogQVNUVkRvbVRleHROb2RlIHwgbnVsbCA9IHBhcnNlRG9tZVdoaXRlc3BhY2UocGFyc2VyKTtcblx0aWYgKHRleHROb2RlKSB7XG5cdFx0Y2hpbGRyZW4ucHVzaCh0ZXh0Tm9kZSk7XG5cdH1cblxuXHRjb25zdCBzdGFydFRva2VuOiBUb2tlbiA9IHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkxFU1NfVEhBTik7XG5cdGNvbnN0IHRhZ1Rva2VuOiBUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cdGNvbnN0IHRhZzogc3RyaW5nID0gdGFnVG9rZW4udmFsdWU7XG5cblx0Y29uc3QgcHJvcHMgPSBuZXcgTWFwPHN0cmluZywgQVNUTm9kZT4oKTtcblx0d2hpbGUgKCFwYXJzZXIucGVla0lzKEdSQU1NQVIuR1JFQVRFUl9USEFOKSAmJiAhcGFyc2VyLnBlZWtJcyhHUkFNTUFSLlhNTF9DTE9TRV9UQUcpKSB7XG5cdFx0Y29uc3QgdGV4dE5vZGU6IEFTVFZEb21UZXh0Tm9kZSB8IG51bGwgPSBwYXJzZURvbWVXaGl0ZXNwYWNlKHBhcnNlcik7XG5cdFx0aWYgKHRleHROb2RlKSB7XG5cdFx0XHRjaGlsZHJlbi5wdXNoKHRleHROb2RlKTtcblx0XHR9XG5cblx0XHRjb25zdCBuYW1lVG9rZW46IFRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblx0XHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5BU1NJR04pO1xuXG5cdFx0bGV0IHZhbHVlOiBBU1ROb2RlO1xuXHRcdGlmIChwYXJzZXIucGVla0lzKEdSQU1NQVIuQlJBQ0VfT1BFTikpIHtcblx0XHRcdHZhbHVlID0gcGFyc2VMYW1iZGEocGFyc2VyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFsdWUgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0XHR9XG5cblx0XHRwcm9wcy5zZXQobmFtZVRva2VuLnZhbHVlLCB2YWx1ZSk7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5HUkVBVEVSX1RIQU4pO1xuXG5cdHdoaWxlICghcGFyc2VyLnBlZWtJcyhHUkFNTUFSLlhNTF9PUEVOX0NMT1NFX1RBRykpIHtcblx0XHRpZiAocGFyc2VyLnBlZWtJcyhHUkFNTUFSLkxFU1NfVEhBTikpIHtcblx0XHRcdGNoaWxkcmVuLnB1c2gocGFyc2VWRG9tRWxlbWVudChwYXJzZXIpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2hpbGRyZW4ucHVzaChwYXJzZVZEb21UZXh0KHBhcnNlcikpO1xuXHRcdH1cblx0fVxuXG5cdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLlhNTF9PUEVOX0NMT1NFX1RBRyk7XG5cdHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkdSRUFURVJfVEhBTik7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RWRG9tTm9kZSh0YWcsIHByb3BzLCBjaGlsZHJlbik7XG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIHBhcnNlci5wZWVrKCkpO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVkRvbVRleHQocGFyc2VyOiBQYXJzZXIpOiBBU1RWRG9tVGV4dE5vZGUge1xuXHRjb25zdCB0b2tlbjogVG9rZW4gPSBwYXJzZXIuZXhwZWN0T25lT2YoXG5cdFx0W1xuXHRcdFx0VG9rZW5UeXBlLklERU5USUZJRVIsXG5cdFx0XHRUb2tlblR5cGUuT1BFUkFUT1IsXG5cdFx0XHRUb2tlblR5cGUuS0VZV09SRCxcblx0XHRcdFRva2VuVHlwZS5URVhUXG5cdFx0XVxuXHQpO1xuXHRjb25zdCBub2RlID0gbmV3IEFTVFZEb21UZXh0Tm9kZSh0b2tlbi52YWx1ZSk7XG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHRva2VuLCB0b2tlbik7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBcmd1bWVudHMocGFyc2VyOiBQYXJzZXIpOiBBU1ROb2RlW10ge1xuXHRjb25zdCBhcmdzOiBBU1ROb2RlW10gPSBbXTtcblxuXHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpKSB7XG5cdFx0cmV0dXJuIGFyZ3M7XG5cdH1cblxuXHRhcmdzLnB1c2gocGFyc2VFeHByZXNzaW9uKHBhcnNlcikpO1xuXG5cdHdoaWxlIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpIHtcblx0XHRhcmdzLnB1c2gocGFyc2VFeHByZXNzaW9uKHBhcnNlcikpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXHRyZXR1cm4gYXJncztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVW5hcnkocGFyc2VyOiBQYXJzZXIpOiBBU1ROb2RlIHwgQVNUVW5hcnlOb2RlIHtcblx0Y29uc3QgdG9rZW46IFRva2VuID0gcGFyc2VyLnBlZWsoKTtcblxuXHRpZiAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLktFWVdPUkQgJiYgdG9rZW4udmFsdWUgPT09IEdSQU1NQVIuVkRPTSkge1xuXHRcdHJldHVybiBwYXJzZVZEb21FeHByZXNzaW9uKHBhcnNlcik7XG5cdH1cblxuXHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuRVhDTEFNQVRJT05fTUFSSykge1xuXHRcdHBhcnNlci5uZXh0KCk7XG5cblx0XHRjb25zdCB1bmFyeTogQVNUTm9kZSB8IEFTVFVuYXJ5Tm9kZSA9IHBhcnNlVW5hcnkocGFyc2VyKTtcblxuXHRcdHJldHVybiBuZXcgQVNUVW5hcnlOb2RlKEdSQU1NQVIuRVhDTEFNQVRJT05fTUFSSywgdW5hcnkpO1xuXHR9XG5cblx0cmV0dXJuIHBhcnNlUHJpbWFyeShwYXJzZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQcmltYXJ5KHBhcnNlcjogUGFyc2VyKTogQVNUTm9kZSB7XG5cdGlmIChsb29rc0xpa2VMYW1iZGEocGFyc2VyKSkge1xuXHRcdHJldHVybiBwYXJzZUxhbWJkYShwYXJzZXIpO1xuXHR9XG5cblx0Y29uc3QgdG9rZW4gPSBwYXJzZXIubmV4dCgpO1xuXG5cdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9PUEVOKSB7XG5cdFx0cGFyc2VyLnJld2luZCgpO1xuXHRcdHJldHVybiBwYXJzZUFycmF5KHBhcnNlcik7XG5cdH1cblxuXHRpZiAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLk5VTUJFUikge1xuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5OVU1CRVIpO1xuXHRcdG5vZGUudmFsdWUgPSB0b2tlbi52YWx1ZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuU1RSSU5HKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLlNUUklORyk7XG5cdFx0bm9kZS52YWx1ZSA9IHRva2VuLnZhbHVlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5CT09MRUFOKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLkJPT0xFQU4pO1xuXHRcdG5vZGUudmFsdWUgPSB0b2tlbi52YWx1ZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuSURFTlRJRklFUikge1xuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5JREVOVElGSUVSKTtcblx0XHRub2RlLm5hbWUgPSB0b2tlbi52YWx1ZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5OVUxMKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLk5VTEwpO1xuXHRcdG5vZGUudmFsdWUgPSB0b2tlbi52YWx1ZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5USElTKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLlRISVMpO1xuXHRcdG5vZGUubmFtZSA9IHRva2VuLnZhbHVlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLk5FVykge1xuXG5cdFx0bGV0IHR5cGVBbm5vdGF0aW9uID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cblx0XHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKTtcblxuXHRcdHJldHVybiBuZXcgQVNUTmV3Tm9kZShwYXJzZUFyZ3VtZW50cyhwYXJzZXIpLCB0eXBlQW5ub3RhdGlvbik7XG5cdH1cblxuXHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTikge1xuXHRcdGNvbnN0IGV4cHIgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0XHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cdFx0cmV0dXJuIGV4cHI7XG5cdH1cblxuXHR0aHJvd1BhcnNlckVycm9yKGBVbmV4cGVjdGVkIHRva2VuOiAke3Rva2VuLnR5cGV9ICR7dG9rZW4udmFsdWV9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBvc3RmaXgocGFyc2VyOiBQYXJzZXIsIGV4cHI6IEFTVE5vZGUgfCBudWxsKTogQVNUTm9kZSB7XG5cdGlmIChleHByID09PSBudWxsKSB7XG5cdFx0dGhyb3dQYXJzZXJFcnJvcihgRXhwZWN0ZWQgZXhwcmVzc2lvbiwgZ290IG51bGwuYCk7XG5cdH1cblxuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdGNvbnN0IHRva2VuID0gcGFyc2VyLnBlZWsoKTtcblx0XHRpZiAoIXRva2VuKSBicmVhaztcblxuXHRcdC8vIENhbGw6IGZvbyguLi4pXG5cdFx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0XHRleHByID0gbmV3IEFTVENhbGxOb2RlKGV4cHIsIHBhcnNlQXJndW1lbnRzKHBhcnNlcikpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gTWVtYmVyOiBmb28uYmFyXG5cdFx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLkRPVCkge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHRcdGV4cHIgPSBuZXcgQVNUTWVtYmVyTm9kZShleHByLCBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpLnZhbHVlKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIElOREVYOiBmb29bZXhwcl1cblx0XHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfT1BFTikge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblxuXHRcdFx0Y29uc3QgaW5kZXggPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblxuXHRcdFx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfQ0xPU0UpO1xuXG5cdFx0XHRleHByID0gbmV3IEFTVEluZGV4Tm9kZShleHByLCBpbmRleCk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRicmVhaztcblx0fVxuXG5cdHJldHVybiBleHByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9va3VwUHJlY2VkZW5jZSh0b2tlbjogVG9rZW4pOiBudW1iZXIge1xuXHRzd2l0Y2ggKHRva2VuLnZhbHVlKSB7XG5cdFx0Y2FzZSBHUkFNTUFSLkRPVDpcblx0XHRcdHJldHVybiAxMDA7XG5cdFx0Y2FzZSBHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU46XG5cdFx0XHRyZXR1cm4gOTA7XG5cdFx0Y2FzZSBHUkFNTUFSLk1VTFRJUExZOlxuXHRcdGNhc2UgR1JBTU1BUi5ESVZJREU6XG5cdFx0Y2FzZSBHUkFNTUFSLk1PRFVMVVM6XG5cdFx0XHRyZXR1cm4gNjA7XG5cdFx0Y2FzZSBHUkFNTUFSLlBMVVM6XG5cdFx0Y2FzZSBHUkFNTUFSLk1JTlVTOlxuXHRcdFx0cmV0dXJuIDUwO1xuXHRcdGNhc2UgR1JBTU1BUi5MRVNTX1RIQU46XG5cdFx0Y2FzZSBHUkFNTUFSLkdSRUFURVJfVEhBTjpcblx0XHRjYXNlIEdSQU1NQVIuTEVTU19FUVVBTDpcblx0XHRjYXNlIEdSQU1NQVIuR1JFQVRFUl9FUVVBTDpcblx0XHRcdHJldHVybiA0MDtcblx0XHRjYXNlIEdSQU1NQVIuRVFVQUw6XG5cdFx0Y2FzZSBHUkFNTUFSLk5PVF9FUVVBTDpcblx0XHRcdHJldHVybiAzMDtcblx0XHRjYXNlIEdSQU1NQVIuQU5EOlxuXHRcdFx0cmV0dXJuIDIwO1xuXHRcdGNhc2UgR1JBTU1BUi5PUjpcblx0XHRcdHJldHVybiAxMDtcblx0XHRjYXNlIEdSQU1NQVIuQVNTSUdOOlxuXHRcdFx0cmV0dXJuIDU7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiAwO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7VG9rZW4sIFRva2VuVHlwZX0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcbmltcG9ydCB7VG9rZW5TdHJlYW19IGZyb20gXCIuLi90b2tlbml6ZXIvdG9rZW5pemVyXCI7XG5pbXBvcnQge3BhcnNlUHJvZ3JhbX0gZnJvbSBcIi4vcGFyc2VyX3N0YXRtZW50c1wiO1xuaW1wb3J0IHt0aHJvd1BhcnNlckVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4vcGFyc2VyX3NvdXJjZVwiO1xuXG5cbmV4cG9ydCBjbGFzcyBQYXJzZXIge1xuXHRzb3VyY2U6IFNvdXJjZTtcblx0dG9rZW5TdHJlYW06IFRva2VuU3RyZWFtIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3Ioc291cmNlOiBTb3VyY2UpIHtcblx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0fVxuXG5cdHBhcnNlKCkge1xuXHRcdHRoaXMudG9rZW5TdHJlYW0gPSB0aGlzLnNvdXJjZVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgLmdldFRva2VuaXplcigpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAuZ2V0VG9rZW5TdHJlYW0oKVxuXG5cdFx0cmV0dXJuIHBhcnNlUHJvZ3JhbSh0aGlzKTtcblx0fVxuXG5cdHN0cmVhbSgpOiBUb2tlblN0cmVhbSB7XG5cdFx0aWYgKCF0aGlzLnRva2VuU3RyZWFtKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKCdQYXJzZXIgaGFzIG5vdCBiZWVuIHBhcnNlZCB5ZXQuJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMudG9rZW5TdHJlYW07XG5cdH1cblxuXHRleHBlY3QodG9rZW5UeXBlOiBzdHJpbmcsIGtleXdvcmQ6IHN0cmluZyB8IG51bGwgPSBudWxsKTogVG9rZW4ge1xuXHRcdGNvbnN0IHRva2VuID0gdGhpc1xuXHRcdFx0LnN0cmVhbSgpXG5cdFx0XHQubmV4dCgpO1xuXG5cdFx0aWYgKCF0b2tlbikge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcihgVW5leHBlY3RlZCBlbmQgb2YgZmlsZS4gRXhwZWN0ZWQgJHt0b2tlblR5cGV9JHtrZXl3b3JkID8gJyAnICsga2V5d29yZCA6ICcnfWApO1xuXHRcdH1cblxuXHRcdGlmICh0b2tlbi50eXBlICE9PSB0b2tlblR5cGUgfHwgKGtleXdvcmQgJiYgdG9rZW4udmFsdWUgIT09IGtleXdvcmQpKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKGBFeHBlY3RlZCAke3Rva2VuVHlwZX0ke2tleXdvcmQgPyAnICcgKyBrZXl3b3JkIDogJyd9LCBnb3QgJHt0b2tlbi50eXBlfSAke3Rva2VuLnZhbHVlfWApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0b2tlbjtcblx0fVxuXG5cdGV4cGVjdE9wZXJhdG9yKGtleXdvcmQ6IHN0cmluZyB8IG51bGwgPSBudWxsKTogVG9rZW4ge1xuXHRcdHJldHVybiB0aGlzLmV4cGVjdChUb2tlblR5cGUuT1BFUkFUT1IsIGtleXdvcmQpO1xuXHR9XG5cblx0ZXhwZWN0QW5ub3RhdGlvbigpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZWN0KFRva2VuVHlwZS5BTk5PVEFUSU9OKTtcblx0fVxuXG5cdGV4cGVjdElkZW50aWZpZXIoa2V5d29yZDogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZWN0KFRva2VuVHlwZS5JREVOVElGSUVSLCBrZXl3b3JkKTtcblx0fVxuXG5cdGV4cGVjdEtleXdvcmQoa2V5d29yZDogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZWN0KFRva2VuVHlwZS5LRVlXT1JELCBrZXl3b3JkKTtcblx0fVxuXG5cdGV4cGVjdFN0cmluZygpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZWN0KFRva2VuVHlwZS5TVFJJTkcpO1xuXHR9XG5cblx0ZXhwZWN0VGV4dCgpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZWN0KFRva2VuVHlwZS5URVhUKTtcblx0fVxuXG5cdGV4cGVjdFB1bmN0dWF0aW9uKGtleXdvcmQ6IHN0cmluZyB8IG51bGwgPSBudWxsKTogVG9rZW4ge1xuXHRcdHJldHVybiB0aGlzLmV4cGVjdChUb2tlblR5cGUuUFVOQ1RVQVRJT04sIGtleXdvcmQpO1xuXHR9XG5cblx0ZXhwZWN0T25lT2YodG9rZW5UeXBlczogc3RyaW5nW10sIGtleXdvcmRzOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IFRva2VuIHtcblx0XHRjb25zdCB0b2tlbiA9IHRoaXNcblx0XHRcdC5zdHJlYW0oKVxuXHRcdFx0Lm5leHQoKTtcblxuXHRcdGlmICghdG9rZW4pIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoYFVuZXhwZWN0ZWQgZW5kIG9mIGZpbGUuIEV4cGVjdGVkIG9uZSBvZiB0eXBlcyAke3Rva2VuVHlwZXN9LCBnb3QgbnVsbC5gKTtcblx0XHR9XG5cblx0XHRpZiAoIXRva2VuVHlwZXMuaW5jbHVkZXModG9rZW4udHlwZSkpIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoYEV4cGVjdGVkIG9uZSBvZiB0eXBlcyAke3Rva2VuVHlwZXN9LCBnb3QgJHt0b2tlbi50eXBlfWApO1xuXHRcdH1cblxuXHRcdGlmIChrZXl3b3JkcyAmJiAha2V5d29yZHMuaW5jbHVkZXModG9rZW4udmFsdWUpKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKGBFeHBlY3RlZCBvbmUgb2YgdmFsdWVzICR7a2V5d29yZHN9LCBnb3QgJHt0b2tlbi52YWx1ZX1gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdG9rZW47XG5cdH1cblxuXHRjb25zdW1lSWYodG9rZW5UeXBlOiBzdHJpbmcsIGtleXdvcmQ6IHN0cmluZyB8IG51bGwgPSBudWxsKTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgdG9rZW4gPSB0aGlzLnBlZWsoKTtcblxuXHRcdGlmICh0b2tlbi50eXBlID09PSB0b2tlblR5cGUgJiYgKGtleXdvcmQgJiYgdG9rZW4udmFsdWUudHJpbSgpID09PSBrZXl3b3JkKSkge1xuXHRcdFx0dGhpcy5uZXh0KCk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRjb25zdW1lSWZQdW5jdHVhdGlvbih2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3VtZUlmKFRva2VuVHlwZS5QVU5DVFVBVElPTiwgdmFsdWUpO1xuXHR9XG5cblx0Y29uc3VtZUlmT3BlcmF0b3IodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbnN1bWVJZihUb2tlblR5cGUuT1BFUkFUT1IsIHZhbHVlKTtcblx0fVxuXG5cdGNvbnN1bWVJZkNvbW1lbnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3VtZUlmKFRva2VuVHlwZS5DT01NRU5UKTtcblx0fVxuXG5cdGNvbnN1bWVJZktleXdvcmQoa2V5d29yZDogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3VtZUlmKFRva2VuVHlwZS5LRVlXT1JELCBrZXl3b3JkKTtcblx0fVxuXG5cdGNvbnN1bWVJZlRleHQoKTogYm9vbGVhbiB7XG5cdFx0aWYgKHRoaXMucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5URVhUICYmIHRoaXMucGVla0lzKCcnKSkge1xuXHRcdFx0dGhpcy5uZXh0KCk7XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHBlZWsoKTogVG9rZW4ge1xuXHRcdGNvbnN0IHRva2VuID0gdGhpc1xuXHRcdFx0LnN0cmVhbSgpXG5cdFx0XHQucGVlaygpO1xuXG5cdFx0aWYgKHRva2VuID09PSBudWxsKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKCdVbmV4cGVjdGVkIGVuZCBvZiBmaWxlLiBFeHBlY3RlZCB0b2tlbiwgZ290IG51bGwuJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRva2VuO1xuXHR9XG5cblx0cGVla0lzKGtleXdvcmQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnBlZWsoKVxuXHRcdCAgICAgICAgICAgLnZhbHVlXG5cdFx0ICAgICAgICAgICAudHJpbSgpID09PSBrZXl3b3JkO1xuXHR9XG5cblx0bmV4dCgpOiBUb2tlbiB7XG5cdFx0Y29uc3QgdG9rZW4gPSB0aGlzXG5cdFx0XHQuc3RyZWFtKClcblx0XHRcdC5uZXh0KCk7XG5cblx0XHRpZiAodG9rZW4gPT09IG51bGwpIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoJ1VuZXhwZWN0ZWQgZW5kIG9mIGZpbGUuIEV4cGVjdGVkIHRva2VuLCBnb3QgbnVsbC4nKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdG9rZW47XG5cdH1cblxuXHRyZXdpbmQoKTogdm9pZCB7XG5cdFx0dGhpcy5zdHJlYW0oKVxuXHRcdCAgICAucmV3aW5kKCk7XG5cdH1cblxuXHRwb3NpdGlvbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnN0cmVhbSgpLmluZGV4O1xuXHR9XG5cblx0c2Vla0F0KHBvc2l0aW9uOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnN0cmVhbSgpLmluZGV4ID0gcG9zaXRpb247XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtBU1RDbGFzc05vZGUsIEFTVEludGVyZmFjZU5vZGUsIEFTVE5vZGV9IGZyb20gXCIuLi9hc3RcIjtcbmltcG9ydCB7Q2xhc3NEZWZpbml0aW9uLCBJbnRlcmZhY2VEZWZpbml0aW9ufSBmcm9tIFwiLi9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge0NsYXNzU3ltYm9sLCBJbnRlcmZhY2VTeW1ib2x9IGZyb20gXCIuLi90eXBlcy90eXBlX29iamVjdHNcIjtcbmltcG9ydCB7dGhyb3dSdW50aW1lRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcblxuZXhwb3J0IGNsYXNzIENsYXNzUmVnaXN0cnkge1xuXHRtYXA6IE1hcDxzdHJpbmcsIENsYXNzRGVmaW5pdGlvbj4gPSBuZXcgTWFwKCk7XG5cblx0cmVnaXN0ZXIobm9kZTogQVNUQ2xhc3NOb2RlKTogdm9pZCB7XG5cdFx0dGhpcy5zZXQobm9kZS5uYW1lLCBDbGFzc0RlZmluaXRpb24uY29uc3RydWN0RnJvbUFTVChub2RlKSk7XG5cdH1cblxuXHRhbGwoKTogSXRlcmFibGVJdGVyYXRvcjxDbGFzc0RlZmluaXRpb24+IHtcblx0XHRyZXR1cm4gdGhpcy5tYXAudmFsdWVzKCk7XG5cdH1cblxuXHRzZXQobmFtZTogc3RyaW5nLCBjbGFzc0RlZmluaXRpb246IENsYXNzRGVmaW5pdGlvbik6IHZvaWQge1xuXHRcdHRoaXMubWFwLnNldChuYW1lLCBjbGFzc0RlZmluaXRpb24pO1xuXHR9XG5cblx0Z2V0KG5hbWU6IHN0cmluZyk6IENsYXNzRGVmaW5pdGlvbiB7XG5cdFx0Y29uc3QgY2xhc3NEZWYgPSB0aGlzLm1hcC5nZXQobmFtZSk7XG5cdFx0aWYgKCFjbGFzc0RlZikge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYENsYXNzICR7bmFtZX0gbm90IGZvdW5kLmApO1xuXHRcdH1cblx0XHRyZXR1cm4gY2xhc3NEZWY7XG5cdH1cblxuXHRoYXMobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubWFwLmhhcyhuYW1lKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgSW50ZXJmYWNlUmVnaXN0cnkge1xuXHRtYXA6IE1hcDxzdHJpbmcsIEludGVyZmFjZURlZmluaXRpb24+ID0gbmV3IE1hcCgpO1xuXG5cdHJlZ2lzdGVyKG5vZGU6IEFTVEludGVyZmFjZU5vZGUpOiB2b2lkIHtcblx0XHR0aGlzLnNldChub2RlLm5hbWUsIEludGVyZmFjZURlZmluaXRpb24uY29uc3RydWN0RnJvbUFTVChub2RlKSk7XG5cdH1cblxuXHRhbGwoKTogSXRlcmFibGVJdGVyYXRvcjxJbnRlcmZhY2VEZWZpbml0aW9uPiB7XG5cdFx0cmV0dXJuIHRoaXMubWFwLnZhbHVlcygpO1xuXHR9XG5cblx0c2V0KG5hbWU6IHN0cmluZywgaW50ZXJmYWNlRGVmaW5pdGlvbjogSW50ZXJmYWNlRGVmaW5pdGlvbik6IHZvaWQge1xuXHRcdHRoaXMubWFwLnNldChuYW1lLCBpbnRlcmZhY2VEZWZpbml0aW9uKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVHlwZVJlZ2lzdHJ5IHtcblx0Y2xhc3NTeW1ib2xzOiBNYXA8c3RyaW5nLCBDbGFzc1N5bWJvbD4gPSBuZXcgTWFwKCk7XG5cdGludGVyZmFjZVN5bWJvbHM6IE1hcDxzdHJpbmcsIEludGVyZmFjZVN5bWJvbD4gPSBuZXcgTWFwKCk7XG5cblx0YWxsQ2xhc3NTeW1ib2xzKCk6IEl0ZXJhYmxlSXRlcmF0b3I8Q2xhc3NTeW1ib2w+IHtcblx0XHRyZXR1cm4gdGhpcy5jbGFzc1N5bWJvbHMudmFsdWVzKCk7XG5cdH1cblxuXHRhbGxJbnRlcmZhY2VTeW1ib2xzKCk6IEl0ZXJhYmxlSXRlcmF0b3I8SW50ZXJmYWNlU3ltYm9sPiB7XG5cdFx0cmV0dXJuIHRoaXMuaW50ZXJmYWNlU3ltYm9scy52YWx1ZXMoKTtcblx0fVxuXG5cdGFkZENsYXNzU3ltYm9sKHN5bWJvbDogQ2xhc3NTeW1ib2wpOiB2b2lkIHtcblx0XHR0aGlzLmNsYXNzU3ltYm9scy5zZXQoc3ltYm9sLm5hbWUsIHN5bWJvbCk7XG5cdH1cblxuXHRhZGRJbnRlcmZhY2VTeW1ib2woc3ltYm9sOiBJbnRlcmZhY2VTeW1ib2wpOiB2b2lkIHtcblx0XHR0aGlzLmludGVyZmFjZVN5bWJvbHMuc2V0KHN5bWJvbC5uYW1lLCBzeW1ib2wpO1xuXHR9XG5cblx0aGFzU3ltYm9sKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNsYXNzU3ltYm9scy5oYXMobmFtZSkgfHwgdGhpcy5pbnRlcmZhY2VTeW1ib2xzLmhhcyhuYW1lKTtcblx0fVxuXG5cdHB1YmxpYyBnZXRDbGFzc1N5bWJvbChuYW1lOiBzdHJpbmcpOiBDbGFzc1N5bWJvbCB7XG5cdFx0Y29uc3Qgc3ltYm9sOiBDbGFzc1N5bWJvbCB8IHVuZGVmaW5lZCA9IHRoaXMuY2xhc3NTeW1ib2xzLmdldChuYW1lKTtcblx0XHRpZiAoc3ltYm9sID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBTeW1ib2wgJHtuYW1lfSBub3QgZm91bmQuYCk7XG5cdFx0fVxuXHRcdHJldHVybiBzeW1ib2w7XG5cdH1cblxuXHRwdWJsaWMgZ2V0SW50ZXJhY2VTeW1ib2wobmFtZTogc3RyaW5nKTogSW50ZXJmYWNlU3ltYm9sIHtcblx0XHRjb25zdCBzeW1ib2w6IEludGVyZmFjZVN5bWJvbCB8IHVuZGVmaW5lZCA9IHRoaXMuaW50ZXJmYWNlU3ltYm9scy5nZXQobmFtZSk7XG5cdFx0aWYgKHN5bWJvbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgU3ltYm9sICR7bmFtZX0gbm90IGZvdW5kLmApO1xuXHRcdH1cblx0XHRyZXR1cm4gc3ltYm9sO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBPYmplY3RSZWdpc3RyeSB7XG5cdGNsYXNzZXMgPSBuZXcgQ2xhc3NSZWdpc3RyeSgpO1xuXHRpbnRlcmZhY2VzID0gbmV3IEludGVyZmFjZVJlZ2lzdHJ5KCk7XG5cdHR5cGVzID0gbmV3IFR5cGVSZWdpc3RyeSgpO1xuXG5cdGZldGNoQWxsT2JqZWN0RGVmaW5pdGlvbnMoKTogTWFwPHN0cmluZywgQ2xhc3NEZWZpbml0aW9uIHwgSW50ZXJmYWNlRGVmaW5pdGlvbj4ge1xuXHRcdGNvbnN0IG1hcCA9IG5ldyBNYXAoKTtcblxuXHRcdGZvciAoY29uc3QgY2xhc3NEZWYgb2YgdGhpcy5pbnRlcmZhY2VzLmFsbCgpKSB7XG5cdFx0XHRtYXAuc2V0KGNsYXNzRGVmLm5hbWUsIGNsYXNzRGVmKTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGNsYXNzRGVmIG9mIHRoaXMuY2xhc3Nlcy5hbGwoKSkge1xuXHRcdFx0bWFwLnNldChjbGFzc0RlZi5uYW1lLCBjbGFzc0RlZik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1hcDtcblx0fVxuXG5cdGNvbGxlY3RBbGwoYXN0OiBBU1ROb2RlKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIGFzdC5jaGlsZHJlbikge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RJbnRlcmZhY2VOb2RlKSB7XG5cdFx0XHRcdHRoaXMuaW50ZXJmYWNlcy5yZWdpc3Rlcihub2RlKTtcblx0XHRcdH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIEFTVENsYXNzTm9kZSkge1xuXHRcdFx0XHR0aGlzLmNsYXNzZXMucmVnaXN0ZXIobm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbiIsCiAgICAiaW1wb3J0IHtUWVBFX0VOVU19IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5pbXBvcnQge1xuXHRBU1RDbGFzc05vZGUsXG5cdEFTVEZpZWxkTm9kZSxcblx0QVNUSW50ZXJmYWNlTm9kZSxcblx0QVNUTWV0aG9kTm9kZSxcblx0QVNUTm9kZSxcblx0QVNUUGFyYW1ldGVyTm9kZSxcblx0QVNUVHlwZU5vZGVcbn0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHt0aHJvd1R5cGVFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5cbmV4cG9ydCBjbGFzcyBQcmltaXRpdmVUeXBlcyB7XG5cdHN0YXRpYyByZWFkb25seSBOVU1CRVI6IHN0cmluZyA9IFRZUEVfRU5VTS5OVU1CRVI7XG5cdHN0YXRpYyByZWFkb25seSBTVFJJTkc6IHN0cmluZyA9IFRZUEVfRU5VTS5TVFJJTkc7XG5cdHN0YXRpYyByZWFkb25seSBCT09MRUFOOiBzdHJpbmcgPSBUWVBFX0VOVU0uQk9PTEVBTjtcblx0c3RhdGljIHJlYWRvbmx5IE1JWEVEOiBzdHJpbmcgPSBUWVBFX0VOVU0uTUlYRUQ7XG5cdHN0YXRpYyByZWFkb25seSBOVUxMOiBzdHJpbmcgPSBUWVBFX0VOVU0uTlVMTDtcblx0c3RhdGljIHJlYWRvbmx5IFZPSUQ6IHN0cmluZyA9IFRZUEVfRU5VTS5WT0lEO1xuXG5cdHN0YXRpYyBoYXNUeXBlKHR5cGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChQcmltaXRpdmVUeXBlcywgdHlwZS50b1VwcGVyQ2FzZSgpKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgUHJpbWl0aXZlQ2xhc3NUeXBlcyB7XG5cdHN0YXRpYyByZWFkb25seSBBUlJBWTogc3RyaW5nID0gVFlQRV9FTlVNLkFSUkFZO1xuXG5cdHN0YXRpYyBDTEFTU05BTUVfTUFQOiB7IFtzOiBzdHJpbmddOiBzdHJpbmc7IH0gPSB7XG5cdFx0YXJyYXk6ICdBcnJheSdcblx0fVxuXG5cdHN0YXRpYyBnZXRDbGFzc1JlZk5hbWUodHlwZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG5cdFx0cmV0dXJuIFByaW1pdGl2ZUNsYXNzVHlwZXMuQ0xBU1NOQU1FX01BUFt0eXBlXSB8fCBudWxsO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlIHtcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdH1cblxuXHRlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcyA9PT0gb3RoZXI7XG5cdH1cblxuXHRhY2NlcHRzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXF1YWxzKG90aGVyKTtcblx0fVxuXG5cdHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGBUeXBlKCR7dGhpcy5uYW1lfSlgO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBQcmltaXRpdmVUeXBlIGV4dGVuZHMgVHlwZSB7XG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuXHRcdHN1cGVyKG5hbWUpO1xuXHR9XG5cblx0b3ZlcnJpZGUgZXF1YWxzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIG90aGVyIGluc3RhbmNlb2YgUHJpbWl0aXZlVHlwZVxuXHRcdFx0JiYgdGhpcy5uYW1lID09PSBvdGhlci5uYW1lO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBNaXhlZFR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoUHJpbWl0aXZlVHlwZXMuTUlYRUQpO1xuXHR9XG5cblx0b3ZlcnJpZGUgZXF1YWxzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIG90aGVyIGluc3RhbmNlb2YgTWl4ZWRUeXBlO1xuXHR9XG5cblx0b3ZlcnJpZGUgYWNjZXB0cygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVm9pZFR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoUHJpbWl0aXZlVHlwZXMuVk9JRCk7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBWb2lkVHlwZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTnVsbFR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoUHJpbWl0aXZlVHlwZXMuTlVMTCk7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBOdWxsVHlwZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTnVsbGFibGVUeXBlIGV4dGVuZHMgVHlwZSB7XG5cdGlubmVyOiBUeXBlO1xuXG5cdGNvbnN0cnVjdG9yKGlubmVyOiBUeXBlKSB7XG5cdFx0c3VwZXIoaW5uZXIudG9TdHJpbmcoKSArICc/Jyk7XG5cdFx0dGhpcy5pbm5lciA9IGlubmVyO1xuXHR9XG5cblx0b3ZlcnJpZGUgZXF1YWxzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0aWYgKG90aGVyID09PSBUeXBlcy5OVUxMKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAob3RoZXIgaW5zdGFuY2VvZiBOdWxsYWJsZVR5cGUpIHtcblx0XHRcdHJldHVybiB0aGlzLmlubmVyLmVxdWFscyhvdGhlci5pbm5lcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0b3ZlcnJpZGUgYWNjZXB0cyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBvdGhlciA9PT0gVHlwZXMuTlVMTCB8fCB0aGlzLmlubmVyLmFjY2VwdHMob3RoZXIpO1xuXHR9XG5cblx0b3ZlcnJpZGUgdG9TdHJpbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5pbm5lci50b1N0cmluZygpICsgJz8nO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBWTm9kZVR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoJ3Zub2RlJyk7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBWb2lkVHlwZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVHlwZXMge1xuXHRzdGF0aWMgcmVhZG9ubHkgTlVNQkVSOiBQcmltaXRpdmVUeXBlID0gbmV3IFByaW1pdGl2ZVR5cGUoUHJpbWl0aXZlVHlwZXMuTlVNQkVSKTtcblx0c3RhdGljIHJlYWRvbmx5IFNUUklORzogUHJpbWl0aXZlVHlwZSA9IG5ldyBQcmltaXRpdmVUeXBlKFByaW1pdGl2ZVR5cGVzLlNUUklORyk7XG5cdHN0YXRpYyByZWFkb25seSBCT09MRUFOOiBQcmltaXRpdmVUeXBlID0gbmV3IFByaW1pdGl2ZVR5cGUoUHJpbWl0aXZlVHlwZXMuQk9PTEVBTik7XG5cdHN0YXRpYyByZWFkb25seSBNSVhFRDogTWl4ZWRUeXBlID0gbmV3IE1peGVkVHlwZSgpO1xuXHRzdGF0aWMgcmVhZG9ubHkgTlVMTDogTnVsbFR5cGUgPSBuZXcgTnVsbFR5cGUoKTtcblx0c3RhdGljIHJlYWRvbmx5IFZPSUQ6IFZvaWRUeXBlID0gbmV3IFZvaWRUeXBlKCk7XG5cdHN0YXRpYyByZWFkb25seSBWTk9ERTogVk5vZGVUeXBlID0gbmV3IFZOb2RlVHlwZSgpO1xuXG5cdHN0YXRpYyBnZXRUeXBlKG5hbWU6IHN0cmluZyk6IFR5cGUge1xuXHRcdGlmICghT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoUHJpbWl0aXZlVHlwZXMsIG5hbWUudG9VcHBlckNhc2UoKSkpIHtcblx0XHRcdHRocm93VHlwZUVycm9yKGBVbmtub3duIHByaW1pdGl2ZSB0eXBlICR7bmFtZX0uYCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdHlwZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IFR5cGVzO1xuXHRcdHJldHVybiB0eXBlc1tuYW1lLnRvVXBwZXJDYXNlKCldO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlVmFyaWFibGUgZXh0ZW5kcyBUeXBlIHtcblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIobmFtZSk7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpIHtcblx0XHRyZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBUeXBlVmFyaWFibGVcblx0XHRcdCYmIHRoaXMubmFtZSA9PT0gb3RoZXIubmFtZTtcblx0fVxuXG5cdG92ZXJyaWRlIGFjY2VwdHMoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGVQYXJhbWV0ZXJTeW1ib2wge1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHZhcmlhYmxlVHlwZTogVHlwZVZhcmlhYmxlO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy52YXJpYWJsZVR5cGUgPSBuZXcgVHlwZVZhcmlhYmxlKG5hbWUpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBGaWVsZFN5bWJvbCB7XG5cdHJlYWRvbmx5IG5vZGU6IEFTVEZpZWxkTm9kZTtcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXHRyZWFkb25seSBmaWVsZFR5cGU6IFR5cGU7XG5cdHJlYWRvbmx5IGlzU3RhdGljOiBib29sZWFuID0gZmFsc2U7XG5cdHJlYWRvbmx5IGlzUHJpdmF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXHRyZWFkb25seSBpc1B1YmxpYzogYm9vbGVhbiA9IGZhbHNlO1xuXHRyZWFkb25seSBpc1JlYWRvbmx5OiBib29sZWFuID0gZmFsc2U7XG5cdG93bmVyOiBDbGFzc1N5bWJvbCB8IEludGVyZmFjZVN5bWJvbCB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5vZGU6IEFTVEZpZWxkTm9kZSwgZmllbGRUeXBlOiBUeXBlKSB7XG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0XHR0aGlzLm5hbWUgPSBub2RlLm5hbWU7XG5cdFx0dGhpcy5maWVsZFR5cGUgPSBmaWVsZFR5cGU7XG5cdFx0dGhpcy5pc1N0YXRpYyA9IG5vZGUubW9kaWZpZXJzLnN0YXRpYztcblx0XHR0aGlzLmlzUHJpdmF0ZSA9IG5vZGUubW9kaWZpZXJzLnByaXZhdGU7XG5cdFx0dGhpcy5pc1B1YmxpYyA9IG5vZGUubW9kaWZpZXJzLnB1YmxpYztcblx0XHR0aGlzLmlzUmVhZG9ubHkgPSBub2RlLm1vZGlmaWVycy5yZWFkb25seTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyU3ltYm9sIHtcblx0cmVhZG9ubHkgbm9kZTogQVNUUGFyYW1ldGVyTm9kZSB8IG51bGw7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblx0cmVhZG9ubHkgcGFyYW1ldGVyVHlwZTogVHlwZTtcblx0cmVhZG9ubHkgZGVmYXVsdFR5cGU6IFR5cGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGU6IFR5cGUsIGRlZmF1bHRWYWx1ZTogVHlwZSB8IG51bGwgPSBudWxsLCBub2RlOiBBU1RQYXJhbWV0ZXJOb2RlIHwgbnVsbCA9IG51bGwpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMucGFyYW1ldGVyVHlwZSA9IHR5cGU7XG5cdFx0dGhpcy5kZWZhdWx0VHlwZSA9IGRlZmF1bHRWYWx1ZTtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBNZXRob2RTeW1ib2wge1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cdHJlYWRvbmx5IG5vZGU6IEFTVE1ldGhvZE5vZGU7XG5cdHJlYWRvbmx5IGlzU3RhdGljOiBib29sZWFuID0gZmFsc2U7XG5cdHJlYWRvbmx5IGlzUHJpdmF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXHRyZWFkb25seSBpc1B1YmxpYzogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHR5cGVQYXJhbWV0ZXJTeW1ib2xzOiBUeXBlUGFyYW1ldGVyU3ltYm9sW10gPSBbXTtcblx0cGFyYW1ldGVyU3ltYm9sczogUGFyYW1ldGVyU3ltYm9sW10gPSBbXTtcblx0cmV0dXJuVHlwZTogVHlwZSA9IFR5cGVzLk1JWEVEO1xuXG5cdG93bmVyOiBDbGFzc1N5bWJvbCB8IEludGVyZmFjZVN5bWJvbCB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5vZGU6IEFTVE1ldGhvZE5vZGUpIHtcblx0XHR0aGlzLm5hbWUgPSBub2RlLm5hbWU7XG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0XHR0aGlzLmlzU3RhdGljID0gbm9kZS5tb2RpZmllcnMuc3RhdGljO1xuXHRcdHRoaXMuaXNQcml2YXRlID0gbm9kZS5tb2RpZmllcnMucHJpdmF0ZTtcblx0XHR0aGlzLmlzUHVibGljID0gbm9kZS5tb2RpZmllcnMucHVibGljO1xuXHR9XG5cblx0Z2V0IGJvZHkoKTogQVNUTm9kZVtdIHtcblx0XHRyZXR1cm4gdGhpcy5ub2RlLmNoaWxkcmVuO1xuXHR9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT2JqZWN0U3ltYm9sIHtcblx0bmFtZTogc3RyaW5nO1xuXHR0eXBlUGFyYW1ldGVyU3ltYm9sczogVHlwZVBhcmFtZXRlclN5bWJvbFtdO1xuXHRzdGF0aWNGaWVsZFN5bWJvbHM6IE1hcDxzdHJpbmcsIEZpZWxkU3ltYm9sPjtcblx0aW5zdGFuY2VNZXRob2RTeW1ib2xzOiBNYXA8c3RyaW5nLCBNZXRob2RTeW1ib2w+O1xufVxuXG5leHBvcnQgY2xhc3MgQ2xhc3NTeW1ib2wgaW1wbGVtZW50cyBPYmplY3RTeW1ib2wge1xuXHRyZWFkb25seSBub2RlOiBBU1RDbGFzc05vZGU7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblx0cmVhZG9ubHkgc3VwZXJDbGFzczogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cblx0c3VwZXJDbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wgfCBudWxsID0gbnVsbDtcblx0dHlwZVBhcmFtZXRlclN5bWJvbHM6IFR5cGVQYXJhbWV0ZXJTeW1ib2xbXSA9IFtdO1xuXHRpbnN0YW5jZUZpZWxkU3ltYm9sczogTWFwPHN0cmluZywgRmllbGRTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRzdGF0aWNGaWVsZFN5bWJvbHM6IE1hcDxzdHJpbmcsIEZpZWxkU3ltYm9sPiA9IG5ldyBNYXAoKTtcblx0aW5zdGFuY2VNZXRob2RTeW1ib2xzOiBNYXA8c3RyaW5nLCBNZXRob2RTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRzdGF0aWNNZXRob2RTeW1ib2xzOiBNYXA8c3RyaW5nLCBNZXRob2RTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRjb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sIHwgbnVsbCA9IG51bGw7XG5cdGltcGxlbWVudHNJbnRlcmZhY2VzOiBJbnRlcmZhY2VSZWZUeXBlW10gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihub2RlOiBBU1RDbGFzc05vZGUpIHtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHRcdHRoaXMubmFtZSA9IG5vZGUubmFtZTtcblx0XHR0aGlzLnN1cGVyQ2xhc3MgPSBub2RlLnN1cGVyQ2xhc3M/Lm5hbWUgPz8gbnVsbDtcblx0fVxuXG5cdHJlc29sdmVJbnN0YW5jZUZpZWxkU3ltYm9sKG5hbWU6IHN0cmluZyk6IEZpZWxkU3ltYm9sIHwgbnVsbCB7XG5cdFx0aWYgKHRoaXMuaW5zdGFuY2VGaWVsZFN5bWJvbHMuaGFzKG5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZUZpZWxkU3ltYm9scy5nZXQobmFtZSkgfHwgbnVsbDtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zdXBlckNsYXNzKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdXBlckNsYXNzU3ltYm9sPy5yZXNvbHZlSW5zdGFuY2VGaWVsZFN5bWJvbChuYW1lKSB8fCBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmVzb2x2ZVN0YXRpY0ZpZWxkU3ltYm9sKG5hbWU6IHN0cmluZyk6IEZpZWxkU3ltYm9sIHwgbnVsbCB7XG5cdFx0aWYgKHRoaXMuc3RhdGljRmllbGRTeW1ib2xzLmhhcyhuYW1lKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGljRmllbGRTeW1ib2xzLmdldChuYW1lKSB8fCBudWxsO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnN1cGVyQ2xhc3MpIHtcblx0XHRcdHJldHVybiB0aGlzLnN1cGVyQ2xhc3NTeW1ib2w/LnJlc29sdmVTdGF0aWNGaWVsZFN5bWJvbChuYW1lKSB8fCBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2VTeW1ib2wgaW1wbGVtZW50cyBPYmplY3RTeW1ib2wge1xuXHRyZWFkb25seSBub2RlOiBBU1RJbnRlcmZhY2VOb2RlO1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cblx0dHlwZVBhcmFtZXRlclN5bWJvbHM6IFR5cGVQYXJhbWV0ZXJTeW1ib2xbXSA9IFtdO1xuXHRzdGF0aWNGaWVsZFN5bWJvbHM6IE1hcDxzdHJpbmcsIEZpZWxkU3ltYm9sPiA9IG5ldyBNYXAoKTtcblx0aW5zdGFuY2VNZXRob2RTeW1ib2xzOiBNYXA8c3RyaW5nLCBNZXRob2RTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRleHRlbmRzSW50ZXJmYWNlczogSW50ZXJmYWNlU3ltYm9sW10gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihub2RlOiBBU1RJbnRlcmZhY2VOb2RlKSB7XG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0XHR0aGlzLm5hbWUgPSBub2RlLm5hbWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIENsYXNzUmVmVHlwZSBleHRlbmRzIFR5cGUge1xuXHRyZWFkb25seSBjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2w7XG5cdHJlYWRvbmx5IHR5cGVBcmd1bWVudHM6IFR5cGVbXTtcblxuXHRjb25zdHJ1Y3RvcihjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wsIHR5cGVBcmd1bWVudHM6IFR5cGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQ2xhc3NSZWZUeXBlLmZvcm1hdFN5bWJvbE5hbWUoY2xhc3NTeW1ib2wubmFtZSwgdHlwZUFyZ3VtZW50cykpO1xuXHRcdHRoaXMuY2xhc3NTeW1ib2wgPSBjbGFzc1N5bWJvbDtcblx0XHR0aGlzLnR5cGVBcmd1bWVudHMgPSB0eXBlQXJndW1lbnRzO1xuXHR9XG5cblx0c3RhdGljIGZvcm1hdFN5bWJvbE5hbWUobmFtZTogc3RyaW5nLCB0eXBlQXJndW1lbnRzOiBUeXBlW10pIHtcblx0XHRpZiAodHlwZUFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBgY2xhc3NSZWZUeXBlKCR7bmFtZX0pYDtcblx0XHR9XG5cblx0XHRyZXR1cm4gYGNsYXNzUmVmVHlwZSgke25hbWV9PCR7dHlwZUFyZ3VtZW50cy5tYXAodHlwZSA9PiB0eXBlLnRvU3RyaW5nKCkpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbignLCAnKX0+KWA7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gKG90aGVyIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlXG5cdFx0XHQmJiBvdGhlci5jbGFzc1N5bWJvbCA9PT0gdGhpcy5jbGFzc1N5bWJvbCk7XG5cdH1cblxuXHRvdmVycmlkZSBhY2NlcHRzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0aWYgKCF0aGlzLmVxdWFscyhvdGhlcikpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAob3RoZXIgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUpIHtcblx0XHRcdGlmICh0aGlzLnR5cGVBcmd1bWVudHMubGVuZ3RoICE9PSBvdGhlci50eXBlQXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50eXBlQXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IG90aGVyVHlwZSA9IG90aGVyLnR5cGVBcmd1bWVudHNbaV07XG5cblx0XHRcdFx0aWYgKCFvdGhlclR5cGUgfHwgIXRoaXMudHlwZUFyZ3VtZW50c1tpXT8uYWNjZXB0cyhvdGhlclR5cGUpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgSW50ZXJmYWNlUmVmVHlwZSBleHRlbmRzIFR5cGUge1xuXHRyZWFkb25seSBpbnRlcmZhY2VTeW1ib2w6IEludGVyZmFjZVN5bWJvbDtcblx0cmVhZG9ubHkgdHlwZUFyZ3VtZW50czogVHlwZVtdO1xuXG5cdGNvbnN0cnVjdG9yKGludGVyZmFjZVN5bWJvbDogSW50ZXJmYWNlU3ltYm9sLCB0eXBlQXJndW1lbnRzOiBUeXBlW10gPSBbXSkge1xuXHRcdHN1cGVyKEludGVyZmFjZVJlZlR5cGUuZm9ybWF0U3ltYm9sTmFtZShpbnRlcmZhY2VTeW1ib2wubmFtZSwgdHlwZUFyZ3VtZW50cykpO1xuXHRcdHRoaXMuaW50ZXJmYWNlU3ltYm9sID0gaW50ZXJmYWNlU3ltYm9sO1xuXHRcdHRoaXMudHlwZUFyZ3VtZW50cyA9IHR5cGVBcmd1bWVudHM7XG5cdH1cblxuXHRzdGF0aWMgZm9ybWF0U3ltYm9sTmFtZShuYW1lOiBzdHJpbmcsIHR5cGVBcmd1bWVudHM6IFR5cGVbXSk6IHN0cmluZyB7XG5cdFx0aWYgKHR5cGVBcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gYGludGVyZmFjZVJlZlR5cGUoJHtuYW1lfSlgO1xuXHRcdH1cblxuXHRcdHJldHVybiBgaW50ZXJmYWNlUmVmVHlwZSgke25hbWV9PCR7dHlwZUFyZ3VtZW50cy5tYXAodHlwZSA9PiB0eXBlLnRvU3RyaW5nKCkpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oJywgJyl9PilgO1xuXHR9XG5cblx0b3ZlcnJpZGUgZXF1YWxzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIChvdGhlciBpbnN0YW5jZW9mIEludGVyZmFjZVJlZlR5cGVcblx0XHRcdCYmIG90aGVyLmludGVyZmFjZVN5bWJvbCA9PT0gdGhpcy5pbnRlcmZhY2VTeW1ib2wpO1xuXHR9XG5cblx0b3ZlcnJpZGUgYWNjZXB0cyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdGlmICghdGhpcy5lcXVhbHMob3RoZXIpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKG90aGVyIGluc3RhbmNlb2YgSW50ZXJmYWNlUmVmVHlwZSkge1xuXHRcdFx0aWYgKHRoaXMudHlwZUFyZ3VtZW50cy5sZW5ndGggIT09IG90aGVyLnR5cGVBcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnR5cGVBcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3Qgb3RoZXJUeXBlID0gb3RoZXIudHlwZUFyZ3VtZW50c1tpXTtcblxuXHRcdFx0XHRpZiAoIW90aGVyVHlwZSB8fCAhdGhpcy50eXBlQXJndW1lbnRzW2ldPy5hY2NlcHRzKG90aGVyVHlwZSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMYW1iZGFUeXBlIGV4dGVuZHMgVHlwZSB7XG5cdHJlYWRvbmx5IHBhcmFtZXRlclN5bWJvbHM6IFBhcmFtZXRlclN5bWJvbFtdID0gW107XG5cdHJlYWRvbmx5IHJldHVyblR5cGU6IFR5cGU7XG5cblx0Y29uc3RydWN0b3IocGFyYW1ldGVyczogUGFyYW1ldGVyU3ltYm9sW10sIHJldHVyblR5cGU6IFR5cGUpIHtcblx0XHRzdXBlcihMYW1iZGFUeXBlLmNyZWF0ZVNpZ25hdHVyZShwYXJhbWV0ZXJzLCByZXR1cm5UeXBlKSk7XG5cdFx0dGhpcy5wYXJhbWV0ZXJTeW1ib2xzID0gcGFyYW1ldGVycztcblx0XHR0aGlzLnJldHVyblR5cGUgPSByZXR1cm5UeXBlO1xuXHR9XG5cblx0c3RhdGljIGNyZWF0ZVNpZ25hdHVyZShwYXJhbWV0ZXJzOiBQYXJhbWV0ZXJTeW1ib2xbXSwgcmV0dXJuVHlwZTogVHlwZSk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGBsYW1iZGEoJHtwYXJhbWV0ZXJzLm1hcChwYXJhbWV0ZXIgPT4gcGFyYW1ldGVyLnBhcmFtZXRlclR5cGUudG9TdHJpbmcoKSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbignLCAnKX0pIC0+ICR7cmV0dXJuVHlwZS50b1N0cmluZygpfSlgO1xuXHR9XG5cblx0b3ZlcnJpZGUgZXF1YWxzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0aWYgKCEob3RoZXIgaW5zdGFuY2VvZiBMYW1iZGFUeXBlKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnBhcmFtZXRlclN5bWJvbHMubGVuZ3RoICE9PSBvdGhlci5wYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBvdGhlclR5cGUgPSBvdGhlci5wYXJhbWV0ZXJTeW1ib2xzW2ldPy5wYXJhbWV0ZXJUeXBlO1xuXG5cdFx0XHRpZiAoIW90aGVyVHlwZSB8fCAhdGhpcy5wYXJhbWV0ZXJTeW1ib2xzW2ldPy5wYXJhbWV0ZXJUeXBlLmFjY2VwdHMob3RoZXJUeXBlKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucmV0dXJuVHlwZS5hY2NlcHRzKG90aGVyLnJldHVyblR5cGUpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlU2NvcGUge1xuXHRyZWFkb25seSBwYXJlbnQ6IFR5cGVTY29wZSB8IG51bGw7XG5cdHJlYWRvbmx5IHR5cGVzOiBNYXA8c3RyaW5nLCBUeXBlPiA9IG5ldyBNYXAoKTtcblx0cmVhZG9ubHkgdHlwZUJpbmRpbmdzOiBNYXA8c3RyaW5nLCBUeXBlPiA9IG5ldyBNYXAoKTtcblxuXHRjdXJyZW50T2JqZWN0U3ltYm9sOiBDbGFzc1N5bWJvbCB8IEludGVyZmFjZVN5bWJvbCB8IG51bGw7XG5cblx0Y29uc3RydWN0b3IocGFyZW50OiBUeXBlU2NvcGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xuXHRcdHRoaXMuY3VycmVudE9iamVjdFN5bWJvbCA9IHBhcmVudD8uY3VycmVudE9iamVjdFN5bWJvbCA/PyBudWxsO1xuXHR9XG5cblx0ZGVmaW5lVHlwZShuYW1lOiBzdHJpbmcsIHR5cGU6IFR5cGUpOiB2b2lkIHtcblx0XHR0aGlzLnR5cGVzLnNldChuYW1lLCB0eXBlKTtcblx0fVxuXG5cdGRlZmluZVR5cGVCaW5kaW5nKG5hbWU6IHN0cmluZywgdHlwZVZhcmlhYmxlOiBUeXBlVmFyaWFibGUpOiB2b2lkIHtcblx0XHR0aGlzLnR5cGVCaW5kaW5ncy5zZXQobmFtZSwgdHlwZVZhcmlhYmxlKTtcblx0fVxuXG5cdGhhc1R5cGUobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudHlwZXMuaGFzKG5hbWUpIHx8IHRoaXMucGFyZW50Py5oYXNUeXBlKG5hbWUpIHx8IGZhbHNlO1xuXHR9XG5cblx0aGFzVHlwZUJpbmRpbmcobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudHlwZUJpbmRpbmdzLmhhcyhuYW1lKSB8fCB0aGlzLnBhcmVudD8uaGFzVHlwZUJpbmRpbmcobmFtZSkgfHwgZmFsc2U7XG5cdH1cblxuXHRnZXRUeXBlKG5hbWU6IHN0cmluZyk6IFR5cGUge1xuXHRcdGlmICh0aGlzLnR5cGVzLmhhcyhuYW1lKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMudHlwZXMuZ2V0KG5hbWUpIHx8IFR5cGVzLk5VTEw7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnBhcmVudD8uZ2V0VHlwZShuYW1lKSB8fCBUeXBlcy5OVUxMO1xuXHR9XG5cblx0Z2V0VHlwZUJpbmRpbmcobmFtZTogc3RyaW5nKTogVHlwZSB7XG5cdFx0aWYgKHRoaXMudHlwZUJpbmRpbmdzLmhhcyhuYW1lKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMudHlwZUJpbmRpbmdzLmdldChuYW1lKSB8fCBUeXBlcy5OVUxMO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5wYXJlbnQ/LmdldFR5cGVCaW5kaW5nKG5hbWUpIHx8IFR5cGVzLk5VTEw7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBUeXBlKHR5cGVOb2RlOiBBU1RUeXBlTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBzY29wZTogVHlwZVNjb3BlIHwgbnVsbCA9IG51bGwpOiBUeXBlIHtcblx0bGV0IGJhc2VUeXBlID0gcmVzb2x2ZUJhc2VUeXBlKHR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeSwgc2NvcGUpO1xuXHRpZiAoYmFzZVR5cGUpIHtcblx0XHRpZiAoIShiYXNlVHlwZSBpbnN0YW5jZW9mIE51bGxhYmxlVHlwZSkgJiYgdHlwZU5vZGUubnVsbGFibGUpIHtcblx0XHRcdHJldHVybiBuZXcgTnVsbGFibGVUeXBlKGJhc2VUeXBlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYmFzZVR5cGU7XG5cdH1cblxuXHR0aHJvd1R5cGVFcnJvcihgQ291bGQgbm90IHJlc29sdmUgdHlwZSAke3R5cGVOb2RlLm5hbWV9LmAsIHR5cGVOb2RlLnNwYW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUJhc2VUeXBlKHR5cGVOb2RlOiBBU1RUeXBlTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBzY29wZTogVHlwZVNjb3BlIHwgbnVsbCA9IG51bGwpOiBUeXBlIHtcblx0c3dpdGNoICh0eXBlTm9kZS5raW5kKSB7XG5cdFx0Y2FzZSBBU1RUeXBlTm9kZS5LSU5EX1NJTVBMRToge1xuXHRcdFx0aWYgKHNjb3BlICYmIHNjb3BlLmhhc1R5cGVCaW5kaW5nKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiBzY29wZS5nZXRUeXBlQmluZGluZyh0eXBlTm9kZS5uYW1lKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmhhc1N5bWJvbCh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzb2x2ZVJlZlR5cGUodHlwZU5vZGUsIG9iamVjdFJlZ2lzdHJ5KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKFByaW1pdGl2ZVR5cGVzLmhhc1R5cGUodHlwZU5vZGUubmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIHJlc29sdmVQcmltaXRpdmVUeXBlKHR5cGVOb2RlKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG5ldyBUeXBlVmFyaWFibGUodHlwZU5vZGUubmFtZSk7XG5cdFx0fVxuXHRcdGNhc2UgQVNUVHlwZU5vZGUuS0lORF9HRU5FUklDOiB7XG5cdFx0XHRpZiAoIW9iamVjdFJlZ2lzdHJ5LnR5cGVzLmhhc1N5bWJvbCh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdFx0XHR0aHJvd1R5cGVFcnJvcihgU3ltYm9sICR7dHlwZU5vZGUubmFtZX0gaXMgbm90IGEgY2xhc3MgcmVmZXJlbmNlLmAsIHR5cGVOb2RlLnNwYW4pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc29sdmVHZW5lcmljUmVmVHlwZSh0eXBlTm9kZSwgb2JqZWN0UmVnaXN0cnkpO1xuXHRcdH1cblx0XHRjYXNlIEFTVFR5cGVOb2RlLktJTkRfTEFNQkRBOiB7XG5cdFx0XHRyZXR1cm4gcmVzb2x2ZUxhbWJkYVR5cGUodHlwZU5vZGUsIG9iamVjdFJlZ2lzdHJ5KTtcblx0XHR9XG5cdFx0ZGVmYXVsdDoge1xuXHRcdFx0dGhyb3dUeXBlRXJyb3IoXG5cdFx0XHRcdGBJbnZhbGlkIHR5cGUgYW5ub3RhdGlvbiwga2luZCAke3R5cGVOb2RlLmtpbmR9LmAsXG5cdFx0XHRcdHR5cGVOb2RlLnNwYW5cblx0XHRcdCk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlUmVmVHlwZSh0eXBlTm9kZTogQVNUVHlwZU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IENsYXNzUmVmVHlwZSB8IEludGVyZmFjZVJlZlR5cGUgfCBUeXBlIHtcblx0aWYgKHR5cGVOb2RlLnR5cGVBcmd1bWVudHMubGVuZ3RoID4gMCkge1xuXHRcdHRocm93VHlwZUVycm9yKGBHZW5lcmljIGNsYXNzICR7dHlwZU5vZGUubmFtZX0gY2Fubm90IGhhdmUgdHlwZSBhcmd1bWVudHMuYCwgdHlwZU5vZGUuc3Bhbik7XG5cdH1cblxuXHRpZiAob2JqZWN0UmVnaXN0cnkudHlwZXMuY2xhc3NTeW1ib2xzLmhhcyh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdHJldHVybiBuZXcgQ2xhc3NSZWZUeXBlKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKHR5cGVOb2RlLm5hbWUpKTtcblx0fVxuXG5cdGlmIChvYmplY3RSZWdpc3RyeS50eXBlcy5pbnRlcmZhY2VTeW1ib2xzLmhhcyh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdHJldHVybiBuZXcgSW50ZXJmYWNlUmVmVHlwZShvYmplY3RSZWdpc3RyeS50eXBlcy5nZXRJbnRlcmFjZVN5bWJvbCh0eXBlTm9kZS5uYW1lKSk7XG5cdH1cblxuXHR0aHJvd1R5cGVFcnJvcihgVW5rbm93biBjbGFzcyBvciBpbnRlcmZhY2UgJHt0eXBlTm9kZS5uYW1lfS5gLCB0eXBlTm9kZS5zcGFuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVHZW5lcmljUmVmVHlwZSh0eXBlTm9kZTogQVNUVHlwZU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IENsYXNzUmVmVHlwZSB8IEludGVyZmFjZVJlZlR5cGUgfCBUeXBlIHtcblx0aWYgKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmNsYXNzU3ltYm9scy5oYXModHlwZU5vZGUubmFtZSkpIHtcblx0XHRyZXR1cm4gbmV3IENsYXNzUmVmVHlwZShcblx0XHRcdG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKHR5cGVOb2RlLm5hbWUpLFxuXHRcdFx0dHlwZU5vZGUudHlwZUFyZ3VtZW50cy5tYXAodHlwZUFyZ3VtZW50ID0+IHJlc29sdmVCYXNlVHlwZSh0eXBlQXJndW1lbnQsIG9iamVjdFJlZ2lzdHJ5KSlcblx0XHQpO1xuXHR9XG5cblx0aWYgKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmludGVyZmFjZVN5bWJvbHMuaGFzKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0cmV0dXJuIG5ldyBJbnRlcmZhY2VSZWZUeXBlKFxuXHRcdFx0b2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0SW50ZXJhY2VTeW1ib2wodHlwZU5vZGUubmFtZSksXG5cdFx0XHR0eXBlTm9kZS50eXBlQXJndW1lbnRzLm1hcCh0eXBlQXJndW1lbnQgPT4gcmVzb2x2ZUJhc2VUeXBlKHR5cGVBcmd1bWVudCwgb2JqZWN0UmVnaXN0cnkpKVxuXHRcdCk7XG5cdH1cblxuXHR0aHJvd1R5cGVFcnJvcihgVW5rbm93biBjbGFzcyBvciBpbnRlcmZhY2UgJHt0eXBlTm9kZS5uYW1lfS5gLCB0eXBlTm9kZS5zcGFuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVQcmltaXRpdmVUeXBlKHR5cGVOb2RlOiBBU1RUeXBlTm9kZSk6IFR5cGUge1xuXHRyZXR1cm4gVHlwZXMuZ2V0VHlwZSh0eXBlTm9kZS5uYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVMYW1iZGFUeXBlKHR5cGVOb2RlOiBBU1RUeXBlTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBzY29wZTogVHlwZVNjb3BlIHwgbnVsbCA9IG51bGwpOiBMYW1iZGFUeXBlIHtcblx0Y29uc3QgcGFyYW1ldGVyU3ltYm9scyA9IHR5cGVOb2RlLnBhcmFtZXRlclR5cGVzLm1hcChcblx0XHR0eXBlQW5ub3RhdGlvbiA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IFBhcmFtZXRlclN5bWJvbChcblx0XHRcdFx0dHlwZUFubm90YXRpb24ubmFtZSxcblx0XHRcdFx0d3JhcFR5cGUodHlwZUFubm90YXRpb24sIG9iamVjdFJlZ2lzdHJ5LCBzY29wZSlcblx0XHRcdCk7XG5cdFx0fVxuXHQpO1xuXG5cdHJldHVybiBuZXcgTGFtYmRhVHlwZShcblx0XHRwYXJhbWV0ZXJTeW1ib2xzLFxuXHRcdHR5cGVOb2RlLnJldHVyblR5cGVcblx0XHRcdD8gd3JhcFR5cGUodHlwZU5vZGUucmV0dXJuVHlwZSwgb2JqZWN0UmVnaXN0cnksIHNjb3BlKVxuXHRcdFx0OiBUeXBlcy5NSVhFRFxuXHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RpdHV0ZVR5cGUodHlwZTogVHlwZSwgc3Vic3RpdHV0aW9uTWFwOiBNYXA8c3RyaW5nLCBUeXBlPik6IFR5cGUge1xuXHRpZiAodHlwZSBpbnN0YW5jZW9mIFR5cGVWYXJpYWJsZSkge1xuXHRcdHJldHVybiBzdWJzdGl0dXRpb25NYXAuZ2V0KHR5cGUubmFtZSkgPz8gdHlwZTtcblx0fVxuXG5cdGlmICh0eXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0cmV0dXJuIG5ldyBDbGFzc1JlZlR5cGUoXG5cdFx0XHR0eXBlLmNsYXNzU3ltYm9sLFxuXHRcdFx0dHlwZS50eXBlQXJndW1lbnRzLm1hcCh0eXBlQXJndW1lbnQgPT4gc3Vic3RpdHV0ZVR5cGUodHlwZUFyZ3VtZW50LCBzdWJzdGl0dXRpb25NYXApKVxuXHRcdCk7XG5cdH1cblxuXHRpZiAodHlwZSBpbnN0YW5jZW9mIE51bGxhYmxlVHlwZSkge1xuXHRcdHJldHVybiBuZXcgTnVsbGFibGVUeXBlKHN1YnN0aXR1dGVUeXBlKHR5cGUuaW5uZXIsIHN1YnN0aXR1dGlvbk1hcCkpO1xuXHR9XG5cblx0cmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFR5cGVTdWJzdGl0dXRpb25NYXAodHlwZVBhcmFtZXRlcnM6IFR5cGVQYXJhbWV0ZXJTeW1ib2xbXSwgdHlwZUFyZ3VtZW50czogVHlwZVtdKTogTWFwPHN0cmluZywgVHlwZT4ge1xuXHRjb25zdCBzdWJzdGl0dXRpb25NYXAgPSBuZXcgTWFwKCk7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0eXBlUGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHR5cGVQYXJhbWV0ZXI6IFR5cGVQYXJhbWV0ZXJTeW1ib2wgfCBudWxsID0gdHlwZVBhcmFtZXRlcnNbaV0gfHwgbnVsbDtcblx0XHRjb25zdCB0eXBlQXJndW1lbnQ6IFR5cGUgfCBudWxsID0gdHlwZUFyZ3VtZW50c1tpXSB8fCBudWxsO1xuXG5cdFx0aWYgKHR5cGVQYXJhbWV0ZXIgJiYgdHlwZUFyZ3VtZW50KSB7XG5cdFx0XHRzdWJzdGl0dXRpb25NYXAuc2V0KHR5cGVQYXJhbWV0ZXIubmFtZSwgdHlwZUFyZ3VtZW50KTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3Vic3RpdHV0aW9uTWFwO1xufVxuIiwKICAgICJpbXBvcnQge0NsYXNzUmVmVHlwZSwgVHlwZSwgVHlwZXN9IGZyb20gXCIuL3R5cGVfb2JqZWN0c1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge3Rocm93UnVudGltZUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5cbmV4cG9ydCBjbGFzcyBBdXRvYm94ZWRUeXBlcyB7XG5cdHN0YXRpYyBOVU1CRVI6IHN0cmluZyA9ICdOdW1iZXInO1xuXHRzdGF0aWMgU1RSSU5HOiBzdHJpbmcgPSAnU3RyaW5nJztcblx0c3RhdGljIEJPT0xFQU46IHN0cmluZyA9ICdCb29sZWFuJztcblxuXHRzdGF0aWMgQ0xBU1NOQU1FX01BUDogeyBbczogc3RyaW5nXTogc3RyaW5nOyB9ID0ge1xuXHRcdG51bWJlcjogQXV0b2JveGVkVHlwZXMuTlVNQkVSLFxuXHRcdHN0cmluZzogQXV0b2JveGVkVHlwZXMuU1RSSU5HLFxuXHRcdGJvb2xlYW46IEF1dG9ib3hlZFR5cGVzLkJPT0xFQU5cblx0fTtcblxuXHRzdGF0aWMgZ2V0Q2xhc3NOYW1lKGtleTogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRjb25zdCBjbGFzc05hbWUgPSBBdXRvYm94ZWRUeXBlcy5DTEFTU05BTUVfTUFQW2tleV07XG5cdFx0aWYgKCFjbGFzc05hbWUpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBObyBjbGFzcyBmb3VuZCBmb3IgcHJpbWl0aXZlIHR5cGUgJHtrZXl9LmApO1xuXHRcdH1cblx0XHRyZXR1cm4gY2xhc3NOYW1lO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvYm94aW5nIHtcblx0c3RhdGljIENMQVNTTkFNRV9NQVA6IE1hcDxUeXBlLCBzdHJpbmc+ID0gbmV3IE1hcChcblx0XHRbXG5cdFx0XHRbVHlwZXMuTlVNQkVSLCBBdXRvYm94ZWRUeXBlcy5OVU1CRVJdLFxuXHRcdFx0W1R5cGVzLlNUUklORywgQXV0b2JveGVkVHlwZXMuU1RSSU5HXSxcblx0XHRcdFtUeXBlcy5CT09MRUFOLCBBdXRvYm94ZWRUeXBlcy5CT09MRUFOXVxuXHRcdF1cblx0KTtcblxuXHRzdGF0aWMgYXV0b2JveElmTmVlZGVkKG9iamVjdFR5cGU6IFR5cGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IENsYXNzUmVmVHlwZSB8IFR5cGUge1xuXHRcdGNvbnN0IGNsYXNzTmFtZSA9IEF1dG9ib3hpbmcuQ0xBU1NOQU1FX01BUC5nZXQob2JqZWN0VHlwZSk7XG5cdFx0aWYgKGNsYXNzTmFtZSkge1xuXHRcdFx0cmV0dXJuIG5ldyBDbGFzc1JlZlR5cGUob2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2woY2xhc3NOYW1lKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG9iamVjdFR5cGU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtBU1RQYXJhbWV0ZXJOb2RlLCBBU1RUeXBlTm9kZX0gZnJvbSBcIi4uL2NvcmUvYXN0XCI7XG5pbXBvcnQge1RZUEVfRU5VTX0gZnJvbSBcIi4uL2NvcmUvZ3JhbW1hclwiO1xuaW1wb3J0IHt0aHJvd05hdGl2ZUVycm9yfSBmcm9tIFwiLi4vY29yZS9lcnJvcnNcIjtcblxuZXhwb3J0IGNsYXNzIE5hdGl2ZUZ1bmN0aW9uIHtcblx0bmFtZTogc3RyaW5nO1xuXHRwYXJhbWV0ZXJOb2RlczogQVNUUGFyYW1ldGVyTm9kZVtdID0gW107XG5cdHJldHVyblR5cGU6IEFTVFR5cGVOb2RlO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgcGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdLCByZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5wYXJhbWV0ZXJOb2RlcyA9IHBhcmFtZXRlcnM7XG5cdFx0dGhpcy5yZXR1cm5UeXBlID0gcmV0dXJuVHlwZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTmF0aXZlRnVuY3Rpb25UeXBlUmVnaXN0cnkge1xuXHRmdW5jdGlvbnM6IE1hcDxzdHJpbmcsIE5hdGl2ZUZ1bmN0aW9uPiA9IG5ldyBNYXAoKTtcblxuXHRoYXMobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZnVuY3Rpb25zLmhhcyhuYW1lKTtcblx0fVxuXG5cdGdldChuYW1lOiBzdHJpbmcpOiBOYXRpdmVGdW5jdGlvbiB7XG5cdFx0Y29uc3QgbmF0aXZlRnVuY3Rpb246IE5hdGl2ZUZ1bmN0aW9uIHwgdW5kZWZpbmVkID0gdGhpcy5mdW5jdGlvbnMuZ2V0KG5hbWUpO1xuXHRcdGlmICghbmF0aXZlRnVuY3Rpb24pIHtcblx0XHRcdHRocm93TmF0aXZlRXJyb3IoYEZ1bmN0aW9uICR7bmFtZX0gbm90IGZvdW5kLmApO1xuXHRcdH1cblx0XHRyZXR1cm4gbmF0aXZlRnVuY3Rpb247XG5cdH1cblxuXHRzZXQobmFtZTogc3RyaW5nLCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sIHJldHVyblR5cGU6IEFTVFR5cGVOb2RlKTogTmF0aXZlRnVuY3Rpb25UeXBlUmVnaXN0cnkge1xuXHRcdHRoaXMuZnVuY3Rpb25zLnNldChuYW1lLCBuZXcgTmF0aXZlRnVuY3Rpb24obmFtZSwgcGFyYW1ldGVycywgcmV0dXJuVHlwZSkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBOYXRpdmVGdW5jdGlvbnMge1xuXHRzdGF0aWMgUFJJTlQgPSAncHJpbnQnO1xuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fVxuXHQgKi9cblx0Z2V0R2xvYmFsRnVuY3Rpb25zKCk6IHsgW2tleTogc3RyaW5nXTogKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkgfSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFtOYXRpdmVGdW5jdGlvbnMuUFJJTlRdOiAoLi4uYXJncykgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyguLi5hcmdzKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cblx0Z2V0R2xvYmFsRnVuY3Rpb25UeXBlUmVnaXN0cnkoKTogTmF0aXZlRnVuY3Rpb25UeXBlUmVnaXN0cnkge1xuXHRcdGNvbnN0IGZ1bmN0aW9ucyA9IG5ldyBOYXRpdmVGdW5jdGlvblR5cGVSZWdpc3RyeSgpO1xuXHRcdGZ1bmN0aW9ucy5zZXQoXG5cdFx0XHROYXRpdmVGdW5jdGlvbnMuUFJJTlQsXG5cdFx0XHRbcGFyYW1ldGVyKHR5cGUoVFlQRV9FTlVNLlNUUklORyksICdtZXNzYWdlJyldLFxuXHRcdFx0dHlwZShUWVBFX0VOVU0uVk9JRClcblx0XHQpXG5cblx0XHRyZXR1cm4gZnVuY3Rpb25zO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHR5cGUobmFtZTogc3RyaW5nLCBudWxsYWJsZSA9IGZhbHNlKTogQVNUVHlwZU5vZGUge1xuXHRyZXR1cm4gbmV3IEFTVFR5cGVOb2RlKEFTVFR5cGVOb2RlLktJTkRfU0lNUExFLCBuYW1lLCBudWxsYWJsZSk7XG59XG5cbmZ1bmN0aW9uIHBhcmFtZXRlcih0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGUsIG5hbWU6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBhbnkgPSBudWxsKTogQVNUUGFyYW1ldGVyTm9kZSB7XG5cdHJldHVybiBuZXcgQVNUUGFyYW1ldGVyTm9kZShuYW1lLCB0eXBlQW5ub3RhdGlvbiwgZGVmYXVsdFZhbHVlKTtcbn1cbiIsCiAgICAiaW1wb3J0IHtcblx0QVNUQXJyYXlOb2RlLFxuXHRBU1RCaW5hcnlOb2RlLFxuXHRBU1RDYWxsTm9kZSxcblx0QVNUQ2xhc3NOb2RlLFxuXHRBU1RFeHByZXNzaW9uTm9kZSxcblx0QVNURmllbGROb2RlLFxuXHRBU1RGb3JlYWNoTm9kZSxcblx0QVNUSW5kZXhOb2RlLFxuXHRBU1RJbnRlcmZhY2VOb2RlLFxuXHRBU1RMYW1iZGFOb2RlLFxuXHRBU1RNZW1iZXJOb2RlLFxuXHRBU1RNZXRob2ROb2RlLFxuXHRBU1ROZXdOb2RlLFxuXHRBU1ROb2RlLFxuXHRBU1ROb2RlVHlwZSxcblx0QVNUUGFyYW1ldGVyTm9kZSxcblx0QVNUUmV0dXJuTm9kZSxcblx0QVNUVHlwZU5vZGUsXG5cdEFTVFVuYXJ5Tm9kZSxcblx0QVNUVmFyaWFibGVOb2RlLFxuXHRBU1RWRG9tTm9kZVxufSBmcm9tICcuLi9hc3QudHMnO1xuaW1wb3J0IHtcblx0YnVpbGRUeXBlU3Vic3RpdHV0aW9uTWFwLFxuXHRDbGFzc1JlZlR5cGUsXG5cdENsYXNzU3ltYm9sLFxuXHRGaWVsZFN5bWJvbCxcblx0SW50ZXJmYWNlUmVmVHlwZSxcblx0SW50ZXJmYWNlU3ltYm9sLFxuXHRMYW1iZGFUeXBlLFxuXHRNZXRob2RTeW1ib2wsXG5cdE1peGVkVHlwZSxcblx0TnVsbGFibGVUeXBlLFxuXHRQYXJhbWV0ZXJTeW1ib2wsXG5cdFByaW1pdGl2ZUNsYXNzVHlwZXMsXG5cdHN1YnN0aXR1dGVUeXBlLFxuXHRUeXBlLFxuXHRUeXBlUGFyYW1ldGVyU3ltYm9sLFxuXHRUeXBlcyxcblx0VHlwZVNjb3BlLFxuXHRUeXBlVmFyaWFibGUsXG5cdHdyYXBUeXBlXG59IGZyb20gXCIuL3R5cGVfb2JqZWN0c1wiO1xuaW1wb3J0IHtBdXRvYm94aW5nfSBmcm9tIFwiLi9hdXRvYm94aW5nXCI7XG5pbXBvcnQge05hdGl2ZUZ1bmN0aW9uLCBOYXRpdmVGdW5jdGlvbnN9IGZyb20gXCIuLi8uLi9saWJyYXJ5L25hdGl2ZV9mdW5jdGlvbnNcIjtcbmltcG9ydCB7R1JBTU1BUn0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcbmltcG9ydCB7dGhyb3dUeXBlRXJyb3J9IGZyb20gXCIuLi9lcnJvcnMudHNcIlxuaW1wb3J0IHtDbGFzc0RlZmluaXRpb24sIEludGVyZmFjZURlZmluaXRpb259IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcblxuXG5jb25zdCBnbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeSA9IG5ldyBOYXRpdmVGdW5jdGlvbnMoKVxuXHQuZ2V0R2xvYmFsRnVuY3Rpb25UeXBlUmVnaXN0cnkoKTtcblxuZXhwb3J0IGNsYXNzIFN0YXRlbWVudFJlc3VsdCB7XG5cdGRpZFJldHVybjogYm9vbGVhbjtcblx0cmV0dXJuVHlwZTogVHlwZSB8IG51bGw7XG5cblx0Y29uc3RydWN0b3IoZGlkUmV0dXJuOiBib29sZWFuLCByZXR1cm5UeXBlOiBUeXBlIHwgbnVsbCkge1xuXHRcdHRoaXMuZGlkUmV0dXJuID0gZGlkUmV0dXJuO1xuXHRcdHRoaXMucmV0dXJuVHlwZSA9IHJldHVyblR5cGU7XG5cdH1cblxuXHRzdGF0aWMgd2l0aFJldHVybihyZXR1cm5UeXBlOiBUeXBlKTogU3RhdGVtZW50UmVzdWx0IHtcblx0XHRyZXR1cm4gbmV3IFN0YXRlbWVudFJlc3VsdCh0cnVlLCByZXR1cm5UeXBlKTtcblx0fVxuXG5cdHN0YXRpYyBub1JldHVybigpOiBTdGF0ZW1lbnRSZXN1bHQge1xuXHRcdHJldHVybiBuZXcgU3RhdGVtZW50UmVzdWx0KGZhbHNlLCBudWxsKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVHlwZUNoZWNrZXIge1xuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cblx0Y29uc3RydWN0b3Iob2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KSB7XG5cdFx0dGhpcy5vYmplY3RSZWdpc3RyeSA9IG9iamVjdFJlZ2lzdHJ5O1xuXHR9XG5cblx0Y29sbGVjdEFsbFN5bWJvbHNGcm9tTm9kZShhc3Q6IEFTVE5vZGUpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgYXN0LmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEludGVyZmFjZU5vZGUpIHtcblx0XHRcdFx0dGhpcy5yZWdpc3RlckludGVyZmFjZVN5bWJvbChub2RlKVxuXHRcdFx0fSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgQVNUQ2xhc3NOb2RlKSB7XG5cdFx0XHRcdHRoaXMucmVnaXN0ZXJDbGFzc1N5bWJvbChub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjb2xsZWN0QWxsU3ltYm9sc0Zyb21SZWdpc3RyeShvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpOiB2b2lkIHtcblx0XHRjb25zdCBvYmplY3REZWZpbml0aW9uczogTWFwSXRlcmF0b3I8Q2xhc3NEZWZpbml0aW9uIHwgSW50ZXJmYWNlRGVmaW5pdGlvbj4gPSBvYmplY3RSZWdpc3RyeVxuXHRcdFx0LmZldGNoQWxsT2JqZWN0RGVmaW5pdGlvbnMoKVxuXHRcdFx0LnZhbHVlcygpO1xuXG5cdFx0Zm9yIChsZXQgb2JqZWN0RGVmIG9mIG9iamVjdERlZmluaXRpb25zKSB7XG5cdFx0XHRpZiAob2JqZWN0RGVmIGluc3RhbmNlb2YgSW50ZXJmYWNlRGVmaW5pdGlvbikge1xuXHRcdFx0XHR0aGlzLnJlZ2lzdGVySW50ZXJmYWNlU3ltYm9sKG9iamVjdERlZi5ub2RlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucmVnaXN0ZXJDbGFzc1N5bWJvbChvYmplY3REZWYubm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y2hlY2soYXN0OiBBU1ROb2RlKTogdm9pZCB7XG5cdFx0dGhpcy5jb2xsZWN0QWxsU3ltYm9sc0Zyb21Ob2RlKGFzdCk7XG5cdFx0dGhpcy52YWxpZGF0ZUluaGVyaXRhbmNlKCk7XG5cdFx0dGhpcy5jaGVja1Byb2dyYW0oYXN0KTtcblx0XHR0aGlzLmNoZWNrSW50ZXJmYWNlQm9kaWVzKCk7XG5cdFx0dGhpcy5jaGVja0NsYXNzZXNCb2RpZXMoKTtcblx0XHR0aGlzLmNoZWNrQ2xhc3Nlc0ltcGxlbWVudHMoKTtcblx0fVxuXG5cdHByaXZhdGUgdmFsaWRhdGVJbmhlcml0YW5jZSgpIHtcblx0XHRmb3IgKGNvbnN0IGNsYXNzU3ltYm9sIG9mIHRoaXMub2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5hbGwoKSkge1xuXHRcdFx0aWYgKGNsYXNzU3ltYm9sLnN1cGVyQ2xhc3MgJiYgIXRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKGNsYXNzU3ltYm9sLnN1cGVyQ2xhc3MpKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBVbmtub3duIHN1cGVyY2xhc3MgJHtjbGFzc1N5bWJvbC5zdXBlckNsYXNzfWAsIGNsYXNzU3ltYm9sLm5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tQcm9ncmFtKGFzdDogQVNUTm9kZSk6IHZvaWQge1xuXHRcdGNvbnN0IHNjb3BlID0gbmV3IFR5cGVTY29wZSgpO1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdHRoaXMuY2hlY2tTdGF0ZW1lbnQobm9kZSwgc2NvcGUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tDbGFzc2VzQm9kaWVzKCk6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qgb2JqZWN0U3ltYm9sIG9mIHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuYWxsQ2xhc3NTeW1ib2xzKCkpIHtcblx0XHRcdGNvbnN0IGluc3RhbmNlU2NvcGUgPSBuZXcgVHlwZVNjb3BlKCk7XG5cdFx0XHRpbnN0YW5jZVNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgPSBvYmplY3RTeW1ib2w7XG5cblx0XHRcdG9iamVjdFN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5mb3JFYWNoKHR5cGVQYXJhbWV0ZXIgPT4ge1xuXHRcdFx0XHRpbnN0YW5jZVNjb3BlLmRlZmluZVR5cGVCaW5kaW5nKFxuXHRcdFx0XHRcdHR5cGVQYXJhbWV0ZXIubmFtZSxcblx0XHRcdFx0XHRuZXcgVHlwZVZhcmlhYmxlKHR5cGVQYXJhbWV0ZXIubmFtZSlcblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAob2JqZWN0U3ltYm9sLmNvbnN0cnVjdG9yTWV0aG9kU3ltYm9sKSB7XG5cdFx0XHRcdGNvbnN0IGNvbnN0cnVjdG9yU3ltYm9sID0gb2JqZWN0U3ltYm9sLmNvbnN0cnVjdG9yTWV0aG9kU3ltYm9sO1xuXHRcdFx0XHRjb25zdCBjb25zdHJ1Y3RvclNjb3BlID0gbmV3IFR5cGVTY29wZShpbnN0YW5jZVNjb3BlKTtcblxuXHRcdFx0XHRvYmplY3RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMuZm9yRWFjaCh0eXBlUGFyYW1ldGVyU3ltYm9sID0+IHtcblx0XHRcdFx0XHRjb25zdHJ1Y3RvclNjb3BlLmRlZmluZVR5cGVCaW5kaW5nKFxuXHRcdFx0XHRcdFx0dHlwZVBhcmFtZXRlclN5bWJvbC5uYW1lLFxuXHRcdFx0XHRcdFx0bmV3IFR5cGVWYXJpYWJsZSh0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Zm9yIChjb25zdCBwYXJhbWV0ZXJTeW1ib2wgb2YgY29uc3RydWN0b3JTeW1ib2wucGFyYW1ldGVyU3ltYm9scykge1xuXHRcdFx0XHRcdGNvbnN0cnVjdG9yU2NvcGUuZGVmaW5lVHlwZShwYXJhbWV0ZXJTeW1ib2wubmFtZSwgcGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5jaGVja0JvZHkoY29uc3RydWN0b3JTeW1ib2wuYm9keSwgY29uc3RydWN0b3JTY29wZSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoY29uc3QgbWV0aG9kU3ltYm9sIG9mIG9iamVjdFN5bWJvbC5pbnN0YW5jZU1ldGhvZFN5bWJvbHMudmFsdWVzKCkpIHtcblx0XHRcdFx0Y29uc3QgbWV0aG9kU2NvcGUgPSBuZXcgVHlwZVNjb3BlKGluc3RhbmNlU2NvcGUpO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5mb3JFYWNoKHR5cGVQYXJhbWV0ZXJTeW1ib2wgPT4ge1xuXHRcdFx0XHRcdG1ldGhvZFNjb3BlLmRlZmluZVR5cGVCaW5kaW5nKFxuXHRcdFx0XHRcdFx0dHlwZVBhcmFtZXRlclN5bWJvbC5uYW1lLFxuXHRcdFx0XHRcdFx0bmV3IFR5cGVWYXJpYWJsZSh0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Zm9yIChjb25zdCBwYXJhbWV0ZXJTeW1ib2wgb2YgbWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMpIHtcblx0XHRcdFx0XHRtZXRob2RTY29wZS5kZWZpbmVUeXBlKHBhcmFtZXRlclN5bWJvbC5uYW1lLCBwYXJhbWV0ZXJTeW1ib2wucGFyYW1ldGVyVHlwZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBoYXNCb2R5ID0gbWV0aG9kU3ltYm9sLmJvZHkgJiYgbWV0aG9kU3ltYm9sLmJvZHkubGVuZ3RoID4gMDtcblx0XHRcdFx0aWYgKGhhc0JvZHkpIHtcblx0XHRcdFx0XHRjb25zdCBhY3R1YWwgPSB0aGlzLmNoZWNrQm9keShtZXRob2RTeW1ib2wuYm9keSwgbWV0aG9kU2NvcGUpO1xuXHRcdFx0XHRcdHRoaXMuY2hlY2tSZXR1cm5UeXBlKG1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlLCBhY3R1YWwsIG1ldGhvZFN5bWJvbC5ub2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGNvbnN0IG1ldGhvZFN5bWJvbCBvZiBvYmplY3RTeW1ib2wuc3RhdGljTWV0aG9kU3ltYm9scy52YWx1ZXMoKSkge1xuXHRcdFx0XHRjb25zdCBzdGF0aWNTY29wZSA9IG5ldyBUeXBlU2NvcGUoaW5zdGFuY2VTY29wZSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmZvckVhY2godHlwZVBhcmFtZXRlclN5bWJvbCA9PiB7XG5cdFx0XHRcdFx0c3RhdGljU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcoXG5cdFx0XHRcdFx0XHR0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUsXG5cdFx0XHRcdFx0XHRuZXcgVHlwZVZhcmlhYmxlKHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRmb3IgKGNvbnN0IHBhcmFtZXRlclN5bWJvbCBvZiBtZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9scykge1xuXHRcdFx0XHRcdHN0YXRpY1Njb3BlLmRlZmluZVR5cGUocGFyYW1ldGVyU3ltYm9sLm5hbWUsIHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGhhc0JvZHkgPSBtZXRob2RTeW1ib2wuYm9keSAmJiBtZXRob2RTeW1ib2wuYm9keS5sZW5ndGggPiAwO1xuXHRcdFx0XHRpZiAoaGFzQm9keSkge1xuXHRcdFx0XHRcdGNvbnN0IGFjdHVhbCA9IHRoaXMuY2hlY2tCb2R5KG1ldGhvZFN5bWJvbC5ib2R5LCBzdGF0aWNTY29wZSk7XG5cdFx0XHRcdFx0dGhpcy5jaGVja1JldHVyblR5cGUobWV0aG9kU3ltYm9sLnJldHVyblR5cGUsIGFjdHVhbCwgbWV0aG9kU3ltYm9sLm5vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0ludGVyZmFjZUJvZGllcygpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IG9iamVjdFN5bWJvbCBvZiB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmFsbEludGVyZmFjZVN5bWJvbHMoKSkge1xuXHRcdFx0Y29uc3QgaW5zdGFuY2VTY29wZSA9IG5ldyBUeXBlU2NvcGUoKTtcblx0XHRcdGluc3RhbmNlU2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCA9IG9iamVjdFN5bWJvbDtcblxuXHRcdFx0b2JqZWN0U3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmZvckVhY2godHlwZVBhcmFtZXRlciA9PiB7XG5cdFx0XHRcdGluc3RhbmNlU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcoXG5cdFx0XHRcdFx0dHlwZVBhcmFtZXRlci5uYW1lLFxuXHRcdFx0XHRcdG5ldyBUeXBlVmFyaWFibGUodHlwZVBhcmFtZXRlci5uYW1lKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGZvciAoY29uc3QgbWV0aG9kU3ltYm9sIG9mIG9iamVjdFN5bWJvbC5pbnN0YW5jZU1ldGhvZFN5bWJvbHMudmFsdWVzKCkpIHtcblx0XHRcdFx0Y29uc3QgbWV0aG9kU2NvcGUgPSBuZXcgVHlwZVNjb3BlKGluc3RhbmNlU2NvcGUpO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5mb3JFYWNoKHR5cGVQYXJhbWV0ZXJTeW1ib2wgPT4ge1xuXHRcdFx0XHRcdG1ldGhvZFNjb3BlLmRlZmluZVR5cGVCaW5kaW5nKFxuXHRcdFx0XHRcdFx0dHlwZVBhcmFtZXRlclN5bWJvbC5uYW1lLFxuXHRcdFx0XHRcdFx0bmV3IFR5cGVWYXJpYWJsZSh0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Zm9yIChjb25zdCBwYXJhbWV0ZXJTeW1ib2wgb2YgbWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMpIHtcblx0XHRcdFx0XHRtZXRob2RTY29wZS5kZWZpbmVUeXBlKHBhcmFtZXRlclN5bWJvbC5uYW1lLCBwYXJhbWV0ZXJTeW1ib2wucGFyYW1ldGVyVHlwZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBoYXNCb2R5ID0gbWV0aG9kU3ltYm9sLmJvZHkgJiYgbWV0aG9kU3ltYm9sLmJvZHkubGVuZ3RoID4gMDtcblx0XHRcdFx0aWYgKGhhc0JvZHkpIHtcblx0XHRcdFx0XHRjb25zdCBhY3R1YWwgPSB0aGlzLmNoZWNrQm9keShtZXRob2RTeW1ib2wuYm9keSwgbWV0aG9kU2NvcGUpO1xuXHRcdFx0XHRcdHRoaXMuY2hlY2tSZXR1cm5UeXBlKG1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlLCBhY3R1YWwsIG1ldGhvZFN5bWJvbC5ub2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tDbGFzc2VzSW1wbGVtZW50cygpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IGNsYXNzU3ltYm9sIG9mIHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuYWxsQ2xhc3NTeW1ib2xzKCkpIHtcblx0XHRcdGZvciAoY29uc3QgaW50ZXJmYWNlUmVmVHlwZSBvZiBjbGFzc1N5bWJvbC5pbXBsZW1lbnRzSW50ZXJmYWNlcykge1xuXHRcdFx0XHR0aGlzLmNoZWNrSW1wbGVtZW50c0ludGVyZmFjZShjbGFzc1N5bWJvbCwgaW50ZXJmYWNlUmVmVHlwZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0ltcGxlbWVudHNJbnRlcmZhY2UoY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sLCBpbnRlcmZhY2VSZWZUeXBlOiBJbnRlcmZhY2VSZWZUeXBlKTogdm9pZCB7XG5cdFx0Y29uc3QgaW50ZXJmYWNlU3ltYm9sID0gaW50ZXJmYWNlUmVmVHlwZS5pbnRlcmZhY2VTeW1ib2w7XG5cblx0XHRjb25zdCBzdWJzdGl0dXRpb25NYXAgPSBidWlsZFR5cGVTdWJzdGl0dXRpb25NYXAoXG5cdFx0XHRpbnRlcmZhY2VTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMsXG5cdFx0XHRpbnRlcmZhY2VSZWZUeXBlLnR5cGVBcmd1bWVudHNcblx0XHQpO1xuXG5cdFx0Zm9yIChjb25zdCBpbnRlcmZhY2VNZXRob2RTeW1ib2wgb2YgaW50ZXJmYWNlU3ltYm9sLmluc3RhbmNlTWV0aG9kU3ltYm9scy52YWx1ZXMoKSkge1xuXHRcdFx0Y29uc3QgY2xhc3NNZXRob2RTeW1ib2wgPSB0aGlzLnJlc29sdmVJbnN0YW5jZU1ldGhvZGUoXG5cdFx0XHRcdGNsYXNzU3ltYm9sLFxuXHRcdFx0XHRpbnRlcmZhY2VNZXRob2RTeW1ib2wubmFtZVxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKCFjbGFzc01ldGhvZFN5bWJvbCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihcblx0XHRcdFx0XHRgQ2xhc3MgJHtjbGFzc1N5bWJvbC5uYW1lfSBkb2VzIG5vdCBpbXBsZW1lbnQgbWV0aG9kICR7aW50ZXJmYWNlTWV0aG9kU3ltYm9sLm5hbWV9IGZyb20gaW50ZXJmYWNlICR7aW50ZXJmYWNlU3ltYm9sLm5hbWV9YCxcblx0XHRcdFx0XHRjbGFzc1N5bWJvbC5ub2RlXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuY2hlY2tNZXRob2RDb21wYXRpYmlsaXR5KFxuXHRcdFx0XHRjbGFzc01ldGhvZFN5bWJvbCxcblx0XHRcdFx0aW50ZXJmYWNlTWV0aG9kU3ltYm9sLFxuXHRcdFx0XHRzdWJzdGl0dXRpb25NYXBcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja01ldGhvZENvbXBhdGliaWxpdHkoY2xhc3NNZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCwgaW50ZXJmYWNlTWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wsIHN1YnN0aXR1dGlvbk1hcDogTWFwPHN0cmluZywgVHlwZT4pOiB2b2lkIHtcblx0XHRpZiAoY2xhc3NNZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9scy5sZW5ndGggIT09IGludGVyZmFjZU1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYE1ldGhvZCAke2NsYXNzTWV0aG9kU3ltYm9sLm5hbWV9IGhhcyB3cm9uZyBwYXJhbWV0ZXIgY291bnRgKTtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGludGVyZmFjZU1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBwYXJhbWV0ZXJTeW1ib2w6IFBhcmFtZXRlclN5bWJvbCB8IG51bGwgPSBpbnRlcmZhY2VNZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9sc1tpXSB8fCBudWxsO1xuXG5cdFx0XHRpZiAoIXBhcmFtZXRlclN5bWJvbCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgTWV0aG9kICR7Y2xhc3NNZXRob2RTeW1ib2wubmFtZX0gaGFzIHRvbyBtYW55IHBhcmFtZXRlcnNgKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGV4cGVjdGVkVHlwZTogVHlwZSA9IHN1YnN0aXR1dGVUeXBlKHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlLCBzdWJzdGl0dXRpb25NYXApO1xuXG5cdFx0XHRjb25zdCBhY3R1YWxUeXBlOiBUeXBlID0gcGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGU7XG5cblx0XHRcdGlmICghZXhwZWN0ZWRUeXBlLmFjY2VwdHMoYWN0dWFsVHlwZSkpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYFBhcmFtZXRlciAke2kgKyAxfSBvZiAke2NsYXNzTWV0aG9kU3ltYm9sLm5hbWV9IGluY29tcGF0aWJsZSB3aXRoIGludGVyZmFjZWApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IGV4cGVjdGVkUmV0dXJuOiBUeXBlID0gc3Vic3RpdHV0ZVR5cGUoaW50ZXJmYWNlTWV0aG9kU3ltYm9sLnJldHVyblR5cGUsIHN1YnN0aXR1dGlvbk1hcCk7XG5cblx0XHRpZiAoIWV4cGVjdGVkUmV0dXJuLmFjY2VwdHMoY2xhc3NNZXRob2RTeW1ib2wucmV0dXJuVHlwZSkpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBSZXR1cm4gdHlwZSBvZiAke2NsYXNzTWV0aG9kU3ltYm9sLm5hbWV9IGluY29tcGF0aWJsZSB3aXRoIGludGVyZmFjZWApO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tTdGF0ZW1lbnQobm9kZTogQVNUTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFN0YXRlbWVudFJlc3VsdCB7XG5cdFx0c3dpdGNoIChub2RlLnR5cGUpIHtcblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuUkVUVVJOOlxuXHRcdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVFJldHVybk5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gU3RhdGVtZW50UmVzdWx0LndpdGhSZXR1cm4oXG5cdFx0XHRcdFx0XHR0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLmFyZ3VtZW50LCBzY29wZSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5WQVJJQUJMRTpcblx0XHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RWYXJpYWJsZU5vZGUpIHtcblx0XHRcdFx0XHR0aGlzLmNoZWNrVmFyaWFibGUobm9kZSwgc2NvcGUpO1xuXHRcdFx0XHRcdHJldHVybiBTdGF0ZW1lbnRSZXN1bHQubm9SZXR1cm4oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuRk9SRUFDSDpcblx0XHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RGb3JlYWNoTm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiBTdGF0ZW1lbnRSZXN1bHQud2l0aFJldHVybihcblx0XHRcdFx0XHRcdHRoaXMuY2hlY2tGb3JlYWNoKG5vZGUsIHNjb3BlKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkVYUFJFU1NJT046XG5cdFx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNURXhwcmVzc2lvbk5vZGUpIHtcblx0XHRcdFx0XHR0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLmV4cHIsIHNjb3BlKTtcblx0XHRcdFx0XHRyZXR1cm4gU3RhdGVtZW50UmVzdWx0Lm5vUmV0dXJuKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFN0YXRlbWVudFJlc3VsdC5ub1JldHVybigpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1ZhcmlhYmxlKG5vZGU6IEFTVFZhcmlhYmxlTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IHZvaWQge1xuXHRcdGNvbnN0IGRlY2xhcmVkVHlwZTogVHlwZSB8IG51bGwgPSBub2RlLnR5cGVBbm5vdGF0aW9uXG5cdFx0XHQ/IHRoaXMud3JhcFR5cGUobm9kZS50eXBlQW5ub3RhdGlvbiwgc2NvcGUpXG5cdFx0XHQ6IG51bGw7XG5cblx0XHRjb25zdCBhY3R1YWxUeXBlOiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5pbml0LCBzY29wZSwgZGVjbGFyZWRUeXBlKTtcblxuXHRcdGlmIChkZWNsYXJlZFR5cGUgJiYgIWRlY2xhcmVkVHlwZS5hY2NlcHRzKGFjdHVhbFR5cGUpKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgVHlwZSBtaXNtYXRjaDogJHtkZWNsYXJlZFR5cGV9IDw+ICR7YWN0dWFsVHlwZX1gLCBub2RlKTtcblx0XHR9XG5cblx0XHRzY29wZS5kZWZpbmVUeXBlKG5vZGUubmFtZSwgZGVjbGFyZWRUeXBlID8/IGFjdHVhbFR5cGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0ZvcmVhY2gobm9kZTogQVNURm9yZWFjaE5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRsZXQgaXRlcmFibGVUeXBlOiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5pdGVyYWJsZSwgc2NvcGUpO1xuXG5cdFx0aXRlcmFibGVUeXBlID0gQXV0b2JveGluZy5hdXRvYm94SWZOZWVkZWQoaXRlcmFibGVUeXBlLCB0aGlzLm9iamVjdFJlZ2lzdHJ5KTtcblxuXHRcdGlmIChpdGVyYWJsZVR5cGUgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUgJiYgaXRlcmFibGVUeXBlLmNsYXNzU3ltYm9sLm5hbWUgPT09ICdBcnJheScpIHtcblx0XHRcdGlmIChpdGVyYWJsZVR5cGUudHlwZUFyZ3VtZW50cy5sZW5ndGggIT09IDEpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoJ0FycmF5IGluIGZvcmVhY2ggbXVzc3QgaGF2ZSBleGFjdGx5IG9uZSB0eXBlIGFyZ3VtZW50LicsIG5vZGUuaXRlcmFibGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBlbGVtZW50VHlwZTogVHlwZSB8IG51bGwgPSBpdGVyYWJsZVR5cGUudHlwZUFyZ3VtZW50c1swXSB8fCBudWxsO1xuXG5cdFx0XHRpZiAoZWxlbWVudFR5cGUgPT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoJ0FycmF5IGluIGZvcmVhY2ggbXVzdCBoYXZlIGV4YWN0bHkgb25lIHR5cGUgYXJndW1lbnQuJywgbm9kZS5pdGVyYWJsZSk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGxvb3BTY29wZSA9IG5ldyBUeXBlU2NvcGUoc2NvcGUpO1xuXHRcdFx0bG9vcFNjb3BlLmRlZmluZVR5cGUobm9kZS5pdGVyYXRvciwgZWxlbWVudFR5cGUpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy5jaGVja0JvZHkobm9kZS5ib2R5LCBsb29wU2NvcGUpO1xuXG5cdFx0fVxuXG5cdFx0dGhpcy50eXBlRXJyb3IoYGZvcmVhY2ggZXhwZWN0cyBBcnJheTxUPiwgZ290ICR7aXRlcmFibGVUeXBlLnRvU3RyaW5nKCl9YCwgbm9kZS5pdGVyYWJsZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrRXhwcmVzc2lvbihleHByOiBBU1ROb2RlIHwgbnVsbCwgc2NvcGU6IFR5cGVTY29wZSwgZXhwZWN0ZWRUeXBlOiBUeXBlIHwgbnVsbCA9IG51bGwpOiBUeXBlIHtcblx0XHRpZiAoZXhwciA9PT0gbnVsbCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoJ0V4cHJlc3Npb24gZXhwZWN0ZWQsIGdvdCBudWxsLicsIGV4cHIpO1xuXHRcdH1cblxuXHRcdHN3aXRjaCAoZXhwci50eXBlKSB7XG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLk5VTUJFUjpcblx0XHRcdFx0cmV0dXJuIFR5cGVzLk5VTUJFUjtcblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5TVFJJTkc6XG5cdFx0XHRcdHJldHVybiBUeXBlcy5TVFJJTkc7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuQk9PTEVBTjpcblx0XHRcdFx0cmV0dXJuIFR5cGVzLkJPT0xFQU47XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuTlVMTDpcblx0XHRcdFx0cmV0dXJuIFR5cGVzLk5VTEw7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuVkRPTToge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVFZEb21Ob2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tWRG9tTm9kZShleHByKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5BUlJBWToge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVEFycmF5Tm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrQXJyYXlFeHByZXNzaW9uKGV4cHIsIHNjb3BlLCBleHBlY3RlZFR5cGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLklOREVYOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUSW5kZXhOb2RlKSB7XG5cdFx0XHRcdFx0Y29uc3Qgb2JqZWN0VHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKGV4cHIub2JqZWN0LCBzY29wZSk7XG5cdFx0XHRcdFx0Y29uc3QgaW5kZXggPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihleHByLmluZGV4LCBzY29wZSk7XG5cblx0XHRcdFx0XHRpZiAob2JqZWN0VHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG9iamVjdFR5cGUudHlwZUFyZ3VtZW50c1swXSB8fCBUeXBlcy5NSVhFRDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGluZGV4ICR7b2JqZWN0VHlwZS5uYW1lfSB3aXRoICR7aW5kZXgubmFtZX1gLCBleHByKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5VTkFSWToge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVFVuYXJ5Tm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrVW5hcnlFeHByZXNzaW9uKGV4cHIsIHNjb3BlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5NRU1CRVI6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RNZW1iZXJOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tNZW1iZXJFeHByZXNzaW9uKGV4cHIsIHNjb3BlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5USElTOiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrVGhpc0V4cHJlc3Npb24oZXhwciwgc2NvcGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLklERU5USUZJRVI6XG5cdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrSWRlbnRpZmllckV4cHJlc3Npb24oZXhwciwgc2NvcGUpO1xuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLk5FVzoge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVE5ld05vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja05ld0V4cHJlc3Npb24oZXhwciwgc2NvcGUsIGV4cGVjdGVkVHlwZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuQklOQVJZOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQmluYXJ5Tm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrQmluYXJ5RXhwcmVzc2lvbihleHByLCBzY29wZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuTEFNQkRBOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTGFtYmRhTm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrTGFtYmRhRXhwcmVzc2lvbihleHByLCBzY29wZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuQ0FMTDoge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVENhbGxOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tDYWxsRXhwcmVzc2lvbihleHByLCBzY29wZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFR5cGVzLk1JWEVEO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0JpbmFyeUV4cHJlc3Npb24oZXhwcjogQVNUQmluYXJ5Tm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGNvbnN0IGxlZnQ6IFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihleHByLmxlZnQsIHNjb3BlKTtcblx0XHRjb25zdCByaWdodDogVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKGV4cHIucmlnaHQsIHNjb3BlKTtcblx0XHRjb25zdCBvcDogc3RyaW5nID0gZXhwci5vcGVyYXRvcjtcblxuXHRcdGlmIChHUkFNTUFSLkFSSVRITUVUSUMuaW5jbHVkZXMob3ApKSB7XG5cdFx0XHRpZiAobGVmdC5hY2NlcHRzKFR5cGVzLk5VTUJFUikgJiYgcmlnaHQuYWNjZXB0cyhUeXBlcy5OVU1CRVIpKSB7XG5cdFx0XHRcdHJldHVybiBUeXBlcy5OVU1CRVI7XG5cdFx0XHR9XG5cdFx0XHRpZiAobGVmdC5hY2NlcHRzKFR5cGVzLlNUUklORykgfHwgcmlnaHQuYWNjZXB0cyhUeXBlcy5TVFJJTkcpKSB7XG5cdFx0XHRcdHJldHVybiBUeXBlcy5TVFJJTkc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQXJpdGhtZXRpYyBvcGVyYXRvciAnJHtvcH0nIHJlcXVpcmVzIG51bWJlcnNgLCBleHByKTtcblx0XHR9XG5cblx0XHRpZiAoR1JBTU1BUi5DT01QQVJJU09OLmluY2x1ZGVzKG9wKSkge1xuXHRcdFx0aWYgKGxlZnQuYWNjZXB0cyhUeXBlcy5OVU1CRVIpICYmIHJpZ2h0LmFjY2VwdHMoVHlwZXMuTlVNQkVSKSkge1xuXHRcdFx0XHRyZXR1cm4gVHlwZXMuQk9PTEVBTjtcblx0XHRcdH1cblx0XHRcdHRoaXMudHlwZUVycm9yKGBDb21wYXJpc29uICcke29wfScgcmVxdWlyZXMgbnVtYmVyc2AsIGV4cHIpO1xuXHRcdH1cblxuXHRcdGlmIChHUkFNTUFSLkVRVUFMSVRZLmluY2x1ZGVzKG9wKSkge1xuXHRcdFx0aWYgKGxlZnQuYWNjZXB0cyhyaWdodCkpIHtcblx0XHRcdFx0cmV0dXJuIFR5cGVzLkJPT0xFQU47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNvbXBhcmUgJHtsZWZ0Lm5hbWV9IHdpdGggJHtyaWdodC5uYW1lfWAsIGV4cHIpO1xuXHRcdH1cblxuXHRcdGlmIChHUkFNTUFSLkxPR0lDQUwuaW5jbHVkZXMob3ApKSB7XG5cdFx0XHRpZiAobGVmdC5hY2NlcHRzKFR5cGVzLkJPT0xFQU4pICYmIHJpZ2h0LmFjY2VwdHMoVHlwZXMuQk9PTEVBTikpIHtcblx0XHRcdFx0cmV0dXJuIFR5cGVzLkJPT0xFQU47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgTG9naWNhbCBvcGVyYXRvciAnJHtvcH0nIHJlcXVpcmVzIGJvb2xlYW5zYCwgZXhwcik7XG5cdFx0fVxuXG5cdFx0dGhpcy50eXBlRXJyb3IoYEludmFsaWQgYmluYXJ5IG9wZXJhdGlvbmAsIGV4cHIpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0ZpZWxkQWNjZXNzKG5vZGU6IEFTVE1lbWJlck5vZGUsIGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCwgZmllbGRTeW1ib2w6IEZpZWxkU3ltYm9sLCBzY29wZTogVHlwZVNjb3BlKTogdm9pZCB7XG5cdFx0aWYgKGZpZWxkU3ltYm9sLmlzUHVibGljKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCFzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGFjY2VzcyBwcml2YXRlIG1lbWJlciAke25vZGUucHJvcGVydHl9IG9mICR7Y2xhc3NTeW1ib2wubmFtZX1gLCBub2RlKTtcblx0XHR9XG5cblx0XHRpZiAoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCAhPT0gZmllbGRTeW1ib2wub3duZXIpIHtcblx0XHRcdGlmIChzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sIGluc3RhbmNlb2YgQ2xhc3NTeW1ib2xcblx0XHRcdFx0JiYgc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbC5zdXBlckNsYXNzU3ltYm9sICE9PSBmaWVsZFN5bWJvbC5vd25lcikge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGFjY2VzcyBwcml2YXRlIG1lbWJlciAke25vZGUucHJvcGVydHl9IG9mICR7Y2xhc3NTeW1ib2wubmFtZX1gLCBub2RlKTtcblxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tJbnN0YW5jZU1ldGhvZEFjY2Vzcyhub2RlOiBBU1RNZW1iZXJOb2RlLCBjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wsIG1ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sLCBzY29wZTogVHlwZVNjb3BlKTogdm9pZCB7XG5cdFx0aWYgKG1ldGhvZFN5bWJvbC5pc1B1YmxpYykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICghc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBhY2Nlc3MgcHJpdmF0ZSBtZXRob2QgJHtub2RlLnByb3BlcnR5fSBvZiAke2NsYXNzU3ltYm9sLm5hbWV9YCwgbm9kZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgIT09IG1ldGhvZFN5bWJvbC5vd25lcikge1xuXHRcdFx0aWYgKHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgaW5zdGFuY2VvZiBDbGFzc1N5bWJvbFxuXHRcdFx0XHQmJiBzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sLnN1cGVyQ2xhc3NTeW1ib2wgIT09IG1ldGhvZFN5bWJvbC5vd25lcikge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGFjY2VzcyBwcml2YXRlIG1ldGhvZCAke25vZGUucHJvcGVydHl9IG9mICR7Y2xhc3NTeW1ib2wubmFtZX1gLCBub2RlKTtcblxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tTdGF0aWNNZXRob2RBY2Nlc3MoY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sLCBtZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCwgc2NvcGU6IFR5cGVTY29wZSk6IHZvaWQge1xuXHRcdGlmICghbWV0aG9kU3ltYm9sLmlzU3RhdGljKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNhbGwgaW5zdGFuY2UgbWV0aG9kICR7Y2xhc3NTeW1ib2wubmFtZX0uJHttZXRob2RTeW1ib2wubmFtZX0gYXMgc3RhdGljIG1ldGhvZGApO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChtZXRob2RTeW1ib2wuaXNQdWJsaWMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIXNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgYWNjZXNzIHByaXZhdGUgbWV0aG9kICR7bWV0aG9kU3ltYm9sLm5hbWV9IG9mICR7Y2xhc3NTeW1ib2wubmFtZX1gLFxuXHRcdFx0ICAgICAgICAgICAgICAgbWV0aG9kU3ltYm9sLm5vZGUpO1xuXHRcdH1cblxuXHRcdGlmIChzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sICE9PSBtZXRob2RTeW1ib2wub3duZXIpIHtcblx0XHRcdGlmIChzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sIGluc3RhbmNlb2YgQ2xhc3NTeW1ib2xcblx0XHRcdFx0JiYgc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbC5zdXBlckNsYXNzU3ltYm9sICE9PSBtZXRob2RTeW1ib2wub3duZXIpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBhY2Nlc3MgcHJpdmF0ZSBtZXRob2QgJHttZXRob2RTeW1ib2wubmFtZX0gb2YgJHtjbGFzc1N5bWJvbC5uYW1lfWAsXG5cdFx0XHRcdCAgICAgICAgICAgICAgIG1ldGhvZFN5bWJvbC5ub2RlKTtcblxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tNZW1iZXJFeHByZXNzaW9uKG5vZGU6IEFTVE1lbWJlck5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRjb25zdCBvYmplY3RUeXBlOiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5vYmplY3QsIHNjb3BlKTtcblxuXHRcdGlmIChvYmplY3RUeXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0XHRjb25zdCBjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wgPSBvYmplY3RUeXBlLmNsYXNzU3ltYm9sO1xuXG5cdFx0XHRjb25zdCBpbnN0YW5jZUZpZWxkU3ltYm9sOiBGaWVsZFN5bWJvbCB8IG51bGwgPSBjbGFzc1N5bWJvbC5yZXNvbHZlSW5zdGFuY2VGaWVsZFN5bWJvbChub2RlLnByb3BlcnR5KTtcblx0XHRcdGlmIChpbnN0YW5jZUZpZWxkU3ltYm9sKSB7XG5cdFx0XHRcdHRoaXMuY2hlY2tGaWVsZEFjY2Vzcyhub2RlLCBjbGFzc1N5bWJvbCwgaW5zdGFuY2VGaWVsZFN5bWJvbCwgc2NvcGUpO1xuXHRcdFx0XHRyZXR1cm4gaW5zdGFuY2VGaWVsZFN5bWJvbC5maWVsZFR5cGU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHN0YXRpY0ZpZWxkU3ltYm9sOiBGaWVsZFN5bWJvbCB8IG51bGwgPSBjbGFzc1N5bWJvbC5yZXNvbHZlU3RhdGljRmllbGRTeW1ib2wobm9kZS5wcm9wZXJ0eSk7XG5cdFx0XHRpZiAoc3RhdGljRmllbGRTeW1ib2wpIHtcblx0XHRcdFx0dGhpcy5jaGVja0ZpZWxkQWNjZXNzKG5vZGUsIGNsYXNzU3ltYm9sLCBzdGF0aWNGaWVsZFN5bWJvbCwgc2NvcGUpO1xuXHRcdFx0XHRyZXR1cm4gc3RhdGljRmllbGRTeW1ib2wuZmllbGRUeXBlO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgVW5rbm93biBtZW1iZXIgJHtub2RlLnByb3BlcnR5fWAsIG5vZGUpO1xuXHRcdH1cblxuXHRcdHRoaXMudHlwZUVycm9yKFwiQ2Fubm90IGFjY2VzcyBtZW1iZXIgb2Ygbm9uLW9iamVjdFwiLCBub2RlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tUaGlzRXhwcmVzc2lvbihub2RlOiBBU1ROb2RlLCBzY29wZTogVHlwZVNjb3BlKTogQ2xhc3NSZWZUeXBlIHtcblx0XHRpZiAoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCBpbnN0YW5jZW9mIENsYXNzU3ltYm9sKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENsYXNzUmVmVHlwZShzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sKTtcblx0XHR9XG5cdFx0dGhpcy50eXBlRXJyb3IoJ3RoaXMgb3V0c2lkZSBvZiBjbGFzcycsIG5vZGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0lkZW50aWZpZXJFeHByZXNzaW9uKG5vZGU6IEFTVE5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRpZiAoc2NvcGUuaGFzVHlwZShub2RlLm5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gc2NvcGUuZ2V0VHlwZShub2RlLm5hbWUpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5oYXNTeW1ib2wobm9kZS5uYW1lKSkge1xuXHRcdFx0cmV0dXJuIG5ldyBDbGFzc1JlZlR5cGUodGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChub2RlLm5hbWUpKTtcblx0XHR9XG5cdFx0dGhpcy50eXBlRXJyb3IoYFVuZGVmaW5lZCBpZGVudGlmaWVyICR7bm9kZS5uYW1lfWAsIG5vZGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja05ld0V4cHJlc3Npb24obm9kZTogQVNUTmV3Tm9kZSwgc2NvcGU6IFR5cGVTY29wZSwgZXhwZWN0ZWRUeXBlOiBUeXBlIHwgbnVsbCA9IG51bGwpOiBDbGFzc1JlZlR5cGUge1xuXHRcdGNvbnN0IGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCA9IHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2wobm9kZS5uYW1lKTtcblxuXHRcdGxldCBpbnN0YW5jZVR5cGU7XG5cdFx0aWYgKG5vZGUudHlwZUFubm90YXRpb24udHlwZUFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCB0eXBlQXJndW1lbnRzID0gbm9kZVxuXHRcdFx0XHQudHlwZUFubm90YXRpb25cblx0XHRcdFx0LnR5cGVBcmd1bWVudHNcblx0XHRcdFx0Lm1hcCh0eXBlQXJndW1lbnQgPT4gdGhpcy53cmFwVHlwZSh0eXBlQXJndW1lbnQsIHNjb3BlKSk7XG5cblx0XHRcdGlmICh0eXBlQXJndW1lbnRzLmxlbmd0aCAhPT0gY2xhc3NTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMubGVuZ3RoKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBXcm9uZyBudW1iZXIgb2YgdHlwZSBhcmd1bWVudHNgLCBub2RlKTtcblx0XHRcdH1cblxuXHRcdFx0aW5zdGFuY2VUeXBlID0gbmV3IENsYXNzUmVmVHlwZShjbGFzc1N5bWJvbCwgdHlwZUFyZ3VtZW50cyk7XG5cdFx0fSBlbHNlIGlmIChleHBlY3RlZFR5cGUgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUpIHtcblx0XHRcdGluc3RhbmNlVHlwZSA9IGV4cGVjdGVkVHlwZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aW5zdGFuY2VUeXBlID0gbmV3IENsYXNzUmVmVHlwZShcblx0XHRcdFx0Y2xhc3NTeW1ib2wsXG5cdFx0XHRcdGNsYXNzU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLm1hcCgoKSA9PiBUeXBlcy5NSVhFRClcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYgKGNsYXNzU3ltYm9sLmNvbnN0cnVjdG9yTWV0aG9kU3ltYm9sKSB7XG5cdFx0XHR0aGlzLmNoZWNrQ2FsbEFyZ3VtZW50cyhjbGFzc1N5bWJvbC5jb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbCwgbm9kZS5hcmd1bWVudHMsIHNjb3BlKTtcblx0XHR9XG5cblx0XHRpZiAoZXhwZWN0ZWRUeXBlICYmICFleHBlY3RlZFR5cGUuYWNjZXB0cyhpbnN0YW5jZVR5cGUpKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgVHlwZSBtaXNtYXRjaDogJHtleHBlY3RlZFR5cGV9IDw+ICR7aW5zdGFuY2VUeXBlfWAsIG5vZGUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBpbnN0YW5jZVR5cGU7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQXJyYXlFeHByZXNzaW9uKG5vZGU6IEFTVEFycmF5Tm9kZSwgc2NvcGU6IFR5cGVTY29wZSwgZXhwZWN0ZWRUeXBlOiBUeXBlIHwgbnVsbCA9IG51bGwpOiBDbGFzc1JlZlR5cGUge1xuXG5cdFx0aWYgKG5vZGUuZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRpZiAoZXhwZWN0ZWRUeXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0XHRcdGV4cGVjdGVkVHlwZSA9IGV4cGVjdGVkVHlwZS50eXBlQXJndW1lbnRzWzBdIHx8IG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzLm5ld0FycmF5VHlwZU9mKGV4cGVjdGVkVHlwZSB8fCBUeXBlcy5NSVhFRCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY2xhc3NSZWZOYW1lID0gUHJpbWl0aXZlQ2xhc3NUeXBlcy5nZXRDbGFzc1JlZk5hbWUoUHJpbWl0aXZlQ2xhc3NUeXBlcy5BUlJBWSk7XG5cblx0XHRsZXQgZXhwZWN0ZWRUeXBlT2ZJdGVtOiBUeXBlO1xuXHRcdGlmIChleHBlY3RlZFR5cGUgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUgJiYgZXhwZWN0ZWRUeXBlLmNsYXNzU3ltYm9sLm5hbWUgPT09IGNsYXNzUmVmTmFtZSkge1xuXHRcdFx0ZXhwZWN0ZWRUeXBlT2ZJdGVtID0gZXhwZWN0ZWRUeXBlLnR5cGVBcmd1bWVudHNbMF0gfHwgVHlwZXMuTUlYRUQ7XG5cdFx0fSBlbHNlIGlmIChub2RlLmVsZW1lbnRzWzBdKSB7XG5cdFx0XHRleHBlY3RlZFR5cGVPZkl0ZW0gPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLmVsZW1lbnRzWzBdLCBzY29wZSwgZXhwZWN0ZWRUeXBlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoJ0FycmF5IGV4cHJlc3Npb24gbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBlbGVtZW50Jywgbm9kZSk7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBpdGVtIG9mIG5vZGUuZWxlbWVudHMpIHtcblx0XHRcdGNvbnN0IGFjdHVhbFR5cGVPZkl0ZW06IFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihpdGVtLCBzY29wZSwgZXhwZWN0ZWRUeXBlT2ZJdGVtKTtcblx0XHRcdGlmICghZXhwZWN0ZWRUeXBlT2ZJdGVtLmFjY2VwdHMoYWN0dWFsVHlwZU9mSXRlbSkpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoXG5cdFx0XHRcdFx0YEFycmF5IGVsZW1lbnRzIG11c3QgaGF2ZSBzYW1lIHR5cGUsIGdvdCAke2V4cGVjdGVkVHlwZU9mSXRlbX0gYW5kICR7YWN0dWFsVHlwZU9mSXRlbX1gLFxuXHRcdFx0XHRcdG5vZGVcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5uZXdBcnJheVR5cGVPZihleHBlY3RlZFR5cGVPZkl0ZW0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1VuYXJ5RXhwcmVzc2lvbihub2RlOiBBU1RVbmFyeU5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRjb25zdCBvcGVyYW5kID0gdGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5hcmd1bWVudCwgc2NvcGUpO1xuXHRcdGNvbnN0IG9wID0gbm9kZS5vcGVyYXRvcjtcblx0XHRpZiAob3AgPT09IEdSQU1NQVIuRVhDTEFNQVRJT05fTUFSSykge1xuXHRcdFx0aWYgKG9wZXJhbmQuZXF1YWxzKFR5cGVzLkJPT0xFQU4pKSB7XG5cdFx0XHRcdHJldHVybiBUeXBlcy5CT09MRUFOO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFVuYXJ5ICchJyByZXF1aXJlcyBib29sZWFuLCBnb3QgJHtvcGVyYW5kLm5hbWV9YCwgbm9kZSk7XG5cdFx0fVxuXHRcdHRoaXMudHlwZUVycm9yKGBJbnZhbGlkIHVuYXJ5IG9wZXJhdG9yICR7b3B9YCwgbm9kZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrTGFtYmRhRXhwcmVzc2lvbihub2RlOiBBU1RMYW1iZGFOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogTGFtYmRhVHlwZSB7XG5cdFx0Y29uc3QgbGFtYmRhU2NvcGUgPSBuZXcgVHlwZVNjb3BlKHNjb3BlKTtcblx0XHRjb25zdCBwYXJhbWV0ZXJzID0gbm9kZS5wYXJhbWV0ZXJzLm1hcChwYXJhbWV0ZXJOb2RlID0+IHtcblx0XHRcdGNvbnN0IHBhcmFtZXRlclN5bWJvbDogUGFyYW1ldGVyU3ltYm9sID0gdGhpcy5wYXJhbWV0ZXJOb2RlVG9TeW1ib2wocGFyYW1ldGVyTm9kZSk7XG5cblx0XHRcdGxhbWJkYVNjb3BlLmRlZmluZVR5cGUocGFyYW1ldGVyTm9kZS5uYW1lLCBwYXJhbWV0ZXJTeW1ib2wucGFyYW1ldGVyVHlwZSk7XG5cblx0XHRcdHJldHVybiBwYXJhbWV0ZXJTeW1ib2w7XG5cdFx0fSk7XG5cblx0XHRpZiAobm9kZS5jaGlsZHJlblswXSkge1xuXHRcdFx0cmV0dXJuIG5ldyBMYW1iZGFUeXBlKHBhcmFtZXRlcnMsIHRoaXMuY2hlY2tFeHByZXNzaW9uKG5vZGUuY2hpbGRyZW5bMF0sIGxhbWJkYVNjb3BlKSk7XG5cdFx0fVxuXG5cdFx0dGhpcy50eXBlRXJyb3IoJ0xhbWJkYSBleHByZXNzaW9uIG11c3QgaGF2ZSBhIHJldHVybiB0eXBlJywgbm9kZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQ2FsbEV4cHJlc3Npb24obm9kZTogQVNUQ2FsbE5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRjb25zdCBjYWxsZWUgPSBub2RlLmNhbGxlZTtcblxuXHRcdGlmIChjYWxsZWUudHlwZSA9PT0gQVNUTm9kZVR5cGUuSURFTlRJRklFUiAmJiBjYWxsZWUubmFtZSA9PT0gR1JBTU1BUi5TVVBFUikge1xuXHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tTdXBlckNvbnN0cnVjdG9yQ2FsbChub2RlLCBzY29wZSk7XG5cdFx0fVxuXG5cdFx0Ly8gQ2xhc3MubWV0aG9kKClcblx0XHRpZiAoY2FsbGVlIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZVxuXHRcdFx0JiYgY2FsbGVlLm9iamVjdC50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSXG5cdFx0XHQmJiB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmhhc1N5bWJvbChjYWxsZWUub2JqZWN0Lm5hbWUpXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jaGVja1N0YXRpY0NhbGwoXG5cdFx0XHRcdGNhbGxlZS5vYmplY3QubmFtZSxcblx0XHRcdFx0Y2FsbGVlLnByb3BlcnR5LFxuXHRcdFx0XHRub2RlLmFyZ3VtZW50cyxcblx0XHRcdFx0c2NvcGVcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gZXhwci5tZXRob2QoKVxuXHRcdGlmIChjYWxsZWUgaW5zdGFuY2VvZiBBU1RNZW1iZXJOb2RlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jaGVja0luc3RhbmNlQ2FsbChjYWxsZWUsIG5vZGUuYXJndW1lbnRzLCBzY29wZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGNhbGxlZSBpbnN0YW5jZW9mIEFTVExhbWJkYU5vZGUpIHtcblx0XHRcdHJldHVybiB0aGlzLmNoZWNrTGFtYmRhQ2FsbCh0aGlzLmNoZWNrTGFtYmRhRXhwcmVzc2lvbihjYWxsZWUsIHNjb3BlKSwgbm9kZS5hcmd1bWVudHMsIHNjb3BlKTtcblx0XHR9XG5cblx0XHQvLyBJZGVudGlmaWVyOiBWYXJpYWJsZSAvIExhbWJkYVxuXHRcdGlmIChjYWxsZWUudHlwZSA9PT0gQVNUTm9kZVR5cGUuSURFTlRJRklFUikge1xuXHRcdFx0aWYgKHNjb3BlLmhhc1R5cGUoY2FsbGVlLm5hbWUpKSB7XG5cdFx0XHRcdGNvbnN0IHR5cGUgPSBzY29wZS5nZXRUeXBlKGNhbGxlZS5uYW1lKTtcblx0XHRcdFx0aWYgKHR5cGUgaW5zdGFuY2VvZiBMYW1iZGFUeXBlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tMYW1iZGFDYWxsKHR5cGUsIG5vZGUuYXJndW1lbnRzLCBzY29wZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBjYWxsIG5vbi1mdW5jdGlvbiAke2NhbGxlZS5uYW1lfWAsIG5vZGUpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBGYWxsYmFjazogZ2xvYmFsZSBGdW5rdGlvblxuXHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tGdW5jdGlvbkNhbGwoY2FsbGVlLm5hbWUsIG5vZGUuYXJndW1lbnRzLCBzY29wZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFR5cGVzLk1JWEVEO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1N1cGVyQ29uc3RydWN0b3JDYWxsKG5vZGU6IEFTVENhbGxOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0Y29uc3QgY3VycmVudENsYXNzID0gc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbDtcblxuXHRcdGlmICghKGN1cnJlbnRDbGFzcyBpbnN0YW5jZW9mIENsYXNzU3ltYm9sKSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoJ3N1cGVyKCkgdXNlZCBvdXRzaWRlIG9mIGNsYXNzJywgbm9kZSk7XG5cdFx0fVxuXG5cdFx0aWYgKCFjdXJyZW50Q2xhc3Muc3VwZXJDbGFzcykge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoJ3N1cGVyKCkgdXNlZCBvdXRzaWRlIG9mIGNsYXNzIGhpZXJhcmNoeScsIG5vZGUpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHN1cGVyU3ltYm9sOiBDbGFzc1N5bWJvbCA9IHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2woY3VycmVudENsYXNzLnN1cGVyQ2xhc3MpO1xuXHRcdGlmICghc3VwZXJTeW1ib2wuY29uc3RydWN0b3JNZXRob2RTeW1ib2wpIHtcblx0XHRcdGlmIChub2RlLmFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKCdTdXBlciBjb25zdHJ1Y3RvciB0YWtlcyBubyBhcmd1bWVudHMnLCBub2RlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBUeXBlcy5WT0lEO1xuXHRcdH1cblxuXHRcdHRoaXMuY2hlY2tDYWxsQXJndW1lbnRzKHN1cGVyU3ltYm9sLmNvbnN0cnVjdG9yTWV0aG9kU3ltYm9sLCBub2RlLmFyZ3VtZW50cywgc2NvcGUpO1xuXG5cdFx0cmV0dXJuIFR5cGVzLlZPSUQ7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQ2FsbE9uTnVsbE9iamVjdFR5cGUob2JqZWN0VHlwZTogVHlwZSwgbm9kZTogQVNUTm9kZSk6IHZvaWQge1xuXHRcdGlmIChvYmplY3RUeXBlLmVxdWFscyhUeXBlcy5OVUxMKSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBjYWxsIG1ldGhvZCBvbiBudWxsYCwgbm9kZSk7XG5cdFx0fVxuXHRcdGlmIChvYmplY3RUeXBlIGluc3RhbmNlb2YgTnVsbGFibGVUeXBlKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNhbGwgbWV0aG9kIG9uIG51bGxhYmxlIHR5cGUgJHtvYmplY3RUeXBlfWAsIG5vZGUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tJbnN0YW5jZUNhbGwoY2FsbGVlOiBBU1RNZW1iZXJOb2RlLCBjYWxsQXJndW1lbnRzOiBBU1ROb2RlW10sIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRsZXQgb2JqZWN0VHlwZTogVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKGNhbGxlZS5vYmplY3QsIHNjb3BlKTtcblxuXHRcdG9iamVjdFR5cGUgPSBBdXRvYm94aW5nLmF1dG9ib3hJZk5lZWRlZChvYmplY3RUeXBlLCB0aGlzLm9iamVjdFJlZ2lzdHJ5KTtcblxuXHRcdHRoaXMuY2hlY2tDYWxsT25OdWxsT2JqZWN0VHlwZShvYmplY3RUeXBlLCBjYWxsZWUpO1xuXG5cdFx0aWYgKG9iamVjdFR5cGUgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUpIHtcblx0XHRcdGNvbnN0IG1ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sID0gdGhpcy5yZXNvbHZlSW5zdGFuY2VNZXRob2RlKFxuXHRcdFx0XHRvYmplY3RUeXBlLmNsYXNzU3ltYm9sLFxuXHRcdFx0XHRjYWxsZWUucHJvcGVydHlcblx0XHRcdCk7XG5cblx0XHRcdGlmIChtZXRob2RTeW1ib2wuaXNTdGF0aWMpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBjYWxsIHN0YXRpYyBtZXRob2QgJHtjYWxsZWUucHJvcGVydHl9IG9uIGluc3RhbmNlIG9mICR7Y2FsbGVlLm9iamVjdC5uYW1lfWAsXG5cdFx0XHRcdCAgICAgICAgICAgICAgIGNhbGxlZSk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuY2hlY2tJbnN0YW5jZU1ldGhvZEFjY2VzcyhjYWxsZWUsIG9iamVjdFR5cGUuY2xhc3NTeW1ib2wsIG1ldGhvZFN5bWJvbCwgc2NvcGUpO1xuXG5cdFx0XHRjb25zdCBvd25lcjogQ2xhc3NTeW1ib2wgfCBJbnRlcmZhY2VTeW1ib2wgfCBudWxsID0gbWV0aG9kU3ltYm9sLm93bmVyO1xuXG5cdFx0XHRpZiAob3duZXIgPT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBjYWxsIG1ldGhvZCBvbiBub24tb2JqZWN0YCwgY2FsbGVlKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc3Vic3RpdHV0aW9uTWFwOiBNYXA8c3RyaW5nLCBUeXBlPiA9IGJ1aWxkVHlwZVN1YnN0aXR1dGlvbk1hcChcblx0XHRcdFx0b3duZXIudHlwZVBhcmFtZXRlclN5bWJvbHMsXG5cdFx0XHRcdG9iamVjdFR5cGUudHlwZUFyZ3VtZW50c1xuXHRcdFx0KTtcblxuXHRcdFx0dGhpcy5jaGVja0NhbGxBcmd1bWVudHMobWV0aG9kU3ltYm9sLCBjYWxsQXJndW1lbnRzLCBzY29wZSwgc3Vic3RpdHV0aW9uTWFwKTtcblxuXHRcdFx0cmV0dXJuIHN1YnN0aXR1dGVUeXBlKG1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlLCBzdWJzdGl0dXRpb25NYXApO1xuXHRcdH1cblxuXHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgY2FsbCBtZXRob2Qgb24gbm9uLW9iamVjdGAsIGNhbGxlZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrU3RhdGljQ2FsbChjbGFzc05hbWU6IHN0cmluZywgbWV0aG9kTmFtZTogc3RyaW5nLCBjYWxsQXJndW1lbnRzOiBBU1ROb2RlW10sIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRjb25zdCBjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wgPSB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKGNsYXNzTmFtZSk7XG5cblx0XHRjb25zdCBtZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCB8IG51bGwgPSBjbGFzc1N5bWJvbC5zdGF0aWNNZXRob2RTeW1ib2xzLmdldChtZXRob2ROYW1lKSB8fCBudWxsO1xuXHRcdGlmICghbWV0aG9kU3ltYm9sKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgVW5rbm93biBzdGF0aWMgbWV0aG9kICR7Y2xhc3NOYW1lfS4ke21ldGhvZE5hbWV9YCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jaGVja1N0YXRpY01ldGhvZEFjY2VzcyhjbGFzc1N5bWJvbCwgbWV0aG9kU3ltYm9sLCBzY29wZSlcblxuXHRcdHRoaXMuY2hlY2tDYWxsQXJndW1lbnRzKG1ldGhvZFN5bWJvbCwgY2FsbEFyZ3VtZW50cywgc2NvcGUpO1xuXG5cdFx0cmV0dXJuIG1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0xhbWJkYUNhbGwobGFtYmRhOiBMYW1iZGFUeXBlLCBjYWxsQXJndW1lbnRzOiBBU1ROb2RlW10sIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblxuXHRcdHRoaXMuY2hlY2tDYWxsQXJndW1lbnRzKGxhbWJkYSwgY2FsbEFyZ3VtZW50cywgc2NvcGUpO1xuXG5cdFx0cmV0dXJuIGxhbWJkYS5yZXR1cm5UeXBlO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0Z1bmN0aW9uQ2FsbChuYW1lOiBzdHJpbmcsIGNhbGxBcmd1bWVudHM6IEFTVE5vZGVbXSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGlmICghZ2xvYmFsRnVuY3Rpb25UeXBlUmVnaXN0cnkuaGFzKG5hbWUpKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgVW5rbm93biBmdW5jdGlvbiAke25hbWV9YCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbmF0aXZlRnVuY3Rpb246IE5hdGl2ZUZ1bmN0aW9uID0gZ2xvYmFsRnVuY3Rpb25UeXBlUmVnaXN0cnkuZ2V0KG5hbWUpO1xuXG5cdFx0dGhpcy5jaGVja0NhbGxBcmd1bWVudHMobmF0aXZlRnVuY3Rpb24sIGNhbGxBcmd1bWVudHMsIHNjb3BlKTtcblxuXHRcdHJldHVybiBuYXRpdmVGdW5jdGlvbi5yZXR1cm5UeXBlXG5cdFx0XHQ/IHRoaXMud3JhcFR5cGUobmF0aXZlRnVuY3Rpb24ucmV0dXJuVHlwZSwgc2NvcGUpXG5cdFx0XHQ6IFR5cGVzLlZPSUQ7XG5cdH1cblxuXHRwcml2YXRlIHBhcmFtZXRlcnNTeW1ib2xzRnJvbUNhbGxhYmxlU3ltYm9sKGNhbGxhYmxlU3ltYm9sOiBNZXRob2RTeW1ib2wgfCBMYW1iZGFUeXBlIHwgTmF0aXZlRnVuY3Rpb24pOiBQYXJhbWV0ZXJTeW1ib2xbXSB7XG5cdFx0aWYgKGNhbGxhYmxlU3ltYm9sIGluc3RhbmNlb2YgTmF0aXZlRnVuY3Rpb24pIHtcblx0XHRcdHJldHVybiBjYWxsYWJsZVN5bWJvbFxuXHRcdFx0XHQucGFyYW1ldGVyTm9kZXNcblx0XHRcdFx0Lm1hcChwYXJhbWV0ZXJOb2RlID0+IHRoaXMucGFyYW1ldGVyTm9kZVRvU3ltYm9sKHBhcmFtZXRlck5vZGUpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY2FsbGFibGVTeW1ib2wucGFyYW1ldGVyU3ltYm9sc1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0NhbGxBcmd1bWVudHMoXG5cdFx0Y2FsbGFibGVTeW1ib2w6IE1ldGhvZFN5bWJvbCB8IExhbWJkYVR5cGUgfCBOYXRpdmVGdW5jdGlvbixcblx0XHRjYWxsQXJndW1lbnRzOiBBU1ROb2RlW10sXG5cdFx0c2NvcGU6IFR5cGVTY29wZSxcblx0XHRzdWJzdGl0dXRpb25NYXA6IE1hcDxzdHJpbmcsIFR5cGU+ID0gbmV3IE1hcCgpXG5cdCk6IHZvaWQge1xuXHRcdGNvbnN0IGNhbGxTY29wZSA9IG5ldyBUeXBlU2NvcGUoc2NvcGUpO1xuXHRcdGxldCBwYXJhbWV0ZXJTeW1ib2xzID0gdGhpcy5wYXJhbWV0ZXJzU3ltYm9sc0Zyb21DYWxsYWJsZVN5bWJvbChjYWxsYWJsZVN5bWJvbCk7XG5cblx0XHRpZiAoY2FsbEFyZ3VtZW50cy5sZW5ndGggPiBwYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoXCJBcmd1bWVudCBjb3VudCBtaXNtYXRjaFwiKTtcblx0XHR9XG5cblx0XHRsZXQgYWN0dWFsVHlwZTogVHlwZTtcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcGFyYW1ldGVyU3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgcGFyYW1ldGVyU3ltYm9sOiBQYXJhbWV0ZXJTeW1ib2wgfCBudWxsID0gcGFyYW1ldGVyU3ltYm9sc1tpXSB8fCBudWxsO1xuXHRcdFx0Y29uc3QgY2FsbEFyZ3VtZW50OiBBU1ROb2RlIHwgbnVsbCA9IGNhbGxBcmd1bWVudHNbaV0gfHwgbnVsbDtcblxuXHRcdFx0aWYgKHBhcmFtZXRlclN5bWJvbCkge1xuXHRcdFx0XHRjb25zdCBleHBlY3RlZFR5cGU6IFR5cGUgPSBzdWJzdGl0dXRlVHlwZShwYXJhbWV0ZXJTeW1ib2wucGFyYW1ldGVyVHlwZSwgc3Vic3RpdHV0aW9uTWFwKTtcblxuXHRcdFx0XHRpZiAoY2FsbEFyZ3VtZW50KSB7XG5cdFx0XHRcdFx0YWN0dWFsVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKGNhbGxBcmd1bWVudCwgY2FsbFNjb3BlLCBleHBlY3RlZFR5cGUpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHBhcmFtZXRlclN5bWJvbC5kZWZhdWx0VHlwZSkge1xuXHRcdFx0XHRcdGFjdHVhbFR5cGUgPSBwYXJhbWV0ZXJTeW1ib2wuZGVmYXVsdFR5cGU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYE1pc3NpbmcgYXJndW1lbnQgJHtwYXJhbWV0ZXJTeW1ib2wubmFtZX1gLCBjYWxsQXJndW1lbnQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5jaGVja0Fzc2lnbmFibGUoZXhwZWN0ZWRUeXBlLCBhY3R1YWxUeXBlLCBjYWxsQXJndW1lbnRzW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQXNzaWduYWJsZShleHBlY3RlZFR5cGU6IFR5cGUsIGFjdHVhbFR5cGU6IFR5cGUsIG5vZGU6IEFTVE5vZGUgfCBudWxsID0gbnVsbCk6IHZvaWQge1xuXHRcdGlmIChleHBlY3RlZFR5cGUuZXF1YWxzKGFjdHVhbFR5cGUpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGV4cGVjdGVkVHlwZSBpbnN0YW5jZW9mIE1peGVkVHlwZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChleHBlY3RlZFR5cGUgaW5zdGFuY2VvZiBOdWxsYWJsZVR5cGUpIHtcblx0XHRcdGlmIChhY3R1YWxUeXBlID09PSBUeXBlcy5OVUxMKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChleHBlY3RlZFR5cGUuaW5uZXIuYWNjZXB0cyhhY3R1YWxUeXBlKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGV4cGVjdGVkVHlwZS5hY2NlcHRzKGFjdHVhbFR5cGUpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy50eXBlRXJyb3IoYFR5cGUgbWlzbWF0Y2g6ICR7ZXhwZWN0ZWRUeXBlfSA8PiAke2FjdHVhbFR5cGV9YCwgbm9kZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQm9keShjaGlsZHJlbjogQVNUTm9kZVtdLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0bGV0IHJldHVyblR5cGU6IFR5cGUgPSBUeXBlcy5NSVhFRDtcblxuXHRcdGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcblx0XHRcdGNvbnN0IHN0YXRlbWVudFJlc3VsdCA9IHRoaXMuY2hlY2tTdGF0ZW1lbnQoY2hpbGQsIHNjb3BlKTtcblx0XHRcdGlmIChzdGF0ZW1lbnRSZXN1bHQuZGlkUmV0dXJuICYmIHN0YXRlbWVudFJlc3VsdC5yZXR1cm5UeXBlKSB7XG5cdFx0XHRcdHJldHVyblR5cGUgPSBzdGF0ZW1lbnRSZXN1bHQucmV0dXJuVHlwZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmV0dXJuVHlwZTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tSZXR1cm5UeXBlKGV4cGVjdGVkVHlwZTogVHlwZSwgYWN0dWFsVHlwZTogVHlwZSwgbm9kZTogQVNUTWV0aG9kTm9kZSk6IHZvaWQge1xuXHRcdC8vIHZvaWQtTWV0aG9kZVxuXHRcdGlmIChleHBlY3RlZFR5cGUgPT09IFR5cGVzLlZPSUQpIHtcblx0XHRcdGlmIChhY3R1YWxUeXBlICE9PSBUeXBlcy5NSVhFRCAmJiBhY3R1YWxUeXBlICE9PSBUeXBlcy5WT0lEKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgcmV0dXJuICR7YWN0dWFsVHlwZX0gZnJvbSB2b2lkIG1ldGhvZGAsIG5vZGUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIGtlaW4gcmV0dXJuIHZvcmhhbmRlblxuXHRcdGlmIChhY3R1YWxUeXBlID09PSBUeXBlcy5NSVhFRCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYE1pc3NpbmcgcmV0dXJuIHN0YXRlbWVudCAoZXhwZWN0ZWQgJHtleHBlY3RlZFR5cGV9KWAsIG5vZGUpO1xuXHRcdH1cblxuXHRcdC8vIHR5cC1pbmtvbXBhdGliZWxcblx0XHRpZiAoIWV4cGVjdGVkVHlwZS5hY2NlcHRzKGFjdHVhbFR5cGUpKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgUmV0dXJuIHR5cGUgbWlzbWF0Y2g6IGV4cGVjdGVkICR7ZXhwZWN0ZWRUeXBlfSwgZ290ICR7YWN0dWFsVHlwZX1gLCBub2RlKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrVkRvbU5vZGUobm9kZTogQVNUVkRvbU5vZGUpOiBUeXBlIHtcblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wgPSB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKG5vZGUudGFnKTtcblxuXHRcdFx0Y29uc3QgbWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wgPSB0aGlzLnJlc29sdmVJbnN0YW5jZU1ldGhvZGUoY2xhc3NTeW1ib2wsICdyZW5kZXInKTtcblxuXHRcdFx0aWYgKCFtZXRob2RTeW1ib2wpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENvbXBvbmVudCAnJHtub2RlLnRhZ30nIGhhcyBubyByZW5kZXIoKSBtZXRob2RgLCBub2RlKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5jaGVja0Fzc2lnbmFibGUobWV0aG9kU3ltYm9sLnJldHVyblR5cGUsIFR5cGVzLlZOT0RFLCBub2RlKTtcblxuXHRcdFx0cmV0dXJuIFR5cGVzLlZOT0RFO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHR9XG5cblx0XHRyZXR1cm4gVHlwZXMuVk5PREU7XG5cdH1cblxuXHRwcml2YXRlIHJlc29sdmVJbnN0YW5jZU1ldGhvZGUoY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sLCBtZXRob2ROYW1lOiBzdHJpbmcpOiBNZXRob2RTeW1ib2wge1xuXHRcdC8qKiBAdHlwZSB7TWV0aG9kU3ltYm9sfG51bGx9ICovXG5cdFx0Y29uc3QgbWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wgfCBudWxsID0gdGhpcy5yZXNvbHZlSW5IaWVyYXJjaHkoXG5cdFx0XHRjbGFzc1N5bWJvbCxcblx0XHRcdGNsYXNzU3ltYm9sID0+IGNsYXNzU3ltYm9sLmluc3RhbmNlTWV0aG9kU3ltYm9scy5nZXQobWV0aG9kTmFtZSkgfHwgbnVsbFxuXHRcdCk7XG5cblx0XHRpZiAoIW1ldGhvZFN5bWJvbCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFVua25vd24gbWV0aG9kICR7Y2xhc3NTeW1ib2wubmFtZX0uJHttZXRob2ROYW1lfWAsIGNsYXNzU3ltYm9sLm5vZGUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtZXRob2RTeW1ib2w7XG5cdH1cblxuXHRwcml2YXRlIHJlc29sdmVJbkhpZXJhcmNoeShjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wsIHJlc29sdmVyOiAoY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sKSA9PiBhbnkpOiBhbnkge1xuXHRcdGxldCBjdXJyZW50OiBDbGFzc1N5bWJvbCB8IG51bGwgPSBjbGFzc1N5bWJvbDtcblxuXHRcdHdoaWxlIChjdXJyZW50KSB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSByZXNvbHZlcihjdXJyZW50KTtcblx0XHRcdGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCAmJiByZXN1bHQgIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFjdXJyZW50LnN1cGVyQ2xhc3MpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdGN1cnJlbnQgPSB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKGN1cnJlbnQuc3VwZXJDbGFzcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRwcml2YXRlIG5ld0FycmF5VHlwZU9mKGVsZW1lbnRUeXBlOiBUeXBlKTogQ2xhc3NSZWZUeXBlIHtcblx0XHRjb25zdCBjbGFzc05hbWU6IHN0cmluZyB8IG51bGwgPSBQcmltaXRpdmVDbGFzc1R5cGVzLmdldENsYXNzUmVmTmFtZShQcmltaXRpdmVDbGFzc1R5cGVzLkFSUkFZKTtcblxuXHRcdGlmIChjbGFzc05hbWUgPT09IG51bGwpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKCdJbnRlcm5hbCBlcnJvcjogQ2Fubm90IGZpbmQgY2xhc3MgbmFtZSBmb3IgYXJyYXkgdHlwZS4nKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IENsYXNzUmVmVHlwZSh0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKGNsYXNzTmFtZSksIFtlbGVtZW50VHlwZV0pO1xuXHR9XG5cblx0cHJpdmF0ZSB3cmFwVHlwZSh0eXBlOiBBU1RUeXBlTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdHJldHVybiB3cmFwVHlwZSh0eXBlLCB0aGlzLm9iamVjdFJlZ2lzdHJ5LCBzY29wZSk7XG5cdH1cblxuXHRwcml2YXRlIHBhcmFtZXRlck5vZGVUb1N5bWJvbChwYXJhbWV0ZXJOb2RlOiBBU1RQYXJhbWV0ZXJOb2RlLCBzY29wZTogVHlwZVNjb3BlID0gbmV3IFR5cGVTY29wZSgpKTogUGFyYW1ldGVyU3ltYm9sIHtcblx0XHRjb25zdCBwYXJhbWV0ZXJUeXBlID0gcGFyYW1ldGVyTm9kZS50eXBlQW5ub3RhdGlvblxuXHRcdFx0PyB0aGlzLndyYXBUeXBlKHBhcmFtZXRlck5vZGUudHlwZUFubm90YXRpb24sIHNjb3BlKVxuXHRcdFx0OiBUeXBlcy5NSVhFRDtcblxuXHRcdGxldCBkZWZhdWx0VHlwZSA9IG51bGw7XG5cdFx0aWYgKHBhcmFtZXRlck5vZGUuZGVmYXVsdFZhbHVlKSB7XG5cdFx0XHRkZWZhdWx0VHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKHBhcmFtZXRlck5vZGUuZGVmYXVsdFZhbHVlLCBuZXcgVHlwZVNjb3BlKCkpO1xuXG5cdFx0XHRpZiAoZGVmYXVsdFR5cGVcblx0XHRcdFx0JiYgIXBhcmFtZXRlclR5cGUuZXF1YWxzKFR5cGVzLk1JWEVEKVxuXHRcdFx0XHQmJiAhcGFyYW1ldGVyVHlwZS5lcXVhbHMoZGVmYXVsdFR5cGUpKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKFxuXHRcdFx0XHRcdGBEZWZhdWx0IHZhbHVlIGZvciBwYXJhbWV0ZXIgJyR7cGFyYW1ldGVyTm9kZS5uYW1lfScgZG9lcyBub3QgbWF0Y2ggdHlwZS5gLFxuXHRcdFx0XHRcdHBhcmFtZXRlck5vZGVcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IFBhcmFtZXRlclN5bWJvbChcblx0XHRcdHBhcmFtZXRlck5vZGUubmFtZSxcblx0XHRcdHBhcmFtZXRlclR5cGUsXG5cdFx0XHRkZWZhdWx0VHlwZSxcblx0XHRcdHBhcmFtZXRlck5vZGVcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSByZWdpc3RlckNsYXNzU3ltYm9sKGNsYXNzTm9kZTogQVNUQ2xhc3NOb2RlKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKGNsYXNzTm9kZS5uYW1lKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNsYXNzU2NvcGUgPSBuZXcgVHlwZVNjb3BlKCk7XG5cdFx0Y29uc3QgY2xhc3NTeW1ib2wgPSBuZXcgQ2xhc3NTeW1ib2woY2xhc3NOb2RlKTtcblxuXHRcdHRyeSB7XG5cdFx0XHRpZiAoY2xhc3NTeW1ib2wuc3VwZXJDbGFzcykge1xuXHRcdFx0XHRjbGFzc1N5bWJvbC5zdXBlckNsYXNzU3ltYm9sID0gdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChjbGFzc1N5bWJvbC5zdXBlckNsYXNzKTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0fVxuXG5cdFx0dGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5hZGRDbGFzc1N5bWJvbChjbGFzc1N5bWJvbCk7XG5cblx0XHRjbGFzc05vZGUudHlwZVBhcmFtZXRlcnMuZm9yRWFjaChuYW1lID0+IHtcblx0XHRcdGNsYXNzU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLnB1c2gobmV3IFR5cGVQYXJhbWV0ZXJTeW1ib2wobmFtZSkpO1xuXHRcdFx0Y2xhc3NTY29wZS5kZWZpbmVUeXBlQmluZGluZyhuYW1lLCBuZXcgVHlwZVZhcmlhYmxlKG5hbWUpKTtcblx0XHR9KTtcblxuXHRcdGZvciAoY29uc3QgdHlwZU5vZGUgb2YgY2xhc3NOb2RlLmltcGxlbWVudHNJbnRlcmZhY2VzKSB7XG5cdFx0XHRjb25zdCBpbnRlcmZhY2VUeXBlOiBUeXBlID0gdGhpcy53cmFwVHlwZSh0eXBlTm9kZSwgY2xhc3NTY29wZSk7XG5cdFx0XHRpZiAoaW50ZXJmYWNlVHlwZSBpbnN0YW5jZW9mIEludGVyZmFjZVJlZlR5cGUpIHtcblx0XHRcdFx0Y2xhc3NTeW1ib2wuaW1wbGVtZW50c0ludGVyZmFjZXMucHVzaChpbnRlcmZhY2VUeXBlKTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgRXhwZWN0ZWQgaW50ZXJmYWNlIHR5cGUsIGdvdCAke2ludGVyZmFjZVR5cGV9YCwgdHlwZU5vZGUpO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgbWVtYmVyTm9kZSBvZiBjbGFzc05vZGUuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChtZW1iZXJOb2RlLnR5cGUgPT09IEFTVE5vZGVUeXBlLkZJRUxEICYmIG1lbWJlck5vZGUgaW5zdGFuY2VvZiBBU1RGaWVsZE5vZGUpIHtcblx0XHRcdFx0Y29uc3QgdGFyZ2V0OiBNYXA8c3RyaW5nLCBGaWVsZFN5bWJvbD4gPSBtZW1iZXJOb2RlLm1vZGlmaWVycy5zdGF0aWNcblx0XHRcdFx0XHQ/IGNsYXNzU3ltYm9sLnN0YXRpY0ZpZWxkU3ltYm9sc1xuXHRcdFx0XHRcdDogY2xhc3NTeW1ib2wuaW5zdGFuY2VGaWVsZFN5bWJvbHM7XG5cblx0XHRcdFx0Y29uc3QgZmllbGRTeW1ib2wgPSBuZXcgRmllbGRTeW1ib2woXG5cdFx0XHRcdFx0bWVtYmVyTm9kZSxcblx0XHRcdFx0XHRtZW1iZXJOb2RlLmZpZWxkVHlwZVxuXHRcdFx0XHRcdFx0PyB0aGlzLndyYXBUeXBlKG1lbWJlck5vZGUuZmllbGRUeXBlLCBjbGFzc1Njb3BlKVxuXHRcdFx0XHRcdFx0OiBUeXBlcy5NSVhFRFxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdGZpZWxkU3ltYm9sLm93bmVyID0gY2xhc3NTeW1ib2w7XG5cblx0XHRcdFx0dGFyZ2V0LnNldChmaWVsZFN5bWJvbC5uYW1lLCBmaWVsZFN5bWJvbCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICgobWVtYmVyTm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5NRVRIT0QgfHwgbWVtYmVyTm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5DT05TVFJVQ1RPUilcblx0XHRcdFx0JiYgbWVtYmVyTm9kZSBpbnN0YW5jZW9mIEFTVE1ldGhvZE5vZGUpIHtcblxuXHRcdFx0XHRjb25zdCBtZXRob2RTY29wZSA9IG5ldyBUeXBlU2NvcGUoY2xhc3NTY29wZSk7XG5cdFx0XHRcdGNvbnN0IG1ldGhvZFN5bWJvbCA9IG5ldyBNZXRob2RTeW1ib2wobWVtYmVyTm9kZSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLm93bmVyID0gY2xhc3NTeW1ib2w7XG5cblx0XHRcdFx0bWVtYmVyTm9kZS50eXBlUGFyYW1ldGVycy5mb3JFYWNoKG5hbWUgPT4ge1xuXHRcdFx0XHRcdG1ldGhvZFN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5wdXNoKG5ldyBUeXBlUGFyYW1ldGVyU3ltYm9sKG5hbWUpKTtcblx0XHRcdFx0XHRtZXRob2RTY29wZS5kZWZpbmVUeXBlQmluZGluZyhuYW1lLCBuZXcgVHlwZVZhcmlhYmxlKG5hbWUpKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMgPSBtZW1iZXJOb2RlXG5cdFx0XHRcdFx0LnBhcmFtZXRlcnNcblx0XHRcdFx0XHQubWFwKHBhcmFtZXRlck5vZGUgPT4gdGhpcy5wYXJhbWV0ZXJOb2RlVG9TeW1ib2wocGFyYW1ldGVyTm9kZSwgbWV0aG9kU2NvcGUpKTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wucmV0dXJuVHlwZSA9IG1lbWJlck5vZGUucmV0dXJuVHlwZVxuXHRcdFx0XHRcdD8gdGhpcy53cmFwVHlwZShtZW1iZXJOb2RlLnJldHVyblR5cGUsIG1ldGhvZFNjb3BlKVxuXHRcdFx0XHRcdDogVHlwZXMuVk9JRDtcblxuXHRcdFx0XHRpZiAobWVtYmVyTm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5DT05TVFJVQ1RPUikge1xuXHRcdFx0XHRcdGNsYXNzU3ltYm9sLmNvbnN0cnVjdG9yTWV0aG9kU3ltYm9sID0gbWV0aG9kU3ltYm9sO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnN0IHRhcmdldCA9IG1ldGhvZFN5bWJvbC5pc1N0YXRpY1xuXHRcdFx0XHRcdFx0PyBjbGFzc1N5bWJvbC5zdGF0aWNNZXRob2RTeW1ib2xzXG5cdFx0XHRcdFx0XHQ6IGNsYXNzU3ltYm9sLmluc3RhbmNlTWV0aG9kU3ltYm9scztcblxuXHRcdFx0XHRcdHRhcmdldC5zZXQobWVtYmVyTm9kZS5uYW1lLCBtZXRob2RTeW1ib2wpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSByZWdpc3RlckludGVyZmFjZVN5bWJvbChpbnRlcmZhY2VOb2RlOiBBU1RJbnRlcmZhY2VOb2RlKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKGludGVyZmFjZU5vZGUubmFtZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBpbnRlcmZhY2VTY29wZSA9IG5ldyBUeXBlU2NvcGUoKTtcblx0XHRjb25zdCBpbnRlcmZhY2VTeW1ib2wgPSBuZXcgSW50ZXJmYWNlU3ltYm9sKGludGVyZmFjZU5vZGUpO1xuXG5cdFx0dGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5hZGRJbnRlcmZhY2VTeW1ib2woaW50ZXJmYWNlU3ltYm9sKTtcblxuXHRcdGludGVyZmFjZU5vZGUudHlwZVBhcmFtZXRlcnMuZm9yRWFjaChuYW1lID0+IHtcblx0XHRcdGludGVyZmFjZVN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5wdXNoKG5ldyBUeXBlUGFyYW1ldGVyU3ltYm9sKG5hbWUpKTtcblx0XHRcdGludGVyZmFjZVNjb3BlLmRlZmluZVR5cGVCaW5kaW5nKG5hbWUsIG5ldyBUeXBlVmFyaWFibGUobmFtZSkpO1xuXHRcdH0pO1xuXG5cdFx0Zm9yIChjb25zdCBpbnRlcmZhY2VOYW1lIG9mIGludGVyZmFjZU5vZGUuZXh0ZW5kc0ludGVyZmFjZXMpIHtcblx0XHRcdGNvbnN0IGludGVyZmFjZVN5bWJvbDogSW50ZXJmYWNlU3ltYm9sID0gdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRJbnRlcmFjZVN5bWJvbChpbnRlcmZhY2VOYW1lKTtcblxuXHRcdFx0aW50ZXJmYWNlU3ltYm9sLmV4dGVuZHNJbnRlcmZhY2VzLnB1c2goaW50ZXJmYWNlU3ltYm9sKTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IG1lbWJlck5vZGUgb2YgaW50ZXJmYWNlTm9kZS5jaGlsZHJlbikge1xuXHRcdFx0aWYgKG1lbWJlck5vZGUudHlwZSA9PT0gQVNUTm9kZVR5cGUuRklFTEQgJiYgbWVtYmVyTm9kZSBpbnN0YW5jZW9mIEFTVEZpZWxkTm9kZSkge1xuXHRcdFx0XHRjb25zdCBmaWVsZFN5bWJvbCA9IG5ldyBGaWVsZFN5bWJvbChcblx0XHRcdFx0XHRtZW1iZXJOb2RlLFxuXHRcdFx0XHRcdG1lbWJlck5vZGUuZmllbGRUeXBlXG5cdFx0XHRcdFx0XHQ/IHRoaXMud3JhcFR5cGUobWVtYmVyTm9kZS5maWVsZFR5cGUsIGludGVyZmFjZVNjb3BlKVxuXHRcdFx0XHRcdFx0OiBUeXBlcy5NSVhFRFxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdGZpZWxkU3ltYm9sLm93bmVyID0gaW50ZXJmYWNlU3ltYm9sO1xuXG5cdFx0XHRcdGludGVyZmFjZVN5bWJvbC5zdGF0aWNGaWVsZFN5bWJvbHMuc2V0KGZpZWxkU3ltYm9sLm5hbWUsIGZpZWxkU3ltYm9sKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKChtZW1iZXJOb2RlLnR5cGUgPT09IEFTVE5vZGVUeXBlLk1FVEhPRCkgJiYgbWVtYmVyTm9kZSBpbnN0YW5jZW9mIEFTVE1ldGhvZE5vZGUpIHtcblxuXHRcdFx0XHRjb25zdCBtZXRob2RTY29wZSA9IG5ldyBUeXBlU2NvcGUoaW50ZXJmYWNlU2NvcGUpO1xuXHRcdFx0XHRjb25zdCBtZXRob2RTeW1ib2wgPSBuZXcgTWV0aG9kU3ltYm9sKG1lbWJlck5vZGUpO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC5vd25lciA9IGludGVyZmFjZVN5bWJvbDtcblxuXHRcdFx0XHRtZW1iZXJOb2RlLnR5cGVQYXJhbWV0ZXJzLmZvckVhY2gobmFtZSA9PiB7XG5cdFx0XHRcdFx0bWV0aG9kU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLnB1c2gobmV3IFR5cGVQYXJhbWV0ZXJTeW1ib2wobmFtZSkpO1xuXHRcdFx0XHRcdG1ldGhvZFNjb3BlLmRlZmluZVR5cGVCaW5kaW5nKG5hbWUsIG5ldyBUeXBlVmFyaWFibGUobmFtZSkpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9scyA9IG1lbWJlck5vZGVcblx0XHRcdFx0XHQucGFyYW1ldGVyc1xuXHRcdFx0XHRcdC5tYXAocGFyYW1ldGVyTm9kZSA9PiB0aGlzLnBhcmFtZXRlck5vZGVUb1N5bWJvbChwYXJhbWV0ZXJOb2RlLCBtZXRob2RTY29wZSkpO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlID0gbWVtYmVyTm9kZS5yZXR1cm5UeXBlXG5cdFx0XHRcdFx0PyB0aGlzLndyYXBUeXBlKG1lbWJlck5vZGUucmV0dXJuVHlwZSwgbWV0aG9kU2NvcGUpXG5cdFx0XHRcdFx0OiBUeXBlcy5WT0lEO1xuXG5cdFx0XHRcdGludGVyZmFjZVN5bWJvbC5pbnN0YW5jZU1ldGhvZFN5bWJvbHMuc2V0KG1lbWJlck5vZGUubmFtZSwgbWV0aG9kU3ltYm9sKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHR5cGVFcnJvcihtZXNzYWdlOiBzdHJpbmcsIG5vZGU6IEFTVE5vZGUgfCBudWxsID0gbnVsbCk6IG5ldmVyIHtcblx0XHR0aHJvd1R5cGVFcnJvcihtZXNzYWdlLCBub2RlPy5zcGFuKTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB7QVNUSW1wb3J0Tm9kZSwgQVNUTm9kZSwgQVNUTm9kZVR5cGV9IGZyb20gXCIuLi9hc3RcIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcbmltcG9ydCB7UGFyc2VyfSBmcm9tIFwiLi4vcGFyc2VyL3BhcnNlclwiO1xuaW1wb3J0IHtFbnZpcm9ubWVudH0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB0eXBlIHtBYnN0cmFjdEZpbGVMb2FkZXJ9IGZyb20gXCIuLi9sb2FkZXJzXCI7XG5pbXBvcnQge3Rocm93UnVudGltZUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5cbmV4cG9ydCBjbGFzcyBEZXBlbmRlbmN5IHtcblx0b2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5ID0gbmV3IE9iamVjdFJlZ2lzdHJ5KCk7XG5cdG5hbWVzOiBzdHJpbmdbXTtcblx0dXJsOiBzdHJpbmc7XG5cdGFzdDogQVNUTm9kZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWVzOiBzdHJpbmdbXSwgdXJsOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hbWVzID0gbmFtZXM7XG5cdFx0dGhpcy51cmwgPSB1cmw7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIERlcGVuZGVuY3lMb2FkZXIge1xuXHRlbnZpcm9ubWVudDogRW52aXJvbm1lbnQ7XG5cdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeTtcblx0ZmlsZUxvYWRlcjogQWJzdHJhY3RGaWxlTG9hZGVyO1xuXG5cdGNvbnN0cnVjdG9yKGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBmaWxlTG9hZGVyOiBBYnN0cmFjdEZpbGVMb2FkZXIpIHtcblx0XHR0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG5cdFx0dGhpcy5vYmplY3RSZWdpc3RyeSA9IG9iamVjdFJlZ2lzdHJ5O1xuXHRcdHRoaXMuZmlsZUxvYWRlciA9IGZpbGVMb2FkZXI7XG5cdH1cblxuXHRhc3luYyBwYXJzZURlcGVuZGVuY3koZGVwZW5kZW5jeTogRGVwZW5kZW5jeSk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiBhd2FpdCB0aGlzLnBhcnNlRmlsZShkZXBlbmRlbmN5LnVybClcblx0XHQgICAgICAgICAgICAgICAgIC50aGVuKGFzdCA9PiBkZXBlbmRlbmN5LmFzdCA9IGFzdClcblx0XHQgICAgICAgICAgICAgICAgIC50aGVuKGFzdCA9PiBkZXBlbmRlbmN5Lm9iamVjdFJlZ2lzdHJ5LmNvbGxlY3RBbGwoYXN0KSk7XG5cdH1cblxuXHRhc3luYyBjb2xsZWN0RGVwZW5kZW5jaWVzKGRlcGVuZGVuY3k6IERlcGVuZGVuY3ksIGRlcGVuZGVuY2llczogTWFwPHN0cmluZywgRGVwZW5kZW5jeT4pOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gYXdhaXQgdGhpcy5jb2xsZWN0UHJvZ3JhbURlcGVuZGVuY2llcyhkZXBlbmRlbmN5LmFzdClcblx0XHQgICAgICAgICAgICAgICAgIC50aGVuKGNsYXNzRGVwZW5kZW5jaWVzID0+IHtcblx0XHRcdCAgICAgICAgICAgICAgICAgY2xhc3NEZXBlbmRlbmNpZXMuZm9yRWFjaChjbGFzc0RlcGVuZGVuY3kgPT4ge1xuXHRcdFx0XHQgICAgICAgICAgICAgICAgIGlmIChkZXBlbmRlbmNpZXMuaGFzKGNsYXNzRGVwZW5kZW5jeS51cmwpKSB7XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICByZXR1cm47XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgfVxuXHRcdFx0XHQgICAgICAgICAgICAgICAgIGRlcGVuZGVuY2llcy5zZXQoY2xhc3NEZXBlbmRlbmN5LnVybCwgY2xhc3NEZXBlbmRlbmN5KTtcblx0XHRcdCAgICAgICAgICAgICAgICAgfSk7XG5cdFx0ICAgICAgICAgICAgICAgICB9KTtcblx0fVxuXG5cdGFzeW5jIGNvbGxlY3RQcm9ncmFtRGVwZW5kZW5jaWVzKGFzdDogQVNUTm9kZSB8IG51bGwpOiBQcm9taXNlPE1hcDxzdHJpbmcsIERlcGVuZGVuY3k+PiB7XG5cdFx0aWYgKGFzdCA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIG5ldyBNYXAoKTtcblx0XHR9XG5cblx0XHRjb25zdCBkZWZhdWx0RGVwZW5kZW5jaWVzID0gdGhpcy5kZWZhdWx0RGVwZW5kZW5jaWVzKCk7XG5cdFx0Zm9yIChjb25zdCBkZXBlbmRlbmN5IG9mIGRlZmF1bHREZXBlbmRlbmNpZXMudmFsdWVzKCkpIHtcblx0XHRcdGF3YWl0IHRoaXMucGFyc2VEZXBlbmRlbmN5KGRlcGVuZGVuY3kpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGRlcGVuZGVuY2llcyA9IHRoaXMuY29sbGVjdENsYXNzRGVwZW5kZW5jaWVzKGFzdCk7XG5cdFx0Zm9yIChjb25zdCBkZXBlbmRlbmN5IG9mIGRlcGVuZGVuY2llcy52YWx1ZXMoKSkge1xuXHRcdFx0YXdhaXQgdGhpcy5wYXJzZURlcGVuZGVuY3koZGVwZW5kZW5jeSk7XG5cdFx0XHRhd2FpdCB0aGlzLmNvbGxlY3REZXBlbmRlbmNpZXMoZGVwZW5kZW5jeSwgZGVwZW5kZW5jaWVzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IE1hcChbLi4uZGVmYXVsdERlcGVuZGVuY2llcywgLi4uZGVwZW5kZW5jaWVzXSk7XG5cdH1cblxuXHRkZWZhdWx0RGVwZW5kZW5jaWVzKCk6IE1hcDxzdHJpbmcsIERlcGVuZGVuY3k+IHtcblx0XHRjb25zdCBkZXBlbmRlbmNpZXMgPSBbXG5cdFx0XHRuZXcgRGVwZW5kZW5jeShbJ0l0ZXJhdG9yJywgJ0l0ZXJhYmxlJ10sICcvbGlicmFyeS9jb250cmFjdHMubHlyYScpXG5cdFx0XTtcblxuXHRcdGNvbnN0IG1hcCA9IG5ldyBNYXAoKTtcblx0XHRmb3IgKGNvbnN0IGRlcGVuZGVuY3kgb2YgZGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRtYXAuc2V0KGRlcGVuZGVuY3kudXJsLCBkZXBlbmRlbmN5KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWFwO1xuXHR9XG5cblx0Y29sbGVjdENsYXNzRGVwZW5kZW5jaWVzKGFzdDogQVNUTm9kZSk6IE1hcDxzdHJpbmcsIERlcGVuZGVuY3k+IHtcblx0XHRjb25zdCBjbGFzc0RlcGVuZGVuY2llcyA9IG5ldyBNYXAoKTtcblxuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChub2RlLnR5cGUgPT09IEFTVE5vZGVUeXBlLklNUE9SVCkge1xuXHRcdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEltcG9ydE5vZGUpIHtcblx0XHRcdFx0XHRpZiAobm9kZS5mcm9tID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGNsYXNzRGVwZW5kZW5jaWVzLmhhcyhub2RlLmZyb20pKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2xhc3NEZXBlbmRlbmNpZXMuc2V0KG5vZGUuZnJvbSwgbmV3IERlcGVuZGVuY3kobm9kZS5uYW1lcywgbm9kZS5mcm9tKSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgaW1wb3J0IG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGU/LnNwYW4pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzRGVwZW5kZW5jaWVzO1xuXHR9XG5cblx0cGFyc2VGaWxlKHVybDogc3RyaW5nKTogUHJvbWlzZTxBU1ROb2RlPiB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsZUxvYWRlclxuXHRcdCAgICAgICAgICAgLmxvYWQodXJsKVxuXHRcdCAgICAgICAgICAgLnRoZW4oY29kZSA9PiB0aGlzLnBhcnNlclNvdXJjZShuZXcgU291cmNlKGNvZGUsIHVybCkpKTtcblx0fVxuXG5cdHBhcnNlclNvdXJjZShzb3VyY2U6IFNvdXJjZSk6IEFTVE5vZGUge1xuXHRcdHJldHVybiBuZXcgUGFyc2VyKHNvdXJjZSkucGFyc2UoKTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0FTVENsYXNzTm9kZSwgQVNUTm9kZVR5cGV9IGZyb20gXCIuLi9jb3JlL2FzdFwiO1xuaW1wb3J0IHtDbGFzc0RlZmluaXRpb259IGZyb20gXCIuLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7UGFyc2VyfSBmcm9tIFwiLi4vY29yZS9wYXJzZXIvcGFyc2VyXCI7XG5pbXBvcnQge3Rocm93UnVudGltZUVycm9yfSBmcm9tIFwiLi4vY29yZS9lcnJvcnNcIjtcbmltcG9ydCB0eXBlIHtTb3VyY2V9IGZyb20gXCIuLi9jb3JlL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmV4cG9ydCBjbGFzcyBOYXRpdmVDbGFzcyB7XG5cdG5hbWU6IHN0cmluZztcblx0bmF0aXZlSW5zdGFuY2U6IGFueTtcblx0bmF0aXZlQ2xhc3NTb3VyY2U6IFNvdXJjZTtcblx0aXNBdXRvbG9hZEFibGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIG5hdGl2ZUluc3RhbmNlOiBhbnksIHNvdXJjZTogU291cmNlKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLm5hdGl2ZUluc3RhbmNlID0gbmF0aXZlSW5zdGFuY2U7XG5cdFx0dGhpcy5uYXRpdmVDbGFzc1NvdXJjZSA9IHNvdXJjZTtcblx0fVxuXG5cdGdldENsYXNzRGVmaW5pdGlvbigpOiBDbGFzc0RlZmluaXRpb24gfCBudWxsIHtcblx0XHRjb25zdCBhc3QgPSBuZXcgUGFyc2VyKHRoaXMubmF0aXZlQ2xhc3NTb3VyY2UpLnBhcnNlKCk7XG5cblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgYXN0LmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5DTEFTUykge1xuXHRcdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVENsYXNzTm9kZSAmJiBub2RlLm5hbWUgPT09IHRoaXMubmFtZSkge1xuXHRcdFx0XHRcdGNvbnN0IGNsYXNzRGVmID0gQ2xhc3NEZWZpbml0aW9uLmNvbnN0cnVjdEZyb21BU1Qobm9kZSk7XG5cblx0XHRcdFx0XHRjbGFzc0RlZi5uYXRpdmVJbnN0YW5jZSA9IHRoaXMubmF0aXZlSW5zdGFuY2U7XG5cblx0XHRcdFx0XHRyZXR1cm4gY2xhc3NEZWY7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgQ2xhc3MgJHt0aGlzLm5hbWV9IG5vdCBmb3VuZC5gLCBhc3Quc3Bhbik7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtBU1RBcnJheU5vZGUsIEFTVE5vZGUsIEFTVE5vZGVUeXBlLCBBU1RSZXR1cm5Ob2RlfSBmcm9tIFwiLi4vYXN0XCI7XG5pbXBvcnQge0dSQU1NQVIsIFRZUEVfRU5VTX0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcbmltcG9ydCB7Q2xhc3NEZWZpbml0aW9uLCBJbnN0YW5jZX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB7dGhyb3dOYXRpdmVFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuXG5pbnRlcmZhY2UgU2VyaWFsaXphdGlvbk9iamVjdCB7XG5cdFtpbmRleDogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdGNsYXNzTmFtZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGNsYXNzTmFtZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG5cdH1cblxuXHRwdWJsaWMgc2VyaWFsaXplKCk6IFNlcmlhbGl6YXRpb25PYmplY3Qge1xuXHRcdGNvbnN0IG9iamVjdDogU2VyaWFsaXphdGlvbk9iamVjdCA9IHt9O1xuXG5cdFx0b2JqZWN0W3RoaXMuY2xhc3NOYW1lXSA9IE9iamVjdFxuXHRcdFx0LmtleXModGhpcylcblx0XHRcdC5maWx0ZXIoa2V5ID0+IGtleSAhPT0gJ2NsYXNzTmFtZScpXG5cdFx0XHQucmVkdWNlKChvYmplY3Q6IFNlcmlhbGl6YXRpb25PYmplY3QsIGtleTogc3RyaW5nKTogU2VyaWFsaXphdGlvbk9iamVjdCA9PiB7XG5cdFx0XHRcdGNvbnN0IGNvcHk6IFNlcmlhbGl6YXRpb25PYmplY3QgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzKTtcblx0XHRcdFx0b2JqZWN0W2tleV0gPSBjb3B5W2tleV07XG5cdFx0XHRcdHJldHVybiBvYmplY3Q7XG5cdFx0XHR9LCB7fSk7XG5cblx0XHRyZXR1cm4gb2JqZWN0O1xuXHR9XG5cblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHtjbGFzc05hbWU6IHRoaXMuY2xhc3NOYW1lfSwgbnVsbCwgMik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFPYmplY3RWaWV3IGV4dGVuZHMgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdHByaXZhdGUgX19pbnN0YW5jZTogSW5zdGFuY2U7XG5cblx0Y29uc3RydWN0b3IoaW5zdGFuY2U6IEluc3RhbmNlKSB7XG5cdFx0c3VwZXIoaW5zdGFuY2UuX19jbGFzc0RlZi5uYW1lKTtcblxuXHRcdHRoaXMuX19pbnN0YW5jZSA9IGluc3RhbmNlO1xuXG5cdFx0cmV0dXJuIG5ldyBQcm94eSh0aGlzLCB7XG5cdFx0XHRnZXQ6IChfOiBhbnksIG5hbWU6IHN0cmluZyk6IGFueSA9PiB7XG5cdFx0XHRcdGlmIChuYW1lIGluIHRoaXMuX19pbnN0YW5jZS5fX2luc3RhbmNlRmllbGRzKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX19pbnN0YW5jZS5fX2luc3RhbmNlRmllbGRzW25hbWVdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKG5hbWUgaW4gdGhpcy5fX2luc3RhbmNlLl9fc3RhdGljRmllbGRzKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX19pbnN0YW5jZS5fX3N0YXRpY0ZpZWxkc1tuYW1lXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChuYW1lIGluIHRoaXMpIHtcblx0XHRcdFx0XHRjb25zdCBzZWxmOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB0aGlzO1xuXHRcdFx0XHRcdHJldHVybiBzZWxmW25hbWVdO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IChfOiBhbnksIG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IGFueSA9PiB7XG5cdFx0XHRcdGlmIChuYW1lIGluIHRoaXMuX19pbnN0YW5jZS5fX2luc3RhbmNlRmllbGRzKSB7XG5cdFx0XHRcdFx0dGhpcy5fX2luc3RhbmNlLl9faW5zdGFuY2VGaWVsZHNbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChuYW1lIGluIHRoaXMuX19pbnN0YW5jZS5fX3N0YXRpY0ZpZWxkcykge1xuXHRcdFx0XHRcdHRoaXMuX19pbnN0YW5jZS5fX3N0YXRpY0ZpZWxkc1tuYW1lXSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdH0pXG5cdH1cblxuXHRwdWJsaWMgb3ZlcnJpZGUgc2VyaWFsaXplKCk6IFNlcmlhbGl6YXRpb25PYmplY3Qge1xuXHRcdGNvbnN0IG9iamVjdDogU2VyaWFsaXphdGlvbk9iamVjdCA9IHt9O1xuXG5cdFx0b2JqZWN0W3RoaXMuY2xhc3NOYW1lXSA9IHsuLi50aGlzLl9faW5zdGFuY2U/Ll9faW5zdGFuY2VGaWVsZHN9O1xuXG5cdFx0cmV0dXJuIG9iamVjdDtcblx0fVxuXG5cdHB1YmxpYyBvdmVycmlkZSB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnNlcmlhbGl6ZSgpLCBudWxsLCAyKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FzdFZhbHVlKHZhbHVlOiBhbnksIGV4cGVjdGVkOiBhbnkgPSBudWxsKTogYW55IHtcblx0Y29uc3QgdHlwZU9mID0gdHlwZW9mIHZhbHVlO1xuXG5cdGlmIChleHBlY3RlZCA9PT0gbnVsbCkge1xuXHRcdGlmICh2YWx1ZSA9PT0gR1JBTU1BUi5OVUxMKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0aWYgKHZhbHVlID09PSBHUkFNTUFSLlRSVUUpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRpZiAodmFsdWUgPT09IEdSQU1NQVIuRkFMU0UpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKHR5cGVPZiA9PT0gJ3N0cmluZycgJiYgdmFsdWUudHJpbSgpICE9PSAnJyAmJiAhaXNOYU4odmFsdWUpKSB7XG5cdFx0XHRyZXR1cm4gTnVtYmVyKHZhbHVlKTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0c3dpdGNoIChleHBlY3RlZCkge1xuXHRcdGNhc2UgVFlQRV9FTlVNLlNUUklORzpcblx0XHRcdHJldHVybiB0eXBlT2YgPT09ICdzdHJpbmcnID8gdmFsdWUgOiBTdHJpbmcodmFsdWUpO1xuXG5cdFx0Y2FzZSBUWVBFX0VOVU0uTlVNQkVSOlxuXHRcdFx0cmV0dXJuIHR5cGVPZiA9PT0gJ251bWJlcicgPyB2YWx1ZSA6IE51bWJlcih2YWx1ZSk7XG5cblx0XHRjYXNlIFRZUEVfRU5VTS5CT09MRUFOOlxuXHRcdFx0cmV0dXJuIHR5cGVPZiA9PT0gJ2Jvb2xlYW4nID8gdmFsdWUgOiB2YWx1ZSA9PT0gJ3RydWUnO1xuXG5cdFx0Y2FzZSBUWVBFX0VOVU0uTlVMTDpcblx0XHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9MeXJhU3RyaW5nKHZhbHVlOiBzdHJpbmcpOiBBU1ROb2RlIHtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLlNUUklORyk7XG5cdG5vZGUudmFsdWUgPSB2YWx1ZTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0x5cmFOdW1iZXIodmFsdWU6IG51bWJlcik6IEFTVE5vZGUge1xuXHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuTlVNQkVSKTtcblx0bm9kZS52YWx1ZSA9IHZhbHVlO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTHlyYUJvb2xlYW4odmFsdWU6IGJvb2xlYW4pOiBBU1ROb2RlIHtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLkJPT0xFQU4pO1xuXHRub2RlLnZhbHVlID0gdmFsdWU7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9MeXJhTnVsbCgpOiBBU1ROb2RlIHtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLk5VTEwpO1xuXHRub2RlLnZhbHVlID0gR1JBTU1BUi5OVUxMO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTHlyYUFycmF5KHZhbHVlczogYW55W10pOiBBU1ROb2RlIHtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RBcnJheU5vZGUoKTtcblx0bm9kZS5lbGVtZW50cyA9IHZhbHVlcy5tYXAodmFsdWUgPT4gdG9MeXJhVmFsdWUodmFsdWUpKTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0x5cmFWYWx1ZSh2YWx1ZTogYW55KTogQVNUTm9kZSB7XG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFTVE5vZGUpIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSBUWVBFX0VOVU0uU1RSSU5HKSB7XG5cdFx0cmV0dXJuIHRvTHlyYVN0cmluZyh2YWx1ZSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSBUWVBFX0VOVU0uTlVNQkVSKSB7XG5cdFx0cmV0dXJuIHRvTHlyYU51bWJlcih2YWx1ZSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSBUWVBFX0VOVU0uQk9PTEVBTikge1xuXHRcdHJldHVybiB0b0x5cmFCb29sZWFuKHZhbHVlKTtcblx0fVxuXG5cdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIHRvTHlyYU51bGwoKTtcblx0fVxuXG5cdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdHJldHVybiB0b0x5cmFBcnJheSh2YWx1ZSk7XG5cdH1cblxuXHR0aHJvd05hdGl2ZUVycm9yKCdDYW5ub3QgY29udmVydCBuYXRpdmUgb2JqZWN0IHRvIEx5cmEgdmFsdWUnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21MeXJhVmFsdWUodmFsdWU6IGFueSk6IGFueSB7XG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFTVE5vZGUpIHtcblx0XHRyZXR1cm4gY2FzdFZhbHVlKHZhbHVlLnZhbHVlKTtcblx0fVxuXG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEluc3RhbmNlKSB7XG5cdFx0aWYgKHZhbHVlLl9fbmF0aXZlSW5zdGFuY2UpIHtcblx0XHRcdHJldHVybiB2YWx1ZS5fX25hdGl2ZUluc3RhbmNlO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgTHlyYU9iamVjdFZpZXcodmFsdWUpO1xuXHR9XG5cblx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0cmV0dXJuIHZhbHVlLm1hcChmcm9tTHlyYVZhbHVlKTtcblx0fVxuXG5cdHJldHVybiBjYXN0VmFsdWUodmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuVmFsdWUodmFsdWU6IGFueSk6IEFTVFJldHVybk5vZGUge1xuXHRjb25zdCBub2RlID0gbmV3IEFTVFJldHVybk5vZGUoKTtcblx0bm9kZS5hcmd1bWVudCA9IHRvTHlyYVZhbHVlKHZhbHVlKTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwTmF0aXZlSW5zdGFuY2UobHlyYU5hdGl2ZU9iamVjdDogTHlyYU5hdGl2ZU9iamVjdCwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogSW5zdGFuY2Uge1xuXHRpZiAoIW9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuaGFzKGx5cmFOYXRpdmVPYmplY3QuY2xhc3NOYW1lKSkge1xuXHRcdHRocm93TmF0aXZlRXJyb3IoYENsYXNzICR7bHlyYU5hdGl2ZU9iamVjdC5jbGFzc05hbWV9IG5vdCBmb3VuZC5gKTtcblx0fVxuXG5cdGNvbnN0IGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24gPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChseXJhTmF0aXZlT2JqZWN0LmNsYXNzTmFtZSk7XG5cblx0Y29uc3QgaW5zdGFuY2UgPSBuZXcgSW5zdGFuY2UoY2xhc3NEZWYpXG5cblx0aW5zdGFuY2UuX19uYXRpdmVJbnN0YW5jZSA9IGx5cmFOYXRpdmVPYmplY3Q7XG5cblx0cmV0dXJuIGluc3RhbmNlO1xufVxuXG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7THlyYU5hdGl2ZU9iamVjdH0gZnJvbSBcIi4uLy4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfY29udmVyc2lvblwiO1xuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuLi8uLi9jb3JlL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmNvbnN0IENMQVNTX05BTUUgPSAnU3RyaW5nJztcblxuZXhwb3J0IGNsYXNzIEx5cmFTdHJpbmcgZXh0ZW5kcyBMeXJhTmF0aXZlT2JqZWN0IHtcblx0dmFsdWU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIoQ0xBU1NfTkFNRSk7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHR9XG5cblx0Ly8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuXHR0b1VwcGVyQ2FzZSgpOiBMeXJhU3RyaW5nIHtcblx0XHRyZXR1cm4gbmV3IEx5cmFTdHJpbmcodGhpcy52YWx1ZS50b1VwcGVyQ2FzZSgpKTtcblx0fVxuXG5cdC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcblx0dG9Mb3dlckNhc2UoKTogTHlyYVN0cmluZyB7XG5cdFx0cmV0dXJuIG5ldyBMeXJhU3RyaW5nKHRoaXMudmFsdWUudG9Mb3dlckNhc2UoKSk7XG5cdH1cblxuXHRvdmVycmlkZSB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTdHJpbmdUeXBlIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IENMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRDTEFTU19OQU1FLFxuXHRcdFx0THlyYVN0cmluZyxcblx0XHRcdG5ldyBTb3VyY2UoXG5cdFx0XHRcdGBcbmNsYXNzICR7Q0xBU1NfTkFNRX0ge1xuXHRwdWJsaWMgY29uc3RydWN0b3IodmFsdWUpO1xuXHRcdFx0XHRcblx0cHVibGljIHRvVXBwZXJDYXNlKCk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwdWJsaWMgdG9Mb3dlckNhc2UoKTogJHtDTEFTU19OQU1FfTtcblxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IHRydWU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uLy4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuY29uc3QgQ0xBU1NfTkFNRSA9ICdTeXN0ZW0nO1xuXG5leHBvcnQgY2xhc3MgTHlyYVN5c3RlbSB7XG5cdHN0YXRpYyBhbGVydChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRhbGVydChtZXNzYWdlKTtcblx0fVxuXG5cdHN0YXRpYyBwcmludChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRjb25zb2xlLmxvZyhtZXNzYWdlKTtcblx0fVxuXG5cdHN0YXRpYyBpbmZvKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRjb25zb2xlLmluZm8odmFsdWUuc2VyaWFsaXplKCkpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zb2xlLmluZm8odmFsdWUpO1xuXHR9XG5cblx0c3RhdGljIHdhcm5pbmcodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdGNvbnNvbGUud2Fybih2YWx1ZS5zZXJpYWxpemUoKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnNvbGUud2Fybih2YWx1ZSk7XG5cdH1cblxuXHRzdGF0aWMgZXJyb3IodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IodmFsdWUuc2VyaWFsaXplKCkpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zb2xlLmVycm9yKHZhbHVlKTtcblx0fVxuXG5cdHN0YXRpYyBsb2codmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdGNvbnNvbGUubG9nKHZhbHVlLnNlcmlhbGl6ZSgpKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc29sZS5sb2codmFsdWUpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTeXN0ZW0gZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdENMQVNTX05BTUUsXG5cdFx0XHRMeXJhU3lzdGVtLFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfSB7XG5cdHB1YmxpYyBzdGF0aWMgYWxlcnQobWVzc2FnZTogc3RyaW5nKTogdm9pZDtcblx0XG5cdHB1YmxpYyBzdGF0aWMgcHJpbnQobWVzc2FnZTogc3RyaW5nKTogdm9pZDtcblx0XG5cdHB1YmxpYyBzdGF0aWMgaW5mbyh2YWx1ZTogbWl4ZWQpOiB2b2lkO1xuXHRcblx0cHVibGljIHN0YXRpYyB3YXJuaW5nKHZhbHVlOiBtaXhlZCk6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgc3RhdGljIGVycm9yKHZhbHVlOiBtaXhlZCk6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgc3RhdGljIGxvZyh2YWx1ZTogbWl4ZWQpOiB2b2lkO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IGZhbHNlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vLi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5jb25zdCBDTEFTU19OQU1FID0gJ0Fzc2VydCc7XG5cbmNvbnN0IGlmRmFpbGVkID0gKG1lc3NhZ2U6IHN0cmluZyA9ICcnKSA9PiB7XG5cdHRocm93IG5ldyBFcnJvcignW0Fzc2VydGlvbkVycm9yXSAnICsgKG1lc3NhZ2UgfHwgJ0Fzc2VydGlvbiBmYWlsZWQuJykpO1xufTtcblxuZXhwb3J0IGNsYXNzIEx5cmFBc3NlcnQge1xuXHRzdGF0aWMgaXNUcnVlKGNvbmRpdGlvbjogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nID0gJycpIHtcblx0XHRpZiAoIWNvbmRpdGlvbikge1xuXHRcdFx0aWZGYWlsZWQobWVzc2FnZSk7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIGlzRmFsc2UoY29uZGl0aW9uOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcgPSAnJykge1xuXHRcdGlmIChjb25kaXRpb24pIHtcblx0XHRcdGlmRmFpbGVkKG1lc3NhZ2UpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQXNzZXJ0IGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IENMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRDTEFTU19OQU1FLFxuXHRcdFx0THlyYUFzc2VydCxcblx0XHRcdG5ldyBTb3VyY2UoXG5cdFx0XHRcdGBcbmNsYXNzICR7Q0xBU1NfTkFNRX0ge1xuXHRwdWJsaWMgc3RhdGljIGlzVHJ1ZShjb25kaXRpb246IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZyA9IFwiXCIpOiB2b2lkO1xuXHRcblx0cHVibGljIHN0YXRpYyBpc0ZhbHNlKGNvbmRpdGlvbjogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nID0gXCJcIik6IHZvaWQ7XG59YFxuXHRcdFx0KSk7XG5cblx0XHR0aGlzLmlzQXV0b2xvYWRBYmxlID0gZmFsc2U7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uLy4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuY29uc3QgQ0xBU1NfTkFNRSA9ICdOdW1iZXInO1xuXG5leHBvcnQgY2xhc3MgTHlyYU51bWJlciBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHR2YWx1ZTogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKHZhbHVlOiBudW1iZXIpIHtcblx0XHRzdXBlcihDTEFTU19OQU1FKTtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdH1cblxuXHRvdmVycmlkZSB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlLnRvU3RyaW5nKCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE51bWJlclR5cGUgZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdENMQVNTX05BTUUsXG5cdFx0XHRMeXJhTnVtYmVyLFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfSB7XG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWx1ZSk7XG5cblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZztcbn1gXG5cdFx0XHQpKTtcblxuXHRcdHRoaXMuaXNBdXRvbG9hZEFibGUgPSB0cnVlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7THlyYU5hdGl2ZU9iamVjdH0gZnJvbSBcIi4uLy4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfY29udmVyc2lvblwiO1xuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuLi8uLi9jb3JlL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmNvbnN0IEFSUkFZX0NMQVNTX05BTUUgPSAnQXJyYXknO1xuY29uc3QgQVJSQVlfSVRFUkFUT1JfQ0xBU1NfTkFNRSA9ICdBcnJheUl0ZXJhdG9yJztcblxuZXhwb3J0IGNsYXNzIEx5cmFBcnJheSBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHR2YWx1ZXM6IGFueVtdO1xuXG5cdGNvbnN0cnVjdG9yKHZhbHVlczogYW55W10gPSBbXSkge1xuXHRcdHN1cGVyKEFSUkFZX0NMQVNTX05BTUUpO1xuXG5cdFx0dGhpcy52YWx1ZXMgPSB2YWx1ZXM7XG5cdH1cblxuXHRpdGVyYXRvcigpOiBMeXJhQXJyYXlJdGVyYXRvciB7XG5cdFx0cmV0dXJuIG5ldyBMeXJhQXJyYXlJdGVyYXRvcih0aGlzKTtcblx0fVxuXG5cdGxlbmd0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlcy5sZW5ndGg7XG5cdH1cblxuXHRwdXNoKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLnZhbHVlcy5wdXNoKHZhbHVlKTtcblx0fVxuXG5cdC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcblx0Z2V0KGluZGV4OiBudW1iZXIpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlc1tpbmRleF0gPz8gbnVsbDtcblx0fVxuXG5cdC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcblx0cmVtb3ZlQXQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMudmFsdWVzID0gdGhpcy52YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcblx0fVxuXG5cdG92ZXJyaWRlIHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0Y29uc3QgdmFsdWVzID0gdGhpc1xuXHRcdFx0LnZhbHVlc1xuXHRcdFx0Lm1hcCh2YWx1ZSA9PiB7XG5cdFx0XHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFBcnJheSkge1xuXHRcdFx0XHRcdHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdH0pO1xuXG5cdFx0cmV0dXJuIGBbJHt2YWx1ZXMuam9pbignLCAnKX1dYDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQXJyYXlUeXBlIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IEFSUkFZX0NMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRBUlJBWV9DTEFTU19OQU1FLFxuXHRcdFx0THlyYUFycmF5LFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtBUlJBWV9DTEFTU19OQU1FfTxUPiBpbXBsZW1lbnRzIEl0ZXJhYmxlPFQ+IHtcblx0cHVibGljIGNvbnN0cnVjdG9yKHZhbHVlcyA9IFtdKTtcblx0XG5cdHB1YmxpYyBpdGVyYXRvcigpOiBJdGVyYXRvcjxUPjtcblx0XG5cdHB1YmxpYyBsZW5ndGgoKTogbnVtYmVyO1xuXHRcblx0cHVibGljIHB1c2godmFsdWU6IFQpOiB2b2lkO1xuXHRcblx0cHVibGljIGdldChpbmRleDogbnVtYmVyKTogVD87XG5cdFxuXHRwdWJsaWMgcmVtb3ZlQXQoaW5kZXg6IG51bWJlcik6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFBcnJheUl0ZXJhdG9yIGV4dGVuZHMgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdHZhbHVlczogYW55W107XG5cdGluZGV4OiBudW1iZXIgPSAwO1xuXG5cdGNvbnN0cnVjdG9yKGFycmF5OiBMeXJhQXJyYXkpIHtcblx0XHRzdXBlcihBUlJBWV9JVEVSQVRPUl9DTEFTU19OQU1FKTtcblxuXHRcdHRoaXMudmFsdWVzID0gYXJyYXkudmFsdWVzO1xuXHR9XG5cblx0cmV3aW5kKCkge1xuXHRcdHRoaXMuaW5kZXggPSAwO1xuXHR9XG5cblx0aGFzTmV4dCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pbmRleCA8IHRoaXMudmFsdWVzLmxlbmd0aDtcblx0fVxuXG5cdG5leHQoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaW5kZXggKyAxID4gdGhpcy52YWx1ZXMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5pbmRleCsrO1xuXHR9XG5cblx0Ly8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuXHRwcmV2aW91cygpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pbmRleCArIDEgPCAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5pbmRleC0tO1xuXHR9XG5cblx0Ly8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuXHRrZXkoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5pbmRleDtcblx0fVxuXG5cdGN1cnJlbnQoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXNbdGhpcy5pbmRleF07XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFycmF5SXRlcmF0b3JUeXBlIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IEFSUkFZX0lURVJBVE9SX0NMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRBUlJBWV9JVEVSQVRPUl9DTEFTU19OQU1FLFxuXHRcdFx0THlyYUFycmF5LFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtBUlJBWV9JVEVSQVRPUl9DTEFTU19OQU1FfTxUPiBpbXBsZW1lbnRzIEl0ZXJhdG9yPFQ+IHtcblx0cHVibGljIGNvbnN0cnVjdG9yKGFycmF5OiBBcnJheTxUPik7XG5cdFxuXHRwdWJsaWMgaGFzTmV4dCgpOiBib29sZWFuO1xuXHRcblx0cHVibGljIG5leHQoKTogdm9pZDtcblx0XG5cdHB1YmxpYyBwcmV2aW91cygpOiB2b2lkO1xuXHRcblx0cHVibGljIGtleSgpOiBudW1iZXI7XG5cdFxuXHRwdWJsaWMgY3VycmVudCgpOiBUO1xuXHRcblx0cHVibGljIHJld2luZCgpOiB2b2lkO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IHRydWU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHR5cGUge0V2ZW50UGlwZWxpbmV9IGZyb20gXCIuL3BpcGVsaW5lXCI7XG5pbXBvcnQge3RvTHlyYVZhbHVlfSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfY29udmVyc2lvblwiO1xuaW1wb3J0IHtMYW1iZGFGdW5jdGlvbkNhbGx9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9ydW50aW1lXCI7XG5cblxuZXhwb3J0IGNsYXNzIFN0YXRlPFQgPSBhbnk+IHtcblx0cHJpdmF0ZSB2YWx1ZTogVDtcblx0cHJpdmF0ZSBzdWJzY3JpYmVyczogTWFwPG51bWJlciwgKHZhbHVlOiBUKSA9PiB2b2lkPiA9IG5ldyBNYXA8bnVtYmVyLCAodmFsdWU6IFQpID0+IHZvaWQ+KCk7XG5cdHByaXZhdGUgaWQ6IG51bWJlciA9IDA7XG5cblx0Y29uc3RydWN0b3IoaW5pdGlhbDogVCkge1xuXHRcdHRoaXMudmFsdWUgPSBpbml0aWFsO1xuXHR9XG5cblx0Z2V0KCk6IFQge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHR9XG5cblx0c2V0KHZhbHVlOiBUKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMudmFsdWUgPT09IHZhbHVlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMubm90aWZ5KCk7XG5cdH1cblxuXHRzdWJzY3JpYmUoZm46IExhbWJkYUZ1bmN0aW9uQ2FsbCk6IG51bWJlciB7XG5cdFx0Y29uc3QgbmV4dElkOiBudW1iZXIgPSB0aGlzLmlkKys7XG5cdFx0dGhpcy5zdWJzY3JpYmVycy5zZXQobmV4dElkLCB0aGlzLndyYXBDYWxsYmFjayhmbikpO1xuXHRcdHJldHVybiBuZXh0SWQ7XG5cdH1cblxuXHR1bnN1YnNjcmliZShpZDogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3Vic2NyaWJlcnMuZGVsZXRlKGlkKTtcblx0fVxuXG5cdHByaXZhdGUgbm90aWZ5KCk6IHZvaWQge1xuXHRcdGZvciAoY29uc3QgZm4gb2YgdGhpcy5zdWJzY3JpYmVycy52YWx1ZXMoKSkge1xuXHRcdFx0Zm4odGhpcy52YWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSB3cmFwQ2FsbGJhY2soZm46IExhbWJkYUZ1bmN0aW9uQ2FsbCkge1xuXHRcdHJldHVybiAodmFsdWU6IFQpOiB2b2lkID0+IHtcblx0XHRcdGZuLmV2YWxDYWxsKG51bGwsIHRvTHlyYVZhbHVlKHZhbHVlKSk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kU3RhdGVUb0V2ZW50PFQ+KHBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCBldmVudDogc3RyaW5nLCBzdGF0ZTogU3RhdGU8VD4sIG1hcD86IChwYXlsb2FkOiBhbnkpID0+IFQpOiB2b2lkIHtcblx0cGlwZWxpbmUub24oZXZlbnQsIChwYXlsb2FkKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgdmFsdWU6IGFueSA9IG1hcCA/IG1hcChwYXlsb2FkKSA6IHBheWxvYWQ7XG5cdFx0c3RhdGUuc2V0KHZhbHVlKTtcblx0fSk7XG59XG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7THlyYU5hdGl2ZU9iamVjdH0gZnJvbSBcIi4uLy4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfY29udmVyc2lvblwiO1xuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuLi8uLi9jb3JlL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5pbXBvcnQge1N0YXRlfSBmcm9tIFwiLi4vLi4vY29yZS9ldmVudC9zdGF0ZVwiO1xuaW1wb3J0IHR5cGUge0xhbWJkYUZ1bmN0aW9uQ2FsbH0gZnJvbSBcIi4uLy4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcnVudGltZVwiO1xuXG5jb25zdCBDTEFTU19OQU1FID0gJ1N0YXRlJztcblxuZXhwb3J0IGNsYXNzIEx5cmFTdGF0ZTxUPiBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHRwcml2YXRlIHN0YXRlOiBTdGF0ZTxUPjtcblxuXHRjb25zdHJ1Y3Rvcihpbml0aWFsOiBUKSB7XG5cdFx0c3VwZXIoQ0xBU1NfTkFNRSk7XG5cdFx0dGhpcy5zdGF0ZSA9IG5ldyBTdGF0ZTxUPihpbml0aWFsKTtcblx0fVxuXG5cdGdldCgpOiBUIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5nZXQoKTtcblx0fVxuXG5cdHNldCh2YWx1ZTogVCk6IHZvaWQge1xuXHRcdHRoaXMuc3RhdGUuc2V0KHZhbHVlKTtcblx0fVxuXG5cdHN1YnNjcmliZShmbjogTGFtYmRhRnVuY3Rpb25DYWxsKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5zdWJzY3JpYmUoZm4pO1xuXHR9XG5cblx0dW5zdWJzY3JpYmUoaWQ6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLnVuc3Vic2NyaWJlKGlkKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgU3RhdGVUeXBlIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IENMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRDTEFTU19OQU1FLFxuXHRcdFx0THlyYVN0YXRlLFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfTxUPiB7XG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcihpbml0aWFsOiBUKTtcblxuXHRwdWJsaWMgZ2V0KCk6IFQ7XG5cdFxuXHRwdWJsaWMgc2V0KHZhbHVlOiBUKTogdm9pZDtcblx0XG5cdHB1YmxpYyBzdWJzY3JpYmUoZm46IChUKSAtPiB2b2lkKTogbnVtYmVyO1xuXHRcblx0cHVibGljIHVuc3Vic2NyaWJlKGlkOiBudW1iZXIpOiBib29sZWFuO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IHRydWU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4vbmF0aXZlX2NsYXNzXCI7XG5pbXBvcnQge1N0cmluZ1R5cGV9IGZyb20gXCIuL2NsYXNzZXMvc3RyaW5nXCI7XG5pbXBvcnQge1N5c3RlbX0gZnJvbSBcIi4vY2xhc3Nlcy9zeXN0ZW1cIjtcbmltcG9ydCB7QXNzZXJ0fSBmcm9tIFwiLi9jbGFzc2VzL2Fzc2VydFwiO1xuaW1wb3J0IHtOdW1iZXJUeXBlfSBmcm9tIFwiLi9jbGFzc2VzL251bWJlclwiO1xuaW1wb3J0IHtBcnJheUl0ZXJhdG9yVHlwZSwgQXJyYXlUeXBlfSBmcm9tIFwiLi9jbGFzc2VzL2FycmF5XCI7XG5pbXBvcnQge1N0YXRlVHlwZX0gZnJvbSBcIi4vY2xhc3Nlcy9zdGF0ZVwiO1xuXG5leHBvcnQgY2xhc3MgTmF0aXZlQ2xhc3NlcyB7XG5cdHJlZ2lzdHJ5OiBNYXA8c3RyaW5nLCBOYXRpdmVDbGFzcz4gPSBuZXcgTWFwKCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoQXNzZXJ0LkNMQVNTX05BTUUsIG5ldyBBc3NlcnQoKSk7XG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoU3lzdGVtLkNMQVNTX05BTUUsIG5ldyBTeXN0ZW0oKSk7XG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoU3RyaW5nVHlwZS5DTEFTU19OQU1FLCBuZXcgU3RyaW5nVHlwZSgpKTtcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChOdW1iZXJUeXBlLkNMQVNTX05BTUUsIG5ldyBOdW1iZXJUeXBlKCkpO1xuXHRcdHRoaXMucmVnaXN0cnkuc2V0KEFycmF5VHlwZS5DTEFTU19OQU1FLCBuZXcgQXJyYXlUeXBlKCkpO1xuXHRcdHRoaXMucmVnaXN0cnkuc2V0KEFycmF5SXRlcmF0b3JUeXBlLkNMQVNTX05BTUUsIG5ldyBBcnJheUl0ZXJhdG9yVHlwZSgpKVxuXHRcdHRoaXMucmVnaXN0cnkuc2V0KFN0YXRlVHlwZS5DTEFTU19OQU1FLCBuZXcgU3RhdGVUeXBlKCkpO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7RGVwZW5kZW5jeUxvYWRlcn0gZnJvbSBcIi4vZGVwZW5kZW5jaWVzXCI7XG5pbXBvcnQge0FTVEltcG9ydE5vZGUsIEFTVE5vZGV9IGZyb20gXCIuLi9hc3RcIjtcbmltcG9ydCB7TmF0aXZlQ2xhc3Nlc30gZnJvbSBcIi4uLy4uL2xpYnJhcnkvbmF0aXZlX2NsYXNzZXNcIjtcbmltcG9ydCB7RW52aXJvbm1lbnQsIEludGVyZmFjZURlZmluaXRpb259IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB0eXBlIHtBYnN0cmFjdEZpbGVMb2FkZXJ9IGZyb20gXCIuLi9sb2FkZXJzXCI7XG5pbXBvcnQgdHlwZSB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi8uLi9saWJyYXJ5L25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHt0aHJvd0RlcGVuZGVuY3lFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuXG5jb25zdCBuYXRpdmVDbGFzc2VzID0gbmV3IE5hdGl2ZUNsYXNzZXMoKTtcblxuZXhwb3J0IGNsYXNzIExpbmtlciB7XG5cdGVudmlyb25tZW50OiBFbnZpcm9ubWVudDtcblx0b2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5O1xuXHRkZXBlbmRlbmN5TG9hZGVyOiBEZXBlbmRlbmN5TG9hZGVyO1xuXG5cdGNvbnN0cnVjdG9yKGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBmaWxlTG9hZGVyOiBBYnN0cmFjdEZpbGVMb2FkZXIpIHtcblx0XHR0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG5cdFx0dGhpcy5vYmplY3RSZWdpc3RyeSA9IG9iamVjdFJlZ2lzdHJ5O1xuXHRcdHRoaXMuZGVwZW5kZW5jeUxvYWRlciA9IG5ldyBEZXBlbmRlbmN5TG9hZGVyKGVudmlyb25tZW50LCBvYmplY3RSZWdpc3RyeSwgZmlsZUxvYWRlcik7XG5cdH1cblxuXHRsaW5rU291cmNlcyhhc3Q6IEFTVE5vZGUpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gdGhpcy5kZXBlbmRlbmN5TG9hZGVyXG5cdFx0ICAgICAgICAgICAuY29sbGVjdFByb2dyYW1EZXBlbmRlbmNpZXMoYXN0KVxuXHRcdCAgICAgICAgICAgLnRoZW4oZGVwZW5kZW5jaWVzID0+IHtcblx0XHRcdCAgICAgICAgICAgZm9yIChjb25zdCBkZXBlbmRlbmN5IG9mIGRlcGVuZGVuY2llcy52YWx1ZXMoKSkge1xuXHRcdFx0XHQgICAgICAgICAgIGNvbnN0IG9iamVjdERlZmluaXRpb25zID0gZGVwZW5kZW5jeS5vYmplY3RSZWdpc3RyeVxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mZXRjaEFsbE9iamVjdERlZmluaXRpb25zKClcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmFsdWVzKCk7XG5cdFx0XHRcdCAgICAgICAgICAgZm9yIChsZXQgb2JqZWN0RGVmIG9mIG9iamVjdERlZmluaXRpb25zKSB7XG5cdFx0XHRcdFx0ICAgICAgICAgICBpZiAob2JqZWN0RGVmIGluc3RhbmNlb2YgSW50ZXJmYWNlRGVmaW5pdGlvbikge1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICB0aGlzLm9iamVjdFJlZ2lzdHJ5LmludGVyZmFjZXMuc2V0KG9iamVjdERlZi5uYW1lLCBvYmplY3REZWYpO1xuXHRcdFx0XHRcdCAgICAgICAgICAgfSBlbHNlIHtcblx0XHRcdFx0XHRcdCAgICAgICAgICAgdGhpcy5vYmplY3RSZWdpc3RyeS5jbGFzc2VzLnNldChvYmplY3REZWYubmFtZSwgb2JqZWN0RGVmKTtcblx0XHRcdFx0XHQgICAgICAgICAgIH1cblx0XHRcdFx0XHQgICAgICAgICAgIHRoaXMuZW52aXJvbm1lbnQuZGVmaW5lKG9iamVjdERlZi5uYW1lLCBvYmplY3REZWYpO1xuXHRcdFx0XHQgICAgICAgICAgIH1cblx0XHRcdCAgICAgICAgICAgfVxuXHRcdCAgICAgICAgICAgfSlcblx0XHQgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMubG9hZE5hdGl2ZUNsYXNzZXMoYXN0KSlcblx0fVxuXG5cdGxvYWROYXRpdmVDbGFzc2VzKGFzdDogQVNUTm9kZSk6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUSW1wb3J0Tm9kZSkge1xuXHRcdFx0XHRpZiAobm9kZS5mcm9tID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Y29uc3QgY2xhc3NOYW1lID0gbm9kZS5uYW1lc1swXTtcblx0XHRcdFx0XHRpZiAoIWNsYXNzTmFtZSkge1xuXHRcdFx0XHRcdFx0dGhyb3dEZXBlbmRlbmN5RXJyb3IoYEludmFsaWQgaW1wb3J0IG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGU/LnNwYW4pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zdCBuYXRpdmVDbGFzczogTmF0aXZlQ2xhc3MgfCBudWxsID0gbmF0aXZlQ2xhc3Nlcy5yZWdpc3RyeS5nZXQoY2xhc3NOYW1lKSB8fCBudWxsO1xuXHRcdFx0XHRcdGlmICghbmF0aXZlQ2xhc3MpIHtcblx0XHRcdFx0XHRcdHRocm93RGVwZW5kZW5jeUVycm9yKGBVbmtub3duIG5hdGl2ZSBjbGFzcyAke2NsYXNzTmFtZX1gLCBub2RlPy5zcGFuKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc3QgY2xhc3NEZWYgPSBuYXRpdmVDbGFzcy5nZXRDbGFzc0RlZmluaXRpb24oKTtcblx0XHRcdFx0XHRpZiAoIWNsYXNzRGVmKSB7XG5cdFx0XHRcdFx0XHR0aHJvd0RlcGVuZGVuY3lFcnJvcihgQ2xhc3MgZGVmaW5pdGlvbiBmb3IgbmF0aXZlIGNsYXNzICR7Y2xhc3NOYW1lfSBub3QgZm91bmQuYCwgbm9kZT8uc3Bhbik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0aGlzLm9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuaGFzKGNsYXNzTmFtZSkpIHtcblx0XHRcdFx0XHRcdHRocm93RGVwZW5kZW5jeUVycm9yKGBDb3VsZCBub3QgcmVzb2x2ZSBjbGFzcyAke2NsYXNzTmFtZX0uYCwgbm9kZT8uc3Bhbik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMub2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5zZXQoY2xhc3NOYW1lLCBjbGFzc0RlZik7XG5cdFx0XHRcdFx0dGhpcy5lbnZpcm9ubWVudC5kZWZpbmUoY2xhc3NOYW1lLCBjbGFzc0RlZik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtDbGFzc0RlZmluaXRpb24sIENsYXNzTWV0aG9kRGVmaW5pdGlvbiwgRW52aXJvbm1lbnQsIEluc3RhbmNlLCBSZXR1cm5WYWx1ZX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB7XG5cdEFTVEFubm90YXRpb25Ob2RlLFxuXHRBU1RBcnJheU5vZGUsXG5cdEFTVEFzc2lnbm1lbnROb2RlLFxuXHRBU1RCaW5hcnlOb2RlLFxuXHRBU1RDYWxsTm9kZSxcblx0QVNUQ2xhc3NOb2RlLFxuXHRBU1RFeHByZXNzaW9uTm9kZSxcblx0QVNURm9yZWFjaE5vZGUsXG5cdEFTVElmTm9kZSxcblx0QVNUSW5kZXhOb2RlLFxuXHRBU1RMYW1iZGFOb2RlLFxuXHRBU1RNYXRjaENhc2VOb2RlLFxuXHRBU1RNYXRjaE5vZGUsXG5cdEFTVE1lbWJlck5vZGUsXG5cdEFTVE1ldGhvZE5vZGUsXG5cdEFTVE5ld05vZGUsXG5cdEFTVE5vZGUsXG5cdEFTVE5vZGVUeXBlLFxuXHRBU1RQYXJhbWV0ZXJOb2RlLFxuXHRBU1RSZXR1cm5Ob2RlLFxuXHRBU1RUeXBlTm9kZSxcblx0QVNUVW5hcnlOb2RlLFxuXHRBU1RWYXJpYWJsZU5vZGUsXG5cdEFTVFZEb21Ob2RlLFxuXHRBU1RWRG9tVGV4dE5vZGVcbn0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHtHUkFNTUFSLCBUWVBFX0VOVU19IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5pbXBvcnQge05hdGl2ZUNsYXNzZXN9IGZyb20gXCIuLi8uLi9saWJyYXJ5L25hdGl2ZV9jbGFzc2VzXCI7XG5pbXBvcnQge05hdGl2ZUZ1bmN0aW9uLCBOYXRpdmVGdW5jdGlvbnN9IGZyb20gXCIuLi8uLi9saWJyYXJ5L25hdGl2ZV9mdW5jdGlvbnNcIjtcbmltcG9ydCB7Y2FzdFZhbHVlLCBmcm9tTHlyYVZhbHVlLCBMeXJhTmF0aXZlT2JqZWN0LCByZXR1cm5WYWx1ZSwgd3JhcE5hdGl2ZUluc3RhbmNlfSBmcm9tIFwiLi9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge3Rocm93UnVudGltZUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQge0F1dG9ib3hlZFR5cGVzfSBmcm9tIFwiLi4vdHlwZXMvYXV0b2JveGluZ1wiO1xuaW1wb3J0IHtMeXJhQXJyYXl9IGZyb20gXCIuLi8uLi9saWJyYXJ5L2NsYXNzZXMvYXJyYXlcIjtcbmltcG9ydCB0eXBlIHtTb3VyY2VTcGFufSBmcm9tIFwiLi4vcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcbmltcG9ydCB0eXBlIHtWTm9kZX0gZnJvbSBcIi4uL3Zkb20vdmRvbVwiO1xuXG5jb25zdCBuYXRpdmVDbGFzc2VzID0gbmV3IE5hdGl2ZUNsYXNzZXMoKTtcbmNvbnN0IG5hdGl2ZUZ1bmN0aW9ucyA9IG5ldyBOYXRpdmVGdW5jdGlvbnMoKTtcbmNvbnN0IGdsb2JhbEZ1bmN0aW9ucyA9IG5hdGl2ZUZ1bmN0aW9ucy5nZXRHbG9iYWxGdW5jdGlvbnMoKTtcbmNvbnN0IGdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5ID0gbmF0aXZlRnVuY3Rpb25zLmdldEdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5KCk7XG5cbmV4cG9ydCBjbGFzcyBBYnN0cmFjdEZ1bmN0aW9uQ2FsbCB7XG5cdG5vZGU6IEFTVE5vZGU7XG5cdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeTtcblx0ZnVuY3Rpb25FbnY6IEVudmlyb25tZW50O1xuXG5cdGNvbnN0cnVjdG9yKG5vZGU6IEFTVE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZnVuY3Rpb25FbnY6IEVudmlyb25tZW50KSB7XG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5ID0gb2JqZWN0UmVnaXN0cnk7XG5cdFx0dGhpcy5mdW5jdGlvbkVudiA9IGZ1bmN0aW9uRW52O1xuXHR9XG5cblx0Z2V0QVNUQ2FsbE5vZGUoKTogQVNUQ2FsbE5vZGUgfCBudWxsIHtcblx0XHRpZiAodGhpcy5ub2RlIGluc3RhbmNlb2YgQVNUQ2FsbE5vZGUpIHtcblx0XHRcdHJldHVybiB0aGlzLm5vZGU7XG5cdFx0fVxuXHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIG5hdGl2ZSBmdW5jdGlvbiBjYWxsICR7dGhpcy5ub2RlLnR5cGV9LmAsIHRoaXMubm9kZS5zcGFuKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtBU1RMYW1iZGFOb2RlfVxuXHQgKi9cblx0Z2V0QVNUTGFtYmRhTm9kZSgpOiBBU1RMYW1iZGFOb2RlIHwgbnVsbCB7XG5cdFx0aWYgKHRoaXMubm9kZSBpbnN0YW5jZW9mIEFTVExhbWJkYU5vZGUpIHtcblx0XHRcdHJldHVybiB0aGlzLm5vZGU7XG5cdFx0fVxuXHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGxhbWJkYSBjYWxsICR7dGhpcy5ub2RlLnR5cGV9LmAsIHRoaXMubm9kZS5zcGFuKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTGFtYmRhRnVuY3Rpb25DYWxsIGV4dGVuZHMgQWJzdHJhY3RGdW5jdGlvbkNhbGwge1xuXHRldmFsQ2FsbCh0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCwgLi4uYXJnczogYW55W10pOiBhbnkge1xuXHRcdGNvbnN0IG5vZGUgPSB0aGlzLmdldEFTVExhbWJkYU5vZGUoKTtcblx0XHRpZiAobm9kZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoXCJJbnZhbGlkIGZ1bmN0aW9uIGNhbGwuXCIpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNsb3N1cmVFbnYgPSBuZXcgRW52aXJvbm1lbnQodGhpcy5mdW5jdGlvbkVudik7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUucGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgcGFyYW1ldGVyOiBBU1RQYXJhbWV0ZXJOb2RlIHwgbnVsbCA9IG5vZGUucGFyYW1ldGVyc1tpXSB8fCBudWxsO1xuXHRcdFx0aWYgKCFwYXJhbWV0ZXIpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRjbG9zdXJlRW52LmRlZmluZShwYXJhbWV0ZXIubmFtZSwgYXJnc1tpXSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2YWxCbG9jayhub2RlLmNoaWxkcmVuLCB0aGlzLm9iamVjdFJlZ2lzdHJ5LCBjbG9zdXJlRW52LCB0aGlzVmFsdWUsIG5vZGUucmV0dXJuVHlwZSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE5hdGl2ZUZ1bmN0aW9uQ2FsbCBleHRlbmRzIEFic3RyYWN0RnVuY3Rpb25DYWxsIHtcblx0ZXZhbENhbGwodGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwsIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcblx0XHRjb25zdCBjYWxsTm9kZTogQVNUQ2FsbE5vZGUgfCBudWxsID0gdGhpcy5nZXRBU1RDYWxsTm9kZSgpO1xuXHRcdGlmIChjYWxsTm9kZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoJ0ludmFsaWQgZnVuY3Rpb24gY2FsbC4nKTtcblx0XHR9XG5cblx0XHRsZXQgcmVzdWx0OiBhbnkgPSB0aGlzLnJlc29sdmVDYWxsKHRoaXNWYWx1ZSlbY2FsbE5vZGUuY2FsbGVlLm5hbWVdKC4uLmFyZ3MpO1xuXHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRyZXN1bHQgPSB3cmFwTmF0aXZlSW5zdGFuY2UocmVzdWx0LCB0aGlzLm9iamVjdFJlZ2lzdHJ5KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0ID0gcmV0dXJuVmFsdWUocmVzdWx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZhbEJsb2NrKFxuXHRcdFx0W3Jlc3VsdF0sXG5cdFx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0dGhpcy5mdW5jdGlvbkVudixcblx0XHRcdHRoaXNWYWx1ZSxcblx0XHRcdHRoaXMubG9va3VwRnVuY3Rpb25UeXBlKGNhbGxOb2RlLmNhbGxlZS5uYW1lKS5yZXR1cm5UeXBlXG5cdFx0KTtcblx0fVxuXG5cdGxvb2t1cEZ1bmN0aW9uVHlwZShuYW1lOiBzdHJpbmcpOiBOYXRpdmVGdW5jdGlvbiB7XG5cdFx0cmV0dXJuIGdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5LmdldChuYW1lKTtcblx0fVxuXG5cdHJlc29sdmVDYWxsKHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsKTogYW55IHtcblx0XHRjb25zdCBub2RlOiBBU1RDYWxsTm9kZSB8IG51bGwgPSB0aGlzLmdldEFTVENhbGxOb2RlKCk7XG5cdFx0aWYgKG5vZGUgPT09IG51bGwpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKFwiSW52YWxpZCBmdW5jdGlvbiBjYWxsLlwiKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZhbEV4cHJlc3Npb24obm9kZS5jYWxsZWUsIHRoaXMub2JqZWN0UmVnaXN0cnksIHRoaXMuZnVuY3Rpb25FbnYsIHRoaXNWYWx1ZSk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTmF0aXZlQ2xhc3NlcyhvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCk6IHZvaWQge1xuXHRmb3IgKGNvbnN0IG5hdGl2ZUNsYXNzIG9mIG5hdGl2ZUNsYXNzZXMucmVnaXN0cnkudmFsdWVzKCkpIHtcblx0XHRpZiAobmF0aXZlQ2xhc3MuaXNBdXRvbG9hZEFibGUpIHtcblx0XHRcdGNvbnN0IGNsYXNzRGVmID0gbmF0aXZlQ2xhc3MuZ2V0Q2xhc3NEZWZpbml0aW9uKCk7XG5cdFx0XHRpZiAoY2xhc3NEZWYgPT09IG51bGwpIHtcblx0XHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoXCJDbGFzcyBkZWZpbml0aW9uIGlzIG51bGwuXCIpO1xuXHRcdFx0fVxuXHRcdFx0b2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5zZXQobmF0aXZlQ2xhc3MubmFtZSwgY2xhc3NEZWYpO1xuXHRcdFx0ZW52aXJvbm1lbnQuZGVmaW5lKG5hdGl2ZUNsYXNzLm5hbWUsIGNsYXNzRGVmKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTmF0aXZlRnVuY3Rpb25zKGVudmlyb25tZW50OiBFbnZpcm9ubWVudCk6IHZvaWQge1xuXHRmb3IgKGNvbnN0IG5hbWUgaW4gZ2xvYmFsRnVuY3Rpb25zKSB7XG5cdFx0Y29uc3QgZ2xvYmFsRnVuY3Rpb246IGFueSA9IGdsb2JhbEZ1bmN0aW9uc1tuYW1lXTtcblx0XHRpZiAoIWdsb2JhbEZ1bmN0aW9uKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihcIkdsb2JhbCBmdW5jdGlvbiBpcyBudWxsLlwiKTtcblx0XHR9XG5cdFx0ZW52aXJvbm1lbnQuZGVmaW5lKG5hbWUsIGdsb2JhbEZ1bmN0aW9ucyk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxOb2RlKG5vZGU6IEFTVE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRpZiAobm9kZS5pc0V4cHJlc3Npb24pIHtcblx0XHRyZXR1cm4gbmV3IFJldHVyblZhbHVlKGV2YWxFeHByZXNzaW9uKG5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKSk7XG5cdH1cblxuXHRzd2l0Y2ggKG5vZGUudHlwZSkge1xuXHRcdGNhc2UgQVNUTm9kZVR5cGUuUFJPR1JBTU06IHtcblx0XHRcdGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuXHRcdFx0XHRldmFsTm9kZShjaGlsZCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuSU1QT1JUOlxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuSU5URVJGQUNFOiB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5DTEFTUzoge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RDbGFzc05vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxDbGFzcyhub2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgY2xhc3Mgbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5WQVJJQUJMRToge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RWYXJpYWJsZU5vZGUpIHtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBub2RlLmluaXRcblx0XHRcdFx0XHQ/IGV2YWxFeHByZXNzaW9uKG5vZGUuaW5pdCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpXG5cdFx0XHRcdFx0OiBudWxsO1xuXHRcdFx0XHRlbnZpcm9ubWVudC5kZWZpbmUobm9kZS5uYW1lLCB2YWx1ZSk7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgdmFyaWFibGUgbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5JRjoge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RJZk5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxJZihub2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBpZiBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLk1BVENIOiB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVE1hdGNoTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbE1hdGNoKG5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIG1hdGNoIG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuRk9SRUFDSDoge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RGb3JlYWNoTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbEZvcmVhY2gobm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgZm9yZWFjaCBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkVYUFJFU1NJT046IHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNURXhwcmVzc2lvbk5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxFeHByZXNzaW9uKG5vZGUuZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgZXhwcmVzc2lvbiBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLlJFVFVSTjoge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RSZXR1cm5Ob2RlKSB7XG5cdFx0XHRcdGNvbnN0IHZhbHVlID0gbm9kZS5hcmd1bWVudFxuXHRcdFx0XHRcdD8gZXZhbEV4cHJlc3Npb24obm9kZS5hcmd1bWVudCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpXG5cdFx0XHRcdFx0OiBudWxsO1xuXHRcdFx0XHRyZXR1cm4gbmV3IFJldHVyblZhbHVlKHZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIHJldHVybiBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlLnNwYW4pO1xuXHRcdH1cblx0XHRkZWZhdWx0OiB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5oYW5kbGVkIG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZUZyb21Ob2RlKG5vZGU6IEFTVENsYXNzTm9kZSk6IEluc3RhbmNlIHtcblx0cmV0dXJuIG5ldyBJbnN0YW5jZShDbGFzc0RlZmluaXRpb24uY29uc3RydWN0RnJvbUFTVChub2RlKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlckluc3RhbmNlKG5vZGU6IEFTVENsYXNzTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogSW5zdGFuY2Uge1xuXHRsZXQgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbjtcblxuXHRpZiAob2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5oYXMobm9kZS5uYW1lKSkge1xuXHRcdGNsYXNzRGVmID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQobm9kZS5uYW1lKTtcblx0fSBlbHNlIHtcblx0XHRjbGFzc0RlZiA9IENsYXNzRGVmaW5pdGlvbi5jb25zdHJ1Y3RGcm9tQVNUKG5vZGUpO1xuXG5cdFx0b2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5zZXQobm9kZS5uYW1lLCBjbGFzc0RlZik7XG5cdH1cblxuXHRyZXR1cm4gbmV3IEluc3RhbmNlKGNsYXNzRGVmKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxOYXRpdmVJbnN0YW5jZShleHByOiBBU1ROZXdOb2RlLCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCk6IEluc3RhbmNlIHtcblx0Y29uc3QgaW5zdGFuY2U6IEluc3RhbmNlID0gbmV3IEluc3RhbmNlKGNsYXNzRGVmKTtcblx0Y29uc3QgY29uc3RydWN0b3I6IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB8IG51bGwgPSBjbGFzc0RlZi5jb25zdHJ1Y3Rvck1ldGhvZDtcblx0Y29uc3QgY29uc3RydWN0b3JFbnY6IEVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblxuXHRjb25zdCBjb25zdHJ1Y3RvckFyZ3M6IGFueVtdID0gZXZhbE1ldGhvZEFyZ3VtZW50cyhcblx0XHRleHByLFxuXHRcdGNvbnN0cnVjdG9yXG5cdFx0XHQ/IGNvbnN0cnVjdG9yLnBhcmFtZXRlcnNcblx0XHRcdDogW10sXG5cdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0ZW52aXJvbm1lbnQsXG5cdFx0aW5zdGFuY2Vcblx0KTtcblxuXHRjb25zdHJ1Y3RvckVudi5kZWZpbmUoR1JBTU1BUi5USElTLCBpbnN0YW5jZSk7XG5cblx0aWYgKGNsYXNzRGVmLm5hdGl2ZUluc3RhbmNlID09PSBudWxsKSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoJ0NsYXNzIGhhcyBubyBuYXRpdmUgaW5zdGFuY2UnKTtcblx0fVxuXG5cdGNvbnN0IG5hdGl2ZUluc3RhbmNlID0gbmV3IGNsYXNzRGVmLm5hdGl2ZUluc3RhbmNlKC4uLmNvbnN0cnVjdG9yQXJncy5tYXAoZnJvbUx5cmFWYWx1ZSkpO1xuXHRpZiAobmF0aXZlSW5zdGFuY2UgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0aW5zdGFuY2UuX19uYXRpdmVJbnN0YW5jZSA9IG5hdGl2ZUluc3RhbmNlO1xuXHR9XG5cblx0cmV0dXJuIGluc3RhbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEluc3RhbmNlKGV4cHI6IEFTVE5ld05vZGUsIGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogSW5zdGFuY2Uge1xuXHRjb25zdCBpbnN0YW5jZSA9IG5ldyBJbnN0YW5jZShjbGFzc0RlZik7XG5cblx0aWYgKGNsYXNzRGVmLmNvbnN0cnVjdG9yTWV0aG9kKSB7XG5cdFx0Y29uc3QgY29uc3RydWN0b3IgPSBjbGFzc0RlZi5jb25zdHJ1Y3Rvck1ldGhvZDtcblx0XHRjb25zdCBjb25zdHJ1Y3RvckVudiA9IG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCk7XG5cblx0XHRjb25zdCBjb25zdHJ1Y3RvckFyZ3MgPSBldmFsTWV0aG9kQXJndW1lbnRzKGV4cHIsXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvci5wYXJhbWV0ZXJzLFxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0UmVnaXN0cnksXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnZpcm9ubWVudCxcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlKTtcblxuXHRcdGNvbnN0cnVjdG9yRW52LmRlZmluZShHUkFNTUFSLlRISVMsIGluc3RhbmNlKTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY29uc3RydWN0b3JBcmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBwYXJhbWV0ZXI6IEFTVFBhcmFtZXRlck5vZGUgfCBudWxsID0gY29uc3RydWN0b3IucGFyYW1ldGVyc1tpXSB8fCBudWxsO1xuXHRcdFx0aWYgKHBhcmFtZXRlcikge1xuXHRcdFx0XHRjb25zdHJ1Y3RvckVudi5kZWZpbmUocGFyYW1ldGVyLm5hbWUsIGNvbnN0cnVjdG9yQXJnc1tpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiBjb25zdHJ1Y3Rvci5jaGlsZHJlbikge1xuXHRcdFx0ZXZhbE5vZGUoY2hpbGQsIG9iamVjdFJlZ2lzdHJ5LCBjb25zdHJ1Y3RvckVudiwgaW5zdGFuY2UpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBpbnN0YW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxDbGFzcyhub2RlOiBBU1RDbGFzc05vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogdm9pZCB7XG5cdGNvbnN0IGluc3RhbmNlID0gcmVnaXN0ZXJJbnN0YW5jZShub2RlLCBvYmplY3RSZWdpc3RyeSk7XG5cdGxldCByYXdWYWx1ZTtcblx0Zm9yIChjb25zdCBmaWVsZCBvZiBpbnN0YW5jZS5fX2NsYXNzRGVmLmluc3RhbmNlRmllbGRzKSB7XG5cdFx0cmF3VmFsdWUgPSBmaWVsZC5pbml0aWFsaXplclxuXHRcdFx0PyBldmFsRXhwcmVzc2lvbihmaWVsZC5pbml0aWFsaXplciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50KVxuXHRcdFx0OiBudWxsO1xuXG5cdFx0aW5zdGFuY2UuX19pbnN0YW5jZUZpZWxkc1tmaWVsZC5uYW1lXSA9IGNhc3RWYWx1ZShyYXdWYWx1ZSwgZmllbGQudHlwZSk7XG5cdH1cblx0Zm9yIChjb25zdCBmaWVsZCBvZiBpbnN0YW5jZS5fX2NsYXNzRGVmLnN0YXRpY0ZpZWxkcykge1xuXHRcdHJhd1ZhbHVlID0gZmllbGQuaW5pdGlhbGl6ZXJcblx0XHRcdD8gZXZhbEV4cHJlc3Npb24oZmllbGQuaW5pdGlhbGl6ZXIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudClcblx0XHRcdDogbnVsbDtcblxuXHRcdGluc3RhbmNlLl9fc3RhdGljRmllbGRzW2ZpZWxkLm5hbWVdID0gY2FzdFZhbHVlKHJhd1ZhbHVlLCBmaWVsZC50eXBlKTtcblx0fVxuXHRlbnZpcm9ubWVudC5kZWZpbmUobm9kZS5uYW1lLCBpbnN0YW5jZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsTmV3KGV4cHI6IEFTVE5ld05vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogSW5zdGFuY2Uge1xuXHRpZiAoIW9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuaGFzKGV4cHIubmFtZSkpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5rbm93biBjbGFzcyAke2V4cHIubmFtZX0uYCwgZXhwci5zcGFuKTtcblxuXHR9XG5cdGNvbnN0IGNsYXNzRGVmID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQoZXhwci5uYW1lKTtcblx0aWYgKGNsYXNzRGVmLm5hdGl2ZUluc3RhbmNlKSB7XG5cdFx0cmV0dXJuIGV2YWxOYXRpdmVJbnN0YW5jZShleHByLCBjbGFzc0RlZiwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50KTtcblx0fVxuXHRyZXR1cm4gZXZhbEluc3RhbmNlKGV4cHIsIGNsYXNzRGVmLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEV4cHJlc3Npb24oZXhwcjogQVNUTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdHN3aXRjaCAoZXhwci50eXBlKSB7XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5TVFJJTkc6XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5OVU1CRVI6XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5CT09MRUFOOiB7XG5cdFx0XHRyZXR1cm4gZXhwci52YWx1ZTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5OVUxMOiB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5JREVOVElGSUVSOiB7XG5cdFx0XHRyZXR1cm4gZW52aXJvbm1lbnQuZ2V0KGV4cHIubmFtZSk7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuVEhJUzoge1xuXHRcdFx0aWYgKCF0aGlzVmFsdWUpIHtcblx0XHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYHRoaXMgdXNlZCBvdXRzaWRlIG9mIG1ldGhvZC5gLCBleHByLnNwYW4pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXNWYWx1ZTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5CSU5BUlk6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQmluYXJ5Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbEJpbmFyeShleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBiaW5hcnkgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5VTkFSWToge1xuXHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RVbmFyeU5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxVbmFyeShleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCB1bmFyeSBleHByZXNzaW9uICR7ZXhwci50eXBlfS5gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkFTU0lHTk1FTlQ6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQXNzaWdubWVudE5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxBc3NpZ24oZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgYXNzaWdubWVudCBleHByZXNzaW9uICR7ZXhwci50eXBlfWAsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuTUVNQkVSOiB7XG5cdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxNZW1iZXIoZXhwciwgZW52aXJvbm1lbnQpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgbWVtYmVyIGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5DQUxMOiB7XG5cdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVENhbGxOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsQ2FsbChleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBjYWxsIGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5WRE9NOiB7XG5cdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVFZEb21Ob2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsVkRvbU5vZGUoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgY2FsbCBleHByZXNzaW9uICR7ZXhwci50eXBlfWAsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuTkVXOiB7XG5cdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVE5ld05vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxOZXcoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50KTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGNhbGwgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkFSUkFZOiB7XG5cdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVEFycmF5Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbEFycmF5KGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGFycmF5IGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5JTkRFWDoge1xuXHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RJbmRleE5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxJbmRleChleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBpbmRleCBleHByZXNzaW9uICR7ZXhwci50eXBlfWAsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuTEFNQkRBOiB7XG5cdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVExhbWJkYU5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxMYW1iZGEoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50KTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGxhbWJkYSBleHByZXNzaW9uICR7ZXhwci50eXBlfWAsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXHRcdGRlZmF1bHQ6IHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBVbmhhbmRsZWQgZXhwcmVzc2lvbiAke2V4cHIudHlwZX0uYCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxCaW5hcnkoZXhwcjogQVNUQmluYXJ5Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGNvbnN0IGxlZnQ6IGFueSA9IGNhc3RWYWx1ZShldmFsRXhwcmVzc2lvbihleHByLmxlZnQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKSlcblx0Y29uc3QgcmlnaHQ6IGFueSA9IGNhc3RWYWx1ZShldmFsRXhwcmVzc2lvbihleHByLnJpZ2h0LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSkpXG5cblx0c3dpdGNoIChleHByLm9wZXJhdG9yKSB7XG5cdFx0Y2FzZSBHUkFNTUFSLlBMVVM6IHtcblx0XHRcdHJldHVybiBsZWZ0ICsgcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5NSU5VUzoge1xuXHRcdFx0cmV0dXJuIGxlZnQgLSByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLk1VTFRJUExZOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCAqIHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuRElWSURFOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCAvIHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTU9EVUxVUzoge1xuXHRcdFx0cmV0dXJuIGxlZnQgJSByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkxFU1NfVEhBTjoge1xuXHRcdFx0cmV0dXJuIGxlZnQgPCByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkdSRUFURVJfVEhBTjoge1xuXHRcdFx0cmV0dXJuIGxlZnQgPiByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkxFU1NfRVFVQUw6IHtcblx0XHRcdHJldHVybiBsZWZ0IDw9IHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuR1JFQVRFUl9FUVVBTDoge1xuXHRcdFx0cmV0dXJuIGxlZnQgPj0gcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5FUVVBTDoge1xuXHRcdFx0cmV0dXJuIGxlZnQgPT09IHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTk9UX0VRVUFMOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCAhPT0gcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5BTkQ6IHtcblx0XHRcdHJldHVybiBsZWZ0ICYmIHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuT1I6IHtcblx0XHRcdHJldHVybiBsZWZ0IHx8IHJpZ2h0O1xuXHRcdH1cblx0XHRkZWZhdWx0OiB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5rbm93biBvcGVyYXRvciAke2V4cHIub3BlcmF0b3J9YCk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsQXJyYXkoZXhwcjogQVNUQXJyYXlOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogSW5zdGFuY2Uge1xuXHRjb25zdCB2YWx1ZXM6IGFueVtdID0gW107XG5cdGZvciAoY29uc3QgZWxlbSBvZiBleHByLmVsZW1lbnRzKSB7XG5cdFx0dmFsdWVzLnB1c2goZXZhbEV4cHJlc3Npb24oZWxlbSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpKTtcblx0fVxuXG5cdGNvbnN0IGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24gPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldCgnQXJyYXknKTtcblx0Y29uc3QgaW5zdGFuY2UgPSBuZXcgSW5zdGFuY2UoY2xhc3NEZWYpO1xuXG5cdGluc3RhbmNlLl9fbmF0aXZlSW5zdGFuY2UgPSBuZXcgY2xhc3NEZWYubmF0aXZlSW5zdGFuY2UoZnJvbUx5cmFWYWx1ZSh2YWx1ZXMpKTtcblxuXHRyZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHtBU1RJbmRleE5vZGV9IGV4cHJcbiAqIEBwYXJhbSB7T2JqZWN0UmVnaXN0cnl9IG9iamVjdFJlZ2lzdHJ5XG4gKiBAcGFyYW0ge0Vudmlyb25tZW50fSBlbnZpcm9ubWVudFxuICogQHBhcmFtIHtJbnN0YW5jZXxudWxsfSB0aGlzVmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV2YWxJbmRleChleHByOiBBU1RJbmRleE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpIHtcblx0aWYgKCFleHByLm9iamVjdCkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBJbmRleCBhY2Nlc3Mgb24gbnVsbC5gLCBleHByLnNwYW4pO1xuXHR9XG5cblx0aWYgKCFleHByLmluZGV4KSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYEFjY2VzcyB3aXRoIHVuc3BlY2lmaWMgaW5kZXguYCwgZXhwci5zcGFuKTtcblx0fVxuXG5cdGNvbnN0IG9iamVjdCA9IGV2YWxFeHByZXNzaW9uKGV4cHIub2JqZWN0LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdGNvbnN0IGluZGV4ID0gZXZhbEV4cHJlc3Npb24oZXhwci5pbmRleCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXG5cdGlmICghKG9iamVjdCBpbnN0YW5jZW9mIEx5cmFBcnJheSB8fCBvYmplY3QuX19uYXRpdmVJbnN0YW5jZSBpbnN0YW5jZW9mIEx5cmFBcnJheSkpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcignSW5kZXggYWNjZXNzIG9uIG5vbi1hcnJheScsIGV4cHIuc3Bhbik7XG5cdH1cblxuXHRjb25zdCB0YXJnZXQgPSBvYmplY3QgaW5zdGFuY2VvZiBMeXJhQXJyYXkgPyBvYmplY3QgOiBvYmplY3QuX19uYXRpdmVJbnN0YW5jZTtcblx0Y29uc3QgdmFsdWUgPSB0YXJnZXQudmFsdWVzW2luZGV4XTtcblxuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0cmV0dXJuIHdyYXBOYXRpdmVJbnN0YW5jZSh2YWx1ZSwgb2JqZWN0UmVnaXN0cnkpO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbExhbWJkYShub2RlOiBBU1RMYW1iZGFOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGxhbWJkYUVudjogRW52aXJvbm1lbnQpOiBMYW1iZGFGdW5jdGlvbkNhbGwge1xuXHRyZXR1cm4gbmV3IExhbWJkYUZ1bmN0aW9uQ2FsbChub2RlLCBvYmplY3RSZWdpc3RyeSwgbGFtYmRhRW52KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEFzc2lnbihleHByOiBBU1RBc3NpZ25tZW50Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGNvbnN0IHZhbHVlID0gZXZhbEV4cHJlc3Npb24oZXhwci5yaWdodCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXG5cdGlmIChleHByLmxlZnQudHlwZSA9PT0gQVNUTm9kZVR5cGUuTUVNQkVSKSB7XG5cdFx0aWYgKGV4cHIubGVmdCBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpIHtcblx0XHRcdGNvbnN0IG9iamVjdCA9IGV2YWxFeHByZXNzaW9uKGV4cHIubGVmdC5vYmplY3QsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblxuXHRcdFx0aWYgKGV4cHIubGVmdC5vYmplY3QudHlwZSA9PT0gQVNUTm9kZVR5cGUuSURFTlRJRklFUikge1xuXHRcdFx0XHRvYmplY3QuX19zdGF0aWNGaWVsZHNbZXhwci5sZWZ0LnByb3BlcnR5XSA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b2JqZWN0Ll9faW5zdGFuY2VGaWVsZHNbZXhwci5sZWZ0LnByb3BlcnR5XSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBtZW1iZXIgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRlbnZpcm9ubWVudC5zZXQoZXhwci5sZWZ0Lm5hbWUsIHZhbHVlKTtcblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsTWVtYmVyKGV4cHI6IEFTVE1lbWJlck5vZGUsIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCk6IGFueSB7XG5cdGNvbnN0IG9iamVjdCA9IGVudmlyb25tZW50LmdldChleHByLm9iamVjdC5uYW1lKTtcblxuXHRpZiAoZXhwci5wcm9wZXJ0eSBpbiBvYmplY3QuX19pbnN0YW5jZUZpZWxkcykge1xuXHRcdHJldHVybiBvYmplY3QuX19pbnN0YW5jZUZpZWxkc1tleHByLnByb3BlcnR5XTtcblx0fVxuXG5cdGlmIChleHByLnByb3BlcnR5IGluIG9iamVjdC5fX3N0YXRpY0ZpZWxkcykge1xuXHRcdHJldHVybiBvYmplY3QuX19zdGF0aWNGaWVsZHNbZXhwci5wcm9wZXJ0eV07XG5cdH1cblxuXHR0aHJvd1J1bnRpbWVFcnJvcihgVW5rbm93biBtZW1iZXIgJHtleHByLnByb3BlcnR5fWAsIGV4cHIuc3Bhbik7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxDYWxsKGV4cHI6IEFTVENhbGxOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0Ly8gc3VwZXIgY2FsbCBpbnNpZGUgY29uc3RydWN0b3Jcblx0aWYgKGV4cHIuY2FsbGVlLnR5cGUgPT09IEFTVE5vZGVUeXBlLklERU5USUZJRVIgJiYgZXhwci5jYWxsZWUubmFtZSA9PT0gR1JBTU1BUi5TVVBFUikge1xuXHRcdGlmICghdGhpc1ZhbHVlIHx8ICF0aGlzVmFsdWUuX19jbGFzc0RlZj8uc3VwZXJDbGFzcykge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoJ3N1cGVyKCkgdXNlZCBvdXRzaWRlIG9mIHN1YmNsYXNzIGNvbnN0cnVjdG9yJyk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc3VwZXJDbGFzc0RlZiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KHRoaXNWYWx1ZS5fX2NsYXNzRGVmLnN1cGVyQ2xhc3MpO1xuXHRcdGNvbnN0IGNvbnN0cnVjdG9yTWV0aG9kID0gc3VwZXJDbGFzc0RlZi5jb25zdHJ1Y3Rvck1ldGhvZDtcblxuXHRcdGlmICghY29uc3RydWN0b3JNZXRob2QpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNvbnN0cnVjdG9yRW52ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblx0XHRjb25zdHJ1Y3RvckVudi5kZWZpbmUoR1JBTU1BUi5USElTLCB0aGlzVmFsdWUpO1xuXG5cdFx0YmluZE1ldGhvZFBhcmFtZXRlcnMoZXhwcixcblx0XHQgICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck1ldGhvZC5wYXJhbWV0ZXJzLFxuXHRcdCAgICAgICAgICAgICAgICAgICAgIG9iamVjdFJlZ2lzdHJ5LFxuXHRcdCAgICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yRW52LFxuXHRcdCAgICAgICAgICAgICAgICAgICAgIGVudmlyb25tZW50LFxuXHRcdCAgICAgICAgICAgICAgICAgICAgIHRoaXNWYWx1ZVxuXHRcdCk7XG5cblx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIGNvbnN0cnVjdG9yTWV0aG9kLmNoaWxkcmVuKSB7XG5cdFx0XHRldmFsTm9kZShjaGlsZCwgb2JqZWN0UmVnaXN0cnksIGNvbnN0cnVjdG9yRW52LCB0aGlzVmFsdWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0aWYgKGV4cHIuY2FsbGVlLnR5cGUgPT09IEFTVE5vZGVUeXBlLk1FTUJFUikge1xuXHRcdGlmIChleHByLmNhbGxlZSBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpIHtcblx0XHRcdGlmIChleHByLmNhbGxlZS5vYmplY3QudHlwZSA9PT0gQVNUTm9kZVR5cGUuSURFTlRJRklFUikge1xuXHRcdFx0XHRjb25zdCBjbGFzc05hbWUgPSBleHByLmNhbGxlZS5vYmplY3QubmFtZTtcblxuXHRcdFx0XHRpZiAob2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5oYXMoY2xhc3NOYW1lKSkge1xuXHRcdFx0XHRcdHJldHVybiBldmFsU3RhdGljQ2FsbChleHByLCBjbGFzc05hbWUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGV2YWxJbnN0YW5jZUNhbGwoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIGV2YWxGdW5jdGlvbkNhbGwoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEZ1bmN0aW9uQ2FsbChleHByOiBBU1RDYWxsTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCkge1xuXHRjb25zdCBmdW5jdGlvbkNhbGwgPSBldmFsRXhwcmVzc2lvbihleHByLmNhbGxlZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRjb25zdCBhcmdzID0gZXZhbENhbGxBcmd1bWVudHMoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXG5cdGlmIChmdW5jdGlvbkNhbGwgaW5zdGFuY2VvZiBMYW1iZGFGdW5jdGlvbkNhbGwpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb25DYWxsLmV2YWxDYWxsKHRoaXNWYWx1ZSwgLi4uYXJncyk7XG5cdH1cblxuXHRyZXR1cm4gKG5ldyBOYXRpdmVGdW5jdGlvbkNhbGwoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50KSkuZXZhbENhbGwodGhpc1ZhbHVlLCAuLi5hcmdzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxTdGF0aWNDYWxsKGV4cHI6IEFTVENhbGxOb2RlLCBjbGFzc05hbWU6IHN0cmluZywgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCkge1xuXG5cdGlmICghKGV4cHIuY2FsbGVlIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBtZW1iZXIgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHR9XG5cblx0Y29uc3QgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KGNsYXNzTmFtZSk7XG5cdGNvbnN0IG1ldGhvZERlZjogQ2xhc3NNZXRob2REZWZpbml0aW9uIHwgdW5kZWZpbmVkID0gY2xhc3NEZWYuc3RhdGljTWV0aG9kc1tleHByLmNhbGxlZS5wcm9wZXJ0eV07XG5cblx0aWYgKCFtZXRob2REZWYpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgU3RhdGljIG1ldGhvZCAke2NsYXNzTmFtZX0uJHtleHByLmNhbGxlZS5wcm9wZXJ0eX0gbm90IGZvdW5kYCwgZXhwci5jYWxsZWUuc3Bhbik7XG5cdH1cblxuXHRpZiAoY2xhc3NEZWYubmF0aXZlSW5zdGFuY2UgJiYgY2xhc3NEZWYubmF0aXZlSW5zdGFuY2VbbWV0aG9kRGVmLm5hbWVdKSB7XG5cdFx0Y29uc3QgYXJncyA9IGV2YWxNZXRob2RBcmd1bWVudHMoZXhwciwgbWV0aG9kRGVmLnBhcmFtZXRlcnMsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKVxuXHRcdGNvbnN0IHJhd0FyZ3MgPSBhcmdzLm1hcChmcm9tTHlyYVZhbHVlKTtcblx0XHRjb25zdCByZXN1bHQgPSBjbGFzc0RlZi5uYXRpdmVJbnN0YW5jZVttZXRob2REZWYubmFtZV0oLi4ucmF3QXJncyk7XG5cblx0XHRpZiAocmVzdWx0IGluc3RhbmNlb2YgTHlyYU5hdGl2ZU9iamVjdCkge1xuXHRcdFx0cmV0dXJuIHdyYXBOYXRpdmVJbnN0YW5jZShyZXN1bHQsIG9iamVjdFJlZ2lzdHJ5KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZhbEJsb2NrKFtyZXR1cm5WYWx1ZShyZXN1bHQpXSxcblx0XHQgICAgICAgICAgICAgICAgIG9iamVjdFJlZ2lzdHJ5LFxuXHRcdCAgICAgICAgICAgICAgICAgbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KSxcblx0XHQgICAgICAgICAgICAgICAgIHRoaXNWYWx1ZSxcblx0XHQgICAgICAgICAgICAgICAgIG1ldGhvZERlZi5yZXR1cm5UeXBlXG5cdFx0KTtcblx0fVxuXG5cdGNvbnN0IG1ldGhvZEVudiA9IG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCk7XG5cblx0YmluZE1ldGhvZFBhcmFtZXRlcnMoZXhwciwgbWV0aG9kRGVmLnBhcmFtZXRlcnMsIG9iamVjdFJlZ2lzdHJ5LCBtZXRob2RFbnYsIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXG5cdHJldHVybiBldmFsQmxvY2sobWV0aG9kRGVmLmNoaWxkcmVuLCBvYmplY3RSZWdpc3RyeSwgbWV0aG9kRW52LCB0aGlzVmFsdWUsIG1ldGhvZERlZi5yZXR1cm5UeXBlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxJbnN0YW5jZUNhbGwoZXhwcjogQVNUQ2FsbE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpIHtcblx0aWYgKCEoZXhwci5jYWxsZWUgaW5zdGFuY2VvZiBBU1RNZW1iZXJOb2RlKSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIG1lbWJlciBleHByZXNzaW9uICR7ZXhwci50eXBlfWAsIGV4cHIuc3Bhbik7XG5cdH1cblxuXHQvLyBPYmpla3QgYXVzd2VydGVuICh1IHwgdGhpcyB8IHN1cGVyKVxuXHRsZXQgdGFyZ2V0ID0gZXZhbEV4cHJlc3Npb24oZXhwci5jYWxsZWUub2JqZWN0LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cblx0dGFyZ2V0ID0gYXV0b0JveElmTmVlZGVkKHRhcmdldCwgb2JqZWN0UmVnaXN0cnksIGV4cHIuY2FsbGVlLnNwYW4pO1xuXG5cdGlmICghdGFyZ2V0IHx8ICF0YXJnZXQuX19jbGFzc0RlZikge1xuXHRcdHRocm93UnVudGltZUVycm9yKCdJbnN0YW5jZSBjYWxsIG9uIG5vbi1vYmplY3QnLCBleHByLmNhbGxlZS5zcGFuKTtcblx0fVxuXG5cdGxldCBjbGFzc0RlZiA9IHRhcmdldC5fX2NsYXNzRGVmO1xuXG5cdC8vIHN1cGVyLm1ldGhvZCgpXG5cdGlmIChleHByLmNhbGxlZS5vYmplY3QudHlwZSA9PT0gQVNUTm9kZVR5cGUuSURFTlRJRklFUiAmJiBleHByLmNhbGxlZS5vYmplY3QubmFtZSA9PT0gJ3N1cGVyJykge1xuXHRcdGNvbnN0IHN1cGVyTmFtZSA9IGNsYXNzRGVmLnN1cGVyQ2xhc3M7XG5cdFx0aWYgKCFzdXBlck5hbWUpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKCdzdXBlciB1c2VkIGJ1dCBubyBzdXBlcmNsYXNzJywgZXhwci5jYWxsZWUuc3Bhbik7XG5cdFx0fVxuXHRcdGNsYXNzRGVmID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQoc3VwZXJOYW1lKTtcblx0fVxuXG5cblx0Y29uc3QgbWV0aG9kRGVmOiBDbGFzc01ldGhvZERlZmluaXRpb24gfCBudWxsID0gcmVzb2x2ZUluc3RhbmNlTWV0aG9kKGNsYXNzRGVmLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0UmVnaXN0cnksXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByLmNhbGxlZS5wcm9wZXJ0eSk7XG5cdGlmICghbWV0aG9kRGVmKSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYE1ldGhvZCAke2V4cHIuY2FsbGVlLnByb3BlcnR5fSBub3QgZm91bmQgb24gJHtjbGFzc0RlZi5uYW1lfWAsIGV4cHIuY2FsbGVlLnNwYW4pO1xuXHR9XG5cblx0Y29uc3QgbWV0aG9kRW52ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblx0bWV0aG9kRW52LmRlZmluZShHUkFNTUFSLlRISVMsIHRhcmdldCk7XG5cblx0aWYgKHRhcmdldC5fX25hdGl2ZUluc3RhbmNlICYmIG1ldGhvZERlZi5uYW1lIGluIHRhcmdldC5fX25hdGl2ZUluc3RhbmNlKSB7XG5cdFx0Y29uc3QgYXJncyA9IGV2YWxNZXRob2RBcmd1bWVudHMoZXhwciwgbWV0aG9kRGVmLnBhcmFtZXRlcnMsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHRjb25zdCByYXdBcmdzID0gYXJncy5tYXAoZnJvbUx5cmFWYWx1ZSk7XG5cdFx0Y29uc3QgcmVzdWx0ID0gdGFyZ2V0Ll9fbmF0aXZlSW5zdGFuY2VbbWV0aG9kRGVmLm5hbWVdKC4uLnJhd0FyZ3MpO1xuXG5cdFx0aWYgKHJlc3VsdCBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdHJldHVybiB3cmFwTmF0aXZlSW5zdGFuY2UocmVzdWx0LCBvYmplY3RSZWdpc3RyeSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2YWxCbG9jayhbcmV0dXJuVmFsdWUocmVzdWx0KV0sIG9iamVjdFJlZ2lzdHJ5LCBtZXRob2RFbnYsIHRhcmdldCwgbWV0aG9kRGVmLnJldHVyblR5cGUpO1xuXHR9XG5cblx0YmluZE1ldGhvZFBhcmFtZXRlcnMoZXhwciwgbWV0aG9kRGVmLnBhcmFtZXRlcnMsIG9iamVjdFJlZ2lzdHJ5LCBtZXRob2RFbnYsIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXG5cdHJldHVybiBldmFsQmxvY2sobWV0aG9kRGVmLmNoaWxkcmVuLCBvYmplY3RSZWdpc3RyeSwgbWV0aG9kRW52LCB0YXJnZXQsIG1ldGhvZERlZi5yZXR1cm5UeXBlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVJbnN0YW5jZU1ldGhvZChjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIG1ldGhvZE5hbWU6IHN0cmluZyk6IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB8IG51bGwge1xuXHRpZiAoY2xhc3NEZWYuaW5zdGFuY2VNZXRob2RzW21ldGhvZE5hbWVdKSB7XG5cdFx0cmV0dXJuIGNsYXNzRGVmLmluc3RhbmNlTWV0aG9kc1ttZXRob2ROYW1lXTtcblx0fVxuXG5cdGlmIChjbGFzc0RlZi5zdXBlckNsYXNzKSB7XG5cdFx0Y29uc3Qgc3VwZXJEZWYgPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChjbGFzc0RlZi5zdXBlckNsYXNzKTtcblx0XHRyZXR1cm4gcmVzb2x2ZUluc3RhbmNlTWV0aG9kKHN1cGVyRGVmLCBvYmplY3RSZWdpc3RyeSwgbWV0aG9kTmFtZSk7XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRNZXRob2RQYXJhbWV0ZXJzKFxuXHRjYWxsTm9kZTogQVNUQ2FsbE5vZGUsXG5cdHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSxcblx0b2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LFxuXHRtZXRob2RFbnY6IEVudmlyb25tZW50LFxuXHRlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsXG5cdHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbFxuKSB7XG5cblx0Y29uc3QgYXJncyA9IGNhbGxOb2RlLmFyZ3VtZW50cztcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgcGFyYW1ldGVyOiBBU1RQYXJhbWV0ZXJOb2RlIHwgbnVsbCA9IHBhcmFtZXRlcnNbaV0gfHwgbnVsbDtcblx0XHRjb25zdCBhcmd1bWVudDogYW55ID0gYXJnc1tpXSB8fCBudWxsO1xuXG5cdFx0aWYgKCFwYXJhbWV0ZXIpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKCdNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGluIG1ldGhvZCBjYWxsLicpO1xuXHRcdH1cblxuXHRcdGxldCByYXdWYWx1ZTtcblxuXHRcdGlmIChhcmd1bWVudCkge1xuXHRcdFx0cmF3VmFsdWUgPSBldmFsRXhwcmVzc2lvbihhcmd1bWVudCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdH0gZWxzZSBpZiAocGFyYW1ldGVyPy5kZWZhdWx0VmFsdWUpIHtcblx0XHRcdHJhd1ZhbHVlID0gZXZhbEV4cHJlc3Npb24ocGFyYW1ldGVyLmRlZmF1bHRWYWx1ZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNhc3RlZCA9IHBhcmFtZXRlci50eXBlQW5ub3RhdGlvblxuXHRcdFx0PyBjYXN0VmFsdWUocmF3VmFsdWUsIHBhcmFtZXRlci50eXBlQW5ub3RhdGlvbi5uYW1lKVxuXHRcdFx0OiBjYXN0VmFsdWUocmF3VmFsdWUsIFRZUEVfRU5VTS5NSVhFRCk7XG5cblx0XHRtZXRob2RFbnYuZGVmaW5lKHBhcmFtZXRlci5uYW1lLCBjYXN0ZWQpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsQ2FsbEFyZ3VtZW50cyhub2RlOiBBU1RDYWxsTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueVtdIHtcblx0aWYgKG5vZGUuY2FsbGVlIGluc3RhbmNlb2YgQVNUTGFtYmRhTm9kZSkge1xuXHRcdGNvbnN0IGxhbWJkYSA9IG5vZGUuY2FsbGVlO1xuXHRcdHJldHVybiBldmFsTWV0aG9kQXJndW1lbnRzKG5vZGUsIGxhbWJkYS5wYXJhbWV0ZXJzLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cdH1cblxuXHRpZiAobm9kZS5jYWxsZWUudHlwZSA9PT0gQVNUTm9kZVR5cGUuSURFTlRJRklFUikge1xuXHRcdHJldHVybiBub2RlLmFyZ3VtZW50cy5tYXAoYXJndW1lbnQgPT4ge1xuXHRcdFx0cmV0dXJuIGNhc3RWYWx1ZShcblx0XHRcdFx0ZXZhbEV4cHJlc3Npb24oYXJndW1lbnQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKSxcblx0XHRcdFx0YXJndW1lbnQudHlwZVxuXHRcdFx0KTtcblx0XHR9KTtcblx0fVxuXG5cdGxldCBtb2R1bGVOYW1lOiBzdHJpbmcgPSAndW5rbm93bic7XG5cdGxldCBtZXRob2ROYW1lOiBzdHJpbmcgPSAndW5rbm93bic7XG5cblx0aWYgKG5vZGUuY2FsbGVlIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkge1xuXHRcdG1vZHVsZU5hbWUgPSBub2RlLmNhbGxlZS5vYmplY3QubmFtZTtcblx0XHRtZXRob2ROYW1lID0gbm9kZS5jYWxsZWUucHJvcGVydHk7XG5cdH1cblxuXHR0aHJvd1J1bnRpbWVFcnJvcihgVW5rbm93biBmdW5jdGlvbiAke21vZHVsZU5hbWV9LiR7bWV0aG9kTmFtZX1gLCBub2RlLnNwYW4pO1xufVxuXG5mdW5jdGlvbiBldmFsTWV0aG9kQXJndW1lbnRzKGV4cHI6IEFTVENhbGxOb2RlIHwgQVNUTmV3Tm9kZSwgcGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55W10ge1xuXHRjb25zdCBhcmdzID0gW107XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgcGFyYW1ldGVyOiBBU1RQYXJhbWV0ZXJOb2RlIHwgbnVsbCA9IHBhcmFtZXRlcnNbaV0gfHwgbnVsbDtcblx0XHRjb25zdCBhcmd1bWVudCA9IGV4cHIuYXJndW1lbnRzW2ldIHx8IG51bGw7XG5cblx0XHRsZXQgdmFsdWU7XG5cblx0XHRpZiAoYXJndW1lbnQpIHtcblx0XHRcdHZhbHVlID0gZXZhbEV4cHJlc3Npb24oYXJndW1lbnQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHR9IGVsc2UgaWYgKHBhcmFtZXRlcj8uZGVmYXVsdFZhbHVlKSB7XG5cdFx0XHR2YWx1ZSA9IGV2YWxFeHByZXNzaW9uKHBhcmFtZXRlci5kZWZhdWx0VmFsdWUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFtSdW50aW1lRXJyb3JdIE1pc3NpbmcgYXJndW1lbnQgJyR7cGFyYW1ldGVyPy5uYW1lfSdgLCBleHByLnNwYW4pO1xuXHRcdH1cblxuXHRcdGFyZ3MucHVzaCh2YWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4gYXJncy5tYXAoKGFyZ3VtZW50LCBpKSA9PiB7XG5cdFx0Y29uc3QgcGFyYW1ldGVyID0gcGFyYW1ldGVyc1tpXTtcblx0XHRyZXR1cm4gcGFyYW1ldGVyPy50eXBlQW5ub3RhdGlvblxuXHRcdFx0PyBjYXN0VmFsdWUoYXJndW1lbnQsIHBhcmFtZXRlci50eXBlQW5ub3RhdGlvbi5uYW1lKVxuXHRcdFx0OiBjYXN0VmFsdWUoYXJndW1lbnQsIFRZUEVfRU5VTS5NSVhFRCk7XG5cdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbElmKG5vZGU6IEFTVElmTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGNvbnN0IGNvbmRpdGlvbiA9IGNhc3RWYWx1ZShcblx0XHRldmFsRXhwcmVzc2lvbihub2RlLmNvbmRpdGlvbiwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpLFxuXHRcdFRZUEVfRU5VTS5CT09MRUFOXG5cdCk7XG5cblx0Ly8gVEhFTlxuXHRpZiAoY29uZGl0aW9uID09PSB0cnVlKSB7XG5cdFx0cmV0dXJuIGV2YWxCbG9jayhub2RlLnRoZW4uY2hpbGRyZW4sIG9iamVjdFJlZ2lzdHJ5LCBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpLCB0aGlzVmFsdWUpO1xuXHR9XG5cblx0Ly8gRUxTRVxuXHRpZiAobm9kZS5lbHNlKSB7XG5cdFx0aWYgKG5vZGUuZWxzZSBpbnN0YW5jZW9mIEFTVElmTm9kZSkge1xuXHRcdFx0cmV0dXJuIGV2YWxJZihub2RlLmVsc2UsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZhbEJsb2NrKG5vZGUuZWxzZS5jaGlsZHJlbiwgb2JqZWN0UmVnaXN0cnksIG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCksIHRoaXNWYWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxNYXRjaChub2RlOiBBU1RNYXRjaE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRjb25zdCBtYXRjaFZhbHVlID0gZXZhbEV4cHJlc3Npb24obm9kZS5leHByZXNzaW9uLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpO1xuXG5cdGZvciAoY29uc3QgY2FzZU5vZGUgb2Ygbm9kZS5jYXNlcykge1xuXHRcdGlmIChjYXNlTm9kZS50ZXN0ID09PSBudWxsKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCB0ZXN0VmFsdWUgPSBldmFsRXhwcmVzc2lvbihjYXNlTm9kZS50ZXN0LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cblx0XHRpZiAodGVzdFZhbHVlID09PSBtYXRjaFZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gZXZhbE1hdGNoQ2FzZShjYXNlTm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdGlmIChub2RlLmRlZmF1bHRDYXNlKSB7XG5cdFx0cmV0dXJuIGV2YWxNYXRjaENhc2Uobm9kZS5kZWZhdWx0Q2FzZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsTWF0Y2hDYXNlKG5vZGU6IEFTVE1hdGNoQ2FzZU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRyZXR1cm4gZXZhbEJsb2NrKG5vZGUuY2hpbGRyZW4sIG9iamVjdFJlZ2lzdHJ5LCBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpLCB0aGlzVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEZvcmVhY2gobm9kZTogQVNURm9yZWFjaE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRsZXQgaXRlcmFibGUgPSBldmFsRXhwcmVzc2lvbihub2RlLml0ZXJhYmxlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cblx0aWYgKCEoaXRlcmFibGUgaW5zdGFuY2VvZiBJbnN0YW5jZSkpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgZm9yZWFjaCBleHBlY3RzIGFuIG9iamVjdCBpbXBsZW1lbnRpbmcgSXRlcmFibGVgLCBub2RlLml0ZXJhYmxlLnNwYW4pO1xuXHR9XG5cblx0Y29uc3QgaXRlcmF0b3JNZXRob2QgPSByZXNvbHZlSW5zdGFuY2VNZXRob2QoXG5cdFx0aXRlcmFibGUuX19jbGFzc0RlZixcblx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHQnaXRlcmF0b3InXG5cdCk7XG5cblx0aWYgKCFpdGVyYXRvck1ldGhvZCkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBPYmplY3QgZG9lcyBub3QgaW1wbGVtZW50IEl0ZXJhYmxlIChtaXNzaW5nIGl0ZXJhdG9yKCkpYCwgbm9kZS5pdGVyYWJsZS5zcGFuKTtcblx0fVxuXG5cdGNvbnN0IGl0ZXJhdG9yID0gZXZhbEluc3RhbmNlQ2FsbChcblx0XHQoKCkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBBU1RDYWxsTm9kZShuZXcgQVNUTWVtYmVyTm9kZShub2RlLml0ZXJhYmxlLCAnaXRlcmF0b3InKSk7XG5cdFx0fSkoKSxcblx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRlbnZpcm9ubWVudCxcblx0XHR0aGlzVmFsdWVcblx0KTtcblxuXHRpZiAoIShpdGVyYXRvciBpbnN0YW5jZW9mIEluc3RhbmNlKSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBpdGVyYXRvcigpIG11c3QgcmV0dXJuIGFuIEl0ZXJhdG9yIG9iamVjdGAsIG5vZGUuaXRlcmFibGUuc3Bhbik7XG5cdH1cblxuXHRjYWxsSXRlcmF0b3JNZXRob2QoaXRlcmF0b3IsICdyZXdpbmQnLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpO1xuXG5cdHdoaWxlIChjYWxsSXRlcmF0b3JNZXRob2QoaXRlcmF0b3IsICdoYXNOZXh0Jywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50KSkge1xuXHRcdGNvbnN0IHZhbHVlID0gY2FsbEl0ZXJhdG9yTWV0aG9kKGl0ZXJhdG9yLCAnY3VycmVudCcsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCk7XG5cblx0XHRjb25zdCBsb29wRW52ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblxuXHRcdGxvb3BFbnYuZGVmaW5lKG5vZGUuaXRlcmF0b3IsIHZhbHVlKTtcblxuXHRcdGNvbnN0IHJlc3VsdCA9IGV2YWxCbG9jayhub2RlLmJvZHksIG9iamVjdFJlZ2lzdHJ5LCBsb29wRW52LCB0aGlzVmFsdWUpO1xuXHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBSZXR1cm5WYWx1ZSkge1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cblx0XHRjYWxsSXRlcmF0b3JNZXRob2QoaXRlcmF0b3IsICduZXh0Jywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50KTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsbEl0ZXJhdG9yTWV0aG9kKGl0ZXJhdG9yOiBJbnN0YW5jZSwgbWV0aG9kTmFtZTogc3RyaW5nLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCk6IGFueSB7XG5cdHJldHVybiBjYWxsSW5zdGFuY2VNZXRob2QoXG5cdFx0aXRlcmF0b3IsXG5cdFx0aXRlcmF0b3IuX19jbGFzc0RlZi5maW5kTWV0aG9kKG1ldGhvZE5hbWUpLFxuXHRcdFtdLFxuXHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdGVudmlyb25tZW50XG5cdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsVW5hcnkobm9kZTogQVNUVW5hcnlOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0Y29uc3QgdmFsdWUgPSBldmFsRXhwcmVzc2lvbihub2RlLmFyZ3VtZW50LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIHRoaXNWYWx1ZSk7XG5cblx0c3dpdGNoIChub2RlLm9wZXJhdG9yKSB7XG5cdFx0Y2FzZSBHUkFNTUFSLkVYQ0xBTUFUSU9OX01BUks6XG5cdFx0XHRyZXR1cm4gIWNhc3RWYWx1ZSh2YWx1ZSk7XG5cdH1cblxuXHR0aHJvd1J1bnRpbWVFcnJvcihgVW5zdXBwb3J0ZWQgdW5hcnkgb3BlcmF0b3IgJHtub2RlLm9wZXJhdG9yfWAsIG5vZGUuc3Bhbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsVkRvbU5vZGUobm9kZTogQVNUVkRvbU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBWTm9kZSB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgY2xhc3NEZWYgPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChub2RlLnRhZyk7XG5cblx0XHRpZiAoY2xhc3NEZWYpIHtcblx0XHRcdHJldHVybiBldmFsRG9tQ29tcG9uZW50Tm9kZShub2RlLCBjbGFzc0RlZiwgZW52aXJvbm1lbnQsIG9iamVjdFJlZ2lzdHJ5KTtcblx0XHR9XG5cdH0gY2F0Y2ggKGUpIHtcblx0fVxuXG5cdHJldHVybiBldmFsRG9tSHRtbE5vZGUobm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbERvbUh0bWxOb2RlKG5vZGU6IEFTVFZEb21Ob2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogVk5vZGUge1xuXHRjb25zdCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9O1xuXG5cdGZvciAoY29uc3QgW25hbWUsIHZhbHVlXSBvZiBub2RlLnByb3BzKSB7XG5cdFx0cHJvcHNbbmFtZV0gPSBldmFsRXhwcmVzc2lvbih2YWx1ZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHR9XG5cblx0Y29uc3QgY2hpbGRyZW46IEFycmF5PFZOb2RlIHwgc3RyaW5nPiA9IFtdO1xuXG5cdGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuXHRcdGlmIChjaGlsZCBpbnN0YW5jZW9mIEFTVFZEb21UZXh0Tm9kZSkge1xuXHRcdFx0Y2hpbGRyZW4ucHVzaChjaGlsZC52YWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNoaWxkcmVuLnB1c2goZXZhbEV4cHJlc3Npb24oY2hpbGQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgdGhpc1ZhbHVlKSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHtcblx0XHR0YWc6IG5vZGUudGFnLFxuXHRcdHByb3BzOiBwcm9wcyxcblx0XHRjaGlsZHJlbjogY2hpbGRyZW5cblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxEb21Db21wb25lbnROb2RlKG5vZGU6IEFTVFZEb21Ob2RlLCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uLCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IFZOb2RlIHtcblxuXHRjb25zdCBpbnN0YW5jZSA9IG5ldyBJbnN0YW5jZShjbGFzc0RlZik7XG5cdGNvbnN0IG1ldGhvZE5vZGU6IEFTVE1ldGhvZE5vZGUgPSBjbGFzc0RlZi5maW5kTWV0aG9kKCdyZW5kZXInKTtcblxuXHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlTm9kZV0gb2Ygbm9kZS5wcm9wcy5lbnRyaWVzKCkpIHtcblx0XHRpbnN0YW5jZS5fX2luc3RhbmNlRmllbGRzW2tleV0gPSBldmFsRXhwcmVzc2lvbih2YWx1ZU5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgaW5zdGFuY2UpO1xuXHR9XG5cblx0cmV0dXJuIGNhbGxJbnN0YW5jZU1ldGhvZChpbnN0YW5jZSwgbWV0aG9kTm9kZSwgW10sIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCkgYXMgVk5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsQmxvY2soYmxvY2tOb2RlczogQVNUTm9kZVtdLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsLCByZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0Zm9yIChjb25zdCBibG9ja05vZGUgb2YgYmxvY2tOb2Rlcykge1xuXHRcdGNvbnN0IHJlc3VsdCA9IGV2YWxOb2RlKGJsb2NrTm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCB0aGlzVmFsdWUpO1xuXHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBSZXR1cm5WYWx1ZSkge1xuXHRcdFx0cmV0dXJuIGNhc3RWYWx1ZShyZXN1bHQudmFsdWUsIHJldHVyblR5cGU/Lm5hbWUpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxBbm5vdGF0aW9uVmFsdWUobm9kZTogQVNUTm9kZSk6IGFueSB7XG5cdHN3aXRjaCAobm9kZS50eXBlKSB7XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5TVFJJTkc6XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5OVU1CRVI6XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5CT09MRUFOOlxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuSURFTlRJRklFUjoge1xuXHRcdFx0cmV0dXJuIGNhc3RWYWx1ZShub2RlLnZhbHVlKTtcblx0XHR9XG5cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkFSUkFZIDoge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RBcnJheU5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIG5vZGUuZWxlbWVudHMubWFwKGNoaWxkID0+IGV2YWxBbm5vdGF0aW9uVmFsdWUoY2hpbGQpKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGFubm90YXRpb24gcHJvcGVydHkgdmFsdWU6ICR7bm9kZS50eXBlfWAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXG5cdFx0ZGVmYXVsdDoge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVuc3VwcG9ydGVkIGFubm90YXRpb24gZXhwcmVzc2lvbjogJHtub2RlLnR5cGV9YCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxBbm5vdGF0aW9uUHJvcGVydGllcyhhbm5vdGF0aW9uOiBBU1RBbm5vdGF0aW9uTm9kZSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuXHRjb25zdCBwcm9wZXJ0aWVzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG5cblx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZU5vZGVdIG9mIGFubm90YXRpb24ucHJvcGVydGllcykge1xuXHRcdHByb3BlcnRpZXNba2V5XSA9IGV2YWxBbm5vdGF0aW9uVmFsdWUodmFsdWVOb2RlKTtcblx0fVxuXG5cdHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsbEluc3RhbmNlTWV0aG9kKGluc3RhbmNlOiBJbnN0YW5jZSwgbWV0aG9kTm9kZTogQVNUTWV0aG9kTm9kZSwgYXJnczogYW55W10sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogYW55IHtcblx0Y29uc3QgbWV0aG9kRW52ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblxuXHRtZXRob2RFbnYuZGVmaW5lKEdSQU1NQVIuVEhJUywgaW5zdGFuY2UpO1xuXG5cdGlmIChpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlICYmIG1ldGhvZE5vZGUubmFtZSBpbiBpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlKSB7XG5cdFx0Y29uc3QgcmF3QXJncyA9IGFyZ3MubWFwKGZyb21MeXJhVmFsdWUpO1xuXHRcdGNvbnN0IHJlc3VsdCA9IGluc3RhbmNlLl9fbmF0aXZlSW5zdGFuY2VbbWV0aG9kTm9kZS5uYW1lXSguLi5yYXdBcmdzKTtcblxuXHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRyZXR1cm4gd3JhcE5hdGl2ZUluc3RhbmNlKHJlc3VsdCwgb2JqZWN0UmVnaXN0cnkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmFsQmxvY2soW3JldHVyblZhbHVlKHJlc3VsdCldLCBvYmplY3RSZWdpc3RyeSwgbWV0aG9kRW52LCBpbnN0YW5jZSwgbWV0aG9kTm9kZS5yZXR1cm5UeXBlKTtcblx0fVxuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbWV0aG9kTm9kZS5wYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgcGFyYW1ldGVyOiBBU1RQYXJhbWV0ZXJOb2RlIHwgbnVsbCA9IG1ldGhvZE5vZGUucGFyYW1ldGVyc1tpXSB8fCBudWxsO1xuXHRcdGNvbnN0IGFyZ3VtZW50OiBhbnkgPSBhcmdzW2ldIHx8IG51bGw7XG5cblx0XHRpZiAoIXBhcmFtZXRlcikge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoJ01ldGhvZCBwYXJhbWV0ZXIgaXMgbnVsbC4nKTtcblx0XHR9XG5cblx0XHRsZXQgdmFsdWU7XG5cdFx0aWYgKCFhcmd1bWVudCkge1xuXHRcdFx0dmFsdWUgPSBwYXJhbWV0ZXIuZGVmYXVsdFZhbHVlXG5cdFx0XHRcdD8gZXZhbE5vZGUocGFyYW1ldGVyLmRlZmF1bHRWYWx1ZSwgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgaW5zdGFuY2UpXG5cdFx0XHRcdDogbnVsbDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFsdWUgPSBhcmdzW2ldO1xuXHRcdH1cblxuXHRcdG1ldGhvZEVudi5kZWZpbmUocGFyYW1ldGVyLm5hbWUsIHZhbHVlKTtcblx0fVxuXG5cdHJldHVybiBldmFsQmxvY2sobWV0aG9kTm9kZS5jaGlsZHJlbiwgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgaW5zdGFuY2UsIG1ldGhvZE5vZGUucmV0dXJuVHlwZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvQm94SWZOZWVkZWQodmFsdWU6IGFueSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwpOiBJbnN0YW5jZSB7XG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEluc3RhbmNlKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gVFlQRV9FTlVNLk5VTUJFUikge1xuXHRcdHJldHVybiBjcmVhdGVCb3hlZEluc3RhbmNlKFxuXHRcdFx0QXV0b2JveGVkVHlwZXMuZ2V0Q2xhc3NOYW1lKFRZUEVfRU5VTS5OVU1CRVIpLFxuXHRcdFx0dmFsdWUsXG5cdFx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRcdHNwYW5cblx0XHQpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gVFlQRV9FTlVNLlNUUklORykge1xuXHRcdHJldHVybiBjcmVhdGVCb3hlZEluc3RhbmNlKFxuXHRcdFx0QXV0b2JveGVkVHlwZXMuZ2V0Q2xhc3NOYW1lKFRZUEVfRU5VTS5TVFJJTkcpLFxuXHRcdFx0dmFsdWUsXG5cdFx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRcdHNwYW5cblx0XHQpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gVFlQRV9FTlVNLkJPT0xFQU4pIHtcblx0XHRyZXR1cm4gY3JlYXRlQm94ZWRJbnN0YW5jZShcblx0XHRcdEF1dG9ib3hlZFR5cGVzLmdldENsYXNzTmFtZShUWVBFX0VOVU0uQk9PTEVBTiksXG5cdFx0XHR2YWx1ZSxcblx0XHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0c3BhblxuXHRcdCk7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCb3hlZEluc3RhbmNlKGNsYXNzTmFtZTogc3RyaW5nLCBwcmltaXRpdmVWYWx1ZTogYW55LCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCk6IEluc3RhbmNlIHtcblx0Y29uc3QgY2xhc3NEZWYgPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChjbGFzc05hbWUpO1xuXG5cdGlmICghY2xhc3NEZWYpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgQXV0b2JveGluZyBmYWlsZWQ6ICR7Y2xhc3NOYW1lfSBub3QgZGVmaW5lZGAsIHNwYW4pO1xuXHR9XG5cblx0Y29uc3QgaW5zdGFuY2UgPSBuZXcgSW5zdGFuY2UoY2xhc3NEZWYpO1xuXG5cdGluc3RhbmNlLl9fbmF0aXZlSW5zdGFuY2UgPSBuZXcgY2xhc3NEZWYubmF0aXZlSW5zdGFuY2UoZnJvbUx5cmFWYWx1ZShwcmltaXRpdmVWYWx1ZSkpO1xuXG5cdHJldHVybiBpbnN0YW5jZTtcbn1cbiIsCiAgICAiaW1wb3J0IHtBU1RBbm5vdGF0aW9uTm9kZSwgQVNUQ2xhc3NOb2RlLCBBU1RNZXRob2ROb2RlLCBBU1ROb2RlfSBmcm9tIFwiLi4vYXN0XCI7XG5pbXBvcnQge2NhbGxJbnN0YW5jZU1ldGhvZCwgY3JlYXRlSW5zdGFuY2VGcm9tTm9kZSwgZXZhbEFubm90YXRpb25Qcm9wZXJ0aWVzfSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcnVudGltZVwiO1xuaW1wb3J0IHR5cGUge0Vudmlyb25tZW50fSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHR5cGUge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcblxuZXhwb3J0IGNsYXNzIFRlc3RTdWl0ZXMge1xuXHRlbnZpcm9ubWVudDogRW52aXJvbm1lbnQ7XG5cdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeTtcblxuXHRjb25zdHJ1Y3RvcihlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSkge1xuXHRcdHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5ID0gb2JqZWN0UmVnaXN0cnk7XG5cdH1cblxuXHRydW4oYXN0OiBBU1ROb2RlKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIGFzdC5jaGlsZHJlbikge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RDbGFzc05vZGUpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coYPCfp6ogUnVubmluZyBUZXN0IENhc2VzIGZvciAke25vZGUubmFtZX0gLi4uYCk7XG5cdFx0XHRcdHRoaXMucnVuVGVzdENhc2VzKG5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcnVuVGVzdENhc2VzKGNsYXNzTm9kZTogQVNUQ2xhc3NOb2RlKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBtZW1iZXIgb2YgY2xhc3NOb2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobWVtYmVyIGluc3RhbmNlb2YgQVNUTWV0aG9kTm9kZSkge1xuXHRcdFx0XHRjb25zdCBhbm5vdGF0aW9uID0gbWVtYmVyLmFubm90YXRpb25zPy5maW5kKGEgPT4gYS5uYW1lID09PSAndGVzdCcpO1xuXHRcdFx0XHRpZiAoIWFubm90YXRpb24pIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnJ1blRlc3RDYXNlKGNsYXNzTm9kZSwgbWVtYmVyLCBhbm5vdGF0aW9uKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJ1blRlc3RDYXNlKGNsYXNzTm9kZTogQVNUQ2xhc3NOb2RlLCBtZXRob2ROb2RlOiBBU1RNZXRob2ROb2RlLCBhbm5vdGF0aW9uOiBBU1RBbm5vdGF0aW9uTm9kZSk6IHZvaWQge1xuXHRcdGNvbnN0IGluc3RhbmNlID0gY3JlYXRlSW5zdGFuY2VGcm9tTm9kZShjbGFzc05vZGUpO1xuXHRcdGNvbnN0IHByb3BlcnRpZXMgPSBldmFsQW5ub3RhdGlvblByb3BlcnRpZXMoYW5ub3RhdGlvbik7XG5cblx0XHRjb25zdCB0aXRsZSA9IHByb3BlcnRpZXMudGl0bGUgPz8gYCR7Y2xhc3NOb2RlLm5hbWV9LiR7bWV0aG9kTm9kZS5uYW1lfWA7XG5cblx0XHRsZXQgZXJyb3JNZXNzYWdlID0gbnVsbDtcblxuXHRcdHRyeSB7XG5cdFx0XHRjYWxsSW5zdGFuY2VNZXRob2QoaW5zdGFuY2UsIG1ldGhvZE5vZGUsIFtdLCB0aGlzLm9iamVjdFJlZ2lzdHJ5LCB0aGlzLmVudmlyb25tZW50KTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0ZXJyb3JNZXNzYWdlID0gZXJyb3I7XG5cdFx0fVxuXG5cdFx0aWYgKGVycm9yTWVzc2FnZSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcihgIOKdjCAke3RpdGxlfSwgJHtlcnJvck1lc3NhZ2V9YCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKGAg4pyFICR7dGl0bGV9YCk7XG5cdFx0fVxuXHR9XG59XG4iLAogICAgImltcG9ydCB7QVNUTm9kZX0gZnJvbSAnLi4vYXN0LnRzJztcbmltcG9ydCB7RW52aXJvbm1lbnR9IGZyb20gXCIuL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7ZXZhbE5vZGUsIHJlZ2lzdGVyTmF0aXZlQ2xhc3NlcywgcmVnaXN0ZXJOYXRpdmVGdW5jdGlvbnN9IGZyb20gXCIuL2ludGVycHJldGVyX3J1bnRpbWVcIjtcbmltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5cbmV4cG9ydCBjbGFzcyBJbnRlcnByZXRlciB7XG5cdGVudmlyb25tZW50OiBFbnZpcm9ubWVudDtcblx0b2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5O1xuXG5cdGNvbnN0cnVjdG9yKGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KSB7XG5cdFx0dGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkgPSBvYmplY3RSZWdpc3RyeTtcblxuXHRcdHJlZ2lzdGVyTmF0aXZlQ2xhc3NlcyhvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpO1xuXHRcdHJlZ2lzdGVyTmF0aXZlRnVuY3Rpb25zKGVudmlyb25tZW50KTtcblx0fVxuXG5cdHJ1bihhc3Q6IEFTVE5vZGUpIHtcblx0XHRldmFsTm9kZShhc3QsIHRoaXMub2JqZWN0UmVnaXN0cnksIHRoaXMuZW52aXJvbm1lbnQpO1xuXHR9XG59XG4iLAogICAgImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEZpbGVMb2FkZXIge1xuXHRhYnN0cmFjdCBsb2FkKHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+O1xufVxuXG5leHBvcnQgY2xhc3MgRmV0Y2hGaWxlTG9hZGVyIGV4dGVuZHMgQWJzdHJhY3RGaWxlTG9hZGVyIHtcblx0b3ZlcnJpZGUgbG9hZCh1cmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIGZldGNoKHVybClcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcblx0fVxufVxuIiwKICAgICJpbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4vcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcbmltcG9ydCB7RW52aXJvbm1lbnR9IGZyb20gXCIuL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge1R5cGVDaGVja2VyfSBmcm9tIFwiLi90eXBlcy90eXBlY2hlY2tlclwiO1xuaW1wb3J0IHtMaW5rZXJ9IGZyb20gXCIuL2xpbmtlci9saW5rZXJcIjtcbmltcG9ydCB7VGVzdFN1aXRlc30gZnJvbSBcIi4vdGVzdHMvdGVzdHN1aXRlc1wiO1xuaW1wb3J0IHtJbnRlcnByZXRlcn0gZnJvbSBcIi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJcIjtcbmltcG9ydCB7RmV0Y2hGaWxlTG9hZGVyfSBmcm9tIFwiLi9sb2FkZXJzXCI7XG5pbXBvcnQge0FTVE5vZGV9IGZyb20gXCIuL2FzdFwiO1xuaW1wb3J0IHtQYXJzZXJ9IGZyb20gXCIuL3BhcnNlci9wYXJzZXJcIjtcblxuZXhwb3J0IGNsYXNzIEx5cmFTY3JpcHRQcm9ncmFtIHtcblx0cHJpdmF0ZSBnbG9iYWxFbnZpcm9ubWVudDogRW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQoKTtcblx0cHJpdmF0ZSBnbG9iYWxPYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkgPSBuZXcgT2JqZWN0UmVnaXN0cnkoKTtcblxuXHRwcml2YXRlIHR5cGVDaGVja2VyOiBUeXBlQ2hlY2tlciA9IG5ldyBUeXBlQ2hlY2tlcih0aGlzLmdsb2JhbE9iamVjdFJlZ2lzdHJ5KTtcblxuXHRwcml2YXRlIGxpbmtlcjogTGlua2VyID0gbmV3IExpbmtlcih0aGlzLmdsb2JhbEVudmlyb25tZW50LCB0aGlzLmdsb2JhbE9iamVjdFJlZ2lzdHJ5LCBuZXcgRmV0Y2hGaWxlTG9hZGVyKCkpO1xuXG5cdHByaXZhdGUgaW50ZXJwcmV0ZXI6IEludGVycHJldGVyID0gbmV3IEludGVycHJldGVyKHRoaXMuZ2xvYmFsRW52aXJvbm1lbnQsIHRoaXMuZ2xvYmFsT2JqZWN0UmVnaXN0cnkpO1xuXG5cdHByaXZhdGUgdGVzdFN1aXRlOiBUZXN0U3VpdGVzID0gbmV3IFRlc3RTdWl0ZXModGhpcy5nbG9iYWxFbnZpcm9ubWVudCwgdGhpcy5nbG9iYWxPYmplY3RSZWdpc3RyeSk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBpc0RlYnVnOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgc3RhcnRUaW1lOiBudW1iZXIgPSAwO1xuXG5cdGNvbnN0cnVjdG9yKGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSkge1xuXHRcdHRoaXMuaXNEZWJ1ZyA9IGlzRGVidWc7XG5cdH1cblxuXHRnZXRHbG9iYWxPYmplY3RSZWdpc3RyeSgpOiBPYmplY3RSZWdpc3RyeSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2xvYmFsT2JqZWN0UmVnaXN0cnk7XG5cdH1cblxuXG5cdGdldEdsb2JhbEVudmlyb25tZW50KCk6IEVudmlyb25tZW50IHtcblx0XHRyZXR1cm4gdGhpcy5nbG9iYWxFbnZpcm9ubWVudDtcblx0fVxuXG5cdGFzeW5jIGV4ZWN1dGUoc291cmNlOiBTb3VyY2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gdGhpcy5ydW5QaXBlbGluZShzb3VyY2UpXG5cdFx0ICAgICAgICAgICAudGhlbigoYXN0OiBBU1ROb2RlKSA9PiB7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlU3RhcnRUaW1lKCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuaW50ZXJwcmV0ZXIucnVuKGFzdCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlRW5kVGltZSgnaW50ZXJwcmV0ZXInKTtcblx0XHQgICAgICAgICAgIH0pO1xuXHR9XG5cblx0YXN5bmMgZXhlY3V0ZVRlc3Qoc291cmNlOiBTb3VyY2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gdGhpcy5ydW5QaXBlbGluZShzb3VyY2UpXG5cdFx0ICAgICAgICAgICAudGhlbigoYXN0OiBBU1ROb2RlKSA9PiB7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlU3RhcnRUaW1lKCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMudGVzdFN1aXRlLnJ1bihhc3QpO1xuXHRcdFx0ICAgICAgICAgICB0aGlzLmRlYnVnTWVhc3VyZUVuZFRpbWUoJ3Rlc3QnKTtcblx0XHQgICAgICAgICAgIH0pO1xuXHR9XG5cblx0ZGVidWcodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzRGVidWcpIHtcblx0XHRcdGNvbnNvbGUubG9nKHZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRkZWJ1Z01lYXN1cmVTdGFydFRpbWUoKTogdm9pZCB7XG5cdFx0dGhpcy5zdGFydFRpbWUgPSB0aGlzLmRlYnVnVGltZXN0YW1wKCk7XG5cdH1cblxuXHRkZWJ1Z01lYXN1cmVFbmRUaW1lKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuZGVidWcobWVzc2FnZSArICc6ICcgKyAodGhpcy5kZWJ1Z1RpbWVzdGFtcCgpIC0gdGhpcy5zdGFydFRpbWUpICsgJ21zJyk7XG5cdH1cblxuXHRkZWJ1Z1RpbWVzdGFtcCgpOiBudW1iZXIge1xuXHRcdGlmICghdGhpcy5pc0RlYnVnKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdFx0cmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3luYyBydW5QaXBlbGluZShzb3VyY2U6IFNvdXJjZSk6IFByb21pc2U8QVNUTm9kZT4ge1xuXHRcdHRoaXMuZGVidWdNZWFzdXJlU3RhcnRUaW1lKClcblx0XHRjb25zdCBhc3Q6IEFTVE5vZGUgPSBuZXcgUGFyc2VyKHNvdXJjZSkucGFyc2UoKTtcblx0XHR0aGlzLmRlYnVnTWVhc3VyZUVuZFRpbWUoJ3BhcnNlcicpXG5cdFx0dGhpcy5kZWJ1Zyhhc3QpO1xuXG5cdFx0cmV0dXJuIHRoaXMubGlua2VyLmxpbmtTb3VyY2VzKGFzdClcblx0XHQgICAgICAgICAgIC50aGVuKCgpID0+IHtcblx0XHRcdCAgICAgICAgICAgdGhpcy50eXBlQ2hlY2tlci5jb2xsZWN0QWxsU3ltYm9sc0Zyb21SZWdpc3RyeSh0aGlzLmdsb2JhbE9iamVjdFJlZ2lzdHJ5KTtcblx0XHQgICAgICAgICAgIH0pXG5cdFx0ICAgICAgICAgICAudGhlbigoKSA9PiB7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlU3RhcnRUaW1lKCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMudHlwZUNoZWNrZXIuY2hlY2soYXN0KTtcblx0XHRcdCAgICAgICAgICAgdGhpcy5kZWJ1Z01lYXN1cmVFbmRUaW1lKCd0eXBlY2hlY2tlcicpO1xuXG5cdFx0XHQgICAgICAgICAgIHJldHVybiBhc3Q7XG5cdFx0ICAgICAgICAgICB9KTtcblx0fVxufVxuIiwKICAgICJleHBvcnQgdHlwZSBFdmVudEhhbmRsZXI8VCA9IGFueT4gPSAocGF5bG9hZDogVCkgPT4gdm9pZDtcblxuZXhwb3J0IGNsYXNzIEV2ZW50UGlwZWxpbmUge1xuXHRwcml2YXRlIGxpc3RlbmVyczogTWFwPHN0cmluZywgU2V0PEV2ZW50SGFuZGxlcj4+ID0gbmV3IE1hcDxzdHJpbmcsIFNldDxFdmVudEhhbmRsZXI+PigpO1xuXG5cdG9uPFQgPSBhbnk+KGV2ZW50OiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50SGFuZGxlcjxUPik6IHZvaWQge1xuXHRcdGlmICghdGhpcy5saXN0ZW5lcnMuaGFzKGV2ZW50KSkge1xuXHRcdFx0dGhpcy5saXN0ZW5lcnMuc2V0KGV2ZW50LCBuZXcgU2V0KCkpO1xuXHRcdH1cblx0XHR0aGlzLmxpc3RlbmVycy5nZXQoZXZlbnQpIS5hZGQoaGFuZGxlcik7XG5cdH1cblxuXHRvZmY8VCA9IGFueT4oZXZlbnQ6IHN0cmluZywgaGFuZGxlcjogRXZlbnRIYW5kbGVyPFQ+KTogdm9pZCB7XG5cdFx0dGhpcy5saXN0ZW5lcnMuZ2V0KGV2ZW50KVxuXHRcdCAgICA/LmRlbGV0ZShoYW5kbGVyKTtcblx0fVxuXG5cdGVtaXQ8VCA9IGFueT4oZXZlbnQ6IHN0cmluZywgcGF5bG9hZDogVCk6IHZvaWQge1xuXHRcdHRoaXMubGlzdGVuZXJzLmdldChldmVudClcblx0XHQgICAgPy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlcihwYXlsb2FkKSk7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtMeXJhU2NyaXB0UHJvZ3JhbX0gZnJvbSBcIi4uL2NvcmUvcHJvZ3JhbVwiO1xuaW1wb3J0IHtmZXRjaFNvdXJjZX0gZnJvbSBcIi4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcbmltcG9ydCB7RW52aXJvbm1lbnQsIEluc3RhbmNlfSBmcm9tIFwiLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuaW1wb3J0IHtjYWxsSW5zdGFuY2VNZXRob2R9IGZyb20gXCIuLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX3J1bnRpbWVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBFbmdpbmUge1xuXHRleGVjdXRlRW50cnlGaWxlKHVybDogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG5cblx0Y3JlYXRlSW5zdGFuY2UoY2xhc3NOYW1lOiBzdHJpbmcpOiBJbnN0YW5jZTtcblxuXHRjYWxsSW5zdGFuY2VNZXRob2QobWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBBcnJheTxhbnk+KTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgV2ViTHlyYVNjcmlwdCBpbXBsZW1lbnRzIEVuZ2luZSB7XG5cdHByaXZhdGUgcmVhZG9ubHkgcHJvZ3JhbTogTHlyYVNjcmlwdFByb2dyYW07XG5cdHByaXZhdGUgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5ID0gbmV3IE9iamVjdFJlZ2lzdHJ5KCk7XG5cdHByaXZhdGUgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KCk7XG5cdHByaXZhdGUgcm9vdEluc3RhbmNlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSkge1xuXHRcdHRoaXMucHJvZ3JhbSA9IG5ldyBMeXJhU2NyaXB0UHJvZ3JhbShpc0RlYnVnKTtcblx0fVxuXG5cdGNyZWF0ZUluc3RhbmNlKGNsYXNzTmFtZTogc3RyaW5nKTogSW5zdGFuY2Uge1xuXHRcdHJldHVybiBuZXcgSW5zdGFuY2UodGhpcy5vYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChjbGFzc05hbWUpKTtcblx0fVxuXG5cdGNhbGxJbnN0YW5jZU1ldGhvZChtZXRob2ROYW1lOiBzdHJpbmcsIGFyZ3M6IGFueVtdKTogYW55IHtcblx0XHRpZiAodGhpcy5yb290SW5zdGFuY2UgPT09IG51bGwpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignTm8gcm9vdCBpbnN0YW5jZSBhdmFpbGFibGUuJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNhbGxJbnN0YW5jZU1ldGhvZChcblx0XHRcdHRoaXMucm9vdEluc3RhbmNlLFxuXHRcdFx0dGhpcy5yb290SW5zdGFuY2UuX19jbGFzc0RlZi5maW5kTWV0aG9kKG1ldGhvZE5hbWUpLFxuXHRcdFx0YXJncyxcblx0XHRcdHRoaXMub2JqZWN0UmVnaXN0cnksXG5cdFx0XHR0aGlzLmVudmlyb25tZW50XG5cdFx0KTtcblx0fVxuXG5cdGFzeW5jIGV4ZWN1dGVFbnRyeUZpbGUodXJsOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHRoaXMucHJvZ3JhbS5leGVjdXRlKGF3YWl0IGZldGNoU291cmNlKHVybCkpXG5cdFx0ICAgICAgICAgICAudGhlbigoKSA9PiB7XG5cdFx0XHQgICAgICAgICAgIHRoaXMub2JqZWN0UmVnaXN0cnkgPSB0aGlzLnByb2dyYW0uZ2V0R2xvYmFsT2JqZWN0UmVnaXN0cnkoKTtcblx0XHRcdCAgICAgICAgICAgdGhpcy5lbnZpcm9ubWVudCA9IHRoaXMucHJvZ3JhbS5nZXRHbG9iYWxFbnZpcm9ubWVudCgpO1xuXHRcdCAgICAgICAgICAgfSlcblx0XHQgICAgICAgICAgIC50aGVuKCgpID0+IHtcblx0XHRcdCAgICAgICAgICAgdGhpcy5yb290SW5zdGFuY2UgPSB0aGlzLmNyZWF0ZUluc3RhbmNlKGNsYXNzTmFtZSk7XG5cdFx0ICAgICAgICAgICB9KTtcblx0fVxufVxuIiwKICAgICIvLy8gPHJlZmVyZW5jZSBsaWI9XCJkb21cIiAvPlxuXG5pbXBvcnQgdHlwZSB7Vk5vZGV9IGZyb20gXCIuLi9jb3JlL3Zkb20vdmRvbVwiO1xuaW1wb3J0IHtMYW1iZGFGdW5jdGlvbkNhbGx9IGZyb20gXCIuLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX3J1bnRpbWVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBFbGVtZW50Q3JlYXRvciB7XG5cdGNyZWF0ZUVsZW1lbnQodk5vZGU6IFZOb2RlKTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgSFRNTEVsZW1lbnRDcmVhdG9yIGltcGxlbWVudHMgRWxlbWVudENyZWF0b3Ige1xuXHRjcmVhdGVFbGVtZW50KHZOb2RlOiBWTm9kZSk6IE5vZGUge1xuXHRcdGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh2Tm9kZS50YWcpIGFzIEhUTUxFbGVtZW50O1xuXG5cdFx0bGV0IHRleHRCdWZmZXI6IHN0cmluZ1tdID0gW107XG5cblx0XHRmdW5jdGlvbiBmbHVzaFRleHRCdWZmZXIoKTogdm9pZCB7XG5cdFx0XHRpZiAodGV4dEJ1ZmZlci5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGNvbnN0IHRleHROb2RlOiBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuXHRcdFx0XHR0ZXh0Tm9kZS50ZXh0Q29udGVudCA9IHRleHRCdWZmZXIuam9pbignJyk7XG5cdFx0XHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuXHRcdFx0XHR0ZXh0QnVmZmVyID0gW107XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBba2V5LCBmbl0gb2YgT2JqZWN0LmVudHJpZXModk5vZGUucHJvcHMpKSB7XG5cdFx0XHRpZiAoa2V5LnN0YXJ0c1dpdGgoJ29uJykgJiYgZm4gaW5zdGFuY2VvZiBMYW1iZGFGdW5jdGlvbkNhbGwpIHtcblx0XHRcdFx0Y29uc3QgZXZlbnQ6IHN0cmluZyA9IGtleS5zbGljZSgyKVxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCB0aGlzLndyYXBDYWxsYmFjayhmbikgYXMgRXZlbnRMaXN0ZW5lcik7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiB2Tm9kZS5jaGlsZHJlbikge1xuXHRcdFx0aWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0dGV4dEJ1ZmZlci5wdXNoKGNoaWxkKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVFbGVtZW50KGNoaWxkKSBhcyBIVE1MRWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fVxuXG5cdHByaXZhdGUgd3JhcENhbGxiYWNrKGZuOiBMYW1iZGFGdW5jdGlvbkNhbGwpIHtcblx0XHRyZXR1cm4gKCk6IHZvaWQgPT4ge1xuXHRcdFx0Zm4uZXZhbENhbGwobnVsbCk7XG5cdFx0fVxuXHR9XG59XG4iLAogICAgImltcG9ydCB7dHlwZSBFbmdpbmUsIFdlYkx5cmFTY3JpcHR9IGZyb20gXCIuL2VuZ2luZVwiO1xuaW1wb3J0IHtIVE1MRWxlbWVudENyZWF0b3J9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHR5cGUge1ZOb2RlfSBmcm9tIFwiLi4vY29yZS92ZG9tL3Zkb21cIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0QXBwbGljYXRpb25SdW50aW1lIHtcblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxuXHRcdHByb3RlY3RlZCByZWFkb25seSBlbmdpbmU6IEVuZ2luZVxuXHQpIHtcblxuXHR9XG5cblx0cHJvdGVjdGVkIGNhbGxNZXRob2QobWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSA9IFtdKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5lbmdpbmUuY2FsbEluc3RhbmNlTWV0aG9kKG1ldGhvZE5hbWUsIGFyZ3MpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBXZWJBcHBsaWNhdGlvblJ1bnRpbWUgZXh0ZW5kcyBBYnN0cmFjdEFwcGxpY2F0aW9uUnVudGltZSB7XG5cdHByaXZhdGUgY3VycmVudFZOb2RlOiBWTm9kZSB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIGlzUmVuZGVyaW5nOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgcmVuZGVyRnVuY3Rpb246ICgoKSA9PiBWTm9kZSkgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IG1vdW50UG9pbnQ6IEhUTUxFbGVtZW50LFxuXHQgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRDcmVhdG9yOiBIVE1MRWxlbWVudENyZWF0b3IgPSBuZXcgSFRNTEVsZW1lbnRDcmVhdG9yKCkpIHtcblx0XHRzdXBlcihuZXcgV2ViTHlyYVNjcmlwdCgpKTtcblx0fVxuXG5cdGFzeW5jIHN0YXJ0KHVybDogc3RyaW5nLCBjbGFzc05hbWUgPSAnQXBwJyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdGF3YWl0IHRoaXMuZW5naW5lLmV4ZWN1dGVFbnRyeUZpbGUodXJsLCBjbGFzc05hbWUpO1xuXG5cdFx0dGhpcy5yZW5kZXJGdW5jdGlvbiA9ICgpID0+IHRoaXMuY2FsbFJlbmRlcigpO1xuXG5cdFx0dGhpcy5wZXJmb3JtUmVuZGVyKCk7XG5cdH1cblxuXHQvLyBXaXJkIHZvbSBTdG9yZSBhdWZnZXJ1ZmVuXG5cdHJlcXVlc3RSZW5kZXIoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNSZW5kZXJpbmcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG5cdFx0XHR0aGlzLnBlcmZvcm1SZW5kZXIoKTtcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgY2FsbFJlbmRlcigpOiBWTm9kZSB7XG5cdFx0cmV0dXJuIHRoaXMuY2FsbE1ldGhvZCgncmVuZGVyJywgW10pIGFzIFZOb2RlO1xuXHR9XG5cblx0cHJpdmF0ZSBwZXJmb3JtUmVuZGVyKCk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5yZW5kZXJGdW5jdGlvbikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuaXNSZW5kZXJpbmcgPSB0cnVlO1xuXG5cdFx0Y29uc3QgbmV4dFZOb2RlOiBWTm9kZSA9IHRoaXMucmVuZGVyRnVuY3Rpb24oKTtcblxuXG5cdFx0dGhpcy5wYXRjaCh0aGlzLmN1cnJlbnRWTm9kZSwgbmV4dFZOb2RlKTtcblxuXHRcdHRoaXMuY3VycmVudFZOb2RlID0gbmV4dFZOb2RlO1xuXG5cdFx0dGhpcy5pc1JlbmRlcmluZyA9IGZhbHNlO1xuXHR9XG5cblx0cHJpdmF0ZSBwYXRjaChvbGRWTm9kZTogVk5vZGUgfCBudWxsLCBuZXdWTm9kZTogVk5vZGUpOiB2b2lkIHtcblxuXHRcdC8vIEVyc3RtYWwgc2ltcGVsOiBGdWxsIFJlcGxhY2Vcblx0XHQvLyBTcMOkdGVyIGRpZmYgKyBwYXRjaFxuXG5cdFx0dGhpcy5tb3VudFBvaW50LmlubmVySFRNTCA9ICcnO1xuXHRcdGNvbnN0IGVsZW1lbnQ6IE5vZGUgPSB0aGlzLmVsZW1lbnRDcmVhdG9yLmNyZWF0ZUVsZW1lbnQobmV3Vk5vZGUpO1xuXHRcdHRoaXMubW91bnRQb2ludC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4vY29yZS9wYXJzZXIvcGFyc2VyXCI7XG5pbXBvcnQge3dyYXBKc0Vycm9yfSBmcm9tIFwiLi9jb3JlL2Vycm9yc1wiO1xuaW1wb3J0IHtmZXRjaFNvdXJjZSwgU291cmNlfSBmcm9tIFwiLi9jb3JlL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5pbXBvcnQge0FTVE5vZGV9IGZyb20gXCIuL2NvcmUvYXN0XCI7XG5pbXBvcnQge1Rva2VuaXplcn0gZnJvbSBcIi4vY29yZS90b2tlbml6ZXIvdG9rZW5pemVyXCI7XG5pbXBvcnQge1Rva2VufSBmcm9tIFwiLi9jb3JlL2dyYW1tYXJcIjtcbmltcG9ydCB7THlyYVNjcmlwdFByb2dyYW19IGZyb20gXCIuL2NvcmUvcHJvZ3JhbVwiO1xuaW1wb3J0IHtFdmVudFBpcGVsaW5lfSBmcm9tIFwiLi9jb3JlL2V2ZW50L3BpcGVsaW5lXCI7XG5pbXBvcnQge2JpbmRTdGF0ZVRvRXZlbnQsIFN0YXRlfSBmcm9tIFwiLi9jb3JlL2V2ZW50L3N0YXRlXCI7XG5cbmV4cG9ydCB7V2ViTHlyYVNjcmlwdH0gZnJvbSBcIi4vaG9zdC9lbmdpbmVcIjtcbmV4cG9ydCB7V2ViQXBwbGljYXRpb25SdW50aW1lfSBmcm9tIFwiLi9ob3N0L3J1bnRpbWVcIjtcblxuY29uc3QgTHlyYSA9IHtcblx0U291cmNlLFxuXHRQYXJzZXIsXG5cdFRva2VuaXplcixcblx0RXZlbnRQaXBlbGluZSxcblx0U3RhdGUsXG5cdGJpbmRTdGF0ZVRvRXZlbnQsXG5cdFByb2dyYW06IChpc0RlYnVnOiBib29sZWFuKTogTHlyYVNjcmlwdFByb2dyYW0gPT4gUHJvZ3JhbShpc0RlYnVnKSxcblx0ZXhlY3V0ZTogKHNvdXJjZTogU291cmNlLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+ID0+IGV4ZWN1dGUoc291cmNlLCBpc0RlYnVnKSxcblx0ZXhlY3V0ZUZyb21TdHJpbmc6IChjb2RlOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4gPT4gZXhlY3V0ZUZyb21TdHJpbmcoY29kZSwgaXNEZWJ1ZyksXG5cdGV4ZWN1dGVGcm9tVXJsOiBhc3luYyAodXJsOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4gPT4gZXhlY3V0ZUZyb21VcmwodXJsLCBpc0RlYnVnKSxcblx0ZXhlY3V0ZVRlc3Q6IChzb3VyY2U6IFNvdXJjZSwgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiBleGVjdXRlVGVzdChzb3VyY2UsIGlzRGVidWcpLFxuXHRleGVjdXRlVGVzdFN0cmluZzogKGNvZGU6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiBleGVjdXRlVGVzdFN0cmluZyhjb2RlLCBpc0RlYnVnKSxcblx0ZXhlY3V0ZVRlc3RVcmw6ICh1cmw6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiBleGVjdXRlVGVzdFVybCh1cmwsIGlzRGVidWcpLFxuXHR0b2tlbml6ZTogKHNvdXJjZTogU291cmNlKTogVG9rZW5bXSA9PiB0b2tlbml6ZShzb3VyY2UpLFxuXHR0b2tlbml6ZVVybDogKHVybDogc3RyaW5nKTogUHJvbWlzZTxUb2tlbltdPiA9PiB0b2tlbml6ZVVybCh1cmwpLFxuXHRwYXJzZVRyZWU6IChzb3VyY2U6IFNvdXJjZSk6IEFTVE5vZGUgPT4gcGFyc2VUcmVlKHNvdXJjZSksXG5cdHBhcnNlVHJlZVVybDogKHVybDogc3RyaW5nKTogUHJvbWlzZTxBU1ROb2RlPiA9PiBwYXJzZVRyZWVVcmwodXJsKSxcbn07XG5cbmZ1bmN0aW9uIFByb2dyYW0oaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogTHlyYVNjcmlwdFByb2dyYW0ge1xuXHRyZXR1cm4gbmV3IEx5cmFTY3JpcHRQcm9ncmFtKGlzRGVidWcpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlKHNvdXJjZTogU291cmNlLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgUHJvZ3JhbShpc0RlYnVnKVxuXHRcdFx0LmV4ZWN1dGUoc291cmNlKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcih3cmFwSnNFcnJvcihlcnJvciwgc291cmNlKVxuXHRcdFx0XHQgICAgICAgICAgICAgIC5mb3JtYXQoKSk7XG5cdFx0fVxuXHRcdHRocm93IGVycm9yO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVGcm9tVXJsKHVybDogc3RyaW5nLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0cmV0dXJuIGF3YWl0IGV4ZWN1dGUoYXdhaXQgZmV0Y2hTb3VyY2UodXJsKSwgaXNEZWJ1Zyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVGcm9tU3RyaW5nKGNvZGU6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHNvdXJjZSA9IG5ldyBTb3VyY2UoY29kZSk7XG5cblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgUHJvZ3JhbShpc0RlYnVnKVxuXHRcdFx0LmV4ZWN1dGUoc291cmNlKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcih3cmFwSnNFcnJvcihlcnJvciwgc291cmNlKVxuXHRcdFx0XHQgICAgICAgICAgICAgIC5mb3JtYXQoKSk7XG5cdFx0fVxuXHRcdHRocm93IGVycm9yO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVUZXN0KHNvdXJjZTogU291cmNlLCBpc0RlYnVnID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgUHJvZ3JhbShpc0RlYnVnKVxuXHRcdFx0LmV4ZWN1dGVUZXN0KHNvdXJjZSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3Iod3JhcEpzRXJyb3IoZXJyb3IsIHNvdXJjZSlcblx0XHRcdFx0ICAgICAgICAgICAgICAuZm9ybWF0KCkpO1xuXHRcdH1cblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlVGVzdFVybCh1cmw6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdHJldHVybiBhd2FpdCBleGVjdXRlVGVzdChhd2FpdCBmZXRjaFNvdXJjZSh1cmwpLCBpc0RlYnVnKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZVRlc3RTdHJpbmcoY29kZTogc3RyaW5nLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgc291cmNlID0gbmV3IFNvdXJjZShjb2RlKTtcblxuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBQcm9ncmFtKGlzRGVidWcpXG5cdFx0XHQuZXhlY3V0ZVRlc3Qoc291cmNlKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcih3cmFwSnNFcnJvcihlcnJvciwgc291cmNlKVxuXHRcdFx0XHQgICAgICAgICAgICAgIC5mb3JtYXQoKSk7XG5cdFx0fVxuXHRcdHRocm93IGVycm9yO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbml6ZShzb3VyY2U6IFNvdXJjZSk6IFRva2VuW10ge1xuXHRyZXR1cm4gbmV3IFRva2VuaXplcihzb3VyY2UpLnRva2VuaXplKCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0b2tlbml6ZVVybCh1cmw6IHN0cmluZyk6IFByb21pc2U8VG9rZW5bXT4ge1xuXHRyZXR1cm4gdG9rZW5pemUoYXdhaXQgZmV0Y2hTb3VyY2UodXJsKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRyZWUoc291cmNlOiBTb3VyY2UpOiBBU1ROb2RlIHtcblx0cmV0dXJuIG5ldyBQYXJzZXIoc291cmNlKS5wYXJzZSgpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGFyc2VUcmVlVXJsKHVybDogc3RyaW5nKTogUHJvbWlzZTxBU1ROb2RlPiB7XG5cdHJldHVybiBwYXJzZVRyZWUoYXdhaXQgZmV0Y2hTb3VyY2UodXJsKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEx5cmE7XG4iCiAgXSwKICAibWFwcGluZ3MiOiAiO0FBRU8sTUFBTSxRQUFRO0FBQUEsU0FDYixTQUFpQjtBQUFBLFNBQ2pCLE9BQWU7QUFBQSxTQUNmLE1BQWM7QUFBQSxTQUNkLE9BQWU7QUFBQSxTQUNmLFFBQWdCO0FBQUEsU0FDaEIsWUFBb0I7QUFBQSxTQUNwQixVQUFrQjtBQUFBLFNBQ2xCLGFBQXFCO0FBQUEsU0FDckIsY0FBc0I7QUFBQSxTQUN0QixNQUFjO0FBQUEsU0FDZCxPQUFlO0FBQUEsU0FDZixTQUFpQjtBQUFBLFNBQ2pCLFVBQWtCO0FBQUEsU0FDbEIsU0FBaUI7QUFBQSxTQUNqQixXQUFtQjtBQUFBLFNBQ25CLFNBQWlCO0FBQUEsU0FDakIsUUFBZ0I7QUFBQSxTQUNoQixPQUFlO0FBQUEsU0FDZixRQUFnQjtBQUFBLFNBQ2hCLEtBQWE7QUFBQSxTQUNiLE9BQWU7QUFBQSxTQUNmLFFBQWdCO0FBQUEsU0FDaEIsVUFBa0I7QUFBQSxTQUNsQixVQUFrQjtBQUFBLFNBQ2xCLEtBQWE7QUFBQSxTQUNiLE9BQWU7QUFBQSxTQUNmLE9BQWU7QUFBQSxTQUVmLHNCQUE4QjtBQUFBLFNBQzlCLHVCQUErQjtBQUFBLFNBQy9CLGFBQXFCO0FBQUEsU0FDckIsY0FBc0I7QUFBQSxTQUN0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
