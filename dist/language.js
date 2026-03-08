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
  static COMPILE_ERROR = "CompileError";
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

// language/src/core/virtualmachine/opcodes.ts
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
  CALL: 96,
  CLASS_DEF: 112,
  FIELD_DEF: 113,
  END_CLASS: 114,
  METHOD_DEF: 115,
  END_METHOD: 116,
  NEW: 128,
  RETURN: 144
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

// language/src/core/virtualmachine/compiler.ts
class Compiler {
  bytecode = [];
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
    return this.bytecode;
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
    this.emit(Opcodes.CALL, node.arguments.length);
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
    this.bytecode.push(op);
    if (operand !== undefined)
      this.bytecode.push(operand);
  }
}

// language/src/core/virtualmachine/virtualmachine.ts
class VirtualMachine {
  stack = [];
  globals = {};
  classes = {};
  bytecode = [];
  ip = 0;
  currentThis = null;
  execute(bytecode) {
    this.bytecode = bytecode;
    this.ip = 0;
    while (this.ip < this.bytecode.length) {
      const op = this.bytecode[this.ip++];
      switch (op) {
        case Opcodes.LOAD_CONST:
          this.stack.push(this.bytecode[this.ip++]);
          break;
        case Opcodes.LOAD_VAR: {
          const name = this.bytecode[this.ip++];
          this.stack.push(this.globals[name]);
          break;
        }
        case Opcodes.STORE_VAR: {
          const name = this.bytecode[this.ip++];
          this.globals[name] = this.stack.pop();
          break;
        }
        case Opcodes.LOAD_THIS:
          this.stack.push(this.currentThis);
          break;
        case Opcodes.ADD: {
          const b = this.stack.pop();
          const a = this.stack.pop();
          this.stack.push(a + b);
          break;
        }
        case Opcodes.SUB: {
          const b = this.stack.pop();
          const a = this.stack.pop();
          this.stack.push(a - b);
          break;
        }
        case Opcodes.MUL: {
          const b = this.stack.pop();
          const a = this.stack.pop();
          this.stack.push(a * b);
          break;
        }
        case Opcodes.DIV: {
          const b = this.stack.pop();
          const a = this.stack.pop();
          this.stack.push(a / b);
          break;
        }
        case Opcodes.MOD: {
          const b = this.stack.pop();
          const a = this.stack.pop();
          this.stack.push(a % b);
          break;
        }
        case Opcodes.EQ: {
          const b = this.stack.pop();
          const a = this.stack.pop();
          this.stack.push(a === b);
          break;
        }
        case Opcodes.NE: {
          const b = this.stack.pop();
          const a = this.stack.pop();
          this.stack.push(a !== b);
          break;
        }
        case Opcodes.LT: {
          const b = this.stack.pop();
          const a = this.stack.pop();
          this.stack.push(a < b);
          break;
        }
        case Opcodes.LE: {
          const b = this.stack.pop();
          const a = this.stack.pop();
          this.stack.push(a <= b);
          break;
        }
        case Opcodes.GT: {
          const b = this.stack.pop();
          const a = this.stack.pop();
          this.stack.push(a > b);
          break;
        }
        case Opcodes.GE: {
          const b = this.stack.pop();
          const a = this.stack.pop();
          this.stack.push(a >= b);
          break;
        }
        case Opcodes.AND: {
          const b = this.stack.pop();
          const a = this.stack.pop();
          this.stack.push(a && b);
          break;
        }
        case Opcodes.OR: {
          const b = this.stack.pop();
          const a = this.stack.pop();
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
        case Opcodes.GET_FIELD: {
          const field = this.bytecode[this.ip++];
          const obj = this.stack.pop();
          if (!obj)
            throw new Error("GET_FIELD on null");
          this.stack.push(obj[field]);
          break;
        }
        case Opcodes.SET_FIELD: {
          const field = this.bytecode[this.ip++];
          const value = this.stack.pop();
          const obj = this.stack.pop();
          if (!obj)
            throw new Error("SET_FIELD on null");
          obj[field] = value;
          this.stack.push(value);
          break;
        }
        case Opcodes.NEW: {
          const className = this.bytecode[this.ip++];
          const classDef = this.classes[className];
          if (!classDef)
            throw new Error("Unknown class " + className);
          const obj = {};
          for (const field of classDef.fields)
            obj[field] = null;
          for (const method in classDef.methods) {
            if (classDef.methods[method]) {
              obj[method] = classDef.methods[method].bind(obj);
            }
          }
          this.stack.push(obj);
          break;
        }
        case Opcodes.CLASS_DEF: {
          const name = this.bytecode[this.ip++];
          const classDef = { name, fields: [], methods: {} };
          this.classes[name] = classDef;
          while (true) {
            const inner = this.bytecode[this.ip++];
            if (inner === Opcodes.END_CLASS)
              break;
            if (inner === Opcodes.FIELD_DEF) {
              const fieldName = this.bytecode[this.ip++];
              classDef.fields.push(fieldName);
            }
            if (inner === Opcodes.METHOD_DEF) {
              const methodName = this.bytecode[this.ip++];
              const fn = (...args) => console.log("Method call not implemented:", methodName);
              classDef.methods[methodName] = fn;
              while (this.bytecode[this.ip++] !== Opcodes.END_METHOD) {}
            }
          }
          break;
        }
        case Opcodes.CALL: {
          const argCount = this.bytecode[this.ip++];
          const args = [];
          for (let i = 0;i < argCount; i++)
            args.unshift(this.stack.pop());
          const fn = this.stack.pop();
          if (typeof fn !== "function")
            throw new Error("CALL target not function");
          this.stack.push(fn(...args));
          break;
        }
        case Opcodes.RETURN:
          return this.stack.pop();
        default:
          throw new Error("Unknown opcode " + op);
      }
    }
    return null;
  }
}

// language/src/core/program.ts
class LyraScriptProgram {
  eventPipeline;
  compiler = new Compiler;
  virtualMachine = new VirtualMachine;
  environment = new Environment;
  objectRegistry = new ObjectRegistry;
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
// language/src/core/virtualmachine/disassembler.ts
function disassemble(bytecode) {
  for (let i = 0;i < bytecode.length; i++) {
    const op = bytecode[i];
    switch (op) {
      case Opcodes.LOAD_CONST:
        console.log("LOAD_CONST", bytecode[++i]);
        break;
      case Opcodes.LOAD_VAR:
        console.log("LOAD_VAR", bytecode[++i]);
        break;
      case Opcodes.STORE_VAR:
        console.log("STORE_VAR", bytecode[++i]);
        break;
      case Opcodes.LOAD_THIS:
        console.log("LOAD_THIS");
        break;
      case Opcodes.GET_FIELD:
        console.log("GET_FIELD", bytecode[++i]);
        break;
      case Opcodes.ADD:
        console.log("ADD");
        break;
      case Opcodes.RETURN:
        console.log("RETURN");
        break;
      default:
        console.log("UNKNOWN", op);
    }
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
  disassemble,
  src_default as default,
  WebLyraScript,
  WebApplicationRuntime
};

//# debugId=738EA482AA14CF1464756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibGFuZ3VhZ2Uvc3JjL2NvcmUvZ3JhbW1hci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9hc3QudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvdG9rZW5pemVyL3Rva2VuaXplci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9lcnJvcnMudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvbmF0aXZlX2NsYXNzLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX2NvbnZlcnNpb24udHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9zdHJpbmcudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9zeXN0ZW0udHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9hc3NlcnQudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9udW1iZXIudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9hcnJheS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9ldmVudC9zdGF0ZS50cyIsICJsYW5ndWFnZS9zcmMvbGlicmFyeS9jbGFzc2VzL3N0YXRlLnRzIiwgImxhbmd1YWdlL3NyYy9saWJyYXJ5L2NsYXNzZXMvZXZlbnQudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9ib29sZWFuLnRzIiwgImxhbmd1YWdlL3NyYy9saWJyYXJ5L25hdGl2ZV9jbGFzc2VzLnRzIiwgImxhbmd1YWdlL3NyYy9saWJyYXJ5L25hdGl2ZV9mdW5jdGlvbnMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvdHlwZXMvdHlwZV9vYmplY3RzLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL3R5cGVzL2F1dG9ib3hpbmcudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcnVudGltZS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9ldmVudC9ldmVudHMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0cy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9wYXJzZXIvcGFyc2VyX3N0YXRtZW50cy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9wYXJzZXIvcGFyc2VyLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5LnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL3R5cGVzL3R5cGVjaGVja2VyLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2xpbmtlci9kZXBlbmRlbmNpZXMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvbGlua2VyL2xpbmtlci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS90ZXN0cy90ZXN0c3VpdGVzLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2xvYWRlcnMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvZXZlbnQvcGlwZWxpbmUudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvdmlydHVhbG1hY2hpbmUvb3Bjb2Rlcy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS92aXJ0dWFsbWFjaGluZS9jb21waWxlci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS92aXJ0dWFsbWFjaGluZS92aXJ0dWFsbWFjaGluZS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9wcm9ncmFtLnRzIiwgImxhbmd1YWdlL3NyYy9ob3N0L2V2ZW50cy50cyIsICJsYW5ndWFnZS9zcmMvaG9zdC9kb20udHMiLCAibGFuZ3VhZ2Uvc3JjL2hvc3QvZW5naW5lLnRzIiwgImxhbmd1YWdlL3NyYy9ob3N0L3JlZ2lzdHJ5LnRzIiwgImxhbmd1YWdlL3NyYy9ob3N0L3J1bnRpbWUudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvdmlydHVhbG1hY2hpbmUvZGlzYXNzZW1ibGVyLnRzIiwgImxhbmd1YWdlL3NyYy9pbmRleC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICJpbXBvcnQgdHlwZSB7U291cmNlfSBmcm9tIFwiLi9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5leHBvcnQgY2xhc3MgR1JBTU1BUiB7XG5cdHN0YXRpYyBJTVBPUlQ6IHN0cmluZyA9ICdpbXBvcnQnO1xuXHRzdGF0aWMgRlJPTTogc3RyaW5nID0gJ2Zyb20nO1xuXHRzdGF0aWMgTEVUOiBzdHJpbmcgPSAnbGV0Jztcblx0c3RhdGljIE9QRU46IHN0cmluZyA9ICdvcGVuJztcblx0c3RhdGljIENMQVNTOiBzdHJpbmcgPSAnY2xhc3MnO1xuXHRzdGF0aWMgSU5URVJGQUNFOiBzdHJpbmcgPSAnaW50ZXJmYWNlJztcblx0c3RhdGljIEVYVEVORFM6IHN0cmluZyA9ICdleHRlbmRzJztcblx0c3RhdGljIElNUExFTUVOVFM6IHN0cmluZyA9ICdpbXBsZW1lbnRzJztcblx0c3RhdGljIENPTlNUUlVDVE9SOiBzdHJpbmcgPSAnY29uc3RydWN0b3InO1xuXHRzdGF0aWMgT1BFUkFUT1I6IHN0cmluZyA9ICdvcGVyYXRvcic7XG5cdHN0YXRpYyBORVc6IHN0cmluZyA9ICduZXcnO1xuXHRzdGF0aWMgVEhJUzogc3RyaW5nID0gJ3RoaXMnO1xuXHRzdGF0aWMgUFVCTElDOiBzdHJpbmcgPSAncHVibGljJztcblx0c3RhdGljIFBSSVZBVEU6IHN0cmluZyA9ICdwcml2YXRlJztcblx0c3RhdGljIFNUQVRJQzogc3RyaW5nID0gJ3N0YXRpYyc7XG5cdHN0YXRpYyBSRUFET05MWTogc3RyaW5nID0gJ3JlYWRvbmx5Jztcblx0c3RhdGljIFJFVFVSTjogc3RyaW5nID0gJ3JldHVybic7XG5cdHN0YXRpYyBTVVBFUjogc3RyaW5nID0gJ3N1cGVyJztcblx0c3RhdGljIFRSVUU6IHN0cmluZyA9ICd0cnVlJztcblx0c3RhdGljIEZBTFNFOiBzdHJpbmcgPSAnZmFsc2UnO1xuXHRzdGF0aWMgSUY6IHN0cmluZyA9ICdpZic7XG5cdHN0YXRpYyBFTFNFOiBzdHJpbmcgPSAnZWxzZSc7XG5cdHN0YXRpYyBNQVRDSDogc3RyaW5nID0gJ21hdGNoJztcblx0c3RhdGljIERFRkFVTFQ6IHN0cmluZyA9ICdkZWZhdWx0Jztcblx0c3RhdGljIEZPUkVBQ0g6IHN0cmluZyA9ICdmb3JlYWNoJztcblx0c3RhdGljIElOOiBzdHJpbmcgPSAnaW4nO1xuXHRzdGF0aWMgTlVMTDogc3RyaW5nID0gJ251bGwnO1xuXHRzdGF0aWMgVkRPTTogc3RyaW5nID0gJ3Zkb20nO1xuXG5cdHN0YXRpYyBCUkFDS0VUX1NRVUFSRV9PUEVOOiBzdHJpbmcgPSAnWyc7XG5cdHN0YXRpYyBCUkFDS0VUX1NRVUFSRV9DTE9TRTogc3RyaW5nID0gJ10nO1xuXHRzdGF0aWMgQlJBQ0VfT1BFTjogc3RyaW5nID0gJ3snO1xuXHRzdGF0aWMgQlJBQ0VfQ0xPU0U6IHN0cmluZyA9ICd9Jztcblx0c3RhdGljIFBBUkVOVEhFU0VTX09QRU46IHN0cmluZyA9ICcoJztcblx0c3RhdGljIFBBUkVOVEhFU0VTX0NMT1NFOiBzdHJpbmcgPSAnKSc7XG5cdHN0YXRpYyBTRU1JQ09MT046IHN0cmluZyA9ICc7Jztcblx0c3RhdGljIENPTE9OOiBzdHJpbmcgPSAnOic7XG5cdHN0YXRpYyBDT01NQTogc3RyaW5nID0gJywnO1xuXG5cdHN0YXRpYyBBUlJPVzogc3RyaW5nID0gJy0+Jztcblx0c3RhdGljIERPVDogc3RyaW5nID0gJy4nO1xuXHRzdGF0aWMgQVNTSUdOOiBzdHJpbmcgPSAnPSc7XG5cdHN0YXRpYyBQTFVTOiBzdHJpbmcgPSAnKyc7XG5cdHN0YXRpYyBNSU5VUzogc3RyaW5nID0gJy0nO1xuXHRzdGF0aWMgRElWSURFOiBzdHJpbmcgPSAnLyc7XG5cdHN0YXRpYyBNVUxUSVBMWTogc3RyaW5nID0gJyonO1xuXHRzdGF0aWMgTU9EVUxVUzogc3RyaW5nID0gJyUnO1xuXG5cdHN0YXRpYyBVTkFSWV9QTFVTOiBzdHJpbmcgPSAndSsnO1xuXHRzdGF0aWMgVU5BUllfTUlOVVM6IHN0cmluZyA9ICd1LSc7XG5cdHN0YXRpYyBFWENMQU1BVElPTl9NQVJLOiBzdHJpbmcgPSAnISc7XG5cdHN0YXRpYyBRVUVTVElPTl9NQVJLOiBzdHJpbmcgPSAnPyc7XG5cdHN0YXRpYyBMRVNTX1RIQU46IHN0cmluZyA9ICc8Jztcblx0c3RhdGljIEdSRUFURVJfVEhBTjogc3RyaW5nID0gJz4nO1xuXHRzdGF0aWMgTEVTU19FUVVBTDogc3RyaW5nID0gJzw9Jztcblx0c3RhdGljIEdSRUFURVJfRVFVQUw6IHN0cmluZyA9ICc+PSc7XG5cdHN0YXRpYyBFUVVBTDogc3RyaW5nID0gJz09Jztcblx0c3RhdGljIE5PVF9FUVVBTDogc3RyaW5nID0gJyE9Jztcblx0c3RhdGljIEFORDogc3RyaW5nID0gJyYmJztcblx0c3RhdGljIE9SOiBzdHJpbmcgPSAnfHwnO1xuXG5cdHN0YXRpYyBYTUxfQ0xPU0VfVEFHOiBzdHJpbmcgPSAnLz4nO1xuXHRzdGF0aWMgWE1MX09QRU5fQ0xPU0VfVEFHOiBzdHJpbmcgPSAnPC8nO1xuXG5cdHN0YXRpYyBLRVlXT1JEUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5JTVBPUlQsXG5cdFx0R1JBTU1BUi5GUk9NLFxuXHRcdEdSQU1NQVIuT1BFTixcblx0XHRHUkFNTUFSLkNMQVNTLFxuXHRcdEdSQU1NQVIuSU5URVJGQUNFLFxuXHRcdEdSQU1NQVIuRVhURU5EUyxcblx0XHRHUkFNTUFSLklNUExFTUVOVFMsXG5cdFx0R1JBTU1BUi5QVUJMSUMsXG5cdFx0R1JBTU1BUi5QUklWQVRFLFxuXHRcdEdSQU1NQVIuU1RBVElDLFxuXHRcdEdSQU1NQVIuUkVBRE9OTFksXG5cdFx0R1JBTU1BUi5SRVRVUk4sXG5cdFx0R1JBTU1BUi5PUEVSQVRPUixcblx0XHRHUkFNTUFSLkxFVCxcblx0XHRHUkFNTUFSLk5FVyxcblx0XHRHUkFNTUFSLlRISVMsXG5cdFx0R1JBTU1BUi5JRixcblx0XHRHUkFNTUFSLkVMU0UsXG5cdFx0R1JBTU1BUi5NQVRDSCxcblx0XHRHUkFNTUFSLkRFRkFVTFQsXG5cdFx0R1JBTU1BUi5GT1JFQUNILFxuXHRcdEdSQU1NQVIuSU4sXG5cdFx0R1JBTU1BUi5OVUxMLFxuXHRcdEdSQU1NQVIuVkRPTSxcblx0XTtcblx0c3RhdGljIEFSSVRITUVUSUM6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuUExVUyxcblx0XHRHUkFNTUFSLk1JTlVTLFxuXHRcdEdSQU1NQVIuRElWSURFLFxuXHRcdEdSQU1NQVIuTVVMVElQTFksXG5cdFx0R1JBTU1BUi5NT0RVTFVTXG5cdF07XG5cdHN0YXRpYyBDT01QQVJJU09OOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLkxFU1NfVEhBTixcblx0XHRHUkFNTUFSLkdSRUFURVJfVEhBTixcblx0XHRHUkFNTUFSLkxFU1NfRVFVQUwsXG5cdFx0R1JBTU1BUi5HUkVBVEVSX0VRVUFMXG5cdF07XG5cdHN0YXRpYyBFUVVBTElUWTogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5FUVVBTCxcblx0XHRHUkFNTUFSLk5PVF9FUVVBTFxuXHRdO1xuXHRzdGF0aWMgTE9HSUNBTDogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5BTkQsXG5cdFx0R1JBTU1BUi5PUlxuXHRdO1xuXHRzdGF0aWMgT1BFUkFUT1JTOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLkVYQ0xBTUFUSU9OX01BUkssXG5cdFx0R1JBTU1BUi5RVUVTVElPTl9NQVJLLFxuXHRcdEdSQU1NQVIuQVJST1csXG5cdFx0R1JBTU1BUi5ET1QsXG5cdFx0R1JBTU1BUi5BU1NJR04sXG5cdFx0R1JBTU1BUi5QTFVTLFxuXHRcdEdSQU1NQVIuTUlOVVMsXG5cdFx0R1JBTU1BUi5ESVZJREUsXG5cdFx0R1JBTU1BUi5NVUxUSVBMWSxcblx0XHRHUkFNTUFSLk1PRFVMVVMsXG5cdFx0R1JBTU1BUi5MRVNTX1RIQU4sXG5cdFx0R1JBTU1BUi5HUkVBVEVSX1RIQU4sXG5cdFx0R1JBTU1BUi5MRVNTX0VRVUFMLFxuXHRcdEdSQU1NQVIuR1JFQVRFUl9FUVVBTCxcblx0XHRHUkFNTUFSLkVRVUFMLFxuXHRcdEdSQU1NQVIuTk9UX0VRVUFMLFxuXHRcdEdSQU1NQVIuQU5ELFxuXHRcdEdSQU1NQVIuT1IsXG5cdF07XG5cdHN0YXRpYyBNQVRIX09QRVJBVE9SUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5QTFVTLFxuXHRcdEdSQU1NQVIuTUlOVVMsXG5cdFx0R1JBTU1BUi5ESVZJREUsXG5cdFx0R1JBTU1BUi5NVUxUSVBMWSxcblx0XHRHUkFNTUFSLk1PRFVMVVNcblx0XTtcblx0c3RhdGljIExPR0lDX09QRVJBVE9SUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5MRVNTX1RIQU4sXG5cdFx0R1JBTU1BUi5HUkVBVEVSX1RIQU4sXG5cdFx0R1JBTU1BUi5MRVNTX0VRVUFMLFxuXHRcdEdSQU1NQVIuR1JFQVRFUl9FUVVBTCxcblx0XHRHUkFNTUFSLkVRVUFMLFxuXHRcdEdSQU1NQVIuTk9UX0VRVUFMLFxuXHRcdEdSQU1NQVIuQU5ELFxuXHRcdEdSQU1NQVIuT1IsXG5cdF07XG5cdHN0YXRpYyBQVU5DVFVBVElPTlM6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfT1BFTixcblx0XHRHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX0NMT1NFLFxuXHRcdEdSQU1NQVIuQlJBQ0VfT1BFTixcblx0XHRHUkFNTUFSLkJSQUNFX0NMT1NFLFxuXHRcdEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTixcblx0XHRHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFLFxuXHRcdEdSQU1NQVIuU0VNSUNPTE9OLFxuXHRcdEdSQU1NQVIuQ09MT04sXG5cdFx0R1JBTU1BUi5DT01NQVxuXHRdO1xuXHRzdGF0aWMgRE9NX09QRVJBVE9SUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5BUlJPVyxcblx0XHRHUkFNTUFSLkRPVCxcblx0XHRHUkFNTUFSLkFTU0lHTixcblx0XHRHUkFNTUFSLkxFU1NfVEhBTixcblx0XHRHUkFNTUFSLkdSRUFURVJfVEhBTixcblx0XHRHUkFNTUFSLlhNTF9PUEVOX0NMT1NFX1RBRyxcblx0XHRHUkFNTUFSLlhNTF9DTE9TRV9UQUdcblx0XTtcblx0c3RhdGljIERPTV9QVU5DVFVBVElPTlM6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfT1BFTixcblx0XHRHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX0NMT1NFLFxuXHRcdEdSQU1NQVIuQlJBQ0VfT1BFTixcblx0XHRHUkFNTUFSLkJSQUNFX0NMT1NFLFxuXHRcdEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTixcblx0XHRHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFLFxuXHRcdEdSQU1NQVIuU0VNSUNPTE9OLFxuXHRcdEdSQU1NQVIuQ09MT04sXG5cdFx0R1JBTU1BUi5DT01NQVxuXHRdO1xufVxuXG5leHBvcnQgY2xhc3MgVFlQRV9FTlVNIHtcblx0c3RhdGljIE1JWEVEOiBzdHJpbmcgPSAnbWl4ZWQnO1xuXHRzdGF0aWMgVk9JRDogc3RyaW5nID0gJ3ZvaWQnO1xuXHRzdGF0aWMgTlVNQkVSOiBzdHJpbmcgPSAnbnVtYmVyJztcblx0c3RhdGljIFNUUklORzogc3RyaW5nID0gJ3N0cmluZyc7XG5cdHN0YXRpYyBCT09MRUFOOiBzdHJpbmcgPSAnYm9vbGVhbic7XG5cdHN0YXRpYyBBUlJBWTogc3RyaW5nID0gJ2FycmF5Jztcblx0c3RhdGljIE5VTEw6IHN0cmluZyA9ICdudWxsJztcbn1cblxuZXhwb3J0IGNsYXNzIFJ1bGVzIHtcblx0c3RhdGljIEtFWVdPUkRTOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoR1JBTU1BUi5LRVlXT1JEUyk7XG5cdHN0YXRpYyBPUEVSQVRPUlM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChHUkFNTUFSLk9QRVJBVE9SUyk7XG5cdHN0YXRpYyBQVU5DVFVBVElPTlM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChHUkFNTUFSLlBVTkNUVUFUSU9OUyk7XG5cdHN0YXRpYyBET01fT1BFUkFUT1JTOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoR1JBTU1BUi5ET01fT1BFUkFUT1JTKTtcblx0c3RhdGljIERPTV9QVU5DVFVBVElPTlM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChHUkFNTUFSLkRPTV9QVU5DVFVBVElPTlMpO1xuXHRzdGF0aWMgQ09NTUVOVF9MSU5FOiBzdHJpbmcgPSAnLy8nO1xuXG5cdGlzQWxwaGEoY2hhcjogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIC9bYS16X10vaS50ZXN0KGNoYXIpO1xuXHR9XG5cblx0aXNOdW1lcmljKGNoYXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAvWzAtOV0vLnRlc3QoY2hhcik7XG5cdH1cblxuXHRpc0FscGhhTnVtZXJpYyhjaGFyOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pc0FscGhhKGNoYXIpIHx8IHRoaXMuaXNOdW1lcmljKGNoYXIpO1xuXHR9XG5cblx0aXNXaGl0ZXNwYWNlKGNoYXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAvXFxzLy50ZXN0KGNoYXIpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUb2tlblR5cGUge1xuXHRzdGF0aWMgQ09NTUVOVDogc3RyaW5nID0gJ2NvbW1lbnQnO1xuXHRzdGF0aWMgQU5OT1RBVElPTjogc3RyaW5nID0gJ2Fubm90YXRpb24nO1xuXHRzdGF0aWMgSURFTlRJRklFUjogc3RyaW5nID0gJ2lkZW50aWZpZXInO1xuXHRzdGF0aWMgS0VZV09SRDogc3RyaW5nID0gJ2tleXdvcmQnO1xuXHRzdGF0aWMgUFVOQ1RVQVRJT046IHN0cmluZyA9ICdwdW5jdHVhdGlvbic7XG5cdHN0YXRpYyBOVU1CRVI6IHN0cmluZyA9ICdudW1iZXInO1xuXHRzdGF0aWMgU1RSSU5HOiBzdHJpbmcgPSAnc3RyaW5nJztcblx0c3RhdGljIEJPT0xFQU46IHN0cmluZyA9ICdib29sZWFuJztcblx0c3RhdGljIE9QRVJBVE9SOiBzdHJpbmcgPSAnb3BlcmF0b3InO1xuXHRzdGF0aWMgVEVYVDogc3RyaW5nID0gJ3RleHQnO1xuXHRzdGF0aWMgRU9GOiBzdHJpbmcgPSAnZW9mJztcbn1cblxuZXhwb3J0IGNsYXNzIFRva2VuIHtcblx0dHlwZTogc3RyaW5nO1xuXHR2YWx1ZTogc3RyaW5nO1xuXHRsaW5lOiBudW1iZXIgPSAxO1xuXHRjb2x1bW46IG51bWJlciA9IDE7XG5cdHN0YXJ0OiBudW1iZXI7XG5cdGVuZDogbnVtYmVyO1xuXHRzb3VyY2U6IFNvdXJjZTtcblxuXHRjb25zdHJ1Y3Rvcih0eXBlOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyLCBzb3VyY2U6IFNvdXJjZSkge1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMuc3RhcnQgPSBzdGFydDtcblx0XHR0aGlzLmVuZCA9IGVuZDtcblx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0fVxuXG5cdHdpdGhMaW5lQW5kQ29sdW1uKGxpbmU6IG51bWJlciwgY29sdW1uOiBudW1iZXIpOiBUb2tlbiB7XG5cdFx0dGhpcy5saW5lID0gbGluZTtcblx0XHR0aGlzLmNvbHVtbiA9IGNvbHVtbjtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0dSQU1NQVIsIFRZUEVfRU5VTX0gZnJvbSBcIi4vZ3JhbW1hclwiO1xuaW1wb3J0IHtNb2RpZmllcnMsIFN1cGVyQ2xhc3N9IGZyb20gXCIuL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7U291cmNlU3Bhbn0gZnJvbSBcIi4vcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuZXhwb3J0IGNsYXNzIEFTVE5vZGVUeXBlIHtcblx0c3RhdGljIFBST0dSQU06IHN0cmluZyA9ICdwcm9ncmFtJztcblx0c3RhdGljIElOREVYOiBzdHJpbmcgPSAnaW5kZXgnO1xuXHRzdGF0aWMgSURFTlRJRklFUjogc3RyaW5nID0gJ2lkZW50aWZpZXInO1xuXHRzdGF0aWMgQU5OT1RBVElPTjogc3RyaW5nID0gJ2Fubm90YXRpb24nO1xuXHRzdGF0aWMgUEFSQU1FVEVSOiBzdHJpbmcgPSAncGFyYW1ldGVyJztcblx0c3RhdGljIElNUE9SVDogc3RyaW5nID0gR1JBTU1BUi5JTVBPUlQ7XG5cdHN0YXRpYyBOVU1CRVI6IHN0cmluZyA9IFRZUEVfRU5VTS5OVU1CRVI7XG5cdHN0YXRpYyBTVFJJTkc6IHN0cmluZyA9IFRZUEVfRU5VTS5TVFJJTkc7XG5cdHN0YXRpYyBCT09MRUFOOiBzdHJpbmcgPSBUWVBFX0VOVU0uQk9PTEVBTjtcblx0c3RhdGljIE5VTEw6IHN0cmluZyA9IFRZUEVfRU5VTS5OVUxMO1xuXHRzdGF0aWMgTkVXOiBzdHJpbmcgPSBHUkFNTUFSLk5FVztcblx0c3RhdGljIENMQVNTOiBzdHJpbmcgPSBHUkFNTUFSLkNMQVNTO1xuXHRzdGF0aWMgSU5URVJGQUNFOiBzdHJpbmcgPSBHUkFNTUFSLklOVEVSRkFDRTtcblx0c3RhdGljIENPTlNUUlVDVE9SOiBzdHJpbmcgPSBHUkFNTUFSLkNPTlNUUlVDVE9SO1xuXHRzdGF0aWMgVEhJUzogc3RyaW5nID0gR1JBTU1BUi5USElTO1xuXHRzdGF0aWMgUkVUVVJOOiBzdHJpbmcgPSBHUkFNTUFSLlJFVFVSTjtcblx0c3RhdGljIE9QRVJBVE9SOiBzdHJpbmcgPSAnb3BlcmF0b3JfZGVjbGFyYXRpb24nO1xuXHRzdGF0aWMgVkRPTTogc3RyaW5nID0gJ3Zkb21fZGVjbGFyYXRpb24nO1xuXHRzdGF0aWMgVkRPTV9URVhUOiBzdHJpbmcgPSAndmRvbV90ZXh0X2RlY2xhcmF0aW9uJztcblx0c3RhdGljIFZET01fRVhQUkVTU0lPTjogc3RyaW5nID0gJ3Zkb21fZXhwcmVzc2lvbic7XG5cdHN0YXRpYyBVTkFSWTogc3RyaW5nID0gJ3VuYXJ5X2V4cHJlc3Npb24nO1xuXHRzdGF0aWMgTEFNQkRBOiBzdHJpbmcgPSAnbGFtYmRhX2V4cHJlc3Npb24nO1xuXHRzdGF0aWMgQVJSQVk6IHN0cmluZyA9ICdhcnJheV9kZWNsYXJhdGlvbic7XG5cdHN0YXRpYyBUWVBFOiBzdHJpbmcgPSAndHlwZV9kZWNsYXJhdGlvbic7XG5cdHN0YXRpYyBGSUVMRDogc3RyaW5nID0gJ2ZpZWxkX2RlY2xhcmF0aW9uJztcblx0c3RhdGljIE1FTUJFUjogc3RyaW5nID0gJ21lbWJlcl9leHByZXNzaW9uJztcblx0c3RhdGljIE1FVEhPRDogc3RyaW5nID0gJ21ldGhvZF9kZWNsYXJhdGlvbic7XG5cdHN0YXRpYyBDQUxMOiBzdHJpbmcgPSAnY2FsbF9leHByZXNzaW9uJztcblx0c3RhdGljIFZBUklBQkxFOiBzdHJpbmcgPSAndmFyaWFibGVfZGVjbGFyYXRpb24nO1xuXHRzdGF0aWMgRVhQUkVTU0lPTjogc3RyaW5nID0gJ2V4cHJlc3Npb25fc3RhdGVtZW50Jztcblx0c3RhdGljIEJJTkFSWTogc3RyaW5nID0gJ2JpbmFyeV9leHByZXNzaW9uJztcblx0c3RhdGljIEFTU0lHTk1FTlQ6IHN0cmluZyA9ICdhc3NpZ25tZW50X2V4cHJlc3Npb24nO1xuXHRzdGF0aWMgSUY6IHN0cmluZyA9ICdpZl9zdGF0ZW1lbnQnO1xuXHRzdGF0aWMgVEhFTjogc3RyaW5nID0gJ3RoZW5fc3RhdGVtZW50Jztcblx0c3RhdGljIEVMU0U6IHN0cmluZyA9ICdlbHNlX3N0YXRlbWVudCc7XG5cdHN0YXRpYyBNQVRDSDogc3RyaW5nID0gJ21hdGNoX3N0YXRlbWVudCc7XG5cdHN0YXRpYyBNQVRDSF9DQVNFOiBzdHJpbmcgPSAnbWF0Y2hfY2FzZV9zdGF0ZW1lbnQnO1xuXHRzdGF0aWMgRk9SRUFDSDogc3RyaW5nID0gJ2ZvcmVhY2hfc3RhdGVtZW50Jztcbn1cblxuZXhwb3J0IGNsYXNzIEFTVE5vZGUge1xuXHRpc0V4cHJlc3Npb246IGJvb2xlYW4gPSBmYWxzZTtcblx0bmFtZTogc3RyaW5nID0gJyc7XG5cblx0c3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsO1xuXHR0eXBlOiBzdHJpbmc7XG5cdHZhbHVlOiBhbnkgfCBudWxsID0gbnVsbDtcblx0Y2hpbGRyZW46IEFTVE5vZGVbXTtcblxuXHRjb25zdHJ1Y3Rvcih0eXBlOiBzdHJpbmcsIGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXSkge1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RDYWxsTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRjYWxsZWU6IEFTVE5vZGU7XG5cdGFyZ3VtZW50czogQVNUTm9kZVtdO1xuXG5cdGNvbnN0cnVjdG9yKGNhbGxlZTogQVNUTm9kZSwgYXJnczogQVNUTm9kZVtdID0gW10pIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5DQUxMKTtcblxuXHRcdHRoaXMuY2FsbGVlID0gY2FsbGVlO1xuXHRcdHRoaXMuYXJndW1lbnRzID0gYXJncztcblx0XHR0aGlzLmlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVE5ld05vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0YXJndW1lbnRzOiBBU1ROb2RlW107XG5cdHR5cGVBbm5vdGF0aW9uOiBBU1RUeXBlTm9kZTtcblxuXHRjb25zdHJ1Y3RvcihhcmdzOiBBU1ROb2RlW10sIHR5cGVBbm5vdGF0aW9uOiBBU1RUeXBlTm9kZSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLk5FVyk7XG5cblx0XHR0aGlzLmFyZ3VtZW50cyA9IGFyZ3M7XG5cdFx0dGhpcy50eXBlQW5ub3RhdGlvbiA9IHR5cGVBbm5vdGF0aW9uO1xuXHRcdHRoaXMubmFtZSA9IHR5cGVBbm5vdGF0aW9uLm5hbWU7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RCaW5hcnlOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGxlZnQ6IEFTVE5vZGU7XG5cdHJpZ2h0OiBBU1ROb2RlO1xuXHRvcGVyYXRvcjogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGxlZnQ6IEFTVE5vZGUsIHJpZ2h0OiBBU1ROb2RlLCBvcGVyYXRvcjogc3RyaW5nKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuQklOQVJZKTtcblxuXHRcdHRoaXMubGVmdCA9IGxlZnQ7XG5cdFx0dGhpcy5yaWdodCA9IHJpZ2h0O1xuXHRcdHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcblx0XHR0aGlzLmlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEFzc2lnbm1lbnROb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGxlZnQ6IEFTVE5vZGU7XG5cdHJpZ2h0OiBBU1ROb2RlO1xuXG5cdGNvbnN0cnVjdG9yKGxlZnQ6IEFTVE5vZGUsIHJpZ2h0OiBBU1ROb2RlKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuQVNTSUdOTUVOVCk7XG5cblx0XHR0aGlzLmxlZnQgPSBsZWZ0O1xuXHRcdHRoaXMucmlnaHQgPSByaWdodDtcblx0XHR0aGlzLmlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVE1lbWJlck5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0b2JqZWN0OiBBU1ROb2RlO1xuXHRwcm9wZXJ0eTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKG9iamVjdDogQVNUTm9kZSwgcHJvcGVydHk6IHN0cmluZykge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLk1FTUJFUik7XG5cblx0XHR0aGlzLm9iamVjdCA9IG9iamVjdDtcblx0XHR0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RVbmFyeU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0b3BlcmF0b3I6IHN0cmluZztcblx0YXJndW1lbnQ6IEFTVE5vZGUgfCBBU1RVbmFyeU5vZGU7XG5cblx0Y29uc3RydWN0b3Iob3BlcmF0b3I6IHN0cmluZywgYXJndW1lbnQ6IEFTVE5vZGUgfCBBU1RVbmFyeU5vZGUpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5VTkFSWSk7XG5cblx0XHR0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG5cdFx0dGhpcy5hcmd1bWVudCA9IGFyZ3VtZW50O1xuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUSW5kZXhOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdG9iamVjdDogQVNUTm9kZTtcblx0aW5kZXg6IEFTVE5vZGU7XG5cblx0Y29uc3RydWN0b3Iob2JqZWN0OiBBU1ROb2RlLCBpbmRleDogQVNUTm9kZSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLklOREVYKTtcblxuXHRcdHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuXHRcdHRoaXMuaW5kZXggPSBpbmRleDtcblx0XHR0aGlzLmlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEFycmF5Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRlbGVtZW50czogQVNUTm9kZVtdID0gW107XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuQVJSQVkpO1xuXG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RMYW1iZGFOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXTtcblx0cmV0dXJuVHlwZTogQVNUVHlwZU5vZGU7XG5cblx0Y29uc3RydWN0b3IocGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdLCByZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSwgY2hpbGRyZW46IEFTVE5vZGVbXSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkxBTUJEQSwgY2hpbGRyZW4pO1xuXG5cdFx0dGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcblx0XHR0aGlzLnJldHVyblR5cGUgPSByZXR1cm5UeXBlO1xuXG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RGaWVsZE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0bW9kaWZpZXJzOiBNb2RpZmllcnM7XG5cdGZpZWxkVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsO1xuXHRpbml0OiBBU1ROb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBtb2RpZmllcnM6IE1vZGlmaWVycywgZmllbGRUeXBlOiBBU1RUeXBlTm9kZSB8IG51bGwsIGluaXQ6IEFTVE5vZGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkZJRUxEKTtcblxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG5cdFx0dGhpcy5maWVsZFR5cGUgPSBmaWVsZFR5cGU7XG5cdFx0dGhpcy5pbml0ID0gaW5pdDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUVmFyaWFibGVOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdHR5cGVBbm5vdGF0aW9uOiBBU1RUeXBlTm9kZSB8IG51bGwgPSBudWxsO1xuXHRpbml0OiBBU1ROb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGUgfCBudWxsID0gbnVsbCwgaW5pdDogQVNUTm9kZSB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuVkFSSUFCTEUpO1xuXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnR5cGVBbm5vdGF0aW9uID0gdHlwZUFubm90YXRpb247XG5cdFx0dGhpcy5pbml0ID0gaW5pdDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNURXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0ZXhwcjogQVNUTm9kZTtcblxuXHRjb25zdHJ1Y3RvcihleHByOiBBU1ROb2RlKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuRVhQUkVTU0lPTik7XG5cblx0XHR0aGlzLmV4cHIgPSBleHByO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RSZXR1cm5Ob2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGFyZ3VtZW50OiBBU1ROb2RlIHwgQVNURXhwcmVzc2lvbk5vZGUgfCBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKGFyZ3VtZW50OiBBU1ROb2RlIHwgQVNURXhwcmVzc2lvbk5vZGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLlJFVFVSTik7XG5cblx0XHR0aGlzLmFyZ3VtZW50ID0gYXJndW1lbnQ7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVENsYXNzTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRhbm5vdGF0aW9uczogQVNUQW5ub3RhdGlvbk5vZGVbXTtcblx0bW9kaWZpZXJzOiBNb2RpZmllcnM7XG5cdHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXTtcblx0c3VwZXJDbGFzczogU3VwZXJDbGFzcyB8IG51bGw7XG5cdGltcGxlbWVudHNJbnRlcmZhY2VzOiBBU1RUeXBlTm9kZVtdO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdG5hbWU6IHN0cmluZyxcblx0XHRhbm5vdGF0aW9uczogQVNUQW5ub3RhdGlvbk5vZGVbXSxcblx0XHRtb2RpZmllcnM6IE1vZGlmaWVycyxcblx0XHR0eXBlUGFyYW1ldGVyczogc3RyaW5nW10sXG5cdFx0aW1wbGVtZW50c0ludGVyZmFjZXM6IEFTVFR5cGVOb2RlW10sXG5cdFx0c3VwZXJDbGFzczogU3VwZXJDbGFzcyB8IG51bGwgPSBudWxsLFxuXHRcdGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXVxuXHQpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5DTEFTUywgY2hpbGRyZW4pO1xuXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmFubm90YXRpb25zID0gYW5ub3RhdGlvbnM7XG5cdFx0dGhpcy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG5cdFx0dGhpcy50eXBlUGFyYW1ldGVycyA9IHR5cGVQYXJhbWV0ZXJzO1xuXHRcdHRoaXMuc3VwZXJDbGFzcyA9IHN1cGVyQ2xhc3M7XG5cdFx0dGhpcy5pbXBsZW1lbnRzSW50ZXJmYWNlcyA9IGltcGxlbWVudHNJbnRlcmZhY2VzO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RJbnRlcmZhY2VOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGFubm90YXRpb25zOiBBU1RBbm5vdGF0aW9uTm9kZVtdO1xuXHRtb2RpZmllcnM6IE1vZGlmaWVycztcblx0dHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdO1xuXHRleHRlbmRzSW50ZXJmYWNlczogc3RyaW5nW107XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0bmFtZTogc3RyaW5nLFxuXHRcdGFubm90YXRpb25zOiBBU1RBbm5vdGF0aW9uTm9kZVtdLFxuXHRcdG1vZGlmaWVyczogTW9kaWZpZXJzLFxuXHRcdHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXSxcblx0XHRleHRlbmRzSW50ZXJmYWNlczogc3RyaW5nW10sXG5cdFx0Y2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdXG5cdCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLklOVEVSRkFDRSwgY2hpbGRyZW4pO1xuXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmFubm90YXRpb25zID0gYW5ub3RhdGlvbnM7XG5cdFx0dGhpcy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG5cdFx0dGhpcy50eXBlUGFyYW1ldGVycyA9IHR5cGVQYXJhbWV0ZXJzO1xuXHRcdHRoaXMuZXh0ZW5kc0ludGVyZmFjZXMgPSBleHRlbmRzSW50ZXJmYWNlcztcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUQW5ub3RhdGlvbk5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0cHJvcGVydGllczogTWFwPHN0cmluZywgQVNUTm9kZT4gPSBuZXcgTWFwKCk7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuQU5OT1RBVElPTik7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUUGFyYW1ldGVyTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHR0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGUgfCBudWxsO1xuXHRkZWZhdWx0VmFsdWU6IEFTVE5vZGUgfCBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZUFubm90YXRpb246IEFTVFR5cGVOb2RlIHwgbnVsbCwgZGVmYXVsdFZhbHVlOiBBU1ROb2RlIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5QQVJBTUVURVIpO1xuXHRcdHRoaXMudHlwZUFubm90YXRpb24gPSB0eXBlQW5ub3RhdGlvbjtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuZGVmYXVsdFZhbHVlID0gZGVmYXVsdFZhbHVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RNZXRob2ROb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGFubm90YXRpb25zOiBBU1RBbm5vdGF0aW9uTm9kZVtdO1xuXHRtb2RpZmllcnM6IE1vZGlmaWVycztcblx0dHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdO1xuXHRwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW107XG5cdHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbDtcblxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdG5hbWU6IHN0cmluZyxcblx0XHR0eXBlOiBzdHJpbmcsXG5cdFx0YW5ub3RhdGlvbnM6IEFTVEFubm90YXRpb25Ob2RlW10sXG5cdFx0bW9kaWZpZXJzOiBNb2RpZmllcnMsXG5cdFx0dHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdLFxuXHRcdHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSxcblx0XHRyZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGwgPSBudWxsLFxuXHRcdGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXSxcblx0KSB7XG5cdFx0c3VwZXIodHlwZSwgY2hpbGRyZW4pO1xuXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmFubm90YXRpb25zID0gYW5ub3RhdGlvbnM7XG5cdFx0dGhpcy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG5cdFx0dGhpcy50eXBlUGFyYW1ldGVycyA9IHR5cGVQYXJhbWV0ZXJzO1xuXHRcdHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG5cdFx0dGhpcy5yZXR1cm5UeXBlID0gcmV0dXJuVHlwZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUT3BlcmF0b3JOb2RlIGV4dGVuZHMgQVNUTWV0aG9kTm9kZSB7XG5cblx0c3RhdGljIE9WRVJMT0FEQUJMRV9PUEVSQVRPUlM6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuUExVUyxcblx0XHRHUkFNTUFSLk1JTlVTLFxuXHRcdEdSQU1NQVIuTVVMVElQTFksXG5cdFx0R1JBTU1BUi5ESVZJREUsXG5cdFx0R1JBTU1BUi5NT0RVTFVTLFxuXHRcdEdSQU1NQVIuRVFVQUwsXG5cdFx0R1JBTU1BUi5OT1RfRVFVQUwsXG5cdFx0R1JBTU1BUi5MRVNTX1RIQU4sXG5cdFx0R1JBTU1BUi5MRVNTX0VRVUFMLFxuXHRcdEdSQU1NQVIuR1JFQVRFUl9USEFOLFxuXHRcdEdSQU1NQVIuR1JFQVRFUl9FUVVBTCxcblx0XHRHUkFNTUFSLkVYQ0xBTUFUSU9OX01BUkssXG5cdFx0R1JBTU1BUi5VTkFSWV9QTFVTLFxuXHRcdEdSQU1NQVIuVU5BUllfTUlOVVMsXG5cdFx0Ly9cIltdXCJcblx0XTtcblxuXHRzdGF0aWMgT1ZFUkxPQURBQkxFX09QRVJBVE9SX01FVEhPRF9NQVA6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwKFxuXHRcdFtcblx0XHRcdFtHUkFNTUFSLlBMVVMsICdfX2FkZCddLFxuXHRcdFx0W0dSQU1NQVIuTUlOVVMsICdfX3N1YnRyYWN0J10sXG5cdFx0XHRbR1JBTU1BUi5NVUxUSVBMWSwgJ19fbXVsdGlwbHknXSxcblx0XHRcdFtHUkFNTUFSLkRJVklERSwgJ19fZGl2aWRlJ10sXG5cdFx0XHRbR1JBTU1BUi5NT0RVTFVTLCAnX19tb2R1bHVzJ10sXG5cdFx0XHRbR1JBTU1BUi5FUVVBTCwgJ19fZXF1YWwnXSxcblx0XHRcdFtHUkFNTUFSLk5PVF9FUVVBTCwgJ19fbm90X2VxdWFsJ10sXG5cdFx0XHRbR1JBTU1BUi5MRVNTX1RIQU4sICdfX2xlc3NfdGhhbiddLFxuXHRcdFx0W0dSQU1NQVIuTEVTU19FUVVBTCwgJ19fbGVzc19lcXVhbCddLFxuXHRcdFx0W0dSQU1NQVIuR1JFQVRFUl9USEFOLCAnX19ncmVhdGVyX3RoYW4nXSxcblx0XHRcdFtHUkFNTUFSLkdSRUFURVJfRVFVQUwsICdfX2dyZWF0ZXJfZXF1YWwnXSxcblx0XHRcdFtHUkFNTUFSLkVYQ0xBTUFUSU9OX01BUkssICdfX25vdCddLFxuXHRcdFx0W0dSQU1NQVIuVU5BUllfUExVUywgJ19fdW5hcnlfcGx1cyddLFxuXHRcdFx0W0dSQU1NQVIuVU5BUllfTUlOVVMsICdfX3VuYXJ5X21pbnVzJ10sXG5cdFx0XVxuXHQpO1xuXG5cdG9wZXJhdG9yOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0b3BlcmF0b3I6IHN0cmluZyxcblx0XHRhbm5vdGF0aW9uczogQVNUQW5ub3RhdGlvbk5vZGVbXSxcblx0XHRtb2RpZmllcnM6IE1vZGlmaWVycyxcblx0XHR0eXBlUGFyYW1ldGVyczogc3RyaW5nW10sXG5cdFx0cGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdLFxuXHRcdHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbCA9IG51bGwsXG5cdFx0Y2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdLFxuXHQpIHtcblx0XHRzdXBlcihcblx0XHRcdG9wZXJhdG9yLCAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5hbWUgPSBzeW1ib2xcblx0XHRcdEFTVE5vZGVUeXBlLk9QRVJBVE9SLFxuXHRcdFx0YW5ub3RhdGlvbnMsXG5cdFx0XHRtb2RpZmllcnMsXG5cdFx0XHR0eXBlUGFyYW1ldGVycyxcblx0XHRcdHBhcmFtZXRlcnMsXG5cdFx0XHRyZXR1cm5UeXBlLFxuXHRcdFx0Y2hpbGRyZW5cblx0XHQpO1xuXG5cdFx0dGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RJbXBvcnROb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdG5hbWVzOiBzdHJpbmdbXTtcblx0ZnJvbTogc3RyaW5nIHwgbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lczogc3RyaW5nW10sIGZyb206IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuSU1QT1JUKTtcblxuXHRcdHRoaXMubmFtZXMgPSBuYW1lcztcblx0XHR0aGlzLmZyb20gPSBmcm9tO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RUaGVuTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRjb25zdHJ1Y3RvcihjaGlsZHJlbjogQVNUTm9kZVtdID0gW10pIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5USEVOLCBjaGlsZHJlbik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVElmTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRjb25kaXRpb246IEFTVE5vZGU7XG5cdHRoZW46IEFTVFRoZW5Ob2RlO1xuXHRlbHNlOiBBU1RJZk5vZGUgfCBBU1RFbHNlTm9kZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKGNvbmRpdGlvbjogQVNUTm9kZSwgdGhlbjogQVNUVGhlbk5vZGUpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5JRik7XG5cblx0XHR0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcblx0XHR0aGlzLnRoZW4gPSB0aGVuO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RFbHNlTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRjb25zdHJ1Y3RvcihjaGlsZHJlbjogQVNUTm9kZVtdID0gW10pIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5FTFNFLCBjaGlsZHJlbik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVE1hdGNoTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRleHByZXNzaW9uOiBBU1ROb2RlO1xuXHRjYXNlczogQVNUTWF0Y2hDYXNlTm9kZVtdO1xuXHRkZWZhdWx0Q2FzZTogQVNUTWF0Y2hDYXNlTm9kZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKGV4cHJlc3Npb246IEFTVE5vZGUsIGNhc2VzOiBBU1RNYXRjaENhc2VOb2RlW10sIGRlZmF1bHRDYXNlOiBBU1RNYXRjaENhc2VOb2RlIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5NQVRDSCk7XG5cblx0XHR0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuXHRcdHRoaXMuY2FzZXMgPSBjYXNlcztcblx0XHR0aGlzLmRlZmF1bHRDYXNlID0gZGVmYXVsdENhc2U7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVE1hdGNoQ2FzZU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0dGVzdDogQVNUTm9kZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLk1BVENIX0NBU0UsIGNoaWxkcmVuKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNURm9yZWFjaE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0aXRlcmF0b3I6IHN0cmluZztcblx0aXRlcmFibGU6IEFTVE5vZGU7XG5cdGJvZHk6IEFTVE5vZGVbXTtcblxuXHRjb25zdHJ1Y3RvcihpdGVyYXRvcjogc3RyaW5nLCBpdGVyYWJsZTogQVNUTm9kZSwgYm9keTogQVNUTm9kZVtdID0gW10pIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5GT1JFQUNIKTtcblxuXHRcdHRoaXMuaXRlcmF0b3IgPSBpdGVyYXRvcjtcblx0XHR0aGlzLml0ZXJhYmxlID0gaXRlcmFibGU7XG5cdFx0dGhpcy5ib2R5ID0gYm9keTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUVHlwZU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0c3RhdGljIEtJTkRfU0lNUExFID0gJ3NpbXBsZSc7XG5cdHN0YXRpYyBLSU5EX0dFTkVSSUMgPSAnZ2VuZXJpYyc7XG5cdHN0YXRpYyBLSU5EX0xBTUJEQSA9ICdsYW1iZGEnO1xuXG5cdGtpbmQ6IHN0cmluZztcblx0dHlwZUFyZ3VtZW50czogQVNUVHlwZU5vZGVbXSA9IFtdO1xuXHRwYXJhbWV0ZXJUeXBlczogQVNUVHlwZU5vZGVbXSA9IFtdO1xuXHRyZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGwgPSBudWxsO1xuXHRudWxsYWJsZTogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihraW5kOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgbnVsbGFibGU6IGJvb2xlYW4gPSBmYWxzZSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLlRZUEUpO1xuXG5cdFx0dGhpcy5raW5kID0ga2luZDtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMubnVsbGFibGUgPSBudWxsYWJsZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUVkRvbU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0cmVhZG9ubHkgdGFnOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHByb3BzOiBNYXA8c3RyaW5nLCBBU1ROb2RlPiA9IG5ldyBNYXAoKTtcblxuXHRjb25zdHJ1Y3Rvcih0YWc6IHN0cmluZywgcHJvcHM6IE1hcDxzdHJpbmcsIEFTVE5vZGU+LCBjaGlsZHJlbjogQVNUTm9kZVtdID0gW10pIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5WRE9NLCBjaGlsZHJlbik7XG5cdFx0dGhpcy50YWcgPSB0YWc7XG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RWRG9tVGV4dE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0Y29uc3RydWN0b3IodmFsdWU6IHN0cmluZykge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLlZET01fVEVYVCk7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RWRG9tRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0ZXhwcjogQVNUTm9kZTtcblxuXHRjb25zdHJ1Y3RvcihleHByOiBBU1ROb2RlKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuVkRPTV9FWFBSRVNTSU9OKTtcblx0XHR0aGlzLmV4cHIgPSBleHByO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7R1JBTU1BUiwgUnVsZXMsIFRva2VuLCBUb2tlblR5cGV9IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5pbXBvcnQge3Rocm93VG9rZW5FcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuaW1wb3J0IHR5cGUge1NvdXJjZX0gZnJvbSBcIi4uL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmV4cG9ydCBjbGFzcyBUb2tlbml6ZXIge1xuXHRwcml2YXRlIHJlYWRvbmx5IHJ1bGVzID0gbmV3IFJ1bGVzKCk7XG5cdHByaXZhdGUgcmVhZG9ubHkgc291cmNlOiBTb3VyY2U7XG5cblx0Y29uc3RydWN0b3Ioc291cmNlOiBTb3VyY2UpIHtcblx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0fVxuXG5cdGdldFRva2VuU3RyZWFtKCk6IFRva2VuU3RyZWFtIHtcblx0XHRyZXR1cm4gbmV3IFRva2VuU3RyZWFtKHRoaXMudG9rZW5pemUoKSk7XG5cdH1cblxuXHR0b2tlbml6ZSgpOiBUb2tlbltdIHtcblx0XHRjb25zdCB0b2tlbnM6IFRva2VuW10gPSBbXTtcblxuXHRcdGxldCBpOiBudW1iZXIgPSAwO1xuXHRcdGxldCBsaW5lOiBudW1iZXIgPSAxO1xuXHRcdGxldCBjb2x1bW46IG51bWJlciA9IDA7XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nTGluZUNvbW1lbnQ6ICgpID0+IGJvb2xlYW4gPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBsaW5lQ29tbWVudDogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaExpbmVDb21tZW50QXQoaSk7XG5cdFx0XHRpZiAobGluZUNvbW1lbnQpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2gobGluZUNvbW1lbnQud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBsaW5lQ29tbWVudC5lbmQgKyAxO1xuXG5cdFx0XHRcdGxpbmUrKztcblx0XHRcdFx0Y29sdW1uID0gMDtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ1N0cmluZzogKCkgPT4gYm9vbGVhbiA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IHN0cmluZzogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaFN0cmluZ0F0KGkpO1xuXHRcdFx0aWYgKHN0cmluZykge1xuXHRcdFx0XHR0b2tlbnMucHVzaChzdHJpbmcud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBzdHJpbmcuZW5kICsgMTtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChzdHJpbmcpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nUHVuY3R1YXRpb246ICgpID0+IGJvb2xlYW4gPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBwdW5jdHVhdGlvbjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaFB1bmN0dWF0aW9uQXQoaSk7XG5cdFx0XHRpZiAocHVuY3R1YXRpb24pIHtcblx0XHRcdFx0dG9rZW5zLnB1c2gocHVuY3R1YXRpb24ud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBwdW5jdHVhdGlvbi5lbmQgKyAxO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KHB1bmN0dWF0aW9uKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ0lkZW50aWZpZXI6ICgpID0+IGJvb2xlYW4gPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBpZGVudGlmaWVyOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoSWRlbnRpZmllckF0KGkpO1xuXHRcdFx0aWYgKGlkZW50aWZpZXIpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2goaWRlbnRpZmllci53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IGlkZW50aWZpZXIuZW5kO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KGlkZW50aWZpZXIpO1xuXG5cdFx0XHRcdGlmIChpZGVudGlmaWVyLnZhbHVlID09PSBHUkFNTUFSLlZET00pIHtcblx0XHRcdFx0XHRjb25zdCB0b2tlbml6ZWRWRG9tID0gdGhpcy50b2tlbml6ZVZEb20oaSwgbGluZSwgY29sdW1uKTtcblx0XHRcdFx0XHR0b2tlbnMucHVzaCguLi50b2tlbml6ZWRWRG9tLnRva2Vucyk7XG5cdFx0XHRcdFx0aSA9IHRva2VuaXplZFZEb20ubmV3SW5kZXg7XG5cdFx0XHRcdFx0bGluZSA9IHRva2VuaXplZFZEb20ubGluZTtcblx0XHRcdFx0XHRjb2x1bW4gPSB0b2tlbml6ZWRWRG9tLmNvbHVtbjtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nTnVtYmVyOiAoKSA9PiBib29sZWFuID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgbnVtYmVyOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoTnVtYmVyQXQoaSk7XG5cdFx0XHRpZiAobnVtYmVyKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKG51bWJlci53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IG51bWJlci5lbmQ7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQobnVtYmVyKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ09wZXJhdG9yOiAoKSA9PiBib29sZWFuID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3Qgb3BlcmF0b3I6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hPcGVyYXRvckF0KGkpO1xuXHRcdFx0aWYgKG9wZXJhdG9yKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKG9wZXJhdG9yLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gb3BlcmF0b3IuZW5kICsgMTtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChvcGVyYXRvcik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdBbm5vdGF0aW9uOiAoKSA9PiBib29sZWFuID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgYW5ub3RhdGlvbjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaEFubm90YXRpb25BdChpKTtcblx0XHRcdGlmIChhbm5vdGF0aW9uKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKGFubm90YXRpb24ud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBhbm5vdGF0aW9uLmVuZCArIDE7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQoYW5ub3RhdGlvbik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0d2hpbGUgKGkgPCB0aGlzLnNvdXJjZS5sZW5ndGgpIHtcblx0XHRcdGlmICh0aGlzLnNvdXJjZS5jaGFyQXQoaSkgPT09ICdcXG4nKSB7XG5cdFx0XHRcdGxpbmUrKztcblx0XHRcdFx0Y29sdW1uID0gMDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbHVtbisrO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5tYXRjaFdoaXRlc3BhY2VBdChpKSkge1xuXHRcdFx0XHRpKys7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaWZJc0NvbnN1bWluZ0xpbmVDb21tZW50KClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ1B1bmN0dWF0aW9uKClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ1N0cmluZygpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdOdW1iZXIoKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nSWRlbnRpZmllcigpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdPcGVyYXRvcigpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdBbm5vdGF0aW9uKCkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHRocm93VG9rZW5FcnJvcignVW5leHBlY3RlZCBjaGFyYWN0ZXI6ICcgKyB0aGlzLnNvdXJjZS5jaGFyQXQoaSkpO1xuXHRcdH1cblxuXHRcdHRva2Vucy5wdXNoKFxuXHRcdFx0dGhpcy5lb2YoaSlcblx0XHRcdCAgICAud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKVxuXHRcdCk7XG5cblx0XHRyZXR1cm4gdG9rZW5zO1xuXHR9XG5cblx0ZW9mKGVuZDogbnVtYmVyKTogVG9rZW4ge1xuXHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLkVPRiwgJycsIGVuZCwgZW5kLCB0aGlzLnNvdXJjZSlcblx0fVxuXG5cdGNvbHVtT2Zmc2V0KHRva2VuOiBUb2tlbik6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRva2VuLnZhbHVlLmxlbmd0aCAtIDE7XG5cdH1cblxuXHRtYXRjaFdoaXRlc3BhY2VBdChpOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5ydWxlcy5pc1doaXRlc3BhY2UodGhpcy5zb3VyY2UuY2hhckF0KGkpKTtcblx0fVxuXG5cdG1hdGNoTnVtYmVyQXQoaTogbnVtYmVyKTogVG9rZW4gfCBudWxsIHtcblx0XHRpZiAoIXRoaXMucnVsZXMuaXNOdW1lcmljKHRoaXMuc291cmNlLmNoYXJBdChpKSkpIHtcblx0XHRcdHJldHVybiBudWxsXG5cdFx0fVxuXHRcdGxldCBzdGFydCA9IGk7XG5cdFx0d2hpbGUgKHRoaXMucnVsZXMuaXNOdW1lcmljKHRoaXMuc291cmNlLmNoYXJBdChpKSkpIGkrKztcblx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5OVU1CRVIsIHRoaXMuc291cmNlLnNsaWNlKHN0YXJ0LCBpKSwgc3RhcnQsIGksIHRoaXMuc291cmNlKTtcblx0fVxuXG5cdG1hdGNoU3RyaW5nQXQoaTogbnVtYmVyKTogVG9rZW4gfCBudWxsIHtcblx0XHRpZiAodGhpcy5zb3VyY2UuY2hhckF0KGkpICE9PSAnXCInKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0bGV0IHN0YXJ0ID0gKytpO1xuXHRcdHdoaWxlICh0aGlzLnNvdXJjZS5jaGFyQXQoaSkgIT09ICdcIicpIGkrKztcblx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5TVFJJTkcsIHRoaXMuc291cmNlLnNsaWNlKHN0YXJ0LCBpKSwgc3RhcnQsIGksIHRoaXMuc291cmNlKTtcblx0fVxuXG5cdG1hdGNoSWRlbnRpZmllckF0KGk6IG51bWJlcik6IFRva2VuIHwgbnVsbCB7XG5cdFx0aWYgKCF0aGlzLnJ1bGVzLmlzQWxwaGEodGhpcy5zb3VyY2UuY2hhckF0KGkpKSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGxldCBzdGFydCA9IGk7XG5cdFx0bGV0IGogPSBpO1xuXHRcdHdoaWxlICh0aGlzLnJ1bGVzLmlzQWxwaGFOdW1lcmljKHRoaXMuc291cmNlLmNoYXJBdChqKSkpIGorKztcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuc291cmNlLnNsaWNlKHN0YXJ0LCBqKTtcblxuXHRcdGxldCB0eXBlID0gVG9rZW5UeXBlLklERU5USUZJRVI7XG5cdFx0aWYgKFtHUkFNTUFSLlRSVUUsIEdSQU1NQVIuRkFMU0VdLmluY2x1ZGVzKHZhbHVlKSkge1xuXHRcdFx0dHlwZSA9IFRva2VuVHlwZS5CT09MRUFOO1xuXHRcdH0gZWxzZSBpZiAoUnVsZXMuS0VZV09SRFMuaGFzKHZhbHVlKSkge1xuXHRcdFx0dHlwZSA9IFRva2VuVHlwZS5LRVlXT1JEO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgVG9rZW4odHlwZSwgdmFsdWUsIHN0YXJ0LCBqLCB0aGlzLnNvdXJjZSk7XG5cdH1cblxuXHRtYXRjaE9wZXJhdG9yQXQoaTogbnVtYmVyLCBvcGVyYXRvcnM6IFNldDxzdHJpbmc+ID0gUnVsZXMuT1BFUkFUT1JTKTogVG9rZW4gfCBudWxsIHtcblx0XHRjb25zdCBjaGFycyA9IHRoaXMuc291cmNlLmNoYXJBdChpKSArIHRoaXMuc291cmNlLmNoYXJBdChpICsgMSk7XG5cdFx0aWYgKG9wZXJhdG9ycy5oYXMoY2hhcnMpKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5PUEVSQVRPUiwgY2hhcnMsIGksIGkgKyAxLCB0aGlzLnNvdXJjZSk7XG5cdFx0fVxuXG5cdFx0aWYgKG9wZXJhdG9ycy5oYXModGhpcy5zb3VyY2UuY2hhckF0KGkpKSkge1xuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuT1BFUkFUT1IsIHRoaXMuc291cmNlLmNoYXJBdChpKSwgaSwgaSwgdGhpcy5zb3VyY2UpO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0bWF0Y2hQdW5jdHVhdGlvbkF0KGk6IG51bWJlciwgcHVuY3R1YXRpb25zID0gUnVsZXMuUFVOQ1RVQVRJT05TKTogVG9rZW4gfCBudWxsIHtcblx0XHRjb25zdCBjaGFycyA9IHRoaXMuc291cmNlLmNoYXJBdChpKSArIHRoaXMuc291cmNlLmNoYXJBdChpICsgMSk7XG5cdFx0aWYgKHB1bmN0dWF0aW9ucy5oYXMoY2hhcnMpKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5QVU5DVFVBVElPTiwgY2hhcnMsIGksIGkgKyAxLCB0aGlzLnNvdXJjZSk7XG5cdFx0fVxuXG5cdFx0aWYgKCFwdW5jdHVhdGlvbnMuaGFzKHRoaXMuc291cmNlLmNoYXJBdChpKSkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5QVU5DVFVBVElPTiwgdGhpcy5zb3VyY2UuY2hhckF0KGkpLCBpLCBpLCB0aGlzLnNvdXJjZSk7XG5cdH1cblxuXHRtYXRjaExpbmVDb21tZW50QXQoaTogbnVtYmVyKTogVG9rZW4gfCBudWxsIHtcblx0XHRpZiAoIXRoaXMuc291cmNlLnN0YXJ0c1dpdGgoUnVsZXMuQ09NTUVOVF9MSU5FLCBpKSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGxldCBqID0gaSArIFJ1bGVzLkNPTU1FTlRfTElORS5sZW5ndGg7XG5cdFx0d2hpbGUgKGogPCB0aGlzLnNvdXJjZS5sZW5ndGggJiYgdGhpcy5zb3VyY2UuY2hhckF0KGopICE9PSAnXFxuJykgaisrO1xuXHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLkNPTU1FTlQsIHRoaXMuc291cmNlLnNsaWNlKGksIGopLCBpLCBqLCB0aGlzLnNvdXJjZSk7XG5cdH1cblxuXHRtYXRjaEFubm90YXRpb25BdChpOiBudW1iZXIpOiBUb2tlbiB8IG51bGwge1xuXHRcdGlmICh0aGlzLnNvdXJjZS5jaGFyQXQoaSkgIT09ICdAJykge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0bGV0IHN0YXJ0ID0gaSArIDE7XG5cdFx0bGV0IGogPSBpICsgMTtcblx0XHR3aGlsZSAodGhpcy5ydWxlcy5pc0FscGhhKHRoaXMuc291cmNlLmNoYXJBdChqKSkpIGorKztcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuc291cmNlLnNsaWNlKHN0YXJ0LCBqKTtcblxuXHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLkFOTk9UQVRJT04sIHZhbHVlLCBzdGFydCwgaiwgdGhpcy5zb3VyY2UpO1xuXHR9XG5cblx0cHJpdmF0ZSB0b2tlbml6ZVZEb20oc3RhcnRJbmRleDogbnVtYmVyLCBsaW5lOiBudW1iZXIsIGNvbHVtbjogbnVtYmVyKToge1xuXHRcdHRva2VuczogVG9rZW5bXSxcblx0XHRuZXdJbmRleDogbnVtYmVyLFxuXHRcdGxpbmU6IG51bWJlcixcblx0XHRjb2x1bW46IG51bWJlclxuXHR9IHtcblx0XHRjb25zdCB0b2tlbnM6IFRva2VuW10gPSBbXTtcblx0XHRsZXQgaTogbnVtYmVyID0gc3RhcnRJbmRleDtcblx0XHRsZXQgdGV4dEJ1ZmZlcjogc3RyaW5nID0gJyc7XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nU3RyaW5nOiAoKSA9PiBib29sZWFuID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3Qgc3RyaW5nOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoU3RyaW5nQXQoaSk7XG5cdFx0XHRpZiAoc3RyaW5nKSB7XG5cdFx0XHRcdGZsdXNoVGV4dEJ1ZmZlcigpO1xuXHRcdFx0XHR0b2tlbnMucHVzaChzdHJpbmcud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBzdHJpbmcuZW5kICsgMTtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChzdHJpbmcpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nUHVuY3R1YXRpb246ICgpID0+IGJvb2xlYW4gPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBwdW5jdHVhdGlvbjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaFB1bmN0dWF0aW9uQXQoaSwgUnVsZXMuRE9NX1BVTkNUVUFUSU9OUyk7XG5cdFx0XHRpZiAocHVuY3R1YXRpb24pIHtcblx0XHRcdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cdFx0XHRcdHRva2Vucy5wdXNoKHB1bmN0dWF0aW9uLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gcHVuY3R1YXRpb24uZW5kICsgMTtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChwdW5jdHVhdGlvbik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdJZGVudGlmaWVyOiAoKSA9PiBib29sZWFuID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgaWRlbnRpZmllcjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaElkZW50aWZpZXJBdChpKTtcblx0XHRcdGlmIChpZGVudGlmaWVyKSB7XG5cdFx0XHRcdGlmIChbR1JBTU1BUi5DTEFTU10uaW5jbHVkZXMoaWRlbnRpZmllci52YWx1ZSkpIHtcblx0XHRcdFx0XHRpZGVudGlmaWVyLnR5cGUgPSBUb2tlblR5cGUuSURFTlRJRklFUjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZsdXNoVGV4dEJ1ZmZlcigpO1xuXG5cdFx0XHRcdHRva2Vucy5wdXNoKGlkZW50aWZpZXIud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBpZGVudGlmaWVyLmVuZDtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChpZGVudGlmaWVyKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ051bWJlcjogKCkgPT4gYm9vbGVhbiA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IG51bWJlcjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaE51bWJlckF0KGkpO1xuXHRcdFx0aWYgKG51bWJlcikge1xuXHRcdFx0XHRmbHVzaFRleHRCdWZmZXIoKTtcblxuXHRcdFx0XHR0b2tlbnMucHVzaChudW1iZXIud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBudW1iZXIuZW5kO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KG51bWJlcik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdPcGVyYXRvcjogKCkgPT4gYm9vbGVhbiA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IG9wZXJhdG9yOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoT3BlcmF0b3JBdChpLCBSdWxlcy5ET01fT1BFUkFUT1JTKTtcblx0XHRcdGlmIChvcGVyYXRvcikge1xuXHRcdFx0XHRmbHVzaFRleHRCdWZmZXIoKTtcblxuXHRcdFx0XHR0b2tlbnMucHVzaChvcGVyYXRvci53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IG9wZXJhdG9yLmVuZCArIDE7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQob3BlcmF0b3IpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBmbHVzaFRleHRCdWZmZXI6ICgpID0+IHZvaWQgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRpZiAodGV4dEJ1ZmZlci5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKFxuXHRcdFx0XHRcdG5ldyBUb2tlbihcblx0XHRcdFx0XHRcdFRva2VuVHlwZS5URVhULFxuXHRcdFx0XHRcdFx0dGV4dEJ1ZmZlcixcblx0XHRcdFx0XHRcdGkgLSB0ZXh0QnVmZmVyLmxlbmd0aCxcblx0XHRcdFx0XHRcdGksXG5cdFx0XHRcdFx0XHR0aGlzLnNvdXJjZVxuXHRcdFx0XHRcdCkud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uIC0gdGV4dEJ1ZmZlci5sZW5ndGgpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHRleHRCdWZmZXIgPSAnJztcblx0XHRcdH1cblx0XHR9O1xuXG5cblx0XHRsZXQgaWdub3JlV2hpdGVzcGFjZTogYm9vbGVhbiA9IGZhbHNlO1xuXHRcdHdoaWxlIChpIDwgdGhpcy5zb3VyY2UubGVuZ3RoKSB7XG5cdFx0XHRjb25zdCBjaGFyOiBzdHJpbmcgPSB0aGlzLnNvdXJjZS5jaGFyQXQoaSk7XG5cblx0XHRcdGlmIChjaGFyID09PSBHUkFNTUFSLlNFTUlDT0xPTikge1xuXHRcdFx0XHRmbHVzaFRleHRCdWZmZXIoKTtcblxuXHRcdFx0XHR0b2tlbnMucHVzaChuZXcgVG9rZW4oVG9rZW5UeXBlLlBVTkNUVUFUSU9OLCBjaGFyLCBpLCBpLCB0aGlzLnNvdXJjZSlcblx0XHRcdFx0XHQgICAgICAgICAgICAud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cblx0XHRcdFx0aSsrO1xuXHRcdFx0XHRjb2x1bW4rKztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9IGVsc2UgaWYgKGNoYXIgPT09IEdSQU1NQVIuQlJBQ0VfT1BFTikge1xuXHRcdFx0XHRpZ25vcmVXaGl0ZXNwYWNlID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSBpZiAoY2hhciA9PT0gR1JBTU1BUi5CUkFDRV9DTE9TRSkge1xuXHRcdFx0XHRpZ25vcmVXaGl0ZXNwYWNlID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpZ25vcmVXaGl0ZXNwYWNlKSB7XG5cdFx0XHRcdGlmICh0aGlzLm1hdGNoV2hpdGVzcGFjZUF0KGkpKSB7XG5cdFx0XHRcdFx0aSsrO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpZklzQ29uc3VtaW5nUHVuY3R1YXRpb24oKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nU3RyaW5nKClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ051bWJlcigpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdJZGVudGlmaWVyKClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ09wZXJhdG9yKClcblx0XHRcdCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0dGV4dEJ1ZmZlciArPSBjaGFyO1xuXG5cdFx0XHRpZiAoY2hhciA9PT0gJ1xcbicpIHtcblx0XHRcdFx0bGluZSsrO1xuXHRcdFx0XHRjb2x1bW4gPSAwO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29sdW1uKys7XG5cdFx0XHR9XG5cblx0XHRcdGkrKztcblx0XHR9XG5cblx0XHRmbHVzaFRleHRCdWZmZXIoKTtcblxuXHRcdHJldHVybiB7dG9rZW5zOiB0b2tlbnMsIG5ld0luZGV4OiBpLCBsaW5lOiBsaW5lLCBjb2x1bW46IGNvbHVtbn07XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFRva2VuU3RyZWFtIHtcblx0dG9rZW5zOiBUb2tlbltdO1xuXHRpbmRleDogbnVtYmVyID0gMDtcblxuXHRjb25zdHJ1Y3Rvcih0b2tlbnM6IFRva2VuW10pIHtcblx0XHR0aGlzLnRva2VucyA9IHRva2Vucztcblx0fVxuXG5cdHJld2luZCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pbmRleCA+IDApIHtcblx0XHRcdHRoaXMuaW5kZXgtLTtcblx0XHR9XG5cdH1cblxuXHRwZWVrKCk6IFRva2VuIHwgbnVsbCB7XG5cdFx0cmV0dXJuIHRoaXMudG9rZW5zW3RoaXMuaW5kZXhdIHx8IG51bGw7XG5cdH1cblxuXHRuZXh0KCk6IFRva2VuIHwgbnVsbCB7XG5cdFx0cmV0dXJuIHRoaXMudG9rZW5zW3RoaXMuaW5kZXgrK10gfHwgbnVsbDtcblx0fVxuXG5cdGhhc05leHQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGg7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtUb2tlbml6ZXJ9IGZyb20gXCIuLi90b2tlbml6ZXIvdG9rZW5pemVyXCI7XG5pbXBvcnQge3Rocm93RGVwZW5kZW5jeUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQgdHlwZSB7VG9rZW59IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5cbmV4cG9ydCBjbGFzcyBTb3VyY2Uge1xuXHRzdGF0aWMgTkVXTElORSA9ICdcXG4nO1xuXHRwdWJsaWMgcmVhZG9ubHkgdXJsOiBzdHJpbmc7XG5cdHByaXZhdGUgY29kZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGNvZGU6IHN0cmluZywgdXJsOiBzdHJpbmcgPSAnPGlubGluZT4nKSB7XG5cdFx0dGhpcy51cmwgPSB1cmw7XG5cdFx0dGhpcy5jb2RlID0gY29kZTtcblx0fVxuXG5cdGdldCBsZW5ndGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5jb2RlLmxlbmd0aDtcblx0fVxuXG5cdGdldFRva2VuaXplcigpOiBUb2tlbml6ZXIge1xuXHRcdHJldHVybiBuZXcgVG9rZW5pemVyKHRoaXMpO1xuXHR9XG5cblx0c2xpY2Uoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmNvZGUuc2xpY2Uoc3RhcnQsIGVuZCk7XG5cdH1cblxuXHRjaGFyQXQoaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuY29kZS5jaGFyQXQoaW5kZXgpO1xuXHR9XG5cblx0c3RhcnRzV2l0aCh0ZXh0OiBzdHJpbmcsIHBvc2l0aW9uPzogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29kZS5zdGFydHNXaXRoKHRleHQsIHBvc2l0aW9uKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgU291cmNlU3BhbiB7XG5cdHNvdXJjZTogU291cmNlO1xuXHRzdGFydDogbnVtYmVyO1xuXHRlbmQ6IG51bWJlcjtcblx0bGluZTogbnVtYmVyO1xuXHRjb2x1bW46IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcihzb3VyY2U6IFNvdXJjZSwgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpIHtcblx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0XHR0aGlzLnN0YXJ0ID0gc3RhcnQ7XG5cdFx0dGhpcy5lbmQgPSBlbmQ7XG5cblx0XHRjb25zdCBiZWZvcmUgPSBzb3VyY2Uuc2xpY2UoMCwgc3RhcnQpO1xuXHRcdGNvbnN0IGxpbmVzID0gYmVmb3JlLnNwbGl0KFNvdXJjZS5ORVdMSU5FKTtcblxuXHRcdHRoaXMubGluZSA9IGxpbmVzLmxlbmd0aDtcblx0XHR0aGlzLmNvbHVtbiA9IChsaW5lc1tsaW5lcy5sZW5ndGggLSAxXSB8fCAnJykubGVuZ3RoICsgMTtcblx0fVxuXG5cdHRleHQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2Uuc2xpY2UodGhpcy5zdGFydCwgdGhpcy5lbmQpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGFuRnJvbShzdGFydFRva2VuOiBUb2tlbiwgZW5kVG9rZW46IFRva2VuKTogU291cmNlU3BhbiB7XG5cdHJldHVybiBuZXcgU291cmNlU3BhbihzdGFydFRva2VuLnNvdXJjZSwgc3RhcnRUb2tlbi5zdGFydCwgZW5kVG9rZW4uZW5kKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoU291cmNlKHVybDogc3RyaW5nKTogUHJvbWlzZTxTb3VyY2U+IHtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXHRpZiAoIXJlc3BvbnNlLm9rKSB7XG5cdFx0dGhyb3dEZXBlbmRlbmN5RXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHt1cmx9YCk7XG5cdH1cblxuXHRyZXR1cm4gbmV3IFNvdXJjZShhd2FpdCByZXNwb25zZS50ZXh0KCksIHVybCk7XG59XG4iLAogICAgImltcG9ydCB7U291cmNlLCBTb3VyY2VTcGFufSBmcm9tIFwiLi9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5jbGFzcyBFcnJvclR5cGVzIHtcblx0c3RhdGljIFRZUEVfRVJST1I6IHN0cmluZyA9ICdUeXBlRXJyb3InO1xuXHRzdGF0aWMgVE9LRU5fRVJST1I6IHN0cmluZyA9ICdUb2tlbkVycm9yJztcblx0c3RhdGljIFBBUlNFUl9FUlJPUjogc3RyaW5nID0gJ1BhcnNlckVycm9yJztcblx0c3RhdGljIFJVTlRJTUVfRVJST1I6IHN0cmluZyA9ICdSdW50aW1lRXJyb3InO1xuXHRzdGF0aWMgSU5URVJOQUxfRVJST1I6IHN0cmluZyA9ICdJbnRlcm5hbEVycm9yJztcblx0c3RhdGljIE5BVElWRV9FUlJPUjogc3RyaW5nID0gJ05hdGl2ZUVycm9yJztcblx0c3RhdGljIERFUEVOREVOQ1lfRVJST1I6IHN0cmluZyA9ICdEZXBlbmRlbmN5RXJyb3InO1xuXHRzdGF0aWMgQ09NUElMRV9FUlJPUjogc3RyaW5nID0gJ0NvbXBpbGVFcnJvcic7XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cdGtpbmQ6IHN0cmluZztcblx0c3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsO1xuXHRvdmVycmlkZSBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0a2luZDogc3RyaW5nLFxuXHRcdG1lc3NhZ2U6IHN0cmluZyxcblx0XHRzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsXG5cdFx0Y2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsXG5cdCkge1xuXHRcdHN1cGVyKG1lc3NhZ2UpO1xuXHRcdHRoaXMua2luZCA9IGtpbmQ7XG5cdFx0dGhpcy5zcGFuID0gc3Bhbjtcblx0XHR0aGlzLmNhdXNlID0gY2F1c2U7XG5cdH1cblxuXHRmb3JtYXQoKTogc3RyaW5nIHtcblx0XHRpZiAodGhpcy5zcGFuKSB7XG5cblx0XHRcdHJldHVybiBgXG5bJHt0aGlzLmtpbmR9XSAke3RoaXMubWVzc2FnZX1cbiAgYXQgJHt0aGlzLnNwYW4uc291cmNlLnVybH06JHt0aGlzLnNwYW4ubGluZX06JHt0aGlzLnNwYW4uY29sdW1ufVxuXG4ke3RoaXMuc3Bhbi50ZXh0KCl9XG4ke1wiIFwiLnJlcGVhdCh0aGlzLnNwYW4uY29sdW1uKX0ke1wiXlwiLnJlcGVhdCh0aGlzLnNwYW4uZW5kIC0gdGhpcy5zcGFuLnN0YXJ0KX1cbmA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGBbJHt0aGlzLmtpbmR9XSAke3RoaXMubWVzc2FnZX1gO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhVG9rZW5FcnJvciBleHRlbmRzIEx5cmFFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihcblx0XHRcdEVycm9yVHlwZXMuVE9LRU5fRVJST1IsXG5cdFx0XHRtZXNzYWdlLFxuXHRcdFx0c3Bhbixcblx0XHRcdGNhdXNlXG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYVR5cGVFcnJvciBleHRlbmRzIEx5cmFFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihcblx0XHRcdEVycm9yVHlwZXMuVFlQRV9FUlJPUixcblx0XHRcdG1lc3NhZ2UsXG5cdFx0XHRzcGFuLFxuXHRcdFx0Y2F1c2Vcblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhUGFyc2VyRXJyb3IgZXh0ZW5kcyBMeXJhRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRFcnJvclR5cGVzLlBBUlNFUl9FUlJPUixcblx0XHRcdG1lc3NhZ2UsXG5cdFx0XHRzcGFuLFxuXHRcdFx0Y2F1c2Vcblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhUnVudGltZUVycm9yIGV4dGVuZHMgTHlyYUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0RXJyb3JUeXBlcy5SVU5USU1FX0VSUk9SLFxuXHRcdFx0bWVzc2FnZSxcblx0XHRcdHNwYW4sXG5cdFx0XHRjYXVzZVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFOYXRpdmVFcnJvciBleHRlbmRzIEx5cmFFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihcblx0XHRcdEVycm9yVHlwZXMuTkFUSVZFX0VSUk9SLFxuXHRcdFx0bWVzc2FnZSxcblx0XHRcdHNwYW4sXG5cdFx0XHRjYXVzZVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFEZXBlbmRlbmN5RXJyb3IgZXh0ZW5kcyBMeXJhRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRFcnJvclR5cGVzLkRFUEVOREVOQ1lfRVJST1IsXG5cdFx0XHRtZXNzYWdlLFxuXHRcdFx0c3Bhbixcblx0XHRcdGNhdXNlXG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYUNvbXBpbGVFcnJvciBleHRlbmRzIEx5cmFFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihcblx0XHRcdEVycm9yVHlwZXMuQ09NUElMRV9FUlJPUixcblx0XHRcdG1lc3NhZ2UsXG5cdFx0XHRzcGFuLFxuXHRcdFx0Y2F1c2Vcblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Rva2VuRXJyb3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IG5ldmVyIHtcblx0dGhyb3cgbmV3IEx5cmFUb2tlbkVycm9yKG1lc3NhZ2UsIHNwYW4sIGNhdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93VHlwZUVycm9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBuZXZlciB7XG5cdHRocm93IG5ldyBMeXJhVHlwZUVycm9yKG1lc3NhZ2UsIHNwYW4sIGNhdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UGFyc2VyRXJyb3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IG5ldmVyIHtcblx0dGhyb3cgbmV3IEx5cmFQYXJzZXJFcnJvcihtZXNzYWdlLCBzcGFuLCBjYXVzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1J1bnRpbWVFcnJvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKTogbmV2ZXIge1xuXHR0aHJvdyBuZXcgTHlyYVJ1bnRpbWVFcnJvcihtZXNzYWdlLCBzcGFuLCBjYXVzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd05hdGl2ZUVycm9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBuZXZlciB7XG5cdHRocm93IG5ldyBMeXJhTmF0aXZlRXJyb3IobWVzc2FnZSwgc3BhbiwgY2F1c2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dEZXBlbmRlbmN5RXJyb3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IG5ldmVyIHtcblx0dGhyb3cgbmV3IEx5cmFEZXBlbmRlbmN5RXJyb3IobWVzc2FnZSwgc3BhbiwgY2F1c2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dDb21waWxlRXJyb3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IG5ldmVyIHtcblx0dGhyb3cgbmV3IEx5cmFDb21waWxlRXJyb3IobWVzc2FnZSwgc3BhbiwgY2F1c2UpO1xufVxuXG4vKipcbiAqIEB0aHJvd3Mge0Vycm9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24gd3JhcEpzRXJyb3IoZXJyb3I6IEVycm9yLCBzb3VyY2U6IFNvdXJjZSk6IEx5cmFFcnJvciB7XG5cdGlmIChlcnJvciBpbnN0YW5jZW9mIEx5cmFFcnJvcikge1xuXHRcdHJldHVybiBlcnJvcjtcblx0fVxuXG5cdHJldHVybiBuZXcgTHlyYUVycm9yKFxuXHRcdEVycm9yVHlwZXMuSU5URVJOQUxfRVJST1IsXG5cdFx0ZXJyb3IubWVzc2FnZSB8fCBTdHJpbmcoZXJyb3IpLFxuXHRcdG5ldyBTb3VyY2VTcGFuKHNvdXJjZSwgMCwgc291cmNlLmxlbmd0aClcblx0KTtcbn1cbiIsCiAgICAiaW1wb3J0IHtBU1RDbGFzc05vZGUsIEFTVE5vZGVUeXBlfSBmcm9tIFwiLi4vY29yZS9hc3RcIjtcbmltcG9ydCB7Q2xhc3NEZWZpbml0aW9ufSBmcm9tIFwiLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4uL2NvcmUvcGFyc2VyL3BhcnNlclwiO1xuaW1wb3J0IHt0aHJvd1J1bnRpbWVFcnJvcn0gZnJvbSBcIi4uL2NvcmUvZXJyb3JzXCI7XG5pbXBvcnQgdHlwZSB7U291cmNlfSBmcm9tIFwiLi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5leHBvcnQgY2xhc3MgTmF0aXZlQ2xhc3Mge1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cdHJlYWRvbmx5IG5hdGl2ZUluc3RhbmNlOiBhbnk7XG5cdHJlYWRvbmx5IG5hdGl2ZUNsYXNzU291cmNlOiBTb3VyY2U7XG5cdGlzQXV0b2xvYWRBYmxlOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBuYXRpdmVJbnN0YW5jZTogYW55LCBzb3VyY2U6IFNvdXJjZSkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5uYXRpdmVJbnN0YW5jZSA9IG5hdGl2ZUluc3RhbmNlO1xuXHRcdHRoaXMubmF0aXZlQ2xhc3NTb3VyY2UgPSBzb3VyY2U7XG5cdH1cblxuXHRnZXRDbGFzc0RlZmluaXRpb24oKTogQ2xhc3NEZWZpbml0aW9uIHtcblx0XHRjb25zdCBhc3QgPSBuZXcgUGFyc2VyKHRoaXMubmF0aXZlQ2xhc3NTb3VyY2UpLnBhcnNlKCk7XG5cblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgYXN0LmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5DTEFTUykge1xuXHRcdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVENsYXNzTm9kZSAmJiBub2RlLm5hbWUgPT09IHRoaXMubmFtZSkge1xuXHRcdFx0XHRcdGNvbnN0IGNsYXNzRGVmID0gQ2xhc3NEZWZpbml0aW9uLmZyb21BU1Qobm9kZSk7XG5cblx0XHRcdFx0XHRjbGFzc0RlZi5uYXRpdmVJbnN0YW5jZSA9IHRoaXMubmF0aXZlSW5zdGFuY2U7XG5cblx0XHRcdFx0XHRyZXR1cm4gY2xhc3NEZWY7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgQ2xhc3MgJHt0aGlzLm5hbWV9IG5vdCBmb3VuZC5gLCBhc3Quc3Bhbik7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtBU1RBcnJheU5vZGUsIEFTVE5vZGUsIEFTVE5vZGVUeXBlLCBBU1RSZXR1cm5Ob2RlfSBmcm9tIFwiLi4vYXN0XCI7XG5pbXBvcnQge0dSQU1NQVIsIFRZUEVfRU5VTX0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcbmltcG9ydCB7Q2xhc3NEZWZpbml0aW9uLCBJbnN0YW5jZX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB7dGhyb3dOYXRpdmVFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuXG5pbnRlcmZhY2UgU2VyaWFsaXphdGlvbk9iamVjdCB7XG5cdFtpbmRleDogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdGNsYXNzTmFtZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGNsYXNzTmFtZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG5cdH1cblxuXHRwdWJsaWMgc2VyaWFsaXplKCk6IFNlcmlhbGl6YXRpb25PYmplY3Qge1xuXHRcdGNvbnN0IG9iamVjdDogU2VyaWFsaXphdGlvbk9iamVjdCA9IHt9O1xuXG5cdFx0b2JqZWN0W3RoaXMuY2xhc3NOYW1lXSA9IE9iamVjdFxuXHRcdFx0LmtleXModGhpcylcblx0XHRcdC5maWx0ZXIoa2V5ID0+IGtleSAhPT0gJ2NsYXNzTmFtZScpXG5cdFx0XHQucmVkdWNlKChvYmplY3Q6IFNlcmlhbGl6YXRpb25PYmplY3QsIGtleTogc3RyaW5nKTogU2VyaWFsaXphdGlvbk9iamVjdCA9PiB7XG5cdFx0XHRcdGNvbnN0IGNvcHk6IFNlcmlhbGl6YXRpb25PYmplY3QgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzKTtcblx0XHRcdFx0b2JqZWN0W2tleV0gPSBjb3B5W2tleV07XG5cdFx0XHRcdHJldHVybiBvYmplY3Q7XG5cdFx0XHR9LCB7fSk7XG5cblx0XHRyZXR1cm4gb2JqZWN0O1xuXHR9XG5cblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHtjbGFzc05hbWU6IHRoaXMuY2xhc3NOYW1lfSwgbnVsbCwgMik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFPYmplY3RWaWV3IGV4dGVuZHMgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdHByaXZhdGUgX19pbnN0YW5jZTogSW5zdGFuY2U7XG5cblx0Y29uc3RydWN0b3IoaW5zdGFuY2U6IEluc3RhbmNlKSB7XG5cdFx0c3VwZXIoaW5zdGFuY2UuX19jbGFzc0RlZi5uYW1lKTtcblxuXHRcdHRoaXMuX19pbnN0YW5jZSA9IGluc3RhbmNlO1xuXG5cdFx0cmV0dXJuIG5ldyBQcm94eSh0aGlzLCB7XG5cdFx0XHRnZXQ6IChfOiBhbnksIG5hbWU6IHN0cmluZyk6IGFueSA9PiB7XG5cdFx0XHRcdGlmIChuYW1lIGluIHRoaXMuX19pbnN0YW5jZS5fX2luc3RhbmNlRmllbGRzKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX19pbnN0YW5jZS5fX2luc3RhbmNlRmllbGRzW25hbWVdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKG5hbWUgaW4gdGhpcy5fX2luc3RhbmNlLl9fc3RhdGljRmllbGRzKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX19pbnN0YW5jZS5fX3N0YXRpY0ZpZWxkc1tuYW1lXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChuYW1lIGluIHRoaXMpIHtcblx0XHRcdFx0XHRjb25zdCBzZWxmOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB0aGlzO1xuXHRcdFx0XHRcdHJldHVybiBzZWxmW25hbWVdO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IChfOiBhbnksIG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IGFueSA9PiB7XG5cdFx0XHRcdGlmIChuYW1lIGluIHRoaXMuX19pbnN0YW5jZS5fX2luc3RhbmNlRmllbGRzKSB7XG5cdFx0XHRcdFx0dGhpcy5fX2luc3RhbmNlLl9faW5zdGFuY2VGaWVsZHNbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChuYW1lIGluIHRoaXMuX19pbnN0YW5jZS5fX3N0YXRpY0ZpZWxkcykge1xuXHRcdFx0XHRcdHRoaXMuX19pbnN0YW5jZS5fX3N0YXRpY0ZpZWxkc1tuYW1lXSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdH0pXG5cdH1cblxuXHRwdWJsaWMgb3ZlcnJpZGUgc2VyaWFsaXplKCk6IFNlcmlhbGl6YXRpb25PYmplY3Qge1xuXHRcdGNvbnN0IG9iamVjdDogU2VyaWFsaXphdGlvbk9iamVjdCA9IHt9O1xuXG5cdFx0b2JqZWN0W3RoaXMuY2xhc3NOYW1lXSA9IHsuLi50aGlzLl9faW5zdGFuY2U/Ll9faW5zdGFuY2VGaWVsZHN9O1xuXG5cdFx0cmV0dXJuIG9iamVjdDtcblx0fVxuXG5cdHB1YmxpYyBvdmVycmlkZSB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnNlcmlhbGl6ZSgpLCBudWxsLCAyKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FzdFZhbHVlKHZhbHVlOiBhbnksIGV4cGVjdGVkOiBhbnkgPSBudWxsKTogYW55IHtcblx0Y29uc3QgdHlwZU9mID0gdHlwZW9mIHZhbHVlO1xuXG5cdGlmIChleHBlY3RlZCA9PT0gbnVsbCkge1xuXHRcdGlmICh2YWx1ZSA9PT0gR1JBTU1BUi5OVUxMKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0aWYgKHZhbHVlID09PSBHUkFNTUFSLlRSVUUpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRpZiAodmFsdWUgPT09IEdSQU1NQVIuRkFMU0UpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKHR5cGVPZiA9PT0gJ3N0cmluZycgJiYgdmFsdWUudHJpbSgpICE9PSAnJyAmJiAhaXNOYU4odmFsdWUpKSB7XG5cdFx0XHRyZXR1cm4gTnVtYmVyKHZhbHVlKTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0c3dpdGNoIChleHBlY3RlZCkge1xuXHRcdGNhc2UgVFlQRV9FTlVNLlNUUklORzpcblx0XHRcdHJldHVybiB0eXBlT2YgPT09ICdzdHJpbmcnID8gdmFsdWUgOiBTdHJpbmcodmFsdWUpO1xuXG5cdFx0Y2FzZSBUWVBFX0VOVU0uTlVNQkVSOlxuXHRcdFx0cmV0dXJuIHR5cGVPZiA9PT0gJ251bWJlcicgPyB2YWx1ZSA6IE51bWJlcih2YWx1ZSk7XG5cblx0XHRjYXNlIFRZUEVfRU5VTS5CT09MRUFOOlxuXHRcdFx0cmV0dXJuIHR5cGVPZiA9PT0gJ2Jvb2xlYW4nID8gdmFsdWUgOiB2YWx1ZSA9PT0gJ3RydWUnO1xuXG5cdFx0Y2FzZSBUWVBFX0VOVU0uTlVMTDpcblx0XHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9MeXJhU3RyaW5nKHZhbHVlOiBzdHJpbmcpOiBBU1ROb2RlIHtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLlNUUklORyk7XG5cdG5vZGUudmFsdWUgPSB2YWx1ZTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0x5cmFOdW1iZXIodmFsdWU6IG51bWJlcik6IEFTVE5vZGUge1xuXHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuTlVNQkVSKTtcblx0bm9kZS52YWx1ZSA9IHZhbHVlO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTHlyYUJvb2xlYW4odmFsdWU6IGJvb2xlYW4pOiBBU1ROb2RlIHtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLkJPT0xFQU4pO1xuXHRub2RlLnZhbHVlID0gdmFsdWU7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9MeXJhTnVsbCgpOiBBU1ROb2RlIHtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLk5VTEwpO1xuXHRub2RlLnZhbHVlID0gR1JBTU1BUi5OVUxMO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTHlyYUFycmF5KHZhbHVlczogYW55W10pOiBBU1ROb2RlIHtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RBcnJheU5vZGUoKTtcblx0bm9kZS5lbGVtZW50cyA9IHZhbHVlcy5tYXAodmFsdWUgPT4gdG9MeXJhVmFsdWUodmFsdWUpKTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0x5cmFWYWx1ZSh2YWx1ZTogYW55KTogQVNUTm9kZSB7XG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFTVE5vZGUpIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSBUWVBFX0VOVU0uU1RSSU5HKSB7XG5cdFx0cmV0dXJuIHRvTHlyYVN0cmluZyh2YWx1ZSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSBUWVBFX0VOVU0uTlVNQkVSKSB7XG5cdFx0cmV0dXJuIHRvTHlyYU51bWJlcih2YWx1ZSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSBUWVBFX0VOVU0uQk9PTEVBTikge1xuXHRcdHJldHVybiB0b0x5cmFCb29sZWFuKHZhbHVlKTtcblx0fVxuXG5cdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIHRvTHlyYU51bGwoKTtcblx0fVxuXG5cdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdHJldHVybiB0b0x5cmFBcnJheSh2YWx1ZSk7XG5cdH1cblxuXHR0aHJvd05hdGl2ZUVycm9yKCdDYW5ub3QgY29udmVydCBuYXRpdmUgb2JqZWN0IHRvIEx5cmEgdmFsdWUnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21MeXJhVmFsdWUodmFsdWU6IGFueSk6IGFueSB7XG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFTVE5vZGUpIHtcblx0XHRyZXR1cm4gY2FzdFZhbHVlKHZhbHVlLnZhbHVlKTtcblx0fVxuXG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEluc3RhbmNlKSB7XG5cdFx0aWYgKHZhbHVlLl9fbmF0aXZlSW5zdGFuY2UpIHtcblx0XHRcdHJldHVybiB2YWx1ZS5fX25hdGl2ZUluc3RhbmNlO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgTHlyYU9iamVjdFZpZXcodmFsdWUpO1xuXHR9XG5cblx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0cmV0dXJuIHZhbHVlLm1hcChmcm9tTHlyYVZhbHVlKTtcblx0fVxuXG5cdHJldHVybiBjYXN0VmFsdWUodmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuVmFsdWUodmFsdWU6IGFueSk6IEFTVFJldHVybk5vZGUge1xuXHRjb25zdCBub2RlID0gbmV3IEFTVFJldHVybk5vZGUoKTtcblx0bm9kZS5hcmd1bWVudCA9IHRvTHlyYVZhbHVlKHZhbHVlKTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwTmF0aXZlSW5zdGFuY2UobHlyYU5hdGl2ZU9iamVjdDogTHlyYU5hdGl2ZU9iamVjdCwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogSW5zdGFuY2Uge1xuXHRpZiAoIW9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuaGFzKGx5cmFOYXRpdmVPYmplY3QuY2xhc3NOYW1lKSkge1xuXHRcdHRocm93TmF0aXZlRXJyb3IoYENsYXNzICR7bHlyYU5hdGl2ZU9iamVjdC5jbGFzc05hbWV9IG5vdCBmb3VuZC5gKTtcblx0fVxuXG5cdGNvbnN0IGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24gPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChseXJhTmF0aXZlT2JqZWN0LmNsYXNzTmFtZSk7XG5cdGNvbnN0IGluc3RhbmNlOiBJbnN0YW5jZSA9IGNsYXNzRGVmLmNvbnN0cnVjdEVtcHR5SW5zdGFuY2UoKTtcblxuXHRpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlID0gbHlyYU5hdGl2ZU9iamVjdDtcblxuXHRyZXR1cm4gaW5zdGFuY2U7XG59XG5cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uLy4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuY29uc3QgQ0xBU1NfTkFNRSA9ICdTdHJpbmcnO1xuXG5leHBvcnQgY2xhc3MgTHlyYVN0cmluZyBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHR2YWx1ZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcpIHtcblx0XHRzdXBlcihDTEFTU19OQU1FKTtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdH1cblxuXHQvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG5cdHRvVXBwZXJDYXNlKCk6IEx5cmFTdHJpbmcge1xuXHRcdHJldHVybiBuZXcgTHlyYVN0cmluZyh0aGlzLnZhbHVlLnRvVXBwZXJDYXNlKCkpO1xuXHR9XG5cblx0Ly8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuXHR0b0xvd2VyQ2FzZSgpOiBMeXJhU3RyaW5nIHtcblx0XHRyZXR1cm4gbmV3IEx5cmFTdHJpbmcodGhpcy52YWx1ZS50b0xvd2VyQ2FzZSgpKTtcblx0fVxuXG5cdG92ZXJyaWRlIHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0cmluZ1R5cGUgZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdENMQVNTX05BTUUsXG5cdFx0XHRMeXJhU3RyaW5nLFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfSB7XG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWx1ZSk7XG5cdFx0XHRcdFxuXHRwdWJsaWMgdG9VcHBlckNhc2UoKTogJHtDTEFTU19OQU1FfTtcblx0XG5cdHB1YmxpYyB0b0xvd2VyQ2FzZSgpOiAke0NMQVNTX05BTUV9O1xuXG5cdHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmc7XG59YFxuXHRcdFx0KSk7XG5cblx0XHR0aGlzLmlzQXV0b2xvYWRBYmxlID0gdHJ1ZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge05hdGl2ZUNsYXNzfSBmcm9tIFwiLi4vbmF0aXZlX2NsYXNzXCI7XG5pbXBvcnQge0x5cmFOYXRpdmVPYmplY3R9IGZyb20gXCIuLi8uLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX2NvbnZlcnNpb25cIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vLi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5jb25zdCBDTEFTU19OQU1FID0gJ1N5c3RlbSc7XG5cbmV4cG9ydCBjbGFzcyBMeXJhU3lzdGVtIHtcblx0c3RhdGljIGFsZXJ0KG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuXHRcdGFsZXJ0KG1lc3NhZ2UpO1xuXHR9XG5cblx0c3RhdGljIHByaW50KG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuXHRcdGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuXHR9XG5cblx0c3RhdGljIGluZm8odmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdGNvbnNvbGUuaW5mbyh2YWx1ZS5zZXJpYWxpemUoKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnNvbGUuaW5mbyh2YWx1ZSk7XG5cdH1cblxuXHRzdGF0aWMgd2FybmluZyh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgTHlyYU5hdGl2ZU9iamVjdCkge1xuXHRcdFx0Y29uc29sZS53YXJuKHZhbHVlLnNlcmlhbGl6ZSgpKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc29sZS53YXJuKHZhbHVlKTtcblx0fVxuXG5cdHN0YXRpYyBlcnJvcih2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgTHlyYU5hdGl2ZU9iamVjdCkge1xuXHRcdFx0Y29uc29sZS5lcnJvcih2YWx1ZS5zZXJpYWxpemUoKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnNvbGUuZXJyb3IodmFsdWUpO1xuXHR9XG5cblx0c3RhdGljIGxvZyh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgTHlyYU5hdGl2ZU9iamVjdCkge1xuXHRcdFx0Y29uc29sZS5sb2codmFsdWUuc2VyaWFsaXplKCkpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zb2xlLmxvZyh2YWx1ZSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFN5c3RlbSBleHRlbmRzIE5hdGl2ZUNsYXNzIHtcblx0c3RhdGljIENMQVNTX05BTUUgPSBDTEFTU19OQU1FO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0Q0xBU1NfTkFNRSxcblx0XHRcdEx5cmFTeXN0ZW0sXG5cdFx0XHRuZXcgU291cmNlKFxuXHRcdFx0XHRgXG5jbGFzcyAke0NMQVNTX05BTUV9IHtcblx0cHVibGljIHN0YXRpYyBhbGVydChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkO1xuXHRcblx0cHVibGljIHN0YXRpYyBwcmludChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkO1xuXHRcblx0cHVibGljIHN0YXRpYyBpbmZvKHZhbHVlOiBtaXhlZCk6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgc3RhdGljIHdhcm5pbmcodmFsdWU6IG1peGVkKTogdm9pZDtcblx0XG5cdHB1YmxpYyBzdGF0aWMgZXJyb3IodmFsdWU6IG1peGVkKTogdm9pZDtcblx0XG5cdHB1YmxpYyBzdGF0aWMgbG9nKHZhbHVlOiBtaXhlZCk6IHZvaWQ7XG59YFxuXHRcdFx0KSk7XG5cblx0XHR0aGlzLmlzQXV0b2xvYWRBYmxlID0gZmFsc2U7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuLi8uLi9jb3JlL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmNvbnN0IENMQVNTX05BTUUgPSAnQXNzZXJ0JztcblxuY29uc3QgaWZGYWlsZWQgPSAobWVzc2FnZTogc3RyaW5nID0gJycpID0+IHtcblx0dGhyb3cgbmV3IEVycm9yKCdbQXNzZXJ0aW9uRXJyb3JdICcgKyAobWVzc2FnZSB8fCAnQXNzZXJ0aW9uIGZhaWxlZC4nKSk7XG59O1xuXG5leHBvcnQgY2xhc3MgTHlyYUFzc2VydCB7XG5cdHN0YXRpYyBpc1RydWUoY29uZGl0aW9uOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcgPSAnJykge1xuXHRcdGlmICghY29uZGl0aW9uKSB7XG5cdFx0XHRpZkZhaWxlZChtZXNzYWdlKTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgaXNGYWxzZShjb25kaXRpb246IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZyA9ICcnKSB7XG5cdFx0aWYgKGNvbmRpdGlvbikge1xuXHRcdFx0aWZGYWlsZWQobWVzc2FnZSk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBc3NlcnQgZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdENMQVNTX05BTUUsXG5cdFx0XHRMeXJhQXNzZXJ0LFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfSB7XG5cdHB1YmxpYyBzdGF0aWMgaXNUcnVlKGNvbmRpdGlvbjogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nID0gXCJcIik6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgc3RhdGljIGlzRmFsc2UoY29uZGl0aW9uOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcgPSBcIlwiKTogdm9pZDtcbn1gXG5cdFx0XHQpKTtcblxuXHRcdHRoaXMuaXNBdXRvbG9hZEFibGUgPSBmYWxzZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge05hdGl2ZUNsYXNzfSBmcm9tIFwiLi4vbmF0aXZlX2NsYXNzXCI7XG5pbXBvcnQge0x5cmFOYXRpdmVPYmplY3R9IGZyb20gXCIuLi8uLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX2NvbnZlcnNpb25cIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vLi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5jb25zdCBDTEFTU19OQU1FID0gJ051bWJlcic7XG5cbmV4cG9ydCBjbGFzcyBMeXJhTnVtYmVyIGV4dGVuZHMgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdHByaXZhdGUgcmVhZG9ubHkgdmFsdWU6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcih2YWx1ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIoQ0xBU1NfTkFNRSk7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHR9XG5cblx0cHVibGljIHRvTnVtYmVyKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdH1cblxuXHRvdmVycmlkZSB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlLnRvU3RyaW5nKCk7XG5cdH1cblxuXHRwdWJsaWMgX19hZGQob3RoZXI6IEx5cmFOdW1iZXIpOiBMeXJhTnVtYmVyIHtcblx0XHRyZXR1cm4gbmV3IEx5cmFOdW1iZXIodGhpcy52YWx1ZSArIG90aGVyLnZhbHVlKTtcblx0fVxuXG5cdHB1YmxpYyBfX3N1YnRyYWN0KG90aGVyOiBMeXJhTnVtYmVyKTogTHlyYU51bWJlciB7XG5cdFx0cmV0dXJuIG5ldyBMeXJhTnVtYmVyKHRoaXMudmFsdWUgLSBvdGhlci52YWx1ZSk7XG5cdH1cblxuXHRwdWJsaWMgX19tdWx0aXBseShvdGhlcjogTHlyYU51bWJlcik6IEx5cmFOdW1iZXIge1xuXHRcdHJldHVybiBuZXcgTHlyYU51bWJlcih0aGlzLnZhbHVlICogb3RoZXIudmFsdWUpO1xuXHR9XG5cblx0cHVibGljIF9fZGl2aWRlKG90aGVyOiBMeXJhTnVtYmVyKTogTHlyYU51bWJlciB7XG5cdFx0cmV0dXJuIG5ldyBMeXJhTnVtYmVyKHRoaXMudmFsdWUgLyBvdGhlci52YWx1ZSk7XG5cdH1cblxuXHRwcml2YXRlIF9fbm90KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhdGhpcy52YWx1ZTtcblx0fVxuXG5cdHB1YmxpYyBfX3VuYXJ5X3BsdXMoKTogTHlyYU51bWJlciB7XG5cdFx0cmV0dXJuIG5ldyBMeXJhTnVtYmVyKCt0aGlzLnZhbHVlKTtcblx0fVxuXG5cdHB1YmxpYyBfX3VuYXJ5X21pbnVzKCk6IEx5cmFOdW1iZXIge1xuXHRcdHJldHVybiBuZXcgTHlyYU51bWJlcigtdGhpcy52YWx1ZSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE51bWJlclR5cGUgZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdENMQVNTX05BTUUsXG5cdFx0XHRMeXJhTnVtYmVyLFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfSB7XG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWx1ZTogbnVtYmVyKTtcblx0XG5cdHB1YmxpYyB0b051bWJlcigpOiBudW1iZXI7XG5cdFxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nO1xuXHRcblx0cHVibGljIG9wZXJhdG9yICsob3RoZXI6ICR7Q0xBU1NfTkFNRX0pOiAke0NMQVNTX05BTUV9O1xuXHRcblx0cHJpdmF0ZSBfX2FkZChvdGhlcjogJHtDTEFTU19OQU1FfSk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwdWJsaWMgb3BlcmF0b3IgLShvdGhlcjogJHtDTEFTU19OQU1FfSk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwcml2YXRlIF9fc3VidHJhY3Qob3RoZXI6ICR7Q0xBU1NfTkFNRX0pOiAke0NMQVNTX05BTUV9O1xuXHRcblx0cHVibGljIG9wZXJhdG9yICoob3RoZXI6ICR7Q0xBU1NfTkFNRX0pOiAke0NMQVNTX05BTUV9O1xuXHRcblx0cHJpdmF0ZSBfX211bHRpcGx5KG90aGVyOiAke0NMQVNTX05BTUV9KTogJHtDTEFTU19OQU1FfTtcblx0XG5cdHB1YmxpYyBvcGVyYXRvciAvKG90aGVyOiAke0NMQVNTX05BTUV9KTogJHtDTEFTU19OQU1FfTtcblx0XG5cdHByaXZhdGUgX19kaXZpZGUob3RoZXI6ICR7Q0xBU1NfTkFNRX0pOiAke0NMQVNTX05BTUV9O1xuXHRcblx0cHVibGljIG9wZXJhdG9yICUob3RoZXI6ICR7Q0xBU1NfTkFNRX0pOiAke0NMQVNTX05BTUV9O1xuXHRcblx0cHJpdmF0ZSBfX21vZHVsdXMob3RoZXI6ICR7Q0xBU1NfTkFNRX0pOiAke0NMQVNTX05BTUV9O1xuXHRcblx0cHVibGljIG9wZXJhdG9yID09KG90aGVyOiAke0NMQVNTX05BTUV9KTogJHtDTEFTU19OQU1FfTtcblx0XG5cdHByaXZhdGUgX19lcXVhbChvdGhlcjogJHtDTEFTU19OQU1FfSk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwdWJsaWMgb3BlcmF0b3IgIT0ob3RoZXI6ICR7Q0xBU1NfTkFNRX0pOiAke0NMQVNTX05BTUV9O1xuXHRcblx0cHJpdmF0ZSBfX25vdF9lcXVhbChvdGhlcjogJHtDTEFTU19OQU1FfSk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwdWJsaWMgb3BlcmF0b3IgPChvdGhlcjogJHtDTEFTU19OQU1FfSk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwcml2YXRlIF9fbGVzc190aGFuKG90aGVyOiAke0NMQVNTX05BTUV9KTogJHtDTEFTU19OQU1FfTtcblx0XG5cdHB1YmxpYyBvcGVyYXRvciA8PShvdGhlcjogJHtDTEFTU19OQU1FfSk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwcml2YXRlIF9fbGVzc19lcXVhbChvdGhlcjogJHtDTEFTU19OQU1FfSk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwdWJsaWMgb3BlcmF0b3IgPihvdGhlcjogJHtDTEFTU19OQU1FfSk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwcml2YXRlIF9fZ3JlYXRlcl90aGFuKG90aGVyOiAke0NMQVNTX05BTUV9KTogJHtDTEFTU19OQU1FfTtcblx0XG5cdHB1YmxpYyBvcGVyYXRvciA+PShvdGhlcjogJHtDTEFTU19OQU1FfSk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwcml2YXRlIF9fZ3JlYXRlcl9lcXVhbChvdGhlcjogJHtDTEFTU19OQU1FfSk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwdWJsaWMgb3BlcmF0b3IgISgpOiBib29sZWFuO1xuXHRcblx0cHJpdmF0ZSBfX25vdCgpOiBib29sZWFuO1xuXHRcblx0cHVibGljIG9wZXJhdG9yIHUrKCk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwcml2YXRlIF9fdW5hcnlfcGx1cygpOiAke0NMQVNTX05BTUV9O1xuXHRcblx0cHVibGljIG9wZXJhdG9yIHUtKCk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwcml2YXRlIF9fdW5hcnlfbWludXMoKTogJHtDTEFTU19OQU1FfTtcbn1gXG5cdFx0XHQpKTtcblxuXHRcdHRoaXMuaXNBdXRvbG9hZEFibGUgPSB0cnVlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7THlyYU5hdGl2ZU9iamVjdH0gZnJvbSBcIi4uLy4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfY29udmVyc2lvblwiO1xuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuLi8uLi9jb3JlL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmNvbnN0IEFSUkFZX0NMQVNTX05BTUUgPSAnQXJyYXknO1xuY29uc3QgQVJSQVlfSVRFUkFUT1JfQ0xBU1NfTkFNRSA9ICdBcnJheUl0ZXJhdG9yJztcblxuZXhwb3J0IGNsYXNzIEx5cmFBcnJheSBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHRwdWJsaWMgdmFsdWVzOiBhbnlbXTtcblxuXHRjb25zdHJ1Y3Rvcih2YWx1ZXM6IGFueVtdID0gW10pIHtcblx0XHRzdXBlcihBUlJBWV9DTEFTU19OQU1FKTtcblxuXHRcdHRoaXMudmFsdWVzID0gdmFsdWVzO1xuXHR9XG5cblx0cHVibGljIGl0ZXJhdG9yKCk6IEx5cmFBcnJheUl0ZXJhdG9yIHtcblx0XHRyZXR1cm4gbmV3IEx5cmFBcnJheUl0ZXJhdG9yKHRoaXMpO1xuXHR9XG5cblx0cHVibGljIGxlbmd0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlcy5sZW5ndGg7XG5cdH1cblxuXHRwdWJsaWMgcHVzaCh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0dGhpcy52YWx1ZXMucHVzaCh2YWx1ZSk7XG5cdH1cblxuXHQvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG5cdHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzW2luZGV4XSA/PyBudWxsO1xuXHR9XG5cblx0Ly8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuXHRwdWJsaWMgcmVtb3ZlQXQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMudmFsdWVzID0gdGhpcy52YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcblx0fVxuXG5cdG92ZXJyaWRlIHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0Y29uc3QgdmFsdWVzID0gdGhpc1xuXHRcdFx0LnZhbHVlc1xuXHRcdFx0Lm1hcCh2YWx1ZSA9PiB7XG5cdFx0XHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFBcnJheSkge1xuXHRcdFx0XHRcdHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdH0pO1xuXG5cdFx0cmV0dXJuIGBbJHt2YWx1ZXMuam9pbignLCAnKX1dYDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQXJyYXlUeXBlIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IEFSUkFZX0NMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRBUlJBWV9DTEFTU19OQU1FLFxuXHRcdFx0THlyYUFycmF5LFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtBUlJBWV9DTEFTU19OQU1FfTxUPiBpbXBsZW1lbnRzIEl0ZXJhYmxlPFQ+IHtcblx0cHVibGljIGNvbnN0cnVjdG9yKHZhbHVlczogQXJyYXk8VD4gPSBbXSk7XG5cdFxuXHRwdWJsaWMgaXRlcmF0b3IoKTogSXRlcmF0b3I8VD47XG5cdFxuXHRwdWJsaWMgbGVuZ3RoKCk6IG51bWJlcjtcblx0XG5cdHB1YmxpYyBwdXNoKHZhbHVlOiBUKTogdm9pZDtcblx0XG5cdHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IFQ/O1xuXHRcblx0cHVibGljIHJlbW92ZUF0KGluZGV4OiBudW1iZXIpOiB2b2lkO1xuXHRcblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZztcbn1gXG5cdFx0XHQpKTtcblxuXHRcdHRoaXMuaXNBdXRvbG9hZEFibGUgPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhQXJyYXlJdGVyYXRvciBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHR2YWx1ZXM6IGFueVtdO1xuXHRpbmRleDogbnVtYmVyID0gMDtcblxuXHRjb25zdHJ1Y3RvcihhcnJheTogTHlyYUFycmF5KSB7XG5cdFx0c3VwZXIoQVJSQVlfSVRFUkFUT1JfQ0xBU1NfTkFNRSk7XG5cblx0XHR0aGlzLnZhbHVlcyA9IGFycmF5LnZhbHVlcztcblx0fVxuXG5cdHB1YmxpYyByZXdpbmQoKSB7XG5cdFx0dGhpcy5pbmRleCA9IDA7XG5cdH1cblxuXHRwdWJsaWMgaGFzTmV4dCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pbmRleCA8IHRoaXMudmFsdWVzLmxlbmd0aDtcblx0fVxuXG5cdHB1YmxpYyBuZXh0KCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmluZGV4ICsgMSA+IHRoaXMudmFsdWVzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuaW5kZXgrKztcblx0fVxuXG5cdC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcblx0cHVibGljIHByZXZpb3VzKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmluZGV4ICsgMSA8IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmluZGV4LS07XG5cdH1cblxuXHQvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG5cdHB1YmxpYyBrZXkoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5pbmRleDtcblx0fVxuXG5cdHB1YmxpYyBjdXJyZW50KCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzW3RoaXMuaW5kZXhdO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBcnJheUl0ZXJhdG9yVHlwZSBleHRlbmRzIE5hdGl2ZUNsYXNzIHtcblx0c3RhdGljIENMQVNTX05BTUUgPSBBUlJBWV9JVEVSQVRPUl9DTEFTU19OQU1FO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0QVJSQVlfSVRFUkFUT1JfQ0xBU1NfTkFNRSxcblx0XHRcdEx5cmFBcnJheSxcblx0XHRcdG5ldyBTb3VyY2UoXG5cdFx0XHRcdGBcbmNsYXNzICR7QVJSQVlfSVRFUkFUT1JfQ0xBU1NfTkFNRX08VD4gaW1wbGVtZW50cyBJdGVyYXRvcjxUPiB7XG5cdHB1YmxpYyBjb25zdHJ1Y3RvcihhcnJheTogQXJyYXk8VD4pO1xuXHRcblx0cHVibGljIGhhc05leHQoKTogYm9vbGVhbjtcblx0XG5cdHB1YmxpYyBuZXh0KCk6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgcHJldmlvdXMoKTogdm9pZDtcblx0XG5cdHB1YmxpYyBrZXkoKTogbnVtYmVyO1xuXHRcblx0cHVibGljIGN1cnJlbnQoKTogVDtcblx0XG5cdHB1YmxpYyByZXdpbmQoKTogdm9pZDtcbn1gXG5cdFx0XHQpKTtcblxuXHRcdHRoaXMuaXNBdXRvbG9hZEFibGUgPSB0cnVlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7dG9MeXJhVmFsdWV9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge0xhbWJkYUZ1bmN0aW9uQ2FsbH0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX3J1bnRpbWVcIjtcblxuXG5leHBvcnQgY2xhc3MgU3RhdGU8VCA9IGFueT4ge1xuXHRwcml2YXRlIHZhbHVlOiBUO1xuXHRwcml2YXRlIHN1YnNjcmliZXJzOiBNYXA8bnVtYmVyLCAodmFsdWU6IFQpID0+IHZvaWQ+ID0gbmV3IE1hcDxudW1iZXIsICh2YWx1ZTogVCkgPT4gdm9pZD4oKTtcblx0cHJpdmF0ZSBpZDogbnVtYmVyID0gMDtcblxuXHRjb25zdHJ1Y3Rvcihpbml0aWFsOiBUKSB7XG5cdFx0dGhpcy52YWx1ZSA9IGluaXRpYWw7XG5cdH1cblxuXHRnZXQoKTogVCB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdH1cblxuXHRzZXQodmFsdWU6IFQpOiB2b2lkIHtcblx0XHRpZiAodGhpcy52YWx1ZSA9PT0gdmFsdWUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdFx0dGhpcy5ub3RpZnkoKTtcblx0fVxuXG5cdHN1YnNjcmliZShmbjogTGFtYmRhRnVuY3Rpb25DYWxsKTogbnVtYmVyIHtcblx0XHRjb25zdCBuZXh0SWQ6IG51bWJlciA9IHRoaXMuaWQrKztcblx0XHR0aGlzLnN1YnNjcmliZXJzLnNldChuZXh0SWQsIHRoaXMud3JhcENhbGxiYWNrKGZuKSk7XG5cdFx0cmV0dXJuIG5leHRJZDtcblx0fVxuXG5cdHVuc3Vic2NyaWJlKGlkOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zdWJzY3JpYmVycy5kZWxldGUoaWQpO1xuXHR9XG5cblx0cHJpdmF0ZSBub3RpZnkoKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBmbiBvZiB0aGlzLnN1YnNjcmliZXJzLnZhbHVlcygpKSB7XG5cdFx0XHRmbih0aGlzLnZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHdyYXBDYWxsYmFjayhmbjogTGFtYmRhRnVuY3Rpb25DYWxsKSB7XG5cdFx0cmV0dXJuICh2YWx1ZTogVCk6IHZvaWQgPT4ge1xuXHRcdFx0Zm4uZXZhbENhbGwodG9MeXJhVmFsdWUodmFsdWUpKTtcblx0XHR9XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uLy4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcbmltcG9ydCB7U3RhdGV9IGZyb20gXCIuLi8uLi9jb3JlL2V2ZW50L3N0YXRlXCI7XG5pbXBvcnQgdHlwZSB7TGFtYmRhRnVuY3Rpb25DYWxsfSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9ydW50aW1lXCI7XG5cbmNvbnN0IENMQVNTX05BTUUgPSAnU3RhdGUnO1xuXG5leHBvcnQgY2xhc3MgTHlyYVN0YXRlPFQ+IGV4dGVuZHMgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdHByaXZhdGUgc3RhdGU6IFN0YXRlPFQ+O1xuXG5cdGNvbnN0cnVjdG9yKGluaXRpYWw6IFQpIHtcblx0XHRzdXBlcihDTEFTU19OQU1FKTtcblx0XHR0aGlzLnN0YXRlID0gbmV3IFN0YXRlPFQ+KGluaXRpYWwpO1xuXHR9XG5cblx0Z2V0KCk6IFQge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLmdldCgpO1xuXHR9XG5cblx0c2V0KHZhbHVlOiBUKTogdm9pZCB7XG5cdFx0dGhpcy5zdGF0ZS5zZXQodmFsdWUpO1xuXHR9XG5cblx0c3Vic2NyaWJlKGZuOiBMYW1iZGFGdW5jdGlvbkNhbGwpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLnN1YnNjcmliZShmbik7XG5cdH1cblxuXHR1bnN1YnNjcmliZShpZDogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUudW5zdWJzY3JpYmUoaWQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTdGF0ZVR5cGUgZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdENMQVNTX05BTUUsXG5cdFx0XHRMeXJhU3RhdGUsXG5cdFx0XHRuZXcgU291cmNlKFxuXHRcdFx0XHRgXG5jbGFzcyAke0NMQVNTX05BTUV9PFQ+IHtcblx0cHVibGljIGNvbnN0cnVjdG9yKGluaXRpYWw6IFQpO1xuXG5cdHB1YmxpYyBnZXQoKTogVDtcblx0XG5cdHB1YmxpYyBzZXQodmFsdWU6IFQpOiB2b2lkO1xuXHRcblx0cHVibGljIHN1YnNjcmliZShmbjogKFQpIC0+IG1peGVkKTogbnVtYmVyO1xuXHRcblx0cHVibGljIHVuc3Vic2NyaWJlKGlkOiBudW1iZXIpOiBib29sZWFuO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IHRydWU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uLy4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuY29uc3QgQ0xBU1NfTkFNRSA9ICdMeXJhRXZlbnRzJztcblxuZXhwb3J0IGNsYXNzIEx5cmFFdmVudCBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGV2ZW50OiBFdmVudCkge1xuXHRcdHN1cGVyKENMQVNTX05BTUUpO1xuXHR9XG5cblx0Z2V0VHlwZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmV2ZW50LnR5cGU7XG5cdH1cblxuXHRwcmV2ZW50RGVmYXVsdCgpOiB2b2lkIHtcblx0XHR0aGlzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEV2ZW50VHlwZSBleHRlbmRzIE5hdGl2ZUNsYXNzIHtcblx0c3RhdGljIENMQVNTX05BTUUgPSBDTEFTU19OQU1FO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0Q0xBU1NfTkFNRSxcblx0XHRcdEx5cmFFdmVudCxcblx0XHRcdG5ldyBTb3VyY2UoXG5cdFx0XHRcdGBcbmNsYXNzICR7Q0xBU1NfTkFNRX0ge1xuXHRwdWJsaWMgY29uc3RydWN0b3IoZXZlbnQpO1xuXG5cdHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZztcblxuXHRwdWJsaWMgcHJldmVudERlZmF1bHQoKTogdm9pZDtcbn1gKSk7XG5cblx0XHR0aGlzLmlzQXV0b2xvYWRBYmxlID0gdHJ1ZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge05hdGl2ZUNsYXNzfSBmcm9tIFwiLi4vbmF0aXZlX2NsYXNzXCI7XG5pbXBvcnQge0x5cmFOYXRpdmVPYmplY3R9IGZyb20gXCIuLi8uLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX2NvbnZlcnNpb25cIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vLi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5jb25zdCBDTEFTU19OQU1FID0gJ0Jvb2xlYW4nO1xuXG5leHBvcnQgY2xhc3MgTHlyYUJvb2xlYW4gZXh0ZW5kcyBMeXJhTmF0aXZlT2JqZWN0IHtcblx0dmFsdWU6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IodmFsdWU6IGJvb2xlYW4pIHtcblx0XHRzdXBlcihDTEFTU19OQU1FKTtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdH1cblxuXHRvdmVycmlkZSB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlLnRvU3RyaW5nKCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvb2xlYW5UeXBlIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IENMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRDTEFTU19OQU1FLFxuXHRcdFx0THlyYUJvb2xlYW4sXG5cdFx0XHRuZXcgU291cmNlKFxuXHRcdFx0XHRgXG5jbGFzcyAke0NMQVNTX05BTUV9IHtcblx0cHVibGljIGNvbnN0cnVjdG9yKHZhbHVlKTtcblxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IHRydWU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4vbmF0aXZlX2NsYXNzXCI7XG5pbXBvcnQge1N0cmluZ1R5cGV9IGZyb20gXCIuL2NsYXNzZXMvc3RyaW5nXCI7XG5pbXBvcnQge1N5c3RlbX0gZnJvbSBcIi4vY2xhc3Nlcy9zeXN0ZW1cIjtcbmltcG9ydCB7QXNzZXJ0fSBmcm9tIFwiLi9jbGFzc2VzL2Fzc2VydFwiO1xuaW1wb3J0IHtOdW1iZXJUeXBlfSBmcm9tIFwiLi9jbGFzc2VzL251bWJlclwiO1xuaW1wb3J0IHtBcnJheUl0ZXJhdG9yVHlwZSwgQXJyYXlUeXBlfSBmcm9tIFwiLi9jbGFzc2VzL2FycmF5XCI7XG5pbXBvcnQge1N0YXRlVHlwZX0gZnJvbSBcIi4vY2xhc3Nlcy9zdGF0ZVwiO1xuaW1wb3J0IHtFdmVudFR5cGV9IGZyb20gXCIuL2NsYXNzZXMvZXZlbnRcIjtcbmltcG9ydCB7Qm9vbGVhblR5cGV9IGZyb20gXCIuL2NsYXNzZXMvYm9vbGVhbi50c1wiO1xuXG5leHBvcnQgY2xhc3MgTmF0aXZlQ2xhc3NlcyB7XG5cdHJlYWRvbmx5IHJlZ2lzdHJ5OiBNYXA8c3RyaW5nLCBOYXRpdmVDbGFzcz4gPSBuZXcgTWFwKCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoU3RyaW5nVHlwZS5DTEFTU19OQU1FLCBuZXcgU3RyaW5nVHlwZSgpKTtcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChOdW1iZXJUeXBlLkNMQVNTX05BTUUsIG5ldyBOdW1iZXJUeXBlKCkpO1xuXHRcdHRoaXMucmVnaXN0cnkuc2V0KEJvb2xlYW5UeXBlLkNMQVNTX05BTUUsIG5ldyBCb29sZWFuVHlwZSgpKTtcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChBcnJheVR5cGUuQ0xBU1NfTkFNRSwgbmV3IEFycmF5VHlwZSgpKTtcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChBcnJheUl0ZXJhdG9yVHlwZS5DTEFTU19OQU1FLCBuZXcgQXJyYXlJdGVyYXRvclR5cGUoKSlcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChTeXN0ZW0uQ0xBU1NfTkFNRSwgbmV3IFN5c3RlbSgpKTtcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChBc3NlcnQuQ0xBU1NfTkFNRSwgbmV3IEFzc2VydCgpKTtcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChTdGF0ZVR5cGUuQ0xBU1NfTkFNRSwgbmV3IFN0YXRlVHlwZSgpKTtcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChFdmVudFR5cGUuQ0xBU1NfTkFNRSwgbmV3IEV2ZW50VHlwZSgpKVxuXHR9XG59XG4iLAogICAgImltcG9ydCB7QVNUUGFyYW1ldGVyTm9kZSwgQVNUVHlwZU5vZGV9IGZyb20gXCIuLi9jb3JlL2FzdFwiO1xuaW1wb3J0IHtUWVBFX0VOVU19IGZyb20gXCIuLi9jb3JlL2dyYW1tYXJcIjtcbmltcG9ydCB7dGhyb3dOYXRpdmVFcnJvcn0gZnJvbSBcIi4uL2NvcmUvZXJyb3JzXCI7XG5cbmV4cG9ydCBjbGFzcyBOYXRpdmVGdW5jdGlvbiB7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblx0cmVhZG9ubHkgcGFyYW1ldGVyTm9kZXM6IEFTVFBhcmFtZXRlck5vZGVbXSA9IFtdO1xuXHRyZWFkb25seSByZXR1cm5UeXBlOiBBU1RUeXBlTm9kZTtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSwgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGUpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMucGFyYW1ldGVyTm9kZXMgPSBwYXJhbWV0ZXJzO1xuXHRcdHRoaXMucmV0dXJuVHlwZSA9IHJldHVyblR5cGU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE5hdGl2ZUZ1bmN0aW9uVHlwZVJlZ2lzdHJ5IHtcblx0cmVhZG9ubHkgZnVuY3Rpb25zOiBNYXA8c3RyaW5nLCBOYXRpdmVGdW5jdGlvbj4gPSBuZXcgTWFwKCk7XG5cblx0cHVibGljIGhhcyhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5mdW5jdGlvbnMuaGFzKG5hbWUpO1xuXHR9XG5cblx0cHVibGljIGdldChuYW1lOiBzdHJpbmcpOiBOYXRpdmVGdW5jdGlvbiB7XG5cdFx0Y29uc3QgbmF0aXZlRnVuY3Rpb246IE5hdGl2ZUZ1bmN0aW9uIHwgdW5kZWZpbmVkID0gdGhpcy5mdW5jdGlvbnMuZ2V0KG5hbWUpO1xuXHRcdGlmICghbmF0aXZlRnVuY3Rpb24pIHtcblx0XHRcdHRocm93TmF0aXZlRXJyb3IoYEZ1bmN0aW9uICR7bmFtZX0gbm90IGZvdW5kLmApO1xuXHRcdH1cblx0XHRyZXR1cm4gbmF0aXZlRnVuY3Rpb247XG5cdH1cblxuXHRwdWJsaWMgc2V0KG5hbWU6IHN0cmluZywgcGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdLCByZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSk6IE5hdGl2ZUZ1bmN0aW9uVHlwZVJlZ2lzdHJ5IHtcblx0XHR0aGlzLmZ1bmN0aW9ucy5zZXQobmFtZSwgbmV3IE5hdGl2ZUZ1bmN0aW9uKG5hbWUsIHBhcmFtZXRlcnMsIHJldHVyblR5cGUpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTmF0aXZlRnVuY3Rpb25zIHtcblx0c3RhdGljIFBSSU5UID0gJ3ByaW50JztcblxuXHQvKipcblx0ICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPn1cblx0ICovXG5cdHB1YmxpYyBnZXRHbG9iYWxGdW5jdGlvbnMoKTogeyBba2V5OiBzdHJpbmddOiAoLi4uYXJnczogYW55W10pID0+IGFueSB9IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0W05hdGl2ZUZ1bmN0aW9ucy5QUklOVF06ICguLi5hcmdzKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHRwdWJsaWMgZ2V0R2xvYmFsRnVuY3Rpb25UeXBlUmVnaXN0cnkoKTogTmF0aXZlRnVuY3Rpb25UeXBlUmVnaXN0cnkge1xuXHRcdGNvbnN0IGZ1bmN0aW9ucyA9IG5ldyBOYXRpdmVGdW5jdGlvblR5cGVSZWdpc3RyeSgpO1xuXHRcdGZ1bmN0aW9ucy5zZXQoXG5cdFx0XHROYXRpdmVGdW5jdGlvbnMuUFJJTlQsXG5cdFx0XHRbcGFyYW1ldGVyKHR5cGUoVFlQRV9FTlVNLlNUUklORyksICdtZXNzYWdlJyldLFxuXHRcdFx0dHlwZShUWVBFX0VOVU0uVk9JRClcblx0XHQpXG5cblx0XHRyZXR1cm4gZnVuY3Rpb25zO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHR5cGUobmFtZTogc3RyaW5nLCBudWxsYWJsZSA9IGZhbHNlKTogQVNUVHlwZU5vZGUge1xuXHRyZXR1cm4gbmV3IEFTVFR5cGVOb2RlKEFTVFR5cGVOb2RlLktJTkRfU0lNUExFLCBuYW1lLCBudWxsYWJsZSk7XG59XG5cbmZ1bmN0aW9uIHBhcmFtZXRlcih0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGUsIG5hbWU6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBhbnkgPSBudWxsKTogQVNUUGFyYW1ldGVyTm9kZSB7XG5cdHJldHVybiBuZXcgQVNUUGFyYW1ldGVyTm9kZShuYW1lLCB0eXBlQW5ub3RhdGlvbiwgZGVmYXVsdFZhbHVlKTtcbn1cbiIsCiAgICAiaW1wb3J0IHtUWVBFX0VOVU19IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5pbXBvcnQge1xuXHRBU1RDbGFzc05vZGUsXG5cdEFTVEZpZWxkTm9kZSxcblx0QVNUSW50ZXJmYWNlTm9kZSxcblx0QVNUTWV0aG9kTm9kZSxcblx0QVNUTm9kZSxcblx0QVNUUGFyYW1ldGVyTm9kZSxcblx0QVNUVHlwZU5vZGVcbn0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHt0aHJvd1R5cGVFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5cbmV4cG9ydCBjbGFzcyBQcmltaXRpdmVUeXBlcyB7XG5cdHN0YXRpYyByZWFkb25seSBOVU1CRVI6IHN0cmluZyA9IFRZUEVfRU5VTS5OVU1CRVI7XG5cdHN0YXRpYyByZWFkb25seSBTVFJJTkc6IHN0cmluZyA9IFRZUEVfRU5VTS5TVFJJTkc7XG5cdHN0YXRpYyByZWFkb25seSBCT09MRUFOOiBzdHJpbmcgPSBUWVBFX0VOVU0uQk9PTEVBTjtcblx0c3RhdGljIHJlYWRvbmx5IE1JWEVEOiBzdHJpbmcgPSBUWVBFX0VOVU0uTUlYRUQ7XG5cdHN0YXRpYyByZWFkb25seSBOVUxMOiBzdHJpbmcgPSBUWVBFX0VOVU0uTlVMTDtcblx0c3RhdGljIHJlYWRvbmx5IFZPSUQ6IHN0cmluZyA9IFRZUEVfRU5VTS5WT0lEO1xuXG5cdHN0YXRpYyBoYXNUeXBlKHR5cGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChQcmltaXRpdmVUeXBlcywgdHlwZS50b1VwcGVyQ2FzZSgpKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgUHJpbWl0aXZlQ2xhc3NUeXBlcyB7XG5cdHN0YXRpYyByZWFkb25seSBBUlJBWTogc3RyaW5nID0gVFlQRV9FTlVNLkFSUkFZO1xuXG5cdHN0YXRpYyBDTEFTU05BTUVfTUFQOiB7IFtzOiBzdHJpbmddOiBzdHJpbmc7IH0gPSB7XG5cdFx0YXJyYXk6ICdBcnJheSdcblx0fVxuXG5cdHN0YXRpYyBnZXRDbGFzc1JlZk5hbWUodHlwZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG5cdFx0cmV0dXJuIFByaW1pdGl2ZUNsYXNzVHlwZXMuQ0xBU1NOQU1FX01BUFt0eXBlXSB8fCBudWxsO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlIHtcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdH1cblxuXHRlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcyA9PT0gb3RoZXI7XG5cdH1cblxuXHRhY2NlcHRzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXF1YWxzKG90aGVyKTtcblx0fVxuXG5cdHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGBUeXBlKCR7dGhpcy5uYW1lfSlgO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBQcmltaXRpdmVUeXBlIGV4dGVuZHMgVHlwZSB7XG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuXHRcdHN1cGVyKG5hbWUpO1xuXHR9XG5cblx0b3ZlcnJpZGUgZXF1YWxzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIG90aGVyIGluc3RhbmNlb2YgUHJpbWl0aXZlVHlwZVxuXHRcdFx0JiYgdGhpcy5uYW1lID09PSBvdGhlci5uYW1lO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBNaXhlZFR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoUHJpbWl0aXZlVHlwZXMuTUlYRUQpO1xuXHR9XG5cblx0b3ZlcnJpZGUgZXF1YWxzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIG90aGVyIGluc3RhbmNlb2YgTWl4ZWRUeXBlO1xuXHR9XG5cblx0b3ZlcnJpZGUgYWNjZXB0cygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVm9pZFR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoUHJpbWl0aXZlVHlwZXMuVk9JRCk7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBWb2lkVHlwZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTnVsbFR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoUHJpbWl0aXZlVHlwZXMuTlVMTCk7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBOdWxsVHlwZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTnVsbGFibGVUeXBlIGV4dGVuZHMgVHlwZSB7XG5cdGlubmVyOiBUeXBlO1xuXG5cdGNvbnN0cnVjdG9yKGlubmVyOiBUeXBlKSB7XG5cdFx0c3VwZXIoaW5uZXIudG9TdHJpbmcoKSArICc/Jyk7XG5cdFx0dGhpcy5pbm5lciA9IGlubmVyO1xuXHR9XG5cblx0b3ZlcnJpZGUgZXF1YWxzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0aWYgKG90aGVyID09PSBUeXBlcy5OVUxMKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAob3RoZXIgaW5zdGFuY2VvZiBOdWxsYWJsZVR5cGUpIHtcblx0XHRcdHJldHVybiB0aGlzLmlubmVyLmVxdWFscyhvdGhlci5pbm5lcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0b3ZlcnJpZGUgYWNjZXB0cyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBvdGhlciA9PT0gVHlwZXMuTlVMTCB8fCB0aGlzLmlubmVyLmFjY2VwdHMob3RoZXIpO1xuXHR9XG5cblx0b3ZlcnJpZGUgdG9TdHJpbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5pbm5lci50b1N0cmluZygpICsgJz8nO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBWTm9kZVR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoJ3Zub2RlJyk7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBWb2lkVHlwZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVHlwZXMge1xuXHRzdGF0aWMgcmVhZG9ubHkgTlVNQkVSOiBQcmltaXRpdmVUeXBlID0gbmV3IFByaW1pdGl2ZVR5cGUoUHJpbWl0aXZlVHlwZXMuTlVNQkVSKTtcblx0c3RhdGljIHJlYWRvbmx5IFNUUklORzogUHJpbWl0aXZlVHlwZSA9IG5ldyBQcmltaXRpdmVUeXBlKFByaW1pdGl2ZVR5cGVzLlNUUklORyk7XG5cdHN0YXRpYyByZWFkb25seSBCT09MRUFOOiBQcmltaXRpdmVUeXBlID0gbmV3IFByaW1pdGl2ZVR5cGUoUHJpbWl0aXZlVHlwZXMuQk9PTEVBTik7XG5cdHN0YXRpYyByZWFkb25seSBNSVhFRDogTWl4ZWRUeXBlID0gbmV3IE1peGVkVHlwZSgpO1xuXHRzdGF0aWMgcmVhZG9ubHkgTlVMTDogTnVsbFR5cGUgPSBuZXcgTnVsbFR5cGUoKTtcblx0c3RhdGljIHJlYWRvbmx5IFZPSUQ6IFZvaWRUeXBlID0gbmV3IFZvaWRUeXBlKCk7XG5cdHN0YXRpYyByZWFkb25seSBWTk9ERTogVk5vZGVUeXBlID0gbmV3IFZOb2RlVHlwZSgpO1xuXG5cdHN0YXRpYyBnZXRUeXBlKG5hbWU6IHN0cmluZyk6IFR5cGUge1xuXHRcdGlmICghT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoUHJpbWl0aXZlVHlwZXMsIG5hbWUudG9VcHBlckNhc2UoKSkpIHtcblx0XHRcdHRocm93VHlwZUVycm9yKGBVbmtub3duIHByaW1pdGl2ZSB0eXBlICR7bmFtZX0uYCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdHlwZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IFR5cGVzO1xuXHRcdHJldHVybiB0eXBlc1tuYW1lLnRvVXBwZXJDYXNlKCldO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlVmFyaWFibGUgZXh0ZW5kcyBUeXBlIHtcblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIobmFtZSk7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpIHtcblx0XHRyZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBUeXBlVmFyaWFibGVcblx0XHRcdCYmIHRoaXMubmFtZSA9PT0gb3RoZXIubmFtZTtcblx0fVxuXG5cdG92ZXJyaWRlIGFjY2VwdHMoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGVQYXJhbWV0ZXJTeW1ib2wge1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHZhcmlhYmxlVHlwZTogVHlwZVZhcmlhYmxlO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy52YXJpYWJsZVR5cGUgPSBuZXcgVHlwZVZhcmlhYmxlKG5hbWUpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBGaWVsZFN5bWJvbCB7XG5cdHJlYWRvbmx5IG5vZGU6IEFTVEZpZWxkTm9kZTtcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXHRyZWFkb25seSBmaWVsZFR5cGU6IFR5cGU7XG5cdHJlYWRvbmx5IGlzU3RhdGljOiBib29sZWFuID0gZmFsc2U7XG5cdHJlYWRvbmx5IGlzUHJpdmF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXHRyZWFkb25seSBpc1B1YmxpYzogYm9vbGVhbiA9IGZhbHNlO1xuXHRyZWFkb25seSBpc1JlYWRvbmx5OiBib29sZWFuID0gZmFsc2U7XG5cdG93bmVyOiBDbGFzc1N5bWJvbCB8IEludGVyZmFjZVN5bWJvbCB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5vZGU6IEFTVEZpZWxkTm9kZSwgZmllbGRUeXBlOiBUeXBlKSB7XG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0XHR0aGlzLm5hbWUgPSBub2RlLm5hbWU7XG5cdFx0dGhpcy5maWVsZFR5cGUgPSBmaWVsZFR5cGU7XG5cdFx0dGhpcy5pc1N0YXRpYyA9IG5vZGUubW9kaWZpZXJzLnN0YXRpYztcblx0XHR0aGlzLmlzUHJpdmF0ZSA9IG5vZGUubW9kaWZpZXJzLnByaXZhdGU7XG5cdFx0dGhpcy5pc1B1YmxpYyA9IG5vZGUubW9kaWZpZXJzLnB1YmxpYztcblx0XHR0aGlzLmlzUmVhZG9ubHkgPSBub2RlLm1vZGlmaWVycy5yZWFkb25seTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyU3ltYm9sIHtcblx0cmVhZG9ubHkgbm9kZTogQVNUUGFyYW1ldGVyTm9kZSB8IG51bGw7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblx0cmVhZG9ubHkgcGFyYW1ldGVyVHlwZTogVHlwZTtcblx0cmVhZG9ubHkgZGVmYXVsdFR5cGU6IFR5cGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGU6IFR5cGUsIGRlZmF1bHRWYWx1ZTogVHlwZSB8IG51bGwgPSBudWxsLCBub2RlOiBBU1RQYXJhbWV0ZXJOb2RlIHwgbnVsbCA9IG51bGwpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMucGFyYW1ldGVyVHlwZSA9IHR5cGU7XG5cdFx0dGhpcy5kZWZhdWx0VHlwZSA9IGRlZmF1bHRWYWx1ZTtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBNZXRob2RTeW1ib2wge1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cdHJlYWRvbmx5IG5vZGU6IEFTVE1ldGhvZE5vZGU7XG5cdHJlYWRvbmx5IGlzU3RhdGljOiBib29sZWFuID0gZmFsc2U7XG5cdHJlYWRvbmx5IGlzUHJpdmF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXHRyZWFkb25seSBpc1B1YmxpYzogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHR5cGVQYXJhbWV0ZXJTeW1ib2xzOiBUeXBlUGFyYW1ldGVyU3ltYm9sW10gPSBbXTtcblx0cGFyYW1ldGVyU3ltYm9sczogUGFyYW1ldGVyU3ltYm9sW10gPSBbXTtcblx0cmV0dXJuVHlwZTogVHlwZSA9IFR5cGVzLk1JWEVEO1xuXG5cdG93bmVyOiBDbGFzc1N5bWJvbCB8IEludGVyZmFjZVN5bWJvbCB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5vZGU6IEFTVE1ldGhvZE5vZGUpIHtcblx0XHR0aGlzLm5hbWUgPSBub2RlLm5hbWU7XG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0XHR0aGlzLmlzU3RhdGljID0gbm9kZS5tb2RpZmllcnMuc3RhdGljO1xuXHRcdHRoaXMuaXNQcml2YXRlID0gbm9kZS5tb2RpZmllcnMucHJpdmF0ZTtcblx0XHR0aGlzLmlzUHVibGljID0gbm9kZS5tb2RpZmllcnMucHVibGljO1xuXHR9XG5cblx0Z2V0IGJvZHkoKTogQVNUTm9kZVtdIHtcblx0XHRyZXR1cm4gdGhpcy5ub2RlLmNoaWxkcmVuO1xuXHR9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT2JqZWN0U3ltYm9sIHtcblx0bmFtZTogc3RyaW5nO1xuXHR0eXBlUGFyYW1ldGVyU3ltYm9sczogVHlwZVBhcmFtZXRlclN5bWJvbFtdO1xuXHRzdGF0aWNGaWVsZFN5bWJvbHM6IE1hcDxzdHJpbmcsIEZpZWxkU3ltYm9sPjtcblx0aW5zdGFuY2VNZXRob2RTeW1ib2xzOiBNYXA8c3RyaW5nLCBNZXRob2RTeW1ib2w+O1xufVxuXG5leHBvcnQgY2xhc3MgQ2xhc3NTeW1ib2wgaW1wbGVtZW50cyBPYmplY3RTeW1ib2wge1xuXHRyZWFkb25seSBub2RlOiBBU1RDbGFzc05vZGU7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblx0cmVhZG9ubHkgc3VwZXJDbGFzczogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cblx0c3VwZXJDbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wgfCBudWxsID0gbnVsbDtcblx0dHlwZVBhcmFtZXRlclN5bWJvbHM6IFR5cGVQYXJhbWV0ZXJTeW1ib2xbXSA9IFtdO1xuXHRpbnN0YW5jZUZpZWxkU3ltYm9sczogTWFwPHN0cmluZywgRmllbGRTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRzdGF0aWNGaWVsZFN5bWJvbHM6IE1hcDxzdHJpbmcsIEZpZWxkU3ltYm9sPiA9IG5ldyBNYXAoKTtcblx0aW5zdGFuY2VNZXRob2RTeW1ib2xzOiBNYXA8c3RyaW5nLCBNZXRob2RTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRzdGF0aWNNZXRob2RTeW1ib2xzOiBNYXA8c3RyaW5nLCBNZXRob2RTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRjb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sIHwgbnVsbCA9IG51bGw7XG5cdGltcGxlbWVudHNJbnRlcmZhY2VzOiBJbnRlcmZhY2VSZWZUeXBlW10gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihub2RlOiBBU1RDbGFzc05vZGUpIHtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHRcdHRoaXMubmFtZSA9IG5vZGUubmFtZTtcblx0XHR0aGlzLnN1cGVyQ2xhc3MgPSBub2RlLnN1cGVyQ2xhc3M/Lm5hbWUgPz8gbnVsbDtcblx0fVxuXG5cdHJlc29sdmVJbnN0YW5jZUZpZWxkU3ltYm9sKG5hbWU6IHN0cmluZyk6IEZpZWxkU3ltYm9sIHwgbnVsbCB7XG5cdFx0aWYgKHRoaXMuaW5zdGFuY2VGaWVsZFN5bWJvbHMuaGFzKG5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZUZpZWxkU3ltYm9scy5nZXQobmFtZSkgfHwgbnVsbDtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zdXBlckNsYXNzKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdXBlckNsYXNzU3ltYm9sPy5yZXNvbHZlSW5zdGFuY2VGaWVsZFN5bWJvbChuYW1lKSB8fCBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmVzb2x2ZVN0YXRpY0ZpZWxkU3ltYm9sKG5hbWU6IHN0cmluZyk6IEZpZWxkU3ltYm9sIHwgbnVsbCB7XG5cdFx0aWYgKHRoaXMuc3RhdGljRmllbGRTeW1ib2xzLmhhcyhuYW1lKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGljRmllbGRTeW1ib2xzLmdldChuYW1lKSB8fCBudWxsO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnN1cGVyQ2xhc3MpIHtcblx0XHRcdHJldHVybiB0aGlzLnN1cGVyQ2xhc3NTeW1ib2w/LnJlc29sdmVTdGF0aWNGaWVsZFN5bWJvbChuYW1lKSB8fCBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2VTeW1ib2wgaW1wbGVtZW50cyBPYmplY3RTeW1ib2wge1xuXHRyZWFkb25seSBub2RlOiBBU1RJbnRlcmZhY2VOb2RlO1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cblx0dHlwZVBhcmFtZXRlclN5bWJvbHM6IFR5cGVQYXJhbWV0ZXJTeW1ib2xbXSA9IFtdO1xuXHRzdGF0aWNGaWVsZFN5bWJvbHM6IE1hcDxzdHJpbmcsIEZpZWxkU3ltYm9sPiA9IG5ldyBNYXAoKTtcblx0aW5zdGFuY2VNZXRob2RTeW1ib2xzOiBNYXA8c3RyaW5nLCBNZXRob2RTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRleHRlbmRzSW50ZXJmYWNlczogSW50ZXJmYWNlU3ltYm9sW10gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihub2RlOiBBU1RJbnRlcmZhY2VOb2RlKSB7XG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0XHR0aGlzLm5hbWUgPSBub2RlLm5hbWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIENsYXNzUmVmVHlwZSBleHRlbmRzIFR5cGUge1xuXHRyZWFkb25seSBjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2w7XG5cdHJlYWRvbmx5IHR5cGVBcmd1bWVudHM6IFR5cGVbXTtcblxuXHRjb25zdHJ1Y3RvcihjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wsIHR5cGVBcmd1bWVudHM6IFR5cGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQ2xhc3NSZWZUeXBlLmZvcm1hdFN5bWJvbE5hbWUoY2xhc3NTeW1ib2wubmFtZSwgdHlwZUFyZ3VtZW50cykpO1xuXHRcdHRoaXMuY2xhc3NTeW1ib2wgPSBjbGFzc1N5bWJvbDtcblx0XHR0aGlzLnR5cGVBcmd1bWVudHMgPSB0eXBlQXJndW1lbnRzO1xuXHR9XG5cblx0c3RhdGljIGZvcm1hdFN5bWJvbE5hbWUobmFtZTogc3RyaW5nLCB0eXBlQXJndW1lbnRzOiBUeXBlW10pIHtcblx0XHRpZiAodHlwZUFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBgY2xhc3NSZWZUeXBlKCR7bmFtZX0pYDtcblx0XHR9XG5cblx0XHRyZXR1cm4gYGNsYXNzUmVmVHlwZSgke25hbWV9PCR7dHlwZUFyZ3VtZW50cy5tYXAodHlwZSA9PiB0eXBlLnRvU3RyaW5nKCkpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbignLCAnKX0+KWA7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gKG90aGVyIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlXG5cdFx0XHQmJiBvdGhlci5jbGFzc1N5bWJvbCA9PT0gdGhpcy5jbGFzc1N5bWJvbCk7XG5cdH1cblxuXHRvdmVycmlkZSBhY2NlcHRzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0aWYgKCF0aGlzLmVxdWFscyhvdGhlcikpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAob3RoZXIgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUpIHtcblx0XHRcdGlmICh0aGlzLnR5cGVBcmd1bWVudHMubGVuZ3RoICE9PSBvdGhlci50eXBlQXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50eXBlQXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IG90aGVyVHlwZSA9IG90aGVyLnR5cGVBcmd1bWVudHNbaV07XG5cblx0XHRcdFx0aWYgKCFvdGhlclR5cGUgfHwgIXRoaXMudHlwZUFyZ3VtZW50c1tpXT8uYWNjZXB0cyhvdGhlclR5cGUpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgSW50ZXJmYWNlUmVmVHlwZSBleHRlbmRzIFR5cGUge1xuXHRyZWFkb25seSBpbnRlcmZhY2VTeW1ib2w6IEludGVyZmFjZVN5bWJvbDtcblx0cmVhZG9ubHkgdHlwZUFyZ3VtZW50czogVHlwZVtdO1xuXG5cdGNvbnN0cnVjdG9yKGludGVyZmFjZVN5bWJvbDogSW50ZXJmYWNlU3ltYm9sLCB0eXBlQXJndW1lbnRzOiBUeXBlW10gPSBbXSkge1xuXHRcdHN1cGVyKEludGVyZmFjZVJlZlR5cGUuZm9ybWF0U3ltYm9sTmFtZShpbnRlcmZhY2VTeW1ib2wubmFtZSwgdHlwZUFyZ3VtZW50cykpO1xuXHRcdHRoaXMuaW50ZXJmYWNlU3ltYm9sID0gaW50ZXJmYWNlU3ltYm9sO1xuXHRcdHRoaXMudHlwZUFyZ3VtZW50cyA9IHR5cGVBcmd1bWVudHM7XG5cdH1cblxuXHRzdGF0aWMgZm9ybWF0U3ltYm9sTmFtZShuYW1lOiBzdHJpbmcsIHR5cGVBcmd1bWVudHM6IFR5cGVbXSk6IHN0cmluZyB7XG5cdFx0aWYgKHR5cGVBcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gYGludGVyZmFjZVJlZlR5cGUoJHtuYW1lfSlgO1xuXHRcdH1cblxuXHRcdHJldHVybiBgaW50ZXJmYWNlUmVmVHlwZSgke25hbWV9PCR7dHlwZUFyZ3VtZW50cy5tYXAodHlwZSA9PiB0eXBlLnRvU3RyaW5nKCkpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oJywgJyl9PilgO1xuXHR9XG5cblx0b3ZlcnJpZGUgZXF1YWxzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIChvdGhlciBpbnN0YW5jZW9mIEludGVyZmFjZVJlZlR5cGVcblx0XHRcdCYmIG90aGVyLmludGVyZmFjZVN5bWJvbCA9PT0gdGhpcy5pbnRlcmZhY2VTeW1ib2wpO1xuXHR9XG5cblx0b3ZlcnJpZGUgYWNjZXB0cyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdGlmICghdGhpcy5lcXVhbHMob3RoZXIpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKG90aGVyIGluc3RhbmNlb2YgSW50ZXJmYWNlUmVmVHlwZSkge1xuXHRcdFx0aWYgKHRoaXMudHlwZUFyZ3VtZW50cy5sZW5ndGggIT09IG90aGVyLnR5cGVBcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnR5cGVBcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3Qgb3RoZXJUeXBlID0gb3RoZXIudHlwZUFyZ3VtZW50c1tpXTtcblxuXHRcdFx0XHRpZiAoIW90aGVyVHlwZSB8fCAhdGhpcy50eXBlQXJndW1lbnRzW2ldPy5hY2NlcHRzKG90aGVyVHlwZSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMYW1iZGFUeXBlIGV4dGVuZHMgVHlwZSB7XG5cdHJlYWRvbmx5IHBhcmFtZXRlclN5bWJvbHM6IFBhcmFtZXRlclN5bWJvbFtdID0gW107XG5cdHJlYWRvbmx5IHJldHVyblR5cGU6IFR5cGU7XG5cblx0Y29uc3RydWN0b3IocGFyYW1ldGVyczogUGFyYW1ldGVyU3ltYm9sW10sIHJldHVyblR5cGU6IFR5cGUpIHtcblx0XHRzdXBlcihMYW1iZGFUeXBlLmNyZWF0ZVNpZ25hdHVyZShwYXJhbWV0ZXJzLCByZXR1cm5UeXBlKSk7XG5cdFx0dGhpcy5wYXJhbWV0ZXJTeW1ib2xzID0gcGFyYW1ldGVycztcblx0XHR0aGlzLnJldHVyblR5cGUgPSByZXR1cm5UeXBlO1xuXHR9XG5cblx0c3RhdGljIGNyZWF0ZVNpZ25hdHVyZShwYXJhbWV0ZXJzOiBQYXJhbWV0ZXJTeW1ib2xbXSwgcmV0dXJuVHlwZTogVHlwZSk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGBsYW1iZGEoJHtwYXJhbWV0ZXJzLm1hcChwYXJhbWV0ZXIgPT4gcGFyYW1ldGVyLnBhcmFtZXRlclR5cGUudG9TdHJpbmcoKSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbignLCAnKX0pIC0+ICR7cmV0dXJuVHlwZS50b1N0cmluZygpfSlgO1xuXHR9XG5cblx0b3ZlcnJpZGUgZXF1YWxzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0aWYgKCEob3RoZXIgaW5zdGFuY2VvZiBMYW1iZGFUeXBlKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnBhcmFtZXRlclN5bWJvbHMubGVuZ3RoICE9PSBvdGhlci5wYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBvdGhlclR5cGUgPSBvdGhlci5wYXJhbWV0ZXJTeW1ib2xzW2ldPy5wYXJhbWV0ZXJUeXBlO1xuXG5cdFx0XHRpZiAoIW90aGVyVHlwZSB8fCAhdGhpcy5wYXJhbWV0ZXJTeW1ib2xzW2ldPy5wYXJhbWV0ZXJUeXBlLmFjY2VwdHMob3RoZXJUeXBlKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucmV0dXJuVHlwZS5hY2NlcHRzKG90aGVyLnJldHVyblR5cGUpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlU2NvcGUge1xuXHRyZWFkb25seSBwYXJlbnQ6IFR5cGVTY29wZSB8IG51bGw7XG5cdHJlYWRvbmx5IHR5cGVzOiBNYXA8c3RyaW5nLCBUeXBlPiA9IG5ldyBNYXAoKTtcblx0cmVhZG9ubHkgdHlwZUJpbmRpbmdzOiBNYXA8c3RyaW5nLCBUeXBlPiA9IG5ldyBNYXAoKTtcblxuXHRjdXJyZW50T2JqZWN0U3ltYm9sOiBDbGFzc1N5bWJvbCB8IEludGVyZmFjZVN5bWJvbCB8IG51bGw7XG5cdGN1cnJlbnRNZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKHBhcmVudDogVHlwZVNjb3BlIHwgbnVsbCA9IG51bGwpIHtcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcblx0XHR0aGlzLmN1cnJlbnRPYmplY3RTeW1ib2wgPSBwYXJlbnQ/LmN1cnJlbnRPYmplY3RTeW1ib2wgPz8gbnVsbDtcblx0XHR0aGlzLmN1cnJlbnRNZXRob2RTeW1ib2wgPSBwYXJlbnQ/LmN1cnJlbnRNZXRob2RTeW1ib2wgPz8gbnVsbDtcblx0fVxuXG5cdGRlZmluZVR5cGUobmFtZTogc3RyaW5nLCB0eXBlOiBUeXBlKTogdm9pZCB7XG5cdFx0dGhpcy50eXBlcy5zZXQobmFtZSwgdHlwZSk7XG5cdH1cblxuXHRkZWZpbmVUeXBlQmluZGluZyhuYW1lOiBzdHJpbmcsIHR5cGVWYXJpYWJsZTogVHlwZVZhcmlhYmxlKTogdm9pZCB7XG5cdFx0dGhpcy50eXBlQmluZGluZ3Muc2V0KG5hbWUsIHR5cGVWYXJpYWJsZSk7XG5cdH1cblxuXHRoYXNUeXBlKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnR5cGVzLmhhcyhuYW1lKSB8fCB0aGlzLnBhcmVudD8uaGFzVHlwZShuYW1lKSB8fCBmYWxzZTtcblx0fVxuXG5cdGhhc1R5cGVCaW5kaW5nKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnR5cGVCaW5kaW5ncy5oYXMobmFtZSkgfHwgdGhpcy5wYXJlbnQ/Lmhhc1R5cGVCaW5kaW5nKG5hbWUpIHx8IGZhbHNlO1xuXHR9XG5cblx0Z2V0VHlwZShuYW1lOiBzdHJpbmcpOiBUeXBlIHtcblx0XHRpZiAodGhpcy50eXBlcy5oYXMobmFtZSkpIHtcblx0XHRcdHJldHVybiB0aGlzLnR5cGVzLmdldChuYW1lKSB8fCBUeXBlcy5OVUxMO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5wYXJlbnQ/LmdldFR5cGUobmFtZSkgfHwgVHlwZXMuTlVMTDtcblx0fVxuXG5cdGdldFR5cGVCaW5kaW5nKG5hbWU6IHN0cmluZyk6IFR5cGUge1xuXHRcdGlmICh0aGlzLnR5cGVCaW5kaW5ncy5oYXMobmFtZSkpIHtcblx0XHRcdHJldHVybiB0aGlzLnR5cGVCaW5kaW5ncy5nZXQobmFtZSkgfHwgVHlwZXMuTlVMTDtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMucGFyZW50Py5nZXRUeXBlQmluZGluZyhuYW1lKSB8fCBUeXBlcy5OVUxMO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwVHlwZSh0eXBlTm9kZTogQVNUVHlwZU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgc2NvcGU6IFR5cGVTY29wZSB8IG51bGwgPSBudWxsKTogVHlwZSB7XG5cdGxldCBiYXNlVHlwZSA9IHJlc29sdmVCYXNlVHlwZSh0eXBlTm9kZSwgb2JqZWN0UmVnaXN0cnksIHNjb3BlKTtcblx0aWYgKGJhc2VUeXBlKSB7XG5cdFx0aWYgKCEoYmFzZVR5cGUgaW5zdGFuY2VvZiBOdWxsYWJsZVR5cGUpICYmIHR5cGVOb2RlLm51bGxhYmxlKSB7XG5cdFx0XHRyZXR1cm4gbmV3IE51bGxhYmxlVHlwZShiYXNlVHlwZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGJhc2VUeXBlO1xuXHR9XG5cblx0dGhyb3dUeXBlRXJyb3IoYENvdWxkIG5vdCByZXNvbHZlIHR5cGUgJHt0eXBlTm9kZS5uYW1lfS5gLCB0eXBlTm9kZS5zcGFuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVCYXNlVHlwZSh0eXBlTm9kZTogQVNUVHlwZU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgc2NvcGU6IFR5cGVTY29wZSB8IG51bGwgPSBudWxsKTogVHlwZSB7XG5cdHN3aXRjaCAodHlwZU5vZGUua2luZCkge1xuXHRcdGNhc2UgQVNUVHlwZU5vZGUuS0lORF9TSU1QTEU6IHtcblx0XHRcdGlmIChzY29wZSAmJiBzY29wZS5oYXNUeXBlQmluZGluZyh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gc2NvcGUuZ2V0VHlwZUJpbmRpbmcodHlwZU5vZGUubmFtZSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvYmplY3RSZWdpc3RyeS50eXBlcy5oYXNTeW1ib2wodHlwZU5vZGUubmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIHJlc29sdmVSZWZUeXBlKHR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChQcmltaXRpdmVUeXBlcy5oYXNUeXBlKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiByZXNvbHZlUHJpbWl0aXZlVHlwZSh0eXBlTm9kZSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBuZXcgVHlwZVZhcmlhYmxlKHR5cGVOb2RlLm5hbWUpO1xuXHRcdH1cblx0XHRjYXNlIEFTVFR5cGVOb2RlLktJTkRfR0VORVJJQzoge1xuXHRcdFx0aWYgKCFvYmplY3RSZWdpc3RyeS50eXBlcy5oYXNTeW1ib2wodHlwZU5vZGUubmFtZSkpIHtcblx0XHRcdFx0dGhyb3dUeXBlRXJyb3IoYFN5bWJvbCAke3R5cGVOb2RlLm5hbWV9IGlzIG5vdCBhIGNsYXNzIHJlZmVyZW5jZS5gLCB0eXBlTm9kZS5zcGFuKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXNvbHZlR2VuZXJpY1JlZlR5cGUodHlwZU5vZGUsIG9iamVjdFJlZ2lzdHJ5KTtcblx0XHR9XG5cdFx0Y2FzZSBBU1RUeXBlTm9kZS5LSU5EX0xBTUJEQToge1xuXHRcdFx0cmV0dXJuIHJlc29sdmVMYW1iZGFUeXBlKHR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeSk7XG5cdFx0fVxuXHRcdGRlZmF1bHQ6IHtcblx0XHRcdHRocm93VHlwZUVycm9yKFxuXHRcdFx0XHRgSW52YWxpZCB0eXBlIGFubm90YXRpb24sIGtpbmQgJHt0eXBlTm9kZS5raW5kfS5gLFxuXHRcdFx0XHR0eXBlTm9kZS5zcGFuXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVJlZlR5cGUodHlwZU5vZGU6IEFTVFR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpOiBDbGFzc1JlZlR5cGUgfCBJbnRlcmZhY2VSZWZUeXBlIHwgVHlwZSB7XG5cdGlmICh0eXBlTm9kZS50eXBlQXJndW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHR0aHJvd1R5cGVFcnJvcihgR2VuZXJpYyBjbGFzcyAke3R5cGVOb2RlLm5hbWV9IGNhbm5vdCBoYXZlIHR5cGUgYXJndW1lbnRzLmAsIHR5cGVOb2RlLnNwYW4pO1xuXHR9XG5cblx0aWYgKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmNsYXNzU3ltYm9scy5oYXModHlwZU5vZGUubmFtZSkpIHtcblx0XHRyZXR1cm4gbmV3IENsYXNzUmVmVHlwZShvYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbCh0eXBlTm9kZS5uYW1lKSk7XG5cdH1cblxuXHRpZiAob2JqZWN0UmVnaXN0cnkudHlwZXMuaW50ZXJmYWNlU3ltYm9scy5oYXModHlwZU5vZGUubmFtZSkpIHtcblx0XHRyZXR1cm4gbmV3IEludGVyZmFjZVJlZlR5cGUob2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0SW50ZXJhY2VTeW1ib2wodHlwZU5vZGUubmFtZSkpO1xuXHR9XG5cblx0dGhyb3dUeXBlRXJyb3IoYFVua25vd24gY2xhc3Mgb3IgaW50ZXJmYWNlICR7dHlwZU5vZGUubmFtZX0uYCwgdHlwZU5vZGUuc3Bhbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlR2VuZXJpY1JlZlR5cGUodHlwZU5vZGU6IEFTVFR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpOiBDbGFzc1JlZlR5cGUgfCBJbnRlcmZhY2VSZWZUeXBlIHwgVHlwZSB7XG5cdGlmIChvYmplY3RSZWdpc3RyeS50eXBlcy5jbGFzc1N5bWJvbHMuaGFzKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0cmV0dXJuIG5ldyBDbGFzc1JlZlR5cGUoXG5cdFx0XHRvYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbCh0eXBlTm9kZS5uYW1lKSxcblx0XHRcdHR5cGVOb2RlLnR5cGVBcmd1bWVudHMubWFwKHR5cGVBcmd1bWVudCA9PiByZXNvbHZlQmFzZVR5cGUodHlwZUFyZ3VtZW50LCBvYmplY3RSZWdpc3RyeSkpXG5cdFx0KTtcblx0fVxuXG5cdGlmIChvYmplY3RSZWdpc3RyeS50eXBlcy5pbnRlcmZhY2VTeW1ib2xzLmhhcyh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdHJldHVybiBuZXcgSW50ZXJmYWNlUmVmVHlwZShcblx0XHRcdG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldEludGVyYWNlU3ltYm9sKHR5cGVOb2RlLm5hbWUpLFxuXHRcdFx0dHlwZU5vZGUudHlwZUFyZ3VtZW50cy5tYXAodHlwZUFyZ3VtZW50ID0+IHJlc29sdmVCYXNlVHlwZSh0eXBlQXJndW1lbnQsIG9iamVjdFJlZ2lzdHJ5KSlcblx0XHQpO1xuXHR9XG5cblx0dGhyb3dUeXBlRXJyb3IoYFVua25vd24gY2xhc3Mgb3IgaW50ZXJmYWNlICR7dHlwZU5vZGUubmFtZX0uYCwgdHlwZU5vZGUuc3Bhbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlUHJpbWl0aXZlVHlwZSh0eXBlTm9kZTogQVNUVHlwZU5vZGUpOiBUeXBlIHtcblx0cmV0dXJuIFR5cGVzLmdldFR5cGUodHlwZU5vZGUubmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlTGFtYmRhVHlwZSh0eXBlTm9kZTogQVNUVHlwZU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgc2NvcGU6IFR5cGVTY29wZSB8IG51bGwgPSBudWxsKTogTGFtYmRhVHlwZSB7XG5cdGNvbnN0IHBhcmFtZXRlclN5bWJvbHMgPSB0eXBlTm9kZS5wYXJhbWV0ZXJUeXBlcy5tYXAoXG5cdFx0dHlwZUFubm90YXRpb24gPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBQYXJhbWV0ZXJTeW1ib2woXG5cdFx0XHRcdHR5cGVBbm5vdGF0aW9uLm5hbWUsXG5cdFx0XHRcdHdyYXBUeXBlKHR5cGVBbm5vdGF0aW9uLCBvYmplY3RSZWdpc3RyeSwgc2NvcGUpXG5cdFx0XHQpO1xuXHRcdH1cblx0KTtcblxuXHRyZXR1cm4gbmV3IExhbWJkYVR5cGUoXG5cdFx0cGFyYW1ldGVyU3ltYm9scyxcblx0XHR0eXBlTm9kZS5yZXR1cm5UeXBlXG5cdFx0XHQ/IHdyYXBUeXBlKHR5cGVOb2RlLnJldHVyblR5cGUsIG9iamVjdFJlZ2lzdHJ5LCBzY29wZSlcblx0XHRcdDogVHlwZXMuTUlYRURcblx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0aXR1dGVUeXBlKHR5cGU6IFR5cGUsIHN1YnN0aXR1dGlvbk1hcDogTWFwPHN0cmluZywgVHlwZT4pOiBUeXBlIHtcblx0aWYgKHR5cGUgaW5zdGFuY2VvZiBUeXBlVmFyaWFibGUpIHtcblx0XHRyZXR1cm4gc3Vic3RpdHV0aW9uTWFwLmdldCh0eXBlLm5hbWUpID8/IHR5cGU7XG5cdH1cblxuXHRpZiAodHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSkge1xuXHRcdHJldHVybiBuZXcgQ2xhc3NSZWZUeXBlKFxuXHRcdFx0dHlwZS5jbGFzc1N5bWJvbCxcblx0XHRcdHR5cGUudHlwZUFyZ3VtZW50cy5tYXAodHlwZUFyZ3VtZW50ID0+IHN1YnN0aXR1dGVUeXBlKHR5cGVBcmd1bWVudCwgc3Vic3RpdHV0aW9uTWFwKSlcblx0XHQpO1xuXHR9XG5cblx0aWYgKHR5cGUgaW5zdGFuY2VvZiBOdWxsYWJsZVR5cGUpIHtcblx0XHRyZXR1cm4gbmV3IE51bGxhYmxlVHlwZShzdWJzdGl0dXRlVHlwZSh0eXBlLmlubmVyLCBzdWJzdGl0dXRpb25NYXApKTtcblx0fVxuXG5cdHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRUeXBlU3Vic3RpdHV0aW9uTWFwKHR5cGVQYXJhbWV0ZXJzOiBUeXBlUGFyYW1ldGVyU3ltYm9sW10sIHR5cGVBcmd1bWVudHM6IFR5cGVbXSk6IE1hcDxzdHJpbmcsIFR5cGU+IHtcblx0Y29uc3Qgc3Vic3RpdHV0aW9uTWFwID0gbmV3IE1hcCgpO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgdHlwZVBhcmFtZXRlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCB0eXBlUGFyYW1ldGVyOiBUeXBlUGFyYW1ldGVyU3ltYm9sIHwgbnVsbCA9IHR5cGVQYXJhbWV0ZXJzW2ldIHx8IG51bGw7XG5cdFx0Y29uc3QgdHlwZUFyZ3VtZW50OiBUeXBlIHwgbnVsbCA9IHR5cGVBcmd1bWVudHNbaV0gfHwgbnVsbDtcblxuXHRcdGlmICh0eXBlUGFyYW1ldGVyICYmIHR5cGVBcmd1bWVudCkge1xuXHRcdFx0c3Vic3RpdHV0aW9uTWFwLnNldCh0eXBlUGFyYW1ldGVyLm5hbWUsIHR5cGVBcmd1bWVudCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN1YnN0aXR1dGlvbk1hcDtcbn1cbiIsCiAgICAiaW1wb3J0IHtDbGFzc1JlZlR5cGUsIFR5cGUsIFR5cGVzfSBmcm9tIFwiLi90eXBlX29iamVjdHNcIjtcbmltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuaW1wb3J0IHt0aHJvd1J1bnRpbWVFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuXG5leHBvcnQgY2xhc3MgQXV0b2JveGVkVHlwZXMge1xuXHRzdGF0aWMgTlVNQkVSOiBzdHJpbmcgPSAnTnVtYmVyJztcblx0c3RhdGljIFNUUklORzogc3RyaW5nID0gJ1N0cmluZyc7XG5cdHN0YXRpYyBCT09MRUFOOiBzdHJpbmcgPSAnQm9vbGVhbic7XG5cblx0c3RhdGljIENMQVNTTkFNRV9NQVA6IHsgW3M6IHN0cmluZ106IHN0cmluZzsgfSA9IHtcblx0XHRudW1iZXI6IEF1dG9ib3hlZFR5cGVzLk5VTUJFUixcblx0XHRzdHJpbmc6IEF1dG9ib3hlZFR5cGVzLlNUUklORyxcblx0XHRib29sZWFuOiBBdXRvYm94ZWRUeXBlcy5CT09MRUFOXG5cdH07XG5cblx0c3RhdGljIGdldENsYXNzTmFtZShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0Y29uc3QgY2xhc3NOYW1lID0gQXV0b2JveGVkVHlwZXMuQ0xBU1NOQU1FX01BUFtrZXldO1xuXHRcdGlmICghY2xhc3NOYW1lKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgTm8gY2xhc3MgZm91bmQgZm9yIHByaW1pdGl2ZSB0eXBlICR7a2V5fS5gKTtcblx0XHR9XG5cdFx0cmV0dXJuIGNsYXNzTmFtZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQXV0b2JveGluZyB7XG5cdHN0YXRpYyBDTEFTU05BTUVfTUFQOiBNYXA8VHlwZSwgc3RyaW5nPiA9IG5ldyBNYXAoXG5cdFx0W1xuXHRcdFx0W1R5cGVzLk5VTUJFUiwgQXV0b2JveGVkVHlwZXMuTlVNQkVSXSxcblx0XHRcdFtUeXBlcy5TVFJJTkcsIEF1dG9ib3hlZFR5cGVzLlNUUklOR10sXG5cdFx0XHRbVHlwZXMuQk9PTEVBTiwgQXV0b2JveGVkVHlwZXMuQk9PTEVBTl1cblx0XHRdXG5cdCk7XG5cblx0c3RhdGljIGF1dG9ib3hJZk5lZWRlZChvYmplY3RUeXBlOiBUeXBlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpOiBDbGFzc1JlZlR5cGUgfCBUeXBlIHtcblx0XHRjb25zdCBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCA9IEF1dG9ib3hpbmcuQ0xBU1NOQU1FX01BUC5nZXQob2JqZWN0VHlwZSk7XG5cdFx0aWYgKGNsYXNzTmFtZSkge1xuXHRcdFx0cmV0dXJuIG5ldyBDbGFzc1JlZlR5cGUob2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2woY2xhc3NOYW1lKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG9iamVjdFR5cGU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtcblx0Q2xhc3NEZWZpbml0aW9uLFxuXHRDbGFzc01ldGhvZERlZmluaXRpb24sXG5cdEVudmlyb25tZW50LFxuXHRFeGVjdXRpb25TdG9wLFxuXHRJbnN0YW5jZSxcblx0UmV0dXJuVmFsdWVcbn0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB7XG5cdEFTVEFubm90YXRpb25Ob2RlLFxuXHRBU1RBcnJheU5vZGUsXG5cdEFTVEFzc2lnbm1lbnROb2RlLFxuXHRBU1RCaW5hcnlOb2RlLFxuXHRBU1RDYWxsTm9kZSxcblx0QVNUQ2xhc3NOb2RlLFxuXHRBU1RFeHByZXNzaW9uTm9kZSxcblx0QVNURm9yZWFjaE5vZGUsXG5cdEFTVElmTm9kZSxcblx0QVNUSW5kZXhOb2RlLFxuXHRBU1RMYW1iZGFOb2RlLFxuXHRBU1RNYXRjaENhc2VOb2RlLFxuXHRBU1RNYXRjaE5vZGUsXG5cdEFTVE1lbWJlck5vZGUsXG5cdEFTVE1ldGhvZE5vZGUsXG5cdEFTVE5ld05vZGUsXG5cdEFTVE5vZGUsXG5cdEFTVE5vZGVUeXBlLFxuXHRBU1RPcGVyYXRvck5vZGUsXG5cdEFTVFBhcmFtZXRlck5vZGUsXG5cdEFTVFJldHVybk5vZGUsXG5cdEFTVFR5cGVOb2RlLFxuXHRBU1RVbmFyeU5vZGUsXG5cdEFTVFZhcmlhYmxlTm9kZSxcblx0QVNUVkRvbUV4cHJlc3Npb25Ob2RlLFxuXHRBU1RWRG9tTm9kZSxcblx0QVNUVkRvbVRleHROb2RlXG59IGZyb20gXCIuLi9hc3RcIjtcbmltcG9ydCB7R1JBTU1BUiwgVFlQRV9FTlVNfSBmcm9tIFwiLi4vZ3JhbW1hclwiO1xuaW1wb3J0IHtOYXRpdmVDbGFzc2VzfSBmcm9tIFwiLi4vLi4vbGlicmFyeS9uYXRpdmVfY2xhc3Nlc1wiO1xuaW1wb3J0IHtOYXRpdmVGdW5jdGlvbnMsIE5hdGl2ZUZ1bmN0aW9uVHlwZVJlZ2lzdHJ5fSBmcm9tIFwiLi4vLi4vbGlicmFyeS9uYXRpdmVfZnVuY3Rpb25zXCI7XG5pbXBvcnQge2Nhc3RWYWx1ZSwgZnJvbUx5cmFWYWx1ZSwgTHlyYU5hdGl2ZU9iamVjdCwgcmV0dXJuVmFsdWUsIHdyYXBOYXRpdmVJbnN0YW5jZX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfY29udmVyc2lvblwiO1xuaW1wb3J0IHt0aHJvd1J1bnRpbWVFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuaW1wb3J0IHtBdXRvYm94ZWRUeXBlc30gZnJvbSBcIi4uL3R5cGVzL2F1dG9ib3hpbmdcIjtcbmltcG9ydCB7THlyYUFycmF5fSBmcm9tIFwiLi4vLi4vbGlicmFyeS9jbGFzc2VzL2FycmF5XCI7XG5pbXBvcnQgdHlwZSB7VkNoaWxkfSBmcm9tIFwiLi4vdmRvbS92ZG9tXCI7XG5pbXBvcnQgdHlwZSB7RXZlbnRQaXBlbGluZX0gZnJvbSBcIi4uL2V2ZW50L3BpcGVsaW5lXCI7XG5cbmNvbnN0IG5hdGl2ZUNsYXNzZXMgPSBuZXcgTmF0aXZlQ2xhc3NlcygpO1xuY29uc3QgbmF0aXZlRnVuY3Rpb25zID0gbmV3IE5hdGl2ZUZ1bmN0aW9ucygpO1xuY29uc3QgZ2xvYmFsRnVuY3Rpb25zID0gbmF0aXZlRnVuY3Rpb25zLmdldEdsb2JhbEZ1bmN0aW9ucygpO1xuY29uc3QgZ2xvYmFsRnVuY3Rpb25UeXBlUmVnaXN0cnk6IE5hdGl2ZUZ1bmN0aW9uVHlwZVJlZ2lzdHJ5ID0gbmF0aXZlRnVuY3Rpb25zLmdldEdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5KCk7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEZ1bmN0aW9uQ2FsbCB7XG5cdHByaXZhdGUgcmVhZG9ubHkgbm9kZTogQVNUTm9kZTtcblx0cHJvdGVjdGVkIHJlYWRvbmx5IGZ1bmN0aW9uRW52OiBFbnZpcm9ubWVudDtcblx0cHJvdGVjdGVkIHJlYWRvbmx5IG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeTtcblx0cHJvdGVjdGVkIHJlYWRvbmx5IGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmU7XG5cdHByb3RlY3RlZCByZWFkb25seSB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0bm9kZTogQVNUTm9kZSxcblx0XHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksXG5cdFx0ZnVuY3Rpb25FbnY6IEVudmlyb25tZW50LFxuXHRcdGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsXG5cdFx0dGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsXG5cdCkge1xuXHRcdHRoaXMubm9kZSA9IG5vZGU7XG5cdFx0dGhpcy5vYmplY3RSZWdpc3RyeSA9IG9iamVjdFJlZ2lzdHJ5O1xuXHRcdHRoaXMuZnVuY3Rpb25FbnYgPSBmdW5jdGlvbkVudjtcblx0XHR0aGlzLmV2ZW50UGlwZWxpbmUgPSBldmVudFBpcGVsaW5lO1xuXHRcdHRoaXMudGhpc1ZhbHVlID0gdGhpc1ZhbHVlO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldENhbGxOb2RlKCk6IEFTVENhbGxOb2RlIHtcblx0XHRpZiAoISh0aGlzLm5vZGUgaW5zdGFuY2VvZiBBU1RDYWxsTm9kZSkpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIG5hdGl2ZSBmdW5jdGlvbiBjYWxsICR7dGhpcy5ub2RlLnR5cGV9LmAsIHRoaXMubm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMubm9kZTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRMYW1iZGFOb2RlKCk6IEFTVExhbWJkYU5vZGUge1xuXHRcdGlmICghKHRoaXMubm9kZSBpbnN0YW5jZW9mIEFTVExhbWJkYU5vZGUpKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBsYW1iZGEgY2FsbCAke3RoaXMubm9kZS50eXBlfS5gLCB0aGlzLm5vZGUuc3Bhbik7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLm5vZGU7XG5cdH1cblxuXHRhYnN0cmFjdCBldmFsQ2FsbCguLi5hcmdzOiBhbnlbXSk6IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIExhbWJkYUZ1bmN0aW9uQ2FsbCBleHRlbmRzIEFic3RyYWN0RnVuY3Rpb25DYWxsIHtcblx0ZXZhbENhbGwoLi4uYXJnczogYW55W10pOiBhbnkge1xuXHRcdGNvbnN0IG5vZGU6IEFTVExhbWJkYU5vZGUgPSB0aGlzLmdldExhbWJkYU5vZGUoKTtcblx0XHRjb25zdCBjbG9zdXJlRW52OiBFbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudCh0aGlzLmZ1bmN0aW9uRW52KTtcblxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBub2RlLnBhcmFtZXRlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHBhcmFtZXRlcjogQVNUUGFyYW1ldGVyTm9kZSB8IG51bGwgPSBub2RlLnBhcmFtZXRlcnNbaV0gfHwgbnVsbDtcblx0XHRcdGlmICghcGFyYW1ldGVyKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Y2xvc3VyZUVudi5kZWZpbmUocGFyYW1ldGVyLm5hbWUsIGFyZ3NbaV0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmFsUmV0dXJuKFxuXHRcdFx0bm9kZS5jaGlsZHJlbixcblx0XHRcdHRoaXMub2JqZWN0UmVnaXN0cnksXG5cdFx0XHRjbG9zdXJlRW52LFxuXHRcdFx0dGhpcy5ldmVudFBpcGVsaW5lLFxuXHRcdFx0dGhpcy50aGlzVmFsdWUsXG5cdFx0XHRub2RlLnJldHVyblR5cGVcblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBOYXRpdmVGdW5jdGlvbkNhbGwgZXh0ZW5kcyBBYnN0cmFjdEZ1bmN0aW9uQ2FsbCB7XG5cdGV2YWxDYWxsKC4uLmFyZ3M6IGFueVtdKTogYW55IHtcblx0XHRjb25zdCBjYWxsTm9kZTogQVNUQ2FsbE5vZGUgPSB0aGlzLmdldENhbGxOb2RlKCk7XG5cblx0XHRsZXQgcmVzdWx0OiBhbnkgPSB0aGlzLnJlc29sdmVDYWxsKCkoLi4uYXJncyk7XG5cdFx0aWYgKHJlc3VsdCBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdHJlc3VsdCA9IHdyYXBOYXRpdmVJbnN0YW5jZShyZXN1bHQsIHRoaXMub2JqZWN0UmVnaXN0cnkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHQgPSByZXR1cm5WYWx1ZShyZXN1bHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmFsUmV0dXJuKFxuXHRcdFx0W3Jlc3VsdF0sXG5cdFx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0dGhpcy5mdW5jdGlvbkVudixcblx0XHRcdHRoaXMuZXZlbnRQaXBlbGluZSxcblx0XHRcdHRoaXMudGhpc1ZhbHVlLFxuXHRcdFx0Z2xvYmFsRnVuY3Rpb25UeXBlUmVnaXN0cnkuZ2V0KGNhbGxOb2RlLmNhbGxlZS5uYW1lKS5yZXR1cm5UeXBlXG5cdFx0KTtcblx0fVxuXG5cdHJlc29sdmVDYWxsKCk6IGFueSB7XG5cdFx0Y29uc3Qgbm9kZTogQVNUQ2FsbE5vZGUgfCBudWxsID0gdGhpcy5nZXRDYWxsTm9kZSgpO1xuXG5cdFx0aWYgKG5vZGUgPT09IG51bGwpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKCdJbnZhbGlkIGZ1bmN0aW9uIGNhbGwuJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2YWxFeHByZXNzaW9uKFxuXHRcdFx0bm9kZS5jYWxsZWUsXG5cdFx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0dGhpcy5mdW5jdGlvbkVudixcblx0XHRcdHRoaXMuZXZlbnRQaXBlbGluZSxcblx0XHRcdHRoaXMudGhpc1ZhbHVlXG5cdFx0KVtub2RlLmNhbGxlZS5uYW1lXTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJOYXRpdmVDbGFzc2VzKG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogdm9pZCB7XG5cdGZvciAoY29uc3QgbmF0aXZlQ2xhc3Mgb2YgbmF0aXZlQ2xhc3Nlcy5yZWdpc3RyeS52YWx1ZXMoKSkge1xuXHRcdGlmIChuYXRpdmVDbGFzcy5pc0F1dG9sb2FkQWJsZSkge1xuXHRcdFx0Y29uc3QgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiA9IG5hdGl2ZUNsYXNzLmdldENsYXNzRGVmaW5pdGlvbigpO1xuXHRcdFx0b2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5zZXQobmF0aXZlQ2xhc3MubmFtZSwgY2xhc3NEZWYpO1xuXHRcdFx0ZW52aXJvbm1lbnQuZGVmaW5lKG5hdGl2ZUNsYXNzLm5hbWUsIGNsYXNzRGVmKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTmF0aXZlRnVuY3Rpb25zKGVudmlyb25tZW50OiBFbnZpcm9ubWVudCk6IHZvaWQge1xuXHRmb3IgKGNvbnN0IG5hbWUgaW4gZ2xvYmFsRnVuY3Rpb25zKSB7XG5cdFx0Y29uc3QgZ2xvYmFsRnVuY3Rpb246IGFueSA9IGdsb2JhbEZ1bmN0aW9uc1tuYW1lXTtcblx0XHRpZiAoIWdsb2JhbEZ1bmN0aW9uKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcignR2xvYmFsIGZ1bmN0aW9uIGlzIG51bGwuJyk7XG5cdFx0fVxuXHRcdGVudmlyb25tZW50LmRlZmluZShuYW1lLCBnbG9iYWxGdW5jdGlvbnMpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsTm9kZShcblx0bm9kZTogQVNUTm9kZSxcblx0b2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LFxuXHRlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsXG5cdGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsXG5cdHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbFxuKTogYW55IHtcblx0aWYgKG5vZGUuaXNFeHByZXNzaW9uKSB7XG5cdFx0cmV0dXJuIG5ldyBSZXR1cm5WYWx1ZShldmFsRXhwcmVzc2lvbihub2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSkpO1xuXHR9XG5cblx0c3dpdGNoIChub2RlLnR5cGUpIHtcblx0XHRjYXNlIEFTVE5vZGVUeXBlLlBST0dSQU06IHtcblx0XHRcdGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuXHRcdFx0XHRldmFsTm9kZShjaGlsZCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuSU1QT1JUOlxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuSU5URVJGQUNFOiB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5DTEFTUzoge1xuXHRcdFx0cmV0dXJuIGV2YWxDbGFzcyhub2RlIGFzIEFTVENsYXNzTm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5WQVJJQUJMRToge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RWYXJpYWJsZU5vZGUpIHtcblx0XHRcdFx0Y29uc3QgdmFsdWU6IGFueSA9IG5vZGUuaW5pdFxuXHRcdFx0XHRcdD8gZXZhbEV4cHJlc3Npb24obm9kZS5pbml0LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSlcblx0XHRcdFx0XHQ6IG51bGw7XG5cdFx0XHRcdGVudmlyb25tZW50LmRlZmluZShub2RlLm5hbWUsIHZhbHVlKTtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCB2YXJpYWJsZSBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLklGOiB7XG5cdFx0XHRyZXR1cm4gZXZhbElmKG5vZGUgYXMgQVNUSWZOb2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuTUFUQ0g6IHtcblx0XHRcdHJldHVybiBldmFsTWF0Y2gobm9kZSBhcyBBU1RNYXRjaE5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5GT1JFQUNIOiB7XG5cdFx0XHRyZXR1cm4gZXZhbEZvcmVhY2gobm9kZSBhcyBBU1RGb3JlYWNoTm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLlZET006IHtcblx0XHRcdHJldHVybiBldmFsVkRvbU5vZGUobm9kZSBhcyBBU1RWRG9tTm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkVYUFJFU1NJT046IHtcblx0XHRcdHJldHVybiBldmFsRXhwcmVzc2lvbihcblx0XHRcdFx0KG5vZGUgYXMgQVNURXhwcmVzc2lvbk5vZGUpLmV4cHIsXG5cdFx0XHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0XHRlbnZpcm9ubWVudCxcblx0XHRcdFx0ZXZlbnRQaXBlbGluZSxcblx0XHRcdFx0dGhpc1ZhbHVlXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLlJFVFVSTjoge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RSZXR1cm5Ob2RlKSB7XG5cdFx0XHRcdGNvbnN0IHZhbHVlOiBhbnkgPSBub2RlLmFyZ3VtZW50XG5cdFx0XHRcdFx0PyBldmFsRXhwcmVzc2lvbihub2RlLmFyZ3VtZW50LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSlcblx0XHRcdFx0XHQ6IG51bGw7XG5cdFx0XHRcdHJldHVybiBuZXcgUmV0dXJuVmFsdWUodmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgcmV0dXJuIG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXHRcdGRlZmF1bHQ6IHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBVbmhhbmRsZWQgbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEVtcHR5SW5zdGFuY2Uobm9kZTogQVNUQ2xhc3NOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpOiBJbnN0YW5jZSB7XG5cdGxldCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uO1xuXG5cdGlmIChvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmhhcyhub2RlLm5hbWUpKSB7XG5cdFx0Y2xhc3NEZWYgPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChub2RlLm5hbWUpO1xuXHR9IGVsc2Uge1xuXHRcdGNsYXNzRGVmID0gQ2xhc3NEZWZpbml0aW9uLmZyb21BU1Qobm9kZSk7XG5cdFx0b2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5zZXQobm9kZS5uYW1lLCBjbGFzc0RlZik7XG5cdH1cblxuXHRyZXR1cm4gY2xhc3NEZWYuY29uc3RydWN0RW1wdHlJbnN0YW5jZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0TmF0aXZlSW5zdGFuY2UoZXhwcjogQVNUTmV3Tm9kZSwgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiBJbnN0YW5jZSB7XG5cdHJldHVybiBjbGFzc0RlZi5jb25zdHJ1Y3ROYXRpdmVJbnN0YW5jZUJ5TmV3Tm9kZShleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0SW5zdGFuY2UoZXhwcjogQVNUTmV3Tm9kZSwgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiBJbnN0YW5jZSB7XG5cdHJldHVybiBjbGFzc0RlZi5jb25zdHJ1Y3RJbnN0YW5jZUJ5TmV3Tm9kZShleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbENsYXNzKG5vZGU6IEFTVENsYXNzTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiB2b2lkIHtcblx0Y29uc3QgaW5zdGFuY2U6IEluc3RhbmNlID0gY29uc3RydWN0RW1wdHlJbnN0YW5jZShub2RlLCBvYmplY3RSZWdpc3RyeSk7XG5cblx0aW5zdGFuY2UuaW5pdGlhbGl6ZUluc3RhbmNlRmllbGRzKG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG5cblx0ZW52aXJvbm1lbnQuZGVmaW5lKG5vZGUubmFtZSwgaW5zdGFuY2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbE5ldyhleHByOiBBU1ROZXdOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IEluc3RhbmNlIHtcblx0aWYgKCFvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmhhcyhleHByLm5hbWUpKSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVua25vd24gY2xhc3MgJHtleHByLm5hbWV9LmAsIGV4cHIuc3Bhbik7XG5cdH1cblxuXHRjb25zdCBjbGFzc0RlZiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KGV4cHIubmFtZSk7XG5cdGlmIChjbGFzc0RlZi5uYXRpdmVJbnN0YW5jZSkge1xuXHRcdHJldHVybiBjb25zdHJ1Y3ROYXRpdmVJbnN0YW5jZShleHByLCBjbGFzc0RlZiwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcblx0fVxuXG5cdHJldHVybiBjb25zdHJ1Y3RJbnN0YW5jZShleHByLCBjbGFzc0RlZiwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxFeHByZXNzaW9uKGV4cHI6IEFTVE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRzd2l0Y2ggKGV4cHIudHlwZSkge1xuXHRcdGNhc2UgQVNUTm9kZVR5cGUuU1RSSU5HOlxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuTlVNQkVSOlxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuQk9PTEVBTjoge1xuXHRcdFx0cmV0dXJuIGV4cHIudmFsdWU7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuTlVMTDoge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuSURFTlRJRklFUjoge1xuXHRcdFx0cmV0dXJuIGVudmlyb25tZW50LmdldChleHByLm5hbWUpO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLlRISVM6IHtcblx0XHRcdGlmICghdGhpc1ZhbHVlKSB7XG5cdFx0XHRcdHRocm93UnVudGltZUVycm9yKGB0aGlzIHVzZWQgb3V0c2lkZSBvZiBtZXRob2QuYCwgZXhwci5zcGFuKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzVmFsdWU7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuQklOQVJZOiB7XG5cdFx0XHRyZXR1cm4gZXZhbEJpbmFyeShleHByIGFzIEFTVEJpbmFyeU5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5VTkFSWToge1xuXHRcdFx0cmV0dXJuIGV2YWxVbmFyeShleHByIGFzIEFTVFVuYXJ5Tm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkFTU0lHTk1FTlQ6IHtcblx0XHRcdHJldHVybiBldmFsQXNzaWduKGV4cHIgYXMgQVNUQXNzaWdubWVudE5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5NRU1CRVI6IHtcblx0XHRcdHJldHVybiBldmFsTWVtYmVyKGV4cHIgYXMgQVNUTWVtYmVyTm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkNBTEw6IHtcblx0XHRcdHJldHVybiBldmFsQ2FsbChleHByIGFzIEFTVENhbGxOb2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuVkRPTToge1xuXHRcdFx0cmV0dXJuIGV2YWxWRG9tTm9kZShleHByIGFzIEFTVFZEb21Ob2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuTkVXOiB7XG5cdFx0XHRyZXR1cm4gZXZhbE5ldyhleHByIGFzIEFTVE5ld05vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuQVJSQVk6IHtcblx0XHRcdHJldHVybiBldmFsQXJyYXkoZXhwciBhcyBBU1RBcnJheU5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5JTkRFWDoge1xuXHRcdFx0cmV0dXJuIGV2YWxJbmRleChleHByIGFzIEFTVEluZGV4Tm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkxBTUJEQToge1xuXHRcdFx0cmV0dXJuIGV2YWxMYW1iZGEoZXhwciBhcyBBU1RMYW1iZGFOb2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0fVxuXHRcdGRlZmF1bHQ6IHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBVbmhhbmRsZWQgZXhwcmVzc2lvbiAke2V4cHIudHlwZX0uYCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxCaW5hcnkoZXhwcjogQVNUQmluYXJ5Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGNvbnN0IGxlZnQ6IGFueSA9IGNhc3RWYWx1ZShldmFsRXhwcmVzc2lvbihleHByLmxlZnQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKSk7XG5cdGNvbnN0IHJpZ2h0OiBhbnkgPSBjYXN0VmFsdWUoZXZhbEV4cHJlc3Npb24oZXhwci5yaWdodCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpKTtcblxuXHRpZiAobGVmdCBpbnN0YW5jZW9mIEluc3RhbmNlICYmIHJpZ2h0IGluc3RhbmNlb2YgSW5zdGFuY2UpIHtcblxuXHRcdGlmIChsZWZ0Ll9fY2xhc3NEZWYubmF0aXZlSW5zdGFuY2UgJiYgcmlnaHQuX19jbGFzc0RlZi5uYXRpdmVJbnN0YW5jZSkge1xuXG5cdFx0XHRjb25zdCBtZXRob2ROYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQgPSBBU1RPcGVyYXRvck5vZGUuT1ZFUkxPQURBQkxFX09QRVJBVE9SX01FVEhPRF9NQVAuZ2V0KGV4cHIub3BlcmF0b3IpO1xuXHRcdFx0aWYgKCFtZXRob2ROYW1lKSB7XG5cdFx0XHRcdHRocm93UnVudGltZUVycm9yKGBVbmtub3duIG9wZXJhdG9yICR7ZXhwci5vcGVyYXRvcn1gKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGNhbGxJbnN0YW5jZU1ldGhvZChcblx0XHRcdFx0bGVmdCxcblx0XHRcdFx0bGVmdC5maW5kZU1ldGhvZE5vZGUobWV0aG9kTmFtZSksXG5cdFx0XHRcdFtyaWdodF0sXG5cdFx0XHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0XHRlbnZpcm9ubWVudCxcblx0XHRcdFx0ZXZlbnRQaXBlbGluZVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY2FsbEluc3RhbmNlTWV0aG9kKFxuXHRcdFx0bGVmdCxcblx0XHRcdGxlZnQuZmluZGVNZXRob2ROb2RlKGV4cHIub3BlcmF0b3IpLFxuXHRcdFx0W3JpZ2h0XSxcblx0XHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0ZW52aXJvbm1lbnQsXG5cdFx0XHRldmVudFBpcGVsaW5lXG5cdFx0KTtcblx0fVxuXG5cdHN3aXRjaCAoZXhwci5vcGVyYXRvcikge1xuXHRcdGNhc2UgR1JBTU1BUi5QTFVTOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCArIHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTUlOVVM6IHtcblx0XHRcdHJldHVybiBsZWZ0IC0gcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5NVUxUSVBMWToge1xuXHRcdFx0cmV0dXJuIGxlZnQgKiByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkRJVklERToge1xuXHRcdFx0cmV0dXJuIGxlZnQgLyByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLk1PRFVMVVM6IHtcblx0XHRcdHJldHVybiBsZWZ0ICUgcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5MRVNTX1RIQU46IHtcblx0XHRcdHJldHVybiBsZWZ0IDwgcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5HUkVBVEVSX1RIQU46IHtcblx0XHRcdHJldHVybiBsZWZ0ID4gcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5MRVNTX0VRVUFMOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCA8PSByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkdSRUFURVJfRVFVQUw6IHtcblx0XHRcdHJldHVybiBsZWZ0ID49IHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuRVFVQUw6IHtcblx0XHRcdHJldHVybiBsZWZ0ID09PSByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLk5PVF9FUVVBTDoge1xuXHRcdFx0cmV0dXJuIGxlZnQgIT09IHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuQU5EOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCAmJiByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLk9SOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCB8fCByaWdodDtcblx0XHR9XG5cdFx0ZGVmYXVsdDoge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVua25vd24gb3BlcmF0b3IgJHtleHByLm9wZXJhdG9yfWApO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEFycmF5KGV4cHI6IEFTVEFycmF5Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IEluc3RhbmNlIHtcblx0Y29uc3QgdmFsdWVzOiBhbnlbXSA9IFtdO1xuXHRmb3IgKGNvbnN0IGVsZW0gb2YgZXhwci5lbGVtZW50cykge1xuXHRcdHZhbHVlcy5wdXNoKGV2YWxFeHByZXNzaW9uKGVsZW0sIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKSk7XG5cdH1cblxuXHRjb25zdCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQoJ0FycmF5Jyk7XG5cdGNvbnN0IGluc3RhbmNlOiBJbnN0YW5jZSA9IGNsYXNzRGVmLmNvbnN0cnVjdEVtcHR5SW5zdGFuY2UoKTtcblx0aW5zdGFuY2UuX19uYXRpdmVJbnN0YW5jZSA9IG5ldyBjbGFzc0RlZi5uYXRpdmVJbnN0YW5jZShmcm9tTHlyYVZhbHVlKHZhbHVlcykpO1xuXG5cdHJldHVybiBpbnN0YW5jZTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEluZGV4KGV4cHI6IEFTVEluZGV4Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCkge1xuXHRpZiAoIWV4cHIub2JqZWN0KSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYEluZGV4IGFjY2VzcyBvbiBudWxsLmAsIGV4cHIuc3Bhbik7XG5cdH1cblxuXHRpZiAoIWV4cHIuaW5kZXgpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgQWNjZXNzIHdpdGggdW5zcGVjaWZpYyBpbmRleC5gLCBleHByLnNwYW4pO1xuXHR9XG5cblx0Y29uc3Qgb2JqZWN0OiBhbnkgPSBldmFsRXhwcmVzc2lvbihleHByLm9iamVjdCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRjb25zdCBpbmRleDogYW55ID0gZXZhbEV4cHJlc3Npb24oZXhwci5pbmRleCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXG5cdGlmICghKG9iamVjdCBpbnN0YW5jZW9mIEx5cmFBcnJheSB8fCBvYmplY3QuX19uYXRpdmVJbnN0YW5jZSBpbnN0YW5jZW9mIEx5cmFBcnJheSkpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcignSW5kZXggYWNjZXNzIG9uIG5vbi1hcnJheScsIGV4cHIuc3Bhbik7XG5cdH1cblxuXHRjb25zdCB0YXJnZXQ6IGFueSA9IG9iamVjdCBpbnN0YW5jZW9mIEx5cmFBcnJheSA/IG9iamVjdCA6IG9iamVjdC5fX25hdGl2ZUluc3RhbmNlO1xuXHRjb25zdCB2YWx1ZTogYW55ID0gdGFyZ2V0LnZhbHVlc1tpbmRleF07XG5cblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgTHlyYU5hdGl2ZU9iamVjdCkge1xuXHRcdHJldHVybiB3cmFwTmF0aXZlSW5zdGFuY2UodmFsdWUsIG9iamVjdFJlZ2lzdHJ5KTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxMYW1iZGEobm9kZTogQVNUTGFtYmRhTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBsYW1iZGFFbnY6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBMYW1iZGFGdW5jdGlvbkNhbGwge1xuXHRyZXR1cm4gbmV3IExhbWJkYUZ1bmN0aW9uQ2FsbChub2RlLCBvYmplY3RSZWdpc3RyeSwgbGFtYmRhRW52LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsQXNzaWduKGV4cHI6IEFTVEFzc2lnbm1lbnROb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0Y29uc3QgdmFsdWU6IGFueSA9IGV2YWxFeHByZXNzaW9uKGV4cHIucmlnaHQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblxuXHRpZiAoZXhwci5sZWZ0LnR5cGUgPT09IEFTVE5vZGVUeXBlLk1FTUJFUikge1xuXHRcdGlmIChleHByLmxlZnQgaW5zdGFuY2VvZiBBU1RNZW1iZXJOb2RlKSB7XG5cdFx0XHRjb25zdCBvYmplY3Q6IEluc3RhbmNlID0gZXZhbEV4cHJlc3Npb24oXG5cdFx0XHRcdGV4cHIubGVmdC5vYmplY3QsXG5cdFx0XHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0XHRlbnZpcm9ubWVudCxcblx0XHRcdFx0ZXZlbnRQaXBlbGluZSxcblx0XHRcdFx0dGhpc1ZhbHVlXG5cdFx0XHQpIGFzIEluc3RhbmNlO1xuXG5cdFx0XHRpZiAoZXhwci5sZWZ0Lm9iamVjdC50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0XHRcdG9iamVjdC5fX3N0YXRpY0ZpZWxkc1tleHByLmxlZnQucHJvcGVydHldID0gdmFsdWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvYmplY3QuX19pbnN0YW5jZUZpZWxkc1tleHByLmxlZnQucHJvcGVydHldID0gdmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdG9iamVjdC5tYXJrRGlydHkoZXZlbnRQaXBlbGluZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIG1lbWJlciBleHByZXNzaW9uICR7ZXhwci50eXBlfWAsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGVudmlyb25tZW50LnNldChleHByLmxlZnQubmFtZSwgdmFsdWUpO1xuXHR9XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxNZW1iZXIoZXhwcjogQVNUTWVtYmVyTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGNvbnN0IG9iamVjdDogSW5zdGFuY2UgfCBudWxsID0gZXZhbEV4cHJlc3Npb24oZXhwci5vYmplY3QsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0UmVnaXN0cnksXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW52aXJvbm1lbnQsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRQaXBlbGluZSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzVmFsdWUpIGFzIEluc3RhbmNlO1xuXG5cdGlmICghb2JqZWN0KSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYE1lbWJlciBhY2Nlc3Mgb24gbnVsbC5gLCBleHByLnNwYW4pO1xuXHR9XG5cblx0aWYgKGV4cHIucHJvcGVydHkgaW4gb2JqZWN0Ll9faW5zdGFuY2VGaWVsZHMpIHtcblx0XHRyZXR1cm4gb2JqZWN0Ll9faW5zdGFuY2VGaWVsZHNbZXhwci5wcm9wZXJ0eV07XG5cdH1cblxuXHRpZiAoZXhwci5wcm9wZXJ0eSBpbiBvYmplY3QuX19zdGF0aWNGaWVsZHMpIHtcblx0XHRyZXR1cm4gb2JqZWN0Ll9fc3RhdGljRmllbGRzW2V4cHIucHJvcGVydHldO1xuXHR9XG5cblx0dGhyb3dSdW50aW1lRXJyb3IoYFByb3BlcnR5ICcke2V4cHIucHJvcGVydHl9JyBub3QgZm91bmRgLCBleHByLnNwYW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbENhbGwoZXhwcjogQVNUQ2FsbE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHQvLyBzdXBlciBjYWxsIGluc2lkZSBjb25zdHJ1Y3RvclxuXHRpZiAoZXhwci5jYWxsZWUudHlwZSA9PT0gQVNUTm9kZVR5cGUuSURFTlRJRklFUiAmJiBleHByLmNhbGxlZS5uYW1lID09PSBHUkFNTUFSLlNVUEVSKSB7XG5cdFx0aWYgKCF0aGlzVmFsdWUgfHwgIXRoaXNWYWx1ZS5fX2NsYXNzRGVmPy5zdXBlckNsYXNzKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcignc3VwZXIoKSB1c2VkIG91dHNpZGUgb2Ygc3ViY2xhc3MgY29uc3RydWN0b3InKTtcblx0XHR9XG5cblx0XHRjb25zdCBzdXBlckNsYXNzRGVmID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQodGhpc1ZhbHVlLl9fY2xhc3NEZWYuc3VwZXJDbGFzcyk7XG5cdFx0Y29uc3QgY29uc3RydWN0b3JNZXRob2QgPSBzdXBlckNsYXNzRGVmLmNvbnN0cnVjdG9yTWV0aG9kO1xuXG5cdFx0aWYgKCFjb25zdHJ1Y3Rvck1ldGhvZCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY29uc3RydWN0b3JFbnYgPSBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpO1xuXHRcdGNvbnN0cnVjdG9yRW52LmRlZmluZShHUkFNTUFSLlRISVMsIHRoaXNWYWx1ZSk7XG5cblx0XHRiaW5kTWV0aG9kUGFyYW1ldGVycyhcblx0XHRcdGV4cHIsXG5cdFx0XHRjb25zdHJ1Y3Rvck1ldGhvZC5wYXJhbWV0ZXJzLFxuXHRcdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0XHRjb25zdHJ1Y3RvckVudixcblx0XHRcdGVudmlyb25tZW50LFxuXHRcdFx0ZXZlbnRQaXBlbGluZSxcblx0XHRcdHRoaXNWYWx1ZVxuXHRcdCk7XG5cblx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIGNvbnN0cnVjdG9yTWV0aG9kLmNoaWxkcmVuKSB7XG5cdFx0XHRldmFsTm9kZShjaGlsZCwgb2JqZWN0UmVnaXN0cnksIGNvbnN0cnVjdG9yRW52LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0aWYgKGV4cHIuY2FsbGVlLnR5cGUgPT09IEFTVE5vZGVUeXBlLk1FTUJFUikge1xuXHRcdGlmIChleHByLmNhbGxlZSBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpIHtcblx0XHRcdGlmIChleHByLmNhbGxlZS5vYmplY3QudHlwZSA9PT0gQVNUTm9kZVR5cGUuSURFTlRJRklFUikge1xuXHRcdFx0XHRjb25zdCBjbGFzc05hbWU6IHN0cmluZyA9IGV4cHIuY2FsbGVlLm9iamVjdC5uYW1lO1xuXG5cdFx0XHRcdGlmIChvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmhhcyhjbGFzc05hbWUpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGV2YWxTdGF0aWNDYWxsKGV4cHIsIGNsYXNzTmFtZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZXZhbEluc3RhbmNlQ2FsbChleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gZXZhbEZ1bmN0aW9uQ2FsbChleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsRnVuY3Rpb25DYWxsKGV4cHI6IEFTVENhbGxOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKSB7XG5cdGNvbnN0IGZ1bmN0aW9uQ2FsbDogYW55ID0gZXZhbEV4cHJlc3Npb24oZXhwci5jYWxsZWUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0Y29uc3QgYXJnczogYW55W10gPSBldmFsQ2FsbEFyZ3VtZW50cyhleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cblx0aWYgKGZ1bmN0aW9uQ2FsbCBpbnN0YW5jZW9mIExhbWJkYUZ1bmN0aW9uQ2FsbCkge1xuXHRcdHJldHVybiBmdW5jdGlvbkNhbGwuZXZhbENhbGwoLi4uYXJncyk7XG5cdH1cblxuXHRyZXR1cm4gKG5ldyBOYXRpdmVGdW5jdGlvbkNhbGwoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpKS5ldmFsQ2FsbCguLi5hcmdzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxTdGF0aWNDYWxsKGV4cHI6IEFTVENhbGxOb2RlLCBjbGFzc05hbWU6IHN0cmluZywgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGlmICghKGV4cHIuY2FsbGVlIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBtZW1iZXIgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHR9XG5cblx0Y29uc3QgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KGNsYXNzTmFtZSk7XG5cdGNvbnN0IG1ldGhvZERlZjogQ2xhc3NNZXRob2REZWZpbml0aW9uIHwgdW5kZWZpbmVkID0gY2xhc3NEZWYuc3RhdGljTWV0aG9kc1tleHByLmNhbGxlZS5wcm9wZXJ0eV07XG5cblx0aWYgKCFtZXRob2REZWYpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgU3RhdGljIG1ldGhvZCAke2NsYXNzTmFtZX0uJHtleHByLmNhbGxlZS5wcm9wZXJ0eX0gbm90IGZvdW5kYCwgZXhwci5jYWxsZWUuc3Bhbik7XG5cdH1cblxuXHRpZiAoY2xhc3NEZWYubmF0aXZlSW5zdGFuY2UgJiYgY2xhc3NEZWYubmF0aXZlSW5zdGFuY2VbbWV0aG9kRGVmLm5hbWVdKSB7XG5cdFx0Y29uc3QgYXJnczogYW55W10gPSBldmFsTWV0aG9kQXJndW1lbnRzKFxuXHRcdFx0ZXhwcixcblx0XHRcdG1ldGhvZERlZi5wYXJhbWV0ZXJzLFxuXHRcdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0XHRlbnZpcm9ubWVudCxcblx0XHRcdGV2ZW50UGlwZWxpbmUsXG5cdFx0XHR0aGlzVmFsdWVcblx0XHQpO1xuXHRcdGNvbnN0IHJhd0FyZ3M6IGFueVtdID0gYXJncy5tYXAoZnJvbUx5cmFWYWx1ZSk7XG5cdFx0Y29uc3QgcmVzdWx0OiBhbnkgPSBjbGFzc0RlZi5uYXRpdmVJbnN0YW5jZVttZXRob2REZWYubmFtZV0oLi4ucmF3QXJncyk7XG5cblx0XHRpZiAocmVzdWx0IGluc3RhbmNlb2YgTHlyYU5hdGl2ZU9iamVjdCkge1xuXHRcdFx0cmV0dXJuIHdyYXBOYXRpdmVJbnN0YW5jZShyZXN1bHQsIG9iamVjdFJlZ2lzdHJ5KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZhbFJldHVybihcblx0XHRcdFtyZXR1cm5WYWx1ZShyZXN1bHQpXSxcblx0XHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0bmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KSxcblx0XHRcdGV2ZW50UGlwZWxpbmUsXG5cdFx0XHR0aGlzVmFsdWUsXG5cdFx0XHRtZXRob2REZWYucmV0dXJuVHlwZVxuXHRcdCk7XG5cdH1cblxuXHRjb25zdCBtZXRob2RFbnYgPSBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpO1xuXG5cdGJpbmRNZXRob2RQYXJhbWV0ZXJzKGV4cHIsIG1ldGhvZERlZi5wYXJhbWV0ZXJzLCBvYmplY3RSZWdpc3RyeSwgbWV0aG9kRW52LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblxuXHRyZXR1cm4gZXZhbFJldHVybihtZXRob2REZWYuY2hpbGRyZW4sIG9iamVjdFJlZ2lzdHJ5LCBtZXRob2RFbnYsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSwgbWV0aG9kRGVmLnJldHVyblR5cGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEluc3RhbmNlQ2FsbChleHByOiBBU1RDYWxsTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCkge1xuXHRpZiAoIShleHByLmNhbGxlZSBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpKSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgbWVtYmVyIGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0fVxuXG5cdC8vIE9iamVrdCBhdXN3ZXJ0ZW4gKHUgfCB0aGlzIHwgc3VwZXIpXG5cdGxldCB0YXJnZXQ6IGFueSA9IGV2YWxFeHByZXNzaW9uKGV4cHIuY2FsbGVlLm9iamVjdCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXG5cdHRhcmdldCA9IGF1dG9Cb3hJZk5lZWRlZCh0YXJnZXQsIG9iamVjdFJlZ2lzdHJ5KTtcblxuXHRpZiAoIXRhcmdldCB8fCAhdGFyZ2V0Ll9fY2xhc3NEZWYpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcignSW5zdGFuY2UgY2FsbCBvbiBub24tb2JqZWN0JywgZXhwci5jYWxsZWUuc3Bhbik7XG5cdH1cblxuXHRsZXQgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiA9IHRhcmdldC5fX2NsYXNzRGVmO1xuXG5cdC8vIHN1cGVyLm1ldGhvZCgpXG5cdGlmIChleHByLmNhbGxlZS5vYmplY3QudHlwZSA9PT0gQVNUTm9kZVR5cGUuSURFTlRJRklFUiAmJiBleHByLmNhbGxlZS5vYmplY3QubmFtZSA9PT0gJ3N1cGVyJykge1xuXHRcdGNvbnN0IHN1cGVyTmFtZSA9IGNsYXNzRGVmLnN1cGVyQ2xhc3M7XG5cdFx0aWYgKCFzdXBlck5hbWUpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKCdzdXBlciB1c2VkIGJ1dCBubyBzdXBlcmNsYXNzJywgZXhwci5jYWxsZWUuc3Bhbik7XG5cdFx0fVxuXHRcdGNsYXNzRGVmID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQoc3VwZXJOYW1lKTtcblx0fVxuXG5cblx0Y29uc3QgbWV0aG9kRGVmOiBDbGFzc01ldGhvZERlZmluaXRpb24gfCBudWxsID0gcmVzb2x2ZUluc3RhbmNlTWV0aG9kKFxuXHRcdGNsYXNzRGVmLFxuXHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdGV4cHIuY2FsbGVlLnByb3BlcnR5XG5cdCk7XG5cblx0aWYgKCFtZXRob2REZWYpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgTWV0aG9kICR7ZXhwci5jYWxsZWUucHJvcGVydHl9IG5vdCBmb3VuZCBvbiAke2NsYXNzRGVmLm5hbWV9YCwgZXhwci5jYWxsZWUuc3Bhbik7XG5cdH1cblxuXHRjb25zdCBtZXRob2RFbnYgPSBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpO1xuXHRtZXRob2RFbnYuZGVmaW5lKEdSQU1NQVIuVEhJUywgdGFyZ2V0KTtcblxuXHRpZiAodGFyZ2V0Ll9fbmF0aXZlSW5zdGFuY2UgJiYgbWV0aG9kRGVmLm5hbWUgaW4gdGFyZ2V0Ll9fbmF0aXZlSW5zdGFuY2UpIHtcblx0XHRjb25zdCBhcmdzOiBhbnlbXSA9IGV2YWxNZXRob2RBcmd1bWVudHMoXG5cdFx0XHRleHByLFxuXHRcdFx0bWV0aG9kRGVmLnBhcmFtZXRlcnMsXG5cdFx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRcdGVudmlyb25tZW50LFxuXHRcdFx0ZXZlbnRQaXBlbGluZSxcblx0XHRcdHRoaXNWYWx1ZVxuXHRcdCk7XG5cblx0XHRjb25zdCByYXdBcmdzOiBhbnkgPSBhcmdzLm1hcChmcm9tTHlyYVZhbHVlKTtcblx0XHRjb25zdCByZXN1bHQ6IGFueSA9IHRhcmdldC5fX25hdGl2ZUluc3RhbmNlW21ldGhvZERlZi5uYW1lXSguLi5yYXdBcmdzKTtcblxuXHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRyZXR1cm4gd3JhcE5hdGl2ZUluc3RhbmNlKHJlc3VsdCwgb2JqZWN0UmVnaXN0cnkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmFsUmV0dXJuKFxuXHRcdFx0W3JldHVyblZhbHVlKHJlc3VsdCldLFxuXHRcdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0XHRtZXRob2RFbnYsXG5cdFx0XHRldmVudFBpcGVsaW5lLFxuXHRcdFx0dGFyZ2V0LFxuXHRcdFx0bWV0aG9kRGVmLnJldHVyblR5cGVcblx0XHQpO1xuXHR9XG5cblx0YmluZE1ldGhvZFBhcmFtZXRlcnMoZXhwciwgbWV0aG9kRGVmLnBhcmFtZXRlcnMsIG9iamVjdFJlZ2lzdHJ5LCBtZXRob2RFbnYsIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXG5cdHJldHVybiBldmFsUmV0dXJuKG1ldGhvZERlZi5jaGlsZHJlbiwgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgZXZlbnRQaXBlbGluZSwgdGFyZ2V0LCBtZXRob2REZWYucmV0dXJuVHlwZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSW5zdGFuY2VNZXRob2QoY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBtZXRob2ROYW1lOiBzdHJpbmcpOiBDbGFzc01ldGhvZERlZmluaXRpb24gfCBudWxsIHtcblx0aWYgKGNsYXNzRGVmLmluc3RhbmNlTWV0aG9kc1ttZXRob2ROYW1lXSkge1xuXHRcdHJldHVybiBjbGFzc0RlZi5pbnN0YW5jZU1ldGhvZHNbbWV0aG9kTmFtZV07XG5cdH1cblxuXHRpZiAoY2xhc3NEZWYuc3VwZXJDbGFzcykge1xuXHRcdGNvbnN0IHN1cGVyRGVmID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQoY2xhc3NEZWYuc3VwZXJDbGFzcyk7XG5cdFx0cmV0dXJuIHJlc29sdmVJbnN0YW5jZU1ldGhvZChzdXBlckRlZiwgb2JqZWN0UmVnaXN0cnksIG1ldGhvZE5hbWUpO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kTWV0aG9kUGFyYW1ldGVycyhcblx0Y2FsbE5vZGU6IEFTVENhbGxOb2RlLFxuXHRwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sXG5cdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSxcblx0bWV0aG9kRW52OiBFbnZpcm9ubWVudCxcblx0ZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LFxuXHRldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLFxuXHR0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGxcbik6IHZvaWQge1xuXG5cdGNvbnN0IGFyZ3M6IEFTVE5vZGVbXSA9IGNhbGxOb2RlLmFyZ3VtZW50cztcblx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHBhcmFtZXRlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBwYXJhbWV0ZXI6IEFTVFBhcmFtZXRlck5vZGUgfCBudWxsID0gcGFyYW1ldGVyc1tpXSB8fCBudWxsO1xuXHRcdGNvbnN0IGFyZ3VtZW50OiBhbnkgPSBhcmdzW2ldIHx8IG51bGw7XG5cblx0XHRpZiAoIXBhcmFtZXRlcikge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoJ01pc3NpbmcgcGFyYW1ldGVyIG5hbWUgaW4gbWV0aG9kIGNhbGwuJyk7XG5cdFx0fVxuXG5cdFx0bGV0IHJhd1ZhbHVlO1xuXG5cdFx0aWYgKGFyZ3VtZW50KSB7XG5cdFx0XHRyYXdWYWx1ZSA9IGV2YWxFeHByZXNzaW9uKGFyZ3VtZW50LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0fSBlbHNlIGlmIChwYXJhbWV0ZXI/LmRlZmF1bHRWYWx1ZSkge1xuXHRcdFx0cmF3VmFsdWUgPSBldmFsRXhwcmVzc2lvbihwYXJhbWV0ZXIuZGVmYXVsdFZhbHVlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY2FzdGVkID0gcGFyYW1ldGVyLnR5cGVBbm5vdGF0aW9uXG5cdFx0XHQ/IGNhc3RWYWx1ZShyYXdWYWx1ZSwgcGFyYW1ldGVyLnR5cGVBbm5vdGF0aW9uLm5hbWUpXG5cdFx0XHQ6IGNhc3RWYWx1ZShyYXdWYWx1ZSwgVFlQRV9FTlVNLk1JWEVEKTtcblxuXHRcdG1ldGhvZEVudi5kZWZpbmUocGFyYW1ldGVyLm5hbWUsIGNhc3RlZCk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxDYWxsQXJndW1lbnRzKG5vZGU6IEFTVENhbGxOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55W10ge1xuXHRpZiAobm9kZS5jYWxsZWUgaW5zdGFuY2VvZiBBU1RMYW1iZGFOb2RlKSB7XG5cdFx0Y29uc3QgbGFtYmRhOiBBU1RMYW1iZGFOb2RlID0gbm9kZS5jYWxsZWU7XG5cdFx0cmV0dXJuIGV2YWxNZXRob2RBcmd1bWVudHMobm9kZSwgbGFtYmRhLnBhcmFtZXRlcnMsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0fVxuXG5cdGlmIChub2RlLmNhbGxlZS50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0cmV0dXJuIG5vZGUuYXJndW1lbnRzLm1hcCgoYXJndW1lbnQ6IEFTVE5vZGUpOiBhbnkgPT4ge1xuXHRcdFx0cmV0dXJuIGNhc3RWYWx1ZShcblx0XHRcdFx0ZXZhbEV4cHJlc3Npb24oYXJndW1lbnQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKSxcblx0XHRcdFx0YXJndW1lbnQudHlwZVxuXHRcdFx0KTtcblx0XHR9KTtcblx0fVxuXG5cdGxldCBtb2R1bGVOYW1lOiBzdHJpbmcgPSAndW5rbm93bic7XG5cdGxldCBtZXRob2ROYW1lOiBzdHJpbmcgPSAndW5rbm93bic7XG5cblx0aWYgKG5vZGUuY2FsbGVlIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkge1xuXHRcdG1vZHVsZU5hbWUgPSBub2RlLmNhbGxlZS5vYmplY3QubmFtZTtcblx0XHRtZXRob2ROYW1lID0gbm9kZS5jYWxsZWUucHJvcGVydHk7XG5cdH1cblxuXHR0aHJvd1J1bnRpbWVFcnJvcihgVW5rbm93biBmdW5jdGlvbiAke21vZHVsZU5hbWV9LiR7bWV0aG9kTmFtZX1gLCBub2RlLnNwYW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbE1ldGhvZEFyZ3VtZW50cyhleHByOiBBU1RDYWxsTm9kZSB8IEFTVE5ld05vZGUsIHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueVtdIHtcblx0Y29uc3QgYXJncyA9IFtdO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHBhcmFtZXRlcjogQVNUUGFyYW1ldGVyTm9kZSB8IG51bGwgPSBwYXJhbWV0ZXJzW2ldIHx8IG51bGw7XG5cdFx0Y29uc3QgYXJndW1lbnQgPSBleHByLmFyZ3VtZW50c1tpXSB8fCBudWxsO1xuXG5cdFx0bGV0IHZhbHVlO1xuXG5cdFx0aWYgKGFyZ3VtZW50KSB7XG5cdFx0XHR2YWx1ZSA9IGV2YWxFeHByZXNzaW9uKGFyZ3VtZW50LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0fSBlbHNlIGlmIChwYXJhbWV0ZXI/LmRlZmF1bHRWYWx1ZSkge1xuXHRcdFx0dmFsdWUgPSBldmFsRXhwcmVzc2lvbihwYXJhbWV0ZXIuZGVmYXVsdFZhbHVlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBbUnVudGltZUVycm9yXSBNaXNzaW5nIGFyZ3VtZW50ICcke3BhcmFtZXRlcj8ubmFtZX0nYCwgZXhwci5zcGFuKTtcblx0XHR9XG5cblx0XHRhcmdzLnB1c2godmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIGFyZ3MubWFwKChhcmd1bWVudCwgaSk6IGFueSA9PiB7XG5cdFx0Y29uc3QgcGFyYW1ldGVyOiBBU1RQYXJhbWV0ZXJOb2RlIHwgdW5kZWZpbmVkID0gcGFyYW1ldGVyc1tpXTtcblx0XHRyZXR1cm4gcGFyYW1ldGVyPy50eXBlQW5ub3RhdGlvblxuXHRcdFx0PyBjYXN0VmFsdWUoYXJndW1lbnQsIHBhcmFtZXRlci50eXBlQW5ub3RhdGlvbi5uYW1lKVxuXHRcdFx0OiBjYXN0VmFsdWUoYXJndW1lbnQsIFRZUEVfRU5VTS5NSVhFRCk7XG5cdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbElmKG5vZGU6IEFTVElmTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGNvbnN0IGNvbmRpdGlvbjogYW55ID0gY2FzdFZhbHVlKFxuXHRcdGV2YWxFeHByZXNzaW9uKG5vZGUuY29uZGl0aW9uLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSksXG5cdFx0VFlQRV9FTlVNLkJPT0xFQU5cblx0KTtcblxuXHQvLyBUSEVOXG5cdGlmIChjb25kaXRpb24gPT09IHRydWUpIHtcblx0XHRyZXR1cm4gZXZhbEJsb2NrKG5vZGUudGhlbi5jaGlsZHJlbiwgb2JqZWN0UmVnaXN0cnksIG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCksIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdH1cblxuXHQvLyBFTFNFXG5cdGlmIChub2RlLmVsc2UpIHtcblx0XHRpZiAobm9kZS5lbHNlIGluc3RhbmNlb2YgQVNUSWZOb2RlKSB7XG5cdFx0XHRyZXR1cm4gZXZhbElmKG5vZGUuZWxzZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmFsQmxvY2sobm9kZS5lbHNlLmNoaWxkcmVuLCBvYmplY3RSZWdpc3RyeSwgbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KSwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbE1hdGNoKG5vZGU6IEFTVE1hdGNoTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGNvbnN0IG1hdGNoVmFsdWU6IGFueSA9IGV2YWxFeHByZXNzaW9uKG5vZGUuZXhwcmVzc2lvbiwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcblxuXHRmb3IgKGNvbnN0IGNhc2VOb2RlIG9mIG5vZGUuY2FzZXMpIHtcblx0XHRpZiAoY2FzZU5vZGUudGVzdCA9PT0gbnVsbCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdGVzdFZhbHVlID0gZXZhbEV4cHJlc3Npb24oY2FzZU5vZGUudGVzdCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXG5cdFx0aWYgKHRlc3RWYWx1ZSA9PT0gbWF0Y2hWYWx1ZSkge1xuXHRcdFx0cmV0dXJuIGV2YWxNYXRjaENhc2UoY2FzZU5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRpZiAobm9kZS5kZWZhdWx0Q2FzZSkge1xuXHRcdHJldHVybiBldmFsTWF0Y2hDYXNlKG5vZGUuZGVmYXVsdENhc2UsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbE1hdGNoQ2FzZShub2RlOiBBU1RNYXRjaENhc2VOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0cmV0dXJuIGV2YWxCbG9jayhub2RlLmNoaWxkcmVuLCBvYmplY3RSZWdpc3RyeSwgbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KSwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxGb3JlYWNoKG5vZGU6IEFTVEZvcmVhY2hOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0bGV0IGl0ZXJhYmxlID0gZXZhbEV4cHJlc3Npb24obm9kZS5pdGVyYWJsZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXG5cdGlmICghKGl0ZXJhYmxlIGluc3RhbmNlb2YgSW5zdGFuY2UpKSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYGZvcmVhY2ggZXhwZWN0cyBhbiBvYmplY3QgaW1wbGVtZW50aW5nIEl0ZXJhYmxlYCwgbm9kZS5pdGVyYWJsZS5zcGFuKTtcblx0fVxuXG5cdGNvbnN0IGl0ZXJhdG9yTWV0aG9kOiBDbGFzc01ldGhvZERlZmluaXRpb24gfCBudWxsID0gcmVzb2x2ZUluc3RhbmNlTWV0aG9kKFxuXHRcdGl0ZXJhYmxlLl9fY2xhc3NEZWYsXG5cdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0J2l0ZXJhdG9yJ1xuXHQpO1xuXG5cdGlmICghaXRlcmF0b3JNZXRob2QpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgT2JqZWN0IGRvZXMgbm90IGltcGxlbWVudCBJdGVyYWJsZSAobWlzc2luZyBpdGVyYXRvcigpKWAsIG5vZGUuaXRlcmFibGUuc3Bhbik7XG5cdH1cblxuXHRjb25zdCBpdGVyYXRvcjogYW55ID0gZXZhbEluc3RhbmNlQ2FsbChcblx0XHQoKCk6IEFTVENhbGxOb2RlID0+IHtcblx0XHRcdHJldHVybiBuZXcgQVNUQ2FsbE5vZGUobmV3IEFTVE1lbWJlck5vZGUobm9kZS5pdGVyYWJsZSwgJ2l0ZXJhdG9yJykpO1xuXHRcdH0pKCksXG5cdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0ZW52aXJvbm1lbnQsXG5cdFx0ZXZlbnRQaXBlbGluZSxcblx0XHR0aGlzVmFsdWVcblx0KTtcblxuXHRpZiAoIShpdGVyYXRvciBpbnN0YW5jZW9mIEluc3RhbmNlKSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBpdGVyYXRvcigpIG11c3QgcmV0dXJuIGFuIEl0ZXJhdG9yIG9iamVjdGAsIG5vZGUuaXRlcmFibGUuc3Bhbik7XG5cdH1cblxuXHRjYWxsSXRlcmF0b3JNZXRob2QoaXRlcmF0b3IsICdyZXdpbmQnLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXG5cdHdoaWxlIChjYWxsSXRlcmF0b3JNZXRob2QoaXRlcmF0b3IsICdoYXNOZXh0Jywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKSkge1xuXHRcdGNvbnN0IHZhbHVlID0gY2FsbEl0ZXJhdG9yTWV0aG9kKGl0ZXJhdG9yLCAnY3VycmVudCcsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG5cblx0XHRjb25zdCBsb29wRW52ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblxuXHRcdGxvb3BFbnYuZGVmaW5lKG5vZGUuaXRlcmF0b3IsIHZhbHVlKTtcblxuXHRcdGNvbnN0IHJlc3VsdCA9IGV2YWxCbG9jayhub2RlLmJvZHksIG9iamVjdFJlZ2lzdHJ5LCBsb29wRW52LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBSZXR1cm5WYWx1ZSkge1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cblx0XHRjYWxsSXRlcmF0b3JNZXRob2QoaXRlcmF0b3IsICduZXh0Jywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsbEl0ZXJhdG9yTWV0aG9kKGl0ZXJhdG9yOiBJbnN0YW5jZSwgbWV0aG9kTmFtZTogc3RyaW5nLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IGFueSB7XG5cdHJldHVybiBjYWxsSW5zdGFuY2VNZXRob2QoXG5cdFx0aXRlcmF0b3IsXG5cdFx0aXRlcmF0b3IuZmluZGVNZXRob2ROb2RlKG1ldGhvZE5hbWUpLFxuXHRcdFtdLFxuXHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdGVudmlyb25tZW50LFxuXHRcdGV2ZW50UGlwZWxpbmVcblx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxVbmFyeShub2RlOiBBU1RVbmFyeU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRjb25zdCB2YWx1ZTogYW55ID0gY2FzdFZhbHVlKGV2YWxFeHByZXNzaW9uKG5vZGUuYXJndW1lbnQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKSk7XG5cblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgSW5zdGFuY2UpIHtcblx0XHRsZXQgb3A6IHN0cmluZyA9IG5vZGUub3BlcmF0b3I7XG5cblx0XHRpZiAob3AgPT09IEdSQU1NQVIuUExVUykge1xuXHRcdFx0b3AgPSBHUkFNTUFSLlVOQVJZX1BMVVM7XG5cdFx0fSBlbHNlIGlmIChvcCA9PT0gR1JBTU1BUi5NSU5VUykge1xuXHRcdFx0b3AgPSBHUkFNTUFSLlVOQVJZX01JTlVTO1xuXHRcdH1cblxuXHRcdHJldHVybiBjYWxsSW5zdGFuY2VNZXRob2QoXG5cdFx0XHR2YWx1ZSxcblx0XHRcdHZhbHVlLmZpbmRlTWV0aG9kTm9kZShvcCksXG5cdFx0XHRbXSxcblx0XHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0ZW52aXJvbm1lbnQsXG5cdFx0XHRldmVudFBpcGVsaW5lXG5cdFx0KTtcblx0fVxuXG5cdHN3aXRjaCAobm9kZS5vcGVyYXRvcikge1xuXHRcdGNhc2UgR1JBTU1BUi5FWENMQU1BVElPTl9NQVJLOiB7XG5cdFx0XHRyZXR1cm4gIXZhbHVlO1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTUlOVVM6IHtcblx0XHRcdHJldHVybiAtdmFsdWU7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5QTFVTOiB7XG5cdFx0XHRyZXR1cm4gK3ZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdHRocm93UnVudGltZUVycm9yKGBVbnN1cHBvcnRlZCB1bmFyeSBvcGVyYXRvciAke25vZGUub3BlcmF0b3J9YCwgbm9kZS5zcGFuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxWRG9tTm9kZShub2RlOiBBU1RWRG9tTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IFZDaGlsZCB7XG5cdGNvbnN0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG5cblx0Zm9yIChjb25zdCBbbmFtZSwgdmFsdWVdIG9mIG5vZGUucHJvcHMpIHtcblx0XHRwcm9wc1tuYW1lXSA9IGV2YWxFeHByZXNzaW9uKHZhbHVlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdH1cblxuXHRjb25zdCBpc0NvbXBvbmVudDogYm9vbGVhbiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuaGFzKG5vZGUudGFnKTtcblxuXHRjb25zdCBjaGlsZHJlbjogVkNoaWxkW10gPSBbXTtcblx0bGV0IHRleHRCdWZmZXI6IHN0cmluZ1tdID0gW107XG5cblx0Y29uc3QgZmx1c2hUZXh0QnVmZmVyOiAoKSA9PiB2b2lkID0gKCk6IHZvaWQgPT4ge1xuXHRcdGlmICh0ZXh0QnVmZmVyLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjaGlsZHJlbi5wdXNoKHtcblx0XHRcdCAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuXHRcdFx0ICAgICAgICAgICAgICB2YWx1ZTogdGV4dEJ1ZmZlci5qb2luKCcnKSxcblx0XHRcdCAgICAgICAgICAgICAgZG9tOiB1bmRlZmluZWRcblx0XHQgICAgICAgICAgICAgIH0pO1xuXHRcdHRleHRCdWZmZXIgPSBbXTtcblx0fVxuXG5cdGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuXHRcdHN3aXRjaCAodHJ1ZSkge1xuXHRcdFx0Y2FzZSBjaGlsZCBpbnN0YW5jZW9mIEFTVFZEb21UZXh0Tm9kZToge1xuXHRcdFx0XHR0ZXh0QnVmZmVyLnB1c2goY2hpbGQudmFsdWUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGNhc2UgY2hpbGQgaW5zdGFuY2VvZiBBU1RWRG9tRXhwcmVzc2lvbk5vZGU6IHtcblx0XHRcdFx0dGV4dEJ1ZmZlci5wdXNoKGV2YWxFeHByZXNzaW9uKGNoaWxkLmV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0Y2FzZSBjaGlsZCBpbnN0YW5jZW9mIEFTVFZEb21Ob2RlOiB7XG5cdFx0XHRcdGNoaWxkcmVuLnB1c2goZXZhbFZEb21Ob2RlKGNoaWxkLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSkgYXMgVkNoaWxkKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmbHVzaFRleHRCdWZmZXIoKTtcblx0fVxuXG5cdGZsdXNoVGV4dEJ1ZmZlcigpO1xuXG5cdGlmIChpc0NvbXBvbmVudCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnY29tcG9uZW50Jyxcblx0XHRcdGNsYXNzTmFtZTogbm9kZS50YWcsXG5cdFx0XHRwcm9wczogey4uLnByb3BzLCBjaGlsZHJlbn0sXG5cdFx0XHRzdWJUcmVlOiB1bmRlZmluZWQsXG5cdFx0XHRpbnN0YW5jZTogdW5kZWZpbmVkLFxuXHRcdFx0ZG9tOiB1bmRlZmluZWRcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnZWxlbWVudCcsXG5cdFx0dGFnOiBub2RlLnRhZyxcblx0XHRwcm9wcyxcblx0XHRjaGlsZHJlbixcblx0XHRkb206IHVuZGVmaW5lZFxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbFJldHVybihibG9ja05vZGVzOiBBU1ROb2RlW10sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwsIHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHR0cnkge1xuXHRcdHJldHVybiBldmFsQmxvY2soYmxvY2tOb2Rlcywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUsIHJldHVyblR5cGUpO1xuXHR9IGNhdGNoIChleGVjdXRpb25TdG9wKSB7XG5cdFx0aWYgKGV4ZWN1dGlvblN0b3AgaW5zdGFuY2VvZiBFeGVjdXRpb25TdG9wKSB7XG5cdFx0XHRyZXR1cm4gY2FzdFZhbHVlKGV4ZWN1dGlvblN0b3AucmV0dXJuVmFsdWUudmFsdWUsIGV4ZWN1dGlvblN0b3AucmV0dXJuVHlwZT8ubmFtZSk7XG5cdFx0fVxuXHRcdHRocm93IGV4ZWN1dGlvblN0b3A7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxCbG9jayhibG9ja05vZGVzOiBBU1ROb2RlW10sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwsIHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRmb3IgKGNvbnN0IGJsb2NrTm9kZSBvZiBibG9ja05vZGVzKSB7XG5cdFx0Y29uc3QgcmV0dXJuVmFsdWU6IGFueSA9IGV2YWxOb2RlKGJsb2NrTm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdGlmIChyZXR1cm5WYWx1ZSBpbnN0YW5jZW9mIFJldHVyblZhbHVlKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXhlY3V0aW9uU3RvcChyZXR1cm5WYWx1ZSwgcmV0dXJuVHlwZSk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEFubm90YXRpb25WYWx1ZShub2RlOiBBU1ROb2RlKTogYW55IHtcblx0c3dpdGNoIChub2RlLnR5cGUpIHtcblx0XHRjYXNlIEFTVE5vZGVUeXBlLlNUUklORzpcblx0XHRjYXNlIEFTVE5vZGVUeXBlLk5VTUJFUjpcblx0XHRjYXNlIEFTVE5vZGVUeXBlLkJPT0xFQU46XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5JREVOVElGSUVSOiB7XG5cdFx0XHRyZXR1cm4gY2FzdFZhbHVlKG5vZGUudmFsdWUpO1xuXHRcdH1cblxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuQVJSQVkgOiB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEFycmF5Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gbm9kZS5lbGVtZW50cy5tYXAoKGNoaWxkOiBBU1ROb2RlKTogYW55ID0+IGV2YWxBbm5vdGF0aW9uVmFsdWUoY2hpbGQpKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGFubm90YXRpb24gcHJvcGVydHkgdmFsdWU6ICR7bm9kZS50eXBlfWAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXG5cdFx0ZGVmYXVsdDoge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVuc3VwcG9ydGVkIGFubm90YXRpb24gZXhwcmVzc2lvbjogJHtub2RlLnR5cGV9YCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxBbm5vdGF0aW9uUHJvcGVydGllcyhhbm5vdGF0aW9uOiBBU1RBbm5vdGF0aW9uTm9kZSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuXHRjb25zdCBwcm9wZXJ0aWVzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG5cblx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZU5vZGVdIG9mIGFubm90YXRpb24ucHJvcGVydGllcykge1xuXHRcdHByb3BlcnRpZXNba2V5XSA9IGV2YWxBbm5vdGF0aW9uVmFsdWUodmFsdWVOb2RlKTtcblx0fVxuXG5cdHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsbEluc3RhbmNlTWV0aG9kKGluc3RhbmNlOiBJbnN0YW5jZSwgbWV0aG9kTm9kZTogQVNUTWV0aG9kTm9kZSwgYXJnczogYW55W10sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogYW55IHtcblx0Y29uc3QgbWV0aG9kRW52ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblxuXHRtZXRob2RFbnYuZGVmaW5lKEdSQU1NQVIuVEhJUywgaW5zdGFuY2UpO1xuXG5cdGlmIChpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlICYmIG1ldGhvZE5vZGUubmFtZSBpbiBpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlKSB7XG5cdFx0Y29uc3QgcmF3QXJnczogYW55W10gPSBhcmdzLm1hcChmcm9tTHlyYVZhbHVlKTtcblx0XHRjb25zdCByZXN1bHQ6IGFueSA9IGluc3RhbmNlLl9fbmF0aXZlSW5zdGFuY2VbbWV0aG9kTm9kZS5uYW1lXSguLi5yYXdBcmdzKTtcblxuXHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRyZXR1cm4gd3JhcE5hdGl2ZUluc3RhbmNlKHJlc3VsdCwgb2JqZWN0UmVnaXN0cnkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmFsUmV0dXJuKFxuXHRcdFx0W3JldHVyblZhbHVlKHJlc3VsdCldLFxuXHRcdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0XHRtZXRob2RFbnYsXG5cdFx0XHRldmVudFBpcGVsaW5lLFxuXHRcdFx0aW5zdGFuY2UsXG5cdFx0XHRtZXRob2ROb2RlLnJldHVyblR5cGVcblx0XHQpO1xuXHR9XG5cblx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG1ldGhvZE5vZGUucGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHBhcmFtZXRlcjogQVNUUGFyYW1ldGVyTm9kZSB8IG51bGwgPSBtZXRob2ROb2RlLnBhcmFtZXRlcnNbaV0gfHwgbnVsbDtcblx0XHRjb25zdCBhcmd1bWVudDogYW55ID0gYXJnc1tpXSB8fCBudWxsO1xuXG5cdFx0aWYgKCFwYXJhbWV0ZXIpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKCdNZXRob2QgcGFyYW1ldGVyIGlzIG51bGwuJyk7XG5cdFx0fVxuXG5cdFx0bGV0IHZhbHVlO1xuXHRcdGlmICghYXJndW1lbnQpIHtcblx0XHRcdHZhbHVlID0gcGFyYW1ldGVyLmRlZmF1bHRWYWx1ZVxuXHRcdFx0XHQ/IGV2YWxOb2RlKHBhcmFtZXRlci5kZWZhdWx0VmFsdWUsIG9iamVjdFJlZ2lzdHJ5LCBtZXRob2RFbnYsIGV2ZW50UGlwZWxpbmUsIGluc3RhbmNlKVxuXHRcdFx0XHQ6IG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhbHVlID0gYXJnc1tpXTtcblx0XHR9XG5cblx0XHRtZXRob2RFbnYuZGVmaW5lKHBhcmFtZXRlci5uYW1lLCB2YWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4gZXZhbFJldHVybihtZXRob2ROb2RlLmNoaWxkcmVuLCBvYmplY3RSZWdpc3RyeSwgbWV0aG9kRW52LCBldmVudFBpcGVsaW5lLCBpbnN0YW5jZSwgbWV0aG9kTm9kZS5yZXR1cm5UeXBlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9Cb3hJZk5lZWRlZCh2YWx1ZTogYW55LCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpOiBJbnN0YW5jZSB7XG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEluc3RhbmNlKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gVFlQRV9FTlVNLk5VTUJFUikge1xuXHRcdHJldHVybiBjcmVhdGVCb3hlZEluc3RhbmNlKEF1dG9ib3hlZFR5cGVzLmdldENsYXNzTmFtZShUWVBFX0VOVU0uTlVNQkVSKSwgdmFsdWUsIG9iamVjdFJlZ2lzdHJ5KTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09IFRZUEVfRU5VTS5TVFJJTkcpIHtcblx0XHRyZXR1cm4gY3JlYXRlQm94ZWRJbnN0YW5jZShBdXRvYm94ZWRUeXBlcy5nZXRDbGFzc05hbWUoVFlQRV9FTlVNLlNUUklORyksIHZhbHVlLCBvYmplY3RSZWdpc3RyeSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSBUWVBFX0VOVU0uQk9PTEVBTikge1xuXHRcdHJldHVybiBjcmVhdGVCb3hlZEluc3RhbmNlKEF1dG9ib3hlZFR5cGVzLmdldENsYXNzTmFtZShUWVBFX0VOVU0uQk9PTEVBTiksIHZhbHVlLCBvYmplY3RSZWdpc3RyeSk7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCb3hlZEluc3RhbmNlKGNsYXNzTmFtZTogc3RyaW5nLCBwcmltaXRpdmVWYWx1ZTogYW55LCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpOiBJbnN0YW5jZSB7XG5cdGNvbnN0IGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24gPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChjbGFzc05hbWUpO1xuXHRjb25zdCBpbnN0YW5jZTogSW5zdGFuY2UgPSBjbGFzc0RlZi5jb25zdHJ1Y3RFbXB0eUluc3RhbmNlKCk7XG5cblx0aW5zdGFuY2UuX19uYXRpdmVJbnN0YW5jZSA9IG5ldyBjbGFzc0RlZi5uYXRpdmVJbnN0YW5jZShmcm9tTHlyYVZhbHVlKHByaW1pdGl2ZVZhbHVlKSk7XG5cblx0cmV0dXJuIGluc3RhbmNlO1xufVxuIiwKICAgICJjb25zdCBMeXJhRXZlbnRzID0ge1xuXHRMWVJBX0lOU1RBTkNFX0RJUlRZX1NUQVRFOiAnbHlyYTppbnN0YW5jZV9kaXJ0eV9zdGF0ZScsXG5cdExZUkFfSU5TVEFOQ0VfQ0xFQU5fU1RBVEU6ICdseXJhOmluc3RhbmNlX2NsZWFuX3N0YXRlJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTHlyYUV2ZW50cztcbiIsCiAgICAiaW1wb3J0IHtHUkFNTUFSfSBmcm9tIFwiLi4vZ3JhbW1hclwiO1xuaW1wb3J0IHtcblx0QVNUQ2xhc3NOb2RlLFxuXHRBU1RGaWVsZE5vZGUsXG5cdEFTVEludGVyZmFjZU5vZGUsXG5cdEFTVE1ldGhvZE5vZGUsXG5cdEFTVE5ld05vZGUsXG5cdEFTVE5vZGUsXG5cdEFTVFBhcmFtZXRlck5vZGUsXG5cdEFTVFR5cGVOb2RlXG59IGZyb20gXCIuLi9hc3RcIjtcbmltcG9ydCB7dGhyb3dSdW50aW1lRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcbmltcG9ydCB0eXBlIHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB7ZXZhbEV4cHJlc3Npb24sIGV2YWxNZXRob2RBcmd1bWVudHMsIGV2YWxOb2RlfSBmcm9tIFwiLi9pbnRlcnByZXRlcl9ydW50aW1lXCI7XG5pbXBvcnQge2Nhc3RWYWx1ZSwgZnJvbUx5cmFWYWx1ZSwgTHlyYU5hdGl2ZU9iamVjdH0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfY29udmVyc2lvblwiO1xuaW1wb3J0IHR5cGUge0V2ZW50UGlwZWxpbmV9IGZyb20gXCIuLi9ldmVudC9waXBlbGluZVwiO1xuaW1wb3J0IEx5cmFFdmVudHMgZnJvbSBcIi4uL2V2ZW50L2V2ZW50c1wiO1xuXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQge1xuXHRwYXJlbnQ6IEVudmlyb25tZW50IHwgbnVsbDtcblx0dmFsdWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH07XG5cblx0Y29uc3RydWN0b3IocGFyZW50OiBFbnZpcm9ubWVudCB8IG51bGwgPSBudWxsKSB7XG5cdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cdFx0dGhpcy52YWx1ZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHR9XG5cblx0ZGVmaW5lKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMudmFsdWVzW25hbWVdID0gdmFsdWU7XG5cdH1cblxuXHRnZXQobmFtZTogc3RyaW5nKTogYW55IHtcblx0XHRpZiAobmFtZSBpbiB0aGlzLnZhbHVlcykge1xuXHRcdFx0cmV0dXJuIHRoaXMudmFsdWVzW25hbWVdO1xuXHRcdH1cblx0XHRpZiAodGhpcy5wYXJlbnQpIHtcblx0XHRcdHJldHVybiB0aGlzLnBhcmVudC5nZXQobmFtZSk7XG5cdFx0fVxuXHRcdHRocm93UnVudGltZUVycm9yKGBVbmRlZmluZWQgdmFyaWFibGUgJHtuYW1lfWApO1xuXHR9XG5cblx0c2V0KG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmIChuYW1lIGluIHRoaXMudmFsdWVzKSB7XG5cdFx0XHR0aGlzLnZhbHVlc1tuYW1lXSA9IHZhbHVlO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAodGhpcy5wYXJlbnQpIHtcblx0XHRcdHRoaXMucGFyZW50LnNldChuYW1lLCB2YWx1ZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRocm93UnVudGltZUVycm9yKGBVbmRlZmluZWQgdmFyaWFibGUgJHtuYW1lfWApO1xuXHR9XG5cblx0aGFzKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlc1tuYW1lXSB8fCAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuaGFzKG5hbWUpKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgSW5zdGFuY2Uge1xuXHRwdWJsaWMgcmVhZG9ubHkgaWQ6IHN0cmluZztcblx0X19jbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uO1xuXHRfX2ZpZWxkc0luaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XG5cdF9faW5zdGFuY2VGaWVsZHM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfTtcblx0X19zdGF0aWNGaWVsZHM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfTtcblx0X19uYXRpdmVJbnN0YW5jZTogYW55IHwgbnVsbCA9IG51bGw7XG5cdF9faXNEaXJ0eTogYm9vbGVhbiA9IGZhbHNlXG5cblx0Y29uc3RydWN0b3IoY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbikge1xuXHRcdHRoaXMuX19jbGFzc0RlZiA9IGNsYXNzRGVmO1xuXHRcdHRoaXMuX19pbnN0YW5jZUZpZWxkcyA9IHt9O1xuXHRcdHRoaXMuX19zdGF0aWNGaWVsZHMgPSB7fTtcblx0XHR0aGlzLl9fbmF0aXZlSW5zdGFuY2UgPSBudWxsO1xuXG5cdFx0dGhpcy5pZCA9IEluc3RhbmNlLmdlbmVyYXRlSW5zdGFuY2VVVUlEKCk7XG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyBnZW5lcmF0ZUluc3RhbmNlVVVJRCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBzZWxmLmNyeXB0by5yYW5kb21VVUlEKCk7XG5cdH1cblxuXHRwdWJsaWMgbWFya0RpcnR5KGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiB2b2lkIHtcblx0XHR0aGlzLl9faXNEaXJ0eSA9IHRydWU7XG5cblx0XHRldmVudFBpcGVsaW5lLmVtaXQoTHlyYUV2ZW50cy5MWVJBX0lOU1RBTkNFX0RJUlRZX1NUQVRFLCB7aW5zdGFuY2U6IHRoaXN9KTtcblx0fVxuXG5cdHB1YmxpYyBtYXJrQ2xlYW4oZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IHZvaWQge1xuXHRcdHRoaXMuX19pc0RpcnR5ID0gZmFsc2U7XG5cblx0XHRldmVudFBpcGVsaW5lLmVtaXQoTHlyYUV2ZW50cy5MWVJBX0lOU1RBTkNFX0NMRUFOX1NUQVRFLCB7aW5zdGFuY2U6IHRoaXN9KTtcblx0fVxuXG5cdGZpbmRlTWV0aG9kTm9kZShuYW1lOiBzdHJpbmcpOiBBU1RNZXRob2ROb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5fX2NsYXNzRGVmLmZpbmRNZXRob2ROb2RlKG5hbWUpO1xuXHR9XG5cblx0aGFzUHVibGljUHJvcGVydHkobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiB0aGlzLl9fY2xhc3NEZWYuZmluZEluc3RhbmNlRmllbGREZWZpbml0aW9uKG5hbWUpLm1vZGlmaWVycy5wdWJsaWM7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHNldFB1YmxpY1Byb3BlcnR5KG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSwgZXhwZWN0ZWQ6IGFueSA9IG51bGwpOiB2b2lkIHtcblx0XHRsZXQgZmllbGREZWZpbml0aW9uOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbiA9IHRoaXMuX19jbGFzc0RlZi5maW5kSW5zdGFuY2VGaWVsZERlZmluaXRpb24obmFtZSk7XG5cblx0XHRpZiAoZmllbGREZWZpbml0aW9uLm1vZGlmaWVycy5wdWJsaWMpIHtcblx0XHRcdHRoaXMuX19pbnN0YW5jZUZpZWxkc1tuYW1lXSA9IGNhc3RWYWx1ZSh2YWx1ZSwgZXhwZWN0ZWQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRocm93UnVudGltZUVycm9yKGBGaWVsZCAke25hbWV9IGlzIG5vdCBwdWJsaWMuYCk7XG5cdH1cblxuXHRpbml0aWFsaXplSW5zdGFuY2VGaWVsZHMob2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiB2b2lkIHtcblx0XHR0aGlzLl9fY2xhc3NEZWYuaW5pdGlhbGl6ZUluc3RhbmNlRmllbGRzKHRoaXMsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vZGlmaWVycyB7XG5cdG9wZW46IGJvb2xlYW4gPSBmYWxzZTtcblx0cHVibGljOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGU6IGJvb2xlYW4gPSBmYWxzZTtcblx0c3RhdGljOiBib29sZWFuID0gZmFsc2U7XG5cdHJlYWRvbmx5OiBib29sZWFuID0gZmFsc2U7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7e319IGF0dHJpYnV0ZXNcblx0ICovXG5cdGNvbnN0cnVjdG9yKGF0dHJpYnV0ZXM6IHsgW2luZGV4OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fSkge1xuXHRcdGZvciAobGV0IGF0dHJpYnV0ZSBvZiBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKSkge1xuXHRcdFx0aWYgKHRoaXMuaGFzT3duUHJvcGVydHkoYXR0cmlidXRlKSkge1xuXHRcdFx0XHRjb25zdCBtb2RpZmllcnM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHRoaXM7XG5cdFx0XHRcdG1vZGlmaWVyc1thdHRyaWJ1dGVdID0gYXR0cmlidXRlc1thdHRyaWJ1dGVdO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgY2xhc3MgU3VwZXJDbGFzcyB7XG5cdHR5cGU6IHN0cmluZztcblx0bmFtZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBFeGVjdXRpb25TdG9wIGV4dGVuZHMgRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgcmV0dXJuVmFsdWU6IFJldHVyblZhbHVlLFxuXHQgICAgICAgICAgICBwdWJsaWMgcmVhZG9ubHkgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsKSB7XG5cdFx0c3VwZXIoJ0V4ZWN1dGlvbiBzdG9wcGVuZCB3aXRoIHJldHVybi4nKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgUmV0dXJuVmFsdWUge1xuXHR2YWx1ZTogYW55O1xuXG5cdGNvbnN0cnVjdG9yKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIENsYXNzRmllbGREZWZpbml0aW9uIHtcblx0bmFtZTogc3RyaW5nO1xuXHR0eXBlOiBzdHJpbmcgfCBudWxsO1xuXHRtb2RpZmllcnM6IE1vZGlmaWVycztcblx0aW5pdGlhbGl6ZXI6IEFTVE5vZGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGU6IHN0cmluZyB8IG51bGwsIG1vZGlmaWVyczogTW9kaWZpZXJzLCBpbml0aWFsaXplcjogQVNUTm9kZSB8IG51bGwgPSBudWxsKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuXHRcdHRoaXMuaW5pdGlhbGl6ZXIgPSBpbml0aWFsaXplcjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xhc3NNZXRob2REZWZpbml0aW9uIHtcblx0bmFtZTogc3RyaW5nO1xuXHRwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW107XG5cdHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbDtcblx0bW9kaWZpZXJzOiBNb2RpZmllcnM7XG5cdGNoaWxkcmVuOiBBU1ROb2RlW107XG5cdGlzQ29uc3RydWN0b3I6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sIHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbCwgbW9kaWZpZXJzOiBNb2RpZmllcnMsIGNoaWxkcmVuOiBBU1ROb2RlW10pIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG5cdFx0dGhpcy5yZXR1cm5UeXBlID0gcmV0dXJuVHlwZTtcblx0XHR0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcblx0XHR0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG5cdFx0dGhpcy5pc0NvbnN0cnVjdG9yID0gbmFtZSA9PT0gR1JBTU1BUi5DT05TVFJVQ1RPUjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xhc3NEZWZpbml0aW9uIHtcblx0bm9kZTogQVNUQ2xhc3NOb2RlO1xuXHRuYW1lOiBzdHJpbmc7XG5cdHN1cGVyQ2xhc3M6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRpbnN0YW5jZUZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXTtcblx0aW5zdGFuY2VNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH07XG5cdHN0YXRpY0ZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXTtcblx0c3RhdGljTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9O1xuXHRjb25zdHJ1Y3Rvck1ldGhvZDogQ2xhc3NNZXRob2REZWZpbml0aW9uIHwgbnVsbCA9IG51bGw7XG5cdG5hdGl2ZUluc3RhbmNlOiBhbnkgPSBudWxsO1xuXHRpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRjbGFzc05vZGU6IEFTVENsYXNzTm9kZSxcblx0XHRzdXBlckNsYXNzOiBzdHJpbmcgfCBudWxsLFxuXHRcdG5hbWU6IHN0cmluZyxcblx0XHRpbnN0YW5jZUZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXSxcblx0XHRpbnN0YW5jZU1ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfSxcblx0XHRzdGF0aWNGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW10sXG5cdFx0c3RhdGljTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9LFxuXHRcdGNvbnN0cnVjdG9yTWV0aG9kOiBDbGFzc01ldGhvZERlZmluaXRpb24gfCBudWxsID0gbnVsbFxuXHQpIHtcblx0XHR0aGlzLm5vZGUgPSBjbGFzc05vZGU7XG5cdFx0dGhpcy5zdXBlckNsYXNzID0gc3VwZXJDbGFzcztcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuaW5zdGFuY2VGaWVsZHMgPSBpbnN0YW5jZUZpZWxkcztcblx0XHR0aGlzLmluc3RhbmNlTWV0aG9kcyA9IGluc3RhbmNlTWV0aG9kcztcblx0XHR0aGlzLnN0YXRpY0ZpZWxkcyA9IHN0YXRpY0ZpZWxkcztcblx0XHR0aGlzLnN0YXRpY01ldGhvZHMgPSBzdGF0aWNNZXRob2RzO1xuXHRcdHRoaXMuY29uc3RydWN0b3JNZXRob2QgPSBjb25zdHJ1Y3Rvck1ldGhvZDtcblx0XHR0aGlzLmlzT3BlbiA9IGNsYXNzTm9kZS5tb2RpZmllcnMub3Blbjtcblx0fVxuXG5cdHN0YXRpYyBmcm9tQVNUKG5vZGU6IEFTVENsYXNzTm9kZSk6IENsYXNzRGVmaW5pdGlvbiB7XG5cdFx0Y29uc3QgaW5zdGFuY2VGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW10gPSBbXTtcblx0XHRjb25zdCBpbnN0YW5jZU1ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfSA9IHt9O1xuXHRcdGNvbnN0IHN0YXRpY0ZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXSA9IFtdO1xuXHRcdGNvbnN0IHN0YXRpY01ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfSA9IHt9O1xuXHRcdGxldCBjb25zdHJ1Y3Rvck1ldGhvZDogQ2xhc3NNZXRob2REZWZpbml0aW9uIHwgbnVsbCA9IG51bGw7XG5cblx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChjaGlsZCBpbnN0YW5jZW9mIEFTVEZpZWxkTm9kZSkge1xuXHRcdFx0XHRjb25zdCBmaWVsZCA9IG5ldyBDbGFzc0ZpZWxkRGVmaW5pdGlvbihcblx0XHRcdFx0XHRjaGlsZC5uYW1lLFxuXHRcdFx0XHRcdGNoaWxkLmZpZWxkVHlwZVxuXHRcdFx0XHRcdFx0PyBjaGlsZC5maWVsZFR5cGUubmFtZVxuXHRcdFx0XHRcdFx0OiBudWxsLFxuXHRcdFx0XHRcdGNoaWxkLm1vZGlmaWVycyxcblx0XHRcdFx0XHRjaGlsZC5pbml0XG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0aWYgKGZpZWxkLm1vZGlmaWVycy5zdGF0aWMpIHtcblx0XHRcdFx0XHRzdGF0aWNGaWVsZHMucHVzaChmaWVsZCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aW5zdGFuY2VGaWVsZHMucHVzaChmaWVsZCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoY2hpbGQgaW5zdGFuY2VvZiBBU1RNZXRob2ROb2RlKSB7XG5cdFx0XHRcdGNvbnN0IG1ldGhvZCA9IG5ldyBDbGFzc01ldGhvZERlZmluaXRpb24oXG5cdFx0XHRcdFx0Y2hpbGQubmFtZSxcblx0XHRcdFx0XHRjaGlsZC5wYXJhbWV0ZXJzLFxuXHRcdFx0XHRcdGNoaWxkLnJldHVyblR5cGUsXG5cdFx0XHRcdFx0Y2hpbGQubW9kaWZpZXJzLFxuXHRcdFx0XHRcdGNoaWxkLmNoaWxkcmVuXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGlmIChtZXRob2QuaXNDb25zdHJ1Y3Rvcikge1xuXHRcdFx0XHRcdGNvbnN0cnVjdG9yTWV0aG9kID0gbWV0aG9kO1xuXHRcdFx0XHR9IGVsc2UgaWYgKG1ldGhvZC5tb2RpZmllcnMuc3RhdGljKSB7XG5cdFx0XHRcdFx0c3RhdGljTWV0aG9kc1ttZXRob2QubmFtZV0gPSBtZXRob2Q7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aW5zdGFuY2VNZXRob2RzW21ldGhvZC5uYW1lXSA9IG1ldGhvZDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVuaGFuZGxlZCBub2RlICR7Y2hpbGQudHlwZX0uYCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBDbGFzc0RlZmluaXRpb24oXG5cdFx0XHRub2RlLFxuXHRcdFx0bm9kZS5zdXBlckNsYXNzPy5uYW1lIHx8IG51bGwsXG5cdFx0XHRub2RlLm5hbWUsXG5cdFx0XHRpbnN0YW5jZUZpZWxkcyxcblx0XHRcdGluc3RhbmNlTWV0aG9kcyxcblx0XHRcdHN0YXRpY0ZpZWxkcyxcblx0XHRcdHN0YXRpY01ldGhvZHMsXG5cdFx0XHRjb25zdHJ1Y3Rvck1ldGhvZFxuXHRcdCk7XG5cdH1cblxuXHRmaW5kTWV0aG9kTm9kZShuYW1lOiBzdHJpbmcpOiBBU1RNZXRob2ROb2RlIHtcblx0XHRjb25zdCBub2RlID0gdGhpcy5ub2RlXG5cdFx0ICAgICAgICAgICAgICAgICAuY2hpbGRyZW5cblx0XHQgICAgICAgICAgICAgICAgIC5maW5kKG5vZGUgPT4gbm9kZS5uYW1lID09PSBuYW1lKTtcblxuXHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUTWV0aG9kTm9kZSkge1xuXHRcdFx0cmV0dXJuIG5vZGU7XG5cdFx0fVxuXG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYE1ldGhvZCAke25hbWV9IG5vdCBmb3VuZCBpbiBjbGFzcyAke3RoaXMubmFtZX0uYCk7XG5cdH1cblxuXHRmaW5kSW5zdGFuY2VGaWVsZERlZmluaXRpb24obmFtZTogc3RyaW5nKTogQ2xhc3NGaWVsZERlZmluaXRpb24ge1xuXHRcdGNvbnN0IGZpZWxkRGVmaW5pdGlvbjogQ2xhc3NGaWVsZERlZmluaXRpb24gfCB1bmRlZmluZWQgPSB0aGlzLmluc3RhbmNlRmllbGRzXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmluZCgoZmllbGQ6IENsYXNzRmllbGREZWZpbml0aW9uKTogYm9vbGVhbiA9PiBmaWVsZC5uYW1lID09PSBuYW1lKTtcblxuXHRcdGlmIChmaWVsZERlZmluaXRpb24gaW5zdGFuY2VvZiBDbGFzc0ZpZWxkRGVmaW5pdGlvbikge1xuXHRcdFx0cmV0dXJuIGZpZWxkRGVmaW5pdGlvbjtcblx0XHR9XG5cblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgRmllbGQgJHtuYW1lfSBub3QgZm91bmQgaW4gY2xhc3MgJHt0aGlzLm5hbWV9LmApO1xuXHR9XG5cblx0Y29uc3RydWN0RW1wdHlJbnN0YW5jZSgpOiBJbnN0YW5jZSB7XG5cdFx0cmV0dXJuIG5ldyBJbnN0YW5jZSh0aGlzKTtcblx0fVxuXG5cdGNvbnN0cnVjdE5hdGl2ZUluc3RhbmNlKGFyZ3M6IGFueVtdID0gW10pOiBJbnN0YW5jZSB7XG5cdFx0Y29uc3QgaW5zdGFuY2U6IEluc3RhbmNlID0gdGhpcy5jb25zdHJ1Y3RFbXB0eUluc3RhbmNlKCk7XG5cdFx0aW5zdGFuY2UuX19uYXRpdmVJbnN0YW5jZSA9IG5ldyB0aGlzLm5hdGl2ZUluc3RhbmNlKC4uLmFyZ3MpO1xuXHRcdHJldHVybiBpbnN0YW5jZTtcblx0fVxuXG5cdGNvbnN0cnVjdE5ld0luc3RhbmNlV2l0aG91dEFyZ3VtZW50cyhvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IEluc3RhbmNlIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3ROZXdJbnN0YW5jZShbXSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcblx0fVxuXG5cdGNvbnN0cnVjdE5ld0luc3RhbmNlKGFyZ3M6IEFTVE5vZGVbXSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiBJbnN0YW5jZSB7XG5cdFx0Y29uc3QgbmV3Tm9kZSA9IG5ldyBBU1ROZXdOb2RlKGFyZ3MsIG5ldyBBU1RUeXBlTm9kZShBU1RUeXBlTm9kZS5LSU5EX1NJTVBMRSwgdGhpcy5uYW1lKSk7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0SW5zdGFuY2VCeU5ld05vZGUobmV3Tm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcblx0fVxuXG5cdGNvbnN0cnVjdEluc3RhbmNlQnlOZXdOb2RlKGV4cHI6IEFTVE5ld05vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogSW5zdGFuY2Uge1xuXHRcdGNvbnN0IGluc3RhbmNlOiBJbnN0YW5jZSA9IHRoaXMuY29uc3RydWN0RW1wdHlJbnN0YW5jZSgpO1xuXG5cdFx0b2JqZWN0UmVnaXN0cnkuaW5zdGFuY2VzLnJlZ2lzdGVyKGluc3RhbmNlKTtcblxuXHRcdGluc3RhbmNlLmluaXRpYWxpemVJbnN0YW5jZUZpZWxkcyhvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXG5cdFx0aWYgKCF0aGlzLmNvbnN0cnVjdG9yTWV0aG9kKSB7XG5cdFx0XHRyZXR1cm4gaW5zdGFuY2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY29uc3RydWN0b3I6IENsYXNzTWV0aG9kRGVmaW5pdGlvbiA9IHRoaXMuY29uc3RydWN0b3JNZXRob2Q7XG5cdFx0Y29uc3QgY29uc3RydWN0b3JFbnYgPSBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpO1xuXG5cdFx0Y29uc3QgY29uc3RydWN0b3JBcmdzID0gZXZhbE1ldGhvZEFyZ3VtZW50cyhcblx0XHRcdGV4cHIsXG5cdFx0XHRjb25zdHJ1Y3Rvci5wYXJhbWV0ZXJzLFxuXHRcdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0XHRlbnZpcm9ubWVudCxcblx0XHRcdGV2ZW50UGlwZWxpbmUsXG5cdFx0XHRpbnN0YW5jZVxuXHRcdCk7XG5cblx0XHRjb25zdHJ1Y3RvckVudi5kZWZpbmUoR1JBTU1BUi5USElTLCBpbnN0YW5jZSk7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNvbnN0cnVjdG9yQXJncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgcGFyYW1ldGVyOiBBU1RQYXJhbWV0ZXJOb2RlIHwgdW5kZWZpbmVkID0gY29uc3RydWN0b3IucGFyYW1ldGVyc1tpXTtcblx0XHRcdGlmIChwYXJhbWV0ZXIpIHtcblx0XHRcdFx0Y29uc3RydWN0b3JFbnYuZGVmaW5lKHBhcmFtZXRlci5uYW1lLCBjb25zdHJ1Y3RvckFyZ3NbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgY2hpbGQgb2YgY29uc3RydWN0b3IuY2hpbGRyZW4pIHtcblx0XHRcdGV2YWxOb2RlKGNoaWxkLCBvYmplY3RSZWdpc3RyeSwgY29uc3RydWN0b3JFbnYsIGV2ZW50UGlwZWxpbmUsIGluc3RhbmNlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaW5zdGFuY2U7XG5cdH1cblxuXHRjb25zdHJ1Y3ROYXRpdmVJbnN0YW5jZUJ5TmV3Tm9kZShleHByOiBBU1ROZXdOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IEluc3RhbmNlIHtcblx0XHRjb25zdCBpbnN0YW5jZTogSW5zdGFuY2UgPSB0aGlzLmNvbnN0cnVjdEVtcHR5SW5zdGFuY2UoKTtcblxuXHRcdG9iamVjdFJlZ2lzdHJ5Lmluc3RhbmNlcy5yZWdpc3RlcihpbnN0YW5jZSk7XG5cblx0XHRjb25zdCBjb25zdHJ1Y3RvcjogQ2xhc3NNZXRob2REZWZpbml0aW9uIHwgbnVsbCA9IHRoaXMuY29uc3RydWN0b3JNZXRob2Q7XG5cdFx0Y29uc3QgY29uc3RydWN0b3JFbnY6IEVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblxuXHRcdGNvbnN0IGNvbnN0cnVjdG9yQXJnczogYW55W10gPSBldmFsTWV0aG9kQXJndW1lbnRzKFxuXHRcdFx0ZXhwcixcblx0XHRcdGNvbnN0cnVjdG9yXG5cdFx0XHRcdD8gY29uc3RydWN0b3IucGFyYW1ldGVyc1xuXHRcdFx0XHQ6IFtdLFxuXHRcdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0XHRlbnZpcm9ubWVudCxcblx0XHRcdGV2ZW50UGlwZWxpbmUsXG5cdFx0XHRpbnN0YW5jZVxuXHRcdCk7XG5cblx0XHRjb25zdHJ1Y3RvckVudi5kZWZpbmUoR1JBTU1BUi5USElTLCBpbnN0YW5jZSk7XG5cblx0XHRpZiAodGhpcy5uYXRpdmVJbnN0YW5jZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoJ0NsYXNzIGhhcyBubyBuYXRpdmUgaW5zdGFuY2UnKTtcblx0XHR9XG5cblx0XHRjb25zdCBuYXRpdmVJbnN0YW5jZSA9IG5ldyB0aGlzLm5hdGl2ZUluc3RhbmNlKC4uLmNvbnN0cnVjdG9yQXJncy5tYXAoZnJvbUx5cmFWYWx1ZSkpO1xuXHRcdGlmIChuYXRpdmVJbnN0YW5jZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdGluc3RhbmNlLl9fbmF0aXZlSW5zdGFuY2UgPSBuYXRpdmVJbnN0YW5jZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaW5zdGFuY2U7XG5cdH1cblxuXHRpbml0aWFsaXplSW5zdGFuY2VGaWVsZHMoaW5zdGFuY2U6IEluc3RhbmNlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IHZvaWQge1xuXHRcdGlmIChpbnN0YW5jZS5fX2ZpZWxkc0luaXRpYWxpemVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0IHJhd1ZhbHVlO1xuXHRcdGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5pbnN0YW5jZUZpZWxkcykge1xuXHRcdFx0cmF3VmFsdWUgPSBmaWVsZC5pbml0aWFsaXplclxuXHRcdFx0XHQ/IGV2YWxFeHByZXNzaW9uKGZpZWxkLmluaXRpYWxpemVyLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpXG5cdFx0XHRcdDogbnVsbDtcblxuXHRcdFx0aW5zdGFuY2UuX19pbnN0YW5jZUZpZWxkc1tmaWVsZC5uYW1lXSA9IGNhc3RWYWx1ZShyYXdWYWx1ZSwgZmllbGQudHlwZSk7XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5zdGF0aWNGaWVsZHMpIHtcblx0XHRcdHJhd1ZhbHVlID0gZmllbGQuaW5pdGlhbGl6ZXJcblx0XHRcdFx0PyBldmFsRXhwcmVzc2lvbihmaWVsZC5pbml0aWFsaXplciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKVxuXHRcdFx0XHQ6IG51bGw7XG5cblx0XHRcdGluc3RhbmNlLl9fc3RhdGljRmllbGRzW2ZpZWxkLm5hbWVdID0gY2FzdFZhbHVlKHJhd1ZhbHVlLCBmaWVsZC50eXBlKTtcblx0XHR9XG5cblx0XHRpbnN0YW5jZS5fX2ZpZWxkc0luaXRpYWxpemVkID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgSW50ZXJmYWNlRGVmaW5pdGlvbiB7XG5cdG5vZGU6IEFTVEludGVyZmFjZU5vZGU7XG5cdG5hbWU6IHN0cmluZztcblx0c3RhdGljRmllbGRzOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbltdO1xuXHRpbnN0YW5jZU1ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRpbnRlcmZhY2VOb2RlOiBBU1RJbnRlcmZhY2VOb2RlLFxuXHRcdG5hbWU6IHN0cmluZyxcblx0XHRzdGF0aWNGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW10sXG5cdFx0aW5zdGFuY2VNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH0sXG5cdCkge1xuXHRcdHRoaXMubm9kZSA9IGludGVyZmFjZU5vZGU7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnN0YXRpY0ZpZWxkcyA9IHN0YXRpY0ZpZWxkcztcblx0XHR0aGlzLmluc3RhbmNlTWV0aG9kcyA9IGluc3RhbmNlTWV0aG9kcztcblx0fVxuXG5cdHN0YXRpYyBmcm9tQVNUKG5vZGU6IEFTVEludGVyZmFjZU5vZGUpOiBJbnRlcmZhY2VEZWZpbml0aW9uIHtcblx0XHRjb25zdCBzdGF0aWNGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW10gPSBbXTtcblx0XHRjb25zdCBpbnN0YW5jZU1ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfSA9IHt9O1xuXG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAoY2hpbGQgaW5zdGFuY2VvZiBBU1RGaWVsZE5vZGUpIHtcblx0XHRcdFx0Y29uc3QgZmllbGQgPSBuZXcgQ2xhc3NGaWVsZERlZmluaXRpb24oXG5cdFx0XHRcdFx0Y2hpbGQubmFtZSxcblx0XHRcdFx0XHRjaGlsZC5maWVsZFR5cGVcblx0XHRcdFx0XHRcdD8gY2hpbGQuZmllbGRUeXBlLm5hbWVcblx0XHRcdFx0XHRcdDogbnVsbCxcblx0XHRcdFx0XHRjaGlsZC5tb2RpZmllcnMsXG5cdFx0XHRcdFx0Y2hpbGQuaW5pdCA/PyBudWxsXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0c3RhdGljRmllbGRzLnB1c2goZmllbGQpO1xuXHRcdFx0fSBlbHNlIGlmIChjaGlsZCBpbnN0YW5jZW9mIEFTVE1ldGhvZE5vZGUpIHtcblx0XHRcdFx0Y29uc3QgbWV0aG9kID0gbmV3IENsYXNzTWV0aG9kRGVmaW5pdGlvbihcblx0XHRcdFx0XHRjaGlsZC5uYW1lLFxuXHRcdFx0XHRcdGNoaWxkLnBhcmFtZXRlcnMsXG5cdFx0XHRcdFx0Y2hpbGQucmV0dXJuVHlwZSxcblx0XHRcdFx0XHRjaGlsZC5tb2RpZmllcnMsXG5cdFx0XHRcdFx0Y2hpbGQuY2hpbGRyZW5cblx0XHRcdFx0KTtcblxuXHRcdFx0XHRpbnN0YW5jZU1ldGhvZHNbbWV0aG9kLm5hbWVdID0gbWV0aG9kO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVuaGFuZGxlZCBub2RlICR7Y2hpbGQudHlwZX0uYCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBJbnRlcmZhY2VEZWZpbml0aW9uKFxuXHRcdFx0bm9kZSxcblx0XHRcdG5vZGUubmFtZSxcblx0XHRcdHN0YXRpY0ZpZWxkcyxcblx0XHRcdGluc3RhbmNlTWV0aG9kc1xuXHRcdCk7XG5cdH1cbn1cblxuIiwKICAgICJpbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4vcGFyc2VyXCI7XG5pbXBvcnQge0dSQU1NQVIsIFRva2VuLCBUb2tlblR5cGUsIFRZUEVfRU5VTX0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcbmltcG9ydCB7TW9kaWZpZXJzLCBTdXBlckNsYXNzfSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtcblx0QVNUQW5ub3RhdGlvbk5vZGUsXG5cdEFTVEFycmF5Tm9kZSxcblx0QVNUQXNzaWdubWVudE5vZGUsXG5cdEFTVEJpbmFyeU5vZGUsXG5cdEFTVENhbGxOb2RlLFxuXHRBU1RDbGFzc05vZGUsXG5cdEFTVEVsc2VOb2RlLFxuXHRBU1RFeHByZXNzaW9uTm9kZSxcblx0QVNURmllbGROb2RlLFxuXHRBU1RGb3JlYWNoTm9kZSxcblx0QVNUSWZOb2RlLFxuXHRBU1RJbXBvcnROb2RlLFxuXHRBU1RJbmRleE5vZGUsXG5cdEFTVEludGVyZmFjZU5vZGUsXG5cdEFTVExhbWJkYU5vZGUsXG5cdEFTVE1hdGNoQ2FzZU5vZGUsXG5cdEFTVE1hdGNoTm9kZSxcblx0QVNUTWVtYmVyTm9kZSxcblx0QVNUTWV0aG9kTm9kZSxcblx0QVNUTmV3Tm9kZSxcblx0QVNUTm9kZSxcblx0QVNUTm9kZVR5cGUsXG5cdEFTVE9wZXJhdG9yTm9kZSxcblx0QVNUUGFyYW1ldGVyTm9kZSxcblx0QVNUUmV0dXJuTm9kZSxcblx0QVNUVGhlbk5vZGUsXG5cdEFTVFR5cGVOb2RlLFxuXHRBU1RVbmFyeU5vZGUsXG5cdEFTVFZhcmlhYmxlTm9kZSxcblx0QVNUVkRvbUV4cHJlc3Npb25Ob2RlLFxuXHRBU1RWRG9tTm9kZSxcblx0QVNUVkRvbVRleHROb2RlXG59IGZyb20gXCIuLi9hc3RcIjtcbmltcG9ydCB7dGhyb3dQYXJzZXJFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuaW1wb3J0IHtzcGFuRnJvbX0gZnJvbSBcIi4vcGFyc2VyX3NvdXJjZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWl4ZWRUeXBlKCk6IEFTVFR5cGVOb2RlIHtcblx0cmV0dXJuIG5ldyBBU1RUeXBlTm9kZShBU1RUeXBlTm9kZS5LSU5EX1NJTVBMRSwgVFlQRV9FTlVNLk1JWEVEKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVHlwZShwYXJzZXI6IFBhcnNlcik6IEFTVFR5cGVOb2RlIHtcblx0bGV0IHR5cGU7XG5cblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTikge1xuXHRcdHR5cGUgPSBwYXJzZUxhbWJkYVR5cGUocGFyc2VyKTtcblx0fSBlbHNlIHtcblx0XHR0eXBlID0gcGFyc2VTaW1wbGVPckdlbmVyaWNUeXBlKHBhcnNlcik7XG5cdH1cblxuXHRpZiAocGFyc2VyLmNvbnN1bWVJZk9wZXJhdG9yKEdSQU1NQVIuUVVFU1RJT05fTUFSSykpIHtcblx0XHR0eXBlLm51bGxhYmxlID0gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUeXBlUGFyYW1ldGVycyhwYXJzZXI6IFBhcnNlcik6IHN0cmluZ1tdIHtcblx0Y29uc3QgcGFyYW1ldGVycyA9IFtdO1xuXG5cdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkxFU1NfVEhBTik7XG5cblx0ZG8ge1xuXHRcdGNvbnN0IG5hbWUgPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpLnZhbHVlO1xuXHRcdHBhcmFtZXRlcnMucHVzaChuYW1lKTtcblxuXHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLkNPTU1BKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cGFyc2VyLm5leHQoKTtcblx0fSB3aGlsZSAodHJ1ZSk7XG5cblx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuR1JFQVRFUl9USEFOKTtcblxuXHRyZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU2ltcGxlT3JHZW5lcmljVHlwZShwYXJzZXI6IFBhcnNlcik6IEFTVFR5cGVOb2RlIHtcblx0Y29uc3QgbmFtZVRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RUeXBlTm9kZShBU1RUeXBlTm9kZS5LSU5EX1NJTVBMRSwgbmFtZVRva2VuLnZhbHVlKTtcblxuXHRpZiAocGFyc2VyLmNvbnN1bWVJZk9wZXJhdG9yKEdSQU1NQVIuTEVTU19USEFOKSkge1xuXG5cdFx0bm9kZS5raW5kID0gQVNUVHlwZU5vZGUuS0lORF9HRU5FUklDO1xuXG5cdFx0ZG8ge1xuXHRcdFx0bm9kZS50eXBlQXJndW1lbnRzLnB1c2gocGFyc2VUeXBlKHBhcnNlcikpO1xuXHRcdH0gd2hpbGUgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSk7XG5cblx0XHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5HUkVBVEVSX1RIQU4pO1xuXHR9XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUxhbWJkYVR5cGUocGFyc2VyOiBQYXJzZXIpOiBBU1RUeXBlTm9kZSB7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUVHlwZU5vZGUoQVNUVHlwZU5vZGUuS0lORF9MQU1CREEsICdsYW1iZGEnKTtcblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKTtcblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSkge1xuXHRcdGRvIHtcblx0XHRcdG5vZGUucGFyYW1ldGVyVHlwZXMucHVzaChwYXJzZVR5cGUocGFyc2VyKSk7XG5cdFx0fSB3aGlsZSAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKTtcblx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuQVJST1cpO1xuXG5cdG5vZGUucmV0dXJuVHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQcm9ncmFtKHBhcnNlcjogUGFyc2VyKTogQVNUTm9kZSB7XG5cdGNvbnN0IGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXTtcblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudHlwZSAhPT0gVG9rZW5UeXBlLkVPRikge1xuXHRcdGlmIChwYXJzZXIucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5DT01NRU5UKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBub2RlOiBBU1ROb2RlIHwgbnVsbCA9IHBhcnNlU3RhdGVtZW50KHBhcnNlcik7XG5cdFx0XHRpZiAobm9kZSkge1xuXHRcdFx0XHRjaGlsZHJlbi5wdXNoKG5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuUFJPR1JBTSwgY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTdGF0ZW1lbnQocGFyc2VyOiBQYXJzZXIpOiBBU1ROb2RlIHwgbnVsbCB7XG5cdGlmIChwYXJzZXIuY29uc3VtZUlmQ29tbWVudCgpKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRzd2l0Y2ggKHBhcnNlci5wZWVrKCkudmFsdWUpIHtcblx0XHRjYXNlIEdSQU1NQVIuSU1QT1JUOiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VJbXBvcnQocGFyc2VyKTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLk9QRU46XG5cdFx0Y2FzZSBHUkFNTUFSLkNMQVNTOiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VDbGFzc0RlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5JTlRFUkZBQ0U6IHtcblx0XHRcdHJldHVybiBwYXJzZUludGVyZmFjZURlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5SRVRVUk46IHtcblx0XHRcdHJldHVybiBwYXJzZVJldHVyblN0YXRlbWVudChwYXJzZXIpO1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTEVUOiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VWYXJpYWJsZURlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5JRjoge1xuXHRcdFx0cmV0dXJuIHBhcnNlSWZEZWNsYXJhdGlvbihwYXJzZXIpO1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTUFUQ0g6IHtcblx0XHRcdHJldHVybiBwYXJzZU1hdGNoRGVjbGFyYXRpb24ocGFyc2VyKTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkZPUkVBQ0g6IHtcblx0XHRcdHJldHVybiBwYXJzZUZvcmVhY2hEZWNsYXJhdGlvbihwYXJzZXIpO1xuXHRcdH1cblx0XHRkZWZhdWx0OiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VFeHByZXNzaW9uU3RhdGVtZW50KHBhcnNlcik7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJldHVyblN0YXRlbWVudChwYXJzZXI6IFBhcnNlcik6IEFTVFJldHVybk5vZGUge1xuXHRwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLlJFVFVSTik7XG5cblx0bGV0IGFyZ3VtZW50ID0gbnVsbDtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuU0VNSUNPTE9OKSB7XG5cdFx0YXJndW1lbnQgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlNFTUlDT0xPTik7XG5cblx0cmV0dXJuIG5ldyBBU1RSZXR1cm5Ob2RlKGFyZ3VtZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSW1wb3J0KHBhcnNlcjogUGFyc2VyKTogQVNUSW1wb3J0Tm9kZSB7XG5cdHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuSU1QT1JUKTtcblxuXHRsZXQgbmFtZXMgPSBbXTtcblx0bGV0IGZyb20gPSBudWxsO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5CUkFDRV9PUEVOKSB7XG5cdFx0bmFtZXMgPSBwYXJzZUltcG9ydExpc3QocGFyc2VyKTtcblx0XHRwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLkZST00pO1xuXHRcdGZyb20gPSBwYXJzZXIuZXhwZWN0U3RyaW5nKCkudmFsdWU7XG5cdH0gZWxzZSB7XG5cdFx0bmFtZXMucHVzaChwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpLnZhbHVlKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlNFTUlDT0xPTik7XG5cblx0cmV0dXJuIG5ldyBBU1RJbXBvcnROb2RlKG5hbWVzLCBmcm9tKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSW1wb3J0TGlzdChwYXJzZXI6IFBhcnNlcik6IHN0cmluZ1tdIHtcblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfT1BFTik7XG5cblx0Y29uc3QgbmFtZXM6IHN0cmluZ1tdID0gW107XG5cblx0d2hpbGUgKHRydWUpIHtcblx0XHRjb25zdCBuYW1lVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXG5cdFx0bmFtZXMucHVzaChuYW1lVG9rZW4udmFsdWUpO1xuXG5cdFx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0YnJlYWs7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9DTE9TRSk7XG5cblx0cmV0dXJuIG5hbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDbGFzc0RlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUQ2xhc3NOb2RlIHtcblx0Y29uc3QgYW5ub3RhdGlvbnMgPSBwYXJzZUFubm90YXRpb25zKHBhcnNlcik7XG5cdGNvbnN0IG1vZGlmaWVycyA9IHBhcnNlTW9kaWZpZXJzKHBhcnNlciwgW0dSQU1NQVIuT1BFTl0pO1xuXG5cdGNvbnN0IGNsYXNzVG9rZW4gPSBwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLkNMQVNTKTtcblx0Y29uc3QgbmFtZVRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblxuXHRsZXQgdHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdID0gW107XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkxFU1NfVEhBTikge1xuXHRcdHR5cGVQYXJhbWV0ZXJzID0gcGFyc2VUeXBlUGFyYW1ldGVycyhwYXJzZXIpO1xuXHR9XG5cblx0bGV0IHN1cGVyQ2xhc3MgPSBudWxsO1xuXHRpZiAocGFyc2VyLmNvbnN1bWVJZktleXdvcmQoR1JBTU1BUi5FWFRFTkRTKSkge1xuXHRcdHN1cGVyQ2xhc3MgPSBuZXcgU3VwZXJDbGFzcyhcblx0XHRcdEFTVE5vZGVUeXBlLklERU5USUZJRVIsXG5cdFx0XHRwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpLnZhbHVlXG5cdFx0KTtcblx0fVxuXG5cdGxldCBpbXBsZW1lbnRzSW50ZXJmYWNlcyA9IFtdO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5JTVBMRU1FTlRTKSB7XG5cdFx0cGFyc2VyLm5leHQoKTtcblxuXHRcdGRvIHtcblx0XHRcdGNvbnN0IGludGVyZmFjZVR5cGUgPSBwYXJzZVR5cGUocGFyc2VyKTtcblx0XHRcdGltcGxlbWVudHNJbnRlcmZhY2VzLnB1c2goaW50ZXJmYWNlVHlwZSk7XG5cdFx0fSB3aGlsZSAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX09QRU4pO1xuXG5cdGNvbnN0IGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXTtcblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQlJBQ0VfQ0xPU0UpIHtcblx0XHRpZiAocGFyc2VyLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuQ09NTUVOVCkge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IG1lbWJlcjogQVNUTm9kZSB8IG51bGwgPSBwYXJzZUNsYXNzTWVtYmVyKHBhcnNlcik7XG5cdFx0aWYgKG1lbWJlciA9PT0gbnVsbCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGNoaWxkcmVuLnB1c2gobWVtYmVyKTtcblx0fVxuXG5cdGNvbnN0IGJyYWNlQ2xvc2VUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX0NMT1NFKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVENsYXNzTm9kZShcblx0XHRuYW1lVG9rZW4udmFsdWUsXG5cdFx0YW5ub3RhdGlvbnMsXG5cdFx0bW9kaWZpZXJzLFxuXHRcdHR5cGVQYXJhbWV0ZXJzLFxuXHRcdGltcGxlbWVudHNJbnRlcmZhY2VzLFxuXHRcdHN1cGVyQ2xhc3MsXG5cdFx0Y2hpbGRyZW5cblx0KTtcblxuXHRub2RlLnNwYW4gPSBzcGFuRnJvbShjbGFzc1Rva2VuLCBicmFjZUNsb3NlVG9rZW4pO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSW50ZXJmYWNlRGVjbGFyYXRpb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RJbnRlcmZhY2VOb2RlIHtcblx0Y29uc3QgYW5ub3RhdGlvbnMgPSBwYXJzZUFubm90YXRpb25zKHBhcnNlcik7XG5cdGNvbnN0IG1vZGlmaWVycyA9IHBhcnNlTW9kaWZpZXJzKHBhcnNlciwgW10pOyAvLyBpbnRlcmZhY2VzIHNpbmQgaW1wbGl6aXQgcHVibGljXG5cblx0Y29uc3QgaW50ZXJmYWNlVG9rZW4gPSBwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLklOVEVSRkFDRSk7XG5cdGNvbnN0IG5hbWVUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cblx0bGV0IHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5MRVNTX1RIQU4pIHtcblx0XHR0eXBlUGFyYW1ldGVycyA9IHBhcnNlVHlwZVBhcmFtZXRlcnMocGFyc2VyKTtcblx0fVxuXG5cdGxldCBleHRlbmRzSW50ZXJmYWNlcyA9IFtdO1xuXHRpZiAocGFyc2VyLmNvbnN1bWVJZktleXdvcmQoR1JBTU1BUi5FWFRFTkRTKSkge1xuXHRcdGRvIHtcblx0XHRcdGV4dGVuZHNJbnRlcmZhY2VzLnB1c2gocGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKS52YWx1ZSk7XG5cdFx0fSB3aGlsZSAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX09QRU4pO1xuXG5cdGNvbnN0IGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXTtcblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQlJBQ0VfQ0xPU0UpIHtcblx0XHRpZiAocGFyc2VyLmNvbnN1bWVJZkNvbW1lbnQoKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbWVtYmVyID0gcGFyc2VDbGFzc01lbWJlcihwYXJzZXIpO1xuXHRcdGlmIChtZW1iZXIgPT09IG51bGwpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChtZW1iZXIgaW5zdGFuY2VvZiBBU1RGaWVsZE5vZGUgJiYgIW1lbWJlci5tb2RpZmllcnMuc3RhdGljKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKCdJbnRlcmZhY2UgZmllbGRzIG11c3QgYmUgc3RhdGljLicpO1xuXHRcdH1cblxuXHRcdGlmIChtZW1iZXIgaW5zdGFuY2VvZiBBU1RNZXRob2ROb2RlICYmIG1lbWJlci5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKCdJbnRlcmZhY2UgbWV0aG9kcyBtdXN0IG5vdCBoYXZlIGEgYm9keS4nKTtcblx0XHR9XG5cblx0XHRjaGlsZHJlbi5wdXNoKG1lbWJlcik7XG5cdH1cblxuXHRjb25zdCBicmFjZUNsb3NlVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9DTE9TRSk7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RJbnRlcmZhY2VOb2RlKFxuXHRcdG5hbWVUb2tlbi52YWx1ZSxcblx0XHRhbm5vdGF0aW9ucyxcblx0XHRtb2RpZmllcnMsXG5cdFx0dHlwZVBhcmFtZXRlcnMsXG5cdFx0ZXh0ZW5kc0ludGVyZmFjZXMsXG5cdFx0Y2hpbGRyZW5cblx0KTtcblxuXHRub2RlLnNwYW4gPSBzcGFuRnJvbShpbnRlcmZhY2VUb2tlbiwgYnJhY2VDbG9zZVRva2VuKTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUFubm90YXRpb25zKHBhcnNlcjogUGFyc2VyKTogQVNUQW5ub3RhdGlvbk5vZGVbXSB7XG5cdGNvbnN0IGFubm90YXRpb25zID0gW107XG5cblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLkFOTk9UQVRJT04pIHtcblx0XHRhbm5vdGF0aW9ucy5wdXNoKHBhcnNlQW5ub3RhdGlvbihwYXJzZXIpKTtcblx0fVxuXG5cdHJldHVybiBhbm5vdGF0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQW5ub3RhdGlvbihwYXJzZXI6IFBhcnNlcik6IEFTVEFubm90YXRpb25Ob2RlIHtcblx0Y29uc3QgdG9rZW4gPSBwYXJzZXIuZXhwZWN0QW5ub3RhdGlvbigpO1xuXHRjb25zdCBub2RlID0gbmV3IEFTVEFubm90YXRpb25Ob2RlKHRva2VuLnZhbHVlKTtcblxuXHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTikpIHtcblx0XHR3aGlsZSAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSkge1xuXHRcdFx0Y29uc3Qga2V5ID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKS52YWx1ZTtcblx0XHRcdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkFTU0lHTik7XG5cblx0XHRcdGNvbnN0IHZhbHVlID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdFx0XHRub2RlLnByb3BlcnRpZXMuc2V0KGtleSwgdmFsdWUpO1xuXG5cdFx0XHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5DT01NQSkge1xuXHRcdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKTtcblx0fVxuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VNb2RpZmllcnMocGFyc2VyOiBQYXJzZXIsIGFsbG93ZWQ6IHN0cmluZ1tdKTogTW9kaWZpZXJzIHtcblx0Y29uc3QgbW9kaWZpZXJzOiB7IFtpbmRleDogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XG5cblx0YWxsb3dlZC5mb3JFYWNoKG1vZGlmaWVyID0+IG1vZGlmaWVyc1ttb2RpZmllcl0gPSBmYWxzZSk7XG5cblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLktFWVdPUkQgJiYgYWxsb3dlZC5pbmNsdWRlcyhwYXJzZXIucGVlaygpLnZhbHVlKSkge1xuXHRcdGNvbnN0IG1vZGlmaWVyID0gcGFyc2VyLm5leHQoKS52YWx1ZTtcblxuXHRcdGlmIChtb2RpZmllcnNbbW9kaWZpZXJdKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKGBEdXBsaWNhdGUgbW9kaWZpZXI6ICR7bW9kaWZpZXJ9YCk7XG5cdFx0fVxuXG5cdFx0bW9kaWZpZXJzW21vZGlmaWVyXSA9IHRydWU7XG5cdH1cblxuXHRyZXR1cm4gbmV3IE1vZGlmaWVycyhtb2RpZmllcnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXJzKHBhcnNlcjogUGFyc2VyKTogQVNUUGFyYW1ldGVyTm9kZVtdIHtcblx0Y29uc3QgcGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdID0gW107XG5cblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpIHtcblx0XHRyZXR1cm4gcGFyYW1ldGVycztcblx0fVxuXG5cdGRvIHtcblx0XHRjb25zdCBuYW1lVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXHRcdGxldCB0eXBlID0gbnVsbDtcblx0XHRsZXQgZGVmYXVsdFZhbHVlID0gbnVsbDtcblxuXHRcdGxldCB0eXBlVG9rZW4gPSBudWxsO1xuXHRcdGxldCBkZWZhdWx0VmFsdWVUb2tlbiA9IG51bGw7XG5cblx0XHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5DT0xPTikge1xuXHRcdFx0dHlwZVRva2VuID0gcGFyc2VyLm5leHQoKTtcblx0XHRcdHR5cGUgPSBwYXJzZVR5cGUocGFyc2VyKTtcblx0XHR9XG5cblx0XHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5BU1NJR04pIHtcblx0XHRcdGRlZmF1bHRWYWx1ZVRva2VuID0gcGFyc2VyLm5leHQoKTtcblx0XHRcdGRlZmF1bHRWYWx1ZSA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHRcdH1cblxuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUUGFyYW1ldGVyTm9kZShuYW1lVG9rZW4udmFsdWUsIHR5cGUsIGRlZmF1bHRWYWx1ZSk7XG5cdFx0bm9kZS5zcGFuID0gc3BhbkZyb20odHlwZVRva2VuIHx8IG5hbWVUb2tlbiwgZGVmYXVsdFZhbHVlVG9rZW4gfHwgbmFtZVRva2VuKTtcblxuXHRcdHBhcmFtZXRlcnMucHVzaChub2RlKTtcblx0fSB3aGlsZSAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKTtcblxuXHRyZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ2xhc3NNZW1iZXIocGFyc2VyOiBQYXJzZXIpOiBBU1ROb2RlIHwgbnVsbCB7XG5cdGNvbnN0IHN0YXJ0VG9rZW46IFRva2VuID0gcGFyc2VyLnBlZWsoKTtcblxuXHRjb25zdCBhbm5vdGF0aW9uczogQVNUQW5ub3RhdGlvbk5vZGVbXSA9IHBhcnNlQW5ub3RhdGlvbnMocGFyc2VyKTtcblx0Y29uc3QgbW9kaWZpZXJzOiBNb2RpZmllcnMgPSBwYXJzZU1vZGlmaWVycyhcblx0XHRwYXJzZXIsXG5cdFx0W1xuXHRcdFx0R1JBTU1BUi5QVUJMSUMsXG5cdFx0XHRHUkFNTUFSLlBSSVZBVEUsXG5cdFx0XHRHUkFNTUFSLlNUQVRJQyxcblx0XHRcdEdSQU1NQVIuUkVBRE9OTFlcblx0XHRdXG5cdCk7XG5cblx0aWYgKHBhcnNlci5wZWVrSXMoR1JBTU1BUi5PUEVSQVRPUikpIHtcblx0XHRyZXR1cm4gcGFyc2VPcGVyYXRvck1lbWJlcihwYXJzZXIsIHN0YXJ0VG9rZW4sIGFubm90YXRpb25zLCBtb2RpZmllcnMpO1xuXHR9XG5cblx0Y29uc3QgbmFtZVRva2VuOiBUb2tlbiA9IHBhcnNlci5leHBlY3RPbmVPZihbVG9rZW5UeXBlLklERU5USUZJRVIsIFRva2VuVHlwZS5LRVlXT1JEXSk7XG5cblx0bGV0IGZpZWxkVHlwZTogYW55ID0gbnVsbDtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQ09MT04pIHtcblx0XHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09MT04pKSB7XG5cdFx0XHRmaWVsZFR5cGUgPSBwYXJzZVR5cGUocGFyc2VyKTtcblx0XHR9XG5cdH1cblxuXHRsZXQgaW5pdDogYW55ID0gbnVsbDtcblx0aWYgKHBhcnNlci5jb25zdW1lSWZPcGVyYXRvcihHUkFNTUFSLkFTU0lHTikpIHtcblx0XHRpbml0ID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdH1cblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5TRU1JQ09MT04pIHtcblx0XHRpZiAoIW1vZGlmaWVycy5wdWJsaWMgJiYgIW1vZGlmaWVycy5wcml2YXRlKSB7XG5cdFx0XHRtb2RpZmllcnMucHJpdmF0ZSA9IHRydWU7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc2VtaWNvbG9uVG9rZW46IFRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuU0VNSUNPTE9OKTtcblxuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNURmllbGROb2RlKG5hbWVUb2tlbi52YWx1ZSwgbW9kaWZpZXJzLCBmaWVsZFR5cGUsIGluaXQpO1xuXHRcdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIHNlbWljb2xvblRva2VuKTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGxldCB0eXBlUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuTEVTU19USEFOKSB7XG5cdFx0dHlwZVBhcmFtZXRlcnMgPSBwYXJzZVR5cGVQYXJhbWV0ZXJzKHBhcnNlcik7XG5cdH1cblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKSB7XG5cdFx0aWYgKCFtb2RpZmllcnMucHVibGljICYmICFtb2RpZmllcnMucHJpdmF0ZSkge1xuXHRcdFx0bW9kaWZpZXJzLnB1YmxpYyA9IHRydWU7XG5cdFx0fVxuXG5cdFx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTik7XG5cdFx0Y29uc3QgcGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdID0gcGFyc2VQYXJhbWV0ZXJzKHBhcnNlcik7XG5cdFx0Y29uc3QgcGFyZW50aGVzZXNDbG9zZVRva2VuOiBUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKTtcblxuXHRcdGxldCByZXR1cm5UeXBlOiBhbnkgPSBudWxsO1xuXHRcdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT0xPTikpIHtcblx0XHRcdHJldHVyblR5cGUgPSBwYXJzZVR5cGUocGFyc2VyKTtcblx0XHR9XG5cblx0XHRjb25zdCBjaGlsZHJlbjogQVNUTm9kZVtdID0gcGFyc2VCbG9jayhwYXJzZXIpO1xuXG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RNZXRob2ROb2RlKFxuXHRcdFx0bmFtZVRva2VuLnZhbHVlLFxuXHRcdFx0bmFtZVRva2VuLnZhbHVlID09PSBHUkFNTUFSLkNPTlNUUlVDVE9SID8gQVNUTm9kZVR5cGUuQ09OU1RSVUNUT1IgOiBBU1ROb2RlVHlwZS5NRVRIT0QsXG5cdFx0XHRhbm5vdGF0aW9ucyxcblx0XHRcdG1vZGlmaWVycyxcblx0XHRcdHR5cGVQYXJhbWV0ZXJzLFxuXHRcdFx0cGFyYW1ldGVycyxcblx0XHRcdHJldHVyblR5cGUsXG5cdFx0XHRjaGlsZHJlblxuXHRcdCk7XG5cblx0XHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBwYXJlbnRoZXNlc0Nsb3NlVG9rZW4pO1xuXG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHR0aHJvd1BhcnNlckVycm9yKGBJbnZhbGlkIGNsYXNzIG1lbWJlcjogJHtuYW1lVG9rZW4udmFsdWV9YCk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlT3BlcmF0b3JNZW1iZXIocGFyc2VyOiBQYXJzZXIsIHN0YXJ0VG9rZW46IFRva2VuLCBhbm5vdGF0aW9uczogQVNUQW5ub3RhdGlvbk5vZGVbXSwgbW9kaWZpZXJzOiBNb2RpZmllcnMpOiBBU1RPcGVyYXRvck5vZGUge1xuXG5cdHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuT1BFUkFUT1IpO1xuXG5cdGxldCBvcGVyYXRvclRva2VuOiBUb2tlbjtcblx0dHJ5IHtcblx0XHRvcGVyYXRvclRva2VuID0gcGFyc2VyLmV4cGVjdE9wZXJhdG9yKCk7XG5cblx0fSBjYXRjaCAoZSkge1xuXHRcdHBhcnNlci5yZXdpbmQoKTtcblx0XHRwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigndScpO1xuXHRcdG9wZXJhdG9yVG9rZW4gPSBwYXJzZXIuZXhwZWN0T3BlcmF0b3IoKTtcblx0XHRvcGVyYXRvclRva2VuLnZhbHVlID0gJ3UnICsgb3BlcmF0b3JUb2tlbi52YWx1ZTtcblx0fVxuXG5cdGlmICghbW9kaWZpZXJzLnB1YmxpYyAmJiAhbW9kaWZpZXJzLnByaXZhdGUpIHtcblx0XHRtb2RpZmllcnMucHVibGljID0gdHJ1ZTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pO1xuXHRjb25zdCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10gPSBwYXJzZVBhcmFtZXRlcnMocGFyc2VyKTtcblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXG5cdGxldCByZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGwgPSBudWxsO1xuXHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09MT04pKSB7XG5cdFx0cmV0dXJuVHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHR9XG5cblx0Y29uc3QgY2hpbGRyZW46IEFTVE5vZGVbXSA9IHBhcnNlQmxvY2socGFyc2VyKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVE9wZXJhdG9yTm9kZShcblx0XHRvcGVyYXRvclRva2VuLnZhbHVlLFxuXHRcdGFubm90YXRpb25zLFxuXHRcdG1vZGlmaWVycyxcblx0XHRbXSxcblx0XHRwYXJhbWV0ZXJzLFxuXHRcdHJldHVyblR5cGUsXG5cdFx0Y2hpbGRyZW5cblx0KTtcblxuXHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBvcGVyYXRvclRva2VuKTtcblxuXHRpZiAoIUFTVE9wZXJhdG9yTm9kZS5PVkVSTE9BREFCTEVfT1BFUkFUT1JTLmluY2x1ZGVzKG5vZGUub3BlcmF0b3IpKSB7XG5cdFx0dGhyb3dQYXJzZXJFcnJvcihgT3BlcmF0b3IgJHtub2RlLm9wZXJhdG9yfSBpcyBub3Qgb3ZlcmxvYWRhYmxlLmAsIG5vZGUuc3Bhbilcblx0fVxuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VCbG9jayhwYXJzZXI6IFBhcnNlcik6IEFTVE5vZGVbXSB7XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLlNFTUlDT0xPTikge1xuXHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfT1BFTik7XG5cblx0Y29uc3QgY2hpbGRyZW4gPSBbXTtcblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQlJBQ0VfQ0xPU0UpIHtcblx0XHRpZiAocGFyc2VyLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuQ09NTUVOVCkge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjb25zdCBjaGlsZDogQVNUTm9kZSB8IG51bGwgPSBwYXJzZVN0YXRlbWVudChwYXJzZXIpO1xuXHRcdGlmIChjaGlsZCkge1xuXHRcdFx0Y2hpbGRyZW4ucHVzaChjaGlsZCk7XG5cdFx0fVxuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfQ0xPU0UpO1xuXG5cdHJldHVybiBjaGlsZHJlbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVmFyaWFibGVEZWNsYXJhdGlvbihwYXJzZXI6IFBhcnNlcik6IEFTVFZhcmlhYmxlTm9kZSB7XG5cdGNvbnN0IGxldFRva2VuID0gcGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5MRVQpO1xuXHRjb25zdCBuYW1lVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXG5cdGxldCB0eXBlQW5ub3RhdGlvbiA9IG51bGw7XG5cdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT0xPTikpIHtcblx0XHR0eXBlQW5ub3RhdGlvbiA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHR9XG5cblx0bGV0IGluaXQgPSBudWxsO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5BU1NJR04pIHtcblx0XHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5BU1NJR04pO1xuXHRcdGluaXQgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0fVxuXG5cdGNvbnN0IHNlbWljb2xvblRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuU0VNSUNPTE9OKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVFZhcmlhYmxlTm9kZShuYW1lVG9rZW4udmFsdWUsIHR5cGVBbm5vdGF0aW9uLCBpbml0KTtcblx0bm9kZS5zcGFuID0gc3BhbkZyb20obGV0VG9rZW4sIHNlbWljb2xvblRva2VuKTtcblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSWZEZWNsYXJhdGlvbihwYXJzZXI6IFBhcnNlcik6IEFTVElmTm9kZSB7XG5cdGNvbnN0IHN0YXJ0VG9rZW4gPSBwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLklGKTtcblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKTtcblx0Y29uc3QgY29uZGl0aW9uID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdGNvbnN0IHBhcmVudGhlc2VzQ2xvc2VUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVElmTm9kZShjb25kaXRpb24sIG5ldyBBU1RUaGVuTm9kZShwYXJzZUJsb2NrKHBhcnNlcikpKTtcblxuXHRpZiAocGFyc2VyLmNvbnN1bWVJZktleXdvcmQoR1JBTU1BUi5FTFNFKSkge1xuXHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLklGKSB7XG5cdFx0XHRub2RlLmVsc2UgPSBwYXJzZUlmRGVjbGFyYXRpb24ocGFyc2VyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bm9kZS5lbHNlID0gbmV3IEFTVEVsc2VOb2RlKHBhcnNlQmxvY2socGFyc2VyKSk7XG5cdFx0fVxuXHR9XG5cblx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgcGFyZW50aGVzZXNDbG9zZVRva2VuKTtcblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTWF0Y2hEZWNsYXJhdGlvbihwYXJzZXI6IFBhcnNlcik6IEFTVE1hdGNoTm9kZSB7XG5cdGNvbnN0IHN0YXJ0VG9rZW4gPSBwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLk1BVENIKTtcblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTik7XG5cblx0Y29uc3QgZXhwcmVzc2lvbiA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKTtcblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfT1BFTik7XG5cblx0Y29uc3QgbWF0Y2hDYXNlczogQVNUTWF0Y2hDYXNlTm9kZVtdID0gW107XG5cdGxldCBkZWZhdWx0Q2FzZTogQVNUTWF0Y2hDYXNlTm9kZSB8IG51bGwgPSBudWxsO1xuXG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLkJSQUNFX0NMT1NFKSB7XG5cdFx0Y29uc3QgbWF0Y2hDYXNlOiBBU1RNYXRjaENhc2VOb2RlID0gcGFyc2VNYXRjaENhc2VEZWNsYXJhdGlvbihwYXJzZXIpO1xuXHRcdGlmIChtYXRjaENhc2UudGVzdCA9PT0gbnVsbCkge1xuXHRcdFx0ZGVmYXVsdENhc2UgPSBtYXRjaENhc2U7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0bWF0Y2hDYXNlcy5wdXNoKG1hdGNoQ2FzZSk7XG5cdH1cblxuXHRjb25zdCBicmFjZUNsb3NlVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9DTE9TRSk7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RNYXRjaE5vZGUoZXhwcmVzc2lvbiwgbWF0Y2hDYXNlcywgZGVmYXVsdENhc2UpO1xuXHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBicmFjZUNsb3NlVG9rZW4pO1xuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VNYXRjaENhc2VEZWNsYXJhdGlvbihwYXJzZXI6IFBhcnNlcik6IEFTVE1hdGNoQ2FzZU5vZGUge1xuXHRjb25zdCBjYXNlTm9kZSA9IG5ldyBBU1RNYXRjaENhc2VOb2RlKCk7XG5cblx0aWYgKHBhcnNlci5jb25zdW1lSWZLZXl3b3JkKEdSQU1NQVIuREVGQVVMVCkpIHtcblx0XHRjYXNlTm9kZS50ZXN0ID0gbnVsbDtcblx0fSBlbHNlIHtcblx0XHRjYXNlTm9kZS50ZXN0ID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5DT0xPTik7XG5cblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQlJBQ0VfT1BFTikge1xuXHRcdGNhc2VOb2RlLmNoaWxkcmVuID0gcGFyc2VCbG9jayhwYXJzZXIpO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnN0IGNoaWxkOiBBU1ROb2RlIHwgbnVsbCA9IHBhcnNlU3RhdGVtZW50KHBhcnNlcik7XG5cdFx0aWYgKGNoaWxkKSB7XG5cdFx0XHRjYXNlTm9kZS5jaGlsZHJlbi5wdXNoKGNoaWxkKVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjYXNlTm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRm9yZWFjaERlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNURm9yZWFjaE5vZGUge1xuXHRjb25zdCBzdGFydFRva2VuID0gcGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5GT1JFQUNIKTtcblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKTtcblxuXHRjb25zdCBpdGVyYXRvclRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblx0Y29uc3QgaXRlcmF0b3IgPSBpdGVyYXRvclRva2VuLnZhbHVlO1xuXG5cdHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuSU4pO1xuXG5cdGNvbnN0IGl0ZXJhYmxlID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cblx0Y29uc3QgcGFyZW50aGVzZXNDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNURm9yZWFjaE5vZGUoaXRlcmF0b3IsIGl0ZXJhYmxlLCBwYXJzZUJsb2NrKHBhcnNlcikpO1xuXHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBwYXJlbnRoZXNlc0Nsb3NlVG9rZW4pO1xuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBcnJheShwYXJzZXI6IFBhcnNlcik6IEFTVEFycmF5Tm9kZSB7XG5cdGNvbnN0IHN0YXJ0VG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9PUEVOKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVEFycmF5Tm9kZSgpO1xuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX0NMT1NFKSB7XG5cdFx0ZG8ge1xuXHRcdFx0bm9kZS5lbGVtZW50cy5wdXNoKHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpKTtcblx0XHR9IHdoaWxlIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpO1xuXHR9XG5cblx0Y29uc3QgYnJhY2tldFNxdWFyZUNsb3NlVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9DTE9TRSk7XG5cblx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgYnJhY2tldFNxdWFyZUNsb3NlVG9rZW4pO1xuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VMYW1iZGEocGFyc2VyOiBQYXJzZXIpOiBBU1RMYW1iZGFOb2RlIHtcblx0Y29uc3Qgc3RhcnRUb2tlbjogVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9PUEVOKTtcblxuXHRjb25zdCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10gPSBbXTtcblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQVJST1cpIHtcblx0XHRjb25zdCBuYW1lOiBzdHJpbmcgPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpLnZhbHVlO1xuXHRcdGxldCB0eXBlOiBhbnkgPSBudWxsO1xuXHRcdGxldCBkZWZhdWx0VmFsdWU6IGFueSA9IG51bGw7XG5cblx0XHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09MT04pKSB7XG5cdFx0XHR0eXBlID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cdFx0fVxuXG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQVNTSUdOKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdFx0ZGVmYXVsdFZhbHVlID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdFx0fVxuXG5cdFx0cGFyYW1ldGVycy5wdXNoKG5ldyBBU1RQYXJhbWV0ZXJOb2RlKG5hbWUsIHR5cGUsIGRlZmF1bHRWYWx1ZSkpO1xuXG5cdFx0cGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuQVJST1cpO1xuXG5cdGxldCByZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSA9IGNyZWF0ZU1peGVkVHlwZSgpO1xuXHRpZiAocGFyc2VyLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuSURFTlRJRklFUikge1xuXHRcdHJldHVyblR5cGUgPSBwYXJzZVR5cGUocGFyc2VyKTtcblx0XHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5DT0xPTikge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuVHlwZSA9IGNyZWF0ZU1peGVkVHlwZSgpO1xuXHRcdFx0cGFyc2VyLnJld2luZCgpO1xuXHRcdH1cblx0fVxuXG5cdGxldCBjaGlsZHJlbiA9IFtdO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5CUkFDRV9PUEVOKSB7XG5cdFx0Y2hpbGRyZW4gPSBwYXJzZUJsb2NrKHBhcnNlcik7XG5cdH0gZWxzZSB7XG5cdFx0Y2hpbGRyZW4ucHVzaChwYXJzZUV4cHJlc3Npb24ocGFyc2VyKSk7XG5cdH1cblxuXHRjb25zdCBicmFjZUNsb3NlVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9DTE9TRSk7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RMYW1iZGFOb2RlKHBhcmFtZXRlcnMsIHJldHVyblR5cGUsIGNoaWxkcmVuKTtcblx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgYnJhY2VDbG9zZVRva2VuKTtcblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvb2tzTGlrZUxhbWJkYShwYXJzZXI6IFBhcnNlcik6IGJvb2xlYW4ge1xuXHRjb25zdCBzdGFydDogbnVtYmVyID0gcGFyc2VyLnBvc2l0aW9uKCk7XG5cblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQlJBQ0VfT1BFTikge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHBhcnNlci5uZXh0KCk7XG5cblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLklERU5USUZJRVIpIHtcblx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT0xPTikpIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0fVxuXHRcdGlmICghcGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRjb25zdCBpc0xhbWJkYTogYm9vbGVhbiA9IHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQVJST1c7XG5cdHBhcnNlci5zZWVrQXQoc3RhcnQpXG5cdHJldHVybiBpc0xhbWJkYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRXhwcmVzc2lvblN0YXRlbWVudChwYXJzZXI6IFBhcnNlcik6IEFTVEV4cHJlc3Npb25Ob2RlIHtcblx0Y29uc3QgZXhwcjogQVNUTm9kZSA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlNFTUlDT0xPTik7XG5cblx0cmV0dXJuIG5ldyBBU1RFeHByZXNzaW9uTm9kZShleHByKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VFeHByZXNzaW9uKHBhcnNlcjogUGFyc2VyLCBwcmVjZWRlbmNlOiBudW1iZXIgPSAwKTogQVNUTm9kZSB7XG5cdGxldCBleHByOiBBU1ROb2RlID0gcGFyc2VQb3N0Zml4KHBhcnNlciwgcGFyc2VVbmFyeShwYXJzZXIpKTtcblxuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdGNvbnN0IHRva2VuOiBUb2tlbiA9IHBhcnNlci5wZWVrKCk7XG5cdFx0aWYgKCF0b2tlbikge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0bGV0IHRva2VuUHJlY2VkZW5jZTogbnVtYmVyID0gbG9va3VwUHJlY2VkZW5jZSh0b2tlbik7XG5cdFx0aWYgKHRva2VuUHJlY2VkZW5jZSA8IHByZWNlZGVuY2UpIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5BU1NJR04pIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0XHRleHByID0gbmV3IEFTVEFzc2lnbm1lbnROb2RlKGV4cHIsIHBhcnNlRXhwcmVzc2lvbihwYXJzZXIsIHRva2VuUHJlY2VkZW5jZSkpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKEdSQU1NQVIuTUFUSF9PUEVSQVRPUlMuaW5jbHVkZXModG9rZW4udmFsdWUpXG5cdFx0XHR8fCBHUkFNTUFSLkxPR0lDX09QRVJBVE9SUy5pbmNsdWRlcyh0b2tlbi52YWx1ZSkpIHtcblx0XHRcdGNvbnN0IHN0YXJ0VG9rZW46IFRva2VuID0gcGFyc2VyLm5leHQoKTtcblx0XHRcdGNvbnN0IHJpZ2h0OiBBU1ROb2RlID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlciwgdG9rZW5QcmVjZWRlbmNlICsgMSk7XG5cdFx0XHRjb25zdCBlbmRUb2tlbjogVG9rZW4gPSBwYXJzZXIucGVlaygpO1xuXG5cdFx0XHRjb25zdCBub2RlID0gbmV3IEFTVEJpbmFyeU5vZGUoZXhwciwgcmlnaHQsIHRva2VuLnZhbHVlKTtcblx0XHRcdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIGVuZFRva2VuKTtcblx0XHRcdGV4cHIgPSBub2RlO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0YnJlYWs7XG5cdH1cblxuXHRyZXR1cm4gZXhwcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVkRvbUV4cHJlc3Npb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RWRG9tTm9kZSB7XG5cdHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuVkRPTSk7XG5cdHJldHVybiBwYXJzZVZEb21FbGVtZW50KHBhcnNlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVZEb21FbGVtZW50KHBhcnNlcjogUGFyc2VyKTogQVNUVkRvbU5vZGUge1xuXHRwYXJzZXIuY29uc3VtZUlmVGV4dCgpO1xuXG5cdGNvbnN0IHN0YXJ0VG9rZW46IFRva2VuID0gcGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuTEVTU19USEFOKTtcblx0Y29uc3QgdGFnVG9rZW46IFRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblx0Y29uc3QgdGFnOiBzdHJpbmcgPSB0YWdUb2tlbi52YWx1ZTtcblxuXHRwYXJzZXIuY29uc3VtZUlmVGV4dCgpO1xuXG5cdGNvbnN0IHByb3BzID0gbmV3IE1hcDxzdHJpbmcsIEFTVE5vZGU+KCk7XG5cdHdoaWxlICh0cnVlKSB7XG5cblx0XHRpZiAocGFyc2VyLnBlZWtJcyhHUkFNTUFSLkdSRUFURVJfVEhBTikpIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGlmIChwYXJzZXIucGVla0lzKEdSQU1NQVIuWE1MX0NMT1NFX1RBRykpIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGNvbnN0IG5hbWVUb2tlbjogVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXHRcdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkFTU0lHTik7XG5cblx0XHRsZXQgdmFsdWU6IEFTVE5vZGU7XG5cblx0XHRpZiAocGFyc2VyLnBlZWtJcyhHUkFNTUFSLkJSQUNFX09QRU4pKSB7XG5cdFx0XHRpZiAobG9va3NMaWtlTGFtYmRhKHBhcnNlcikpIHtcblx0XHRcdFx0dmFsdWUgPSBwYXJzZUxhbWJkYShwYXJzZXIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHRcdFx0dmFsdWUgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0XHRcdFx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfQ0xPU0UpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YWx1ZSA9IHBhcnNlUHJpbWFyeShwYXJzZXIpO1xuXHRcdH1cblxuXHRcdHByb3BzLnNldChuYW1lVG9rZW4udmFsdWUsIHZhbHVlKTtcblxuXHRcdHBhcnNlci5jb25zdW1lSWZUZXh0KCk7XG5cdH1cblxuXHRpZiAocGFyc2VyLnBlZWtJcyhHUkFNTUFSLlhNTF9DTE9TRV9UQUcpKSB7XG5cdFx0cGFyc2VyLm5leHQoKTtcblxuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUVkRvbU5vZGUodGFnLCBwcm9wcywgW10pO1xuXHRcdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIHBhcnNlci5wZWVrKCkpO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuR1JFQVRFUl9USEFOKTtcblxuXHRjb25zdCBjaGlsZHJlbjogQVNUTm9kZVtdID0gW107XG5cdHdoaWxlICghcGFyc2VyLnBlZWtJcyhHUkFNTUFSLlhNTF9PUEVOX0NMT1NFX1RBRykpIHtcblxuXHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkxFU1NfVEhBTikge1xuXHRcdFx0Y2hpbGRyZW4ucHVzaChwYXJzZVZEb21FbGVtZW50KHBhcnNlcikpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y2hpbGRyZW4ucHVzaChwYXJzZVZEb21UZXh0KHBhcnNlcikpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuWE1MX09QRU5fQ0xPU0VfVEFHKTtcblx0cGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuR1JFQVRFUl9USEFOKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVFZEb21Ob2RlKHRhZywgcHJvcHMsIGNoaWxkcmVuKTtcblx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgcGFyc2VyLnBlZWsoKSk7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VWRG9tVGV4dChwYXJzZXI6IFBhcnNlcik6IEFTVFZEb21UZXh0Tm9kZSB8IEFTVFZEb21FeHByZXNzaW9uTm9kZSB7XG5cdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9PUEVOKSkge1xuXHRcdGNvbnN0IGV4cHJlc3Npb246IEFTVE5vZGUgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0XHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9DTE9TRSk7XG5cdFx0cmV0dXJuIG5ldyBBU1RWRG9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbik7XG5cdH1cblxuXHRjb25zdCB0b2tlbjogVG9rZW4gPSBwYXJzZXIuZXhwZWN0T25lT2YoXG5cdFx0W1xuXHRcdFx0VG9rZW5UeXBlLklERU5USUZJRVIsXG5cdFx0XHRUb2tlblR5cGUuT1BFUkFUT1IsXG5cdFx0XHRUb2tlblR5cGUuS0VZV09SRCxcblx0XHRcdFRva2VuVHlwZS5QVU5DVFVBVElPTixcblx0XHRcdFRva2VuVHlwZS5OVU1CRVIsXG5cdFx0XHRUb2tlblR5cGUuVEVYVFxuXHRcdF1cblx0KTtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RWRG9tVGV4dE5vZGUodG9rZW4udmFsdWUpO1xuXHRub2RlLnNwYW4gPSBzcGFuRnJvbSh0b2tlbiwgdG9rZW4pO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQXJndW1lbnRzKHBhcnNlcjogUGFyc2VyKTogQVNUTm9kZVtdIHtcblx0Y29uc3QgYXJnczogQVNUTm9kZVtdID0gW107XG5cblx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKSkge1xuXHRcdHJldHVybiBhcmdzO1xuXHR9XG5cblx0YXJncy5wdXNoKHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpKTtcblxuXHR3aGlsZSAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKSB7XG5cdFx0YXJncy5wdXNoKHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKTtcblx0cmV0dXJuIGFyZ3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVVuYXJ5KHBhcnNlcjogUGFyc2VyKTogQVNUTm9kZSB8IEFTVFVuYXJ5Tm9kZSB7XG5cdGNvbnN0IHRva2VuOiBUb2tlbiA9IHBhcnNlci5wZWVrKCk7XG5cblx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5LRVlXT1JEICYmIHRva2VuLnZhbHVlID09PSBHUkFNTUFSLlZET00pIHtcblx0XHRyZXR1cm4gcGFyc2VWRG9tRXhwcmVzc2lvbihwYXJzZXIpO1xuXHR9XG5cblx0c3dpdGNoICh0b2tlbi52YWx1ZSkge1xuXHRcdGNhc2UgR1JBTU1BUi5FWENMQU1BVElPTl9NQVJLOlxuXHRcdGNhc2UgR1JBTU1BUi5NSU5VUzpcblx0XHRjYXNlIEdSQU1NQVIuUExVUzoge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblxuXHRcdFx0Y29uc3QgYXJndW1lbnQ6IEFTVE5vZGUgfCBBU1RVbmFyeU5vZGUgPSBwYXJzZVVuYXJ5KHBhcnNlcik7XG5cblx0XHRcdHJldHVybiBuZXcgQVNUVW5hcnlOb2RlKHRva2VuLnZhbHVlLCBhcmd1bWVudCk7XG5cdFx0fVxuXHRcdGRlZmF1bHQ6IHtcblx0XHRcdHJldHVybiBwYXJzZVByaW1hcnkocGFyc2VyKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUHJpbWFyeShwYXJzZXI6IFBhcnNlcik6IEFTVE5vZGUge1xuXHRpZiAobG9va3NMaWtlTGFtYmRhKHBhcnNlcikpIHtcblx0XHRyZXR1cm4gcGFyc2VMYW1iZGEocGFyc2VyKTtcblx0fVxuXG5cdGNvbnN0IHRva2VuOiBUb2tlbiA9IHBhcnNlci5uZXh0KCk7XG5cblx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX09QRU4pIHtcblx0XHRwYXJzZXIucmV3aW5kKCk7XG5cdFx0cmV0dXJuIHBhcnNlQXJyYXkocGFyc2VyKTtcblx0fVxuXG5cdGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuTlVNQkVSKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLk5VTUJFUik7XG5cdFx0bm9kZS52YWx1ZSA9IHRva2VuLnZhbHVlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5TVFJJTkcpIHtcblx0XHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuU1RSSU5HKTtcblx0XHRub2RlLnZhbHVlID0gdG9rZW4udmFsdWU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRpZiAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLkJPT0xFQU4pIHtcblx0XHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuQk9PTEVBTik7XG5cdFx0bm9kZS52YWx1ZSA9IHRva2VuLnZhbHVlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLklERU5USUZJRVIpO1xuXHRcdG5vZGUubmFtZSA9IHRva2VuLnZhbHVlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLk5VTEwpIHtcblx0XHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuTlVMTCk7XG5cdFx0bm9kZS52YWx1ZSA9IHRva2VuLnZhbHVlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLlRISVMpIHtcblx0XHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuVEhJUyk7XG5cdFx0bm9kZS5uYW1lID0gdG9rZW4udmFsdWU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuTkVXKSB7XG5cblx0XHRsZXQgdHlwZUFubm90YXRpb246IEFTVFR5cGVOb2RlID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cblx0XHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKTtcblxuXHRcdHJldHVybiBuZXcgQVNUTmV3Tm9kZShwYXJzZUFyZ3VtZW50cyhwYXJzZXIpLCB0eXBlQW5ub3RhdGlvbik7XG5cdH1cblxuXHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTikge1xuXHRcdGNvbnN0IGV4cHI6IEFTVE5vZGUgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0XHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cdFx0cmV0dXJuIGV4cHI7XG5cdH1cblxuXHR0aHJvd1BhcnNlckVycm9yKGBVbmV4cGVjdGVkIHRva2VuOiAke3Rva2VuLnR5cGV9ICR7dG9rZW4udmFsdWV9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBvc3RmaXgocGFyc2VyOiBQYXJzZXIsIGV4cHI6IEFTVE5vZGUgfCBudWxsKTogQVNUTm9kZSB7XG5cdGlmIChleHByID09PSBudWxsKSB7XG5cdFx0dGhyb3dQYXJzZXJFcnJvcihgRXhwZWN0ZWQgZXhwcmVzc2lvbiwgZ290IG51bGwuYCk7XG5cdH1cblxuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdGNvbnN0IHRva2VuID0gcGFyc2VyLnBlZWsoKTtcblx0XHRpZiAoIXRva2VuKSBicmVhaztcblxuXHRcdC8vIENhbGw6IGZvbyguLi4pXG5cdFx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0XHRleHByID0gbmV3IEFTVENhbGxOb2RlKGV4cHIsIHBhcnNlQXJndW1lbnRzKHBhcnNlcikpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gTWVtYmVyOiBmb28uYmFyXG5cdFx0aWYgKHRva2VuLnZhbHVlID09PSBHUkFNTUFSLkRPVCkge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHRcdGV4cHIgPSBuZXcgQVNUTWVtYmVyTm9kZShleHByLCBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpLnZhbHVlKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIElOREVYOiBmb29bZXhwcl1cblx0XHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfT1BFTikge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblxuXHRcdFx0Y29uc3QgaW5kZXggPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblxuXHRcdFx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfQ0xPU0UpO1xuXG5cdFx0XHRleHByID0gbmV3IEFTVEluZGV4Tm9kZShleHByLCBpbmRleCk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRicmVhaztcblx0fVxuXG5cdHJldHVybiBleHByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9va3VwUHJlY2VkZW5jZSh0b2tlbjogVG9rZW4pOiBudW1iZXIge1xuXHRzd2l0Y2ggKHRva2VuLnZhbHVlKSB7XG5cdFx0Y2FzZSBHUkFNTUFSLkRPVDpcblx0XHRcdHJldHVybiAxMDA7XG5cdFx0Y2FzZSBHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU46XG5cdFx0XHRyZXR1cm4gOTA7XG5cdFx0Y2FzZSBHUkFNTUFSLk1VTFRJUExZOlxuXHRcdGNhc2UgR1JBTU1BUi5ESVZJREU6XG5cdFx0Y2FzZSBHUkFNTUFSLk1PRFVMVVM6XG5cdFx0XHRyZXR1cm4gNjA7XG5cdFx0Y2FzZSBHUkFNTUFSLlBMVVM6XG5cdFx0Y2FzZSBHUkFNTUFSLk1JTlVTOlxuXHRcdFx0cmV0dXJuIDUwO1xuXHRcdGNhc2UgR1JBTU1BUi5MRVNTX1RIQU46XG5cdFx0Y2FzZSBHUkFNTUFSLkdSRUFURVJfVEhBTjpcblx0XHRjYXNlIEdSQU1NQVIuTEVTU19FUVVBTDpcblx0XHRjYXNlIEdSQU1NQVIuR1JFQVRFUl9FUVVBTDpcblx0XHRcdHJldHVybiA0MDtcblx0XHRjYXNlIEdSQU1NQVIuRVFVQUw6XG5cdFx0Y2FzZSBHUkFNTUFSLk5PVF9FUVVBTDpcblx0XHRcdHJldHVybiAzMDtcblx0XHRjYXNlIEdSQU1NQVIuQU5EOlxuXHRcdFx0cmV0dXJuIDIwO1xuXHRcdGNhc2UgR1JBTU1BUi5PUjpcblx0XHRcdHJldHVybiAxMDtcblx0XHRjYXNlIEdSQU1NQVIuQVNTSUdOOlxuXHRcdFx0cmV0dXJuIDU7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiAwO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7VG9rZW4sIFRva2VuVHlwZX0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcbmltcG9ydCB7VG9rZW5TdHJlYW19IGZyb20gXCIuLi90b2tlbml6ZXIvdG9rZW5pemVyXCI7XG5pbXBvcnQge3BhcnNlUHJvZ3JhbX0gZnJvbSBcIi4vcGFyc2VyX3N0YXRtZW50c1wiO1xuaW1wb3J0IHt0aHJvd1BhcnNlckVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4vcGFyc2VyX3NvdXJjZVwiO1xuXG5cbmV4cG9ydCBjbGFzcyBQYXJzZXIge1xuXHRzb3VyY2U6IFNvdXJjZTtcblx0dG9rZW5TdHJlYW06IFRva2VuU3RyZWFtIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3Ioc291cmNlOiBTb3VyY2UpIHtcblx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0fVxuXG5cdHBhcnNlKCkge1xuXHRcdHRoaXMudG9rZW5TdHJlYW0gPSB0aGlzLnNvdXJjZVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgLmdldFRva2VuaXplcigpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAuZ2V0VG9rZW5TdHJlYW0oKVxuXG5cdFx0cmV0dXJuIHBhcnNlUHJvZ3JhbSh0aGlzKTtcblx0fVxuXG5cdHN0cmVhbSgpOiBUb2tlblN0cmVhbSB7XG5cdFx0aWYgKCF0aGlzLnRva2VuU3RyZWFtKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKCdQYXJzZXIgaGFzIG5vdCBiZWVuIHBhcnNlZCB5ZXQuJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMudG9rZW5TdHJlYW07XG5cdH1cblxuXHRleHBlY3QodG9rZW5UeXBlOiBzdHJpbmcsIGtleXdvcmQ6IHN0cmluZyB8IG51bGwgPSBudWxsKTogVG9rZW4ge1xuXHRcdGNvbnN0IHRva2VuOiBUb2tlbiB8IG51bGwgPSB0aGlzXG5cdFx0XHQuc3RyZWFtKClcblx0XHRcdC5uZXh0KCk7XG5cblx0XHRpZiAoIXRva2VuKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKGBVbmV4cGVjdGVkIGVuZCBvZiBmaWxlLiBFeHBlY3RlZCAke3Rva2VuVHlwZX0ke2tleXdvcmQgPyAnICcgKyBrZXl3b3JkIDogJyd9YCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRva2VuLnR5cGUgIT09IHRva2VuVHlwZSB8fCAoa2V5d29yZCAmJiB0b2tlbi52YWx1ZSAhPT0ga2V5d29yZCkpIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoYEV4cGVjdGVkICR7dG9rZW5UeXBlfSR7a2V5d29yZCA/ICcgJyArIGtleXdvcmQgOiAnJ30sIGdvdCAke3Rva2VuLnR5cGV9ICR7dG9rZW4udmFsdWV9YCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRva2VuO1xuXHR9XG5cblx0ZXhwZWN0T3BlcmF0b3Ioa2V5d29yZDogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZWN0KFRva2VuVHlwZS5PUEVSQVRPUiwga2V5d29yZCk7XG5cdH1cblxuXHRleHBlY3RBbm5vdGF0aW9uKCk6IFRva2VuIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlY3QoVG9rZW5UeXBlLkFOTk9UQVRJT04pO1xuXHR9XG5cblx0ZXhwZWN0SWRlbnRpZmllcihrZXl3b3JkOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IFRva2VuIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlY3QoVG9rZW5UeXBlLklERU5USUZJRVIsIGtleXdvcmQpO1xuXHR9XG5cblx0ZXhwZWN0S2V5d29yZChrZXl3b3JkOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IFRva2VuIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlY3QoVG9rZW5UeXBlLktFWVdPUkQsIGtleXdvcmQpO1xuXHR9XG5cblx0ZXhwZWN0U3RyaW5nKCk6IFRva2VuIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlY3QoVG9rZW5UeXBlLlNUUklORyk7XG5cdH1cblxuXHRleHBlY3RUZXh0KCk6IFRva2VuIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlY3QoVG9rZW5UeXBlLlRFWFQpO1xuXHR9XG5cblx0ZXhwZWN0UHVuY3R1YXRpb24oa2V5d29yZDogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBUb2tlbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwZWN0KFRva2VuVHlwZS5QVU5DVFVBVElPTiwga2V5d29yZCk7XG5cdH1cblxuXHRleHBlY3RPbmVPZih0b2tlblR5cGVzOiBzdHJpbmdbXSwga2V5d29yZHM6IHN0cmluZyB8IG51bGwgPSBudWxsKTogVG9rZW4ge1xuXHRcdGNvbnN0IHRva2VuID0gdGhpc1xuXHRcdFx0LnN0cmVhbSgpXG5cdFx0XHQubmV4dCgpO1xuXG5cdFx0aWYgKCF0b2tlbikge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcihgVW5leHBlY3RlZCBlbmQgb2YgZmlsZS4gRXhwZWN0ZWQgb25lIG9mIHR5cGVzICR7dG9rZW5UeXBlc30sIGdvdCBudWxsLmApO1xuXHRcdH1cblxuXHRcdGlmICghdG9rZW5UeXBlcy5pbmNsdWRlcyh0b2tlbi50eXBlKSkge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcihgRXhwZWN0ZWQgb25lIG9mIHR5cGVzICR7dG9rZW5UeXBlc30sIGdvdCAke3Rva2VuLnR5cGV9YCk7XG5cdFx0fVxuXG5cdFx0aWYgKGtleXdvcmRzICYmICFrZXl3b3Jkcy5pbmNsdWRlcyh0b2tlbi52YWx1ZSkpIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoYEV4cGVjdGVkIG9uZSBvZiB2YWx1ZXMgJHtrZXl3b3Jkc30sIGdvdCAke3Rva2VuLnZhbHVlfWApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0b2tlbjtcblx0fVxuXG5cdGNvbnN1bWVJZih0b2tlblR5cGU6IHN0cmluZywga2V5d29yZDogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBib29sZWFuIHtcblx0XHRjb25zdCB0b2tlbiA9IHRoaXMucGVlaygpO1xuXG5cdFx0aWYgKHRva2VuLnR5cGUgPT09IHRva2VuVHlwZSAmJiAoa2V5d29yZCAmJiB0b2tlbi52YWx1ZS50cmltKCkgPT09IGtleXdvcmQpKSB7XG5cdFx0XHR0aGlzLm5leHQoKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGNvbnN1bWVJZlB1bmN0dWF0aW9uKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdW1lSWYoVG9rZW5UeXBlLlBVTkNUVUFUSU9OLCB2YWx1ZSk7XG5cdH1cblxuXHRjb25zdW1lSWZPcGVyYXRvcih2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3VtZUlmKFRva2VuVHlwZS5PUEVSQVRPUiwgdmFsdWUpO1xuXHR9XG5cblx0Y29uc3VtZUlmQ29tbWVudCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdW1lSWYoVG9rZW5UeXBlLkNPTU1FTlQpO1xuXHR9XG5cblx0Y29uc3VtZUlmS2V5d29yZChrZXl3b3JkOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdW1lSWYoVG9rZW5UeXBlLktFWVdPUkQsIGtleXdvcmQpO1xuXHR9XG5cblx0Y29uc3VtZUlmVGV4dCgpOiBib29sZWFuIHtcblx0XHRpZiAodGhpcy5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLlRFWFQgJiYgdGhpcy5wZWVrSXMoJycpKSB7XG5cdFx0XHR0aGlzLm5leHQoKTtcblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cGVlaygpOiBUb2tlbiB7XG5cdFx0Y29uc3QgdG9rZW4gPSB0aGlzXG5cdFx0XHQuc3RyZWFtKClcblx0XHRcdC5wZWVrKCk7XG5cblx0XHRpZiAodG9rZW4gPT09IG51bGwpIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoJ1VuZXhwZWN0ZWQgZW5kIG9mIGZpbGUuIEV4cGVjdGVkIHRva2VuLCBnb3QgbnVsbC4nKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdG9rZW47XG5cdH1cblxuXHRwZWVrSXMoa2V5d29yZDogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucGVlaygpXG5cdFx0ICAgICAgICAgICAudmFsdWVcblx0XHQgICAgICAgICAgIC50cmltKCkgPT09IGtleXdvcmQ7XG5cdH1cblxuXHRuZXh0KCk6IFRva2VuIHtcblx0XHRjb25zdCB0b2tlbiA9IHRoaXNcblx0XHRcdC5zdHJlYW0oKVxuXHRcdFx0Lm5leHQoKTtcblxuXHRcdGlmICh0b2tlbiA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZmlsZS4gRXhwZWN0ZWQgdG9rZW4sIGdvdCBudWxsLicpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0b2tlbjtcblx0fVxuXG5cdHJld2luZCgpOiB2b2lkIHtcblx0XHR0aGlzLnN0cmVhbSgpXG5cdFx0ICAgIC5yZXdpbmQoKTtcblx0fVxuXG5cdHBvc2l0aW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuc3RyZWFtKCkuaW5kZXg7XG5cdH1cblxuXHRzZWVrQXQocG9zaXRpb246IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuc3RyZWFtKCkuaW5kZXggPSBwb3NpdGlvbjtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0FTVENsYXNzTm9kZSwgQVNUSW50ZXJmYWNlTm9kZSwgQVNUTm9kZX0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHtDbGFzc0RlZmluaXRpb24sIEluc3RhbmNlLCBJbnRlcmZhY2VEZWZpbml0aW9ufSBmcm9tIFwiLi9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge0NsYXNzU3ltYm9sLCBJbnRlcmZhY2VTeW1ib2x9IGZyb20gXCIuLi90eXBlcy90eXBlX29iamVjdHNcIjtcbmltcG9ydCB7dGhyb3dSdW50aW1lRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcblxuZXhwb3J0IGNsYXNzIENsYXNzUmVnaXN0cnkge1xuXHRtYXA6IE1hcDxzdHJpbmcsIENsYXNzRGVmaW5pdGlvbj4gPSBuZXcgTWFwKCk7XG5cblx0cmVnaXN0ZXIobm9kZTogQVNUQ2xhc3NOb2RlKTogdm9pZCB7XG5cdFx0dGhpcy5zZXQobm9kZS5uYW1lLCBDbGFzc0RlZmluaXRpb24uZnJvbUFTVChub2RlKSk7XG5cdH1cblxuXHRhbGwoKTogSXRlcmFibGVJdGVyYXRvcjxDbGFzc0RlZmluaXRpb24+IHtcblx0XHRyZXR1cm4gdGhpcy5tYXAudmFsdWVzKCk7XG5cdH1cblxuXHRzZXQobmFtZTogc3RyaW5nLCBjbGFzc0RlZmluaXRpb246IENsYXNzRGVmaW5pdGlvbik6IHZvaWQge1xuXHRcdHRoaXMubWFwLnNldChuYW1lLCBjbGFzc0RlZmluaXRpb24pO1xuXHR9XG5cblx0Z2V0KG5hbWU6IHN0cmluZyk6IENsYXNzRGVmaW5pdGlvbiB7XG5cdFx0Y29uc3QgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiB8IG51bGwgPSB0aGlzLm1hcC5nZXQobmFtZSkgfHwgbnVsbDtcblx0XHRpZiAoIWNsYXNzRGVmKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgQ2xhc3MgJHtuYW1lfSBub3QgZm91bmQuYCk7XG5cdFx0fVxuXHRcdHJldHVybiBjbGFzc0RlZjtcblx0fVxuXG5cdGhhcyhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAuaGFzKG5hbWUpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2VSZWdpc3RyeSB7XG5cdG1hcDogTWFwPHN0cmluZywgSW50ZXJmYWNlRGVmaW5pdGlvbj4gPSBuZXcgTWFwKCk7XG5cblx0cmVnaXN0ZXIobm9kZTogQVNUSW50ZXJmYWNlTm9kZSk6IHZvaWQge1xuXHRcdHRoaXMuc2V0KG5vZGUubmFtZSwgSW50ZXJmYWNlRGVmaW5pdGlvbi5mcm9tQVNUKG5vZGUpKTtcblx0fVxuXG5cdGFsbCgpOiBJdGVyYWJsZUl0ZXJhdG9yPEludGVyZmFjZURlZmluaXRpb24+IHtcblx0XHRyZXR1cm4gdGhpcy5tYXAudmFsdWVzKCk7XG5cdH1cblxuXHRzZXQobmFtZTogc3RyaW5nLCBpbnRlcmZhY2VEZWZpbml0aW9uOiBJbnRlcmZhY2VEZWZpbml0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5tYXAuc2V0KG5hbWUsIGludGVyZmFjZURlZmluaXRpb24pO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnN0YW5jZVJlZ2lzdHJ5IHtcblx0cHJpdmF0ZSBpbnN0YW5jZXM6IE1hcDxzdHJpbmcsIEluc3RhbmNlPiA9IG5ldyBNYXA8c3RyaW5nLCBJbnN0YW5jZT4oKTtcblxuXHRyZWdpc3RlcihpbnN0YW5jZTogSW5zdGFuY2UpOiB2b2lkIHtcblx0XHR0aGlzLmluc3RhbmNlcy5zZXQoaW5zdGFuY2UuaWQsIGluc3RhbmNlKTtcblx0fVxuXG5cdHVucmVnaXN0ZXIoaW5zdGFuY2U6IEluc3RhbmNlKTogdm9pZCB7XG5cdFx0dGhpcy5pbnN0YW5jZXMuZGVsZXRlKGluc3RhbmNlLmlkKTtcblx0fVxuXG5cdGdldChpZDogc3RyaW5nKTogSW5zdGFuY2UgfCBudWxsIHtcblx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZXMuZ2V0KGlkKSB8fCBudWxsO1xuXHR9XG5cblx0YWxsSW5zdGFuY2VzKCk6IEluc3RhbmNlW10ge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKHRoaXMuaW5zdGFuY2VzLnZhbHVlcygpKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVHlwZVJlZ2lzdHJ5IHtcblx0Y2xhc3NTeW1ib2xzOiBNYXA8c3RyaW5nLCBDbGFzc1N5bWJvbD4gPSBuZXcgTWFwKCk7XG5cdGludGVyZmFjZVN5bWJvbHM6IE1hcDxzdHJpbmcsIEludGVyZmFjZVN5bWJvbD4gPSBuZXcgTWFwKCk7XG5cblx0YWxsQ2xhc3NTeW1ib2xzKCk6IEl0ZXJhYmxlSXRlcmF0b3I8Q2xhc3NTeW1ib2w+IHtcblx0XHRyZXR1cm4gdGhpcy5jbGFzc1N5bWJvbHMudmFsdWVzKCk7XG5cdH1cblxuXHRhbGxJbnRlcmZhY2VTeW1ib2xzKCk6IEl0ZXJhYmxlSXRlcmF0b3I8SW50ZXJmYWNlU3ltYm9sPiB7XG5cdFx0cmV0dXJuIHRoaXMuaW50ZXJmYWNlU3ltYm9scy52YWx1ZXMoKTtcblx0fVxuXG5cdGFkZENsYXNzU3ltYm9sKHN5bWJvbDogQ2xhc3NTeW1ib2wpOiB2b2lkIHtcblx0XHR0aGlzLmNsYXNzU3ltYm9scy5zZXQoc3ltYm9sLm5hbWUsIHN5bWJvbCk7XG5cdH1cblxuXHRhZGRJbnRlcmZhY2VTeW1ib2woc3ltYm9sOiBJbnRlcmZhY2VTeW1ib2wpOiB2b2lkIHtcblx0XHR0aGlzLmludGVyZmFjZVN5bWJvbHMuc2V0KHN5bWJvbC5uYW1lLCBzeW1ib2wpO1xuXHR9XG5cblx0aGFzU3ltYm9sKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNsYXNzU3ltYm9scy5oYXMobmFtZSkgfHwgdGhpcy5pbnRlcmZhY2VTeW1ib2xzLmhhcyhuYW1lKTtcblx0fVxuXG5cdHB1YmxpYyBnZXRDbGFzc1N5bWJvbChuYW1lOiBzdHJpbmcpOiBDbGFzc1N5bWJvbCB7XG5cdFx0Y29uc3Qgc3ltYm9sOiBDbGFzc1N5bWJvbCB8IHVuZGVmaW5lZCA9IHRoaXMuY2xhc3NTeW1ib2xzLmdldChuYW1lKTtcblx0XHRpZiAoc3ltYm9sID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBTeW1ib2wgJHtuYW1lfSBub3QgZm91bmQuYCk7XG5cdFx0fVxuXHRcdHJldHVybiBzeW1ib2w7XG5cdH1cblxuXHRwdWJsaWMgZ2V0SW50ZXJhY2VTeW1ib2wobmFtZTogc3RyaW5nKTogSW50ZXJmYWNlU3ltYm9sIHtcblx0XHRjb25zdCBzeW1ib2w6IEludGVyZmFjZVN5bWJvbCB8IHVuZGVmaW5lZCA9IHRoaXMuaW50ZXJmYWNlU3ltYm9scy5nZXQobmFtZSk7XG5cdFx0aWYgKHN5bWJvbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgU3ltYm9sICR7bmFtZX0gbm90IGZvdW5kLmApO1xuXHRcdH1cblx0XHRyZXR1cm4gc3ltYm9sO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBPYmplY3RSZWdpc3RyeSB7XG5cdHB1YmxpYyByZWFkb25seSBjbGFzc2VzOiBDbGFzc1JlZ2lzdHJ5ID0gbmV3IENsYXNzUmVnaXN0cnkoKTtcblx0cHVibGljIHJlYWRvbmx5IGludGVyZmFjZXM6IEludGVyZmFjZVJlZ2lzdHJ5ID0gbmV3IEludGVyZmFjZVJlZ2lzdHJ5KCk7XG5cdHB1YmxpYyByZWFkb25seSBpbnN0YW5jZXM6IEluc3RhbmNlUmVnaXN0cnkgPSBuZXcgSW5zdGFuY2VSZWdpc3RyeSgpO1xuXHRwdWJsaWMgcmVhZG9ubHkgdHlwZXM6IFR5cGVSZWdpc3RyeSA9IG5ldyBUeXBlUmVnaXN0cnkoKTtcblxuXHRmZXRjaEFsbE9iamVjdERlZmluaXRpb25zKCk6IE1hcDxzdHJpbmcsIENsYXNzRGVmaW5pdGlvbiB8IEludGVyZmFjZURlZmluaXRpb24+IHtcblx0XHRjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG5cblx0XHRmb3IgKGNvbnN0IGNsYXNzRGVmIG9mIHRoaXMuaW50ZXJmYWNlcy5hbGwoKSkge1xuXHRcdFx0bWFwLnNldChjbGFzc0RlZi5uYW1lLCBjbGFzc0RlZik7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBjbGFzc0RlZiBvZiB0aGlzLmNsYXNzZXMuYWxsKCkpIHtcblx0XHRcdG1hcC5zZXQoY2xhc3NEZWYubmFtZSwgY2xhc3NEZWYpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtYXA7XG5cdH1cblxuXHRjb2xsZWN0QWxsKGFzdDogQVNUTm9kZSk6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUSW50ZXJmYWNlTm9kZSkge1xuXHRcdFx0XHR0aGlzLmludGVyZmFjZXMucmVnaXN0ZXIobm9kZSk7XG5cdFx0XHR9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RDbGFzc05vZGUpIHtcblx0XHRcdFx0dGhpcy5jbGFzc2VzLnJlZ2lzdGVyKG5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4iLAogICAgImltcG9ydCB7XG5cdEFTVEFycmF5Tm9kZSxcblx0QVNUQXNzaWdubWVudE5vZGUsXG5cdEFTVEJpbmFyeU5vZGUsXG5cdEFTVENhbGxOb2RlLFxuXHRBU1RDbGFzc05vZGUsXG5cdEFTVEV4cHJlc3Npb25Ob2RlLFxuXHRBU1RGaWVsZE5vZGUsXG5cdEFTVEZvcmVhY2hOb2RlLFxuXHRBU1RJbmRleE5vZGUsXG5cdEFTVEludGVyZmFjZU5vZGUsXG5cdEFTVExhbWJkYU5vZGUsXG5cdEFTVE1lbWJlck5vZGUsXG5cdEFTVE1ldGhvZE5vZGUsXG5cdEFTVE5ld05vZGUsXG5cdEFTVE5vZGUsXG5cdEFTVE5vZGVUeXBlLFxuXHRBU1RQYXJhbWV0ZXJOb2RlLFxuXHRBU1RSZXR1cm5Ob2RlLFxuXHRBU1RUeXBlTm9kZSxcblx0QVNUVW5hcnlOb2RlLFxuXHRBU1RWYXJpYWJsZU5vZGUsXG5cdEFTVFZEb21Ob2RlXG59IGZyb20gJy4uL2FzdC50cyc7XG5pbXBvcnQge1xuXHRidWlsZFR5cGVTdWJzdGl0dXRpb25NYXAsXG5cdENsYXNzUmVmVHlwZSxcblx0Q2xhc3NTeW1ib2wsXG5cdEZpZWxkU3ltYm9sLFxuXHRJbnRlcmZhY2VSZWZUeXBlLFxuXHRJbnRlcmZhY2VTeW1ib2wsXG5cdExhbWJkYVR5cGUsXG5cdE1ldGhvZFN5bWJvbCxcblx0TWl4ZWRUeXBlLFxuXHROdWxsYWJsZVR5cGUsXG5cdFBhcmFtZXRlclN5bWJvbCxcblx0UHJpbWl0aXZlQ2xhc3NUeXBlcyxcblx0c3Vic3RpdHV0ZVR5cGUsXG5cdFR5cGUsXG5cdFR5cGVQYXJhbWV0ZXJTeW1ib2wsXG5cdFR5cGVzLFxuXHRUeXBlU2NvcGUsXG5cdFR5cGVWYXJpYWJsZSxcblx0d3JhcFR5cGVcbn0gZnJvbSBcIi4vdHlwZV9vYmplY3RzXCI7XG5pbXBvcnQge0F1dG9ib3hpbmd9IGZyb20gXCIuL2F1dG9ib3hpbmdcIjtcbmltcG9ydCB7TmF0aXZlRnVuY3Rpb24sIE5hdGl2ZUZ1bmN0aW9uc30gZnJvbSBcIi4uLy4uL2xpYnJhcnkvbmF0aXZlX2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHtHUkFNTUFSfSBmcm9tIFwiLi4vZ3JhbW1hclwiO1xuaW1wb3J0IHt0aHJvd1R5cGVFcnJvcn0gZnJvbSBcIi4uL2Vycm9ycy50c1wiXG5pbXBvcnQge0NsYXNzRGVmaW5pdGlvbiwgSW50ZXJmYWNlRGVmaW5pdGlvbn0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuXG5cbmNvbnN0IGdsb2JhbEZ1bmN0aW9uVHlwZVJlZ2lzdHJ5ID0gbmV3IE5hdGl2ZUZ1bmN0aW9ucygpXG5cdC5nZXRHbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeSgpO1xuXG5leHBvcnQgY2xhc3MgU3RhdGVtZW50UmVzdWx0IHtcblx0ZGlkUmV0dXJuOiBib29sZWFuO1xuXHRyZXR1cm5UeXBlOiBUeXBlIHwgbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihkaWRSZXR1cm46IGJvb2xlYW4sIHJldHVyblR5cGU6IFR5cGUgfCBudWxsKSB7XG5cdFx0dGhpcy5kaWRSZXR1cm4gPSBkaWRSZXR1cm47XG5cdFx0dGhpcy5yZXR1cm5UeXBlID0gcmV0dXJuVHlwZTtcblx0fVxuXG5cdHN0YXRpYyB3aXRoUmV0dXJuKHJldHVyblR5cGU6IFR5cGUpOiBTdGF0ZW1lbnRSZXN1bHQge1xuXHRcdHJldHVybiBuZXcgU3RhdGVtZW50UmVzdWx0KHRydWUsIHJldHVyblR5cGUpO1xuXHR9XG5cblx0c3RhdGljIG5vUmV0dXJuKCk6IFN0YXRlbWVudFJlc3VsdCB7XG5cdFx0cmV0dXJuIG5ldyBTdGF0ZW1lbnRSZXN1bHQoZmFsc2UsIG51bGwpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlQ2hlY2tlciB7XG5cdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeTtcblxuXHRjb25zdHJ1Y3RvcihvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpIHtcblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5ID0gb2JqZWN0UmVnaXN0cnk7XG5cdH1cblxuXHRjb2xsZWN0QWxsU3ltYm9sc0Zyb21Ob2RlKGFzdDogQVNUTm9kZSk6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUSW50ZXJmYWNlTm9kZSkge1xuXHRcdFx0XHR0aGlzLnJlZ2lzdGVySW50ZXJmYWNlU3ltYm9sKG5vZGUpXG5cdFx0XHR9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RDbGFzc05vZGUpIHtcblx0XHRcdFx0dGhpcy5yZWdpc3RlckNsYXNzU3ltYm9sKG5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNvbGxlY3RBbGxTeW1ib2xzRnJvbVJlZ2lzdHJ5KG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IHZvaWQge1xuXHRcdGNvbnN0IG9iamVjdERlZmluaXRpb25zOiBNYXBJdGVyYXRvcjxDbGFzc0RlZmluaXRpb24gfCBJbnRlcmZhY2VEZWZpbml0aW9uPiA9IG9iamVjdFJlZ2lzdHJ5XG5cdFx0XHQuZmV0Y2hBbGxPYmplY3REZWZpbml0aW9ucygpXG5cdFx0XHQudmFsdWVzKCk7XG5cblx0XHRmb3IgKGxldCBvYmplY3REZWYgb2Ygb2JqZWN0RGVmaW5pdGlvbnMpIHtcblx0XHRcdGlmIChvYmplY3REZWYgaW5zdGFuY2VvZiBJbnRlcmZhY2VEZWZpbml0aW9uKSB7XG5cdFx0XHRcdHRoaXMucmVnaXN0ZXJJbnRlcmZhY2VTeW1ib2wob2JqZWN0RGVmLm5vZGUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5yZWdpc3RlckNsYXNzU3ltYm9sKG9iamVjdERlZi5ub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjaGVjayhhc3Q6IEFTVE5vZGUpOiB2b2lkIHtcblx0XHR0aGlzLmNvbGxlY3RBbGxTeW1ib2xzRnJvbU5vZGUoYXN0KTtcblx0XHR0aGlzLnZhbGlkYXRlSW5oZXJpdGFuY2UoKTtcblx0XHR0aGlzLmNoZWNrUHJvZ3JhbShhc3QpO1xuXHRcdHRoaXMuY2hlY2tJbnRlcmZhY2VCb2RpZXMoKTtcblx0XHR0aGlzLmNoZWNrQ2xhc3Nlc0JvZGllcygpO1xuXHRcdHRoaXMuY2hlY2tDbGFzc2VzSW1wbGVtZW50cygpO1xuXHR9XG5cblx0cHJpdmF0ZSB2YWxpZGF0ZUluaGVyaXRhbmNlKCkge1xuXHRcdGZvciAoY29uc3QgY2xhc3NTeW1ib2wgb2YgdGhpcy5vYmplY3RSZWdpc3RyeS5jbGFzc2VzLmFsbCgpKSB7XG5cdFx0XHRpZiAoY2xhc3NTeW1ib2wuc3VwZXJDbGFzcyAmJiAhdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5oYXNTeW1ib2woY2xhc3NTeW1ib2wuc3VwZXJDbGFzcykpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYFVua25vd24gc3VwZXJjbGFzcyAke2NsYXNzU3ltYm9sLnN1cGVyQ2xhc3N9YCwgY2xhc3NTeW1ib2wubm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1Byb2dyYW0oYXN0OiBBU1ROb2RlKTogdm9pZCB7XG5cdFx0Y29uc3Qgc2NvcGUgPSBuZXcgVHlwZVNjb3BlKCk7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIGFzdC5jaGlsZHJlbikge1xuXHRcdFx0dGhpcy5jaGVja1N0YXRlbWVudChub2RlLCBzY29wZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0NsYXNzZXNCb2RpZXMoKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBvYmplY3RTeW1ib2wgb2YgdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5hbGxDbGFzc1N5bWJvbHMoKSkge1xuXHRcdFx0Y29uc3QgaW5zdGFuY2VTY29wZSA9IG5ldyBUeXBlU2NvcGUoKTtcblx0XHRcdGluc3RhbmNlU2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCA9IG9iamVjdFN5bWJvbDtcblxuXHRcdFx0b2JqZWN0U3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmZvckVhY2godHlwZVBhcmFtZXRlciA9PiB7XG5cdFx0XHRcdGluc3RhbmNlU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcoXG5cdFx0XHRcdFx0dHlwZVBhcmFtZXRlci5uYW1lLFxuXHRcdFx0XHRcdG5ldyBUeXBlVmFyaWFibGUodHlwZVBhcmFtZXRlci5uYW1lKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmIChvYmplY3RTeW1ib2wuY29uc3RydWN0b3JNZXRob2RTeW1ib2wpIHtcblx0XHRcdFx0Y29uc3QgY29uc3RydWN0b3JTeW1ib2w6IE1ldGhvZFN5bWJvbCA9IG9iamVjdFN5bWJvbC5jb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbDtcblx0XHRcdFx0Y29uc3QgY29uc3RydWN0b3JTY29wZSA9IG5ldyBUeXBlU2NvcGUoaW5zdGFuY2VTY29wZSk7XG5cblx0XHRcdFx0Y29uc3RydWN0b3JTY29wZS5jdXJyZW50TWV0aG9kU3ltYm9sID0gY29uc3RydWN0b3JTeW1ib2w7XG5cblx0XHRcdFx0b2JqZWN0U3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmZvckVhY2godHlwZVBhcmFtZXRlclN5bWJvbCA9PiB7XG5cdFx0XHRcdFx0Y29uc3RydWN0b3JTY29wZS5kZWZpbmVUeXBlQmluZGluZyhcblx0XHRcdFx0XHRcdHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSxcblx0XHRcdFx0XHRcdG5ldyBUeXBlVmFyaWFibGUodHlwZVBhcmFtZXRlclN5bWJvbC5uYW1lKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGZvciAoY29uc3QgcGFyYW1ldGVyU3ltYm9sIG9mIGNvbnN0cnVjdG9yU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMpIHtcblx0XHRcdFx0XHRjb25zdHJ1Y3RvclNjb3BlLmRlZmluZVR5cGUocGFyYW1ldGVyU3ltYm9sLm5hbWUsIHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuY2hlY2tCb2R5KGNvbnN0cnVjdG9yU3ltYm9sLmJvZHksIGNvbnN0cnVjdG9yU2NvcGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGNvbnN0IG1ldGhvZFN5bWJvbCBvZiBvYmplY3RTeW1ib2wuaW5zdGFuY2VNZXRob2RTeW1ib2xzLnZhbHVlcygpKSB7XG5cdFx0XHRcdGNvbnN0IG1ldGhvZFNjb3BlID0gbmV3IFR5cGVTY29wZShpbnN0YW5jZVNjb3BlKTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMuZm9yRWFjaCh0eXBlUGFyYW1ldGVyU3ltYm9sID0+IHtcblx0XHRcdFx0XHRtZXRob2RTY29wZS5kZWZpbmVUeXBlQmluZGluZyhcblx0XHRcdFx0XHRcdHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSxcblx0XHRcdFx0XHRcdG5ldyBUeXBlVmFyaWFibGUodHlwZVBhcmFtZXRlclN5bWJvbC5uYW1lKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdG1ldGhvZFNjb3BlLmN1cnJlbnRNZXRob2RTeW1ib2wgPSBtZXRob2RTeW1ib2w7XG5cblx0XHRcdFx0Zm9yIChjb25zdCBwYXJhbWV0ZXJTeW1ib2wgb2YgbWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMpIHtcblx0XHRcdFx0XHRtZXRob2RTY29wZS5kZWZpbmVUeXBlKHBhcmFtZXRlclN5bWJvbC5uYW1lLCBwYXJhbWV0ZXJTeW1ib2wucGFyYW1ldGVyVHlwZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBoYXNCb2R5OiBib29sZWFuID0gbWV0aG9kU3ltYm9sLmJvZHkgJiYgbWV0aG9kU3ltYm9sLmJvZHkubGVuZ3RoID4gMDtcblx0XHRcdFx0aWYgKGhhc0JvZHkpIHtcblx0XHRcdFx0XHRjb25zdCBhY3R1YWw6IFR5cGUgPSB0aGlzLmNoZWNrQm9keShtZXRob2RTeW1ib2wuYm9keSwgbWV0aG9kU2NvcGUpO1xuXHRcdFx0XHRcdHRoaXMuY2hlY2tSZXR1cm5UeXBlKG1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlLCBhY3R1YWwsIG1ldGhvZFN5bWJvbC5ub2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGNvbnN0IG1ldGhvZFN5bWJvbCBvZiBvYmplY3RTeW1ib2wuc3RhdGljTWV0aG9kU3ltYm9scy52YWx1ZXMoKSkge1xuXHRcdFx0XHRjb25zdCBzdGF0aWNTY29wZSA9IG5ldyBUeXBlU2NvcGUoaW5zdGFuY2VTY29wZSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmZvckVhY2godHlwZVBhcmFtZXRlclN5bWJvbCA9PiB7XG5cdFx0XHRcdFx0c3RhdGljU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcoXG5cdFx0XHRcdFx0XHR0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUsXG5cdFx0XHRcdFx0XHRuZXcgVHlwZVZhcmlhYmxlKHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRzdGF0aWNTY29wZS5jdXJyZW50TWV0aG9kU3ltYm9sID0gbWV0aG9kU3ltYm9sO1xuXG5cdFx0XHRcdGZvciAoY29uc3QgcGFyYW1ldGVyU3ltYm9sIG9mIG1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzKSB7XG5cdFx0XHRcdFx0c3RhdGljU2NvcGUuZGVmaW5lVHlwZShwYXJhbWV0ZXJTeW1ib2wubmFtZSwgcGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgaGFzQm9keTogYm9vbGVhbiA9IG1ldGhvZFN5bWJvbC5ib2R5ICYmIG1ldGhvZFN5bWJvbC5ib2R5Lmxlbmd0aCA+IDA7XG5cdFx0XHRcdGlmIChoYXNCb2R5KSB7XG5cdFx0XHRcdFx0Y29uc3QgYWN0dWFsOiBUeXBlID0gdGhpcy5jaGVja0JvZHkobWV0aG9kU3ltYm9sLmJvZHksIHN0YXRpY1Njb3BlKTtcblx0XHRcdFx0XHR0aGlzLmNoZWNrUmV0dXJuVHlwZShtZXRob2RTeW1ib2wucmV0dXJuVHlwZSwgYWN0dWFsLCBtZXRob2RTeW1ib2wubm9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrSW50ZXJmYWNlQm9kaWVzKCk6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qgb2JqZWN0U3ltYm9sIG9mIHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuYWxsSW50ZXJmYWNlU3ltYm9scygpKSB7XG5cdFx0XHRjb25zdCBpbnN0YW5jZVNjb3BlID0gbmV3IFR5cGVTY29wZSgpO1xuXHRcdFx0aW5zdGFuY2VTY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sID0gb2JqZWN0U3ltYm9sO1xuXG5cdFx0XHRvYmplY3RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMuZm9yRWFjaCh0eXBlUGFyYW1ldGVyID0+IHtcblx0XHRcdFx0aW5zdGFuY2VTY29wZS5kZWZpbmVUeXBlQmluZGluZyhcblx0XHRcdFx0XHR0eXBlUGFyYW1ldGVyLm5hbWUsXG5cdFx0XHRcdFx0bmV3IFR5cGVWYXJpYWJsZSh0eXBlUGFyYW1ldGVyLm5hbWUpXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Zm9yIChjb25zdCBtZXRob2RTeW1ib2wgb2Ygb2JqZWN0U3ltYm9sLmluc3RhbmNlTWV0aG9kU3ltYm9scy52YWx1ZXMoKSkge1xuXHRcdFx0XHRjb25zdCBtZXRob2RTY29wZSA9IG5ldyBUeXBlU2NvcGUoaW5zdGFuY2VTY29wZSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmZvckVhY2godHlwZVBhcmFtZXRlclN5bWJvbCA9PiB7XG5cdFx0XHRcdFx0bWV0aG9kU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcoXG5cdFx0XHRcdFx0XHR0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUsXG5cdFx0XHRcdFx0XHRuZXcgVHlwZVZhcmlhYmxlKHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRtZXRob2RTY29wZS5jdXJyZW50TWV0aG9kU3ltYm9sID0gbWV0aG9kU3ltYm9sO1xuXG5cdFx0XHRcdGZvciAoY29uc3QgcGFyYW1ldGVyU3ltYm9sIG9mIG1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzKSB7XG5cdFx0XHRcdFx0bWV0aG9kU2NvcGUuZGVmaW5lVHlwZShwYXJhbWV0ZXJTeW1ib2wubmFtZSwgcGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgaGFzQm9keTogYm9vbGVhbiA9IG1ldGhvZFN5bWJvbC5ib2R5ICYmIG1ldGhvZFN5bWJvbC5ib2R5Lmxlbmd0aCA+IDA7XG5cdFx0XHRcdGlmIChoYXNCb2R5KSB7XG5cdFx0XHRcdFx0Y29uc3QgYWN0dWFsOiBUeXBlID0gdGhpcy5jaGVja0JvZHkobWV0aG9kU3ltYm9sLmJvZHksIG1ldGhvZFNjb3BlKTtcblx0XHRcdFx0XHR0aGlzLmNoZWNrUmV0dXJuVHlwZShtZXRob2RTeW1ib2wucmV0dXJuVHlwZSwgYWN0dWFsLCBtZXRob2RTeW1ib2wubm9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQ2xhc3Nlc0ltcGxlbWVudHMoKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBjbGFzc1N5bWJvbCBvZiB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmFsbENsYXNzU3ltYm9scygpKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGludGVyZmFjZVJlZlR5cGUgb2YgY2xhc3NTeW1ib2wuaW1wbGVtZW50c0ludGVyZmFjZXMpIHtcblx0XHRcdFx0dGhpcy5jaGVja0ltcGxlbWVudHNJbnRlcmZhY2UoY2xhc3NTeW1ib2wsIGludGVyZmFjZVJlZlR5cGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tJbXBsZW1lbnRzSW50ZXJmYWNlKGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCwgaW50ZXJmYWNlUmVmVHlwZTogSW50ZXJmYWNlUmVmVHlwZSk6IHZvaWQge1xuXHRcdGNvbnN0IGludGVyZmFjZVN5bWJvbDogSW50ZXJmYWNlU3ltYm9sID0gaW50ZXJmYWNlUmVmVHlwZS5pbnRlcmZhY2VTeW1ib2w7XG5cblx0XHRjb25zdCBzdWJzdGl0dXRpb25NYXA6IE1hcDxzdHJpbmcsIFR5cGU+ID0gYnVpbGRUeXBlU3Vic3RpdHV0aW9uTWFwKFxuXHRcdFx0aW50ZXJmYWNlU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLFxuXHRcdFx0aW50ZXJmYWNlUmVmVHlwZS50eXBlQXJndW1lbnRzXG5cdFx0KTtcblxuXHRcdGZvciAoY29uc3QgaW50ZXJmYWNlTWV0aG9kU3ltYm9sIG9mIGludGVyZmFjZVN5bWJvbC5pbnN0YW5jZU1ldGhvZFN5bWJvbHMudmFsdWVzKCkpIHtcblx0XHRcdGNvbnN0IGNsYXNzTWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wgPSB0aGlzLnJlc29sdmVJbnN0YW5jZU1ldGhvZGUoXG5cdFx0XHRcdGNsYXNzU3ltYm9sLFxuXHRcdFx0XHRpbnRlcmZhY2VNZXRob2RTeW1ib2wubmFtZVxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKCFjbGFzc01ldGhvZFN5bWJvbCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihcblx0XHRcdFx0XHRgQ2xhc3MgJHtjbGFzc1N5bWJvbC5uYW1lfSBkb2VzIG5vdCBpbXBsZW1lbnQgbWV0aG9kICR7aW50ZXJmYWNlTWV0aG9kU3ltYm9sLm5hbWV9IGZyb20gaW50ZXJmYWNlICR7aW50ZXJmYWNlU3ltYm9sLm5hbWV9YCxcblx0XHRcdFx0XHRjbGFzc1N5bWJvbC5ub2RlXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuY2hlY2tNZXRob2RDb21wYXRpYmlsaXR5KFxuXHRcdFx0XHRjbGFzc01ldGhvZFN5bWJvbCxcblx0XHRcdFx0aW50ZXJmYWNlTWV0aG9kU3ltYm9sLFxuXHRcdFx0XHRzdWJzdGl0dXRpb25NYXBcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja01ldGhvZENvbXBhdGliaWxpdHkoY2xhc3NNZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCwgaW50ZXJmYWNlTWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wsIHN1YnN0aXR1dGlvbk1hcDogTWFwPHN0cmluZywgVHlwZT4pOiB2b2lkIHtcblx0XHRpZiAoY2xhc3NNZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9scy5sZW5ndGggIT09IGludGVyZmFjZU1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYE1ldGhvZCAke2NsYXNzTWV0aG9kU3ltYm9sLm5hbWV9IGhhcyB3cm9uZyBwYXJhbWV0ZXIgY291bnRgKTtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGludGVyZmFjZU1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBwYXJhbWV0ZXJTeW1ib2w6IFBhcmFtZXRlclN5bWJvbCB8IG51bGwgPSBpbnRlcmZhY2VNZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9sc1tpXSB8fCBudWxsO1xuXG5cdFx0XHRpZiAoIXBhcmFtZXRlclN5bWJvbCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgTWV0aG9kICR7Y2xhc3NNZXRob2RTeW1ib2wubmFtZX0gaGFzIHRvbyBtYW55IHBhcmFtZXRlcnNgKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGV4cGVjdGVkVHlwZTogVHlwZSA9IHN1YnN0aXR1dGVUeXBlKHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlLCBzdWJzdGl0dXRpb25NYXApO1xuXG5cdFx0XHRjb25zdCBhY3R1YWxUeXBlOiBUeXBlID0gcGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGU7XG5cblx0XHRcdGlmICghZXhwZWN0ZWRUeXBlLmFjY2VwdHMoYWN0dWFsVHlwZSkpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYFBhcmFtZXRlciAke2kgKyAxfSBvZiAke2NsYXNzTWV0aG9kU3ltYm9sLm5hbWV9IGluY29tcGF0aWJsZSB3aXRoIGludGVyZmFjZWApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IGV4cGVjdGVkUmV0dXJuOiBUeXBlID0gc3Vic3RpdHV0ZVR5cGUoaW50ZXJmYWNlTWV0aG9kU3ltYm9sLnJldHVyblR5cGUsIHN1YnN0aXR1dGlvbk1hcCk7XG5cblx0XHRpZiAoIWV4cGVjdGVkUmV0dXJuLmFjY2VwdHMoY2xhc3NNZXRob2RTeW1ib2wucmV0dXJuVHlwZSkpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBSZXR1cm4gdHlwZSBvZiAke2NsYXNzTWV0aG9kU3ltYm9sLm5hbWV9IGluY29tcGF0aWJsZSB3aXRoIGludGVyZmFjZWApO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tTdGF0ZW1lbnQobm9kZTogQVNUTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFN0YXRlbWVudFJlc3VsdCB7XG5cdFx0c3dpdGNoIChub2RlLnR5cGUpIHtcblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuUkVUVVJOOlxuXHRcdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVFJldHVybk5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gU3RhdGVtZW50UmVzdWx0LndpdGhSZXR1cm4oXG5cdFx0XHRcdFx0XHR0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLmFyZ3VtZW50LCBzY29wZSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5WQVJJQUJMRTpcblx0XHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RWYXJpYWJsZU5vZGUpIHtcblx0XHRcdFx0XHR0aGlzLmNoZWNrVmFyaWFibGUobm9kZSwgc2NvcGUpO1xuXHRcdFx0XHRcdHJldHVybiBTdGF0ZW1lbnRSZXN1bHQubm9SZXR1cm4oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuRk9SRUFDSDpcblx0XHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RGb3JlYWNoTm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiBTdGF0ZW1lbnRSZXN1bHQud2l0aFJldHVybihcblx0XHRcdFx0XHRcdHRoaXMuY2hlY2tGb3JlYWNoKG5vZGUsIHNjb3BlKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkVYUFJFU1NJT046XG5cdFx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNURXhwcmVzc2lvbk5vZGUpIHtcblx0XHRcdFx0XHR0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLmV4cHIsIHNjb3BlKTtcblx0XHRcdFx0XHRyZXR1cm4gU3RhdGVtZW50UmVzdWx0Lm5vUmV0dXJuKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFN0YXRlbWVudFJlc3VsdC5ub1JldHVybigpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1ZhcmlhYmxlKG5vZGU6IEFTVFZhcmlhYmxlTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IHZvaWQge1xuXHRcdGNvbnN0IGRlY2xhcmVkVHlwZTogVHlwZSB8IG51bGwgPSBub2RlLnR5cGVBbm5vdGF0aW9uXG5cdFx0XHQ/IHRoaXMud3JhcFR5cGUobm9kZS50eXBlQW5ub3RhdGlvbiwgc2NvcGUpXG5cdFx0XHQ6IG51bGw7XG5cblx0XHRjb25zdCBhY3R1YWxUeXBlOiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5pbml0LCBzY29wZSwgZGVjbGFyZWRUeXBlKTtcblxuXHRcdGlmIChkZWNsYXJlZFR5cGUgJiYgIWRlY2xhcmVkVHlwZS5hY2NlcHRzKGFjdHVhbFR5cGUpKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgVHlwZSBtaXNtYXRjaDogJHtkZWNsYXJlZFR5cGV9IDw+ICR7YWN0dWFsVHlwZX1gLCBub2RlKTtcblx0XHR9XG5cblx0XHRzY29wZS5kZWZpbmVUeXBlKG5vZGUubmFtZSwgZGVjbGFyZWRUeXBlID8/IGFjdHVhbFR5cGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0ZvcmVhY2gobm9kZTogQVNURm9yZWFjaE5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRsZXQgaXRlcmFibGVUeXBlOiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5pdGVyYWJsZSwgc2NvcGUpO1xuXG5cdFx0aXRlcmFibGVUeXBlID0gQXV0b2JveGluZy5hdXRvYm94SWZOZWVkZWQoaXRlcmFibGVUeXBlLCB0aGlzLm9iamVjdFJlZ2lzdHJ5KTtcblxuXHRcdGlmIChpdGVyYWJsZVR5cGUgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUgJiYgaXRlcmFibGVUeXBlLmNsYXNzU3ltYm9sLm5hbWUgPT09ICdBcnJheScpIHtcblx0XHRcdGlmIChpdGVyYWJsZVR5cGUudHlwZUFyZ3VtZW50cy5sZW5ndGggIT09IDEpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoJ0FycmF5IGluIGZvcmVhY2ggbXVzc3QgaGF2ZSBleGFjdGx5IG9uZSB0eXBlIGFyZ3VtZW50LicsIG5vZGUuaXRlcmFibGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBlbGVtZW50VHlwZTogVHlwZSB8IG51bGwgPSBpdGVyYWJsZVR5cGUudHlwZUFyZ3VtZW50c1swXSB8fCBudWxsO1xuXG5cdFx0XHRpZiAoZWxlbWVudFR5cGUgPT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoJ0FycmF5IGluIGZvcmVhY2ggbXVzdCBoYXZlIGV4YWN0bHkgb25lIHR5cGUgYXJndW1lbnQuJywgbm9kZS5pdGVyYWJsZSk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGxvb3BTY29wZSA9IG5ldyBUeXBlU2NvcGUoc2NvcGUpO1xuXHRcdFx0bG9vcFNjb3BlLmRlZmluZVR5cGUobm9kZS5pdGVyYXRvciwgZWxlbWVudFR5cGUpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy5jaGVja0JvZHkobm9kZS5ib2R5LCBsb29wU2NvcGUpO1xuXG5cdFx0fVxuXG5cdFx0dGhpcy50eXBlRXJyb3IoYGZvcmVhY2ggZXhwZWN0cyBBcnJheTxUPiwgZ290ICR7aXRlcmFibGVUeXBlLnRvU3RyaW5nKCl9YCwgbm9kZS5pdGVyYWJsZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrRXhwcmVzc2lvbihleHByOiBBU1ROb2RlIHwgbnVsbCwgc2NvcGU6IFR5cGVTY29wZSwgZXhwZWN0ZWRUeXBlOiBUeXBlIHwgbnVsbCA9IG51bGwpOiBUeXBlIHtcblx0XHRpZiAoZXhwciA9PT0gbnVsbCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoJ0V4cHJlc3Npb24gZXhwZWN0ZWQsIGdvdCBudWxsLicsIGV4cHIpO1xuXHRcdH1cblxuXHRcdHN3aXRjaCAoZXhwci50eXBlKSB7XG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLk5VTUJFUjpcblx0XHRcdFx0cmV0dXJuIFR5cGVzLk5VTUJFUjtcblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5TVFJJTkc6XG5cdFx0XHRcdHJldHVybiBUeXBlcy5TVFJJTkc7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuQk9PTEVBTjpcblx0XHRcdFx0cmV0dXJuIFR5cGVzLkJPT0xFQU47XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuTlVMTDpcblx0XHRcdFx0cmV0dXJuIFR5cGVzLk5VTEw7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuQVNTSUdOTUVOVDoge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVEFzc2lnbm1lbnROb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tBc3NpZ25tZW50KGV4cHIsIHNjb3BlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5WRE9NOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUVkRvbU5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja1ZEb21Ob2RlKGV4cHIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkFSUkFZOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQXJyYXlOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tBcnJheUV4cHJlc3Npb24oZXhwciwgc2NvcGUsIGV4cGVjdGVkVHlwZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuSU5ERVg6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RJbmRleE5vZGUpIHtcblx0XHRcdFx0XHRjb25zdCBvYmplY3RUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24oZXhwci5vYmplY3QsIHNjb3BlKTtcblx0XHRcdFx0XHRjb25zdCBpbmRleCA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKGV4cHIuaW5kZXgsIHNjb3BlKTtcblxuXHRcdFx0XHRcdGlmIChvYmplY3RUeXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gb2JqZWN0VHlwZS50eXBlQXJndW1lbnRzWzBdIHx8IFR5cGVzLk1JWEVEO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgaW5kZXggJHtvYmplY3RUeXBlLm5hbWV9IHdpdGggJHtpbmRleC5uYW1lfWAsIGV4cHIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLlVOQVJZOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUVW5hcnlOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tVbmFyeUV4cHJlc3Npb24oZXhwciwgc2NvcGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLk1FTUJFUjoge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja01lbWJlckV4cHJlc3Npb24oZXhwciwgc2NvcGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLlRISVM6IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tUaGlzRXhwcmVzc2lvbihleHByLCBzY29wZSk7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuSURFTlRJRklFUjpcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tJZGVudGlmaWVyRXhwcmVzc2lvbihleHByLCBzY29wZSk7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuTkVXOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTmV3Tm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrTmV3RXhwcmVzc2lvbihleHByLCBzY29wZSwgZXhwZWN0ZWRUeXBlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5CSU5BUlk6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RCaW5hcnlOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tCaW5hcnlFeHByZXNzaW9uKGV4cHIsIHNjb3BlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5MQU1CREE6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RMYW1iZGFOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tMYW1iZGFFeHByZXNzaW9uKGV4cHIsIHNjb3BlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5DQUxMOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQ2FsbE5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0NhbGxFeHByZXNzaW9uKGV4cHIsIHNjb3BlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gVHlwZXMuTUlYRUQ7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQmluYXJ5RXhwcmVzc2lvbihleHByOiBBU1RCaW5hcnlOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0Y29uc3QgbGVmdDogVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKGV4cHIubGVmdCwgc2NvcGUpO1xuXHRcdGNvbnN0IHJpZ2h0OiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24oZXhwci5yaWdodCwgc2NvcGUpO1xuXHRcdGNvbnN0IG9wOiBzdHJpbmcgPSBleHByLm9wZXJhdG9yO1xuXG5cdFx0aWYgKGxlZnQgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUgJiYgcmlnaHQgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUpIHtcblx0XHRcdGlmIChsZWZ0LmFjY2VwdHMocmlnaHQpKSB7XG5cdFx0XHRcdHJldHVybiBsZWZ0O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChHUkFNTUFSLkFSSVRITUVUSUMuaW5jbHVkZXMob3ApKSB7XG5cdFx0XHRpZiAobGVmdC5hY2NlcHRzKFR5cGVzLk5VTUJFUikgJiYgcmlnaHQuYWNjZXB0cyhUeXBlcy5OVU1CRVIpKSB7XG5cdFx0XHRcdHJldHVybiBUeXBlcy5OVU1CRVI7XG5cdFx0XHR9XG5cdFx0XHRpZiAobGVmdC5hY2NlcHRzKFR5cGVzLlNUUklORykgfHwgcmlnaHQuYWNjZXB0cyhUeXBlcy5TVFJJTkcpKSB7XG5cdFx0XHRcdHJldHVybiBUeXBlcy5TVFJJTkc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQXJpdGhtZXRpYyBvcGVyYXRvciAnJHtvcH0nIHJlcXVpcmVzIG51bWJlcnNgLCBleHByKTtcblx0XHR9XG5cblx0XHRpZiAoR1JBTU1BUi5DT01QQVJJU09OLmluY2x1ZGVzKG9wKSkge1xuXHRcdFx0aWYgKGxlZnQuYWNjZXB0cyhUeXBlcy5OVU1CRVIpICYmIHJpZ2h0LmFjY2VwdHMoVHlwZXMuTlVNQkVSKSkge1xuXHRcdFx0XHRyZXR1cm4gVHlwZXMuQk9PTEVBTjtcblx0XHRcdH1cblx0XHRcdHRoaXMudHlwZUVycm9yKGBDb21wYXJpc29uICcke29wfScgcmVxdWlyZXMgbnVtYmVyc2AsIGV4cHIpO1xuXHRcdH1cblxuXHRcdGlmIChHUkFNTUFSLkVRVUFMSVRZLmluY2x1ZGVzKG9wKSkge1xuXHRcdFx0aWYgKGxlZnQuYWNjZXB0cyhyaWdodCkpIHtcblx0XHRcdFx0cmV0dXJuIFR5cGVzLkJPT0xFQU47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNvbXBhcmUgJHtsZWZ0Lm5hbWV9IHdpdGggJHtyaWdodC5uYW1lfWAsIGV4cHIpO1xuXHRcdH1cblxuXHRcdGlmIChHUkFNTUFSLkxPR0lDQUwuaW5jbHVkZXMob3ApKSB7XG5cdFx0XHRpZiAobGVmdC5hY2NlcHRzKFR5cGVzLkJPT0xFQU4pICYmIHJpZ2h0LmFjY2VwdHMoVHlwZXMuQk9PTEVBTikpIHtcblx0XHRcdFx0cmV0dXJuIFR5cGVzLkJPT0xFQU47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgTG9naWNhbCBvcGVyYXRvciAnJHtvcH0nIHJlcXVpcmVzIGJvb2xlYW5zYCwgZXhwcik7XG5cdFx0fVxuXG5cdFx0dGhpcy50eXBlRXJyb3IoYEludmFsaWQgYmluYXJ5IG9wZXJhdGlvbmAsIGV4cHIpO1xuXHR9XG5cblxuXHRwcml2YXRlIGNoZWNrQXNzaWdubWVudChub2RlOiBBU1RBc3NpZ25tZW50Tm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGNvbnN0IGxlZnRUeXBlOiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5sZWZ0LCBzY29wZSk7XG5cdFx0Y29uc3QgcmlnaHRUeXBlOiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5yaWdodCwgc2NvcGUpO1xuXG5cdFx0dGhpcy5jaGVja0Fzc2lnbmFibGUobGVmdFR5cGUsIHJpZ2h0VHlwZSwgbm9kZS5yaWdodCk7XG5cblx0XHR0aGlzLmNoZWNrUmVhZG9ubHkobm9kZS5sZWZ0LCBzY29wZSk7XG5cblx0XHRyZXR1cm4gbGVmdFR5cGU7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrUmVhZG9ubHkobm9kZTogQVNUTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IHZvaWQge1xuXHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkge1xuXHRcdFx0Y29uc3Qgb2JqZWN0VHlwZTogVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKG5vZGUub2JqZWN0LCBzY29wZSk7XG5cdFx0XHRpZiAoIShvYmplY3RUeXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGFzc2lnbiB0byBub24tb2JqZWN0YCwgbm9kZSk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCA9IG9iamVjdFR5cGUuY2xhc3NTeW1ib2w7XG5cdFx0XHRjb25zdCBzdGF0aWNGaWVsZFN5bWJvbDogRmllbGRTeW1ib2wgfCBudWxsID0gY2xhc3NTeW1ib2wucmVzb2x2ZVN0YXRpY0ZpZWxkU3ltYm9sKG5vZGUucHJvcGVydHkpO1xuXHRcdFx0aWYgKHN0YXRpY0ZpZWxkU3ltYm9sKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgaW5zdGFuY2VGaWVsZFN5bWJvbDogRmllbGRTeW1ib2wgfCBudWxsID0gY2xhc3NTeW1ib2wucmVzb2x2ZUluc3RhbmNlRmllbGRTeW1ib2wobm9kZS5wcm9wZXJ0eSk7XG5cdFx0XHRpZiAoIWluc3RhbmNlRmllbGRTeW1ib2wpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYFVua25vd24gbWVtYmVyICR7bm9kZS5wcm9wZXJ0eX1gLCBub2RlKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgaW5Db25zdHJ1Y3RvcjogYm9vbGVhbiA9IHNjb3BlLmN1cnJlbnRNZXRob2RTeW1ib2w/Lm5hbWUgPT09IEdSQU1NQVIuQ09OU1RSVUNUT1I7XG5cdFx0XHRsZXQgaXNUaGlzOiBib29sZWFuID0gZmFsc2U7XG5cdFx0XHRpZiAoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCBpbnN0YW5jZW9mIENsYXNzU3ltYm9sKSB7XG5cdFx0XHRcdGlzVGhpcyA9IHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgPT09IG9iamVjdFR5cGUuY2xhc3NTeW1ib2w7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghKGluQ29uc3RydWN0b3IgJiYgaXNUaGlzKSkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGFzc2lnbiB0byByZWFkb25seSBwcm9wZXJ0eSAnJHtpbnN0YW5jZUZpZWxkU3ltYm9sLm5hbWV9J2AsIG5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tGaWVsZEFjY2Vzcyhub2RlOiBBU1RNZW1iZXJOb2RlLCBjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wsIGZpZWxkU3ltYm9sOiBGaWVsZFN5bWJvbCwgc2NvcGU6IFR5cGVTY29wZSk6IHZvaWQge1xuXHRcdGlmIChmaWVsZFN5bWJvbC5pc1B1YmxpYykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICghc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBhY2Nlc3MgcHJpdmF0ZSBtZW1iZXIgJHtub2RlLnByb3BlcnR5fSBvZiAke2NsYXNzU3ltYm9sLm5hbWV9YCwgbm9kZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgIT09IGZpZWxkU3ltYm9sLm93bmVyKSB7XG5cdFx0XHRpZiAoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCBpbnN0YW5jZW9mIENsYXNzU3ltYm9sXG5cdFx0XHRcdCYmIHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wuc3VwZXJDbGFzc1N5bWJvbCAhPT0gZmllbGRTeW1ib2wub3duZXIpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBhY2Nlc3MgcHJpdmF0ZSBtZW1iZXIgJHtub2RlLnByb3BlcnR5fSBvZiAke2NsYXNzU3ltYm9sLm5hbWV9YCwgbm9kZSk7XG5cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrSW5zdGFuY2VNZXRob2RBY2Nlc3Mobm9kZTogQVNUTWVtYmVyTm9kZSwgY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sLCBtZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCwgc2NvcGU6IFR5cGVTY29wZSk6IHZvaWQge1xuXHRcdGlmIChtZXRob2RTeW1ib2wuaXNQdWJsaWMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIXNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgYWNjZXNzIHByaXZhdGUgbWV0aG9kICR7bm9kZS5wcm9wZXJ0eX0gb2YgJHtjbGFzc1N5bWJvbC5uYW1lfWAsIG5vZGUpO1xuXHRcdH1cblxuXHRcdGlmIChzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sICE9PSBtZXRob2RTeW1ib2wub3duZXIpIHtcblx0XHRcdGlmIChzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sIGluc3RhbmNlb2YgQ2xhc3NTeW1ib2xcblx0XHRcdFx0JiYgc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbC5zdXBlckNsYXNzU3ltYm9sICE9PSBtZXRob2RTeW1ib2wub3duZXIpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBhY2Nlc3MgcHJpdmF0ZSBtZXRob2QgJHtub2RlLnByb3BlcnR5fSBvZiAke2NsYXNzU3ltYm9sLm5hbWV9YCwgbm9kZSk7XG5cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrU3RhdGljTWV0aG9kQWNjZXNzKGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCwgbWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wsIHNjb3BlOiBUeXBlU2NvcGUpOiB2b2lkIHtcblx0XHRpZiAoIW1ldGhvZFN5bWJvbC5pc1N0YXRpYykge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBjYWxsIGluc3RhbmNlIG1ldGhvZCAke2NsYXNzU3ltYm9sLm5hbWV9LiR7bWV0aG9kU3ltYm9sLm5hbWV9IGFzIHN0YXRpYyBtZXRob2RgKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAobWV0aG9kU3ltYm9sLmlzUHVibGljKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCFzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGFjY2VzcyBwcml2YXRlIG1ldGhvZCAke21ldGhvZFN5bWJvbC5uYW1lfSBvZiAke2NsYXNzU3ltYm9sLm5hbWV9YCxcblx0XHRcdCAgICAgICAgICAgICAgIG1ldGhvZFN5bWJvbC5ub2RlKTtcblx0XHR9XG5cblx0XHRpZiAoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCAhPT0gbWV0aG9kU3ltYm9sLm93bmVyKSB7XG5cdFx0XHRpZiAoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCBpbnN0YW5jZW9mIENsYXNzU3ltYm9sXG5cdFx0XHRcdCYmIHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wuc3VwZXJDbGFzc1N5bWJvbCAhPT0gbWV0aG9kU3ltYm9sLm93bmVyKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgYWNjZXNzIHByaXZhdGUgbWV0aG9kICR7bWV0aG9kU3ltYm9sLm5hbWV9IG9mICR7Y2xhc3NTeW1ib2wubmFtZX1gLFxuXHRcdFx0XHQgICAgICAgICAgICAgICBtZXRob2RTeW1ib2wubm9kZSk7XG5cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrTWVtYmVyRXhwcmVzc2lvbihub2RlOiBBU1RNZW1iZXJOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0Y29uc3Qgb2JqZWN0VHlwZTogVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKG5vZGUub2JqZWN0LCBzY29wZSk7XG5cblx0XHRpZiAob2JqZWN0VHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSkge1xuXHRcdFx0Y29uc3QgY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sID0gb2JqZWN0VHlwZS5jbGFzc1N5bWJvbDtcblxuXHRcdFx0Y29uc3QgaW5zdGFuY2VGaWVsZFN5bWJvbDogRmllbGRTeW1ib2wgfCBudWxsID0gY2xhc3NTeW1ib2wucmVzb2x2ZUluc3RhbmNlRmllbGRTeW1ib2wobm9kZS5wcm9wZXJ0eSk7XG5cdFx0XHRpZiAoaW5zdGFuY2VGaWVsZFN5bWJvbCkge1xuXHRcdFx0XHR0aGlzLmNoZWNrRmllbGRBY2Nlc3Mobm9kZSwgY2xhc3NTeW1ib2wsIGluc3RhbmNlRmllbGRTeW1ib2wsIHNjb3BlKTtcblx0XHRcdFx0cmV0dXJuIGluc3RhbmNlRmllbGRTeW1ib2wuZmllbGRUeXBlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzdGF0aWNGaWVsZFN5bWJvbDogRmllbGRTeW1ib2wgfCBudWxsID0gY2xhc3NTeW1ib2wucmVzb2x2ZVN0YXRpY0ZpZWxkU3ltYm9sKG5vZGUucHJvcGVydHkpO1xuXHRcdFx0aWYgKHN0YXRpY0ZpZWxkU3ltYm9sKSB7XG5cdFx0XHRcdHRoaXMuY2hlY2tGaWVsZEFjY2Vzcyhub2RlLCBjbGFzc1N5bWJvbCwgc3RhdGljRmllbGRTeW1ib2wsIHNjb3BlKTtcblx0XHRcdFx0cmV0dXJuIHN0YXRpY0ZpZWxkU3ltYm9sLmZpZWxkVHlwZTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFVua25vd24gbWVtYmVyICR7bm9kZS5wcm9wZXJ0eX1gLCBub2RlKTtcblx0XHR9XG5cblx0XHR0aGlzLnR5cGVFcnJvcihcIkNhbm5vdCBhY2Nlc3MgbWVtYmVyIG9mIG5vbi1vYmplY3RcIiwgbm9kZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrVGhpc0V4cHJlc3Npb24obm9kZTogQVNUTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IENsYXNzUmVmVHlwZSB7XG5cdFx0aWYgKHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgaW5zdGFuY2VvZiBDbGFzc1N5bWJvbCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDbGFzc1JlZlR5cGUoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCk7XG5cdFx0fVxuXHRcdHRoaXMudHlwZUVycm9yKCd0aGlzIG91dHNpZGUgb2YgY2xhc3MnLCBub2RlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlOiBBU1ROb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0aWYgKHNjb3BlLmhhc1R5cGUobm9kZS5uYW1lKSkge1xuXHRcdFx0cmV0dXJuIHNjb3BlLmdldFR5cGUobm9kZS5uYW1lKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKG5vZGUubmFtZSkpIHtcblx0XHRcdHJldHVybiBuZXcgQ2xhc3NSZWZUeXBlKHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2wobm9kZS5uYW1lKSk7XG5cdFx0fVxuXHRcdHRoaXMudHlwZUVycm9yKGBVbmRlZmluZWQgaWRlbnRpZmllciAke25vZGUubmFtZX1gLCBub2RlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tOZXdFeHByZXNzaW9uKG5vZGU6IEFTVE5ld05vZGUsIHNjb3BlOiBUeXBlU2NvcGUsIGV4cGVjdGVkVHlwZTogVHlwZSB8IG51bGwgPSBudWxsKTogQ2xhc3NSZWZUeXBlIHtcblx0XHRjb25zdCBjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wgPSB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKG5vZGUubmFtZSk7XG5cblx0XHRsZXQgaW5zdGFuY2VUeXBlO1xuXHRcdGlmIChub2RlLnR5cGVBbm5vdGF0aW9uLnR5cGVBcmd1bWVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0Y29uc3QgdHlwZUFyZ3VtZW50cyA9IG5vZGVcblx0XHRcdFx0LnR5cGVBbm5vdGF0aW9uXG5cdFx0XHRcdC50eXBlQXJndW1lbnRzXG5cdFx0XHRcdC5tYXAodHlwZUFyZ3VtZW50ID0+IHRoaXMud3JhcFR5cGUodHlwZUFyZ3VtZW50LCBzY29wZSkpO1xuXG5cdFx0XHRpZiAodHlwZUFyZ3VtZW50cy5sZW5ndGggIT09IGNsYXNzU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgV3JvbmcgbnVtYmVyIG9mIHR5cGUgYXJndW1lbnRzYCwgbm9kZSk7XG5cdFx0XHR9XG5cblx0XHRcdGluc3RhbmNlVHlwZSA9IG5ldyBDbGFzc1JlZlR5cGUoY2xhc3NTeW1ib2wsIHR5cGVBcmd1bWVudHMpO1xuXHRcdH0gZWxzZSBpZiAoZXhwZWN0ZWRUeXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0XHRpbnN0YW5jZVR5cGUgPSBleHBlY3RlZFR5cGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGluc3RhbmNlVHlwZSA9IG5ldyBDbGFzc1JlZlR5cGUoXG5cdFx0XHRcdGNsYXNzU3ltYm9sLFxuXHRcdFx0XHRjbGFzc1N5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5tYXAoKCkgPT4gVHlwZXMuTUlYRUQpXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmIChjbGFzc1N5bWJvbC5jb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbCkge1xuXHRcdFx0dGhpcy5jaGVja0NhbGxBcmd1bWVudHMoY2xhc3NTeW1ib2wuY29uc3RydWN0b3JNZXRob2RTeW1ib2wsIG5vZGUuYXJndW1lbnRzLCBzY29wZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGV4cGVjdGVkVHlwZSAmJiAhZXhwZWN0ZWRUeXBlLmFjY2VwdHMoaW5zdGFuY2VUeXBlKSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFR5cGUgbWlzbWF0Y2g6ICR7ZXhwZWN0ZWRUeXBlfSA8PiAke2luc3RhbmNlVHlwZX1gLCBub2RlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaW5zdGFuY2VUeXBlO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0FycmF5RXhwcmVzc2lvbihub2RlOiBBU1RBcnJheU5vZGUsIHNjb3BlOiBUeXBlU2NvcGUsIGV4cGVjdGVkVHlwZTogVHlwZSB8IG51bGwgPSBudWxsKTogQ2xhc3NSZWZUeXBlIHtcblxuXHRcdGlmIChub2RlLmVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0aWYgKGV4cGVjdGVkVHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSkge1xuXHRcdFx0XHRleHBlY3RlZFR5cGUgPSBleHBlY3RlZFR5cGUudHlwZUFyZ3VtZW50c1swXSB8fCBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcy5uZXdBcnJheVR5cGVPZihleHBlY3RlZFR5cGUgfHwgVHlwZXMuTUlYRUQpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNsYXNzUmVmTmFtZSA9IFByaW1pdGl2ZUNsYXNzVHlwZXMuZ2V0Q2xhc3NSZWZOYW1lKFByaW1pdGl2ZUNsYXNzVHlwZXMuQVJSQVkpO1xuXG5cdFx0bGV0IGV4cGVjdGVkVHlwZU9mSXRlbTogVHlwZTtcblx0XHRpZiAoZXhwZWN0ZWRUeXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlICYmIGV4cGVjdGVkVHlwZS5jbGFzc1N5bWJvbC5uYW1lID09PSBjbGFzc1JlZk5hbWUpIHtcblx0XHRcdGV4cGVjdGVkVHlwZU9mSXRlbSA9IGV4cGVjdGVkVHlwZS50eXBlQXJndW1lbnRzWzBdIHx8IFR5cGVzLk1JWEVEO1xuXHRcdH0gZWxzZSBpZiAobm9kZS5lbGVtZW50c1swXSkge1xuXHRcdFx0ZXhwZWN0ZWRUeXBlT2ZJdGVtID0gdGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5lbGVtZW50c1swXSwgc2NvcGUsIGV4cGVjdGVkVHlwZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKCdBcnJheSBleHByZXNzaW9uIG11c3QgaGF2ZSBhdCBsZWFzdCBvbmUgZWxlbWVudCcsIG5vZGUpO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgaXRlbSBvZiBub2RlLmVsZW1lbnRzKSB7XG5cdFx0XHRjb25zdCBhY3R1YWxUeXBlT2ZJdGVtOiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24oaXRlbSwgc2NvcGUsIGV4cGVjdGVkVHlwZU9mSXRlbSk7XG5cdFx0XHRpZiAoIWV4cGVjdGVkVHlwZU9mSXRlbS5hY2NlcHRzKGFjdHVhbFR5cGVPZkl0ZW0pKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKFxuXHRcdFx0XHRcdGBBcnJheSBlbGVtZW50cyBtdXN0IGhhdmUgc2FtZSB0eXBlLCBnb3QgJHtleHBlY3RlZFR5cGVPZkl0ZW19IGFuZCAke2FjdHVhbFR5cGVPZkl0ZW19YCxcblx0XHRcdFx0XHRub2RlXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMubmV3QXJyYXlUeXBlT2YoZXhwZWN0ZWRUeXBlT2ZJdGVtKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tVbmFyeUV4cHJlc3Npb24obm9kZTogQVNUVW5hcnlOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0Y29uc3Qgb3BlcmFuZDogVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKG5vZGUuYXJndW1lbnQsIHNjb3BlKTtcblx0XHRjb25zdCBvcDogc3RyaW5nID0gbm9kZS5vcGVyYXRvcjtcblxuXHRcdGlmIChvcGVyYW5kIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0XHRyZXR1cm4gb3BlcmFuZDtcblx0XHR9XG5cblx0XHRzd2l0Y2ggKG9wKSB7XG5cdFx0XHRjYXNlIEdSQU1NQVIuRVhDTEFNQVRJT05fTUFSSzoge1xuXHRcdFx0XHRpZiAob3BlcmFuZC5lcXVhbHMoVHlwZXMuQk9PTEVBTikpIHtcblx0XHRcdFx0XHRyZXR1cm4gVHlwZXMuQk9PTEVBTjtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgVW5hcnkgJyEnIHJlcXVpcmVzIGJvb2xlYW4sIGdvdCAke29wZXJhbmQubmFtZX1gLCBub2RlKTtcblx0XHRcdH1cblx0XHRcdGNhc2UgR1JBTU1BUi5NSU5VUzoge1xuXHRcdFx0XHRpZiAob3BlcmFuZC5lcXVhbHMoVHlwZXMuTlVNQkVSKSkge1xuXHRcdFx0XHRcdHJldHVybiBUeXBlcy5OVU1CRVI7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYFVuYXJ5ICctJyByZXF1aXJlcyBudW1iZXIsIGdvdCAke29wZXJhbmQubmFtZX1gLCBub2RlKTtcblx0XHRcdH1cblx0XHRcdGNhc2UgR1JBTU1BUi5QTFVTOiB7XG5cdFx0XHRcdGlmIChvcGVyYW5kLmVxdWFscyhUeXBlcy5OVU1CRVIpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFR5cGVzLk5VTUJFUjtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgVW5hcnkgJysnIHJlcXVpcmVzIG51bWJlciwgZ290ICR7b3BlcmFuZC5uYW1lfWAsIG5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLnR5cGVFcnJvcihgSW52YWxpZCB1bmFyeSBvcGVyYXRvciAke29wfWAsIG5vZGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0xhbWJkYUV4cHJlc3Npb24obm9kZTogQVNUTGFtYmRhTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IExhbWJkYVR5cGUge1xuXHRcdGNvbnN0IGxhbWJkYVNjb3BlID0gbmV3IFR5cGVTY29wZShzY29wZSk7XG5cdFx0Y29uc3QgcGFyYW1ldGVyczogUGFyYW1ldGVyU3ltYm9sW10gPSBub2RlLnBhcmFtZXRlcnMubWFwKChwYXJhbWV0ZXJOb2RlOiBBU1RQYXJhbWV0ZXJOb2RlKTogUGFyYW1ldGVyU3ltYm9sID0+IHtcblx0XHRcdGNvbnN0IHBhcmFtZXRlclN5bWJvbDogUGFyYW1ldGVyU3ltYm9sID0gdGhpcy5wYXJhbWV0ZXJOb2RlVG9TeW1ib2wocGFyYW1ldGVyTm9kZSk7XG5cblx0XHRcdGxhbWJkYVNjb3BlLmRlZmluZVR5cGUocGFyYW1ldGVyTm9kZS5uYW1lLCBwYXJhbWV0ZXJTeW1ib2wucGFyYW1ldGVyVHlwZSk7XG5cblx0XHRcdHJldHVybiBwYXJhbWV0ZXJTeW1ib2w7XG5cdFx0fSk7XG5cblx0XHRpZiAobm9kZS5jaGlsZHJlblswXSkge1xuXHRcdFx0cmV0dXJuIG5ldyBMYW1iZGFUeXBlKHBhcmFtZXRlcnMsIHRoaXMuY2hlY2tFeHByZXNzaW9uKG5vZGUuY2hpbGRyZW5bMF0sIGxhbWJkYVNjb3BlKSk7XG5cdFx0fVxuXG5cdFx0dGhpcy50eXBlRXJyb3IoJ0xhbWJkYSBleHByZXNzaW9uIG11c3QgaGF2ZSBhIHJldHVybiB0eXBlJywgbm9kZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQ2FsbEV4cHJlc3Npb24obm9kZTogQVNUQ2FsbE5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRjb25zdCBjYWxsZWUgPSBub2RlLmNhbGxlZTtcblxuXHRcdGlmIChjYWxsZWUudHlwZSA9PT0gQVNUTm9kZVR5cGUuSURFTlRJRklFUiAmJiBjYWxsZWUubmFtZSA9PT0gR1JBTU1BUi5TVVBFUikge1xuXHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tTdXBlckNvbnN0cnVjdG9yQ2FsbChub2RlLCBzY29wZSk7XG5cdFx0fVxuXG5cdFx0Ly8gQ2xhc3MubWV0aG9kKClcblx0XHRpZiAoY2FsbGVlIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZVxuXHRcdFx0JiYgY2FsbGVlLm9iamVjdC50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSXG5cdFx0XHQmJiB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmhhc1N5bWJvbChjYWxsZWUub2JqZWN0Lm5hbWUpXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jaGVja1N0YXRpY0NhbGwoXG5cdFx0XHRcdGNhbGxlZS5vYmplY3QubmFtZSxcblx0XHRcdFx0Y2FsbGVlLnByb3BlcnR5LFxuXHRcdFx0XHRub2RlLmFyZ3VtZW50cyxcblx0XHRcdFx0c2NvcGVcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gZXhwci5tZXRob2QoKVxuXHRcdGlmIChjYWxsZWUgaW5zdGFuY2VvZiBBU1RNZW1iZXJOb2RlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jaGVja0luc3RhbmNlQ2FsbChjYWxsZWUsIG5vZGUuYXJndW1lbnRzLCBzY29wZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGNhbGxlZSBpbnN0YW5jZW9mIEFTVExhbWJkYU5vZGUpIHtcblx0XHRcdHJldHVybiB0aGlzLmNoZWNrTGFtYmRhQ2FsbCh0aGlzLmNoZWNrTGFtYmRhRXhwcmVzc2lvbihjYWxsZWUsIHNjb3BlKSwgbm9kZS5hcmd1bWVudHMsIHNjb3BlKTtcblx0XHR9XG5cblx0XHQvLyBJZGVudGlmaWVyOiBWYXJpYWJsZSAvIExhbWJkYVxuXHRcdGlmIChjYWxsZWUudHlwZSA9PT0gQVNUTm9kZVR5cGUuSURFTlRJRklFUikge1xuXHRcdFx0aWYgKHNjb3BlLmhhc1R5cGUoY2FsbGVlLm5hbWUpKSB7XG5cdFx0XHRcdGNvbnN0IHR5cGUgPSBzY29wZS5nZXRUeXBlKGNhbGxlZS5uYW1lKTtcblx0XHRcdFx0aWYgKHR5cGUgaW5zdGFuY2VvZiBMYW1iZGFUeXBlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tMYW1iZGFDYWxsKHR5cGUsIG5vZGUuYXJndW1lbnRzLCBzY29wZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBjYWxsIG5vbi1mdW5jdGlvbiAke2NhbGxlZS5uYW1lfWAsIG5vZGUpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBGYWxsYmFjazogZ2xvYmFsZSBGdW5rdGlvblxuXHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tGdW5jdGlvbkNhbGwoY2FsbGVlLm5hbWUsIG5vZGUuYXJndW1lbnRzLCBzY29wZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFR5cGVzLk1JWEVEO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1N1cGVyQ29uc3RydWN0b3JDYWxsKG5vZGU6IEFTVENhbGxOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0Y29uc3QgY3VycmVudENsYXNzID0gc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbDtcblxuXHRcdGlmICghKGN1cnJlbnRDbGFzcyBpbnN0YW5jZW9mIENsYXNzU3ltYm9sKSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoJ3N1cGVyKCkgdXNlZCBvdXRzaWRlIG9mIGNsYXNzJywgbm9kZSk7XG5cdFx0fVxuXG5cdFx0aWYgKCFjdXJyZW50Q2xhc3Muc3VwZXJDbGFzcykge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoJ3N1cGVyKCkgdXNlZCBvdXRzaWRlIG9mIGNsYXNzIGhpZXJhcmNoeScsIG5vZGUpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHN1cGVyU3ltYm9sOiBDbGFzc1N5bWJvbCA9IHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2woY3VycmVudENsYXNzLnN1cGVyQ2xhc3MpO1xuXHRcdGlmICghc3VwZXJTeW1ib2wuY29uc3RydWN0b3JNZXRob2RTeW1ib2wpIHtcblx0XHRcdGlmIChub2RlLmFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKCdTdXBlciBjb25zdHJ1Y3RvciB0YWtlcyBubyBhcmd1bWVudHMnLCBub2RlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBUeXBlcy5WT0lEO1xuXHRcdH1cblxuXHRcdHRoaXMuY2hlY2tDYWxsQXJndW1lbnRzKHN1cGVyU3ltYm9sLmNvbnN0cnVjdG9yTWV0aG9kU3ltYm9sLCBub2RlLmFyZ3VtZW50cywgc2NvcGUpO1xuXG5cdFx0cmV0dXJuIFR5cGVzLlZPSUQ7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQ2FsbE9uTnVsbE9iamVjdFR5cGUob2JqZWN0VHlwZTogVHlwZSwgbm9kZTogQVNUTm9kZSk6IHZvaWQge1xuXHRcdGlmIChvYmplY3RUeXBlLmVxdWFscyhUeXBlcy5OVUxMKSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBjYWxsIG1ldGhvZCBvbiBudWxsYCwgbm9kZSk7XG5cdFx0fVxuXHRcdGlmIChvYmplY3RUeXBlIGluc3RhbmNlb2YgTnVsbGFibGVUeXBlKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNhbGwgbWV0aG9kIG9uIG51bGxhYmxlIHR5cGUgJHtvYmplY3RUeXBlfWAsIG5vZGUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tJbnN0YW5jZUNhbGwoY2FsbGVlOiBBU1RNZW1iZXJOb2RlLCBjYWxsQXJndW1lbnRzOiBBU1ROb2RlW10sIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRsZXQgb2JqZWN0VHlwZTogVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKGNhbGxlZS5vYmplY3QsIHNjb3BlKTtcblxuXHRcdG9iamVjdFR5cGUgPSBBdXRvYm94aW5nLmF1dG9ib3hJZk5lZWRlZChvYmplY3RUeXBlLCB0aGlzLm9iamVjdFJlZ2lzdHJ5KTtcblxuXHRcdHRoaXMuY2hlY2tDYWxsT25OdWxsT2JqZWN0VHlwZShvYmplY3RUeXBlLCBjYWxsZWUpO1xuXG5cdFx0aWYgKG9iamVjdFR5cGUgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUpIHtcblx0XHRcdGNvbnN0IG1ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sID0gdGhpcy5yZXNvbHZlSW5zdGFuY2VNZXRob2RlKFxuXHRcdFx0XHRvYmplY3RUeXBlLmNsYXNzU3ltYm9sLFxuXHRcdFx0XHRjYWxsZWUucHJvcGVydHlcblx0XHRcdCk7XG5cblx0XHRcdGlmIChtZXRob2RTeW1ib2wuaXNTdGF0aWMpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBjYWxsIHN0YXRpYyBtZXRob2QgJHtjYWxsZWUucHJvcGVydHl9IG9uIGluc3RhbmNlIG9mICR7Y2FsbGVlLm9iamVjdC5uYW1lfWAsXG5cdFx0XHRcdCAgICAgICAgICAgICAgIGNhbGxlZSk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuY2hlY2tJbnN0YW5jZU1ldGhvZEFjY2VzcyhjYWxsZWUsIG9iamVjdFR5cGUuY2xhc3NTeW1ib2wsIG1ldGhvZFN5bWJvbCwgc2NvcGUpO1xuXG5cdFx0XHRjb25zdCBvd25lcjogQ2xhc3NTeW1ib2wgfCBJbnRlcmZhY2VTeW1ib2wgfCBudWxsID0gbWV0aG9kU3ltYm9sLm93bmVyO1xuXG5cdFx0XHRpZiAob3duZXIgPT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBjYWxsIG1ldGhvZCBvbiBub24tb2JqZWN0YCwgY2FsbGVlKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc3Vic3RpdHV0aW9uTWFwOiBNYXA8c3RyaW5nLCBUeXBlPiA9IGJ1aWxkVHlwZVN1YnN0aXR1dGlvbk1hcChcblx0XHRcdFx0b3duZXIudHlwZVBhcmFtZXRlclN5bWJvbHMsXG5cdFx0XHRcdG9iamVjdFR5cGUudHlwZUFyZ3VtZW50c1xuXHRcdFx0KTtcblxuXHRcdFx0dGhpcy5jaGVja0NhbGxBcmd1bWVudHMobWV0aG9kU3ltYm9sLCBjYWxsQXJndW1lbnRzLCBzY29wZSwgc3Vic3RpdHV0aW9uTWFwKTtcblxuXHRcdFx0cmV0dXJuIHN1YnN0aXR1dGVUeXBlKG1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlLCBzdWJzdGl0dXRpb25NYXApO1xuXHRcdH1cblxuXHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgY2FsbCBtZXRob2Qgb24gbm9uLW9iamVjdGAsIGNhbGxlZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrU3RhdGljQ2FsbChjbGFzc05hbWU6IHN0cmluZywgbWV0aG9kTmFtZTogc3RyaW5nLCBjYWxsQXJndW1lbnRzOiBBU1ROb2RlW10sIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRjb25zdCBjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wgPSB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKGNsYXNzTmFtZSk7XG5cblx0XHRjb25zdCBtZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCB8IG51bGwgPSBjbGFzc1N5bWJvbC5zdGF0aWNNZXRob2RTeW1ib2xzLmdldChtZXRob2ROYW1lKSB8fCBudWxsO1xuXHRcdGlmICghbWV0aG9kU3ltYm9sKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgVW5rbm93biBzdGF0aWMgbWV0aG9kICR7Y2xhc3NOYW1lfS4ke21ldGhvZE5hbWV9YCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jaGVja1N0YXRpY01ldGhvZEFjY2VzcyhjbGFzc1N5bWJvbCwgbWV0aG9kU3ltYm9sLCBzY29wZSlcblxuXHRcdHRoaXMuY2hlY2tDYWxsQXJndW1lbnRzKG1ldGhvZFN5bWJvbCwgY2FsbEFyZ3VtZW50cywgc2NvcGUpO1xuXG5cdFx0cmV0dXJuIG1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0xhbWJkYUNhbGwobGFtYmRhOiBMYW1iZGFUeXBlLCBjYWxsQXJndW1lbnRzOiBBU1ROb2RlW10sIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblxuXHRcdHRoaXMuY2hlY2tDYWxsQXJndW1lbnRzKGxhbWJkYSwgY2FsbEFyZ3VtZW50cywgc2NvcGUpO1xuXG5cdFx0cmV0dXJuIGxhbWJkYS5yZXR1cm5UeXBlO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0Z1bmN0aW9uQ2FsbChuYW1lOiBzdHJpbmcsIGNhbGxBcmd1bWVudHM6IEFTVE5vZGVbXSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGlmICghZ2xvYmFsRnVuY3Rpb25UeXBlUmVnaXN0cnkuaGFzKG5hbWUpKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgVW5rbm93biBmdW5jdGlvbiAke25hbWV9YCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbmF0aXZlRnVuY3Rpb246IE5hdGl2ZUZ1bmN0aW9uID0gZ2xvYmFsRnVuY3Rpb25UeXBlUmVnaXN0cnkuZ2V0KG5hbWUpO1xuXG5cdFx0dGhpcy5jaGVja0NhbGxBcmd1bWVudHMobmF0aXZlRnVuY3Rpb24sIGNhbGxBcmd1bWVudHMsIHNjb3BlKTtcblxuXHRcdHJldHVybiBuYXRpdmVGdW5jdGlvbi5yZXR1cm5UeXBlXG5cdFx0XHQ/IHRoaXMud3JhcFR5cGUobmF0aXZlRnVuY3Rpb24ucmV0dXJuVHlwZSwgc2NvcGUpXG5cdFx0XHQ6IFR5cGVzLlZPSUQ7XG5cdH1cblxuXHRwcml2YXRlIHBhcmFtZXRlcnNTeW1ib2xzRnJvbUNhbGxhYmxlU3ltYm9sKGNhbGxhYmxlU3ltYm9sOiBNZXRob2RTeW1ib2wgfCBMYW1iZGFUeXBlIHwgTmF0aXZlRnVuY3Rpb24pOiBQYXJhbWV0ZXJTeW1ib2xbXSB7XG5cdFx0aWYgKGNhbGxhYmxlU3ltYm9sIGluc3RhbmNlb2YgTmF0aXZlRnVuY3Rpb24pIHtcblx0XHRcdHJldHVybiBjYWxsYWJsZVN5bWJvbFxuXHRcdFx0XHQucGFyYW1ldGVyTm9kZXNcblx0XHRcdFx0Lm1hcChwYXJhbWV0ZXJOb2RlID0+IHRoaXMucGFyYW1ldGVyTm9kZVRvU3ltYm9sKHBhcmFtZXRlck5vZGUpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY2FsbGFibGVTeW1ib2wucGFyYW1ldGVyU3ltYm9sc1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0NhbGxBcmd1bWVudHMoXG5cdFx0Y2FsbGFibGVTeW1ib2w6IE1ldGhvZFN5bWJvbCB8IExhbWJkYVR5cGUgfCBOYXRpdmVGdW5jdGlvbixcblx0XHRjYWxsQXJndW1lbnRzOiBBU1ROb2RlW10sXG5cdFx0c2NvcGU6IFR5cGVTY29wZSxcblx0XHRzdWJzdGl0dXRpb25NYXA6IE1hcDxzdHJpbmcsIFR5cGU+ID0gbmV3IE1hcCgpXG5cdCk6IHZvaWQge1xuXHRcdGNvbnN0IGNhbGxTY29wZSA9IG5ldyBUeXBlU2NvcGUoc2NvcGUpO1xuXHRcdGxldCBwYXJhbWV0ZXJTeW1ib2xzID0gdGhpcy5wYXJhbWV0ZXJzU3ltYm9sc0Zyb21DYWxsYWJsZVN5bWJvbChjYWxsYWJsZVN5bWJvbCk7XG5cblx0XHRpZiAoY2FsbEFyZ3VtZW50cy5sZW5ndGggPiBwYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoXCJBcmd1bWVudCBjb3VudCBtaXNtYXRjaFwiKTtcblx0XHR9XG5cblx0XHRsZXQgYWN0dWFsVHlwZTogVHlwZTtcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcGFyYW1ldGVyU3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgcGFyYW1ldGVyU3ltYm9sOiBQYXJhbWV0ZXJTeW1ib2wgfCBudWxsID0gcGFyYW1ldGVyU3ltYm9sc1tpXSB8fCBudWxsO1xuXHRcdFx0Y29uc3QgY2FsbEFyZ3VtZW50OiBBU1ROb2RlIHwgbnVsbCA9IGNhbGxBcmd1bWVudHNbaV0gfHwgbnVsbDtcblxuXHRcdFx0aWYgKHBhcmFtZXRlclN5bWJvbCkge1xuXHRcdFx0XHRjb25zdCBleHBlY3RlZFR5cGU6IFR5cGUgPSBzdWJzdGl0dXRlVHlwZShwYXJhbWV0ZXJTeW1ib2wucGFyYW1ldGVyVHlwZSwgc3Vic3RpdHV0aW9uTWFwKTtcblxuXHRcdFx0XHRpZiAoY2FsbEFyZ3VtZW50KSB7XG5cdFx0XHRcdFx0YWN0dWFsVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKGNhbGxBcmd1bWVudCwgY2FsbFNjb3BlLCBleHBlY3RlZFR5cGUpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHBhcmFtZXRlclN5bWJvbC5kZWZhdWx0VHlwZSkge1xuXHRcdFx0XHRcdGFjdHVhbFR5cGUgPSBwYXJhbWV0ZXJTeW1ib2wuZGVmYXVsdFR5cGU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYE1pc3NpbmcgYXJndW1lbnQgJHtwYXJhbWV0ZXJTeW1ib2wubmFtZX1gLCBjYWxsQXJndW1lbnQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5jaGVja0Fzc2lnbmFibGUoZXhwZWN0ZWRUeXBlLCBhY3R1YWxUeXBlLCBjYWxsQXJndW1lbnRzW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQXNzaWduYWJsZShleHBlY3RlZFR5cGU6IFR5cGUsIGFjdHVhbFR5cGU6IFR5cGUsIG5vZGU6IEFTVE5vZGUgfCBudWxsID0gbnVsbCk6IHZvaWQge1xuXHRcdGlmIChleHBlY3RlZFR5cGUuZXF1YWxzKGFjdHVhbFR5cGUpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGV4cGVjdGVkVHlwZSBpbnN0YW5jZW9mIE1peGVkVHlwZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChleHBlY3RlZFR5cGUgaW5zdGFuY2VvZiBOdWxsYWJsZVR5cGUpIHtcblx0XHRcdGlmIChhY3R1YWxUeXBlID09PSBUeXBlcy5OVUxMKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChleHBlY3RlZFR5cGUuaW5uZXIuYWNjZXB0cyhhY3R1YWxUeXBlKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGV4cGVjdGVkVHlwZS5hY2NlcHRzKGFjdHVhbFR5cGUpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy50eXBlRXJyb3IoYFR5cGUgbWlzbWF0Y2g6ICR7ZXhwZWN0ZWRUeXBlfSA8PiAke2FjdHVhbFR5cGV9YCwgbm9kZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQm9keShjaGlsZHJlbjogQVNUTm9kZVtdLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0bGV0IHJldHVyblR5cGU6IFR5cGUgPSBUeXBlcy5NSVhFRDtcblxuXHRcdGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcblx0XHRcdGNvbnN0IHN0YXRlbWVudFJlc3VsdCA9IHRoaXMuY2hlY2tTdGF0ZW1lbnQoY2hpbGQsIHNjb3BlKTtcblx0XHRcdGlmIChzdGF0ZW1lbnRSZXN1bHQuZGlkUmV0dXJuICYmIHN0YXRlbWVudFJlc3VsdC5yZXR1cm5UeXBlKSB7XG5cdFx0XHRcdHJldHVyblR5cGUgPSBzdGF0ZW1lbnRSZXN1bHQucmV0dXJuVHlwZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmV0dXJuVHlwZTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tSZXR1cm5UeXBlKGV4cGVjdGVkVHlwZTogVHlwZSwgYWN0dWFsVHlwZTogVHlwZSwgbm9kZTogQVNUTWV0aG9kTm9kZSk6IHZvaWQge1xuXHRcdC8vIHZvaWQtTWV0aG9kZVxuXHRcdGlmIChleHBlY3RlZFR5cGUgPT09IFR5cGVzLlZPSUQpIHtcblx0XHRcdGlmIChhY3R1YWxUeXBlICE9PSBUeXBlcy5NSVhFRCAmJiBhY3R1YWxUeXBlICE9PSBUeXBlcy5WT0lEKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgcmV0dXJuICR7YWN0dWFsVHlwZX0gZnJvbSB2b2lkIG1ldGhvZGAsIG5vZGUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIGtlaW4gcmV0dXJuIHZvcmhhbmRlblxuXHRcdGlmIChhY3R1YWxUeXBlID09PSBUeXBlcy5NSVhFRCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYE1pc3NpbmcgcmV0dXJuIHN0YXRlbWVudCAoZXhwZWN0ZWQgJHtleHBlY3RlZFR5cGV9KWAsIG5vZGUpO1xuXHRcdH1cblxuXHRcdC8vIHR5cC1pbmtvbXBhdGliZWxcblx0XHRpZiAoIWV4cGVjdGVkVHlwZS5hY2NlcHRzKGFjdHVhbFR5cGUpKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgUmV0dXJuIHR5cGUgbWlzbWF0Y2g6IGV4cGVjdGVkICR7ZXhwZWN0ZWRUeXBlfSwgZ290ICR7YWN0dWFsVHlwZX1gLCBub2RlKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrVkRvbU5vZGUobm9kZTogQVNUVkRvbU5vZGUpOiBUeXBlIHtcblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wgPSB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKG5vZGUudGFnKTtcblxuXHRcdFx0Y29uc3QgbWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wgPSB0aGlzLnJlc29sdmVJbnN0YW5jZU1ldGhvZGUoY2xhc3NTeW1ib2wsICdyZW5kZXInKTtcblxuXHRcdFx0aWYgKCFtZXRob2RTeW1ib2wpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENvbXBvbmVudCAnJHtub2RlLnRhZ30nIGhhcyBubyByZW5kZXIoKSBtZXRob2RgLCBub2RlKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5jaGVja0Fzc2lnbmFibGUobWV0aG9kU3ltYm9sLnJldHVyblR5cGUsIFR5cGVzLlZOT0RFLCBub2RlKTtcblxuXHRcdFx0cmV0dXJuIFR5cGVzLlZOT0RFO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHR9XG5cblx0XHRyZXR1cm4gVHlwZXMuVk5PREU7XG5cdH1cblxuXHRwcml2YXRlIHJlc29sdmVJbnN0YW5jZU1ldGhvZGUoY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sLCBtZXRob2ROYW1lOiBzdHJpbmcpOiBNZXRob2RTeW1ib2wge1xuXHRcdC8qKiBAdHlwZSB7TWV0aG9kU3ltYm9sfG51bGx9ICovXG5cdFx0Y29uc3QgbWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wgfCBudWxsID0gdGhpcy5yZXNvbHZlSW5IaWVyYXJjaHkoXG5cdFx0XHRjbGFzc1N5bWJvbCxcblx0XHRcdGNsYXNzU3ltYm9sID0+IGNsYXNzU3ltYm9sLmluc3RhbmNlTWV0aG9kU3ltYm9scy5nZXQobWV0aG9kTmFtZSkgfHwgbnVsbFxuXHRcdCk7XG5cblx0XHRpZiAoIW1ldGhvZFN5bWJvbCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFVua25vd24gbWV0aG9kICR7Y2xhc3NTeW1ib2wubmFtZX0uJHttZXRob2ROYW1lfWAsIGNsYXNzU3ltYm9sLm5vZGUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtZXRob2RTeW1ib2w7XG5cdH1cblxuXHRwcml2YXRlIHJlc29sdmVJbkhpZXJhcmNoeShjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wsIHJlc29sdmVyOiAoY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sKSA9PiBhbnkpOiBhbnkge1xuXHRcdGxldCBjdXJyZW50OiBDbGFzc1N5bWJvbCB8IG51bGwgPSBjbGFzc1N5bWJvbDtcblxuXHRcdHdoaWxlIChjdXJyZW50KSB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSByZXNvbHZlcihjdXJyZW50KTtcblx0XHRcdGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCAmJiByZXN1bHQgIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFjdXJyZW50LnN1cGVyQ2xhc3MpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdGN1cnJlbnQgPSB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKGN1cnJlbnQuc3VwZXJDbGFzcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRwcml2YXRlIG5ld0FycmF5VHlwZU9mKGVsZW1lbnRUeXBlOiBUeXBlKTogQ2xhc3NSZWZUeXBlIHtcblx0XHRjb25zdCBjbGFzc05hbWU6IHN0cmluZyB8IG51bGwgPSBQcmltaXRpdmVDbGFzc1R5cGVzLmdldENsYXNzUmVmTmFtZShQcmltaXRpdmVDbGFzc1R5cGVzLkFSUkFZKTtcblxuXHRcdGlmIChjbGFzc05hbWUgPT09IG51bGwpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKCdJbnRlcm5hbCBlcnJvcjogQ2Fubm90IGZpbmQgY2xhc3MgbmFtZSBmb3IgYXJyYXkgdHlwZS4nKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IENsYXNzUmVmVHlwZSh0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKGNsYXNzTmFtZSksIFtlbGVtZW50VHlwZV0pO1xuXHR9XG5cblx0cHJpdmF0ZSB3cmFwVHlwZSh0eXBlOiBBU1RUeXBlTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdHJldHVybiB3cmFwVHlwZSh0eXBlLCB0aGlzLm9iamVjdFJlZ2lzdHJ5LCBzY29wZSk7XG5cdH1cblxuXHRwcml2YXRlIHBhcmFtZXRlck5vZGVUb1N5bWJvbChwYXJhbWV0ZXJOb2RlOiBBU1RQYXJhbWV0ZXJOb2RlLCBzY29wZTogVHlwZVNjb3BlID0gbmV3IFR5cGVTY29wZSgpKTogUGFyYW1ldGVyU3ltYm9sIHtcblx0XHRjb25zdCBwYXJhbWV0ZXJUeXBlID0gcGFyYW1ldGVyTm9kZS50eXBlQW5ub3RhdGlvblxuXHRcdFx0PyB0aGlzLndyYXBUeXBlKHBhcmFtZXRlck5vZGUudHlwZUFubm90YXRpb24sIHNjb3BlKVxuXHRcdFx0OiBUeXBlcy5NSVhFRDtcblxuXHRcdGxldCBkZWZhdWx0VHlwZSA9IG51bGw7XG5cdFx0aWYgKHBhcmFtZXRlck5vZGUuZGVmYXVsdFZhbHVlKSB7XG5cdFx0XHRkZWZhdWx0VHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKHBhcmFtZXRlck5vZGUuZGVmYXVsdFZhbHVlLCBuZXcgVHlwZVNjb3BlKCkpO1xuXG5cdFx0XHRpZiAoZGVmYXVsdFR5cGVcblx0XHRcdFx0JiYgIXBhcmFtZXRlclR5cGUuZXF1YWxzKFR5cGVzLk1JWEVEKVxuXHRcdFx0XHQmJiAhcGFyYW1ldGVyVHlwZS5lcXVhbHMoZGVmYXVsdFR5cGUpKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKFxuXHRcdFx0XHRcdGBEZWZhdWx0IHZhbHVlIGZvciBwYXJhbWV0ZXIgJyR7cGFyYW1ldGVyTm9kZS5uYW1lfScgZG9lcyBub3QgbWF0Y2ggdHlwZS5gLFxuXHRcdFx0XHRcdHBhcmFtZXRlck5vZGVcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IFBhcmFtZXRlclN5bWJvbChcblx0XHRcdHBhcmFtZXRlck5vZGUubmFtZSxcblx0XHRcdHBhcmFtZXRlclR5cGUsXG5cdFx0XHRkZWZhdWx0VHlwZSxcblx0XHRcdHBhcmFtZXRlck5vZGVcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSByZWdpc3RlckNsYXNzU3ltYm9sKGNsYXNzTm9kZTogQVNUQ2xhc3NOb2RlKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKGNsYXNzTm9kZS5uYW1lKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNsYXNzU2NvcGUgPSBuZXcgVHlwZVNjb3BlKCk7XG5cdFx0Y29uc3QgY2xhc3NTeW1ib2wgPSBuZXcgQ2xhc3NTeW1ib2woY2xhc3NOb2RlKTtcblxuXHRcdHRyeSB7XG5cdFx0XHRpZiAoY2xhc3NTeW1ib2wuc3VwZXJDbGFzcykge1xuXHRcdFx0XHRjbGFzc1N5bWJvbC5zdXBlckNsYXNzU3ltYm9sID0gdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChjbGFzc1N5bWJvbC5zdXBlckNsYXNzKTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0fVxuXG5cdFx0dGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5hZGRDbGFzc1N5bWJvbChjbGFzc1N5bWJvbCk7XG5cblx0XHRjbGFzc05vZGUudHlwZVBhcmFtZXRlcnMuZm9yRWFjaChuYW1lID0+IHtcblx0XHRcdGNsYXNzU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLnB1c2gobmV3IFR5cGVQYXJhbWV0ZXJTeW1ib2wobmFtZSkpO1xuXHRcdFx0Y2xhc3NTY29wZS5kZWZpbmVUeXBlQmluZGluZyhuYW1lLCBuZXcgVHlwZVZhcmlhYmxlKG5hbWUpKTtcblx0XHR9KTtcblxuXHRcdGZvciAoY29uc3QgdHlwZU5vZGUgb2YgY2xhc3NOb2RlLmltcGxlbWVudHNJbnRlcmZhY2VzKSB7XG5cdFx0XHRjb25zdCBpbnRlcmZhY2VUeXBlOiBUeXBlID0gdGhpcy53cmFwVHlwZSh0eXBlTm9kZSwgY2xhc3NTY29wZSk7XG5cdFx0XHRpZiAoaW50ZXJmYWNlVHlwZSBpbnN0YW5jZW9mIEludGVyZmFjZVJlZlR5cGUpIHtcblx0XHRcdFx0Y2xhc3NTeW1ib2wuaW1wbGVtZW50c0ludGVyZmFjZXMucHVzaChpbnRlcmZhY2VUeXBlKTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgRXhwZWN0ZWQgaW50ZXJmYWNlIHR5cGUsIGdvdCAke2ludGVyZmFjZVR5cGV9YCwgdHlwZU5vZGUpO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgbWVtYmVyTm9kZSBvZiBjbGFzc05vZGUuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChtZW1iZXJOb2RlLnR5cGUgPT09IEFTVE5vZGVUeXBlLkZJRUxEICYmIG1lbWJlck5vZGUgaW5zdGFuY2VvZiBBU1RGaWVsZE5vZGUpIHtcblx0XHRcdFx0Y29uc3QgdGFyZ2V0OiBNYXA8c3RyaW5nLCBGaWVsZFN5bWJvbD4gPSBtZW1iZXJOb2RlLm1vZGlmaWVycy5zdGF0aWNcblx0XHRcdFx0XHQ/IGNsYXNzU3ltYm9sLnN0YXRpY0ZpZWxkU3ltYm9sc1xuXHRcdFx0XHRcdDogY2xhc3NTeW1ib2wuaW5zdGFuY2VGaWVsZFN5bWJvbHM7XG5cblx0XHRcdFx0Y29uc3QgZmllbGRTeW1ib2wgPSBuZXcgRmllbGRTeW1ib2woXG5cdFx0XHRcdFx0bWVtYmVyTm9kZSxcblx0XHRcdFx0XHRtZW1iZXJOb2RlLmZpZWxkVHlwZVxuXHRcdFx0XHRcdFx0PyB0aGlzLndyYXBUeXBlKG1lbWJlck5vZGUuZmllbGRUeXBlLCBjbGFzc1Njb3BlKVxuXHRcdFx0XHRcdFx0OiBUeXBlcy5NSVhFRFxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdGZpZWxkU3ltYm9sLm93bmVyID0gY2xhc3NTeW1ib2w7XG5cblx0XHRcdFx0dGFyZ2V0LnNldChmaWVsZFN5bWJvbC5uYW1lLCBmaWVsZFN5bWJvbCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICgobWVtYmVyTm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5NRVRIT0QgfHwgbWVtYmVyTm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5DT05TVFJVQ1RPUilcblx0XHRcdFx0JiYgbWVtYmVyTm9kZSBpbnN0YW5jZW9mIEFTVE1ldGhvZE5vZGUpIHtcblxuXHRcdFx0XHRjb25zdCBtZXRob2RTY29wZSA9IG5ldyBUeXBlU2NvcGUoY2xhc3NTY29wZSk7XG5cdFx0XHRcdGNvbnN0IG1ldGhvZFN5bWJvbCA9IG5ldyBNZXRob2RTeW1ib2wobWVtYmVyTm9kZSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLm93bmVyID0gY2xhc3NTeW1ib2w7XG5cblx0XHRcdFx0bWVtYmVyTm9kZS50eXBlUGFyYW1ldGVycy5mb3JFYWNoKG5hbWUgPT4ge1xuXHRcdFx0XHRcdG1ldGhvZFN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5wdXNoKG5ldyBUeXBlUGFyYW1ldGVyU3ltYm9sKG5hbWUpKTtcblx0XHRcdFx0XHRtZXRob2RTY29wZS5kZWZpbmVUeXBlQmluZGluZyhuYW1lLCBuZXcgVHlwZVZhcmlhYmxlKG5hbWUpKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMgPSBtZW1iZXJOb2RlXG5cdFx0XHRcdFx0LnBhcmFtZXRlcnNcblx0XHRcdFx0XHQubWFwKHBhcmFtZXRlck5vZGUgPT4gdGhpcy5wYXJhbWV0ZXJOb2RlVG9TeW1ib2wocGFyYW1ldGVyTm9kZSwgbWV0aG9kU2NvcGUpKTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wucmV0dXJuVHlwZSA9IG1lbWJlck5vZGUucmV0dXJuVHlwZVxuXHRcdFx0XHRcdD8gdGhpcy53cmFwVHlwZShtZW1iZXJOb2RlLnJldHVyblR5cGUsIG1ldGhvZFNjb3BlKVxuXHRcdFx0XHRcdDogVHlwZXMuVk9JRDtcblxuXHRcdFx0XHRpZiAobWVtYmVyTm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5DT05TVFJVQ1RPUikge1xuXHRcdFx0XHRcdGNsYXNzU3ltYm9sLmNvbnN0cnVjdG9yTWV0aG9kU3ltYm9sID0gbWV0aG9kU3ltYm9sO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnN0IHRhcmdldCA9IG1ldGhvZFN5bWJvbC5pc1N0YXRpY1xuXHRcdFx0XHRcdFx0PyBjbGFzc1N5bWJvbC5zdGF0aWNNZXRob2RTeW1ib2xzXG5cdFx0XHRcdFx0XHQ6IGNsYXNzU3ltYm9sLmluc3RhbmNlTWV0aG9kU3ltYm9scztcblxuXHRcdFx0XHRcdHRhcmdldC5zZXQobWVtYmVyTm9kZS5uYW1lLCBtZXRob2RTeW1ib2wpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSByZWdpc3RlckludGVyZmFjZVN5bWJvbChpbnRlcmZhY2VOb2RlOiBBU1RJbnRlcmZhY2VOb2RlKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKGludGVyZmFjZU5vZGUubmFtZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBpbnRlcmZhY2VTY29wZSA9IG5ldyBUeXBlU2NvcGUoKTtcblx0XHRjb25zdCBpbnRlcmZhY2VTeW1ib2wgPSBuZXcgSW50ZXJmYWNlU3ltYm9sKGludGVyZmFjZU5vZGUpO1xuXG5cdFx0dGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5hZGRJbnRlcmZhY2VTeW1ib2woaW50ZXJmYWNlU3ltYm9sKTtcblxuXHRcdGludGVyZmFjZU5vZGUudHlwZVBhcmFtZXRlcnMuZm9yRWFjaChuYW1lID0+IHtcblx0XHRcdGludGVyZmFjZVN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5wdXNoKG5ldyBUeXBlUGFyYW1ldGVyU3ltYm9sKG5hbWUpKTtcblx0XHRcdGludGVyZmFjZVNjb3BlLmRlZmluZVR5cGVCaW5kaW5nKG5hbWUsIG5ldyBUeXBlVmFyaWFibGUobmFtZSkpO1xuXHRcdH0pO1xuXG5cdFx0Zm9yIChjb25zdCBpbnRlcmZhY2VOYW1lIG9mIGludGVyZmFjZU5vZGUuZXh0ZW5kc0ludGVyZmFjZXMpIHtcblx0XHRcdGNvbnN0IGludGVyZmFjZVN5bWJvbDogSW50ZXJmYWNlU3ltYm9sID0gdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRJbnRlcmFjZVN5bWJvbChpbnRlcmZhY2VOYW1lKTtcblxuXHRcdFx0aW50ZXJmYWNlU3ltYm9sLmV4dGVuZHNJbnRlcmZhY2VzLnB1c2goaW50ZXJmYWNlU3ltYm9sKTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IG1lbWJlck5vZGUgb2YgaW50ZXJmYWNlTm9kZS5jaGlsZHJlbikge1xuXHRcdFx0aWYgKG1lbWJlck5vZGUudHlwZSA9PT0gQVNUTm9kZVR5cGUuRklFTEQgJiYgbWVtYmVyTm9kZSBpbnN0YW5jZW9mIEFTVEZpZWxkTm9kZSkge1xuXHRcdFx0XHRjb25zdCBmaWVsZFN5bWJvbCA9IG5ldyBGaWVsZFN5bWJvbChcblx0XHRcdFx0XHRtZW1iZXJOb2RlLFxuXHRcdFx0XHRcdG1lbWJlck5vZGUuZmllbGRUeXBlXG5cdFx0XHRcdFx0XHQ/IHRoaXMud3JhcFR5cGUobWVtYmVyTm9kZS5maWVsZFR5cGUsIGludGVyZmFjZVNjb3BlKVxuXHRcdFx0XHRcdFx0OiBUeXBlcy5NSVhFRFxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdGZpZWxkU3ltYm9sLm93bmVyID0gaW50ZXJmYWNlU3ltYm9sO1xuXG5cdFx0XHRcdGludGVyZmFjZVN5bWJvbC5zdGF0aWNGaWVsZFN5bWJvbHMuc2V0KGZpZWxkU3ltYm9sLm5hbWUsIGZpZWxkU3ltYm9sKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKChtZW1iZXJOb2RlLnR5cGUgPT09IEFTVE5vZGVUeXBlLk1FVEhPRCkgJiYgbWVtYmVyTm9kZSBpbnN0YW5jZW9mIEFTVE1ldGhvZE5vZGUpIHtcblxuXHRcdFx0XHRjb25zdCBtZXRob2RTY29wZSA9IG5ldyBUeXBlU2NvcGUoaW50ZXJmYWNlU2NvcGUpO1xuXHRcdFx0XHRjb25zdCBtZXRob2RTeW1ib2wgPSBuZXcgTWV0aG9kU3ltYm9sKG1lbWJlck5vZGUpO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC5vd25lciA9IGludGVyZmFjZVN5bWJvbDtcblxuXHRcdFx0XHRtZW1iZXJOb2RlLnR5cGVQYXJhbWV0ZXJzLmZvckVhY2goKG5hbWU6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdG1ldGhvZFN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5wdXNoKG5ldyBUeXBlUGFyYW1ldGVyU3ltYm9sKG5hbWUpKTtcblx0XHRcdFx0XHRtZXRob2RTY29wZS5kZWZpbmVUeXBlQmluZGluZyhuYW1lLCBuZXcgVHlwZVZhcmlhYmxlKG5hbWUpKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMgPSBtZW1iZXJOb2RlXG5cdFx0XHRcdFx0LnBhcmFtZXRlcnNcblx0XHRcdFx0XHQubWFwKChwYXJhbWV0ZXJOb2RlOiBBU1RQYXJhbWV0ZXJOb2RlKTogUGFyYW1ldGVyU3ltYm9sID0+IHRoaXMucGFyYW1ldGVyTm9kZVRvU3ltYm9sKFxuXHRcdFx0XHRcdFx0cGFyYW1ldGVyTm9kZSxcblx0XHRcdFx0XHRcdG1ldGhvZFNjb3BlXG5cdFx0XHRcdFx0KSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnJldHVyblR5cGUgPSBtZW1iZXJOb2RlLnJldHVyblR5cGVcblx0XHRcdFx0XHQ/IHRoaXMud3JhcFR5cGUobWVtYmVyTm9kZS5yZXR1cm5UeXBlLCBtZXRob2RTY29wZSlcblx0XHRcdFx0XHQ6IFR5cGVzLlZPSUQ7XG5cblx0XHRcdFx0aW50ZXJmYWNlU3ltYm9sLmluc3RhbmNlTWV0aG9kU3ltYm9scy5zZXQobWVtYmVyTm9kZS5uYW1lLCBtZXRob2RTeW1ib2wpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgdHlwZUVycm9yKG1lc3NhZ2U6IHN0cmluZywgbm9kZTogQVNUTm9kZSB8IG51bGwgPSBudWxsKTogbmV2ZXIge1xuXHRcdHRocm93VHlwZUVycm9yKG1lc3NhZ2UsIG5vZGU/LnNwYW4pO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuaW1wb3J0IHtBU1RJbXBvcnROb2RlLCBBU1ROb2RlLCBBU1ROb2RlVHlwZX0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuLi9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuaW1wb3J0IHtQYXJzZXJ9IGZyb20gXCIuLi9wYXJzZXIvcGFyc2VyXCI7XG5pbXBvcnQge0Vudmlyb25tZW50fSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHR5cGUge0Fic3RyYWN0RmlsZUxvYWRlcn0gZnJvbSBcIi4uL2xvYWRlcnNcIjtcbmltcG9ydCB7dGhyb3dSdW50aW1lRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcblxuZXhwb3J0IGNsYXNzIERlcGVuZGVuY3kge1xuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkgPSBuZXcgT2JqZWN0UmVnaXN0cnkoKTtcblx0bmFtZXM6IHN0cmluZ1tdO1xuXHR1cmw6IHN0cmluZztcblx0YXN0OiBBU1ROb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IobmFtZXM6IHN0cmluZ1tdLCB1cmw6IHN0cmluZyA9ICcuJykge1xuXHRcdHRoaXMubmFtZXMgPSBuYW1lcztcblx0XHR0aGlzLnVybCA9IHVybDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgRGVwZW5kZW5jeUxvYWRlciB7XG5cdGVudmlyb25tZW50OiBFbnZpcm9ubWVudDtcblx0b2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5O1xuXHRmaWxlTG9hZGVyOiBBYnN0cmFjdEZpbGVMb2FkZXI7XG5cblx0Y29uc3RydWN0b3IoZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGZpbGVMb2FkZXI6IEFic3RyYWN0RmlsZUxvYWRlcikge1xuXHRcdHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5ID0gb2JqZWN0UmVnaXN0cnk7XG5cdFx0dGhpcy5maWxlTG9hZGVyID0gZmlsZUxvYWRlcjtcblx0fVxuXG5cdGFzeW5jIHBhcnNlRGVwZW5kZW5jeShkZXBlbmRlbmN5OiBEZXBlbmRlbmN5KTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIGF3YWl0IHRoaXMucGFyc2VGaWxlKGRlcGVuZGVuY3kudXJsKVxuXHRcdCAgICAgICAgICAgICAgICAgLnRoZW4oYXN0ID0+IGRlcGVuZGVuY3kuYXN0ID0gYXN0KVxuXHRcdCAgICAgICAgICAgICAgICAgLnRoZW4oYXN0ID0+IGRlcGVuZGVuY3kub2JqZWN0UmVnaXN0cnkuY29sbGVjdEFsbChhc3QpKTtcblx0fVxuXG5cdGFzeW5jIGNvbGxlY3REZXBlbmRlbmNpZXMoZGVwZW5kZW5jeTogRGVwZW5kZW5jeSwgZGVwZW5kZW5jaWVzOiBNYXA8c3RyaW5nLCBEZXBlbmRlbmN5Pik6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiBhd2FpdCB0aGlzLmNvbGxlY3RQcm9ncmFtRGVwZW5kZW5jaWVzKGRlcGVuZGVuY3kuYXN0KVxuXHRcdCAgICAgICAgICAgICAgICAgLnRoZW4oY2xhc3NEZXBlbmRlbmNpZXMgPT4ge1xuXHRcdFx0ICAgICAgICAgICAgICAgICBjbGFzc0RlcGVuZGVuY2llcy5mb3JFYWNoKGNsYXNzRGVwZW5kZW5jeSA9PiB7XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgaWYgKGRlcGVuZGVuY2llcy5oYXMoY2xhc3NEZXBlbmRlbmN5LnVybCkpIHtcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgIHJldHVybjtcblx0XHRcdFx0ICAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgZGVwZW5kZW5jaWVzLnNldChjbGFzc0RlcGVuZGVuY3kudXJsLCBjbGFzc0RlcGVuZGVuY3kpO1xuXHRcdFx0ICAgICAgICAgICAgICAgICB9KTtcblx0XHQgICAgICAgICAgICAgICAgIH0pO1xuXHR9XG5cblx0YXN5bmMgY29sbGVjdFByb2dyYW1EZXBlbmRlbmNpZXMoYXN0OiBBU1ROb2RlIHwgbnVsbCk6IFByb21pc2U8TWFwPHN0cmluZywgRGVwZW5kZW5jeT4+IHtcblx0XHRpZiAoYXN0ID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gbmV3IE1hcCgpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGRlcGVuZGVuY2llczogTWFwPHN0cmluZywgRGVwZW5kZW5jeT4gPSB0aGlzLmNvbGxlY3RDbGFzc0RlcGVuZGVuY2llcyhhc3QpO1xuXHRcdGZvciAoY29uc3QgZGVwZW5kZW5jeSBvZiBkZXBlbmRlbmNpZXMudmFsdWVzKCkpIHtcblx0XHRcdGlmIChkZXBlbmRlbmN5LnVybCA9PT0gJy4nKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0YXdhaXQgdGhpcy5wYXJzZURlcGVuZGVuY3koZGVwZW5kZW5jeSk7XG5cdFx0XHRhd2FpdCB0aGlzLmNvbGxlY3REZXBlbmRlbmNpZXMoZGVwZW5kZW5jeSwgZGVwZW5kZW5jaWVzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGVwZW5kZW5jaWVzO1xuXHR9XG5cblx0YXN5bmMgY29sbGVjdERlZmF1bHREZXBlbmRlbmNpZXMoKTogUHJvbWlzZTxNYXA8c3RyaW5nLCBEZXBlbmRlbmN5Pj4ge1xuXHRcdGNvbnN0IGRlcGVuZGVuY2llczogTWFwPHN0cmluZywgRGVwZW5kZW5jeT4gPSB0aGlzLmRlZmF1bHREZXBlbmRlbmNpZXMoKTtcblxuXHRcdGZvciAoY29uc3QgZGVwZW5kZW5jeSBvZiBkZXBlbmRlbmNpZXMudmFsdWVzKCkpIHtcblx0XHRcdGF3YWl0IHRoaXMucGFyc2VEZXBlbmRlbmN5KGRlcGVuZGVuY3kpO1xuXHRcdFx0YXdhaXQgdGhpcy5jb2xsZWN0RGVwZW5kZW5jaWVzKGRlcGVuZGVuY3ksIGRlcGVuZGVuY2llcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRlcGVuZGVuY2llcztcblx0fVxuXG5cdGRlZmF1bHREZXBlbmRlbmNpZXMoKTogTWFwPHN0cmluZywgRGVwZW5kZW5jeT4ge1xuXHRcdGNvbnN0IGRlcGVuZGVuY2llczogRGVwZW5kZW5jeVtdID0gW1xuXHRcdFx0bmV3IERlcGVuZGVuY3koWydJdGVyYXRvcicsICdJdGVyYWJsZSddLCAnL2xpYnJhcnkvY29udHJhY3RzLmx5cmEnKVxuXHRcdF07XG5cblx0XHRjb25zdCBkZWZhdWx0RGVwZW5kZW5jaWVzID0gbmV3IE1hcCgpO1xuXHRcdGZvciAoY29uc3QgZGVwZW5kZW5jeSBvZiBkZXBlbmRlbmNpZXMpIHtcblx0XHRcdGRlZmF1bHREZXBlbmRlbmNpZXMuc2V0KGRlcGVuZGVuY3kudXJsLCBkZXBlbmRlbmN5KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGVmYXVsdERlcGVuZGVuY2llcztcblx0fVxuXG5cdGNvbGxlY3RDbGFzc0RlcGVuZGVuY2llcyhhc3Q6IEFTVE5vZGUpOiBNYXA8c3RyaW5nLCBEZXBlbmRlbmN5PiB7XG5cdFx0Y29uc3QgY2xhc3NEZXBlbmRlbmNpZXMgPSBuZXcgTWFwKCk7XG5cblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgYXN0LmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5JTVBPUlQpIHtcblx0XHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RJbXBvcnROb2RlKSB7XG5cdFx0XHRcdFx0aWYgKG5vZGUuZnJvbSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0Y2xhc3NEZXBlbmRlbmNpZXMuc2V0KG5vZGUubmFtZXNbMF0sIG5ldyBEZXBlbmRlbmN5KG5vZGUubmFtZXMpKTtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoY2xhc3NEZXBlbmRlbmNpZXMuaGFzKG5vZGUuZnJvbSkpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjbGFzc0RlcGVuZGVuY2llcy5zZXQobm9kZS5mcm9tLCBuZXcgRGVwZW5kZW5jeShub2RlLm5hbWVzLCBub2RlLmZyb20pKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBpbXBvcnQgbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZT8uc3Bhbik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3NEZXBlbmRlbmNpZXM7XG5cdH1cblxuXHRhc3luYyBwYXJzZUZpbGUodXJsOiBzdHJpbmcpOiBQcm9taXNlPEFTVE5vZGU+IHtcblx0XHRyZXR1cm4gdGhpcy5maWxlTG9hZGVyXG5cdFx0ICAgICAgICAgICAubG9hZCh1cmwpXG5cdFx0ICAgICAgICAgICAudGhlbihjb2RlID0+IHRoaXMucGFyc2VyU291cmNlKG5ldyBTb3VyY2UoY29kZSwgdXJsKSkpO1xuXHR9XG5cblx0cGFyc2VyU291cmNlKHNvdXJjZTogU291cmNlKTogQVNUTm9kZSB7XG5cdFx0cmV0dXJuIG5ldyBQYXJzZXIoc291cmNlKS5wYXJzZSgpO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7RGVwZW5kZW5jeSwgRGVwZW5kZW5jeUxvYWRlcn0gZnJvbSBcIi4vZGVwZW5kZW5jaWVzXCI7XG5pbXBvcnQge0FTVEltcG9ydE5vZGUsIEFTVE5vZGV9IGZyb20gXCIuLi9hc3RcIjtcbmltcG9ydCB7TmF0aXZlQ2xhc3Nlc30gZnJvbSBcIi4uLy4uL2xpYnJhcnkvbmF0aXZlX2NsYXNzZXNcIjtcbmltcG9ydCB7Q2xhc3NEZWZpbml0aW9uLCBFbnZpcm9ubWVudCwgSW50ZXJmYWNlRGVmaW5pdGlvbn0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuaW1wb3J0IHR5cGUge0Fic3RyYWN0RmlsZUxvYWRlcn0gZnJvbSBcIi4uL2xvYWRlcnNcIjtcbmltcG9ydCB0eXBlIHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uLy4uL2xpYnJhcnkvbmF0aXZlX2NsYXNzXCI7XG5pbXBvcnQge3Rocm93RGVwZW5kZW5jeUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQgdHlwZSB7U291cmNlU3Bhbn0gZnJvbSBcIi4uL3BhcnNlci9wYXJzZXJfc291cmNlLnRzXCI7XG5cbmNvbnN0IG5hdGl2ZUNsYXNzZXMgPSBuZXcgTmF0aXZlQ2xhc3NlcygpO1xuXG5leHBvcnQgY2xhc3MgTGlua2VyIHtcblx0cHJpdmF0ZSBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQ7XG5cdHByaXZhdGUgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5O1xuXHRwcml2YXRlIGRlcGVuZGVuY3lMb2FkZXI6IERlcGVuZGVuY3lMb2FkZXI7XG5cblx0Y29uc3RydWN0b3IoZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGZpbGVMb2FkZXI6IEFic3RyYWN0RmlsZUxvYWRlcikge1xuXHRcdHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5ID0gb2JqZWN0UmVnaXN0cnk7XG5cdFx0dGhpcy5kZXBlbmRlbmN5TG9hZGVyID0gbmV3IERlcGVuZGVuY3lMb2FkZXIoZW52aXJvbm1lbnQsIG9iamVjdFJlZ2lzdHJ5LCBmaWxlTG9hZGVyKTtcblx0fVxuXG5cdHB1YmxpYyBhc3luYyBsaW5rU291cmNlcyhhc3Q6IEFTVE5vZGUpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gYXdhaXQgdGhpcy5kZXBlbmRlbmN5TG9hZGVyLmNvbGxlY3REZWZhdWx0RGVwZW5kZW5jaWVzKClcblx0XHQgICAgICAgICAgICAgICAgIC50aGVuKChkZXBlbmRlbmNpZXM6IE1hcDxzdHJpbmcsIERlcGVuZGVuY3k+KTogdm9pZCA9PiB7XG5cdFx0XHQgICAgICAgICAgICAgICAgIHRoaXMubG9hZERlcGVuZGVuY2llcyhkZXBlbmRlbmNpZXMpO1xuXHRcdCAgICAgICAgICAgICAgICAgfSlcblx0XHQgICAgICAgICAgICAgICAgIC50aGVuKGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdCAgICAgICAgICAgICAgICAgY29uc3QgZGVwZW5kZW5jaWVzOiBNYXA8c3RyaW5nLCBEZXBlbmRlbmN5PiA9IGF3YWl0IHRoaXMuZGVwZW5kZW5jeUxvYWRlclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb2xsZWN0UHJvZ3JhbURlcGVuZGVuY2llcyhhc3QpO1xuXHRcdFx0ICAgICAgICAgICAgICAgICB0aGlzLmxvYWREZXBlbmRlbmNpZXMoZGVwZW5kZW5jaWVzKTtcblx0XHRcdCAgICAgICAgICAgICAgICAgdGhpcy5sb2FkTmF0aXZlQ2xhc3Nlc0Zyb21BU1QoYXN0KTtcblx0XHQgICAgICAgICAgICAgICAgIH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBsb2FkRGVwZW5kZW5jaWVzKGRlcGVuZGVuY2llczogTWFwPHN0cmluZywgRGVwZW5kZW5jeT4pIHtcblx0XHRmb3IgKGNvbnN0IGRlcGVuZGVuY3kgb2YgZGVwZW5kZW5jaWVzLnZhbHVlcygpKSB7XG5cblx0XHRcdGlmIChkZXBlbmRlbmN5LnVybCA9PT0gJy4nKSB7XG5cdFx0XHRcdHRoaXMubG9hZE5hdGl2ZUNsYXNzRnJvbURlcGVuZGVuY3koZGVwZW5kZW5jeSk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBvYmplY3REZWZpbml0aW9ucyA9IGRlcGVuZGVuY3kub2JqZWN0UmVnaXN0cnlcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mZXRjaEFsbE9iamVjdERlZmluaXRpb25zKClcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52YWx1ZXMoKTtcblx0XHRcdGZvciAobGV0IG9iamVjdERlZiBvZiBvYmplY3REZWZpbml0aW9ucykge1xuXHRcdFx0XHRpZiAob2JqZWN0RGVmIGluc3RhbmNlb2YgSW50ZXJmYWNlRGVmaW5pdGlvbikge1xuXHRcdFx0XHRcdHRoaXMub2JqZWN0UmVnaXN0cnkuaW50ZXJmYWNlcy5zZXQob2JqZWN0RGVmLm5hbWUsIG9iamVjdERlZik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5vYmplY3RSZWdpc3RyeS5jbGFzc2VzLnNldChvYmplY3REZWYubmFtZSwgb2JqZWN0RGVmKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmVudmlyb25tZW50LmRlZmluZShvYmplY3REZWYubmFtZSwgb2JqZWN0RGVmKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGxvYWROYXRpdmVDbGFzcyhjbGFzc05hbWU6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsKTogdm9pZCB7XG5cdFx0Y29uc3QgbmF0aXZlQ2xhc3M6IE5hdGl2ZUNsYXNzIHwgbnVsbCA9IG5hdGl2ZUNsYXNzZXMucmVnaXN0cnkuZ2V0KGNsYXNzTmFtZSkgfHwgbnVsbDtcblx0XHRpZiAoIW5hdGl2ZUNsYXNzKSB7XG5cdFx0XHR0aHJvd0RlcGVuZGVuY3lFcnJvcihgVW5rbm93biBuYXRpdmUgY2xhc3MgJHtjbGFzc05hbWV9YCwgc3Bhbik7XG5cdFx0fVxuXHRcdGNvbnN0IGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24gPSBuYXRpdmVDbGFzcy5nZXRDbGFzc0RlZmluaXRpb24oKTtcblx0XHRpZiAodGhpcy5vYmplY3RSZWdpc3RyeS5jbGFzc2VzLmhhcyhjbGFzc05hbWUpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5zZXQoY2xhc3NOYW1lLCBjbGFzc0RlZik7XG5cdFx0dGhpcy5lbnZpcm9ubWVudC5kZWZpbmUoY2xhc3NOYW1lLCBjbGFzc0RlZik7XG5cdH1cblxuXHRwcml2YXRlIGxvYWROYXRpdmVDbGFzc2VzRnJvbUFTVChhc3Q6IEFTVE5vZGUpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgYXN0LmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEltcG9ydE5vZGUpIHtcblx0XHRcdFx0aWYgKG5vZGUuZnJvbSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdGNvbnN0IGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gbm9kZS5uYW1lc1swXTtcblx0XHRcdFx0XHRpZiAoIWNsYXNzTmFtZSkge1xuXHRcdFx0XHRcdFx0dGhyb3dEZXBlbmRlbmN5RXJyb3IoYEludmFsaWQgaW1wb3J0IG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGU/LnNwYW4pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLmxvYWROYXRpdmVDbGFzcyhjbGFzc05hbWUsIG5vZGUuc3Bhbik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGxvYWROYXRpdmVDbGFzc0Zyb21EZXBlbmRlbmN5KGRlcGVuZGVuY3k6IERlcGVuZGVuY3kpIHtcblx0XHRjb25zdCBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCA9IGRlcGVuZGVuY3kubmFtZXNbMF07XG5cdFx0aWYgKCFjbGFzc05hbWUpIHtcblx0XHRcdHRocm93RGVwZW5kZW5jeUVycm9yKGBJbnZhbGlkIGltcG9ydCBmcm9tIGRlcGVuZGVuY3kuYCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5sb2FkTmF0aXZlQ2xhc3MoY2xhc3NOYW1lKTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0FTVEFubm90YXRpb25Ob2RlLCBBU1RDbGFzc05vZGUsIEFTVE1ldGhvZE5vZGUsIEFTVE5vZGV9IGZyb20gXCIuLi9hc3RcIjtcbmltcG9ydCB7Y2FsbEluc3RhbmNlTWV0aG9kLCBldmFsQW5ub3RhdGlvblByb3BlcnRpZXN9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9ydW50aW1lXCI7XG5pbXBvcnQge0NsYXNzRGVmaW5pdGlvbiwgdHlwZSBFbnZpcm9ubWVudCwgSW5zdGFuY2V9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQgdHlwZSB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuaW1wb3J0IHR5cGUge0V2ZW50UGlwZWxpbmV9IGZyb20gXCIuLi9ldmVudC9waXBlbGluZVwiO1xuXG5leHBvcnQgY2xhc3MgVGVzdFN1aXRlcyB7XG5cdHByaXZhdGUgcmVhZG9ubHkgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50O1xuXHRwcml2YXRlIHJlYWRvbmx5IG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeTtcblx0cHJpdmF0ZSByZWFkb25seSBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lO1xuXG5cdGNvbnN0cnVjdG9yKGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKSB7XG5cdFx0dGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkgPSBvYmplY3RSZWdpc3RyeTtcblx0XHR0aGlzLmV2ZW50UGlwZWxpbmUgPSBldmVudFBpcGVsaW5lO1xuXHR9XG5cblx0cnVuKGFzdDogQVNUTm9kZSk6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUQ2xhc3NOb2RlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGDwn6eqIFJ1bm5pbmcgVGVzdCBDYXNlcyBmb3IgJHtub2RlLm5hbWV9IC4uLmApO1xuXHRcdFx0XHR0aGlzLnJ1blRlc3RDYXNlcyhub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJ1blRlc3RDYXNlcyhjbGFzc05vZGU6IEFTVENsYXNzTm9kZSk6IHZvaWQge1xuXHRcdGZvciAoY29uc3QgbWVtYmVyIG9mIGNsYXNzTm9kZS5jaGlsZHJlbikge1xuXHRcdFx0aWYgKG1lbWJlciBpbnN0YW5jZW9mIEFTVE1ldGhvZE5vZGUpIHtcblx0XHRcdFx0Y29uc3QgYW5ub3RhdGlvbjogQVNUQW5ub3RhdGlvbk5vZGUgfCB1bmRlZmluZWQgPSBtZW1iZXIuYW5ub3RhdGlvbnNcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmZpbmQoYW5ub3RhdGlvbiA9PiBhbm5vdGF0aW9uLm5hbWUgPT09ICd0ZXN0Jyk7XG5cdFx0XHRcdGlmICghYW5ub3RhdGlvbikge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMucnVuVGVzdENhc2UoY2xhc3NOb2RlLCBtZW1iZXIsIGFubm90YXRpb24pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcnVuVGVzdENhc2UoY2xhc3NOb2RlOiBBU1RDbGFzc05vZGUsIG1ldGhvZE5vZGU6IEFTVE1ldGhvZE5vZGUsIGFubm90YXRpb246IEFTVEFubm90YXRpb25Ob2RlKTogdm9pZCB7XG5cdFx0Y29uc3QgaW5zdGFuY2U6IEluc3RhbmNlID0gQ2xhc3NEZWZpbml0aW9uLmZyb21BU1QoY2xhc3NOb2RlKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25zdHJ1Y3ROZXdJbnN0YW5jZVdpdGhvdXRBcmd1bWVudHMoXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbnZpcm9ubWVudCxcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRQaXBlbGluZVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cblx0XHRjb25zdCBwcm9wZXJ0aWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSBldmFsQW5ub3RhdGlvblByb3BlcnRpZXMoYW5ub3RhdGlvbik7XG5cdFx0Y29uc3QgdGl0bGU6IHN0cmluZyA9IHByb3BlcnRpZXMudGl0bGUgPz8gYCR7Y2xhc3NOb2RlLm5hbWV9LiR7bWV0aG9kTm9kZS5uYW1lfWA7XG5cblx0XHRsZXQgZXJyb3JNZXNzYWdlID0gbnVsbDtcblxuXHRcdHRyeSB7XG5cdFx0XHRjYWxsSW5zdGFuY2VNZXRob2QoaW5zdGFuY2UsIG1ldGhvZE5vZGUsIFtdLCB0aGlzLm9iamVjdFJlZ2lzdHJ5LCB0aGlzLmVudmlyb25tZW50LCB0aGlzLmV2ZW50UGlwZWxpbmUpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRlcnJvck1lc3NhZ2UgPSBlcnJvcjtcblx0XHR9XG5cblx0XHRpZiAoZXJyb3JNZXNzYWdlKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGAg4p2MICR7dGl0bGV9LCAke2Vycm9yTWVzc2FnZX1gKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coYCDinIUgJHt0aXRsZX1gKTtcblx0XHR9XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtBU1ROb2RlfSBmcm9tICcuLi9hc3QudHMnO1xuaW1wb3J0IHtFbnZpcm9ubWVudH0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtldmFsTm9kZSwgcmVnaXN0ZXJOYXRpdmVDbGFzc2VzLCByZWdpc3Rlck5hdGl2ZUZ1bmN0aW9uc30gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfcnVudGltZVwiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB0eXBlIHtFdmVudFBpcGVsaW5lfSBmcm9tIFwiLi4vZXZlbnQvcGlwZWxpbmVcIjtcblxuZXhwb3J0IGNsYXNzIEludGVycHJldGVyIHtcblx0ZW52aXJvbm1lbnQ6IEVudmlyb25tZW50O1xuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cdGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmU7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0ZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LFxuXHRcdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSxcblx0XHRldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lXG5cdCkge1xuXHRcdHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5ID0gb2JqZWN0UmVnaXN0cnk7XG5cdFx0dGhpcy5ldmVudFBpcGVsaW5lID0gZXZlbnRQaXBlbGluZTtcblxuXHRcdHJlZ2lzdGVyTmF0aXZlQ2xhc3NlcyhvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpO1xuXHRcdHJlZ2lzdGVyTmF0aXZlRnVuY3Rpb25zKGVudmlyb25tZW50KTtcblx0fVxuXG5cdHJ1bihhc3Q6IEFTVE5vZGUpIHtcblx0XHRldmFsTm9kZShhc3QsIHRoaXMub2JqZWN0UmVnaXN0cnksIHRoaXMuZW52aXJvbm1lbnQsIHRoaXMuZXZlbnRQaXBlbGluZSk7XG5cdH1cbn1cbiIsCiAgICAiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0RmlsZUxvYWRlciB7XG5cdGFic3RyYWN0IGxvYWQodXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz47XG59XG5cbmV4cG9ydCBjbGFzcyBGZXRjaEZpbGVMb2FkZXIgZXh0ZW5kcyBBYnN0cmFjdEZpbGVMb2FkZXIge1xuXHRvdmVycmlkZSBsb2FkKHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gZmV0Y2godXJsKVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxuXHR9XG59XG4iLAogICAgImV4cG9ydCB0eXBlIEV2ZW50SGFuZGxlcjxUID0gYW55PiA9IChwYXlsb2FkOiBUKSA9PiB2b2lkO1xuXG5leHBvcnQgY2xhc3MgRXZlbnRQaXBlbGluZSB7XG5cdHByaXZhdGUgbGlzdGVuZXJzOiBNYXA8c3RyaW5nLCBTZXQ8RXZlbnRIYW5kbGVyPj4gPSBuZXcgTWFwPHN0cmluZywgU2V0PEV2ZW50SGFuZGxlcj4+KCk7XG5cblx0b248VCA9IGFueT4oZXZlbnQ6IHN0cmluZywgaGFuZGxlcjogRXZlbnRIYW5kbGVyPFQ+KTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLmxpc3RlbmVycy5oYXMoZXZlbnQpKSB7XG5cdFx0XHR0aGlzLmxpc3RlbmVycy5zZXQoZXZlbnQsIG5ldyBTZXQoKSk7XG5cdFx0fVxuXHRcdHRoaXMubGlzdGVuZXJzLmdldChldmVudCkhLmFkZChoYW5kbGVyKTtcblx0fVxuXG5cdG9mZjxUID0gYW55PihldmVudDogc3RyaW5nLCBoYW5kbGVyOiBFdmVudEhhbmRsZXI8VD4pOiB2b2lkIHtcblx0XHR0aGlzLmxpc3RlbmVycy5nZXQoZXZlbnQpXG5cdFx0ICAgID8uZGVsZXRlKGhhbmRsZXIpO1xuXHR9XG5cblx0ZW1pdDxUID0gYW55PihldmVudDogc3RyaW5nLCBwYXlsb2FkOiBUKTogdm9pZCB7XG5cdFx0dGhpcy5saXN0ZW5lcnMuZ2V0KGV2ZW50KVxuXHRcdCAgICA/LmZvckVhY2goKGhhbmRsZXI6IEV2ZW50SGFuZGxlcik6IHZvaWQgPT4gaGFuZGxlcihwYXlsb2FkKSk7XG5cdH1cbn1cbiIsCiAgICAiZXhwb3J0IHR5cGUgQnl0ZWNvZGUgPSBudW1iZXIgfCBzdHJpbmc7XG5leHBvcnQgY29uc3QgT3Bjb2RlcyA9IHtcblx0TE9BRF9DT05TVDogMHgwMSxcblx0TE9BRF9WQVI6IDB4MDIsXG5cdFNUT1JFX1ZBUjogMHgwMyxcblx0TE9BRF9USElTOiAweDA0LFxuXHRBREQ6IDB4MTAsXG5cdFNVQjogMHgxMSxcblx0TVVMOiAweDEyLFxuXHRESVY6IDB4MTMsXG5cdE1PRDogMHgxNCxcblx0RVE6IDB4MTksXG5cdE5FOiAweDIwLFxuXHROT1Q6IDB4MjEsXG5cdExUOiAweDIyLFxuXHRMRTogMHgyMyxcblx0R1Q6IDB4MjQsXG5cdEdFOiAweDI1LFxuXHRBTkQ6IDB4MzAsXG5cdE9SOiAweDMxLFxuXHRORUc6IDB4NDAsXG5cdFBPUzogMHg0MSxcblx0VU5BUllfTk9UOiAweDQyLFxuXHRHRVRfRklFTEQ6IDB4NTAsXG5cdFNFVF9GSUVMRDogMHg1MSxcblx0Q0FMTDogMHg2MCxcblx0Q0xBU1NfREVGOiAweDcwLFxuXHRGSUVMRF9ERUY6IDB4NzEsXG5cdEVORF9DTEFTUzogMHg3Mixcblx0TUVUSE9EX0RFRjogMHg3Myxcblx0RU5EX01FVEhPRDogMHg3NCxcblx0TkVXOiAweDgwLFxuXHRSRVRVUk46IDB4OTBcbn07XG5cbmV4cG9ydCBjb25zdCBCaW5hcnlPcGNvZGVNYXA6IFJlY29yZDxzdHJpbmcsIEJ5dGVjb2RlPiA9IHtcblx0JysnOiBPcGNvZGVzLkFERCxcblx0Jy0nOiBPcGNvZGVzLlNVQixcblx0JyonOiBPcGNvZGVzLk1VTCxcblx0Jy8nOiBPcGNvZGVzLkRJVixcblx0JyUnOiBPcGNvZGVzLk1PRCxcblx0Jz09JzogT3Bjb2Rlcy5FUSxcblx0JyE9JzogT3Bjb2Rlcy5ORSxcblx0JzwnOiBPcGNvZGVzLkxULFxuXHQnPD0nOiBPcGNvZGVzLkxFLFxuXHQnPic6IE9wY29kZXMuR1QsXG5cdCc+PSc6IE9wY29kZXMuR0UsXG5cdCcmJic6IE9wY29kZXMuQU5ELFxuXHQnfHwnOiBPcGNvZGVzLk9SXG59O1xuXG5leHBvcnQgY29uc3QgVW5hcnlPcGNvZGVNYXA6IFJlY29yZDxzdHJpbmcsIEJ5dGVjb2RlPiA9IHtcblx0JysnOiBPcGNvZGVzLlBPUyxcblx0Jy0nOiBPcGNvZGVzLk5FRyxcblx0JyEnOiBPcGNvZGVzLlVOQVJZX05PVFxufTtcbiIsCiAgICAiLy8gY29tcGlsZXIudHNcbmltcG9ydCB7XG5cdEFTVEFzc2lnbm1lbnROb2RlLFxuXHRBU1RCaW5hcnlOb2RlLFxuXHRBU1RDYWxsTm9kZSxcblx0QVNUQ2xhc3NOb2RlLFxuXHRBU1RFeHByZXNzaW9uTm9kZSxcblx0QVNURmllbGROb2RlLFxuXHRBU1RNZW1iZXJOb2RlLFxuXHRBU1RNZXRob2ROb2RlLFxuXHRBU1ROZXdOb2RlLFxuXHR0eXBlIEFTVE5vZGUsXG5cdEFTVE5vZGVUeXBlLFxuXHRBU1RSZXR1cm5Ob2RlLFxuXHRBU1RVbmFyeU5vZGUsXG5cdEFTVFZhcmlhYmxlTm9kZVxufSBmcm9tIFwiLi4vYXN0LnRzXCI7XG5pbXBvcnQge0JpbmFyeU9wY29kZU1hcCwgdHlwZSBCeXRlY29kZSwgT3Bjb2RlcywgVW5hcnlPcGNvZGVNYXB9IGZyb20gXCIuL29wY29kZXNcIjtcbmltcG9ydCB7dGhyb3dDb21waWxlRXJyb3J9IGZyb20gXCIuLi9lcnJvcnMudHNcIjtcblxuZXhwb3J0IGNsYXNzIENvbXBpbGVyIHtcblx0cHJpdmF0ZSByZWFkb25seSBieXRlY29kZTogQnl0ZWNvZGVbXSA9IFtdO1xuXG5cdGNvbXBpbGUobm9kZTogQVNUTm9kZSk6IEJ5dGVjb2RlW10ge1xuXHRcdHN3aXRjaCAobm9kZS50eXBlKSB7XG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLlBST0dSQU06XG5cdFx0XHRcdGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuXHRcdFx0XHRcdHRoaXMuY29tcGlsZShjaGlsZCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuSU1QT1JUOlxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5DTEFTUzpcblx0XHRcdFx0dGhpcy5jb21waWxlQ2xhc3Mobm9kZSBhcyBBU1RDbGFzc05vZGUpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5GSUVMRDpcblx0XHRcdFx0dGhpcy5jb21waWxlRmllbGQobm9kZSBhcyBBU1RGaWVsZE5vZGUpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5NRVRIT0Q6XG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkNPTlNUUlVDVE9SOlxuXHRcdFx0XHR0aGlzLmNvbXBpbGVNZXRob2Qobm9kZSBhcyBBU1RNZXRob2ROb2RlKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuVEhJUzpcblx0XHRcdFx0dGhpcy5lbWl0KE9wY29kZXMuTE9BRF9USElTKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuVkFSSUFCTEU6XG5cdFx0XHRcdHRoaXMuY29tcGlsZVZhcmlhYmxlKG5vZGUgYXMgQVNUVmFyaWFibGVOb2RlKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuRVhQUkVTU0lPTjpcblx0XHRcdFx0dGhpcy5jb21waWxlKChub2RlIGFzIEFTVEV4cHJlc3Npb25Ob2RlKS5leHByKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuQVNTSUdOTUVOVDpcblx0XHRcdFx0dGhpcy5jb21waWxlQXNzaWdubWVudChub2RlIGFzIEFTVEFzc2lnbm1lbnROb2RlKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuQklOQVJZOlxuXHRcdFx0XHR0aGlzLmNvbXBpbGVCaW5hcnkobm9kZSBhcyBBU1RCaW5hcnlOb2RlKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuVU5BUlk6XG5cdFx0XHRcdHRoaXMuY29tcGlsZVVuYXJ5KG5vZGUgYXMgQVNUVW5hcnlOb2RlKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuQ0FMTDpcblx0XHRcdFx0dGhpcy5jb21waWxlQ2FsbChub2RlIGFzIEFTVENhbGxOb2RlKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuTUVNQkVSOlxuXHRcdFx0XHR0aGlzLmNvbXBpbGVNZW1iZXIobm9kZSBhcyBBU1RNZW1iZXJOb2RlKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuUkVUVVJOOlxuXHRcdFx0XHR0aGlzLmNvbXBpbGVSZXR1cm4obm9kZSBhcyBBU1RSZXR1cm5Ob2RlKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuTkVXOlxuXHRcdFx0XHR0aGlzLmNvbXBpbGVOZXcobm9kZSBhcyBBU1ROZXdOb2RlKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuTlVNQkVSOlxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5TVFJJTkc6XG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkJPT0xFQU46XG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLk5VTEw6XG5cdFx0XHRcdHRoaXMuZW1pdChPcGNvZGVzLkxPQURfQ09OU1QsIG5vZGUudmFsdWUpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5JREVOVElGSUVSOlxuXHRcdFx0XHR0aGlzLmVtaXQoT3Bjb2Rlcy5MT0FEX1ZBUiwgbm9kZS5uYW1lKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93Q29tcGlsZUVycm9yKGBVbnN1cHBvcnRlZCBub2RlIHR5cGUgJHtub2RlLnR5cGV9LmApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmJ5dGVjb2RlO1xuXHR9XG5cblx0cHJpdmF0ZSBjb21waWxlQ2xhc3Mobm9kZTogQVNUQ2xhc3NOb2RlKTogdm9pZCB7XG5cdFx0dGhpcy5lbWl0KE9wY29kZXMuQ0xBU1NfREVGLCBub2RlLm5hbWUpO1xuXG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG5cdFx0XHR0aGlzLmNvbXBpbGUoY2hpbGQpO1xuXHRcdH1cblxuXHRcdHRoaXMuZW1pdChPcGNvZGVzLkVORF9DTEFTUyk7XG5cdH1cblxuXHRwcml2YXRlIGNvbXBpbGVNZXRob2Qobm9kZTogQVNUTWV0aG9kTm9kZSk6IHZvaWQge1xuXHRcdHRoaXMuZW1pdChPcGNvZGVzLk1FVEhPRF9ERUYsIG5vZGUubmFtZSk7XG5cblx0XHRmb3IgKGNvbnN0IHN0bXQgb2Ygbm9kZS5jaGlsZHJlbikge1xuXHRcdFx0dGhpcy5jb21waWxlKHN0bXQpO1xuXHRcdH1cblxuXHRcdHRoaXMuZW1pdChPcGNvZGVzLkVORF9NRVRIT0QpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb21waWxlVmFyaWFibGUobm9kZTogQVNUVmFyaWFibGVOb2RlKTogdm9pZCB7XG5cdFx0aWYgKG5vZGUuaW5pdCkgdGhpcy5jb21waWxlKG5vZGUuaW5pdCk7XG5cdFx0dGhpcy5lbWl0KE9wY29kZXMuU1RPUkVfVkFSLCBub2RlLm5hbWUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb21waWxlQXNzaWdubWVudChub2RlOiBBU1RBc3NpZ25tZW50Tm9kZSk6IHZvaWQge1xuXHRcdHRoaXMuY29tcGlsZShub2RlLnJpZ2h0KTtcblxuXHRcdGlmIChub2RlLmxlZnQudHlwZSA9PT0gQVNUTm9kZVR5cGUuSURFTlRJRklFUikge1xuXHRcdFx0dGhpcy5lbWl0KE9wY29kZXMuU1RPUkVfVkFSLCBub2RlLmxlZnQubmFtZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb21waWxlQmluYXJ5KG5vZGU6IEFTVEJpbmFyeU5vZGUpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBpbGUobm9kZS5sZWZ0KTtcblx0XHR0aGlzLmNvbXBpbGUobm9kZS5yaWdodCk7XG5cdFx0dGhpcy5lbWl0KEJpbmFyeU9wY29kZU1hcFtub2RlLm9wZXJhdG9yXSBhcyBudW1iZXIpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb21waWxlVW5hcnkobm9kZTogQVNUVW5hcnlOb2RlKTogdm9pZCB7XG5cdFx0dGhpcy5jb21waWxlKG5vZGUuYXJndW1lbnQpO1xuXHRcdHRoaXMuZW1pdChVbmFyeU9wY29kZU1hcFtub2RlLm9wZXJhdG9yXSBhcyBudW1iZXIpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb21waWxlQ2FsbChub2RlOiBBU1RDYWxsTm9kZSk6IHZvaWQge1xuXHRcdHRoaXMuY29tcGlsZShub2RlLmNhbGxlZSk7XG5cblx0XHRmb3IgKGNvbnN0IGFyZyBvZiBub2RlLmFyZ3VtZW50cykge1xuXHRcdFx0dGhpcy5jb21waWxlKGFyZyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5lbWl0KE9wY29kZXMuQ0FMTCwgbm9kZS5hcmd1bWVudHMubGVuZ3RoKTtcblx0fVxuXG5cdHByaXZhdGUgY29tcGlsZU1lbWJlcihub2RlOiBBU1RNZW1iZXJOb2RlKTogdm9pZCB7XG5cdFx0dGhpcy5jb21waWxlKG5vZGUub2JqZWN0KTtcblx0XHR0aGlzLmVtaXQoT3Bjb2Rlcy5HRVRfRklFTEQsIG5vZGUucHJvcGVydHkpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb21waWxlUmV0dXJuKG5vZGU6IEFTVFJldHVybk5vZGUpOiB2b2lkIHtcblx0XHRpZiAobm9kZS5hcmd1bWVudCkgdGhpcy5jb21waWxlKG5vZGUuYXJndW1lbnQpO1xuXHRcdHRoaXMuZW1pdChPcGNvZGVzLlJFVFVSTik7XG5cdH1cblxuXHRwcml2YXRlIGNvbXBpbGVOZXcobm9kZTogQVNUTmV3Tm9kZSk6IHZvaWQge1xuXHRcdGZvciAoY29uc3QgYXJnIG9mIG5vZGUuYXJndW1lbnRzKSB0aGlzLmNvbXBpbGUoYXJnKTtcblx0XHR0aGlzLmVtaXQoT3Bjb2Rlcy5ORVcsIG5vZGUubmFtZSk7XG5cdH1cblxuXHRwcml2YXRlIGNvbXBpbGVGaWVsZChub2RlOiBBU1RGaWVsZE5vZGUpOiB2b2lkIHtcblx0XHR0aGlzLmVtaXQoT3Bjb2Rlcy5GSUVMRF9ERUYsIG5vZGUubmFtZSk7XG5cblx0XHRpZiAobm9kZS5pbml0KSB7XG5cdFx0XHR0aGlzLmNvbXBpbGUobm9kZS5pbml0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5lbWl0KE9wY29kZXMuTE9BRF9DT05TVCwgbnVsbCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBlbWl0KG9wOiBudW1iZXIsIG9wZXJhbmQ/OiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLmJ5dGVjb2RlLnB1c2gob3ApO1xuXHRcdGlmIChvcGVyYW5kICE9PSB1bmRlZmluZWQpIHRoaXMuYnl0ZWNvZGUucHVzaChvcGVyYW5kKTtcblx0fVxufVxuIiwKICAgICIvLyB2bS50c1xuaW1wb3J0IHt0eXBlIEJ5dGVjb2RlLCBPcGNvZGVzfSBmcm9tIFwiLi9vcGNvZGVzLnRzXCI7XG5cbnR5cGUgQ2xhc3NEZWYgPSB7XG5cdG5hbWU6IHN0cmluZztcblx0ZmllbGRzOiBzdHJpbmdbXTtcblx0bWV0aG9kczogUmVjb3JkPHN0cmluZywgRnVuY3Rpb24+O1xufTtcblxuZXhwb3J0IGNsYXNzIFZpcnR1YWxNYWNoaW5lIHtcblx0cHJpdmF0ZSBzdGFjazogYW55W10gPSBbXTtcblx0cHJpdmF0ZSBnbG9iYWxzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG5cdHByaXZhdGUgY2xhc3NlczogUmVjb3JkPHN0cmluZywgQ2xhc3NEZWY+ID0ge307XG5cdHByaXZhdGUgYnl0ZWNvZGU6IChudW1iZXIgfCBzdHJpbmcpW10gPSBbXTtcblx0cHJpdmF0ZSBpcDogbnVtYmVyID0gMDtcblx0cHJpdmF0ZSBjdXJyZW50VGhpczogYW55ID0gbnVsbDtcblxuXHRleGVjdXRlKGJ5dGVjb2RlOiBCeXRlY29kZVtdKTogYW55IHtcblx0XHR0aGlzLmJ5dGVjb2RlID0gYnl0ZWNvZGU7XG5cdFx0dGhpcy5pcCA9IDA7XG5cblx0XHR3aGlsZSAodGhpcy5pcCA8IHRoaXMuYnl0ZWNvZGUubGVuZ3RoKSB7XG5cdFx0XHRjb25zdCBvcCA9IHRoaXMuYnl0ZWNvZGVbdGhpcy5pcCsrXTtcblxuXHRcdFx0c3dpdGNoIChvcCkge1xuXHRcdFx0XHRjYXNlIE9wY29kZXMuTE9BRF9DT05TVDpcblx0XHRcdFx0XHR0aGlzLnN0YWNrLnB1c2godGhpcy5ieXRlY29kZVt0aGlzLmlwKytdKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIE9wY29kZXMuTE9BRF9WQVI6IHtcblx0XHRcdFx0XHRjb25zdCBuYW1lID0gdGhpcy5ieXRlY29kZVt0aGlzLmlwKytdIGFzIHN0cmluZztcblx0XHRcdFx0XHR0aGlzLnN0YWNrLnB1c2godGhpcy5nbG9iYWxzW25hbWVdKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNhc2UgT3Bjb2Rlcy5TVE9SRV9WQVI6IHtcblx0XHRcdFx0XHRjb25zdCBuYW1lID0gdGhpcy5ieXRlY29kZVt0aGlzLmlwKytdIGFzIHN0cmluZztcblx0XHRcdFx0XHR0aGlzLmdsb2JhbHNbbmFtZV0gPSB0aGlzLnN0YWNrLnBvcCgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y2FzZSBPcGNvZGVzLkxPQURfVEhJUzpcblx0XHRcdFx0XHR0aGlzLnN0YWNrLnB1c2godGhpcy5jdXJyZW50VGhpcyk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBPcGNvZGVzLkFERDoge1xuXHRcdFx0XHRcdGNvbnN0IGIgPSB0aGlzLnN0YWNrLnBvcCgpO1xuXHRcdFx0XHRcdGNvbnN0IGEgPSB0aGlzLnN0YWNrLnBvcCgpO1xuXHRcdFx0XHRcdHRoaXMuc3RhY2sucHVzaChhICsgYik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjYXNlIE9wY29kZXMuU1VCOiB7XG5cdFx0XHRcdFx0Y29uc3QgYiA9IHRoaXMuc3RhY2sucG9wKCk7XG5cdFx0XHRcdFx0Y29uc3QgYSA9IHRoaXMuc3RhY2sucG9wKCk7XG5cdFx0XHRcdFx0dGhpcy5zdGFjay5wdXNoKGEgLSBiKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNhc2UgT3Bjb2Rlcy5NVUw6IHtcblx0XHRcdFx0XHRjb25zdCBiID0gdGhpcy5zdGFjay5wb3AoKTtcblx0XHRcdFx0XHRjb25zdCBhID0gdGhpcy5zdGFjay5wb3AoKTtcblx0XHRcdFx0XHR0aGlzLnN0YWNrLnB1c2goYSAqIGIpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y2FzZSBPcGNvZGVzLkRJVjoge1xuXHRcdFx0XHRcdGNvbnN0IGIgPSB0aGlzLnN0YWNrLnBvcCgpO1xuXHRcdFx0XHRcdGNvbnN0IGEgPSB0aGlzLnN0YWNrLnBvcCgpO1xuXHRcdFx0XHRcdHRoaXMuc3RhY2sucHVzaChhIC8gYik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjYXNlIE9wY29kZXMuTU9EOiB7XG5cdFx0XHRcdFx0Y29uc3QgYiA9IHRoaXMuc3RhY2sucG9wKCk7XG5cdFx0XHRcdFx0Y29uc3QgYSA9IHRoaXMuc3RhY2sucG9wKCk7XG5cdFx0XHRcdFx0dGhpcy5zdGFjay5wdXNoKGEgJSBiKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNhc2UgT3Bjb2Rlcy5FUToge1xuXHRcdFx0XHRcdGNvbnN0IGIgPSB0aGlzLnN0YWNrLnBvcCgpO1xuXHRcdFx0XHRcdGNvbnN0IGEgPSB0aGlzLnN0YWNrLnBvcCgpO1xuXHRcdFx0XHRcdHRoaXMuc3RhY2sucHVzaChhID09PSBiKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNhc2UgT3Bjb2Rlcy5ORToge1xuXHRcdFx0XHRcdGNvbnN0IGIgPSB0aGlzLnN0YWNrLnBvcCgpO1xuXHRcdFx0XHRcdGNvbnN0IGEgPSB0aGlzLnN0YWNrLnBvcCgpO1xuXHRcdFx0XHRcdHRoaXMuc3RhY2sucHVzaChhICE9PSBiKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNhc2UgT3Bjb2Rlcy5MVDoge1xuXHRcdFx0XHRcdGNvbnN0IGIgPSB0aGlzLnN0YWNrLnBvcCgpO1xuXHRcdFx0XHRcdGNvbnN0IGEgPSB0aGlzLnN0YWNrLnBvcCgpO1xuXHRcdFx0XHRcdHRoaXMuc3RhY2sucHVzaChhIDwgYik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjYXNlIE9wY29kZXMuTEU6IHtcblx0XHRcdFx0XHRjb25zdCBiID0gdGhpcy5zdGFjay5wb3AoKTtcblx0XHRcdFx0XHRjb25zdCBhID0gdGhpcy5zdGFjay5wb3AoKTtcblx0XHRcdFx0XHR0aGlzLnN0YWNrLnB1c2goYSA8PSBiKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNhc2UgT3Bjb2Rlcy5HVDoge1xuXHRcdFx0XHRcdGNvbnN0IGIgPSB0aGlzLnN0YWNrLnBvcCgpO1xuXHRcdFx0XHRcdGNvbnN0IGEgPSB0aGlzLnN0YWNrLnBvcCgpO1xuXHRcdFx0XHRcdHRoaXMuc3RhY2sucHVzaChhID4gYik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjYXNlIE9wY29kZXMuR0U6IHtcblx0XHRcdFx0XHRjb25zdCBiID0gdGhpcy5zdGFjay5wb3AoKTtcblx0XHRcdFx0XHRjb25zdCBhID0gdGhpcy5zdGFjay5wb3AoKTtcblx0XHRcdFx0XHR0aGlzLnN0YWNrLnB1c2goYSA+PSBiKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNhc2UgT3Bjb2Rlcy5BTkQ6IHtcblx0XHRcdFx0XHRjb25zdCBiID0gdGhpcy5zdGFjay5wb3AoKTtcblx0XHRcdFx0XHRjb25zdCBhID0gdGhpcy5zdGFjay5wb3AoKTtcblx0XHRcdFx0XHR0aGlzLnN0YWNrLnB1c2goYSAmJiBiKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNhc2UgT3Bjb2Rlcy5PUjoge1xuXHRcdFx0XHRcdGNvbnN0IGIgPSB0aGlzLnN0YWNrLnBvcCgpO1xuXHRcdFx0XHRcdGNvbnN0IGEgPSB0aGlzLnN0YWNrLnBvcCgpO1xuXHRcdFx0XHRcdHRoaXMuc3RhY2sucHVzaChhIHx8IGIpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y2FzZSBPcGNvZGVzLk5FRzpcblx0XHRcdFx0XHR0aGlzLnN0YWNrLnB1c2goLXRoaXMuc3RhY2sucG9wKCkpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgT3Bjb2Rlcy5QT1M6XG5cdFx0XHRcdFx0dGhpcy5zdGFjay5wdXNoKCt0aGlzLnN0YWNrLnBvcCgpKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIE9wY29kZXMuVU5BUllfTk9UOlxuXHRcdFx0XHRcdHRoaXMuc3RhY2sucHVzaCghdGhpcy5zdGFjay5wb3AoKSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBPcGNvZGVzLkdFVF9GSUVMRDoge1xuXHRcdFx0XHRcdGNvbnN0IGZpZWxkID0gdGhpcy5ieXRlY29kZVt0aGlzLmlwKytdIGFzIHN0cmluZztcblx0XHRcdFx0XHRjb25zdCBvYmogPSB0aGlzLnN0YWNrLnBvcCgpO1xuXHRcdFx0XHRcdGlmICghb2JqKSB0aHJvdyBuZXcgRXJyb3IoXCJHRVRfRklFTEQgb24gbnVsbFwiKTtcblx0XHRcdFx0XHR0aGlzLnN0YWNrLnB1c2gob2JqW2ZpZWxkXSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjYXNlIE9wY29kZXMuU0VUX0ZJRUxEOiB7XG5cdFx0XHRcdFx0Y29uc3QgZmllbGQgPSB0aGlzLmJ5dGVjb2RlW3RoaXMuaXArK10gYXMgc3RyaW5nO1xuXHRcdFx0XHRcdGNvbnN0IHZhbHVlID0gdGhpcy5zdGFjay5wb3AoKTtcblx0XHRcdFx0XHRjb25zdCBvYmogPSB0aGlzLnN0YWNrLnBvcCgpO1xuXHRcdFx0XHRcdGlmICghb2JqKSB0aHJvdyBuZXcgRXJyb3IoXCJTRVRfRklFTEQgb24gbnVsbFwiKTtcblx0XHRcdFx0XHRvYmpbZmllbGRdID0gdmFsdWU7XG5cdFx0XHRcdFx0dGhpcy5zdGFjay5wdXNoKHZhbHVlKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNhc2UgT3Bjb2Rlcy5ORVc6IHtcblx0XHRcdFx0XHRjb25zdCBjbGFzc05hbWUgPSB0aGlzLmJ5dGVjb2RlW3RoaXMuaXArK10gYXMgc3RyaW5nO1xuXHRcdFx0XHRcdGNvbnN0IGNsYXNzRGVmID0gdGhpcy5jbGFzc2VzW2NsYXNzTmFtZV07XG5cdFx0XHRcdFx0aWYgKCFjbGFzc0RlZikgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBjbGFzcyBcIiArIGNsYXNzTmFtZSk7XG5cblx0XHRcdFx0XHRjb25zdCBvYmo6IGFueSA9IHt9O1xuXHRcdFx0XHRcdGZvciAoY29uc3QgZmllbGQgb2YgY2xhc3NEZWYuZmllbGRzKSBvYmpbZmllbGRdID0gbnVsbDtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IG1ldGhvZCBpbiBjbGFzc0RlZi5tZXRob2RzKSB7XG5cdFx0XHRcdFx0XHRpZiAoY2xhc3NEZWYubWV0aG9kc1ttZXRob2RdKSB7XG5cdFx0XHRcdFx0XHRcdG9ialttZXRob2RdID0gY2xhc3NEZWYubWV0aG9kc1ttZXRob2RdLmJpbmQob2JqKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGFjay5wdXNoKG9iaik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjYXNlIE9wY29kZXMuQ0xBU1NfREVGOiB7XG5cdFx0XHRcdFx0Y29uc3QgbmFtZSA9IHRoaXMuYnl0ZWNvZGVbdGhpcy5pcCsrXSBhcyBzdHJpbmc7XG5cdFx0XHRcdFx0Y29uc3QgY2xhc3NEZWY6IENsYXNzRGVmID0ge25hbWUsIGZpZWxkczogW10sIG1ldGhvZHM6IHt9fTtcblx0XHRcdFx0XHR0aGlzLmNsYXNzZXNbbmFtZV0gPSBjbGFzc0RlZjtcblxuXHRcdFx0XHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBpbm5lciA9IHRoaXMuYnl0ZWNvZGVbdGhpcy5pcCsrXTtcblx0XHRcdFx0XHRcdGlmIChpbm5lciA9PT0gT3Bjb2Rlcy5FTkRfQ0xBU1MpIGJyZWFrO1xuXG5cdFx0XHRcdFx0XHRpZiAoaW5uZXIgPT09IE9wY29kZXMuRklFTERfREVGKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGZpZWxkTmFtZSA9IHRoaXMuYnl0ZWNvZGVbdGhpcy5pcCsrXSBhcyBzdHJpbmc7XG5cdFx0XHRcdFx0XHRcdGNsYXNzRGVmLmZpZWxkcy5wdXNoKGZpZWxkTmFtZSk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmIChpbm5lciA9PT0gT3Bjb2Rlcy5NRVRIT0RfREVGKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IG1ldGhvZE5hbWUgPSB0aGlzLmJ5dGVjb2RlW3RoaXMuaXArK10gYXMgc3RyaW5nO1xuXG5cdFx0XHRcdFx0XHRcdC8vIHRlbXBvcsOkcmUgUGxhdHpoYWx0ZXJmdW5rdGlvblxuXHRcdFx0XHRcdFx0XHRjb25zdCBmbiA9ICguLi5hcmdzOiBhbnlbXSkgPT4gY29uc29sZS5sb2coXCJNZXRob2QgY2FsbCBub3QgaW1wbGVtZW50ZWQ6XCIsIG1ldGhvZE5hbWUpO1xuXHRcdFx0XHRcdFx0XHRjbGFzc0RlZi5tZXRob2RzW21ldGhvZE5hbWVdID0gZm47XG5cblx0XHRcdFx0XHRcdFx0d2hpbGUgKHRoaXMuYnl0ZWNvZGVbdGhpcy5pcCsrXSAhPT0gT3Bjb2Rlcy5FTkRfTUVUSE9EKSB7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjYXNlIE9wY29kZXMuQ0FMTDoge1xuXHRcdFx0XHRcdGNvbnN0IGFyZ0NvdW50ID0gdGhpcy5ieXRlY29kZVt0aGlzLmlwKytdIGFzIG51bWJlcjtcblx0XHRcdFx0XHRjb25zdCBhcmdzID0gW107XG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcmdDb3VudDsgaSsrKSBhcmdzLnVuc2hpZnQodGhpcy5zdGFjay5wb3AoKSk7XG5cdFx0XHRcdFx0Y29uc3QgZm4gPSB0aGlzLnN0YWNrLnBvcCgpO1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yKFwiQ0FMTCB0YXJnZXQgbm90IGZ1bmN0aW9uXCIpO1xuXHRcdFx0XHRcdHRoaXMuc3RhY2sucHVzaChmbiguLi5hcmdzKSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjYXNlIE9wY29kZXMuUkVUVVJOOlxuXHRcdFx0XHRcdHJldHVybiB0aGlzLnN0YWNrLnBvcCgpO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBvcGNvZGUgXCIgKyBvcCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5pbXBvcnQge0Vudmlyb25tZW50fSBmcm9tIFwiLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuaW1wb3J0IHtUeXBlQ2hlY2tlcn0gZnJvbSBcIi4vdHlwZXMvdHlwZWNoZWNrZXJcIjtcbmltcG9ydCB7TGlua2VyfSBmcm9tIFwiLi9saW5rZXIvbGlua2VyXCI7XG5pbXBvcnQge1Rlc3RTdWl0ZXN9IGZyb20gXCIuL3Rlc3RzL3Rlc3RzdWl0ZXNcIjtcbmltcG9ydCB7SW50ZXJwcmV0ZXJ9IGZyb20gXCIuL2ludGVycHJldGVyL2ludGVycHJldGVyXCI7XG5pbXBvcnQge0ZldGNoRmlsZUxvYWRlcn0gZnJvbSBcIi4vbG9hZGVyc1wiO1xuaW1wb3J0IHtBU1ROb2RlfSBmcm9tIFwiLi9hc3RcIjtcbmltcG9ydCB7UGFyc2VyfSBmcm9tIFwiLi9wYXJzZXIvcGFyc2VyXCI7XG5pbXBvcnQge0V2ZW50UGlwZWxpbmV9IGZyb20gXCIuL2V2ZW50L3BpcGVsaW5lXCI7XG5pbXBvcnQge0NvbXBpbGVyfSBmcm9tIFwiLi92aXJ0dWFsbWFjaGluZS9jb21waWxlci50c1wiO1xuaW1wb3J0IHt0eXBlIEJ5dGVjb2RlfSBmcm9tIFwiLi92aXJ0dWFsbWFjaGluZS9vcGNvZGVzLnRzXCI7XG5pbXBvcnQge1ZpcnR1YWxNYWNoaW5lfSBmcm9tIFwiLi92aXJ0dWFsbWFjaGluZS92aXJ0dWFsbWFjaGluZS50c1wiO1xuXG5leHBvcnQgY2xhc3MgTHlyYVNjcmlwdFByb2dyYW0ge1xuXHRwcml2YXRlIHJlYWRvbmx5IGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmU7XG5cdHByaXZhdGUgcmVhZG9ubHkgY29tcGlsZXI6IENvbXBpbGVyID0gbmV3IENvbXBpbGVyKCk7XG5cdHByaXZhdGUgcmVhZG9ubHkgdmlydHVhbE1hY2hpbmU6IFZpcnR1YWxNYWNoaW5lID0gbmV3IFZpcnR1YWxNYWNoaW5lKCk7XG5cdHByaXZhdGUgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KCk7XG5cdHByaXZhdGUgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5ID0gbmV3IE9iamVjdFJlZ2lzdHJ5KCk7XG5cblxuXHRwcml2YXRlIHR5cGVDaGVja2VyOiBUeXBlQ2hlY2tlciA9IG5ldyBUeXBlQ2hlY2tlcih0aGlzLm9iamVjdFJlZ2lzdHJ5KTtcblx0cHJpdmF0ZSBsaW5rZXI6IExpbmtlciA9IG5ldyBMaW5rZXIodGhpcy5lbnZpcm9ubWVudCwgdGhpcy5vYmplY3RSZWdpc3RyeSwgbmV3IEZldGNoRmlsZUxvYWRlcigpKTtcblxuXHRwcml2YXRlIGludGVycHJldGVyOiBJbnRlcnByZXRlcjtcblx0cHJpdmF0ZSB0ZXN0U3VpdGU6IFRlc3RTdWl0ZXM7XG5cblx0cHJpdmF0ZSByZWFkb25seSBpc0RlYnVnOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgc3RhcnRUaW1lOiBudW1iZXIgPSAwO1xuXG5cdGNvbnN0cnVjdG9yKGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSwgZ2xvYmFsRXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSA9IG5ldyBFdmVudFBpcGVsaW5lKCkpIHtcblx0XHR0aGlzLmlzRGVidWcgPSBpc0RlYnVnO1xuXG5cdFx0dGhpcy5pbnRlcnByZXRlciA9IG5ldyBJbnRlcnByZXRlcihcblx0XHRcdHRoaXMuZW52aXJvbm1lbnQsXG5cdFx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0Z2xvYmFsRXZlbnRQaXBlbGluZVxuXHRcdCk7XG5cblx0XHR0aGlzLnRlc3RTdWl0ZSA9IG5ldyBUZXN0U3VpdGVzKFxuXHRcdFx0dGhpcy5lbnZpcm9ubWVudCxcblx0XHRcdHRoaXMub2JqZWN0UmVnaXN0cnksXG5cdFx0XHRnbG9iYWxFdmVudFBpcGVsaW5lXG5cdFx0KTtcblxuXHRcdHRoaXMuZXZlbnRQaXBlbGluZSA9IGdsb2JhbEV2ZW50UGlwZWxpbmU7XG5cdH1cblxuXHRnZXRHbG9iYWxPYmplY3RSZWdpc3RyeSgpOiBPYmplY3RSZWdpc3RyeSB7XG5cdFx0cmV0dXJuIHRoaXMub2JqZWN0UmVnaXN0cnk7XG5cdH1cblxuXG5cdGdldEdsb2JhbEVudmlyb25tZW50KCk6IEVudmlyb25tZW50IHtcblx0XHRyZXR1cm4gdGhpcy5lbnZpcm9ubWVudDtcblx0fVxuXG5cdGdldEdsb2JhbEV2ZW50UGlwZWxpbmUoKTogRXZlbnRQaXBlbGluZSB7XG5cdFx0cmV0dXJuIHRoaXMuZXZlbnRQaXBlbGluZTtcblx0fVxuXG5cdGFzeW5jIGV4ZWN1dGVTb3VyY2Uoc291cmNlOiBTb3VyY2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gdGhpcy5ydW5QaXBlbGluZShzb3VyY2UpXG5cdFx0ICAgICAgICAgICAudGhlbigoYXN0OiBBU1ROb2RlKTogdm9pZCA9PiB7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlU3RhcnRUaW1lKCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuaW50ZXJwcmV0ZXIucnVuKGFzdCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlRW5kVGltZSgnaW50ZXJwcmV0ZXInKTtcblx0XHQgICAgICAgICAgIH0pO1xuXHR9XG5cblx0YXN5bmMgZXhlY3V0ZVRlc3Qoc291cmNlOiBTb3VyY2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gdGhpcy5ydW5QaXBlbGluZShzb3VyY2UpXG5cdFx0ICAgICAgICAgICAudGhlbigoYXN0OiBBU1ROb2RlKTogdm9pZCA9PiB7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlU3RhcnRUaW1lKCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMudGVzdFN1aXRlLnJ1bihhc3QpO1xuXHRcdFx0ICAgICAgICAgICB0aGlzLmRlYnVnTWVhc3VyZUVuZFRpbWUoJ3Rlc3QnKTtcblx0XHQgICAgICAgICAgIH0pO1xuXHR9XG5cblx0YXN5bmMgY29tcGlsZVNvdXJjZShzb3VyY2U6IFNvdXJjZSk6IFByb21pc2U8Qnl0ZWNvZGVbXT4ge1xuXHRcdHJldHVybiB0aGlzLnJ1blBpcGVsaW5lKHNvdXJjZSlcblx0XHQgICAgICAgICAgIC50aGVuKChhc3Q6IEFTVE5vZGUpOiBCeXRlY29kZVtdID0+IHtcblx0XHRcdCAgICAgICAgICAgdGhpcy5kZWJ1Z01lYXN1cmVTdGFydFRpbWUoKTtcblx0XHRcdCAgICAgICAgICAgY29uc3QgYnl0ZWNvZGU6IEJ5dGVjb2RlW10gPSB0aGlzLmNvbXBpbGVyLmNvbXBpbGUoYXN0KTtcblx0XHRcdCAgICAgICAgICAgdGhpcy5kZWJ1Z01lYXN1cmVFbmRUaW1lKCdjb21waWxlcicpO1xuXHRcdFx0ICAgICAgICAgICByZXR1cm4gYnl0ZWNvZGU7XG5cdFx0ICAgICAgICAgICB9KTtcblx0fVxuXG5cdGV4ZWN1dGVCeXRlY29kZShieXRlY29kZTogQnl0ZWNvZGVbXSk6IHZvaWQge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMudmlydHVhbE1hY2hpbmUuZXhlY3V0ZShieXRlY29kZSkpO1xuXHR9XG5cblx0ZGVidWcodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzRGVidWcpIHtcblx0XHRcdGNvbnNvbGUubG9nKHZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRkZWJ1Z01lYXN1cmVTdGFydFRpbWUoKTogdm9pZCB7XG5cdFx0dGhpcy5zdGFydFRpbWUgPSB0aGlzLmRlYnVnVGltZXN0YW1wKCk7XG5cdH1cblxuXHRkZWJ1Z01lYXN1cmVFbmRUaW1lKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuZGVidWcobWVzc2FnZSArICc6ICcgKyAodGhpcy5kZWJ1Z1RpbWVzdGFtcCgpIC0gdGhpcy5zdGFydFRpbWUpICsgJ21zJyk7XG5cdH1cblxuXHRkZWJ1Z1RpbWVzdGFtcCgpOiBudW1iZXIge1xuXHRcdGlmICghdGhpcy5pc0RlYnVnKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdFx0cmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3luYyBydW5QaXBlbGluZShzb3VyY2U6IFNvdXJjZSk6IFByb21pc2U8QVNUTm9kZT4ge1xuXHRcdHRoaXMuZGVidWdNZWFzdXJlU3RhcnRUaW1lKClcblx0XHRjb25zdCBhc3Q6IEFTVE5vZGUgPSBuZXcgUGFyc2VyKHNvdXJjZSkucGFyc2UoKTtcblx0XHR0aGlzLmRlYnVnTWVhc3VyZUVuZFRpbWUoJ3BhcnNlcicpXG5cdFx0dGhpcy5kZWJ1Zyhhc3QpO1xuXG5cdFx0cmV0dXJuIHRoaXMubGlua2VyLmxpbmtTb3VyY2VzKGFzdClcblx0XHQgICAgICAgICAgIC50aGVuKCgpOiB2b2lkID0+IHtcblx0XHRcdCAgICAgICAgICAgdGhpcy50eXBlQ2hlY2tlci5jb2xsZWN0QWxsU3ltYm9sc0Zyb21SZWdpc3RyeSh0aGlzLm9iamVjdFJlZ2lzdHJ5KTtcblx0XHQgICAgICAgICAgIH0pXG5cdFx0ICAgICAgICAgICAudGhlbigoKTogQVNUTm9kZSA9PiB7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlU3RhcnRUaW1lKCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMudHlwZUNoZWNrZXIuY2hlY2soYXN0KTtcblx0XHRcdCAgICAgICAgICAgdGhpcy5kZWJ1Z01lYXN1cmVFbmRUaW1lKCd0eXBlY2hlY2tlcicpO1xuXG5cdFx0XHQgICAgICAgICAgIHJldHVybiBhc3Q7XG5cdFx0ICAgICAgICAgICB9KTtcblx0fVxufVxuIiwKICAgICJjb25zdCBET01fRVZFTlQ6IHN0cmluZyA9ICdkb206ZXZlbnQnO1xuXG5jb25zdCBpc0V2ZW50OiAocHJvcGVydHlLZXk6IHN0cmluZykgPT4gYm9vbGVhbiA9IChwcm9wZXJ0eUtleTogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG5cdHJldHVybiBwcm9wZXJ0eUtleS50b0xvd2VyQ2FzZSgpXG5cdCAgICAgICAgICAgICAgICAgIC5zdGFydHNXaXRoKCdvbicpO1xufVxuXG5leHBvcnQgY29uc3QgRXZlbnRzID0ge1xuXHRET01fRVZFTlQsXG5cdGlzRXZlbnQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudHM7XG4iLAogICAgIi8vLyA8cmVmZXJlbmNlIGxpYj1cImRvbVwiIC8+XG5cbmltcG9ydCB0eXBlIHtQcm9wcywgVkNoaWxkLCBWVGV4dH0gZnJvbSBcIi4uL2NvcmUvdmRvbS92ZG9tXCI7XG5pbXBvcnQge0xhbWJkYUZ1bmN0aW9uQ2FsbH0gZnJvbSBcIi4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcnVudGltZVwiO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcbmltcG9ydCB0eXBlIHtBcHBsaWNhdGlvblJ1bnRpbWV9IGZyb20gXCIuL3J1bnRpbWVcIjtcbmltcG9ydCB7VkRPTX0gZnJvbSBcIi4vcmVnaXN0cnlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBFbGVtZW50Q3JlYXRvciB7XG5cdGNyZWF0ZSh2Tm9kZTogVkNoaWxkKTogTm9kZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbGVtZW50UGF0Y2hlciB7XG5cdHBhdGNoKG9sZFZOb2RlOiBWQ2hpbGQgfCBudWxsLCBuZXdOb2RlOiBWQ2hpbGQpOiB2b2lkXG59XG5cbmV4cG9ydCBjbGFzcyBIVE1MRWxlbWVudENyZWF0b3IgaW1wbGVtZW50cyBFbGVtZW50Q3JlYXRvciB7XG5cdHByaXZhdGUgdGV4dEJ1ZmZlcjogVlRleHRbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgYXBwbGljYXRpb25SdW50aW1lOiBBcHBsaWNhdGlvblJ1bnRpbWUsXG5cdFx0cHJpdmF0ZSByZWFkb25seSB2ZG9tOiBWRE9NXG5cdCkge1xuXHR9XG5cblx0cHVibGljIGNyZWF0ZSh2Tm9kZTogVkNoaWxkKTogTm9kZSB7XG5cdFx0aWYgKHZOb2RlLnR5cGUgPT09ICd0ZXh0Jykge1xuXHRcdFx0Y29uc3QgdGV4dE5vZGU6IFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2Tm9kZS52YWx1ZSk7XG5cdFx0XHR2Tm9kZS5kb20gPSB0ZXh0Tm9kZTtcblx0XHRcdHJldHVybiB0ZXh0Tm9kZTtcblx0XHR9XG5cblx0XHRpZiAodk5vZGUudHlwZSA9PT0gJ2NvbXBvbmVudCcpIHtcblx0XHRcdHZOb2RlLmluc3RhbmNlID0gdGhpcy5hcHBsaWNhdGlvblJ1bnRpbWUuY3JlYXRlSW5zdGFuY2Uodk5vZGUuY2xhc3NOYW1lKTtcblxuXHRcdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModk5vZGUucHJvcHMgPz8ge30pKSB7XG5cdFx0XHRcdGlmIChrZXkgPT09ICdjaGlsZHJlbicpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodk5vZGUuaW5zdGFuY2UuaGFzUHVibGljUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0XHRcdHZOb2RlLmluc3RhbmNlLnNldFB1YmxpY1Byb3BlcnR5KGtleSwgdmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICghdk5vZGUuc3ViVHJlZSkge1xuXHRcdFx0XHR2Tm9kZS5zdWJUcmVlID0gdGhpcy5hcHBsaWNhdGlvblJ1bnRpbWUucmVuZGVyQ29tcG9uZW50KHZOb2RlLmluc3RhbmNlKSBhcyBWQ2hpbGQ7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMudmRvbS5yZWdpc3Rlcih2Tm9kZS5pbnN0YW5jZSwgdk5vZGUuc3ViVHJlZSk7XG5cblx0XHRcdGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5jcmVhdGUodk5vZGUuc3ViVHJlZSkgYXMgSFRNTEVsZW1lbnQ7XG5cdFx0XHR2Tm9kZS5kb20gPSBlbGVtZW50O1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHZOb2RlLnRhZykgYXMgSFRNTEVsZW1lbnQ7XG5cdFx0dk5vZGUuZG9tID0gZWxlbWVudDtcblxuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHZOb2RlLnByb3BzID8/IHt9KSkge1xuXHRcdFx0aWYgKEV2ZW50cy5pc0V2ZW50KGtleSkpIHtcblx0XHRcdFx0dGhpcy5hcHBsaWNhdGlvblJ1bnRpbWUuYWRkRXZlbnRIYW5kbGVyKGVsZW1lbnQsIGtleSwgdmFsdWUgYXMgTGFtYmRhRnVuY3Rpb25DYWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgU3RyaW5nKHZhbHVlKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiB2Tm9kZS5jaGlsZHJlbikge1xuXHRcdFx0ZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZShjaGlsZCkgYXMgSFRNTEVsZW1lbnQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBIVE1MRWxlbWVudFBhdGNoZXIgaW1wbGVtZW50cyBFbGVtZW50UGF0Y2hlciB7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgbW91bnRQb2ludDogSFRNTEVsZW1lbnQsXG5cdCAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgYXBwbGljYXRpb25SdW50aW1lOiBBcHBsaWNhdGlvblJ1bnRpbWUsXG5cdCAgICAgICAgICAgIHZkb206IFZET00sXG5cdCAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudENyZWF0b3I6IEVsZW1lbnRDcmVhdG9yID0gbmV3IEhUTUxFbGVtZW50Q3JlYXRvcihhcHBsaWNhdGlvblJ1bnRpbWUsIHZkb20pKSB7XG5cdH1cblxuXHRwdWJsaWMgcGF0Y2gob2xkTm9kZTogVkNoaWxkIHwgbnVsbCwgbmV3Tm9kZTogVkNoaWxkKTogdm9pZCB7XG5cdFx0aWYgKCFvbGROb2RlKSB7XG5cdFx0XHRjb25zdCBlbGVtZW50OiBOb2RlID0gdGhpcy5lbGVtZW50Q3JlYXRvci5jcmVhdGUobmV3Tm9kZSk7XG5cdFx0XHR0aGlzLm1vdW50UG9pbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cdFx0XHRuZXdOb2RlLmRvbSA9IGVsZW1lbnQ7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5wYXRjaE5vZGUodGhpcy5tb3VudFBvaW50LCBvbGROb2RlLCBuZXdOb2RlKTtcblx0fVxuXG5cdHByaXZhdGUgcGF0Y2hOb2RlKHBhcmVudDogTm9kZSwgb2xkTm9kZTogVkNoaWxkLCBuZXdOb2RlOiBWQ2hpbGQpOiB2b2lkIHtcblx0XHRpZiAob2xkTm9kZS50eXBlID09PSAndGV4dCcgJiYgbmV3Tm9kZS50eXBlID09PSAndGV4dCcpIHtcblx0XHRcdGNvbnN0IHRleHROb2RlOiBOb2RlID0gb2xkTm9kZS5kb20hO1xuXHRcdFx0aWYgKHRleHROb2RlLnRleHRDb250ZW50ICE9PSBuZXdOb2RlLnZhbHVlKSB7XG5cdFx0XHRcdHRleHROb2RlLnRleHRDb250ZW50ID0gbmV3Tm9kZS52YWx1ZTtcblx0XHRcdH1cblx0XHRcdG5ld05vZGUuZG9tID0gdGV4dE5vZGU7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKG9sZE5vZGUudHlwZSAhPT0gbmV3Tm9kZS50eXBlKSB7XG5cdFx0XHRjb25zdCBuZXdFbGVtZW50OiBOb2RlID0gdGhpcy5lbGVtZW50Q3JlYXRvci5jcmVhdGUobmV3Tm9kZSk7XG5cdFx0XHRwYXJlbnQucmVwbGFjZUNoaWxkKG5ld0VsZW1lbnQsIG9sZE5vZGUuZG9tISk7XG5cdFx0XHRuZXdOb2RlLmRvbSA9IG5ld0VsZW1lbnQ7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKG5ld05vZGUudHlwZSA9PT0gJ2NvbXBvbmVudCcpIHtcblx0XHRcdGNvbnN0IG5ld0VsZW1lbnQ6IE5vZGUgPSB0aGlzLmVsZW1lbnRDcmVhdG9yLmNyZWF0ZShuZXdOb2RlKTtcblx0XHRcdGlmICghb2xkTm9kZS5kb20pIHtcblx0XHRcdFx0cGFyZW50LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuXHRcdFx0fSBlbHNlIGlmIChvbGROb2RlLmRvbSAhPT0gbmV3RWxlbWVudCkge1xuXHRcdFx0XHRwYXJlbnQucmVwbGFjZUNoaWxkKG5ld0VsZW1lbnQsIG9sZE5vZGUuZG9tISk7XG5cdFx0XHR9XG5cdFx0XHRuZXdOb2RlLmRvbSA9IG5ld0VsZW1lbnQ7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgZG9tOiBIVE1MRWxlbWVudCA9IG9sZE5vZGUuZG9tIGFzIEhUTUxFbGVtZW50O1xuXHRcdG5ld05vZGUuZG9tID0gZG9tO1xuXG5cdFx0aWYgKG9sZE5vZGUudHlwZSAhPT0gJ3RleHQnICYmIG5ld05vZGUudHlwZSAhPT0gJ3RleHQnKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZVByb3BlcnRpZXMoZG9tLCBvbGROb2RlLnByb3BzID8/IHt9LCBuZXdOb2RlLnByb3BzID8/IHt9KTtcblxuXHRcdFx0aWYgKG9sZE5vZGUudHlwZSA9PT0gJ2VsZW1lbnQnICYmIG5ld05vZGUudHlwZSA9PT0gJ2VsZW1lbnQnKSB7XG5cdFx0XHRcdHRoaXMucGF0Y2hDaGlsZHJlbihkb20sIG9sZE5vZGUuY2hpbGRyZW4sIG5ld05vZGUuY2hpbGRyZW4pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgdXBkYXRlUHJvcGVydGllcyhlbGVtZW50OiBIVE1MRWxlbWVudCwgb2xkUHJvcGVydGllczogUHJvcHMsIG5ld1Byb3BlcnRpZXM6IFByb3BzKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBrZXkgaW4gb2xkUHJvcGVydGllcykge1xuXHRcdFx0aWYgKCEoa2V5IGluIG5ld1Byb3BlcnRpZXMpKSB7XG5cdFx0XHRcdGlmIChFdmVudHMuaXNFdmVudChrZXkpKSB7XG5cdFx0XHRcdFx0dGhpcy5hcHBsaWNhdGlvblJ1bnRpbWUucmVtb3ZlRXZlbnRIYW5kbGVyKGVsZW1lbnQsIGtleSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgcHJvcGVydHlLZXkgaW4gbmV3UHJvcGVydGllcykge1xuXHRcdFx0Y29uc3Qgb2xkVmFsdWU6IGFueSA9IG9sZFByb3BlcnRpZXNbcHJvcGVydHlLZXldO1xuXHRcdFx0Y29uc3QgbmV3VmFsdWU6IGFueSA9IG5ld1Byb3BlcnRpZXNbcHJvcGVydHlLZXldO1xuXG5cdFx0XHRpZiAob2xkVmFsdWUgPT09IG5ld1ZhbHVlKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoRXZlbnRzLmlzRXZlbnQocHJvcGVydHlLZXkpKSB7XG5cdFx0XHRcdGlmIChvbGRWYWx1ZSkge1xuXHRcdFx0XHRcdHRoaXMuYXBwbGljYXRpb25SdW50aW1lLnJlbW92ZUV2ZW50SGFuZGxlcihlbGVtZW50LCBwcm9wZXJ0eUtleSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5hcHBsaWNhdGlvblJ1bnRpbWUuYWRkRXZlbnRIYW5kbGVyKGVsZW1lbnQsIHByb3BlcnR5S2V5LCBuZXdWYWx1ZSBhcyBMYW1iZGFGdW5jdGlvbkNhbGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcGVydHlLZXksIG5ld1ZhbHVlIGFzIHN0cmluZyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBwYXRjaENoaWxkcmVuKHBhcmVudDogTm9kZSwgb2xkQ2hpbGRyZW46IFZDaGlsZFtdLCBuZXdDaGlsZHJlbjogVkNoaWxkW10pOiB2b2lkIHtcblx0XHRjb25zdCBvbGRMZW5ndGg6IG51bWJlciA9IG9sZENoaWxkcmVuLmxlbmd0aDtcblx0XHRjb25zdCBuZXdMZW5ndGg6IG51bWJlciA9IG5ld0NoaWxkcmVuLmxlbmd0aDtcblx0XHRjb25zdCBjb21tb25MZW5ndGg6IG51bWJlciA9IE1hdGgubWluKG9sZExlbmd0aCwgbmV3TGVuZ3RoKTtcblxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBjb21tb25MZW5ndGg7IGkrKykge1xuXHRcdFx0dGhpcy5wYXRjaE5vZGUocGFyZW50LCBvbGRDaGlsZHJlbltpXSBhcyBWQ2hpbGQsIG5ld0NoaWxkcmVuW2ldIGFzIFZDaGlsZCk7XG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gY29tbW9uTGVuZ3RoOyBpIDwgbmV3TGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IG5ld0NoaWxkOiBWQ2hpbGQgPSBuZXdDaGlsZHJlbltpXSBhcyBWQ2hpbGQ7XG5cdFx0XHRjb25zdCBuZXdFbGVtZW50OiBIVE1MTWFwRWxlbWVudCA9IHRoaXMuZWxlbWVudENyZWF0b3IuY3JlYXRlKG5ld0NoaWxkKSBhcyBIVE1MTWFwRWxlbWVudDtcblx0XHRcdHBhcmVudC5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcblxuXHRcdFx0bmV3Q2hpbGQuZG9tID0gbmV3RWxlbWVudDtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSBvbGRMZW5ndGggLSAxOyBpID49IG5ld0xlbmd0aDsgaS0tKSB7XG5cdFx0XHRjb25zdCBvbGRDaGlsZDogVkNoaWxkID0gb2xkQ2hpbGRyZW5baV0gYXMgVkNoaWxkO1xuXHRcdFx0Y29uc3QgZG9tOiBOb2RlIHwgdW5kZWZpbmVkID0gb2xkQ2hpbGQuZG9tO1xuXHRcdFx0aWYgKGRvbSkge1xuXHRcdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQoZG9tKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtMeXJhU2NyaXB0UHJvZ3JhbX0gZnJvbSBcIi4uL2NvcmUvcHJvZ3JhbVwiO1xuaW1wb3J0IHtmZXRjaFNvdXJjZX0gZnJvbSBcIi4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcbmltcG9ydCB7Q2xhc3NEZWZpbml0aW9uLCBFbnZpcm9ubWVudCwgSW5zdGFuY2V9IGZyb20gXCIuLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge2NhbGxJbnN0YW5jZU1ldGhvZCwgTGFtYmRhRnVuY3Rpb25DYWxsfSBmcm9tIFwiLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9ydW50aW1lXCI7XG5pbXBvcnQge0V2ZW50VHlwZX0gZnJvbSBcIi4uL2xpYnJhcnkvY2xhc3Nlcy9ldmVudFwiO1xuaW1wb3J0IHtFdmVudFBpcGVsaW5lfSBmcm9tIFwiLi4vY29yZS9ldmVudC9waXBlbGluZVwiO1xuXG5jb25zdCBseXJhRXZlbnRDbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uID0gbmV3IEV2ZW50VHlwZSgpLmdldENsYXNzRGVmaW5pdGlvbigpO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVuZ2luZSB7XG5cdGV4ZWN1dGVFbnRyeUZpbGUodXJsOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcblxuXHRjcmVhdGVJbnN0YW5jZShjbGFzc05hbWU6IHN0cmluZyk6IEluc3RhbmNlO1xuXG5cdGdldE9iamVjdFJlZ2lzdHJ5KCk6IE9iamVjdFJlZ2lzdHJ5O1xuXG5cdGdldEVudmlyb25tZW50KCk6IEVudmlyb25tZW50O1xuXG5cdGdldFJvb3RJbnN0YW5jZSgpOiBJbnN0YW5jZTtcblxuXHRjYWxsUm9vdEluc3RhbmNlTWV0aG9kKG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10pOiBhbnk7XG5cblx0Y2FsbEluc3RhbmNlTWV0aG9kKGluc3RhbmNlOiBJbnN0YW5jZSwgbWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBBcnJheTxhbnk+KTogYW55O1xuXG5cdGNyZWF0ZUV2ZW50KGV2ZW50OiBFdmVudCk6IEluc3RhbmNlO1xuXG5cdGNyZWF0ZUV2ZW50SGFuZGxlcihoYW5kbGVyOiBMYW1iZGFGdW5jdGlvbkNhbGwsIGV2ZW50TmFtZTogc3RyaW5nKTogKGV2ZW50OiBFdmVudCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIFdlYkx5cmFTY3JpcHQgaW1wbGVtZW50cyBFbmdpbmUge1xuXHRwcml2YXRlIHJlYWRvbmx5IHByb2dyYW06IEx5cmFTY3JpcHRQcm9ncmFtO1xuXHRwcml2YXRlIHJlYWRvbmx5IF9nbG9iYWxPYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cdHByaXZhdGUgcmVhZG9ubHkgX2dsb2JhbEVudmlyb25tZW50OiBFbnZpcm9ubWVudDtcblx0cHJpdmF0ZSByb290SW5zdGFuY2U6IEluc3RhbmNlIHwgbnVsbCA9IG51bGw7XG5cblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGdsb2JhbEV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUgPSBuZXcgRXZlbnRQaXBlbGluZSgpLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpIHtcblx0XHR0aGlzLnByb2dyYW0gPSBuZXcgTHlyYVNjcmlwdFByb2dyYW0oaXNEZWJ1ZywgdGhpcy5nbG9iYWxFdmVudFBpcGVsaW5lKTtcblx0XHR0aGlzLl9nbG9iYWxPYmplY3RSZWdpc3RyeSA9IHRoaXMucHJvZ3JhbS5nZXRHbG9iYWxPYmplY3RSZWdpc3RyeSgpO1xuXHRcdHRoaXMuX2dsb2JhbEVudmlyb25tZW50ID0gdGhpcy5wcm9ncmFtLmdldEdsb2JhbEVudmlyb25tZW50KCk7XG5cdH1cblxuXHRnZXRPYmplY3RSZWdpc3RyeSgpOiBPYmplY3RSZWdpc3RyeSB7XG5cdFx0cmV0dXJuIHRoaXMuX2dsb2JhbE9iamVjdFJlZ2lzdHJ5O1xuXHR9XG5cblx0Z2V0RW52aXJvbm1lbnQoKTogRW52aXJvbm1lbnQge1xuXHRcdHJldHVybiB0aGlzLl9nbG9iYWxFbnZpcm9ubWVudDtcblx0fVxuXG5cdHB1YmxpYyBnZXRSb290SW5zdGFuY2UoKTogSW5zdGFuY2Uge1xuXHRcdGlmICh0aGlzLnJvb3RJbnN0YW5jZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdObyByb290IGluc3RhbmNlIGF2YWlsYWJsZS4nKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMucm9vdEluc3RhbmNlO1xuXHR9XG5cblx0cHVibGljIGNyZWF0ZUluc3RhbmNlKGNsYXNzTmFtZTogc3RyaW5nKTogSW5zdGFuY2Uge1xuXHRcdHJldHVybiB0aGlzLmdldENsYXNzRGVmaW5pdGlvbihjbGFzc05hbWUpXG5cdFx0ICAgICAgICAgICAuY29uc3RydWN0TmV3SW5zdGFuY2VXaXRob3V0QXJndW1lbnRzKFxuXHRcdFx0ICAgICAgICAgICB0aGlzLl9nbG9iYWxPYmplY3RSZWdpc3RyeSxcblx0XHRcdCAgICAgICAgICAgdGhpcy5fZ2xvYmFsRW52aXJvbm1lbnQsXG5cdFx0XHQgICAgICAgICAgIHRoaXMuZ2xvYmFsRXZlbnRQaXBlbGluZVxuXHRcdCAgICAgICAgICAgKTtcblx0fVxuXG5cdHB1YmxpYyBjYWxsUm9vdEluc3RhbmNlTWV0aG9kKG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10pOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLmNhbGxJbnN0YW5jZU1ldGhvZCh0aGlzLmdldFJvb3RJbnN0YW5jZSgpLCBtZXRob2ROYW1lLCBhcmdzKTtcblx0fVxuXG5cdHB1YmxpYyBjYWxsSW5zdGFuY2VNZXRob2QoaW5zdGFuY2U6IEluc3RhbmNlLCBtZXRob2ROYW1lOiBzdHJpbmcsIGFyZ3M6IGFueVtdKTogYW55IHtcblx0XHRyZXR1cm4gY2FsbEluc3RhbmNlTWV0aG9kKFxuXHRcdFx0aW5zdGFuY2UsXG5cdFx0XHRpbnN0YW5jZS5maW5kZU1ldGhvZE5vZGUobWV0aG9kTmFtZSksXG5cdFx0XHRhcmdzLFxuXHRcdFx0dGhpcy5fZ2xvYmFsT2JqZWN0UmVnaXN0cnksXG5cdFx0XHR0aGlzLl9nbG9iYWxFbnZpcm9ubWVudCxcblx0XHRcdHRoaXMuZ2xvYmFsRXZlbnRQaXBlbGluZVxuXHRcdCk7XG5cdH1cblxuXHRwdWJsaWMgYXN5bmMgZXhlY3V0ZUVudHJ5RmlsZSh1cmw6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gdGhpcy5wcm9ncmFtLmV4ZWN1dGVTb3VyY2UoYXdhaXQgZmV0Y2hTb3VyY2UodXJsKSlcblx0XHQgICAgICAgICAgIC50aGVuKCgpID0+IHtcblx0XHRcdCAgICAgICAgICAgdGhpcy5yb290SW5zdGFuY2UgPSB0aGlzLmNyZWF0ZUluc3RhbmNlKGNsYXNzTmFtZSk7XG5cdFx0ICAgICAgICAgICB9KTtcblx0fVxuXG5cdHB1YmxpYyBjcmVhdGVFdmVudChldmVudDogRXZlbnQpOiBJbnN0YW5jZSB7XG5cdFx0cmV0dXJuIGx5cmFFdmVudENsYXNzRGVmLmNvbnN0cnVjdE5hdGl2ZUluc3RhbmNlKFtldmVudF0pO1xuXHR9XG5cblx0cHVibGljIGNyZWF0ZUV2ZW50SGFuZGxlcihoYW5kbGVyOiBMYW1iZGFGdW5jdGlvbkNhbGwsIGV2ZW50TmFtZTogc3RyaW5nKTogKGV2ZW50OiBFdmVudCkgPT4gdm9pZCB7XG5cdFx0cmV0dXJuIChldmVudDogRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdHRoaXMuZ2xvYmFsRXZlbnRQaXBlbGluZS5lbWl0KFxuXHRcdFx0XHRldmVudE5hbWUsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpbnZva2U6ICgpOiBhbnkgPT4ge1xuXHRcdFx0XHRcdFx0aGFuZGxlci5ldmFsQ2FsbCh0aGlzLmNyZWF0ZUV2ZW50KGV2ZW50KSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRldmVudFxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH07XG5cdH1cblxuXG5cdHByaXZhdGUgZ2V0Q2xhc3NEZWZpbml0aW9uKGNsYXNzTmFtZTogc3RyaW5nKTogQ2xhc3NEZWZpbml0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5fZ2xvYmFsT2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQoY2xhc3NOYW1lKTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge3R5cGUgVk5vZGV9IGZyb20gXCIuLi9jb3JlL3Zkb20vdmRvbVwiO1xuaW1wb3J0IHR5cGUge0luc3RhbmNlfSBmcm9tIFwiLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5cbmV4cG9ydCBjbGFzcyBFdmVudEhhbmRsZXJSZWdpc3RyeSB7XG5cdHByaXZhdGUgcmVnaXN0cnk6IFdlYWtNYXA8SFRNTEVsZW1lbnQsIFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uPj4gPSBuZXcgV2Vha01hcDxIVE1MRWxlbWVudCwgUmVjb3JkPHN0cmluZywgRnVuY3Rpb24+PigpO1xuXG5cdHB1YmxpYyByZWdpc3RlcihlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcGVydHlLZXk6IHN0cmluZywgaGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcblx0XHRjb25zdCBldmVudEhhbmRsZXJzOiBSZWNvcmQ8c3RyaW5nLCBGdW5jdGlvbj4gPSB0aGlzLnJlZ2lzdHJ5LmdldChlbGVtZW50KSA/PyB7fTtcblxuXHRcdGV2ZW50SGFuZGxlcnNbcHJvcGVydHlLZXldID0gaGFuZGxlcjtcblxuXHRcdHRoaXMucmVnaXN0cnkuc2V0KGVsZW1lbnQsIGV2ZW50SGFuZGxlcnMpO1xuXHR9XG5cblx0cHVibGljIHVucmVnaXN0ZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIHByb3BlcnR5S2V5OiBzdHJpbmcpOiBGdW5jdGlvbiB8IG51bGwge1xuXHRcdGNvbnN0IGV2ZW50SGFuZGxlcnM6IFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uPiA9IHRoaXMucmVnaXN0cnkuZ2V0KGVsZW1lbnQpID8/IHt9O1xuXG5cdFx0Y29uc3QgZXZlbnRIYW5kbGVyOiBGdW5jdGlvbiB8IHVuZGVmaW5lZCA9IGV2ZW50SGFuZGxlcnNbcHJvcGVydHlLZXldO1xuXHRcdGlmIChldmVudEhhbmRsZXIpIHtcblx0XHRcdGRlbGV0ZSBldmVudEhhbmRsZXJzW3Byb3BlcnR5S2V5XTtcblxuXHRcdFx0dGhpcy5yZWdpc3RyeS5zZXQoZWxlbWVudCwgZXZlbnRIYW5kbGVycyk7XG5cblx0XHRcdHJldHVybiBldmVudEhhbmRsZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFZET00ge1xuXHRwcml2YXRlIGluc3RhbmNlTWFwOiBNYXA8c3RyaW5nLCBWTm9kZT4gPSBuZXcgTWFwPHN0cmluZywgVk5vZGU+KCk7XG5cblx0cHVibGljIHJlZ2lzdGVyKGluc3RhbmNlOiBJbnN0YW5jZSwgbm9kZTogVk5vZGUpOiB2b2lkIHtcblx0XHR0aGlzLmluc3RhbmNlTWFwLnNldChpbnN0YW5jZS5pZCwgbm9kZSk7XG5cdH1cblxuXHRwdWJsaWMgdW5yZWdpc3RlcihpbnN0YW5jZTogSW5zdGFuY2UpOiB2b2lkIHtcblx0XHR0aGlzLmluc3RhbmNlTWFwLmRlbGV0ZShpbnN0YW5jZS5pZCk7XG5cdH1cblxuXHRwdWJsaWMgZmluZE5vZGVCeUNvbXBvbmVudChpbnN0YW5jZTogSW5zdGFuY2UpOiBWTm9kZSB7XG5cdFx0Y29uc3Qgdk5vZGU6IFZOb2RlIHwgdW5kZWZpbmVkID0gdGhpcy5pbnN0YW5jZU1hcC5nZXQoaW5zdGFuY2UuaWQpO1xuXHRcdGlmICghdk5vZGUpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgSW5zdGFuY2Ugd2l0aCBpZCAke2luc3RhbmNlLmlkfSBub3QgZm91bmQuYCk7XG5cdFx0fVxuXHRcdHJldHVybiB2Tm9kZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge3R5cGUgRW5naW5lLCBXZWJMeXJhU2NyaXB0fSBmcm9tIFwiLi9lbmdpbmVcIjtcbmltcG9ydCB7dHlwZSBFbGVtZW50UGF0Y2hlciwgSFRNTEVsZW1lbnRQYXRjaGVyfSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCB0eXBlIHtWQ2hpbGR9IGZyb20gXCIuLi9jb3JlL3Zkb20vdmRvbVwiO1xuaW1wb3J0IHtFdmVudFBpcGVsaW5lfSBmcm9tIFwiLi4vY29yZS9ldmVudC9waXBlbGluZVwiO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcbmltcG9ydCB7dHlwZSBJbnN0YW5jZX0gZnJvbSBcIi4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtMYW1iZGFGdW5jdGlvbkNhbGx9IGZyb20gXCIuLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX3J1bnRpbWVcIjtcbmltcG9ydCB7RXZlbnRIYW5kbGVyUmVnaXN0cnksIFZET019IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5pbXBvcnQgTHlyYUV2ZW50cyBmcm9tIFwiLi4vY29yZS9ldmVudC9ldmVudHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBcHBsaWNhdGlvblJ1bnRpbWUge1xuXHRnZXQgZW5naW5lKCk6IEVuZ2luZTtcblxuXHRnZXQgZXZlbnRQaXBlbGluZSgpOiBFdmVudFBpcGVsaW5lO1xuXG5cdHN0YXJ0KHVybDogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG5cblx0Y3JlYXRlSW5zdGFuY2UoY2xhc3NOYW1lOiBzdHJpbmcpOiBJbnN0YW5jZTtcblxuXHRjYWxsUm9vdEluc3RhbmNlTWV0aG9kKG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10pOiBhbnk7XG5cblx0Y2FsbE1ldGhvZChpbnN0YW5jZTogSW5zdGFuY2UsIG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10pOiBhbnk7XG5cblx0cmVuZGVyQ29tcG9uZW50KGluc3RhbmNlOiBJbnN0YW5jZSk6IFZDaGlsZDtcblxuXHRhZGRFdmVudEhhbmRsZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIHByb3BlcnR5S2V5OiBzdHJpbmcsIGhhbmRsZXI6IExhbWJkYUZ1bmN0aW9uQ2FsbCk6IHZvaWQ7XG5cblx0cmVtb3ZlRXZlbnRIYW5kbGVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwcm9wZXJ0eUtleTogc3RyaW5nKTogdm9pZDtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0QXBwbGljYXRpb25SdW50aW1lIGltcGxlbWVudHMgQXBwbGljYXRpb25SdW50aW1lIHtcblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgX2VuZ2luZTogRW5naW5lLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgX2V2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUgPSBuZXcgRXZlbnRQaXBlbGluZSgpLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgZXZlbnRIYW5kbGVyUmVnaXN0cnk6IEV2ZW50SGFuZGxlclJlZ2lzdHJ5ID0gbmV3IEV2ZW50SGFuZGxlclJlZ2lzdHJ5KClcblx0KSB7XG5cdH1cblxuXHRnZXQgZW5naW5lKCk6IEVuZ2luZSB7XG5cdFx0cmV0dXJuIHRoaXMuX2VuZ2luZTtcblx0fVxuXG5cdGdldCBldmVudFBpcGVsaW5lKCk6IEV2ZW50UGlwZWxpbmUge1xuXHRcdHJldHVybiB0aGlzLl9ldmVudFBpcGVsaW5lO1xuXHR9XG5cblx0cHVibGljIHJlbmRlckNvbXBvbmVudChpbnN0YW5jZTogSW5zdGFuY2UpOiBWQ2hpbGQge1xuXHRcdHJldHVybiB0aGlzLmNhbGxNZXRob2QoaW5zdGFuY2UsICdyZW5kZXInLCBbXSkgYXMgVkNoaWxkXG5cdH1cblxuXHRwdWJsaWMgc3RhcnQodXJsOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG5cdH1cblxuXHRwdWJsaWMgY3JlYXRlSW5zdGFuY2UoY2xhc3NOYW1lOiBzdHJpbmcpOiBJbnN0YW5jZSB7XG5cdFx0cmV0dXJuIHRoaXMuX2VuZ2luZS5jcmVhdGVJbnN0YW5jZShjbGFzc05hbWUpO1xuXHR9XG5cblx0cHVibGljIGNhbGxSb290SW5zdGFuY2VNZXRob2QobWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSA9IFtdKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5fZW5naW5lLmNhbGxSb290SW5zdGFuY2VNZXRob2QobWV0aG9kTmFtZSwgYXJncyk7XG5cdH1cblxuXHRwdWJsaWMgY2FsbE1ldGhvZChpbnN0YW5jZTogSW5zdGFuY2UsIG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10gPSBbXSk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuX2VuZ2luZS5jYWxsSW5zdGFuY2VNZXRob2QoaW5zdGFuY2UsIG1ldGhvZE5hbWUsIGFyZ3MpO1xuXHR9XG5cblx0cHVibGljIGFkZEV2ZW50SGFuZGxlcihlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcGVydHlLZXk6IHN0cmluZywgaGFuZGxlcjogTGFtYmRhRnVuY3Rpb25DYWxsKTogdm9pZCB7XG5cdFx0Y29uc3QgZXZlbnROYW1lOiBzdHJpbmcgPSBwcm9wZXJ0eUtleS5zbGljZSgyKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcblxuXHRcdGNvbnN0IGV2ZW50SGFuZGxlcjogKGV2ZW50OiBFdmVudCkgPT4gdm9pZCA9IHRoaXMuZW5naW5lLmNyZWF0ZUV2ZW50SGFuZGxlcihoYW5kbGVyLCBFdmVudHMuRE9NX0VWRU5UKTtcblxuXHRcdHRoaXMuZXZlbnRIYW5kbGVyUmVnaXN0cnkucmVnaXN0ZXIoZWxlbWVudCwgcHJvcGVydHlLZXksIGV2ZW50SGFuZGxlcik7XG5cblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudEhhbmRsZXIpO1xuXHR9XG5cblx0cHVibGljIHJlbW92ZUV2ZW50SGFuZGxlcihlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcGVydHlLZXk6IHN0cmluZyk6IHZvaWQge1xuXHRcdGNvbnN0IGV2ZW50TmFtZTogc3RyaW5nID0gcHJvcGVydHlLZXkuc2xpY2UoMilcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRjb25zdCBldmVudEhhbmRsZXI6IEZ1bmN0aW9uIHwgbnVsbCA9IHRoaXMuZXZlbnRIYW5kbGVyUmVnaXN0cnkudW5yZWdpc3RlcihlbGVtZW50LCBwcm9wZXJ0eUtleSk7XG5cblx0XHRpZiAoZXZlbnRIYW5kbGVyKSB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudEhhbmRsZXIgYXMgRXZlbnRMaXN0ZW5lcik7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBXZWJBcHBsaWNhdGlvblJ1bnRpbWUgZXh0ZW5kcyBBYnN0cmFjdEFwcGxpY2F0aW9uUnVudGltZSB7XG5cdHByaXZhdGUgcmVhZG9ubHkgdmRvbTogVkRPTSA9IG5ldyBWRE9NKCk7XG5cdHByaXZhdGUgcmVhZG9ubHkgcGF0Y2hlcjogRWxlbWVudFBhdGNoZXI7XG5cblx0cHJpdmF0ZSBpc1JlbmRlcmluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdG1vdW50UG9pbnQ6IEhUTUxFbGVtZW50LFxuXHRcdGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSxcblx0XHRldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lID0gbmV3IEV2ZW50UGlwZWxpbmUoKSxcblx0XHRldmVudEhhbmRsZXJSZWdpc3RyeTogRXZlbnRIYW5kbGVyUmVnaXN0cnkgPSBuZXcgRXZlbnRIYW5kbGVyUmVnaXN0cnkoKVxuXHQpIHtcblx0XHRzdXBlcihuZXcgV2ViTHlyYVNjcmlwdChldmVudFBpcGVsaW5lLCBpc0RlYnVnKSwgZXZlbnRQaXBlbGluZSwgZXZlbnRIYW5kbGVyUmVnaXN0cnkpO1xuXG5cdFx0dGhpcy5wYXRjaGVyID0gbmV3IEhUTUxFbGVtZW50UGF0Y2hlcihtb3VudFBvaW50LCB0aGlzLCB0aGlzLnZkb20pO1xuXG5cdFx0dGhpcy5leHBvc2VSdW50aW1lKCk7XG5cdH1cblxuXHRwdWJsaWMgb3ZlcnJpZGUgYXN5bmMgc3RhcnQodXJsOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nID0gJ1Byb2dyYW0nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0YXdhaXQgdGhpcy5lbmdpbmUuZXhlY3V0ZUVudHJ5RmlsZSh1cmwsIGNsYXNzTmFtZSk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKTtcblxuXHRcdHRoaXMucmVxdWVzdENvbXBvbmVudFJlbmRlcih0aGlzLmVuZ2luZS5nZXRSb290SW5zdGFuY2UoKSk7XG5cdH1cblxuXG5cdHB1YmxpYyByZXF1ZXN0Q29tcG9uZW50UmVuZGVyKGluc3RhbmNlOiBJbnN0YW5jZSwgb2xkQ2hpbGQ/OiBWQ2hpbGQpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pc1JlbmRlcmluZykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHF1ZXVlTWljcm90YXNrKCgpOiB2b2lkID0+IHRoaXMucGVyZm9ybUNvbXBvbmVudFJlbmRlcihpbnN0YW5jZSwgb2xkQ2hpbGQpKTtcblx0fVxuXG5cdHByaXZhdGUgcGVyZm9ybUNvbXBvbmVudFJlbmRlcihpbnN0YW5jZTogSW5zdGFuY2UsIG9sZENoaWxkOiBWQ2hpbGQgfCBudWxsID0gbnVsbCk6IHZvaWQge1xuXHRcdHRoaXMuaXNSZW5kZXJpbmcgPSB0cnVlO1xuXG5cdFx0Y29uc3QgbmV4dENoaWxkOiBWQ2hpbGQgPSB0aGlzLnJlbmRlckNvbXBvbmVudChpbnN0YW5jZSk7XG5cblx0XHR0aGlzLnBhdGNoZXIucGF0Y2gob2xkQ2hpbGQsIG5leHRDaGlsZCk7XG5cblx0XHR0aGlzLnZkb20ucmVnaXN0ZXIoaW5zdGFuY2UsIG5leHRDaGlsZCk7XG5cblx0XHRpbnN0YW5jZS5tYXJrQ2xlYW4odGhpcy5ldmVudFBpcGVsaW5lKTtcblxuXHRcdHRoaXMuaXNSZW5kZXJpbmcgPSBmYWxzZTtcblx0fVxuXG5cdHByaXZhdGUgcmVnaXN0ZXJFdmVudExpc3RlbmVycygpOiB2b2lkIHtcblx0XHR0aGlzLmV2ZW50UGlwZWxpbmVcblx0XHQgICAgLm9uKEV2ZW50cy5ET01fRVZFTlQsICh7aW52b2tlfTogYW55KTogdm9pZCA9PiB7XG5cdFx0XHQgICAgaW52b2tlKCk7XG5cdFx0ICAgIH0pO1xuXG5cdFx0dGhpcy5ldmVudFBpcGVsaW5lXG5cdFx0ICAgIC5vbihMeXJhRXZlbnRzLkxZUkFfSU5TVEFOQ0VfRElSVFlfU1RBVEUsICh7aW5zdGFuY2V9OiBhbnkpOiB2b2lkID0+IHtcblx0XHRcdCAgICB0aGlzLnJlcXVlc3RDb21wb25lbnRSZW5kZXIoaW5zdGFuY2UsIHRoaXMudmRvbS5maW5kTm9kZUJ5Q29tcG9uZW50KGluc3RhbmNlKSBhcyBWQ2hpbGQpO1xuXHRcdCAgICB9KTtcblx0fVxuXG5cdHByaXZhdGUgZXhwb3NlUnVudGltZSgpOiB2b2lkIHtcblx0XHRjb25zdCBnbG9iYWw6IGFueSA9IHdpbmRvdyBhcyBXaW5kb3c7XG5cblx0XHRnbG9iYWwuX19MWVJBX18gPSBnbG9iYWwuX19MWVJBX18gfHwge1xuXHRcdFx0dmVyc2lvbjogJzAuMC4xJyxcblx0XHRcdHJ1bnRpbWU6IHRoaXMsXG5cdFx0fTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge09wY29kZXN9IGZyb20gXCIuL29wY29kZXMudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc2Fzc2VtYmxlKGJ5dGVjb2RlOiBudW1iZXJbXSk6IHZvaWQge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGJ5dGVjb2RlLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3Qgb3AgPSBieXRlY29kZVtpXTtcblxuXHRcdHN3aXRjaCAob3ApIHtcblx0XHRcdGNhc2UgT3Bjb2Rlcy5MT0FEX0NPTlNUOlxuXHRcdFx0XHRjb25zb2xlLmxvZygnTE9BRF9DT05TVCcsIGJ5dGVjb2RlWysraV0pO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBPcGNvZGVzLkxPQURfVkFSOlxuXHRcdFx0XHRjb25zb2xlLmxvZygnTE9BRF9WQVInLCBieXRlY29kZVsrK2ldKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgT3Bjb2Rlcy5TVE9SRV9WQVI6XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdTVE9SRV9WQVInLCBieXRlY29kZVsrK2ldKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgT3Bjb2Rlcy5MT0FEX1RISVM6XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdMT0FEX1RISVMnKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgT3Bjb2Rlcy5HRVRfRklFTEQ6XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdHRVRfRklFTEQnLCBieXRlY29kZVsrK2ldKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgT3Bjb2Rlcy5BREQ6XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdBREQnKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgT3Bjb2Rlcy5SRVRVUk46XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdSRVRVUk4nKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdVTktOT1dOJywgb3ApO1xuXHRcdH1cblx0fVxufVxuIiwKICAgICJpbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4vY29yZS9wYXJzZXIvcGFyc2VyXCI7XG5pbXBvcnQge3dyYXBKc0Vycm9yfSBmcm9tIFwiLi9jb3JlL2Vycm9yc1wiO1xuaW1wb3J0IHtmZXRjaFNvdXJjZSwgU291cmNlfSBmcm9tIFwiLi9jb3JlL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5pbXBvcnQge0FTVE5vZGV9IGZyb20gXCIuL2NvcmUvYXN0XCI7XG5pbXBvcnQge1Rva2VuaXplcn0gZnJvbSBcIi4vY29yZS90b2tlbml6ZXIvdG9rZW5pemVyXCI7XG5pbXBvcnQge1Rva2VufSBmcm9tIFwiLi9jb3JlL2dyYW1tYXJcIjtcbmltcG9ydCB7THlyYVNjcmlwdFByb2dyYW19IGZyb20gXCIuL2NvcmUvcHJvZ3JhbVwiO1xuaW1wb3J0IHtFdmVudFBpcGVsaW5lfSBmcm9tIFwiLi9jb3JlL2V2ZW50L3BpcGVsaW5lXCI7XG5pbXBvcnQge1N0YXRlfSBmcm9tIFwiLi9jb3JlL2V2ZW50L3N0YXRlXCI7XG5pbXBvcnQge0hUTUxFbGVtZW50Q3JlYXRvcn0gZnJvbSBcIi4vaG9zdC9kb21cIjtcbmltcG9ydCB0eXBlIHtCeXRlY29kZX0gZnJvbSBcIi4vY29yZS92aXJ0dWFsbWFjaGluZS9vcGNvZGVzLnRzXCI7XG5cblxuZXhwb3J0IHtXZWJMeXJhU2NyaXB0fSBmcm9tIFwiLi9ob3N0L2VuZ2luZVwiO1xuZXhwb3J0IHtXZWJBcHBsaWNhdGlvblJ1bnRpbWV9IGZyb20gXCIuL2hvc3QvcnVudGltZVwiO1xuZXhwb3J0IHtkaXNhc3NlbWJsZX0gZnJvbSAnLi9jb3JlL3ZpcnR1YWxtYWNoaW5lL2Rpc2Fzc2VtYmxlci50cyc7XG5cbmNvbnN0IEx5cmEgPSB7XG5cdFNvdXJjZSxcblx0UGFyc2VyLFxuXHRUb2tlbml6ZXIsXG5cdEV2ZW50UGlwZWxpbmUsXG5cdEhUTUxFbGVtZW50Q3JlYXRvcixcblx0U3RhdGUsXG5cdFByb2dyYW06IChpc0RlYnVnOiBib29sZWFuKTogTHlyYVNjcmlwdFByb2dyYW0gPT4gUHJvZ3JhbShpc0RlYnVnKSxcblx0ZXhlY3V0ZTogKHNvdXJjZTogU291cmNlLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+ID0+IGV4ZWN1dGUoc291cmNlLCBpc0RlYnVnKSxcblx0ZXhlY3V0ZUZyb21TdHJpbmc6IChjb2RlOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4gPT4gZXhlY3V0ZUZyb21TdHJpbmcoY29kZSwgaXNEZWJ1ZyksXG5cdGV4ZWN1dGVGcm9tVXJsOiBhc3luYyAodXJsOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4gPT4gZXhlY3V0ZUZyb21VcmwodXJsLCBpc0RlYnVnKSxcblx0ZXhlY3V0ZVRlc3Q6IChzb3VyY2U6IFNvdXJjZSwgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiBleGVjdXRlVGVzdChzb3VyY2UsIGlzRGVidWcpLFxuXHRleGVjdXRlVGVzdFN0cmluZzogKGNvZGU6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiBleGVjdXRlVGVzdFN0cmluZyhjb2RlLCBpc0RlYnVnKSxcblx0ZXhlY3V0ZVRlc3RVcmw6ICh1cmw6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiBleGVjdXRlVGVzdFVybCh1cmwsIGlzRGVidWcpLFxuXHRjb21waWxlU291cmNlOiAoc291cmNlOiBTb3VyY2UsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8Qnl0ZWNvZGVbXT4gPT4gY29tcGlsZVNvdXJjZShzb3VyY2UsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVidWcpLFxuXHRjb21waWxlRnJvbVVybDogKHVybDogc3RyaW5nLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPEJ5dGVjb2RlW10+ID0+IGNvbXBpbGVGcm9tVXJsKHVybCwgaXNEZWJ1ZyksXG5cdGV4ZWN1dGVCeXRlY29kZTogKGJ5dGVjb2RlOiBCeXRlY29kZVtdLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiB2b2lkID0+IGV4ZWN1dGVCeXRlY29kZShieXRlY29kZSwgaXNEZWJ1ZyksXG5cdHRva2VuaXplOiAoc291cmNlOiBTb3VyY2UpOiBUb2tlbltdID0+IHRva2VuaXplKHNvdXJjZSksXG5cdHRva2VuaXplVXJsOiAodXJsOiBzdHJpbmcpOiBQcm9taXNlPFRva2VuW10+ID0+IHRva2VuaXplVXJsKHVybCksXG5cdHBhcnNlVHJlZTogKHNvdXJjZTogU291cmNlKTogQVNUTm9kZSA9PiBwYXJzZVRyZWUoc291cmNlKSxcblx0cGFyc2VUcmVlVXJsOiAodXJsOiBzdHJpbmcpOiBQcm9taXNlPEFTVE5vZGU+ID0+IHBhcnNlVHJlZVVybCh1cmwpLFxufTtcblxuZnVuY3Rpb24gUHJvZ3JhbShpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBMeXJhU2NyaXB0UHJvZ3JhbSB7XG5cdHJldHVybiBuZXcgTHlyYVNjcmlwdFByb2dyYW0oaXNEZWJ1Zyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGUoc291cmNlOiBTb3VyY2UsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBQcm9ncmFtKGlzRGVidWcpXG5cdFx0XHQuZXhlY3V0ZVNvdXJjZShzb3VyY2UpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKHdyYXBKc0Vycm9yKGVycm9yLCBzb3VyY2UpXG5cdFx0XHRcdCAgICAgICAgICAgICAgLmZvcm1hdCgpKTtcblx0XHR9XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gY29tcGlsZVNvdXJjZShzb3VyY2U6IFNvdXJjZSwgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTxCeXRlY29kZVtdPiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IFByb2dyYW0oaXNEZWJ1Zylcblx0XHRcdC5jb21waWxlU291cmNlKHNvdXJjZSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3Iod3JhcEpzRXJyb3IoZXJyb3IsIHNvdXJjZSlcblx0XHRcdFx0ICAgICAgICAgICAgICAuZm9ybWF0KCkpO1xuXHRcdH1cblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBjb21waWxlRnJvbVVybCh1cmw6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTxCeXRlY29kZVtdPiB7XG5cdHJldHVybiBhd2FpdCBjb21waWxlU291cmNlKGF3YWl0IGZldGNoU291cmNlKHVybCksIGlzRGVidWcpO1xufVxuXG5mdW5jdGlvbiBleGVjdXRlQnl0ZWNvZGUoYnl0ZWNvZGU6IEJ5dGVjb2RlW10sIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuXHRQcm9ncmFtKGlzRGVidWcpXG5cdFx0LmV4ZWN1dGVCeXRlY29kZShieXRlY29kZSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVGcm9tVXJsKHVybDogc3RyaW5nLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0cmV0dXJuIGF3YWl0IGV4ZWN1dGUoYXdhaXQgZmV0Y2hTb3VyY2UodXJsKSwgaXNEZWJ1Zyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVGcm9tU3RyaW5nKGNvZGU6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHNvdXJjZSA9IG5ldyBTb3VyY2UoY29kZSk7XG5cblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgUHJvZ3JhbShpc0RlYnVnKVxuXHRcdFx0LmV4ZWN1dGVTb3VyY2Uoc291cmNlKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcih3cmFwSnNFcnJvcihlcnJvciwgc291cmNlKVxuXHRcdFx0XHQgICAgICAgICAgICAgIC5mb3JtYXQoKSk7XG5cdFx0fVxuXHRcdHRocm93IGVycm9yO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVUZXN0KHNvdXJjZTogU291cmNlLCBpc0RlYnVnID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgUHJvZ3JhbShpc0RlYnVnKVxuXHRcdFx0LmV4ZWN1dGVUZXN0KHNvdXJjZSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3Iod3JhcEpzRXJyb3IoZXJyb3IsIHNvdXJjZSlcblx0XHRcdFx0ICAgICAgICAgICAgICAuZm9ybWF0KCkpO1xuXHRcdH1cblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlVGVzdFVybCh1cmw6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdHJldHVybiBhd2FpdCBleGVjdXRlVGVzdChhd2FpdCBmZXRjaFNvdXJjZSh1cmwpLCBpc0RlYnVnKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZVRlc3RTdHJpbmcoY29kZTogc3RyaW5nLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgc291cmNlID0gbmV3IFNvdXJjZShjb2RlKTtcblxuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBQcm9ncmFtKGlzRGVidWcpXG5cdFx0XHQuZXhlY3V0ZVRlc3Qoc291cmNlKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcih3cmFwSnNFcnJvcihlcnJvciwgc291cmNlKVxuXHRcdFx0XHQgICAgICAgICAgICAgIC5mb3JtYXQoKSk7XG5cdFx0fVxuXHRcdHRocm93IGVycm9yO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbml6ZShzb3VyY2U6IFNvdXJjZSk6IFRva2VuW10ge1xuXHRyZXR1cm4gbmV3IFRva2VuaXplcihzb3VyY2UpLnRva2VuaXplKCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0b2tlbml6ZVVybCh1cmw6IHN0cmluZyk6IFByb21pc2U8VG9rZW5bXT4ge1xuXHRyZXR1cm4gdG9rZW5pemUoYXdhaXQgZmV0Y2hTb3VyY2UodXJsKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRyZWUoc291cmNlOiBTb3VyY2UpOiBBU1ROb2RlIHtcblx0cmV0dXJuIG5ldyBQYXJzZXIoc291cmNlKS5wYXJzZSgpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGFyc2VUcmVlVXJsKHVybDogc3RyaW5nKTogUHJvbWlzZTxBU1ROb2RlPiB7XG5cdHJldHVybiBwYXJzZVRyZWUoYXdhaXQgZmV0Y2hTb3VyY2UodXJsKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEx5cmE7XG4iCiAgXSwKICAibWFwcGluZ3MiOiAiO0FBRU8sTUFBTSxRQUFRO0FBQUEsU0FDYixTQUFpQjtBQUFBLFNBQ2pCLE9BQWU7QUFBQSxTQUNmLE1BQWM7QUFBQSxTQUNkLE9BQWU7QUFBQSxTQUNmLFFBQWdCO0FBQUEsU0FDaEIsWUFBb0I7QUFBQSxTQUNwQixVQUFrQjtBQUFBLFNBQ2xCLGFBQXFCO0FBQUEsU0FDckIsY0FBc0I7QUFBQSxTQUN0QixXQUFtQjtBQUFBLFNBQ25CLE1BQWM7QUFBQSxTQUNkLE9BQWU7QUFBQSxTQUNmLFNBQWlCO0FBQUEsU0FDakIsVUFBa0I7QUFBQSxTQUNsQixTQUFpQjtBQUFBLFNBQ2pCLFdBQW1CO0FBQUEsU0FDbkIsU0FBaUI7QUFBQSxTQUNqQixRQUFnQjtBQUFBLFNBQ2hCLE9BQWU7QUFBQSxTQUNmLFFBQWdCO0FBQUEsU0FDaEIsS0FBYTtBQUFBLFNBQ2IsT0FBZTtBQUFBLFNBQ2YsUUFBZ0I7QUFBQSxTQUNoQixVQUFrQjtBQUFBLFNBQ2xCLFVBQWtCO0FBQUEsU0FDbEIsS0FBYTtBQUFBLFNBQ2IsT0FBZTtBQUFBLFNBQ2YsT0FBZTtBQUFBLFNBRWYsc0JBQThCO0FBQUEsU0FDOUIsdUJBQStCO0FBQUEsU0FDL0IsYUFBcUI7QUFBQSxTQUNyQixjQUFzQjtBQUFBLFNBQ3RCLG1CQUEyQjtBQUFBLFNBQzNCLG9CQUE0QjtBQUFBLFNBQzVCLFlBQW9CO0FBQUEsU0FDcEIsUUFBZ0I7QUFBQSxTQUNoQixRQUFnQjtBQUFBLFNBRWhCLFFBQWdCO0FBQUEsU0FDaEIsTUFBYztBQUFBLFNBQ2QsU0FBaUI7QUFBQSxTQUNqQixPQUFlO0FBQUEsU0FDZixRQUFnQjtBQUFBLFNBQ2hCLFNBQWlCO0FBQUEsU0FDakIsV0FBbUI7QUFBQSxTQUNuQixVQUFrQjtBQUFBLFNBRWxCLGFBQXFCO0FBQUEsU0FDckIsY0FBc0I7QUFBQSxTQUN0QixtQkFBMkI7QUFBQSxTQUMzQixnQkFBd0I7QUFBQSxTQUN4QixZQUFvQjtBQUFBLFNBQ3BCLGVBQXVCO0FBQUEsU0FDdkIsYUFBcUI7QUFBQSxTQUNyQixnQkFBd0I7QUFBQSxTQUN4QixRQUFnQjtBQUFBLFNBQ2hCLFlBQW9CO0FBQUEsU0FDcEIsTUFBYztBQUFBLFNBQ2QsS0FBYTtBQUFBLFNBRWIsZ0JBQXdCO0FBQUEsU0FDeEIscUJBQTZCO0FBQUEsU0FFN0IsV0FBcUI7QUFBQSxJQUMzQixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsRUFDVDtBQUFBLFNBQ08sYUFBdUI7QUFBQSxJQUM3QixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsRUFDVDtBQUFBLFNBQ08sYUFBdUI7QUFBQSxJQUM3QixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsRUFDVDtBQUFBLFNBQ08sV0FBcUI7QUFBQSxJQUMzQixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsRUFDVDtBQUFBLFNBQ08sVUFBb0I7QUFBQSxJQUMxQixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsRUFDVDtBQUFBLFNBQ08sWUFBc0I7QUFBQSxJQUM1QixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEs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QUFjLFVBQW1CLE9BQXNCO0FBQUEsRUFDdkYsTUFBTSxTQUFTLElBQUksT0FBTyxJQUFJO0FBQUEsRUFFOUIsSUFBSTtBQUFBLElBQ0gsT0FBTyxNQUFNLFFBQVEsT0FBTyxFQUMxQixZQUFZLE1BQU07QUFBQSxJQUNuQixPQUFPLE9BQU87QUFBQSxJQUNmLElBQUksaUJBQWlCLE9BQU87QUFBQSxNQUMzQixRQUFRLE1BQU0sWUFBWSxPQUFPLE1BQU0sRUFDdkIsT0FBTyxDQUFDO0FBQUEsSUFDekI7QUFBQSxJQUNBLE1BQU07QUFBQTtBQUFBO0FBSUQsU0FBUyxRQUFRLENBQUMsUUFBeUI7QUFBQSxFQUNqRCxPQUFPLElBQUksVUFBVSxNQUFNLEVBQUUsU0FBUztBQUFBO0FBR3ZDLGVBQXNCLFdBQVcsQ0FBQyxLQUErQjtBQUFBLEVBQ2hFLE9BQU8sU0FBUyxNQUFNLFlBQVksR0FBRyxDQUFDO0FBQUE7QUFHaEMsU0FBUyxTQUFTLENBQUMsUUFBeUI7QUFBQSxFQUNsRCxPQUFPLElBQUksT0FBTyxNQUFNLEVBQUUsTUFBTTtBQUFBO0FBR2pDLGVBQXNCLFlBQVksQ0FBQyxLQUErQjtBQUFBLEVBQ2pFLE9BQU8sVUFBVSxNQUFNLFlBQVksR0FBRyxDQUFDO0FBQUE7QUFHeEMsSUFBZTsiLAogICJkZWJ1Z0lkIjogIjczOEVBNDgyQUExNENGMTQ2NDc1NkUyMTY0NzU2RTIxIiwKICAibmFtZXMiOiBbXQp9
