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
  static OPERATOR = "operator";
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
    GRAMMAR.OPERATOR,
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
  static OPERATOR = "operator_declaration";
  static VDOM = "vdom_declaration";
  static VDOM_TEXT = "vdom_text_declaration";
  static VDOM_EXPRESSION = "vdom_expression";
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

class ASTOperatorNode extends ASTMethodNode {
  static ALLOWED_OPERATORS = [
    GRAMMAR.PLUS,
    GRAMMAR.MINUS,
    GRAMMAR.MULTIPLY,
    GRAMMAR.DIVIDE,
    GRAMMAR.MODULUS,
    GRAMMAR.EQUAL,
    GRAMMAR.NOT_EQUAL,
    GRAMMAR.LESS_THAN,
    GRAMMAR.LESS_EQUAL,
    GRAMMAR.GREATER_THAN,
    GRAMMAR.GREATER_EQUAL,
    GRAMMAR.EXCLAMATION_MARK
  ];
  static OPERATOR_METHOD_MAP = new Map([
    [GRAMMAR.PLUS, "__add"],
    [GRAMMAR.MINUS, "__subtract"],
    [GRAMMAR.MULTIPLY, "__multiply"],
    [GRAMMAR.DIVIDE, "__divide"],
    [GRAMMAR.MODULUS, "__modulus"],
    [GRAMMAR.EQUAL, "__equal"],
    [GRAMMAR.NOT_EQUAL, "__not_equal"],
    [GRAMMAR.LESS_THAN, "__less_than"],
    [GRAMMAR.LESS_EQUAL, "__less_equal"],
    [GRAMMAR.GREATER_THAN, "__greater_than"],
    [GRAMMAR.GREATER_EQUAL, "__greater_equal"],
    [GRAMMAR.EXCLAMATION_MARK, "__not"]
  ]);
  operator;
  constructor(operator, annotations, modifiers, typeParameters, parameters, returnType = null, children = []) {
    super(operator, ASTNodeType.OPERATOR, annotations, modifiers, typeParameters, parameters, returnType, children);
    this.operator = operator;
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

class ASTVDomExpressionNode extends ASTNode {
  expr;
  constructor(expr) {
    super(ASTNodeType.VDOM_EXPRESSION);
    this.expr = expr;
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
  __add(other) {
    return new LyraNumber(this.value + other.value);
  }
  __subtract(other) {
    return new LyraNumber(this.value - other.value);
  }
  __multiply(other) {
    return new LyraNumber(this.value * other.value);
  }
  __divide(other) {
    return new LyraNumber(this.value / other.value);
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
	public constructor(value: number);
	
	public operator +(other: ${CLASS_NAME4}): ${CLASS_NAME4};
	
	private __add(other: ${CLASS_NAME4}): ${CLASS_NAME4};
	
	public operator -(other: ${CLASS_NAME4}): ${CLASS_NAME4};
	
	private __subtract(other: ${CLASS_NAME4}): ${CLASS_NAME4};
	
	public operator *(other: ${CLASS_NAME4}): ${CLASS_NAME4};
	
	private __multiply(other: ${CLASS_NAME4}): ${CLASS_NAME4};
	
	public operator /(other: ${CLASS_NAME4}): ${CLASS_NAME4};
	
	private __divide(other: ${CLASS_NAME4}): ${CLASS_NAME4};

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
        return evalMember(expr, objectRegistry, environment, eventPipeline, thisValue);
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
  if (left instanceof Instance && right instanceof Instance) {
    if (left.__classDef.nativeInstance && right.__classDef.nativeInstance) {
      const methodName = ASTOperatorNode.OPERATOR_METHOD_MAP.get(expr.operator);
      if (!methodName) {
        throwRuntimeError(`Unknown operator ${expr.operator}`);
      }
      return callInstanceMethod(left, left.findeMethodNode(methodName), [right], objectRegistry, environment, eventPipeline);
    }
    return callInstanceMethod(left, left.findeMethodNode(expr.operator), [right], objectRegistry, environment, eventPipeline);
  }
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
function evalMember(expr, objectRegistry, environment, eventPipeline, thisValue = null) {
  const object = evalExpression(expr.object, objectRegistry, environment, eventPipeline, thisValue);
  if (!object) {
    throwRuntimeError(`Member access on null.`, expr.span);
  }
  if (expr.property in object.__instanceFields) {
    return object.__instanceFields[expr.property];
  }
  if (expr.property in object.__staticFields) {
    return object.__staticFields[expr.property];
  }
  throwRuntimeError(`Property '${expr.property}' not found`, expr.span);
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
  const value = castValue(evalExpression(node.argument, objectRegistry, environment, eventPipeline, thisValue));
  if (value instanceof Instance) {
    return callInstanceMethod(value, value.findeMethodNode(node.operator), [], objectRegistry, environment, eventPipeline);
  }
  switch (node.operator) {
    case GRAMMAR.EXCLAMATION_MARK: {
      return !value;
    }
    case GRAMMAR.MINUS: {
      return -value;
    }
    case GRAMMAR.PLUS: {
      return +value;
    }
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
    switch (true) {
      case child instanceof ASTVDomTextNode: {
        textBuffer.push(child.value);
        break;
      }
      case child instanceof ASTVDomExpressionNode: {
        textBuffer.push(evalExpression(child.expr, objectRegistry, environment, eventPipeline, thisValue));
        break;
      }
      case child instanceof ASTVDomNode: {
        children.push(evalVDomNode(child, objectRegistry, environment, eventPipeline, thisValue));
      }
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
  if (parser.peekIs(GRAMMAR.OPERATOR)) {
    return parseOperatorMember(parser, startToken, annotations, modifiers);
  }
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
}
function parseOperatorMember(parser, startToken, annotations, modifiers) {
  parser.expectKeyword(GRAMMAR.OPERATOR);
  const operatorToken = parser.expectOperator();
  if (!modifiers.public && !modifiers.private) {
    modifiers.public = true;
  }
  parser.expectPunctuation(GRAMMAR.PARENTHESES_OPEN);
  const parameters = parseParameters(parser);
  parser.expectPunctuation(GRAMMAR.PARENTHESES_CLOSE);
  let returnType = null;
  if (parser.consumeIfPunctuation(GRAMMAR.COLON)) {
    returnType = parseType(parser);
  }
  const children = parseBlock(parser);
  const node = new ASTOperatorNode(operatorToken.value, annotations, modifiers, [], parameters, returnType, children);
  node.span = spanFrom(startToken, operatorToken);
  if (!ASTOperatorNode.ALLOWED_OPERATORS.includes(node.operator)) {
    throwParserError(`Operator ${node.operator} is not overloadable.`, node.span);
  }
  return node;
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
  if (parser.consumeIfPunctuation(GRAMMAR.BRACE_OPEN)) {
    const expression = parseExpression(parser);
    parser.expectPunctuation(GRAMMAR.BRACE_CLOSE);
    return new ASTVDomExpressionNode(expression);
  }
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
  switch (token.value) {
    case GRAMMAR.EXCLAMATION_MARK: {
      parser.next();
      const unary = parseUnary(parser);
      return new ASTUnaryNode(GRAMMAR.EXCLAMATION_MARK, unary);
    }
    case GRAMMAR.MINUS: {
      parser.next();
      const unary = parseUnary(parser);
      return new ASTUnaryNode(GRAMMAR.MINUS, unary);
    }
    case GRAMMAR.PLUS: {
      parser.next();
      const unary = parseUnary(parser);
      return new ASTUnaryNode(GRAMMAR.PLUS, unary);
    }
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
    if (left instanceof ClassRefType && right instanceof ClassRefType) {
      if (left.accepts(right)) {
        return left;
      }
    }
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
    if (operand instanceof ClassRefType) {
      return operand;
    }
    switch (op) {
      case GRAMMAR.EXCLAMATION_MARK: {
        if (operand.equals(Types.BOOLEAN)) {
          return Types.BOOLEAN;
        }
        this.typeError(`Unary '!' requires boolean, got ${operand.name}`, node);
      }
      case GRAMMAR.MINUS: {
        if (operand.equals(Types.NUMBER)) {
          return Types.BOOLEAN;
        }
        this.typeError(`Unary '-' requires number, got ${operand.name}`, node);
      }
      case GRAMMAR.PLUS: {
        if (operand.equals(Types.NUMBER)) {
          return Types.BOOLEAN;
        }
        this.typeError(`Unary '+' requires number, got ${operand.name}`, node);
      }
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

//# debugId=DC1FBF18DC579F5F64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibGFuZ3VhZ2Uvc3JjL2NvcmUvZ3JhbW1hci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9hc3QudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvdG9rZW5pemVyL3Rva2VuaXplci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9lcnJvcnMudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvbmF0aXZlX2NsYXNzLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX2NvbnZlcnNpb24udHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9zdHJpbmcudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9zeXN0ZW0udHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9hc3NlcnQudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9udW1iZXIudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9hcnJheS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9ldmVudC9zdGF0ZS50cyIsICJsYW5ndWFnZS9zcmMvbGlicmFyeS9jbGFzc2VzL3N0YXRlLnRzIiwgImxhbmd1YWdlL3NyYy9saWJyYXJ5L2NsYXNzZXMvZXZlbnQudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9ib29sZWFuLnRzIiwgImxhbmd1YWdlL3NyYy9saWJyYXJ5L25hdGl2ZV9jbGFzc2VzLnRzIiwgImxhbmd1YWdlL3NyYy9saWJyYXJ5L25hdGl2ZV9mdW5jdGlvbnMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvdHlwZXMvdHlwZV9vYmplY3RzLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL3R5cGVzL2F1dG9ib3hpbmcudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcnVudGltZS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9ldmVudC9ldmVudHMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0cy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9wYXJzZXIvcGFyc2VyX3N0YXRtZW50cy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9wYXJzZXIvcGFyc2VyLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5LnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL3R5cGVzL3R5cGVjaGVja2VyLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2xpbmtlci9kZXBlbmRlbmNpZXMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvbGlua2VyL2xpbmtlci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS90ZXN0cy90ZXN0c3VpdGVzLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2xvYWRlcnMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvZXZlbnQvcGlwZWxpbmUudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvcHJvZ3JhbS50cyIsICJsYW5ndWFnZS9zcmMvaG9zdC9ldmVudHMudHMiLCAibGFuZ3VhZ2Uvc3JjL2hvc3QvZG9tLnRzIiwgImxhbmd1YWdlL3NyYy9ob3N0L2VuZ2luZS50cyIsICJsYW5ndWFnZS9zcmMvaG9zdC9yZWdpc3RyeS50cyIsICJsYW5ndWFnZS9zcmMvaG9zdC9ydW50aW1lLnRzIiwgImxhbmd1YWdlL3NyYy9pbmRleC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICJpbXBvcnQgdHlwZSB7U291cmNlfSBmcm9tIFwiLi9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5leHBvcnQgY2xhc3MgR1JBTU1BUiB7XG5cdHN0YXRpYyBJTVBPUlQ6IHN0cmluZyA9ICdpbXBvcnQnO1xuXHRzdGF0aWMgRlJPTTogc3RyaW5nID0gJ2Zyb20nO1xuXHRzdGF0aWMgTEVUOiBzdHJpbmcgPSAnbGV0Jztcblx0c3RhdGljIE9QRU46IHN0cmluZyA9ICdvcGVuJztcblx0c3RhdGljIENMQVNTOiBzdHJpbmcgPSAnY2xhc3MnO1xuXHRzdGF0aWMgSU5URVJGQUNFOiBzdHJpbmcgPSAnaW50ZXJmYWNlJztcblx0c3RhdGljIEVYVEVORFM6IHN0cmluZyA9ICdleHRlbmRzJztcblx0c3RhdGljIElNUExFTUVOVFM6IHN0cmluZyA9ICdpbXBsZW1lbnRzJztcblx0c3RhdGljIENPTlNUUlVDVE9SOiBzdHJpbmcgPSAnY29uc3RydWN0b3InO1xuXHRzdGF0aWMgT1BFUkFUT1I6IHN0cmluZyA9ICdvcGVyYXRvcic7XG5cdHN0YXRpYyBORVc6IHN0cmluZyA9ICduZXcnO1xuXHRzdGF0aWMgVEhJUzogc3RyaW5nID0gJ3RoaXMnO1xuXHRzdGF0aWMgUFVCTElDOiBzdHJpbmcgPSAncHVibGljJztcblx0c3RhdGljIFBSSVZBVEU6IHN0cmluZyA9ICdwcml2YXRlJztcblx0c3RhdGljIFNUQVRJQzogc3RyaW5nID0gJ3N0YXRpYyc7XG5cdHN0YXRpYyBSRUFET05MWTogc3RyaW5nID0gJ3JlYWRvbmx5Jztcblx0c3RhdGljIFJFVFVSTjogc3RyaW5nID0gJ3JldHVybic7XG5cdHN0YXRpYyBTVVBFUjogc3RyaW5nID0gJ3N1cGVyJztcblx0c3RhdGljIFRSVUU6IHN0cmluZyA9ICd0cnVlJztcblx0c3RhdGljIEZBTFNFOiBzdHJpbmcgPSAnZmFsc2UnO1xuXHRzdGF0aWMgSUY6IHN0cmluZyA9ICdpZic7XG5cdHN0YXRpYyBFTFNFOiBzdHJpbmcgPSAnZWxzZSc7XG5cdHN0YXRpYyBNQVRDSDogc3RyaW5nID0gJ21hdGNoJztcblx0c3RhdGljIERFRkFVTFQ6IHN0cmluZyA9ICdkZWZhdWx0Jztcblx0c3RhdGljIEZPUkVBQ0g6IHN0cmluZyA9ICdmb3JlYWNoJztcblx0c3RhdGljIElOOiBzdHJpbmcgPSAnaW4nO1xuXHRzdGF0aWMgTlVMTDogc3RyaW5nID0gJ251bGwnO1xuXHRzdGF0aWMgVkRPTTogc3RyaW5nID0gJ3Zkb20nO1xuXG5cdHN0YXRpYyBCUkFDS0VUX1NRVUFSRV9PUEVOOiBzdHJpbmcgPSAnWyc7XG5cdHN0YXRpYyBCUkFDS0VUX1NRVUFSRV9DTE9TRTogc3RyaW5nID0gJ10nO1xuXHRzdGF0aWMgQlJBQ0VfT1BFTjogc3RyaW5nID0gJ3snO1xuXHRzdGF0aWMgQlJBQ0VfQ0xPU0U6IHN0cmluZyA9ICd9Jztcblx0c3RhdGljIFBBUkVOVEhFU0VTX09QRU46IHN0cmluZyA9ICcoJztcblx0c3RhdGljIFBBUkVOVEhFU0VTX0NMT1NFOiBzdHJpbmcgPSAnKSc7XG5cdHN0YXRpYyBTRU1JQ09MT046IHN0cmluZyA9ICc7Jztcblx0c3RhdGljIENPTE9OOiBzdHJpbmcgPSAnOic7XG5cdHN0YXRpYyBDT01NQTogc3RyaW5nID0gJywnO1xuXG5cdHN0YXRpYyBBUlJPVzogc3RyaW5nID0gJy0+Jztcblx0c3RhdGljIERPVDogc3RyaW5nID0gJy4nO1xuXHRzdGF0aWMgQVNTSUdOOiBzdHJpbmcgPSAnPSc7XG5cdHN0YXRpYyBQTFVTOiBzdHJpbmcgPSAnKyc7XG5cdHN0YXRpYyBNSU5VUzogc3RyaW5nID0gJy0nO1xuXHRzdGF0aWMgRElWSURFOiBzdHJpbmcgPSAnLyc7XG5cdHN0YXRpYyBNVUxUSVBMWTogc3RyaW5nID0gJyonO1xuXHRzdGF0aWMgTU9EVUxVUzogc3RyaW5nID0gJyUnO1xuXG5cdHN0YXRpYyBFWENMQU1BVElPTl9NQVJLOiBzdHJpbmcgPSAnISc7XG5cdHN0YXRpYyBRVUVTVElPTl9NQVJLOiBzdHJpbmcgPSAnPyc7XG5cdHN0YXRpYyBMRVNTX1RIQU46IHN0cmluZyA9ICc8Jztcblx0c3RhdGljIEdSRUFURVJfVEhBTjogc3RyaW5nID0gJz4nO1xuXHRzdGF0aWMgTEVTU19FUVVBTDogc3RyaW5nID0gJzw9Jztcblx0c3RhdGljIEdSRUFURVJfRVFVQUw6IHN0cmluZyA9ICc+PSc7XG5cdHN0YXRpYyBFUVVBTDogc3RyaW5nID0gJz09Jztcblx0c3RhdGljIE5PVF9FUVVBTDogc3RyaW5nID0gJyE9Jztcblx0c3RhdGljIEFORDogc3RyaW5nID0gJyYmJztcblx0c3RhdGljIE9SOiBzdHJpbmcgPSAnfHwnO1xuXG5cdHN0YXRpYyBYTUxfQ0xPU0VfVEFHOiBzdHJpbmcgPSAnLz4nO1xuXHRzdGF0aWMgWE1MX09QRU5fQ0xPU0VfVEFHOiBzdHJpbmcgPSAnPC8nO1xuXG5cdHN0YXRpYyBLRVlXT1JEUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5JTVBPUlQsXG5cdFx0R1JBTU1BUi5GUk9NLFxuXHRcdEdSQU1NQVIuT1BFTixcblx0XHRHUkFNTUFSLkNMQVNTLFxuXHRcdEdSQU1NQVIuSU5URVJGQUNFLFxuXHRcdEdSQU1NQVIuRVhURU5EUyxcblx0XHRHUkFNTUFSLklNUExFTUVOVFMsXG5cdFx0R1JBTU1BUi5QVUJMSUMsXG5cdFx0R1JBTU1BUi5QUklWQVRFLFxuXHRcdEdSQU1NQVIuU1RBVElDLFxuXHRcdEdSQU1NQVIuUkVBRE9OTFksXG5cdFx0R1JBTU1BUi5SRVRVUk4sXG5cdFx0R1JBTU1BUi5PUEVSQVRPUixcblx0XHRHUkFNTUFSLkxFVCxcblx0XHRHUkFNTUFSLk5FVyxcblx0XHRHUkFNTUFSLlRISVMsXG5cdFx0R1JBTU1BUi5JRixcblx0XHRHUkFNTUFSLkVMU0UsXG5cdFx0R1JBTU1BUi5NQVRDSCxcblx0XHRHUkFNTUFSLkRFRkFVTFQsXG5cdFx0R1JBTU1BUi5GT1JFQUNILFxuXHRcdEdSQU1NQVIuSU4sXG5cdFx0R1JBTU1BUi5OVUxMLFxuXHRcdEdSQU1NQVIuVkRPTSxcblx0XTtcblx0c3RhdGljIEFSSVRITUVUSUM6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuUExVUyxcblx0XHRHUkFNTUFSLk1JTlVTLFxuXHRcdEdSQU1NQVIuRElWSURFLFxuXHRcdEdSQU1NQVIuTVVMVElQTFksXG5cdFx0R1JBTU1BUi5NT0RVTFVTXG5cdF07XG5cdHN0YXRpYyBDT01QQVJJU09OOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLkxFU1NfVEhBTixcblx0XHRHUkFNTUFSLkdSRUFURVJfVEhBTixcblx0XHRHUkFNTUFSLkxFU1NfRVFVQUwsXG5cdFx0R1JBTU1BUi5HUkVBVEVSX0VRVUFMXG5cdF07XG5cdHN0YXRpYyBFUVVBTElUWTogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5FUVVBTCxcblx0XHRHUkFNTUFSLk5PVF9FUVVBTFxuXHRdO1xuXHRzdGF0aWMgTE9HSUNBTDogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5BTkQsXG5cdFx0R1JBTU1BUi5PUlxuXHRdO1xuXHRzdGF0aWMgT1BFUkFUT1JTOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLkVYQ0xBTUFUSU9OX01BUkssXG5cdFx0R1JBTU1BUi5RVUVTVElPTl9NQVJLLFxuXHRcdEdSQU1NQVIuQVJST1csXG5cdFx0R1JBTU1BUi5ET1QsXG5cdFx0R1JBTU1BUi5BU1NJR04sXG5cdFx0R1JBTU1BUi5QTFVTLFxuXHRcdEdSQU1NQVIuTUlOVVMsXG5cdFx0R1JBTU1BUi5ESVZJREUsXG5cdFx0R1JBTU1BUi5NVUxUSVBMWSxcblx0XHRHUkFNTUFSLk1PRFVMVVMsXG5cdFx0R1JBTU1BUi5MRVNTX1RIQU4sXG5cdFx0R1JBTU1BUi5HUkVBVEVSX1RIQU4sXG5cdFx0R1JBTU1BUi5MRVNTX0VRVUFMLFxuXHRcdEdSQU1NQVIuR1JFQVRFUl9FUVVBTCxcblx0XHRHUkFNTUFSLkVRVUFMLFxuXHRcdEdSQU1NQVIuTk9UX0VRVUFMLFxuXHRcdEdSQU1NQVIuQU5ELFxuXHRcdEdSQU1NQVIuT1IsXG5cdF07XG5cdHN0YXRpYyBNQVRIX09QRVJBVE9SUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5QTFVTLFxuXHRcdEdSQU1NQVIuTUlOVVMsXG5cdFx0R1JBTU1BUi5ESVZJREUsXG5cdFx0R1JBTU1BUi5NVUxUSVBMWSxcblx0XHRHUkFNTUFSLk1PRFVMVVNcblx0XTtcblx0c3RhdGljIExPR0lDX09QRVJBVE9SUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5MRVNTX1RIQU4sXG5cdFx0R1JBTU1BUi5HUkVBVEVSX1RIQU4sXG5cdFx0R1JBTU1BUi5MRVNTX0VRVUFMLFxuXHRcdEdSQU1NQVIuR1JFQVRFUl9FUVVBTCxcblx0XHRHUkFNTUFSLkVRVUFMLFxuXHRcdEdSQU1NQVIuTk9UX0VRVUFMLFxuXHRcdEdSQU1NQVIuQU5ELFxuXHRcdEdSQU1NQVIuT1IsXG5cdF07XG5cdHN0YXRpYyBQVU5DVFVBVElPTlM6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfT1BFTixcblx0XHRHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX0NMT1NFLFxuXHRcdEdSQU1NQVIuQlJBQ0VfT1BFTixcblx0XHRHUkFNTUFSLkJSQUNFX0NMT1NFLFxuXHRcdEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTixcblx0XHRHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFLFxuXHRcdEdSQU1NQVIuU0VNSUNPTE9OLFxuXHRcdEdSQU1NQVIuQ09MT04sXG5cdFx0R1JBTU1BUi5DT01NQVxuXHRdO1xuXHRzdGF0aWMgRE9NX09QRVJBVE9SUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5BUlJPVyxcblx0XHRHUkFNTUFSLkRPVCxcblx0XHRHUkFNTUFSLkFTU0lHTixcblx0XHRHUkFNTUFSLkxFU1NfVEhBTixcblx0XHRHUkFNTUFSLkdSRUFURVJfVEhBTixcblx0XHRHUkFNTUFSLlhNTF9PUEVOX0NMT1NFX1RBRyxcblx0XHRHUkFNTUFSLlhNTF9DTE9TRV9UQUdcblx0XTtcblx0c3RhdGljIERPTV9QVU5DVFVBVElPTlM6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfT1BFTixcblx0XHRHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX0NMT1NFLFxuXHRcdEdSQU1NQVIuQlJBQ0VfT1BFTixcblx0XHRHUkFNTUFSLkJSQUNFX0NMT1NFLFxuXHRcdEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTixcblx0XHRHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFLFxuXHRcdEdSQU1NQVIuU0VNSUNPTE9OLFxuXHRcdEdSQU1NQVIuQ09MT04sXG5cdFx0R1JBTU1BUi5DT01NQVxuXHRdO1xufVxuXG5leHBvcnQgY2xhc3MgVFlQRV9FTlVNIHtcblx0c3RhdGljIE1JWEVEOiBzdHJpbmcgPSAnbWl4ZWQnO1xuXHRzdGF0aWMgVk9JRDogc3RyaW5nID0gJ3ZvaWQnO1xuXHRzdGF0aWMgTlVNQkVSOiBzdHJpbmcgPSAnbnVtYmVyJztcblx0c3RhdGljIFNUUklORzogc3RyaW5nID0gJ3N0cmluZyc7XG5cdHN0YXRpYyBCT09MRUFOOiBzdHJpbmcgPSAnYm9vbGVhbic7XG5cdHN0YXRpYyBBUlJBWTogc3RyaW5nID0gJ2FycmF5Jztcblx0c3RhdGljIE5VTEw6IHN0cmluZyA9ICdudWxsJztcbn1cblxuZXhwb3J0IGNsYXNzIFJ1bGVzIHtcblx0c3RhdGljIEtFWVdPUkRTOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoR1JBTU1BUi5LRVlXT1JEUyk7XG5cdHN0YXRpYyBPUEVSQVRPUlM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChHUkFNTUFSLk9QRVJBVE9SUyk7XG5cdHN0YXRpYyBQVU5DVFVBVElPTlM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChHUkFNTUFSLlBVTkNUVUFUSU9OUyk7XG5cdHN0YXRpYyBET01fT1BFUkFUT1JTOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoR1JBTU1BUi5ET01fT1BFUkFUT1JTKTtcblx0c3RhdGljIERPTV9QVU5DVFVBVElPTlM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChHUkFNTUFSLkRPTV9QVU5DVFVBVElPTlMpO1xuXHRzdGF0aWMgQ09NTUVOVF9MSU5FOiBzdHJpbmcgPSAnLy8nO1xuXG5cdGlzQWxwaGEoY2hhcjogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIC9bYS16X10vaS50ZXN0KGNoYXIpO1xuXHR9XG5cblx0aXNOdW1lcmljKGNoYXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAvWzAtOV0vLnRlc3QoY2hhcik7XG5cdH1cblxuXHRpc0FscGhhTnVtZXJpYyhjaGFyOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pc0FscGhhKGNoYXIpIHx8IHRoaXMuaXNOdW1lcmljKGNoYXIpO1xuXHR9XG5cblx0aXNXaGl0ZXNwYWNlKGNoYXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAvXFxzLy50ZXN0KGNoYXIpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUb2tlblR5cGUge1xuXHRzdGF0aWMgQ09NTUVOVDogc3RyaW5nID0gJ2NvbW1lbnQnO1xuXHRzdGF0aWMgQU5OT1RBVElPTjogc3RyaW5nID0gJ2Fubm90YXRpb24nO1xuXHRzdGF0aWMgSURFTlRJRklFUjogc3RyaW5nID0gJ2lkZW50aWZpZXInO1xuXHRzdGF0aWMgS0VZV09SRDogc3RyaW5nID0gJ2tleXdvcmQnO1xuXHRzdGF0aWMgUFVOQ1RVQVRJT046IHN0cmluZyA9ICdwdW5jdHVhdGlvbic7XG5cdHN0YXRpYyBOVU1CRVI6IHN0cmluZyA9ICdudW1iZXInO1xuXHRzdGF0aWMgU1RSSU5HOiBzdHJpbmcgPSAnc3RyaW5nJztcblx0c3RhdGljIEJPT0xFQU46IHN0cmluZyA9ICdib29sZWFuJztcblx0c3RhdGljIE9QRVJBVE9SOiBzdHJpbmcgPSAnb3BlcmF0b3InO1xuXHRzdGF0aWMgVEVYVDogc3RyaW5nID0gJ3RleHQnO1xuXHRzdGF0aWMgRU9GOiBzdHJpbmcgPSAnZW9mJztcbn1cblxuZXhwb3J0IGNsYXNzIFRva2VuIHtcblx0dHlwZTogc3RyaW5nO1xuXHR2YWx1ZTogc3RyaW5nO1xuXHRsaW5lOiBudW1iZXIgPSAxO1xuXHRjb2x1bW46IG51bWJlciA9IDE7XG5cdHN0YXJ0OiBudW1iZXI7XG5cdGVuZDogbnVtYmVyO1xuXHRzb3VyY2U6IFNvdXJjZTtcblxuXHRjb25zdHJ1Y3Rvcih0eXBlOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyLCBzb3VyY2U6IFNvdXJjZSkge1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMuc3RhcnQgPSBzdGFydDtcblx0XHR0aGlzLmVuZCA9IGVuZDtcblx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0fVxuXG5cdHdpdGhMaW5lQW5kQ29sdW1uKGxpbmU6IG51bWJlciwgY29sdW1uOiBudW1iZXIpOiBUb2tlbiB7XG5cdFx0dGhpcy5saW5lID0gbGluZTtcblx0XHR0aGlzLmNvbHVtbiA9IGNvbHVtbjtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0dSQU1NQVIsIFRZUEVfRU5VTX0gZnJvbSBcIi4vZ3JhbW1hclwiO1xuaW1wb3J0IHtNb2RpZmllcnMsIFN1cGVyQ2xhc3N9IGZyb20gXCIuL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7U291cmNlU3Bhbn0gZnJvbSBcIi4vcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuZXhwb3J0IGNsYXNzIEFTVE5vZGVUeXBlIHtcblx0c3RhdGljIFBST0dSQU1NOiBzdHJpbmcgPSAncHJvZ3JhbSc7XG5cdHN0YXRpYyBJTkRFWDogc3RyaW5nID0gJ2luZGV4Jztcblx0c3RhdGljIElERU5USUZJRVI6IHN0cmluZyA9ICdpZGVudGlmaWVyJztcblx0c3RhdGljIEFOTk9UQVRJT046IHN0cmluZyA9ICdhbm5vdGF0aW9uJztcblx0c3RhdGljIFBBUkFNRVRFUjogc3RyaW5nID0gJ3BhcmFtZXRlcic7XG5cdHN0YXRpYyBJTVBPUlQ6IHN0cmluZyA9IEdSQU1NQVIuSU1QT1JUO1xuXHRzdGF0aWMgTlVNQkVSOiBzdHJpbmcgPSBUWVBFX0VOVU0uTlVNQkVSO1xuXHRzdGF0aWMgU1RSSU5HOiBzdHJpbmcgPSBUWVBFX0VOVU0uU1RSSU5HO1xuXHRzdGF0aWMgQk9PTEVBTjogc3RyaW5nID0gVFlQRV9FTlVNLkJPT0xFQU47XG5cdHN0YXRpYyBOVUxMOiBzdHJpbmcgPSBUWVBFX0VOVU0uTlVMTDtcblx0c3RhdGljIE5FVzogc3RyaW5nID0gR1JBTU1BUi5ORVc7XG5cdHN0YXRpYyBDTEFTUzogc3RyaW5nID0gR1JBTU1BUi5DTEFTUztcblx0c3RhdGljIElOVEVSRkFDRTogc3RyaW5nID0gR1JBTU1BUi5JTlRFUkZBQ0U7XG5cdHN0YXRpYyBDT05TVFJVQ1RPUjogc3RyaW5nID0gR1JBTU1BUi5DT05TVFJVQ1RPUjtcblx0c3RhdGljIFRISVM6IHN0cmluZyA9IEdSQU1NQVIuVEhJUztcblx0c3RhdGljIFJFVFVSTjogc3RyaW5nID0gR1JBTU1BUi5SRVRVUk47XG5cdHN0YXRpYyBPUEVSQVRPUjogc3RyaW5nID0gJ29wZXJhdG9yX2RlY2xhcmF0aW9uJztcblx0c3RhdGljIFZET006IHN0cmluZyA9ICd2ZG9tX2RlY2xhcmF0aW9uJztcblx0c3RhdGljIFZET01fVEVYVDogc3RyaW5nID0gJ3Zkb21fdGV4dF9kZWNsYXJhdGlvbic7XG5cdHN0YXRpYyBWRE9NX0VYUFJFU1NJT046IHN0cmluZyA9ICd2ZG9tX2V4cHJlc3Npb24nO1xuXHRzdGF0aWMgVU5BUlk6IHN0cmluZyA9ICd1bmFyeV9leHByZXNzaW9uJztcblx0c3RhdGljIExBTUJEQTogc3RyaW5nID0gJ2xhbWJkYV9leHByZXNzaW9uJztcblx0c3RhdGljIEFSUkFZOiBzdHJpbmcgPSAnYXJyYXlfZGVjbGFyYXRpb24nO1xuXHRzdGF0aWMgVFlQRTogc3RyaW5nID0gJ3R5cGVfZGVjbGFyYXRpb24nO1xuXHRzdGF0aWMgRklFTEQ6IHN0cmluZyA9ICdmaWVsZF9kZWNsYXJhdGlvbic7XG5cdHN0YXRpYyBNRU1CRVI6IHN0cmluZyA9ICdtZW1iZXJfZXhwcmVzc2lvbic7XG5cdHN0YXRpYyBNRVRIT0Q6IHN0cmluZyA9ICdtZXRob2RfZGVjbGFyYXRpb24nO1xuXHRzdGF0aWMgQ0FMTDogc3RyaW5nID0gJ2NhbGxfZXhwcmVzc2lvbic7XG5cdHN0YXRpYyBWQVJJQUJMRTogc3RyaW5nID0gJ3ZhcmlhYmxlX2RlY2xhcmF0aW9uJztcblx0c3RhdGljIEVYUFJFU1NJT046IHN0cmluZyA9ICdleHByZXNzaW9uX3N0YXRlbWVudCc7XG5cdHN0YXRpYyBCSU5BUlk6IHN0cmluZyA9ICdiaW5hcnlfZXhwcmVzc2lvbic7XG5cdHN0YXRpYyBBU1NJR05NRU5UOiBzdHJpbmcgPSAnYXNzaWdubWVudF9leHByZXNzaW9uJztcblx0c3RhdGljIElGOiBzdHJpbmcgPSAnaWZfc3RhdGVtZW50Jztcblx0c3RhdGljIFRIRU46IHN0cmluZyA9ICd0aGVuX3N0YXRlbWVudCc7XG5cdHN0YXRpYyBFTFNFOiBzdHJpbmcgPSAnZWxzZV9zdGF0ZW1lbnQnO1xuXHRzdGF0aWMgTUFUQ0g6IHN0cmluZyA9ICdtYXRjaF9zdGF0ZW1lbnQnO1xuXHRzdGF0aWMgTUFUQ0hfQ0FTRTogc3RyaW5nID0gJ21hdGNoX2Nhc2Vfc3RhdGVtZW50Jztcblx0c3RhdGljIEZPUkVBQ0g6IHN0cmluZyA9ICdmb3JlYWNoX3N0YXRlbWVudCc7XG59XG5cbmV4cG9ydCBjbGFzcyBBU1ROb2RlIHtcblx0aXNFeHByZXNzaW9uOiBib29sZWFuID0gZmFsc2U7XG5cdG5hbWU6IHN0cmluZyA9ICcnO1xuXG5cdHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbDtcblx0dHlwZTogc3RyaW5nO1xuXHR2YWx1ZTogYW55IHwgbnVsbCA9IG51bGw7XG5cdGNoaWxkcmVuOiBBU1ROb2RlW107XG5cblx0Y29uc3RydWN0b3IodHlwZTogc3RyaW5nLCBjaGlsZHJlbjogQVNUTm9kZVtdID0gW10pIHtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUQ2FsbE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0Y2FsbGVlOiBBU1ROb2RlO1xuXHRhcmd1bWVudHM6IEFTVE5vZGVbXTtcblxuXHRjb25zdHJ1Y3RvcihjYWxsZWU6IEFTVE5vZGUsIGFyZ3M6IEFTVE5vZGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuQ0FMTCk7XG5cblx0XHR0aGlzLmNhbGxlZSA9IGNhbGxlZTtcblx0XHR0aGlzLmFyZ3VtZW50cyA9IGFyZ3M7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1ROZXdOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGFyZ3VtZW50czogQVNUTm9kZVtdO1xuXHR0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGU7XG5cblx0Y29uc3RydWN0b3IoYXJnczogQVNUTm9kZVtdLCB0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGUpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5ORVcpO1xuXG5cdFx0dGhpcy5hcmd1bWVudHMgPSBhcmdzO1xuXHRcdHRoaXMudHlwZUFubm90YXRpb24gPSB0eXBlQW5ub3RhdGlvbjtcblx0XHR0aGlzLm5hbWUgPSB0eXBlQW5ub3RhdGlvbi5uYW1lO1xuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUQmluYXJ5Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRsZWZ0OiBBU1ROb2RlO1xuXHRyaWdodDogQVNUTm9kZTtcblx0b3BlcmF0b3I6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihsZWZ0OiBBU1ROb2RlLCByaWdodDogQVNUTm9kZSwgb3BlcmF0b3I6IHN0cmluZykge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkJJTkFSWSk7XG5cblx0XHR0aGlzLmxlZnQgPSBsZWZ0O1xuXHRcdHRoaXMucmlnaHQgPSByaWdodDtcblx0XHR0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RBc3NpZ25tZW50Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRsZWZ0OiBBU1ROb2RlO1xuXHRyaWdodDogQVNUTm9kZTtcblxuXHRjb25zdHJ1Y3RvcihsZWZ0OiBBU1ROb2RlLCByaWdodDogQVNUTm9kZSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkFTU0lHTk1FTlQpO1xuXG5cdFx0dGhpcy5sZWZ0ID0gbGVmdDtcblx0XHR0aGlzLnJpZ2h0ID0gcmlnaHQ7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RNZW1iZXJOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdG9iamVjdDogQVNUTm9kZTtcblx0cHJvcGVydHk6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihvYmplY3Q6IEFTVE5vZGUsIHByb3BlcnR5OiBzdHJpbmcpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5NRU1CRVIpO1xuXG5cdFx0dGhpcy5vYmplY3QgPSBvYmplY3Q7XG5cdFx0dGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUVW5hcnlOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdG9wZXJhdG9yOiBzdHJpbmc7XG5cdGFyZ3VtZW50OiBBU1ROb2RlIHwgQVNUVW5hcnlOb2RlO1xuXG5cdGNvbnN0cnVjdG9yKG9wZXJhdG9yOiBzdHJpbmcsIGFyZ3VtZW50OiBBU1ROb2RlIHwgQVNUVW5hcnlOb2RlKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuVU5BUlkpO1xuXG5cdFx0dGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuXHRcdHRoaXMuYXJndW1lbnQgPSBhcmd1bWVudDtcblx0XHR0aGlzLmlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEluZGV4Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRvYmplY3Q6IEFTVE5vZGU7XG5cdGluZGV4OiBBU1ROb2RlO1xuXG5cdGNvbnN0cnVjdG9yKG9iamVjdDogQVNUTm9kZSwgaW5kZXg6IEFTVE5vZGUpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5JTkRFWCk7XG5cblx0XHR0aGlzLm9iamVjdCA9IG9iamVjdDtcblx0XHR0aGlzLmluZGV4ID0gaW5kZXg7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RBcnJheU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0ZWxlbWVudHM6IEFTVE5vZGVbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkFSUkFZKTtcblxuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUTGFtYmRhTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW107XG5cdHJldHVyblR5cGU6IEFTVFR5cGVOb2RlO1xuXG5cdGNvbnN0cnVjdG9yKHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSwgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGUsIGNoaWxkcmVuOiBBU1ROb2RlW10pIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5MQU1CREEsIGNoaWxkcmVuKTtcblxuXHRcdHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG5cdFx0dGhpcy5yZXR1cm5UeXBlID0gcmV0dXJuVHlwZTtcblxuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNURmllbGROb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdG1vZGlmaWVyczogTW9kaWZpZXJzO1xuXHRmaWVsZFR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbDtcblx0aW5pdDogQVNUTm9kZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbW9kaWZpZXJzOiBNb2RpZmllcnMsIGZpZWxkVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsLCBpbml0OiBBU1ROb2RlIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5GSUVMRCk7XG5cblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuXHRcdHRoaXMuZmllbGRUeXBlID0gZmllbGRUeXBlO1xuXHRcdHRoaXMuaW5pdCA9IGluaXQ7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFZhcmlhYmxlTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHR0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGUgfCBudWxsID0gbnVsbDtcblx0aW5pdDogQVNUTm9kZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZUFubm90YXRpb246IEFTVFR5cGVOb2RlIHwgbnVsbCA9IG51bGwsIGluaXQ6IEFTVE5vZGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLlZBUklBQkxFKTtcblxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy50eXBlQW5ub3RhdGlvbiA9IHR5cGVBbm5vdGF0aW9uO1xuXHRcdHRoaXMuaW5pdCA9IGluaXQ7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGV4cHI6IEFTVE5vZGU7XG5cblx0Y29uc3RydWN0b3IoZXhwcjogQVNUTm9kZSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkVYUFJFU1NJT04pO1xuXG5cdFx0dGhpcy5leHByID0gZXhwcjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUUmV0dXJuTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRhcmd1bWVudDogQVNUTm9kZSB8IEFTVEV4cHJlc3Npb25Ob2RlIHwgbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihhcmd1bWVudDogQVNUTm9kZSB8IEFTVEV4cHJlc3Npb25Ob2RlIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5SRVRVUk4pO1xuXG5cdFx0dGhpcy5hcmd1bWVudCA9IGFyZ3VtZW50O1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RDbGFzc05vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0YW5ub3RhdGlvbnM6IEFTVEFubm90YXRpb25Ob2RlW107XG5cdG1vZGlmaWVyczogTW9kaWZpZXJzO1xuXHR0eXBlUGFyYW1ldGVyczogc3RyaW5nW107XG5cdHN1cGVyQ2xhc3M6IFN1cGVyQ2xhc3MgfCBudWxsO1xuXHRpbXBsZW1lbnRzSW50ZXJmYWNlczogQVNUVHlwZU5vZGVbXTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0YW5ub3RhdGlvbnM6IEFTVEFubm90YXRpb25Ob2RlW10sXG5cdFx0bW9kaWZpZXJzOiBNb2RpZmllcnMsXG5cdFx0dHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdLFxuXHRcdGltcGxlbWVudHNJbnRlcmZhY2VzOiBBU1RUeXBlTm9kZVtdLFxuXHRcdHN1cGVyQ2xhc3M6IFN1cGVyQ2xhc3MgfCBudWxsID0gbnVsbCxcblx0XHRjaGlsZHJlbjogQVNUTm9kZVtdID0gW11cblx0KSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuQ0xBU1MsIGNoaWxkcmVuKTtcblxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5hbm5vdGF0aW9ucyA9IGFubm90YXRpb25zO1xuXHRcdHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuXHRcdHRoaXMudHlwZVBhcmFtZXRlcnMgPSB0eXBlUGFyYW1ldGVycztcblx0XHR0aGlzLnN1cGVyQ2xhc3MgPSBzdXBlckNsYXNzO1xuXHRcdHRoaXMuaW1wbGVtZW50c0ludGVyZmFjZXMgPSBpbXBsZW1lbnRzSW50ZXJmYWNlcztcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUSW50ZXJmYWNlTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRhbm5vdGF0aW9uczogQVNUQW5ub3RhdGlvbk5vZGVbXTtcblx0bW9kaWZpZXJzOiBNb2RpZmllcnM7XG5cdHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXTtcblx0ZXh0ZW5kc0ludGVyZmFjZXM6IHN0cmluZ1tdO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdG5hbWU6IHN0cmluZyxcblx0XHRhbm5vdGF0aW9uczogQVNUQW5ub3RhdGlvbk5vZGVbXSxcblx0XHRtb2RpZmllcnM6IE1vZGlmaWVycyxcblx0XHR0eXBlUGFyYW1ldGVyczogc3RyaW5nW10sXG5cdFx0ZXh0ZW5kc0ludGVyZmFjZXM6IHN0cmluZ1tdLFxuXHRcdGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXVxuXHQpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5JTlRFUkZBQ0UsIGNoaWxkcmVuKTtcblxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5hbm5vdGF0aW9ucyA9IGFubm90YXRpb25zO1xuXHRcdHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuXHRcdHRoaXMudHlwZVBhcmFtZXRlcnMgPSB0eXBlUGFyYW1ldGVycztcblx0XHR0aGlzLmV4dGVuZHNJbnRlcmZhY2VzID0gZXh0ZW5kc0ludGVyZmFjZXM7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEFubm90YXRpb25Ob2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdHByb3BlcnRpZXM6IE1hcDxzdHJpbmcsIEFTVE5vZGU+ID0gbmV3IE1hcCgpO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkFOTk9UQVRJT04pO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFBhcmFtZXRlck5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0dHlwZUFubm90YXRpb246IEFTVFR5cGVOb2RlIHwgbnVsbDtcblx0ZGVmYXVsdFZhbHVlOiBBU1ROb2RlIHwgbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGVBbm5vdGF0aW9uOiBBU1RUeXBlTm9kZSB8IG51bGwsIGRlZmF1bHRWYWx1ZTogQVNUTm9kZSB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuUEFSQU1FVEVSKTtcblx0XHR0aGlzLnR5cGVBbm5vdGF0aW9uID0gdHlwZUFubm90YXRpb247XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmRlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUTWV0aG9kTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRhbm5vdGF0aW9uczogQVNUQW5ub3RhdGlvbk5vZGVbXTtcblx0bW9kaWZpZXJzOiBNb2RpZmllcnM7XG5cdHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXTtcblx0cGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdO1xuXHRyZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGw7XG5cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0dHlwZTogc3RyaW5nLFxuXHRcdGFubm90YXRpb25zOiBBU1RBbm5vdGF0aW9uTm9kZVtdLFxuXHRcdG1vZGlmaWVyczogTW9kaWZpZXJzLFxuXHRcdHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXSxcblx0XHRwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sXG5cdFx0cmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsID0gbnVsbCxcblx0XHRjaGlsZHJlbjogQVNUTm9kZVtdID0gW10sXG5cdCkge1xuXHRcdHN1cGVyKHR5cGUsIGNoaWxkcmVuKTtcblxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5hbm5vdGF0aW9ucyA9IGFubm90YXRpb25zO1xuXHRcdHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuXHRcdHRoaXMudHlwZVBhcmFtZXRlcnMgPSB0eXBlUGFyYW1ldGVycztcblx0XHR0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuXHRcdHRoaXMucmV0dXJuVHlwZSA9IHJldHVyblR5cGU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVE9wZXJhdG9yTm9kZSBleHRlbmRzIEFTVE1ldGhvZE5vZGUge1xuXG5cdHN0YXRpYyBBTExPV0VEX09QRVJBVE9SUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5QTFVTLFxuXHRcdEdSQU1NQVIuTUlOVVMsXG5cdFx0R1JBTU1BUi5NVUxUSVBMWSxcblx0XHRHUkFNTUFSLkRJVklERSxcblx0XHRHUkFNTUFSLk1PRFVMVVMsXG5cdFx0R1JBTU1BUi5FUVVBTCxcblx0XHRHUkFNTUFSLk5PVF9FUVVBTCxcblx0XHRHUkFNTUFSLkxFU1NfVEhBTixcblx0XHRHUkFNTUFSLkxFU1NfRVFVQUwsXG5cdFx0R1JBTU1BUi5HUkVBVEVSX1RIQU4sXG5cdFx0R1JBTU1BUi5HUkVBVEVSX0VRVUFMLFxuXHRcdEdSQU1NQVIuRVhDTEFNQVRJT05fTUFSSyxcblx0XHQvL1wiW11cIlxuXHRdO1xuXG5cdHN0YXRpYyBPUEVSQVRPUl9NRVRIT0RfTUFQOiBNYXA8c3RyaW5nLCBzdHJpbmc+ID0gbmV3IE1hcChcblx0XHRbXG5cdFx0XHRbR1JBTU1BUi5QTFVTLCAnX19hZGQnXSxcblx0XHRcdFtHUkFNTUFSLk1JTlVTLCAnX19zdWJ0cmFjdCddLFxuXHRcdFx0W0dSQU1NQVIuTVVMVElQTFksICdfX211bHRpcGx5J10sXG5cdFx0XHRbR1JBTU1BUi5ESVZJREUsICdfX2RpdmlkZSddLFxuXHRcdFx0W0dSQU1NQVIuTU9EVUxVUywgJ19fbW9kdWx1cyddLFxuXHRcdFx0W0dSQU1NQVIuRVFVQUwsICdfX2VxdWFsJ10sXG5cdFx0XHRbR1JBTU1BUi5OT1RfRVFVQUwsICdfX25vdF9lcXVhbCddLFxuXHRcdFx0W0dSQU1NQVIuTEVTU19USEFOLCAnX19sZXNzX3RoYW4nXSxcblx0XHRcdFtHUkFNTUFSLkxFU1NfRVFVQUwsICdfX2xlc3NfZXF1YWwnXSxcblx0XHRcdFtHUkFNTUFSLkdSRUFURVJfVEhBTiwgJ19fZ3JlYXRlcl90aGFuJ10sXG5cdFx0XHRbR1JBTU1BUi5HUkVBVEVSX0VRVUFMLCAnX19ncmVhdGVyX2VxdWFsJ10sXG5cdFx0XHRbR1JBTU1BUi5FWENMQU1BVElPTl9NQVJLLCAnX19ub3QnXSxcblx0XHRdXG5cdCk7XG5cblx0b3BlcmF0b3I6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRvcGVyYXRvcjogc3RyaW5nLFxuXHRcdGFubm90YXRpb25zOiBBU1RBbm5vdGF0aW9uTm9kZVtdLFxuXHRcdG1vZGlmaWVyczogTW9kaWZpZXJzLFxuXHRcdHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXSxcblx0XHRwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sXG5cdFx0cmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsID0gbnVsbCxcblx0XHRjaGlsZHJlbjogQVNUTm9kZVtdID0gW10sXG5cdCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0b3BlcmF0b3IsICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmFtZSA9IHN5bWJvbFxuXHRcdFx0QVNUTm9kZVR5cGUuT1BFUkFUT1IsXG5cdFx0XHRhbm5vdGF0aW9ucyxcblx0XHRcdG1vZGlmaWVycyxcblx0XHRcdHR5cGVQYXJhbWV0ZXJzLFxuXHRcdFx0cGFyYW1ldGVycyxcblx0XHRcdHJldHVyblR5cGUsXG5cdFx0XHRjaGlsZHJlblxuXHRcdCk7XG5cblx0XHR0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEltcG9ydE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0bmFtZXM6IHN0cmluZ1tdO1xuXHRmcm9tOiBzdHJpbmcgfCBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWVzOiBzdHJpbmdbXSwgZnJvbTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5JTVBPUlQpO1xuXG5cdFx0dGhpcy5uYW1lcyA9IG5hbWVzO1xuXHRcdHRoaXMuZnJvbSA9IGZyb207XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFRoZW5Ob2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGNvbnN0cnVjdG9yKGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLlRIRU4sIGNoaWxkcmVuKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUSWZOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGNvbmRpdGlvbjogQVNUTm9kZTtcblx0dGhlbjogQVNUVGhlbk5vZGU7XG5cdGVsc2U6IEFTVElmTm9kZSB8IEFTVEVsc2VOb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IoY29uZGl0aW9uOiBBU1ROb2RlLCB0aGVuOiBBU1RUaGVuTm9kZSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLklGKTtcblxuXHRcdHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuXHRcdHRoaXMudGhlbiA9IHRoZW47XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEVsc2VOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGNvbnN0cnVjdG9yKGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkVMU0UsIGNoaWxkcmVuKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUTWF0Y2hOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGV4cHJlc3Npb246IEFTVE5vZGU7XG5cdGNhc2VzOiBBU1RNYXRjaENhc2VOb2RlW107XG5cdGRlZmF1bHRDYXNlOiBBU1RNYXRjaENhc2VOb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IoZXhwcmVzc2lvbjogQVNUTm9kZSwgY2FzZXM6IEFTVE1hdGNoQ2FzZU5vZGVbXSwgZGVmYXVsdENhc2U6IEFTVE1hdGNoQ2FzZU5vZGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLk1BVENIKTtcblxuXHRcdHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG5cdFx0dGhpcy5jYXNlcyA9IGNhc2VzO1xuXHRcdHRoaXMuZGVmYXVsdENhc2UgPSBkZWZhdWx0Q2FzZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUTWF0Y2hDYXNlTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHR0ZXN0OiBBU1ROb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IoY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuTUFUQ0hfQ0FTRSwgY2hpbGRyZW4pO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RGb3JlYWNoTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRpdGVyYXRvcjogc3RyaW5nO1xuXHRpdGVyYWJsZTogQVNUTm9kZTtcblx0Ym9keTogQVNUTm9kZVtdO1xuXG5cdGNvbnN0cnVjdG9yKGl0ZXJhdG9yOiBzdHJpbmcsIGl0ZXJhYmxlOiBBU1ROb2RlLCBib2R5OiBBU1ROb2RlW10gPSBbXSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkZPUkVBQ0gpO1xuXG5cdFx0dGhpcy5pdGVyYXRvciA9IGl0ZXJhdG9yO1xuXHRcdHRoaXMuaXRlcmFibGUgPSBpdGVyYWJsZTtcblx0XHR0aGlzLmJvZHkgPSBib2R5O1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RUeXBlTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRzdGF0aWMgS0lORF9TSU1QTEUgPSAnc2ltcGxlJztcblx0c3RhdGljIEtJTkRfR0VORVJJQyA9ICdnZW5lcmljJztcblx0c3RhdGljIEtJTkRfTEFNQkRBID0gJ2xhbWJkYSc7XG5cblx0a2luZDogc3RyaW5nO1xuXHR0eXBlQXJndW1lbnRzOiBBU1RUeXBlTm9kZVtdID0gW107XG5cdHBhcmFtZXRlclR5cGVzOiBBU1RUeXBlTm9kZVtdID0gW107XG5cdHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbCA9IG51bGw7XG5cdG51bGxhYmxlOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKGtpbmQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBudWxsYWJsZTogYm9vbGVhbiA9IGZhbHNlKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuVFlQRSk7XG5cblx0XHR0aGlzLmtpbmQgPSBraW5kO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5udWxsYWJsZSA9IG51bGxhYmxlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RWRG9tTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRyZWFkb25seSB0YWc6IHN0cmluZztcblx0cmVhZG9ubHkgcHJvcHM6IE1hcDxzdHJpbmcsIEFTVE5vZGU+ID0gbmV3IE1hcCgpO1xuXG5cdGNvbnN0cnVjdG9yKHRhZzogc3RyaW5nLCBwcm9wczogTWFwPHN0cmluZywgQVNUTm9kZT4sIGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLlZET00sIGNoaWxkcmVuKTtcblx0XHR0aGlzLnRhZyA9IHRhZztcblx0XHR0aGlzLnByb3BzID0gcHJvcHM7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFZEb21UZXh0Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuVkRPTV9URVhUKTtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFZEb21FeHByZXNzaW9uTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRleHByOiBBU1ROb2RlO1xuXG5cdGNvbnN0cnVjdG9yKGV4cHI6IEFTVE5vZGUpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5WRE9NX0VYUFJFU1NJT04pO1xuXHRcdHRoaXMuZXhwciA9IGV4cHI7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtHUkFNTUFSLCBSdWxlcywgVG9rZW4sIFRva2VuVHlwZX0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcbmltcG9ydCB7dGhyb3dUb2tlbkVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQgdHlwZSB7U291cmNlfSBmcm9tIFwiLi4vcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuZXhwb3J0IGNsYXNzIFRva2VuaXplciB7XG5cdHByaXZhdGUgcmVhZG9ubHkgcnVsZXMgPSBuZXcgUnVsZXMoKTtcblx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2U6IFNvdXJjZTtcblxuXHRjb25zdHJ1Y3Rvcihzb3VyY2U6IFNvdXJjZSkge1xuXHRcdHRoaXMuc291cmNlID0gc291cmNlO1xuXHR9XG5cblx0Z2V0VG9rZW5TdHJlYW0oKTogVG9rZW5TdHJlYW0ge1xuXHRcdHJldHVybiBuZXcgVG9rZW5TdHJlYW0odGhpcy50b2tlbml6ZSgpKTtcblx0fVxuXG5cdHRva2VuaXplKCk6IFRva2VuW10ge1xuXHRcdGNvbnN0IHRva2VuczogVG9rZW5bXSA9IFtdO1xuXG5cdFx0bGV0IGk6IG51bWJlciA9IDA7XG5cdFx0bGV0IGxpbmU6IG51bWJlciA9IDE7XG5cdFx0bGV0IGNvbHVtbjogbnVtYmVyID0gMDtcblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdMaW5lQ29tbWVudDogKCkgPT4gYm9vbGVhbiA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IGxpbmVDb21tZW50OiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoTGluZUNvbW1lbnRBdChpKTtcblx0XHRcdGlmIChsaW5lQ29tbWVudCkge1xuXHRcdFx0XHR0b2tlbnMucHVzaChsaW5lQ29tbWVudC53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IGxpbmVDb21tZW50LmVuZCArIDE7XG5cblx0XHRcdFx0bGluZSsrO1xuXHRcdFx0XHRjb2x1bW4gPSAwO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nU3RyaW5nOiAoKSA9PiBib29sZWFuID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3Qgc3RyaW5nOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoU3RyaW5nQXQoaSk7XG5cdFx0XHRpZiAoc3RyaW5nKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKHN0cmluZy53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IHN0cmluZy5lbmQgKyAxO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KHN0cmluZyk7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdQdW5jdHVhdGlvbjogKCkgPT4gYm9vbGVhbiA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IHB1bmN0dWF0aW9uOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoUHVuY3R1YXRpb25BdChpKTtcblx0XHRcdGlmIChwdW5jdHVhdGlvbikge1xuXHRcdFx0XHR0b2tlbnMucHVzaChwdW5jdHVhdGlvbi53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IHB1bmN0dWF0aW9uLmVuZCArIDE7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQocHVuY3R1YXRpb24pO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nSWRlbnRpZmllcjogKCkgPT4gYm9vbGVhbiA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IGlkZW50aWZpZXI6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hJZGVudGlmaWVyQXQoaSk7XG5cdFx0XHRpZiAoaWRlbnRpZmllcikge1xuXHRcdFx0XHR0b2tlbnMucHVzaChpZGVudGlmaWVyLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gaWRlbnRpZmllci5lbmQ7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQoaWRlbnRpZmllcik7XG5cblx0XHRcdFx0aWYgKGlkZW50aWZpZXIudmFsdWUgPT09IEdSQU1NQVIuVkRPTSkge1xuXHRcdFx0XHRcdGNvbnN0IHRva2VuaXplZFZEb20gPSB0aGlzLnRva2VuaXplVkRvbShpLCBsaW5lLCBjb2x1bW4pO1xuXHRcdFx0XHRcdHRva2Vucy5wdXNoKC4uLnRva2VuaXplZFZEb20udG9rZW5zKTtcblx0XHRcdFx0XHRpID0gdG9rZW5pemVkVkRvbS5uZXdJbmRleDtcblx0XHRcdFx0XHRsaW5lID0gdG9rZW5pemVkVkRvbS5saW5lO1xuXHRcdFx0XHRcdGNvbHVtbiA9IHRva2VuaXplZFZEb20uY29sdW1uO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdOdW1iZXI6ICgpID0+IGJvb2xlYW4gPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBudW1iZXI6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hOdW1iZXJBdChpKTtcblx0XHRcdGlmIChudW1iZXIpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2gobnVtYmVyLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gbnVtYmVyLmVuZDtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChudW1iZXIpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nT3BlcmF0b3I6ICgpID0+IGJvb2xlYW4gPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBvcGVyYXRvcjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaE9wZXJhdG9yQXQoaSk7XG5cdFx0XHRpZiAob3BlcmF0b3IpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2gob3BlcmF0b3Iud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBvcGVyYXRvci5lbmQgKyAxO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KG9wZXJhdG9yKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ0Fubm90YXRpb246ICgpID0+IGJvb2xlYW4gPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBhbm5vdGF0aW9uOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoQW5ub3RhdGlvbkF0KGkpO1xuXHRcdFx0aWYgKGFubm90YXRpb24pIHtcblx0XHRcdFx0dG9rZW5zLnB1c2goYW5ub3RhdGlvbi53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IGFubm90YXRpb24uZW5kICsgMTtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChhbm5vdGF0aW9uKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR3aGlsZSAoaSA8IHRoaXMuc291cmNlLmxlbmd0aCkge1xuXHRcdFx0aWYgKHRoaXMuc291cmNlLmNoYXJBdChpKSA9PT0gJ1xcbicpIHtcblx0XHRcdFx0bGluZSsrO1xuXHRcdFx0XHRjb2x1bW4gPSAwO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29sdW1uKys7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLm1hdGNoV2hpdGVzcGFjZUF0KGkpKSB7XG5cdFx0XHRcdGkrKztcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpZklzQ29uc3VtaW5nTGluZUNvbW1lbnQoKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nUHVuY3R1YXRpb24oKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nU3RyaW5nKClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ051bWJlcigpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdJZGVudGlmaWVyKClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ09wZXJhdG9yKClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ0Fubm90YXRpb24oKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0dGhyb3dUb2tlbkVycm9yKCdVbmV4cGVjdGVkIGNoYXJhY3RlcjogJyArIHRoaXMuc291cmNlLmNoYXJBdChpKSk7XG5cdFx0fVxuXG5cdFx0dG9rZW5zLnB1c2goXG5cdFx0XHR0aGlzLmVvZihpKVxuXHRcdFx0ICAgIC53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pXG5cdFx0KTtcblxuXHRcdHJldHVybiB0b2tlbnM7XG5cdH1cblxuXHRlb2YoZW5kOiBudW1iZXIpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuRU9GLCAnJywgZW5kLCBlbmQsIHRoaXMuc291cmNlKVxuXHR9XG5cblx0Y29sdW1PZmZzZXQodG9rZW46IFRva2VuKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdG9rZW4udmFsdWUubGVuZ3RoIC0gMTtcblx0fVxuXG5cdG1hdGNoV2hpdGVzcGFjZUF0KGk6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnJ1bGVzLmlzV2hpdGVzcGFjZSh0aGlzLnNvdXJjZS5jaGFyQXQoaSkpO1xuXHR9XG5cblx0bWF0Y2hOdW1iZXJBdChpOiBudW1iZXIpOiBUb2tlbiB8IG51bGwge1xuXHRcdGlmICghdGhpcy5ydWxlcy5pc051bWVyaWModGhpcy5zb3VyY2UuY2hhckF0KGkpKSkge1xuXHRcdFx0cmV0dXJuIG51bGxcblx0XHR9XG5cdFx0bGV0IHN0YXJ0ID0gaTtcblx0XHR3aGlsZSAodGhpcy5ydWxlcy5pc051bWVyaWModGhpcy5zb3VyY2UuY2hhckF0KGkpKSkgaSsrO1xuXHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLk5VTUJFUiwgdGhpcy5zb3VyY2Uuc2xpY2Uoc3RhcnQsIGkpLCBzdGFydCwgaSwgdGhpcy5zb3VyY2UpO1xuXHR9XG5cblx0bWF0Y2hTdHJpbmdBdChpOiBudW1iZXIpOiBUb2tlbiB8IG51bGwge1xuXHRcdGlmICh0aGlzLnNvdXJjZS5jaGFyQXQoaSkgIT09ICdcIicpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRsZXQgc3RhcnQgPSArK2k7XG5cdFx0d2hpbGUgKHRoaXMuc291cmNlLmNoYXJBdChpKSAhPT0gJ1wiJykgaSsrO1xuXHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLlNUUklORywgdGhpcy5zb3VyY2Uuc2xpY2Uoc3RhcnQsIGkpLCBzdGFydCwgaSwgdGhpcy5zb3VyY2UpO1xuXHR9XG5cblx0bWF0Y2hJZGVudGlmaWVyQXQoaTogbnVtYmVyKTogVG9rZW4gfCBudWxsIHtcblx0XHRpZiAoIXRoaXMucnVsZXMuaXNBbHBoYSh0aGlzLnNvdXJjZS5jaGFyQXQoaSkpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0bGV0IHN0YXJ0ID0gaTtcblx0XHRsZXQgaiA9IGk7XG5cdFx0d2hpbGUgKHRoaXMucnVsZXMuaXNBbHBoYU51bWVyaWModGhpcy5zb3VyY2UuY2hhckF0KGopKSkgaisrO1xuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5zb3VyY2Uuc2xpY2Uoc3RhcnQsIGopO1xuXG5cdFx0bGV0IHR5cGUgPSBUb2tlblR5cGUuSURFTlRJRklFUjtcblx0XHRpZiAoW0dSQU1NQVIuVFJVRSwgR1JBTU1BUi5GQUxTRV0uaW5jbHVkZXModmFsdWUpKSB7XG5cdFx0XHR0eXBlID0gVG9rZW5UeXBlLkJPT0xFQU47XG5cdFx0fSBlbHNlIGlmIChSdWxlcy5LRVlXT1JEUy5oYXModmFsdWUpKSB7XG5cdFx0XHR0eXBlID0gVG9rZW5UeXBlLktFWVdPUkQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBUb2tlbih0eXBlLCB2YWx1ZSwgc3RhcnQsIGosIHRoaXMuc291cmNlKTtcblx0fVxuXG5cdG1hdGNoT3BlcmF0b3JBdChpOiBudW1iZXIsIG9wZXJhdG9yczogU2V0PHN0cmluZz4gPSBSdWxlcy5PUEVSQVRPUlMpOiBUb2tlbiB8IG51bGwge1xuXHRcdGNvbnN0IGNoYXJzID0gdGhpcy5zb3VyY2UuY2hhckF0KGkpICsgdGhpcy5zb3VyY2UuY2hhckF0KGkgKyAxKTtcblx0XHRpZiAob3BlcmF0b3JzLmhhcyhjaGFycykpIHtcblx0XHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLk9QRVJBVE9SLCBjaGFycywgaSwgaSArIDEsIHRoaXMuc291cmNlKTtcblx0XHR9XG5cblx0XHRpZiAob3BlcmF0b3JzLmhhcyh0aGlzLnNvdXJjZS5jaGFyQXQoaSkpKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5PUEVSQVRPUiwgdGhpcy5zb3VyY2UuY2hhckF0KGkpLCBpLCBpLCB0aGlzLnNvdXJjZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRtYXRjaFB1bmN0dWF0aW9uQXQoaTogbnVtYmVyLCBwdW5jdHVhdGlvbnMgPSBSdWxlcy5QVU5DVFVBVElPTlMpOiBUb2tlbiB8IG51bGwge1xuXHRcdGNvbnN0IGNoYXJzID0gdGhpcy5zb3VyY2UuY2hhckF0KGkpICsgdGhpcy5zb3VyY2UuY2hhckF0KGkgKyAxKTtcblx0XHRpZiAocHVuY3R1YXRpb25zLmhhcyhjaGFycykpIHtcblx0XHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLlBVTkNUVUFUSU9OLCBjaGFycywgaSwgaSArIDEsIHRoaXMuc291cmNlKTtcblx0XHR9XG5cblx0XHRpZiAoIXB1bmN0dWF0aW9ucy5oYXModGhpcy5zb3VyY2UuY2hhckF0KGkpKSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLlBVTkNUVUFUSU9OLCB0aGlzLnNvdXJjZS5jaGFyQXQoaSksIGksIGksIHRoaXMuc291cmNlKTtcblx0fVxuXG5cdG1hdGNoTGluZUNvbW1lbnRBdChpOiBudW1iZXIpOiBUb2tlbiB8IG51bGwge1xuXHRcdGlmICghdGhpcy5zb3VyY2Uuc3RhcnRzV2l0aChSdWxlcy5DT01NRU5UX0xJTkUsIGkpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0bGV0IGogPSBpICsgUnVsZXMuQ09NTUVOVF9MSU5FLmxlbmd0aDtcblx0XHR3aGlsZSAoaiA8IHRoaXMuc291cmNlLmxlbmd0aCAmJiB0aGlzLnNvdXJjZS5jaGFyQXQoaikgIT09ICdcXG4nKSBqKys7XG5cdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuQ09NTUVOVCwgdGhpcy5zb3VyY2Uuc2xpY2UoaSwgaiksIGksIGosIHRoaXMuc291cmNlKTtcblx0fVxuXG5cdG1hdGNoQW5ub3RhdGlvbkF0KGk6IG51bWJlcik6IFRva2VuIHwgbnVsbCB7XG5cdFx0aWYgKHRoaXMuc291cmNlLmNoYXJBdChpKSAhPT0gJ0AnKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRsZXQgc3RhcnQgPSBpICsgMTtcblx0XHRsZXQgaiA9IGkgKyAxO1xuXHRcdHdoaWxlICh0aGlzLnJ1bGVzLmlzQWxwaGEodGhpcy5zb3VyY2UuY2hhckF0KGopKSkgaisrO1xuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5zb3VyY2Uuc2xpY2Uoc3RhcnQsIGopO1xuXG5cdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuQU5OT1RBVElPTiwgdmFsdWUsIHN0YXJ0LCBqLCB0aGlzLnNvdXJjZSk7XG5cdH1cblxuXHRwcml2YXRlIHRva2VuaXplVkRvbShzdGFydEluZGV4OiBudW1iZXIsIGxpbmU6IG51bWJlciwgY29sdW1uOiBudW1iZXIpOiB7XG5cdFx0dG9rZW5zOiBUb2tlbltdLFxuXHRcdG5ld0luZGV4OiBudW1iZXIsXG5cdFx0bGluZTogbnVtYmVyLFxuXHRcdGNvbHVtbjogbnVtYmVyXG5cdH0ge1xuXHRcdGNvbnN0IHRva2VuczogVG9rZW5bXSA9IFtdO1xuXHRcdGxldCBpOiBudW1iZXIgPSBzdGFydEluZGV4O1xuXHRcdGxldCB0ZXh0QnVmZmVyOiBzdHJpbmcgPSAnJztcblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdTdHJpbmc6ICgpID0+IGJvb2xlYW4gPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBzdHJpbmc6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hTdHJpbmdBdChpKTtcblx0XHRcdGlmIChzdHJpbmcpIHtcblx0XHRcdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cdFx0XHRcdHRva2Vucy5wdXNoKHN0cmluZy53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IHN0cmluZy5lbmQgKyAxO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KHN0cmluZyk7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdQdW5jdHVhdGlvbjogKCkgPT4gYm9vbGVhbiA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IHB1bmN0dWF0aW9uOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoUHVuY3R1YXRpb25BdChpLCBSdWxlcy5ET01fUFVOQ1RVQVRJT05TKTtcblx0XHRcdGlmIChwdW5jdHVhdGlvbikge1xuXHRcdFx0XHRmbHVzaFRleHRCdWZmZXIoKTtcblx0XHRcdFx0dG9rZW5zLnB1c2gocHVuY3R1YXRpb24ud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBwdW5jdHVhdGlvbi5lbmQgKyAxO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KHB1bmN0dWF0aW9uKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ0lkZW50aWZpZXI6ICgpID0+IGJvb2xlYW4gPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBpZGVudGlmaWVyOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoSWRlbnRpZmllckF0KGkpO1xuXHRcdFx0aWYgKGlkZW50aWZpZXIpIHtcblx0XHRcdFx0aWYgKFtHUkFNTUFSLkNMQVNTXS5pbmNsdWRlcyhpZGVudGlmaWVyLnZhbHVlKSkge1xuXHRcdFx0XHRcdGlkZW50aWZpZXIudHlwZSA9IFRva2VuVHlwZS5JREVOVElGSUVSO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cblx0XHRcdFx0dG9rZW5zLnB1c2goaWRlbnRpZmllci53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IGlkZW50aWZpZXIuZW5kO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KGlkZW50aWZpZXIpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nTnVtYmVyOiAoKSA9PiBib29sZWFuID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgbnVtYmVyOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoTnVtYmVyQXQoaSk7XG5cdFx0XHRpZiAobnVtYmVyKSB7XG5cdFx0XHRcdGZsdXNoVGV4dEJ1ZmZlcigpO1xuXG5cdFx0XHRcdHRva2Vucy5wdXNoKG51bWJlci53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IG51bWJlci5lbmQ7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQobnVtYmVyKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ09wZXJhdG9yOiAoKSA9PiBib29sZWFuID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3Qgb3BlcmF0b3I6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hPcGVyYXRvckF0KGksIFJ1bGVzLkRPTV9PUEVSQVRPUlMpO1xuXHRcdFx0aWYgKG9wZXJhdG9yKSB7XG5cdFx0XHRcdGZsdXNoVGV4dEJ1ZmZlcigpO1xuXG5cdFx0XHRcdHRva2Vucy5wdXNoKG9wZXJhdG9yLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gb3BlcmF0b3IuZW5kICsgMTtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChvcGVyYXRvcik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGZsdXNoVGV4dEJ1ZmZlcjogKCkgPT4gdm9pZCA9ICgpOiB2b2lkID0+IHtcblx0XHRcdGlmICh0ZXh0QnVmZmVyLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dG9rZW5zLnB1c2goXG5cdFx0XHRcdFx0bmV3IFRva2VuKFxuXHRcdFx0XHRcdFx0VG9rZW5UeXBlLlRFWFQsXG5cdFx0XHRcdFx0XHR0ZXh0QnVmZmVyLFxuXHRcdFx0XHRcdFx0aSAtIHRleHRCdWZmZXIubGVuZ3RoLFxuXHRcdFx0XHRcdFx0aSxcblx0XHRcdFx0XHRcdHRoaXMuc291cmNlXG5cdFx0XHRcdFx0KS53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4gLSB0ZXh0QnVmZmVyLmxlbmd0aClcblx0XHRcdFx0KTtcblx0XHRcdFx0dGV4dEJ1ZmZlciA9ICcnO1xuXHRcdFx0fVxuXHRcdH07XG5cblxuXHRcdGxldCBpZ25vcmVXaGl0ZXNwYWNlOiBib29sZWFuID0gZmFsc2U7XG5cdFx0d2hpbGUgKGkgPCB0aGlzLnNvdXJjZS5sZW5ndGgpIHtcblx0XHRcdGNvbnN0IGNoYXI6IHN0cmluZyA9IHRoaXMuc291cmNlLmNoYXJBdChpKTtcblxuXHRcdFx0aWYgKGNoYXIgPT09IEdSQU1NQVIuU0VNSUNPTE9OKSB7XG5cdFx0XHRcdGZsdXNoVGV4dEJ1ZmZlcigpO1xuXG5cdFx0XHRcdHRva2Vucy5wdXNoKG5ldyBUb2tlbihUb2tlblR5cGUuUFVOQ1RVQVRJT04sIGNoYXIsIGksIGksIHRoaXMuc291cmNlKVxuXHRcdFx0XHRcdCAgICAgICAgICAgIC53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblxuXHRcdFx0XHRpKys7XG5cdFx0XHRcdGNvbHVtbisrO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH0gZWxzZSBpZiAoY2hhciA9PT0gR1JBTU1BUi5CUkFDRV9PUEVOKSB7XG5cdFx0XHRcdGlnbm9yZVdoaXRlc3BhY2UgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIGlmIChjaGFyID09PSBHUkFNTUFSLkJSQUNFX0NMT1NFKSB7XG5cdFx0XHRcdGlnbm9yZVdoaXRlc3BhY2UgPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGlnbm9yZVdoaXRlc3BhY2UpIHtcblx0XHRcdFx0aWYgKHRoaXMubWF0Y2hXaGl0ZXNwYWNlQXQoaSkpIHtcblx0XHRcdFx0XHRpKys7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKGlmSXNDb25zdW1pbmdQdW5jdHVhdGlvbigpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdTdHJpbmcoKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nTnVtYmVyKClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ0lkZW50aWZpZXIoKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nT3BlcmF0b3IoKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHR0ZXh0QnVmZmVyICs9IGNoYXI7XG5cblx0XHRcdGlmIChjaGFyID09PSAnXFxuJykge1xuXHRcdFx0XHRsaW5lKys7XG5cdFx0XHRcdGNvbHVtbiA9IDA7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb2x1bW4rKztcblx0XHRcdH1cblxuXHRcdFx0aSsrO1xuXHRcdH1cblxuXHRcdGZsdXNoVGV4dEJ1ZmZlcigpO1xuXG5cdFx0cmV0dXJuIHt0b2tlbnM6IHRva2VucywgbmV3SW5kZXg6IGksIGxpbmU6IGxpbmUsIGNvbHVtbjogY29sdW1ufTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVG9rZW5TdHJlYW0ge1xuXHR0b2tlbnM6IFRva2VuW107XG5cdGluZGV4OiBudW1iZXIgPSAwO1xuXG5cdGNvbnN0cnVjdG9yKHRva2VuczogVG9rZW5bXSkge1xuXHRcdHRoaXMudG9rZW5zID0gdG9rZW5zO1xuXHR9XG5cblx0cmV3aW5kKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmluZGV4ID4gMCkge1xuXHRcdFx0dGhpcy5pbmRleC0tO1xuXHRcdH1cblx0fVxuXG5cdHBlZWsoKTogVG9rZW4gfCBudWxsIHtcblx0XHRyZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5pbmRleF0gfHwgbnVsbDtcblx0fVxuXG5cdG5leHQoKTogVG9rZW4gfCBudWxsIHtcblx0XHRyZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5pbmRleCsrXSB8fCBudWxsO1xuXHR9XG5cblx0aGFzTmV4dCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aDtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge1Rva2VuaXplcn0gZnJvbSBcIi4uL3Rva2VuaXplci90b2tlbml6ZXJcIjtcbmltcG9ydCB7dGhyb3dEZXBlbmRlbmN5RXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcbmltcG9ydCB0eXBlIHtUb2tlbn0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcblxuZXhwb3J0IGNsYXNzIFNvdXJjZSB7XG5cdHN0YXRpYyBORVdMSU5FID0gJ1xcbic7XG5cdHB1YmxpYyByZWFkb25seSB1cmw6IHN0cmluZztcblx0cHJpdmF0ZSBjb2RlOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoY29kZTogc3RyaW5nLCB1cmw6IHN0cmluZyA9ICc8aW5saW5lPicpIHtcblx0XHR0aGlzLnVybCA9IHVybDtcblx0XHR0aGlzLmNvZGUgPSBjb2RlO1xuXHR9XG5cblx0Z2V0IGxlbmd0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmNvZGUubGVuZ3RoO1xuXHR9XG5cblx0Z2V0VG9rZW5pemVyKCk6IFRva2VuaXplciB7XG5cdFx0cmV0dXJuIG5ldyBUb2tlbml6ZXIodGhpcyk7XG5cdH1cblxuXHRzbGljZShzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcik6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuY29kZS5zbGljZShzdGFydCwgZW5kKTtcblx0fVxuXG5cdGNoYXJBdChpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5jb2RlLmNoYXJBdChpbmRleCk7XG5cdH1cblxuXHRzdGFydHNXaXRoKHRleHQ6IHN0cmluZywgcG9zaXRpb24/OiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb2RlLnN0YXJ0c1dpdGgodGV4dCwgcG9zaXRpb24pO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTb3VyY2VTcGFuIHtcblx0c291cmNlOiBTb3VyY2U7XG5cdHN0YXJ0OiBudW1iZXI7XG5cdGVuZDogbnVtYmVyO1xuXHRsaW5lOiBudW1iZXI7XG5cdGNvbHVtbjogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKHNvdXJjZTogU291cmNlLCBzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcikge1xuXHRcdHRoaXMuc291cmNlID0gc291cmNlO1xuXHRcdHRoaXMuc3RhcnQgPSBzdGFydDtcblx0XHR0aGlzLmVuZCA9IGVuZDtcblxuXHRcdGNvbnN0IGJlZm9yZSA9IHNvdXJjZS5zbGljZSgwLCBzdGFydCk7XG5cdFx0Y29uc3QgbGluZXMgPSBiZWZvcmUuc3BsaXQoU291cmNlLk5FV0xJTkUpO1xuXG5cdFx0dGhpcy5saW5lID0gbGluZXMubGVuZ3RoO1xuXHRcdHRoaXMuY29sdW1uID0gKGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdIHx8ICcnKS5sZW5ndGggKyAxO1xuXHR9XG5cblx0dGV4dCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZS5zbGljZSh0aGlzLnN0YXJ0LCB0aGlzLmVuZCk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwYW5Gcm9tKHN0YXJ0VG9rZW46IFRva2VuLCBlbmRUb2tlbjogVG9rZW4pOiBTb3VyY2VTcGFuIHtcblx0cmV0dXJuIG5ldyBTb3VyY2VTcGFuKHN0YXJ0VG9rZW4uc291cmNlLCBzdGFydFRva2VuLnN0YXJ0LCBlbmRUb2tlbi5lbmQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hTb3VyY2UodXJsOiBzdHJpbmcpOiBQcm9taXNlPFNvdXJjZT4ge1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG5cdGlmICghcmVzcG9uc2Uub2spIHtcblx0XHR0aHJvd0RlcGVuZGVuY3lFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3VybH1gKTtcblx0fVxuXG5cdHJldHVybiBuZXcgU291cmNlKGF3YWl0IHJlc3BvbnNlLnRleHQoKSwgdXJsKTtcbn1cbiIsCiAgICAiaW1wb3J0IHtTb3VyY2UsIFNvdXJjZVNwYW59IGZyb20gXCIuL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmNsYXNzIEVycm9yVHlwZXMge1xuXHRzdGF0aWMgVFlQRV9FUlJPUjogc3RyaW5nID0gJ1R5cGVFcnJvcic7XG5cdHN0YXRpYyBUT0tFTl9FUlJPUjogc3RyaW5nID0gJ1Rva2VuRXJyb3InO1xuXHRzdGF0aWMgUEFSU0VSX0VSUk9SOiBzdHJpbmcgPSAnUGFyc2VyRXJyb3InO1xuXHRzdGF0aWMgUlVOVElNRV9FUlJPUjogc3RyaW5nID0gJ1J1bnRpbWVFcnJvcic7XG5cdHN0YXRpYyBJTlRFUk5BTF9FUlJPUjogc3RyaW5nID0gJ0ludGVybmFsRXJyb3InO1xuXHRzdGF0aWMgTkFUSVZFX0VSUk9SOiBzdHJpbmcgPSAnTmF0aXZlRXJyb3InO1xuXHRzdGF0aWMgREVQRU5ERU5DWV9FUlJPUjogc3RyaW5nID0gJ0RlcGVuZGVuY3lFcnJvcic7XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cdGtpbmQ6IHN0cmluZztcblx0c3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsO1xuXHRvdmVycmlkZSBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0a2luZDogc3RyaW5nLFxuXHRcdG1lc3NhZ2U6IHN0cmluZyxcblx0XHRzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsXG5cdFx0Y2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsXG5cdCkge1xuXHRcdHN1cGVyKG1lc3NhZ2UpO1xuXHRcdHRoaXMua2luZCA9IGtpbmQ7XG5cdFx0dGhpcy5zcGFuID0gc3Bhbjtcblx0XHR0aGlzLmNhdXNlID0gY2F1c2U7XG5cdH1cblxuXHRmb3JtYXQoKTogc3RyaW5nIHtcblx0XHRpZiAodGhpcy5zcGFuKSB7XG5cblx0XHRcdHJldHVybiBgXG5bJHt0aGlzLmtpbmR9XSAke3RoaXMubWVzc2FnZX1cbiAgYXQgJHt0aGlzLnNwYW4uc291cmNlLnVybH06JHt0aGlzLnNwYW4ubGluZX06JHt0aGlzLnNwYW4uY29sdW1ufVxuXG4ke3RoaXMuc3Bhbi50ZXh0KCl9XG4ke1wiIFwiLnJlcGVhdCh0aGlzLnNwYW4uY29sdW1uKX0ke1wiXlwiLnJlcGVhdCh0aGlzLnNwYW4uZW5kIC0gdGhpcy5zcGFuLnN0YXJ0KX1cbmA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGBbJHt0aGlzLmtpbmR9XSAke3RoaXMubWVzc2FnZX1gO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhVG9rZW5FcnJvciBleHRlbmRzIEx5cmFFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihcblx0XHRcdEVycm9yVHlwZXMuVE9LRU5fRVJST1IsXG5cdFx0XHRtZXNzYWdlLFxuXHRcdFx0c3Bhbixcblx0XHRcdGNhdXNlXG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYVR5cGVFcnJvciBleHRlbmRzIEx5cmFFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihcblx0XHRcdEVycm9yVHlwZXMuVFlQRV9FUlJPUixcblx0XHRcdG1lc3NhZ2UsXG5cdFx0XHRzcGFuLFxuXHRcdFx0Y2F1c2Vcblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhUGFyc2VyRXJyb3IgZXh0ZW5kcyBMeXJhRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRFcnJvclR5cGVzLlBBUlNFUl9FUlJPUixcblx0XHRcdG1lc3NhZ2UsXG5cdFx0XHRzcGFuLFxuXHRcdFx0Y2F1c2Vcblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhUnVudGltZUVycm9yIGV4dGVuZHMgTHlyYUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0RXJyb3JUeXBlcy5SVU5USU1FX0VSUk9SLFxuXHRcdFx0bWVzc2FnZSxcblx0XHRcdHNwYW4sXG5cdFx0XHRjYXVzZVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFOYXRpdmVFcnJvciBleHRlbmRzIEx5cmFFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihcblx0XHRcdEVycm9yVHlwZXMuTkFUSVZFX0VSUk9SLFxuXHRcdFx0bWVzc2FnZSxcblx0XHRcdHNwYW4sXG5cdFx0XHRjYXVzZVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFEZXBlbmRlbmN5RXJyb3IgZXh0ZW5kcyBMeXJhRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRFcnJvclR5cGVzLkRFUEVOREVOQ1lfRVJST1IsXG5cdFx0XHRtZXNzYWdlLFxuXHRcdFx0c3Bhbixcblx0XHRcdGNhdXNlXG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dUb2tlbkVycm9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBuZXZlciB7XG5cdHRocm93IG5ldyBMeXJhVG9rZW5FcnJvcihtZXNzYWdlLCBzcGFuLCBjYXVzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1R5cGVFcnJvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKTogbmV2ZXIge1xuXHR0aHJvdyBuZXcgTHlyYVR5cGVFcnJvcihtZXNzYWdlLCBzcGFuLCBjYXVzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1BhcnNlckVycm9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBuZXZlciB7XG5cdHRocm93IG5ldyBMeXJhUGFyc2VyRXJyb3IobWVzc2FnZSwgc3BhbiwgY2F1c2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dSdW50aW1lRXJyb3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IG5ldmVyIHtcblx0dGhyb3cgbmV3IEx5cmFSdW50aW1lRXJyb3IobWVzc2FnZSwgc3BhbiwgY2F1c2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dOYXRpdmVFcnJvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKTogbmV2ZXIge1xuXHR0aHJvdyBuZXcgTHlyYU5hdGl2ZUVycm9yKG1lc3NhZ2UsIHNwYW4sIGNhdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93RGVwZW5kZW5jeUVycm9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBuZXZlciB7XG5cdHRocm93IG5ldyBMeXJhRGVwZW5kZW5jeUVycm9yKG1lc3NhZ2UsIHNwYW4sIGNhdXNlKTtcbn1cblxuLyoqXG4gKiBAdGhyb3dzIHtFcnJvcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXBKc0Vycm9yKGVycm9yOiBFcnJvciwgc291cmNlOiBTb3VyY2UpOiBMeXJhRXJyb3Ige1xuXHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBMeXJhRXJyb3IpIHtcblx0XHRyZXR1cm4gZXJyb3I7XG5cdH1cblxuXHRyZXR1cm4gbmV3IEx5cmFFcnJvcihcblx0XHRFcnJvclR5cGVzLklOVEVSTkFMX0VSUk9SLFxuXHRcdGVycm9yLm1lc3NhZ2UgfHwgU3RyaW5nKGVycm9yKSxcblx0XHRuZXcgU291cmNlU3Bhbihzb3VyY2UsIDAsIHNvdXJjZS5sZW5ndGgpXG5cdCk7XG59XG4iLAogICAgImltcG9ydCB7QVNUQ2xhc3NOb2RlLCBBU1ROb2RlVHlwZX0gZnJvbSBcIi4uL2NvcmUvYXN0XCI7XG5pbXBvcnQge0NsYXNzRGVmaW5pdGlvbn0gZnJvbSBcIi4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtQYXJzZXJ9IGZyb20gXCIuLi9jb3JlL3BhcnNlci9wYXJzZXJcIjtcbmltcG9ydCB7dGhyb3dSdW50aW1lRXJyb3J9IGZyb20gXCIuLi9jb3JlL2Vycm9yc1wiO1xuaW1wb3J0IHR5cGUge1NvdXJjZX0gZnJvbSBcIi4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuZXhwb3J0IGNsYXNzIE5hdGl2ZUNsYXNzIHtcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXHRyZWFkb25seSBuYXRpdmVJbnN0YW5jZTogYW55O1xuXHRyZWFkb25seSBuYXRpdmVDbGFzc1NvdXJjZTogU291cmNlO1xuXHRpc0F1dG9sb2FkQWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbmF0aXZlSW5zdGFuY2U6IGFueSwgc291cmNlOiBTb3VyY2UpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMubmF0aXZlSW5zdGFuY2UgPSBuYXRpdmVJbnN0YW5jZTtcblx0XHR0aGlzLm5hdGl2ZUNsYXNzU291cmNlID0gc291cmNlO1xuXHR9XG5cblx0Z2V0Q2xhc3NEZWZpbml0aW9uKCk6IENsYXNzRGVmaW5pdGlvbiB7XG5cdFx0Y29uc3QgYXN0ID0gbmV3IFBhcnNlcih0aGlzLm5hdGl2ZUNsYXNzU291cmNlKS5wYXJzZSgpO1xuXG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIGFzdC5jaGlsZHJlbikge1xuXHRcdFx0aWYgKG5vZGUudHlwZSA9PT0gQVNUTm9kZVR5cGUuQ0xBU1MpIHtcblx0XHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RDbGFzc05vZGUgJiYgbm9kZS5uYW1lID09PSB0aGlzLm5hbWUpIHtcblx0XHRcdFx0XHRjb25zdCBjbGFzc0RlZiA9IENsYXNzRGVmaW5pdGlvbi5mcm9tQVNUKG5vZGUpO1xuXG5cdFx0XHRcdFx0Y2xhc3NEZWYubmF0aXZlSW5zdGFuY2UgPSB0aGlzLm5hdGl2ZUluc3RhbmNlO1xuXG5cdFx0XHRcdFx0cmV0dXJuIGNsYXNzRGVmO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYENsYXNzICR7dGhpcy5uYW1lfSBub3QgZm91bmQuYCwgYXN0LnNwYW4pO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7QVNUQXJyYXlOb2RlLCBBU1ROb2RlLCBBU1ROb2RlVHlwZSwgQVNUUmV0dXJuTm9kZX0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHtHUkFNTUFSLCBUWVBFX0VOVU19IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5pbXBvcnQge0NsYXNzRGVmaW5pdGlvbiwgSW5zdGFuY2V9IGZyb20gXCIuL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge3Rocm93TmF0aXZlRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcblxuaW50ZXJmYWNlIFNlcmlhbGl6YXRpb25PYmplY3Qge1xuXHRbaW5kZXg6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHRjbGFzc05hbWU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihjbGFzc05hbWU6IHN0cmluZykge1xuXHRcdHRoaXMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuXHR9XG5cblx0cHVibGljIHNlcmlhbGl6ZSgpOiBTZXJpYWxpemF0aW9uT2JqZWN0IHtcblx0XHRjb25zdCBvYmplY3Q6IFNlcmlhbGl6YXRpb25PYmplY3QgPSB7fTtcblxuXHRcdG9iamVjdFt0aGlzLmNsYXNzTmFtZV0gPSBPYmplY3Rcblx0XHRcdC5rZXlzKHRoaXMpXG5cdFx0XHQuZmlsdGVyKGtleSA9PiBrZXkgIT09ICdjbGFzc05hbWUnKVxuXHRcdFx0LnJlZHVjZSgob2JqZWN0OiBTZXJpYWxpemF0aW9uT2JqZWN0LCBrZXk6IHN0cmluZyk6IFNlcmlhbGl6YXRpb25PYmplY3QgPT4ge1xuXHRcdFx0XHRjb25zdCBjb3B5OiBTZXJpYWxpemF0aW9uT2JqZWN0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcyk7XG5cdFx0XHRcdG9iamVjdFtrZXldID0gY29weVtrZXldO1xuXHRcdFx0XHRyZXR1cm4gb2JqZWN0O1xuXHRcdFx0fSwge30pO1xuXG5cdFx0cmV0dXJuIG9iamVjdDtcblx0fVxuXG5cdHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSh7Y2xhc3NOYW1lOiB0aGlzLmNsYXNzTmFtZX0sIG51bGwsIDIpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhT2JqZWN0VmlldyBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHRwcml2YXRlIF9faW5zdGFuY2U6IEluc3RhbmNlO1xuXG5cdGNvbnN0cnVjdG9yKGluc3RhbmNlOiBJbnN0YW5jZSkge1xuXHRcdHN1cGVyKGluc3RhbmNlLl9fY2xhc3NEZWYubmFtZSk7XG5cblx0XHR0aGlzLl9faW5zdGFuY2UgPSBpbnN0YW5jZTtcblxuXHRcdHJldHVybiBuZXcgUHJveHkodGhpcywge1xuXHRcdFx0Z2V0OiAoXzogYW55LCBuYW1lOiBzdHJpbmcpOiBhbnkgPT4ge1xuXHRcdFx0XHRpZiAobmFtZSBpbiB0aGlzLl9faW5zdGFuY2UuX19pbnN0YW5jZUZpZWxkcykge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLl9faW5zdGFuY2UuX19pbnN0YW5jZUZpZWxkc1tuYW1lXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChuYW1lIGluIHRoaXMuX19pbnN0YW5jZS5fX3N0YXRpY0ZpZWxkcykge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLl9faW5zdGFuY2UuX19zdGF0aWNGaWVsZHNbbmFtZV07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAobmFtZSBpbiB0aGlzKSB7XG5cdFx0XHRcdFx0Y29uc3Qgc2VsZjogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0gdGhpcztcblx0XHRcdFx0XHRyZXR1cm4gc2VsZltuYW1lXTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0c2V0OiAoXzogYW55LCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBhbnkgPT4ge1xuXHRcdFx0XHRpZiAobmFtZSBpbiB0aGlzLl9faW5zdGFuY2UuX19pbnN0YW5jZUZpZWxkcykge1xuXHRcdFx0XHRcdHRoaXMuX19pbnN0YW5jZS5fX2luc3RhbmNlRmllbGRzW25hbWVdID0gdmFsdWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAobmFtZSBpbiB0aGlzLl9faW5zdGFuY2UuX19zdGF0aWNGaWVsZHMpIHtcblx0XHRcdFx0XHR0aGlzLl9faW5zdGFuY2UuX19zdGF0aWNGaWVsZHNbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG5cblx0cHVibGljIG92ZXJyaWRlIHNlcmlhbGl6ZSgpOiBTZXJpYWxpemF0aW9uT2JqZWN0IHtcblx0XHRjb25zdCBvYmplY3Q6IFNlcmlhbGl6YXRpb25PYmplY3QgPSB7fTtcblxuXHRcdG9iamVjdFt0aGlzLmNsYXNzTmFtZV0gPSB7Li4udGhpcy5fX2luc3RhbmNlPy5fX2luc3RhbmNlRmllbGRzfTtcblxuXHRcdHJldHVybiBvYmplY3Q7XG5cdH1cblxuXHRwdWJsaWMgb3ZlcnJpZGUgdG9TdHJpbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5zZXJpYWxpemUoKSwgbnVsbCwgMik7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhc3RWYWx1ZSh2YWx1ZTogYW55LCBleHBlY3RlZDogYW55ID0gbnVsbCk6IGFueSB7XG5cdGNvbnN0IHR5cGVPZiA9IHR5cGVvZiB2YWx1ZTtcblxuXHRpZiAoZXhwZWN0ZWQgPT09IG51bGwpIHtcblx0XHRpZiAodmFsdWUgPT09IEdSQU1NQVIuTlVMTCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGlmICh2YWx1ZSA9PT0gR1JBTU1BUi5UUlVFKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0aWYgKHZhbHVlID09PSBHUkFNTUFSLkZBTFNFKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmICh0eXBlT2YgPT09ICdzdHJpbmcnICYmIHZhbHVlLnRyaW0oKSAhPT0gJycgJiYgIWlzTmFOKHZhbHVlKSkge1xuXHRcdFx0cmV0dXJuIE51bWJlcih2YWx1ZSk7XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdHN3aXRjaCAoZXhwZWN0ZWQpIHtcblx0XHRjYXNlIFRZUEVfRU5VTS5TVFJJTkc6XG5cdFx0XHRyZXR1cm4gdHlwZU9mID09PSAnc3RyaW5nJyA/IHZhbHVlIDogU3RyaW5nKHZhbHVlKTtcblxuXHRcdGNhc2UgVFlQRV9FTlVNLk5VTUJFUjpcblx0XHRcdHJldHVybiB0eXBlT2YgPT09ICdudW1iZXInID8gdmFsdWUgOiBOdW1iZXIodmFsdWUpO1xuXG5cdFx0Y2FzZSBUWVBFX0VOVU0uQk9PTEVBTjpcblx0XHRcdHJldHVybiB0eXBlT2YgPT09ICdib29sZWFuJyA/IHZhbHVlIDogdmFsdWUgPT09ICd0cnVlJztcblxuXHRcdGNhc2UgVFlQRV9FTlVNLk5VTEw6XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTHlyYVN0cmluZyh2YWx1ZTogc3RyaW5nKTogQVNUTm9kZSB7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5TVFJJTkcpO1xuXHRub2RlLnZhbHVlID0gdmFsdWU7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9MeXJhTnVtYmVyKHZhbHVlOiBudW1iZXIpOiBBU1ROb2RlIHtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLk5VTUJFUik7XG5cdG5vZGUudmFsdWUgPSB2YWx1ZTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0x5cmFCb29sZWFuKHZhbHVlOiBib29sZWFuKTogQVNUTm9kZSB7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5CT09MRUFOKTtcblx0bm9kZS52YWx1ZSA9IHZhbHVlO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTHlyYU51bGwoKTogQVNUTm9kZSB7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5OVUxMKTtcblx0bm9kZS52YWx1ZSA9IEdSQU1NQVIuTlVMTDtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0x5cmFBcnJheSh2YWx1ZXM6IGFueVtdKTogQVNUTm9kZSB7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUQXJyYXlOb2RlKCk7XG5cdG5vZGUuZWxlbWVudHMgPSB2YWx1ZXMubWFwKHZhbHVlID0+IHRvTHlyYVZhbHVlKHZhbHVlKSk7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9MeXJhVmFsdWUodmFsdWU6IGFueSk6IEFTVE5vZGUge1xuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBBU1ROb2RlKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gVFlQRV9FTlVNLlNUUklORykge1xuXHRcdHJldHVybiB0b0x5cmFTdHJpbmcodmFsdWUpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gVFlQRV9FTlVNLk5VTUJFUikge1xuXHRcdHJldHVybiB0b0x5cmFOdW1iZXIodmFsdWUpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gVFlQRV9FTlVNLkJPT0xFQU4pIHtcblx0XHRyZXR1cm4gdG9MeXJhQm9vbGVhbih2YWx1ZSk7XG5cdH1cblxuXHRpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiB0b0x5cmFOdWxsKCk7XG5cdH1cblxuXHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRyZXR1cm4gdG9MeXJhQXJyYXkodmFsdWUpO1xuXHR9XG5cblx0dGhyb3dOYXRpdmVFcnJvcignQ2Fubm90IGNvbnZlcnQgbmF0aXZlIG9iamVjdCB0byBMeXJhIHZhbHVlJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tTHlyYVZhbHVlKHZhbHVlOiBhbnkpOiBhbnkge1xuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBBU1ROb2RlKSB7XG5cdFx0cmV0dXJuIGNhc3RWYWx1ZSh2YWx1ZS52YWx1ZSk7XG5cdH1cblxuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBJbnN0YW5jZSkge1xuXHRcdGlmICh2YWx1ZS5fX25hdGl2ZUluc3RhbmNlKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWUuX19uYXRpdmVJbnN0YW5jZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IEx5cmFPYmplY3RWaWV3KHZhbHVlKTtcblx0fVxuXG5cdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdHJldHVybiB2YWx1ZS5tYXAoZnJvbUx5cmFWYWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4gY2FzdFZhbHVlKHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblZhbHVlKHZhbHVlOiBhbnkpOiBBU1RSZXR1cm5Ob2RlIHtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RSZXR1cm5Ob2RlKCk7XG5cdG5vZGUuYXJndW1lbnQgPSB0b0x5cmFWYWx1ZSh2YWx1ZSk7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd3JhcE5hdGl2ZUluc3RhbmNlKGx5cmFOYXRpdmVPYmplY3Q6IEx5cmFOYXRpdmVPYmplY3QsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IEluc3RhbmNlIHtcblx0aWYgKCFvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmhhcyhseXJhTmF0aXZlT2JqZWN0LmNsYXNzTmFtZSkpIHtcblx0XHR0aHJvd05hdGl2ZUVycm9yKGBDbGFzcyAke2x5cmFOYXRpdmVPYmplY3QuY2xhc3NOYW1lfSBub3QgZm91bmQuYCk7XG5cdH1cblxuXHRjb25zdCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQobHlyYU5hdGl2ZU9iamVjdC5jbGFzc05hbWUpO1xuXHRjb25zdCBpbnN0YW5jZTogSW5zdGFuY2UgPSBjbGFzc0RlZi5jb25zdHJ1Y3RFbXB0eUluc3RhbmNlKCk7XG5cblx0aW5zdGFuY2UuX19uYXRpdmVJbnN0YW5jZSA9IGx5cmFOYXRpdmVPYmplY3Q7XG5cblx0cmV0dXJuIGluc3RhbmNlO1xufVxuXG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7THlyYU5hdGl2ZU9iamVjdH0gZnJvbSBcIi4uLy4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfY29udmVyc2lvblwiO1xuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuLi8uLi9jb3JlL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmNvbnN0IENMQVNTX05BTUUgPSAnU3RyaW5nJztcblxuZXhwb3J0IGNsYXNzIEx5cmFTdHJpbmcgZXh0ZW5kcyBMeXJhTmF0aXZlT2JqZWN0IHtcblx0dmFsdWU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIoQ0xBU1NfTkFNRSk7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHR9XG5cblx0Ly8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuXHR0b1VwcGVyQ2FzZSgpOiBMeXJhU3RyaW5nIHtcblx0XHRyZXR1cm4gbmV3IEx5cmFTdHJpbmcodGhpcy52YWx1ZS50b1VwcGVyQ2FzZSgpKTtcblx0fVxuXG5cdC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcblx0dG9Mb3dlckNhc2UoKTogTHlyYVN0cmluZyB7XG5cdFx0cmV0dXJuIG5ldyBMeXJhU3RyaW5nKHRoaXMudmFsdWUudG9Mb3dlckNhc2UoKSk7XG5cdH1cblxuXHRvdmVycmlkZSB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTdHJpbmdUeXBlIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IENMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRDTEFTU19OQU1FLFxuXHRcdFx0THlyYVN0cmluZyxcblx0XHRcdG5ldyBTb3VyY2UoXG5cdFx0XHRcdGBcbmNsYXNzICR7Q0xBU1NfTkFNRX0ge1xuXHRwdWJsaWMgY29uc3RydWN0b3IodmFsdWUpO1xuXHRcdFx0XHRcblx0cHVibGljIHRvVXBwZXJDYXNlKCk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwdWJsaWMgdG9Mb3dlckNhc2UoKTogJHtDTEFTU19OQU1FfTtcblxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IHRydWU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uLy4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuY29uc3QgQ0xBU1NfTkFNRSA9ICdTeXN0ZW0nO1xuXG5leHBvcnQgY2xhc3MgTHlyYVN5c3RlbSB7XG5cdHN0YXRpYyBhbGVydChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRhbGVydChtZXNzYWdlKTtcblx0fVxuXG5cdHN0YXRpYyBwcmludChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRjb25zb2xlLmxvZyhtZXNzYWdlKTtcblx0fVxuXG5cdHN0YXRpYyBpbmZvKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRjb25zb2xlLmluZm8odmFsdWUuc2VyaWFsaXplKCkpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zb2xlLmluZm8odmFsdWUpO1xuXHR9XG5cblx0c3RhdGljIHdhcm5pbmcodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdGNvbnNvbGUud2Fybih2YWx1ZS5zZXJpYWxpemUoKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnNvbGUud2Fybih2YWx1ZSk7XG5cdH1cblxuXHRzdGF0aWMgZXJyb3IodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IodmFsdWUuc2VyaWFsaXplKCkpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zb2xlLmVycm9yKHZhbHVlKTtcblx0fVxuXG5cdHN0YXRpYyBsb2codmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdGNvbnNvbGUubG9nKHZhbHVlLnNlcmlhbGl6ZSgpKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc29sZS5sb2codmFsdWUpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTeXN0ZW0gZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdENMQVNTX05BTUUsXG5cdFx0XHRMeXJhU3lzdGVtLFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfSB7XG5cdHB1YmxpYyBzdGF0aWMgYWxlcnQobWVzc2FnZTogc3RyaW5nKTogdm9pZDtcblx0XG5cdHB1YmxpYyBzdGF0aWMgcHJpbnQobWVzc2FnZTogc3RyaW5nKTogdm9pZDtcblx0XG5cdHB1YmxpYyBzdGF0aWMgaW5mbyh2YWx1ZTogbWl4ZWQpOiB2b2lkO1xuXHRcblx0cHVibGljIHN0YXRpYyB3YXJuaW5nKHZhbHVlOiBtaXhlZCk6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgc3RhdGljIGVycm9yKHZhbHVlOiBtaXhlZCk6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgc3RhdGljIGxvZyh2YWx1ZTogbWl4ZWQpOiB2b2lkO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IGZhbHNlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vLi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5jb25zdCBDTEFTU19OQU1FID0gJ0Fzc2VydCc7XG5cbmNvbnN0IGlmRmFpbGVkID0gKG1lc3NhZ2U6IHN0cmluZyA9ICcnKSA9PiB7XG5cdHRocm93IG5ldyBFcnJvcignW0Fzc2VydGlvbkVycm9yXSAnICsgKG1lc3NhZ2UgfHwgJ0Fzc2VydGlvbiBmYWlsZWQuJykpO1xufTtcblxuZXhwb3J0IGNsYXNzIEx5cmFBc3NlcnQge1xuXHRzdGF0aWMgaXNUcnVlKGNvbmRpdGlvbjogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nID0gJycpIHtcblx0XHRpZiAoIWNvbmRpdGlvbikge1xuXHRcdFx0aWZGYWlsZWQobWVzc2FnZSk7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIGlzRmFsc2UoY29uZGl0aW9uOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcgPSAnJykge1xuXHRcdGlmIChjb25kaXRpb24pIHtcblx0XHRcdGlmRmFpbGVkKG1lc3NhZ2UpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQXNzZXJ0IGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IENMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRDTEFTU19OQU1FLFxuXHRcdFx0THlyYUFzc2VydCxcblx0XHRcdG5ldyBTb3VyY2UoXG5cdFx0XHRcdGBcbmNsYXNzICR7Q0xBU1NfTkFNRX0ge1xuXHRwdWJsaWMgc3RhdGljIGlzVHJ1ZShjb25kaXRpb246IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZyA9IFwiXCIpOiB2b2lkO1xuXHRcblx0cHVibGljIHN0YXRpYyBpc0ZhbHNlKGNvbmRpdGlvbjogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nID0gXCJcIik6IHZvaWQ7XG59YFxuXHRcdFx0KSk7XG5cblx0XHR0aGlzLmlzQXV0b2xvYWRBYmxlID0gZmFsc2U7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uLy4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuY29uc3QgQ0xBU1NfTkFNRSA9ICdOdW1iZXInO1xuXG5leHBvcnQgY2xhc3MgTHlyYU51bWJlciBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHRwcml2YXRlIHJlYWRvbmx5IHZhbHVlOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IodmFsdWU6IG51bWJlcikge1xuXHRcdHN1cGVyKENMQVNTX05BTUUpO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0fVxuXG5cdHB1YmxpYyBfX2FkZChvdGhlcjogTHlyYU51bWJlcik6IEx5cmFOdW1iZXIge1xuXHRcdHJldHVybiBuZXcgTHlyYU51bWJlcih0aGlzLnZhbHVlICsgb3RoZXIudmFsdWUpO1xuXHR9XG5cblx0cHVibGljIF9fc3VidHJhY3Qob3RoZXI6IEx5cmFOdW1iZXIpOiBMeXJhTnVtYmVyIHtcblx0XHRyZXR1cm4gbmV3IEx5cmFOdW1iZXIodGhpcy52YWx1ZSAtIG90aGVyLnZhbHVlKTtcblx0fVxuXG5cdHB1YmxpYyBfX211bHRpcGx5KG90aGVyOiBMeXJhTnVtYmVyKTogTHlyYU51bWJlciB7XG5cdFx0cmV0dXJuIG5ldyBMeXJhTnVtYmVyKHRoaXMudmFsdWUgKiBvdGhlci52YWx1ZSk7XG5cdH1cblxuXHRwdWJsaWMgX19kaXZpZGUob3RoZXI6IEx5cmFOdW1iZXIpOiBMeXJhTnVtYmVyIHtcblx0XHRyZXR1cm4gbmV3IEx5cmFOdW1iZXIodGhpcy52YWx1ZSAvIG90aGVyLnZhbHVlKTtcblx0fVxuXG5cdG92ZXJyaWRlIHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWUudG9TdHJpbmcoKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTnVtYmVyVHlwZSBleHRlbmRzIE5hdGl2ZUNsYXNzIHtcblx0c3RhdGljIENMQVNTX05BTUUgPSBDTEFTU19OQU1FO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0Q0xBU1NfTkFNRSxcblx0XHRcdEx5cmFOdW1iZXIsXG5cdFx0XHRuZXcgU291cmNlKFxuXHRcdFx0XHRgXG5jbGFzcyAke0NMQVNTX05BTUV9IHtcblx0cHVibGljIGNvbnN0cnVjdG9yKHZhbHVlOiBudW1iZXIpO1xuXHRcblx0cHVibGljIG9wZXJhdG9yICsob3RoZXI6ICR7Q0xBU1NfTkFNRX0pOiAke0NMQVNTX05BTUV9O1xuXHRcblx0cHJpdmF0ZSBfX2FkZChvdGhlcjogJHtDTEFTU19OQU1FfSk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwdWJsaWMgb3BlcmF0b3IgLShvdGhlcjogJHtDTEFTU19OQU1FfSk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwcml2YXRlIF9fc3VidHJhY3Qob3RoZXI6ICR7Q0xBU1NfTkFNRX0pOiAke0NMQVNTX05BTUV9O1xuXHRcblx0cHVibGljIG9wZXJhdG9yICoob3RoZXI6ICR7Q0xBU1NfTkFNRX0pOiAke0NMQVNTX05BTUV9O1xuXHRcblx0cHJpdmF0ZSBfX211bHRpcGx5KG90aGVyOiAke0NMQVNTX05BTUV9KTogJHtDTEFTU19OQU1FfTtcblx0XG5cdHB1YmxpYyBvcGVyYXRvciAvKG90aGVyOiAke0NMQVNTX05BTUV9KTogJHtDTEFTU19OQU1FfTtcblx0XG5cdHByaXZhdGUgX19kaXZpZGUob3RoZXI6ICR7Q0xBU1NfTkFNRX0pOiAke0NMQVNTX05BTUV9O1xuXG5cdHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmc7XG59YFxuXHRcdFx0KSk7XG5cblx0XHR0aGlzLmlzQXV0b2xvYWRBYmxlID0gdHJ1ZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge05hdGl2ZUNsYXNzfSBmcm9tIFwiLi4vbmF0aXZlX2NsYXNzXCI7XG5pbXBvcnQge0x5cmFOYXRpdmVPYmplY3R9IGZyb20gXCIuLi8uLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX2NvbnZlcnNpb25cIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vLi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5jb25zdCBBUlJBWV9DTEFTU19OQU1FID0gJ0FycmF5JztcbmNvbnN0IEFSUkFZX0lURVJBVE9SX0NMQVNTX05BTUUgPSAnQXJyYXlJdGVyYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBMeXJhQXJyYXkgZXh0ZW5kcyBMeXJhTmF0aXZlT2JqZWN0IHtcblx0dmFsdWVzOiBhbnlbXTtcblxuXHRjb25zdHJ1Y3Rvcih2YWx1ZXM6IGFueVtdID0gW10pIHtcblx0XHRzdXBlcihBUlJBWV9DTEFTU19OQU1FKTtcblxuXHRcdHRoaXMudmFsdWVzID0gdmFsdWVzO1xuXHR9XG5cblx0aXRlcmF0b3IoKTogTHlyYUFycmF5SXRlcmF0b3Ige1xuXHRcdHJldHVybiBuZXcgTHlyYUFycmF5SXRlcmF0b3IodGhpcyk7XG5cdH1cblxuXHRsZW5ndGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMubGVuZ3RoO1xuXHR9XG5cblx0cHVzaCh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0dGhpcy52YWx1ZXMucHVzaCh2YWx1ZSk7XG5cdH1cblxuXHQvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG5cdGdldChpbmRleDogbnVtYmVyKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXNbaW5kZXhdID8/IG51bGw7XG5cdH1cblxuXHQvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG5cdHJlbW92ZUF0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnZhbHVlcyA9IHRoaXMudmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG5cdH1cblxuXHRvdmVycmlkZSB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdGNvbnN0IHZhbHVlcyA9IHRoaXNcblx0XHRcdC52YWx1ZXNcblx0XHRcdC5tYXAodmFsdWUgPT4ge1xuXHRcdFx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBMeXJhQXJyYXkpIHtcblx0XHRcdFx0XHRyZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHR9KTtcblxuXHRcdHJldHVybiBgWyR7dmFsdWVzLmpvaW4oJywgJyl9XWA7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFycmF5VHlwZSBleHRlbmRzIE5hdGl2ZUNsYXNzIHtcblx0c3RhdGljIENMQVNTX05BTUUgPSBBUlJBWV9DTEFTU19OQU1FO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0QVJSQVlfQ0xBU1NfTkFNRSxcblx0XHRcdEx5cmFBcnJheSxcblx0XHRcdG5ldyBTb3VyY2UoXG5cdFx0XHRcdGBcbmNsYXNzICR7QVJSQVlfQ0xBU1NfTkFNRX08VD4gaW1wbGVtZW50cyBJdGVyYWJsZTxUPiB7XG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWx1ZXMgPSBbXSk7XG5cdFxuXHRwdWJsaWMgaXRlcmF0b3IoKTogSXRlcmF0b3I8VD47XG5cdFxuXHRwdWJsaWMgbGVuZ3RoKCk6IG51bWJlcjtcblx0XG5cdHB1YmxpYyBwdXNoKHZhbHVlOiBUKTogdm9pZDtcblx0XG5cdHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IFQ/O1xuXHRcblx0cHVibGljIHJlbW92ZUF0KGluZGV4OiBudW1iZXIpOiB2b2lkO1xuXHRcblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZztcbn1gXG5cdFx0XHQpKTtcblxuXHRcdHRoaXMuaXNBdXRvbG9hZEFibGUgPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhQXJyYXlJdGVyYXRvciBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHR2YWx1ZXM6IGFueVtdO1xuXHRpbmRleDogbnVtYmVyID0gMDtcblxuXHRjb25zdHJ1Y3RvcihhcnJheTogTHlyYUFycmF5KSB7XG5cdFx0c3VwZXIoQVJSQVlfSVRFUkFUT1JfQ0xBU1NfTkFNRSk7XG5cblx0XHR0aGlzLnZhbHVlcyA9IGFycmF5LnZhbHVlcztcblx0fVxuXG5cdHJld2luZCgpIHtcblx0XHR0aGlzLmluZGV4ID0gMDtcblx0fVxuXG5cdGhhc05leHQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaW5kZXggPCB0aGlzLnZhbHVlcy5sZW5ndGg7XG5cdH1cblxuXHRuZXh0KCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmluZGV4ICsgMSA+IHRoaXMudmFsdWVzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuaW5kZXgrKztcblx0fVxuXG5cdC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcblx0cHJldmlvdXMoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaW5kZXggKyAxIDwgMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuaW5kZXgtLTtcblx0fVxuXG5cdC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcblx0a2V5KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuaW5kZXg7XG5cdH1cblxuXHRjdXJyZW50KCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzW3RoaXMuaW5kZXhdO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBcnJheUl0ZXJhdG9yVHlwZSBleHRlbmRzIE5hdGl2ZUNsYXNzIHtcblx0c3RhdGljIENMQVNTX05BTUUgPSBBUlJBWV9JVEVSQVRPUl9DTEFTU19OQU1FO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0QVJSQVlfSVRFUkFUT1JfQ0xBU1NfTkFNRSxcblx0XHRcdEx5cmFBcnJheSxcblx0XHRcdG5ldyBTb3VyY2UoXG5cdFx0XHRcdGBcbmNsYXNzICR7QVJSQVlfSVRFUkFUT1JfQ0xBU1NfTkFNRX08VD4gaW1wbGVtZW50cyBJdGVyYXRvcjxUPiB7XG5cdHB1YmxpYyBjb25zdHJ1Y3RvcihhcnJheTogQXJyYXk8VD4pO1xuXHRcblx0cHVibGljIGhhc05leHQoKTogYm9vbGVhbjtcblx0XG5cdHB1YmxpYyBuZXh0KCk6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgcHJldmlvdXMoKTogdm9pZDtcblx0XG5cdHB1YmxpYyBrZXkoKTogbnVtYmVyO1xuXHRcblx0cHVibGljIGN1cnJlbnQoKTogVDtcblx0XG5cdHB1YmxpYyByZXdpbmQoKTogdm9pZDtcbn1gXG5cdFx0XHQpKTtcblxuXHRcdHRoaXMuaXNBdXRvbG9hZEFibGUgPSB0cnVlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7dG9MeXJhVmFsdWV9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge0xhbWJkYUZ1bmN0aW9uQ2FsbH0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX3J1bnRpbWVcIjtcblxuXG5leHBvcnQgY2xhc3MgU3RhdGU8VCA9IGFueT4ge1xuXHRwcml2YXRlIHZhbHVlOiBUO1xuXHRwcml2YXRlIHN1YnNjcmliZXJzOiBNYXA8bnVtYmVyLCAodmFsdWU6IFQpID0+IHZvaWQ+ID0gbmV3IE1hcDxudW1iZXIsICh2YWx1ZTogVCkgPT4gdm9pZD4oKTtcblx0cHJpdmF0ZSBpZDogbnVtYmVyID0gMDtcblxuXHRjb25zdHJ1Y3Rvcihpbml0aWFsOiBUKSB7XG5cdFx0dGhpcy52YWx1ZSA9IGluaXRpYWw7XG5cdH1cblxuXHRnZXQoKTogVCB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdH1cblxuXHRzZXQodmFsdWU6IFQpOiB2b2lkIHtcblx0XHRpZiAodGhpcy52YWx1ZSA9PT0gdmFsdWUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdFx0dGhpcy5ub3RpZnkoKTtcblx0fVxuXG5cdHN1YnNjcmliZShmbjogTGFtYmRhRnVuY3Rpb25DYWxsKTogbnVtYmVyIHtcblx0XHRjb25zdCBuZXh0SWQ6IG51bWJlciA9IHRoaXMuaWQrKztcblx0XHR0aGlzLnN1YnNjcmliZXJzLnNldChuZXh0SWQsIHRoaXMud3JhcENhbGxiYWNrKGZuKSk7XG5cdFx0cmV0dXJuIG5leHRJZDtcblx0fVxuXG5cdHVuc3Vic2NyaWJlKGlkOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zdWJzY3JpYmVycy5kZWxldGUoaWQpO1xuXHR9XG5cblx0cHJpdmF0ZSBub3RpZnkoKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBmbiBvZiB0aGlzLnN1YnNjcmliZXJzLnZhbHVlcygpKSB7XG5cdFx0XHRmbih0aGlzLnZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHdyYXBDYWxsYmFjayhmbjogTGFtYmRhRnVuY3Rpb25DYWxsKSB7XG5cdFx0cmV0dXJuICh2YWx1ZTogVCk6IHZvaWQgPT4ge1xuXHRcdFx0Zm4uZXZhbENhbGwodG9MeXJhVmFsdWUodmFsdWUpKTtcblx0XHR9XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uLy4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcbmltcG9ydCB7U3RhdGV9IGZyb20gXCIuLi8uLi9jb3JlL2V2ZW50L3N0YXRlXCI7XG5pbXBvcnQgdHlwZSB7TGFtYmRhRnVuY3Rpb25DYWxsfSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9ydW50aW1lXCI7XG5cbmNvbnN0IENMQVNTX05BTUUgPSAnU3RhdGUnO1xuXG5leHBvcnQgY2xhc3MgTHlyYVN0YXRlPFQ+IGV4dGVuZHMgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdHByaXZhdGUgc3RhdGU6IFN0YXRlPFQ+O1xuXG5cdGNvbnN0cnVjdG9yKGluaXRpYWw6IFQpIHtcblx0XHRzdXBlcihDTEFTU19OQU1FKTtcblx0XHR0aGlzLnN0YXRlID0gbmV3IFN0YXRlPFQ+KGluaXRpYWwpO1xuXHR9XG5cblx0Z2V0KCk6IFQge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLmdldCgpO1xuXHR9XG5cblx0c2V0KHZhbHVlOiBUKTogdm9pZCB7XG5cdFx0dGhpcy5zdGF0ZS5zZXQodmFsdWUpO1xuXHR9XG5cblx0c3Vic2NyaWJlKGZuOiBMYW1iZGFGdW5jdGlvbkNhbGwpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLnN1YnNjcmliZShmbik7XG5cdH1cblxuXHR1bnN1YnNjcmliZShpZDogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUudW5zdWJzY3JpYmUoaWQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTdGF0ZVR5cGUgZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdENMQVNTX05BTUUsXG5cdFx0XHRMeXJhU3RhdGUsXG5cdFx0XHRuZXcgU291cmNlKFxuXHRcdFx0XHRgXG5jbGFzcyAke0NMQVNTX05BTUV9PFQ+IHtcblx0cHVibGljIGNvbnN0cnVjdG9yKGluaXRpYWw6IFQpO1xuXG5cdHB1YmxpYyBnZXQoKTogVDtcblx0XG5cdHB1YmxpYyBzZXQodmFsdWU6IFQpOiB2b2lkO1xuXHRcblx0cHVibGljIHN1YnNjcmliZShmbjogKFQpIC0+IG1peGVkKTogbnVtYmVyO1xuXHRcblx0cHVibGljIHVuc3Vic2NyaWJlKGlkOiBudW1iZXIpOiBib29sZWFuO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IHRydWU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uLy4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuY29uc3QgQ0xBU1NfTkFNRSA9ICdMeXJhRXZlbnRzJztcblxuZXhwb3J0IGNsYXNzIEx5cmFFdmVudCBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGV2ZW50OiBFdmVudCkge1xuXHRcdHN1cGVyKENMQVNTX05BTUUpO1xuXHR9XG5cblx0Z2V0VHlwZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmV2ZW50LnR5cGU7XG5cdH1cblxuXHRwcmV2ZW50RGVmYXVsdCgpOiB2b2lkIHtcblx0XHR0aGlzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEV2ZW50VHlwZSBleHRlbmRzIE5hdGl2ZUNsYXNzIHtcblx0c3RhdGljIENMQVNTX05BTUUgPSBDTEFTU19OQU1FO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0Q0xBU1NfTkFNRSxcblx0XHRcdEx5cmFFdmVudCxcblx0XHRcdG5ldyBTb3VyY2UoXG5cdFx0XHRcdGBcbmNsYXNzICR7Q0xBU1NfTkFNRX0ge1xuXHRwdWJsaWMgY29uc3RydWN0b3IoZXZlbnQpO1xuXG5cdHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZztcblxuXHRwdWJsaWMgcHJldmVudERlZmF1bHQoKTogdm9pZDtcbn1gKSk7XG5cblx0XHR0aGlzLmlzQXV0b2xvYWRBYmxlID0gdHJ1ZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge05hdGl2ZUNsYXNzfSBmcm9tIFwiLi4vbmF0aXZlX2NsYXNzXCI7XG5pbXBvcnQge0x5cmFOYXRpdmVPYmplY3R9IGZyb20gXCIuLi8uLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX2NvbnZlcnNpb25cIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vLi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5jb25zdCBDTEFTU19OQU1FID0gJ0Jvb2xlYW4nO1xuXG5leHBvcnQgY2xhc3MgTHlyYUJvb2xlYW4gZXh0ZW5kcyBMeXJhTmF0aXZlT2JqZWN0IHtcblx0dmFsdWU6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IodmFsdWU6IGJvb2xlYW4pIHtcblx0XHRzdXBlcihDTEFTU19OQU1FKTtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdH1cblxuXHRvdmVycmlkZSB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlLnRvU3RyaW5nKCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvb2xlYW5UeXBlIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IENMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRDTEFTU19OQU1FLFxuXHRcdFx0THlyYUJvb2xlYW4sXG5cdFx0XHRuZXcgU291cmNlKFxuXHRcdFx0XHRgXG5jbGFzcyAke0NMQVNTX05BTUV9IHtcblx0cHVibGljIGNvbnN0cnVjdG9yKHZhbHVlKTtcblxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IHRydWU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4vbmF0aXZlX2NsYXNzXCI7XG5pbXBvcnQge1N0cmluZ1R5cGV9IGZyb20gXCIuL2NsYXNzZXMvc3RyaW5nXCI7XG5pbXBvcnQge1N5c3RlbX0gZnJvbSBcIi4vY2xhc3Nlcy9zeXN0ZW1cIjtcbmltcG9ydCB7QXNzZXJ0fSBmcm9tIFwiLi9jbGFzc2VzL2Fzc2VydFwiO1xuaW1wb3J0IHtOdW1iZXJUeXBlfSBmcm9tIFwiLi9jbGFzc2VzL251bWJlclwiO1xuaW1wb3J0IHtBcnJheUl0ZXJhdG9yVHlwZSwgQXJyYXlUeXBlfSBmcm9tIFwiLi9jbGFzc2VzL2FycmF5XCI7XG5pbXBvcnQge1N0YXRlVHlwZX0gZnJvbSBcIi4vY2xhc3Nlcy9zdGF0ZVwiO1xuaW1wb3J0IHtFdmVudFR5cGV9IGZyb20gXCIuL2NsYXNzZXMvZXZlbnRcIjtcbmltcG9ydCB7Qm9vbGVhblR5cGV9IGZyb20gXCIuL2NsYXNzZXMvYm9vbGVhbi50c1wiO1xuXG5leHBvcnQgY2xhc3MgTmF0aXZlQ2xhc3NlcyB7XG5cdHJlYWRvbmx5IHJlZ2lzdHJ5OiBNYXA8c3RyaW5nLCBOYXRpdmVDbGFzcz4gPSBuZXcgTWFwKCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoU3RyaW5nVHlwZS5DTEFTU19OQU1FLCBuZXcgU3RyaW5nVHlwZSgpKTtcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChOdW1iZXJUeXBlLkNMQVNTX05BTUUsIG5ldyBOdW1iZXJUeXBlKCkpO1xuXHRcdHRoaXMucmVnaXN0cnkuc2V0KEJvb2xlYW5UeXBlLkNMQVNTX05BTUUsIG5ldyBCb29sZWFuVHlwZSgpKTtcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChBcnJheVR5cGUuQ0xBU1NfTkFNRSwgbmV3IEFycmF5VHlwZSgpKTtcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChBcnJheUl0ZXJhdG9yVHlwZS5DTEFTU19OQU1FLCBuZXcgQXJyYXlJdGVyYXRvclR5cGUoKSlcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChTeXN0ZW0uQ0xBU1NfTkFNRSwgbmV3IFN5c3RlbSgpKTtcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChBc3NlcnQuQ0xBU1NfTkFNRSwgbmV3IEFzc2VydCgpKTtcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChTdGF0ZVR5cGUuQ0xBU1NfTkFNRSwgbmV3IFN0YXRlVHlwZSgpKTtcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChFdmVudFR5cGUuQ0xBU1NfTkFNRSwgbmV3IEV2ZW50VHlwZSgpKVxuXHR9XG59XG4iLAogICAgImltcG9ydCB7QVNUUGFyYW1ldGVyTm9kZSwgQVNUVHlwZU5vZGV9IGZyb20gXCIuLi9jb3JlL2FzdFwiO1xuaW1wb3J0IHtUWVBFX0VOVU19IGZyb20gXCIuLi9jb3JlL2dyYW1tYXJcIjtcbmltcG9ydCB7dGhyb3dOYXRpdmVFcnJvcn0gZnJvbSBcIi4uL2NvcmUvZXJyb3JzXCI7XG5cbmV4cG9ydCBjbGFzcyBOYXRpdmVGdW5jdGlvbiB7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblx0cmVhZG9ubHkgcGFyYW1ldGVyTm9kZXM6IEFTVFBhcmFtZXRlck5vZGVbXSA9IFtdO1xuXHRyZWFkb25seSByZXR1cm5UeXBlOiBBU1RUeXBlTm9kZTtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSwgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGUpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMucGFyYW1ldGVyTm9kZXMgPSBwYXJhbWV0ZXJzO1xuXHRcdHRoaXMucmV0dXJuVHlwZSA9IHJldHVyblR5cGU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE5hdGl2ZUZ1bmN0aW9uVHlwZVJlZ2lzdHJ5IHtcblx0cmVhZG9ubHkgZnVuY3Rpb25zOiBNYXA8c3RyaW5nLCBOYXRpdmVGdW5jdGlvbj4gPSBuZXcgTWFwKCk7XG5cblx0cHVibGljIGhhcyhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5mdW5jdGlvbnMuaGFzKG5hbWUpO1xuXHR9XG5cblx0cHVibGljIGdldChuYW1lOiBzdHJpbmcpOiBOYXRpdmVGdW5jdGlvbiB7XG5cdFx0Y29uc3QgbmF0aXZlRnVuY3Rpb246IE5hdGl2ZUZ1bmN0aW9uIHwgdW5kZWZpbmVkID0gdGhpcy5mdW5jdGlvbnMuZ2V0KG5hbWUpO1xuXHRcdGlmICghbmF0aXZlRnVuY3Rpb24pIHtcblx0XHRcdHRocm93TmF0aXZlRXJyb3IoYEZ1bmN0aW9uICR7bmFtZX0gbm90IGZvdW5kLmApO1xuXHRcdH1cblx0XHRyZXR1cm4gbmF0aXZlRnVuY3Rpb247XG5cdH1cblxuXHRwdWJsaWMgc2V0KG5hbWU6IHN0cmluZywgcGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdLCByZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSk6IE5hdGl2ZUZ1bmN0aW9uVHlwZVJlZ2lzdHJ5IHtcblx0XHR0aGlzLmZ1bmN0aW9ucy5zZXQobmFtZSwgbmV3IE5hdGl2ZUZ1bmN0aW9uKG5hbWUsIHBhcmFtZXRlcnMsIHJldHVyblR5cGUpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTmF0aXZlRnVuY3Rpb25zIHtcblx0c3RhdGljIFBSSU5UID0gJ3ByaW50JztcblxuXHQvKipcblx0ICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPn1cblx0ICovXG5cdHB1YmxpYyBnZXRHbG9iYWxGdW5jdGlvbnMoKTogeyBba2V5OiBzdHJpbmddOiAoLi4uYXJnczogYW55W10pID0+IGFueSB9IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0W05hdGl2ZUZ1bmN0aW9ucy5QUklOVF06ICguLi5hcmdzKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHRwdWJsaWMgZ2V0R2xvYmFsRnVuY3Rpb25UeXBlUmVnaXN0cnkoKTogTmF0aXZlRnVuY3Rpb25UeXBlUmVnaXN0cnkge1xuXHRcdGNvbnN0IGZ1bmN0aW9ucyA9IG5ldyBOYXRpdmVGdW5jdGlvblR5cGVSZWdpc3RyeSgpO1xuXHRcdGZ1bmN0aW9ucy5zZXQoXG5cdFx0XHROYXRpdmVGdW5jdGlvbnMuUFJJTlQsXG5cdFx0XHRbcGFyYW1ldGVyKHR5cGUoVFlQRV9FTlVNLlNUUklORyksICdtZXNzYWdlJyldLFxuXHRcdFx0dHlwZShUWVBFX0VOVU0uVk9JRClcblx0XHQpXG5cblx0XHRyZXR1cm4gZnVuY3Rpb25zO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHR5cGUobmFtZTogc3RyaW5nLCBudWxsYWJsZSA9IGZhbHNlKTogQVNUVHlwZU5vZGUge1xuXHRyZXR1cm4gbmV3IEFTVFR5cGVOb2RlKEFTVFR5cGVOb2RlLktJTkRfU0lNUExFLCBuYW1lLCBudWxsYWJsZSk7XG59XG5cbmZ1bmN0aW9uIHBhcmFtZXRlcih0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGUsIG5hbWU6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBhbnkgPSBudWxsKTogQVNUUGFyYW1ldGVyTm9kZSB7XG5cdHJldHVybiBuZXcgQVNUUGFyYW1ldGVyTm9kZShuYW1lLCB0eXBlQW5ub3RhdGlvbiwgZGVmYXVsdFZhbHVlKTtcbn1cbiIsCiAgICAiaW1wb3J0IHtUWVBFX0VOVU19IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5pbXBvcnQge1xuXHRBU1RDbGFzc05vZGUsXG5cdEFTVEZpZWxkTm9kZSxcblx0QVNUSW50ZXJmYWNlTm9kZSxcblx0QVNUTWV0aG9kTm9kZSxcblx0QVNUTm9kZSxcblx0QVNUUGFyYW1ldGVyTm9kZSxcblx0QVNUVHlwZU5vZGVcbn0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHt0aHJvd1R5cGVFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5cbmV4cG9ydCBjbGFzcyBQcmltaXRpdmVUeXBlcyB7XG5cdHN0YXRpYyByZWFkb25seSBOVU1CRVI6IHN0cmluZyA9IFRZUEVfRU5VTS5OVU1CRVI7XG5cdHN0YXRpYyByZWFkb25seSBTVFJJTkc6IHN0cmluZyA9IFRZUEVfRU5VTS5TVFJJTkc7XG5cdHN0YXRpYyByZWFkb25seSBCT09MRUFOOiBzdHJpbmcgPSBUWVBFX0VOVU0uQk9PTEVBTjtcblx0c3RhdGljIHJlYWRvbmx5IE1JWEVEOiBzdHJpbmcgPSBUWVBFX0VOVU0uTUlYRUQ7XG5cdHN0YXRpYyByZWFkb25seSBOVUxMOiBzdHJpbmcgPSBUWVBFX0VOVU0uTlVMTDtcblx0c3RhdGljIHJlYWRvbmx5IFZPSUQ6IHN0cmluZyA9IFRZUEVfRU5VTS5WT0lEO1xuXG5cdHN0YXRpYyBoYXNUeXBlKHR5cGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChQcmltaXRpdmVUeXBlcywgdHlwZS50b1VwcGVyQ2FzZSgpKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgUHJpbWl0aXZlQ2xhc3NUeXBlcyB7XG5cdHN0YXRpYyByZWFkb25seSBBUlJBWTogc3RyaW5nID0gVFlQRV9FTlVNLkFSUkFZO1xuXG5cdHN0YXRpYyBDTEFTU05BTUVfTUFQOiB7IFtzOiBzdHJpbmddOiBzdHJpbmc7IH0gPSB7XG5cdFx0YXJyYXk6ICdBcnJheSdcblx0fVxuXG5cdHN0YXRpYyBnZXRDbGFzc1JlZk5hbWUodHlwZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG5cdFx0cmV0dXJuIFByaW1pdGl2ZUNsYXNzVHlwZXMuQ0xBU1NOQU1FX01BUFt0eXBlXSB8fCBudWxsO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlIHtcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdH1cblxuXHRlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcyA9PT0gb3RoZXI7XG5cdH1cblxuXHRhY2NlcHRzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXF1YWxzKG90aGVyKTtcblx0fVxuXG5cdHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGBUeXBlKCR7dGhpcy5uYW1lfSlgO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBQcmltaXRpdmVUeXBlIGV4dGVuZHMgVHlwZSB7XG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuXHRcdHN1cGVyKG5hbWUpO1xuXHR9XG5cblx0b3ZlcnJpZGUgZXF1YWxzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIG90aGVyIGluc3RhbmNlb2YgUHJpbWl0aXZlVHlwZVxuXHRcdFx0JiYgdGhpcy5uYW1lID09PSBvdGhlci5uYW1lO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBNaXhlZFR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoUHJpbWl0aXZlVHlwZXMuTUlYRUQpO1xuXHR9XG5cblx0b3ZlcnJpZGUgZXF1YWxzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIG90aGVyIGluc3RhbmNlb2YgTWl4ZWRUeXBlO1xuXHR9XG5cblx0b3ZlcnJpZGUgYWNjZXB0cygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVm9pZFR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoUHJpbWl0aXZlVHlwZXMuVk9JRCk7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBWb2lkVHlwZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTnVsbFR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoUHJpbWl0aXZlVHlwZXMuTlVMTCk7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBOdWxsVHlwZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTnVsbGFibGVUeXBlIGV4dGVuZHMgVHlwZSB7XG5cdGlubmVyOiBUeXBlO1xuXG5cdGNvbnN0cnVjdG9yKGlubmVyOiBUeXBlKSB7XG5cdFx0c3VwZXIoaW5uZXIudG9TdHJpbmcoKSArICc/Jyk7XG5cdFx0dGhpcy5pbm5lciA9IGlubmVyO1xuXHR9XG5cblx0b3ZlcnJpZGUgZXF1YWxzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0aWYgKG90aGVyID09PSBUeXBlcy5OVUxMKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAob3RoZXIgaW5zdGFuY2VvZiBOdWxsYWJsZVR5cGUpIHtcblx0XHRcdHJldHVybiB0aGlzLmlubmVyLmVxdWFscyhvdGhlci5pbm5lcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0b3ZlcnJpZGUgYWNjZXB0cyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBvdGhlciA9PT0gVHlwZXMuTlVMTCB8fCB0aGlzLmlubmVyLmFjY2VwdHMob3RoZXIpO1xuXHR9XG5cblx0b3ZlcnJpZGUgdG9TdHJpbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5pbm5lci50b1N0cmluZygpICsgJz8nO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBWTm9kZVR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoJ3Zub2RlJyk7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBWb2lkVHlwZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVHlwZXMge1xuXHRzdGF0aWMgcmVhZG9ubHkgTlVNQkVSOiBQcmltaXRpdmVUeXBlID0gbmV3IFByaW1pdGl2ZVR5cGUoUHJpbWl0aXZlVHlwZXMuTlVNQkVSKTtcblx0c3RhdGljIHJlYWRvbmx5IFNUUklORzogUHJpbWl0aXZlVHlwZSA9IG5ldyBQcmltaXRpdmVUeXBlKFByaW1pdGl2ZVR5cGVzLlNUUklORyk7XG5cdHN0YXRpYyByZWFkb25seSBCT09MRUFOOiBQcmltaXRpdmVUeXBlID0gbmV3IFByaW1pdGl2ZVR5cGUoUHJpbWl0aXZlVHlwZXMuQk9PTEVBTik7XG5cdHN0YXRpYyByZWFkb25seSBNSVhFRDogTWl4ZWRUeXBlID0gbmV3IE1peGVkVHlwZSgpO1xuXHRzdGF0aWMgcmVhZG9ubHkgTlVMTDogTnVsbFR5cGUgPSBuZXcgTnVsbFR5cGUoKTtcblx0c3RhdGljIHJlYWRvbmx5IFZPSUQ6IFZvaWRUeXBlID0gbmV3IFZvaWRUeXBlKCk7XG5cdHN0YXRpYyByZWFkb25seSBWTk9ERTogVk5vZGVUeXBlID0gbmV3IFZOb2RlVHlwZSgpO1xuXG5cdHN0YXRpYyBnZXRUeXBlKG5hbWU6IHN0cmluZyk6IFR5cGUge1xuXHRcdGlmICghT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoUHJpbWl0aXZlVHlwZXMsIG5hbWUudG9VcHBlckNhc2UoKSkpIHtcblx0XHRcdHRocm93VHlwZUVycm9yKGBVbmtub3duIHByaW1pdGl2ZSB0eXBlICR7bmFtZX0uYCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdHlwZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IFR5cGVzO1xuXHRcdHJldHVybiB0eXBlc1tuYW1lLnRvVXBwZXJDYXNlKCldO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlVmFyaWFibGUgZXh0ZW5kcyBUeXBlIHtcblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIobmFtZSk7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpIHtcblx0XHRyZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBUeXBlVmFyaWFibGVcblx0XHRcdCYmIHRoaXMubmFtZSA9PT0gb3RoZXIubmFtZTtcblx0fVxuXG5cdG92ZXJyaWRlIGFjY2VwdHMoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGVQYXJhbWV0ZXJTeW1ib2wge1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHZhcmlhYmxlVHlwZTogVHlwZVZhcmlhYmxlO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy52YXJpYWJsZVR5cGUgPSBuZXcgVHlwZVZhcmlhYmxlKG5hbWUpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBGaWVsZFN5bWJvbCB7XG5cdHJlYWRvbmx5IG5vZGU6IEFTVEZpZWxkTm9kZTtcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXHRyZWFkb25seSBmaWVsZFR5cGU6IFR5cGU7XG5cdHJlYWRvbmx5IGlzU3RhdGljOiBib29sZWFuID0gZmFsc2U7XG5cdHJlYWRvbmx5IGlzUHJpdmF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXHRyZWFkb25seSBpc1B1YmxpYzogYm9vbGVhbiA9IGZhbHNlO1xuXHRyZWFkb25seSBpc1JlYWRvbmx5OiBib29sZWFuID0gZmFsc2U7XG5cdG93bmVyOiBDbGFzc1N5bWJvbCB8IEludGVyZmFjZVN5bWJvbCB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5vZGU6IEFTVEZpZWxkTm9kZSwgZmllbGRUeXBlOiBUeXBlKSB7XG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0XHR0aGlzLm5hbWUgPSBub2RlLm5hbWU7XG5cdFx0dGhpcy5maWVsZFR5cGUgPSBmaWVsZFR5cGU7XG5cdFx0dGhpcy5pc1N0YXRpYyA9IG5vZGUubW9kaWZpZXJzLnN0YXRpYztcblx0XHR0aGlzLmlzUHJpdmF0ZSA9IG5vZGUubW9kaWZpZXJzLnByaXZhdGU7XG5cdFx0dGhpcy5pc1B1YmxpYyA9IG5vZGUubW9kaWZpZXJzLnB1YmxpYztcblx0XHR0aGlzLmlzUmVhZG9ubHkgPSBub2RlLm1vZGlmaWVycy5yZWFkb25seTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyU3ltYm9sIHtcblx0cmVhZG9ubHkgbm9kZTogQVNUUGFyYW1ldGVyTm9kZSB8IG51bGw7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblx0cmVhZG9ubHkgcGFyYW1ldGVyVHlwZTogVHlwZTtcblx0cmVhZG9ubHkgZGVmYXVsdFR5cGU6IFR5cGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGU6IFR5cGUsIGRlZmF1bHRWYWx1ZTogVHlwZSB8IG51bGwgPSBudWxsLCBub2RlOiBBU1RQYXJhbWV0ZXJOb2RlIHwgbnVsbCA9IG51bGwpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMucGFyYW1ldGVyVHlwZSA9IHR5cGU7XG5cdFx0dGhpcy5kZWZhdWx0VHlwZSA9IGRlZmF1bHRWYWx1ZTtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBNZXRob2RTeW1ib2wge1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cdHJlYWRvbmx5IG5vZGU6IEFTVE1ldGhvZE5vZGU7XG5cdHJlYWRvbmx5IGlzU3RhdGljOiBib29sZWFuID0gZmFsc2U7XG5cdHJlYWRvbmx5IGlzUHJpdmF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXHRyZWFkb25seSBpc1B1YmxpYzogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHR5cGVQYXJhbWV0ZXJTeW1ib2xzOiBUeXBlUGFyYW1ldGVyU3ltYm9sW10gPSBbXTtcblx0cGFyYW1ldGVyU3ltYm9sczogUGFyYW1ldGVyU3ltYm9sW10gPSBbXTtcblx0cmV0dXJuVHlwZTogVHlwZSA9IFR5cGVzLk1JWEVEO1xuXG5cdG93bmVyOiBDbGFzc1N5bWJvbCB8IEludGVyZmFjZVN5bWJvbCB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5vZGU6IEFTVE1ldGhvZE5vZGUpIHtcblx0XHR0aGlzLm5hbWUgPSBub2RlLm5hbWU7XG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0XHR0aGlzLmlzU3RhdGljID0gbm9kZS5tb2RpZmllcnMuc3RhdGljO1xuXHRcdHRoaXMuaXNQcml2YXRlID0gbm9kZS5tb2RpZmllcnMucHJpdmF0ZTtcblx0XHR0aGlzLmlzUHVibGljID0gbm9kZS5tb2RpZmllcnMucHVibGljO1xuXHR9XG5cblx0Z2V0IGJvZHkoKTogQVNUTm9kZVtdIHtcblx0XHRyZXR1cm4gdGhpcy5ub2RlLmNoaWxkcmVuO1xuXHR9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT2JqZWN0U3ltYm9sIHtcblx0bmFtZTogc3RyaW5nO1xuXHR0eXBlUGFyYW1ldGVyU3ltYm9sczogVHlwZVBhcmFtZXRlclN5bWJvbFtdO1xuXHRzdGF0aWNGaWVsZFN5bWJvbHM6IE1hcDxzdHJpbmcsIEZpZWxkU3ltYm9sPjtcblx0aW5zdGFuY2VNZXRob2RTeW1ib2xzOiBNYXA8c3RyaW5nLCBNZXRob2RTeW1ib2w+O1xufVxuXG5leHBvcnQgY2xhc3MgQ2xhc3NTeW1ib2wgaW1wbGVtZW50cyBPYmplY3RTeW1ib2wge1xuXHRyZWFkb25seSBub2RlOiBBU1RDbGFzc05vZGU7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblx0cmVhZG9ubHkgc3VwZXJDbGFzczogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cblx0c3VwZXJDbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wgfCBudWxsID0gbnVsbDtcblx0dHlwZVBhcmFtZXRlclN5bWJvbHM6IFR5cGVQYXJhbWV0ZXJTeW1ib2xbXSA9IFtdO1xuXHRpbnN0YW5jZUZpZWxkU3ltYm9sczogTWFwPHN0cmluZywgRmllbGRTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRzdGF0aWNGaWVsZFN5bWJvbHM6IE1hcDxzdHJpbmcsIEZpZWxkU3ltYm9sPiA9IG5ldyBNYXAoKTtcblx0aW5zdGFuY2VNZXRob2RTeW1ib2xzOiBNYXA8c3RyaW5nLCBNZXRob2RTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRzdGF0aWNNZXRob2RTeW1ib2xzOiBNYXA8c3RyaW5nLCBNZXRob2RTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRjb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sIHwgbnVsbCA9IG51bGw7XG5cdGltcGxlbWVudHNJbnRlcmZhY2VzOiBJbnRlcmZhY2VSZWZUeXBlW10gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihub2RlOiBBU1RDbGFzc05vZGUpIHtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHRcdHRoaXMubmFtZSA9IG5vZGUubmFtZTtcblx0XHR0aGlzLnN1cGVyQ2xhc3MgPSBub2RlLnN1cGVyQ2xhc3M/Lm5hbWUgPz8gbnVsbDtcblx0fVxuXG5cdHJlc29sdmVJbnN0YW5jZUZpZWxkU3ltYm9sKG5hbWU6IHN0cmluZyk6IEZpZWxkU3ltYm9sIHwgbnVsbCB7XG5cdFx0aWYgKHRoaXMuaW5zdGFuY2VGaWVsZFN5bWJvbHMuaGFzKG5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZUZpZWxkU3ltYm9scy5nZXQobmFtZSkgfHwgbnVsbDtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zdXBlckNsYXNzKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdXBlckNsYXNzU3ltYm9sPy5yZXNvbHZlSW5zdGFuY2VGaWVsZFN5bWJvbChuYW1lKSB8fCBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmVzb2x2ZVN0YXRpY0ZpZWxkU3ltYm9sKG5hbWU6IHN0cmluZyk6IEZpZWxkU3ltYm9sIHwgbnVsbCB7XG5cdFx0aWYgKHRoaXMuc3RhdGljRmllbGRTeW1ib2xzLmhhcyhuYW1lKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGljRmllbGRTeW1ib2xzLmdldChuYW1lKSB8fCBudWxsO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnN1cGVyQ2xhc3MpIHtcblx0XHRcdHJldHVybiB0aGlzLnN1cGVyQ2xhc3NTeW1ib2w/LnJlc29sdmVTdGF0aWNGaWVsZFN5bWJvbChuYW1lKSB8fCBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2VTeW1ib2wgaW1wbGVtZW50cyBPYmplY3RTeW1ib2wge1xuXHRyZWFkb25seSBub2RlOiBBU1RJbnRlcmZhY2VOb2RlO1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cblx0dHlwZVBhcmFtZXRlclN5bWJvbHM6IFR5cGVQYXJhbWV0ZXJTeW1ib2xbXSA9IFtdO1xuXHRzdGF0aWNGaWVsZFN5bWJvbHM6IE1hcDxzdHJpbmcsIEZpZWxkU3ltYm9sPiA9IG5ldyBNYXAoKTtcblx0aW5zdGFuY2VNZXRob2RTeW1ib2xzOiBNYXA8c3RyaW5nLCBNZXRob2RTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRleHRlbmRzSW50ZXJmYWNlczogSW50ZXJmYWNlU3ltYm9sW10gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihub2RlOiBBU1RJbnRlcmZhY2VOb2RlKSB7XG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0XHR0aGlzLm5hbWUgPSBub2RlLm5hbWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIENsYXNzUmVmVHlwZSBleHRlbmRzIFR5cGUge1xuXHRyZWFkb25seSBjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2w7XG5cdHJlYWRvbmx5IHR5cGVBcmd1bWVudHM6IFR5cGVbXTtcblxuXHRjb25zdHJ1Y3RvcihjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wsIHR5cGVBcmd1bWVudHM6IFR5cGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQ2xhc3NSZWZUeXBlLmZvcm1hdFN5bWJvbE5hbWUoY2xhc3NTeW1ib2wubmFtZSwgdHlwZUFyZ3VtZW50cykpO1xuXHRcdHRoaXMuY2xhc3NTeW1ib2wgPSBjbGFzc1N5bWJvbDtcblx0XHR0aGlzLnR5cGVBcmd1bWVudHMgPSB0eXBlQXJndW1lbnRzO1xuXHR9XG5cblx0c3RhdGljIGZvcm1hdFN5bWJvbE5hbWUobmFtZTogc3RyaW5nLCB0eXBlQXJndW1lbnRzOiBUeXBlW10pIHtcblx0XHRpZiAodHlwZUFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBgY2xhc3NSZWZUeXBlKCR7bmFtZX0pYDtcblx0XHR9XG5cblx0XHRyZXR1cm4gYGNsYXNzUmVmVHlwZSgke25hbWV9PCR7dHlwZUFyZ3VtZW50cy5tYXAodHlwZSA9PiB0eXBlLnRvU3RyaW5nKCkpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbignLCAnKX0+KWA7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gKG90aGVyIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlXG5cdFx0XHQmJiBvdGhlci5jbGFzc1N5bWJvbCA9PT0gdGhpcy5jbGFzc1N5bWJvbCk7XG5cdH1cblxuXHRvdmVycmlkZSBhY2NlcHRzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0aWYgKCF0aGlzLmVxdWFscyhvdGhlcikpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAob3RoZXIgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUpIHtcblx0XHRcdGlmICh0aGlzLnR5cGVBcmd1bWVudHMubGVuZ3RoICE9PSBvdGhlci50eXBlQXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50eXBlQXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IG90aGVyVHlwZSA9IG90aGVyLnR5cGVBcmd1bWVudHNbaV07XG5cblx0XHRcdFx0aWYgKCFvdGhlclR5cGUgfHwgIXRoaXMudHlwZUFyZ3VtZW50c1tpXT8uYWNjZXB0cyhvdGhlclR5cGUpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgSW50ZXJmYWNlUmVmVHlwZSBleHRlbmRzIFR5cGUge1xuXHRyZWFkb25seSBpbnRlcmZhY2VTeW1ib2w6IEludGVyZmFjZVN5bWJvbDtcblx0cmVhZG9ubHkgdHlwZUFyZ3VtZW50czogVHlwZVtdO1xuXG5cdGNvbnN0cnVjdG9yKGludGVyZmFjZVN5bWJvbDogSW50ZXJmYWNlU3ltYm9sLCB0eXBlQXJndW1lbnRzOiBUeXBlW10gPSBbXSkge1xuXHRcdHN1cGVyKEludGVyZmFjZVJlZlR5cGUuZm9ybWF0U3ltYm9sTmFtZShpbnRlcmZhY2VTeW1ib2wubmFtZSwgdHlwZUFyZ3VtZW50cykpO1xuXHRcdHRoaXMuaW50ZXJmYWNlU3ltYm9sID0gaW50ZXJmYWNlU3ltYm9sO1xuXHRcdHRoaXMudHlwZUFyZ3VtZW50cyA9IHR5cGVBcmd1bWVudHM7XG5cdH1cblxuXHRzdGF0aWMgZm9ybWF0U3ltYm9sTmFtZShuYW1lOiBzdHJpbmcsIHR5cGVBcmd1bWVudHM6IFR5cGVbXSk6IHN0cmluZyB7XG5cdFx0aWYgKHR5cGVBcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gYGludGVyZmFjZVJlZlR5cGUoJHtuYW1lfSlgO1xuXHRcdH1cblxuXHRcdHJldHVybiBgaW50ZXJmYWNlUmVmVHlwZSgke25hbWV9PCR7dHlwZUFyZ3VtZW50cy5tYXAodHlwZSA9PiB0eXBlLnRvU3RyaW5nKCkpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oJywgJyl9PilgO1xuXHR9XG5cblx0b3ZlcnJpZGUgZXF1YWxzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIChvdGhlciBpbnN0YW5jZW9mIEludGVyZmFjZVJlZlR5cGVcblx0XHRcdCYmIG90aGVyLmludGVyZmFjZVN5bWJvbCA9PT0gdGhpcy5pbnRlcmZhY2VTeW1ib2wpO1xuXHR9XG5cblx0b3ZlcnJpZGUgYWNjZXB0cyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdGlmICghdGhpcy5lcXVhbHMob3RoZXIpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKG90aGVyIGluc3RhbmNlb2YgSW50ZXJmYWNlUmVmVHlwZSkge1xuXHRcdFx0aWYgKHRoaXMudHlwZUFyZ3VtZW50cy5sZW5ndGggIT09IG90aGVyLnR5cGVBcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnR5cGVBcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3Qgb3RoZXJUeXBlID0gb3RoZXIudHlwZUFyZ3VtZW50c1tpXTtcblxuXHRcdFx0XHRpZiAoIW90aGVyVHlwZSB8fCAhdGhpcy50eXBlQXJndW1lbnRzW2ldPy5hY2NlcHRzKG90aGVyVHlwZSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMYW1iZGFUeXBlIGV4dGVuZHMgVHlwZSB7XG5cdHJlYWRvbmx5IHBhcmFtZXRlclN5bWJvbHM6IFBhcmFtZXRlclN5bWJvbFtdID0gW107XG5cdHJlYWRvbmx5IHJldHVyblR5cGU6IFR5cGU7XG5cblx0Y29uc3RydWN0b3IocGFyYW1ldGVyczogUGFyYW1ldGVyU3ltYm9sW10sIHJldHVyblR5cGU6IFR5cGUpIHtcblx0XHRzdXBlcihMYW1iZGFUeXBlLmNyZWF0ZVNpZ25hdHVyZShwYXJhbWV0ZXJzLCByZXR1cm5UeXBlKSk7XG5cdFx0dGhpcy5wYXJhbWV0ZXJTeW1ib2xzID0gcGFyYW1ldGVycztcblx0XHR0aGlzLnJldHVyblR5cGUgPSByZXR1cm5UeXBlO1xuXHR9XG5cblx0c3RhdGljIGNyZWF0ZVNpZ25hdHVyZShwYXJhbWV0ZXJzOiBQYXJhbWV0ZXJTeW1ib2xbXSwgcmV0dXJuVHlwZTogVHlwZSk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGBsYW1iZGEoJHtwYXJhbWV0ZXJzLm1hcChwYXJhbWV0ZXIgPT4gcGFyYW1ldGVyLnBhcmFtZXRlclR5cGUudG9TdHJpbmcoKSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbignLCAnKX0pIC0+ICR7cmV0dXJuVHlwZS50b1N0cmluZygpfSlgO1xuXHR9XG5cblx0b3ZlcnJpZGUgZXF1YWxzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0aWYgKCEob3RoZXIgaW5zdGFuY2VvZiBMYW1iZGFUeXBlKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnBhcmFtZXRlclN5bWJvbHMubGVuZ3RoICE9PSBvdGhlci5wYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBvdGhlclR5cGUgPSBvdGhlci5wYXJhbWV0ZXJTeW1ib2xzW2ldPy5wYXJhbWV0ZXJUeXBlO1xuXG5cdFx0XHRpZiAoIW90aGVyVHlwZSB8fCAhdGhpcy5wYXJhbWV0ZXJTeW1ib2xzW2ldPy5wYXJhbWV0ZXJUeXBlLmFjY2VwdHMob3RoZXJUeXBlKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucmV0dXJuVHlwZS5hY2NlcHRzKG90aGVyLnJldHVyblR5cGUpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlU2NvcGUge1xuXHRyZWFkb25seSBwYXJlbnQ6IFR5cGVTY29wZSB8IG51bGw7XG5cdHJlYWRvbmx5IHR5cGVzOiBNYXA8c3RyaW5nLCBUeXBlPiA9IG5ldyBNYXAoKTtcblx0cmVhZG9ubHkgdHlwZUJpbmRpbmdzOiBNYXA8c3RyaW5nLCBUeXBlPiA9IG5ldyBNYXAoKTtcblxuXHRjdXJyZW50T2JqZWN0U3ltYm9sOiBDbGFzc1N5bWJvbCB8IEludGVyZmFjZVN5bWJvbCB8IG51bGw7XG5cblx0Y29uc3RydWN0b3IocGFyZW50OiBUeXBlU2NvcGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xuXHRcdHRoaXMuY3VycmVudE9iamVjdFN5bWJvbCA9IHBhcmVudD8uY3VycmVudE9iamVjdFN5bWJvbCA/PyBudWxsO1xuXHR9XG5cblx0ZGVmaW5lVHlwZShuYW1lOiBzdHJpbmcsIHR5cGU6IFR5cGUpOiB2b2lkIHtcblx0XHR0aGlzLnR5cGVzLnNldChuYW1lLCB0eXBlKTtcblx0fVxuXG5cdGRlZmluZVR5cGVCaW5kaW5nKG5hbWU6IHN0cmluZywgdHlwZVZhcmlhYmxlOiBUeXBlVmFyaWFibGUpOiB2b2lkIHtcblx0XHR0aGlzLnR5cGVCaW5kaW5ncy5zZXQobmFtZSwgdHlwZVZhcmlhYmxlKTtcblx0fVxuXG5cdGhhc1R5cGUobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudHlwZXMuaGFzKG5hbWUpIHx8IHRoaXMucGFyZW50Py5oYXNUeXBlKG5hbWUpIHx8IGZhbHNlO1xuXHR9XG5cblx0aGFzVHlwZUJpbmRpbmcobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudHlwZUJpbmRpbmdzLmhhcyhuYW1lKSB8fCB0aGlzLnBhcmVudD8uaGFzVHlwZUJpbmRpbmcobmFtZSkgfHwgZmFsc2U7XG5cdH1cblxuXHRnZXRUeXBlKG5hbWU6IHN0cmluZyk6IFR5cGUge1xuXHRcdGlmICh0aGlzLnR5cGVzLmhhcyhuYW1lKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMudHlwZXMuZ2V0KG5hbWUpIHx8IFR5cGVzLk5VTEw7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnBhcmVudD8uZ2V0VHlwZShuYW1lKSB8fCBUeXBlcy5OVUxMO1xuXHR9XG5cblx0Z2V0VHlwZUJpbmRpbmcobmFtZTogc3RyaW5nKTogVHlwZSB7XG5cdFx0aWYgKHRoaXMudHlwZUJpbmRpbmdzLmhhcyhuYW1lKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMudHlwZUJpbmRpbmdzLmdldChuYW1lKSB8fCBUeXBlcy5OVUxMO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5wYXJlbnQ/LmdldFR5cGVCaW5kaW5nKG5hbWUpIHx8IFR5cGVzLk5VTEw7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBUeXBlKHR5cGVOb2RlOiBBU1RUeXBlTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBzY29wZTogVHlwZVNjb3BlIHwgbnVsbCA9IG51bGwpOiBUeXBlIHtcblx0bGV0IGJhc2VUeXBlID0gcmVzb2x2ZUJhc2VUeXBlKHR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeSwgc2NvcGUpO1xuXHRpZiAoYmFzZVR5cGUpIHtcblx0XHRpZiAoIShiYXNlVHlwZSBpbnN0YW5jZW9mIE51bGxhYmxlVHlwZSkgJiYgdHlwZU5vZGUubnVsbGFibGUpIHtcblx0XHRcdHJldHVybiBuZXcgTnVsbGFibGVUeXBlKGJhc2VUeXBlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYmFzZVR5cGU7XG5cdH1cblxuXHR0aHJvd1R5cGVFcnJvcihgQ291bGQgbm90IHJlc29sdmUgdHlwZSAke3R5cGVOb2RlLm5hbWV9LmAsIHR5cGVOb2RlLnNwYW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUJhc2VUeXBlKHR5cGVOb2RlOiBBU1RUeXBlTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBzY29wZTogVHlwZVNjb3BlIHwgbnVsbCA9IG51bGwpOiBUeXBlIHtcblx0c3dpdGNoICh0eXBlTm9kZS5raW5kKSB7XG5cdFx0Y2FzZSBBU1RUeXBlTm9kZS5LSU5EX1NJTVBMRToge1xuXHRcdFx0aWYgKHNjb3BlICYmIHNjb3BlLmhhc1R5cGVCaW5kaW5nKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiBzY29wZS5nZXRUeXBlQmluZGluZyh0eXBlTm9kZS5uYW1lKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmhhc1N5bWJvbCh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzb2x2ZVJlZlR5cGUodHlwZU5vZGUsIG9iamVjdFJlZ2lzdHJ5KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKFByaW1pdGl2ZVR5cGVzLmhhc1R5cGUodHlwZU5vZGUubmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIHJlc29sdmVQcmltaXRpdmVUeXBlKHR5cGVOb2RlKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG5ldyBUeXBlVmFyaWFibGUodHlwZU5vZGUubmFtZSk7XG5cdFx0fVxuXHRcdGNhc2UgQVNUVHlwZU5vZGUuS0lORF9HRU5FUklDOiB7XG5cdFx0XHRpZiAoIW9iamVjdFJlZ2lzdHJ5LnR5cGVzLmhhc1N5bWJvbCh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdFx0XHR0aHJvd1R5cGVFcnJvcihgU3ltYm9sICR7dHlwZU5vZGUubmFtZX0gaXMgbm90IGEgY2xhc3MgcmVmZXJlbmNlLmAsIHR5cGVOb2RlLnNwYW4pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc29sdmVHZW5lcmljUmVmVHlwZSh0eXBlTm9kZSwgb2JqZWN0UmVnaXN0cnkpO1xuXHRcdH1cblx0XHRjYXNlIEFTVFR5cGVOb2RlLktJTkRfTEFNQkRBOiB7XG5cdFx0XHRyZXR1cm4gcmVzb2x2ZUxhbWJkYVR5cGUodHlwZU5vZGUsIG9iamVjdFJlZ2lzdHJ5KTtcblx0XHR9XG5cdFx0ZGVmYXVsdDoge1xuXHRcdFx0dGhyb3dUeXBlRXJyb3IoXG5cdFx0XHRcdGBJbnZhbGlkIHR5cGUgYW5ub3RhdGlvbiwga2luZCAke3R5cGVOb2RlLmtpbmR9LmAsXG5cdFx0XHRcdHR5cGVOb2RlLnNwYW5cblx0XHRcdCk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlUmVmVHlwZSh0eXBlTm9kZTogQVNUVHlwZU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IENsYXNzUmVmVHlwZSB8IEludGVyZmFjZVJlZlR5cGUgfCBUeXBlIHtcblx0aWYgKHR5cGVOb2RlLnR5cGVBcmd1bWVudHMubGVuZ3RoID4gMCkge1xuXHRcdHRocm93VHlwZUVycm9yKGBHZW5lcmljIGNsYXNzICR7dHlwZU5vZGUubmFtZX0gY2Fubm90IGhhdmUgdHlwZSBhcmd1bWVudHMuYCwgdHlwZU5vZGUuc3Bhbik7XG5cdH1cblxuXHRpZiAob2JqZWN0UmVnaXN0cnkudHlwZXMuY2xhc3NTeW1ib2xzLmhhcyh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdHJldHVybiBuZXcgQ2xhc3NSZWZUeXBlKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKHR5cGVOb2RlLm5hbWUpKTtcblx0fVxuXG5cdGlmIChvYmplY3RSZWdpc3RyeS50eXBlcy5pbnRlcmZhY2VTeW1ib2xzLmhhcyh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdHJldHVybiBuZXcgSW50ZXJmYWNlUmVmVHlwZShvYmplY3RSZWdpc3RyeS50eXBlcy5nZXRJbnRlcmFjZVN5bWJvbCh0eXBlTm9kZS5uYW1lKSk7XG5cdH1cblxuXHR0aHJvd1R5cGVFcnJvcihgVW5rbm93biBjbGFzcyBvciBpbnRlcmZhY2UgJHt0eXBlTm9kZS5uYW1lfS5gLCB0eXBlTm9kZS5zcGFuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVHZW5lcmljUmVmVHlwZSh0eXBlTm9kZTogQVNUVHlwZU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IENsYXNzUmVmVHlwZSB8IEludGVyZmFjZVJlZlR5cGUgfCBUeXBlIHtcblx0aWYgKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmNsYXNzU3ltYm9scy5oYXModHlwZU5vZGUubmFtZSkpIHtcblx0XHRyZXR1cm4gbmV3IENsYXNzUmVmVHlwZShcblx0XHRcdG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKHR5cGVOb2RlLm5hbWUpLFxuXHRcdFx0dHlwZU5vZGUudHlwZUFyZ3VtZW50cy5tYXAodHlwZUFyZ3VtZW50ID0+IHJlc29sdmVCYXNlVHlwZSh0eXBlQXJndW1lbnQsIG9iamVjdFJlZ2lzdHJ5KSlcblx0XHQpO1xuXHR9XG5cblx0aWYgKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmludGVyZmFjZVN5bWJvbHMuaGFzKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0cmV0dXJuIG5ldyBJbnRlcmZhY2VSZWZUeXBlKFxuXHRcdFx0b2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0SW50ZXJhY2VTeW1ib2wodHlwZU5vZGUubmFtZSksXG5cdFx0XHR0eXBlTm9kZS50eXBlQXJndW1lbnRzLm1hcCh0eXBlQXJndW1lbnQgPT4gcmVzb2x2ZUJhc2VUeXBlKHR5cGVBcmd1bWVudCwgb2JqZWN0UmVnaXN0cnkpKVxuXHRcdCk7XG5cdH1cblxuXHR0aHJvd1R5cGVFcnJvcihgVW5rbm93biBjbGFzcyBvciBpbnRlcmZhY2UgJHt0eXBlTm9kZS5uYW1lfS5gLCB0eXBlTm9kZS5zcGFuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVQcmltaXRpdmVUeXBlKHR5cGVOb2RlOiBBU1RUeXBlTm9kZSk6IFR5cGUge1xuXHRyZXR1cm4gVHlwZXMuZ2V0VHlwZSh0eXBlTm9kZS5uYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVMYW1iZGFUeXBlKHR5cGVOb2RlOiBBU1RUeXBlTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBzY29wZTogVHlwZVNjb3BlIHwgbnVsbCA9IG51bGwpOiBMYW1iZGFUeXBlIHtcblx0Y29uc3QgcGFyYW1ldGVyU3ltYm9scyA9IHR5cGVOb2RlLnBhcmFtZXRlclR5cGVzLm1hcChcblx0XHR0eXBlQW5ub3RhdGlvbiA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IFBhcmFtZXRlclN5bWJvbChcblx0XHRcdFx0dHlwZUFubm90YXRpb24ubmFtZSxcblx0XHRcdFx0d3JhcFR5cGUodHlwZUFubm90YXRpb24sIG9iamVjdFJlZ2lzdHJ5LCBzY29wZSlcblx0XHRcdCk7XG5cdFx0fVxuXHQpO1xuXG5cdHJldHVybiBuZXcgTGFtYmRhVHlwZShcblx0XHRwYXJhbWV0ZXJTeW1ib2xzLFxuXHRcdHR5cGVOb2RlLnJldHVyblR5cGVcblx0XHRcdD8gd3JhcFR5cGUodHlwZU5vZGUucmV0dXJuVHlwZSwgb2JqZWN0UmVnaXN0cnksIHNjb3BlKVxuXHRcdFx0OiBUeXBlcy5NSVhFRFxuXHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RpdHV0ZVR5cGUodHlwZTogVHlwZSwgc3Vic3RpdHV0aW9uTWFwOiBNYXA8c3RyaW5nLCBUeXBlPik6IFR5cGUge1xuXHRpZiAodHlwZSBpbnN0YW5jZW9mIFR5cGVWYXJpYWJsZSkge1xuXHRcdHJldHVybiBzdWJzdGl0dXRpb25NYXAuZ2V0KHR5cGUubmFtZSkgPz8gdHlwZTtcblx0fVxuXG5cdGlmICh0eXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0cmV0dXJuIG5ldyBDbGFzc1JlZlR5cGUoXG5cdFx0XHR0eXBlLmNsYXNzU3ltYm9sLFxuXHRcdFx0dHlwZS50eXBlQXJndW1lbnRzLm1hcCh0eXBlQXJndW1lbnQgPT4gc3Vic3RpdHV0ZVR5cGUodHlwZUFyZ3VtZW50LCBzdWJzdGl0dXRpb25NYXApKVxuXHRcdCk7XG5cdH1cblxuXHRpZiAodHlwZSBpbnN0YW5jZW9mIE51bGxhYmxlVHlwZSkge1xuXHRcdHJldHVybiBuZXcgTnVsbGFibGVUeXBlKHN1YnN0aXR1dGVUeXBlKHR5cGUuaW5uZXIsIHN1YnN0aXR1dGlvbk1hcCkpO1xuXHR9XG5cblx0cmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFR5cGVTdWJzdGl0dXRpb25NYXAodHlwZVBhcmFtZXRlcnM6IFR5cGVQYXJhbWV0ZXJTeW1ib2xbXSwgdHlwZUFyZ3VtZW50czogVHlwZVtdKTogTWFwPHN0cmluZywgVHlwZT4ge1xuXHRjb25zdCBzdWJzdGl0dXRpb25NYXAgPSBuZXcgTWFwKCk7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0eXBlUGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHR5cGVQYXJhbWV0ZXI6IFR5cGVQYXJhbWV0ZXJTeW1ib2wgfCBudWxsID0gdHlwZVBhcmFtZXRlcnNbaV0gfHwgbnVsbDtcblx0XHRjb25zdCB0eXBlQXJndW1lbnQ6IFR5cGUgfCBudWxsID0gdHlwZUFyZ3VtZW50c1tpXSB8fCBudWxsO1xuXG5cdFx0aWYgKHR5cGVQYXJhbWV0ZXIgJiYgdHlwZUFyZ3VtZW50KSB7XG5cdFx0XHRzdWJzdGl0dXRpb25NYXAuc2V0KHR5cGVQYXJhbWV0ZXIubmFtZSwgdHlwZUFyZ3VtZW50KTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3Vic3RpdHV0aW9uTWFwO1xufVxuIiwKICAgICJpbXBvcnQge0NsYXNzUmVmVHlwZSwgVHlwZSwgVHlwZXN9IGZyb20gXCIuL3R5cGVfb2JqZWN0c1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge3Rocm93UnVudGltZUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5cbmV4cG9ydCBjbGFzcyBBdXRvYm94ZWRUeXBlcyB7XG5cdHN0YXRpYyBOVU1CRVI6IHN0cmluZyA9ICdOdW1iZXInO1xuXHRzdGF0aWMgU1RSSU5HOiBzdHJpbmcgPSAnU3RyaW5nJztcblx0c3RhdGljIEJPT0xFQU46IHN0cmluZyA9ICdCb29sZWFuJztcblxuXHRzdGF0aWMgQ0xBU1NOQU1FX01BUDogeyBbczogc3RyaW5nXTogc3RyaW5nOyB9ID0ge1xuXHRcdG51bWJlcjogQXV0b2JveGVkVHlwZXMuTlVNQkVSLFxuXHRcdHN0cmluZzogQXV0b2JveGVkVHlwZXMuU1RSSU5HLFxuXHRcdGJvb2xlYW46IEF1dG9ib3hlZFR5cGVzLkJPT0xFQU5cblx0fTtcblxuXHRzdGF0aWMgZ2V0Q2xhc3NOYW1lKGtleTogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRjb25zdCBjbGFzc05hbWUgPSBBdXRvYm94ZWRUeXBlcy5DTEFTU05BTUVfTUFQW2tleV07XG5cdFx0aWYgKCFjbGFzc05hbWUpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBObyBjbGFzcyBmb3VuZCBmb3IgcHJpbWl0aXZlIHR5cGUgJHtrZXl9LmApO1xuXHRcdH1cblx0XHRyZXR1cm4gY2xhc3NOYW1lO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvYm94aW5nIHtcblx0c3RhdGljIENMQVNTTkFNRV9NQVA6IE1hcDxUeXBlLCBzdHJpbmc+ID0gbmV3IE1hcChcblx0XHRbXG5cdFx0XHRbVHlwZXMuTlVNQkVSLCBBdXRvYm94ZWRUeXBlcy5OVU1CRVJdLFxuXHRcdFx0W1R5cGVzLlNUUklORywgQXV0b2JveGVkVHlwZXMuU1RSSU5HXSxcblx0XHRcdFtUeXBlcy5CT09MRUFOLCBBdXRvYm94ZWRUeXBlcy5CT09MRUFOXVxuXHRcdF1cblx0KTtcblxuXHRzdGF0aWMgYXV0b2JveElmTmVlZGVkKG9iamVjdFR5cGU6IFR5cGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IENsYXNzUmVmVHlwZSB8IFR5cGUge1xuXHRcdGNvbnN0IGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gQXV0b2JveGluZy5DTEFTU05BTUVfTUFQLmdldChvYmplY3RUeXBlKTtcblx0XHRpZiAoY2xhc3NOYW1lKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENsYXNzUmVmVHlwZShvYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChjbGFzc05hbWUpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gb2JqZWN0VHlwZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge1xuXHRDbGFzc0RlZmluaXRpb24sXG5cdENsYXNzTWV0aG9kRGVmaW5pdGlvbixcblx0RW52aXJvbm1lbnQsXG5cdEV4ZWN1dGlvblN0b3AsXG5cdEluc3RhbmNlLFxuXHRSZXR1cm5WYWx1ZVxufSBmcm9tIFwiLi9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuaW1wb3J0IHtcblx0QVNUQW5ub3RhdGlvbk5vZGUsXG5cdEFTVEFycmF5Tm9kZSxcblx0QVNUQXNzaWdubWVudE5vZGUsXG5cdEFTVEJpbmFyeU5vZGUsXG5cdEFTVENhbGxOb2RlLFxuXHRBU1RDbGFzc05vZGUsXG5cdEFTVEV4cHJlc3Npb25Ob2RlLFxuXHRBU1RGb3JlYWNoTm9kZSxcblx0QVNUSWZOb2RlLFxuXHRBU1RJbmRleE5vZGUsXG5cdEFTVExhbWJkYU5vZGUsXG5cdEFTVE1hdGNoQ2FzZU5vZGUsXG5cdEFTVE1hdGNoTm9kZSxcblx0QVNUTWVtYmVyTm9kZSxcblx0QVNUTWV0aG9kTm9kZSxcblx0QVNUTmV3Tm9kZSxcblx0QVNUTm9kZSxcblx0QVNUTm9kZVR5cGUsXG5cdEFTVE9wZXJhdG9yTm9kZSxcblx0QVNUUGFyYW1ldGVyTm9kZSxcblx0QVNUUmV0dXJuTm9kZSxcblx0QVNUVHlwZU5vZGUsXG5cdEFTVFVuYXJ5Tm9kZSxcblx0QVNUVmFyaWFibGVOb2RlLFxuXHRBU1RWRG9tRXhwcmVzc2lvbk5vZGUsXG5cdEFTVFZEb21Ob2RlLFxuXHRBU1RWRG9tVGV4dE5vZGVcbn0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHtHUkFNTUFSLCBUWVBFX0VOVU19IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5pbXBvcnQge05hdGl2ZUNsYXNzZXN9IGZyb20gXCIuLi8uLi9saWJyYXJ5L25hdGl2ZV9jbGFzc2VzXCI7XG5pbXBvcnQge05hdGl2ZUZ1bmN0aW9ucywgTmF0aXZlRnVuY3Rpb25UeXBlUmVnaXN0cnl9IGZyb20gXCIuLi8uLi9saWJyYXJ5L25hdGl2ZV9mdW5jdGlvbnNcIjtcbmltcG9ydCB7Y2FzdFZhbHVlLCBmcm9tTHlyYVZhbHVlLCBMeXJhTmF0aXZlT2JqZWN0LCByZXR1cm5WYWx1ZSwgd3JhcE5hdGl2ZUluc3RhbmNlfSBmcm9tIFwiLi9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge3Rocm93UnVudGltZUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQge0F1dG9ib3hlZFR5cGVzfSBmcm9tIFwiLi4vdHlwZXMvYXV0b2JveGluZ1wiO1xuaW1wb3J0IHtMeXJhQXJyYXl9IGZyb20gXCIuLi8uLi9saWJyYXJ5L2NsYXNzZXMvYXJyYXlcIjtcbmltcG9ydCB0eXBlIHtWQ2hpbGR9IGZyb20gXCIuLi92ZG9tL3Zkb21cIjtcbmltcG9ydCB0eXBlIHtFdmVudFBpcGVsaW5lfSBmcm9tIFwiLi4vZXZlbnQvcGlwZWxpbmVcIjtcblxuY29uc3QgbmF0aXZlQ2xhc3NlcyA9IG5ldyBOYXRpdmVDbGFzc2VzKCk7XG5jb25zdCBuYXRpdmVGdW5jdGlvbnMgPSBuZXcgTmF0aXZlRnVuY3Rpb25zKCk7XG5jb25zdCBnbG9iYWxGdW5jdGlvbnMgPSBuYXRpdmVGdW5jdGlvbnMuZ2V0R2xvYmFsRnVuY3Rpb25zKCk7XG5jb25zdCBnbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeTogTmF0aXZlRnVuY3Rpb25UeXBlUmVnaXN0cnkgPSBuYXRpdmVGdW5jdGlvbnMuZ2V0R2xvYmFsRnVuY3Rpb25UeXBlUmVnaXN0cnkoKTtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0RnVuY3Rpb25DYWxsIHtcblx0cHJpdmF0ZSByZWFkb25seSBub2RlOiBBU1ROb2RlO1xuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgZnVuY3Rpb25FbnY6IEVudmlyb25tZW50O1xuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5O1xuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZTtcblx0cHJvdGVjdGVkIHJlYWRvbmx5IHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRub2RlOiBBU1ROb2RlLFxuXHRcdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSxcblx0XHRmdW5jdGlvbkVudjogRW52aXJvbm1lbnQsXG5cdFx0ZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSxcblx0XHR0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGxcblx0KSB7XG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5ID0gb2JqZWN0UmVnaXN0cnk7XG5cdFx0dGhpcy5mdW5jdGlvbkVudiA9IGZ1bmN0aW9uRW52O1xuXHRcdHRoaXMuZXZlbnRQaXBlbGluZSA9IGV2ZW50UGlwZWxpbmU7XG5cdFx0dGhpcy50aGlzVmFsdWUgPSB0aGlzVmFsdWU7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0Q2FsbE5vZGUoKTogQVNUQ2FsbE5vZGUge1xuXHRcdGlmICghKHRoaXMubm9kZSBpbnN0YW5jZW9mIEFTVENhbGxOb2RlKSkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgbmF0aXZlIGZ1bmN0aW9uIGNhbGwgJHt0aGlzLm5vZGUudHlwZX0uYCwgdGhpcy5ub2RlLnNwYW4pO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5ub2RlO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldExhbWJkYU5vZGUoKTogQVNUTGFtYmRhTm9kZSB7XG5cdFx0aWYgKCEodGhpcy5ub2RlIGluc3RhbmNlb2YgQVNUTGFtYmRhTm9kZSkpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGxhbWJkYSBjYWxsICR7dGhpcy5ub2RlLnR5cGV9LmAsIHRoaXMubm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMubm9kZTtcblx0fVxuXG5cdGFic3RyYWN0IGV2YWxDYWxsKC4uLmFyZ3M6IGFueVtdKTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgTGFtYmRhRnVuY3Rpb25DYWxsIGV4dGVuZHMgQWJzdHJhY3RGdW5jdGlvbkNhbGwge1xuXHRldmFsQ2FsbCguLi5hcmdzOiBhbnlbXSk6IGFueSB7XG5cdFx0Y29uc3Qgbm9kZTogQVNUTGFtYmRhTm9kZSA9IHRoaXMuZ2V0TGFtYmRhTm9kZSgpO1xuXHRcdGNvbnN0IGNsb3N1cmVFbnY6IEVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KHRoaXMuZnVuY3Rpb25FbnYpO1xuXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG5vZGUucGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgcGFyYW1ldGVyOiBBU1RQYXJhbWV0ZXJOb2RlIHwgbnVsbCA9IG5vZGUucGFyYW1ldGVyc1tpXSB8fCBudWxsO1xuXHRcdFx0aWYgKCFwYXJhbWV0ZXIpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRjbG9zdXJlRW52LmRlZmluZShwYXJhbWV0ZXIubmFtZSwgYXJnc1tpXSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2YWxSZXR1cm4oXG5cdFx0XHRub2RlLmNoaWxkcmVuLFxuXHRcdFx0dGhpcy5vYmplY3RSZWdpc3RyeSxcblx0XHRcdGNsb3N1cmVFbnYsXG5cdFx0XHR0aGlzLmV2ZW50UGlwZWxpbmUsXG5cdFx0XHR0aGlzLnRoaXNWYWx1ZSxcblx0XHRcdG5vZGUucmV0dXJuVHlwZVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE5hdGl2ZUZ1bmN0aW9uQ2FsbCBleHRlbmRzIEFic3RyYWN0RnVuY3Rpb25DYWxsIHtcblx0ZXZhbENhbGwoLi4uYXJnczogYW55W10pOiBhbnkge1xuXHRcdGNvbnN0IGNhbGxOb2RlOiBBU1RDYWxsTm9kZSA9IHRoaXMuZ2V0Q2FsbE5vZGUoKTtcblxuXHRcdGxldCByZXN1bHQ6IGFueSA9IHRoaXMucmVzb2x2ZUNhbGwoKSguLi5hcmdzKTtcblx0XHRpZiAocmVzdWx0IGluc3RhbmNlb2YgTHlyYU5hdGl2ZU9iamVjdCkge1xuXHRcdFx0cmVzdWx0ID0gd3JhcE5hdGl2ZUluc3RhbmNlKHJlc3VsdCwgdGhpcy5vYmplY3RSZWdpc3RyeSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdCA9IHJldHVyblZhbHVlKHJlc3VsdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2YWxSZXR1cm4oXG5cdFx0XHRbcmVzdWx0XSxcblx0XHRcdHRoaXMub2JqZWN0UmVnaXN0cnksXG5cdFx0XHR0aGlzLmZ1bmN0aW9uRW52LFxuXHRcdFx0dGhpcy5ldmVudFBpcGVsaW5lLFxuXHRcdFx0dGhpcy50aGlzVmFsdWUsXG5cdFx0XHRnbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeS5nZXQoY2FsbE5vZGUuY2FsbGVlLm5hbWUpLnJldHVyblR5cGVcblx0XHQpO1xuXHR9XG5cblx0cmVzb2x2ZUNhbGwoKTogYW55IHtcblx0XHRjb25zdCBub2RlOiBBU1RDYWxsTm9kZSB8IG51bGwgPSB0aGlzLmdldENhbGxOb2RlKCk7XG5cblx0XHRpZiAobm9kZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoJ0ludmFsaWQgZnVuY3Rpb24gY2FsbC4nKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZhbEV4cHJlc3Npb24oXG5cdFx0XHRub2RlLmNhbGxlZSxcblx0XHRcdHRoaXMub2JqZWN0UmVnaXN0cnksXG5cdFx0XHR0aGlzLmZ1bmN0aW9uRW52LFxuXHRcdFx0dGhpcy5ldmVudFBpcGVsaW5lLFxuXHRcdFx0dGhpcy50aGlzVmFsdWVcblx0XHQpW25vZGUuY2FsbGVlLm5hbWVdO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck5hdGl2ZUNsYXNzZXMob2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQpOiB2b2lkIHtcblx0Zm9yIChjb25zdCBuYXRpdmVDbGFzcyBvZiBuYXRpdmVDbGFzc2VzLnJlZ2lzdHJ5LnZhbHVlcygpKSB7XG5cdFx0aWYgKG5hdGl2ZUNsYXNzLmlzQXV0b2xvYWRBYmxlKSB7XG5cdFx0XHRjb25zdCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uID0gbmF0aXZlQ2xhc3MuZ2V0Q2xhc3NEZWZpbml0aW9uKCk7XG5cdFx0XHRvYmplY3RSZWdpc3RyeS5jbGFzc2VzLnNldChuYXRpdmVDbGFzcy5uYW1lLCBjbGFzc0RlZik7XG5cdFx0XHRlbnZpcm9ubWVudC5kZWZpbmUobmF0aXZlQ2xhc3MubmFtZSwgY2xhc3NEZWYpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJOYXRpdmVGdW5jdGlvbnMoZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogdm9pZCB7XG5cdGZvciAoY29uc3QgbmFtZSBpbiBnbG9iYWxGdW5jdGlvbnMpIHtcblx0XHRjb25zdCBnbG9iYWxGdW5jdGlvbjogYW55ID0gZ2xvYmFsRnVuY3Rpb25zW25hbWVdO1xuXHRcdGlmICghZ2xvYmFsRnVuY3Rpb24pIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKCdHbG9iYWwgZnVuY3Rpb24gaXMgbnVsbC4nKTtcblx0XHR9XG5cdFx0ZW52aXJvbm1lbnQuZGVmaW5lKG5hbWUsIGdsb2JhbEZ1bmN0aW9ucyk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxOb2RlKFxuXHRub2RlOiBBU1ROb2RlLFxuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksXG5cdGVudmlyb25tZW50OiBFbnZpcm9ubWVudCxcblx0ZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSxcblx0dGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsXG4pOiBhbnkge1xuXHRpZiAobm9kZS5pc0V4cHJlc3Npb24pIHtcblx0XHRyZXR1cm4gbmV3IFJldHVyblZhbHVlKGV2YWxFeHByZXNzaW9uKG5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKSk7XG5cdH1cblxuXHRzd2l0Y2ggKG5vZGUudHlwZSkge1xuXHRcdGNhc2UgQVNUTm9kZVR5cGUuUFJPR1JBTU06IHtcblx0XHRcdGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuXHRcdFx0XHRldmFsTm9kZShjaGlsZCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuSU1QT1JUOlxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuSU5URVJGQUNFOiB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5DTEFTUzoge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RDbGFzc05vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxDbGFzcyhub2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgY2xhc3Mgbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5WQVJJQUJMRToge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RWYXJpYWJsZU5vZGUpIHtcblx0XHRcdFx0Y29uc3QgdmFsdWU6IGFueSA9IG5vZGUuaW5pdFxuXHRcdFx0XHRcdD8gZXZhbEV4cHJlc3Npb24obm9kZS5pbml0LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSlcblx0XHRcdFx0XHQ6IG51bGw7XG5cdFx0XHRcdGVudmlyb25tZW50LmRlZmluZShub2RlLm5hbWUsIHZhbHVlKTtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCB2YXJpYWJsZSBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLklGOiB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVElmTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbElmKG5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGlmIG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuTUFUQ0g6IHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUTWF0Y2hOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsTWF0Y2gobm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgbWF0Y2ggbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5GT1JFQUNIOiB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEZvcmVhY2hOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsRm9yZWFjaChub2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBmb3JlYWNoIG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuVkRPTToge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RWRG9tTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbFZEb21Ob2RlKG5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGZvcmVhY2ggbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5FWFBSRVNTSU9OOiB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEV4cHJlc3Npb25Ob2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsRXhwcmVzc2lvbihub2RlLmV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGV4cHJlc3Npb24gbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5SRVRVUk46IHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUUmV0dXJuTm9kZSkge1xuXHRcdFx0XHRjb25zdCB2YWx1ZTogYW55ID0gbm9kZS5hcmd1bWVudFxuXHRcdFx0XHRcdD8gZXZhbEV4cHJlc3Npb24obm9kZS5hcmd1bWVudCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpXG5cdFx0XHRcdFx0OiBudWxsO1xuXHRcdFx0XHRyZXR1cm4gbmV3IFJldHVyblZhbHVlKHZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIHJldHVybiBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlLnNwYW4pO1xuXHRcdH1cblx0XHRkZWZhdWx0OiB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5oYW5kbGVkIG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RFbXB0eUluc3RhbmNlKG5vZGU6IEFTVENsYXNzTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogSW5zdGFuY2Uge1xuXHRsZXQgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbjtcblxuXHRpZiAob2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5oYXMobm9kZS5uYW1lKSkge1xuXHRcdGNsYXNzRGVmID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQobm9kZS5uYW1lKTtcblx0fSBlbHNlIHtcblx0XHRjbGFzc0RlZiA9IENsYXNzRGVmaW5pdGlvbi5mcm9tQVNUKG5vZGUpO1xuXHRcdG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuc2V0KG5vZGUubmFtZSwgY2xhc3NEZWYpO1xuXHR9XG5cblx0cmV0dXJuIGNsYXNzRGVmLmNvbnN0cnVjdEVtcHR5SW5zdGFuY2UoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdE5hdGl2ZUluc3RhbmNlKGV4cHI6IEFTVE5ld05vZGUsIGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogSW5zdGFuY2Uge1xuXHRyZXR1cm4gY2xhc3NEZWYuY29uc3RydWN0TmF0aXZlSW5zdGFuY2VCeU5ld05vZGUoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEluc3RhbmNlKGV4cHI6IEFTVE5ld05vZGUsIGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogSW5zdGFuY2Uge1xuXHRyZXR1cm4gY2xhc3NEZWYuY29uc3RydWN0SW5zdGFuY2VCeU5ld05vZGUoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxDbGFzcyhub2RlOiBBU1RDbGFzc05vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogdm9pZCB7XG5cdGNvbnN0IGluc3RhbmNlOiBJbnN0YW5jZSA9IGNvbnN0cnVjdEVtcHR5SW5zdGFuY2Uobm9kZSwgb2JqZWN0UmVnaXN0cnkpO1xuXG5cdGluc3RhbmNlLmluaXRpYWxpemVJbnN0YW5jZUZpZWxkcyhvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXG5cdGVudmlyb25tZW50LmRlZmluZShub2RlLm5hbWUsIGluc3RhbmNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxOZXcoZXhwcjogQVNUTmV3Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiBJbnN0YW5jZSB7XG5cdGlmICghb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5oYXMoZXhwci5uYW1lKSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBVbmtub3duIGNsYXNzICR7ZXhwci5uYW1lfS5gLCBleHByLnNwYW4pO1xuXHR9XG5cblx0Y29uc3QgY2xhc3NEZWYgPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChleHByLm5hbWUpO1xuXHRpZiAoY2xhc3NEZWYubmF0aXZlSW5zdGFuY2UpIHtcblx0XHRyZXR1cm4gY29uc3RydWN0TmF0aXZlSW5zdGFuY2UoZXhwciwgY2xhc3NEZWYsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG5cdH1cblxuXHRyZXR1cm4gY29uc3RydWN0SW5zdGFuY2UoZXhwciwgY2xhc3NEZWYsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsRXhwcmVzc2lvbihleHByOiBBU1ROb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0c3dpdGNoIChleHByLnR5cGUpIHtcblx0XHRjYXNlIEFTVE5vZGVUeXBlLlNUUklORzpcblx0XHRjYXNlIEFTVE5vZGVUeXBlLk5VTUJFUjpcblx0XHRjYXNlIEFTVE5vZGVUeXBlLkJPT0xFQU46IHtcblx0XHRcdHJldHVybiBleHByLnZhbHVlO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLk5VTEw6IHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLklERU5USUZJRVI6IHtcblx0XHRcdHJldHVybiBlbnZpcm9ubWVudC5nZXQoZXhwci5uYW1lKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5USElTOiB7XG5cdFx0XHRpZiAoIXRoaXNWYWx1ZSkge1xuXHRcdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgdGhpcyB1c2VkIG91dHNpZGUgb2YgbWV0aG9kLmAsIGV4cHIuc3Bhbik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpc1ZhbHVlO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkJJTkFSWToge1xuXHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RCaW5hcnlOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsQmluYXJ5KGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGJpbmFyeSBleHByZXNzaW9uICR7ZXhwci50eXBlfWApO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLlVOQVJZOiB7XG5cdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVFVuYXJ5Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbFVuYXJ5KGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIHVuYXJ5IGV4cHJlc3Npb24gJHtleHByLnR5cGV9LmAsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuQVNTSUdOTUVOVDoge1xuXHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RBc3NpZ25tZW50Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbEFzc2lnbihleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBhc3NpZ25tZW50IGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5NRU1CRVI6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbE1lbWJlcihleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBtZW1iZXIgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkNBTEw6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQ2FsbE5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxDYWxsKGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGNhbGwgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLlZET006IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUVkRvbU5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxWRG9tTm9kZShleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBjYWxsIGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5ORVc6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTmV3Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbE5ldyhleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgY2FsbCBleHByZXNzaW9uICR7ZXhwci50eXBlfWAsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuQVJSQVk6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQXJyYXlOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsQXJyYXkoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgYXJyYXkgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLklOREVYOiB7XG5cdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVEluZGV4Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbEluZGV4KGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGluZGV4IGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5MQU1CREE6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTGFtYmRhTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbExhbWJkYShleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBsYW1iZGEgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0XHRkZWZhdWx0OiB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5oYW5kbGVkIGV4cHJlc3Npb24gJHtleHByLnR5cGV9LmAsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsQmluYXJ5KGV4cHI6IEFTVEJpbmFyeU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRjb25zdCBsZWZ0OiBhbnkgPSBjYXN0VmFsdWUoZXZhbEV4cHJlc3Npb24oZXhwci5sZWZ0LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSkpO1xuXHRjb25zdCByaWdodDogYW55ID0gY2FzdFZhbHVlKGV2YWxFeHByZXNzaW9uKGV4cHIucmlnaHQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKSk7XG5cblx0aWYgKGxlZnQgaW5zdGFuY2VvZiBJbnN0YW5jZSAmJiByaWdodCBpbnN0YW5jZW9mIEluc3RhbmNlKSB7XG5cblx0XHRpZiAobGVmdC5fX2NsYXNzRGVmLm5hdGl2ZUluc3RhbmNlICYmIHJpZ2h0Ll9fY2xhc3NEZWYubmF0aXZlSW5zdGFuY2UpIHtcblxuXHRcdFx0Y29uc3QgbWV0aG9kTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gQVNUT3BlcmF0b3JOb2RlLk9QRVJBVE9SX01FVEhPRF9NQVAuZ2V0KGV4cHIub3BlcmF0b3IpO1xuXHRcdFx0aWYgKCFtZXRob2ROYW1lKSB7XG5cdFx0XHRcdHRocm93UnVudGltZUVycm9yKGBVbmtub3duIG9wZXJhdG9yICR7ZXhwci5vcGVyYXRvcn1gKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGNhbGxJbnN0YW5jZU1ldGhvZChcblx0XHRcdFx0bGVmdCxcblx0XHRcdFx0bGVmdC5maW5kZU1ldGhvZE5vZGUobWV0aG9kTmFtZSksXG5cdFx0XHRcdFtyaWdodF0sXG5cdFx0XHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0XHRlbnZpcm9ubWVudCxcblx0XHRcdFx0ZXZlbnRQaXBlbGluZVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY2FsbEluc3RhbmNlTWV0aG9kKFxuXHRcdFx0bGVmdCxcblx0XHRcdGxlZnQuZmluZGVNZXRob2ROb2RlKGV4cHIub3BlcmF0b3IpLFxuXHRcdFx0W3JpZ2h0XSxcblx0XHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0ZW52aXJvbm1lbnQsXG5cdFx0XHRldmVudFBpcGVsaW5lXG5cdFx0KTtcblx0fVxuXG5cdHN3aXRjaCAoZXhwci5vcGVyYXRvcikge1xuXHRcdGNhc2UgR1JBTU1BUi5QTFVTOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCArIHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTUlOVVM6IHtcblx0XHRcdHJldHVybiBsZWZ0IC0gcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5NVUxUSVBMWToge1xuXHRcdFx0cmV0dXJuIGxlZnQgKiByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkRJVklERToge1xuXHRcdFx0cmV0dXJuIGxlZnQgLyByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLk1PRFVMVVM6IHtcblx0XHRcdHJldHVybiBsZWZ0ICUgcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5MRVNTX1RIQU46IHtcblx0XHRcdHJldHVybiBsZWZ0IDwgcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5HUkVBVEVSX1RIQU46IHtcblx0XHRcdHJldHVybiBsZWZ0ID4gcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5MRVNTX0VRVUFMOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCA8PSByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkdSRUFURVJfRVFVQUw6IHtcblx0XHRcdHJldHVybiBsZWZ0ID49IHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuRVFVQUw6IHtcblx0XHRcdHJldHVybiBsZWZ0ID09PSByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLk5PVF9FUVVBTDoge1xuXHRcdFx0cmV0dXJuIGxlZnQgIT09IHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuQU5EOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCAmJiByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLk9SOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCB8fCByaWdodDtcblx0XHR9XG5cdFx0ZGVmYXVsdDoge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVua25vd24gb3BlcmF0b3IgJHtleHByLm9wZXJhdG9yfWApO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEFycmF5KGV4cHI6IEFTVEFycmF5Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IEluc3RhbmNlIHtcblx0Y29uc3QgdmFsdWVzOiBhbnlbXSA9IFtdO1xuXHRmb3IgKGNvbnN0IGVsZW0gb2YgZXhwci5lbGVtZW50cykge1xuXHRcdHZhbHVlcy5wdXNoKGV2YWxFeHByZXNzaW9uKGVsZW0sIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKSk7XG5cdH1cblxuXHRjb25zdCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQoJ0FycmF5Jyk7XG5cdGNvbnN0IGluc3RhbmNlOiBJbnN0YW5jZSA9IGNsYXNzRGVmLmNvbnN0cnVjdEVtcHR5SW5zdGFuY2UoKTtcblx0aW5zdGFuY2UuX19uYXRpdmVJbnN0YW5jZSA9IG5ldyBjbGFzc0RlZi5uYXRpdmVJbnN0YW5jZShmcm9tTHlyYVZhbHVlKHZhbHVlcykpO1xuXG5cdHJldHVybiBpbnN0YW5jZTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEluZGV4KGV4cHI6IEFTVEluZGV4Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCkge1xuXHRpZiAoIWV4cHIub2JqZWN0KSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYEluZGV4IGFjY2VzcyBvbiBudWxsLmAsIGV4cHIuc3Bhbik7XG5cdH1cblxuXHRpZiAoIWV4cHIuaW5kZXgpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgQWNjZXNzIHdpdGggdW5zcGVjaWZpYyBpbmRleC5gLCBleHByLnNwYW4pO1xuXHR9XG5cblx0Y29uc3Qgb2JqZWN0ID0gZXZhbEV4cHJlc3Npb24oZXhwci5vYmplY3QsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0Y29uc3QgaW5kZXggPSBldmFsRXhwcmVzc2lvbihleHByLmluZGV4LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cblx0aWYgKCEob2JqZWN0IGluc3RhbmNlb2YgTHlyYUFycmF5IHx8IG9iamVjdC5fX25hdGl2ZUluc3RhbmNlIGluc3RhbmNlb2YgTHlyYUFycmF5KSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKCdJbmRleCBhY2Nlc3Mgb24gbm9uLWFycmF5JywgZXhwci5zcGFuKTtcblx0fVxuXG5cdGNvbnN0IHRhcmdldCA9IG9iamVjdCBpbnN0YW5jZW9mIEx5cmFBcnJheSA/IG9iamVjdCA6IG9iamVjdC5fX25hdGl2ZUluc3RhbmNlO1xuXHRjb25zdCB2YWx1ZSA9IHRhcmdldC52YWx1ZXNbaW5kZXhdO1xuXG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRyZXR1cm4gd3JhcE5hdGl2ZUluc3RhbmNlKHZhbHVlLCBvYmplY3RSZWdpc3RyeSk7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsTGFtYmRhKG5vZGU6IEFTVExhbWJkYU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgbGFtYmRhRW52OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogTGFtYmRhRnVuY3Rpb25DYWxsIHtcblx0cmV0dXJuIG5ldyBMYW1iZGFGdW5jdGlvbkNhbGwobm9kZSwgb2JqZWN0UmVnaXN0cnksIGxhbWJkYUVudiwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEFzc2lnbihleHByOiBBU1RBc3NpZ25tZW50Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGNvbnN0IHZhbHVlOiBhbnkgPSBldmFsRXhwcmVzc2lvbihleHByLnJpZ2h0LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cblx0aWYgKGV4cHIubGVmdC50eXBlID09PSBBU1ROb2RlVHlwZS5NRU1CRVIpIHtcblx0XHRpZiAoZXhwci5sZWZ0IGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkge1xuXHRcdFx0Y29uc3Qgb2JqZWN0OiBJbnN0YW5jZSA9IGV2YWxFeHByZXNzaW9uKFxuXHRcdFx0XHRleHByLmxlZnQub2JqZWN0LFxuXHRcdFx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRcdFx0ZW52aXJvbm1lbnQsXG5cdFx0XHRcdGV2ZW50UGlwZWxpbmUsXG5cdFx0XHRcdHRoaXNWYWx1ZVxuXHRcdFx0KSBhcyBJbnN0YW5jZTtcblxuXHRcdFx0aWYgKGV4cHIubGVmdC5vYmplY3QudHlwZSA9PT0gQVNUTm9kZVR5cGUuSURFTlRJRklFUikge1xuXHRcdFx0XHRvYmplY3QuX19zdGF0aWNGaWVsZHNbZXhwci5sZWZ0LnByb3BlcnR5XSA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b2JqZWN0Ll9faW5zdGFuY2VGaWVsZHNbZXhwci5sZWZ0LnByb3BlcnR5XSA9IHZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHRvYmplY3QubWFya0RpcnR5KGV2ZW50UGlwZWxpbmUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBtZW1iZXIgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRlbnZpcm9ubWVudC5zZXQoZXhwci5sZWZ0Lm5hbWUsIHZhbHVlKTtcblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsTWVtYmVyKGV4cHI6IEFTVE1lbWJlck5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRjb25zdCBvYmplY3Q6IEluc3RhbmNlIHwgbnVsbCA9IGV2YWxFeHByZXNzaW9uKGV4cHIub2JqZWN0LFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFJlZ2lzdHJ5LFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudmlyb25tZW50LFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50UGlwZWxpbmUsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1ZhbHVlKSBhcyBJbnN0YW5jZTtcblxuXHRpZiAoIW9iamVjdCkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBNZW1iZXIgYWNjZXNzIG9uIG51bGwuYCwgZXhwci5zcGFuKTtcblx0fVxuXG5cdGlmIChleHByLnByb3BlcnR5IGluIG9iamVjdC5fX2luc3RhbmNlRmllbGRzKSB7XG5cdFx0cmV0dXJuIG9iamVjdC5fX2luc3RhbmNlRmllbGRzW2V4cHIucHJvcGVydHldO1xuXHR9XG5cblx0aWYgKGV4cHIucHJvcGVydHkgaW4gb2JqZWN0Ll9fc3RhdGljRmllbGRzKSB7XG5cdFx0cmV0dXJuIG9iamVjdC5fX3N0YXRpY0ZpZWxkc1tleHByLnByb3BlcnR5XTtcblx0fVxuXG5cdHRocm93UnVudGltZUVycm9yKGBQcm9wZXJ0eSAnJHtleHByLnByb3BlcnR5fScgbm90IGZvdW5kYCwgZXhwci5zcGFuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxDYWxsKGV4cHI6IEFTVENhbGxOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0Ly8gc3VwZXIgY2FsbCBpbnNpZGUgY29uc3RydWN0b3Jcblx0aWYgKGV4cHIuY2FsbGVlLnR5cGUgPT09IEFTVE5vZGVUeXBlLklERU5USUZJRVIgJiYgZXhwci5jYWxsZWUubmFtZSA9PT0gR1JBTU1BUi5TVVBFUikge1xuXHRcdGlmICghdGhpc1ZhbHVlIHx8ICF0aGlzVmFsdWUuX19jbGFzc0RlZj8uc3VwZXJDbGFzcykge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoJ3N1cGVyKCkgdXNlZCBvdXRzaWRlIG9mIHN1YmNsYXNzIGNvbnN0cnVjdG9yJyk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc3VwZXJDbGFzc0RlZiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KHRoaXNWYWx1ZS5fX2NsYXNzRGVmLnN1cGVyQ2xhc3MpO1xuXHRcdGNvbnN0IGNvbnN0cnVjdG9yTWV0aG9kID0gc3VwZXJDbGFzc0RlZi5jb25zdHJ1Y3Rvck1ldGhvZDtcblxuXHRcdGlmICghY29uc3RydWN0b3JNZXRob2QpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNvbnN0cnVjdG9yRW52ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblx0XHRjb25zdHJ1Y3RvckVudi5kZWZpbmUoR1JBTU1BUi5USElTLCB0aGlzVmFsdWUpO1xuXG5cdFx0YmluZE1ldGhvZFBhcmFtZXRlcnMoXG5cdFx0XHRleHByLFxuXHRcdFx0Y29uc3RydWN0b3JNZXRob2QucGFyYW1ldGVycyxcblx0XHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0Y29uc3RydWN0b3JFbnYsXG5cdFx0XHRlbnZpcm9ubWVudCxcblx0XHRcdGV2ZW50UGlwZWxpbmUsXG5cdFx0XHR0aGlzVmFsdWVcblx0XHQpO1xuXG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiBjb25zdHJ1Y3Rvck1ldGhvZC5jaGlsZHJlbikge1xuXHRcdFx0ZXZhbE5vZGUoY2hpbGQsIG9iamVjdFJlZ2lzdHJ5LCBjb25zdHJ1Y3RvckVudiwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGlmIChleHByLmNhbGxlZS50eXBlID09PSBBU1ROb2RlVHlwZS5NRU1CRVIpIHtcblx0XHRpZiAoZXhwci5jYWxsZWUgaW5zdGFuY2VvZiBBU1RNZW1iZXJOb2RlKSB7XG5cdFx0XHRpZiAoZXhwci5jYWxsZWUub2JqZWN0LnR5cGUgPT09IEFTVE5vZGVUeXBlLklERU5USUZJRVIpIHtcblx0XHRcdFx0Y29uc3QgY2xhc3NOYW1lOiBzdHJpbmcgPSBleHByLmNhbGxlZS5vYmplY3QubmFtZTtcblxuXHRcdFx0XHRpZiAob2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5oYXMoY2xhc3NOYW1lKSkge1xuXHRcdFx0XHRcdHJldHVybiBldmFsU3RhdGljQ2FsbChleHByLCBjbGFzc05hbWUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGV2YWxJbnN0YW5jZUNhbGwoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIGV2YWxGdW5jdGlvbkNhbGwoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEZ1bmN0aW9uQ2FsbChleHByOiBBU1RDYWxsTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCkge1xuXHRjb25zdCBmdW5jdGlvbkNhbGw6IGFueSA9IGV2YWxFeHByZXNzaW9uKGV4cHIuY2FsbGVlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdGNvbnN0IGFyZ3M6IGFueVtdID0gZXZhbENhbGxBcmd1bWVudHMoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXG5cdGlmIChmdW5jdGlvbkNhbGwgaW5zdGFuY2VvZiBMYW1iZGFGdW5jdGlvbkNhbGwpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb25DYWxsLmV2YWxDYWxsKC4uLmFyZ3MpO1xuXHR9XG5cblx0cmV0dXJuIChuZXcgTmF0aXZlRnVuY3Rpb25DYWxsKGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKSkuZXZhbENhbGwoLi4uYXJncyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsU3RhdGljQ2FsbChleHByOiBBU1RDYWxsTm9kZSwgY2xhc3NOYW1lOiBzdHJpbmcsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRpZiAoIShleHByLmNhbGxlZSBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpKSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgbWVtYmVyIGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0fVxuXG5cdGNvbnN0IGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24gPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChjbGFzc05hbWUpO1xuXHRjb25zdCBtZXRob2REZWY6IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB8IHVuZGVmaW5lZCA9IGNsYXNzRGVmLnN0YXRpY01ldGhvZHNbZXhwci5jYWxsZWUucHJvcGVydHldO1xuXG5cdGlmICghbWV0aG9kRGVmKSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYFN0YXRpYyBtZXRob2QgJHtjbGFzc05hbWV9LiR7ZXhwci5jYWxsZWUucHJvcGVydHl9IG5vdCBmb3VuZGAsIGV4cHIuY2FsbGVlLnNwYW4pO1xuXHR9XG5cblx0aWYgKGNsYXNzRGVmLm5hdGl2ZUluc3RhbmNlICYmIGNsYXNzRGVmLm5hdGl2ZUluc3RhbmNlW21ldGhvZERlZi5uYW1lXSkge1xuXHRcdGNvbnN0IGFyZ3M6IGFueVtdID0gZXZhbE1ldGhvZEFyZ3VtZW50cyhcblx0XHRcdGV4cHIsXG5cdFx0XHRtZXRob2REZWYucGFyYW1ldGVycyxcblx0XHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0ZW52aXJvbm1lbnQsXG5cdFx0XHRldmVudFBpcGVsaW5lLFxuXHRcdFx0dGhpc1ZhbHVlXG5cdFx0KTtcblx0XHRjb25zdCByYXdBcmdzOiBhbnlbXSA9IGFyZ3MubWFwKGZyb21MeXJhVmFsdWUpO1xuXHRcdGNvbnN0IHJlc3VsdDogYW55ID0gY2xhc3NEZWYubmF0aXZlSW5zdGFuY2VbbWV0aG9kRGVmLm5hbWVdKC4uLnJhd0FyZ3MpO1xuXG5cdFx0aWYgKHJlc3VsdCBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdHJldHVybiB3cmFwTmF0aXZlSW5zdGFuY2UocmVzdWx0LCBvYmplY3RSZWdpc3RyeSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2YWxSZXR1cm4oXG5cdFx0XHRbcmV0dXJuVmFsdWUocmVzdWx0KV0sXG5cdFx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRcdG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCksXG5cdFx0XHRldmVudFBpcGVsaW5lLFxuXHRcdFx0dGhpc1ZhbHVlLFxuXHRcdFx0bWV0aG9kRGVmLnJldHVyblR5cGVcblx0XHQpO1xuXHR9XG5cblx0Y29uc3QgbWV0aG9kRW52ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblxuXHRiaW5kTWV0aG9kUGFyYW1ldGVycyhleHByLCBtZXRob2REZWYucGFyYW1ldGVycywgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cblx0cmV0dXJuIGV2YWxSZXR1cm4obWV0aG9kRGVmLmNoaWxkcmVuLCBvYmplY3RSZWdpc3RyeSwgbWV0aG9kRW52LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUsIG1ldGhvZERlZi5yZXR1cm5UeXBlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxJbnN0YW5jZUNhbGwoZXhwcjogQVNUQ2FsbE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpIHtcblx0aWYgKCEoZXhwci5jYWxsZWUgaW5zdGFuY2VvZiBBU1RNZW1iZXJOb2RlKSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIG1lbWJlciBleHByZXNzaW9uICR7ZXhwci50eXBlfWAsIGV4cHIuc3Bhbik7XG5cdH1cblxuXHQvLyBPYmpla3QgYXVzd2VydGVuICh1IHwgdGhpcyB8IHN1cGVyKVxuXHRsZXQgdGFyZ2V0OiBhbnkgPSBldmFsRXhwcmVzc2lvbihleHByLmNhbGxlZS5vYmplY3QsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblxuXHR0YXJnZXQgPSBhdXRvQm94SWZOZWVkZWQodGFyZ2V0LCBvYmplY3RSZWdpc3RyeSk7XG5cblx0aWYgKCF0YXJnZXQgfHwgIXRhcmdldC5fX2NsYXNzRGVmKSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoJ0luc3RhbmNlIGNhbGwgb24gbm9uLW9iamVjdCcsIGV4cHIuY2FsbGVlLnNwYW4pO1xuXHR9XG5cblx0bGV0IGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24gPSB0YXJnZXQuX19jbGFzc0RlZjtcblxuXHQvLyBzdXBlci5tZXRob2QoKVxuXHRpZiAoZXhwci5jYWxsZWUub2JqZWN0LnR5cGUgPT09IEFTVE5vZGVUeXBlLklERU5USUZJRVIgJiYgZXhwci5jYWxsZWUub2JqZWN0Lm5hbWUgPT09ICdzdXBlcicpIHtcblx0XHRjb25zdCBzdXBlck5hbWUgPSBjbGFzc0RlZi5zdXBlckNsYXNzO1xuXHRcdGlmICghc3VwZXJOYW1lKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcignc3VwZXIgdXNlZCBidXQgbm8gc3VwZXJjbGFzcycsIGV4cHIuY2FsbGVlLnNwYW4pO1xuXHRcdH1cblx0XHRjbGFzc0RlZiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KHN1cGVyTmFtZSk7XG5cdH1cblxuXG5cdGNvbnN0IG1ldGhvZERlZjogQ2xhc3NNZXRob2REZWZpbml0aW9uIHwgbnVsbCA9IHJlc29sdmVJbnN0YW5jZU1ldGhvZChcblx0XHRjbGFzc0RlZixcblx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRleHByLmNhbGxlZS5wcm9wZXJ0eVxuXHQpO1xuXG5cdGlmICghbWV0aG9kRGVmKSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYE1ldGhvZCAke2V4cHIuY2FsbGVlLnByb3BlcnR5fSBub3QgZm91bmQgb24gJHtjbGFzc0RlZi5uYW1lfWAsIGV4cHIuY2FsbGVlLnNwYW4pO1xuXHR9XG5cblx0Y29uc3QgbWV0aG9kRW52ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblx0bWV0aG9kRW52LmRlZmluZShHUkFNTUFSLlRISVMsIHRhcmdldCk7XG5cblx0aWYgKHRhcmdldC5fX25hdGl2ZUluc3RhbmNlICYmIG1ldGhvZERlZi5uYW1lIGluIHRhcmdldC5fX25hdGl2ZUluc3RhbmNlKSB7XG5cdFx0Y29uc3QgYXJnczogYW55W10gPSBldmFsTWV0aG9kQXJndW1lbnRzKFxuXHRcdFx0ZXhwcixcblx0XHRcdG1ldGhvZERlZi5wYXJhbWV0ZXJzLFxuXHRcdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0XHRlbnZpcm9ubWVudCxcblx0XHRcdGV2ZW50UGlwZWxpbmUsXG5cdFx0XHR0aGlzVmFsdWVcblx0XHQpO1xuXG5cdFx0Y29uc3QgcmF3QXJnczogYW55ID0gYXJncy5tYXAoZnJvbUx5cmFWYWx1ZSk7XG5cdFx0Y29uc3QgcmVzdWx0OiBhbnkgPSB0YXJnZXQuX19uYXRpdmVJbnN0YW5jZVttZXRob2REZWYubmFtZV0oLi4ucmF3QXJncyk7XG5cblx0XHRpZiAocmVzdWx0IGluc3RhbmNlb2YgTHlyYU5hdGl2ZU9iamVjdCkge1xuXHRcdFx0cmV0dXJuIHdyYXBOYXRpdmVJbnN0YW5jZShyZXN1bHQsIG9iamVjdFJlZ2lzdHJ5KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZhbFJldHVybihcblx0XHRcdFtyZXR1cm5WYWx1ZShyZXN1bHQpXSxcblx0XHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0bWV0aG9kRW52LFxuXHRcdFx0ZXZlbnRQaXBlbGluZSxcblx0XHRcdHRhcmdldCxcblx0XHRcdG1ldGhvZERlZi5yZXR1cm5UeXBlXG5cdFx0KTtcblx0fVxuXG5cdGJpbmRNZXRob2RQYXJhbWV0ZXJzKGV4cHIsIG1ldGhvZERlZi5wYXJhbWV0ZXJzLCBvYmplY3RSZWdpc3RyeSwgbWV0aG9kRW52LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblxuXHRyZXR1cm4gZXZhbFJldHVybihtZXRob2REZWYuY2hpbGRyZW4sIG9iamVjdFJlZ2lzdHJ5LCBtZXRob2RFbnYsIGV2ZW50UGlwZWxpbmUsIHRhcmdldCwgbWV0aG9kRGVmLnJldHVyblR5cGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUluc3RhbmNlTWV0aG9kKGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgbWV0aG9kTmFtZTogc3RyaW5nKTogQ2xhc3NNZXRob2REZWZpbml0aW9uIHwgbnVsbCB7XG5cdGlmIChjbGFzc0RlZi5pbnN0YW5jZU1ldGhvZHNbbWV0aG9kTmFtZV0pIHtcblx0XHRyZXR1cm4gY2xhc3NEZWYuaW5zdGFuY2VNZXRob2RzW21ldGhvZE5hbWVdO1xuXHR9XG5cblx0aWYgKGNsYXNzRGVmLnN1cGVyQ2xhc3MpIHtcblx0XHRjb25zdCBzdXBlckRlZiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KGNsYXNzRGVmLnN1cGVyQ2xhc3MpO1xuXHRcdHJldHVybiByZXNvbHZlSW5zdGFuY2VNZXRob2Qoc3VwZXJEZWYsIG9iamVjdFJlZ2lzdHJ5LCBtZXRob2ROYW1lKTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmluZE1ldGhvZFBhcmFtZXRlcnMoXG5cdGNhbGxOb2RlOiBBU1RDYWxsTm9kZSxcblx0cGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdLFxuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksXG5cdG1ldGhvZEVudjogRW52aXJvbm1lbnQsXG5cdGVudmlyb25tZW50OiBFbnZpcm9ubWVudCxcblx0ZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSxcblx0dGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsXG4pOiB2b2lkIHtcblxuXHRjb25zdCBhcmdzID0gY2FsbE5vZGUuYXJndW1lbnRzO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtZXRlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBwYXJhbWV0ZXI6IEFTVFBhcmFtZXRlck5vZGUgfCBudWxsID0gcGFyYW1ldGVyc1tpXSB8fCBudWxsO1xuXHRcdGNvbnN0IGFyZ3VtZW50OiBhbnkgPSBhcmdzW2ldIHx8IG51bGw7XG5cblx0XHRpZiAoIXBhcmFtZXRlcikge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoJ01pc3NpbmcgcGFyYW1ldGVyIG5hbWUgaW4gbWV0aG9kIGNhbGwuJyk7XG5cdFx0fVxuXG5cdFx0bGV0IHJhd1ZhbHVlO1xuXG5cdFx0aWYgKGFyZ3VtZW50KSB7XG5cdFx0XHRyYXdWYWx1ZSA9IGV2YWxFeHByZXNzaW9uKGFyZ3VtZW50LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0fSBlbHNlIGlmIChwYXJhbWV0ZXI/LmRlZmF1bHRWYWx1ZSkge1xuXHRcdFx0cmF3VmFsdWUgPSBldmFsRXhwcmVzc2lvbihwYXJhbWV0ZXIuZGVmYXVsdFZhbHVlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY2FzdGVkID0gcGFyYW1ldGVyLnR5cGVBbm5vdGF0aW9uXG5cdFx0XHQ/IGNhc3RWYWx1ZShyYXdWYWx1ZSwgcGFyYW1ldGVyLnR5cGVBbm5vdGF0aW9uLm5hbWUpXG5cdFx0XHQ6IGNhc3RWYWx1ZShyYXdWYWx1ZSwgVFlQRV9FTlVNLk1JWEVEKTtcblxuXHRcdG1ldGhvZEVudi5kZWZpbmUocGFyYW1ldGVyLm5hbWUsIGNhc3RlZCk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxDYWxsQXJndW1lbnRzKG5vZGU6IEFTVENhbGxOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55W10ge1xuXHRpZiAobm9kZS5jYWxsZWUgaW5zdGFuY2VvZiBBU1RMYW1iZGFOb2RlKSB7XG5cdFx0Y29uc3QgbGFtYmRhID0gbm9kZS5jYWxsZWU7XG5cdFx0cmV0dXJuIGV2YWxNZXRob2RBcmd1bWVudHMobm9kZSwgbGFtYmRhLnBhcmFtZXRlcnMsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0fVxuXG5cdGlmIChub2RlLmNhbGxlZS50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0cmV0dXJuIG5vZGUuYXJndW1lbnRzLm1hcChhcmd1bWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gY2FzdFZhbHVlKFxuXHRcdFx0XHRldmFsRXhwcmVzc2lvbihhcmd1bWVudCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpLFxuXHRcdFx0XHRhcmd1bWVudC50eXBlXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHR9XG5cblx0bGV0IG1vZHVsZU5hbWU6IHN0cmluZyA9ICd1bmtub3duJztcblx0bGV0IG1ldGhvZE5hbWU6IHN0cmluZyA9ICd1bmtub3duJztcblxuXHRpZiAobm9kZS5jYWxsZWUgaW5zdGFuY2VvZiBBU1RNZW1iZXJOb2RlKSB7XG5cdFx0bW9kdWxlTmFtZSA9IG5vZGUuY2FsbGVlLm9iamVjdC5uYW1lO1xuXHRcdG1ldGhvZE5hbWUgPSBub2RlLmNhbGxlZS5wcm9wZXJ0eTtcblx0fVxuXG5cdHRocm93UnVudGltZUVycm9yKGBVbmtub3duIGZ1bmN0aW9uICR7bW9kdWxlTmFtZX0uJHttZXRob2ROYW1lfWAsIG5vZGUuc3Bhbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsTWV0aG9kQXJndW1lbnRzKGV4cHI6IEFTVENhbGxOb2RlIHwgQVNUTmV3Tm9kZSwgcGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55W10ge1xuXHRjb25zdCBhcmdzID0gW107XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgcGFyYW1ldGVyOiBBU1RQYXJhbWV0ZXJOb2RlIHwgbnVsbCA9IHBhcmFtZXRlcnNbaV0gfHwgbnVsbDtcblx0XHRjb25zdCBhcmd1bWVudCA9IGV4cHIuYXJndW1lbnRzW2ldIHx8IG51bGw7XG5cblx0XHRsZXQgdmFsdWU7XG5cblx0XHRpZiAoYXJndW1lbnQpIHtcblx0XHRcdHZhbHVlID0gZXZhbEV4cHJlc3Npb24oYXJndW1lbnQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHR9IGVsc2UgaWYgKHBhcmFtZXRlcj8uZGVmYXVsdFZhbHVlKSB7XG5cdFx0XHR2YWx1ZSA9IGV2YWxFeHByZXNzaW9uKHBhcmFtZXRlci5kZWZhdWx0VmFsdWUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFtSdW50aW1lRXJyb3JdIE1pc3NpbmcgYXJndW1lbnQgJyR7cGFyYW1ldGVyPy5uYW1lfSdgLCBleHByLnNwYW4pO1xuXHRcdH1cblxuXHRcdGFyZ3MucHVzaCh2YWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4gYXJncy5tYXAoKGFyZ3VtZW50LCBpKSA9PiB7XG5cdFx0Y29uc3QgcGFyYW1ldGVyID0gcGFyYW1ldGVyc1tpXTtcblx0XHRyZXR1cm4gcGFyYW1ldGVyPy50eXBlQW5ub3RhdGlvblxuXHRcdFx0PyBjYXN0VmFsdWUoYXJndW1lbnQsIHBhcmFtZXRlci50eXBlQW5ub3RhdGlvbi5uYW1lKVxuXHRcdFx0OiBjYXN0VmFsdWUoYXJndW1lbnQsIFRZUEVfRU5VTS5NSVhFRCk7XG5cdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbElmKG5vZGU6IEFTVElmTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGNvbnN0IGNvbmRpdGlvbiA9IGNhc3RWYWx1ZShcblx0XHRldmFsRXhwcmVzc2lvbihub2RlLmNvbmRpdGlvbiwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpLFxuXHRcdFRZUEVfRU5VTS5CT09MRUFOXG5cdCk7XG5cblx0Ly8gVEhFTlxuXHRpZiAoY29uZGl0aW9uID09PSB0cnVlKSB7XG5cdFx0cmV0dXJuIGV2YWxCbG9jayhub2RlLnRoZW4uY2hpbGRyZW4sIG9iamVjdFJlZ2lzdHJ5LCBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpLCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHR9XG5cblx0Ly8gRUxTRVxuXHRpZiAobm9kZS5lbHNlKSB7XG5cdFx0aWYgKG5vZGUuZWxzZSBpbnN0YW5jZW9mIEFTVElmTm9kZSkge1xuXHRcdFx0cmV0dXJuIGV2YWxJZihub2RlLmVsc2UsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZhbEJsb2NrKG5vZGUuZWxzZS5jaGlsZHJlbiwgb2JqZWN0UmVnaXN0cnksIG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCksIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxNYXRjaChub2RlOiBBU1RNYXRjaE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRjb25zdCBtYXRjaFZhbHVlOiBhbnkgPSBldmFsRXhwcmVzc2lvbihub2RlLmV4cHJlc3Npb24sIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG5cblx0Zm9yIChjb25zdCBjYXNlTm9kZSBvZiBub2RlLmNhc2VzKSB7XG5cdFx0aWYgKGNhc2VOb2RlLnRlc3QgPT09IG51bGwpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHRlc3RWYWx1ZSA9IGV2YWxFeHByZXNzaW9uKGNhc2VOb2RlLnRlc3QsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblxuXHRcdGlmICh0ZXN0VmFsdWUgPT09IG1hdGNoVmFsdWUpIHtcblx0XHRcdHJldHVybiBldmFsTWF0Y2hDYXNlKGNhc2VOb2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKG5vZGUuZGVmYXVsdENhc2UpIHtcblx0XHRyZXR1cm4gZXZhbE1hdGNoQ2FzZShub2RlLmRlZmF1bHRDYXNlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxNYXRjaENhc2Uobm9kZTogQVNUTWF0Y2hDYXNlTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdHJldHVybiBldmFsQmxvY2sobm9kZS5jaGlsZHJlbiwgb2JqZWN0UmVnaXN0cnksIG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCksIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsRm9yZWFjaChub2RlOiBBU1RGb3JlYWNoTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGxldCBpdGVyYWJsZSA9IGV2YWxFeHByZXNzaW9uKG5vZGUuaXRlcmFibGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblxuXHRpZiAoIShpdGVyYWJsZSBpbnN0YW5jZW9mIEluc3RhbmNlKSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBmb3JlYWNoIGV4cGVjdHMgYW4gb2JqZWN0IGltcGxlbWVudGluZyBJdGVyYWJsZWAsIG5vZGUuaXRlcmFibGUuc3Bhbik7XG5cdH1cblxuXHRjb25zdCBpdGVyYXRvck1ldGhvZCA9IHJlc29sdmVJbnN0YW5jZU1ldGhvZChcblx0XHRpdGVyYWJsZS5fX2NsYXNzRGVmLFxuXHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdCdpdGVyYXRvcidcblx0KTtcblxuXHRpZiAoIWl0ZXJhdG9yTWV0aG9kKSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYE9iamVjdCBkb2VzIG5vdCBpbXBsZW1lbnQgSXRlcmFibGUgKG1pc3NpbmcgaXRlcmF0b3IoKSlgLCBub2RlLml0ZXJhYmxlLnNwYW4pO1xuXHR9XG5cblx0Y29uc3QgaXRlcmF0b3I6IGFueSA9IGV2YWxJbnN0YW5jZUNhbGwoXG5cdFx0KCgpOiBBU1RDYWxsTm9kZSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IEFTVENhbGxOb2RlKG5ldyBBU1RNZW1iZXJOb2RlKG5vZGUuaXRlcmFibGUsICdpdGVyYXRvcicpKTtcblx0XHR9KSgpLFxuXHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdGVudmlyb25tZW50LFxuXHRcdGV2ZW50UGlwZWxpbmUsXG5cdFx0dGhpc1ZhbHVlXG5cdCk7XG5cblx0aWYgKCEoaXRlcmF0b3IgaW5zdGFuY2VvZiBJbnN0YW5jZSkpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgaXRlcmF0b3IoKSBtdXN0IHJldHVybiBhbiBJdGVyYXRvciBvYmplY3RgLCBub2RlLml0ZXJhYmxlLnNwYW4pO1xuXHR9XG5cblx0Y2FsbEl0ZXJhdG9yTWV0aG9kKGl0ZXJhdG9yLCAncmV3aW5kJywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcblxuXHR3aGlsZSAoY2FsbEl0ZXJhdG9yTWV0aG9kKGl0ZXJhdG9yLCAnaGFzTmV4dCcsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSkpIHtcblx0XHRjb25zdCB2YWx1ZSA9IGNhbGxJdGVyYXRvck1ldGhvZChpdGVyYXRvciwgJ2N1cnJlbnQnLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXG5cdFx0Y29uc3QgbG9vcEVudiA9IG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCk7XG5cblx0XHRsb29wRW52LmRlZmluZShub2RlLml0ZXJhdG9yLCB2YWx1ZSk7XG5cblx0XHRjb25zdCByZXN1bHQgPSBldmFsQmxvY2sobm9kZS5ib2R5LCBvYmplY3RSZWdpc3RyeSwgbG9vcEVudiwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRpZiAocmVzdWx0IGluc3RhbmNlb2YgUmV0dXJuVmFsdWUpIHtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXG5cdFx0Y2FsbEl0ZXJhdG9yTWV0aG9kKGl0ZXJhdG9yLCAnbmV4dCcsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGxJdGVyYXRvck1ldGhvZChpdGVyYXRvcjogSW5zdGFuY2UsIG1ldGhvZE5hbWU6IHN0cmluZywgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiBhbnkge1xuXHRyZXR1cm4gY2FsbEluc3RhbmNlTWV0aG9kKFxuXHRcdGl0ZXJhdG9yLFxuXHRcdGl0ZXJhdG9yLmZpbmRlTWV0aG9kTm9kZShtZXRob2ROYW1lKSxcblx0XHRbXSxcblx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRlbnZpcm9ubWVudCxcblx0XHRldmVudFBpcGVsaW5lXG5cdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsVW5hcnkobm9kZTogQVNUVW5hcnlOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0Y29uc3QgdmFsdWU6IGFueSA9IGNhc3RWYWx1ZShldmFsRXhwcmVzc2lvbihub2RlLmFyZ3VtZW50LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSkpO1xuXG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEluc3RhbmNlKSB7XG5cdFx0cmV0dXJuIGNhbGxJbnN0YW5jZU1ldGhvZChcblx0XHRcdHZhbHVlLFxuXHRcdFx0dmFsdWUuZmluZGVNZXRob2ROb2RlKG5vZGUub3BlcmF0b3IpLFxuXHRcdFx0W10sXG5cdFx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRcdGVudmlyb25tZW50LFxuXHRcdFx0ZXZlbnRQaXBlbGluZVxuXHRcdCk7XG5cdH1cblxuXHRzd2l0Y2ggKG5vZGUub3BlcmF0b3IpIHtcblx0XHRjYXNlIEdSQU1NQVIuRVhDTEFNQVRJT05fTUFSSzoge1xuXHRcdFx0cmV0dXJuICF2YWx1ZTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLk1JTlVTOiB7XG5cdFx0XHRyZXR1cm4gLXZhbHVlO1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuUExVUzoge1xuXHRcdFx0cmV0dXJuICt2YWx1ZTtcblx0XHR9XG5cdH1cblxuXG5cdHRocm93UnVudGltZUVycm9yKGBVbnN1cHBvcnRlZCB1bmFyeSBvcGVyYXRvciAke25vZGUub3BlcmF0b3J9YCwgbm9kZS5zcGFuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxWRG9tTm9kZShub2RlOiBBU1RWRG9tTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IFZDaGlsZCB7XG5cdGNvbnN0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG5cblx0Zm9yIChjb25zdCBbbmFtZSwgdmFsdWVdIG9mIG5vZGUucHJvcHMpIHtcblx0XHRwcm9wc1tuYW1lXSA9IGV2YWxFeHByZXNzaW9uKHZhbHVlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdH1cblxuXHRjb25zdCBpc0NvbXBvbmVudDogYm9vbGVhbiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuaGFzKG5vZGUudGFnKTtcblxuXHRjb25zdCBjaGlsZHJlbjogVkNoaWxkW10gPSBbXTtcblx0bGV0IHRleHRCdWZmZXI6IHN0cmluZ1tdID0gW107XG5cblx0Y29uc3QgZmx1c2hUZXh0QnVmZmVyID0gKCkgPT4ge1xuXHRcdGlmICh0ZXh0QnVmZmVyLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjaGlsZHJlbi5wdXNoKHtcblx0XHRcdCAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuXHRcdFx0ICAgICAgICAgICAgICB2YWx1ZTogdGV4dEJ1ZmZlci5qb2luKCcnKSxcblx0XHRcdCAgICAgICAgICAgICAgZG9tOiB1bmRlZmluZWRcblx0XHQgICAgICAgICAgICAgIH0pO1xuXHRcdHRleHRCdWZmZXIgPSBbXTtcblx0fVxuXG5cdGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuXHRcdHN3aXRjaCAodHJ1ZSkge1xuXHRcdFx0Y2FzZSBjaGlsZCBpbnN0YW5jZW9mIEFTVFZEb21UZXh0Tm9kZToge1xuXHRcdFx0XHR0ZXh0QnVmZmVyLnB1c2goY2hpbGQudmFsdWUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGNhc2UgY2hpbGQgaW5zdGFuY2VvZiBBU1RWRG9tRXhwcmVzc2lvbk5vZGU6IHtcblx0XHRcdFx0dGV4dEJ1ZmZlci5wdXNoKGV2YWxFeHByZXNzaW9uKGNoaWxkLmV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0Y2FzZSBjaGlsZCBpbnN0YW5jZW9mIEFTVFZEb21Ob2RlOiB7XG5cdFx0XHRcdGNoaWxkcmVuLnB1c2goZXZhbFZEb21Ob2RlKGNoaWxkLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSkgYXMgVkNoaWxkKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmbHVzaFRleHRCdWZmZXIoKTtcblx0fVxuXG5cdGZsdXNoVGV4dEJ1ZmZlcigpO1xuXG5cdGlmIChpc0NvbXBvbmVudCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnY29tcG9uZW50Jyxcblx0XHRcdGNsYXNzTmFtZTogbm9kZS50YWcsXG5cdFx0XHRwcm9wczogey4uLnByb3BzLCBjaGlsZHJlbn0sXG5cdFx0XHRzdWJUcmVlOiB1bmRlZmluZWQsXG5cdFx0XHRpbnN0YW5jZTogdW5kZWZpbmVkLFxuXHRcdFx0ZG9tOiB1bmRlZmluZWRcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnZWxlbWVudCcsXG5cdFx0dGFnOiBub2RlLnRhZyxcblx0XHRwcm9wcyxcblx0XHRjaGlsZHJlbixcblx0XHRkb206IHVuZGVmaW5lZFxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbFJldHVybihibG9ja05vZGVzOiBBU1ROb2RlW10sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwsIHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHR0cnkge1xuXHRcdHJldHVybiBldmFsQmxvY2soYmxvY2tOb2Rlcywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUsIHJldHVyblR5cGUpO1xuXHR9IGNhdGNoIChleGVjdXRpb25TdG9wKSB7XG5cdFx0aWYgKGV4ZWN1dGlvblN0b3AgaW5zdGFuY2VvZiBFeGVjdXRpb25TdG9wKSB7XG5cdFx0XHRyZXR1cm4gY2FzdFZhbHVlKGV4ZWN1dGlvblN0b3AucmV0dXJuVmFsdWUudmFsdWUsIGV4ZWN1dGlvblN0b3AucmV0dXJuVHlwZT8ubmFtZSk7XG5cdFx0fVxuXHRcdHRocm93IGV4ZWN1dGlvblN0b3A7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxCbG9jayhibG9ja05vZGVzOiBBU1ROb2RlW10sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwsIHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRmb3IgKGNvbnN0IGJsb2NrTm9kZSBvZiBibG9ja05vZGVzKSB7XG5cdFx0Y29uc3QgcmV0dXJuVmFsdWU6IGFueSA9IGV2YWxOb2RlKGJsb2NrTm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdGlmIChyZXR1cm5WYWx1ZSBpbnN0YW5jZW9mIFJldHVyblZhbHVlKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXhlY3V0aW9uU3RvcChyZXR1cm5WYWx1ZSwgcmV0dXJuVHlwZSk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEFubm90YXRpb25WYWx1ZShub2RlOiBBU1ROb2RlKTogYW55IHtcblx0c3dpdGNoIChub2RlLnR5cGUpIHtcblx0XHRjYXNlIEFTVE5vZGVUeXBlLlNUUklORzpcblx0XHRjYXNlIEFTVE5vZGVUeXBlLk5VTUJFUjpcblx0XHRjYXNlIEFTVE5vZGVUeXBlLkJPT0xFQU46XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5JREVOVElGSUVSOiB7XG5cdFx0XHRyZXR1cm4gY2FzdFZhbHVlKG5vZGUudmFsdWUpO1xuXHRcdH1cblxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuQVJSQVkgOiB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEFycmF5Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gbm9kZS5lbGVtZW50cy5tYXAoY2hpbGQgPT4gZXZhbEFubm90YXRpb25WYWx1ZShjaGlsZCkpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgYW5ub3RhdGlvbiBwcm9wZXJ0eSB2YWx1ZTogJHtub2RlLnR5cGV9YCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cblx0XHRkZWZhdWx0OiB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5zdXBwb3J0ZWQgYW5ub3RhdGlvbiBleHByZXNzaW9uOiAke25vZGUudHlwZX1gLCBub2RlLnNwYW4pO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEFubm90YXRpb25Qcm9wZXJ0aWVzKGFubm90YXRpb246IEFTVEFubm90YXRpb25Ob2RlKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG5cdGNvbnN0IHByb3BlcnRpZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuXHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlTm9kZV0gb2YgYW5ub3RhdGlvbi5wcm9wZXJ0aWVzKSB7XG5cdFx0cHJvcGVydGllc1trZXldID0gZXZhbEFubm90YXRpb25WYWx1ZSh2YWx1ZU5vZGUpO1xuXHR9XG5cblx0cmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxsSW5zdGFuY2VNZXRob2QoaW5zdGFuY2U6IEluc3RhbmNlLCBtZXRob2ROb2RlOiBBU1RNZXRob2ROb2RlLCBhcmdzOiBhbnlbXSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiBhbnkge1xuXHRjb25zdCBtZXRob2RFbnYgPSBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpO1xuXG5cdG1ldGhvZEVudi5kZWZpbmUoR1JBTU1BUi5USElTLCBpbnN0YW5jZSk7XG5cblx0aWYgKGluc3RhbmNlLl9fbmF0aXZlSW5zdGFuY2UgJiYgbWV0aG9kTm9kZS5uYW1lIGluIGluc3RhbmNlLl9fbmF0aXZlSW5zdGFuY2UpIHtcblx0XHRjb25zdCByYXdBcmdzID0gYXJncy5tYXAoZnJvbUx5cmFWYWx1ZSk7XG5cdFx0Y29uc3QgcmVzdWx0ID0gaW5zdGFuY2UuX19uYXRpdmVJbnN0YW5jZVttZXRob2ROb2RlLm5hbWVdKC4uLnJhd0FyZ3MpO1xuXG5cdFx0aWYgKHJlc3VsdCBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdHJldHVybiB3cmFwTmF0aXZlSW5zdGFuY2UocmVzdWx0LCBvYmplY3RSZWdpc3RyeSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2YWxSZXR1cm4oXG5cdFx0XHRbcmV0dXJuVmFsdWUocmVzdWx0KV0sXG5cdFx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRcdG1ldGhvZEVudixcblx0XHRcdGV2ZW50UGlwZWxpbmUsXG5cdFx0XHRpbnN0YW5jZSxcblx0XHRcdG1ldGhvZE5vZGUucmV0dXJuVHlwZVxuXHRcdCk7XG5cdH1cblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IG1ldGhvZE5vZGUucGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHBhcmFtZXRlcjogQVNUUGFyYW1ldGVyTm9kZSB8IG51bGwgPSBtZXRob2ROb2RlLnBhcmFtZXRlcnNbaV0gfHwgbnVsbDtcblx0XHRjb25zdCBhcmd1bWVudDogYW55ID0gYXJnc1tpXSB8fCBudWxsO1xuXG5cdFx0aWYgKCFwYXJhbWV0ZXIpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKCdNZXRob2QgcGFyYW1ldGVyIGlzIG51bGwuJyk7XG5cdFx0fVxuXG5cdFx0bGV0IHZhbHVlO1xuXHRcdGlmICghYXJndW1lbnQpIHtcblx0XHRcdHZhbHVlID0gcGFyYW1ldGVyLmRlZmF1bHRWYWx1ZVxuXHRcdFx0XHQ/IGV2YWxOb2RlKHBhcmFtZXRlci5kZWZhdWx0VmFsdWUsIG9iamVjdFJlZ2lzdHJ5LCBtZXRob2RFbnYsIGV2ZW50UGlwZWxpbmUsIGluc3RhbmNlKVxuXHRcdFx0XHQ6IG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhbHVlID0gYXJnc1tpXTtcblx0XHR9XG5cblx0XHRtZXRob2RFbnYuZGVmaW5lKHBhcmFtZXRlci5uYW1lLCB2YWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4gZXZhbFJldHVybihtZXRob2ROb2RlLmNoaWxkcmVuLCBvYmplY3RSZWdpc3RyeSwgbWV0aG9kRW52LCBldmVudFBpcGVsaW5lLCBpbnN0YW5jZSwgbWV0aG9kTm9kZS5yZXR1cm5UeXBlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9Cb3hJZk5lZWRlZCh2YWx1ZTogYW55LCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpOiBJbnN0YW5jZSB7XG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEluc3RhbmNlKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gVFlQRV9FTlVNLk5VTUJFUikge1xuXHRcdHJldHVybiBjcmVhdGVCb3hlZEluc3RhbmNlKEF1dG9ib3hlZFR5cGVzLmdldENsYXNzTmFtZShUWVBFX0VOVU0uTlVNQkVSKSwgdmFsdWUsIG9iamVjdFJlZ2lzdHJ5KTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09IFRZUEVfRU5VTS5TVFJJTkcpIHtcblx0XHRyZXR1cm4gY3JlYXRlQm94ZWRJbnN0YW5jZShBdXRvYm94ZWRUeXBlcy5nZXRDbGFzc05hbWUoVFlQRV9FTlVNLlNUUklORyksIHZhbHVlLCBvYmplY3RSZWdpc3RyeSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSBUWVBFX0VOVU0uQk9PTEVBTikge1xuXHRcdHJldHVybiBjcmVhdGVCb3hlZEluc3RhbmNlKEF1dG9ib3hlZFR5cGVzLmdldENsYXNzTmFtZShUWVBFX0VOVU0uQk9PTEVBTiksIHZhbHVlLCBvYmplY3RSZWdpc3RyeSk7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCb3hlZEluc3RhbmNlKGNsYXNzTmFtZTogc3RyaW5nLCBwcmltaXRpdmVWYWx1ZTogYW55LCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpOiBJbnN0YW5jZSB7XG5cdGNvbnN0IGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24gPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChjbGFzc05hbWUpO1xuXHRjb25zdCBpbnN0YW5jZTogSW5zdGFuY2UgPSBjbGFzc0RlZi5jb25zdHJ1Y3RFbXB0eUluc3RhbmNlKCk7XG5cblx0aW5zdGFuY2UuX19uYXRpdmVJbnN0YW5jZSA9IG5ldyBjbGFzc0RlZi5uYXRpdmVJbnN0YW5jZShmcm9tTHlyYVZhbHVlKHByaW1pdGl2ZVZhbHVlKSk7XG5cblx0cmV0dXJuIGluc3RhbmNlO1xufVxuIiwKICAgICJjb25zdCBMeXJhRXZlbnRzID0ge1xuXHRMWVJBX0lOU1RBTkNFX0RJUlRZX1NUQVRFOiAnbHlyYTppbnN0YW5jZV9kaXJ0eV9zdGF0ZScsXG5cdExZUkFfSU5TVEFOQ0VfQ0xFQU5fU1RBVEU6ICdseXJhOmluc3RhbmNlX2NsZWFuX3N0YXRlJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTHlyYUV2ZW50cztcbiIsCiAgICAiaW1wb3J0IHtHUkFNTUFSfSBmcm9tIFwiLi4vZ3JhbW1hclwiO1xuaW1wb3J0IHtcblx0QVNUQ2xhc3NOb2RlLFxuXHRBU1RGaWVsZE5vZGUsXG5cdEFTVEludGVyZmFjZU5vZGUsXG5cdEFTVE1ldGhvZE5vZGUsXG5cdEFTVE5ld05vZGUsXG5cdEFTVE5vZGUsXG5cdEFTVFBhcmFtZXRlck5vZGUsXG5cdEFTVFR5cGVOb2RlXG59IGZyb20gXCIuLi9hc3RcIjtcbmltcG9ydCB7dGhyb3dSdW50aW1lRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcbmltcG9ydCB0eXBlIHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB7ZXZhbEV4cHJlc3Npb24sIGV2YWxNZXRob2RBcmd1bWVudHMsIGV2YWxOb2RlfSBmcm9tIFwiLi9pbnRlcnByZXRlcl9ydW50aW1lXCI7XG5pbXBvcnQge2Nhc3RWYWx1ZSwgZnJvbUx5cmFWYWx1ZSwgTHlyYU5hdGl2ZU9iamVjdH0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfY29udmVyc2lvblwiO1xuaW1wb3J0IHR5cGUge0V2ZW50UGlwZWxpbmV9IGZyb20gXCIuLi9ldmVudC9waXBlbGluZVwiO1xuaW1wb3J0IEx5cmFFdmVudHMgZnJvbSBcIi4uL2V2ZW50L2V2ZW50c1wiO1xuXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQge1xuXHRwYXJlbnQ6IEVudmlyb25tZW50IHwgbnVsbDtcblx0dmFsdWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH07XG5cblx0Y29uc3RydWN0b3IocGFyZW50OiBFbnZpcm9ubWVudCB8IG51bGwgPSBudWxsKSB7XG5cdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cdFx0dGhpcy52YWx1ZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHR9XG5cblx0ZGVmaW5lKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMudmFsdWVzW25hbWVdID0gdmFsdWU7XG5cdH1cblxuXHRnZXQobmFtZTogc3RyaW5nKTogYW55IHtcblx0XHRpZiAobmFtZSBpbiB0aGlzLnZhbHVlcykge1xuXHRcdFx0cmV0dXJuIHRoaXMudmFsdWVzW25hbWVdO1xuXHRcdH1cblx0XHRpZiAodGhpcy5wYXJlbnQpIHtcblx0XHRcdHJldHVybiB0aGlzLnBhcmVudC5nZXQobmFtZSk7XG5cdFx0fVxuXHRcdHRocm93UnVudGltZUVycm9yKGBVbmRlZmluZWQgdmFyaWFibGUgJHtuYW1lfWApO1xuXHR9XG5cblx0c2V0KG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmIChuYW1lIGluIHRoaXMudmFsdWVzKSB7XG5cdFx0XHR0aGlzLnZhbHVlc1tuYW1lXSA9IHZhbHVlO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAodGhpcy5wYXJlbnQpIHtcblx0XHRcdHRoaXMucGFyZW50LnNldChuYW1lLCB2YWx1ZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRocm93UnVudGltZUVycm9yKGBVbmRlZmluZWQgdmFyaWFibGUgJHtuYW1lfWApO1xuXHR9XG5cblx0aGFzKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlc1tuYW1lXSB8fCAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuaGFzKG5hbWUpKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgSW5zdGFuY2Uge1xuXHRwdWJsaWMgcmVhZG9ubHkgaWQ6IHN0cmluZztcblx0X19jbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uO1xuXHRfX2ZpZWxkc0luaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XG5cdF9faW5zdGFuY2VGaWVsZHM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfTtcblx0X19zdGF0aWNGaWVsZHM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfTtcblx0X19uYXRpdmVJbnN0YW5jZTogYW55IHwgbnVsbCA9IG51bGw7XG5cdF9faXNEaXJ0eTogYm9vbGVhbiA9IGZhbHNlXG5cblx0Y29uc3RydWN0b3IoY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbikge1xuXHRcdHRoaXMuX19jbGFzc0RlZiA9IGNsYXNzRGVmO1xuXHRcdHRoaXMuX19pbnN0YW5jZUZpZWxkcyA9IHt9O1xuXHRcdHRoaXMuX19zdGF0aWNGaWVsZHMgPSB7fTtcblx0XHR0aGlzLl9fbmF0aXZlSW5zdGFuY2UgPSBudWxsO1xuXG5cdFx0dGhpcy5pZCA9IEluc3RhbmNlLmdlbmVyYXRlSW5zdGFuY2VVVUlEKCk7XG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyBnZW5lcmF0ZUluc3RhbmNlVVVJRCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBzZWxmLmNyeXB0by5yYW5kb21VVUlEKCk7XG5cdH1cblxuXHRwdWJsaWMgbWFya0RpcnR5KGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiB2b2lkIHtcblx0XHR0aGlzLl9faXNEaXJ0eSA9IHRydWU7XG5cblx0XHRldmVudFBpcGVsaW5lLmVtaXQoTHlyYUV2ZW50cy5MWVJBX0lOU1RBTkNFX0RJUlRZX1NUQVRFLCB7aW5zdGFuY2U6IHRoaXN9KTtcblx0fVxuXG5cdHB1YmxpYyBtYXJrQ2xlYW4oZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IHZvaWQge1xuXHRcdHRoaXMuX19pc0RpcnR5ID0gZmFsc2U7XG5cblx0XHRldmVudFBpcGVsaW5lLmVtaXQoTHlyYUV2ZW50cy5MWVJBX0lOU1RBTkNFX0NMRUFOX1NUQVRFLCB7aW5zdGFuY2U6IHRoaXN9KTtcblx0fVxuXG5cdGZpbmRlTWV0aG9kTm9kZShuYW1lOiBzdHJpbmcpOiBBU1RNZXRob2ROb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5fX2NsYXNzRGVmLmZpbmRNZXRob2ROb2RlKG5hbWUpO1xuXHR9XG5cblx0aGFzUHVibGljUHJvcGVydHkobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiB0aGlzLl9fY2xhc3NEZWYuZmluZEluc3RhbmNlRmllbGREZWZpbml0aW9uKG5hbWUpLm1vZGlmaWVycy5wdWJsaWM7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHNldFB1YmxpY1Byb3BlcnR5KG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSwgZXhwZWN0ZWQ6IGFueSA9IG51bGwpOiB2b2lkIHtcblx0XHRsZXQgZmllbGREZWZpbml0aW9uOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbiA9IHRoaXMuX19jbGFzc0RlZi5maW5kSW5zdGFuY2VGaWVsZERlZmluaXRpb24obmFtZSk7XG5cblx0XHRpZiAoZmllbGREZWZpbml0aW9uLm1vZGlmaWVycy5wdWJsaWMpIHtcblx0XHRcdHRoaXMuX19pbnN0YW5jZUZpZWxkc1tuYW1lXSA9IGNhc3RWYWx1ZSh2YWx1ZSwgZXhwZWN0ZWQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRocm93UnVudGltZUVycm9yKGBGaWVsZCAke25hbWV9IGlzIG5vdCBwdWJsaWMuYCk7XG5cdH1cblxuXHRpbml0aWFsaXplSW5zdGFuY2VGaWVsZHMob2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiB2b2lkIHtcblx0XHR0aGlzLl9fY2xhc3NEZWYuaW5pdGlhbGl6ZUluc3RhbmNlRmllbGRzKHRoaXMsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vZGlmaWVycyB7XG5cdG9wZW46IGJvb2xlYW4gPSBmYWxzZTtcblx0cHVibGljOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGU6IGJvb2xlYW4gPSBmYWxzZTtcblx0c3RhdGljOiBib29sZWFuID0gZmFsc2U7XG5cdHJlYWRvbmx5OiBib29sZWFuID0gZmFsc2U7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7e319IGF0dHJpYnV0ZXNcblx0ICovXG5cdGNvbnN0cnVjdG9yKGF0dHJpYnV0ZXM6IHsgW2luZGV4OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fSkge1xuXHRcdGZvciAobGV0IGF0dHJpYnV0ZSBvZiBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKSkge1xuXHRcdFx0aWYgKHRoaXMuaGFzT3duUHJvcGVydHkoYXR0cmlidXRlKSkge1xuXHRcdFx0XHRjb25zdCBtb2RpZmllcnM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHRoaXM7XG5cdFx0XHRcdG1vZGlmaWVyc1thdHRyaWJ1dGVdID0gYXR0cmlidXRlc1thdHRyaWJ1dGVdO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgY2xhc3MgU3VwZXJDbGFzcyB7XG5cdHR5cGU6IHN0cmluZztcblx0bmFtZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBFeGVjdXRpb25TdG9wIGV4dGVuZHMgRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgcmV0dXJuVmFsdWU6IFJldHVyblZhbHVlLFxuXHQgICAgICAgICAgICBwdWJsaWMgcmVhZG9ubHkgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsKSB7XG5cdFx0c3VwZXIoJ0V4ZWN1dGlvbiBzdG9wcGVuZCB3aXRoIHJldHVybi4nKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgUmV0dXJuVmFsdWUge1xuXHR2YWx1ZTogYW55O1xuXG5cdGNvbnN0cnVjdG9yKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIENsYXNzRmllbGREZWZpbml0aW9uIHtcblx0bmFtZTogc3RyaW5nO1xuXHR0eXBlOiBzdHJpbmcgfCBudWxsO1xuXHRtb2RpZmllcnM6IE1vZGlmaWVycztcblx0aW5pdGlhbGl6ZXI6IEFTVE5vZGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGU6IHN0cmluZyB8IG51bGwsIG1vZGlmaWVyczogTW9kaWZpZXJzLCBpbml0aWFsaXplcjogQVNUTm9kZSB8IG51bGwgPSBudWxsKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuXHRcdHRoaXMuaW5pdGlhbGl6ZXIgPSBpbml0aWFsaXplcjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xhc3NNZXRob2REZWZpbml0aW9uIHtcblx0bmFtZTogc3RyaW5nO1xuXHRwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW107XG5cdHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbDtcblx0bW9kaWZpZXJzOiBNb2RpZmllcnM7XG5cdGNoaWxkcmVuOiBBU1ROb2RlW107XG5cdGlzQ29uc3RydWN0b3I6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sIHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbCwgbW9kaWZpZXJzOiBNb2RpZmllcnMsIGNoaWxkcmVuOiBBU1ROb2RlW10pIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG5cdFx0dGhpcy5yZXR1cm5UeXBlID0gcmV0dXJuVHlwZTtcblx0XHR0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcblx0XHR0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG5cdFx0dGhpcy5pc0NvbnN0cnVjdG9yID0gbmFtZSA9PT0gR1JBTU1BUi5DT05TVFJVQ1RPUjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xhc3NEZWZpbml0aW9uIHtcblx0bm9kZTogQVNUQ2xhc3NOb2RlO1xuXHRuYW1lOiBzdHJpbmc7XG5cdHN1cGVyQ2xhc3M6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRpbnN0YW5jZUZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXTtcblx0aW5zdGFuY2VNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH07XG5cdHN0YXRpY0ZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXTtcblx0c3RhdGljTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9O1xuXHRjb25zdHJ1Y3Rvck1ldGhvZDogQ2xhc3NNZXRob2REZWZpbml0aW9uIHwgbnVsbCA9IG51bGw7XG5cdG5hdGl2ZUluc3RhbmNlOiBhbnkgPSBudWxsO1xuXHRpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRjbGFzc05vZGU6IEFTVENsYXNzTm9kZSxcblx0XHRzdXBlckNsYXNzOiBzdHJpbmcgfCBudWxsLFxuXHRcdG5hbWU6IHN0cmluZyxcblx0XHRpbnN0YW5jZUZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXSxcblx0XHRpbnN0YW5jZU1ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfSxcblx0XHRzdGF0aWNGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW10sXG5cdFx0c3RhdGljTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9LFxuXHRcdGNvbnN0cnVjdG9yTWV0aG9kOiBDbGFzc01ldGhvZERlZmluaXRpb24gfCBudWxsID0gbnVsbFxuXHQpIHtcblx0XHR0aGlzLm5vZGUgPSBjbGFzc05vZGU7XG5cdFx0dGhpcy5zdXBlckNsYXNzID0gc3VwZXJDbGFzcztcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuaW5zdGFuY2VGaWVsZHMgPSBpbnN0YW5jZUZpZWxkcztcblx0XHR0aGlzLmluc3RhbmNlTWV0aG9kcyA9IGluc3RhbmNlTWV0aG9kcztcblx0XHR0aGlzLnN0YXRpY0ZpZWxkcyA9IHN0YXRpY0ZpZWxkcztcblx0XHR0aGlzLnN0YXRpY01ldGhvZHMgPSBzdGF0aWNNZXRob2RzO1xuXHRcdHRoaXMuY29uc3RydWN0b3JNZXRob2QgPSBjb25zdHJ1Y3Rvck1ldGhvZDtcblx0XHR0aGlzLmlzT3BlbiA9IGNsYXNzTm9kZS5tb2RpZmllcnMub3Blbjtcblx0fVxuXG5cdHN0YXRpYyBmcm9tQVNUKG5vZGU6IEFTVENsYXNzTm9kZSk6IENsYXNzRGVmaW5pdGlvbiB7XG5cdFx0Y29uc3QgaW5zdGFuY2VGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW10gPSBbXTtcblx0XHRjb25zdCBpbnN0YW5jZU1ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfSA9IHt9O1xuXHRcdGNvbnN0IHN0YXRpY0ZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXSA9IFtdO1xuXHRcdGNvbnN0IHN0YXRpY01ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfSA9IHt9O1xuXHRcdGxldCBjb25zdHJ1Y3Rvck1ldGhvZDogQ2xhc3NNZXRob2REZWZpbml0aW9uIHwgbnVsbCA9IG51bGw7XG5cblx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChjaGlsZCBpbnN0YW5jZW9mIEFTVEZpZWxkTm9kZSkge1xuXHRcdFx0XHRjb25zdCBmaWVsZCA9IG5ldyBDbGFzc0ZpZWxkRGVmaW5pdGlvbihcblx0XHRcdFx0XHRjaGlsZC5uYW1lLFxuXHRcdFx0XHRcdGNoaWxkLmZpZWxkVHlwZVxuXHRcdFx0XHRcdFx0PyBjaGlsZC5maWVsZFR5cGUubmFtZVxuXHRcdFx0XHRcdFx0OiBudWxsLFxuXHRcdFx0XHRcdGNoaWxkLm1vZGlmaWVycyxcblx0XHRcdFx0XHRjaGlsZC5pbml0XG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0aWYgKGZpZWxkLm1vZGlmaWVycy5zdGF0aWMpIHtcblx0XHRcdFx0XHRzdGF0aWNGaWVsZHMucHVzaChmaWVsZCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aW5zdGFuY2VGaWVsZHMucHVzaChmaWVsZCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoY2hpbGQgaW5zdGFuY2VvZiBBU1RNZXRob2ROb2RlKSB7XG5cdFx0XHRcdGNvbnN0IG1ldGhvZCA9IG5ldyBDbGFzc01ldGhvZERlZmluaXRpb24oXG5cdFx0XHRcdFx0Y2hpbGQubmFtZSxcblx0XHRcdFx0XHRjaGlsZC5wYXJhbWV0ZXJzLFxuXHRcdFx0XHRcdGNoaWxkLnJldHVyblR5cGUsXG5cdFx0XHRcdFx0Y2hpbGQubW9kaWZpZXJzLFxuXHRcdFx0XHRcdGNoaWxkLmNoaWxkcmVuXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGlmIChtZXRob2QuaXNDb25zdHJ1Y3Rvcikge1xuXHRcdFx0XHRcdGNvbnN0cnVjdG9yTWV0aG9kID0gbWV0aG9kO1xuXHRcdFx0XHR9IGVsc2UgaWYgKG1ldGhvZC5tb2RpZmllcnMuc3RhdGljKSB7XG5cdFx0XHRcdFx0c3RhdGljTWV0aG9kc1ttZXRob2QubmFtZV0gPSBtZXRob2Q7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aW5zdGFuY2VNZXRob2RzW21ldGhvZC5uYW1lXSA9IG1ldGhvZDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVuaGFuZGxlZCBub2RlICR7Y2hpbGQudHlwZX0uYCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBDbGFzc0RlZmluaXRpb24oXG5cdFx0XHRub2RlLFxuXHRcdFx0bm9kZS5zdXBlckNsYXNzPy5uYW1lIHx8IG51bGwsXG5cdFx0XHRub2RlLm5hbWUsXG5cdFx0XHRpbnN0YW5jZUZpZWxkcyxcblx0XHRcdGluc3RhbmNlTWV0aG9kcyxcblx0XHRcdHN0YXRpY0ZpZWxkcyxcblx0XHRcdHN0YXRpY01ldGhvZHMsXG5cdFx0XHRjb25zdHJ1Y3Rvck1ldGhvZFxuXHRcdCk7XG5cdH1cblxuXHRmaW5kTWV0aG9kTm9kZShuYW1lOiBzdHJpbmcpOiBBU1RNZXRob2ROb2RlIHtcblx0XHRjb25zdCBub2RlID0gdGhpcy5ub2RlXG5cdFx0ICAgICAgICAgICAgICAgICAuY2hpbGRyZW5cblx0XHQgICAgICAgICAgICAgICAgIC5maW5kKG5vZGUgPT4gbm9kZS5uYW1lID09PSBuYW1lKTtcblxuXHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUTWV0aG9kTm9kZSkge1xuXHRcdFx0cmV0dXJuIG5vZGU7XG5cdFx0fVxuXG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYE1ldGhvZCAke25hbWV9IG5vdCBmb3VuZCBpbiBjbGFzcyAke3RoaXMubmFtZX0uYCk7XG5cdH1cblxuXHRmaW5kSW5zdGFuY2VGaWVsZERlZmluaXRpb24obmFtZTogc3RyaW5nKTogQ2xhc3NGaWVsZERlZmluaXRpb24ge1xuXHRcdGNvbnN0IGZpZWxkRGVmaW5pdGlvbjogQ2xhc3NGaWVsZERlZmluaXRpb24gfCB1bmRlZmluZWQgPSB0aGlzLmluc3RhbmNlRmllbGRzXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmluZCgoZmllbGQ6IENsYXNzRmllbGREZWZpbml0aW9uKTogYm9vbGVhbiA9PiBmaWVsZC5uYW1lID09PSBuYW1lKTtcblxuXHRcdGlmIChmaWVsZERlZmluaXRpb24gaW5zdGFuY2VvZiBDbGFzc0ZpZWxkRGVmaW5pdGlvbikge1xuXHRcdFx0cmV0dXJuIGZpZWxkRGVmaW5pdGlvbjtcblx0XHR9XG5cblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgRmllbGQgJHtuYW1lfSBub3QgZm91bmQgaW4gY2xhc3MgJHt0aGlzLm5hbWV9LmApO1xuXHR9XG5cblx0Y29uc3RydWN0RW1wdHlJbnN0YW5jZSgpOiBJbnN0YW5jZSB7XG5cdFx0cmV0dXJuIG5ldyBJbnN0YW5jZSh0aGlzKTtcblx0fVxuXG5cdGNvbnN0cnVjdE5hdGl2ZUluc3RhbmNlKGFyZ3M6IGFueVtdID0gW10pOiBJbnN0YW5jZSB7XG5cdFx0Y29uc3QgaW5zdGFuY2U6IEluc3RhbmNlID0gdGhpcy5jb25zdHJ1Y3RFbXB0eUluc3RhbmNlKCk7XG5cdFx0aW5zdGFuY2UuX19uYXRpdmVJbnN0YW5jZSA9IG5ldyB0aGlzLm5hdGl2ZUluc3RhbmNlKC4uLmFyZ3MpO1xuXHRcdHJldHVybiBpbnN0YW5jZTtcblx0fVxuXG5cdGNvbnN0cnVjdE5ld0luc3RhbmNlV2l0aG91dEFyZ3VtZW50cyhvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IEluc3RhbmNlIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3ROZXdJbnN0YW5jZShbXSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcblx0fVxuXG5cdGNvbnN0cnVjdE5ld0luc3RhbmNlKGFyZ3M6IEFTVE5vZGVbXSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiBJbnN0YW5jZSB7XG5cdFx0Y29uc3QgbmV3Tm9kZSA9IG5ldyBBU1ROZXdOb2RlKGFyZ3MsIG5ldyBBU1RUeXBlTm9kZShBU1RUeXBlTm9kZS5LSU5EX1NJTVBMRSwgdGhpcy5uYW1lKSk7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0SW5zdGFuY2VCeU5ld05vZGUobmV3Tm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcblx0fVxuXG5cdGNvbnN0cnVjdEluc3RhbmNlQnlOZXdOb2RlKGV4cHI6IEFTVE5ld05vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogSW5zdGFuY2Uge1xuXHRcdGNvbnN0IGluc3RhbmNlOiBJbnN0YW5jZSA9IHRoaXMuY29uc3RydWN0RW1wdHlJbnN0YW5jZSgpO1xuXG5cdFx0b2JqZWN0UmVnaXN0cnkuaW5zdGFuY2VzLnJlZ2lzdGVyKGluc3RhbmNlKTtcblxuXHRcdGluc3RhbmNlLmluaXRpYWxpemVJbnN0YW5jZUZpZWxkcyhvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXG5cdFx0aWYgKCF0aGlzLmNvbnN0cnVjdG9yTWV0aG9kKSB7XG5cdFx0XHRyZXR1cm4gaW5zdGFuY2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY29uc3RydWN0b3I6IENsYXNzTWV0aG9kRGVmaW5pdGlvbiA9IHRoaXMuY29uc3RydWN0b3JNZXRob2Q7XG5cdFx0Y29uc3QgY29uc3RydWN0b3JFbnYgPSBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpO1xuXG5cdFx0Y29uc3QgY29uc3RydWN0b3JBcmdzID0gZXZhbE1ldGhvZEFyZ3VtZW50cyhcblx0XHRcdGV4cHIsXG5cdFx0XHRjb25zdHJ1Y3Rvci5wYXJhbWV0ZXJzLFxuXHRcdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0XHRlbnZpcm9ubWVudCxcblx0XHRcdGV2ZW50UGlwZWxpbmUsXG5cdFx0XHRpbnN0YW5jZVxuXHRcdCk7XG5cblx0XHRjb25zdHJ1Y3RvckVudi5kZWZpbmUoR1JBTU1BUi5USElTLCBpbnN0YW5jZSk7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNvbnN0cnVjdG9yQXJncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgcGFyYW1ldGVyOiBBU1RQYXJhbWV0ZXJOb2RlIHwgdW5kZWZpbmVkID0gY29uc3RydWN0b3IucGFyYW1ldGVyc1tpXTtcblx0XHRcdGlmIChwYXJhbWV0ZXIpIHtcblx0XHRcdFx0Y29uc3RydWN0b3JFbnYuZGVmaW5lKHBhcmFtZXRlci5uYW1lLCBjb25zdHJ1Y3RvckFyZ3NbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgY2hpbGQgb2YgY29uc3RydWN0b3IuY2hpbGRyZW4pIHtcblx0XHRcdGV2YWxOb2RlKGNoaWxkLCBvYmplY3RSZWdpc3RyeSwgY29uc3RydWN0b3JFbnYsIGV2ZW50UGlwZWxpbmUsIGluc3RhbmNlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaW5zdGFuY2U7XG5cdH1cblxuXHRjb25zdHJ1Y3ROYXRpdmVJbnN0YW5jZUJ5TmV3Tm9kZShleHByOiBBU1ROZXdOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IEluc3RhbmNlIHtcblx0XHRjb25zdCBpbnN0YW5jZTogSW5zdGFuY2UgPSB0aGlzLmNvbnN0cnVjdEVtcHR5SW5zdGFuY2UoKTtcblxuXHRcdG9iamVjdFJlZ2lzdHJ5Lmluc3RhbmNlcy5yZWdpc3RlcihpbnN0YW5jZSk7XG5cblx0XHRjb25zdCBjb25zdHJ1Y3RvcjogQ2xhc3NNZXRob2REZWZpbml0aW9uIHwgbnVsbCA9IHRoaXMuY29uc3RydWN0b3JNZXRob2Q7XG5cdFx0Y29uc3QgY29uc3RydWN0b3JFbnY6IEVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblxuXHRcdGNvbnN0IGNvbnN0cnVjdG9yQXJnczogYW55W10gPSBldmFsTWV0aG9kQXJndW1lbnRzKFxuXHRcdFx0ZXhwcixcblx0XHRcdGNvbnN0cnVjdG9yXG5cdFx0XHRcdD8gY29uc3RydWN0b3IucGFyYW1ldGVyc1xuXHRcdFx0XHQ6IFtdLFxuXHRcdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0XHRlbnZpcm9ubWVudCxcblx0XHRcdGV2ZW50UGlwZWxpbmUsXG5cdFx0XHRpbnN0YW5jZVxuXHRcdCk7XG5cblx0XHRjb25zdHJ1Y3RvckVudi5kZWZpbmUoR1JBTU1BUi5USElTLCBpbnN0YW5jZSk7XG5cblx0XHRpZiAodGhpcy5uYXRpdmVJbnN0YW5jZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoJ0NsYXNzIGhhcyBubyBuYXRpdmUgaW5zdGFuY2UnKTtcblx0XHR9XG5cblx0XHRjb25zdCBuYXRpdmVJbnN0YW5jZSA9IG5ldyB0aGlzLm5hdGl2ZUluc3RhbmNlKC4uLmNvbnN0cnVjdG9yQXJncy5tYXAoZnJvbUx5cmFWYWx1ZSkpO1xuXHRcdGlmIChuYXRpdmVJbnN0YW5jZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdGluc3RhbmNlLl9fbmF0aXZlSW5zdGFuY2UgPSBuYXRpdmVJbnN0YW5jZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaW5zdGFuY2U7XG5cdH1cblxuXHRpbml0aWFsaXplSW5zdGFuY2VGaWVsZHMoaW5zdGFuY2U6IEluc3RhbmNlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IHZvaWQge1xuXHRcdGlmIChpbnN0YW5jZS5fX2ZpZWxkc0luaXRpYWxpemVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0IHJhd1ZhbHVlO1xuXHRcdGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5pbnN0YW5jZUZpZWxkcykge1xuXHRcdFx0cmF3VmFsdWUgPSBmaWVsZC5pbml0aWFsaXplclxuXHRcdFx0XHQ/IGV2YWxFeHByZXNzaW9uKGZpZWxkLmluaXRpYWxpemVyLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpXG5cdFx0XHRcdDogbnVsbDtcblxuXHRcdFx0aW5zdGFuY2UuX19pbnN0YW5jZUZpZWxkc1tmaWVsZC5uYW1lXSA9IGNhc3RWYWx1ZShyYXdWYWx1ZSwgZmllbGQudHlwZSk7XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5zdGF0aWNGaWVsZHMpIHtcblx0XHRcdHJhd1ZhbHVlID0gZmllbGQuaW5pdGlhbGl6ZXJcblx0XHRcdFx0PyBldmFsRXhwcmVzc2lvbihmaWVsZC5pbml0aWFsaXplciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKVxuXHRcdFx0XHQ6IG51bGw7XG5cblx0XHRcdGluc3RhbmNlLl9fc3RhdGljRmllbGRzW2ZpZWxkLm5hbWVdID0gY2FzdFZhbHVlKHJhd1ZhbHVlLCBmaWVsZC50eXBlKTtcblx0XHR9XG5cblx0XHRpbnN0YW5jZS5fX2ZpZWxkc0luaXRpYWxpemVkID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgSW50ZXJmYWNlRGVmaW5pdGlvbiB7XG5cdG5vZGU6IEFTVEludGVyZmFjZU5vZGU7XG5cdG5hbWU6IHN0cmluZztcblx0c3RhdGljRmllbGRzOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbltdO1xuXHRpbnN0YW5jZU1ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRpbnRlcmZhY2VOb2RlOiBBU1RJbnRlcmZhY2VOb2RlLFxuXHRcdG5hbWU6IHN0cmluZyxcblx0XHRzdGF0aWNGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW10sXG5cdFx0aW5zdGFuY2VNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH0sXG5cdCkge1xuXHRcdHRoaXMubm9kZSA9IGludGVyZmFjZU5vZGU7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnN0YXRpY0ZpZWxkcyA9IHN0YXRpY0ZpZWxkcztcblx0XHR0aGlzLmluc3RhbmNlTWV0aG9kcyA9IGluc3RhbmNlTWV0aG9kcztcblx0fVxuXG5cdHN0YXRpYyBmcm9tQVNUKG5vZGU6IEFTVEludGVyZmFjZU5vZGUpOiBJbnRlcmZhY2VEZWZpbml0aW9uIHtcblx0XHRjb25zdCBzdGF0aWNGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW10gPSBbXTtcblx0XHRjb25zdCBpbnN0YW5jZU1ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfSA9IHt9O1xuXG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAoY2hpbGQgaW5zdGFuY2VvZiBBU1RGaWVsZE5vZGUpIHtcblx0XHRcdFx0Y29uc3QgZmllbGQgPSBuZXcgQ2xhc3NGaWVsZERlZmluaXRpb24oXG5cdFx0XHRcdFx0Y2hpbGQubmFtZSxcblx0XHRcdFx0XHRjaGlsZC5maWVsZFR5cGVcblx0XHRcdFx0XHRcdD8gY2hpbGQuZmllbGRUeXBlLm5hbWVcblx0XHRcdFx0XHRcdDogbnVsbCxcblx0XHRcdFx0XHRjaGlsZC5tb2RpZmllcnMsXG5cdFx0XHRcdFx0Y2hpbGQuaW5pdCA/PyBudWxsXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0c3RhdGljRmllbGRzLnB1c2goZmllbGQpO1xuXHRcdFx0fSBlbHNlIGlmIChjaGlsZCBpbnN0YW5jZW9mIEFTVE1ldGhvZE5vZGUpIHtcblx0XHRcdFx0Y29uc3QgbWV0aG9kID0gbmV3IENsYXNzTWV0aG9kRGVmaW5pdGlvbihcblx0XHRcdFx0XHRjaGlsZC5uYW1lLFxuXHRcdFx0XHRcdGNoaWxkLnBhcmFtZXRlcnMsXG5cdFx0XHRcdFx0Y2hpbGQucmV0dXJuVHlwZSxcblx0XHRcdFx0XHRjaGlsZC5tb2RpZmllcnMsXG5cdFx0XHRcdFx0Y2hpbGQuY2hpbGRyZW5cblx0XHRcdFx0KTtcblxuXHRcdFx0XHRpbnN0YW5jZU1ldGhvZHNbbWV0aG9kLm5hbWVdID0gbWV0aG9kO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVuaGFuZGxlZCBub2RlICR7Y2hpbGQudHlwZX0uYCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBJbnRlcmZhY2VEZWZpbml0aW9uKFxuXHRcdFx0bm9kZSxcblx0XHRcdG5vZGUubmFtZSxcblx0XHRcdHN0YXRpY0ZpZWxkcyxcblx0XHRcdGluc3RhbmNlTWV0aG9kc1xuXHRcdCk7XG5cdH1cbn1cblxuIiwKICAgICJpbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4vcGFyc2VyXCI7XG5pbXBvcnQge0dSQU1NQVIsIFRva2VuLCBUb2tlblR5cGUsIFRZUEVfRU5VTX0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcbmltcG9ydCB7TW9kaWZpZXJzLCBTdXBlckNsYXNzfSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtcblx0QVNUQW5ub3RhdGlvbk5vZGUsXG5cdEFTVEFycmF5Tm9kZSxcblx0QVNUQXNzaWdubWVudE5vZGUsXG5cdEFTVEJpbmFyeU5vZGUsXG5cdEFTVENhbGxOb2RlLFxuXHRBU1RDbGFzc05vZGUsXG5cdEFTVEVsc2VOb2RlLFxuXHRBU1RFeHByZXNzaW9uTm9kZSxcblx0QVNURmllbGROb2RlLFxuXHRBU1RGb3JlYWNoTm9kZSxcblx0QVNUSWZOb2RlLFxuXHRBU1RJbXBvcnROb2RlLFxuXHRBU1RJbmRleE5vZGUsXG5cdEFTVEludGVyZmFjZU5vZGUsXG5cdEFTVExhbWJkYU5vZGUsXG5cdEFTVE1hdGNoQ2FzZU5vZGUsXG5cdEFTVE1hdGNoTm9kZSxcblx0QVNUTWVtYmVyTm9kZSxcblx0QVNUTWV0aG9kTm9kZSxcblx0QVNUTmV3Tm9kZSxcblx0QVNUTm9kZSxcblx0QVNUTm9kZVR5cGUsXG5cdEFTVE9wZXJhdG9yTm9kZSxcblx0QVNUUGFyYW1ldGVyTm9kZSxcblx0QVNUUmV0dXJuTm9kZSxcblx0QVNUVGhlbk5vZGUsXG5cdEFTVFR5cGVOb2RlLFxuXHRBU1RVbmFyeU5vZGUsXG5cdEFTVFZhcmlhYmxlTm9kZSxcblx0QVNUVkRvbUV4cHJlc3Npb25Ob2RlLFxuXHRBU1RWRG9tTm9kZSxcblx0QVNUVkRvbVRleHROb2RlXG59IGZyb20gXCIuLi9hc3RcIjtcbmltcG9ydCB7dGhyb3dQYXJzZXJFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuaW1wb3J0IHtzcGFuRnJvbX0gZnJvbSBcIi4vcGFyc2VyX3NvdXJjZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWl4ZWRUeXBlKCk6IEFTVFR5cGVOb2RlIHtcblx0cmV0dXJuIG5ldyBBU1RUeXBlTm9kZShBU1RUeXBlTm9kZS5LSU5EX1NJTVBMRSwgVFlQRV9FTlVNLk1JWEVEKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVHlwZShwYXJzZXI6IFBhcnNlcik6IEFTVFR5cGVOb2RlIHtcblx0bGV0IHR5cGU7XG5cblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTikge1xuXHRcdHR5cGUgPSBwYXJzZUxhbWJkYVR5cGUocGFyc2VyKTtcblx0fSBlbHNlIHtcblx0XHR0eXBlID0gcGFyc2VTaW1wbGVPckdlbmVyaWNUeXBlKHBhcnNlcik7XG5cdH1cblxuXHRpZiAocGFyc2VyLmNvbnN1bWVJZk9wZXJhdG9yKEdSQU1NQVIuUVVFU1RJT05fTUFSSykpIHtcblx0XHR0eXBlLm51bGxhYmxlID0gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUeXBlUGFyYW1ldGVycyhwYXJzZXI6IFBhcnNlcik6IHN0cmluZ1tdIHtcblx0Y29uc3QgcGFyYW1ldGVycyA9IFtdO1xuXG5cdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkxFU1NfVEhBTik7XG5cblx0ZG8ge1xuXHRcdGNvbnN0IG5hbWUgPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpLnZhbHVlO1xuXHRcdHBhcmFtZXRlcnMucHVzaChuYW1lKTtcblxuXHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLkNPTU1BKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cGFyc2VyLm5leHQoKTtcblx0fSB3aGlsZSAodHJ1ZSk7XG5cblx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuR1JFQVRFUl9USEFOKTtcblxuXHRyZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU2ltcGxlT3JHZW5lcmljVHlwZShwYXJzZXI6IFBhcnNlcik6IEFTVFR5cGVOb2RlIHtcblx0Y29uc3QgbmFtZVRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RUeXBlTm9kZShBU1RUeXBlTm9kZS5LSU5EX1NJTVBMRSwgbmFtZVRva2VuLnZhbHVlKTtcblxuXHRpZiAocGFyc2VyLmNvbnN1bWVJZk9wZXJhdG9yKEdSQU1NQVIuTEVTU19USEFOKSkge1xuXG5cdFx0bm9kZS5raW5kID0gQVNUVHlwZU5vZGUuS0lORF9HRU5FUklDO1xuXG5cdFx0ZG8ge1xuXHRcdFx0bm9kZS50eXBlQXJndW1lbnRzLnB1c2gocGFyc2VUeXBlKHBhcnNlcikpO1xuXHRcdH0gd2hpbGUgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSk7XG5cblx0XHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5HUkVBVEVSX1RIQU4pO1xuXHR9XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUxhbWJkYVR5cGUocGFyc2VyOiBQYXJzZXIpOiBBU1RUeXBlTm9kZSB7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUVHlwZU5vZGUoQVNUVHlwZU5vZGUuS0lORF9MQU1CREEsICdsYW1iZGEnKTtcblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKTtcblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSkge1xuXHRcdGRvIHtcblx0XHRcdG5vZGUucGFyYW1ldGVyVHlwZXMucHVzaChwYXJzZVR5cGUocGFyc2VyKSk7XG5cdFx0fSB3aGlsZSAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKTtcblx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuQVJST1cpO1xuXG5cdG5vZGUucmV0dXJuVHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQcm9ncmFtKHBhcnNlcjogUGFyc2VyKTogQVNUTm9kZSB7XG5cdGNvbnN0IGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXTtcblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudHlwZSAhPT0gVG9rZW5UeXBlLkVPRikge1xuXHRcdGlmIChwYXJzZXIucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5DT01NRU5UKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBub2RlOiBBU1ROb2RlIHwgbnVsbCA9IHBhcnNlU3RhdGVtZW50KHBhcnNlcik7XG5cdFx0XHRpZiAobm9kZSkge1xuXHRcdFx0XHRjaGlsZHJlbi5wdXNoKG5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuUFJPR1JBTU0sIGNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU3RhdGVtZW50KHBhcnNlcjogUGFyc2VyKTogQVNUTm9kZSB8IG51bGwge1xuXHRpZiAocGFyc2VyLmNvbnN1bWVJZkNvbW1lbnQoKSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0c3dpdGNoIChwYXJzZXIucGVlaygpLnZhbHVlKSB7XG5cdFx0Y2FzZSBHUkFNTUFSLklNUE9SVDoge1xuXHRcdFx0cmV0dXJuIHBhcnNlSW1wb3J0KHBhcnNlcik7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5PUEVOOlxuXHRcdGNhc2UgR1JBTU1BUi5DTEFTUzoge1xuXHRcdFx0cmV0dXJuIHBhcnNlQ2xhc3NEZWNsYXJhdGlvbihwYXJzZXIpO1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuSU5URVJGQUNFOiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VJbnRlcmZhY2VEZWNsYXJhdGlvbihwYXJzZXIpO1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuUkVUVVJOOiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VSZXR1cm5TdGF0ZW1lbnQocGFyc2VyKTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkxFVDoge1xuXHRcdFx0cmV0dXJuIHBhcnNlVmFyaWFibGVEZWNsYXJhdGlvbihwYXJzZXIpO1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuSUY6IHtcblx0XHRcdHJldHVybiBwYXJzZUlmRGVjbGFyYXRpb24ocGFyc2VyKTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLk1BVENIOiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VNYXRjaERlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5GT1JFQUNIOiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VGb3JlYWNoRGVjbGFyYXRpb24ocGFyc2VyKTtcblx0XHR9XG5cdFx0ZGVmYXVsdDoge1xuXHRcdFx0cmV0dXJuIHBhcnNlRXhwcmVzc2lvblN0YXRlbWVudChwYXJzZXIpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZXR1cm5TdGF0ZW1lbnQocGFyc2VyOiBQYXJzZXIpOiBBU1RSZXR1cm5Ob2RlIHtcblx0cGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5SRVRVUk4pO1xuXG5cdGxldCBhcmd1bWVudCA9IG51bGw7XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLlNFTUlDT0xPTikge1xuXHRcdGFyZ3VtZW50ID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5TRU1JQ09MT04pO1xuXG5cdHJldHVybiBuZXcgQVNUUmV0dXJuTm9kZShhcmd1bWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUltcG9ydChwYXJzZXI6IFBhcnNlcik6IEFTVEltcG9ydE5vZGUge1xuXHRwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLklNUE9SVCk7XG5cblx0bGV0IG5hbWVzID0gW107XG5cdGxldCBmcm9tID0gbnVsbDtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQlJBQ0VfT1BFTikge1xuXHRcdG5hbWVzID0gcGFyc2VJbXBvcnRMaXN0KHBhcnNlcik7XG5cdFx0cGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5GUk9NKTtcblx0XHRmcm9tID0gcGFyc2VyLmV4cGVjdFN0cmluZygpLnZhbHVlO1xuXHR9IGVsc2Uge1xuXHRcdG5hbWVzLnB1c2gocGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKS52YWx1ZSk7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5TRU1JQ09MT04pO1xuXG5cdHJldHVybiBuZXcgQVNUSW1wb3J0Tm9kZShuYW1lcywgZnJvbSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUltcG9ydExpc3QocGFyc2VyOiBQYXJzZXIpOiBzdHJpbmdbXSB7XG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX09QRU4pO1xuXG5cdGNvbnN0IG5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0Y29uc3QgbmFtZVRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblxuXHRcdG5hbWVzLnB1c2gobmFtZVRva2VuLnZhbHVlKTtcblxuXHRcdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGJyZWFrO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfQ0xPU0UpO1xuXG5cdHJldHVybiBuYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ2xhc3NEZWNsYXJhdGlvbihwYXJzZXI6IFBhcnNlcik6IEFTVENsYXNzTm9kZSB7XG5cdGNvbnN0IGFubm90YXRpb25zID0gcGFyc2VBbm5vdGF0aW9ucyhwYXJzZXIpO1xuXHRjb25zdCBtb2RpZmllcnMgPSBwYXJzZU1vZGlmaWVycyhwYXJzZXIsIFtHUkFNTUFSLk9QRU5dKTtcblxuXHRjb25zdCBjbGFzc1Rva2VuID0gcGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5DTEFTUyk7XG5cdGNvbnN0IG5hbWVUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cblx0bGV0IHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5MRVNTX1RIQU4pIHtcblx0XHR0eXBlUGFyYW1ldGVycyA9IHBhcnNlVHlwZVBhcmFtZXRlcnMocGFyc2VyKTtcblx0fVxuXG5cdGxldCBzdXBlckNsYXNzID0gbnVsbDtcblx0aWYgKHBhcnNlci5jb25zdW1lSWZLZXl3b3JkKEdSQU1NQVIuRVhURU5EUykpIHtcblx0XHRzdXBlckNsYXNzID0gbmV3IFN1cGVyQ2xhc3MoXG5cdFx0XHRBU1ROb2RlVHlwZS5JREVOVElGSUVSLFxuXHRcdFx0cGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKS52YWx1ZVxuXHRcdCk7XG5cdH1cblxuXHRsZXQgaW1wbGVtZW50c0ludGVyZmFjZXMgPSBbXTtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuSU1QTEVNRU5UUykge1xuXHRcdHBhcnNlci5uZXh0KCk7XG5cblx0XHRkbyB7XG5cdFx0XHRjb25zdCBpbnRlcmZhY2VUeXBlID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cdFx0XHRpbXBsZW1lbnRzSW50ZXJmYWNlcy5wdXNoKGludGVyZmFjZVR5cGUpO1xuXHRcdH0gd2hpbGUgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSk7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9PUEVOKTtcblxuXHRjb25zdCBjaGlsZHJlbjogQVNUTm9kZVtdID0gW107XG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLkJSQUNFX0NMT1NFKSB7XG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLkNPTU1FTlQpIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBtZW1iZXI6IEFTVE5vZGUgfCBudWxsID0gcGFyc2VDbGFzc01lbWJlcihwYXJzZXIpO1xuXHRcdGlmIChtZW1iZXIgPT09IG51bGwpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjaGlsZHJlbi5wdXNoKG1lbWJlcik7XG5cdH1cblxuXHRjb25zdCBicmFjZUNsb3NlVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9DTE9TRSk7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RDbGFzc05vZGUoXG5cdFx0bmFtZVRva2VuLnZhbHVlLFxuXHRcdGFubm90YXRpb25zLFxuXHRcdG1vZGlmaWVycyxcblx0XHR0eXBlUGFyYW1ldGVycyxcblx0XHRpbXBsZW1lbnRzSW50ZXJmYWNlcyxcblx0XHRzdXBlckNsYXNzLFxuXHRcdGNoaWxkcmVuXG5cdCk7XG5cblx0bm9kZS5zcGFuID0gc3BhbkZyb20oY2xhc3NUb2tlbiwgYnJhY2VDbG9zZVRva2VuKTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUludGVyZmFjZURlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUSW50ZXJmYWNlTm9kZSB7XG5cdGNvbnN0IGFubm90YXRpb25zID0gcGFyc2VBbm5vdGF0aW9ucyhwYXJzZXIpO1xuXHRjb25zdCBtb2RpZmllcnMgPSBwYXJzZU1vZGlmaWVycyhwYXJzZXIsIFtdKTsgLy8gaW50ZXJmYWNlcyBzaW5kIGltcGxpeml0IHB1YmxpY1xuXG5cdGNvbnN0IGludGVyZmFjZVRva2VuID0gcGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5JTlRFUkZBQ0UpO1xuXHRjb25zdCBuYW1lVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXG5cdGxldCB0eXBlUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuTEVTU19USEFOKSB7XG5cdFx0dHlwZVBhcmFtZXRlcnMgPSBwYXJzZVR5cGVQYXJhbWV0ZXJzKHBhcnNlcik7XG5cdH1cblxuXHRsZXQgZXh0ZW5kc0ludGVyZmFjZXMgPSBbXTtcblx0aWYgKHBhcnNlci5jb25zdW1lSWZLZXl3b3JkKEdSQU1NQVIuRVhURU5EUykpIHtcblx0XHRkbyB7XG5cdFx0XHRleHRlbmRzSW50ZXJmYWNlcy5wdXNoKHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCkudmFsdWUpO1xuXHRcdH0gd2hpbGUgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSk7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9PUEVOKTtcblxuXHRjb25zdCBjaGlsZHJlbjogQVNUTm9kZVtdID0gW107XG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLkJSQUNFX0NMT1NFKSB7XG5cdFx0aWYgKHBhcnNlci5jb25zdW1lSWZDb21tZW50KCkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IG1lbWJlciA9IHBhcnNlQ2xhc3NNZW1iZXIocGFyc2VyKTtcblx0XHRpZiAobWVtYmVyID09PSBudWxsKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAobWVtYmVyIGluc3RhbmNlb2YgQVNURmllbGROb2RlICYmICFtZW1iZXIubW9kaWZpZXJzLnN0YXRpYykge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcignSW50ZXJmYWNlIGZpZWxkcyBtdXN0IGJlIHN0YXRpYy4nKTtcblx0XHR9XG5cblx0XHRpZiAobWVtYmVyIGluc3RhbmNlb2YgQVNUTWV0aG9kTm9kZSAmJiBtZW1iZXIuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcignSW50ZXJmYWNlIG1ldGhvZHMgbXVzdCBub3QgaGF2ZSBhIGJvZHkuJyk7XG5cdFx0fVxuXG5cdFx0Y2hpbGRyZW4ucHVzaChtZW1iZXIpO1xuXHR9XG5cblx0Y29uc3QgYnJhY2VDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfQ0xPU0UpO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUSW50ZXJmYWNlTm9kZShcblx0XHRuYW1lVG9rZW4udmFsdWUsXG5cdFx0YW5ub3RhdGlvbnMsXG5cdFx0bW9kaWZpZXJzLFxuXHRcdHR5cGVQYXJhbWV0ZXJzLFxuXHRcdGV4dGVuZHNJbnRlcmZhY2VzLFxuXHRcdGNoaWxkcmVuXG5cdCk7XG5cblx0bm9kZS5zcGFuID0gc3BhbkZyb20oaW50ZXJmYWNlVG9rZW4sIGJyYWNlQ2xvc2VUb2tlbik7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBbm5vdGF0aW9ucyhwYXJzZXI6IFBhcnNlcik6IEFTVEFubm90YXRpb25Ob2RlW10ge1xuXHRjb25zdCBhbm5vdGF0aW9ucyA9IFtdO1xuXG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5BTk5PVEFUSU9OKSB7XG5cdFx0YW5ub3RhdGlvbnMucHVzaChwYXJzZUFubm90YXRpb24ocGFyc2VyKSk7XG5cdH1cblxuXHRyZXR1cm4gYW5ub3RhdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUFubm90YXRpb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RBbm5vdGF0aW9uTm9kZSB7XG5cdGNvbnN0IHRva2VuID0gcGFyc2VyLmV4cGVjdEFubm90YXRpb24oKTtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RBbm5vdGF0aW9uTm9kZSh0b2tlbi52YWx1ZSk7XG5cblx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pKSB7XG5cdFx0d2hpbGUgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpIHtcblx0XHRcdGNvbnN0IGtleSA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCkudmFsdWU7XG5cdFx0XHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5BU1NJR04pO1xuXG5cdFx0XHRjb25zdCB2YWx1ZSA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHRcdFx0bm9kZS5wcm9wZXJ0aWVzLnNldChrZXksIHZhbHVlKTtcblxuXHRcdFx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQ09NTUEpIHtcblx0XHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cdH1cblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTW9kaWZpZXJzKHBhcnNlcjogUGFyc2VyLCBhbGxvd2VkOiBzdHJpbmdbXSk6IE1vZGlmaWVycyB7XG5cdGNvbnN0IG1vZGlmaWVyczogeyBbaW5kZXg6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuXG5cdGFsbG93ZWQuZm9yRWFjaChtb2RpZmllciA9PiBtb2RpZmllcnNbbW9kaWZpZXJdID0gZmFsc2UpO1xuXG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5LRVlXT1JEICYmIGFsbG93ZWQuaW5jbHVkZXMocGFyc2VyLnBlZWsoKS52YWx1ZSkpIHtcblx0XHRjb25zdCBtb2RpZmllciA9IHBhcnNlci5uZXh0KCkudmFsdWU7XG5cblx0XHRpZiAobW9kaWZpZXJzW21vZGlmaWVyXSkge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcihgRHVwbGljYXRlIG1vZGlmaWVyOiAke21vZGlmaWVyfWApO1xuXHRcdH1cblxuXHRcdG1vZGlmaWVyc1ttb2RpZmllcl0gPSB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIG5ldyBNb2RpZmllcnMobW9kaWZpZXJzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVycyhwYXJzZXI6IFBhcnNlcik6IEFTVFBhcmFtZXRlck5vZGVbXSB7XG5cdGNvbnN0IHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSA9IFtdO1xuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKSB7XG5cdFx0cmV0dXJuIHBhcmFtZXRlcnM7XG5cdH1cblxuXHRkbyB7XG5cdFx0Y29uc3QgbmFtZVRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblx0XHRsZXQgdHlwZSA9IG51bGw7XG5cdFx0bGV0IGRlZmF1bHRWYWx1ZSA9IG51bGw7XG5cblx0XHRsZXQgdHlwZVRva2VuID0gbnVsbDtcblx0XHRsZXQgZGVmYXVsdFZhbHVlVG9rZW4gPSBudWxsO1xuXG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQ09MT04pIHtcblx0XHRcdHR5cGVUb2tlbiA9IHBhcnNlci5uZXh0KCk7XG5cdFx0XHR0eXBlID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cdFx0fVxuXG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQVNTSUdOKSB7XG5cdFx0XHRkZWZhdWx0VmFsdWVUb2tlbiA9IHBhcnNlci5uZXh0KCk7XG5cdFx0XHRkZWZhdWx0VmFsdWUgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0XHR9XG5cblx0XHRjb25zdCBub2RlID0gbmV3IEFTVFBhcmFtZXRlck5vZGUobmFtZVRva2VuLnZhbHVlLCB0eXBlLCBkZWZhdWx0VmFsdWUpO1xuXHRcdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHR5cGVUb2tlbiB8fCBuYW1lVG9rZW4sIGRlZmF1bHRWYWx1ZVRva2VuIHx8IG5hbWVUb2tlbik7XG5cblx0XHRwYXJhbWV0ZXJzLnB1c2gobm9kZSk7XG5cdH0gd2hpbGUgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSk7XG5cblx0cmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNsYXNzTWVtYmVyKHBhcnNlcjogUGFyc2VyKTogQVNUTm9kZSB8IG51bGwge1xuXHRjb25zdCBzdGFydFRva2VuOiBUb2tlbiA9IHBhcnNlci5wZWVrKCk7XG5cblx0Y29uc3QgYW5ub3RhdGlvbnM6IEFTVEFubm90YXRpb25Ob2RlW10gPSBwYXJzZUFubm90YXRpb25zKHBhcnNlcik7XG5cdGNvbnN0IG1vZGlmaWVyczogTW9kaWZpZXJzID0gcGFyc2VNb2RpZmllcnMoXG5cdFx0cGFyc2VyLFxuXHRcdFtcblx0XHRcdEdSQU1NQVIuUFVCTElDLFxuXHRcdFx0R1JBTU1BUi5QUklWQVRFLFxuXHRcdFx0R1JBTU1BUi5TVEFUSUMsXG5cdFx0XHRHUkFNTUFSLlJFQURPTkxZXG5cdFx0XVxuXHQpO1xuXG5cdGlmIChwYXJzZXIucGVla0lzKEdSQU1NQVIuT1BFUkFUT1IpKSB7XG5cdFx0cmV0dXJuIHBhcnNlT3BlcmF0b3JNZW1iZXIocGFyc2VyLCBzdGFydFRva2VuLCBhbm5vdGF0aW9ucywgbW9kaWZpZXJzKTtcblx0fVxuXG5cdGNvbnN0IG5hbWVUb2tlbjogVG9rZW4gPSBwYXJzZXIuZXhwZWN0T25lT2YoW1Rva2VuVHlwZS5JREVOVElGSUVSLCBUb2tlblR5cGUuS0VZV09SRF0pO1xuXG5cdGxldCBmaWVsZFR5cGU6IGFueSA9IG51bGw7XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkNPTE9OKSB7XG5cdFx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTE9OKSkge1xuXHRcdFx0ZmllbGRUeXBlID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cdFx0fVxuXHR9XG5cblx0bGV0IGluaXQ6IGFueSA9IG51bGw7XG5cdGlmIChwYXJzZXIuY29uc3VtZUlmT3BlcmF0b3IoR1JBTU1BUi5BU1NJR04pKSB7XG5cdFx0aW5pdCA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHR9XG5cblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuU0VNSUNPTE9OKSB7XG5cdFx0aWYgKCFtb2RpZmllcnMucHVibGljICYmICFtb2RpZmllcnMucHJpdmF0ZSkge1xuXHRcdFx0bW9kaWZpZXJzLnByaXZhdGUgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNlbWljb2xvblRva2VuOiBUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlNFTUlDT0xPTik7XG5cblx0XHRjb25zdCBub2RlID0gbmV3IEFTVEZpZWxkTm9kZShuYW1lVG9rZW4udmFsdWUsIG1vZGlmaWVycywgZmllbGRUeXBlLCBpbml0KTtcblx0XHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBzZW1pY29sb25Ub2tlbik7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRsZXQgdHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdID0gW107XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkxFU1NfVEhBTikge1xuXHRcdHR5cGVQYXJhbWV0ZXJzID0gcGFyc2VUeXBlUGFyYW1ldGVycyhwYXJzZXIpO1xuXHR9XG5cblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTikge1xuXHRcdGlmICghbW9kaWZpZXJzLnB1YmxpYyAmJiAhbW9kaWZpZXJzLnByaXZhdGUpIHtcblx0XHRcdG1vZGlmaWVycy5wdWJsaWMgPSB0cnVlO1xuXHRcdH1cblxuXHRcdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pO1xuXHRcdGNvbnN0IHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSA9IHBhcnNlUGFyYW1ldGVycyhwYXJzZXIpO1xuXHRcdGNvbnN0IHBhcmVudGhlc2VzQ2xvc2VUb2tlbjogVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cblx0XHRsZXQgcmV0dXJuVHlwZTogYW55ID0gbnVsbDtcblx0XHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09MT04pKSB7XG5cdFx0XHRyZXR1cm5UeXBlID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY2hpbGRyZW46IEFTVE5vZGVbXSA9IHBhcnNlQmxvY2socGFyc2VyKTtcblxuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUTWV0aG9kTm9kZShcblx0XHRcdG5hbWVUb2tlbi52YWx1ZSxcblx0XHRcdG5hbWVUb2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5DT05TVFJVQ1RPUiA/IEFTVE5vZGVUeXBlLkNPTlNUUlVDVE9SIDogQVNUTm9kZVR5cGUuTUVUSE9ELFxuXHRcdFx0YW5ub3RhdGlvbnMsXG5cdFx0XHRtb2RpZmllcnMsXG5cdFx0XHR0eXBlUGFyYW1ldGVycyxcblx0XHRcdHBhcmFtZXRlcnMsXG5cdFx0XHRyZXR1cm5UeXBlLFxuXHRcdFx0Y2hpbGRyZW5cblx0XHQpO1xuXG5cdFx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgcGFyZW50aGVzZXNDbG9zZVRva2VuKTtcblxuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0dGhyb3dQYXJzZXJFcnJvcihgSW52YWxpZCBjbGFzcyBtZW1iZXI6ICR7bmFtZVRva2VuLnZhbHVlfWApO1xufVxuXG5mdW5jdGlvbiBwYXJzZU9wZXJhdG9yTWVtYmVyKHBhcnNlcjogUGFyc2VyLCBzdGFydFRva2VuOiBUb2tlbiwgYW5ub3RhdGlvbnM6IEFTVEFubm90YXRpb25Ob2RlW10sIG1vZGlmaWVyczogTW9kaWZpZXJzKTogQVNUT3BlcmF0b3JOb2RlIHtcblxuXHRwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLk9QRVJBVE9SKTtcblxuXHRjb25zdCBvcGVyYXRvclRva2VuOiBUb2tlbiA9IHBhcnNlci5leHBlY3RPcGVyYXRvcigpO1xuXG5cdGlmICghbW9kaWZpZXJzLnB1YmxpYyAmJiAhbW9kaWZpZXJzLnByaXZhdGUpIHtcblx0XHRtb2RpZmllcnMucHVibGljID0gdHJ1ZTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pO1xuXHRjb25zdCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10gPSBwYXJzZVBhcmFtZXRlcnMocGFyc2VyKTtcblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXG5cdGxldCByZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGwgPSBudWxsO1xuXHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09MT04pKSB7XG5cdFx0cmV0dXJuVHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHR9XG5cblx0Y29uc3QgY2hpbGRyZW46IEFTVE5vZGVbXSA9IHBhcnNlQmxvY2socGFyc2VyKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVE9wZXJhdG9yTm9kZShcblx0XHRvcGVyYXRvclRva2VuLnZhbHVlLFxuXHRcdGFubm90YXRpb25zLFxuXHRcdG1vZGlmaWVycyxcblx0XHRbXSxcblx0XHRwYXJhbWV0ZXJzLFxuXHRcdHJldHVyblR5cGUsXG5cdFx0Y2hpbGRyZW5cblx0KTtcblxuXHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBvcGVyYXRvclRva2VuKTtcblxuXHRpZiAoIUFTVE9wZXJhdG9yTm9kZS5BTExPV0VEX09QRVJBVE9SUy5pbmNsdWRlcyhub2RlLm9wZXJhdG9yKSkge1xuXHRcdHRocm93UGFyc2VyRXJyb3IoYE9wZXJhdG9yICR7bm9kZS5vcGVyYXRvcn0gaXMgbm90IG92ZXJsb2FkYWJsZS5gLCBub2RlLnNwYW4pXG5cdH1cblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQmxvY2socGFyc2VyOiBQYXJzZXIpOiBBU1ROb2RlW10ge1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5TRU1JQ09MT04pIHtcblx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX09QRU4pO1xuXG5cdGNvbnN0IGNoaWxkcmVuID0gW107XG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLkJSQUNFX0NMT1NFKSB7XG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLkNPTU1FTlQpIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y29uc3QgY2hpbGQ6IEFTVE5vZGUgfCBudWxsID0gcGFyc2VTdGF0ZW1lbnQocGFyc2VyKTtcblx0XHRpZiAoY2hpbGQpIHtcblx0XHRcdGNoaWxkcmVuLnB1c2goY2hpbGQpO1xuXHRcdH1cblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX0NMT1NFKTtcblxuXHRyZXR1cm4gY2hpbGRyZW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVZhcmlhYmxlRGVjbGFyYXRpb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RWYXJpYWJsZU5vZGUge1xuXHRjb25zdCBsZXRUb2tlbiA9IHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuTEVUKTtcblx0Y29uc3QgbmFtZVRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblxuXHRsZXQgdHlwZUFubm90YXRpb24gPSBudWxsO1xuXHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09MT04pKSB7XG5cdFx0dHlwZUFubm90YXRpb24gPSBwYXJzZVR5cGUocGFyc2VyKTtcblx0fVxuXG5cdGxldCBpbml0ID0gbnVsbDtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQVNTSUdOKSB7XG5cdFx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuQVNTSUdOKTtcblx0XHRpbml0ID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdH1cblxuXHRjb25zdCBzZW1pY29sb25Ub2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlNFTUlDT0xPTik7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RWYXJpYWJsZU5vZGUobmFtZVRva2VuLnZhbHVlLCB0eXBlQW5ub3RhdGlvbiwgaW5pdCk7XG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKGxldFRva2VuLCBzZW1pY29sb25Ub2tlbik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUlmRGVjbGFyYXRpb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RJZk5vZGUge1xuXHRjb25zdCBzdGFydFRva2VuID0gcGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5JRik7XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTik7XG5cdGNvbnN0IGNvbmRpdGlvbiA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHRjb25zdCBwYXJlbnRoZXNlc0Nsb3NlVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RJZk5vZGUoY29uZGl0aW9uLCBuZXcgQVNUVGhlbk5vZGUocGFyc2VCbG9jayhwYXJzZXIpKSk7XG5cblx0aWYgKHBhcnNlci5jb25zdW1lSWZLZXl3b3JkKEdSQU1NQVIuRUxTRSkpIHtcblx0XHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5JRikge1xuXHRcdFx0bm9kZS5lbHNlID0gcGFyc2VJZkRlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5vZGUuZWxzZSA9IG5ldyBBU1RFbHNlTm9kZShwYXJzZUJsb2NrKHBhcnNlcikpO1xuXHRcdH1cblx0fVxuXG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIHBhcmVudGhlc2VzQ2xvc2VUb2tlbik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU1hdGNoRGVjbGFyYXRpb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RNYXRjaE5vZGUge1xuXHRjb25zdCBzdGFydFRva2VuID0gcGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5NQVRDSCk7XG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pO1xuXG5cdGNvbnN0IGV4cHJlc3Npb24gPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX09QRU4pO1xuXG5cdGNvbnN0IG1hdGNoQ2FzZXM6IEFTVE1hdGNoQ2FzZU5vZGVbXSA9IFtdO1xuXHRsZXQgZGVmYXVsdENhc2U6IEFTVE1hdGNoQ2FzZU5vZGUgfCBudWxsID0gbnVsbDtcblxuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5CUkFDRV9DTE9TRSkge1xuXHRcdGNvbnN0IG1hdGNoQ2FzZTogQVNUTWF0Y2hDYXNlTm9kZSA9IHBhcnNlTWF0Y2hDYXNlRGVjbGFyYXRpb24ocGFyc2VyKTtcblx0XHRpZiAobWF0Y2hDYXNlLnRlc3QgPT09IG51bGwpIHtcblx0XHRcdGRlZmF1bHRDYXNlID0gbWF0Y2hDYXNlO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdG1hdGNoQ2FzZXMucHVzaChtYXRjaENhc2UpO1xuXHR9XG5cblx0Y29uc3QgYnJhY2VDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfQ0xPU0UpO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUTWF0Y2hOb2RlKGV4cHJlc3Npb24sIG1hdGNoQ2FzZXMsIGRlZmF1bHRDYXNlKTtcblx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgYnJhY2VDbG9zZVRva2VuKTtcblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTWF0Y2hDYXNlRGVjbGFyYXRpb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RNYXRjaENhc2VOb2RlIHtcblx0Y29uc3QgY2FzZU5vZGUgPSBuZXcgQVNUTWF0Y2hDYXNlTm9kZSgpO1xuXG5cdGlmIChwYXJzZXIuY29uc3VtZUlmS2V5d29yZChHUkFNTUFSLkRFRkFVTFQpKSB7XG5cdFx0Y2FzZU5vZGUudGVzdCA9IG51bGw7XG5cdH0gZWxzZSB7XG5cdFx0Y2FzZU5vZGUudGVzdCA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQ09MT04pO1xuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkJSQUNFX09QRU4pIHtcblx0XHRjYXNlTm9kZS5jaGlsZHJlbiA9IHBhcnNlQmxvY2socGFyc2VyKTtcblx0fSBlbHNlIHtcblx0XHRjb25zdCBjaGlsZDogQVNUTm9kZSB8IG51bGwgPSBwYXJzZVN0YXRlbWVudChwYXJzZXIpO1xuXHRcdGlmIChjaGlsZCkge1xuXHRcdFx0Y2FzZU5vZGUuY2hpbGRyZW4ucHVzaChjaGlsZClcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY2FzZU5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUZvcmVhY2hEZWNsYXJhdGlvbihwYXJzZXI6IFBhcnNlcik6IEFTVEZvcmVhY2hOb2RlIHtcblx0Y29uc3Qgc3RhcnRUb2tlbiA9IHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuRk9SRUFDSCk7XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTik7XG5cblx0Y29uc3QgaXRlcmF0b3JUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cdGNvbnN0IGl0ZXJhdG9yID0gaXRlcmF0b3JUb2tlbi52YWx1ZTtcblxuXHRwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLklOKTtcblxuXHRjb25zdCBpdGVyYWJsZSA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXG5cdGNvbnN0IHBhcmVudGhlc2VzQ2xvc2VUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVEZvcmVhY2hOb2RlKGl0ZXJhdG9yLCBpdGVyYWJsZSwgcGFyc2VCbG9jayhwYXJzZXIpKTtcblx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgcGFyZW50aGVzZXNDbG9zZVRva2VuKTtcblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQXJyYXkocGFyc2VyOiBQYXJzZXIpOiBBU1RBcnJheU5vZGUge1xuXHRjb25zdCBzdGFydFRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfT1BFTik7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RBcnJheU5vZGUoKTtcblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9DTE9TRSkge1xuXHRcdGRvIHtcblx0XHRcdG5vZGUuZWxlbWVudHMucHVzaChwYXJzZUV4cHJlc3Npb24ocGFyc2VyKSk7XG5cdFx0fSB3aGlsZSAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKTtcblx0fVxuXG5cdGNvbnN0IGJyYWNrZXRTcXVhcmVDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfQ0xPU0UpO1xuXG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIGJyYWNrZXRTcXVhcmVDbG9zZVRva2VuKTtcblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTGFtYmRhKHBhcnNlcjogUGFyc2VyKTogQVNUTGFtYmRhTm9kZSB7XG5cdGNvbnN0IHN0YXJ0VG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9PUEVOKTtcblxuXHRjb25zdCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10gPSBbXTtcblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQVJST1cpIHtcblx0XHRjb25zdCBuYW1lID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKS52YWx1ZTtcblx0XHRsZXQgdHlwZSA9IG51bGw7XG5cdFx0bGV0IGRlZmF1bHRWYWx1ZSA9IG51bGw7XG5cblx0XHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09MT04pKSB7XG5cdFx0XHR0eXBlID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cdFx0fVxuXG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQVNTSUdOKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdFx0ZGVmYXVsdFZhbHVlID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdFx0fVxuXG5cdFx0cGFyYW1ldGVycy5wdXNoKG5ldyBBU1RQYXJhbWV0ZXJOb2RlKG5hbWUsIHR5cGUsIGRlZmF1bHRWYWx1ZSkpO1xuXG5cdFx0cGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuQVJST1cpO1xuXG5cdGxldCByZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSA9IGNyZWF0ZU1peGVkVHlwZSgpO1xuXHRpZiAocGFyc2VyLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuSURFTlRJRklFUikge1xuXHRcdHJldHVyblR5cGUgPSBwYXJzZVR5cGUocGFyc2VyKTtcblx0XHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5DT0xPTikge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuVHlwZSA9IGNyZWF0ZU1peGVkVHlwZSgpO1xuXHRcdFx0cGFyc2VyLnJld2luZCgpO1xuXHRcdH1cblx0fVxuXG5cdGxldCBjaGlsZHJlbiA9IFtdO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5CUkFDRV9PUEVOKSB7XG5cdFx0Y2hpbGRyZW4gPSBwYXJzZUJsb2NrKHBhcnNlcik7XG5cdH0gZWxzZSB7XG5cdFx0Y2hpbGRyZW4ucHVzaChwYXJzZUV4cHJlc3Npb24ocGFyc2VyKSk7XG5cdH1cblxuXHRjb25zdCBicmFjZUNsb3NlVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9DTE9TRSk7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RMYW1iZGFOb2RlKHBhcmFtZXRlcnMsIHJldHVyblR5cGUsIGNoaWxkcmVuKTtcblx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgYnJhY2VDbG9zZVRva2VuKTtcblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvb2tzTGlrZUxhbWJkYShwYXJzZXI6IFBhcnNlcik6IGJvb2xlYW4ge1xuXHRjb25zdCBzdGFydDogbnVtYmVyID0gcGFyc2VyLnBvc2l0aW9uKCk7XG5cblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQlJBQ0VfT1BFTikge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHBhcnNlci5uZXh0KCk7XG5cblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLklERU5USUZJRVIpIHtcblx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT0xPTikpIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0fVxuXHRcdGlmICghcGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRjb25zdCBpc0xhbWJkYTogYm9vbGVhbiA9IHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQVJST1c7XG5cdHBhcnNlci5zZWVrQXQoc3RhcnQpXG5cdHJldHVybiBpc0xhbWJkYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRXhwcmVzc2lvblN0YXRlbWVudChwYXJzZXI6IFBhcnNlcik6IEFTVEV4cHJlc3Npb25Ob2RlIHtcblx0Y29uc3QgZXhwcjogQVNUTm9kZSA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlNFTUlDT0xPTik7XG5cblx0cmV0dXJuIG5ldyBBU1RFeHByZXNzaW9uTm9kZShleHByKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VFeHByZXNzaW9uKHBhcnNlcjogUGFyc2VyLCBwcmVjZWRlbmNlOiBudW1iZXIgPSAwKTogQVNUTm9kZSB7XG5cdGxldCBleHByOiBBU1ROb2RlID0gcGFyc2VQb3N0Zml4KHBhcnNlciwgcGFyc2VVbmFyeShwYXJzZXIpKTtcblxuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdGNvbnN0IHRva2VuOiBUb2tlbiA9IHBhcnNlci5wZWVrKCk7XG5cdFx0aWYgKCF0b2tlbikge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0bGV0IHRva2VuUHJlY2VkZW5jZTogbnVtYmVyID0gbG9va3VwUHJlY2VkZW5jZSh0b2tlbik7XG5cdFx0aWYgKHRva2VuUHJlY2VkZW5jZSA8IHByZWNlZGVuY2UpIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5BU1NJR04pIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0XHRleHByID0gbmV3IEFTVEFzc2lnbm1lbnROb2RlKGV4cHIsIHBhcnNlRXhwcmVzc2lvbihwYXJzZXIsIHRva2VuUHJlY2VkZW5jZSkpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKEdSQU1NQVIuTUFUSF9PUEVSQVRPUlMuaW5jbHVkZXModG9rZW4udmFsdWUpXG5cdFx0XHR8fCBHUkFNTUFSLkxPR0lDX09QRVJBVE9SUy5pbmNsdWRlcyh0b2tlbi52YWx1ZSkpIHtcblx0XHRcdGNvbnN0IHN0YXJ0VG9rZW46IFRva2VuID0gcGFyc2VyLm5leHQoKTtcblx0XHRcdGNvbnN0IHJpZ2h0OiBBU1ROb2RlID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlciwgdG9rZW5QcmVjZWRlbmNlICsgMSk7XG5cdFx0XHRjb25zdCBlbmRUb2tlbjogVG9rZW4gPSBwYXJzZXIucGVlaygpO1xuXG5cdFx0XHRjb25zdCBub2RlID0gbmV3IEFTVEJpbmFyeU5vZGUoZXhwciwgcmlnaHQsIHRva2VuLnZhbHVlKTtcblx0XHRcdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIGVuZFRva2VuKTtcblx0XHRcdGV4cHIgPSBub2RlO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0YnJlYWs7XG5cdH1cblxuXHRyZXR1cm4gZXhwcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVkRvbUV4cHJlc3Npb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RWRG9tTm9kZSB7XG5cdHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuVkRPTSk7XG5cdHJldHVybiBwYXJzZVZEb21FbGVtZW50KHBhcnNlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVZEb21FbGVtZW50KHBhcnNlcjogUGFyc2VyKTogQVNUVkRvbU5vZGUge1xuXHRwYXJzZXIuY29uc3VtZUlmVGV4dCgpO1xuXG5cdGNvbnN0IHN0YXJ0VG9rZW46IFRva2VuID0gcGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuTEVTU19USEFOKTtcblx0Y29uc3QgdGFnVG9rZW46IFRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblx0Y29uc3QgdGFnOiBzdHJpbmcgPSB0YWdUb2tlbi52YWx1ZTtcblxuXHRwYXJzZXIuY29uc3VtZUlmVGV4dCgpO1xuXG5cdGNvbnN0IHByb3BzID0gbmV3IE1hcDxzdHJpbmcsIEFTVE5vZGU+KCk7XG5cdHdoaWxlICh0cnVlKSB7XG5cblx0XHRpZiAocGFyc2VyLnBlZWtJcyhHUkFNTUFSLkdSRUFURVJfVEhBTikpIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGlmIChwYXJzZXIucGVla0lzKEdSQU1NQVIuWE1MX0NMT1NFX1RBRykpIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGNvbnN0IG5hbWVUb2tlbjogVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXHRcdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkFTU0lHTik7XG5cblx0XHRsZXQgdmFsdWU6IEFTVE5vZGU7XG5cblx0XHRpZiAocGFyc2VyLnBlZWtJcyhHUkFNTUFSLkJSQUNFX09QRU4pKSB7XG5cdFx0XHRpZiAobG9va3NMaWtlTGFtYmRhKHBhcnNlcikpIHtcblx0XHRcdFx0dmFsdWUgPSBwYXJzZUxhbWJkYShwYXJzZXIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHRcdFx0dmFsdWUgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0XHRcdFx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfQ0xPU0UpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YWx1ZSA9IHBhcnNlUHJpbWFyeShwYXJzZXIpO1xuXHRcdH1cblxuXHRcdHByb3BzLnNldChuYW1lVG9rZW4udmFsdWUsIHZhbHVlKTtcblxuXHRcdHBhcnNlci5jb25zdW1lSWZUZXh0KCk7XG5cdH1cblxuXHRpZiAocGFyc2VyLnBlZWtJcyhHUkFNTUFSLlhNTF9DTE9TRV9UQUcpKSB7XG5cdFx0cGFyc2VyLm5leHQoKTtcblxuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUVkRvbU5vZGUodGFnLCBwcm9wcywgW10pO1xuXHRcdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIHBhcnNlci5wZWVrKCkpO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuR1JFQVRFUl9USEFOKTtcblxuXHRjb25zdCBjaGlsZHJlbjogQVNUTm9kZVtdID0gW107XG5cdHdoaWxlICghcGFyc2VyLnBlZWtJcyhHUkFNTUFSLlhNTF9PUEVOX0NMT1NFX1RBRykpIHtcblxuXHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkxFU1NfVEhBTikge1xuXHRcdFx0Y2hpbGRyZW4ucHVzaChwYXJzZVZEb21FbGVtZW50KHBhcnNlcikpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y2hpbGRyZW4ucHVzaChwYXJzZVZEb21UZXh0KHBhcnNlcikpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuWE1MX09QRU5fQ0xPU0VfVEFHKTtcblx0cGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuR1JFQVRFUl9USEFOKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVFZEb21Ob2RlKHRhZywgcHJvcHMsIGNoaWxkcmVuKTtcblx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgcGFyc2VyLnBlZWsoKSk7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VWRG9tVGV4dChwYXJzZXI6IFBhcnNlcik6IEFTVFZEb21UZXh0Tm9kZSB8IEFTVFZEb21FeHByZXNzaW9uTm9kZSB7XG5cdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9PUEVOKSkge1xuXHRcdGNvbnN0IGV4cHJlc3Npb246IEFTVE5vZGUgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0XHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9DTE9TRSk7XG5cdFx0cmV0dXJuIG5ldyBBU1RWRG9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbik7XG5cdH1cblxuXHRjb25zdCB0b2tlbjogVG9rZW4gPSBwYXJzZXIuZXhwZWN0T25lT2YoXG5cdFx0W1xuXHRcdFx0VG9rZW5UeXBlLklERU5USUZJRVIsXG5cdFx0XHRUb2tlblR5cGUuT1BFUkFUT1IsXG5cdFx0XHRUb2tlblR5cGUuS0VZV09SRCxcblx0XHRcdFRva2VuVHlwZS5QVU5DVFVBVElPTixcblx0XHRcdFRva2VuVHlwZS5OVU1CRVIsXG5cdFx0XHRUb2tlblR5cGUuVEVYVFxuXHRcdF1cblx0KTtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RWRG9tVGV4dE5vZGUodG9rZW4udmFsdWUpO1xuXHRub2RlLnNwYW4gPSBzcGFuRnJvbSh0b2tlbiwgdG9rZW4pO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQXJndW1lbnRzKHBhcnNlcjogUGFyc2VyKTogQVNUTm9kZVtdIHtcblx0Y29uc3QgYXJnczogQVNUTm9kZVtdID0gW107XG5cblx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKSkge1xuXHRcdHJldHVybiBhcmdzO1xuXHR9XG5cblx0YXJncy5wdXNoKHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpKTtcblxuXHR3aGlsZSAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKSB7XG5cdFx0YXJncy5wdXNoKHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKTtcblx0cmV0dXJuIGFyZ3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVVuYXJ5KHBhcnNlcjogUGFyc2VyKTogQVNUTm9kZSB8IEFTVFVuYXJ5Tm9kZSB7XG5cdGNvbnN0IHRva2VuOiBUb2tlbiA9IHBhcnNlci5wZWVrKCk7XG5cblx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5LRVlXT1JEICYmIHRva2VuLnZhbHVlID09PSBHUkFNTUFSLlZET00pIHtcblx0XHRyZXR1cm4gcGFyc2VWRG9tRXhwcmVzc2lvbihwYXJzZXIpO1xuXHR9XG5cblx0c3dpdGNoICh0b2tlbi52YWx1ZSkge1xuXHRcdGNhc2UgR1JBTU1BUi5FWENMQU1BVElPTl9NQVJLOiB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXG5cdFx0XHRjb25zdCB1bmFyeTogQVNUTm9kZSB8IEFTVFVuYXJ5Tm9kZSA9IHBhcnNlVW5hcnkocGFyc2VyKTtcblxuXHRcdFx0cmV0dXJuIG5ldyBBU1RVbmFyeU5vZGUoR1JBTU1BUi5FWENMQU1BVElPTl9NQVJLLCB1bmFyeSk7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5NSU5VUzoge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblxuXHRcdFx0Y29uc3QgdW5hcnk6IEFTVE5vZGUgfCBBU1RVbmFyeU5vZGUgPSBwYXJzZVVuYXJ5KHBhcnNlcik7XG5cblx0XHRcdHJldHVybiBuZXcgQVNUVW5hcnlOb2RlKEdSQU1NQVIuTUlOVVMsIHVuYXJ5KTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLlBMVVM6IHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cblx0XHRcdGNvbnN0IHVuYXJ5OiBBU1ROb2RlIHwgQVNUVW5hcnlOb2RlID0gcGFyc2VVbmFyeShwYXJzZXIpO1xuXG5cdFx0XHRyZXR1cm4gbmV3IEFTVFVuYXJ5Tm9kZShHUkFNTUFSLlBMVVMsIHVuYXJ5KTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcGFyc2VQcmltYXJ5KHBhcnNlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVByaW1hcnkocGFyc2VyOiBQYXJzZXIpOiBBU1ROb2RlIHtcblx0aWYgKGxvb2tzTGlrZUxhbWJkYShwYXJzZXIpKSB7XG5cdFx0cmV0dXJuIHBhcnNlTGFtYmRhKHBhcnNlcik7XG5cdH1cblxuXHRjb25zdCB0b2tlbjogVG9rZW4gPSBwYXJzZXIubmV4dCgpO1xuXG5cdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9PUEVOKSB7XG5cdFx0cGFyc2VyLnJld2luZCgpO1xuXHRcdHJldHVybiBwYXJzZUFycmF5KHBhcnNlcik7XG5cdH1cblxuXHRpZiAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLk5VTUJFUikge1xuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5OVU1CRVIpO1xuXHRcdG5vZGUudmFsdWUgPSB0b2tlbi52YWx1ZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuU1RSSU5HKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLlNUUklORyk7XG5cdFx0bm9kZS52YWx1ZSA9IHRva2VuLnZhbHVlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5CT09MRUFOKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLkJPT0xFQU4pO1xuXHRcdG5vZGUudmFsdWUgPSB0b2tlbi52YWx1ZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuSURFTlRJRklFUikge1xuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5JREVOVElGSUVSKTtcblx0XHRub2RlLm5hbWUgPSB0b2tlbi52YWx1ZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5OVUxMKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLk5VTEwpO1xuXHRcdG5vZGUudmFsdWUgPSB0b2tlbi52YWx1ZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5USElTKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLlRISVMpO1xuXHRcdG5vZGUubmFtZSA9IHRva2VuLnZhbHVlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLk5FVykge1xuXG5cdFx0bGV0IHR5cGVBbm5vdGF0aW9uOiBBU1RUeXBlTm9kZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXG5cdFx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTik7XG5cblx0XHRyZXR1cm4gbmV3IEFTVE5ld05vZGUocGFyc2VBcmd1bWVudHMocGFyc2VyKSwgdHlwZUFubm90YXRpb24pO1xuXHR9XG5cblx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pIHtcblx0XHRjb25zdCBleHByOiBBU1ROb2RlID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdFx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXHRcdHJldHVybiBleHByO1xuXHR9XG5cblx0dGhyb3dQYXJzZXJFcnJvcihgVW5leHBlY3RlZCB0b2tlbjogJHt0b2tlbi50eXBlfSAke3Rva2VuLnZhbHVlfWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQb3N0Zml4KHBhcnNlcjogUGFyc2VyLCBleHByOiBBU1ROb2RlIHwgbnVsbCk6IEFTVE5vZGUge1xuXHRpZiAoZXhwciA9PT0gbnVsbCkge1xuXHRcdHRocm93UGFyc2VyRXJyb3IoYEV4cGVjdGVkIGV4cHJlc3Npb24sIGdvdCBudWxsLmApO1xuXHR9XG5cblx0d2hpbGUgKHRydWUpIHtcblx0XHRjb25zdCB0b2tlbiA9IHBhcnNlci5wZWVrKCk7XG5cdFx0aWYgKCF0b2tlbikgYnJlYWs7XG5cblx0XHQvLyBDYWxsOiBmb28oLi4uKVxuXHRcdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdFx0ZXhwciA9IG5ldyBBU1RDYWxsTm9kZShleHByLCBwYXJzZUFyZ3VtZW50cyhwYXJzZXIpKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIE1lbWJlcjogZm9vLmJhclxuXHRcdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5ET1QpIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0XHRleHByID0gbmV3IEFTVE1lbWJlck5vZGUoZXhwciwgcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKS52YWx1ZSk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBJTkRFWDogZm9vW2V4cHJdXG5cdFx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX09QRU4pIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cblx0XHRcdGNvbnN0IGluZGV4ID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cblx0XHRcdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX0NMT1NFKTtcblxuXHRcdFx0ZXhwciA9IG5ldyBBU1RJbmRleE5vZGUoZXhwciwgaW5kZXgpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0YnJlYWs7XG5cdH1cblxuXHRyZXR1cm4gZXhwcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvb2t1cFByZWNlZGVuY2UodG9rZW46IFRva2VuKTogbnVtYmVyIHtcblx0c3dpdGNoICh0b2tlbi52YWx1ZSkge1xuXHRcdGNhc2UgR1JBTU1BUi5ET1Q6XG5cdFx0XHRyZXR1cm4gMTAwO1xuXHRcdGNhc2UgR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOOlxuXHRcdFx0cmV0dXJuIDkwO1xuXHRcdGNhc2UgR1JBTU1BUi5NVUxUSVBMWTpcblx0XHRjYXNlIEdSQU1NQVIuRElWSURFOlxuXHRcdGNhc2UgR1JBTU1BUi5NT0RVTFVTOlxuXHRcdFx0cmV0dXJuIDYwO1xuXHRcdGNhc2UgR1JBTU1BUi5QTFVTOlxuXHRcdGNhc2UgR1JBTU1BUi5NSU5VUzpcblx0XHRcdHJldHVybiA1MDtcblx0XHRjYXNlIEdSQU1NQVIuTEVTU19USEFOOlxuXHRcdGNhc2UgR1JBTU1BUi5HUkVBVEVSX1RIQU46XG5cdFx0Y2FzZSBHUkFNTUFSLkxFU1NfRVFVQUw6XG5cdFx0Y2FzZSBHUkFNTUFSLkdSRUFURVJfRVFVQUw6XG5cdFx0XHRyZXR1cm4gNDA7XG5cdFx0Y2FzZSBHUkFNTUFSLkVRVUFMOlxuXHRcdGNhc2UgR1JBTU1BUi5OT1RfRVFVQUw6XG5cdFx0XHRyZXR1cm4gMzA7XG5cdFx0Y2FzZSBHUkFNTUFSLkFORDpcblx0XHRcdHJldHVybiAyMDtcblx0XHRjYXNlIEdSQU1NQVIuT1I6XG5cdFx0XHRyZXR1cm4gMTA7XG5cdFx0Y2FzZSBHUkFNTUFSLkFTU0lHTjpcblx0XHRcdHJldHVybiA1O1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gMDtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge1Rva2VuLCBUb2tlblR5cGV9IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5pbXBvcnQge1Rva2VuU3RyZWFtfSBmcm9tIFwiLi4vdG9rZW5pemVyL3Rva2VuaXplclwiO1xuaW1wb3J0IHtwYXJzZVByb2dyYW19IGZyb20gXCIuL3BhcnNlcl9zdGF0bWVudHNcIjtcbmltcG9ydCB7dGhyb3dQYXJzZXJFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuL3BhcnNlcl9zb3VyY2VcIjtcblxuXG5leHBvcnQgY2xhc3MgUGFyc2VyIHtcblx0c291cmNlOiBTb3VyY2U7XG5cdHRva2VuU3RyZWFtOiBUb2tlblN0cmVhbSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKHNvdXJjZTogU291cmNlKSB7XG5cdFx0dGhpcy5zb3VyY2UgPSBzb3VyY2U7XG5cdH1cblxuXHRwYXJzZSgpIHtcblx0XHR0aGlzLnRva2VuU3RyZWFtID0gdGhpcy5zb3VyY2Vcblx0XHQgICAgICAgICAgICAgICAgICAgICAgIC5nZXRUb2tlbml6ZXIoKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgLmdldFRva2VuU3RyZWFtKClcblxuXHRcdHJldHVybiBwYXJzZVByb2dyYW0odGhpcyk7XG5cdH1cblxuXHRzdHJlYW0oKTogVG9rZW5TdHJlYW0ge1xuXHRcdGlmICghdGhpcy50b2tlblN0cmVhbSkge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcignUGFyc2VyIGhhcyBub3QgYmVlbiBwYXJzZWQgeWV0LicpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnRva2VuU3RyZWFtO1xuXHR9XG5cblx0ZXhwZWN0KHRva2VuVHlwZTogc3RyaW5nLCBrZXl3b3JkOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IFRva2VuIHtcblx0XHRjb25zdCB0b2tlbiA9IHRoaXNcblx0XHRcdC5zdHJlYW0oKVxuXHRcdFx0Lm5leHQoKTtcblxuXHRcdGlmICghdG9rZW4pIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoYFVuZXhwZWN0ZWQgZW5kIG9mIGZpbGUuIEV4cGVjdGVkICR7dG9rZW5UeXBlfSR7a2V5d29yZCA/ICcgJyArIGtleXdvcmQgOiAnJ31gKTtcblx0XHR9XG5cblx0XHRpZiAodG9rZW4udHlwZSAhPT0gdG9rZW5UeXBlIHx8IChrZXl3b3JkICYmIHRva2VuLnZhbHVlICE9PSBrZXl3b3JkKSkge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcihgRXhwZWN0ZWQgJHt0b2tlblR5cGV9JHtrZXl3b3JkID8gJyAnICsga2V5d29yZCA6ICcnfSwgZ290ICR7dG9rZW4udHlwZX0gJHt0b2tlbi52YWx1ZX1gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdG9rZW47XG5cdH1cblxuXHRleHBlY3RPcGVyYXRvcihrZXl3b3JkOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IFRva2VuIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlY3QoVG9rZW5UeXBlLk9QRVJBVE9SLCBrZXl3b3JkKTtcblx0fVxuXG5cdGV4cGVjdEFubm90YXRpb24oKTogVG9rZW4ge1xuXHRcdHJldHVybiB0aGlzLmV4cGVjdChUb2tlblR5cGUuQU5OT1RBVElPTik7XG5cdH1cblxuXHRleHBlY3RJZGVudGlmaWVyKGtleXdvcmQ6IHN0cmluZyB8IG51bGwgPSBudWxsKTogVG9rZW4ge1xuXHRcdHJldHVybiB0aGlzLmV4cGVjdChUb2tlblR5cGUuSURFTlRJRklFUiwga2V5d29yZCk7XG5cdH1cblxuXHRleHBlY3RLZXl3b3JkKGtleXdvcmQ6IHN0cmluZyB8IG51bGwgPSBudWxsKTogVG9rZW4ge1xuXHRcdHJldHVybiB0aGlzLmV4cGVjdChUb2tlblR5cGUuS0VZV09SRCwga2V5d29yZCk7XG5cdH1cblxuXHRleHBlY3RTdHJpbmcoKTogVG9rZW4ge1xuXHRcdHJldHVybiB0aGlzLmV4cGVjdChUb2tlblR5cGUuU1RSSU5HKTtcblx0fVxuXG5cdGV4cGVjdFRleHQoKTogVG9rZW4ge1xuXHRcdHJldHVybiB0aGlzLmV4cGVjdChUb2tlblR5cGUuVEVYVCk7XG5cdH1cblxuXHRleHBlY3RQdW5jdHVhdGlvbihrZXl3b3JkOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IFRva2VuIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlY3QoVG9rZW5UeXBlLlBVTkNUVUFUSU9OLCBrZXl3b3JkKTtcblx0fVxuXG5cdGV4cGVjdE9uZU9mKHRva2VuVHlwZXM6IHN0cmluZ1tdLCBrZXl3b3Jkczogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBUb2tlbiB7XG5cdFx0Y29uc3QgdG9rZW4gPSB0aGlzXG5cdFx0XHQuc3RyZWFtKClcblx0XHRcdC5uZXh0KCk7XG5cblx0XHRpZiAoIXRva2VuKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKGBVbmV4cGVjdGVkIGVuZCBvZiBmaWxlLiBFeHBlY3RlZCBvbmUgb2YgdHlwZXMgJHt0b2tlblR5cGVzfSwgZ290IG51bGwuYCk7XG5cdFx0fVxuXG5cdFx0aWYgKCF0b2tlblR5cGVzLmluY2x1ZGVzKHRva2VuLnR5cGUpKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKGBFeHBlY3RlZCBvbmUgb2YgdHlwZXMgJHt0b2tlblR5cGVzfSwgZ290ICR7dG9rZW4udHlwZX1gKTtcblx0XHR9XG5cblx0XHRpZiAoa2V5d29yZHMgJiYgIWtleXdvcmRzLmluY2x1ZGVzKHRva2VuLnZhbHVlKSkge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcihgRXhwZWN0ZWQgb25lIG9mIHZhbHVlcyAke2tleXdvcmRzfSwgZ290ICR7dG9rZW4udmFsdWV9YCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRva2VuO1xuXHR9XG5cblx0Y29uc3VtZUlmKHRva2VuVHlwZTogc3RyaW5nLCBrZXl3b3JkOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IHRva2VuID0gdGhpcy5wZWVrKCk7XG5cblx0XHRpZiAodG9rZW4udHlwZSA9PT0gdG9rZW5UeXBlICYmIChrZXl3b3JkICYmIHRva2VuLnZhbHVlLnRyaW0oKSA9PT0ga2V5d29yZCkpIHtcblx0XHRcdHRoaXMubmV4dCgpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Y29uc3VtZUlmUHVuY3R1YXRpb24odmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbnN1bWVJZihUb2tlblR5cGUuUFVOQ1RVQVRJT04sIHZhbHVlKTtcblx0fVxuXG5cdGNvbnN1bWVJZk9wZXJhdG9yKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdW1lSWYoVG9rZW5UeXBlLk9QRVJBVE9SLCB2YWx1ZSk7XG5cdH1cblxuXHRjb25zdW1lSWZDb21tZW50KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbnN1bWVJZihUb2tlblR5cGUuQ09NTUVOVCk7XG5cdH1cblxuXHRjb25zdW1lSWZLZXl3b3JkKGtleXdvcmQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbnN1bWVJZihUb2tlblR5cGUuS0VZV09SRCwga2V5d29yZCk7XG5cdH1cblxuXHRjb25zdW1lSWZUZXh0KCk6IGJvb2xlYW4ge1xuXHRcdGlmICh0aGlzLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuVEVYVCAmJiB0aGlzLnBlZWtJcygnJykpIHtcblx0XHRcdHRoaXMubmV4dCgpO1xuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRwZWVrKCk6IFRva2VuIHtcblx0XHRjb25zdCB0b2tlbiA9IHRoaXNcblx0XHRcdC5zdHJlYW0oKVxuXHRcdFx0LnBlZWsoKTtcblxuXHRcdGlmICh0b2tlbiA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZmlsZS4gRXhwZWN0ZWQgdG9rZW4sIGdvdCBudWxsLicpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0b2tlbjtcblx0fVxuXG5cdHBlZWtJcyhrZXl3b3JkOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5wZWVrKClcblx0XHQgICAgICAgICAgIC52YWx1ZVxuXHRcdCAgICAgICAgICAgLnRyaW0oKSA9PT0ga2V5d29yZDtcblx0fVxuXG5cdG5leHQoKTogVG9rZW4ge1xuXHRcdGNvbnN0IHRva2VuID0gdGhpc1xuXHRcdFx0LnN0cmVhbSgpXG5cdFx0XHQubmV4dCgpO1xuXG5cdFx0aWYgKHRva2VuID09PSBudWxsKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKCdVbmV4cGVjdGVkIGVuZCBvZiBmaWxlLiBFeHBlY3RlZCB0b2tlbiwgZ290IG51bGwuJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRva2VuO1xuXHR9XG5cblx0cmV3aW5kKCk6IHZvaWQge1xuXHRcdHRoaXMuc3RyZWFtKClcblx0XHQgICAgLnJld2luZCgpO1xuXHR9XG5cblx0cG9zaXRpb24oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5zdHJlYW0oKS5pbmRleDtcblx0fVxuXG5cdHNlZWtBdChwb3NpdGlvbjogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5zdHJlYW0oKS5pbmRleCA9IHBvc2l0aW9uO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7QVNUQ2xhc3NOb2RlLCBBU1RJbnRlcmZhY2VOb2RlLCBBU1ROb2RlfSBmcm9tIFwiLi4vYXN0XCI7XG5pbXBvcnQge0NsYXNzRGVmaW5pdGlvbiwgSW5zdGFuY2UsIEludGVyZmFjZURlZmluaXRpb259IGZyb20gXCIuL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7Q2xhc3NTeW1ib2wsIEludGVyZmFjZVN5bWJvbH0gZnJvbSBcIi4uL3R5cGVzL3R5cGVfb2JqZWN0c1wiO1xuaW1wb3J0IHt0aHJvd1J1bnRpbWVFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuXG5leHBvcnQgY2xhc3MgQ2xhc3NSZWdpc3RyeSB7XG5cdG1hcDogTWFwPHN0cmluZywgQ2xhc3NEZWZpbml0aW9uPiA9IG5ldyBNYXAoKTtcblxuXHRyZWdpc3Rlcihub2RlOiBBU1RDbGFzc05vZGUpOiB2b2lkIHtcblx0XHR0aGlzLnNldChub2RlLm5hbWUsIENsYXNzRGVmaW5pdGlvbi5mcm9tQVNUKG5vZGUpKTtcblx0fVxuXG5cdGFsbCgpOiBJdGVyYWJsZUl0ZXJhdG9yPENsYXNzRGVmaW5pdGlvbj4ge1xuXHRcdHJldHVybiB0aGlzLm1hcC52YWx1ZXMoKTtcblx0fVxuXG5cdHNldChuYW1lOiBzdHJpbmcsIGNsYXNzRGVmaW5pdGlvbjogQ2xhc3NEZWZpbml0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5tYXAuc2V0KG5hbWUsIGNsYXNzRGVmaW5pdGlvbik7XG5cdH1cblxuXHRnZXQobmFtZTogc3RyaW5nKTogQ2xhc3NEZWZpbml0aW9uIHtcblx0XHRjb25zdCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uIHwgbnVsbCA9IHRoaXMubWFwLmdldChuYW1lKSB8fCBudWxsO1xuXHRcdGlmICghY2xhc3NEZWYpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBDbGFzcyAke25hbWV9IG5vdCBmb3VuZC5gKTtcblx0XHR9XG5cdFx0cmV0dXJuIGNsYXNzRGVmO1xuXHR9XG5cblx0aGFzKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm1hcC5oYXMobmFtZSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEludGVyZmFjZVJlZ2lzdHJ5IHtcblx0bWFwOiBNYXA8c3RyaW5nLCBJbnRlcmZhY2VEZWZpbml0aW9uPiA9IG5ldyBNYXAoKTtcblxuXHRyZWdpc3Rlcihub2RlOiBBU1RJbnRlcmZhY2VOb2RlKTogdm9pZCB7XG5cdFx0dGhpcy5zZXQobm9kZS5uYW1lLCBJbnRlcmZhY2VEZWZpbml0aW9uLmZyb21BU1Qobm9kZSkpO1xuXHR9XG5cblx0YWxsKCk6IEl0ZXJhYmxlSXRlcmF0b3I8SW50ZXJmYWNlRGVmaW5pdGlvbj4ge1xuXHRcdHJldHVybiB0aGlzLm1hcC52YWx1ZXMoKTtcblx0fVxuXG5cdHNldChuYW1lOiBzdHJpbmcsIGludGVyZmFjZURlZmluaXRpb246IEludGVyZmFjZURlZmluaXRpb24pOiB2b2lkIHtcblx0XHR0aGlzLm1hcC5zZXQobmFtZSwgaW50ZXJmYWNlRGVmaW5pdGlvbik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEluc3RhbmNlUmVnaXN0cnkge1xuXHRwcml2YXRlIGluc3RhbmNlczogTWFwPHN0cmluZywgSW5zdGFuY2U+ID0gbmV3IE1hcDxzdHJpbmcsIEluc3RhbmNlPigpO1xuXG5cdHJlZ2lzdGVyKGluc3RhbmNlOiBJbnN0YW5jZSk6IHZvaWQge1xuXHRcdHRoaXMuaW5zdGFuY2VzLnNldChpbnN0YW5jZS5pZCwgaW5zdGFuY2UpO1xuXHR9XG5cblx0dW5yZWdpc3RlcihpbnN0YW5jZTogSW5zdGFuY2UpOiB2b2lkIHtcblx0XHR0aGlzLmluc3RhbmNlcy5kZWxldGUoaW5zdGFuY2UuaWQpO1xuXHR9XG5cblx0Z2V0KGlkOiBzdHJpbmcpOiBJbnN0YW5jZSB8IG51bGwge1xuXHRcdHJldHVybiB0aGlzLmluc3RhbmNlcy5nZXQoaWQpIHx8IG51bGw7XG5cdH1cblxuXHRhbGxJbnN0YW5jZXMoKTogSW5zdGFuY2VbXSB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy5pbnN0YW5jZXMudmFsdWVzKCkpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlUmVnaXN0cnkge1xuXHRjbGFzc1N5bWJvbHM6IE1hcDxzdHJpbmcsIENsYXNzU3ltYm9sPiA9IG5ldyBNYXAoKTtcblx0aW50ZXJmYWNlU3ltYm9sczogTWFwPHN0cmluZywgSW50ZXJmYWNlU3ltYm9sPiA9IG5ldyBNYXAoKTtcblxuXHRhbGxDbGFzc1N5bWJvbHMoKTogSXRlcmFibGVJdGVyYXRvcjxDbGFzc1N5bWJvbD4ge1xuXHRcdHJldHVybiB0aGlzLmNsYXNzU3ltYm9scy52YWx1ZXMoKTtcblx0fVxuXG5cdGFsbEludGVyZmFjZVN5bWJvbHMoKTogSXRlcmFibGVJdGVyYXRvcjxJbnRlcmZhY2VTeW1ib2w+IHtcblx0XHRyZXR1cm4gdGhpcy5pbnRlcmZhY2VTeW1ib2xzLnZhbHVlcygpO1xuXHR9XG5cblx0YWRkQ2xhc3NTeW1ib2woc3ltYm9sOiBDbGFzc1N5bWJvbCk6IHZvaWQge1xuXHRcdHRoaXMuY2xhc3NTeW1ib2xzLnNldChzeW1ib2wubmFtZSwgc3ltYm9sKTtcblx0fVxuXG5cdGFkZEludGVyZmFjZVN5bWJvbChzeW1ib2w6IEludGVyZmFjZVN5bWJvbCk6IHZvaWQge1xuXHRcdHRoaXMuaW50ZXJmYWNlU3ltYm9scy5zZXQoc3ltYm9sLm5hbWUsIHN5bWJvbCk7XG5cdH1cblxuXHRoYXNTeW1ib2wobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY2xhc3NTeW1ib2xzLmhhcyhuYW1lKSB8fCB0aGlzLmludGVyZmFjZVN5bWJvbHMuaGFzKG5hbWUpO1xuXHR9XG5cblx0cHVibGljIGdldENsYXNzU3ltYm9sKG5hbWU6IHN0cmluZyk6IENsYXNzU3ltYm9sIHtcblx0XHRjb25zdCBzeW1ib2w6IENsYXNzU3ltYm9sIHwgdW5kZWZpbmVkID0gdGhpcy5jbGFzc1N5bWJvbHMuZ2V0KG5hbWUpO1xuXHRcdGlmIChzeW1ib2wgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFN5bWJvbCAke25hbWV9IG5vdCBmb3VuZC5gKTtcblx0XHR9XG5cdFx0cmV0dXJuIHN5bWJvbDtcblx0fVxuXG5cdHB1YmxpYyBnZXRJbnRlcmFjZVN5bWJvbChuYW1lOiBzdHJpbmcpOiBJbnRlcmZhY2VTeW1ib2wge1xuXHRcdGNvbnN0IHN5bWJvbDogSW50ZXJmYWNlU3ltYm9sIHwgdW5kZWZpbmVkID0gdGhpcy5pbnRlcmZhY2VTeW1ib2xzLmdldChuYW1lKTtcblx0XHRpZiAoc3ltYm9sID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBTeW1ib2wgJHtuYW1lfSBub3QgZm91bmQuYCk7XG5cdFx0fVxuXHRcdHJldHVybiBzeW1ib2w7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE9iamVjdFJlZ2lzdHJ5IHtcblx0cHVibGljIHJlYWRvbmx5IGNsYXNzZXM6IENsYXNzUmVnaXN0cnkgPSBuZXcgQ2xhc3NSZWdpc3RyeSgpO1xuXHRwdWJsaWMgcmVhZG9ubHkgaW50ZXJmYWNlczogSW50ZXJmYWNlUmVnaXN0cnkgPSBuZXcgSW50ZXJmYWNlUmVnaXN0cnkoKTtcblx0cHVibGljIHJlYWRvbmx5IGluc3RhbmNlczogSW5zdGFuY2VSZWdpc3RyeSA9IG5ldyBJbnN0YW5jZVJlZ2lzdHJ5KCk7XG5cdHB1YmxpYyByZWFkb25seSB0eXBlczogVHlwZVJlZ2lzdHJ5ID0gbmV3IFR5cGVSZWdpc3RyeSgpO1xuXG5cdGZldGNoQWxsT2JqZWN0RGVmaW5pdGlvbnMoKTogTWFwPHN0cmluZywgQ2xhc3NEZWZpbml0aW9uIHwgSW50ZXJmYWNlRGVmaW5pdGlvbj4ge1xuXHRcdGNvbnN0IG1hcCA9IG5ldyBNYXAoKTtcblxuXHRcdGZvciAoY29uc3QgY2xhc3NEZWYgb2YgdGhpcy5pbnRlcmZhY2VzLmFsbCgpKSB7XG5cdFx0XHRtYXAuc2V0KGNsYXNzRGVmLm5hbWUsIGNsYXNzRGVmKTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGNsYXNzRGVmIG9mIHRoaXMuY2xhc3Nlcy5hbGwoKSkge1xuXHRcdFx0bWFwLnNldChjbGFzc0RlZi5uYW1lLCBjbGFzc0RlZik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1hcDtcblx0fVxuXG5cdGNvbGxlY3RBbGwoYXN0OiBBU1ROb2RlKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIGFzdC5jaGlsZHJlbikge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RJbnRlcmZhY2VOb2RlKSB7XG5cdFx0XHRcdHRoaXMuaW50ZXJmYWNlcy5yZWdpc3Rlcihub2RlKTtcblx0XHRcdH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIEFTVENsYXNzTm9kZSkge1xuXHRcdFx0XHR0aGlzLmNsYXNzZXMucmVnaXN0ZXIobm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbiIsCiAgICAiaW1wb3J0IHtcblx0QVNUQXJyYXlOb2RlLFxuXHRBU1RCaW5hcnlOb2RlLFxuXHRBU1RDYWxsTm9kZSxcblx0QVNUQ2xhc3NOb2RlLFxuXHRBU1RFeHByZXNzaW9uTm9kZSxcblx0QVNURmllbGROb2RlLFxuXHRBU1RGb3JlYWNoTm9kZSxcblx0QVNUSW5kZXhOb2RlLFxuXHRBU1RJbnRlcmZhY2VOb2RlLFxuXHRBU1RMYW1iZGFOb2RlLFxuXHRBU1RNZW1iZXJOb2RlLFxuXHRBU1RNZXRob2ROb2RlLFxuXHRBU1ROZXdOb2RlLFxuXHRBU1ROb2RlLFxuXHRBU1ROb2RlVHlwZSxcblx0QVNUUGFyYW1ldGVyTm9kZSxcblx0QVNUUmV0dXJuTm9kZSxcblx0QVNUVHlwZU5vZGUsXG5cdEFTVFVuYXJ5Tm9kZSxcblx0QVNUVmFyaWFibGVOb2RlLFxuXHRBU1RWRG9tTm9kZVxufSBmcm9tICcuLi9hc3QudHMnO1xuaW1wb3J0IHtcblx0YnVpbGRUeXBlU3Vic3RpdHV0aW9uTWFwLFxuXHRDbGFzc1JlZlR5cGUsXG5cdENsYXNzU3ltYm9sLFxuXHRGaWVsZFN5bWJvbCxcblx0SW50ZXJmYWNlUmVmVHlwZSxcblx0SW50ZXJmYWNlU3ltYm9sLFxuXHRMYW1iZGFUeXBlLFxuXHRNZXRob2RTeW1ib2wsXG5cdE1peGVkVHlwZSxcblx0TnVsbGFibGVUeXBlLFxuXHRQYXJhbWV0ZXJTeW1ib2wsXG5cdFByaW1pdGl2ZUNsYXNzVHlwZXMsXG5cdHN1YnN0aXR1dGVUeXBlLFxuXHRUeXBlLFxuXHRUeXBlUGFyYW1ldGVyU3ltYm9sLFxuXHRUeXBlcyxcblx0VHlwZVNjb3BlLFxuXHRUeXBlVmFyaWFibGUsXG5cdHdyYXBUeXBlXG59IGZyb20gXCIuL3R5cGVfb2JqZWN0c1wiO1xuaW1wb3J0IHtBdXRvYm94aW5nfSBmcm9tIFwiLi9hdXRvYm94aW5nXCI7XG5pbXBvcnQge05hdGl2ZUZ1bmN0aW9uLCBOYXRpdmVGdW5jdGlvbnN9IGZyb20gXCIuLi8uLi9saWJyYXJ5L25hdGl2ZV9mdW5jdGlvbnNcIjtcbmltcG9ydCB7R1JBTU1BUn0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcbmltcG9ydCB7dGhyb3dUeXBlRXJyb3J9IGZyb20gXCIuLi9lcnJvcnMudHNcIlxuaW1wb3J0IHtDbGFzc0RlZmluaXRpb24sIEludGVyZmFjZURlZmluaXRpb259IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcblxuXG5jb25zdCBnbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeSA9IG5ldyBOYXRpdmVGdW5jdGlvbnMoKVxuXHQuZ2V0R2xvYmFsRnVuY3Rpb25UeXBlUmVnaXN0cnkoKTtcblxuZXhwb3J0IGNsYXNzIFN0YXRlbWVudFJlc3VsdCB7XG5cdGRpZFJldHVybjogYm9vbGVhbjtcblx0cmV0dXJuVHlwZTogVHlwZSB8IG51bGw7XG5cblx0Y29uc3RydWN0b3IoZGlkUmV0dXJuOiBib29sZWFuLCByZXR1cm5UeXBlOiBUeXBlIHwgbnVsbCkge1xuXHRcdHRoaXMuZGlkUmV0dXJuID0gZGlkUmV0dXJuO1xuXHRcdHRoaXMucmV0dXJuVHlwZSA9IHJldHVyblR5cGU7XG5cdH1cblxuXHRzdGF0aWMgd2l0aFJldHVybihyZXR1cm5UeXBlOiBUeXBlKTogU3RhdGVtZW50UmVzdWx0IHtcblx0XHRyZXR1cm4gbmV3IFN0YXRlbWVudFJlc3VsdCh0cnVlLCByZXR1cm5UeXBlKTtcblx0fVxuXG5cdHN0YXRpYyBub1JldHVybigpOiBTdGF0ZW1lbnRSZXN1bHQge1xuXHRcdHJldHVybiBuZXcgU3RhdGVtZW50UmVzdWx0KGZhbHNlLCBudWxsKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVHlwZUNoZWNrZXIge1xuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cblx0Y29uc3RydWN0b3Iob2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KSB7XG5cdFx0dGhpcy5vYmplY3RSZWdpc3RyeSA9IG9iamVjdFJlZ2lzdHJ5O1xuXHR9XG5cblx0Y29sbGVjdEFsbFN5bWJvbHNGcm9tTm9kZShhc3Q6IEFTVE5vZGUpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgYXN0LmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEludGVyZmFjZU5vZGUpIHtcblx0XHRcdFx0dGhpcy5yZWdpc3RlckludGVyZmFjZVN5bWJvbChub2RlKVxuXHRcdFx0fSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgQVNUQ2xhc3NOb2RlKSB7XG5cdFx0XHRcdHRoaXMucmVnaXN0ZXJDbGFzc1N5bWJvbChub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjb2xsZWN0QWxsU3ltYm9sc0Zyb21SZWdpc3RyeShvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpOiB2b2lkIHtcblx0XHRjb25zdCBvYmplY3REZWZpbml0aW9uczogTWFwSXRlcmF0b3I8Q2xhc3NEZWZpbml0aW9uIHwgSW50ZXJmYWNlRGVmaW5pdGlvbj4gPSBvYmplY3RSZWdpc3RyeVxuXHRcdFx0LmZldGNoQWxsT2JqZWN0RGVmaW5pdGlvbnMoKVxuXHRcdFx0LnZhbHVlcygpO1xuXG5cdFx0Zm9yIChsZXQgb2JqZWN0RGVmIG9mIG9iamVjdERlZmluaXRpb25zKSB7XG5cdFx0XHRpZiAob2JqZWN0RGVmIGluc3RhbmNlb2YgSW50ZXJmYWNlRGVmaW5pdGlvbikge1xuXHRcdFx0XHR0aGlzLnJlZ2lzdGVySW50ZXJmYWNlU3ltYm9sKG9iamVjdERlZi5ub2RlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucmVnaXN0ZXJDbGFzc1N5bWJvbChvYmplY3REZWYubm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y2hlY2soYXN0OiBBU1ROb2RlKTogdm9pZCB7XG5cdFx0dGhpcy5jb2xsZWN0QWxsU3ltYm9sc0Zyb21Ob2RlKGFzdCk7XG5cdFx0dGhpcy52YWxpZGF0ZUluaGVyaXRhbmNlKCk7XG5cdFx0dGhpcy5jaGVja1Byb2dyYW0oYXN0KTtcblx0XHR0aGlzLmNoZWNrSW50ZXJmYWNlQm9kaWVzKCk7XG5cdFx0dGhpcy5jaGVja0NsYXNzZXNCb2RpZXMoKTtcblx0XHR0aGlzLmNoZWNrQ2xhc3Nlc0ltcGxlbWVudHMoKTtcblx0fVxuXG5cdHByaXZhdGUgdmFsaWRhdGVJbmhlcml0YW5jZSgpIHtcblx0XHRmb3IgKGNvbnN0IGNsYXNzU3ltYm9sIG9mIHRoaXMub2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5hbGwoKSkge1xuXHRcdFx0aWYgKGNsYXNzU3ltYm9sLnN1cGVyQ2xhc3MgJiYgIXRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKGNsYXNzU3ltYm9sLnN1cGVyQ2xhc3MpKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBVbmtub3duIHN1cGVyY2xhc3MgJHtjbGFzc1N5bWJvbC5zdXBlckNsYXNzfWAsIGNsYXNzU3ltYm9sLm5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tQcm9ncmFtKGFzdDogQVNUTm9kZSk6IHZvaWQge1xuXHRcdGNvbnN0IHNjb3BlID0gbmV3IFR5cGVTY29wZSgpO1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdHRoaXMuY2hlY2tTdGF0ZW1lbnQobm9kZSwgc2NvcGUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tDbGFzc2VzQm9kaWVzKCk6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qgb2JqZWN0U3ltYm9sIG9mIHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuYWxsQ2xhc3NTeW1ib2xzKCkpIHtcblx0XHRcdGNvbnN0IGluc3RhbmNlU2NvcGUgPSBuZXcgVHlwZVNjb3BlKCk7XG5cdFx0XHRpbnN0YW5jZVNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgPSBvYmplY3RTeW1ib2w7XG5cblx0XHRcdG9iamVjdFN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5mb3JFYWNoKHR5cGVQYXJhbWV0ZXIgPT4ge1xuXHRcdFx0XHRpbnN0YW5jZVNjb3BlLmRlZmluZVR5cGVCaW5kaW5nKFxuXHRcdFx0XHRcdHR5cGVQYXJhbWV0ZXIubmFtZSxcblx0XHRcdFx0XHRuZXcgVHlwZVZhcmlhYmxlKHR5cGVQYXJhbWV0ZXIubmFtZSlcblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAob2JqZWN0U3ltYm9sLmNvbnN0cnVjdG9yTWV0aG9kU3ltYm9sKSB7XG5cdFx0XHRcdGNvbnN0IGNvbnN0cnVjdG9yU3ltYm9sID0gb2JqZWN0U3ltYm9sLmNvbnN0cnVjdG9yTWV0aG9kU3ltYm9sO1xuXHRcdFx0XHRjb25zdCBjb25zdHJ1Y3RvclNjb3BlID0gbmV3IFR5cGVTY29wZShpbnN0YW5jZVNjb3BlKTtcblxuXHRcdFx0XHRvYmplY3RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMuZm9yRWFjaCh0eXBlUGFyYW1ldGVyU3ltYm9sID0+IHtcblx0XHRcdFx0XHRjb25zdHJ1Y3RvclNjb3BlLmRlZmluZVR5cGVCaW5kaW5nKFxuXHRcdFx0XHRcdFx0dHlwZVBhcmFtZXRlclN5bWJvbC5uYW1lLFxuXHRcdFx0XHRcdFx0bmV3IFR5cGVWYXJpYWJsZSh0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Zm9yIChjb25zdCBwYXJhbWV0ZXJTeW1ib2wgb2YgY29uc3RydWN0b3JTeW1ib2wucGFyYW1ldGVyU3ltYm9scykge1xuXHRcdFx0XHRcdGNvbnN0cnVjdG9yU2NvcGUuZGVmaW5lVHlwZShwYXJhbWV0ZXJTeW1ib2wubmFtZSwgcGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5jaGVja0JvZHkoY29uc3RydWN0b3JTeW1ib2wuYm9keSwgY29uc3RydWN0b3JTY29wZSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoY29uc3QgbWV0aG9kU3ltYm9sIG9mIG9iamVjdFN5bWJvbC5pbnN0YW5jZU1ldGhvZFN5bWJvbHMudmFsdWVzKCkpIHtcblx0XHRcdFx0Y29uc3QgbWV0aG9kU2NvcGUgPSBuZXcgVHlwZVNjb3BlKGluc3RhbmNlU2NvcGUpO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5mb3JFYWNoKHR5cGVQYXJhbWV0ZXJTeW1ib2wgPT4ge1xuXHRcdFx0XHRcdG1ldGhvZFNjb3BlLmRlZmluZVR5cGVCaW5kaW5nKFxuXHRcdFx0XHRcdFx0dHlwZVBhcmFtZXRlclN5bWJvbC5uYW1lLFxuXHRcdFx0XHRcdFx0bmV3IFR5cGVWYXJpYWJsZSh0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Zm9yIChjb25zdCBwYXJhbWV0ZXJTeW1ib2wgb2YgbWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMpIHtcblx0XHRcdFx0XHRtZXRob2RTY29wZS5kZWZpbmVUeXBlKHBhcmFtZXRlclN5bWJvbC5uYW1lLCBwYXJhbWV0ZXJTeW1ib2wucGFyYW1ldGVyVHlwZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBoYXNCb2R5ID0gbWV0aG9kU3ltYm9sLmJvZHkgJiYgbWV0aG9kU3ltYm9sLmJvZHkubGVuZ3RoID4gMDtcblx0XHRcdFx0aWYgKGhhc0JvZHkpIHtcblx0XHRcdFx0XHRjb25zdCBhY3R1YWwgPSB0aGlzLmNoZWNrQm9keShtZXRob2RTeW1ib2wuYm9keSwgbWV0aG9kU2NvcGUpO1xuXHRcdFx0XHRcdHRoaXMuY2hlY2tSZXR1cm5UeXBlKG1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlLCBhY3R1YWwsIG1ldGhvZFN5bWJvbC5ub2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGNvbnN0IG1ldGhvZFN5bWJvbCBvZiBvYmplY3RTeW1ib2wuc3RhdGljTWV0aG9kU3ltYm9scy52YWx1ZXMoKSkge1xuXHRcdFx0XHRjb25zdCBzdGF0aWNTY29wZSA9IG5ldyBUeXBlU2NvcGUoaW5zdGFuY2VTY29wZSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmZvckVhY2godHlwZVBhcmFtZXRlclN5bWJvbCA9PiB7XG5cdFx0XHRcdFx0c3RhdGljU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcoXG5cdFx0XHRcdFx0XHR0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUsXG5cdFx0XHRcdFx0XHRuZXcgVHlwZVZhcmlhYmxlKHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRmb3IgKGNvbnN0IHBhcmFtZXRlclN5bWJvbCBvZiBtZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9scykge1xuXHRcdFx0XHRcdHN0YXRpY1Njb3BlLmRlZmluZVR5cGUocGFyYW1ldGVyU3ltYm9sLm5hbWUsIHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGhhc0JvZHkgPSBtZXRob2RTeW1ib2wuYm9keSAmJiBtZXRob2RTeW1ib2wuYm9keS5sZW5ndGggPiAwO1xuXHRcdFx0XHRpZiAoaGFzQm9keSkge1xuXHRcdFx0XHRcdGNvbnN0IGFjdHVhbCA9IHRoaXMuY2hlY2tCb2R5KG1ldGhvZFN5bWJvbC5ib2R5LCBzdGF0aWNTY29wZSk7XG5cdFx0XHRcdFx0dGhpcy5jaGVja1JldHVyblR5cGUobWV0aG9kU3ltYm9sLnJldHVyblR5cGUsIGFjdHVhbCwgbWV0aG9kU3ltYm9sLm5vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0ludGVyZmFjZUJvZGllcygpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IG9iamVjdFN5bWJvbCBvZiB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmFsbEludGVyZmFjZVN5bWJvbHMoKSkge1xuXHRcdFx0Y29uc3QgaW5zdGFuY2VTY29wZSA9IG5ldyBUeXBlU2NvcGUoKTtcblx0XHRcdGluc3RhbmNlU2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCA9IG9iamVjdFN5bWJvbDtcblxuXHRcdFx0b2JqZWN0U3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmZvckVhY2godHlwZVBhcmFtZXRlciA9PiB7XG5cdFx0XHRcdGluc3RhbmNlU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcoXG5cdFx0XHRcdFx0dHlwZVBhcmFtZXRlci5uYW1lLFxuXHRcdFx0XHRcdG5ldyBUeXBlVmFyaWFibGUodHlwZVBhcmFtZXRlci5uYW1lKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGZvciAoY29uc3QgbWV0aG9kU3ltYm9sIG9mIG9iamVjdFN5bWJvbC5pbnN0YW5jZU1ldGhvZFN5bWJvbHMudmFsdWVzKCkpIHtcblx0XHRcdFx0Y29uc3QgbWV0aG9kU2NvcGUgPSBuZXcgVHlwZVNjb3BlKGluc3RhbmNlU2NvcGUpO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5mb3JFYWNoKHR5cGVQYXJhbWV0ZXJTeW1ib2wgPT4ge1xuXHRcdFx0XHRcdG1ldGhvZFNjb3BlLmRlZmluZVR5cGVCaW5kaW5nKFxuXHRcdFx0XHRcdFx0dHlwZVBhcmFtZXRlclN5bWJvbC5uYW1lLFxuXHRcdFx0XHRcdFx0bmV3IFR5cGVWYXJpYWJsZSh0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Zm9yIChjb25zdCBwYXJhbWV0ZXJTeW1ib2wgb2YgbWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMpIHtcblx0XHRcdFx0XHRtZXRob2RTY29wZS5kZWZpbmVUeXBlKHBhcmFtZXRlclN5bWJvbC5uYW1lLCBwYXJhbWV0ZXJTeW1ib2wucGFyYW1ldGVyVHlwZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBoYXNCb2R5ID0gbWV0aG9kU3ltYm9sLmJvZHkgJiYgbWV0aG9kU3ltYm9sLmJvZHkubGVuZ3RoID4gMDtcblx0XHRcdFx0aWYgKGhhc0JvZHkpIHtcblx0XHRcdFx0XHRjb25zdCBhY3R1YWwgPSB0aGlzLmNoZWNrQm9keShtZXRob2RTeW1ib2wuYm9keSwgbWV0aG9kU2NvcGUpO1xuXHRcdFx0XHRcdHRoaXMuY2hlY2tSZXR1cm5UeXBlKG1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlLCBhY3R1YWwsIG1ldGhvZFN5bWJvbC5ub2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tDbGFzc2VzSW1wbGVtZW50cygpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IGNsYXNzU3ltYm9sIG9mIHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuYWxsQ2xhc3NTeW1ib2xzKCkpIHtcblx0XHRcdGZvciAoY29uc3QgaW50ZXJmYWNlUmVmVHlwZSBvZiBjbGFzc1N5bWJvbC5pbXBsZW1lbnRzSW50ZXJmYWNlcykge1xuXHRcdFx0XHR0aGlzLmNoZWNrSW1wbGVtZW50c0ludGVyZmFjZShjbGFzc1N5bWJvbCwgaW50ZXJmYWNlUmVmVHlwZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0ltcGxlbWVudHNJbnRlcmZhY2UoY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sLCBpbnRlcmZhY2VSZWZUeXBlOiBJbnRlcmZhY2VSZWZUeXBlKTogdm9pZCB7XG5cdFx0Y29uc3QgaW50ZXJmYWNlU3ltYm9sID0gaW50ZXJmYWNlUmVmVHlwZS5pbnRlcmZhY2VTeW1ib2w7XG5cblx0XHRjb25zdCBzdWJzdGl0dXRpb25NYXAgPSBidWlsZFR5cGVTdWJzdGl0dXRpb25NYXAoXG5cdFx0XHRpbnRlcmZhY2VTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMsXG5cdFx0XHRpbnRlcmZhY2VSZWZUeXBlLnR5cGVBcmd1bWVudHNcblx0XHQpO1xuXG5cdFx0Zm9yIChjb25zdCBpbnRlcmZhY2VNZXRob2RTeW1ib2wgb2YgaW50ZXJmYWNlU3ltYm9sLmluc3RhbmNlTWV0aG9kU3ltYm9scy52YWx1ZXMoKSkge1xuXHRcdFx0Y29uc3QgY2xhc3NNZXRob2RTeW1ib2wgPSB0aGlzLnJlc29sdmVJbnN0YW5jZU1ldGhvZGUoXG5cdFx0XHRcdGNsYXNzU3ltYm9sLFxuXHRcdFx0XHRpbnRlcmZhY2VNZXRob2RTeW1ib2wubmFtZVxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKCFjbGFzc01ldGhvZFN5bWJvbCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihcblx0XHRcdFx0XHRgQ2xhc3MgJHtjbGFzc1N5bWJvbC5uYW1lfSBkb2VzIG5vdCBpbXBsZW1lbnQgbWV0aG9kICR7aW50ZXJmYWNlTWV0aG9kU3ltYm9sLm5hbWV9IGZyb20gaW50ZXJmYWNlICR7aW50ZXJmYWNlU3ltYm9sLm5hbWV9YCxcblx0XHRcdFx0XHRjbGFzc1N5bWJvbC5ub2RlXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuY2hlY2tNZXRob2RDb21wYXRpYmlsaXR5KFxuXHRcdFx0XHRjbGFzc01ldGhvZFN5bWJvbCxcblx0XHRcdFx0aW50ZXJmYWNlTWV0aG9kU3ltYm9sLFxuXHRcdFx0XHRzdWJzdGl0dXRpb25NYXBcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja01ldGhvZENvbXBhdGliaWxpdHkoY2xhc3NNZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCwgaW50ZXJmYWNlTWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wsIHN1YnN0aXR1dGlvbk1hcDogTWFwPHN0cmluZywgVHlwZT4pOiB2b2lkIHtcblx0XHRpZiAoY2xhc3NNZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9scy5sZW5ndGggIT09IGludGVyZmFjZU1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYE1ldGhvZCAke2NsYXNzTWV0aG9kU3ltYm9sLm5hbWV9IGhhcyB3cm9uZyBwYXJhbWV0ZXIgY291bnRgKTtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGludGVyZmFjZU1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBwYXJhbWV0ZXJTeW1ib2w6IFBhcmFtZXRlclN5bWJvbCB8IG51bGwgPSBpbnRlcmZhY2VNZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9sc1tpXSB8fCBudWxsO1xuXG5cdFx0XHRpZiAoIXBhcmFtZXRlclN5bWJvbCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgTWV0aG9kICR7Y2xhc3NNZXRob2RTeW1ib2wubmFtZX0gaGFzIHRvbyBtYW55IHBhcmFtZXRlcnNgKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGV4cGVjdGVkVHlwZTogVHlwZSA9IHN1YnN0aXR1dGVUeXBlKHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlLCBzdWJzdGl0dXRpb25NYXApO1xuXG5cdFx0XHRjb25zdCBhY3R1YWxUeXBlOiBUeXBlID0gcGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGU7XG5cblx0XHRcdGlmICghZXhwZWN0ZWRUeXBlLmFjY2VwdHMoYWN0dWFsVHlwZSkpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYFBhcmFtZXRlciAke2kgKyAxfSBvZiAke2NsYXNzTWV0aG9kU3ltYm9sLm5hbWV9IGluY29tcGF0aWJsZSB3aXRoIGludGVyZmFjZWApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IGV4cGVjdGVkUmV0dXJuOiBUeXBlID0gc3Vic3RpdHV0ZVR5cGUoaW50ZXJmYWNlTWV0aG9kU3ltYm9sLnJldHVyblR5cGUsIHN1YnN0aXR1dGlvbk1hcCk7XG5cblx0XHRpZiAoIWV4cGVjdGVkUmV0dXJuLmFjY2VwdHMoY2xhc3NNZXRob2RTeW1ib2wucmV0dXJuVHlwZSkpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBSZXR1cm4gdHlwZSBvZiAke2NsYXNzTWV0aG9kU3ltYm9sLm5hbWV9IGluY29tcGF0aWJsZSB3aXRoIGludGVyZmFjZWApO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tTdGF0ZW1lbnQobm9kZTogQVNUTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFN0YXRlbWVudFJlc3VsdCB7XG5cdFx0c3dpdGNoIChub2RlLnR5cGUpIHtcblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuUkVUVVJOOlxuXHRcdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVFJldHVybk5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gU3RhdGVtZW50UmVzdWx0LndpdGhSZXR1cm4oXG5cdFx0XHRcdFx0XHR0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLmFyZ3VtZW50LCBzY29wZSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5WQVJJQUJMRTpcblx0XHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RWYXJpYWJsZU5vZGUpIHtcblx0XHRcdFx0XHR0aGlzLmNoZWNrVmFyaWFibGUobm9kZSwgc2NvcGUpO1xuXHRcdFx0XHRcdHJldHVybiBTdGF0ZW1lbnRSZXN1bHQubm9SZXR1cm4oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuRk9SRUFDSDpcblx0XHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RGb3JlYWNoTm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiBTdGF0ZW1lbnRSZXN1bHQud2l0aFJldHVybihcblx0XHRcdFx0XHRcdHRoaXMuY2hlY2tGb3JlYWNoKG5vZGUsIHNjb3BlKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkVYUFJFU1NJT046XG5cdFx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNURXhwcmVzc2lvbk5vZGUpIHtcblx0XHRcdFx0XHR0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLmV4cHIsIHNjb3BlKTtcblx0XHRcdFx0XHRyZXR1cm4gU3RhdGVtZW50UmVzdWx0Lm5vUmV0dXJuKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFN0YXRlbWVudFJlc3VsdC5ub1JldHVybigpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1ZhcmlhYmxlKG5vZGU6IEFTVFZhcmlhYmxlTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IHZvaWQge1xuXHRcdGNvbnN0IGRlY2xhcmVkVHlwZTogVHlwZSB8IG51bGwgPSBub2RlLnR5cGVBbm5vdGF0aW9uXG5cdFx0XHQ/IHRoaXMud3JhcFR5cGUobm9kZS50eXBlQW5ub3RhdGlvbiwgc2NvcGUpXG5cdFx0XHQ6IG51bGw7XG5cblx0XHRjb25zdCBhY3R1YWxUeXBlOiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5pbml0LCBzY29wZSwgZGVjbGFyZWRUeXBlKTtcblxuXHRcdGlmIChkZWNsYXJlZFR5cGUgJiYgIWRlY2xhcmVkVHlwZS5hY2NlcHRzKGFjdHVhbFR5cGUpKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgVHlwZSBtaXNtYXRjaDogJHtkZWNsYXJlZFR5cGV9IDw+ICR7YWN0dWFsVHlwZX1gLCBub2RlKTtcblx0XHR9XG5cblx0XHRzY29wZS5kZWZpbmVUeXBlKG5vZGUubmFtZSwgZGVjbGFyZWRUeXBlID8/IGFjdHVhbFR5cGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0ZvcmVhY2gobm9kZTogQVNURm9yZWFjaE5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRsZXQgaXRlcmFibGVUeXBlOiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5pdGVyYWJsZSwgc2NvcGUpO1xuXG5cdFx0aXRlcmFibGVUeXBlID0gQXV0b2JveGluZy5hdXRvYm94SWZOZWVkZWQoaXRlcmFibGVUeXBlLCB0aGlzLm9iamVjdFJlZ2lzdHJ5KTtcblxuXHRcdGlmIChpdGVyYWJsZVR5cGUgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUgJiYgaXRlcmFibGVUeXBlLmNsYXNzU3ltYm9sLm5hbWUgPT09ICdBcnJheScpIHtcblx0XHRcdGlmIChpdGVyYWJsZVR5cGUudHlwZUFyZ3VtZW50cy5sZW5ndGggIT09IDEpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoJ0FycmF5IGluIGZvcmVhY2ggbXVzc3QgaGF2ZSBleGFjdGx5IG9uZSB0eXBlIGFyZ3VtZW50LicsIG5vZGUuaXRlcmFibGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBlbGVtZW50VHlwZTogVHlwZSB8IG51bGwgPSBpdGVyYWJsZVR5cGUudHlwZUFyZ3VtZW50c1swXSB8fCBudWxsO1xuXG5cdFx0XHRpZiAoZWxlbWVudFR5cGUgPT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoJ0FycmF5IGluIGZvcmVhY2ggbXVzdCBoYXZlIGV4YWN0bHkgb25lIHR5cGUgYXJndW1lbnQuJywgbm9kZS5pdGVyYWJsZSk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGxvb3BTY29wZSA9IG5ldyBUeXBlU2NvcGUoc2NvcGUpO1xuXHRcdFx0bG9vcFNjb3BlLmRlZmluZVR5cGUobm9kZS5pdGVyYXRvciwgZWxlbWVudFR5cGUpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy5jaGVja0JvZHkobm9kZS5ib2R5LCBsb29wU2NvcGUpO1xuXG5cdFx0fVxuXG5cdFx0dGhpcy50eXBlRXJyb3IoYGZvcmVhY2ggZXhwZWN0cyBBcnJheTxUPiwgZ290ICR7aXRlcmFibGVUeXBlLnRvU3RyaW5nKCl9YCwgbm9kZS5pdGVyYWJsZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrRXhwcmVzc2lvbihleHByOiBBU1ROb2RlIHwgbnVsbCwgc2NvcGU6IFR5cGVTY29wZSwgZXhwZWN0ZWRUeXBlOiBUeXBlIHwgbnVsbCA9IG51bGwpOiBUeXBlIHtcblx0XHRpZiAoZXhwciA9PT0gbnVsbCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoJ0V4cHJlc3Npb24gZXhwZWN0ZWQsIGdvdCBudWxsLicsIGV4cHIpO1xuXHRcdH1cblxuXHRcdHN3aXRjaCAoZXhwci50eXBlKSB7XG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLk5VTUJFUjpcblx0XHRcdFx0cmV0dXJuIFR5cGVzLk5VTUJFUjtcblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5TVFJJTkc6XG5cdFx0XHRcdHJldHVybiBUeXBlcy5TVFJJTkc7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuQk9PTEVBTjpcblx0XHRcdFx0cmV0dXJuIFR5cGVzLkJPT0xFQU47XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuTlVMTDpcblx0XHRcdFx0cmV0dXJuIFR5cGVzLk5VTEw7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuVkRPTToge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVFZEb21Ob2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tWRG9tTm9kZShleHByKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5BUlJBWToge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVEFycmF5Tm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrQXJyYXlFeHByZXNzaW9uKGV4cHIsIHNjb3BlLCBleHBlY3RlZFR5cGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLklOREVYOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUSW5kZXhOb2RlKSB7XG5cdFx0XHRcdFx0Y29uc3Qgb2JqZWN0VHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKGV4cHIub2JqZWN0LCBzY29wZSk7XG5cdFx0XHRcdFx0Y29uc3QgaW5kZXggPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihleHByLmluZGV4LCBzY29wZSk7XG5cblx0XHRcdFx0XHRpZiAob2JqZWN0VHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG9iamVjdFR5cGUudHlwZUFyZ3VtZW50c1swXSB8fCBUeXBlcy5NSVhFRDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGluZGV4ICR7b2JqZWN0VHlwZS5uYW1lfSB3aXRoICR7aW5kZXgubmFtZX1gLCBleHByKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5VTkFSWToge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVFVuYXJ5Tm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrVW5hcnlFeHByZXNzaW9uKGV4cHIsIHNjb3BlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5NRU1CRVI6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RNZW1iZXJOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tNZW1iZXJFeHByZXNzaW9uKGV4cHIsIHNjb3BlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5USElTOiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrVGhpc0V4cHJlc3Npb24oZXhwciwgc2NvcGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLklERU5USUZJRVI6XG5cdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrSWRlbnRpZmllckV4cHJlc3Npb24oZXhwciwgc2NvcGUpO1xuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLk5FVzoge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVE5ld05vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja05ld0V4cHJlc3Npb24oZXhwciwgc2NvcGUsIGV4cGVjdGVkVHlwZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuQklOQVJZOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQmluYXJ5Tm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrQmluYXJ5RXhwcmVzc2lvbihleHByLCBzY29wZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuTEFNQkRBOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTGFtYmRhTm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrTGFtYmRhRXhwcmVzc2lvbihleHByLCBzY29wZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuQ0FMTDoge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVENhbGxOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tDYWxsRXhwcmVzc2lvbihleHByLCBzY29wZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFR5cGVzLk1JWEVEO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0JpbmFyeUV4cHJlc3Npb24oZXhwcjogQVNUQmluYXJ5Tm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGNvbnN0IGxlZnQ6IFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihleHByLmxlZnQsIHNjb3BlKTtcblx0XHRjb25zdCByaWdodDogVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKGV4cHIucmlnaHQsIHNjb3BlKTtcblx0XHRjb25zdCBvcDogc3RyaW5nID0gZXhwci5vcGVyYXRvcjtcblxuXHRcdGlmIChsZWZ0IGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlICYmIHJpZ2h0IGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0XHRpZiAobGVmdC5hY2NlcHRzKHJpZ2h0KSkge1xuXHRcdFx0XHRyZXR1cm4gbGVmdDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoR1JBTU1BUi5BUklUSE1FVElDLmluY2x1ZGVzKG9wKSkge1xuXHRcdFx0aWYgKGxlZnQuYWNjZXB0cyhUeXBlcy5OVU1CRVIpICYmIHJpZ2h0LmFjY2VwdHMoVHlwZXMuTlVNQkVSKSkge1xuXHRcdFx0XHRyZXR1cm4gVHlwZXMuTlVNQkVSO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGxlZnQuYWNjZXB0cyhUeXBlcy5TVFJJTkcpIHx8IHJpZ2h0LmFjY2VwdHMoVHlwZXMuU1RSSU5HKSkge1xuXHRcdFx0XHRyZXR1cm4gVHlwZXMuU1RSSU5HO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYEFyaXRobWV0aWMgb3BlcmF0b3IgJyR7b3B9JyByZXF1aXJlcyBudW1iZXJzYCwgZXhwcik7XG5cdFx0fVxuXG5cdFx0aWYgKEdSQU1NQVIuQ09NUEFSSVNPTi5pbmNsdWRlcyhvcCkpIHtcblx0XHRcdGlmIChsZWZ0LmFjY2VwdHMoVHlwZXMuTlVNQkVSKSAmJiByaWdodC5hY2NlcHRzKFR5cGVzLk5VTUJFUikpIHtcblx0XHRcdFx0cmV0dXJuIFR5cGVzLkJPT0xFQU47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQ29tcGFyaXNvbiAnJHtvcH0nIHJlcXVpcmVzIG51bWJlcnNgLCBleHByKTtcblx0XHR9XG5cblx0XHRpZiAoR1JBTU1BUi5FUVVBTElUWS5pbmNsdWRlcyhvcCkpIHtcblx0XHRcdGlmIChsZWZ0LmFjY2VwdHMocmlnaHQpKSB7XG5cdFx0XHRcdHJldHVybiBUeXBlcy5CT09MRUFOO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBjb21wYXJlICR7bGVmdC5uYW1lfSB3aXRoICR7cmlnaHQubmFtZX1gLCBleHByKTtcblx0XHR9XG5cblx0XHRpZiAoR1JBTU1BUi5MT0dJQ0FMLmluY2x1ZGVzKG9wKSkge1xuXHRcdFx0aWYgKGxlZnQuYWNjZXB0cyhUeXBlcy5CT09MRUFOKSAmJiByaWdodC5hY2NlcHRzKFR5cGVzLkJPT0xFQU4pKSB7XG5cdFx0XHRcdHJldHVybiBUeXBlcy5CT09MRUFOO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYExvZ2ljYWwgb3BlcmF0b3IgJyR7b3B9JyByZXF1aXJlcyBib29sZWFuc2AsIGV4cHIpO1xuXHRcdH1cblxuXHRcdHRoaXMudHlwZUVycm9yKGBJbnZhbGlkIGJpbmFyeSBvcGVyYXRpb25gLCBleHByKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tGaWVsZEFjY2Vzcyhub2RlOiBBU1RNZW1iZXJOb2RlLCBjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wsIGZpZWxkU3ltYm9sOiBGaWVsZFN5bWJvbCwgc2NvcGU6IFR5cGVTY29wZSk6IHZvaWQge1xuXHRcdGlmIChmaWVsZFN5bWJvbC5pc1B1YmxpYykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICghc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBhY2Nlc3MgcHJpdmF0ZSBtZW1iZXIgJHtub2RlLnByb3BlcnR5fSBvZiAke2NsYXNzU3ltYm9sLm5hbWV9YCwgbm9kZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgIT09IGZpZWxkU3ltYm9sLm93bmVyKSB7XG5cdFx0XHRpZiAoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCBpbnN0YW5jZW9mIENsYXNzU3ltYm9sXG5cdFx0XHRcdCYmIHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wuc3VwZXJDbGFzc1N5bWJvbCAhPT0gZmllbGRTeW1ib2wub3duZXIpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBhY2Nlc3MgcHJpdmF0ZSBtZW1iZXIgJHtub2RlLnByb3BlcnR5fSBvZiAke2NsYXNzU3ltYm9sLm5hbWV9YCwgbm9kZSk7XG5cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrSW5zdGFuY2VNZXRob2RBY2Nlc3Mobm9kZTogQVNUTWVtYmVyTm9kZSwgY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sLCBtZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCwgc2NvcGU6IFR5cGVTY29wZSk6IHZvaWQge1xuXHRcdGlmIChtZXRob2RTeW1ib2wuaXNQdWJsaWMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIXNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgYWNjZXNzIHByaXZhdGUgbWV0aG9kICR7bm9kZS5wcm9wZXJ0eX0gb2YgJHtjbGFzc1N5bWJvbC5uYW1lfWAsIG5vZGUpO1xuXHRcdH1cblxuXHRcdGlmIChzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sICE9PSBtZXRob2RTeW1ib2wub3duZXIpIHtcblx0XHRcdGlmIChzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sIGluc3RhbmNlb2YgQ2xhc3NTeW1ib2xcblx0XHRcdFx0JiYgc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbC5zdXBlckNsYXNzU3ltYm9sICE9PSBtZXRob2RTeW1ib2wub3duZXIpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBhY2Nlc3MgcHJpdmF0ZSBtZXRob2QgJHtub2RlLnByb3BlcnR5fSBvZiAke2NsYXNzU3ltYm9sLm5hbWV9YCwgbm9kZSk7XG5cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrU3RhdGljTWV0aG9kQWNjZXNzKGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCwgbWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wsIHNjb3BlOiBUeXBlU2NvcGUpOiB2b2lkIHtcblx0XHRpZiAoIW1ldGhvZFN5bWJvbC5pc1N0YXRpYykge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBjYWxsIGluc3RhbmNlIG1ldGhvZCAke2NsYXNzU3ltYm9sLm5hbWV9LiR7bWV0aG9kU3ltYm9sLm5hbWV9IGFzIHN0YXRpYyBtZXRob2RgKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAobWV0aG9kU3ltYm9sLmlzUHVibGljKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCFzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGFjY2VzcyBwcml2YXRlIG1ldGhvZCAke21ldGhvZFN5bWJvbC5uYW1lfSBvZiAke2NsYXNzU3ltYm9sLm5hbWV9YCxcblx0XHRcdCAgICAgICAgICAgICAgIG1ldGhvZFN5bWJvbC5ub2RlKTtcblx0XHR9XG5cblx0XHRpZiAoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCAhPT0gbWV0aG9kU3ltYm9sLm93bmVyKSB7XG5cdFx0XHRpZiAoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCBpbnN0YW5jZW9mIENsYXNzU3ltYm9sXG5cdFx0XHRcdCYmIHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wuc3VwZXJDbGFzc1N5bWJvbCAhPT0gbWV0aG9kU3ltYm9sLm93bmVyKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgYWNjZXNzIHByaXZhdGUgbWV0aG9kICR7bWV0aG9kU3ltYm9sLm5hbWV9IG9mICR7Y2xhc3NTeW1ib2wubmFtZX1gLFxuXHRcdFx0XHQgICAgICAgICAgICAgICBtZXRob2RTeW1ib2wubm9kZSk7XG5cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrTWVtYmVyRXhwcmVzc2lvbihub2RlOiBBU1RNZW1iZXJOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0Y29uc3Qgb2JqZWN0VHlwZTogVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKG5vZGUub2JqZWN0LCBzY29wZSk7XG5cblx0XHRpZiAob2JqZWN0VHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSkge1xuXHRcdFx0Y29uc3QgY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sID0gb2JqZWN0VHlwZS5jbGFzc1N5bWJvbDtcblxuXHRcdFx0Y29uc3QgaW5zdGFuY2VGaWVsZFN5bWJvbDogRmllbGRTeW1ib2wgfCBudWxsID0gY2xhc3NTeW1ib2wucmVzb2x2ZUluc3RhbmNlRmllbGRTeW1ib2wobm9kZS5wcm9wZXJ0eSk7XG5cdFx0XHRpZiAoaW5zdGFuY2VGaWVsZFN5bWJvbCkge1xuXHRcdFx0XHR0aGlzLmNoZWNrRmllbGRBY2Nlc3Mobm9kZSwgY2xhc3NTeW1ib2wsIGluc3RhbmNlRmllbGRTeW1ib2wsIHNjb3BlKTtcblx0XHRcdFx0cmV0dXJuIGluc3RhbmNlRmllbGRTeW1ib2wuZmllbGRUeXBlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzdGF0aWNGaWVsZFN5bWJvbDogRmllbGRTeW1ib2wgfCBudWxsID0gY2xhc3NTeW1ib2wucmVzb2x2ZVN0YXRpY0ZpZWxkU3ltYm9sKG5vZGUucHJvcGVydHkpO1xuXHRcdFx0aWYgKHN0YXRpY0ZpZWxkU3ltYm9sKSB7XG5cdFx0XHRcdHRoaXMuY2hlY2tGaWVsZEFjY2Vzcyhub2RlLCBjbGFzc1N5bWJvbCwgc3RhdGljRmllbGRTeW1ib2wsIHNjb3BlKTtcblx0XHRcdFx0cmV0dXJuIHN0YXRpY0ZpZWxkU3ltYm9sLmZpZWxkVHlwZTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFVua25vd24gbWVtYmVyICR7bm9kZS5wcm9wZXJ0eX1gLCBub2RlKTtcblx0XHR9XG5cblx0XHR0aGlzLnR5cGVFcnJvcihcIkNhbm5vdCBhY2Nlc3MgbWVtYmVyIG9mIG5vbi1vYmplY3RcIiwgbm9kZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrVGhpc0V4cHJlc3Npb24obm9kZTogQVNUTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IENsYXNzUmVmVHlwZSB7XG5cdFx0aWYgKHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgaW5zdGFuY2VvZiBDbGFzc1N5bWJvbCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDbGFzc1JlZlR5cGUoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCk7XG5cdFx0fVxuXHRcdHRoaXMudHlwZUVycm9yKCd0aGlzIG91dHNpZGUgb2YgY2xhc3MnLCBub2RlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlOiBBU1ROb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0aWYgKHNjb3BlLmhhc1R5cGUobm9kZS5uYW1lKSkge1xuXHRcdFx0cmV0dXJuIHNjb3BlLmdldFR5cGUobm9kZS5uYW1lKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKG5vZGUubmFtZSkpIHtcblx0XHRcdHJldHVybiBuZXcgQ2xhc3NSZWZUeXBlKHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2wobm9kZS5uYW1lKSk7XG5cdFx0fVxuXHRcdHRoaXMudHlwZUVycm9yKGBVbmRlZmluZWQgaWRlbnRpZmllciAke25vZGUubmFtZX1gLCBub2RlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tOZXdFeHByZXNzaW9uKG5vZGU6IEFTVE5ld05vZGUsIHNjb3BlOiBUeXBlU2NvcGUsIGV4cGVjdGVkVHlwZTogVHlwZSB8IG51bGwgPSBudWxsKTogQ2xhc3NSZWZUeXBlIHtcblx0XHRjb25zdCBjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wgPSB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKG5vZGUubmFtZSk7XG5cblx0XHRsZXQgaW5zdGFuY2VUeXBlO1xuXHRcdGlmIChub2RlLnR5cGVBbm5vdGF0aW9uLnR5cGVBcmd1bWVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0Y29uc3QgdHlwZUFyZ3VtZW50cyA9IG5vZGVcblx0XHRcdFx0LnR5cGVBbm5vdGF0aW9uXG5cdFx0XHRcdC50eXBlQXJndW1lbnRzXG5cdFx0XHRcdC5tYXAodHlwZUFyZ3VtZW50ID0+IHRoaXMud3JhcFR5cGUodHlwZUFyZ3VtZW50LCBzY29wZSkpO1xuXG5cdFx0XHRpZiAodHlwZUFyZ3VtZW50cy5sZW5ndGggIT09IGNsYXNzU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgV3JvbmcgbnVtYmVyIG9mIHR5cGUgYXJndW1lbnRzYCwgbm9kZSk7XG5cdFx0XHR9XG5cblx0XHRcdGluc3RhbmNlVHlwZSA9IG5ldyBDbGFzc1JlZlR5cGUoY2xhc3NTeW1ib2wsIHR5cGVBcmd1bWVudHMpO1xuXHRcdH0gZWxzZSBpZiAoZXhwZWN0ZWRUeXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0XHRpbnN0YW5jZVR5cGUgPSBleHBlY3RlZFR5cGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGluc3RhbmNlVHlwZSA9IG5ldyBDbGFzc1JlZlR5cGUoXG5cdFx0XHRcdGNsYXNzU3ltYm9sLFxuXHRcdFx0XHRjbGFzc1N5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5tYXAoKCkgPT4gVHlwZXMuTUlYRUQpXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmIChjbGFzc1N5bWJvbC5jb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbCkge1xuXHRcdFx0dGhpcy5jaGVja0NhbGxBcmd1bWVudHMoY2xhc3NTeW1ib2wuY29uc3RydWN0b3JNZXRob2RTeW1ib2wsIG5vZGUuYXJndW1lbnRzLCBzY29wZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGV4cGVjdGVkVHlwZSAmJiAhZXhwZWN0ZWRUeXBlLmFjY2VwdHMoaW5zdGFuY2VUeXBlKSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFR5cGUgbWlzbWF0Y2g6ICR7ZXhwZWN0ZWRUeXBlfSA8PiAke2luc3RhbmNlVHlwZX1gLCBub2RlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaW5zdGFuY2VUeXBlO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0FycmF5RXhwcmVzc2lvbihub2RlOiBBU1RBcnJheU5vZGUsIHNjb3BlOiBUeXBlU2NvcGUsIGV4cGVjdGVkVHlwZTogVHlwZSB8IG51bGwgPSBudWxsKTogQ2xhc3NSZWZUeXBlIHtcblxuXHRcdGlmIChub2RlLmVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0aWYgKGV4cGVjdGVkVHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSkge1xuXHRcdFx0XHRleHBlY3RlZFR5cGUgPSBleHBlY3RlZFR5cGUudHlwZUFyZ3VtZW50c1swXSB8fCBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcy5uZXdBcnJheVR5cGVPZihleHBlY3RlZFR5cGUgfHwgVHlwZXMuTUlYRUQpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNsYXNzUmVmTmFtZSA9IFByaW1pdGl2ZUNsYXNzVHlwZXMuZ2V0Q2xhc3NSZWZOYW1lKFByaW1pdGl2ZUNsYXNzVHlwZXMuQVJSQVkpO1xuXG5cdFx0bGV0IGV4cGVjdGVkVHlwZU9mSXRlbTogVHlwZTtcblx0XHRpZiAoZXhwZWN0ZWRUeXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlICYmIGV4cGVjdGVkVHlwZS5jbGFzc1N5bWJvbC5uYW1lID09PSBjbGFzc1JlZk5hbWUpIHtcblx0XHRcdGV4cGVjdGVkVHlwZU9mSXRlbSA9IGV4cGVjdGVkVHlwZS50eXBlQXJndW1lbnRzWzBdIHx8IFR5cGVzLk1JWEVEO1xuXHRcdH0gZWxzZSBpZiAobm9kZS5lbGVtZW50c1swXSkge1xuXHRcdFx0ZXhwZWN0ZWRUeXBlT2ZJdGVtID0gdGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5lbGVtZW50c1swXSwgc2NvcGUsIGV4cGVjdGVkVHlwZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKCdBcnJheSBleHByZXNzaW9uIG11c3QgaGF2ZSBhdCBsZWFzdCBvbmUgZWxlbWVudCcsIG5vZGUpO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgaXRlbSBvZiBub2RlLmVsZW1lbnRzKSB7XG5cdFx0XHRjb25zdCBhY3R1YWxUeXBlT2ZJdGVtOiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24oaXRlbSwgc2NvcGUsIGV4cGVjdGVkVHlwZU9mSXRlbSk7XG5cdFx0XHRpZiAoIWV4cGVjdGVkVHlwZU9mSXRlbS5hY2NlcHRzKGFjdHVhbFR5cGVPZkl0ZW0pKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKFxuXHRcdFx0XHRcdGBBcnJheSBlbGVtZW50cyBtdXN0IGhhdmUgc2FtZSB0eXBlLCBnb3QgJHtleHBlY3RlZFR5cGVPZkl0ZW19IGFuZCAke2FjdHVhbFR5cGVPZkl0ZW19YCxcblx0XHRcdFx0XHRub2RlXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMubmV3QXJyYXlUeXBlT2YoZXhwZWN0ZWRUeXBlT2ZJdGVtKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tVbmFyeUV4cHJlc3Npb24obm9kZTogQVNUVW5hcnlOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0Y29uc3Qgb3BlcmFuZDogVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKG5vZGUuYXJndW1lbnQsIHNjb3BlKTtcblx0XHRjb25zdCBvcDogc3RyaW5nID0gbm9kZS5vcGVyYXRvcjtcblxuXHRcdGlmIChvcGVyYW5kIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0XHRyZXR1cm4gb3BlcmFuZDtcblx0XHR9XG5cblx0XHRzd2l0Y2ggKG9wKSB7XG5cdFx0XHRjYXNlIEdSQU1NQVIuRVhDTEFNQVRJT05fTUFSSzoge1xuXHRcdFx0XHRpZiAob3BlcmFuZC5lcXVhbHMoVHlwZXMuQk9PTEVBTikpIHtcblx0XHRcdFx0XHRyZXR1cm4gVHlwZXMuQk9PTEVBTjtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgVW5hcnkgJyEnIHJlcXVpcmVzIGJvb2xlYW4sIGdvdCAke29wZXJhbmQubmFtZX1gLCBub2RlKTtcblx0XHRcdH1cblx0XHRcdGNhc2UgR1JBTU1BUi5NSU5VUzoge1xuXHRcdFx0XHRpZiAob3BlcmFuZC5lcXVhbHMoVHlwZXMuTlVNQkVSKSkge1xuXHRcdFx0XHRcdHJldHVybiBUeXBlcy5CT09MRUFOO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBVbmFyeSAnLScgcmVxdWlyZXMgbnVtYmVyLCBnb3QgJHtvcGVyYW5kLm5hbWV9YCwgbm9kZSk7XG5cdFx0XHR9XG5cdFx0XHRjYXNlIEdSQU1NQVIuUExVUzoge1xuXHRcdFx0XHRpZiAob3BlcmFuZC5lcXVhbHMoVHlwZXMuTlVNQkVSKSkge1xuXHRcdFx0XHRcdHJldHVybiBUeXBlcy5CT09MRUFOO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBVbmFyeSAnKycgcmVxdWlyZXMgbnVtYmVyLCBnb3QgJHtvcGVyYW5kLm5hbWV9YCwgbm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMudHlwZUVycm9yKGBJbnZhbGlkIHVuYXJ5IG9wZXJhdG9yICR7b3B9YCwgbm9kZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrTGFtYmRhRXhwcmVzc2lvbihub2RlOiBBU1RMYW1iZGFOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogTGFtYmRhVHlwZSB7XG5cdFx0Y29uc3QgbGFtYmRhU2NvcGUgPSBuZXcgVHlwZVNjb3BlKHNjb3BlKTtcblx0XHRjb25zdCBwYXJhbWV0ZXJzOiBQYXJhbWV0ZXJTeW1ib2xbXSA9IG5vZGUucGFyYW1ldGVycy5tYXAoKHBhcmFtZXRlck5vZGU6IEFTVFBhcmFtZXRlck5vZGUpOiBQYXJhbWV0ZXJTeW1ib2wgPT4ge1xuXHRcdFx0Y29uc3QgcGFyYW1ldGVyU3ltYm9sOiBQYXJhbWV0ZXJTeW1ib2wgPSB0aGlzLnBhcmFtZXRlck5vZGVUb1N5bWJvbChwYXJhbWV0ZXJOb2RlKTtcblxuXHRcdFx0bGFtYmRhU2NvcGUuZGVmaW5lVHlwZShwYXJhbWV0ZXJOb2RlLm5hbWUsIHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlKTtcblxuXHRcdFx0cmV0dXJuIHBhcmFtZXRlclN5bWJvbDtcblx0XHR9KTtcblxuXHRcdGlmIChub2RlLmNoaWxkcmVuWzBdKSB7XG5cdFx0XHRyZXR1cm4gbmV3IExhbWJkYVR5cGUocGFyYW1ldGVycywgdGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5jaGlsZHJlblswXSwgbGFtYmRhU2NvcGUpKTtcblx0XHR9XG5cblx0XHR0aGlzLnR5cGVFcnJvcignTGFtYmRhIGV4cHJlc3Npb24gbXVzdCBoYXZlIGEgcmV0dXJuIHR5cGUnLCBub2RlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tDYWxsRXhwcmVzc2lvbihub2RlOiBBU1RDYWxsTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGNvbnN0IGNhbGxlZSA9IG5vZGUuY2FsbGVlO1xuXG5cdFx0aWYgKGNhbGxlZS50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSICYmIGNhbGxlZS5uYW1lID09PSBHUkFNTUFSLlNVUEVSKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jaGVja1N1cGVyQ29uc3RydWN0b3JDYWxsKG5vZGUsIHNjb3BlKTtcblx0XHR9XG5cblx0XHQvLyBDbGFzcy5tZXRob2QoKVxuXHRcdGlmIChjYWxsZWUgaW5zdGFuY2VvZiBBU1RNZW1iZXJOb2RlXG5cdFx0XHQmJiBjYWxsZWUub2JqZWN0LnR5cGUgPT09IEFTVE5vZGVUeXBlLklERU5USUZJRVJcblx0XHRcdCYmIHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKGNhbGxlZS5vYmplY3QubmFtZSlcblx0XHQpIHtcblx0XHRcdHJldHVybiB0aGlzLmNoZWNrU3RhdGljQ2FsbChcblx0XHRcdFx0Y2FsbGVlLm9iamVjdC5uYW1lLFxuXHRcdFx0XHRjYWxsZWUucHJvcGVydHksXG5cdFx0XHRcdG5vZGUuYXJndW1lbnRzLFxuXHRcdFx0XHRzY29wZVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBleHByLm1ldGhvZCgpXG5cdFx0aWYgKGNhbGxlZSBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpIHtcblx0XHRcdHJldHVybiB0aGlzLmNoZWNrSW5zdGFuY2VDYWxsKGNhbGxlZSwgbm9kZS5hcmd1bWVudHMsIHNjb3BlKTtcblx0XHR9XG5cblx0XHRpZiAoY2FsbGVlIGluc3RhbmNlb2YgQVNUTGFtYmRhTm9kZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tMYW1iZGFDYWxsKHRoaXMuY2hlY2tMYW1iZGFFeHByZXNzaW9uKGNhbGxlZSwgc2NvcGUpLCBub2RlLmFyZ3VtZW50cywgc2NvcGUpO1xuXHRcdH1cblxuXHRcdC8vIElkZW50aWZpZXI6IFZhcmlhYmxlIC8gTGFtYmRhXG5cdFx0aWYgKGNhbGxlZS50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0XHRpZiAoc2NvcGUuaGFzVHlwZShjYWxsZWUubmFtZSkpIHtcblx0XHRcdFx0Y29uc3QgdHlwZSA9IHNjb3BlLmdldFR5cGUoY2FsbGVlLm5hbWUpO1xuXHRcdFx0XHRpZiAodHlwZSBpbnN0YW5jZW9mIExhbWJkYVR5cGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0xhbWJkYUNhbGwodHlwZSwgbm9kZS5hcmd1bWVudHMsIHNjb3BlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNhbGwgbm9uLWZ1bmN0aW9uICR7Y2FsbGVlLm5hbWV9YCwgbm9kZSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZhbGxiYWNrOiBnbG9iYWxlIEZ1bmt0aW9uXG5cdFx0XHRyZXR1cm4gdGhpcy5jaGVja0Z1bmN0aW9uQ2FsbChjYWxsZWUubmFtZSwgbm9kZS5hcmd1bWVudHMsIHNjb3BlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gVHlwZXMuTUlYRUQ7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrU3VwZXJDb25zdHJ1Y3RvckNhbGwobm9kZTogQVNUQ2FsbE5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRjb25zdCBjdXJyZW50Q2xhc3MgPSBzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sO1xuXG5cdFx0aWYgKCEoY3VycmVudENsYXNzIGluc3RhbmNlb2YgQ2xhc3NTeW1ib2wpKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcignc3VwZXIoKSB1c2VkIG91dHNpZGUgb2YgY2xhc3MnLCBub2RlKTtcblx0XHR9XG5cblx0XHRpZiAoIWN1cnJlbnRDbGFzcy5zdXBlckNsYXNzKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcignc3VwZXIoKSB1c2VkIG91dHNpZGUgb2YgY2xhc3MgaGllcmFyY2h5Jywgbm9kZSk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc3VwZXJTeW1ib2w6IENsYXNzU3ltYm9sID0gdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChjdXJyZW50Q2xhc3Muc3VwZXJDbGFzcyk7XG5cdFx0aWYgKCFzdXBlclN5bWJvbC5jb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbCkge1xuXHRcdFx0aWYgKG5vZGUuYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoJ1N1cGVyIGNvbnN0cnVjdG9yIHRha2VzIG5vIGFyZ3VtZW50cycsIG5vZGUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIFR5cGVzLlZPSUQ7XG5cdFx0fVxuXG5cdFx0dGhpcy5jaGVja0NhbGxBcmd1bWVudHMoc3VwZXJTeW1ib2wuY29uc3RydWN0b3JNZXRob2RTeW1ib2wsIG5vZGUuYXJndW1lbnRzLCBzY29wZSk7XG5cblx0XHRyZXR1cm4gVHlwZXMuVk9JRDtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tDYWxsT25OdWxsT2JqZWN0VHlwZShvYmplY3RUeXBlOiBUeXBlLCBub2RlOiBBU1ROb2RlKTogdm9pZCB7XG5cdFx0aWYgKG9iamVjdFR5cGUuZXF1YWxzKFR5cGVzLk5VTEwpKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNhbGwgbWV0aG9kIG9uIG51bGxgLCBub2RlKTtcblx0XHR9XG5cdFx0aWYgKG9iamVjdFR5cGUgaW5zdGFuY2VvZiBOdWxsYWJsZVR5cGUpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgY2FsbCBtZXRob2Qgb24gbnVsbGFibGUgdHlwZSAke29iamVjdFR5cGV9YCwgbm9kZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0luc3RhbmNlQ2FsbChjYWxsZWU6IEFTVE1lbWJlck5vZGUsIGNhbGxBcmd1bWVudHM6IEFTVE5vZGVbXSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGxldCBvYmplY3RUeXBlOiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24oY2FsbGVlLm9iamVjdCwgc2NvcGUpO1xuXG5cdFx0b2JqZWN0VHlwZSA9IEF1dG9ib3hpbmcuYXV0b2JveElmTmVlZGVkKG9iamVjdFR5cGUsIHRoaXMub2JqZWN0UmVnaXN0cnkpO1xuXG5cdFx0dGhpcy5jaGVja0NhbGxPbk51bGxPYmplY3RUeXBlKG9iamVjdFR5cGUsIGNhbGxlZSk7XG5cblx0XHRpZiAob2JqZWN0VHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSkge1xuXHRcdFx0Y29uc3QgbWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wgPSB0aGlzLnJlc29sdmVJbnN0YW5jZU1ldGhvZGUoXG5cdFx0XHRcdG9iamVjdFR5cGUuY2xhc3NTeW1ib2wsXG5cdFx0XHRcdGNhbGxlZS5wcm9wZXJ0eVxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKG1ldGhvZFN5bWJvbC5pc1N0YXRpYykge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNhbGwgc3RhdGljIG1ldGhvZCAke2NhbGxlZS5wcm9wZXJ0eX0gb24gaW5zdGFuY2Ugb2YgJHtjYWxsZWUub2JqZWN0Lm5hbWV9YCxcblx0XHRcdFx0ICAgICAgICAgICAgICAgY2FsbGVlKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5jaGVja0luc3RhbmNlTWV0aG9kQWNjZXNzKGNhbGxlZSwgb2JqZWN0VHlwZS5jbGFzc1N5bWJvbCwgbWV0aG9kU3ltYm9sLCBzY29wZSk7XG5cblx0XHRcdGNvbnN0IG93bmVyOiBDbGFzc1N5bWJvbCB8IEludGVyZmFjZVN5bWJvbCB8IG51bGwgPSBtZXRob2RTeW1ib2wub3duZXI7XG5cblx0XHRcdGlmIChvd25lciA9PT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNhbGwgbWV0aG9kIG9uIG5vbi1vYmplY3RgLCBjYWxsZWUpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzdWJzdGl0dXRpb25NYXA6IE1hcDxzdHJpbmcsIFR5cGU+ID0gYnVpbGRUeXBlU3Vic3RpdHV0aW9uTWFwKFxuXHRcdFx0XHRvd25lci50eXBlUGFyYW1ldGVyU3ltYm9scyxcblx0XHRcdFx0b2JqZWN0VHlwZS50eXBlQXJndW1lbnRzXG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLmNoZWNrQ2FsbEFyZ3VtZW50cyhtZXRob2RTeW1ib2wsIGNhbGxBcmd1bWVudHMsIHNjb3BlLCBzdWJzdGl0dXRpb25NYXApO1xuXG5cdFx0XHRyZXR1cm4gc3Vic3RpdHV0ZVR5cGUobWV0aG9kU3ltYm9sLnJldHVyblR5cGUsIHN1YnN0aXR1dGlvbk1hcCk7XG5cdFx0fVxuXG5cdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBjYWxsIG1ldGhvZCBvbiBub24tb2JqZWN0YCwgY2FsbGVlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tTdGF0aWNDYWxsKGNsYXNzTmFtZTogc3RyaW5nLCBtZXRob2ROYW1lOiBzdHJpbmcsIGNhbGxBcmd1bWVudHM6IEFTVE5vZGVbXSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGNvbnN0IGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCA9IHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2woY2xhc3NOYW1lKTtcblxuXHRcdGNvbnN0IG1ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sIHwgbnVsbCA9IGNsYXNzU3ltYm9sLnN0YXRpY01ldGhvZFN5bWJvbHMuZ2V0KG1ldGhvZE5hbWUpIHx8IG51bGw7XG5cdFx0aWYgKCFtZXRob2RTeW1ib2wpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBVbmtub3duIHN0YXRpYyBtZXRob2QgJHtjbGFzc05hbWV9LiR7bWV0aG9kTmFtZX1gKTtcblx0XHR9XG5cblx0XHR0aGlzLmNoZWNrU3RhdGljTWV0aG9kQWNjZXNzKGNsYXNzU3ltYm9sLCBtZXRob2RTeW1ib2wsIHNjb3BlKVxuXG5cdFx0dGhpcy5jaGVja0NhbGxBcmd1bWVudHMobWV0aG9kU3ltYm9sLCBjYWxsQXJndW1lbnRzLCBzY29wZSk7XG5cblx0XHRyZXR1cm4gbWV0aG9kU3ltYm9sLnJldHVyblR5cGU7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrTGFtYmRhQ2FsbChsYW1iZGE6IExhbWJkYVR5cGUsIGNhbGxBcmd1bWVudHM6IEFTVE5vZGVbXSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXG5cdFx0dGhpcy5jaGVja0NhbGxBcmd1bWVudHMobGFtYmRhLCBjYWxsQXJndW1lbnRzLCBzY29wZSk7XG5cblx0XHRyZXR1cm4gbGFtYmRhLnJldHVyblR5cGU7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrRnVuY3Rpb25DYWxsKG5hbWU6IHN0cmluZywgY2FsbEFyZ3VtZW50czogQVNUTm9kZVtdLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0aWYgKCFnbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeS5oYXMobmFtZSkpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBVbmtub3duIGZ1bmN0aW9uICR7bmFtZX1gKTtcblx0XHR9XG5cblx0XHRjb25zdCBuYXRpdmVGdW5jdGlvbjogTmF0aXZlRnVuY3Rpb24gPSBnbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeS5nZXQobmFtZSk7XG5cblx0XHR0aGlzLmNoZWNrQ2FsbEFyZ3VtZW50cyhuYXRpdmVGdW5jdGlvbiwgY2FsbEFyZ3VtZW50cywgc2NvcGUpO1xuXG5cdFx0cmV0dXJuIG5hdGl2ZUZ1bmN0aW9uLnJldHVyblR5cGVcblx0XHRcdD8gdGhpcy53cmFwVHlwZShuYXRpdmVGdW5jdGlvbi5yZXR1cm5UeXBlLCBzY29wZSlcblx0XHRcdDogVHlwZXMuVk9JRDtcblx0fVxuXG5cdHByaXZhdGUgcGFyYW1ldGVyc1N5bWJvbHNGcm9tQ2FsbGFibGVTeW1ib2woY2FsbGFibGVTeW1ib2w6IE1ldGhvZFN5bWJvbCB8IExhbWJkYVR5cGUgfCBOYXRpdmVGdW5jdGlvbik6IFBhcmFtZXRlclN5bWJvbFtdIHtcblx0XHRpZiAoY2FsbGFibGVTeW1ib2wgaW5zdGFuY2VvZiBOYXRpdmVGdW5jdGlvbikge1xuXHRcdFx0cmV0dXJuIGNhbGxhYmxlU3ltYm9sXG5cdFx0XHRcdC5wYXJhbWV0ZXJOb2Rlc1xuXHRcdFx0XHQubWFwKHBhcmFtZXRlck5vZGUgPT4gdGhpcy5wYXJhbWV0ZXJOb2RlVG9TeW1ib2wocGFyYW1ldGVyTm9kZSkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjYWxsYWJsZVN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzXG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQ2FsbEFyZ3VtZW50cyhcblx0XHRjYWxsYWJsZVN5bWJvbDogTWV0aG9kU3ltYm9sIHwgTGFtYmRhVHlwZSB8IE5hdGl2ZUZ1bmN0aW9uLFxuXHRcdGNhbGxBcmd1bWVudHM6IEFTVE5vZGVbXSxcblx0XHRzY29wZTogVHlwZVNjb3BlLFxuXHRcdHN1YnN0aXR1dGlvbk1hcDogTWFwPHN0cmluZywgVHlwZT4gPSBuZXcgTWFwKClcblx0KTogdm9pZCB7XG5cdFx0Y29uc3QgY2FsbFNjb3BlID0gbmV3IFR5cGVTY29wZShzY29wZSk7XG5cdFx0bGV0IHBhcmFtZXRlclN5bWJvbHMgPSB0aGlzLnBhcmFtZXRlcnNTeW1ib2xzRnJvbUNhbGxhYmxlU3ltYm9sKGNhbGxhYmxlU3ltYm9sKTtcblxuXHRcdGlmIChjYWxsQXJndW1lbnRzLmxlbmd0aCA+IHBhcmFtZXRlclN5bWJvbHMubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihcIkFyZ3VtZW50IGNvdW50IG1pc21hdGNoXCIpO1xuXHRcdH1cblxuXHRcdGxldCBhY3R1YWxUeXBlOiBUeXBlO1xuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBwYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBwYXJhbWV0ZXJTeW1ib2w6IFBhcmFtZXRlclN5bWJvbCB8IG51bGwgPSBwYXJhbWV0ZXJTeW1ib2xzW2ldIHx8IG51bGw7XG5cdFx0XHRjb25zdCBjYWxsQXJndW1lbnQ6IEFTVE5vZGUgfCBudWxsID0gY2FsbEFyZ3VtZW50c1tpXSB8fCBudWxsO1xuXG5cdFx0XHRpZiAocGFyYW1ldGVyU3ltYm9sKSB7XG5cdFx0XHRcdGNvbnN0IGV4cGVjdGVkVHlwZTogVHlwZSA9IHN1YnN0aXR1dGVUeXBlKHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlLCBzdWJzdGl0dXRpb25NYXApO1xuXG5cdFx0XHRcdGlmIChjYWxsQXJndW1lbnQpIHtcblx0XHRcdFx0XHRhY3R1YWxUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24oY2FsbEFyZ3VtZW50LCBjYWxsU2NvcGUsIGV4cGVjdGVkVHlwZSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAocGFyYW1ldGVyU3ltYm9sLmRlZmF1bHRUeXBlKSB7XG5cdFx0XHRcdFx0YWN0dWFsVHlwZSA9IHBhcmFtZXRlclN5bWJvbC5kZWZhdWx0VHlwZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgTWlzc2luZyBhcmd1bWVudCAke3BhcmFtZXRlclN5bWJvbC5uYW1lfWAsIGNhbGxBcmd1bWVudCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmNoZWNrQXNzaWduYWJsZShleHBlY3RlZFR5cGUsIGFjdHVhbFR5cGUsIGNhbGxBcmd1bWVudHNbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tBc3NpZ25hYmxlKGV4cGVjdGVkVHlwZTogVHlwZSwgYWN0dWFsVHlwZTogVHlwZSwgbm9kZTogQVNUTm9kZSB8IG51bGwgPSBudWxsKTogdm9pZCB7XG5cdFx0aWYgKGV4cGVjdGVkVHlwZS5lcXVhbHMoYWN0dWFsVHlwZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoZXhwZWN0ZWRUeXBlIGluc3RhbmNlb2YgTWl4ZWRUeXBlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGV4cGVjdGVkVHlwZSBpbnN0YW5jZW9mIE51bGxhYmxlVHlwZSkge1xuXHRcdFx0aWYgKGFjdHVhbFR5cGUgPT09IFR5cGVzLk5VTEwpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGV4cGVjdGVkVHlwZS5pbm5lci5hY2NlcHRzKGFjdHVhbFR5cGUpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZXhwZWN0ZWRUeXBlLmFjY2VwdHMoYWN0dWFsVHlwZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnR5cGVFcnJvcihgVHlwZSBtaXNtYXRjaDogJHtleHBlY3RlZFR5cGV9IDw+ICR7YWN0dWFsVHlwZX1gLCBub2RlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tCb2R5KGNoaWxkcmVuOiBBU1ROb2RlW10sIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRsZXQgcmV0dXJuVHlwZTogVHlwZSA9IFR5cGVzLk1JWEVEO1xuXG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuXHRcdFx0Y29uc3Qgc3RhdGVtZW50UmVzdWx0ID0gdGhpcy5jaGVja1N0YXRlbWVudChjaGlsZCwgc2NvcGUpO1xuXHRcdFx0aWYgKHN0YXRlbWVudFJlc3VsdC5kaWRSZXR1cm4gJiYgc3RhdGVtZW50UmVzdWx0LnJldHVyblR5cGUpIHtcblx0XHRcdFx0cmV0dXJuVHlwZSA9IHN0YXRlbWVudFJlc3VsdC5yZXR1cm5UeXBlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXR1cm5UeXBlO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1JldHVyblR5cGUoZXhwZWN0ZWRUeXBlOiBUeXBlLCBhY3R1YWxUeXBlOiBUeXBlLCBub2RlOiBBU1RNZXRob2ROb2RlKTogdm9pZCB7XG5cdFx0Ly8gdm9pZC1NZXRob2RlXG5cdFx0aWYgKGV4cGVjdGVkVHlwZSA9PT0gVHlwZXMuVk9JRCkge1xuXHRcdFx0aWYgKGFjdHVhbFR5cGUgIT09IFR5cGVzLk1JWEVEICYmIGFjdHVhbFR5cGUgIT09IFR5cGVzLlZPSUQpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCByZXR1cm4gJHthY3R1YWxUeXBlfSBmcm9tIHZvaWQgbWV0aG9kYCwgbm9kZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8ga2VpbiByZXR1cm4gdm9yaGFuZGVuXG5cdFx0aWYgKGFjdHVhbFR5cGUgPT09IFR5cGVzLk1JWEVEKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgTWlzc2luZyByZXR1cm4gc3RhdGVtZW50IChleHBlY3RlZCAke2V4cGVjdGVkVHlwZX0pYCwgbm9kZSk7XG5cdFx0fVxuXG5cdFx0Ly8gdHlwLWlua29tcGF0aWJlbFxuXHRcdGlmICghZXhwZWN0ZWRUeXBlLmFjY2VwdHMoYWN0dWFsVHlwZSkpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBSZXR1cm4gdHlwZSBtaXNtYXRjaDogZXhwZWN0ZWQgJHtleHBlY3RlZFR5cGV9LCBnb3QgJHthY3R1YWxUeXBlfWAsIG5vZGUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tWRG9tTm9kZShub2RlOiBBU1RWRG9tTm9kZSk6IFR5cGUge1xuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCA9IHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2wobm9kZS50YWcpO1xuXG5cdFx0XHRjb25zdCBtZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCA9IHRoaXMucmVzb2x2ZUluc3RhbmNlTWV0aG9kZShjbGFzc1N5bWJvbCwgJ3JlbmRlcicpO1xuXG5cdFx0XHRpZiAoIW1ldGhvZFN5bWJvbCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ29tcG9uZW50ICcke25vZGUudGFnfScgaGFzIG5vIHJlbmRlcigpIG1ldGhvZGAsIG5vZGUpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmNoZWNrQXNzaWduYWJsZShtZXRob2RTeW1ib2wucmV0dXJuVHlwZSwgVHlwZXMuVk5PREUsIG5vZGUpO1xuXG5cdFx0XHRyZXR1cm4gVHlwZXMuVk5PREU7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdH1cblxuXHRcdHJldHVybiBUeXBlcy5WTk9ERTtcblx0fVxuXG5cdHByaXZhdGUgcmVzb2x2ZUluc3RhbmNlTWV0aG9kZShjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wsIG1ldGhvZE5hbWU6IHN0cmluZyk6IE1ldGhvZFN5bWJvbCB7XG5cdFx0LyoqIEB0eXBlIHtNZXRob2RTeW1ib2x8bnVsbH0gKi9cblx0XHRjb25zdCBtZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCB8IG51bGwgPSB0aGlzLnJlc29sdmVJbkhpZXJhcmNoeShcblx0XHRcdGNsYXNzU3ltYm9sLFxuXHRcdFx0Y2xhc3NTeW1ib2wgPT4gY2xhc3NTeW1ib2wuaW5zdGFuY2VNZXRob2RTeW1ib2xzLmdldChtZXRob2ROYW1lKSB8fCBudWxsXG5cdFx0KTtcblxuXHRcdGlmICghbWV0aG9kU3ltYm9sKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgVW5rbm93biBtZXRob2QgJHtjbGFzc1N5bWJvbC5uYW1lfS4ke21ldGhvZE5hbWV9YCwgY2xhc3NTeW1ib2wubm9kZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1ldGhvZFN5bWJvbDtcblx0fVxuXG5cdHByaXZhdGUgcmVzb2x2ZUluSGllcmFyY2h5KGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCwgcmVzb2x2ZXI6IChjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wpID0+IGFueSk6IGFueSB7XG5cdFx0bGV0IGN1cnJlbnQ6IENsYXNzU3ltYm9sIHwgbnVsbCA9IGNsYXNzU3ltYm9sO1xuXG5cdFx0d2hpbGUgKGN1cnJlbnQpIHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IHJlc29sdmVyKGN1cnJlbnQpO1xuXHRcdFx0aWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkICYmIHJlc3VsdCAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWN1cnJlbnQuc3VwZXJDbGFzcykge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0Y3VycmVudCA9IHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2woY3VycmVudC5zdXBlckNsYXNzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHByaXZhdGUgbmV3QXJyYXlUeXBlT2YoZWxlbWVudFR5cGU6IFR5cGUpOiBDbGFzc1JlZlR5cGUge1xuXHRcdGNvbnN0IGNsYXNzTmFtZTogc3RyaW5nIHwgbnVsbCA9IFByaW1pdGl2ZUNsYXNzVHlwZXMuZ2V0Q2xhc3NSZWZOYW1lKFByaW1pdGl2ZUNsYXNzVHlwZXMuQVJSQVkpO1xuXG5cdFx0aWYgKGNsYXNzTmFtZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoJ0ludGVybmFsIGVycm9yOiBDYW5ub3QgZmluZCBjbGFzcyBuYW1lIGZvciBhcnJheSB0eXBlLicpO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgQ2xhc3NSZWZUeXBlKHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2woY2xhc3NOYW1lKSwgW2VsZW1lbnRUeXBlXSk7XG5cdH1cblxuXHRwcml2YXRlIHdyYXBUeXBlKHR5cGU6IEFTVFR5cGVOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0cmV0dXJuIHdyYXBUeXBlKHR5cGUsIHRoaXMub2JqZWN0UmVnaXN0cnksIHNjb3BlKTtcblx0fVxuXG5cdHByaXZhdGUgcGFyYW1ldGVyTm9kZVRvU3ltYm9sKHBhcmFtZXRlck5vZGU6IEFTVFBhcmFtZXRlck5vZGUsIHNjb3BlOiBUeXBlU2NvcGUgPSBuZXcgVHlwZVNjb3BlKCkpOiBQYXJhbWV0ZXJTeW1ib2wge1xuXHRcdGNvbnN0IHBhcmFtZXRlclR5cGUgPSBwYXJhbWV0ZXJOb2RlLnR5cGVBbm5vdGF0aW9uXG5cdFx0XHQ/IHRoaXMud3JhcFR5cGUocGFyYW1ldGVyTm9kZS50eXBlQW5ub3RhdGlvbiwgc2NvcGUpXG5cdFx0XHQ6IFR5cGVzLk1JWEVEO1xuXG5cdFx0bGV0IGRlZmF1bHRUeXBlID0gbnVsbDtcblx0XHRpZiAocGFyYW1ldGVyTm9kZS5kZWZhdWx0VmFsdWUpIHtcblx0XHRcdGRlZmF1bHRUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24ocGFyYW1ldGVyTm9kZS5kZWZhdWx0VmFsdWUsIG5ldyBUeXBlU2NvcGUoKSk7XG5cblx0XHRcdGlmIChkZWZhdWx0VHlwZVxuXHRcdFx0XHQmJiAhcGFyYW1ldGVyVHlwZS5lcXVhbHMoVHlwZXMuTUlYRUQpXG5cdFx0XHRcdCYmICFwYXJhbWV0ZXJUeXBlLmVxdWFscyhkZWZhdWx0VHlwZSkpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoXG5cdFx0XHRcdFx0YERlZmF1bHQgdmFsdWUgZm9yIHBhcmFtZXRlciAnJHtwYXJhbWV0ZXJOb2RlLm5hbWV9JyBkb2VzIG5vdCBtYXRjaCB0eXBlLmAsXG5cdFx0XHRcdFx0cGFyYW1ldGVyTm9kZVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgUGFyYW1ldGVyU3ltYm9sKFxuXHRcdFx0cGFyYW1ldGVyTm9kZS5uYW1lLFxuXHRcdFx0cGFyYW1ldGVyVHlwZSxcblx0XHRcdGRlZmF1bHRUeXBlLFxuXHRcdFx0cGFyYW1ldGVyTm9kZVxuXHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIHJlZ2lzdGVyQ2xhc3NTeW1ib2woY2xhc3NOb2RlOiBBU1RDbGFzc05vZGUpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5oYXNTeW1ib2woY2xhc3NOb2RlLm5hbWUpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgY2xhc3NTY29wZSA9IG5ldyBUeXBlU2NvcGUoKTtcblx0XHRjb25zdCBjbGFzc1N5bWJvbCA9IG5ldyBDbGFzc1N5bWJvbChjbGFzc05vZGUpO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGlmIChjbGFzc1N5bWJvbC5zdXBlckNsYXNzKSB7XG5cdFx0XHRcdGNsYXNzU3ltYm9sLnN1cGVyQ2xhc3NTeW1ib2wgPSB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKGNsYXNzU3ltYm9sLnN1cGVyQ2xhc3MpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHR9XG5cblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmFkZENsYXNzU3ltYm9sKGNsYXNzU3ltYm9sKTtcblxuXHRcdGNsYXNzTm9kZS50eXBlUGFyYW1ldGVycy5mb3JFYWNoKG5hbWUgPT4ge1xuXHRcdFx0Y2xhc3NTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMucHVzaChuZXcgVHlwZVBhcmFtZXRlclN5bWJvbChuYW1lKSk7XG5cdFx0XHRjbGFzc1Njb3BlLmRlZmluZVR5cGVCaW5kaW5nKG5hbWUsIG5ldyBUeXBlVmFyaWFibGUobmFtZSkpO1xuXHRcdH0pO1xuXG5cdFx0Zm9yIChjb25zdCB0eXBlTm9kZSBvZiBjbGFzc05vZGUuaW1wbGVtZW50c0ludGVyZmFjZXMpIHtcblx0XHRcdGNvbnN0IGludGVyZmFjZVR5cGU6IFR5cGUgPSB0aGlzLndyYXBUeXBlKHR5cGVOb2RlLCBjbGFzc1Njb3BlKTtcblx0XHRcdGlmIChpbnRlcmZhY2VUeXBlIGluc3RhbmNlb2YgSW50ZXJmYWNlUmVmVHlwZSkge1xuXHRcdFx0XHRjbGFzc1N5bWJvbC5pbXBsZW1lbnRzSW50ZXJmYWNlcy5wdXNoKGludGVyZmFjZVR5cGUpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHRoaXMudHlwZUVycm9yKGBFeHBlY3RlZCBpbnRlcmZhY2UgdHlwZSwgZ290ICR7aW50ZXJmYWNlVHlwZX1gLCB0eXBlTm9kZSk7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBtZW1iZXJOb2RlIG9mIGNsYXNzTm9kZS5jaGlsZHJlbikge1xuXHRcdFx0aWYgKG1lbWJlck5vZGUudHlwZSA9PT0gQVNUTm9kZVR5cGUuRklFTEQgJiYgbWVtYmVyTm9kZSBpbnN0YW5jZW9mIEFTVEZpZWxkTm9kZSkge1xuXHRcdFx0XHRjb25zdCB0YXJnZXQ6IE1hcDxzdHJpbmcsIEZpZWxkU3ltYm9sPiA9IG1lbWJlck5vZGUubW9kaWZpZXJzLnN0YXRpY1xuXHRcdFx0XHRcdD8gY2xhc3NTeW1ib2wuc3RhdGljRmllbGRTeW1ib2xzXG5cdFx0XHRcdFx0OiBjbGFzc1N5bWJvbC5pbnN0YW5jZUZpZWxkU3ltYm9scztcblxuXHRcdFx0XHRjb25zdCBmaWVsZFN5bWJvbCA9IG5ldyBGaWVsZFN5bWJvbChcblx0XHRcdFx0XHRtZW1iZXJOb2RlLFxuXHRcdFx0XHRcdG1lbWJlck5vZGUuZmllbGRUeXBlXG5cdFx0XHRcdFx0XHQ/IHRoaXMud3JhcFR5cGUobWVtYmVyTm9kZS5maWVsZFR5cGUsIGNsYXNzU2NvcGUpXG5cdFx0XHRcdFx0XHQ6IFR5cGVzLk1JWEVEXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0ZmllbGRTeW1ib2wub3duZXIgPSBjbGFzc1N5bWJvbDtcblxuXHRcdFx0XHR0YXJnZXQuc2V0KGZpZWxkU3ltYm9sLm5hbWUsIGZpZWxkU3ltYm9sKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKChtZW1iZXJOb2RlLnR5cGUgPT09IEFTVE5vZGVUeXBlLk1FVEhPRCB8fCBtZW1iZXJOb2RlLnR5cGUgPT09IEFTVE5vZGVUeXBlLkNPTlNUUlVDVE9SKVxuXHRcdFx0XHQmJiBtZW1iZXJOb2RlIGluc3RhbmNlb2YgQVNUTWV0aG9kTm9kZSkge1xuXG5cdFx0XHRcdGNvbnN0IG1ldGhvZFNjb3BlID0gbmV3IFR5cGVTY29wZShjbGFzc1Njb3BlKTtcblx0XHRcdFx0Y29uc3QgbWV0aG9kU3ltYm9sID0gbmV3IE1ldGhvZFN5bWJvbChtZW1iZXJOb2RlKTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wub3duZXIgPSBjbGFzc1N5bWJvbDtcblxuXHRcdFx0XHRtZW1iZXJOb2RlLnR5cGVQYXJhbWV0ZXJzLmZvckVhY2gobmFtZSA9PiB7XG5cdFx0XHRcdFx0bWV0aG9kU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLnB1c2gobmV3IFR5cGVQYXJhbWV0ZXJTeW1ib2wobmFtZSkpO1xuXHRcdFx0XHRcdG1ldGhvZFNjb3BlLmRlZmluZVR5cGVCaW5kaW5nKG5hbWUsIG5ldyBUeXBlVmFyaWFibGUobmFtZSkpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9scyA9IG1lbWJlck5vZGVcblx0XHRcdFx0XHQucGFyYW1ldGVyc1xuXHRcdFx0XHRcdC5tYXAocGFyYW1ldGVyTm9kZSA9PiB0aGlzLnBhcmFtZXRlck5vZGVUb1N5bWJvbChwYXJhbWV0ZXJOb2RlLCBtZXRob2RTY29wZSkpO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlID0gbWVtYmVyTm9kZS5yZXR1cm5UeXBlXG5cdFx0XHRcdFx0PyB0aGlzLndyYXBUeXBlKG1lbWJlck5vZGUucmV0dXJuVHlwZSwgbWV0aG9kU2NvcGUpXG5cdFx0XHRcdFx0OiBUeXBlcy5WT0lEO1xuXG5cdFx0XHRcdGlmIChtZW1iZXJOb2RlLnR5cGUgPT09IEFTVE5vZGVUeXBlLkNPTlNUUlVDVE9SKSB7XG5cdFx0XHRcdFx0Y2xhc3NTeW1ib2wuY29uc3RydWN0b3JNZXRob2RTeW1ib2wgPSBtZXRob2RTeW1ib2w7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gbWV0aG9kU3ltYm9sLmlzU3RhdGljXG5cdFx0XHRcdFx0XHQ/IGNsYXNzU3ltYm9sLnN0YXRpY01ldGhvZFN5bWJvbHNcblx0XHRcdFx0XHRcdDogY2xhc3NTeW1ib2wuaW5zdGFuY2VNZXRob2RTeW1ib2xzO1xuXG5cdFx0XHRcdFx0dGFyZ2V0LnNldChtZW1iZXJOb2RlLm5hbWUsIG1ldGhvZFN5bWJvbCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJlZ2lzdGVySW50ZXJmYWNlU3ltYm9sKGludGVyZmFjZU5vZGU6IEFTVEludGVyZmFjZU5vZGUpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5oYXNTeW1ib2woaW50ZXJmYWNlTm9kZS5uYW1lKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGludGVyZmFjZVNjb3BlID0gbmV3IFR5cGVTY29wZSgpO1xuXHRcdGNvbnN0IGludGVyZmFjZVN5bWJvbCA9IG5ldyBJbnRlcmZhY2VTeW1ib2woaW50ZXJmYWNlTm9kZSk7XG5cblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmFkZEludGVyZmFjZVN5bWJvbChpbnRlcmZhY2VTeW1ib2wpO1xuXG5cdFx0aW50ZXJmYWNlTm9kZS50eXBlUGFyYW1ldGVycy5mb3JFYWNoKG5hbWUgPT4ge1xuXHRcdFx0aW50ZXJmYWNlU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLnB1c2gobmV3IFR5cGVQYXJhbWV0ZXJTeW1ib2wobmFtZSkpO1xuXHRcdFx0aW50ZXJmYWNlU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcobmFtZSwgbmV3IFR5cGVWYXJpYWJsZShuYW1lKSk7XG5cdFx0fSk7XG5cblx0XHRmb3IgKGNvbnN0IGludGVyZmFjZU5hbWUgb2YgaW50ZXJmYWNlTm9kZS5leHRlbmRzSW50ZXJmYWNlcykge1xuXHRcdFx0Y29uc3QgaW50ZXJmYWNlU3ltYm9sOiBJbnRlcmZhY2VTeW1ib2wgPSB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldEludGVyYWNlU3ltYm9sKGludGVyZmFjZU5hbWUpO1xuXG5cdFx0XHRpbnRlcmZhY2VTeW1ib2wuZXh0ZW5kc0ludGVyZmFjZXMucHVzaChpbnRlcmZhY2VTeW1ib2wpO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgbWVtYmVyTm9kZSBvZiBpbnRlcmZhY2VOb2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobWVtYmVyTm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5GSUVMRCAmJiBtZW1iZXJOb2RlIGluc3RhbmNlb2YgQVNURmllbGROb2RlKSB7XG5cdFx0XHRcdGNvbnN0IGZpZWxkU3ltYm9sID0gbmV3IEZpZWxkU3ltYm9sKFxuXHRcdFx0XHRcdG1lbWJlck5vZGUsXG5cdFx0XHRcdFx0bWVtYmVyTm9kZS5maWVsZFR5cGVcblx0XHRcdFx0XHRcdD8gdGhpcy53cmFwVHlwZShtZW1iZXJOb2RlLmZpZWxkVHlwZSwgaW50ZXJmYWNlU2NvcGUpXG5cdFx0XHRcdFx0XHQ6IFR5cGVzLk1JWEVEXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0ZmllbGRTeW1ib2wub3duZXIgPSBpbnRlcmZhY2VTeW1ib2w7XG5cblx0XHRcdFx0aW50ZXJmYWNlU3ltYm9sLnN0YXRpY0ZpZWxkU3ltYm9scy5zZXQoZmllbGRTeW1ib2wubmFtZSwgZmllbGRTeW1ib2wpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoKG1lbWJlck5vZGUudHlwZSA9PT0gQVNUTm9kZVR5cGUuTUVUSE9EKSAmJiBtZW1iZXJOb2RlIGluc3RhbmNlb2YgQVNUTWV0aG9kTm9kZSkge1xuXG5cdFx0XHRcdGNvbnN0IG1ldGhvZFNjb3BlID0gbmV3IFR5cGVTY29wZShpbnRlcmZhY2VTY29wZSk7XG5cdFx0XHRcdGNvbnN0IG1ldGhvZFN5bWJvbCA9IG5ldyBNZXRob2RTeW1ib2wobWVtYmVyTm9kZSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLm93bmVyID0gaW50ZXJmYWNlU3ltYm9sO1xuXG5cdFx0XHRcdG1lbWJlck5vZGUudHlwZVBhcmFtZXRlcnMuZm9yRWFjaChuYW1lID0+IHtcblx0XHRcdFx0XHRtZXRob2RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMucHVzaChuZXcgVHlwZVBhcmFtZXRlclN5bWJvbChuYW1lKSk7XG5cdFx0XHRcdFx0bWV0aG9kU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcobmFtZSwgbmV3IFR5cGVWYXJpYWJsZShuYW1lKSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzID0gbWVtYmVyTm9kZVxuXHRcdFx0XHRcdC5wYXJhbWV0ZXJzXG5cdFx0XHRcdFx0Lm1hcChwYXJhbWV0ZXJOb2RlID0+IHRoaXMucGFyYW1ldGVyTm9kZVRvU3ltYm9sKHBhcmFtZXRlck5vZGUsIG1ldGhvZFNjb3BlKSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnJldHVyblR5cGUgPSBtZW1iZXJOb2RlLnJldHVyblR5cGVcblx0XHRcdFx0XHQ/IHRoaXMud3JhcFR5cGUobWVtYmVyTm9kZS5yZXR1cm5UeXBlLCBtZXRob2RTY29wZSlcblx0XHRcdFx0XHQ6IFR5cGVzLlZPSUQ7XG5cblx0XHRcdFx0aW50ZXJmYWNlU3ltYm9sLmluc3RhbmNlTWV0aG9kU3ltYm9scy5zZXQobWVtYmVyTm9kZS5uYW1lLCBtZXRob2RTeW1ib2wpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgdHlwZUVycm9yKG1lc3NhZ2U6IHN0cmluZywgbm9kZTogQVNUTm9kZSB8IG51bGwgPSBudWxsKTogbmV2ZXIge1xuXHRcdHRocm93VHlwZUVycm9yKG1lc3NhZ2UsIG5vZGU/LnNwYW4pO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuaW1wb3J0IHtBU1RJbXBvcnROb2RlLCBBU1ROb2RlLCBBU1ROb2RlVHlwZX0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuLi9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuaW1wb3J0IHtQYXJzZXJ9IGZyb20gXCIuLi9wYXJzZXIvcGFyc2VyXCI7XG5pbXBvcnQge0Vudmlyb25tZW50fSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHR5cGUge0Fic3RyYWN0RmlsZUxvYWRlcn0gZnJvbSBcIi4uL2xvYWRlcnNcIjtcbmltcG9ydCB7dGhyb3dSdW50aW1lRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcblxuZXhwb3J0IGNsYXNzIERlcGVuZGVuY3kge1xuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkgPSBuZXcgT2JqZWN0UmVnaXN0cnkoKTtcblx0bmFtZXM6IHN0cmluZ1tdO1xuXHR1cmw6IHN0cmluZztcblx0YXN0OiBBU1ROb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IobmFtZXM6IHN0cmluZ1tdLCB1cmw6IHN0cmluZyA9ICcuJykge1xuXHRcdHRoaXMubmFtZXMgPSBuYW1lcztcblx0XHR0aGlzLnVybCA9IHVybDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgRGVwZW5kZW5jeUxvYWRlciB7XG5cdGVudmlyb25tZW50OiBFbnZpcm9ubWVudDtcblx0b2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5O1xuXHRmaWxlTG9hZGVyOiBBYnN0cmFjdEZpbGVMb2FkZXI7XG5cblx0Y29uc3RydWN0b3IoZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGZpbGVMb2FkZXI6IEFic3RyYWN0RmlsZUxvYWRlcikge1xuXHRcdHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5ID0gb2JqZWN0UmVnaXN0cnk7XG5cdFx0dGhpcy5maWxlTG9hZGVyID0gZmlsZUxvYWRlcjtcblx0fVxuXG5cdGFzeW5jIHBhcnNlRGVwZW5kZW5jeShkZXBlbmRlbmN5OiBEZXBlbmRlbmN5KTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIGF3YWl0IHRoaXMucGFyc2VGaWxlKGRlcGVuZGVuY3kudXJsKVxuXHRcdCAgICAgICAgICAgICAgICAgLnRoZW4oYXN0ID0+IGRlcGVuZGVuY3kuYXN0ID0gYXN0KVxuXHRcdCAgICAgICAgICAgICAgICAgLnRoZW4oYXN0ID0+IGRlcGVuZGVuY3kub2JqZWN0UmVnaXN0cnkuY29sbGVjdEFsbChhc3QpKTtcblx0fVxuXG5cdGFzeW5jIGNvbGxlY3REZXBlbmRlbmNpZXMoZGVwZW5kZW5jeTogRGVwZW5kZW5jeSwgZGVwZW5kZW5jaWVzOiBNYXA8c3RyaW5nLCBEZXBlbmRlbmN5Pik6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiBhd2FpdCB0aGlzLmNvbGxlY3RQcm9ncmFtRGVwZW5kZW5jaWVzKGRlcGVuZGVuY3kuYXN0KVxuXHRcdCAgICAgICAgICAgICAgICAgLnRoZW4oY2xhc3NEZXBlbmRlbmNpZXMgPT4ge1xuXHRcdFx0ICAgICAgICAgICAgICAgICBjbGFzc0RlcGVuZGVuY2llcy5mb3JFYWNoKGNsYXNzRGVwZW5kZW5jeSA9PiB7XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgaWYgKGRlcGVuZGVuY2llcy5oYXMoY2xhc3NEZXBlbmRlbmN5LnVybCkpIHtcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgIHJldHVybjtcblx0XHRcdFx0ICAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgZGVwZW5kZW5jaWVzLnNldChjbGFzc0RlcGVuZGVuY3kudXJsLCBjbGFzc0RlcGVuZGVuY3kpO1xuXHRcdFx0ICAgICAgICAgICAgICAgICB9KTtcblx0XHQgICAgICAgICAgICAgICAgIH0pO1xuXHR9XG5cblx0YXN5bmMgY29sbGVjdFByb2dyYW1EZXBlbmRlbmNpZXMoYXN0OiBBU1ROb2RlIHwgbnVsbCk6IFByb21pc2U8TWFwPHN0cmluZywgRGVwZW5kZW5jeT4+IHtcblx0XHRpZiAoYXN0ID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gbmV3IE1hcCgpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGRlcGVuZGVuY2llczogTWFwPHN0cmluZywgRGVwZW5kZW5jeT4gPSB0aGlzLmNvbGxlY3RDbGFzc0RlcGVuZGVuY2llcyhhc3QpO1xuXHRcdGZvciAoY29uc3QgZGVwZW5kZW5jeSBvZiBkZXBlbmRlbmNpZXMudmFsdWVzKCkpIHtcblx0XHRcdGlmIChkZXBlbmRlbmN5LnVybCA9PT0gJy4nKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0YXdhaXQgdGhpcy5wYXJzZURlcGVuZGVuY3koZGVwZW5kZW5jeSk7XG5cdFx0XHRhd2FpdCB0aGlzLmNvbGxlY3REZXBlbmRlbmNpZXMoZGVwZW5kZW5jeSwgZGVwZW5kZW5jaWVzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGVwZW5kZW5jaWVzO1xuXHR9XG5cblx0YXN5bmMgY29sbGVjdERlZmF1bHREZXBlbmRlbmNpZXMoKTogUHJvbWlzZTxNYXA8c3RyaW5nLCBEZXBlbmRlbmN5Pj4ge1xuXHRcdGNvbnN0IGRlcGVuZGVuY2llczogTWFwPHN0cmluZywgRGVwZW5kZW5jeT4gPSB0aGlzLmRlZmF1bHREZXBlbmRlbmNpZXMoKTtcblxuXHRcdGZvciAoY29uc3QgZGVwZW5kZW5jeSBvZiBkZXBlbmRlbmNpZXMudmFsdWVzKCkpIHtcblx0XHRcdGF3YWl0IHRoaXMucGFyc2VEZXBlbmRlbmN5KGRlcGVuZGVuY3kpO1xuXHRcdFx0YXdhaXQgdGhpcy5jb2xsZWN0RGVwZW5kZW5jaWVzKGRlcGVuZGVuY3ksIGRlcGVuZGVuY2llcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRlcGVuZGVuY2llcztcblx0fVxuXG5cdGRlZmF1bHREZXBlbmRlbmNpZXMoKTogTWFwPHN0cmluZywgRGVwZW5kZW5jeT4ge1xuXHRcdGNvbnN0IGRlcGVuZGVuY2llczogRGVwZW5kZW5jeVtdID0gW1xuXHRcdFx0bmV3IERlcGVuZGVuY3koWydJdGVyYXRvcicsICdJdGVyYWJsZSddLCAnL2xpYnJhcnkvY29udHJhY3RzLmx5cmEnKVxuXHRcdF07XG5cblx0XHRjb25zdCBkZWZhdWx0RGVwZW5kZW5jaWVzID0gbmV3IE1hcCgpO1xuXHRcdGZvciAoY29uc3QgZGVwZW5kZW5jeSBvZiBkZXBlbmRlbmNpZXMpIHtcblx0XHRcdGRlZmF1bHREZXBlbmRlbmNpZXMuc2V0KGRlcGVuZGVuY3kudXJsLCBkZXBlbmRlbmN5KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGVmYXVsdERlcGVuZGVuY2llcztcblx0fVxuXG5cdGNvbGxlY3RDbGFzc0RlcGVuZGVuY2llcyhhc3Q6IEFTVE5vZGUpOiBNYXA8c3RyaW5nLCBEZXBlbmRlbmN5PiB7XG5cdFx0Y29uc3QgY2xhc3NEZXBlbmRlbmNpZXMgPSBuZXcgTWFwKCk7XG5cblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgYXN0LmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5JTVBPUlQpIHtcblx0XHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RJbXBvcnROb2RlKSB7XG5cdFx0XHRcdFx0aWYgKG5vZGUuZnJvbSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0Y2xhc3NEZXBlbmRlbmNpZXMuc2V0KG5vZGUubmFtZXNbMF0sIG5ldyBEZXBlbmRlbmN5KG5vZGUubmFtZXMpKTtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoY2xhc3NEZXBlbmRlbmNpZXMuaGFzKG5vZGUuZnJvbSkpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjbGFzc0RlcGVuZGVuY2llcy5zZXQobm9kZS5mcm9tLCBuZXcgRGVwZW5kZW5jeShub2RlLm5hbWVzLCBub2RlLmZyb20pKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBpbXBvcnQgbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZT8uc3Bhbik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3NEZXBlbmRlbmNpZXM7XG5cdH1cblxuXHRhc3luYyBwYXJzZUZpbGUodXJsOiBzdHJpbmcpOiBQcm9taXNlPEFTVE5vZGU+IHtcblx0XHRyZXR1cm4gdGhpcy5maWxlTG9hZGVyXG5cdFx0ICAgICAgICAgICAubG9hZCh1cmwpXG5cdFx0ICAgICAgICAgICAudGhlbihjb2RlID0+IHRoaXMucGFyc2VyU291cmNlKG5ldyBTb3VyY2UoY29kZSwgdXJsKSkpO1xuXHR9XG5cblx0cGFyc2VyU291cmNlKHNvdXJjZTogU291cmNlKTogQVNUTm9kZSB7XG5cdFx0cmV0dXJuIG5ldyBQYXJzZXIoc291cmNlKS5wYXJzZSgpO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7RGVwZW5kZW5jeSwgRGVwZW5kZW5jeUxvYWRlcn0gZnJvbSBcIi4vZGVwZW5kZW5jaWVzXCI7XG5pbXBvcnQge0FTVEltcG9ydE5vZGUsIEFTVE5vZGV9IGZyb20gXCIuLi9hc3RcIjtcbmltcG9ydCB7TmF0aXZlQ2xhc3Nlc30gZnJvbSBcIi4uLy4uL2xpYnJhcnkvbmF0aXZlX2NsYXNzZXNcIjtcbmltcG9ydCB7Q2xhc3NEZWZpbml0aW9uLCBFbnZpcm9ubWVudCwgSW50ZXJmYWNlRGVmaW5pdGlvbn0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuaW1wb3J0IHR5cGUge0Fic3RyYWN0RmlsZUxvYWRlcn0gZnJvbSBcIi4uL2xvYWRlcnNcIjtcbmltcG9ydCB0eXBlIHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uLy4uL2xpYnJhcnkvbmF0aXZlX2NsYXNzXCI7XG5pbXBvcnQge3Rocm93RGVwZW5kZW5jeUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQgdHlwZSB7U291cmNlU3Bhbn0gZnJvbSBcIi4uL3BhcnNlci9wYXJzZXJfc291cmNlLnRzXCI7XG5cbmNvbnN0IG5hdGl2ZUNsYXNzZXMgPSBuZXcgTmF0aXZlQ2xhc3NlcygpO1xuXG5leHBvcnQgY2xhc3MgTGlua2VyIHtcblx0cHJpdmF0ZSBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQ7XG5cdHByaXZhdGUgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5O1xuXHRwcml2YXRlIGRlcGVuZGVuY3lMb2FkZXI6IERlcGVuZGVuY3lMb2FkZXI7XG5cblx0Y29uc3RydWN0b3IoZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGZpbGVMb2FkZXI6IEFic3RyYWN0RmlsZUxvYWRlcikge1xuXHRcdHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5ID0gb2JqZWN0UmVnaXN0cnk7XG5cdFx0dGhpcy5kZXBlbmRlbmN5TG9hZGVyID0gbmV3IERlcGVuZGVuY3lMb2FkZXIoZW52aXJvbm1lbnQsIG9iamVjdFJlZ2lzdHJ5LCBmaWxlTG9hZGVyKTtcblx0fVxuXG5cdHB1YmxpYyBhc3luYyBsaW5rU291cmNlcyhhc3Q6IEFTVE5vZGUpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gYXdhaXQgdGhpcy5kZXBlbmRlbmN5TG9hZGVyLmNvbGxlY3REZWZhdWx0RGVwZW5kZW5jaWVzKClcblx0XHQgICAgICAgICAgICAgICAgIC50aGVuKChkZXBlbmRlbmNpZXM6IE1hcDxzdHJpbmcsIERlcGVuZGVuY3k+KTogdm9pZCA9PiB7XG5cdFx0XHQgICAgICAgICAgICAgICAgIHRoaXMubG9hZERlcGVuZGVuY2llcyhkZXBlbmRlbmNpZXMpO1xuXHRcdCAgICAgICAgICAgICAgICAgfSlcblx0XHQgICAgICAgICAgICAgICAgIC50aGVuKGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdCAgICAgICAgICAgICAgICAgY29uc3QgZGVwZW5kZW5jaWVzOiBNYXA8c3RyaW5nLCBEZXBlbmRlbmN5PiA9IGF3YWl0IHRoaXMuZGVwZW5kZW5jeUxvYWRlclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb2xsZWN0UHJvZ3JhbURlcGVuZGVuY2llcyhhc3QpO1xuXHRcdFx0ICAgICAgICAgICAgICAgICB0aGlzLmxvYWREZXBlbmRlbmNpZXMoZGVwZW5kZW5jaWVzKTtcblx0XHRcdCAgICAgICAgICAgICAgICAgdGhpcy5sb2FkTmF0aXZlQ2xhc3Nlc0Zyb21BU1QoYXN0KTtcblx0XHQgICAgICAgICAgICAgICAgIH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBsb2FkRGVwZW5kZW5jaWVzKGRlcGVuZGVuY2llczogTWFwPHN0cmluZywgRGVwZW5kZW5jeT4pIHtcblx0XHRmb3IgKGNvbnN0IGRlcGVuZGVuY3kgb2YgZGVwZW5kZW5jaWVzLnZhbHVlcygpKSB7XG5cblx0XHRcdGlmIChkZXBlbmRlbmN5LnVybCA9PT0gJy4nKSB7XG5cdFx0XHRcdHRoaXMubG9hZE5hdGl2ZUNsYXNzRnJvbURlcGVuZGVuY3koZGVwZW5kZW5jeSk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBvYmplY3REZWZpbml0aW9ucyA9IGRlcGVuZGVuY3kub2JqZWN0UmVnaXN0cnlcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mZXRjaEFsbE9iamVjdERlZmluaXRpb25zKClcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52YWx1ZXMoKTtcblx0XHRcdGZvciAobGV0IG9iamVjdERlZiBvZiBvYmplY3REZWZpbml0aW9ucykge1xuXHRcdFx0XHRpZiAob2JqZWN0RGVmIGluc3RhbmNlb2YgSW50ZXJmYWNlRGVmaW5pdGlvbikge1xuXHRcdFx0XHRcdHRoaXMub2JqZWN0UmVnaXN0cnkuaW50ZXJmYWNlcy5zZXQob2JqZWN0RGVmLm5hbWUsIG9iamVjdERlZik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5vYmplY3RSZWdpc3RyeS5jbGFzc2VzLnNldChvYmplY3REZWYubmFtZSwgb2JqZWN0RGVmKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmVudmlyb25tZW50LmRlZmluZShvYmplY3REZWYubmFtZSwgb2JqZWN0RGVmKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGxvYWROYXRpdmVDbGFzcyhjbGFzc05hbWU6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsKTogdm9pZCB7XG5cdFx0Y29uc3QgbmF0aXZlQ2xhc3M6IE5hdGl2ZUNsYXNzIHwgbnVsbCA9IG5hdGl2ZUNsYXNzZXMucmVnaXN0cnkuZ2V0KGNsYXNzTmFtZSkgfHwgbnVsbDtcblx0XHRpZiAoIW5hdGl2ZUNsYXNzKSB7XG5cdFx0XHR0aHJvd0RlcGVuZGVuY3lFcnJvcihgVW5rbm93biBuYXRpdmUgY2xhc3MgJHtjbGFzc05hbWV9YCwgc3Bhbik7XG5cdFx0fVxuXHRcdGNvbnN0IGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24gPSBuYXRpdmVDbGFzcy5nZXRDbGFzc0RlZmluaXRpb24oKTtcblx0XHRpZiAodGhpcy5vYmplY3RSZWdpc3RyeS5jbGFzc2VzLmhhcyhjbGFzc05hbWUpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5zZXQoY2xhc3NOYW1lLCBjbGFzc0RlZik7XG5cdFx0dGhpcy5lbnZpcm9ubWVudC5kZWZpbmUoY2xhc3NOYW1lLCBjbGFzc0RlZik7XG5cdH1cblxuXHRwcml2YXRlIGxvYWROYXRpdmVDbGFzc2VzRnJvbUFTVChhc3Q6IEFTVE5vZGUpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgYXN0LmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEltcG9ydE5vZGUpIHtcblx0XHRcdFx0aWYgKG5vZGUuZnJvbSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdGNvbnN0IGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gbm9kZS5uYW1lc1swXTtcblx0XHRcdFx0XHRpZiAoIWNsYXNzTmFtZSkge1xuXHRcdFx0XHRcdFx0dGhyb3dEZXBlbmRlbmN5RXJyb3IoYEludmFsaWQgaW1wb3J0IG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGU/LnNwYW4pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLmxvYWROYXRpdmVDbGFzcyhjbGFzc05hbWUsIG5vZGUuc3Bhbik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGxvYWROYXRpdmVDbGFzc0Zyb21EZXBlbmRlbmN5KGRlcGVuZGVuY3k6IERlcGVuZGVuY3kpIHtcblx0XHRjb25zdCBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCA9IGRlcGVuZGVuY3kubmFtZXNbMF07XG5cdFx0aWYgKCFjbGFzc05hbWUpIHtcblx0XHRcdHRocm93RGVwZW5kZW5jeUVycm9yKGBJbnZhbGlkIGltcG9ydCBmcm9tIGRlcGVuZGVuY3kuYCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5sb2FkTmF0aXZlQ2xhc3MoY2xhc3NOYW1lKTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0FTVEFubm90YXRpb25Ob2RlLCBBU1RDbGFzc05vZGUsIEFTVE1ldGhvZE5vZGUsIEFTVE5vZGV9IGZyb20gXCIuLi9hc3RcIjtcbmltcG9ydCB7Y2FsbEluc3RhbmNlTWV0aG9kLCBldmFsQW5ub3RhdGlvblByb3BlcnRpZXN9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9ydW50aW1lXCI7XG5pbXBvcnQge0NsYXNzRGVmaW5pdGlvbiwgdHlwZSBFbnZpcm9ubWVudCwgSW5zdGFuY2V9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQgdHlwZSB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuaW1wb3J0IHR5cGUge0V2ZW50UGlwZWxpbmV9IGZyb20gXCIuLi9ldmVudC9waXBlbGluZVwiO1xuXG5leHBvcnQgY2xhc3MgVGVzdFN1aXRlcyB7XG5cdHByaXZhdGUgcmVhZG9ubHkgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50O1xuXHRwcml2YXRlIHJlYWRvbmx5IG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeTtcblx0cHJpdmF0ZSByZWFkb25seSBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lO1xuXG5cdGNvbnN0cnVjdG9yKGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKSB7XG5cdFx0dGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkgPSBvYmplY3RSZWdpc3RyeTtcblx0XHR0aGlzLmV2ZW50UGlwZWxpbmUgPSBldmVudFBpcGVsaW5lO1xuXHR9XG5cblx0cnVuKGFzdDogQVNUTm9kZSk6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUQ2xhc3NOb2RlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGDwn6eqIFJ1bm5pbmcgVGVzdCBDYXNlcyBmb3IgJHtub2RlLm5hbWV9IC4uLmApO1xuXHRcdFx0XHR0aGlzLnJ1blRlc3RDYXNlcyhub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJ1blRlc3RDYXNlcyhjbGFzc05vZGU6IEFTVENsYXNzTm9kZSk6IHZvaWQge1xuXHRcdGZvciAoY29uc3QgbWVtYmVyIG9mIGNsYXNzTm9kZS5jaGlsZHJlbikge1xuXHRcdFx0aWYgKG1lbWJlciBpbnN0YW5jZW9mIEFTVE1ldGhvZE5vZGUpIHtcblx0XHRcdFx0Y29uc3QgYW5ub3RhdGlvbjogQVNUQW5ub3RhdGlvbk5vZGUgfCB1bmRlZmluZWQgPSBtZW1iZXIuYW5ub3RhdGlvbnNcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmZpbmQoYW5ub3RhdGlvbiA9PiBhbm5vdGF0aW9uLm5hbWUgPT09ICd0ZXN0Jyk7XG5cdFx0XHRcdGlmICghYW5ub3RhdGlvbikge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMucnVuVGVzdENhc2UoY2xhc3NOb2RlLCBtZW1iZXIsIGFubm90YXRpb24pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcnVuVGVzdENhc2UoY2xhc3NOb2RlOiBBU1RDbGFzc05vZGUsIG1ldGhvZE5vZGU6IEFTVE1ldGhvZE5vZGUsIGFubm90YXRpb246IEFTVEFubm90YXRpb25Ob2RlKTogdm9pZCB7XG5cdFx0Y29uc3QgaW5zdGFuY2U6IEluc3RhbmNlID0gQ2xhc3NEZWZpbml0aW9uLmZyb21BU1QoY2xhc3NOb2RlKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25zdHJ1Y3ROZXdJbnN0YW5jZVdpdGhvdXRBcmd1bWVudHMoXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbnZpcm9ubWVudCxcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRQaXBlbGluZVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cblx0XHRjb25zdCBwcm9wZXJ0aWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSBldmFsQW5ub3RhdGlvblByb3BlcnRpZXMoYW5ub3RhdGlvbik7XG5cdFx0Y29uc3QgdGl0bGU6IHN0cmluZyA9IHByb3BlcnRpZXMudGl0bGUgPz8gYCR7Y2xhc3NOb2RlLm5hbWV9LiR7bWV0aG9kTm9kZS5uYW1lfWA7XG5cblx0XHRsZXQgZXJyb3JNZXNzYWdlID0gbnVsbDtcblxuXHRcdHRyeSB7XG5cdFx0XHRjYWxsSW5zdGFuY2VNZXRob2QoaW5zdGFuY2UsIG1ldGhvZE5vZGUsIFtdLCB0aGlzLm9iamVjdFJlZ2lzdHJ5LCB0aGlzLmVudmlyb25tZW50LCB0aGlzLmV2ZW50UGlwZWxpbmUpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRlcnJvck1lc3NhZ2UgPSBlcnJvcjtcblx0XHR9XG5cblx0XHRpZiAoZXJyb3JNZXNzYWdlKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGAg4p2MICR7dGl0bGV9LCAke2Vycm9yTWVzc2FnZX1gKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coYCDinIUgJHt0aXRsZX1gKTtcblx0XHR9XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtBU1ROb2RlfSBmcm9tICcuLi9hc3QudHMnO1xuaW1wb3J0IHtFbnZpcm9ubWVudH0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtldmFsTm9kZSwgcmVnaXN0ZXJOYXRpdmVDbGFzc2VzLCByZWdpc3Rlck5hdGl2ZUZ1bmN0aW9uc30gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfcnVudGltZVwiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB0eXBlIHtFdmVudFBpcGVsaW5lfSBmcm9tIFwiLi4vZXZlbnQvcGlwZWxpbmVcIjtcblxuZXhwb3J0IGNsYXNzIEludGVycHJldGVyIHtcblx0ZW52aXJvbm1lbnQ6IEVudmlyb25tZW50O1xuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cdGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmU7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0ZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LFxuXHRcdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSxcblx0XHRldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lXG5cdCkge1xuXHRcdHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5ID0gb2JqZWN0UmVnaXN0cnk7XG5cdFx0dGhpcy5ldmVudFBpcGVsaW5lID0gZXZlbnRQaXBlbGluZTtcblxuXHRcdHJlZ2lzdGVyTmF0aXZlQ2xhc3NlcyhvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpO1xuXHRcdHJlZ2lzdGVyTmF0aXZlRnVuY3Rpb25zKGVudmlyb25tZW50KTtcblx0fVxuXG5cdHJ1bihhc3Q6IEFTVE5vZGUpIHtcblx0XHRldmFsTm9kZShhc3QsIHRoaXMub2JqZWN0UmVnaXN0cnksIHRoaXMuZW52aXJvbm1lbnQsIHRoaXMuZXZlbnRQaXBlbGluZSk7XG5cdH1cbn1cbiIsCiAgICAiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0RmlsZUxvYWRlciB7XG5cdGFic3RyYWN0IGxvYWQodXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz47XG59XG5cbmV4cG9ydCBjbGFzcyBGZXRjaEZpbGVMb2FkZXIgZXh0ZW5kcyBBYnN0cmFjdEZpbGVMb2FkZXIge1xuXHRvdmVycmlkZSBsb2FkKHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gZmV0Y2godXJsKVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxuXHR9XG59XG4iLAogICAgImV4cG9ydCB0eXBlIEV2ZW50SGFuZGxlcjxUID0gYW55PiA9IChwYXlsb2FkOiBUKSA9PiB2b2lkO1xuXG5leHBvcnQgY2xhc3MgRXZlbnRQaXBlbGluZSB7XG5cdHByaXZhdGUgbGlzdGVuZXJzOiBNYXA8c3RyaW5nLCBTZXQ8RXZlbnRIYW5kbGVyPj4gPSBuZXcgTWFwPHN0cmluZywgU2V0PEV2ZW50SGFuZGxlcj4+KCk7XG5cblx0b248VCA9IGFueT4oZXZlbnQ6IHN0cmluZywgaGFuZGxlcjogRXZlbnRIYW5kbGVyPFQ+KTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLmxpc3RlbmVycy5oYXMoZXZlbnQpKSB7XG5cdFx0XHR0aGlzLmxpc3RlbmVycy5zZXQoZXZlbnQsIG5ldyBTZXQoKSk7XG5cdFx0fVxuXHRcdHRoaXMubGlzdGVuZXJzLmdldChldmVudCkhLmFkZChoYW5kbGVyKTtcblx0fVxuXG5cdG9mZjxUID0gYW55PihldmVudDogc3RyaW5nLCBoYW5kbGVyOiBFdmVudEhhbmRsZXI8VD4pOiB2b2lkIHtcblx0XHR0aGlzLmxpc3RlbmVycy5nZXQoZXZlbnQpXG5cdFx0ICAgID8uZGVsZXRlKGhhbmRsZXIpO1xuXHR9XG5cblx0ZW1pdDxUID0gYW55PihldmVudDogc3RyaW5nLCBwYXlsb2FkOiBUKTogdm9pZCB7XG5cdFx0dGhpcy5saXN0ZW5lcnMuZ2V0KGV2ZW50KVxuXHRcdCAgICA/LmZvckVhY2goKGhhbmRsZXI6IEV2ZW50SGFuZGxlcik6IHZvaWQgPT4gaGFuZGxlcihwYXlsb2FkKSk7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5pbXBvcnQge0Vudmlyb25tZW50fSBmcm9tIFwiLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuaW1wb3J0IHtUeXBlQ2hlY2tlcn0gZnJvbSBcIi4vdHlwZXMvdHlwZWNoZWNrZXJcIjtcbmltcG9ydCB7TGlua2VyfSBmcm9tIFwiLi9saW5rZXIvbGlua2VyXCI7XG5pbXBvcnQge1Rlc3RTdWl0ZXN9IGZyb20gXCIuL3Rlc3RzL3Rlc3RzdWl0ZXNcIjtcbmltcG9ydCB7SW50ZXJwcmV0ZXJ9IGZyb20gXCIuL2ludGVycHJldGVyL2ludGVycHJldGVyXCI7XG5pbXBvcnQge0ZldGNoRmlsZUxvYWRlcn0gZnJvbSBcIi4vbG9hZGVyc1wiO1xuaW1wb3J0IHtBU1ROb2RlfSBmcm9tIFwiLi9hc3RcIjtcbmltcG9ydCB7UGFyc2VyfSBmcm9tIFwiLi9wYXJzZXIvcGFyc2VyXCI7XG5pbXBvcnQge0V2ZW50UGlwZWxpbmV9IGZyb20gXCIuL2V2ZW50L3BpcGVsaW5lXCI7XG5cbmV4cG9ydCBjbGFzcyBMeXJhU2NyaXB0UHJvZ3JhbSB7XG5cdHByaXZhdGUgZ2xvYmFsRW52aXJvbm1lbnQ6IEVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KCk7XG5cdHByaXZhdGUgZ2xvYmFsT2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5ID0gbmV3IE9iamVjdFJlZ2lzdHJ5KCk7XG5cdHByaXZhdGUgZ2xvYmFsRXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZTtcblxuXHRwcml2YXRlIHR5cGVDaGVja2VyOiBUeXBlQ2hlY2tlciA9IG5ldyBUeXBlQ2hlY2tlcih0aGlzLmdsb2JhbE9iamVjdFJlZ2lzdHJ5KTtcblx0cHJpdmF0ZSBsaW5rZXI6IExpbmtlciA9IG5ldyBMaW5rZXIodGhpcy5nbG9iYWxFbnZpcm9ubWVudCwgdGhpcy5nbG9iYWxPYmplY3RSZWdpc3RyeSwgbmV3IEZldGNoRmlsZUxvYWRlcigpKTtcblxuXHRwcml2YXRlIGludGVycHJldGVyOiBJbnRlcnByZXRlcjtcblx0cHJpdmF0ZSB0ZXN0U3VpdGU6IFRlc3RTdWl0ZXM7XG5cblx0cHJpdmF0ZSByZWFkb25seSBpc0RlYnVnOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgc3RhcnRUaW1lOiBudW1iZXIgPSAwO1xuXG5cdGNvbnN0cnVjdG9yKGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSwgZ2xvYmFsRXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSA9IG5ldyBFdmVudFBpcGVsaW5lKCkpIHtcblx0XHR0aGlzLmlzRGVidWcgPSBpc0RlYnVnO1xuXG5cdFx0dGhpcy5pbnRlcnByZXRlciA9IG5ldyBJbnRlcnByZXRlcihcblx0XHRcdHRoaXMuZ2xvYmFsRW52aXJvbm1lbnQsXG5cdFx0XHR0aGlzLmdsb2JhbE9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0Z2xvYmFsRXZlbnRQaXBlbGluZVxuXHRcdCk7XG5cblx0XHR0aGlzLnRlc3RTdWl0ZSA9IG5ldyBUZXN0U3VpdGVzKFxuXHRcdFx0dGhpcy5nbG9iYWxFbnZpcm9ubWVudCxcblx0XHRcdHRoaXMuZ2xvYmFsT2JqZWN0UmVnaXN0cnksXG5cdFx0XHRnbG9iYWxFdmVudFBpcGVsaW5lXG5cdFx0KTtcblxuXHRcdHRoaXMuZ2xvYmFsRXZlbnRQaXBlbGluZSA9IGdsb2JhbEV2ZW50UGlwZWxpbmU7XG5cdH1cblxuXHRnZXRHbG9iYWxPYmplY3RSZWdpc3RyeSgpOiBPYmplY3RSZWdpc3RyeSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2xvYmFsT2JqZWN0UmVnaXN0cnk7XG5cdH1cblxuXG5cdGdldEdsb2JhbEVudmlyb25tZW50KCk6IEVudmlyb25tZW50IHtcblx0XHRyZXR1cm4gdGhpcy5nbG9iYWxFbnZpcm9ubWVudDtcblx0fVxuXG5cdGdldEdsb2JhbEV2ZW50UGlwZWxpbmUoKTogRXZlbnRQaXBlbGluZSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2xvYmFsRXZlbnRQaXBlbGluZTtcblx0fVxuXG5cdGFzeW5jIGV4ZWN1dGUoc291cmNlOiBTb3VyY2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gdGhpcy5ydW5QaXBlbGluZShzb3VyY2UpXG5cdFx0ICAgICAgICAgICAudGhlbigoYXN0OiBBU1ROb2RlKSA9PiB7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlU3RhcnRUaW1lKCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuaW50ZXJwcmV0ZXIucnVuKGFzdCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlRW5kVGltZSgnaW50ZXJwcmV0ZXInKTtcblx0XHQgICAgICAgICAgIH0pO1xuXHR9XG5cblx0YXN5bmMgZXhlY3V0ZVRlc3Qoc291cmNlOiBTb3VyY2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gdGhpcy5ydW5QaXBlbGluZShzb3VyY2UpXG5cdFx0ICAgICAgICAgICAudGhlbigoYXN0OiBBU1ROb2RlKSA9PiB7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlU3RhcnRUaW1lKCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMudGVzdFN1aXRlLnJ1bihhc3QpO1xuXHRcdFx0ICAgICAgICAgICB0aGlzLmRlYnVnTWVhc3VyZUVuZFRpbWUoJ3Rlc3QnKTtcblx0XHQgICAgICAgICAgIH0pO1xuXHR9XG5cblx0ZGVidWcodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzRGVidWcpIHtcblx0XHRcdGNvbnNvbGUubG9nKHZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRkZWJ1Z01lYXN1cmVTdGFydFRpbWUoKTogdm9pZCB7XG5cdFx0dGhpcy5zdGFydFRpbWUgPSB0aGlzLmRlYnVnVGltZXN0YW1wKCk7XG5cdH1cblxuXHRkZWJ1Z01lYXN1cmVFbmRUaW1lKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuZGVidWcobWVzc2FnZSArICc6ICcgKyAodGhpcy5kZWJ1Z1RpbWVzdGFtcCgpIC0gdGhpcy5zdGFydFRpbWUpICsgJ21zJyk7XG5cdH1cblxuXHRkZWJ1Z1RpbWVzdGFtcCgpOiBudW1iZXIge1xuXHRcdGlmICghdGhpcy5pc0RlYnVnKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdFx0cmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3luYyBydW5QaXBlbGluZShzb3VyY2U6IFNvdXJjZSk6IFByb21pc2U8QVNUTm9kZT4ge1xuXHRcdHRoaXMuZGVidWdNZWFzdXJlU3RhcnRUaW1lKClcblx0XHRjb25zdCBhc3Q6IEFTVE5vZGUgPSBuZXcgUGFyc2VyKHNvdXJjZSkucGFyc2UoKTtcblx0XHR0aGlzLmRlYnVnTWVhc3VyZUVuZFRpbWUoJ3BhcnNlcicpXG5cdFx0dGhpcy5kZWJ1Zyhhc3QpO1xuXG5cdFx0cmV0dXJuIHRoaXMubGlua2VyLmxpbmtTb3VyY2VzKGFzdClcblx0XHQgICAgICAgICAgIC50aGVuKCgpOiB2b2lkID0+IHtcblx0XHRcdCAgICAgICAgICAgdGhpcy50eXBlQ2hlY2tlci5jb2xsZWN0QWxsU3ltYm9sc0Zyb21SZWdpc3RyeSh0aGlzLmdsb2JhbE9iamVjdFJlZ2lzdHJ5KTtcblx0XHQgICAgICAgICAgIH0pXG5cdFx0ICAgICAgICAgICAudGhlbigoKTogQVNUTm9kZSA9PiB7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlU3RhcnRUaW1lKCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMudHlwZUNoZWNrZXIuY2hlY2soYXN0KTtcblx0XHRcdCAgICAgICAgICAgdGhpcy5kZWJ1Z01lYXN1cmVFbmRUaW1lKCd0eXBlY2hlY2tlcicpO1xuXG5cdFx0XHQgICAgICAgICAgIHJldHVybiBhc3Q7XG5cdFx0ICAgICAgICAgICB9KTtcblx0fVxufVxuIiwKICAgICJjb25zdCBET01fRVZFTlQ6IHN0cmluZyA9ICdkb206ZXZlbnQnO1xuXG5jb25zdCBpc0V2ZW50OiAocHJvcGVydHlLZXk6IHN0cmluZykgPT4gYm9vbGVhbiA9IChwcm9wZXJ0eUtleTogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG5cdHJldHVybiBwcm9wZXJ0eUtleS50b0xvd2VyQ2FzZSgpXG5cdCAgICAgICAgICAgICAgICAgIC5zdGFydHNXaXRoKCdvbicpO1xufVxuXG5leHBvcnQgY29uc3QgRXZlbnRzID0ge1xuXHRET01fRVZFTlQsXG5cdGlzRXZlbnQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudHM7XG4iLAogICAgIi8vLyA8cmVmZXJlbmNlIGxpYj1cImRvbVwiIC8+XG5cbmltcG9ydCB0eXBlIHtQcm9wcywgVkNoaWxkLCBWVGV4dH0gZnJvbSBcIi4uL2NvcmUvdmRvbS92ZG9tXCI7XG5pbXBvcnQge0xhbWJkYUZ1bmN0aW9uQ2FsbH0gZnJvbSBcIi4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcnVudGltZVwiO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcbmltcG9ydCB0eXBlIHtBcHBsaWNhdGlvblJ1bnRpbWV9IGZyb20gXCIuL3J1bnRpbWVcIjtcbmltcG9ydCB7VkRPTX0gZnJvbSBcIi4vcmVnaXN0cnlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBFbGVtZW50Q3JlYXRvciB7XG5cdGNyZWF0ZSh2Tm9kZTogVkNoaWxkKTogTm9kZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbGVtZW50UGF0Y2hlciB7XG5cdHBhdGNoKG9sZFZOb2RlOiBWQ2hpbGQgfCBudWxsLCBuZXdOb2RlOiBWQ2hpbGQpOiB2b2lkXG59XG5cbmV4cG9ydCBjbGFzcyBIVE1MRWxlbWVudENyZWF0b3IgaW1wbGVtZW50cyBFbGVtZW50Q3JlYXRvciB7XG5cdHByaXZhdGUgdGV4dEJ1ZmZlcjogVlRleHRbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgYXBwbGljYXRpb25SdW50aW1lOiBBcHBsaWNhdGlvblJ1bnRpbWUsXG5cdFx0cHJpdmF0ZSByZWFkb25seSB2ZG9tOiBWRE9NXG5cdCkge1xuXHR9XG5cblx0cHVibGljIGNyZWF0ZSh2Tm9kZTogVkNoaWxkKTogTm9kZSB7XG5cdFx0aWYgKHZOb2RlLnR5cGUgPT09ICd0ZXh0Jykge1xuXHRcdFx0Y29uc3QgdGV4dE5vZGU6IFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2Tm9kZS52YWx1ZSk7XG5cdFx0XHR2Tm9kZS5kb20gPSB0ZXh0Tm9kZTtcblx0XHRcdHJldHVybiB0ZXh0Tm9kZTtcblx0XHR9XG5cblx0XHRpZiAodk5vZGUudHlwZSA9PT0gJ2NvbXBvbmVudCcpIHtcblx0XHRcdHZOb2RlLmluc3RhbmNlID0gdGhpcy5hcHBsaWNhdGlvblJ1bnRpbWUuY3JlYXRlSW5zdGFuY2Uodk5vZGUuY2xhc3NOYW1lKTtcblxuXHRcdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModk5vZGUucHJvcHMgPz8ge30pKSB7XG5cdFx0XHRcdGlmIChrZXkgPT09ICdjaGlsZHJlbicpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodk5vZGUuaW5zdGFuY2UuaGFzUHVibGljUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0XHRcdHZOb2RlLmluc3RhbmNlLnNldFB1YmxpY1Byb3BlcnR5KGtleSwgdmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICghdk5vZGUuc3ViVHJlZSkge1xuXHRcdFx0XHR2Tm9kZS5zdWJUcmVlID0gdGhpcy5hcHBsaWNhdGlvblJ1bnRpbWUucmVuZGVyQ29tcG9uZW50KHZOb2RlLmluc3RhbmNlKSBhcyBWQ2hpbGQ7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMudmRvbS5yZWdpc3Rlcih2Tm9kZS5pbnN0YW5jZSwgdk5vZGUuc3ViVHJlZSk7XG5cblx0XHRcdGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5jcmVhdGUodk5vZGUuc3ViVHJlZSkgYXMgSFRNTEVsZW1lbnQ7XG5cdFx0XHR2Tm9kZS5kb20gPSBlbGVtZW50O1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHZOb2RlLnRhZykgYXMgSFRNTEVsZW1lbnQ7XG5cdFx0dk5vZGUuZG9tID0gZWxlbWVudDtcblxuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHZOb2RlLnByb3BzID8/IHt9KSkge1xuXHRcdFx0aWYgKEV2ZW50cy5pc0V2ZW50KGtleSkpIHtcblx0XHRcdFx0dGhpcy5hcHBsaWNhdGlvblJ1bnRpbWUuYWRkRXZlbnRIYW5kbGVyKGVsZW1lbnQsIGtleSwgdmFsdWUgYXMgTGFtYmRhRnVuY3Rpb25DYWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgU3RyaW5nKHZhbHVlKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiB2Tm9kZS5jaGlsZHJlbikge1xuXHRcdFx0ZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZShjaGlsZCkgYXMgSFRNTEVsZW1lbnQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBIVE1MRWxlbWVudFBhdGNoZXIgaW1wbGVtZW50cyBFbGVtZW50UGF0Y2hlciB7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgbW91bnRQb2ludDogSFRNTEVsZW1lbnQsXG5cdCAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgYXBwbGljYXRpb25SdW50aW1lOiBBcHBsaWNhdGlvblJ1bnRpbWUsXG5cdCAgICAgICAgICAgIHZkb206IFZET00sXG5cdCAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudENyZWF0b3I6IEVsZW1lbnRDcmVhdG9yID0gbmV3IEhUTUxFbGVtZW50Q3JlYXRvcihhcHBsaWNhdGlvblJ1bnRpbWUsIHZkb20pKSB7XG5cdH1cblxuXHRwdWJsaWMgcGF0Y2gob2xkTm9kZTogVkNoaWxkIHwgbnVsbCwgbmV3Tm9kZTogVkNoaWxkKTogdm9pZCB7XG5cdFx0aWYgKCFvbGROb2RlKSB7XG5cdFx0XHRjb25zdCBlbGVtZW50OiBOb2RlID0gdGhpcy5lbGVtZW50Q3JlYXRvci5jcmVhdGUobmV3Tm9kZSk7XG5cdFx0XHR0aGlzLm1vdW50UG9pbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cdFx0XHRuZXdOb2RlLmRvbSA9IGVsZW1lbnQ7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5wYXRjaE5vZGUodGhpcy5tb3VudFBvaW50LCBvbGROb2RlLCBuZXdOb2RlKTtcblx0fVxuXG5cdHByaXZhdGUgcGF0Y2hOb2RlKHBhcmVudDogTm9kZSwgb2xkTm9kZTogVkNoaWxkLCBuZXdOb2RlOiBWQ2hpbGQpOiB2b2lkIHtcblx0XHRpZiAob2xkTm9kZS50eXBlID09PSAndGV4dCcgJiYgbmV3Tm9kZS50eXBlID09PSAndGV4dCcpIHtcblx0XHRcdGNvbnN0IHRleHROb2RlOiBOb2RlID0gb2xkTm9kZS5kb20hO1xuXHRcdFx0aWYgKHRleHROb2RlLnRleHRDb250ZW50ICE9PSBuZXdOb2RlLnZhbHVlKSB7XG5cdFx0XHRcdHRleHROb2RlLnRleHRDb250ZW50ID0gbmV3Tm9kZS52YWx1ZTtcblx0XHRcdH1cblx0XHRcdG5ld05vZGUuZG9tID0gdGV4dE5vZGU7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKG9sZE5vZGUudHlwZSAhPT0gbmV3Tm9kZS50eXBlKSB7XG5cdFx0XHRjb25zdCBuZXdFbGVtZW50OiBOb2RlID0gdGhpcy5lbGVtZW50Q3JlYXRvci5jcmVhdGUobmV3Tm9kZSk7XG5cdFx0XHRwYXJlbnQucmVwbGFjZUNoaWxkKG5ld0VsZW1lbnQsIG9sZE5vZGUuZG9tISk7XG5cdFx0XHRuZXdOb2RlLmRvbSA9IG5ld0VsZW1lbnQ7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKG5ld05vZGUudHlwZSA9PT0gJ2NvbXBvbmVudCcpIHtcblx0XHRcdGNvbnN0IG5ld0VsZW1lbnQ6IE5vZGUgPSB0aGlzLmVsZW1lbnRDcmVhdG9yLmNyZWF0ZShuZXdOb2RlKTtcblx0XHRcdGlmICghb2xkTm9kZS5kb20pIHtcblx0XHRcdFx0cGFyZW50LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuXHRcdFx0fSBlbHNlIGlmIChvbGROb2RlLmRvbSAhPT0gbmV3RWxlbWVudCkge1xuXHRcdFx0XHRwYXJlbnQucmVwbGFjZUNoaWxkKG5ld0VsZW1lbnQsIG9sZE5vZGUuZG9tISk7XG5cdFx0XHR9XG5cdFx0XHRuZXdOb2RlLmRvbSA9IG5ld0VsZW1lbnQ7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgZG9tOiBIVE1MRWxlbWVudCA9IG9sZE5vZGUuZG9tIGFzIEhUTUxFbGVtZW50O1xuXHRcdG5ld05vZGUuZG9tID0gZG9tO1xuXG5cdFx0aWYgKG9sZE5vZGUudHlwZSAhPT0gJ3RleHQnICYmIG5ld05vZGUudHlwZSAhPT0gJ3RleHQnKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZVByb3BlcnRpZXMoZG9tLCBvbGROb2RlLnByb3BzID8/IHt9LCBuZXdOb2RlLnByb3BzID8/IHt9KTtcblxuXHRcdFx0aWYgKG9sZE5vZGUudHlwZSA9PT0gJ2VsZW1lbnQnICYmIG5ld05vZGUudHlwZSA9PT0gJ2VsZW1lbnQnKSB7XG5cdFx0XHRcdHRoaXMucGF0Y2hDaGlsZHJlbihkb20sIG9sZE5vZGUuY2hpbGRyZW4sIG5ld05vZGUuY2hpbGRyZW4pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgdXBkYXRlUHJvcGVydGllcyhlbGVtZW50OiBIVE1MRWxlbWVudCwgb2xkUHJvcGVydGllczogUHJvcHMsIG5ld1Byb3BlcnRpZXM6IFByb3BzKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBrZXkgaW4gb2xkUHJvcGVydGllcykge1xuXHRcdFx0aWYgKCEoa2V5IGluIG5ld1Byb3BlcnRpZXMpKSB7XG5cdFx0XHRcdGlmIChFdmVudHMuaXNFdmVudChrZXkpKSB7XG5cdFx0XHRcdFx0dGhpcy5hcHBsaWNhdGlvblJ1bnRpbWUucmVtb3ZlRXZlbnRIYW5kbGVyKGVsZW1lbnQsIGtleSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgcHJvcGVydHlLZXkgaW4gbmV3UHJvcGVydGllcykge1xuXHRcdFx0Y29uc3Qgb2xkVmFsdWU6IGFueSA9IG9sZFByb3BlcnRpZXNbcHJvcGVydHlLZXldO1xuXHRcdFx0Y29uc3QgbmV3VmFsdWU6IGFueSA9IG5ld1Byb3BlcnRpZXNbcHJvcGVydHlLZXldO1xuXG5cdFx0XHRpZiAob2xkVmFsdWUgPT09IG5ld1ZhbHVlKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoRXZlbnRzLmlzRXZlbnQocHJvcGVydHlLZXkpKSB7XG5cdFx0XHRcdGlmIChvbGRWYWx1ZSkge1xuXHRcdFx0XHRcdHRoaXMuYXBwbGljYXRpb25SdW50aW1lLnJlbW92ZUV2ZW50SGFuZGxlcihlbGVtZW50LCBwcm9wZXJ0eUtleSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5hcHBsaWNhdGlvblJ1bnRpbWUuYWRkRXZlbnRIYW5kbGVyKGVsZW1lbnQsIHByb3BlcnR5S2V5LCBuZXdWYWx1ZSBhcyBMYW1iZGFGdW5jdGlvbkNhbGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcGVydHlLZXksIG5ld1ZhbHVlIGFzIHN0cmluZyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBwYXRjaENoaWxkcmVuKHBhcmVudDogTm9kZSwgb2xkQ2hpbGRyZW46IFZDaGlsZFtdLCBuZXdDaGlsZHJlbjogVkNoaWxkW10pOiB2b2lkIHtcblx0XHRjb25zdCBvbGRMZW5ndGg6IG51bWJlciA9IG9sZENoaWxkcmVuLmxlbmd0aDtcblx0XHRjb25zdCBuZXdMZW5ndGg6IG51bWJlciA9IG5ld0NoaWxkcmVuLmxlbmd0aDtcblx0XHRjb25zdCBjb21tb25MZW5ndGg6IG51bWJlciA9IE1hdGgubWluKG9sZExlbmd0aCwgbmV3TGVuZ3RoKTtcblxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBjb21tb25MZW5ndGg7IGkrKykge1xuXHRcdFx0dGhpcy5wYXRjaE5vZGUocGFyZW50LCBvbGRDaGlsZHJlbltpXSBhcyBWQ2hpbGQsIG5ld0NoaWxkcmVuW2ldIGFzIFZDaGlsZCk7XG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gY29tbW9uTGVuZ3RoOyBpIDwgbmV3TGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IG5ld0NoaWxkOiBWQ2hpbGQgPSBuZXdDaGlsZHJlbltpXSBhcyBWQ2hpbGQ7XG5cdFx0XHRjb25zdCBuZXdFbGVtZW50OiBIVE1MTWFwRWxlbWVudCA9IHRoaXMuZWxlbWVudENyZWF0b3IuY3JlYXRlKG5ld0NoaWxkKSBhcyBIVE1MTWFwRWxlbWVudDtcblx0XHRcdHBhcmVudC5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcblxuXHRcdFx0bmV3Q2hpbGQuZG9tID0gbmV3RWxlbWVudDtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSBvbGRMZW5ndGggLSAxOyBpID49IG5ld0xlbmd0aDsgaS0tKSB7XG5cdFx0XHRjb25zdCBvbGRDaGlsZDogVkNoaWxkID0gb2xkQ2hpbGRyZW5baV0gYXMgVkNoaWxkO1xuXHRcdFx0Y29uc3QgZG9tOiBOb2RlIHwgdW5kZWZpbmVkID0gb2xkQ2hpbGQuZG9tO1xuXHRcdFx0aWYgKGRvbSkge1xuXHRcdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQoZG9tKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtMeXJhU2NyaXB0UHJvZ3JhbX0gZnJvbSBcIi4uL2NvcmUvcHJvZ3JhbVwiO1xuaW1wb3J0IHtmZXRjaFNvdXJjZX0gZnJvbSBcIi4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcbmltcG9ydCB7Q2xhc3NEZWZpbml0aW9uLCBFbnZpcm9ubWVudCwgSW5zdGFuY2V9IGZyb20gXCIuLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge2NhbGxJbnN0YW5jZU1ldGhvZCwgTGFtYmRhRnVuY3Rpb25DYWxsfSBmcm9tIFwiLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9ydW50aW1lXCI7XG5pbXBvcnQge0V2ZW50VHlwZX0gZnJvbSBcIi4uL2xpYnJhcnkvY2xhc3Nlcy9ldmVudFwiO1xuaW1wb3J0IHtFdmVudFBpcGVsaW5lfSBmcm9tIFwiLi4vY29yZS9ldmVudC9waXBlbGluZVwiO1xuXG5jb25zdCBseXJhRXZlbnRDbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uID0gbmV3IEV2ZW50VHlwZSgpLmdldENsYXNzRGVmaW5pdGlvbigpO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVuZ2luZSB7XG5cdGV4ZWN1dGVFbnRyeUZpbGUodXJsOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcblxuXHRjcmVhdGVJbnN0YW5jZShjbGFzc05hbWU6IHN0cmluZyk6IEluc3RhbmNlO1xuXG5cdGdldE9iamVjdFJlZ2lzdHJ5KCk6IE9iamVjdFJlZ2lzdHJ5O1xuXG5cdGdldEVudmlyb25tZW50KCk6IEVudmlyb25tZW50O1xuXG5cdGdldFJvb3RJbnN0YW5jZSgpOiBJbnN0YW5jZTtcblxuXHRjYWxsUm9vdEluc3RhbmNlTWV0aG9kKG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10pOiBhbnk7XG5cblx0Y2FsbEluc3RhbmNlTWV0aG9kKGluc3RhbmNlOiBJbnN0YW5jZSwgbWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBBcnJheTxhbnk+KTogYW55O1xuXG5cdGNyZWF0ZUV2ZW50KGV2ZW50OiBFdmVudCk6IEluc3RhbmNlO1xuXG5cdGNyZWF0ZUV2ZW50SGFuZGxlcihoYW5kbGVyOiBMYW1iZGFGdW5jdGlvbkNhbGwsIGV2ZW50TmFtZTogc3RyaW5nKTogKGV2ZW50OiBFdmVudCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIFdlYkx5cmFTY3JpcHQgaW1wbGVtZW50cyBFbmdpbmUge1xuXHRwcml2YXRlIHJlYWRvbmx5IHByb2dyYW06IEx5cmFTY3JpcHRQcm9ncmFtO1xuXHRwcml2YXRlIHJlYWRvbmx5IF9nbG9iYWxPYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cdHByaXZhdGUgcmVhZG9ubHkgX2dsb2JhbEVudmlyb25tZW50OiBFbnZpcm9ubWVudDtcblx0cHJpdmF0ZSByb290SW5zdGFuY2U6IEluc3RhbmNlIHwgbnVsbCA9IG51bGw7XG5cblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGdsb2JhbEV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUgPSBuZXcgRXZlbnRQaXBlbGluZSgpLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpIHtcblx0XHR0aGlzLnByb2dyYW0gPSBuZXcgTHlyYVNjcmlwdFByb2dyYW0oaXNEZWJ1ZywgdGhpcy5nbG9iYWxFdmVudFBpcGVsaW5lKTtcblx0XHR0aGlzLl9nbG9iYWxPYmplY3RSZWdpc3RyeSA9IHRoaXMucHJvZ3JhbS5nZXRHbG9iYWxPYmplY3RSZWdpc3RyeSgpO1xuXHRcdHRoaXMuX2dsb2JhbEVudmlyb25tZW50ID0gdGhpcy5wcm9ncmFtLmdldEdsb2JhbEVudmlyb25tZW50KCk7XG5cdH1cblxuXHRnZXRPYmplY3RSZWdpc3RyeSgpOiBPYmplY3RSZWdpc3RyeSB7XG5cdFx0cmV0dXJuIHRoaXMuX2dsb2JhbE9iamVjdFJlZ2lzdHJ5O1xuXHR9XG5cblx0Z2V0RW52aXJvbm1lbnQoKTogRW52aXJvbm1lbnQge1xuXHRcdHJldHVybiB0aGlzLl9nbG9iYWxFbnZpcm9ubWVudDtcblx0fVxuXG5cdHB1YmxpYyBnZXRSb290SW5zdGFuY2UoKTogSW5zdGFuY2Uge1xuXHRcdGlmICh0aGlzLnJvb3RJbnN0YW5jZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdObyByb290IGluc3RhbmNlIGF2YWlsYWJsZS4nKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMucm9vdEluc3RhbmNlO1xuXHR9XG5cblx0cHVibGljIGNyZWF0ZUluc3RhbmNlKGNsYXNzTmFtZTogc3RyaW5nKTogSW5zdGFuY2Uge1xuXHRcdHJldHVybiB0aGlzLmdldENsYXNzRGVmaW5pdGlvbihjbGFzc05hbWUpXG5cdFx0ICAgICAgICAgICAuY29uc3RydWN0TmV3SW5zdGFuY2VXaXRob3V0QXJndW1lbnRzKFxuXHRcdFx0ICAgICAgICAgICB0aGlzLl9nbG9iYWxPYmplY3RSZWdpc3RyeSxcblx0XHRcdCAgICAgICAgICAgdGhpcy5fZ2xvYmFsRW52aXJvbm1lbnQsXG5cdFx0XHQgICAgICAgICAgIHRoaXMuZ2xvYmFsRXZlbnRQaXBlbGluZVxuXHRcdCAgICAgICAgICAgKTtcblx0fVxuXG5cdHB1YmxpYyBjYWxsUm9vdEluc3RhbmNlTWV0aG9kKG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10pOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLmNhbGxJbnN0YW5jZU1ldGhvZCh0aGlzLmdldFJvb3RJbnN0YW5jZSgpLCBtZXRob2ROYW1lLCBhcmdzKTtcblx0fVxuXG5cdHB1YmxpYyBjYWxsSW5zdGFuY2VNZXRob2QoaW5zdGFuY2U6IEluc3RhbmNlLCBtZXRob2ROYW1lOiBzdHJpbmcsIGFyZ3M6IGFueVtdKTogYW55IHtcblx0XHRyZXR1cm4gY2FsbEluc3RhbmNlTWV0aG9kKFxuXHRcdFx0aW5zdGFuY2UsXG5cdFx0XHRpbnN0YW5jZS5maW5kZU1ldGhvZE5vZGUobWV0aG9kTmFtZSksXG5cdFx0XHRhcmdzLFxuXHRcdFx0dGhpcy5fZ2xvYmFsT2JqZWN0UmVnaXN0cnksXG5cdFx0XHR0aGlzLl9nbG9iYWxFbnZpcm9ubWVudCxcblx0XHRcdHRoaXMuZ2xvYmFsRXZlbnRQaXBlbGluZVxuXHRcdCk7XG5cdH1cblxuXHRwdWJsaWMgYXN5bmMgZXhlY3V0ZUVudHJ5RmlsZSh1cmw6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gdGhpcy5wcm9ncmFtLmV4ZWN1dGUoYXdhaXQgZmV0Y2hTb3VyY2UodXJsKSlcblx0XHQgICAgICAgICAgIC50aGVuKCgpID0+IHtcblx0XHRcdCAgICAgICAgICAgdGhpcy5yb290SW5zdGFuY2UgPSB0aGlzLmNyZWF0ZUluc3RhbmNlKGNsYXNzTmFtZSk7XG5cdFx0ICAgICAgICAgICB9KTtcblx0fVxuXG5cdHB1YmxpYyBjcmVhdGVFdmVudChldmVudDogRXZlbnQpOiBJbnN0YW5jZSB7XG5cdFx0cmV0dXJuIGx5cmFFdmVudENsYXNzRGVmLmNvbnN0cnVjdE5hdGl2ZUluc3RhbmNlKFtldmVudF0pO1xuXHR9XG5cblx0cHVibGljIGNyZWF0ZUV2ZW50SGFuZGxlcihoYW5kbGVyOiBMYW1iZGFGdW5jdGlvbkNhbGwsIGV2ZW50TmFtZTogc3RyaW5nKTogKGV2ZW50OiBFdmVudCkgPT4gdm9pZCB7XG5cdFx0cmV0dXJuIChldmVudDogRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdHRoaXMuZ2xvYmFsRXZlbnRQaXBlbGluZS5lbWl0KFxuXHRcdFx0XHRldmVudE5hbWUsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpbnZva2U6ICgpOiBhbnkgPT4ge1xuXHRcdFx0XHRcdFx0aGFuZGxlci5ldmFsQ2FsbCh0aGlzLmNyZWF0ZUV2ZW50KGV2ZW50KSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRldmVudFxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH07XG5cdH1cblxuXG5cdHByaXZhdGUgZ2V0Q2xhc3NEZWZpbml0aW9uKGNsYXNzTmFtZTogc3RyaW5nKTogQ2xhc3NEZWZpbml0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5fZ2xvYmFsT2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQoY2xhc3NOYW1lKTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge3R5cGUgVk5vZGV9IGZyb20gXCIuLi9jb3JlL3Zkb20vdmRvbVwiO1xuaW1wb3J0IHR5cGUge0luc3RhbmNlfSBmcm9tIFwiLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5cbmV4cG9ydCBjbGFzcyBFdmVudEhhbmRsZXJSZWdpc3RyeSB7XG5cdHByaXZhdGUgcmVnaXN0cnk6IFdlYWtNYXA8SFRNTEVsZW1lbnQsIFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uPj4gPSBuZXcgV2Vha01hcDxIVE1MRWxlbWVudCwgUmVjb3JkPHN0cmluZywgRnVuY3Rpb24+PigpO1xuXG5cdHB1YmxpYyByZWdpc3RlcihlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcGVydHlLZXk6IHN0cmluZywgaGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcblx0XHRjb25zdCBldmVudEhhbmRsZXJzOiBSZWNvcmQ8c3RyaW5nLCBGdW5jdGlvbj4gPSB0aGlzLnJlZ2lzdHJ5LmdldChlbGVtZW50KSA/PyB7fTtcblxuXHRcdGV2ZW50SGFuZGxlcnNbcHJvcGVydHlLZXldID0gaGFuZGxlcjtcblxuXHRcdHRoaXMucmVnaXN0cnkuc2V0KGVsZW1lbnQsIGV2ZW50SGFuZGxlcnMpO1xuXHR9XG5cblx0cHVibGljIHVucmVnaXN0ZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIHByb3BlcnR5S2V5OiBzdHJpbmcpOiBGdW5jdGlvbiB8IG51bGwge1xuXHRcdGNvbnN0IGV2ZW50SGFuZGxlcnM6IFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uPiA9IHRoaXMucmVnaXN0cnkuZ2V0KGVsZW1lbnQpID8/IHt9O1xuXG5cdFx0Y29uc3QgZXZlbnRIYW5kbGVyOiBGdW5jdGlvbiB8IHVuZGVmaW5lZCA9IGV2ZW50SGFuZGxlcnNbcHJvcGVydHlLZXldO1xuXHRcdGlmIChldmVudEhhbmRsZXIpIHtcblx0XHRcdGRlbGV0ZSBldmVudEhhbmRsZXJzW3Byb3BlcnR5S2V5XTtcblxuXHRcdFx0dGhpcy5yZWdpc3RyeS5zZXQoZWxlbWVudCwgZXZlbnRIYW5kbGVycyk7XG5cblx0XHRcdHJldHVybiBldmVudEhhbmRsZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFZET00ge1xuXHRwcml2YXRlIGluc3RhbmNlTWFwOiBNYXA8c3RyaW5nLCBWTm9kZT4gPSBuZXcgTWFwPHN0cmluZywgVk5vZGU+KCk7XG5cblx0cHVibGljIHJlZ2lzdGVyKGluc3RhbmNlOiBJbnN0YW5jZSwgbm9kZTogVk5vZGUpOiB2b2lkIHtcblx0XHR0aGlzLmluc3RhbmNlTWFwLnNldChpbnN0YW5jZS5pZCwgbm9kZSk7XG5cdH1cblxuXHRwdWJsaWMgdW5yZWdpc3RlcihpbnN0YW5jZTogSW5zdGFuY2UpOiB2b2lkIHtcblx0XHR0aGlzLmluc3RhbmNlTWFwLmRlbGV0ZShpbnN0YW5jZS5pZCk7XG5cdH1cblxuXHRwdWJsaWMgZmluZE5vZGVCeUNvbXBvbmVudChpbnN0YW5jZTogSW5zdGFuY2UpOiBWTm9kZSB7XG5cdFx0Y29uc3Qgdk5vZGU6IFZOb2RlIHwgdW5kZWZpbmVkID0gdGhpcy5pbnN0YW5jZU1hcC5nZXQoaW5zdGFuY2UuaWQpO1xuXHRcdGlmICghdk5vZGUpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgSW5zdGFuY2Ugd2l0aCBpZCAke2luc3RhbmNlLmlkfSBub3QgZm91bmQuYCk7XG5cdFx0fVxuXHRcdHJldHVybiB2Tm9kZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge3R5cGUgRW5naW5lLCBXZWJMeXJhU2NyaXB0fSBmcm9tIFwiLi9lbmdpbmVcIjtcbmltcG9ydCB7dHlwZSBFbGVtZW50UGF0Y2hlciwgSFRNTEVsZW1lbnRQYXRjaGVyfSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCB0eXBlIHtWQ2hpbGR9IGZyb20gXCIuLi9jb3JlL3Zkb20vdmRvbVwiO1xuaW1wb3J0IHtFdmVudFBpcGVsaW5lfSBmcm9tIFwiLi4vY29yZS9ldmVudC9waXBlbGluZVwiO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcbmltcG9ydCB7dHlwZSBJbnN0YW5jZX0gZnJvbSBcIi4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtMYW1iZGFGdW5jdGlvbkNhbGx9IGZyb20gXCIuLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX3J1bnRpbWVcIjtcbmltcG9ydCB7RXZlbnRIYW5kbGVyUmVnaXN0cnksIFZET019IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5pbXBvcnQgTHlyYUV2ZW50cyBmcm9tIFwiLi4vY29yZS9ldmVudC9ldmVudHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBcHBsaWNhdGlvblJ1bnRpbWUge1xuXHRnZXQgZW5naW5lKCk6IEVuZ2luZTtcblxuXHRnZXQgZXZlbnRQaXBlbGluZSgpOiBFdmVudFBpcGVsaW5lO1xuXG5cdHN0YXJ0KHVybDogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG5cblx0Y3JlYXRlSW5zdGFuY2UoY2xhc3NOYW1lOiBzdHJpbmcpOiBJbnN0YW5jZTtcblxuXHRjYWxsUm9vdEluc3RhbmNlTWV0aG9kKG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10pOiBhbnk7XG5cblx0Y2FsbE1ldGhvZChpbnN0YW5jZTogSW5zdGFuY2UsIG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10pOiBhbnk7XG5cblx0cmVuZGVyQ29tcG9uZW50KGluc3RhbmNlOiBJbnN0YW5jZSk6IFZDaGlsZDtcblxuXHRhZGRFdmVudEhhbmRsZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIHByb3BlcnR5S2V5OiBzdHJpbmcsIGhhbmRsZXI6IExhbWJkYUZ1bmN0aW9uQ2FsbCk6IHZvaWQ7XG5cblx0cmVtb3ZlRXZlbnRIYW5kbGVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwcm9wZXJ0eUtleTogc3RyaW5nKTogdm9pZDtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0QXBwbGljYXRpb25SdW50aW1lIGltcGxlbWVudHMgQXBwbGljYXRpb25SdW50aW1lIHtcblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgX2VuZ2luZTogRW5naW5lLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgX2V2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUgPSBuZXcgRXZlbnRQaXBlbGluZSgpLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgZXZlbnRIYW5kbGVyUmVnaXN0cnk6IEV2ZW50SGFuZGxlclJlZ2lzdHJ5ID0gbmV3IEV2ZW50SGFuZGxlclJlZ2lzdHJ5KClcblx0KSB7XG5cdH1cblxuXHRnZXQgZW5naW5lKCk6IEVuZ2luZSB7XG5cdFx0cmV0dXJuIHRoaXMuX2VuZ2luZTtcblx0fVxuXG5cdGdldCBldmVudFBpcGVsaW5lKCk6IEV2ZW50UGlwZWxpbmUge1xuXHRcdHJldHVybiB0aGlzLl9ldmVudFBpcGVsaW5lO1xuXHR9XG5cblx0cHVibGljIHJlbmRlckNvbXBvbmVudChpbnN0YW5jZTogSW5zdGFuY2UpOiBWQ2hpbGQge1xuXHRcdHJldHVybiB0aGlzLmNhbGxNZXRob2QoaW5zdGFuY2UsICdyZW5kZXInLCBbXSkgYXMgVkNoaWxkXG5cdH1cblxuXHRwdWJsaWMgc3RhcnQodXJsOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG5cdH1cblxuXHRwdWJsaWMgY3JlYXRlSW5zdGFuY2UoY2xhc3NOYW1lOiBzdHJpbmcpOiBJbnN0YW5jZSB7XG5cdFx0cmV0dXJuIHRoaXMuX2VuZ2luZS5jcmVhdGVJbnN0YW5jZShjbGFzc05hbWUpO1xuXHR9XG5cblx0cHVibGljIGNhbGxSb290SW5zdGFuY2VNZXRob2QobWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSA9IFtdKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5fZW5naW5lLmNhbGxSb290SW5zdGFuY2VNZXRob2QobWV0aG9kTmFtZSwgYXJncyk7XG5cdH1cblxuXHRwdWJsaWMgY2FsbE1ldGhvZChpbnN0YW5jZTogSW5zdGFuY2UsIG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10gPSBbXSk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuX2VuZ2luZS5jYWxsSW5zdGFuY2VNZXRob2QoaW5zdGFuY2UsIG1ldGhvZE5hbWUsIGFyZ3MpO1xuXHR9XG5cblx0cHVibGljIGFkZEV2ZW50SGFuZGxlcihlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcGVydHlLZXk6IHN0cmluZywgaGFuZGxlcjogTGFtYmRhRnVuY3Rpb25DYWxsKTogdm9pZCB7XG5cdFx0Y29uc3QgZXZlbnROYW1lOiBzdHJpbmcgPSBwcm9wZXJ0eUtleS5zbGljZSgyKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcblxuXHRcdGNvbnN0IGV2ZW50SGFuZGxlcjogKGV2ZW50OiBFdmVudCkgPT4gdm9pZCA9IHRoaXMuZW5naW5lLmNyZWF0ZUV2ZW50SGFuZGxlcihoYW5kbGVyLCBFdmVudHMuRE9NX0VWRU5UKTtcblxuXHRcdHRoaXMuZXZlbnRIYW5kbGVyUmVnaXN0cnkucmVnaXN0ZXIoZWxlbWVudCwgcHJvcGVydHlLZXksIGV2ZW50SGFuZGxlcik7XG5cblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudEhhbmRsZXIpO1xuXHR9XG5cblx0cHVibGljIHJlbW92ZUV2ZW50SGFuZGxlcihlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcGVydHlLZXk6IHN0cmluZyk6IHZvaWQge1xuXHRcdGNvbnN0IGV2ZW50TmFtZTogc3RyaW5nID0gcHJvcGVydHlLZXkuc2xpY2UoMilcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRjb25zdCBldmVudEhhbmRsZXI6IEZ1bmN0aW9uIHwgbnVsbCA9IHRoaXMuZXZlbnRIYW5kbGVyUmVnaXN0cnkudW5yZWdpc3RlcihlbGVtZW50LCBwcm9wZXJ0eUtleSk7XG5cblx0XHRpZiAoZXZlbnRIYW5kbGVyKSB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudEhhbmRsZXIgYXMgRXZlbnRMaXN0ZW5lcik7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBXZWJBcHBsaWNhdGlvblJ1bnRpbWUgZXh0ZW5kcyBBYnN0cmFjdEFwcGxpY2F0aW9uUnVudGltZSB7XG5cdHByaXZhdGUgcmVhZG9ubHkgdmRvbTogVkRPTSA9IG5ldyBWRE9NKCk7XG5cdHByaXZhdGUgcmVhZG9ubHkgcGF0Y2hlcjogRWxlbWVudFBhdGNoZXI7XG5cblx0cHJpdmF0ZSBpc1JlbmRlcmluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdG1vdW50UG9pbnQ6IEhUTUxFbGVtZW50LFxuXHRcdGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSxcblx0XHRldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lID0gbmV3IEV2ZW50UGlwZWxpbmUoKSxcblx0XHRldmVudEhhbmRsZXJSZWdpc3RyeTogRXZlbnRIYW5kbGVyUmVnaXN0cnkgPSBuZXcgRXZlbnRIYW5kbGVyUmVnaXN0cnkoKVxuXHQpIHtcblx0XHRzdXBlcihuZXcgV2ViTHlyYVNjcmlwdChldmVudFBpcGVsaW5lLCBpc0RlYnVnKSwgZXZlbnRQaXBlbGluZSwgZXZlbnRIYW5kbGVyUmVnaXN0cnkpO1xuXG5cdFx0dGhpcy5wYXRjaGVyID0gbmV3IEhUTUxFbGVtZW50UGF0Y2hlcihtb3VudFBvaW50LCB0aGlzLCB0aGlzLnZkb20pO1xuXG5cdFx0dGhpcy5leHBvc2VSdW50aW1lKCk7XG5cdH1cblxuXHRwdWJsaWMgb3ZlcnJpZGUgYXN5bmMgc3RhcnQodXJsOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nID0gJ1Byb2dyYW0nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0YXdhaXQgdGhpcy5lbmdpbmUuZXhlY3V0ZUVudHJ5RmlsZSh1cmwsIGNsYXNzTmFtZSk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKTtcblxuXHRcdHRoaXMucmVxdWVzdENvbXBvbmVudFJlbmRlcih0aGlzLmVuZ2luZS5nZXRSb290SW5zdGFuY2UoKSk7XG5cdH1cblxuXG5cdHB1YmxpYyByZXF1ZXN0Q29tcG9uZW50UmVuZGVyKGluc3RhbmNlOiBJbnN0YW5jZSwgb2xkQ2hpbGQ/OiBWQ2hpbGQpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pc1JlbmRlcmluZykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHF1ZXVlTWljcm90YXNrKCgpOiB2b2lkID0+IHRoaXMucGVyZm9ybUNvbXBvbmVudFJlbmRlcihpbnN0YW5jZSwgb2xkQ2hpbGQpKTtcblx0fVxuXG5cdHByaXZhdGUgcGVyZm9ybUNvbXBvbmVudFJlbmRlcihpbnN0YW5jZTogSW5zdGFuY2UsIG9sZENoaWxkOiBWQ2hpbGQgfCBudWxsID0gbnVsbCk6IHZvaWQge1xuXHRcdHRoaXMuaXNSZW5kZXJpbmcgPSB0cnVlO1xuXG5cdFx0Y29uc3QgbmV4dENoaWxkOiBWQ2hpbGQgPSB0aGlzLnJlbmRlckNvbXBvbmVudChpbnN0YW5jZSk7XG5cblx0XHR0aGlzLnBhdGNoZXIucGF0Y2gob2xkQ2hpbGQsIG5leHRDaGlsZCk7XG5cblx0XHR0aGlzLnZkb20ucmVnaXN0ZXIoaW5zdGFuY2UsIG5leHRDaGlsZCk7XG5cblx0XHRpbnN0YW5jZS5tYXJrQ2xlYW4odGhpcy5ldmVudFBpcGVsaW5lKTtcblxuXHRcdHRoaXMuaXNSZW5kZXJpbmcgPSBmYWxzZTtcblx0fVxuXG5cdHByaXZhdGUgcmVnaXN0ZXJFdmVudExpc3RlbmVycygpOiB2b2lkIHtcblx0XHR0aGlzLmV2ZW50UGlwZWxpbmVcblx0XHQgICAgLm9uKEV2ZW50cy5ET01fRVZFTlQsICh7aW52b2tlfTogYW55KTogdm9pZCA9PiB7XG5cdFx0XHQgICAgaW52b2tlKCk7XG5cdFx0ICAgIH0pO1xuXG5cdFx0dGhpcy5ldmVudFBpcGVsaW5lXG5cdFx0ICAgIC5vbihMeXJhRXZlbnRzLkxZUkFfSU5TVEFOQ0VfRElSVFlfU1RBVEUsICh7aW5zdGFuY2V9OiBhbnkpOiB2b2lkID0+IHtcblx0XHRcdCAgICB0aGlzLnJlcXVlc3RDb21wb25lbnRSZW5kZXIoaW5zdGFuY2UsIHRoaXMudmRvbS5maW5kTm9kZUJ5Q29tcG9uZW50KGluc3RhbmNlKSBhcyBWQ2hpbGQpO1xuXHRcdCAgICB9KTtcblx0fVxuXG5cdHByaXZhdGUgZXhwb3NlUnVudGltZSgpOiB2b2lkIHtcblx0XHRjb25zdCBnbG9iYWw6IGFueSA9IHdpbmRvdyBhcyBXaW5kb3c7XG5cblx0XHRnbG9iYWwuX19MWVJBX18gPSBnbG9iYWwuX19MWVJBX18gfHwge1xuXHRcdFx0dmVyc2lvbjogJzAuMC4xJyxcblx0XHRcdHJ1bnRpbWU6IHRoaXMsXG5cdFx0fTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4vY29yZS9wYXJzZXIvcGFyc2VyXCI7XG5pbXBvcnQge3dyYXBKc0Vycm9yfSBmcm9tIFwiLi9jb3JlL2Vycm9yc1wiO1xuaW1wb3J0IHtmZXRjaFNvdXJjZSwgU291cmNlfSBmcm9tIFwiLi9jb3JlL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5pbXBvcnQge0FTVE5vZGV9IGZyb20gXCIuL2NvcmUvYXN0XCI7XG5pbXBvcnQge1Rva2VuaXplcn0gZnJvbSBcIi4vY29yZS90b2tlbml6ZXIvdG9rZW5pemVyXCI7XG5pbXBvcnQge1Rva2VufSBmcm9tIFwiLi9jb3JlL2dyYW1tYXJcIjtcbmltcG9ydCB7THlyYVNjcmlwdFByb2dyYW19IGZyb20gXCIuL2NvcmUvcHJvZ3JhbVwiO1xuaW1wb3J0IHtFdmVudFBpcGVsaW5lfSBmcm9tIFwiLi9jb3JlL2V2ZW50L3BpcGVsaW5lXCI7XG5pbXBvcnQge1N0YXRlfSBmcm9tIFwiLi9jb3JlL2V2ZW50L3N0YXRlXCI7XG5pbXBvcnQge0hUTUxFbGVtZW50Q3JlYXRvcn0gZnJvbSBcIi4vaG9zdC9kb21cIjtcblxuZXhwb3J0IHtXZWJMeXJhU2NyaXB0fSBmcm9tIFwiLi9ob3N0L2VuZ2luZVwiO1xuZXhwb3J0IHtXZWJBcHBsaWNhdGlvblJ1bnRpbWV9IGZyb20gXCIuL2hvc3QvcnVudGltZVwiO1xuXG5jb25zdCBMeXJhID0ge1xuXHRTb3VyY2UsXG5cdFBhcnNlcixcblx0VG9rZW5pemVyLFxuXHRFdmVudFBpcGVsaW5lLFxuXHRIVE1MRWxlbWVudENyZWF0b3IsXG5cdFN0YXRlLFxuXHRQcm9ncmFtOiAoaXNEZWJ1ZzogYm9vbGVhbik6IEx5cmFTY3JpcHRQcm9ncmFtID0+IFByb2dyYW0oaXNEZWJ1ZyksXG5cdGV4ZWN1dGU6IChzb3VyY2U6IFNvdXJjZSwgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiBleGVjdXRlKHNvdXJjZSwgaXNEZWJ1ZyksXG5cdGV4ZWN1dGVGcm9tU3RyaW5nOiAoY29kZTogc3RyaW5nLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+ID0+IGV4ZWN1dGVGcm9tU3RyaW5nKGNvZGUsIGlzRGVidWcpLFxuXHRleGVjdXRlRnJvbVVybDogYXN5bmMgKHVybDogc3RyaW5nLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+ID0+IGV4ZWN1dGVGcm9tVXJsKHVybCwgaXNEZWJ1ZyksXG5cdGV4ZWN1dGVUZXN0OiAoc291cmNlOiBTb3VyY2UsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4gPT4gZXhlY3V0ZVRlc3Qoc291cmNlLCBpc0RlYnVnKSxcblx0ZXhlY3V0ZVRlc3RTdHJpbmc6IChjb2RlOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4gPT4gZXhlY3V0ZVRlc3RTdHJpbmcoY29kZSwgaXNEZWJ1ZyksXG5cdGV4ZWN1dGVUZXN0VXJsOiAodXJsOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4gPT4gZXhlY3V0ZVRlc3RVcmwodXJsLCBpc0RlYnVnKSxcblx0dG9rZW5pemU6IChzb3VyY2U6IFNvdXJjZSk6IFRva2VuW10gPT4gdG9rZW5pemUoc291cmNlKSxcblx0dG9rZW5pemVVcmw6ICh1cmw6IHN0cmluZyk6IFByb21pc2U8VG9rZW5bXT4gPT4gdG9rZW5pemVVcmwodXJsKSxcblx0cGFyc2VUcmVlOiAoc291cmNlOiBTb3VyY2UpOiBBU1ROb2RlID0+IHBhcnNlVHJlZShzb3VyY2UpLFxuXHRwYXJzZVRyZWVVcmw6ICh1cmw6IHN0cmluZyk6IFByb21pc2U8QVNUTm9kZT4gPT4gcGFyc2VUcmVlVXJsKHVybCksXG59O1xuXG5mdW5jdGlvbiBQcm9ncmFtKGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IEx5cmFTY3JpcHRQcm9ncmFtIHtcblx0cmV0dXJuIG5ldyBMeXJhU2NyaXB0UHJvZ3JhbShpc0RlYnVnKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZShzb3VyY2U6IFNvdXJjZSwgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IFByb2dyYW0oaXNEZWJ1Zylcblx0XHRcdC5leGVjdXRlKHNvdXJjZSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3Iod3JhcEpzRXJyb3IoZXJyb3IsIHNvdXJjZSlcblx0XHRcdFx0ICAgICAgICAgICAgICAuZm9ybWF0KCkpO1xuXHRcdH1cblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlRnJvbVVybCh1cmw6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdHJldHVybiBhd2FpdCBleGVjdXRlKGF3YWl0IGZldGNoU291cmNlKHVybCksIGlzRGVidWcpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlRnJvbVN0cmluZyhjb2RlOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBzb3VyY2UgPSBuZXcgU291cmNlKGNvZGUpO1xuXG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IFByb2dyYW0oaXNEZWJ1Zylcblx0XHRcdC5leGVjdXRlKHNvdXJjZSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3Iod3JhcEpzRXJyb3IoZXJyb3IsIHNvdXJjZSlcblx0XHRcdFx0ICAgICAgICAgICAgICAuZm9ybWF0KCkpO1xuXHRcdH1cblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlVGVzdChzb3VyY2U6IFNvdXJjZSwgaXNEZWJ1ZyA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IFByb2dyYW0oaXNEZWJ1Zylcblx0XHRcdC5leGVjdXRlVGVzdChzb3VyY2UpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKHdyYXBKc0Vycm9yKGVycm9yLCBzb3VyY2UpXG5cdFx0XHRcdCAgICAgICAgICAgICAgLmZvcm1hdCgpKTtcblx0XHR9XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZVRlc3RVcmwodXJsOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4ge1xuXHRyZXR1cm4gYXdhaXQgZXhlY3V0ZVRlc3QoYXdhaXQgZmV0Y2hTb3VyY2UodXJsKSwgaXNEZWJ1Zyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVUZXN0U3RyaW5nKGNvZGU6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHNvdXJjZSA9IG5ldyBTb3VyY2UoY29kZSk7XG5cblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgUHJvZ3JhbShpc0RlYnVnKVxuXHRcdFx0LmV4ZWN1dGVUZXN0KHNvdXJjZSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3Iod3JhcEpzRXJyb3IoZXJyb3IsIHNvdXJjZSlcblx0XHRcdFx0ICAgICAgICAgICAgICAuZm9ybWF0KCkpO1xuXHRcdH1cblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9rZW5pemUoc291cmNlOiBTb3VyY2UpOiBUb2tlbltdIHtcblx0cmV0dXJuIG5ldyBUb2tlbml6ZXIoc291cmNlKS50b2tlbml6ZSgpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdG9rZW5pemVVcmwodXJsOiBzdHJpbmcpOiBQcm9taXNlPFRva2VuW10+IHtcblx0cmV0dXJuIHRva2VuaXplKGF3YWl0IGZldGNoU291cmNlKHVybCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUcmVlKHNvdXJjZTogU291cmNlKTogQVNUTm9kZSB7XG5cdHJldHVybiBuZXcgUGFyc2VyKHNvdXJjZSkucGFyc2UoKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBhcnNlVHJlZVVybCh1cmw6IHN0cmluZyk6IFByb21pc2U8QVNUTm9kZT4ge1xuXHRyZXR1cm4gcGFyc2VUcmVlKGF3YWl0IGZldGNoU291cmNlKHVybCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMeXJhO1xuIgogIF0sCiAgIm1hcHBpbmdzIjogIjtBQUVPLE1BQU0sUUFBUTtBQUFBLFNBQ2IsU0FBaUI7QUFBQSxTQUNqQixPQUFlO0FBQUEsU0FDZixNQUFjO0FBQUEsU0FDZCxPQUFlO0FBQUEsU0FDZixRQUFnQjtBQUFBLFNBQ2hCLFlBQW9CO0FBQUEsU0FDcEIsVUFBa0I7QUFBQSxTQUNsQixhQUFxQjtBQUFBLFNBQ3JCLGNBQXNCO0FBQUEsU0FDdEIsV0FBbUI7QUFBQSxTQUNuQixNQUFjO0FBQUEsU0FDZCxPQUFlO0FBQUEsU0FDZixTQUFpQjtBQUFBLFNBQ2pCLFVBQWtCO0FBQUEsU0FDbEIsU0FBaUI7QUFBQSxTQUNqQixXQUFtQjtBQUFBLFNBQ25CLFNBQWlCO0FBQUEsU0FDakIsUUFBZ0I7QUFBQSxTQUNoQixPQUFlO0FBQUEsU0FDZixRQUFnQjtBQUFBLFNBQ2hCLEtBQWE7QUFBQSxTQUNiLE9BQWU7QUFBQSxTQUNmLFFBQWdCO0FBQUEsU0FDaEIsVUFBa0I7QUFBQSxTQUNsQixVQUFrQjtBQUFBLFNBQ2xCLEtBQWE7QUFBQSxTQUNiLE9BQWU7QUFBQSxTQUNmLE9BQWU7QUFBQSxTQUVmLHNCQUE4QjtBQUFBLFNBQzlCLHVCQUErQjtBQUFBLFNBQy9CLGFBQXFCO0FBQUEsU0FDckIsY0FBc0I7QUFBQSxTQUN0QixtQkFBMkI7QUFBQSxTQUMzQixvQkFBNEI7QUFBQSxTQUM1QixZQUFvQjtBQUFBLFNBQ3BCLFFBQWdCO0FBQUEsU0FDaEIsUUFBZ0I7QUFBQSxTQUVoQixRQUFnQjtBQUFBLFNBQ2hCLE1BQWM7QUFBQSxTQUNkLFNBQWlCO0FBQUEsU0FDakIsT0FBZTtBQUFBLFNBQ2YsUUFBZ0I7QUFBQSxTQUNoQixTQUFpQjtBQUFBLFNBQ2pCLFdBQW1CO0FBQUEsU0FDbkIsVUFBa0I7QUFBQSxTQUVsQixtQkFBMkI7QUFBQSxTQUMzQixnQkFBd0I7QUFBQSxTQUN4QixZQUFvQjtBQUFBLFNBQ3BCLGVBQXVCO0FBQUEsU0FDdkIsYUFBcUI7QUFBQSxTQUNyQixnQkFBd0I7QUFBQSxTQUN4QixRQUFnQjtBQUFBLFNBQ2hCLFlBQW9CO0FBQUEsU0FDcEIsTUFBYztBQUFBLFNBQ2QsS0FBYTtBQUFBLFNBRWIsZ0JBQXdCO0FBQUEsU0FDeEIscUJBQTZCO0FBQUEsU0FFN0IsV0FBcUI7QUFBQSxJQUMzQixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsRUFDVDtBQUFBLFNBQ08sYUFBdUI7QUFBQSxJQUM3QixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsRUFDVDtBQUFBLFNBQ08sYUFBdUI7QUFBQSxJQUM3QixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsRUFDVDtBQUFBLFNBQ08sV0FBcUI7QUFBQSxJQUMzQixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsRUFDVDtBQUFBLFNBQ08sVUFBb0I7QUFBQSxJQUMxQixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsRUFDVDtBQUFBLFNBQ08sWUFBc0I7QUFBQSxJQUM1QixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsRUFDVDtBQUFBLFNBQ08saUJBQTJCO0FBQUEsSUFDakMsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLEVBQ1Q7QUFBQSxTQUNPLGtCQUE0QjtBQUFBLElBQ2xDLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxFQUNUO0FBQUEsU0FDTyxlQUF5QjtBQUFBLElBQy9CLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxFQUNUO0FBQUEsU0FDTyxnQkFBMEI7QUFBQSxJQUNoQyxRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsRUFDVDtBQUFBLFNBQ08sbUJBQTZCO0FBQUEsSUFDbkMsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtB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
