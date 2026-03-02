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
        if ([GRAMMAR.CLASS].includes(identifier.value)) {
          identifier.type = TokenType.IDENTIFIER;
        }
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
      fn.evalCall(toLyraValue(value));
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

// language/src/library/classes/boolean.ts
var CLASS_NAME7 = "Boolean";

class LyraBoolean extends LyraNativeObject {
  value;
  constructor(value) {
    super(CLASS_NAME7);
    this.value = value;
  }
  toString() {
    return this.value.toString();
  }
}

class BooleanType extends NativeClass {
  static CLASS_NAME = CLASS_NAME7;
  constructor() {
    super(CLASS_NAME7, LyraBoolean, new Source(`
class ${CLASS_NAME7} {
	public constructor(value);

	public toString(): string;
}`));
    this.isAutoloadAble = true;
  }
}

// language/src/library/native_classes.ts
class NativeClasses {
  registry = new Map;
  constructor() {
    this.registry.set(StringType.CLASS_NAME, new StringType);
    this.registry.set(NumberType.CLASS_NAME, new NumberType);
    this.registry.set(BooleanType.CLASS_NAME, new BooleanType);
    this.registry.set(ArrayType.CLASS_NAME, new ArrayType);
    this.registry.set(ArrayIteratorType.CLASS_NAME, new ArrayIteratorType);
    this.registry.set(System.CLASS_NAME, new System);
    this.registry.set(Assert.CLASS_NAME, new Assert);
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
  functionEnv;
  objectRegistry;
  eventPipeline;
  thisValue = null;
  constructor(node, objectRegistry, functionEnv, eventPipeline, thisValue = null) {
    this.node = node;
    this.objectRegistry = objectRegistry;
    this.functionEnv = functionEnv;
    this.eventPipeline = eventPipeline;
    this.thisValue = thisValue;
  }
  getCallNode() {
    if (!(this.node instanceof ASTCallNode)) {
      throwRuntimeError(`Invalid native function call ${this.node.type}.`, this.node.span);
    }
    return this.node;
  }
  getLambdaNode() {
    if (!(this.node instanceof ASTLambdaNode)) {
      throwRuntimeError(`Invalid lambda call ${this.node.type}.`, this.node.span);
    }
    return this.node;
  }
}

class LambdaFunctionCall extends AbstractFunctionCall {
  evalCall(...args) {
    const node = this.getLambdaNode();
    const closureEnv = new Environment(this.functionEnv);
    for (let i = 0;i < node.parameters.length; i++) {
      const parameter2 = node.parameters[i] || null;
      if (!parameter2) {
        continue;
      }
      closureEnv.define(parameter2.name, args[i]);
    }
    return evalReturn(node.children, this.objectRegistry, closureEnv, this.eventPipeline, this.thisValue, node.returnType);
  }
}

class NativeFunctionCall extends AbstractFunctionCall {
  evalCall(...args) {
    const callNode = this.getCallNode();
    let result = this.resolveCall()(...args);
    if (result instanceof LyraNativeObject) {
      result = wrapNativeInstance(result, this.objectRegistry);
    } else {
      result = returnValue(result);
    }
    return evalReturn([result], this.objectRegistry, this.functionEnv, this.eventPipeline, this.thisValue, globalFunctionTypeRegistry.get(callNode.callee.name).returnType);
  }
  resolveCall() {
    const node = this.getCallNode();
    if (node === null) {
      throwRuntimeError("Invalid function call.");
    }
    return evalExpression(node.callee, this.objectRegistry, this.functionEnv, this.eventPipeline, this.thisValue)[node.callee.name];
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
        return evalLambda(expr, objectRegistry, environment, eventPipeline, thisValue);
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
function evalLambda(node, objectRegistry, lambdaEnv, eventPipeline, thisValue = null) {
  return new LambdaFunctionCall(node, objectRegistry, lambdaEnv, eventPipeline, thisValue);
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
    return functionCall.evalCall(...args);
  }
  return new NativeFunctionCall(expr, objectRegistry, environment, eventPipeline, thisValue).evalCall(...args);
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
  const isComponent = objectRegistry.classes.has(node.tag);
  const children = [];
  let textBuffer = [];
  const flushTextBuffer = () => {
    if (textBuffer.length === 0) {
      return;
    }
    children.push({
      type: "text",
      value: textBuffer.join(""),
      dom: undefined
    });
    textBuffer = [];
  };
  for (const child of node.children) {
    if (child instanceof ASTVDomTextNode) {
      textBuffer.push(child.value);
    } else if (child instanceof ASTVDomNode) {
      children.push(evalVDomNode(child, objectRegistry, environment, eventPipeline, thisValue));
    }
    flushTextBuffer();
  }
  flushTextBuffer();
  if (isComponent) {
    return {
      type: "component",
      className: node.tag,
      props: { ...props, children },
      subTree: undefined,
      instance: undefined,
      dom: undefined
    };
  }
  return {
    type: "element",
    tag: node.tag,
    props,
    children,
    dom: undefined
  };
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
      value = parsePrimary(parser);
    }
    props.set(nameToken.value, value);
    parser.consumeIfText();
  }
  if (parser.peekIs(GRAMMAR.XML_CLOSE_TAG)) {
    parser.next();
    const node2 = new ASTVDomNode(tag, props, []);
    node2.span = spanFrom(startToken, parser.peek());
    return node2;
  }
  parser.expectOperator(GRAMMAR.GREATER_THAN);
  const children = [];
  while (!parser.peekIs(GRAMMAR.XML_OPEN_CLOSE_TAG)) {
    if (parser.peek().value === GRAMMAR.LESS_THAN) {
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
    TokenType.NUMBER,
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
  constructor(names, url = ".") {
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
    const dependencies = this.collectClassDependencies(ast);
    for (const dependency of dependencies.values()) {
      if (dependency.url === ".") {
        continue;
      }
      await this.parseDependency(dependency);
      await this.collectDependencies(dependency, dependencies);
    }
    return dependencies;
  }
  async collectDefaultDependencies() {
    const dependencies = this.defaultDependencies();
    for (const dependency of dependencies.values()) {
      await this.parseDependency(dependency);
      await this.collectDependencies(dependency, dependencies);
    }
    return dependencies;
  }
  defaultDependencies() {
    const dependencies = [
      new Dependency(["Iterator", "Iterable"], "/library/contracts.lyra")
    ];
    const defaultDependencies = new Map;
    for (const dependency of dependencies) {
      defaultDependencies.set(dependency.url, dependency);
    }
    return defaultDependencies;
  }
  collectClassDependencies(ast) {
    const classDependencies = new Map;
    for (const node of ast.children) {
      if (node.type === ASTNodeType.IMPORT) {
        if (node instanceof ASTImportNode) {
          if (node.from === null) {
            classDependencies.set(node.names[0], new Dependency(node.names));
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
  async parseFile(url) {
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
  async linkSources(ast) {
    return await this.dependencyLoader.collectDefaultDependencies().then((dependencies) => {
      this.loadDependencies(dependencies);
    }).then(async () => {
      const dependencies = await this.dependencyLoader.collectProgramDependencies(ast);
      this.loadDependencies(dependencies);
      this.loadNativeClassesFromAST(ast);
    });
  }
  loadDependencies(dependencies) {
    for (const dependency of dependencies.values()) {
      if (dependency.url === ".") {
        this.loadNativeClassFromDependency(dependency);
        continue;
      }
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
  }
  loadNativeClass(className, span = null) {
    const nativeClass = nativeClasses2.registry.get(className) || null;
    if (!nativeClass) {
      throwDependencyError(`Unknown native class ${className}`, span);
    }
    const classDef = nativeClass.getClassDefinition();
    if (this.objectRegistry.classes.has(className)) {
      return;
    }
    this.objectRegistry.classes.set(className, classDef);
    this.environment.define(className, classDef);
  }
  loadNativeClassesFromAST(ast) {
    for (const node of ast.children) {
      if (node instanceof ASTImportNode) {
        if (node.from === null) {
          const className = node.names[0];
          if (!className) {
            throwDependencyError(`Invalid import node ${node.type}.`, node?.span);
          }
          this.loadNativeClass(className, node.span);
        }
      }
    }
  }
  loadNativeClassFromDependency(dependency) {
    const className = dependency.names[0];
    if (!className) {
      throwDependencyError(`Invalid import from dependency.`);
    }
    this.loadNativeClass(className);
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
    if (vNode.type === "text") {
      const textNode = document.createTextNode(vNode.value);
      vNode.dom = textNode;
      return textNode;
    }
    if (vNode.type === "component") {
      vNode.instance = this.applicationRuntime.createInstance(vNode.className);
      for (const [key, value] of Object.entries(vNode.props ?? {})) {
        if (key === "children") {
          continue;
        }
        if (vNode.instance.hasPublicProperty(key)) {
          vNode.instance.setPublicProperty(key, value);
        }
      }
      if (!vNode.subTree) {
        vNode.subTree = this.applicationRuntime.renderComponent(vNode.instance);
      }
      this.vdom.register(vNode.instance, vNode.subTree);
      const element2 = this.create(vNode.subTree);
      vNode.dom = element2;
      return element2;
    }
    const element = document.createElement(vNode.tag);
    vNode.dom = element;
    for (const [key, value] of Object.entries(vNode.props ?? {})) {
      if (events_default2.isEvent(key)) {
        this.applicationRuntime.addEventHandler(element, key, value);
      } else {
        element.setAttribute(key, String(value));
      }
    }
    for (const child of vNode.children) {
      element.appendChild(this.create(child));
    }
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
  patch(oldNode, newNode) {
    if (!oldNode) {
      const element = this.elementCreator.create(newNode);
      this.mountPoint.appendChild(element);
      newNode.dom = element;
      return;
    }
    this.patchNode(this.mountPoint, oldNode, newNode);
  }
  patchNode(parent, oldNode, newNode) {
    if (oldNode.type === "text" && newNode.type === "text") {
      const textNode = oldNode.dom;
      if (textNode.textContent !== newNode.value) {
        textNode.textContent = newNode.value;
      }
      newNode.dom = textNode;
      return;
    }
    if (oldNode.type !== newNode.type) {
      const newElement = this.elementCreator.create(newNode);
      parent.replaceChild(newElement, oldNode.dom);
      newNode.dom = newElement;
      return;
    }
    if (newNode.type === "component") {
      const newElement = this.elementCreator.create(newNode);
      if (!oldNode.dom) {
        parent.appendChild(newElement);
      } else if (oldNode.dom !== newElement) {
        parent.replaceChild(newElement, oldNode.dom);
      }
      newNode.dom = newElement;
      return;
    }
    const dom = oldNode.dom;
    newNode.dom = dom;
    if (oldNode.type !== "text" && newNode.type !== "text") {
      this.updateProperties(dom, oldNode.props ?? {}, newNode.props ?? {});
      if (oldNode.type === "element" && newNode.type === "element") {
        this.patchChildren(dom, oldNode.children, newNode.children);
      }
    }
  }
  updateProperties(element, oldProperties, newProperties) {
    for (const key in oldProperties) {
      if (!(key in newProperties)) {
        if (events_default2.isEvent(key)) {
          this.applicationRuntime.removeEventHandler(element, key);
        } else {
          element.removeAttribute(key);
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
    const oldLength = oldChildren.length;
    const newLength = newChildren.length;
    const commonLength = Math.min(oldLength, newLength);
    for (let i = 0;i < commonLength; i++) {
      this.patchNode(parent, oldChildren[i], newChildren[i]);
    }
    for (let i = commonLength;i < newLength; i++) {
      const newChild = newChildren[i];
      const newElement = this.elementCreator.create(newChild);
      parent.appendChild(newElement);
      newChild.dom = newElement;
    }
    for (let i = oldLength - 1;i >= newLength; i--) {
      const oldChild = oldChildren[i];
      const dom = oldChild.dom;
      if (dom) {
        parent.removeChild(dom);
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
          handler.evalCall(this.createEvent(event));
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
  unregister(instance) {
    this.instanceMap.delete(instance.id);
  }
  findNodeByComponent(instance) {
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
  isRendering = false;
  constructor(mountPoint, isDebug = false, eventPipeline = new EventPipeline, eventHandlerRegistry = new EventHandlerRegistry) {
    super(new WebLyraScript(eventPipeline, isDebug), eventPipeline, eventHandlerRegistry);
    this.patcher = new HTMLElementPatcher(mountPoint, this, this.vdom);
    this.exposeRuntime();
  }
  async start(url, className = "Program") {
    await this.engine.executeEntryFile(url, className);
    this.registerEventListeners();
    this.requestComponentRender(this.engine.getRootInstance());
  }
  requestComponentRender(instance, oldChild) {
    if (this.isRendering) {
      return;
    }
    queueMicrotask(() => this.performComponentRender(instance, oldChild));
  }
  performComponentRender(instance, oldChild = null) {
    this.isRendering = true;
    const nextChild = this.renderComponent(instance);
    this.patcher.patch(oldChild, nextChild);
    this.vdom.register(instance, nextChild);
    instance.markClean(this.eventPipeline);
    this.isRendering = false;
  }
  registerEventListeners() {
    this.eventPipeline.on(events_default2.DOM_EVENT, ({ invoke }) => {
      invoke();
    });
    this.eventPipeline.on(events_default.LYRA_INSTANCE_DIRTY_STATE, ({ instance }) => {
      this.requestComponentRender(instance, this.vdom.findNodeByComponent(instance));
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

//# debugId=C0E6C333530292B164756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibGFuZ3VhZ2Uvc3JjL2NvcmUvZ3JhbW1hci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9hc3QudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvdG9rZW5pemVyL3Rva2VuaXplci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9lcnJvcnMudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvbmF0aXZlX2NsYXNzLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX2NvbnZlcnNpb24udHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9zdHJpbmcudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9zeXN0ZW0udHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9hc3NlcnQudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9udW1iZXIudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9hcnJheS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9ldmVudC9zdGF0ZS50cyIsICJsYW5ndWFnZS9zcmMvbGlicmFyeS9jbGFzc2VzL3N0YXRlLnRzIiwgImxhbmd1YWdlL3NyYy9saWJyYXJ5L2NsYXNzZXMvZXZlbnQudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9ib29sZWFuLnRzIiwgImxhbmd1YWdlL3NyYy9saWJyYXJ5L25hdGl2ZV9jbGFzc2VzLnRzIiwgImxhbmd1YWdlL3NyYy9saWJyYXJ5L25hdGl2ZV9mdW5jdGlvbnMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvdHlwZXMvdHlwZV9vYmplY3RzLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL3R5cGVzL2F1dG9ib3hpbmcudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcnVudGltZS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9ldmVudC9ldmVudHMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0cy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9wYXJzZXIvcGFyc2VyX3N0YXRtZW50cy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9wYXJzZXIvcGFyc2VyLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5LnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL3R5cGVzL3R5cGVjaGVja2VyLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2xpbmtlci9kZXBlbmRlbmNpZXMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvbGlua2VyL2xpbmtlci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS90ZXN0cy90ZXN0c3VpdGVzLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2xvYWRlcnMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvZXZlbnQvcGlwZWxpbmUudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvcHJvZ3JhbS50cyIsICJsYW5ndWFnZS9zcmMvaG9zdC9ldmVudHMudHMiLCAibGFuZ3VhZ2Uvc3JjL2hvc3QvZG9tLnRzIiwgImxhbmd1YWdlL3NyYy9ob3N0L2VuZ2luZS50cyIsICJsYW5ndWFnZS9zcmMvaG9zdC9yZWdpc3RyeS50cyIsICJsYW5ndWFnZS9zcmMvaG9zdC9ydW50aW1lLnRzIiwgImxhbmd1YWdlL3NyYy9pbmRleC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICJpbXBvcnQgdHlwZSB7U291cmNlfSBmcm9tIFwiLi9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5leHBvcnQgY2xhc3MgR1JBTU1BUiB7XG5cdHN0YXRpYyBJTVBPUlQ6IHN0cmluZyA9ICdpbXBvcnQnO1xuXHRzdGF0aWMgRlJPTTogc3RyaW5nID0gJ2Zyb20nO1xuXHRzdGF0aWMgTEVUOiBzdHJpbmcgPSAnbGV0Jztcblx0c3RhdGljIE9QRU46IHN0cmluZyA9ICdvcGVuJztcblx0c3RhdGljIENMQVNTOiBzdHJpbmcgPSAnY2xhc3MnO1xuXHRzdGF0aWMgSU5URVJGQUNFOiBzdHJpbmcgPSAnaW50ZXJmYWNlJztcblx0c3RhdGljIEVYVEVORFM6IHN0cmluZyA9ICdleHRlbmRzJztcblx0c3RhdGljIElNUExFTUVOVFM6IHN0cmluZyA9ICdpbXBsZW1lbnRzJztcblx0c3RhdGljIENPTlNUUlVDVE9SOiBzdHJpbmcgPSAnY29uc3RydWN0b3InO1xuXHRzdGF0aWMgTkVXOiBzdHJpbmcgPSAnbmV3Jztcblx0c3RhdGljIFRISVM6IHN0cmluZyA9ICd0aGlzJztcblx0c3RhdGljIFBVQkxJQzogc3RyaW5nID0gJ3B1YmxpYyc7XG5cdHN0YXRpYyBQUklWQVRFOiBzdHJpbmcgPSAncHJpdmF0ZSc7XG5cdHN0YXRpYyBTVEFUSUM6IHN0cmluZyA9ICdzdGF0aWMnO1xuXHRzdGF0aWMgUkVBRE9OTFk6IHN0cmluZyA9ICdyZWFkb25seSc7XG5cdHN0YXRpYyBSRVRVUk46IHN0cmluZyA9ICdyZXR1cm4nO1xuXHRzdGF0aWMgU1VQRVI6IHN0cmluZyA9ICdzdXBlcic7XG5cdHN0YXRpYyBUUlVFOiBzdHJpbmcgPSAndHJ1ZSc7XG5cdHN0YXRpYyBGQUxTRTogc3RyaW5nID0gJ2ZhbHNlJztcblx0c3RhdGljIElGOiBzdHJpbmcgPSAnaWYnO1xuXHRzdGF0aWMgRUxTRTogc3RyaW5nID0gJ2Vsc2UnO1xuXHRzdGF0aWMgTUFUQ0g6IHN0cmluZyA9ICdtYXRjaCc7XG5cdHN0YXRpYyBERUZBVUxUOiBzdHJpbmcgPSAnZGVmYXVsdCc7XG5cdHN0YXRpYyBGT1JFQUNIOiBzdHJpbmcgPSAnZm9yZWFjaCc7XG5cdHN0YXRpYyBJTjogc3RyaW5nID0gJ2luJztcblx0c3RhdGljIE5VTEw6IHN0cmluZyA9ICdudWxsJztcblx0c3RhdGljIFZET006IHN0cmluZyA9ICd2ZG9tJztcblxuXHRzdGF0aWMgQlJBQ0tFVF9TUVVBUkVfT1BFTjogc3RyaW5nID0gJ1snO1xuXHRzdGF0aWMgQlJBQ0tFVF9TUVVBUkVfQ0xPU0U6IHN0cmluZyA9ICddJztcblx0c3RhdGljIEJSQUNFX09QRU46IHN0cmluZyA9ICd7Jztcblx0c3RhdGljIEJSQUNFX0NMT1NFOiBzdHJpbmcgPSAnfSc7XG5cdHN0YXRpYyBQQVJFTlRIRVNFU19PUEVOOiBzdHJpbmcgPSAnKCc7XG5cdHN0YXRpYyBQQVJFTlRIRVNFU19DTE9TRTogc3RyaW5nID0gJyknO1xuXHRzdGF0aWMgU0VNSUNPTE9OOiBzdHJpbmcgPSAnOyc7XG5cdHN0YXRpYyBDT0xPTjogc3RyaW5nID0gJzonO1xuXHRzdGF0aWMgQ09NTUE6IHN0cmluZyA9ICcsJztcblxuXHRzdGF0aWMgQVJST1c6IHN0cmluZyA9ICctPic7XG5cdHN0YXRpYyBET1Q6IHN0cmluZyA9ICcuJztcblx0c3RhdGljIEFTU0lHTjogc3RyaW5nID0gJz0nO1xuXHRzdGF0aWMgUExVUzogc3RyaW5nID0gJysnO1xuXHRzdGF0aWMgTUlOVVM6IHN0cmluZyA9ICctJztcblx0c3RhdGljIERJVklERTogc3RyaW5nID0gJy8nO1xuXHRzdGF0aWMgTVVMVElQTFk6IHN0cmluZyA9ICcqJztcblx0c3RhdGljIE1PRFVMVVM6IHN0cmluZyA9ICclJztcblxuXHRzdGF0aWMgRVhDTEFNQVRJT05fTUFSSzogc3RyaW5nID0gJyEnO1xuXHRzdGF0aWMgUVVFU1RJT05fTUFSSzogc3RyaW5nID0gJz8nO1xuXHRzdGF0aWMgTEVTU19USEFOOiBzdHJpbmcgPSAnPCc7XG5cdHN0YXRpYyBHUkVBVEVSX1RIQU46IHN0cmluZyA9ICc+Jztcblx0c3RhdGljIExFU1NfRVFVQUw6IHN0cmluZyA9ICc8PSc7XG5cdHN0YXRpYyBHUkVBVEVSX0VRVUFMOiBzdHJpbmcgPSAnPj0nO1xuXHRzdGF0aWMgRVFVQUw6IHN0cmluZyA9ICc9PSc7XG5cdHN0YXRpYyBOT1RfRVFVQUw6IHN0cmluZyA9ICchPSc7XG5cdHN0YXRpYyBBTkQ6IHN0cmluZyA9ICcmJic7XG5cdHN0YXRpYyBPUjogc3RyaW5nID0gJ3x8JztcblxuXHRzdGF0aWMgWE1MX0NMT1NFX1RBRzogc3RyaW5nID0gJy8+Jztcblx0c3RhdGljIFhNTF9PUEVOX0NMT1NFX1RBRzogc3RyaW5nID0gJzwvJztcblxuXHRzdGF0aWMgS0VZV09SRFM6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuSU1QT1JULFxuXHRcdEdSQU1NQVIuRlJPTSxcblx0XHRHUkFNTUFSLk9QRU4sXG5cdFx0R1JBTU1BUi5DTEFTUyxcblx0XHRHUkFNTUFSLklOVEVSRkFDRSxcblx0XHRHUkFNTUFSLkVYVEVORFMsXG5cdFx0R1JBTU1BUi5JTVBMRU1FTlRTLFxuXHRcdEdSQU1NQVIuUFVCTElDLFxuXHRcdEdSQU1NQVIuUFJJVkFURSxcblx0XHRHUkFNTUFSLlNUQVRJQyxcblx0XHRHUkFNTUFSLlJFQURPTkxZLFxuXHRcdEdSQU1NQVIuUkVUVVJOLFxuXHRcdEdSQU1NQVIuTEVULFxuXHRcdEdSQU1NQVIuTkVXLFxuXHRcdEdSQU1NQVIuVEhJUyxcblx0XHRHUkFNTUFSLklGLFxuXHRcdEdSQU1NQVIuRUxTRSxcblx0XHRHUkFNTUFSLk1BVENILFxuXHRcdEdSQU1NQVIuREVGQVVMVCxcblx0XHRHUkFNTUFSLkZPUkVBQ0gsXG5cdFx0R1JBTU1BUi5JTixcblx0XHRHUkFNTUFSLk5VTEwsXG5cdFx0R1JBTU1BUi5WRE9NLFxuXHRdO1xuXHRzdGF0aWMgQVJJVEhNRVRJQzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5QTFVTLFxuXHRcdEdSQU1NQVIuTUlOVVMsXG5cdFx0R1JBTU1BUi5ESVZJREUsXG5cdFx0R1JBTU1BUi5NVUxUSVBMWSxcblx0XHRHUkFNTUFSLk1PRFVMVVNcblx0XTtcblx0c3RhdGljIENPTVBBUklTT046IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuTEVTU19USEFOLFxuXHRcdEdSQU1NQVIuR1JFQVRFUl9USEFOLFxuXHRcdEdSQU1NQVIuTEVTU19FUVVBTCxcblx0XHRHUkFNTUFSLkdSRUFURVJfRVFVQUxcblx0XTtcblx0c3RhdGljIEVRVUFMSVRZOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLkVRVUFMLFxuXHRcdEdSQU1NQVIuTk9UX0VRVUFMXG5cdF07XG5cdHN0YXRpYyBMT0dJQ0FMOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLkFORCxcblx0XHRHUkFNTUFSLk9SXG5cdF07XG5cdHN0YXRpYyBPUEVSQVRPUlM6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuRVhDTEFNQVRJT05fTUFSSyxcblx0XHRHUkFNTUFSLlFVRVNUSU9OX01BUkssXG5cdFx0R1JBTU1BUi5BUlJPVyxcblx0XHRHUkFNTUFSLkRPVCxcblx0XHRHUkFNTUFSLkFTU0lHTixcblx0XHRHUkFNTUFSLlBMVVMsXG5cdFx0R1JBTU1BUi5NSU5VUyxcblx0XHRHUkFNTUFSLkRJVklERSxcblx0XHRHUkFNTUFSLk1VTFRJUExZLFxuXHRcdEdSQU1NQVIuTU9EVUxVUyxcblx0XHRHUkFNTUFSLkxFU1NfVEhBTixcblx0XHRHUkFNTUFSLkdSRUFURVJfVEhBTixcblx0XHRHUkFNTUFSLkxFU1NfRVFVQUwsXG5cdFx0R1JBTU1BUi5HUkVBVEVSX0VRVUFMLFxuXHRcdEdSQU1NQVIuRVFVQUwsXG5cdFx0R1JBTU1BUi5OT1RfRVFVQUwsXG5cdFx0R1JBTU1BUi5BTkQsXG5cdFx0R1JBTU1BUi5PUixcblx0XTtcblx0c3RhdGljIE1BVEhfT1BFUkFUT1JTOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLlBMVVMsXG5cdFx0R1JBTU1BUi5NSU5VUyxcblx0XHRHUkFNTUFSLkRJVklERSxcblx0XHRHUkFNTUFSLk1VTFRJUExZLFxuXHRcdEdSQU1NQVIuTU9EVUxVU1xuXHRdO1xuXHRzdGF0aWMgTE9HSUNfT1BFUkFUT1JTOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLkxFU1NfVEhBTixcblx0XHRHUkFNTUFSLkdSRUFURVJfVEhBTixcblx0XHRHUkFNTUFSLkxFU1NfRVFVQUwsXG5cdFx0R1JBTU1BUi5HUkVBVEVSX0VRVUFMLFxuXHRcdEdSQU1NQVIuRVFVQUwsXG5cdFx0R1JBTU1BUi5OT1RfRVFVQUwsXG5cdFx0R1JBTU1BUi5BTkQsXG5cdFx0R1JBTU1BUi5PUixcblx0XTtcblx0c3RhdGljIFBVTkNUVUFUSU9OUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9PUEVOLFxuXHRcdEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfQ0xPU0UsXG5cdFx0R1JBTU1BUi5CUkFDRV9PUEVOLFxuXHRcdEdSQU1NQVIuQlJBQ0VfQ0xPU0UsXG5cdFx0R1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOLFxuXHRcdEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UsXG5cdFx0R1JBTU1BUi5TRU1JQ09MT04sXG5cdFx0R1JBTU1BUi5DT0xPTixcblx0XHRHUkFNTUFSLkNPTU1BXG5cdF07XG5cdHN0YXRpYyBET01fT1BFUkFUT1JTOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLkFSUk9XLFxuXHRcdEdSQU1NQVIuRE9ULFxuXHRcdEdSQU1NQVIuQVNTSUdOLFxuXHRcdEdSQU1NQVIuTEVTU19USEFOLFxuXHRcdEdSQU1NQVIuR1JFQVRFUl9USEFOLFxuXHRcdEdSQU1NQVIuWE1MX09QRU5fQ0xPU0VfVEFHLFxuXHRcdEdSQU1NQVIuWE1MX0NMT1NFX1RBR1xuXHRdO1xuXHRzdGF0aWMgRE9NX1BVTkNUVUFUSU9OUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9PUEVOLFxuXHRcdEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfQ0xPU0UsXG5cdFx0R1JBTU1BUi5CUkFDRV9PUEVOLFxuXHRcdEdSQU1NQVIuQlJBQ0VfQ0xPU0UsXG5cdFx0R1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOLFxuXHRcdEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UsXG5cdFx0R1JBTU1BUi5TRU1JQ09MT04sXG5cdFx0R1JBTU1BUi5DT0xPTixcblx0XHRHUkFNTUFSLkNPTU1BXG5cdF07XG59XG5cbmV4cG9ydCBjbGFzcyBUWVBFX0VOVU0ge1xuXHRzdGF0aWMgTUlYRUQ6IHN0cmluZyA9ICdtaXhlZCc7XG5cdHN0YXRpYyBWT0lEOiBzdHJpbmcgPSAndm9pZCc7XG5cdHN0YXRpYyBOVU1CRVI6IHN0cmluZyA9ICdudW1iZXInO1xuXHRzdGF0aWMgU1RSSU5HOiBzdHJpbmcgPSAnc3RyaW5nJztcblx0c3RhdGljIEJPT0xFQU46IHN0cmluZyA9ICdib29sZWFuJztcblx0c3RhdGljIEFSUkFZOiBzdHJpbmcgPSAnYXJyYXknO1xuXHRzdGF0aWMgTlVMTDogc3RyaW5nID0gJ251bGwnO1xufVxuXG5leHBvcnQgY2xhc3MgUnVsZXMge1xuXHRzdGF0aWMgS0VZV09SRFM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChHUkFNTUFSLktFWVdPUkRTKTtcblx0c3RhdGljIE9QRVJBVE9SUzogU2V0PHN0cmluZz4gPSBuZXcgU2V0KEdSQU1NQVIuT1BFUkFUT1JTKTtcblx0c3RhdGljIFBVTkNUVUFUSU9OUzogU2V0PHN0cmluZz4gPSBuZXcgU2V0KEdSQU1NQVIuUFVOQ1RVQVRJT05TKTtcblx0c3RhdGljIERPTV9PUEVSQVRPUlM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChHUkFNTUFSLkRPTV9PUEVSQVRPUlMpO1xuXHRzdGF0aWMgRE9NX1BVTkNUVUFUSU9OUzogU2V0PHN0cmluZz4gPSBuZXcgU2V0KEdSQU1NQVIuRE9NX1BVTkNUVUFUSU9OUyk7XG5cdHN0YXRpYyBDT01NRU5UX0xJTkU6IHN0cmluZyA9ICcvLyc7XG5cblx0aXNBbHBoYShjaGFyOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gL1thLXpfXS9pLnRlc3QoY2hhcik7XG5cdH1cblxuXHRpc051bWVyaWMoY2hhcjogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIC9bMC05XS8udGVzdChjaGFyKTtcblx0fVxuXG5cdGlzQWxwaGFOdW1lcmljKGNoYXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmlzQWxwaGEoY2hhcikgfHwgdGhpcy5pc051bWVyaWMoY2hhcik7XG5cdH1cblxuXHRpc1doaXRlc3BhY2UoY2hhcjogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIC9cXHMvLnRlc3QoY2hhcik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFRva2VuVHlwZSB7XG5cdHN0YXRpYyBDT01NRU5UOiBzdHJpbmcgPSAnY29tbWVudCc7XG5cdHN0YXRpYyBBTk5PVEFUSU9OOiBzdHJpbmcgPSAnYW5ub3RhdGlvbic7XG5cdHN0YXRpYyBJREVOVElGSUVSOiBzdHJpbmcgPSAnaWRlbnRpZmllcic7XG5cdHN0YXRpYyBLRVlXT1JEOiBzdHJpbmcgPSAna2V5d29yZCc7XG5cdHN0YXRpYyBQVU5DVFVBVElPTjogc3RyaW5nID0gJ3B1bmN0dWF0aW9uJztcblx0c3RhdGljIE5VTUJFUjogc3RyaW5nID0gJ251bWJlcic7XG5cdHN0YXRpYyBTVFJJTkc6IHN0cmluZyA9ICdzdHJpbmcnO1xuXHRzdGF0aWMgQk9PTEVBTjogc3RyaW5nID0gJ2Jvb2xlYW4nO1xuXHRzdGF0aWMgT1BFUkFUT1I6IHN0cmluZyA9ICdvcGVyYXRvcic7XG5cdHN0YXRpYyBURVhUOiBzdHJpbmcgPSAndGV4dCc7XG5cdHN0YXRpYyBFT0Y6IHN0cmluZyA9ICdlb2YnO1xufVxuXG5leHBvcnQgY2xhc3MgVG9rZW4ge1xuXHR0eXBlOiBzdHJpbmc7XG5cdHZhbHVlOiBzdHJpbmc7XG5cdGxpbmU6IG51bWJlciA9IDE7XG5cdGNvbHVtbjogbnVtYmVyID0gMTtcblx0c3RhcnQ6IG51bWJlcjtcblx0ZW5kOiBudW1iZXI7XG5cdHNvdXJjZTogU291cmNlO1xuXG5cdGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIsIHNvdXJjZTogU291cmNlKSB7XG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdFx0dGhpcy5zdGFydCA9IHN0YXJ0O1xuXHRcdHRoaXMuZW5kID0gZW5kO1xuXHRcdHRoaXMuc291cmNlID0gc291cmNlO1xuXHR9XG5cblx0d2l0aExpbmVBbmRDb2x1bW4obGluZTogbnVtYmVyLCBjb2x1bW46IG51bWJlcik6IFRva2VuIHtcblx0XHR0aGlzLmxpbmUgPSBsaW5lO1xuXHRcdHRoaXMuY29sdW1uID0gY29sdW1uO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7R1JBTU1BUiwgVFlQRV9FTlVNfSBmcm9tIFwiLi9ncmFtbWFyXCI7XG5pbXBvcnQge01vZGlmaWVycywgU3VwZXJDbGFzc30gZnJvbSBcIi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtTb3VyY2VTcGFufSBmcm9tIFwiLi9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5leHBvcnQgY2xhc3MgQVNUTm9kZVR5cGUge1xuXHRzdGF0aWMgUFJPR1JBTU0gPSAncHJvZ3JhbSc7XG5cdHN0YXRpYyBJTkRFWCA9ICdpbmRleCc7XG5cdHN0YXRpYyBJREVOVElGSUVSID0gJ2lkZW50aWZpZXInO1xuXHRzdGF0aWMgQU5OT1RBVElPTiA9ICdhbm5vdGF0aW9uJztcblx0c3RhdGljIFBBUkFNRVRFUiA9ICdwYXJhbWV0ZXInO1xuXHRzdGF0aWMgSU1QT1JUID0gR1JBTU1BUi5JTVBPUlQ7XG5cdHN0YXRpYyBOVU1CRVIgPSBUWVBFX0VOVU0uTlVNQkVSO1xuXHRzdGF0aWMgU1RSSU5HID0gVFlQRV9FTlVNLlNUUklORztcblx0c3RhdGljIEJPT0xFQU4gPSBUWVBFX0VOVU0uQk9PTEVBTjtcblx0c3RhdGljIE5VTEwgPSBUWVBFX0VOVU0uTlVMTDtcblx0c3RhdGljIE5FVyA9IEdSQU1NQVIuTkVXO1xuXHRzdGF0aWMgQ0xBU1MgPSBHUkFNTUFSLkNMQVNTO1xuXHRzdGF0aWMgSU5URVJGQUNFID0gR1JBTU1BUi5JTlRFUkZBQ0U7XG5cdHN0YXRpYyBDT05TVFJVQ1RPUiA9IEdSQU1NQVIuQ09OU1RSVUNUT1I7XG5cdHN0YXRpYyBUSElTID0gR1JBTU1BUi5USElTO1xuXHRzdGF0aWMgUkVUVVJOID0gR1JBTU1BUi5SRVRVUk47XG5cdHN0YXRpYyBWRE9NID0gJ3Zkb21fZGVjbGFyYXRpb24nO1xuXHRzdGF0aWMgVkRPTV9URVhUID0gJ3Zkb21fdGV4dF9kZWNsYXJhdGlvbic7XG5cdHN0YXRpYyBVTkFSWSA9ICd1bmFyeV9leHByZXNzaW9uJztcblx0c3RhdGljIExBTUJEQSA9ICdsYW1iZGFfZXhwcmVzc2lvbic7XG5cdHN0YXRpYyBBUlJBWSA9ICdhcnJheV9kZWNsYXJhdGlvbic7XG5cdHN0YXRpYyBUWVBFID0gJ3R5cGVfZGVjbGFyYXRpb24nO1xuXHRzdGF0aWMgRklFTEQgPSAnZmllbGRfZGVjbGFyYXRpb24nO1xuXHRzdGF0aWMgTUVNQkVSID0gJ21lbWJlcl9leHByZXNzaW9uJztcblx0c3RhdGljIE1FVEhPRCA9ICdtZXRob2RfZGVjbGFyYXRpb24nO1xuXHRzdGF0aWMgQ0FMTCA9ICdjYWxsX2V4cHJlc3Npb24nO1xuXHRzdGF0aWMgVkFSSUFCTEUgPSAndmFyaWFibGVfZGVjbGFyYXRpb24nO1xuXHRzdGF0aWMgRVhQUkVTU0lPTiA9ICdleHByZXNzaW9uX3N0YXRlbWVudCc7XG5cdHN0YXRpYyBCSU5BUlkgPSAnYmluYXJ5X2V4cHJlc3Npb24nO1xuXHRzdGF0aWMgQVNTSUdOTUVOVCA9ICdhc3NpZ25tZW50X2V4cHJlc3Npb24nO1xuXHRzdGF0aWMgSUYgPSAnaWZfc3RhdGVtZW50Jztcblx0c3RhdGljIFRIRU4gPSAndGhlbl9zdGF0ZW1lbnQnO1xuXHRzdGF0aWMgRUxTRSA9ICdlbHNlX3N0YXRlbWVudCc7XG5cdHN0YXRpYyBNQVRDSCA9ICdtYXRjaF9zdGF0ZW1lbnQnO1xuXHRzdGF0aWMgTUFUQ0hfQ0FTRSA9ICdtYXRjaF9jYXNlX3N0YXRlbWVudCc7XG5cdHN0YXRpYyBGT1JFQUNIID0gJ2ZvcmVhY2hfc3RhdGVtZW50Jztcbn1cblxuZXhwb3J0IGNsYXNzIEFTVE5vZGUge1xuXHRpc0V4cHJlc3Npb246IGJvb2xlYW4gPSBmYWxzZTtcblx0bmFtZTogc3RyaW5nID0gJyc7XG5cblx0c3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsO1xuXHR0eXBlOiBzdHJpbmc7XG5cdHZhbHVlOiBhbnkgfCBudWxsID0gbnVsbDtcblx0Y2hpbGRyZW46IEFTVE5vZGVbXTtcblxuXHRjb25zdHJ1Y3Rvcih0eXBlOiBzdHJpbmcsIGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXSkge1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RDYWxsTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRjYWxsZWU6IEFTVE5vZGU7XG5cdGFyZ3VtZW50czogQVNUTm9kZVtdO1xuXG5cdGNvbnN0cnVjdG9yKGNhbGxlZTogQVNUTm9kZSwgYXJnczogQVNUTm9kZVtdID0gW10pIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5DQUxMKTtcblxuXHRcdHRoaXMuY2FsbGVlID0gY2FsbGVlO1xuXHRcdHRoaXMuYXJndW1lbnRzID0gYXJncztcblx0XHR0aGlzLmlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVE5ld05vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0YXJndW1lbnRzOiBBU1ROb2RlW107XG5cdHR5cGVBbm5vdGF0aW9uOiBBU1RUeXBlTm9kZTtcblxuXHRjb25zdHJ1Y3RvcihhcmdzOiBBU1ROb2RlW10sIHR5cGVBbm5vdGF0aW9uOiBBU1RUeXBlTm9kZSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLk5FVyk7XG5cblx0XHR0aGlzLmFyZ3VtZW50cyA9IGFyZ3M7XG5cdFx0dGhpcy50eXBlQW5ub3RhdGlvbiA9IHR5cGVBbm5vdGF0aW9uO1xuXHRcdHRoaXMubmFtZSA9IHR5cGVBbm5vdGF0aW9uLm5hbWU7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RCaW5hcnlOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGxlZnQ6IEFTVE5vZGU7XG5cdHJpZ2h0OiBBU1ROb2RlO1xuXHRvcGVyYXRvcjogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGxlZnQ6IEFTVE5vZGUsIHJpZ2h0OiBBU1ROb2RlLCBvcGVyYXRvcjogc3RyaW5nKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuQklOQVJZKTtcblxuXHRcdHRoaXMubGVmdCA9IGxlZnQ7XG5cdFx0dGhpcy5yaWdodCA9IHJpZ2h0O1xuXHRcdHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcblx0XHR0aGlzLmlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEFzc2lnbm1lbnROb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGxlZnQ6IEFTVE5vZGU7XG5cdHJpZ2h0OiBBU1ROb2RlO1xuXG5cdGNvbnN0cnVjdG9yKGxlZnQ6IEFTVE5vZGUsIHJpZ2h0OiBBU1ROb2RlKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuQVNTSUdOTUVOVCk7XG5cblx0XHR0aGlzLmxlZnQgPSBsZWZ0O1xuXHRcdHRoaXMucmlnaHQgPSByaWdodDtcblx0XHR0aGlzLmlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVE1lbWJlck5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0b2JqZWN0OiBBU1ROb2RlO1xuXHRwcm9wZXJ0eTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKG9iamVjdDogQVNUTm9kZSwgcHJvcGVydHk6IHN0cmluZykge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLk1FTUJFUik7XG5cblx0XHR0aGlzLm9iamVjdCA9IG9iamVjdDtcblx0XHR0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RVbmFyeU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0b3BlcmF0b3I6IHN0cmluZztcblx0YXJndW1lbnQ6IEFTVE5vZGUgfCBBU1RVbmFyeU5vZGU7XG5cblx0Y29uc3RydWN0b3Iob3BlcmF0b3I6IHN0cmluZywgYXJndW1lbnQ6IEFTVE5vZGUgfCBBU1RVbmFyeU5vZGUpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5VTkFSWSk7XG5cblx0XHR0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG5cdFx0dGhpcy5hcmd1bWVudCA9IGFyZ3VtZW50O1xuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUSW5kZXhOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdG9iamVjdDogQVNUTm9kZTtcblx0aW5kZXg6IEFTVE5vZGU7XG5cblx0Y29uc3RydWN0b3Iob2JqZWN0OiBBU1ROb2RlLCBpbmRleDogQVNUTm9kZSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLklOREVYKTtcblxuXHRcdHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuXHRcdHRoaXMuaW5kZXggPSBpbmRleDtcblx0XHR0aGlzLmlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEFycmF5Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRlbGVtZW50czogQVNUTm9kZVtdID0gW107XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuQVJSQVkpO1xuXG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RMYW1iZGFOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXTtcblx0cmV0dXJuVHlwZTogQVNUVHlwZU5vZGU7XG5cblx0Y29uc3RydWN0b3IocGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdLCByZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSwgY2hpbGRyZW46IEFTVE5vZGVbXSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkxBTUJEQSwgY2hpbGRyZW4pO1xuXG5cdFx0dGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcblx0XHR0aGlzLnJldHVyblR5cGUgPSByZXR1cm5UeXBlO1xuXG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RGaWVsZE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0bW9kaWZpZXJzOiBNb2RpZmllcnM7XG5cdGZpZWxkVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsO1xuXHRpbml0OiBBU1ROb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBtb2RpZmllcnM6IE1vZGlmaWVycywgZmllbGRUeXBlOiBBU1RUeXBlTm9kZSB8IG51bGwsIGluaXQ6IEFTVE5vZGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkZJRUxEKTtcblxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG5cdFx0dGhpcy5maWVsZFR5cGUgPSBmaWVsZFR5cGU7XG5cdFx0dGhpcy5pbml0ID0gaW5pdDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUVmFyaWFibGVOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdHR5cGVBbm5vdGF0aW9uOiBBU1RUeXBlTm9kZSB8IG51bGwgPSBudWxsO1xuXHRpbml0OiBBU1ROb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGUgfCBudWxsID0gbnVsbCwgaW5pdDogQVNUTm9kZSB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuVkFSSUFCTEUpO1xuXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnR5cGVBbm5vdGF0aW9uID0gdHlwZUFubm90YXRpb247XG5cdFx0dGhpcy5pbml0ID0gaW5pdDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNURXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0ZXhwcjogQVNUTm9kZTtcblxuXHRjb25zdHJ1Y3RvcihleHByOiBBU1ROb2RlKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuRVhQUkVTU0lPTik7XG5cblx0XHR0aGlzLmV4cHIgPSBleHByO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RSZXR1cm5Ob2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGFyZ3VtZW50OiBBU1ROb2RlIHwgQVNURXhwcmVzc2lvbk5vZGUgfCBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKGFyZ3VtZW50OiBBU1ROb2RlIHwgQVNURXhwcmVzc2lvbk5vZGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLlJFVFVSTik7XG5cblx0XHR0aGlzLmFyZ3VtZW50ID0gYXJndW1lbnQ7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVENsYXNzTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRhbm5vdGF0aW9uczogQVNUQW5ub3RhdGlvbk5vZGVbXTtcblx0bW9kaWZpZXJzOiBNb2RpZmllcnM7XG5cdHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXTtcblx0c3VwZXJDbGFzczogU3VwZXJDbGFzcyB8IG51bGw7XG5cdGltcGxlbWVudHNJbnRlcmZhY2VzOiBBU1RUeXBlTm9kZVtdO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdG5hbWU6IHN0cmluZyxcblx0XHRhbm5vdGF0aW9uczogQVNUQW5ub3RhdGlvbk5vZGVbXSxcblx0XHRtb2RpZmllcnM6IE1vZGlmaWVycyxcblx0XHR0eXBlUGFyYW1ldGVyczogc3RyaW5nW10sXG5cdFx0aW1wbGVtZW50c0ludGVyZmFjZXM6IEFTVFR5cGVOb2RlW10sXG5cdFx0c3VwZXJDbGFzczogU3VwZXJDbGFzcyB8IG51bGwgPSBudWxsLFxuXHRcdGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXVxuXHQpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5DTEFTUywgY2hpbGRyZW4pO1xuXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmFubm90YXRpb25zID0gYW5ub3RhdGlvbnM7XG5cdFx0dGhpcy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG5cdFx0dGhpcy50eXBlUGFyYW1ldGVycyA9IHR5cGVQYXJhbWV0ZXJzO1xuXHRcdHRoaXMuc3VwZXJDbGFzcyA9IHN1cGVyQ2xhc3M7XG5cdFx0dGhpcy5pbXBsZW1lbnRzSW50ZXJmYWNlcyA9IGltcGxlbWVudHNJbnRlcmZhY2VzO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RJbnRlcmZhY2VOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGFubm90YXRpb25zOiBBU1RBbm5vdGF0aW9uTm9kZVtdO1xuXHRtb2RpZmllcnM6IE1vZGlmaWVycztcblx0dHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdO1xuXHRleHRlbmRzSW50ZXJmYWNlczogc3RyaW5nW107XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0bmFtZTogc3RyaW5nLFxuXHRcdGFubm90YXRpb25zOiBBU1RBbm5vdGF0aW9uTm9kZVtdLFxuXHRcdG1vZGlmaWVyczogTW9kaWZpZXJzLFxuXHRcdHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXSxcblx0XHRleHRlbmRzSW50ZXJmYWNlczogc3RyaW5nW10sXG5cdFx0Y2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdXG5cdCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLklOVEVSRkFDRSwgY2hpbGRyZW4pO1xuXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmFubm90YXRpb25zID0gYW5ub3RhdGlvbnM7XG5cdFx0dGhpcy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG5cdFx0dGhpcy50eXBlUGFyYW1ldGVycyA9IHR5cGVQYXJhbWV0ZXJzO1xuXHRcdHRoaXMuZXh0ZW5kc0ludGVyZmFjZXMgPSBleHRlbmRzSW50ZXJmYWNlcztcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUQW5ub3RhdGlvbk5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0cHJvcGVydGllczogTWFwPHN0cmluZywgQVNUTm9kZT4gPSBuZXcgTWFwKCk7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuQU5OT1RBVElPTik7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUUGFyYW1ldGVyTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHR0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGUgfCBudWxsO1xuXHRkZWZhdWx0VmFsdWU6IEFTVE5vZGUgfCBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZUFubm90YXRpb246IEFTVFR5cGVOb2RlIHwgbnVsbCwgZGVmYXVsdFZhbHVlOiBBU1ROb2RlIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5QQVJBTUVURVIpO1xuXHRcdHRoaXMudHlwZUFubm90YXRpb24gPSB0eXBlQW5ub3RhdGlvbjtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuZGVmYXVsdFZhbHVlID0gZGVmYXVsdFZhbHVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RNZXRob2ROb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGFubm90YXRpb25zOiBBU1RBbm5vdGF0aW9uTm9kZVtdO1xuXHRtb2RpZmllcnM6IE1vZGlmaWVycztcblx0dHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdO1xuXHRwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW107XG5cdHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbDtcblxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdG5hbWU6IHN0cmluZyxcblx0XHR0eXBlOiBzdHJpbmcsXG5cdFx0YW5ub3RhdGlvbnM6IEFTVEFubm90YXRpb25Ob2RlW10sXG5cdFx0bW9kaWZpZXJzOiBNb2RpZmllcnMsXG5cdFx0dHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdLFxuXHRcdHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSxcblx0XHRyZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGwgPSBudWxsLFxuXHRcdGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXSxcblx0KSB7XG5cdFx0c3VwZXIodHlwZSwgY2hpbGRyZW4pO1xuXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmFubm90YXRpb25zID0gYW5ub3RhdGlvbnM7XG5cdFx0dGhpcy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG5cdFx0dGhpcy50eXBlUGFyYW1ldGVycyA9IHR5cGVQYXJhbWV0ZXJzO1xuXHRcdHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG5cdFx0dGhpcy5yZXR1cm5UeXBlID0gcmV0dXJuVHlwZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUSW1wb3J0Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRuYW1lczogc3RyaW5nW107XG5cdGZyb206IHN0cmluZyB8IG51bGw7XG5cblx0Y29uc3RydWN0b3IobmFtZXM6IHN0cmluZ1tdLCBmcm9tOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLklNUE9SVCk7XG5cblx0XHR0aGlzLm5hbWVzID0gbmFtZXM7XG5cdFx0dGhpcy5mcm9tID0gZnJvbTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUVGhlbk5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0Y29uc3RydWN0b3IoY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuVEhFTiwgY2hpbGRyZW4pO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RJZk5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0Y29uZGl0aW9uOiBBU1ROb2RlO1xuXHR0aGVuOiBBU1RUaGVuTm9kZTtcblx0ZWxzZTogQVNUSWZOb2RlIHwgQVNURWxzZU5vZGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihjb25kaXRpb246IEFTVE5vZGUsIHRoZW46IEFTVFRoZW5Ob2RlKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuSUYpO1xuXG5cdFx0dGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG5cdFx0dGhpcy50aGVuID0gdGhlbjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNURWxzZU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0Y29uc3RydWN0b3IoY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuRUxTRSwgY2hpbGRyZW4pO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RNYXRjaE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0ZXhwcmVzc2lvbjogQVNUTm9kZTtcblx0Y2FzZXM6IEFTVE1hdGNoQ2FzZU5vZGVbXTtcblx0ZGVmYXVsdENhc2U6IEFTVE1hdGNoQ2FzZU5vZGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihleHByZXNzaW9uOiBBU1ROb2RlLCBjYXNlczogQVNUTWF0Y2hDYXNlTm9kZVtdLCBkZWZhdWx0Q2FzZTogQVNUTWF0Y2hDYXNlTm9kZSB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuTUFUQ0gpO1xuXG5cdFx0dGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcblx0XHR0aGlzLmNhc2VzID0gY2FzZXM7XG5cdFx0dGhpcy5kZWZhdWx0Q2FzZSA9IGRlZmF1bHRDYXNlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RNYXRjaENhc2VOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdHRlc3Q6IEFTVE5vZGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihjaGlsZHJlbjogQVNUTm9kZVtdID0gW10pIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5NQVRDSF9DQVNFLCBjaGlsZHJlbik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEZvcmVhY2hOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGl0ZXJhdG9yOiBzdHJpbmc7XG5cdGl0ZXJhYmxlOiBBU1ROb2RlO1xuXHRib2R5OiBBU1ROb2RlW107XG5cblx0Y29uc3RydWN0b3IoaXRlcmF0b3I6IHN0cmluZywgaXRlcmFibGU6IEFTVE5vZGUsIGJvZHk6IEFTVE5vZGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuRk9SRUFDSCk7XG5cblx0XHR0aGlzLml0ZXJhdG9yID0gaXRlcmF0b3I7XG5cdFx0dGhpcy5pdGVyYWJsZSA9IGl0ZXJhYmxlO1xuXHRcdHRoaXMuYm9keSA9IGJvZHk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFR5cGVOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdHN0YXRpYyBLSU5EX1NJTVBMRSA9ICdzaW1wbGUnO1xuXHRzdGF0aWMgS0lORF9HRU5FUklDID0gJ2dlbmVyaWMnO1xuXHRzdGF0aWMgS0lORF9MQU1CREEgPSAnbGFtYmRhJztcblxuXHRraW5kOiBzdHJpbmc7XG5cdHR5cGVBcmd1bWVudHM6IEFTVFR5cGVOb2RlW10gPSBbXTtcblx0cGFyYW1ldGVyVHlwZXM6IEFTVFR5cGVOb2RlW10gPSBbXTtcblx0cmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsID0gbnVsbDtcblx0bnVsbGFibGU6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3Ioa2luZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIG51bGxhYmxlOiBib29sZWFuID0gZmFsc2UpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5UWVBFKTtcblxuXHRcdHRoaXMua2luZCA9IGtpbmQ7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLm51bGxhYmxlID0gbnVsbGFibGU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFZEb21Ob2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdHJlYWRvbmx5IHRhZzogc3RyaW5nO1xuXHRyZWFkb25seSBwcm9wczogTWFwPHN0cmluZywgQVNUTm9kZT4gPSBuZXcgTWFwKCk7XG5cblx0Y29uc3RydWN0b3IodGFnOiBzdHJpbmcsIHByb3BzOiBNYXA8c3RyaW5nLCBBU1ROb2RlPiwgY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuVkRPTSwgY2hpbGRyZW4pO1xuXHRcdHRoaXMudGFnID0gdGFnO1xuXHRcdHRoaXMucHJvcHMgPSBwcm9wcztcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUVkRvbVRleHROb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5WRE9NX1RFWFQpO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0dSQU1NQVIsIFJ1bGVzLCBUb2tlbiwgVG9rZW5UeXBlfSBmcm9tIFwiLi4vZ3JhbW1hclwiO1xuaW1wb3J0IHt0aHJvd1Rva2VuRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcbmltcG9ydCB0eXBlIHtTb3VyY2V9IGZyb20gXCIuLi9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5leHBvcnQgY2xhc3MgVG9rZW5pemVyIHtcblx0cHJpdmF0ZSByZWFkb25seSBydWxlcyA9IG5ldyBSdWxlcygpO1xuXHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZTogU291cmNlO1xuXG5cdGNvbnN0cnVjdG9yKHNvdXJjZTogU291cmNlKSB7XG5cdFx0dGhpcy5zb3VyY2UgPSBzb3VyY2U7XG5cdH1cblxuXHRnZXRUb2tlblN0cmVhbSgpOiBUb2tlblN0cmVhbSB7XG5cdFx0cmV0dXJuIG5ldyBUb2tlblN0cmVhbSh0aGlzLnRva2VuaXplKCkpO1xuXHR9XG5cblx0dG9rZW5pemUoKTogVG9rZW5bXSB7XG5cdFx0Y29uc3QgdG9rZW5zOiBUb2tlbltdID0gW107XG5cblx0XHRsZXQgaTogbnVtYmVyID0gMDtcblx0XHRsZXQgbGluZTogbnVtYmVyID0gMTtcblx0XHRsZXQgY29sdW1uOiBudW1iZXIgPSAwO1xuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ0xpbmVDb21tZW50OiAoKSA9PiBib29sZWFuID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgbGluZUNvbW1lbnQ6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hMaW5lQ29tbWVudEF0KGkpO1xuXHRcdFx0aWYgKGxpbmVDb21tZW50KSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKGxpbmVDb21tZW50LndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gbGluZUNvbW1lbnQuZW5kICsgMTtcblxuXHRcdFx0XHRsaW5lKys7XG5cdFx0XHRcdGNvbHVtbiA9IDA7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdTdHJpbmc6ICgpID0+IGJvb2xlYW4gPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBzdHJpbmc6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hTdHJpbmdBdChpKTtcblx0XHRcdGlmIChzdHJpbmcpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2goc3RyaW5nLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gc3RyaW5nLmVuZCArIDE7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQoc3RyaW5nKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ1B1bmN0dWF0aW9uOiAoKSA9PiBib29sZWFuID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgcHVuY3R1YXRpb246IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hQdW5jdHVhdGlvbkF0KGkpO1xuXHRcdFx0aWYgKHB1bmN0dWF0aW9uKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKHB1bmN0dWF0aW9uLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gcHVuY3R1YXRpb24uZW5kICsgMTtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChwdW5jdHVhdGlvbik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdJZGVudGlmaWVyOiAoKSA9PiBib29sZWFuID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgaWRlbnRpZmllcjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaElkZW50aWZpZXJBdChpKTtcblx0XHRcdGlmIChpZGVudGlmaWVyKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKGlkZW50aWZpZXIud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBpZGVudGlmaWVyLmVuZDtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChpZGVudGlmaWVyKTtcblxuXHRcdFx0XHRpZiAoaWRlbnRpZmllci52YWx1ZSA9PT0gR1JBTU1BUi5WRE9NKSB7XG5cdFx0XHRcdFx0Y29uc3QgdG9rZW5pemVkVkRvbSA9IHRoaXMudG9rZW5pemVWRG9tKGksIGxpbmUsIGNvbHVtbik7XG5cdFx0XHRcdFx0dG9rZW5zLnB1c2goLi4udG9rZW5pemVkVkRvbS50b2tlbnMpO1xuXHRcdFx0XHRcdGkgPSB0b2tlbml6ZWRWRG9tLm5ld0luZGV4O1xuXHRcdFx0XHRcdGxpbmUgPSB0b2tlbml6ZWRWRG9tLmxpbmU7XG5cdFx0XHRcdFx0Y29sdW1uID0gdG9rZW5pemVkVkRvbS5jb2x1bW47XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ051bWJlcjogKCkgPT4gYm9vbGVhbiA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IG51bWJlcjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaE51bWJlckF0KGkpO1xuXHRcdFx0aWYgKG51bWJlcikge1xuXHRcdFx0XHR0b2tlbnMucHVzaChudW1iZXIud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBudW1iZXIuZW5kO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KG51bWJlcik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdPcGVyYXRvcjogKCkgPT4gYm9vbGVhbiA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IG9wZXJhdG9yOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoT3BlcmF0b3JBdChpKTtcblx0XHRcdGlmIChvcGVyYXRvcikge1xuXHRcdFx0XHR0b2tlbnMucHVzaChvcGVyYXRvci53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IG9wZXJhdG9yLmVuZCArIDE7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQob3BlcmF0b3IpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nQW5ub3RhdGlvbjogKCkgPT4gYm9vbGVhbiA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IGFubm90YXRpb246IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hBbm5vdGF0aW9uQXQoaSk7XG5cdFx0XHRpZiAoYW5ub3RhdGlvbikge1xuXHRcdFx0XHR0b2tlbnMucHVzaChhbm5vdGF0aW9uLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gYW5ub3RhdGlvbi5lbmQgKyAxO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KGFubm90YXRpb24pO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHdoaWxlIChpIDwgdGhpcy5zb3VyY2UubGVuZ3RoKSB7XG5cdFx0XHRpZiAodGhpcy5zb3VyY2UuY2hhckF0KGkpID09PSAnXFxuJykge1xuXHRcdFx0XHRsaW5lKys7XG5cdFx0XHRcdGNvbHVtbiA9IDA7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb2x1bW4rKztcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMubWF0Y2hXaGl0ZXNwYWNlQXQoaSkpIHtcblx0XHRcdFx0aSsrO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGlmSXNDb25zdW1pbmdMaW5lQ29tbWVudCgpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdQdW5jdHVhdGlvbigpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdTdHJpbmcoKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nTnVtYmVyKClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ0lkZW50aWZpZXIoKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nT3BlcmF0b3IoKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nQW5ub3RhdGlvbigpKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHR0aHJvd1Rva2VuRXJyb3IoJ1VuZXhwZWN0ZWQgY2hhcmFjdGVyOiAnICsgdGhpcy5zb3VyY2UuY2hhckF0KGkpKTtcblx0XHR9XG5cblx0XHR0b2tlbnMucHVzaChcblx0XHRcdHRoaXMuZW9mKGkpXG5cdFx0XHQgICAgLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbilcblx0XHQpO1xuXG5cdFx0cmV0dXJuIHRva2Vucztcblx0fVxuXG5cdGVvZihlbmQ6IG51bWJlcik6IFRva2VuIHtcblx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5FT0YsICcnLCBlbmQsIGVuZCwgdGhpcy5zb3VyY2UpXG5cdH1cblxuXHRjb2x1bU9mZnNldCh0b2tlbjogVG9rZW4pOiBudW1iZXIge1xuXHRcdHJldHVybiB0b2tlbi52YWx1ZS5sZW5ndGggLSAxO1xuXHR9XG5cblx0bWF0Y2hXaGl0ZXNwYWNlQXQoaTogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucnVsZXMuaXNXaGl0ZXNwYWNlKHRoaXMuc291cmNlLmNoYXJBdChpKSk7XG5cdH1cblxuXHRtYXRjaE51bWJlckF0KGk6IG51bWJlcik6IFRva2VuIHwgbnVsbCB7XG5cdFx0aWYgKCF0aGlzLnJ1bGVzLmlzTnVtZXJpYyh0aGlzLnNvdXJjZS5jaGFyQXQoaSkpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbFxuXHRcdH1cblx0XHRsZXQgc3RhcnQgPSBpO1xuXHRcdHdoaWxlICh0aGlzLnJ1bGVzLmlzTnVtZXJpYyh0aGlzLnNvdXJjZS5jaGFyQXQoaSkpKSBpKys7XG5cdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuTlVNQkVSLCB0aGlzLnNvdXJjZS5zbGljZShzdGFydCwgaSksIHN0YXJ0LCBpLCB0aGlzLnNvdXJjZSk7XG5cdH1cblxuXHRtYXRjaFN0cmluZ0F0KGk6IG51bWJlcik6IFRva2VuIHwgbnVsbCB7XG5cdFx0aWYgKHRoaXMuc291cmNlLmNoYXJBdChpKSAhPT0gJ1wiJykge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGxldCBzdGFydCA9ICsraTtcblx0XHR3aGlsZSAodGhpcy5zb3VyY2UuY2hhckF0KGkpICE9PSAnXCInKSBpKys7XG5cdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuU1RSSU5HLCB0aGlzLnNvdXJjZS5zbGljZShzdGFydCwgaSksIHN0YXJ0LCBpLCB0aGlzLnNvdXJjZSk7XG5cdH1cblxuXHRtYXRjaElkZW50aWZpZXJBdChpOiBudW1iZXIpOiBUb2tlbiB8IG51bGwge1xuXHRcdGlmICghdGhpcy5ydWxlcy5pc0FscGhhKHRoaXMuc291cmNlLmNoYXJBdChpKSkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRsZXQgc3RhcnQgPSBpO1xuXHRcdGxldCBqID0gaTtcblx0XHR3aGlsZSAodGhpcy5ydWxlcy5pc0FscGhhTnVtZXJpYyh0aGlzLnNvdXJjZS5jaGFyQXQoaikpKSBqKys7XG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnNvdXJjZS5zbGljZShzdGFydCwgaik7XG5cblx0XHRsZXQgdHlwZSA9IFRva2VuVHlwZS5JREVOVElGSUVSO1xuXHRcdGlmIChbR1JBTU1BUi5UUlVFLCBHUkFNTUFSLkZBTFNFXS5pbmNsdWRlcyh2YWx1ZSkpIHtcblx0XHRcdHR5cGUgPSBUb2tlblR5cGUuQk9PTEVBTjtcblx0XHR9IGVsc2UgaWYgKFJ1bGVzLktFWVdPUkRTLmhhcyh2YWx1ZSkpIHtcblx0XHRcdHR5cGUgPSBUb2tlblR5cGUuS0VZV09SRDtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IFRva2VuKHR5cGUsIHZhbHVlLCBzdGFydCwgaiwgdGhpcy5zb3VyY2UpO1xuXHR9XG5cblx0bWF0Y2hPcGVyYXRvckF0KGk6IG51bWJlciwgb3BlcmF0b3JzOiBTZXQ8c3RyaW5nPiA9IFJ1bGVzLk9QRVJBVE9SUyk6IFRva2VuIHwgbnVsbCB7XG5cdFx0Y29uc3QgY2hhcnMgPSB0aGlzLnNvdXJjZS5jaGFyQXQoaSkgKyB0aGlzLnNvdXJjZS5jaGFyQXQoaSArIDEpO1xuXHRcdGlmIChvcGVyYXRvcnMuaGFzKGNoYXJzKSkge1xuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuT1BFUkFUT1IsIGNoYXJzLCBpLCBpICsgMSwgdGhpcy5zb3VyY2UpO1xuXHRcdH1cblxuXHRcdGlmIChvcGVyYXRvcnMuaGFzKHRoaXMuc291cmNlLmNoYXJBdChpKSkpIHtcblx0XHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLk9QRVJBVE9SLCB0aGlzLnNvdXJjZS5jaGFyQXQoaSksIGksIGksIHRoaXMuc291cmNlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdG1hdGNoUHVuY3R1YXRpb25BdChpOiBudW1iZXIsIHB1bmN0dWF0aW9ucyA9IFJ1bGVzLlBVTkNUVUFUSU9OUyk6IFRva2VuIHwgbnVsbCB7XG5cdFx0Y29uc3QgY2hhcnMgPSB0aGlzLnNvdXJjZS5jaGFyQXQoaSkgKyB0aGlzLnNvdXJjZS5jaGFyQXQoaSArIDEpO1xuXHRcdGlmIChwdW5jdHVhdGlvbnMuaGFzKGNoYXJzKSkge1xuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuUFVOQ1RVQVRJT04sIGNoYXJzLCBpLCBpICsgMSwgdGhpcy5zb3VyY2UpO1xuXHRcdH1cblxuXHRcdGlmICghcHVuY3R1YXRpb25zLmhhcyh0aGlzLnNvdXJjZS5jaGFyQXQoaSkpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuUFVOQ1RVQVRJT04sIHRoaXMuc291cmNlLmNoYXJBdChpKSwgaSwgaSwgdGhpcy5zb3VyY2UpO1xuXHR9XG5cblx0bWF0Y2hMaW5lQ29tbWVudEF0KGk6IG51bWJlcik6IFRva2VuIHwgbnVsbCB7XG5cdFx0aWYgKCF0aGlzLnNvdXJjZS5zdGFydHNXaXRoKFJ1bGVzLkNPTU1FTlRfTElORSwgaSkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRsZXQgaiA9IGkgKyBSdWxlcy5DT01NRU5UX0xJTkUubGVuZ3RoO1xuXHRcdHdoaWxlIChqIDwgdGhpcy5zb3VyY2UubGVuZ3RoICYmIHRoaXMuc291cmNlLmNoYXJBdChqKSAhPT0gJ1xcbicpIGorKztcblx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5DT01NRU5ULCB0aGlzLnNvdXJjZS5zbGljZShpLCBqKSwgaSwgaiwgdGhpcy5zb3VyY2UpO1xuXHR9XG5cblx0bWF0Y2hBbm5vdGF0aW9uQXQoaTogbnVtYmVyKTogVG9rZW4gfCBudWxsIHtcblx0XHRpZiAodGhpcy5zb3VyY2UuY2hhckF0KGkpICE9PSAnQCcpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGxldCBzdGFydCA9IGkgKyAxO1xuXHRcdGxldCBqID0gaSArIDE7XG5cdFx0d2hpbGUgKHRoaXMucnVsZXMuaXNBbHBoYSh0aGlzLnNvdXJjZS5jaGFyQXQoaikpKSBqKys7XG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnNvdXJjZS5zbGljZShzdGFydCwgaik7XG5cblx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5BTk5PVEFUSU9OLCB2YWx1ZSwgc3RhcnQsIGosIHRoaXMuc291cmNlKTtcblx0fVxuXG5cdHByaXZhdGUgdG9rZW5pemVWRG9tKHN0YXJ0SW5kZXg6IG51bWJlciwgbGluZTogbnVtYmVyLCBjb2x1bW46IG51bWJlcik6IHtcblx0XHR0b2tlbnM6IFRva2VuW10sXG5cdFx0bmV3SW5kZXg6IG51bWJlcixcblx0XHRsaW5lOiBudW1iZXIsXG5cdFx0Y29sdW1uOiBudW1iZXJcblx0fSB7XG5cdFx0Y29uc3QgdG9rZW5zOiBUb2tlbltdID0gW107XG5cdFx0bGV0IGk6IG51bWJlciA9IHN0YXJ0SW5kZXg7XG5cdFx0bGV0IHRleHRCdWZmZXI6IHN0cmluZyA9ICcnO1xuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ1N0cmluZzogKCkgPT4gYm9vbGVhbiA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IHN0cmluZzogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaFN0cmluZ0F0KGkpO1xuXHRcdFx0aWYgKHN0cmluZykge1xuXHRcdFx0XHRmbHVzaFRleHRCdWZmZXIoKTtcblx0XHRcdFx0dG9rZW5zLnB1c2goc3RyaW5nLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gc3RyaW5nLmVuZCArIDE7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQoc3RyaW5nKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ1B1bmN0dWF0aW9uOiAoKSA9PiBib29sZWFuID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgcHVuY3R1YXRpb246IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hQdW5jdHVhdGlvbkF0KGksIFJ1bGVzLkRPTV9QVU5DVFVBVElPTlMpO1xuXHRcdFx0aWYgKHB1bmN0dWF0aW9uKSB7XG5cdFx0XHRcdGZsdXNoVGV4dEJ1ZmZlcigpO1xuXHRcdFx0XHR0b2tlbnMucHVzaChwdW5jdHVhdGlvbi53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IHB1bmN0dWF0aW9uLmVuZCArIDE7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQocHVuY3R1YXRpb24pO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nSWRlbnRpZmllcjogKCkgPT4gYm9vbGVhbiA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IGlkZW50aWZpZXI6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hJZGVudGlmaWVyQXQoaSk7XG5cdFx0XHRpZiAoaWRlbnRpZmllcikge1xuXHRcdFx0XHRpZiAoW0dSQU1NQVIuQ0xBU1NdLmluY2x1ZGVzKGlkZW50aWZpZXIudmFsdWUpKSB7XG5cdFx0XHRcdFx0aWRlbnRpZmllci50eXBlID0gVG9rZW5UeXBlLklERU5USUZJRVI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmbHVzaFRleHRCdWZmZXIoKTtcblxuXHRcdFx0XHR0b2tlbnMucHVzaChpZGVudGlmaWVyLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gaWRlbnRpZmllci5lbmQ7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQoaWRlbnRpZmllcik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdOdW1iZXI6ICgpID0+IGJvb2xlYW4gPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBudW1iZXI6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hOdW1iZXJBdChpKTtcblx0XHRcdGlmIChudW1iZXIpIHtcblx0XHRcdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cblx0XHRcdFx0dG9rZW5zLnB1c2gobnVtYmVyLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gbnVtYmVyLmVuZDtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChudW1iZXIpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nT3BlcmF0b3I6ICgpID0+IGJvb2xlYW4gPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBvcGVyYXRvcjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaE9wZXJhdG9yQXQoaSwgUnVsZXMuRE9NX09QRVJBVE9SUyk7XG5cdFx0XHRpZiAob3BlcmF0b3IpIHtcblx0XHRcdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cblx0XHRcdFx0dG9rZW5zLnB1c2gob3BlcmF0b3Iud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBvcGVyYXRvci5lbmQgKyAxO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KG9wZXJhdG9yKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZmx1c2hUZXh0QnVmZmVyOiAoKSA9PiB2b2lkID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKHRleHRCdWZmZXIubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR0b2tlbnMucHVzaChcblx0XHRcdFx0XHRuZXcgVG9rZW4oXG5cdFx0XHRcdFx0XHRUb2tlblR5cGUuVEVYVCxcblx0XHRcdFx0XHRcdHRleHRCdWZmZXIsXG5cdFx0XHRcdFx0XHRpIC0gdGV4dEJ1ZmZlci5sZW5ndGgsXG5cdFx0XHRcdFx0XHRpLFxuXHRcdFx0XHRcdFx0dGhpcy5zb3VyY2Vcblx0XHRcdFx0XHQpLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbiAtIHRleHRCdWZmZXIubGVuZ3RoKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHR0ZXh0QnVmZmVyID0gJyc7XG5cdFx0XHR9XG5cdFx0fTtcblxuXG5cdFx0bGV0IGlnbm9yZVdoaXRlc3BhY2U6IGJvb2xlYW4gPSBmYWxzZTtcblx0XHR3aGlsZSAoaSA8IHRoaXMuc291cmNlLmxlbmd0aCkge1xuXHRcdFx0Y29uc3QgY2hhcjogc3RyaW5nID0gdGhpcy5zb3VyY2UuY2hhckF0KGkpO1xuXG5cdFx0XHRpZiAoY2hhciA9PT0gR1JBTU1BUi5TRU1JQ09MT04pIHtcblx0XHRcdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cblx0XHRcdFx0dG9rZW5zLnB1c2gobmV3IFRva2VuKFRva2VuVHlwZS5QVU5DVFVBVElPTiwgY2hhciwgaSwgaSwgdGhpcy5zb3VyY2UpXG5cdFx0XHRcdFx0ICAgICAgICAgICAgLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXG5cdFx0XHRcdGkrKztcblx0XHRcdFx0Y29sdW1uKys7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fSBlbHNlIGlmIChjaGFyID09PSBHUkFNTUFSLkJSQUNFX09QRU4pIHtcblx0XHRcdFx0aWdub3JlV2hpdGVzcGFjZSA9IHRydWU7XG5cdFx0XHR9IGVsc2UgaWYgKGNoYXIgPT09IEdSQU1NQVIuQlJBQ0VfQ0xPU0UpIHtcblx0XHRcdFx0aWdub3JlV2hpdGVzcGFjZSA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaWdub3JlV2hpdGVzcGFjZSkge1xuXHRcdFx0XHRpZiAodGhpcy5tYXRjaFdoaXRlc3BhY2VBdChpKSkge1xuXHRcdFx0XHRcdGkrKztcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaWZJc0NvbnN1bWluZ1B1bmN0dWF0aW9uKClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ1N0cmluZygpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdOdW1iZXIoKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nSWRlbnRpZmllcigpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdPcGVyYXRvcigpXG5cdFx0XHQpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHRleHRCdWZmZXIgKz0gY2hhcjtcblxuXHRcdFx0aWYgKGNoYXIgPT09ICdcXG4nKSB7XG5cdFx0XHRcdGxpbmUrKztcblx0XHRcdFx0Y29sdW1uID0gMDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbHVtbisrO1xuXHRcdFx0fVxuXG5cdFx0XHRpKys7XG5cdFx0fVxuXG5cdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cblx0XHRyZXR1cm4ge3Rva2VuczogdG9rZW5zLCBuZXdJbmRleDogaSwgbGluZTogbGluZSwgY29sdW1uOiBjb2x1bW59O1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUb2tlblN0cmVhbSB7XG5cdHRva2VuczogVG9rZW5bXTtcblx0aW5kZXg6IG51bWJlciA9IDA7XG5cblx0Y29uc3RydWN0b3IodG9rZW5zOiBUb2tlbltdKSB7XG5cdFx0dGhpcy50b2tlbnMgPSB0b2tlbnM7XG5cdH1cblxuXHRyZXdpbmQoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaW5kZXggPiAwKSB7XG5cdFx0XHR0aGlzLmluZGV4LS07XG5cdFx0fVxuXHR9XG5cblx0cGVlaygpOiBUb2tlbiB8IG51bGwge1xuXHRcdHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmluZGV4XSB8fCBudWxsO1xuXHR9XG5cblx0bmV4dCgpOiBUb2tlbiB8IG51bGwge1xuXHRcdHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmluZGV4KytdIHx8IG51bGw7XG5cdH1cblxuXHRoYXNOZXh0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7VG9rZW5pemVyfSBmcm9tIFwiLi4vdG9rZW5pemVyL3Rva2VuaXplclwiO1xuaW1wb3J0IHt0aHJvd0RlcGVuZGVuY3lFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuaW1wb3J0IHR5cGUge1Rva2VufSBmcm9tIFwiLi4vZ3JhbW1hclwiO1xuXG5leHBvcnQgY2xhc3MgU291cmNlIHtcblx0c3RhdGljIE5FV0xJTkUgPSAnXFxuJztcblx0cHVibGljIHJlYWRvbmx5IHVybDogc3RyaW5nO1xuXHRwcml2YXRlIGNvZGU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihjb2RlOiBzdHJpbmcsIHVybDogc3RyaW5nID0gJzxpbmxpbmU+Jykge1xuXHRcdHRoaXMudXJsID0gdXJsO1xuXHRcdHRoaXMuY29kZSA9IGNvZGU7XG5cdH1cblxuXHRnZXQgbGVuZ3RoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuY29kZS5sZW5ndGg7XG5cdH1cblxuXHRnZXRUb2tlbml6ZXIoKTogVG9rZW5pemVyIHtcblx0XHRyZXR1cm4gbmV3IFRva2VuaXplcih0aGlzKTtcblx0fVxuXG5cdHNsaWNlKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5jb2RlLnNsaWNlKHN0YXJ0LCBlbmQpO1xuXHR9XG5cblx0Y2hhckF0KGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmNvZGUuY2hhckF0KGluZGV4KTtcblx0fVxuXG5cdHN0YXJ0c1dpdGgodGV4dDogc3RyaW5nLCBwb3NpdGlvbj86IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvZGUuc3RhcnRzV2l0aCh0ZXh0LCBwb3NpdGlvbik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFNvdXJjZVNwYW4ge1xuXHRzb3VyY2U6IFNvdXJjZTtcblx0c3RhcnQ6IG51bWJlcjtcblx0ZW5kOiBudW1iZXI7XG5cdGxpbmU6IG51bWJlcjtcblx0Y29sdW1uOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3Ioc291cmNlOiBTb3VyY2UsIHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XG5cdFx0dGhpcy5zb3VyY2UgPSBzb3VyY2U7XG5cdFx0dGhpcy5zdGFydCA9IHN0YXJ0O1xuXHRcdHRoaXMuZW5kID0gZW5kO1xuXG5cdFx0Y29uc3QgYmVmb3JlID0gc291cmNlLnNsaWNlKDAsIHN0YXJ0KTtcblx0XHRjb25zdCBsaW5lcyA9IGJlZm9yZS5zcGxpdChTb3VyY2UuTkVXTElORSk7XG5cblx0XHR0aGlzLmxpbmUgPSBsaW5lcy5sZW5ndGg7XG5cdFx0dGhpcy5jb2x1bW4gPSAobGluZXNbbGluZXMubGVuZ3RoIC0gMV0gfHwgJycpLmxlbmd0aCArIDE7XG5cdH1cblxuXHR0ZXh0KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlLnNsaWNlKHRoaXMuc3RhcnQsIHRoaXMuZW5kKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BhbkZyb20oc3RhcnRUb2tlbjogVG9rZW4sIGVuZFRva2VuOiBUb2tlbik6IFNvdXJjZVNwYW4ge1xuXHRyZXR1cm4gbmV3IFNvdXJjZVNwYW4oc3RhcnRUb2tlbi5zb3VyY2UsIHN0YXJ0VG9rZW4uc3RhcnQsIGVuZFRva2VuLmVuZCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFNvdXJjZSh1cmw6IHN0cmluZyk6IFByb21pc2U8U291cmNlPiB7XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcblx0aWYgKCFyZXNwb25zZS5vaykge1xuXHRcdHRocm93RGVwZW5kZW5jeUVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7dXJsfWApO1xuXHR9XG5cblx0cmV0dXJuIG5ldyBTb3VyY2UoYXdhaXQgcmVzcG9uc2UudGV4dCgpLCB1cmwpO1xufVxuIiwKICAgICJpbXBvcnQge1NvdXJjZSwgU291cmNlU3Bhbn0gZnJvbSBcIi4vcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuY2xhc3MgRXJyb3JUeXBlcyB7XG5cdHN0YXRpYyBUWVBFX0VSUk9SOiBzdHJpbmcgPSAnVHlwZUVycm9yJztcblx0c3RhdGljIFRPS0VOX0VSUk9SOiBzdHJpbmcgPSAnVG9rZW5FcnJvcic7XG5cdHN0YXRpYyBQQVJTRVJfRVJST1I6IHN0cmluZyA9ICdQYXJzZXJFcnJvcic7XG5cdHN0YXRpYyBSVU5USU1FX0VSUk9SOiBzdHJpbmcgPSAnUnVudGltZUVycm9yJztcblx0c3RhdGljIElOVEVSTkFMX0VSUk9SOiBzdHJpbmcgPSAnSW50ZXJuYWxFcnJvcic7XG5cdHN0YXRpYyBOQVRJVkVfRVJST1I6IHN0cmluZyA9ICdOYXRpdmVFcnJvcic7XG5cdHN0YXRpYyBERVBFTkRFTkNZX0VSUk9SOiBzdHJpbmcgPSAnRGVwZW5kZW5jeUVycm9yJztcbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFFcnJvciBleHRlbmRzIEVycm9yIHtcblx0a2luZDogc3RyaW5nO1xuXHRzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGw7XG5cdG92ZXJyaWRlIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRraW5kOiBzdHJpbmcsXG5cdFx0bWVzc2FnZTogc3RyaW5nLFxuXHRcdHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCxcblx0XHRjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGxcblx0KSB7XG5cdFx0c3VwZXIobWVzc2FnZSk7XG5cdFx0dGhpcy5raW5kID0ga2luZDtcblx0XHR0aGlzLnNwYW4gPSBzcGFuO1xuXHRcdHRoaXMuY2F1c2UgPSBjYXVzZTtcblx0fVxuXG5cdGZvcm1hdCgpOiBzdHJpbmcge1xuXHRcdGlmICh0aGlzLnNwYW4pIHtcblxuXHRcdFx0cmV0dXJuIGBcblske3RoaXMua2luZH1dICR7dGhpcy5tZXNzYWdlfVxuICBhdCAke3RoaXMuc3Bhbi5zb3VyY2UudXJsfToke3RoaXMuc3Bhbi5saW5lfToke3RoaXMuc3Bhbi5jb2x1bW59XG5cbiR7dGhpcy5zcGFuLnRleHQoKX1cbiR7XCIgXCIucmVwZWF0KHRoaXMuc3Bhbi5jb2x1bW4pfSR7XCJeXCIucmVwZWF0KHRoaXMuc3Bhbi5lbmQgLSB0aGlzLnNwYW4uc3RhcnQpfVxuYDtcblx0XHR9XG5cblx0XHRyZXR1cm4gYFske3RoaXMua2luZH1dICR7dGhpcy5tZXNzYWdlfWA7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFUb2tlbkVycm9yIGV4dGVuZHMgTHlyYUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0RXJyb3JUeXBlcy5UT0tFTl9FUlJPUixcblx0XHRcdG1lc3NhZ2UsXG5cdFx0XHRzcGFuLFxuXHRcdFx0Y2F1c2Vcblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhVHlwZUVycm9yIGV4dGVuZHMgTHlyYUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0RXJyb3JUeXBlcy5UWVBFX0VSUk9SLFxuXHRcdFx0bWVzc2FnZSxcblx0XHRcdHNwYW4sXG5cdFx0XHRjYXVzZVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFQYXJzZXJFcnJvciBleHRlbmRzIEx5cmFFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihcblx0XHRcdEVycm9yVHlwZXMuUEFSU0VSX0VSUk9SLFxuXHRcdFx0bWVzc2FnZSxcblx0XHRcdHNwYW4sXG5cdFx0XHRjYXVzZVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFSdW50aW1lRXJyb3IgZXh0ZW5kcyBMeXJhRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRFcnJvclR5cGVzLlJVTlRJTUVfRVJST1IsXG5cdFx0XHRtZXNzYWdlLFxuXHRcdFx0c3Bhbixcblx0XHRcdGNhdXNlXG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYU5hdGl2ZUVycm9yIGV4dGVuZHMgTHlyYUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0RXJyb3JUeXBlcy5OQVRJVkVfRVJST1IsXG5cdFx0XHRtZXNzYWdlLFxuXHRcdFx0c3Bhbixcblx0XHRcdGNhdXNlXG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYURlcGVuZGVuY3lFcnJvciBleHRlbmRzIEx5cmFFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihcblx0XHRcdEVycm9yVHlwZXMuREVQRU5ERU5DWV9FUlJPUixcblx0XHRcdG1lc3NhZ2UsXG5cdFx0XHRzcGFuLFxuXHRcdFx0Y2F1c2Vcblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Rva2VuRXJyb3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IG5ldmVyIHtcblx0dGhyb3cgbmV3IEx5cmFUb2tlbkVycm9yKG1lc3NhZ2UsIHNwYW4sIGNhdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93VHlwZUVycm9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBuZXZlciB7XG5cdHRocm93IG5ldyBMeXJhVHlwZUVycm9yKG1lc3NhZ2UsIHNwYW4sIGNhdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UGFyc2VyRXJyb3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IG5ldmVyIHtcblx0dGhyb3cgbmV3IEx5cmFQYXJzZXJFcnJvcihtZXNzYWdlLCBzcGFuLCBjYXVzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1J1bnRpbWVFcnJvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKTogbmV2ZXIge1xuXHR0aHJvdyBuZXcgTHlyYVJ1bnRpbWVFcnJvcihtZXNzYWdlLCBzcGFuLCBjYXVzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd05hdGl2ZUVycm9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBuZXZlciB7XG5cdHRocm93IG5ldyBMeXJhTmF0aXZlRXJyb3IobWVzc2FnZSwgc3BhbiwgY2F1c2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dEZXBlbmRlbmN5RXJyb3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IG5ldmVyIHtcblx0dGhyb3cgbmV3IEx5cmFEZXBlbmRlbmN5RXJyb3IobWVzc2FnZSwgc3BhbiwgY2F1c2UpO1xufVxuXG4vKipcbiAqIEB0aHJvd3Mge0Vycm9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24gd3JhcEpzRXJyb3IoZXJyb3I6IEVycm9yLCBzb3VyY2U6IFNvdXJjZSk6IEx5cmFFcnJvciB7XG5cdGlmIChlcnJvciBpbnN0YW5jZW9mIEx5cmFFcnJvcikge1xuXHRcdHJldHVybiBlcnJvcjtcblx0fVxuXG5cdHJldHVybiBuZXcgTHlyYUVycm9yKFxuXHRcdEVycm9yVHlwZXMuSU5URVJOQUxfRVJST1IsXG5cdFx0ZXJyb3IubWVzc2FnZSB8fCBTdHJpbmcoZXJyb3IpLFxuXHRcdG5ldyBTb3VyY2VTcGFuKHNvdXJjZSwgMCwgc291cmNlLmxlbmd0aClcblx0KTtcbn1cbiIsCiAgICAiaW1wb3J0IHtBU1RDbGFzc05vZGUsIEFTVE5vZGVUeXBlfSBmcm9tIFwiLi4vY29yZS9hc3RcIjtcbmltcG9ydCB7Q2xhc3NEZWZpbml0aW9ufSBmcm9tIFwiLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4uL2NvcmUvcGFyc2VyL3BhcnNlclwiO1xuaW1wb3J0IHt0aHJvd1J1bnRpbWVFcnJvcn0gZnJvbSBcIi4uL2NvcmUvZXJyb3JzXCI7XG5pbXBvcnQgdHlwZSB7U291cmNlfSBmcm9tIFwiLi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5leHBvcnQgY2xhc3MgTmF0aXZlQ2xhc3Mge1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cdHJlYWRvbmx5IG5hdGl2ZUluc3RhbmNlOiBhbnk7XG5cdHJlYWRvbmx5IG5hdGl2ZUNsYXNzU291cmNlOiBTb3VyY2U7XG5cdGlzQXV0b2xvYWRBYmxlOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBuYXRpdmVJbnN0YW5jZTogYW55LCBzb3VyY2U6IFNvdXJjZSkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5uYXRpdmVJbnN0YW5jZSA9IG5hdGl2ZUluc3RhbmNlO1xuXHRcdHRoaXMubmF0aXZlQ2xhc3NTb3VyY2UgPSBzb3VyY2U7XG5cdH1cblxuXHRnZXRDbGFzc0RlZmluaXRpb24oKTogQ2xhc3NEZWZpbml0aW9uIHtcblx0XHRjb25zdCBhc3QgPSBuZXcgUGFyc2VyKHRoaXMubmF0aXZlQ2xhc3NTb3VyY2UpLnBhcnNlKCk7XG5cblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgYXN0LmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5DTEFTUykge1xuXHRcdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVENsYXNzTm9kZSAmJiBub2RlLm5hbWUgPT09IHRoaXMubmFtZSkge1xuXHRcdFx0XHRcdGNvbnN0IGNsYXNzRGVmID0gQ2xhc3NEZWZpbml0aW9uLmZyb21BU1Qobm9kZSk7XG5cblx0XHRcdFx0XHRjbGFzc0RlZi5uYXRpdmVJbnN0YW5jZSA9IHRoaXMubmF0aXZlSW5zdGFuY2U7XG5cblx0XHRcdFx0XHRyZXR1cm4gY2xhc3NEZWY7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgQ2xhc3MgJHt0aGlzLm5hbWV9IG5vdCBmb3VuZC5gLCBhc3Quc3Bhbik7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtBU1RBcnJheU5vZGUsIEFTVE5vZGUsIEFTVE5vZGVUeXBlLCBBU1RSZXR1cm5Ob2RlfSBmcm9tIFwiLi4vYXN0XCI7XG5pbXBvcnQge0dSQU1NQVIsIFRZUEVfRU5VTX0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcbmltcG9ydCB7Q2xhc3NEZWZpbml0aW9uLCBJbnN0YW5jZX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB7dGhyb3dOYXRpdmVFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuXG5pbnRlcmZhY2UgU2VyaWFsaXphdGlvbk9iamVjdCB7XG5cdFtpbmRleDogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdGNsYXNzTmFtZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGNsYXNzTmFtZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG5cdH1cblxuXHRwdWJsaWMgc2VyaWFsaXplKCk6IFNlcmlhbGl6YXRpb25PYmplY3Qge1xuXHRcdGNvbnN0IG9iamVjdDogU2VyaWFsaXphdGlvbk9iamVjdCA9IHt9O1xuXG5cdFx0b2JqZWN0W3RoaXMuY2xhc3NOYW1lXSA9IE9iamVjdFxuXHRcdFx0LmtleXModGhpcylcblx0XHRcdC5maWx0ZXIoa2V5ID0+IGtleSAhPT0gJ2NsYXNzTmFtZScpXG5cdFx0XHQucmVkdWNlKChvYmplY3Q6IFNlcmlhbGl6YXRpb25PYmplY3QsIGtleTogc3RyaW5nKTogU2VyaWFsaXphdGlvbk9iamVjdCA9PiB7XG5cdFx0XHRcdGNvbnN0IGNvcHk6IFNlcmlhbGl6YXRpb25PYmplY3QgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzKTtcblx0XHRcdFx0b2JqZWN0W2tleV0gPSBjb3B5W2tleV07XG5cdFx0XHRcdHJldHVybiBvYmplY3Q7XG5cdFx0XHR9LCB7fSk7XG5cblx0XHRyZXR1cm4gb2JqZWN0O1xuXHR9XG5cblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHtjbGFzc05hbWU6IHRoaXMuY2xhc3NOYW1lfSwgbnVsbCwgMik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFPYmplY3RWaWV3IGV4dGVuZHMgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdHByaXZhdGUgX19pbnN0YW5jZTogSW5zdGFuY2U7XG5cblx0Y29uc3RydWN0b3IoaW5zdGFuY2U6IEluc3RhbmNlKSB7XG5cdFx0c3VwZXIoaW5zdGFuY2UuX19jbGFzc0RlZi5uYW1lKTtcblxuXHRcdHRoaXMuX19pbnN0YW5jZSA9IGluc3RhbmNlO1xuXG5cdFx0cmV0dXJuIG5ldyBQcm94eSh0aGlzLCB7XG5cdFx0XHRnZXQ6IChfOiBhbnksIG5hbWU6IHN0cmluZyk6IGFueSA9PiB7XG5cdFx0XHRcdGlmIChuYW1lIGluIHRoaXMuX19pbnN0YW5jZS5fX2luc3RhbmNlRmllbGRzKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX19pbnN0YW5jZS5fX2luc3RhbmNlRmllbGRzW25hbWVdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKG5hbWUgaW4gdGhpcy5fX2luc3RhbmNlLl9fc3RhdGljRmllbGRzKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX19pbnN0YW5jZS5fX3N0YXRpY0ZpZWxkc1tuYW1lXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChuYW1lIGluIHRoaXMpIHtcblx0XHRcdFx0XHRjb25zdCBzZWxmOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB0aGlzO1xuXHRcdFx0XHRcdHJldHVybiBzZWxmW25hbWVdO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IChfOiBhbnksIG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IGFueSA9PiB7XG5cdFx0XHRcdGlmIChuYW1lIGluIHRoaXMuX19pbnN0YW5jZS5fX2luc3RhbmNlRmllbGRzKSB7XG5cdFx0XHRcdFx0dGhpcy5fX2luc3RhbmNlLl9faW5zdGFuY2VGaWVsZHNbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChuYW1lIGluIHRoaXMuX19pbnN0YW5jZS5fX3N0YXRpY0ZpZWxkcykge1xuXHRcdFx0XHRcdHRoaXMuX19pbnN0YW5jZS5fX3N0YXRpY0ZpZWxkc1tuYW1lXSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdH0pXG5cdH1cblxuXHRwdWJsaWMgb3ZlcnJpZGUgc2VyaWFsaXplKCk6IFNlcmlhbGl6YXRpb25PYmplY3Qge1xuXHRcdGNvbnN0IG9iamVjdDogU2VyaWFsaXphdGlvbk9iamVjdCA9IHt9O1xuXG5cdFx0b2JqZWN0W3RoaXMuY2xhc3NOYW1lXSA9IHsuLi50aGlzLl9faW5zdGFuY2U/Ll9faW5zdGFuY2VGaWVsZHN9O1xuXG5cdFx0cmV0dXJuIG9iamVjdDtcblx0fVxuXG5cdHB1YmxpYyBvdmVycmlkZSB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnNlcmlhbGl6ZSgpLCBudWxsLCAyKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FzdFZhbHVlKHZhbHVlOiBhbnksIGV4cGVjdGVkOiBhbnkgPSBudWxsKTogYW55IHtcblx0Y29uc3QgdHlwZU9mID0gdHlwZW9mIHZhbHVlO1xuXG5cdGlmIChleHBlY3RlZCA9PT0gbnVsbCkge1xuXHRcdGlmICh2YWx1ZSA9PT0gR1JBTU1BUi5OVUxMKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0aWYgKHZhbHVlID09PSBHUkFNTUFSLlRSVUUpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRpZiAodmFsdWUgPT09IEdSQU1NQVIuRkFMU0UpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKHR5cGVPZiA9PT0gJ3N0cmluZycgJiYgdmFsdWUudHJpbSgpICE9PSAnJyAmJiAhaXNOYU4odmFsdWUpKSB7XG5cdFx0XHRyZXR1cm4gTnVtYmVyKHZhbHVlKTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0c3dpdGNoIChleHBlY3RlZCkge1xuXHRcdGNhc2UgVFlQRV9FTlVNLlNUUklORzpcblx0XHRcdHJldHVybiB0eXBlT2YgPT09ICdzdHJpbmcnID8gdmFsdWUgOiBTdHJpbmcodmFsdWUpO1xuXG5cdFx0Y2FzZSBUWVBFX0VOVU0uTlVNQkVSOlxuXHRcdFx0cmV0dXJuIHR5cGVPZiA9PT0gJ251bWJlcicgPyB2YWx1ZSA6IE51bWJlcih2YWx1ZSk7XG5cblx0XHRjYXNlIFRZUEVfRU5VTS5CT09MRUFOOlxuXHRcdFx0cmV0dXJuIHR5cGVPZiA9PT0gJ2Jvb2xlYW4nID8gdmFsdWUgOiB2YWx1ZSA9PT0gJ3RydWUnO1xuXG5cdFx0Y2FzZSBUWVBFX0VOVU0uTlVMTDpcblx0XHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9MeXJhU3RyaW5nKHZhbHVlOiBzdHJpbmcpOiBBU1ROb2RlIHtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLlNUUklORyk7XG5cdG5vZGUudmFsdWUgPSB2YWx1ZTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0x5cmFOdW1iZXIodmFsdWU6IG51bWJlcik6IEFTVE5vZGUge1xuXHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuTlVNQkVSKTtcblx0bm9kZS52YWx1ZSA9IHZhbHVlO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTHlyYUJvb2xlYW4odmFsdWU6IGJvb2xlYW4pOiBBU1ROb2RlIHtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLkJPT0xFQU4pO1xuXHRub2RlLnZhbHVlID0gdmFsdWU7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9MeXJhTnVsbCgpOiBBU1ROb2RlIHtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLk5VTEwpO1xuXHRub2RlLnZhbHVlID0gR1JBTU1BUi5OVUxMO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTHlyYUFycmF5KHZhbHVlczogYW55W10pOiBBU1ROb2RlIHtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RBcnJheU5vZGUoKTtcblx0bm9kZS5lbGVtZW50cyA9IHZhbHVlcy5tYXAodmFsdWUgPT4gdG9MeXJhVmFsdWUodmFsdWUpKTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0x5cmFWYWx1ZSh2YWx1ZTogYW55KTogQVNUTm9kZSB7XG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFTVE5vZGUpIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSBUWVBFX0VOVU0uU1RSSU5HKSB7XG5cdFx0cmV0dXJuIHRvTHlyYVN0cmluZyh2YWx1ZSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSBUWVBFX0VOVU0uTlVNQkVSKSB7XG5cdFx0cmV0dXJuIHRvTHlyYU51bWJlcih2YWx1ZSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSBUWVBFX0VOVU0uQk9PTEVBTikge1xuXHRcdHJldHVybiB0b0x5cmFCb29sZWFuKHZhbHVlKTtcblx0fVxuXG5cdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIHRvTHlyYU51bGwoKTtcblx0fVxuXG5cdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdHJldHVybiB0b0x5cmFBcnJheSh2YWx1ZSk7XG5cdH1cblxuXHR0aHJvd05hdGl2ZUVycm9yKCdDYW5ub3QgY29udmVydCBuYXRpdmUgb2JqZWN0IHRvIEx5cmEgdmFsdWUnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21MeXJhVmFsdWUodmFsdWU6IGFueSk6IGFueSB7XG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFTVE5vZGUpIHtcblx0XHRyZXR1cm4gY2FzdFZhbHVlKHZhbHVlLnZhbHVlKTtcblx0fVxuXG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEluc3RhbmNlKSB7XG5cdFx0aWYgKHZhbHVlLl9fbmF0aXZlSW5zdGFuY2UpIHtcblx0XHRcdHJldHVybiB2YWx1ZS5fX25hdGl2ZUluc3RhbmNlO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgTHlyYU9iamVjdFZpZXcodmFsdWUpO1xuXHR9XG5cblx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0cmV0dXJuIHZhbHVlLm1hcChmcm9tTHlyYVZhbHVlKTtcblx0fVxuXG5cdHJldHVybiBjYXN0VmFsdWUodmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuVmFsdWUodmFsdWU6IGFueSk6IEFTVFJldHVybk5vZGUge1xuXHRjb25zdCBub2RlID0gbmV3IEFTVFJldHVybk5vZGUoKTtcblx0bm9kZS5hcmd1bWVudCA9IHRvTHlyYVZhbHVlKHZhbHVlKTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwTmF0aXZlSW5zdGFuY2UobHlyYU5hdGl2ZU9iamVjdDogTHlyYU5hdGl2ZU9iamVjdCwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogSW5zdGFuY2Uge1xuXHRpZiAoIW9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuaGFzKGx5cmFOYXRpdmVPYmplY3QuY2xhc3NOYW1lKSkge1xuXHRcdHRocm93TmF0aXZlRXJyb3IoYENsYXNzICR7bHlyYU5hdGl2ZU9iamVjdC5jbGFzc05hbWV9IG5vdCBmb3VuZC5gKTtcblx0fVxuXG5cdGNvbnN0IGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24gPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChseXJhTmF0aXZlT2JqZWN0LmNsYXNzTmFtZSk7XG5cdGNvbnN0IGluc3RhbmNlOiBJbnN0YW5jZSA9IGNsYXNzRGVmLmNvbnN0cnVjdEVtcHR5SW5zdGFuY2UoKTtcblxuXHRpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlID0gbHlyYU5hdGl2ZU9iamVjdDtcblxuXHRyZXR1cm4gaW5zdGFuY2U7XG59XG5cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uLy4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuY29uc3QgQ0xBU1NfTkFNRSA9ICdTdHJpbmcnO1xuXG5leHBvcnQgY2xhc3MgTHlyYVN0cmluZyBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHR2YWx1ZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcpIHtcblx0XHRzdXBlcihDTEFTU19OQU1FKTtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdH1cblxuXHQvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG5cdHRvVXBwZXJDYXNlKCk6IEx5cmFTdHJpbmcge1xuXHRcdHJldHVybiBuZXcgTHlyYVN0cmluZyh0aGlzLnZhbHVlLnRvVXBwZXJDYXNlKCkpO1xuXHR9XG5cblx0Ly8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuXHR0b0xvd2VyQ2FzZSgpOiBMeXJhU3RyaW5nIHtcblx0XHRyZXR1cm4gbmV3IEx5cmFTdHJpbmcodGhpcy52YWx1ZS50b0xvd2VyQ2FzZSgpKTtcblx0fVxuXG5cdG92ZXJyaWRlIHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0cmluZ1R5cGUgZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdENMQVNTX05BTUUsXG5cdFx0XHRMeXJhU3RyaW5nLFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfSB7XG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWx1ZSk7XG5cdFx0XHRcdFxuXHRwdWJsaWMgdG9VcHBlckNhc2UoKTogJHtDTEFTU19OQU1FfTtcblx0XG5cdHB1YmxpYyB0b0xvd2VyQ2FzZSgpOiAke0NMQVNTX05BTUV9O1xuXG5cdHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmc7XG59YFxuXHRcdFx0KSk7XG5cblx0XHR0aGlzLmlzQXV0b2xvYWRBYmxlID0gdHJ1ZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge05hdGl2ZUNsYXNzfSBmcm9tIFwiLi4vbmF0aXZlX2NsYXNzXCI7XG5pbXBvcnQge0x5cmFOYXRpdmVPYmplY3R9IGZyb20gXCIuLi8uLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX2NvbnZlcnNpb25cIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vLi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5jb25zdCBDTEFTU19OQU1FID0gJ1N5c3RlbSc7XG5cbmV4cG9ydCBjbGFzcyBMeXJhU3lzdGVtIHtcblx0c3RhdGljIGFsZXJ0KG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuXHRcdGFsZXJ0KG1lc3NhZ2UpO1xuXHR9XG5cblx0c3RhdGljIHByaW50KG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuXHRcdGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuXHR9XG5cblx0c3RhdGljIGluZm8odmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdGNvbnNvbGUuaW5mbyh2YWx1ZS5zZXJpYWxpemUoKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnNvbGUuaW5mbyh2YWx1ZSk7XG5cdH1cblxuXHRzdGF0aWMgd2FybmluZyh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgTHlyYU5hdGl2ZU9iamVjdCkge1xuXHRcdFx0Y29uc29sZS53YXJuKHZhbHVlLnNlcmlhbGl6ZSgpKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc29sZS53YXJuKHZhbHVlKTtcblx0fVxuXG5cdHN0YXRpYyBlcnJvcih2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgTHlyYU5hdGl2ZU9iamVjdCkge1xuXHRcdFx0Y29uc29sZS5lcnJvcih2YWx1ZS5zZXJpYWxpemUoKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnNvbGUuZXJyb3IodmFsdWUpO1xuXHR9XG5cblx0c3RhdGljIGxvZyh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgTHlyYU5hdGl2ZU9iamVjdCkge1xuXHRcdFx0Y29uc29sZS5sb2codmFsdWUuc2VyaWFsaXplKCkpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zb2xlLmxvZyh2YWx1ZSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFN5c3RlbSBleHRlbmRzIE5hdGl2ZUNsYXNzIHtcblx0c3RhdGljIENMQVNTX05BTUUgPSBDTEFTU19OQU1FO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0Q0xBU1NfTkFNRSxcblx0XHRcdEx5cmFTeXN0ZW0sXG5cdFx0XHRuZXcgU291cmNlKFxuXHRcdFx0XHRgXG5jbGFzcyAke0NMQVNTX05BTUV9IHtcblx0cHVibGljIHN0YXRpYyBhbGVydChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkO1xuXHRcblx0cHVibGljIHN0YXRpYyBwcmludChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkO1xuXHRcblx0cHVibGljIHN0YXRpYyBpbmZvKHZhbHVlOiBtaXhlZCk6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgc3RhdGljIHdhcm5pbmcodmFsdWU6IG1peGVkKTogdm9pZDtcblx0XG5cdHB1YmxpYyBzdGF0aWMgZXJyb3IodmFsdWU6IG1peGVkKTogdm9pZDtcblx0XG5cdHB1YmxpYyBzdGF0aWMgbG9nKHZhbHVlOiBtaXhlZCk6IHZvaWQ7XG59YFxuXHRcdFx0KSk7XG5cblx0XHR0aGlzLmlzQXV0b2xvYWRBYmxlID0gZmFsc2U7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuLi8uLi9jb3JlL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmNvbnN0IENMQVNTX05BTUUgPSAnQXNzZXJ0JztcblxuY29uc3QgaWZGYWlsZWQgPSAobWVzc2FnZTogc3RyaW5nID0gJycpID0+IHtcblx0dGhyb3cgbmV3IEVycm9yKCdbQXNzZXJ0aW9uRXJyb3JdICcgKyAobWVzc2FnZSB8fCAnQXNzZXJ0aW9uIGZhaWxlZC4nKSk7XG59O1xuXG5leHBvcnQgY2xhc3MgTHlyYUFzc2VydCB7XG5cdHN0YXRpYyBpc1RydWUoY29uZGl0aW9uOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcgPSAnJykge1xuXHRcdGlmICghY29uZGl0aW9uKSB7XG5cdFx0XHRpZkZhaWxlZChtZXNzYWdlKTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgaXNGYWxzZShjb25kaXRpb246IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZyA9ICcnKSB7XG5cdFx0aWYgKGNvbmRpdGlvbikge1xuXHRcdFx0aWZGYWlsZWQobWVzc2FnZSk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBc3NlcnQgZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdENMQVNTX05BTUUsXG5cdFx0XHRMeXJhQXNzZXJ0LFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfSB7XG5cdHB1YmxpYyBzdGF0aWMgaXNUcnVlKGNvbmRpdGlvbjogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nID0gXCJcIik6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgc3RhdGljIGlzRmFsc2UoY29uZGl0aW9uOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcgPSBcIlwiKTogdm9pZDtcbn1gXG5cdFx0XHQpKTtcblxuXHRcdHRoaXMuaXNBdXRvbG9hZEFibGUgPSBmYWxzZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge05hdGl2ZUNsYXNzfSBmcm9tIFwiLi4vbmF0aXZlX2NsYXNzXCI7XG5pbXBvcnQge0x5cmFOYXRpdmVPYmplY3R9IGZyb20gXCIuLi8uLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX2NvbnZlcnNpb25cIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vLi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5jb25zdCBDTEFTU19OQU1FID0gJ051bWJlcic7XG5cbmV4cG9ydCBjbGFzcyBMeXJhTnVtYmVyIGV4dGVuZHMgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdHZhbHVlOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IodmFsdWU6IG51bWJlcikge1xuXHRcdHN1cGVyKENMQVNTX05BTUUpO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0fVxuXG5cdG92ZXJyaWRlIHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWUudG9TdHJpbmcoKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTnVtYmVyVHlwZSBleHRlbmRzIE5hdGl2ZUNsYXNzIHtcblx0c3RhdGljIENMQVNTX05BTUUgPSBDTEFTU19OQU1FO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0Q0xBU1NfTkFNRSxcblx0XHRcdEx5cmFOdW1iZXIsXG5cdFx0XHRuZXcgU291cmNlKFxuXHRcdFx0XHRgXG5jbGFzcyAke0NMQVNTX05BTUV9IHtcblx0cHVibGljIGNvbnN0cnVjdG9yKHZhbHVlKTtcblxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IHRydWU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uLy4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuY29uc3QgQVJSQVlfQ0xBU1NfTkFNRSA9ICdBcnJheSc7XG5jb25zdCBBUlJBWV9JVEVSQVRPUl9DTEFTU19OQU1FID0gJ0FycmF5SXRlcmF0b3InO1xuXG5leHBvcnQgY2xhc3MgTHlyYUFycmF5IGV4dGVuZHMgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdHZhbHVlczogYW55W107XG5cblx0Y29uc3RydWN0b3IodmFsdWVzOiBhbnlbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQVJSQVlfQ0xBU1NfTkFNRSk7XG5cblx0XHR0aGlzLnZhbHVlcyA9IHZhbHVlcztcblx0fVxuXG5cdGl0ZXJhdG9yKCk6IEx5cmFBcnJheUl0ZXJhdG9yIHtcblx0XHRyZXR1cm4gbmV3IEx5cmFBcnJheUl0ZXJhdG9yKHRoaXMpO1xuXHR9XG5cblx0bGVuZ3RoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzLmxlbmd0aDtcblx0fVxuXG5cdHB1c2godmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMudmFsdWVzLnB1c2godmFsdWUpO1xuXHR9XG5cblx0Ly8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuXHRnZXQoaW5kZXg6IG51bWJlcik6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzW2luZGV4XSA/PyBudWxsO1xuXHR9XG5cblx0Ly8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuXHRyZW1vdmVBdChpbmRleDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy52YWx1ZXMgPSB0aGlzLnZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHR9XG5cblx0b3ZlcnJpZGUgdG9TdHJpbmcoKTogc3RyaW5nIHtcblx0XHRjb25zdCB2YWx1ZXMgPSB0aGlzXG5cdFx0XHQudmFsdWVzXG5cdFx0XHQubWFwKHZhbHVlID0+IHtcblx0XHRcdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgTHlyYUFycmF5KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0fSk7XG5cblx0XHRyZXR1cm4gYFske3ZhbHVlcy5qb2luKCcsICcpfV1gO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBcnJheVR5cGUgZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQVJSQVlfQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdEFSUkFZX0NMQVNTX05BTUUsXG5cdFx0XHRMeXJhQXJyYXksXG5cdFx0XHRuZXcgU291cmNlKFxuXHRcdFx0XHRgXG5jbGFzcyAke0FSUkFZX0NMQVNTX05BTUV9PFQ+IGltcGxlbWVudHMgSXRlcmFibGU8VD4ge1xuXHRwdWJsaWMgY29uc3RydWN0b3IodmFsdWVzID0gW10pO1xuXHRcblx0cHVibGljIGl0ZXJhdG9yKCk6IEl0ZXJhdG9yPFQ+O1xuXHRcblx0cHVibGljIGxlbmd0aCgpOiBudW1iZXI7XG5cdFxuXHRwdWJsaWMgcHVzaCh2YWx1ZTogVCk6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBUPztcblx0XG5cdHB1YmxpYyByZW1vdmVBdChpbmRleDogbnVtYmVyKTogdm9pZDtcblx0XG5cdHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmc7XG59YFxuXHRcdFx0KSk7XG5cblx0XHR0aGlzLmlzQXV0b2xvYWRBYmxlID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYUFycmF5SXRlcmF0b3IgZXh0ZW5kcyBMeXJhTmF0aXZlT2JqZWN0IHtcblx0dmFsdWVzOiBhbnlbXTtcblx0aW5kZXg6IG51bWJlciA9IDA7XG5cblx0Y29uc3RydWN0b3IoYXJyYXk6IEx5cmFBcnJheSkge1xuXHRcdHN1cGVyKEFSUkFZX0lURVJBVE9SX0NMQVNTX05BTUUpO1xuXG5cdFx0dGhpcy52YWx1ZXMgPSBhcnJheS52YWx1ZXM7XG5cdH1cblxuXHRyZXdpbmQoKSB7XG5cdFx0dGhpcy5pbmRleCA9IDA7XG5cdH1cblxuXHRoYXNOZXh0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmluZGV4IDwgdGhpcy52YWx1ZXMubGVuZ3RoO1xuXHR9XG5cblx0bmV4dCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pbmRleCArIDEgPiB0aGlzLnZhbHVlcy5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmluZGV4Kys7XG5cdH1cblxuXHQvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG5cdHByZXZpb3VzKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmluZGV4ICsgMSA8IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmluZGV4LS07XG5cdH1cblxuXHQvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG5cdGtleSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmluZGV4O1xuXHR9XG5cblx0Y3VycmVudCgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlc1t0aGlzLmluZGV4XTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQXJyYXlJdGVyYXRvclR5cGUgZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQVJSQVlfSVRFUkFUT1JfQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdEFSUkFZX0lURVJBVE9SX0NMQVNTX05BTUUsXG5cdFx0XHRMeXJhQXJyYXksXG5cdFx0XHRuZXcgU291cmNlKFxuXHRcdFx0XHRgXG5jbGFzcyAke0FSUkFZX0lURVJBVE9SX0NMQVNTX05BTUV9PFQ+IGltcGxlbWVudHMgSXRlcmF0b3I8VD4ge1xuXHRwdWJsaWMgY29uc3RydWN0b3IoYXJyYXk6IEFycmF5PFQ+KTtcblx0XG5cdHB1YmxpYyBoYXNOZXh0KCk6IGJvb2xlYW47XG5cdFxuXHRwdWJsaWMgbmV4dCgpOiB2b2lkO1xuXHRcblx0cHVibGljIHByZXZpb3VzKCk6IHZvaWQ7XG5cdFxuXHRwdWJsaWMga2V5KCk6IG51bWJlcjtcblx0XG5cdHB1YmxpYyBjdXJyZW50KCk6IFQ7XG5cdFxuXHRwdWJsaWMgcmV3aW5kKCk6IHZvaWQ7XG59YFxuXHRcdFx0KSk7XG5cblx0XHR0aGlzLmlzQXV0b2xvYWRBYmxlID0gdHJ1ZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge3RvTHlyYVZhbHVlfSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfY29udmVyc2lvblwiO1xuaW1wb3J0IHtMYW1iZGFGdW5jdGlvbkNhbGx9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9ydW50aW1lXCI7XG5cblxuZXhwb3J0IGNsYXNzIFN0YXRlPFQgPSBhbnk+IHtcblx0cHJpdmF0ZSB2YWx1ZTogVDtcblx0cHJpdmF0ZSBzdWJzY3JpYmVyczogTWFwPG51bWJlciwgKHZhbHVlOiBUKSA9PiB2b2lkPiA9IG5ldyBNYXA8bnVtYmVyLCAodmFsdWU6IFQpID0+IHZvaWQ+KCk7XG5cdHByaXZhdGUgaWQ6IG51bWJlciA9IDA7XG5cblx0Y29uc3RydWN0b3IoaW5pdGlhbDogVCkge1xuXHRcdHRoaXMudmFsdWUgPSBpbml0aWFsO1xuXHR9XG5cblx0Z2V0KCk6IFQge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHR9XG5cblx0c2V0KHZhbHVlOiBUKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMudmFsdWUgPT09IHZhbHVlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMubm90aWZ5KCk7XG5cdH1cblxuXHRzdWJzY3JpYmUoZm46IExhbWJkYUZ1bmN0aW9uQ2FsbCk6IG51bWJlciB7XG5cdFx0Y29uc3QgbmV4dElkOiBudW1iZXIgPSB0aGlzLmlkKys7XG5cdFx0dGhpcy5zdWJzY3JpYmVycy5zZXQobmV4dElkLCB0aGlzLndyYXBDYWxsYmFjayhmbikpO1xuXHRcdHJldHVybiBuZXh0SWQ7XG5cdH1cblxuXHR1bnN1YnNjcmliZShpZDogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3Vic2NyaWJlcnMuZGVsZXRlKGlkKTtcblx0fVxuXG5cdHByaXZhdGUgbm90aWZ5KCk6IHZvaWQge1xuXHRcdGZvciAoY29uc3QgZm4gb2YgdGhpcy5zdWJzY3JpYmVycy52YWx1ZXMoKSkge1xuXHRcdFx0Zm4odGhpcy52YWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSB3cmFwQ2FsbGJhY2soZm46IExhbWJkYUZ1bmN0aW9uQ2FsbCkge1xuXHRcdHJldHVybiAodmFsdWU6IFQpOiB2b2lkID0+IHtcblx0XHRcdGZuLmV2YWxDYWxsKHRvTHlyYVZhbHVlKHZhbHVlKSk7XG5cdFx0fVxuXHR9XG59XG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7THlyYU5hdGl2ZU9iamVjdH0gZnJvbSBcIi4uLy4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfY29udmVyc2lvblwiO1xuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuLi8uLi9jb3JlL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5pbXBvcnQge1N0YXRlfSBmcm9tIFwiLi4vLi4vY29yZS9ldmVudC9zdGF0ZVwiO1xuaW1wb3J0IHR5cGUge0xhbWJkYUZ1bmN0aW9uQ2FsbH0gZnJvbSBcIi4uLy4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcnVudGltZVwiO1xuXG5jb25zdCBDTEFTU19OQU1FID0gJ1N0YXRlJztcblxuZXhwb3J0IGNsYXNzIEx5cmFTdGF0ZTxUPiBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHRwcml2YXRlIHN0YXRlOiBTdGF0ZTxUPjtcblxuXHRjb25zdHJ1Y3Rvcihpbml0aWFsOiBUKSB7XG5cdFx0c3VwZXIoQ0xBU1NfTkFNRSk7XG5cdFx0dGhpcy5zdGF0ZSA9IG5ldyBTdGF0ZTxUPihpbml0aWFsKTtcblx0fVxuXG5cdGdldCgpOiBUIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5nZXQoKTtcblx0fVxuXG5cdHNldCh2YWx1ZTogVCk6IHZvaWQge1xuXHRcdHRoaXMuc3RhdGUuc2V0KHZhbHVlKTtcblx0fVxuXG5cdHN1YnNjcmliZShmbjogTGFtYmRhRnVuY3Rpb25DYWxsKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5zdWJzY3JpYmUoZm4pO1xuXHR9XG5cblx0dW5zdWJzY3JpYmUoaWQ6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLnVuc3Vic2NyaWJlKGlkKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgU3RhdGVUeXBlIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IENMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRDTEFTU19OQU1FLFxuXHRcdFx0THlyYVN0YXRlLFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfTxUPiB7XG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcihpbml0aWFsOiBUKTtcblxuXHRwdWJsaWMgZ2V0KCk6IFQ7XG5cdFxuXHRwdWJsaWMgc2V0KHZhbHVlOiBUKTogdm9pZDtcblx0XG5cdHB1YmxpYyBzdWJzY3JpYmUoZm46IChUKSAtPiBtaXhlZCk6IG51bWJlcjtcblx0XG5cdHB1YmxpYyB1bnN1YnNjcmliZShpZDogbnVtYmVyKTogYm9vbGVhbjtcbn1gXG5cdFx0XHQpKTtcblxuXHRcdHRoaXMuaXNBdXRvbG9hZEFibGUgPSB0cnVlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7THlyYU5hdGl2ZU9iamVjdH0gZnJvbSBcIi4uLy4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfY29udmVyc2lvblwiO1xuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuLi8uLi9jb3JlL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmNvbnN0IENMQVNTX05BTUUgPSAnTHlyYUV2ZW50cyc7XG5cbmV4cG9ydCBjbGFzcyBMeXJhRXZlbnQgZXh0ZW5kcyBMeXJhTmF0aXZlT2JqZWN0IHtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBldmVudDogRXZlbnQpIHtcblx0XHRzdXBlcihDTEFTU19OQU1FKTtcblx0fVxuXG5cdGdldFR5cGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5ldmVudC50eXBlO1xuXHR9XG5cblx0cHJldmVudERlZmF1bHQoKTogdm9pZCB7XG5cdFx0dGhpcy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBFdmVudFR5cGUgZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdENMQVNTX05BTUUsXG5cdFx0XHRMeXJhRXZlbnQsXG5cdFx0XHRuZXcgU291cmNlKFxuXHRcdFx0XHRgXG5jbGFzcyAke0NMQVNTX05BTUV9IHtcblx0cHVibGljIGNvbnN0cnVjdG9yKGV2ZW50KTtcblxuXHRwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmc7XG5cblx0cHVibGljIHByZXZlbnREZWZhdWx0KCk6IHZvaWQ7XG59YCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IHRydWU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uLy4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuY29uc3QgQ0xBU1NfTkFNRSA9ICdCb29sZWFuJztcblxuZXhwb3J0IGNsYXNzIEx5cmFCb29sZWFuIGV4dGVuZHMgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdHZhbHVlOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0c3VwZXIoQ0xBU1NfTkFNRSk7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHR9XG5cblx0b3ZlcnJpZGUgdG9TdHJpbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZS50b1N0cmluZygpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBCb29sZWFuVHlwZSBleHRlbmRzIE5hdGl2ZUNsYXNzIHtcblx0c3RhdGljIENMQVNTX05BTUUgPSBDTEFTU19OQU1FO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0Q0xBU1NfTkFNRSxcblx0XHRcdEx5cmFCb29sZWFuLFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfSB7XG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWx1ZSk7XG5cblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZztcbn1gXG5cdFx0XHQpKTtcblxuXHRcdHRoaXMuaXNBdXRvbG9hZEFibGUgPSB0cnVlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtTdHJpbmdUeXBlfSBmcm9tIFwiLi9jbGFzc2VzL3N0cmluZ1wiO1xuaW1wb3J0IHtTeXN0ZW19IGZyb20gXCIuL2NsYXNzZXMvc3lzdGVtXCI7XG5pbXBvcnQge0Fzc2VydH0gZnJvbSBcIi4vY2xhc3Nlcy9hc3NlcnRcIjtcbmltcG9ydCB7TnVtYmVyVHlwZX0gZnJvbSBcIi4vY2xhc3Nlcy9udW1iZXJcIjtcbmltcG9ydCB7QXJyYXlJdGVyYXRvclR5cGUsIEFycmF5VHlwZX0gZnJvbSBcIi4vY2xhc3Nlcy9hcnJheVwiO1xuaW1wb3J0IHtTdGF0ZVR5cGV9IGZyb20gXCIuL2NsYXNzZXMvc3RhdGVcIjtcbmltcG9ydCB7RXZlbnRUeXBlfSBmcm9tIFwiLi9jbGFzc2VzL2V2ZW50XCI7XG5pbXBvcnQge0Jvb2xlYW5UeXBlfSBmcm9tIFwiLi9jbGFzc2VzL2Jvb2xlYW4udHNcIjtcblxuZXhwb3J0IGNsYXNzIE5hdGl2ZUNsYXNzZXMge1xuXHRyZWFkb25seSByZWdpc3RyeTogTWFwPHN0cmluZywgTmF0aXZlQ2xhc3M+ID0gbmV3IE1hcCgpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMucmVnaXN0cnkuc2V0KFN0cmluZ1R5cGUuQ0xBU1NfTkFNRSwgbmV3IFN0cmluZ1R5cGUoKSk7XG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoTnVtYmVyVHlwZS5DTEFTU19OQU1FLCBuZXcgTnVtYmVyVHlwZSgpKTtcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChCb29sZWFuVHlwZS5DTEFTU19OQU1FLCBuZXcgQm9vbGVhblR5cGUoKSk7XG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoQXJyYXlUeXBlLkNMQVNTX05BTUUsIG5ldyBBcnJheVR5cGUoKSk7XG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoQXJyYXlJdGVyYXRvclR5cGUuQ0xBU1NfTkFNRSwgbmV3IEFycmF5SXRlcmF0b3JUeXBlKCkpXG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoU3lzdGVtLkNMQVNTX05BTUUsIG5ldyBTeXN0ZW0oKSk7XG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoQXNzZXJ0LkNMQVNTX05BTUUsIG5ldyBBc3NlcnQoKSk7XG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoU3RhdGVUeXBlLkNMQVNTX05BTUUsIG5ldyBTdGF0ZVR5cGUoKSk7XG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoRXZlbnRUeXBlLkNMQVNTX05BTUUsIG5ldyBFdmVudFR5cGUoKSlcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0FTVFBhcmFtZXRlck5vZGUsIEFTVFR5cGVOb2RlfSBmcm9tIFwiLi4vY29yZS9hc3RcIjtcbmltcG9ydCB7VFlQRV9FTlVNfSBmcm9tIFwiLi4vY29yZS9ncmFtbWFyXCI7XG5pbXBvcnQge3Rocm93TmF0aXZlRXJyb3J9IGZyb20gXCIuLi9jb3JlL2Vycm9yc1wiO1xuXG5leHBvcnQgY2xhc3MgTmF0aXZlRnVuY3Rpb24ge1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHBhcmFtZXRlck5vZGVzOiBBU1RQYXJhbWV0ZXJOb2RlW10gPSBbXTtcblx0cmVhZG9ubHkgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGU7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sIHJldHVyblR5cGU6IEFTVFR5cGVOb2RlKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnBhcmFtZXRlck5vZGVzID0gcGFyYW1ldGVycztcblx0XHR0aGlzLnJldHVyblR5cGUgPSByZXR1cm5UeXBlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBOYXRpdmVGdW5jdGlvblR5cGVSZWdpc3RyeSB7XG5cdHJlYWRvbmx5IGZ1bmN0aW9uczogTWFwPHN0cmluZywgTmF0aXZlRnVuY3Rpb24+ID0gbmV3IE1hcCgpO1xuXG5cdHB1YmxpYyBoYXMobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZnVuY3Rpb25zLmhhcyhuYW1lKTtcblx0fVxuXG5cdHB1YmxpYyBnZXQobmFtZTogc3RyaW5nKTogTmF0aXZlRnVuY3Rpb24ge1xuXHRcdGNvbnN0IG5hdGl2ZUZ1bmN0aW9uOiBOYXRpdmVGdW5jdGlvbiB8IHVuZGVmaW5lZCA9IHRoaXMuZnVuY3Rpb25zLmdldChuYW1lKTtcblx0XHRpZiAoIW5hdGl2ZUZ1bmN0aW9uKSB7XG5cdFx0XHR0aHJvd05hdGl2ZUVycm9yKGBGdW5jdGlvbiAke25hbWV9IG5vdCBmb3VuZC5gKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5hdGl2ZUZ1bmN0aW9uO1xuXHR9XG5cblx0cHVibGljIHNldChuYW1lOiBzdHJpbmcsIHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSwgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGUpOiBOYXRpdmVGdW5jdGlvblR5cGVSZWdpc3RyeSB7XG5cdFx0dGhpcy5mdW5jdGlvbnMuc2V0KG5hbWUsIG5ldyBOYXRpdmVGdW5jdGlvbihuYW1lLCBwYXJhbWV0ZXJzLCByZXR1cm5UeXBlKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE5hdGl2ZUZ1bmN0aW9ucyB7XG5cdHN0YXRpYyBQUklOVCA9ICdwcmludCc7XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj59XG5cdCAqL1xuXHRwdWJsaWMgZ2V0R2xvYmFsRnVuY3Rpb25zKCk6IHsgW2tleTogc3RyaW5nXTogKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkgfSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFtOYXRpdmVGdW5jdGlvbnMuUFJJTlRdOiAoLi4uYXJncykgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyguLi5hcmdzKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cblx0cHVibGljIGdldEdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5KCk6IE5hdGl2ZUZ1bmN0aW9uVHlwZVJlZ2lzdHJ5IHtcblx0XHRjb25zdCBmdW5jdGlvbnMgPSBuZXcgTmF0aXZlRnVuY3Rpb25UeXBlUmVnaXN0cnkoKTtcblx0XHRmdW5jdGlvbnMuc2V0KFxuXHRcdFx0TmF0aXZlRnVuY3Rpb25zLlBSSU5ULFxuXHRcdFx0W3BhcmFtZXRlcih0eXBlKFRZUEVfRU5VTS5TVFJJTkcpLCAnbWVzc2FnZScpXSxcblx0XHRcdHR5cGUoVFlQRV9FTlVNLlZPSUQpXG5cdFx0KVxuXG5cdFx0cmV0dXJuIGZ1bmN0aW9ucztcblx0fVxufVxuXG5mdW5jdGlvbiB0eXBlKG5hbWU6IHN0cmluZywgbnVsbGFibGUgPSBmYWxzZSk6IEFTVFR5cGVOb2RlIHtcblx0cmV0dXJuIG5ldyBBU1RUeXBlTm9kZShBU1RUeXBlTm9kZS5LSU5EX1NJTVBMRSwgbmFtZSwgbnVsbGFibGUpO1xufVxuXG5mdW5jdGlvbiBwYXJhbWV0ZXIodHlwZUFubm90YXRpb246IEFTVFR5cGVOb2RlLCBuYW1lOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogYW55ID0gbnVsbCk6IEFTVFBhcmFtZXRlck5vZGUge1xuXHRyZXR1cm4gbmV3IEFTVFBhcmFtZXRlck5vZGUobmFtZSwgdHlwZUFubm90YXRpb24sIGRlZmF1bHRWYWx1ZSk7XG59XG4iLAogICAgImltcG9ydCB7VFlQRV9FTlVNfSBmcm9tIFwiLi4vZ3JhbW1hclwiO1xuaW1wb3J0IHtcblx0QVNUQ2xhc3NOb2RlLFxuXHRBU1RGaWVsZE5vZGUsXG5cdEFTVEludGVyZmFjZU5vZGUsXG5cdEFTVE1ldGhvZE5vZGUsXG5cdEFTVE5vZGUsXG5cdEFTVFBhcmFtZXRlck5vZGUsXG5cdEFTVFR5cGVOb2RlXG59IGZyb20gXCIuLi9hc3RcIjtcbmltcG9ydCB7dGhyb3dUeXBlRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcbmltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuXG5leHBvcnQgY2xhc3MgUHJpbWl0aXZlVHlwZXMge1xuXHRzdGF0aWMgcmVhZG9ubHkgTlVNQkVSOiBzdHJpbmcgPSBUWVBFX0VOVU0uTlVNQkVSO1xuXHRzdGF0aWMgcmVhZG9ubHkgU1RSSU5HOiBzdHJpbmcgPSBUWVBFX0VOVU0uU1RSSU5HO1xuXHRzdGF0aWMgcmVhZG9ubHkgQk9PTEVBTjogc3RyaW5nID0gVFlQRV9FTlVNLkJPT0xFQU47XG5cdHN0YXRpYyByZWFkb25seSBNSVhFRDogc3RyaW5nID0gVFlQRV9FTlVNLk1JWEVEO1xuXHRzdGF0aWMgcmVhZG9ubHkgTlVMTDogc3RyaW5nID0gVFlQRV9FTlVNLk5VTEw7XG5cdHN0YXRpYyByZWFkb25seSBWT0lEOiBzdHJpbmcgPSBUWVBFX0VOVU0uVk9JRDtcblxuXHRzdGF0aWMgaGFzVHlwZSh0eXBlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoUHJpbWl0aXZlVHlwZXMsIHR5cGUudG9VcHBlckNhc2UoKSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFByaW1pdGl2ZUNsYXNzVHlwZXMge1xuXHRzdGF0aWMgcmVhZG9ubHkgQVJSQVk6IHN0cmluZyA9IFRZUEVfRU5VTS5BUlJBWTtcblxuXHRzdGF0aWMgQ0xBU1NOQU1FX01BUDogeyBbczogc3RyaW5nXTogc3RyaW5nOyB9ID0ge1xuXHRcdGFycmF5OiAnQXJyYXknXG5cdH1cblxuXHRzdGF0aWMgZ2V0Q2xhc3NSZWZOYW1lKHR5cGU6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuXHRcdHJldHVybiBQcmltaXRpdmVDbGFzc1R5cGVzLkNMQVNTTkFNRV9NQVBbdHlwZV0gfHwgbnVsbDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVHlwZSB7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHR9XG5cblx0ZXF1YWxzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMgPT09IG90aGVyO1xuXHR9XG5cblx0YWNjZXB0cyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVxdWFscyhvdGhlcik7XG5cdH1cblxuXHR0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiBgVHlwZSgke3RoaXMubmFtZX0pYDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgUHJpbWl0aXZlVHlwZSBleHRlbmRzIFR5cGUge1xuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcblx0XHRzdXBlcihuYW1lKTtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBvdGhlciBpbnN0YW5jZW9mIFByaW1pdGl2ZVR5cGVcblx0XHRcdCYmIHRoaXMubmFtZSA9PT0gb3RoZXIubmFtZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTWl4ZWRUeXBlIGV4dGVuZHMgVHlwZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFByaW1pdGl2ZVR5cGVzLk1JWEVEKTtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBvdGhlciBpbnN0YW5jZW9mIE1peGVkVHlwZTtcblx0fVxuXG5cdG92ZXJyaWRlIGFjY2VwdHMoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFZvaWRUeXBlIGV4dGVuZHMgVHlwZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFByaW1pdGl2ZVR5cGVzLlZPSUQpO1xuXHR9XG5cblx0b3ZlcnJpZGUgZXF1YWxzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIG90aGVyIGluc3RhbmNlb2YgVm9pZFR5cGU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE51bGxUeXBlIGV4dGVuZHMgVHlwZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFByaW1pdGl2ZVR5cGVzLk5VTEwpO1xuXHR9XG5cblx0b3ZlcnJpZGUgZXF1YWxzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIG90aGVyIGluc3RhbmNlb2YgTnVsbFR5cGU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE51bGxhYmxlVHlwZSBleHRlbmRzIFR5cGUge1xuXHRpbm5lcjogVHlwZTtcblxuXHRjb25zdHJ1Y3Rvcihpbm5lcjogVHlwZSkge1xuXHRcdHN1cGVyKGlubmVyLnRvU3RyaW5nKCkgKyAnPycpO1xuXHRcdHRoaXMuaW5uZXIgPSBpbm5lcjtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdGlmIChvdGhlciA9PT0gVHlwZXMuTlVMTCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKG90aGVyIGluc3RhbmNlb2YgTnVsbGFibGVUeXBlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5pbm5lci5lcXVhbHMob3RoZXIuaW5uZXIpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdG92ZXJyaWRlIGFjY2VwdHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gb3RoZXIgPT09IFR5cGVzLk5VTEwgfHwgdGhpcy5pbm5lci5hY2NlcHRzKG90aGVyKTtcblx0fVxuXG5cdG92ZXJyaWRlIHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuaW5uZXIudG9TdHJpbmcoKSArICc/Jztcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVk5vZGVUeXBlIGV4dGVuZHMgVHlwZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCd2bm9kZScpO1xuXHR9XG5cblx0b3ZlcnJpZGUgZXF1YWxzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIG90aGVyIGluc3RhbmNlb2YgVm9pZFR5cGU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGVzIHtcblx0c3RhdGljIHJlYWRvbmx5IE5VTUJFUjogUHJpbWl0aXZlVHlwZSA9IG5ldyBQcmltaXRpdmVUeXBlKFByaW1pdGl2ZVR5cGVzLk5VTUJFUik7XG5cdHN0YXRpYyByZWFkb25seSBTVFJJTkc6IFByaW1pdGl2ZVR5cGUgPSBuZXcgUHJpbWl0aXZlVHlwZShQcmltaXRpdmVUeXBlcy5TVFJJTkcpO1xuXHRzdGF0aWMgcmVhZG9ubHkgQk9PTEVBTjogUHJpbWl0aXZlVHlwZSA9IG5ldyBQcmltaXRpdmVUeXBlKFByaW1pdGl2ZVR5cGVzLkJPT0xFQU4pO1xuXHRzdGF0aWMgcmVhZG9ubHkgTUlYRUQ6IE1peGVkVHlwZSA9IG5ldyBNaXhlZFR5cGUoKTtcblx0c3RhdGljIHJlYWRvbmx5IE5VTEw6IE51bGxUeXBlID0gbmV3IE51bGxUeXBlKCk7XG5cdHN0YXRpYyByZWFkb25seSBWT0lEOiBWb2lkVHlwZSA9IG5ldyBWb2lkVHlwZSgpO1xuXHRzdGF0aWMgcmVhZG9ubHkgVk5PREU6IFZOb2RlVHlwZSA9IG5ldyBWTm9kZVR5cGUoKTtcblxuXHRzdGF0aWMgZ2V0VHlwZShuYW1lOiBzdHJpbmcpOiBUeXBlIHtcblx0XHRpZiAoIU9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKFByaW1pdGl2ZVR5cGVzLCBuYW1lLnRvVXBwZXJDYXNlKCkpKSB7XG5cdFx0XHR0aHJvd1R5cGVFcnJvcihgVW5rbm93biBwcmltaXRpdmUgdHlwZSAke25hbWV9LmApO1xuXHRcdH1cblxuXHRcdGNvbnN0IHR5cGVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSBUeXBlcztcblx0XHRyZXR1cm4gdHlwZXNbbmFtZS50b1VwcGVyQ2FzZSgpXTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVHlwZVZhcmlhYmxlIGV4dGVuZHMgVHlwZSB7XG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuXHRcdHN1cGVyKG5hbWUpO1xuXHR9XG5cblx0b3ZlcnJpZGUgZXF1YWxzKG90aGVyOiBUeXBlKSB7XG5cdFx0cmV0dXJuIG90aGVyIGluc3RhbmNlb2YgVHlwZVZhcmlhYmxlXG5cdFx0XHQmJiB0aGlzLm5hbWUgPT09IG90aGVyLm5hbWU7XG5cdH1cblxuXHRvdmVycmlkZSBhY2NlcHRzKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlUGFyYW1ldGVyU3ltYm9sIHtcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXHRyZWFkb25seSB2YXJpYWJsZVR5cGU6IFR5cGVWYXJpYWJsZTtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMudmFyaWFibGVUeXBlID0gbmV3IFR5cGVWYXJpYWJsZShuYW1lKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgRmllbGRTeW1ib2wge1xuXHRyZWFkb25seSBub2RlOiBBU1RGaWVsZE5vZGU7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblx0cmVhZG9ubHkgZmllbGRUeXBlOiBUeXBlO1xuXHRyZWFkb25seSBpc1N0YXRpYzogYm9vbGVhbiA9IGZhbHNlO1xuXHRyZWFkb25seSBpc1ByaXZhdGU6IGJvb2xlYW4gPSBmYWxzZTtcblx0cmVhZG9ubHkgaXNQdWJsaWM6IGJvb2xlYW4gPSBmYWxzZTtcblx0cmVhZG9ubHkgaXNSZWFkb25seTogYm9vbGVhbiA9IGZhbHNlO1xuXHRvd25lcjogQ2xhc3NTeW1ib2wgfCBJbnRlcmZhY2VTeW1ib2wgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihub2RlOiBBU1RGaWVsZE5vZGUsIGZpZWxkVHlwZTogVHlwZSkge1xuXHRcdHRoaXMubm9kZSA9IG5vZGU7XG5cdFx0dGhpcy5uYW1lID0gbm9kZS5uYW1lO1xuXHRcdHRoaXMuZmllbGRUeXBlID0gZmllbGRUeXBlO1xuXHRcdHRoaXMuaXNTdGF0aWMgPSBub2RlLm1vZGlmaWVycy5zdGF0aWM7XG5cdFx0dGhpcy5pc1ByaXZhdGUgPSBub2RlLm1vZGlmaWVycy5wcml2YXRlO1xuXHRcdHRoaXMuaXNQdWJsaWMgPSBub2RlLm1vZGlmaWVycy5wdWJsaWM7XG5cdFx0dGhpcy5pc1JlYWRvbmx5ID0gbm9kZS5tb2RpZmllcnMucmVhZG9ubHk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlclN5bWJvbCB7XG5cdHJlYWRvbmx5IG5vZGU6IEFTVFBhcmFtZXRlck5vZGUgfCBudWxsO1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHBhcmFtZXRlclR5cGU6IFR5cGU7XG5cdHJlYWRvbmx5IGRlZmF1bHRUeXBlOiBUeXBlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlOiBUeXBlLCBkZWZhdWx0VmFsdWU6IFR5cGUgfCBudWxsID0gbnVsbCwgbm9kZTogQVNUUGFyYW1ldGVyTm9kZSB8IG51bGwgPSBudWxsKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnBhcmFtZXRlclR5cGUgPSB0eXBlO1xuXHRcdHRoaXMuZGVmYXVsdFR5cGUgPSBkZWZhdWx0VmFsdWU7XG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTWV0aG9kU3ltYm9sIHtcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXHRyZWFkb25seSBub2RlOiBBU1RNZXRob2ROb2RlO1xuXHRyZWFkb25seSBpc1N0YXRpYzogYm9vbGVhbiA9IGZhbHNlO1xuXHRyZWFkb25seSBpc1ByaXZhdGU6IGJvb2xlYW4gPSBmYWxzZTtcblx0cmVhZG9ubHkgaXNQdWJsaWM6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHR0eXBlUGFyYW1ldGVyU3ltYm9sczogVHlwZVBhcmFtZXRlclN5bWJvbFtdID0gW107XG5cdHBhcmFtZXRlclN5bWJvbHM6IFBhcmFtZXRlclN5bWJvbFtdID0gW107XG5cdHJldHVyblR5cGU6IFR5cGUgPSBUeXBlcy5NSVhFRDtcblxuXHRvd25lcjogQ2xhc3NTeW1ib2wgfCBJbnRlcmZhY2VTeW1ib2wgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihub2RlOiBBU1RNZXRob2ROb2RlKSB7XG5cdFx0dGhpcy5uYW1lID0gbm9kZS5uYW1lO1xuXHRcdHRoaXMubm9kZSA9IG5vZGU7XG5cdFx0dGhpcy5pc1N0YXRpYyA9IG5vZGUubW9kaWZpZXJzLnN0YXRpYztcblx0XHR0aGlzLmlzUHJpdmF0ZSA9IG5vZGUubW9kaWZpZXJzLnByaXZhdGU7XG5cdFx0dGhpcy5pc1B1YmxpYyA9IG5vZGUubW9kaWZpZXJzLnB1YmxpYztcblx0fVxuXG5cdGdldCBib2R5KCk6IEFTVE5vZGVbXSB7XG5cdFx0cmV0dXJuIHRoaXMubm9kZS5jaGlsZHJlbjtcblx0fVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9iamVjdFN5bWJvbCB7XG5cdG5hbWU6IHN0cmluZztcblx0dHlwZVBhcmFtZXRlclN5bWJvbHM6IFR5cGVQYXJhbWV0ZXJTeW1ib2xbXTtcblx0c3RhdGljRmllbGRTeW1ib2xzOiBNYXA8c3RyaW5nLCBGaWVsZFN5bWJvbD47XG5cdGluc3RhbmNlTWV0aG9kU3ltYm9sczogTWFwPHN0cmluZywgTWV0aG9kU3ltYm9sPjtcbn1cblxuZXhwb3J0IGNsYXNzIENsYXNzU3ltYm9sIGltcGxlbWVudHMgT2JqZWN0U3ltYm9sIHtcblx0cmVhZG9ubHkgbm9kZTogQVNUQ2xhc3NOb2RlO1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHN1cGVyQ2xhc3M6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG5cdHN1cGVyQ2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sIHwgbnVsbCA9IG51bGw7XG5cdHR5cGVQYXJhbWV0ZXJTeW1ib2xzOiBUeXBlUGFyYW1ldGVyU3ltYm9sW10gPSBbXTtcblx0aW5zdGFuY2VGaWVsZFN5bWJvbHM6IE1hcDxzdHJpbmcsIEZpZWxkU3ltYm9sPiA9IG5ldyBNYXAoKTtcblx0c3RhdGljRmllbGRTeW1ib2xzOiBNYXA8c3RyaW5nLCBGaWVsZFN5bWJvbD4gPSBuZXcgTWFwKCk7XG5cdGluc3RhbmNlTWV0aG9kU3ltYm9sczogTWFwPHN0cmluZywgTWV0aG9kU3ltYm9sPiA9IG5ldyBNYXAoKTtcblx0c3RhdGljTWV0aG9kU3ltYm9sczogTWFwPHN0cmluZywgTWV0aG9kU3ltYm9sPiA9IG5ldyBNYXAoKTtcblx0Y29uc3RydWN0b3JNZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCB8IG51bGwgPSBudWxsO1xuXHRpbXBsZW1lbnRzSW50ZXJmYWNlczogSW50ZXJmYWNlUmVmVHlwZVtdID0gW107XG5cblx0Y29uc3RydWN0b3Iobm9kZTogQVNUQ2xhc3NOb2RlKSB7XG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0XHR0aGlzLm5hbWUgPSBub2RlLm5hbWU7XG5cdFx0dGhpcy5zdXBlckNsYXNzID0gbm9kZS5zdXBlckNsYXNzPy5uYW1lID8/IG51bGw7XG5cdH1cblxuXHRyZXNvbHZlSW5zdGFuY2VGaWVsZFN5bWJvbChuYW1lOiBzdHJpbmcpOiBGaWVsZFN5bWJvbCB8IG51bGwge1xuXHRcdGlmICh0aGlzLmluc3RhbmNlRmllbGRTeW1ib2xzLmhhcyhuYW1lKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2VGaWVsZFN5bWJvbHMuZ2V0KG5hbWUpIHx8IG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc3VwZXJDbGFzcykge1xuXHRcdFx0cmV0dXJuIHRoaXMuc3VwZXJDbGFzc1N5bWJvbD8ucmVzb2x2ZUluc3RhbmNlRmllbGRTeW1ib2wobmFtZSkgfHwgbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJlc29sdmVTdGF0aWNGaWVsZFN5bWJvbChuYW1lOiBzdHJpbmcpOiBGaWVsZFN5bWJvbCB8IG51bGwge1xuXHRcdGlmICh0aGlzLnN0YXRpY0ZpZWxkU3ltYm9scy5oYXMobmFtZSkpIHtcblx0XHRcdHJldHVybiB0aGlzLnN0YXRpY0ZpZWxkU3ltYm9scy5nZXQobmFtZSkgfHwgbnVsbDtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zdXBlckNsYXNzKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdXBlckNsYXNzU3ltYm9sPy5yZXNvbHZlU3RhdGljRmllbGRTeW1ib2wobmFtZSkgfHwgbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgSW50ZXJmYWNlU3ltYm9sIGltcGxlbWVudHMgT2JqZWN0U3ltYm9sIHtcblx0cmVhZG9ubHkgbm9kZTogQVNUSW50ZXJmYWNlTm9kZTtcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXG5cdHR5cGVQYXJhbWV0ZXJTeW1ib2xzOiBUeXBlUGFyYW1ldGVyU3ltYm9sW10gPSBbXTtcblx0c3RhdGljRmllbGRTeW1ib2xzOiBNYXA8c3RyaW5nLCBGaWVsZFN5bWJvbD4gPSBuZXcgTWFwKCk7XG5cdGluc3RhbmNlTWV0aG9kU3ltYm9sczogTWFwPHN0cmluZywgTWV0aG9kU3ltYm9sPiA9IG5ldyBNYXAoKTtcblx0ZXh0ZW5kc0ludGVyZmFjZXM6IEludGVyZmFjZVN5bWJvbFtdID0gW107XG5cblx0Y29uc3RydWN0b3Iobm9kZTogQVNUSW50ZXJmYWNlTm9kZSkge1xuXHRcdHRoaXMubm9kZSA9IG5vZGU7XG5cdFx0dGhpcy5uYW1lID0gbm9kZS5uYW1lO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGFzc1JlZlR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0cmVhZG9ubHkgY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sO1xuXHRyZWFkb25seSB0eXBlQXJndW1lbnRzOiBUeXBlW107XG5cblx0Y29uc3RydWN0b3IoY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sLCB0eXBlQXJndW1lbnRzOiBUeXBlW10gPSBbXSkge1xuXHRcdHN1cGVyKENsYXNzUmVmVHlwZS5mb3JtYXRTeW1ib2xOYW1lKGNsYXNzU3ltYm9sLm5hbWUsIHR5cGVBcmd1bWVudHMpKTtcblx0XHR0aGlzLmNsYXNzU3ltYm9sID0gY2xhc3NTeW1ib2w7XG5cdFx0dGhpcy50eXBlQXJndW1lbnRzID0gdHlwZUFyZ3VtZW50cztcblx0fVxuXG5cdHN0YXRpYyBmb3JtYXRTeW1ib2xOYW1lKG5hbWU6IHN0cmluZywgdHlwZUFyZ3VtZW50czogVHlwZVtdKSB7XG5cdFx0aWYgKHR5cGVBcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gYGNsYXNzUmVmVHlwZSgke25hbWV9KWA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGBjbGFzc1JlZlR5cGUoJHtuYW1lfTwke3R5cGVBcmd1bWVudHMubWFwKHR5cGUgPT4gdHlwZS50b1N0cmluZygpKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oJywgJyl9PilgO1xuXHR9XG5cblx0b3ZlcnJpZGUgZXF1YWxzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIChvdGhlciBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZVxuXHRcdFx0JiYgb3RoZXIuY2xhc3NTeW1ib2wgPT09IHRoaXMuY2xhc3NTeW1ib2wpO1xuXHR9XG5cblx0b3ZlcnJpZGUgYWNjZXB0cyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdGlmICghdGhpcy5lcXVhbHMob3RoZXIpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKG90aGVyIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0XHRpZiAodGhpcy50eXBlQXJndW1lbnRzLmxlbmd0aCAhPT0gb3RoZXIudHlwZUFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHlwZUFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBvdGhlclR5cGUgPSBvdGhlci50eXBlQXJndW1lbnRzW2ldO1xuXG5cdFx0XHRcdGlmICghb3RoZXJUeXBlIHx8ICF0aGlzLnR5cGVBcmd1bWVudHNbaV0/LmFjY2VwdHMob3RoZXJUeXBlKSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEludGVyZmFjZVJlZlR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0cmVhZG9ubHkgaW50ZXJmYWNlU3ltYm9sOiBJbnRlcmZhY2VTeW1ib2w7XG5cdHJlYWRvbmx5IHR5cGVBcmd1bWVudHM6IFR5cGVbXTtcblxuXHRjb25zdHJ1Y3RvcihpbnRlcmZhY2VTeW1ib2w6IEludGVyZmFjZVN5bWJvbCwgdHlwZUFyZ3VtZW50czogVHlwZVtdID0gW10pIHtcblx0XHRzdXBlcihJbnRlcmZhY2VSZWZUeXBlLmZvcm1hdFN5bWJvbE5hbWUoaW50ZXJmYWNlU3ltYm9sLm5hbWUsIHR5cGVBcmd1bWVudHMpKTtcblx0XHR0aGlzLmludGVyZmFjZVN5bWJvbCA9IGludGVyZmFjZVN5bWJvbDtcblx0XHR0aGlzLnR5cGVBcmd1bWVudHMgPSB0eXBlQXJndW1lbnRzO1xuXHR9XG5cblx0c3RhdGljIGZvcm1hdFN5bWJvbE5hbWUobmFtZTogc3RyaW5nLCB0eXBlQXJndW1lbnRzOiBUeXBlW10pOiBzdHJpbmcge1xuXHRcdGlmICh0eXBlQXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIGBpbnRlcmZhY2VSZWZUeXBlKCR7bmFtZX0pYDtcblx0XHR9XG5cblx0XHRyZXR1cm4gYGludGVyZmFjZVJlZlR5cGUoJHtuYW1lfTwke3R5cGVBcmd1bWVudHMubWFwKHR5cGUgPT4gdHlwZS50b1N0cmluZygpKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKCcsICcpfT4pYDtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAob3RoZXIgaW5zdGFuY2VvZiBJbnRlcmZhY2VSZWZUeXBlXG5cdFx0XHQmJiBvdGhlci5pbnRlcmZhY2VTeW1ib2wgPT09IHRoaXMuaW50ZXJmYWNlU3ltYm9sKTtcblx0fVxuXG5cdG92ZXJyaWRlIGFjY2VwdHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRpZiAoIXRoaXMuZXF1YWxzKG90aGVyKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmIChvdGhlciBpbnN0YW5jZW9mIEludGVyZmFjZVJlZlR5cGUpIHtcblx0XHRcdGlmICh0aGlzLnR5cGVBcmd1bWVudHMubGVuZ3RoICE9PSBvdGhlci50eXBlQXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50eXBlQXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IG90aGVyVHlwZSA9IG90aGVyLnR5cGVBcmd1bWVudHNbaV07XG5cblx0XHRcdFx0aWYgKCFvdGhlclR5cGUgfHwgIXRoaXMudHlwZUFyZ3VtZW50c1tpXT8uYWNjZXB0cyhvdGhlclR5cGUpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTGFtYmRhVHlwZSBleHRlbmRzIFR5cGUge1xuXHRyZWFkb25seSBwYXJhbWV0ZXJTeW1ib2xzOiBQYXJhbWV0ZXJTeW1ib2xbXSA9IFtdO1xuXHRyZWFkb25seSByZXR1cm5UeXBlOiBUeXBlO1xuXG5cdGNvbnN0cnVjdG9yKHBhcmFtZXRlcnM6IFBhcmFtZXRlclN5bWJvbFtdLCByZXR1cm5UeXBlOiBUeXBlKSB7XG5cdFx0c3VwZXIoTGFtYmRhVHlwZS5jcmVhdGVTaWduYXR1cmUocGFyYW1ldGVycywgcmV0dXJuVHlwZSkpO1xuXHRcdHRoaXMucGFyYW1ldGVyU3ltYm9scyA9IHBhcmFtZXRlcnM7XG5cdFx0dGhpcy5yZXR1cm5UeXBlID0gcmV0dXJuVHlwZTtcblx0fVxuXG5cdHN0YXRpYyBjcmVhdGVTaWduYXR1cmUocGFyYW1ldGVyczogUGFyYW1ldGVyU3ltYm9sW10sIHJldHVyblR5cGU6IFR5cGUpOiBzdHJpbmcge1xuXHRcdHJldHVybiBgbGFtYmRhKCR7cGFyYW1ldGVycy5tYXAocGFyYW1ldGVyID0+IHBhcmFtZXRlci5wYXJhbWV0ZXJUeXBlLnRvU3RyaW5nKCkpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oJywgJyl9KSAtPiAke3JldHVyblR5cGUudG9TdHJpbmcoKX0pYDtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdGlmICghKG90aGVyIGluc3RhbmNlb2YgTGFtYmRhVHlwZSkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5wYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aCAhPT0gb3RoZXIucGFyYW1ldGVyU3ltYm9scy5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFyYW1ldGVyU3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3Qgb3RoZXJUeXBlID0gb3RoZXIucGFyYW1ldGVyU3ltYm9sc1tpXT8ucGFyYW1ldGVyVHlwZTtcblxuXHRcdFx0aWYgKCFvdGhlclR5cGUgfHwgIXRoaXMucGFyYW1ldGVyU3ltYm9sc1tpXT8ucGFyYW1ldGVyVHlwZS5hY2NlcHRzKG90aGVyVHlwZSkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnJldHVyblR5cGUuYWNjZXB0cyhvdGhlci5yZXR1cm5UeXBlKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVHlwZVNjb3BlIHtcblx0cmVhZG9ubHkgcGFyZW50OiBUeXBlU2NvcGUgfCBudWxsO1xuXHRyZWFkb25seSB0eXBlczogTWFwPHN0cmluZywgVHlwZT4gPSBuZXcgTWFwKCk7XG5cdHJlYWRvbmx5IHR5cGVCaW5kaW5nczogTWFwPHN0cmluZywgVHlwZT4gPSBuZXcgTWFwKCk7XG5cblx0Y3VycmVudE9iamVjdFN5bWJvbDogQ2xhc3NTeW1ib2wgfCBJbnRlcmZhY2VTeW1ib2wgfCBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKHBhcmVudDogVHlwZVNjb3BlIHwgbnVsbCA9IG51bGwpIHtcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcblx0XHR0aGlzLmN1cnJlbnRPYmplY3RTeW1ib2wgPSBwYXJlbnQ/LmN1cnJlbnRPYmplY3RTeW1ib2wgPz8gbnVsbDtcblx0fVxuXG5cdGRlZmluZVR5cGUobmFtZTogc3RyaW5nLCB0eXBlOiBUeXBlKTogdm9pZCB7XG5cdFx0dGhpcy50eXBlcy5zZXQobmFtZSwgdHlwZSk7XG5cdH1cblxuXHRkZWZpbmVUeXBlQmluZGluZyhuYW1lOiBzdHJpbmcsIHR5cGVWYXJpYWJsZTogVHlwZVZhcmlhYmxlKTogdm9pZCB7XG5cdFx0dGhpcy50eXBlQmluZGluZ3Muc2V0KG5hbWUsIHR5cGVWYXJpYWJsZSk7XG5cdH1cblxuXHRoYXNUeXBlKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnR5cGVzLmhhcyhuYW1lKSB8fCB0aGlzLnBhcmVudD8uaGFzVHlwZShuYW1lKSB8fCBmYWxzZTtcblx0fVxuXG5cdGhhc1R5cGVCaW5kaW5nKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnR5cGVCaW5kaW5ncy5oYXMobmFtZSkgfHwgdGhpcy5wYXJlbnQ/Lmhhc1R5cGVCaW5kaW5nKG5hbWUpIHx8IGZhbHNlO1xuXHR9XG5cblx0Z2V0VHlwZShuYW1lOiBzdHJpbmcpOiBUeXBlIHtcblx0XHRpZiAodGhpcy50eXBlcy5oYXMobmFtZSkpIHtcblx0XHRcdHJldHVybiB0aGlzLnR5cGVzLmdldChuYW1lKSB8fCBUeXBlcy5OVUxMO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5wYXJlbnQ/LmdldFR5cGUobmFtZSkgfHwgVHlwZXMuTlVMTDtcblx0fVxuXG5cdGdldFR5cGVCaW5kaW5nKG5hbWU6IHN0cmluZyk6IFR5cGUge1xuXHRcdGlmICh0aGlzLnR5cGVCaW5kaW5ncy5oYXMobmFtZSkpIHtcblx0XHRcdHJldHVybiB0aGlzLnR5cGVCaW5kaW5ncy5nZXQobmFtZSkgfHwgVHlwZXMuTlVMTDtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMucGFyZW50Py5nZXRUeXBlQmluZGluZyhuYW1lKSB8fCBUeXBlcy5OVUxMO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwVHlwZSh0eXBlTm9kZTogQVNUVHlwZU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgc2NvcGU6IFR5cGVTY29wZSB8IG51bGwgPSBudWxsKTogVHlwZSB7XG5cdGxldCBiYXNlVHlwZSA9IHJlc29sdmVCYXNlVHlwZSh0eXBlTm9kZSwgb2JqZWN0UmVnaXN0cnksIHNjb3BlKTtcblx0aWYgKGJhc2VUeXBlKSB7XG5cdFx0aWYgKCEoYmFzZVR5cGUgaW5zdGFuY2VvZiBOdWxsYWJsZVR5cGUpICYmIHR5cGVOb2RlLm51bGxhYmxlKSB7XG5cdFx0XHRyZXR1cm4gbmV3IE51bGxhYmxlVHlwZShiYXNlVHlwZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGJhc2VUeXBlO1xuXHR9XG5cblx0dGhyb3dUeXBlRXJyb3IoYENvdWxkIG5vdCByZXNvbHZlIHR5cGUgJHt0eXBlTm9kZS5uYW1lfS5gLCB0eXBlTm9kZS5zcGFuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVCYXNlVHlwZSh0eXBlTm9kZTogQVNUVHlwZU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgc2NvcGU6IFR5cGVTY29wZSB8IG51bGwgPSBudWxsKTogVHlwZSB7XG5cdHN3aXRjaCAodHlwZU5vZGUua2luZCkge1xuXHRcdGNhc2UgQVNUVHlwZU5vZGUuS0lORF9TSU1QTEU6IHtcblx0XHRcdGlmIChzY29wZSAmJiBzY29wZS5oYXNUeXBlQmluZGluZyh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gc2NvcGUuZ2V0VHlwZUJpbmRpbmcodHlwZU5vZGUubmFtZSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvYmplY3RSZWdpc3RyeS50eXBlcy5oYXNTeW1ib2wodHlwZU5vZGUubmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIHJlc29sdmVSZWZUeXBlKHR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChQcmltaXRpdmVUeXBlcy5oYXNUeXBlKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiByZXNvbHZlUHJpbWl0aXZlVHlwZSh0eXBlTm9kZSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBuZXcgVHlwZVZhcmlhYmxlKHR5cGVOb2RlLm5hbWUpO1xuXHRcdH1cblx0XHRjYXNlIEFTVFR5cGVOb2RlLktJTkRfR0VORVJJQzoge1xuXHRcdFx0aWYgKCFvYmplY3RSZWdpc3RyeS50eXBlcy5oYXNTeW1ib2wodHlwZU5vZGUubmFtZSkpIHtcblx0XHRcdFx0dGhyb3dUeXBlRXJyb3IoYFN5bWJvbCAke3R5cGVOb2RlLm5hbWV9IGlzIG5vdCBhIGNsYXNzIHJlZmVyZW5jZS5gLCB0eXBlTm9kZS5zcGFuKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXNvbHZlR2VuZXJpY1JlZlR5cGUodHlwZU5vZGUsIG9iamVjdFJlZ2lzdHJ5KTtcblx0XHR9XG5cdFx0Y2FzZSBBU1RUeXBlTm9kZS5LSU5EX0xBTUJEQToge1xuXHRcdFx0cmV0dXJuIHJlc29sdmVMYW1iZGFUeXBlKHR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeSk7XG5cdFx0fVxuXHRcdGRlZmF1bHQ6IHtcblx0XHRcdHRocm93VHlwZUVycm9yKFxuXHRcdFx0XHRgSW52YWxpZCB0eXBlIGFubm90YXRpb24sIGtpbmQgJHt0eXBlTm9kZS5raW5kfS5gLFxuXHRcdFx0XHR0eXBlTm9kZS5zcGFuXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVJlZlR5cGUodHlwZU5vZGU6IEFTVFR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpOiBDbGFzc1JlZlR5cGUgfCBJbnRlcmZhY2VSZWZUeXBlIHwgVHlwZSB7XG5cdGlmICh0eXBlTm9kZS50eXBlQXJndW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHR0aHJvd1R5cGVFcnJvcihgR2VuZXJpYyBjbGFzcyAke3R5cGVOb2RlLm5hbWV9IGNhbm5vdCBoYXZlIHR5cGUgYXJndW1lbnRzLmAsIHR5cGVOb2RlLnNwYW4pO1xuXHR9XG5cblx0aWYgKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmNsYXNzU3ltYm9scy5oYXModHlwZU5vZGUubmFtZSkpIHtcblx0XHRyZXR1cm4gbmV3IENsYXNzUmVmVHlwZShvYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbCh0eXBlTm9kZS5uYW1lKSk7XG5cdH1cblxuXHRpZiAob2JqZWN0UmVnaXN0cnkudHlwZXMuaW50ZXJmYWNlU3ltYm9scy5oYXModHlwZU5vZGUubmFtZSkpIHtcblx0XHRyZXR1cm4gbmV3IEludGVyZmFjZVJlZlR5cGUob2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0SW50ZXJhY2VTeW1ib2wodHlwZU5vZGUubmFtZSkpO1xuXHR9XG5cblx0dGhyb3dUeXBlRXJyb3IoYFVua25vd24gY2xhc3Mgb3IgaW50ZXJmYWNlICR7dHlwZU5vZGUubmFtZX0uYCwgdHlwZU5vZGUuc3Bhbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlR2VuZXJpY1JlZlR5cGUodHlwZU5vZGU6IEFTVFR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpOiBDbGFzc1JlZlR5cGUgfCBJbnRlcmZhY2VSZWZUeXBlIHwgVHlwZSB7XG5cdGlmIChvYmplY3RSZWdpc3RyeS50eXBlcy5jbGFzc1N5bWJvbHMuaGFzKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0cmV0dXJuIG5ldyBDbGFzc1JlZlR5cGUoXG5cdFx0XHRvYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbCh0eXBlTm9kZS5uYW1lKSxcblx0XHRcdHR5cGVOb2RlLnR5cGVBcmd1bWVudHMubWFwKHR5cGVBcmd1bWVudCA9PiByZXNvbHZlQmFzZVR5cGUodHlwZUFyZ3VtZW50LCBvYmplY3RSZWdpc3RyeSkpXG5cdFx0KTtcblx0fVxuXG5cdGlmIChvYmplY3RSZWdpc3RyeS50eXBlcy5pbnRlcmZhY2VTeW1ib2xzLmhhcyh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdHJldHVybiBuZXcgSW50ZXJmYWNlUmVmVHlwZShcblx0XHRcdG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldEludGVyYWNlU3ltYm9sKHR5cGVOb2RlLm5hbWUpLFxuXHRcdFx0dHlwZU5vZGUudHlwZUFyZ3VtZW50cy5tYXAodHlwZUFyZ3VtZW50ID0+IHJlc29sdmVCYXNlVHlwZSh0eXBlQXJndW1lbnQsIG9iamVjdFJlZ2lzdHJ5KSlcblx0XHQpO1xuXHR9XG5cblx0dGhyb3dUeXBlRXJyb3IoYFVua25vd24gY2xhc3Mgb3IgaW50ZXJmYWNlICR7dHlwZU5vZGUubmFtZX0uYCwgdHlwZU5vZGUuc3Bhbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlUHJpbWl0aXZlVHlwZSh0eXBlTm9kZTogQVNUVHlwZU5vZGUpOiBUeXBlIHtcblx0cmV0dXJuIFR5cGVzLmdldFR5cGUodHlwZU5vZGUubmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlTGFtYmRhVHlwZSh0eXBlTm9kZTogQVNUVHlwZU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgc2NvcGU6IFR5cGVTY29wZSB8IG51bGwgPSBudWxsKTogTGFtYmRhVHlwZSB7XG5cdGNvbnN0IHBhcmFtZXRlclN5bWJvbHMgPSB0eXBlTm9kZS5wYXJhbWV0ZXJUeXBlcy5tYXAoXG5cdFx0dHlwZUFubm90YXRpb24gPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBQYXJhbWV0ZXJTeW1ib2woXG5cdFx0XHRcdHR5cGVBbm5vdGF0aW9uLm5hbWUsXG5cdFx0XHRcdHdyYXBUeXBlKHR5cGVBbm5vdGF0aW9uLCBvYmplY3RSZWdpc3RyeSwgc2NvcGUpXG5cdFx0XHQpO1xuXHRcdH1cblx0KTtcblxuXHRyZXR1cm4gbmV3IExhbWJkYVR5cGUoXG5cdFx0cGFyYW1ldGVyU3ltYm9scyxcblx0XHR0eXBlTm9kZS5yZXR1cm5UeXBlXG5cdFx0XHQ/IHdyYXBUeXBlKHR5cGVOb2RlLnJldHVyblR5cGUsIG9iamVjdFJlZ2lzdHJ5LCBzY29wZSlcblx0XHRcdDogVHlwZXMuTUlYRURcblx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGVUeXBlKHR5cGU6IFR5cGUsIHN1YnN0aXR1dGlvbk1hcDogTWFwPHN0cmluZywgVHlwZT4pOiBUeXBlIHtcblx0aWYgKHR5cGUgaW5zdGFuY2VvZiBUeXBlVmFyaWFibGUpIHtcblx0XHRyZXR1cm4gc3Vic3RpdHV0aW9uTWFwLmdldCh0eXBlLm5hbWUpID8/IHR5cGU7XG5cdH1cblxuXHRpZiAodHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSkge1xuXHRcdHJldHVybiBuZXcgQ2xhc3NSZWZUeXBlKFxuXHRcdFx0dHlwZS5jbGFzc1N5bWJvbCxcblx0XHRcdHR5cGUudHlwZUFyZ3VtZW50cy5tYXAodHlwZUFyZ3VtZW50ID0+IHN1YnN0aXR1dGVUeXBlKHR5cGVBcmd1bWVudCwgc3Vic3RpdHV0aW9uTWFwKSlcblx0XHQpO1xuXHR9XG5cblx0aWYgKHR5cGUgaW5zdGFuY2VvZiBOdWxsYWJsZVR5cGUpIHtcblx0XHRyZXR1cm4gbmV3IE51bGxhYmxlVHlwZShzdWJzdGl0dXRlVHlwZSh0eXBlLmlubmVyLCBzdWJzdGl0dXRpb25NYXApKTtcblx0fVxuXG5cdHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRUeXBlU3Vic3RpdHV0aW9uTWFwKHR5cGVQYXJhbWV0ZXJzOiBUeXBlUGFyYW1ldGVyU3ltYm9sW10sIHR5cGVBcmd1bWVudHM6IFR5cGVbXSk6IE1hcDxzdHJpbmcsIFR5cGU+IHtcblx0Y29uc3Qgc3Vic3RpdHV0aW9uTWFwID0gbmV3IE1hcCgpO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgdHlwZVBhcmFtZXRlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCB0eXBlUGFyYW1ldGVyOiBUeXBlUGFyYW1ldGVyU3ltYm9sIHwgbnVsbCA9IHR5cGVQYXJhbWV0ZXJzW2ldIHx8IG51bGw7XG5cdFx0Y29uc3QgdHlwZUFyZ3VtZW50OiBUeXBlIHwgbnVsbCA9IHR5cGVBcmd1bWVudHNbaV0gfHwgbnVsbDtcblxuXHRcdGlmICh0eXBlUGFyYW1ldGVyICYmIHR5cGVBcmd1bWVudCkge1xuXHRcdFx0c3Vic3RpdHV0aW9uTWFwLnNldCh0eXBlUGFyYW1ldGVyLm5hbWUsIHR5cGVBcmd1bWVudCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN1YnN0aXR1dGlvbk1hcDtcbn1cbiIsCiAgICAiaW1wb3J0IHtDbGFzc1JlZlR5cGUsIFR5cGUsIFR5cGVzfSBmcm9tIFwiLi90eXBlX29iamVjdHNcIjtcbmltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuaW1wb3J0IHt0aHJvd1J1bnRpbWVFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuXG5leHBvcnQgY2xhc3MgQXV0b2JveGVkVHlwZXMge1xuXHRzdGF0aWMgTlVNQkVSOiBzdHJpbmcgPSAnTnVtYmVyJztcblx0c3RhdGljIFNUUklORzogc3RyaW5nID0gJ1N0cmluZyc7XG5cdHN0YXRpYyBCT09MRUFOOiBzdHJpbmcgPSAnQm9vbGVhbic7XG5cblx0c3RhdGljIENMQVNTTkFNRV9NQVA6IHsgW3M6IHN0cmluZ106IHN0cmluZzsgfSA9IHtcblx0XHRudW1iZXI6IEF1dG9ib3hlZFR5cGVzLk5VTUJFUixcblx0XHRzdHJpbmc6IEF1dG9ib3hlZFR5cGVzLlNUUklORyxcblx0XHRib29sZWFuOiBBdXRvYm94ZWRUeXBlcy5CT09MRUFOXG5cdH07XG5cblx0c3RhdGljIGdldENsYXNzTmFtZShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0Y29uc3QgY2xhc3NOYW1lID0gQXV0b2JveGVkVHlwZXMuQ0xBU1NOQU1FX01BUFtrZXldO1xuXHRcdGlmICghY2xhc3NOYW1lKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgTm8gY2xhc3MgZm91bmQgZm9yIHByaW1pdGl2ZSB0eXBlICR7a2V5fS5gKTtcblx0XHR9XG5cdFx0cmV0dXJuIGNsYXNzTmFtZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQXV0b2JveGluZyB7XG5cdHN0YXRpYyBDTEFTU05BTUVfTUFQOiBNYXA8VHlwZSwgc3RyaW5nPiA9IG5ldyBNYXAoXG5cdFx0W1xuXHRcdFx0W1R5cGVzLk5VTUJFUiwgQXV0b2JveGVkVHlwZXMuTlVNQkVSXSxcblx0XHRcdFtUeXBlcy5TVFJJTkcsIEF1dG9ib3hlZFR5cGVzLlNUUklOR10sXG5cdFx0XHRbVHlwZXMuQk9PTEVBTiwgQXV0b2JveGVkVHlwZXMuQk9PTEVBTl1cblx0XHRdXG5cdCk7XG5cblx0c3RhdGljIGF1dG9ib3hJZk5lZWRlZChvYmplY3RUeXBlOiBUeXBlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpOiBDbGFzc1JlZlR5cGUgfCBUeXBlIHtcblx0XHRjb25zdCBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCA9IEF1dG9ib3hpbmcuQ0xBU1NOQU1FX01BUC5nZXQob2JqZWN0VHlwZSk7XG5cdFx0aWYgKGNsYXNzTmFtZSkge1xuXHRcdFx0cmV0dXJuIG5ldyBDbGFzc1JlZlR5cGUob2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2woY2xhc3NOYW1lKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG9iamVjdFR5cGU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtcblx0Q2xhc3NEZWZpbml0aW9uLFxuXHRDbGFzc01ldGhvZERlZmluaXRpb24sXG5cdEVudmlyb25tZW50LFxuXHRFeGVjdXRpb25TdG9wLFxuXHRJbnN0YW5jZSxcblx0UmV0dXJuVmFsdWVcbn0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB7XG5cdEFTVEFubm90YXRpb25Ob2RlLFxuXHRBU1RBcnJheU5vZGUsXG5cdEFTVEFzc2lnbm1lbnROb2RlLFxuXHRBU1RCaW5hcnlOb2RlLFxuXHRBU1RDYWxsTm9kZSxcblx0QVNUQ2xhc3NOb2RlLFxuXHRBU1RFeHByZXNzaW9uTm9kZSxcblx0QVNURm9yZWFjaE5vZGUsXG5cdEFTVElmTm9kZSxcblx0QVNUSW5kZXhOb2RlLFxuXHRBU1RMYW1iZGFOb2RlLFxuXHRBU1RNYXRjaENhc2VOb2RlLFxuXHRBU1RNYXRjaE5vZGUsXG5cdEFTVE1lbWJlck5vZGUsXG5cdEFTVE1ldGhvZE5vZGUsXG5cdEFTVE5ld05vZGUsXG5cdEFTVE5vZGUsXG5cdEFTVE5vZGVUeXBlLFxuXHRBU1RQYXJhbWV0ZXJOb2RlLFxuXHRBU1RSZXR1cm5Ob2RlLFxuXHRBU1RUeXBlTm9kZSxcblx0QVNUVW5hcnlOb2RlLFxuXHRBU1RWYXJpYWJsZU5vZGUsXG5cdEFTVFZEb21Ob2RlLFxuXHRBU1RWRG9tVGV4dE5vZGVcbn0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHtHUkFNTUFSLCBUWVBFX0VOVU19IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5pbXBvcnQge05hdGl2ZUNsYXNzZXN9IGZyb20gXCIuLi8uLi9saWJyYXJ5L25hdGl2ZV9jbGFzc2VzXCI7XG5pbXBvcnQge05hdGl2ZUZ1bmN0aW9ucywgTmF0aXZlRnVuY3Rpb25UeXBlUmVnaXN0cnl9IGZyb20gXCIuLi8uLi9saWJyYXJ5L25hdGl2ZV9mdW5jdGlvbnNcIjtcbmltcG9ydCB7Y2FzdFZhbHVlLCBmcm9tTHlyYVZhbHVlLCBMeXJhTmF0aXZlT2JqZWN0LCByZXR1cm5WYWx1ZSwgd3JhcE5hdGl2ZUluc3RhbmNlfSBmcm9tIFwiLi9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge3Rocm93UnVudGltZUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQge0F1dG9ib3hlZFR5cGVzfSBmcm9tIFwiLi4vdHlwZXMvYXV0b2JveGluZ1wiO1xuaW1wb3J0IHtMeXJhQXJyYXl9IGZyb20gXCIuLi8uLi9saWJyYXJ5L2NsYXNzZXMvYXJyYXlcIjtcbmltcG9ydCB0eXBlIHtWQ2hpbGR9IGZyb20gXCIuLi92ZG9tL3Zkb21cIjtcbmltcG9ydCB0eXBlIHtFdmVudFBpcGVsaW5lfSBmcm9tIFwiLi4vZXZlbnQvcGlwZWxpbmVcIjtcblxuY29uc3QgbmF0aXZlQ2xhc3NlcyA9IG5ldyBOYXRpdmVDbGFzc2VzKCk7XG5jb25zdCBuYXRpdmVGdW5jdGlvbnMgPSBuZXcgTmF0aXZlRnVuY3Rpb25zKCk7XG5jb25zdCBnbG9iYWxGdW5jdGlvbnMgPSBuYXRpdmVGdW5jdGlvbnMuZ2V0R2xvYmFsRnVuY3Rpb25zKCk7XG5jb25zdCBnbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeTogTmF0aXZlRnVuY3Rpb25UeXBlUmVnaXN0cnkgPSBuYXRpdmVGdW5jdGlvbnMuZ2V0R2xvYmFsRnVuY3Rpb25UeXBlUmVnaXN0cnkoKTtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0RnVuY3Rpb25DYWxsIHtcblx0cHJpdmF0ZSByZWFkb25seSBub2RlOiBBU1ROb2RlO1xuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgZnVuY3Rpb25FbnY6IEVudmlyb25tZW50O1xuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5O1xuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZTtcblx0cHJvdGVjdGVkIHJlYWRvbmx5IHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRub2RlOiBBU1ROb2RlLFxuXHRcdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSxcblx0XHRmdW5jdGlvbkVudjogRW52aXJvbm1lbnQsXG5cdFx0ZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSxcblx0XHR0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGxcblx0KSB7XG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5ID0gb2JqZWN0UmVnaXN0cnk7XG5cdFx0dGhpcy5mdW5jdGlvbkVudiA9IGZ1bmN0aW9uRW52O1xuXHRcdHRoaXMuZXZlbnRQaXBlbGluZSA9IGV2ZW50UGlwZWxpbmU7XG5cdFx0dGhpcy50aGlzVmFsdWUgPSB0aGlzVmFsdWU7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0Q2FsbE5vZGUoKTogQVNUQ2FsbE5vZGUge1xuXHRcdGlmICghKHRoaXMubm9kZSBpbnN0YW5jZW9mIEFTVENhbGxOb2RlKSkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgbmF0aXZlIGZ1bmN0aW9uIGNhbGwgJHt0aGlzLm5vZGUudHlwZX0uYCwgdGhpcy5ub2RlLnNwYW4pO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5ub2RlO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldExhbWJkYU5vZGUoKTogQVNUTGFtYmRhTm9kZSB7XG5cdFx0aWYgKCEodGhpcy5ub2RlIGluc3RhbmNlb2YgQVNUTGFtYmRhTm9kZSkpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGxhbWJkYSBjYWxsICR7dGhpcy5ub2RlLnR5cGV9LmAsIHRoaXMubm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMubm9kZTtcblx0fVxuXG5cdGFic3RyYWN0IGV2YWxDYWxsKC4uLmFyZ3M6IGFueVtdKTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgTGFtYmRhRnVuY3Rpb25DYWxsIGV4dGVuZHMgQWJzdHJhY3RGdW5jdGlvbkNhbGwge1xuXHRldmFsQ2FsbCguLi5hcmdzOiBhbnlbXSk6IGFueSB7XG5cdFx0Y29uc3Qgbm9kZTogQVNUTGFtYmRhTm9kZSA9IHRoaXMuZ2V0TGFtYmRhTm9kZSgpO1xuXHRcdGNvbnN0IGNsb3N1cmVFbnY6IEVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KHRoaXMuZnVuY3Rpb25FbnYpO1xuXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG5vZGUucGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgcGFyYW1ldGVyOiBBU1RQYXJhbWV0ZXJOb2RlIHwgbnVsbCA9IG5vZGUucGFyYW1ldGVyc1tpXSB8fCBudWxsO1xuXHRcdFx0aWYgKCFwYXJhbWV0ZXIpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRjbG9zdXJlRW52LmRlZmluZShwYXJhbWV0ZXIubmFtZSwgYXJnc1tpXSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2YWxSZXR1cm4oXG5cdFx0XHRub2RlLmNoaWxkcmVuLFxuXHRcdFx0dGhpcy5vYmplY3RSZWdpc3RyeSxcblx0XHRcdGNsb3N1cmVFbnYsXG5cdFx0XHR0aGlzLmV2ZW50UGlwZWxpbmUsXG5cdFx0XHR0aGlzLnRoaXNWYWx1ZSxcblx0XHRcdG5vZGUucmV0dXJuVHlwZVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE5hdGl2ZUZ1bmN0aW9uQ2FsbCBleHRlbmRzIEFic3RyYWN0RnVuY3Rpb25DYWxsIHtcblx0ZXZhbENhbGwoLi4uYXJnczogYW55W10pOiBhbnkge1xuXHRcdGNvbnN0IGNhbGxOb2RlOiBBU1RDYWxsTm9kZSA9IHRoaXMuZ2V0Q2FsbE5vZGUoKTtcblxuXHRcdGxldCByZXN1bHQ6IGFueSA9IHRoaXMucmVzb2x2ZUNhbGwoKSguLi5hcmdzKTtcblx0XHRpZiAocmVzdWx0IGluc3RhbmNlb2YgTHlyYU5hdGl2ZU9iamVjdCkge1xuXHRcdFx0cmVzdWx0ID0gd3JhcE5hdGl2ZUluc3RhbmNlKHJlc3VsdCwgdGhpcy5vYmplY3RSZWdpc3RyeSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdCA9IHJldHVyblZhbHVlKHJlc3VsdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2YWxSZXR1cm4oXG5cdFx0XHRbcmVzdWx0XSxcblx0XHRcdHRoaXMub2JqZWN0UmVnaXN0cnksXG5cdFx0XHR0aGlzLmZ1bmN0aW9uRW52LFxuXHRcdFx0dGhpcy5ldmVudFBpcGVsaW5lLFxuXHRcdFx0dGhpcy50aGlzVmFsdWUsXG5cdFx0XHRnbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeS5nZXQoY2FsbE5vZGUuY2FsbGVlLm5hbWUpLnJldHVyblR5cGVcblx0XHQpO1xuXHR9XG5cblx0cmVzb2x2ZUNhbGwoKTogYW55IHtcblx0XHRjb25zdCBub2RlOiBBU1RDYWxsTm9kZSB8IG51bGwgPSB0aGlzLmdldENhbGxOb2RlKCk7XG5cblx0XHRpZiAobm9kZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoJ0ludmFsaWQgZnVuY3Rpb24gY2FsbC4nKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZhbEV4cHJlc3Npb24oXG5cdFx0XHRub2RlLmNhbGxlZSxcblx0XHRcdHRoaXMub2JqZWN0UmVnaXN0cnksXG5cdFx0XHR0aGlzLmZ1bmN0aW9uRW52LFxuXHRcdFx0dGhpcy5ldmVudFBpcGVsaW5lLFxuXHRcdFx0dGhpcy50aGlzVmFsdWVcblx0XHQpW25vZGUuY2FsbGVlLm5hbWVdO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck5hdGl2ZUNsYXNzZXMob2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQpOiB2b2lkIHtcblx0Zm9yIChjb25zdCBuYXRpdmVDbGFzcyBvZiBuYXRpdmVDbGFzc2VzLnJlZ2lzdHJ5LnZhbHVlcygpKSB7XG5cdFx0aWYgKG5hdGl2ZUNsYXNzLmlzQXV0b2xvYWRBYmxlKSB7XG5cdFx0XHRjb25zdCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uID0gbmF0aXZlQ2xhc3MuZ2V0Q2xhc3NEZWZpbml0aW9uKCk7XG5cdFx0XHRvYmplY3RSZWdpc3RyeS5jbGFzc2VzLnNldChuYXRpdmVDbGFzcy5uYW1lLCBjbGFzc0RlZik7XG5cdFx0XHRlbnZpcm9ubWVudC5kZWZpbmUobmF0aXZlQ2xhc3MubmFtZSwgY2xhc3NEZWYpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJOYXRpdmVGdW5jdGlvbnMoZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogdm9pZCB7XG5cdGZvciAoY29uc3QgbmFtZSBpbiBnbG9iYWxGdW5jdGlvbnMpIHtcblx0XHRjb25zdCBnbG9iYWxGdW5jdGlvbjogYW55ID0gZ2xvYmFsRnVuY3Rpb25zW25hbWVdO1xuXHRcdGlmICghZ2xvYmFsRnVuY3Rpb24pIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKCdHbG9iYWwgZnVuY3Rpb24gaXMgbnVsbC4nKTtcblx0XHR9XG5cdFx0ZW52aXJvbm1lbnQuZGVmaW5lKG5hbWUsIGdsb2JhbEZ1bmN0aW9ucyk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxOb2RlKFxuXHRub2RlOiBBU1ROb2RlLFxuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksXG5cdGVudmlyb25tZW50OiBFbnZpcm9ubWVudCxcblx0ZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSxcblx0dGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsXG4pOiBhbnkge1xuXHRpZiAobm9kZS5pc0V4cHJlc3Npb24pIHtcblx0XHRyZXR1cm4gbmV3IFJldHVyblZhbHVlKGV2YWxFeHByZXNzaW9uKG5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKSk7XG5cdH1cblxuXHRzd2l0Y2ggKG5vZGUudHlwZSkge1xuXHRcdGNhc2UgQVNUTm9kZVR5cGUuUFJPR1JBTU06IHtcblx0XHRcdGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuXHRcdFx0XHRldmFsTm9kZShjaGlsZCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuSU1QT1JUOlxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuSU5URVJGQUNFOiB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5DTEFTUzoge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RDbGFzc05vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxDbGFzcyhub2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgY2xhc3Mgbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5WQVJJQUJMRToge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RWYXJpYWJsZU5vZGUpIHtcblx0XHRcdFx0Y29uc3QgdmFsdWU6IGFueSA9IG5vZGUuaW5pdFxuXHRcdFx0XHRcdD8gZXZhbEV4cHJlc3Npb24obm9kZS5pbml0LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSlcblx0XHRcdFx0XHQ6IG51bGw7XG5cdFx0XHRcdGVudmlyb25tZW50LmRlZmluZShub2RlLm5hbWUsIHZhbHVlKTtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCB2YXJpYWJsZSBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLklGOiB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVElmTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbElmKG5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGlmIG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuTUFUQ0g6IHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUTWF0Y2hOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsTWF0Y2gobm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgbWF0Y2ggbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5GT1JFQUNIOiB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEZvcmVhY2hOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsRm9yZWFjaChub2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBmb3JlYWNoIG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuVkRPTToge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RWRG9tTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbFZEb21Ob2RlKG5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGZvcmVhY2ggbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5FWFBSRVNTSU9OOiB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEV4cHJlc3Npb25Ob2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsRXhwcmVzc2lvbihub2RlLmV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGV4cHJlc3Npb24gbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5SRVRVUk46IHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUUmV0dXJuTm9kZSkge1xuXHRcdFx0XHRjb25zdCB2YWx1ZTogYW55ID0gbm9kZS5hcmd1bWVudFxuXHRcdFx0XHRcdD8gZXZhbEV4cHJlc3Npb24obm9kZS5hcmd1bWVudCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpXG5cdFx0XHRcdFx0OiBudWxsO1xuXHRcdFx0XHRyZXR1cm4gbmV3IFJldHVyblZhbHVlKHZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIHJldHVybiBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlLnNwYW4pO1xuXHRcdH1cblx0XHRkZWZhdWx0OiB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5oYW5kbGVkIG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RFbXB0eUluc3RhbmNlKG5vZGU6IEFTVENsYXNzTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogSW5zdGFuY2Uge1xuXHRsZXQgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbjtcblxuXHRpZiAob2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5oYXMobm9kZS5uYW1lKSkge1xuXHRcdGNsYXNzRGVmID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQobm9kZS5uYW1lKTtcblx0fSBlbHNlIHtcblx0XHRjbGFzc0RlZiA9IENsYXNzRGVmaW5pdGlvbi5mcm9tQVNUKG5vZGUpO1xuXHRcdG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuc2V0KG5vZGUubmFtZSwgY2xhc3NEZWYpO1xuXHR9XG5cblx0cmV0dXJuIGNsYXNzRGVmLmNvbnN0cnVjdEVtcHR5SW5zdGFuY2UoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdE5hdGl2ZUluc3RhbmNlKGV4cHI6IEFTVE5ld05vZGUsIGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogSW5zdGFuY2Uge1xuXHRyZXR1cm4gY2xhc3NEZWYuY29uc3RydWN0TmF0aXZlSW5zdGFuY2VCeU5ld05vZGUoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEluc3RhbmNlKGV4cHI6IEFTVE5ld05vZGUsIGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogSW5zdGFuY2Uge1xuXHRyZXR1cm4gY2xhc3NEZWYuY29uc3RydWN0SW5zdGFuY2VCeU5ld05vZGUoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxDbGFzcyhub2RlOiBBU1RDbGFzc05vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogdm9pZCB7XG5cdGNvbnN0IGluc3RhbmNlOiBJbnN0YW5jZSA9IGNvbnN0cnVjdEVtcHR5SW5zdGFuY2Uobm9kZSwgb2JqZWN0UmVnaXN0cnkpO1xuXG5cdGluc3RhbmNlLmluaXRpYWxpemVJbnN0YW5jZUZpZWxkcyhvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXG5cdGVudmlyb25tZW50LmRlZmluZShub2RlLm5hbWUsIGluc3RhbmNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxOZXcoZXhwcjogQVNUTmV3Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiBJbnN0YW5jZSB7XG5cdGlmICghb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5oYXMoZXhwci5uYW1lKSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBVbmtub3duIGNsYXNzICR7ZXhwci5uYW1lfS5gLCBleHByLnNwYW4pO1xuXHR9XG5cblx0Y29uc3QgY2xhc3NEZWYgPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChleHByLm5hbWUpO1xuXHRpZiAoY2xhc3NEZWYubmF0aXZlSW5zdGFuY2UpIHtcblx0XHRyZXR1cm4gY29uc3RydWN0TmF0aXZlSW5zdGFuY2UoZXhwciwgY2xhc3NEZWYsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG5cdH1cblxuXHRyZXR1cm4gY29uc3RydWN0SW5zdGFuY2UoZXhwciwgY2xhc3NEZWYsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsRXhwcmVzc2lvbihleHByOiBBU1ROb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0c3dpdGNoIChleHByLnR5cGUpIHtcblx0XHRjYXNlIEFTVE5vZGVUeXBlLlNUUklORzpcblx0XHRjYXNlIEFTVE5vZGVUeXBlLk5VTUJFUjpcblx0XHRjYXNlIEFTVE5vZGVUeXBlLkJPT0xFQU46IHtcblx0XHRcdHJldHVybiBleHByLnZhbHVlO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLk5VTEw6IHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLklERU5USUZJRVI6IHtcblx0XHRcdHJldHVybiBlbnZpcm9ubWVudC5nZXQoZXhwci5uYW1lKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5USElTOiB7XG5cdFx0XHRpZiAoIXRoaXNWYWx1ZSkge1xuXHRcdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgdGhpcyB1c2VkIG91dHNpZGUgb2YgbWV0aG9kLmAsIGV4cHIuc3Bhbik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpc1ZhbHVlO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkJJTkFSWToge1xuXHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RCaW5hcnlOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsQmluYXJ5KGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGJpbmFyeSBleHByZXNzaW9uICR7ZXhwci50eXBlfWApO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLlVOQVJZOiB7XG5cdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVFVuYXJ5Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbFVuYXJ5KGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIHVuYXJ5IGV4cHJlc3Npb24gJHtleHByLnR5cGV9LmAsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuQVNTSUdOTUVOVDoge1xuXHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RBc3NpZ25tZW50Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbEFzc2lnbihleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBhc3NpZ25tZW50IGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5NRU1CRVI6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbE1lbWJlcihleHByLCBlbnZpcm9ubWVudCk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBtZW1iZXIgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkNBTEw6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQ2FsbE5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxDYWxsKGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGNhbGwgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLlZET006IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUVkRvbU5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxWRG9tTm9kZShleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBjYWxsIGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5ORVc6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTmV3Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbE5ldyhleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgY2FsbCBleHByZXNzaW9uICR7ZXhwci50eXBlfWAsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuQVJSQVk6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQXJyYXlOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsQXJyYXkoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgYXJyYXkgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLklOREVYOiB7XG5cdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVEluZGV4Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbEluZGV4KGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGluZGV4IGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5MQU1CREE6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTGFtYmRhTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbExhbWJkYShleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBsYW1iZGEgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0XHRkZWZhdWx0OiB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5oYW5kbGVkIGV4cHJlc3Npb24gJHtleHByLnR5cGV9LmAsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsQmluYXJ5KGV4cHI6IEFTVEJpbmFyeU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRjb25zdCBsZWZ0OiBhbnkgPSBjYXN0VmFsdWUoZXZhbEV4cHJlc3Npb24oZXhwci5sZWZ0LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSkpXG5cdGNvbnN0IHJpZ2h0OiBhbnkgPSBjYXN0VmFsdWUoZXZhbEV4cHJlc3Npb24oZXhwci5yaWdodCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpKVxuXG5cdHN3aXRjaCAoZXhwci5vcGVyYXRvcikge1xuXHRcdGNhc2UgR1JBTU1BUi5QTFVTOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCArIHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTUlOVVM6IHtcblx0XHRcdHJldHVybiBsZWZ0IC0gcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5NVUxUSVBMWToge1xuXHRcdFx0cmV0dXJuIGxlZnQgKiByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkRJVklERToge1xuXHRcdFx0cmV0dXJuIGxlZnQgLyByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLk1PRFVMVVM6IHtcblx0XHRcdHJldHVybiBsZWZ0ICUgcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5MRVNTX1RIQU46IHtcblx0XHRcdHJldHVybiBsZWZ0IDwgcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5HUkVBVEVSX1RIQU46IHtcblx0XHRcdHJldHVybiBsZWZ0ID4gcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5MRVNTX0VRVUFMOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCA8PSByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkdSRUFURVJfRVFVQUw6IHtcblx0XHRcdHJldHVybiBsZWZ0ID49IHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuRVFVQUw6IHtcblx0XHRcdHJldHVybiBsZWZ0ID09PSByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLk5PVF9FUVVBTDoge1xuXHRcdFx0cmV0dXJuIGxlZnQgIT09IHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuQU5EOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCAmJiByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLk9SOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCB8fCByaWdodDtcblx0XHR9XG5cdFx0ZGVmYXVsdDoge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVua25vd24gb3BlcmF0b3IgJHtleHByLm9wZXJhdG9yfWApO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEFycmF5KGV4cHI6IEFTVEFycmF5Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IEluc3RhbmNlIHtcblx0Y29uc3QgdmFsdWVzOiBhbnlbXSA9IFtdO1xuXHRmb3IgKGNvbnN0IGVsZW0gb2YgZXhwci5lbGVtZW50cykge1xuXHRcdHZhbHVlcy5wdXNoKGV2YWxFeHByZXNzaW9uKGVsZW0sIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKSk7XG5cdH1cblxuXHRjb25zdCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQoJ0FycmF5Jyk7XG5cdGNvbnN0IGluc3RhbmNlOiBJbnN0YW5jZSA9IGNsYXNzRGVmLmNvbnN0cnVjdEVtcHR5SW5zdGFuY2UoKTtcblx0aW5zdGFuY2UuX19uYXRpdmVJbnN0YW5jZSA9IG5ldyBjbGFzc0RlZi5uYXRpdmVJbnN0YW5jZShmcm9tTHlyYVZhbHVlKHZhbHVlcykpO1xuXG5cdHJldHVybiBpbnN0YW5jZTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEluZGV4KGV4cHI6IEFTVEluZGV4Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCkge1xuXHRpZiAoIWV4cHIub2JqZWN0KSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYEluZGV4IGFjY2VzcyBvbiBudWxsLmAsIGV4cHIuc3Bhbik7XG5cdH1cblxuXHRpZiAoIWV4cHIuaW5kZXgpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgQWNjZXNzIHdpdGggdW5zcGVjaWZpYyBpbmRleC5gLCBleHByLnNwYW4pO1xuXHR9XG5cblx0Y29uc3Qgb2JqZWN0ID0gZXZhbEV4cHJlc3Npb24oZXhwci5vYmplY3QsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0Y29uc3QgaW5kZXggPSBldmFsRXhwcmVzc2lvbihleHByLmluZGV4LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cblx0aWYgKCEob2JqZWN0IGluc3RhbmNlb2YgTHlyYUFycmF5IHx8IG9iamVjdC5fX25hdGl2ZUluc3RhbmNlIGluc3RhbmNlb2YgTHlyYUFycmF5KSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKCdJbmRleCBhY2Nlc3Mgb24gbm9uLWFycmF5JywgZXhwci5zcGFuKTtcblx0fVxuXG5cdGNvbnN0IHRhcmdldCA9IG9iamVjdCBpbnN0YW5jZW9mIEx5cmFBcnJheSA/IG9iamVjdCA6IG9iamVjdC5fX25hdGl2ZUluc3RhbmNlO1xuXHRjb25zdCB2YWx1ZSA9IHRhcmdldC52YWx1ZXNbaW5kZXhdO1xuXG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRyZXR1cm4gd3JhcE5hdGl2ZUluc3RhbmNlKHZhbHVlLCBvYmplY3RSZWdpc3RyeSk7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsTGFtYmRhKG5vZGU6IEFTVExhbWJkYU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgbGFtYmRhRW52OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogTGFtYmRhRnVuY3Rpb25DYWxsIHtcblx0cmV0dXJuIG5ldyBMYW1iZGFGdW5jdGlvbkNhbGwobm9kZSwgb2JqZWN0UmVnaXN0cnksIGxhbWJkYUVudiwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEFzc2lnbihleHByOiBBU1RBc3NpZ25tZW50Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGNvbnN0IHZhbHVlOiBhbnkgPSBldmFsRXhwcmVzc2lvbihleHByLnJpZ2h0LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cblx0aWYgKGV4cHIubGVmdC50eXBlID09PSBBU1ROb2RlVHlwZS5NRU1CRVIpIHtcblx0XHRpZiAoZXhwci5sZWZ0IGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkge1xuXHRcdFx0Y29uc3Qgb2JqZWN0OiBJbnN0YW5jZSA9IGV2YWxFeHByZXNzaW9uKFxuXHRcdFx0XHRleHByLmxlZnQub2JqZWN0LFxuXHRcdFx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRcdFx0ZW52aXJvbm1lbnQsXG5cdFx0XHRcdGV2ZW50UGlwZWxpbmUsXG5cdFx0XHRcdHRoaXNWYWx1ZVxuXHRcdFx0KSBhcyBJbnN0YW5jZTtcblxuXHRcdFx0aWYgKGV4cHIubGVmdC5vYmplY3QudHlwZSA9PT0gQVNUTm9kZVR5cGUuSURFTlRJRklFUikge1xuXHRcdFx0XHRvYmplY3QuX19zdGF0aWNGaWVsZHNbZXhwci5sZWZ0LnByb3BlcnR5XSA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b2JqZWN0Ll9faW5zdGFuY2VGaWVsZHNbZXhwci5sZWZ0LnByb3BlcnR5XSA9IHZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHRvYmplY3QubWFya0RpcnR5KGV2ZW50UGlwZWxpbmUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBtZW1iZXIgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRlbnZpcm9ubWVudC5zZXQoZXhwci5sZWZ0Lm5hbWUsIHZhbHVlKTtcblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsTWVtYmVyKGV4cHI6IEFTVE1lbWJlck5vZGUsIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCk6IGFueSB7XG5cdGNvbnN0IG9iamVjdDogYW55ID0gZW52aXJvbm1lbnQuZ2V0KGV4cHIub2JqZWN0Lm5hbWUpO1xuXG5cdGlmIChleHByLnByb3BlcnR5IGluIG9iamVjdC5fX2luc3RhbmNlRmllbGRzKSB7XG5cdFx0cmV0dXJuIG9iamVjdC5fX2luc3RhbmNlRmllbGRzW2V4cHIucHJvcGVydHldO1xuXHR9XG5cblx0aWYgKGV4cHIucHJvcGVydHkgaW4gb2JqZWN0Ll9fc3RhdGljRmllbGRzKSB7XG5cdFx0cmV0dXJuIG9iamVjdC5fX3N0YXRpY0ZpZWxkc1tleHByLnByb3BlcnR5XTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbENhbGwoZXhwcjogQVNUQ2FsbE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHQvLyBzdXBlciBjYWxsIGluc2lkZSBjb25zdHJ1Y3RvclxuXHRpZiAoZXhwci5jYWxsZWUudHlwZSA9PT0gQVNUTm9kZVR5cGUuSURFTlRJRklFUiAmJiBleHByLmNhbGxlZS5uYW1lID09PSBHUkFNTUFSLlNVUEVSKSB7XG5cdFx0aWYgKCF0aGlzVmFsdWUgfHwgIXRoaXNWYWx1ZS5fX2NsYXNzRGVmPy5zdXBlckNsYXNzKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcignc3VwZXIoKSB1c2VkIG91dHNpZGUgb2Ygc3ViY2xhc3MgY29uc3RydWN0b3InKTtcblx0XHR9XG5cblx0XHRjb25zdCBzdXBlckNsYXNzRGVmID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQodGhpc1ZhbHVlLl9fY2xhc3NEZWYuc3VwZXJDbGFzcyk7XG5cdFx0Y29uc3QgY29uc3RydWN0b3JNZXRob2QgPSBzdXBlckNsYXNzRGVmLmNvbnN0cnVjdG9yTWV0aG9kO1xuXG5cdFx0aWYgKCFjb25zdHJ1Y3Rvck1ldGhvZCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY29uc3RydWN0b3JFbnYgPSBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpO1xuXHRcdGNvbnN0cnVjdG9yRW52LmRlZmluZShHUkFNTUFSLlRISVMsIHRoaXNWYWx1ZSk7XG5cblx0XHRiaW5kTWV0aG9kUGFyYW1ldGVycyhcblx0XHRcdGV4cHIsXG5cdFx0XHRjb25zdHJ1Y3Rvck1ldGhvZC5wYXJhbWV0ZXJzLFxuXHRcdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0XHRjb25zdHJ1Y3RvckVudixcblx0XHRcdGVudmlyb25tZW50LFxuXHRcdFx0ZXZlbnRQaXBlbGluZSxcblx0XHRcdHRoaXNWYWx1ZVxuXHRcdCk7XG5cblx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIGNvbnN0cnVjdG9yTWV0aG9kLmNoaWxkcmVuKSB7XG5cdFx0XHRldmFsTm9kZShjaGlsZCwgb2JqZWN0UmVnaXN0cnksIGNvbnN0cnVjdG9yRW52LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0aWYgKGV4cHIuY2FsbGVlLnR5cGUgPT09IEFTVE5vZGVUeXBlLk1FTUJFUikge1xuXHRcdGlmIChleHByLmNhbGxlZSBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpIHtcblx0XHRcdGlmIChleHByLmNhbGxlZS5vYmplY3QudHlwZSA9PT0gQVNUTm9kZVR5cGUuSURFTlRJRklFUikge1xuXHRcdFx0XHRjb25zdCBjbGFzc05hbWU6IHN0cmluZyA9IGV4cHIuY2FsbGVlLm9iamVjdC5uYW1lO1xuXG5cdFx0XHRcdGlmIChvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmhhcyhjbGFzc05hbWUpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGV2YWxTdGF0aWNDYWxsKGV4cHIsIGNsYXNzTmFtZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZXZhbEluc3RhbmNlQ2FsbChleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gZXZhbEZ1bmN0aW9uQ2FsbChleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsRnVuY3Rpb25DYWxsKGV4cHI6IEFTVENhbGxOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKSB7XG5cdGNvbnN0IGZ1bmN0aW9uQ2FsbDogYW55ID0gZXZhbEV4cHJlc3Npb24oZXhwci5jYWxsZWUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0Y29uc3QgYXJnczogYW55W10gPSBldmFsQ2FsbEFyZ3VtZW50cyhleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cblx0aWYgKGZ1bmN0aW9uQ2FsbCBpbnN0YW5jZW9mIExhbWJkYUZ1bmN0aW9uQ2FsbCkge1xuXHRcdHJldHVybiBmdW5jdGlvbkNhbGwuZXZhbENhbGwoLi4uYXJncyk7XG5cdH1cblxuXHRyZXR1cm4gKG5ldyBOYXRpdmVGdW5jdGlvbkNhbGwoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpKS5ldmFsQ2FsbCguLi5hcmdzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxTdGF0aWNDYWxsKGV4cHI6IEFTVENhbGxOb2RlLCBjbGFzc05hbWU6IHN0cmluZywgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGlmICghKGV4cHIuY2FsbGVlIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBtZW1iZXIgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHR9XG5cblx0Y29uc3QgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KGNsYXNzTmFtZSk7XG5cdGNvbnN0IG1ldGhvZERlZjogQ2xhc3NNZXRob2REZWZpbml0aW9uIHwgdW5kZWZpbmVkID0gY2xhc3NEZWYuc3RhdGljTWV0aG9kc1tleHByLmNhbGxlZS5wcm9wZXJ0eV07XG5cblx0aWYgKCFtZXRob2REZWYpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgU3RhdGljIG1ldGhvZCAke2NsYXNzTmFtZX0uJHtleHByLmNhbGxlZS5wcm9wZXJ0eX0gbm90IGZvdW5kYCwgZXhwci5jYWxsZWUuc3Bhbik7XG5cdH1cblxuXHRpZiAoY2xhc3NEZWYubmF0aXZlSW5zdGFuY2UgJiYgY2xhc3NEZWYubmF0aXZlSW5zdGFuY2VbbWV0aG9kRGVmLm5hbWVdKSB7XG5cdFx0Y29uc3QgYXJnczogYW55W10gPSBldmFsTWV0aG9kQXJndW1lbnRzKFxuXHRcdFx0ZXhwcixcblx0XHRcdG1ldGhvZERlZi5wYXJhbWV0ZXJzLFxuXHRcdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0XHRlbnZpcm9ubWVudCxcblx0XHRcdGV2ZW50UGlwZWxpbmUsXG5cdFx0XHR0aGlzVmFsdWVcblx0XHQpO1xuXHRcdGNvbnN0IHJhd0FyZ3M6IGFueVtdID0gYXJncy5tYXAoZnJvbUx5cmFWYWx1ZSk7XG5cdFx0Y29uc3QgcmVzdWx0OiBhbnkgPSBjbGFzc0RlZi5uYXRpdmVJbnN0YW5jZVttZXRob2REZWYubmFtZV0oLi4ucmF3QXJncyk7XG5cblx0XHRpZiAocmVzdWx0IGluc3RhbmNlb2YgTHlyYU5hdGl2ZU9iamVjdCkge1xuXHRcdFx0cmV0dXJuIHdyYXBOYXRpdmVJbnN0YW5jZShyZXN1bHQsIG9iamVjdFJlZ2lzdHJ5KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZhbFJldHVybihcblx0XHRcdFtyZXR1cm5WYWx1ZShyZXN1bHQpXSxcblx0XHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0bmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KSxcblx0XHRcdGV2ZW50UGlwZWxpbmUsXG5cdFx0XHR0aGlzVmFsdWUsXG5cdFx0XHRtZXRob2REZWYucmV0dXJuVHlwZVxuXHRcdCk7XG5cdH1cblxuXHRjb25zdCBtZXRob2RFbnYgPSBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpO1xuXG5cdGJpbmRNZXRob2RQYXJhbWV0ZXJzKGV4cHIsIG1ldGhvZERlZi5wYXJhbWV0ZXJzLCBvYmplY3RSZWdpc3RyeSwgbWV0aG9kRW52LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblxuXHRyZXR1cm4gZXZhbFJldHVybihtZXRob2REZWYuY2hpbGRyZW4sIG9iamVjdFJlZ2lzdHJ5LCBtZXRob2RFbnYsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSwgbWV0aG9kRGVmLnJldHVyblR5cGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEluc3RhbmNlQ2FsbChleHByOiBBU1RDYWxsTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCkge1xuXHRpZiAoIShleHByLmNhbGxlZSBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpKSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgbWVtYmVyIGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0fVxuXG5cdC8vIE9iamVrdCBhdXN3ZXJ0ZW4gKHUgfCB0aGlzIHwgc3VwZXIpXG5cdGxldCB0YXJnZXQ6IGFueSA9IGV2YWxFeHByZXNzaW9uKGV4cHIuY2FsbGVlLm9iamVjdCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXG5cdHRhcmdldCA9IGF1dG9Cb3hJZk5lZWRlZCh0YXJnZXQsIG9iamVjdFJlZ2lzdHJ5KTtcblxuXHRpZiAoIXRhcmdldCB8fCAhdGFyZ2V0Ll9fY2xhc3NEZWYpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcignSW5zdGFuY2UgY2FsbCBvbiBub24tb2JqZWN0JywgZXhwci5jYWxsZWUuc3Bhbik7XG5cdH1cblxuXHRsZXQgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiA9IHRhcmdldC5fX2NsYXNzRGVmO1xuXG5cdC8vIHN1cGVyLm1ldGhvZCgpXG5cdGlmIChleHByLmNhbGxlZS5vYmplY3QudHlwZSA9PT0gQVNUTm9kZVR5cGUuSURFTlRJRklFUiAmJiBleHByLmNhbGxlZS5vYmplY3QubmFtZSA9PT0gJ3N1cGVyJykge1xuXHRcdGNvbnN0IHN1cGVyTmFtZSA9IGNsYXNzRGVmLnN1cGVyQ2xhc3M7XG5cdFx0aWYgKCFzdXBlck5hbWUpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKCdzdXBlciB1c2VkIGJ1dCBubyBzdXBlcmNsYXNzJywgZXhwci5jYWxsZWUuc3Bhbik7XG5cdFx0fVxuXHRcdGNsYXNzRGVmID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQoc3VwZXJOYW1lKTtcblx0fVxuXG5cblx0Y29uc3QgbWV0aG9kRGVmOiBDbGFzc01ldGhvZERlZmluaXRpb24gfCBudWxsID0gcmVzb2x2ZUluc3RhbmNlTWV0aG9kKFxuXHRcdGNsYXNzRGVmLFxuXHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdGV4cHIuY2FsbGVlLnByb3BlcnR5XG5cdCk7XG5cblx0aWYgKCFtZXRob2REZWYpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgTWV0aG9kICR7ZXhwci5jYWxsZWUucHJvcGVydHl9IG5vdCBmb3VuZCBvbiAke2NsYXNzRGVmLm5hbWV9YCwgZXhwci5jYWxsZWUuc3Bhbik7XG5cdH1cblxuXHRjb25zdCBtZXRob2RFbnYgPSBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpO1xuXHRtZXRob2RFbnYuZGVmaW5lKEdSQU1NQVIuVEhJUywgdGFyZ2V0KTtcblxuXHRpZiAodGFyZ2V0Ll9fbmF0aXZlSW5zdGFuY2UgJiYgbWV0aG9kRGVmLm5hbWUgaW4gdGFyZ2V0Ll9fbmF0aXZlSW5zdGFuY2UpIHtcblx0XHRjb25zdCBhcmdzOiBhbnlbXSA9IGV2YWxNZXRob2RBcmd1bWVudHMoXG5cdFx0XHRleHByLFxuXHRcdFx0bWV0aG9kRGVmLnBhcmFtZXRlcnMsXG5cdFx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRcdGVudmlyb25tZW50LFxuXHRcdFx0ZXZlbnRQaXBlbGluZSxcblx0XHRcdHRoaXNWYWx1ZVxuXHRcdCk7XG5cblx0XHRjb25zdCByYXdBcmdzOiBhbnkgPSBhcmdzLm1hcChmcm9tTHlyYVZhbHVlKTtcblx0XHRjb25zdCByZXN1bHQ6IGFueSA9IHRhcmdldC5fX25hdGl2ZUluc3RhbmNlW21ldGhvZERlZi5uYW1lXSguLi5yYXdBcmdzKTtcblxuXHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRyZXR1cm4gd3JhcE5hdGl2ZUluc3RhbmNlKHJlc3VsdCwgb2JqZWN0UmVnaXN0cnkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmFsUmV0dXJuKFxuXHRcdFx0W3JldHVyblZhbHVlKHJlc3VsdCldLFxuXHRcdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0XHRtZXRob2RFbnYsXG5cdFx0XHRldmVudFBpcGVsaW5lLFxuXHRcdFx0dGFyZ2V0LFxuXHRcdFx0bWV0aG9kRGVmLnJldHVyblR5cGVcblx0XHQpO1xuXHR9XG5cblx0YmluZE1ldGhvZFBhcmFtZXRlcnMoZXhwciwgbWV0aG9kRGVmLnBhcmFtZXRlcnMsIG9iamVjdFJlZ2lzdHJ5LCBtZXRob2RFbnYsIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXG5cdHJldHVybiBldmFsUmV0dXJuKG1ldGhvZERlZi5jaGlsZHJlbiwgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgZXZlbnRQaXBlbGluZSwgdGFyZ2V0LCBtZXRob2REZWYucmV0dXJuVHlwZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSW5zdGFuY2VNZXRob2QoY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBtZXRob2ROYW1lOiBzdHJpbmcpOiBDbGFzc01ldGhvZERlZmluaXRpb24gfCBudWxsIHtcblx0aWYgKGNsYXNzRGVmLmluc3RhbmNlTWV0aG9kc1ttZXRob2ROYW1lXSkge1xuXHRcdHJldHVybiBjbGFzc0RlZi5pbnN0YW5jZU1ldGhvZHNbbWV0aG9kTmFtZV07XG5cdH1cblxuXHRpZiAoY2xhc3NEZWYuc3VwZXJDbGFzcykge1xuXHRcdGNvbnN0IHN1cGVyRGVmID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQoY2xhc3NEZWYuc3VwZXJDbGFzcyk7XG5cdFx0cmV0dXJuIHJlc29sdmVJbnN0YW5jZU1ldGhvZChzdXBlckRlZiwgb2JqZWN0UmVnaXN0cnksIG1ldGhvZE5hbWUpO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kTWV0aG9kUGFyYW1ldGVycyhcblx0Y2FsbE5vZGU6IEFTVENhbGxOb2RlLFxuXHRwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sXG5cdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSxcblx0bWV0aG9kRW52OiBFbnZpcm9ubWVudCxcblx0ZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LFxuXHRldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLFxuXHR0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGxcbik6IHZvaWQge1xuXG5cdGNvbnN0IGFyZ3MgPSBjYWxsTm9kZS5hcmd1bWVudHM7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHBhcmFtZXRlcjogQVNUUGFyYW1ldGVyTm9kZSB8IG51bGwgPSBwYXJhbWV0ZXJzW2ldIHx8IG51bGw7XG5cdFx0Y29uc3QgYXJndW1lbnQ6IGFueSA9IGFyZ3NbaV0gfHwgbnVsbDtcblxuXHRcdGlmICghcGFyYW1ldGVyKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcignTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBpbiBtZXRob2QgY2FsbC4nKTtcblx0XHR9XG5cblx0XHRsZXQgcmF3VmFsdWU7XG5cblx0XHRpZiAoYXJndW1lbnQpIHtcblx0XHRcdHJhd1ZhbHVlID0gZXZhbEV4cHJlc3Npb24oYXJndW1lbnQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHR9IGVsc2UgaWYgKHBhcmFtZXRlcj8uZGVmYXVsdFZhbHVlKSB7XG5cdFx0XHRyYXdWYWx1ZSA9IGV2YWxFeHByZXNzaW9uKHBhcmFtZXRlci5kZWZhdWx0VmFsdWUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHR9XG5cblx0XHRjb25zdCBjYXN0ZWQgPSBwYXJhbWV0ZXIudHlwZUFubm90YXRpb25cblx0XHRcdD8gY2FzdFZhbHVlKHJhd1ZhbHVlLCBwYXJhbWV0ZXIudHlwZUFubm90YXRpb24ubmFtZSlcblx0XHRcdDogY2FzdFZhbHVlKHJhd1ZhbHVlLCBUWVBFX0VOVU0uTUlYRUQpO1xuXG5cdFx0bWV0aG9kRW52LmRlZmluZShwYXJhbWV0ZXIubmFtZSwgY2FzdGVkKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbENhbGxBcmd1bWVudHMobm9kZTogQVNUQ2FsbE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnlbXSB7XG5cdGlmIChub2RlLmNhbGxlZSBpbnN0YW5jZW9mIEFTVExhbWJkYU5vZGUpIHtcblx0XHRjb25zdCBsYW1iZGEgPSBub2RlLmNhbGxlZTtcblx0XHRyZXR1cm4gZXZhbE1ldGhvZEFyZ3VtZW50cyhub2RlLCBsYW1iZGEucGFyYW1ldGVycywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHR9XG5cblx0aWYgKG5vZGUuY2FsbGVlLnR5cGUgPT09IEFTVE5vZGVUeXBlLklERU5USUZJRVIpIHtcblx0XHRyZXR1cm4gbm9kZS5hcmd1bWVudHMubWFwKGFyZ3VtZW50ID0+IHtcblx0XHRcdHJldHVybiBjYXN0VmFsdWUoXG5cdFx0XHRcdGV2YWxFeHByZXNzaW9uKGFyZ3VtZW50LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSksXG5cdFx0XHRcdGFyZ3VtZW50LnR5cGVcblx0XHRcdCk7XG5cdFx0fSk7XG5cdH1cblxuXHRsZXQgbW9kdWxlTmFtZTogc3RyaW5nID0gJ3Vua25vd24nO1xuXHRsZXQgbWV0aG9kTmFtZTogc3RyaW5nID0gJ3Vua25vd24nO1xuXG5cdGlmIChub2RlLmNhbGxlZSBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpIHtcblx0XHRtb2R1bGVOYW1lID0gbm9kZS5jYWxsZWUub2JqZWN0Lm5hbWU7XG5cdFx0bWV0aG9kTmFtZSA9IG5vZGUuY2FsbGVlLnByb3BlcnR5O1xuXHR9XG5cblx0dGhyb3dSdW50aW1lRXJyb3IoYFVua25vd24gZnVuY3Rpb24gJHttb2R1bGVOYW1lfS4ke21ldGhvZE5hbWV9YCwgbm9kZS5zcGFuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxNZXRob2RBcmd1bWVudHMoZXhwcjogQVNUQ2FsbE5vZGUgfCBBU1ROZXdOb2RlLCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnlbXSB7XG5cdGNvbnN0IGFyZ3MgPSBbXTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtZXRlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBwYXJhbWV0ZXI6IEFTVFBhcmFtZXRlck5vZGUgfCBudWxsID0gcGFyYW1ldGVyc1tpXSB8fCBudWxsO1xuXHRcdGNvbnN0IGFyZ3VtZW50ID0gZXhwci5hcmd1bWVudHNbaV0gfHwgbnVsbDtcblxuXHRcdGxldCB2YWx1ZTtcblxuXHRcdGlmIChhcmd1bWVudCkge1xuXHRcdFx0dmFsdWUgPSBldmFsRXhwcmVzc2lvbihhcmd1bWVudCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdH0gZWxzZSBpZiAocGFyYW1ldGVyPy5kZWZhdWx0VmFsdWUpIHtcblx0XHRcdHZhbHVlID0gZXZhbEV4cHJlc3Npb24ocGFyYW1ldGVyLmRlZmF1bHRWYWx1ZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgW1J1bnRpbWVFcnJvcl0gTWlzc2luZyBhcmd1bWVudCAnJHtwYXJhbWV0ZXI/Lm5hbWV9J2AsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXG5cdFx0YXJncy5wdXNoKHZhbHVlKTtcblx0fVxuXG5cdHJldHVybiBhcmdzLm1hcCgoYXJndW1lbnQsIGkpID0+IHtcblx0XHRjb25zdCBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJzW2ldO1xuXHRcdHJldHVybiBwYXJhbWV0ZXI/LnR5cGVBbm5vdGF0aW9uXG5cdFx0XHQ/IGNhc3RWYWx1ZShhcmd1bWVudCwgcGFyYW1ldGVyLnR5cGVBbm5vdGF0aW9uLm5hbWUpXG5cdFx0XHQ6IGNhc3RWYWx1ZShhcmd1bWVudCwgVFlQRV9FTlVNLk1JWEVEKTtcblx0fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsSWYobm9kZTogQVNUSWZOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0Y29uc3QgY29uZGl0aW9uID0gY2FzdFZhbHVlKFxuXHRcdGV2YWxFeHByZXNzaW9uKG5vZGUuY29uZGl0aW9uLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSksXG5cdFx0VFlQRV9FTlVNLkJPT0xFQU5cblx0KTtcblxuXHQvLyBUSEVOXG5cdGlmIChjb25kaXRpb24gPT09IHRydWUpIHtcblx0XHRyZXR1cm4gZXZhbEJsb2NrKG5vZGUudGhlbi5jaGlsZHJlbiwgb2JqZWN0UmVnaXN0cnksIG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCksIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdH1cblxuXHQvLyBFTFNFXG5cdGlmIChub2RlLmVsc2UpIHtcblx0XHRpZiAobm9kZS5lbHNlIGluc3RhbmNlb2YgQVNUSWZOb2RlKSB7XG5cdFx0XHRyZXR1cm4gZXZhbElmKG5vZGUuZWxzZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmFsQmxvY2sobm9kZS5lbHNlLmNoaWxkcmVuLCBvYmplY3RSZWdpc3RyeSwgbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KSwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbE1hdGNoKG5vZGU6IEFTVE1hdGNoTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGNvbnN0IG1hdGNoVmFsdWU6IGFueSA9IGV2YWxFeHByZXNzaW9uKG5vZGUuZXhwcmVzc2lvbiwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcblxuXHRmb3IgKGNvbnN0IGNhc2VOb2RlIG9mIG5vZGUuY2FzZXMpIHtcblx0XHRpZiAoY2FzZU5vZGUudGVzdCA9PT0gbnVsbCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdGVzdFZhbHVlID0gZXZhbEV4cHJlc3Npb24oY2FzZU5vZGUudGVzdCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXG5cdFx0aWYgKHRlc3RWYWx1ZSA9PT0gbWF0Y2hWYWx1ZSkge1xuXHRcdFx0cmV0dXJuIGV2YWxNYXRjaENhc2UoY2FzZU5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRpZiAobm9kZS5kZWZhdWx0Q2FzZSkge1xuXHRcdHJldHVybiBldmFsTWF0Y2hDYXNlKG5vZGUuZGVmYXVsdENhc2UsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbE1hdGNoQ2FzZShub2RlOiBBU1RNYXRjaENhc2VOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0cmV0dXJuIGV2YWxCbG9jayhub2RlLmNoaWxkcmVuLCBvYmplY3RSZWdpc3RyeSwgbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KSwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxGb3JlYWNoKG5vZGU6IEFTVEZvcmVhY2hOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0bGV0IGl0ZXJhYmxlID0gZXZhbEV4cHJlc3Npb24obm9kZS5pdGVyYWJsZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXG5cdGlmICghKGl0ZXJhYmxlIGluc3RhbmNlb2YgSW5zdGFuY2UpKSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYGZvcmVhY2ggZXhwZWN0cyBhbiBvYmplY3QgaW1wbGVtZW50aW5nIEl0ZXJhYmxlYCwgbm9kZS5pdGVyYWJsZS5zcGFuKTtcblx0fVxuXG5cdGNvbnN0IGl0ZXJhdG9yTWV0aG9kID0gcmVzb2x2ZUluc3RhbmNlTWV0aG9kKFxuXHRcdGl0ZXJhYmxlLl9fY2xhc3NEZWYsXG5cdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0J2l0ZXJhdG9yJ1xuXHQpO1xuXG5cdGlmICghaXRlcmF0b3JNZXRob2QpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgT2JqZWN0IGRvZXMgbm90IGltcGxlbWVudCBJdGVyYWJsZSAobWlzc2luZyBpdGVyYXRvcigpKWAsIG5vZGUuaXRlcmFibGUuc3Bhbik7XG5cdH1cblxuXHRjb25zdCBpdGVyYXRvcjogYW55ID0gZXZhbEluc3RhbmNlQ2FsbChcblx0XHQoKCk6IEFTVENhbGxOb2RlID0+IHtcblx0XHRcdHJldHVybiBuZXcgQVNUQ2FsbE5vZGUobmV3IEFTVE1lbWJlck5vZGUobm9kZS5pdGVyYWJsZSwgJ2l0ZXJhdG9yJykpO1xuXHRcdH0pKCksXG5cdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0ZW52aXJvbm1lbnQsXG5cdFx0ZXZlbnRQaXBlbGluZSxcblx0XHR0aGlzVmFsdWVcblx0KTtcblxuXHRpZiAoIShpdGVyYXRvciBpbnN0YW5jZW9mIEluc3RhbmNlKSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBpdGVyYXRvcigpIG11c3QgcmV0dXJuIGFuIEl0ZXJhdG9yIG9iamVjdGAsIG5vZGUuaXRlcmFibGUuc3Bhbik7XG5cdH1cblxuXHRjYWxsSXRlcmF0b3JNZXRob2QoaXRlcmF0b3IsICdyZXdpbmQnLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXG5cdHdoaWxlIChjYWxsSXRlcmF0b3JNZXRob2QoaXRlcmF0b3IsICdoYXNOZXh0Jywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKSkge1xuXHRcdGNvbnN0IHZhbHVlID0gY2FsbEl0ZXJhdG9yTWV0aG9kKGl0ZXJhdG9yLCAnY3VycmVudCcsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG5cblx0XHRjb25zdCBsb29wRW52ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblxuXHRcdGxvb3BFbnYuZGVmaW5lKG5vZGUuaXRlcmF0b3IsIHZhbHVlKTtcblxuXHRcdGNvbnN0IHJlc3VsdCA9IGV2YWxCbG9jayhub2RlLmJvZHksIG9iamVjdFJlZ2lzdHJ5LCBsb29wRW52LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBSZXR1cm5WYWx1ZSkge1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cblx0XHRjYWxsSXRlcmF0b3JNZXRob2QoaXRlcmF0b3IsICduZXh0Jywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsbEl0ZXJhdG9yTWV0aG9kKGl0ZXJhdG9yOiBJbnN0YW5jZSwgbWV0aG9kTmFtZTogc3RyaW5nLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IGFueSB7XG5cdHJldHVybiBjYWxsSW5zdGFuY2VNZXRob2QoXG5cdFx0aXRlcmF0b3IsXG5cdFx0aXRlcmF0b3IuZmluZGVNZXRob2ROb2RlKG1ldGhvZE5hbWUpLFxuXHRcdFtdLFxuXHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdGVudmlyb25tZW50LFxuXHRcdGV2ZW50UGlwZWxpbmVcblx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxVbmFyeShub2RlOiBBU1RVbmFyeU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRjb25zdCB2YWx1ZSA9IGV2YWxFeHByZXNzaW9uKG5vZGUuYXJndW1lbnQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblxuXHRzd2l0Y2ggKG5vZGUub3BlcmF0b3IpIHtcblx0XHRjYXNlIEdSQU1NQVIuRVhDTEFNQVRJT05fTUFSSzpcblx0XHRcdHJldHVybiAhY2FzdFZhbHVlKHZhbHVlKTtcblx0fVxuXG5cdHRocm93UnVudGltZUVycm9yKGBVbnN1cHBvcnRlZCB1bmFyeSBvcGVyYXRvciAke25vZGUub3BlcmF0b3J9YCwgbm9kZS5zcGFuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxWRG9tTm9kZShub2RlOiBBU1RWRG9tTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IFZDaGlsZCB7XG5cdGNvbnN0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG5cblx0Zm9yIChjb25zdCBbbmFtZSwgdmFsdWVdIG9mIG5vZGUucHJvcHMpIHtcblx0XHRwcm9wc1tuYW1lXSA9IGV2YWxFeHByZXNzaW9uKHZhbHVlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdH1cblxuXHRjb25zdCBpc0NvbXBvbmVudCA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuaGFzKG5vZGUudGFnKTtcblxuXHRjb25zdCBjaGlsZHJlbjogVkNoaWxkW10gPSBbXTtcblx0bGV0IHRleHRCdWZmZXI6IHN0cmluZ1tdID0gW107XG5cblx0Y29uc3QgZmx1c2hUZXh0QnVmZmVyID0gKCkgPT4ge1xuXHRcdGlmICh0ZXh0QnVmZmVyLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjaGlsZHJlbi5wdXNoKHtcblx0XHRcdCAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuXHRcdFx0ICAgICAgICAgICAgICB2YWx1ZTogdGV4dEJ1ZmZlci5qb2luKCcnKSxcblx0XHRcdCAgICAgICAgICAgICAgZG9tOiB1bmRlZmluZWRcblx0XHQgICAgICAgICAgICAgIH0pO1xuXHRcdHRleHRCdWZmZXIgPSBbXTtcblx0fVxuXG5cblx0Zm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG5cdFx0aWYgKGNoaWxkIGluc3RhbmNlb2YgQVNUVkRvbVRleHROb2RlKSB7XG5cdFx0XHR0ZXh0QnVmZmVyLnB1c2goY2hpbGQudmFsdWUpO1xuXHRcdH0gZWxzZSBpZiAoY2hpbGQgaW5zdGFuY2VvZiBBU1RWRG9tTm9kZSkge1xuXHRcdFx0Y2hpbGRyZW4ucHVzaChldmFsVkRvbU5vZGUoY2hpbGQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKSBhcyBWQ2hpbGQpO1xuXHRcdH1cblxuXHRcdGZsdXNoVGV4dEJ1ZmZlcigpO1xuXHR9XG5cblx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cblx0aWYgKGlzQ29tcG9uZW50KSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdjb21wb25lbnQnLFxuXHRcdFx0Y2xhc3NOYW1lOiBub2RlLnRhZyxcblx0XHRcdHByb3BzOiB7Li4ucHJvcHMsIGNoaWxkcmVufSxcblx0XHRcdHN1YlRyZWU6IHVuZGVmaW5lZCxcblx0XHRcdGluc3RhbmNlOiB1bmRlZmluZWQsXG5cdFx0XHRkb206IHVuZGVmaW5lZFxuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdlbGVtZW50Jyxcblx0XHR0YWc6IG5vZGUudGFnLFxuXHRcdHByb3BzLFxuXHRcdGNoaWxkcmVuLFxuXHRcdGRvbTogdW5kZWZpbmVkXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsUmV0dXJuKGJsb2NrTm9kZXM6IEFTVE5vZGVbXSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCwgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGV2YWxCbG9jayhibG9ja05vZGVzLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSwgcmV0dXJuVHlwZSk7XG5cdH0gY2F0Y2ggKGV4ZWN1dGlvblN0b3ApIHtcblx0XHRpZiAoZXhlY3V0aW9uU3RvcCBpbnN0YW5jZW9mIEV4ZWN1dGlvblN0b3ApIHtcblx0XHRcdHJldHVybiBjYXN0VmFsdWUoZXhlY3V0aW9uU3RvcC5yZXR1cm5WYWx1ZS52YWx1ZSwgZXhlY3V0aW9uU3RvcC5yZXR1cm5UeXBlPy5uYW1lKTtcblx0XHR9XG5cdFx0dGhyb3cgZXhlY3V0aW9uU3RvcDtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEJsb2NrKGJsb2NrTm9kZXM6IEFTVE5vZGVbXSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCwgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGZvciAoY29uc3QgYmxvY2tOb2RlIG9mIGJsb2NrTm9kZXMpIHtcblx0XHRjb25zdCByZXR1cm5WYWx1ZTogYW55ID0gZXZhbE5vZGUoYmxvY2tOb2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0aWYgKHJldHVyblZhbHVlIGluc3RhbmNlb2YgUmV0dXJuVmFsdWUpIHtcblx0XHRcdHRocm93IG5ldyBFeGVjdXRpb25TdG9wKHJldHVyblZhbHVlLCByZXR1cm5UeXBlKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsQW5ub3RhdGlvblZhbHVlKG5vZGU6IEFTVE5vZGUpOiBhbnkge1xuXHRzd2l0Y2ggKG5vZGUudHlwZSkge1xuXHRcdGNhc2UgQVNUTm9kZVR5cGUuU1RSSU5HOlxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuTlVNQkVSOlxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuQk9PTEVBTjpcblx0XHRjYXNlIEFTVE5vZGVUeXBlLklERU5USUZJRVI6IHtcblx0XHRcdHJldHVybiBjYXN0VmFsdWUobm9kZS52YWx1ZSk7XG5cdFx0fVxuXG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5BUlJBWSA6IHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUQXJyYXlOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBub2RlLmVsZW1lbnRzLm1hcChjaGlsZCA9PiBldmFsQW5ub3RhdGlvblZhbHVlKGNoaWxkKSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBhbm5vdGF0aW9uIHByb3BlcnR5IHZhbHVlOiAke25vZGUudHlwZX1gLCBub2RlLnNwYW4pO1xuXHRcdH1cblxuXHRcdGRlZmF1bHQ6IHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBVbnN1cHBvcnRlZCBhbm5vdGF0aW9uIGV4cHJlc3Npb246ICR7bm9kZS50eXBlfWAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsQW5ub3RhdGlvblByb3BlcnRpZXMoYW5ub3RhdGlvbjogQVNUQW5ub3RhdGlvbk5vZGUpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcblx0Y29uc3QgcHJvcGVydGllczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuXG5cdGZvciAoY29uc3QgW2tleSwgdmFsdWVOb2RlXSBvZiBhbm5vdGF0aW9uLnByb3BlcnRpZXMpIHtcblx0XHRwcm9wZXJ0aWVzW2tleV0gPSBldmFsQW5ub3RhdGlvblZhbHVlKHZhbHVlTm9kZSk7XG5cdH1cblxuXHRyZXR1cm4gcHJvcGVydGllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGxJbnN0YW5jZU1ldGhvZChpbnN0YW5jZTogSW5zdGFuY2UsIG1ldGhvZE5vZGU6IEFTVE1ldGhvZE5vZGUsIGFyZ3M6IGFueVtdLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IGFueSB7XG5cdGNvbnN0IG1ldGhvZEVudiA9IG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCk7XG5cblx0bWV0aG9kRW52LmRlZmluZShHUkFNTUFSLlRISVMsIGluc3RhbmNlKTtcblxuXHRpZiAoaW5zdGFuY2UuX19uYXRpdmVJbnN0YW5jZSAmJiBtZXRob2ROb2RlLm5hbWUgaW4gaW5zdGFuY2UuX19uYXRpdmVJbnN0YW5jZSkge1xuXHRcdGNvbnN0IHJhd0FyZ3MgPSBhcmdzLm1hcChmcm9tTHlyYVZhbHVlKTtcblx0XHRjb25zdCByZXN1bHQgPSBpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlW21ldGhvZE5vZGUubmFtZV0oLi4ucmF3QXJncyk7XG5cblx0XHRpZiAocmVzdWx0IGluc3RhbmNlb2YgTHlyYU5hdGl2ZU9iamVjdCkge1xuXHRcdFx0cmV0dXJuIHdyYXBOYXRpdmVJbnN0YW5jZShyZXN1bHQsIG9iamVjdFJlZ2lzdHJ5KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZhbFJldHVybihcblx0XHRcdFtyZXR1cm5WYWx1ZShyZXN1bHQpXSxcblx0XHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0bWV0aG9kRW52LFxuXHRcdFx0ZXZlbnRQaXBlbGluZSxcblx0XHRcdGluc3RhbmNlLFxuXHRcdFx0bWV0aG9kTm9kZS5yZXR1cm5UeXBlXG5cdFx0KTtcblx0fVxuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbWV0aG9kTm9kZS5wYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgcGFyYW1ldGVyOiBBU1RQYXJhbWV0ZXJOb2RlIHwgbnVsbCA9IG1ldGhvZE5vZGUucGFyYW1ldGVyc1tpXSB8fCBudWxsO1xuXHRcdGNvbnN0IGFyZ3VtZW50OiBhbnkgPSBhcmdzW2ldIHx8IG51bGw7XG5cblx0XHRpZiAoIXBhcmFtZXRlcikge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoJ01ldGhvZCBwYXJhbWV0ZXIgaXMgbnVsbC4nKTtcblx0XHR9XG5cblx0XHRsZXQgdmFsdWU7XG5cdFx0aWYgKCFhcmd1bWVudCkge1xuXHRcdFx0dmFsdWUgPSBwYXJhbWV0ZXIuZGVmYXVsdFZhbHVlXG5cdFx0XHRcdD8gZXZhbE5vZGUocGFyYW1ldGVyLmRlZmF1bHRWYWx1ZSwgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgZXZlbnRQaXBlbGluZSwgaW5zdGFuY2UpXG5cdFx0XHRcdDogbnVsbDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFsdWUgPSBhcmdzW2ldO1xuXHRcdH1cblxuXHRcdG1ldGhvZEVudi5kZWZpbmUocGFyYW1ldGVyLm5hbWUsIHZhbHVlKTtcblx0fVxuXG5cdHJldHVybiBldmFsUmV0dXJuKG1ldGhvZE5vZGUuY2hpbGRyZW4sIG9iamVjdFJlZ2lzdHJ5LCBtZXRob2RFbnYsIGV2ZW50UGlwZWxpbmUsIGluc3RhbmNlLCBtZXRob2ROb2RlLnJldHVyblR5cGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b0JveElmTmVlZGVkKHZhbHVlOiBhbnksIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IEluc3RhbmNlIHtcblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgSW5zdGFuY2UpIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSBUWVBFX0VOVU0uTlVNQkVSKSB7XG5cdFx0cmV0dXJuIGNyZWF0ZUJveGVkSW5zdGFuY2UoQXV0b2JveGVkVHlwZXMuZ2V0Q2xhc3NOYW1lKFRZUEVfRU5VTS5OVU1CRVIpLCB2YWx1ZSwgb2JqZWN0UmVnaXN0cnkpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gVFlQRV9FTlVNLlNUUklORykge1xuXHRcdHJldHVybiBjcmVhdGVCb3hlZEluc3RhbmNlKEF1dG9ib3hlZFR5cGVzLmdldENsYXNzTmFtZShUWVBFX0VOVU0uU1RSSU5HKSwgdmFsdWUsIG9iamVjdFJlZ2lzdHJ5KTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09IFRZUEVfRU5VTS5CT09MRUFOKSB7XG5cdFx0cmV0dXJuIGNyZWF0ZUJveGVkSW5zdGFuY2UoQXV0b2JveGVkVHlwZXMuZ2V0Q2xhc3NOYW1lKFRZUEVfRU5VTS5CT09MRUFOKSwgdmFsdWUsIG9iamVjdFJlZ2lzdHJ5KTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJveGVkSW5zdGFuY2UoY2xhc3NOYW1lOiBzdHJpbmcsIHByaW1pdGl2ZVZhbHVlOiBhbnksIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IEluc3RhbmNlIHtcblx0Y29uc3QgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KGNsYXNzTmFtZSk7XG5cdGNvbnN0IGluc3RhbmNlOiBJbnN0YW5jZSA9IGNsYXNzRGVmLmNvbnN0cnVjdEVtcHR5SW5zdGFuY2UoKTtcblxuXHRpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlID0gbmV3IGNsYXNzRGVmLm5hdGl2ZUluc3RhbmNlKGZyb21MeXJhVmFsdWUocHJpbWl0aXZlVmFsdWUpKTtcblxuXHRyZXR1cm4gaW5zdGFuY2U7XG59XG4iLAogICAgImNvbnN0IEx5cmFFdmVudHMgPSB7XG5cdExZUkFfSU5TVEFOQ0VfRElSVFlfU1RBVEU6ICdseXJhOmluc3RhbmNlX2RpcnR5X3N0YXRlJyxcblx0TFlSQV9JTlNUQU5DRV9DTEVBTl9TVEFURTogJ2x5cmE6aW5zdGFuY2VfY2xlYW5fc3RhdGUnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMeXJhRXZlbnRzO1xuIiwKICAgICJpbXBvcnQge0dSQU1NQVJ9IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5pbXBvcnQge1xuXHRBU1RDbGFzc05vZGUsXG5cdEFTVEZpZWxkTm9kZSxcblx0QVNUSW50ZXJmYWNlTm9kZSxcblx0QVNUTWV0aG9kTm9kZSxcblx0QVNUTmV3Tm9kZSxcblx0QVNUTm9kZSxcblx0QVNUUGFyYW1ldGVyTm9kZSxcblx0QVNUVHlwZU5vZGVcbn0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHt0aHJvd1J1bnRpbWVFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuaW1wb3J0IHR5cGUge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuaW1wb3J0IHtldmFsRXhwcmVzc2lvbiwgZXZhbE1ldGhvZEFyZ3VtZW50cywgZXZhbE5vZGV9IGZyb20gXCIuL2ludGVycHJldGVyX3J1bnRpbWVcIjtcbmltcG9ydCB7Y2FzdFZhbHVlLCBmcm9tTHlyYVZhbHVlLCBMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQgdHlwZSB7RXZlbnRQaXBlbGluZX0gZnJvbSBcIi4uL2V2ZW50L3BpcGVsaW5lXCI7XG5pbXBvcnQgTHlyYUV2ZW50cyBmcm9tIFwiLi4vZXZlbnQvZXZlbnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCB7XG5cdHBhcmVudDogRW52aXJvbm1lbnQgfCBudWxsO1xuXHR2YWx1ZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfTtcblxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IEVudmlyb25tZW50IHwgbnVsbCA9IG51bGwpIHtcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcblx0XHR0aGlzLnZhbHVlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdH1cblxuXHRkZWZpbmUobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0dGhpcy52YWx1ZXNbbmFtZV0gPSB2YWx1ZTtcblx0fVxuXG5cdGdldChuYW1lOiBzdHJpbmcpOiBhbnkge1xuXHRcdGlmIChuYW1lIGluIHRoaXMudmFsdWVzKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZXNbbmFtZV07XG5cdFx0fVxuXHRcdGlmICh0aGlzLnBhcmVudCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucGFyZW50LmdldChuYW1lKTtcblx0XHR9XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVuZGVmaW5lZCB2YXJpYWJsZSAke25hbWV9YCk7XG5cdH1cblxuXHRzZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0aWYgKG5hbWUgaW4gdGhpcy52YWx1ZXMpIHtcblx0XHRcdHRoaXMudmFsdWVzW25hbWVdID0gdmFsdWU7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICh0aGlzLnBhcmVudCkge1xuXHRcdFx0dGhpcy5wYXJlbnQuc2V0KG5hbWUsIHZhbHVlKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVuZGVmaW5lZCB2YXJpYWJsZSAke25hbWV9YCk7XG5cdH1cblxuXHRoYXMobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzW25hbWVdIHx8ICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5oYXMobmFtZSkpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnN0YW5jZSB7XG5cdHB1YmxpYyByZWFkb25seSBpZDogc3RyaW5nO1xuXHRfX2NsYXNzRGVmOiBDbGFzc0RlZmluaXRpb247XG5cdF9fZmllbGRzSW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblx0X19pbnN0YW5jZUZpZWxkczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9O1xuXHRfX3N0YXRpY0ZpZWxkczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9O1xuXHRfX25hdGl2ZUluc3RhbmNlOiBhbnkgfCBudWxsID0gbnVsbDtcblx0X19pc0RpcnR5OiBib29sZWFuID0gZmFsc2VcblxuXHRjb25zdHJ1Y3RvcihjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uKSB7XG5cdFx0dGhpcy5fX2NsYXNzRGVmID0gY2xhc3NEZWY7XG5cdFx0dGhpcy5fX2luc3RhbmNlRmllbGRzID0ge307XG5cdFx0dGhpcy5fX3N0YXRpY0ZpZWxkcyA9IHt9O1xuXHRcdHRoaXMuX19uYXRpdmVJbnN0YW5jZSA9IG51bGw7XG5cblx0XHR0aGlzLmlkID0gSW5zdGFuY2UuZ2VuZXJhdGVJbnN0YW5jZVVVSUQoKTtcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIGdlbmVyYXRlSW5zdGFuY2VVVUlEKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHNlbGYuY3J5cHRvLnJhbmRvbVVVSUQoKTtcblx0fVxuXG5cdHB1YmxpYyBtYXJrRGlydHkoZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IHZvaWQge1xuXHRcdHRoaXMuX19pc0RpcnR5ID0gdHJ1ZTtcblxuXHRcdGV2ZW50UGlwZWxpbmUuZW1pdChMeXJhRXZlbnRzLkxZUkFfSU5TVEFOQ0VfRElSVFlfU1RBVEUsIHtpbnN0YW5jZTogdGhpc30pO1xuXHR9XG5cblx0cHVibGljIG1hcmtDbGVhbihldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogdm9pZCB7XG5cdFx0dGhpcy5fX2lzRGlydHkgPSBmYWxzZTtcblxuXHRcdGV2ZW50UGlwZWxpbmUuZW1pdChMeXJhRXZlbnRzLkxZUkFfSU5TVEFOQ0VfQ0xFQU5fU1RBVEUsIHtpbnN0YW5jZTogdGhpc30pO1xuXHR9XG5cblx0ZmluZGVNZXRob2ROb2RlKG5hbWU6IHN0cmluZyk6IEFTVE1ldGhvZE5vZGUge1xuXHRcdHJldHVybiB0aGlzLl9fY2xhc3NEZWYuZmluZE1ldGhvZE5vZGUobmFtZSk7XG5cdH1cblxuXHRoYXNQdWJsaWNQcm9wZXJ0eShuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX19jbGFzc0RlZi5maW5kSW5zdGFuY2VGaWVsZERlZmluaXRpb24obmFtZSkubW9kaWZpZXJzLnB1YmxpYztcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0c2V0UHVibGljUHJvcGVydHkobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55LCBleHBlY3RlZDogYW55ID0gbnVsbCk6IHZvaWQge1xuXHRcdGxldCBmaWVsZERlZmluaXRpb246IENsYXNzRmllbGREZWZpbml0aW9uID0gdGhpcy5fX2NsYXNzRGVmLmZpbmRJbnN0YW5jZUZpZWxkRGVmaW5pdGlvbihuYW1lKTtcblxuXHRcdGlmIChmaWVsZERlZmluaXRpb24ubW9kaWZpZXJzLnB1YmxpYykge1xuXHRcdFx0dGhpcy5fX2luc3RhbmNlRmllbGRzW25hbWVdID0gY2FzdFZhbHVlKHZhbHVlLCBleHBlY3RlZCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYEZpZWxkICR7bmFtZX0gaXMgbm90IHB1YmxpYy5gKTtcblx0fVxuXG5cdGluaXRpYWxpemVJbnN0YW5jZUZpZWxkcyhvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IHZvaWQge1xuXHRcdHRoaXMuX19jbGFzc0RlZi5pbml0aWFsaXplSW5zdGFuY2VGaWVsZHModGhpcywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTW9kaWZpZXJzIHtcblx0b3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuXHRwdWJsaWM6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXHRzdGF0aWM6IGJvb2xlYW4gPSBmYWxzZTtcblx0cmVhZG9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHQvKipcblx0ICogQHBhcmFtIHt7fX0gYXR0cmlidXRlc1xuXHQgKi9cblx0Y29uc3RydWN0b3IoYXR0cmlidXRlczogeyBbaW5kZXg6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9KSB7XG5cdFx0Zm9yIChsZXQgYXR0cmlidXRlIG9mIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpKSB7XG5cdFx0XHRpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShhdHRyaWJ1dGUpKSB7XG5cdFx0XHRcdGNvbnN0IG1vZGlmaWVyczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0gdGhpcztcblx0XHRcdFx0bW9kaWZpZXJzW2F0dHJpYnV0ZV0gPSBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTdXBlckNsYXNzIHtcblx0dHlwZTogc3RyaW5nO1xuXHRuYW1lOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IodHlwZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEV4ZWN1dGlvblN0b3AgZXh0ZW5kcyBFcnJvciB7XG5cdGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSByZXR1cm5WYWx1ZTogUmV0dXJuVmFsdWUsXG5cdCAgICAgICAgICAgIHB1YmxpYyByZWFkb25seSByZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGwpIHtcblx0XHRzdXBlcignRXhlY3V0aW9uIHN0b3BwZW5kIHdpdGggcmV0dXJuLicpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXR1cm5WYWx1ZSB7XG5cdHZhbHVlOiBhbnk7XG5cblx0Y29uc3RydWN0b3IodmFsdWU6IGFueSkge1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xhc3NGaWVsZERlZmluaXRpb24ge1xuXHRuYW1lOiBzdHJpbmc7XG5cdHR5cGU6IHN0cmluZyB8IG51bGw7XG5cdG1vZGlmaWVyczogTW9kaWZpZXJzO1xuXHRpbml0aWFsaXplcjogQVNUTm9kZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZTogc3RyaW5nIHwgbnVsbCwgbW9kaWZpZXJzOiBNb2RpZmllcnMsIGluaXRpYWxpemVyOiBBU1ROb2RlIHwgbnVsbCA9IG51bGwpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG5cdFx0dGhpcy5pbml0aWFsaXplciA9IGluaXRpYWxpemVyO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGFzc01ldGhvZERlZmluaXRpb24ge1xuXHRuYW1lOiBzdHJpbmc7XG5cdHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXTtcblx0cmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsO1xuXHRtb2RpZmllcnM6IE1vZGlmaWVycztcblx0Y2hpbGRyZW46IEFTVE5vZGVbXTtcblx0aXNDb25zdHJ1Y3RvcjogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSwgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsLCBtb2RpZmllcnM6IE1vZGlmaWVycywgY2hpbGRyZW46IEFTVE5vZGVbXSkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcblx0XHR0aGlzLnJldHVyblR5cGUgPSByZXR1cm5UeXBlO1xuXHRcdHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcblx0XHR0aGlzLmlzQ29uc3RydWN0b3IgPSBuYW1lID09PSBHUkFNTUFSLkNPTlNUUlVDVE9SO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGFzc0RlZmluaXRpb24ge1xuXHRub2RlOiBBU1RDbGFzc05vZGU7XG5cdG5hbWU6IHN0cmluZztcblx0c3VwZXJDbGFzczogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cdGluc3RhbmNlRmllbGRzOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbltdO1xuXHRpbnN0YW5jZU1ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfTtcblx0c3RhdGljRmllbGRzOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbltdO1xuXHRzdGF0aWNNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH07XG5cdGNvbnN0cnVjdG9yTWV0aG9kOiBDbGFzc01ldGhvZERlZmluaXRpb24gfCBudWxsID0gbnVsbDtcblx0bmF0aXZlSW5zdGFuY2U6IGFueSA9IG51bGw7XG5cdGlzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdGNsYXNzTm9kZTogQVNUQ2xhc3NOb2RlLFxuXHRcdHN1cGVyQ2xhc3M6IHN0cmluZyB8IG51bGwsXG5cdFx0bmFtZTogc3RyaW5nLFxuXHRcdGluc3RhbmNlRmllbGRzOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbltdLFxuXHRcdGluc3RhbmNlTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9LFxuXHRcdHN0YXRpY0ZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXSxcblx0XHRzdGF0aWNNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH0sXG5cdFx0Y29uc3RydWN0b3JNZXRob2Q6IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB8IG51bGwgPSBudWxsXG5cdCkge1xuXHRcdHRoaXMubm9kZSA9IGNsYXNzTm9kZTtcblx0XHR0aGlzLnN1cGVyQ2xhc3MgPSBzdXBlckNsYXNzO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5pbnN0YW5jZUZpZWxkcyA9IGluc3RhbmNlRmllbGRzO1xuXHRcdHRoaXMuaW5zdGFuY2VNZXRob2RzID0gaW5zdGFuY2VNZXRob2RzO1xuXHRcdHRoaXMuc3RhdGljRmllbGRzID0gc3RhdGljRmllbGRzO1xuXHRcdHRoaXMuc3RhdGljTWV0aG9kcyA9IHN0YXRpY01ldGhvZHM7XG5cdFx0dGhpcy5jb25zdHJ1Y3Rvck1ldGhvZCA9IGNvbnN0cnVjdG9yTWV0aG9kO1xuXHRcdHRoaXMuaXNPcGVuID0gY2xhc3NOb2RlLm1vZGlmaWVycy5vcGVuO1xuXHR9XG5cblx0c3RhdGljIGZyb21BU1Qobm9kZTogQVNUQ2xhc3NOb2RlKTogQ2xhc3NEZWZpbml0aW9uIHtcblx0XHRjb25zdCBpbnN0YW5jZUZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXSA9IFtdO1xuXHRcdGNvbnN0IGluc3RhbmNlTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9ID0ge307XG5cdFx0Y29uc3Qgc3RhdGljRmllbGRzOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbltdID0gW107XG5cdFx0Y29uc3Qgc3RhdGljTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9ID0ge307XG5cdFx0bGV0IGNvbnN0cnVjdG9yTWV0aG9kOiBDbGFzc01ldGhvZERlZmluaXRpb24gfCBudWxsID0gbnVsbDtcblxuXHRcdGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuXHRcdFx0aWYgKGNoaWxkIGluc3RhbmNlb2YgQVNURmllbGROb2RlKSB7XG5cdFx0XHRcdGNvbnN0IGZpZWxkID0gbmV3IENsYXNzRmllbGREZWZpbml0aW9uKFxuXHRcdFx0XHRcdGNoaWxkLm5hbWUsXG5cdFx0XHRcdFx0Y2hpbGQuZmllbGRUeXBlXG5cdFx0XHRcdFx0XHQ/IGNoaWxkLmZpZWxkVHlwZS5uYW1lXG5cdFx0XHRcdFx0XHQ6IG51bGwsXG5cdFx0XHRcdFx0Y2hpbGQubW9kaWZpZXJzLFxuXHRcdFx0XHRcdGNoaWxkLmluaXRcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRpZiAoZmllbGQubW9kaWZpZXJzLnN0YXRpYykge1xuXHRcdFx0XHRcdHN0YXRpY0ZpZWxkcy5wdXNoKGZpZWxkKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpbnN0YW5jZUZpZWxkcy5wdXNoKGZpZWxkKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChjaGlsZCBpbnN0YW5jZW9mIEFTVE1ldGhvZE5vZGUpIHtcblx0XHRcdFx0Y29uc3QgbWV0aG9kID0gbmV3IENsYXNzTWV0aG9kRGVmaW5pdGlvbihcblx0XHRcdFx0XHRjaGlsZC5uYW1lLFxuXHRcdFx0XHRcdGNoaWxkLnBhcmFtZXRlcnMsXG5cdFx0XHRcdFx0Y2hpbGQucmV0dXJuVHlwZSxcblx0XHRcdFx0XHRjaGlsZC5tb2RpZmllcnMsXG5cdFx0XHRcdFx0Y2hpbGQuY2hpbGRyZW5cblx0XHRcdFx0KTtcblx0XHRcdFx0aWYgKG1ldGhvZC5pc0NvbnN0cnVjdG9yKSB7XG5cdFx0XHRcdFx0Y29uc3RydWN0b3JNZXRob2QgPSBtZXRob2Q7XG5cdFx0XHRcdH0gZWxzZSBpZiAobWV0aG9kLm1vZGlmaWVycy5zdGF0aWMpIHtcblx0XHRcdFx0XHRzdGF0aWNNZXRob2RzW21ldGhvZC5uYW1lXSA9IG1ldGhvZDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpbnN0YW5jZU1ldGhvZHNbbWV0aG9kLm5hbWVdID0gbWV0aG9kO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5oYW5kbGVkIG5vZGUgJHtjaGlsZC50eXBlfS5gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IENsYXNzRGVmaW5pdGlvbihcblx0XHRcdG5vZGUsXG5cdFx0XHRub2RlLnN1cGVyQ2xhc3M/Lm5hbWUgfHwgbnVsbCxcblx0XHRcdG5vZGUubmFtZSxcblx0XHRcdGluc3RhbmNlRmllbGRzLFxuXHRcdFx0aW5zdGFuY2VNZXRob2RzLFxuXHRcdFx0c3RhdGljRmllbGRzLFxuXHRcdFx0c3RhdGljTWV0aG9kcyxcblx0XHRcdGNvbnN0cnVjdG9yTWV0aG9kXG5cdFx0KTtcblx0fVxuXG5cdGZpbmRNZXRob2ROb2RlKG5hbWU6IHN0cmluZyk6IEFTVE1ldGhvZE5vZGUge1xuXHRcdGNvbnN0IG5vZGUgPSB0aGlzLm5vZGVcblx0XHQgICAgICAgICAgICAgICAgIC5jaGlsZHJlblxuXHRcdCAgICAgICAgICAgICAgICAgLmZpbmQobm9kZSA9PiBub2RlLm5hbWUgPT09IG5hbWUpO1xuXG5cdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RNZXRob2ROb2RlKSB7XG5cdFx0XHRyZXR1cm4gbm9kZTtcblx0XHR9XG5cblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgTWV0aG9kICR7bmFtZX0gbm90IGZvdW5kIGluIGNsYXNzICR7dGhpcy5uYW1lfS5gKTtcblx0fVxuXG5cdGZpbmRJbnN0YW5jZUZpZWxkRGVmaW5pdGlvbihuYW1lOiBzdHJpbmcpOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbiB7XG5cdFx0Y29uc3QgZmllbGREZWZpbml0aW9uOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbiB8IHVuZGVmaW5lZCA9IHRoaXMuaW5zdGFuY2VGaWVsZHNcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKChmaWVsZDogQ2xhc3NGaWVsZERlZmluaXRpb24pOiBib29sZWFuID0+IGZpZWxkLm5hbWUgPT09IG5hbWUpO1xuXG5cdFx0aWYgKGZpZWxkRGVmaW5pdGlvbiBpbnN0YW5jZW9mIENsYXNzRmllbGREZWZpbml0aW9uKSB7XG5cdFx0XHRyZXR1cm4gZmllbGREZWZpbml0aW9uO1xuXHRcdH1cblxuXHRcdHRocm93UnVudGltZUVycm9yKGBGaWVsZCAke25hbWV9IG5vdCBmb3VuZCBpbiBjbGFzcyAke3RoaXMubmFtZX0uYCk7XG5cdH1cblxuXHRjb25zdHJ1Y3RFbXB0eUluc3RhbmNlKCk6IEluc3RhbmNlIHtcblx0XHRyZXR1cm4gbmV3IEluc3RhbmNlKHRoaXMpO1xuXHR9XG5cblx0Y29uc3RydWN0TmF0aXZlSW5zdGFuY2UoYXJnczogYW55W10gPSBbXSk6IEluc3RhbmNlIHtcblx0XHRjb25zdCBpbnN0YW5jZTogSW5zdGFuY2UgPSB0aGlzLmNvbnN0cnVjdEVtcHR5SW5zdGFuY2UoKTtcblx0XHRpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlID0gbmV3IHRoaXMubmF0aXZlSW5zdGFuY2UoLi4uYXJncyk7XG5cdFx0cmV0dXJuIGluc3RhbmNlO1xuXHR9XG5cblx0Y29uc3RydWN0TmV3SW5zdGFuY2VXaXRob3V0QXJndW1lbnRzKG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogSW5zdGFuY2Uge1xuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdE5ld0luc3RhbmNlKFtdLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXHR9XG5cblx0Y29uc3RydWN0TmV3SW5zdGFuY2UoYXJnczogQVNUTm9kZVtdLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IEluc3RhbmNlIHtcblx0XHRjb25zdCBuZXdOb2RlID0gbmV3IEFTVE5ld05vZGUoYXJncywgbmV3IEFTVFR5cGVOb2RlKEFTVFR5cGVOb2RlLktJTkRfU0lNUExFLCB0aGlzLm5hbWUpKTtcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3RJbnN0YW5jZUJ5TmV3Tm9kZShuZXdOb2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXHR9XG5cblx0Y29uc3RydWN0SW5zdGFuY2VCeU5ld05vZGUoZXhwcjogQVNUTmV3Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiBJbnN0YW5jZSB7XG5cdFx0Y29uc3QgaW5zdGFuY2U6IEluc3RhbmNlID0gdGhpcy5jb25zdHJ1Y3RFbXB0eUluc3RhbmNlKCk7XG5cblx0XHRvYmplY3RSZWdpc3RyeS5pbnN0YW5jZXMucmVnaXN0ZXIoaW5zdGFuY2UpO1xuXG5cdFx0aW5zdGFuY2UuaW5pdGlhbGl6ZUluc3RhbmNlRmllbGRzKG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG5cblx0XHRpZiAoIXRoaXMuY29uc3RydWN0b3JNZXRob2QpIHtcblx0XHRcdHJldHVybiBpbnN0YW5jZTtcblx0XHR9XG5cblx0XHRjb25zdCBjb25zdHJ1Y3RvcjogQ2xhc3NNZXRob2REZWZpbml0aW9uID0gdGhpcy5jb25zdHJ1Y3Rvck1ldGhvZDtcblx0XHRjb25zdCBjb25zdHJ1Y3RvckVudiA9IG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCk7XG5cblx0XHRjb25zdCBjb25zdHJ1Y3RvckFyZ3MgPSBldmFsTWV0aG9kQXJndW1lbnRzKFxuXHRcdFx0ZXhwcixcblx0XHRcdGNvbnN0cnVjdG9yLnBhcmFtZXRlcnMsXG5cdFx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRcdGVudmlyb25tZW50LFxuXHRcdFx0ZXZlbnRQaXBlbGluZSxcblx0XHRcdGluc3RhbmNlXG5cdFx0KTtcblxuXHRcdGNvbnN0cnVjdG9yRW52LmRlZmluZShHUkFNTUFSLlRISVMsIGluc3RhbmNlKTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY29uc3RydWN0b3JBcmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBwYXJhbWV0ZXI6IEFTVFBhcmFtZXRlck5vZGUgfCB1bmRlZmluZWQgPSBjb25zdHJ1Y3Rvci5wYXJhbWV0ZXJzW2ldO1xuXHRcdFx0aWYgKHBhcmFtZXRlcikge1xuXHRcdFx0XHRjb25zdHJ1Y3RvckVudi5kZWZpbmUocGFyYW1ldGVyLm5hbWUsIGNvbnN0cnVjdG9yQXJnc1tpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiBjb25zdHJ1Y3Rvci5jaGlsZHJlbikge1xuXHRcdFx0ZXZhbE5vZGUoY2hpbGQsIG9iamVjdFJlZ2lzdHJ5LCBjb25zdHJ1Y3RvckVudiwgZXZlbnRQaXBlbGluZSwgaW5zdGFuY2UpO1xuXHRcdH1cblxuXHRcdHJldHVybiBpbnN0YW5jZTtcblx0fVxuXG5cdGNvbnN0cnVjdE5hdGl2ZUluc3RhbmNlQnlOZXdOb2RlKGV4cHI6IEFTVE5ld05vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogSW5zdGFuY2Uge1xuXHRcdGNvbnN0IGluc3RhbmNlOiBJbnN0YW5jZSA9IHRoaXMuY29uc3RydWN0RW1wdHlJbnN0YW5jZSgpO1xuXG5cdFx0b2JqZWN0UmVnaXN0cnkuaW5zdGFuY2VzLnJlZ2lzdGVyKGluc3RhbmNlKTtcblxuXHRcdGNvbnN0IGNvbnN0cnVjdG9yOiBDbGFzc01ldGhvZERlZmluaXRpb24gfCBudWxsID0gdGhpcy5jb25zdHJ1Y3Rvck1ldGhvZDtcblx0XHRjb25zdCBjb25zdHJ1Y3RvckVudjogRW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpO1xuXG5cdFx0Y29uc3QgY29uc3RydWN0b3JBcmdzOiBhbnlbXSA9IGV2YWxNZXRob2RBcmd1bWVudHMoXG5cdFx0XHRleHByLFxuXHRcdFx0Y29uc3RydWN0b3Jcblx0XHRcdFx0PyBjb25zdHJ1Y3Rvci5wYXJhbWV0ZXJzXG5cdFx0XHRcdDogW10sXG5cdFx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRcdGVudmlyb25tZW50LFxuXHRcdFx0ZXZlbnRQaXBlbGluZSxcblx0XHRcdGluc3RhbmNlXG5cdFx0KTtcblxuXHRcdGNvbnN0cnVjdG9yRW52LmRlZmluZShHUkFNTUFSLlRISVMsIGluc3RhbmNlKTtcblxuXHRcdGlmICh0aGlzLm5hdGl2ZUluc3RhbmNlID09PSBudWxsKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcignQ2xhc3MgaGFzIG5vIG5hdGl2ZSBpbnN0YW5jZScpO1xuXHRcdH1cblxuXHRcdGNvbnN0IG5hdGl2ZUluc3RhbmNlID0gbmV3IHRoaXMubmF0aXZlSW5zdGFuY2UoLi4uY29uc3RydWN0b3JBcmdzLm1hcChmcm9tTHlyYVZhbHVlKSk7XG5cdFx0aWYgKG5hdGl2ZUluc3RhbmNlIGluc3RhbmNlb2YgTHlyYU5hdGl2ZU9iamVjdCkge1xuXHRcdFx0aW5zdGFuY2UuX19uYXRpdmVJbnN0YW5jZSA9IG5hdGl2ZUluc3RhbmNlO1xuXHRcdH1cblxuXHRcdHJldHVybiBpbnN0YW5jZTtcblx0fVxuXG5cdGluaXRpYWxpemVJbnN0YW5jZUZpZWxkcyhpbnN0YW5jZTogSW5zdGFuY2UsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogdm9pZCB7XG5cdFx0aWYgKGluc3RhbmNlLl9fZmllbGRzSW5pdGlhbGl6ZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgcmF3VmFsdWU7XG5cdFx0Zm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLmluc3RhbmNlRmllbGRzKSB7XG5cdFx0XHRyYXdWYWx1ZSA9IGZpZWxkLmluaXRpYWxpemVyXG5cdFx0XHRcdD8gZXZhbEV4cHJlc3Npb24oZmllbGQuaW5pdGlhbGl6ZXIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSlcblx0XHRcdFx0OiBudWxsO1xuXG5cdFx0XHRpbnN0YW5jZS5fX2luc3RhbmNlRmllbGRzW2ZpZWxkLm5hbWVdID0gY2FzdFZhbHVlKHJhd1ZhbHVlLCBmaWVsZC50eXBlKTtcblx0XHR9XG5cdFx0Zm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLnN0YXRpY0ZpZWxkcykge1xuXHRcdFx0cmF3VmFsdWUgPSBmaWVsZC5pbml0aWFsaXplclxuXHRcdFx0XHQ/IGV2YWxFeHByZXNzaW9uKGZpZWxkLmluaXRpYWxpemVyLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpXG5cdFx0XHRcdDogbnVsbDtcblxuXHRcdFx0aW5zdGFuY2UuX19zdGF0aWNGaWVsZHNbZmllbGQubmFtZV0gPSBjYXN0VmFsdWUocmF3VmFsdWUsIGZpZWxkLnR5cGUpO1xuXHRcdH1cblxuXHRcdGluc3RhbmNlLl9fZmllbGRzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2VEZWZpbml0aW9uIHtcblx0bm9kZTogQVNUSW50ZXJmYWNlTm9kZTtcblx0bmFtZTogc3RyaW5nO1xuXHRzdGF0aWNGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW107XG5cdGluc3RhbmNlTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdGludGVyZmFjZU5vZGU6IEFTVEludGVyZmFjZU5vZGUsXG5cdFx0bmFtZTogc3RyaW5nLFxuXHRcdHN0YXRpY0ZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXSxcblx0XHRpbnN0YW5jZU1ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfSxcblx0KSB7XG5cdFx0dGhpcy5ub2RlID0gaW50ZXJmYWNlTm9kZTtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuc3RhdGljRmllbGRzID0gc3RhdGljRmllbGRzO1xuXHRcdHRoaXMuaW5zdGFuY2VNZXRob2RzID0gaW5zdGFuY2VNZXRob2RzO1xuXHR9XG5cblx0c3RhdGljIGZyb21BU1Qobm9kZTogQVNUSW50ZXJmYWNlTm9kZSk6IEludGVyZmFjZURlZmluaXRpb24ge1xuXHRcdGNvbnN0IHN0YXRpY0ZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXSA9IFtdO1xuXHRcdGNvbnN0IGluc3RhbmNlTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9ID0ge307XG5cblx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChjaGlsZCBpbnN0YW5jZW9mIEFTVEZpZWxkTm9kZSkge1xuXHRcdFx0XHRjb25zdCBmaWVsZCA9IG5ldyBDbGFzc0ZpZWxkRGVmaW5pdGlvbihcblx0XHRcdFx0XHRjaGlsZC5uYW1lLFxuXHRcdFx0XHRcdGNoaWxkLmZpZWxkVHlwZVxuXHRcdFx0XHRcdFx0PyBjaGlsZC5maWVsZFR5cGUubmFtZVxuXHRcdFx0XHRcdFx0OiBudWxsLFxuXHRcdFx0XHRcdGNoaWxkLm1vZGlmaWVycyxcblx0XHRcdFx0XHRjaGlsZC5pbml0ID8/IG51bGxcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRzdGF0aWNGaWVsZHMucHVzaChmaWVsZCk7XG5cdFx0XHR9IGVsc2UgaWYgKGNoaWxkIGluc3RhbmNlb2YgQVNUTWV0aG9kTm9kZSkge1xuXHRcdFx0XHRjb25zdCBtZXRob2QgPSBuZXcgQ2xhc3NNZXRob2REZWZpbml0aW9uKFxuXHRcdFx0XHRcdGNoaWxkLm5hbWUsXG5cdFx0XHRcdFx0Y2hpbGQucGFyYW1ldGVycyxcblx0XHRcdFx0XHRjaGlsZC5yZXR1cm5UeXBlLFxuXHRcdFx0XHRcdGNoaWxkLm1vZGlmaWVycyxcblx0XHRcdFx0XHRjaGlsZC5jaGlsZHJlblxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdGluc3RhbmNlTWV0aG9kc1ttZXRob2QubmFtZV0gPSBtZXRob2Q7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5oYW5kbGVkIG5vZGUgJHtjaGlsZC50eXBlfS5gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IEludGVyZmFjZURlZmluaXRpb24oXG5cdFx0XHRub2RlLFxuXHRcdFx0bm9kZS5uYW1lLFxuXHRcdFx0c3RhdGljRmllbGRzLFxuXHRcdFx0aW5zdGFuY2VNZXRob2RzXG5cdFx0KTtcblx0fVxufVxuXG4iLAogICAgImltcG9ydCB7UGFyc2VyfSBmcm9tIFwiLi9wYXJzZXJcIjtcbmltcG9ydCB7R1JBTU1BUiwgVG9rZW4sIFRva2VuVHlwZSwgVFlQRV9FTlVNfSBmcm9tIFwiLi4vZ3JhbW1hclwiO1xuaW1wb3J0IHtNb2RpZmllcnMsIFN1cGVyQ2xhc3N9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge1xuXHRBU1RBbm5vdGF0aW9uTm9kZSxcblx0QVNUQXJyYXlOb2RlLFxuXHRBU1RBc3NpZ25tZW50Tm9kZSxcblx0QVNUQmluYXJ5Tm9kZSxcblx0QVNUQ2FsbE5vZGUsXG5cdEFTVENsYXNzTm9kZSxcblx0QVNURWxzZU5vZGUsXG5cdEFTVEV4cHJlc3Npb25Ob2RlLFxuXHRBU1RGaWVsZE5vZGUsXG5cdEFTVEZvcmVhY2hOb2RlLFxuXHRBU1RJZk5vZGUsXG5cdEFTVEltcG9ydE5vZGUsXG5cdEFTVEluZGV4Tm9kZSxcblx0QVNUSW50ZXJmYWNlTm9kZSxcblx0QVNUTGFtYmRhTm9kZSxcblx0QVNUTWF0Y2hDYXNlTm9kZSxcblx0QVNUTWF0Y2hOb2RlLFxuXHRBU1RNZW1iZXJOb2RlLFxuXHRBU1RNZXRob2ROb2RlLFxuXHRBU1ROZXdOb2RlLFxuXHRBU1ROb2RlLFxuXHRBU1ROb2RlVHlwZSxcblx0QVNUUGFyYW1ldGVyTm9kZSxcblx0QVNUUmV0dXJuTm9kZSxcblx0QVNUVGhlbk5vZGUsXG5cdEFTVFR5cGVOb2RlLFxuXHRBU1RVbmFyeU5vZGUsXG5cdEFTVFZhcmlhYmxlTm9kZSxcblx0QVNUVkRvbU5vZGUsXG5cdEFTVFZEb21UZXh0Tm9kZVxufSBmcm9tIFwiLi4vYXN0XCI7XG5pbXBvcnQge3Rocm93UGFyc2VyRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcbmltcG9ydCB7c3BhbkZyb219IGZyb20gXCIuL3BhcnNlcl9zb3VyY2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1peGVkVHlwZSgpOiBBU1RUeXBlTm9kZSB7XG5cdHJldHVybiBuZXcgQVNUVHlwZU5vZGUoQVNUVHlwZU5vZGUuS0lORF9TSU1QTEUsIFRZUEVfRU5VTS5NSVhFRCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVR5cGUocGFyc2VyOiBQYXJzZXIpOiBBU1RUeXBlTm9kZSB7XG5cdGxldCB0eXBlO1xuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pIHtcblx0XHR0eXBlID0gcGFyc2VMYW1iZGFUeXBlKHBhcnNlcik7XG5cdH0gZWxzZSB7XG5cdFx0dHlwZSA9IHBhcnNlU2ltcGxlT3JHZW5lcmljVHlwZShwYXJzZXIpO1xuXHR9XG5cblx0aWYgKHBhcnNlci5jb25zdW1lSWZPcGVyYXRvcihHUkFNTUFSLlFVRVNUSU9OX01BUkspKSB7XG5cdFx0dHlwZS5udWxsYWJsZSA9IHRydWU7XG5cdH1cblxuXHRyZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVHlwZVBhcmFtZXRlcnMocGFyc2VyOiBQYXJzZXIpOiBzdHJpbmdbXSB7XG5cdGNvbnN0IHBhcmFtZXRlcnMgPSBbXTtcblxuXHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5MRVNTX1RIQU4pO1xuXG5cdGRvIHtcblx0XHRjb25zdCBuYW1lID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKS52YWx1ZTtcblx0XHRwYXJhbWV0ZXJzLnB1c2gobmFtZSk7XG5cblx0XHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5DT01NQSkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHBhcnNlci5uZXh0KCk7XG5cdH0gd2hpbGUgKHRydWUpO1xuXG5cdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkdSRUFURVJfVEhBTik7XG5cblx0cmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVNpbXBsZU9yR2VuZXJpY1R5cGUocGFyc2VyOiBQYXJzZXIpOiBBU1RUeXBlTm9kZSB7XG5cdGNvbnN0IG5hbWVUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUVHlwZU5vZGUoQVNUVHlwZU5vZGUuS0lORF9TSU1QTEUsIG5hbWVUb2tlbi52YWx1ZSk7XG5cblx0aWYgKHBhcnNlci5jb25zdW1lSWZPcGVyYXRvcihHUkFNTUFSLkxFU1NfVEhBTikpIHtcblxuXHRcdG5vZGUua2luZCA9IEFTVFR5cGVOb2RlLktJTkRfR0VORVJJQztcblxuXHRcdGRvIHtcblx0XHRcdG5vZGUudHlwZUFyZ3VtZW50cy5wdXNoKHBhcnNlVHlwZShwYXJzZXIpKTtcblx0XHR9IHdoaWxlIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpO1xuXG5cdFx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuR1JFQVRFUl9USEFOKTtcblx0fVxuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VMYW1iZGFUeXBlKHBhcnNlcjogUGFyc2VyKTogQVNUVHlwZU5vZGUge1xuXHRjb25zdCBub2RlID0gbmV3IEFTVFR5cGVOb2RlKEFTVFR5cGVOb2RlLktJTkRfTEFNQkRBLCAnbGFtYmRhJyk7XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTik7XG5cblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpIHtcblx0XHRkbyB7XG5cdFx0XHRub2RlLnBhcmFtZXRlclR5cGVzLnB1c2gocGFyc2VUeXBlKHBhcnNlcikpO1xuXHRcdH0gd2hpbGUgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSk7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkFSUk9XKTtcblxuXHRub2RlLnJldHVyblR5cGUgPSBwYXJzZVR5cGUocGFyc2VyKTtcblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUHJvZ3JhbShwYXJzZXI6IFBhcnNlcik6IEFTVE5vZGUge1xuXHRjb25zdCBjaGlsZHJlbjogQVNUTm9kZVtdID0gW107XG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnR5cGUgIT09IFRva2VuVHlwZS5FT0YpIHtcblx0XHRpZiAocGFyc2VyLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuQ09NTUVOVCkge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3Qgbm9kZTogQVNUTm9kZSB8IG51bGwgPSBwYXJzZVN0YXRlbWVudChwYXJzZXIpO1xuXHRcdFx0aWYgKG5vZGUpIHtcblx0XHRcdFx0Y2hpbGRyZW4ucHVzaChub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLlBST0dSQU1NLCBjaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVN0YXRlbWVudChwYXJzZXI6IFBhcnNlcik6IEFTVE5vZGUgfCBudWxsIHtcblx0aWYgKHBhcnNlci5jb25zdW1lSWZDb21tZW50KCkpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHN3aXRjaCAocGFyc2VyLnBlZWsoKS52YWx1ZSkge1xuXHRcdGNhc2UgR1JBTU1BUi5JTVBPUlQ6IHtcblx0XHRcdHJldHVybiBwYXJzZUltcG9ydChwYXJzZXIpO1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuT1BFTjpcblx0XHRjYXNlIEdSQU1NQVIuQ0xBU1M6IHtcblx0XHRcdHJldHVybiBwYXJzZUNsYXNzRGVjbGFyYXRpb24ocGFyc2VyKTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLklOVEVSRkFDRToge1xuXHRcdFx0cmV0dXJuIHBhcnNlSW50ZXJmYWNlRGVjbGFyYXRpb24ocGFyc2VyKTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLlJFVFVSTjoge1xuXHRcdFx0cmV0dXJuIHBhcnNlUmV0dXJuU3RhdGVtZW50KHBhcnNlcik7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5MRVQ6IHtcblx0XHRcdHJldHVybiBwYXJzZVZhcmlhYmxlRGVjbGFyYXRpb24ocGFyc2VyKTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLklGOiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VJZkRlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5NQVRDSDoge1xuXHRcdFx0cmV0dXJuIHBhcnNlTWF0Y2hEZWNsYXJhdGlvbihwYXJzZXIpO1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuRk9SRUFDSDoge1xuXHRcdFx0cmV0dXJuIHBhcnNlRm9yZWFjaERlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0fVxuXHRcdGRlZmF1bHQ6IHtcblx0XHRcdHJldHVybiBwYXJzZUV4cHJlc3Npb25TdGF0ZW1lbnQocGFyc2VyKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmV0dXJuU3RhdGVtZW50KHBhcnNlcjogUGFyc2VyKTogQVNUUmV0dXJuTm9kZSB7XG5cdHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuUkVUVVJOKTtcblxuXHRsZXQgYXJndW1lbnQgPSBudWxsO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5TRU1JQ09MT04pIHtcblx0XHRhcmd1bWVudCA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuU0VNSUNPTE9OKTtcblxuXHRyZXR1cm4gbmV3IEFTVFJldHVybk5vZGUoYXJndW1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJbXBvcnQocGFyc2VyOiBQYXJzZXIpOiBBU1RJbXBvcnROb2RlIHtcblx0cGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5JTVBPUlQpO1xuXG5cdGxldCBuYW1lcyA9IFtdO1xuXHRsZXQgZnJvbSA9IG51bGw7XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkJSQUNFX09QRU4pIHtcblx0XHRuYW1lcyA9IHBhcnNlSW1wb3J0TGlzdChwYXJzZXIpO1xuXHRcdHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuRlJPTSk7XG5cdFx0ZnJvbSA9IHBhcnNlci5leHBlY3RTdHJpbmcoKS52YWx1ZTtcblx0fSBlbHNlIHtcblx0XHRuYW1lcy5wdXNoKHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCkudmFsdWUpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuU0VNSUNPTE9OKTtcblxuXHRyZXR1cm4gbmV3IEFTVEltcG9ydE5vZGUobmFtZXMsIGZyb20pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJbXBvcnRMaXN0KHBhcnNlcjogUGFyc2VyKTogc3RyaW5nW10ge1xuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9PUEVOKTtcblxuXHRjb25zdCBuYW1lczogc3RyaW5nW10gPSBbXTtcblxuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdGNvbnN0IG5hbWVUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cblx0XHRuYW1lcy5wdXNoKG5hbWVUb2tlbi52YWx1ZSk7XG5cblx0XHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRicmVhaztcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX0NMT1NFKTtcblxuXHRyZXR1cm4gbmFtZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNsYXNzRGVjbGFyYXRpb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RDbGFzc05vZGUge1xuXHRjb25zdCBhbm5vdGF0aW9ucyA9IHBhcnNlQW5ub3RhdGlvbnMocGFyc2VyKTtcblx0Y29uc3QgbW9kaWZpZXJzID0gcGFyc2VNb2RpZmllcnMocGFyc2VyLCBbR1JBTU1BUi5PUEVOXSk7XG5cblx0Y29uc3QgY2xhc3NUb2tlbiA9IHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuQ0xBU1MpO1xuXHRjb25zdCBuYW1lVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXG5cdGxldCB0eXBlUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuTEVTU19USEFOKSB7XG5cdFx0dHlwZVBhcmFtZXRlcnMgPSBwYXJzZVR5cGVQYXJhbWV0ZXJzKHBhcnNlcik7XG5cdH1cblxuXHRsZXQgc3VwZXJDbGFzcyA9IG51bGw7XG5cdGlmIChwYXJzZXIuY29uc3VtZUlmS2V5d29yZChHUkFNTUFSLkVYVEVORFMpKSB7XG5cdFx0c3VwZXJDbGFzcyA9IG5ldyBTdXBlckNsYXNzKFxuXHRcdFx0QVNUTm9kZVR5cGUuSURFTlRJRklFUixcblx0XHRcdHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCkudmFsdWVcblx0XHQpO1xuXHR9XG5cblx0bGV0IGltcGxlbWVudHNJbnRlcmZhY2VzID0gW107XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLklNUExFTUVOVFMpIHtcblx0XHRwYXJzZXIubmV4dCgpO1xuXG5cdFx0ZG8ge1xuXHRcdFx0Y29uc3QgaW50ZXJmYWNlVHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHRcdFx0aW1wbGVtZW50c0ludGVyZmFjZXMucHVzaChpbnRlcmZhY2VUeXBlKTtcblx0XHR9IHdoaWxlIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfT1BFTik7XG5cblx0Y29uc3QgY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdO1xuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5CUkFDRV9DTE9TRSkge1xuXHRcdGlmIChwYXJzZXIucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5DT01NRU5UKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbWVtYmVyOiBBU1ROb2RlIHwgbnVsbCA9IHBhcnNlQ2xhc3NNZW1iZXIocGFyc2VyKTtcblx0XHRpZiAobWVtYmVyID09PSBudWxsKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y2hpbGRyZW4ucHVzaChtZW1iZXIpO1xuXHR9XG5cblx0Y29uc3QgYnJhY2VDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfQ0xPU0UpO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUQ2xhc3NOb2RlKFxuXHRcdG5hbWVUb2tlbi52YWx1ZSxcblx0XHRhbm5vdGF0aW9ucyxcblx0XHRtb2RpZmllcnMsXG5cdFx0dHlwZVBhcmFtZXRlcnMsXG5cdFx0aW1wbGVtZW50c0ludGVyZmFjZXMsXG5cdFx0c3VwZXJDbGFzcyxcblx0XHRjaGlsZHJlblxuXHQpO1xuXG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKGNsYXNzVG9rZW4sIGJyYWNlQ2xvc2VUb2tlbik7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJbnRlcmZhY2VEZWNsYXJhdGlvbihwYXJzZXI6IFBhcnNlcik6IEFTVEludGVyZmFjZU5vZGUge1xuXHRjb25zdCBhbm5vdGF0aW9ucyA9IHBhcnNlQW5ub3RhdGlvbnMocGFyc2VyKTtcblx0Y29uc3QgbW9kaWZpZXJzID0gcGFyc2VNb2RpZmllcnMocGFyc2VyLCBbXSk7IC8vIGludGVyZmFjZXMgc2luZCBpbXBsaXppdCBwdWJsaWNcblxuXHRjb25zdCBpbnRlcmZhY2VUb2tlbiA9IHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuSU5URVJGQUNFKTtcblx0Y29uc3QgbmFtZVRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblxuXHRsZXQgdHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdID0gW107XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkxFU1NfVEhBTikge1xuXHRcdHR5cGVQYXJhbWV0ZXJzID0gcGFyc2VUeXBlUGFyYW1ldGVycyhwYXJzZXIpO1xuXHR9XG5cblx0bGV0IGV4dGVuZHNJbnRlcmZhY2VzID0gW107XG5cdGlmIChwYXJzZXIuY29uc3VtZUlmS2V5d29yZChHUkFNTUFSLkVYVEVORFMpKSB7XG5cdFx0ZG8ge1xuXHRcdFx0ZXh0ZW5kc0ludGVyZmFjZXMucHVzaChwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpLnZhbHVlKTtcblx0XHR9IHdoaWxlIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfT1BFTik7XG5cblx0Y29uc3QgY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdO1xuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5CUkFDRV9DTE9TRSkge1xuXHRcdGlmIChwYXJzZXIuY29uc3VtZUlmQ29tbWVudCgpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBtZW1iZXIgPSBwYXJzZUNsYXNzTWVtYmVyKHBhcnNlcik7XG5cdFx0aWYgKG1lbWJlciA9PT0gbnVsbCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKG1lbWJlciBpbnN0YW5jZW9mIEFTVEZpZWxkTm9kZSAmJiAhbWVtYmVyLm1vZGlmaWVycy5zdGF0aWMpIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoJ0ludGVyZmFjZSBmaWVsZHMgbXVzdCBiZSBzdGF0aWMuJyk7XG5cdFx0fVxuXG5cdFx0aWYgKG1lbWJlciBpbnN0YW5jZW9mIEFTVE1ldGhvZE5vZGUgJiYgbWVtYmVyLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoJ0ludGVyZmFjZSBtZXRob2RzIG11c3Qgbm90IGhhdmUgYSBib2R5LicpO1xuXHRcdH1cblxuXHRcdGNoaWxkcmVuLnB1c2gobWVtYmVyKTtcblx0fVxuXG5cdGNvbnN0IGJyYWNlQ2xvc2VUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX0NMT1NFKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVEludGVyZmFjZU5vZGUoXG5cdFx0bmFtZVRva2VuLnZhbHVlLFxuXHRcdGFubm90YXRpb25zLFxuXHRcdG1vZGlmaWVycyxcblx0XHR0eXBlUGFyYW1ldGVycyxcblx0XHRleHRlbmRzSW50ZXJmYWNlcyxcblx0XHRjaGlsZHJlblxuXHQpO1xuXG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKGludGVyZmFjZVRva2VuLCBicmFjZUNsb3NlVG9rZW4pO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQW5ub3RhdGlvbnMocGFyc2VyOiBQYXJzZXIpOiBBU1RBbm5vdGF0aW9uTm9kZVtdIHtcblx0Y29uc3QgYW5ub3RhdGlvbnMgPSBbXTtcblxuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuQU5OT1RBVElPTikge1xuXHRcdGFubm90YXRpb25zLnB1c2gocGFyc2VBbm5vdGF0aW9uKHBhcnNlcikpO1xuXHR9XG5cblx0cmV0dXJuIGFubm90YXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBbm5vdGF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUQW5ub3RhdGlvbk5vZGUge1xuXHRjb25zdCB0b2tlbiA9IHBhcnNlci5leHBlY3RBbm5vdGF0aW9uKCk7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUQW5ub3RhdGlvbk5vZGUodG9rZW4udmFsdWUpO1xuXG5cdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKSkge1xuXHRcdHdoaWxlIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKSB7XG5cdFx0XHRjb25zdCBrZXkgPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpLnZhbHVlO1xuXHRcdFx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuQVNTSUdOKTtcblxuXHRcdFx0Y29uc3QgdmFsdWUgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0XHRcdG5vZGUucHJvcGVydGllcy5zZXQoa2V5LCB2YWx1ZSk7XG5cblx0XHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkNPTU1BKSB7XG5cdFx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXHR9XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU1vZGlmaWVycyhwYXJzZXI6IFBhcnNlciwgYWxsb3dlZDogc3RyaW5nW10pOiBNb2RpZmllcnMge1xuXHRjb25zdCBtb2RpZmllcnM6IHsgW2luZGV4OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcblxuXHRhbGxvd2VkLmZvckVhY2gobW9kaWZpZXIgPT4gbW9kaWZpZXJzW21vZGlmaWVyXSA9IGZhbHNlKTtcblxuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuS0VZV09SRCAmJiBhbGxvd2VkLmluY2x1ZGVzKHBhcnNlci5wZWVrKCkudmFsdWUpKSB7XG5cdFx0Y29uc3QgbW9kaWZpZXIgPSBwYXJzZXIubmV4dCgpLnZhbHVlO1xuXG5cdFx0aWYgKG1vZGlmaWVyc1ttb2RpZmllcl0pIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoYER1cGxpY2F0ZSBtb2RpZmllcjogJHttb2RpZmllcn1gKTtcblx0XHR9XG5cblx0XHRtb2RpZmllcnNbbW9kaWZpZXJdID0gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBuZXcgTW9kaWZpZXJzKG1vZGlmaWVycyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBhcmFtZXRlcnMocGFyc2VyOiBQYXJzZXIpOiBBU1RQYXJhbWV0ZXJOb2RlW10ge1xuXHRjb25zdCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10gPSBbXTtcblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSkge1xuXHRcdHJldHVybiBwYXJhbWV0ZXJzO1xuXHR9XG5cblx0ZG8ge1xuXHRcdGNvbnN0IG5hbWVUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cdFx0bGV0IHR5cGUgPSBudWxsO1xuXHRcdGxldCBkZWZhdWx0VmFsdWUgPSBudWxsO1xuXG5cdFx0bGV0IHR5cGVUb2tlbiA9IG51bGw7XG5cdFx0bGV0IGRlZmF1bHRWYWx1ZVRva2VuID0gbnVsbDtcblxuXHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkNPTE9OKSB7XG5cdFx0XHR0eXBlVG9rZW4gPSBwYXJzZXIubmV4dCgpO1xuXHRcdFx0dHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHRcdH1cblxuXHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkFTU0lHTikge1xuXHRcdFx0ZGVmYXVsdFZhbHVlVG9rZW4gPSBwYXJzZXIubmV4dCgpO1xuXHRcdFx0ZGVmYXVsdFZhbHVlID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RQYXJhbWV0ZXJOb2RlKG5hbWVUb2tlbi52YWx1ZSwgdHlwZSwgZGVmYXVsdFZhbHVlKTtcblx0XHRub2RlLnNwYW4gPSBzcGFuRnJvbSh0eXBlVG9rZW4gfHwgbmFtZVRva2VuLCBkZWZhdWx0VmFsdWVUb2tlbiB8fCBuYW1lVG9rZW4pO1xuXG5cdFx0cGFyYW1ldGVycy5wdXNoKG5vZGUpO1xuXHR9IHdoaWxlIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpO1xuXG5cdHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDbGFzc01lbWJlcihwYXJzZXI6IFBhcnNlcik6IEFTVE5vZGUgfCBudWxsIHtcblx0Y29uc3Qgc3RhcnRUb2tlbiA9IHBhcnNlci5wZWVrKCk7XG5cblx0Y29uc3QgYW5ub3RhdGlvbnMgPSBwYXJzZUFubm90YXRpb25zKHBhcnNlcik7XG5cdGNvbnN0IG1vZGlmaWVycyA9IHBhcnNlTW9kaWZpZXJzKFxuXHRcdHBhcnNlcixcblx0XHRbXG5cdFx0XHRHUkFNTUFSLlBVQkxJQyxcblx0XHRcdEdSQU1NQVIuUFJJVkFURSxcblx0XHRcdEdSQU1NQVIuU1RBVElDLFxuXHRcdFx0R1JBTU1BUi5SRUFET05MWVxuXHRcdF1cblx0KTtcblxuXHRjb25zdCBuYW1lVG9rZW4gPSBwYXJzZXIuZXhwZWN0T25lT2YoW1Rva2VuVHlwZS5JREVOVElGSUVSLCBUb2tlblR5cGUuS0VZV09SRF0pO1xuXG5cdGxldCBmaWVsZFR5cGUgPSBudWxsO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5DT0xPTikge1xuXHRcdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT0xPTikpIHtcblx0XHRcdGZpZWxkVHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHRcdH1cblx0fVxuXG5cdGxldCBpbml0ID0gbnVsbDtcblx0aWYgKHBhcnNlci5jb25zdW1lSWZPcGVyYXRvcihHUkFNTUFSLkFTU0lHTikpIHtcblx0XHRpbml0ID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdH1cblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5TRU1JQ09MT04pIHtcblx0XHRpZiAoIW1vZGlmaWVycy5wdWJsaWMgJiYgIW1vZGlmaWVycy5wcml2YXRlKSB7XG5cdFx0XHRtb2RpZmllcnMucHJpdmF0ZSA9IHRydWU7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc2VtaWNvbG9uVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5TRU1JQ09MT04pO1xuXG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RGaWVsZE5vZGUobmFtZVRva2VuLnZhbHVlLCBtb2RpZmllcnMsIGZpZWxkVHlwZSwgaW5pdCk7XG5cdFx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgc2VtaWNvbG9uVG9rZW4pO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0bGV0IHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5MRVNTX1RIQU4pIHtcblx0XHR0eXBlUGFyYW1ldGVycyA9IHBhcnNlVHlwZVBhcmFtZXRlcnMocGFyc2VyKTtcblx0fVxuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pIHtcblx0XHRpZiAoIW1vZGlmaWVycy5wdWJsaWMgJiYgIW1vZGlmaWVycy5wcml2YXRlKSB7XG5cdFx0XHRtb2RpZmllcnMucHVibGljID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKTtcblx0XHRjb25zdCBwYXJhbWV0ZXJzID0gcGFyc2VQYXJhbWV0ZXJzKHBhcnNlcik7XG5cdFx0Y29uc3QgcGFyZW50aGVzZXNDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXG5cdFx0bGV0IHJldHVyblR5cGUgPSBudWxsO1xuXHRcdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT0xPTikpIHtcblx0XHRcdHJldHVyblR5cGUgPSBwYXJzZVR5cGUocGFyc2VyKTtcblx0XHR9XG5cblx0XHRjb25zdCBjaGlsZHJlbjogQVNUTm9kZVtdID0gcGFyc2VCbG9jayhwYXJzZXIpO1xuXG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RNZXRob2ROb2RlKFxuXHRcdFx0bmFtZVRva2VuLnZhbHVlLFxuXHRcdFx0bmFtZVRva2VuLnZhbHVlID09PSBHUkFNTUFSLkNPTlNUUlVDVE9SID8gQVNUTm9kZVR5cGUuQ09OU1RSVUNUT1IgOiBBU1ROb2RlVHlwZS5NRVRIT0QsXG5cdFx0XHRhbm5vdGF0aW9ucyxcblx0XHRcdG1vZGlmaWVycyxcblx0XHRcdHR5cGVQYXJhbWV0ZXJzLFxuXHRcdFx0cGFyYW1ldGVycyxcblx0XHRcdHJldHVyblR5cGUsXG5cdFx0XHRjaGlsZHJlblxuXHRcdCk7XG5cblx0XHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBwYXJlbnRoZXNlc0Nsb3NlVG9rZW4pO1xuXG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHR0aHJvd1BhcnNlckVycm9yKGBJbnZhbGlkIGNsYXNzIG1lbWJlcjogJHtuYW1lVG9rZW4udmFsdWV9YCk7XG5cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUJsb2NrKHBhcnNlcjogUGFyc2VyKTogQVNUTm9kZVtdIHtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuU0VNSUNPTE9OKSB7XG5cdFx0cGFyc2VyLm5leHQoKTtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9PUEVOKTtcblxuXHRjb25zdCBjaGlsZHJlbiA9IFtdO1xuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5CUkFDRV9DTE9TRSkge1xuXHRcdGlmIChwYXJzZXIucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5DT01NRU5UKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGNvbnN0IGNoaWxkOiBBU1ROb2RlIHwgbnVsbCA9IHBhcnNlU3RhdGVtZW50KHBhcnNlcik7XG5cdFx0aWYgKGNoaWxkKSB7XG5cdFx0XHRjaGlsZHJlbi5wdXNoKGNoaWxkKTtcblx0XHR9XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9DTE9TRSk7XG5cblx0cmV0dXJuIGNoaWxkcmVuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VWYXJpYWJsZURlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUVmFyaWFibGVOb2RlIHtcblx0Y29uc3QgbGV0VG9rZW4gPSBwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLkxFVCk7XG5cdGNvbnN0IG5hbWVUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cblx0bGV0IHR5cGVBbm5vdGF0aW9uID0gbnVsbDtcblx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTE9OKSkge1xuXHRcdHR5cGVBbm5vdGF0aW9uID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cdH1cblxuXHRsZXQgaW5pdCA9IG51bGw7XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkFTU0lHTikge1xuXHRcdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkFTU0lHTik7XG5cdFx0aW5pdCA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHR9XG5cblx0Y29uc3Qgc2VtaWNvbG9uVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5TRU1JQ09MT04pO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUVmFyaWFibGVOb2RlKG5hbWVUb2tlbi52YWx1ZSwgdHlwZUFubm90YXRpb24sIGluaXQpO1xuXHRub2RlLnNwYW4gPSBzcGFuRnJvbShsZXRUb2tlbiwgc2VtaWNvbG9uVG9rZW4pO1xuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJZkRlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUSWZOb2RlIHtcblx0Y29uc3Qgc3RhcnRUb2tlbiA9IHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuSUYpO1xuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pO1xuXHRjb25zdCBjb25kaXRpb24gPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0Y29uc3QgcGFyZW50aGVzZXNDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUSWZOb2RlKGNvbmRpdGlvbiwgbmV3IEFTVFRoZW5Ob2RlKHBhcnNlQmxvY2socGFyc2VyKSkpO1xuXG5cdGlmIChwYXJzZXIuY29uc3VtZUlmS2V5d29yZChHUkFNTUFSLkVMU0UpKSB7XG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuSUYpIHtcblx0XHRcdG5vZGUuZWxzZSA9IHBhcnNlSWZEZWNsYXJhdGlvbihwYXJzZXIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRub2RlLmVsc2UgPSBuZXcgQVNURWxzZU5vZGUocGFyc2VCbG9jayhwYXJzZXIpKTtcblx0XHR9XG5cdH1cblxuXHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBwYXJlbnRoZXNlc0Nsb3NlVG9rZW4pO1xuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VNYXRjaERlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUTWF0Y2hOb2RlIHtcblx0Y29uc3Qgc3RhcnRUb2tlbiA9IHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuTUFUQ0gpO1xuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKTtcblxuXHRjb25zdCBleHByZXNzaW9uID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9PUEVOKTtcblxuXHRjb25zdCBtYXRjaENhc2VzOiBBU1RNYXRjaENhc2VOb2RlW10gPSBbXTtcblx0bGV0IGRlZmF1bHRDYXNlOiBBU1RNYXRjaENhc2VOb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQlJBQ0VfQ0xPU0UpIHtcblx0XHRjb25zdCBtYXRjaENhc2U6IEFTVE1hdGNoQ2FzZU5vZGUgPSBwYXJzZU1hdGNoQ2FzZURlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0aWYgKG1hdGNoQ2FzZS50ZXN0ID09PSBudWxsKSB7XG5cdFx0XHRkZWZhdWx0Q2FzZSA9IG1hdGNoQ2FzZTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRtYXRjaENhc2VzLnB1c2gobWF0Y2hDYXNlKTtcblx0fVxuXG5cdGNvbnN0IGJyYWNlQ2xvc2VUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX0NMT1NFKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVE1hdGNoTm9kZShleHByZXNzaW9uLCBtYXRjaENhc2VzLCBkZWZhdWx0Q2FzZSk7XG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIGJyYWNlQ2xvc2VUb2tlbik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU1hdGNoQ2FzZURlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUTWF0Y2hDYXNlTm9kZSB7XG5cdGNvbnN0IGNhc2VOb2RlID0gbmV3IEFTVE1hdGNoQ2FzZU5vZGUoKTtcblxuXHRpZiAocGFyc2VyLmNvbnN1bWVJZktleXdvcmQoR1JBTU1BUi5ERUZBVUxUKSkge1xuXHRcdGNhc2VOb2RlLnRlc3QgPSBudWxsO1xuXHR9IGVsc2Uge1xuXHRcdGNhc2VOb2RlLnRlc3QgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkNPTE9OKTtcblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5CUkFDRV9PUEVOKSB7XG5cdFx0Y2FzZU5vZGUuY2hpbGRyZW4gPSBwYXJzZUJsb2NrKHBhcnNlcik7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3QgY2hpbGQ6IEFTVE5vZGUgfCBudWxsID0gcGFyc2VTdGF0ZW1lbnQocGFyc2VyKTtcblx0XHRpZiAoY2hpbGQpIHtcblx0XHRcdGNhc2VOb2RlLmNoaWxkcmVuLnB1c2goY2hpbGQpXG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGNhc2VOb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VGb3JlYWNoRGVjbGFyYXRpb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RGb3JlYWNoTm9kZSB7XG5cdGNvbnN0IHN0YXJ0VG9rZW4gPSBwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLkZPUkVBQ0gpO1xuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pO1xuXG5cdGNvbnN0IGl0ZXJhdG9yVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXHRjb25zdCBpdGVyYXRvciA9IGl0ZXJhdG9yVG9rZW4udmFsdWU7XG5cblx0cGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5JTik7XG5cblx0Y29uc3QgaXRlcmFibGUgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblxuXHRjb25zdCBwYXJlbnRoZXNlc0Nsb3NlVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RGb3JlYWNoTm9kZShpdGVyYXRvciwgaXRlcmFibGUsIHBhcnNlQmxvY2socGFyc2VyKSk7XG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIHBhcmVudGhlc2VzQ2xvc2VUb2tlbik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUFycmF5KHBhcnNlcjogUGFyc2VyKTogQVNUQXJyYXlOb2RlIHtcblx0Y29uc3Qgc3RhcnRUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX09QRU4pO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUQXJyYXlOb2RlKCk7XG5cblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfQ0xPU0UpIHtcblx0XHRkbyB7XG5cdFx0XHRub2RlLmVsZW1lbnRzLnB1c2gocGFyc2VFeHByZXNzaW9uKHBhcnNlcikpO1xuXHRcdH0gd2hpbGUgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSk7XG5cdH1cblxuXHRjb25zdCBicmFja2V0U3F1YXJlQ2xvc2VUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX0NMT1NFKTtcblxuXHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBicmFja2V0U3F1YXJlQ2xvc2VUb2tlbik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUxhbWJkYShwYXJzZXI6IFBhcnNlcik6IEFTVExhbWJkYU5vZGUge1xuXHRjb25zdCBzdGFydFRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfT1BFTik7XG5cblx0Y29uc3QgcGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdID0gW107XG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLkFSUk9XKSB7XG5cdFx0Y29uc3QgbmFtZSA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCkudmFsdWU7XG5cdFx0bGV0IHR5cGUgPSBudWxsO1xuXHRcdGxldCBkZWZhdWx0VmFsdWUgPSBudWxsO1xuXG5cdFx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTE9OKSkge1xuXHRcdFx0dHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHRcdH1cblxuXHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkFTU0lHTikge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHRcdGRlZmF1bHRWYWx1ZSA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHRcdH1cblxuXHRcdHBhcmFtZXRlcnMucHVzaChuZXcgQVNUUGFyYW1ldGVyTm9kZShuYW1lLCB0eXBlLCBkZWZhdWx0VmFsdWUpKTtcblxuXHRcdHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkFSUk9XKTtcblxuXHRsZXQgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgPSBjcmVhdGVNaXhlZFR5cGUoKTtcblx0aWYgKHBhcnNlci5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLklERU5USUZJRVIpIHtcblx0XHRyZXR1cm5UeXBlID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQ09MT04pIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVyblR5cGUgPSBjcmVhdGVNaXhlZFR5cGUoKTtcblx0XHRcdHBhcnNlci5yZXdpbmQoKTtcblx0XHR9XG5cdH1cblxuXHRsZXQgY2hpbGRyZW4gPSBbXTtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQlJBQ0VfT1BFTikge1xuXHRcdGNoaWxkcmVuID0gcGFyc2VCbG9jayhwYXJzZXIpO1xuXHR9IGVsc2Uge1xuXHRcdGNoaWxkcmVuLnB1c2gocGFyc2VFeHByZXNzaW9uKHBhcnNlcikpO1xuXHR9XG5cblx0Y29uc3QgYnJhY2VDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfQ0xPU0UpO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUTGFtYmRhTm9kZShwYXJhbWV0ZXJzLCByZXR1cm5UeXBlLCBjaGlsZHJlbik7XG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIGJyYWNlQ2xvc2VUb2tlbik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb29rc0xpa2VMYW1iZGEocGFyc2VyOiBQYXJzZXIpOiBib29sZWFuIHtcblx0Y29uc3Qgc3RhcnQ6IG51bWJlciA9IHBhcnNlci5wb3NpdGlvbigpO1xuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLkJSQUNFX09QRU4pIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRwYXJzZXIubmV4dCgpO1xuXG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0cGFyc2VyLm5leHQoKTtcblx0XHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09MT04pKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdH1cblx0XHRpZiAoIXBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgaXNMYW1iZGE6IGJvb2xlYW4gPSBwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkFSUk9XO1xuXHRwYXJzZXIuc2Vla0F0KHN0YXJ0KVxuXHRyZXR1cm4gaXNMYW1iZGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUV4cHJlc3Npb25TdGF0ZW1lbnQocGFyc2VyOiBQYXJzZXIpOiBBU1RFeHByZXNzaW9uTm9kZSB7XG5cdGNvbnN0IGV4cHIgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5TRU1JQ09MT04pO1xuXG5cdHJldHVybiBuZXcgQVNURXhwcmVzc2lvbk5vZGUoZXhwcik7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRXhwcmVzc2lvbihwYXJzZXI6IFBhcnNlciwgcHJlY2VkZW5jZTogbnVtYmVyID0gMCk6IEFTVE5vZGUge1xuXHRsZXQgZXhwcjogQVNUTm9kZSA9IHBhcnNlUG9zdGZpeChwYXJzZXIsIHBhcnNlVW5hcnkocGFyc2VyKSk7XG5cblx0d2hpbGUgKHRydWUpIHtcblx0XHRjb25zdCB0b2tlbjogVG9rZW4gPSBwYXJzZXIucGVlaygpO1xuXHRcdGlmICghdG9rZW4pIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGxldCB0b2tlblByZWNlZGVuY2U6IG51bWJlciA9IGxvb2t1cFByZWNlZGVuY2UodG9rZW4pO1xuXHRcdGlmICh0b2tlblByZWNlZGVuY2UgPCBwcmVjZWRlbmNlKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuQVNTSUdOKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdFx0ZXhwciA9IG5ldyBBU1RBc3NpZ25tZW50Tm9kZShleHByLCBwYXJzZUV4cHJlc3Npb24ocGFyc2VyLCB0b2tlblByZWNlZGVuY2UpKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChHUkFNTUFSLk1BVEhfT1BFUkFUT1JTLmluY2x1ZGVzKHRva2VuLnZhbHVlKVxuXHRcdFx0fHwgR1JBTU1BUi5MT0dJQ19PUEVSQVRPUlMuaW5jbHVkZXModG9rZW4udmFsdWUpKSB7XG5cdFx0XHRjb25zdCBzdGFydFRva2VuOiBUb2tlbiA9IHBhcnNlci5uZXh0KCk7XG5cdFx0XHRjb25zdCByaWdodDogQVNUTm9kZSA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIsIHRva2VuUHJlY2VkZW5jZSArIDEpO1xuXHRcdFx0Y29uc3QgZW5kVG9rZW46IFRva2VuID0gcGFyc2VyLnBlZWsoKTtcblxuXHRcdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RCaW5hcnlOb2RlKGV4cHIsIHJpZ2h0LCB0b2tlbi52YWx1ZSk7XG5cdFx0XHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBlbmRUb2tlbik7XG5cdFx0XHRleHByID0gbm9kZTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGJyZWFrO1xuXHR9XG5cblx0cmV0dXJuIGV4cHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVZEb21FeHByZXNzaW9uKHBhcnNlcjogUGFyc2VyKTogQVNUVkRvbU5vZGUge1xuXHRwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLlZET00pO1xuXHRyZXR1cm4gcGFyc2VWRG9tRWxlbWVudChwYXJzZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VWRG9tRWxlbWVudChwYXJzZXI6IFBhcnNlcik6IEFTVFZEb21Ob2RlIHtcblx0cGFyc2VyLmNvbnN1bWVJZlRleHQoKTtcblxuXHRjb25zdCBzdGFydFRva2VuOiBUb2tlbiA9IHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkxFU1NfVEhBTik7XG5cdGNvbnN0IHRhZ1Rva2VuOiBUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cdGNvbnN0IHRhZzogc3RyaW5nID0gdGFnVG9rZW4udmFsdWU7XG5cblx0cGFyc2VyLmNvbnN1bWVJZlRleHQoKTtcblxuXHRjb25zdCBwcm9wcyA9IG5ldyBNYXA8c3RyaW5nLCBBU1ROb2RlPigpO1xuXHR3aGlsZSAodHJ1ZSkge1xuXG5cdFx0aWYgKHBhcnNlci5wZWVrSXMoR1JBTU1BUi5HUkVBVEVSX1RIQU4pKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRpZiAocGFyc2VyLnBlZWtJcyhHUkFNTUFSLlhNTF9DTE9TRV9UQUcpKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRjb25zdCBuYW1lVG9rZW46IFRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblx0XHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5BU1NJR04pO1xuXG5cdFx0bGV0IHZhbHVlOiBBU1ROb2RlO1xuXG5cdFx0aWYgKHBhcnNlci5wZWVrSXMoR1JBTU1BUi5CUkFDRV9PUEVOKSkge1xuXHRcdFx0aWYgKGxvb2tzTGlrZUxhbWJkYShwYXJzZXIpKSB7XG5cdFx0XHRcdHZhbHVlID0gcGFyc2VMYW1iZGEocGFyc2VyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0XHRcdHZhbHVlID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdFx0XHRcdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX0NMT1NFKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFsdWUgPSBwYXJzZVByaW1hcnkocGFyc2VyKTtcblx0XHR9XG5cblx0XHRwcm9wcy5zZXQobmFtZVRva2VuLnZhbHVlLCB2YWx1ZSk7XG5cblx0XHRwYXJzZXIuY29uc3VtZUlmVGV4dCgpO1xuXHR9XG5cblx0aWYgKHBhcnNlci5wZWVrSXMoR1JBTU1BUi5YTUxfQ0xPU0VfVEFHKSkge1xuXHRcdHBhcnNlci5uZXh0KCk7XG5cblx0XHRjb25zdCBub2RlID0gbmV3IEFTVFZEb21Ob2RlKHRhZywgcHJvcHMsIFtdKTtcblx0XHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBwYXJzZXIucGVlaygpKTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkdSRUFURVJfVEhBTik7XG5cblx0Y29uc3QgY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdO1xuXHR3aGlsZSAoIXBhcnNlci5wZWVrSXMoR1JBTU1BUi5YTUxfT1BFTl9DTE9TRV9UQUcpKSB7XG5cblx0XHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5MRVNTX1RIQU4pIHtcblx0XHRcdGNoaWxkcmVuLnB1c2gocGFyc2VWRG9tRWxlbWVudChwYXJzZXIpKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNoaWxkcmVuLnB1c2gocGFyc2VWRG9tVGV4dChwYXJzZXIpKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLlhNTF9PUEVOX0NMT1NFX1RBRyk7XG5cdHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkdSRUFURVJfVEhBTik7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RWRG9tTm9kZSh0YWcsIHByb3BzLCBjaGlsZHJlbik7XG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIHBhcnNlci5wZWVrKCkpO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVkRvbVRleHQocGFyc2VyOiBQYXJzZXIpOiBBU1RWRG9tVGV4dE5vZGUge1xuXHRjb25zdCB0b2tlbjogVG9rZW4gPSBwYXJzZXIuZXhwZWN0T25lT2YoXG5cdFx0W1xuXHRcdFx0VG9rZW5UeXBlLklERU5USUZJRVIsXG5cdFx0XHRUb2tlblR5cGUuT1BFUkFUT1IsXG5cdFx0XHRUb2tlblR5cGUuS0VZV09SRCxcblx0XHRcdFRva2VuVHlwZS5QVU5DVFVBVElPTixcblx0XHRcdFRva2VuVHlwZS5OVU1CRVIsXG5cdFx0XHRUb2tlblR5cGUuVEVYVFxuXHRcdF1cblx0KTtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RWRG9tVGV4dE5vZGUodG9rZW4udmFsdWUpO1xuXHRub2RlLnNwYW4gPSBzcGFuRnJvbSh0b2tlbiwgdG9rZW4pO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQXJndW1lbnRzKHBhcnNlcjogUGFyc2VyKTogQVNUTm9kZVtdIHtcblx0Y29uc3QgYXJnczogQVNUTm9kZVtdID0gW107XG5cblx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKSkge1xuXHRcdHJldHVybiBhcmdzO1xuXHR9XG5cblx0YXJncy5wdXNoKHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpKTtcblxuXHR3aGlsZSAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKSB7XG5cdFx0YXJncy5wdXNoKHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKTtcblx0cmV0dXJuIGFyZ3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVVuYXJ5KHBhcnNlcjogUGFyc2VyKTogQVNUTm9kZSB8IEFTVFVuYXJ5Tm9kZSB7XG5cdGNvbnN0IHRva2VuOiBUb2tlbiA9IHBhcnNlci5wZWVrKCk7XG5cblx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5LRVlXT1JEICYmIHRva2VuLnZhbHVlID09PSBHUkFNTUFSLlZET00pIHtcblx0XHRyZXR1cm4gcGFyc2VWRG9tRXhwcmVzc2lvbihwYXJzZXIpO1xuXHR9XG5cblx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLkVYQ0xBTUFUSU9OX01BUkspIHtcblx0XHRwYXJzZXIubmV4dCgpO1xuXG5cdFx0Y29uc3QgdW5hcnk6IEFTVE5vZGUgfCBBU1RVbmFyeU5vZGUgPSBwYXJzZVVuYXJ5KHBhcnNlcik7XG5cblx0XHRyZXR1cm4gbmV3IEFTVFVuYXJ5Tm9kZShHUkFNTUFSLkVYQ0xBTUFUSU9OX01BUkssIHVuYXJ5KTtcblx0fVxuXG5cdHJldHVybiBwYXJzZVByaW1hcnkocGFyc2VyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUHJpbWFyeShwYXJzZXI6IFBhcnNlcik6IEFTVE5vZGUge1xuXHRpZiAobG9va3NMaWtlTGFtYmRhKHBhcnNlcikpIHtcblx0XHRyZXR1cm4gcGFyc2VMYW1iZGEocGFyc2VyKTtcblx0fVxuXG5cdGNvbnN0IHRva2VuOiBUb2tlbiA9IHBhcnNlci5uZXh0KCk7XG5cblx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX09QRU4pIHtcblx0XHRwYXJzZXIucmV3aW5kKCk7XG5cdFx0cmV0dXJuIHBhcnNlQXJyYXkocGFyc2VyKTtcblx0fVxuXG5cdGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuTlVNQkVSKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLk5VTUJFUik7XG5cdFx0bm9kZS52YWx1ZSA9IHRva2VuLnZhbHVlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5TVFJJTkcpIHtcblx0XHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuU1RSSU5HKTtcblx0XHRub2RlLnZhbHVlID0gdG9rZW4udmFsdWU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRpZiAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLkJPT0xFQU4pIHtcblx0XHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuQk9PTEVBTik7XG5cdFx0bm9kZS52YWx1ZSA9IHRva2VuLnZhbHVlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLklERU5USUZJRVIpO1xuXHRcdG5vZGUubmFtZSA9IHRva2VuLnZhbHVlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLk5VTEwpIHtcblx0XHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuTlVMTCk7XG5cdFx0bm9kZS52YWx1ZSA9IHRva2VuLnZhbHVlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLlRISVMpIHtcblx0XHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuVEhJUyk7XG5cdFx0bm9kZS5uYW1lID0gdG9rZW4udmFsdWU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuTkVXKSB7XG5cblx0XHRsZXQgdHlwZUFubm90YXRpb246IEFTVFR5cGVOb2RlID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cblx0XHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKTtcblxuXHRcdHJldHVybiBuZXcgQVNUTmV3Tm9kZShwYXJzZUFyZ3VtZW50cyhwYXJzZXIpLCB0eXBlQW5ub3RhdGlvbik7XG5cdH1cblxuXHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTikge1xuXHRcdGNvbnN0IGV4cHI6IEFTVE5vZGUgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0XHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cdFx0cmV0dXJuIGV4cHI7XG5cdH1cblxuXHR0aHJvd1BhcnNlckVycm9yKGBVbmV4cGVjdGVkIHRva2VuOiAke3Rva2VuLnR5cGV9ICR7dG9rZW4udmFsdWV9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBvc3RmaXgocGFyc2VyOiBQYXJzZXIsIGV4cHI6IEFTVE5vZGUgfCBudWxsKTogQVNUTm9kZSB7XG5cdGlmIChleHByID09PSBudWxsKSB7XG5cdFx0dGhyb3dQYXJzZXJFcnJvcihgRXhwZWN0ZWQgZXhwcmVzc2lvbiwgZ290IG51bGwuYCk7XG5cdH1cblxuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdGNvbnN0IHRva2VuID0gcGFyc2VyLnBlZWsoKTtcblx0XHRpZiAoIXRva2VuKSBicmVhaztcblxuXHRcdC8vIENhbGw6IGZvbyguLi4pXG5cdFx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0XHRleHByID0gbmV3IEFTVENhbGxOb2RlKGV4cHIsIHBhcnNlQXJndW1lbnRzKHBhcnNlcikpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gTWVtYmVyOiBmb28uYmFyXG5cdFx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLkRPVCkge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHRcdGV4cHIgPSBuZXcgQVNUTWVtYmVyTm9kZShleHByLCBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpLnZhbHVlKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIElOREVYOiBmb29bZXhwcl1cblx0XHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfT1BFTikge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblxuXHRcdFx0Y29uc3QgaW5kZXggPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblxuXHRcdFx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfQ0xPU0UpO1xuXG5cdFx0XHRleHByID0gbmV3IEFTVEluZGV4Tm9kZShleHByLCBpbmRleCk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRicmVhaztcblx0fVxuXG5cdHJldHVybiBleHByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9va3VwUHJlY2VkZW5jZSh0b2tlbjogVG9rZW4pOiBudW1iZXIge1xuXHRzd2l0Y2ggKHRva2VuLnZhbHVlKSB7XG5cdFx0Y2FzZSBHUkFNTUFSLkRPVDpcblx0XHRcdHJldHVybiAxMDA7XG5cdFx0Y2FzZSBHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU46XG5cdFx0XHRyZXR1cm4gOTA7XG5cdFx0Y2FzZSBHUkFNTUFSLk1VTFRJUExZOlxuXHRcdGNhc2UgR1JBTU1BUi5ESVZJREU6XG5cdFx0Y2FzZSBHUkFNTUFSLk1PRFVMVVM6XG5cdFx0XHRyZXR1cm4gNjA7XG5cdFx0Y2FzZSBHUkFNTUFSLlBMVVM6XG5cdFx0Y2FzZSBHUkFNTUFSLk1JTlVTOlxuXHRcdFx0cmV0dXJuIDUwO1xuXHRcdGNhc2UgR1JBTU1BUi5MRVNTX1RIQU46XG5cdFx0Y2FzZSBHUkFNTUFSLkdSRUFURVJfVEhBTjpcblx0XHRjYXNlIEdSQU1NQVIuTEVTU19FUVVBTDpcblx0XHRjYXNlIEdSQU1NQVIuR1JFQVRFUl9FUVVBTDpcblx0XHRcdHJldHVybiA0MDtcblx0XHRjYXNlIEdSQU1NQVIuRVFVQUw6XG5cdFx0Y2FzZSBHUkFNTUFSLk5PVF9FUVVBTDpcblx0XHRcdHJldHVybiAzMDtcblx0XHRjYXNlIEdSQU1NQVIuQU5EOlxuXHRcdFx0cmV0dXJuIDIwO1xuXHRcdGNhc2UgR1JBTU1BUi5PUjpcblx0XHRcdHJldHVybiAxMDtcblx0XHRjYXNlIEdSQU1NQVIuQVNTSUdOOlxuXHRcdFx0cmV0dXJuIDU7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiAwO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7VG9rZW4sIFRva2VuVHlwZX0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcbmltcG9ydCB7VG9rZW5TdHJlYW19IGZyb20gXCIuLi90b2tlbml6ZXIvdG9rZW5pemVyXCI7XG5pbXBvcnQge3BhcnNlUHJvZ3JhbX0gZnJvbSBcIi4vcGFyc2VyX3N0YXRtZW50c1wiO1xuaW1wb3J0IHt0aHJvd1BhcnNlckVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4vcGFyc2VyX3NvdXJjZVwiO1xuXG5cbmV4cG9ydCBjbGFzcyBQYXJzZXIge1xuXHRzb3VyY2U6IFNvdXJjZTtcblx0dG9rZW5TdHJlYW06IFRva2VuU3RyZWFtIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3Ioc291cmNlOiBTb3VyY2UpIHtcblx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0fVxuXG5cdHBhcnNlKCkge1xuXHRcdHRoaXMudG9rZW5TdHJlYW0gPSB0aGlzLnNvdXJjZVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgLmdldFRva2VuaXplcigpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAuZ2V0VG9rZW5TdHJlYW0oKVxuXG5cdFx0cmV0dXJuIHBhcnNlUHJvZ3JhbSh0aGlzKTtcblx0fVxuXG5cdHN0cmVhbSgpOiBUb2tlblN0cmVhbSB7XG5cdFx0aWYgKCF0aGlzLnRva2VuU3RyZWFtKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKCdQYXJzZXIgaGFzIG5vdCBiZWVuIHBhcnNlZCB5ZXQuJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMudG9rZW5TdHJlYW07XG5cdH1cblxuXHRleHBlY3QodG9rZW5UeXBlOiBzdHJpbmcsIGtleXdvcmQ6IHN0cmluZyB8IG51bGwgPSBudWxsKTogVG9rZW4ge1xuXHRcdGNvbnN0IHRva2VuID0gdGhpc1xuXHRcdFx0LnN0cmVhbSgpXG5cdFx0XHQubmV4dCgpO1xuXG5cdFx0aWYgKCF0b2tlbikge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcihgVW5leHBlY3RlZCBlbmQgb2YgZmlsZS4gRXhwZWN0ZWQgJHt0b2tlblR5cGV9JHtrZXl3b3JkID8gJyAnICsga2V5d29yZCA6ICcnfWApO1xuXHRcdH1cblxuXHRcdGlmICh0b2tlbi50eXBlICE9PSB0b2tlblR5cGUgfHwgKGtleXdvcmQgJiYgdG9rZW4udmFsdWUgIT09IGtleXdvcmQpKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKGBFeHBlY3RlZCAke3Rva2VuVHlwZX0ke2tleXdvcmQgPyAnICcgKyBrZXl3b3JkIDogJyd9LCBnb3QgJHt0b2tlbi50eXBlfSAke3Rva2VuLnZhbHVlfWApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0b2tlbjtcblx0fVxuXG5cdGV4cGVjdE9wZXJhdG9yKGtleXdvcmQ6IHN0cmluZyB8IG51bGwgPSBudWxsKTogVG9rZW4ge1xuXHRcdHJldHVybiB0aGlzLmV4cGVjdChUb2tlblR5cGUuT1BFUkFUT1IsIGtleXdvcmQpO1xuXHR9XG5cblx0ZXhwZWN0QW5ub3RhdGlvbigpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZWN0KFRva2VuVHlwZS5BTk5PVEFUSU9OKTtcblx0fVxuXG5cdGV4cGVjdElkZW50aWZpZXIoa2V5d29yZDogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZWN0KFRva2VuVHlwZS5JREVOVElGSUVSLCBrZXl3b3JkKTtcblx0fVxuXG5cdGV4cGVjdEtleXdvcmQoa2V5d29yZDogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZWN0KFRva2VuVHlwZS5LRVlXT1JELCBrZXl3b3JkKTtcblx0fVxuXG5cdGV4cGVjdFN0cmluZygpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZWN0KFRva2VuVHlwZS5TVFJJTkcpO1xuXHR9XG5cblx0ZXhwZWN0VGV4dCgpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZWN0KFRva2VuVHlwZS5URVhUKTtcblx0fVxuXG5cdGV4cGVjdFB1bmN0dWF0aW9uKGtleXdvcmQ6IHN0cmluZyB8IG51bGwgPSBudWxsKTogVG9rZW4ge1xuXHRcdHJldHVybiB0aGlzLmV4cGVjdChUb2tlblR5cGUuUFVOQ1RVQVRJT04sIGtleXdvcmQpO1xuXHR9XG5cblx0ZXhwZWN0T25lT2YodG9rZW5UeXBlczogc3RyaW5nW10sIGtleXdvcmRzOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IFRva2VuIHtcblx0XHRjb25zdCB0b2tlbiA9IHRoaXNcblx0XHRcdC5zdHJlYW0oKVxuXHRcdFx0Lm5leHQoKTtcblxuXHRcdGlmICghdG9rZW4pIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoYFVuZXhwZWN0ZWQgZW5kIG9mIGZpbGUuIEV4cGVjdGVkIG9uZSBvZiB0eXBlcyAke3Rva2VuVHlwZXN9LCBnb3QgbnVsbC5gKTtcblx0XHR9XG5cblx0XHRpZiAoIXRva2VuVHlwZXMuaW5jbHVkZXModG9rZW4udHlwZSkpIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoYEV4cGVjdGVkIG9uZSBvZiB0eXBlcyAke3Rva2VuVHlwZXN9LCBnb3QgJHt0b2tlbi50eXBlfWApO1xuXHRcdH1cblxuXHRcdGlmIChrZXl3b3JkcyAmJiAha2V5d29yZHMuaW5jbHVkZXModG9rZW4udmFsdWUpKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKGBFeHBlY3RlZCBvbmUgb2YgdmFsdWVzICR7a2V5d29yZHN9LCBnb3QgJHt0b2tlbi52YWx1ZX1gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdG9rZW47XG5cdH1cblxuXHRjb25zdW1lSWYodG9rZW5UeXBlOiBzdHJpbmcsIGtleXdvcmQ6IHN0cmluZyB8IG51bGwgPSBudWxsKTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgdG9rZW4gPSB0aGlzLnBlZWsoKTtcblxuXHRcdGlmICh0b2tlbi50eXBlID09PSB0b2tlblR5cGUgJiYgKGtleXdvcmQgJiYgdG9rZW4udmFsdWUudHJpbSgpID09PSBrZXl3b3JkKSkge1xuXHRcdFx0dGhpcy5uZXh0KCk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRjb25zdW1lSWZQdW5jdHVhdGlvbih2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3VtZUlmKFRva2VuVHlwZS5QVU5DVFVBVElPTiwgdmFsdWUpO1xuXHR9XG5cblx0Y29uc3VtZUlmT3BlcmF0b3IodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbnN1bWVJZihUb2tlblR5cGUuT1BFUkFUT1IsIHZhbHVlKTtcblx0fVxuXG5cdGNvbnN1bWVJZkNvbW1lbnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3VtZUlmKFRva2VuVHlwZS5DT01NRU5UKTtcblx0fVxuXG5cdGNvbnN1bWVJZktleXdvcmQoa2V5d29yZDogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3VtZUlmKFRva2VuVHlwZS5LRVlXT1JELCBrZXl3b3JkKTtcblx0fVxuXG5cdGNvbnN1bWVJZlRleHQoKTogYm9vbGVhbiB7XG5cdFx0aWYgKHRoaXMucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5URVhUICYmIHRoaXMucGVla0lzKCcnKSkge1xuXHRcdFx0dGhpcy5uZXh0KCk7XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHBlZWsoKTogVG9rZW4ge1xuXHRcdGNvbnN0IHRva2VuID0gdGhpc1xuXHRcdFx0LnN0cmVhbSgpXG5cdFx0XHQucGVlaygpO1xuXG5cdFx0aWYgKHRva2VuID09PSBudWxsKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKCdVbmV4cGVjdGVkIGVuZCBvZiBmaWxlLiBFeHBlY3RlZCB0b2tlbiwgZ290IG51bGwuJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRva2VuO1xuXHR9XG5cblx0cGVla0lzKGtleXdvcmQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnBlZWsoKVxuXHRcdCAgICAgICAgICAgLnZhbHVlXG5cdFx0ICAgICAgICAgICAudHJpbSgpID09PSBrZXl3b3JkO1xuXHR9XG5cblx0bmV4dCgpOiBUb2tlbiB7XG5cdFx0Y29uc3QgdG9rZW4gPSB0aGlzXG5cdFx0XHQuc3RyZWFtKClcblx0XHRcdC5uZXh0KCk7XG5cblx0XHRpZiAodG9rZW4gPT09IG51bGwpIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoJ1VuZXhwZWN0ZWQgZW5kIG9mIGZpbGUuIEV4cGVjdGVkIHRva2VuLCBnb3QgbnVsbC4nKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdG9rZW47XG5cdH1cblxuXHRyZXdpbmQoKTogdm9pZCB7XG5cdFx0dGhpcy5zdHJlYW0oKVxuXHRcdCAgICAucmV3aW5kKCk7XG5cdH1cblxuXHRwb3NpdGlvbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnN0cmVhbSgpLmluZGV4O1xuXHR9XG5cblx0c2Vla0F0KHBvc2l0aW9uOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnN0cmVhbSgpLmluZGV4ID0gcG9zaXRpb247XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtBU1RDbGFzc05vZGUsIEFTVEludGVyZmFjZU5vZGUsIEFTVE5vZGV9IGZyb20gXCIuLi9hc3RcIjtcbmltcG9ydCB7Q2xhc3NEZWZpbml0aW9uLCBJbnN0YW5jZSwgSW50ZXJmYWNlRGVmaW5pdGlvbn0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtDbGFzc1N5bWJvbCwgSW50ZXJmYWNlU3ltYm9sfSBmcm9tIFwiLi4vdHlwZXMvdHlwZV9vYmplY3RzXCI7XG5pbXBvcnQge3Rocm93UnVudGltZUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5cbmV4cG9ydCBjbGFzcyBDbGFzc1JlZ2lzdHJ5IHtcblx0bWFwOiBNYXA8c3RyaW5nLCBDbGFzc0RlZmluaXRpb24+ID0gbmV3IE1hcCgpO1xuXG5cdHJlZ2lzdGVyKG5vZGU6IEFTVENsYXNzTm9kZSk6IHZvaWQge1xuXHRcdHRoaXMuc2V0KG5vZGUubmFtZSwgQ2xhc3NEZWZpbml0aW9uLmZyb21BU1Qobm9kZSkpO1xuXHR9XG5cblx0YWxsKCk6IEl0ZXJhYmxlSXRlcmF0b3I8Q2xhc3NEZWZpbml0aW9uPiB7XG5cdFx0cmV0dXJuIHRoaXMubWFwLnZhbHVlcygpO1xuXHR9XG5cblx0c2V0KG5hbWU6IHN0cmluZywgY2xhc3NEZWZpbml0aW9uOiBDbGFzc0RlZmluaXRpb24pOiB2b2lkIHtcblx0XHR0aGlzLm1hcC5zZXQobmFtZSwgY2xhc3NEZWZpbml0aW9uKTtcblx0fVxuXG5cdGdldChuYW1lOiBzdHJpbmcpOiBDbGFzc0RlZmluaXRpb24ge1xuXHRcdGNvbnN0IGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24gfCBudWxsID0gdGhpcy5tYXAuZ2V0KG5hbWUpIHx8IG51bGw7XG5cdFx0aWYgKCFjbGFzc0RlZikge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYENsYXNzICR7bmFtZX0gbm90IGZvdW5kLmApO1xuXHRcdH1cblx0XHRyZXR1cm4gY2xhc3NEZWY7XG5cdH1cblxuXHRoYXMobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubWFwLmhhcyhuYW1lKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgSW50ZXJmYWNlUmVnaXN0cnkge1xuXHRtYXA6IE1hcDxzdHJpbmcsIEludGVyZmFjZURlZmluaXRpb24+ID0gbmV3IE1hcCgpO1xuXG5cdHJlZ2lzdGVyKG5vZGU6IEFTVEludGVyZmFjZU5vZGUpOiB2b2lkIHtcblx0XHR0aGlzLnNldChub2RlLm5hbWUsIEludGVyZmFjZURlZmluaXRpb24uZnJvbUFTVChub2RlKSk7XG5cdH1cblxuXHRhbGwoKTogSXRlcmFibGVJdGVyYXRvcjxJbnRlcmZhY2VEZWZpbml0aW9uPiB7XG5cdFx0cmV0dXJuIHRoaXMubWFwLnZhbHVlcygpO1xuXHR9XG5cblx0c2V0KG5hbWU6IHN0cmluZywgaW50ZXJmYWNlRGVmaW5pdGlvbjogSW50ZXJmYWNlRGVmaW5pdGlvbik6IHZvaWQge1xuXHRcdHRoaXMubWFwLnNldChuYW1lLCBpbnRlcmZhY2VEZWZpbml0aW9uKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgSW5zdGFuY2VSZWdpc3RyeSB7XG5cdHByaXZhdGUgaW5zdGFuY2VzOiBNYXA8c3RyaW5nLCBJbnN0YW5jZT4gPSBuZXcgTWFwPHN0cmluZywgSW5zdGFuY2U+KCk7XG5cblx0cmVnaXN0ZXIoaW5zdGFuY2U6IEluc3RhbmNlKTogdm9pZCB7XG5cdFx0dGhpcy5pbnN0YW5jZXMuc2V0KGluc3RhbmNlLmlkLCBpbnN0YW5jZSk7XG5cdH1cblxuXHR1bnJlZ2lzdGVyKGluc3RhbmNlOiBJbnN0YW5jZSk6IHZvaWQge1xuXHRcdHRoaXMuaW5zdGFuY2VzLmRlbGV0ZShpbnN0YW5jZS5pZCk7XG5cdH1cblxuXHRnZXQoaWQ6IHN0cmluZyk6IEluc3RhbmNlIHwgbnVsbCB7XG5cdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2VzLmdldChpZCkgfHwgbnVsbDtcblx0fVxuXG5cdGFsbEluc3RhbmNlcygpOiBJbnN0YW5jZVtdIHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmluc3RhbmNlcy52YWx1ZXMoKSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGVSZWdpc3RyeSB7XG5cdGNsYXNzU3ltYm9sczogTWFwPHN0cmluZywgQ2xhc3NTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRpbnRlcmZhY2VTeW1ib2xzOiBNYXA8c3RyaW5nLCBJbnRlcmZhY2VTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXG5cdGFsbENsYXNzU3ltYm9scygpOiBJdGVyYWJsZUl0ZXJhdG9yPENsYXNzU3ltYm9sPiB7XG5cdFx0cmV0dXJuIHRoaXMuY2xhc3NTeW1ib2xzLnZhbHVlcygpO1xuXHR9XG5cblx0YWxsSW50ZXJmYWNlU3ltYm9scygpOiBJdGVyYWJsZUl0ZXJhdG9yPEludGVyZmFjZVN5bWJvbD4ge1xuXHRcdHJldHVybiB0aGlzLmludGVyZmFjZVN5bWJvbHMudmFsdWVzKCk7XG5cdH1cblxuXHRhZGRDbGFzc1N5bWJvbChzeW1ib2w6IENsYXNzU3ltYm9sKTogdm9pZCB7XG5cdFx0dGhpcy5jbGFzc1N5bWJvbHMuc2V0KHN5bWJvbC5uYW1lLCBzeW1ib2wpO1xuXHR9XG5cblx0YWRkSW50ZXJmYWNlU3ltYm9sKHN5bWJvbDogSW50ZXJmYWNlU3ltYm9sKTogdm9pZCB7XG5cdFx0dGhpcy5pbnRlcmZhY2VTeW1ib2xzLnNldChzeW1ib2wubmFtZSwgc3ltYm9sKTtcblx0fVxuXG5cdGhhc1N5bWJvbChuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jbGFzc1N5bWJvbHMuaGFzKG5hbWUpIHx8IHRoaXMuaW50ZXJmYWNlU3ltYm9scy5oYXMobmFtZSk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0Q2xhc3NTeW1ib2wobmFtZTogc3RyaW5nKTogQ2xhc3NTeW1ib2wge1xuXHRcdGNvbnN0IHN5bWJvbDogQ2xhc3NTeW1ib2wgfCB1bmRlZmluZWQgPSB0aGlzLmNsYXNzU3ltYm9scy5nZXQobmFtZSk7XG5cdFx0aWYgKHN5bWJvbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgU3ltYm9sICR7bmFtZX0gbm90IGZvdW5kLmApO1xuXHRcdH1cblx0XHRyZXR1cm4gc3ltYm9sO1xuXHR9XG5cblx0cHVibGljIGdldEludGVyYWNlU3ltYm9sKG5hbWU6IHN0cmluZyk6IEludGVyZmFjZVN5bWJvbCB7XG5cdFx0Y29uc3Qgc3ltYm9sOiBJbnRlcmZhY2VTeW1ib2wgfCB1bmRlZmluZWQgPSB0aGlzLmludGVyZmFjZVN5bWJvbHMuZ2V0KG5hbWUpO1xuXHRcdGlmIChzeW1ib2wgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFN5bWJvbCAke25hbWV9IG5vdCBmb3VuZC5gKTtcblx0XHR9XG5cdFx0cmV0dXJuIHN5bWJvbDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgT2JqZWN0UmVnaXN0cnkge1xuXHRwdWJsaWMgcmVhZG9ubHkgY2xhc3NlczogQ2xhc3NSZWdpc3RyeSA9IG5ldyBDbGFzc1JlZ2lzdHJ5KCk7XG5cdHB1YmxpYyByZWFkb25seSBpbnRlcmZhY2VzOiBJbnRlcmZhY2VSZWdpc3RyeSA9IG5ldyBJbnRlcmZhY2VSZWdpc3RyeSgpO1xuXHRwdWJsaWMgcmVhZG9ubHkgaW5zdGFuY2VzOiBJbnN0YW5jZVJlZ2lzdHJ5ID0gbmV3IEluc3RhbmNlUmVnaXN0cnkoKTtcblx0cHVibGljIHJlYWRvbmx5IHR5cGVzOiBUeXBlUmVnaXN0cnkgPSBuZXcgVHlwZVJlZ2lzdHJ5KCk7XG5cblx0ZmV0Y2hBbGxPYmplY3REZWZpbml0aW9ucygpOiBNYXA8c3RyaW5nLCBDbGFzc0RlZmluaXRpb24gfCBJbnRlcmZhY2VEZWZpbml0aW9uPiB7XG5cdFx0Y29uc3QgbWFwID0gbmV3IE1hcCgpO1xuXG5cdFx0Zm9yIChjb25zdCBjbGFzc0RlZiBvZiB0aGlzLmludGVyZmFjZXMuYWxsKCkpIHtcblx0XHRcdG1hcC5zZXQoY2xhc3NEZWYubmFtZSwgY2xhc3NEZWYpO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgY2xhc3NEZWYgb2YgdGhpcy5jbGFzc2VzLmFsbCgpKSB7XG5cdFx0XHRtYXAuc2V0KGNsYXNzRGVmLm5hbWUsIGNsYXNzRGVmKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWFwO1xuXHR9XG5cblx0Y29sbGVjdEFsbChhc3Q6IEFTVE5vZGUpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgYXN0LmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEludGVyZmFjZU5vZGUpIHtcblx0XHRcdFx0dGhpcy5pbnRlcmZhY2VzLnJlZ2lzdGVyKG5vZGUpO1xuXHRcdFx0fSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgQVNUQ2xhc3NOb2RlKSB7XG5cdFx0XHRcdHRoaXMuY2xhc3Nlcy5yZWdpc3Rlcihub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuIiwKICAgICJpbXBvcnQge1xuXHRBU1RBcnJheU5vZGUsXG5cdEFTVEJpbmFyeU5vZGUsXG5cdEFTVENhbGxOb2RlLFxuXHRBU1RDbGFzc05vZGUsXG5cdEFTVEV4cHJlc3Npb25Ob2RlLFxuXHRBU1RGaWVsZE5vZGUsXG5cdEFTVEZvcmVhY2hOb2RlLFxuXHRBU1RJbmRleE5vZGUsXG5cdEFTVEludGVyZmFjZU5vZGUsXG5cdEFTVExhbWJkYU5vZGUsXG5cdEFTVE1lbWJlck5vZGUsXG5cdEFTVE1ldGhvZE5vZGUsXG5cdEFTVE5ld05vZGUsXG5cdEFTVE5vZGUsXG5cdEFTVE5vZGVUeXBlLFxuXHRBU1RQYXJhbWV0ZXJOb2RlLFxuXHRBU1RSZXR1cm5Ob2RlLFxuXHRBU1RUeXBlTm9kZSxcblx0QVNUVW5hcnlOb2RlLFxuXHRBU1RWYXJpYWJsZU5vZGUsXG5cdEFTVFZEb21Ob2RlXG59IGZyb20gJy4uL2FzdC50cyc7XG5pbXBvcnQge1xuXHRidWlsZFR5cGVTdWJzdGl0dXRpb25NYXAsXG5cdENsYXNzUmVmVHlwZSxcblx0Q2xhc3NTeW1ib2wsXG5cdEZpZWxkU3ltYm9sLFxuXHRJbnRlcmZhY2VSZWZUeXBlLFxuXHRJbnRlcmZhY2VTeW1ib2wsXG5cdExhbWJkYVR5cGUsXG5cdE1ldGhvZFN5bWJvbCxcblx0TWl4ZWRUeXBlLFxuXHROdWxsYWJsZVR5cGUsXG5cdFBhcmFtZXRlclN5bWJvbCxcblx0UHJpbWl0aXZlQ2xhc3NUeXBlcyxcblx0c3Vic3RpdHV0ZVR5cGUsXG5cdFR5cGUsXG5cdFR5cGVQYXJhbWV0ZXJTeW1ib2wsXG5cdFR5cGVzLFxuXHRUeXBlU2NvcGUsXG5cdFR5cGVWYXJpYWJsZSxcblx0d3JhcFR5cGVcbn0gZnJvbSBcIi4vdHlwZV9vYmplY3RzXCI7XG5pbXBvcnQge0F1dG9ib3hpbmd9IGZyb20gXCIuL2F1dG9ib3hpbmdcIjtcbmltcG9ydCB7TmF0aXZlRnVuY3Rpb24sIE5hdGl2ZUZ1bmN0aW9uc30gZnJvbSBcIi4uLy4uL2xpYnJhcnkvbmF0aXZlX2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHtHUkFNTUFSfSBmcm9tIFwiLi4vZ3JhbW1hclwiO1xuaW1wb3J0IHt0aHJvd1R5cGVFcnJvcn0gZnJvbSBcIi4uL2Vycm9ycy50c1wiXG5pbXBvcnQge0NsYXNzRGVmaW5pdGlvbiwgSW50ZXJmYWNlRGVmaW5pdGlvbn0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuXG5cbmNvbnN0IGdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5ID0gbmV3IE5hdGl2ZUZ1bmN0aW9ucygpXG5cdC5nZXRHbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeSgpO1xuXG5leHBvcnQgY2xhc3MgU3RhdGVtZW50UmVzdWx0IHtcblx0ZGlkUmV0dXJuOiBib29sZWFuO1xuXHRyZXR1cm5UeXBlOiBUeXBlIHwgbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihkaWRSZXR1cm46IGJvb2xlYW4sIHJldHVyblR5cGU6IFR5cGUgfCBudWxsKSB7XG5cdFx0dGhpcy5kaWRSZXR1cm4gPSBkaWRSZXR1cm47XG5cdFx0dGhpcy5yZXR1cm5UeXBlID0gcmV0dXJuVHlwZTtcblx0fVxuXG5cdHN0YXRpYyB3aXRoUmV0dXJuKHJldHVyblR5cGU6IFR5cGUpOiBTdGF0ZW1lbnRSZXN1bHQge1xuXHRcdHJldHVybiBuZXcgU3RhdGVtZW50UmVzdWx0KHRydWUsIHJldHVyblR5cGUpO1xuXHR9XG5cblx0c3RhdGljIG5vUmV0dXJuKCk6IFN0YXRlbWVudFJlc3VsdCB7XG5cdFx0cmV0dXJuIG5ldyBTdGF0ZW1lbnRSZXN1bHQoZmFsc2UsIG51bGwpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlQ2hlY2tlciB7XG5cdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeTtcblxuXHRjb25zdHJ1Y3RvcihvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpIHtcblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5ID0gb2JqZWN0UmVnaXN0cnk7XG5cdH1cblxuXHRjb2xsZWN0QWxsU3ltYm9sc0Zyb21Ob2RlKGFzdDogQVNUTm9kZSk6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUSW50ZXJmYWNlTm9kZSkge1xuXHRcdFx0XHR0aGlzLnJlZ2lzdGVySW50ZXJmYWNlU3ltYm9sKG5vZGUpXG5cdFx0XHR9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RDbGFzc05vZGUpIHtcblx0XHRcdFx0dGhpcy5yZWdpc3RlckNsYXNzU3ltYm9sKG5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNvbGxlY3RBbGxTeW1ib2xzRnJvbVJlZ2lzdHJ5KG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IHZvaWQge1xuXHRcdGNvbnN0IG9iamVjdERlZmluaXRpb25zOiBNYXBJdGVyYXRvcjxDbGFzc0RlZmluaXRpb24gfCBJbnRlcmZhY2VEZWZpbml0aW9uPiA9IG9iamVjdFJlZ2lzdHJ5XG5cdFx0XHQuZmV0Y2hBbGxPYmplY3REZWZpbml0aW9ucygpXG5cdFx0XHQudmFsdWVzKCk7XG5cblx0XHRmb3IgKGxldCBvYmplY3REZWYgb2Ygb2JqZWN0RGVmaW5pdGlvbnMpIHtcblx0XHRcdGlmIChvYmplY3REZWYgaW5zdGFuY2VvZiBJbnRlcmZhY2VEZWZpbml0aW9uKSB7XG5cdFx0XHRcdHRoaXMucmVnaXN0ZXJJbnRlcmZhY2VTeW1ib2wob2JqZWN0RGVmLm5vZGUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5yZWdpc3RlckNsYXNzU3ltYm9sKG9iamVjdERlZi5ub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjaGVjayhhc3Q6IEFTVE5vZGUpOiB2b2lkIHtcblx0XHR0aGlzLmNvbGxlY3RBbGxTeW1ib2xzRnJvbU5vZGUoYXN0KTtcblx0XHR0aGlzLnZhbGlkYXRlSW5oZXJpdGFuY2UoKTtcblx0XHR0aGlzLmNoZWNrUHJvZ3JhbShhc3QpO1xuXHRcdHRoaXMuY2hlY2tJbnRlcmZhY2VCb2RpZXMoKTtcblx0XHR0aGlzLmNoZWNrQ2xhc3Nlc0JvZGllcygpO1xuXHRcdHRoaXMuY2hlY2tDbGFzc2VzSW1wbGVtZW50cygpO1xuXHR9XG5cblx0cHJpdmF0ZSB2YWxpZGF0ZUluaGVyaXRhbmNlKCkge1xuXHRcdGZvciAoY29uc3QgY2xhc3NTeW1ib2wgb2YgdGhpcy5vYmplY3RSZWdpc3RyeS5jbGFzc2VzLmFsbCgpKSB7XG5cdFx0XHRpZiAoY2xhc3NTeW1ib2wuc3VwZXJDbGFzcyAmJiAhdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5oYXNTeW1ib2woY2xhc3NTeW1ib2wuc3VwZXJDbGFzcykpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYFVua25vd24gc3VwZXJjbGFzcyAke2NsYXNzU3ltYm9sLnN1cGVyQ2xhc3N9YCwgY2xhc3NTeW1ib2wubm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1Byb2dyYW0oYXN0OiBBU1ROb2RlKTogdm9pZCB7XG5cdFx0Y29uc3Qgc2NvcGUgPSBuZXcgVHlwZVNjb3BlKCk7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIGFzdC5jaGlsZHJlbikge1xuXHRcdFx0dGhpcy5jaGVja1N0YXRlbWVudChub2RlLCBzY29wZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0NsYXNzZXNCb2RpZXMoKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBvYmplY3RTeW1ib2wgb2YgdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5hbGxDbGFzc1N5bWJvbHMoKSkge1xuXHRcdFx0Y29uc3QgaW5zdGFuY2VTY29wZSA9IG5ldyBUeXBlU2NvcGUoKTtcblx0XHRcdGluc3RhbmNlU2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCA9IG9iamVjdFN5bWJvbDtcblxuXHRcdFx0b2JqZWN0U3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmZvckVhY2godHlwZVBhcmFtZXRlciA9PiB7XG5cdFx0XHRcdGluc3RhbmNlU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcoXG5cdFx0XHRcdFx0dHlwZVBhcmFtZXRlci5uYW1lLFxuXHRcdFx0XHRcdG5ldyBUeXBlVmFyaWFibGUodHlwZVBhcmFtZXRlci5uYW1lKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmIChvYmplY3RTeW1ib2wuY29uc3RydWN0b3JNZXRob2RTeW1ib2wpIHtcblx0XHRcdFx0Y29uc3QgY29uc3RydWN0b3JTeW1ib2wgPSBvYmplY3RTeW1ib2wuY29uc3RydWN0b3JNZXRob2RTeW1ib2w7XG5cdFx0XHRcdGNvbnN0IGNvbnN0cnVjdG9yU2NvcGUgPSBuZXcgVHlwZVNjb3BlKGluc3RhbmNlU2NvcGUpO1xuXG5cdFx0XHRcdG9iamVjdFN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5mb3JFYWNoKHR5cGVQYXJhbWV0ZXJTeW1ib2wgPT4ge1xuXHRcdFx0XHRcdGNvbnN0cnVjdG9yU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcoXG5cdFx0XHRcdFx0XHR0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUsXG5cdFx0XHRcdFx0XHRuZXcgVHlwZVZhcmlhYmxlKHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRmb3IgKGNvbnN0IHBhcmFtZXRlclN5bWJvbCBvZiBjb25zdHJ1Y3RvclN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzKSB7XG5cdFx0XHRcdFx0Y29uc3RydWN0b3JTY29wZS5kZWZpbmVUeXBlKHBhcmFtZXRlclN5bWJvbC5uYW1lLCBwYXJhbWV0ZXJTeW1ib2wucGFyYW1ldGVyVHlwZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmNoZWNrQm9keShjb25zdHJ1Y3RvclN5bWJvbC5ib2R5LCBjb25zdHJ1Y3RvclNjb3BlKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChjb25zdCBtZXRob2RTeW1ib2wgb2Ygb2JqZWN0U3ltYm9sLmluc3RhbmNlTWV0aG9kU3ltYm9scy52YWx1ZXMoKSkge1xuXHRcdFx0XHRjb25zdCBtZXRob2RTY29wZSA9IG5ldyBUeXBlU2NvcGUoaW5zdGFuY2VTY29wZSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmZvckVhY2godHlwZVBhcmFtZXRlclN5bWJvbCA9PiB7XG5cdFx0XHRcdFx0bWV0aG9kU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcoXG5cdFx0XHRcdFx0XHR0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUsXG5cdFx0XHRcdFx0XHRuZXcgVHlwZVZhcmlhYmxlKHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRmb3IgKGNvbnN0IHBhcmFtZXRlclN5bWJvbCBvZiBtZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9scykge1xuXHRcdFx0XHRcdG1ldGhvZFNjb3BlLmRlZmluZVR5cGUocGFyYW1ldGVyU3ltYm9sLm5hbWUsIHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGhhc0JvZHkgPSBtZXRob2RTeW1ib2wuYm9keSAmJiBtZXRob2RTeW1ib2wuYm9keS5sZW5ndGggPiAwO1xuXHRcdFx0XHRpZiAoaGFzQm9keSkge1xuXHRcdFx0XHRcdGNvbnN0IGFjdHVhbCA9IHRoaXMuY2hlY2tCb2R5KG1ldGhvZFN5bWJvbC5ib2R5LCBtZXRob2RTY29wZSk7XG5cdFx0XHRcdFx0dGhpcy5jaGVja1JldHVyblR5cGUobWV0aG9kU3ltYm9sLnJldHVyblR5cGUsIGFjdHVhbCwgbWV0aG9kU3ltYm9sLm5vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoY29uc3QgbWV0aG9kU3ltYm9sIG9mIG9iamVjdFN5bWJvbC5zdGF0aWNNZXRob2RTeW1ib2xzLnZhbHVlcygpKSB7XG5cdFx0XHRcdGNvbnN0IHN0YXRpY1Njb3BlID0gbmV3IFR5cGVTY29wZShpbnN0YW5jZVNjb3BlKTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMuZm9yRWFjaCh0eXBlUGFyYW1ldGVyU3ltYm9sID0+IHtcblx0XHRcdFx0XHRzdGF0aWNTY29wZS5kZWZpbmVUeXBlQmluZGluZyhcblx0XHRcdFx0XHRcdHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSxcblx0XHRcdFx0XHRcdG5ldyBUeXBlVmFyaWFibGUodHlwZVBhcmFtZXRlclN5bWJvbC5uYW1lKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGZvciAoY29uc3QgcGFyYW1ldGVyU3ltYm9sIG9mIG1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzKSB7XG5cdFx0XHRcdFx0c3RhdGljU2NvcGUuZGVmaW5lVHlwZShwYXJhbWV0ZXJTeW1ib2wubmFtZSwgcGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgaGFzQm9keSA9IG1ldGhvZFN5bWJvbC5ib2R5ICYmIG1ldGhvZFN5bWJvbC5ib2R5Lmxlbmd0aCA+IDA7XG5cdFx0XHRcdGlmIChoYXNCb2R5KSB7XG5cdFx0XHRcdFx0Y29uc3QgYWN0dWFsID0gdGhpcy5jaGVja0JvZHkobWV0aG9kU3ltYm9sLmJvZHksIHN0YXRpY1Njb3BlKTtcblx0XHRcdFx0XHR0aGlzLmNoZWNrUmV0dXJuVHlwZShtZXRob2RTeW1ib2wucmV0dXJuVHlwZSwgYWN0dWFsLCBtZXRob2RTeW1ib2wubm9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrSW50ZXJmYWNlQm9kaWVzKCk6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qgb2JqZWN0U3ltYm9sIG9mIHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuYWxsSW50ZXJmYWNlU3ltYm9scygpKSB7XG5cdFx0XHRjb25zdCBpbnN0YW5jZVNjb3BlID0gbmV3IFR5cGVTY29wZSgpO1xuXHRcdFx0aW5zdGFuY2VTY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sID0gb2JqZWN0U3ltYm9sO1xuXG5cdFx0XHRvYmplY3RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMuZm9yRWFjaCh0eXBlUGFyYW1ldGVyID0+IHtcblx0XHRcdFx0aW5zdGFuY2VTY29wZS5kZWZpbmVUeXBlQmluZGluZyhcblx0XHRcdFx0XHR0eXBlUGFyYW1ldGVyLm5hbWUsXG5cdFx0XHRcdFx0bmV3IFR5cGVWYXJpYWJsZSh0eXBlUGFyYW1ldGVyLm5hbWUpXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Zm9yIChjb25zdCBtZXRob2RTeW1ib2wgb2Ygb2JqZWN0U3ltYm9sLmluc3RhbmNlTWV0aG9kU3ltYm9scy52YWx1ZXMoKSkge1xuXHRcdFx0XHRjb25zdCBtZXRob2RTY29wZSA9IG5ldyBUeXBlU2NvcGUoaW5zdGFuY2VTY29wZSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmZvckVhY2godHlwZVBhcmFtZXRlclN5bWJvbCA9PiB7XG5cdFx0XHRcdFx0bWV0aG9kU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcoXG5cdFx0XHRcdFx0XHR0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUsXG5cdFx0XHRcdFx0XHRuZXcgVHlwZVZhcmlhYmxlKHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRmb3IgKGNvbnN0IHBhcmFtZXRlclN5bWJvbCBvZiBtZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9scykge1xuXHRcdFx0XHRcdG1ldGhvZFNjb3BlLmRlZmluZVR5cGUocGFyYW1ldGVyU3ltYm9sLm5hbWUsIHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGhhc0JvZHkgPSBtZXRob2RTeW1ib2wuYm9keSAmJiBtZXRob2RTeW1ib2wuYm9keS5sZW5ndGggPiAwO1xuXHRcdFx0XHRpZiAoaGFzQm9keSkge1xuXHRcdFx0XHRcdGNvbnN0IGFjdHVhbCA9IHRoaXMuY2hlY2tCb2R5KG1ldGhvZFN5bWJvbC5ib2R5LCBtZXRob2RTY29wZSk7XG5cdFx0XHRcdFx0dGhpcy5jaGVja1JldHVyblR5cGUobWV0aG9kU3ltYm9sLnJldHVyblR5cGUsIGFjdHVhbCwgbWV0aG9kU3ltYm9sLm5vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0NsYXNzZXNJbXBsZW1lbnRzKCk6IHZvaWQge1xuXHRcdGZvciAoY29uc3QgY2xhc3NTeW1ib2wgb2YgdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5hbGxDbGFzc1N5bWJvbHMoKSkge1xuXHRcdFx0Zm9yIChjb25zdCBpbnRlcmZhY2VSZWZUeXBlIG9mIGNsYXNzU3ltYm9sLmltcGxlbWVudHNJbnRlcmZhY2VzKSB7XG5cdFx0XHRcdHRoaXMuY2hlY2tJbXBsZW1lbnRzSW50ZXJmYWNlKGNsYXNzU3ltYm9sLCBpbnRlcmZhY2VSZWZUeXBlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrSW1wbGVtZW50c0ludGVyZmFjZShjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wsIGludGVyZmFjZVJlZlR5cGU6IEludGVyZmFjZVJlZlR5cGUpOiB2b2lkIHtcblx0XHRjb25zdCBpbnRlcmZhY2VTeW1ib2wgPSBpbnRlcmZhY2VSZWZUeXBlLmludGVyZmFjZVN5bWJvbDtcblxuXHRcdGNvbnN0IHN1YnN0aXR1dGlvbk1hcCA9IGJ1aWxkVHlwZVN1YnN0aXR1dGlvbk1hcChcblx0XHRcdGludGVyZmFjZVN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scyxcblx0XHRcdGludGVyZmFjZVJlZlR5cGUudHlwZUFyZ3VtZW50c1xuXHRcdCk7XG5cblx0XHRmb3IgKGNvbnN0IGludGVyZmFjZU1ldGhvZFN5bWJvbCBvZiBpbnRlcmZhY2VTeW1ib2wuaW5zdGFuY2VNZXRob2RTeW1ib2xzLnZhbHVlcygpKSB7XG5cdFx0XHRjb25zdCBjbGFzc01ldGhvZFN5bWJvbCA9IHRoaXMucmVzb2x2ZUluc3RhbmNlTWV0aG9kZShcblx0XHRcdFx0Y2xhc3NTeW1ib2wsXG5cdFx0XHRcdGludGVyZmFjZU1ldGhvZFN5bWJvbC5uYW1lXG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAoIWNsYXNzTWV0aG9kU3ltYm9sKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKFxuXHRcdFx0XHRcdGBDbGFzcyAke2NsYXNzU3ltYm9sLm5hbWV9IGRvZXMgbm90IGltcGxlbWVudCBtZXRob2QgJHtpbnRlcmZhY2VNZXRob2RTeW1ib2wubmFtZX0gZnJvbSBpbnRlcmZhY2UgJHtpbnRlcmZhY2VTeW1ib2wubmFtZX1gLFxuXHRcdFx0XHRcdGNsYXNzU3ltYm9sLm5vZGVcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5jaGVja01ldGhvZENvbXBhdGliaWxpdHkoXG5cdFx0XHRcdGNsYXNzTWV0aG9kU3ltYm9sLFxuXHRcdFx0XHRpbnRlcmZhY2VNZXRob2RTeW1ib2wsXG5cdFx0XHRcdHN1YnN0aXR1dGlvbk1hcFxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrTWV0aG9kQ29tcGF0aWJpbGl0eShjbGFzc01ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sLCBpbnRlcmZhY2VNZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCwgc3Vic3RpdHV0aW9uTWFwOiBNYXA8c3RyaW5nLCBUeXBlPik6IHZvaWQge1xuXHRcdGlmIChjbGFzc01ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aCAhPT0gaW50ZXJmYWNlTWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgTWV0aG9kICR7Y2xhc3NNZXRob2RTeW1ib2wubmFtZX0gaGFzIHdyb25nIHBhcmFtZXRlciBjb3VudGApO1xuXHRcdH1cblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgaW50ZXJmYWNlTWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHBhcmFtZXRlclN5bWJvbDogUGFyYW1ldGVyU3ltYm9sIHwgbnVsbCA9IGludGVyZmFjZU1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzW2ldIHx8IG51bGw7XG5cblx0XHRcdGlmICghcGFyYW1ldGVyU3ltYm9sKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBNZXRob2QgJHtjbGFzc01ldGhvZFN5bWJvbC5uYW1lfSBoYXMgdG9vIG1hbnkgcGFyYW1ldGVyc2ApO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZXhwZWN0ZWRUeXBlOiBUeXBlID0gc3Vic3RpdHV0ZVR5cGUocGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGUsIHN1YnN0aXR1dGlvbk1hcCk7XG5cblx0XHRcdGNvbnN0IGFjdHVhbFR5cGU6IFR5cGUgPSBwYXJhbWV0ZXJTeW1ib2wucGFyYW1ldGVyVHlwZTtcblxuXHRcdFx0aWYgKCFleHBlY3RlZFR5cGUuYWNjZXB0cyhhY3R1YWxUeXBlKSkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgUGFyYW1ldGVyICR7aSArIDF9IG9mICR7Y2xhc3NNZXRob2RTeW1ib2wubmFtZX0gaW5jb21wYXRpYmxlIHdpdGggaW50ZXJmYWNlYCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgZXhwZWN0ZWRSZXR1cm46IFR5cGUgPSBzdWJzdGl0dXRlVHlwZShpbnRlcmZhY2VNZXRob2RTeW1ib2wucmV0dXJuVHlwZSwgc3Vic3RpdHV0aW9uTWFwKTtcblxuXHRcdGlmICghZXhwZWN0ZWRSZXR1cm4uYWNjZXB0cyhjbGFzc01ldGhvZFN5bWJvbC5yZXR1cm5UeXBlKSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFJldHVybiB0eXBlIG9mICR7Y2xhc3NNZXRob2RTeW1ib2wubmFtZX0gaW5jb21wYXRpYmxlIHdpdGggaW50ZXJmYWNlYCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1N0YXRlbWVudChub2RlOiBBU1ROb2RlLCBzY29wZTogVHlwZVNjb3BlKTogU3RhdGVtZW50UmVzdWx0IHtcblx0XHRzd2l0Y2ggKG5vZGUudHlwZSkge1xuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5SRVRVUk46XG5cdFx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUUmV0dXJuTm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiBTdGF0ZW1lbnRSZXN1bHQud2l0aFJldHVybihcblx0XHRcdFx0XHRcdHRoaXMuY2hlY2tFeHByZXNzaW9uKG5vZGUuYXJndW1lbnQsIHNjb3BlKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLlZBUklBQkxFOlxuXHRcdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVFZhcmlhYmxlTm9kZSkge1xuXHRcdFx0XHRcdHRoaXMuY2hlY2tWYXJpYWJsZShub2RlLCBzY29wZSk7XG5cdFx0XHRcdFx0cmV0dXJuIFN0YXRlbWVudFJlc3VsdC5ub1JldHVybigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5GT1JFQUNIOlxuXHRcdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEZvcmVhY2hOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFN0YXRlbWVudFJlc3VsdC53aXRoUmV0dXJuKFxuXHRcdFx0XHRcdFx0dGhpcy5jaGVja0ZvcmVhY2gobm9kZSwgc2NvcGUpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuRVhQUkVTU0lPTjpcblx0XHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RFeHByZXNzaW9uTm9kZSkge1xuXHRcdFx0XHRcdHRoaXMuY2hlY2tFeHByZXNzaW9uKG5vZGUuZXhwciwgc2NvcGUpO1xuXHRcdFx0XHRcdHJldHVybiBTdGF0ZW1lbnRSZXN1bHQubm9SZXR1cm4oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRyZXR1cm4gU3RhdGVtZW50UmVzdWx0Lm5vUmV0dXJuKCk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrVmFyaWFibGUobm9kZTogQVNUVmFyaWFibGVOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogdm9pZCB7XG5cdFx0Y29uc3QgZGVjbGFyZWRUeXBlOiBUeXBlIHwgbnVsbCA9IG5vZGUudHlwZUFubm90YXRpb25cblx0XHRcdD8gdGhpcy53cmFwVHlwZShub2RlLnR5cGVBbm5vdGF0aW9uLCBzY29wZSlcblx0XHRcdDogbnVsbDtcblxuXHRcdGNvbnN0IGFjdHVhbFR5cGU6IFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLmluaXQsIHNjb3BlLCBkZWNsYXJlZFR5cGUpO1xuXG5cdFx0aWYgKGRlY2xhcmVkVHlwZSAmJiAhZGVjbGFyZWRUeXBlLmFjY2VwdHMoYWN0dWFsVHlwZSkpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBUeXBlIG1pc21hdGNoOiAke2RlY2xhcmVkVHlwZX0gPD4gJHthY3R1YWxUeXBlfWAsIG5vZGUpO1xuXHRcdH1cblxuXHRcdHNjb3BlLmRlZmluZVR5cGUobm9kZS5uYW1lLCBkZWNsYXJlZFR5cGUgPz8gYWN0dWFsVHlwZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrRm9yZWFjaChub2RlOiBBU1RGb3JlYWNoTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGxldCBpdGVyYWJsZVR5cGU6IFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLml0ZXJhYmxlLCBzY29wZSk7XG5cblx0XHRpdGVyYWJsZVR5cGUgPSBBdXRvYm94aW5nLmF1dG9ib3hJZk5lZWRlZChpdGVyYWJsZVR5cGUsIHRoaXMub2JqZWN0UmVnaXN0cnkpO1xuXG5cdFx0aWYgKGl0ZXJhYmxlVHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSAmJiBpdGVyYWJsZVR5cGUuY2xhc3NTeW1ib2wubmFtZSA9PT0gJ0FycmF5Jykge1xuXHRcdFx0aWYgKGl0ZXJhYmxlVHlwZS50eXBlQXJndW1lbnRzLmxlbmd0aCAhPT0gMSkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcignQXJyYXkgaW4gZm9yZWFjaCBtdXNzdCBoYXZlIGV4YWN0bHkgb25lIHR5cGUgYXJndW1lbnQuJywgbm9kZS5pdGVyYWJsZSk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGVsZW1lbnRUeXBlOiBUeXBlIHwgbnVsbCA9IGl0ZXJhYmxlVHlwZS50eXBlQXJndW1lbnRzWzBdIHx8IG51bGw7XG5cblx0XHRcdGlmIChlbGVtZW50VHlwZSA9PT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcignQXJyYXkgaW4gZm9yZWFjaCBtdXN0IGhhdmUgZXhhY3RseSBvbmUgdHlwZSBhcmd1bWVudC4nLCBub2RlLml0ZXJhYmxlKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgbG9vcFNjb3BlID0gbmV3IFR5cGVTY29wZShzY29wZSk7XG5cdFx0XHRsb29wU2NvcGUuZGVmaW5lVHlwZShub2RlLml0ZXJhdG9yLCBlbGVtZW50VHlwZSk7XG5cblx0XHRcdHJldHVybiB0aGlzLmNoZWNrQm9keShub2RlLmJvZHksIGxvb3BTY29wZSk7XG5cblx0XHR9XG5cblx0XHR0aGlzLnR5cGVFcnJvcihgZm9yZWFjaCBleHBlY3RzIEFycmF5PFQ+LCBnb3QgJHtpdGVyYWJsZVR5cGUudG9TdHJpbmcoKX1gLCBub2RlLml0ZXJhYmxlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tFeHByZXNzaW9uKGV4cHI6IEFTVE5vZGUgfCBudWxsLCBzY29wZTogVHlwZVNjb3BlLCBleHBlY3RlZFR5cGU6IFR5cGUgfCBudWxsID0gbnVsbCk6IFR5cGUge1xuXHRcdGlmIChleHByID09PSBudWxsKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcignRXhwcmVzc2lvbiBleHBlY3RlZCwgZ290IG51bGwuJywgZXhwcik7XG5cdFx0fVxuXG5cdFx0c3dpdGNoIChleHByLnR5cGUpIHtcblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuTlVNQkVSOlxuXHRcdFx0XHRyZXR1cm4gVHlwZXMuTlVNQkVSO1xuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLlNUUklORzpcblx0XHRcdFx0cmV0dXJuIFR5cGVzLlNUUklORztcblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5CT09MRUFOOlxuXHRcdFx0XHRyZXR1cm4gVHlwZXMuQk9PTEVBTjtcblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5OVUxMOlxuXHRcdFx0XHRyZXR1cm4gVHlwZXMuTlVMTDtcblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5WRE9NOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUVkRvbU5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja1ZEb21Ob2RlKGV4cHIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkFSUkFZOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQXJyYXlOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tBcnJheUV4cHJlc3Npb24oZXhwciwgc2NvcGUsIGV4cGVjdGVkVHlwZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuSU5ERVg6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RJbmRleE5vZGUpIHtcblx0XHRcdFx0XHRjb25zdCBvYmplY3RUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24oZXhwci5vYmplY3QsIHNjb3BlKTtcblx0XHRcdFx0XHRjb25zdCBpbmRleCA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKGV4cHIuaW5kZXgsIHNjb3BlKTtcblxuXHRcdFx0XHRcdGlmIChvYmplY3RUeXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gb2JqZWN0VHlwZS50eXBlQXJndW1lbnRzWzBdIHx8IFR5cGVzLk1JWEVEO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgaW5kZXggJHtvYmplY3RUeXBlLm5hbWV9IHdpdGggJHtpbmRleC5uYW1lfWAsIGV4cHIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLlVOQVJZOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUVW5hcnlOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tVbmFyeUV4cHJlc3Npb24oZXhwciwgc2NvcGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLk1FTUJFUjoge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja01lbWJlckV4cHJlc3Npb24oZXhwciwgc2NvcGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLlRISVM6IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tUaGlzRXhwcmVzc2lvbihleHByLCBzY29wZSk7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuSURFTlRJRklFUjpcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tJZGVudGlmaWVyRXhwcmVzc2lvbihleHByLCBzY29wZSk7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuTkVXOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTmV3Tm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrTmV3RXhwcmVzc2lvbihleHByLCBzY29wZSwgZXhwZWN0ZWRUeXBlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5CSU5BUlk6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RCaW5hcnlOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tCaW5hcnlFeHByZXNzaW9uKGV4cHIsIHNjb3BlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5MQU1CREE6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RMYW1iZGFOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tMYW1iZGFFeHByZXNzaW9uKGV4cHIsIHNjb3BlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5DQUxMOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQ2FsbE5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0NhbGxFeHByZXNzaW9uKGV4cHIsIHNjb3BlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gVHlwZXMuTUlYRUQ7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQmluYXJ5RXhwcmVzc2lvbihleHByOiBBU1RCaW5hcnlOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0Y29uc3QgbGVmdDogVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKGV4cHIubGVmdCwgc2NvcGUpO1xuXHRcdGNvbnN0IHJpZ2h0OiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24oZXhwci5yaWdodCwgc2NvcGUpO1xuXHRcdGNvbnN0IG9wOiBzdHJpbmcgPSBleHByLm9wZXJhdG9yO1xuXG5cdFx0aWYgKEdSQU1NQVIuQVJJVEhNRVRJQy5pbmNsdWRlcyhvcCkpIHtcblx0XHRcdGlmIChsZWZ0LmFjY2VwdHMoVHlwZXMuTlVNQkVSKSAmJiByaWdodC5hY2NlcHRzKFR5cGVzLk5VTUJFUikpIHtcblx0XHRcdFx0cmV0dXJuIFR5cGVzLk5VTUJFUjtcblx0XHRcdH1cblx0XHRcdGlmIChsZWZ0LmFjY2VwdHMoVHlwZXMuU1RSSU5HKSB8fCByaWdodC5hY2NlcHRzKFR5cGVzLlNUUklORykpIHtcblx0XHRcdFx0cmV0dXJuIFR5cGVzLlNUUklORztcblx0XHRcdH1cblx0XHRcdHRoaXMudHlwZUVycm9yKGBBcml0aG1ldGljIG9wZXJhdG9yICcke29wfScgcmVxdWlyZXMgbnVtYmVyc2AsIGV4cHIpO1xuXHRcdH1cblxuXHRcdGlmIChHUkFNTUFSLkNPTVBBUklTT04uaW5jbHVkZXMob3ApKSB7XG5cdFx0XHRpZiAobGVmdC5hY2NlcHRzKFR5cGVzLk5VTUJFUikgJiYgcmlnaHQuYWNjZXB0cyhUeXBlcy5OVU1CRVIpKSB7XG5cdFx0XHRcdHJldHVybiBUeXBlcy5CT09MRUFOO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENvbXBhcmlzb24gJyR7b3B9JyByZXF1aXJlcyBudW1iZXJzYCwgZXhwcik7XG5cdFx0fVxuXG5cdFx0aWYgKEdSQU1NQVIuRVFVQUxJVFkuaW5jbHVkZXMob3ApKSB7XG5cdFx0XHRpZiAobGVmdC5hY2NlcHRzKHJpZ2h0KSkge1xuXHRcdFx0XHRyZXR1cm4gVHlwZXMuQk9PTEVBTjtcblx0XHRcdH1cblx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgY29tcGFyZSAke2xlZnQubmFtZX0gd2l0aCAke3JpZ2h0Lm5hbWV9YCwgZXhwcik7XG5cdFx0fVxuXG5cdFx0aWYgKEdSQU1NQVIuTE9HSUNBTC5pbmNsdWRlcyhvcCkpIHtcblx0XHRcdGlmIChsZWZ0LmFjY2VwdHMoVHlwZXMuQk9PTEVBTikgJiYgcmlnaHQuYWNjZXB0cyhUeXBlcy5CT09MRUFOKSkge1xuXHRcdFx0XHRyZXR1cm4gVHlwZXMuQk9PTEVBTjtcblx0XHRcdH1cblx0XHRcdHRoaXMudHlwZUVycm9yKGBMb2dpY2FsIG9wZXJhdG9yICcke29wfScgcmVxdWlyZXMgYm9vbGVhbnNgLCBleHByKTtcblx0XHR9XG5cblx0XHR0aGlzLnR5cGVFcnJvcihgSW52YWxpZCBiaW5hcnkgb3BlcmF0aW9uYCwgZXhwcik7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrRmllbGRBY2Nlc3Mobm9kZTogQVNUTWVtYmVyTm9kZSwgY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sLCBmaWVsZFN5bWJvbDogRmllbGRTeW1ib2wsIHNjb3BlOiBUeXBlU2NvcGUpOiB2b2lkIHtcblx0XHRpZiAoZmllbGRTeW1ib2wuaXNQdWJsaWMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIXNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgYWNjZXNzIHByaXZhdGUgbWVtYmVyICR7bm9kZS5wcm9wZXJ0eX0gb2YgJHtjbGFzc1N5bWJvbC5uYW1lfWAsIG5vZGUpO1xuXHRcdH1cblxuXHRcdGlmIChzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sICE9PSBmaWVsZFN5bWJvbC5vd25lcikge1xuXHRcdFx0aWYgKHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgaW5zdGFuY2VvZiBDbGFzc1N5bWJvbFxuXHRcdFx0XHQmJiBzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sLnN1cGVyQ2xhc3NTeW1ib2wgIT09IGZpZWxkU3ltYm9sLm93bmVyKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgYWNjZXNzIHByaXZhdGUgbWVtYmVyICR7bm9kZS5wcm9wZXJ0eX0gb2YgJHtjbGFzc1N5bWJvbC5uYW1lfWAsIG5vZGUpO1xuXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0luc3RhbmNlTWV0aG9kQWNjZXNzKG5vZGU6IEFTVE1lbWJlck5vZGUsIGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCwgbWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wsIHNjb3BlOiBUeXBlU2NvcGUpOiB2b2lkIHtcblx0XHRpZiAobWV0aG9kU3ltYm9sLmlzUHVibGljKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCFzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGFjY2VzcyBwcml2YXRlIG1ldGhvZCAke25vZGUucHJvcGVydHl9IG9mICR7Y2xhc3NTeW1ib2wubmFtZX1gLCBub2RlKTtcblx0XHR9XG5cblx0XHRpZiAoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCAhPT0gbWV0aG9kU3ltYm9sLm93bmVyKSB7XG5cdFx0XHRpZiAoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCBpbnN0YW5jZW9mIENsYXNzU3ltYm9sXG5cdFx0XHRcdCYmIHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wuc3VwZXJDbGFzc1N5bWJvbCAhPT0gbWV0aG9kU3ltYm9sLm93bmVyKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgYWNjZXNzIHByaXZhdGUgbWV0aG9kICR7bm9kZS5wcm9wZXJ0eX0gb2YgJHtjbGFzc1N5bWJvbC5uYW1lfWAsIG5vZGUpO1xuXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1N0YXRpY01ldGhvZEFjY2VzcyhjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wsIG1ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sLCBzY29wZTogVHlwZVNjb3BlKTogdm9pZCB7XG5cdFx0aWYgKCFtZXRob2RTeW1ib2wuaXNTdGF0aWMpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgY2FsbCBpbnN0YW5jZSBtZXRob2QgJHtjbGFzc1N5bWJvbC5uYW1lfS4ke21ldGhvZFN5bWJvbC5uYW1lfSBhcyBzdGF0aWMgbWV0aG9kYCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKG1ldGhvZFN5bWJvbC5pc1B1YmxpYykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICghc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBhY2Nlc3MgcHJpdmF0ZSBtZXRob2QgJHttZXRob2RTeW1ib2wubmFtZX0gb2YgJHtjbGFzc1N5bWJvbC5uYW1lfWAsXG5cdFx0XHQgICAgICAgICAgICAgICBtZXRob2RTeW1ib2wubm9kZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgIT09IG1ldGhvZFN5bWJvbC5vd25lcikge1xuXHRcdFx0aWYgKHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgaW5zdGFuY2VvZiBDbGFzc1N5bWJvbFxuXHRcdFx0XHQmJiBzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sLnN1cGVyQ2xhc3NTeW1ib2wgIT09IG1ldGhvZFN5bWJvbC5vd25lcikge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGFjY2VzcyBwcml2YXRlIG1ldGhvZCAke21ldGhvZFN5bWJvbC5uYW1lfSBvZiAke2NsYXNzU3ltYm9sLm5hbWV9YCxcblx0XHRcdFx0ICAgICAgICAgICAgICAgbWV0aG9kU3ltYm9sLm5vZGUpO1xuXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja01lbWJlckV4cHJlc3Npb24obm9kZTogQVNUTWVtYmVyTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGNvbnN0IG9iamVjdFR5cGU6IFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLm9iamVjdCwgc2NvcGUpO1xuXG5cdFx0aWYgKG9iamVjdFR5cGUgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUpIHtcblx0XHRcdGNvbnN0IGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCA9IG9iamVjdFR5cGUuY2xhc3NTeW1ib2w7XG5cblx0XHRcdGNvbnN0IGluc3RhbmNlRmllbGRTeW1ib2w6IEZpZWxkU3ltYm9sIHwgbnVsbCA9IGNsYXNzU3ltYm9sLnJlc29sdmVJbnN0YW5jZUZpZWxkU3ltYm9sKG5vZGUucHJvcGVydHkpO1xuXHRcdFx0aWYgKGluc3RhbmNlRmllbGRTeW1ib2wpIHtcblx0XHRcdFx0dGhpcy5jaGVja0ZpZWxkQWNjZXNzKG5vZGUsIGNsYXNzU3ltYm9sLCBpbnN0YW5jZUZpZWxkU3ltYm9sLCBzY29wZSk7XG5cdFx0XHRcdHJldHVybiBpbnN0YW5jZUZpZWxkU3ltYm9sLmZpZWxkVHlwZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc3RhdGljRmllbGRTeW1ib2w6IEZpZWxkU3ltYm9sIHwgbnVsbCA9IGNsYXNzU3ltYm9sLnJlc29sdmVTdGF0aWNGaWVsZFN5bWJvbChub2RlLnByb3BlcnR5KTtcblx0XHRcdGlmIChzdGF0aWNGaWVsZFN5bWJvbCkge1xuXHRcdFx0XHR0aGlzLmNoZWNrRmllbGRBY2Nlc3Mobm9kZSwgY2xhc3NTeW1ib2wsIHN0YXRpY0ZpZWxkU3ltYm9sLCBzY29wZSk7XG5cdFx0XHRcdHJldHVybiBzdGF0aWNGaWVsZFN5bWJvbC5maWVsZFR5cGU7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMudHlwZUVycm9yKGBVbmtub3duIG1lbWJlciAke25vZGUucHJvcGVydHl9YCwgbm9kZSk7XG5cdFx0fVxuXG5cdFx0dGhpcy50eXBlRXJyb3IoXCJDYW5ub3QgYWNjZXNzIG1lbWJlciBvZiBub24tb2JqZWN0XCIsIG5vZGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1RoaXNFeHByZXNzaW9uKG5vZGU6IEFTVE5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBDbGFzc1JlZlR5cGUge1xuXHRcdGlmIChzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sIGluc3RhbmNlb2YgQ2xhc3NTeW1ib2wpIHtcblx0XHRcdHJldHVybiBuZXcgQ2xhc3NSZWZUeXBlKHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wpO1xuXHRcdH1cblx0XHR0aGlzLnR5cGVFcnJvcigndGhpcyBvdXRzaWRlIG9mIGNsYXNzJywgbm9kZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrSWRlbnRpZmllckV4cHJlc3Npb24obm9kZTogQVNUTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGlmIChzY29wZS5oYXNUeXBlKG5vZGUubmFtZSkpIHtcblx0XHRcdHJldHVybiBzY29wZS5nZXRUeXBlKG5vZGUubmFtZSk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmhhc1N5bWJvbChub2RlLm5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENsYXNzUmVmVHlwZSh0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKG5vZGUubmFtZSkpO1xuXHRcdH1cblx0XHR0aGlzLnR5cGVFcnJvcihgVW5kZWZpbmVkIGlkZW50aWZpZXIgJHtub2RlLm5hbWV9YCwgbm9kZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrTmV3RXhwcmVzc2lvbihub2RlOiBBU1ROZXdOb2RlLCBzY29wZTogVHlwZVNjb3BlLCBleHBlY3RlZFR5cGU6IFR5cGUgfCBudWxsID0gbnVsbCk6IENsYXNzUmVmVHlwZSB7XG5cdFx0Y29uc3QgY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sID0gdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChub2RlLm5hbWUpO1xuXG5cdFx0bGV0IGluc3RhbmNlVHlwZTtcblx0XHRpZiAobm9kZS50eXBlQW5ub3RhdGlvbi50eXBlQXJndW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHRcdGNvbnN0IHR5cGVBcmd1bWVudHMgPSBub2RlXG5cdFx0XHRcdC50eXBlQW5ub3RhdGlvblxuXHRcdFx0XHQudHlwZUFyZ3VtZW50c1xuXHRcdFx0XHQubWFwKHR5cGVBcmd1bWVudCA9PiB0aGlzLndyYXBUeXBlKHR5cGVBcmd1bWVudCwgc2NvcGUpKTtcblxuXHRcdFx0aWYgKHR5cGVBcmd1bWVudHMubGVuZ3RoICE9PSBjbGFzc1N5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5sZW5ndGgpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYFdyb25nIG51bWJlciBvZiB0eXBlIGFyZ3VtZW50c2AsIG5vZGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRpbnN0YW5jZVR5cGUgPSBuZXcgQ2xhc3NSZWZUeXBlKGNsYXNzU3ltYm9sLCB0eXBlQXJndW1lbnRzKTtcblx0XHR9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSkge1xuXHRcdFx0aW5zdGFuY2VUeXBlID0gZXhwZWN0ZWRUeXBlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpbnN0YW5jZVR5cGUgPSBuZXcgQ2xhc3NSZWZUeXBlKFxuXHRcdFx0XHRjbGFzc1N5bWJvbCxcblx0XHRcdFx0Y2xhc3NTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMubWFwKCgpID0+IFR5cGVzLk1JWEVEKVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAoY2xhc3NTeW1ib2wuY29uc3RydWN0b3JNZXRob2RTeW1ib2wpIHtcblx0XHRcdHRoaXMuY2hlY2tDYWxsQXJndW1lbnRzKGNsYXNzU3ltYm9sLmNvbnN0cnVjdG9yTWV0aG9kU3ltYm9sLCBub2RlLmFyZ3VtZW50cywgc2NvcGUpO1xuXHRcdH1cblxuXHRcdGlmIChleHBlY3RlZFR5cGUgJiYgIWV4cGVjdGVkVHlwZS5hY2NlcHRzKGluc3RhbmNlVHlwZSkpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBUeXBlIG1pc21hdGNoOiAke2V4cGVjdGVkVHlwZX0gPD4gJHtpbnN0YW5jZVR5cGV9YCwgbm9kZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGluc3RhbmNlVHlwZTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tBcnJheUV4cHJlc3Npb24obm9kZTogQVNUQXJyYXlOb2RlLCBzY29wZTogVHlwZVNjb3BlLCBleHBlY3RlZFR5cGU6IFR5cGUgfCBudWxsID0gbnVsbCk6IENsYXNzUmVmVHlwZSB7XG5cblx0XHRpZiAobm9kZS5lbGVtZW50cy5sZW5ndGggPT09IDApIHtcblx0XHRcdGlmIChleHBlY3RlZFR5cGUgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUpIHtcblx0XHRcdFx0ZXhwZWN0ZWRUeXBlID0gZXhwZWN0ZWRUeXBlLnR5cGVBcmd1bWVudHNbMF0gfHwgbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXMubmV3QXJyYXlUeXBlT2YoZXhwZWN0ZWRUeXBlIHx8IFR5cGVzLk1JWEVEKTtcblx0XHR9XG5cblx0XHRjb25zdCBjbGFzc1JlZk5hbWUgPSBQcmltaXRpdmVDbGFzc1R5cGVzLmdldENsYXNzUmVmTmFtZShQcmltaXRpdmVDbGFzc1R5cGVzLkFSUkFZKTtcblxuXHRcdGxldCBleHBlY3RlZFR5cGVPZkl0ZW06IFR5cGU7XG5cdFx0aWYgKGV4cGVjdGVkVHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSAmJiBleHBlY3RlZFR5cGUuY2xhc3NTeW1ib2wubmFtZSA9PT0gY2xhc3NSZWZOYW1lKSB7XG5cdFx0XHRleHBlY3RlZFR5cGVPZkl0ZW0gPSBleHBlY3RlZFR5cGUudHlwZUFyZ3VtZW50c1swXSB8fCBUeXBlcy5NSVhFRDtcblx0XHR9IGVsc2UgaWYgKG5vZGUuZWxlbWVudHNbMF0pIHtcblx0XHRcdGV4cGVjdGVkVHlwZU9mSXRlbSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKG5vZGUuZWxlbWVudHNbMF0sIHNjb3BlLCBleHBlY3RlZFR5cGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcignQXJyYXkgZXhwcmVzc2lvbiBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIGVsZW1lbnQnLCBub2RlKTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGl0ZW0gb2Ygbm9kZS5lbGVtZW50cykge1xuXHRcdFx0Y29uc3QgYWN0dWFsVHlwZU9mSXRlbTogVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKGl0ZW0sIHNjb3BlLCBleHBlY3RlZFR5cGVPZkl0ZW0pO1xuXHRcdFx0aWYgKCFleHBlY3RlZFR5cGVPZkl0ZW0uYWNjZXB0cyhhY3R1YWxUeXBlT2ZJdGVtKSkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihcblx0XHRcdFx0XHRgQXJyYXkgZWxlbWVudHMgbXVzdCBoYXZlIHNhbWUgdHlwZSwgZ290ICR7ZXhwZWN0ZWRUeXBlT2ZJdGVtfSBhbmQgJHthY3R1YWxUeXBlT2ZJdGVtfWAsXG5cdFx0XHRcdFx0bm9kZVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLm5ld0FycmF5VHlwZU9mKGV4cGVjdGVkVHlwZU9mSXRlbSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrVW5hcnlFeHByZXNzaW9uKG5vZGU6IEFTVFVuYXJ5Tm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGNvbnN0IG9wZXJhbmQgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLmFyZ3VtZW50LCBzY29wZSk7XG5cdFx0Y29uc3Qgb3AgPSBub2RlLm9wZXJhdG9yO1xuXHRcdGlmIChvcCA9PT0gR1JBTU1BUi5FWENMQU1BVElPTl9NQVJLKSB7XG5cdFx0XHRpZiAob3BlcmFuZC5lcXVhbHMoVHlwZXMuQk9PTEVBTikpIHtcblx0XHRcdFx0cmV0dXJuIFR5cGVzLkJPT0xFQU47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgVW5hcnkgJyEnIHJlcXVpcmVzIGJvb2xlYW4sIGdvdCAke29wZXJhbmQubmFtZX1gLCBub2RlKTtcblx0XHR9XG5cdFx0dGhpcy50eXBlRXJyb3IoYEludmFsaWQgdW5hcnkgb3BlcmF0b3IgJHtvcH1gLCBub2RlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tMYW1iZGFFeHByZXNzaW9uKG5vZGU6IEFTVExhbWJkYU5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBMYW1iZGFUeXBlIHtcblx0XHRjb25zdCBsYW1iZGFTY29wZSA9IG5ldyBUeXBlU2NvcGUoc2NvcGUpO1xuXHRcdGNvbnN0IHBhcmFtZXRlcnM6IFBhcmFtZXRlclN5bWJvbFtdID0gbm9kZS5wYXJhbWV0ZXJzLm1hcCgocGFyYW1ldGVyTm9kZTogQVNUUGFyYW1ldGVyTm9kZSk6IFBhcmFtZXRlclN5bWJvbCA9PiB7XG5cdFx0XHRjb25zdCBwYXJhbWV0ZXJTeW1ib2w6IFBhcmFtZXRlclN5bWJvbCA9IHRoaXMucGFyYW1ldGVyTm9kZVRvU3ltYm9sKHBhcmFtZXRlck5vZGUpO1xuXG5cdFx0XHRsYW1iZGFTY29wZS5kZWZpbmVUeXBlKHBhcmFtZXRlck5vZGUubmFtZSwgcGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGUpO1xuXG5cdFx0XHRyZXR1cm4gcGFyYW1ldGVyU3ltYm9sO1xuXHRcdH0pO1xuXG5cdFx0aWYgKG5vZGUuY2hpbGRyZW5bMF0pIHtcblx0XHRcdHJldHVybiBuZXcgTGFtYmRhVHlwZShwYXJhbWV0ZXJzLCB0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLmNoaWxkcmVuWzBdLCBsYW1iZGFTY29wZSkpO1xuXHRcdH1cblxuXHRcdHRoaXMudHlwZUVycm9yKCdMYW1iZGEgZXhwcmVzc2lvbiBtdXN0IGhhdmUgYSByZXR1cm4gdHlwZScsIG5vZGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0NhbGxFeHByZXNzaW9uKG5vZGU6IEFTVENhbGxOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0Y29uc3QgY2FsbGVlID0gbm9kZS5jYWxsZWU7XG5cblx0XHRpZiAoY2FsbGVlLnR5cGUgPT09IEFTVE5vZGVUeXBlLklERU5USUZJRVIgJiYgY2FsbGVlLm5hbWUgPT09IEdSQU1NQVIuU1VQRVIpIHtcblx0XHRcdHJldHVybiB0aGlzLmNoZWNrU3VwZXJDb25zdHJ1Y3RvckNhbGwobm9kZSwgc2NvcGUpO1xuXHRcdH1cblxuXHRcdC8vIENsYXNzLm1ldGhvZCgpXG5cdFx0aWYgKGNhbGxlZSBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGVcblx0XHRcdCYmIGNhbGxlZS5vYmplY3QudHlwZSA9PT0gQVNUTm9kZVR5cGUuSURFTlRJRklFUlxuXHRcdFx0JiYgdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5oYXNTeW1ib2woY2FsbGVlLm9iamVjdC5uYW1lKVxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tTdGF0aWNDYWxsKFxuXHRcdFx0XHRjYWxsZWUub2JqZWN0Lm5hbWUsXG5cdFx0XHRcdGNhbGxlZS5wcm9wZXJ0eSxcblx0XHRcdFx0bm9kZS5hcmd1bWVudHMsXG5cdFx0XHRcdHNjb3BlXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIGV4cHIubWV0aG9kKClcblx0XHRpZiAoY2FsbGVlIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tJbnN0YW5jZUNhbGwoY2FsbGVlLCBub2RlLmFyZ3VtZW50cywgc2NvcGUpO1xuXHRcdH1cblxuXHRcdGlmIChjYWxsZWUgaW5zdGFuY2VvZiBBU1RMYW1iZGFOb2RlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jaGVja0xhbWJkYUNhbGwodGhpcy5jaGVja0xhbWJkYUV4cHJlc3Npb24oY2FsbGVlLCBzY29wZSksIG5vZGUuYXJndW1lbnRzLCBzY29wZSk7XG5cdFx0fVxuXG5cdFx0Ly8gSWRlbnRpZmllcjogVmFyaWFibGUgLyBMYW1iZGFcblx0XHRpZiAoY2FsbGVlLnR5cGUgPT09IEFTVE5vZGVUeXBlLklERU5USUZJRVIpIHtcblx0XHRcdGlmIChzY29wZS5oYXNUeXBlKGNhbGxlZS5uYW1lKSkge1xuXHRcdFx0XHRjb25zdCB0eXBlID0gc2NvcGUuZ2V0VHlwZShjYWxsZWUubmFtZSk7XG5cdFx0XHRcdGlmICh0eXBlIGluc3RhbmNlb2YgTGFtYmRhVHlwZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrTGFtYmRhQ2FsbCh0eXBlLCBub2RlLmFyZ3VtZW50cywgc2NvcGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgY2FsbCBub24tZnVuY3Rpb24gJHtjYWxsZWUubmFtZX1gLCBub2RlKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRmFsbGJhY2s6IGdsb2JhbGUgRnVua3Rpb25cblx0XHRcdHJldHVybiB0aGlzLmNoZWNrRnVuY3Rpb25DYWxsKGNhbGxlZS5uYW1lLCBub2RlLmFyZ3VtZW50cywgc2NvcGUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBUeXBlcy5NSVhFRDtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tTdXBlckNvbnN0cnVjdG9yQ2FsbChub2RlOiBBU1RDYWxsTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGNvbnN0IGN1cnJlbnRDbGFzcyA9IHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2w7XG5cblx0XHRpZiAoIShjdXJyZW50Q2xhc3MgaW5zdGFuY2VvZiBDbGFzc1N5bWJvbCkpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKCdzdXBlcigpIHVzZWQgb3V0c2lkZSBvZiBjbGFzcycsIG5vZGUpO1xuXHRcdH1cblxuXHRcdGlmICghY3VycmVudENsYXNzLnN1cGVyQ2xhc3MpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKCdzdXBlcigpIHVzZWQgb3V0c2lkZSBvZiBjbGFzcyBoaWVyYXJjaHknLCBub2RlKTtcblx0XHR9XG5cblx0XHRjb25zdCBzdXBlclN5bWJvbDogQ2xhc3NTeW1ib2wgPSB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKGN1cnJlbnRDbGFzcy5zdXBlckNsYXNzKTtcblx0XHRpZiAoIXN1cGVyU3ltYm9sLmNvbnN0cnVjdG9yTWV0aG9kU3ltYm9sKSB7XG5cdFx0XHRpZiAobm9kZS5hcmd1bWVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcignU3VwZXIgY29uc3RydWN0b3IgdGFrZXMgbm8gYXJndW1lbnRzJywgbm9kZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gVHlwZXMuVk9JRDtcblx0XHR9XG5cblx0XHR0aGlzLmNoZWNrQ2FsbEFyZ3VtZW50cyhzdXBlclN5bWJvbC5jb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbCwgbm9kZS5hcmd1bWVudHMsIHNjb3BlKTtcblxuXHRcdHJldHVybiBUeXBlcy5WT0lEO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0NhbGxPbk51bGxPYmplY3RUeXBlKG9iamVjdFR5cGU6IFR5cGUsIG5vZGU6IEFTVE5vZGUpOiB2b2lkIHtcblx0XHRpZiAob2JqZWN0VHlwZS5lcXVhbHMoVHlwZXMuTlVMTCkpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgY2FsbCBtZXRob2Qgb24gbnVsbGAsIG5vZGUpO1xuXHRcdH1cblx0XHRpZiAob2JqZWN0VHlwZSBpbnN0YW5jZW9mIE51bGxhYmxlVHlwZSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBjYWxsIG1ldGhvZCBvbiBudWxsYWJsZSB0eXBlICR7b2JqZWN0VHlwZX1gLCBub2RlKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrSW5zdGFuY2VDYWxsKGNhbGxlZTogQVNUTWVtYmVyTm9kZSwgY2FsbEFyZ3VtZW50czogQVNUTm9kZVtdLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0bGV0IG9iamVjdFR5cGU6IFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihjYWxsZWUub2JqZWN0LCBzY29wZSk7XG5cblx0XHRvYmplY3RUeXBlID0gQXV0b2JveGluZy5hdXRvYm94SWZOZWVkZWQob2JqZWN0VHlwZSwgdGhpcy5vYmplY3RSZWdpc3RyeSk7XG5cblx0XHR0aGlzLmNoZWNrQ2FsbE9uTnVsbE9iamVjdFR5cGUob2JqZWN0VHlwZSwgY2FsbGVlKTtcblxuXHRcdGlmIChvYmplY3RUeXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0XHRjb25zdCBtZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCA9IHRoaXMucmVzb2x2ZUluc3RhbmNlTWV0aG9kZShcblx0XHRcdFx0b2JqZWN0VHlwZS5jbGFzc1N5bWJvbCxcblx0XHRcdFx0Y2FsbGVlLnByb3BlcnR5XG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAobWV0aG9kU3ltYm9sLmlzU3RhdGljKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgY2FsbCBzdGF0aWMgbWV0aG9kICR7Y2FsbGVlLnByb3BlcnR5fSBvbiBpbnN0YW5jZSBvZiAke2NhbGxlZS5vYmplY3QubmFtZX1gLFxuXHRcdFx0XHQgICAgICAgICAgICAgICBjYWxsZWUpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmNoZWNrSW5zdGFuY2VNZXRob2RBY2Nlc3MoY2FsbGVlLCBvYmplY3RUeXBlLmNsYXNzU3ltYm9sLCBtZXRob2RTeW1ib2wsIHNjb3BlKTtcblxuXHRcdFx0Y29uc3Qgb3duZXI6IENsYXNzU3ltYm9sIHwgSW50ZXJmYWNlU3ltYm9sIHwgbnVsbCA9IG1ldGhvZFN5bWJvbC5vd25lcjtcblxuXHRcdFx0aWYgKG93bmVyID09PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgY2FsbCBtZXRob2Qgb24gbm9uLW9iamVjdGAsIGNhbGxlZSk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHN1YnN0aXR1dGlvbk1hcDogTWFwPHN0cmluZywgVHlwZT4gPSBidWlsZFR5cGVTdWJzdGl0dXRpb25NYXAoXG5cdFx0XHRcdG93bmVyLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLFxuXHRcdFx0XHRvYmplY3RUeXBlLnR5cGVBcmd1bWVudHNcblx0XHRcdCk7XG5cblx0XHRcdHRoaXMuY2hlY2tDYWxsQXJndW1lbnRzKG1ldGhvZFN5bWJvbCwgY2FsbEFyZ3VtZW50cywgc2NvcGUsIHN1YnN0aXR1dGlvbk1hcCk7XG5cblx0XHRcdHJldHVybiBzdWJzdGl0dXRlVHlwZShtZXRob2RTeW1ib2wucmV0dXJuVHlwZSwgc3Vic3RpdHV0aW9uTWFwKTtcblx0XHR9XG5cblx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNhbGwgbWV0aG9kIG9uIG5vbi1vYmplY3RgLCBjYWxsZWUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1N0YXRpY0NhbGwoY2xhc3NOYW1lOiBzdHJpbmcsIG1ldGhvZE5hbWU6IHN0cmluZywgY2FsbEFyZ3VtZW50czogQVNUTm9kZVtdLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0Y29uc3QgY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sID0gdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChjbGFzc05hbWUpO1xuXG5cdFx0Y29uc3QgbWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wgfCBudWxsID0gY2xhc3NTeW1ib2wuc3RhdGljTWV0aG9kU3ltYm9scy5nZXQobWV0aG9kTmFtZSkgfHwgbnVsbDtcblx0XHRpZiAoIW1ldGhvZFN5bWJvbCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFVua25vd24gc3RhdGljIG1ldGhvZCAke2NsYXNzTmFtZX0uJHttZXRob2ROYW1lfWApO1xuXHRcdH1cblxuXHRcdHRoaXMuY2hlY2tTdGF0aWNNZXRob2RBY2Nlc3MoY2xhc3NTeW1ib2wsIG1ldGhvZFN5bWJvbCwgc2NvcGUpXG5cblx0XHR0aGlzLmNoZWNrQ2FsbEFyZ3VtZW50cyhtZXRob2RTeW1ib2wsIGNhbGxBcmd1bWVudHMsIHNjb3BlKTtcblxuXHRcdHJldHVybiBtZXRob2RTeW1ib2wucmV0dXJuVHlwZTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tMYW1iZGFDYWxsKGxhbWJkYTogTGFtYmRhVHlwZSwgY2FsbEFyZ3VtZW50czogQVNUTm9kZVtdLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cblx0XHR0aGlzLmNoZWNrQ2FsbEFyZ3VtZW50cyhsYW1iZGEsIGNhbGxBcmd1bWVudHMsIHNjb3BlKTtcblxuXHRcdHJldHVybiBsYW1iZGEucmV0dXJuVHlwZTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tGdW5jdGlvbkNhbGwobmFtZTogc3RyaW5nLCBjYWxsQXJndW1lbnRzOiBBU1ROb2RlW10sIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRpZiAoIWdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5LmhhcyhuYW1lKSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFVua25vd24gZnVuY3Rpb24gJHtuYW1lfWApO1xuXHRcdH1cblxuXHRcdGNvbnN0IG5hdGl2ZUZ1bmN0aW9uOiBOYXRpdmVGdW5jdGlvbiA9IGdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5LmdldChuYW1lKTtcblxuXHRcdHRoaXMuY2hlY2tDYWxsQXJndW1lbnRzKG5hdGl2ZUZ1bmN0aW9uLCBjYWxsQXJndW1lbnRzLCBzY29wZSk7XG5cblx0XHRyZXR1cm4gbmF0aXZlRnVuY3Rpb24ucmV0dXJuVHlwZVxuXHRcdFx0PyB0aGlzLndyYXBUeXBlKG5hdGl2ZUZ1bmN0aW9uLnJldHVyblR5cGUsIHNjb3BlKVxuXHRcdFx0OiBUeXBlcy5WT0lEO1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJhbWV0ZXJzU3ltYm9sc0Zyb21DYWxsYWJsZVN5bWJvbChjYWxsYWJsZVN5bWJvbDogTWV0aG9kU3ltYm9sIHwgTGFtYmRhVHlwZSB8IE5hdGl2ZUZ1bmN0aW9uKTogUGFyYW1ldGVyU3ltYm9sW10ge1xuXHRcdGlmIChjYWxsYWJsZVN5bWJvbCBpbnN0YW5jZW9mIE5hdGl2ZUZ1bmN0aW9uKSB7XG5cdFx0XHRyZXR1cm4gY2FsbGFibGVTeW1ib2xcblx0XHRcdFx0LnBhcmFtZXRlck5vZGVzXG5cdFx0XHRcdC5tYXAocGFyYW1ldGVyTm9kZSA9PiB0aGlzLnBhcmFtZXRlck5vZGVUb1N5bWJvbChwYXJhbWV0ZXJOb2RlKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNhbGxhYmxlU3ltYm9sLnBhcmFtZXRlclN5bWJvbHNcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tDYWxsQXJndW1lbnRzKFxuXHRcdGNhbGxhYmxlU3ltYm9sOiBNZXRob2RTeW1ib2wgfCBMYW1iZGFUeXBlIHwgTmF0aXZlRnVuY3Rpb24sXG5cdFx0Y2FsbEFyZ3VtZW50czogQVNUTm9kZVtdLFxuXHRcdHNjb3BlOiBUeXBlU2NvcGUsXG5cdFx0c3Vic3RpdHV0aW9uTWFwOiBNYXA8c3RyaW5nLCBUeXBlPiA9IG5ldyBNYXAoKVxuXHQpOiB2b2lkIHtcblx0XHRjb25zdCBjYWxsU2NvcGUgPSBuZXcgVHlwZVNjb3BlKHNjb3BlKTtcblx0XHRsZXQgcGFyYW1ldGVyU3ltYm9scyA9IHRoaXMucGFyYW1ldGVyc1N5bWJvbHNGcm9tQ2FsbGFibGVTeW1ib2woY2FsbGFibGVTeW1ib2wpO1xuXG5cdFx0aWYgKGNhbGxBcmd1bWVudHMubGVuZ3RoID4gcGFyYW1ldGVyU3ltYm9scy5sZW5ndGgpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKFwiQXJndW1lbnQgY291bnQgbWlzbWF0Y2hcIik7XG5cdFx0fVxuXG5cdFx0bGV0IGFjdHVhbFR5cGU6IFR5cGU7XG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHBhcmFtZXRlclN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHBhcmFtZXRlclN5bWJvbDogUGFyYW1ldGVyU3ltYm9sIHwgbnVsbCA9IHBhcmFtZXRlclN5bWJvbHNbaV0gfHwgbnVsbDtcblx0XHRcdGNvbnN0IGNhbGxBcmd1bWVudDogQVNUTm9kZSB8IG51bGwgPSBjYWxsQXJndW1lbnRzW2ldIHx8IG51bGw7XG5cblx0XHRcdGlmIChwYXJhbWV0ZXJTeW1ib2wpIHtcblx0XHRcdFx0Y29uc3QgZXhwZWN0ZWRUeXBlOiBUeXBlID0gc3Vic3RpdHV0ZVR5cGUocGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGUsIHN1YnN0aXR1dGlvbk1hcCk7XG5cblx0XHRcdFx0aWYgKGNhbGxBcmd1bWVudCkge1xuXHRcdFx0XHRcdGFjdHVhbFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihjYWxsQXJndW1lbnQsIGNhbGxTY29wZSwgZXhwZWN0ZWRUeXBlKTtcblx0XHRcdFx0fSBlbHNlIGlmIChwYXJhbWV0ZXJTeW1ib2wuZGVmYXVsdFR5cGUpIHtcblx0XHRcdFx0XHRhY3R1YWxUeXBlID0gcGFyYW1ldGVyU3ltYm9sLmRlZmF1bHRUeXBlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMudHlwZUVycm9yKGBNaXNzaW5nIGFyZ3VtZW50ICR7cGFyYW1ldGVyU3ltYm9sLm5hbWV9YCwgY2FsbEFyZ3VtZW50KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuY2hlY2tBc3NpZ25hYmxlKGV4cGVjdGVkVHlwZSwgYWN0dWFsVHlwZSwgY2FsbEFyZ3VtZW50c1tpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0Fzc2lnbmFibGUoZXhwZWN0ZWRUeXBlOiBUeXBlLCBhY3R1YWxUeXBlOiBUeXBlLCBub2RlOiBBU1ROb2RlIHwgbnVsbCA9IG51bGwpOiB2b2lkIHtcblx0XHRpZiAoZXhwZWN0ZWRUeXBlLmVxdWFscyhhY3R1YWxUeXBlKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChleHBlY3RlZFR5cGUgaW5zdGFuY2VvZiBNaXhlZFR5cGUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoZXhwZWN0ZWRUeXBlIGluc3RhbmNlb2YgTnVsbGFibGVUeXBlKSB7XG5cdFx0XHRpZiAoYWN0dWFsVHlwZSA9PT0gVHlwZXMuTlVMTCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoZXhwZWN0ZWRUeXBlLmlubmVyLmFjY2VwdHMoYWN0dWFsVHlwZSkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChleHBlY3RlZFR5cGUuYWNjZXB0cyhhY3R1YWxUeXBlKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMudHlwZUVycm9yKGBUeXBlIG1pc21hdGNoOiAke2V4cGVjdGVkVHlwZX0gPD4gJHthY3R1YWxUeXBlfWAsIG5vZGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0JvZHkoY2hpbGRyZW46IEFTVE5vZGVbXSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGxldCByZXR1cm5UeXBlOiBUeXBlID0gVHlwZXMuTUlYRUQ7XG5cblx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG5cdFx0XHRjb25zdCBzdGF0ZW1lbnRSZXN1bHQgPSB0aGlzLmNoZWNrU3RhdGVtZW50KGNoaWxkLCBzY29wZSk7XG5cdFx0XHRpZiAoc3RhdGVtZW50UmVzdWx0LmRpZFJldHVybiAmJiBzdGF0ZW1lbnRSZXN1bHQucmV0dXJuVHlwZSkge1xuXHRcdFx0XHRyZXR1cm5UeXBlID0gc3RhdGVtZW50UmVzdWx0LnJldHVyblR5cGU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJldHVyblR5cGU7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrUmV0dXJuVHlwZShleHBlY3RlZFR5cGU6IFR5cGUsIGFjdHVhbFR5cGU6IFR5cGUsIG5vZGU6IEFTVE1ldGhvZE5vZGUpOiB2b2lkIHtcblx0XHQvLyB2b2lkLU1ldGhvZGVcblx0XHRpZiAoZXhwZWN0ZWRUeXBlID09PSBUeXBlcy5WT0lEKSB7XG5cdFx0XHRpZiAoYWN0dWFsVHlwZSAhPT0gVHlwZXMuTUlYRUQgJiYgYWN0dWFsVHlwZSAhPT0gVHlwZXMuVk9JRCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IHJldHVybiAke2FjdHVhbFR5cGV9IGZyb20gdm9pZCBtZXRob2RgLCBub2RlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBrZWluIHJldHVybiB2b3JoYW5kZW5cblx0XHRpZiAoYWN0dWFsVHlwZSA9PT0gVHlwZXMuTUlYRUQpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBNaXNzaW5nIHJldHVybiBzdGF0ZW1lbnQgKGV4cGVjdGVkICR7ZXhwZWN0ZWRUeXBlfSlgLCBub2RlKTtcblx0XHR9XG5cblx0XHQvLyB0eXAtaW5rb21wYXRpYmVsXG5cdFx0aWYgKCFleHBlY3RlZFR5cGUuYWNjZXB0cyhhY3R1YWxUeXBlKSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFJldHVybiB0eXBlIG1pc21hdGNoOiBleHBlY3RlZCAke2V4cGVjdGVkVHlwZX0sIGdvdCAke2FjdHVhbFR5cGV9YCwgbm9kZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1ZEb21Ob2RlKG5vZGU6IEFTVFZEb21Ob2RlKTogVHlwZSB7XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sID0gdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChub2RlLnRhZyk7XG5cblx0XHRcdGNvbnN0IG1ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sID0gdGhpcy5yZXNvbHZlSW5zdGFuY2VNZXRob2RlKGNsYXNzU3ltYm9sLCAncmVuZGVyJyk7XG5cblx0XHRcdGlmICghbWV0aG9kU3ltYm9sKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDb21wb25lbnQgJyR7bm9kZS50YWd9JyBoYXMgbm8gcmVuZGVyKCkgbWV0aG9kYCwgbm9kZSk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuY2hlY2tBc3NpZ25hYmxlKG1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlLCBUeXBlcy5WTk9ERSwgbm9kZSk7XG5cblx0XHRcdHJldHVybiBUeXBlcy5WTk9ERTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFR5cGVzLlZOT0RFO1xuXHR9XG5cblx0cHJpdmF0ZSByZXNvbHZlSW5zdGFuY2VNZXRob2RlKGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCwgbWV0aG9kTmFtZTogc3RyaW5nKTogTWV0aG9kU3ltYm9sIHtcblx0XHQvKiogQHR5cGUge01ldGhvZFN5bWJvbHxudWxsfSAqL1xuXHRcdGNvbnN0IG1ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sIHwgbnVsbCA9IHRoaXMucmVzb2x2ZUluSGllcmFyY2h5KFxuXHRcdFx0Y2xhc3NTeW1ib2wsXG5cdFx0XHRjbGFzc1N5bWJvbCA9PiBjbGFzc1N5bWJvbC5pbnN0YW5jZU1ldGhvZFN5bWJvbHMuZ2V0KG1ldGhvZE5hbWUpIHx8IG51bGxcblx0XHQpO1xuXG5cdFx0aWYgKCFtZXRob2RTeW1ib2wpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBVbmtub3duIG1ldGhvZCAke2NsYXNzU3ltYm9sLm5hbWV9LiR7bWV0aG9kTmFtZX1gLCBjbGFzc1N5bWJvbC5ub2RlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWV0aG9kU3ltYm9sO1xuXHR9XG5cblx0cHJpdmF0ZSByZXNvbHZlSW5IaWVyYXJjaHkoY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sLCByZXNvbHZlcjogKGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCkgPT4gYW55KTogYW55IHtcblx0XHRsZXQgY3VycmVudDogQ2xhc3NTeW1ib2wgfCBudWxsID0gY2xhc3NTeW1ib2w7XG5cblx0XHR3aGlsZSAoY3VycmVudCkge1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gcmVzb2x2ZXIoY3VycmVudCk7XG5cdFx0XHRpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQgJiYgcmVzdWx0ICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghY3VycmVudC5zdXBlckNsYXNzKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRjdXJyZW50ID0gdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChjdXJyZW50LnN1cGVyQ2xhc3MpO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cHJpdmF0ZSBuZXdBcnJheVR5cGVPZihlbGVtZW50VHlwZTogVHlwZSk6IENsYXNzUmVmVHlwZSB7XG5cdFx0Y29uc3QgY2xhc3NOYW1lOiBzdHJpbmcgfCBudWxsID0gUHJpbWl0aXZlQ2xhc3NUeXBlcy5nZXRDbGFzc1JlZk5hbWUoUHJpbWl0aXZlQ2xhc3NUeXBlcy5BUlJBWSk7XG5cblx0XHRpZiAoY2xhc3NOYW1lID09PSBudWxsKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcignSW50ZXJuYWwgZXJyb3I6IENhbm5vdCBmaW5kIGNsYXNzIG5hbWUgZm9yIGFycmF5IHR5cGUuJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBDbGFzc1JlZlR5cGUodGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChjbGFzc05hbWUpLCBbZWxlbWVudFR5cGVdKTtcblx0fVxuXG5cdHByaXZhdGUgd3JhcFR5cGUodHlwZTogQVNUVHlwZU5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRyZXR1cm4gd3JhcFR5cGUodHlwZSwgdGhpcy5vYmplY3RSZWdpc3RyeSwgc2NvcGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJhbWV0ZXJOb2RlVG9TeW1ib2wocGFyYW1ldGVyTm9kZTogQVNUUGFyYW1ldGVyTm9kZSwgc2NvcGU6IFR5cGVTY29wZSA9IG5ldyBUeXBlU2NvcGUoKSk6IFBhcmFtZXRlclN5bWJvbCB7XG5cdFx0Y29uc3QgcGFyYW1ldGVyVHlwZSA9IHBhcmFtZXRlck5vZGUudHlwZUFubm90YXRpb25cblx0XHRcdD8gdGhpcy53cmFwVHlwZShwYXJhbWV0ZXJOb2RlLnR5cGVBbm5vdGF0aW9uLCBzY29wZSlcblx0XHRcdDogVHlwZXMuTUlYRUQ7XG5cblx0XHRsZXQgZGVmYXVsdFR5cGUgPSBudWxsO1xuXHRcdGlmIChwYXJhbWV0ZXJOb2RlLmRlZmF1bHRWYWx1ZSkge1xuXHRcdFx0ZGVmYXVsdFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihwYXJhbWV0ZXJOb2RlLmRlZmF1bHRWYWx1ZSwgbmV3IFR5cGVTY29wZSgpKTtcblxuXHRcdFx0aWYgKGRlZmF1bHRUeXBlXG5cdFx0XHRcdCYmICFwYXJhbWV0ZXJUeXBlLmVxdWFscyhUeXBlcy5NSVhFRClcblx0XHRcdFx0JiYgIXBhcmFtZXRlclR5cGUuZXF1YWxzKGRlZmF1bHRUeXBlKSkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihcblx0XHRcdFx0XHRgRGVmYXVsdCB2YWx1ZSBmb3IgcGFyYW1ldGVyICcke3BhcmFtZXRlck5vZGUubmFtZX0nIGRvZXMgbm90IG1hdGNoIHR5cGUuYCxcblx0XHRcdFx0XHRwYXJhbWV0ZXJOb2RlXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBQYXJhbWV0ZXJTeW1ib2woXG5cdFx0XHRwYXJhbWV0ZXJOb2RlLm5hbWUsXG5cdFx0XHRwYXJhbWV0ZXJUeXBlLFxuXHRcdFx0ZGVmYXVsdFR5cGUsXG5cdFx0XHRwYXJhbWV0ZXJOb2RlXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgcmVnaXN0ZXJDbGFzc1N5bWJvbChjbGFzc05vZGU6IEFTVENsYXNzTm9kZSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmhhc1N5bWJvbChjbGFzc05vZGUubmFtZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBjbGFzc1Njb3BlID0gbmV3IFR5cGVTY29wZSgpO1xuXHRcdGNvbnN0IGNsYXNzU3ltYm9sID0gbmV3IENsYXNzU3ltYm9sKGNsYXNzTm9kZSk7XG5cblx0XHR0cnkge1xuXHRcdFx0aWYgKGNsYXNzU3ltYm9sLnN1cGVyQ2xhc3MpIHtcblx0XHRcdFx0Y2xhc3NTeW1ib2wuc3VwZXJDbGFzc1N5bWJvbCA9IHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2woY2xhc3NTeW1ib2wuc3VwZXJDbGFzcyk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdH1cblxuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuYWRkQ2xhc3NTeW1ib2woY2xhc3NTeW1ib2wpO1xuXG5cdFx0Y2xhc3NOb2RlLnR5cGVQYXJhbWV0ZXJzLmZvckVhY2gobmFtZSA9PiB7XG5cdFx0XHRjbGFzc1N5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5wdXNoKG5ldyBUeXBlUGFyYW1ldGVyU3ltYm9sKG5hbWUpKTtcblx0XHRcdGNsYXNzU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcobmFtZSwgbmV3IFR5cGVWYXJpYWJsZShuYW1lKSk7XG5cdFx0fSk7XG5cblx0XHRmb3IgKGNvbnN0IHR5cGVOb2RlIG9mIGNsYXNzTm9kZS5pbXBsZW1lbnRzSW50ZXJmYWNlcykge1xuXHRcdFx0Y29uc3QgaW50ZXJmYWNlVHlwZTogVHlwZSA9IHRoaXMud3JhcFR5cGUodHlwZU5vZGUsIGNsYXNzU2NvcGUpO1xuXHRcdFx0aWYgKGludGVyZmFjZVR5cGUgaW5zdGFuY2VvZiBJbnRlcmZhY2VSZWZUeXBlKSB7XG5cdFx0XHRcdGNsYXNzU3ltYm9sLmltcGxlbWVudHNJbnRlcmZhY2VzLnB1c2goaW50ZXJmYWNlVHlwZSk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYEV4cGVjdGVkIGludGVyZmFjZSB0eXBlLCBnb3QgJHtpbnRlcmZhY2VUeXBlfWAsIHR5cGVOb2RlKTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IG1lbWJlck5vZGUgb2YgY2xhc3NOb2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobWVtYmVyTm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5GSUVMRCAmJiBtZW1iZXJOb2RlIGluc3RhbmNlb2YgQVNURmllbGROb2RlKSB7XG5cdFx0XHRcdGNvbnN0IHRhcmdldDogTWFwPHN0cmluZywgRmllbGRTeW1ib2w+ID0gbWVtYmVyTm9kZS5tb2RpZmllcnMuc3RhdGljXG5cdFx0XHRcdFx0PyBjbGFzc1N5bWJvbC5zdGF0aWNGaWVsZFN5bWJvbHNcblx0XHRcdFx0XHQ6IGNsYXNzU3ltYm9sLmluc3RhbmNlRmllbGRTeW1ib2xzO1xuXG5cdFx0XHRcdGNvbnN0IGZpZWxkU3ltYm9sID0gbmV3IEZpZWxkU3ltYm9sKFxuXHRcdFx0XHRcdG1lbWJlck5vZGUsXG5cdFx0XHRcdFx0bWVtYmVyTm9kZS5maWVsZFR5cGVcblx0XHRcdFx0XHRcdD8gdGhpcy53cmFwVHlwZShtZW1iZXJOb2RlLmZpZWxkVHlwZSwgY2xhc3NTY29wZSlcblx0XHRcdFx0XHRcdDogVHlwZXMuTUlYRURcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRmaWVsZFN5bWJvbC5vd25lciA9IGNsYXNzU3ltYm9sO1xuXG5cdFx0XHRcdHRhcmdldC5zZXQoZmllbGRTeW1ib2wubmFtZSwgZmllbGRTeW1ib2wpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoKG1lbWJlck5vZGUudHlwZSA9PT0gQVNUTm9kZVR5cGUuTUVUSE9EIHx8IG1lbWJlck5vZGUudHlwZSA9PT0gQVNUTm9kZVR5cGUuQ09OU1RSVUNUT1IpXG5cdFx0XHRcdCYmIG1lbWJlck5vZGUgaW5zdGFuY2VvZiBBU1RNZXRob2ROb2RlKSB7XG5cblx0XHRcdFx0Y29uc3QgbWV0aG9kU2NvcGUgPSBuZXcgVHlwZVNjb3BlKGNsYXNzU2NvcGUpO1xuXHRcdFx0XHRjb25zdCBtZXRob2RTeW1ib2wgPSBuZXcgTWV0aG9kU3ltYm9sKG1lbWJlck5vZGUpO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC5vd25lciA9IGNsYXNzU3ltYm9sO1xuXG5cdFx0XHRcdG1lbWJlck5vZGUudHlwZVBhcmFtZXRlcnMuZm9yRWFjaChuYW1lID0+IHtcblx0XHRcdFx0XHRtZXRob2RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMucHVzaChuZXcgVHlwZVBhcmFtZXRlclN5bWJvbChuYW1lKSk7XG5cdFx0XHRcdFx0bWV0aG9kU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcobmFtZSwgbmV3IFR5cGVWYXJpYWJsZShuYW1lKSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzID0gbWVtYmVyTm9kZVxuXHRcdFx0XHRcdC5wYXJhbWV0ZXJzXG5cdFx0XHRcdFx0Lm1hcChwYXJhbWV0ZXJOb2RlID0+IHRoaXMucGFyYW1ldGVyTm9kZVRvU3ltYm9sKHBhcmFtZXRlck5vZGUsIG1ldGhvZFNjb3BlKSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnJldHVyblR5cGUgPSBtZW1iZXJOb2RlLnJldHVyblR5cGVcblx0XHRcdFx0XHQ/IHRoaXMud3JhcFR5cGUobWVtYmVyTm9kZS5yZXR1cm5UeXBlLCBtZXRob2RTY29wZSlcblx0XHRcdFx0XHQ6IFR5cGVzLlZPSUQ7XG5cblx0XHRcdFx0aWYgKG1lbWJlck5vZGUudHlwZSA9PT0gQVNUTm9kZVR5cGUuQ09OU1RSVUNUT1IpIHtcblx0XHRcdFx0XHRjbGFzc1N5bWJvbC5jb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbCA9IG1ldGhvZFN5bWJvbDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zdCB0YXJnZXQgPSBtZXRob2RTeW1ib2wuaXNTdGF0aWNcblx0XHRcdFx0XHRcdD8gY2xhc3NTeW1ib2wuc3RhdGljTWV0aG9kU3ltYm9sc1xuXHRcdFx0XHRcdFx0OiBjbGFzc1N5bWJvbC5pbnN0YW5jZU1ldGhvZFN5bWJvbHM7XG5cblx0XHRcdFx0XHR0YXJnZXQuc2V0KG1lbWJlck5vZGUubmFtZSwgbWV0aG9kU3ltYm9sKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVnaXN0ZXJJbnRlcmZhY2VTeW1ib2woaW50ZXJmYWNlTm9kZTogQVNUSW50ZXJmYWNlTm9kZSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmhhc1N5bWJvbChpbnRlcmZhY2VOb2RlLm5hbWUpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW50ZXJmYWNlU2NvcGUgPSBuZXcgVHlwZVNjb3BlKCk7XG5cdFx0Y29uc3QgaW50ZXJmYWNlU3ltYm9sID0gbmV3IEludGVyZmFjZVN5bWJvbChpbnRlcmZhY2VOb2RlKTtcblxuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuYWRkSW50ZXJmYWNlU3ltYm9sKGludGVyZmFjZVN5bWJvbCk7XG5cblx0XHRpbnRlcmZhY2VOb2RlLnR5cGVQYXJhbWV0ZXJzLmZvckVhY2gobmFtZSA9PiB7XG5cdFx0XHRpbnRlcmZhY2VTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMucHVzaChuZXcgVHlwZVBhcmFtZXRlclN5bWJvbChuYW1lKSk7XG5cdFx0XHRpbnRlcmZhY2VTY29wZS5kZWZpbmVUeXBlQmluZGluZyhuYW1lLCBuZXcgVHlwZVZhcmlhYmxlKG5hbWUpKTtcblx0XHR9KTtcblxuXHRcdGZvciAoY29uc3QgaW50ZXJmYWNlTmFtZSBvZiBpbnRlcmZhY2VOb2RlLmV4dGVuZHNJbnRlcmZhY2VzKSB7XG5cdFx0XHRjb25zdCBpbnRlcmZhY2VTeW1ib2w6IEludGVyZmFjZVN5bWJvbCA9IHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0SW50ZXJhY2VTeW1ib2woaW50ZXJmYWNlTmFtZSk7XG5cblx0XHRcdGludGVyZmFjZVN5bWJvbC5leHRlbmRzSW50ZXJmYWNlcy5wdXNoKGludGVyZmFjZVN5bWJvbCk7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBtZW1iZXJOb2RlIG9mIGludGVyZmFjZU5vZGUuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChtZW1iZXJOb2RlLnR5cGUgPT09IEFTVE5vZGVUeXBlLkZJRUxEICYmIG1lbWJlck5vZGUgaW5zdGFuY2VvZiBBU1RGaWVsZE5vZGUpIHtcblx0XHRcdFx0Y29uc3QgZmllbGRTeW1ib2wgPSBuZXcgRmllbGRTeW1ib2woXG5cdFx0XHRcdFx0bWVtYmVyTm9kZSxcblx0XHRcdFx0XHRtZW1iZXJOb2RlLmZpZWxkVHlwZVxuXHRcdFx0XHRcdFx0PyB0aGlzLndyYXBUeXBlKG1lbWJlck5vZGUuZmllbGRUeXBlLCBpbnRlcmZhY2VTY29wZSlcblx0XHRcdFx0XHRcdDogVHlwZXMuTUlYRURcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRmaWVsZFN5bWJvbC5vd25lciA9IGludGVyZmFjZVN5bWJvbDtcblxuXHRcdFx0XHRpbnRlcmZhY2VTeW1ib2wuc3RhdGljRmllbGRTeW1ib2xzLnNldChmaWVsZFN5bWJvbC5uYW1lLCBmaWVsZFN5bWJvbCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICgobWVtYmVyTm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5NRVRIT0QpICYmIG1lbWJlck5vZGUgaW5zdGFuY2VvZiBBU1RNZXRob2ROb2RlKSB7XG5cblx0XHRcdFx0Y29uc3QgbWV0aG9kU2NvcGUgPSBuZXcgVHlwZVNjb3BlKGludGVyZmFjZVNjb3BlKTtcblx0XHRcdFx0Y29uc3QgbWV0aG9kU3ltYm9sID0gbmV3IE1ldGhvZFN5bWJvbChtZW1iZXJOb2RlKTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wub3duZXIgPSBpbnRlcmZhY2VTeW1ib2w7XG5cblx0XHRcdFx0bWVtYmVyTm9kZS50eXBlUGFyYW1ldGVycy5mb3JFYWNoKG5hbWUgPT4ge1xuXHRcdFx0XHRcdG1ldGhvZFN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5wdXNoKG5ldyBUeXBlUGFyYW1ldGVyU3ltYm9sKG5hbWUpKTtcblx0XHRcdFx0XHRtZXRob2RTY29wZS5kZWZpbmVUeXBlQmluZGluZyhuYW1lLCBuZXcgVHlwZVZhcmlhYmxlKG5hbWUpKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMgPSBtZW1iZXJOb2RlXG5cdFx0XHRcdFx0LnBhcmFtZXRlcnNcblx0XHRcdFx0XHQubWFwKHBhcmFtZXRlck5vZGUgPT4gdGhpcy5wYXJhbWV0ZXJOb2RlVG9TeW1ib2wocGFyYW1ldGVyTm9kZSwgbWV0aG9kU2NvcGUpKTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wucmV0dXJuVHlwZSA9IG1lbWJlck5vZGUucmV0dXJuVHlwZVxuXHRcdFx0XHRcdD8gdGhpcy53cmFwVHlwZShtZW1iZXJOb2RlLnJldHVyblR5cGUsIG1ldGhvZFNjb3BlKVxuXHRcdFx0XHRcdDogVHlwZXMuVk9JRDtcblxuXHRcdFx0XHRpbnRlcmZhY2VTeW1ib2wuaW5zdGFuY2VNZXRob2RTeW1ib2xzLnNldChtZW1iZXJOb2RlLm5hbWUsIG1ldGhvZFN5bWJvbCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSB0eXBlRXJyb3IobWVzc2FnZTogc3RyaW5nLCBub2RlOiBBU1ROb2RlIHwgbnVsbCA9IG51bGwpOiBuZXZlciB7XG5cdFx0dGhyb3dUeXBlRXJyb3IobWVzc2FnZSwgbm9kZT8uc3Bhbik7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge0FTVEltcG9ydE5vZGUsIEFTVE5vZGUsIEFTVE5vZGVUeXBlfSBmcm9tIFwiLi4vYXN0XCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5pbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4uL3BhcnNlci9wYXJzZXJcIjtcbmltcG9ydCB7RW52aXJvbm1lbnR9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQgdHlwZSB7QWJzdHJhY3RGaWxlTG9hZGVyfSBmcm9tIFwiLi4vbG9hZGVyc1wiO1xuaW1wb3J0IHt0aHJvd1J1bnRpbWVFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuXG5leHBvcnQgY2xhc3MgRGVwZW5kZW5jeSB7XG5cdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSA9IG5ldyBPYmplY3RSZWdpc3RyeSgpO1xuXHRuYW1lczogc3RyaW5nW107XG5cdHVybDogc3RyaW5nO1xuXHRhc3Q6IEFTVE5vZGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lczogc3RyaW5nW10sIHVybDogc3RyaW5nID0gJy4nKSB7XG5cdFx0dGhpcy5uYW1lcyA9IG5hbWVzO1xuXHRcdHRoaXMudXJsID0gdXJsO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBEZXBlbmRlbmN5TG9hZGVyIHtcblx0ZW52aXJvbm1lbnQ6IEVudmlyb25tZW50O1xuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cdGZpbGVMb2FkZXI6IEFic3RyYWN0RmlsZUxvYWRlcjtcblxuXHRjb25zdHJ1Y3RvcihlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZmlsZUxvYWRlcjogQWJzdHJhY3RGaWxlTG9hZGVyKSB7XG5cdFx0dGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkgPSBvYmplY3RSZWdpc3RyeTtcblx0XHR0aGlzLmZpbGVMb2FkZXIgPSBmaWxlTG9hZGVyO1xuXHR9XG5cblx0YXN5bmMgcGFyc2VEZXBlbmRlbmN5KGRlcGVuZGVuY3k6IERlcGVuZGVuY3kpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gYXdhaXQgdGhpcy5wYXJzZUZpbGUoZGVwZW5kZW5jeS51cmwpXG5cdFx0ICAgICAgICAgICAgICAgICAudGhlbihhc3QgPT4gZGVwZW5kZW5jeS5hc3QgPSBhc3QpXG5cdFx0ICAgICAgICAgICAgICAgICAudGhlbihhc3QgPT4gZGVwZW5kZW5jeS5vYmplY3RSZWdpc3RyeS5jb2xsZWN0QWxsKGFzdCkpO1xuXHR9XG5cblx0YXN5bmMgY29sbGVjdERlcGVuZGVuY2llcyhkZXBlbmRlbmN5OiBEZXBlbmRlbmN5LCBkZXBlbmRlbmNpZXM6IE1hcDxzdHJpbmcsIERlcGVuZGVuY3k+KTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIGF3YWl0IHRoaXMuY29sbGVjdFByb2dyYW1EZXBlbmRlbmNpZXMoZGVwZW5kZW5jeS5hc3QpXG5cdFx0ICAgICAgICAgICAgICAgICAudGhlbihjbGFzc0RlcGVuZGVuY2llcyA9PiB7XG5cdFx0XHQgICAgICAgICAgICAgICAgIGNsYXNzRGVwZW5kZW5jaWVzLmZvckVhY2goY2xhc3NEZXBlbmRlbmN5ID0+IHtcblx0XHRcdFx0ICAgICAgICAgICAgICAgICBpZiAoZGVwZW5kZW5jaWVzLmhhcyhjbGFzc0RlcGVuZGVuY3kudXJsKSkge1xuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXHRcdFx0XHQgICAgICAgICAgICAgICAgIH1cblx0XHRcdFx0ICAgICAgICAgICAgICAgICBkZXBlbmRlbmNpZXMuc2V0KGNsYXNzRGVwZW5kZW5jeS51cmwsIGNsYXNzRGVwZW5kZW5jeSk7XG5cdFx0XHQgICAgICAgICAgICAgICAgIH0pO1xuXHRcdCAgICAgICAgICAgICAgICAgfSk7XG5cdH1cblxuXHRhc3luYyBjb2xsZWN0UHJvZ3JhbURlcGVuZGVuY2llcyhhc3Q6IEFTVE5vZGUgfCBudWxsKTogUHJvbWlzZTxNYXA8c3RyaW5nLCBEZXBlbmRlbmN5Pj4ge1xuXHRcdGlmIChhc3QgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBuZXcgTWFwKCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZGVwZW5kZW5jaWVzOiBNYXA8c3RyaW5nLCBEZXBlbmRlbmN5PiA9IHRoaXMuY29sbGVjdENsYXNzRGVwZW5kZW5jaWVzKGFzdCk7XG5cdFx0Zm9yIChjb25zdCBkZXBlbmRlbmN5IG9mIGRlcGVuZGVuY2llcy52YWx1ZXMoKSkge1xuXHRcdFx0aWYgKGRlcGVuZGVuY3kudXJsID09PSAnLicpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRhd2FpdCB0aGlzLnBhcnNlRGVwZW5kZW5jeShkZXBlbmRlbmN5KTtcblx0XHRcdGF3YWl0IHRoaXMuY29sbGVjdERlcGVuZGVuY2llcyhkZXBlbmRlbmN5LCBkZXBlbmRlbmNpZXMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBkZXBlbmRlbmNpZXM7XG5cdH1cblxuXHRhc3luYyBjb2xsZWN0RGVmYXVsdERlcGVuZGVuY2llcygpOiBQcm9taXNlPE1hcDxzdHJpbmcsIERlcGVuZGVuY3k+PiB7XG5cdFx0Y29uc3QgZGVwZW5kZW5jaWVzOiBNYXA8c3RyaW5nLCBEZXBlbmRlbmN5PiA9IHRoaXMuZGVmYXVsdERlcGVuZGVuY2llcygpO1xuXG5cdFx0Zm9yIChjb25zdCBkZXBlbmRlbmN5IG9mIGRlcGVuZGVuY2llcy52YWx1ZXMoKSkge1xuXHRcdFx0YXdhaXQgdGhpcy5wYXJzZURlcGVuZGVuY3koZGVwZW5kZW5jeSk7XG5cdFx0XHRhd2FpdCB0aGlzLmNvbGxlY3REZXBlbmRlbmNpZXMoZGVwZW5kZW5jeSwgZGVwZW5kZW5jaWVzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGVwZW5kZW5jaWVzO1xuXHR9XG5cblx0ZGVmYXVsdERlcGVuZGVuY2llcygpOiBNYXA8c3RyaW5nLCBEZXBlbmRlbmN5PiB7XG5cdFx0Y29uc3QgZGVwZW5kZW5jaWVzOiBEZXBlbmRlbmN5W10gPSBbXG5cdFx0XHRuZXcgRGVwZW5kZW5jeShbJ0l0ZXJhdG9yJywgJ0l0ZXJhYmxlJ10sICcvbGlicmFyeS9jb250cmFjdHMubHlyYScpXG5cdFx0XTtcblxuXHRcdGNvbnN0IGRlZmF1bHREZXBlbmRlbmNpZXMgPSBuZXcgTWFwKCk7XG5cdFx0Zm9yIChjb25zdCBkZXBlbmRlbmN5IG9mIGRlcGVuZGVuY2llcykge1xuXHRcdFx0ZGVmYXVsdERlcGVuZGVuY2llcy5zZXQoZGVwZW5kZW5jeS51cmwsIGRlcGVuZGVuY3kpO1xuXHRcdH1cblxuXHRcdHJldHVybiBkZWZhdWx0RGVwZW5kZW5jaWVzO1xuXHR9XG5cblx0Y29sbGVjdENsYXNzRGVwZW5kZW5jaWVzKGFzdDogQVNUTm9kZSk6IE1hcDxzdHJpbmcsIERlcGVuZGVuY3k+IHtcblx0XHRjb25zdCBjbGFzc0RlcGVuZGVuY2llcyA9IG5ldyBNYXAoKTtcblxuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChub2RlLnR5cGUgPT09IEFTVE5vZGVUeXBlLklNUE9SVCkge1xuXHRcdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEltcG9ydE5vZGUpIHtcblx0XHRcdFx0XHRpZiAobm9kZS5mcm9tID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRjbGFzc0RlcGVuZGVuY2llcy5zZXQobm9kZS5uYW1lc1swXSwgbmV3IERlcGVuZGVuY3kobm9kZS5uYW1lcykpO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChjbGFzc0RlcGVuZGVuY2llcy5oYXMobm9kZS5mcm9tKSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNsYXNzRGVwZW5kZW5jaWVzLnNldChub2RlLmZyb20sIG5ldyBEZXBlbmRlbmN5KG5vZGUubmFtZXMsIG5vZGUuZnJvbSkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGltcG9ydCBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlPy5zcGFuKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc0RlcGVuZGVuY2llcztcblx0fVxuXG5cdGFzeW5jIHBhcnNlRmlsZSh1cmw6IHN0cmluZyk6IFByb21pc2U8QVNUTm9kZT4ge1xuXHRcdHJldHVybiB0aGlzLmZpbGVMb2FkZXJcblx0XHQgICAgICAgICAgIC5sb2FkKHVybClcblx0XHQgICAgICAgICAgIC50aGVuKGNvZGUgPT4gdGhpcy5wYXJzZXJTb3VyY2UobmV3IFNvdXJjZShjb2RlLCB1cmwpKSk7XG5cdH1cblxuXHRwYXJzZXJTb3VyY2Uoc291cmNlOiBTb3VyY2UpOiBBU1ROb2RlIHtcblx0XHRyZXR1cm4gbmV3IFBhcnNlcihzb3VyY2UpLnBhcnNlKCk7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtEZXBlbmRlbmN5LCBEZXBlbmRlbmN5TG9hZGVyfSBmcm9tIFwiLi9kZXBlbmRlbmNpZXNcIjtcbmltcG9ydCB7QVNUSW1wb3J0Tm9kZSwgQVNUTm9kZX0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHtOYXRpdmVDbGFzc2VzfSBmcm9tIFwiLi4vLi4vbGlicmFyeS9uYXRpdmVfY2xhc3Nlc1wiO1xuaW1wb3J0IHtDbGFzc0RlZmluaXRpb24sIEVudmlyb25tZW50LCBJbnRlcmZhY2VEZWZpbml0aW9ufSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5pbXBvcnQgdHlwZSB7QWJzdHJhY3RGaWxlTG9hZGVyfSBmcm9tIFwiLi4vbG9hZGVyc1wiO1xuaW1wb3J0IHR5cGUge05hdGl2ZUNsYXNzfSBmcm9tIFwiLi4vLi4vbGlicmFyeS9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7dGhyb3dEZXBlbmRlbmN5RXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcbmltcG9ydCB0eXBlIHtTb3VyY2VTcGFufSBmcm9tIFwiLi4vcGFyc2VyL3BhcnNlcl9zb3VyY2UudHNcIjtcblxuY29uc3QgbmF0aXZlQ2xhc3NlcyA9IG5ldyBOYXRpdmVDbGFzc2VzKCk7XG5cbmV4cG9ydCBjbGFzcyBMaW5rZXIge1xuXHRwcml2YXRlIGVudmlyb25tZW50OiBFbnZpcm9ubWVudDtcblx0cHJpdmF0ZSBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cdHByaXZhdGUgZGVwZW5kZW5jeUxvYWRlcjogRGVwZW5kZW5jeUxvYWRlcjtcblxuXHRjb25zdHJ1Y3RvcihlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZmlsZUxvYWRlcjogQWJzdHJhY3RGaWxlTG9hZGVyKSB7XG5cdFx0dGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkgPSBvYmplY3RSZWdpc3RyeTtcblx0XHR0aGlzLmRlcGVuZGVuY3lMb2FkZXIgPSBuZXcgRGVwZW5kZW5jeUxvYWRlcihlbnZpcm9ubWVudCwgb2JqZWN0UmVnaXN0cnksIGZpbGVMb2FkZXIpO1xuXHR9XG5cblx0cHVibGljIGFzeW5jIGxpbmtTb3VyY2VzKGFzdDogQVNUTm9kZSk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiBhd2FpdCB0aGlzLmRlcGVuZGVuY3lMb2FkZXIuY29sbGVjdERlZmF1bHREZXBlbmRlbmNpZXMoKVxuXHRcdCAgICAgICAgICAgICAgICAgLnRoZW4oKGRlcGVuZGVuY2llczogTWFwPHN0cmluZywgRGVwZW5kZW5jeT4pOiB2b2lkID0+IHtcblx0XHRcdCAgICAgICAgICAgICAgICAgdGhpcy5sb2FkRGVwZW5kZW5jaWVzKGRlcGVuZGVuY2llcyk7XG5cdFx0ICAgICAgICAgICAgICAgICB9KVxuXHRcdCAgICAgICAgICAgICAgICAgLnRoZW4oYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdFx0ICAgICAgICAgICAgICAgICBjb25zdCBkZXBlbmRlbmNpZXM6IE1hcDxzdHJpbmcsIERlcGVuZGVuY3k+ID0gYXdhaXQgdGhpcy5kZXBlbmRlbmN5TG9hZGVyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbGxlY3RQcm9ncmFtRGVwZW5kZW5jaWVzKGFzdCk7XG5cdFx0XHQgICAgICAgICAgICAgICAgIHRoaXMubG9hZERlcGVuZGVuY2llcyhkZXBlbmRlbmNpZXMpO1xuXHRcdFx0ICAgICAgICAgICAgICAgICB0aGlzLmxvYWROYXRpdmVDbGFzc2VzRnJvbUFTVChhc3QpO1xuXHRcdCAgICAgICAgICAgICAgICAgfSk7XG5cdH1cblxuXHRwcml2YXRlIGxvYWREZXBlbmRlbmNpZXMoZGVwZW5kZW5jaWVzOiBNYXA8c3RyaW5nLCBEZXBlbmRlbmN5Pikge1xuXHRcdGZvciAoY29uc3QgZGVwZW5kZW5jeSBvZiBkZXBlbmRlbmNpZXMudmFsdWVzKCkpIHtcblxuXHRcdFx0aWYgKGRlcGVuZGVuY3kudXJsID09PSAnLicpIHtcblx0XHRcdFx0dGhpcy5sb2FkTmF0aXZlQ2xhc3NGcm9tRGVwZW5kZW5jeShkZXBlbmRlbmN5KTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IG9iamVjdERlZmluaXRpb25zID0gZGVwZW5kZW5jeS5vYmplY3RSZWdpc3RyeVxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZldGNoQWxsT2JqZWN0RGVmaW5pdGlvbnMoKVxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlcygpO1xuXHRcdFx0Zm9yIChsZXQgb2JqZWN0RGVmIG9mIG9iamVjdERlZmluaXRpb25zKSB7XG5cdFx0XHRcdGlmIChvYmplY3REZWYgaW5zdGFuY2VvZiBJbnRlcmZhY2VEZWZpbml0aW9uKSB7XG5cdFx0XHRcdFx0dGhpcy5vYmplY3RSZWdpc3RyeS5pbnRlcmZhY2VzLnNldChvYmplY3REZWYubmFtZSwgb2JqZWN0RGVmKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuc2V0KG9iamVjdERlZi5uYW1lLCBvYmplY3REZWYpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuZW52aXJvbm1lbnQuZGVmaW5lKG9iamVjdERlZi5uYW1lLCBvYmplY3REZWYpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgbG9hZE5hdGl2ZUNsYXNzKGNsYXNzTmFtZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwpOiB2b2lkIHtcblx0XHRjb25zdCBuYXRpdmVDbGFzczogTmF0aXZlQ2xhc3MgfCBudWxsID0gbmF0aXZlQ2xhc3Nlcy5yZWdpc3RyeS5nZXQoY2xhc3NOYW1lKSB8fCBudWxsO1xuXHRcdGlmICghbmF0aXZlQ2xhc3MpIHtcblx0XHRcdHRocm93RGVwZW5kZW5jeUVycm9yKGBVbmtub3duIG5hdGl2ZSBjbGFzcyAke2NsYXNzTmFtZX1gLCBzcGFuKTtcblx0XHR9XG5cdFx0Y29uc3QgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiA9IG5hdGl2ZUNsYXNzLmdldENsYXNzRGVmaW5pdGlvbigpO1xuXHRcdGlmICh0aGlzLm9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuaGFzKGNsYXNzTmFtZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5vYmplY3RSZWdpc3RyeS5jbGFzc2VzLnNldChjbGFzc05hbWUsIGNsYXNzRGVmKTtcblx0XHR0aGlzLmVudmlyb25tZW50LmRlZmluZShjbGFzc05hbWUsIGNsYXNzRGVmKTtcblx0fVxuXG5cdHByaXZhdGUgbG9hZE5hdGl2ZUNsYXNzZXNGcm9tQVNUKGFzdDogQVNUTm9kZSk6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUSW1wb3J0Tm9kZSkge1xuXHRcdFx0XHRpZiAobm9kZS5mcm9tID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Y29uc3QgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQgPSBub2RlLm5hbWVzWzBdO1xuXHRcdFx0XHRcdGlmICghY2xhc3NOYW1lKSB7XG5cdFx0XHRcdFx0XHR0aHJvd0RlcGVuZGVuY3lFcnJvcihgSW52YWxpZCBpbXBvcnQgbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZT8uc3Bhbik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMubG9hZE5hdGl2ZUNsYXNzKGNsYXNzTmFtZSwgbm9kZS5zcGFuKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgbG9hZE5hdGl2ZUNsYXNzRnJvbURlcGVuZGVuY3koZGVwZW5kZW5jeTogRGVwZW5kZW5jeSkge1xuXHRcdGNvbnN0IGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gZGVwZW5kZW5jeS5uYW1lc1swXTtcblx0XHRpZiAoIWNsYXNzTmFtZSkge1xuXHRcdFx0dGhyb3dEZXBlbmRlbmN5RXJyb3IoYEludmFsaWQgaW1wb3J0IGZyb20gZGVwZW5kZW5jeS5gKTtcblx0XHR9XG5cblx0XHR0aGlzLmxvYWROYXRpdmVDbGFzcyhjbGFzc05hbWUpO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7QVNUQW5ub3RhdGlvbk5vZGUsIEFTVENsYXNzTm9kZSwgQVNUTWV0aG9kTm9kZSwgQVNUTm9kZX0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHtjYWxsSW5zdGFuY2VNZXRob2QsIGV2YWxBbm5vdGF0aW9uUHJvcGVydGllc30gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX3J1bnRpbWVcIjtcbmltcG9ydCB7Q2xhc3NEZWZpbml0aW9uLCB0eXBlIEVudmlyb25tZW50LCBJbnN0YW5jZX0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB0eXBlIHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5pbXBvcnQgdHlwZSB7RXZlbnRQaXBlbGluZX0gZnJvbSBcIi4uL2V2ZW50L3BpcGVsaW5lXCI7XG5cbmV4cG9ydCBjbGFzcyBUZXN0U3VpdGVzIHtcblx0cHJpdmF0ZSByZWFkb25seSBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQ7XG5cdHByaXZhdGUgcmVhZG9ubHkgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5O1xuXHRwcml2YXRlIHJlYWRvbmx5IGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmU7XG5cblx0Y29uc3RydWN0b3IoZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpIHtcblx0XHR0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG5cdFx0dGhpcy5vYmplY3RSZWdpc3RyeSA9IG9iamVjdFJlZ2lzdHJ5O1xuXHRcdHRoaXMuZXZlbnRQaXBlbGluZSA9IGV2ZW50UGlwZWxpbmU7XG5cdH1cblxuXHRydW4oYXN0OiBBU1ROb2RlKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIGFzdC5jaGlsZHJlbikge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RDbGFzc05vZGUpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coYPCfp6ogUnVubmluZyBUZXN0IENhc2VzIGZvciAke25vZGUubmFtZX0gLi4uYCk7XG5cdFx0XHRcdHRoaXMucnVuVGVzdENhc2VzKG5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcnVuVGVzdENhc2VzKGNsYXNzTm9kZTogQVNUQ2xhc3NOb2RlKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBtZW1iZXIgb2YgY2xhc3NOb2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobWVtYmVyIGluc3RhbmNlb2YgQVNUTWV0aG9kTm9kZSkge1xuXHRcdFx0XHRjb25zdCBhbm5vdGF0aW9uOiBBU1RBbm5vdGF0aW9uTm9kZSB8IHVuZGVmaW5lZCA9IG1lbWJlci5hbm5vdGF0aW9uc1xuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZmluZChhbm5vdGF0aW9uID0+IGFubm90YXRpb24ubmFtZSA9PT0gJ3Rlc3QnKTtcblx0XHRcdFx0aWYgKCFhbm5vdGF0aW9uKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5ydW5UZXN0Q2FzZShjbGFzc05vZGUsIG1lbWJlciwgYW5ub3RhdGlvbik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBydW5UZXN0Q2FzZShjbGFzc05vZGU6IEFTVENsYXNzTm9kZSwgbWV0aG9kTm9kZTogQVNUTWV0aG9kTm9kZSwgYW5ub3RhdGlvbjogQVNUQW5ub3RhdGlvbk5vZGUpOiB2b2lkIHtcblx0XHRjb25zdCBpbnN0YW5jZTogSW5zdGFuY2UgPSBDbGFzc0RlZmluaXRpb24uZnJvbUFTVChjbGFzc05vZGUpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnN0cnVjdE5ld0luc3RhbmNlV2l0aG91dEFyZ3VtZW50cyhcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0UmVnaXN0cnksXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVudmlyb25tZW50LFxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudFBpcGVsaW5lXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuXHRcdGNvbnN0IHByb3BlcnRpZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IGV2YWxBbm5vdGF0aW9uUHJvcGVydGllcyhhbm5vdGF0aW9uKTtcblx0XHRjb25zdCB0aXRsZTogc3RyaW5nID0gcHJvcGVydGllcy50aXRsZSA/PyBgJHtjbGFzc05vZGUubmFtZX0uJHttZXRob2ROb2RlLm5hbWV9YDtcblxuXHRcdGxldCBlcnJvck1lc3NhZ2UgPSBudWxsO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGNhbGxJbnN0YW5jZU1ldGhvZChpbnN0YW5jZSwgbWV0aG9kTm9kZSwgW10sIHRoaXMub2JqZWN0UmVnaXN0cnksIHRoaXMuZW52aXJvbm1lbnQsIHRoaXMuZXZlbnRQaXBlbGluZSk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGVycm9yTWVzc2FnZSA9IGVycm9yO1xuXHRcdH1cblxuXHRcdGlmIChlcnJvck1lc3NhZ2UpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoYCDinYwgJHt0aXRsZX0sICR7ZXJyb3JNZXNzYWdlfWApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZyhgIOKchSAke3RpdGxlfWApO1xuXHRcdH1cblx0fVxufVxuIiwKICAgICJpbXBvcnQge0FTVE5vZGV9IGZyb20gJy4uL2FzdC50cyc7XG5pbXBvcnQge0Vudmlyb25tZW50fSBmcm9tIFwiLi9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge2V2YWxOb2RlLCByZWdpc3Rlck5hdGl2ZUNsYXNzZXMsIHJlZ2lzdGVyTmF0aXZlRnVuY3Rpb25zfSBmcm9tIFwiLi9pbnRlcnByZXRlcl9ydW50aW1lXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuaW1wb3J0IHR5cGUge0V2ZW50UGlwZWxpbmV9IGZyb20gXCIuLi9ldmVudC9waXBlbGluZVwiO1xuXG5leHBvcnQgY2xhc3MgSW50ZXJwcmV0ZXIge1xuXHRlbnZpcm9ubWVudDogRW52aXJvbm1lbnQ7XG5cdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeTtcblx0ZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsXG5cdFx0b2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LFxuXHRcdGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmVcblx0KSB7XG5cdFx0dGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkgPSBvYmplY3RSZWdpc3RyeTtcblx0XHR0aGlzLmV2ZW50UGlwZWxpbmUgPSBldmVudFBpcGVsaW5lO1xuXG5cdFx0cmVnaXN0ZXJOYXRpdmVDbGFzc2VzKG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCk7XG5cdFx0cmVnaXN0ZXJOYXRpdmVGdW5jdGlvbnMoZW52aXJvbm1lbnQpO1xuXHR9XG5cblx0cnVuKGFzdDogQVNUTm9kZSkge1xuXHRcdGV2YWxOb2RlKGFzdCwgdGhpcy5vYmplY3RSZWdpc3RyeSwgdGhpcy5lbnZpcm9ubWVudCwgdGhpcy5ldmVudFBpcGVsaW5lKTtcblx0fVxufVxuIiwKICAgICJleHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RGaWxlTG9hZGVyIHtcblx0YWJzdHJhY3QgbG9hZCh1cmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPjtcbn1cblxuZXhwb3J0IGNsYXNzIEZldGNoRmlsZUxvYWRlciBleHRlbmRzIEFic3RyYWN0RmlsZUxvYWRlciB7XG5cdG92ZXJyaWRlIGxvYWQodXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybiBmZXRjaCh1cmwpXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXG5cdH1cbn1cbiIsCiAgICAiZXhwb3J0IHR5cGUgRXZlbnRIYW5kbGVyPFQgPSBhbnk+ID0gKHBheWxvYWQ6IFQpID0+IHZvaWQ7XG5cbmV4cG9ydCBjbGFzcyBFdmVudFBpcGVsaW5lIHtcblx0cHJpdmF0ZSBsaXN0ZW5lcnM6IE1hcDxzdHJpbmcsIFNldDxFdmVudEhhbmRsZXI+PiA9IG5ldyBNYXA8c3RyaW5nLCBTZXQ8RXZlbnRIYW5kbGVyPj4oKTtcblxuXHRvbjxUID0gYW55PihldmVudDogc3RyaW5nLCBoYW5kbGVyOiBFdmVudEhhbmRsZXI8VD4pOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMubGlzdGVuZXJzLmhhcyhldmVudCkpIHtcblx0XHRcdHRoaXMubGlzdGVuZXJzLnNldChldmVudCwgbmV3IFNldCgpKTtcblx0XHR9XG5cdFx0dGhpcy5saXN0ZW5lcnMuZ2V0KGV2ZW50KSEuYWRkKGhhbmRsZXIpO1xuXHR9XG5cblx0b2ZmPFQgPSBhbnk+KGV2ZW50OiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50SGFuZGxlcjxUPik6IHZvaWQge1xuXHRcdHRoaXMubGlzdGVuZXJzLmdldChldmVudClcblx0XHQgICAgPy5kZWxldGUoaGFuZGxlcik7XG5cdH1cblxuXHRlbWl0PFQgPSBhbnk+KGV2ZW50OiBzdHJpbmcsIHBheWxvYWQ6IFQpOiB2b2lkIHtcblx0XHR0aGlzLmxpc3RlbmVycy5nZXQoZXZlbnQpXG5cdFx0ICAgID8uZm9yRWFjaCgoaGFuZGxlcjogRXZlbnRIYW5kbGVyKTogdm9pZCA9PiBoYW5kbGVyKHBheWxvYWQpKTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4vcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcbmltcG9ydCB7RW52aXJvbm1lbnR9IGZyb20gXCIuL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge1R5cGVDaGVja2VyfSBmcm9tIFwiLi90eXBlcy90eXBlY2hlY2tlclwiO1xuaW1wb3J0IHtMaW5rZXJ9IGZyb20gXCIuL2xpbmtlci9saW5rZXJcIjtcbmltcG9ydCB7VGVzdFN1aXRlc30gZnJvbSBcIi4vdGVzdHMvdGVzdHN1aXRlc1wiO1xuaW1wb3J0IHtJbnRlcnByZXRlcn0gZnJvbSBcIi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJcIjtcbmltcG9ydCB7RmV0Y2hGaWxlTG9hZGVyfSBmcm9tIFwiLi9sb2FkZXJzXCI7XG5pbXBvcnQge0FTVE5vZGV9IGZyb20gXCIuL2FzdFwiO1xuaW1wb3J0IHtQYXJzZXJ9IGZyb20gXCIuL3BhcnNlci9wYXJzZXJcIjtcbmltcG9ydCB7RXZlbnRQaXBlbGluZX0gZnJvbSBcIi4vZXZlbnQvcGlwZWxpbmVcIjtcblxuZXhwb3J0IGNsYXNzIEx5cmFTY3JpcHRQcm9ncmFtIHtcblx0cHJpdmF0ZSBnbG9iYWxFbnZpcm9ubWVudDogRW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQoKTtcblx0cHJpdmF0ZSBnbG9iYWxPYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkgPSBuZXcgT2JqZWN0UmVnaXN0cnkoKTtcblx0cHJpdmF0ZSBnbG9iYWxFdmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lO1xuXG5cdHByaXZhdGUgdHlwZUNoZWNrZXI6IFR5cGVDaGVja2VyID0gbmV3IFR5cGVDaGVja2VyKHRoaXMuZ2xvYmFsT2JqZWN0UmVnaXN0cnkpO1xuXHRwcml2YXRlIGxpbmtlcjogTGlua2VyID0gbmV3IExpbmtlcih0aGlzLmdsb2JhbEVudmlyb25tZW50LCB0aGlzLmdsb2JhbE9iamVjdFJlZ2lzdHJ5LCBuZXcgRmV0Y2hGaWxlTG9hZGVyKCkpO1xuXG5cdHByaXZhdGUgaW50ZXJwcmV0ZXI6IEludGVycHJldGVyO1xuXHRwcml2YXRlIHRlc3RTdWl0ZTogVGVzdFN1aXRlcztcblxuXHRwcml2YXRlIHJlYWRvbmx5IGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBzdGFydFRpbWU6IG51bWJlciA9IDA7XG5cblx0Y29uc3RydWN0b3IoaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlLCBnbG9iYWxFdmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lID0gbmV3IEV2ZW50UGlwZWxpbmUoKSkge1xuXHRcdHRoaXMuaXNEZWJ1ZyA9IGlzRGVidWc7XG5cblx0XHR0aGlzLmludGVycHJldGVyID0gbmV3IEludGVycHJldGVyKFxuXHRcdFx0dGhpcy5nbG9iYWxFbnZpcm9ubWVudCxcblx0XHRcdHRoaXMuZ2xvYmFsT2JqZWN0UmVnaXN0cnksXG5cdFx0XHRnbG9iYWxFdmVudFBpcGVsaW5lXG5cdFx0KTtcblxuXHRcdHRoaXMudGVzdFN1aXRlID0gbmV3IFRlc3RTdWl0ZXMoXG5cdFx0XHR0aGlzLmdsb2JhbEVudmlyb25tZW50LFxuXHRcdFx0dGhpcy5nbG9iYWxPYmplY3RSZWdpc3RyeSxcblx0XHRcdGdsb2JhbEV2ZW50UGlwZWxpbmVcblx0XHQpO1xuXG5cdFx0dGhpcy5nbG9iYWxFdmVudFBpcGVsaW5lID0gZ2xvYmFsRXZlbnRQaXBlbGluZTtcblx0fVxuXG5cdGdldEdsb2JhbE9iamVjdFJlZ2lzdHJ5KCk6IE9iamVjdFJlZ2lzdHJ5IHtcblx0XHRyZXR1cm4gdGhpcy5nbG9iYWxPYmplY3RSZWdpc3RyeTtcblx0fVxuXG5cblx0Z2V0R2xvYmFsRW52aXJvbm1lbnQoKTogRW52aXJvbm1lbnQge1xuXHRcdHJldHVybiB0aGlzLmdsb2JhbEVudmlyb25tZW50O1xuXHR9XG5cblx0Z2V0R2xvYmFsRXZlbnRQaXBlbGluZSgpOiBFdmVudFBpcGVsaW5lIHtcblx0XHRyZXR1cm4gdGhpcy5nbG9iYWxFdmVudFBpcGVsaW5lO1xuXHR9XG5cblx0YXN5bmMgZXhlY3V0ZShzb3VyY2U6IFNvdXJjZSk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiB0aGlzLnJ1blBpcGVsaW5lKHNvdXJjZSlcblx0XHQgICAgICAgICAgIC50aGVuKChhc3Q6IEFTVE5vZGUpID0+IHtcblx0XHRcdCAgICAgICAgICAgdGhpcy5kZWJ1Z01lYXN1cmVTdGFydFRpbWUoKTtcblx0XHRcdCAgICAgICAgICAgdGhpcy5pbnRlcnByZXRlci5ydW4oYXN0KTtcblx0XHRcdCAgICAgICAgICAgdGhpcy5kZWJ1Z01lYXN1cmVFbmRUaW1lKCdpbnRlcnByZXRlcicpO1xuXHRcdCAgICAgICAgICAgfSk7XG5cdH1cblxuXHRhc3luYyBleGVjdXRlVGVzdChzb3VyY2U6IFNvdXJjZSk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiB0aGlzLnJ1blBpcGVsaW5lKHNvdXJjZSlcblx0XHQgICAgICAgICAgIC50aGVuKChhc3Q6IEFTVE5vZGUpID0+IHtcblx0XHRcdCAgICAgICAgICAgdGhpcy5kZWJ1Z01lYXN1cmVTdGFydFRpbWUoKTtcblx0XHRcdCAgICAgICAgICAgdGhpcy50ZXN0U3VpdGUucnVuKGFzdCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlRW5kVGltZSgndGVzdCcpO1xuXHRcdCAgICAgICAgICAgfSk7XG5cdH1cblxuXHRkZWJ1Zyh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNEZWJ1Zykge1xuXHRcdFx0Y29uc29sZS5sb2codmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdGRlYnVnTWVhc3VyZVN0YXJ0VGltZSgpOiB2b2lkIHtcblx0XHR0aGlzLnN0YXJ0VGltZSA9IHRoaXMuZGVidWdUaW1lc3RhbXAoKTtcblx0fVxuXG5cdGRlYnVnTWVhc3VyZUVuZFRpbWUobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5kZWJ1ZyhtZXNzYWdlICsgJzogJyArICh0aGlzLmRlYnVnVGltZXN0YW1wKCkgLSB0aGlzLnN0YXJ0VGltZSkgKyAnbXMnKTtcblx0fVxuXG5cdGRlYnVnVGltZXN0YW1wKCk6IG51bWJlciB7XG5cdFx0aWYgKCF0aGlzLmlzRGVidWcpIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblx0XHRyZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG5cdH1cblxuXHRwcml2YXRlIGFzeW5jIHJ1blBpcGVsaW5lKHNvdXJjZTogU291cmNlKTogUHJvbWlzZTxBU1ROb2RlPiB7XG5cdFx0dGhpcy5kZWJ1Z01lYXN1cmVTdGFydFRpbWUoKVxuXHRcdGNvbnN0IGFzdDogQVNUTm9kZSA9IG5ldyBQYXJzZXIoc291cmNlKS5wYXJzZSgpO1xuXHRcdHRoaXMuZGVidWdNZWFzdXJlRW5kVGltZSgncGFyc2VyJylcblx0XHR0aGlzLmRlYnVnKGFzdCk7XG5cblx0XHRyZXR1cm4gdGhpcy5saW5rZXIubGlua1NvdXJjZXMoYXN0KVxuXHRcdCAgICAgICAgICAgLnRoZW4oKCk6IHZvaWQgPT4ge1xuXHRcdFx0ICAgICAgICAgICB0aGlzLnR5cGVDaGVja2VyLmNvbGxlY3RBbGxTeW1ib2xzRnJvbVJlZ2lzdHJ5KHRoaXMuZ2xvYmFsT2JqZWN0UmVnaXN0cnkpO1xuXHRcdCAgICAgICAgICAgfSlcblx0XHQgICAgICAgICAgIC50aGVuKCgpOiBBU1ROb2RlID0+IHtcblx0XHRcdCAgICAgICAgICAgdGhpcy5kZWJ1Z01lYXN1cmVTdGFydFRpbWUoKTtcblx0XHRcdCAgICAgICAgICAgdGhpcy50eXBlQ2hlY2tlci5jaGVjayhhc3QpO1xuXHRcdFx0ICAgICAgICAgICB0aGlzLmRlYnVnTWVhc3VyZUVuZFRpbWUoJ3R5cGVjaGVja2VyJyk7XG5cblx0XHRcdCAgICAgICAgICAgcmV0dXJuIGFzdDtcblx0XHQgICAgICAgICAgIH0pO1xuXHR9XG59XG4iLAogICAgImNvbnN0IERPTV9FVkVOVDogc3RyaW5nID0gJ2RvbTpldmVudCc7XG5cbmNvbnN0IGlzRXZlbnQ6IChwcm9wZXJ0eUtleTogc3RyaW5nKSA9PiBib29sZWFuID0gKHByb3BlcnR5S2V5OiBzdHJpbmcpOiBib29sZWFuID0+IHtcblx0cmV0dXJuIHByb3BlcnR5S2V5LnRvTG93ZXJDYXNlKClcblx0ICAgICAgICAgICAgICAgICAgLnN0YXJ0c1dpdGgoJ29uJyk7XG59XG5cbmV4cG9ydCBjb25zdCBFdmVudHMgPSB7XG5cdERPTV9FVkVOVCxcblx0aXNFdmVudCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50cztcbiIsCiAgICAiLy8vIDxyZWZlcmVuY2UgbGliPVwiZG9tXCIgLz5cblxuaW1wb3J0IHR5cGUge1Byb3BzLCBWQ2hpbGQsIFZUZXh0fSBmcm9tIFwiLi4vY29yZS92ZG9tL3Zkb21cIjtcbmltcG9ydCB7TGFtYmRhRnVuY3Rpb25DYWxsfSBmcm9tIFwiLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9ydW50aW1lXCI7XG5pbXBvcnQgRXZlbnRzIGZyb20gXCIuL2V2ZW50c1wiO1xuaW1wb3J0IHR5cGUge0FwcGxpY2F0aW9uUnVudGltZX0gZnJvbSBcIi4vcnVudGltZVwiO1xuaW1wb3J0IHtWRE9NfSBmcm9tIFwiLi9yZWdpc3RyeVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRDcmVhdG9yIHtcblx0Y3JlYXRlKHZOb2RlOiBWQ2hpbGQpOiBOb2RlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRQYXRjaGVyIHtcblx0cGF0Y2gob2xkVk5vZGU6IFZDaGlsZCB8IG51bGwsIG5ld05vZGU6IFZDaGlsZCk6IHZvaWRcbn1cblxuZXhwb3J0IGNsYXNzIEhUTUxFbGVtZW50Q3JlYXRvciBpbXBsZW1lbnRzIEVsZW1lbnRDcmVhdG9yIHtcblx0cHJpdmF0ZSB0ZXh0QnVmZmVyOiBWVGV4dFtdID0gW107XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZWFkb25seSBhcHBsaWNhdGlvblJ1bnRpbWU6IEFwcGxpY2F0aW9uUnVudGltZSxcblx0XHRwcml2YXRlIHJlYWRvbmx5IHZkb206IFZET01cblx0KSB7XG5cdH1cblxuXHRwdWJsaWMgY3JlYXRlKHZOb2RlOiBWQ2hpbGQpOiBOb2RlIHtcblx0XHRpZiAodk5vZGUudHlwZSA9PT0gJ3RleHQnKSB7XG5cdFx0XHRjb25zdCB0ZXh0Tm9kZTogVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZOb2RlLnZhbHVlKTtcblx0XHRcdHZOb2RlLmRvbSA9IHRleHROb2RlO1xuXHRcdFx0cmV0dXJuIHRleHROb2RlO1xuXHRcdH1cblxuXHRcdGlmICh2Tm9kZS50eXBlID09PSAnY29tcG9uZW50Jykge1xuXHRcdFx0dk5vZGUuaW5zdGFuY2UgPSB0aGlzLmFwcGxpY2F0aW9uUnVudGltZS5jcmVhdGVJbnN0YW5jZSh2Tm9kZS5jbGFzc05hbWUpO1xuXG5cdFx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh2Tm9kZS5wcm9wcyA/PyB7fSkpIHtcblx0XHRcdFx0aWYgKGtleSA9PT0gJ2NoaWxkcmVuJykge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh2Tm9kZS5pbnN0YW5jZS5oYXNQdWJsaWNQcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRcdFx0dk5vZGUuaW5zdGFuY2Uuc2V0UHVibGljUHJvcGVydHkoa2V5LCB2YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKCF2Tm9kZS5zdWJUcmVlKSB7XG5cdFx0XHRcdHZOb2RlLnN1YlRyZWUgPSB0aGlzLmFwcGxpY2F0aW9uUnVudGltZS5yZW5kZXJDb21wb25lbnQodk5vZGUuaW5zdGFuY2UpIGFzIFZDaGlsZDtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy52ZG9tLnJlZ2lzdGVyKHZOb2RlLmluc3RhbmNlLCB2Tm9kZS5zdWJUcmVlKTtcblxuXHRcdFx0Y29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmNyZWF0ZSh2Tm9kZS5zdWJUcmVlKSBhcyBIVE1MRWxlbWVudDtcblx0XHRcdHZOb2RlLmRvbSA9IGVsZW1lbnQ7XG5cdFx0XHRyZXR1cm4gZWxlbWVudDtcblx0XHR9XG5cblx0XHRjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodk5vZGUudGFnKSBhcyBIVE1MRWxlbWVudDtcblx0XHR2Tm9kZS5kb20gPSBlbGVtZW50O1xuXG5cdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModk5vZGUucHJvcHMgPz8ge30pKSB7XG5cdFx0XHRpZiAoRXZlbnRzLmlzRXZlbnQoa2V5KSkge1xuXHRcdFx0XHR0aGlzLmFwcGxpY2F0aW9uUnVudGltZS5hZGRFdmVudEhhbmRsZXIoZWxlbWVudCwga2V5LCB2YWx1ZSBhcyBMYW1iZGFGdW5jdGlvbkNhbGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBTdHJpbmcodmFsdWUpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIHZOb2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlKGNoaWxkKSBhcyBIVE1MRWxlbWVudCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEhUTUxFbGVtZW50UGF0Y2hlciBpbXBsZW1lbnRzIEVsZW1lbnRQYXRjaGVyIHtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBtb3VudFBvaW50OiBIVE1MRWxlbWVudCxcblx0ICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBhcHBsaWNhdGlvblJ1bnRpbWU6IEFwcGxpY2F0aW9uUnVudGltZSxcblx0ICAgICAgICAgICAgdmRvbTogVkRPTSxcblx0ICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBlbGVtZW50Q3JlYXRvcjogRWxlbWVudENyZWF0b3IgPSBuZXcgSFRNTEVsZW1lbnRDcmVhdG9yKGFwcGxpY2F0aW9uUnVudGltZSwgdmRvbSkpIHtcblx0fVxuXG5cdHB1YmxpYyBwYXRjaChvbGROb2RlOiBWQ2hpbGQgfCBudWxsLCBuZXdOb2RlOiBWQ2hpbGQpOiB2b2lkIHtcblx0XHRpZiAoIW9sZE5vZGUpIHtcblx0XHRcdGNvbnN0IGVsZW1lbnQ6IE5vZGUgPSB0aGlzLmVsZW1lbnRDcmVhdG9yLmNyZWF0ZShuZXdOb2RlKTtcblx0XHRcdHRoaXMubW91bnRQb2ludC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblx0XHRcdG5ld05vZGUuZG9tID0gZWxlbWVudDtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnBhdGNoTm9kZSh0aGlzLm1vdW50UG9pbnQsIG9sZE5vZGUsIG5ld05vZGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBwYXRjaE5vZGUocGFyZW50OiBOb2RlLCBvbGROb2RlOiBWQ2hpbGQsIG5ld05vZGU6IFZDaGlsZCk6IHZvaWQge1xuXHRcdGlmIChvbGROb2RlLnR5cGUgPT09ICd0ZXh0JyAmJiBuZXdOb2RlLnR5cGUgPT09ICd0ZXh0Jykge1xuXHRcdFx0Y29uc3QgdGV4dE5vZGU6IE5vZGUgPSBvbGROb2RlLmRvbSE7XG5cdFx0XHRpZiAodGV4dE5vZGUudGV4dENvbnRlbnQgIT09IG5ld05vZGUudmFsdWUpIHtcblx0XHRcdFx0dGV4dE5vZGUudGV4dENvbnRlbnQgPSBuZXdOb2RlLnZhbHVlO1xuXHRcdFx0fVxuXHRcdFx0bmV3Tm9kZS5kb20gPSB0ZXh0Tm9kZTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAob2xkTm9kZS50eXBlICE9PSBuZXdOb2RlLnR5cGUpIHtcblx0XHRcdGNvbnN0IG5ld0VsZW1lbnQ6IE5vZGUgPSB0aGlzLmVsZW1lbnRDcmVhdG9yLmNyZWF0ZShuZXdOb2RlKTtcblx0XHRcdHBhcmVudC5yZXBsYWNlQ2hpbGQobmV3RWxlbWVudCwgb2xkTm9kZS5kb20hKTtcblx0XHRcdG5ld05vZGUuZG9tID0gbmV3RWxlbWVudDtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAobmV3Tm9kZS50eXBlID09PSAnY29tcG9uZW50Jykge1xuXHRcdFx0Y29uc3QgbmV3RWxlbWVudDogTm9kZSA9IHRoaXMuZWxlbWVudENyZWF0b3IuY3JlYXRlKG5ld05vZGUpO1xuXHRcdFx0aWYgKCFvbGROb2RlLmRvbSkge1xuXHRcdFx0XHRwYXJlbnQuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XG5cdFx0XHR9IGVsc2UgaWYgKG9sZE5vZGUuZG9tICE9PSBuZXdFbGVtZW50KSB7XG5cdFx0XHRcdHBhcmVudC5yZXBsYWNlQ2hpbGQobmV3RWxlbWVudCwgb2xkTm9kZS5kb20hKTtcblx0XHRcdH1cblx0XHRcdG5ld05vZGUuZG9tID0gbmV3RWxlbWVudDtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBkb206IEhUTUxFbGVtZW50ID0gb2xkTm9kZS5kb20gYXMgSFRNTEVsZW1lbnQ7XG5cdFx0bmV3Tm9kZS5kb20gPSBkb207XG5cblx0XHRpZiAob2xkTm9kZS50eXBlICE9PSAndGV4dCcgJiYgbmV3Tm9kZS50eXBlICE9PSAndGV4dCcpIHtcblx0XHRcdHRoaXMudXBkYXRlUHJvcGVydGllcyhkb20sIG9sZE5vZGUucHJvcHMgPz8ge30sIG5ld05vZGUucHJvcHMgPz8ge30pO1xuXG5cdFx0XHRpZiAob2xkTm9kZS50eXBlID09PSAnZWxlbWVudCcgJiYgbmV3Tm9kZS50eXBlID09PSAnZWxlbWVudCcpIHtcblx0XHRcdFx0dGhpcy5wYXRjaENoaWxkcmVuKGRvbSwgb2xkTm9kZS5jaGlsZHJlbiwgbmV3Tm9kZS5jaGlsZHJlbik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSB1cGRhdGVQcm9wZXJ0aWVzKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBvbGRQcm9wZXJ0aWVzOiBQcm9wcywgbmV3UHJvcGVydGllczogUHJvcHMpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IGtleSBpbiBvbGRQcm9wZXJ0aWVzKSB7XG5cdFx0XHRpZiAoIShrZXkgaW4gbmV3UHJvcGVydGllcykpIHtcblx0XHRcdFx0aWYgKEV2ZW50cy5pc0V2ZW50KGtleSkpIHtcblx0XHRcdFx0XHR0aGlzLmFwcGxpY2F0aW9uUnVudGltZS5yZW1vdmVFdmVudEhhbmRsZXIoZWxlbWVudCwga2V5KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBwcm9wZXJ0eUtleSBpbiBuZXdQcm9wZXJ0aWVzKSB7XG5cdFx0XHRjb25zdCBvbGRWYWx1ZTogYW55ID0gb2xkUHJvcGVydGllc1twcm9wZXJ0eUtleV07XG5cdFx0XHRjb25zdCBuZXdWYWx1ZTogYW55ID0gbmV3UHJvcGVydGllc1twcm9wZXJ0eUtleV07XG5cblx0XHRcdGlmIChvbGRWYWx1ZSA9PT0gbmV3VmFsdWUpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChFdmVudHMuaXNFdmVudChwcm9wZXJ0eUtleSkpIHtcblx0XHRcdFx0aWYgKG9sZFZhbHVlKSB7XG5cdFx0XHRcdFx0dGhpcy5hcHBsaWNhdGlvblJ1bnRpbWUucmVtb3ZlRXZlbnRIYW5kbGVyKGVsZW1lbnQsIHByb3BlcnR5S2V5KTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmFwcGxpY2F0aW9uUnVudGltZS5hZGRFdmVudEhhbmRsZXIoZWxlbWVudCwgcHJvcGVydHlLZXksIG5ld1ZhbHVlIGFzIExhbWJkYUZ1bmN0aW9uQ2FsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShwcm9wZXJ0eUtleSwgbmV3VmFsdWUgYXMgc3RyaW5nKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHBhdGNoQ2hpbGRyZW4ocGFyZW50OiBOb2RlLCBvbGRDaGlsZHJlbjogVkNoaWxkW10sIG5ld0NoaWxkcmVuOiBWQ2hpbGRbXSk6IHZvaWQge1xuXHRcdGNvbnN0IG9sZExlbmd0aDogbnVtYmVyID0gb2xkQ2hpbGRyZW4ubGVuZ3RoO1xuXHRcdGNvbnN0IG5ld0xlbmd0aDogbnVtYmVyID0gbmV3Q2hpbGRyZW4ubGVuZ3RoO1xuXHRcdGNvbnN0IGNvbW1vbkxlbmd0aDogbnVtYmVyID0gTWF0aC5taW4ob2xkTGVuZ3RoLCBuZXdMZW5ndGgpO1xuXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGNvbW1vbkxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0aGlzLnBhdGNoTm9kZShwYXJlbnQsIG9sZENoaWxkcmVuW2ldIGFzIFZDaGlsZCwgbmV3Q2hpbGRyZW5baV0gYXMgVkNoaWxkKTtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSBjb21tb25MZW5ndGg7IGkgPCBuZXdMZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgbmV3Q2hpbGQ6IFZDaGlsZCA9IG5ld0NoaWxkcmVuW2ldIGFzIFZDaGlsZDtcblx0XHRcdGNvbnN0IG5ld0VsZW1lbnQ6IEhUTUxNYXBFbGVtZW50ID0gdGhpcy5lbGVtZW50Q3JlYXRvci5jcmVhdGUobmV3Q2hpbGQpIGFzIEhUTUxNYXBFbGVtZW50O1xuXHRcdFx0cGFyZW50LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuXG5cdFx0XHRuZXdDaGlsZC5kb20gPSBuZXdFbGVtZW50O1xuXHRcdH1cblxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IG9sZExlbmd0aCAtIDE7IGkgPj0gbmV3TGVuZ3RoOyBpLS0pIHtcblx0XHRcdGNvbnN0IG9sZENoaWxkOiBWQ2hpbGQgPSBvbGRDaGlsZHJlbltpXSBhcyBWQ2hpbGQ7XG5cdFx0XHRjb25zdCBkb206IE5vZGUgfCB1bmRlZmluZWQgPSBvbGRDaGlsZC5kb207XG5cdFx0XHRpZiAoZG9tKSB7XG5cdFx0XHRcdHBhcmVudC5yZW1vdmVDaGlsZChkb20pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwKICAgICJpbXBvcnQge0x5cmFTY3JpcHRQcm9ncmFtfSBmcm9tIFwiLi4vY29yZS9wcm9ncmFtXCI7XG5pbXBvcnQge2ZldGNoU291cmNlfSBmcm9tIFwiLi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuaW1wb3J0IHtDbGFzc0RlZmluaXRpb24sIEVudmlyb25tZW50LCBJbnN0YW5jZX0gZnJvbSBcIi4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB7Y2FsbEluc3RhbmNlTWV0aG9kLCBMYW1iZGFGdW5jdGlvbkNhbGx9IGZyb20gXCIuLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX3J1bnRpbWVcIjtcbmltcG9ydCB7RXZlbnRUeXBlfSBmcm9tIFwiLi4vbGlicmFyeS9jbGFzc2VzL2V2ZW50XCI7XG5pbXBvcnQge0V2ZW50UGlwZWxpbmV9IGZyb20gXCIuLi9jb3JlL2V2ZW50L3BpcGVsaW5lXCI7XG5cbmNvbnN0IGx5cmFFdmVudENsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24gPSBuZXcgRXZlbnRUeXBlKCkuZ2V0Q2xhc3NEZWZpbml0aW9uKCk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW5naW5lIHtcblx0ZXhlY3V0ZUVudHJ5RmlsZSh1cmw6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuXG5cdGNyZWF0ZUluc3RhbmNlKGNsYXNzTmFtZTogc3RyaW5nKTogSW5zdGFuY2U7XG5cblx0Z2V0T2JqZWN0UmVnaXN0cnkoKTogT2JqZWN0UmVnaXN0cnk7XG5cblx0Z2V0RW52aXJvbm1lbnQoKTogRW52aXJvbm1lbnQ7XG5cblx0Z2V0Um9vdEluc3RhbmNlKCk6IEluc3RhbmNlO1xuXG5cdGNhbGxSb290SW5zdGFuY2VNZXRob2QobWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSk6IGFueTtcblxuXHRjYWxsSW5zdGFuY2VNZXRob2QoaW5zdGFuY2U6IEluc3RhbmNlLCBtZXRob2ROYW1lOiBzdHJpbmcsIGFyZ3M6IEFycmF5PGFueT4pOiBhbnk7XG5cblx0Y3JlYXRlRXZlbnQoZXZlbnQ6IEV2ZW50KTogSW5zdGFuY2U7XG5cblx0Y3JlYXRlRXZlbnRIYW5kbGVyKGhhbmRsZXI6IExhbWJkYUZ1bmN0aW9uQ2FsbCwgZXZlbnROYW1lOiBzdHJpbmcpOiAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgV2ViTHlyYVNjcmlwdCBpbXBsZW1lbnRzIEVuZ2luZSB7XG5cdHByaXZhdGUgcmVhZG9ubHkgcHJvZ3JhbTogTHlyYVNjcmlwdFByb2dyYW07XG5cdHByaXZhdGUgcmVhZG9ubHkgX2dsb2JhbE9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeTtcblx0cHJpdmF0ZSByZWFkb25seSBfZ2xvYmFsRW52aXJvbm1lbnQ6IEVudmlyb25tZW50O1xuXHRwcml2YXRlIHJvb3RJbnN0YW5jZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbDtcblxuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZ2xvYmFsRXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSA9IG5ldyBFdmVudFBpcGVsaW5lKCksIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSkge1xuXHRcdHRoaXMucHJvZ3JhbSA9IG5ldyBMeXJhU2NyaXB0UHJvZ3JhbShpc0RlYnVnLCB0aGlzLmdsb2JhbEV2ZW50UGlwZWxpbmUpO1xuXHRcdHRoaXMuX2dsb2JhbE9iamVjdFJlZ2lzdHJ5ID0gdGhpcy5wcm9ncmFtLmdldEdsb2JhbE9iamVjdFJlZ2lzdHJ5KCk7XG5cdFx0dGhpcy5fZ2xvYmFsRW52aXJvbm1lbnQgPSB0aGlzLnByb2dyYW0uZ2V0R2xvYmFsRW52aXJvbm1lbnQoKTtcblx0fVxuXG5cdGdldE9iamVjdFJlZ2lzdHJ5KCk6IE9iamVjdFJlZ2lzdHJ5IHtcblx0XHRyZXR1cm4gdGhpcy5fZ2xvYmFsT2JqZWN0UmVnaXN0cnk7XG5cdH1cblxuXHRnZXRFbnZpcm9ubWVudCgpOiBFbnZpcm9ubWVudCB7XG5cdFx0cmV0dXJuIHRoaXMuX2dsb2JhbEVudmlyb25tZW50O1xuXHR9XG5cblx0cHVibGljIGdldFJvb3RJbnN0YW5jZSgpOiBJbnN0YW5jZSB7XG5cdFx0aWYgKHRoaXMucm9vdEluc3RhbmNlID09PSBudWxsKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ05vIHJvb3QgaW5zdGFuY2UgYXZhaWxhYmxlLicpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5yb290SW5zdGFuY2U7XG5cdH1cblxuXHRwdWJsaWMgY3JlYXRlSW5zdGFuY2UoY2xhc3NOYW1lOiBzdHJpbmcpOiBJbnN0YW5jZSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0Q2xhc3NEZWZpbml0aW9uKGNsYXNzTmFtZSlcblx0XHQgICAgICAgICAgIC5jb25zdHJ1Y3ROZXdJbnN0YW5jZVdpdGhvdXRBcmd1bWVudHMoXG5cdFx0XHQgICAgICAgICAgIHRoaXMuX2dsb2JhbE9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0ICAgICAgICAgICB0aGlzLl9nbG9iYWxFbnZpcm9ubWVudCxcblx0XHRcdCAgICAgICAgICAgdGhpcy5nbG9iYWxFdmVudFBpcGVsaW5lXG5cdFx0ICAgICAgICAgICApO1xuXHR9XG5cblx0cHVibGljIGNhbGxSb290SW5zdGFuY2VNZXRob2QobWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuY2FsbEluc3RhbmNlTWV0aG9kKHRoaXMuZ2V0Um9vdEluc3RhbmNlKCksIG1ldGhvZE5hbWUsIGFyZ3MpO1xuXHR9XG5cblx0cHVibGljIGNhbGxJbnN0YW5jZU1ldGhvZChpbnN0YW5jZTogSW5zdGFuY2UsIG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10pOiBhbnkge1xuXHRcdHJldHVybiBjYWxsSW5zdGFuY2VNZXRob2QoXG5cdFx0XHRpbnN0YW5jZSxcblx0XHRcdGluc3RhbmNlLmZpbmRlTWV0aG9kTm9kZShtZXRob2ROYW1lKSxcblx0XHRcdGFyZ3MsXG5cdFx0XHR0aGlzLl9nbG9iYWxPYmplY3RSZWdpc3RyeSxcblx0XHRcdHRoaXMuX2dsb2JhbEVudmlyb25tZW50LFxuXHRcdFx0dGhpcy5nbG9iYWxFdmVudFBpcGVsaW5lXG5cdFx0KTtcblx0fVxuXG5cdHB1YmxpYyBhc3luYyBleGVjdXRlRW50cnlGaWxlKHVybDogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiB0aGlzLnByb2dyYW0uZXhlY3V0ZShhd2FpdCBmZXRjaFNvdXJjZSh1cmwpKVxuXHRcdCAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuXHRcdFx0ICAgICAgICAgICB0aGlzLnJvb3RJbnN0YW5jZSA9IHRoaXMuY3JlYXRlSW5zdGFuY2UoY2xhc3NOYW1lKTtcblx0XHQgICAgICAgICAgIH0pO1xuXHR9XG5cblx0cHVibGljIGNyZWF0ZUV2ZW50KGV2ZW50OiBFdmVudCk6IEluc3RhbmNlIHtcblx0XHRyZXR1cm4gbHlyYUV2ZW50Q2xhc3NEZWYuY29uc3RydWN0TmF0aXZlSW5zdGFuY2UoW2V2ZW50XSk7XG5cdH1cblxuXHRwdWJsaWMgY3JlYXRlRXZlbnRIYW5kbGVyKGhhbmRsZXI6IExhbWJkYUZ1bmN0aW9uQ2FsbCwgZXZlbnROYW1lOiBzdHJpbmcpOiAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkIHtcblx0XHRyZXR1cm4gKGV2ZW50OiBFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0dGhpcy5nbG9iYWxFdmVudFBpcGVsaW5lLmVtaXQoXG5cdFx0XHRcdGV2ZW50TmFtZSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGludm9rZTogKCk6IGFueSA9PiB7XG5cdFx0XHRcdFx0XHRoYW5kbGVyLmV2YWxDYWxsKHRoaXMuY3JlYXRlRXZlbnQoZXZlbnQpKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGV2ZW50XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fTtcblx0fVxuXG5cblx0cHJpdmF0ZSBnZXRDbGFzc0RlZmluaXRpb24oY2xhc3NOYW1lOiBzdHJpbmcpOiBDbGFzc0RlZmluaXRpb24ge1xuXHRcdHJldHVybiB0aGlzLl9nbG9iYWxPYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChjbGFzc05hbWUpO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7dHlwZSBWTm9kZX0gZnJvbSBcIi4uL2NvcmUvdmRvbS92ZG9tXCI7XG5pbXBvcnQgdHlwZSB7SW5zdGFuY2V9IGZyb20gXCIuLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcblxuZXhwb3J0IGNsYXNzIEV2ZW50SGFuZGxlclJlZ2lzdHJ5IHtcblx0cHJpdmF0ZSByZWdpc3RyeTogV2Vha01hcDxIVE1MRWxlbWVudCwgUmVjb3JkPHN0cmluZywgRnVuY3Rpb24+PiA9IG5ldyBXZWFrTWFwPEhUTUxFbGVtZW50LCBSZWNvcmQ8c3RyaW5nLCBGdW5jdGlvbj4+KCk7XG5cblx0cHVibGljIHJlZ2lzdGVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwcm9wZXJ0eUtleTogc3RyaW5nLCBoYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xuXHRcdGNvbnN0IGV2ZW50SGFuZGxlcnM6IFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uPiA9IHRoaXMucmVnaXN0cnkuZ2V0KGVsZW1lbnQpID8/IHt9O1xuXG5cdFx0ZXZlbnRIYW5kbGVyc1twcm9wZXJ0eUtleV0gPSBoYW5kbGVyO1xuXG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoZWxlbWVudCwgZXZlbnRIYW5kbGVycyk7XG5cdH1cblxuXHRwdWJsaWMgdW5yZWdpc3RlcihlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcGVydHlLZXk6IHN0cmluZyk6IEZ1bmN0aW9uIHwgbnVsbCB7XG5cdFx0Y29uc3QgZXZlbnRIYW5kbGVyczogUmVjb3JkPHN0cmluZywgRnVuY3Rpb24+ID0gdGhpcy5yZWdpc3RyeS5nZXQoZWxlbWVudCkgPz8ge307XG5cblx0XHRjb25zdCBldmVudEhhbmRsZXI6IEZ1bmN0aW9uIHwgdW5kZWZpbmVkID0gZXZlbnRIYW5kbGVyc1twcm9wZXJ0eUtleV07XG5cdFx0aWYgKGV2ZW50SGFuZGxlcikge1xuXHRcdFx0ZGVsZXRlIGV2ZW50SGFuZGxlcnNbcHJvcGVydHlLZXldO1xuXG5cdFx0XHR0aGlzLnJlZ2lzdHJ5LnNldChlbGVtZW50LCBldmVudEhhbmRsZXJzKTtcblxuXHRcdFx0cmV0dXJuIGV2ZW50SGFuZGxlcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVkRPTSB7XG5cdHByaXZhdGUgaW5zdGFuY2VNYXA6IE1hcDxzdHJpbmcsIFZOb2RlPiA9IG5ldyBNYXA8c3RyaW5nLCBWTm9kZT4oKTtcblxuXHRwdWJsaWMgcmVnaXN0ZXIoaW5zdGFuY2U6IEluc3RhbmNlLCBub2RlOiBWTm9kZSk6IHZvaWQge1xuXHRcdHRoaXMuaW5zdGFuY2VNYXAuc2V0KGluc3RhbmNlLmlkLCBub2RlKTtcblx0fVxuXG5cdHB1YmxpYyB1bnJlZ2lzdGVyKGluc3RhbmNlOiBJbnN0YW5jZSk6IHZvaWQge1xuXHRcdHRoaXMuaW5zdGFuY2VNYXAuZGVsZXRlKGluc3RhbmNlLmlkKTtcblx0fVxuXG5cdHB1YmxpYyBmaW5kTm9kZUJ5Q29tcG9uZW50KGluc3RhbmNlOiBJbnN0YW5jZSk6IFZOb2RlIHtcblx0XHRjb25zdCB2Tm9kZTogVk5vZGUgfCB1bmRlZmluZWQgPSB0aGlzLmluc3RhbmNlTWFwLmdldChpbnN0YW5jZS5pZCk7XG5cdFx0aWYgKCF2Tm9kZSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBJbnN0YW5jZSB3aXRoIGlkICR7aW5zdGFuY2UuaWR9IG5vdCBmb3VuZC5gKTtcblx0XHR9XG5cdFx0cmV0dXJuIHZOb2RlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7dHlwZSBFbmdpbmUsIFdlYkx5cmFTY3JpcHR9IGZyb20gXCIuL2VuZ2luZVwiO1xuaW1wb3J0IHt0eXBlIEVsZW1lbnRQYXRjaGVyLCBIVE1MRWxlbWVudFBhdGNoZXJ9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHR5cGUge1ZDaGlsZH0gZnJvbSBcIi4uL2NvcmUvdmRvbS92ZG9tXCI7XG5pbXBvcnQge0V2ZW50UGlwZWxpbmV9IGZyb20gXCIuLi9jb3JlL2V2ZW50L3BpcGVsaW5lXCI7XG5pbXBvcnQgRXZlbnRzIGZyb20gXCIuL2V2ZW50c1wiO1xuaW1wb3J0IHt0eXBlIEluc3RhbmNlfSBmcm9tIFwiLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge0xhbWJkYUZ1bmN0aW9uQ2FsbH0gZnJvbSBcIi4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcnVudGltZVwiO1xuaW1wb3J0IHtFdmVudEhhbmRsZXJSZWdpc3RyeSwgVkRPTX0gZnJvbSBcIi4vcmVnaXN0cnlcIjtcbmltcG9ydCBMeXJhRXZlbnRzIGZyb20gXCIuLi9jb3JlL2V2ZW50L2V2ZW50c1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpY2F0aW9uUnVudGltZSB7XG5cdGdldCBlbmdpbmUoKTogRW5naW5lO1xuXG5cdGdldCBldmVudFBpcGVsaW5lKCk6IEV2ZW50UGlwZWxpbmU7XG5cblx0c3RhcnQodXJsOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcblxuXHRjcmVhdGVJbnN0YW5jZShjbGFzc05hbWU6IHN0cmluZyk6IEluc3RhbmNlO1xuXG5cdGNhbGxSb290SW5zdGFuY2VNZXRob2QobWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSk6IGFueTtcblxuXHRjYWxsTWV0aG9kKGluc3RhbmNlOiBJbnN0YW5jZSwgbWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSk6IGFueTtcblxuXHRyZW5kZXJDb21wb25lbnQoaW5zdGFuY2U6IEluc3RhbmNlKTogVkNoaWxkO1xuXG5cdGFkZEV2ZW50SGFuZGxlcihlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcGVydHlLZXk6IHN0cmluZywgaGFuZGxlcjogTGFtYmRhRnVuY3Rpb25DYWxsKTogdm9pZDtcblxuXHRyZW1vdmVFdmVudEhhbmRsZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIHByb3BlcnR5S2V5OiBzdHJpbmcpOiB2b2lkO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RBcHBsaWNhdGlvblJ1bnRpbWUgaW1wbGVtZW50cyBBcHBsaWNhdGlvblJ1bnRpbWUge1xuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZWFkb25seSBfZW5naW5lOiBFbmdpbmUsXG5cdFx0cHJpdmF0ZSByZWFkb25seSBfZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSA9IG5ldyBFdmVudFBpcGVsaW5lKCksXG5cdFx0cHJpdmF0ZSByZWFkb25seSBldmVudEhhbmRsZXJSZWdpc3RyeTogRXZlbnRIYW5kbGVyUmVnaXN0cnkgPSBuZXcgRXZlbnRIYW5kbGVyUmVnaXN0cnkoKVxuXHQpIHtcblx0fVxuXG5cdGdldCBlbmdpbmUoKTogRW5naW5lIHtcblx0XHRyZXR1cm4gdGhpcy5fZW5naW5lO1xuXHR9XG5cblx0Z2V0IGV2ZW50UGlwZWxpbmUoKTogRXZlbnRQaXBlbGluZSB7XG5cdFx0cmV0dXJuIHRoaXMuX2V2ZW50UGlwZWxpbmU7XG5cdH1cblxuXHRwdWJsaWMgcmVuZGVyQ29tcG9uZW50KGluc3RhbmNlOiBJbnN0YW5jZSk6IFZDaGlsZCB7XG5cdFx0cmV0dXJuIHRoaXMuY2FsbE1ldGhvZChpbnN0YW5jZSwgJ3JlbmRlcicsIFtdKSBhcyBWQ2hpbGRcblx0fVxuXG5cdHB1YmxpYyBzdGFydCh1cmw6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcblx0fVxuXG5cdHB1YmxpYyBjcmVhdGVJbnN0YW5jZShjbGFzc05hbWU6IHN0cmluZyk6IEluc3RhbmNlIHtcblx0XHRyZXR1cm4gdGhpcy5fZW5naW5lLmNyZWF0ZUluc3RhbmNlKGNsYXNzTmFtZSk7XG5cdH1cblxuXHRwdWJsaWMgY2FsbFJvb3RJbnN0YW5jZU1ldGhvZChtZXRob2ROYW1lOiBzdHJpbmcsIGFyZ3M6IGFueVtdID0gW10pOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLl9lbmdpbmUuY2FsbFJvb3RJbnN0YW5jZU1ldGhvZChtZXRob2ROYW1lLCBhcmdzKTtcblx0fVxuXG5cdHB1YmxpYyBjYWxsTWV0aG9kKGluc3RhbmNlOiBJbnN0YW5jZSwgbWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSA9IFtdKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5fZW5naW5lLmNhbGxJbnN0YW5jZU1ldGhvZChpbnN0YW5jZSwgbWV0aG9kTmFtZSwgYXJncyk7XG5cdH1cblxuXHRwdWJsaWMgYWRkRXZlbnRIYW5kbGVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwcm9wZXJ0eUtleTogc3RyaW5nLCBoYW5kbGVyOiBMYW1iZGFGdW5jdGlvbkNhbGwpOiB2b2lkIHtcblx0XHRjb25zdCBldmVudE5hbWU6IHN0cmluZyA9IHByb3BlcnR5S2V5LnNsaWNlKDIpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0Y29uc3QgZXZlbnRIYW5kbGVyOiAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkID0gdGhpcy5lbmdpbmUuY3JlYXRlRXZlbnRIYW5kbGVyKGhhbmRsZXIsIEV2ZW50cy5ET01fRVZFTlQpO1xuXG5cdFx0dGhpcy5ldmVudEhhbmRsZXJSZWdpc3RyeS5yZWdpc3RlcihlbGVtZW50LCBwcm9wZXJ0eUtleSwgZXZlbnRIYW5kbGVyKTtcblxuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50SGFuZGxlcik7XG5cdH1cblxuXHRwdWJsaWMgcmVtb3ZlRXZlbnRIYW5kbGVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwcm9wZXJ0eUtleTogc3RyaW5nKTogdm9pZCB7XG5cdFx0Y29uc3QgZXZlbnROYW1lOiBzdHJpbmcgPSBwcm9wZXJ0eUtleS5zbGljZSgyKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcblxuXHRcdGNvbnN0IGV2ZW50SGFuZGxlcjogRnVuY3Rpb24gfCBudWxsID0gdGhpcy5ldmVudEhhbmRsZXJSZWdpc3RyeS51bnJlZ2lzdGVyKGVsZW1lbnQsIHByb3BlcnR5S2V5KTtcblxuXHRcdGlmIChldmVudEhhbmRsZXIpIHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50SGFuZGxlciBhcyBFdmVudExpc3RlbmVyKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFdlYkFwcGxpY2F0aW9uUnVudGltZSBleHRlbmRzIEFic3RyYWN0QXBwbGljYXRpb25SdW50aW1lIHtcblx0cHJpdmF0ZSByZWFkb25seSB2ZG9tOiBWRE9NID0gbmV3IFZET00oKTtcblx0cHJpdmF0ZSByZWFkb25seSBwYXRjaGVyOiBFbGVtZW50UGF0Y2hlcjtcblxuXHRwcml2YXRlIGlzUmVuZGVyaW5nOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0bW91bnRQb2ludDogSFRNTEVsZW1lbnQsXG5cdFx0aXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlLFxuXHRcdGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUgPSBuZXcgRXZlbnRQaXBlbGluZSgpLFxuXHRcdGV2ZW50SGFuZGxlclJlZ2lzdHJ5OiBFdmVudEhhbmRsZXJSZWdpc3RyeSA9IG5ldyBFdmVudEhhbmRsZXJSZWdpc3RyeSgpXG5cdCkge1xuXHRcdHN1cGVyKG5ldyBXZWJMeXJhU2NyaXB0KGV2ZW50UGlwZWxpbmUsIGlzRGVidWcpLCBldmVudFBpcGVsaW5lLCBldmVudEhhbmRsZXJSZWdpc3RyeSk7XG5cblx0XHR0aGlzLnBhdGNoZXIgPSBuZXcgSFRNTEVsZW1lbnRQYXRjaGVyKG1vdW50UG9pbnQsIHRoaXMsIHRoaXMudmRvbSk7XG5cblx0XHR0aGlzLmV4cG9zZVJ1bnRpbWUoKTtcblx0fVxuXG5cdHB1YmxpYyBvdmVycmlkZSBhc3luYyBzdGFydCh1cmw6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcgPSAnUHJvZ3JhbScpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRhd2FpdCB0aGlzLmVuZ2luZS5leGVjdXRlRW50cnlGaWxlKHVybCwgY2xhc3NOYW1lKTtcblxuXHRcdHRoaXMucmVnaXN0ZXJFdmVudExpc3RlbmVycygpO1xuXG5cdFx0dGhpcy5yZXF1ZXN0Q29tcG9uZW50UmVuZGVyKHRoaXMuZW5naW5lLmdldFJvb3RJbnN0YW5jZSgpKTtcblx0fVxuXG5cblx0cHVibGljIHJlcXVlc3RDb21wb25lbnRSZW5kZXIoaW5zdGFuY2U6IEluc3RhbmNlLCBvbGRDaGlsZD86IFZDaGlsZCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzUmVuZGVyaW5nKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0cXVldWVNaWNyb3Rhc2soKCk6IHZvaWQgPT4gdGhpcy5wZXJmb3JtQ29tcG9uZW50UmVuZGVyKGluc3RhbmNlLCBvbGRDaGlsZCkpO1xuXHR9XG5cblx0cHJpdmF0ZSBwZXJmb3JtQ29tcG9uZW50UmVuZGVyKGluc3RhbmNlOiBJbnN0YW5jZSwgb2xkQ2hpbGQ6IFZDaGlsZCB8IG51bGwgPSBudWxsKTogdm9pZCB7XG5cdFx0dGhpcy5pc1JlbmRlcmluZyA9IHRydWU7XG5cblx0XHRjb25zdCBuZXh0Q2hpbGQ6IFZDaGlsZCA9IHRoaXMucmVuZGVyQ29tcG9uZW50KGluc3RhbmNlKTtcblxuXHRcdHRoaXMucGF0Y2hlci5wYXRjaChvbGRDaGlsZCwgbmV4dENoaWxkKTtcblxuXHRcdHRoaXMudmRvbS5yZWdpc3RlcihpbnN0YW5jZSwgbmV4dENoaWxkKTtcblxuXHRcdGluc3RhbmNlLm1hcmtDbGVhbih0aGlzLmV2ZW50UGlwZWxpbmUpO1xuXG5cdFx0dGhpcy5pc1JlbmRlcmluZyA9IGZhbHNlO1xuXHR9XG5cblx0cHJpdmF0ZSByZWdpc3RlckV2ZW50TGlzdGVuZXJzKCk6IHZvaWQge1xuXHRcdHRoaXMuZXZlbnRQaXBlbGluZVxuXHRcdCAgICAub24oRXZlbnRzLkRPTV9FVkVOVCwgKHtpbnZva2V9OiBhbnkpOiB2b2lkID0+IHtcblx0XHRcdCAgICBpbnZva2UoKTtcblx0XHQgICAgfSk7XG5cblx0XHR0aGlzLmV2ZW50UGlwZWxpbmVcblx0XHQgICAgLm9uKEx5cmFFdmVudHMuTFlSQV9JTlNUQU5DRV9ESVJUWV9TVEFURSwgKHtpbnN0YW5jZX06IGFueSk6IHZvaWQgPT4ge1xuXHRcdFx0ICAgIHRoaXMucmVxdWVzdENvbXBvbmVudFJlbmRlcihpbnN0YW5jZSwgdGhpcy52ZG9tLmZpbmROb2RlQnlDb21wb25lbnQoaW5zdGFuY2UpIGFzIFZDaGlsZCk7XG5cdFx0ICAgIH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBleHBvc2VSdW50aW1lKCk6IHZvaWQge1xuXHRcdGNvbnN0IGdsb2JhbDogYW55ID0gd2luZG93IGFzIFdpbmRvdztcblxuXHRcdGdsb2JhbC5fX0xZUkFfXyA9IGdsb2JhbC5fX0xZUkFfXyB8fCB7XG5cdFx0XHR2ZXJzaW9uOiAnMC4wLjEnLFxuXHRcdFx0cnVudGltZTogdGhpcyxcblx0XHR9O1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7UGFyc2VyfSBmcm9tIFwiLi9jb3JlL3BhcnNlci9wYXJzZXJcIjtcbmltcG9ydCB7d3JhcEpzRXJyb3J9IGZyb20gXCIuL2NvcmUvZXJyb3JzXCI7XG5pbXBvcnQge2ZldGNoU291cmNlLCBTb3VyY2V9IGZyb20gXCIuL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcbmltcG9ydCB7QVNUTm9kZX0gZnJvbSBcIi4vY29yZS9hc3RcIjtcbmltcG9ydCB7VG9rZW5pemVyfSBmcm9tIFwiLi9jb3JlL3Rva2VuaXplci90b2tlbml6ZXJcIjtcbmltcG9ydCB7VG9rZW59IGZyb20gXCIuL2NvcmUvZ3JhbW1hclwiO1xuaW1wb3J0IHtMeXJhU2NyaXB0UHJvZ3JhbX0gZnJvbSBcIi4vY29yZS9wcm9ncmFtXCI7XG5pbXBvcnQge0V2ZW50UGlwZWxpbmV9IGZyb20gXCIuL2NvcmUvZXZlbnQvcGlwZWxpbmVcIjtcbmltcG9ydCB7U3RhdGV9IGZyb20gXCIuL2NvcmUvZXZlbnQvc3RhdGVcIjtcbmltcG9ydCB7SFRNTEVsZW1lbnRDcmVhdG9yfSBmcm9tIFwiLi9ob3N0L2RvbVwiO1xuXG5leHBvcnQge1dlYkx5cmFTY3JpcHR9IGZyb20gXCIuL2hvc3QvZW5naW5lXCI7XG5leHBvcnQge1dlYkFwcGxpY2F0aW9uUnVudGltZX0gZnJvbSBcIi4vaG9zdC9ydW50aW1lXCI7XG5cbmNvbnN0IEx5cmEgPSB7XG5cdFNvdXJjZSxcblx0UGFyc2VyLFxuXHRUb2tlbml6ZXIsXG5cdEV2ZW50UGlwZWxpbmUsXG5cdEhUTUxFbGVtZW50Q3JlYXRvcixcblx0U3RhdGUsXG5cdFByb2dyYW06IChpc0RlYnVnOiBib29sZWFuKTogTHlyYVNjcmlwdFByb2dyYW0gPT4gUHJvZ3JhbShpc0RlYnVnKSxcblx0ZXhlY3V0ZTogKHNvdXJjZTogU291cmNlLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+ID0+IGV4ZWN1dGUoc291cmNlLCBpc0RlYnVnKSxcblx0ZXhlY3V0ZUZyb21TdHJpbmc6IChjb2RlOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4gPT4gZXhlY3V0ZUZyb21TdHJpbmcoY29kZSwgaXNEZWJ1ZyksXG5cdGV4ZWN1dGVGcm9tVXJsOiBhc3luYyAodXJsOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4gPT4gZXhlY3V0ZUZyb21VcmwodXJsLCBpc0RlYnVnKSxcblx0ZXhlY3V0ZVRlc3Q6IChzb3VyY2U6IFNvdXJjZSwgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiBleGVjdXRlVGVzdChzb3VyY2UsIGlzRGVidWcpLFxuXHRleGVjdXRlVGVzdFN0cmluZzogKGNvZGU6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiBleGVjdXRlVGVzdFN0cmluZyhjb2RlLCBpc0RlYnVnKSxcblx0ZXhlY3V0ZVRlc3RVcmw6ICh1cmw6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiBleGVjdXRlVGVzdFVybCh1cmwsIGlzRGVidWcpLFxuXHR0b2tlbml6ZTogKHNvdXJjZTogU291cmNlKTogVG9rZW5bXSA9PiB0b2tlbml6ZShzb3VyY2UpLFxuXHR0b2tlbml6ZVVybDogKHVybDogc3RyaW5nKTogUHJvbWlzZTxUb2tlbltdPiA9PiB0b2tlbml6ZVVybCh1cmwpLFxuXHRwYXJzZVRyZWU6IChzb3VyY2U6IFNvdXJjZSk6IEFTVE5vZGUgPT4gcGFyc2VUcmVlKHNvdXJjZSksXG5cdHBhcnNlVHJlZVVybDogKHVybDogc3RyaW5nKTogUHJvbWlzZTxBU1ROb2RlPiA9PiBwYXJzZVRyZWVVcmwodXJsKSxcbn07XG5cbmZ1bmN0aW9uIFByb2dyYW0oaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogTHlyYVNjcmlwdFByb2dyYW0ge1xuXHRyZXR1cm4gbmV3IEx5cmFTY3JpcHRQcm9ncmFtKGlzRGVidWcpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlKHNvdXJjZTogU291cmNlLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgUHJvZ3JhbShpc0RlYnVnKVxuXHRcdFx0LmV4ZWN1dGUoc291cmNlKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcih3cmFwSnNFcnJvcihlcnJvciwgc291cmNlKVxuXHRcdFx0XHQgICAgICAgICAgICAgIC5mb3JtYXQoKSk7XG5cdFx0fVxuXHRcdHRocm93IGVycm9yO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVGcm9tVXJsKHVybDogc3RyaW5nLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0cmV0dXJuIGF3YWl0IGV4ZWN1dGUoYXdhaXQgZmV0Y2hTb3VyY2UodXJsKSwgaXNEZWJ1Zyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVGcm9tU3RyaW5nKGNvZGU6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHNvdXJjZSA9IG5ldyBTb3VyY2UoY29kZSk7XG5cblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgUHJvZ3JhbShpc0RlYnVnKVxuXHRcdFx0LmV4ZWN1dGUoc291cmNlKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcih3cmFwSnNFcnJvcihlcnJvciwgc291cmNlKVxuXHRcdFx0XHQgICAgICAgICAgICAgIC5mb3JtYXQoKSk7XG5cdFx0fVxuXHRcdHRocm93IGVycm9yO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVUZXN0KHNvdXJjZTogU291cmNlLCBpc0RlYnVnID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgUHJvZ3JhbShpc0RlYnVnKVxuXHRcdFx0LmV4ZWN1dGVUZXN0KHNvdXJjZSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3Iod3JhcEpzRXJyb3IoZXJyb3IsIHNvdXJjZSlcblx0XHRcdFx0ICAgICAgICAgICAgICAuZm9ybWF0KCkpO1xuXHRcdH1cblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlVGVzdFVybCh1cmw6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdHJldHVybiBhd2FpdCBleGVjdXRlVGVzdChhd2FpdCBmZXRjaFNvdXJjZSh1cmwpLCBpc0RlYnVnKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZVRlc3RTdHJpbmcoY29kZTogc3RyaW5nLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgc291cmNlID0gbmV3IFNvdXJjZShjb2RlKTtcblxuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBQcm9ncmFtKGlzRGVidWcpXG5cdFx0XHQuZXhlY3V0ZVRlc3Qoc291cmNlKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcih3cmFwSnNFcnJvcihlcnJvciwgc291cmNlKVxuXHRcdFx0XHQgICAgICAgICAgICAgIC5mb3JtYXQoKSk7XG5cdFx0fVxuXHRcdHRocm93IGVycm9yO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbml6ZShzb3VyY2U6IFNvdXJjZSk6IFRva2VuW10ge1xuXHRyZXR1cm4gbmV3IFRva2VuaXplcihzb3VyY2UpLnRva2VuaXplKCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0b2tlbml6ZVVybCh1cmw6IHN0cmluZyk6IFByb21pc2U8VG9rZW5bXT4ge1xuXHRyZXR1cm4gdG9rZW5pemUoYXdhaXQgZmV0Y2hTb3VyY2UodXJsKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRyZWUoc291cmNlOiBTb3VyY2UpOiBBU1ROb2RlIHtcblx0cmV0dXJuIG5ldyBQYXJzZXIoc291cmNlKS5wYXJzZSgpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGFyc2VUcmVlVXJsKHVybDogc3RyaW5nKTogUHJvbWlzZTxBU1ROb2RlPiB7XG5cdHJldHVybiBwYXJzZVRyZWUoYXdhaXQgZmV0Y2hTb3VyY2UodXJsKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEx5cmE7XG4iCiAgXSwKICAibWFwcGluZ3MiOiAiO0FBRU8sTUFBTSxRQUFRO0FBQUEsU0FDYixTQUFpQjtBQUFBLFNBQ2pCLE9BQWU7QUFBQSxTQUNmLE1BQWM7QUFBQSxTQUNkLE9BQWU7QUFBQSxTQUNmLFFBQWdCO0FBQUEsU0FDaEIsWUFBb0I7QUFBQSxTQUNwQixVQUFrQjtBQUFBLFNBQ2xCLGFBQXFCO0FBQUEsU0FDckIsY0FBc0I7QUFBQSxTQUN0QixNQUFjO0FBQUEsU0FDZCxPQUFlO0FBQUEsU0FDZixTQUFpQjtBQUFBLFNBQ2pCLFVBQWtCO0FBQUEsU0FDbEIsU0FBaUI7QUFBQSxTQUNqQixXQUFtQjtBQUFBLFNBQ25CLFNBQWlCO0FBQUEsU0FDakIsUUFBZ0I7QUFBQSxTQUNoQixPQUFlO0FBQUEsU0FDZixRQUFnQjtBQUFBLFNBQ2hCLEtBQWE7QUFBQSxTQUNiLE9BQWU7QUFBQSxTQUNmLFFBQWdCO0FBQUEsU0FDaEIsVUFBa0I7QUFBQSxTQUNsQixVQUFrQjtBQUFBLFNBQ2xCLEtBQWE7QUFBQSxTQUNiLE9BQWU7QUFBQSxTQUNmLE9BQWU7QUFBQSxTQUVmLHNCQUE4QjtB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QUU5QixJQUFJO0FBQUEsSUFDSCxPQUFPLE1BQU0sUUFBUSxPQUFPLEVBQzFCLFlBQVksTUFBTTtBQUFBLElBQ25CLE9BQU8sT0FBTztBQUFBLElBQ2YsSUFBSSxpQkFBaUIsT0FBTztBQUFBLE1BQzNCLFFBQVEsTUFBTSxZQUFZLE9BQU8sTUFBTSxFQUN2QixPQUFPLENBQUM7QUFBQSxJQUN6QjtBQUFBLElBQ0EsTUFBTTtBQUFBO0FBQUE7QUFJRCxTQUFTLFFBQVEsQ0FBQyxRQUF5QjtBQUFBLEVBQ2pELE9BQU8sSUFBSSxVQUFVLE1BQU0sRUFBRSxTQUFTO0FBQUE7QUFHdkMsZUFBc0IsV0FBVyxDQUFDLEtBQStCO0FBQUEsRUFDaEUsT0FBTyxTQUFTLE1BQU0sWUFBWSxHQUFHLENBQUM7QUFBQTtBQUdoQyxTQUFTLFNBQVMsQ0FBQyxRQUF5QjtBQUFBLEVBQ2xELE9BQU8sSUFBSSxPQUFPLE1BQU0sRUFBRSxNQUFNO0FBQUE7QUFHakMsZUFBc0IsWUFBWSxDQUFDLEtBQStCO0FBQUEsRUFDakUsT0FBTyxVQUFVLE1BQU0sWUFBWSxHQUFHLENBQUM7QUFBQTtBQUd4QyxJQUFlOyIsCiAgImRlYnVnSWQiOiAiQzBFNkMzMzM1MzAyOTJCMTY0NzU2RTIxNjQ3NTZFMjEiLAogICJuYW1lcyI6IFtdCn0=
