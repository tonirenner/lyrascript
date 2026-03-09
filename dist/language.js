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
  static UNARY_PLUS = "u+";
  static UNARY_MINUS = "u-";
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
  static PROGRAM = "program";
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
  static OVERLOADABLE_OPERATORS = [
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
    GRAMMAR.EXCLAMATION_MARK,
    GRAMMAR.UNARY_PLUS,
    GRAMMAR.UNARY_MINUS
  ];
  static OVERLOADABLE_OPERATOR_METHOD_MAP = new Map([
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
    [GRAMMAR.EXCLAMATION_MARK, "__not"],
    [GRAMMAR.UNARY_PLUS, "__unary_plus"],
    [GRAMMAR.UNARY_MINUS, "__unary_minus"]
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

// language/src/core/parser/source.ts
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
  static COMPILE_ERROR = "CompileError";
  static VIRTUAL_MACHINE_ERROR = "VirtualMachineError";
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

class LyraCompileError extends LyraError {
  constructor(message, span = null, cause = null) {
    super(ErrorTypes.COMPILE_ERROR, message, span, cause);
  }
}

class VirtualMachineError extends LyraError {
  constructor(message, span = null, cause = null) {
    super(ErrorTypes.VIRTUAL_MACHINE_ERROR, message, span, cause);
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
function throwCompileError(message, span = null, cause = null) {
  throw new LyraCompileError(message, span, cause);
}
function throwVirtualMachineError(message, span = null, cause = null) {
  throw new VirtualMachineError(message, span, cause);
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

// language/src/core/runtime/runtime_conversion.ts
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
  toNumber() {
    return this.value;
  }
  toString() {
    return this.value.toString();
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
  __not() {
    return !this.value;
  }
  __unary_plus() {
    return new LyraNumber(+this.value);
  }
  __unary_minus() {
    return new LyraNumber(-this.value);
  }
}

class NumberType extends NativeClass {
  static CLASS_NAME = CLASS_NAME4;
  constructor() {
    super(CLASS_NAME4, LyraNumber, new Source(`
class ${CLASS_NAME4} {
	public constructor(value: number);
	
	public toNumber(): number;
	
	public toString(): string;
	
	public operator +(other: ${CLASS_NAME4}): ${CLASS_NAME4};
	
	private __add(other: ${CLASS_NAME4}): ${CLASS_NAME4};
	
	public operator -(other: ${CLASS_NAME4}): ${CLASS_NAME4};
	
	private __subtract(other: ${CLASS_NAME4}): ${CLASS_NAME4};
	
	public operator *(other: ${CLASS_NAME4}): ${CLASS_NAME4};
	
	private __multiply(other: ${CLASS_NAME4}): ${CLASS_NAME4};
	
	public operator /(other: ${CLASS_NAME4}): ${CLASS_NAME4};
	
	private __divide(other: ${CLASS_NAME4}): ${CLASS_NAME4};
	
	public operator %(other: ${CLASS_NAME4}): ${CLASS_NAME4};
	
	private __modulus(other: ${CLASS_NAME4}): ${CLASS_NAME4};
	
	public operator ==(other: ${CLASS_NAME4}): ${CLASS_NAME4};
	
	private __equal(other: ${CLASS_NAME4}): ${CLASS_NAME4};
	
	public operator !=(other: ${CLASS_NAME4}): ${CLASS_NAME4};
	
	private __not_equal(other: ${CLASS_NAME4}): ${CLASS_NAME4};
	
	public operator <(other: ${CLASS_NAME4}): ${CLASS_NAME4};
	
	private __less_than(other: ${CLASS_NAME4}): ${CLASS_NAME4};
	
	public operator <=(other: ${CLASS_NAME4}): ${CLASS_NAME4};
	
	private __less_equal(other: ${CLASS_NAME4}): ${CLASS_NAME4};
	
	public operator >(other: ${CLASS_NAME4}): ${CLASS_NAME4};
	
	private __greater_than(other: ${CLASS_NAME4}): ${CLASS_NAME4};
	
	public operator >=(other: ${CLASS_NAME4}): ${CLASS_NAME4};
	
	private __greater_equal(other: ${CLASS_NAME4}): ${CLASS_NAME4};
	
	public operator !(): boolean;
	
	private __not(): boolean;
	
	public operator u+(): ${CLASS_NAME4};
	
	private __unary_plus(): ${CLASS_NAME4};
	
	public operator u-(): ${CLASS_NAME4};
	
	private __unary_minus(): ${CLASS_NAME4};
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
	public constructor(values: Array<T> = []);
	
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

// language/src/core/runtime/type_objects.ts
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
  currentMethodSymbol = null;
  constructor(parent = null) {
    this.parent = parent;
    this.currentObjectSymbol = parent?.currentObjectSymbol ?? null;
    this.currentMethodSymbol = parent?.currentMethodSymbol ?? null;
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

// language/src/core/runtime/type_autoboxing.ts
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

class Type_autoboxing {
  static CLASSNAME_MAP = new Map([
    [Types.NUMBER, AutoboxedTypes.NUMBER],
    [Types.STRING, AutoboxedTypes.STRING],
    [Types.BOOLEAN, AutoboxedTypes.BOOLEAN]
  ]);
  static autoboxIfNeeded(objectType, objectRegistry) {
    const className = Type_autoboxing.CLASSNAME_MAP.get(objectType);
    if (className) {
      return new ClassRefType(objectRegistry.types.getClassSymbol(className));
    }
    return objectType;
  }
}

// language/src/core/interpreter/evaluation.ts
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
    case ASTNodeType.PROGRAM: {
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
      return evalClass(node, objectRegistry, environment, eventPipeline);
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
      return evalIf(node, objectRegistry, environment, eventPipeline, thisValue);
    }
    case ASTNodeType.MATCH: {
      return evalMatch(node, objectRegistry, environment, eventPipeline, thisValue);
    }
    case ASTNodeType.FOREACH: {
      return evalForeach(node, objectRegistry, environment, eventPipeline, thisValue);
    }
    case ASTNodeType.VDOM: {
      return evalVDomNode(node, objectRegistry, environment, eventPipeline, thisValue);
    }
    case ASTNodeType.EXPRESSION: {
      return evalExpression(node.expr, objectRegistry, environment, eventPipeline, thisValue);
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
      return evalBinary(expr, objectRegistry, environment, eventPipeline, thisValue);
    }
    case ASTNodeType.UNARY: {
      return evalUnary(expr, objectRegistry, environment, eventPipeline, thisValue);
    }
    case ASTNodeType.ASSIGNMENT: {
      return evalAssign(expr, objectRegistry, environment, eventPipeline, thisValue);
    }
    case ASTNodeType.MEMBER: {
      return evalMember(expr, objectRegistry, environment, eventPipeline, thisValue);
    }
    case ASTNodeType.CALL: {
      return evalCall(expr, objectRegistry, environment, eventPipeline, thisValue);
    }
    case ASTNodeType.VDOM: {
      return evalVDomNode(expr, objectRegistry, environment, eventPipeline, thisValue);
    }
    case ASTNodeType.NEW: {
      return evalNew(expr, objectRegistry, environment, eventPipeline);
    }
    case ASTNodeType.ARRAY: {
      return evalArray(expr, objectRegistry, environment, eventPipeline, thisValue);
    }
    case ASTNodeType.INDEX: {
      return evalIndex(expr, objectRegistry, environment, eventPipeline, thisValue);
    }
    case ASTNodeType.LAMBDA: {
      return evalLambda(expr, objectRegistry, environment, eventPipeline, thisValue);
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
      const methodName = ASTOperatorNode.OVERLOADABLE_OPERATOR_METHOD_MAP.get(expr.operator);
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
    let op = node.operator;
    if (op === GRAMMAR.PLUS) {
      op = GRAMMAR.UNARY_PLUS;
    } else if (op === GRAMMAR.MINUS) {
      op = GRAMMAR.UNARY_MINUS;
    }
    return callInstanceMethod(value, value.findeMethodNode(op), [], objectRegistry, environment, eventPipeline);
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

// language/src/core/runtime/objects.ts
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

// language/src/core/parser/statements.ts
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
  return new ASTNode(ASTNodeType.PROGRAM, children);
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
  let operatorToken;
  try {
    operatorToken = parser.expectOperator();
  } catch (e) {
    parser.rewind();
    parser.expectIdentifier("u");
    operatorToken = parser.expectOperator();
    operatorToken.value = "u" + operatorToken.value;
  }
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
  if (!ASTOperatorNode.OVERLOADABLE_OPERATORS.includes(node.operator)) {
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
    case GRAMMAR.EXCLAMATION_MARK:
    case GRAMMAR.MINUS:
    case GRAMMAR.PLUS: {
      parser.next();
      const argument = parseUnary(parser);
      return new ASTUnaryNode(token.value, argument);
    }
    default: {
      return parsePrimary(parser);
    }
  }
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

// language/src/core/runtime/runtime_registry.ts
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
        constructorScope.currentMethodSymbol = constructorSymbol;
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
        methodScope.currentMethodSymbol = methodSymbol;
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
        staticScope.currentMethodSymbol = methodSymbol;
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
        methodScope.currentMethodSymbol = methodSymbol;
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
    iterableType = Type_autoboxing.autoboxIfNeeded(iterableType, this.objectRegistry);
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
      case ASTNodeType.ASSIGNMENT: {
        if (expr instanceof ASTAssignmentNode) {
          return this.checkAssignment(expr, scope);
        }
        break;
      }
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
  checkAssignment(node, scope) {
    const leftType = this.checkExpression(node.left, scope);
    const rightType = this.checkExpression(node.right, scope);
    this.checkAssignable(leftType, rightType, node.right);
    this.checkReadonly(node.left, scope);
    return leftType;
  }
  checkReadonly(node, scope) {
    if (node instanceof ASTMemberNode) {
      const objectType = this.checkExpression(node.object, scope);
      if (!(objectType instanceof ClassRefType)) {
        this.typeError(`Cannot assign to non-object`, node);
      }
      const classSymbol = objectType.classSymbol;
      const staticFieldSymbol = classSymbol.resolveStaticFieldSymbol(node.property);
      if (staticFieldSymbol) {
        return;
      }
      const instanceFieldSymbol = classSymbol.resolveInstanceFieldSymbol(node.property);
      if (!instanceFieldSymbol) {
        this.typeError(`Unknown member ${node.property}`, node);
      }
      const inConstructor = scope.currentMethodSymbol?.name === GRAMMAR.CONSTRUCTOR;
      let isThis = false;
      if (scope.currentObjectSymbol instanceof ClassSymbol) {
        isThis = scope.currentObjectSymbol === objectType.classSymbol;
      }
      if (!(inConstructor && isThis)) {
        this.typeError(`Cannot assign to readonly property '${instanceFieldSymbol.name}'`, node);
      }
    }
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
          return Types.NUMBER;
        }
        this.typeError(`Unary '-' requires number, got ${operand.name}`, node);
      }
      case GRAMMAR.PLUS: {
        if (operand.equals(Types.NUMBER)) {
          return Types.NUMBER;
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
    objectType = Type_autoboxing.autoboxIfNeeded(objectType, this.objectRegistry);
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

// language/src/core/testsuites.ts
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

// language/src/core/linker/loaders.ts
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

// language/src/core/virtualmachine/opcodes.ts
function getOpcodeName(code) {
  return Object.entries(Opcodes).find(([_, value]) => value === code)?.[0];
}
var Opcodes = {
  LOAD_CONST: 1,
  LOAD_VAR: 2,
  STORE_VAR: 3,
  LOAD_THIS: 4,
  ADD: 16,
  SUB: 17,
  MUL: 18,
  DIV: 19,
  MOD: 20,
  EQ: 25,
  NE: 32,
  NOT: 33,
  LT: 34,
  LE: 35,
  GT: 36,
  GE: 37,
  AND: 48,
  OR: 49,
  NEG: 64,
  POS: 65,
  UNARY_NOT: 66,
  GET_FIELD: 80,
  SET_FIELD: 81,
  CALL_METHOD: 96,
  CLASS_DEF: 112,
  FIELD_DEF: 113,
  END_CLASS: 114,
  METHOD_DEF: 115,
  END_METHOD: 116,
  NEW: 128,
  RETURN: 144,
  POP: 256,
  JUMP: 272,
  JUMP_IF_FALSE: 273
};
var BinaryOpcodeMap = {
  "+": Opcodes.ADD,
  "-": Opcodes.SUB,
  "*": Opcodes.MUL,
  "/": Opcodes.DIV,
  "%": Opcodes.MOD,
  "==": Opcodes.EQ,
  "!=": Opcodes.NE,
  "<": Opcodes.LT,
  "<=": Opcodes.LE,
  ">": Opcodes.GT,
  ">=": Opcodes.GE,
  "&&": Opcodes.AND,
  "||": Opcodes.OR
};
var UnaryOpcodeMap = {
  "+": Opcodes.POS,
  "-": Opcodes.NEG,
  "!": Opcodes.UNARY_NOT
};

// language/src/core/virtualmachine/bytecode.ts
class ByteCodeInstructions {
  instructions;
  _index = 0;
  constructor(instructions) {
    this.instructions = instructions;
  }
  get index() {
    return this._index;
  }
  reset() {
    this._index = 0;
  }
  seekAt(index) {
    this._index = index;
  }
  next() {
    const bytecode = this.instructions[this._index++];
    if (!bytecode) {
      throwVirtualMachineError("No bytecode found.");
    }
    return bytecode;
  }
  hasNext() {
    return this._index < this.instructions.length;
  }
}

// language/src/core/virtualmachine/compiler.ts
class Compiler {
  instructions = [];
  compile(node) {
    switch (node.type) {
      case ASTNodeType.PROGRAM:
        for (const child of node.children) {
          this.compile(child);
        }
        break;
      case ASTNodeType.IMPORT:
        break;
      case ASTNodeType.CLASS:
        this.compileClass(node);
        break;
      case ASTNodeType.FIELD:
        this.compileField(node);
        break;
      case ASTNodeType.METHOD:
      case ASTNodeType.CONSTRUCTOR:
        this.compileMethod(node);
        break;
      case ASTNodeType.THIS:
        this.emit(Opcodes.LOAD_THIS);
        break;
      case ASTNodeType.VARIABLE:
        this.compileVariable(node);
        break;
      case ASTNodeType.EXPRESSION:
        this.compile(node.expr);
        break;
      case ASTNodeType.ASSIGNMENT:
        this.compileAssignment(node);
        break;
      case ASTNodeType.BINARY:
        this.compileBinary(node);
        break;
      case ASTNodeType.UNARY:
        this.compileUnary(node);
        break;
      case ASTNodeType.CALL:
        this.compileCall(node);
        break;
      case ASTNodeType.MEMBER:
        this.compileMember(node);
        break;
      case ASTNodeType.RETURN:
        this.compileReturn(node);
        break;
      case ASTNodeType.NEW:
        this.compileNew(node);
        break;
      case ASTNodeType.NUMBER:
      case ASTNodeType.STRING:
      case ASTNodeType.BOOLEAN:
      case ASTNodeType.NULL:
        this.emit(Opcodes.LOAD_CONST, node.value);
        break;
      case ASTNodeType.IDENTIFIER:
        this.emit(Opcodes.LOAD_VAR, node.name);
        break;
      default:
        throwCompileError(`Unsupported node type ${node.type}.`);
    }
    return new ByteCodeInstructions(this.instructions);
  }
  compileClass(node) {
    this.emit(Opcodes.CLASS_DEF, node.name);
    for (const child of node.children) {
      this.compile(child);
    }
    this.emit(Opcodes.END_CLASS);
  }
  compileMethod(node) {
    this.emit(Opcodes.METHOD_DEF, node.name);
    for (const stmt of node.children) {
      this.compile(stmt);
    }
    this.emit(Opcodes.END_METHOD);
  }
  compileVariable(node) {
    if (node.init)
      this.compile(node.init);
    this.emit(Opcodes.STORE_VAR, node.name);
  }
  compileAssignment(node) {
    this.compile(node.right);
    if (node.left.type === ASTNodeType.IDENTIFIER) {
      this.emit(Opcodes.STORE_VAR, node.left.name);
    }
  }
  compileBinary(node) {
    this.compile(node.left);
    this.compile(node.right);
    this.emit(BinaryOpcodeMap[node.operator]);
  }
  compileUnary(node) {
    this.compile(node.argument);
    this.emit(UnaryOpcodeMap[node.operator]);
  }
  compileCall(node) {
    this.compile(node.callee);
    for (const arg of node.arguments) {
      this.compile(arg);
    }
    this.emit(Opcodes.CALL_METHOD, node.arguments.length);
  }
  compileMember(node) {
    this.compile(node.object);
    this.emit(Opcodes.GET_FIELD, node.property);
  }
  compileReturn(node) {
    if (node.argument)
      this.compile(node.argument);
    this.emit(Opcodes.RETURN);
  }
  compileNew(node) {
    for (const arg of node.arguments)
      this.compile(arg);
    this.emit(Opcodes.NEW, node.name);
  }
  compileField(node) {
    this.emit(Opcodes.FIELD_DEF, node.name);
    if (node.init) {
      this.compile(node.init);
    } else {
      this.emit(Opcodes.LOAD_CONST, null);
    }
  }
  emit(op, operand) {
    this.instructions.push(op);
    if (operand !== undefined)
      this.instructions.push(operand);
  }
}

// language/src/core/virtualmachine/stack.ts
class Stack {
  stack = [];
  pop() {
    const bytecode = this.stack.pop();
    if (bytecode === undefined) {
      throwVirtualMachineError("Stack is empty");
    }
    return bytecode;
  }
  push(value) {
    if (value === undefined) {
      throwVirtualMachineError("Value is undefined");
    }
    this.stack.push(value);
  }
  operands() {
    return {
      a: this.pop(),
      b: this.pop()
    };
  }
}

// language/src/core/virtualmachine/virtualmachine.ts
class VirtualMachine {
  registry;
  environment;
  stack = new Stack;
  currentThis = null;
  constructor(registry, environment) {
    this.registry = registry;
    this.environment = environment;
  }
  execute(byteCodeInstructions) {
    while (byteCodeInstructions.hasNext()) {
      const op = byteCodeInstructions.next();
      switch (op) {
        case Opcodes.CLASS_DEF: {
          const className = byteCodeInstructions.next();
          if (!this.registry.classes.has(className)) {
            throwRuntimeError(`Class ${className} not found in registry.`);
          }
          const classDef = this.registry.classes.get(className);
          this.stack.push(classDef);
          break;
        }
        case Opcodes.LOAD_CONST:
          this.stack.push(byteCodeInstructions.next());
          break;
        case Opcodes.LOAD_VAR: {
          const name = byteCodeInstructions.next();
          this.stack.push(this.environment.get(name));
          break;
        }
        case Opcodes.STORE_VAR: {
          const name = byteCodeInstructions.next();
          const value = this.stack.pop();
          if (this.environment.has(name)) {
            this.environment.set(name, value);
          } else {
            this.environment.define(name, value);
          }
          break;
        }
        case Opcodes.LOAD_THIS:
          this.stack.push(this.currentThis);
          break;
        case Opcodes.NEW: {
          const className = byteCodeInstructions.next();
          const classDef = this.registry.classes.get(className);
          const instance = classDef.constructEmptyInstance();
          this.registry.instances.register(instance);
          this.stack.push(instance);
          break;
        }
        case Opcodes.GET_FIELD: {
          const fieldName = byteCodeInstructions.next();
          const instance = this.stack.pop();
          if (!(instance instanceof Instance)) {
            throwRuntimeError("GET_FIELD on non-instance");
          }
          this.stack.push(instance.__instanceFields[fieldName]);
          break;
        }
        case Opcodes.SET_FIELD: {
          const fieldName = byteCodeInstructions.next();
          const value = this.stack.pop();
          const instance = this.stack.pop();
          if (!(instance instanceof Instance)) {
            throwRuntimeError("SET_FIELD on non-instance");
          }
          instance.__instanceFields[fieldName] = value;
          this.stack.push(value);
          break;
        }
        case Opcodes.CALL_METHOD: {
          const methodName = byteCodeInstructions.next();
          const argCount = byteCodeInstructions.next();
          const args = [];
          for (let i = 0;i < argCount; i++) {
            args.unshift(this.stack.pop());
          }
          const instance = this.stack.pop();
          const methodNode = instance.findeMethodNode(methodName);
          const methodEnv = new Environment(this.environment);
          methodEnv.define(GRAMMAR.THIS, instance);
          for (let i = 0;i < methodNode.parameters.length; i++) {
            const param = methodNode.parameters[i];
            if (!param) {
              throwVirtualMachineError(`Parameter could not be found in method ${methodName} at index ${i}`);
            }
            methodEnv.define(param.name, args[i]);
          }
          const previousThis = this.currentThis;
          this.currentThis = instance;
          for (const child of methodNode.children) {}
          this.currentThis = previousThis;
          break;
        }
        case Opcodes.POP:
          this.stack.pop();
          break;
        case Opcodes.JUMP: {
          const target = byteCodeInstructions.next();
          byteCodeInstructions.seekAt(target);
          break;
        }
        case Opcodes.JUMP_IF_FALSE: {
          const target = byteCodeInstructions.next();
          const condition = this.stack.pop();
          if (!condition) {
            byteCodeInstructions.seekAt(target);
          }
          break;
        }
        case Opcodes.ADD: {
          const { a, b } = this.stack.operands();
          this.stack.push(a + b);
          break;
        }
        case Opcodes.SUB: {
          const { a, b } = this.stack.operands();
          this.stack.push(a - b);
          break;
        }
        case Opcodes.MUL: {
          const { a, b } = this.stack.operands();
          this.stack.push(a * b);
          break;
        }
        case Opcodes.DIV: {
          const { a, b } = this.stack.operands();
          this.stack.push(a / b);
          break;
        }
        case Opcodes.MOD: {
          const { a, b } = this.stack.operands();
          this.stack.push(a % b);
          break;
        }
        case Opcodes.EQ: {
          const { a, b } = this.stack.operands();
          this.stack.push(a === b);
          break;
        }
        case Opcodes.NE: {
          const { a, b } = this.stack.operands();
          this.stack.push(a !== b);
          break;
        }
        case Opcodes.LT: {
          const { a, b } = this.stack.operands();
          this.stack.push(a < b);
          break;
        }
        case Opcodes.LE: {
          const { a, b } = this.stack.operands();
          this.stack.push(a <= b);
          break;
        }
        case Opcodes.GT: {
          const { a, b } = this.stack.operands();
          this.stack.push(a > b);
          break;
        }
        case Opcodes.GE: {
          const { a, b } = this.stack.operands();
          this.stack.push(a >= b);
          break;
        }
        case Opcodes.AND: {
          const { a, b } = this.stack.operands();
          this.stack.push(a && b);
          break;
        }
        case Opcodes.OR: {
          const { a, b } = this.stack.operands();
          this.stack.push(a || b);
          break;
        }
        case Opcodes.NEG:
          this.stack.push(-this.stack.pop());
          break;
        case Opcodes.POS:
          this.stack.push(+this.stack.pop());
          break;
        case Opcodes.UNARY_NOT:
          this.stack.push(!this.stack.pop());
          break;
        default:
          throwVirtualMachineError(`Unknown opcode ${getOpcodeName(op)} at ip ${byteCodeInstructions.index}`);
      }
    }
    return this.stack.pop();
  }
}

// language/src/core/program.ts
class LyraScriptProgram {
  environment = new Environment;
  objectRegistry = new ObjectRegistry;
  eventPipeline;
  compiler = new Compiler;
  virtualMachine = new VirtualMachine(this.objectRegistry, this.environment);
  typeChecker = new TypeChecker(this.objectRegistry);
  linker = new Linker(this.environment, this.objectRegistry, new FetchFileLoader);
  interpreter;
  testSuite;
  isDebug = false;
  startTime = 0;
  constructor(isDebug = false, globalEventPipeline = new EventPipeline) {
    this.isDebug = isDebug;
    this.interpreter = new Interpreter(this.environment, this.objectRegistry, globalEventPipeline);
    this.testSuite = new TestSuites(this.environment, this.objectRegistry, globalEventPipeline);
    this.eventPipeline = globalEventPipeline;
  }
  getGlobalObjectRegistry() {
    return this.objectRegistry;
  }
  getGlobalEnvironment() {
    return this.environment;
  }
  getGlobalEventPipeline() {
    return this.eventPipeline;
  }
  async executeSource(source) {
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
  async compileSource(source) {
    return this.runPipeline(source).then((ast) => {
      this.debugMeasureStartTime();
      const bytecode = this.compiler.compile(ast);
      this.debugMeasureEndTime("compiler");
      return bytecode;
    });
  }
  executeBytecode(bytecode) {
    console.log(this.virtualMachine.execute(bytecode));
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
      this.typeChecker.collectAllSymbolsFromRegistry(this.objectRegistry);
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
        if (vNode.instance?.hasPublicProperty(key)) {
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
    return this.program.executeSource(await fetchSource(url)).then(() => {
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
  compileSource: (source, isDebug = false) => compileSource(source, isDebug),
  compileFromUrl: (url, isDebug = false) => compileFromUrl(url, isDebug),
  executeBytecode: (bytecode, isDebug = false) => executeBytecode(bytecode, isDebug),
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
    return await Program(isDebug).executeSource(source);
  } catch (error) {
    if (error instanceof Error) {
      console.error(wrapJsError(error, source).format());
    }
    throw error;
  }
}
async function compileSource(source, isDebug = false) {
  try {
    return await Program(isDebug).compileSource(source);
  } catch (error) {
    if (error instanceof Error) {
      console.error(wrapJsError(error, source).format());
    }
    throw error;
  }
}
async function compileFromUrl(url, isDebug = false) {
  return await compileSource(await fetchSource(url), isDebug);
}
function executeBytecode(bytecode, isDebug = false) {
  Program(isDebug).executeBytecode(bytecode);
}
async function executeFromUrl(url, isDebug = false) {
  return await execute(await fetchSource(url), isDebug);
}
async function executeFromString(code, isDebug = false) {
  const source = new Source(code);
  try {
    return await Program(isDebug).executeSource(source);
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

//# debugId=4DD1C9F28DB67BA364756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibGFuZ3VhZ2Uvc3JjL2NvcmUvZ3JhbW1hci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9hc3QudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvdG9rZW5pemVyLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL3BhcnNlci9zb3VyY2UudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvZXJyb3JzLnRzIiwgImxhbmd1YWdlL3NyYy9saWJyYXJ5L25hdGl2ZV9jbGFzcy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9ydW50aW1lL3J1bnRpbWVfY29udmVyc2lvbi50cyIsICJsYW5ndWFnZS9zcmMvbGlicmFyeS9jbGFzc2VzL3N0cmluZy50cyIsICJsYW5ndWFnZS9zcmMvbGlicmFyeS9jbGFzc2VzL3N5c3RlbS50cyIsICJsYW5ndWFnZS9zcmMvbGlicmFyeS9jbGFzc2VzL2Fzc2VydC50cyIsICJsYW5ndWFnZS9zcmMvbGlicmFyeS9jbGFzc2VzL251bWJlci50cyIsICJsYW5ndWFnZS9zcmMvbGlicmFyeS9jbGFzc2VzL2FycmF5LnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2V2ZW50L3N0YXRlLnRzIiwgImxhbmd1YWdlL3NyYy9saWJyYXJ5L2NsYXNzZXMvc3RhdGUudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9ldmVudC50cyIsICJsYW5ndWFnZS9zcmMvbGlicmFyeS9jbGFzc2VzL2Jvb2xlYW4udHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvbmF0aXZlX2NsYXNzZXMudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvbmF0aXZlX2Z1bmN0aW9ucy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9ydW50aW1lL3R5cGVfb2JqZWN0cy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9ydW50aW1lL3R5cGVfYXV0b2JveGluZy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9pbnRlcnByZXRlci9ldmFsdWF0aW9uLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2V2ZW50L2V2ZW50cy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9ydW50aW1lL29iamVjdHMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvcGFyc2VyL3N0YXRlbWVudHMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvcGFyc2VyL3BhcnNlci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9ydW50aW1lL3J1bnRpbWVfcmVnaXN0cnkudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvdHlwZWNoZWNrZXIudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvbGlua2VyL2RlcGVuZGVuY2llcy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9saW5rZXIvbGlua2VyLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL3Rlc3RzdWl0ZXMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXIudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvbGlua2VyL2xvYWRlcnMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvZXZlbnQvcGlwZWxpbmUudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvdmlydHVhbG1hY2hpbmUvb3Bjb2Rlcy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS92aXJ0dWFsbWFjaGluZS9ieXRlY29kZS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS92aXJ0dWFsbWFjaGluZS9jb21waWxlci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS92aXJ0dWFsbWFjaGluZS9zdGFjay50cyIsICJsYW5ndWFnZS9zcmMvY29yZS92aXJ0dWFsbWFjaGluZS92aXJ0dWFsbWFjaGluZS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9wcm9ncmFtLnRzIiwgImxhbmd1YWdlL3NyYy9ob3N0L2V2ZW50cy50cyIsICJsYW5ndWFnZS9zcmMvaG9zdC9kb20udHMiLCAibGFuZ3VhZ2Uvc3JjL2hvc3QvZW5naW5lLnRzIiwgImxhbmd1YWdlL3NyYy9ob3N0L3JlZ2lzdHJ5LnRzIiwgImxhbmd1YWdlL3NyYy9ob3N0L3J1bnRpbWUudHMiLCAibGFuZ3VhZ2Uvc3JjL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWwogICAgImltcG9ydCB0eXBlIHtTb3VyY2V9IGZyb20gXCIuL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmV4cG9ydCBjbGFzcyBHUkFNTUFSIHtcblx0c3RhdGljIElNUE9SVDogc3RyaW5nID0gJ2ltcG9ydCc7XG5cdHN0YXRpYyBGUk9NOiBzdHJpbmcgPSAnZnJvbSc7XG5cdHN0YXRpYyBMRVQ6IHN0cmluZyA9ICdsZXQnO1xuXHRzdGF0aWMgT1BFTjogc3RyaW5nID0gJ29wZW4nO1xuXHRzdGF0aWMgQ0xBU1M6IHN0cmluZyA9ICdjbGFzcyc7XG5cdHN0YXRpYyBJTlRFUkZBQ0U6IHN0cmluZyA9ICdpbnRlcmZhY2UnO1xuXHRzdGF0aWMgRVhURU5EUzogc3RyaW5nID0gJ2V4dGVuZHMnO1xuXHRzdGF0aWMgSU1QTEVNRU5UUzogc3RyaW5nID0gJ2ltcGxlbWVudHMnO1xuXHRzdGF0aWMgQ09OU1RSVUNUT1I6IHN0cmluZyA9ICdjb25zdHJ1Y3Rvcic7XG5cdHN0YXRpYyBPUEVSQVRPUjogc3RyaW5nID0gJ29wZXJhdG9yJztcblx0c3RhdGljIE5FVzogc3RyaW5nID0gJ25ldyc7XG5cdHN0YXRpYyBUSElTOiBzdHJpbmcgPSAndGhpcyc7XG5cdHN0YXRpYyBQVUJMSUM6IHN0cmluZyA9ICdwdWJsaWMnO1xuXHRzdGF0aWMgUFJJVkFURTogc3RyaW5nID0gJ3ByaXZhdGUnO1xuXHRzdGF0aWMgU1RBVElDOiBzdHJpbmcgPSAnc3RhdGljJztcblx0c3RhdGljIFJFQURPTkxZOiBzdHJpbmcgPSAncmVhZG9ubHknO1xuXHRzdGF0aWMgUkVUVVJOOiBzdHJpbmcgPSAncmV0dXJuJztcblx0c3RhdGljIFNVUEVSOiBzdHJpbmcgPSAnc3VwZXInO1xuXHRzdGF0aWMgVFJVRTogc3RyaW5nID0gJ3RydWUnO1xuXHRzdGF0aWMgRkFMU0U6IHN0cmluZyA9ICdmYWxzZSc7XG5cdHN0YXRpYyBJRjogc3RyaW5nID0gJ2lmJztcblx0c3RhdGljIEVMU0U6IHN0cmluZyA9ICdlbHNlJztcblx0c3RhdGljIE1BVENIOiBzdHJpbmcgPSAnbWF0Y2gnO1xuXHRzdGF0aWMgREVGQVVMVDogc3RyaW5nID0gJ2RlZmF1bHQnO1xuXHRzdGF0aWMgRk9SRUFDSDogc3RyaW5nID0gJ2ZvcmVhY2gnO1xuXHRzdGF0aWMgSU46IHN0cmluZyA9ICdpbic7XG5cdHN0YXRpYyBOVUxMOiBzdHJpbmcgPSAnbnVsbCc7XG5cdHN0YXRpYyBWRE9NOiBzdHJpbmcgPSAndmRvbSc7XG5cblx0c3RhdGljIEJSQUNLRVRfU1FVQVJFX09QRU46IHN0cmluZyA9ICdbJztcblx0c3RhdGljIEJSQUNLRVRfU1FVQVJFX0NMT1NFOiBzdHJpbmcgPSAnXSc7XG5cdHN0YXRpYyBCUkFDRV9PUEVOOiBzdHJpbmcgPSAneyc7XG5cdHN0YXRpYyBCUkFDRV9DTE9TRTogc3RyaW5nID0gJ30nO1xuXHRzdGF0aWMgUEFSRU5USEVTRVNfT1BFTjogc3RyaW5nID0gJygnO1xuXHRzdGF0aWMgUEFSRU5USEVTRVNfQ0xPU0U6IHN0cmluZyA9ICcpJztcblx0c3RhdGljIFNFTUlDT0xPTjogc3RyaW5nID0gJzsnO1xuXHRzdGF0aWMgQ09MT046IHN0cmluZyA9ICc6Jztcblx0c3RhdGljIENPTU1BOiBzdHJpbmcgPSAnLCc7XG5cblx0c3RhdGljIEFSUk9XOiBzdHJpbmcgPSAnLT4nO1xuXHRzdGF0aWMgRE9UOiBzdHJpbmcgPSAnLic7XG5cdHN0YXRpYyBBU1NJR046IHN0cmluZyA9ICc9Jztcblx0c3RhdGljIFBMVVM6IHN0cmluZyA9ICcrJztcblx0c3RhdGljIE1JTlVTOiBzdHJpbmcgPSAnLSc7XG5cdHN0YXRpYyBESVZJREU6IHN0cmluZyA9ICcvJztcblx0c3RhdGljIE1VTFRJUExZOiBzdHJpbmcgPSAnKic7XG5cdHN0YXRpYyBNT0RVTFVTOiBzdHJpbmcgPSAnJSc7XG5cblx0c3RhdGljIFVOQVJZX1BMVVM6IHN0cmluZyA9ICd1Kyc7XG5cdHN0YXRpYyBVTkFSWV9NSU5VUzogc3RyaW5nID0gJ3UtJztcblx0c3RhdGljIEVYQ0xBTUFUSU9OX01BUks6IHN0cmluZyA9ICchJztcblx0c3RhdGljIFFVRVNUSU9OX01BUks6IHN0cmluZyA9ICc/Jztcblx0c3RhdGljIExFU1NfVEhBTjogc3RyaW5nID0gJzwnO1xuXHRzdGF0aWMgR1JFQVRFUl9USEFOOiBzdHJpbmcgPSAnPic7XG5cdHN0YXRpYyBMRVNTX0VRVUFMOiBzdHJpbmcgPSAnPD0nO1xuXHRzdGF0aWMgR1JFQVRFUl9FUVVBTDogc3RyaW5nID0gJz49Jztcblx0c3RhdGljIEVRVUFMOiBzdHJpbmcgPSAnPT0nO1xuXHRzdGF0aWMgTk9UX0VRVUFMOiBzdHJpbmcgPSAnIT0nO1xuXHRzdGF0aWMgQU5EOiBzdHJpbmcgPSAnJiYnO1xuXHRzdGF0aWMgT1I6IHN0cmluZyA9ICd8fCc7XG5cblx0c3RhdGljIFhNTF9DTE9TRV9UQUc6IHN0cmluZyA9ICcvPic7XG5cdHN0YXRpYyBYTUxfT1BFTl9DTE9TRV9UQUc6IHN0cmluZyA9ICc8Lyc7XG5cblx0c3RhdGljIEtFWVdPUkRTOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLklNUE9SVCxcblx0XHRHUkFNTUFSLkZST00sXG5cdFx0R1JBTU1BUi5PUEVOLFxuXHRcdEdSQU1NQVIuQ0xBU1MsXG5cdFx0R1JBTU1BUi5JTlRFUkZBQ0UsXG5cdFx0R1JBTU1BUi5FWFRFTkRTLFxuXHRcdEdSQU1NQVIuSU1QTEVNRU5UUyxcblx0XHRHUkFNTUFSLlBVQkxJQyxcblx0XHRHUkFNTUFSLlBSSVZBVEUsXG5cdFx0R1JBTU1BUi5TVEFUSUMsXG5cdFx0R1JBTU1BUi5SRUFET05MWSxcblx0XHRHUkFNTUFSLlJFVFVSTixcblx0XHRHUkFNTUFSLk9QRVJBVE9SLFxuXHRcdEdSQU1NQVIuTEVULFxuXHRcdEdSQU1NQVIuTkVXLFxuXHRcdEdSQU1NQVIuVEhJUyxcblx0XHRHUkFNTUFSLklGLFxuXHRcdEdSQU1NQVIuRUxTRSxcblx0XHRHUkFNTUFSLk1BVENILFxuXHRcdEdSQU1NQVIuREVGQVVMVCxcblx0XHRHUkFNTUFSLkZPUkVBQ0gsXG5cdFx0R1JBTU1BUi5JTixcblx0XHRHUkFNTUFSLk5VTEwsXG5cdFx0R1JBTU1BUi5WRE9NLFxuXHRdO1xuXHRzdGF0aWMgQVJJVEhNRVRJQzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5QTFVTLFxuXHRcdEdSQU1NQVIuTUlOVVMsXG5cdFx0R1JBTU1BUi5ESVZJREUsXG5cdFx0R1JBTU1BUi5NVUxUSVBMWSxcblx0XHRHUkFNTUFSLk1PRFVMVVNcblx0XTtcblx0c3RhdGljIENPTVBBUklTT046IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuTEVTU19USEFOLFxuXHRcdEdSQU1NQVIuR1JFQVRFUl9USEFOLFxuXHRcdEdSQU1NQVIuTEVTU19FUVVBTCxcblx0XHRHUkFNTUFSLkdSRUFURVJfRVFVQUxcblx0XTtcblx0c3RhdGljIEVRVUFMSVRZOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLkVRVUFMLFxuXHRcdEdSQU1NQVIuTk9UX0VRVUFMXG5cdF07XG5cdHN0YXRpYyBMT0dJQ0FMOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLkFORCxcblx0XHRHUkFNTUFSLk9SXG5cdF07XG5cdHN0YXRpYyBPUEVSQVRPUlM6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuRVhDTEFNQVRJT05fTUFSSyxcblx0XHRHUkFNTUFSLlFVRVNUSU9OX01BUkssXG5cdFx0R1JBTU1BUi5BUlJPVyxcblx0XHRHUkFNTUFSLkRPVCxcblx0XHRHUkFNTUFSLkFTU0lHTixcblx0XHRHUkFNTUFSLlBMVVMsXG5cdFx0R1JBTU1BUi5NSU5VUyxcblx0XHRHUkFNTUFSLkRJVklERSxcblx0XHRHUkFNTUFSLk1VTFRJUExZLFxuXHRcdEdSQU1NQVIuTU9EVUxVUyxcblx0XHRHUkFNTUFSLkxFU1NfVEhBTixcblx0XHRHUkFNTUFSLkdSRUFURVJfVEhBTixcblx0XHRHUkFNTUFSLkxFU1NfRVFVQUwsXG5cdFx0R1JBTU1BUi5HUkVBVEVSX0VRVUFMLFxuXHRcdEdSQU1NQVIuRVFVQUwsXG5cdFx0R1JBTU1BUi5OT1RfRVFVQUwsXG5cdFx0R1JBTU1BUi5BTkQsXG5cdFx0R1JBTU1BUi5PUixcblx0XTtcblx0c3RhdGljIE1BVEhfT1BFUkFUT1JTOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLlBMVVMsXG5cdFx0R1JBTU1BUi5NSU5VUyxcblx0XHRHUkFNTUFSLkRJVklERSxcblx0XHRHUkFNTUFSLk1VTFRJUExZLFxuXHRcdEdSQU1NQVIuTU9EVUxVU1xuXHRdO1xuXHRzdGF0aWMgTE9HSUNfT1BFUkFUT1JTOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLkxFU1NfVEhBTixcblx0XHRHUkFNTUFSLkdSRUFURVJfVEhBTixcblx0XHRHUkFNTUFSLkxFU1NfRVFVQUwsXG5cdFx0R1JBTU1BUi5HUkVBVEVSX0VRVUFMLFxuXHRcdEdSQU1NQVIuRVFVQUwsXG5cdFx0R1JBTU1BUi5OT1RfRVFVQUwsXG5cdFx0R1JBTU1BUi5BTkQsXG5cdFx0R1JBTU1BUi5PUixcblx0XTtcblx0c3RhdGljIFBVTkNUVUFUSU9OUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9PUEVOLFxuXHRcdEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfQ0xPU0UsXG5cdFx0R1JBTU1BUi5CUkFDRV9PUEVOLFxuXHRcdEdSQU1NQVIuQlJBQ0VfQ0xPU0UsXG5cdFx0R1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOLFxuXHRcdEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UsXG5cdFx0R1JBTU1BUi5TRU1JQ09MT04sXG5cdFx0R1JBTU1BUi5DT0xPTixcblx0XHRHUkFNTUFSLkNPTU1BXG5cdF07XG5cdHN0YXRpYyBET01fT1BFUkFUT1JTOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLkFSUk9XLFxuXHRcdEdSQU1NQVIuRE9ULFxuXHRcdEdSQU1NQVIuQVNTSUdOLFxuXHRcdEdSQU1NQVIuTEVTU19USEFOLFxuXHRcdEdSQU1NQVIuR1JFQVRFUl9USEFOLFxuXHRcdEdSQU1NQVIuWE1MX09QRU5fQ0xPU0VfVEFHLFxuXHRcdEdSQU1NQVIuWE1MX0NMT1NFX1RBR1xuXHRdO1xuXHRzdGF0aWMgRE9NX1BVTkNUVUFUSU9OUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9PUEVOLFxuXHRcdEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfQ0xPU0UsXG5cdFx0R1JBTU1BUi5CUkFDRV9PUEVOLFxuXHRcdEdSQU1NQVIuQlJBQ0VfQ0xPU0UsXG5cdFx0R1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOLFxuXHRcdEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UsXG5cdFx0R1JBTU1BUi5TRU1JQ09MT04sXG5cdFx0R1JBTU1BUi5DT0xPTixcblx0XHRHUkFNTUFSLkNPTU1BXG5cdF07XG59XG5cbmV4cG9ydCBjbGFzcyBUWVBFX0VOVU0ge1xuXHRzdGF0aWMgTUlYRUQ6IHN0cmluZyA9ICdtaXhlZCc7XG5cdHN0YXRpYyBWT0lEOiBzdHJpbmcgPSAndm9pZCc7XG5cdHN0YXRpYyBOVU1CRVI6IHN0cmluZyA9ICdudW1iZXInO1xuXHRzdGF0aWMgU1RSSU5HOiBzdHJpbmcgPSAnc3RyaW5nJztcblx0c3RhdGljIEJPT0xFQU46IHN0cmluZyA9ICdib29sZWFuJztcblx0c3RhdGljIEFSUkFZOiBzdHJpbmcgPSAnYXJyYXknO1xuXHRzdGF0aWMgTlVMTDogc3RyaW5nID0gJ251bGwnO1xufVxuXG5leHBvcnQgY2xhc3MgUnVsZXMge1xuXHRzdGF0aWMgS0VZV09SRFM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChHUkFNTUFSLktFWVdPUkRTKTtcblx0c3RhdGljIE9QRVJBVE9SUzogU2V0PHN0cmluZz4gPSBuZXcgU2V0KEdSQU1NQVIuT1BFUkFUT1JTKTtcblx0c3RhdGljIFBVTkNUVUFUSU9OUzogU2V0PHN0cmluZz4gPSBuZXcgU2V0KEdSQU1NQVIuUFVOQ1RVQVRJT05TKTtcblx0c3RhdGljIERPTV9PUEVSQVRPUlM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChHUkFNTUFSLkRPTV9PUEVSQVRPUlMpO1xuXHRzdGF0aWMgRE9NX1BVTkNUVUFUSU9OUzogU2V0PHN0cmluZz4gPSBuZXcgU2V0KEdSQU1NQVIuRE9NX1BVTkNUVUFUSU9OUyk7XG5cdHN0YXRpYyBDT01NRU5UX0xJTkU6IHN0cmluZyA9ICcvLyc7XG5cblx0aXNBbHBoYShjaGFyOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gL1thLXpfXS9pLnRlc3QoY2hhcik7XG5cdH1cblxuXHRpc051bWVyaWMoY2hhcjogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIC9bMC05XS8udGVzdChjaGFyKTtcblx0fVxuXG5cdGlzQWxwaGFOdW1lcmljKGNoYXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmlzQWxwaGEoY2hhcikgfHwgdGhpcy5pc051bWVyaWMoY2hhcik7XG5cdH1cblxuXHRpc1doaXRlc3BhY2UoY2hhcjogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIC9cXHMvLnRlc3QoY2hhcik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFRva2VuVHlwZSB7XG5cdHN0YXRpYyBDT01NRU5UOiBzdHJpbmcgPSAnY29tbWVudCc7XG5cdHN0YXRpYyBBTk5PVEFUSU9OOiBzdHJpbmcgPSAnYW5ub3RhdGlvbic7XG5cdHN0YXRpYyBJREVOVElGSUVSOiBzdHJpbmcgPSAnaWRlbnRpZmllcic7XG5cdHN0YXRpYyBLRVlXT1JEOiBzdHJpbmcgPSAna2V5d29yZCc7XG5cdHN0YXRpYyBQVU5DVFVBVElPTjogc3RyaW5nID0gJ3B1bmN0dWF0aW9uJztcblx0c3RhdGljIE5VTUJFUjogc3RyaW5nID0gJ251bWJlcic7XG5cdHN0YXRpYyBTVFJJTkc6IHN0cmluZyA9ICdzdHJpbmcnO1xuXHRzdGF0aWMgQk9PTEVBTjogc3RyaW5nID0gJ2Jvb2xlYW4nO1xuXHRzdGF0aWMgT1BFUkFUT1I6IHN0cmluZyA9ICdvcGVyYXRvcic7XG5cdHN0YXRpYyBURVhUOiBzdHJpbmcgPSAndGV4dCc7XG5cdHN0YXRpYyBFT0Y6IHN0cmluZyA9ICdlb2YnO1xufVxuXG5leHBvcnQgY2xhc3MgVG9rZW4ge1xuXHR0eXBlOiBzdHJpbmc7XG5cdHZhbHVlOiBzdHJpbmc7XG5cdGxpbmU6IG51bWJlciA9IDE7XG5cdGNvbHVtbjogbnVtYmVyID0gMTtcblx0c3RhcnQ6IG51bWJlcjtcblx0ZW5kOiBudW1iZXI7XG5cdHNvdXJjZTogU291cmNlO1xuXG5cdGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIsIHNvdXJjZTogU291cmNlKSB7XG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdFx0dGhpcy5zdGFydCA9IHN0YXJ0O1xuXHRcdHRoaXMuZW5kID0gZW5kO1xuXHRcdHRoaXMuc291cmNlID0gc291cmNlO1xuXHR9XG5cblx0d2l0aExpbmVBbmRDb2x1bW4obGluZTogbnVtYmVyLCBjb2x1bW46IG51bWJlcik6IFRva2VuIHtcblx0XHR0aGlzLmxpbmUgPSBsaW5lO1xuXHRcdHRoaXMuY29sdW1uID0gY29sdW1uO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7R1JBTU1BUiwgVFlQRV9FTlVNfSBmcm9tIFwiLi9ncmFtbWFyXCI7XG5pbXBvcnQge01vZGlmaWVycywgU3VwZXJDbGFzc30gZnJvbSBcIi4vcnVudGltZS9vYmplY3RzXCI7XG5pbXBvcnQge1NvdXJjZVNwYW59IGZyb20gXCIuL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmV4cG9ydCBjbGFzcyBBU1ROb2RlVHlwZSB7XG5cdHN0YXRpYyBQUk9HUkFNOiBzdHJpbmcgPSAncHJvZ3JhbSc7XG5cdHN0YXRpYyBJTkRFWDogc3RyaW5nID0gJ2luZGV4Jztcblx0c3RhdGljIElERU5USUZJRVI6IHN0cmluZyA9ICdpZGVudGlmaWVyJztcblx0c3RhdGljIEFOTk9UQVRJT046IHN0cmluZyA9ICdhbm5vdGF0aW9uJztcblx0c3RhdGljIFBBUkFNRVRFUjogc3RyaW5nID0gJ3BhcmFtZXRlcic7XG5cdHN0YXRpYyBJTVBPUlQ6IHN0cmluZyA9IEdSQU1NQVIuSU1QT1JUO1xuXHRzdGF0aWMgTlVNQkVSOiBzdHJpbmcgPSBUWVBFX0VOVU0uTlVNQkVSO1xuXHRzdGF0aWMgU1RSSU5HOiBzdHJpbmcgPSBUWVBFX0VOVU0uU1RSSU5HO1xuXHRzdGF0aWMgQk9PTEVBTjogc3RyaW5nID0gVFlQRV9FTlVNLkJPT0xFQU47XG5cdHN0YXRpYyBOVUxMOiBzdHJpbmcgPSBUWVBFX0VOVU0uTlVMTDtcblx0c3RhdGljIE5FVzogc3RyaW5nID0gR1JBTU1BUi5ORVc7XG5cdHN0YXRpYyBDTEFTUzogc3RyaW5nID0gR1JBTU1BUi5DTEFTUztcblx0c3RhdGljIElOVEVSRkFDRTogc3RyaW5nID0gR1JBTU1BUi5JTlRFUkZBQ0U7XG5cdHN0YXRpYyBDT05TVFJVQ1RPUjogc3RyaW5nID0gR1JBTU1BUi5DT05TVFJVQ1RPUjtcblx0c3RhdGljIFRISVM6IHN0cmluZyA9IEdSQU1NQVIuVEhJUztcblx0c3RhdGljIFJFVFVSTjogc3RyaW5nID0gR1JBTU1BUi5SRVRVUk47XG5cdHN0YXRpYyBPUEVSQVRPUjogc3RyaW5nID0gJ29wZXJhdG9yX2RlY2xhcmF0aW9uJztcblx0c3RhdGljIFZET006IHN0cmluZyA9ICd2ZG9tX2RlY2xhcmF0aW9uJztcblx0c3RhdGljIFZET01fVEVYVDogc3RyaW5nID0gJ3Zkb21fdGV4dF9kZWNsYXJhdGlvbic7XG5cdHN0YXRpYyBWRE9NX0VYUFJFU1NJT046IHN0cmluZyA9ICd2ZG9tX2V4cHJlc3Npb24nO1xuXHRzdGF0aWMgVU5BUlk6IHN0cmluZyA9ICd1bmFyeV9leHByZXNzaW9uJztcblx0c3RhdGljIExBTUJEQTogc3RyaW5nID0gJ2xhbWJkYV9leHByZXNzaW9uJztcblx0c3RhdGljIEFSUkFZOiBzdHJpbmcgPSAnYXJyYXlfZGVjbGFyYXRpb24nO1xuXHRzdGF0aWMgVFlQRTogc3RyaW5nID0gJ3R5cGVfZGVjbGFyYXRpb24nO1xuXHRzdGF0aWMgRklFTEQ6IHN0cmluZyA9ICdmaWVsZF9kZWNsYXJhdGlvbic7XG5cdHN0YXRpYyBNRU1CRVI6IHN0cmluZyA9ICdtZW1iZXJfZXhwcmVzc2lvbic7XG5cdHN0YXRpYyBNRVRIT0Q6IHN0cmluZyA9ICdtZXRob2RfZGVjbGFyYXRpb24nO1xuXHRzdGF0aWMgQ0FMTDogc3RyaW5nID0gJ2NhbGxfZXhwcmVzc2lvbic7XG5cdHN0YXRpYyBWQVJJQUJMRTogc3RyaW5nID0gJ3ZhcmlhYmxlX2RlY2xhcmF0aW9uJztcblx0c3RhdGljIEVYUFJFU1NJT046IHN0cmluZyA9ICdleHByZXNzaW9uX3N0YXRlbWVudCc7XG5cdHN0YXRpYyBCSU5BUlk6IHN0cmluZyA9ICdiaW5hcnlfZXhwcmVzc2lvbic7XG5cdHN0YXRpYyBBU1NJR05NRU5UOiBzdHJpbmcgPSAnYXNzaWdubWVudF9leHByZXNzaW9uJztcblx0c3RhdGljIElGOiBzdHJpbmcgPSAnaWZfc3RhdGVtZW50Jztcblx0c3RhdGljIFRIRU46IHN0cmluZyA9ICd0aGVuX3N0YXRlbWVudCc7XG5cdHN0YXRpYyBFTFNFOiBzdHJpbmcgPSAnZWxzZV9zdGF0ZW1lbnQnO1xuXHRzdGF0aWMgTUFUQ0g6IHN0cmluZyA9ICdtYXRjaF9zdGF0ZW1lbnQnO1xuXHRzdGF0aWMgTUFUQ0hfQ0FTRTogc3RyaW5nID0gJ21hdGNoX2Nhc2Vfc3RhdGVtZW50Jztcblx0c3RhdGljIEZPUkVBQ0g6IHN0cmluZyA9ICdmb3JlYWNoX3N0YXRlbWVudCc7XG59XG5cbmV4cG9ydCBjbGFzcyBBU1ROb2RlIHtcblx0aXNFeHByZXNzaW9uOiBib29sZWFuID0gZmFsc2U7XG5cdG5hbWU6IHN0cmluZyA9ICcnO1xuXG5cdHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbDtcblx0dHlwZTogc3RyaW5nO1xuXHR2YWx1ZTogYW55IHwgbnVsbCA9IG51bGw7XG5cdGNoaWxkcmVuOiBBU1ROb2RlW107XG5cblx0Y29uc3RydWN0b3IodHlwZTogc3RyaW5nLCBjaGlsZHJlbjogQVNUTm9kZVtdID0gW10pIHtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUQ2FsbE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0Y2FsbGVlOiBBU1ROb2RlO1xuXHRhcmd1bWVudHM6IEFTVE5vZGVbXTtcblxuXHRjb25zdHJ1Y3RvcihjYWxsZWU6IEFTVE5vZGUsIGFyZ3M6IEFTVE5vZGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuQ0FMTCk7XG5cblx0XHR0aGlzLmNhbGxlZSA9IGNhbGxlZTtcblx0XHR0aGlzLmFyZ3VtZW50cyA9IGFyZ3M7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1ROZXdOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGFyZ3VtZW50czogQVNUTm9kZVtdO1xuXHR0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGU7XG5cblx0Y29uc3RydWN0b3IoYXJnczogQVNUTm9kZVtdLCB0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGUpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5ORVcpO1xuXG5cdFx0dGhpcy5hcmd1bWVudHMgPSBhcmdzO1xuXHRcdHRoaXMudHlwZUFubm90YXRpb24gPSB0eXBlQW5ub3RhdGlvbjtcblx0XHR0aGlzLm5hbWUgPSB0eXBlQW5ub3RhdGlvbi5uYW1lO1xuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUQmluYXJ5Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRsZWZ0OiBBU1ROb2RlO1xuXHRyaWdodDogQVNUTm9kZTtcblx0b3BlcmF0b3I6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihsZWZ0OiBBU1ROb2RlLCByaWdodDogQVNUTm9kZSwgb3BlcmF0b3I6IHN0cmluZykge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkJJTkFSWSk7XG5cblx0XHR0aGlzLmxlZnQgPSBsZWZ0O1xuXHRcdHRoaXMucmlnaHQgPSByaWdodDtcblx0XHR0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RBc3NpZ25tZW50Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRsZWZ0OiBBU1ROb2RlO1xuXHRyaWdodDogQVNUTm9kZTtcblxuXHRjb25zdHJ1Y3RvcihsZWZ0OiBBU1ROb2RlLCByaWdodDogQVNUTm9kZSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkFTU0lHTk1FTlQpO1xuXG5cdFx0dGhpcy5sZWZ0ID0gbGVmdDtcblx0XHR0aGlzLnJpZ2h0ID0gcmlnaHQ7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RNZW1iZXJOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdG9iamVjdDogQVNUTm9kZTtcblx0cHJvcGVydHk6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihvYmplY3Q6IEFTVE5vZGUsIHByb3BlcnR5OiBzdHJpbmcpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5NRU1CRVIpO1xuXG5cdFx0dGhpcy5vYmplY3QgPSBvYmplY3Q7XG5cdFx0dGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUVW5hcnlOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdG9wZXJhdG9yOiBzdHJpbmc7XG5cdGFyZ3VtZW50OiBBU1ROb2RlIHwgQVNUVW5hcnlOb2RlO1xuXG5cdGNvbnN0cnVjdG9yKG9wZXJhdG9yOiBzdHJpbmcsIGFyZ3VtZW50OiBBU1ROb2RlIHwgQVNUVW5hcnlOb2RlKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuVU5BUlkpO1xuXG5cdFx0dGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuXHRcdHRoaXMuYXJndW1lbnQgPSBhcmd1bWVudDtcblx0XHR0aGlzLmlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEluZGV4Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRvYmplY3Q6IEFTVE5vZGU7XG5cdGluZGV4OiBBU1ROb2RlO1xuXG5cdGNvbnN0cnVjdG9yKG9iamVjdDogQVNUTm9kZSwgaW5kZXg6IEFTVE5vZGUpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5JTkRFWCk7XG5cblx0XHR0aGlzLm9iamVjdCA9IG9iamVjdDtcblx0XHR0aGlzLmluZGV4ID0gaW5kZXg7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RBcnJheU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0ZWxlbWVudHM6IEFTVE5vZGVbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkFSUkFZKTtcblxuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUTGFtYmRhTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW107XG5cdHJldHVyblR5cGU6IEFTVFR5cGVOb2RlO1xuXG5cdGNvbnN0cnVjdG9yKHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSwgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGUsIGNoaWxkcmVuOiBBU1ROb2RlW10pIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5MQU1CREEsIGNoaWxkcmVuKTtcblxuXHRcdHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG5cdFx0dGhpcy5yZXR1cm5UeXBlID0gcmV0dXJuVHlwZTtcblxuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNURmllbGROb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdG1vZGlmaWVyczogTW9kaWZpZXJzO1xuXHRmaWVsZFR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbDtcblx0aW5pdDogQVNUTm9kZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbW9kaWZpZXJzOiBNb2RpZmllcnMsIGZpZWxkVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsLCBpbml0OiBBU1ROb2RlIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5GSUVMRCk7XG5cblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuXHRcdHRoaXMuZmllbGRUeXBlID0gZmllbGRUeXBlO1xuXHRcdHRoaXMuaW5pdCA9IGluaXQ7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFZhcmlhYmxlTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHR0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGUgfCBudWxsID0gbnVsbDtcblx0aW5pdDogQVNUTm9kZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZUFubm90YXRpb246IEFTVFR5cGVOb2RlIHwgbnVsbCA9IG51bGwsIGluaXQ6IEFTVE5vZGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLlZBUklBQkxFKTtcblxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy50eXBlQW5ub3RhdGlvbiA9IHR5cGVBbm5vdGF0aW9uO1xuXHRcdHRoaXMuaW5pdCA9IGluaXQ7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGV4cHI6IEFTVE5vZGU7XG5cblx0Y29uc3RydWN0b3IoZXhwcjogQVNUTm9kZSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkVYUFJFU1NJT04pO1xuXG5cdFx0dGhpcy5leHByID0gZXhwcjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUUmV0dXJuTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRhcmd1bWVudDogQVNUTm9kZSB8IEFTVEV4cHJlc3Npb25Ob2RlIHwgbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihhcmd1bWVudDogQVNUTm9kZSB8IEFTVEV4cHJlc3Npb25Ob2RlIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5SRVRVUk4pO1xuXG5cdFx0dGhpcy5hcmd1bWVudCA9IGFyZ3VtZW50O1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RDbGFzc05vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0YW5ub3RhdGlvbnM6IEFTVEFubm90YXRpb25Ob2RlW107XG5cdG1vZGlmaWVyczogTW9kaWZpZXJzO1xuXHR0eXBlUGFyYW1ldGVyczogc3RyaW5nW107XG5cdHN1cGVyQ2xhc3M6IFN1cGVyQ2xhc3MgfCBudWxsO1xuXHRpbXBsZW1lbnRzSW50ZXJmYWNlczogQVNUVHlwZU5vZGVbXTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0YW5ub3RhdGlvbnM6IEFTVEFubm90YXRpb25Ob2RlW10sXG5cdFx0bW9kaWZpZXJzOiBNb2RpZmllcnMsXG5cdFx0dHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdLFxuXHRcdGltcGxlbWVudHNJbnRlcmZhY2VzOiBBU1RUeXBlTm9kZVtdLFxuXHRcdHN1cGVyQ2xhc3M6IFN1cGVyQ2xhc3MgfCBudWxsID0gbnVsbCxcblx0XHRjaGlsZHJlbjogQVNUTm9kZVtdID0gW11cblx0KSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuQ0xBU1MsIGNoaWxkcmVuKTtcblxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5hbm5vdGF0aW9ucyA9IGFubm90YXRpb25zO1xuXHRcdHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuXHRcdHRoaXMudHlwZVBhcmFtZXRlcnMgPSB0eXBlUGFyYW1ldGVycztcblx0XHR0aGlzLnN1cGVyQ2xhc3MgPSBzdXBlckNsYXNzO1xuXHRcdHRoaXMuaW1wbGVtZW50c0ludGVyZmFjZXMgPSBpbXBsZW1lbnRzSW50ZXJmYWNlcztcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUSW50ZXJmYWNlTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRhbm5vdGF0aW9uczogQVNUQW5ub3RhdGlvbk5vZGVbXTtcblx0bW9kaWZpZXJzOiBNb2RpZmllcnM7XG5cdHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXTtcblx0ZXh0ZW5kc0ludGVyZmFjZXM6IHN0cmluZ1tdO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdG5hbWU6IHN0cmluZyxcblx0XHRhbm5vdGF0aW9uczogQVNUQW5ub3RhdGlvbk5vZGVbXSxcblx0XHRtb2RpZmllcnM6IE1vZGlmaWVycyxcblx0XHR0eXBlUGFyYW1ldGVyczogc3RyaW5nW10sXG5cdFx0ZXh0ZW5kc0ludGVyZmFjZXM6IHN0cmluZ1tdLFxuXHRcdGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXVxuXHQpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5JTlRFUkZBQ0UsIGNoaWxkcmVuKTtcblxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5hbm5vdGF0aW9ucyA9IGFubm90YXRpb25zO1xuXHRcdHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuXHRcdHRoaXMudHlwZVBhcmFtZXRlcnMgPSB0eXBlUGFyYW1ldGVycztcblx0XHR0aGlzLmV4dGVuZHNJbnRlcmZhY2VzID0gZXh0ZW5kc0ludGVyZmFjZXM7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEFubm90YXRpb25Ob2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdHByb3BlcnRpZXM6IE1hcDxzdHJpbmcsIEFTVE5vZGU+ID0gbmV3IE1hcCgpO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkFOTk9UQVRJT04pO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFBhcmFtZXRlck5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0dHlwZUFubm90YXRpb246IEFTVFR5cGVOb2RlIHwgbnVsbDtcblx0ZGVmYXVsdFZhbHVlOiBBU1ROb2RlIHwgbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGVBbm5vdGF0aW9uOiBBU1RUeXBlTm9kZSB8IG51bGwsIGRlZmF1bHRWYWx1ZTogQVNUTm9kZSB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuUEFSQU1FVEVSKTtcblx0XHR0aGlzLnR5cGVBbm5vdGF0aW9uID0gdHlwZUFubm90YXRpb247XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmRlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUTWV0aG9kTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRhbm5vdGF0aW9uczogQVNUQW5ub3RhdGlvbk5vZGVbXTtcblx0bW9kaWZpZXJzOiBNb2RpZmllcnM7XG5cdHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXTtcblx0cGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdO1xuXHRyZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGw7XG5cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0dHlwZTogc3RyaW5nLFxuXHRcdGFubm90YXRpb25zOiBBU1RBbm5vdGF0aW9uTm9kZVtdLFxuXHRcdG1vZGlmaWVyczogTW9kaWZpZXJzLFxuXHRcdHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXSxcblx0XHRwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sXG5cdFx0cmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsID0gbnVsbCxcblx0XHRjaGlsZHJlbjogQVNUTm9kZVtdID0gW10sXG5cdCkge1xuXHRcdHN1cGVyKHR5cGUsIGNoaWxkcmVuKTtcblxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5hbm5vdGF0aW9ucyA9IGFubm90YXRpb25zO1xuXHRcdHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuXHRcdHRoaXMudHlwZVBhcmFtZXRlcnMgPSB0eXBlUGFyYW1ldGVycztcblx0XHR0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuXHRcdHRoaXMucmV0dXJuVHlwZSA9IHJldHVyblR5cGU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVE9wZXJhdG9yTm9kZSBleHRlbmRzIEFTVE1ldGhvZE5vZGUge1xuXG5cdHN0YXRpYyBPVkVSTE9BREFCTEVfT1BFUkFUT1JTOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLlBMVVMsXG5cdFx0R1JBTU1BUi5NSU5VUyxcblx0XHRHUkFNTUFSLk1VTFRJUExZLFxuXHRcdEdSQU1NQVIuRElWSURFLFxuXHRcdEdSQU1NQVIuTU9EVUxVUyxcblx0XHRHUkFNTUFSLkVRVUFMLFxuXHRcdEdSQU1NQVIuTk9UX0VRVUFMLFxuXHRcdEdSQU1NQVIuTEVTU19USEFOLFxuXHRcdEdSQU1NQVIuTEVTU19FUVVBTCxcblx0XHRHUkFNTUFSLkdSRUFURVJfVEhBTixcblx0XHRHUkFNTUFSLkdSRUFURVJfRVFVQUwsXG5cdFx0R1JBTU1BUi5FWENMQU1BVElPTl9NQVJLLFxuXHRcdEdSQU1NQVIuVU5BUllfUExVUyxcblx0XHRHUkFNTUFSLlVOQVJZX01JTlVTLFxuXHRcdC8vXCJbXVwiXG5cdF07XG5cblx0c3RhdGljIE9WRVJMT0FEQUJMRV9PUEVSQVRPUl9NRVRIT0RfTUFQOiBNYXA8c3RyaW5nLCBzdHJpbmc+ID0gbmV3IE1hcChcblx0XHRbXG5cdFx0XHRbR1JBTU1BUi5QTFVTLCAnX19hZGQnXSxcblx0XHRcdFtHUkFNTUFSLk1JTlVTLCAnX19zdWJ0cmFjdCddLFxuXHRcdFx0W0dSQU1NQVIuTVVMVElQTFksICdfX211bHRpcGx5J10sXG5cdFx0XHRbR1JBTU1BUi5ESVZJREUsICdfX2RpdmlkZSddLFxuXHRcdFx0W0dSQU1NQVIuTU9EVUxVUywgJ19fbW9kdWx1cyddLFxuXHRcdFx0W0dSQU1NQVIuRVFVQUwsICdfX2VxdWFsJ10sXG5cdFx0XHRbR1JBTU1BUi5OT1RfRVFVQUwsICdfX25vdF9lcXVhbCddLFxuXHRcdFx0W0dSQU1NQVIuTEVTU19USEFOLCAnX19sZXNzX3RoYW4nXSxcblx0XHRcdFtHUkFNTUFSLkxFU1NfRVFVQUwsICdfX2xlc3NfZXF1YWwnXSxcblx0XHRcdFtHUkFNTUFSLkdSRUFURVJfVEhBTiwgJ19fZ3JlYXRlcl90aGFuJ10sXG5cdFx0XHRbR1JBTU1BUi5HUkVBVEVSX0VRVUFMLCAnX19ncmVhdGVyX2VxdWFsJ10sXG5cdFx0XHRbR1JBTU1BUi5FWENMQU1BVElPTl9NQVJLLCAnX19ub3QnXSxcblx0XHRcdFtHUkFNTUFSLlVOQVJZX1BMVVMsICdfX3VuYXJ5X3BsdXMnXSxcblx0XHRcdFtHUkFNTUFSLlVOQVJZX01JTlVTLCAnX191bmFyeV9taW51cyddLFxuXHRcdF1cblx0KTtcblxuXHRvcGVyYXRvcjogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdG9wZXJhdG9yOiBzdHJpbmcsXG5cdFx0YW5ub3RhdGlvbnM6IEFTVEFubm90YXRpb25Ob2RlW10sXG5cdFx0bW9kaWZpZXJzOiBNb2RpZmllcnMsXG5cdFx0dHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdLFxuXHRcdHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSxcblx0XHRyZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGwgPSBudWxsLFxuXHRcdGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXSxcblx0KSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRvcGVyYXRvciwgICAgICAgICAgICAgICAgICAgICAgICAvLyBuYW1lID0gc3ltYm9sXG5cdFx0XHRBU1ROb2RlVHlwZS5PUEVSQVRPUixcblx0XHRcdGFubm90YXRpb25zLFxuXHRcdFx0bW9kaWZpZXJzLFxuXHRcdFx0dHlwZVBhcmFtZXRlcnMsXG5cdFx0XHRwYXJhbWV0ZXJzLFxuXHRcdFx0cmV0dXJuVHlwZSxcblx0XHRcdGNoaWxkcmVuXG5cdFx0KTtcblxuXHRcdHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUSW1wb3J0Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRuYW1lczogc3RyaW5nW107XG5cdGZyb206IHN0cmluZyB8IG51bGw7XG5cblx0Y29uc3RydWN0b3IobmFtZXM6IHN0cmluZ1tdLCBmcm9tOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLklNUE9SVCk7XG5cblx0XHR0aGlzLm5hbWVzID0gbmFtZXM7XG5cdFx0dGhpcy5mcm9tID0gZnJvbTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUVGhlbk5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0Y29uc3RydWN0b3IoY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuVEhFTiwgY2hpbGRyZW4pO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RJZk5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0Y29uZGl0aW9uOiBBU1ROb2RlO1xuXHR0aGVuOiBBU1RUaGVuTm9kZTtcblx0ZWxzZTogQVNUSWZOb2RlIHwgQVNURWxzZU5vZGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihjb25kaXRpb246IEFTVE5vZGUsIHRoZW46IEFTVFRoZW5Ob2RlKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuSUYpO1xuXG5cdFx0dGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG5cdFx0dGhpcy50aGVuID0gdGhlbjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNURWxzZU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0Y29uc3RydWN0b3IoY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuRUxTRSwgY2hpbGRyZW4pO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RNYXRjaE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0ZXhwcmVzc2lvbjogQVNUTm9kZTtcblx0Y2FzZXM6IEFTVE1hdGNoQ2FzZU5vZGVbXTtcblx0ZGVmYXVsdENhc2U6IEFTVE1hdGNoQ2FzZU5vZGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihleHByZXNzaW9uOiBBU1ROb2RlLCBjYXNlczogQVNUTWF0Y2hDYXNlTm9kZVtdLCBkZWZhdWx0Q2FzZTogQVNUTWF0Y2hDYXNlTm9kZSB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuTUFUQ0gpO1xuXG5cdFx0dGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcblx0XHR0aGlzLmNhc2VzID0gY2FzZXM7XG5cdFx0dGhpcy5kZWZhdWx0Q2FzZSA9IGRlZmF1bHRDYXNlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RNYXRjaENhc2VOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdHRlc3Q6IEFTVE5vZGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihjaGlsZHJlbjogQVNUTm9kZVtdID0gW10pIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5NQVRDSF9DQVNFLCBjaGlsZHJlbik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEZvcmVhY2hOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGl0ZXJhdG9yOiBzdHJpbmc7XG5cdGl0ZXJhYmxlOiBBU1ROb2RlO1xuXHRib2R5OiBBU1ROb2RlW107XG5cblx0Y29uc3RydWN0b3IoaXRlcmF0b3I6IHN0cmluZywgaXRlcmFibGU6IEFTVE5vZGUsIGJvZHk6IEFTVE5vZGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuRk9SRUFDSCk7XG5cblx0XHR0aGlzLml0ZXJhdG9yID0gaXRlcmF0b3I7XG5cdFx0dGhpcy5pdGVyYWJsZSA9IGl0ZXJhYmxlO1xuXHRcdHRoaXMuYm9keSA9IGJvZHk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFR5cGVOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdHN0YXRpYyBLSU5EX1NJTVBMRSA9ICdzaW1wbGUnO1xuXHRzdGF0aWMgS0lORF9HRU5FUklDID0gJ2dlbmVyaWMnO1xuXHRzdGF0aWMgS0lORF9MQU1CREEgPSAnbGFtYmRhJztcblxuXHRraW5kOiBzdHJpbmc7XG5cdHR5cGVBcmd1bWVudHM6IEFTVFR5cGVOb2RlW10gPSBbXTtcblx0cGFyYW1ldGVyVHlwZXM6IEFTVFR5cGVOb2RlW10gPSBbXTtcblx0cmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsID0gbnVsbDtcblx0bnVsbGFibGU6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3Ioa2luZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIG51bGxhYmxlOiBib29sZWFuID0gZmFsc2UpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5UWVBFKTtcblxuXHRcdHRoaXMua2luZCA9IGtpbmQ7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLm51bGxhYmxlID0gbnVsbGFibGU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFZEb21Ob2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdHJlYWRvbmx5IHRhZzogc3RyaW5nO1xuXHRyZWFkb25seSBwcm9wczogTWFwPHN0cmluZywgQVNUTm9kZT4gPSBuZXcgTWFwKCk7XG5cblx0Y29uc3RydWN0b3IodGFnOiBzdHJpbmcsIHByb3BzOiBNYXA8c3RyaW5nLCBBU1ROb2RlPiwgY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuVkRPTSwgY2hpbGRyZW4pO1xuXHRcdHRoaXMudGFnID0gdGFnO1xuXHRcdHRoaXMucHJvcHMgPSBwcm9wcztcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUVkRvbVRleHROb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5WRE9NX1RFWFQpO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUVkRvbUV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGV4cHI6IEFTVE5vZGU7XG5cblx0Y29uc3RydWN0b3IoZXhwcjogQVNUTm9kZSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLlZET01fRVhQUkVTU0lPTik7XG5cdFx0dGhpcy5leHByID0gZXhwcjtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0dSQU1NQVIsIFJ1bGVzLCBUb2tlbiwgVG9rZW5UeXBlfSBmcm9tIFwiLi9ncmFtbWFyXCI7XG5pbXBvcnQge3Rocm93VG9rZW5FcnJvcn0gZnJvbSBcIi4vZXJyb3JzXCI7XG5pbXBvcnQgdHlwZSB7U291cmNlfSBmcm9tIFwiLi9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5leHBvcnQgY2xhc3MgVG9rZW5pemVyIHtcblx0cHJpdmF0ZSByZWFkb25seSBydWxlcyA9IG5ldyBSdWxlcygpO1xuXHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZTogU291cmNlO1xuXG5cdGNvbnN0cnVjdG9yKHNvdXJjZTogU291cmNlKSB7XG5cdFx0dGhpcy5zb3VyY2UgPSBzb3VyY2U7XG5cdH1cblxuXHRnZXRUb2tlblN0cmVhbSgpOiBUb2tlblN0cmVhbSB7XG5cdFx0cmV0dXJuIG5ldyBUb2tlblN0cmVhbSh0aGlzLnRva2VuaXplKCkpO1xuXHR9XG5cblx0dG9rZW5pemUoKTogVG9rZW5bXSB7XG5cdFx0Y29uc3QgdG9rZW5zOiBUb2tlbltdID0gW107XG5cblx0XHRsZXQgaTogbnVtYmVyID0gMDtcblx0XHRsZXQgbGluZTogbnVtYmVyID0gMTtcblx0XHRsZXQgY29sdW1uOiBudW1iZXIgPSAwO1xuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ0xpbmVDb21tZW50OiAoKSA9PiBib29sZWFuID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgbGluZUNvbW1lbnQ6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hMaW5lQ29tbWVudEF0KGkpO1xuXHRcdFx0aWYgKGxpbmVDb21tZW50KSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKGxpbmVDb21tZW50LndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gbGluZUNvbW1lbnQuZW5kICsgMTtcblxuXHRcdFx0XHRsaW5lKys7XG5cdFx0XHRcdGNvbHVtbiA9IDA7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdTdHJpbmc6ICgpID0+IGJvb2xlYW4gPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBzdHJpbmc6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hTdHJpbmdBdChpKTtcblx0XHRcdGlmIChzdHJpbmcpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2goc3RyaW5nLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gc3RyaW5nLmVuZCArIDE7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQoc3RyaW5nKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ1B1bmN0dWF0aW9uOiAoKSA9PiBib29sZWFuID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgcHVuY3R1YXRpb246IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hQdW5jdHVhdGlvbkF0KGkpO1xuXHRcdFx0aWYgKHB1bmN0dWF0aW9uKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKHB1bmN0dWF0aW9uLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gcHVuY3R1YXRpb24uZW5kICsgMTtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChwdW5jdHVhdGlvbik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdJZGVudGlmaWVyOiAoKSA9PiBib29sZWFuID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgaWRlbnRpZmllcjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaElkZW50aWZpZXJBdChpKTtcblx0XHRcdGlmIChpZGVudGlmaWVyKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKGlkZW50aWZpZXIud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBpZGVudGlmaWVyLmVuZDtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChpZGVudGlmaWVyKTtcblxuXHRcdFx0XHRpZiAoaWRlbnRpZmllci52YWx1ZSA9PT0gR1JBTU1BUi5WRE9NKSB7XG5cdFx0XHRcdFx0Y29uc3QgdG9rZW5pemVkVkRvbSA9IHRoaXMudG9rZW5pemVWRG9tKGksIGxpbmUsIGNvbHVtbik7XG5cdFx0XHRcdFx0dG9rZW5zLnB1c2goLi4udG9rZW5pemVkVkRvbS50b2tlbnMpO1xuXHRcdFx0XHRcdGkgPSB0b2tlbml6ZWRWRG9tLm5ld0luZGV4O1xuXHRcdFx0XHRcdGxpbmUgPSB0b2tlbml6ZWRWRG9tLmxpbmU7XG5cdFx0XHRcdFx0Y29sdW1uID0gdG9rZW5pemVkVkRvbS5jb2x1bW47XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ051bWJlcjogKCkgPT4gYm9vbGVhbiA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IG51bWJlcjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaE51bWJlckF0KGkpO1xuXHRcdFx0aWYgKG51bWJlcikge1xuXHRcdFx0XHR0b2tlbnMucHVzaChudW1iZXIud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBudW1iZXIuZW5kO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KG51bWJlcik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdPcGVyYXRvcjogKCkgPT4gYm9vbGVhbiA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IG9wZXJhdG9yOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoT3BlcmF0b3JBdChpKTtcblx0XHRcdGlmIChvcGVyYXRvcikge1xuXHRcdFx0XHR0b2tlbnMucHVzaChvcGVyYXRvci53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IG9wZXJhdG9yLmVuZCArIDE7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQob3BlcmF0b3IpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nQW5ub3RhdGlvbjogKCkgPT4gYm9vbGVhbiA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IGFubm90YXRpb246IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hBbm5vdGF0aW9uQXQoaSk7XG5cdFx0XHRpZiAoYW5ub3RhdGlvbikge1xuXHRcdFx0XHR0b2tlbnMucHVzaChhbm5vdGF0aW9uLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gYW5ub3RhdGlvbi5lbmQgKyAxO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KGFubm90YXRpb24pO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHdoaWxlIChpIDwgdGhpcy5zb3VyY2UubGVuZ3RoKSB7XG5cdFx0XHRpZiAodGhpcy5zb3VyY2UuY2hhckF0KGkpID09PSAnXFxuJykge1xuXHRcdFx0XHRsaW5lKys7XG5cdFx0XHRcdGNvbHVtbiA9IDA7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb2x1bW4rKztcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMubWF0Y2hXaGl0ZXNwYWNlQXQoaSkpIHtcblx0XHRcdFx0aSsrO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGlmSXNDb25zdW1pbmdMaW5lQ29tbWVudCgpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdQdW5jdHVhdGlvbigpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdTdHJpbmcoKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nTnVtYmVyKClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ0lkZW50aWZpZXIoKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nT3BlcmF0b3IoKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nQW5ub3RhdGlvbigpKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHR0aHJvd1Rva2VuRXJyb3IoJ1VuZXhwZWN0ZWQgY2hhcmFjdGVyOiAnICsgdGhpcy5zb3VyY2UuY2hhckF0KGkpKTtcblx0XHR9XG5cblx0XHR0b2tlbnMucHVzaChcblx0XHRcdHRoaXMuZW9mKGkpXG5cdFx0XHQgICAgLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbilcblx0XHQpO1xuXG5cdFx0cmV0dXJuIHRva2Vucztcblx0fVxuXG5cdGVvZihlbmQ6IG51bWJlcik6IFRva2VuIHtcblx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5FT0YsICcnLCBlbmQsIGVuZCwgdGhpcy5zb3VyY2UpXG5cdH1cblxuXHRjb2x1bU9mZnNldCh0b2tlbjogVG9rZW4pOiBudW1iZXIge1xuXHRcdHJldHVybiB0b2tlbi52YWx1ZS5sZW5ndGggLSAxO1xuXHR9XG5cblx0bWF0Y2hXaGl0ZXNwYWNlQXQoaTogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucnVsZXMuaXNXaGl0ZXNwYWNlKHRoaXMuc291cmNlLmNoYXJBdChpKSk7XG5cdH1cblxuXHRtYXRjaE51bWJlckF0KGk6IG51bWJlcik6IFRva2VuIHwgbnVsbCB7XG5cdFx0aWYgKCF0aGlzLnJ1bGVzLmlzTnVtZXJpYyh0aGlzLnNvdXJjZS5jaGFyQXQoaSkpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbFxuXHRcdH1cblx0XHRsZXQgc3RhcnQgPSBpO1xuXHRcdHdoaWxlICh0aGlzLnJ1bGVzLmlzTnVtZXJpYyh0aGlzLnNvdXJjZS5jaGFyQXQoaSkpKSBpKys7XG5cdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuTlVNQkVSLCB0aGlzLnNvdXJjZS5zbGljZShzdGFydCwgaSksIHN0YXJ0LCBpLCB0aGlzLnNvdXJjZSk7XG5cdH1cblxuXHRtYXRjaFN0cmluZ0F0KGk6IG51bWJlcik6IFRva2VuIHwgbnVsbCB7XG5cdFx0aWYgKHRoaXMuc291cmNlLmNoYXJBdChpKSAhPT0gJ1wiJykge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGxldCBzdGFydCA9ICsraTtcblx0XHR3aGlsZSAodGhpcy5zb3VyY2UuY2hhckF0KGkpICE9PSAnXCInKSBpKys7XG5cdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuU1RSSU5HLCB0aGlzLnNvdXJjZS5zbGljZShzdGFydCwgaSksIHN0YXJ0LCBpLCB0aGlzLnNvdXJjZSk7XG5cdH1cblxuXHRtYXRjaElkZW50aWZpZXJBdChpOiBudW1iZXIpOiBUb2tlbiB8IG51bGwge1xuXHRcdGlmICghdGhpcy5ydWxlcy5pc0FscGhhKHRoaXMuc291cmNlLmNoYXJBdChpKSkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRsZXQgc3RhcnQgPSBpO1xuXHRcdGxldCBqID0gaTtcblx0XHR3aGlsZSAodGhpcy5ydWxlcy5pc0FscGhhTnVtZXJpYyh0aGlzLnNvdXJjZS5jaGFyQXQoaikpKSBqKys7XG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnNvdXJjZS5zbGljZShzdGFydCwgaik7XG5cblx0XHRsZXQgdHlwZSA9IFRva2VuVHlwZS5JREVOVElGSUVSO1xuXHRcdGlmIChbR1JBTU1BUi5UUlVFLCBHUkFNTUFSLkZBTFNFXS5pbmNsdWRlcyh2YWx1ZSkpIHtcblx0XHRcdHR5cGUgPSBUb2tlblR5cGUuQk9PTEVBTjtcblx0XHR9IGVsc2UgaWYgKFJ1bGVzLktFWVdPUkRTLmhhcyh2YWx1ZSkpIHtcblx0XHRcdHR5cGUgPSBUb2tlblR5cGUuS0VZV09SRDtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IFRva2VuKHR5cGUsIHZhbHVlLCBzdGFydCwgaiwgdGhpcy5zb3VyY2UpO1xuXHR9XG5cblx0bWF0Y2hPcGVyYXRvckF0KGk6IG51bWJlciwgb3BlcmF0b3JzOiBTZXQ8c3RyaW5nPiA9IFJ1bGVzLk9QRVJBVE9SUyk6IFRva2VuIHwgbnVsbCB7XG5cdFx0Y29uc3QgY2hhcnMgPSB0aGlzLnNvdXJjZS5jaGFyQXQoaSkgKyB0aGlzLnNvdXJjZS5jaGFyQXQoaSArIDEpO1xuXHRcdGlmIChvcGVyYXRvcnMuaGFzKGNoYXJzKSkge1xuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuT1BFUkFUT1IsIGNoYXJzLCBpLCBpICsgMSwgdGhpcy5zb3VyY2UpO1xuXHRcdH1cblxuXHRcdGlmIChvcGVyYXRvcnMuaGFzKHRoaXMuc291cmNlLmNoYXJBdChpKSkpIHtcblx0XHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLk9QRVJBVE9SLCB0aGlzLnNvdXJjZS5jaGFyQXQoaSksIGksIGksIHRoaXMuc291cmNlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdG1hdGNoUHVuY3R1YXRpb25BdChpOiBudW1iZXIsIHB1bmN0dWF0aW9ucyA9IFJ1bGVzLlBVTkNUVUFUSU9OUyk6IFRva2VuIHwgbnVsbCB7XG5cdFx0Y29uc3QgY2hhcnMgPSB0aGlzLnNvdXJjZS5jaGFyQXQoaSkgKyB0aGlzLnNvdXJjZS5jaGFyQXQoaSArIDEpO1xuXHRcdGlmIChwdW5jdHVhdGlvbnMuaGFzKGNoYXJzKSkge1xuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuUFVOQ1RVQVRJT04sIGNoYXJzLCBpLCBpICsgMSwgdGhpcy5zb3VyY2UpO1xuXHRcdH1cblxuXHRcdGlmICghcHVuY3R1YXRpb25zLmhhcyh0aGlzLnNvdXJjZS5jaGFyQXQoaSkpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuUFVOQ1RVQVRJT04sIHRoaXMuc291cmNlLmNoYXJBdChpKSwgaSwgaSwgdGhpcy5zb3VyY2UpO1xuXHR9XG5cblx0bWF0Y2hMaW5lQ29tbWVudEF0KGk6IG51bWJlcik6IFRva2VuIHwgbnVsbCB7XG5cdFx0aWYgKCF0aGlzLnNvdXJjZS5zdGFydHNXaXRoKFJ1bGVzLkNPTU1FTlRfTElORSwgaSkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRsZXQgaiA9IGkgKyBSdWxlcy5DT01NRU5UX0xJTkUubGVuZ3RoO1xuXHRcdHdoaWxlIChqIDwgdGhpcy5zb3VyY2UubGVuZ3RoICYmIHRoaXMuc291cmNlLmNoYXJBdChqKSAhPT0gJ1xcbicpIGorKztcblx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5DT01NRU5ULCB0aGlzLnNvdXJjZS5zbGljZShpLCBqKSwgaSwgaiwgdGhpcy5zb3VyY2UpO1xuXHR9XG5cblx0bWF0Y2hBbm5vdGF0aW9uQXQoaTogbnVtYmVyKTogVG9rZW4gfCBudWxsIHtcblx0XHRpZiAodGhpcy5zb3VyY2UuY2hhckF0KGkpICE9PSAnQCcpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGxldCBzdGFydCA9IGkgKyAxO1xuXHRcdGxldCBqID0gaSArIDE7XG5cdFx0d2hpbGUgKHRoaXMucnVsZXMuaXNBbHBoYSh0aGlzLnNvdXJjZS5jaGFyQXQoaikpKSBqKys7XG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnNvdXJjZS5zbGljZShzdGFydCwgaik7XG5cblx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5BTk5PVEFUSU9OLCB2YWx1ZSwgc3RhcnQsIGosIHRoaXMuc291cmNlKTtcblx0fVxuXG5cdHByaXZhdGUgdG9rZW5pemVWRG9tKHN0YXJ0SW5kZXg6IG51bWJlciwgbGluZTogbnVtYmVyLCBjb2x1bW46IG51bWJlcik6IHtcblx0XHR0b2tlbnM6IFRva2VuW10sXG5cdFx0bmV3SW5kZXg6IG51bWJlcixcblx0XHRsaW5lOiBudW1iZXIsXG5cdFx0Y29sdW1uOiBudW1iZXJcblx0fSB7XG5cdFx0Y29uc3QgdG9rZW5zOiBUb2tlbltdID0gW107XG5cdFx0bGV0IGk6IG51bWJlciA9IHN0YXJ0SW5kZXg7XG5cdFx0bGV0IHRleHRCdWZmZXI6IHN0cmluZyA9ICcnO1xuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ1N0cmluZzogKCkgPT4gYm9vbGVhbiA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IHN0cmluZzogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaFN0cmluZ0F0KGkpO1xuXHRcdFx0aWYgKHN0cmluZykge1xuXHRcdFx0XHRmbHVzaFRleHRCdWZmZXIoKTtcblx0XHRcdFx0dG9rZW5zLnB1c2goc3RyaW5nLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gc3RyaW5nLmVuZCArIDE7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQoc3RyaW5nKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ1B1bmN0dWF0aW9uOiAoKSA9PiBib29sZWFuID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgcHVuY3R1YXRpb246IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hQdW5jdHVhdGlvbkF0KGksIFJ1bGVzLkRPTV9QVU5DVFVBVElPTlMpO1xuXHRcdFx0aWYgKHB1bmN0dWF0aW9uKSB7XG5cdFx0XHRcdGZsdXNoVGV4dEJ1ZmZlcigpO1xuXHRcdFx0XHR0b2tlbnMucHVzaChwdW5jdHVhdGlvbi53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IHB1bmN0dWF0aW9uLmVuZCArIDE7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQocHVuY3R1YXRpb24pO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nSWRlbnRpZmllcjogKCkgPT4gYm9vbGVhbiA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IGlkZW50aWZpZXI6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hJZGVudGlmaWVyQXQoaSk7XG5cdFx0XHRpZiAoaWRlbnRpZmllcikge1xuXHRcdFx0XHRpZiAoW0dSQU1NQVIuQ0xBU1NdLmluY2x1ZGVzKGlkZW50aWZpZXIudmFsdWUpKSB7XG5cdFx0XHRcdFx0aWRlbnRpZmllci50eXBlID0gVG9rZW5UeXBlLklERU5USUZJRVI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmbHVzaFRleHRCdWZmZXIoKTtcblxuXHRcdFx0XHR0b2tlbnMucHVzaChpZGVudGlmaWVyLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gaWRlbnRpZmllci5lbmQ7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQoaWRlbnRpZmllcik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdOdW1iZXI6ICgpID0+IGJvb2xlYW4gPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBudW1iZXI6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hOdW1iZXJBdChpKTtcblx0XHRcdGlmIChudW1iZXIpIHtcblx0XHRcdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cblx0XHRcdFx0dG9rZW5zLnB1c2gobnVtYmVyLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gbnVtYmVyLmVuZDtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChudW1iZXIpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nT3BlcmF0b3I6ICgpID0+IGJvb2xlYW4gPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBvcGVyYXRvcjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaE9wZXJhdG9yQXQoaSwgUnVsZXMuRE9NX09QRVJBVE9SUyk7XG5cdFx0XHRpZiAob3BlcmF0b3IpIHtcblx0XHRcdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cblx0XHRcdFx0dG9rZW5zLnB1c2gob3BlcmF0b3Iud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBvcGVyYXRvci5lbmQgKyAxO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KG9wZXJhdG9yKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZmx1c2hUZXh0QnVmZmVyOiAoKSA9PiB2b2lkID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKHRleHRCdWZmZXIubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR0b2tlbnMucHVzaChcblx0XHRcdFx0XHRuZXcgVG9rZW4oXG5cdFx0XHRcdFx0XHRUb2tlblR5cGUuVEVYVCxcblx0XHRcdFx0XHRcdHRleHRCdWZmZXIsXG5cdFx0XHRcdFx0XHRpIC0gdGV4dEJ1ZmZlci5sZW5ndGgsXG5cdFx0XHRcdFx0XHRpLFxuXHRcdFx0XHRcdFx0dGhpcy5zb3VyY2Vcblx0XHRcdFx0XHQpLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbiAtIHRleHRCdWZmZXIubGVuZ3RoKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHR0ZXh0QnVmZmVyID0gJyc7XG5cdFx0XHR9XG5cdFx0fTtcblxuXG5cdFx0bGV0IGlnbm9yZVdoaXRlc3BhY2U6IGJvb2xlYW4gPSBmYWxzZTtcblx0XHR3aGlsZSAoaSA8IHRoaXMuc291cmNlLmxlbmd0aCkge1xuXHRcdFx0Y29uc3QgY2hhcjogc3RyaW5nID0gdGhpcy5zb3VyY2UuY2hhckF0KGkpO1xuXG5cdFx0XHRpZiAoY2hhciA9PT0gR1JBTU1BUi5TRU1JQ09MT04pIHtcblx0XHRcdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cblx0XHRcdFx0dG9rZW5zLnB1c2gobmV3IFRva2VuKFRva2VuVHlwZS5QVU5DVFVBVElPTiwgY2hhciwgaSwgaSwgdGhpcy5zb3VyY2UpXG5cdFx0XHRcdFx0ICAgICAgICAgICAgLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXG5cdFx0XHRcdGkrKztcblx0XHRcdFx0Y29sdW1uKys7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fSBlbHNlIGlmIChjaGFyID09PSBHUkFNTUFSLkJSQUNFX09QRU4pIHtcblx0XHRcdFx0aWdub3JlV2hpdGVzcGFjZSA9IHRydWU7XG5cdFx0XHR9IGVsc2UgaWYgKGNoYXIgPT09IEdSQU1NQVIuQlJBQ0VfQ0xPU0UpIHtcblx0XHRcdFx0aWdub3JlV2hpdGVzcGFjZSA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaWdub3JlV2hpdGVzcGFjZSkge1xuXHRcdFx0XHRpZiAodGhpcy5tYXRjaFdoaXRlc3BhY2VBdChpKSkge1xuXHRcdFx0XHRcdGkrKztcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaWZJc0NvbnN1bWluZ1B1bmN0dWF0aW9uKClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ1N0cmluZygpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdOdW1iZXIoKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nSWRlbnRpZmllcigpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdPcGVyYXRvcigpXG5cdFx0XHQpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHRleHRCdWZmZXIgKz0gY2hhcjtcblxuXHRcdFx0aWYgKGNoYXIgPT09ICdcXG4nKSB7XG5cdFx0XHRcdGxpbmUrKztcblx0XHRcdFx0Y29sdW1uID0gMDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbHVtbisrO1xuXHRcdFx0fVxuXG5cdFx0XHRpKys7XG5cdFx0fVxuXG5cdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cblx0XHRyZXR1cm4ge3Rva2VuczogdG9rZW5zLCBuZXdJbmRleDogaSwgbGluZTogbGluZSwgY29sdW1uOiBjb2x1bW59O1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUb2tlblN0cmVhbSB7XG5cdHRva2VuczogVG9rZW5bXTtcblx0aW5kZXg6IG51bWJlciA9IDA7XG5cblx0Y29uc3RydWN0b3IodG9rZW5zOiBUb2tlbltdKSB7XG5cdFx0dGhpcy50b2tlbnMgPSB0b2tlbnM7XG5cdH1cblxuXHRyZXdpbmQoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaW5kZXggPiAwKSB7XG5cdFx0XHR0aGlzLmluZGV4LS07XG5cdFx0fVxuXHR9XG5cblx0cGVlaygpOiBUb2tlbiB8IG51bGwge1xuXHRcdHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmluZGV4XSB8fCBudWxsO1xuXHR9XG5cblx0bmV4dCgpOiBUb2tlbiB8IG51bGwge1xuXHRcdHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmluZGV4KytdIHx8IG51bGw7XG5cdH1cblxuXHRoYXNOZXh0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7VG9rZW5pemVyfSBmcm9tIFwiLi4vdG9rZW5pemVyLnRzXCI7XG5pbXBvcnQge3Rocm93RGVwZW5kZW5jeUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQgdHlwZSB7VG9rZW59IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5cbmV4cG9ydCBjbGFzcyBTb3VyY2Uge1xuXHRzdGF0aWMgTkVXTElORSA9ICdcXG4nO1xuXHRwdWJsaWMgcmVhZG9ubHkgdXJsOiBzdHJpbmc7XG5cdHByaXZhdGUgY29kZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGNvZGU6IHN0cmluZywgdXJsOiBzdHJpbmcgPSAnPGlubGluZT4nKSB7XG5cdFx0dGhpcy51cmwgPSB1cmw7XG5cdFx0dGhpcy5jb2RlID0gY29kZTtcblx0fVxuXG5cdGdldCBsZW5ndGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5jb2RlLmxlbmd0aDtcblx0fVxuXG5cdGdldFRva2VuaXplcigpOiBUb2tlbml6ZXIge1xuXHRcdHJldHVybiBuZXcgVG9rZW5pemVyKHRoaXMpO1xuXHR9XG5cblx0c2xpY2Uoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmNvZGUuc2xpY2Uoc3RhcnQsIGVuZCk7XG5cdH1cblxuXHRjaGFyQXQoaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuY29kZS5jaGFyQXQoaW5kZXgpO1xuXHR9XG5cblx0c3RhcnRzV2l0aCh0ZXh0OiBzdHJpbmcsIHBvc2l0aW9uPzogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29kZS5zdGFydHNXaXRoKHRleHQsIHBvc2l0aW9uKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgU291cmNlU3BhbiB7XG5cdHNvdXJjZTogU291cmNlO1xuXHRzdGFydDogbnVtYmVyO1xuXHRlbmQ6IG51bWJlcjtcblx0bGluZTogbnVtYmVyO1xuXHRjb2x1bW46IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcihzb3VyY2U6IFNvdXJjZSwgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpIHtcblx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0XHR0aGlzLnN0YXJ0ID0gc3RhcnQ7XG5cdFx0dGhpcy5lbmQgPSBlbmQ7XG5cblx0XHRjb25zdCBiZWZvcmUgPSBzb3VyY2Uuc2xpY2UoMCwgc3RhcnQpO1xuXHRcdGNvbnN0IGxpbmVzID0gYmVmb3JlLnNwbGl0KFNvdXJjZS5ORVdMSU5FKTtcblxuXHRcdHRoaXMubGluZSA9IGxpbmVzLmxlbmd0aDtcblx0XHR0aGlzLmNvbHVtbiA9IChsaW5lc1tsaW5lcy5sZW5ndGggLSAxXSB8fCAnJykubGVuZ3RoICsgMTtcblx0fVxuXG5cdHRleHQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2Uuc2xpY2UodGhpcy5zdGFydCwgdGhpcy5lbmQpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGFuRnJvbShzdGFydFRva2VuOiBUb2tlbiwgZW5kVG9rZW46IFRva2VuKTogU291cmNlU3BhbiB7XG5cdHJldHVybiBuZXcgU291cmNlU3BhbihzdGFydFRva2VuLnNvdXJjZSwgc3RhcnRUb2tlbi5zdGFydCwgZW5kVG9rZW4uZW5kKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoU291cmNlKHVybDogc3RyaW5nKTogUHJvbWlzZTxTb3VyY2U+IHtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXHRpZiAoIXJlc3BvbnNlLm9rKSB7XG5cdFx0dGhyb3dEZXBlbmRlbmN5RXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHt1cmx9YCk7XG5cdH1cblxuXHRyZXR1cm4gbmV3IFNvdXJjZShhd2FpdCByZXNwb25zZS50ZXh0KCksIHVybCk7XG59XG4iLAogICAgImltcG9ydCB7U291cmNlLCBTb3VyY2VTcGFufSBmcm9tIFwiLi9wYXJzZXIvc291cmNlXCI7XG5cbmNsYXNzIEVycm9yVHlwZXMge1xuXHRzdGF0aWMgVFlQRV9FUlJPUjogc3RyaW5nID0gJ1R5cGVFcnJvcic7XG5cdHN0YXRpYyBUT0tFTl9FUlJPUjogc3RyaW5nID0gJ1Rva2VuRXJyb3InO1xuXHRzdGF0aWMgUEFSU0VSX0VSUk9SOiBzdHJpbmcgPSAnUGFyc2VyRXJyb3InO1xuXHRzdGF0aWMgUlVOVElNRV9FUlJPUjogc3RyaW5nID0gJ1J1bnRpbWVFcnJvcic7XG5cdHN0YXRpYyBJTlRFUk5BTF9FUlJPUjogc3RyaW5nID0gJ0ludGVybmFsRXJyb3InO1xuXHRzdGF0aWMgTkFUSVZFX0VSUk9SOiBzdHJpbmcgPSAnTmF0aXZlRXJyb3InO1xuXHRzdGF0aWMgREVQRU5ERU5DWV9FUlJPUjogc3RyaW5nID0gJ0RlcGVuZGVuY3lFcnJvcic7XG5cdHN0YXRpYyBDT01QSUxFX0VSUk9SOiBzdHJpbmcgPSAnQ29tcGlsZUVycm9yJztcblx0c3RhdGljIFZJUlRVQUxfTUFDSElORV9FUlJPUjogc3RyaW5nID0gJ1ZpcnR1YWxNYWNoaW5lRXJyb3InO1xufVxuXG5leHBvcnQgY2xhc3MgTHlyYUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXHRraW5kOiBzdHJpbmc7XG5cdHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbDtcblx0b3ZlcnJpZGUgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdGtpbmQ6IHN0cmluZyxcblx0XHRtZXNzYWdlOiBzdHJpbmcsXG5cdFx0c3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLFxuXHRcdGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuXHQpIHtcblx0XHRzdXBlcihtZXNzYWdlKTtcblx0XHR0aGlzLmtpbmQgPSBraW5kO1xuXHRcdHRoaXMuc3BhbiA9IHNwYW47XG5cdFx0dGhpcy5jYXVzZSA9IGNhdXNlO1xuXHR9XG5cblx0Zm9ybWF0KCk6IHN0cmluZyB7XG5cdFx0aWYgKHRoaXMuc3Bhbikge1xuXG5cdFx0XHRyZXR1cm4gYFxuWyR7dGhpcy5raW5kfV0gJHt0aGlzLm1lc3NhZ2V9XG4gIGF0ICR7dGhpcy5zcGFuLnNvdXJjZS51cmx9OiR7dGhpcy5zcGFuLmxpbmV9OiR7dGhpcy5zcGFuLmNvbHVtbn1cblxuJHt0aGlzLnNwYW4udGV4dCgpfVxuJHtcIiBcIi5yZXBlYXQodGhpcy5zcGFuLmNvbHVtbil9JHtcIl5cIi5yZXBlYXQodGhpcy5zcGFuLmVuZCAtIHRoaXMuc3Bhbi5zdGFydCl9XG5gO1xuXHRcdH1cblxuXHRcdHJldHVybiBgWyR7dGhpcy5raW5kfV0gJHt0aGlzLm1lc3NhZ2V9YDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYVRva2VuRXJyb3IgZXh0ZW5kcyBMeXJhRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRFcnJvclR5cGVzLlRPS0VOX0VSUk9SLFxuXHRcdFx0bWVzc2FnZSxcblx0XHRcdHNwYW4sXG5cdFx0XHRjYXVzZVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFUeXBlRXJyb3IgZXh0ZW5kcyBMeXJhRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRFcnJvclR5cGVzLlRZUEVfRVJST1IsXG5cdFx0XHRtZXNzYWdlLFxuXHRcdFx0c3Bhbixcblx0XHRcdGNhdXNlXG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYVBhcnNlckVycm9yIGV4dGVuZHMgTHlyYUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0RXJyb3JUeXBlcy5QQVJTRVJfRVJST1IsXG5cdFx0XHRtZXNzYWdlLFxuXHRcdFx0c3Bhbixcblx0XHRcdGNhdXNlXG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYVJ1bnRpbWVFcnJvciBleHRlbmRzIEx5cmFFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihcblx0XHRcdEVycm9yVHlwZXMuUlVOVElNRV9FUlJPUixcblx0XHRcdG1lc3NhZ2UsXG5cdFx0XHRzcGFuLFxuXHRcdFx0Y2F1c2Vcblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhTmF0aXZlRXJyb3IgZXh0ZW5kcyBMeXJhRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRFcnJvclR5cGVzLk5BVElWRV9FUlJPUixcblx0XHRcdG1lc3NhZ2UsXG5cdFx0XHRzcGFuLFxuXHRcdFx0Y2F1c2Vcblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhRGVwZW5kZW5jeUVycm9yIGV4dGVuZHMgTHlyYUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0RXJyb3JUeXBlcy5ERVBFTkRFTkNZX0VSUk9SLFxuXHRcdFx0bWVzc2FnZSxcblx0XHRcdHNwYW4sXG5cdFx0XHRjYXVzZVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFDb21waWxlRXJyb3IgZXh0ZW5kcyBMeXJhRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRFcnJvclR5cGVzLkNPTVBJTEVfRVJST1IsXG5cdFx0XHRtZXNzYWdlLFxuXHRcdFx0c3Bhbixcblx0XHRcdGNhdXNlXG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVmlydHVhbE1hY2hpbmVFcnJvciBleHRlbmRzIEx5cmFFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihcblx0XHRcdEVycm9yVHlwZXMuVklSVFVBTF9NQUNISU5FX0VSUk9SLFxuXHRcdFx0bWVzc2FnZSxcblx0XHRcdHNwYW4sXG5cdFx0XHRjYXVzZVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93VG9rZW5FcnJvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKTogbmV2ZXIge1xuXHR0aHJvdyBuZXcgTHlyYVRva2VuRXJyb3IobWVzc2FnZSwgc3BhbiwgY2F1c2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dUeXBlRXJyb3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IG5ldmVyIHtcblx0dGhyb3cgbmV3IEx5cmFUeXBlRXJyb3IobWVzc2FnZSwgc3BhbiwgY2F1c2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQYXJzZXJFcnJvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKTogbmV2ZXIge1xuXHR0aHJvdyBuZXcgTHlyYVBhcnNlckVycm9yKG1lc3NhZ2UsIHNwYW4sIGNhdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UnVudGltZUVycm9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBuZXZlciB7XG5cdHRocm93IG5ldyBMeXJhUnVudGltZUVycm9yKG1lc3NhZ2UsIHNwYW4sIGNhdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93TmF0aXZlRXJyb3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IG5ldmVyIHtcblx0dGhyb3cgbmV3IEx5cmFOYXRpdmVFcnJvcihtZXNzYWdlLCBzcGFuLCBjYXVzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd0RlcGVuZGVuY3lFcnJvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKTogbmV2ZXIge1xuXHR0aHJvdyBuZXcgTHlyYURlcGVuZGVuY3lFcnJvcihtZXNzYWdlLCBzcGFuLCBjYXVzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd0NvbXBpbGVFcnJvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKTogbmV2ZXIge1xuXHR0aHJvdyBuZXcgTHlyYUNvbXBpbGVFcnJvcihtZXNzYWdlLCBzcGFuLCBjYXVzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1ZpcnR1YWxNYWNoaW5lRXJyb3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IG5ldmVyIHtcblx0dGhyb3cgbmV3IFZpcnR1YWxNYWNoaW5lRXJyb3IobWVzc2FnZSwgc3BhbiwgY2F1c2UpO1xufVxuXG4vKipcbiAqIEB0aHJvd3Mge0Vycm9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24gd3JhcEpzRXJyb3IoZXJyb3I6IEVycm9yLCBzb3VyY2U6IFNvdXJjZSk6IEx5cmFFcnJvciB7XG5cdGlmIChlcnJvciBpbnN0YW5jZW9mIEx5cmFFcnJvcikge1xuXHRcdHJldHVybiBlcnJvcjtcblx0fVxuXG5cdHJldHVybiBuZXcgTHlyYUVycm9yKFxuXHRcdEVycm9yVHlwZXMuSU5URVJOQUxfRVJST1IsXG5cdFx0ZXJyb3IubWVzc2FnZSB8fCBTdHJpbmcoZXJyb3IpLFxuXHRcdG5ldyBTb3VyY2VTcGFuKHNvdXJjZSwgMCwgc291cmNlLmxlbmd0aClcblx0KTtcbn1cbiIsCiAgICAiaW1wb3J0IHtBU1RDbGFzc05vZGUsIEFTVE5vZGVUeXBlfSBmcm9tIFwiLi4vY29yZS9hc3RcIjtcbmltcG9ydCB7Q2xhc3NEZWZpbml0aW9ufSBmcm9tIFwiLi4vY29yZS9ydW50aW1lL29iamVjdHNcIjtcbmltcG9ydCB7UGFyc2VyfSBmcm9tIFwiLi4vY29yZS9wYXJzZXIvcGFyc2VyXCI7XG5pbXBvcnQge3Rocm93UnVudGltZUVycm9yfSBmcm9tIFwiLi4vY29yZS9lcnJvcnNcIjtcbmltcG9ydCB0eXBlIHtTb3VyY2V9IGZyb20gXCIuLi9jb3JlL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmV4cG9ydCBjbGFzcyBOYXRpdmVDbGFzcyB7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblx0cmVhZG9ubHkgbmF0aXZlSW5zdGFuY2U6IGFueTtcblx0cmVhZG9ubHkgbmF0aXZlQ2xhc3NTb3VyY2U6IFNvdXJjZTtcblx0aXNBdXRvbG9hZEFibGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIG5hdGl2ZUluc3RhbmNlOiBhbnksIHNvdXJjZTogU291cmNlKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLm5hdGl2ZUluc3RhbmNlID0gbmF0aXZlSW5zdGFuY2U7XG5cdFx0dGhpcy5uYXRpdmVDbGFzc1NvdXJjZSA9IHNvdXJjZTtcblx0fVxuXG5cdGdldENsYXNzRGVmaW5pdGlvbigpOiBDbGFzc0RlZmluaXRpb24ge1xuXHRcdGNvbnN0IGFzdCA9IG5ldyBQYXJzZXIodGhpcy5uYXRpdmVDbGFzc1NvdXJjZSkucGFyc2UoKTtcblxuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChub2RlLnR5cGUgPT09IEFTVE5vZGVUeXBlLkNMQVNTKSB7XG5cdFx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUQ2xhc3NOb2RlICYmIG5vZGUubmFtZSA9PT0gdGhpcy5uYW1lKSB7XG5cdFx0XHRcdFx0Y29uc3QgY2xhc3NEZWYgPSBDbGFzc0RlZmluaXRpb24uZnJvbUFTVChub2RlKTtcblxuXHRcdFx0XHRcdGNsYXNzRGVmLm5hdGl2ZUluc3RhbmNlID0gdGhpcy5uYXRpdmVJbnN0YW5jZTtcblxuXHRcdFx0XHRcdHJldHVybiBjbGFzc0RlZjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRocm93UnVudGltZUVycm9yKGBDbGFzcyAke3RoaXMubmFtZX0gbm90IGZvdW5kLmAsIGFzdC5zcGFuKTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0FTVEFycmF5Tm9kZSwgQVNUTm9kZSwgQVNUTm9kZVR5cGUsIEFTVFJldHVybk5vZGV9IGZyb20gXCIuLi9hc3RcIjtcbmltcG9ydCB7R1JBTU1BUiwgVFlQRV9FTlVNfSBmcm9tIFwiLi4vZ3JhbW1hclwiO1xuaW1wb3J0IHtDbGFzc0RlZmluaXRpb24sIEluc3RhbmNlfSBmcm9tIFwiLi9vYmplY3RzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi9ydW50aW1lX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge3Rocm93TmF0aXZlRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcblxuaW50ZXJmYWNlIFNlcmlhbGl6YXRpb25PYmplY3Qge1xuXHRbaW5kZXg6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHRjbGFzc05hbWU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihjbGFzc05hbWU6IHN0cmluZykge1xuXHRcdHRoaXMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuXHR9XG5cblx0cHVibGljIHNlcmlhbGl6ZSgpOiBTZXJpYWxpemF0aW9uT2JqZWN0IHtcblx0XHRjb25zdCBvYmplY3Q6IFNlcmlhbGl6YXRpb25PYmplY3QgPSB7fTtcblxuXHRcdG9iamVjdFt0aGlzLmNsYXNzTmFtZV0gPSBPYmplY3Rcblx0XHRcdC5rZXlzKHRoaXMpXG5cdFx0XHQuZmlsdGVyKGtleSA9PiBrZXkgIT09ICdjbGFzc05hbWUnKVxuXHRcdFx0LnJlZHVjZSgob2JqZWN0OiBTZXJpYWxpemF0aW9uT2JqZWN0LCBrZXk6IHN0cmluZyk6IFNlcmlhbGl6YXRpb25PYmplY3QgPT4ge1xuXHRcdFx0XHRjb25zdCBjb3B5OiBTZXJpYWxpemF0aW9uT2JqZWN0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcyk7XG5cdFx0XHRcdG9iamVjdFtrZXldID0gY29weVtrZXldO1xuXHRcdFx0XHRyZXR1cm4gb2JqZWN0O1xuXHRcdFx0fSwge30pO1xuXG5cdFx0cmV0dXJuIG9iamVjdDtcblx0fVxuXG5cdHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSh7Y2xhc3NOYW1lOiB0aGlzLmNsYXNzTmFtZX0sIG51bGwsIDIpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhT2JqZWN0VmlldyBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHRwcml2YXRlIF9faW5zdGFuY2U6IEluc3RhbmNlO1xuXG5cdGNvbnN0cnVjdG9yKGluc3RhbmNlOiBJbnN0YW5jZSkge1xuXHRcdHN1cGVyKGluc3RhbmNlLl9fY2xhc3NEZWYubmFtZSk7XG5cblx0XHR0aGlzLl9faW5zdGFuY2UgPSBpbnN0YW5jZTtcblxuXHRcdHJldHVybiBuZXcgUHJveHkodGhpcywge1xuXHRcdFx0Z2V0OiAoXzogYW55LCBuYW1lOiBzdHJpbmcpOiBhbnkgPT4ge1xuXHRcdFx0XHRpZiAobmFtZSBpbiB0aGlzLl9faW5zdGFuY2UuX19pbnN0YW5jZUZpZWxkcykge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLl9faW5zdGFuY2UuX19pbnN0YW5jZUZpZWxkc1tuYW1lXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChuYW1lIGluIHRoaXMuX19pbnN0YW5jZS5fX3N0YXRpY0ZpZWxkcykge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLl9faW5zdGFuY2UuX19zdGF0aWNGaWVsZHNbbmFtZV07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAobmFtZSBpbiB0aGlzKSB7XG5cdFx0XHRcdFx0Y29uc3Qgc2VsZjogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0gdGhpcztcblx0XHRcdFx0XHRyZXR1cm4gc2VsZltuYW1lXTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0c2V0OiAoXzogYW55LCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBhbnkgPT4ge1xuXHRcdFx0XHRpZiAobmFtZSBpbiB0aGlzLl9faW5zdGFuY2UuX19pbnN0YW5jZUZpZWxkcykge1xuXHRcdFx0XHRcdHRoaXMuX19pbnN0YW5jZS5fX2luc3RhbmNlRmllbGRzW25hbWVdID0gdmFsdWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAobmFtZSBpbiB0aGlzLl9faW5zdGFuY2UuX19zdGF0aWNGaWVsZHMpIHtcblx0XHRcdFx0XHR0aGlzLl9faW5zdGFuY2UuX19zdGF0aWNGaWVsZHNbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG5cblx0cHVibGljIG92ZXJyaWRlIHNlcmlhbGl6ZSgpOiBTZXJpYWxpemF0aW9uT2JqZWN0IHtcblx0XHRjb25zdCBvYmplY3Q6IFNlcmlhbGl6YXRpb25PYmplY3QgPSB7fTtcblxuXHRcdG9iamVjdFt0aGlzLmNsYXNzTmFtZV0gPSB7Li4udGhpcy5fX2luc3RhbmNlPy5fX2luc3RhbmNlRmllbGRzfTtcblxuXHRcdHJldHVybiBvYmplY3Q7XG5cdH1cblxuXHRwdWJsaWMgb3ZlcnJpZGUgdG9TdHJpbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5zZXJpYWxpemUoKSwgbnVsbCwgMik7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhc3RWYWx1ZSh2YWx1ZTogYW55LCBleHBlY3RlZDogYW55ID0gbnVsbCk6IGFueSB7XG5cdGNvbnN0IHR5cGVPZiA9IHR5cGVvZiB2YWx1ZTtcblxuXHRpZiAoZXhwZWN0ZWQgPT09IG51bGwpIHtcblx0XHRpZiAodmFsdWUgPT09IEdSQU1NQVIuTlVMTCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGlmICh2YWx1ZSA9PT0gR1JBTU1BUi5UUlVFKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0aWYgKHZhbHVlID09PSBHUkFNTUFSLkZBTFNFKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmICh0eXBlT2YgPT09ICdzdHJpbmcnICYmIHZhbHVlLnRyaW0oKSAhPT0gJycgJiYgIWlzTmFOKHZhbHVlKSkge1xuXHRcdFx0cmV0dXJuIE51bWJlcih2YWx1ZSk7XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdHN3aXRjaCAoZXhwZWN0ZWQpIHtcblx0XHRjYXNlIFRZUEVfRU5VTS5TVFJJTkc6XG5cdFx0XHRyZXR1cm4gdHlwZU9mID09PSAnc3RyaW5nJyA/IHZhbHVlIDogU3RyaW5nKHZhbHVlKTtcblxuXHRcdGNhc2UgVFlQRV9FTlVNLk5VTUJFUjpcblx0XHRcdHJldHVybiB0eXBlT2YgPT09ICdudW1iZXInID8gdmFsdWUgOiBOdW1iZXIodmFsdWUpO1xuXG5cdFx0Y2FzZSBUWVBFX0VOVU0uQk9PTEVBTjpcblx0XHRcdHJldHVybiB0eXBlT2YgPT09ICdib29sZWFuJyA/IHZhbHVlIDogdmFsdWUgPT09ICd0cnVlJztcblxuXHRcdGNhc2UgVFlQRV9FTlVNLk5VTEw6XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTHlyYVN0cmluZyh2YWx1ZTogc3RyaW5nKTogQVNUTm9kZSB7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5TVFJJTkcpO1xuXHRub2RlLnZhbHVlID0gdmFsdWU7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9MeXJhTnVtYmVyKHZhbHVlOiBudW1iZXIpOiBBU1ROb2RlIHtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLk5VTUJFUik7XG5cdG5vZGUudmFsdWUgPSB2YWx1ZTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0x5cmFCb29sZWFuKHZhbHVlOiBib29sZWFuKTogQVNUTm9kZSB7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5CT09MRUFOKTtcblx0bm9kZS52YWx1ZSA9IHZhbHVlO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTHlyYU51bGwoKTogQVNUTm9kZSB7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5OVUxMKTtcblx0bm9kZS52YWx1ZSA9IEdSQU1NQVIuTlVMTDtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0x5cmFBcnJheSh2YWx1ZXM6IGFueVtdKTogQVNUTm9kZSB7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUQXJyYXlOb2RlKCk7XG5cdG5vZGUuZWxlbWVudHMgPSB2YWx1ZXMubWFwKHZhbHVlID0+IHRvTHlyYVZhbHVlKHZhbHVlKSk7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9MeXJhVmFsdWUodmFsdWU6IGFueSk6IEFTVE5vZGUge1xuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBBU1ROb2RlKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gVFlQRV9FTlVNLlNUUklORykge1xuXHRcdHJldHVybiB0b0x5cmFTdHJpbmcodmFsdWUpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gVFlQRV9FTlVNLk5VTUJFUikge1xuXHRcdHJldHVybiB0b0x5cmFOdW1iZXIodmFsdWUpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gVFlQRV9FTlVNLkJPT0xFQU4pIHtcblx0XHRyZXR1cm4gdG9MeXJhQm9vbGVhbih2YWx1ZSk7XG5cdH1cblxuXHRpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiB0b0x5cmFOdWxsKCk7XG5cdH1cblxuXHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRyZXR1cm4gdG9MeXJhQXJyYXkodmFsdWUpO1xuXHR9XG5cblx0dGhyb3dOYXRpdmVFcnJvcignQ2Fubm90IGNvbnZlcnQgbmF0aXZlIG9iamVjdCB0byBMeXJhIHZhbHVlJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tTHlyYVZhbHVlKHZhbHVlOiBhbnkpOiBhbnkge1xuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBBU1ROb2RlKSB7XG5cdFx0cmV0dXJuIGNhc3RWYWx1ZSh2YWx1ZS52YWx1ZSk7XG5cdH1cblxuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBJbnN0YW5jZSkge1xuXHRcdGlmICh2YWx1ZS5fX25hdGl2ZUluc3RhbmNlKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWUuX19uYXRpdmVJbnN0YW5jZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IEx5cmFPYmplY3RWaWV3KHZhbHVlKTtcblx0fVxuXG5cdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdHJldHVybiB2YWx1ZS5tYXAoZnJvbUx5cmFWYWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4gY2FzdFZhbHVlKHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblZhbHVlKHZhbHVlOiBhbnkpOiBBU1RSZXR1cm5Ob2RlIHtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RSZXR1cm5Ob2RlKCk7XG5cdG5vZGUuYXJndW1lbnQgPSB0b0x5cmFWYWx1ZSh2YWx1ZSk7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd3JhcE5hdGl2ZUluc3RhbmNlKGx5cmFOYXRpdmVPYmplY3Q6IEx5cmFOYXRpdmVPYmplY3QsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IEluc3RhbmNlIHtcblx0aWYgKCFvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmhhcyhseXJhTmF0aXZlT2JqZWN0LmNsYXNzTmFtZSkpIHtcblx0XHR0aHJvd05hdGl2ZUVycm9yKGBDbGFzcyAke2x5cmFOYXRpdmVPYmplY3QuY2xhc3NOYW1lfSBub3QgZm91bmQuYCk7XG5cdH1cblxuXHRjb25zdCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQobHlyYU5hdGl2ZU9iamVjdC5jbGFzc05hbWUpO1xuXHRjb25zdCBpbnN0YW5jZTogSW5zdGFuY2UgPSBjbGFzc0RlZi5jb25zdHJ1Y3RFbXB0eUluc3RhbmNlKCk7XG5cblx0aW5zdGFuY2UuX19uYXRpdmVJbnN0YW5jZSA9IGx5cmFOYXRpdmVPYmplY3Q7XG5cblx0cmV0dXJuIGluc3RhbmNlO1xufVxuXG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7THlyYU5hdGl2ZU9iamVjdH0gZnJvbSBcIi4uLy4uL2NvcmUvcnVudGltZS9ydW50aW1lX2NvbnZlcnNpb25cIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vLi4vY29yZS9wYXJzZXIvc291cmNlXCI7XG5cbmNvbnN0IENMQVNTX05BTUUgPSAnU3RyaW5nJztcblxuZXhwb3J0IGNsYXNzIEx5cmFTdHJpbmcgZXh0ZW5kcyBMeXJhTmF0aXZlT2JqZWN0IHtcblx0dmFsdWU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIoQ0xBU1NfTkFNRSk7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHR9XG5cblx0Ly8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuXHR0b1VwcGVyQ2FzZSgpOiBMeXJhU3RyaW5nIHtcblx0XHRyZXR1cm4gbmV3IEx5cmFTdHJpbmcodGhpcy52YWx1ZS50b1VwcGVyQ2FzZSgpKTtcblx0fVxuXG5cdC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcblx0dG9Mb3dlckNhc2UoKTogTHlyYVN0cmluZyB7XG5cdFx0cmV0dXJuIG5ldyBMeXJhU3RyaW5nKHRoaXMudmFsdWUudG9Mb3dlckNhc2UoKSk7XG5cdH1cblxuXHRvdmVycmlkZSB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTdHJpbmdUeXBlIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IENMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRDTEFTU19OQU1FLFxuXHRcdFx0THlyYVN0cmluZyxcblx0XHRcdG5ldyBTb3VyY2UoXG5cdFx0XHRcdGBcbmNsYXNzICR7Q0xBU1NfTkFNRX0ge1xuXHRwdWJsaWMgY29uc3RydWN0b3IodmFsdWUpO1xuXHRcdFx0XHRcblx0cHVibGljIHRvVXBwZXJDYXNlKCk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwdWJsaWMgdG9Mb3dlckNhc2UoKTogJHtDTEFTU19OQU1FfTtcblxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IHRydWU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi4vLi4vY29yZS9ydW50aW1lL3J1bnRpbWVfY29udmVyc2lvblwiO1xuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuLi8uLi9jb3JlL3BhcnNlci9zb3VyY2VcIjtcblxuY29uc3QgQ0xBU1NfTkFNRSA9ICdTeXN0ZW0nO1xuXG5leHBvcnQgY2xhc3MgTHlyYVN5c3RlbSB7XG5cdHN0YXRpYyBhbGVydChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRhbGVydChtZXNzYWdlKTtcblx0fVxuXG5cdHN0YXRpYyBwcmludChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRjb25zb2xlLmxvZyhtZXNzYWdlKTtcblx0fVxuXG5cdHN0YXRpYyBpbmZvKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRjb25zb2xlLmluZm8odmFsdWUuc2VyaWFsaXplKCkpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zb2xlLmluZm8odmFsdWUpO1xuXHR9XG5cblx0c3RhdGljIHdhcm5pbmcodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdGNvbnNvbGUud2Fybih2YWx1ZS5zZXJpYWxpemUoKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnNvbGUud2Fybih2YWx1ZSk7XG5cdH1cblxuXHRzdGF0aWMgZXJyb3IodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IodmFsdWUuc2VyaWFsaXplKCkpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zb2xlLmVycm9yKHZhbHVlKTtcblx0fVxuXG5cdHN0YXRpYyBsb2codmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdGNvbnNvbGUubG9nKHZhbHVlLnNlcmlhbGl6ZSgpKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc29sZS5sb2codmFsdWUpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTeXN0ZW0gZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdENMQVNTX05BTUUsXG5cdFx0XHRMeXJhU3lzdGVtLFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfSB7XG5cdHB1YmxpYyBzdGF0aWMgYWxlcnQobWVzc2FnZTogc3RyaW5nKTogdm9pZDtcblx0XG5cdHB1YmxpYyBzdGF0aWMgcHJpbnQobWVzc2FnZTogc3RyaW5nKTogdm9pZDtcblx0XG5cdHB1YmxpYyBzdGF0aWMgaW5mbyh2YWx1ZTogbWl4ZWQpOiB2b2lkO1xuXHRcblx0cHVibGljIHN0YXRpYyB3YXJuaW5nKHZhbHVlOiBtaXhlZCk6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgc3RhdGljIGVycm9yKHZhbHVlOiBtaXhlZCk6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgc3RhdGljIGxvZyh2YWx1ZTogbWl4ZWQpOiB2b2lkO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IGZhbHNlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vLi4vY29yZS9wYXJzZXIvc291cmNlXCI7XG5cbmNvbnN0IENMQVNTX05BTUUgPSAnQXNzZXJ0JztcblxuY29uc3QgaWZGYWlsZWQgPSAobWVzc2FnZTogc3RyaW5nID0gJycpID0+IHtcblx0dGhyb3cgbmV3IEVycm9yKCdbQXNzZXJ0aW9uRXJyb3JdICcgKyAobWVzc2FnZSB8fCAnQXNzZXJ0aW9uIGZhaWxlZC4nKSk7XG59O1xuXG5leHBvcnQgY2xhc3MgTHlyYUFzc2VydCB7XG5cdHN0YXRpYyBpc1RydWUoY29uZGl0aW9uOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcgPSAnJykge1xuXHRcdGlmICghY29uZGl0aW9uKSB7XG5cdFx0XHRpZkZhaWxlZChtZXNzYWdlKTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgaXNGYWxzZShjb25kaXRpb246IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZyA9ICcnKSB7XG5cdFx0aWYgKGNvbmRpdGlvbikge1xuXHRcdFx0aWZGYWlsZWQobWVzc2FnZSk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBc3NlcnQgZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdENMQVNTX05BTUUsXG5cdFx0XHRMeXJhQXNzZXJ0LFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfSB7XG5cdHB1YmxpYyBzdGF0aWMgaXNUcnVlKGNvbmRpdGlvbjogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nID0gXCJcIik6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgc3RhdGljIGlzRmFsc2UoY29uZGl0aW9uOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcgPSBcIlwiKTogdm9pZDtcbn1gXG5cdFx0XHQpKTtcblxuXHRcdHRoaXMuaXNBdXRvbG9hZEFibGUgPSBmYWxzZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge05hdGl2ZUNsYXNzfSBmcm9tIFwiLi4vbmF0aXZlX2NsYXNzXCI7XG5pbXBvcnQge0x5cmFOYXRpdmVPYmplY3R9IGZyb20gXCIuLi8uLi9jb3JlL3J1bnRpbWUvcnVudGltZV9jb252ZXJzaW9uXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uLy4uL2NvcmUvcGFyc2VyL3NvdXJjZVwiO1xuXG5jb25zdCBDTEFTU19OQU1FID0gJ051bWJlcic7XG5cbmV4cG9ydCBjbGFzcyBMeXJhTnVtYmVyIGV4dGVuZHMgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdHByaXZhdGUgcmVhZG9ubHkgdmFsdWU6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcih2YWx1ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIoQ0xBU1NfTkFNRSk7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHR9XG5cblx0cHVibGljIHRvTnVtYmVyKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdH1cblxuXHRvdmVycmlkZSB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlLnRvU3RyaW5nKCk7XG5cdH1cblxuXHRwdWJsaWMgX19hZGQob3RoZXI6IEx5cmFOdW1iZXIpOiBMeXJhTnVtYmVyIHtcblx0XHRyZXR1cm4gbmV3IEx5cmFOdW1iZXIodGhpcy52YWx1ZSArIG90aGVyLnZhbHVlKTtcblx0fVxuXG5cdHB1YmxpYyBfX3N1YnRyYWN0KG90aGVyOiBMeXJhTnVtYmVyKTogTHlyYU51bWJlciB7XG5cdFx0cmV0dXJuIG5ldyBMeXJhTnVtYmVyKHRoaXMudmFsdWUgLSBvdGhlci52YWx1ZSk7XG5cdH1cblxuXHRwdWJsaWMgX19tdWx0aXBseShvdGhlcjogTHlyYU51bWJlcik6IEx5cmFOdW1iZXIge1xuXHRcdHJldHVybiBuZXcgTHlyYU51bWJlcih0aGlzLnZhbHVlICogb3RoZXIudmFsdWUpO1xuXHR9XG5cblx0cHVibGljIF9fZGl2aWRlKG90aGVyOiBMeXJhTnVtYmVyKTogTHlyYU51bWJlciB7XG5cdFx0cmV0dXJuIG5ldyBMeXJhTnVtYmVyKHRoaXMudmFsdWUgLyBvdGhlci52YWx1ZSk7XG5cdH1cblxuXHRwcml2YXRlIF9fbm90KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhdGhpcy52YWx1ZTtcblx0fVxuXG5cdHB1YmxpYyBfX3VuYXJ5X3BsdXMoKTogTHlyYU51bWJlciB7XG5cdFx0cmV0dXJuIG5ldyBMeXJhTnVtYmVyKCt0aGlzLnZhbHVlKTtcblx0fVxuXG5cdHB1YmxpYyBfX3VuYXJ5X21pbnVzKCk6IEx5cmFOdW1iZXIge1xuXHRcdHJldHVybiBuZXcgTHlyYU51bWJlcigtdGhpcy52YWx1ZSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE51bWJlclR5cGUgZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdENMQVNTX05BTUUsXG5cdFx0XHRMeXJhTnVtYmVyLFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfSB7XG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWx1ZTogbnVtYmVyKTtcblx0XG5cdHB1YmxpYyB0b051bWJlcigpOiBudW1iZXI7XG5cdFxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nO1xuXHRcblx0cHVibGljIG9wZXJhdG9yICsob3RoZXI6ICR7Q0xBU1NfTkFNRX0pOiAke0NMQVNTX05BTUV9O1xuXHRcblx0cHJpdmF0ZSBfX2FkZChvdGhlcjogJHtDTEFTU19OQU1FfSk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwdWJsaWMgb3BlcmF0b3IgLShvdGhlcjogJHtDTEFTU19OQU1FfSk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwcml2YXRlIF9fc3VidHJhY3Qob3RoZXI6ICR7Q0xBU1NfTkFNRX0pOiAke0NMQVNTX05BTUV9O1xuXHRcblx0cHVibGljIG9wZXJhdG9yICoob3RoZXI6ICR7Q0xBU1NfTkFNRX0pOiAke0NMQVNTX05BTUV9O1xuXHRcblx0cHJpdmF0ZSBfX211bHRpcGx5KG90aGVyOiAke0NMQVNTX05BTUV9KTogJHtDTEFTU19OQU1FfTtcblx0XG5cdHB1YmxpYyBvcGVyYXRvciAvKG90aGVyOiAke0NMQVNTX05BTUV9KTogJHtDTEFTU19OQU1FfTtcblx0XG5cdHByaXZhdGUgX19kaXZpZGUob3RoZXI6ICR7Q0xBU1NfTkFNRX0pOiAke0NMQVNTX05BTUV9O1xuXHRcblx0cHVibGljIG9wZXJhdG9yICUob3RoZXI6ICR7Q0xBU1NfTkFNRX0pOiAke0NMQVNTX05BTUV9O1xuXHRcblx0cHJpdmF0ZSBfX21vZHVsdXMob3RoZXI6ICR7Q0xBU1NfTkFNRX0pOiAke0NMQVNTX05BTUV9O1xuXHRcblx0cHVibGljIG9wZXJhdG9yID09KG90aGVyOiAke0NMQVNTX05BTUV9KTogJHtDTEFTU19OQU1FfTtcblx0XG5cdHByaXZhdGUgX19lcXVhbChvdGhlcjogJHtDTEFTU19OQU1FfSk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwdWJsaWMgb3BlcmF0b3IgIT0ob3RoZXI6ICR7Q0xBU1NfTkFNRX0pOiAke0NMQVNTX05BTUV9O1xuXHRcblx0cHJpdmF0ZSBfX25vdF9lcXVhbChvdGhlcjogJHtDTEFTU19OQU1FfSk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwdWJsaWMgb3BlcmF0b3IgPChvdGhlcjogJHtDTEFTU19OQU1FfSk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwcml2YXRlIF9fbGVzc190aGFuKG90aGVyOiAke0NMQVNTX05BTUV9KTogJHtDTEFTU19OQU1FfTtcblx0XG5cdHB1YmxpYyBvcGVyYXRvciA8PShvdGhlcjogJHtDTEFTU19OQU1FfSk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwcml2YXRlIF9fbGVzc19lcXVhbChvdGhlcjogJHtDTEFTU19OQU1FfSk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwdWJsaWMgb3BlcmF0b3IgPihvdGhlcjogJHtDTEFTU19OQU1FfSk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwcml2YXRlIF9fZ3JlYXRlcl90aGFuKG90aGVyOiAke0NMQVNTX05BTUV9KTogJHtDTEFTU19OQU1FfTtcblx0XG5cdHB1YmxpYyBvcGVyYXRvciA+PShvdGhlcjogJHtDTEFTU19OQU1FfSk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwcml2YXRlIF9fZ3JlYXRlcl9lcXVhbChvdGhlcjogJHtDTEFTU19OQU1FfSk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwdWJsaWMgb3BlcmF0b3IgISgpOiBib29sZWFuO1xuXHRcblx0cHJpdmF0ZSBfX25vdCgpOiBib29sZWFuO1xuXHRcblx0cHVibGljIG9wZXJhdG9yIHUrKCk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwcml2YXRlIF9fdW5hcnlfcGx1cygpOiAke0NMQVNTX05BTUV9O1xuXHRcblx0cHVibGljIG9wZXJhdG9yIHUtKCk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwcml2YXRlIF9fdW5hcnlfbWludXMoKTogJHtDTEFTU19OQU1FfTtcbn1gXG5cdFx0XHQpKTtcblxuXHRcdHRoaXMuaXNBdXRvbG9hZEFibGUgPSB0cnVlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7THlyYU5hdGl2ZU9iamVjdH0gZnJvbSBcIi4uLy4uL2NvcmUvcnVudGltZS9ydW50aW1lX2NvbnZlcnNpb25cIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vLi4vY29yZS9wYXJzZXIvc291cmNlXCI7XG5cbmNvbnN0IEFSUkFZX0NMQVNTX05BTUUgPSAnQXJyYXknO1xuY29uc3QgQVJSQVlfSVRFUkFUT1JfQ0xBU1NfTkFNRSA9ICdBcnJheUl0ZXJhdG9yJztcblxuZXhwb3J0IGNsYXNzIEx5cmFBcnJheSBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHRwdWJsaWMgdmFsdWVzOiBhbnlbXTtcblxuXHRjb25zdHJ1Y3Rvcih2YWx1ZXM6IGFueVtdID0gW10pIHtcblx0XHRzdXBlcihBUlJBWV9DTEFTU19OQU1FKTtcblxuXHRcdHRoaXMudmFsdWVzID0gdmFsdWVzO1xuXHR9XG5cblx0cHVibGljIGl0ZXJhdG9yKCk6IEx5cmFBcnJheUl0ZXJhdG9yIHtcblx0XHRyZXR1cm4gbmV3IEx5cmFBcnJheUl0ZXJhdG9yKHRoaXMpO1xuXHR9XG5cblx0cHVibGljIGxlbmd0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlcy5sZW5ndGg7XG5cdH1cblxuXHRwdWJsaWMgcHVzaCh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0dGhpcy52YWx1ZXMucHVzaCh2YWx1ZSk7XG5cdH1cblxuXHQvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG5cdHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzW2luZGV4XSA/PyBudWxsO1xuXHR9XG5cblx0Ly8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuXHRwdWJsaWMgcmVtb3ZlQXQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMudmFsdWVzID0gdGhpcy52YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcblx0fVxuXG5cdG92ZXJyaWRlIHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0Y29uc3QgdmFsdWVzID0gdGhpc1xuXHRcdFx0LnZhbHVlc1xuXHRcdFx0Lm1hcCh2YWx1ZSA9PiB7XG5cdFx0XHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFBcnJheSkge1xuXHRcdFx0XHRcdHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdH0pO1xuXG5cdFx0cmV0dXJuIGBbJHt2YWx1ZXMuam9pbignLCAnKX1dYDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQXJyYXlUeXBlIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IEFSUkFZX0NMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRBUlJBWV9DTEFTU19OQU1FLFxuXHRcdFx0THlyYUFycmF5LFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtBUlJBWV9DTEFTU19OQU1FfTxUPiBpbXBsZW1lbnRzIEl0ZXJhYmxlPFQ+IHtcblx0cHVibGljIGNvbnN0cnVjdG9yKHZhbHVlczogQXJyYXk8VD4gPSBbXSk7XG5cdFxuXHRwdWJsaWMgaXRlcmF0b3IoKTogSXRlcmF0b3I8VD47XG5cdFxuXHRwdWJsaWMgbGVuZ3RoKCk6IG51bWJlcjtcblx0XG5cdHB1YmxpYyBwdXNoKHZhbHVlOiBUKTogdm9pZDtcblx0XG5cdHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IFQ/O1xuXHRcblx0cHVibGljIHJlbW92ZUF0KGluZGV4OiBudW1iZXIpOiB2b2lkO1xuXHRcblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZztcbn1gXG5cdFx0XHQpKTtcblxuXHRcdHRoaXMuaXNBdXRvbG9hZEFibGUgPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhQXJyYXlJdGVyYXRvciBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHR2YWx1ZXM6IGFueVtdO1xuXHRpbmRleDogbnVtYmVyID0gMDtcblxuXHRjb25zdHJ1Y3RvcihhcnJheTogTHlyYUFycmF5KSB7XG5cdFx0c3VwZXIoQVJSQVlfSVRFUkFUT1JfQ0xBU1NfTkFNRSk7XG5cblx0XHR0aGlzLnZhbHVlcyA9IGFycmF5LnZhbHVlcztcblx0fVxuXG5cdHB1YmxpYyByZXdpbmQoKSB7XG5cdFx0dGhpcy5pbmRleCA9IDA7XG5cdH1cblxuXHRwdWJsaWMgaGFzTmV4dCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pbmRleCA8IHRoaXMudmFsdWVzLmxlbmd0aDtcblx0fVxuXG5cdHB1YmxpYyBuZXh0KCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmluZGV4ICsgMSA+IHRoaXMudmFsdWVzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuaW5kZXgrKztcblx0fVxuXG5cdC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcblx0cHVibGljIHByZXZpb3VzKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmluZGV4ICsgMSA8IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmluZGV4LS07XG5cdH1cblxuXHQvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG5cdHB1YmxpYyBrZXkoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5pbmRleDtcblx0fVxuXG5cdHB1YmxpYyBjdXJyZW50KCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzW3RoaXMuaW5kZXhdO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBcnJheUl0ZXJhdG9yVHlwZSBleHRlbmRzIE5hdGl2ZUNsYXNzIHtcblx0c3RhdGljIENMQVNTX05BTUUgPSBBUlJBWV9JVEVSQVRPUl9DTEFTU19OQU1FO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0QVJSQVlfSVRFUkFUT1JfQ0xBU1NfTkFNRSxcblx0XHRcdEx5cmFBcnJheSxcblx0XHRcdG5ldyBTb3VyY2UoXG5cdFx0XHRcdGBcbmNsYXNzICR7QVJSQVlfSVRFUkFUT1JfQ0xBU1NfTkFNRX08VD4gaW1wbGVtZW50cyBJdGVyYXRvcjxUPiB7XG5cdHB1YmxpYyBjb25zdHJ1Y3RvcihhcnJheTogQXJyYXk8VD4pO1xuXHRcblx0cHVibGljIGhhc05leHQoKTogYm9vbGVhbjtcblx0XG5cdHB1YmxpYyBuZXh0KCk6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgcHJldmlvdXMoKTogdm9pZDtcblx0XG5cdHB1YmxpYyBrZXkoKTogbnVtYmVyO1xuXHRcblx0cHVibGljIGN1cnJlbnQoKTogVDtcblx0XG5cdHB1YmxpYyByZXdpbmQoKTogdm9pZDtcbn1gXG5cdFx0XHQpKTtcblxuXHRcdHRoaXMuaXNBdXRvbG9hZEFibGUgPSB0cnVlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7dG9MeXJhVmFsdWV9IGZyb20gXCIuLi9ydW50aW1lL3J1bnRpbWVfY29udmVyc2lvblwiO1xuaW1wb3J0IHtMYW1iZGFGdW5jdGlvbkNhbGx9IGZyb20gXCIuLi9pbnRlcnByZXRlci9ldmFsdWF0aW9uXCI7XG5cblxuZXhwb3J0IGNsYXNzIFN0YXRlPFQgPSBhbnk+IHtcblx0cHJpdmF0ZSB2YWx1ZTogVDtcblx0cHJpdmF0ZSBzdWJzY3JpYmVyczogTWFwPG51bWJlciwgKHZhbHVlOiBUKSA9PiB2b2lkPiA9IG5ldyBNYXA8bnVtYmVyLCAodmFsdWU6IFQpID0+IHZvaWQ+KCk7XG5cdHByaXZhdGUgaWQ6IG51bWJlciA9IDA7XG5cblx0Y29uc3RydWN0b3IoaW5pdGlhbDogVCkge1xuXHRcdHRoaXMudmFsdWUgPSBpbml0aWFsO1xuXHR9XG5cblx0Z2V0KCk6IFQge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHR9XG5cblx0c2V0KHZhbHVlOiBUKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMudmFsdWUgPT09IHZhbHVlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMubm90aWZ5KCk7XG5cdH1cblxuXHRzdWJzY3JpYmUoZm46IExhbWJkYUZ1bmN0aW9uQ2FsbCk6IG51bWJlciB7XG5cdFx0Y29uc3QgbmV4dElkOiBudW1iZXIgPSB0aGlzLmlkKys7XG5cdFx0dGhpcy5zdWJzY3JpYmVycy5zZXQobmV4dElkLCB0aGlzLndyYXBDYWxsYmFjayhmbikpO1xuXHRcdHJldHVybiBuZXh0SWQ7XG5cdH1cblxuXHR1bnN1YnNjcmliZShpZDogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3Vic2NyaWJlcnMuZGVsZXRlKGlkKTtcblx0fVxuXG5cdHByaXZhdGUgbm90aWZ5KCk6IHZvaWQge1xuXHRcdGZvciAoY29uc3QgZm4gb2YgdGhpcy5zdWJzY3JpYmVycy52YWx1ZXMoKSkge1xuXHRcdFx0Zm4odGhpcy52YWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSB3cmFwQ2FsbGJhY2soZm46IExhbWJkYUZ1bmN0aW9uQ2FsbCkge1xuXHRcdHJldHVybiAodmFsdWU6IFQpOiB2b2lkID0+IHtcblx0XHRcdGZuLmV2YWxDYWxsKHRvTHlyYVZhbHVlKHZhbHVlKSk7XG5cdFx0fVxuXHR9XG59XG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7THlyYU5hdGl2ZU9iamVjdH0gZnJvbSBcIi4uLy4uL2NvcmUvcnVudGltZS9ydW50aW1lX2NvbnZlcnNpb25cIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vLi4vY29yZS9wYXJzZXIvc291cmNlXCI7XG5pbXBvcnQge1N0YXRlfSBmcm9tIFwiLi4vLi4vY29yZS9ldmVudC9zdGF0ZVwiO1xuaW1wb3J0IHR5cGUge0xhbWJkYUZ1bmN0aW9uQ2FsbH0gZnJvbSBcIi4uLy4uL2NvcmUvaW50ZXJwcmV0ZXIvZXZhbHVhdGlvblwiO1xuXG5jb25zdCBDTEFTU19OQU1FID0gJ1N0YXRlJztcblxuZXhwb3J0IGNsYXNzIEx5cmFTdGF0ZTxUPiBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHRwcml2YXRlIHN0YXRlOiBTdGF0ZTxUPjtcblxuXHRjb25zdHJ1Y3Rvcihpbml0aWFsOiBUKSB7XG5cdFx0c3VwZXIoQ0xBU1NfTkFNRSk7XG5cdFx0dGhpcy5zdGF0ZSA9IG5ldyBTdGF0ZTxUPihpbml0aWFsKTtcblx0fVxuXG5cdGdldCgpOiBUIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5nZXQoKTtcblx0fVxuXG5cdHNldCh2YWx1ZTogVCk6IHZvaWQge1xuXHRcdHRoaXMuc3RhdGUuc2V0KHZhbHVlKTtcblx0fVxuXG5cdHN1YnNjcmliZShmbjogTGFtYmRhRnVuY3Rpb25DYWxsKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5zdWJzY3JpYmUoZm4pO1xuXHR9XG5cblx0dW5zdWJzY3JpYmUoaWQ6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLnVuc3Vic2NyaWJlKGlkKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgU3RhdGVUeXBlIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IENMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRDTEFTU19OQU1FLFxuXHRcdFx0THlyYVN0YXRlLFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfTxUPiB7XG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcihpbml0aWFsOiBUKTtcblxuXHRwdWJsaWMgZ2V0KCk6IFQ7XG5cdFxuXHRwdWJsaWMgc2V0KHZhbHVlOiBUKTogdm9pZDtcblx0XG5cdHB1YmxpYyBzdWJzY3JpYmUoZm46IChUKSAtPiBtaXhlZCk6IG51bWJlcjtcblx0XG5cdHB1YmxpYyB1bnN1YnNjcmliZShpZDogbnVtYmVyKTogYm9vbGVhbjtcbn1gXG5cdFx0XHQpKTtcblxuXHRcdHRoaXMuaXNBdXRvbG9hZEFibGUgPSB0cnVlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7THlyYU5hdGl2ZU9iamVjdH0gZnJvbSBcIi4uLy4uL2NvcmUvcnVudGltZS9ydW50aW1lX2NvbnZlcnNpb25cIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vLi4vY29yZS9wYXJzZXIvc291cmNlXCI7XG5cbmNvbnN0IENMQVNTX05BTUUgPSAnTHlyYUV2ZW50cyc7XG5cbmV4cG9ydCBjbGFzcyBMeXJhRXZlbnQgZXh0ZW5kcyBMeXJhTmF0aXZlT2JqZWN0IHtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBldmVudDogRXZlbnQpIHtcblx0XHRzdXBlcihDTEFTU19OQU1FKTtcblx0fVxuXG5cdGdldFR5cGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5ldmVudC50eXBlO1xuXHR9XG5cblx0cHJldmVudERlZmF1bHQoKTogdm9pZCB7XG5cdFx0dGhpcy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBFdmVudFR5cGUgZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdENMQVNTX05BTUUsXG5cdFx0XHRMeXJhRXZlbnQsXG5cdFx0XHRuZXcgU291cmNlKFxuXHRcdFx0XHRgXG5jbGFzcyAke0NMQVNTX05BTUV9IHtcblx0cHVibGljIGNvbnN0cnVjdG9yKGV2ZW50KTtcblxuXHRwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmc7XG5cblx0cHVibGljIHByZXZlbnREZWZhdWx0KCk6IHZvaWQ7XG59YCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IHRydWU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi4vLi4vY29yZS9ydW50aW1lL3J1bnRpbWVfY29udmVyc2lvblwiO1xuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuLi8uLi9jb3JlL3BhcnNlci9zb3VyY2VcIjtcblxuY29uc3QgQ0xBU1NfTkFNRSA9ICdCb29sZWFuJztcblxuZXhwb3J0IGNsYXNzIEx5cmFCb29sZWFuIGV4dGVuZHMgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdHZhbHVlOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0c3VwZXIoQ0xBU1NfTkFNRSk7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHR9XG5cblx0b3ZlcnJpZGUgdG9TdHJpbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZS50b1N0cmluZygpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBCb29sZWFuVHlwZSBleHRlbmRzIE5hdGl2ZUNsYXNzIHtcblx0c3RhdGljIENMQVNTX05BTUUgPSBDTEFTU19OQU1FO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0Q0xBU1NfTkFNRSxcblx0XHRcdEx5cmFCb29sZWFuLFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfSB7XG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWx1ZSk7XG5cblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZztcbn1gXG5cdFx0XHQpKTtcblxuXHRcdHRoaXMuaXNBdXRvbG9hZEFibGUgPSB0cnVlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtTdHJpbmdUeXBlfSBmcm9tIFwiLi9jbGFzc2VzL3N0cmluZ1wiO1xuaW1wb3J0IHtTeXN0ZW19IGZyb20gXCIuL2NsYXNzZXMvc3lzdGVtXCI7XG5pbXBvcnQge0Fzc2VydH0gZnJvbSBcIi4vY2xhc3Nlcy9hc3NlcnRcIjtcbmltcG9ydCB7TnVtYmVyVHlwZX0gZnJvbSBcIi4vY2xhc3Nlcy9udW1iZXJcIjtcbmltcG9ydCB7QXJyYXlJdGVyYXRvclR5cGUsIEFycmF5VHlwZX0gZnJvbSBcIi4vY2xhc3Nlcy9hcnJheVwiO1xuaW1wb3J0IHtTdGF0ZVR5cGV9IGZyb20gXCIuL2NsYXNzZXMvc3RhdGVcIjtcbmltcG9ydCB7RXZlbnRUeXBlfSBmcm9tIFwiLi9jbGFzc2VzL2V2ZW50XCI7XG5pbXBvcnQge0Jvb2xlYW5UeXBlfSBmcm9tIFwiLi9jbGFzc2VzL2Jvb2xlYW4udHNcIjtcblxuZXhwb3J0IGNsYXNzIE5hdGl2ZUNsYXNzZXMge1xuXHRyZWFkb25seSByZWdpc3RyeTogTWFwPHN0cmluZywgTmF0aXZlQ2xhc3M+ID0gbmV3IE1hcCgpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMucmVnaXN0cnkuc2V0KFN0cmluZ1R5cGUuQ0xBU1NfTkFNRSwgbmV3IFN0cmluZ1R5cGUoKSk7XG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoTnVtYmVyVHlwZS5DTEFTU19OQU1FLCBuZXcgTnVtYmVyVHlwZSgpKTtcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChCb29sZWFuVHlwZS5DTEFTU19OQU1FLCBuZXcgQm9vbGVhblR5cGUoKSk7XG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoQXJyYXlUeXBlLkNMQVNTX05BTUUsIG5ldyBBcnJheVR5cGUoKSk7XG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoQXJyYXlJdGVyYXRvclR5cGUuQ0xBU1NfTkFNRSwgbmV3IEFycmF5SXRlcmF0b3JUeXBlKCkpXG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoU3lzdGVtLkNMQVNTX05BTUUsIG5ldyBTeXN0ZW0oKSk7XG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoQXNzZXJ0LkNMQVNTX05BTUUsIG5ldyBBc3NlcnQoKSk7XG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoU3RhdGVUeXBlLkNMQVNTX05BTUUsIG5ldyBTdGF0ZVR5cGUoKSk7XG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoRXZlbnRUeXBlLkNMQVNTX05BTUUsIG5ldyBFdmVudFR5cGUoKSlcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0FTVFBhcmFtZXRlck5vZGUsIEFTVFR5cGVOb2RlfSBmcm9tIFwiLi4vY29yZS9hc3RcIjtcbmltcG9ydCB7VFlQRV9FTlVNfSBmcm9tIFwiLi4vY29yZS9ncmFtbWFyXCI7XG5pbXBvcnQge3Rocm93TmF0aXZlRXJyb3J9IGZyb20gXCIuLi9jb3JlL2Vycm9yc1wiO1xuXG5leHBvcnQgY2xhc3MgTmF0aXZlRnVuY3Rpb24ge1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHBhcmFtZXRlck5vZGVzOiBBU1RQYXJhbWV0ZXJOb2RlW10gPSBbXTtcblx0cmVhZG9ubHkgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGU7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sIHJldHVyblR5cGU6IEFTVFR5cGVOb2RlKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnBhcmFtZXRlck5vZGVzID0gcGFyYW1ldGVycztcblx0XHR0aGlzLnJldHVyblR5cGUgPSByZXR1cm5UeXBlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBOYXRpdmVGdW5jdGlvblR5cGVSZWdpc3RyeSB7XG5cdHJlYWRvbmx5IGZ1bmN0aW9uczogTWFwPHN0cmluZywgTmF0aXZlRnVuY3Rpb24+ID0gbmV3IE1hcCgpO1xuXG5cdHB1YmxpYyBoYXMobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZnVuY3Rpb25zLmhhcyhuYW1lKTtcblx0fVxuXG5cdHB1YmxpYyBnZXQobmFtZTogc3RyaW5nKTogTmF0aXZlRnVuY3Rpb24ge1xuXHRcdGNvbnN0IG5hdGl2ZUZ1bmN0aW9uOiBOYXRpdmVGdW5jdGlvbiB8IHVuZGVmaW5lZCA9IHRoaXMuZnVuY3Rpb25zLmdldChuYW1lKTtcblx0XHRpZiAoIW5hdGl2ZUZ1bmN0aW9uKSB7XG5cdFx0XHR0aHJvd05hdGl2ZUVycm9yKGBGdW5jdGlvbiAke25hbWV9IG5vdCBmb3VuZC5gKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5hdGl2ZUZ1bmN0aW9uO1xuXHR9XG5cblx0cHVibGljIHNldChuYW1lOiBzdHJpbmcsIHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSwgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGUpOiBOYXRpdmVGdW5jdGlvblR5cGVSZWdpc3RyeSB7XG5cdFx0dGhpcy5mdW5jdGlvbnMuc2V0KG5hbWUsIG5ldyBOYXRpdmVGdW5jdGlvbihuYW1lLCBwYXJhbWV0ZXJzLCByZXR1cm5UeXBlKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE5hdGl2ZUZ1bmN0aW9ucyB7XG5cdHN0YXRpYyBQUklOVCA9ICdwcmludCc7XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj59XG5cdCAqL1xuXHRwdWJsaWMgZ2V0R2xvYmFsRnVuY3Rpb25zKCk6IHsgW2tleTogc3RyaW5nXTogKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkgfSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFtOYXRpdmVGdW5jdGlvbnMuUFJJTlRdOiAoLi4uYXJncykgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyguLi5hcmdzKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cblx0cHVibGljIGdldEdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5KCk6IE5hdGl2ZUZ1bmN0aW9uVHlwZVJlZ2lzdHJ5IHtcblx0XHRjb25zdCBmdW5jdGlvbnMgPSBuZXcgTmF0aXZlRnVuY3Rpb25UeXBlUmVnaXN0cnkoKTtcblx0XHRmdW5jdGlvbnMuc2V0KFxuXHRcdFx0TmF0aXZlRnVuY3Rpb25zLlBSSU5ULFxuXHRcdFx0W3BhcmFtZXRlcih0eXBlKFRZUEVfRU5VTS5TVFJJTkcpLCAnbWVzc2FnZScpXSxcblx0XHRcdHR5cGUoVFlQRV9FTlVNLlZPSUQpXG5cdFx0KVxuXG5cdFx0cmV0dXJuIGZ1bmN0aW9ucztcblx0fVxufVxuXG5mdW5jdGlvbiB0eXBlKG5hbWU6IHN0cmluZywgbnVsbGFibGUgPSBmYWxzZSk6IEFTVFR5cGVOb2RlIHtcblx0cmV0dXJuIG5ldyBBU1RUeXBlTm9kZShBU1RUeXBlTm9kZS5LSU5EX1NJTVBMRSwgbmFtZSwgbnVsbGFibGUpO1xufVxuXG5mdW5jdGlvbiBwYXJhbWV0ZXIodHlwZUFubm90YXRpb246IEFTVFR5cGVOb2RlLCBuYW1lOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogYW55ID0gbnVsbCk6IEFTVFBhcmFtZXRlck5vZGUge1xuXHRyZXR1cm4gbmV3IEFTVFBhcmFtZXRlck5vZGUobmFtZSwgdHlwZUFubm90YXRpb24sIGRlZmF1bHRWYWx1ZSk7XG59XG4iLAogICAgImltcG9ydCB7VFlQRV9FTlVNfSBmcm9tIFwiLi4vZ3JhbW1hclwiO1xuaW1wb3J0IHtcblx0QVNUQ2xhc3NOb2RlLFxuXHRBU1RGaWVsZE5vZGUsXG5cdEFTVEludGVyZmFjZU5vZGUsXG5cdEFTVE1ldGhvZE5vZGUsXG5cdEFTVE5vZGUsXG5cdEFTVFBhcmFtZXRlck5vZGUsXG5cdEFTVFR5cGVOb2RlXG59IGZyb20gXCIuLi9hc3RcIjtcbmltcG9ydCB7dGhyb3dUeXBlRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcbmltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuL3J1bnRpbWVfcmVnaXN0cnlcIjtcblxuZXhwb3J0IGNsYXNzIFByaW1pdGl2ZVR5cGVzIHtcblx0c3RhdGljIHJlYWRvbmx5IE5VTUJFUjogc3RyaW5nID0gVFlQRV9FTlVNLk5VTUJFUjtcblx0c3RhdGljIHJlYWRvbmx5IFNUUklORzogc3RyaW5nID0gVFlQRV9FTlVNLlNUUklORztcblx0c3RhdGljIHJlYWRvbmx5IEJPT0xFQU46IHN0cmluZyA9IFRZUEVfRU5VTS5CT09MRUFOO1xuXHRzdGF0aWMgcmVhZG9ubHkgTUlYRUQ6IHN0cmluZyA9IFRZUEVfRU5VTS5NSVhFRDtcblx0c3RhdGljIHJlYWRvbmx5IE5VTEw6IHN0cmluZyA9IFRZUEVfRU5VTS5OVUxMO1xuXHRzdGF0aWMgcmVhZG9ubHkgVk9JRDogc3RyaW5nID0gVFlQRV9FTlVNLlZPSUQ7XG5cblx0c3RhdGljIGhhc1R5cGUodHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKFByaW1pdGl2ZVR5cGVzLCB0eXBlLnRvVXBwZXJDYXNlKCkpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBQcmltaXRpdmVDbGFzc1R5cGVzIHtcblx0c3RhdGljIHJlYWRvbmx5IEFSUkFZOiBzdHJpbmcgPSBUWVBFX0VOVU0uQVJSQVk7XG5cblx0c3RhdGljIENMQVNTTkFNRV9NQVA6IHsgW3M6IHN0cmluZ106IHN0cmluZzsgfSA9IHtcblx0XHRhcnJheTogJ0FycmF5J1xuXHR9XG5cblx0c3RhdGljIGdldENsYXNzUmVmTmFtZSh0eXBlOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcblx0XHRyZXR1cm4gUHJpbWl0aXZlQ2xhc3NUeXBlcy5DTEFTU05BTUVfTUFQW3R5cGVdIHx8IG51bGw7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGUge1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0fVxuXG5cdGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzID09PSBvdGhlcjtcblx0fVxuXG5cdGFjY2VwdHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lcXVhbHMob3RoZXIpO1xuXHR9XG5cblx0dG9TdHJpbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gYFR5cGUoJHt0aGlzLm5hbWV9KWA7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFByaW1pdGl2ZVR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIobmFtZSk7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBQcmltaXRpdmVUeXBlXG5cdFx0XHQmJiB0aGlzLm5hbWUgPT09IG90aGVyLm5hbWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE1peGVkVHlwZSBleHRlbmRzIFR5cGUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihQcmltaXRpdmVUeXBlcy5NSVhFRCk7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBNaXhlZFR5cGU7XG5cdH1cblxuXHRvdmVycmlkZSBhY2NlcHRzKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBWb2lkVHlwZSBleHRlbmRzIFR5cGUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihQcmltaXRpdmVUeXBlcy5WT0lEKTtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBvdGhlciBpbnN0YW5jZW9mIFZvaWRUeXBlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBOdWxsVHlwZSBleHRlbmRzIFR5cGUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihQcmltaXRpdmVUeXBlcy5OVUxMKTtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBvdGhlciBpbnN0YW5jZW9mIE51bGxUeXBlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBOdWxsYWJsZVR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0aW5uZXI6IFR5cGU7XG5cblx0Y29uc3RydWN0b3IoaW5uZXI6IFR5cGUpIHtcblx0XHRzdXBlcihpbm5lci50b1N0cmluZygpICsgJz8nKTtcblx0XHR0aGlzLmlubmVyID0gaW5uZXI7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRpZiAob3RoZXIgPT09IFR5cGVzLk5VTEwpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChvdGhlciBpbnN0YW5jZW9mIE51bGxhYmxlVHlwZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuaW5uZXIuZXF1YWxzKG90aGVyLmlubmVyKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRvdmVycmlkZSBhY2NlcHRzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIG90aGVyID09PSBUeXBlcy5OVUxMIHx8IHRoaXMuaW5uZXIuYWNjZXB0cyhvdGhlcik7XG5cdH1cblxuXHRvdmVycmlkZSB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmlubmVyLnRvU3RyaW5nKCkgKyAnPyc7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFZOb2RlVHlwZSBleHRlbmRzIFR5cGUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigndm5vZGUnKTtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBvdGhlciBpbnN0YW5jZW9mIFZvaWRUeXBlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlcyB7XG5cdHN0YXRpYyByZWFkb25seSBOVU1CRVI6IFByaW1pdGl2ZVR5cGUgPSBuZXcgUHJpbWl0aXZlVHlwZShQcmltaXRpdmVUeXBlcy5OVU1CRVIpO1xuXHRzdGF0aWMgcmVhZG9ubHkgU1RSSU5HOiBQcmltaXRpdmVUeXBlID0gbmV3IFByaW1pdGl2ZVR5cGUoUHJpbWl0aXZlVHlwZXMuU1RSSU5HKTtcblx0c3RhdGljIHJlYWRvbmx5IEJPT0xFQU46IFByaW1pdGl2ZVR5cGUgPSBuZXcgUHJpbWl0aXZlVHlwZShQcmltaXRpdmVUeXBlcy5CT09MRUFOKTtcblx0c3RhdGljIHJlYWRvbmx5IE1JWEVEOiBNaXhlZFR5cGUgPSBuZXcgTWl4ZWRUeXBlKCk7XG5cdHN0YXRpYyByZWFkb25seSBOVUxMOiBOdWxsVHlwZSA9IG5ldyBOdWxsVHlwZSgpO1xuXHRzdGF0aWMgcmVhZG9ubHkgVk9JRDogVm9pZFR5cGUgPSBuZXcgVm9pZFR5cGUoKTtcblx0c3RhdGljIHJlYWRvbmx5IFZOT0RFOiBWTm9kZVR5cGUgPSBuZXcgVk5vZGVUeXBlKCk7XG5cblx0c3RhdGljIGdldFR5cGUobmFtZTogc3RyaW5nKTogVHlwZSB7XG5cdFx0aWYgKCFPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChQcmltaXRpdmVUeXBlcywgbmFtZS50b1VwcGVyQ2FzZSgpKSkge1xuXHRcdFx0dGhyb3dUeXBlRXJyb3IoYFVua25vd24gcHJpbWl0aXZlIHR5cGUgJHtuYW1lfS5gKTtcblx0XHR9XG5cblx0XHRjb25zdCB0eXBlczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0gVHlwZXM7XG5cdFx0cmV0dXJuIHR5cGVzW25hbWUudG9VcHBlckNhc2UoKV07XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGVWYXJpYWJsZSBleHRlbmRzIFR5cGUge1xuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcblx0XHRzdXBlcihuYW1lKTtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSkge1xuXHRcdHJldHVybiBvdGhlciBpbnN0YW5jZW9mIFR5cGVWYXJpYWJsZVxuXHRcdFx0JiYgdGhpcy5uYW1lID09PSBvdGhlci5uYW1lO1xuXHR9XG5cblx0b3ZlcnJpZGUgYWNjZXB0cygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVHlwZVBhcmFtZXRlclN5bWJvbCB7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblx0cmVhZG9ubHkgdmFyaWFibGVUeXBlOiBUeXBlVmFyaWFibGU7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnZhcmlhYmxlVHlwZSA9IG5ldyBUeXBlVmFyaWFibGUobmFtZSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpZWxkU3ltYm9sIHtcblx0cmVhZG9ubHkgbm9kZTogQVNURmllbGROb2RlO1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGZpZWxkVHlwZTogVHlwZTtcblx0cmVhZG9ubHkgaXNTdGF0aWM6IGJvb2xlYW4gPSBmYWxzZTtcblx0cmVhZG9ubHkgaXNQcml2YXRlOiBib29sZWFuID0gZmFsc2U7XG5cdHJlYWRvbmx5IGlzUHVibGljOiBib29sZWFuID0gZmFsc2U7XG5cdHJlYWRvbmx5IGlzUmVhZG9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcblx0b3duZXI6IENsYXNzU3ltYm9sIHwgSW50ZXJmYWNlU3ltYm9sIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3Iobm9kZTogQVNURmllbGROb2RlLCBmaWVsZFR5cGU6IFR5cGUpIHtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHRcdHRoaXMubmFtZSA9IG5vZGUubmFtZTtcblx0XHR0aGlzLmZpZWxkVHlwZSA9IGZpZWxkVHlwZTtcblx0XHR0aGlzLmlzU3RhdGljID0gbm9kZS5tb2RpZmllcnMuc3RhdGljO1xuXHRcdHRoaXMuaXNQcml2YXRlID0gbm9kZS5tb2RpZmllcnMucHJpdmF0ZTtcblx0XHR0aGlzLmlzUHVibGljID0gbm9kZS5tb2RpZmllcnMucHVibGljO1xuXHRcdHRoaXMuaXNSZWFkb25seSA9IG5vZGUubW9kaWZpZXJzLnJlYWRvbmx5O1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJTeW1ib2wge1xuXHRyZWFkb25seSBub2RlOiBBU1RQYXJhbWV0ZXJOb2RlIHwgbnVsbDtcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXHRyZWFkb25seSBwYXJhbWV0ZXJUeXBlOiBUeXBlO1xuXHRyZWFkb25seSBkZWZhdWx0VHlwZTogVHlwZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZTogVHlwZSwgZGVmYXVsdFZhbHVlOiBUeXBlIHwgbnVsbCA9IG51bGwsIG5vZGU6IEFTVFBhcmFtZXRlck5vZGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5wYXJhbWV0ZXJUeXBlID0gdHlwZTtcblx0XHR0aGlzLmRlZmF1bHRUeXBlID0gZGVmYXVsdFZhbHVlO1xuXHRcdHRoaXMubm9kZSA9IG5vZGU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE1ldGhvZFN5bWJvbCB7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblx0cmVhZG9ubHkgbm9kZTogQVNUTWV0aG9kTm9kZTtcblx0cmVhZG9ubHkgaXNTdGF0aWM6IGJvb2xlYW4gPSBmYWxzZTtcblx0cmVhZG9ubHkgaXNQcml2YXRlOiBib29sZWFuID0gZmFsc2U7XG5cdHJlYWRvbmx5IGlzUHVibGljOiBib29sZWFuID0gZmFsc2U7XG5cblx0dHlwZVBhcmFtZXRlclN5bWJvbHM6IFR5cGVQYXJhbWV0ZXJTeW1ib2xbXSA9IFtdO1xuXHRwYXJhbWV0ZXJTeW1ib2xzOiBQYXJhbWV0ZXJTeW1ib2xbXSA9IFtdO1xuXHRyZXR1cm5UeXBlOiBUeXBlID0gVHlwZXMuTUlYRUQ7XG5cblx0b3duZXI6IENsYXNzU3ltYm9sIHwgSW50ZXJmYWNlU3ltYm9sIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3Iobm9kZTogQVNUTWV0aG9kTm9kZSkge1xuXHRcdHRoaXMubmFtZSA9IG5vZGUubmFtZTtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHRcdHRoaXMuaXNTdGF0aWMgPSBub2RlLm1vZGlmaWVycy5zdGF0aWM7XG5cdFx0dGhpcy5pc1ByaXZhdGUgPSBub2RlLm1vZGlmaWVycy5wcml2YXRlO1xuXHRcdHRoaXMuaXNQdWJsaWMgPSBub2RlLm1vZGlmaWVycy5wdWJsaWM7XG5cdH1cblxuXHRnZXQgYm9keSgpOiBBU1ROb2RlW10ge1xuXHRcdHJldHVybiB0aGlzLm5vZGUuY2hpbGRyZW47XG5cdH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBPYmplY3RTeW1ib2wge1xuXHRuYW1lOiBzdHJpbmc7XG5cdHR5cGVQYXJhbWV0ZXJTeW1ib2xzOiBUeXBlUGFyYW1ldGVyU3ltYm9sW107XG5cdHN0YXRpY0ZpZWxkU3ltYm9sczogTWFwPHN0cmluZywgRmllbGRTeW1ib2w+O1xuXHRpbnN0YW5jZU1ldGhvZFN5bWJvbHM6IE1hcDxzdHJpbmcsIE1ldGhvZFN5bWJvbD47XG59XG5cbmV4cG9ydCBjbGFzcyBDbGFzc1N5bWJvbCBpbXBsZW1lbnRzIE9iamVjdFN5bWJvbCB7XG5cdHJlYWRvbmx5IG5vZGU6IEFTVENsYXNzTm9kZTtcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXHRyZWFkb25seSBzdXBlckNsYXNzOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuXHRzdXBlckNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCB8IG51bGwgPSBudWxsO1xuXHR0eXBlUGFyYW1ldGVyU3ltYm9sczogVHlwZVBhcmFtZXRlclN5bWJvbFtdID0gW107XG5cdGluc3RhbmNlRmllbGRTeW1ib2xzOiBNYXA8c3RyaW5nLCBGaWVsZFN5bWJvbD4gPSBuZXcgTWFwKCk7XG5cdHN0YXRpY0ZpZWxkU3ltYm9sczogTWFwPHN0cmluZywgRmllbGRTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRpbnN0YW5jZU1ldGhvZFN5bWJvbHM6IE1hcDxzdHJpbmcsIE1ldGhvZFN5bWJvbD4gPSBuZXcgTWFwKCk7XG5cdHN0YXRpY01ldGhvZFN5bWJvbHM6IE1hcDxzdHJpbmcsIE1ldGhvZFN5bWJvbD4gPSBuZXcgTWFwKCk7XG5cdGNvbnN0cnVjdG9yTWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wgfCBudWxsID0gbnVsbDtcblx0aW1wbGVtZW50c0ludGVyZmFjZXM6IEludGVyZmFjZVJlZlR5cGVbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKG5vZGU6IEFTVENsYXNzTm9kZSkge1xuXHRcdHRoaXMubm9kZSA9IG5vZGU7XG5cdFx0dGhpcy5uYW1lID0gbm9kZS5uYW1lO1xuXHRcdHRoaXMuc3VwZXJDbGFzcyA9IG5vZGUuc3VwZXJDbGFzcz8ubmFtZSA/PyBudWxsO1xuXHR9XG5cblx0cmVzb2x2ZUluc3RhbmNlRmllbGRTeW1ib2wobmFtZTogc3RyaW5nKTogRmllbGRTeW1ib2wgfCBudWxsIHtcblx0XHRpZiAodGhpcy5pbnN0YW5jZUZpZWxkU3ltYm9scy5oYXMobmFtZSkpIHtcblx0XHRcdHJldHVybiB0aGlzLmluc3RhbmNlRmllbGRTeW1ib2xzLmdldChuYW1lKSB8fCBudWxsO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnN1cGVyQ2xhc3MpIHtcblx0XHRcdHJldHVybiB0aGlzLnN1cGVyQ2xhc3NTeW1ib2w/LnJlc29sdmVJbnN0YW5jZUZpZWxkU3ltYm9sKG5hbWUpIHx8IG51bGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXNvbHZlU3RhdGljRmllbGRTeW1ib2wobmFtZTogc3RyaW5nKTogRmllbGRTeW1ib2wgfCBudWxsIHtcblx0XHRpZiAodGhpcy5zdGF0aWNGaWVsZFN5bWJvbHMuaGFzKG5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdGF0aWNGaWVsZFN5bWJvbHMuZ2V0KG5hbWUpIHx8IG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc3VwZXJDbGFzcykge1xuXHRcdFx0cmV0dXJuIHRoaXMuc3VwZXJDbGFzc1N5bWJvbD8ucmVzb2x2ZVN0YXRpY0ZpZWxkU3ltYm9sKG5hbWUpIHx8IG51bGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEludGVyZmFjZVN5bWJvbCBpbXBsZW1lbnRzIE9iamVjdFN5bWJvbCB7XG5cdHJlYWRvbmx5IG5vZGU6IEFTVEludGVyZmFjZU5vZGU7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblxuXHR0eXBlUGFyYW1ldGVyU3ltYm9sczogVHlwZVBhcmFtZXRlclN5bWJvbFtdID0gW107XG5cdHN0YXRpY0ZpZWxkU3ltYm9sczogTWFwPHN0cmluZywgRmllbGRTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRpbnN0YW5jZU1ldGhvZFN5bWJvbHM6IE1hcDxzdHJpbmcsIE1ldGhvZFN5bWJvbD4gPSBuZXcgTWFwKCk7XG5cdGV4dGVuZHNJbnRlcmZhY2VzOiBJbnRlcmZhY2VTeW1ib2xbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKG5vZGU6IEFTVEludGVyZmFjZU5vZGUpIHtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHRcdHRoaXMubmFtZSA9IG5vZGUubmFtZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xhc3NSZWZUeXBlIGV4dGVuZHMgVHlwZSB7XG5cdHJlYWRvbmx5IGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbDtcblx0cmVhZG9ubHkgdHlwZUFyZ3VtZW50czogVHlwZVtdO1xuXG5cdGNvbnN0cnVjdG9yKGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCwgdHlwZUFyZ3VtZW50czogVHlwZVtdID0gW10pIHtcblx0XHRzdXBlcihDbGFzc1JlZlR5cGUuZm9ybWF0U3ltYm9sTmFtZShjbGFzc1N5bWJvbC5uYW1lLCB0eXBlQXJndW1lbnRzKSk7XG5cdFx0dGhpcy5jbGFzc1N5bWJvbCA9IGNsYXNzU3ltYm9sO1xuXHRcdHRoaXMudHlwZUFyZ3VtZW50cyA9IHR5cGVBcmd1bWVudHM7XG5cdH1cblxuXHRzdGF0aWMgZm9ybWF0U3ltYm9sTmFtZShuYW1lOiBzdHJpbmcsIHR5cGVBcmd1bWVudHM6IFR5cGVbXSkge1xuXHRcdGlmICh0eXBlQXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIGBjbGFzc1JlZlR5cGUoJHtuYW1lfSlgO1xuXHRcdH1cblxuXHRcdHJldHVybiBgY2xhc3NSZWZUeXBlKCR7bmFtZX08JHt0eXBlQXJndW1lbnRzLm1hcCh0eXBlID0+IHR5cGUudG9TdHJpbmcoKSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKCcsICcpfT4pYDtcblx0fVxuXG5cdG92ZXJyaWRlIGVxdWFscyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAob3RoZXIgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGVcblx0XHRcdCYmIG90aGVyLmNsYXNzU3ltYm9sID09PSB0aGlzLmNsYXNzU3ltYm9sKTtcblx0fVxuXG5cdG92ZXJyaWRlIGFjY2VwdHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRpZiAoIXRoaXMuZXF1YWxzKG90aGVyKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmIChvdGhlciBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSkge1xuXHRcdFx0aWYgKHRoaXMudHlwZUFyZ3VtZW50cy5sZW5ndGggIT09IG90aGVyLnR5cGVBcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnR5cGVBcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3Qgb3RoZXJUeXBlID0gb3RoZXIudHlwZUFyZ3VtZW50c1tpXTtcblxuXHRcdFx0XHRpZiAoIW90aGVyVHlwZSB8fCAhdGhpcy50eXBlQXJndW1lbnRzW2ldPy5hY2NlcHRzKG90aGVyVHlwZSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2VSZWZUeXBlIGV4dGVuZHMgVHlwZSB7XG5cdHJlYWRvbmx5IGludGVyZmFjZVN5bWJvbDogSW50ZXJmYWNlU3ltYm9sO1xuXHRyZWFkb25seSB0eXBlQXJndW1lbnRzOiBUeXBlW107XG5cblx0Y29uc3RydWN0b3IoaW50ZXJmYWNlU3ltYm9sOiBJbnRlcmZhY2VTeW1ib2wsIHR5cGVBcmd1bWVudHM6IFR5cGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoSW50ZXJmYWNlUmVmVHlwZS5mb3JtYXRTeW1ib2xOYW1lKGludGVyZmFjZVN5bWJvbC5uYW1lLCB0eXBlQXJndW1lbnRzKSk7XG5cdFx0dGhpcy5pbnRlcmZhY2VTeW1ib2wgPSBpbnRlcmZhY2VTeW1ib2w7XG5cdFx0dGhpcy50eXBlQXJndW1lbnRzID0gdHlwZUFyZ3VtZW50cztcblx0fVxuXG5cdHN0YXRpYyBmb3JtYXRTeW1ib2xOYW1lKG5hbWU6IHN0cmluZywgdHlwZUFyZ3VtZW50czogVHlwZVtdKTogc3RyaW5nIHtcblx0XHRpZiAodHlwZUFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBgaW50ZXJmYWNlUmVmVHlwZSgke25hbWV9KWA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGBpbnRlcmZhY2VSZWZUeXBlKCR7bmFtZX08JHt0eXBlQXJndW1lbnRzLm1hcCh0eXBlID0+IHR5cGUudG9TdHJpbmcoKSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbignLCAnKX0+KWA7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gKG90aGVyIGluc3RhbmNlb2YgSW50ZXJmYWNlUmVmVHlwZVxuXHRcdFx0JiYgb3RoZXIuaW50ZXJmYWNlU3ltYm9sID09PSB0aGlzLmludGVyZmFjZVN5bWJvbCk7XG5cdH1cblxuXHRvdmVycmlkZSBhY2NlcHRzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0aWYgKCF0aGlzLmVxdWFscyhvdGhlcikpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAob3RoZXIgaW5zdGFuY2VvZiBJbnRlcmZhY2VSZWZUeXBlKSB7XG5cdFx0XHRpZiAodGhpcy50eXBlQXJndW1lbnRzLmxlbmd0aCAhPT0gb3RoZXIudHlwZUFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHlwZUFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBvdGhlclR5cGUgPSBvdGhlci50eXBlQXJndW1lbnRzW2ldO1xuXG5cdFx0XHRcdGlmICghb3RoZXJUeXBlIHx8ICF0aGlzLnR5cGVBcmd1bWVudHNbaV0/LmFjY2VwdHMob3RoZXJUeXBlKSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIExhbWJkYVR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0cmVhZG9ubHkgcGFyYW1ldGVyU3ltYm9sczogUGFyYW1ldGVyU3ltYm9sW10gPSBbXTtcblx0cmVhZG9ubHkgcmV0dXJuVHlwZTogVHlwZTtcblxuXHRjb25zdHJ1Y3RvcihwYXJhbWV0ZXJzOiBQYXJhbWV0ZXJTeW1ib2xbXSwgcmV0dXJuVHlwZTogVHlwZSkge1xuXHRcdHN1cGVyKExhbWJkYVR5cGUuY3JlYXRlU2lnbmF0dXJlKHBhcmFtZXRlcnMsIHJldHVyblR5cGUpKTtcblx0XHR0aGlzLnBhcmFtZXRlclN5bWJvbHMgPSBwYXJhbWV0ZXJzO1xuXHRcdHRoaXMucmV0dXJuVHlwZSA9IHJldHVyblR5cGU7XG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlU2lnbmF0dXJlKHBhcmFtZXRlcnM6IFBhcmFtZXRlclN5bWJvbFtdLCByZXR1cm5UeXBlOiBUeXBlKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gYGxhbWJkYSgke3BhcmFtZXRlcnMubWFwKHBhcmFtZXRlciA9PiBwYXJhbWV0ZXIucGFyYW1ldGVyVHlwZS50b1N0cmluZygpKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKCcsICcpfSkgLT4gJHtyZXR1cm5UeXBlLnRvU3RyaW5nKCl9KWA7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRpZiAoIShvdGhlciBpbnN0YW5jZW9mIExhbWJkYVR5cGUpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucGFyYW1ldGVyU3ltYm9scy5sZW5ndGggIT09IG90aGVyLnBhcmFtZXRlclN5bWJvbHMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcmFtZXRlclN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IG90aGVyVHlwZSA9IG90aGVyLnBhcmFtZXRlclN5bWJvbHNbaV0/LnBhcmFtZXRlclR5cGU7XG5cblx0XHRcdGlmICghb3RoZXJUeXBlIHx8ICF0aGlzLnBhcmFtZXRlclN5bWJvbHNbaV0/LnBhcmFtZXRlclR5cGUuYWNjZXB0cyhvdGhlclR5cGUpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXR1cm5UeXBlLmFjY2VwdHMob3RoZXIucmV0dXJuVHlwZSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGVTY29wZSB7XG5cdHJlYWRvbmx5IHBhcmVudDogVHlwZVNjb3BlIHwgbnVsbDtcblx0cmVhZG9ubHkgdHlwZXM6IE1hcDxzdHJpbmcsIFR5cGU+ID0gbmV3IE1hcCgpO1xuXHRyZWFkb25seSB0eXBlQmluZGluZ3M6IE1hcDxzdHJpbmcsIFR5cGU+ID0gbmV3IE1hcCgpO1xuXG5cdGN1cnJlbnRPYmplY3RTeW1ib2w6IENsYXNzU3ltYm9sIHwgSW50ZXJmYWNlU3ltYm9sIHwgbnVsbDtcblx0Y3VycmVudE1ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IocGFyZW50OiBUeXBlU2NvcGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xuXHRcdHRoaXMuY3VycmVudE9iamVjdFN5bWJvbCA9IHBhcmVudD8uY3VycmVudE9iamVjdFN5bWJvbCA/PyBudWxsO1xuXHRcdHRoaXMuY3VycmVudE1ldGhvZFN5bWJvbCA9IHBhcmVudD8uY3VycmVudE1ldGhvZFN5bWJvbCA/PyBudWxsO1xuXHR9XG5cblx0ZGVmaW5lVHlwZShuYW1lOiBzdHJpbmcsIHR5cGU6IFR5cGUpOiB2b2lkIHtcblx0XHR0aGlzLnR5cGVzLnNldChuYW1lLCB0eXBlKTtcblx0fVxuXG5cdGRlZmluZVR5cGVCaW5kaW5nKG5hbWU6IHN0cmluZywgdHlwZVZhcmlhYmxlOiBUeXBlVmFyaWFibGUpOiB2b2lkIHtcblx0XHR0aGlzLnR5cGVCaW5kaW5ncy5zZXQobmFtZSwgdHlwZVZhcmlhYmxlKTtcblx0fVxuXG5cdGhhc1R5cGUobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudHlwZXMuaGFzKG5hbWUpIHx8IHRoaXMucGFyZW50Py5oYXNUeXBlKG5hbWUpIHx8IGZhbHNlO1xuXHR9XG5cblx0aGFzVHlwZUJpbmRpbmcobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudHlwZUJpbmRpbmdzLmhhcyhuYW1lKSB8fCB0aGlzLnBhcmVudD8uaGFzVHlwZUJpbmRpbmcobmFtZSkgfHwgZmFsc2U7XG5cdH1cblxuXHRnZXRUeXBlKG5hbWU6IHN0cmluZyk6IFR5cGUge1xuXHRcdGlmICh0aGlzLnR5cGVzLmhhcyhuYW1lKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMudHlwZXMuZ2V0KG5hbWUpIHx8IFR5cGVzLk5VTEw7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnBhcmVudD8uZ2V0VHlwZShuYW1lKSB8fCBUeXBlcy5OVUxMO1xuXHR9XG5cblx0Z2V0VHlwZUJpbmRpbmcobmFtZTogc3RyaW5nKTogVHlwZSB7XG5cdFx0aWYgKHRoaXMudHlwZUJpbmRpbmdzLmhhcyhuYW1lKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMudHlwZUJpbmRpbmdzLmdldChuYW1lKSB8fCBUeXBlcy5OVUxMO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5wYXJlbnQ/LmdldFR5cGVCaW5kaW5nKG5hbWUpIHx8IFR5cGVzLk5VTEw7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBUeXBlKHR5cGVOb2RlOiBBU1RUeXBlTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBzY29wZTogVHlwZVNjb3BlIHwgbnVsbCA9IG51bGwpOiBUeXBlIHtcblx0bGV0IGJhc2VUeXBlID0gcmVzb2x2ZUJhc2VUeXBlKHR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeSwgc2NvcGUpO1xuXHRpZiAoYmFzZVR5cGUpIHtcblx0XHRpZiAoIShiYXNlVHlwZSBpbnN0YW5jZW9mIE51bGxhYmxlVHlwZSkgJiYgdHlwZU5vZGUubnVsbGFibGUpIHtcblx0XHRcdHJldHVybiBuZXcgTnVsbGFibGVUeXBlKGJhc2VUeXBlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYmFzZVR5cGU7XG5cdH1cblxuXHR0aHJvd1R5cGVFcnJvcihgQ291bGQgbm90IHJlc29sdmUgdHlwZSAke3R5cGVOb2RlLm5hbWV9LmAsIHR5cGVOb2RlLnNwYW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUJhc2VUeXBlKHR5cGVOb2RlOiBBU1RUeXBlTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBzY29wZTogVHlwZVNjb3BlIHwgbnVsbCA9IG51bGwpOiBUeXBlIHtcblx0c3dpdGNoICh0eXBlTm9kZS5raW5kKSB7XG5cdFx0Y2FzZSBBU1RUeXBlTm9kZS5LSU5EX1NJTVBMRToge1xuXHRcdFx0aWYgKHNjb3BlICYmIHNjb3BlLmhhc1R5cGVCaW5kaW5nKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiBzY29wZS5nZXRUeXBlQmluZGluZyh0eXBlTm9kZS5uYW1lKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmhhc1N5bWJvbCh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzb2x2ZVJlZlR5cGUodHlwZU5vZGUsIG9iamVjdFJlZ2lzdHJ5KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKFByaW1pdGl2ZVR5cGVzLmhhc1R5cGUodHlwZU5vZGUubmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIHJlc29sdmVQcmltaXRpdmVUeXBlKHR5cGVOb2RlKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG5ldyBUeXBlVmFyaWFibGUodHlwZU5vZGUubmFtZSk7XG5cdFx0fVxuXHRcdGNhc2UgQVNUVHlwZU5vZGUuS0lORF9HRU5FUklDOiB7XG5cdFx0XHRpZiAoIW9iamVjdFJlZ2lzdHJ5LnR5cGVzLmhhc1N5bWJvbCh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdFx0XHR0aHJvd1R5cGVFcnJvcihgU3ltYm9sICR7dHlwZU5vZGUubmFtZX0gaXMgbm90IGEgY2xhc3MgcmVmZXJlbmNlLmAsIHR5cGVOb2RlLnNwYW4pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc29sdmVHZW5lcmljUmVmVHlwZSh0eXBlTm9kZSwgb2JqZWN0UmVnaXN0cnkpO1xuXHRcdH1cblx0XHRjYXNlIEFTVFR5cGVOb2RlLktJTkRfTEFNQkRBOiB7XG5cdFx0XHRyZXR1cm4gcmVzb2x2ZUxhbWJkYVR5cGUodHlwZU5vZGUsIG9iamVjdFJlZ2lzdHJ5KTtcblx0XHR9XG5cdFx0ZGVmYXVsdDoge1xuXHRcdFx0dGhyb3dUeXBlRXJyb3IoXG5cdFx0XHRcdGBJbnZhbGlkIHR5cGUgYW5ub3RhdGlvbiwga2luZCAke3R5cGVOb2RlLmtpbmR9LmAsXG5cdFx0XHRcdHR5cGVOb2RlLnNwYW5cblx0XHRcdCk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlUmVmVHlwZSh0eXBlTm9kZTogQVNUVHlwZU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IENsYXNzUmVmVHlwZSB8IEludGVyZmFjZVJlZlR5cGUgfCBUeXBlIHtcblx0aWYgKHR5cGVOb2RlLnR5cGVBcmd1bWVudHMubGVuZ3RoID4gMCkge1xuXHRcdHRocm93VHlwZUVycm9yKGBHZW5lcmljIGNsYXNzICR7dHlwZU5vZGUubmFtZX0gY2Fubm90IGhhdmUgdHlwZSBhcmd1bWVudHMuYCwgdHlwZU5vZGUuc3Bhbik7XG5cdH1cblxuXHRpZiAob2JqZWN0UmVnaXN0cnkudHlwZXMuY2xhc3NTeW1ib2xzLmhhcyh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdHJldHVybiBuZXcgQ2xhc3NSZWZUeXBlKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKHR5cGVOb2RlLm5hbWUpKTtcblx0fVxuXG5cdGlmIChvYmplY3RSZWdpc3RyeS50eXBlcy5pbnRlcmZhY2VTeW1ib2xzLmhhcyh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdHJldHVybiBuZXcgSW50ZXJmYWNlUmVmVHlwZShvYmplY3RSZWdpc3RyeS50eXBlcy5nZXRJbnRlcmFjZVN5bWJvbCh0eXBlTm9kZS5uYW1lKSk7XG5cdH1cblxuXHR0aHJvd1R5cGVFcnJvcihgVW5rbm93biBjbGFzcyBvciBpbnRlcmZhY2UgJHt0eXBlTm9kZS5uYW1lfS5gLCB0eXBlTm9kZS5zcGFuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVHZW5lcmljUmVmVHlwZSh0eXBlTm9kZTogQVNUVHlwZU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IENsYXNzUmVmVHlwZSB8IEludGVyZmFjZVJlZlR5cGUgfCBUeXBlIHtcblx0aWYgKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmNsYXNzU3ltYm9scy5oYXModHlwZU5vZGUubmFtZSkpIHtcblx0XHRyZXR1cm4gbmV3IENsYXNzUmVmVHlwZShcblx0XHRcdG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKHR5cGVOb2RlLm5hbWUpLFxuXHRcdFx0dHlwZU5vZGUudHlwZUFyZ3VtZW50cy5tYXAodHlwZUFyZ3VtZW50ID0+IHJlc29sdmVCYXNlVHlwZSh0eXBlQXJndW1lbnQsIG9iamVjdFJlZ2lzdHJ5KSlcblx0XHQpO1xuXHR9XG5cblx0aWYgKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmludGVyZmFjZVN5bWJvbHMuaGFzKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0cmV0dXJuIG5ldyBJbnRlcmZhY2VSZWZUeXBlKFxuXHRcdFx0b2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0SW50ZXJhY2VTeW1ib2wodHlwZU5vZGUubmFtZSksXG5cdFx0XHR0eXBlTm9kZS50eXBlQXJndW1lbnRzLm1hcCh0eXBlQXJndW1lbnQgPT4gcmVzb2x2ZUJhc2VUeXBlKHR5cGVBcmd1bWVudCwgb2JqZWN0UmVnaXN0cnkpKVxuXHRcdCk7XG5cdH1cblxuXHR0aHJvd1R5cGVFcnJvcihgVW5rbm93biBjbGFzcyBvciBpbnRlcmZhY2UgJHt0eXBlTm9kZS5uYW1lfS5gLCB0eXBlTm9kZS5zcGFuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVQcmltaXRpdmVUeXBlKHR5cGVOb2RlOiBBU1RUeXBlTm9kZSk6IFR5cGUge1xuXHRyZXR1cm4gVHlwZXMuZ2V0VHlwZSh0eXBlTm9kZS5uYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVMYW1iZGFUeXBlKHR5cGVOb2RlOiBBU1RUeXBlTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBzY29wZTogVHlwZVNjb3BlIHwgbnVsbCA9IG51bGwpOiBMYW1iZGFUeXBlIHtcblx0Y29uc3QgcGFyYW1ldGVyU3ltYm9scyA9IHR5cGVOb2RlLnBhcmFtZXRlclR5cGVzLm1hcChcblx0XHR0eXBlQW5ub3RhdGlvbiA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IFBhcmFtZXRlclN5bWJvbChcblx0XHRcdFx0dHlwZUFubm90YXRpb24ubmFtZSxcblx0XHRcdFx0d3JhcFR5cGUodHlwZUFubm90YXRpb24sIG9iamVjdFJlZ2lzdHJ5LCBzY29wZSlcblx0XHRcdCk7XG5cdFx0fVxuXHQpO1xuXG5cdHJldHVybiBuZXcgTGFtYmRhVHlwZShcblx0XHRwYXJhbWV0ZXJTeW1ib2xzLFxuXHRcdHR5cGVOb2RlLnJldHVyblR5cGVcblx0XHRcdD8gd3JhcFR5cGUodHlwZU5vZGUucmV0dXJuVHlwZSwgb2JqZWN0UmVnaXN0cnksIHNjb3BlKVxuXHRcdFx0OiBUeXBlcy5NSVhFRFxuXHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RpdHV0ZVR5cGUodHlwZTogVHlwZSwgc3Vic3RpdHV0aW9uTWFwOiBNYXA8c3RyaW5nLCBUeXBlPik6IFR5cGUge1xuXHRpZiAodHlwZSBpbnN0YW5jZW9mIFR5cGVWYXJpYWJsZSkge1xuXHRcdHJldHVybiBzdWJzdGl0dXRpb25NYXAuZ2V0KHR5cGUubmFtZSkgPz8gdHlwZTtcblx0fVxuXG5cdGlmICh0eXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0cmV0dXJuIG5ldyBDbGFzc1JlZlR5cGUoXG5cdFx0XHR0eXBlLmNsYXNzU3ltYm9sLFxuXHRcdFx0dHlwZS50eXBlQXJndW1lbnRzLm1hcCh0eXBlQXJndW1lbnQgPT4gc3Vic3RpdHV0ZVR5cGUodHlwZUFyZ3VtZW50LCBzdWJzdGl0dXRpb25NYXApKVxuXHRcdCk7XG5cdH1cblxuXHRpZiAodHlwZSBpbnN0YW5jZW9mIE51bGxhYmxlVHlwZSkge1xuXHRcdHJldHVybiBuZXcgTnVsbGFibGVUeXBlKHN1YnN0aXR1dGVUeXBlKHR5cGUuaW5uZXIsIHN1YnN0aXR1dGlvbk1hcCkpO1xuXHR9XG5cblx0cmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFR5cGVTdWJzdGl0dXRpb25NYXAodHlwZVBhcmFtZXRlcnM6IFR5cGVQYXJhbWV0ZXJTeW1ib2xbXSwgdHlwZUFyZ3VtZW50czogVHlwZVtdKTogTWFwPHN0cmluZywgVHlwZT4ge1xuXHRjb25zdCBzdWJzdGl0dXRpb25NYXAgPSBuZXcgTWFwKCk7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0eXBlUGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHR5cGVQYXJhbWV0ZXI6IFR5cGVQYXJhbWV0ZXJTeW1ib2wgfCBudWxsID0gdHlwZVBhcmFtZXRlcnNbaV0gfHwgbnVsbDtcblx0XHRjb25zdCB0eXBlQXJndW1lbnQ6IFR5cGUgfCBudWxsID0gdHlwZUFyZ3VtZW50c1tpXSB8fCBudWxsO1xuXG5cdFx0aWYgKHR5cGVQYXJhbWV0ZXIgJiYgdHlwZUFyZ3VtZW50KSB7XG5cdFx0XHRzdWJzdGl0dXRpb25NYXAuc2V0KHR5cGVQYXJhbWV0ZXIubmFtZSwgdHlwZUFyZ3VtZW50KTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3Vic3RpdHV0aW9uTWFwO1xufVxuIiwKICAgICJpbXBvcnQge0NsYXNzUmVmVHlwZSwgVHlwZSwgVHlwZXN9IGZyb20gXCIuL3R5cGVfb2JqZWN0c1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4vcnVudGltZV9yZWdpc3RyeVwiO1xuaW1wb3J0IHt0aHJvd1J1bnRpbWVFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuXG5leHBvcnQgY2xhc3MgQXV0b2JveGVkVHlwZXMge1xuXHRzdGF0aWMgTlVNQkVSOiBzdHJpbmcgPSAnTnVtYmVyJztcblx0c3RhdGljIFNUUklORzogc3RyaW5nID0gJ1N0cmluZyc7XG5cdHN0YXRpYyBCT09MRUFOOiBzdHJpbmcgPSAnQm9vbGVhbic7XG5cblx0c3RhdGljIENMQVNTTkFNRV9NQVA6IHsgW3M6IHN0cmluZ106IHN0cmluZzsgfSA9IHtcblx0XHRudW1iZXI6IEF1dG9ib3hlZFR5cGVzLk5VTUJFUixcblx0XHRzdHJpbmc6IEF1dG9ib3hlZFR5cGVzLlNUUklORyxcblx0XHRib29sZWFuOiBBdXRvYm94ZWRUeXBlcy5CT09MRUFOXG5cdH07XG5cblx0c3RhdGljIGdldENsYXNzTmFtZShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0Y29uc3QgY2xhc3NOYW1lID0gQXV0b2JveGVkVHlwZXMuQ0xBU1NOQU1FX01BUFtrZXldO1xuXHRcdGlmICghY2xhc3NOYW1lKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgTm8gY2xhc3MgZm91bmQgZm9yIHByaW1pdGl2ZSB0eXBlICR7a2V5fS5gKTtcblx0XHR9XG5cdFx0cmV0dXJuIGNsYXNzTmFtZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVHlwZV9hdXRvYm94aW5nIHtcblx0c3RhdGljIENMQVNTTkFNRV9NQVA6IE1hcDxUeXBlLCBzdHJpbmc+ID0gbmV3IE1hcChcblx0XHRbXG5cdFx0XHRbVHlwZXMuTlVNQkVSLCBBdXRvYm94ZWRUeXBlcy5OVU1CRVJdLFxuXHRcdFx0W1R5cGVzLlNUUklORywgQXV0b2JveGVkVHlwZXMuU1RSSU5HXSxcblx0XHRcdFtUeXBlcy5CT09MRUFOLCBBdXRvYm94ZWRUeXBlcy5CT09MRUFOXVxuXHRcdF1cblx0KTtcblxuXHRzdGF0aWMgYXV0b2JveElmTmVlZGVkKG9iamVjdFR5cGU6IFR5cGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IENsYXNzUmVmVHlwZSB8IFR5cGUge1xuXHRcdGNvbnN0IGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gVHlwZV9hdXRvYm94aW5nLkNMQVNTTkFNRV9NQVAuZ2V0KG9iamVjdFR5cGUpO1xuXHRcdGlmIChjbGFzc05hbWUpIHtcblx0XHRcdHJldHVybiBuZXcgQ2xhc3NSZWZUeXBlKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKGNsYXNzTmFtZSkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBvYmplY3RUeXBlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7XG5cdENsYXNzRGVmaW5pdGlvbixcblx0Q2xhc3NNZXRob2REZWZpbml0aW9uLFxuXHRFbnZpcm9ubWVudCxcblx0RXhlY3V0aW9uU3RvcCxcblx0SW5zdGFuY2UsXG5cdFJldHVyblZhbHVlXG59IGZyb20gXCIuLi9ydW50aW1lL29iamVjdHNcIjtcbmltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuLi9ydW50aW1lL3J1bnRpbWVfcmVnaXN0cnlcIjtcbmltcG9ydCB7XG5cdEFTVEFubm90YXRpb25Ob2RlLFxuXHRBU1RBcnJheU5vZGUsXG5cdEFTVEFzc2lnbm1lbnROb2RlLFxuXHRBU1RCaW5hcnlOb2RlLFxuXHRBU1RDYWxsTm9kZSxcblx0QVNUQ2xhc3NOb2RlLFxuXHRBU1RFeHByZXNzaW9uTm9kZSxcblx0QVNURm9yZWFjaE5vZGUsXG5cdEFTVElmTm9kZSxcblx0QVNUSW5kZXhOb2RlLFxuXHRBU1RMYW1iZGFOb2RlLFxuXHRBU1RNYXRjaENhc2VOb2RlLFxuXHRBU1RNYXRjaE5vZGUsXG5cdEFTVE1lbWJlck5vZGUsXG5cdEFTVE1ldGhvZE5vZGUsXG5cdEFTVE5ld05vZGUsXG5cdEFTVE5vZGUsXG5cdEFTVE5vZGVUeXBlLFxuXHRBU1RPcGVyYXRvck5vZGUsXG5cdEFTVFBhcmFtZXRlck5vZGUsXG5cdEFTVFJldHVybk5vZGUsXG5cdEFTVFR5cGVOb2RlLFxuXHRBU1RVbmFyeU5vZGUsXG5cdEFTVFZhcmlhYmxlTm9kZSxcblx0QVNUVkRvbUV4cHJlc3Npb25Ob2RlLFxuXHRBU1RWRG9tTm9kZSxcblx0QVNUVkRvbVRleHROb2RlXG59IGZyb20gXCIuLi9hc3RcIjtcbmltcG9ydCB7R1JBTU1BUiwgVFlQRV9FTlVNfSBmcm9tIFwiLi4vZ3JhbW1hclwiO1xuaW1wb3J0IHtOYXRpdmVDbGFzc2VzfSBmcm9tIFwiLi4vLi4vbGlicmFyeS9uYXRpdmVfY2xhc3Nlc1wiO1xuaW1wb3J0IHtOYXRpdmVGdW5jdGlvbnMsIE5hdGl2ZUZ1bmN0aW9uVHlwZVJlZ2lzdHJ5fSBmcm9tIFwiLi4vLi4vbGlicmFyeS9uYXRpdmVfZnVuY3Rpb25zXCI7XG5pbXBvcnQge1xuXHRjYXN0VmFsdWUsXG5cdGZyb21MeXJhVmFsdWUsXG5cdEx5cmFOYXRpdmVPYmplY3QsXG5cdHJldHVyblZhbHVlLFxuXHR3cmFwTmF0aXZlSW5zdGFuY2Vcbn0gZnJvbSBcIi4uL3J1bnRpbWUvcnVudGltZV9jb252ZXJzaW9uLnRzXCI7XG5pbXBvcnQge3Rocm93UnVudGltZUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQge0F1dG9ib3hlZFR5cGVzfSBmcm9tIFwiLi4vcnVudGltZS90eXBlX2F1dG9ib3hpbmcudHNcIjtcbmltcG9ydCB7THlyYUFycmF5fSBmcm9tIFwiLi4vLi4vbGlicmFyeS9jbGFzc2VzL2FycmF5XCI7XG5pbXBvcnQgdHlwZSB7VkNoaWxkfSBmcm9tIFwiLi4vcnVudGltZS9ydW50aW1lX3Zkb20udHNcIjtcbmltcG9ydCB0eXBlIHtFdmVudFBpcGVsaW5lfSBmcm9tIFwiLi4vZXZlbnQvcGlwZWxpbmVcIjtcblxuY29uc3QgbmF0aXZlQ2xhc3NlcyA9IG5ldyBOYXRpdmVDbGFzc2VzKCk7XG5jb25zdCBuYXRpdmVGdW5jdGlvbnMgPSBuZXcgTmF0aXZlRnVuY3Rpb25zKCk7XG5jb25zdCBnbG9iYWxGdW5jdGlvbnMgPSBuYXRpdmVGdW5jdGlvbnMuZ2V0R2xvYmFsRnVuY3Rpb25zKCk7XG5jb25zdCBnbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeTogTmF0aXZlRnVuY3Rpb25UeXBlUmVnaXN0cnkgPSBuYXRpdmVGdW5jdGlvbnMuZ2V0R2xvYmFsRnVuY3Rpb25UeXBlUmVnaXN0cnkoKTtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0RnVuY3Rpb25DYWxsIHtcblx0cHJpdmF0ZSByZWFkb25seSBub2RlOiBBU1ROb2RlO1xuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgZnVuY3Rpb25FbnY6IEVudmlyb25tZW50O1xuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5O1xuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZTtcblx0cHJvdGVjdGVkIHJlYWRvbmx5IHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRub2RlOiBBU1ROb2RlLFxuXHRcdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSxcblx0XHRmdW5jdGlvbkVudjogRW52aXJvbm1lbnQsXG5cdFx0ZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSxcblx0XHR0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGxcblx0KSB7XG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5ID0gb2JqZWN0UmVnaXN0cnk7XG5cdFx0dGhpcy5mdW5jdGlvbkVudiA9IGZ1bmN0aW9uRW52O1xuXHRcdHRoaXMuZXZlbnRQaXBlbGluZSA9IGV2ZW50UGlwZWxpbmU7XG5cdFx0dGhpcy50aGlzVmFsdWUgPSB0aGlzVmFsdWU7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0Q2FsbE5vZGUoKTogQVNUQ2FsbE5vZGUge1xuXHRcdGlmICghKHRoaXMubm9kZSBpbnN0YW5jZW9mIEFTVENhbGxOb2RlKSkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgbmF0aXZlIGZ1bmN0aW9uIGNhbGwgJHt0aGlzLm5vZGUudHlwZX0uYCwgdGhpcy5ub2RlLnNwYW4pO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5ub2RlO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldExhbWJkYU5vZGUoKTogQVNUTGFtYmRhTm9kZSB7XG5cdFx0aWYgKCEodGhpcy5ub2RlIGluc3RhbmNlb2YgQVNUTGFtYmRhTm9kZSkpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGxhbWJkYSBjYWxsICR7dGhpcy5ub2RlLnR5cGV9LmAsIHRoaXMubm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMubm9kZTtcblx0fVxuXG5cdGFic3RyYWN0IGV2YWxDYWxsKC4uLmFyZ3M6IGFueVtdKTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgTGFtYmRhRnVuY3Rpb25DYWxsIGV4dGVuZHMgQWJzdHJhY3RGdW5jdGlvbkNhbGwge1xuXHRldmFsQ2FsbCguLi5hcmdzOiBhbnlbXSk6IGFueSB7XG5cdFx0Y29uc3Qgbm9kZTogQVNUTGFtYmRhTm9kZSA9IHRoaXMuZ2V0TGFtYmRhTm9kZSgpO1xuXHRcdGNvbnN0IGNsb3N1cmVFbnY6IEVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KHRoaXMuZnVuY3Rpb25FbnYpO1xuXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG5vZGUucGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgcGFyYW1ldGVyOiBBU1RQYXJhbWV0ZXJOb2RlIHwgbnVsbCA9IG5vZGUucGFyYW1ldGVyc1tpXSB8fCBudWxsO1xuXHRcdFx0aWYgKCFwYXJhbWV0ZXIpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRjbG9zdXJlRW52LmRlZmluZShwYXJhbWV0ZXIubmFtZSwgYXJnc1tpXSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2YWxSZXR1cm4oXG5cdFx0XHRub2RlLmNoaWxkcmVuLFxuXHRcdFx0dGhpcy5vYmplY3RSZWdpc3RyeSxcblx0XHRcdGNsb3N1cmVFbnYsXG5cdFx0XHR0aGlzLmV2ZW50UGlwZWxpbmUsXG5cdFx0XHR0aGlzLnRoaXNWYWx1ZSxcblx0XHRcdG5vZGUucmV0dXJuVHlwZVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE5hdGl2ZUZ1bmN0aW9uQ2FsbCBleHRlbmRzIEFic3RyYWN0RnVuY3Rpb25DYWxsIHtcblx0ZXZhbENhbGwoLi4uYXJnczogYW55W10pOiBhbnkge1xuXHRcdGNvbnN0IGNhbGxOb2RlOiBBU1RDYWxsTm9kZSA9IHRoaXMuZ2V0Q2FsbE5vZGUoKTtcblxuXHRcdGxldCByZXN1bHQ6IGFueSA9IHRoaXMucmVzb2x2ZUNhbGwoKSguLi5hcmdzKTtcblx0XHRpZiAocmVzdWx0IGluc3RhbmNlb2YgTHlyYU5hdGl2ZU9iamVjdCkge1xuXHRcdFx0cmVzdWx0ID0gd3JhcE5hdGl2ZUluc3RhbmNlKHJlc3VsdCwgdGhpcy5vYmplY3RSZWdpc3RyeSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdCA9IHJldHVyblZhbHVlKHJlc3VsdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2YWxSZXR1cm4oXG5cdFx0XHRbcmVzdWx0XSxcblx0XHRcdHRoaXMub2JqZWN0UmVnaXN0cnksXG5cdFx0XHR0aGlzLmZ1bmN0aW9uRW52LFxuXHRcdFx0dGhpcy5ldmVudFBpcGVsaW5lLFxuXHRcdFx0dGhpcy50aGlzVmFsdWUsXG5cdFx0XHRnbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeS5nZXQoY2FsbE5vZGUuY2FsbGVlLm5hbWUpLnJldHVyblR5cGVcblx0XHQpO1xuXHR9XG5cblx0cmVzb2x2ZUNhbGwoKTogYW55IHtcblx0XHRjb25zdCBub2RlOiBBU1RDYWxsTm9kZSB8IG51bGwgPSB0aGlzLmdldENhbGxOb2RlKCk7XG5cblx0XHRpZiAobm9kZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoJ0ludmFsaWQgZnVuY3Rpb24gY2FsbC4nKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZhbEV4cHJlc3Npb24oXG5cdFx0XHRub2RlLmNhbGxlZSxcblx0XHRcdHRoaXMub2JqZWN0UmVnaXN0cnksXG5cdFx0XHR0aGlzLmZ1bmN0aW9uRW52LFxuXHRcdFx0dGhpcy5ldmVudFBpcGVsaW5lLFxuXHRcdFx0dGhpcy50aGlzVmFsdWVcblx0XHQpW25vZGUuY2FsbGVlLm5hbWVdO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck5hdGl2ZUNsYXNzZXMob2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQpOiB2b2lkIHtcblx0Zm9yIChjb25zdCBuYXRpdmVDbGFzcyBvZiBuYXRpdmVDbGFzc2VzLnJlZ2lzdHJ5LnZhbHVlcygpKSB7XG5cdFx0aWYgKG5hdGl2ZUNsYXNzLmlzQXV0b2xvYWRBYmxlKSB7XG5cdFx0XHRjb25zdCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uID0gbmF0aXZlQ2xhc3MuZ2V0Q2xhc3NEZWZpbml0aW9uKCk7XG5cdFx0XHRvYmplY3RSZWdpc3RyeS5jbGFzc2VzLnNldChuYXRpdmVDbGFzcy5uYW1lLCBjbGFzc0RlZik7XG5cdFx0XHRlbnZpcm9ubWVudC5kZWZpbmUobmF0aXZlQ2xhc3MubmFtZSwgY2xhc3NEZWYpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJOYXRpdmVGdW5jdGlvbnMoZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogdm9pZCB7XG5cdGZvciAoY29uc3QgbmFtZSBpbiBnbG9iYWxGdW5jdGlvbnMpIHtcblx0XHRjb25zdCBnbG9iYWxGdW5jdGlvbjogYW55ID0gZ2xvYmFsRnVuY3Rpb25zW25hbWVdO1xuXHRcdGlmICghZ2xvYmFsRnVuY3Rpb24pIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKCdHbG9iYWwgZnVuY3Rpb24gaXMgbnVsbC4nKTtcblx0XHR9XG5cdFx0ZW52aXJvbm1lbnQuZGVmaW5lKG5hbWUsIGdsb2JhbEZ1bmN0aW9ucyk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxOb2RlKFxuXHRub2RlOiBBU1ROb2RlLFxuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksXG5cdGVudmlyb25tZW50OiBFbnZpcm9ubWVudCxcblx0ZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSxcblx0dGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsXG4pOiBhbnkge1xuXHRpZiAobm9kZS5pc0V4cHJlc3Npb24pIHtcblx0XHRyZXR1cm4gbmV3IFJldHVyblZhbHVlKGV2YWxFeHByZXNzaW9uKG5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKSk7XG5cdH1cblxuXHRzd2l0Y2ggKG5vZGUudHlwZSkge1xuXHRcdGNhc2UgQVNUTm9kZVR5cGUuUFJPR1JBTToge1xuXHRcdFx0Zm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRcdGV2YWxOb2RlKGNoaWxkLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5JTVBPUlQ6XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5JTlRFUkZBQ0U6IHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkNMQVNTOiB7XG5cdFx0XHRyZXR1cm4gZXZhbENsYXNzKG5vZGUgYXMgQVNUQ2xhc3NOb2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLlZBUklBQkxFOiB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVFZhcmlhYmxlTm9kZSkge1xuXHRcdFx0XHRjb25zdCB2YWx1ZTogYW55ID0gbm9kZS5pbml0XG5cdFx0XHRcdFx0PyBldmFsRXhwcmVzc2lvbihub2RlLmluaXQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKVxuXHRcdFx0XHRcdDogbnVsbDtcblx0XHRcdFx0ZW52aXJvbm1lbnQuZGVmaW5lKG5vZGUubmFtZSwgdmFsdWUpO1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIHZhcmlhYmxlIG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuSUY6IHtcblx0XHRcdHJldHVybiBldmFsSWYobm9kZSBhcyBBU1RJZk5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5NQVRDSDoge1xuXHRcdFx0cmV0dXJuIGV2YWxNYXRjaChub2RlIGFzIEFTVE1hdGNoTm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkZPUkVBQ0g6IHtcblx0XHRcdHJldHVybiBldmFsRm9yZWFjaChub2RlIGFzIEFTVEZvcmVhY2hOb2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuVkRPTToge1xuXHRcdFx0cmV0dXJuIGV2YWxWRG9tTm9kZShub2RlIGFzIEFTVFZEb21Ob2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuRVhQUkVTU0lPTjoge1xuXHRcdFx0cmV0dXJuIGV2YWxFeHByZXNzaW9uKFxuXHRcdFx0XHQobm9kZSBhcyBBU1RFeHByZXNzaW9uTm9kZSkuZXhwcixcblx0XHRcdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0XHRcdGVudmlyb25tZW50LFxuXHRcdFx0XHRldmVudFBpcGVsaW5lLFxuXHRcdFx0XHR0aGlzVmFsdWVcblx0XHRcdCk7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuUkVUVVJOOiB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVFJldHVybk5vZGUpIHtcblx0XHRcdFx0Y29uc3QgdmFsdWU6IGFueSA9IG5vZGUuYXJndW1lbnRcblx0XHRcdFx0XHQ/IGV2YWxFeHByZXNzaW9uKG5vZGUuYXJndW1lbnQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKVxuXHRcdFx0XHRcdDogbnVsbDtcblx0XHRcdFx0cmV0dXJuIG5ldyBSZXR1cm5WYWx1ZSh2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCByZXR1cm4gbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0ZGVmYXVsdDoge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVuaGFuZGxlZCBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlLnNwYW4pO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0RW1wdHlJbnN0YW5jZShub2RlOiBBU1RDbGFzc05vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IEluc3RhbmNlIHtcblx0bGV0IGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb247XG5cblx0aWYgKG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuaGFzKG5vZGUubmFtZSkpIHtcblx0XHRjbGFzc0RlZiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KG5vZGUubmFtZSk7XG5cdH0gZWxzZSB7XG5cdFx0Y2xhc3NEZWYgPSBDbGFzc0RlZmluaXRpb24uZnJvbUFTVChub2RlKTtcblx0XHRvYmplY3RSZWdpc3RyeS5jbGFzc2VzLnNldChub2RlLm5hbWUsIGNsYXNzRGVmKTtcblx0fVxuXG5cdHJldHVybiBjbGFzc0RlZi5jb25zdHJ1Y3RFbXB0eUluc3RhbmNlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3ROYXRpdmVJbnN0YW5jZShleHByOiBBU1ROZXdOb2RlLCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IEluc3RhbmNlIHtcblx0cmV0dXJuIGNsYXNzRGVmLmNvbnN0cnVjdE5hdGl2ZUluc3RhbmNlQnlOZXdOb2RlKGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RJbnN0YW5jZShleHByOiBBU1ROZXdOb2RlLCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IEluc3RhbmNlIHtcblx0cmV0dXJuIGNsYXNzRGVmLmNvbnN0cnVjdEluc3RhbmNlQnlOZXdOb2RlKGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsQ2xhc3Mobm9kZTogQVNUQ2xhc3NOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IHZvaWQge1xuXHRjb25zdCBpbnN0YW5jZTogSW5zdGFuY2UgPSBjb25zdHJ1Y3RFbXB0eUluc3RhbmNlKG5vZGUsIG9iamVjdFJlZ2lzdHJ5KTtcblxuXHRpbnN0YW5jZS5pbml0aWFsaXplSW5zdGFuY2VGaWVsZHMob2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcblxuXHRlbnZpcm9ubWVudC5kZWZpbmUobm9kZS5uYW1lLCBpbnN0YW5jZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsTmV3KGV4cHI6IEFTVE5ld05vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogSW5zdGFuY2Uge1xuXHRpZiAoIW9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuaGFzKGV4cHIubmFtZSkpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5rbm93biBjbGFzcyAke2V4cHIubmFtZX0uYCwgZXhwci5zcGFuKTtcblx0fVxuXG5cdGNvbnN0IGNsYXNzRGVmID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQoZXhwci5uYW1lKTtcblx0aWYgKGNsYXNzRGVmLm5hdGl2ZUluc3RhbmNlKSB7XG5cdFx0cmV0dXJuIGNvbnN0cnVjdE5hdGl2ZUluc3RhbmNlKGV4cHIsIGNsYXNzRGVmLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXHR9XG5cblx0cmV0dXJuIGNvbnN0cnVjdEluc3RhbmNlKGV4cHIsIGNsYXNzRGVmLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEV4cHJlc3Npb24oZXhwcjogQVNUTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdHN3aXRjaCAoZXhwci50eXBlKSB7XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5TVFJJTkc6XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5OVU1CRVI6XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5CT09MRUFOOiB7XG5cdFx0XHRyZXR1cm4gZXhwci52YWx1ZTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5OVUxMOiB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5JREVOVElGSUVSOiB7XG5cdFx0XHRyZXR1cm4gZW52aXJvbm1lbnQuZ2V0KGV4cHIubmFtZSk7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuVEhJUzoge1xuXHRcdFx0aWYgKCF0aGlzVmFsdWUpIHtcblx0XHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYHRoaXMgdXNlZCBvdXRzaWRlIG9mIG1ldGhvZC5gLCBleHByLnNwYW4pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXNWYWx1ZTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5CSU5BUlk6IHtcblx0XHRcdHJldHVybiBldmFsQmluYXJ5KGV4cHIgYXMgQVNUQmluYXJ5Tm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLlVOQVJZOiB7XG5cdFx0XHRyZXR1cm4gZXZhbFVuYXJ5KGV4cHIgYXMgQVNUVW5hcnlOb2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuQVNTSUdOTUVOVDoge1xuXHRcdFx0cmV0dXJuIGV2YWxBc3NpZ24oZXhwciBhcyBBU1RBc3NpZ25tZW50Tm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLk1FTUJFUjoge1xuXHRcdFx0cmV0dXJuIGV2YWxNZW1iZXIoZXhwciBhcyBBU1RNZW1iZXJOb2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuQ0FMTDoge1xuXHRcdFx0cmV0dXJuIGV2YWxDYWxsKGV4cHIgYXMgQVNUQ2FsbE5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5WRE9NOiB7XG5cdFx0XHRyZXR1cm4gZXZhbFZEb21Ob2RlKGV4cHIgYXMgQVNUVkRvbU5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5ORVc6IHtcblx0XHRcdHJldHVybiBldmFsTmV3KGV4cHIgYXMgQVNUTmV3Tm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5BUlJBWToge1xuXHRcdFx0cmV0dXJuIGV2YWxBcnJheShleHByIGFzIEFTVEFycmF5Tm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLklOREVYOiB7XG5cdFx0XHRyZXR1cm4gZXZhbEluZGV4KGV4cHIgYXMgQVNUSW5kZXhOb2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuTEFNQkRBOiB7XG5cdFx0XHRyZXR1cm4gZXZhbExhbWJkYShleHByIGFzIEFTVExhbWJkYU5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHR9XG5cdFx0ZGVmYXVsdDoge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVuaGFuZGxlZCBleHByZXNzaW9uICR7ZXhwci50eXBlfS5gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEJpbmFyeShleHByOiBBU1RCaW5hcnlOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0Y29uc3QgbGVmdDogYW55ID0gY2FzdFZhbHVlKGV2YWxFeHByZXNzaW9uKGV4cHIubGVmdCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpKTtcblx0Y29uc3QgcmlnaHQ6IGFueSA9IGNhc3RWYWx1ZShldmFsRXhwcmVzc2lvbihleHByLnJpZ2h0LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSkpO1xuXG5cdGlmIChsZWZ0IGluc3RhbmNlb2YgSW5zdGFuY2UgJiYgcmlnaHQgaW5zdGFuY2VvZiBJbnN0YW5jZSkge1xuXG5cdFx0aWYgKGxlZnQuX19jbGFzc0RlZi5uYXRpdmVJbnN0YW5jZSAmJiByaWdodC5fX2NsYXNzRGVmLm5hdGl2ZUluc3RhbmNlKSB7XG5cblx0XHRcdGNvbnN0IG1ldGhvZE5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCA9IEFTVE9wZXJhdG9yTm9kZS5PVkVSTE9BREFCTEVfT1BFUkFUT1JfTUVUSE9EX01BUC5nZXQoZXhwci5vcGVyYXRvcik7XG5cdFx0XHRpZiAoIW1ldGhvZE5hbWUpIHtcblx0XHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVua25vd24gb3BlcmF0b3IgJHtleHByLm9wZXJhdG9yfWApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gY2FsbEluc3RhbmNlTWV0aG9kKFxuXHRcdFx0XHRsZWZ0LFxuXHRcdFx0XHRsZWZ0LmZpbmRlTWV0aG9kTm9kZShtZXRob2ROYW1lKSxcblx0XHRcdFx0W3JpZ2h0XSxcblx0XHRcdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0XHRcdGVudmlyb25tZW50LFxuXHRcdFx0XHRldmVudFBpcGVsaW5lXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjYWxsSW5zdGFuY2VNZXRob2QoXG5cdFx0XHRsZWZ0LFxuXHRcdFx0bGVmdC5maW5kZU1ldGhvZE5vZGUoZXhwci5vcGVyYXRvciksXG5cdFx0XHRbcmlnaHRdLFxuXHRcdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0XHRlbnZpcm9ubWVudCxcblx0XHRcdGV2ZW50UGlwZWxpbmVcblx0XHQpO1xuXHR9XG5cblx0c3dpdGNoIChleHByLm9wZXJhdG9yKSB7XG5cdFx0Y2FzZSBHUkFNTUFSLlBMVVM6IHtcblx0XHRcdHJldHVybiBsZWZ0ICsgcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5NSU5VUzoge1xuXHRcdFx0cmV0dXJuIGxlZnQgLSByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLk1VTFRJUExZOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCAqIHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuRElWSURFOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCAvIHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTU9EVUxVUzoge1xuXHRcdFx0cmV0dXJuIGxlZnQgJSByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkxFU1NfVEhBTjoge1xuXHRcdFx0cmV0dXJuIGxlZnQgPCByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkdSRUFURVJfVEhBTjoge1xuXHRcdFx0cmV0dXJuIGxlZnQgPiByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkxFU1NfRVFVQUw6IHtcblx0XHRcdHJldHVybiBsZWZ0IDw9IHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuR1JFQVRFUl9FUVVBTDoge1xuXHRcdFx0cmV0dXJuIGxlZnQgPj0gcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5FUVVBTDoge1xuXHRcdFx0cmV0dXJuIGxlZnQgPT09IHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTk9UX0VRVUFMOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCAhPT0gcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5BTkQ6IHtcblx0XHRcdHJldHVybiBsZWZ0ICYmIHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuT1I6IHtcblx0XHRcdHJldHVybiBsZWZ0IHx8IHJpZ2h0O1xuXHRcdH1cblx0XHRkZWZhdWx0OiB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5rbm93biBvcGVyYXRvciAke2V4cHIub3BlcmF0b3J9YCk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsQXJyYXkoZXhwcjogQVNUQXJyYXlOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogSW5zdGFuY2Uge1xuXHRjb25zdCB2YWx1ZXM6IGFueVtdID0gW107XG5cdGZvciAoY29uc3QgZWxlbSBvZiBleHByLmVsZW1lbnRzKSB7XG5cdFx0dmFsdWVzLnB1c2goZXZhbEV4cHJlc3Npb24oZWxlbSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpKTtcblx0fVxuXG5cdGNvbnN0IGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24gPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldCgnQXJyYXknKTtcblx0Y29uc3QgaW5zdGFuY2U6IEluc3RhbmNlID0gY2xhc3NEZWYuY29uc3RydWN0RW1wdHlJbnN0YW5jZSgpO1xuXHRpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlID0gbmV3IGNsYXNzRGVmLm5hdGl2ZUluc3RhbmNlKGZyb21MeXJhVmFsdWUodmFsdWVzKSk7XG5cblx0cmV0dXJuIGluc3RhbmNlO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsSW5kZXgoZXhwcjogQVNUSW5kZXhOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKSB7XG5cdGlmICghZXhwci5vYmplY3QpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW5kZXggYWNjZXNzIG9uIG51bGwuYCwgZXhwci5zcGFuKTtcblx0fVxuXG5cdGlmICghZXhwci5pbmRleCkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBBY2Nlc3Mgd2l0aCB1bnNwZWNpZmljIGluZGV4LmAsIGV4cHIuc3Bhbik7XG5cdH1cblxuXHRjb25zdCBvYmplY3Q6IGFueSA9IGV2YWxFeHByZXNzaW9uKGV4cHIub2JqZWN0LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdGNvbnN0IGluZGV4OiBhbnkgPSBldmFsRXhwcmVzc2lvbihleHByLmluZGV4LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cblx0aWYgKCEob2JqZWN0IGluc3RhbmNlb2YgTHlyYUFycmF5IHx8IG9iamVjdC5fX25hdGl2ZUluc3RhbmNlIGluc3RhbmNlb2YgTHlyYUFycmF5KSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKCdJbmRleCBhY2Nlc3Mgb24gbm9uLWFycmF5JywgZXhwci5zcGFuKTtcblx0fVxuXG5cdGNvbnN0IHRhcmdldDogYW55ID0gb2JqZWN0IGluc3RhbmNlb2YgTHlyYUFycmF5ID8gb2JqZWN0IDogb2JqZWN0Ll9fbmF0aXZlSW5zdGFuY2U7XG5cdGNvbnN0IHZhbHVlOiBhbnkgPSB0YXJnZXQudmFsdWVzW2luZGV4XTtcblxuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0cmV0dXJuIHdyYXBOYXRpdmVJbnN0YW5jZSh2YWx1ZSwgb2JqZWN0UmVnaXN0cnkpO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbExhbWJkYShub2RlOiBBU1RMYW1iZGFOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGxhbWJkYUVudjogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IExhbWJkYUZ1bmN0aW9uQ2FsbCB7XG5cdHJldHVybiBuZXcgTGFtYmRhRnVuY3Rpb25DYWxsKG5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBsYW1iZGFFbnYsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxBc3NpZ24oZXhwcjogQVNUQXNzaWdubWVudE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRjb25zdCB2YWx1ZTogYW55ID0gZXZhbEV4cHJlc3Npb24oZXhwci5yaWdodCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXG5cdGlmIChleHByLmxlZnQudHlwZSA9PT0gQVNUTm9kZVR5cGUuTUVNQkVSKSB7XG5cdFx0aWYgKGV4cHIubGVmdCBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpIHtcblx0XHRcdGNvbnN0IG9iamVjdDogSW5zdGFuY2UgPSBldmFsRXhwcmVzc2lvbihcblx0XHRcdFx0ZXhwci5sZWZ0Lm9iamVjdCxcblx0XHRcdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0XHRcdGVudmlyb25tZW50LFxuXHRcdFx0XHRldmVudFBpcGVsaW5lLFxuXHRcdFx0XHR0aGlzVmFsdWVcblx0XHRcdCkgYXMgSW5zdGFuY2U7XG5cblx0XHRcdGlmIChleHByLmxlZnQub2JqZWN0LnR5cGUgPT09IEFTVE5vZGVUeXBlLklERU5USUZJRVIpIHtcblx0XHRcdFx0b2JqZWN0Ll9fc3RhdGljRmllbGRzW2V4cHIubGVmdC5wcm9wZXJ0eV0gPSB2YWx1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9iamVjdC5fX2luc3RhbmNlRmllbGRzW2V4cHIubGVmdC5wcm9wZXJ0eV0gPSB2YWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0b2JqZWN0Lm1hcmtEaXJ0eShldmVudFBpcGVsaW5lKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgbWVtYmVyIGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0ZW52aXJvbm1lbnQuc2V0KGV4cHIubGVmdC5uYW1lLCB2YWx1ZSk7XG5cdH1cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbE1lbWJlcihleHByOiBBU1RNZW1iZXJOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0Y29uc3Qgb2JqZWN0OiBJbnN0YW5jZSB8IG51bGwgPSBldmFsRXhwcmVzc2lvbihleHByLm9iamVjdCxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RSZWdpc3RyeSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnZpcm9ubWVudCxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudFBpcGVsaW5lLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNWYWx1ZSkgYXMgSW5zdGFuY2U7XG5cblx0aWYgKCFvYmplY3QpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgTWVtYmVyIGFjY2VzcyBvbiBudWxsLmAsIGV4cHIuc3Bhbik7XG5cdH1cblxuXHRpZiAoZXhwci5wcm9wZXJ0eSBpbiBvYmplY3QuX19pbnN0YW5jZUZpZWxkcykge1xuXHRcdHJldHVybiBvYmplY3QuX19pbnN0YW5jZUZpZWxkc1tleHByLnByb3BlcnR5XTtcblx0fVxuXG5cdGlmIChleHByLnByb3BlcnR5IGluIG9iamVjdC5fX3N0YXRpY0ZpZWxkcykge1xuXHRcdHJldHVybiBvYmplY3QuX19zdGF0aWNGaWVsZHNbZXhwci5wcm9wZXJ0eV07XG5cdH1cblxuXHR0aHJvd1J1bnRpbWVFcnJvcihgUHJvcGVydHkgJyR7ZXhwci5wcm9wZXJ0eX0nIG5vdCBmb3VuZGAsIGV4cHIuc3Bhbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsQ2FsbChleHByOiBBU1RDYWxsTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdC8vIHN1cGVyIGNhbGwgaW5zaWRlIGNvbnN0cnVjdG9yXG5cdGlmIChleHByLmNhbGxlZS50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSICYmIGV4cHIuY2FsbGVlLm5hbWUgPT09IEdSQU1NQVIuU1VQRVIpIHtcblx0XHRpZiAoIXRoaXNWYWx1ZSB8fCAhdGhpc1ZhbHVlLl9fY2xhc3NEZWY/LnN1cGVyQ2xhc3MpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKCdzdXBlcigpIHVzZWQgb3V0c2lkZSBvZiBzdWJjbGFzcyBjb25zdHJ1Y3RvcicpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHN1cGVyQ2xhc3NEZWYgPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldCh0aGlzVmFsdWUuX19jbGFzc0RlZi5zdXBlckNsYXNzKTtcblx0XHRjb25zdCBjb25zdHJ1Y3Rvck1ldGhvZCA9IHN1cGVyQ2xhc3NEZWYuY29uc3RydWN0b3JNZXRob2Q7XG5cblx0XHRpZiAoIWNvbnN0cnVjdG9yTWV0aG9kKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRjb25zdCBjb25zdHJ1Y3RvckVudiA9IG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCk7XG5cdFx0Y29uc3RydWN0b3JFbnYuZGVmaW5lKEdSQU1NQVIuVEhJUywgdGhpc1ZhbHVlKTtcblxuXHRcdGJpbmRNZXRob2RQYXJhbWV0ZXJzKFxuXHRcdFx0ZXhwcixcblx0XHRcdGNvbnN0cnVjdG9yTWV0aG9kLnBhcmFtZXRlcnMsXG5cdFx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRcdGNvbnN0cnVjdG9yRW52LFxuXHRcdFx0ZW52aXJvbm1lbnQsXG5cdFx0XHRldmVudFBpcGVsaW5lLFxuXHRcdFx0dGhpc1ZhbHVlXG5cdFx0KTtcblxuXHRcdGZvciAoY29uc3QgY2hpbGQgb2YgY29uc3RydWN0b3JNZXRob2QuY2hpbGRyZW4pIHtcblx0XHRcdGV2YWxOb2RlKGNoaWxkLCBvYmplY3RSZWdpc3RyeSwgY29uc3RydWN0b3JFbnYsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRpZiAoZXhwci5jYWxsZWUudHlwZSA9PT0gQVNUTm9kZVR5cGUuTUVNQkVSKSB7XG5cdFx0aWYgKGV4cHIuY2FsbGVlIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkge1xuXHRcdFx0aWYgKGV4cHIuY2FsbGVlLm9iamVjdC50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0XHRcdGNvbnN0IGNsYXNzTmFtZTogc3RyaW5nID0gZXhwci5jYWxsZWUub2JqZWN0Lm5hbWU7XG5cblx0XHRcdFx0aWYgKG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuaGFzKGNsYXNzTmFtZSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZXZhbFN0YXRpY0NhbGwoZXhwciwgY2xhc3NOYW1lLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBldmFsSW5zdGFuY2VDYWxsKGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBldmFsRnVuY3Rpb25DYWxsKGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxGdW5jdGlvbkNhbGwoZXhwcjogQVNUQ2FsbE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpIHtcblx0Y29uc3QgZnVuY3Rpb25DYWxsOiBhbnkgPSBldmFsRXhwcmVzc2lvbihleHByLmNhbGxlZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRjb25zdCBhcmdzOiBhbnlbXSA9IGV2YWxDYWxsQXJndW1lbnRzKGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblxuXHRpZiAoZnVuY3Rpb25DYWxsIGluc3RhbmNlb2YgTGFtYmRhRnVuY3Rpb25DYWxsKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uQ2FsbC5ldmFsQ2FsbCguLi5hcmdzKTtcblx0fVxuXG5cdHJldHVybiAobmV3IE5hdGl2ZUZ1bmN0aW9uQ2FsbChleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSkpLmV2YWxDYWxsKC4uLmFyZ3MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbFN0YXRpY0NhbGwoZXhwcjogQVNUQ2FsbE5vZGUsIGNsYXNzTmFtZTogc3RyaW5nLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0aWYgKCEoZXhwci5jYWxsZWUgaW5zdGFuY2VvZiBBU1RNZW1iZXJOb2RlKSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIG1lbWJlciBleHByZXNzaW9uICR7ZXhwci50eXBlfWAsIGV4cHIuc3Bhbik7XG5cdH1cblxuXHRjb25zdCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQoY2xhc3NOYW1lKTtcblx0Y29uc3QgbWV0aG9kRGVmOiBDbGFzc01ldGhvZERlZmluaXRpb24gfCB1bmRlZmluZWQgPSBjbGFzc0RlZi5zdGF0aWNNZXRob2RzW2V4cHIuY2FsbGVlLnByb3BlcnR5XTtcblxuXHRpZiAoIW1ldGhvZERlZikge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBTdGF0aWMgbWV0aG9kICR7Y2xhc3NOYW1lfS4ke2V4cHIuY2FsbGVlLnByb3BlcnR5fSBub3QgZm91bmRgLCBleHByLmNhbGxlZS5zcGFuKTtcblx0fVxuXG5cdGlmIChjbGFzc0RlZi5uYXRpdmVJbnN0YW5jZSAmJiBjbGFzc0RlZi5uYXRpdmVJbnN0YW5jZVttZXRob2REZWYubmFtZV0pIHtcblx0XHRjb25zdCBhcmdzOiBhbnlbXSA9IGV2YWxNZXRob2RBcmd1bWVudHMoXG5cdFx0XHRleHByLFxuXHRcdFx0bWV0aG9kRGVmLnBhcmFtZXRlcnMsXG5cdFx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRcdGVudmlyb25tZW50LFxuXHRcdFx0ZXZlbnRQaXBlbGluZSxcblx0XHRcdHRoaXNWYWx1ZVxuXHRcdCk7XG5cdFx0Y29uc3QgcmF3QXJnczogYW55W10gPSBhcmdzLm1hcChmcm9tTHlyYVZhbHVlKTtcblx0XHRjb25zdCByZXN1bHQ6IGFueSA9IGNsYXNzRGVmLm5hdGl2ZUluc3RhbmNlW21ldGhvZERlZi5uYW1lXSguLi5yYXdBcmdzKTtcblxuXHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRyZXR1cm4gd3JhcE5hdGl2ZUluc3RhbmNlKHJlc3VsdCwgb2JqZWN0UmVnaXN0cnkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmFsUmV0dXJuKFxuXHRcdFx0W3JldHVyblZhbHVlKHJlc3VsdCldLFxuXHRcdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0XHRuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpLFxuXHRcdFx0ZXZlbnRQaXBlbGluZSxcblx0XHRcdHRoaXNWYWx1ZSxcblx0XHRcdG1ldGhvZERlZi5yZXR1cm5UeXBlXG5cdFx0KTtcblx0fVxuXG5cdGNvbnN0IG1ldGhvZEVudiA9IG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCk7XG5cblx0YmluZE1ldGhvZFBhcmFtZXRlcnMoZXhwciwgbWV0aG9kRGVmLnBhcmFtZXRlcnMsIG9iamVjdFJlZ2lzdHJ5LCBtZXRob2RFbnYsIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXG5cdHJldHVybiBldmFsUmV0dXJuKG1ldGhvZERlZi5jaGlsZHJlbiwgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlLCBtZXRob2REZWYucmV0dXJuVHlwZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsSW5zdGFuY2VDYWxsKGV4cHI6IEFTVENhbGxOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKSB7XG5cdGlmICghKGV4cHIuY2FsbGVlIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBtZW1iZXIgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHR9XG5cblx0Ly8gT2JqZWt0IGF1c3dlcnRlbiAodSB8IHRoaXMgfCBzdXBlcilcblx0bGV0IHRhcmdldDogYW55ID0gZXZhbEV4cHJlc3Npb24oZXhwci5jYWxsZWUub2JqZWN0LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cblx0dGFyZ2V0ID0gYXV0b0JveElmTmVlZGVkKHRhcmdldCwgb2JqZWN0UmVnaXN0cnkpO1xuXG5cdGlmICghdGFyZ2V0IHx8ICF0YXJnZXQuX19jbGFzc0RlZikge1xuXHRcdHRocm93UnVudGltZUVycm9yKCdJbnN0YW5jZSBjYWxsIG9uIG5vbi1vYmplY3QnLCBleHByLmNhbGxlZS5zcGFuKTtcblx0fVxuXG5cdGxldCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uID0gdGFyZ2V0Ll9fY2xhc3NEZWY7XG5cblx0Ly8gc3VwZXIubWV0aG9kKClcblx0aWYgKGV4cHIuY2FsbGVlLm9iamVjdC50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSICYmIGV4cHIuY2FsbGVlLm9iamVjdC5uYW1lID09PSAnc3VwZXInKSB7XG5cdFx0Y29uc3Qgc3VwZXJOYW1lID0gY2xhc3NEZWYuc3VwZXJDbGFzcztcblx0XHRpZiAoIXN1cGVyTmFtZSkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoJ3N1cGVyIHVzZWQgYnV0IG5vIHN1cGVyY2xhc3MnLCBleHByLmNhbGxlZS5zcGFuKTtcblx0XHR9XG5cdFx0Y2xhc3NEZWYgPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChzdXBlck5hbWUpO1xuXHR9XG5cblxuXHRjb25zdCBtZXRob2REZWY6IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB8IG51bGwgPSByZXNvbHZlSW5zdGFuY2VNZXRob2QoXG5cdFx0Y2xhc3NEZWYsXG5cdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0ZXhwci5jYWxsZWUucHJvcGVydHlcblx0KTtcblxuXHRpZiAoIW1ldGhvZERlZikge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBNZXRob2QgJHtleHByLmNhbGxlZS5wcm9wZXJ0eX0gbm90IGZvdW5kIG9uICR7Y2xhc3NEZWYubmFtZX1gLCBleHByLmNhbGxlZS5zcGFuKTtcblx0fVxuXG5cdGNvbnN0IG1ldGhvZEVudiA9IG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCk7XG5cdG1ldGhvZEVudi5kZWZpbmUoR1JBTU1BUi5USElTLCB0YXJnZXQpO1xuXG5cdGlmICh0YXJnZXQuX19uYXRpdmVJbnN0YW5jZSAmJiBtZXRob2REZWYubmFtZSBpbiB0YXJnZXQuX19uYXRpdmVJbnN0YW5jZSkge1xuXHRcdGNvbnN0IGFyZ3M6IGFueVtdID0gZXZhbE1ldGhvZEFyZ3VtZW50cyhcblx0XHRcdGV4cHIsXG5cdFx0XHRtZXRob2REZWYucGFyYW1ldGVycyxcblx0XHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0ZW52aXJvbm1lbnQsXG5cdFx0XHRldmVudFBpcGVsaW5lLFxuXHRcdFx0dGhpc1ZhbHVlXG5cdFx0KTtcblxuXHRcdGNvbnN0IHJhd0FyZ3M6IGFueSA9IGFyZ3MubWFwKGZyb21MeXJhVmFsdWUpO1xuXHRcdGNvbnN0IHJlc3VsdDogYW55ID0gdGFyZ2V0Ll9fbmF0aXZlSW5zdGFuY2VbbWV0aG9kRGVmLm5hbWVdKC4uLnJhd0FyZ3MpO1xuXG5cdFx0aWYgKHJlc3VsdCBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdHJldHVybiB3cmFwTmF0aXZlSW5zdGFuY2UocmVzdWx0LCBvYmplY3RSZWdpc3RyeSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2YWxSZXR1cm4oXG5cdFx0XHRbcmV0dXJuVmFsdWUocmVzdWx0KV0sXG5cdFx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRcdG1ldGhvZEVudixcblx0XHRcdGV2ZW50UGlwZWxpbmUsXG5cdFx0XHR0YXJnZXQsXG5cdFx0XHRtZXRob2REZWYucmV0dXJuVHlwZVxuXHRcdCk7XG5cdH1cblxuXHRiaW5kTWV0aG9kUGFyYW1ldGVycyhleHByLCBtZXRob2REZWYucGFyYW1ldGVycywgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cblx0cmV0dXJuIGV2YWxSZXR1cm4obWV0aG9kRGVmLmNoaWxkcmVuLCBvYmplY3RSZWdpc3RyeSwgbWV0aG9kRW52LCBldmVudFBpcGVsaW5lLCB0YXJnZXQsIG1ldGhvZERlZi5yZXR1cm5UeXBlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVJbnN0YW5jZU1ldGhvZChjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIG1ldGhvZE5hbWU6IHN0cmluZyk6IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB8IG51bGwge1xuXHRpZiAoY2xhc3NEZWYuaW5zdGFuY2VNZXRob2RzW21ldGhvZE5hbWVdKSB7XG5cdFx0cmV0dXJuIGNsYXNzRGVmLmluc3RhbmNlTWV0aG9kc1ttZXRob2ROYW1lXTtcblx0fVxuXG5cdGlmIChjbGFzc0RlZi5zdXBlckNsYXNzKSB7XG5cdFx0Y29uc3Qgc3VwZXJEZWYgPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChjbGFzc0RlZi5zdXBlckNsYXNzKTtcblx0XHRyZXR1cm4gcmVzb2x2ZUluc3RhbmNlTWV0aG9kKHN1cGVyRGVmLCBvYmplY3RSZWdpc3RyeSwgbWV0aG9kTmFtZSk7XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRNZXRob2RQYXJhbWV0ZXJzKFxuXHRjYWxsTm9kZTogQVNUQ2FsbE5vZGUsXG5cdHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSxcblx0b2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LFxuXHRtZXRob2RFbnY6IEVudmlyb25tZW50LFxuXHRlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsXG5cdGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsXG5cdHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbFxuKTogdm9pZCB7XG5cblx0Y29uc3QgYXJnczogQVNUTm9kZVtdID0gY2FsbE5vZGUuYXJndW1lbnRzO1xuXHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHBhcmFtZXRlcjogQVNUUGFyYW1ldGVyTm9kZSB8IG51bGwgPSBwYXJhbWV0ZXJzW2ldIHx8IG51bGw7XG5cdFx0Y29uc3QgYXJndW1lbnQ6IGFueSA9IGFyZ3NbaV0gfHwgbnVsbDtcblxuXHRcdGlmICghcGFyYW1ldGVyKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcignTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBpbiBtZXRob2QgY2FsbC4nKTtcblx0XHR9XG5cblx0XHRsZXQgcmF3VmFsdWU7XG5cblx0XHRpZiAoYXJndW1lbnQpIHtcblx0XHRcdHJhd1ZhbHVlID0gZXZhbEV4cHJlc3Npb24oYXJndW1lbnQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHR9IGVsc2UgaWYgKHBhcmFtZXRlcj8uZGVmYXVsdFZhbHVlKSB7XG5cdFx0XHRyYXdWYWx1ZSA9IGV2YWxFeHByZXNzaW9uKHBhcmFtZXRlci5kZWZhdWx0VmFsdWUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHR9XG5cblx0XHRjb25zdCBjYXN0ZWQgPSBwYXJhbWV0ZXIudHlwZUFubm90YXRpb25cblx0XHRcdD8gY2FzdFZhbHVlKHJhd1ZhbHVlLCBwYXJhbWV0ZXIudHlwZUFubm90YXRpb24ubmFtZSlcblx0XHRcdDogY2FzdFZhbHVlKHJhd1ZhbHVlLCBUWVBFX0VOVU0uTUlYRUQpO1xuXG5cdFx0bWV0aG9kRW52LmRlZmluZShwYXJhbWV0ZXIubmFtZSwgY2FzdGVkKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbENhbGxBcmd1bWVudHMobm9kZTogQVNUQ2FsbE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnlbXSB7XG5cdGlmIChub2RlLmNhbGxlZSBpbnN0YW5jZW9mIEFTVExhbWJkYU5vZGUpIHtcblx0XHRjb25zdCBsYW1iZGE6IEFTVExhbWJkYU5vZGUgPSBub2RlLmNhbGxlZTtcblx0XHRyZXR1cm4gZXZhbE1ldGhvZEFyZ3VtZW50cyhub2RlLCBsYW1iZGEucGFyYW1ldGVycywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHR9XG5cblx0aWYgKG5vZGUuY2FsbGVlLnR5cGUgPT09IEFTVE5vZGVUeXBlLklERU5USUZJRVIpIHtcblx0XHRyZXR1cm4gbm9kZS5hcmd1bWVudHMubWFwKChhcmd1bWVudDogQVNUTm9kZSk6IGFueSA9PiB7XG5cdFx0XHRyZXR1cm4gY2FzdFZhbHVlKFxuXHRcdFx0XHRldmFsRXhwcmVzc2lvbihhcmd1bWVudCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpLFxuXHRcdFx0XHRhcmd1bWVudC50eXBlXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHR9XG5cblx0bGV0IG1vZHVsZU5hbWU6IHN0cmluZyA9ICd1bmtub3duJztcblx0bGV0IG1ldGhvZE5hbWU6IHN0cmluZyA9ICd1bmtub3duJztcblxuXHRpZiAobm9kZS5jYWxsZWUgaW5zdGFuY2VvZiBBU1RNZW1iZXJOb2RlKSB7XG5cdFx0bW9kdWxlTmFtZSA9IG5vZGUuY2FsbGVlLm9iamVjdC5uYW1lO1xuXHRcdG1ldGhvZE5hbWUgPSBub2RlLmNhbGxlZS5wcm9wZXJ0eTtcblx0fVxuXG5cdHRocm93UnVudGltZUVycm9yKGBVbmtub3duIGZ1bmN0aW9uICR7bW9kdWxlTmFtZX0uJHttZXRob2ROYW1lfWAsIG5vZGUuc3Bhbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsTWV0aG9kQXJndW1lbnRzKGV4cHI6IEFTVENhbGxOb2RlIHwgQVNUTmV3Tm9kZSwgcGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55W10ge1xuXHRjb25zdCBhcmdzID0gW107XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgcGFyYW1ldGVyOiBBU1RQYXJhbWV0ZXJOb2RlIHwgbnVsbCA9IHBhcmFtZXRlcnNbaV0gfHwgbnVsbDtcblx0XHRjb25zdCBhcmd1bWVudCA9IGV4cHIuYXJndW1lbnRzW2ldIHx8IG51bGw7XG5cblx0XHRsZXQgdmFsdWU7XG5cblx0XHRpZiAoYXJndW1lbnQpIHtcblx0XHRcdHZhbHVlID0gZXZhbEV4cHJlc3Npb24oYXJndW1lbnQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHR9IGVsc2UgaWYgKHBhcmFtZXRlcj8uZGVmYXVsdFZhbHVlKSB7XG5cdFx0XHR2YWx1ZSA9IGV2YWxFeHByZXNzaW9uKHBhcmFtZXRlci5kZWZhdWx0VmFsdWUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFtSdW50aW1lRXJyb3JdIE1pc3NpbmcgYXJndW1lbnQgJyR7cGFyYW1ldGVyPy5uYW1lfSdgLCBleHByLnNwYW4pO1xuXHRcdH1cblxuXHRcdGFyZ3MucHVzaCh2YWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4gYXJncy5tYXAoKGFyZ3VtZW50LCBpKTogYW55ID0+IHtcblx0XHRjb25zdCBwYXJhbWV0ZXI6IEFTVFBhcmFtZXRlck5vZGUgfCB1bmRlZmluZWQgPSBwYXJhbWV0ZXJzW2ldO1xuXHRcdHJldHVybiBwYXJhbWV0ZXI/LnR5cGVBbm5vdGF0aW9uXG5cdFx0XHQ/IGNhc3RWYWx1ZShhcmd1bWVudCwgcGFyYW1ldGVyLnR5cGVBbm5vdGF0aW9uLm5hbWUpXG5cdFx0XHQ6IGNhc3RWYWx1ZShhcmd1bWVudCwgVFlQRV9FTlVNLk1JWEVEKTtcblx0fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsSWYobm9kZTogQVNUSWZOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0Y29uc3QgY29uZGl0aW9uOiBhbnkgPSBjYXN0VmFsdWUoXG5cdFx0ZXZhbEV4cHJlc3Npb24obm9kZS5jb25kaXRpb24sIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKSxcblx0XHRUWVBFX0VOVU0uQk9PTEVBTlxuXHQpO1xuXG5cdC8vIFRIRU5cblx0aWYgKGNvbmRpdGlvbiA9PT0gdHJ1ZSkge1xuXHRcdHJldHVybiBldmFsQmxvY2sobm9kZS50aGVuLmNoaWxkcmVuLCBvYmplY3RSZWdpc3RyeSwgbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KSwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0fVxuXG5cdC8vIEVMU0Vcblx0aWYgKG5vZGUuZWxzZSkge1xuXHRcdGlmIChub2RlLmVsc2UgaW5zdGFuY2VvZiBBU1RJZk5vZGUpIHtcblx0XHRcdHJldHVybiBldmFsSWYobm9kZS5lbHNlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2YWxCbG9jayhub2RlLmVsc2UuY2hpbGRyZW4sIG9iamVjdFJlZ2lzdHJ5LCBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpLCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsTWF0Y2gobm9kZTogQVNUTWF0Y2hOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0Y29uc3QgbWF0Y2hWYWx1ZTogYW55ID0gZXZhbEV4cHJlc3Npb24obm9kZS5leHByZXNzaW9uLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXG5cdGZvciAoY29uc3QgY2FzZU5vZGUgb2Ygbm9kZS5jYXNlcykge1xuXHRcdGlmIChjYXNlTm9kZS50ZXN0ID09PSBudWxsKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCB0ZXN0VmFsdWUgPSBldmFsRXhwcmVzc2lvbihjYXNlTm9kZS50ZXN0LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cblx0XHRpZiAodGVzdFZhbHVlID09PSBtYXRjaFZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gZXZhbE1hdGNoQ2FzZShjYXNlTm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdGlmIChub2RlLmRlZmF1bHRDYXNlKSB7XG5cdFx0cmV0dXJuIGV2YWxNYXRjaENhc2Uobm9kZS5kZWZhdWx0Q2FzZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsTWF0Y2hDYXNlKG5vZGU6IEFTVE1hdGNoQ2FzZU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRyZXR1cm4gZXZhbEJsb2NrKG5vZGUuY2hpbGRyZW4sIG9iamVjdFJlZ2lzdHJ5LCBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpLCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEZvcmVhY2gobm9kZTogQVNURm9yZWFjaE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRsZXQgaXRlcmFibGUgPSBldmFsRXhwcmVzc2lvbihub2RlLml0ZXJhYmxlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cblx0aWYgKCEoaXRlcmFibGUgaW5zdGFuY2VvZiBJbnN0YW5jZSkpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgZm9yZWFjaCBleHBlY3RzIGFuIG9iamVjdCBpbXBsZW1lbnRpbmcgSXRlcmFibGVgLCBub2RlLml0ZXJhYmxlLnNwYW4pO1xuXHR9XG5cblx0Y29uc3QgaXRlcmF0b3JNZXRob2Q6IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB8IG51bGwgPSByZXNvbHZlSW5zdGFuY2VNZXRob2QoXG5cdFx0aXRlcmFibGUuX19jbGFzc0RlZixcblx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHQnaXRlcmF0b3InXG5cdCk7XG5cblx0aWYgKCFpdGVyYXRvck1ldGhvZCkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBPYmplY3QgZG9lcyBub3QgaW1wbGVtZW50IEl0ZXJhYmxlIChtaXNzaW5nIGl0ZXJhdG9yKCkpYCwgbm9kZS5pdGVyYWJsZS5zcGFuKTtcblx0fVxuXG5cdGNvbnN0IGl0ZXJhdG9yOiBhbnkgPSBldmFsSW5zdGFuY2VDYWxsKFxuXHRcdCgoKTogQVNUQ2FsbE5vZGUgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBBU1RDYWxsTm9kZShuZXcgQVNUTWVtYmVyTm9kZShub2RlLml0ZXJhYmxlLCAnaXRlcmF0b3InKSk7XG5cdFx0fSkoKSxcblx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRlbnZpcm9ubWVudCxcblx0XHRldmVudFBpcGVsaW5lLFxuXHRcdHRoaXNWYWx1ZVxuXHQpO1xuXG5cdGlmICghKGl0ZXJhdG9yIGluc3RhbmNlb2YgSW5zdGFuY2UpKSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYGl0ZXJhdG9yKCkgbXVzdCByZXR1cm4gYW4gSXRlcmF0b3Igb2JqZWN0YCwgbm9kZS5pdGVyYWJsZS5zcGFuKTtcblx0fVxuXG5cdGNhbGxJdGVyYXRvck1ldGhvZChpdGVyYXRvciwgJ3Jld2luZCcsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG5cblx0d2hpbGUgKGNhbGxJdGVyYXRvck1ldGhvZChpdGVyYXRvciwgJ2hhc05leHQnLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpKSB7XG5cdFx0Y29uc3QgdmFsdWUgPSBjYWxsSXRlcmF0b3JNZXRob2QoaXRlcmF0b3IsICdjdXJyZW50Jywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcblxuXHRcdGNvbnN0IGxvb3BFbnYgPSBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpO1xuXG5cdFx0bG9vcEVudi5kZWZpbmUobm9kZS5pdGVyYXRvciwgdmFsdWUpO1xuXG5cdFx0Y29uc3QgcmVzdWx0ID0gZXZhbEJsb2NrKG5vZGUuYm9keSwgb2JqZWN0UmVnaXN0cnksIGxvb3BFbnYsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0aWYgKHJlc3VsdCBpbnN0YW5jZW9mIFJldHVyblZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblxuXHRcdGNhbGxJdGVyYXRvck1ldGhvZChpdGVyYXRvciwgJ25leHQnLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxsSXRlcmF0b3JNZXRob2QoaXRlcmF0b3I6IEluc3RhbmNlLCBtZXRob2ROYW1lOiBzdHJpbmcsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogYW55IHtcblx0cmV0dXJuIGNhbGxJbnN0YW5jZU1ldGhvZChcblx0XHRpdGVyYXRvcixcblx0XHRpdGVyYXRvci5maW5kZU1ldGhvZE5vZGUobWV0aG9kTmFtZSksXG5cdFx0W10sXG5cdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0ZW52aXJvbm1lbnQsXG5cdFx0ZXZlbnRQaXBlbGluZVxuXHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbFVuYXJ5KG5vZGU6IEFTVFVuYXJ5Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGNvbnN0IHZhbHVlOiBhbnkgPSBjYXN0VmFsdWUoZXZhbEV4cHJlc3Npb24obm9kZS5hcmd1bWVudCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpKTtcblxuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBJbnN0YW5jZSkge1xuXHRcdGxldCBvcDogc3RyaW5nID0gbm9kZS5vcGVyYXRvcjtcblxuXHRcdGlmIChvcCA9PT0gR1JBTU1BUi5QTFVTKSB7XG5cdFx0XHRvcCA9IEdSQU1NQVIuVU5BUllfUExVUztcblx0XHR9IGVsc2UgaWYgKG9wID09PSBHUkFNTUFSLk1JTlVTKSB7XG5cdFx0XHRvcCA9IEdSQU1NQVIuVU5BUllfTUlOVVM7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNhbGxJbnN0YW5jZU1ldGhvZChcblx0XHRcdHZhbHVlLFxuXHRcdFx0dmFsdWUuZmluZGVNZXRob2ROb2RlKG9wKSxcblx0XHRcdFtdLFxuXHRcdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0XHRlbnZpcm9ubWVudCxcblx0XHRcdGV2ZW50UGlwZWxpbmVcblx0XHQpO1xuXHR9XG5cblx0c3dpdGNoIChub2RlLm9wZXJhdG9yKSB7XG5cdFx0Y2FzZSBHUkFNTUFSLkVYQ0xBTUFUSU9OX01BUks6IHtcblx0XHRcdHJldHVybiAhdmFsdWU7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5NSU5VUzoge1xuXHRcdFx0cmV0dXJuIC12YWx1ZTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLlBMVVM6IHtcblx0XHRcdHJldHVybiArdmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0dGhyb3dSdW50aW1lRXJyb3IoYFVuc3VwcG9ydGVkIHVuYXJ5IG9wZXJhdG9yICR7bm9kZS5vcGVyYXRvcn1gLCBub2RlLnNwYW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbFZEb21Ob2RlKG5vZGU6IEFTVFZEb21Ob2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogVkNoaWxkIHtcblx0Y29uc3QgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcblxuXHRmb3IgKGNvbnN0IFtuYW1lLCB2YWx1ZV0gb2Ygbm9kZS5wcm9wcykge1xuXHRcdHByb3BzW25hbWVdID0gZXZhbEV4cHJlc3Npb24odmFsdWUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0fVxuXG5cdGNvbnN0IGlzQ29tcG9uZW50OiBib29sZWFuID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5oYXMobm9kZS50YWcpO1xuXG5cdGNvbnN0IGNoaWxkcmVuOiBWQ2hpbGRbXSA9IFtdO1xuXHRsZXQgdGV4dEJ1ZmZlcjogc3RyaW5nW10gPSBbXTtcblxuXHRjb25zdCBmbHVzaFRleHRCdWZmZXI6ICgpID0+IHZvaWQgPSAoKTogdm9pZCA9PiB7XG5cdFx0aWYgKHRleHRCdWZmZXIubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNoaWxkcmVuLnB1c2goe1xuXHRcdFx0ICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG5cdFx0XHQgICAgICAgICAgICAgIHZhbHVlOiB0ZXh0QnVmZmVyLmpvaW4oJycpLFxuXHRcdFx0ICAgICAgICAgICAgICBkb206IHVuZGVmaW5lZFxuXHRcdCAgICAgICAgICAgICAgfSk7XG5cdFx0dGV4dEJ1ZmZlciA9IFtdO1xuXHR9XG5cblx0Zm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG5cdFx0c3dpdGNoICh0cnVlKSB7XG5cdFx0XHRjYXNlIGNoaWxkIGluc3RhbmNlb2YgQVNUVkRvbVRleHROb2RlOiB7XG5cdFx0XHRcdHRleHRCdWZmZXIucHVzaChjaGlsZC52YWx1ZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0Y2FzZSBjaGlsZCBpbnN0YW5jZW9mIEFTVFZEb21FeHByZXNzaW9uTm9kZToge1xuXHRcdFx0XHR0ZXh0QnVmZmVyLnB1c2goZXZhbEV4cHJlc3Npb24oY2hpbGQuZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRjYXNlIGNoaWxkIGluc3RhbmNlb2YgQVNUVkRvbU5vZGU6IHtcblx0XHRcdFx0Y2hpbGRyZW4ucHVzaChldmFsVkRvbU5vZGUoY2hpbGQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKSBhcyBWQ2hpbGQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZsdXNoVGV4dEJ1ZmZlcigpO1xuXHR9XG5cblx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cblx0aWYgKGlzQ29tcG9uZW50KSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdjb21wb25lbnQnLFxuXHRcdFx0Y2xhc3NOYW1lOiBub2RlLnRhZyxcblx0XHRcdHByb3BzOiB7Li4ucHJvcHMsIGNoaWxkcmVufSxcblx0XHRcdHN1YlRyZWU6IHVuZGVmaW5lZCxcblx0XHRcdGluc3RhbmNlOiB1bmRlZmluZWQsXG5cdFx0XHRkb206IHVuZGVmaW5lZFxuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdlbGVtZW50Jyxcblx0XHR0YWc6IG5vZGUudGFnLFxuXHRcdHByb3BzLFxuXHRcdGNoaWxkcmVuLFxuXHRcdGRvbTogdW5kZWZpbmVkXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsUmV0dXJuKGJsb2NrTm9kZXM6IEFTVE5vZGVbXSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCwgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGV2YWxCbG9jayhibG9ja05vZGVzLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSwgcmV0dXJuVHlwZSk7XG5cdH0gY2F0Y2ggKGV4ZWN1dGlvblN0b3ApIHtcblx0XHRpZiAoZXhlY3V0aW9uU3RvcCBpbnN0YW5jZW9mIEV4ZWN1dGlvblN0b3ApIHtcblx0XHRcdHJldHVybiBjYXN0VmFsdWUoZXhlY3V0aW9uU3RvcC5yZXR1cm5WYWx1ZS52YWx1ZSwgZXhlY3V0aW9uU3RvcC5yZXR1cm5UeXBlPy5uYW1lKTtcblx0XHR9XG5cdFx0dGhyb3cgZXhlY3V0aW9uU3RvcDtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEJsb2NrKGJsb2NrTm9kZXM6IEFTVE5vZGVbXSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCwgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGZvciAoY29uc3QgYmxvY2tOb2RlIG9mIGJsb2NrTm9kZXMpIHtcblx0XHRjb25zdCByZXR1cm5WYWx1ZTogYW55ID0gZXZhbE5vZGUoYmxvY2tOb2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0aWYgKHJldHVyblZhbHVlIGluc3RhbmNlb2YgUmV0dXJuVmFsdWUpIHtcblx0XHRcdHRocm93IG5ldyBFeGVjdXRpb25TdG9wKHJldHVyblZhbHVlLCByZXR1cm5UeXBlKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsQW5ub3RhdGlvblZhbHVlKG5vZGU6IEFTVE5vZGUpOiBhbnkge1xuXHRzd2l0Y2ggKG5vZGUudHlwZSkge1xuXHRcdGNhc2UgQVNUTm9kZVR5cGUuU1RSSU5HOlxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuTlVNQkVSOlxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuQk9PTEVBTjpcblx0XHRjYXNlIEFTVE5vZGVUeXBlLklERU5USUZJRVI6IHtcblx0XHRcdHJldHVybiBjYXN0VmFsdWUobm9kZS52YWx1ZSk7XG5cdFx0fVxuXG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5BUlJBWSA6IHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUQXJyYXlOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBub2RlLmVsZW1lbnRzLm1hcCgoY2hpbGQ6IEFTVE5vZGUpOiBhbnkgPT4gZXZhbEFubm90YXRpb25WYWx1ZShjaGlsZCkpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgYW5ub3RhdGlvbiBwcm9wZXJ0eSB2YWx1ZTogJHtub2RlLnR5cGV9YCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cblx0XHRkZWZhdWx0OiB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5zdXBwb3J0ZWQgYW5ub3RhdGlvbiBleHByZXNzaW9uOiAke25vZGUudHlwZX1gLCBub2RlLnNwYW4pO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEFubm90YXRpb25Qcm9wZXJ0aWVzKGFubm90YXRpb246IEFTVEFubm90YXRpb25Ob2RlKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG5cdGNvbnN0IHByb3BlcnRpZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuXHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlTm9kZV0gb2YgYW5ub3RhdGlvbi5wcm9wZXJ0aWVzKSB7XG5cdFx0cHJvcGVydGllc1trZXldID0gZXZhbEFubm90YXRpb25WYWx1ZSh2YWx1ZU5vZGUpO1xuXHR9XG5cblx0cmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxsSW5zdGFuY2VNZXRob2QoaW5zdGFuY2U6IEluc3RhbmNlLCBtZXRob2ROb2RlOiBBU1RNZXRob2ROb2RlLCBhcmdzOiBhbnlbXSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiBhbnkge1xuXHRjb25zdCBtZXRob2RFbnYgPSBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpO1xuXG5cdG1ldGhvZEVudi5kZWZpbmUoR1JBTU1BUi5USElTLCBpbnN0YW5jZSk7XG5cblx0aWYgKGluc3RhbmNlLl9fbmF0aXZlSW5zdGFuY2UgJiYgbWV0aG9kTm9kZS5uYW1lIGluIGluc3RhbmNlLl9fbmF0aXZlSW5zdGFuY2UpIHtcblx0XHRjb25zdCByYXdBcmdzOiBhbnlbXSA9IGFyZ3MubWFwKGZyb21MeXJhVmFsdWUpO1xuXHRcdGNvbnN0IHJlc3VsdDogYW55ID0gaW5zdGFuY2UuX19uYXRpdmVJbnN0YW5jZVttZXRob2ROb2RlLm5hbWVdKC4uLnJhd0FyZ3MpO1xuXG5cdFx0aWYgKHJlc3VsdCBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdHJldHVybiB3cmFwTmF0aXZlSW5zdGFuY2UocmVzdWx0LCBvYmplY3RSZWdpc3RyeSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2YWxSZXR1cm4oXG5cdFx0XHRbcmV0dXJuVmFsdWUocmVzdWx0KV0sXG5cdFx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRcdG1ldGhvZEVudixcblx0XHRcdGV2ZW50UGlwZWxpbmUsXG5cdFx0XHRpbnN0YW5jZSxcblx0XHRcdG1ldGhvZE5vZGUucmV0dXJuVHlwZVxuXHRcdCk7XG5cdH1cblxuXHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbWV0aG9kTm9kZS5wYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgcGFyYW1ldGVyOiBBU1RQYXJhbWV0ZXJOb2RlIHwgbnVsbCA9IG1ldGhvZE5vZGUucGFyYW1ldGVyc1tpXSB8fCBudWxsO1xuXHRcdGNvbnN0IGFyZ3VtZW50OiBhbnkgPSBhcmdzW2ldIHx8IG51bGw7XG5cblx0XHRpZiAoIXBhcmFtZXRlcikge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoJ01ldGhvZCBwYXJhbWV0ZXIgaXMgbnVsbC4nKTtcblx0XHR9XG5cblx0XHRsZXQgdmFsdWU7XG5cdFx0aWYgKCFhcmd1bWVudCkge1xuXHRcdFx0dmFsdWUgPSBwYXJhbWV0ZXIuZGVmYXVsdFZhbHVlXG5cdFx0XHRcdD8gZXZhbE5vZGUocGFyYW1ldGVyLmRlZmF1bHRWYWx1ZSwgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgZXZlbnRQaXBlbGluZSwgaW5zdGFuY2UpXG5cdFx0XHRcdDogbnVsbDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFsdWUgPSBhcmdzW2ldO1xuXHRcdH1cblxuXHRcdG1ldGhvZEVudi5kZWZpbmUocGFyYW1ldGVyLm5hbWUsIHZhbHVlKTtcblx0fVxuXG5cdHJldHVybiBldmFsUmV0dXJuKG1ldGhvZE5vZGUuY2hpbGRyZW4sIG9iamVjdFJlZ2lzdHJ5LCBtZXRob2RFbnYsIGV2ZW50UGlwZWxpbmUsIGluc3RhbmNlLCBtZXRob2ROb2RlLnJldHVyblR5cGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b0JveElmTmVlZGVkKHZhbHVlOiBhbnksIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IEluc3RhbmNlIHtcblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgSW5zdGFuY2UpIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSBUWVBFX0VOVU0uTlVNQkVSKSB7XG5cdFx0cmV0dXJuIGNyZWF0ZUJveGVkSW5zdGFuY2UoQXV0b2JveGVkVHlwZXMuZ2V0Q2xhc3NOYW1lKFRZUEVfRU5VTS5OVU1CRVIpLCB2YWx1ZSwgb2JqZWN0UmVnaXN0cnkpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gVFlQRV9FTlVNLlNUUklORykge1xuXHRcdHJldHVybiBjcmVhdGVCb3hlZEluc3RhbmNlKEF1dG9ib3hlZFR5cGVzLmdldENsYXNzTmFtZShUWVBFX0VOVU0uU1RSSU5HKSwgdmFsdWUsIG9iamVjdFJlZ2lzdHJ5KTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09IFRZUEVfRU5VTS5CT09MRUFOKSB7XG5cdFx0cmV0dXJuIGNyZWF0ZUJveGVkSW5zdGFuY2UoQXV0b2JveGVkVHlwZXMuZ2V0Q2xhc3NOYW1lKFRZUEVfRU5VTS5CT09MRUFOKSwgdmFsdWUsIG9iamVjdFJlZ2lzdHJ5KTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJveGVkSW5zdGFuY2UoY2xhc3NOYW1lOiBzdHJpbmcsIHByaW1pdGl2ZVZhbHVlOiBhbnksIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IEluc3RhbmNlIHtcblx0Y29uc3QgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KGNsYXNzTmFtZSk7XG5cdGNvbnN0IGluc3RhbmNlOiBJbnN0YW5jZSA9IGNsYXNzRGVmLmNvbnN0cnVjdEVtcHR5SW5zdGFuY2UoKTtcblxuXHRpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlID0gbmV3IGNsYXNzRGVmLm5hdGl2ZUluc3RhbmNlKGZyb21MeXJhVmFsdWUocHJpbWl0aXZlVmFsdWUpKTtcblxuXHRyZXR1cm4gaW5zdGFuY2U7XG59XG4iLAogICAgImNvbnN0IEx5cmFFdmVudHMgPSB7XG5cdExZUkFfSU5TVEFOQ0VfRElSVFlfU1RBVEU6ICdseXJhOmluc3RhbmNlX2RpcnR5X3N0YXRlJyxcblx0TFlSQV9JTlNUQU5DRV9DTEVBTl9TVEFURTogJ2x5cmE6aW5zdGFuY2VfY2xlYW5fc3RhdGUnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMeXJhRXZlbnRzO1xuIiwKICAgICJpbXBvcnQge0dSQU1NQVJ9IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5pbXBvcnQge1xuXHRBU1RDbGFzc05vZGUsXG5cdEFTVEZpZWxkTm9kZSxcblx0QVNUSW50ZXJmYWNlTm9kZSxcblx0QVNUTWV0aG9kTm9kZSxcblx0QVNUTmV3Tm9kZSxcblx0QVNUTm9kZSxcblx0QVNUUGFyYW1ldGVyTm9kZSxcblx0QVNUVHlwZU5vZGVcbn0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHt0aHJvd1J1bnRpbWVFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuaW1wb3J0IHR5cGUge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi9ydW50aW1lX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge2V2YWxFeHByZXNzaW9uLCBldmFsTWV0aG9kQXJndW1lbnRzLCBldmFsTm9kZX0gZnJvbSBcIi4uL2ludGVycHJldGVyL2V2YWx1YXRpb25cIjtcbmltcG9ydCB7Y2FzdFZhbHVlLCBmcm9tTHlyYVZhbHVlLCBMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi9ydW50aW1lX2NvbnZlcnNpb25cIjtcbmltcG9ydCB0eXBlIHtFdmVudFBpcGVsaW5lfSBmcm9tIFwiLi4vZXZlbnQvcGlwZWxpbmVcIjtcbmltcG9ydCBMeXJhRXZlbnRzIGZyb20gXCIuLi9ldmVudC9ldmVudHNcIjtcblxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IHtcblx0cGFyZW50OiBFbnZpcm9ubWVudCB8IG51bGw7XG5cdHZhbHVlczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9O1xuXG5cdGNvbnN0cnVjdG9yKHBhcmVudDogRW52aXJvbm1lbnQgfCBudWxsID0gbnVsbCkge1xuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xuXHRcdHRoaXMudmFsdWVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0fVxuXG5cdGRlZmluZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLnZhbHVlc1tuYW1lXSA9IHZhbHVlO1xuXHR9XG5cblx0Z2V0KG5hbWU6IHN0cmluZyk6IGFueSB7XG5cdFx0aWYgKG5hbWUgaW4gdGhpcy52YWx1ZXMpIHtcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlc1tuYW1lXTtcblx0XHR9XG5cdFx0aWYgKHRoaXMucGFyZW50KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJlbnQuZ2V0KG5hbWUpO1xuXHRcdH1cblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5kZWZpbmVkIHZhcmlhYmxlICR7bmFtZX1gKTtcblx0fVxuXG5cdHNldChuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHRpZiAobmFtZSBpbiB0aGlzLnZhbHVlcykge1xuXHRcdFx0dGhpcy52YWx1ZXNbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKHRoaXMucGFyZW50KSB7XG5cdFx0XHR0aGlzLnBhcmVudC5zZXQobmFtZSwgdmFsdWUpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5kZWZpbmVkIHZhcmlhYmxlICR7bmFtZX1gKTtcblx0fVxuXG5cdGhhcyhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXNbbmFtZV0gfHwgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmhhcyhuYW1lKSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEluc3RhbmNlIHtcblx0cHVibGljIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG5cdF9fY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbjtcblx0X19maWVsZHNJbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuXHRfX2luc3RhbmNlRmllbGRzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH07XG5cdF9fc3RhdGljRmllbGRzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH07XG5cdF9fbmF0aXZlSW5zdGFuY2U6IGFueSB8IG51bGwgPSBudWxsO1xuXHRfX2lzRGlydHk6IGJvb2xlYW4gPSBmYWxzZVxuXG5cdGNvbnN0cnVjdG9yKGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24pIHtcblx0XHR0aGlzLl9fY2xhc3NEZWYgPSBjbGFzc0RlZjtcblx0XHR0aGlzLl9faW5zdGFuY2VGaWVsZHMgPSB7fTtcblx0XHR0aGlzLl9fc3RhdGljRmllbGRzID0ge307XG5cdFx0dGhpcy5fX25hdGl2ZUluc3RhbmNlID0gbnVsbDtcblxuXHRcdHRoaXMuaWQgPSBJbnN0YW5jZS5nZW5lcmF0ZUluc3RhbmNlVVVJRCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgZ2VuZXJhdGVJbnN0YW5jZVVVSUQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gc2VsZi5jcnlwdG8ucmFuZG9tVVVJRCgpO1xuXHR9XG5cblx0cHVibGljIG1hcmtEaXJ0eShldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogdm9pZCB7XG5cdFx0dGhpcy5fX2lzRGlydHkgPSB0cnVlO1xuXG5cdFx0ZXZlbnRQaXBlbGluZS5lbWl0KEx5cmFFdmVudHMuTFlSQV9JTlNUQU5DRV9ESVJUWV9TVEFURSwge2luc3RhbmNlOiB0aGlzfSk7XG5cdH1cblxuXHRwdWJsaWMgbWFya0NsZWFuKGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiB2b2lkIHtcblx0XHR0aGlzLl9faXNEaXJ0eSA9IGZhbHNlO1xuXG5cdFx0ZXZlbnRQaXBlbGluZS5lbWl0KEx5cmFFdmVudHMuTFlSQV9JTlNUQU5DRV9DTEVBTl9TVEFURSwge2luc3RhbmNlOiB0aGlzfSk7XG5cdH1cblxuXHRmaW5kZU1ldGhvZE5vZGUobmFtZTogc3RyaW5nKTogQVNUTWV0aG9kTm9kZSB7XG5cdFx0cmV0dXJuIHRoaXMuX19jbGFzc0RlZi5maW5kTWV0aG9kTm9kZShuYW1lKTtcblx0fVxuXG5cdGhhc1B1YmxpY1Byb3BlcnR5KG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fX2NsYXNzRGVmLmZpbmRJbnN0YW5jZUZpZWxkRGVmaW5pdGlvbihuYW1lKS5tb2RpZmllcnMucHVibGljO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRzZXRQdWJsaWNQcm9wZXJ0eShuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnksIGV4cGVjdGVkOiBhbnkgPSBudWxsKTogdm9pZCB7XG5cdFx0bGV0IGZpZWxkRGVmaW5pdGlvbjogQ2xhc3NGaWVsZERlZmluaXRpb24gPSB0aGlzLl9fY2xhc3NEZWYuZmluZEluc3RhbmNlRmllbGREZWZpbml0aW9uKG5hbWUpO1xuXG5cdFx0aWYgKGZpZWxkRGVmaW5pdGlvbi5tb2RpZmllcnMucHVibGljKSB7XG5cdFx0XHR0aGlzLl9faW5zdGFuY2VGaWVsZHNbbmFtZV0gPSBjYXN0VmFsdWUodmFsdWUsIGV4cGVjdGVkKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgRmllbGQgJHtuYW1lfSBpcyBub3QgcHVibGljLmApO1xuXHR9XG5cblx0aW5pdGlhbGl6ZUluc3RhbmNlRmllbGRzKG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogdm9pZCB7XG5cdFx0dGhpcy5fX2NsYXNzRGVmLmluaXRpYWxpemVJbnN0YW5jZUZpZWxkcyh0aGlzLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBNb2RpZmllcnMge1xuXHRvcGVuOiBib29sZWFuID0gZmFsc2U7XG5cdHB1YmxpYzogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlOiBib29sZWFuID0gZmFsc2U7XG5cdHN0YXRpYzogYm9vbGVhbiA9IGZhbHNlO1xuXHRyZWFkb25seTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3t9fSBhdHRyaWJ1dGVzXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihhdHRyaWJ1dGVzOiB7IFtpbmRleDogc3RyaW5nXTogYm9vbGVhbiB9ID0ge30pIHtcblx0XHRmb3IgKGxldCBhdHRyaWJ1dGUgb2YgT2JqZWN0LmtleXMoYXR0cmlidXRlcykpIHtcblx0XHRcdGlmICh0aGlzLmhhc093blByb3BlcnR5KGF0dHJpYnV0ZSkpIHtcblx0XHRcdFx0Y29uc3QgbW9kaWZpZXJzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB0aGlzO1xuXHRcdFx0XHRtb2RpZmllcnNbYXR0cmlidXRlXSA9IGF0dHJpYnV0ZXNbYXR0cmlidXRlXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1cGVyQ2xhc3Mge1xuXHR0eXBlOiBzdHJpbmc7XG5cdG5hbWU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcih0eXBlOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgRXhlY3V0aW9uU3RvcCBleHRlbmRzIEVycm9yIHtcblx0Y29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IHJldHVyblZhbHVlOiBSZXR1cm5WYWx1ZSxcblx0ICAgICAgICAgICAgcHVibGljIHJlYWRvbmx5IHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbCkge1xuXHRcdHN1cGVyKCdFeGVjdXRpb24gc3RvcHBlbmQgd2l0aCByZXR1cm4uJyk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFJldHVyblZhbHVlIHtcblx0dmFsdWU6IGFueTtcblxuXHRjb25zdHJ1Y3Rvcih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGFzc0ZpZWxkRGVmaW5pdGlvbiB7XG5cdG5hbWU6IHN0cmluZztcblx0dHlwZTogc3RyaW5nIHwgbnVsbDtcblx0bW9kaWZpZXJzOiBNb2RpZmllcnM7XG5cdGluaXRpYWxpemVyOiBBU1ROb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlOiBzdHJpbmcgfCBudWxsLCBtb2RpZmllcnM6IE1vZGlmaWVycywgaW5pdGlhbGl6ZXI6IEFTVE5vZGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHR0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcblx0XHR0aGlzLmluaXRpYWxpemVyID0gaW5pdGlhbGl6ZXI7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIENsYXNzTWV0aG9kRGVmaW5pdGlvbiB7XG5cdG5hbWU6IHN0cmluZztcblx0cGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdO1xuXHRyZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGw7XG5cdG1vZGlmaWVyczogTW9kaWZpZXJzO1xuXHRjaGlsZHJlbjogQVNUTm9kZVtdO1xuXHRpc0NvbnN0cnVjdG9yOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgcGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdLCByZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGwsIG1vZGlmaWVyczogTW9kaWZpZXJzLCBjaGlsZHJlbjogQVNUTm9kZVtdKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuXHRcdHRoaXMucmV0dXJuVHlwZSA9IHJldHVyblR5cGU7XG5cdFx0dGhpcy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXHRcdHRoaXMuaXNDb25zdHJ1Y3RvciA9IG5hbWUgPT09IEdSQU1NQVIuQ09OU1RSVUNUT1I7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIENsYXNzRGVmaW5pdGlvbiB7XG5cdG5vZGU6IEFTVENsYXNzTm9kZTtcblx0bmFtZTogc3RyaW5nO1xuXHRzdXBlckNsYXNzOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0aW5zdGFuY2VGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW107XG5cdGluc3RhbmNlTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9O1xuXHRzdGF0aWNGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW107XG5cdHN0YXRpY01ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfTtcblx0Y29uc3RydWN0b3JNZXRob2Q6IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB8IG51bGwgPSBudWxsO1xuXHRuYXRpdmVJbnN0YW5jZTogYW55ID0gbnVsbDtcblx0aXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0Y2xhc3NOb2RlOiBBU1RDbGFzc05vZGUsXG5cdFx0c3VwZXJDbGFzczogc3RyaW5nIHwgbnVsbCxcblx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0aW5zdGFuY2VGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW10sXG5cdFx0aW5zdGFuY2VNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH0sXG5cdFx0c3RhdGljRmllbGRzOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbltdLFxuXHRcdHN0YXRpY01ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfSxcblx0XHRjb25zdHJ1Y3Rvck1ldGhvZDogQ2xhc3NNZXRob2REZWZpbml0aW9uIHwgbnVsbCA9IG51bGxcblx0KSB7XG5cdFx0dGhpcy5ub2RlID0gY2xhc3NOb2RlO1xuXHRcdHRoaXMuc3VwZXJDbGFzcyA9IHN1cGVyQ2xhc3M7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmluc3RhbmNlRmllbGRzID0gaW5zdGFuY2VGaWVsZHM7XG5cdFx0dGhpcy5pbnN0YW5jZU1ldGhvZHMgPSBpbnN0YW5jZU1ldGhvZHM7XG5cdFx0dGhpcy5zdGF0aWNGaWVsZHMgPSBzdGF0aWNGaWVsZHM7XG5cdFx0dGhpcy5zdGF0aWNNZXRob2RzID0gc3RhdGljTWV0aG9kcztcblx0XHR0aGlzLmNvbnN0cnVjdG9yTWV0aG9kID0gY29uc3RydWN0b3JNZXRob2Q7XG5cdFx0dGhpcy5pc09wZW4gPSBjbGFzc05vZGUubW9kaWZpZXJzLm9wZW47XG5cdH1cblxuXHRzdGF0aWMgZnJvbUFTVChub2RlOiBBU1RDbGFzc05vZGUpOiBDbGFzc0RlZmluaXRpb24ge1xuXHRcdGNvbnN0IGluc3RhbmNlRmllbGRzOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbltdID0gW107XG5cdFx0Y29uc3QgaW5zdGFuY2VNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH0gPSB7fTtcblx0XHRjb25zdCBzdGF0aWNGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW10gPSBbXTtcblx0XHRjb25zdCBzdGF0aWNNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH0gPSB7fTtcblx0XHRsZXQgY29uc3RydWN0b3JNZXRob2Q6IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB8IG51bGwgPSBudWxsO1xuXG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAoY2hpbGQgaW5zdGFuY2VvZiBBU1RGaWVsZE5vZGUpIHtcblx0XHRcdFx0Y29uc3QgZmllbGQgPSBuZXcgQ2xhc3NGaWVsZERlZmluaXRpb24oXG5cdFx0XHRcdFx0Y2hpbGQubmFtZSxcblx0XHRcdFx0XHRjaGlsZC5maWVsZFR5cGVcblx0XHRcdFx0XHRcdD8gY2hpbGQuZmllbGRUeXBlLm5hbWVcblx0XHRcdFx0XHRcdDogbnVsbCxcblx0XHRcdFx0XHRjaGlsZC5tb2RpZmllcnMsXG5cdFx0XHRcdFx0Y2hpbGQuaW5pdFxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdGlmIChmaWVsZC5tb2RpZmllcnMuc3RhdGljKSB7XG5cdFx0XHRcdFx0c3RhdGljRmllbGRzLnB1c2goZmllbGQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGluc3RhbmNlRmllbGRzLnB1c2goZmllbGQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGNoaWxkIGluc3RhbmNlb2YgQVNUTWV0aG9kTm9kZSkge1xuXHRcdFx0XHRjb25zdCBtZXRob2QgPSBuZXcgQ2xhc3NNZXRob2REZWZpbml0aW9uKFxuXHRcdFx0XHRcdGNoaWxkLm5hbWUsXG5cdFx0XHRcdFx0Y2hpbGQucGFyYW1ldGVycyxcblx0XHRcdFx0XHRjaGlsZC5yZXR1cm5UeXBlLFxuXHRcdFx0XHRcdGNoaWxkLm1vZGlmaWVycyxcblx0XHRcdFx0XHRjaGlsZC5jaGlsZHJlblxuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAobWV0aG9kLmlzQ29uc3RydWN0b3IpIHtcblx0XHRcdFx0XHRjb25zdHJ1Y3Rvck1ldGhvZCA9IG1ldGhvZDtcblx0XHRcdFx0fSBlbHNlIGlmIChtZXRob2QubW9kaWZpZXJzLnN0YXRpYykge1xuXHRcdFx0XHRcdHN0YXRpY01ldGhvZHNbbWV0aG9kLm5hbWVdID0gbWV0aG9kO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGluc3RhbmNlTWV0aG9kc1ttZXRob2QubmFtZV0gPSBtZXRob2Q7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93UnVudGltZUVycm9yKGBVbmhhbmRsZWQgbm9kZSAke2NoaWxkLnR5cGV9LmApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgQ2xhc3NEZWZpbml0aW9uKFxuXHRcdFx0bm9kZSxcblx0XHRcdG5vZGUuc3VwZXJDbGFzcz8ubmFtZSB8fCBudWxsLFxuXHRcdFx0bm9kZS5uYW1lLFxuXHRcdFx0aW5zdGFuY2VGaWVsZHMsXG5cdFx0XHRpbnN0YW5jZU1ldGhvZHMsXG5cdFx0XHRzdGF0aWNGaWVsZHMsXG5cdFx0XHRzdGF0aWNNZXRob2RzLFxuXHRcdFx0Y29uc3RydWN0b3JNZXRob2Rcblx0XHQpO1xuXHR9XG5cblx0ZmluZE1ldGhvZE5vZGUobmFtZTogc3RyaW5nKTogQVNUTWV0aG9kTm9kZSB7XG5cdFx0Y29uc3Qgbm9kZSA9IHRoaXMubm9kZVxuXHRcdCAgICAgICAgICAgICAgICAgLmNoaWxkcmVuXG5cdFx0ICAgICAgICAgICAgICAgICAuZmluZChub2RlID0+IG5vZGUubmFtZSA9PT0gbmFtZSk7XG5cblx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVE1ldGhvZE5vZGUpIHtcblx0XHRcdHJldHVybiBub2RlO1xuXHRcdH1cblxuXHRcdHRocm93UnVudGltZUVycm9yKGBNZXRob2QgJHtuYW1lfSBub3QgZm91bmQgaW4gY2xhc3MgJHt0aGlzLm5hbWV9LmApO1xuXHR9XG5cblx0ZmluZEluc3RhbmNlRmllbGREZWZpbml0aW9uKG5hbWU6IHN0cmluZyk6IENsYXNzRmllbGREZWZpbml0aW9uIHtcblx0XHRjb25zdCBmaWVsZERlZmluaXRpb246IENsYXNzRmllbGREZWZpbml0aW9uIHwgdW5kZWZpbmVkID0gdGhpcy5pbnN0YW5jZUZpZWxkc1xuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoKGZpZWxkOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbik6IGJvb2xlYW4gPT4gZmllbGQubmFtZSA9PT0gbmFtZSk7XG5cblx0XHRpZiAoZmllbGREZWZpbml0aW9uIGluc3RhbmNlb2YgQ2xhc3NGaWVsZERlZmluaXRpb24pIHtcblx0XHRcdHJldHVybiBmaWVsZERlZmluaXRpb247XG5cdFx0fVxuXG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYEZpZWxkICR7bmFtZX0gbm90IGZvdW5kIGluIGNsYXNzICR7dGhpcy5uYW1lfS5gKTtcblx0fVxuXG5cdGNvbnN0cnVjdEVtcHR5SW5zdGFuY2UoKTogSW5zdGFuY2Uge1xuXHRcdHJldHVybiBuZXcgSW5zdGFuY2UodGhpcyk7XG5cdH1cblxuXHRjb25zdHJ1Y3ROYXRpdmVJbnN0YW5jZShhcmdzOiBhbnlbXSA9IFtdKTogSW5zdGFuY2Uge1xuXHRcdGNvbnN0IGluc3RhbmNlOiBJbnN0YW5jZSA9IHRoaXMuY29uc3RydWN0RW1wdHlJbnN0YW5jZSgpO1xuXHRcdGluc3RhbmNlLl9fbmF0aXZlSW5zdGFuY2UgPSBuZXcgdGhpcy5uYXRpdmVJbnN0YW5jZSguLi5hcmdzKTtcblx0XHRyZXR1cm4gaW5zdGFuY2U7XG5cdH1cblxuXHRjb25zdHJ1Y3ROZXdJbnN0YW5jZVdpdGhvdXRBcmd1bWVudHMob2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiBJbnN0YW5jZSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0TmV3SW5zdGFuY2UoW10sIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG5cdH1cblxuXHRjb25zdHJ1Y3ROZXdJbnN0YW5jZShhcmdzOiBBU1ROb2RlW10sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogSW5zdGFuY2Uge1xuXHRcdGNvbnN0IG5ld05vZGUgPSBuZXcgQVNUTmV3Tm9kZShhcmdzLCBuZXcgQVNUVHlwZU5vZGUoQVNUVHlwZU5vZGUuS0lORF9TSU1QTEUsIHRoaXMubmFtZSkpO1xuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdEluc3RhbmNlQnlOZXdOb2RlKG5ld05vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG5cdH1cblxuXHRjb25zdHJ1Y3RJbnN0YW5jZUJ5TmV3Tm9kZShleHByOiBBU1ROZXdOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IEluc3RhbmNlIHtcblx0XHRjb25zdCBpbnN0YW5jZTogSW5zdGFuY2UgPSB0aGlzLmNvbnN0cnVjdEVtcHR5SW5zdGFuY2UoKTtcblxuXHRcdG9iamVjdFJlZ2lzdHJ5Lmluc3RhbmNlcy5yZWdpc3RlcihpbnN0YW5jZSk7XG5cblx0XHRpbnN0YW5jZS5pbml0aWFsaXplSW5zdGFuY2VGaWVsZHMob2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcblxuXHRcdGlmICghdGhpcy5jb25zdHJ1Y3Rvck1ldGhvZCkge1xuXHRcdFx0cmV0dXJuIGluc3RhbmNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNvbnN0cnVjdG9yOiBDbGFzc01ldGhvZERlZmluaXRpb24gPSB0aGlzLmNvbnN0cnVjdG9yTWV0aG9kO1xuXHRcdGNvbnN0IGNvbnN0cnVjdG9yRW52ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblxuXHRcdGNvbnN0IGNvbnN0cnVjdG9yQXJncyA9IGV2YWxNZXRob2RBcmd1bWVudHMoXG5cdFx0XHRleHByLFxuXHRcdFx0Y29uc3RydWN0b3IucGFyYW1ldGVycyxcblx0XHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0ZW52aXJvbm1lbnQsXG5cdFx0XHRldmVudFBpcGVsaW5lLFxuXHRcdFx0aW5zdGFuY2Vcblx0XHQpO1xuXG5cdFx0Y29uc3RydWN0b3JFbnYuZGVmaW5lKEdSQU1NQVIuVEhJUywgaW5zdGFuY2UpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb25zdHJ1Y3RvckFyZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHBhcmFtZXRlcjogQVNUUGFyYW1ldGVyTm9kZSB8IHVuZGVmaW5lZCA9IGNvbnN0cnVjdG9yLnBhcmFtZXRlcnNbaV07XG5cdFx0XHRpZiAocGFyYW1ldGVyKSB7XG5cdFx0XHRcdGNvbnN0cnVjdG9yRW52LmRlZmluZShwYXJhbWV0ZXIubmFtZSwgY29uc3RydWN0b3JBcmdzW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIGNvbnN0cnVjdG9yLmNoaWxkcmVuKSB7XG5cdFx0XHRldmFsTm9kZShjaGlsZCwgb2JqZWN0UmVnaXN0cnksIGNvbnN0cnVjdG9yRW52LCBldmVudFBpcGVsaW5lLCBpbnN0YW5jZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGluc3RhbmNlO1xuXHR9XG5cblx0Y29uc3RydWN0TmF0aXZlSW5zdGFuY2VCeU5ld05vZGUoZXhwcjogQVNUTmV3Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiBJbnN0YW5jZSB7XG5cdFx0Y29uc3QgaW5zdGFuY2U6IEluc3RhbmNlID0gdGhpcy5jb25zdHJ1Y3RFbXB0eUluc3RhbmNlKCk7XG5cblx0XHRvYmplY3RSZWdpc3RyeS5pbnN0YW5jZXMucmVnaXN0ZXIoaW5zdGFuY2UpO1xuXG5cdFx0Y29uc3QgY29uc3RydWN0b3I6IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB8IG51bGwgPSB0aGlzLmNvbnN0cnVjdG9yTWV0aG9kO1xuXHRcdGNvbnN0IGNvbnN0cnVjdG9yRW52OiBFbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCk7XG5cblx0XHRjb25zdCBjb25zdHJ1Y3RvckFyZ3M6IGFueVtdID0gZXZhbE1ldGhvZEFyZ3VtZW50cyhcblx0XHRcdGV4cHIsXG5cdFx0XHRjb25zdHJ1Y3RvclxuXHRcdFx0XHQ/IGNvbnN0cnVjdG9yLnBhcmFtZXRlcnNcblx0XHRcdFx0OiBbXSxcblx0XHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0ZW52aXJvbm1lbnQsXG5cdFx0XHRldmVudFBpcGVsaW5lLFxuXHRcdFx0aW5zdGFuY2Vcblx0XHQpO1xuXG5cdFx0Y29uc3RydWN0b3JFbnYuZGVmaW5lKEdSQU1NQVIuVEhJUywgaW5zdGFuY2UpO1xuXG5cdFx0aWYgKHRoaXMubmF0aXZlSW5zdGFuY2UgPT09IG51bGwpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKCdDbGFzcyBoYXMgbm8gbmF0aXZlIGluc3RhbmNlJyk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbmF0aXZlSW5zdGFuY2UgPSBuZXcgdGhpcy5uYXRpdmVJbnN0YW5jZSguLi5jb25zdHJ1Y3RvckFyZ3MubWFwKGZyb21MeXJhVmFsdWUpKTtcblx0XHRpZiAobmF0aXZlSW5zdGFuY2UgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlID0gbmF0aXZlSW5zdGFuY2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGluc3RhbmNlO1xuXHR9XG5cblx0aW5pdGlhbGl6ZUluc3RhbmNlRmllbGRzKGluc3RhbmNlOiBJbnN0YW5jZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiB2b2lkIHtcblx0XHRpZiAoaW5zdGFuY2UuX19maWVsZHNJbml0aWFsaXplZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCByYXdWYWx1ZTtcblx0XHRmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMuaW5zdGFuY2VGaWVsZHMpIHtcblx0XHRcdHJhd1ZhbHVlID0gZmllbGQuaW5pdGlhbGl6ZXJcblx0XHRcdFx0PyBldmFsRXhwcmVzc2lvbihmaWVsZC5pbml0aWFsaXplciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKVxuXHRcdFx0XHQ6IG51bGw7XG5cblx0XHRcdGluc3RhbmNlLl9faW5zdGFuY2VGaWVsZHNbZmllbGQubmFtZV0gPSBjYXN0VmFsdWUocmF3VmFsdWUsIGZpZWxkLnR5cGUpO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMuc3RhdGljRmllbGRzKSB7XG5cdFx0XHRyYXdWYWx1ZSA9IGZpZWxkLmluaXRpYWxpemVyXG5cdFx0XHRcdD8gZXZhbEV4cHJlc3Npb24oZmllbGQuaW5pdGlhbGl6ZXIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSlcblx0XHRcdFx0OiBudWxsO1xuXG5cdFx0XHRpbnN0YW5jZS5fX3N0YXRpY0ZpZWxkc1tmaWVsZC5uYW1lXSA9IGNhc3RWYWx1ZShyYXdWYWx1ZSwgZmllbGQudHlwZSk7XG5cdFx0fVxuXG5cdFx0aW5zdGFuY2UuX19maWVsZHNJbml0aWFsaXplZCA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEludGVyZmFjZURlZmluaXRpb24ge1xuXHRub2RlOiBBU1RJbnRlcmZhY2VOb2RlO1xuXHRuYW1lOiBzdHJpbmc7XG5cdHN0YXRpY0ZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXTtcblx0aW5zdGFuY2VNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH07XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0aW50ZXJmYWNlTm9kZTogQVNUSW50ZXJmYWNlTm9kZSxcblx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0c3RhdGljRmllbGRzOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbltdLFxuXHRcdGluc3RhbmNlTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9LFxuXHQpIHtcblx0XHR0aGlzLm5vZGUgPSBpbnRlcmZhY2VOb2RlO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5zdGF0aWNGaWVsZHMgPSBzdGF0aWNGaWVsZHM7XG5cdFx0dGhpcy5pbnN0YW5jZU1ldGhvZHMgPSBpbnN0YW5jZU1ldGhvZHM7XG5cdH1cblxuXHRzdGF0aWMgZnJvbUFTVChub2RlOiBBU1RJbnRlcmZhY2VOb2RlKTogSW50ZXJmYWNlRGVmaW5pdGlvbiB7XG5cdFx0Y29uc3Qgc3RhdGljRmllbGRzOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbltdID0gW107XG5cdFx0Y29uc3QgaW5zdGFuY2VNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH0gPSB7fTtcblxuXHRcdGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuXHRcdFx0aWYgKGNoaWxkIGluc3RhbmNlb2YgQVNURmllbGROb2RlKSB7XG5cdFx0XHRcdGNvbnN0IGZpZWxkID0gbmV3IENsYXNzRmllbGREZWZpbml0aW9uKFxuXHRcdFx0XHRcdGNoaWxkLm5hbWUsXG5cdFx0XHRcdFx0Y2hpbGQuZmllbGRUeXBlXG5cdFx0XHRcdFx0XHQ/IGNoaWxkLmZpZWxkVHlwZS5uYW1lXG5cdFx0XHRcdFx0XHQ6IG51bGwsXG5cdFx0XHRcdFx0Y2hpbGQubW9kaWZpZXJzLFxuXHRcdFx0XHRcdGNoaWxkLmluaXQgPz8gbnVsbFxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdHN0YXRpY0ZpZWxkcy5wdXNoKGZpZWxkKTtcblx0XHRcdH0gZWxzZSBpZiAoY2hpbGQgaW5zdGFuY2VvZiBBU1RNZXRob2ROb2RlKSB7XG5cdFx0XHRcdGNvbnN0IG1ldGhvZCA9IG5ldyBDbGFzc01ldGhvZERlZmluaXRpb24oXG5cdFx0XHRcdFx0Y2hpbGQubmFtZSxcblx0XHRcdFx0XHRjaGlsZC5wYXJhbWV0ZXJzLFxuXHRcdFx0XHRcdGNoaWxkLnJldHVyblR5cGUsXG5cdFx0XHRcdFx0Y2hpbGQubW9kaWZpZXJzLFxuXHRcdFx0XHRcdGNoaWxkLmNoaWxkcmVuXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0aW5zdGFuY2VNZXRob2RzW21ldGhvZC5uYW1lXSA9IG1ldGhvZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93UnVudGltZUVycm9yKGBVbmhhbmRsZWQgbm9kZSAke2NoaWxkLnR5cGV9LmApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgSW50ZXJmYWNlRGVmaW5pdGlvbihcblx0XHRcdG5vZGUsXG5cdFx0XHRub2RlLm5hbWUsXG5cdFx0XHRzdGF0aWNGaWVsZHMsXG5cdFx0XHRpbnN0YW5jZU1ldGhvZHNcblx0XHQpO1xuXHR9XG59XG5cbiIsCiAgICAiaW1wb3J0IHtQYXJzZXJ9IGZyb20gXCIuL3BhcnNlclwiO1xuaW1wb3J0IHtHUkFNTUFSLCBUb2tlbiwgVG9rZW5UeXBlLCBUWVBFX0VOVU19IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5pbXBvcnQge01vZGlmaWVycywgU3VwZXJDbGFzc30gZnJvbSBcIi4uL3J1bnRpbWUvb2JqZWN0c1wiO1xuaW1wb3J0IHtcblx0QVNUQW5ub3RhdGlvbk5vZGUsXG5cdEFTVEFycmF5Tm9kZSxcblx0QVNUQXNzaWdubWVudE5vZGUsXG5cdEFTVEJpbmFyeU5vZGUsXG5cdEFTVENhbGxOb2RlLFxuXHRBU1RDbGFzc05vZGUsXG5cdEFTVEVsc2VOb2RlLFxuXHRBU1RFeHByZXNzaW9uTm9kZSxcblx0QVNURmllbGROb2RlLFxuXHRBU1RGb3JlYWNoTm9kZSxcblx0QVNUSWZOb2RlLFxuXHRBU1RJbXBvcnROb2RlLFxuXHRBU1RJbmRleE5vZGUsXG5cdEFTVEludGVyZmFjZU5vZGUsXG5cdEFTVExhbWJkYU5vZGUsXG5cdEFTVE1hdGNoQ2FzZU5vZGUsXG5cdEFTVE1hdGNoTm9kZSxcblx0QVNUTWVtYmVyTm9kZSxcblx0QVNUTWV0aG9kTm9kZSxcblx0QVNUTmV3Tm9kZSxcblx0QVNUTm9kZSxcblx0QVNUTm9kZVR5cGUsXG5cdEFTVE9wZXJhdG9yTm9kZSxcblx0QVNUUGFyYW1ldGVyTm9kZSxcblx0QVNUUmV0dXJuTm9kZSxcblx0QVNUVGhlbk5vZGUsXG5cdEFTVFR5cGVOb2RlLFxuXHRBU1RVbmFyeU5vZGUsXG5cdEFTVFZhcmlhYmxlTm9kZSxcblx0QVNUVkRvbUV4cHJlc3Npb25Ob2RlLFxuXHRBU1RWRG9tTm9kZSxcblx0QVNUVkRvbVRleHROb2RlXG59IGZyb20gXCIuLi9hc3RcIjtcbmltcG9ydCB7dGhyb3dQYXJzZXJFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuaW1wb3J0IHtzcGFuRnJvbX0gZnJvbSBcIi4vc291cmNlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNaXhlZFR5cGUoKTogQVNUVHlwZU5vZGUge1xuXHRyZXR1cm4gbmV3IEFTVFR5cGVOb2RlKEFTVFR5cGVOb2RlLktJTkRfU0lNUExFLCBUWVBFX0VOVU0uTUlYRUQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUeXBlKHBhcnNlcjogUGFyc2VyKTogQVNUVHlwZU5vZGUge1xuXHRsZXQgdHlwZTtcblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKSB7XG5cdFx0dHlwZSA9IHBhcnNlTGFtYmRhVHlwZShwYXJzZXIpO1xuXHR9IGVsc2Uge1xuXHRcdHR5cGUgPSBwYXJzZVNpbXBsZU9yR2VuZXJpY1R5cGUocGFyc2VyKTtcblx0fVxuXG5cdGlmIChwYXJzZXIuY29uc3VtZUlmT3BlcmF0b3IoR1JBTU1BUi5RVUVTVElPTl9NQVJLKSkge1xuXHRcdHR5cGUubnVsbGFibGUgPSB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVR5cGVQYXJhbWV0ZXJzKHBhcnNlcjogUGFyc2VyKTogc3RyaW5nW10ge1xuXHRjb25zdCBwYXJhbWV0ZXJzID0gW107XG5cblx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuTEVTU19USEFOKTtcblxuXHRkbyB7XG5cdFx0Y29uc3QgbmFtZSA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCkudmFsdWU7XG5cdFx0cGFyYW1ldGVycy5wdXNoKG5hbWUpO1xuXG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQ09NTUEpIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRwYXJzZXIubmV4dCgpO1xuXHR9IHdoaWxlICh0cnVlKTtcblxuXHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5HUkVBVEVSX1RIQU4pO1xuXG5cdHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTaW1wbGVPckdlbmVyaWNUeXBlKHBhcnNlcjogUGFyc2VyKTogQVNUVHlwZU5vZGUge1xuXHRjb25zdCBuYW1lVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXHRjb25zdCBub2RlID0gbmV3IEFTVFR5cGVOb2RlKEFTVFR5cGVOb2RlLktJTkRfU0lNUExFLCBuYW1lVG9rZW4udmFsdWUpO1xuXG5cdGlmIChwYXJzZXIuY29uc3VtZUlmT3BlcmF0b3IoR1JBTU1BUi5MRVNTX1RIQU4pKSB7XG5cblx0XHRub2RlLmtpbmQgPSBBU1RUeXBlTm9kZS5LSU5EX0dFTkVSSUM7XG5cblx0XHRkbyB7XG5cdFx0XHRub2RlLnR5cGVBcmd1bWVudHMucHVzaChwYXJzZVR5cGUocGFyc2VyKSk7XG5cdFx0fSB3aGlsZSAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKTtcblxuXHRcdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkdSRUFURVJfVEhBTik7XG5cdH1cblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTGFtYmRhVHlwZShwYXJzZXI6IFBhcnNlcik6IEFTVFR5cGVOb2RlIHtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RUeXBlTm9kZShBU1RUeXBlTm9kZS5LSU5EX0xBTUJEQSwgJ2xhbWJkYScpO1xuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pO1xuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKSB7XG5cdFx0ZG8ge1xuXHRcdFx0bm9kZS5wYXJhbWV0ZXJUeXBlcy5wdXNoKHBhcnNlVHlwZShwYXJzZXIpKTtcblx0XHR9IHdoaWxlIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5BUlJPVyk7XG5cblx0bm9kZS5yZXR1cm5UeXBlID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVByb2dyYW0ocGFyc2VyOiBQYXJzZXIpOiBBU1ROb2RlIHtcblx0Y29uc3QgY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdO1xuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS50eXBlICE9PSBUb2tlblR5cGUuRU9GKSB7XG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLkNPTU1FTlQpIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IG5vZGU6IEFTVE5vZGUgfCBudWxsID0gcGFyc2VTdGF0ZW1lbnQocGFyc2VyKTtcblx0XHRcdGlmIChub2RlKSB7XG5cdFx0XHRcdGNoaWxkcmVuLnB1c2gobm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5QUk9HUkFNLCBjaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVN0YXRlbWVudChwYXJzZXI6IFBhcnNlcik6IEFTVE5vZGUgfCBudWxsIHtcblx0aWYgKHBhcnNlci5jb25zdW1lSWZDb21tZW50KCkpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHN3aXRjaCAocGFyc2VyLnBlZWsoKS52YWx1ZSkge1xuXHRcdGNhc2UgR1JBTU1BUi5JTVBPUlQ6IHtcblx0XHRcdHJldHVybiBwYXJzZUltcG9ydChwYXJzZXIpO1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuT1BFTjpcblx0XHRjYXNlIEdSQU1NQVIuQ0xBU1M6IHtcblx0XHRcdHJldHVybiBwYXJzZUNsYXNzRGVjbGFyYXRpb24ocGFyc2VyKTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLklOVEVSRkFDRToge1xuXHRcdFx0cmV0dXJuIHBhcnNlSW50ZXJmYWNlRGVjbGFyYXRpb24ocGFyc2VyKTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLlJFVFVSTjoge1xuXHRcdFx0cmV0dXJuIHBhcnNlUmV0dXJuU3RhdGVtZW50KHBhcnNlcik7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5MRVQ6IHtcblx0XHRcdHJldHVybiBwYXJzZVZhcmlhYmxlRGVjbGFyYXRpb24ocGFyc2VyKTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLklGOiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VJZkRlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5NQVRDSDoge1xuXHRcdFx0cmV0dXJuIHBhcnNlTWF0Y2hEZWNsYXJhdGlvbihwYXJzZXIpO1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuRk9SRUFDSDoge1xuXHRcdFx0cmV0dXJuIHBhcnNlRm9yZWFjaERlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0fVxuXHRcdGRlZmF1bHQ6IHtcblx0XHRcdHJldHVybiBwYXJzZUV4cHJlc3Npb25TdGF0ZW1lbnQocGFyc2VyKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmV0dXJuU3RhdGVtZW50KHBhcnNlcjogUGFyc2VyKTogQVNUUmV0dXJuTm9kZSB7XG5cdHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuUkVUVVJOKTtcblxuXHRsZXQgYXJndW1lbnQgPSBudWxsO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5TRU1JQ09MT04pIHtcblx0XHRhcmd1bWVudCA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuU0VNSUNPTE9OKTtcblxuXHRyZXR1cm4gbmV3IEFTVFJldHVybk5vZGUoYXJndW1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJbXBvcnQocGFyc2VyOiBQYXJzZXIpOiBBU1RJbXBvcnROb2RlIHtcblx0cGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5JTVBPUlQpO1xuXG5cdGxldCBuYW1lcyA9IFtdO1xuXHRsZXQgZnJvbSA9IG51bGw7XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkJSQUNFX09QRU4pIHtcblx0XHRuYW1lcyA9IHBhcnNlSW1wb3J0TGlzdChwYXJzZXIpO1xuXHRcdHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuRlJPTSk7XG5cdFx0ZnJvbSA9IHBhcnNlci5leHBlY3RTdHJpbmcoKS52YWx1ZTtcblx0fSBlbHNlIHtcblx0XHRuYW1lcy5wdXNoKHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCkudmFsdWUpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuU0VNSUNPTE9OKTtcblxuXHRyZXR1cm4gbmV3IEFTVEltcG9ydE5vZGUobmFtZXMsIGZyb20pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJbXBvcnRMaXN0KHBhcnNlcjogUGFyc2VyKTogc3RyaW5nW10ge1xuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9PUEVOKTtcblxuXHRjb25zdCBuYW1lczogc3RyaW5nW10gPSBbXTtcblxuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdGNvbnN0IG5hbWVUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cblx0XHRuYW1lcy5wdXNoKG5hbWVUb2tlbi52YWx1ZSk7XG5cblx0XHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRicmVhaztcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX0NMT1NFKTtcblxuXHRyZXR1cm4gbmFtZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNsYXNzRGVjbGFyYXRpb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RDbGFzc05vZGUge1xuXHRjb25zdCBhbm5vdGF0aW9ucyA9IHBhcnNlQW5ub3RhdGlvbnMocGFyc2VyKTtcblx0Y29uc3QgbW9kaWZpZXJzID0gcGFyc2VNb2RpZmllcnMocGFyc2VyLCBbR1JBTU1BUi5PUEVOXSk7XG5cblx0Y29uc3QgY2xhc3NUb2tlbiA9IHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuQ0xBU1MpO1xuXHRjb25zdCBuYW1lVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXG5cdGxldCB0eXBlUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuTEVTU19USEFOKSB7XG5cdFx0dHlwZVBhcmFtZXRlcnMgPSBwYXJzZVR5cGVQYXJhbWV0ZXJzKHBhcnNlcik7XG5cdH1cblxuXHRsZXQgc3VwZXJDbGFzcyA9IG51bGw7XG5cdGlmIChwYXJzZXIuY29uc3VtZUlmS2V5d29yZChHUkFNTUFSLkVYVEVORFMpKSB7XG5cdFx0c3VwZXJDbGFzcyA9IG5ldyBTdXBlckNsYXNzKFxuXHRcdFx0QVNUTm9kZVR5cGUuSURFTlRJRklFUixcblx0XHRcdHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCkudmFsdWVcblx0XHQpO1xuXHR9XG5cblx0bGV0IGltcGxlbWVudHNJbnRlcmZhY2VzID0gW107XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLklNUExFTUVOVFMpIHtcblx0XHRwYXJzZXIubmV4dCgpO1xuXG5cdFx0ZG8ge1xuXHRcdFx0Y29uc3QgaW50ZXJmYWNlVHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHRcdFx0aW1wbGVtZW50c0ludGVyZmFjZXMucHVzaChpbnRlcmZhY2VUeXBlKTtcblx0XHR9IHdoaWxlIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfT1BFTik7XG5cblx0Y29uc3QgY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdO1xuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5CUkFDRV9DTE9TRSkge1xuXHRcdGlmIChwYXJzZXIucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5DT01NRU5UKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbWVtYmVyOiBBU1ROb2RlIHwgbnVsbCA9IHBhcnNlQ2xhc3NNZW1iZXIocGFyc2VyKTtcblx0XHRpZiAobWVtYmVyID09PSBudWxsKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y2hpbGRyZW4ucHVzaChtZW1iZXIpO1xuXHR9XG5cblx0Y29uc3QgYnJhY2VDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfQ0xPU0UpO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUQ2xhc3NOb2RlKFxuXHRcdG5hbWVUb2tlbi52YWx1ZSxcblx0XHRhbm5vdGF0aW9ucyxcblx0XHRtb2RpZmllcnMsXG5cdFx0dHlwZVBhcmFtZXRlcnMsXG5cdFx0aW1wbGVtZW50c0ludGVyZmFjZXMsXG5cdFx0c3VwZXJDbGFzcyxcblx0XHRjaGlsZHJlblxuXHQpO1xuXG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKGNsYXNzVG9rZW4sIGJyYWNlQ2xvc2VUb2tlbik7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJbnRlcmZhY2VEZWNsYXJhdGlvbihwYXJzZXI6IFBhcnNlcik6IEFTVEludGVyZmFjZU5vZGUge1xuXHRjb25zdCBhbm5vdGF0aW9ucyA9IHBhcnNlQW5ub3RhdGlvbnMocGFyc2VyKTtcblx0Y29uc3QgbW9kaWZpZXJzID0gcGFyc2VNb2RpZmllcnMocGFyc2VyLCBbXSk7IC8vIGludGVyZmFjZXMgc2luZCBpbXBsaXppdCBwdWJsaWNcblxuXHRjb25zdCBpbnRlcmZhY2VUb2tlbiA9IHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuSU5URVJGQUNFKTtcblx0Y29uc3QgbmFtZVRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblxuXHRsZXQgdHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdID0gW107XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkxFU1NfVEhBTikge1xuXHRcdHR5cGVQYXJhbWV0ZXJzID0gcGFyc2VUeXBlUGFyYW1ldGVycyhwYXJzZXIpO1xuXHR9XG5cblx0bGV0IGV4dGVuZHNJbnRlcmZhY2VzID0gW107XG5cdGlmIChwYXJzZXIuY29uc3VtZUlmS2V5d29yZChHUkFNTUFSLkVYVEVORFMpKSB7XG5cdFx0ZG8ge1xuXHRcdFx0ZXh0ZW5kc0ludGVyZmFjZXMucHVzaChwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpLnZhbHVlKTtcblx0XHR9IHdoaWxlIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfT1BFTik7XG5cblx0Y29uc3QgY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdO1xuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5CUkFDRV9DTE9TRSkge1xuXHRcdGlmIChwYXJzZXIuY29uc3VtZUlmQ29tbWVudCgpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBtZW1iZXIgPSBwYXJzZUNsYXNzTWVtYmVyKHBhcnNlcik7XG5cdFx0aWYgKG1lbWJlciA9PT0gbnVsbCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKG1lbWJlciBpbnN0YW5jZW9mIEFTVEZpZWxkTm9kZSAmJiAhbWVtYmVyLm1vZGlmaWVycy5zdGF0aWMpIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoJ0ludGVyZmFjZSBmaWVsZHMgbXVzdCBiZSBzdGF0aWMuJyk7XG5cdFx0fVxuXG5cdFx0aWYgKG1lbWJlciBpbnN0YW5jZW9mIEFTVE1ldGhvZE5vZGUgJiYgbWVtYmVyLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoJ0ludGVyZmFjZSBtZXRob2RzIG11c3Qgbm90IGhhdmUgYSBib2R5LicpO1xuXHRcdH1cblxuXHRcdGNoaWxkcmVuLnB1c2gobWVtYmVyKTtcblx0fVxuXG5cdGNvbnN0IGJyYWNlQ2xvc2VUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX0NMT1NFKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVEludGVyZmFjZU5vZGUoXG5cdFx0bmFtZVRva2VuLnZhbHVlLFxuXHRcdGFubm90YXRpb25zLFxuXHRcdG1vZGlmaWVycyxcblx0XHR0eXBlUGFyYW1ldGVycyxcblx0XHRleHRlbmRzSW50ZXJmYWNlcyxcblx0XHRjaGlsZHJlblxuXHQpO1xuXG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKGludGVyZmFjZVRva2VuLCBicmFjZUNsb3NlVG9rZW4pO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQW5ub3RhdGlvbnMocGFyc2VyOiBQYXJzZXIpOiBBU1RBbm5vdGF0aW9uTm9kZVtdIHtcblx0Y29uc3QgYW5ub3RhdGlvbnMgPSBbXTtcblxuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuQU5OT1RBVElPTikge1xuXHRcdGFubm90YXRpb25zLnB1c2gocGFyc2VBbm5vdGF0aW9uKHBhcnNlcikpO1xuXHR9XG5cblx0cmV0dXJuIGFubm90YXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBbm5vdGF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUQW5ub3RhdGlvbk5vZGUge1xuXHRjb25zdCB0b2tlbiA9IHBhcnNlci5leHBlY3RBbm5vdGF0aW9uKCk7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUQW5ub3RhdGlvbk5vZGUodG9rZW4udmFsdWUpO1xuXG5cdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKSkge1xuXHRcdHdoaWxlIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKSB7XG5cdFx0XHRjb25zdCBrZXkgPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpLnZhbHVlO1xuXHRcdFx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuQVNTSUdOKTtcblxuXHRcdFx0Y29uc3QgdmFsdWUgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0XHRcdG5vZGUucHJvcGVydGllcy5zZXQoa2V5LCB2YWx1ZSk7XG5cblx0XHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkNPTU1BKSB7XG5cdFx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXHR9XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU1vZGlmaWVycyhwYXJzZXI6IFBhcnNlciwgYWxsb3dlZDogc3RyaW5nW10pOiBNb2RpZmllcnMge1xuXHRjb25zdCBtb2RpZmllcnM6IHsgW2luZGV4OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcblxuXHRhbGxvd2VkLmZvckVhY2gobW9kaWZpZXIgPT4gbW9kaWZpZXJzW21vZGlmaWVyXSA9IGZhbHNlKTtcblxuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuS0VZV09SRCAmJiBhbGxvd2VkLmluY2x1ZGVzKHBhcnNlci5wZWVrKCkudmFsdWUpKSB7XG5cdFx0Y29uc3QgbW9kaWZpZXIgPSBwYXJzZXIubmV4dCgpLnZhbHVlO1xuXG5cdFx0aWYgKG1vZGlmaWVyc1ttb2RpZmllcl0pIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoYER1cGxpY2F0ZSBtb2RpZmllcjogJHttb2RpZmllcn1gKTtcblx0XHR9XG5cblx0XHRtb2RpZmllcnNbbW9kaWZpZXJdID0gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBuZXcgTW9kaWZpZXJzKG1vZGlmaWVycyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBhcmFtZXRlcnMocGFyc2VyOiBQYXJzZXIpOiBBU1RQYXJhbWV0ZXJOb2RlW10ge1xuXHRjb25zdCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10gPSBbXTtcblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSkge1xuXHRcdHJldHVybiBwYXJhbWV0ZXJzO1xuXHR9XG5cblx0ZG8ge1xuXHRcdGNvbnN0IG5hbWVUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cdFx0bGV0IHR5cGUgPSBudWxsO1xuXHRcdGxldCBkZWZhdWx0VmFsdWUgPSBudWxsO1xuXG5cdFx0bGV0IHR5cGVUb2tlbiA9IG51bGw7XG5cdFx0bGV0IGRlZmF1bHRWYWx1ZVRva2VuID0gbnVsbDtcblxuXHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkNPTE9OKSB7XG5cdFx0XHR0eXBlVG9rZW4gPSBwYXJzZXIubmV4dCgpO1xuXHRcdFx0dHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHRcdH1cblxuXHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkFTU0lHTikge1xuXHRcdFx0ZGVmYXVsdFZhbHVlVG9rZW4gPSBwYXJzZXIubmV4dCgpO1xuXHRcdFx0ZGVmYXVsdFZhbHVlID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RQYXJhbWV0ZXJOb2RlKG5hbWVUb2tlbi52YWx1ZSwgdHlwZSwgZGVmYXVsdFZhbHVlKTtcblx0XHRub2RlLnNwYW4gPSBzcGFuRnJvbSh0eXBlVG9rZW4gfHwgbmFtZVRva2VuLCBkZWZhdWx0VmFsdWVUb2tlbiB8fCBuYW1lVG9rZW4pO1xuXG5cdFx0cGFyYW1ldGVycy5wdXNoKG5vZGUpO1xuXHR9IHdoaWxlIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpO1xuXG5cdHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDbGFzc01lbWJlcihwYXJzZXI6IFBhcnNlcik6IEFTVE5vZGUgfCBudWxsIHtcblx0Y29uc3Qgc3RhcnRUb2tlbjogVG9rZW4gPSBwYXJzZXIucGVlaygpO1xuXG5cdGNvbnN0IGFubm90YXRpb25zOiBBU1RBbm5vdGF0aW9uTm9kZVtdID0gcGFyc2VBbm5vdGF0aW9ucyhwYXJzZXIpO1xuXHRjb25zdCBtb2RpZmllcnM6IE1vZGlmaWVycyA9IHBhcnNlTW9kaWZpZXJzKFxuXHRcdHBhcnNlcixcblx0XHRbXG5cdFx0XHRHUkFNTUFSLlBVQkxJQyxcblx0XHRcdEdSQU1NQVIuUFJJVkFURSxcblx0XHRcdEdSQU1NQVIuU1RBVElDLFxuXHRcdFx0R1JBTU1BUi5SRUFET05MWVxuXHRcdF1cblx0KTtcblxuXHRpZiAocGFyc2VyLnBlZWtJcyhHUkFNTUFSLk9QRVJBVE9SKSkge1xuXHRcdHJldHVybiBwYXJzZU9wZXJhdG9yTWVtYmVyKHBhcnNlciwgc3RhcnRUb2tlbiwgYW5ub3RhdGlvbnMsIG1vZGlmaWVycyk7XG5cdH1cblxuXHRjb25zdCBuYW1lVG9rZW46IFRva2VuID0gcGFyc2VyLmV4cGVjdE9uZU9mKFtUb2tlblR5cGUuSURFTlRJRklFUiwgVG9rZW5UeXBlLktFWVdPUkRdKTtcblxuXHRsZXQgZmllbGRUeXBlOiBhbnkgPSBudWxsO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5DT0xPTikge1xuXHRcdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT0xPTikpIHtcblx0XHRcdGZpZWxkVHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHRcdH1cblx0fVxuXG5cdGxldCBpbml0OiBhbnkgPSBudWxsO1xuXHRpZiAocGFyc2VyLmNvbnN1bWVJZk9wZXJhdG9yKEdSQU1NQVIuQVNTSUdOKSkge1xuXHRcdGluaXQgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0fVxuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLlNFTUlDT0xPTikge1xuXHRcdGlmICghbW9kaWZpZXJzLnB1YmxpYyAmJiAhbW9kaWZpZXJzLnByaXZhdGUpIHtcblx0XHRcdG1vZGlmaWVycy5wcml2YXRlID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRjb25zdCBzZW1pY29sb25Ub2tlbjogVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5TRU1JQ09MT04pO1xuXG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RGaWVsZE5vZGUobmFtZVRva2VuLnZhbHVlLCBtb2RpZmllcnMsIGZpZWxkVHlwZSwgaW5pdCk7XG5cdFx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgc2VtaWNvbG9uVG9rZW4pO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0bGV0IHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5MRVNTX1RIQU4pIHtcblx0XHR0eXBlUGFyYW1ldGVycyA9IHBhcnNlVHlwZVBhcmFtZXRlcnMocGFyc2VyKTtcblx0fVxuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pIHtcblx0XHRpZiAoIW1vZGlmaWVycy5wdWJsaWMgJiYgIW1vZGlmaWVycy5wcml2YXRlKSB7XG5cdFx0XHRtb2RpZmllcnMucHVibGljID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKTtcblx0XHRjb25zdCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10gPSBwYXJzZVBhcmFtZXRlcnMocGFyc2VyKTtcblx0XHRjb25zdCBwYXJlbnRoZXNlc0Nsb3NlVG9rZW46IFRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXG5cdFx0bGV0IHJldHVyblR5cGU6IGFueSA9IG51bGw7XG5cdFx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTE9OKSkge1xuXHRcdFx0cmV0dXJuVHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNoaWxkcmVuOiBBU1ROb2RlW10gPSBwYXJzZUJsb2NrKHBhcnNlcik7XG5cblx0XHRjb25zdCBub2RlID0gbmV3IEFTVE1ldGhvZE5vZGUoXG5cdFx0XHRuYW1lVG9rZW4udmFsdWUsXG5cdFx0XHRuYW1lVG9rZW4udmFsdWUgPT09IEdSQU1NQVIuQ09OU1RSVUNUT1IgPyBBU1ROb2RlVHlwZS5DT05TVFJVQ1RPUiA6IEFTVE5vZGVUeXBlLk1FVEhPRCxcblx0XHRcdGFubm90YXRpb25zLFxuXHRcdFx0bW9kaWZpZXJzLFxuXHRcdFx0dHlwZVBhcmFtZXRlcnMsXG5cdFx0XHRwYXJhbWV0ZXJzLFxuXHRcdFx0cmV0dXJuVHlwZSxcblx0XHRcdGNoaWxkcmVuXG5cdFx0KTtcblxuXHRcdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIHBhcmVudGhlc2VzQ2xvc2VUb2tlbik7XG5cblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdHRocm93UGFyc2VyRXJyb3IoYEludmFsaWQgY2xhc3MgbWVtYmVyOiAke25hbWVUb2tlbi52YWx1ZX1gKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VPcGVyYXRvck1lbWJlcihwYXJzZXI6IFBhcnNlciwgc3RhcnRUb2tlbjogVG9rZW4sIGFubm90YXRpb25zOiBBU1RBbm5vdGF0aW9uTm9kZVtdLCBtb2RpZmllcnM6IE1vZGlmaWVycyk6IEFTVE9wZXJhdG9yTm9kZSB7XG5cblx0cGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5PUEVSQVRPUik7XG5cblx0bGV0IG9wZXJhdG9yVG9rZW46IFRva2VuO1xuXHR0cnkge1xuXHRcdG9wZXJhdG9yVG9rZW4gPSBwYXJzZXIuZXhwZWN0T3BlcmF0b3IoKTtcblxuXHR9IGNhdGNoIChlKSB7XG5cdFx0cGFyc2VyLnJld2luZCgpO1xuXHRcdHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCd1Jyk7XG5cdFx0b3BlcmF0b3JUb2tlbiA9IHBhcnNlci5leHBlY3RPcGVyYXRvcigpO1xuXHRcdG9wZXJhdG9yVG9rZW4udmFsdWUgPSAndScgKyBvcGVyYXRvclRva2VuLnZhbHVlO1xuXHR9XG5cblx0aWYgKCFtb2RpZmllcnMucHVibGljICYmICFtb2RpZmllcnMucHJpdmF0ZSkge1xuXHRcdG1vZGlmaWVycy5wdWJsaWMgPSB0cnVlO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTik7XG5cdGNvbnN0IHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSA9IHBhcnNlUGFyYW1ldGVycyhwYXJzZXIpO1xuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cblx0bGV0IHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbCA9IG51bGw7XG5cdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT0xPTikpIHtcblx0XHRyZXR1cm5UeXBlID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cdH1cblxuXHRjb25zdCBjaGlsZHJlbjogQVNUTm9kZVtdID0gcGFyc2VCbG9jayhwYXJzZXIpO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUT3BlcmF0b3JOb2RlKFxuXHRcdG9wZXJhdG9yVG9rZW4udmFsdWUsXG5cdFx0YW5ub3RhdGlvbnMsXG5cdFx0bW9kaWZpZXJzLFxuXHRcdFtdLFxuXHRcdHBhcmFtZXRlcnMsXG5cdFx0cmV0dXJuVHlwZSxcblx0XHRjaGlsZHJlblxuXHQpO1xuXG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIG9wZXJhdG9yVG9rZW4pO1xuXG5cdGlmICghQVNUT3BlcmF0b3JOb2RlLk9WRVJMT0FEQUJMRV9PUEVSQVRPUlMuaW5jbHVkZXMobm9kZS5vcGVyYXRvcikpIHtcblx0XHR0aHJvd1BhcnNlckVycm9yKGBPcGVyYXRvciAke25vZGUub3BlcmF0b3J9IGlzIG5vdCBvdmVybG9hZGFibGUuYCwgbm9kZS5zcGFuKVxuXHR9XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUJsb2NrKHBhcnNlcjogUGFyc2VyKTogQVNUTm9kZVtdIHtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuU0VNSUNPTE9OKSB7XG5cdFx0cGFyc2VyLm5leHQoKTtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9PUEVOKTtcblxuXHRjb25zdCBjaGlsZHJlbiA9IFtdO1xuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5CUkFDRV9DTE9TRSkge1xuXHRcdGlmIChwYXJzZXIucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5DT01NRU5UKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGNvbnN0IGNoaWxkOiBBU1ROb2RlIHwgbnVsbCA9IHBhcnNlU3RhdGVtZW50KHBhcnNlcik7XG5cdFx0aWYgKGNoaWxkKSB7XG5cdFx0XHRjaGlsZHJlbi5wdXNoKGNoaWxkKTtcblx0XHR9XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9DTE9TRSk7XG5cblx0cmV0dXJuIGNoaWxkcmVuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VWYXJpYWJsZURlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUVmFyaWFibGVOb2RlIHtcblx0Y29uc3QgbGV0VG9rZW4gPSBwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLkxFVCk7XG5cdGNvbnN0IG5hbWVUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cblx0bGV0IHR5cGVBbm5vdGF0aW9uID0gbnVsbDtcblx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTE9OKSkge1xuXHRcdHR5cGVBbm5vdGF0aW9uID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cdH1cblxuXHRsZXQgaW5pdCA9IG51bGw7XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkFTU0lHTikge1xuXHRcdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkFTU0lHTik7XG5cdFx0aW5pdCA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHR9XG5cblx0Y29uc3Qgc2VtaWNvbG9uVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5TRU1JQ09MT04pO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUVmFyaWFibGVOb2RlKG5hbWVUb2tlbi52YWx1ZSwgdHlwZUFubm90YXRpb24sIGluaXQpO1xuXHRub2RlLnNwYW4gPSBzcGFuRnJvbShsZXRUb2tlbiwgc2VtaWNvbG9uVG9rZW4pO1xuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJZkRlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUSWZOb2RlIHtcblx0Y29uc3Qgc3RhcnRUb2tlbiA9IHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuSUYpO1xuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pO1xuXHRjb25zdCBjb25kaXRpb24gPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0Y29uc3QgcGFyZW50aGVzZXNDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUSWZOb2RlKGNvbmRpdGlvbiwgbmV3IEFTVFRoZW5Ob2RlKHBhcnNlQmxvY2socGFyc2VyKSkpO1xuXG5cdGlmIChwYXJzZXIuY29uc3VtZUlmS2V5d29yZChHUkFNTUFSLkVMU0UpKSB7XG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuSUYpIHtcblx0XHRcdG5vZGUuZWxzZSA9IHBhcnNlSWZEZWNsYXJhdGlvbihwYXJzZXIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRub2RlLmVsc2UgPSBuZXcgQVNURWxzZU5vZGUocGFyc2VCbG9jayhwYXJzZXIpKTtcblx0XHR9XG5cdH1cblxuXHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBwYXJlbnRoZXNlc0Nsb3NlVG9rZW4pO1xuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VNYXRjaERlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUTWF0Y2hOb2RlIHtcblx0Y29uc3Qgc3RhcnRUb2tlbiA9IHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuTUFUQ0gpO1xuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKTtcblxuXHRjb25zdCBleHByZXNzaW9uID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9PUEVOKTtcblxuXHRjb25zdCBtYXRjaENhc2VzOiBBU1RNYXRjaENhc2VOb2RlW10gPSBbXTtcblx0bGV0IGRlZmF1bHRDYXNlOiBBU1RNYXRjaENhc2VOb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQlJBQ0VfQ0xPU0UpIHtcblx0XHRjb25zdCBtYXRjaENhc2U6IEFTVE1hdGNoQ2FzZU5vZGUgPSBwYXJzZU1hdGNoQ2FzZURlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0aWYgKG1hdGNoQ2FzZS50ZXN0ID09PSBudWxsKSB7XG5cdFx0XHRkZWZhdWx0Q2FzZSA9IG1hdGNoQ2FzZTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRtYXRjaENhc2VzLnB1c2gobWF0Y2hDYXNlKTtcblx0fVxuXG5cdGNvbnN0IGJyYWNlQ2xvc2VUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX0NMT1NFKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVE1hdGNoTm9kZShleHByZXNzaW9uLCBtYXRjaENhc2VzLCBkZWZhdWx0Q2FzZSk7XG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIGJyYWNlQ2xvc2VUb2tlbik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU1hdGNoQ2FzZURlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUTWF0Y2hDYXNlTm9kZSB7XG5cdGNvbnN0IGNhc2VOb2RlID0gbmV3IEFTVE1hdGNoQ2FzZU5vZGUoKTtcblxuXHRpZiAocGFyc2VyLmNvbnN1bWVJZktleXdvcmQoR1JBTU1BUi5ERUZBVUxUKSkge1xuXHRcdGNhc2VOb2RlLnRlc3QgPSBudWxsO1xuXHR9IGVsc2Uge1xuXHRcdGNhc2VOb2RlLnRlc3QgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkNPTE9OKTtcblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5CUkFDRV9PUEVOKSB7XG5cdFx0Y2FzZU5vZGUuY2hpbGRyZW4gPSBwYXJzZUJsb2NrKHBhcnNlcik7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3QgY2hpbGQ6IEFTVE5vZGUgfCBudWxsID0gcGFyc2VTdGF0ZW1lbnQocGFyc2VyKTtcblx0XHRpZiAoY2hpbGQpIHtcblx0XHRcdGNhc2VOb2RlLmNoaWxkcmVuLnB1c2goY2hpbGQpXG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGNhc2VOb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VGb3JlYWNoRGVjbGFyYXRpb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RGb3JlYWNoTm9kZSB7XG5cdGNvbnN0IHN0YXJ0VG9rZW4gPSBwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLkZPUkVBQ0gpO1xuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pO1xuXG5cdGNvbnN0IGl0ZXJhdG9yVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXHRjb25zdCBpdGVyYXRvciA9IGl0ZXJhdG9yVG9rZW4udmFsdWU7XG5cblx0cGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5JTik7XG5cblx0Y29uc3QgaXRlcmFibGUgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblxuXHRjb25zdCBwYXJlbnRoZXNlc0Nsb3NlVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RGb3JlYWNoTm9kZShpdGVyYXRvciwgaXRlcmFibGUsIHBhcnNlQmxvY2socGFyc2VyKSk7XG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIHBhcmVudGhlc2VzQ2xvc2VUb2tlbik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUFycmF5KHBhcnNlcjogUGFyc2VyKTogQVNUQXJyYXlOb2RlIHtcblx0Y29uc3Qgc3RhcnRUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX09QRU4pO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUQXJyYXlOb2RlKCk7XG5cblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfQ0xPU0UpIHtcblx0XHRkbyB7XG5cdFx0XHRub2RlLmVsZW1lbnRzLnB1c2gocGFyc2VFeHByZXNzaW9uKHBhcnNlcikpO1xuXHRcdH0gd2hpbGUgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSk7XG5cdH1cblxuXHRjb25zdCBicmFja2V0U3F1YXJlQ2xvc2VUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX0NMT1NFKTtcblxuXHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBicmFja2V0U3F1YXJlQ2xvc2VUb2tlbik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUxhbWJkYShwYXJzZXI6IFBhcnNlcik6IEFTVExhbWJkYU5vZGUge1xuXHRjb25zdCBzdGFydFRva2VuOiBUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX09QRU4pO1xuXG5cdGNvbnN0IHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSA9IFtdO1xuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5BUlJPVykge1xuXHRcdGNvbnN0IG5hbWU6IHN0cmluZyA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCkudmFsdWU7XG5cdFx0bGV0IHR5cGU6IGFueSA9IG51bGw7XG5cdFx0bGV0IGRlZmF1bHRWYWx1ZTogYW55ID0gbnVsbDtcblxuXHRcdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT0xPTikpIHtcblx0XHRcdHR5cGUgPSBwYXJzZVR5cGUocGFyc2VyKTtcblx0XHR9XG5cblx0XHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5BU1NJR04pIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0XHRkZWZhdWx0VmFsdWUgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0XHR9XG5cblx0XHRwYXJhbWV0ZXJzLnB1c2gobmV3IEFTVFBhcmFtZXRlck5vZGUobmFtZSwgdHlwZSwgZGVmYXVsdFZhbHVlKSk7XG5cblx0XHRwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSk7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5BUlJPVyk7XG5cblx0bGV0IHJldHVyblR5cGU6IEFTVFR5cGVOb2RlID0gY3JlYXRlTWl4ZWRUeXBlKCk7XG5cdGlmIChwYXJzZXIucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0cmV0dXJuVHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkNPTE9OKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm5UeXBlID0gY3JlYXRlTWl4ZWRUeXBlKCk7XG5cdFx0XHRwYXJzZXIucmV3aW5kKCk7XG5cdFx0fVxuXHR9XG5cblx0bGV0IGNoaWxkcmVuID0gW107XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkJSQUNFX09QRU4pIHtcblx0XHRjaGlsZHJlbiA9IHBhcnNlQmxvY2socGFyc2VyKTtcblx0fSBlbHNlIHtcblx0XHRjaGlsZHJlbi5wdXNoKHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpKTtcblx0fVxuXG5cdGNvbnN0IGJyYWNlQ2xvc2VUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX0NMT1NFKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVExhbWJkYU5vZGUocGFyYW1ldGVycywgcmV0dXJuVHlwZSwgY2hpbGRyZW4pO1xuXHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBicmFjZUNsb3NlVG9rZW4pO1xuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9va3NMaWtlTGFtYmRhKHBhcnNlcjogUGFyc2VyKTogYm9vbGVhbiB7XG5cdGNvbnN0IHN0YXJ0OiBudW1iZXIgPSBwYXJzZXIucG9zaXRpb24oKTtcblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5CUkFDRV9PUEVOKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cGFyc2VyLm5leHQoKTtcblxuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuSURFTlRJRklFUikge1xuXHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTE9OKSkge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHR9XG5cdFx0aWYgKCFwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGlzTGFtYmRhOiBib29sZWFuID0gcGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5BUlJPVztcblx0cGFyc2VyLnNlZWtBdChzdGFydClcblx0cmV0dXJuIGlzTGFtYmRhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VFeHByZXNzaW9uU3RhdGVtZW50KHBhcnNlcjogUGFyc2VyKTogQVNURXhwcmVzc2lvbk5vZGUge1xuXHRjb25zdCBleHByOiBBU1ROb2RlID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuU0VNSUNPTE9OKTtcblxuXHRyZXR1cm4gbmV3IEFTVEV4cHJlc3Npb25Ob2RlKGV4cHIpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUV4cHJlc3Npb24ocGFyc2VyOiBQYXJzZXIsIHByZWNlZGVuY2U6IG51bWJlciA9IDApOiBBU1ROb2RlIHtcblx0bGV0IGV4cHI6IEFTVE5vZGUgPSBwYXJzZVBvc3RmaXgocGFyc2VyLCBwYXJzZVVuYXJ5KHBhcnNlcikpO1xuXG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0Y29uc3QgdG9rZW46IFRva2VuID0gcGFyc2VyLnBlZWsoKTtcblx0XHRpZiAoIXRva2VuKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRsZXQgdG9rZW5QcmVjZWRlbmNlOiBudW1iZXIgPSBsb29rdXBQcmVjZWRlbmNlKHRva2VuKTtcblx0XHRpZiAodG9rZW5QcmVjZWRlbmNlIDwgcHJlY2VkZW5jZSkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLkFTU0lHTikge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHRcdGV4cHIgPSBuZXcgQVNUQXNzaWdubWVudE5vZGUoZXhwciwgcGFyc2VFeHByZXNzaW9uKHBhcnNlciwgdG9rZW5QcmVjZWRlbmNlKSk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoR1JBTU1BUi5NQVRIX09QRVJBVE9SUy5pbmNsdWRlcyh0b2tlbi52YWx1ZSlcblx0XHRcdHx8IEdSQU1NQVIuTE9HSUNfT1BFUkFUT1JTLmluY2x1ZGVzKHRva2VuLnZhbHVlKSkge1xuXHRcdFx0Y29uc3Qgc3RhcnRUb2tlbjogVG9rZW4gPSBwYXJzZXIubmV4dCgpO1xuXHRcdFx0Y29uc3QgcmlnaHQ6IEFTVE5vZGUgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyLCB0b2tlblByZWNlZGVuY2UgKyAxKTtcblx0XHRcdGNvbnN0IGVuZFRva2VuOiBUb2tlbiA9IHBhcnNlci5wZWVrKCk7XG5cblx0XHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUQmluYXJ5Tm9kZShleHByLCByaWdodCwgdG9rZW4udmFsdWUpO1xuXHRcdFx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgZW5kVG9rZW4pO1xuXHRcdFx0ZXhwciA9IG5vZGU7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRicmVhaztcblx0fVxuXG5cdHJldHVybiBleHByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VWRG9tRXhwcmVzc2lvbihwYXJzZXI6IFBhcnNlcik6IEFTVFZEb21Ob2RlIHtcblx0cGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5WRE9NKTtcblx0cmV0dXJuIHBhcnNlVkRvbUVsZW1lbnQocGFyc2VyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVkRvbUVsZW1lbnQocGFyc2VyOiBQYXJzZXIpOiBBU1RWRG9tTm9kZSB7XG5cdHBhcnNlci5jb25zdW1lSWZUZXh0KCk7XG5cblx0Y29uc3Qgc3RhcnRUb2tlbjogVG9rZW4gPSBwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5MRVNTX1RIQU4pO1xuXHRjb25zdCB0YWdUb2tlbjogVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXHRjb25zdCB0YWc6IHN0cmluZyA9IHRhZ1Rva2VuLnZhbHVlO1xuXG5cdHBhcnNlci5jb25zdW1lSWZUZXh0KCk7XG5cblx0Y29uc3QgcHJvcHMgPSBuZXcgTWFwPHN0cmluZywgQVNUTm9kZT4oKTtcblx0d2hpbGUgKHRydWUpIHtcblxuXHRcdGlmIChwYXJzZXIucGVla0lzKEdSQU1NQVIuR1JFQVRFUl9USEFOKSkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0aWYgKHBhcnNlci5wZWVrSXMoR1JBTU1BUi5YTUxfQ0xPU0VfVEFHKSkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbmFtZVRva2VuOiBUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cdFx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuQVNTSUdOKTtcblxuXHRcdGxldCB2YWx1ZTogQVNUTm9kZTtcblxuXHRcdGlmIChwYXJzZXIucGVla0lzKEdSQU1NQVIuQlJBQ0VfT1BFTikpIHtcblx0XHRcdGlmIChsb29rc0xpa2VMYW1iZGEocGFyc2VyKSkge1xuXHRcdFx0XHR2YWx1ZSA9IHBhcnNlTGFtYmRhKHBhcnNlcik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdFx0XHR2YWx1ZSA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHRcdFx0XHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9DTE9TRSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhbHVlID0gcGFyc2VQcmltYXJ5KHBhcnNlcik7XG5cdFx0fVxuXG5cdFx0cHJvcHMuc2V0KG5hbWVUb2tlbi52YWx1ZSwgdmFsdWUpO1xuXG5cdFx0cGFyc2VyLmNvbnN1bWVJZlRleHQoKTtcblx0fVxuXG5cdGlmIChwYXJzZXIucGVla0lzKEdSQU1NQVIuWE1MX0NMT1NFX1RBRykpIHtcblx0XHRwYXJzZXIubmV4dCgpO1xuXG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RWRG9tTm9kZSh0YWcsIHByb3BzLCBbXSk7XG5cdFx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgcGFyc2VyLnBlZWsoKSk7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5HUkVBVEVSX1RIQU4pO1xuXG5cdGNvbnN0IGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXTtcblx0d2hpbGUgKCFwYXJzZXIucGVla0lzKEdSQU1NQVIuWE1MX09QRU5fQ0xPU0VfVEFHKSkge1xuXG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuTEVTU19USEFOKSB7XG5cdFx0XHRjaGlsZHJlbi5wdXNoKHBhcnNlVkRvbUVsZW1lbnQocGFyc2VyKSk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjaGlsZHJlbi5wdXNoKHBhcnNlVkRvbVRleHQocGFyc2VyKSk7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5YTUxfT1BFTl9DTE9TRV9UQUcpO1xuXHRwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5HUkVBVEVSX1RIQU4pO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUVkRvbU5vZGUodGFnLCBwcm9wcywgY2hpbGRyZW4pO1xuXHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBwYXJzZXIucGVlaygpKTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVZEb21UZXh0KHBhcnNlcjogUGFyc2VyKTogQVNUVkRvbVRleHROb2RlIHwgQVNUVkRvbUV4cHJlc3Npb25Ob2RlIHtcblx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX09QRU4pKSB7XG5cdFx0Y29uc3QgZXhwcmVzc2lvbjogQVNUTm9kZSA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHRcdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX0NMT1NFKTtcblx0XHRyZXR1cm4gbmV3IEFTVFZEb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uKTtcblx0fVxuXG5cdGNvbnN0IHRva2VuOiBUb2tlbiA9IHBhcnNlci5leHBlY3RPbmVPZihcblx0XHRbXG5cdFx0XHRUb2tlblR5cGUuSURFTlRJRklFUixcblx0XHRcdFRva2VuVHlwZS5PUEVSQVRPUixcblx0XHRcdFRva2VuVHlwZS5LRVlXT1JELFxuXHRcdFx0VG9rZW5UeXBlLlBVTkNUVUFUSU9OLFxuXHRcdFx0VG9rZW5UeXBlLk5VTUJFUixcblx0XHRcdFRva2VuVHlwZS5URVhUXG5cdFx0XVxuXHQpO1xuXHRjb25zdCBub2RlID0gbmV3IEFTVFZEb21UZXh0Tm9kZSh0b2tlbi52YWx1ZSk7XG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHRva2VuLCB0b2tlbik7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBcmd1bWVudHMocGFyc2VyOiBQYXJzZXIpOiBBU1ROb2RlW10ge1xuXHRjb25zdCBhcmdzOiBBU1ROb2RlW10gPSBbXTtcblxuXHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpKSB7XG5cdFx0cmV0dXJuIGFyZ3M7XG5cdH1cblxuXHRhcmdzLnB1c2gocGFyc2VFeHByZXNzaW9uKHBhcnNlcikpO1xuXG5cdHdoaWxlIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpIHtcblx0XHRhcmdzLnB1c2gocGFyc2VFeHByZXNzaW9uKHBhcnNlcikpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXHRyZXR1cm4gYXJncztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVW5hcnkocGFyc2VyOiBQYXJzZXIpOiBBU1ROb2RlIHwgQVNUVW5hcnlOb2RlIHtcblx0Y29uc3QgdG9rZW46IFRva2VuID0gcGFyc2VyLnBlZWsoKTtcblxuXHRpZiAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLktFWVdPUkQgJiYgdG9rZW4udmFsdWUgPT09IEdSQU1NQVIuVkRPTSkge1xuXHRcdHJldHVybiBwYXJzZVZEb21FeHByZXNzaW9uKHBhcnNlcik7XG5cdH1cblxuXHRzd2l0Y2ggKHRva2VuLnZhbHVlKSB7XG5cdFx0Y2FzZSBHUkFNTUFSLkVYQ0xBTUFUSU9OX01BUks6XG5cdFx0Y2FzZSBHUkFNTUFSLk1JTlVTOlxuXHRcdGNhc2UgR1JBTU1BUi5QTFVTOiB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXG5cdFx0XHRjb25zdCBhcmd1bWVudDogQVNUTm9kZSB8IEFTVFVuYXJ5Tm9kZSA9IHBhcnNlVW5hcnkocGFyc2VyKTtcblxuXHRcdFx0cmV0dXJuIG5ldyBBU1RVbmFyeU5vZGUodG9rZW4udmFsdWUsIGFyZ3VtZW50KTtcblx0XHR9XG5cdFx0ZGVmYXVsdDoge1xuXHRcdFx0cmV0dXJuIHBhcnNlUHJpbWFyeShwYXJzZXIpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQcmltYXJ5KHBhcnNlcjogUGFyc2VyKTogQVNUTm9kZSB7XG5cdGlmIChsb29rc0xpa2VMYW1iZGEocGFyc2VyKSkge1xuXHRcdHJldHVybiBwYXJzZUxhbWJkYShwYXJzZXIpO1xuXHR9XG5cblx0Y29uc3QgdG9rZW46IFRva2VuID0gcGFyc2VyLm5leHQoKTtcblxuXHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfT1BFTikge1xuXHRcdHBhcnNlci5yZXdpbmQoKTtcblx0XHRyZXR1cm4gcGFyc2VBcnJheShwYXJzZXIpO1xuXHR9XG5cblx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5OVU1CRVIpIHtcblx0XHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuTlVNQkVSKTtcblx0XHRub2RlLnZhbHVlID0gdG9rZW4udmFsdWU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRpZiAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLlNUUklORykge1xuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5TVFJJTkcpO1xuXHRcdG5vZGUudmFsdWUgPSB0b2tlbi52YWx1ZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuQk9PTEVBTikge1xuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5CT09MRUFOKTtcblx0XHRub2RlLnZhbHVlID0gdG9rZW4udmFsdWU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRpZiAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLklERU5USUZJRVIpIHtcblx0XHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuSURFTlRJRklFUik7XG5cdFx0bm9kZS5uYW1lID0gdG9rZW4udmFsdWU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuTlVMTCkge1xuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5OVUxMKTtcblx0XHRub2RlLnZhbHVlID0gdG9rZW4udmFsdWU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuVEhJUykge1xuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5USElTKTtcblx0XHRub2RlLm5hbWUgPSB0b2tlbi52YWx1ZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5ORVcpIHtcblxuXHRcdGxldCB0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGUgPSBwYXJzZVR5cGUocGFyc2VyKTtcblxuXHRcdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pO1xuXG5cdFx0cmV0dXJuIG5ldyBBU1ROZXdOb2RlKHBhcnNlQXJndW1lbnRzKHBhcnNlciksIHR5cGVBbm5vdGF0aW9uKTtcblx0fVxuXG5cdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKSB7XG5cdFx0Y29uc3QgZXhwcjogQVNUTm9kZSA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHRcdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKTtcblx0XHRyZXR1cm4gZXhwcjtcblx0fVxuXG5cdHRocm93UGFyc2VyRXJyb3IoYFVuZXhwZWN0ZWQgdG9rZW46ICR7dG9rZW4udHlwZX0gJHt0b2tlbi52YWx1ZX1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUG9zdGZpeChwYXJzZXI6IFBhcnNlciwgZXhwcjogQVNUTm9kZSB8IG51bGwpOiBBU1ROb2RlIHtcblx0aWYgKGV4cHIgPT09IG51bGwpIHtcblx0XHR0aHJvd1BhcnNlckVycm9yKGBFeHBlY3RlZCBleHByZXNzaW9uLCBnb3QgbnVsbC5gKTtcblx0fVxuXG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0Y29uc3QgdG9rZW4gPSBwYXJzZXIucGVlaygpO1xuXHRcdGlmICghdG9rZW4pIGJyZWFrO1xuXG5cdFx0Ly8gQ2FsbDogZm9vKC4uLilcblx0XHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTikge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHRcdGV4cHIgPSBuZXcgQVNUQ2FsbE5vZGUoZXhwciwgcGFyc2VBcmd1bWVudHMocGFyc2VyKSk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBNZW1iZXI6IGZvby5iYXJcblx0XHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuRE9UKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdFx0ZXhwciA9IG5ldyBBU1RNZW1iZXJOb2RlKGV4cHIsIHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCkudmFsdWUpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gSU5ERVg6IGZvb1tleHByXVxuXHRcdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9PUEVOKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXG5cdFx0XHRjb25zdCBpbmRleCA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXG5cdFx0XHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9DTE9TRSk7XG5cblx0XHRcdGV4cHIgPSBuZXcgQVNUSW5kZXhOb2RlKGV4cHIsIGluZGV4KTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGJyZWFrO1xuXHR9XG5cblx0cmV0dXJuIGV4cHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb29rdXBQcmVjZWRlbmNlKHRva2VuOiBUb2tlbik6IG51bWJlciB7XG5cdHN3aXRjaCAodG9rZW4udmFsdWUpIHtcblx0XHRjYXNlIEdSQU1NQVIuRE9UOlxuXHRcdFx0cmV0dXJuIDEwMDtcblx0XHRjYXNlIEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTjpcblx0XHRcdHJldHVybiA5MDtcblx0XHRjYXNlIEdSQU1NQVIuTVVMVElQTFk6XG5cdFx0Y2FzZSBHUkFNTUFSLkRJVklERTpcblx0XHRjYXNlIEdSQU1NQVIuTU9EVUxVUzpcblx0XHRcdHJldHVybiA2MDtcblx0XHRjYXNlIEdSQU1NQVIuUExVUzpcblx0XHRjYXNlIEdSQU1NQVIuTUlOVVM6XG5cdFx0XHRyZXR1cm4gNTA7XG5cdFx0Y2FzZSBHUkFNTUFSLkxFU1NfVEhBTjpcblx0XHRjYXNlIEdSQU1NQVIuR1JFQVRFUl9USEFOOlxuXHRcdGNhc2UgR1JBTU1BUi5MRVNTX0VRVUFMOlxuXHRcdGNhc2UgR1JBTU1BUi5HUkVBVEVSX0VRVUFMOlxuXHRcdFx0cmV0dXJuIDQwO1xuXHRcdGNhc2UgR1JBTU1BUi5FUVVBTDpcblx0XHRjYXNlIEdSQU1NQVIuTk9UX0VRVUFMOlxuXHRcdFx0cmV0dXJuIDMwO1xuXHRcdGNhc2UgR1JBTU1BUi5BTkQ6XG5cdFx0XHRyZXR1cm4gMjA7XG5cdFx0Y2FzZSBHUkFNTUFSLk9SOlxuXHRcdFx0cmV0dXJuIDEwO1xuXHRcdGNhc2UgR1JBTU1BUi5BU1NJR046XG5cdFx0XHRyZXR1cm4gNTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIDA7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtUb2tlbiwgVG9rZW5UeXBlfSBmcm9tIFwiLi4vZ3JhbW1hclwiO1xuaW1wb3J0IHtUb2tlblN0cmVhbX0gZnJvbSBcIi4uL3Rva2VuaXplclwiO1xuaW1wb3J0IHtwYXJzZVByb2dyYW19IGZyb20gXCIuL3N0YXRlbWVudHNcIjtcbmltcG9ydCB7dGhyb3dQYXJzZXJFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuL3NvdXJjZVwiO1xuXG5cbmV4cG9ydCBjbGFzcyBQYXJzZXIge1xuXHRzb3VyY2U6IFNvdXJjZTtcblx0dG9rZW5TdHJlYW06IFRva2VuU3RyZWFtIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3Ioc291cmNlOiBTb3VyY2UpIHtcblx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0fVxuXG5cdHBhcnNlKCkge1xuXHRcdHRoaXMudG9rZW5TdHJlYW0gPSB0aGlzLnNvdXJjZVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgLmdldFRva2VuaXplcigpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAuZ2V0VG9rZW5TdHJlYW0oKVxuXG5cdFx0cmV0dXJuIHBhcnNlUHJvZ3JhbSh0aGlzKTtcblx0fVxuXG5cdHN0cmVhbSgpOiBUb2tlblN0cmVhbSB7XG5cdFx0aWYgKCF0aGlzLnRva2VuU3RyZWFtKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKCdQYXJzZXIgaGFzIG5vdCBiZWVuIHBhcnNlZCB5ZXQuJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMudG9rZW5TdHJlYW07XG5cdH1cblxuXHRleHBlY3QodG9rZW5UeXBlOiBzdHJpbmcsIGtleXdvcmQ6IHN0cmluZyB8IG51bGwgPSBudWxsKTogVG9rZW4ge1xuXHRcdGNvbnN0IHRva2VuOiBUb2tlbiB8IG51bGwgPSB0aGlzXG5cdFx0XHQuc3RyZWFtKClcblx0XHRcdC5uZXh0KCk7XG5cblx0XHRpZiAoIXRva2VuKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKGBVbmV4cGVjdGVkIGVuZCBvZiBmaWxlLiBFeHBlY3RlZCAke3Rva2VuVHlwZX0ke2tleXdvcmQgPyAnICcgKyBrZXl3b3JkIDogJyd9YCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRva2VuLnR5cGUgIT09IHRva2VuVHlwZSB8fCAoa2V5d29yZCAmJiB0b2tlbi52YWx1ZSAhPT0ga2V5d29yZCkpIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoYEV4cGVjdGVkICR7dG9rZW5UeXBlfSR7a2V5d29yZCA/ICcgJyArIGtleXdvcmQgOiAnJ30sIGdvdCAke3Rva2VuLnR5cGV9ICR7dG9rZW4udmFsdWV9YCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRva2VuO1xuXHR9XG5cblx0ZXhwZWN0T3BlcmF0b3Ioa2V5d29yZDogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZWN0KFRva2VuVHlwZS5PUEVSQVRPUiwga2V5d29yZCk7XG5cdH1cblxuXHRleHBlY3RBbm5vdGF0aW9uKCk6IFRva2VuIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlY3QoVG9rZW5UeXBlLkFOTk9UQVRJT04pO1xuXHR9XG5cblx0ZXhwZWN0SWRlbnRpZmllcihrZXl3b3JkOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IFRva2VuIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlY3QoVG9rZW5UeXBlLklERU5USUZJRVIsIGtleXdvcmQpO1xuXHR9XG5cblx0ZXhwZWN0S2V5d29yZChrZXl3b3JkOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IFRva2VuIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlY3QoVG9rZW5UeXBlLktFWVdPUkQsIGtleXdvcmQpO1xuXHR9XG5cblx0ZXhwZWN0U3RyaW5nKCk6IFRva2VuIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlY3QoVG9rZW5UeXBlLlNUUklORyk7XG5cdH1cblxuXHRleHBlY3RUZXh0KCk6IFRva2VuIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlY3QoVG9rZW5UeXBlLlRFWFQpO1xuXHR9XG5cblx0ZXhwZWN0UHVuY3R1YXRpb24oa2V5d29yZDogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZWN0KFRva2VuVHlwZS5QVU5DVFVBVElPTiwga2V5d29yZCk7XG5cdH1cblxuXHRleHBlY3RPbmVPZih0b2tlblR5cGVzOiBzdHJpbmdbXSwga2V5d29yZHM6IHN0cmluZyB8IG51bGwgPSBudWxsKTogVG9rZW4ge1xuXHRcdGNvbnN0IHRva2VuID0gdGhpc1xuXHRcdFx0LnN0cmVhbSgpXG5cdFx0XHQubmV4dCgpO1xuXG5cdFx0aWYgKCF0b2tlbikge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcihgVW5leHBlY3RlZCBlbmQgb2YgZmlsZS4gRXhwZWN0ZWQgb25lIG9mIHR5cGVzICR7dG9rZW5UeXBlc30sIGdvdCBudWxsLmApO1xuXHRcdH1cblxuXHRcdGlmICghdG9rZW5UeXBlcy5pbmNsdWRlcyh0b2tlbi50eXBlKSkge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcihgRXhwZWN0ZWQgb25lIG9mIHR5cGVzICR7dG9rZW5UeXBlc30sIGdvdCAke3Rva2VuLnR5cGV9YCk7XG5cdFx0fVxuXG5cdFx0aWYgKGtleXdvcmRzICYmICFrZXl3b3Jkcy5pbmNsdWRlcyh0b2tlbi52YWx1ZSkpIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoYEV4cGVjdGVkIG9uZSBvZiB2YWx1ZXMgJHtrZXl3b3Jkc30sIGdvdCAke3Rva2VuLnZhbHVlfWApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0b2tlbjtcblx0fVxuXG5cdGNvbnN1bWVJZih0b2tlblR5cGU6IHN0cmluZywga2V5d29yZDogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBib29sZWFuIHtcblx0XHRjb25zdCB0b2tlbiA9IHRoaXMucGVlaygpO1xuXG5cdFx0aWYgKHRva2VuLnR5cGUgPT09IHRva2VuVHlwZSAmJiAoa2V5d29yZCAmJiB0b2tlbi52YWx1ZS50cmltKCkgPT09IGtleXdvcmQpKSB7XG5cdFx0XHR0aGlzLm5leHQoKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGNvbnN1bWVJZlB1bmN0dWF0aW9uKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdW1lSWYoVG9rZW5UeXBlLlBVTkNUVUFUSU9OLCB2YWx1ZSk7XG5cdH1cblxuXHRjb25zdW1lSWZPcGVyYXRvcih2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3VtZUlmKFRva2VuVHlwZS5PUEVSQVRPUiwgdmFsdWUpO1xuXHR9XG5cblx0Y29uc3VtZUlmQ29tbWVudCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdW1lSWYoVG9rZW5UeXBlLkNPTU1FTlQpO1xuXHR9XG5cblx0Y29uc3VtZUlmS2V5d29yZChrZXl3b3JkOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdW1lSWYoVG9rZW5UeXBlLktFWVdPUkQsIGtleXdvcmQpO1xuXHR9XG5cblx0Y29uc3VtZUlmVGV4dCgpOiBib29sZWFuIHtcblx0XHRpZiAodGhpcy5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLlRFWFQgJiYgdGhpcy5wZWVrSXMoJycpKSB7XG5cdFx0XHR0aGlzLm5leHQoKTtcblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cGVlaygpOiBUb2tlbiB7XG5cdFx0Y29uc3QgdG9rZW4gPSB0aGlzXG5cdFx0XHQuc3RyZWFtKClcblx0XHRcdC5wZWVrKCk7XG5cblx0XHRpZiAodG9rZW4gPT09IG51bGwpIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoJ1VuZXhwZWN0ZWQgZW5kIG9mIGZpbGUuIEV4cGVjdGVkIHRva2VuLCBnb3QgbnVsbC4nKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdG9rZW47XG5cdH1cblxuXHRwZWVrSXMoa2V5d29yZDogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucGVlaygpXG5cdFx0ICAgICAgICAgICAudmFsdWVcblx0XHQgICAgICAgICAgIC50cmltKCkgPT09IGtleXdvcmQ7XG5cdH1cblxuXHRuZXh0KCk6IFRva2VuIHtcblx0XHRjb25zdCB0b2tlbiA9IHRoaXNcblx0XHRcdC5zdHJlYW0oKVxuXHRcdFx0Lm5leHQoKTtcblxuXHRcdGlmICh0b2tlbiA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZmlsZS4gRXhwZWN0ZWQgdG9rZW4sIGdvdCBudWxsLicpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0b2tlbjtcblx0fVxuXG5cdHJld2luZCgpOiB2b2lkIHtcblx0XHR0aGlzLnN0cmVhbSgpXG5cdFx0ICAgIC5yZXdpbmQoKTtcblx0fVxuXG5cdHBvc2l0aW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuc3RyZWFtKCkuaW5kZXg7XG5cdH1cblxuXHRzZWVrQXQocG9zaXRpb246IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuc3RyZWFtKCkuaW5kZXggPSBwb3NpdGlvbjtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0FTVENsYXNzTm9kZSwgQVNUSW50ZXJmYWNlTm9kZSwgQVNUTm9kZX0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHtDbGFzc0RlZmluaXRpb24sIEluc3RhbmNlLCBJbnRlcmZhY2VEZWZpbml0aW9ufSBmcm9tIFwiLi9vYmplY3RzXCI7XG5pbXBvcnQge0NsYXNzU3ltYm9sLCBJbnRlcmZhY2VTeW1ib2x9IGZyb20gXCIuL3R5cGVfb2JqZWN0c1wiO1xuaW1wb3J0IHt0aHJvd1J1bnRpbWVFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuXG5leHBvcnQgY2xhc3MgQ2xhc3NSZWdpc3RyeSB7XG5cdG1hcDogTWFwPHN0cmluZywgQ2xhc3NEZWZpbml0aW9uPiA9IG5ldyBNYXAoKTtcblxuXHRyZWdpc3Rlcihub2RlOiBBU1RDbGFzc05vZGUpOiB2b2lkIHtcblx0XHR0aGlzLnNldChub2RlLm5hbWUsIENsYXNzRGVmaW5pdGlvbi5mcm9tQVNUKG5vZGUpKTtcblx0fVxuXG5cdGFsbCgpOiBJdGVyYWJsZUl0ZXJhdG9yPENsYXNzRGVmaW5pdGlvbj4ge1xuXHRcdHJldHVybiB0aGlzLm1hcC52YWx1ZXMoKTtcblx0fVxuXG5cdHNldChuYW1lOiBzdHJpbmcsIGNsYXNzRGVmaW5pdGlvbjogQ2xhc3NEZWZpbml0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5tYXAuc2V0KG5hbWUsIGNsYXNzRGVmaW5pdGlvbik7XG5cdH1cblxuXHRnZXQobmFtZTogc3RyaW5nKTogQ2xhc3NEZWZpbml0aW9uIHtcblx0XHRjb25zdCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uIHwgbnVsbCA9IHRoaXMubWFwLmdldChuYW1lKSB8fCBudWxsO1xuXHRcdGlmICghY2xhc3NEZWYpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBDbGFzcyAke25hbWV9IG5vdCBmb3VuZC5gKTtcblx0XHR9XG5cdFx0cmV0dXJuIGNsYXNzRGVmO1xuXHR9XG5cblx0aGFzKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm1hcC5oYXMobmFtZSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEludGVyZmFjZVJlZ2lzdHJ5IHtcblx0bWFwOiBNYXA8c3RyaW5nLCBJbnRlcmZhY2VEZWZpbml0aW9uPiA9IG5ldyBNYXAoKTtcblxuXHRyZWdpc3Rlcihub2RlOiBBU1RJbnRlcmZhY2VOb2RlKTogdm9pZCB7XG5cdFx0dGhpcy5zZXQobm9kZS5uYW1lLCBJbnRlcmZhY2VEZWZpbml0aW9uLmZyb21BU1Qobm9kZSkpO1xuXHR9XG5cblx0YWxsKCk6IEl0ZXJhYmxlSXRlcmF0b3I8SW50ZXJmYWNlRGVmaW5pdGlvbj4ge1xuXHRcdHJldHVybiB0aGlzLm1hcC52YWx1ZXMoKTtcblx0fVxuXG5cdHNldChuYW1lOiBzdHJpbmcsIGludGVyZmFjZURlZmluaXRpb246IEludGVyZmFjZURlZmluaXRpb24pOiB2b2lkIHtcblx0XHR0aGlzLm1hcC5zZXQobmFtZSwgaW50ZXJmYWNlRGVmaW5pdGlvbik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEluc3RhbmNlUmVnaXN0cnkge1xuXHRwcml2YXRlIGluc3RhbmNlczogTWFwPHN0cmluZywgSW5zdGFuY2U+ID0gbmV3IE1hcDxzdHJpbmcsIEluc3RhbmNlPigpO1xuXG5cdHJlZ2lzdGVyKGluc3RhbmNlOiBJbnN0YW5jZSk6IHZvaWQge1xuXHRcdHRoaXMuaW5zdGFuY2VzLnNldChpbnN0YW5jZS5pZCwgaW5zdGFuY2UpO1xuXHR9XG5cblx0dW5yZWdpc3RlcihpbnN0YW5jZTogSW5zdGFuY2UpOiB2b2lkIHtcblx0XHR0aGlzLmluc3RhbmNlcy5kZWxldGUoaW5zdGFuY2UuaWQpO1xuXHR9XG5cblx0Z2V0KGlkOiBzdHJpbmcpOiBJbnN0YW5jZSB8IG51bGwge1xuXHRcdHJldHVybiB0aGlzLmluc3RhbmNlcy5nZXQoaWQpIHx8IG51bGw7XG5cdH1cblxuXHRhbGxJbnN0YW5jZXMoKTogSW5zdGFuY2VbXSB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy5pbnN0YW5jZXMudmFsdWVzKCkpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlUmVnaXN0cnkge1xuXHRjbGFzc1N5bWJvbHM6IE1hcDxzdHJpbmcsIENsYXNzU3ltYm9sPiA9IG5ldyBNYXAoKTtcblx0aW50ZXJmYWNlU3ltYm9sczogTWFwPHN0cmluZywgSW50ZXJmYWNlU3ltYm9sPiA9IG5ldyBNYXAoKTtcblxuXHRhbGxDbGFzc1N5bWJvbHMoKTogSXRlcmFibGVJdGVyYXRvcjxDbGFzc1N5bWJvbD4ge1xuXHRcdHJldHVybiB0aGlzLmNsYXNzU3ltYm9scy52YWx1ZXMoKTtcblx0fVxuXG5cdGFsbEludGVyZmFjZVN5bWJvbHMoKTogSXRlcmFibGVJdGVyYXRvcjxJbnRlcmZhY2VTeW1ib2w+IHtcblx0XHRyZXR1cm4gdGhpcy5pbnRlcmZhY2VTeW1ib2xzLnZhbHVlcygpO1xuXHR9XG5cblx0YWRkQ2xhc3NTeW1ib2woc3ltYm9sOiBDbGFzc1N5bWJvbCk6IHZvaWQge1xuXHRcdHRoaXMuY2xhc3NTeW1ib2xzLnNldChzeW1ib2wubmFtZSwgc3ltYm9sKTtcblx0fVxuXG5cdGFkZEludGVyZmFjZVN5bWJvbChzeW1ib2w6IEludGVyZmFjZVN5bWJvbCk6IHZvaWQge1xuXHRcdHRoaXMuaW50ZXJmYWNlU3ltYm9scy5zZXQoc3ltYm9sLm5hbWUsIHN5bWJvbCk7XG5cdH1cblxuXHRoYXNTeW1ib2wobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY2xhc3NTeW1ib2xzLmhhcyhuYW1lKSB8fCB0aGlzLmludGVyZmFjZVN5bWJvbHMuaGFzKG5hbWUpO1xuXHR9XG5cblx0cHVibGljIGdldENsYXNzU3ltYm9sKG5hbWU6IHN0cmluZyk6IENsYXNzU3ltYm9sIHtcblx0XHRjb25zdCBzeW1ib2w6IENsYXNzU3ltYm9sIHwgdW5kZWZpbmVkID0gdGhpcy5jbGFzc1N5bWJvbHMuZ2V0KG5hbWUpO1xuXHRcdGlmIChzeW1ib2wgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFN5bWJvbCAke25hbWV9IG5vdCBmb3VuZC5gKTtcblx0XHR9XG5cdFx0cmV0dXJuIHN5bWJvbDtcblx0fVxuXG5cdHB1YmxpYyBnZXRJbnRlcmFjZVN5bWJvbChuYW1lOiBzdHJpbmcpOiBJbnRlcmZhY2VTeW1ib2wge1xuXHRcdGNvbnN0IHN5bWJvbDogSW50ZXJmYWNlU3ltYm9sIHwgdW5kZWZpbmVkID0gdGhpcy5pbnRlcmZhY2VTeW1ib2xzLmdldChuYW1lKTtcblx0XHRpZiAoc3ltYm9sID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBTeW1ib2wgJHtuYW1lfSBub3QgZm91bmQuYCk7XG5cdFx0fVxuXHRcdHJldHVybiBzeW1ib2w7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE9iamVjdFJlZ2lzdHJ5IHtcblx0cHVibGljIHJlYWRvbmx5IGNsYXNzZXM6IENsYXNzUmVnaXN0cnkgPSBuZXcgQ2xhc3NSZWdpc3RyeSgpO1xuXHRwdWJsaWMgcmVhZG9ubHkgaW50ZXJmYWNlczogSW50ZXJmYWNlUmVnaXN0cnkgPSBuZXcgSW50ZXJmYWNlUmVnaXN0cnkoKTtcblx0cHVibGljIHJlYWRvbmx5IGluc3RhbmNlczogSW5zdGFuY2VSZWdpc3RyeSA9IG5ldyBJbnN0YW5jZVJlZ2lzdHJ5KCk7XG5cdHB1YmxpYyByZWFkb25seSB0eXBlczogVHlwZVJlZ2lzdHJ5ID0gbmV3IFR5cGVSZWdpc3RyeSgpO1xuXG5cdGZldGNoQWxsT2JqZWN0RGVmaW5pdGlvbnMoKTogTWFwPHN0cmluZywgQ2xhc3NEZWZpbml0aW9uIHwgSW50ZXJmYWNlRGVmaW5pdGlvbj4ge1xuXHRcdGNvbnN0IG1hcCA9IG5ldyBNYXAoKTtcblxuXHRcdGZvciAoY29uc3QgY2xhc3NEZWYgb2YgdGhpcy5pbnRlcmZhY2VzLmFsbCgpKSB7XG5cdFx0XHRtYXAuc2V0KGNsYXNzRGVmLm5hbWUsIGNsYXNzRGVmKTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGNsYXNzRGVmIG9mIHRoaXMuY2xhc3Nlcy5hbGwoKSkge1xuXHRcdFx0bWFwLnNldChjbGFzc0RlZi5uYW1lLCBjbGFzc0RlZik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1hcDtcblx0fVxuXG5cdGNvbGxlY3RBbGwoYXN0OiBBU1ROb2RlKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIGFzdC5jaGlsZHJlbikge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RJbnRlcmZhY2VOb2RlKSB7XG5cdFx0XHRcdHRoaXMuaW50ZXJmYWNlcy5yZWdpc3Rlcihub2RlKTtcblx0XHRcdH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIEFTVENsYXNzTm9kZSkge1xuXHRcdFx0XHR0aGlzLmNsYXNzZXMucmVnaXN0ZXIobm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbiIsCiAgICAiaW1wb3J0IHtcblx0QVNUQXJyYXlOb2RlLFxuXHRBU1RBc3NpZ25tZW50Tm9kZSxcblx0QVNUQmluYXJ5Tm9kZSxcblx0QVNUQ2FsbE5vZGUsXG5cdEFTVENsYXNzTm9kZSxcblx0QVNURXhwcmVzc2lvbk5vZGUsXG5cdEFTVEZpZWxkTm9kZSxcblx0QVNURm9yZWFjaE5vZGUsXG5cdEFTVEluZGV4Tm9kZSxcblx0QVNUSW50ZXJmYWNlTm9kZSxcblx0QVNUTGFtYmRhTm9kZSxcblx0QVNUTWVtYmVyTm9kZSxcblx0QVNUTWV0aG9kTm9kZSxcblx0QVNUTmV3Tm9kZSxcblx0QVNUTm9kZSxcblx0QVNUTm9kZVR5cGUsXG5cdEFTVFBhcmFtZXRlck5vZGUsXG5cdEFTVFJldHVybk5vZGUsXG5cdEFTVFR5cGVOb2RlLFxuXHRBU1RVbmFyeU5vZGUsXG5cdEFTVFZhcmlhYmxlTm9kZSxcblx0QVNUVkRvbU5vZGVcbn0gZnJvbSAnLi9hc3QnO1xuaW1wb3J0IHtcblx0YnVpbGRUeXBlU3Vic3RpdHV0aW9uTWFwLFxuXHRDbGFzc1JlZlR5cGUsXG5cdENsYXNzU3ltYm9sLFxuXHRGaWVsZFN5bWJvbCxcblx0SW50ZXJmYWNlUmVmVHlwZSxcblx0SW50ZXJmYWNlU3ltYm9sLFxuXHRMYW1iZGFUeXBlLFxuXHRNZXRob2RTeW1ib2wsXG5cdE1peGVkVHlwZSxcblx0TnVsbGFibGVUeXBlLFxuXHRQYXJhbWV0ZXJTeW1ib2wsXG5cdFByaW1pdGl2ZUNsYXNzVHlwZXMsXG5cdHN1YnN0aXR1dGVUeXBlLFxuXHRUeXBlLFxuXHRUeXBlUGFyYW1ldGVyU3ltYm9sLFxuXHRUeXBlcyxcblx0VHlwZVNjb3BlLFxuXHRUeXBlVmFyaWFibGUsXG5cdHdyYXBUeXBlXG59IGZyb20gXCIuL3J1bnRpbWUvdHlwZV9vYmplY3RzXCI7XG5pbXBvcnQge1R5cGVfYXV0b2JveGluZ30gZnJvbSBcIi4vcnVudGltZS90eXBlX2F1dG9ib3hpbmcudHNcIjtcbmltcG9ydCB7TmF0aXZlRnVuY3Rpb24sIE5hdGl2ZUZ1bmN0aW9uc30gZnJvbSBcIi4uL2xpYnJhcnkvbmF0aXZlX2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHtHUkFNTUFSfSBmcm9tIFwiLi9ncmFtbWFyXCI7XG5pbXBvcnQge3Rocm93VHlwZUVycm9yfSBmcm9tIFwiLi9lcnJvcnNcIlxuaW1wb3J0IHtDbGFzc0RlZmluaXRpb24sIEludGVyZmFjZURlZmluaXRpb259IGZyb20gXCIuL3J1bnRpbWUvb2JqZWN0c1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4vcnVudGltZS9yZWdpc3RyeVwiO1xuXG5cbmNvbnN0IGdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5ID0gbmV3IE5hdGl2ZUZ1bmN0aW9ucygpXG5cdC5nZXRHbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeSgpO1xuXG5leHBvcnQgY2xhc3MgU3RhdGVtZW50UmVzdWx0IHtcblx0ZGlkUmV0dXJuOiBib29sZWFuO1xuXHRyZXR1cm5UeXBlOiBUeXBlIHwgbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihkaWRSZXR1cm46IGJvb2xlYW4sIHJldHVyblR5cGU6IFR5cGUgfCBudWxsKSB7XG5cdFx0dGhpcy5kaWRSZXR1cm4gPSBkaWRSZXR1cm47XG5cdFx0dGhpcy5yZXR1cm5UeXBlID0gcmV0dXJuVHlwZTtcblx0fVxuXG5cdHN0YXRpYyB3aXRoUmV0dXJuKHJldHVyblR5cGU6IFR5cGUpOiBTdGF0ZW1lbnRSZXN1bHQge1xuXHRcdHJldHVybiBuZXcgU3RhdGVtZW50UmVzdWx0KHRydWUsIHJldHVyblR5cGUpO1xuXHR9XG5cblx0c3RhdGljIG5vUmV0dXJuKCk6IFN0YXRlbWVudFJlc3VsdCB7XG5cdFx0cmV0dXJuIG5ldyBTdGF0ZW1lbnRSZXN1bHQoZmFsc2UsIG51bGwpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlQ2hlY2tlciB7XG5cdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeTtcblxuXHRjb25zdHJ1Y3RvcihvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpIHtcblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5ID0gb2JqZWN0UmVnaXN0cnk7XG5cdH1cblxuXHRjb2xsZWN0QWxsU3ltYm9sc0Zyb21Ob2RlKGFzdDogQVNUTm9kZSk6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUSW50ZXJmYWNlTm9kZSkge1xuXHRcdFx0XHR0aGlzLnJlZ2lzdGVySW50ZXJmYWNlU3ltYm9sKG5vZGUpXG5cdFx0XHR9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RDbGFzc05vZGUpIHtcblx0XHRcdFx0dGhpcy5yZWdpc3RlckNsYXNzU3ltYm9sKG5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNvbGxlY3RBbGxTeW1ib2xzRnJvbVJlZ2lzdHJ5KG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IHZvaWQge1xuXHRcdGNvbnN0IG9iamVjdERlZmluaXRpb25zOiBNYXBJdGVyYXRvcjxDbGFzc0RlZmluaXRpb24gfCBJbnRlcmZhY2VEZWZpbml0aW9uPiA9IG9iamVjdFJlZ2lzdHJ5XG5cdFx0XHQuZmV0Y2hBbGxPYmplY3REZWZpbml0aW9ucygpXG5cdFx0XHQudmFsdWVzKCk7XG5cblx0XHRmb3IgKGxldCBvYmplY3REZWYgb2Ygb2JqZWN0RGVmaW5pdGlvbnMpIHtcblx0XHRcdGlmIChvYmplY3REZWYgaW5zdGFuY2VvZiBJbnRlcmZhY2VEZWZpbml0aW9uKSB7XG5cdFx0XHRcdHRoaXMucmVnaXN0ZXJJbnRlcmZhY2VTeW1ib2wob2JqZWN0RGVmLm5vZGUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5yZWdpc3RlckNsYXNzU3ltYm9sKG9iamVjdERlZi5ub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjaGVjayhhc3Q6IEFTVE5vZGUpOiB2b2lkIHtcblx0XHR0aGlzLmNvbGxlY3RBbGxTeW1ib2xzRnJvbU5vZGUoYXN0KTtcblx0XHR0aGlzLnZhbGlkYXRlSW5oZXJpdGFuY2UoKTtcblx0XHR0aGlzLmNoZWNrUHJvZ3JhbShhc3QpO1xuXHRcdHRoaXMuY2hlY2tJbnRlcmZhY2VCb2RpZXMoKTtcblx0XHR0aGlzLmNoZWNrQ2xhc3Nlc0JvZGllcygpO1xuXHRcdHRoaXMuY2hlY2tDbGFzc2VzSW1wbGVtZW50cygpO1xuXHR9XG5cblx0cHJpdmF0ZSB2YWxpZGF0ZUluaGVyaXRhbmNlKCkge1xuXHRcdGZvciAoY29uc3QgY2xhc3NTeW1ib2wgb2YgdGhpcy5vYmplY3RSZWdpc3RyeS5jbGFzc2VzLmFsbCgpKSB7XG5cdFx0XHRpZiAoY2xhc3NTeW1ib2wuc3VwZXJDbGFzcyAmJiAhdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5oYXNTeW1ib2woY2xhc3NTeW1ib2wuc3VwZXJDbGFzcykpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYFVua25vd24gc3VwZXJjbGFzcyAke2NsYXNzU3ltYm9sLnN1cGVyQ2xhc3N9YCwgY2xhc3NTeW1ib2wubm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1Byb2dyYW0oYXN0OiBBU1ROb2RlKTogdm9pZCB7XG5cdFx0Y29uc3Qgc2NvcGUgPSBuZXcgVHlwZVNjb3BlKCk7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIGFzdC5jaGlsZHJlbikge1xuXHRcdFx0dGhpcy5jaGVja1N0YXRlbWVudChub2RlLCBzY29wZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0NsYXNzZXNCb2RpZXMoKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBvYmplY3RTeW1ib2wgb2YgdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5hbGxDbGFzc1N5bWJvbHMoKSkge1xuXHRcdFx0Y29uc3QgaW5zdGFuY2VTY29wZSA9IG5ldyBUeXBlU2NvcGUoKTtcblx0XHRcdGluc3RhbmNlU2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCA9IG9iamVjdFN5bWJvbDtcblxuXHRcdFx0b2JqZWN0U3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmZvckVhY2godHlwZVBhcmFtZXRlciA9PiB7XG5cdFx0XHRcdGluc3RhbmNlU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcoXG5cdFx0XHRcdFx0dHlwZVBhcmFtZXRlci5uYW1lLFxuXHRcdFx0XHRcdG5ldyBUeXBlVmFyaWFibGUodHlwZVBhcmFtZXRlci5uYW1lKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmIChvYmplY3RTeW1ib2wuY29uc3RydWN0b3JNZXRob2RTeW1ib2wpIHtcblx0XHRcdFx0Y29uc3QgY29uc3RydWN0b3JTeW1ib2w6IE1ldGhvZFN5bWJvbCA9IG9iamVjdFN5bWJvbC5jb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbDtcblx0XHRcdFx0Y29uc3QgY29uc3RydWN0b3JTY29wZSA9IG5ldyBUeXBlU2NvcGUoaW5zdGFuY2VTY29wZSk7XG5cblx0XHRcdFx0Y29uc3RydWN0b3JTY29wZS5jdXJyZW50TWV0aG9kU3ltYm9sID0gY29uc3RydWN0b3JTeW1ib2w7XG5cblx0XHRcdFx0b2JqZWN0U3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmZvckVhY2godHlwZVBhcmFtZXRlclN5bWJvbCA9PiB7XG5cdFx0XHRcdFx0Y29uc3RydWN0b3JTY29wZS5kZWZpbmVUeXBlQmluZGluZyhcblx0XHRcdFx0XHRcdHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSxcblx0XHRcdFx0XHRcdG5ldyBUeXBlVmFyaWFibGUodHlwZVBhcmFtZXRlclN5bWJvbC5uYW1lKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGZvciAoY29uc3QgcGFyYW1ldGVyU3ltYm9sIG9mIGNvbnN0cnVjdG9yU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMpIHtcblx0XHRcdFx0XHRjb25zdHJ1Y3RvclNjb3BlLmRlZmluZVR5cGUocGFyYW1ldGVyU3ltYm9sLm5hbWUsIHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuY2hlY2tCb2R5KGNvbnN0cnVjdG9yU3ltYm9sLmJvZHksIGNvbnN0cnVjdG9yU2NvcGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGNvbnN0IG1ldGhvZFN5bWJvbCBvZiBvYmplY3RTeW1ib2wuaW5zdGFuY2VNZXRob2RTeW1ib2xzLnZhbHVlcygpKSB7XG5cdFx0XHRcdGNvbnN0IG1ldGhvZFNjb3BlID0gbmV3IFR5cGVTY29wZShpbnN0YW5jZVNjb3BlKTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMuZm9yRWFjaCh0eXBlUGFyYW1ldGVyU3ltYm9sID0+IHtcblx0XHRcdFx0XHRtZXRob2RTY29wZS5kZWZpbmVUeXBlQmluZGluZyhcblx0XHRcdFx0XHRcdHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSxcblx0XHRcdFx0XHRcdG5ldyBUeXBlVmFyaWFibGUodHlwZVBhcmFtZXRlclN5bWJvbC5uYW1lKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdG1ldGhvZFNjb3BlLmN1cnJlbnRNZXRob2RTeW1ib2wgPSBtZXRob2RTeW1ib2w7XG5cblx0XHRcdFx0Zm9yIChjb25zdCBwYXJhbWV0ZXJTeW1ib2wgb2YgbWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMpIHtcblx0XHRcdFx0XHRtZXRob2RTY29wZS5kZWZpbmVUeXBlKHBhcmFtZXRlclN5bWJvbC5uYW1lLCBwYXJhbWV0ZXJTeW1ib2wucGFyYW1ldGVyVHlwZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBoYXNCb2R5OiBib29sZWFuID0gbWV0aG9kU3ltYm9sLmJvZHkgJiYgbWV0aG9kU3ltYm9sLmJvZHkubGVuZ3RoID4gMDtcblx0XHRcdFx0aWYgKGhhc0JvZHkpIHtcblx0XHRcdFx0XHRjb25zdCBhY3R1YWw6IFR5cGUgPSB0aGlzLmNoZWNrQm9keShtZXRob2RTeW1ib2wuYm9keSwgbWV0aG9kU2NvcGUpO1xuXHRcdFx0XHRcdHRoaXMuY2hlY2tSZXR1cm5UeXBlKG1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlLCBhY3R1YWwsIG1ldGhvZFN5bWJvbC5ub2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGNvbnN0IG1ldGhvZFN5bWJvbCBvZiBvYmplY3RTeW1ib2wuc3RhdGljTWV0aG9kU3ltYm9scy52YWx1ZXMoKSkge1xuXHRcdFx0XHRjb25zdCBzdGF0aWNTY29wZSA9IG5ldyBUeXBlU2NvcGUoaW5zdGFuY2VTY29wZSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmZvckVhY2godHlwZVBhcmFtZXRlclN5bWJvbCA9PiB7XG5cdFx0XHRcdFx0c3RhdGljU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcoXG5cdFx0XHRcdFx0XHR0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUsXG5cdFx0XHRcdFx0XHRuZXcgVHlwZVZhcmlhYmxlKHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRzdGF0aWNTY29wZS5jdXJyZW50TWV0aG9kU3ltYm9sID0gbWV0aG9kU3ltYm9sO1xuXG5cdFx0XHRcdGZvciAoY29uc3QgcGFyYW1ldGVyU3ltYm9sIG9mIG1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzKSB7XG5cdFx0XHRcdFx0c3RhdGljU2NvcGUuZGVmaW5lVHlwZShwYXJhbWV0ZXJTeW1ib2wubmFtZSwgcGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgaGFzQm9keTogYm9vbGVhbiA9IG1ldGhvZFN5bWJvbC5ib2R5ICYmIG1ldGhvZFN5bWJvbC5ib2R5Lmxlbmd0aCA+IDA7XG5cdFx0XHRcdGlmIChoYXNCb2R5KSB7XG5cdFx0XHRcdFx0Y29uc3QgYWN0dWFsOiBUeXBlID0gdGhpcy5jaGVja0JvZHkobWV0aG9kU3ltYm9sLmJvZHksIHN0YXRpY1Njb3BlKTtcblx0XHRcdFx0XHR0aGlzLmNoZWNrUmV0dXJuVHlwZShtZXRob2RTeW1ib2wucmV0dXJuVHlwZSwgYWN0dWFsLCBtZXRob2RTeW1ib2wubm9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrSW50ZXJmYWNlQm9kaWVzKCk6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qgb2JqZWN0U3ltYm9sIG9mIHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuYWxsSW50ZXJmYWNlU3ltYm9scygpKSB7XG5cdFx0XHRjb25zdCBpbnN0YW5jZVNjb3BlID0gbmV3IFR5cGVTY29wZSgpO1xuXHRcdFx0aW5zdGFuY2VTY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sID0gb2JqZWN0U3ltYm9sO1xuXG5cdFx0XHRvYmplY3RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMuZm9yRWFjaCh0eXBlUGFyYW1ldGVyID0+IHtcblx0XHRcdFx0aW5zdGFuY2VTY29wZS5kZWZpbmVUeXBlQmluZGluZyhcblx0XHRcdFx0XHR0eXBlUGFyYW1ldGVyLm5hbWUsXG5cdFx0XHRcdFx0bmV3IFR5cGVWYXJpYWJsZSh0eXBlUGFyYW1ldGVyLm5hbWUpXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Zm9yIChjb25zdCBtZXRob2RTeW1ib2wgb2Ygb2JqZWN0U3ltYm9sLmluc3RhbmNlTWV0aG9kU3ltYm9scy52YWx1ZXMoKSkge1xuXHRcdFx0XHRjb25zdCBtZXRob2RTY29wZSA9IG5ldyBUeXBlU2NvcGUoaW5zdGFuY2VTY29wZSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmZvckVhY2godHlwZVBhcmFtZXRlclN5bWJvbCA9PiB7XG5cdFx0XHRcdFx0bWV0aG9kU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcoXG5cdFx0XHRcdFx0XHR0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUsXG5cdFx0XHRcdFx0XHRuZXcgVHlwZVZhcmlhYmxlKHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRtZXRob2RTY29wZS5jdXJyZW50TWV0aG9kU3ltYm9sID0gbWV0aG9kU3ltYm9sO1xuXG5cdFx0XHRcdGZvciAoY29uc3QgcGFyYW1ldGVyU3ltYm9sIG9mIG1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzKSB7XG5cdFx0XHRcdFx0bWV0aG9kU2NvcGUuZGVmaW5lVHlwZShwYXJhbWV0ZXJTeW1ib2wubmFtZSwgcGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgaGFzQm9keTogYm9vbGVhbiA9IG1ldGhvZFN5bWJvbC5ib2R5ICYmIG1ldGhvZFN5bWJvbC5ib2R5Lmxlbmd0aCA+IDA7XG5cdFx0XHRcdGlmIChoYXNCb2R5KSB7XG5cdFx0XHRcdFx0Y29uc3QgYWN0dWFsOiBUeXBlID0gdGhpcy5jaGVja0JvZHkobWV0aG9kU3ltYm9sLmJvZHksIG1ldGhvZFNjb3BlKTtcblx0XHRcdFx0XHR0aGlzLmNoZWNrUmV0dXJuVHlwZShtZXRob2RTeW1ib2wucmV0dXJuVHlwZSwgYWN0dWFsLCBtZXRob2RTeW1ib2wubm9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQ2xhc3Nlc0ltcGxlbWVudHMoKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBjbGFzc1N5bWJvbCBvZiB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmFsbENsYXNzU3ltYm9scygpKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGludGVyZmFjZVJlZlR5cGUgb2YgY2xhc3NTeW1ib2wuaW1wbGVtZW50c0ludGVyZmFjZXMpIHtcblx0XHRcdFx0dGhpcy5jaGVja0ltcGxlbWVudHNJbnRlcmZhY2UoY2xhc3NTeW1ib2wsIGludGVyZmFjZVJlZlR5cGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tJbXBsZW1lbnRzSW50ZXJmYWNlKGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCwgaW50ZXJmYWNlUmVmVHlwZTogSW50ZXJmYWNlUmVmVHlwZSk6IHZvaWQge1xuXHRcdGNvbnN0IGludGVyZmFjZVN5bWJvbDogSW50ZXJmYWNlU3ltYm9sID0gaW50ZXJmYWNlUmVmVHlwZS5pbnRlcmZhY2VTeW1ib2w7XG5cblx0XHRjb25zdCBzdWJzdGl0dXRpb25NYXA6IE1hcDxzdHJpbmcsIFR5cGU+ID0gYnVpbGRUeXBlU3Vic3RpdHV0aW9uTWFwKFxuXHRcdFx0aW50ZXJmYWNlU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLFxuXHRcdFx0aW50ZXJmYWNlUmVmVHlwZS50eXBlQXJndW1lbnRzXG5cdFx0KTtcblxuXHRcdGZvciAoY29uc3QgaW50ZXJmYWNlTWV0aG9kU3ltYm9sIG9mIGludGVyZmFjZVN5bWJvbC5pbnN0YW5jZU1ldGhvZFN5bWJvbHMudmFsdWVzKCkpIHtcblx0XHRcdGNvbnN0IGNsYXNzTWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wgPSB0aGlzLnJlc29sdmVJbnN0YW5jZU1ldGhvZGUoXG5cdFx0XHRcdGNsYXNzU3ltYm9sLFxuXHRcdFx0XHRpbnRlcmZhY2VNZXRob2RTeW1ib2wubmFtZVxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKCFjbGFzc01ldGhvZFN5bWJvbCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihcblx0XHRcdFx0XHRgQ2xhc3MgJHtjbGFzc1N5bWJvbC5uYW1lfSBkb2VzIG5vdCBpbXBsZW1lbnQgbWV0aG9kICR7aW50ZXJmYWNlTWV0aG9kU3ltYm9sLm5hbWV9IGZyb20gaW50ZXJmYWNlICR7aW50ZXJmYWNlU3ltYm9sLm5hbWV9YCxcblx0XHRcdFx0XHRjbGFzc1N5bWJvbC5ub2RlXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuY2hlY2tNZXRob2RDb21wYXRpYmlsaXR5KFxuXHRcdFx0XHRjbGFzc01ldGhvZFN5bWJvbCxcblx0XHRcdFx0aW50ZXJmYWNlTWV0aG9kU3ltYm9sLFxuXHRcdFx0XHRzdWJzdGl0dXRpb25NYXBcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja01ldGhvZENvbXBhdGliaWxpdHkoY2xhc3NNZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCwgaW50ZXJmYWNlTWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wsIHN1YnN0aXR1dGlvbk1hcDogTWFwPHN0cmluZywgVHlwZT4pOiB2b2lkIHtcblx0XHRpZiAoY2xhc3NNZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9scy5sZW5ndGggIT09IGludGVyZmFjZU1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYE1ldGhvZCAke2NsYXNzTWV0aG9kU3ltYm9sLm5hbWV9IGhhcyB3cm9uZyBwYXJhbWV0ZXIgY291bnRgKTtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGludGVyZmFjZU1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBwYXJhbWV0ZXJTeW1ib2w6IFBhcmFtZXRlclN5bWJvbCB8IG51bGwgPSBpbnRlcmZhY2VNZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9sc1tpXSB8fCBudWxsO1xuXG5cdFx0XHRpZiAoIXBhcmFtZXRlclN5bWJvbCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgTWV0aG9kICR7Y2xhc3NNZXRob2RTeW1ib2wubmFtZX0gaGFzIHRvbyBtYW55IHBhcmFtZXRlcnNgKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGV4cGVjdGVkVHlwZTogVHlwZSA9IHN1YnN0aXR1dGVUeXBlKHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlLCBzdWJzdGl0dXRpb25NYXApO1xuXG5cdFx0XHRjb25zdCBhY3R1YWxUeXBlOiBUeXBlID0gcGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGU7XG5cblx0XHRcdGlmICghZXhwZWN0ZWRUeXBlLmFjY2VwdHMoYWN0dWFsVHlwZSkpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYFBhcmFtZXRlciAke2kgKyAxfSBvZiAke2NsYXNzTWV0aG9kU3ltYm9sLm5hbWV9IGluY29tcGF0aWJsZSB3aXRoIGludGVyZmFjZWApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IGV4cGVjdGVkUmV0dXJuOiBUeXBlID0gc3Vic3RpdHV0ZVR5cGUoaW50ZXJmYWNlTWV0aG9kU3ltYm9sLnJldHVyblR5cGUsIHN1YnN0aXR1dGlvbk1hcCk7XG5cblx0XHRpZiAoIWV4cGVjdGVkUmV0dXJuLmFjY2VwdHMoY2xhc3NNZXRob2RTeW1ib2wucmV0dXJuVHlwZSkpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBSZXR1cm4gdHlwZSBvZiAke2NsYXNzTWV0aG9kU3ltYm9sLm5hbWV9IGluY29tcGF0aWJsZSB3aXRoIGludGVyZmFjZWApO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tTdGF0ZW1lbnQobm9kZTogQVNUTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFN0YXRlbWVudFJlc3VsdCB7XG5cdFx0c3dpdGNoIChub2RlLnR5cGUpIHtcblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuUkVUVVJOOlxuXHRcdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVFJldHVybk5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gU3RhdGVtZW50UmVzdWx0LndpdGhSZXR1cm4oXG5cdFx0XHRcdFx0XHR0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLmFyZ3VtZW50LCBzY29wZSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5WQVJJQUJMRTpcblx0XHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RWYXJpYWJsZU5vZGUpIHtcblx0XHRcdFx0XHR0aGlzLmNoZWNrVmFyaWFibGUobm9kZSwgc2NvcGUpO1xuXHRcdFx0XHRcdHJldHVybiBTdGF0ZW1lbnRSZXN1bHQubm9SZXR1cm4oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuRk9SRUFDSDpcblx0XHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RGb3JlYWNoTm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiBTdGF0ZW1lbnRSZXN1bHQud2l0aFJldHVybihcblx0XHRcdFx0XHRcdHRoaXMuY2hlY2tGb3JlYWNoKG5vZGUsIHNjb3BlKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkVYUFJFU1NJT046XG5cdFx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNURXhwcmVzc2lvbk5vZGUpIHtcblx0XHRcdFx0XHR0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLmV4cHIsIHNjb3BlKTtcblx0XHRcdFx0XHRyZXR1cm4gU3RhdGVtZW50UmVzdWx0Lm5vUmV0dXJuKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFN0YXRlbWVudFJlc3VsdC5ub1JldHVybigpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1ZhcmlhYmxlKG5vZGU6IEFTVFZhcmlhYmxlTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IHZvaWQge1xuXHRcdGNvbnN0IGRlY2xhcmVkVHlwZTogVHlwZSB8IG51bGwgPSBub2RlLnR5cGVBbm5vdGF0aW9uXG5cdFx0XHQ/IHRoaXMud3JhcFR5cGUobm9kZS50eXBlQW5ub3RhdGlvbiwgc2NvcGUpXG5cdFx0XHQ6IG51bGw7XG5cblx0XHRjb25zdCBhY3R1YWxUeXBlOiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5pbml0LCBzY29wZSwgZGVjbGFyZWRUeXBlKTtcblxuXHRcdGlmIChkZWNsYXJlZFR5cGUgJiYgIWRlY2xhcmVkVHlwZS5hY2NlcHRzKGFjdHVhbFR5cGUpKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgVHlwZSBtaXNtYXRjaDogJHtkZWNsYXJlZFR5cGV9IDw+ICR7YWN0dWFsVHlwZX1gLCBub2RlKTtcblx0XHR9XG5cblx0XHRzY29wZS5kZWZpbmVUeXBlKG5vZGUubmFtZSwgZGVjbGFyZWRUeXBlID8/IGFjdHVhbFR5cGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0ZvcmVhY2gobm9kZTogQVNURm9yZWFjaE5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRsZXQgaXRlcmFibGVUeXBlOiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5pdGVyYWJsZSwgc2NvcGUpO1xuXG5cdFx0aXRlcmFibGVUeXBlID0gVHlwZV9hdXRvYm94aW5nLmF1dG9ib3hJZk5lZWRlZChpdGVyYWJsZVR5cGUsIHRoaXMub2JqZWN0UmVnaXN0cnkpO1xuXG5cdFx0aWYgKGl0ZXJhYmxlVHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSAmJiBpdGVyYWJsZVR5cGUuY2xhc3NTeW1ib2wubmFtZSA9PT0gJ0FycmF5Jykge1xuXHRcdFx0aWYgKGl0ZXJhYmxlVHlwZS50eXBlQXJndW1lbnRzLmxlbmd0aCAhPT0gMSkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcignQXJyYXkgaW4gZm9yZWFjaCBtdXNzdCBoYXZlIGV4YWN0bHkgb25lIHR5cGUgYXJndW1lbnQuJywgbm9kZS5pdGVyYWJsZSk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGVsZW1lbnRUeXBlOiBUeXBlIHwgbnVsbCA9IGl0ZXJhYmxlVHlwZS50eXBlQXJndW1lbnRzWzBdIHx8IG51bGw7XG5cblx0XHRcdGlmIChlbGVtZW50VHlwZSA9PT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcignQXJyYXkgaW4gZm9yZWFjaCBtdXN0IGhhdmUgZXhhY3RseSBvbmUgdHlwZSBhcmd1bWVudC4nLCBub2RlLml0ZXJhYmxlKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgbG9vcFNjb3BlID0gbmV3IFR5cGVTY29wZShzY29wZSk7XG5cdFx0XHRsb29wU2NvcGUuZGVmaW5lVHlwZShub2RlLml0ZXJhdG9yLCBlbGVtZW50VHlwZSk7XG5cblx0XHRcdHJldHVybiB0aGlzLmNoZWNrQm9keShub2RlLmJvZHksIGxvb3BTY29wZSk7XG5cblx0XHR9XG5cblx0XHR0aGlzLnR5cGVFcnJvcihgZm9yZWFjaCBleHBlY3RzIEFycmF5PFQ+LCBnb3QgJHtpdGVyYWJsZVR5cGUudG9TdHJpbmcoKX1gLCBub2RlLml0ZXJhYmxlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tFeHByZXNzaW9uKGV4cHI6IEFTVE5vZGUgfCBudWxsLCBzY29wZTogVHlwZVNjb3BlLCBleHBlY3RlZFR5cGU6IFR5cGUgfCBudWxsID0gbnVsbCk6IFR5cGUge1xuXHRcdGlmIChleHByID09PSBudWxsKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcignRXhwcmVzc2lvbiBleHBlY3RlZCwgZ290IG51bGwuJywgZXhwcik7XG5cdFx0fVxuXG5cdFx0c3dpdGNoIChleHByLnR5cGUpIHtcblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuTlVNQkVSOlxuXHRcdFx0XHRyZXR1cm4gVHlwZXMuTlVNQkVSO1xuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLlNUUklORzpcblx0XHRcdFx0cmV0dXJuIFR5cGVzLlNUUklORztcblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5CT09MRUFOOlxuXHRcdFx0XHRyZXR1cm4gVHlwZXMuQk9PTEVBTjtcblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5OVUxMOlxuXHRcdFx0XHRyZXR1cm4gVHlwZXMuTlVMTDtcblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5BU1NJR05NRU5UOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQXNzaWdubWVudE5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0Fzc2lnbm1lbnQoZXhwciwgc2NvcGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLlZET006IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RWRG9tTm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrVkRvbU5vZGUoZXhwcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuQVJSQVk6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RBcnJheU5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0FycmF5RXhwcmVzc2lvbihleHByLCBzY29wZSwgZXhwZWN0ZWRUeXBlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5JTkRFWDoge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVEluZGV4Tm9kZSkge1xuXHRcdFx0XHRcdGNvbnN0IG9iamVjdFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihleHByLm9iamVjdCwgc2NvcGUpO1xuXHRcdFx0XHRcdGNvbnN0IGluZGV4ID0gdGhpcy5jaGVja0V4cHJlc3Npb24oZXhwci5pbmRleCwgc2NvcGUpO1xuXG5cdFx0XHRcdFx0aWYgKG9iamVjdFR5cGUgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUpIHtcblx0XHRcdFx0XHRcdHJldHVybiBvYmplY3RUeXBlLnR5cGVBcmd1bWVudHNbMF0gfHwgVHlwZXMuTUlYRUQ7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBpbmRleCAke29iamVjdFR5cGUubmFtZX0gd2l0aCAke2luZGV4Lm5hbWV9YCwgZXhwcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuVU5BUlk6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RVbmFyeU5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja1VuYXJ5RXhwcmVzc2lvbihleHByLCBzY29wZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuTUVNQkVSOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrTWVtYmVyRXhwcmVzc2lvbihleHByLCBzY29wZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuVEhJUzoge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja1RoaXNFeHByZXNzaW9uKGV4cHIsIHNjb3BlKTtcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5JREVOVElGSUVSOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0lkZW50aWZpZXJFeHByZXNzaW9uKGV4cHIsIHNjb3BlKTtcblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5ORVc6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1ROZXdOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tOZXdFeHByZXNzaW9uKGV4cHIsIHNjb3BlLCBleHBlY3RlZFR5cGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkJJTkFSWToge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVEJpbmFyeU5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0JpbmFyeUV4cHJlc3Npb24oZXhwciwgc2NvcGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkxBTUJEQToge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVExhbWJkYU5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0xhbWJkYUV4cHJlc3Npb24oZXhwciwgc2NvcGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkNBTEw6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RDYWxsTm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrQ2FsbEV4cHJlc3Npb24oZXhwciwgc2NvcGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBUeXBlcy5NSVhFRDtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tCaW5hcnlFeHByZXNzaW9uKGV4cHI6IEFTVEJpbmFyeU5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRjb25zdCBsZWZ0OiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24oZXhwci5sZWZ0LCBzY29wZSk7XG5cdFx0Y29uc3QgcmlnaHQ6IFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihleHByLnJpZ2h0LCBzY29wZSk7XG5cdFx0Y29uc3Qgb3A6IHN0cmluZyA9IGV4cHIub3BlcmF0b3I7XG5cblx0XHRpZiAobGVmdCBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSAmJiByaWdodCBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSkge1xuXHRcdFx0aWYgKGxlZnQuYWNjZXB0cyhyaWdodCkpIHtcblx0XHRcdFx0cmV0dXJuIGxlZnQ7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKEdSQU1NQVIuQVJJVEhNRVRJQy5pbmNsdWRlcyhvcCkpIHtcblx0XHRcdGlmIChsZWZ0LmFjY2VwdHMoVHlwZXMuTlVNQkVSKSAmJiByaWdodC5hY2NlcHRzKFR5cGVzLk5VTUJFUikpIHtcblx0XHRcdFx0cmV0dXJuIFR5cGVzLk5VTUJFUjtcblx0XHRcdH1cblx0XHRcdGlmIChsZWZ0LmFjY2VwdHMoVHlwZXMuU1RSSU5HKSB8fCByaWdodC5hY2NlcHRzKFR5cGVzLlNUUklORykpIHtcblx0XHRcdFx0cmV0dXJuIFR5cGVzLlNUUklORztcblx0XHRcdH1cblx0XHRcdHRoaXMudHlwZUVycm9yKGBBcml0aG1ldGljIG9wZXJhdG9yICcke29wfScgcmVxdWlyZXMgbnVtYmVyc2AsIGV4cHIpO1xuXHRcdH1cblxuXHRcdGlmIChHUkFNTUFSLkNPTVBBUklTT04uaW5jbHVkZXMob3ApKSB7XG5cdFx0XHRpZiAobGVmdC5hY2NlcHRzKFR5cGVzLk5VTUJFUikgJiYgcmlnaHQuYWNjZXB0cyhUeXBlcy5OVU1CRVIpKSB7XG5cdFx0XHRcdHJldHVybiBUeXBlcy5CT09MRUFOO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENvbXBhcmlzb24gJyR7b3B9JyByZXF1aXJlcyBudW1iZXJzYCwgZXhwcik7XG5cdFx0fVxuXG5cdFx0aWYgKEdSQU1NQVIuRVFVQUxJVFkuaW5jbHVkZXMob3ApKSB7XG5cdFx0XHRpZiAobGVmdC5hY2NlcHRzKHJpZ2h0KSkge1xuXHRcdFx0XHRyZXR1cm4gVHlwZXMuQk9PTEVBTjtcblx0XHRcdH1cblx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgY29tcGFyZSAke2xlZnQubmFtZX0gd2l0aCAke3JpZ2h0Lm5hbWV9YCwgZXhwcik7XG5cdFx0fVxuXG5cdFx0aWYgKEdSQU1NQVIuTE9HSUNBTC5pbmNsdWRlcyhvcCkpIHtcblx0XHRcdGlmIChsZWZ0LmFjY2VwdHMoVHlwZXMuQk9PTEVBTikgJiYgcmlnaHQuYWNjZXB0cyhUeXBlcy5CT09MRUFOKSkge1xuXHRcdFx0XHRyZXR1cm4gVHlwZXMuQk9PTEVBTjtcblx0XHRcdH1cblx0XHRcdHRoaXMudHlwZUVycm9yKGBMb2dpY2FsIG9wZXJhdG9yICcke29wfScgcmVxdWlyZXMgYm9vbGVhbnNgLCBleHByKTtcblx0XHR9XG5cblx0XHR0aGlzLnR5cGVFcnJvcihgSW52YWxpZCBiaW5hcnkgb3BlcmF0aW9uYCwgZXhwcik7XG5cdH1cblxuXG5cdHByaXZhdGUgY2hlY2tBc3NpZ25tZW50KG5vZGU6IEFTVEFzc2lnbm1lbnROb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0Y29uc3QgbGVmdFR5cGU6IFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLmxlZnQsIHNjb3BlKTtcblx0XHRjb25zdCByaWdodFR5cGU6IFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLnJpZ2h0LCBzY29wZSk7XG5cblx0XHR0aGlzLmNoZWNrQXNzaWduYWJsZShsZWZ0VHlwZSwgcmlnaHRUeXBlLCBub2RlLnJpZ2h0KTtcblxuXHRcdHRoaXMuY2hlY2tSZWFkb25seShub2RlLmxlZnQsIHNjb3BlKTtcblxuXHRcdHJldHVybiBsZWZ0VHlwZTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tSZWFkb25seShub2RlOiBBU1ROb2RlLCBzY29wZTogVHlwZVNjb3BlKTogdm9pZCB7XG5cdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RNZW1iZXJOb2RlKSB7XG5cdFx0XHRjb25zdCBvYmplY3RUeXBlOiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5vYmplY3QsIHNjb3BlKTtcblx0XHRcdGlmICghKG9iamVjdFR5cGUgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUpKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgYXNzaWduIHRvIG5vbi1vYmplY3RgLCBub2RlKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sID0gb2JqZWN0VHlwZS5jbGFzc1N5bWJvbDtcblx0XHRcdGNvbnN0IHN0YXRpY0ZpZWxkU3ltYm9sOiBGaWVsZFN5bWJvbCB8IG51bGwgPSBjbGFzc1N5bWJvbC5yZXNvbHZlU3RhdGljRmllbGRTeW1ib2wobm9kZS5wcm9wZXJ0eSk7XG5cdFx0XHRpZiAoc3RhdGljRmllbGRTeW1ib2wpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBpbnN0YW5jZUZpZWxkU3ltYm9sOiBGaWVsZFN5bWJvbCB8IG51bGwgPSBjbGFzc1N5bWJvbC5yZXNvbHZlSW5zdGFuY2VGaWVsZFN5bWJvbChub2RlLnByb3BlcnR5KTtcblx0XHRcdGlmICghaW5zdGFuY2VGaWVsZFN5bWJvbCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgVW5rbm93biBtZW1iZXIgJHtub2RlLnByb3BlcnR5fWAsIG5vZGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBpbkNvbnN0cnVjdG9yOiBib29sZWFuID0gc2NvcGUuY3VycmVudE1ldGhvZFN5bWJvbD8ubmFtZSA9PT0gR1JBTU1BUi5DT05TVFJVQ1RPUjtcblx0XHRcdGxldCBpc1RoaXM6IGJvb2xlYW4gPSBmYWxzZTtcblx0XHRcdGlmIChzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sIGluc3RhbmNlb2YgQ2xhc3NTeW1ib2wpIHtcblx0XHRcdFx0aXNUaGlzID0gc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCA9PT0gb2JqZWN0VHlwZS5jbGFzc1N5bWJvbDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCEoaW5Db25zdHJ1Y3RvciAmJiBpc1RoaXMpKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgYXNzaWduIHRvIHJlYWRvbmx5IHByb3BlcnR5ICcke2luc3RhbmNlRmllbGRTeW1ib2wubmFtZX0nYCwgbm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0ZpZWxkQWNjZXNzKG5vZGU6IEFTVE1lbWJlck5vZGUsIGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCwgZmllbGRTeW1ib2w6IEZpZWxkU3ltYm9sLCBzY29wZTogVHlwZVNjb3BlKTogdm9pZCB7XG5cdFx0aWYgKGZpZWxkU3ltYm9sLmlzUHVibGljKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCFzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGFjY2VzcyBwcml2YXRlIG1lbWJlciAke25vZGUucHJvcGVydHl9IG9mICR7Y2xhc3NTeW1ib2wubmFtZX1gLCBub2RlKTtcblx0XHR9XG5cblx0XHRpZiAoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCAhPT0gZmllbGRTeW1ib2wub3duZXIpIHtcblx0XHRcdGlmIChzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sIGluc3RhbmNlb2YgQ2xhc3NTeW1ib2xcblx0XHRcdFx0JiYgc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbC5zdXBlckNsYXNzU3ltYm9sICE9PSBmaWVsZFN5bWJvbC5vd25lcikge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGFjY2VzcyBwcml2YXRlIG1lbWJlciAke25vZGUucHJvcGVydHl9IG9mICR7Y2xhc3NTeW1ib2wubmFtZX1gLCBub2RlKTtcblxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tJbnN0YW5jZU1ldGhvZEFjY2Vzcyhub2RlOiBBU1RNZW1iZXJOb2RlLCBjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wsIG1ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sLCBzY29wZTogVHlwZVNjb3BlKTogdm9pZCB7XG5cdFx0aWYgKG1ldGhvZFN5bWJvbC5pc1B1YmxpYykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICghc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBhY2Nlc3MgcHJpdmF0ZSBtZXRob2QgJHtub2RlLnByb3BlcnR5fSBvZiAke2NsYXNzU3ltYm9sLm5hbWV9YCwgbm9kZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgIT09IG1ldGhvZFN5bWJvbC5vd25lcikge1xuXHRcdFx0aWYgKHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgaW5zdGFuY2VvZiBDbGFzc1N5bWJvbFxuXHRcdFx0XHQmJiBzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sLnN1cGVyQ2xhc3NTeW1ib2wgIT09IG1ldGhvZFN5bWJvbC5vd25lcikge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGFjY2VzcyBwcml2YXRlIG1ldGhvZCAke25vZGUucHJvcGVydHl9IG9mICR7Y2xhc3NTeW1ib2wubmFtZX1gLCBub2RlKTtcblxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tTdGF0aWNNZXRob2RBY2Nlc3MoY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sLCBtZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCwgc2NvcGU6IFR5cGVTY29wZSk6IHZvaWQge1xuXHRcdGlmICghbWV0aG9kU3ltYm9sLmlzU3RhdGljKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNhbGwgaW5zdGFuY2UgbWV0aG9kICR7Y2xhc3NTeW1ib2wubmFtZX0uJHttZXRob2RTeW1ib2wubmFtZX0gYXMgc3RhdGljIG1ldGhvZGApO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChtZXRob2RTeW1ib2wuaXNQdWJsaWMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIXNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgYWNjZXNzIHByaXZhdGUgbWV0aG9kICR7bWV0aG9kU3ltYm9sLm5hbWV9IG9mICR7Y2xhc3NTeW1ib2wubmFtZX1gLFxuXHRcdFx0ICAgICAgICAgICAgICAgbWV0aG9kU3ltYm9sLm5vZGUpO1xuXHRcdH1cblxuXHRcdGlmIChzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sICE9PSBtZXRob2RTeW1ib2wub3duZXIpIHtcblx0XHRcdGlmIChzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sIGluc3RhbmNlb2YgQ2xhc3NTeW1ib2xcblx0XHRcdFx0JiYgc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbC5zdXBlckNsYXNzU3ltYm9sICE9PSBtZXRob2RTeW1ib2wub3duZXIpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBhY2Nlc3MgcHJpdmF0ZSBtZXRob2QgJHttZXRob2RTeW1ib2wubmFtZX0gb2YgJHtjbGFzc1N5bWJvbC5uYW1lfWAsXG5cdFx0XHRcdCAgICAgICAgICAgICAgIG1ldGhvZFN5bWJvbC5ub2RlKTtcblxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tNZW1iZXJFeHByZXNzaW9uKG5vZGU6IEFTVE1lbWJlck5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRjb25zdCBvYmplY3RUeXBlOiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5vYmplY3QsIHNjb3BlKTtcblxuXHRcdGlmIChvYmplY3RUeXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0XHRjb25zdCBjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wgPSBvYmplY3RUeXBlLmNsYXNzU3ltYm9sO1xuXG5cdFx0XHRjb25zdCBpbnN0YW5jZUZpZWxkU3ltYm9sOiBGaWVsZFN5bWJvbCB8IG51bGwgPSBjbGFzc1N5bWJvbC5yZXNvbHZlSW5zdGFuY2VGaWVsZFN5bWJvbChub2RlLnByb3BlcnR5KTtcblx0XHRcdGlmIChpbnN0YW5jZUZpZWxkU3ltYm9sKSB7XG5cdFx0XHRcdHRoaXMuY2hlY2tGaWVsZEFjY2Vzcyhub2RlLCBjbGFzc1N5bWJvbCwgaW5zdGFuY2VGaWVsZFN5bWJvbCwgc2NvcGUpO1xuXHRcdFx0XHRyZXR1cm4gaW5zdGFuY2VGaWVsZFN5bWJvbC5maWVsZFR5cGU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHN0YXRpY0ZpZWxkU3ltYm9sOiBGaWVsZFN5bWJvbCB8IG51bGwgPSBjbGFzc1N5bWJvbC5yZXNvbHZlU3RhdGljRmllbGRTeW1ib2wobm9kZS5wcm9wZXJ0eSk7XG5cdFx0XHRpZiAoc3RhdGljRmllbGRTeW1ib2wpIHtcblx0XHRcdFx0dGhpcy5jaGVja0ZpZWxkQWNjZXNzKG5vZGUsIGNsYXNzU3ltYm9sLCBzdGF0aWNGaWVsZFN5bWJvbCwgc2NvcGUpO1xuXHRcdFx0XHRyZXR1cm4gc3RhdGljRmllbGRTeW1ib2wuZmllbGRUeXBlO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgVW5rbm93biBtZW1iZXIgJHtub2RlLnByb3BlcnR5fWAsIG5vZGUpO1xuXHRcdH1cblxuXHRcdHRoaXMudHlwZUVycm9yKFwiQ2Fubm90IGFjY2VzcyBtZW1iZXIgb2Ygbm9uLW9iamVjdFwiLCBub2RlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tUaGlzRXhwcmVzc2lvbihub2RlOiBBU1ROb2RlLCBzY29wZTogVHlwZVNjb3BlKTogQ2xhc3NSZWZUeXBlIHtcblx0XHRpZiAoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCBpbnN0YW5jZW9mIENsYXNzU3ltYm9sKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENsYXNzUmVmVHlwZShzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sKTtcblx0XHR9XG5cdFx0dGhpcy50eXBlRXJyb3IoJ3RoaXMgb3V0c2lkZSBvZiBjbGFzcycsIG5vZGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0lkZW50aWZpZXJFeHByZXNzaW9uKG5vZGU6IEFTVE5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRpZiAoc2NvcGUuaGFzVHlwZShub2RlLm5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gc2NvcGUuZ2V0VHlwZShub2RlLm5hbWUpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5oYXNTeW1ib2wobm9kZS5uYW1lKSkge1xuXHRcdFx0cmV0dXJuIG5ldyBDbGFzc1JlZlR5cGUodGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChub2RlLm5hbWUpKTtcblx0XHR9XG5cdFx0dGhpcy50eXBlRXJyb3IoYFVuZGVmaW5lZCBpZGVudGlmaWVyICR7bm9kZS5uYW1lfWAsIG5vZGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja05ld0V4cHJlc3Npb24obm9kZTogQVNUTmV3Tm9kZSwgc2NvcGU6IFR5cGVTY29wZSwgZXhwZWN0ZWRUeXBlOiBUeXBlIHwgbnVsbCA9IG51bGwpOiBDbGFzc1JlZlR5cGUge1xuXHRcdGNvbnN0IGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCA9IHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2wobm9kZS5uYW1lKTtcblxuXHRcdGxldCBpbnN0YW5jZVR5cGU7XG5cdFx0aWYgKG5vZGUudHlwZUFubm90YXRpb24udHlwZUFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCB0eXBlQXJndW1lbnRzID0gbm9kZVxuXHRcdFx0XHQudHlwZUFubm90YXRpb25cblx0XHRcdFx0LnR5cGVBcmd1bWVudHNcblx0XHRcdFx0Lm1hcCh0eXBlQXJndW1lbnQgPT4gdGhpcy53cmFwVHlwZSh0eXBlQXJndW1lbnQsIHNjb3BlKSk7XG5cblx0XHRcdGlmICh0eXBlQXJndW1lbnRzLmxlbmd0aCAhPT0gY2xhc3NTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMubGVuZ3RoKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBXcm9uZyBudW1iZXIgb2YgdHlwZSBhcmd1bWVudHNgLCBub2RlKTtcblx0XHRcdH1cblxuXHRcdFx0aW5zdGFuY2VUeXBlID0gbmV3IENsYXNzUmVmVHlwZShjbGFzc1N5bWJvbCwgdHlwZUFyZ3VtZW50cyk7XG5cdFx0fSBlbHNlIGlmIChleHBlY3RlZFR5cGUgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUpIHtcblx0XHRcdGluc3RhbmNlVHlwZSA9IGV4cGVjdGVkVHlwZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aW5zdGFuY2VUeXBlID0gbmV3IENsYXNzUmVmVHlwZShcblx0XHRcdFx0Y2xhc3NTeW1ib2wsXG5cdFx0XHRcdGNsYXNzU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLm1hcCgoKSA9PiBUeXBlcy5NSVhFRClcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYgKGNsYXNzU3ltYm9sLmNvbnN0cnVjdG9yTWV0aG9kU3ltYm9sKSB7XG5cdFx0XHR0aGlzLmNoZWNrQ2FsbEFyZ3VtZW50cyhjbGFzc1N5bWJvbC5jb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbCwgbm9kZS5hcmd1bWVudHMsIHNjb3BlKTtcblx0XHR9XG5cblx0XHRpZiAoZXhwZWN0ZWRUeXBlICYmICFleHBlY3RlZFR5cGUuYWNjZXB0cyhpbnN0YW5jZVR5cGUpKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgVHlwZSBtaXNtYXRjaDogJHtleHBlY3RlZFR5cGV9IDw+ICR7aW5zdGFuY2VUeXBlfWAsIG5vZGUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBpbnN0YW5jZVR5cGU7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQXJyYXlFeHByZXNzaW9uKG5vZGU6IEFTVEFycmF5Tm9kZSwgc2NvcGU6IFR5cGVTY29wZSwgZXhwZWN0ZWRUeXBlOiBUeXBlIHwgbnVsbCA9IG51bGwpOiBDbGFzc1JlZlR5cGUge1xuXG5cdFx0aWYgKG5vZGUuZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRpZiAoZXhwZWN0ZWRUeXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0XHRcdGV4cGVjdGVkVHlwZSA9IGV4cGVjdGVkVHlwZS50eXBlQXJndW1lbnRzWzBdIHx8IG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzLm5ld0FycmF5VHlwZU9mKGV4cGVjdGVkVHlwZSB8fCBUeXBlcy5NSVhFRCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY2xhc3NSZWZOYW1lID0gUHJpbWl0aXZlQ2xhc3NUeXBlcy5nZXRDbGFzc1JlZk5hbWUoUHJpbWl0aXZlQ2xhc3NUeXBlcy5BUlJBWSk7XG5cblx0XHRsZXQgZXhwZWN0ZWRUeXBlT2ZJdGVtOiBUeXBlO1xuXHRcdGlmIChleHBlY3RlZFR5cGUgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUgJiYgZXhwZWN0ZWRUeXBlLmNsYXNzU3ltYm9sLm5hbWUgPT09IGNsYXNzUmVmTmFtZSkge1xuXHRcdFx0ZXhwZWN0ZWRUeXBlT2ZJdGVtID0gZXhwZWN0ZWRUeXBlLnR5cGVBcmd1bWVudHNbMF0gfHwgVHlwZXMuTUlYRUQ7XG5cdFx0fSBlbHNlIGlmIChub2RlLmVsZW1lbnRzWzBdKSB7XG5cdFx0XHRleHBlY3RlZFR5cGVPZkl0ZW0gPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLmVsZW1lbnRzWzBdLCBzY29wZSwgZXhwZWN0ZWRUeXBlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoJ0FycmF5IGV4cHJlc3Npb24gbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBlbGVtZW50Jywgbm9kZSk7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBpdGVtIG9mIG5vZGUuZWxlbWVudHMpIHtcblx0XHRcdGNvbnN0IGFjdHVhbFR5cGVPZkl0ZW06IFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihpdGVtLCBzY29wZSwgZXhwZWN0ZWRUeXBlT2ZJdGVtKTtcblx0XHRcdGlmICghZXhwZWN0ZWRUeXBlT2ZJdGVtLmFjY2VwdHMoYWN0dWFsVHlwZU9mSXRlbSkpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoXG5cdFx0XHRcdFx0YEFycmF5IGVsZW1lbnRzIG11c3QgaGF2ZSBzYW1lIHR5cGUsIGdvdCAke2V4cGVjdGVkVHlwZU9mSXRlbX0gYW5kICR7YWN0dWFsVHlwZU9mSXRlbX1gLFxuXHRcdFx0XHRcdG5vZGVcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5uZXdBcnJheVR5cGVPZihleHBlY3RlZFR5cGVPZkl0ZW0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1VuYXJ5RXhwcmVzc2lvbihub2RlOiBBU1RVbmFyeU5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRjb25zdCBvcGVyYW5kOiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5hcmd1bWVudCwgc2NvcGUpO1xuXHRcdGNvbnN0IG9wOiBzdHJpbmcgPSBub2RlLm9wZXJhdG9yO1xuXG5cdFx0aWYgKG9wZXJhbmQgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUpIHtcblx0XHRcdHJldHVybiBvcGVyYW5kO1xuXHRcdH1cblxuXHRcdHN3aXRjaCAob3ApIHtcblx0XHRcdGNhc2UgR1JBTU1BUi5FWENMQU1BVElPTl9NQVJLOiB7XG5cdFx0XHRcdGlmIChvcGVyYW5kLmVxdWFscyhUeXBlcy5CT09MRUFOKSkge1xuXHRcdFx0XHRcdHJldHVybiBUeXBlcy5CT09MRUFOO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBVbmFyeSAnIScgcmVxdWlyZXMgYm9vbGVhbiwgZ290ICR7b3BlcmFuZC5uYW1lfWAsIG5vZGUpO1xuXHRcdFx0fVxuXHRcdFx0Y2FzZSBHUkFNTUFSLk1JTlVTOiB7XG5cdFx0XHRcdGlmIChvcGVyYW5kLmVxdWFscyhUeXBlcy5OVU1CRVIpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFR5cGVzLk5VTUJFUjtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgVW5hcnkgJy0nIHJlcXVpcmVzIG51bWJlciwgZ290ICR7b3BlcmFuZC5uYW1lfWAsIG5vZGUpO1xuXHRcdFx0fVxuXHRcdFx0Y2FzZSBHUkFNTUFSLlBMVVM6IHtcblx0XHRcdFx0aWYgKG9wZXJhbmQuZXF1YWxzKFR5cGVzLk5VTUJFUikpIHtcblx0XHRcdFx0XHRyZXR1cm4gVHlwZXMuTlVNQkVSO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBVbmFyeSAnKycgcmVxdWlyZXMgbnVtYmVyLCBnb3QgJHtvcGVyYW5kLm5hbWV9YCwgbm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMudHlwZUVycm9yKGBJbnZhbGlkIHVuYXJ5IG9wZXJhdG9yICR7b3B9YCwgbm9kZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrTGFtYmRhRXhwcmVzc2lvbihub2RlOiBBU1RMYW1iZGFOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogTGFtYmRhVHlwZSB7XG5cdFx0Y29uc3QgbGFtYmRhU2NvcGUgPSBuZXcgVHlwZVNjb3BlKHNjb3BlKTtcblx0XHRjb25zdCBwYXJhbWV0ZXJzOiBQYXJhbWV0ZXJTeW1ib2xbXSA9IG5vZGUucGFyYW1ldGVycy5tYXAoKHBhcmFtZXRlck5vZGU6IEFTVFBhcmFtZXRlck5vZGUpOiBQYXJhbWV0ZXJTeW1ib2wgPT4ge1xuXHRcdFx0Y29uc3QgcGFyYW1ldGVyU3ltYm9sOiBQYXJhbWV0ZXJTeW1ib2wgPSB0aGlzLnBhcmFtZXRlck5vZGVUb1N5bWJvbChwYXJhbWV0ZXJOb2RlKTtcblxuXHRcdFx0bGFtYmRhU2NvcGUuZGVmaW5lVHlwZShwYXJhbWV0ZXJOb2RlLm5hbWUsIHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlKTtcblxuXHRcdFx0cmV0dXJuIHBhcmFtZXRlclN5bWJvbDtcblx0XHR9KTtcblxuXHRcdGlmIChub2RlLmNoaWxkcmVuWzBdKSB7XG5cdFx0XHRyZXR1cm4gbmV3IExhbWJkYVR5cGUocGFyYW1ldGVycywgdGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5jaGlsZHJlblswXSwgbGFtYmRhU2NvcGUpKTtcblx0XHR9XG5cblx0XHR0aGlzLnR5cGVFcnJvcignTGFtYmRhIGV4cHJlc3Npb24gbXVzdCBoYXZlIGEgcmV0dXJuIHR5cGUnLCBub2RlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tDYWxsRXhwcmVzc2lvbihub2RlOiBBU1RDYWxsTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGNvbnN0IGNhbGxlZSA9IG5vZGUuY2FsbGVlO1xuXG5cdFx0aWYgKGNhbGxlZS50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSICYmIGNhbGxlZS5uYW1lID09PSBHUkFNTUFSLlNVUEVSKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jaGVja1N1cGVyQ29uc3RydWN0b3JDYWxsKG5vZGUsIHNjb3BlKTtcblx0XHR9XG5cblx0XHQvLyBDbGFzcy5tZXRob2QoKVxuXHRcdGlmIChjYWxsZWUgaW5zdGFuY2VvZiBBU1RNZW1iZXJOb2RlXG5cdFx0XHQmJiBjYWxsZWUub2JqZWN0LnR5cGUgPT09IEFTVE5vZGVUeXBlLklERU5USUZJRVJcblx0XHRcdCYmIHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKGNhbGxlZS5vYmplY3QubmFtZSlcblx0XHQpIHtcblx0XHRcdHJldHVybiB0aGlzLmNoZWNrU3RhdGljQ2FsbChcblx0XHRcdFx0Y2FsbGVlLm9iamVjdC5uYW1lLFxuXHRcdFx0XHRjYWxsZWUucHJvcGVydHksXG5cdFx0XHRcdG5vZGUuYXJndW1lbnRzLFxuXHRcdFx0XHRzY29wZVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBleHByLm1ldGhvZCgpXG5cdFx0aWYgKGNhbGxlZSBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpIHtcblx0XHRcdHJldHVybiB0aGlzLmNoZWNrSW5zdGFuY2VDYWxsKGNhbGxlZSwgbm9kZS5hcmd1bWVudHMsIHNjb3BlKTtcblx0XHR9XG5cblx0XHRpZiAoY2FsbGVlIGluc3RhbmNlb2YgQVNUTGFtYmRhTm9kZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tMYW1iZGFDYWxsKHRoaXMuY2hlY2tMYW1iZGFFeHByZXNzaW9uKGNhbGxlZSwgc2NvcGUpLCBub2RlLmFyZ3VtZW50cywgc2NvcGUpO1xuXHRcdH1cblxuXHRcdC8vIElkZW50aWZpZXI6IFZhcmlhYmxlIC8gTGFtYmRhXG5cdFx0aWYgKGNhbGxlZS50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0XHRpZiAoc2NvcGUuaGFzVHlwZShjYWxsZWUubmFtZSkpIHtcblx0XHRcdFx0Y29uc3QgdHlwZSA9IHNjb3BlLmdldFR5cGUoY2FsbGVlLm5hbWUpO1xuXHRcdFx0XHRpZiAodHlwZSBpbnN0YW5jZW9mIExhbWJkYVR5cGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0xhbWJkYUNhbGwodHlwZSwgbm9kZS5hcmd1bWVudHMsIHNjb3BlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNhbGwgbm9uLWZ1bmN0aW9uICR7Y2FsbGVlLm5hbWV9YCwgbm9kZSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZhbGxiYWNrOiBnbG9iYWxlIEZ1bmt0aW9uXG5cdFx0XHRyZXR1cm4gdGhpcy5jaGVja0Z1bmN0aW9uQ2FsbChjYWxsZWUubmFtZSwgbm9kZS5hcmd1bWVudHMsIHNjb3BlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gVHlwZXMuTUlYRUQ7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrU3VwZXJDb25zdHJ1Y3RvckNhbGwobm9kZTogQVNUQ2FsbE5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRjb25zdCBjdXJyZW50Q2xhc3MgPSBzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sO1xuXG5cdFx0aWYgKCEoY3VycmVudENsYXNzIGluc3RhbmNlb2YgQ2xhc3NTeW1ib2wpKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcignc3VwZXIoKSB1c2VkIG91dHNpZGUgb2YgY2xhc3MnLCBub2RlKTtcblx0XHR9XG5cblx0XHRpZiAoIWN1cnJlbnRDbGFzcy5zdXBlckNsYXNzKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcignc3VwZXIoKSB1c2VkIG91dHNpZGUgb2YgY2xhc3MgaGllcmFyY2h5Jywgbm9kZSk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc3VwZXJTeW1ib2w6IENsYXNzU3ltYm9sID0gdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChjdXJyZW50Q2xhc3Muc3VwZXJDbGFzcyk7XG5cdFx0aWYgKCFzdXBlclN5bWJvbC5jb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbCkge1xuXHRcdFx0aWYgKG5vZGUuYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoJ1N1cGVyIGNvbnN0cnVjdG9yIHRha2VzIG5vIGFyZ3VtZW50cycsIG5vZGUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIFR5cGVzLlZPSUQ7XG5cdFx0fVxuXG5cdFx0dGhpcy5jaGVja0NhbGxBcmd1bWVudHMoc3VwZXJTeW1ib2wuY29uc3RydWN0b3JNZXRob2RTeW1ib2wsIG5vZGUuYXJndW1lbnRzLCBzY29wZSk7XG5cblx0XHRyZXR1cm4gVHlwZXMuVk9JRDtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tDYWxsT25OdWxsT2JqZWN0VHlwZShvYmplY3RUeXBlOiBUeXBlLCBub2RlOiBBU1ROb2RlKTogdm9pZCB7XG5cdFx0aWYgKG9iamVjdFR5cGUuZXF1YWxzKFR5cGVzLk5VTEwpKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNhbGwgbWV0aG9kIG9uIG51bGxgLCBub2RlKTtcblx0XHR9XG5cdFx0aWYgKG9iamVjdFR5cGUgaW5zdGFuY2VvZiBOdWxsYWJsZVR5cGUpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgY2FsbCBtZXRob2Qgb24gbnVsbGFibGUgdHlwZSAke29iamVjdFR5cGV9YCwgbm9kZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0luc3RhbmNlQ2FsbChjYWxsZWU6IEFTVE1lbWJlck5vZGUsIGNhbGxBcmd1bWVudHM6IEFTVE5vZGVbXSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGxldCBvYmplY3RUeXBlOiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24oY2FsbGVlLm9iamVjdCwgc2NvcGUpO1xuXG5cdFx0b2JqZWN0VHlwZSA9IFR5cGVfYXV0b2JveGluZy5hdXRvYm94SWZOZWVkZWQob2JqZWN0VHlwZSwgdGhpcy5vYmplY3RSZWdpc3RyeSk7XG5cblx0XHR0aGlzLmNoZWNrQ2FsbE9uTnVsbE9iamVjdFR5cGUob2JqZWN0VHlwZSwgY2FsbGVlKTtcblxuXHRcdGlmIChvYmplY3RUeXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0XHRjb25zdCBtZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCA9IHRoaXMucmVzb2x2ZUluc3RhbmNlTWV0aG9kZShcblx0XHRcdFx0b2JqZWN0VHlwZS5jbGFzc1N5bWJvbCxcblx0XHRcdFx0Y2FsbGVlLnByb3BlcnR5XG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAobWV0aG9kU3ltYm9sLmlzU3RhdGljKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgY2FsbCBzdGF0aWMgbWV0aG9kICR7Y2FsbGVlLnByb3BlcnR5fSBvbiBpbnN0YW5jZSBvZiAke2NhbGxlZS5vYmplY3QubmFtZX1gLFxuXHRcdFx0XHQgICAgICAgICAgICAgICBjYWxsZWUpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmNoZWNrSW5zdGFuY2VNZXRob2RBY2Nlc3MoY2FsbGVlLCBvYmplY3RUeXBlLmNsYXNzU3ltYm9sLCBtZXRob2RTeW1ib2wsIHNjb3BlKTtcblxuXHRcdFx0Y29uc3Qgb3duZXI6IENsYXNzU3ltYm9sIHwgSW50ZXJmYWNlU3ltYm9sIHwgbnVsbCA9IG1ldGhvZFN5bWJvbC5vd25lcjtcblxuXHRcdFx0aWYgKG93bmVyID09PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgY2FsbCBtZXRob2Qgb24gbm9uLW9iamVjdGAsIGNhbGxlZSk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHN1YnN0aXR1dGlvbk1hcDogTWFwPHN0cmluZywgVHlwZT4gPSBidWlsZFR5cGVTdWJzdGl0dXRpb25NYXAoXG5cdFx0XHRcdG93bmVyLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLFxuXHRcdFx0XHRvYmplY3RUeXBlLnR5cGVBcmd1bWVudHNcblx0XHRcdCk7XG5cblx0XHRcdHRoaXMuY2hlY2tDYWxsQXJndW1lbnRzKG1ldGhvZFN5bWJvbCwgY2FsbEFyZ3VtZW50cywgc2NvcGUsIHN1YnN0aXR1dGlvbk1hcCk7XG5cblx0XHRcdHJldHVybiBzdWJzdGl0dXRlVHlwZShtZXRob2RTeW1ib2wucmV0dXJuVHlwZSwgc3Vic3RpdHV0aW9uTWFwKTtcblx0XHR9XG5cblx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNhbGwgbWV0aG9kIG9uIG5vbi1vYmplY3RgLCBjYWxsZWUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1N0YXRpY0NhbGwoY2xhc3NOYW1lOiBzdHJpbmcsIG1ldGhvZE5hbWU6IHN0cmluZywgY2FsbEFyZ3VtZW50czogQVNUTm9kZVtdLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0Y29uc3QgY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sID0gdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChjbGFzc05hbWUpO1xuXG5cdFx0Y29uc3QgbWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wgfCBudWxsID0gY2xhc3NTeW1ib2wuc3RhdGljTWV0aG9kU3ltYm9scy5nZXQobWV0aG9kTmFtZSkgfHwgbnVsbDtcblx0XHRpZiAoIW1ldGhvZFN5bWJvbCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFVua25vd24gc3RhdGljIG1ldGhvZCAke2NsYXNzTmFtZX0uJHttZXRob2ROYW1lfWApO1xuXHRcdH1cblxuXHRcdHRoaXMuY2hlY2tTdGF0aWNNZXRob2RBY2Nlc3MoY2xhc3NTeW1ib2wsIG1ldGhvZFN5bWJvbCwgc2NvcGUpXG5cblx0XHR0aGlzLmNoZWNrQ2FsbEFyZ3VtZW50cyhtZXRob2RTeW1ib2wsIGNhbGxBcmd1bWVudHMsIHNjb3BlKTtcblxuXHRcdHJldHVybiBtZXRob2RTeW1ib2wucmV0dXJuVHlwZTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tMYW1iZGFDYWxsKGxhbWJkYTogTGFtYmRhVHlwZSwgY2FsbEFyZ3VtZW50czogQVNUTm9kZVtdLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cblx0XHR0aGlzLmNoZWNrQ2FsbEFyZ3VtZW50cyhsYW1iZGEsIGNhbGxBcmd1bWVudHMsIHNjb3BlKTtcblxuXHRcdHJldHVybiBsYW1iZGEucmV0dXJuVHlwZTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tGdW5jdGlvbkNhbGwobmFtZTogc3RyaW5nLCBjYWxsQXJndW1lbnRzOiBBU1ROb2RlW10sIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRpZiAoIWdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5LmhhcyhuYW1lKSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFVua25vd24gZnVuY3Rpb24gJHtuYW1lfWApO1xuXHRcdH1cblxuXHRcdGNvbnN0IG5hdGl2ZUZ1bmN0aW9uOiBOYXRpdmVGdW5jdGlvbiA9IGdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5LmdldChuYW1lKTtcblxuXHRcdHRoaXMuY2hlY2tDYWxsQXJndW1lbnRzKG5hdGl2ZUZ1bmN0aW9uLCBjYWxsQXJndW1lbnRzLCBzY29wZSk7XG5cblx0XHRyZXR1cm4gbmF0aXZlRnVuY3Rpb24ucmV0dXJuVHlwZVxuXHRcdFx0PyB0aGlzLndyYXBUeXBlKG5hdGl2ZUZ1bmN0aW9uLnJldHVyblR5cGUsIHNjb3BlKVxuXHRcdFx0OiBUeXBlcy5WT0lEO1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJhbWV0ZXJzU3ltYm9sc0Zyb21DYWxsYWJsZVN5bWJvbChjYWxsYWJsZVN5bWJvbDogTWV0aG9kU3ltYm9sIHwgTGFtYmRhVHlwZSB8IE5hdGl2ZUZ1bmN0aW9uKTogUGFyYW1ldGVyU3ltYm9sW10ge1xuXHRcdGlmIChjYWxsYWJsZVN5bWJvbCBpbnN0YW5jZW9mIE5hdGl2ZUZ1bmN0aW9uKSB7XG5cdFx0XHRyZXR1cm4gY2FsbGFibGVTeW1ib2xcblx0XHRcdFx0LnBhcmFtZXRlck5vZGVzXG5cdFx0XHRcdC5tYXAocGFyYW1ldGVyTm9kZSA9PiB0aGlzLnBhcmFtZXRlck5vZGVUb1N5bWJvbChwYXJhbWV0ZXJOb2RlKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNhbGxhYmxlU3ltYm9sLnBhcmFtZXRlclN5bWJvbHNcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tDYWxsQXJndW1lbnRzKFxuXHRcdGNhbGxhYmxlU3ltYm9sOiBNZXRob2RTeW1ib2wgfCBMYW1iZGFUeXBlIHwgTmF0aXZlRnVuY3Rpb24sXG5cdFx0Y2FsbEFyZ3VtZW50czogQVNUTm9kZVtdLFxuXHRcdHNjb3BlOiBUeXBlU2NvcGUsXG5cdFx0c3Vic3RpdHV0aW9uTWFwOiBNYXA8c3RyaW5nLCBUeXBlPiA9IG5ldyBNYXAoKVxuXHQpOiB2b2lkIHtcblx0XHRjb25zdCBjYWxsU2NvcGUgPSBuZXcgVHlwZVNjb3BlKHNjb3BlKTtcblx0XHRsZXQgcGFyYW1ldGVyU3ltYm9scyA9IHRoaXMucGFyYW1ldGVyc1N5bWJvbHNGcm9tQ2FsbGFibGVTeW1ib2woY2FsbGFibGVTeW1ib2wpO1xuXG5cdFx0aWYgKGNhbGxBcmd1bWVudHMubGVuZ3RoID4gcGFyYW1ldGVyU3ltYm9scy5sZW5ndGgpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKFwiQXJndW1lbnQgY291bnQgbWlzbWF0Y2hcIik7XG5cdFx0fVxuXG5cdFx0bGV0IGFjdHVhbFR5cGU6IFR5cGU7XG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHBhcmFtZXRlclN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHBhcmFtZXRlclN5bWJvbDogUGFyYW1ldGVyU3ltYm9sIHwgbnVsbCA9IHBhcmFtZXRlclN5bWJvbHNbaV0gfHwgbnVsbDtcblx0XHRcdGNvbnN0IGNhbGxBcmd1bWVudDogQVNUTm9kZSB8IG51bGwgPSBjYWxsQXJndW1lbnRzW2ldIHx8IG51bGw7XG5cblx0XHRcdGlmIChwYXJhbWV0ZXJTeW1ib2wpIHtcblx0XHRcdFx0Y29uc3QgZXhwZWN0ZWRUeXBlOiBUeXBlID0gc3Vic3RpdHV0ZVR5cGUocGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGUsIHN1YnN0aXR1dGlvbk1hcCk7XG5cblx0XHRcdFx0aWYgKGNhbGxBcmd1bWVudCkge1xuXHRcdFx0XHRcdGFjdHVhbFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihjYWxsQXJndW1lbnQsIGNhbGxTY29wZSwgZXhwZWN0ZWRUeXBlKTtcblx0XHRcdFx0fSBlbHNlIGlmIChwYXJhbWV0ZXJTeW1ib2wuZGVmYXVsdFR5cGUpIHtcblx0XHRcdFx0XHRhY3R1YWxUeXBlID0gcGFyYW1ldGVyU3ltYm9sLmRlZmF1bHRUeXBlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMudHlwZUVycm9yKGBNaXNzaW5nIGFyZ3VtZW50ICR7cGFyYW1ldGVyU3ltYm9sLm5hbWV9YCwgY2FsbEFyZ3VtZW50KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuY2hlY2tBc3NpZ25hYmxlKGV4cGVjdGVkVHlwZSwgYWN0dWFsVHlwZSwgY2FsbEFyZ3VtZW50c1tpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0Fzc2lnbmFibGUoZXhwZWN0ZWRUeXBlOiBUeXBlLCBhY3R1YWxUeXBlOiBUeXBlLCBub2RlOiBBU1ROb2RlIHwgbnVsbCA9IG51bGwpOiB2b2lkIHtcblx0XHRpZiAoZXhwZWN0ZWRUeXBlLmVxdWFscyhhY3R1YWxUeXBlKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChleHBlY3RlZFR5cGUgaW5zdGFuY2VvZiBNaXhlZFR5cGUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoZXhwZWN0ZWRUeXBlIGluc3RhbmNlb2YgTnVsbGFibGVUeXBlKSB7XG5cdFx0XHRpZiAoYWN0dWFsVHlwZSA9PT0gVHlwZXMuTlVMTCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoZXhwZWN0ZWRUeXBlLmlubmVyLmFjY2VwdHMoYWN0dWFsVHlwZSkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChleHBlY3RlZFR5cGUuYWNjZXB0cyhhY3R1YWxUeXBlKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMudHlwZUVycm9yKGBUeXBlIG1pc21hdGNoOiAke2V4cGVjdGVkVHlwZX0gPD4gJHthY3R1YWxUeXBlfWAsIG5vZGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0JvZHkoY2hpbGRyZW46IEFTVE5vZGVbXSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGxldCByZXR1cm5UeXBlOiBUeXBlID0gVHlwZXMuTUlYRUQ7XG5cblx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG5cdFx0XHRjb25zdCBzdGF0ZW1lbnRSZXN1bHQgPSB0aGlzLmNoZWNrU3RhdGVtZW50KGNoaWxkLCBzY29wZSk7XG5cdFx0XHRpZiAoc3RhdGVtZW50UmVzdWx0LmRpZFJldHVybiAmJiBzdGF0ZW1lbnRSZXN1bHQucmV0dXJuVHlwZSkge1xuXHRcdFx0XHRyZXR1cm5UeXBlID0gc3RhdGVtZW50UmVzdWx0LnJldHVyblR5cGU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJldHVyblR5cGU7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrUmV0dXJuVHlwZShleHBlY3RlZFR5cGU6IFR5cGUsIGFjdHVhbFR5cGU6IFR5cGUsIG5vZGU6IEFTVE1ldGhvZE5vZGUpOiB2b2lkIHtcblx0XHQvLyB2b2lkLU1ldGhvZGVcblx0XHRpZiAoZXhwZWN0ZWRUeXBlID09PSBUeXBlcy5WT0lEKSB7XG5cdFx0XHRpZiAoYWN0dWFsVHlwZSAhPT0gVHlwZXMuTUlYRUQgJiYgYWN0dWFsVHlwZSAhPT0gVHlwZXMuVk9JRCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IHJldHVybiAke2FjdHVhbFR5cGV9IGZyb20gdm9pZCBtZXRob2RgLCBub2RlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBrZWluIHJldHVybiB2b3JoYW5kZW5cblx0XHRpZiAoYWN0dWFsVHlwZSA9PT0gVHlwZXMuTUlYRUQpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBNaXNzaW5nIHJldHVybiBzdGF0ZW1lbnQgKGV4cGVjdGVkICR7ZXhwZWN0ZWRUeXBlfSlgLCBub2RlKTtcblx0XHR9XG5cblx0XHQvLyB0eXAtaW5rb21wYXRpYmVsXG5cdFx0aWYgKCFleHBlY3RlZFR5cGUuYWNjZXB0cyhhY3R1YWxUeXBlKSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFJldHVybiB0eXBlIG1pc21hdGNoOiBleHBlY3RlZCAke2V4cGVjdGVkVHlwZX0sIGdvdCAke2FjdHVhbFR5cGV9YCwgbm9kZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1ZEb21Ob2RlKG5vZGU6IEFTVFZEb21Ob2RlKTogVHlwZSB7XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sID0gdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChub2RlLnRhZyk7XG5cblx0XHRcdGNvbnN0IG1ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sID0gdGhpcy5yZXNvbHZlSW5zdGFuY2VNZXRob2RlKGNsYXNzU3ltYm9sLCAncmVuZGVyJyk7XG5cblx0XHRcdGlmICghbWV0aG9kU3ltYm9sKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDb21wb25lbnQgJyR7bm9kZS50YWd9JyBoYXMgbm8gcmVuZGVyKCkgbWV0aG9kYCwgbm9kZSk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuY2hlY2tBc3NpZ25hYmxlKG1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlLCBUeXBlcy5WTk9ERSwgbm9kZSk7XG5cblx0XHRcdHJldHVybiBUeXBlcy5WTk9ERTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFR5cGVzLlZOT0RFO1xuXHR9XG5cblx0cHJpdmF0ZSByZXNvbHZlSW5zdGFuY2VNZXRob2RlKGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCwgbWV0aG9kTmFtZTogc3RyaW5nKTogTWV0aG9kU3ltYm9sIHtcblx0XHQvKiogQHR5cGUge01ldGhvZFN5bWJvbHxudWxsfSAqL1xuXHRcdGNvbnN0IG1ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sIHwgbnVsbCA9IHRoaXMucmVzb2x2ZUluSGllcmFyY2h5KFxuXHRcdFx0Y2xhc3NTeW1ib2wsXG5cdFx0XHRjbGFzc1N5bWJvbCA9PiBjbGFzc1N5bWJvbC5pbnN0YW5jZU1ldGhvZFN5bWJvbHMuZ2V0KG1ldGhvZE5hbWUpIHx8IG51bGxcblx0XHQpO1xuXG5cdFx0aWYgKCFtZXRob2RTeW1ib2wpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBVbmtub3duIG1ldGhvZCAke2NsYXNzU3ltYm9sLm5hbWV9LiR7bWV0aG9kTmFtZX1gLCBjbGFzc1N5bWJvbC5ub2RlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWV0aG9kU3ltYm9sO1xuXHR9XG5cblx0cHJpdmF0ZSByZXNvbHZlSW5IaWVyYXJjaHkoY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sLCByZXNvbHZlcjogKGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCkgPT4gYW55KTogYW55IHtcblx0XHRsZXQgY3VycmVudDogQ2xhc3NTeW1ib2wgfCBudWxsID0gY2xhc3NTeW1ib2w7XG5cblx0XHR3aGlsZSAoY3VycmVudCkge1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gcmVzb2x2ZXIoY3VycmVudCk7XG5cdFx0XHRpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQgJiYgcmVzdWx0ICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghY3VycmVudC5zdXBlckNsYXNzKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRjdXJyZW50ID0gdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChjdXJyZW50LnN1cGVyQ2xhc3MpO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cHJpdmF0ZSBuZXdBcnJheVR5cGVPZihlbGVtZW50VHlwZTogVHlwZSk6IENsYXNzUmVmVHlwZSB7XG5cdFx0Y29uc3QgY2xhc3NOYW1lOiBzdHJpbmcgfCBudWxsID0gUHJpbWl0aXZlQ2xhc3NUeXBlcy5nZXRDbGFzc1JlZk5hbWUoUHJpbWl0aXZlQ2xhc3NUeXBlcy5BUlJBWSk7XG5cblx0XHRpZiAoY2xhc3NOYW1lID09PSBudWxsKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcignSW50ZXJuYWwgZXJyb3I6IENhbm5vdCBmaW5kIGNsYXNzIG5hbWUgZm9yIGFycmF5IHR5cGUuJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBDbGFzc1JlZlR5cGUodGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChjbGFzc05hbWUpLCBbZWxlbWVudFR5cGVdKTtcblx0fVxuXG5cdHByaXZhdGUgd3JhcFR5cGUodHlwZTogQVNUVHlwZU5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRyZXR1cm4gd3JhcFR5cGUodHlwZSwgdGhpcy5vYmplY3RSZWdpc3RyeSwgc2NvcGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJhbWV0ZXJOb2RlVG9TeW1ib2wocGFyYW1ldGVyTm9kZTogQVNUUGFyYW1ldGVyTm9kZSwgc2NvcGU6IFR5cGVTY29wZSA9IG5ldyBUeXBlU2NvcGUoKSk6IFBhcmFtZXRlclN5bWJvbCB7XG5cdFx0Y29uc3QgcGFyYW1ldGVyVHlwZSA9IHBhcmFtZXRlck5vZGUudHlwZUFubm90YXRpb25cblx0XHRcdD8gdGhpcy53cmFwVHlwZShwYXJhbWV0ZXJOb2RlLnR5cGVBbm5vdGF0aW9uLCBzY29wZSlcblx0XHRcdDogVHlwZXMuTUlYRUQ7XG5cblx0XHRsZXQgZGVmYXVsdFR5cGUgPSBudWxsO1xuXHRcdGlmIChwYXJhbWV0ZXJOb2RlLmRlZmF1bHRWYWx1ZSkge1xuXHRcdFx0ZGVmYXVsdFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihwYXJhbWV0ZXJOb2RlLmRlZmF1bHRWYWx1ZSwgbmV3IFR5cGVTY29wZSgpKTtcblxuXHRcdFx0aWYgKGRlZmF1bHRUeXBlXG5cdFx0XHRcdCYmICFwYXJhbWV0ZXJUeXBlLmVxdWFscyhUeXBlcy5NSVhFRClcblx0XHRcdFx0JiYgIXBhcmFtZXRlclR5cGUuZXF1YWxzKGRlZmF1bHRUeXBlKSkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihcblx0XHRcdFx0XHRgRGVmYXVsdCB2YWx1ZSBmb3IgcGFyYW1ldGVyICcke3BhcmFtZXRlck5vZGUubmFtZX0nIGRvZXMgbm90IG1hdGNoIHR5cGUuYCxcblx0XHRcdFx0XHRwYXJhbWV0ZXJOb2RlXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBQYXJhbWV0ZXJTeW1ib2woXG5cdFx0XHRwYXJhbWV0ZXJOb2RlLm5hbWUsXG5cdFx0XHRwYXJhbWV0ZXJUeXBlLFxuXHRcdFx0ZGVmYXVsdFR5cGUsXG5cdFx0XHRwYXJhbWV0ZXJOb2RlXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgcmVnaXN0ZXJDbGFzc1N5bWJvbChjbGFzc05vZGU6IEFTVENsYXNzTm9kZSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmhhc1N5bWJvbChjbGFzc05vZGUubmFtZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBjbGFzc1Njb3BlID0gbmV3IFR5cGVTY29wZSgpO1xuXHRcdGNvbnN0IGNsYXNzU3ltYm9sID0gbmV3IENsYXNzU3ltYm9sKGNsYXNzTm9kZSk7XG5cblx0XHR0cnkge1xuXHRcdFx0aWYgKGNsYXNzU3ltYm9sLnN1cGVyQ2xhc3MpIHtcblx0XHRcdFx0Y2xhc3NTeW1ib2wuc3VwZXJDbGFzc1N5bWJvbCA9IHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2woY2xhc3NTeW1ib2wuc3VwZXJDbGFzcyk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdH1cblxuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuYWRkQ2xhc3NTeW1ib2woY2xhc3NTeW1ib2wpO1xuXG5cdFx0Y2xhc3NOb2RlLnR5cGVQYXJhbWV0ZXJzLmZvckVhY2gobmFtZSA9PiB7XG5cdFx0XHRjbGFzc1N5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5wdXNoKG5ldyBUeXBlUGFyYW1ldGVyU3ltYm9sKG5hbWUpKTtcblx0XHRcdGNsYXNzU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcobmFtZSwgbmV3IFR5cGVWYXJpYWJsZShuYW1lKSk7XG5cdFx0fSk7XG5cblx0XHRmb3IgKGNvbnN0IHR5cGVOb2RlIG9mIGNsYXNzTm9kZS5pbXBsZW1lbnRzSW50ZXJmYWNlcykge1xuXHRcdFx0Y29uc3QgaW50ZXJmYWNlVHlwZTogVHlwZSA9IHRoaXMud3JhcFR5cGUodHlwZU5vZGUsIGNsYXNzU2NvcGUpO1xuXHRcdFx0aWYgKGludGVyZmFjZVR5cGUgaW5zdGFuY2VvZiBJbnRlcmZhY2VSZWZUeXBlKSB7XG5cdFx0XHRcdGNsYXNzU3ltYm9sLmltcGxlbWVudHNJbnRlcmZhY2VzLnB1c2goaW50ZXJmYWNlVHlwZSk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYEV4cGVjdGVkIGludGVyZmFjZSB0eXBlLCBnb3QgJHtpbnRlcmZhY2VUeXBlfWAsIHR5cGVOb2RlKTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IG1lbWJlck5vZGUgb2YgY2xhc3NOb2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobWVtYmVyTm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5GSUVMRCAmJiBtZW1iZXJOb2RlIGluc3RhbmNlb2YgQVNURmllbGROb2RlKSB7XG5cdFx0XHRcdGNvbnN0IHRhcmdldDogTWFwPHN0cmluZywgRmllbGRTeW1ib2w+ID0gbWVtYmVyTm9kZS5tb2RpZmllcnMuc3RhdGljXG5cdFx0XHRcdFx0PyBjbGFzc1N5bWJvbC5zdGF0aWNGaWVsZFN5bWJvbHNcblx0XHRcdFx0XHQ6IGNsYXNzU3ltYm9sLmluc3RhbmNlRmllbGRTeW1ib2xzO1xuXG5cdFx0XHRcdGNvbnN0IGZpZWxkU3ltYm9sID0gbmV3IEZpZWxkU3ltYm9sKFxuXHRcdFx0XHRcdG1lbWJlck5vZGUsXG5cdFx0XHRcdFx0bWVtYmVyTm9kZS5maWVsZFR5cGVcblx0XHRcdFx0XHRcdD8gdGhpcy53cmFwVHlwZShtZW1iZXJOb2RlLmZpZWxkVHlwZSwgY2xhc3NTY29wZSlcblx0XHRcdFx0XHRcdDogVHlwZXMuTUlYRURcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRmaWVsZFN5bWJvbC5vd25lciA9IGNsYXNzU3ltYm9sO1xuXG5cdFx0XHRcdHRhcmdldC5zZXQoZmllbGRTeW1ib2wubmFtZSwgZmllbGRTeW1ib2wpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoKG1lbWJlck5vZGUudHlwZSA9PT0gQVNUTm9kZVR5cGUuTUVUSE9EIHx8IG1lbWJlck5vZGUudHlwZSA9PT0gQVNUTm9kZVR5cGUuQ09OU1RSVUNUT1IpXG5cdFx0XHRcdCYmIG1lbWJlck5vZGUgaW5zdGFuY2VvZiBBU1RNZXRob2ROb2RlKSB7XG5cblx0XHRcdFx0Y29uc3QgbWV0aG9kU2NvcGUgPSBuZXcgVHlwZVNjb3BlKGNsYXNzU2NvcGUpO1xuXHRcdFx0XHRjb25zdCBtZXRob2RTeW1ib2wgPSBuZXcgTWV0aG9kU3ltYm9sKG1lbWJlck5vZGUpO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC5vd25lciA9IGNsYXNzU3ltYm9sO1xuXG5cdFx0XHRcdG1lbWJlck5vZGUudHlwZVBhcmFtZXRlcnMuZm9yRWFjaChuYW1lID0+IHtcblx0XHRcdFx0XHRtZXRob2RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMucHVzaChuZXcgVHlwZVBhcmFtZXRlclN5bWJvbChuYW1lKSk7XG5cdFx0XHRcdFx0bWV0aG9kU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcobmFtZSwgbmV3IFR5cGVWYXJpYWJsZShuYW1lKSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzID0gbWVtYmVyTm9kZVxuXHRcdFx0XHRcdC5wYXJhbWV0ZXJzXG5cdFx0XHRcdFx0Lm1hcChwYXJhbWV0ZXJOb2RlID0+IHRoaXMucGFyYW1ldGVyTm9kZVRvU3ltYm9sKHBhcmFtZXRlck5vZGUsIG1ldGhvZFNjb3BlKSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnJldHVyblR5cGUgPSBtZW1iZXJOb2RlLnJldHVyblR5cGVcblx0XHRcdFx0XHQ/IHRoaXMud3JhcFR5cGUobWVtYmVyTm9kZS5yZXR1cm5UeXBlLCBtZXRob2RTY29wZSlcblx0XHRcdFx0XHQ6IFR5cGVzLlZPSUQ7XG5cblx0XHRcdFx0aWYgKG1lbWJlck5vZGUudHlwZSA9PT0gQVNUTm9kZVR5cGUuQ09OU1RSVUNUT1IpIHtcblx0XHRcdFx0XHRjbGFzc1N5bWJvbC5jb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbCA9IG1ldGhvZFN5bWJvbDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zdCB0YXJnZXQgPSBtZXRob2RTeW1ib2wuaXNTdGF0aWNcblx0XHRcdFx0XHRcdD8gY2xhc3NTeW1ib2wuc3RhdGljTWV0aG9kU3ltYm9sc1xuXHRcdFx0XHRcdFx0OiBjbGFzc1N5bWJvbC5pbnN0YW5jZU1ldGhvZFN5bWJvbHM7XG5cblx0XHRcdFx0XHR0YXJnZXQuc2V0KG1lbWJlck5vZGUubmFtZSwgbWV0aG9kU3ltYm9sKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVnaXN0ZXJJbnRlcmZhY2VTeW1ib2woaW50ZXJmYWNlTm9kZTogQVNUSW50ZXJmYWNlTm9kZSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmhhc1N5bWJvbChpbnRlcmZhY2VOb2RlLm5hbWUpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW50ZXJmYWNlU2NvcGUgPSBuZXcgVHlwZVNjb3BlKCk7XG5cdFx0Y29uc3QgaW50ZXJmYWNlU3ltYm9sID0gbmV3IEludGVyZmFjZVN5bWJvbChpbnRlcmZhY2VOb2RlKTtcblxuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuYWRkSW50ZXJmYWNlU3ltYm9sKGludGVyZmFjZVN5bWJvbCk7XG5cblx0XHRpbnRlcmZhY2VOb2RlLnR5cGVQYXJhbWV0ZXJzLmZvckVhY2gobmFtZSA9PiB7XG5cdFx0XHRpbnRlcmZhY2VTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMucHVzaChuZXcgVHlwZVBhcmFtZXRlclN5bWJvbChuYW1lKSk7XG5cdFx0XHRpbnRlcmZhY2VTY29wZS5kZWZpbmVUeXBlQmluZGluZyhuYW1lLCBuZXcgVHlwZVZhcmlhYmxlKG5hbWUpKTtcblx0XHR9KTtcblxuXHRcdGZvciAoY29uc3QgaW50ZXJmYWNlTmFtZSBvZiBpbnRlcmZhY2VOb2RlLmV4dGVuZHNJbnRlcmZhY2VzKSB7XG5cdFx0XHRjb25zdCBpbnRlcmZhY2VTeW1ib2w6IEludGVyZmFjZVN5bWJvbCA9IHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0SW50ZXJhY2VTeW1ib2woaW50ZXJmYWNlTmFtZSk7XG5cblx0XHRcdGludGVyZmFjZVN5bWJvbC5leHRlbmRzSW50ZXJmYWNlcy5wdXNoKGludGVyZmFjZVN5bWJvbCk7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBtZW1iZXJOb2RlIG9mIGludGVyZmFjZU5vZGUuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChtZW1iZXJOb2RlLnR5cGUgPT09IEFTVE5vZGVUeXBlLkZJRUxEICYmIG1lbWJlck5vZGUgaW5zdGFuY2VvZiBBU1RGaWVsZE5vZGUpIHtcblx0XHRcdFx0Y29uc3QgZmllbGRTeW1ib2wgPSBuZXcgRmllbGRTeW1ib2woXG5cdFx0XHRcdFx0bWVtYmVyTm9kZSxcblx0XHRcdFx0XHRtZW1iZXJOb2RlLmZpZWxkVHlwZVxuXHRcdFx0XHRcdFx0PyB0aGlzLndyYXBUeXBlKG1lbWJlck5vZGUuZmllbGRUeXBlLCBpbnRlcmZhY2VTY29wZSlcblx0XHRcdFx0XHRcdDogVHlwZXMuTUlYRURcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRmaWVsZFN5bWJvbC5vd25lciA9IGludGVyZmFjZVN5bWJvbDtcblxuXHRcdFx0XHRpbnRlcmZhY2VTeW1ib2wuc3RhdGljRmllbGRTeW1ib2xzLnNldChmaWVsZFN5bWJvbC5uYW1lLCBmaWVsZFN5bWJvbCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICgobWVtYmVyTm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5NRVRIT0QpICYmIG1lbWJlck5vZGUgaW5zdGFuY2VvZiBBU1RNZXRob2ROb2RlKSB7XG5cblx0XHRcdFx0Y29uc3QgbWV0aG9kU2NvcGUgPSBuZXcgVHlwZVNjb3BlKGludGVyZmFjZVNjb3BlKTtcblx0XHRcdFx0Y29uc3QgbWV0aG9kU3ltYm9sID0gbmV3IE1ldGhvZFN5bWJvbChtZW1iZXJOb2RlKTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wub3duZXIgPSBpbnRlcmZhY2VTeW1ib2w7XG5cblx0XHRcdFx0bWVtYmVyTm9kZS50eXBlUGFyYW1ldGVycy5mb3JFYWNoKChuYW1lOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRtZXRob2RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMucHVzaChuZXcgVHlwZVBhcmFtZXRlclN5bWJvbChuYW1lKSk7XG5cdFx0XHRcdFx0bWV0aG9kU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcobmFtZSwgbmV3IFR5cGVWYXJpYWJsZShuYW1lKSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzID0gbWVtYmVyTm9kZVxuXHRcdFx0XHRcdC5wYXJhbWV0ZXJzXG5cdFx0XHRcdFx0Lm1hcCgocGFyYW1ldGVyTm9kZTogQVNUUGFyYW1ldGVyTm9kZSk6IFBhcmFtZXRlclN5bWJvbCA9PiB0aGlzLnBhcmFtZXRlck5vZGVUb1N5bWJvbChcblx0XHRcdFx0XHRcdHBhcmFtZXRlck5vZGUsXG5cdFx0XHRcdFx0XHRtZXRob2RTY29wZVxuXHRcdFx0XHRcdCkpO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlID0gbWVtYmVyTm9kZS5yZXR1cm5UeXBlXG5cdFx0XHRcdFx0PyB0aGlzLndyYXBUeXBlKG1lbWJlck5vZGUucmV0dXJuVHlwZSwgbWV0aG9kU2NvcGUpXG5cdFx0XHRcdFx0OiBUeXBlcy5WT0lEO1xuXG5cdFx0XHRcdGludGVyZmFjZVN5bWJvbC5pbnN0YW5jZU1ldGhvZFN5bWJvbHMuc2V0KG1lbWJlck5vZGUubmFtZSwgbWV0aG9kU3ltYm9sKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHR5cGVFcnJvcihtZXNzYWdlOiBzdHJpbmcsIG5vZGU6IEFTVE5vZGUgfCBudWxsID0gbnVsbCk6IG5ldmVyIHtcblx0XHR0aHJvd1R5cGVFcnJvcihtZXNzYWdlLCBub2RlPy5zcGFuKTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi4vcnVudGltZS9ydW50aW1lX3JlZ2lzdHJ5LnRzXCI7XG5pbXBvcnQge0FTVEltcG9ydE5vZGUsIEFTVE5vZGUsIEFTVE5vZGVUeXBlfSBmcm9tIFwiLi4vYXN0XCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uL3BhcnNlci9zb3VyY2VcIjtcbmltcG9ydCB7UGFyc2VyfSBmcm9tIFwiLi4vcGFyc2VyL3BhcnNlclwiO1xuaW1wb3J0IHtFbnZpcm9ubWVudH0gZnJvbSBcIi4uL3J1bnRpbWUvb2JqZWN0cy50c1wiO1xuaW1wb3J0IHR5cGUge0Fic3RyYWN0RmlsZUxvYWRlcn0gZnJvbSBcIi4vbG9hZGVycy50c1wiO1xuaW1wb3J0IHt0aHJvd1J1bnRpbWVFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuXG5leHBvcnQgY2xhc3MgRGVwZW5kZW5jeSB7XG5cdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSA9IG5ldyBPYmplY3RSZWdpc3RyeSgpO1xuXHRuYW1lczogc3RyaW5nW107XG5cdHVybDogc3RyaW5nO1xuXHRhc3Q6IEFTVE5vZGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lczogc3RyaW5nW10sIHVybDogc3RyaW5nID0gJy4nKSB7XG5cdFx0dGhpcy5uYW1lcyA9IG5hbWVzO1xuXHRcdHRoaXMudXJsID0gdXJsO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBEZXBlbmRlbmN5TG9hZGVyIHtcblx0ZW52aXJvbm1lbnQ6IEVudmlyb25tZW50O1xuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cdGZpbGVMb2FkZXI6IEFic3RyYWN0RmlsZUxvYWRlcjtcblxuXHRjb25zdHJ1Y3RvcihlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZmlsZUxvYWRlcjogQWJzdHJhY3RGaWxlTG9hZGVyKSB7XG5cdFx0dGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkgPSBvYmplY3RSZWdpc3RyeTtcblx0XHR0aGlzLmZpbGVMb2FkZXIgPSBmaWxlTG9hZGVyO1xuXHR9XG5cblx0YXN5bmMgcGFyc2VEZXBlbmRlbmN5KGRlcGVuZGVuY3k6IERlcGVuZGVuY3kpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gYXdhaXQgdGhpcy5wYXJzZUZpbGUoZGVwZW5kZW5jeS51cmwpXG5cdFx0ICAgICAgICAgICAgICAgICAudGhlbihhc3QgPT4gZGVwZW5kZW5jeS5hc3QgPSBhc3QpXG5cdFx0ICAgICAgICAgICAgICAgICAudGhlbihhc3QgPT4gZGVwZW5kZW5jeS5vYmplY3RSZWdpc3RyeS5jb2xsZWN0QWxsKGFzdCkpO1xuXHR9XG5cblx0YXN5bmMgY29sbGVjdERlcGVuZGVuY2llcyhkZXBlbmRlbmN5OiBEZXBlbmRlbmN5LCBkZXBlbmRlbmNpZXM6IE1hcDxzdHJpbmcsIERlcGVuZGVuY3k+KTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIGF3YWl0IHRoaXMuY29sbGVjdFByb2dyYW1EZXBlbmRlbmNpZXMoZGVwZW5kZW5jeS5hc3QpXG5cdFx0ICAgICAgICAgICAgICAgICAudGhlbihjbGFzc0RlcGVuZGVuY2llcyA9PiB7XG5cdFx0XHQgICAgICAgICAgICAgICAgIGNsYXNzRGVwZW5kZW5jaWVzLmZvckVhY2goY2xhc3NEZXBlbmRlbmN5ID0+IHtcblx0XHRcdFx0ICAgICAgICAgICAgICAgICBpZiAoZGVwZW5kZW5jaWVzLmhhcyhjbGFzc0RlcGVuZGVuY3kudXJsKSkge1xuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXHRcdFx0XHQgICAgICAgICAgICAgICAgIH1cblx0XHRcdFx0ICAgICAgICAgICAgICAgICBkZXBlbmRlbmNpZXMuc2V0KGNsYXNzRGVwZW5kZW5jeS51cmwsIGNsYXNzRGVwZW5kZW5jeSk7XG5cdFx0XHQgICAgICAgICAgICAgICAgIH0pO1xuXHRcdCAgICAgICAgICAgICAgICAgfSk7XG5cdH1cblxuXHRhc3luYyBjb2xsZWN0UHJvZ3JhbURlcGVuZGVuY2llcyhhc3Q6IEFTVE5vZGUgfCBudWxsKTogUHJvbWlzZTxNYXA8c3RyaW5nLCBEZXBlbmRlbmN5Pj4ge1xuXHRcdGlmIChhc3QgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBuZXcgTWFwKCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZGVwZW5kZW5jaWVzOiBNYXA8c3RyaW5nLCBEZXBlbmRlbmN5PiA9IHRoaXMuY29sbGVjdENsYXNzRGVwZW5kZW5jaWVzKGFzdCk7XG5cdFx0Zm9yIChjb25zdCBkZXBlbmRlbmN5IG9mIGRlcGVuZGVuY2llcy52YWx1ZXMoKSkge1xuXHRcdFx0aWYgKGRlcGVuZGVuY3kudXJsID09PSAnLicpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRhd2FpdCB0aGlzLnBhcnNlRGVwZW5kZW5jeShkZXBlbmRlbmN5KTtcblx0XHRcdGF3YWl0IHRoaXMuY29sbGVjdERlcGVuZGVuY2llcyhkZXBlbmRlbmN5LCBkZXBlbmRlbmNpZXMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBkZXBlbmRlbmNpZXM7XG5cdH1cblxuXHRhc3luYyBjb2xsZWN0RGVmYXVsdERlcGVuZGVuY2llcygpOiBQcm9taXNlPE1hcDxzdHJpbmcsIERlcGVuZGVuY3k+PiB7XG5cdFx0Y29uc3QgZGVwZW5kZW5jaWVzOiBNYXA8c3RyaW5nLCBEZXBlbmRlbmN5PiA9IHRoaXMuZGVmYXVsdERlcGVuZGVuY2llcygpO1xuXG5cdFx0Zm9yIChjb25zdCBkZXBlbmRlbmN5IG9mIGRlcGVuZGVuY2llcy52YWx1ZXMoKSkge1xuXHRcdFx0YXdhaXQgdGhpcy5wYXJzZURlcGVuZGVuY3koZGVwZW5kZW5jeSk7XG5cdFx0XHRhd2FpdCB0aGlzLmNvbGxlY3REZXBlbmRlbmNpZXMoZGVwZW5kZW5jeSwgZGVwZW5kZW5jaWVzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGVwZW5kZW5jaWVzO1xuXHR9XG5cblx0ZGVmYXVsdERlcGVuZGVuY2llcygpOiBNYXA8c3RyaW5nLCBEZXBlbmRlbmN5PiB7XG5cdFx0Y29uc3QgZGVwZW5kZW5jaWVzOiBEZXBlbmRlbmN5W10gPSBbXG5cdFx0XHRuZXcgRGVwZW5kZW5jeShbJ0l0ZXJhdG9yJywgJ0l0ZXJhYmxlJ10sICcvbGlicmFyeS9jb250cmFjdHMubHlyYScpXG5cdFx0XTtcblxuXHRcdGNvbnN0IGRlZmF1bHREZXBlbmRlbmNpZXMgPSBuZXcgTWFwKCk7XG5cdFx0Zm9yIChjb25zdCBkZXBlbmRlbmN5IG9mIGRlcGVuZGVuY2llcykge1xuXHRcdFx0ZGVmYXVsdERlcGVuZGVuY2llcy5zZXQoZGVwZW5kZW5jeS51cmwsIGRlcGVuZGVuY3kpO1xuXHRcdH1cblxuXHRcdHJldHVybiBkZWZhdWx0RGVwZW5kZW5jaWVzO1xuXHR9XG5cblx0Y29sbGVjdENsYXNzRGVwZW5kZW5jaWVzKGFzdDogQVNUTm9kZSk6IE1hcDxzdHJpbmcsIERlcGVuZGVuY3k+IHtcblx0XHRjb25zdCBjbGFzc0RlcGVuZGVuY2llcyA9IG5ldyBNYXAoKTtcblxuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChub2RlLnR5cGUgPT09IEFTVE5vZGVUeXBlLklNUE9SVCkge1xuXHRcdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEltcG9ydE5vZGUpIHtcblx0XHRcdFx0XHRpZiAobm9kZS5mcm9tID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRjbGFzc0RlcGVuZGVuY2llcy5zZXQobm9kZS5uYW1lc1swXSwgbmV3IERlcGVuZGVuY3kobm9kZS5uYW1lcykpO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChjbGFzc0RlcGVuZGVuY2llcy5oYXMobm9kZS5mcm9tKSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNsYXNzRGVwZW5kZW5jaWVzLnNldChub2RlLmZyb20sIG5ldyBEZXBlbmRlbmN5KG5vZGUubmFtZXMsIG5vZGUuZnJvbSkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGltcG9ydCBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlPy5zcGFuKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc0RlcGVuZGVuY2llcztcblx0fVxuXG5cdGFzeW5jIHBhcnNlRmlsZSh1cmw6IHN0cmluZyk6IFByb21pc2U8QVNUTm9kZT4ge1xuXHRcdHJldHVybiB0aGlzLmZpbGVMb2FkZXJcblx0XHQgICAgICAgICAgIC5sb2FkKHVybClcblx0XHQgICAgICAgICAgIC50aGVuKGNvZGUgPT4gdGhpcy5wYXJzZXJTb3VyY2UobmV3IFNvdXJjZShjb2RlLCB1cmwpKSk7XG5cdH1cblxuXHRwYXJzZXJTb3VyY2Uoc291cmNlOiBTb3VyY2UpOiBBU1ROb2RlIHtcblx0XHRyZXR1cm4gbmV3IFBhcnNlcihzb3VyY2UpLnBhcnNlKCk7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtEZXBlbmRlbmN5LCBEZXBlbmRlbmN5TG9hZGVyfSBmcm9tIFwiLi9kZXBlbmRlbmNpZXNcIjtcbmltcG9ydCB7QVNUSW1wb3J0Tm9kZSwgQVNUTm9kZX0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHtOYXRpdmVDbGFzc2VzfSBmcm9tIFwiLi4vLi4vbGlicmFyeS9uYXRpdmVfY2xhc3Nlc1wiO1xuaW1wb3J0IHtDbGFzc0RlZmluaXRpb24sIEVudmlyb25tZW50LCBJbnRlcmZhY2VEZWZpbml0aW9ufSBmcm9tIFwiLi4vcnVudGltZS9vYmplY3RzLnRzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi4vcnVudGltZS9yZWdpc3RyeS50c1wiO1xuaW1wb3J0IHR5cGUge0Fic3RyYWN0RmlsZUxvYWRlcn0gZnJvbSBcIi4vbG9hZGVycy50c1wiO1xuaW1wb3J0IHR5cGUge05hdGl2ZUNsYXNzfSBmcm9tIFwiLi4vLi4vbGlicmFyeS9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7dGhyb3dEZXBlbmRlbmN5RXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcbmltcG9ydCB0eXBlIHtTb3VyY2VTcGFufSBmcm9tIFwiLi4vcGFyc2VyL3BhcnNlcl9zb3VyY2UudHNcIjtcblxuY29uc3QgbmF0aXZlQ2xhc3NlcyA9IG5ldyBOYXRpdmVDbGFzc2VzKCk7XG5cbmV4cG9ydCBjbGFzcyBMaW5rZXIge1xuXHRwcml2YXRlIGVudmlyb25tZW50OiBFbnZpcm9ubWVudDtcblx0cHJpdmF0ZSBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cdHByaXZhdGUgZGVwZW5kZW5jeUxvYWRlcjogRGVwZW5kZW5jeUxvYWRlcjtcblxuXHRjb25zdHJ1Y3RvcihlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZmlsZUxvYWRlcjogQWJzdHJhY3RGaWxlTG9hZGVyKSB7XG5cdFx0dGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkgPSBvYmplY3RSZWdpc3RyeTtcblx0XHR0aGlzLmRlcGVuZGVuY3lMb2FkZXIgPSBuZXcgRGVwZW5kZW5jeUxvYWRlcihlbnZpcm9ubWVudCwgb2JqZWN0UmVnaXN0cnksIGZpbGVMb2FkZXIpO1xuXHR9XG5cblx0cHVibGljIGFzeW5jIGxpbmtTb3VyY2VzKGFzdDogQVNUTm9kZSk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiBhd2FpdCB0aGlzLmRlcGVuZGVuY3lMb2FkZXIuY29sbGVjdERlZmF1bHREZXBlbmRlbmNpZXMoKVxuXHRcdCAgICAgICAgICAgICAgICAgLnRoZW4oKGRlcGVuZGVuY2llczogTWFwPHN0cmluZywgRGVwZW5kZW5jeT4pOiB2b2lkID0+IHtcblx0XHRcdCAgICAgICAgICAgICAgICAgdGhpcy5sb2FkRGVwZW5kZW5jaWVzKGRlcGVuZGVuY2llcyk7XG5cdFx0ICAgICAgICAgICAgICAgICB9KVxuXHRcdCAgICAgICAgICAgICAgICAgLnRoZW4oYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdFx0ICAgICAgICAgICAgICAgICBjb25zdCBkZXBlbmRlbmNpZXM6IE1hcDxzdHJpbmcsIERlcGVuZGVuY3k+ID0gYXdhaXQgdGhpcy5kZXBlbmRlbmN5TG9hZGVyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbGxlY3RQcm9ncmFtRGVwZW5kZW5jaWVzKGFzdCk7XG5cdFx0XHQgICAgICAgICAgICAgICAgIHRoaXMubG9hZERlcGVuZGVuY2llcyhkZXBlbmRlbmNpZXMpO1xuXHRcdFx0ICAgICAgICAgICAgICAgICB0aGlzLmxvYWROYXRpdmVDbGFzc2VzRnJvbUFTVChhc3QpO1xuXHRcdCAgICAgICAgICAgICAgICAgfSk7XG5cdH1cblxuXHRwcml2YXRlIGxvYWREZXBlbmRlbmNpZXMoZGVwZW5kZW5jaWVzOiBNYXA8c3RyaW5nLCBEZXBlbmRlbmN5Pikge1xuXHRcdGZvciAoY29uc3QgZGVwZW5kZW5jeSBvZiBkZXBlbmRlbmNpZXMudmFsdWVzKCkpIHtcblxuXHRcdFx0aWYgKGRlcGVuZGVuY3kudXJsID09PSAnLicpIHtcblx0XHRcdFx0dGhpcy5sb2FkTmF0aXZlQ2xhc3NGcm9tRGVwZW5kZW5jeShkZXBlbmRlbmN5KTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IG9iamVjdERlZmluaXRpb25zID0gZGVwZW5kZW5jeS5vYmplY3RSZWdpc3RyeVxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZldGNoQWxsT2JqZWN0RGVmaW5pdGlvbnMoKVxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlcygpO1xuXHRcdFx0Zm9yIChsZXQgb2JqZWN0RGVmIG9mIG9iamVjdERlZmluaXRpb25zKSB7XG5cdFx0XHRcdGlmIChvYmplY3REZWYgaW5zdGFuY2VvZiBJbnRlcmZhY2VEZWZpbml0aW9uKSB7XG5cdFx0XHRcdFx0dGhpcy5vYmplY3RSZWdpc3RyeS5pbnRlcmZhY2VzLnNldChvYmplY3REZWYubmFtZSwgb2JqZWN0RGVmKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuc2V0KG9iamVjdERlZi5uYW1lLCBvYmplY3REZWYpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuZW52aXJvbm1lbnQuZGVmaW5lKG9iamVjdERlZi5uYW1lLCBvYmplY3REZWYpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgbG9hZE5hdGl2ZUNsYXNzKGNsYXNzTmFtZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwpOiB2b2lkIHtcblx0XHRjb25zdCBuYXRpdmVDbGFzczogTmF0aXZlQ2xhc3MgfCBudWxsID0gbmF0aXZlQ2xhc3Nlcy5yZWdpc3RyeS5nZXQoY2xhc3NOYW1lKSB8fCBudWxsO1xuXHRcdGlmICghbmF0aXZlQ2xhc3MpIHtcblx0XHRcdHRocm93RGVwZW5kZW5jeUVycm9yKGBVbmtub3duIG5hdGl2ZSBjbGFzcyAke2NsYXNzTmFtZX1gLCBzcGFuKTtcblx0XHR9XG5cdFx0Y29uc3QgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiA9IG5hdGl2ZUNsYXNzLmdldENsYXNzRGVmaW5pdGlvbigpO1xuXHRcdGlmICh0aGlzLm9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuaGFzKGNsYXNzTmFtZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5vYmplY3RSZWdpc3RyeS5jbGFzc2VzLnNldChjbGFzc05hbWUsIGNsYXNzRGVmKTtcblx0XHR0aGlzLmVudmlyb25tZW50LmRlZmluZShjbGFzc05hbWUsIGNsYXNzRGVmKTtcblx0fVxuXG5cdHByaXZhdGUgbG9hZE5hdGl2ZUNsYXNzZXNGcm9tQVNUKGFzdDogQVNUTm9kZSk6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUSW1wb3J0Tm9kZSkge1xuXHRcdFx0XHRpZiAobm9kZS5mcm9tID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Y29uc3QgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQgPSBub2RlLm5hbWVzWzBdO1xuXHRcdFx0XHRcdGlmICghY2xhc3NOYW1lKSB7XG5cdFx0XHRcdFx0XHR0aHJvd0RlcGVuZGVuY3lFcnJvcihgSW52YWxpZCBpbXBvcnQgbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZT8uc3Bhbik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMubG9hZE5hdGl2ZUNsYXNzKGNsYXNzTmFtZSwgbm9kZS5zcGFuKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgbG9hZE5hdGl2ZUNsYXNzRnJvbURlcGVuZGVuY3koZGVwZW5kZW5jeTogRGVwZW5kZW5jeSkge1xuXHRcdGNvbnN0IGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gZGVwZW5kZW5jeS5uYW1lc1swXTtcblx0XHRpZiAoIWNsYXNzTmFtZSkge1xuXHRcdFx0dGhyb3dEZXBlbmRlbmN5RXJyb3IoYEludmFsaWQgaW1wb3J0IGZyb20gZGVwZW5kZW5jeS5gKTtcblx0XHR9XG5cblx0XHR0aGlzLmxvYWROYXRpdmVDbGFzcyhjbGFzc05hbWUpO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7QVNUQW5ub3RhdGlvbk5vZGUsIEFTVENsYXNzTm9kZSwgQVNUTWV0aG9kTm9kZSwgQVNUTm9kZX0gZnJvbSBcIi4vYXN0XCI7XG5pbXBvcnQge2NhbGxJbnN0YW5jZU1ldGhvZCwgZXZhbEFubm90YXRpb25Qcm9wZXJ0aWVzfSBmcm9tIFwiLi9pbnRlcnByZXRlci9ldmFsdWF0aW9uXCI7XG5pbXBvcnQge0NsYXNzRGVmaW5pdGlvbiwgdHlwZSBFbnZpcm9ubWVudCwgSW5zdGFuY2V9IGZyb20gXCIuL3J1bnRpbWUvb2JqZWN0c1wiO1xuaW1wb3J0IHR5cGUge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi9ydW50aW1lL3JlZ2lzdHJ5XCI7XG5pbXBvcnQgdHlwZSB7RXZlbnRQaXBlbGluZX0gZnJvbSBcIi4vZXZlbnQvcGlwZWxpbmVcIjtcblxuZXhwb3J0IGNsYXNzIFRlc3RTdWl0ZXMge1xuXHRwcml2YXRlIHJlYWRvbmx5IGVudmlyb25tZW50OiBFbnZpcm9ubWVudDtcblx0cHJpdmF0ZSByZWFkb25seSBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cdHByaXZhdGUgcmVhZG9ubHkgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZTtcblxuXHRjb25zdHJ1Y3RvcihlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSkge1xuXHRcdHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5ID0gb2JqZWN0UmVnaXN0cnk7XG5cdFx0dGhpcy5ldmVudFBpcGVsaW5lID0gZXZlbnRQaXBlbGluZTtcblx0fVxuXG5cdHJ1bihhc3Q6IEFTVE5vZGUpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgYXN0LmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVENsYXNzTm9kZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhg8J+nqiBSdW5uaW5nIFRlc3QgQ2FzZXMgZm9yICR7bm9kZS5uYW1lfSAuLi5gKTtcblx0XHRcdFx0dGhpcy5ydW5UZXN0Q2FzZXMobm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBydW5UZXN0Q2FzZXMoY2xhc3NOb2RlOiBBU1RDbGFzc05vZGUpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IG1lbWJlciBvZiBjbGFzc05vZGUuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChtZW1iZXIgaW5zdGFuY2VvZiBBU1RNZXRob2ROb2RlKSB7XG5cdFx0XHRcdGNvbnN0IGFubm90YXRpb246IEFTVEFubm90YXRpb25Ob2RlIHwgdW5kZWZpbmVkID0gbWVtYmVyLmFubm90YXRpb25zXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5maW5kKGFubm90YXRpb24gPT4gYW5ub3RhdGlvbi5uYW1lID09PSAndGVzdCcpO1xuXHRcdFx0XHRpZiAoIWFubm90YXRpb24pIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnJ1blRlc3RDYXNlKGNsYXNzTm9kZSwgbWVtYmVyLCBhbm5vdGF0aW9uKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJ1blRlc3RDYXNlKGNsYXNzTm9kZTogQVNUQ2xhc3NOb2RlLCBtZXRob2ROb2RlOiBBU1RNZXRob2ROb2RlLCBhbm5vdGF0aW9uOiBBU1RBbm5vdGF0aW9uTm9kZSk6IHZvaWQge1xuXHRcdGNvbnN0IGluc3RhbmNlOiBJbnN0YW5jZSA9IENsYXNzRGVmaW5pdGlvbi5mcm9tQVNUKGNsYXNzTm9kZSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uc3RydWN0TmV3SW5zdGFuY2VXaXRob3V0QXJndW1lbnRzKFxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmplY3RSZWdpc3RyeSxcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW52aXJvbm1lbnQsXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50UGlwZWxpbmVcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuXG5cdFx0Y29uc3QgcHJvcGVydGllczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0gZXZhbEFubm90YXRpb25Qcm9wZXJ0aWVzKGFubm90YXRpb24pO1xuXHRcdGNvbnN0IHRpdGxlOiBzdHJpbmcgPSBwcm9wZXJ0aWVzLnRpdGxlID8/IGAke2NsYXNzTm9kZS5uYW1lfS4ke21ldGhvZE5vZGUubmFtZX1gO1xuXG5cdFx0bGV0IGVycm9yTWVzc2FnZSA9IG51bGw7XG5cblx0XHR0cnkge1xuXHRcdFx0Y2FsbEluc3RhbmNlTWV0aG9kKGluc3RhbmNlLCBtZXRob2ROb2RlLCBbXSwgdGhpcy5vYmplY3RSZWdpc3RyeSwgdGhpcy5lbnZpcm9ubWVudCwgdGhpcy5ldmVudFBpcGVsaW5lKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0ZXJyb3JNZXNzYWdlID0gZXJyb3I7XG5cdFx0fVxuXG5cdFx0aWYgKGVycm9yTWVzc2FnZSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcihgIOKdjCAke3RpdGxlfSwgJHtlcnJvck1lc3NhZ2V9YCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKGAg4pyFICR7dGl0bGV9YCk7XG5cdFx0fVxuXHR9XG59XG4iLAogICAgImltcG9ydCB7QVNUTm9kZX0gZnJvbSAnLi4vYXN0LnRzJztcbmltcG9ydCB7RW52aXJvbm1lbnR9IGZyb20gXCIuLi9ydW50aW1lL29iamVjdHMudHNcIjtcbmltcG9ydCB7ZXZhbE5vZGUsIHJlZ2lzdGVyTmF0aXZlQ2xhc3NlcywgcmVnaXN0ZXJOYXRpdmVGdW5jdGlvbnN9IGZyb20gXCIuL2V2YWx1YXRpb25cIjtcbmltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuLi9ydW50aW1lL3J1bnRpbWVfcmVnaXN0cnlcIjtcbmltcG9ydCB0eXBlIHtFdmVudFBpcGVsaW5lfSBmcm9tIFwiLi4vZXZlbnQvcGlwZWxpbmVcIjtcblxuZXhwb3J0IGNsYXNzIEludGVycHJldGVyIHtcblx0ZW52aXJvbm1lbnQ6IEVudmlyb25tZW50O1xuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cdGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmU7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0ZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LFxuXHRcdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSxcblx0XHRldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lXG5cdCkge1xuXHRcdHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5ID0gb2JqZWN0UmVnaXN0cnk7XG5cdFx0dGhpcy5ldmVudFBpcGVsaW5lID0gZXZlbnRQaXBlbGluZTtcblxuXHRcdHJlZ2lzdGVyTmF0aXZlQ2xhc3NlcyhvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpO1xuXHRcdHJlZ2lzdGVyTmF0aXZlRnVuY3Rpb25zKGVudmlyb25tZW50KTtcblx0fVxuXG5cdHJ1bihhc3Q6IEFTVE5vZGUpIHtcblx0XHRldmFsTm9kZShhc3QsIHRoaXMub2JqZWN0UmVnaXN0cnksIHRoaXMuZW52aXJvbm1lbnQsIHRoaXMuZXZlbnRQaXBlbGluZSk7XG5cdH1cbn1cbiIsCiAgICAiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0RmlsZUxvYWRlciB7XG5cdGFic3RyYWN0IGxvYWQodXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz47XG59XG5cbmV4cG9ydCBjbGFzcyBGZXRjaEZpbGVMb2FkZXIgZXh0ZW5kcyBBYnN0cmFjdEZpbGVMb2FkZXIge1xuXHRvdmVycmlkZSBsb2FkKHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gZmV0Y2godXJsKVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxuXHR9XG59XG4iLAogICAgImV4cG9ydCB0eXBlIEV2ZW50SGFuZGxlcjxUID0gYW55PiA9IChwYXlsb2FkOiBUKSA9PiB2b2lkO1xuXG5leHBvcnQgY2xhc3MgRXZlbnRQaXBlbGluZSB7XG5cdHByaXZhdGUgbGlzdGVuZXJzOiBNYXA8c3RyaW5nLCBTZXQ8RXZlbnRIYW5kbGVyPj4gPSBuZXcgTWFwPHN0cmluZywgU2V0PEV2ZW50SGFuZGxlcj4+KCk7XG5cblx0b248VCA9IGFueT4oZXZlbnQ6IHN0cmluZywgaGFuZGxlcjogRXZlbnRIYW5kbGVyPFQ+KTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLmxpc3RlbmVycy5oYXMoZXZlbnQpKSB7XG5cdFx0XHR0aGlzLmxpc3RlbmVycy5zZXQoZXZlbnQsIG5ldyBTZXQoKSk7XG5cdFx0fVxuXHRcdHRoaXMubGlzdGVuZXJzLmdldChldmVudCkhLmFkZChoYW5kbGVyKTtcblx0fVxuXG5cdG9mZjxUID0gYW55PihldmVudDogc3RyaW5nLCBoYW5kbGVyOiBFdmVudEhhbmRsZXI8VD4pOiB2b2lkIHtcblx0XHR0aGlzLmxpc3RlbmVycy5nZXQoZXZlbnQpXG5cdFx0ICAgID8uZGVsZXRlKGhhbmRsZXIpO1xuXHR9XG5cblx0ZW1pdDxUID0gYW55PihldmVudDogc3RyaW5nLCBwYXlsb2FkOiBUKTogdm9pZCB7XG5cdFx0dGhpcy5saXN0ZW5lcnMuZ2V0KGV2ZW50KVxuXHRcdCAgICA/LmZvckVhY2goKGhhbmRsZXI6IEV2ZW50SGFuZGxlcik6IHZvaWQgPT4gaGFuZGxlcihwYXlsb2FkKSk7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHR5cGUge0J5dGVDb2RlfSBmcm9tIFwiLi9ieXRlY29kZS50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3Bjb2RlTmFtZShjb2RlOiBudW1iZXIpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuXHRyZXR1cm4gT2JqZWN0LmVudHJpZXMoT3Bjb2Rlcylcblx0ICAgICAgICAgICAgIC5maW5kKChbXywgdmFsdWVdKTogYm9vbGVhbiA9PiB2YWx1ZSA9PT0gY29kZSk/LlswXTtcbn1cblxuZXhwb3J0IGNvbnN0IE9wY29kZXMgPSB7XG5cdExPQURfQ09OU1Q6IDB4MDEsXG5cdExPQURfVkFSOiAweDAyLFxuXHRTVE9SRV9WQVI6IDB4MDMsXG5cdExPQURfVEhJUzogMHgwNCxcblx0QUREOiAweDEwLFxuXHRTVUI6IDB4MTEsXG5cdE1VTDogMHgxMixcblx0RElWOiAweDEzLFxuXHRNT0Q6IDB4MTQsXG5cdEVROiAweDE5LFxuXHRORTogMHgyMCxcblx0Tk9UOiAweDIxLFxuXHRMVDogMHgyMixcblx0TEU6IDB4MjMsXG5cdEdUOiAweDI0LFxuXHRHRTogMHgyNSxcblx0QU5EOiAweDMwLFxuXHRPUjogMHgzMSxcblx0TkVHOiAweDQwLFxuXHRQT1M6IDB4NDEsXG5cdFVOQVJZX05PVDogMHg0Mixcblx0R0VUX0ZJRUxEOiAweDUwLFxuXHRTRVRfRklFTEQ6IDB4NTEsXG5cdENBTExfTUVUSE9EOiAweDYwLFxuXHRDTEFTU19ERUY6IDB4NzAsXG5cdEZJRUxEX0RFRjogMHg3MSxcblx0RU5EX0NMQVNTOiAweDcyLFxuXHRNRVRIT0RfREVGOiAweDczLFxuXHRFTkRfTUVUSE9EOiAweDc0LFxuXHRORVc6IDB4ODAsXG5cdFJFVFVSTjogMHg5MCxcblx0UE9QOiAweDEwMCxcblx0SlVNUDogMHgxMTAsXG5cdEpVTVBfSUZfRkFMU0U6IDB4MTExLFxufTtcblxuZXhwb3J0IGNvbnN0IEJpbmFyeU9wY29kZU1hcDogUmVjb3JkPHN0cmluZywgQnl0ZUNvZGU+ID0ge1xuXHQnKyc6IE9wY29kZXMuQURELFxuXHQnLSc6IE9wY29kZXMuU1VCLFxuXHQnKic6IE9wY29kZXMuTVVMLFxuXHQnLyc6IE9wY29kZXMuRElWLFxuXHQnJSc6IE9wY29kZXMuTU9ELFxuXHQnPT0nOiBPcGNvZGVzLkVRLFxuXHQnIT0nOiBPcGNvZGVzLk5FLFxuXHQnPCc6IE9wY29kZXMuTFQsXG5cdCc8PSc6IE9wY29kZXMuTEUsXG5cdCc+JzogT3Bjb2Rlcy5HVCxcblx0Jz49JzogT3Bjb2Rlcy5HRSxcblx0JyYmJzogT3Bjb2Rlcy5BTkQsXG5cdCd8fCc6IE9wY29kZXMuT1Jcbn07XG5cbmV4cG9ydCBjb25zdCBVbmFyeU9wY29kZU1hcDogUmVjb3JkPHN0cmluZywgQnl0ZUNvZGU+ID0ge1xuXHQnKyc6IE9wY29kZXMuUE9TLFxuXHQnLSc6IE9wY29kZXMuTkVHLFxuXHQnISc6IE9wY29kZXMuVU5BUllfTk9UXG59O1xuIiwKICAgICJpbXBvcnQge3Rocm93VmlydHVhbE1hY2hpbmVFcnJvcn0gZnJvbSBcIi4uL2Vycm9ycy50c1wiO1xuXG5leHBvcnQgdHlwZSBCeXRlQ29kZSA9IG51bWJlciB8IHN0cmluZztcblxuZXhwb3J0IGNsYXNzIEJ5dGVDb2RlSW5zdHJ1Y3Rpb25zIHtcblx0cHJpdmF0ZSByZWFkb25seSBpbnN0cnVjdGlvbnM6IEJ5dGVDb2RlW107XG5cdHByaXZhdGUgX2luZGV4OiBudW1iZXIgPSAwO1xuXG5cdGNvbnN0cnVjdG9yKGluc3RydWN0aW9uczogQnl0ZUNvZGVbXSkge1xuXHRcdHRoaXMuaW5zdHJ1Y3Rpb25zID0gaW5zdHJ1Y3Rpb25zO1xuXHR9XG5cblx0Z2V0IGluZGV4KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuX2luZGV4O1xuXHR9XG5cblx0cmVzZXQoKTogdm9pZCB7XG5cdFx0dGhpcy5faW5kZXggPSAwO1xuXHR9XG5cblx0c2Vla0F0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLl9pbmRleCA9IGluZGV4O1xuXHR9XG5cblx0bmV4dCgpOiBCeXRlQ29kZSB7XG5cdFx0Y29uc3QgYnl0ZWNvZGU6IEJ5dGVDb2RlIHwgdW5kZWZpbmVkID0gdGhpcy5pbnN0cnVjdGlvbnNbdGhpcy5faW5kZXgrK107XG5cdFx0aWYgKCFieXRlY29kZSkge1xuXHRcdFx0dGhyb3dWaXJ0dWFsTWFjaGluZUVycm9yKCdObyBieXRlY29kZSBmb3VuZC4nKVxuXHRcdH1cblxuXHRcdHJldHVybiBieXRlY29kZTtcblx0fVxuXG5cdGhhc05leHQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuX2luZGV4IDwgdGhpcy5pbnN0cnVjdGlvbnMubGVuZ3RoO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7XG5cdEFTVEFzc2lnbm1lbnROb2RlLFxuXHRBU1RCaW5hcnlOb2RlLFxuXHRBU1RDYWxsTm9kZSxcblx0QVNUQ2xhc3NOb2RlLFxuXHRBU1RFeHByZXNzaW9uTm9kZSxcblx0QVNURmllbGROb2RlLFxuXHRBU1RNZW1iZXJOb2RlLFxuXHRBU1RNZXRob2ROb2RlLFxuXHRBU1ROZXdOb2RlLFxuXHR0eXBlIEFTVE5vZGUsXG5cdEFTVE5vZGVUeXBlLFxuXHRBU1RSZXR1cm5Ob2RlLFxuXHRBU1RVbmFyeU5vZGUsXG5cdEFTVFZhcmlhYmxlTm9kZVxufSBmcm9tIFwiLi4vYXN0LnRzXCI7XG5pbXBvcnQge0JpbmFyeU9wY29kZU1hcCwgT3Bjb2RlcywgVW5hcnlPcGNvZGVNYXB9IGZyb20gXCIuL29wY29kZXNcIjtcbmltcG9ydCB7dGhyb3dDb21waWxlRXJyb3J9IGZyb20gXCIuLi9lcnJvcnMudHNcIjtcbmltcG9ydCB7dHlwZSBCeXRlQ29kZSwgQnl0ZUNvZGVJbnN0cnVjdGlvbnN9IGZyb20gXCIuL2J5dGVjb2RlLnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBDb21waWxlciB7XG5cdHByaXZhdGUgcmVhZG9ubHkgaW5zdHJ1Y3Rpb25zOiBCeXRlQ29kZVtdID0gW107XG5cblx0Y29tcGlsZShub2RlOiBBU1ROb2RlKTogQnl0ZUNvZGVJbnN0cnVjdGlvbnMge1xuXHRcdHN3aXRjaCAobm9kZS50eXBlKSB7XG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLlBST0dSQU06XG5cdFx0XHRcdGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuXHRcdFx0XHRcdHRoaXMuY29tcGlsZShjaGlsZCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuSU1QT1JUOlxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5DTEFTUzpcblx0XHRcdFx0dGhpcy5jb21waWxlQ2xhc3Mobm9kZSBhcyBBU1RDbGFzc05vZGUpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5GSUVMRDpcblx0XHRcdFx0dGhpcy5jb21waWxlRmllbGQobm9kZSBhcyBBU1RGaWVsZE5vZGUpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5NRVRIT0Q6XG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkNPTlNUUlVDVE9SOlxuXHRcdFx0XHR0aGlzLmNvbXBpbGVNZXRob2Qobm9kZSBhcyBBU1RNZXRob2ROb2RlKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuVEhJUzpcblx0XHRcdFx0dGhpcy5lbWl0KE9wY29kZXMuTE9BRF9USElTKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuVkFSSUFCTEU6XG5cdFx0XHRcdHRoaXMuY29tcGlsZVZhcmlhYmxlKG5vZGUgYXMgQVNUVmFyaWFibGVOb2RlKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuRVhQUkVTU0lPTjpcblx0XHRcdFx0dGhpcy5jb21waWxlKChub2RlIGFzIEFTVEV4cHJlc3Npb25Ob2RlKS5leHByKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuQVNTSUdOTUVOVDpcblx0XHRcdFx0dGhpcy5jb21waWxlQXNzaWdubWVudChub2RlIGFzIEFTVEFzc2lnbm1lbnROb2RlKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuQklOQVJZOlxuXHRcdFx0XHR0aGlzLmNvbXBpbGVCaW5hcnkobm9kZSBhcyBBU1RCaW5hcnlOb2RlKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuVU5BUlk6XG5cdFx0XHRcdHRoaXMuY29tcGlsZVVuYXJ5KG5vZGUgYXMgQVNUVW5hcnlOb2RlKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuQ0FMTDpcblx0XHRcdFx0dGhpcy5jb21waWxlQ2FsbChub2RlIGFzIEFTVENhbGxOb2RlKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuTUVNQkVSOlxuXHRcdFx0XHR0aGlzLmNvbXBpbGVNZW1iZXIobm9kZSBhcyBBU1RNZW1iZXJOb2RlKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuUkVUVVJOOlxuXHRcdFx0XHR0aGlzLmNvbXBpbGVSZXR1cm4obm9kZSBhcyBBU1RSZXR1cm5Ob2RlKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuTkVXOlxuXHRcdFx0XHR0aGlzLmNvbXBpbGVOZXcobm9kZSBhcyBBU1ROZXdOb2RlKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuTlVNQkVSOlxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5TVFJJTkc6XG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkJPT0xFQU46XG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLk5VTEw6XG5cdFx0XHRcdHRoaXMuZW1pdChPcGNvZGVzLkxPQURfQ09OU1QsIG5vZGUudmFsdWUpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5JREVOVElGSUVSOlxuXHRcdFx0XHR0aGlzLmVtaXQoT3Bjb2Rlcy5MT0FEX1ZBUiwgbm9kZS5uYW1lKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93Q29tcGlsZUVycm9yKGBVbnN1cHBvcnRlZCBub2RlIHR5cGUgJHtub2RlLnR5cGV9LmApO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgQnl0ZUNvZGVJbnN0cnVjdGlvbnModGhpcy5pbnN0cnVjdGlvbnMpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb21waWxlQ2xhc3Mobm9kZTogQVNUQ2xhc3NOb2RlKTogdm9pZCB7XG5cdFx0dGhpcy5lbWl0KE9wY29kZXMuQ0xBU1NfREVGLCBub2RlLm5hbWUpO1xuXG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG5cdFx0XHR0aGlzLmNvbXBpbGUoY2hpbGQpO1xuXHRcdH1cblxuXHRcdHRoaXMuZW1pdChPcGNvZGVzLkVORF9DTEFTUyk7XG5cdH1cblxuXHRwcml2YXRlIGNvbXBpbGVNZXRob2Qobm9kZTogQVNUTWV0aG9kTm9kZSk6IHZvaWQge1xuXHRcdHRoaXMuZW1pdChPcGNvZGVzLk1FVEhPRF9ERUYsIG5vZGUubmFtZSk7XG5cblx0XHRmb3IgKGNvbnN0IHN0bXQgb2Ygbm9kZS5jaGlsZHJlbikge1xuXHRcdFx0dGhpcy5jb21waWxlKHN0bXQpO1xuXHRcdH1cblxuXHRcdHRoaXMuZW1pdChPcGNvZGVzLkVORF9NRVRIT0QpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb21waWxlVmFyaWFibGUobm9kZTogQVNUVmFyaWFibGVOb2RlKTogdm9pZCB7XG5cdFx0aWYgKG5vZGUuaW5pdCkgdGhpcy5jb21waWxlKG5vZGUuaW5pdCk7XG5cdFx0dGhpcy5lbWl0KE9wY29kZXMuU1RPUkVfVkFSLCBub2RlLm5hbWUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb21waWxlQXNzaWdubWVudChub2RlOiBBU1RBc3NpZ25tZW50Tm9kZSk6IHZvaWQge1xuXHRcdHRoaXMuY29tcGlsZShub2RlLnJpZ2h0KTtcblxuXHRcdGlmIChub2RlLmxlZnQudHlwZSA9PT0gQVNUTm9kZVR5cGUuSURFTlRJRklFUikge1xuXHRcdFx0dGhpcy5lbWl0KE9wY29kZXMuU1RPUkVfVkFSLCBub2RlLmxlZnQubmFtZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb21waWxlQmluYXJ5KG5vZGU6IEFTVEJpbmFyeU5vZGUpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBpbGUobm9kZS5sZWZ0KTtcblx0XHR0aGlzLmNvbXBpbGUobm9kZS5yaWdodCk7XG5cdFx0dGhpcy5lbWl0KEJpbmFyeU9wY29kZU1hcFtub2RlLm9wZXJhdG9yXSBhcyBudW1iZXIpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb21waWxlVW5hcnkobm9kZTogQVNUVW5hcnlOb2RlKTogdm9pZCB7XG5cdFx0dGhpcy5jb21waWxlKG5vZGUuYXJndW1lbnQpO1xuXHRcdHRoaXMuZW1pdChVbmFyeU9wY29kZU1hcFtub2RlLm9wZXJhdG9yXSBhcyBudW1iZXIpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb21waWxlQ2FsbChub2RlOiBBU1RDYWxsTm9kZSk6IHZvaWQge1xuXHRcdHRoaXMuY29tcGlsZShub2RlLmNhbGxlZSk7XG5cblx0XHRmb3IgKGNvbnN0IGFyZyBvZiBub2RlLmFyZ3VtZW50cykge1xuXHRcdFx0dGhpcy5jb21waWxlKGFyZyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5lbWl0KE9wY29kZXMuQ0FMTF9NRVRIT0QsIG5vZGUuYXJndW1lbnRzLmxlbmd0aCk7XG5cdH1cblxuXHRwcml2YXRlIGNvbXBpbGVNZW1iZXIobm9kZTogQVNUTWVtYmVyTm9kZSk6IHZvaWQge1xuXHRcdHRoaXMuY29tcGlsZShub2RlLm9iamVjdCk7XG5cdFx0dGhpcy5lbWl0KE9wY29kZXMuR0VUX0ZJRUxELCBub2RlLnByb3BlcnR5KTtcblx0fVxuXG5cdHByaXZhdGUgY29tcGlsZVJldHVybihub2RlOiBBU1RSZXR1cm5Ob2RlKTogdm9pZCB7XG5cdFx0aWYgKG5vZGUuYXJndW1lbnQpIHRoaXMuY29tcGlsZShub2RlLmFyZ3VtZW50KTtcblx0XHR0aGlzLmVtaXQoT3Bjb2Rlcy5SRVRVUk4pO1xuXHR9XG5cblx0cHJpdmF0ZSBjb21waWxlTmV3KG5vZGU6IEFTVE5ld05vZGUpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IGFyZyBvZiBub2RlLmFyZ3VtZW50cykgdGhpcy5jb21waWxlKGFyZyk7XG5cdFx0dGhpcy5lbWl0KE9wY29kZXMuTkVXLCBub2RlLm5hbWUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb21waWxlRmllbGQobm9kZTogQVNURmllbGROb2RlKTogdm9pZCB7XG5cdFx0dGhpcy5lbWl0KE9wY29kZXMuRklFTERfREVGLCBub2RlLm5hbWUpO1xuXG5cdFx0aWYgKG5vZGUuaW5pdCkge1xuXHRcdFx0dGhpcy5jb21waWxlKG5vZGUuaW5pdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZW1pdChPcGNvZGVzLkxPQURfQ09OU1QsIG51bGwpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZW1pdChvcDogbnVtYmVyLCBvcGVyYW5kPzogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5pbnN0cnVjdGlvbnMucHVzaChvcCk7XG5cdFx0aWYgKG9wZXJhbmQgIT09IHVuZGVmaW5lZCkgdGhpcy5pbnN0cnVjdGlvbnMucHVzaChvcGVyYW5kKTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge3Rocm93VmlydHVhbE1hY2hpbmVFcnJvcn0gZnJvbSBcIi4uL2Vycm9ycy50c1wiO1xuXG50eXBlIE9wZXJhbmRzID0ge1xuXHRhOiBhbnksXG5cdGI6IGFueVxufVxuXG5leHBvcnQgY2xhc3MgU3RhY2sge1xuXHRwcml2YXRlIHJlYWRvbmx5IHN0YWNrOiBhbnlbXSA9IFtdO1xuXG5cdHBvcCgpOiBhbnkge1xuXHRcdGNvbnN0IGJ5dGVjb2RlOiBhbnkgPSB0aGlzLnN0YWNrLnBvcCgpO1xuXHRcdGlmIChieXRlY29kZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aHJvd1ZpcnR1YWxNYWNoaW5lRXJyb3IoJ1N0YWNrIGlzIGVtcHR5Jyk7XG5cdFx0fVxuXHRcdHJldHVybiBieXRlY29kZTtcblx0fVxuXG5cdHB1c2godmFsdWU/OiBhbnkpOiB2b2lkIHtcblx0XHRpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhyb3dWaXJ0dWFsTWFjaGluZUVycm9yKCdWYWx1ZSBpcyB1bmRlZmluZWQnKTtcblx0XHR9XG5cblx0XHR0aGlzLnN0YWNrLnB1c2godmFsdWUpO1xuXHR9XG5cblx0b3BlcmFuZHMoKTogT3BlcmFuZHMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRhOiB0aGlzLnBvcCgpLFxuXHRcdFx0YjogdGhpcy5wb3AoKVxuXHRcdH07XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtnZXRPcGNvZGVOYW1lLCBPcGNvZGVzfSBmcm9tIFwiLi9vcGNvZGVzXCI7XG5pbXBvcnQge0NsYXNzRGVmaW5pdGlvbiwgRW52aXJvbm1lbnQsIEluc3RhbmNlfSBmcm9tIFwiLi4vcnVudGltZS9vYmplY3RzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi4vcnVudGltZS9yZWdpc3RyeVwiO1xuaW1wb3J0IHt0aHJvd1J1bnRpbWVFcnJvciwgdGhyb3dWaXJ0dWFsTWFjaGluZUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQge1N0YWNrfSBmcm9tIFwiLi9zdGFjay50c1wiO1xuaW1wb3J0IHR5cGUge0J5dGVDb2RlLCBCeXRlQ29kZUluc3RydWN0aW9uc30gZnJvbSBcIi4vYnl0ZWNvZGUudHNcIjtcbmltcG9ydCB7R1JBTU1BUn0gZnJvbSBcIi4uL2dyYW1tYXIudHNcIjtcbmltcG9ydCB0eXBlIHtBU1RQYXJhbWV0ZXJOb2RlfSBmcm9tIFwiLi4vYXN0LnRzXCI7XG5cblxuZXhwb3J0IGNsYXNzIFZpcnR1YWxNYWNoaW5lIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0YWNrOiBTdGFjayA9IG5ldyBTdGFjaygpO1xuXG5cdHByaXZhdGUgY3VycmVudFRoaXM6IEluc3RhbmNlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZWFkb25seSByZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksXG5cdFx0cHJpdmF0ZSByZWFkb25seSBlbnZpcm9ubWVudDogRW52aXJvbm1lbnRcblx0KSB7XG5cdH1cblxuXHRleGVjdXRlKGJ5dGVDb2RlSW5zdHJ1Y3Rpb25zOiBCeXRlQ29kZUluc3RydWN0aW9ucyk6IGFueSB7XG5cblx0XHR3aGlsZSAoYnl0ZUNvZGVJbnN0cnVjdGlvbnMuaGFzTmV4dCgpKSB7XG5cdFx0XHRjb25zdCBvcDogQnl0ZUNvZGUgPSBieXRlQ29kZUluc3RydWN0aW9ucy5uZXh0KCk7XG5cblx0XHRcdHN3aXRjaCAob3ApIHtcblxuXHRcdFx0XHQvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRcdFx0XHQvLyBDTEFTUyBERUZJTklUSU9OU1xuXHRcdFx0XHQvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cdFx0XHRcdGNhc2UgT3Bjb2Rlcy5DTEFTU19ERUY6IHtcblx0XHRcdFx0XHRjb25zdCBjbGFzc05hbWUgPSBieXRlQ29kZUluc3RydWN0aW9ucy5uZXh0KCkgYXMgc3RyaW5nO1xuXG5cdFx0XHRcdFx0aWYgKCF0aGlzLnJlZ2lzdHJ5LmNsYXNzZXMuaGFzKGNsYXNzTmFtZSkpIHtcblx0XHRcdFx0XHRcdHRocm93UnVudGltZUVycm9yKGBDbGFzcyAke2NsYXNzTmFtZX0gbm90IGZvdW5kIGluIHJlZ2lzdHJ5LmApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0IGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24gPSB0aGlzLnJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KGNsYXNzTmFtZSk7XG5cdFx0XHRcdFx0dGhpcy5zdGFjay5wdXNoKGNsYXNzRGVmKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cblx0XHRcdFx0Ly8gQ09OU1RBTlRTXG5cdFx0XHRcdC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXHRcdFx0XHRjYXNlIE9wY29kZXMuTE9BRF9DT05TVDpcblx0XHRcdFx0XHR0aGlzLnN0YWNrLnB1c2goYnl0ZUNvZGVJbnN0cnVjdGlvbnMubmV4dCgpKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHQvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XG5cdFx0XHRcdC8vIFZBUklBQkxFU1xuXHRcdFx0XHQvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XG5cblx0XHRcdFx0Y2FzZSBPcGNvZGVzLkxPQURfVkFSOiB7XG5cdFx0XHRcdFx0Y29uc3QgbmFtZSA9IGJ5dGVDb2RlSW5zdHJ1Y3Rpb25zLm5leHQoKSBhcyBzdHJpbmc7XG5cdFx0XHRcdFx0dGhpcy5zdGFjay5wdXNoKHRoaXMuZW52aXJvbm1lbnQuZ2V0KG5hbWUpKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNhc2UgT3Bjb2Rlcy5TVE9SRV9WQVI6IHtcblx0XHRcdFx0XHRjb25zdCBuYW1lID0gYnl0ZUNvZGVJbnN0cnVjdGlvbnMubmV4dCgpIGFzIHN0cmluZztcblx0XHRcdFx0XHRjb25zdCB2YWx1ZTogQnl0ZUNvZGUgPSB0aGlzLnN0YWNrLnBvcCgpO1xuXG5cdFx0XHRcdFx0aWYgKHRoaXMuZW52aXJvbm1lbnQuaGFzKG5hbWUpKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmVudmlyb25tZW50LnNldChuYW1lLCB2YWx1ZSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuZW52aXJvbm1lbnQuZGVmaW5lKG5hbWUsIHZhbHVlKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cblx0XHRcdFx0Ly8gVEhJU1xuXHRcdFx0XHQvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XG5cblx0XHRcdFx0Y2FzZSBPcGNvZGVzLkxPQURfVEhJUzpcblx0XHRcdFx0XHR0aGlzLnN0YWNrLnB1c2godGhpcy5jdXJyZW50VGhpcyk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Ly8gPT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRcdFx0XHQvLyBPQkpFQ1QgQ1JFQVRJT05cblx0XHRcdFx0Ly8gPT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cdFx0XHRcdGNhc2UgT3Bjb2Rlcy5ORVc6IHtcblx0XHRcdFx0XHRjb25zdCBjbGFzc05hbWUgPSBieXRlQ29kZUluc3RydWN0aW9ucy5uZXh0KCkgYXMgc3RyaW5nO1xuXG5cdFx0XHRcdFx0Y29uc3QgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiA9IHRoaXMucmVnaXN0cnkuY2xhc3Nlcy5nZXQoY2xhc3NOYW1lKTtcblx0XHRcdFx0XHRjb25zdCBpbnN0YW5jZTogSW5zdGFuY2UgPSBjbGFzc0RlZi5jb25zdHJ1Y3RFbXB0eUluc3RhbmNlKCk7XG5cblx0XHRcdFx0XHR0aGlzLnJlZ2lzdHJ5Lmluc3RhbmNlcy5yZWdpc3RlcihpbnN0YW5jZSk7XG5cblx0XHRcdFx0XHR0aGlzLnN0YWNrLnB1c2goaW5zdGFuY2UpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gPT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRcdFx0XHQvLyBGSUVMRCBBQ0NFU1Ncblx0XHRcdFx0Ly8gPT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cdFx0XHRcdGNhc2UgT3Bjb2Rlcy5HRVRfRklFTEQ6IHtcblx0XHRcdFx0XHRjb25zdCBmaWVsZE5hbWUgPSBieXRlQ29kZUluc3RydWN0aW9ucy5uZXh0KCkgYXMgc3RyaW5nO1xuXHRcdFx0XHRcdGNvbnN0IGluc3RhbmNlOiBhbnkgPSB0aGlzLnN0YWNrLnBvcCgpO1xuXG5cdFx0XHRcdFx0aWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBJbnN0YW5jZSkpIHtcblx0XHRcdFx0XHRcdHRocm93UnVudGltZUVycm9yKFwiR0VUX0ZJRUxEIG9uIG5vbi1pbnN0YW5jZVwiKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnN0YWNrLnB1c2goaW5zdGFuY2UuX19pbnN0YW5jZUZpZWxkc1tmaWVsZE5hbWVdKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNhc2UgT3Bjb2Rlcy5TRVRfRklFTEQ6IHtcblx0XHRcdFx0XHRjb25zdCBmaWVsZE5hbWUgPSBieXRlQ29kZUluc3RydWN0aW9ucy5uZXh0KCkgYXMgc3RyaW5nO1xuXG5cdFx0XHRcdFx0Y29uc3QgdmFsdWU6IGFueSA9IHRoaXMuc3RhY2sucG9wKCk7XG5cdFx0XHRcdFx0Y29uc3QgaW5zdGFuY2U6IGFueSA9IHRoaXMuc3RhY2sucG9wKCk7XG5cblx0XHRcdFx0XHRpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIEluc3RhbmNlKSkge1xuXHRcdFx0XHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoXCJTRVRfRklFTEQgb24gbm9uLWluc3RhbmNlXCIpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGluc3RhbmNlLl9faW5zdGFuY2VGaWVsZHNbZmllbGROYW1lXSA9IHZhbHVlO1xuXHRcdFx0XHRcdHRoaXMuc3RhY2sucHVzaCh2YWx1ZSk7XG5cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdFx0XHRcdC8vIE1FVEhPRCBDQUxMU1xuXHRcdFx0XHQvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cdFx0XHRcdGNhc2UgT3Bjb2Rlcy5DQUxMX01FVEhPRDoge1xuXG5cdFx0XHRcdFx0Y29uc3QgbWV0aG9kTmFtZSA9IGJ5dGVDb2RlSW5zdHJ1Y3Rpb25zLm5leHQoKSBhcyBzdHJpbmc7XG5cdFx0XHRcdFx0Y29uc3QgYXJnQ291bnQgPSBieXRlQ29kZUluc3RydWN0aW9ucy5uZXh0KCkgYXMgbnVtYmVyO1xuXG5cdFx0XHRcdFx0Y29uc3QgYXJnczogYW55W10gPSBbXTtcblxuXHRcdFx0XHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBhcmdDb3VudDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRhcmdzLnVuc2hpZnQodGhpcy5zdGFjay5wb3AoKSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgaW5zdGFuY2U6IEluc3RhbmNlID0gdGhpcy5zdGFjay5wb3AoKTtcblxuXHRcdFx0XHRcdGNvbnN0IG1ldGhvZE5vZGUgPSBpbnN0YW5jZS5maW5kZU1ldGhvZE5vZGUobWV0aG9kTmFtZSk7XG5cblx0XHRcdFx0XHRjb25zdCBtZXRob2RFbnYgPSBuZXcgRW52aXJvbm1lbnQodGhpcy5lbnZpcm9ubWVudCk7XG5cblx0XHRcdFx0XHRtZXRob2RFbnYuZGVmaW5lKEdSQU1NQVIuVEhJUywgaW5zdGFuY2UpO1xuXG5cdFx0XHRcdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG1ldGhvZE5vZGUucGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xuXG5cdFx0XHRcdFx0XHRjb25zdCBwYXJhbTogQVNUUGFyYW1ldGVyTm9kZSB8IHVuZGVmaW5lZCA9IG1ldGhvZE5vZGUucGFyYW1ldGVyc1tpXTtcblxuXHRcdFx0XHRcdFx0aWYgKCFwYXJhbSkge1xuXHRcdFx0XHRcdFx0XHR0aHJvd1ZpcnR1YWxNYWNoaW5lRXJyb3IoYFBhcmFtZXRlciBjb3VsZCBub3QgYmUgZm91bmQgaW4gbWV0aG9kICR7bWV0aG9kTmFtZX0gYXQgaW5kZXggJHtpfWApXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdG1ldGhvZEVudi5kZWZpbmUocGFyYW0ubmFtZSwgYXJnc1tpXSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgcHJldmlvdXNUaGlzOiBJbnN0YW5jZSB8IG51bGwgPSB0aGlzLmN1cnJlbnRUaGlzO1xuXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50VGhpcyA9IGluc3RhbmNlO1xuXG5cdFx0XHRcdFx0Zm9yIChjb25zdCBjaGlsZCBvZiBtZXRob2ROb2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRcdFx0XHQvLyBzaW1wbGUgZXhlY3V0aW9uIGxpa2UgaW50ZXJwcmV0ZXJcblx0XHRcdFx0XHRcdC8vIHJldHVybiBoYW5kbGluZyB2aWEgc3RhY2tcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRUaGlzID0gcHJldmlvdXNUaGlzO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRcdFx0XHQvLyBTVEFDS1xuXHRcdFx0XHQvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cdFx0XHRcdGNhc2UgT3Bjb2Rlcy5QT1A6XG5cblx0XHRcdFx0XHR0aGlzLnN0YWNrLnBvcCgpO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Ly8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0XHRcdFx0Ly8gQ09OVFJPTCBGTE9XXG5cdFx0XHRcdC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblx0XHRcdFx0Y2FzZSBPcGNvZGVzLkpVTVA6IHtcblxuXHRcdFx0XHRcdGNvbnN0IHRhcmdldCA9IGJ5dGVDb2RlSW5zdHJ1Y3Rpb25zLm5leHQoKSBhcyBudW1iZXI7XG5cblx0XHRcdFx0XHRieXRlQ29kZUluc3RydWN0aW9ucy5zZWVrQXQodGFyZ2V0KTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y2FzZSBPcGNvZGVzLkpVTVBfSUZfRkFMU0U6IHtcblxuXHRcdFx0XHRcdGNvbnN0IHRhcmdldCA9IGJ5dGVDb2RlSW5zdHJ1Y3Rpb25zLm5leHQoKSBhcyBudW1iZXI7XG5cblx0XHRcdFx0XHRjb25zdCBjb25kaXRpb246IGJvb2xlYW4gPSB0aGlzLnN0YWNrLnBvcCgpO1xuXG5cdFx0XHRcdFx0aWYgKCFjb25kaXRpb24pIHtcblx0XHRcdFx0XHRcdGJ5dGVDb2RlSW5zdHJ1Y3Rpb25zLnNlZWtBdCh0YXJnZXQpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gPT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRcdFx0XHQvLyBBUklUSE1FVElDXG5cdFx0XHRcdC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXHRcdFx0XHRjYXNlIE9wY29kZXMuQUREOiB7XG5cdFx0XHRcdFx0Y29uc3Qge2EsIGJ9ID0gdGhpcy5zdGFjay5vcGVyYW5kcygpO1xuXHRcdFx0XHRcdHRoaXMuc3RhY2sucHVzaChhICsgYik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjYXNlIE9wY29kZXMuU1VCOiB7XG5cdFx0XHRcdFx0Y29uc3Qge2EsIGJ9ID0gdGhpcy5zdGFjay5vcGVyYW5kcygpO1xuXHRcdFx0XHRcdHRoaXMuc3RhY2sucHVzaChhIC0gYik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjYXNlIE9wY29kZXMuTVVMOiB7XG5cdFx0XHRcdFx0Y29uc3Qge2EsIGJ9ID0gdGhpcy5zdGFjay5vcGVyYW5kcygpO1xuXHRcdFx0XHRcdHRoaXMuc3RhY2sucHVzaChhICogYik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjYXNlIE9wY29kZXMuRElWOiB7XG5cdFx0XHRcdFx0Y29uc3Qge2EsIGJ9ID0gdGhpcy5zdGFjay5vcGVyYW5kcygpO1xuXHRcdFx0XHRcdHRoaXMuc3RhY2sucHVzaChhIC8gYik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjYXNlIE9wY29kZXMuTU9EOiB7XG5cdFx0XHRcdFx0Y29uc3Qge2EsIGJ9ID0gdGhpcy5zdGFjay5vcGVyYW5kcygpO1xuXHRcdFx0XHRcdHRoaXMuc3RhY2sucHVzaChhICUgYik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XG5cdFx0XHRcdC8vIENPTVBBUklTT05cblx0XHRcdFx0Ly8gPT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cdFx0XHRcdGNhc2UgT3Bjb2Rlcy5FUToge1xuXHRcdFx0XHRcdGNvbnN0IHthLCBifSA9IHRoaXMuc3RhY2sub3BlcmFuZHMoKTtcblx0XHRcdFx0XHR0aGlzLnN0YWNrLnB1c2goYSA9PT0gYik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjYXNlIE9wY29kZXMuTkU6IHtcblx0XHRcdFx0XHRjb25zdCB7YSwgYn0gPSB0aGlzLnN0YWNrLm9wZXJhbmRzKCk7XG5cdFx0XHRcdFx0dGhpcy5zdGFjay5wdXNoKGEgIT09IGIpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y2FzZSBPcGNvZGVzLkxUOiB7XG5cdFx0XHRcdFx0Y29uc3Qge2EsIGJ9ID0gdGhpcy5zdGFjay5vcGVyYW5kcygpO1xuXHRcdFx0XHRcdHRoaXMuc3RhY2sucHVzaChhIDwgYik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjYXNlIE9wY29kZXMuTEU6IHtcblx0XHRcdFx0XHRjb25zdCB7YSwgYn0gPSB0aGlzLnN0YWNrLm9wZXJhbmRzKCk7XG5cdFx0XHRcdFx0dGhpcy5zdGFjay5wdXNoKGEgPD0gYik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjYXNlIE9wY29kZXMuR1Q6IHtcblx0XHRcdFx0XHRjb25zdCB7YSwgYn0gPSB0aGlzLnN0YWNrLm9wZXJhbmRzKCk7XG5cdFx0XHRcdFx0dGhpcy5zdGFjay5wdXNoKGEgPiBiKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNhc2UgT3Bjb2Rlcy5HRToge1xuXHRcdFx0XHRcdGNvbnN0IHthLCBifSA9IHRoaXMuc3RhY2sub3BlcmFuZHMoKTtcblx0XHRcdFx0XHR0aGlzLnN0YWNrLnB1c2goYSA+PSBiKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cblx0XHRcdFx0Ly8gTE9HSUNcblx0XHRcdFx0Ly8gPT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cdFx0XHRcdGNhc2UgT3Bjb2Rlcy5BTkQ6IHtcblx0XHRcdFx0XHRjb25zdCB7YSwgYn0gPSB0aGlzLnN0YWNrLm9wZXJhbmRzKCk7XG5cdFx0XHRcdFx0dGhpcy5zdGFjay5wdXNoKGEgJiYgYik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjYXNlIE9wY29kZXMuT1I6IHtcblx0XHRcdFx0XHRjb25zdCB7YSwgYn0gPSB0aGlzLnN0YWNrLm9wZXJhbmRzKCk7XG5cdFx0XHRcdFx0dGhpcy5zdGFjay5wdXNoKGEgfHwgYik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjYXNlIE9wY29kZXMuTkVHOlxuXHRcdFx0XHRcdHRoaXMuc3RhY2sucHVzaCgtdGhpcy5zdGFjay5wb3AoKSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBPcGNvZGVzLlBPUzpcblx0XHRcdFx0XHR0aGlzLnN0YWNrLnB1c2goK3RoaXMuc3RhY2sucG9wKCkpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgT3Bjb2Rlcy5VTkFSWV9OT1Q6XG5cdFx0XHRcdFx0dGhpcy5zdGFjay5wdXNoKCF0aGlzLnN0YWNrLnBvcCgpKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRocm93VmlydHVhbE1hY2hpbmVFcnJvcihgVW5rbm93biBvcGNvZGUgJHtnZXRPcGNvZGVOYW1lKG9wIGFzIG51bWJlcil9IGF0IGlwICR7Ynl0ZUNvZGVJbnN0cnVjdGlvbnMuaW5kZXh9YClcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5zdGFjay5wb3AoKTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4vcGFyc2VyL3NvdXJjZVwiO1xuaW1wb3J0IHtFbnZpcm9ubWVudH0gZnJvbSBcIi4vcnVudGltZS9vYmplY3RzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi9ydW50aW1lL3J1bnRpbWVfcmVnaXN0cnlcIjtcbmltcG9ydCB7VHlwZUNoZWNrZXJ9IGZyb20gXCIuL3R5cGVjaGVja2VyLnRzXCI7XG5pbXBvcnQge0xpbmtlcn0gZnJvbSBcIi4vbGlua2VyL2xpbmtlclwiO1xuaW1wb3J0IHtUZXN0U3VpdGVzfSBmcm9tIFwiLi90ZXN0c3VpdGVzLnRzXCI7XG5pbXBvcnQge0ludGVycHJldGVyfSBmcm9tIFwiLi9pbnRlcnByZXRlci9pbnRlcnByZXRlclwiO1xuaW1wb3J0IHtGZXRjaEZpbGVMb2FkZXJ9IGZyb20gXCIuL2xpbmtlci9sb2FkZXJzLnRzXCI7XG5pbXBvcnQge0FTVE5vZGV9IGZyb20gXCIuL2FzdFwiO1xuaW1wb3J0IHtQYXJzZXJ9IGZyb20gXCIuL3BhcnNlci9wYXJzZXJcIjtcbmltcG9ydCB7RXZlbnRQaXBlbGluZX0gZnJvbSBcIi4vZXZlbnQvcGlwZWxpbmVcIjtcbmltcG9ydCB7Q29tcGlsZXJ9IGZyb20gXCIuL3ZpcnR1YWxtYWNoaW5lL2NvbXBpbGVyLnRzXCI7XG5pbXBvcnQge1ZpcnR1YWxNYWNoaW5lfSBmcm9tIFwiLi92aXJ0dWFsbWFjaGluZS92aXJ0dWFsbWFjaGluZS50c1wiO1xuaW1wb3J0IHR5cGUge0J5dGVDb2RlSW5zdHJ1Y3Rpb25zfSBmcm9tIFwiLi92aXJ0dWFsbWFjaGluZS9ieXRlY29kZS50c1wiO1xuXG5leHBvcnQgY2xhc3MgTHlyYVNjcmlwdFByb2dyYW0ge1xuXHRwcml2YXRlIHJlYWRvbmx5IGVudmlyb25tZW50OiBFbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudCgpO1xuXHRwcml2YXRlIHJlYWRvbmx5IG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSA9IG5ldyBPYmplY3RSZWdpc3RyeSgpO1xuXHRwcml2YXRlIHJlYWRvbmx5IGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmU7XG5cdHByaXZhdGUgcmVhZG9ubHkgY29tcGlsZXI6IENvbXBpbGVyID0gbmV3IENvbXBpbGVyKCk7XG5cdHByaXZhdGUgcmVhZG9ubHkgdmlydHVhbE1hY2hpbmU6IFZpcnR1YWxNYWNoaW5lID0gbmV3IFZpcnR1YWxNYWNoaW5lKHRoaXMub2JqZWN0UmVnaXN0cnksIHRoaXMuZW52aXJvbm1lbnQpO1xuXHRwcml2YXRlIHJlYWRvbmx5IHR5cGVDaGVja2VyOiBUeXBlQ2hlY2tlciA9IG5ldyBUeXBlQ2hlY2tlcih0aGlzLm9iamVjdFJlZ2lzdHJ5KTtcblx0cHJpdmF0ZSByZWFkb25seSBsaW5rZXI6IExpbmtlciA9IG5ldyBMaW5rZXIodGhpcy5lbnZpcm9ubWVudCwgdGhpcy5vYmplY3RSZWdpc3RyeSwgbmV3IEZldGNoRmlsZUxvYWRlcigpKTtcblxuXHRwcml2YXRlIGludGVycHJldGVyOiBJbnRlcnByZXRlcjtcblx0cHJpdmF0ZSB0ZXN0U3VpdGU6IFRlc3RTdWl0ZXM7XG5cblx0cHJpdmF0ZSByZWFkb25seSBpc0RlYnVnOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgc3RhcnRUaW1lOiBudW1iZXIgPSAwO1xuXG5cdGNvbnN0cnVjdG9yKGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSwgZ2xvYmFsRXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSA9IG5ldyBFdmVudFBpcGVsaW5lKCkpIHtcblx0XHR0aGlzLmlzRGVidWcgPSBpc0RlYnVnO1xuXG5cdFx0dGhpcy5pbnRlcnByZXRlciA9IG5ldyBJbnRlcnByZXRlcihcblx0XHRcdHRoaXMuZW52aXJvbm1lbnQsXG5cdFx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0Z2xvYmFsRXZlbnRQaXBlbGluZVxuXHRcdCk7XG5cblx0XHR0aGlzLnRlc3RTdWl0ZSA9IG5ldyBUZXN0U3VpdGVzKFxuXHRcdFx0dGhpcy5lbnZpcm9ubWVudCxcblx0XHRcdHRoaXMub2JqZWN0UmVnaXN0cnksXG5cdFx0XHRnbG9iYWxFdmVudFBpcGVsaW5lXG5cdFx0KTtcblxuXHRcdHRoaXMuZXZlbnRQaXBlbGluZSA9IGdsb2JhbEV2ZW50UGlwZWxpbmU7XG5cdH1cblxuXHRnZXRHbG9iYWxPYmplY3RSZWdpc3RyeSgpOiBPYmplY3RSZWdpc3RyeSB7XG5cdFx0cmV0dXJuIHRoaXMub2JqZWN0UmVnaXN0cnk7XG5cdH1cblxuXG5cdGdldEdsb2JhbEVudmlyb25tZW50KCk6IEVudmlyb25tZW50IHtcblx0XHRyZXR1cm4gdGhpcy5lbnZpcm9ubWVudDtcblx0fVxuXG5cdGdldEdsb2JhbEV2ZW50UGlwZWxpbmUoKTogRXZlbnRQaXBlbGluZSB7XG5cdFx0cmV0dXJuIHRoaXMuZXZlbnRQaXBlbGluZTtcblx0fVxuXG5cdGFzeW5jIGV4ZWN1dGVTb3VyY2Uoc291cmNlOiBTb3VyY2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gdGhpcy5ydW5QaXBlbGluZShzb3VyY2UpXG5cdFx0ICAgICAgICAgICAudGhlbigoYXN0OiBBU1ROb2RlKTogdm9pZCA9PiB7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlU3RhcnRUaW1lKCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuaW50ZXJwcmV0ZXIucnVuKGFzdCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlRW5kVGltZSgnaW50ZXJwcmV0ZXInKTtcblx0XHQgICAgICAgICAgIH0pO1xuXHR9XG5cblx0YXN5bmMgZXhlY3V0ZVRlc3Qoc291cmNlOiBTb3VyY2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gdGhpcy5ydW5QaXBlbGluZShzb3VyY2UpXG5cdFx0ICAgICAgICAgICAudGhlbigoYXN0OiBBU1ROb2RlKTogdm9pZCA9PiB7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlU3RhcnRUaW1lKCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMudGVzdFN1aXRlLnJ1bihhc3QpO1xuXHRcdFx0ICAgICAgICAgICB0aGlzLmRlYnVnTWVhc3VyZUVuZFRpbWUoJ3Rlc3QnKTtcblx0XHQgICAgICAgICAgIH0pO1xuXHR9XG5cblx0YXN5bmMgY29tcGlsZVNvdXJjZShzb3VyY2U6IFNvdXJjZSk6IFByb21pc2U8Qnl0ZUNvZGVJbnN0cnVjdGlvbnM+IHtcblx0XHRyZXR1cm4gdGhpcy5ydW5QaXBlbGluZShzb3VyY2UpXG5cdFx0ICAgICAgICAgICAudGhlbigoYXN0OiBBU1ROb2RlKTogQnl0ZUNvZGVJbnN0cnVjdGlvbnMgPT4ge1xuXHRcdFx0ICAgICAgICAgICB0aGlzLmRlYnVnTWVhc3VyZVN0YXJ0VGltZSgpO1xuXHRcdFx0ICAgICAgICAgICBjb25zdCBieXRlY29kZTogQnl0ZUNvZGVJbnN0cnVjdGlvbnMgPSB0aGlzLmNvbXBpbGVyLmNvbXBpbGUoYXN0KTtcblx0XHRcdCAgICAgICAgICAgdGhpcy5kZWJ1Z01lYXN1cmVFbmRUaW1lKCdjb21waWxlcicpO1xuXHRcdFx0ICAgICAgICAgICByZXR1cm4gYnl0ZWNvZGU7XG5cdFx0ICAgICAgICAgICB9KTtcblx0fVxuXG5cdGV4ZWN1dGVCeXRlY29kZShieXRlY29kZTogQnl0ZUNvZGVJbnN0cnVjdGlvbnMpOiB2b2lkIHtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnZpcnR1YWxNYWNoaW5lLmV4ZWN1dGUoYnl0ZWNvZGUpKTtcblx0fVxuXG5cdGRlYnVnKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pc0RlYnVnKSB7XG5cdFx0XHRjb25zb2xlLmxvZyh2YWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0ZGVidWdNZWFzdXJlU3RhcnRUaW1lKCk6IHZvaWQge1xuXHRcdHRoaXMuc3RhcnRUaW1lID0gdGhpcy5kZWJ1Z1RpbWVzdGFtcCgpO1xuXHR9XG5cblx0ZGVidWdNZWFzdXJlRW5kVGltZShtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmRlYnVnKG1lc3NhZ2UgKyAnOiAnICsgKHRoaXMuZGVidWdUaW1lc3RhbXAoKSAtIHRoaXMuc3RhcnRUaW1lKSArICdtcycpO1xuXHR9XG5cblx0ZGVidWdUaW1lc3RhbXAoKTogbnVtYmVyIHtcblx0XHRpZiAoIXRoaXMuaXNEZWJ1Zykge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXHRcdHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcblx0fVxuXG5cdHByaXZhdGUgYXN5bmMgcnVuUGlwZWxpbmUoc291cmNlOiBTb3VyY2UpOiBQcm9taXNlPEFTVE5vZGU+IHtcblx0XHR0aGlzLmRlYnVnTWVhc3VyZVN0YXJ0VGltZSgpXG5cdFx0Y29uc3QgYXN0OiBBU1ROb2RlID0gbmV3IFBhcnNlcihzb3VyY2UpLnBhcnNlKCk7XG5cdFx0dGhpcy5kZWJ1Z01lYXN1cmVFbmRUaW1lKCdwYXJzZXInKVxuXHRcdHRoaXMuZGVidWcoYXN0KTtcblxuXHRcdHJldHVybiB0aGlzLmxpbmtlci5saW5rU291cmNlcyhhc3QpXG5cdFx0ICAgICAgICAgICAudGhlbigoKTogdm9pZCA9PiB7XG5cdFx0XHQgICAgICAgICAgIHRoaXMudHlwZUNoZWNrZXIuY29sbGVjdEFsbFN5bWJvbHNGcm9tUmVnaXN0cnkodGhpcy5vYmplY3RSZWdpc3RyeSk7XG5cdFx0ICAgICAgICAgICB9KVxuXHRcdCAgICAgICAgICAgLnRoZW4oKCk6IEFTVE5vZGUgPT4ge1xuXHRcdFx0ICAgICAgICAgICB0aGlzLmRlYnVnTWVhc3VyZVN0YXJ0VGltZSgpO1xuXHRcdFx0ICAgICAgICAgICB0aGlzLnR5cGVDaGVja2VyLmNoZWNrKGFzdCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlRW5kVGltZSgndHlwZWNoZWNrZXInKTtcblxuXHRcdFx0ICAgICAgICAgICByZXR1cm4gYXN0O1xuXHRcdCAgICAgICAgICAgfSk7XG5cdH1cbn1cbiIsCiAgICAiY29uc3QgRE9NX0VWRU5UOiBzdHJpbmcgPSAnZG9tOmV2ZW50JztcblxuY29uc3QgaXNFdmVudDogKHByb3BlcnR5S2V5OiBzdHJpbmcpID0+IGJvb2xlYW4gPSAocHJvcGVydHlLZXk6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuXHRyZXR1cm4gcHJvcGVydHlLZXkudG9Mb3dlckNhc2UoKVxuXHQgICAgICAgICAgICAgICAgICAuc3RhcnRzV2l0aCgnb24nKTtcbn1cblxuZXhwb3J0IGNvbnN0IEV2ZW50cyA9IHtcblx0RE9NX0VWRU5ULFxuXHRpc0V2ZW50LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzO1xuIiwKICAgICIvLy8gPHJlZmVyZW5jZSBsaWI9XCJkb21cIiAvPlxuXG5pbXBvcnQgdHlwZSB7UHJvcHMsIFZDaGlsZCwgVlRleHR9IGZyb20gXCIuLi9jb3JlL3J1bnRpbWUvdmRvbVwiO1xuaW1wb3J0IHtMYW1iZGFGdW5jdGlvbkNhbGx9IGZyb20gXCIuLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX3N0YXRlbWVudHNcIjtcbmltcG9ydCBFdmVudHMgZnJvbSBcIi4vZXZlbnRzXCI7XG5pbXBvcnQgdHlwZSB7QXBwbGljYXRpb25SdW50aW1lfSBmcm9tIFwiLi9ydW50aW1lXCI7XG5pbXBvcnQge1ZET019IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudENyZWF0b3Ige1xuXHRjcmVhdGUodk5vZGU6IFZDaGlsZCk6IE5vZGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudFBhdGNoZXIge1xuXHRwYXRjaChvbGRWTm9kZTogVkNoaWxkIHwgbnVsbCwgbmV3Tm9kZTogVkNoaWxkKTogdm9pZFxufVxuXG5leHBvcnQgY2xhc3MgSFRNTEVsZW1lbnRDcmVhdG9yIGltcGxlbWVudHMgRWxlbWVudENyZWF0b3Ige1xuXHRwcml2YXRlIHRleHRCdWZmZXI6IFZUZXh0W10gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJlYWRvbmx5IGFwcGxpY2F0aW9uUnVudGltZTogQXBwbGljYXRpb25SdW50aW1lLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgdmRvbTogVkRPTVxuXHQpIHtcblx0fVxuXG5cdHB1YmxpYyBjcmVhdGUodk5vZGU6IFZDaGlsZCk6IE5vZGUge1xuXHRcdGlmICh2Tm9kZS50eXBlID09PSAndGV4dCcpIHtcblx0XHRcdGNvbnN0IHRleHROb2RlOiBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodk5vZGUudmFsdWUpO1xuXHRcdFx0dk5vZGUuZG9tID0gdGV4dE5vZGU7XG5cdFx0XHRyZXR1cm4gdGV4dE5vZGU7XG5cdFx0fVxuXG5cdFx0aWYgKHZOb2RlLnR5cGUgPT09ICdjb21wb25lbnQnKSB7XG5cdFx0XHR2Tm9kZS5pbnN0YW5jZSA9IHRoaXMuYXBwbGljYXRpb25SdW50aW1lLmNyZWF0ZUluc3RhbmNlKHZOb2RlLmNsYXNzTmFtZSk7XG5cblx0XHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHZOb2RlLnByb3BzID8/IHt9KSkge1xuXHRcdFx0XHRpZiAoa2V5ID09PSAnY2hpbGRyZW4nKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHZOb2RlLmluc3RhbmNlPy5oYXNQdWJsaWNQcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRcdFx0dk5vZGUuaW5zdGFuY2Uuc2V0UHVibGljUHJvcGVydHkoa2V5LCB2YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKCF2Tm9kZS5zdWJUcmVlKSB7XG5cdFx0XHRcdHZOb2RlLnN1YlRyZWUgPSB0aGlzLmFwcGxpY2F0aW9uUnVudGltZS5yZW5kZXJDb21wb25lbnQodk5vZGUuaW5zdGFuY2UpIGFzIFZDaGlsZDtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy52ZG9tLnJlZ2lzdGVyKHZOb2RlLmluc3RhbmNlLCB2Tm9kZS5zdWJUcmVlKTtcblxuXHRcdFx0Y29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmNyZWF0ZSh2Tm9kZS5zdWJUcmVlKSBhcyBIVE1MRWxlbWVudDtcblx0XHRcdHZOb2RlLmRvbSA9IGVsZW1lbnQ7XG5cdFx0XHRyZXR1cm4gZWxlbWVudDtcblx0XHR9XG5cblx0XHRjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodk5vZGUudGFnKSBhcyBIVE1MRWxlbWVudDtcblx0XHR2Tm9kZS5kb20gPSBlbGVtZW50O1xuXG5cdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModk5vZGUucHJvcHMgPz8ge30pKSB7XG5cdFx0XHRpZiAoRXZlbnRzLmlzRXZlbnQoa2V5KSkge1xuXHRcdFx0XHR0aGlzLmFwcGxpY2F0aW9uUnVudGltZS5hZGRFdmVudEhhbmRsZXIoZWxlbWVudCwga2V5LCB2YWx1ZSBhcyBMYW1iZGFGdW5jdGlvbkNhbGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBTdHJpbmcodmFsdWUpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIHZOb2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlKGNoaWxkKSBhcyBIVE1MRWxlbWVudCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEhUTUxFbGVtZW50UGF0Y2hlciBpbXBsZW1lbnRzIEVsZW1lbnRQYXRjaGVyIHtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBtb3VudFBvaW50OiBIVE1MRWxlbWVudCxcblx0ICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBhcHBsaWNhdGlvblJ1bnRpbWU6IEFwcGxpY2F0aW9uUnVudGltZSxcblx0ICAgICAgICAgICAgdmRvbTogVkRPTSxcblx0ICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBlbGVtZW50Q3JlYXRvcjogRWxlbWVudENyZWF0b3IgPSBuZXcgSFRNTEVsZW1lbnRDcmVhdG9yKGFwcGxpY2F0aW9uUnVudGltZSwgdmRvbSkpIHtcblx0fVxuXG5cdHB1YmxpYyBwYXRjaChvbGROb2RlOiBWQ2hpbGQgfCBudWxsLCBuZXdOb2RlOiBWQ2hpbGQpOiB2b2lkIHtcblx0XHRpZiAoIW9sZE5vZGUpIHtcblx0XHRcdGNvbnN0IGVsZW1lbnQ6IE5vZGUgPSB0aGlzLmVsZW1lbnRDcmVhdG9yLmNyZWF0ZShuZXdOb2RlKTtcblx0XHRcdHRoaXMubW91bnRQb2ludC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblx0XHRcdG5ld05vZGUuZG9tID0gZWxlbWVudDtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnBhdGNoTm9kZSh0aGlzLm1vdW50UG9pbnQsIG9sZE5vZGUsIG5ld05vZGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBwYXRjaE5vZGUocGFyZW50OiBOb2RlLCBvbGROb2RlOiBWQ2hpbGQsIG5ld05vZGU6IFZDaGlsZCk6IHZvaWQge1xuXHRcdGlmIChvbGROb2RlLnR5cGUgPT09ICd0ZXh0JyAmJiBuZXdOb2RlLnR5cGUgPT09ICd0ZXh0Jykge1xuXHRcdFx0Y29uc3QgdGV4dE5vZGU6IE5vZGUgPSBvbGROb2RlLmRvbSE7XG5cdFx0XHRpZiAodGV4dE5vZGUudGV4dENvbnRlbnQgIT09IG5ld05vZGUudmFsdWUpIHtcblx0XHRcdFx0dGV4dE5vZGUudGV4dENvbnRlbnQgPSBuZXdOb2RlLnZhbHVlO1xuXHRcdFx0fVxuXHRcdFx0bmV3Tm9kZS5kb20gPSB0ZXh0Tm9kZTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAob2xkTm9kZS50eXBlICE9PSBuZXdOb2RlLnR5cGUpIHtcblx0XHRcdGNvbnN0IG5ld0VsZW1lbnQ6IE5vZGUgPSB0aGlzLmVsZW1lbnRDcmVhdG9yLmNyZWF0ZShuZXdOb2RlKTtcblx0XHRcdHBhcmVudC5yZXBsYWNlQ2hpbGQobmV3RWxlbWVudCwgb2xkTm9kZS5kb20hKTtcblx0XHRcdG5ld05vZGUuZG9tID0gbmV3RWxlbWVudDtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAobmV3Tm9kZS50eXBlID09PSAnY29tcG9uZW50Jykge1xuXHRcdFx0Y29uc3QgbmV3RWxlbWVudDogTm9kZSA9IHRoaXMuZWxlbWVudENyZWF0b3IuY3JlYXRlKG5ld05vZGUpO1xuXHRcdFx0aWYgKCFvbGROb2RlLmRvbSkge1xuXHRcdFx0XHRwYXJlbnQuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XG5cdFx0XHR9IGVsc2UgaWYgKG9sZE5vZGUuZG9tICE9PSBuZXdFbGVtZW50KSB7XG5cdFx0XHRcdHBhcmVudC5yZXBsYWNlQ2hpbGQobmV3RWxlbWVudCwgb2xkTm9kZS5kb20hKTtcblx0XHRcdH1cblx0XHRcdG5ld05vZGUuZG9tID0gbmV3RWxlbWVudDtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBkb206IEhUTUxFbGVtZW50ID0gb2xkTm9kZS5kb20gYXMgSFRNTEVsZW1lbnQ7XG5cdFx0bmV3Tm9kZS5kb20gPSBkb207XG5cblx0XHRpZiAob2xkTm9kZS50eXBlICE9PSAndGV4dCcgJiYgbmV3Tm9kZS50eXBlICE9PSAndGV4dCcpIHtcblx0XHRcdHRoaXMudXBkYXRlUHJvcGVydGllcyhkb20sIG9sZE5vZGUucHJvcHMgPz8ge30sIG5ld05vZGUucHJvcHMgPz8ge30pO1xuXG5cdFx0XHRpZiAob2xkTm9kZS50eXBlID09PSAnZWxlbWVudCcgJiYgbmV3Tm9kZS50eXBlID09PSAnZWxlbWVudCcpIHtcblx0XHRcdFx0dGhpcy5wYXRjaENoaWxkcmVuKGRvbSwgb2xkTm9kZS5jaGlsZHJlbiwgbmV3Tm9kZS5jaGlsZHJlbik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSB1cGRhdGVQcm9wZXJ0aWVzKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBvbGRQcm9wZXJ0aWVzOiBQcm9wcywgbmV3UHJvcGVydGllczogUHJvcHMpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IGtleSBpbiBvbGRQcm9wZXJ0aWVzKSB7XG5cdFx0XHRpZiAoIShrZXkgaW4gbmV3UHJvcGVydGllcykpIHtcblx0XHRcdFx0aWYgKEV2ZW50cy5pc0V2ZW50KGtleSkpIHtcblx0XHRcdFx0XHR0aGlzLmFwcGxpY2F0aW9uUnVudGltZS5yZW1vdmVFdmVudEhhbmRsZXIoZWxlbWVudCwga2V5KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBwcm9wZXJ0eUtleSBpbiBuZXdQcm9wZXJ0aWVzKSB7XG5cdFx0XHRjb25zdCBvbGRWYWx1ZTogYW55ID0gb2xkUHJvcGVydGllc1twcm9wZXJ0eUtleV07XG5cdFx0XHRjb25zdCBuZXdWYWx1ZTogYW55ID0gbmV3UHJvcGVydGllc1twcm9wZXJ0eUtleV07XG5cblx0XHRcdGlmIChvbGRWYWx1ZSA9PT0gbmV3VmFsdWUpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChFdmVudHMuaXNFdmVudChwcm9wZXJ0eUtleSkpIHtcblx0XHRcdFx0aWYgKG9sZFZhbHVlKSB7XG5cdFx0XHRcdFx0dGhpcy5hcHBsaWNhdGlvblJ1bnRpbWUucmVtb3ZlRXZlbnRIYW5kbGVyKGVsZW1lbnQsIHByb3BlcnR5S2V5KTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmFwcGxpY2F0aW9uUnVudGltZS5hZGRFdmVudEhhbmRsZXIoZWxlbWVudCwgcHJvcGVydHlLZXksIG5ld1ZhbHVlIGFzIExhbWJkYUZ1bmN0aW9uQ2FsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShwcm9wZXJ0eUtleSwgbmV3VmFsdWUgYXMgc3RyaW5nKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHBhdGNoQ2hpbGRyZW4ocGFyZW50OiBOb2RlLCBvbGRDaGlsZHJlbjogVkNoaWxkW10sIG5ld0NoaWxkcmVuOiBWQ2hpbGRbXSk6IHZvaWQge1xuXHRcdGNvbnN0IG9sZExlbmd0aDogbnVtYmVyID0gb2xkQ2hpbGRyZW4ubGVuZ3RoO1xuXHRcdGNvbnN0IG5ld0xlbmd0aDogbnVtYmVyID0gbmV3Q2hpbGRyZW4ubGVuZ3RoO1xuXHRcdGNvbnN0IGNvbW1vbkxlbmd0aDogbnVtYmVyID0gTWF0aC5taW4ob2xkTGVuZ3RoLCBuZXdMZW5ndGgpO1xuXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGNvbW1vbkxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0aGlzLnBhdGNoTm9kZShwYXJlbnQsIG9sZENoaWxkcmVuW2ldIGFzIFZDaGlsZCwgbmV3Q2hpbGRyZW5baV0gYXMgVkNoaWxkKTtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSBjb21tb25MZW5ndGg7IGkgPCBuZXdMZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgbmV3Q2hpbGQ6IFZDaGlsZCA9IG5ld0NoaWxkcmVuW2ldIGFzIFZDaGlsZDtcblx0XHRcdGNvbnN0IG5ld0VsZW1lbnQ6IEhUTUxNYXBFbGVtZW50ID0gdGhpcy5lbGVtZW50Q3JlYXRvci5jcmVhdGUobmV3Q2hpbGQpIGFzIEhUTUxNYXBFbGVtZW50O1xuXHRcdFx0cGFyZW50LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuXG5cdFx0XHRuZXdDaGlsZC5kb20gPSBuZXdFbGVtZW50O1xuXHRcdH1cblxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IG9sZExlbmd0aCAtIDE7IGkgPj0gbmV3TGVuZ3RoOyBpLS0pIHtcblx0XHRcdGNvbnN0IG9sZENoaWxkOiBWQ2hpbGQgPSBvbGRDaGlsZHJlbltpXSBhcyBWQ2hpbGQ7XG5cdFx0XHRjb25zdCBkb206IE5vZGUgfCB1bmRlZmluZWQgPSBvbGRDaGlsZC5kb207XG5cdFx0XHRpZiAoZG9tKSB7XG5cdFx0XHRcdHBhcmVudC5yZW1vdmVDaGlsZChkb20pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwKICAgICJpbXBvcnQge0x5cmFTY3JpcHRQcm9ncmFtfSBmcm9tIFwiLi4vY29yZS9wcm9ncmFtXCI7XG5pbXBvcnQge2ZldGNoU291cmNlfSBmcm9tIFwiLi4vY29yZS9wYXJzZXIvc291cmNlXCI7XG5pbXBvcnQge0NsYXNzRGVmaW5pdGlvbiwgRW52aXJvbm1lbnQsIEluc3RhbmNlfSBmcm9tIFwiLi4vY29yZS9ydW50aW1lL29iamVjdHNcIjtcbmltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuLi9jb3JlL3J1bnRpbWUvcmVnaXN0cnkudHNcIjtcbmltcG9ydCB7Y2FsbEluc3RhbmNlTWV0aG9kLCBMYW1iZGFGdW5jdGlvbkNhbGx9IGZyb20gXCIuLi9jb3JlL2ludGVycHJldGVyL2V2YWx1YXRpb25cIjtcbmltcG9ydCB7RXZlbnRUeXBlfSBmcm9tIFwiLi4vbGlicmFyeS9jbGFzc2VzL2V2ZW50XCI7XG5pbXBvcnQge0V2ZW50UGlwZWxpbmV9IGZyb20gXCIuLi9jb3JlL2V2ZW50L3BpcGVsaW5lXCI7XG5cbmNvbnN0IGx5cmFFdmVudENsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24gPSBuZXcgRXZlbnRUeXBlKCkuZ2V0Q2xhc3NEZWZpbml0aW9uKCk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW5naW5lIHtcblx0ZXhlY3V0ZUVudHJ5RmlsZSh1cmw6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuXG5cdGNyZWF0ZUluc3RhbmNlKGNsYXNzTmFtZTogc3RyaW5nKTogSW5zdGFuY2U7XG5cblx0Z2V0T2JqZWN0UmVnaXN0cnkoKTogT2JqZWN0UmVnaXN0cnk7XG5cblx0Z2V0RW52aXJvbm1lbnQoKTogRW52aXJvbm1lbnQ7XG5cblx0Z2V0Um9vdEluc3RhbmNlKCk6IEluc3RhbmNlO1xuXG5cdGNhbGxSb290SW5zdGFuY2VNZXRob2QobWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSk6IGFueTtcblxuXHRjYWxsSW5zdGFuY2VNZXRob2QoaW5zdGFuY2U6IEluc3RhbmNlLCBtZXRob2ROYW1lOiBzdHJpbmcsIGFyZ3M6IEFycmF5PGFueT4pOiBhbnk7XG5cblx0Y3JlYXRlRXZlbnQoZXZlbnQ6IEV2ZW50KTogSW5zdGFuY2U7XG5cblx0Y3JlYXRlRXZlbnRIYW5kbGVyKGhhbmRsZXI6IExhbWJkYUZ1bmN0aW9uQ2FsbCwgZXZlbnROYW1lOiBzdHJpbmcpOiAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgV2ViTHlyYVNjcmlwdCBpbXBsZW1lbnRzIEVuZ2luZSB7XG5cdHByaXZhdGUgcmVhZG9ubHkgcHJvZ3JhbTogTHlyYVNjcmlwdFByb2dyYW07XG5cdHByaXZhdGUgcmVhZG9ubHkgX2dsb2JhbE9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeTtcblx0cHJpdmF0ZSByZWFkb25seSBfZ2xvYmFsRW52aXJvbm1lbnQ6IEVudmlyb25tZW50O1xuXHRwcml2YXRlIHJvb3RJbnN0YW5jZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbDtcblxuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZ2xvYmFsRXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSA9IG5ldyBFdmVudFBpcGVsaW5lKCksIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSkge1xuXHRcdHRoaXMucHJvZ3JhbSA9IG5ldyBMeXJhU2NyaXB0UHJvZ3JhbShpc0RlYnVnLCB0aGlzLmdsb2JhbEV2ZW50UGlwZWxpbmUpO1xuXHRcdHRoaXMuX2dsb2JhbE9iamVjdFJlZ2lzdHJ5ID0gdGhpcy5wcm9ncmFtLmdldEdsb2JhbE9iamVjdFJlZ2lzdHJ5KCk7XG5cdFx0dGhpcy5fZ2xvYmFsRW52aXJvbm1lbnQgPSB0aGlzLnByb2dyYW0uZ2V0R2xvYmFsRW52aXJvbm1lbnQoKTtcblx0fVxuXG5cdGdldE9iamVjdFJlZ2lzdHJ5KCk6IE9iamVjdFJlZ2lzdHJ5IHtcblx0XHRyZXR1cm4gdGhpcy5fZ2xvYmFsT2JqZWN0UmVnaXN0cnk7XG5cdH1cblxuXHRnZXRFbnZpcm9ubWVudCgpOiBFbnZpcm9ubWVudCB7XG5cdFx0cmV0dXJuIHRoaXMuX2dsb2JhbEVudmlyb25tZW50O1xuXHR9XG5cblx0cHVibGljIGdldFJvb3RJbnN0YW5jZSgpOiBJbnN0YW5jZSB7XG5cdFx0aWYgKHRoaXMucm9vdEluc3RhbmNlID09PSBudWxsKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ05vIHJvb3QgaW5zdGFuY2UgYXZhaWxhYmxlLicpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5yb290SW5zdGFuY2U7XG5cdH1cblxuXHRwdWJsaWMgY3JlYXRlSW5zdGFuY2UoY2xhc3NOYW1lOiBzdHJpbmcpOiBJbnN0YW5jZSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0Q2xhc3NEZWZpbml0aW9uKGNsYXNzTmFtZSlcblx0XHQgICAgICAgICAgIC5jb25zdHJ1Y3ROZXdJbnN0YW5jZVdpdGhvdXRBcmd1bWVudHMoXG5cdFx0XHQgICAgICAgICAgIHRoaXMuX2dsb2JhbE9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0ICAgICAgICAgICB0aGlzLl9nbG9iYWxFbnZpcm9ubWVudCxcblx0XHRcdCAgICAgICAgICAgdGhpcy5nbG9iYWxFdmVudFBpcGVsaW5lXG5cdFx0ICAgICAgICAgICApO1xuXHR9XG5cblx0cHVibGljIGNhbGxSb290SW5zdGFuY2VNZXRob2QobWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuY2FsbEluc3RhbmNlTWV0aG9kKHRoaXMuZ2V0Um9vdEluc3RhbmNlKCksIG1ldGhvZE5hbWUsIGFyZ3MpO1xuXHR9XG5cblx0cHVibGljIGNhbGxJbnN0YW5jZU1ldGhvZChpbnN0YW5jZTogSW5zdGFuY2UsIG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10pOiBhbnkge1xuXHRcdHJldHVybiBjYWxsSW5zdGFuY2VNZXRob2QoXG5cdFx0XHRpbnN0YW5jZSxcblx0XHRcdGluc3RhbmNlLmZpbmRlTWV0aG9kTm9kZShtZXRob2ROYW1lKSxcblx0XHRcdGFyZ3MsXG5cdFx0XHR0aGlzLl9nbG9iYWxPYmplY3RSZWdpc3RyeSxcblx0XHRcdHRoaXMuX2dsb2JhbEVudmlyb25tZW50LFxuXHRcdFx0dGhpcy5nbG9iYWxFdmVudFBpcGVsaW5lXG5cdFx0KTtcblx0fVxuXG5cdHB1YmxpYyBhc3luYyBleGVjdXRlRW50cnlGaWxlKHVybDogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiB0aGlzLnByb2dyYW0uZXhlY3V0ZVNvdXJjZShhd2FpdCBmZXRjaFNvdXJjZSh1cmwpKVxuXHRcdCAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuXHRcdFx0ICAgICAgICAgICB0aGlzLnJvb3RJbnN0YW5jZSA9IHRoaXMuY3JlYXRlSW5zdGFuY2UoY2xhc3NOYW1lKTtcblx0XHQgICAgICAgICAgIH0pO1xuXHR9XG5cblx0cHVibGljIGNyZWF0ZUV2ZW50KGV2ZW50OiBFdmVudCk6IEluc3RhbmNlIHtcblx0XHRyZXR1cm4gbHlyYUV2ZW50Q2xhc3NEZWYuY29uc3RydWN0TmF0aXZlSW5zdGFuY2UoW2V2ZW50XSk7XG5cdH1cblxuXHRwdWJsaWMgY3JlYXRlRXZlbnRIYW5kbGVyKGhhbmRsZXI6IExhbWJkYUZ1bmN0aW9uQ2FsbCwgZXZlbnROYW1lOiBzdHJpbmcpOiAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkIHtcblx0XHRyZXR1cm4gKGV2ZW50OiBFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0dGhpcy5nbG9iYWxFdmVudFBpcGVsaW5lLmVtaXQoXG5cdFx0XHRcdGV2ZW50TmFtZSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGludm9rZTogKCk6IGFueSA9PiB7XG5cdFx0XHRcdFx0XHRoYW5kbGVyLmV2YWxDYWxsKHRoaXMuY3JlYXRlRXZlbnQoZXZlbnQpKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGV2ZW50XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fTtcblx0fVxuXG5cblx0cHJpdmF0ZSBnZXRDbGFzc0RlZmluaXRpb24oY2xhc3NOYW1lOiBzdHJpbmcpOiBDbGFzc0RlZmluaXRpb24ge1xuXHRcdHJldHVybiB0aGlzLl9nbG9iYWxPYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChjbGFzc05hbWUpO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7dHlwZSBWTm9kZX0gZnJvbSBcIi4uL2NvcmUvcnVudGltZS92ZG9tXCI7XG5pbXBvcnQgdHlwZSB7SW5zdGFuY2V9IGZyb20gXCIuLi9jb3JlL3J1bnRpbWUvb2JqZWN0c1wiO1xuXG5leHBvcnQgY2xhc3MgRXZlbnRIYW5kbGVyUmVnaXN0cnkge1xuXHRwcml2YXRlIHJlZ2lzdHJ5OiBXZWFrTWFwPEhUTUxFbGVtZW50LCBSZWNvcmQ8c3RyaW5nLCBGdW5jdGlvbj4+ID0gbmV3IFdlYWtNYXA8SFRNTEVsZW1lbnQsIFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uPj4oKTtcblxuXHRwdWJsaWMgcmVnaXN0ZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIHByb3BlcnR5S2V5OiBzdHJpbmcsIGhhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7XG5cdFx0Y29uc3QgZXZlbnRIYW5kbGVyczogUmVjb3JkPHN0cmluZywgRnVuY3Rpb24+ID0gdGhpcy5yZWdpc3RyeS5nZXQoZWxlbWVudCkgPz8ge307XG5cblx0XHRldmVudEhhbmRsZXJzW3Byb3BlcnR5S2V5XSA9IGhhbmRsZXI7XG5cblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChlbGVtZW50LCBldmVudEhhbmRsZXJzKTtcblx0fVxuXG5cdHB1YmxpYyB1bnJlZ2lzdGVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwcm9wZXJ0eUtleTogc3RyaW5nKTogRnVuY3Rpb24gfCBudWxsIHtcblx0XHRjb25zdCBldmVudEhhbmRsZXJzOiBSZWNvcmQ8c3RyaW5nLCBGdW5jdGlvbj4gPSB0aGlzLnJlZ2lzdHJ5LmdldChlbGVtZW50KSA/PyB7fTtcblxuXHRcdGNvbnN0IGV2ZW50SGFuZGxlcjogRnVuY3Rpb24gfCB1bmRlZmluZWQgPSBldmVudEhhbmRsZXJzW3Byb3BlcnR5S2V5XTtcblx0XHRpZiAoZXZlbnRIYW5kbGVyKSB7XG5cdFx0XHRkZWxldGUgZXZlbnRIYW5kbGVyc1twcm9wZXJ0eUtleV07XG5cblx0XHRcdHRoaXMucmVnaXN0cnkuc2V0KGVsZW1lbnQsIGV2ZW50SGFuZGxlcnMpO1xuXG5cdFx0XHRyZXR1cm4gZXZlbnRIYW5kbGVyO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBWRE9NIHtcblx0cHJpdmF0ZSBpbnN0YW5jZU1hcDogTWFwPHN0cmluZywgVk5vZGU+ID0gbmV3IE1hcDxzdHJpbmcsIFZOb2RlPigpO1xuXG5cdHB1YmxpYyByZWdpc3RlcihpbnN0YW5jZTogSW5zdGFuY2UsIG5vZGU6IFZOb2RlKTogdm9pZCB7XG5cdFx0dGhpcy5pbnN0YW5jZU1hcC5zZXQoaW5zdGFuY2UuaWQsIG5vZGUpO1xuXHR9XG5cblx0cHVibGljIHVucmVnaXN0ZXIoaW5zdGFuY2U6IEluc3RhbmNlKTogdm9pZCB7XG5cdFx0dGhpcy5pbnN0YW5jZU1hcC5kZWxldGUoaW5zdGFuY2UuaWQpO1xuXHR9XG5cblx0cHVibGljIGZpbmROb2RlQnlDb21wb25lbnQoaW5zdGFuY2U6IEluc3RhbmNlKTogVk5vZGUge1xuXHRcdGNvbnN0IHZOb2RlOiBWTm9kZSB8IHVuZGVmaW5lZCA9IHRoaXMuaW5zdGFuY2VNYXAuZ2V0KGluc3RhbmNlLmlkKTtcblx0XHRpZiAoIXZOb2RlKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEluc3RhbmNlIHdpdGggaWQgJHtpbnN0YW5jZS5pZH0gbm90IGZvdW5kLmApO1xuXHRcdH1cblx0XHRyZXR1cm4gdk5vZGU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHt0eXBlIEVuZ2luZSwgV2ViTHlyYVNjcmlwdH0gZnJvbSBcIi4vZW5naW5lXCI7XG5pbXBvcnQge3R5cGUgRWxlbWVudFBhdGNoZXIsIEhUTUxFbGVtZW50UGF0Y2hlcn0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgdHlwZSB7VkNoaWxkfSBmcm9tIFwiLi4vY29yZS9ydW50aW1lL3Zkb20udHNcIjtcbmltcG9ydCB7RXZlbnRQaXBlbGluZX0gZnJvbSBcIi4uL2NvcmUvZXZlbnQvcGlwZWxpbmVcIjtcbmltcG9ydCBFdmVudHMgZnJvbSBcIi4vZXZlbnRzXCI7XG5pbXBvcnQge3R5cGUgSW5zdGFuY2V9IGZyb20gXCIuLi9jb3JlL3J1bnRpbWUvb2JqZWN0c1wiO1xuaW1wb3J0IHtMYW1iZGFGdW5jdGlvbkNhbGx9IGZyb20gXCIuLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX3N0YXRlbWVudHNcIjtcbmltcG9ydCB7RXZlbnRIYW5kbGVyUmVnaXN0cnksIFZET019IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5pbXBvcnQgTHlyYUV2ZW50cyBmcm9tIFwiLi4vY29yZS9ldmVudC9ldmVudHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBcHBsaWNhdGlvblJ1bnRpbWUge1xuXHRnZXQgZW5naW5lKCk6IEVuZ2luZTtcblxuXHRnZXQgZXZlbnRQaXBlbGluZSgpOiBFdmVudFBpcGVsaW5lO1xuXG5cdHN0YXJ0KHVybDogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG5cblx0Y3JlYXRlSW5zdGFuY2UoY2xhc3NOYW1lOiBzdHJpbmcpOiBJbnN0YW5jZTtcblxuXHRjYWxsUm9vdEluc3RhbmNlTWV0aG9kKG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10pOiBhbnk7XG5cblx0Y2FsbE1ldGhvZChpbnN0YW5jZTogSW5zdGFuY2UsIG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10pOiBhbnk7XG5cblx0cmVuZGVyQ29tcG9uZW50KGluc3RhbmNlOiBJbnN0YW5jZSk6IFZDaGlsZDtcblxuXHRhZGRFdmVudEhhbmRsZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIHByb3BlcnR5S2V5OiBzdHJpbmcsIGhhbmRsZXI6IExhbWJkYUZ1bmN0aW9uQ2FsbCk6IHZvaWQ7XG5cblx0cmVtb3ZlRXZlbnRIYW5kbGVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwcm9wZXJ0eUtleTogc3RyaW5nKTogdm9pZDtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0QXBwbGljYXRpb25SdW50aW1lIGltcGxlbWVudHMgQXBwbGljYXRpb25SdW50aW1lIHtcblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgX2VuZ2luZTogRW5naW5lLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgX2V2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUgPSBuZXcgRXZlbnRQaXBlbGluZSgpLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgZXZlbnRIYW5kbGVyUmVnaXN0cnk6IEV2ZW50SGFuZGxlclJlZ2lzdHJ5ID0gbmV3IEV2ZW50SGFuZGxlclJlZ2lzdHJ5KClcblx0KSB7XG5cdH1cblxuXHRnZXQgZW5naW5lKCk6IEVuZ2luZSB7XG5cdFx0cmV0dXJuIHRoaXMuX2VuZ2luZTtcblx0fVxuXG5cdGdldCBldmVudFBpcGVsaW5lKCk6IEV2ZW50UGlwZWxpbmUge1xuXHRcdHJldHVybiB0aGlzLl9ldmVudFBpcGVsaW5lO1xuXHR9XG5cblx0cHVibGljIHJlbmRlckNvbXBvbmVudChpbnN0YW5jZTogSW5zdGFuY2UpOiBWQ2hpbGQge1xuXHRcdHJldHVybiB0aGlzLmNhbGxNZXRob2QoaW5zdGFuY2UsICdyZW5kZXInLCBbXSkgYXMgVkNoaWxkXG5cdH1cblxuXHRwdWJsaWMgc3RhcnQodXJsOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG5cdH1cblxuXHRwdWJsaWMgY3JlYXRlSW5zdGFuY2UoY2xhc3NOYW1lOiBzdHJpbmcpOiBJbnN0YW5jZSB7XG5cdFx0cmV0dXJuIHRoaXMuX2VuZ2luZS5jcmVhdGVJbnN0YW5jZShjbGFzc05hbWUpO1xuXHR9XG5cblx0cHVibGljIGNhbGxSb290SW5zdGFuY2VNZXRob2QobWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSA9IFtdKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5fZW5naW5lLmNhbGxSb290SW5zdGFuY2VNZXRob2QobWV0aG9kTmFtZSwgYXJncyk7XG5cdH1cblxuXHRwdWJsaWMgY2FsbE1ldGhvZChpbnN0YW5jZTogSW5zdGFuY2UsIG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10gPSBbXSk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuX2VuZ2luZS5jYWxsSW5zdGFuY2VNZXRob2QoaW5zdGFuY2UsIG1ldGhvZE5hbWUsIGFyZ3MpO1xuXHR9XG5cblx0cHVibGljIGFkZEV2ZW50SGFuZGxlcihlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcGVydHlLZXk6IHN0cmluZywgaGFuZGxlcjogTGFtYmRhRnVuY3Rpb25DYWxsKTogdm9pZCB7XG5cdFx0Y29uc3QgZXZlbnROYW1lOiBzdHJpbmcgPSBwcm9wZXJ0eUtleS5zbGljZSgyKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcblxuXHRcdGNvbnN0IGV2ZW50SGFuZGxlcjogKGV2ZW50OiBFdmVudCkgPT4gdm9pZCA9IHRoaXMuZW5naW5lLmNyZWF0ZUV2ZW50SGFuZGxlcihoYW5kbGVyLCBFdmVudHMuRE9NX0VWRU5UKTtcblxuXHRcdHRoaXMuZXZlbnRIYW5kbGVyUmVnaXN0cnkucmVnaXN0ZXIoZWxlbWVudCwgcHJvcGVydHlLZXksIGV2ZW50SGFuZGxlcik7XG5cblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudEhhbmRsZXIpO1xuXHR9XG5cblx0cHVibGljIHJlbW92ZUV2ZW50SGFuZGxlcihlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcGVydHlLZXk6IHN0cmluZyk6IHZvaWQge1xuXHRcdGNvbnN0IGV2ZW50TmFtZTogc3RyaW5nID0gcHJvcGVydHlLZXkuc2xpY2UoMilcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRjb25zdCBldmVudEhhbmRsZXI6IEZ1bmN0aW9uIHwgbnVsbCA9IHRoaXMuZXZlbnRIYW5kbGVyUmVnaXN0cnkudW5yZWdpc3RlcihlbGVtZW50LCBwcm9wZXJ0eUtleSk7XG5cblx0XHRpZiAoZXZlbnRIYW5kbGVyKSB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudEhhbmRsZXIgYXMgRXZlbnRMaXN0ZW5lcik7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBXZWJBcHBsaWNhdGlvblJ1bnRpbWUgZXh0ZW5kcyBBYnN0cmFjdEFwcGxpY2F0aW9uUnVudGltZSB7XG5cdHByaXZhdGUgcmVhZG9ubHkgdmRvbTogVkRPTSA9IG5ldyBWRE9NKCk7XG5cdHByaXZhdGUgcmVhZG9ubHkgcGF0Y2hlcjogRWxlbWVudFBhdGNoZXI7XG5cblx0cHJpdmF0ZSBpc1JlbmRlcmluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdG1vdW50UG9pbnQ6IEhUTUxFbGVtZW50LFxuXHRcdGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSxcblx0XHRldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lID0gbmV3IEV2ZW50UGlwZWxpbmUoKSxcblx0XHRldmVudEhhbmRsZXJSZWdpc3RyeTogRXZlbnRIYW5kbGVyUmVnaXN0cnkgPSBuZXcgRXZlbnRIYW5kbGVyUmVnaXN0cnkoKVxuXHQpIHtcblx0XHRzdXBlcihuZXcgV2ViTHlyYVNjcmlwdChldmVudFBpcGVsaW5lLCBpc0RlYnVnKSwgZXZlbnRQaXBlbGluZSwgZXZlbnRIYW5kbGVyUmVnaXN0cnkpO1xuXG5cdFx0dGhpcy5wYXRjaGVyID0gbmV3IEhUTUxFbGVtZW50UGF0Y2hlcihtb3VudFBvaW50LCB0aGlzLCB0aGlzLnZkb20pO1xuXG5cdFx0dGhpcy5leHBvc2VSdW50aW1lKCk7XG5cdH1cblxuXHRwdWJsaWMgb3ZlcnJpZGUgYXN5bmMgc3RhcnQodXJsOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nID0gJ1Byb2dyYW0nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0YXdhaXQgdGhpcy5lbmdpbmUuZXhlY3V0ZUVudHJ5RmlsZSh1cmwsIGNsYXNzTmFtZSk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKTtcblxuXHRcdHRoaXMucmVxdWVzdENvbXBvbmVudFJlbmRlcih0aGlzLmVuZ2luZS5nZXRSb290SW5zdGFuY2UoKSk7XG5cdH1cblxuXG5cdHB1YmxpYyByZXF1ZXN0Q29tcG9uZW50UmVuZGVyKGluc3RhbmNlOiBJbnN0YW5jZSwgb2xkQ2hpbGQ/OiBWQ2hpbGQpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pc1JlbmRlcmluZykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHF1ZXVlTWljcm90YXNrKCgpOiB2b2lkID0+IHRoaXMucGVyZm9ybUNvbXBvbmVudFJlbmRlcihpbnN0YW5jZSwgb2xkQ2hpbGQpKTtcblx0fVxuXG5cdHByaXZhdGUgcGVyZm9ybUNvbXBvbmVudFJlbmRlcihpbnN0YW5jZTogSW5zdGFuY2UsIG9sZENoaWxkOiBWQ2hpbGQgfCBudWxsID0gbnVsbCk6IHZvaWQge1xuXHRcdHRoaXMuaXNSZW5kZXJpbmcgPSB0cnVlO1xuXG5cdFx0Y29uc3QgbmV4dENoaWxkOiBWQ2hpbGQgPSB0aGlzLnJlbmRlckNvbXBvbmVudChpbnN0YW5jZSk7XG5cblx0XHR0aGlzLnBhdGNoZXIucGF0Y2gob2xkQ2hpbGQsIG5leHRDaGlsZCk7XG5cblx0XHR0aGlzLnZkb20ucmVnaXN0ZXIoaW5zdGFuY2UsIG5leHRDaGlsZCk7XG5cblx0XHRpbnN0YW5jZS5tYXJrQ2xlYW4odGhpcy5ldmVudFBpcGVsaW5lKTtcblxuXHRcdHRoaXMuaXNSZW5kZXJpbmcgPSBmYWxzZTtcblx0fVxuXG5cdHByaXZhdGUgcmVnaXN0ZXJFdmVudExpc3RlbmVycygpOiB2b2lkIHtcblx0XHR0aGlzLmV2ZW50UGlwZWxpbmVcblx0XHQgICAgLm9uKEV2ZW50cy5ET01fRVZFTlQsICh7aW52b2tlfTogYW55KTogdm9pZCA9PiB7XG5cdFx0XHQgICAgaW52b2tlKCk7XG5cdFx0ICAgIH0pO1xuXG5cdFx0dGhpcy5ldmVudFBpcGVsaW5lXG5cdFx0ICAgIC5vbihMeXJhRXZlbnRzLkxZUkFfSU5TVEFOQ0VfRElSVFlfU1RBVEUsICh7aW5zdGFuY2V9OiBhbnkpOiB2b2lkID0+IHtcblx0XHRcdCAgICB0aGlzLnJlcXVlc3RDb21wb25lbnRSZW5kZXIoaW5zdGFuY2UsIHRoaXMudmRvbS5maW5kTm9kZUJ5Q29tcG9uZW50KGluc3RhbmNlKSBhcyBWQ2hpbGQpO1xuXHRcdCAgICB9KTtcblx0fVxuXG5cdHByaXZhdGUgZXhwb3NlUnVudGltZSgpOiB2b2lkIHtcblx0XHRjb25zdCBnbG9iYWw6IGFueSA9IHdpbmRvdyBhcyBXaW5kb3c7XG5cblx0XHRnbG9iYWwuX19MWVJBX18gPSBnbG9iYWwuX19MWVJBX18gfHwge1xuXHRcdFx0dmVyc2lvbjogJzAuMC4xJyxcblx0XHRcdHJ1bnRpbWU6IHRoaXMsXG5cdFx0fTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4vY29yZS9wYXJzZXIvcGFyc2VyXCI7XG5pbXBvcnQge3dyYXBKc0Vycm9yfSBmcm9tIFwiLi9jb3JlL2Vycm9yc1wiO1xuaW1wb3J0IHtmZXRjaFNvdXJjZSwgU291cmNlfSBmcm9tIFwiLi9jb3JlL3BhcnNlci9zb3VyY2VcIjtcbmltcG9ydCB7QVNUTm9kZX0gZnJvbSBcIi4vY29yZS9hc3RcIjtcbmltcG9ydCB7VG9rZW5pemVyfSBmcm9tIFwiLi9jb3JlL3Rva2VuaXplci50c1wiO1xuaW1wb3J0IHtUb2tlbn0gZnJvbSBcIi4vY29yZS9ncmFtbWFyXCI7XG5pbXBvcnQge0x5cmFTY3JpcHRQcm9ncmFtfSBmcm9tIFwiLi9jb3JlL3Byb2dyYW1cIjtcbmltcG9ydCB7RXZlbnRQaXBlbGluZX0gZnJvbSBcIi4vY29yZS9ldmVudC9waXBlbGluZVwiO1xuaW1wb3J0IHtTdGF0ZX0gZnJvbSBcIi4vY29yZS9ldmVudC9zdGF0ZVwiO1xuaW1wb3J0IHtIVE1MRWxlbWVudENyZWF0b3J9IGZyb20gXCIuL2hvc3QvZG9tXCI7XG5pbXBvcnQgdHlwZSB7Qnl0ZUNvZGVJbnN0cnVjdGlvbnN9IGZyb20gXCIuL2NvcmUvdmlydHVhbG1hY2hpbmUvYnl0ZWNvZGUudHNcIjtcblxuXG5leHBvcnQge1dlYkx5cmFTY3JpcHR9IGZyb20gXCIuL2hvc3QvZW5naW5lXCI7XG5leHBvcnQge1dlYkFwcGxpY2F0aW9uUnVudGltZX0gZnJvbSBcIi4vaG9zdC9ydW50aW1lXCI7XG5cbmNvbnN0IEx5cmEgPSB7XG5cdFNvdXJjZSxcblx0UGFyc2VyLFxuXHRUb2tlbml6ZXIsXG5cdEV2ZW50UGlwZWxpbmUsXG5cdEhUTUxFbGVtZW50Q3JlYXRvcixcblx0U3RhdGUsXG5cdFByb2dyYW06IChpc0RlYnVnOiBib29sZWFuKTogTHlyYVNjcmlwdFByb2dyYW0gPT4gUHJvZ3JhbShpc0RlYnVnKSxcblx0ZXhlY3V0ZTogKHNvdXJjZTogU291cmNlLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+ID0+IGV4ZWN1dGUoc291cmNlLCBpc0RlYnVnKSxcblx0ZXhlY3V0ZUZyb21TdHJpbmc6IChjb2RlOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4gPT4gZXhlY3V0ZUZyb21TdHJpbmcoY29kZSwgaXNEZWJ1ZyksXG5cdGV4ZWN1dGVGcm9tVXJsOiBhc3luYyAodXJsOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4gPT4gZXhlY3V0ZUZyb21VcmwodXJsLCBpc0RlYnVnKSxcblx0ZXhlY3V0ZVRlc3Q6IChzb3VyY2U6IFNvdXJjZSwgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiBleGVjdXRlVGVzdChzb3VyY2UsIGlzRGVidWcpLFxuXHRleGVjdXRlVGVzdFN0cmluZzogKGNvZGU6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiBleGVjdXRlVGVzdFN0cmluZyhjb2RlLCBpc0RlYnVnKSxcblx0ZXhlY3V0ZVRlc3RVcmw6ICh1cmw6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiBleGVjdXRlVGVzdFVybCh1cmwsIGlzRGVidWcpLFxuXHRjb21waWxlU291cmNlOiAoc291cmNlOiBTb3VyY2UsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8Qnl0ZUNvZGVJbnN0cnVjdGlvbnM+ID0+IGNvbXBpbGVTb3VyY2Uoc291cmNlLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWJ1ZyksXG5cdGNvbXBpbGVGcm9tVXJsOiAodXJsOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8Qnl0ZUNvZGVJbnN0cnVjdGlvbnM+ID0+IGNvbXBpbGVGcm9tVXJsKHVybCxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWJ1ZyksXG5cdGV4ZWN1dGVCeXRlY29kZTogKGJ5dGVjb2RlOiBCeXRlQ29kZUluc3RydWN0aW9ucywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCA9PiBleGVjdXRlQnl0ZWNvZGUoYnl0ZWNvZGUsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWJ1ZyksXG5cdHRva2VuaXplOiAoc291cmNlOiBTb3VyY2UpOiBUb2tlbltdID0+IHRva2VuaXplKHNvdXJjZSksXG5cdHRva2VuaXplVXJsOiAodXJsOiBzdHJpbmcpOiBQcm9taXNlPFRva2VuW10+ID0+IHRva2VuaXplVXJsKHVybCksXG5cdHBhcnNlVHJlZTogKHNvdXJjZTogU291cmNlKTogQVNUTm9kZSA9PiBwYXJzZVRyZWUoc291cmNlKSxcblx0cGFyc2VUcmVlVXJsOiAodXJsOiBzdHJpbmcpOiBQcm9taXNlPEFTVE5vZGU+ID0+IHBhcnNlVHJlZVVybCh1cmwpLFxufTtcblxuZnVuY3Rpb24gUHJvZ3JhbShpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBMeXJhU2NyaXB0UHJvZ3JhbSB7XG5cdHJldHVybiBuZXcgTHlyYVNjcmlwdFByb2dyYW0oaXNEZWJ1Zyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGUoc291cmNlOiBTb3VyY2UsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBQcm9ncmFtKGlzRGVidWcpXG5cdFx0XHQuZXhlY3V0ZVNvdXJjZShzb3VyY2UpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKHdyYXBKc0Vycm9yKGVycm9yLCBzb3VyY2UpXG5cdFx0XHRcdCAgICAgICAgICAgICAgLmZvcm1hdCgpKTtcblx0XHR9XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gY29tcGlsZVNvdXJjZShzb3VyY2U6IFNvdXJjZSwgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTxCeXRlQ29kZUluc3RydWN0aW9ucz4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBQcm9ncmFtKGlzRGVidWcpXG5cdFx0XHQuY29tcGlsZVNvdXJjZShzb3VyY2UpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKHdyYXBKc0Vycm9yKGVycm9yLCBzb3VyY2UpXG5cdFx0XHRcdCAgICAgICAgICAgICAgLmZvcm1hdCgpKTtcblx0XHR9XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gY29tcGlsZUZyb21VcmwodXJsOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8Qnl0ZUNvZGVJbnN0cnVjdGlvbnM+IHtcblx0cmV0dXJuIGF3YWl0IGNvbXBpbGVTb3VyY2UoYXdhaXQgZmV0Y2hTb3VyY2UodXJsKSwgaXNEZWJ1Zyk7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVCeXRlY29kZShieXRlY29kZTogQnl0ZUNvZGVJbnN0cnVjdGlvbnMsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuXHRQcm9ncmFtKGlzRGVidWcpXG5cdFx0LmV4ZWN1dGVCeXRlY29kZShieXRlY29kZSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVGcm9tVXJsKHVybDogc3RyaW5nLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0cmV0dXJuIGF3YWl0IGV4ZWN1dGUoYXdhaXQgZmV0Y2hTb3VyY2UodXJsKSwgaXNEZWJ1Zyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVGcm9tU3RyaW5nKGNvZGU6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHNvdXJjZSA9IG5ldyBTb3VyY2UoY29kZSk7XG5cblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgUHJvZ3JhbShpc0RlYnVnKVxuXHRcdFx0LmV4ZWN1dGVTb3VyY2Uoc291cmNlKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcih3cmFwSnNFcnJvcihlcnJvciwgc291cmNlKVxuXHRcdFx0XHQgICAgICAgICAgICAgIC5mb3JtYXQoKSk7XG5cdFx0fVxuXHRcdHRocm93IGVycm9yO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVUZXN0KHNvdXJjZTogU291cmNlLCBpc0RlYnVnID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgUHJvZ3JhbShpc0RlYnVnKVxuXHRcdFx0LmV4ZWN1dGVUZXN0KHNvdXJjZSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3Iod3JhcEpzRXJyb3IoZXJyb3IsIHNvdXJjZSlcblx0XHRcdFx0ICAgICAgICAgICAgICAuZm9ybWF0KCkpO1xuXHRcdH1cblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlVGVzdFVybCh1cmw6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdHJldHVybiBhd2FpdCBleGVjdXRlVGVzdChhd2FpdCBmZXRjaFNvdXJjZSh1cmwpLCBpc0RlYnVnKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZVRlc3RTdHJpbmcoY29kZTogc3RyaW5nLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgc291cmNlID0gbmV3IFNvdXJjZShjb2RlKTtcblxuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBQcm9ncmFtKGlzRGVidWcpXG5cdFx0XHQuZXhlY3V0ZVRlc3Qoc291cmNlKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcih3cmFwSnNFcnJvcihlcnJvciwgc291cmNlKVxuXHRcdFx0XHQgICAgICAgICAgICAgIC5mb3JtYXQoKSk7XG5cdFx0fVxuXHRcdHRocm93IGVycm9yO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbml6ZShzb3VyY2U6IFNvdXJjZSk6IFRva2VuW10ge1xuXHRyZXR1cm4gbmV3IFRva2VuaXplcihzb3VyY2UpLnRva2VuaXplKCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0b2tlbml6ZVVybCh1cmw6IHN0cmluZyk6IFByb21pc2U8VG9rZW5bXT4ge1xuXHRyZXR1cm4gdG9rZW5pemUoYXdhaXQgZmV0Y2hTb3VyY2UodXJsKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRyZWUoc291cmNlOiBTb3VyY2UpOiBBU1ROb2RlIHtcblx0cmV0dXJuIG5ldyBQYXJzZXIoc291cmNlKS5wYXJzZSgpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGFyc2VUcmVlVXJsKHVybDogc3RyaW5nKTogUHJvbWlzZTxBU1ROb2RlPiB7XG5cdHJldHVybiBwYXJzZVRyZWUoYXdhaXQgZmV0Y2hTb3VyY2UodXJsKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEx5cmE7XG4iCiAgXSwKICAibWFwcGluZ3MiOiAiO0FBRU8sTUFBTSxRQUFRO0FBQUEsU0FDYixTQUFpQjtBQUFBLFNBQ2pCLE9BQWU7QUFBQSxTQUNmLE1BQWM7QUFBQSxTQUNkLE9BQWU7QUFBQSxTQUNmLFFBQWdCO0FBQUEsU0FDaEIsWUFBb0I7QUFBQSxTQUNwQixVQUFrQjtBQUFBLFNBQ2xCLGFBQXFCO0FBQUEsU0FDckIsY0FBc0I7QUFBQSxTQUN0QixXQUFtQjtBQUFBLFNBQ25CLE1BQWM7QUFBQSxTQUNkLE9BQWU7QUFBQSxTQUNmLFNBQWlCO0FBQUEsU0FDakIsVUFBa0I7QUFBQSxTQUNsQixTQUFpQjtBQUFBLFNBQ2pCLFdBQW1CO0FBQUEsU0FDbkIsU0FBaUI7QUFBQSxTQUNqQixRQUFnQjtBQUFBLFNBQ2hCLE9BQWU7QUFBQSxTQUNmLFFBQWdCO0FBQUEsU0FDaEIsS0FBYTtBQUFBLFNBQ2IsT0FBZTtBQUFBLFNBQ2YsUUFBZ0I7QUFBQSxTQUNoQixVQUFrQjtBQUFBLFNBQ2xCLFVBQWtCO0FBQUEsU0FDbEIsS0FBYTtBQUFBLFNBQ2IsT0FBZTtBQUFBLFNBQ2YsT0FBZTtBQUFBLFNBRWYsc0JBQThCO0FBQUEsU0FDOUIsdUJBQStCO0FBQUEsU0FDL0IsYUFBcUI7QUFBQSxTQUNyQixjQUFzQjtBQUFBLFNBQ3RCLG1CQUEyQjtBQUFBLFNBQzNCLG9CQUE0QjtBQUFBLFNBQzVCLFlBQW9CO0FBQUEsU0FDcEIsUUFBZ0I7QUFBQSxTQUNoQixRQUFnQjtBQUFBLFNBRWhCLFFBQWdCO0FBQUEsU0FDaEIsTUFBYztBQUFBLFNBQ2QsU0FBaUI7QUFBQSxTQUNqQixPQUFlO0FBQUEsU0FDZixRQUFnQjtBQUFBLFNBQ2hCLFNBQWlCO0FBQUEsU0FDakIsV0FBbUI7QUFBQSxTQUNuQixVQUFrQjtBQUFBLFNBRWxCLGFBQXFCO0FBQUEsU0FDckIsY0FBc0I7QUFBQSxTQUN0QixtQkFBMkI7QUFBQSxTQUMzQixnQkFBd0I7QUFBQSxTQUN4QixZQUFvQjtBQUFBLFNBQ3BCLGVBQXVCO0FBQUEsU0FDdkIsYUFBcUI7QUFBQSxTQUNyQixnQkFBd0I7QUFBQSxTQUN4QixRQUFnQjtBQUFBLFNBQ2hCLFlBQW9CO0FBQUEsU0FDcEIsTUFBYztBQUFBLFNBQ2QsS0FBYTtBQUFBLFNBRWIsZ0JBQXdCO0FBQUEsU0FDeEIscUJBQTZCO0FBQUEsU0FFN0IsV0FBcUI7QUFBQSxJQUMzQixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsRUFDVDtBQUFBLFNBQ08sYUFBdUI7QUFBQSxJQUM3QixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsRUFDVDtBQUFBLFNBQ08sYUFBdUI7QUFBQSxJQUM3QixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsRUFDVDtBQUFBLFNBQ08sV0FBcUI7QUFBQSxJQUMzQixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsRUFDVDtBQUFBLFNBQ08sVUFBb0I7QUFBQSxJQUMxQixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsRUFDVDtBQUFBLFNBQ08sWUFBc0I7QUFBQSxJQUM1QixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsRUFDVDtBQUFBLFNBQ08saUJBQTJCO0FBQUEsSUFDakMsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtB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LE1BQU07QUFBQSxJQUNyQixPQUFPLE9BQU87QUFBQSxJQUNmLElBQUksaUJBQWlCLE9BQU87QUFBQSxNQUMzQixRQUFRLE1BQU0sWUFBWSxPQUFPLE1BQU0sRUFDdkIsT0FBTyxDQUFDO0FBQUEsSUFDekI7QUFBQSxJQUNBLE1BQU07QUFBQTtBQUFBO0FBSVIsZUFBZSxXQUFXLENBQUMsUUFBZ0IsVUFBVSxPQUFzQjtBQUFBLEVBQzFFLElBQUk7QUFBQSxJQUNILE9BQU8sTUFBTSxRQUFRLE9BQU8sRUFDMUIsWUFBWSxNQUFNO0FBQUEsSUFDbkIsT0FBTyxPQUFPO0FBQUEsSUFDZixJQUFJLGlCQUFpQixPQUFPO0FBQUEsTUFDM0IsUUFBUSxNQUFNLFlBQVksT0FBTyxNQUFNLEVBQ3ZCLE9BQU8sQ0FBQztBQUFBLElBQ3pCO0FBQUEsSUFDQSxNQUFNO0FBQUE7QUFBQTtBQUlSLGVBQWUsY0FBYyxDQUFDLEtBQWEsVUFBbUIsT0FBc0I7QUFBQSxFQUNuRixPQUFPLE1BQU0sWUFBWSxNQUFNLFlBQVksR0FBRyxHQUFHLE9BQU87QUFBQTtBQUd6RCxlQUFlLGlCQUFpQixDQUFDLE1BQWMsVUFBbUIsT0FBc0I7QUFBQSxFQUN2RixNQUFNLFNBQVMsSUFBSSxPQUFPLElBQUk7QUFBQSxFQUU5QixJQUFJO0FBQUEsSUFDSCxPQUFPLE1BQU0sUUFBUSxPQUFPLEVBQzFCLFlBQVksTUFBTTtBQUFBLElBQ25CLE9BQU8sT0FBTztBQUFBLElBQ2YsSUFBSSxpQkFBaUIsT0FBTztBQUFBLE1BQzNCLFFBQVEsTUFBTSxZQUFZLE9BQU8sTUFBTSxFQUN2QixPQUFPLENBQUM7QUFBQSxJQUN6QjtBQUFBLElBQ0EsTUFBTTtBQUFBO0FBQUE7QUFJRCxTQUFTLFFBQVEsQ0FBQyxRQUF5QjtBQUFBLEVBQ2pELE9BQU8sSUFBSSxVQUFVLE1BQU0sRUFBRSxTQUFTO0FBQUE7QUFHdkMsZUFBc0IsV0FBVyxDQUFDLEtBQStCO0FBQUEsRUFDaEUsT0FBTyxTQUFTLE1BQU0sWUFBWSxHQUFHLENBQUM7QUFBQTtBQUdoQyxTQUFTLFNBQVMsQ0FBQyxRQUF5QjtBQUFBLEVBQ2xELE9BQU8sSUFBSSxPQUFPLE1BQU0sRUFBRSxNQUFNO0FBQUE7QUFHakMsZUFBc0IsWUFBWSxDQUFDLEtBQStCO0FBQUEsRUFDakUsT0FBTyxVQUFVLE1BQU0sWUFBWSxHQUFHLENBQUM7QUFBQTtBQUd4QyxJQUFlOyIsCiAgImRlYnVnSWQiOiAiNEREMUM5RjI4REI2N0JBMzY0NzU2RTIxNjQ3NTZFMjEiLAogICJuYW1lcyI6IFtdCn0=
