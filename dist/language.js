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

//# debugId=D0D9C73B209430D764756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibGFuZ3VhZ2Uvc3JjL2NvcmUvZ3JhbW1hci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9hc3QudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvdG9rZW5pemVyL3Rva2VuaXplci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9lcnJvcnMudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvbmF0aXZlX2NsYXNzLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX2NvbnZlcnNpb24udHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9zdHJpbmcudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9zeXN0ZW0udHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9hc3NlcnQudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9udW1iZXIudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9hcnJheS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9ldmVudC9zdGF0ZS50cyIsICJsYW5ndWFnZS9zcmMvbGlicmFyeS9jbGFzc2VzL3N0YXRlLnRzIiwgImxhbmd1YWdlL3NyYy9saWJyYXJ5L2NsYXNzZXMvZXZlbnQudHMiLCAibGFuZ3VhZ2Uvc3JjL2xpYnJhcnkvY2xhc3Nlcy9ib29sZWFuLnRzIiwgImxhbmd1YWdlL3NyYy9saWJyYXJ5L25hdGl2ZV9jbGFzc2VzLnRzIiwgImxhbmd1YWdlL3NyYy9saWJyYXJ5L25hdGl2ZV9mdW5jdGlvbnMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvdHlwZXMvdHlwZV9vYmplY3RzLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL3R5cGVzL2F1dG9ib3hpbmcudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcnVudGltZS50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9ldmVudC9ldmVudHMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0cy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9wYXJzZXIvcGFyc2VyX3N0YXRtZW50cy50cyIsICJsYW5ndWFnZS9zcmMvY29yZS9wYXJzZXIvcGFyc2VyLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5LnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL3R5cGVzL3R5cGVjaGVja2VyLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2xpbmtlci9kZXBlbmRlbmNpZXMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvbGlua2VyL2xpbmtlci50cyIsICJsYW5ndWFnZS9zcmMvY29yZS90ZXN0cy90ZXN0c3VpdGVzLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyLnRzIiwgImxhbmd1YWdlL3NyYy9jb3JlL2xvYWRlcnMudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvZXZlbnQvcGlwZWxpbmUudHMiLCAibGFuZ3VhZ2Uvc3JjL2NvcmUvcHJvZ3JhbS50cyIsICJsYW5ndWFnZS9zcmMvaG9zdC9ldmVudHMudHMiLCAibGFuZ3VhZ2Uvc3JjL2hvc3QvZG9tLnRzIiwgImxhbmd1YWdlL3NyYy9ob3N0L2VuZ2luZS50cyIsICJsYW5ndWFnZS9zcmMvaG9zdC9yZWdpc3RyeS50cyIsICJsYW5ndWFnZS9zcmMvaG9zdC9ydW50aW1lLnRzIiwgImxhbmd1YWdlL3NyYy9pbmRleC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICJpbXBvcnQgdHlwZSB7U291cmNlfSBmcm9tIFwiLi9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5leHBvcnQgY2xhc3MgR1JBTU1BUiB7XG5cdHN0YXRpYyBJTVBPUlQ6IHN0cmluZyA9ICdpbXBvcnQnO1xuXHRzdGF0aWMgRlJPTTogc3RyaW5nID0gJ2Zyb20nO1xuXHRzdGF0aWMgTEVUOiBzdHJpbmcgPSAnbGV0Jztcblx0c3RhdGljIE9QRU46IHN0cmluZyA9ICdvcGVuJztcblx0c3RhdGljIENMQVNTOiBzdHJpbmcgPSAnY2xhc3MnO1xuXHRzdGF0aWMgSU5URVJGQUNFOiBzdHJpbmcgPSAnaW50ZXJmYWNlJztcblx0c3RhdGljIEVYVEVORFM6IHN0cmluZyA9ICdleHRlbmRzJztcblx0c3RhdGljIElNUExFTUVOVFM6IHN0cmluZyA9ICdpbXBsZW1lbnRzJztcblx0c3RhdGljIENPTlNUUlVDVE9SOiBzdHJpbmcgPSAnY29uc3RydWN0b3InO1xuXHRzdGF0aWMgT1BFUkFUT1I6IHN0cmluZyA9ICdvcGVyYXRvcic7XG5cdHN0YXRpYyBORVc6IHN0cmluZyA9ICduZXcnO1xuXHRzdGF0aWMgVEhJUzogc3RyaW5nID0gJ3RoaXMnO1xuXHRzdGF0aWMgUFVCTElDOiBzdHJpbmcgPSAncHVibGljJztcblx0c3RhdGljIFBSSVZBVEU6IHN0cmluZyA9ICdwcml2YXRlJztcblx0c3RhdGljIFNUQVRJQzogc3RyaW5nID0gJ3N0YXRpYyc7XG5cdHN0YXRpYyBSRUFET05MWTogc3RyaW5nID0gJ3JlYWRvbmx5Jztcblx0c3RhdGljIFJFVFVSTjogc3RyaW5nID0gJ3JldHVybic7XG5cdHN0YXRpYyBTVVBFUjogc3RyaW5nID0gJ3N1cGVyJztcblx0c3RhdGljIFRSVUU6IHN0cmluZyA9ICd0cnVlJztcblx0c3RhdGljIEZBTFNFOiBzdHJpbmcgPSAnZmFsc2UnO1xuXHRzdGF0aWMgSUY6IHN0cmluZyA9ICdpZic7XG5cdHN0YXRpYyBFTFNFOiBzdHJpbmcgPSAnZWxzZSc7XG5cdHN0YXRpYyBNQVRDSDogc3RyaW5nID0gJ21hdGNoJztcblx0c3RhdGljIERFRkFVTFQ6IHN0cmluZyA9ICdkZWZhdWx0Jztcblx0c3RhdGljIEZPUkVBQ0g6IHN0cmluZyA9ICdmb3JlYWNoJztcblx0c3RhdGljIElOOiBzdHJpbmcgPSAnaW4nO1xuXHRzdGF0aWMgTlVMTDogc3RyaW5nID0gJ251bGwnO1xuXHRzdGF0aWMgVkRPTTogc3RyaW5nID0gJ3Zkb20nO1xuXG5cdHN0YXRpYyBCUkFDS0VUX1NRVUFSRV9PUEVOOiBzdHJpbmcgPSAnWyc7XG5cdHN0YXRpYyBCUkFDS0VUX1NRVUFSRV9DTE9TRTogc3RyaW5nID0gJ10nO1xuXHRzdGF0aWMgQlJBQ0VfT1BFTjogc3RyaW5nID0gJ3snO1xuXHRzdGF0aWMgQlJBQ0VfQ0xPU0U6IHN0cmluZyA9ICd9Jztcblx0c3RhdGljIFBBUkVOVEhFU0VTX09QRU46IHN0cmluZyA9ICcoJztcblx0c3RhdGljIFBBUkVOVEhFU0VTX0NMT1NFOiBzdHJpbmcgPSAnKSc7XG5cdHN0YXRpYyBTRU1JQ09MT046IHN0cmluZyA9ICc7Jztcblx0c3RhdGljIENPTE9OOiBzdHJpbmcgPSAnOic7XG5cdHN0YXRpYyBDT01NQTogc3RyaW5nID0gJywnO1xuXG5cdHN0YXRpYyBBUlJPVzogc3RyaW5nID0gJy0+Jztcblx0c3RhdGljIERPVDogc3RyaW5nID0gJy4nO1xuXHRzdGF0aWMgQVNTSUdOOiBzdHJpbmcgPSAnPSc7XG5cdHN0YXRpYyBQTFVTOiBzdHJpbmcgPSAnKyc7XG5cdHN0YXRpYyBNSU5VUzogc3RyaW5nID0gJy0nO1xuXHRzdGF0aWMgRElWSURFOiBzdHJpbmcgPSAnLyc7XG5cdHN0YXRpYyBNVUxUSVBMWTogc3RyaW5nID0gJyonO1xuXHRzdGF0aWMgTU9EVUxVUzogc3RyaW5nID0gJyUnO1xuXG5cdHN0YXRpYyBVTkFSWV9QTFVTOiBzdHJpbmcgPSAndSsnO1xuXHRzdGF0aWMgVU5BUllfTUlOVVM6IHN0cmluZyA9ICd1LSc7XG5cdHN0YXRpYyBFWENMQU1BVElPTl9NQVJLOiBzdHJpbmcgPSAnISc7XG5cdHN0YXRpYyBRVUVTVElPTl9NQVJLOiBzdHJpbmcgPSAnPyc7XG5cdHN0YXRpYyBMRVNTX1RIQU46IHN0cmluZyA9ICc8Jztcblx0c3RhdGljIEdSRUFURVJfVEhBTjogc3RyaW5nID0gJz4nO1xuXHRzdGF0aWMgTEVTU19FUVVBTDogc3RyaW5nID0gJzw9Jztcblx0c3RhdGljIEdSRUFURVJfRVFVQUw6IHN0cmluZyA9ICc+PSc7XG5cdHN0YXRpYyBFUVVBTDogc3RyaW5nID0gJz09Jztcblx0c3RhdGljIE5PVF9FUVVBTDogc3RyaW5nID0gJyE9Jztcblx0c3RhdGljIEFORDogc3RyaW5nID0gJyYmJztcblx0c3RhdGljIE9SOiBzdHJpbmcgPSAnfHwnO1xuXG5cdHN0YXRpYyBYTUxfQ0xPU0VfVEFHOiBzdHJpbmcgPSAnLz4nO1xuXHRzdGF0aWMgWE1MX09QRU5fQ0xPU0VfVEFHOiBzdHJpbmcgPSAnPC8nO1xuXG5cdHN0YXRpYyBLRVlXT1JEUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5JTVBPUlQsXG5cdFx0R1JBTU1BUi5GUk9NLFxuXHRcdEdSQU1NQVIuT1BFTixcblx0XHRHUkFNTUFSLkNMQVNTLFxuXHRcdEdSQU1NQVIuSU5URVJGQUNFLFxuXHRcdEdSQU1NQVIuRVhURU5EUyxcblx0XHRHUkFNTUFSLklNUExFTUVOVFMsXG5cdFx0R1JBTU1BUi5QVUJMSUMsXG5cdFx0R1JBTU1BUi5QUklWQVRFLFxuXHRcdEdSQU1NQVIuU1RBVElDLFxuXHRcdEdSQU1NQVIuUkVBRE9OTFksXG5cdFx0R1JBTU1BUi5SRVRVUk4sXG5cdFx0R1JBTU1BUi5PUEVSQVRPUixcblx0XHRHUkFNTUFSLkxFVCxcblx0XHRHUkFNTUFSLk5FVyxcblx0XHRHUkFNTUFSLlRISVMsXG5cdFx0R1JBTU1BUi5JRixcblx0XHRHUkFNTUFSLkVMU0UsXG5cdFx0R1JBTU1BUi5NQVRDSCxcblx0XHRHUkFNTUFSLkRFRkFVTFQsXG5cdFx0R1JBTU1BUi5GT1JFQUNILFxuXHRcdEdSQU1NQVIuSU4sXG5cdFx0R1JBTU1BUi5OVUxMLFxuXHRcdEdSQU1NQVIuVkRPTSxcblx0XTtcblx0c3RhdGljIEFSSVRITUVUSUM6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuUExVUyxcblx0XHRHUkFNTUFSLk1JTlVTLFxuXHRcdEdSQU1NQVIuRElWSURFLFxuXHRcdEdSQU1NQVIuTVVMVElQTFksXG5cdFx0R1JBTU1BUi5NT0RVTFVTXG5cdF07XG5cdHN0YXRpYyBDT01QQVJJU09OOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLkxFU1NfVEhBTixcblx0XHRHUkFNTUFSLkdSRUFURVJfVEhBTixcblx0XHRHUkFNTUFSLkxFU1NfRVFVQUwsXG5cdFx0R1JBTU1BUi5HUkVBVEVSX0VRVUFMXG5cdF07XG5cdHN0YXRpYyBFUVVBTElUWTogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5FUVVBTCxcblx0XHRHUkFNTUFSLk5PVF9FUVVBTFxuXHRdO1xuXHRzdGF0aWMgTE9HSUNBTDogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5BTkQsXG5cdFx0R1JBTU1BUi5PUlxuXHRdO1xuXHRzdGF0aWMgT1BFUkFUT1JTOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLkVYQ0xBTUFUSU9OX01BUkssXG5cdFx0R1JBTU1BUi5RVUVTVElPTl9NQVJLLFxuXHRcdEdSQU1NQVIuQVJST1csXG5cdFx0R1JBTU1BUi5ET1QsXG5cdFx0R1JBTU1BUi5BU1NJR04sXG5cdFx0R1JBTU1BUi5QTFVTLFxuXHRcdEdSQU1NQVIuTUlOVVMsXG5cdFx0R1JBTU1BUi5ESVZJREUsXG5cdFx0R1JBTU1BUi5NVUxUSVBMWSxcblx0XHRHUkFNTUFSLk1PRFVMVVMsXG5cdFx0R1JBTU1BUi5MRVNTX1RIQU4sXG5cdFx0R1JBTU1BUi5HUkVBVEVSX1RIQU4sXG5cdFx0R1JBTU1BUi5MRVNTX0VRVUFMLFxuXHRcdEdSQU1NQVIuR1JFQVRFUl9FUVVBTCxcblx0XHRHUkFNTUFSLkVRVUFMLFxuXHRcdEdSQU1NQVIuTk9UX0VRVUFMLFxuXHRcdEdSQU1NQVIuQU5ELFxuXHRcdEdSQU1NQVIuT1IsXG5cdF07XG5cdHN0YXRpYyBNQVRIX09QRVJBVE9SUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5QTFVTLFxuXHRcdEdSQU1NQVIuTUlOVVMsXG5cdFx0R1JBTU1BUi5ESVZJREUsXG5cdFx0R1JBTU1BUi5NVUxUSVBMWSxcblx0XHRHUkFNTUFSLk1PRFVMVVNcblx0XTtcblx0c3RhdGljIExPR0lDX09QRVJBVE9SUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5MRVNTX1RIQU4sXG5cdFx0R1JBTU1BUi5HUkVBVEVSX1RIQU4sXG5cdFx0R1JBTU1BUi5MRVNTX0VRVUFMLFxuXHRcdEdSQU1NQVIuR1JFQVRFUl9FUVVBTCxcblx0XHRHUkFNTUFSLkVRVUFMLFxuXHRcdEdSQU1NQVIuTk9UX0VRVUFMLFxuXHRcdEdSQU1NQVIuQU5ELFxuXHRcdEdSQU1NQVIuT1IsXG5cdF07XG5cdHN0YXRpYyBQVU5DVFVBVElPTlM6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfT1BFTixcblx0XHRHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX0NMT1NFLFxuXHRcdEdSQU1NQVIuQlJBQ0VfT1BFTixcblx0XHRHUkFNTUFSLkJSQUNFX0NMT1NFLFxuXHRcdEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTixcblx0XHRHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFLFxuXHRcdEdSQU1NQVIuU0VNSUNPTE9OLFxuXHRcdEdSQU1NQVIuQ09MT04sXG5cdFx0R1JBTU1BUi5DT01NQVxuXHRdO1xuXHRzdGF0aWMgRE9NX09QRVJBVE9SUzogc3RyaW5nW10gPSBbXG5cdFx0R1JBTU1BUi5BUlJPVyxcblx0XHRHUkFNTUFSLkRPVCxcblx0XHRHUkFNTUFSLkFTU0lHTixcblx0XHRHUkFNTUFSLkxFU1NfVEhBTixcblx0XHRHUkFNTUFSLkdSRUFURVJfVEhBTixcblx0XHRHUkFNTUFSLlhNTF9PUEVOX0NMT1NFX1RBRyxcblx0XHRHUkFNTUFSLlhNTF9DTE9TRV9UQUdcblx0XTtcblx0c3RhdGljIERPTV9QVU5DVFVBVElPTlM6IHN0cmluZ1tdID0gW1xuXHRcdEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfT1BFTixcblx0XHRHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX0NMT1NFLFxuXHRcdEdSQU1NQVIuQlJBQ0VfT1BFTixcblx0XHRHUkFNTUFSLkJSQUNFX0NMT1NFLFxuXHRcdEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTixcblx0XHRHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFLFxuXHRcdEdSQU1NQVIuU0VNSUNPTE9OLFxuXHRcdEdSQU1NQVIuQ09MT04sXG5cdFx0R1JBTU1BUi5DT01NQVxuXHRdO1xufVxuXG5leHBvcnQgY2xhc3MgVFlQRV9FTlVNIHtcblx0c3RhdGljIE1JWEVEOiBzdHJpbmcgPSAnbWl4ZWQnO1xuXHRzdGF0aWMgVk9JRDogc3RyaW5nID0gJ3ZvaWQnO1xuXHRzdGF0aWMgTlVNQkVSOiBzdHJpbmcgPSAnbnVtYmVyJztcblx0c3RhdGljIFNUUklORzogc3RyaW5nID0gJ3N0cmluZyc7XG5cdHN0YXRpYyBCT09MRUFOOiBzdHJpbmcgPSAnYm9vbGVhbic7XG5cdHN0YXRpYyBBUlJBWTogc3RyaW5nID0gJ2FycmF5Jztcblx0c3RhdGljIE5VTEw6IHN0cmluZyA9ICdudWxsJztcbn1cblxuZXhwb3J0IGNsYXNzIFJ1bGVzIHtcblx0c3RhdGljIEtFWVdPUkRTOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoR1JBTU1BUi5LRVlXT1JEUyk7XG5cdHN0YXRpYyBPUEVSQVRPUlM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChHUkFNTUFSLk9QRVJBVE9SUyk7XG5cdHN0YXRpYyBQVU5DVFVBVElPTlM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChHUkFNTUFSLlBVTkNUVUFUSU9OUyk7XG5cdHN0YXRpYyBET01fT1BFUkFUT1JTOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoR1JBTU1BUi5ET01fT1BFUkFUT1JTKTtcblx0c3RhdGljIERPTV9QVU5DVFVBVElPTlM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChHUkFNTUFSLkRPTV9QVU5DVFVBVElPTlMpO1xuXHRzdGF0aWMgQ09NTUVOVF9MSU5FOiBzdHJpbmcgPSAnLy8nO1xuXG5cdGlzQWxwaGEoY2hhcjogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIC9bYS16X10vaS50ZXN0KGNoYXIpO1xuXHR9XG5cblx0aXNOdW1lcmljKGNoYXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAvWzAtOV0vLnRlc3QoY2hhcik7XG5cdH1cblxuXHRpc0FscGhhTnVtZXJpYyhjaGFyOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pc0FscGhhKGNoYXIpIHx8IHRoaXMuaXNOdW1lcmljKGNoYXIpO1xuXHR9XG5cblx0aXNXaGl0ZXNwYWNlKGNoYXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAvXFxzLy50ZXN0KGNoYXIpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUb2tlblR5cGUge1xuXHRzdGF0aWMgQ09NTUVOVDogc3RyaW5nID0gJ2NvbW1lbnQnO1xuXHRzdGF0aWMgQU5OT1RBVElPTjogc3RyaW5nID0gJ2Fubm90YXRpb24nO1xuXHRzdGF0aWMgSURFTlRJRklFUjogc3RyaW5nID0gJ2lkZW50aWZpZXInO1xuXHRzdGF0aWMgS0VZV09SRDogc3RyaW5nID0gJ2tleXdvcmQnO1xuXHRzdGF0aWMgUFVOQ1RVQVRJT046IHN0cmluZyA9ICdwdW5jdHVhdGlvbic7XG5cdHN0YXRpYyBOVU1CRVI6IHN0cmluZyA9ICdudW1iZXInO1xuXHRzdGF0aWMgU1RSSU5HOiBzdHJpbmcgPSAnc3RyaW5nJztcblx0c3RhdGljIEJPT0xFQU46IHN0cmluZyA9ICdib29sZWFuJztcblx0c3RhdGljIE9QRVJBVE9SOiBzdHJpbmcgPSAnb3BlcmF0b3InO1xuXHRzdGF0aWMgVEVYVDogc3RyaW5nID0gJ3RleHQnO1xuXHRzdGF0aWMgRU9GOiBzdHJpbmcgPSAnZW9mJztcbn1cblxuZXhwb3J0IGNsYXNzIFRva2VuIHtcblx0dHlwZTogc3RyaW5nO1xuXHR2YWx1ZTogc3RyaW5nO1xuXHRsaW5lOiBudW1iZXIgPSAxO1xuXHRjb2x1bW46IG51bWJlciA9IDE7XG5cdHN0YXJ0OiBudW1iZXI7XG5cdGVuZDogbnVtYmVyO1xuXHRzb3VyY2U6IFNvdXJjZTtcblxuXHRjb25zdHJ1Y3Rvcih0eXBlOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyLCBzb3VyY2U6IFNvdXJjZSkge1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMuc3RhcnQgPSBzdGFydDtcblx0XHR0aGlzLmVuZCA9IGVuZDtcblx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0fVxuXG5cdHdpdGhMaW5lQW5kQ29sdW1uKGxpbmU6IG51bWJlciwgY29sdW1uOiBudW1iZXIpOiBUb2tlbiB7XG5cdFx0dGhpcy5saW5lID0gbGluZTtcblx0XHR0aGlzLmNvbHVtbiA9IGNvbHVtbjtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0dSQU1NQVIsIFRZUEVfRU5VTX0gZnJvbSBcIi4vZ3JhbW1hclwiO1xuaW1wb3J0IHtNb2RpZmllcnMsIFN1cGVyQ2xhc3N9IGZyb20gXCIuL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7U291cmNlU3Bhbn0gZnJvbSBcIi4vcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuZXhwb3J0IGNsYXNzIEFTVE5vZGVUeXBlIHtcblx0c3RhdGljIFBST0dSQU1NOiBzdHJpbmcgPSAncHJvZ3JhbSc7XG5cdHN0YXRpYyBJTkRFWDogc3RyaW5nID0gJ2luZGV4Jztcblx0c3RhdGljIElERU5USUZJRVI6IHN0cmluZyA9ICdpZGVudGlmaWVyJztcblx0c3RhdGljIEFOTk9UQVRJT046IHN0cmluZyA9ICdhbm5vdGF0aW9uJztcblx0c3RhdGljIFBBUkFNRVRFUjogc3RyaW5nID0gJ3BhcmFtZXRlcic7XG5cdHN0YXRpYyBJTVBPUlQ6IHN0cmluZyA9IEdSQU1NQVIuSU1QT1JUO1xuXHRzdGF0aWMgTlVNQkVSOiBzdHJpbmcgPSBUWVBFX0VOVU0uTlVNQkVSO1xuXHRzdGF0aWMgU1RSSU5HOiBzdHJpbmcgPSBUWVBFX0VOVU0uU1RSSU5HO1xuXHRzdGF0aWMgQk9PTEVBTjogc3RyaW5nID0gVFlQRV9FTlVNLkJPT0xFQU47XG5cdHN0YXRpYyBOVUxMOiBzdHJpbmcgPSBUWVBFX0VOVU0uTlVMTDtcblx0c3RhdGljIE5FVzogc3RyaW5nID0gR1JBTU1BUi5ORVc7XG5cdHN0YXRpYyBDTEFTUzogc3RyaW5nID0gR1JBTU1BUi5DTEFTUztcblx0c3RhdGljIElOVEVSRkFDRTogc3RyaW5nID0gR1JBTU1BUi5JTlRFUkZBQ0U7XG5cdHN0YXRpYyBDT05TVFJVQ1RPUjogc3RyaW5nID0gR1JBTU1BUi5DT05TVFJVQ1RPUjtcblx0c3RhdGljIFRISVM6IHN0cmluZyA9IEdSQU1NQVIuVEhJUztcblx0c3RhdGljIFJFVFVSTjogc3RyaW5nID0gR1JBTU1BUi5SRVRVUk47XG5cdHN0YXRpYyBPUEVSQVRPUjogc3RyaW5nID0gJ29wZXJhdG9yX2RlY2xhcmF0aW9uJztcblx0c3RhdGljIFZET006IHN0cmluZyA9ICd2ZG9tX2RlY2xhcmF0aW9uJztcblx0c3RhdGljIFZET01fVEVYVDogc3RyaW5nID0gJ3Zkb21fdGV4dF9kZWNsYXJhdGlvbic7XG5cdHN0YXRpYyBWRE9NX0VYUFJFU1NJT046IHN0cmluZyA9ICd2ZG9tX2V4cHJlc3Npb24nO1xuXHRzdGF0aWMgVU5BUlk6IHN0cmluZyA9ICd1bmFyeV9leHByZXNzaW9uJztcblx0c3RhdGljIExBTUJEQTogc3RyaW5nID0gJ2xhbWJkYV9leHByZXNzaW9uJztcblx0c3RhdGljIEFSUkFZOiBzdHJpbmcgPSAnYXJyYXlfZGVjbGFyYXRpb24nO1xuXHRzdGF0aWMgVFlQRTogc3RyaW5nID0gJ3R5cGVfZGVjbGFyYXRpb24nO1xuXHRzdGF0aWMgRklFTEQ6IHN0cmluZyA9ICdmaWVsZF9kZWNsYXJhdGlvbic7XG5cdHN0YXRpYyBNRU1CRVI6IHN0cmluZyA9ICdtZW1iZXJfZXhwcmVzc2lvbic7XG5cdHN0YXRpYyBNRVRIT0Q6IHN0cmluZyA9ICdtZXRob2RfZGVjbGFyYXRpb24nO1xuXHRzdGF0aWMgQ0FMTDogc3RyaW5nID0gJ2NhbGxfZXhwcmVzc2lvbic7XG5cdHN0YXRpYyBWQVJJQUJMRTogc3RyaW5nID0gJ3ZhcmlhYmxlX2RlY2xhcmF0aW9uJztcblx0c3RhdGljIEVYUFJFU1NJT046IHN0cmluZyA9ICdleHByZXNzaW9uX3N0YXRlbWVudCc7XG5cdHN0YXRpYyBCSU5BUlk6IHN0cmluZyA9ICdiaW5hcnlfZXhwcmVzc2lvbic7XG5cdHN0YXRpYyBBU1NJR05NRU5UOiBzdHJpbmcgPSAnYXNzaWdubWVudF9leHByZXNzaW9uJztcblx0c3RhdGljIElGOiBzdHJpbmcgPSAnaWZfc3RhdGVtZW50Jztcblx0c3RhdGljIFRIRU46IHN0cmluZyA9ICd0aGVuX3N0YXRlbWVudCc7XG5cdHN0YXRpYyBFTFNFOiBzdHJpbmcgPSAnZWxzZV9zdGF0ZW1lbnQnO1xuXHRzdGF0aWMgTUFUQ0g6IHN0cmluZyA9ICdtYXRjaF9zdGF0ZW1lbnQnO1xuXHRzdGF0aWMgTUFUQ0hfQ0FTRTogc3RyaW5nID0gJ21hdGNoX2Nhc2Vfc3RhdGVtZW50Jztcblx0c3RhdGljIEZPUkVBQ0g6IHN0cmluZyA9ICdmb3JlYWNoX3N0YXRlbWVudCc7XG59XG5cbmV4cG9ydCBjbGFzcyBBU1ROb2RlIHtcblx0aXNFeHByZXNzaW9uOiBib29sZWFuID0gZmFsc2U7XG5cdG5hbWU6IHN0cmluZyA9ICcnO1xuXG5cdHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbDtcblx0dHlwZTogc3RyaW5nO1xuXHR2YWx1ZTogYW55IHwgbnVsbCA9IG51bGw7XG5cdGNoaWxkcmVuOiBBU1ROb2RlW107XG5cblx0Y29uc3RydWN0b3IodHlwZTogc3RyaW5nLCBjaGlsZHJlbjogQVNUTm9kZVtdID0gW10pIHtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUQ2FsbE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0Y2FsbGVlOiBBU1ROb2RlO1xuXHRhcmd1bWVudHM6IEFTVE5vZGVbXTtcblxuXHRjb25zdHJ1Y3RvcihjYWxsZWU6IEFTVE5vZGUsIGFyZ3M6IEFTVE5vZGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuQ0FMTCk7XG5cblx0XHR0aGlzLmNhbGxlZSA9IGNhbGxlZTtcblx0XHR0aGlzLmFyZ3VtZW50cyA9IGFyZ3M7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1ROZXdOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGFyZ3VtZW50czogQVNUTm9kZVtdO1xuXHR0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGU7XG5cblx0Y29uc3RydWN0b3IoYXJnczogQVNUTm9kZVtdLCB0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGUpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5ORVcpO1xuXG5cdFx0dGhpcy5hcmd1bWVudHMgPSBhcmdzO1xuXHRcdHRoaXMudHlwZUFubm90YXRpb24gPSB0eXBlQW5ub3RhdGlvbjtcblx0XHR0aGlzLm5hbWUgPSB0eXBlQW5ub3RhdGlvbi5uYW1lO1xuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUQmluYXJ5Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRsZWZ0OiBBU1ROb2RlO1xuXHRyaWdodDogQVNUTm9kZTtcblx0b3BlcmF0b3I6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihsZWZ0OiBBU1ROb2RlLCByaWdodDogQVNUTm9kZSwgb3BlcmF0b3I6IHN0cmluZykge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkJJTkFSWSk7XG5cblx0XHR0aGlzLmxlZnQgPSBsZWZ0O1xuXHRcdHRoaXMucmlnaHQgPSByaWdodDtcblx0XHR0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RBc3NpZ25tZW50Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRsZWZ0OiBBU1ROb2RlO1xuXHRyaWdodDogQVNUTm9kZTtcblxuXHRjb25zdHJ1Y3RvcihsZWZ0OiBBU1ROb2RlLCByaWdodDogQVNUTm9kZSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkFTU0lHTk1FTlQpO1xuXG5cdFx0dGhpcy5sZWZ0ID0gbGVmdDtcblx0XHR0aGlzLnJpZ2h0ID0gcmlnaHQ7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RNZW1iZXJOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdG9iamVjdDogQVNUTm9kZTtcblx0cHJvcGVydHk6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihvYmplY3Q6IEFTVE5vZGUsIHByb3BlcnR5OiBzdHJpbmcpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5NRU1CRVIpO1xuXG5cdFx0dGhpcy5vYmplY3QgPSBvYmplY3Q7XG5cdFx0dGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUVW5hcnlOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdG9wZXJhdG9yOiBzdHJpbmc7XG5cdGFyZ3VtZW50OiBBU1ROb2RlIHwgQVNUVW5hcnlOb2RlO1xuXG5cdGNvbnN0cnVjdG9yKG9wZXJhdG9yOiBzdHJpbmcsIGFyZ3VtZW50OiBBU1ROb2RlIHwgQVNUVW5hcnlOb2RlKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuVU5BUlkpO1xuXG5cdFx0dGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuXHRcdHRoaXMuYXJndW1lbnQgPSBhcmd1bWVudDtcblx0XHR0aGlzLmlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEluZGV4Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRvYmplY3Q6IEFTVE5vZGU7XG5cdGluZGV4OiBBU1ROb2RlO1xuXG5cdGNvbnN0cnVjdG9yKG9iamVjdDogQVNUTm9kZSwgaW5kZXg6IEFTVE5vZGUpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5JTkRFWCk7XG5cblx0XHR0aGlzLm9iamVjdCA9IG9iamVjdDtcblx0XHR0aGlzLmluZGV4ID0gaW5kZXg7XG5cdFx0dGhpcy5pc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RBcnJheU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0ZWxlbWVudHM6IEFTVE5vZGVbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkFSUkFZKTtcblxuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUTGFtYmRhTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW107XG5cdHJldHVyblR5cGU6IEFTVFR5cGVOb2RlO1xuXG5cdGNvbnN0cnVjdG9yKHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSwgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGUsIGNoaWxkcmVuOiBBU1ROb2RlW10pIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5MQU1CREEsIGNoaWxkcmVuKTtcblxuXHRcdHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG5cdFx0dGhpcy5yZXR1cm5UeXBlID0gcmV0dXJuVHlwZTtcblxuXHRcdHRoaXMuaXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNURmllbGROb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdG1vZGlmaWVyczogTW9kaWZpZXJzO1xuXHRmaWVsZFR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbDtcblx0aW5pdDogQVNUTm9kZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbW9kaWZpZXJzOiBNb2RpZmllcnMsIGZpZWxkVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsLCBpbml0OiBBU1ROb2RlIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5GSUVMRCk7XG5cblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuXHRcdHRoaXMuZmllbGRUeXBlID0gZmllbGRUeXBlO1xuXHRcdHRoaXMuaW5pdCA9IGluaXQ7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFZhcmlhYmxlTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHR0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGUgfCBudWxsID0gbnVsbDtcblx0aW5pdDogQVNUTm9kZSB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZUFubm90YXRpb246IEFTVFR5cGVOb2RlIHwgbnVsbCA9IG51bGwsIGluaXQ6IEFTVE5vZGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLlZBUklBQkxFKTtcblxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy50eXBlQW5ub3RhdGlvbiA9IHR5cGVBbm5vdGF0aW9uO1xuXHRcdHRoaXMuaW5pdCA9IGluaXQ7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGV4cHI6IEFTVE5vZGU7XG5cblx0Y29uc3RydWN0b3IoZXhwcjogQVNUTm9kZSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkVYUFJFU1NJT04pO1xuXG5cdFx0dGhpcy5leHByID0gZXhwcjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUUmV0dXJuTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRhcmd1bWVudDogQVNUTm9kZSB8IEFTVEV4cHJlc3Npb25Ob2RlIHwgbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihhcmd1bWVudDogQVNUTm9kZSB8IEFTVEV4cHJlc3Npb25Ob2RlIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5SRVRVUk4pO1xuXG5cdFx0dGhpcy5hcmd1bWVudCA9IGFyZ3VtZW50O1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RDbGFzc05vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0YW5ub3RhdGlvbnM6IEFTVEFubm90YXRpb25Ob2RlW107XG5cdG1vZGlmaWVyczogTW9kaWZpZXJzO1xuXHR0eXBlUGFyYW1ldGVyczogc3RyaW5nW107XG5cdHN1cGVyQ2xhc3M6IFN1cGVyQ2xhc3MgfCBudWxsO1xuXHRpbXBsZW1lbnRzSW50ZXJmYWNlczogQVNUVHlwZU5vZGVbXTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0YW5ub3RhdGlvbnM6IEFTVEFubm90YXRpb25Ob2RlW10sXG5cdFx0bW9kaWZpZXJzOiBNb2RpZmllcnMsXG5cdFx0dHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdLFxuXHRcdGltcGxlbWVudHNJbnRlcmZhY2VzOiBBU1RUeXBlTm9kZVtdLFxuXHRcdHN1cGVyQ2xhc3M6IFN1cGVyQ2xhc3MgfCBudWxsID0gbnVsbCxcblx0XHRjaGlsZHJlbjogQVNUTm9kZVtdID0gW11cblx0KSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuQ0xBU1MsIGNoaWxkcmVuKTtcblxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5hbm5vdGF0aW9ucyA9IGFubm90YXRpb25zO1xuXHRcdHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuXHRcdHRoaXMudHlwZVBhcmFtZXRlcnMgPSB0eXBlUGFyYW1ldGVycztcblx0XHR0aGlzLnN1cGVyQ2xhc3MgPSBzdXBlckNsYXNzO1xuXHRcdHRoaXMuaW1wbGVtZW50c0ludGVyZmFjZXMgPSBpbXBsZW1lbnRzSW50ZXJmYWNlcztcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUSW50ZXJmYWNlTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRhbm5vdGF0aW9uczogQVNUQW5ub3RhdGlvbk5vZGVbXTtcblx0bW9kaWZpZXJzOiBNb2RpZmllcnM7XG5cdHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXTtcblx0ZXh0ZW5kc0ludGVyZmFjZXM6IHN0cmluZ1tdO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdG5hbWU6IHN0cmluZyxcblx0XHRhbm5vdGF0aW9uczogQVNUQW5ub3RhdGlvbk5vZGVbXSxcblx0XHRtb2RpZmllcnM6IE1vZGlmaWVycyxcblx0XHR0eXBlUGFyYW1ldGVyczogc3RyaW5nW10sXG5cdFx0ZXh0ZW5kc0ludGVyZmFjZXM6IHN0cmluZ1tdLFxuXHRcdGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXVxuXHQpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5JTlRFUkZBQ0UsIGNoaWxkcmVuKTtcblxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5hbm5vdGF0aW9ucyA9IGFubm90YXRpb25zO1xuXHRcdHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuXHRcdHRoaXMudHlwZVBhcmFtZXRlcnMgPSB0eXBlUGFyYW1ldGVycztcblx0XHR0aGlzLmV4dGVuZHNJbnRlcmZhY2VzID0gZXh0ZW5kc0ludGVyZmFjZXM7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEFubm90YXRpb25Ob2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdHByb3BlcnRpZXM6IE1hcDxzdHJpbmcsIEFTVE5vZGU+ID0gbmV3IE1hcCgpO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLkFOTk9UQVRJT04pO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFBhcmFtZXRlck5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0dHlwZUFubm90YXRpb246IEFTVFR5cGVOb2RlIHwgbnVsbDtcblx0ZGVmYXVsdFZhbHVlOiBBU1ROb2RlIHwgbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGVBbm5vdGF0aW9uOiBBU1RUeXBlTm9kZSB8IG51bGwsIGRlZmF1bHRWYWx1ZTogQVNUTm9kZSB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuUEFSQU1FVEVSKTtcblx0XHR0aGlzLnR5cGVBbm5vdGF0aW9uID0gdHlwZUFubm90YXRpb247XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmRlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUTWV0aG9kTm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRhbm5vdGF0aW9uczogQVNUQW5ub3RhdGlvbk5vZGVbXTtcblx0bW9kaWZpZXJzOiBNb2RpZmllcnM7XG5cdHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXTtcblx0cGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdO1xuXHRyZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGw7XG5cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0dHlwZTogc3RyaW5nLFxuXHRcdGFubm90YXRpb25zOiBBU1RBbm5vdGF0aW9uTm9kZVtdLFxuXHRcdG1vZGlmaWVyczogTW9kaWZpZXJzLFxuXHRcdHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXSxcblx0XHRwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10sXG5cdFx0cmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsID0gbnVsbCxcblx0XHRjaGlsZHJlbjogQVNUTm9kZVtdID0gW10sXG5cdCkge1xuXHRcdHN1cGVyKHR5cGUsIGNoaWxkcmVuKTtcblxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5hbm5vdGF0aW9ucyA9IGFubm90YXRpb25zO1xuXHRcdHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuXHRcdHRoaXMudHlwZVBhcmFtZXRlcnMgPSB0eXBlUGFyYW1ldGVycztcblx0XHR0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuXHRcdHRoaXMucmV0dXJuVHlwZSA9IHJldHVyblR5cGU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVE9wZXJhdG9yTm9kZSBleHRlbmRzIEFTVE1ldGhvZE5vZGUge1xuXG5cdHN0YXRpYyBPVkVSTE9BREFCTEVfT1BFUkFUT1JTOiBzdHJpbmdbXSA9IFtcblx0XHRHUkFNTUFSLlBMVVMsXG5cdFx0R1JBTU1BUi5NSU5VUyxcblx0XHRHUkFNTUFSLk1VTFRJUExZLFxuXHRcdEdSQU1NQVIuRElWSURFLFxuXHRcdEdSQU1NQVIuTU9EVUxVUyxcblx0XHRHUkFNTUFSLkVRVUFMLFxuXHRcdEdSQU1NQVIuTk9UX0VRVUFMLFxuXHRcdEdSQU1NQVIuTEVTU19USEFOLFxuXHRcdEdSQU1NQVIuTEVTU19FUVVBTCxcblx0XHRHUkFNTUFSLkdSRUFURVJfVEhBTixcblx0XHRHUkFNTUFSLkdSRUFURVJfRVFVQUwsXG5cdFx0R1JBTU1BUi5FWENMQU1BVElPTl9NQVJLLFxuXHRcdEdSQU1NQVIuVU5BUllfUExVUyxcblx0XHRHUkFNTUFSLlVOQVJZX01JTlVTLFxuXHRcdC8vXCJbXVwiXG5cdF07XG5cblx0c3RhdGljIE9WRVJMT0FEQUJMRV9PUEVSQVRPUl9NRVRIT0RfTUFQOiBNYXA8c3RyaW5nLCBzdHJpbmc+ID0gbmV3IE1hcChcblx0XHRbXG5cdFx0XHRbR1JBTU1BUi5QTFVTLCAnX19hZGQnXSxcblx0XHRcdFtHUkFNTUFSLk1JTlVTLCAnX19zdWJ0cmFjdCddLFxuXHRcdFx0W0dSQU1NQVIuTVVMVElQTFksICdfX211bHRpcGx5J10sXG5cdFx0XHRbR1JBTU1BUi5ESVZJREUsICdfX2RpdmlkZSddLFxuXHRcdFx0W0dSQU1NQVIuTU9EVUxVUywgJ19fbW9kdWx1cyddLFxuXHRcdFx0W0dSQU1NQVIuRVFVQUwsICdfX2VxdWFsJ10sXG5cdFx0XHRbR1JBTU1BUi5OT1RfRVFVQUwsICdfX25vdF9lcXVhbCddLFxuXHRcdFx0W0dSQU1NQVIuTEVTU19USEFOLCAnX19sZXNzX3RoYW4nXSxcblx0XHRcdFtHUkFNTUFSLkxFU1NfRVFVQUwsICdfX2xlc3NfZXF1YWwnXSxcblx0XHRcdFtHUkFNTUFSLkdSRUFURVJfVEhBTiwgJ19fZ3JlYXRlcl90aGFuJ10sXG5cdFx0XHRbR1JBTU1BUi5HUkVBVEVSX0VRVUFMLCAnX19ncmVhdGVyX2VxdWFsJ10sXG5cdFx0XHRbR1JBTU1BUi5FWENMQU1BVElPTl9NQVJLLCAnX19ub3QnXSxcblx0XHRcdFtHUkFNTUFSLlVOQVJZX1BMVVMsICdfX3VuYXJ5X3BsdXMnXSxcblx0XHRcdFtHUkFNTUFSLlVOQVJZX01JTlVTLCAnX191bmFyeV9taW51cyddLFxuXHRcdF1cblx0KTtcblxuXHRvcGVyYXRvcjogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdG9wZXJhdG9yOiBzdHJpbmcsXG5cdFx0YW5ub3RhdGlvbnM6IEFTVEFubm90YXRpb25Ob2RlW10sXG5cdFx0bW9kaWZpZXJzOiBNb2RpZmllcnMsXG5cdFx0dHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdLFxuXHRcdHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSxcblx0XHRyZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGwgPSBudWxsLFxuXHRcdGNoaWxkcmVuOiBBU1ROb2RlW10gPSBbXSxcblx0KSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRvcGVyYXRvciwgICAgICAgICAgICAgICAgICAgICAgICAvLyBuYW1lID0gc3ltYm9sXG5cdFx0XHRBU1ROb2RlVHlwZS5PUEVSQVRPUixcblx0XHRcdGFubm90YXRpb25zLFxuXHRcdFx0bW9kaWZpZXJzLFxuXHRcdFx0dHlwZVBhcmFtZXRlcnMsXG5cdFx0XHRwYXJhbWV0ZXJzLFxuXHRcdFx0cmV0dXJuVHlwZSxcblx0XHRcdGNoaWxkcmVuXG5cdFx0KTtcblxuXHRcdHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUSW1wb3J0Tm9kZSBleHRlbmRzIEFTVE5vZGUge1xuXHRuYW1lczogc3RyaW5nW107XG5cdGZyb206IHN0cmluZyB8IG51bGw7XG5cblx0Y29uc3RydWN0b3IobmFtZXM6IHN0cmluZ1tdLCBmcm9tOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLklNUE9SVCk7XG5cblx0XHR0aGlzLm5hbWVzID0gbmFtZXM7XG5cdFx0dGhpcy5mcm9tID0gZnJvbTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUVGhlbk5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0Y29uc3RydWN0b3IoY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuVEhFTiwgY2hpbGRyZW4pO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RJZk5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0Y29uZGl0aW9uOiBBU1ROb2RlO1xuXHR0aGVuOiBBU1RUaGVuTm9kZTtcblx0ZWxzZTogQVNUSWZOb2RlIHwgQVNURWxzZU5vZGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihjb25kaXRpb246IEFTVE5vZGUsIHRoZW46IEFTVFRoZW5Ob2RlKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuSUYpO1xuXG5cdFx0dGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG5cdFx0dGhpcy50aGVuID0gdGhlbjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNURWxzZU5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0Y29uc3RydWN0b3IoY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuRUxTRSwgY2hpbGRyZW4pO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RNYXRjaE5vZGUgZXh0ZW5kcyBBU1ROb2RlIHtcblx0ZXhwcmVzc2lvbjogQVNUTm9kZTtcblx0Y2FzZXM6IEFTVE1hdGNoQ2FzZU5vZGVbXTtcblx0ZGVmYXVsdENhc2U6IEFTVE1hdGNoQ2FzZU5vZGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihleHByZXNzaW9uOiBBU1ROb2RlLCBjYXNlczogQVNUTWF0Y2hDYXNlTm9kZVtdLCBkZWZhdWx0Q2FzZTogQVNUTWF0Y2hDYXNlTm9kZSB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuTUFUQ0gpO1xuXG5cdFx0dGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcblx0XHR0aGlzLmNhc2VzID0gY2FzZXM7XG5cdFx0dGhpcy5kZWZhdWx0Q2FzZSA9IGRlZmF1bHRDYXNlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RNYXRjaENhc2VOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdHRlc3Q6IEFTVE5vZGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihjaGlsZHJlbjogQVNUTm9kZVtdID0gW10pIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5NQVRDSF9DQVNFLCBjaGlsZHJlbik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVEZvcmVhY2hOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGl0ZXJhdG9yOiBzdHJpbmc7XG5cdGl0ZXJhYmxlOiBBU1ROb2RlO1xuXHRib2R5OiBBU1ROb2RlW107XG5cblx0Y29uc3RydWN0b3IoaXRlcmF0b3I6IHN0cmluZywgaXRlcmFibGU6IEFTVE5vZGUsIGJvZHk6IEFTVE5vZGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuRk9SRUFDSCk7XG5cblx0XHR0aGlzLml0ZXJhdG9yID0gaXRlcmF0b3I7XG5cdFx0dGhpcy5pdGVyYWJsZSA9IGl0ZXJhYmxlO1xuXHRcdHRoaXMuYm9keSA9IGJvZHk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFR5cGVOb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdHN0YXRpYyBLSU5EX1NJTVBMRSA9ICdzaW1wbGUnO1xuXHRzdGF0aWMgS0lORF9HRU5FUklDID0gJ2dlbmVyaWMnO1xuXHRzdGF0aWMgS0lORF9MQU1CREEgPSAnbGFtYmRhJztcblxuXHRraW5kOiBzdHJpbmc7XG5cdHR5cGVBcmd1bWVudHM6IEFTVFR5cGVOb2RlW10gPSBbXTtcblx0cGFyYW1ldGVyVHlwZXM6IEFTVFR5cGVOb2RlW10gPSBbXTtcblx0cmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgfCBudWxsID0gbnVsbDtcblx0bnVsbGFibGU6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3Ioa2luZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIG51bGxhYmxlOiBib29sZWFuID0gZmFsc2UpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5UWVBFKTtcblxuXHRcdHRoaXMua2luZCA9IGtpbmQ7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLm51bGxhYmxlID0gbnVsbGFibGU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFZEb21Ob2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdHJlYWRvbmx5IHRhZzogc3RyaW5nO1xuXHRyZWFkb25seSBwcm9wczogTWFwPHN0cmluZywgQVNUTm9kZT4gPSBuZXcgTWFwKCk7XG5cblx0Y29uc3RydWN0b3IodGFnOiBzdHJpbmcsIHByb3BzOiBNYXA8c3RyaW5nLCBBU1ROb2RlPiwgY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQVNUTm9kZVR5cGUuVkRPTSwgY2hpbGRyZW4pO1xuXHRcdHRoaXMudGFnID0gdGFnO1xuXHRcdHRoaXMucHJvcHMgPSBwcm9wcztcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUVkRvbVRleHROb2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcpIHtcblx0XHRzdXBlcihBU1ROb2RlVHlwZS5WRE9NX1RFWFQpO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUVkRvbUV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQVNUTm9kZSB7XG5cdGV4cHI6IEFTVE5vZGU7XG5cblx0Y29uc3RydWN0b3IoZXhwcjogQVNUTm9kZSkge1xuXHRcdHN1cGVyKEFTVE5vZGVUeXBlLlZET01fRVhQUkVTU0lPTik7XG5cdFx0dGhpcy5leHByID0gZXhwcjtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0dSQU1NQVIsIFJ1bGVzLCBUb2tlbiwgVG9rZW5UeXBlfSBmcm9tIFwiLi4vZ3JhbW1hclwiO1xuaW1wb3J0IHt0aHJvd1Rva2VuRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcbmltcG9ydCB0eXBlIHtTb3VyY2V9IGZyb20gXCIuLi9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5leHBvcnQgY2xhc3MgVG9rZW5pemVyIHtcblx0cHJpdmF0ZSByZWFkb25seSBydWxlcyA9IG5ldyBSdWxlcygpO1xuXHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZTogU291cmNlO1xuXG5cdGNvbnN0cnVjdG9yKHNvdXJjZTogU291cmNlKSB7XG5cdFx0dGhpcy5zb3VyY2UgPSBzb3VyY2U7XG5cdH1cblxuXHRnZXRUb2tlblN0cmVhbSgpOiBUb2tlblN0cmVhbSB7XG5cdFx0cmV0dXJuIG5ldyBUb2tlblN0cmVhbSh0aGlzLnRva2VuaXplKCkpO1xuXHR9XG5cblx0dG9rZW5pemUoKTogVG9rZW5bXSB7XG5cdFx0Y29uc3QgdG9rZW5zOiBUb2tlbltdID0gW107XG5cblx0XHRsZXQgaTogbnVtYmVyID0gMDtcblx0XHRsZXQgbGluZTogbnVtYmVyID0gMTtcblx0XHRsZXQgY29sdW1uOiBudW1iZXIgPSAwO1xuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ0xpbmVDb21tZW50OiAoKSA9PiBib29sZWFuID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgbGluZUNvbW1lbnQ6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hMaW5lQ29tbWVudEF0KGkpO1xuXHRcdFx0aWYgKGxpbmVDb21tZW50KSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKGxpbmVDb21tZW50LndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gbGluZUNvbW1lbnQuZW5kICsgMTtcblxuXHRcdFx0XHRsaW5lKys7XG5cdFx0XHRcdGNvbHVtbiA9IDA7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdTdHJpbmc6ICgpID0+IGJvb2xlYW4gPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBzdHJpbmc6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hTdHJpbmdBdChpKTtcblx0XHRcdGlmIChzdHJpbmcpIHtcblx0XHRcdFx0dG9rZW5zLnB1c2goc3RyaW5nLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gc3RyaW5nLmVuZCArIDE7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQoc3RyaW5nKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ1B1bmN0dWF0aW9uOiAoKSA9PiBib29sZWFuID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgcHVuY3R1YXRpb246IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hQdW5jdHVhdGlvbkF0KGkpO1xuXHRcdFx0aWYgKHB1bmN0dWF0aW9uKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKHB1bmN0dWF0aW9uLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gcHVuY3R1YXRpb24uZW5kICsgMTtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChwdW5jdHVhdGlvbik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdJZGVudGlmaWVyOiAoKSA9PiBib29sZWFuID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgaWRlbnRpZmllcjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaElkZW50aWZpZXJBdChpKTtcblx0XHRcdGlmIChpZGVudGlmaWVyKSB7XG5cdFx0XHRcdHRva2Vucy5wdXNoKGlkZW50aWZpZXIud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBpZGVudGlmaWVyLmVuZDtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChpZGVudGlmaWVyKTtcblxuXHRcdFx0XHRpZiAoaWRlbnRpZmllci52YWx1ZSA9PT0gR1JBTU1BUi5WRE9NKSB7XG5cdFx0XHRcdFx0Y29uc3QgdG9rZW5pemVkVkRvbSA9IHRoaXMudG9rZW5pemVWRG9tKGksIGxpbmUsIGNvbHVtbik7XG5cdFx0XHRcdFx0dG9rZW5zLnB1c2goLi4udG9rZW5pemVkVkRvbS50b2tlbnMpO1xuXHRcdFx0XHRcdGkgPSB0b2tlbml6ZWRWRG9tLm5ld0luZGV4O1xuXHRcdFx0XHRcdGxpbmUgPSB0b2tlbml6ZWRWRG9tLmxpbmU7XG5cdFx0XHRcdFx0Y29sdW1uID0gdG9rZW5pemVkVkRvbS5jb2x1bW47XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ051bWJlcjogKCkgPT4gYm9vbGVhbiA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IG51bWJlcjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaE51bWJlckF0KGkpO1xuXHRcdFx0aWYgKG51bWJlcikge1xuXHRcdFx0XHR0b2tlbnMucHVzaChudW1iZXIud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBudW1iZXIuZW5kO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KG51bWJlcik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdPcGVyYXRvcjogKCkgPT4gYm9vbGVhbiA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IG9wZXJhdG9yOiBUb2tlbiB8IG51bGwgPSB0aGlzLm1hdGNoT3BlcmF0b3JBdChpKTtcblx0XHRcdGlmIChvcGVyYXRvcikge1xuXHRcdFx0XHR0b2tlbnMucHVzaChvcGVyYXRvci53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IG9wZXJhdG9yLmVuZCArIDE7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQob3BlcmF0b3IpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nQW5ub3RhdGlvbjogKCkgPT4gYm9vbGVhbiA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IGFubm90YXRpb246IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hBbm5vdGF0aW9uQXQoaSk7XG5cdFx0XHRpZiAoYW5ub3RhdGlvbikge1xuXHRcdFx0XHR0b2tlbnMucHVzaChhbm5vdGF0aW9uLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gYW5ub3RhdGlvbi5lbmQgKyAxO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KGFubm90YXRpb24pO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHdoaWxlIChpIDwgdGhpcy5zb3VyY2UubGVuZ3RoKSB7XG5cdFx0XHRpZiAodGhpcy5zb3VyY2UuY2hhckF0KGkpID09PSAnXFxuJykge1xuXHRcdFx0XHRsaW5lKys7XG5cdFx0XHRcdGNvbHVtbiA9IDA7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb2x1bW4rKztcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMubWF0Y2hXaGl0ZXNwYWNlQXQoaSkpIHtcblx0XHRcdFx0aSsrO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGlmSXNDb25zdW1pbmdMaW5lQ29tbWVudCgpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdQdW5jdHVhdGlvbigpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdTdHJpbmcoKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nTnVtYmVyKClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ0lkZW50aWZpZXIoKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nT3BlcmF0b3IoKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nQW5ub3RhdGlvbigpKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHR0aHJvd1Rva2VuRXJyb3IoJ1VuZXhwZWN0ZWQgY2hhcmFjdGVyOiAnICsgdGhpcy5zb3VyY2UuY2hhckF0KGkpKTtcblx0XHR9XG5cblx0XHR0b2tlbnMucHVzaChcblx0XHRcdHRoaXMuZW9mKGkpXG5cdFx0XHQgICAgLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbilcblx0XHQpO1xuXG5cdFx0cmV0dXJuIHRva2Vucztcblx0fVxuXG5cdGVvZihlbmQ6IG51bWJlcik6IFRva2VuIHtcblx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5FT0YsICcnLCBlbmQsIGVuZCwgdGhpcy5zb3VyY2UpXG5cdH1cblxuXHRjb2x1bU9mZnNldCh0b2tlbjogVG9rZW4pOiBudW1iZXIge1xuXHRcdHJldHVybiB0b2tlbi52YWx1ZS5sZW5ndGggLSAxO1xuXHR9XG5cblx0bWF0Y2hXaGl0ZXNwYWNlQXQoaTogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucnVsZXMuaXNXaGl0ZXNwYWNlKHRoaXMuc291cmNlLmNoYXJBdChpKSk7XG5cdH1cblxuXHRtYXRjaE51bWJlckF0KGk6IG51bWJlcik6IFRva2VuIHwgbnVsbCB7XG5cdFx0aWYgKCF0aGlzLnJ1bGVzLmlzTnVtZXJpYyh0aGlzLnNvdXJjZS5jaGFyQXQoaSkpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbFxuXHRcdH1cblx0XHRsZXQgc3RhcnQgPSBpO1xuXHRcdHdoaWxlICh0aGlzLnJ1bGVzLmlzTnVtZXJpYyh0aGlzLnNvdXJjZS5jaGFyQXQoaSkpKSBpKys7XG5cdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuTlVNQkVSLCB0aGlzLnNvdXJjZS5zbGljZShzdGFydCwgaSksIHN0YXJ0LCBpLCB0aGlzLnNvdXJjZSk7XG5cdH1cblxuXHRtYXRjaFN0cmluZ0F0KGk6IG51bWJlcik6IFRva2VuIHwgbnVsbCB7XG5cdFx0aWYgKHRoaXMuc291cmNlLmNoYXJBdChpKSAhPT0gJ1wiJykge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGxldCBzdGFydCA9ICsraTtcblx0XHR3aGlsZSAodGhpcy5zb3VyY2UuY2hhckF0KGkpICE9PSAnXCInKSBpKys7XG5cdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuU1RSSU5HLCB0aGlzLnNvdXJjZS5zbGljZShzdGFydCwgaSksIHN0YXJ0LCBpLCB0aGlzLnNvdXJjZSk7XG5cdH1cblxuXHRtYXRjaElkZW50aWZpZXJBdChpOiBudW1iZXIpOiBUb2tlbiB8IG51bGwge1xuXHRcdGlmICghdGhpcy5ydWxlcy5pc0FscGhhKHRoaXMuc291cmNlLmNoYXJBdChpKSkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRsZXQgc3RhcnQgPSBpO1xuXHRcdGxldCBqID0gaTtcblx0XHR3aGlsZSAodGhpcy5ydWxlcy5pc0FscGhhTnVtZXJpYyh0aGlzLnNvdXJjZS5jaGFyQXQoaikpKSBqKys7XG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnNvdXJjZS5zbGljZShzdGFydCwgaik7XG5cblx0XHRsZXQgdHlwZSA9IFRva2VuVHlwZS5JREVOVElGSUVSO1xuXHRcdGlmIChbR1JBTU1BUi5UUlVFLCBHUkFNTUFSLkZBTFNFXS5pbmNsdWRlcyh2YWx1ZSkpIHtcblx0XHRcdHR5cGUgPSBUb2tlblR5cGUuQk9PTEVBTjtcblx0XHR9IGVsc2UgaWYgKFJ1bGVzLktFWVdPUkRTLmhhcyh2YWx1ZSkpIHtcblx0XHRcdHR5cGUgPSBUb2tlblR5cGUuS0VZV09SRDtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IFRva2VuKHR5cGUsIHZhbHVlLCBzdGFydCwgaiwgdGhpcy5zb3VyY2UpO1xuXHR9XG5cblx0bWF0Y2hPcGVyYXRvckF0KGk6IG51bWJlciwgb3BlcmF0b3JzOiBTZXQ8c3RyaW5nPiA9IFJ1bGVzLk9QRVJBVE9SUyk6IFRva2VuIHwgbnVsbCB7XG5cdFx0Y29uc3QgY2hhcnMgPSB0aGlzLnNvdXJjZS5jaGFyQXQoaSkgKyB0aGlzLnNvdXJjZS5jaGFyQXQoaSArIDEpO1xuXHRcdGlmIChvcGVyYXRvcnMuaGFzKGNoYXJzKSkge1xuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuT1BFUkFUT1IsIGNoYXJzLCBpLCBpICsgMSwgdGhpcy5zb3VyY2UpO1xuXHRcdH1cblxuXHRcdGlmIChvcGVyYXRvcnMuaGFzKHRoaXMuc291cmNlLmNoYXJBdChpKSkpIHtcblx0XHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLk9QRVJBVE9SLCB0aGlzLnNvdXJjZS5jaGFyQXQoaSksIGksIGksIHRoaXMuc291cmNlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdG1hdGNoUHVuY3R1YXRpb25BdChpOiBudW1iZXIsIHB1bmN0dWF0aW9ucyA9IFJ1bGVzLlBVTkNUVUFUSU9OUyk6IFRva2VuIHwgbnVsbCB7XG5cdFx0Y29uc3QgY2hhcnMgPSB0aGlzLnNvdXJjZS5jaGFyQXQoaSkgKyB0aGlzLnNvdXJjZS5jaGFyQXQoaSArIDEpO1xuXHRcdGlmIChwdW5jdHVhdGlvbnMuaGFzKGNoYXJzKSkge1xuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuUFVOQ1RVQVRJT04sIGNoYXJzLCBpLCBpICsgMSwgdGhpcy5zb3VyY2UpO1xuXHRcdH1cblxuXHRcdGlmICghcHVuY3R1YXRpb25zLmhhcyh0aGlzLnNvdXJjZS5jaGFyQXQoaSkpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuUFVOQ1RVQVRJT04sIHRoaXMuc291cmNlLmNoYXJBdChpKSwgaSwgaSwgdGhpcy5zb3VyY2UpO1xuXHR9XG5cblx0bWF0Y2hMaW5lQ29tbWVudEF0KGk6IG51bWJlcik6IFRva2VuIHwgbnVsbCB7XG5cdFx0aWYgKCF0aGlzLnNvdXJjZS5zdGFydHNXaXRoKFJ1bGVzLkNPTU1FTlRfTElORSwgaSkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRsZXQgaiA9IGkgKyBSdWxlcy5DT01NRU5UX0xJTkUubGVuZ3RoO1xuXHRcdHdoaWxlIChqIDwgdGhpcy5zb3VyY2UubGVuZ3RoICYmIHRoaXMuc291cmNlLmNoYXJBdChqKSAhPT0gJ1xcbicpIGorKztcblx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5DT01NRU5ULCB0aGlzLnNvdXJjZS5zbGljZShpLCBqKSwgaSwgaiwgdGhpcy5zb3VyY2UpO1xuXHR9XG5cblx0bWF0Y2hBbm5vdGF0aW9uQXQoaTogbnVtYmVyKTogVG9rZW4gfCBudWxsIHtcblx0XHRpZiAodGhpcy5zb3VyY2UuY2hhckF0KGkpICE9PSAnQCcpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGxldCBzdGFydCA9IGkgKyAxO1xuXHRcdGxldCBqID0gaSArIDE7XG5cdFx0d2hpbGUgKHRoaXMucnVsZXMuaXNBbHBoYSh0aGlzLnNvdXJjZS5jaGFyQXQoaikpKSBqKys7XG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnNvdXJjZS5zbGljZShzdGFydCwgaik7XG5cblx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5BTk5PVEFUSU9OLCB2YWx1ZSwgc3RhcnQsIGosIHRoaXMuc291cmNlKTtcblx0fVxuXG5cdHByaXZhdGUgdG9rZW5pemVWRG9tKHN0YXJ0SW5kZXg6IG51bWJlciwgbGluZTogbnVtYmVyLCBjb2x1bW46IG51bWJlcik6IHtcblx0XHR0b2tlbnM6IFRva2VuW10sXG5cdFx0bmV3SW5kZXg6IG51bWJlcixcblx0XHRsaW5lOiBudW1iZXIsXG5cdFx0Y29sdW1uOiBudW1iZXJcblx0fSB7XG5cdFx0Y29uc3QgdG9rZW5zOiBUb2tlbltdID0gW107XG5cdFx0bGV0IGk6IG51bWJlciA9IHN0YXJ0SW5kZXg7XG5cdFx0bGV0IHRleHRCdWZmZXI6IHN0cmluZyA9ICcnO1xuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ1N0cmluZzogKCkgPT4gYm9vbGVhbiA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IHN0cmluZzogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaFN0cmluZ0F0KGkpO1xuXHRcdFx0aWYgKHN0cmluZykge1xuXHRcdFx0XHRmbHVzaFRleHRCdWZmZXIoKTtcblx0XHRcdFx0dG9rZW5zLnB1c2goc3RyaW5nLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gc3RyaW5nLmVuZCArIDE7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQoc3RyaW5nKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWZJc0NvbnN1bWluZ1B1bmN0dWF0aW9uOiAoKSA9PiBib29sZWFuID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgcHVuY3R1YXRpb246IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hQdW5jdHVhdGlvbkF0KGksIFJ1bGVzLkRPTV9QVU5DVFVBVElPTlMpO1xuXHRcdFx0aWYgKHB1bmN0dWF0aW9uKSB7XG5cdFx0XHRcdGZsdXNoVGV4dEJ1ZmZlcigpO1xuXHRcdFx0XHR0b2tlbnMucHVzaChwdW5jdHVhdGlvbi53aXRoTGluZUFuZENvbHVtbihsaW5lLCBjb2x1bW4pKTtcblx0XHRcdFx0aSA9IHB1bmN0dWF0aW9uLmVuZCArIDE7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQocHVuY3R1YXRpb24pO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nSWRlbnRpZmllcjogKCkgPT4gYm9vbGVhbiA9ICgpOiBib29sZWFuID0+IHtcblx0XHRcdGNvbnN0IGlkZW50aWZpZXI6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hJZGVudGlmaWVyQXQoaSk7XG5cdFx0XHRpZiAoaWRlbnRpZmllcikge1xuXHRcdFx0XHRpZiAoW0dSQU1NQVIuQ0xBU1NdLmluY2x1ZGVzKGlkZW50aWZpZXIudmFsdWUpKSB7XG5cdFx0XHRcdFx0aWRlbnRpZmllci50eXBlID0gVG9rZW5UeXBlLklERU5USUZJRVI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmbHVzaFRleHRCdWZmZXIoKTtcblxuXHRcdFx0XHR0b2tlbnMucHVzaChpZGVudGlmaWVyLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gaWRlbnRpZmllci5lbmQ7XG5cblx0XHRcdFx0Y29sdW1uICs9IHRoaXMuY29sdW1PZmZzZXQoaWRlbnRpZmllcik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlmSXNDb25zdW1pbmdOdW1iZXI6ICgpID0+IGJvb2xlYW4gPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBudW1iZXI6IFRva2VuIHwgbnVsbCA9IHRoaXMubWF0Y2hOdW1iZXJBdChpKTtcblx0XHRcdGlmIChudW1iZXIpIHtcblx0XHRcdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cblx0XHRcdFx0dG9rZW5zLnB1c2gobnVtYmVyLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXHRcdFx0XHRpID0gbnVtYmVyLmVuZDtcblxuXHRcdFx0XHRjb2x1bW4gKz0gdGhpcy5jb2x1bU9mZnNldChudW1iZXIpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZklzQ29uc3VtaW5nT3BlcmF0b3I6ICgpID0+IGJvb2xlYW4gPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRjb25zdCBvcGVyYXRvcjogVG9rZW4gfCBudWxsID0gdGhpcy5tYXRjaE9wZXJhdG9yQXQoaSwgUnVsZXMuRE9NX09QRVJBVE9SUyk7XG5cdFx0XHRpZiAob3BlcmF0b3IpIHtcblx0XHRcdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cblx0XHRcdFx0dG9rZW5zLnB1c2gob3BlcmF0b3Iud2l0aExpbmVBbmRDb2x1bW4obGluZSwgY29sdW1uKSk7XG5cdFx0XHRcdGkgPSBvcGVyYXRvci5lbmQgKyAxO1xuXG5cdFx0XHRcdGNvbHVtbiArPSB0aGlzLmNvbHVtT2Zmc2V0KG9wZXJhdG9yKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZmx1c2hUZXh0QnVmZmVyOiAoKSA9PiB2b2lkID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKHRleHRCdWZmZXIubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR0b2tlbnMucHVzaChcblx0XHRcdFx0XHRuZXcgVG9rZW4oXG5cdFx0XHRcdFx0XHRUb2tlblR5cGUuVEVYVCxcblx0XHRcdFx0XHRcdHRleHRCdWZmZXIsXG5cdFx0XHRcdFx0XHRpIC0gdGV4dEJ1ZmZlci5sZW5ndGgsXG5cdFx0XHRcdFx0XHRpLFxuXHRcdFx0XHRcdFx0dGhpcy5zb3VyY2Vcblx0XHRcdFx0XHQpLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbiAtIHRleHRCdWZmZXIubGVuZ3RoKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHR0ZXh0QnVmZmVyID0gJyc7XG5cdFx0XHR9XG5cdFx0fTtcblxuXG5cdFx0bGV0IGlnbm9yZVdoaXRlc3BhY2U6IGJvb2xlYW4gPSBmYWxzZTtcblx0XHR3aGlsZSAoaSA8IHRoaXMuc291cmNlLmxlbmd0aCkge1xuXHRcdFx0Y29uc3QgY2hhcjogc3RyaW5nID0gdGhpcy5zb3VyY2UuY2hhckF0KGkpO1xuXG5cdFx0XHRpZiAoY2hhciA9PT0gR1JBTU1BUi5TRU1JQ09MT04pIHtcblx0XHRcdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cblx0XHRcdFx0dG9rZW5zLnB1c2gobmV3IFRva2VuKFRva2VuVHlwZS5QVU5DVFVBVElPTiwgY2hhciwgaSwgaSwgdGhpcy5zb3VyY2UpXG5cdFx0XHRcdFx0ICAgICAgICAgICAgLndpdGhMaW5lQW5kQ29sdW1uKGxpbmUsIGNvbHVtbikpO1xuXG5cdFx0XHRcdGkrKztcblx0XHRcdFx0Y29sdW1uKys7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fSBlbHNlIGlmIChjaGFyID09PSBHUkFNTUFSLkJSQUNFX09QRU4pIHtcblx0XHRcdFx0aWdub3JlV2hpdGVzcGFjZSA9IHRydWU7XG5cdFx0XHR9IGVsc2UgaWYgKGNoYXIgPT09IEdSQU1NQVIuQlJBQ0VfQ0xPU0UpIHtcblx0XHRcdFx0aWdub3JlV2hpdGVzcGFjZSA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaWdub3JlV2hpdGVzcGFjZSkge1xuXHRcdFx0XHRpZiAodGhpcy5tYXRjaFdoaXRlc3BhY2VBdChpKSkge1xuXHRcdFx0XHRcdGkrKztcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaWZJc0NvbnN1bWluZ1B1bmN0dWF0aW9uKClcblx0XHRcdFx0fHwgaWZJc0NvbnN1bWluZ1N0cmluZygpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdOdW1iZXIoKVxuXHRcdFx0XHR8fCBpZklzQ29uc3VtaW5nSWRlbnRpZmllcigpXG5cdFx0XHRcdHx8IGlmSXNDb25zdW1pbmdPcGVyYXRvcigpXG5cdFx0XHQpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHRleHRCdWZmZXIgKz0gY2hhcjtcblxuXHRcdFx0aWYgKGNoYXIgPT09ICdcXG4nKSB7XG5cdFx0XHRcdGxpbmUrKztcblx0XHRcdFx0Y29sdW1uID0gMDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbHVtbisrO1xuXHRcdFx0fVxuXG5cdFx0XHRpKys7XG5cdFx0fVxuXG5cdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cblx0XHRyZXR1cm4ge3Rva2VuczogdG9rZW5zLCBuZXdJbmRleDogaSwgbGluZTogbGluZSwgY29sdW1uOiBjb2x1bW59O1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUb2tlblN0cmVhbSB7XG5cdHRva2VuczogVG9rZW5bXTtcblx0aW5kZXg6IG51bWJlciA9IDA7XG5cblx0Y29uc3RydWN0b3IodG9rZW5zOiBUb2tlbltdKSB7XG5cdFx0dGhpcy50b2tlbnMgPSB0b2tlbnM7XG5cdH1cblxuXHRyZXdpbmQoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaW5kZXggPiAwKSB7XG5cdFx0XHR0aGlzLmluZGV4LS07XG5cdFx0fVxuXHR9XG5cblx0cGVlaygpOiBUb2tlbiB8IG51bGwge1xuXHRcdHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmluZGV4XSB8fCBudWxsO1xuXHR9XG5cblx0bmV4dCgpOiBUb2tlbiB8IG51bGwge1xuXHRcdHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmluZGV4KytdIHx8IG51bGw7XG5cdH1cblxuXHRoYXNOZXh0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7VG9rZW5pemVyfSBmcm9tIFwiLi4vdG9rZW5pemVyL3Rva2VuaXplclwiO1xuaW1wb3J0IHt0aHJvd0RlcGVuZGVuY3lFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuaW1wb3J0IHR5cGUge1Rva2VufSBmcm9tIFwiLi4vZ3JhbW1hclwiO1xuXG5leHBvcnQgY2xhc3MgU291cmNlIHtcblx0c3RhdGljIE5FV0xJTkUgPSAnXFxuJztcblx0cHVibGljIHJlYWRvbmx5IHVybDogc3RyaW5nO1xuXHRwcml2YXRlIGNvZGU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihjb2RlOiBzdHJpbmcsIHVybDogc3RyaW5nID0gJzxpbmxpbmU+Jykge1xuXHRcdHRoaXMudXJsID0gdXJsO1xuXHRcdHRoaXMuY29kZSA9IGNvZGU7XG5cdH1cblxuXHRnZXQgbGVuZ3RoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuY29kZS5sZW5ndGg7XG5cdH1cblxuXHRnZXRUb2tlbml6ZXIoKTogVG9rZW5pemVyIHtcblx0XHRyZXR1cm4gbmV3IFRva2VuaXplcih0aGlzKTtcblx0fVxuXG5cdHNsaWNlKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5jb2RlLnNsaWNlKHN0YXJ0LCBlbmQpO1xuXHR9XG5cblx0Y2hhckF0KGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmNvZGUuY2hhckF0KGluZGV4KTtcblx0fVxuXG5cdHN0YXJ0c1dpdGgodGV4dDogc3RyaW5nLCBwb3NpdGlvbj86IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvZGUuc3RhcnRzV2l0aCh0ZXh0LCBwb3NpdGlvbik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFNvdXJjZVNwYW4ge1xuXHRzb3VyY2U6IFNvdXJjZTtcblx0c3RhcnQ6IG51bWJlcjtcblx0ZW5kOiBudW1iZXI7XG5cdGxpbmU6IG51bWJlcjtcblx0Y29sdW1uOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3Ioc291cmNlOiBTb3VyY2UsIHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XG5cdFx0dGhpcy5zb3VyY2UgPSBzb3VyY2U7XG5cdFx0dGhpcy5zdGFydCA9IHN0YXJ0O1xuXHRcdHRoaXMuZW5kID0gZW5kO1xuXG5cdFx0Y29uc3QgYmVmb3JlID0gc291cmNlLnNsaWNlKDAsIHN0YXJ0KTtcblx0XHRjb25zdCBsaW5lcyA9IGJlZm9yZS5zcGxpdChTb3VyY2UuTkVXTElORSk7XG5cblx0XHR0aGlzLmxpbmUgPSBsaW5lcy5sZW5ndGg7XG5cdFx0dGhpcy5jb2x1bW4gPSAobGluZXNbbGluZXMubGVuZ3RoIC0gMV0gfHwgJycpLmxlbmd0aCArIDE7XG5cdH1cblxuXHR0ZXh0KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlLnNsaWNlKHRoaXMuc3RhcnQsIHRoaXMuZW5kKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BhbkZyb20oc3RhcnRUb2tlbjogVG9rZW4sIGVuZFRva2VuOiBUb2tlbik6IFNvdXJjZVNwYW4ge1xuXHRyZXR1cm4gbmV3IFNvdXJjZVNwYW4oc3RhcnRUb2tlbi5zb3VyY2UsIHN0YXJ0VG9rZW4uc3RhcnQsIGVuZFRva2VuLmVuZCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFNvdXJjZSh1cmw6IHN0cmluZyk6IFByb21pc2U8U291cmNlPiB7XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcblx0aWYgKCFyZXNwb25zZS5vaykge1xuXHRcdHRocm93RGVwZW5kZW5jeUVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7dXJsfWApO1xuXHR9XG5cblx0cmV0dXJuIG5ldyBTb3VyY2UoYXdhaXQgcmVzcG9uc2UudGV4dCgpLCB1cmwpO1xufVxuIiwKICAgICJpbXBvcnQge1NvdXJjZSwgU291cmNlU3Bhbn0gZnJvbSBcIi4vcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuY2xhc3MgRXJyb3JUeXBlcyB7XG5cdHN0YXRpYyBUWVBFX0VSUk9SOiBzdHJpbmcgPSAnVHlwZUVycm9yJztcblx0c3RhdGljIFRPS0VOX0VSUk9SOiBzdHJpbmcgPSAnVG9rZW5FcnJvcic7XG5cdHN0YXRpYyBQQVJTRVJfRVJST1I6IHN0cmluZyA9ICdQYXJzZXJFcnJvcic7XG5cdHN0YXRpYyBSVU5USU1FX0VSUk9SOiBzdHJpbmcgPSAnUnVudGltZUVycm9yJztcblx0c3RhdGljIElOVEVSTkFMX0VSUk9SOiBzdHJpbmcgPSAnSW50ZXJuYWxFcnJvcic7XG5cdHN0YXRpYyBOQVRJVkVfRVJST1I6IHN0cmluZyA9ICdOYXRpdmVFcnJvcic7XG5cdHN0YXRpYyBERVBFTkRFTkNZX0VSUk9SOiBzdHJpbmcgPSAnRGVwZW5kZW5jeUVycm9yJztcbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFFcnJvciBleHRlbmRzIEVycm9yIHtcblx0a2luZDogc3RyaW5nO1xuXHRzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGw7XG5cdG92ZXJyaWRlIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRraW5kOiBzdHJpbmcsXG5cdFx0bWVzc2FnZTogc3RyaW5nLFxuXHRcdHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCxcblx0XHRjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGxcblx0KSB7XG5cdFx0c3VwZXIobWVzc2FnZSk7XG5cdFx0dGhpcy5raW5kID0ga2luZDtcblx0XHR0aGlzLnNwYW4gPSBzcGFuO1xuXHRcdHRoaXMuY2F1c2UgPSBjYXVzZTtcblx0fVxuXG5cdGZvcm1hdCgpOiBzdHJpbmcge1xuXHRcdGlmICh0aGlzLnNwYW4pIHtcblxuXHRcdFx0cmV0dXJuIGBcblske3RoaXMua2luZH1dICR7dGhpcy5tZXNzYWdlfVxuICBhdCAke3RoaXMuc3Bhbi5zb3VyY2UudXJsfToke3RoaXMuc3Bhbi5saW5lfToke3RoaXMuc3Bhbi5jb2x1bW59XG5cbiR7dGhpcy5zcGFuLnRleHQoKX1cbiR7XCIgXCIucmVwZWF0KHRoaXMuc3Bhbi5jb2x1bW4pfSR7XCJeXCIucmVwZWF0KHRoaXMuc3Bhbi5lbmQgLSB0aGlzLnNwYW4uc3RhcnQpfVxuYDtcblx0XHR9XG5cblx0XHRyZXR1cm4gYFske3RoaXMua2luZH1dICR7dGhpcy5tZXNzYWdlfWA7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFUb2tlbkVycm9yIGV4dGVuZHMgTHlyYUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0RXJyb3JUeXBlcy5UT0tFTl9FUlJPUixcblx0XHRcdG1lc3NhZ2UsXG5cdFx0XHRzcGFuLFxuXHRcdFx0Y2F1c2Vcblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhVHlwZUVycm9yIGV4dGVuZHMgTHlyYUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0RXJyb3JUeXBlcy5UWVBFX0VSUk9SLFxuXHRcdFx0bWVzc2FnZSxcblx0XHRcdHNwYW4sXG5cdFx0XHRjYXVzZVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFQYXJzZXJFcnJvciBleHRlbmRzIEx5cmFFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihcblx0XHRcdEVycm9yVHlwZXMuUEFSU0VSX0VSUk9SLFxuXHRcdFx0bWVzc2FnZSxcblx0XHRcdHNwYW4sXG5cdFx0XHRjYXVzZVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFSdW50aW1lRXJyb3IgZXh0ZW5kcyBMeXJhRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRFcnJvclR5cGVzLlJVTlRJTUVfRVJST1IsXG5cdFx0XHRtZXNzYWdlLFxuXHRcdFx0c3Bhbixcblx0XHRcdGNhdXNlXG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYU5hdGl2ZUVycm9yIGV4dGVuZHMgTHlyYUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0RXJyb3JUeXBlcy5OQVRJVkVfRVJST1IsXG5cdFx0XHRtZXNzYWdlLFxuXHRcdFx0c3Bhbixcblx0XHRcdGNhdXNlXG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTHlyYURlcGVuZGVuY3lFcnJvciBleHRlbmRzIEx5cmFFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcblx0XHRzdXBlcihcblx0XHRcdEVycm9yVHlwZXMuREVQRU5ERU5DWV9FUlJPUixcblx0XHRcdG1lc3NhZ2UsXG5cdFx0XHRzcGFuLFxuXHRcdFx0Y2F1c2Vcblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Rva2VuRXJyb3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IG5ldmVyIHtcblx0dGhyb3cgbmV3IEx5cmFUb2tlbkVycm9yKG1lc3NhZ2UsIHNwYW4sIGNhdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93VHlwZUVycm9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBuZXZlciB7XG5cdHRocm93IG5ldyBMeXJhVHlwZUVycm9yKG1lc3NhZ2UsIHNwYW4sIGNhdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UGFyc2VyRXJyb3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IG5ldmVyIHtcblx0dGhyb3cgbmV3IEx5cmFQYXJzZXJFcnJvcihtZXNzYWdlLCBzcGFuLCBjYXVzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1J1bnRpbWVFcnJvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFNvdXJjZVNwYW4gfCBudWxsID0gbnVsbCwgY2F1c2U6IHN0cmluZyB8IG51bGwgPSBudWxsKTogbmV2ZXIge1xuXHR0aHJvdyBuZXcgTHlyYVJ1bnRpbWVFcnJvcihtZXNzYWdlLCBzcGFuLCBjYXVzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd05hdGl2ZUVycm9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsLCBjYXVzZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBuZXZlciB7XG5cdHRocm93IG5ldyBMeXJhTmF0aXZlRXJyb3IobWVzc2FnZSwgc3BhbiwgY2F1c2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dEZXBlbmRlbmN5RXJyb3IobWVzc2FnZTogc3RyaW5nLCBzcGFuOiBTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsIGNhdXNlOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IG5ldmVyIHtcblx0dGhyb3cgbmV3IEx5cmFEZXBlbmRlbmN5RXJyb3IobWVzc2FnZSwgc3BhbiwgY2F1c2UpO1xufVxuXG4vKipcbiAqIEB0aHJvd3Mge0Vycm9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24gd3JhcEpzRXJyb3IoZXJyb3I6IEVycm9yLCBzb3VyY2U6IFNvdXJjZSk6IEx5cmFFcnJvciB7XG5cdGlmIChlcnJvciBpbnN0YW5jZW9mIEx5cmFFcnJvcikge1xuXHRcdHJldHVybiBlcnJvcjtcblx0fVxuXG5cdHJldHVybiBuZXcgTHlyYUVycm9yKFxuXHRcdEVycm9yVHlwZXMuSU5URVJOQUxfRVJST1IsXG5cdFx0ZXJyb3IubWVzc2FnZSB8fCBTdHJpbmcoZXJyb3IpLFxuXHRcdG5ldyBTb3VyY2VTcGFuKHNvdXJjZSwgMCwgc291cmNlLmxlbmd0aClcblx0KTtcbn1cbiIsCiAgICAiaW1wb3J0IHtBU1RDbGFzc05vZGUsIEFTVE5vZGVUeXBlfSBmcm9tIFwiLi4vY29yZS9hc3RcIjtcbmltcG9ydCB7Q2xhc3NEZWZpbml0aW9ufSBmcm9tIFwiLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4uL2NvcmUvcGFyc2VyL3BhcnNlclwiO1xuaW1wb3J0IHt0aHJvd1J1bnRpbWVFcnJvcn0gZnJvbSBcIi4uL2NvcmUvZXJyb3JzXCI7XG5pbXBvcnQgdHlwZSB7U291cmNlfSBmcm9tIFwiLi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5leHBvcnQgY2xhc3MgTmF0aXZlQ2xhc3Mge1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cdHJlYWRvbmx5IG5hdGl2ZUluc3RhbmNlOiBhbnk7XG5cdHJlYWRvbmx5IG5hdGl2ZUNsYXNzU291cmNlOiBTb3VyY2U7XG5cdGlzQXV0b2xvYWRBYmxlOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBuYXRpdmVJbnN0YW5jZTogYW55LCBzb3VyY2U6IFNvdXJjZSkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5uYXRpdmVJbnN0YW5jZSA9IG5hdGl2ZUluc3RhbmNlO1xuXHRcdHRoaXMubmF0aXZlQ2xhc3NTb3VyY2UgPSBzb3VyY2U7XG5cdH1cblxuXHRnZXRDbGFzc0RlZmluaXRpb24oKTogQ2xhc3NEZWZpbml0aW9uIHtcblx0XHRjb25zdCBhc3QgPSBuZXcgUGFyc2VyKHRoaXMubmF0aXZlQ2xhc3NTb3VyY2UpLnBhcnNlKCk7XG5cblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgYXN0LmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5DTEFTUykge1xuXHRcdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVENsYXNzTm9kZSAmJiBub2RlLm5hbWUgPT09IHRoaXMubmFtZSkge1xuXHRcdFx0XHRcdGNvbnN0IGNsYXNzRGVmID0gQ2xhc3NEZWZpbml0aW9uLmZyb21BU1Qobm9kZSk7XG5cblx0XHRcdFx0XHRjbGFzc0RlZi5uYXRpdmVJbnN0YW5jZSA9IHRoaXMubmF0aXZlSW5zdGFuY2U7XG5cblx0XHRcdFx0XHRyZXR1cm4gY2xhc3NEZWY7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgQ2xhc3MgJHt0aGlzLm5hbWV9IG5vdCBmb3VuZC5gLCBhc3Quc3Bhbik7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtBU1RBcnJheU5vZGUsIEFTVE5vZGUsIEFTVE5vZGVUeXBlLCBBU1RSZXR1cm5Ob2RlfSBmcm9tIFwiLi4vYXN0XCI7XG5pbXBvcnQge0dSQU1NQVIsIFRZUEVfRU5VTX0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcbmltcG9ydCB7Q2xhc3NEZWZpbml0aW9uLCBJbnN0YW5jZX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB7dGhyb3dOYXRpdmVFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuXG5pbnRlcmZhY2UgU2VyaWFsaXphdGlvbk9iamVjdCB7XG5cdFtpbmRleDogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdGNsYXNzTmFtZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGNsYXNzTmFtZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG5cdH1cblxuXHRwdWJsaWMgc2VyaWFsaXplKCk6IFNlcmlhbGl6YXRpb25PYmplY3Qge1xuXHRcdGNvbnN0IG9iamVjdDogU2VyaWFsaXphdGlvbk9iamVjdCA9IHt9O1xuXG5cdFx0b2JqZWN0W3RoaXMuY2xhc3NOYW1lXSA9IE9iamVjdFxuXHRcdFx0LmtleXModGhpcylcblx0XHRcdC5maWx0ZXIoa2V5ID0+IGtleSAhPT0gJ2NsYXNzTmFtZScpXG5cdFx0XHQucmVkdWNlKChvYmplY3Q6IFNlcmlhbGl6YXRpb25PYmplY3QsIGtleTogc3RyaW5nKTogU2VyaWFsaXphdGlvbk9iamVjdCA9PiB7XG5cdFx0XHRcdGNvbnN0IGNvcHk6IFNlcmlhbGl6YXRpb25PYmplY3QgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzKTtcblx0XHRcdFx0b2JqZWN0W2tleV0gPSBjb3B5W2tleV07XG5cdFx0XHRcdHJldHVybiBvYmplY3Q7XG5cdFx0XHR9LCB7fSk7XG5cblx0XHRyZXR1cm4gb2JqZWN0O1xuXHR9XG5cblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHtjbGFzc05hbWU6IHRoaXMuY2xhc3NOYW1lfSwgbnVsbCwgMik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEx5cmFPYmplY3RWaWV3IGV4dGVuZHMgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdHByaXZhdGUgX19pbnN0YW5jZTogSW5zdGFuY2U7XG5cblx0Y29uc3RydWN0b3IoaW5zdGFuY2U6IEluc3RhbmNlKSB7XG5cdFx0c3VwZXIoaW5zdGFuY2UuX19jbGFzc0RlZi5uYW1lKTtcblxuXHRcdHRoaXMuX19pbnN0YW5jZSA9IGluc3RhbmNlO1xuXG5cdFx0cmV0dXJuIG5ldyBQcm94eSh0aGlzLCB7XG5cdFx0XHRnZXQ6IChfOiBhbnksIG5hbWU6IHN0cmluZyk6IGFueSA9PiB7XG5cdFx0XHRcdGlmIChuYW1lIGluIHRoaXMuX19pbnN0YW5jZS5fX2luc3RhbmNlRmllbGRzKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX19pbnN0YW5jZS5fX2luc3RhbmNlRmllbGRzW25hbWVdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKG5hbWUgaW4gdGhpcy5fX2luc3RhbmNlLl9fc3RhdGljRmllbGRzKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX19pbnN0YW5jZS5fX3N0YXRpY0ZpZWxkc1tuYW1lXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChuYW1lIGluIHRoaXMpIHtcblx0XHRcdFx0XHRjb25zdCBzZWxmOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB0aGlzO1xuXHRcdFx0XHRcdHJldHVybiBzZWxmW25hbWVdO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IChfOiBhbnksIG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IGFueSA9PiB7XG5cdFx0XHRcdGlmIChuYW1lIGluIHRoaXMuX19pbnN0YW5jZS5fX2luc3RhbmNlRmllbGRzKSB7XG5cdFx0XHRcdFx0dGhpcy5fX2luc3RhbmNlLl9faW5zdGFuY2VGaWVsZHNbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChuYW1lIGluIHRoaXMuX19pbnN0YW5jZS5fX3N0YXRpY0ZpZWxkcykge1xuXHRcdFx0XHRcdHRoaXMuX19pbnN0YW5jZS5fX3N0YXRpY0ZpZWxkc1tuYW1lXSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdH0pXG5cdH1cblxuXHRwdWJsaWMgb3ZlcnJpZGUgc2VyaWFsaXplKCk6IFNlcmlhbGl6YXRpb25PYmplY3Qge1xuXHRcdGNvbnN0IG9iamVjdDogU2VyaWFsaXphdGlvbk9iamVjdCA9IHt9O1xuXG5cdFx0b2JqZWN0W3RoaXMuY2xhc3NOYW1lXSA9IHsuLi50aGlzLl9faW5zdGFuY2U/Ll9faW5zdGFuY2VGaWVsZHN9O1xuXG5cdFx0cmV0dXJuIG9iamVjdDtcblx0fVxuXG5cdHB1YmxpYyBvdmVycmlkZSB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnNlcmlhbGl6ZSgpLCBudWxsLCAyKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FzdFZhbHVlKHZhbHVlOiBhbnksIGV4cGVjdGVkOiBhbnkgPSBudWxsKTogYW55IHtcblx0Y29uc3QgdHlwZU9mID0gdHlwZW9mIHZhbHVlO1xuXG5cdGlmIChleHBlY3RlZCA9PT0gbnVsbCkge1xuXHRcdGlmICh2YWx1ZSA9PT0gR1JBTU1BUi5OVUxMKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0aWYgKHZhbHVlID09PSBHUkFNTUFSLlRSVUUpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRpZiAodmFsdWUgPT09IEdSQU1NQVIuRkFMU0UpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKHR5cGVPZiA9PT0gJ3N0cmluZycgJiYgdmFsdWUudHJpbSgpICE9PSAnJyAmJiAhaXNOYU4odmFsdWUpKSB7XG5cdFx0XHRyZXR1cm4gTnVtYmVyKHZhbHVlKTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0c3dpdGNoIChleHBlY3RlZCkge1xuXHRcdGNhc2UgVFlQRV9FTlVNLlNUUklORzpcblx0XHRcdHJldHVybiB0eXBlT2YgPT09ICdzdHJpbmcnID8gdmFsdWUgOiBTdHJpbmcodmFsdWUpO1xuXG5cdFx0Y2FzZSBUWVBFX0VOVU0uTlVNQkVSOlxuXHRcdFx0cmV0dXJuIHR5cGVPZiA9PT0gJ251bWJlcicgPyB2YWx1ZSA6IE51bWJlcih2YWx1ZSk7XG5cblx0XHRjYXNlIFRZUEVfRU5VTS5CT09MRUFOOlxuXHRcdFx0cmV0dXJuIHR5cGVPZiA9PT0gJ2Jvb2xlYW4nID8gdmFsdWUgOiB2YWx1ZSA9PT0gJ3RydWUnO1xuXG5cdFx0Y2FzZSBUWVBFX0VOVU0uTlVMTDpcblx0XHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9MeXJhU3RyaW5nKHZhbHVlOiBzdHJpbmcpOiBBU1ROb2RlIHtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLlNUUklORyk7XG5cdG5vZGUudmFsdWUgPSB2YWx1ZTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0x5cmFOdW1iZXIodmFsdWU6IG51bWJlcik6IEFTVE5vZGUge1xuXHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuTlVNQkVSKTtcblx0bm9kZS52YWx1ZSA9IHZhbHVlO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTHlyYUJvb2xlYW4odmFsdWU6IGJvb2xlYW4pOiBBU1ROb2RlIHtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLkJPT0xFQU4pO1xuXHRub2RlLnZhbHVlID0gdmFsdWU7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9MeXJhTnVsbCgpOiBBU1ROb2RlIHtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLk5VTEwpO1xuXHRub2RlLnZhbHVlID0gR1JBTU1BUi5OVUxMO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTHlyYUFycmF5KHZhbHVlczogYW55W10pOiBBU1ROb2RlIHtcblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RBcnJheU5vZGUoKTtcblx0bm9kZS5lbGVtZW50cyA9IHZhbHVlcy5tYXAodmFsdWUgPT4gdG9MeXJhVmFsdWUodmFsdWUpKTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0x5cmFWYWx1ZSh2YWx1ZTogYW55KTogQVNUTm9kZSB7XG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFTVE5vZGUpIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSBUWVBFX0VOVU0uU1RSSU5HKSB7XG5cdFx0cmV0dXJuIHRvTHlyYVN0cmluZyh2YWx1ZSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSBUWVBFX0VOVU0uTlVNQkVSKSB7XG5cdFx0cmV0dXJuIHRvTHlyYU51bWJlcih2YWx1ZSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSBUWVBFX0VOVU0uQk9PTEVBTikge1xuXHRcdHJldHVybiB0b0x5cmFCb29sZWFuKHZhbHVlKTtcblx0fVxuXG5cdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIHRvTHlyYU51bGwoKTtcblx0fVxuXG5cdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdHJldHVybiB0b0x5cmFBcnJheSh2YWx1ZSk7XG5cdH1cblxuXHR0aHJvd05hdGl2ZUVycm9yKCdDYW5ub3QgY29udmVydCBuYXRpdmUgb2JqZWN0IHRvIEx5cmEgdmFsdWUnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21MeXJhVmFsdWUodmFsdWU6IGFueSk6IGFueSB7XG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFTVE5vZGUpIHtcblx0XHRyZXR1cm4gY2FzdFZhbHVlKHZhbHVlLnZhbHVlKTtcblx0fVxuXG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEluc3RhbmNlKSB7XG5cdFx0aWYgKHZhbHVlLl9fbmF0aXZlSW5zdGFuY2UpIHtcblx0XHRcdHJldHVybiB2YWx1ZS5fX25hdGl2ZUluc3RhbmNlO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgTHlyYU9iamVjdFZpZXcodmFsdWUpO1xuXHR9XG5cblx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0cmV0dXJuIHZhbHVlLm1hcChmcm9tTHlyYVZhbHVlKTtcblx0fVxuXG5cdHJldHVybiBjYXN0VmFsdWUodmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuVmFsdWUodmFsdWU6IGFueSk6IEFTVFJldHVybk5vZGUge1xuXHRjb25zdCBub2RlID0gbmV3IEFTVFJldHVybk5vZGUoKTtcblx0bm9kZS5hcmd1bWVudCA9IHRvTHlyYVZhbHVlKHZhbHVlKTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwTmF0aXZlSW5zdGFuY2UobHlyYU5hdGl2ZU9iamVjdDogTHlyYU5hdGl2ZU9iamVjdCwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogSW5zdGFuY2Uge1xuXHRpZiAoIW9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuaGFzKGx5cmFOYXRpdmVPYmplY3QuY2xhc3NOYW1lKSkge1xuXHRcdHRocm93TmF0aXZlRXJyb3IoYENsYXNzICR7bHlyYU5hdGl2ZU9iamVjdC5jbGFzc05hbWV9IG5vdCBmb3VuZC5gKTtcblx0fVxuXG5cdGNvbnN0IGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24gPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChseXJhTmF0aXZlT2JqZWN0LmNsYXNzTmFtZSk7XG5cdGNvbnN0IGluc3RhbmNlOiBJbnN0YW5jZSA9IGNsYXNzRGVmLmNvbnN0cnVjdEVtcHR5SW5zdGFuY2UoKTtcblxuXHRpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlID0gbHlyYU5hdGl2ZU9iamVjdDtcblxuXHRyZXR1cm4gaW5zdGFuY2U7XG59XG5cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uLy4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuY29uc3QgQ0xBU1NfTkFNRSA9ICdTdHJpbmcnO1xuXG5leHBvcnQgY2xhc3MgTHlyYVN0cmluZyBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHR2YWx1ZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcpIHtcblx0XHRzdXBlcihDTEFTU19OQU1FKTtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdH1cblxuXHQvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG5cdHRvVXBwZXJDYXNlKCk6IEx5cmFTdHJpbmcge1xuXHRcdHJldHVybiBuZXcgTHlyYVN0cmluZyh0aGlzLnZhbHVlLnRvVXBwZXJDYXNlKCkpO1xuXHR9XG5cblx0Ly8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuXHR0b0xvd2VyQ2FzZSgpOiBMeXJhU3RyaW5nIHtcblx0XHRyZXR1cm4gbmV3IEx5cmFTdHJpbmcodGhpcy52YWx1ZS50b0xvd2VyQ2FzZSgpKTtcblx0fVxuXG5cdG92ZXJyaWRlIHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0cmluZ1R5cGUgZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdENMQVNTX05BTUUsXG5cdFx0XHRMeXJhU3RyaW5nLFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfSB7XG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWx1ZSk7XG5cdFx0XHRcdFxuXHRwdWJsaWMgdG9VcHBlckNhc2UoKTogJHtDTEFTU19OQU1FfTtcblx0XG5cdHB1YmxpYyB0b0xvd2VyQ2FzZSgpOiAke0NMQVNTX05BTUV9O1xuXG5cdHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmc7XG59YFxuXHRcdFx0KSk7XG5cblx0XHR0aGlzLmlzQXV0b2xvYWRBYmxlID0gdHJ1ZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge05hdGl2ZUNsYXNzfSBmcm9tIFwiLi4vbmF0aXZlX2NsYXNzXCI7XG5pbXBvcnQge0x5cmFOYXRpdmVPYmplY3R9IGZyb20gXCIuLi8uLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX2NvbnZlcnNpb25cIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vLi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5jb25zdCBDTEFTU19OQU1FID0gJ1N5c3RlbSc7XG5cbmV4cG9ydCBjbGFzcyBMeXJhU3lzdGVtIHtcblx0c3RhdGljIGFsZXJ0KG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuXHRcdGFsZXJ0KG1lc3NhZ2UpO1xuXHR9XG5cblx0c3RhdGljIHByaW50KG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuXHRcdGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuXHR9XG5cblx0c3RhdGljIGluZm8odmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdGNvbnNvbGUuaW5mbyh2YWx1ZS5zZXJpYWxpemUoKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnNvbGUuaW5mbyh2YWx1ZSk7XG5cdH1cblxuXHRzdGF0aWMgd2FybmluZyh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgTHlyYU5hdGl2ZU9iamVjdCkge1xuXHRcdFx0Y29uc29sZS53YXJuKHZhbHVlLnNlcmlhbGl6ZSgpKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc29sZS53YXJuKHZhbHVlKTtcblx0fVxuXG5cdHN0YXRpYyBlcnJvcih2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgTHlyYU5hdGl2ZU9iamVjdCkge1xuXHRcdFx0Y29uc29sZS5lcnJvcih2YWx1ZS5zZXJpYWxpemUoKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnNvbGUuZXJyb3IodmFsdWUpO1xuXHR9XG5cblx0c3RhdGljIGxvZyh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgTHlyYU5hdGl2ZU9iamVjdCkge1xuXHRcdFx0Y29uc29sZS5sb2codmFsdWUuc2VyaWFsaXplKCkpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zb2xlLmxvZyh2YWx1ZSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFN5c3RlbSBleHRlbmRzIE5hdGl2ZUNsYXNzIHtcblx0c3RhdGljIENMQVNTX05BTUUgPSBDTEFTU19OQU1FO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0Q0xBU1NfTkFNRSxcblx0XHRcdEx5cmFTeXN0ZW0sXG5cdFx0XHRuZXcgU291cmNlKFxuXHRcdFx0XHRgXG5jbGFzcyAke0NMQVNTX05BTUV9IHtcblx0cHVibGljIHN0YXRpYyBhbGVydChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkO1xuXHRcblx0cHVibGljIHN0YXRpYyBwcmludChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkO1xuXHRcblx0cHVibGljIHN0YXRpYyBpbmZvKHZhbHVlOiBtaXhlZCk6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgc3RhdGljIHdhcm5pbmcodmFsdWU6IG1peGVkKTogdm9pZDtcblx0XG5cdHB1YmxpYyBzdGF0aWMgZXJyb3IodmFsdWU6IG1peGVkKTogdm9pZDtcblx0XG5cdHB1YmxpYyBzdGF0aWMgbG9nKHZhbHVlOiBtaXhlZCk6IHZvaWQ7XG59YFxuXHRcdFx0KSk7XG5cblx0XHR0aGlzLmlzQXV0b2xvYWRBYmxlID0gZmFsc2U7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuLi8uLi9jb3JlL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmNvbnN0IENMQVNTX05BTUUgPSAnQXNzZXJ0JztcblxuY29uc3QgaWZGYWlsZWQgPSAobWVzc2FnZTogc3RyaW5nID0gJycpID0+IHtcblx0dGhyb3cgbmV3IEVycm9yKCdbQXNzZXJ0aW9uRXJyb3JdICcgKyAobWVzc2FnZSB8fCAnQXNzZXJ0aW9uIGZhaWxlZC4nKSk7XG59O1xuXG5leHBvcnQgY2xhc3MgTHlyYUFzc2VydCB7XG5cdHN0YXRpYyBpc1RydWUoY29uZGl0aW9uOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcgPSAnJykge1xuXHRcdGlmICghY29uZGl0aW9uKSB7XG5cdFx0XHRpZkZhaWxlZChtZXNzYWdlKTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgaXNGYWxzZShjb25kaXRpb246IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZyA9ICcnKSB7XG5cdFx0aWYgKGNvbmRpdGlvbikge1xuXHRcdFx0aWZGYWlsZWQobWVzc2FnZSk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBc3NlcnQgZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdENMQVNTX05BTUUsXG5cdFx0XHRMeXJhQXNzZXJ0LFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfSB7XG5cdHB1YmxpYyBzdGF0aWMgaXNUcnVlKGNvbmRpdGlvbjogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nID0gXCJcIik6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgc3RhdGljIGlzRmFsc2UoY29uZGl0aW9uOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcgPSBcIlwiKTogdm9pZDtcbn1gXG5cdFx0XHQpKTtcblxuXHRcdHRoaXMuaXNBdXRvbG9hZEFibGUgPSBmYWxzZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge05hdGl2ZUNsYXNzfSBmcm9tIFwiLi4vbmF0aXZlX2NsYXNzXCI7XG5pbXBvcnQge0x5cmFOYXRpdmVPYmplY3R9IGZyb20gXCIuLi8uLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX2NvbnZlcnNpb25cIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vLi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5jb25zdCBDTEFTU19OQU1FID0gJ051bWJlcic7XG5cbmV4cG9ydCBjbGFzcyBMeXJhTnVtYmVyIGV4dGVuZHMgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdHByaXZhdGUgcmVhZG9ubHkgdmFsdWU6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcih2YWx1ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIoQ0xBU1NfTkFNRSk7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHR9XG5cblx0cHVibGljIHRvTnVtYmVyKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdH1cblxuXHRvdmVycmlkZSB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlLnRvU3RyaW5nKCk7XG5cdH1cblxuXHRwdWJsaWMgX19hZGQob3RoZXI6IEx5cmFOdW1iZXIpOiBMeXJhTnVtYmVyIHtcblx0XHRyZXR1cm4gbmV3IEx5cmFOdW1iZXIodGhpcy52YWx1ZSArIG90aGVyLnZhbHVlKTtcblx0fVxuXG5cdHB1YmxpYyBfX3N1YnRyYWN0KG90aGVyOiBMeXJhTnVtYmVyKTogTHlyYU51bWJlciB7XG5cdFx0cmV0dXJuIG5ldyBMeXJhTnVtYmVyKHRoaXMudmFsdWUgLSBvdGhlci52YWx1ZSk7XG5cdH1cblxuXHRwdWJsaWMgX19tdWx0aXBseShvdGhlcjogTHlyYU51bWJlcik6IEx5cmFOdW1iZXIge1xuXHRcdHJldHVybiBuZXcgTHlyYU51bWJlcih0aGlzLnZhbHVlICogb3RoZXIudmFsdWUpO1xuXHR9XG5cblx0cHVibGljIF9fZGl2aWRlKG90aGVyOiBMeXJhTnVtYmVyKTogTHlyYU51bWJlciB7XG5cdFx0cmV0dXJuIG5ldyBMeXJhTnVtYmVyKHRoaXMudmFsdWUgLyBvdGhlci52YWx1ZSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE51bWJlclR5cGUgZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdENMQVNTX05BTUUsXG5cdFx0XHRMeXJhTnVtYmVyLFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtDTEFTU19OQU1FfSB7XG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWx1ZTogbnVtYmVyKTtcblx0XG5cdHB1YmxpYyB0b051bWJlcigpOiBudW1iZXI7XG5cdFxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nO1xuXHRcblx0cHVibGljIG9wZXJhdG9yICsob3RoZXI6ICR7Q0xBU1NfTkFNRX0pOiAke0NMQVNTX05BTUV9O1xuXHRcblx0cHJpdmF0ZSBfX2FkZChvdGhlcjogJHtDTEFTU19OQU1FfSk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwdWJsaWMgb3BlcmF0b3IgLShvdGhlcjogJHtDTEFTU19OQU1FfSk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwcml2YXRlIF9fc3VidHJhY3Qob3RoZXI6ICR7Q0xBU1NfTkFNRX0pOiAke0NMQVNTX05BTUV9O1xuXHRcblx0cHVibGljIG9wZXJhdG9yICoob3RoZXI6ICR7Q0xBU1NfTkFNRX0pOiAke0NMQVNTX05BTUV9O1xuXHRcblx0cHJpdmF0ZSBfX211bHRpcGx5KG90aGVyOiAke0NMQVNTX05BTUV9KTogJHtDTEFTU19OQU1FfTtcblx0XG5cdHB1YmxpYyBvcGVyYXRvciAvKG90aGVyOiAke0NMQVNTX05BTUV9KTogJHtDTEFTU19OQU1FfTtcblx0XG5cdHByaXZhdGUgX19kaXZpZGUob3RoZXI6ICR7Q0xBU1NfTkFNRX0pOiAke0NMQVNTX05BTUV9O1xuXHRcblx0cHVibGljIG9wZXJhdG9yICUob3RoZXI6ICR7Q0xBU1NfTkFNRX0pOiAke0NMQVNTX05BTUV9O1xuXHRcblx0cHJpdmF0ZSBfX21vZHVsdXMob3RoZXI6ICR7Q0xBU1NfTkFNRX0pOiAke0NMQVNTX05BTUV9O1xuXHRcblx0cHVibGljIG9wZXJhdG9yID09KG90aGVyOiAke0NMQVNTX05BTUV9KTogJHtDTEFTU19OQU1FfTtcblx0XG5cdHByaXZhdGUgX19lcXVhbChvdGhlcjogJHtDTEFTU19OQU1FfSk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwdWJsaWMgb3BlcmF0b3IgIT0ob3RoZXI6ICR7Q0xBU1NfTkFNRX0pOiAke0NMQVNTX05BTUV9O1xuXHRcblx0cHJpdmF0ZSBfX25vdF9lcXVhbChvdGhlcjogJHtDTEFTU19OQU1FfSk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwdWJsaWMgb3BlcmF0b3IgPChvdGhlcjogJHtDTEFTU19OQU1FfSk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwcml2YXRlIF9fbGVzc190aGFuKG90aGVyOiAke0NMQVNTX05BTUV9KTogJHtDTEFTU19OQU1FfTtcblx0XG5cdHB1YmxpYyBvcGVyYXRvciA8PShvdGhlcjogJHtDTEFTU19OQU1FfSk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwcml2YXRlIF9fbGVzc19lcXVhbChvdGhlcjogJHtDTEFTU19OQU1FfSk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwdWJsaWMgb3BlcmF0b3IgPihvdGhlcjogJHtDTEFTU19OQU1FfSk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwcml2YXRlIF9fZ3JlYXRlcl90aGFuKG90aGVyOiAke0NMQVNTX05BTUV9KTogJHtDTEFTU19OQU1FfTtcblx0XG5cdHB1YmxpYyBvcGVyYXRvciA+PShvdGhlcjogJHtDTEFTU19OQU1FfSk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwcml2YXRlIF9fZ3JlYXRlcl9lcXVhbChvdGhlcjogJHtDTEFTU19OQU1FfSk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwdWJsaWMgb3BlcmF0b3IgISgpOiBib29sZWFuO1xuXHRcblx0cHJpdmF0ZSBfX25vdCgpOiBib29sZWFuO1xuXHRcblx0cHVibGljIG9wZXJhdG9yIHUrKCk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwcml2YXRlIF9fdW5hcnlfcGx1cygpOiAke0NMQVNTX05BTUV9O1xuXHRcblx0cHVibGljIG9wZXJhdG9yIHUtKCk6ICR7Q0xBU1NfTkFNRX07XG5cdFxuXHRwcml2YXRlIF9fdW5hcnlfbWludXMoKTogJHtDTEFTU19OQU1FfTtcbn1gXG5cdFx0XHQpKTtcblxuXHRcdHRoaXMuaXNBdXRvbG9hZEFibGUgPSB0cnVlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7TmF0aXZlQ2xhc3N9IGZyb20gXCIuLi9uYXRpdmVfY2xhc3NcIjtcbmltcG9ydCB7THlyYU5hdGl2ZU9iamVjdH0gZnJvbSBcIi4uLy4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfY29udmVyc2lvblwiO1xuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuLi8uLi9jb3JlL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5cbmNvbnN0IEFSUkFZX0NMQVNTX05BTUUgPSAnQXJyYXknO1xuY29uc3QgQVJSQVlfSVRFUkFUT1JfQ0xBU1NfTkFNRSA9ICdBcnJheUl0ZXJhdG9yJztcblxuZXhwb3J0IGNsYXNzIEx5cmFBcnJheSBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHRwdWJsaWMgdmFsdWVzOiBhbnlbXTtcblxuXHRjb25zdHJ1Y3Rvcih2YWx1ZXM6IGFueVtdID0gW10pIHtcblx0XHRzdXBlcihBUlJBWV9DTEFTU19OQU1FKTtcblxuXHRcdHRoaXMudmFsdWVzID0gdmFsdWVzO1xuXHR9XG5cblx0cHVibGljIGl0ZXJhdG9yKCk6IEx5cmFBcnJheUl0ZXJhdG9yIHtcblx0XHRyZXR1cm4gbmV3IEx5cmFBcnJheUl0ZXJhdG9yKHRoaXMpO1xuXHR9XG5cblx0cHVibGljIGxlbmd0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlcy5sZW5ndGg7XG5cdH1cblxuXHRwdWJsaWMgcHVzaCh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0dGhpcy52YWx1ZXMucHVzaCh2YWx1ZSk7XG5cdH1cblxuXHQvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG5cdHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzW2luZGV4XSA/PyBudWxsO1xuXHR9XG5cblx0Ly8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuXHRwdWJsaWMgcmVtb3ZlQXQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMudmFsdWVzID0gdGhpcy52YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcblx0fVxuXG5cdG92ZXJyaWRlIHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0Y29uc3QgdmFsdWVzID0gdGhpc1xuXHRcdFx0LnZhbHVlc1xuXHRcdFx0Lm1hcCh2YWx1ZSA9PiB7XG5cdFx0XHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEx5cmFBcnJheSkge1xuXHRcdFx0XHRcdHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdH0pO1xuXG5cdFx0cmV0dXJuIGBbJHt2YWx1ZXMuam9pbignLCAnKX1dYDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQXJyYXlUeXBlIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IEFSUkFZX0NMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRBUlJBWV9DTEFTU19OQU1FLFxuXHRcdFx0THlyYUFycmF5LFxuXHRcdFx0bmV3IFNvdXJjZShcblx0XHRcdFx0YFxuY2xhc3MgJHtBUlJBWV9DTEFTU19OQU1FfTxUPiBpbXBsZW1lbnRzIEl0ZXJhYmxlPFQ+IHtcblx0cHVibGljIGNvbnN0cnVjdG9yKHZhbHVlczogQXJyYXk8VD4gPSBbXSk7XG5cdFxuXHRwdWJsaWMgaXRlcmF0b3IoKTogSXRlcmF0b3I8VD47XG5cdFxuXHRwdWJsaWMgbGVuZ3RoKCk6IG51bWJlcjtcblx0XG5cdHB1YmxpYyBwdXNoKHZhbHVlOiBUKTogdm9pZDtcblx0XG5cdHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IFQ/O1xuXHRcblx0cHVibGljIHJlbW92ZUF0KGluZGV4OiBudW1iZXIpOiB2b2lkO1xuXHRcblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZztcbn1gXG5cdFx0XHQpKTtcblxuXHRcdHRoaXMuaXNBdXRvbG9hZEFibGUgPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMeXJhQXJyYXlJdGVyYXRvciBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHR2YWx1ZXM6IGFueVtdO1xuXHRpbmRleDogbnVtYmVyID0gMDtcblxuXHRjb25zdHJ1Y3RvcihhcnJheTogTHlyYUFycmF5KSB7XG5cdFx0c3VwZXIoQVJSQVlfSVRFUkFUT1JfQ0xBU1NfTkFNRSk7XG5cblx0XHR0aGlzLnZhbHVlcyA9IGFycmF5LnZhbHVlcztcblx0fVxuXG5cdHB1YmxpYyByZXdpbmQoKSB7XG5cdFx0dGhpcy5pbmRleCA9IDA7XG5cdH1cblxuXHRwdWJsaWMgaGFzTmV4dCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pbmRleCA8IHRoaXMudmFsdWVzLmxlbmd0aDtcblx0fVxuXG5cdHB1YmxpYyBuZXh0KCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmluZGV4ICsgMSA+IHRoaXMudmFsdWVzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuaW5kZXgrKztcblx0fVxuXG5cdC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcblx0cHVibGljIHByZXZpb3VzKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmluZGV4ICsgMSA8IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmluZGV4LS07XG5cdH1cblxuXHQvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG5cdHB1YmxpYyBrZXkoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5pbmRleDtcblx0fVxuXG5cdHB1YmxpYyBjdXJyZW50KCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzW3RoaXMuaW5kZXhdO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBcnJheUl0ZXJhdG9yVHlwZSBleHRlbmRzIE5hdGl2ZUNsYXNzIHtcblx0c3RhdGljIENMQVNTX05BTUUgPSBBUlJBWV9JVEVSQVRPUl9DTEFTU19OQU1FO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0QVJSQVlfSVRFUkFUT1JfQ0xBU1NfTkFNRSxcblx0XHRcdEx5cmFBcnJheSxcblx0XHRcdG5ldyBTb3VyY2UoXG5cdFx0XHRcdGBcbmNsYXNzICR7QVJSQVlfSVRFUkFUT1JfQ0xBU1NfTkFNRX08VD4gaW1wbGVtZW50cyBJdGVyYXRvcjxUPiB7XG5cdHB1YmxpYyBjb25zdHJ1Y3RvcihhcnJheTogQXJyYXk8VD4pO1xuXHRcblx0cHVibGljIGhhc05leHQoKTogYm9vbGVhbjtcblx0XG5cdHB1YmxpYyBuZXh0KCk6IHZvaWQ7XG5cdFxuXHRwdWJsaWMgcHJldmlvdXMoKTogdm9pZDtcblx0XG5cdHB1YmxpYyBrZXkoKTogbnVtYmVyO1xuXHRcblx0cHVibGljIGN1cnJlbnQoKTogVDtcblx0XG5cdHB1YmxpYyByZXdpbmQoKTogdm9pZDtcbn1gXG5cdFx0XHQpKTtcblxuXHRcdHRoaXMuaXNBdXRvbG9hZEFibGUgPSB0cnVlO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7dG9MeXJhVmFsdWV9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge0xhbWJkYUZ1bmN0aW9uQ2FsbH0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX3J1bnRpbWVcIjtcblxuXG5leHBvcnQgY2xhc3MgU3RhdGU8VCA9IGFueT4ge1xuXHRwcml2YXRlIHZhbHVlOiBUO1xuXHRwcml2YXRlIHN1YnNjcmliZXJzOiBNYXA8bnVtYmVyLCAodmFsdWU6IFQpID0+IHZvaWQ+ID0gbmV3IE1hcDxudW1iZXIsICh2YWx1ZTogVCkgPT4gdm9pZD4oKTtcblx0cHJpdmF0ZSBpZDogbnVtYmVyID0gMDtcblxuXHRjb25zdHJ1Y3Rvcihpbml0aWFsOiBUKSB7XG5cdFx0dGhpcy52YWx1ZSA9IGluaXRpYWw7XG5cdH1cblxuXHRnZXQoKTogVCB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdH1cblxuXHRzZXQodmFsdWU6IFQpOiB2b2lkIHtcblx0XHRpZiAodGhpcy52YWx1ZSA9PT0gdmFsdWUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdFx0dGhpcy5ub3RpZnkoKTtcblx0fVxuXG5cdHN1YnNjcmliZShmbjogTGFtYmRhRnVuY3Rpb25DYWxsKTogbnVtYmVyIHtcblx0XHRjb25zdCBuZXh0SWQ6IG51bWJlciA9IHRoaXMuaWQrKztcblx0XHR0aGlzLnN1YnNjcmliZXJzLnNldChuZXh0SWQsIHRoaXMud3JhcENhbGxiYWNrKGZuKSk7XG5cdFx0cmV0dXJuIG5leHRJZDtcblx0fVxuXG5cdHVuc3Vic2NyaWJlKGlkOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zdWJzY3JpYmVycy5kZWxldGUoaWQpO1xuXHR9XG5cblx0cHJpdmF0ZSBub3RpZnkoKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBmbiBvZiB0aGlzLnN1YnNjcmliZXJzLnZhbHVlcygpKSB7XG5cdFx0XHRmbih0aGlzLnZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHdyYXBDYWxsYmFjayhmbjogTGFtYmRhRnVuY3Rpb25DYWxsKSB7XG5cdFx0cmV0dXJuICh2YWx1ZTogVCk6IHZvaWQgPT4ge1xuXHRcdFx0Zm4uZXZhbENhbGwodG9MeXJhVmFsdWUodmFsdWUpKTtcblx0XHR9XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uLy4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcbmltcG9ydCB7U3RhdGV9IGZyb20gXCIuLi8uLi9jb3JlL2V2ZW50L3N0YXRlXCI7XG5pbXBvcnQgdHlwZSB7TGFtYmRhRnVuY3Rpb25DYWxsfSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9ydW50aW1lXCI7XG5cbmNvbnN0IENMQVNTX05BTUUgPSAnU3RhdGUnO1xuXG5leHBvcnQgY2xhc3MgTHlyYVN0YXRlPFQ+IGV4dGVuZHMgTHlyYU5hdGl2ZU9iamVjdCB7XG5cdHByaXZhdGUgc3RhdGU6IFN0YXRlPFQ+O1xuXG5cdGNvbnN0cnVjdG9yKGluaXRpYWw6IFQpIHtcblx0XHRzdXBlcihDTEFTU19OQU1FKTtcblx0XHR0aGlzLnN0YXRlID0gbmV3IFN0YXRlPFQ+KGluaXRpYWwpO1xuXHR9XG5cblx0Z2V0KCk6IFQge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLmdldCgpO1xuXHR9XG5cblx0c2V0KHZhbHVlOiBUKTogdm9pZCB7XG5cdFx0dGhpcy5zdGF0ZS5zZXQodmFsdWUpO1xuXHR9XG5cblx0c3Vic2NyaWJlKGZuOiBMYW1iZGFGdW5jdGlvbkNhbGwpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLnN1YnNjcmliZShmbik7XG5cdH1cblxuXHR1bnN1YnNjcmliZShpZDogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUudW5zdWJzY3JpYmUoaWQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTdGF0ZVR5cGUgZXh0ZW5kcyBOYXRpdmVDbGFzcyB7XG5cdHN0YXRpYyBDTEFTU19OQU1FID0gQ0xBU1NfTkFNRTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdENMQVNTX05BTUUsXG5cdFx0XHRMeXJhU3RhdGUsXG5cdFx0XHRuZXcgU291cmNlKFxuXHRcdFx0XHRgXG5jbGFzcyAke0NMQVNTX05BTUV9PFQ+IHtcblx0cHVibGljIGNvbnN0cnVjdG9yKGluaXRpYWw6IFQpO1xuXG5cdHB1YmxpYyBnZXQoKTogVDtcblx0XG5cdHB1YmxpYyBzZXQodmFsdWU6IFQpOiB2b2lkO1xuXHRcblx0cHVibGljIHN1YnNjcmliZShmbjogKFQpIC0+IG1peGVkKTogbnVtYmVyO1xuXHRcblx0cHVibGljIHVuc3Vic2NyaWJlKGlkOiBudW1iZXIpOiBib29sZWFuO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IHRydWU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uL25hdGl2ZV9jbGFzc1wiO1xuaW1wb3J0IHtMeXJhTmF0aXZlT2JqZWN0fSBmcm9tIFwiLi4vLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uLy4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcblxuY29uc3QgQ0xBU1NfTkFNRSA9ICdMeXJhRXZlbnRzJztcblxuZXhwb3J0IGNsYXNzIEx5cmFFdmVudCBleHRlbmRzIEx5cmFOYXRpdmVPYmplY3Qge1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGV2ZW50OiBFdmVudCkge1xuXHRcdHN1cGVyKENMQVNTX05BTUUpO1xuXHR9XG5cblx0Z2V0VHlwZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmV2ZW50LnR5cGU7XG5cdH1cblxuXHRwcmV2ZW50RGVmYXVsdCgpOiB2b2lkIHtcblx0XHR0aGlzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEV2ZW50VHlwZSBleHRlbmRzIE5hdGl2ZUNsYXNzIHtcblx0c3RhdGljIENMQVNTX05BTUUgPSBDTEFTU19OQU1FO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0Q0xBU1NfTkFNRSxcblx0XHRcdEx5cmFFdmVudCxcblx0XHRcdG5ldyBTb3VyY2UoXG5cdFx0XHRcdGBcbmNsYXNzICR7Q0xBU1NfTkFNRX0ge1xuXHRwdWJsaWMgY29uc3RydWN0b3IoZXZlbnQpO1xuXG5cdHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZztcblxuXHRwdWJsaWMgcHJldmVudERlZmF1bHQoKTogdm9pZDtcbn1gKSk7XG5cblx0XHR0aGlzLmlzQXV0b2xvYWRBYmxlID0gdHJ1ZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge05hdGl2ZUNsYXNzfSBmcm9tIFwiLi4vbmF0aXZlX2NsYXNzXCI7XG5pbXBvcnQge0x5cmFOYXRpdmVPYmplY3R9IGZyb20gXCIuLi8uLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX2NvbnZlcnNpb25cIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vLi4vY29yZS9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuXG5jb25zdCBDTEFTU19OQU1FID0gJ0Jvb2xlYW4nO1xuXG5leHBvcnQgY2xhc3MgTHlyYUJvb2xlYW4gZXh0ZW5kcyBMeXJhTmF0aXZlT2JqZWN0IHtcblx0dmFsdWU6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IodmFsdWU6IGJvb2xlYW4pIHtcblx0XHRzdXBlcihDTEFTU19OQU1FKTtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdH1cblxuXHRvdmVycmlkZSB0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlLnRvU3RyaW5nKCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvb2xlYW5UeXBlIGV4dGVuZHMgTmF0aXZlQ2xhc3Mge1xuXHRzdGF0aWMgQ0xBU1NfTkFNRSA9IENMQVNTX05BTUU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRDTEFTU19OQU1FLFxuXHRcdFx0THlyYUJvb2xlYW4sXG5cdFx0XHRuZXcgU291cmNlKFxuXHRcdFx0XHRgXG5jbGFzcyAke0NMQVNTX05BTUV9IHtcblx0cHVibGljIGNvbnN0cnVjdG9yKHZhbHVlKTtcblxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nO1xufWBcblx0XHRcdCkpO1xuXG5cdFx0dGhpcy5pc0F1dG9sb2FkQWJsZSA9IHRydWU7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtOYXRpdmVDbGFzc30gZnJvbSBcIi4vbmF0aXZlX2NsYXNzXCI7XG5pbXBvcnQge1N0cmluZ1R5cGV9IGZyb20gXCIuL2NsYXNzZXMvc3RyaW5nXCI7XG5pbXBvcnQge1N5c3RlbX0gZnJvbSBcIi4vY2xhc3Nlcy9zeXN0ZW1cIjtcbmltcG9ydCB7QXNzZXJ0fSBmcm9tIFwiLi9jbGFzc2VzL2Fzc2VydFwiO1xuaW1wb3J0IHtOdW1iZXJUeXBlfSBmcm9tIFwiLi9jbGFzc2VzL251bWJlclwiO1xuaW1wb3J0IHtBcnJheUl0ZXJhdG9yVHlwZSwgQXJyYXlUeXBlfSBmcm9tIFwiLi9jbGFzc2VzL2FycmF5XCI7XG5pbXBvcnQge1N0YXRlVHlwZX0gZnJvbSBcIi4vY2xhc3Nlcy9zdGF0ZVwiO1xuaW1wb3J0IHtFdmVudFR5cGV9IGZyb20gXCIuL2NsYXNzZXMvZXZlbnRcIjtcbmltcG9ydCB7Qm9vbGVhblR5cGV9IGZyb20gXCIuL2NsYXNzZXMvYm9vbGVhbi50c1wiO1xuXG5leHBvcnQgY2xhc3MgTmF0aXZlQ2xhc3NlcyB7XG5cdHJlYWRvbmx5IHJlZ2lzdHJ5OiBNYXA8c3RyaW5nLCBOYXRpdmVDbGFzcz4gPSBuZXcgTWFwKCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5yZWdpc3RyeS5zZXQoU3RyaW5nVHlwZS5DTEFTU19OQU1FLCBuZXcgU3RyaW5nVHlwZSgpKTtcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChOdW1iZXJUeXBlLkNMQVNTX05BTUUsIG5ldyBOdW1iZXJUeXBlKCkpO1xuXHRcdHRoaXMucmVnaXN0cnkuc2V0KEJvb2xlYW5UeXBlLkNMQVNTX05BTUUsIG5ldyBCb29sZWFuVHlwZSgpKTtcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChBcnJheVR5cGUuQ0xBU1NfTkFNRSwgbmV3IEFycmF5VHlwZSgpKTtcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChBcnJheUl0ZXJhdG9yVHlwZS5DTEFTU19OQU1FLCBuZXcgQXJyYXlJdGVyYXRvclR5cGUoKSlcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChTeXN0ZW0uQ0xBU1NfTkFNRSwgbmV3IFN5c3RlbSgpKTtcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChBc3NlcnQuQ0xBU1NfTkFNRSwgbmV3IEFzc2VydCgpKTtcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChTdGF0ZVR5cGUuQ0xBU1NfTkFNRSwgbmV3IFN0YXRlVHlwZSgpKTtcblx0XHR0aGlzLnJlZ2lzdHJ5LnNldChFdmVudFR5cGUuQ0xBU1NfTkFNRSwgbmV3IEV2ZW50VHlwZSgpKVxuXHR9XG59XG4iLAogICAgImltcG9ydCB7QVNUUGFyYW1ldGVyTm9kZSwgQVNUVHlwZU5vZGV9IGZyb20gXCIuLi9jb3JlL2FzdFwiO1xuaW1wb3J0IHtUWVBFX0VOVU19IGZyb20gXCIuLi9jb3JlL2dyYW1tYXJcIjtcbmltcG9ydCB7dGhyb3dOYXRpdmVFcnJvcn0gZnJvbSBcIi4uL2NvcmUvZXJyb3JzXCI7XG5cbmV4cG9ydCBjbGFzcyBOYXRpdmVGdW5jdGlvbiB7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblx0cmVhZG9ubHkgcGFyYW1ldGVyTm9kZXM6IEFTVFBhcmFtZXRlck5vZGVbXSA9IFtdO1xuXHRyZWFkb25seSByZXR1cm5UeXBlOiBBU1RUeXBlTm9kZTtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSwgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGUpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMucGFyYW1ldGVyTm9kZXMgPSBwYXJhbWV0ZXJzO1xuXHRcdHRoaXMucmV0dXJuVHlwZSA9IHJldHVyblR5cGU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE5hdGl2ZUZ1bmN0aW9uVHlwZVJlZ2lzdHJ5IHtcblx0cmVhZG9ubHkgZnVuY3Rpb25zOiBNYXA8c3RyaW5nLCBOYXRpdmVGdW5jdGlvbj4gPSBuZXcgTWFwKCk7XG5cblx0cHVibGljIGhhcyhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5mdW5jdGlvbnMuaGFzKG5hbWUpO1xuXHR9XG5cblx0cHVibGljIGdldChuYW1lOiBzdHJpbmcpOiBOYXRpdmVGdW5jdGlvbiB7XG5cdFx0Y29uc3QgbmF0aXZlRnVuY3Rpb246IE5hdGl2ZUZ1bmN0aW9uIHwgdW5kZWZpbmVkID0gdGhpcy5mdW5jdGlvbnMuZ2V0KG5hbWUpO1xuXHRcdGlmICghbmF0aXZlRnVuY3Rpb24pIHtcblx0XHRcdHRocm93TmF0aXZlRXJyb3IoYEZ1bmN0aW9uICR7bmFtZX0gbm90IGZvdW5kLmApO1xuXHRcdH1cblx0XHRyZXR1cm4gbmF0aXZlRnVuY3Rpb247XG5cdH1cblxuXHRwdWJsaWMgc2V0KG5hbWU6IHN0cmluZywgcGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdLCByZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSk6IE5hdGl2ZUZ1bmN0aW9uVHlwZVJlZ2lzdHJ5IHtcblx0XHR0aGlzLmZ1bmN0aW9ucy5zZXQobmFtZSwgbmV3IE5hdGl2ZUZ1bmN0aW9uKG5hbWUsIHBhcmFtZXRlcnMsIHJldHVyblR5cGUpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTmF0aXZlRnVuY3Rpb25zIHtcblx0c3RhdGljIFBSSU5UID0gJ3ByaW50JztcblxuXHQvKipcblx0ICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPn1cblx0ICovXG5cdHB1YmxpYyBnZXRHbG9iYWxGdW5jdGlvbnMoKTogeyBba2V5OiBzdHJpbmddOiAoLi4uYXJnczogYW55W10pID0+IGFueSB9IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0W05hdGl2ZUZ1bmN0aW9ucy5QUklOVF06ICguLi5hcmdzKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHRwdWJsaWMgZ2V0R2xvYmFsRnVuY3Rpb25UeXBlUmVnaXN0cnkoKTogTmF0aXZlRnVuY3Rpb25UeXBlUmVnaXN0cnkge1xuXHRcdGNvbnN0IGZ1bmN0aW9ucyA9IG5ldyBOYXRpdmVGdW5jdGlvblR5cGVSZWdpc3RyeSgpO1xuXHRcdGZ1bmN0aW9ucy5zZXQoXG5cdFx0XHROYXRpdmVGdW5jdGlvbnMuUFJJTlQsXG5cdFx0XHRbcGFyYW1ldGVyKHR5cGUoVFlQRV9FTlVNLlNUUklORyksICdtZXNzYWdlJyldLFxuXHRcdFx0dHlwZShUWVBFX0VOVU0uVk9JRClcblx0XHQpXG5cblx0XHRyZXR1cm4gZnVuY3Rpb25zO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHR5cGUobmFtZTogc3RyaW5nLCBudWxsYWJsZSA9IGZhbHNlKTogQVNUVHlwZU5vZGUge1xuXHRyZXR1cm4gbmV3IEFTVFR5cGVOb2RlKEFTVFR5cGVOb2RlLktJTkRfU0lNUExFLCBuYW1lLCBudWxsYWJsZSk7XG59XG5cbmZ1bmN0aW9uIHBhcmFtZXRlcih0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGUsIG5hbWU6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBhbnkgPSBudWxsKTogQVNUUGFyYW1ldGVyTm9kZSB7XG5cdHJldHVybiBuZXcgQVNUUGFyYW1ldGVyTm9kZShuYW1lLCB0eXBlQW5ub3RhdGlvbiwgZGVmYXVsdFZhbHVlKTtcbn1cbiIsCiAgICAiaW1wb3J0IHtUWVBFX0VOVU19IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5pbXBvcnQge1xuXHRBU1RDbGFzc05vZGUsXG5cdEFTVEZpZWxkTm9kZSxcblx0QVNUSW50ZXJmYWNlTm9kZSxcblx0QVNUTWV0aG9kTm9kZSxcblx0QVNUTm9kZSxcblx0QVNUUGFyYW1ldGVyTm9kZSxcblx0QVNUVHlwZU5vZGVcbn0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHt0aHJvd1R5cGVFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5cbmV4cG9ydCBjbGFzcyBQcmltaXRpdmVUeXBlcyB7XG5cdHN0YXRpYyByZWFkb25seSBOVU1CRVI6IHN0cmluZyA9IFRZUEVfRU5VTS5OVU1CRVI7XG5cdHN0YXRpYyByZWFkb25seSBTVFJJTkc6IHN0cmluZyA9IFRZUEVfRU5VTS5TVFJJTkc7XG5cdHN0YXRpYyByZWFkb25seSBCT09MRUFOOiBzdHJpbmcgPSBUWVBFX0VOVU0uQk9PTEVBTjtcblx0c3RhdGljIHJlYWRvbmx5IE1JWEVEOiBzdHJpbmcgPSBUWVBFX0VOVU0uTUlYRUQ7XG5cdHN0YXRpYyByZWFkb25seSBOVUxMOiBzdHJpbmcgPSBUWVBFX0VOVU0uTlVMTDtcblx0c3RhdGljIHJlYWRvbmx5IFZPSUQ6IHN0cmluZyA9IFRZUEVfRU5VTS5WT0lEO1xuXG5cdHN0YXRpYyBoYXNUeXBlKHR5cGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChQcmltaXRpdmVUeXBlcywgdHlwZS50b1VwcGVyQ2FzZSgpKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgUHJpbWl0aXZlQ2xhc3NUeXBlcyB7XG5cdHN0YXRpYyByZWFkb25seSBBUlJBWTogc3RyaW5nID0gVFlQRV9FTlVNLkFSUkFZO1xuXG5cdHN0YXRpYyBDTEFTU05BTUVfTUFQOiB7IFtzOiBzdHJpbmddOiBzdHJpbmc7IH0gPSB7XG5cdFx0YXJyYXk6ICdBcnJheSdcblx0fVxuXG5cdHN0YXRpYyBnZXRDbGFzc1JlZk5hbWUodHlwZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG5cdFx0cmV0dXJuIFByaW1pdGl2ZUNsYXNzVHlwZXMuQ0xBU1NOQU1FX01BUFt0eXBlXSB8fCBudWxsO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlIHtcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdH1cblxuXHRlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcyA9PT0gb3RoZXI7XG5cdH1cblxuXHRhY2NlcHRzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXF1YWxzKG90aGVyKTtcblx0fVxuXG5cdHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGBUeXBlKCR7dGhpcy5uYW1lfSlgO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBQcmltaXRpdmVUeXBlIGV4dGVuZHMgVHlwZSB7XG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuXHRcdHN1cGVyKG5hbWUpO1xuXHR9XG5cblx0b3ZlcnJpZGUgZXF1YWxzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIG90aGVyIGluc3RhbmNlb2YgUHJpbWl0aXZlVHlwZVxuXHRcdFx0JiYgdGhpcy5uYW1lID09PSBvdGhlci5uYW1lO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBNaXhlZFR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoUHJpbWl0aXZlVHlwZXMuTUlYRUQpO1xuXHR9XG5cblx0b3ZlcnJpZGUgZXF1YWxzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIG90aGVyIGluc3RhbmNlb2YgTWl4ZWRUeXBlO1xuXHR9XG5cblx0b3ZlcnJpZGUgYWNjZXB0cygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVm9pZFR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoUHJpbWl0aXZlVHlwZXMuVk9JRCk7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBWb2lkVHlwZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTnVsbFR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoUHJpbWl0aXZlVHlwZXMuTlVMTCk7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBOdWxsVHlwZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTnVsbGFibGVUeXBlIGV4dGVuZHMgVHlwZSB7XG5cdGlubmVyOiBUeXBlO1xuXG5cdGNvbnN0cnVjdG9yKGlubmVyOiBUeXBlKSB7XG5cdFx0c3VwZXIoaW5uZXIudG9TdHJpbmcoKSArICc/Jyk7XG5cdFx0dGhpcy5pbm5lciA9IGlubmVyO1xuXHR9XG5cblx0b3ZlcnJpZGUgZXF1YWxzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0aWYgKG90aGVyID09PSBUeXBlcy5OVUxMKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAob3RoZXIgaW5zdGFuY2VvZiBOdWxsYWJsZVR5cGUpIHtcblx0XHRcdHJldHVybiB0aGlzLmlubmVyLmVxdWFscyhvdGhlci5pbm5lcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0b3ZlcnJpZGUgYWNjZXB0cyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBvdGhlciA9PT0gVHlwZXMuTlVMTCB8fCB0aGlzLmlubmVyLmFjY2VwdHMob3RoZXIpO1xuXHR9XG5cblx0b3ZlcnJpZGUgdG9TdHJpbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5pbm5lci50b1N0cmluZygpICsgJz8nO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBWTm9kZVR5cGUgZXh0ZW5kcyBUeXBlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoJ3Zub2RlJyk7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBWb2lkVHlwZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVHlwZXMge1xuXHRzdGF0aWMgcmVhZG9ubHkgTlVNQkVSOiBQcmltaXRpdmVUeXBlID0gbmV3IFByaW1pdGl2ZVR5cGUoUHJpbWl0aXZlVHlwZXMuTlVNQkVSKTtcblx0c3RhdGljIHJlYWRvbmx5IFNUUklORzogUHJpbWl0aXZlVHlwZSA9IG5ldyBQcmltaXRpdmVUeXBlKFByaW1pdGl2ZVR5cGVzLlNUUklORyk7XG5cdHN0YXRpYyByZWFkb25seSBCT09MRUFOOiBQcmltaXRpdmVUeXBlID0gbmV3IFByaW1pdGl2ZVR5cGUoUHJpbWl0aXZlVHlwZXMuQk9PTEVBTik7XG5cdHN0YXRpYyByZWFkb25seSBNSVhFRDogTWl4ZWRUeXBlID0gbmV3IE1peGVkVHlwZSgpO1xuXHRzdGF0aWMgcmVhZG9ubHkgTlVMTDogTnVsbFR5cGUgPSBuZXcgTnVsbFR5cGUoKTtcblx0c3RhdGljIHJlYWRvbmx5IFZPSUQ6IFZvaWRUeXBlID0gbmV3IFZvaWRUeXBlKCk7XG5cdHN0YXRpYyByZWFkb25seSBWTk9ERTogVk5vZGVUeXBlID0gbmV3IFZOb2RlVHlwZSgpO1xuXG5cdHN0YXRpYyBnZXRUeXBlKG5hbWU6IHN0cmluZyk6IFR5cGUge1xuXHRcdGlmICghT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoUHJpbWl0aXZlVHlwZXMsIG5hbWUudG9VcHBlckNhc2UoKSkpIHtcblx0XHRcdHRocm93VHlwZUVycm9yKGBVbmtub3duIHByaW1pdGl2ZSB0eXBlICR7bmFtZX0uYCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdHlwZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IFR5cGVzO1xuXHRcdHJldHVybiB0eXBlc1tuYW1lLnRvVXBwZXJDYXNlKCldO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlVmFyaWFibGUgZXh0ZW5kcyBUeXBlIHtcblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIobmFtZSk7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpIHtcblx0XHRyZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBUeXBlVmFyaWFibGVcblx0XHRcdCYmIHRoaXMubmFtZSA9PT0gb3RoZXIubmFtZTtcblx0fVxuXG5cdG92ZXJyaWRlIGFjY2VwdHMoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGVQYXJhbWV0ZXJTeW1ib2wge1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHZhcmlhYmxlVHlwZTogVHlwZVZhcmlhYmxlO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy52YXJpYWJsZVR5cGUgPSBuZXcgVHlwZVZhcmlhYmxlKG5hbWUpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBGaWVsZFN5bWJvbCB7XG5cdHJlYWRvbmx5IG5vZGU6IEFTVEZpZWxkTm9kZTtcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXHRyZWFkb25seSBmaWVsZFR5cGU6IFR5cGU7XG5cdHJlYWRvbmx5IGlzU3RhdGljOiBib29sZWFuID0gZmFsc2U7XG5cdHJlYWRvbmx5IGlzUHJpdmF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXHRyZWFkb25seSBpc1B1YmxpYzogYm9vbGVhbiA9IGZhbHNlO1xuXHRyZWFkb25seSBpc1JlYWRvbmx5OiBib29sZWFuID0gZmFsc2U7XG5cdG93bmVyOiBDbGFzc1N5bWJvbCB8IEludGVyZmFjZVN5bWJvbCB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5vZGU6IEFTVEZpZWxkTm9kZSwgZmllbGRUeXBlOiBUeXBlKSB7XG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0XHR0aGlzLm5hbWUgPSBub2RlLm5hbWU7XG5cdFx0dGhpcy5maWVsZFR5cGUgPSBmaWVsZFR5cGU7XG5cdFx0dGhpcy5pc1N0YXRpYyA9IG5vZGUubW9kaWZpZXJzLnN0YXRpYztcblx0XHR0aGlzLmlzUHJpdmF0ZSA9IG5vZGUubW9kaWZpZXJzLnByaXZhdGU7XG5cdFx0dGhpcy5pc1B1YmxpYyA9IG5vZGUubW9kaWZpZXJzLnB1YmxpYztcblx0XHR0aGlzLmlzUmVhZG9ubHkgPSBub2RlLm1vZGlmaWVycy5yZWFkb25seTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyU3ltYm9sIHtcblx0cmVhZG9ubHkgbm9kZTogQVNUUGFyYW1ldGVyTm9kZSB8IG51bGw7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblx0cmVhZG9ubHkgcGFyYW1ldGVyVHlwZTogVHlwZTtcblx0cmVhZG9ubHkgZGVmYXVsdFR5cGU6IFR5cGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGU6IFR5cGUsIGRlZmF1bHRWYWx1ZTogVHlwZSB8IG51bGwgPSBudWxsLCBub2RlOiBBU1RQYXJhbWV0ZXJOb2RlIHwgbnVsbCA9IG51bGwpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMucGFyYW1ldGVyVHlwZSA9IHR5cGU7XG5cdFx0dGhpcy5kZWZhdWx0VHlwZSA9IGRlZmF1bHRWYWx1ZTtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBNZXRob2RTeW1ib2wge1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cdHJlYWRvbmx5IG5vZGU6IEFTVE1ldGhvZE5vZGU7XG5cdHJlYWRvbmx5IGlzU3RhdGljOiBib29sZWFuID0gZmFsc2U7XG5cdHJlYWRvbmx5IGlzUHJpdmF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXHRyZWFkb25seSBpc1B1YmxpYzogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHR5cGVQYXJhbWV0ZXJTeW1ib2xzOiBUeXBlUGFyYW1ldGVyU3ltYm9sW10gPSBbXTtcblx0cGFyYW1ldGVyU3ltYm9sczogUGFyYW1ldGVyU3ltYm9sW10gPSBbXTtcblx0cmV0dXJuVHlwZTogVHlwZSA9IFR5cGVzLk1JWEVEO1xuXG5cdG93bmVyOiBDbGFzc1N5bWJvbCB8IEludGVyZmFjZVN5bWJvbCB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKG5vZGU6IEFTVE1ldGhvZE5vZGUpIHtcblx0XHR0aGlzLm5hbWUgPSBub2RlLm5hbWU7XG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0XHR0aGlzLmlzU3RhdGljID0gbm9kZS5tb2RpZmllcnMuc3RhdGljO1xuXHRcdHRoaXMuaXNQcml2YXRlID0gbm9kZS5tb2RpZmllcnMucHJpdmF0ZTtcblx0XHR0aGlzLmlzUHVibGljID0gbm9kZS5tb2RpZmllcnMucHVibGljO1xuXHR9XG5cblx0Z2V0IGJvZHkoKTogQVNUTm9kZVtdIHtcblx0XHRyZXR1cm4gdGhpcy5ub2RlLmNoaWxkcmVuO1xuXHR9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT2JqZWN0U3ltYm9sIHtcblx0bmFtZTogc3RyaW5nO1xuXHR0eXBlUGFyYW1ldGVyU3ltYm9sczogVHlwZVBhcmFtZXRlclN5bWJvbFtdO1xuXHRzdGF0aWNGaWVsZFN5bWJvbHM6IE1hcDxzdHJpbmcsIEZpZWxkU3ltYm9sPjtcblx0aW5zdGFuY2VNZXRob2RTeW1ib2xzOiBNYXA8c3RyaW5nLCBNZXRob2RTeW1ib2w+O1xufVxuXG5leHBvcnQgY2xhc3MgQ2xhc3NTeW1ib2wgaW1wbGVtZW50cyBPYmplY3RTeW1ib2wge1xuXHRyZWFkb25seSBub2RlOiBBU1RDbGFzc05vZGU7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblx0cmVhZG9ubHkgc3VwZXJDbGFzczogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cblx0c3VwZXJDbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wgfCBudWxsID0gbnVsbDtcblx0dHlwZVBhcmFtZXRlclN5bWJvbHM6IFR5cGVQYXJhbWV0ZXJTeW1ib2xbXSA9IFtdO1xuXHRpbnN0YW5jZUZpZWxkU3ltYm9sczogTWFwPHN0cmluZywgRmllbGRTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRzdGF0aWNGaWVsZFN5bWJvbHM6IE1hcDxzdHJpbmcsIEZpZWxkU3ltYm9sPiA9IG5ldyBNYXAoKTtcblx0aW5zdGFuY2VNZXRob2RTeW1ib2xzOiBNYXA8c3RyaW5nLCBNZXRob2RTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRzdGF0aWNNZXRob2RTeW1ib2xzOiBNYXA8c3RyaW5nLCBNZXRob2RTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRjb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sIHwgbnVsbCA9IG51bGw7XG5cdGltcGxlbWVudHNJbnRlcmZhY2VzOiBJbnRlcmZhY2VSZWZUeXBlW10gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihub2RlOiBBU1RDbGFzc05vZGUpIHtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHRcdHRoaXMubmFtZSA9IG5vZGUubmFtZTtcblx0XHR0aGlzLnN1cGVyQ2xhc3MgPSBub2RlLnN1cGVyQ2xhc3M/Lm5hbWUgPz8gbnVsbDtcblx0fVxuXG5cdHJlc29sdmVJbnN0YW5jZUZpZWxkU3ltYm9sKG5hbWU6IHN0cmluZyk6IEZpZWxkU3ltYm9sIHwgbnVsbCB7XG5cdFx0aWYgKHRoaXMuaW5zdGFuY2VGaWVsZFN5bWJvbHMuaGFzKG5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZUZpZWxkU3ltYm9scy5nZXQobmFtZSkgfHwgbnVsbDtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zdXBlckNsYXNzKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdXBlckNsYXNzU3ltYm9sPy5yZXNvbHZlSW5zdGFuY2VGaWVsZFN5bWJvbChuYW1lKSB8fCBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmVzb2x2ZVN0YXRpY0ZpZWxkU3ltYm9sKG5hbWU6IHN0cmluZyk6IEZpZWxkU3ltYm9sIHwgbnVsbCB7XG5cdFx0aWYgKHRoaXMuc3RhdGljRmllbGRTeW1ib2xzLmhhcyhuYW1lKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGljRmllbGRTeW1ib2xzLmdldChuYW1lKSB8fCBudWxsO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnN1cGVyQ2xhc3MpIHtcblx0XHRcdHJldHVybiB0aGlzLnN1cGVyQ2xhc3NTeW1ib2w/LnJlc29sdmVTdGF0aWNGaWVsZFN5bWJvbChuYW1lKSB8fCBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2VTeW1ib2wgaW1wbGVtZW50cyBPYmplY3RTeW1ib2wge1xuXHRyZWFkb25seSBub2RlOiBBU1RJbnRlcmZhY2VOb2RlO1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cblx0dHlwZVBhcmFtZXRlclN5bWJvbHM6IFR5cGVQYXJhbWV0ZXJTeW1ib2xbXSA9IFtdO1xuXHRzdGF0aWNGaWVsZFN5bWJvbHM6IE1hcDxzdHJpbmcsIEZpZWxkU3ltYm9sPiA9IG5ldyBNYXAoKTtcblx0aW5zdGFuY2VNZXRob2RTeW1ib2xzOiBNYXA8c3RyaW5nLCBNZXRob2RTeW1ib2w+ID0gbmV3IE1hcCgpO1xuXHRleHRlbmRzSW50ZXJmYWNlczogSW50ZXJmYWNlU3ltYm9sW10gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihub2RlOiBBU1RJbnRlcmZhY2VOb2RlKSB7XG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0XHR0aGlzLm5hbWUgPSBub2RlLm5hbWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIENsYXNzUmVmVHlwZSBleHRlbmRzIFR5cGUge1xuXHRyZWFkb25seSBjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2w7XG5cdHJlYWRvbmx5IHR5cGVBcmd1bWVudHM6IFR5cGVbXTtcblxuXHRjb25zdHJ1Y3RvcihjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wsIHR5cGVBcmd1bWVudHM6IFR5cGVbXSA9IFtdKSB7XG5cdFx0c3VwZXIoQ2xhc3NSZWZUeXBlLmZvcm1hdFN5bWJvbE5hbWUoY2xhc3NTeW1ib2wubmFtZSwgdHlwZUFyZ3VtZW50cykpO1xuXHRcdHRoaXMuY2xhc3NTeW1ib2wgPSBjbGFzc1N5bWJvbDtcblx0XHR0aGlzLnR5cGVBcmd1bWVudHMgPSB0eXBlQXJndW1lbnRzO1xuXHR9XG5cblx0c3RhdGljIGZvcm1hdFN5bWJvbE5hbWUobmFtZTogc3RyaW5nLCB0eXBlQXJndW1lbnRzOiBUeXBlW10pIHtcblx0XHRpZiAodHlwZUFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBgY2xhc3NSZWZUeXBlKCR7bmFtZX0pYDtcblx0XHR9XG5cblx0XHRyZXR1cm4gYGNsYXNzUmVmVHlwZSgke25hbWV9PCR7dHlwZUFyZ3VtZW50cy5tYXAodHlwZSA9PiB0eXBlLnRvU3RyaW5nKCkpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbignLCAnKX0+KWA7XG5cdH1cblxuXHRvdmVycmlkZSBlcXVhbHMob3RoZXI6IFR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gKG90aGVyIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlXG5cdFx0XHQmJiBvdGhlci5jbGFzc1N5bWJvbCA9PT0gdGhpcy5jbGFzc1N5bWJvbCk7XG5cdH1cblxuXHRvdmVycmlkZSBhY2NlcHRzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0aWYgKCF0aGlzLmVxdWFscyhvdGhlcikpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAob3RoZXIgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUpIHtcblx0XHRcdGlmICh0aGlzLnR5cGVBcmd1bWVudHMubGVuZ3RoICE9PSBvdGhlci50eXBlQXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50eXBlQXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IG90aGVyVHlwZSA9IG90aGVyLnR5cGVBcmd1bWVudHNbaV07XG5cblx0XHRcdFx0aWYgKCFvdGhlclR5cGUgfHwgIXRoaXMudHlwZUFyZ3VtZW50c1tpXT8uYWNjZXB0cyhvdGhlclR5cGUpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgSW50ZXJmYWNlUmVmVHlwZSBleHRlbmRzIFR5cGUge1xuXHRyZWFkb25seSBpbnRlcmZhY2VTeW1ib2w6IEludGVyZmFjZVN5bWJvbDtcblx0cmVhZG9ubHkgdHlwZUFyZ3VtZW50czogVHlwZVtdO1xuXG5cdGNvbnN0cnVjdG9yKGludGVyZmFjZVN5bWJvbDogSW50ZXJmYWNlU3ltYm9sLCB0eXBlQXJndW1lbnRzOiBUeXBlW10gPSBbXSkge1xuXHRcdHN1cGVyKEludGVyZmFjZVJlZlR5cGUuZm9ybWF0U3ltYm9sTmFtZShpbnRlcmZhY2VTeW1ib2wubmFtZSwgdHlwZUFyZ3VtZW50cykpO1xuXHRcdHRoaXMuaW50ZXJmYWNlU3ltYm9sID0gaW50ZXJmYWNlU3ltYm9sO1xuXHRcdHRoaXMudHlwZUFyZ3VtZW50cyA9IHR5cGVBcmd1bWVudHM7XG5cdH1cblxuXHRzdGF0aWMgZm9ybWF0U3ltYm9sTmFtZShuYW1lOiBzdHJpbmcsIHR5cGVBcmd1bWVudHM6IFR5cGVbXSk6IHN0cmluZyB7XG5cdFx0aWYgKHR5cGVBcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gYGludGVyZmFjZVJlZlR5cGUoJHtuYW1lfSlgO1xuXHRcdH1cblxuXHRcdHJldHVybiBgaW50ZXJmYWNlUmVmVHlwZSgke25hbWV9PCR7dHlwZUFyZ3VtZW50cy5tYXAodHlwZSA9PiB0eXBlLnRvU3RyaW5nKCkpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oJywgJyl9PilgO1xuXHR9XG5cblx0b3ZlcnJpZGUgZXF1YWxzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIChvdGhlciBpbnN0YW5jZW9mIEludGVyZmFjZVJlZlR5cGVcblx0XHRcdCYmIG90aGVyLmludGVyZmFjZVN5bWJvbCA9PT0gdGhpcy5pbnRlcmZhY2VTeW1ib2wpO1xuXHR9XG5cblx0b3ZlcnJpZGUgYWNjZXB0cyhvdGhlcjogVHlwZSk6IGJvb2xlYW4ge1xuXHRcdGlmICghdGhpcy5lcXVhbHMob3RoZXIpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKG90aGVyIGluc3RhbmNlb2YgSW50ZXJmYWNlUmVmVHlwZSkge1xuXHRcdFx0aWYgKHRoaXMudHlwZUFyZ3VtZW50cy5sZW5ndGggIT09IG90aGVyLnR5cGVBcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnR5cGVBcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3Qgb3RoZXJUeXBlID0gb3RoZXIudHlwZUFyZ3VtZW50c1tpXTtcblxuXHRcdFx0XHRpZiAoIW90aGVyVHlwZSB8fCAhdGhpcy50eXBlQXJndW1lbnRzW2ldPy5hY2NlcHRzKG90aGVyVHlwZSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBMYW1iZGFUeXBlIGV4dGVuZHMgVHlwZSB7XG5cdHJlYWRvbmx5IHBhcmFtZXRlclN5bWJvbHM6IFBhcmFtZXRlclN5bWJvbFtdID0gW107XG5cdHJlYWRvbmx5IHJldHVyblR5cGU6IFR5cGU7XG5cblx0Y29uc3RydWN0b3IocGFyYW1ldGVyczogUGFyYW1ldGVyU3ltYm9sW10sIHJldHVyblR5cGU6IFR5cGUpIHtcblx0XHRzdXBlcihMYW1iZGFUeXBlLmNyZWF0ZVNpZ25hdHVyZShwYXJhbWV0ZXJzLCByZXR1cm5UeXBlKSk7XG5cdFx0dGhpcy5wYXJhbWV0ZXJTeW1ib2xzID0gcGFyYW1ldGVycztcblx0XHR0aGlzLnJldHVyblR5cGUgPSByZXR1cm5UeXBlO1xuXHR9XG5cblx0c3RhdGljIGNyZWF0ZVNpZ25hdHVyZShwYXJhbWV0ZXJzOiBQYXJhbWV0ZXJTeW1ib2xbXSwgcmV0dXJuVHlwZTogVHlwZSk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGBsYW1iZGEoJHtwYXJhbWV0ZXJzLm1hcChwYXJhbWV0ZXIgPT4gcGFyYW1ldGVyLnBhcmFtZXRlclR5cGUudG9TdHJpbmcoKSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbignLCAnKX0pIC0+ICR7cmV0dXJuVHlwZS50b1N0cmluZygpfSlgO1xuXHR9XG5cblx0b3ZlcnJpZGUgZXF1YWxzKG90aGVyOiBUeXBlKTogYm9vbGVhbiB7XG5cdFx0aWYgKCEob3RoZXIgaW5zdGFuY2VvZiBMYW1iZGFUeXBlKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnBhcmFtZXRlclN5bWJvbHMubGVuZ3RoICE9PSBvdGhlci5wYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBvdGhlclR5cGUgPSBvdGhlci5wYXJhbWV0ZXJTeW1ib2xzW2ldPy5wYXJhbWV0ZXJUeXBlO1xuXG5cdFx0XHRpZiAoIW90aGVyVHlwZSB8fCAhdGhpcy5wYXJhbWV0ZXJTeW1ib2xzW2ldPy5wYXJhbWV0ZXJUeXBlLmFjY2VwdHMob3RoZXJUeXBlKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucmV0dXJuVHlwZS5hY2NlcHRzKG90aGVyLnJldHVyblR5cGUpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlU2NvcGUge1xuXHRyZWFkb25seSBwYXJlbnQ6IFR5cGVTY29wZSB8IG51bGw7XG5cdHJlYWRvbmx5IHR5cGVzOiBNYXA8c3RyaW5nLCBUeXBlPiA9IG5ldyBNYXAoKTtcblx0cmVhZG9ubHkgdHlwZUJpbmRpbmdzOiBNYXA8c3RyaW5nLCBUeXBlPiA9IG5ldyBNYXAoKTtcblxuXHRjdXJyZW50T2JqZWN0U3ltYm9sOiBDbGFzc1N5bWJvbCB8IEludGVyZmFjZVN5bWJvbCB8IG51bGw7XG5cblx0Y29uc3RydWN0b3IocGFyZW50OiBUeXBlU2NvcGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xuXHRcdHRoaXMuY3VycmVudE9iamVjdFN5bWJvbCA9IHBhcmVudD8uY3VycmVudE9iamVjdFN5bWJvbCA/PyBudWxsO1xuXHR9XG5cblx0ZGVmaW5lVHlwZShuYW1lOiBzdHJpbmcsIHR5cGU6IFR5cGUpOiB2b2lkIHtcblx0XHR0aGlzLnR5cGVzLnNldChuYW1lLCB0eXBlKTtcblx0fVxuXG5cdGRlZmluZVR5cGVCaW5kaW5nKG5hbWU6IHN0cmluZywgdHlwZVZhcmlhYmxlOiBUeXBlVmFyaWFibGUpOiB2b2lkIHtcblx0XHR0aGlzLnR5cGVCaW5kaW5ncy5zZXQobmFtZSwgdHlwZVZhcmlhYmxlKTtcblx0fVxuXG5cdGhhc1R5cGUobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudHlwZXMuaGFzKG5hbWUpIHx8IHRoaXMucGFyZW50Py5oYXNUeXBlKG5hbWUpIHx8IGZhbHNlO1xuXHR9XG5cblx0aGFzVHlwZUJpbmRpbmcobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudHlwZUJpbmRpbmdzLmhhcyhuYW1lKSB8fCB0aGlzLnBhcmVudD8uaGFzVHlwZUJpbmRpbmcobmFtZSkgfHwgZmFsc2U7XG5cdH1cblxuXHRnZXRUeXBlKG5hbWU6IHN0cmluZyk6IFR5cGUge1xuXHRcdGlmICh0aGlzLnR5cGVzLmhhcyhuYW1lKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMudHlwZXMuZ2V0KG5hbWUpIHx8IFR5cGVzLk5VTEw7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnBhcmVudD8uZ2V0VHlwZShuYW1lKSB8fCBUeXBlcy5OVUxMO1xuXHR9XG5cblx0Z2V0VHlwZUJpbmRpbmcobmFtZTogc3RyaW5nKTogVHlwZSB7XG5cdFx0aWYgKHRoaXMudHlwZUJpbmRpbmdzLmhhcyhuYW1lKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMudHlwZUJpbmRpbmdzLmdldChuYW1lKSB8fCBUeXBlcy5OVUxMO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5wYXJlbnQ/LmdldFR5cGVCaW5kaW5nKG5hbWUpIHx8IFR5cGVzLk5VTEw7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBUeXBlKHR5cGVOb2RlOiBBU1RUeXBlTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBzY29wZTogVHlwZVNjb3BlIHwgbnVsbCA9IG51bGwpOiBUeXBlIHtcblx0bGV0IGJhc2VUeXBlID0gcmVzb2x2ZUJhc2VUeXBlKHR5cGVOb2RlLCBvYmplY3RSZWdpc3RyeSwgc2NvcGUpO1xuXHRpZiAoYmFzZVR5cGUpIHtcblx0XHRpZiAoIShiYXNlVHlwZSBpbnN0YW5jZW9mIE51bGxhYmxlVHlwZSkgJiYgdHlwZU5vZGUubnVsbGFibGUpIHtcblx0XHRcdHJldHVybiBuZXcgTnVsbGFibGVUeXBlKGJhc2VUeXBlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYmFzZVR5cGU7XG5cdH1cblxuXHR0aHJvd1R5cGVFcnJvcihgQ291bGQgbm90IHJlc29sdmUgdHlwZSAke3R5cGVOb2RlLm5hbWV9LmAsIHR5cGVOb2RlLnNwYW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUJhc2VUeXBlKHR5cGVOb2RlOiBBU1RUeXBlTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBzY29wZTogVHlwZVNjb3BlIHwgbnVsbCA9IG51bGwpOiBUeXBlIHtcblx0c3dpdGNoICh0eXBlTm9kZS5raW5kKSB7XG5cdFx0Y2FzZSBBU1RUeXBlTm9kZS5LSU5EX1NJTVBMRToge1xuXHRcdFx0aWYgKHNjb3BlICYmIHNjb3BlLmhhc1R5cGVCaW5kaW5nKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiBzY29wZS5nZXRUeXBlQmluZGluZyh0eXBlTm9kZS5uYW1lKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmhhc1N5bWJvbCh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzb2x2ZVJlZlR5cGUodHlwZU5vZGUsIG9iamVjdFJlZ2lzdHJ5KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKFByaW1pdGl2ZVR5cGVzLmhhc1R5cGUodHlwZU5vZGUubmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIHJlc29sdmVQcmltaXRpdmVUeXBlKHR5cGVOb2RlKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG5ldyBUeXBlVmFyaWFibGUodHlwZU5vZGUubmFtZSk7XG5cdFx0fVxuXHRcdGNhc2UgQVNUVHlwZU5vZGUuS0lORF9HRU5FUklDOiB7XG5cdFx0XHRpZiAoIW9iamVjdFJlZ2lzdHJ5LnR5cGVzLmhhc1N5bWJvbCh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdFx0XHR0aHJvd1R5cGVFcnJvcihgU3ltYm9sICR7dHlwZU5vZGUubmFtZX0gaXMgbm90IGEgY2xhc3MgcmVmZXJlbmNlLmAsIHR5cGVOb2RlLnNwYW4pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc29sdmVHZW5lcmljUmVmVHlwZSh0eXBlTm9kZSwgb2JqZWN0UmVnaXN0cnkpO1xuXHRcdH1cblx0XHRjYXNlIEFTVFR5cGVOb2RlLktJTkRfTEFNQkRBOiB7XG5cdFx0XHRyZXR1cm4gcmVzb2x2ZUxhbWJkYVR5cGUodHlwZU5vZGUsIG9iamVjdFJlZ2lzdHJ5KTtcblx0XHR9XG5cdFx0ZGVmYXVsdDoge1xuXHRcdFx0dGhyb3dUeXBlRXJyb3IoXG5cdFx0XHRcdGBJbnZhbGlkIHR5cGUgYW5ub3RhdGlvbiwga2luZCAke3R5cGVOb2RlLmtpbmR9LmAsXG5cdFx0XHRcdHR5cGVOb2RlLnNwYW5cblx0XHRcdCk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlUmVmVHlwZSh0eXBlTm9kZTogQVNUVHlwZU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IENsYXNzUmVmVHlwZSB8IEludGVyZmFjZVJlZlR5cGUgfCBUeXBlIHtcblx0aWYgKHR5cGVOb2RlLnR5cGVBcmd1bWVudHMubGVuZ3RoID4gMCkge1xuXHRcdHRocm93VHlwZUVycm9yKGBHZW5lcmljIGNsYXNzICR7dHlwZU5vZGUubmFtZX0gY2Fubm90IGhhdmUgdHlwZSBhcmd1bWVudHMuYCwgdHlwZU5vZGUuc3Bhbik7XG5cdH1cblxuXHRpZiAob2JqZWN0UmVnaXN0cnkudHlwZXMuY2xhc3NTeW1ib2xzLmhhcyh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdHJldHVybiBuZXcgQ2xhc3NSZWZUeXBlKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKHR5cGVOb2RlLm5hbWUpKTtcblx0fVxuXG5cdGlmIChvYmplY3RSZWdpc3RyeS50eXBlcy5pbnRlcmZhY2VTeW1ib2xzLmhhcyh0eXBlTm9kZS5uYW1lKSkge1xuXHRcdHJldHVybiBuZXcgSW50ZXJmYWNlUmVmVHlwZShvYmplY3RSZWdpc3RyeS50eXBlcy5nZXRJbnRlcmFjZVN5bWJvbCh0eXBlTm9kZS5uYW1lKSk7XG5cdH1cblxuXHR0aHJvd1R5cGVFcnJvcihgVW5rbm93biBjbGFzcyBvciBpbnRlcmZhY2UgJHt0eXBlTm9kZS5uYW1lfS5gLCB0eXBlTm9kZS5zcGFuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVHZW5lcmljUmVmVHlwZSh0eXBlTm9kZTogQVNUVHlwZU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IENsYXNzUmVmVHlwZSB8IEludGVyZmFjZVJlZlR5cGUgfCBUeXBlIHtcblx0aWYgKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmNsYXNzU3ltYm9scy5oYXModHlwZU5vZGUubmFtZSkpIHtcblx0XHRyZXR1cm4gbmV3IENsYXNzUmVmVHlwZShcblx0XHRcdG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKHR5cGVOb2RlLm5hbWUpLFxuXHRcdFx0dHlwZU5vZGUudHlwZUFyZ3VtZW50cy5tYXAodHlwZUFyZ3VtZW50ID0+IHJlc29sdmVCYXNlVHlwZSh0eXBlQXJndW1lbnQsIG9iamVjdFJlZ2lzdHJ5KSlcblx0XHQpO1xuXHR9XG5cblx0aWYgKG9iamVjdFJlZ2lzdHJ5LnR5cGVzLmludGVyZmFjZVN5bWJvbHMuaGFzKHR5cGVOb2RlLm5hbWUpKSB7XG5cdFx0cmV0dXJuIG5ldyBJbnRlcmZhY2VSZWZUeXBlKFxuXHRcdFx0b2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0SW50ZXJhY2VTeW1ib2wodHlwZU5vZGUubmFtZSksXG5cdFx0XHR0eXBlTm9kZS50eXBlQXJndW1lbnRzLm1hcCh0eXBlQXJndW1lbnQgPT4gcmVzb2x2ZUJhc2VUeXBlKHR5cGVBcmd1bWVudCwgb2JqZWN0UmVnaXN0cnkpKVxuXHRcdCk7XG5cdH1cblxuXHR0aHJvd1R5cGVFcnJvcihgVW5rbm93biBjbGFzcyBvciBpbnRlcmZhY2UgJHt0eXBlTm9kZS5uYW1lfS5gLCB0eXBlTm9kZS5zcGFuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVQcmltaXRpdmVUeXBlKHR5cGVOb2RlOiBBU1RUeXBlTm9kZSk6IFR5cGUge1xuXHRyZXR1cm4gVHlwZXMuZ2V0VHlwZSh0eXBlTm9kZS5uYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVMYW1iZGFUeXBlKHR5cGVOb2RlOiBBU1RUeXBlTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBzY29wZTogVHlwZVNjb3BlIHwgbnVsbCA9IG51bGwpOiBMYW1iZGFUeXBlIHtcblx0Y29uc3QgcGFyYW1ldGVyU3ltYm9scyA9IHR5cGVOb2RlLnBhcmFtZXRlclR5cGVzLm1hcChcblx0XHR0eXBlQW5ub3RhdGlvbiA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IFBhcmFtZXRlclN5bWJvbChcblx0XHRcdFx0dHlwZUFubm90YXRpb24ubmFtZSxcblx0XHRcdFx0d3JhcFR5cGUodHlwZUFubm90YXRpb24sIG9iamVjdFJlZ2lzdHJ5LCBzY29wZSlcblx0XHRcdCk7XG5cdFx0fVxuXHQpO1xuXG5cdHJldHVybiBuZXcgTGFtYmRhVHlwZShcblx0XHRwYXJhbWV0ZXJTeW1ib2xzLFxuXHRcdHR5cGVOb2RlLnJldHVyblR5cGVcblx0XHRcdD8gd3JhcFR5cGUodHlwZU5vZGUucmV0dXJuVHlwZSwgb2JqZWN0UmVnaXN0cnksIHNjb3BlKVxuXHRcdFx0OiBUeXBlcy5NSVhFRFxuXHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RpdHV0ZVR5cGUodHlwZTogVHlwZSwgc3Vic3RpdHV0aW9uTWFwOiBNYXA8c3RyaW5nLCBUeXBlPik6IFR5cGUge1xuXHRpZiAodHlwZSBpbnN0YW5jZW9mIFR5cGVWYXJpYWJsZSkge1xuXHRcdHJldHVybiBzdWJzdGl0dXRpb25NYXAuZ2V0KHR5cGUubmFtZSkgPz8gdHlwZTtcblx0fVxuXG5cdGlmICh0eXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0cmV0dXJuIG5ldyBDbGFzc1JlZlR5cGUoXG5cdFx0XHR0eXBlLmNsYXNzU3ltYm9sLFxuXHRcdFx0dHlwZS50eXBlQXJndW1lbnRzLm1hcCh0eXBlQXJndW1lbnQgPT4gc3Vic3RpdHV0ZVR5cGUodHlwZUFyZ3VtZW50LCBzdWJzdGl0dXRpb25NYXApKVxuXHRcdCk7XG5cdH1cblxuXHRpZiAodHlwZSBpbnN0YW5jZW9mIE51bGxhYmxlVHlwZSkge1xuXHRcdHJldHVybiBuZXcgTnVsbGFibGVUeXBlKHN1YnN0aXR1dGVUeXBlKHR5cGUuaW5uZXIsIHN1YnN0aXR1dGlvbk1hcCkpO1xuXHR9XG5cblx0cmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFR5cGVTdWJzdGl0dXRpb25NYXAodHlwZVBhcmFtZXRlcnM6IFR5cGVQYXJhbWV0ZXJTeW1ib2xbXSwgdHlwZUFyZ3VtZW50czogVHlwZVtdKTogTWFwPHN0cmluZywgVHlwZT4ge1xuXHRjb25zdCBzdWJzdGl0dXRpb25NYXAgPSBuZXcgTWFwKCk7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0eXBlUGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHR5cGVQYXJhbWV0ZXI6IFR5cGVQYXJhbWV0ZXJTeW1ib2wgfCBudWxsID0gdHlwZVBhcmFtZXRlcnNbaV0gfHwgbnVsbDtcblx0XHRjb25zdCB0eXBlQXJndW1lbnQ6IFR5cGUgfCBudWxsID0gdHlwZUFyZ3VtZW50c1tpXSB8fCBudWxsO1xuXG5cdFx0aWYgKHR5cGVQYXJhbWV0ZXIgJiYgdHlwZUFyZ3VtZW50KSB7XG5cdFx0XHRzdWJzdGl0dXRpb25NYXAuc2V0KHR5cGVQYXJhbWV0ZXIubmFtZSwgdHlwZUFyZ3VtZW50KTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3Vic3RpdHV0aW9uTWFwO1xufVxuIiwKICAgICJpbXBvcnQge0NsYXNzUmVmVHlwZSwgVHlwZSwgVHlwZXN9IGZyb20gXCIuL3R5cGVfb2JqZWN0c1wiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge3Rocm93UnVudGltZUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5cbmV4cG9ydCBjbGFzcyBBdXRvYm94ZWRUeXBlcyB7XG5cdHN0YXRpYyBOVU1CRVI6IHN0cmluZyA9ICdOdW1iZXInO1xuXHRzdGF0aWMgU1RSSU5HOiBzdHJpbmcgPSAnU3RyaW5nJztcblx0c3RhdGljIEJPT0xFQU46IHN0cmluZyA9ICdCb29sZWFuJztcblxuXHRzdGF0aWMgQ0xBU1NOQU1FX01BUDogeyBbczogc3RyaW5nXTogc3RyaW5nOyB9ID0ge1xuXHRcdG51bWJlcjogQXV0b2JveGVkVHlwZXMuTlVNQkVSLFxuXHRcdHN0cmluZzogQXV0b2JveGVkVHlwZXMuU1RSSU5HLFxuXHRcdGJvb2xlYW46IEF1dG9ib3hlZFR5cGVzLkJPT0xFQU5cblx0fTtcblxuXHRzdGF0aWMgZ2V0Q2xhc3NOYW1lKGtleTogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRjb25zdCBjbGFzc05hbWUgPSBBdXRvYm94ZWRUeXBlcy5DTEFTU05BTUVfTUFQW2tleV07XG5cdFx0aWYgKCFjbGFzc05hbWUpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBObyBjbGFzcyBmb3VuZCBmb3IgcHJpbWl0aXZlIHR5cGUgJHtrZXl9LmApO1xuXHRcdH1cblx0XHRyZXR1cm4gY2xhc3NOYW1lO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvYm94aW5nIHtcblx0c3RhdGljIENMQVNTTkFNRV9NQVA6IE1hcDxUeXBlLCBzdHJpbmc+ID0gbmV3IE1hcChcblx0XHRbXG5cdFx0XHRbVHlwZXMuTlVNQkVSLCBBdXRvYm94ZWRUeXBlcy5OVU1CRVJdLFxuXHRcdFx0W1R5cGVzLlNUUklORywgQXV0b2JveGVkVHlwZXMuU1RSSU5HXSxcblx0XHRcdFtUeXBlcy5CT09MRUFOLCBBdXRvYm94ZWRUeXBlcy5CT09MRUFOXVxuXHRcdF1cblx0KTtcblxuXHRzdGF0aWMgYXV0b2JveElmTmVlZGVkKG9iamVjdFR5cGU6IFR5cGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSk6IENsYXNzUmVmVHlwZSB8IFR5cGUge1xuXHRcdGNvbnN0IGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gQXV0b2JveGluZy5DTEFTU05BTUVfTUFQLmdldChvYmplY3RUeXBlKTtcblx0XHRpZiAoY2xhc3NOYW1lKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENsYXNzUmVmVHlwZShvYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChjbGFzc05hbWUpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gb2JqZWN0VHlwZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge1xuXHRDbGFzc0RlZmluaXRpb24sXG5cdENsYXNzTWV0aG9kRGVmaW5pdGlvbixcblx0RW52aXJvbm1lbnQsXG5cdEV4ZWN1dGlvblN0b3AsXG5cdEluc3RhbmNlLFxuXHRSZXR1cm5WYWx1ZVxufSBmcm9tIFwiLi9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuaW1wb3J0IHtcblx0QVNUQW5ub3RhdGlvbk5vZGUsXG5cdEFTVEFycmF5Tm9kZSxcblx0QVNUQXNzaWdubWVudE5vZGUsXG5cdEFTVEJpbmFyeU5vZGUsXG5cdEFTVENhbGxOb2RlLFxuXHRBU1RDbGFzc05vZGUsXG5cdEFTVEV4cHJlc3Npb25Ob2RlLFxuXHRBU1RGb3JlYWNoTm9kZSxcblx0QVNUSWZOb2RlLFxuXHRBU1RJbmRleE5vZGUsXG5cdEFTVExhbWJkYU5vZGUsXG5cdEFTVE1hdGNoQ2FzZU5vZGUsXG5cdEFTVE1hdGNoTm9kZSxcblx0QVNUTWVtYmVyTm9kZSxcblx0QVNUTWV0aG9kTm9kZSxcblx0QVNUTmV3Tm9kZSxcblx0QVNUTm9kZSxcblx0QVNUTm9kZVR5cGUsXG5cdEFTVE9wZXJhdG9yTm9kZSxcblx0QVNUUGFyYW1ldGVyTm9kZSxcblx0QVNUUmV0dXJuTm9kZSxcblx0QVNUVHlwZU5vZGUsXG5cdEFTVFVuYXJ5Tm9kZSxcblx0QVNUVmFyaWFibGVOb2RlLFxuXHRBU1RWRG9tRXhwcmVzc2lvbk5vZGUsXG5cdEFTVFZEb21Ob2RlLFxuXHRBU1RWRG9tVGV4dE5vZGVcbn0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHtHUkFNTUFSLCBUWVBFX0VOVU19IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5pbXBvcnQge05hdGl2ZUNsYXNzZXN9IGZyb20gXCIuLi8uLi9saWJyYXJ5L25hdGl2ZV9jbGFzc2VzXCI7XG5pbXBvcnQge05hdGl2ZUZ1bmN0aW9ucywgTmF0aXZlRnVuY3Rpb25UeXBlUmVnaXN0cnl9IGZyb20gXCIuLi8uLi9saWJyYXJ5L25hdGl2ZV9mdW5jdGlvbnNcIjtcbmltcG9ydCB7Y2FzdFZhbHVlLCBmcm9tTHlyYVZhbHVlLCBMeXJhTmF0aXZlT2JqZWN0LCByZXR1cm5WYWx1ZSwgd3JhcE5hdGl2ZUluc3RhbmNlfSBmcm9tIFwiLi9pbnRlcnByZXRlcl9jb252ZXJzaW9uXCI7XG5pbXBvcnQge3Rocm93UnVudGltZUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQge0F1dG9ib3hlZFR5cGVzfSBmcm9tIFwiLi4vdHlwZXMvYXV0b2JveGluZ1wiO1xuaW1wb3J0IHtMeXJhQXJyYXl9IGZyb20gXCIuLi8uLi9saWJyYXJ5L2NsYXNzZXMvYXJyYXlcIjtcbmltcG9ydCB0eXBlIHtWQ2hpbGR9IGZyb20gXCIuLi92ZG9tL3Zkb21cIjtcbmltcG9ydCB0eXBlIHtFdmVudFBpcGVsaW5lfSBmcm9tIFwiLi4vZXZlbnQvcGlwZWxpbmVcIjtcblxuY29uc3QgbmF0aXZlQ2xhc3NlcyA9IG5ldyBOYXRpdmVDbGFzc2VzKCk7XG5jb25zdCBuYXRpdmVGdW5jdGlvbnMgPSBuZXcgTmF0aXZlRnVuY3Rpb25zKCk7XG5jb25zdCBnbG9iYWxGdW5jdGlvbnMgPSBuYXRpdmVGdW5jdGlvbnMuZ2V0R2xvYmFsRnVuY3Rpb25zKCk7XG5jb25zdCBnbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeTogTmF0aXZlRnVuY3Rpb25UeXBlUmVnaXN0cnkgPSBuYXRpdmVGdW5jdGlvbnMuZ2V0R2xvYmFsRnVuY3Rpb25UeXBlUmVnaXN0cnkoKTtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0RnVuY3Rpb25DYWxsIHtcblx0cHJpdmF0ZSByZWFkb25seSBub2RlOiBBU1ROb2RlO1xuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgZnVuY3Rpb25FbnY6IEVudmlyb25tZW50O1xuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5O1xuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZTtcblx0cHJvdGVjdGVkIHJlYWRvbmx5IHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRub2RlOiBBU1ROb2RlLFxuXHRcdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSxcblx0XHRmdW5jdGlvbkVudjogRW52aXJvbm1lbnQsXG5cdFx0ZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSxcblx0XHR0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGxcblx0KSB7XG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5ID0gb2JqZWN0UmVnaXN0cnk7XG5cdFx0dGhpcy5mdW5jdGlvbkVudiA9IGZ1bmN0aW9uRW52O1xuXHRcdHRoaXMuZXZlbnRQaXBlbGluZSA9IGV2ZW50UGlwZWxpbmU7XG5cdFx0dGhpcy50aGlzVmFsdWUgPSB0aGlzVmFsdWU7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0Q2FsbE5vZGUoKTogQVNUQ2FsbE5vZGUge1xuXHRcdGlmICghKHRoaXMubm9kZSBpbnN0YW5jZW9mIEFTVENhbGxOb2RlKSkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgbmF0aXZlIGZ1bmN0aW9uIGNhbGwgJHt0aGlzLm5vZGUudHlwZX0uYCwgdGhpcy5ub2RlLnNwYW4pO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5ub2RlO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldExhbWJkYU5vZGUoKTogQVNUTGFtYmRhTm9kZSB7XG5cdFx0aWYgKCEodGhpcy5ub2RlIGluc3RhbmNlb2YgQVNUTGFtYmRhTm9kZSkpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGxhbWJkYSBjYWxsICR7dGhpcy5ub2RlLnR5cGV9LmAsIHRoaXMubm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMubm9kZTtcblx0fVxuXG5cdGFic3RyYWN0IGV2YWxDYWxsKC4uLmFyZ3M6IGFueVtdKTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgTGFtYmRhRnVuY3Rpb25DYWxsIGV4dGVuZHMgQWJzdHJhY3RGdW5jdGlvbkNhbGwge1xuXHRldmFsQ2FsbCguLi5hcmdzOiBhbnlbXSk6IGFueSB7XG5cdFx0Y29uc3Qgbm9kZTogQVNUTGFtYmRhTm9kZSA9IHRoaXMuZ2V0TGFtYmRhTm9kZSgpO1xuXHRcdGNvbnN0IGNsb3N1cmVFbnY6IEVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KHRoaXMuZnVuY3Rpb25FbnYpO1xuXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG5vZGUucGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgcGFyYW1ldGVyOiBBU1RQYXJhbWV0ZXJOb2RlIHwgbnVsbCA9IG5vZGUucGFyYW1ldGVyc1tpXSB8fCBudWxsO1xuXHRcdFx0aWYgKCFwYXJhbWV0ZXIpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRjbG9zdXJlRW52LmRlZmluZShwYXJhbWV0ZXIubmFtZSwgYXJnc1tpXSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2YWxSZXR1cm4oXG5cdFx0XHRub2RlLmNoaWxkcmVuLFxuXHRcdFx0dGhpcy5vYmplY3RSZWdpc3RyeSxcblx0XHRcdGNsb3N1cmVFbnYsXG5cdFx0XHR0aGlzLmV2ZW50UGlwZWxpbmUsXG5cdFx0XHR0aGlzLnRoaXNWYWx1ZSxcblx0XHRcdG5vZGUucmV0dXJuVHlwZVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE5hdGl2ZUZ1bmN0aW9uQ2FsbCBleHRlbmRzIEFic3RyYWN0RnVuY3Rpb25DYWxsIHtcblx0ZXZhbENhbGwoLi4uYXJnczogYW55W10pOiBhbnkge1xuXHRcdGNvbnN0IGNhbGxOb2RlOiBBU1RDYWxsTm9kZSA9IHRoaXMuZ2V0Q2FsbE5vZGUoKTtcblxuXHRcdGxldCByZXN1bHQ6IGFueSA9IHRoaXMucmVzb2x2ZUNhbGwoKSguLi5hcmdzKTtcblx0XHRpZiAocmVzdWx0IGluc3RhbmNlb2YgTHlyYU5hdGl2ZU9iamVjdCkge1xuXHRcdFx0cmVzdWx0ID0gd3JhcE5hdGl2ZUluc3RhbmNlKHJlc3VsdCwgdGhpcy5vYmplY3RSZWdpc3RyeSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdCA9IHJldHVyblZhbHVlKHJlc3VsdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2YWxSZXR1cm4oXG5cdFx0XHRbcmVzdWx0XSxcblx0XHRcdHRoaXMub2JqZWN0UmVnaXN0cnksXG5cdFx0XHR0aGlzLmZ1bmN0aW9uRW52LFxuXHRcdFx0dGhpcy5ldmVudFBpcGVsaW5lLFxuXHRcdFx0dGhpcy50aGlzVmFsdWUsXG5cdFx0XHRnbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeS5nZXQoY2FsbE5vZGUuY2FsbGVlLm5hbWUpLnJldHVyblR5cGVcblx0XHQpO1xuXHR9XG5cblx0cmVzb2x2ZUNhbGwoKTogYW55IHtcblx0XHRjb25zdCBub2RlOiBBU1RDYWxsTm9kZSB8IG51bGwgPSB0aGlzLmdldENhbGxOb2RlKCk7XG5cblx0XHRpZiAobm9kZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoJ0ludmFsaWQgZnVuY3Rpb24gY2FsbC4nKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZhbEV4cHJlc3Npb24oXG5cdFx0XHRub2RlLmNhbGxlZSxcblx0XHRcdHRoaXMub2JqZWN0UmVnaXN0cnksXG5cdFx0XHR0aGlzLmZ1bmN0aW9uRW52LFxuXHRcdFx0dGhpcy5ldmVudFBpcGVsaW5lLFxuXHRcdFx0dGhpcy50aGlzVmFsdWVcblx0XHQpW25vZGUuY2FsbGVlLm5hbWVdO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck5hdGl2ZUNsYXNzZXMob2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQpOiB2b2lkIHtcblx0Zm9yIChjb25zdCBuYXRpdmVDbGFzcyBvZiBuYXRpdmVDbGFzc2VzLnJlZ2lzdHJ5LnZhbHVlcygpKSB7XG5cdFx0aWYgKG5hdGl2ZUNsYXNzLmlzQXV0b2xvYWRBYmxlKSB7XG5cdFx0XHRjb25zdCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uID0gbmF0aXZlQ2xhc3MuZ2V0Q2xhc3NEZWZpbml0aW9uKCk7XG5cdFx0XHRvYmplY3RSZWdpc3RyeS5jbGFzc2VzLnNldChuYXRpdmVDbGFzcy5uYW1lLCBjbGFzc0RlZik7XG5cdFx0XHRlbnZpcm9ubWVudC5kZWZpbmUobmF0aXZlQ2xhc3MubmFtZSwgY2xhc3NEZWYpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJOYXRpdmVGdW5jdGlvbnMoZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KTogdm9pZCB7XG5cdGZvciAoY29uc3QgbmFtZSBpbiBnbG9iYWxGdW5jdGlvbnMpIHtcblx0XHRjb25zdCBnbG9iYWxGdW5jdGlvbjogYW55ID0gZ2xvYmFsRnVuY3Rpb25zW25hbWVdO1xuXHRcdGlmICghZ2xvYmFsRnVuY3Rpb24pIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKCdHbG9iYWwgZnVuY3Rpb24gaXMgbnVsbC4nKTtcblx0XHR9XG5cdFx0ZW52aXJvbm1lbnQuZGVmaW5lKG5hbWUsIGdsb2JhbEZ1bmN0aW9ucyk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxOb2RlKFxuXHRub2RlOiBBU1ROb2RlLFxuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksXG5cdGVudmlyb25tZW50OiBFbnZpcm9ubWVudCxcblx0ZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSxcblx0dGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsXG4pOiBhbnkge1xuXHRpZiAobm9kZS5pc0V4cHJlc3Npb24pIHtcblx0XHRyZXR1cm4gbmV3IFJldHVyblZhbHVlKGV2YWxFeHByZXNzaW9uKG5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKSk7XG5cdH1cblxuXHRzd2l0Y2ggKG5vZGUudHlwZSkge1xuXHRcdGNhc2UgQVNUTm9kZVR5cGUuUFJPR1JBTU06IHtcblx0XHRcdGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuXHRcdFx0XHRldmFsTm9kZShjaGlsZCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuSU1QT1JUOlxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuSU5URVJGQUNFOiB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5DTEFTUzoge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RDbGFzc05vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxDbGFzcyhub2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgY2xhc3Mgbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5WQVJJQUJMRToge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RWYXJpYWJsZU5vZGUpIHtcblx0XHRcdFx0Y29uc3QgdmFsdWU6IGFueSA9IG5vZGUuaW5pdFxuXHRcdFx0XHRcdD8gZXZhbEV4cHJlc3Npb24obm9kZS5pbml0LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSlcblx0XHRcdFx0XHQ6IG51bGw7XG5cdFx0XHRcdGVudmlyb25tZW50LmRlZmluZShub2RlLm5hbWUsIHZhbHVlKTtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCB2YXJpYWJsZSBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLklGOiB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVElmTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbElmKG5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGlmIG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuTUFUQ0g6IHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUTWF0Y2hOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsTWF0Y2gobm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgbWF0Y2ggbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5GT1JFQUNIOiB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEZvcmVhY2hOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsRm9yZWFjaChub2RlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBmb3JlYWNoIG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuVkRPTToge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RWRG9tTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbFZEb21Ob2RlKG5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGZvcmVhY2ggbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5FWFBSRVNTSU9OOiB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEV4cHJlc3Npb25Ob2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsRXhwcmVzc2lvbihub2RlLmV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGV4cHJlc3Npb24gbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5SRVRVUk46IHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUUmV0dXJuTm9kZSkge1xuXHRcdFx0XHRjb25zdCB2YWx1ZTogYW55ID0gbm9kZS5hcmd1bWVudFxuXHRcdFx0XHRcdD8gZXZhbEV4cHJlc3Npb24obm9kZS5hcmd1bWVudCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpXG5cdFx0XHRcdFx0OiBudWxsO1xuXHRcdFx0XHRyZXR1cm4gbmV3IFJldHVyblZhbHVlKHZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIHJldHVybiBub2RlICR7bm9kZS50eXBlfS5gLCBub2RlLnNwYW4pO1xuXHRcdH1cblx0XHRkZWZhdWx0OiB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5oYW5kbGVkIG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RFbXB0eUluc3RhbmNlKG5vZGU6IEFTVENsYXNzTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogSW5zdGFuY2Uge1xuXHRsZXQgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbjtcblxuXHRpZiAob2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5oYXMobm9kZS5uYW1lKSkge1xuXHRcdGNsYXNzRGVmID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQobm9kZS5uYW1lKTtcblx0fSBlbHNlIHtcblx0XHRjbGFzc0RlZiA9IENsYXNzRGVmaW5pdGlvbi5mcm9tQVNUKG5vZGUpO1xuXHRcdG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuc2V0KG5vZGUubmFtZSwgY2xhc3NEZWYpO1xuXHR9XG5cblx0cmV0dXJuIGNsYXNzRGVmLmNvbnN0cnVjdEVtcHR5SW5zdGFuY2UoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdE5hdGl2ZUluc3RhbmNlKGV4cHI6IEFTVE5ld05vZGUsIGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogSW5zdGFuY2Uge1xuXHRyZXR1cm4gY2xhc3NEZWYuY29uc3RydWN0TmF0aXZlSW5zdGFuY2VCeU5ld05vZGUoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEluc3RhbmNlKGV4cHI6IEFTVE5ld05vZGUsIGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogSW5zdGFuY2Uge1xuXHRyZXR1cm4gY2xhc3NEZWYuY29uc3RydWN0SW5zdGFuY2VCeU5ld05vZGUoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxDbGFzcyhub2RlOiBBU1RDbGFzc05vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogdm9pZCB7XG5cdGNvbnN0IGluc3RhbmNlOiBJbnN0YW5jZSA9IGNvbnN0cnVjdEVtcHR5SW5zdGFuY2Uobm9kZSwgb2JqZWN0UmVnaXN0cnkpO1xuXG5cdGluc3RhbmNlLmluaXRpYWxpemVJbnN0YW5jZUZpZWxkcyhvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXG5cdGVudmlyb25tZW50LmRlZmluZShub2RlLm5hbWUsIGluc3RhbmNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxOZXcoZXhwcjogQVNUTmV3Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiBJbnN0YW5jZSB7XG5cdGlmICghb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5oYXMoZXhwci5uYW1lKSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBVbmtub3duIGNsYXNzICR7ZXhwci5uYW1lfS5gLCBleHByLnNwYW4pO1xuXHR9XG5cblx0Y29uc3QgY2xhc3NEZWYgPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChleHByLm5hbWUpO1xuXHRpZiAoY2xhc3NEZWYubmF0aXZlSW5zdGFuY2UpIHtcblx0XHRyZXR1cm4gY29uc3RydWN0TmF0aXZlSW5zdGFuY2UoZXhwciwgY2xhc3NEZWYsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG5cdH1cblxuXHRyZXR1cm4gY29uc3RydWN0SW5zdGFuY2UoZXhwciwgY2xhc3NEZWYsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsRXhwcmVzc2lvbihleHByOiBBU1ROb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0c3dpdGNoIChleHByLnR5cGUpIHtcblx0XHRjYXNlIEFTVE5vZGVUeXBlLlNUUklORzpcblx0XHRjYXNlIEFTVE5vZGVUeXBlLk5VTUJFUjpcblx0XHRjYXNlIEFTVE5vZGVUeXBlLkJPT0xFQU46IHtcblx0XHRcdHJldHVybiBleHByLnZhbHVlO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLk5VTEw6IHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLklERU5USUZJRVI6IHtcblx0XHRcdHJldHVybiBlbnZpcm9ubWVudC5nZXQoZXhwci5uYW1lKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5USElTOiB7XG5cdFx0XHRpZiAoIXRoaXNWYWx1ZSkge1xuXHRcdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgdGhpcyB1c2VkIG91dHNpZGUgb2YgbWV0aG9kLmAsIGV4cHIuc3Bhbik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpc1ZhbHVlO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkJJTkFSWToge1xuXHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RCaW5hcnlOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsQmluYXJ5KGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGJpbmFyeSBleHByZXNzaW9uICR7ZXhwci50eXBlfWApO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLlVOQVJZOiB7XG5cdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVFVuYXJ5Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbFVuYXJ5KGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIHVuYXJ5IGV4cHJlc3Npb24gJHtleHByLnR5cGV9LmAsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuQVNTSUdOTUVOVDoge1xuXHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RBc3NpZ25tZW50Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbEFzc2lnbihleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBhc3NpZ25tZW50IGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5NRU1CRVI6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbE1lbWJlcihleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBtZW1iZXIgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkNBTEw6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQ2FsbE5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxDYWxsKGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGNhbGwgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLlZET006IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUVkRvbU5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIGV2YWxWRG9tTm9kZShleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBjYWxsIGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5ORVc6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTmV3Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbE5ldyhleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgY2FsbCBleHByZXNzaW9uICR7ZXhwci50eXBlfWAsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuQVJSQVk6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQXJyYXlOb2RlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsQXJyYXkoZXhwciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgYXJyYXkgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0XHRjYXNlIEFTVE5vZGVUeXBlLklOREVYOiB7XG5cdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVEluZGV4Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbEluZGV4KGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGluZGV4IGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5MQU1CREE6IHtcblx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTGFtYmRhTm9kZSkge1xuXHRcdFx0XHRyZXR1cm4gZXZhbExhbWJkYShleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBsYW1iZGEgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHRcdH1cblx0XHRkZWZhdWx0OiB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5oYW5kbGVkIGV4cHJlc3Npb24gJHtleHByLnR5cGV9LmAsIGV4cHIuc3Bhbik7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsQmluYXJ5KGV4cHI6IEFTVEJpbmFyeU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRjb25zdCBsZWZ0OiBhbnkgPSBjYXN0VmFsdWUoZXZhbEV4cHJlc3Npb24oZXhwci5sZWZ0LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSkpO1xuXHRjb25zdCByaWdodDogYW55ID0gY2FzdFZhbHVlKGV2YWxFeHByZXNzaW9uKGV4cHIucmlnaHQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKSk7XG5cblx0aWYgKGxlZnQgaW5zdGFuY2VvZiBJbnN0YW5jZSAmJiByaWdodCBpbnN0YW5jZW9mIEluc3RhbmNlKSB7XG5cblx0XHRpZiAobGVmdC5fX2NsYXNzRGVmLm5hdGl2ZUluc3RhbmNlICYmIHJpZ2h0Ll9fY2xhc3NEZWYubmF0aXZlSW5zdGFuY2UpIHtcblxuXHRcdFx0Y29uc3QgbWV0aG9kTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gQVNUT3BlcmF0b3JOb2RlLk9WRVJMT0FEQUJMRV9PUEVSQVRPUl9NRVRIT0RfTUFQLmdldChleHByLm9wZXJhdG9yKTtcblx0XHRcdGlmICghbWV0aG9kTmFtZSkge1xuXHRcdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5rbm93biBvcGVyYXRvciAke2V4cHIub3BlcmF0b3J9YCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBjYWxsSW5zdGFuY2VNZXRob2QoXG5cdFx0XHRcdGxlZnQsXG5cdFx0XHRcdGxlZnQuZmluZGVNZXRob2ROb2RlKG1ldGhvZE5hbWUpLFxuXHRcdFx0XHRbcmlnaHRdLFxuXHRcdFx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRcdFx0ZW52aXJvbm1lbnQsXG5cdFx0XHRcdGV2ZW50UGlwZWxpbmVcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNhbGxJbnN0YW5jZU1ldGhvZChcblx0XHRcdGxlZnQsXG5cdFx0XHRsZWZ0LmZpbmRlTWV0aG9kTm9kZShleHByLm9wZXJhdG9yKSxcblx0XHRcdFtyaWdodF0sXG5cdFx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRcdGVudmlyb25tZW50LFxuXHRcdFx0ZXZlbnRQaXBlbGluZVxuXHRcdCk7XG5cdH1cblxuXHRzd2l0Y2ggKGV4cHIub3BlcmF0b3IpIHtcblx0XHRjYXNlIEdSQU1NQVIuUExVUzoge1xuXHRcdFx0cmV0dXJuIGxlZnQgKyByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLk1JTlVTOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCAtIHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTVVMVElQTFk6IHtcblx0XHRcdHJldHVybiBsZWZ0ICogcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5ESVZJREU6IHtcblx0XHRcdHJldHVybiBsZWZ0IC8gcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5NT0RVTFVTOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCAlIHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTEVTU19USEFOOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCA8IHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuR1JFQVRFUl9USEFOOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCA+IHJpZ2h0O1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTEVTU19FUVVBTDoge1xuXHRcdFx0cmV0dXJuIGxlZnQgPD0gcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5HUkVBVEVSX0VRVUFMOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCA+PSByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkVRVUFMOiB7XG5cdFx0XHRyZXR1cm4gbGVmdCA9PT0gcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5OT1RfRVFVQUw6IHtcblx0XHRcdHJldHVybiBsZWZ0ICE9PSByaWdodDtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLkFORDoge1xuXHRcdFx0cmV0dXJuIGxlZnQgJiYgcmlnaHQ7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5PUjoge1xuXHRcdFx0cmV0dXJuIGxlZnQgfHwgcmlnaHQ7XG5cdFx0fVxuXHRcdGRlZmF1bHQ6IHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBVbmtub3duIG9wZXJhdG9yICR7ZXhwci5vcGVyYXRvcn1gKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxBcnJheShleHByOiBBU1RBcnJheU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBJbnN0YW5jZSB7XG5cdGNvbnN0IHZhbHVlczogYW55W10gPSBbXTtcblx0Zm9yIChjb25zdCBlbGVtIG9mIGV4cHIuZWxlbWVudHMpIHtcblx0XHR2YWx1ZXMucHVzaChldmFsRXhwcmVzc2lvbihlbGVtLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSkpO1xuXHR9XG5cblx0Y29uc3QgY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbiA9IG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuZ2V0KCdBcnJheScpO1xuXHRjb25zdCBpbnN0YW5jZTogSW5zdGFuY2UgPSBjbGFzc0RlZi5jb25zdHJ1Y3RFbXB0eUluc3RhbmNlKCk7XG5cdGluc3RhbmNlLl9fbmF0aXZlSW5zdGFuY2UgPSBuZXcgY2xhc3NEZWYubmF0aXZlSW5zdGFuY2UoZnJvbUx5cmFWYWx1ZSh2YWx1ZXMpKTtcblxuXHRyZXR1cm4gaW5zdGFuY2U7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxJbmRleChleHByOiBBU1RJbmRleE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpIHtcblx0aWYgKCFleHByLm9iamVjdCkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBJbmRleCBhY2Nlc3Mgb24gbnVsbC5gLCBleHByLnNwYW4pO1xuXHR9XG5cblx0aWYgKCFleHByLmluZGV4KSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYEFjY2VzcyB3aXRoIHVuc3BlY2lmaWMgaW5kZXguYCwgZXhwci5zcGFuKTtcblx0fVxuXG5cdGNvbnN0IG9iamVjdCA9IGV2YWxFeHByZXNzaW9uKGV4cHIub2JqZWN0LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdGNvbnN0IGluZGV4ID0gZXZhbEV4cHJlc3Npb24oZXhwci5pbmRleCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXG5cdGlmICghKG9iamVjdCBpbnN0YW5jZW9mIEx5cmFBcnJheSB8fCBvYmplY3QuX19uYXRpdmVJbnN0YW5jZSBpbnN0YW5jZW9mIEx5cmFBcnJheSkpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcignSW5kZXggYWNjZXNzIG9uIG5vbi1hcnJheScsIGV4cHIuc3Bhbik7XG5cdH1cblxuXHRjb25zdCB0YXJnZXQgPSBvYmplY3QgaW5zdGFuY2VvZiBMeXJhQXJyYXkgPyBvYmplY3QgOiBvYmplY3QuX19uYXRpdmVJbnN0YW5jZTtcblx0Y29uc3QgdmFsdWUgPSB0YXJnZXQudmFsdWVzW2luZGV4XTtcblxuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0cmV0dXJuIHdyYXBOYXRpdmVJbnN0YW5jZSh2YWx1ZSwgb2JqZWN0UmVnaXN0cnkpO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbExhbWJkYShub2RlOiBBU1RMYW1iZGFOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGxhbWJkYUVudjogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IExhbWJkYUZ1bmN0aW9uQ2FsbCB7XG5cdHJldHVybiBuZXcgTGFtYmRhRnVuY3Rpb25DYWxsKG5vZGUsIG9iamVjdFJlZ2lzdHJ5LCBsYW1iZGFFbnYsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxBc3NpZ24oZXhwcjogQVNUQXNzaWdubWVudE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRjb25zdCB2YWx1ZTogYW55ID0gZXZhbEV4cHJlc3Npb24oZXhwci5yaWdodCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXG5cdGlmIChleHByLmxlZnQudHlwZSA9PT0gQVNUTm9kZVR5cGUuTUVNQkVSKSB7XG5cdFx0aWYgKGV4cHIubGVmdCBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpIHtcblx0XHRcdGNvbnN0IG9iamVjdDogSW5zdGFuY2UgPSBldmFsRXhwcmVzc2lvbihcblx0XHRcdFx0ZXhwci5sZWZ0Lm9iamVjdCxcblx0XHRcdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0XHRcdGVudmlyb25tZW50LFxuXHRcdFx0XHRldmVudFBpcGVsaW5lLFxuXHRcdFx0XHR0aGlzVmFsdWVcblx0XHRcdCkgYXMgSW5zdGFuY2U7XG5cblx0XHRcdGlmIChleHByLmxlZnQub2JqZWN0LnR5cGUgPT09IEFTVE5vZGVUeXBlLklERU5USUZJRVIpIHtcblx0XHRcdFx0b2JqZWN0Ll9fc3RhdGljRmllbGRzW2V4cHIubGVmdC5wcm9wZXJ0eV0gPSB2YWx1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9iamVjdC5fX2luc3RhbmNlRmllbGRzW2V4cHIubGVmdC5wcm9wZXJ0eV0gPSB2YWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0b2JqZWN0Lm1hcmtEaXJ0eShldmVudFBpcGVsaW5lKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYEludmFsaWQgbWVtYmVyIGV4cHJlc3Npb24gJHtleHByLnR5cGV9YCwgZXhwci5zcGFuKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0ZW52aXJvbm1lbnQuc2V0KGV4cHIubGVmdC5uYW1lLCB2YWx1ZSk7XG5cdH1cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbE1lbWJlcihleHByOiBBU1RNZW1iZXJOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0Y29uc3Qgb2JqZWN0OiBJbnN0YW5jZSB8IG51bGwgPSBldmFsRXhwcmVzc2lvbihleHByLm9iamVjdCxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RSZWdpc3RyeSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnZpcm9ubWVudCxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudFBpcGVsaW5lLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNWYWx1ZSkgYXMgSW5zdGFuY2U7XG5cblx0aWYgKCFvYmplY3QpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgTWVtYmVyIGFjY2VzcyBvbiBudWxsLmAsIGV4cHIuc3Bhbik7XG5cdH1cblxuXHRpZiAoZXhwci5wcm9wZXJ0eSBpbiBvYmplY3QuX19pbnN0YW5jZUZpZWxkcykge1xuXHRcdHJldHVybiBvYmplY3QuX19pbnN0YW5jZUZpZWxkc1tleHByLnByb3BlcnR5XTtcblx0fVxuXG5cdGlmIChleHByLnByb3BlcnR5IGluIG9iamVjdC5fX3N0YXRpY0ZpZWxkcykge1xuXHRcdHJldHVybiBvYmplY3QuX19zdGF0aWNGaWVsZHNbZXhwci5wcm9wZXJ0eV07XG5cdH1cblxuXHR0aHJvd1J1bnRpbWVFcnJvcihgUHJvcGVydHkgJyR7ZXhwci5wcm9wZXJ0eX0nIG5vdCBmb3VuZGAsIGV4cHIuc3Bhbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsQ2FsbChleHByOiBBU1RDYWxsTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdC8vIHN1cGVyIGNhbGwgaW5zaWRlIGNvbnN0cnVjdG9yXG5cdGlmIChleHByLmNhbGxlZS50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSICYmIGV4cHIuY2FsbGVlLm5hbWUgPT09IEdSQU1NQVIuU1VQRVIpIHtcblx0XHRpZiAoIXRoaXNWYWx1ZSB8fCAhdGhpc1ZhbHVlLl9fY2xhc3NEZWY/LnN1cGVyQ2xhc3MpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKCdzdXBlcigpIHVzZWQgb3V0c2lkZSBvZiBzdWJjbGFzcyBjb25zdHJ1Y3RvcicpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHN1cGVyQ2xhc3NEZWYgPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldCh0aGlzVmFsdWUuX19jbGFzc0RlZi5zdXBlckNsYXNzKTtcblx0XHRjb25zdCBjb25zdHJ1Y3Rvck1ldGhvZCA9IHN1cGVyQ2xhc3NEZWYuY29uc3RydWN0b3JNZXRob2Q7XG5cblx0XHRpZiAoIWNvbnN0cnVjdG9yTWV0aG9kKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRjb25zdCBjb25zdHJ1Y3RvckVudiA9IG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCk7XG5cdFx0Y29uc3RydWN0b3JFbnYuZGVmaW5lKEdSQU1NQVIuVEhJUywgdGhpc1ZhbHVlKTtcblxuXHRcdGJpbmRNZXRob2RQYXJhbWV0ZXJzKFxuXHRcdFx0ZXhwcixcblx0XHRcdGNvbnN0cnVjdG9yTWV0aG9kLnBhcmFtZXRlcnMsXG5cdFx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRcdGNvbnN0cnVjdG9yRW52LFxuXHRcdFx0ZW52aXJvbm1lbnQsXG5cdFx0XHRldmVudFBpcGVsaW5lLFxuXHRcdFx0dGhpc1ZhbHVlXG5cdFx0KTtcblxuXHRcdGZvciAoY29uc3QgY2hpbGQgb2YgY29uc3RydWN0b3JNZXRob2QuY2hpbGRyZW4pIHtcblx0XHRcdGV2YWxOb2RlKGNoaWxkLCBvYmplY3RSZWdpc3RyeSwgY29uc3RydWN0b3JFbnYsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRpZiAoZXhwci5jYWxsZWUudHlwZSA9PT0gQVNUTm9kZVR5cGUuTUVNQkVSKSB7XG5cdFx0aWYgKGV4cHIuY2FsbGVlIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkge1xuXHRcdFx0aWYgKGV4cHIuY2FsbGVlLm9iamVjdC50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0XHRcdGNvbnN0IGNsYXNzTmFtZTogc3RyaW5nID0gZXhwci5jYWxsZWUub2JqZWN0Lm5hbWU7XG5cblx0XHRcdFx0aWYgKG9iamVjdFJlZ2lzdHJ5LmNsYXNzZXMuaGFzKGNsYXNzTmFtZSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZXZhbFN0YXRpY0NhbGwoZXhwciwgY2xhc3NOYW1lLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBldmFsSW5zdGFuY2VDYWxsKGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBldmFsRnVuY3Rpb25DYWxsKGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxGdW5jdGlvbkNhbGwoZXhwcjogQVNUQ2FsbE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpIHtcblx0Y29uc3QgZnVuY3Rpb25DYWxsOiBhbnkgPSBldmFsRXhwcmVzc2lvbihleHByLmNhbGxlZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRjb25zdCBhcmdzOiBhbnlbXSA9IGV2YWxDYWxsQXJndW1lbnRzKGV4cHIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblxuXHRpZiAoZnVuY3Rpb25DYWxsIGluc3RhbmNlb2YgTGFtYmRhRnVuY3Rpb25DYWxsKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uQ2FsbC5ldmFsQ2FsbCguLi5hcmdzKTtcblx0fVxuXG5cdHJldHVybiAobmV3IE5hdGl2ZUZ1bmN0aW9uQ2FsbChleHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSkpLmV2YWxDYWxsKC4uLmFyZ3MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbFN0YXRpY0NhbGwoZXhwcjogQVNUQ2FsbE5vZGUsIGNsYXNzTmFtZTogc3RyaW5nLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0aWYgKCEoZXhwci5jYWxsZWUgaW5zdGFuY2VvZiBBU1RNZW1iZXJOb2RlKSkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIG1lbWJlciBleHByZXNzaW9uICR7ZXhwci50eXBlfWAsIGV4cHIuc3Bhbik7XG5cdH1cblxuXHRjb25zdCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQoY2xhc3NOYW1lKTtcblx0Y29uc3QgbWV0aG9kRGVmOiBDbGFzc01ldGhvZERlZmluaXRpb24gfCB1bmRlZmluZWQgPSBjbGFzc0RlZi5zdGF0aWNNZXRob2RzW2V4cHIuY2FsbGVlLnByb3BlcnR5XTtcblxuXHRpZiAoIW1ldGhvZERlZikge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBTdGF0aWMgbWV0aG9kICR7Y2xhc3NOYW1lfS4ke2V4cHIuY2FsbGVlLnByb3BlcnR5fSBub3QgZm91bmRgLCBleHByLmNhbGxlZS5zcGFuKTtcblx0fVxuXG5cdGlmIChjbGFzc0RlZi5uYXRpdmVJbnN0YW5jZSAmJiBjbGFzc0RlZi5uYXRpdmVJbnN0YW5jZVttZXRob2REZWYubmFtZV0pIHtcblx0XHRjb25zdCBhcmdzOiBhbnlbXSA9IGV2YWxNZXRob2RBcmd1bWVudHMoXG5cdFx0XHRleHByLFxuXHRcdFx0bWV0aG9kRGVmLnBhcmFtZXRlcnMsXG5cdFx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRcdGVudmlyb25tZW50LFxuXHRcdFx0ZXZlbnRQaXBlbGluZSxcblx0XHRcdHRoaXNWYWx1ZVxuXHRcdCk7XG5cdFx0Y29uc3QgcmF3QXJnczogYW55W10gPSBhcmdzLm1hcChmcm9tTHlyYVZhbHVlKTtcblx0XHRjb25zdCByZXN1bHQ6IGFueSA9IGNsYXNzRGVmLm5hdGl2ZUluc3RhbmNlW21ldGhvZERlZi5uYW1lXSguLi5yYXdBcmdzKTtcblxuXHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRyZXR1cm4gd3JhcE5hdGl2ZUluc3RhbmNlKHJlc3VsdCwgb2JqZWN0UmVnaXN0cnkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmFsUmV0dXJuKFxuXHRcdFx0W3JldHVyblZhbHVlKHJlc3VsdCldLFxuXHRcdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0XHRuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpLFxuXHRcdFx0ZXZlbnRQaXBlbGluZSxcblx0XHRcdHRoaXNWYWx1ZSxcblx0XHRcdG1ldGhvZERlZi5yZXR1cm5UeXBlXG5cdFx0KTtcblx0fVxuXG5cdGNvbnN0IG1ldGhvZEVudiA9IG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCk7XG5cblx0YmluZE1ldGhvZFBhcmFtZXRlcnMoZXhwciwgbWV0aG9kRGVmLnBhcmFtZXRlcnMsIG9iamVjdFJlZ2lzdHJ5LCBtZXRob2RFbnYsIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXG5cdHJldHVybiBldmFsUmV0dXJuKG1ldGhvZERlZi5jaGlsZHJlbiwgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlLCBtZXRob2REZWYucmV0dXJuVHlwZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsSW5zdGFuY2VDYWxsKGV4cHI6IEFTVENhbGxOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKSB7XG5cdGlmICghKGV4cHIuY2FsbGVlIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBtZW1iZXIgZXhwcmVzc2lvbiAke2V4cHIudHlwZX1gLCBleHByLnNwYW4pO1xuXHR9XG5cblx0Ly8gT2JqZWt0IGF1c3dlcnRlbiAodSB8IHRoaXMgfCBzdXBlcilcblx0bGV0IHRhcmdldDogYW55ID0gZXZhbEV4cHJlc3Npb24oZXhwci5jYWxsZWUub2JqZWN0LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cblx0dGFyZ2V0ID0gYXV0b0JveElmTmVlZGVkKHRhcmdldCwgb2JqZWN0UmVnaXN0cnkpO1xuXG5cdGlmICghdGFyZ2V0IHx8ICF0YXJnZXQuX19jbGFzc0RlZikge1xuXHRcdHRocm93UnVudGltZUVycm9yKCdJbnN0YW5jZSBjYWxsIG9uIG5vbi1vYmplY3QnLCBleHByLmNhbGxlZS5zcGFuKTtcblx0fVxuXG5cdGxldCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uID0gdGFyZ2V0Ll9fY2xhc3NEZWY7XG5cblx0Ly8gc3VwZXIubWV0aG9kKClcblx0aWYgKGV4cHIuY2FsbGVlLm9iamVjdC50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSICYmIGV4cHIuY2FsbGVlLm9iamVjdC5uYW1lID09PSAnc3VwZXInKSB7XG5cdFx0Y29uc3Qgc3VwZXJOYW1lID0gY2xhc3NEZWYuc3VwZXJDbGFzcztcblx0XHRpZiAoIXN1cGVyTmFtZSkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoJ3N1cGVyIHVzZWQgYnV0IG5vIHN1cGVyY2xhc3MnLCBleHByLmNhbGxlZS5zcGFuKTtcblx0XHR9XG5cdFx0Y2xhc3NEZWYgPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChzdXBlck5hbWUpO1xuXHR9XG5cblxuXHRjb25zdCBtZXRob2REZWY6IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB8IG51bGwgPSByZXNvbHZlSW5zdGFuY2VNZXRob2QoXG5cdFx0Y2xhc3NEZWYsXG5cdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0ZXhwci5jYWxsZWUucHJvcGVydHlcblx0KTtcblxuXHRpZiAoIW1ldGhvZERlZikge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBNZXRob2QgJHtleHByLmNhbGxlZS5wcm9wZXJ0eX0gbm90IGZvdW5kIG9uICR7Y2xhc3NEZWYubmFtZX1gLCBleHByLmNhbGxlZS5zcGFuKTtcblx0fVxuXG5cdGNvbnN0IG1ldGhvZEVudiA9IG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCk7XG5cdG1ldGhvZEVudi5kZWZpbmUoR1JBTU1BUi5USElTLCB0YXJnZXQpO1xuXG5cdGlmICh0YXJnZXQuX19uYXRpdmVJbnN0YW5jZSAmJiBtZXRob2REZWYubmFtZSBpbiB0YXJnZXQuX19uYXRpdmVJbnN0YW5jZSkge1xuXHRcdGNvbnN0IGFyZ3M6IGFueVtdID0gZXZhbE1ldGhvZEFyZ3VtZW50cyhcblx0XHRcdGV4cHIsXG5cdFx0XHRtZXRob2REZWYucGFyYW1ldGVycyxcblx0XHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0ZW52aXJvbm1lbnQsXG5cdFx0XHRldmVudFBpcGVsaW5lLFxuXHRcdFx0dGhpc1ZhbHVlXG5cdFx0KTtcblxuXHRcdGNvbnN0IHJhd0FyZ3M6IGFueSA9IGFyZ3MubWFwKGZyb21MeXJhVmFsdWUpO1xuXHRcdGNvbnN0IHJlc3VsdDogYW55ID0gdGFyZ2V0Ll9fbmF0aXZlSW5zdGFuY2VbbWV0aG9kRGVmLm5hbWVdKC4uLnJhd0FyZ3MpO1xuXG5cdFx0aWYgKHJlc3VsdCBpbnN0YW5jZW9mIEx5cmFOYXRpdmVPYmplY3QpIHtcblx0XHRcdHJldHVybiB3cmFwTmF0aXZlSW5zdGFuY2UocmVzdWx0LCBvYmplY3RSZWdpc3RyeSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2YWxSZXR1cm4oXG5cdFx0XHRbcmV0dXJuVmFsdWUocmVzdWx0KV0sXG5cdFx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRcdG1ldGhvZEVudixcblx0XHRcdGV2ZW50UGlwZWxpbmUsXG5cdFx0XHR0YXJnZXQsXG5cdFx0XHRtZXRob2REZWYucmV0dXJuVHlwZVxuXHRcdCk7XG5cdH1cblxuXHRiaW5kTWV0aG9kUGFyYW1ldGVycyhleHByLCBtZXRob2REZWYucGFyYW1ldGVycywgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cblx0cmV0dXJuIGV2YWxSZXR1cm4obWV0aG9kRGVmLmNoaWxkcmVuLCBvYmplY3RSZWdpc3RyeSwgbWV0aG9kRW52LCBldmVudFBpcGVsaW5lLCB0YXJnZXQsIG1ldGhvZERlZi5yZXR1cm5UeXBlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVJbnN0YW5jZU1ldGhvZChjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIG1ldGhvZE5hbWU6IHN0cmluZyk6IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB8IG51bGwge1xuXHRpZiAoY2xhc3NEZWYuaW5zdGFuY2VNZXRob2RzW21ldGhvZE5hbWVdKSB7XG5cdFx0cmV0dXJuIGNsYXNzRGVmLmluc3RhbmNlTWV0aG9kc1ttZXRob2ROYW1lXTtcblx0fVxuXG5cdGlmIChjbGFzc0RlZi5zdXBlckNsYXNzKSB7XG5cdFx0Y29uc3Qgc3VwZXJEZWYgPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmdldChjbGFzc0RlZi5zdXBlckNsYXNzKTtcblx0XHRyZXR1cm4gcmVzb2x2ZUluc3RhbmNlTWV0aG9kKHN1cGVyRGVmLCBvYmplY3RSZWdpc3RyeSwgbWV0aG9kTmFtZSk7XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRNZXRob2RQYXJhbWV0ZXJzKFxuXHRjYWxsTm9kZTogQVNUQ2FsbE5vZGUsXG5cdHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSxcblx0b2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LFxuXHRtZXRob2RFbnY6IEVudmlyb25tZW50LFxuXHRlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsXG5cdGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsXG5cdHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbFxuKTogdm9pZCB7XG5cblx0Y29uc3QgYXJncyA9IGNhbGxOb2RlLmFyZ3VtZW50cztcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgcGFyYW1ldGVyOiBBU1RQYXJhbWV0ZXJOb2RlIHwgbnVsbCA9IHBhcmFtZXRlcnNbaV0gfHwgbnVsbDtcblx0XHRjb25zdCBhcmd1bWVudDogYW55ID0gYXJnc1tpXSB8fCBudWxsO1xuXG5cdFx0aWYgKCFwYXJhbWV0ZXIpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKCdNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGluIG1ldGhvZCBjYWxsLicpO1xuXHRcdH1cblxuXHRcdGxldCByYXdWYWx1ZTtcblxuXHRcdGlmIChhcmd1bWVudCkge1xuXHRcdFx0cmF3VmFsdWUgPSBldmFsRXhwcmVzc2lvbihhcmd1bWVudCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdH0gZWxzZSBpZiAocGFyYW1ldGVyPy5kZWZhdWx0VmFsdWUpIHtcblx0XHRcdHJhd1ZhbHVlID0gZXZhbEV4cHJlc3Npb24ocGFyYW1ldGVyLmRlZmF1bHRWYWx1ZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNhc3RlZCA9IHBhcmFtZXRlci50eXBlQW5ub3RhdGlvblxuXHRcdFx0PyBjYXN0VmFsdWUocmF3VmFsdWUsIHBhcmFtZXRlci50eXBlQW5ub3RhdGlvbi5uYW1lKVxuXHRcdFx0OiBjYXN0VmFsdWUocmF3VmFsdWUsIFRZUEVfRU5VTS5NSVhFRCk7XG5cblx0XHRtZXRob2RFbnYuZGVmaW5lKHBhcmFtZXRlci5uYW1lLCBjYXN0ZWQpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsQ2FsbEFyZ3VtZW50cyhub2RlOiBBU1RDYWxsTm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueVtdIHtcblx0aWYgKG5vZGUuY2FsbGVlIGluc3RhbmNlb2YgQVNUTGFtYmRhTm9kZSkge1xuXHRcdGNvbnN0IGxhbWJkYSA9IG5vZGUuY2FsbGVlO1xuXHRcdHJldHVybiBldmFsTWV0aG9kQXJndW1lbnRzKG5vZGUsIGxhbWJkYS5wYXJhbWV0ZXJzLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdH1cblxuXHRpZiAobm9kZS5jYWxsZWUudHlwZSA9PT0gQVNUTm9kZVR5cGUuSURFTlRJRklFUikge1xuXHRcdHJldHVybiBub2RlLmFyZ3VtZW50cy5tYXAoYXJndW1lbnQgPT4ge1xuXHRcdFx0cmV0dXJuIGNhc3RWYWx1ZShcblx0XHRcdFx0ZXZhbEV4cHJlc3Npb24oYXJndW1lbnQsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKSxcblx0XHRcdFx0YXJndW1lbnQudHlwZVxuXHRcdFx0KTtcblx0XHR9KTtcblx0fVxuXG5cdGxldCBtb2R1bGVOYW1lOiBzdHJpbmcgPSAndW5rbm93bic7XG5cdGxldCBtZXRob2ROYW1lOiBzdHJpbmcgPSAndW5rbm93bic7XG5cblx0aWYgKG5vZGUuY2FsbGVlIGluc3RhbmNlb2YgQVNUTWVtYmVyTm9kZSkge1xuXHRcdG1vZHVsZU5hbWUgPSBub2RlLmNhbGxlZS5vYmplY3QubmFtZTtcblx0XHRtZXRob2ROYW1lID0gbm9kZS5jYWxsZWUucHJvcGVydHk7XG5cdH1cblxuXHR0aHJvd1J1bnRpbWVFcnJvcihgVW5rbm93biBmdW5jdGlvbiAke21vZHVsZU5hbWV9LiR7bWV0aG9kTmFtZX1gLCBub2RlLnNwYW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbE1ldGhvZEFyZ3VtZW50cyhleHByOiBBU1RDYWxsTm9kZSB8IEFTVE5ld05vZGUsIHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueVtdIHtcblx0Y29uc3QgYXJncyA9IFtdO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHBhcmFtZXRlcjogQVNUUGFyYW1ldGVyTm9kZSB8IG51bGwgPSBwYXJhbWV0ZXJzW2ldIHx8IG51bGw7XG5cdFx0Y29uc3QgYXJndW1lbnQgPSBleHByLmFyZ3VtZW50c1tpXSB8fCBudWxsO1xuXG5cdFx0bGV0IHZhbHVlO1xuXG5cdFx0aWYgKGFyZ3VtZW50KSB7XG5cdFx0XHR2YWx1ZSA9IGV2YWxFeHByZXNzaW9uKGFyZ3VtZW50LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0fSBlbHNlIGlmIChwYXJhbWV0ZXI/LmRlZmF1bHRWYWx1ZSkge1xuXHRcdFx0dmFsdWUgPSBldmFsRXhwcmVzc2lvbihwYXJhbWV0ZXIuZGVmYXVsdFZhbHVlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBbUnVudGltZUVycm9yXSBNaXNzaW5nIGFyZ3VtZW50ICcke3BhcmFtZXRlcj8ubmFtZX0nYCwgZXhwci5zcGFuKTtcblx0XHR9XG5cblx0XHRhcmdzLnB1c2godmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIGFyZ3MubWFwKChhcmd1bWVudCwgaSkgPT4ge1xuXHRcdGNvbnN0IHBhcmFtZXRlciA9IHBhcmFtZXRlcnNbaV07XG5cdFx0cmV0dXJuIHBhcmFtZXRlcj8udHlwZUFubm90YXRpb25cblx0XHRcdD8gY2FzdFZhbHVlKGFyZ3VtZW50LCBwYXJhbWV0ZXIudHlwZUFubm90YXRpb24ubmFtZSlcblx0XHRcdDogY2FzdFZhbHVlKGFyZ3VtZW50LCBUWVBFX0VOVU0uTUlYRUQpO1xuXHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxJZihub2RlOiBBU1RJZk5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRjb25zdCBjb25kaXRpb24gPSBjYXN0VmFsdWUoXG5cdFx0ZXZhbEV4cHJlc3Npb24obm9kZS5jb25kaXRpb24sIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKSxcblx0XHRUWVBFX0VOVU0uQk9PTEVBTlxuXHQpO1xuXG5cdC8vIFRIRU5cblx0aWYgKGNvbmRpdGlvbiA9PT0gdHJ1ZSkge1xuXHRcdHJldHVybiBldmFsQmxvY2sobm9kZS50aGVuLmNoaWxkcmVuLCBvYmplY3RSZWdpc3RyeSwgbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KSwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0fVxuXG5cdC8vIEVMU0Vcblx0aWYgKG5vZGUuZWxzZSkge1xuXHRcdGlmIChub2RlLmVsc2UgaW5zdGFuY2VvZiBBU1RJZk5vZGUpIHtcblx0XHRcdHJldHVybiBldmFsSWYobm9kZS5lbHNlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2YWxCbG9jayhub2RlLmVsc2UuY2hpbGRyZW4sIG9iamVjdFJlZ2lzdHJ5LCBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpLCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsTWF0Y2gobm9kZTogQVNUTWF0Y2hOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0Y29uc3QgbWF0Y2hWYWx1ZTogYW55ID0gZXZhbEV4cHJlc3Npb24obm9kZS5leHByZXNzaW9uLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXG5cdGZvciAoY29uc3QgY2FzZU5vZGUgb2Ygbm9kZS5jYXNlcykge1xuXHRcdGlmIChjYXNlTm9kZS50ZXN0ID09PSBudWxsKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCB0ZXN0VmFsdWUgPSBldmFsRXhwcmVzc2lvbihjYXNlTm9kZS50ZXN0LCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cblx0XHRpZiAodGVzdFZhbHVlID09PSBtYXRjaFZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gZXZhbE1hdGNoQ2FzZShjYXNlTm9kZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdGlmIChub2RlLmRlZmF1bHRDYXNlKSB7XG5cdFx0cmV0dXJuIGV2YWxNYXRjaENhc2Uobm9kZS5kZWZhdWx0Q2FzZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsTWF0Y2hDYXNlKG5vZGU6IEFTVE1hdGNoQ2FzZU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRyZXR1cm4gZXZhbEJsb2NrKG5vZGUuY2hpbGRyZW4sIG9iamVjdFJlZ2lzdHJ5LCBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpLCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbEZvcmVhY2gobm9kZTogQVNURm9yZWFjaE5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBhbnkge1xuXHRsZXQgaXRlcmFibGUgPSBldmFsRXhwcmVzc2lvbihub2RlLml0ZXJhYmxlLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cblx0aWYgKCEoaXRlcmFibGUgaW5zdGFuY2VvZiBJbnN0YW5jZSkpIHtcblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgZm9yZWFjaCBleHBlY3RzIGFuIG9iamVjdCBpbXBsZW1lbnRpbmcgSXRlcmFibGVgLCBub2RlLml0ZXJhYmxlLnNwYW4pO1xuXHR9XG5cblx0Y29uc3QgaXRlcmF0b3JNZXRob2QgPSByZXNvbHZlSW5zdGFuY2VNZXRob2QoXG5cdFx0aXRlcmFibGUuX19jbGFzc0RlZixcblx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHQnaXRlcmF0b3InXG5cdCk7XG5cblx0aWYgKCFpdGVyYXRvck1ldGhvZCkge1xuXHRcdHRocm93UnVudGltZUVycm9yKGBPYmplY3QgZG9lcyBub3QgaW1wbGVtZW50IEl0ZXJhYmxlIChtaXNzaW5nIGl0ZXJhdG9yKCkpYCwgbm9kZS5pdGVyYWJsZS5zcGFuKTtcblx0fVxuXG5cdGNvbnN0IGl0ZXJhdG9yOiBhbnkgPSBldmFsSW5zdGFuY2VDYWxsKFxuXHRcdCgoKTogQVNUQ2FsbE5vZGUgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBBU1RDYWxsTm9kZShuZXcgQVNUTWVtYmVyTm9kZShub2RlLml0ZXJhYmxlLCAnaXRlcmF0b3InKSk7XG5cdFx0fSkoKSxcblx0XHRvYmplY3RSZWdpc3RyeSxcblx0XHRlbnZpcm9ubWVudCxcblx0XHRldmVudFBpcGVsaW5lLFxuXHRcdHRoaXNWYWx1ZVxuXHQpO1xuXG5cdGlmICghKGl0ZXJhdG9yIGluc3RhbmNlb2YgSW5zdGFuY2UpKSB7XG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYGl0ZXJhdG9yKCkgbXVzdCByZXR1cm4gYW4gSXRlcmF0b3Igb2JqZWN0YCwgbm9kZS5pdGVyYWJsZS5zcGFuKTtcblx0fVxuXG5cdGNhbGxJdGVyYXRvck1ldGhvZChpdGVyYXRvciwgJ3Jld2luZCcsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG5cblx0d2hpbGUgKGNhbGxJdGVyYXRvck1ldGhvZChpdGVyYXRvciwgJ2hhc05leHQnLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpKSB7XG5cdFx0Y29uc3QgdmFsdWUgPSBjYWxsSXRlcmF0b3JNZXRob2QoaXRlcmF0b3IsICdjdXJyZW50Jywgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcblxuXHRcdGNvbnN0IGxvb3BFbnYgPSBuZXcgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQpO1xuXG5cdFx0bG9vcEVudi5kZWZpbmUobm9kZS5pdGVyYXRvciwgdmFsdWUpO1xuXG5cdFx0Y29uc3QgcmVzdWx0ID0gZXZhbEJsb2NrKG5vZGUuYm9keSwgb2JqZWN0UmVnaXN0cnksIGxvb3BFbnYsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSk7XG5cdFx0aWYgKHJlc3VsdCBpbnN0YW5jZW9mIFJldHVyblZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblxuXHRcdGNhbGxJdGVyYXRvck1ldGhvZChpdGVyYXRvciwgJ25leHQnLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxsSXRlcmF0b3JNZXRob2QoaXRlcmF0b3I6IEluc3RhbmNlLCBtZXRob2ROYW1lOiBzdHJpbmcsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogYW55IHtcblx0cmV0dXJuIGNhbGxJbnN0YW5jZU1ldGhvZChcblx0XHRpdGVyYXRvcixcblx0XHRpdGVyYXRvci5maW5kZU1ldGhvZE5vZGUobWV0aG9kTmFtZSksXG5cdFx0W10sXG5cdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0ZW52aXJvbm1lbnQsXG5cdFx0ZXZlbnRQaXBlbGluZVxuXHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbFVuYXJ5KG5vZGU6IEFTVFVuYXJ5Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZTogSW5zdGFuY2UgfCBudWxsID0gbnVsbCk6IGFueSB7XG5cdGNvbnN0IHZhbHVlOiBhbnkgPSBjYXN0VmFsdWUoZXZhbEV4cHJlc3Npb24obm9kZS5hcmd1bWVudCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpKTtcblxuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBJbnN0YW5jZSkge1xuXHRcdGxldCBvcDogc3RyaW5nID0gbm9kZS5vcGVyYXRvcjtcblxuXHRcdGlmIChvcCA9PT0gR1JBTU1BUi5QTFVTKSB7XG5cdFx0XHRvcCA9IEdSQU1NQVIuVU5BUllfUExVUztcblx0XHR9IGVsc2UgaWYgKG9wID09PSBHUkFNTUFSLk1JTlVTKSB7XG5cdFx0XHRvcCA9IEdSQU1NQVIuVU5BUllfTUlOVVM7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNhbGxJbnN0YW5jZU1ldGhvZChcblx0XHRcdHZhbHVlLFxuXHRcdFx0dmFsdWUuZmluZGVNZXRob2ROb2RlKG9wKSxcblx0XHRcdFtdLFxuXHRcdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0XHRlbnZpcm9ubWVudCxcblx0XHRcdGV2ZW50UGlwZWxpbmVcblx0XHQpO1xuXHR9XG5cblx0c3dpdGNoIChub2RlLm9wZXJhdG9yKSB7XG5cdFx0Y2FzZSBHUkFNTUFSLkVYQ0xBTUFUSU9OX01BUks6IHtcblx0XHRcdHJldHVybiAhdmFsdWU7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5NSU5VUzoge1xuXHRcdFx0cmV0dXJuIC12YWx1ZTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLlBMVVM6IHtcblx0XHRcdHJldHVybiArdmFsdWU7XG5cdFx0fVxuXHR9XG5cblxuXHR0aHJvd1J1bnRpbWVFcnJvcihgVW5zdXBwb3J0ZWQgdW5hcnkgb3BlcmF0b3IgJHtub2RlLm9wZXJhdG9yfWAsIG5vZGUuc3Bhbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsVkRvbU5vZGUobm9kZTogQVNUVkRvbU5vZGUsIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lLCB0aGlzVmFsdWU6IEluc3RhbmNlIHwgbnVsbCA9IG51bGwpOiBWQ2hpbGQge1xuXHRjb25zdCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9O1xuXG5cdGZvciAoY29uc3QgW25hbWUsIHZhbHVlXSBvZiBub2RlLnByb3BzKSB7XG5cdFx0cHJvcHNbbmFtZV0gPSBldmFsRXhwcmVzc2lvbih2YWx1ZSwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpO1xuXHR9XG5cblx0Y29uc3QgaXNDb21wb25lbnQ6IGJvb2xlYW4gPSBvYmplY3RSZWdpc3RyeS5jbGFzc2VzLmhhcyhub2RlLnRhZyk7XG5cblx0Y29uc3QgY2hpbGRyZW46IFZDaGlsZFtdID0gW107XG5cdGxldCB0ZXh0QnVmZmVyOiBzdHJpbmdbXSA9IFtdO1xuXG5cdGNvbnN0IGZsdXNoVGV4dEJ1ZmZlciA9ICgpID0+IHtcblx0XHRpZiAodGV4dEJ1ZmZlci5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y2hpbGRyZW4ucHVzaCh7XG5cdFx0XHQgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0Jyxcblx0XHRcdCAgICAgICAgICAgICAgdmFsdWU6IHRleHRCdWZmZXIuam9pbignJyksXG5cdFx0XHQgICAgICAgICAgICAgIGRvbTogdW5kZWZpbmVkXG5cdFx0ICAgICAgICAgICAgICB9KTtcblx0XHR0ZXh0QnVmZmVyID0gW107XG5cdH1cblxuXHRmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcblx0XHRzd2l0Y2ggKHRydWUpIHtcblx0XHRcdGNhc2UgY2hpbGQgaW5zdGFuY2VvZiBBU1RWRG9tVGV4dE5vZGU6IHtcblx0XHRcdFx0dGV4dEJ1ZmZlci5wdXNoKGNoaWxkLnZhbHVlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRjYXNlIGNoaWxkIGluc3RhbmNlb2YgQVNUVkRvbUV4cHJlc3Npb25Ob2RlOiB7XG5cdFx0XHRcdHRleHRCdWZmZXIucHVzaChldmFsRXhwcmVzc2lvbihjaGlsZC5leHByLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUsIHRoaXNWYWx1ZSkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGNhc2UgY2hpbGQgaW5zdGFuY2VvZiBBU1RWRG9tTm9kZToge1xuXHRcdFx0XHRjaGlsZHJlbi5wdXNoKGV2YWxWRG9tTm9kZShjaGlsZCwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lLCB0aGlzVmFsdWUpIGFzIFZDaGlsZCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zmx1c2hUZXh0QnVmZmVyKCk7XG5cdH1cblxuXHRmbHVzaFRleHRCdWZmZXIoKTtcblxuXHRpZiAoaXNDb21wb25lbnQpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ2NvbXBvbmVudCcsXG5cdFx0XHRjbGFzc05hbWU6IG5vZGUudGFnLFxuXHRcdFx0cHJvcHM6IHsuLi5wcm9wcywgY2hpbGRyZW59LFxuXHRcdFx0c3ViVHJlZTogdW5kZWZpbmVkLFxuXHRcdFx0aW5zdGFuY2U6IHVuZGVmaW5lZCxcblx0XHRcdGRvbTogdW5kZWZpbmVkXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ2VsZW1lbnQnLFxuXHRcdHRhZzogbm9kZS50YWcsXG5cdFx0cHJvcHMsXG5cdFx0Y2hpbGRyZW4sXG5cdFx0ZG9tOiB1bmRlZmluZWRcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxSZXR1cm4oYmxvY2tOb2RlczogQVNUTm9kZVtdLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsLCByZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gZXZhbEJsb2NrKGJsb2NrTm9kZXMsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlLCByZXR1cm5UeXBlKTtcblx0fSBjYXRjaCAoZXhlY3V0aW9uU3RvcCkge1xuXHRcdGlmIChleGVjdXRpb25TdG9wIGluc3RhbmNlb2YgRXhlY3V0aW9uU3RvcCkge1xuXHRcdFx0cmV0dXJuIGNhc3RWYWx1ZShleGVjdXRpb25TdG9wLnJldHVyblZhbHVlLnZhbHVlLCBleGVjdXRpb25TdG9wLnJldHVyblR5cGU/Lm5hbWUpO1xuXHRcdH1cblx0XHR0aHJvdyBleGVjdXRpb25TdG9wO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsQmxvY2soYmxvY2tOb2RlczogQVNUTm9kZVtdLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlOiBJbnN0YW5jZSB8IG51bGwgPSBudWxsLCByZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGwgPSBudWxsKTogYW55IHtcblx0Zm9yIChjb25zdCBibG9ja05vZGUgb2YgYmxvY2tOb2Rlcykge1xuXHRcdGNvbnN0IHJldHVyblZhbHVlOiBhbnkgPSBldmFsTm9kZShibG9ja05vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSwgdGhpc1ZhbHVlKTtcblx0XHRpZiAocmV0dXJuVmFsdWUgaW5zdGFuY2VvZiBSZXR1cm5WYWx1ZSkge1xuXHRcdFx0dGhyb3cgbmV3IEV4ZWN1dGlvblN0b3AocmV0dXJuVmFsdWUsIHJldHVyblR5cGUpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxBbm5vdGF0aW9uVmFsdWUobm9kZTogQVNUTm9kZSk6IGFueSB7XG5cdHN3aXRjaCAobm9kZS50eXBlKSB7XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5TVFJJTkc6XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5OVU1CRVI6XG5cdFx0Y2FzZSBBU1ROb2RlVHlwZS5CT09MRUFOOlxuXHRcdGNhc2UgQVNUTm9kZVR5cGUuSURFTlRJRklFUjoge1xuXHRcdFx0cmV0dXJuIGNhc3RWYWx1ZShub2RlLnZhbHVlKTtcblx0XHR9XG5cblx0XHRjYXNlIEFTVE5vZGVUeXBlLkFSUkFZIDoge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RBcnJheU5vZGUpIHtcblx0XHRcdFx0cmV0dXJuIG5vZGUuZWxlbWVudHMubWFwKGNoaWxkID0+IGV2YWxBbm5vdGF0aW9uVmFsdWUoY2hpbGQpKTtcblx0XHRcdH1cblx0XHRcdHRocm93UnVudGltZUVycm9yKGBJbnZhbGlkIGFubm90YXRpb24gcHJvcGVydHkgdmFsdWU6ICR7bm9kZS50eXBlfWAsIG5vZGUuc3Bhbik7XG5cdFx0fVxuXG5cdFx0ZGVmYXVsdDoge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFVuc3VwcG9ydGVkIGFubm90YXRpb24gZXhwcmVzc2lvbjogJHtub2RlLnR5cGV9YCwgbm9kZS5zcGFuKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxBbm5vdGF0aW9uUHJvcGVydGllcyhhbm5vdGF0aW9uOiBBU1RBbm5vdGF0aW9uTm9kZSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuXHRjb25zdCBwcm9wZXJ0aWVzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG5cblx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZU5vZGVdIG9mIGFubm90YXRpb24ucHJvcGVydGllcykge1xuXHRcdHByb3BlcnRpZXNba2V5XSA9IGV2YWxBbm5vdGF0aW9uVmFsdWUodmFsdWVOb2RlKTtcblx0fVxuXG5cdHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsbEluc3RhbmNlTWV0aG9kKGluc3RhbmNlOiBJbnN0YW5jZSwgbWV0aG9kTm9kZTogQVNUTWV0aG9kTm9kZSwgYXJnczogYW55W10sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogYW55IHtcblx0Y29uc3QgbWV0aG9kRW52ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblxuXHRtZXRob2RFbnYuZGVmaW5lKEdSQU1NQVIuVEhJUywgaW5zdGFuY2UpO1xuXG5cdGlmIChpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlICYmIG1ldGhvZE5vZGUubmFtZSBpbiBpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlKSB7XG5cdFx0Y29uc3QgcmF3QXJncyA9IGFyZ3MubWFwKGZyb21MeXJhVmFsdWUpO1xuXHRcdGNvbnN0IHJlc3VsdCA9IGluc3RhbmNlLl9fbmF0aXZlSW5zdGFuY2VbbWV0aG9kTm9kZS5uYW1lXSguLi5yYXdBcmdzKTtcblxuXHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRyZXR1cm4gd3JhcE5hdGl2ZUluc3RhbmNlKHJlc3VsdCwgb2JqZWN0UmVnaXN0cnkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmFsUmV0dXJuKFxuXHRcdFx0W3JldHVyblZhbHVlKHJlc3VsdCldLFxuXHRcdFx0b2JqZWN0UmVnaXN0cnksXG5cdFx0XHRtZXRob2RFbnYsXG5cdFx0XHRldmVudFBpcGVsaW5lLFxuXHRcdFx0aW5zdGFuY2UsXG5cdFx0XHRtZXRob2ROb2RlLnJldHVyblR5cGVcblx0XHQpO1xuXHR9XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBtZXRob2ROb2RlLnBhcmFtZXRlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBwYXJhbWV0ZXI6IEFTVFBhcmFtZXRlck5vZGUgfCBudWxsID0gbWV0aG9kTm9kZS5wYXJhbWV0ZXJzW2ldIHx8IG51bGw7XG5cdFx0Y29uc3QgYXJndW1lbnQ6IGFueSA9IGFyZ3NbaV0gfHwgbnVsbDtcblxuXHRcdGlmICghcGFyYW1ldGVyKSB7XG5cdFx0XHR0aHJvd1J1bnRpbWVFcnJvcignTWV0aG9kIHBhcmFtZXRlciBpcyBudWxsLicpO1xuXHRcdH1cblxuXHRcdGxldCB2YWx1ZTtcblx0XHRpZiAoIWFyZ3VtZW50KSB7XG5cdFx0XHR2YWx1ZSA9IHBhcmFtZXRlci5kZWZhdWx0VmFsdWVcblx0XHRcdFx0PyBldmFsTm9kZShwYXJhbWV0ZXIuZGVmYXVsdFZhbHVlLCBvYmplY3RSZWdpc3RyeSwgbWV0aG9kRW52LCBldmVudFBpcGVsaW5lLCBpbnN0YW5jZSlcblx0XHRcdFx0OiBudWxsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YWx1ZSA9IGFyZ3NbaV07XG5cdFx0fVxuXG5cdFx0bWV0aG9kRW52LmRlZmluZShwYXJhbWV0ZXIubmFtZSwgdmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIGV2YWxSZXR1cm4obWV0aG9kTm9kZS5jaGlsZHJlbiwgb2JqZWN0UmVnaXN0cnksIG1ldGhvZEVudiwgZXZlbnRQaXBlbGluZSwgaW5zdGFuY2UsIG1ldGhvZE5vZGUucmV0dXJuVHlwZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvQm94SWZOZWVkZWQodmFsdWU6IGFueSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogSW5zdGFuY2Uge1xuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBJbnN0YW5jZSkge1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09IFRZUEVfRU5VTS5OVU1CRVIpIHtcblx0XHRyZXR1cm4gY3JlYXRlQm94ZWRJbnN0YW5jZShBdXRvYm94ZWRUeXBlcy5nZXRDbGFzc05hbWUoVFlQRV9FTlVNLk5VTUJFUiksIHZhbHVlLCBvYmplY3RSZWdpc3RyeSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSBUWVBFX0VOVU0uU1RSSU5HKSB7XG5cdFx0cmV0dXJuIGNyZWF0ZUJveGVkSW5zdGFuY2UoQXV0b2JveGVkVHlwZXMuZ2V0Q2xhc3NOYW1lKFRZUEVfRU5VTS5TVFJJTkcpLCB2YWx1ZSwgb2JqZWN0UmVnaXN0cnkpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gVFlQRV9FTlVNLkJPT0xFQU4pIHtcblx0XHRyZXR1cm4gY3JlYXRlQm94ZWRJbnN0YW5jZShBdXRvYm94ZWRUeXBlcy5nZXRDbGFzc05hbWUoVFlQRV9FTlVNLkJPT0xFQU4pLCB2YWx1ZSwgb2JqZWN0UmVnaXN0cnkpO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQm94ZWRJbnN0YW5jZShjbGFzc05hbWU6IHN0cmluZywgcHJpbWl0aXZlVmFsdWU6IGFueSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KTogSW5zdGFuY2Uge1xuXHRjb25zdCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uID0gb2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQoY2xhc3NOYW1lKTtcblx0Y29uc3QgaW5zdGFuY2U6IEluc3RhbmNlID0gY2xhc3NEZWYuY29uc3RydWN0RW1wdHlJbnN0YW5jZSgpO1xuXG5cdGluc3RhbmNlLl9fbmF0aXZlSW5zdGFuY2UgPSBuZXcgY2xhc3NEZWYubmF0aXZlSW5zdGFuY2UoZnJvbUx5cmFWYWx1ZShwcmltaXRpdmVWYWx1ZSkpO1xuXG5cdHJldHVybiBpbnN0YW5jZTtcbn1cbiIsCiAgICAiY29uc3QgTHlyYUV2ZW50cyA9IHtcblx0TFlSQV9JTlNUQU5DRV9ESVJUWV9TVEFURTogJ2x5cmE6aW5zdGFuY2VfZGlydHlfc3RhdGUnLFxuXHRMWVJBX0lOU1RBTkNFX0NMRUFOX1NUQVRFOiAnbHlyYTppbnN0YW5jZV9jbGVhbl9zdGF0ZSdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEx5cmFFdmVudHM7XG4iLAogICAgImltcG9ydCB7R1JBTU1BUn0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcbmltcG9ydCB7XG5cdEFTVENsYXNzTm9kZSxcblx0QVNURmllbGROb2RlLFxuXHRBU1RJbnRlcmZhY2VOb2RlLFxuXHRBU1RNZXRob2ROb2RlLFxuXHRBU1ROZXdOb2RlLFxuXHRBU1ROb2RlLFxuXHRBU1RQYXJhbWV0ZXJOb2RlLFxuXHRBU1RUeXBlTm9kZVxufSBmcm9tIFwiLi4vYXN0XCI7XG5pbXBvcnQge3Rocm93UnVudGltZUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQgdHlwZSB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge2V2YWxFeHByZXNzaW9uLCBldmFsTWV0aG9kQXJndW1lbnRzLCBldmFsTm9kZX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfcnVudGltZVwiO1xuaW1wb3J0IHtjYXN0VmFsdWUsIGZyb21MeXJhVmFsdWUsIEx5cmFOYXRpdmVPYmplY3R9IGZyb20gXCIuL2ludGVycHJldGVyX2NvbnZlcnNpb25cIjtcbmltcG9ydCB0eXBlIHtFdmVudFBpcGVsaW5lfSBmcm9tIFwiLi4vZXZlbnQvcGlwZWxpbmVcIjtcbmltcG9ydCBMeXJhRXZlbnRzIGZyb20gXCIuLi9ldmVudC9ldmVudHNcIjtcblxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IHtcblx0cGFyZW50OiBFbnZpcm9ubWVudCB8IG51bGw7XG5cdHZhbHVlczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9O1xuXG5cdGNvbnN0cnVjdG9yKHBhcmVudDogRW52aXJvbm1lbnQgfCBudWxsID0gbnVsbCkge1xuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xuXHRcdHRoaXMudmFsdWVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0fVxuXG5cdGRlZmluZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLnZhbHVlc1tuYW1lXSA9IHZhbHVlO1xuXHR9XG5cblx0Z2V0KG5hbWU6IHN0cmluZyk6IGFueSB7XG5cdFx0aWYgKG5hbWUgaW4gdGhpcy52YWx1ZXMpIHtcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlc1tuYW1lXTtcblx0XHR9XG5cdFx0aWYgKHRoaXMucGFyZW50KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJlbnQuZ2V0KG5hbWUpO1xuXHRcdH1cblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5kZWZpbmVkIHZhcmlhYmxlICR7bmFtZX1gKTtcblx0fVxuXG5cdHNldChuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHRpZiAobmFtZSBpbiB0aGlzLnZhbHVlcykge1xuXHRcdFx0dGhpcy52YWx1ZXNbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKHRoaXMucGFyZW50KSB7XG5cdFx0XHR0aGlzLnBhcmVudC5zZXQobmFtZSwgdmFsdWUpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgVW5kZWZpbmVkIHZhcmlhYmxlICR7bmFtZX1gKTtcblx0fVxuXG5cdGhhcyhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXNbbmFtZV0gfHwgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmhhcyhuYW1lKSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEluc3RhbmNlIHtcblx0cHVibGljIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG5cdF9fY2xhc3NEZWY6IENsYXNzRGVmaW5pdGlvbjtcblx0X19maWVsZHNJbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuXHRfX2luc3RhbmNlRmllbGRzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH07XG5cdF9fc3RhdGljRmllbGRzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH07XG5cdF9fbmF0aXZlSW5zdGFuY2U6IGFueSB8IG51bGwgPSBudWxsO1xuXHRfX2lzRGlydHk6IGJvb2xlYW4gPSBmYWxzZVxuXG5cdGNvbnN0cnVjdG9yKGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24pIHtcblx0XHR0aGlzLl9fY2xhc3NEZWYgPSBjbGFzc0RlZjtcblx0XHR0aGlzLl9faW5zdGFuY2VGaWVsZHMgPSB7fTtcblx0XHR0aGlzLl9fc3RhdGljRmllbGRzID0ge307XG5cdFx0dGhpcy5fX25hdGl2ZUluc3RhbmNlID0gbnVsbDtcblxuXHRcdHRoaXMuaWQgPSBJbnN0YW5jZS5nZW5lcmF0ZUluc3RhbmNlVVVJRCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgZ2VuZXJhdGVJbnN0YW5jZVVVSUQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gc2VsZi5jcnlwdG8ucmFuZG9tVVVJRCgpO1xuXHR9XG5cblx0cHVibGljIG1hcmtEaXJ0eShldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogdm9pZCB7XG5cdFx0dGhpcy5fX2lzRGlydHkgPSB0cnVlO1xuXG5cdFx0ZXZlbnRQaXBlbGluZS5lbWl0KEx5cmFFdmVudHMuTFlSQV9JTlNUQU5DRV9ESVJUWV9TVEFURSwge2luc3RhbmNlOiB0aGlzfSk7XG5cdH1cblxuXHRwdWJsaWMgbWFya0NsZWFuKGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiB2b2lkIHtcblx0XHR0aGlzLl9faXNEaXJ0eSA9IGZhbHNlO1xuXG5cdFx0ZXZlbnRQaXBlbGluZS5lbWl0KEx5cmFFdmVudHMuTFlSQV9JTlNUQU5DRV9DTEVBTl9TVEFURSwge2luc3RhbmNlOiB0aGlzfSk7XG5cdH1cblxuXHRmaW5kZU1ldGhvZE5vZGUobmFtZTogc3RyaW5nKTogQVNUTWV0aG9kTm9kZSB7XG5cdFx0cmV0dXJuIHRoaXMuX19jbGFzc0RlZi5maW5kTWV0aG9kTm9kZShuYW1lKTtcblx0fVxuXG5cdGhhc1B1YmxpY1Byb3BlcnR5KG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fX2NsYXNzRGVmLmZpbmRJbnN0YW5jZUZpZWxkRGVmaW5pdGlvbihuYW1lKS5tb2RpZmllcnMucHVibGljO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRzZXRQdWJsaWNQcm9wZXJ0eShuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnksIGV4cGVjdGVkOiBhbnkgPSBudWxsKTogdm9pZCB7XG5cdFx0bGV0IGZpZWxkRGVmaW5pdGlvbjogQ2xhc3NGaWVsZERlZmluaXRpb24gPSB0aGlzLl9fY2xhc3NEZWYuZmluZEluc3RhbmNlRmllbGREZWZpbml0aW9uKG5hbWUpO1xuXG5cdFx0aWYgKGZpZWxkRGVmaW5pdGlvbi5tb2RpZmllcnMucHVibGljKSB7XG5cdFx0XHR0aGlzLl9faW5zdGFuY2VGaWVsZHNbbmFtZV0gPSBjYXN0VmFsdWUodmFsdWUsIGV4cGVjdGVkKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aHJvd1J1bnRpbWVFcnJvcihgRmllbGQgJHtuYW1lfSBpcyBub3QgcHVibGljLmApO1xuXHR9XG5cblx0aW5pdGlhbGl6ZUluc3RhbmNlRmllbGRzKG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogdm9pZCB7XG5cdFx0dGhpcy5fX2NsYXNzRGVmLmluaXRpYWxpemVJbnN0YW5jZUZpZWxkcyh0aGlzLCBvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmUpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBNb2RpZmllcnMge1xuXHRvcGVuOiBib29sZWFuID0gZmFsc2U7XG5cdHB1YmxpYzogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlOiBib29sZWFuID0gZmFsc2U7XG5cdHN0YXRpYzogYm9vbGVhbiA9IGZhbHNlO1xuXHRyZWFkb25seTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3t9fSBhdHRyaWJ1dGVzXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihhdHRyaWJ1dGVzOiB7IFtpbmRleDogc3RyaW5nXTogYm9vbGVhbiB9ID0ge30pIHtcblx0XHRmb3IgKGxldCBhdHRyaWJ1dGUgb2YgT2JqZWN0LmtleXMoYXR0cmlidXRlcykpIHtcblx0XHRcdGlmICh0aGlzLmhhc093blByb3BlcnR5KGF0dHJpYnV0ZSkpIHtcblx0XHRcdFx0Y29uc3QgbW9kaWZpZXJzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB0aGlzO1xuXHRcdFx0XHRtb2RpZmllcnNbYXR0cmlidXRlXSA9IGF0dHJpYnV0ZXNbYXR0cmlidXRlXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1cGVyQ2xhc3Mge1xuXHR0eXBlOiBzdHJpbmc7XG5cdG5hbWU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcih0eXBlOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgRXhlY3V0aW9uU3RvcCBleHRlbmRzIEVycm9yIHtcblx0Y29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IHJldHVyblZhbHVlOiBSZXR1cm5WYWx1ZSxcblx0ICAgICAgICAgICAgcHVibGljIHJlYWRvbmx5IHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbCkge1xuXHRcdHN1cGVyKCdFeGVjdXRpb24gc3RvcHBlbmQgd2l0aCByZXR1cm4uJyk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFJldHVyblZhbHVlIHtcblx0dmFsdWU6IGFueTtcblxuXHRjb25zdHJ1Y3Rvcih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGFzc0ZpZWxkRGVmaW5pdGlvbiB7XG5cdG5hbWU6IHN0cmluZztcblx0dHlwZTogc3RyaW5nIHwgbnVsbDtcblx0bW9kaWZpZXJzOiBNb2RpZmllcnM7XG5cdGluaXRpYWxpemVyOiBBU1ROb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlOiBzdHJpbmcgfCBudWxsLCBtb2RpZmllcnM6IE1vZGlmaWVycywgaW5pdGlhbGl6ZXI6IEFTVE5vZGUgfCBudWxsID0gbnVsbCkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHR0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcblx0XHR0aGlzLmluaXRpYWxpemVyID0gaW5pdGlhbGl6ZXI7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIENsYXNzTWV0aG9kRGVmaW5pdGlvbiB7XG5cdG5hbWU6IHN0cmluZztcblx0cGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdO1xuXHRyZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGw7XG5cdG1vZGlmaWVyczogTW9kaWZpZXJzO1xuXHRjaGlsZHJlbjogQVNUTm9kZVtdO1xuXHRpc0NvbnN0cnVjdG9yOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgcGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdLCByZXR1cm5UeXBlOiBBU1RUeXBlTm9kZSB8IG51bGwsIG1vZGlmaWVyczogTW9kaWZpZXJzLCBjaGlsZHJlbjogQVNUTm9kZVtdKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuXHRcdHRoaXMucmV0dXJuVHlwZSA9IHJldHVyblR5cGU7XG5cdFx0dGhpcy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXHRcdHRoaXMuaXNDb25zdHJ1Y3RvciA9IG5hbWUgPT09IEdSQU1NQVIuQ09OU1RSVUNUT1I7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIENsYXNzRGVmaW5pdGlvbiB7XG5cdG5vZGU6IEFTVENsYXNzTm9kZTtcblx0bmFtZTogc3RyaW5nO1xuXHRzdXBlckNsYXNzOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0aW5zdGFuY2VGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW107XG5cdGluc3RhbmNlTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9O1xuXHRzdGF0aWNGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW107XG5cdHN0YXRpY01ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfTtcblx0Y29uc3RydWN0b3JNZXRob2Q6IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB8IG51bGwgPSBudWxsO1xuXHRuYXRpdmVJbnN0YW5jZTogYW55ID0gbnVsbDtcblx0aXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0Y2xhc3NOb2RlOiBBU1RDbGFzc05vZGUsXG5cdFx0c3VwZXJDbGFzczogc3RyaW5nIHwgbnVsbCxcblx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0aW5zdGFuY2VGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW10sXG5cdFx0aW5zdGFuY2VNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH0sXG5cdFx0c3RhdGljRmllbGRzOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbltdLFxuXHRcdHN0YXRpY01ldGhvZHM6IHsgW2luZGV4OiBzdHJpbmddOiBDbGFzc01ldGhvZERlZmluaXRpb24gfSxcblx0XHRjb25zdHJ1Y3Rvck1ldGhvZDogQ2xhc3NNZXRob2REZWZpbml0aW9uIHwgbnVsbCA9IG51bGxcblx0KSB7XG5cdFx0dGhpcy5ub2RlID0gY2xhc3NOb2RlO1xuXHRcdHRoaXMuc3VwZXJDbGFzcyA9IHN1cGVyQ2xhc3M7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmluc3RhbmNlRmllbGRzID0gaW5zdGFuY2VGaWVsZHM7XG5cdFx0dGhpcy5pbnN0YW5jZU1ldGhvZHMgPSBpbnN0YW5jZU1ldGhvZHM7XG5cdFx0dGhpcy5zdGF0aWNGaWVsZHMgPSBzdGF0aWNGaWVsZHM7XG5cdFx0dGhpcy5zdGF0aWNNZXRob2RzID0gc3RhdGljTWV0aG9kcztcblx0XHR0aGlzLmNvbnN0cnVjdG9yTWV0aG9kID0gY29uc3RydWN0b3JNZXRob2Q7XG5cdFx0dGhpcy5pc09wZW4gPSBjbGFzc05vZGUubW9kaWZpZXJzLm9wZW47XG5cdH1cblxuXHRzdGF0aWMgZnJvbUFTVChub2RlOiBBU1RDbGFzc05vZGUpOiBDbGFzc0RlZmluaXRpb24ge1xuXHRcdGNvbnN0IGluc3RhbmNlRmllbGRzOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbltdID0gW107XG5cdFx0Y29uc3QgaW5zdGFuY2VNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH0gPSB7fTtcblx0XHRjb25zdCBzdGF0aWNGaWVsZHM6IENsYXNzRmllbGREZWZpbml0aW9uW10gPSBbXTtcblx0XHRjb25zdCBzdGF0aWNNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH0gPSB7fTtcblx0XHRsZXQgY29uc3RydWN0b3JNZXRob2Q6IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB8IG51bGwgPSBudWxsO1xuXG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAoY2hpbGQgaW5zdGFuY2VvZiBBU1RGaWVsZE5vZGUpIHtcblx0XHRcdFx0Y29uc3QgZmllbGQgPSBuZXcgQ2xhc3NGaWVsZERlZmluaXRpb24oXG5cdFx0XHRcdFx0Y2hpbGQubmFtZSxcblx0XHRcdFx0XHRjaGlsZC5maWVsZFR5cGVcblx0XHRcdFx0XHRcdD8gY2hpbGQuZmllbGRUeXBlLm5hbWVcblx0XHRcdFx0XHRcdDogbnVsbCxcblx0XHRcdFx0XHRjaGlsZC5tb2RpZmllcnMsXG5cdFx0XHRcdFx0Y2hpbGQuaW5pdFxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdGlmIChmaWVsZC5tb2RpZmllcnMuc3RhdGljKSB7XG5cdFx0XHRcdFx0c3RhdGljRmllbGRzLnB1c2goZmllbGQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGluc3RhbmNlRmllbGRzLnB1c2goZmllbGQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGNoaWxkIGluc3RhbmNlb2YgQVNUTWV0aG9kTm9kZSkge1xuXHRcdFx0XHRjb25zdCBtZXRob2QgPSBuZXcgQ2xhc3NNZXRob2REZWZpbml0aW9uKFxuXHRcdFx0XHRcdGNoaWxkLm5hbWUsXG5cdFx0XHRcdFx0Y2hpbGQucGFyYW1ldGVycyxcblx0XHRcdFx0XHRjaGlsZC5yZXR1cm5UeXBlLFxuXHRcdFx0XHRcdGNoaWxkLm1vZGlmaWVycyxcblx0XHRcdFx0XHRjaGlsZC5jaGlsZHJlblxuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAobWV0aG9kLmlzQ29uc3RydWN0b3IpIHtcblx0XHRcdFx0XHRjb25zdHJ1Y3Rvck1ldGhvZCA9IG1ldGhvZDtcblx0XHRcdFx0fSBlbHNlIGlmIChtZXRob2QubW9kaWZpZXJzLnN0YXRpYykge1xuXHRcdFx0XHRcdHN0YXRpY01ldGhvZHNbbWV0aG9kLm5hbWVdID0gbWV0aG9kO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGluc3RhbmNlTWV0aG9kc1ttZXRob2QubmFtZV0gPSBtZXRob2Q7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93UnVudGltZUVycm9yKGBVbmhhbmRsZWQgbm9kZSAke2NoaWxkLnR5cGV9LmApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgQ2xhc3NEZWZpbml0aW9uKFxuXHRcdFx0bm9kZSxcblx0XHRcdG5vZGUuc3VwZXJDbGFzcz8ubmFtZSB8fCBudWxsLFxuXHRcdFx0bm9kZS5uYW1lLFxuXHRcdFx0aW5zdGFuY2VGaWVsZHMsXG5cdFx0XHRpbnN0YW5jZU1ldGhvZHMsXG5cdFx0XHRzdGF0aWNGaWVsZHMsXG5cdFx0XHRzdGF0aWNNZXRob2RzLFxuXHRcdFx0Y29uc3RydWN0b3JNZXRob2Rcblx0XHQpO1xuXHR9XG5cblx0ZmluZE1ldGhvZE5vZGUobmFtZTogc3RyaW5nKTogQVNUTWV0aG9kTm9kZSB7XG5cdFx0Y29uc3Qgbm9kZSA9IHRoaXMubm9kZVxuXHRcdCAgICAgICAgICAgICAgICAgLmNoaWxkcmVuXG5cdFx0ICAgICAgICAgICAgICAgICAuZmluZChub2RlID0+IG5vZGUubmFtZSA9PT0gbmFtZSk7XG5cblx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVE1ldGhvZE5vZGUpIHtcblx0XHRcdHJldHVybiBub2RlO1xuXHRcdH1cblxuXHRcdHRocm93UnVudGltZUVycm9yKGBNZXRob2QgJHtuYW1lfSBub3QgZm91bmQgaW4gY2xhc3MgJHt0aGlzLm5hbWV9LmApO1xuXHR9XG5cblx0ZmluZEluc3RhbmNlRmllbGREZWZpbml0aW9uKG5hbWU6IHN0cmluZyk6IENsYXNzRmllbGREZWZpbml0aW9uIHtcblx0XHRjb25zdCBmaWVsZERlZmluaXRpb246IENsYXNzRmllbGREZWZpbml0aW9uIHwgdW5kZWZpbmVkID0gdGhpcy5pbnN0YW5jZUZpZWxkc1xuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoKGZpZWxkOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbik6IGJvb2xlYW4gPT4gZmllbGQubmFtZSA9PT0gbmFtZSk7XG5cblx0XHRpZiAoZmllbGREZWZpbml0aW9uIGluc3RhbmNlb2YgQ2xhc3NGaWVsZERlZmluaXRpb24pIHtcblx0XHRcdHJldHVybiBmaWVsZERlZmluaXRpb247XG5cdFx0fVxuXG5cdFx0dGhyb3dSdW50aW1lRXJyb3IoYEZpZWxkICR7bmFtZX0gbm90IGZvdW5kIGluIGNsYXNzICR7dGhpcy5uYW1lfS5gKTtcblx0fVxuXG5cdGNvbnN0cnVjdEVtcHR5SW5zdGFuY2UoKTogSW5zdGFuY2Uge1xuXHRcdHJldHVybiBuZXcgSW5zdGFuY2UodGhpcyk7XG5cdH1cblxuXHRjb25zdHJ1Y3ROYXRpdmVJbnN0YW5jZShhcmdzOiBhbnlbXSA9IFtdKTogSW5zdGFuY2Uge1xuXHRcdGNvbnN0IGluc3RhbmNlOiBJbnN0YW5jZSA9IHRoaXMuY29uc3RydWN0RW1wdHlJbnN0YW5jZSgpO1xuXHRcdGluc3RhbmNlLl9fbmF0aXZlSW5zdGFuY2UgPSBuZXcgdGhpcy5uYXRpdmVJbnN0YW5jZSguLi5hcmdzKTtcblx0XHRyZXR1cm4gaW5zdGFuY2U7XG5cdH1cblxuXHRjb25zdHJ1Y3ROZXdJbnN0YW5jZVdpdGhvdXRBcmd1bWVudHMob2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiBJbnN0YW5jZSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0TmV3SW5zdGFuY2UoW10sIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG5cdH1cblxuXHRjb25zdHJ1Y3ROZXdJbnN0YW5jZShhcmdzOiBBU1ROb2RlW10sIG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKTogSW5zdGFuY2Uge1xuXHRcdGNvbnN0IG5ld05vZGUgPSBuZXcgQVNUTmV3Tm9kZShhcmdzLCBuZXcgQVNUVHlwZU5vZGUoQVNUVHlwZU5vZGUuS0lORF9TSU1QTEUsIHRoaXMubmFtZSkpO1xuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdEluc3RhbmNlQnlOZXdOb2RlKG5ld05vZGUsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSk7XG5cdH1cblxuXHRjb25zdHJ1Y3RJbnN0YW5jZUJ5TmV3Tm9kZShleHByOiBBU1ROZXdOb2RlLCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSk6IEluc3RhbmNlIHtcblx0XHRjb25zdCBpbnN0YW5jZTogSW5zdGFuY2UgPSB0aGlzLmNvbnN0cnVjdEVtcHR5SW5zdGFuY2UoKTtcblxuXHRcdG9iamVjdFJlZ2lzdHJ5Lmluc3RhbmNlcy5yZWdpc3RlcihpbnN0YW5jZSk7XG5cblx0XHRpbnN0YW5jZS5pbml0aWFsaXplSW5zdGFuY2VGaWVsZHMob2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKTtcblxuXHRcdGlmICghdGhpcy5jb25zdHJ1Y3Rvck1ldGhvZCkge1xuXHRcdFx0cmV0dXJuIGluc3RhbmNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNvbnN0cnVjdG9yOiBDbGFzc01ldGhvZERlZmluaXRpb24gPSB0aGlzLmNvbnN0cnVjdG9yTWV0aG9kO1xuXHRcdGNvbnN0IGNvbnN0cnVjdG9yRW52ID0gbmV3IEVudmlyb25tZW50KGVudmlyb25tZW50KTtcblxuXHRcdGNvbnN0IGNvbnN0cnVjdG9yQXJncyA9IGV2YWxNZXRob2RBcmd1bWVudHMoXG5cdFx0XHRleHByLFxuXHRcdFx0Y29uc3RydWN0b3IucGFyYW1ldGVycyxcblx0XHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0ZW52aXJvbm1lbnQsXG5cdFx0XHRldmVudFBpcGVsaW5lLFxuXHRcdFx0aW5zdGFuY2Vcblx0XHQpO1xuXG5cdFx0Y29uc3RydWN0b3JFbnYuZGVmaW5lKEdSQU1NQVIuVEhJUywgaW5zdGFuY2UpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb25zdHJ1Y3RvckFyZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHBhcmFtZXRlcjogQVNUUGFyYW1ldGVyTm9kZSB8IHVuZGVmaW5lZCA9IGNvbnN0cnVjdG9yLnBhcmFtZXRlcnNbaV07XG5cdFx0XHRpZiAocGFyYW1ldGVyKSB7XG5cdFx0XHRcdGNvbnN0cnVjdG9yRW52LmRlZmluZShwYXJhbWV0ZXIubmFtZSwgY29uc3RydWN0b3JBcmdzW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIGNvbnN0cnVjdG9yLmNoaWxkcmVuKSB7XG5cdFx0XHRldmFsTm9kZShjaGlsZCwgb2JqZWN0UmVnaXN0cnksIGNvbnN0cnVjdG9yRW52LCBldmVudFBpcGVsaW5lLCBpbnN0YW5jZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGluc3RhbmNlO1xuXHR9XG5cblx0Y29uc3RydWN0TmF0aXZlSW5zdGFuY2VCeU5ld05vZGUoZXhwcjogQVNUTmV3Tm9kZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiBJbnN0YW5jZSB7XG5cdFx0Y29uc3QgaW5zdGFuY2U6IEluc3RhbmNlID0gdGhpcy5jb25zdHJ1Y3RFbXB0eUluc3RhbmNlKCk7XG5cblx0XHRvYmplY3RSZWdpc3RyeS5pbnN0YW5jZXMucmVnaXN0ZXIoaW5zdGFuY2UpO1xuXG5cdFx0Y29uc3QgY29uc3RydWN0b3I6IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB8IG51bGwgPSB0aGlzLmNvbnN0cnVjdG9yTWV0aG9kO1xuXHRcdGNvbnN0IGNvbnN0cnVjdG9yRW52OiBFbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudChlbnZpcm9ubWVudCk7XG5cblx0XHRjb25zdCBjb25zdHJ1Y3RvckFyZ3M6IGFueVtdID0gZXZhbE1ldGhvZEFyZ3VtZW50cyhcblx0XHRcdGV4cHIsXG5cdFx0XHRjb25zdHJ1Y3RvclxuXHRcdFx0XHQ/IGNvbnN0cnVjdG9yLnBhcmFtZXRlcnNcblx0XHRcdFx0OiBbXSxcblx0XHRcdG9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0ZW52aXJvbm1lbnQsXG5cdFx0XHRldmVudFBpcGVsaW5lLFxuXHRcdFx0aW5zdGFuY2Vcblx0XHQpO1xuXG5cdFx0Y29uc3RydWN0b3JFbnYuZGVmaW5lKEdSQU1NQVIuVEhJUywgaW5zdGFuY2UpO1xuXG5cdFx0aWYgKHRoaXMubmF0aXZlSW5zdGFuY2UgPT09IG51bGwpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKCdDbGFzcyBoYXMgbm8gbmF0aXZlIGluc3RhbmNlJyk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbmF0aXZlSW5zdGFuY2UgPSBuZXcgdGhpcy5uYXRpdmVJbnN0YW5jZSguLi5jb25zdHJ1Y3RvckFyZ3MubWFwKGZyb21MeXJhVmFsdWUpKTtcblx0XHRpZiAobmF0aXZlSW5zdGFuY2UgaW5zdGFuY2VvZiBMeXJhTmF0aXZlT2JqZWN0KSB7XG5cdFx0XHRpbnN0YW5jZS5fX25hdGl2ZUluc3RhbmNlID0gbmF0aXZlSW5zdGFuY2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGluc3RhbmNlO1xuXHR9XG5cblx0aW5pdGlhbGl6ZUluc3RhbmNlRmllbGRzKGluc3RhbmNlOiBJbnN0YW5jZSwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUpOiB2b2lkIHtcblx0XHRpZiAoaW5zdGFuY2UuX19maWVsZHNJbml0aWFsaXplZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCByYXdWYWx1ZTtcblx0XHRmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMuaW5zdGFuY2VGaWVsZHMpIHtcblx0XHRcdHJhd1ZhbHVlID0gZmllbGQuaW5pdGlhbGl6ZXJcblx0XHRcdFx0PyBldmFsRXhwcmVzc2lvbihmaWVsZC5pbml0aWFsaXplciwgb2JqZWN0UmVnaXN0cnksIGVudmlyb25tZW50LCBldmVudFBpcGVsaW5lKVxuXHRcdFx0XHQ6IG51bGw7XG5cblx0XHRcdGluc3RhbmNlLl9faW5zdGFuY2VGaWVsZHNbZmllbGQubmFtZV0gPSBjYXN0VmFsdWUocmF3VmFsdWUsIGZpZWxkLnR5cGUpO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMuc3RhdGljRmllbGRzKSB7XG5cdFx0XHRyYXdWYWx1ZSA9IGZpZWxkLmluaXRpYWxpemVyXG5cdFx0XHRcdD8gZXZhbEV4cHJlc3Npb24oZmllbGQuaW5pdGlhbGl6ZXIsIG9iamVjdFJlZ2lzdHJ5LCBlbnZpcm9ubWVudCwgZXZlbnRQaXBlbGluZSlcblx0XHRcdFx0OiBudWxsO1xuXG5cdFx0XHRpbnN0YW5jZS5fX3N0YXRpY0ZpZWxkc1tmaWVsZC5uYW1lXSA9IGNhc3RWYWx1ZShyYXdWYWx1ZSwgZmllbGQudHlwZSk7XG5cdFx0fVxuXG5cdFx0aW5zdGFuY2UuX19maWVsZHNJbml0aWFsaXplZCA9IHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEludGVyZmFjZURlZmluaXRpb24ge1xuXHRub2RlOiBBU1RJbnRlcmZhY2VOb2RlO1xuXHRuYW1lOiBzdHJpbmc7XG5cdHN0YXRpY0ZpZWxkczogQ2xhc3NGaWVsZERlZmluaXRpb25bXTtcblx0aW5zdGFuY2VNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH07XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0aW50ZXJmYWNlTm9kZTogQVNUSW50ZXJmYWNlTm9kZSxcblx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0c3RhdGljRmllbGRzOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbltdLFxuXHRcdGluc3RhbmNlTWV0aG9kczogeyBbaW5kZXg6IHN0cmluZ106IENsYXNzTWV0aG9kRGVmaW5pdGlvbiB9LFxuXHQpIHtcblx0XHR0aGlzLm5vZGUgPSBpbnRlcmZhY2VOb2RlO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5zdGF0aWNGaWVsZHMgPSBzdGF0aWNGaWVsZHM7XG5cdFx0dGhpcy5pbnN0YW5jZU1ldGhvZHMgPSBpbnN0YW5jZU1ldGhvZHM7XG5cdH1cblxuXHRzdGF0aWMgZnJvbUFTVChub2RlOiBBU1RJbnRlcmZhY2VOb2RlKTogSW50ZXJmYWNlRGVmaW5pdGlvbiB7XG5cdFx0Y29uc3Qgc3RhdGljRmllbGRzOiBDbGFzc0ZpZWxkRGVmaW5pdGlvbltdID0gW107XG5cdFx0Y29uc3QgaW5zdGFuY2VNZXRob2RzOiB7IFtpbmRleDogc3RyaW5nXTogQ2xhc3NNZXRob2REZWZpbml0aW9uIH0gPSB7fTtcblxuXHRcdGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuXHRcdFx0aWYgKGNoaWxkIGluc3RhbmNlb2YgQVNURmllbGROb2RlKSB7XG5cdFx0XHRcdGNvbnN0IGZpZWxkID0gbmV3IENsYXNzRmllbGREZWZpbml0aW9uKFxuXHRcdFx0XHRcdGNoaWxkLm5hbWUsXG5cdFx0XHRcdFx0Y2hpbGQuZmllbGRUeXBlXG5cdFx0XHRcdFx0XHQ/IGNoaWxkLmZpZWxkVHlwZS5uYW1lXG5cdFx0XHRcdFx0XHQ6IG51bGwsXG5cdFx0XHRcdFx0Y2hpbGQubW9kaWZpZXJzLFxuXHRcdFx0XHRcdGNoaWxkLmluaXQgPz8gbnVsbFxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdHN0YXRpY0ZpZWxkcy5wdXNoKGZpZWxkKTtcblx0XHRcdH0gZWxzZSBpZiAoY2hpbGQgaW5zdGFuY2VvZiBBU1RNZXRob2ROb2RlKSB7XG5cdFx0XHRcdGNvbnN0IG1ldGhvZCA9IG5ldyBDbGFzc01ldGhvZERlZmluaXRpb24oXG5cdFx0XHRcdFx0Y2hpbGQubmFtZSxcblx0XHRcdFx0XHRjaGlsZC5wYXJhbWV0ZXJzLFxuXHRcdFx0XHRcdGNoaWxkLnJldHVyblR5cGUsXG5cdFx0XHRcdFx0Y2hpbGQubW9kaWZpZXJzLFxuXHRcdFx0XHRcdGNoaWxkLmNoaWxkcmVuXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0aW5zdGFuY2VNZXRob2RzW21ldGhvZC5uYW1lXSA9IG1ldGhvZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93UnVudGltZUVycm9yKGBVbmhhbmRsZWQgbm9kZSAke2NoaWxkLnR5cGV9LmApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgSW50ZXJmYWNlRGVmaW5pdGlvbihcblx0XHRcdG5vZGUsXG5cdFx0XHRub2RlLm5hbWUsXG5cdFx0XHRzdGF0aWNGaWVsZHMsXG5cdFx0XHRpbnN0YW5jZU1ldGhvZHNcblx0XHQpO1xuXHR9XG59XG5cbiIsCiAgICAiaW1wb3J0IHtQYXJzZXJ9IGZyb20gXCIuL3BhcnNlclwiO1xuaW1wb3J0IHtHUkFNTUFSLCBUb2tlbiwgVG9rZW5UeXBlLCBUWVBFX0VOVU19IGZyb20gXCIuLi9ncmFtbWFyXCI7XG5pbXBvcnQge01vZGlmaWVycywgU3VwZXJDbGFzc30gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7XG5cdEFTVEFubm90YXRpb25Ob2RlLFxuXHRBU1RBcnJheU5vZGUsXG5cdEFTVEFzc2lnbm1lbnROb2RlLFxuXHRBU1RCaW5hcnlOb2RlLFxuXHRBU1RDYWxsTm9kZSxcblx0QVNUQ2xhc3NOb2RlLFxuXHRBU1RFbHNlTm9kZSxcblx0QVNURXhwcmVzc2lvbk5vZGUsXG5cdEFTVEZpZWxkTm9kZSxcblx0QVNURm9yZWFjaE5vZGUsXG5cdEFTVElmTm9kZSxcblx0QVNUSW1wb3J0Tm9kZSxcblx0QVNUSW5kZXhOb2RlLFxuXHRBU1RJbnRlcmZhY2VOb2RlLFxuXHRBU1RMYW1iZGFOb2RlLFxuXHRBU1RNYXRjaENhc2VOb2RlLFxuXHRBU1RNYXRjaE5vZGUsXG5cdEFTVE1lbWJlck5vZGUsXG5cdEFTVE1ldGhvZE5vZGUsXG5cdEFTVE5ld05vZGUsXG5cdEFTVE5vZGUsXG5cdEFTVE5vZGVUeXBlLFxuXHRBU1RPcGVyYXRvck5vZGUsXG5cdEFTVFBhcmFtZXRlck5vZGUsXG5cdEFTVFJldHVybk5vZGUsXG5cdEFTVFRoZW5Ob2RlLFxuXHRBU1RUeXBlTm9kZSxcblx0QVNUVW5hcnlOb2RlLFxuXHRBU1RWYXJpYWJsZU5vZGUsXG5cdEFTVFZEb21FeHByZXNzaW9uTm9kZSxcblx0QVNUVkRvbU5vZGUsXG5cdEFTVFZEb21UZXh0Tm9kZVxufSBmcm9tIFwiLi4vYXN0XCI7XG5pbXBvcnQge3Rocm93UGFyc2VyRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcbmltcG9ydCB7c3BhbkZyb219IGZyb20gXCIuL3BhcnNlcl9zb3VyY2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1peGVkVHlwZSgpOiBBU1RUeXBlTm9kZSB7XG5cdHJldHVybiBuZXcgQVNUVHlwZU5vZGUoQVNUVHlwZU5vZGUuS0lORF9TSU1QTEUsIFRZUEVfRU5VTS5NSVhFRCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVR5cGUocGFyc2VyOiBQYXJzZXIpOiBBU1RUeXBlTm9kZSB7XG5cdGxldCB0eXBlO1xuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pIHtcblx0XHR0eXBlID0gcGFyc2VMYW1iZGFUeXBlKHBhcnNlcik7XG5cdH0gZWxzZSB7XG5cdFx0dHlwZSA9IHBhcnNlU2ltcGxlT3JHZW5lcmljVHlwZShwYXJzZXIpO1xuXHR9XG5cblx0aWYgKHBhcnNlci5jb25zdW1lSWZPcGVyYXRvcihHUkFNTUFSLlFVRVNUSU9OX01BUkspKSB7XG5cdFx0dHlwZS5udWxsYWJsZSA9IHRydWU7XG5cdH1cblxuXHRyZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVHlwZVBhcmFtZXRlcnMocGFyc2VyOiBQYXJzZXIpOiBzdHJpbmdbXSB7XG5cdGNvbnN0IHBhcmFtZXRlcnMgPSBbXTtcblxuXHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5MRVNTX1RIQU4pO1xuXG5cdGRvIHtcblx0XHRjb25zdCBuYW1lID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKS52YWx1ZTtcblx0XHRwYXJhbWV0ZXJzLnB1c2gobmFtZSk7XG5cblx0XHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5DT01NQSkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHBhcnNlci5uZXh0KCk7XG5cdH0gd2hpbGUgKHRydWUpO1xuXG5cdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkdSRUFURVJfVEhBTik7XG5cblx0cmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVNpbXBsZU9yR2VuZXJpY1R5cGUocGFyc2VyOiBQYXJzZXIpOiBBU1RUeXBlTm9kZSB7XG5cdGNvbnN0IG5hbWVUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUVHlwZU5vZGUoQVNUVHlwZU5vZGUuS0lORF9TSU1QTEUsIG5hbWVUb2tlbi52YWx1ZSk7XG5cblx0aWYgKHBhcnNlci5jb25zdW1lSWZPcGVyYXRvcihHUkFNTUFSLkxFU1NfVEhBTikpIHtcblxuXHRcdG5vZGUua2luZCA9IEFTVFR5cGVOb2RlLktJTkRfR0VORVJJQztcblxuXHRcdGRvIHtcblx0XHRcdG5vZGUudHlwZUFyZ3VtZW50cy5wdXNoKHBhcnNlVHlwZShwYXJzZXIpKTtcblx0XHR9IHdoaWxlIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpO1xuXG5cdFx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuR1JFQVRFUl9USEFOKTtcblx0fVxuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VMYW1iZGFUeXBlKHBhcnNlcjogUGFyc2VyKTogQVNUVHlwZU5vZGUge1xuXHRjb25zdCBub2RlID0gbmV3IEFTVFR5cGVOb2RlKEFTVFR5cGVOb2RlLktJTkRfTEFNQkRBLCAnbGFtYmRhJyk7XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTik7XG5cblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpIHtcblx0XHRkbyB7XG5cdFx0XHRub2RlLnBhcmFtZXRlclR5cGVzLnB1c2gocGFyc2VUeXBlKHBhcnNlcikpO1xuXHRcdH0gd2hpbGUgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSk7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkFSUk9XKTtcblxuXHRub2RlLnJldHVyblR5cGUgPSBwYXJzZVR5cGUocGFyc2VyKTtcblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUHJvZ3JhbShwYXJzZXI6IFBhcnNlcik6IEFTVE5vZGUge1xuXHRjb25zdCBjaGlsZHJlbjogQVNUTm9kZVtdID0gW107XG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnR5cGUgIT09IFRva2VuVHlwZS5FT0YpIHtcblx0XHRpZiAocGFyc2VyLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuQ09NTUVOVCkge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3Qgbm9kZTogQVNUTm9kZSB8IG51bGwgPSBwYXJzZVN0YXRlbWVudChwYXJzZXIpO1xuXHRcdFx0aWYgKG5vZGUpIHtcblx0XHRcdFx0Y2hpbGRyZW4ucHVzaChub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIG5ldyBBU1ROb2RlKEFTVE5vZGVUeXBlLlBST0dSQU1NLCBjaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVN0YXRlbWVudChwYXJzZXI6IFBhcnNlcik6IEFTVE5vZGUgfCBudWxsIHtcblx0aWYgKHBhcnNlci5jb25zdW1lSWZDb21tZW50KCkpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHN3aXRjaCAocGFyc2VyLnBlZWsoKS52YWx1ZSkge1xuXHRcdGNhc2UgR1JBTU1BUi5JTVBPUlQ6IHtcblx0XHRcdHJldHVybiBwYXJzZUltcG9ydChwYXJzZXIpO1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuT1BFTjpcblx0XHRjYXNlIEdSQU1NQVIuQ0xBU1M6IHtcblx0XHRcdHJldHVybiBwYXJzZUNsYXNzRGVjbGFyYXRpb24ocGFyc2VyKTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLklOVEVSRkFDRToge1xuXHRcdFx0cmV0dXJuIHBhcnNlSW50ZXJmYWNlRGVjbGFyYXRpb24ocGFyc2VyKTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLlJFVFVSTjoge1xuXHRcdFx0cmV0dXJuIHBhcnNlUmV0dXJuU3RhdGVtZW50KHBhcnNlcik7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5MRVQ6IHtcblx0XHRcdHJldHVybiBwYXJzZVZhcmlhYmxlRGVjbGFyYXRpb24ocGFyc2VyKTtcblx0XHR9XG5cdFx0Y2FzZSBHUkFNTUFSLklGOiB7XG5cdFx0XHRyZXR1cm4gcGFyc2VJZkRlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5NQVRDSDoge1xuXHRcdFx0cmV0dXJuIHBhcnNlTWF0Y2hEZWNsYXJhdGlvbihwYXJzZXIpO1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuRk9SRUFDSDoge1xuXHRcdFx0cmV0dXJuIHBhcnNlRm9yZWFjaERlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0fVxuXHRcdGRlZmF1bHQ6IHtcblx0XHRcdHJldHVybiBwYXJzZUV4cHJlc3Npb25TdGF0ZW1lbnQocGFyc2VyKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmV0dXJuU3RhdGVtZW50KHBhcnNlcjogUGFyc2VyKTogQVNUUmV0dXJuTm9kZSB7XG5cdHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuUkVUVVJOKTtcblxuXHRsZXQgYXJndW1lbnQgPSBudWxsO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5TRU1JQ09MT04pIHtcblx0XHRhcmd1bWVudCA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuU0VNSUNPTE9OKTtcblxuXHRyZXR1cm4gbmV3IEFTVFJldHVybk5vZGUoYXJndW1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJbXBvcnQocGFyc2VyOiBQYXJzZXIpOiBBU1RJbXBvcnROb2RlIHtcblx0cGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5JTVBPUlQpO1xuXG5cdGxldCBuYW1lcyA9IFtdO1xuXHRsZXQgZnJvbSA9IG51bGw7XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkJSQUNFX09QRU4pIHtcblx0XHRuYW1lcyA9IHBhcnNlSW1wb3J0TGlzdChwYXJzZXIpO1xuXHRcdHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuRlJPTSk7XG5cdFx0ZnJvbSA9IHBhcnNlci5leHBlY3RTdHJpbmcoKS52YWx1ZTtcblx0fSBlbHNlIHtcblx0XHRuYW1lcy5wdXNoKHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCkudmFsdWUpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuU0VNSUNPTE9OKTtcblxuXHRyZXR1cm4gbmV3IEFTVEltcG9ydE5vZGUobmFtZXMsIGZyb20pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJbXBvcnRMaXN0KHBhcnNlcjogUGFyc2VyKTogc3RyaW5nW10ge1xuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9PUEVOKTtcblxuXHRjb25zdCBuYW1lczogc3RyaW5nW10gPSBbXTtcblxuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdGNvbnN0IG5hbWVUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cblx0XHRuYW1lcy5wdXNoKG5hbWVUb2tlbi52YWx1ZSk7XG5cblx0XHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09NTUEpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRicmVhaztcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX0NMT1NFKTtcblxuXHRyZXR1cm4gbmFtZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNsYXNzRGVjbGFyYXRpb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RDbGFzc05vZGUge1xuXHRjb25zdCBhbm5vdGF0aW9ucyA9IHBhcnNlQW5ub3RhdGlvbnMocGFyc2VyKTtcblx0Y29uc3QgbW9kaWZpZXJzID0gcGFyc2VNb2RpZmllcnMocGFyc2VyLCBbR1JBTU1BUi5PUEVOXSk7XG5cblx0Y29uc3QgY2xhc3NUb2tlbiA9IHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuQ0xBU1MpO1xuXHRjb25zdCBuYW1lVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXG5cdGxldCB0eXBlUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuTEVTU19USEFOKSB7XG5cdFx0dHlwZVBhcmFtZXRlcnMgPSBwYXJzZVR5cGVQYXJhbWV0ZXJzKHBhcnNlcik7XG5cdH1cblxuXHRsZXQgc3VwZXJDbGFzcyA9IG51bGw7XG5cdGlmIChwYXJzZXIuY29uc3VtZUlmS2V5d29yZChHUkFNTUFSLkVYVEVORFMpKSB7XG5cdFx0c3VwZXJDbGFzcyA9IG5ldyBTdXBlckNsYXNzKFxuXHRcdFx0QVNUTm9kZVR5cGUuSURFTlRJRklFUixcblx0XHRcdHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCkudmFsdWVcblx0XHQpO1xuXHR9XG5cblx0bGV0IGltcGxlbWVudHNJbnRlcmZhY2VzID0gW107XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLklNUExFTUVOVFMpIHtcblx0XHRwYXJzZXIubmV4dCgpO1xuXG5cdFx0ZG8ge1xuXHRcdFx0Y29uc3QgaW50ZXJmYWNlVHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHRcdFx0aW1wbGVtZW50c0ludGVyZmFjZXMucHVzaChpbnRlcmZhY2VUeXBlKTtcblx0XHR9IHdoaWxlIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfT1BFTik7XG5cblx0Y29uc3QgY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdO1xuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5CUkFDRV9DTE9TRSkge1xuXHRcdGlmIChwYXJzZXIucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5DT01NRU5UKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbWVtYmVyOiBBU1ROb2RlIHwgbnVsbCA9IHBhcnNlQ2xhc3NNZW1iZXIocGFyc2VyKTtcblx0XHRpZiAobWVtYmVyID09PSBudWxsKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y2hpbGRyZW4ucHVzaChtZW1iZXIpO1xuXHR9XG5cblx0Y29uc3QgYnJhY2VDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfQ0xPU0UpO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUQ2xhc3NOb2RlKFxuXHRcdG5hbWVUb2tlbi52YWx1ZSxcblx0XHRhbm5vdGF0aW9ucyxcblx0XHRtb2RpZmllcnMsXG5cdFx0dHlwZVBhcmFtZXRlcnMsXG5cdFx0aW1wbGVtZW50c0ludGVyZmFjZXMsXG5cdFx0c3VwZXJDbGFzcyxcblx0XHRjaGlsZHJlblxuXHQpO1xuXG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKGNsYXNzVG9rZW4sIGJyYWNlQ2xvc2VUb2tlbik7XG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJbnRlcmZhY2VEZWNsYXJhdGlvbihwYXJzZXI6IFBhcnNlcik6IEFTVEludGVyZmFjZU5vZGUge1xuXHRjb25zdCBhbm5vdGF0aW9ucyA9IHBhcnNlQW5ub3RhdGlvbnMocGFyc2VyKTtcblx0Y29uc3QgbW9kaWZpZXJzID0gcGFyc2VNb2RpZmllcnMocGFyc2VyLCBbXSk7IC8vIGludGVyZmFjZXMgc2luZCBpbXBsaXppdCBwdWJsaWNcblxuXHRjb25zdCBpbnRlcmZhY2VUb2tlbiA9IHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuSU5URVJGQUNFKTtcblx0Y29uc3QgbmFtZVRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblxuXHRsZXQgdHlwZVBhcmFtZXRlcnM6IHN0cmluZ1tdID0gW107XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkxFU1NfVEhBTikge1xuXHRcdHR5cGVQYXJhbWV0ZXJzID0gcGFyc2VUeXBlUGFyYW1ldGVycyhwYXJzZXIpO1xuXHR9XG5cblx0bGV0IGV4dGVuZHNJbnRlcmZhY2VzID0gW107XG5cdGlmIChwYXJzZXIuY29uc3VtZUlmS2V5d29yZChHUkFNTUFSLkVYVEVORFMpKSB7XG5cdFx0ZG8ge1xuXHRcdFx0ZXh0ZW5kc0ludGVyZmFjZXMucHVzaChwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpLnZhbHVlKTtcblx0XHR9IHdoaWxlIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfT1BFTik7XG5cblx0Y29uc3QgY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdO1xuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5CUkFDRV9DTE9TRSkge1xuXHRcdGlmIChwYXJzZXIuY29uc3VtZUlmQ29tbWVudCgpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBtZW1iZXIgPSBwYXJzZUNsYXNzTWVtYmVyKHBhcnNlcik7XG5cdFx0aWYgKG1lbWJlciA9PT0gbnVsbCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKG1lbWJlciBpbnN0YW5jZW9mIEFTVEZpZWxkTm9kZSAmJiAhbWVtYmVyLm1vZGlmaWVycy5zdGF0aWMpIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoJ0ludGVyZmFjZSBmaWVsZHMgbXVzdCBiZSBzdGF0aWMuJyk7XG5cdFx0fVxuXG5cdFx0aWYgKG1lbWJlciBpbnN0YW5jZW9mIEFTVE1ldGhvZE5vZGUgJiYgbWVtYmVyLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoJ0ludGVyZmFjZSBtZXRob2RzIG11c3Qgbm90IGhhdmUgYSBib2R5LicpO1xuXHRcdH1cblxuXHRcdGNoaWxkcmVuLnB1c2gobWVtYmVyKTtcblx0fVxuXG5cdGNvbnN0IGJyYWNlQ2xvc2VUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX0NMT1NFKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVEludGVyZmFjZU5vZGUoXG5cdFx0bmFtZVRva2VuLnZhbHVlLFxuXHRcdGFubm90YXRpb25zLFxuXHRcdG1vZGlmaWVycyxcblx0XHR0eXBlUGFyYW1ldGVycyxcblx0XHRleHRlbmRzSW50ZXJmYWNlcyxcblx0XHRjaGlsZHJlblxuXHQpO1xuXG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKGludGVyZmFjZVRva2VuLCBicmFjZUNsb3NlVG9rZW4pO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQW5ub3RhdGlvbnMocGFyc2VyOiBQYXJzZXIpOiBBU1RBbm5vdGF0aW9uTm9kZVtdIHtcblx0Y29uc3QgYW5ub3RhdGlvbnMgPSBbXTtcblxuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuQU5OT1RBVElPTikge1xuXHRcdGFubm90YXRpb25zLnB1c2gocGFyc2VBbm5vdGF0aW9uKHBhcnNlcikpO1xuXHR9XG5cblx0cmV0dXJuIGFubm90YXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBbm5vdGF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUQW5ub3RhdGlvbk5vZGUge1xuXHRjb25zdCB0b2tlbiA9IHBhcnNlci5leHBlY3RBbm5vdGF0aW9uKCk7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUQW5ub3RhdGlvbk5vZGUodG9rZW4udmFsdWUpO1xuXG5cdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKSkge1xuXHRcdHdoaWxlIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKSB7XG5cdFx0XHRjb25zdCBrZXkgPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpLnZhbHVlO1xuXHRcdFx0cGFyc2VyLmV4cGVjdE9wZXJhdG9yKEdSQU1NQVIuQVNTSUdOKTtcblxuXHRcdFx0Y29uc3QgdmFsdWUgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0XHRcdG5vZGUucHJvcGVydGllcy5zZXQoa2V5LCB2YWx1ZSk7XG5cblx0XHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkNPTU1BKSB7XG5cdFx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXHR9XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU1vZGlmaWVycyhwYXJzZXI6IFBhcnNlciwgYWxsb3dlZDogc3RyaW5nW10pOiBNb2RpZmllcnMge1xuXHRjb25zdCBtb2RpZmllcnM6IHsgW2luZGV4OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcblxuXHRhbGxvd2VkLmZvckVhY2gobW9kaWZpZXIgPT4gbW9kaWZpZXJzW21vZGlmaWVyXSA9IGZhbHNlKTtcblxuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuS0VZV09SRCAmJiBhbGxvd2VkLmluY2x1ZGVzKHBhcnNlci5wZWVrKCkudmFsdWUpKSB7XG5cdFx0Y29uc3QgbW9kaWZpZXIgPSBwYXJzZXIubmV4dCgpLnZhbHVlO1xuXG5cdFx0aWYgKG1vZGlmaWVyc1ttb2RpZmllcl0pIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoYER1cGxpY2F0ZSBtb2RpZmllcjogJHttb2RpZmllcn1gKTtcblx0XHR9XG5cblx0XHRtb2RpZmllcnNbbW9kaWZpZXJdID0gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBuZXcgTW9kaWZpZXJzKG1vZGlmaWVycyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBhcmFtZXRlcnMocGFyc2VyOiBQYXJzZXIpOiBBU1RQYXJhbWV0ZXJOb2RlW10ge1xuXHRjb25zdCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10gPSBbXTtcblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSkge1xuXHRcdHJldHVybiBwYXJhbWV0ZXJzO1xuXHR9XG5cblx0ZG8ge1xuXHRcdGNvbnN0IG5hbWVUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cdFx0bGV0IHR5cGUgPSBudWxsO1xuXHRcdGxldCBkZWZhdWx0VmFsdWUgPSBudWxsO1xuXG5cdFx0bGV0IHR5cGVUb2tlbiA9IG51bGw7XG5cdFx0bGV0IGRlZmF1bHRWYWx1ZVRva2VuID0gbnVsbDtcblxuXHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkNPTE9OKSB7XG5cdFx0XHR0eXBlVG9rZW4gPSBwYXJzZXIubmV4dCgpO1xuXHRcdFx0dHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHRcdH1cblxuXHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkFTU0lHTikge1xuXHRcdFx0ZGVmYXVsdFZhbHVlVG9rZW4gPSBwYXJzZXIubmV4dCgpO1xuXHRcdFx0ZGVmYXVsdFZhbHVlID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RQYXJhbWV0ZXJOb2RlKG5hbWVUb2tlbi52YWx1ZSwgdHlwZSwgZGVmYXVsdFZhbHVlKTtcblx0XHRub2RlLnNwYW4gPSBzcGFuRnJvbSh0eXBlVG9rZW4gfHwgbmFtZVRva2VuLCBkZWZhdWx0VmFsdWVUb2tlbiB8fCBuYW1lVG9rZW4pO1xuXG5cdFx0cGFyYW1ldGVycy5wdXNoKG5vZGUpO1xuXHR9IHdoaWxlIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT01NQSkpO1xuXG5cdHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDbGFzc01lbWJlcihwYXJzZXI6IFBhcnNlcik6IEFTVE5vZGUgfCBudWxsIHtcblx0Y29uc3Qgc3RhcnRUb2tlbjogVG9rZW4gPSBwYXJzZXIucGVlaygpO1xuXG5cdGNvbnN0IGFubm90YXRpb25zOiBBU1RBbm5vdGF0aW9uTm9kZVtdID0gcGFyc2VBbm5vdGF0aW9ucyhwYXJzZXIpO1xuXHRjb25zdCBtb2RpZmllcnM6IE1vZGlmaWVycyA9IHBhcnNlTW9kaWZpZXJzKFxuXHRcdHBhcnNlcixcblx0XHRbXG5cdFx0XHRHUkFNTUFSLlBVQkxJQyxcblx0XHRcdEdSQU1NQVIuUFJJVkFURSxcblx0XHRcdEdSQU1NQVIuU1RBVElDLFxuXHRcdFx0R1JBTU1BUi5SRUFET05MWVxuXHRcdF1cblx0KTtcblxuXHRpZiAocGFyc2VyLnBlZWtJcyhHUkFNTUFSLk9QRVJBVE9SKSkge1xuXHRcdHJldHVybiBwYXJzZU9wZXJhdG9yTWVtYmVyKHBhcnNlciwgc3RhcnRUb2tlbiwgYW5ub3RhdGlvbnMsIG1vZGlmaWVycyk7XG5cdH1cblxuXHRjb25zdCBuYW1lVG9rZW46IFRva2VuID0gcGFyc2VyLmV4cGVjdE9uZU9mKFtUb2tlblR5cGUuSURFTlRJRklFUiwgVG9rZW5UeXBlLktFWVdPUkRdKTtcblxuXHRsZXQgZmllbGRUeXBlOiBhbnkgPSBudWxsO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5DT0xPTikge1xuXHRcdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT0xPTikpIHtcblx0XHRcdGZpZWxkVHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHRcdH1cblx0fVxuXG5cdGxldCBpbml0OiBhbnkgPSBudWxsO1xuXHRpZiAocGFyc2VyLmNvbnN1bWVJZk9wZXJhdG9yKEdSQU1NQVIuQVNTSUdOKSkge1xuXHRcdGluaXQgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0fVxuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLlNFTUlDT0xPTikge1xuXHRcdGlmICghbW9kaWZpZXJzLnB1YmxpYyAmJiAhbW9kaWZpZXJzLnByaXZhdGUpIHtcblx0XHRcdG1vZGlmaWVycy5wcml2YXRlID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRjb25zdCBzZW1pY29sb25Ub2tlbjogVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5TRU1JQ09MT04pO1xuXG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RGaWVsZE5vZGUobmFtZVRva2VuLnZhbHVlLCBtb2RpZmllcnMsIGZpZWxkVHlwZSwgaW5pdCk7XG5cdFx0bm9kZS5zcGFuID0gc3BhbkZyb20oc3RhcnRUb2tlbiwgc2VtaWNvbG9uVG9rZW4pO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0bGV0IHR5cGVQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5MRVNTX1RIQU4pIHtcblx0XHR0eXBlUGFyYW1ldGVycyA9IHBhcnNlVHlwZVBhcmFtZXRlcnMocGFyc2VyKTtcblx0fVxuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pIHtcblx0XHRpZiAoIW1vZGlmaWVycy5wdWJsaWMgJiYgIW1vZGlmaWVycy5wcml2YXRlKSB7XG5cdFx0XHRtb2RpZmllcnMucHVibGljID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKTtcblx0XHRjb25zdCBwYXJhbWV0ZXJzOiBBU1RQYXJhbWV0ZXJOb2RlW10gPSBwYXJzZVBhcmFtZXRlcnMocGFyc2VyKTtcblx0XHRjb25zdCBwYXJlbnRoZXNlc0Nsb3NlVG9rZW46IFRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXG5cdFx0bGV0IHJldHVyblR5cGU6IGFueSA9IG51bGw7XG5cdFx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTE9OKSkge1xuXHRcdFx0cmV0dXJuVHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNoaWxkcmVuOiBBU1ROb2RlW10gPSBwYXJzZUJsb2NrKHBhcnNlcik7XG5cblx0XHRjb25zdCBub2RlID0gbmV3IEFTVE1ldGhvZE5vZGUoXG5cdFx0XHRuYW1lVG9rZW4udmFsdWUsXG5cdFx0XHRuYW1lVG9rZW4udmFsdWUgPT09IEdSQU1NQVIuQ09OU1RSVUNUT1IgPyBBU1ROb2RlVHlwZS5DT05TVFJVQ1RPUiA6IEFTVE5vZGVUeXBlLk1FVEhPRCxcblx0XHRcdGFubm90YXRpb25zLFxuXHRcdFx0bW9kaWZpZXJzLFxuXHRcdFx0dHlwZVBhcmFtZXRlcnMsXG5cdFx0XHRwYXJhbWV0ZXJzLFxuXHRcdFx0cmV0dXJuVHlwZSxcblx0XHRcdGNoaWxkcmVuXG5cdFx0KTtcblxuXHRcdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIHBhcmVudGhlc2VzQ2xvc2VUb2tlbik7XG5cblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdHRocm93UGFyc2VyRXJyb3IoYEludmFsaWQgY2xhc3MgbWVtYmVyOiAke25hbWVUb2tlbi52YWx1ZX1gKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VPcGVyYXRvck1lbWJlcihwYXJzZXI6IFBhcnNlciwgc3RhcnRUb2tlbjogVG9rZW4sIGFubm90YXRpb25zOiBBU1RBbm5vdGF0aW9uTm9kZVtdLCBtb2RpZmllcnM6IE1vZGlmaWVycyk6IEFTVE9wZXJhdG9yTm9kZSB7XG5cblx0cGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5PUEVSQVRPUik7XG5cblx0bGV0IG9wZXJhdG9yVG9rZW46IFRva2VuO1xuXHR0cnkge1xuXHRcdG9wZXJhdG9yVG9rZW4gPSBwYXJzZXIuZXhwZWN0T3BlcmF0b3IoKTtcblxuXHR9IGNhdGNoIChlKSB7XG5cdFx0cGFyc2VyLnJld2luZCgpO1xuXHRcdHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCd1Jyk7XG5cdFx0b3BlcmF0b3JUb2tlbiA9IHBhcnNlci5leHBlY3RPcGVyYXRvcigpO1xuXHRcdG9wZXJhdG9yVG9rZW4udmFsdWUgPSAndScgKyBvcGVyYXRvclRva2VuLnZhbHVlO1xuXHR9XG5cblx0aWYgKCFtb2RpZmllcnMucHVibGljICYmICFtb2RpZmllcnMucHJpdmF0ZSkge1xuXHRcdG1vZGlmaWVycy5wdWJsaWMgPSB0cnVlO1xuXHR9XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTik7XG5cdGNvbnN0IHBhcmFtZXRlcnM6IEFTVFBhcmFtZXRlck5vZGVbXSA9IHBhcnNlUGFyYW1ldGVycyhwYXJzZXIpO1xuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cblx0bGV0IHJldHVyblR5cGU6IEFTVFR5cGVOb2RlIHwgbnVsbCA9IG51bGw7XG5cdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5DT0xPTikpIHtcblx0XHRyZXR1cm5UeXBlID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cdH1cblxuXHRjb25zdCBjaGlsZHJlbjogQVNUTm9kZVtdID0gcGFyc2VCbG9jayhwYXJzZXIpO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUT3BlcmF0b3JOb2RlKFxuXHRcdG9wZXJhdG9yVG9rZW4udmFsdWUsXG5cdFx0YW5ub3RhdGlvbnMsXG5cdFx0bW9kaWZpZXJzLFxuXHRcdFtdLFxuXHRcdHBhcmFtZXRlcnMsXG5cdFx0cmV0dXJuVHlwZSxcblx0XHRjaGlsZHJlblxuXHQpO1xuXG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIG9wZXJhdG9yVG9rZW4pO1xuXG5cdGlmICghQVNUT3BlcmF0b3JOb2RlLk9WRVJMT0FEQUJMRV9PUEVSQVRPUlMuaW5jbHVkZXMobm9kZS5vcGVyYXRvcikpIHtcblx0XHR0aHJvd1BhcnNlckVycm9yKGBPcGVyYXRvciAke25vZGUub3BlcmF0b3J9IGlzIG5vdCBvdmVybG9hZGFibGUuYCwgbm9kZS5zcGFuKVxuXHR9XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUJsb2NrKHBhcnNlcjogUGFyc2VyKTogQVNUTm9kZVtdIHtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuU0VNSUNPTE9OKSB7XG5cdFx0cGFyc2VyLm5leHQoKTtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9PUEVOKTtcblxuXHRjb25zdCBjaGlsZHJlbiA9IFtdO1xuXHR3aGlsZSAocGFyc2VyLnBlZWsoKS52YWx1ZSAhPT0gR1JBTU1BUi5CUkFDRV9DTE9TRSkge1xuXHRcdGlmIChwYXJzZXIucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5DT01NRU5UKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGNvbnN0IGNoaWxkOiBBU1ROb2RlIHwgbnVsbCA9IHBhcnNlU3RhdGVtZW50KHBhcnNlcik7XG5cdFx0aWYgKGNoaWxkKSB7XG5cdFx0XHRjaGlsZHJlbi5wdXNoKGNoaWxkKTtcblx0XHR9XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9DTE9TRSk7XG5cblx0cmV0dXJuIGNoaWxkcmVuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VWYXJpYWJsZURlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUVmFyaWFibGVOb2RlIHtcblx0Y29uc3QgbGV0VG9rZW4gPSBwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLkxFVCk7XG5cdGNvbnN0IG5hbWVUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cblx0bGV0IHR5cGVBbm5vdGF0aW9uID0gbnVsbDtcblx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTE9OKSkge1xuXHRcdHR5cGVBbm5vdGF0aW9uID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cdH1cblxuXHRsZXQgaW5pdCA9IG51bGw7XG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkFTU0lHTikge1xuXHRcdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkFTU0lHTik7XG5cdFx0aW5pdCA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHR9XG5cblx0Y29uc3Qgc2VtaWNvbG9uVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5TRU1JQ09MT04pO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUVmFyaWFibGVOb2RlKG5hbWVUb2tlbi52YWx1ZSwgdHlwZUFubm90YXRpb24sIGluaXQpO1xuXHRub2RlLnNwYW4gPSBzcGFuRnJvbShsZXRUb2tlbiwgc2VtaWNvbG9uVG9rZW4pO1xuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJZkRlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUSWZOb2RlIHtcblx0Y29uc3Qgc3RhcnRUb2tlbiA9IHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuSUYpO1xuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pO1xuXHRjb25zdCBjb25kaXRpb24gPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0Y29uc3QgcGFyZW50aGVzZXNDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUSWZOb2RlKGNvbmRpdGlvbiwgbmV3IEFTVFRoZW5Ob2RlKHBhcnNlQmxvY2socGFyc2VyKSkpO1xuXG5cdGlmIChwYXJzZXIuY29uc3VtZUlmS2V5d29yZChHUkFNTUFSLkVMU0UpKSB7XG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuSUYpIHtcblx0XHRcdG5vZGUuZWxzZSA9IHBhcnNlSWZEZWNsYXJhdGlvbihwYXJzZXIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRub2RlLmVsc2UgPSBuZXcgQVNURWxzZU5vZGUocGFyc2VCbG9jayhwYXJzZXIpKTtcblx0XHR9XG5cdH1cblxuXHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBwYXJlbnRoZXNlc0Nsb3NlVG9rZW4pO1xuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VNYXRjaERlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUTWF0Y2hOb2RlIHtcblx0Y29uc3Qgc3RhcnRUb2tlbiA9IHBhcnNlci5leHBlY3RLZXl3b3JkKEdSQU1NQVIuTUFUQ0gpO1xuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKTtcblxuXHRjb25zdCBleHByZXNzaW9uID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cblx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuUEFSRU5USEVTRVNfQ0xPU0UpO1xuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDRV9PUEVOKTtcblxuXHRjb25zdCBtYXRjaENhc2VzOiBBU1RNYXRjaENhc2VOb2RlW10gPSBbXTtcblx0bGV0IGRlZmF1bHRDYXNlOiBBU1RNYXRjaENhc2VOb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0d2hpbGUgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQlJBQ0VfQ0xPU0UpIHtcblx0XHRjb25zdCBtYXRjaENhc2U6IEFTVE1hdGNoQ2FzZU5vZGUgPSBwYXJzZU1hdGNoQ2FzZURlY2xhcmF0aW9uKHBhcnNlcik7XG5cdFx0aWYgKG1hdGNoQ2FzZS50ZXN0ID09PSBudWxsKSB7XG5cdFx0XHRkZWZhdWx0Q2FzZSA9IG1hdGNoQ2FzZTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRtYXRjaENhc2VzLnB1c2gobWF0Y2hDYXNlKTtcblx0fVxuXG5cdGNvbnN0IGJyYWNlQ2xvc2VUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX0NMT1NFKTtcblxuXHRjb25zdCBub2RlID0gbmV3IEFTVE1hdGNoTm9kZShleHByZXNzaW9uLCBtYXRjaENhc2VzLCBkZWZhdWx0Q2FzZSk7XG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIGJyYWNlQ2xvc2VUb2tlbik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU1hdGNoQ2FzZURlY2xhcmF0aW9uKHBhcnNlcjogUGFyc2VyKTogQVNUTWF0Y2hDYXNlTm9kZSB7XG5cdGNvbnN0IGNhc2VOb2RlID0gbmV3IEFTVE1hdGNoQ2FzZU5vZGUoKTtcblxuXHRpZiAocGFyc2VyLmNvbnN1bWVJZktleXdvcmQoR1JBTU1BUi5ERUZBVUxUKSkge1xuXHRcdGNhc2VOb2RlLnRlc3QgPSBudWxsO1xuXHR9IGVsc2Uge1xuXHRcdGNhc2VOb2RlLnRlc3QgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkNPTE9OKTtcblxuXHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5CUkFDRV9PUEVOKSB7XG5cdFx0Y2FzZU5vZGUuY2hpbGRyZW4gPSBwYXJzZUJsb2NrKHBhcnNlcik7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3QgY2hpbGQ6IEFTVE5vZGUgfCBudWxsID0gcGFyc2VTdGF0ZW1lbnQocGFyc2VyKTtcblx0XHRpZiAoY2hpbGQpIHtcblx0XHRcdGNhc2VOb2RlLmNoaWxkcmVuLnB1c2goY2hpbGQpXG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGNhc2VOb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VGb3JlYWNoRGVjbGFyYXRpb24ocGFyc2VyOiBQYXJzZXIpOiBBU1RGb3JlYWNoTm9kZSB7XG5cdGNvbnN0IHN0YXJ0VG9rZW4gPSBwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLkZPUkVBQ0gpO1xuXG5cdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pO1xuXG5cdGNvbnN0IGl0ZXJhdG9yVG9rZW4gPSBwYXJzZXIuZXhwZWN0SWRlbnRpZmllcigpO1xuXHRjb25zdCBpdGVyYXRvciA9IGl0ZXJhdG9yVG9rZW4udmFsdWU7XG5cblx0cGFyc2VyLmV4cGVjdEtleXdvcmQoR1JBTU1BUi5JTik7XG5cblx0Y29uc3QgaXRlcmFibGUgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblxuXHRjb25zdCBwYXJlbnRoZXNlc0Nsb3NlVG9rZW4gPSBwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RGb3JlYWNoTm9kZShpdGVyYXRvciwgaXRlcmFibGUsIHBhcnNlQmxvY2socGFyc2VyKSk7XG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIHBhcmVudGhlc2VzQ2xvc2VUb2tlbik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUFycmF5KHBhcnNlcjogUGFyc2VyKTogQVNUQXJyYXlOb2RlIHtcblx0Y29uc3Qgc3RhcnRUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX09QRU4pO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUQXJyYXlOb2RlKCk7XG5cblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgIT09IEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfQ0xPU0UpIHtcblx0XHRkbyB7XG5cdFx0XHRub2RlLmVsZW1lbnRzLnB1c2gocGFyc2VFeHByZXNzaW9uKHBhcnNlcikpO1xuXHRcdH0gd2hpbGUgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSk7XG5cdH1cblxuXHRjb25zdCBicmFja2V0U3F1YXJlQ2xvc2VUb2tlbiA9IHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNLRVRfU1FVQVJFX0NMT1NFKTtcblxuXHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBicmFja2V0U3F1YXJlQ2xvc2VUb2tlbik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUxhbWJkYShwYXJzZXI6IFBhcnNlcik6IEFTVExhbWJkYU5vZGUge1xuXHRjb25zdCBzdGFydFRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfT1BFTik7XG5cblx0Y29uc3QgcGFyYW1ldGVyczogQVNUUGFyYW1ldGVyTm9kZVtdID0gW107XG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLkFSUk9XKSB7XG5cdFx0Y29uc3QgbmFtZSA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCkudmFsdWU7XG5cdFx0bGV0IHR5cGUgPSBudWxsO1xuXHRcdGxldCBkZWZhdWx0VmFsdWUgPSBudWxsO1xuXG5cdFx0aWYgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTE9OKSkge1xuXHRcdFx0dHlwZSA9IHBhcnNlVHlwZShwYXJzZXIpO1xuXHRcdH1cblxuXHRcdGlmIChwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkFTU0lHTikge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHRcdGRlZmF1bHRWYWx1ZSA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHRcdH1cblxuXHRcdHBhcmFtZXRlcnMucHVzaChuZXcgQVNUUGFyYW1ldGVyTm9kZShuYW1lLCB0eXBlLCBkZWZhdWx0VmFsdWUpKTtcblxuXHRcdHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkFSUk9XKTtcblxuXHRsZXQgcmV0dXJuVHlwZTogQVNUVHlwZU5vZGUgPSBjcmVhdGVNaXhlZFR5cGUoKTtcblx0aWYgKHBhcnNlci5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLklERU5USUZJRVIpIHtcblx0XHRyZXR1cm5UeXBlID0gcGFyc2VUeXBlKHBhcnNlcik7XG5cdFx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQ09MT04pIHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVyblR5cGUgPSBjcmVhdGVNaXhlZFR5cGUoKTtcblx0XHRcdHBhcnNlci5yZXdpbmQoKTtcblx0XHR9XG5cdH1cblxuXHRsZXQgY2hpbGRyZW4gPSBbXTtcblx0aWYgKHBhcnNlci5wZWVrKCkudmFsdWUgPT09IEdSQU1NQVIuQlJBQ0VfT1BFTikge1xuXHRcdGNoaWxkcmVuID0gcGFyc2VCbG9jayhwYXJzZXIpO1xuXHR9IGVsc2Uge1xuXHRcdGNoaWxkcmVuLnB1c2gocGFyc2VFeHByZXNzaW9uKHBhcnNlcikpO1xuXHR9XG5cblx0Y29uc3QgYnJhY2VDbG9zZVRva2VuID0gcGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfQ0xPU0UpO1xuXG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUTGFtYmRhTm9kZShwYXJhbWV0ZXJzLCByZXR1cm5UeXBlLCBjaGlsZHJlbik7XG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIGJyYWNlQ2xvc2VUb2tlbik7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb29rc0xpa2VMYW1iZGEocGFyc2VyOiBQYXJzZXIpOiBib29sZWFuIHtcblx0Y29uc3Qgc3RhcnQ6IG51bWJlciA9IHBhcnNlci5wb3NpdGlvbigpO1xuXG5cdGlmIChwYXJzZXIucGVlaygpLnZhbHVlICE9PSBHUkFNTUFSLkJSQUNFX09QRU4pIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRwYXJzZXIubmV4dCgpO1xuXG5cdHdoaWxlIChwYXJzZXIucGVlaygpLnR5cGUgPT09IFRva2VuVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0cGFyc2VyLm5leHQoKTtcblx0XHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQ09MT04pKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdH1cblx0XHRpZiAoIXBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgaXNMYW1iZGE6IGJvb2xlYW4gPSBwYXJzZXIucGVlaygpLnZhbHVlID09PSBHUkFNTUFSLkFSUk9XO1xuXHRwYXJzZXIuc2Vla0F0KHN0YXJ0KVxuXHRyZXR1cm4gaXNMYW1iZGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUV4cHJlc3Npb25TdGF0ZW1lbnQocGFyc2VyOiBQYXJzZXIpOiBBU1RFeHByZXNzaW9uTm9kZSB7XG5cdGNvbnN0IGV4cHI6IEFTVE5vZGUgPSBwYXJzZUV4cHJlc3Npb24ocGFyc2VyKTtcblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5TRU1JQ09MT04pO1xuXG5cdHJldHVybiBuZXcgQVNURXhwcmVzc2lvbk5vZGUoZXhwcik7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRXhwcmVzc2lvbihwYXJzZXI6IFBhcnNlciwgcHJlY2VkZW5jZTogbnVtYmVyID0gMCk6IEFTVE5vZGUge1xuXHRsZXQgZXhwcjogQVNUTm9kZSA9IHBhcnNlUG9zdGZpeChwYXJzZXIsIHBhcnNlVW5hcnkocGFyc2VyKSk7XG5cblx0d2hpbGUgKHRydWUpIHtcblx0XHRjb25zdCB0b2tlbjogVG9rZW4gPSBwYXJzZXIucGVlaygpO1xuXHRcdGlmICghdG9rZW4pIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGxldCB0b2tlblByZWNlZGVuY2U6IG51bWJlciA9IGxvb2t1cFByZWNlZGVuY2UodG9rZW4pO1xuXHRcdGlmICh0b2tlblByZWNlZGVuY2UgPCBwcmVjZWRlbmNlKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuQVNTSUdOKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdFx0ZXhwciA9IG5ldyBBU1RBc3NpZ25tZW50Tm9kZShleHByLCBwYXJzZUV4cHJlc3Npb24ocGFyc2VyLCB0b2tlblByZWNlZGVuY2UpKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChHUkFNTUFSLk1BVEhfT1BFUkFUT1JTLmluY2x1ZGVzKHRva2VuLnZhbHVlKVxuXHRcdFx0fHwgR1JBTU1BUi5MT0dJQ19PUEVSQVRPUlMuaW5jbHVkZXModG9rZW4udmFsdWUpKSB7XG5cdFx0XHRjb25zdCBzdGFydFRva2VuOiBUb2tlbiA9IHBhcnNlci5uZXh0KCk7XG5cdFx0XHRjb25zdCByaWdodDogQVNUTm9kZSA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIsIHRva2VuUHJlY2VkZW5jZSArIDEpO1xuXHRcdFx0Y29uc3QgZW5kVG9rZW46IFRva2VuID0gcGFyc2VyLnBlZWsoKTtcblxuXHRcdFx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RCaW5hcnlOb2RlKGV4cHIsIHJpZ2h0LCB0b2tlbi52YWx1ZSk7XG5cdFx0XHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBlbmRUb2tlbik7XG5cdFx0XHRleHByID0gbm9kZTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGJyZWFrO1xuXHR9XG5cblx0cmV0dXJuIGV4cHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVZEb21FeHByZXNzaW9uKHBhcnNlcjogUGFyc2VyKTogQVNUVkRvbU5vZGUge1xuXHRwYXJzZXIuZXhwZWN0S2V5d29yZChHUkFNTUFSLlZET00pO1xuXHRyZXR1cm4gcGFyc2VWRG9tRWxlbWVudChwYXJzZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VWRG9tRWxlbWVudChwYXJzZXI6IFBhcnNlcik6IEFTVFZEb21Ob2RlIHtcblx0cGFyc2VyLmNvbnN1bWVJZlRleHQoKTtcblxuXHRjb25zdCBzdGFydFRva2VuOiBUb2tlbiA9IHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkxFU1NfVEhBTik7XG5cdGNvbnN0IHRhZ1Rva2VuOiBUb2tlbiA9IHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cdGNvbnN0IHRhZzogc3RyaW5nID0gdGFnVG9rZW4udmFsdWU7XG5cblx0cGFyc2VyLmNvbnN1bWVJZlRleHQoKTtcblxuXHRjb25zdCBwcm9wcyA9IG5ldyBNYXA8c3RyaW5nLCBBU1ROb2RlPigpO1xuXHR3aGlsZSAodHJ1ZSkge1xuXG5cdFx0aWYgKHBhcnNlci5wZWVrSXMoR1JBTU1BUi5HUkVBVEVSX1RIQU4pKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRpZiAocGFyc2VyLnBlZWtJcyhHUkFNTUFSLlhNTF9DTE9TRV9UQUcpKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRjb25zdCBuYW1lVG9rZW46IFRva2VuID0gcGFyc2VyLmV4cGVjdElkZW50aWZpZXIoKTtcblx0XHRwYXJzZXIuZXhwZWN0T3BlcmF0b3IoR1JBTU1BUi5BU1NJR04pO1xuXG5cdFx0bGV0IHZhbHVlOiBBU1ROb2RlO1xuXG5cdFx0aWYgKHBhcnNlci5wZWVrSXMoR1JBTU1BUi5CUkFDRV9PUEVOKSkge1xuXHRcdFx0aWYgKGxvb2tzTGlrZUxhbWJkYShwYXJzZXIpKSB7XG5cdFx0XHRcdHZhbHVlID0gcGFyc2VMYW1iZGEocGFyc2VyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBhcnNlci5uZXh0KCk7XG5cdFx0XHRcdHZhbHVlID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdFx0XHRcdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLkJSQUNFX0NMT1NFKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFsdWUgPSBwYXJzZVByaW1hcnkocGFyc2VyKTtcblx0XHR9XG5cblx0XHRwcm9wcy5zZXQobmFtZVRva2VuLnZhbHVlLCB2YWx1ZSk7XG5cblx0XHRwYXJzZXIuY29uc3VtZUlmVGV4dCgpO1xuXHR9XG5cblx0aWYgKHBhcnNlci5wZWVrSXMoR1JBTU1BUi5YTUxfQ0xPU0VfVEFHKSkge1xuXHRcdHBhcnNlci5uZXh0KCk7XG5cblx0XHRjb25zdCBub2RlID0gbmV3IEFTVFZEb21Ob2RlKHRhZywgcHJvcHMsIFtdKTtcblx0XHRub2RlLnNwYW4gPSBzcGFuRnJvbShzdGFydFRva2VuLCBwYXJzZXIucGVlaygpKTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkdSRUFURVJfVEhBTik7XG5cblx0Y29uc3QgY2hpbGRyZW46IEFTVE5vZGVbXSA9IFtdO1xuXHR3aGlsZSAoIXBhcnNlci5wZWVrSXMoR1JBTU1BUi5YTUxfT1BFTl9DTE9TRV9UQUcpKSB7XG5cblx0XHRpZiAocGFyc2VyLnBlZWsoKS52YWx1ZSA9PT0gR1JBTU1BUi5MRVNTX1RIQU4pIHtcblx0XHRcdGNoaWxkcmVuLnB1c2gocGFyc2VWRG9tRWxlbWVudChwYXJzZXIpKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNoaWxkcmVuLnB1c2gocGFyc2VWRG9tVGV4dChwYXJzZXIpKTtcblx0fVxuXG5cdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLlhNTF9PUEVOX0NMT1NFX1RBRyk7XG5cdHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCk7XG5cdHBhcnNlci5leHBlY3RPcGVyYXRvcihHUkFNTUFSLkdSRUFURVJfVEhBTik7XG5cblx0Y29uc3Qgbm9kZSA9IG5ldyBBU1RWRG9tTm9kZSh0YWcsIHByb3BzLCBjaGlsZHJlbik7XG5cdG5vZGUuc3BhbiA9IHNwYW5Gcm9tKHN0YXJ0VG9rZW4sIHBhcnNlci5wZWVrKCkpO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVkRvbVRleHQocGFyc2VyOiBQYXJzZXIpOiBBU1RWRG9tVGV4dE5vZGUgfCBBU1RWRG9tRXhwcmVzc2lvbk5vZGUge1xuXHRpZiAocGFyc2VyLmNvbnN1bWVJZlB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfT1BFTikpIHtcblx0XHRjb25zdCBleHByZXNzaW9uOiBBU1ROb2RlID0gcGFyc2VFeHByZXNzaW9uKHBhcnNlcik7XG5cdFx0cGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uKEdSQU1NQVIuQlJBQ0VfQ0xPU0UpO1xuXHRcdHJldHVybiBuZXcgQVNUVkRvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb24pO1xuXHR9XG5cblx0Y29uc3QgdG9rZW46IFRva2VuID0gcGFyc2VyLmV4cGVjdE9uZU9mKFxuXHRcdFtcblx0XHRcdFRva2VuVHlwZS5JREVOVElGSUVSLFxuXHRcdFx0VG9rZW5UeXBlLk9QRVJBVE9SLFxuXHRcdFx0VG9rZW5UeXBlLktFWVdPUkQsXG5cdFx0XHRUb2tlblR5cGUuUFVOQ1RVQVRJT04sXG5cdFx0XHRUb2tlblR5cGUuTlVNQkVSLFxuXHRcdFx0VG9rZW5UeXBlLlRFWFRcblx0XHRdXG5cdCk7XG5cdGNvbnN0IG5vZGUgPSBuZXcgQVNUVkRvbVRleHROb2RlKHRva2VuLnZhbHVlKTtcblx0bm9kZS5zcGFuID0gc3BhbkZyb20odG9rZW4sIHRva2VuKTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUFyZ3VtZW50cyhwYXJzZXI6IFBhcnNlcik6IEFTVE5vZGVbXSB7XG5cdGNvbnN0IGFyZ3M6IEFTVE5vZGVbXSA9IFtdO1xuXG5cdGlmIChwYXJzZXIuY29uc3VtZUlmUHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSkpIHtcblx0XHRyZXR1cm4gYXJncztcblx0fVxuXG5cdGFyZ3MucHVzaChwYXJzZUV4cHJlc3Npb24ocGFyc2VyKSk7XG5cblx0d2hpbGUgKHBhcnNlci5jb25zdW1lSWZQdW5jdHVhdGlvbihHUkFNTUFSLkNPTU1BKSkge1xuXHRcdGFyZ3MucHVzaChwYXJzZUV4cHJlc3Npb24ocGFyc2VyKSk7XG5cdH1cblxuXHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5QQVJFTlRIRVNFU19DTE9TRSk7XG5cdHJldHVybiBhcmdzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VVbmFyeShwYXJzZXI6IFBhcnNlcik6IEFTVE5vZGUgfCBBU1RVbmFyeU5vZGUge1xuXHRjb25zdCB0b2tlbjogVG9rZW4gPSBwYXJzZXIucGVlaygpO1xuXG5cdGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuS0VZV09SRCAmJiB0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5WRE9NKSB7XG5cdFx0cmV0dXJuIHBhcnNlVkRvbUV4cHJlc3Npb24ocGFyc2VyKTtcblx0fVxuXG5cdHN3aXRjaCAodG9rZW4udmFsdWUpIHtcblx0XHRjYXNlIEdSQU1NQVIuRVhDTEFNQVRJT05fTUFSSzoge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblxuXHRcdFx0Y29uc3QgdW5hcnk6IEFTVE5vZGUgfCBBU1RVbmFyeU5vZGUgPSBwYXJzZVVuYXJ5KHBhcnNlcik7XG5cblx0XHRcdHJldHVybiBuZXcgQVNUVW5hcnlOb2RlKEdSQU1NQVIuRVhDTEFNQVRJT05fTUFSSywgdW5hcnkpO1xuXHRcdH1cblx0XHRjYXNlIEdSQU1NQVIuTUlOVVM6IHtcblx0XHRcdHBhcnNlci5uZXh0KCk7XG5cblx0XHRcdGNvbnN0IHVuYXJ5OiBBU1ROb2RlIHwgQVNUVW5hcnlOb2RlID0gcGFyc2VVbmFyeShwYXJzZXIpO1xuXG5cdFx0XHRyZXR1cm4gbmV3IEFTVFVuYXJ5Tm9kZShHUkFNTUFSLk1JTlVTLCB1bmFyeSk7XG5cdFx0fVxuXHRcdGNhc2UgR1JBTU1BUi5QTFVTOiB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXG5cdFx0XHRjb25zdCB1bmFyeTogQVNUTm9kZSB8IEFTVFVuYXJ5Tm9kZSA9IHBhcnNlVW5hcnkocGFyc2VyKTtcblxuXHRcdFx0cmV0dXJuIG5ldyBBU1RVbmFyeU5vZGUoR1JBTU1BUi5QTFVTLCB1bmFyeSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHBhcnNlUHJpbWFyeShwYXJzZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQcmltYXJ5KHBhcnNlcjogUGFyc2VyKTogQVNUTm9kZSB7XG5cdGlmIChsb29rc0xpa2VMYW1iZGEocGFyc2VyKSkge1xuXHRcdHJldHVybiBwYXJzZUxhbWJkYShwYXJzZXIpO1xuXHR9XG5cblx0Y29uc3QgdG9rZW46IFRva2VuID0gcGFyc2VyLm5leHQoKTtcblxuXHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuQlJBQ0tFVF9TUVVBUkVfT1BFTikge1xuXHRcdHBhcnNlci5yZXdpbmQoKTtcblx0XHRyZXR1cm4gcGFyc2VBcnJheShwYXJzZXIpO1xuXHR9XG5cblx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5OVU1CRVIpIHtcblx0XHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuTlVNQkVSKTtcblx0XHRub2RlLnZhbHVlID0gdG9rZW4udmFsdWU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRpZiAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLlNUUklORykge1xuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5TVFJJTkcpO1xuXHRcdG5vZGUudmFsdWUgPSB0b2tlbi52YWx1ZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuQk9PTEVBTikge1xuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5CT09MRUFOKTtcblx0XHRub2RlLnZhbHVlID0gdG9rZW4udmFsdWU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRpZiAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLklERU5USUZJRVIpIHtcblx0XHRjb25zdCBub2RlID0gbmV3IEFTVE5vZGUoQVNUTm9kZVR5cGUuSURFTlRJRklFUik7XG5cdFx0bm9kZS5uYW1lID0gdG9rZW4udmFsdWU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuTlVMTCkge1xuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5OVUxMKTtcblx0XHRub2RlLnZhbHVlID0gdG9rZW4udmFsdWU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuVEhJUykge1xuXHRcdGNvbnN0IG5vZGUgPSBuZXcgQVNUTm9kZShBU1ROb2RlVHlwZS5USElTKTtcblx0XHRub2RlLm5hbWUgPSB0b2tlbi52YWx1ZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5ORVcpIHtcblxuXHRcdGxldCB0eXBlQW5ub3RhdGlvbjogQVNUVHlwZU5vZGUgPSBwYXJzZVR5cGUocGFyc2VyKTtcblxuXHRcdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX09QRU4pO1xuXG5cdFx0cmV0dXJuIG5ldyBBU1ROZXdOb2RlKHBhcnNlQXJndW1lbnRzKHBhcnNlciksIHR5cGVBbm5vdGF0aW9uKTtcblx0fVxuXG5cdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5QQVJFTlRIRVNFU19PUEVOKSB7XG5cdFx0Y29uc3QgZXhwcjogQVNUTm9kZSA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXHRcdHBhcnNlci5leHBlY3RQdW5jdHVhdGlvbihHUkFNTUFSLlBBUkVOVEhFU0VTX0NMT1NFKTtcblx0XHRyZXR1cm4gZXhwcjtcblx0fVxuXG5cdHRocm93UGFyc2VyRXJyb3IoYFVuZXhwZWN0ZWQgdG9rZW46ICR7dG9rZW4udHlwZX0gJHt0b2tlbi52YWx1ZX1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUG9zdGZpeChwYXJzZXI6IFBhcnNlciwgZXhwcjogQVNUTm9kZSB8IG51bGwpOiBBU1ROb2RlIHtcblx0aWYgKGV4cHIgPT09IG51bGwpIHtcblx0XHR0aHJvd1BhcnNlckVycm9yKGBFeHBlY3RlZCBleHByZXNzaW9uLCBnb3QgbnVsbC5gKTtcblx0fVxuXG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0Y29uc3QgdG9rZW4gPSBwYXJzZXIucGVlaygpO1xuXHRcdGlmICghdG9rZW4pIGJyZWFrO1xuXG5cdFx0Ly8gQ2FsbDogZm9vKC4uLilcblx0XHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTikge1xuXHRcdFx0cGFyc2VyLm5leHQoKTtcblx0XHRcdGV4cHIgPSBuZXcgQVNUQ2FsbE5vZGUoZXhwciwgcGFyc2VBcmd1bWVudHMocGFyc2VyKSk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBNZW1iZXI6IGZvby5iYXJcblx0XHRpZiAodG9rZW4udmFsdWUgPT09IEdSQU1NQVIuRE9UKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXHRcdFx0ZXhwciA9IG5ldyBBU1RNZW1iZXJOb2RlKGV4cHIsIHBhcnNlci5leHBlY3RJZGVudGlmaWVyKCkudmFsdWUpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gSU5ERVg6IGZvb1tleHByXVxuXHRcdGlmICh0b2tlbi52YWx1ZSA9PT0gR1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9PUEVOKSB7XG5cdFx0XHRwYXJzZXIubmV4dCgpO1xuXG5cdFx0XHRjb25zdCBpbmRleCA9IHBhcnNlRXhwcmVzc2lvbihwYXJzZXIpO1xuXG5cdFx0XHRwYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24oR1JBTU1BUi5CUkFDS0VUX1NRVUFSRV9DTE9TRSk7XG5cblx0XHRcdGV4cHIgPSBuZXcgQVNUSW5kZXhOb2RlKGV4cHIsIGluZGV4KTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGJyZWFrO1xuXHR9XG5cblx0cmV0dXJuIGV4cHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb29rdXBQcmVjZWRlbmNlKHRva2VuOiBUb2tlbik6IG51bWJlciB7XG5cdHN3aXRjaCAodG9rZW4udmFsdWUpIHtcblx0XHRjYXNlIEdSQU1NQVIuRE9UOlxuXHRcdFx0cmV0dXJuIDEwMDtcblx0XHRjYXNlIEdSQU1NQVIuUEFSRU5USEVTRVNfT1BFTjpcblx0XHRcdHJldHVybiA5MDtcblx0XHRjYXNlIEdSQU1NQVIuTVVMVElQTFk6XG5cdFx0Y2FzZSBHUkFNTUFSLkRJVklERTpcblx0XHRjYXNlIEdSQU1NQVIuTU9EVUxVUzpcblx0XHRcdHJldHVybiA2MDtcblx0XHRjYXNlIEdSQU1NQVIuUExVUzpcblx0XHRjYXNlIEdSQU1NQVIuTUlOVVM6XG5cdFx0XHRyZXR1cm4gNTA7XG5cdFx0Y2FzZSBHUkFNTUFSLkxFU1NfVEhBTjpcblx0XHRjYXNlIEdSQU1NQVIuR1JFQVRFUl9USEFOOlxuXHRcdGNhc2UgR1JBTU1BUi5MRVNTX0VRVUFMOlxuXHRcdGNhc2UgR1JBTU1BUi5HUkVBVEVSX0VRVUFMOlxuXHRcdFx0cmV0dXJuIDQwO1xuXHRcdGNhc2UgR1JBTU1BUi5FUVVBTDpcblx0XHRjYXNlIEdSQU1NQVIuTk9UX0VRVUFMOlxuXHRcdFx0cmV0dXJuIDMwO1xuXHRcdGNhc2UgR1JBTU1BUi5BTkQ6XG5cdFx0XHRyZXR1cm4gMjA7XG5cdFx0Y2FzZSBHUkFNTUFSLk9SOlxuXHRcdFx0cmV0dXJuIDEwO1xuXHRcdGNhc2UgR1JBTU1BUi5BU1NJR046XG5cdFx0XHRyZXR1cm4gNTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIDA7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtUb2tlbiwgVG9rZW5UeXBlfSBmcm9tIFwiLi4vZ3JhbW1hclwiO1xuaW1wb3J0IHtUb2tlblN0cmVhbX0gZnJvbSBcIi4uL3Rva2VuaXplci90b2tlbml6ZXJcIjtcbmltcG9ydCB7cGFyc2VQcm9ncmFtfSBmcm9tIFwiLi9wYXJzZXJfc3RhdG1lbnRzXCI7XG5pbXBvcnQge3Rocm93UGFyc2VyRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi9wYXJzZXJfc291cmNlXCI7XG5cblxuZXhwb3J0IGNsYXNzIFBhcnNlciB7XG5cdHNvdXJjZTogU291cmNlO1xuXHR0b2tlblN0cmVhbTogVG9rZW5TdHJlYW0gfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihzb3VyY2U6IFNvdXJjZSkge1xuXHRcdHRoaXMuc291cmNlID0gc291cmNlO1xuXHR9XG5cblx0cGFyc2UoKSB7XG5cdFx0dGhpcy50b2tlblN0cmVhbSA9IHRoaXMuc291cmNlXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAuZ2V0VG9rZW5pemVyKClcblx0XHQgICAgICAgICAgICAgICAgICAgICAgIC5nZXRUb2tlblN0cmVhbSgpXG5cblx0XHRyZXR1cm4gcGFyc2VQcm9ncmFtKHRoaXMpO1xuXHR9XG5cblx0c3RyZWFtKCk6IFRva2VuU3RyZWFtIHtcblx0XHRpZiAoIXRoaXMudG9rZW5TdHJlYW0pIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoJ1BhcnNlciBoYXMgbm90IGJlZW4gcGFyc2VkIHlldC4nKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy50b2tlblN0cmVhbTtcblx0fVxuXG5cdGV4cGVjdCh0b2tlblR5cGU6IHN0cmluZywga2V5d29yZDogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBUb2tlbiB7XG5cdFx0Y29uc3QgdG9rZW46IFRva2VuIHwgbnVsbCA9IHRoaXNcblx0XHRcdC5zdHJlYW0oKVxuXHRcdFx0Lm5leHQoKTtcblxuXHRcdGlmICghdG9rZW4pIHtcblx0XHRcdHRocm93UGFyc2VyRXJyb3IoYFVuZXhwZWN0ZWQgZW5kIG9mIGZpbGUuIEV4cGVjdGVkICR7dG9rZW5UeXBlfSR7a2V5d29yZCA/ICcgJyArIGtleXdvcmQgOiAnJ31gKTtcblx0XHR9XG5cblx0XHRpZiAodG9rZW4udHlwZSAhPT0gdG9rZW5UeXBlIHx8IChrZXl3b3JkICYmIHRva2VuLnZhbHVlICE9PSBrZXl3b3JkKSkge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcihgRXhwZWN0ZWQgJHt0b2tlblR5cGV9JHtrZXl3b3JkID8gJyAnICsga2V5d29yZCA6ICcnfSwgZ290ICR7dG9rZW4udHlwZX0gJHt0b2tlbi52YWx1ZX1gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdG9rZW47XG5cdH1cblxuXHRleHBlY3RPcGVyYXRvcihrZXl3b3JkOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IFRva2VuIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlY3QoVG9rZW5UeXBlLk9QRVJBVE9SLCBrZXl3b3JkKTtcblx0fVxuXG5cdGV4cGVjdEFubm90YXRpb24oKTogVG9rZW4ge1xuXHRcdHJldHVybiB0aGlzLmV4cGVjdChUb2tlblR5cGUuQU5OT1RBVElPTik7XG5cdH1cblxuXHRleHBlY3RJZGVudGlmaWVyKGtleXdvcmQ6IHN0cmluZyB8IG51bGwgPSBudWxsKTogVG9rZW4ge1xuXHRcdHJldHVybiB0aGlzLmV4cGVjdChUb2tlblR5cGUuSURFTlRJRklFUiwga2V5d29yZCk7XG5cdH1cblxuXHRleHBlY3RLZXl3b3JkKGtleXdvcmQ6IHN0cmluZyB8IG51bGwgPSBudWxsKTogVG9rZW4ge1xuXHRcdHJldHVybiB0aGlzLmV4cGVjdChUb2tlblR5cGUuS0VZV09SRCwga2V5d29yZCk7XG5cdH1cblxuXHRleHBlY3RTdHJpbmcoKTogVG9rZW4ge1xuXHRcdHJldHVybiB0aGlzLmV4cGVjdChUb2tlblR5cGUuU1RSSU5HKTtcblx0fVxuXG5cdGV4cGVjdFRleHQoKTogVG9rZW4ge1xuXHRcdHJldHVybiB0aGlzLmV4cGVjdChUb2tlblR5cGUuVEVYVCk7XG5cdH1cblxuXHRleHBlY3RQdW5jdHVhdGlvbihrZXl3b3JkOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IFRva2VuIHtcblx0XHRyZXR1cm4gdGhpcy5leHBlY3QoVG9rZW5UeXBlLlBVTkNUVUFUSU9OLCBrZXl3b3JkKTtcblx0fVxuXG5cdGV4cGVjdE9uZU9mKHRva2VuVHlwZXM6IHN0cmluZ1tdLCBrZXl3b3Jkczogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBUb2tlbiB7XG5cdFx0Y29uc3QgdG9rZW4gPSB0aGlzXG5cdFx0XHQuc3RyZWFtKClcblx0XHRcdC5uZXh0KCk7XG5cblx0XHRpZiAoIXRva2VuKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKGBVbmV4cGVjdGVkIGVuZCBvZiBmaWxlLiBFeHBlY3RlZCBvbmUgb2YgdHlwZXMgJHt0b2tlblR5cGVzfSwgZ290IG51bGwuYCk7XG5cdFx0fVxuXG5cdFx0aWYgKCF0b2tlblR5cGVzLmluY2x1ZGVzKHRva2VuLnR5cGUpKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKGBFeHBlY3RlZCBvbmUgb2YgdHlwZXMgJHt0b2tlblR5cGVzfSwgZ290ICR7dG9rZW4udHlwZX1gKTtcblx0XHR9XG5cblx0XHRpZiAoa2V5d29yZHMgJiYgIWtleXdvcmRzLmluY2x1ZGVzKHRva2VuLnZhbHVlKSkge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcihgRXhwZWN0ZWQgb25lIG9mIHZhbHVlcyAke2tleXdvcmRzfSwgZ290ICR7dG9rZW4udmFsdWV9YCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRva2VuO1xuXHR9XG5cblx0Y29uc3VtZUlmKHRva2VuVHlwZTogc3RyaW5nLCBrZXl3b3JkOiBzdHJpbmcgfCBudWxsID0gbnVsbCk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IHRva2VuID0gdGhpcy5wZWVrKCk7XG5cblx0XHRpZiAodG9rZW4udHlwZSA9PT0gdG9rZW5UeXBlICYmIChrZXl3b3JkICYmIHRva2VuLnZhbHVlLnRyaW0oKSA9PT0ga2V5d29yZCkpIHtcblx0XHRcdHRoaXMubmV4dCgpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Y29uc3VtZUlmUHVuY3R1YXRpb24odmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbnN1bWVJZihUb2tlblR5cGUuUFVOQ1RVQVRJT04sIHZhbHVlKTtcblx0fVxuXG5cdGNvbnN1bWVJZk9wZXJhdG9yKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdW1lSWYoVG9rZW5UeXBlLk9QRVJBVE9SLCB2YWx1ZSk7XG5cdH1cblxuXHRjb25zdW1lSWZDb21tZW50KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbnN1bWVJZihUb2tlblR5cGUuQ09NTUVOVCk7XG5cdH1cblxuXHRjb25zdW1lSWZLZXl3b3JkKGtleXdvcmQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbnN1bWVJZihUb2tlblR5cGUuS0VZV09SRCwga2V5d29yZCk7XG5cdH1cblxuXHRjb25zdW1lSWZUZXh0KCk6IGJvb2xlYW4ge1xuXHRcdGlmICh0aGlzLnBlZWsoKS50eXBlID09PSBUb2tlblR5cGUuVEVYVCAmJiB0aGlzLnBlZWtJcygnJykpIHtcblx0XHRcdHRoaXMubmV4dCgpO1xuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRwZWVrKCk6IFRva2VuIHtcblx0XHRjb25zdCB0b2tlbiA9IHRoaXNcblx0XHRcdC5zdHJlYW0oKVxuXHRcdFx0LnBlZWsoKTtcblxuXHRcdGlmICh0b2tlbiA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3dQYXJzZXJFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZmlsZS4gRXhwZWN0ZWQgdG9rZW4sIGdvdCBudWxsLicpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0b2tlbjtcblx0fVxuXG5cdHBlZWtJcyhrZXl3b3JkOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5wZWVrKClcblx0XHQgICAgICAgICAgIC52YWx1ZVxuXHRcdCAgICAgICAgICAgLnRyaW0oKSA9PT0ga2V5d29yZDtcblx0fVxuXG5cdG5leHQoKTogVG9rZW4ge1xuXHRcdGNvbnN0IHRva2VuID0gdGhpc1xuXHRcdFx0LnN0cmVhbSgpXG5cdFx0XHQubmV4dCgpO1xuXG5cdFx0aWYgKHRva2VuID09PSBudWxsKSB7XG5cdFx0XHR0aHJvd1BhcnNlckVycm9yKCdVbmV4cGVjdGVkIGVuZCBvZiBmaWxlLiBFeHBlY3RlZCB0b2tlbiwgZ290IG51bGwuJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRva2VuO1xuXHR9XG5cblx0cmV3aW5kKCk6IHZvaWQge1xuXHRcdHRoaXMuc3RyZWFtKClcblx0XHQgICAgLnJld2luZCgpO1xuXHR9XG5cblx0cG9zaXRpb24oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5zdHJlYW0oKS5pbmRleDtcblx0fVxuXG5cdHNlZWtBdChwb3NpdGlvbjogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5zdHJlYW0oKS5pbmRleCA9IHBvc2l0aW9uO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7QVNUQ2xhc3NOb2RlLCBBU1RJbnRlcmZhY2VOb2RlLCBBU1ROb2RlfSBmcm9tIFwiLi4vYXN0XCI7XG5pbXBvcnQge0NsYXNzRGVmaW5pdGlvbiwgSW5zdGFuY2UsIEludGVyZmFjZURlZmluaXRpb259IGZyb20gXCIuL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7Q2xhc3NTeW1ib2wsIEludGVyZmFjZVN5bWJvbH0gZnJvbSBcIi4uL3R5cGVzL3R5cGVfb2JqZWN0c1wiO1xuaW1wb3J0IHt0aHJvd1J1bnRpbWVFcnJvcn0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuXG5leHBvcnQgY2xhc3MgQ2xhc3NSZWdpc3RyeSB7XG5cdG1hcDogTWFwPHN0cmluZywgQ2xhc3NEZWZpbml0aW9uPiA9IG5ldyBNYXAoKTtcblxuXHRyZWdpc3Rlcihub2RlOiBBU1RDbGFzc05vZGUpOiB2b2lkIHtcblx0XHR0aGlzLnNldChub2RlLm5hbWUsIENsYXNzRGVmaW5pdGlvbi5mcm9tQVNUKG5vZGUpKTtcblx0fVxuXG5cdGFsbCgpOiBJdGVyYWJsZUl0ZXJhdG9yPENsYXNzRGVmaW5pdGlvbj4ge1xuXHRcdHJldHVybiB0aGlzLm1hcC52YWx1ZXMoKTtcblx0fVxuXG5cdHNldChuYW1lOiBzdHJpbmcsIGNsYXNzRGVmaW5pdGlvbjogQ2xhc3NEZWZpbml0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5tYXAuc2V0KG5hbWUsIGNsYXNzRGVmaW5pdGlvbik7XG5cdH1cblxuXHRnZXQobmFtZTogc3RyaW5nKTogQ2xhc3NEZWZpbml0aW9uIHtcblx0XHRjb25zdCBjbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uIHwgbnVsbCA9IHRoaXMubWFwLmdldChuYW1lKSB8fCBudWxsO1xuXHRcdGlmICghY2xhc3NEZWYpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBDbGFzcyAke25hbWV9IG5vdCBmb3VuZC5gKTtcblx0XHR9XG5cdFx0cmV0dXJuIGNsYXNzRGVmO1xuXHR9XG5cblx0aGFzKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm1hcC5oYXMobmFtZSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEludGVyZmFjZVJlZ2lzdHJ5IHtcblx0bWFwOiBNYXA8c3RyaW5nLCBJbnRlcmZhY2VEZWZpbml0aW9uPiA9IG5ldyBNYXAoKTtcblxuXHRyZWdpc3Rlcihub2RlOiBBU1RJbnRlcmZhY2VOb2RlKTogdm9pZCB7XG5cdFx0dGhpcy5zZXQobm9kZS5uYW1lLCBJbnRlcmZhY2VEZWZpbml0aW9uLmZyb21BU1Qobm9kZSkpO1xuXHR9XG5cblx0YWxsKCk6IEl0ZXJhYmxlSXRlcmF0b3I8SW50ZXJmYWNlRGVmaW5pdGlvbj4ge1xuXHRcdHJldHVybiB0aGlzLm1hcC52YWx1ZXMoKTtcblx0fVxuXG5cdHNldChuYW1lOiBzdHJpbmcsIGludGVyZmFjZURlZmluaXRpb246IEludGVyZmFjZURlZmluaXRpb24pOiB2b2lkIHtcblx0XHR0aGlzLm1hcC5zZXQobmFtZSwgaW50ZXJmYWNlRGVmaW5pdGlvbik7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEluc3RhbmNlUmVnaXN0cnkge1xuXHRwcml2YXRlIGluc3RhbmNlczogTWFwPHN0cmluZywgSW5zdGFuY2U+ID0gbmV3IE1hcDxzdHJpbmcsIEluc3RhbmNlPigpO1xuXG5cdHJlZ2lzdGVyKGluc3RhbmNlOiBJbnN0YW5jZSk6IHZvaWQge1xuXHRcdHRoaXMuaW5zdGFuY2VzLnNldChpbnN0YW5jZS5pZCwgaW5zdGFuY2UpO1xuXHR9XG5cblx0dW5yZWdpc3RlcihpbnN0YW5jZTogSW5zdGFuY2UpOiB2b2lkIHtcblx0XHR0aGlzLmluc3RhbmNlcy5kZWxldGUoaW5zdGFuY2UuaWQpO1xuXHR9XG5cblx0Z2V0KGlkOiBzdHJpbmcpOiBJbnN0YW5jZSB8IG51bGwge1xuXHRcdHJldHVybiB0aGlzLmluc3RhbmNlcy5nZXQoaWQpIHx8IG51bGw7XG5cdH1cblxuXHRhbGxJbnN0YW5jZXMoKTogSW5zdGFuY2VbXSB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy5pbnN0YW5jZXMudmFsdWVzKCkpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlUmVnaXN0cnkge1xuXHRjbGFzc1N5bWJvbHM6IE1hcDxzdHJpbmcsIENsYXNzU3ltYm9sPiA9IG5ldyBNYXAoKTtcblx0aW50ZXJmYWNlU3ltYm9sczogTWFwPHN0cmluZywgSW50ZXJmYWNlU3ltYm9sPiA9IG5ldyBNYXAoKTtcblxuXHRhbGxDbGFzc1N5bWJvbHMoKTogSXRlcmFibGVJdGVyYXRvcjxDbGFzc1N5bWJvbD4ge1xuXHRcdHJldHVybiB0aGlzLmNsYXNzU3ltYm9scy52YWx1ZXMoKTtcblx0fVxuXG5cdGFsbEludGVyZmFjZVN5bWJvbHMoKTogSXRlcmFibGVJdGVyYXRvcjxJbnRlcmZhY2VTeW1ib2w+IHtcblx0XHRyZXR1cm4gdGhpcy5pbnRlcmZhY2VTeW1ib2xzLnZhbHVlcygpO1xuXHR9XG5cblx0YWRkQ2xhc3NTeW1ib2woc3ltYm9sOiBDbGFzc1N5bWJvbCk6IHZvaWQge1xuXHRcdHRoaXMuY2xhc3NTeW1ib2xzLnNldChzeW1ib2wubmFtZSwgc3ltYm9sKTtcblx0fVxuXG5cdGFkZEludGVyZmFjZVN5bWJvbChzeW1ib2w6IEludGVyZmFjZVN5bWJvbCk6IHZvaWQge1xuXHRcdHRoaXMuaW50ZXJmYWNlU3ltYm9scy5zZXQoc3ltYm9sLm5hbWUsIHN5bWJvbCk7XG5cdH1cblxuXHRoYXNTeW1ib2wobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY2xhc3NTeW1ib2xzLmhhcyhuYW1lKSB8fCB0aGlzLmludGVyZmFjZVN5bWJvbHMuaGFzKG5hbWUpO1xuXHR9XG5cblx0cHVibGljIGdldENsYXNzU3ltYm9sKG5hbWU6IHN0cmluZyk6IENsYXNzU3ltYm9sIHtcblx0XHRjb25zdCBzeW1ib2w6IENsYXNzU3ltYm9sIHwgdW5kZWZpbmVkID0gdGhpcy5jbGFzc1N5bWJvbHMuZ2V0KG5hbWUpO1xuXHRcdGlmIChzeW1ib2wgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhyb3dSdW50aW1lRXJyb3IoYFN5bWJvbCAke25hbWV9IG5vdCBmb3VuZC5gKTtcblx0XHR9XG5cdFx0cmV0dXJuIHN5bWJvbDtcblx0fVxuXG5cdHB1YmxpYyBnZXRJbnRlcmFjZVN5bWJvbChuYW1lOiBzdHJpbmcpOiBJbnRlcmZhY2VTeW1ib2wge1xuXHRcdGNvbnN0IHN5bWJvbDogSW50ZXJmYWNlU3ltYm9sIHwgdW5kZWZpbmVkID0gdGhpcy5pbnRlcmZhY2VTeW1ib2xzLmdldChuYW1lKTtcblx0XHRpZiAoc3ltYm9sID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRocm93UnVudGltZUVycm9yKGBTeW1ib2wgJHtuYW1lfSBub3QgZm91bmQuYCk7XG5cdFx0fVxuXHRcdHJldHVybiBzeW1ib2w7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE9iamVjdFJlZ2lzdHJ5IHtcblx0cHVibGljIHJlYWRvbmx5IGNsYXNzZXM6IENsYXNzUmVnaXN0cnkgPSBuZXcgQ2xhc3NSZWdpc3RyeSgpO1xuXHRwdWJsaWMgcmVhZG9ubHkgaW50ZXJmYWNlczogSW50ZXJmYWNlUmVnaXN0cnkgPSBuZXcgSW50ZXJmYWNlUmVnaXN0cnkoKTtcblx0cHVibGljIHJlYWRvbmx5IGluc3RhbmNlczogSW5zdGFuY2VSZWdpc3RyeSA9IG5ldyBJbnN0YW5jZVJlZ2lzdHJ5KCk7XG5cdHB1YmxpYyByZWFkb25seSB0eXBlczogVHlwZVJlZ2lzdHJ5ID0gbmV3IFR5cGVSZWdpc3RyeSgpO1xuXG5cdGZldGNoQWxsT2JqZWN0RGVmaW5pdGlvbnMoKTogTWFwPHN0cmluZywgQ2xhc3NEZWZpbml0aW9uIHwgSW50ZXJmYWNlRGVmaW5pdGlvbj4ge1xuXHRcdGNvbnN0IG1hcCA9IG5ldyBNYXAoKTtcblxuXHRcdGZvciAoY29uc3QgY2xhc3NEZWYgb2YgdGhpcy5pbnRlcmZhY2VzLmFsbCgpKSB7XG5cdFx0XHRtYXAuc2V0KGNsYXNzRGVmLm5hbWUsIGNsYXNzRGVmKTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGNsYXNzRGVmIG9mIHRoaXMuY2xhc3Nlcy5hbGwoKSkge1xuXHRcdFx0bWFwLnNldChjbGFzc0RlZi5uYW1lLCBjbGFzc0RlZik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1hcDtcblx0fVxuXG5cdGNvbGxlY3RBbGwoYXN0OiBBU1ROb2RlKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIGFzdC5jaGlsZHJlbikge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RJbnRlcmZhY2VOb2RlKSB7XG5cdFx0XHRcdHRoaXMuaW50ZXJmYWNlcy5yZWdpc3Rlcihub2RlKTtcblx0XHRcdH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIEFTVENsYXNzTm9kZSkge1xuXHRcdFx0XHR0aGlzLmNsYXNzZXMucmVnaXN0ZXIobm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbiIsCiAgICAiaW1wb3J0IHtcblx0QVNUQXJyYXlOb2RlLFxuXHRBU1RCaW5hcnlOb2RlLFxuXHRBU1RDYWxsTm9kZSxcblx0QVNUQ2xhc3NOb2RlLFxuXHRBU1RFeHByZXNzaW9uTm9kZSxcblx0QVNURmllbGROb2RlLFxuXHRBU1RGb3JlYWNoTm9kZSxcblx0QVNUSW5kZXhOb2RlLFxuXHRBU1RJbnRlcmZhY2VOb2RlLFxuXHRBU1RMYW1iZGFOb2RlLFxuXHRBU1RNZW1iZXJOb2RlLFxuXHRBU1RNZXRob2ROb2RlLFxuXHRBU1ROZXdOb2RlLFxuXHRBU1ROb2RlLFxuXHRBU1ROb2RlVHlwZSxcblx0QVNUUGFyYW1ldGVyTm9kZSxcblx0QVNUUmV0dXJuTm9kZSxcblx0QVNUVHlwZU5vZGUsXG5cdEFTVFVuYXJ5Tm9kZSxcblx0QVNUVmFyaWFibGVOb2RlLFxuXHRBU1RWRG9tTm9kZVxufSBmcm9tICcuLi9hc3QudHMnO1xuaW1wb3J0IHtcblx0YnVpbGRUeXBlU3Vic3RpdHV0aW9uTWFwLFxuXHRDbGFzc1JlZlR5cGUsXG5cdENsYXNzU3ltYm9sLFxuXHRGaWVsZFN5bWJvbCxcblx0SW50ZXJmYWNlUmVmVHlwZSxcblx0SW50ZXJmYWNlU3ltYm9sLFxuXHRMYW1iZGFUeXBlLFxuXHRNZXRob2RTeW1ib2wsXG5cdE1peGVkVHlwZSxcblx0TnVsbGFibGVUeXBlLFxuXHRQYXJhbWV0ZXJTeW1ib2wsXG5cdFByaW1pdGl2ZUNsYXNzVHlwZXMsXG5cdHN1YnN0aXR1dGVUeXBlLFxuXHRUeXBlLFxuXHRUeXBlUGFyYW1ldGVyU3ltYm9sLFxuXHRUeXBlcyxcblx0VHlwZVNjb3BlLFxuXHRUeXBlVmFyaWFibGUsXG5cdHdyYXBUeXBlXG59IGZyb20gXCIuL3R5cGVfb2JqZWN0c1wiO1xuaW1wb3J0IHtBdXRvYm94aW5nfSBmcm9tIFwiLi9hdXRvYm94aW5nXCI7XG5pbXBvcnQge05hdGl2ZUZ1bmN0aW9uLCBOYXRpdmVGdW5jdGlvbnN9IGZyb20gXCIuLi8uLi9saWJyYXJ5L25hdGl2ZV9mdW5jdGlvbnNcIjtcbmltcG9ydCB7R1JBTU1BUn0gZnJvbSBcIi4uL2dyYW1tYXJcIjtcbmltcG9ydCB7dGhyb3dUeXBlRXJyb3J9IGZyb20gXCIuLi9lcnJvcnMudHNcIlxuaW1wb3J0IHtDbGFzc0RlZmluaXRpb24sIEludGVyZmFjZURlZmluaXRpb259IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcblxuXG5jb25zdCBnbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeSA9IG5ldyBOYXRpdmVGdW5jdGlvbnMoKVxuXHQuZ2V0R2xvYmFsRnVuY3Rpb25UeXBlUmVnaXN0cnkoKTtcblxuZXhwb3J0IGNsYXNzIFN0YXRlbWVudFJlc3VsdCB7XG5cdGRpZFJldHVybjogYm9vbGVhbjtcblx0cmV0dXJuVHlwZTogVHlwZSB8IG51bGw7XG5cblx0Y29uc3RydWN0b3IoZGlkUmV0dXJuOiBib29sZWFuLCByZXR1cm5UeXBlOiBUeXBlIHwgbnVsbCkge1xuXHRcdHRoaXMuZGlkUmV0dXJuID0gZGlkUmV0dXJuO1xuXHRcdHRoaXMucmV0dXJuVHlwZSA9IHJldHVyblR5cGU7XG5cdH1cblxuXHRzdGF0aWMgd2l0aFJldHVybihyZXR1cm5UeXBlOiBUeXBlKTogU3RhdGVtZW50UmVzdWx0IHtcblx0XHRyZXR1cm4gbmV3IFN0YXRlbWVudFJlc3VsdCh0cnVlLCByZXR1cm5UeXBlKTtcblx0fVxuXG5cdHN0YXRpYyBub1JldHVybigpOiBTdGF0ZW1lbnRSZXN1bHQge1xuXHRcdHJldHVybiBuZXcgU3RhdGVtZW50UmVzdWx0KGZhbHNlLCBudWxsKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVHlwZUNoZWNrZXIge1xuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cblx0Y29uc3RydWN0b3Iob2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5KSB7XG5cdFx0dGhpcy5vYmplY3RSZWdpc3RyeSA9IG9iamVjdFJlZ2lzdHJ5O1xuXHR9XG5cblx0Y29sbGVjdEFsbFN5bWJvbHNGcm9tTm9kZShhc3Q6IEFTVE5vZGUpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgYXN0LmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEludGVyZmFjZU5vZGUpIHtcblx0XHRcdFx0dGhpcy5yZWdpc3RlckludGVyZmFjZVN5bWJvbChub2RlKVxuXHRcdFx0fSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgQVNUQ2xhc3NOb2RlKSB7XG5cdFx0XHRcdHRoaXMucmVnaXN0ZXJDbGFzc1N5bWJvbChub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjb2xsZWN0QWxsU3ltYm9sc0Zyb21SZWdpc3RyeShvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkpOiB2b2lkIHtcblx0XHRjb25zdCBvYmplY3REZWZpbml0aW9uczogTWFwSXRlcmF0b3I8Q2xhc3NEZWZpbml0aW9uIHwgSW50ZXJmYWNlRGVmaW5pdGlvbj4gPSBvYmplY3RSZWdpc3RyeVxuXHRcdFx0LmZldGNoQWxsT2JqZWN0RGVmaW5pdGlvbnMoKVxuXHRcdFx0LnZhbHVlcygpO1xuXG5cdFx0Zm9yIChsZXQgb2JqZWN0RGVmIG9mIG9iamVjdERlZmluaXRpb25zKSB7XG5cdFx0XHRpZiAob2JqZWN0RGVmIGluc3RhbmNlb2YgSW50ZXJmYWNlRGVmaW5pdGlvbikge1xuXHRcdFx0XHR0aGlzLnJlZ2lzdGVySW50ZXJmYWNlU3ltYm9sKG9iamVjdERlZi5ub2RlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucmVnaXN0ZXJDbGFzc1N5bWJvbChvYmplY3REZWYubm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y2hlY2soYXN0OiBBU1ROb2RlKTogdm9pZCB7XG5cdFx0dGhpcy5jb2xsZWN0QWxsU3ltYm9sc0Zyb21Ob2RlKGFzdCk7XG5cdFx0dGhpcy52YWxpZGF0ZUluaGVyaXRhbmNlKCk7XG5cdFx0dGhpcy5jaGVja1Byb2dyYW0oYXN0KTtcblx0XHR0aGlzLmNoZWNrSW50ZXJmYWNlQm9kaWVzKCk7XG5cdFx0dGhpcy5jaGVja0NsYXNzZXNCb2RpZXMoKTtcblx0XHR0aGlzLmNoZWNrQ2xhc3Nlc0ltcGxlbWVudHMoKTtcblx0fVxuXG5cdHByaXZhdGUgdmFsaWRhdGVJbmhlcml0YW5jZSgpIHtcblx0XHRmb3IgKGNvbnN0IGNsYXNzU3ltYm9sIG9mIHRoaXMub2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5hbGwoKSkge1xuXHRcdFx0aWYgKGNsYXNzU3ltYm9sLnN1cGVyQ2xhc3MgJiYgIXRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKGNsYXNzU3ltYm9sLnN1cGVyQ2xhc3MpKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBVbmtub3duIHN1cGVyY2xhc3MgJHtjbGFzc1N5bWJvbC5zdXBlckNsYXNzfWAsIGNsYXNzU3ltYm9sLm5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tQcm9ncmFtKGFzdDogQVNUTm9kZSk6IHZvaWQge1xuXHRcdGNvbnN0IHNjb3BlID0gbmV3IFR5cGVTY29wZSgpO1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdHRoaXMuY2hlY2tTdGF0ZW1lbnQobm9kZSwgc2NvcGUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tDbGFzc2VzQm9kaWVzKCk6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qgb2JqZWN0U3ltYm9sIG9mIHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuYWxsQ2xhc3NTeW1ib2xzKCkpIHtcblx0XHRcdGNvbnN0IGluc3RhbmNlU2NvcGUgPSBuZXcgVHlwZVNjb3BlKCk7XG5cdFx0XHRpbnN0YW5jZVNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgPSBvYmplY3RTeW1ib2w7XG5cblx0XHRcdG9iamVjdFN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5mb3JFYWNoKHR5cGVQYXJhbWV0ZXIgPT4ge1xuXHRcdFx0XHRpbnN0YW5jZVNjb3BlLmRlZmluZVR5cGVCaW5kaW5nKFxuXHRcdFx0XHRcdHR5cGVQYXJhbWV0ZXIubmFtZSxcblx0XHRcdFx0XHRuZXcgVHlwZVZhcmlhYmxlKHR5cGVQYXJhbWV0ZXIubmFtZSlcblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAob2JqZWN0U3ltYm9sLmNvbnN0cnVjdG9yTWV0aG9kU3ltYm9sKSB7XG5cdFx0XHRcdGNvbnN0IGNvbnN0cnVjdG9yU3ltYm9sID0gb2JqZWN0U3ltYm9sLmNvbnN0cnVjdG9yTWV0aG9kU3ltYm9sO1xuXHRcdFx0XHRjb25zdCBjb25zdHJ1Y3RvclNjb3BlID0gbmV3IFR5cGVTY29wZShpbnN0YW5jZVNjb3BlKTtcblxuXHRcdFx0XHRvYmplY3RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMuZm9yRWFjaCh0eXBlUGFyYW1ldGVyU3ltYm9sID0+IHtcblx0XHRcdFx0XHRjb25zdHJ1Y3RvclNjb3BlLmRlZmluZVR5cGVCaW5kaW5nKFxuXHRcdFx0XHRcdFx0dHlwZVBhcmFtZXRlclN5bWJvbC5uYW1lLFxuXHRcdFx0XHRcdFx0bmV3IFR5cGVWYXJpYWJsZSh0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Zm9yIChjb25zdCBwYXJhbWV0ZXJTeW1ib2wgb2YgY29uc3RydWN0b3JTeW1ib2wucGFyYW1ldGVyU3ltYm9scykge1xuXHRcdFx0XHRcdGNvbnN0cnVjdG9yU2NvcGUuZGVmaW5lVHlwZShwYXJhbWV0ZXJTeW1ib2wubmFtZSwgcGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5jaGVja0JvZHkoY29uc3RydWN0b3JTeW1ib2wuYm9keSwgY29uc3RydWN0b3JTY29wZSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoY29uc3QgbWV0aG9kU3ltYm9sIG9mIG9iamVjdFN5bWJvbC5pbnN0YW5jZU1ldGhvZFN5bWJvbHMudmFsdWVzKCkpIHtcblx0XHRcdFx0Y29uc3QgbWV0aG9kU2NvcGUgPSBuZXcgVHlwZVNjb3BlKGluc3RhbmNlU2NvcGUpO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5mb3JFYWNoKHR5cGVQYXJhbWV0ZXJTeW1ib2wgPT4ge1xuXHRcdFx0XHRcdG1ldGhvZFNjb3BlLmRlZmluZVR5cGVCaW5kaW5nKFxuXHRcdFx0XHRcdFx0dHlwZVBhcmFtZXRlclN5bWJvbC5uYW1lLFxuXHRcdFx0XHRcdFx0bmV3IFR5cGVWYXJpYWJsZSh0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Zm9yIChjb25zdCBwYXJhbWV0ZXJTeW1ib2wgb2YgbWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMpIHtcblx0XHRcdFx0XHRtZXRob2RTY29wZS5kZWZpbmVUeXBlKHBhcmFtZXRlclN5bWJvbC5uYW1lLCBwYXJhbWV0ZXJTeW1ib2wucGFyYW1ldGVyVHlwZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBoYXNCb2R5ID0gbWV0aG9kU3ltYm9sLmJvZHkgJiYgbWV0aG9kU3ltYm9sLmJvZHkubGVuZ3RoID4gMDtcblx0XHRcdFx0aWYgKGhhc0JvZHkpIHtcblx0XHRcdFx0XHRjb25zdCBhY3R1YWwgPSB0aGlzLmNoZWNrQm9keShtZXRob2RTeW1ib2wuYm9keSwgbWV0aG9kU2NvcGUpO1xuXHRcdFx0XHRcdHRoaXMuY2hlY2tSZXR1cm5UeXBlKG1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlLCBhY3R1YWwsIG1ldGhvZFN5bWJvbC5ub2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGNvbnN0IG1ldGhvZFN5bWJvbCBvZiBvYmplY3RTeW1ib2wuc3RhdGljTWV0aG9kU3ltYm9scy52YWx1ZXMoKSkge1xuXHRcdFx0XHRjb25zdCBzdGF0aWNTY29wZSA9IG5ldyBUeXBlU2NvcGUoaW5zdGFuY2VTY29wZSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmZvckVhY2godHlwZVBhcmFtZXRlclN5bWJvbCA9PiB7XG5cdFx0XHRcdFx0c3RhdGljU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcoXG5cdFx0XHRcdFx0XHR0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUsXG5cdFx0XHRcdFx0XHRuZXcgVHlwZVZhcmlhYmxlKHR5cGVQYXJhbWV0ZXJTeW1ib2wubmFtZSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRmb3IgKGNvbnN0IHBhcmFtZXRlclN5bWJvbCBvZiBtZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9scykge1xuXHRcdFx0XHRcdHN0YXRpY1Njb3BlLmRlZmluZVR5cGUocGFyYW1ldGVyU3ltYm9sLm5hbWUsIHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGhhc0JvZHkgPSBtZXRob2RTeW1ib2wuYm9keSAmJiBtZXRob2RTeW1ib2wuYm9keS5sZW5ndGggPiAwO1xuXHRcdFx0XHRpZiAoaGFzQm9keSkge1xuXHRcdFx0XHRcdGNvbnN0IGFjdHVhbCA9IHRoaXMuY2hlY2tCb2R5KG1ldGhvZFN5bWJvbC5ib2R5LCBzdGF0aWNTY29wZSk7XG5cdFx0XHRcdFx0dGhpcy5jaGVja1JldHVyblR5cGUobWV0aG9kU3ltYm9sLnJldHVyblR5cGUsIGFjdHVhbCwgbWV0aG9kU3ltYm9sLm5vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0ludGVyZmFjZUJvZGllcygpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IG9iamVjdFN5bWJvbCBvZiB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmFsbEludGVyZmFjZVN5bWJvbHMoKSkge1xuXHRcdFx0Y29uc3QgaW5zdGFuY2VTY29wZSA9IG5ldyBUeXBlU2NvcGUoKTtcblx0XHRcdGluc3RhbmNlU2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCA9IG9iamVjdFN5bWJvbDtcblxuXHRcdFx0b2JqZWN0U3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmZvckVhY2godHlwZVBhcmFtZXRlciA9PiB7XG5cdFx0XHRcdGluc3RhbmNlU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcoXG5cdFx0XHRcdFx0dHlwZVBhcmFtZXRlci5uYW1lLFxuXHRcdFx0XHRcdG5ldyBUeXBlVmFyaWFibGUodHlwZVBhcmFtZXRlci5uYW1lKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGZvciAoY29uc3QgbWV0aG9kU3ltYm9sIG9mIG9iamVjdFN5bWJvbC5pbnN0YW5jZU1ldGhvZFN5bWJvbHMudmFsdWVzKCkpIHtcblx0XHRcdFx0Y29uc3QgbWV0aG9kU2NvcGUgPSBuZXcgVHlwZVNjb3BlKGluc3RhbmNlU2NvcGUpO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5mb3JFYWNoKHR5cGVQYXJhbWV0ZXJTeW1ib2wgPT4ge1xuXHRcdFx0XHRcdG1ldGhvZFNjb3BlLmRlZmluZVR5cGVCaW5kaW5nKFxuXHRcdFx0XHRcdFx0dHlwZVBhcmFtZXRlclN5bWJvbC5uYW1lLFxuXHRcdFx0XHRcdFx0bmV3IFR5cGVWYXJpYWJsZSh0eXBlUGFyYW1ldGVyU3ltYm9sLm5hbWUpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Zm9yIChjb25zdCBwYXJhbWV0ZXJTeW1ib2wgb2YgbWV0aG9kU3ltYm9sLnBhcmFtZXRlclN5bWJvbHMpIHtcblx0XHRcdFx0XHRtZXRob2RTY29wZS5kZWZpbmVUeXBlKHBhcmFtZXRlclN5bWJvbC5uYW1lLCBwYXJhbWV0ZXJTeW1ib2wucGFyYW1ldGVyVHlwZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBoYXNCb2R5ID0gbWV0aG9kU3ltYm9sLmJvZHkgJiYgbWV0aG9kU3ltYm9sLmJvZHkubGVuZ3RoID4gMDtcblx0XHRcdFx0aWYgKGhhc0JvZHkpIHtcblx0XHRcdFx0XHRjb25zdCBhY3R1YWwgPSB0aGlzLmNoZWNrQm9keShtZXRob2RTeW1ib2wuYm9keSwgbWV0aG9kU2NvcGUpO1xuXHRcdFx0XHRcdHRoaXMuY2hlY2tSZXR1cm5UeXBlKG1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlLCBhY3R1YWwsIG1ldGhvZFN5bWJvbC5ub2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tDbGFzc2VzSW1wbGVtZW50cygpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IGNsYXNzU3ltYm9sIG9mIHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuYWxsQ2xhc3NTeW1ib2xzKCkpIHtcblx0XHRcdGZvciAoY29uc3QgaW50ZXJmYWNlUmVmVHlwZSBvZiBjbGFzc1N5bWJvbC5pbXBsZW1lbnRzSW50ZXJmYWNlcykge1xuXHRcdFx0XHR0aGlzLmNoZWNrSW1wbGVtZW50c0ludGVyZmFjZShjbGFzc1N5bWJvbCwgaW50ZXJmYWNlUmVmVHlwZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0ltcGxlbWVudHNJbnRlcmZhY2UoY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sLCBpbnRlcmZhY2VSZWZUeXBlOiBJbnRlcmZhY2VSZWZUeXBlKTogdm9pZCB7XG5cdFx0Y29uc3QgaW50ZXJmYWNlU3ltYm9sID0gaW50ZXJmYWNlUmVmVHlwZS5pbnRlcmZhY2VTeW1ib2w7XG5cblx0XHRjb25zdCBzdWJzdGl0dXRpb25NYXAgPSBidWlsZFR5cGVTdWJzdGl0dXRpb25NYXAoXG5cdFx0XHRpbnRlcmZhY2VTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMsXG5cdFx0XHRpbnRlcmZhY2VSZWZUeXBlLnR5cGVBcmd1bWVudHNcblx0XHQpO1xuXG5cdFx0Zm9yIChjb25zdCBpbnRlcmZhY2VNZXRob2RTeW1ib2wgb2YgaW50ZXJmYWNlU3ltYm9sLmluc3RhbmNlTWV0aG9kU3ltYm9scy52YWx1ZXMoKSkge1xuXHRcdFx0Y29uc3QgY2xhc3NNZXRob2RTeW1ib2wgPSB0aGlzLnJlc29sdmVJbnN0YW5jZU1ldGhvZGUoXG5cdFx0XHRcdGNsYXNzU3ltYm9sLFxuXHRcdFx0XHRpbnRlcmZhY2VNZXRob2RTeW1ib2wubmFtZVxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKCFjbGFzc01ldGhvZFN5bWJvbCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihcblx0XHRcdFx0XHRgQ2xhc3MgJHtjbGFzc1N5bWJvbC5uYW1lfSBkb2VzIG5vdCBpbXBsZW1lbnQgbWV0aG9kICR7aW50ZXJmYWNlTWV0aG9kU3ltYm9sLm5hbWV9IGZyb20gaW50ZXJmYWNlICR7aW50ZXJmYWNlU3ltYm9sLm5hbWV9YCxcblx0XHRcdFx0XHRjbGFzc1N5bWJvbC5ub2RlXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuY2hlY2tNZXRob2RDb21wYXRpYmlsaXR5KFxuXHRcdFx0XHRjbGFzc01ldGhvZFN5bWJvbCxcblx0XHRcdFx0aW50ZXJmYWNlTWV0aG9kU3ltYm9sLFxuXHRcdFx0XHRzdWJzdGl0dXRpb25NYXBcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja01ldGhvZENvbXBhdGliaWxpdHkoY2xhc3NNZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCwgaW50ZXJmYWNlTWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wsIHN1YnN0aXR1dGlvbk1hcDogTWFwPHN0cmluZywgVHlwZT4pOiB2b2lkIHtcblx0XHRpZiAoY2xhc3NNZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9scy5sZW5ndGggIT09IGludGVyZmFjZU1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYE1ldGhvZCAke2NsYXNzTWV0aG9kU3ltYm9sLm5hbWV9IGhhcyB3cm9uZyBwYXJhbWV0ZXIgY291bnRgKTtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGludGVyZmFjZU1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBwYXJhbWV0ZXJTeW1ib2w6IFBhcmFtZXRlclN5bWJvbCB8IG51bGwgPSBpbnRlcmZhY2VNZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9sc1tpXSB8fCBudWxsO1xuXG5cdFx0XHRpZiAoIXBhcmFtZXRlclN5bWJvbCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgTWV0aG9kICR7Y2xhc3NNZXRob2RTeW1ib2wubmFtZX0gaGFzIHRvbyBtYW55IHBhcmFtZXRlcnNgKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGV4cGVjdGVkVHlwZTogVHlwZSA9IHN1YnN0aXR1dGVUeXBlKHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlLCBzdWJzdGl0dXRpb25NYXApO1xuXG5cdFx0XHRjb25zdCBhY3R1YWxUeXBlOiBUeXBlID0gcGFyYW1ldGVyU3ltYm9sLnBhcmFtZXRlclR5cGU7XG5cblx0XHRcdGlmICghZXhwZWN0ZWRUeXBlLmFjY2VwdHMoYWN0dWFsVHlwZSkpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYFBhcmFtZXRlciAke2kgKyAxfSBvZiAke2NsYXNzTWV0aG9kU3ltYm9sLm5hbWV9IGluY29tcGF0aWJsZSB3aXRoIGludGVyZmFjZWApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IGV4cGVjdGVkUmV0dXJuOiBUeXBlID0gc3Vic3RpdHV0ZVR5cGUoaW50ZXJmYWNlTWV0aG9kU3ltYm9sLnJldHVyblR5cGUsIHN1YnN0aXR1dGlvbk1hcCk7XG5cblx0XHRpZiAoIWV4cGVjdGVkUmV0dXJuLmFjY2VwdHMoY2xhc3NNZXRob2RTeW1ib2wucmV0dXJuVHlwZSkpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBSZXR1cm4gdHlwZSBvZiAke2NsYXNzTWV0aG9kU3ltYm9sLm5hbWV9IGluY29tcGF0aWJsZSB3aXRoIGludGVyZmFjZWApO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tTdGF0ZW1lbnQobm9kZTogQVNUTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFN0YXRlbWVudFJlc3VsdCB7XG5cdFx0c3dpdGNoIChub2RlLnR5cGUpIHtcblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuUkVUVVJOOlxuXHRcdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVFJldHVybk5vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gU3RhdGVtZW50UmVzdWx0LndpdGhSZXR1cm4oXG5cdFx0XHRcdFx0XHR0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLmFyZ3VtZW50LCBzY29wZSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5WQVJJQUJMRTpcblx0XHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RWYXJpYWJsZU5vZGUpIHtcblx0XHRcdFx0XHR0aGlzLmNoZWNrVmFyaWFibGUobm9kZSwgc2NvcGUpO1xuXHRcdFx0XHRcdHJldHVybiBTdGF0ZW1lbnRSZXN1bHQubm9SZXR1cm4oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuRk9SRUFDSDpcblx0XHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RGb3JlYWNoTm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiBTdGF0ZW1lbnRSZXN1bHQud2l0aFJldHVybihcblx0XHRcdFx0XHRcdHRoaXMuY2hlY2tGb3JlYWNoKG5vZGUsIHNjb3BlKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLkVYUFJFU1NJT046XG5cdFx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNURXhwcmVzc2lvbk5vZGUpIHtcblx0XHRcdFx0XHR0aGlzLmNoZWNrRXhwcmVzc2lvbihub2RlLmV4cHIsIHNjb3BlKTtcblx0XHRcdFx0XHRyZXR1cm4gU3RhdGVtZW50UmVzdWx0Lm5vUmV0dXJuKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFN0YXRlbWVudFJlc3VsdC5ub1JldHVybigpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1ZhcmlhYmxlKG5vZGU6IEFTVFZhcmlhYmxlTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IHZvaWQge1xuXHRcdGNvbnN0IGRlY2xhcmVkVHlwZTogVHlwZSB8IG51bGwgPSBub2RlLnR5cGVBbm5vdGF0aW9uXG5cdFx0XHQ/IHRoaXMud3JhcFR5cGUobm9kZS50eXBlQW5ub3RhdGlvbiwgc2NvcGUpXG5cdFx0XHQ6IG51bGw7XG5cblx0XHRjb25zdCBhY3R1YWxUeXBlOiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5pbml0LCBzY29wZSwgZGVjbGFyZWRUeXBlKTtcblxuXHRcdGlmIChkZWNsYXJlZFR5cGUgJiYgIWRlY2xhcmVkVHlwZS5hY2NlcHRzKGFjdHVhbFR5cGUpKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgVHlwZSBtaXNtYXRjaDogJHtkZWNsYXJlZFR5cGV9IDw+ICR7YWN0dWFsVHlwZX1gLCBub2RlKTtcblx0XHR9XG5cblx0XHRzY29wZS5kZWZpbmVUeXBlKG5vZGUubmFtZSwgZGVjbGFyZWRUeXBlID8/IGFjdHVhbFR5cGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0ZvcmVhY2gobm9kZTogQVNURm9yZWFjaE5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRsZXQgaXRlcmFibGVUeXBlOiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5pdGVyYWJsZSwgc2NvcGUpO1xuXG5cdFx0aXRlcmFibGVUeXBlID0gQXV0b2JveGluZy5hdXRvYm94SWZOZWVkZWQoaXRlcmFibGVUeXBlLCB0aGlzLm9iamVjdFJlZ2lzdHJ5KTtcblxuXHRcdGlmIChpdGVyYWJsZVR5cGUgaW5zdGFuY2VvZiBDbGFzc1JlZlR5cGUgJiYgaXRlcmFibGVUeXBlLmNsYXNzU3ltYm9sLm5hbWUgPT09ICdBcnJheScpIHtcblx0XHRcdGlmIChpdGVyYWJsZVR5cGUudHlwZUFyZ3VtZW50cy5sZW5ndGggIT09IDEpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoJ0FycmF5IGluIGZvcmVhY2ggbXVzc3QgaGF2ZSBleGFjdGx5IG9uZSB0eXBlIGFyZ3VtZW50LicsIG5vZGUuaXRlcmFibGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBlbGVtZW50VHlwZTogVHlwZSB8IG51bGwgPSBpdGVyYWJsZVR5cGUudHlwZUFyZ3VtZW50c1swXSB8fCBudWxsO1xuXG5cdFx0XHRpZiAoZWxlbWVudFR5cGUgPT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoJ0FycmF5IGluIGZvcmVhY2ggbXVzdCBoYXZlIGV4YWN0bHkgb25lIHR5cGUgYXJndW1lbnQuJywgbm9kZS5pdGVyYWJsZSk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGxvb3BTY29wZSA9IG5ldyBUeXBlU2NvcGUoc2NvcGUpO1xuXHRcdFx0bG9vcFNjb3BlLmRlZmluZVR5cGUobm9kZS5pdGVyYXRvciwgZWxlbWVudFR5cGUpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy5jaGVja0JvZHkobm9kZS5ib2R5LCBsb29wU2NvcGUpO1xuXG5cdFx0fVxuXG5cdFx0dGhpcy50eXBlRXJyb3IoYGZvcmVhY2ggZXhwZWN0cyBBcnJheTxUPiwgZ290ICR7aXRlcmFibGVUeXBlLnRvU3RyaW5nKCl9YCwgbm9kZS5pdGVyYWJsZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrRXhwcmVzc2lvbihleHByOiBBU1ROb2RlIHwgbnVsbCwgc2NvcGU6IFR5cGVTY29wZSwgZXhwZWN0ZWRUeXBlOiBUeXBlIHwgbnVsbCA9IG51bGwpOiBUeXBlIHtcblx0XHRpZiAoZXhwciA9PT0gbnVsbCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoJ0V4cHJlc3Npb24gZXhwZWN0ZWQsIGdvdCBudWxsLicsIGV4cHIpO1xuXHRcdH1cblxuXHRcdHN3aXRjaCAoZXhwci50eXBlKSB7XG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLk5VTUJFUjpcblx0XHRcdFx0cmV0dXJuIFR5cGVzLk5VTUJFUjtcblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5TVFJJTkc6XG5cdFx0XHRcdHJldHVybiBUeXBlcy5TVFJJTkc7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuQk9PTEVBTjpcblx0XHRcdFx0cmV0dXJuIFR5cGVzLkJPT0xFQU47XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuTlVMTDpcblx0XHRcdFx0cmV0dXJuIFR5cGVzLk5VTEw7XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuVkRPTToge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVFZEb21Ob2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tWRG9tTm9kZShleHByKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5BUlJBWToge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVEFycmF5Tm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrQXJyYXlFeHByZXNzaW9uKGV4cHIsIHNjb3BlLCBleHBlY3RlZFR5cGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLklOREVYOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUSW5kZXhOb2RlKSB7XG5cdFx0XHRcdFx0Y29uc3Qgb2JqZWN0VHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKGV4cHIub2JqZWN0LCBzY29wZSk7XG5cdFx0XHRcdFx0Y29uc3QgaW5kZXggPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihleHByLmluZGV4LCBzY29wZSk7XG5cblx0XHRcdFx0XHRpZiAob2JqZWN0VHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG9iamVjdFR5cGUudHlwZUFyZ3VtZW50c1swXSB8fCBUeXBlcy5NSVhFRDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGluZGV4ICR7b2JqZWN0VHlwZS5uYW1lfSB3aXRoICR7aW5kZXgubmFtZX1gLCBleHByKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5VTkFSWToge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVFVuYXJ5Tm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrVW5hcnlFeHByZXNzaW9uKGV4cHIsIHNjb3BlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5NRU1CRVI6IHtcblx0XHRcdFx0aWYgKGV4cHIgaW5zdGFuY2VvZiBBU1RNZW1iZXJOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tNZW1iZXJFeHByZXNzaW9uKGV4cHIsIHNjb3BlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBBU1ROb2RlVHlwZS5USElTOiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrVGhpc0V4cHJlc3Npb24oZXhwciwgc2NvcGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLklERU5USUZJRVI6XG5cdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrSWRlbnRpZmllckV4cHJlc3Npb24oZXhwciwgc2NvcGUpO1xuXG5cdFx0XHRjYXNlIEFTVE5vZGVUeXBlLk5FVzoge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVE5ld05vZGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja05ld0V4cHJlc3Npb24oZXhwciwgc2NvcGUsIGV4cGVjdGVkVHlwZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuQklOQVJZOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUQmluYXJ5Tm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrQmluYXJ5RXhwcmVzc2lvbihleHByLCBzY29wZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuTEFNQkRBOiB7XG5cdFx0XHRcdGlmIChleHByIGluc3RhbmNlb2YgQVNUTGFtYmRhTm9kZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrTGFtYmRhRXhwcmVzc2lvbihleHByLCBzY29wZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgQVNUTm9kZVR5cGUuQ0FMTDoge1xuXHRcdFx0XHRpZiAoZXhwciBpbnN0YW5jZW9mIEFTVENhbGxOb2RlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tDYWxsRXhwcmVzc2lvbihleHByLCBzY29wZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFR5cGVzLk1JWEVEO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0JpbmFyeUV4cHJlc3Npb24oZXhwcjogQVNUQmluYXJ5Tm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGNvbnN0IGxlZnQ6IFR5cGUgPSB0aGlzLmNoZWNrRXhwcmVzc2lvbihleHByLmxlZnQsIHNjb3BlKTtcblx0XHRjb25zdCByaWdodDogVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKGV4cHIucmlnaHQsIHNjb3BlKTtcblx0XHRjb25zdCBvcDogc3RyaW5nID0gZXhwci5vcGVyYXRvcjtcblxuXHRcdGlmIChsZWZ0IGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlICYmIHJpZ2h0IGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0XHRpZiAobGVmdC5hY2NlcHRzKHJpZ2h0KSkge1xuXHRcdFx0XHRyZXR1cm4gbGVmdDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoR1JBTU1BUi5BUklUSE1FVElDLmluY2x1ZGVzKG9wKSkge1xuXHRcdFx0aWYgKGxlZnQuYWNjZXB0cyhUeXBlcy5OVU1CRVIpICYmIHJpZ2h0LmFjY2VwdHMoVHlwZXMuTlVNQkVSKSkge1xuXHRcdFx0XHRyZXR1cm4gVHlwZXMuTlVNQkVSO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGxlZnQuYWNjZXB0cyhUeXBlcy5TVFJJTkcpIHx8IHJpZ2h0LmFjY2VwdHMoVHlwZXMuU1RSSU5HKSkge1xuXHRcdFx0XHRyZXR1cm4gVHlwZXMuU1RSSU5HO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYEFyaXRobWV0aWMgb3BlcmF0b3IgJyR7b3B9JyByZXF1aXJlcyBudW1iZXJzYCwgZXhwcik7XG5cdFx0fVxuXG5cdFx0aWYgKEdSQU1NQVIuQ09NUEFSSVNPTi5pbmNsdWRlcyhvcCkpIHtcblx0XHRcdGlmIChsZWZ0LmFjY2VwdHMoVHlwZXMuTlVNQkVSKSAmJiByaWdodC5hY2NlcHRzKFR5cGVzLk5VTUJFUikpIHtcblx0XHRcdFx0cmV0dXJuIFR5cGVzLkJPT0xFQU47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQ29tcGFyaXNvbiAnJHtvcH0nIHJlcXVpcmVzIG51bWJlcnNgLCBleHByKTtcblx0XHR9XG5cblx0XHRpZiAoR1JBTU1BUi5FUVVBTElUWS5pbmNsdWRlcyhvcCkpIHtcblx0XHRcdGlmIChsZWZ0LmFjY2VwdHMocmlnaHQpKSB7XG5cdFx0XHRcdHJldHVybiBUeXBlcy5CT09MRUFOO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBjb21wYXJlICR7bGVmdC5uYW1lfSB3aXRoICR7cmlnaHQubmFtZX1gLCBleHByKTtcblx0XHR9XG5cblx0XHRpZiAoR1JBTU1BUi5MT0dJQ0FMLmluY2x1ZGVzKG9wKSkge1xuXHRcdFx0aWYgKGxlZnQuYWNjZXB0cyhUeXBlcy5CT09MRUFOKSAmJiByaWdodC5hY2NlcHRzKFR5cGVzLkJPT0xFQU4pKSB7XG5cdFx0XHRcdHJldHVybiBUeXBlcy5CT09MRUFOO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYExvZ2ljYWwgb3BlcmF0b3IgJyR7b3B9JyByZXF1aXJlcyBib29sZWFuc2AsIGV4cHIpO1xuXHRcdH1cblxuXHRcdHRoaXMudHlwZUVycm9yKGBJbnZhbGlkIGJpbmFyeSBvcGVyYXRpb25gLCBleHByKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tGaWVsZEFjY2Vzcyhub2RlOiBBU1RNZW1iZXJOb2RlLCBjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wsIGZpZWxkU3ltYm9sOiBGaWVsZFN5bWJvbCwgc2NvcGU6IFR5cGVTY29wZSk6IHZvaWQge1xuXHRcdGlmIChmaWVsZFN5bWJvbC5pc1B1YmxpYykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICghc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBhY2Nlc3MgcHJpdmF0ZSBtZW1iZXIgJHtub2RlLnByb3BlcnR5fSBvZiAke2NsYXNzU3ltYm9sLm5hbWV9YCwgbm9kZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgIT09IGZpZWxkU3ltYm9sLm93bmVyKSB7XG5cdFx0XHRpZiAoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCBpbnN0YW5jZW9mIENsYXNzU3ltYm9sXG5cdFx0XHRcdCYmIHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wuc3VwZXJDbGFzc1N5bWJvbCAhPT0gZmllbGRTeW1ib2wub3duZXIpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBhY2Nlc3MgcHJpdmF0ZSBtZW1iZXIgJHtub2RlLnByb3BlcnR5fSBvZiAke2NsYXNzU3ltYm9sLm5hbWV9YCwgbm9kZSk7XG5cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrSW5zdGFuY2VNZXRob2RBY2Nlc3Mobm9kZTogQVNUTWVtYmVyTm9kZSwgY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sLCBtZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCwgc2NvcGU6IFR5cGVTY29wZSk6IHZvaWQge1xuXHRcdGlmIChtZXRob2RTeW1ib2wuaXNQdWJsaWMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIXNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgYWNjZXNzIHByaXZhdGUgbWV0aG9kICR7bm9kZS5wcm9wZXJ0eX0gb2YgJHtjbGFzc1N5bWJvbC5uYW1lfWAsIG5vZGUpO1xuXHRcdH1cblxuXHRcdGlmIChzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sICE9PSBtZXRob2RTeW1ib2wub3duZXIpIHtcblx0XHRcdGlmIChzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sIGluc3RhbmNlb2YgQ2xhc3NTeW1ib2xcblx0XHRcdFx0JiYgc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbC5zdXBlckNsYXNzU3ltYm9sICE9PSBtZXRob2RTeW1ib2wub3duZXIpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBhY2Nlc3MgcHJpdmF0ZSBtZXRob2QgJHtub2RlLnByb3BlcnR5fSBvZiAke2NsYXNzU3ltYm9sLm5hbWV9YCwgbm9kZSk7XG5cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrU3RhdGljTWV0aG9kQWNjZXNzKGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCwgbWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wsIHNjb3BlOiBUeXBlU2NvcGUpOiB2b2lkIHtcblx0XHRpZiAoIW1ldGhvZFN5bWJvbC5pc1N0YXRpYykge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBjYWxsIGluc3RhbmNlIG1ldGhvZCAke2NsYXNzU3ltYm9sLm5hbWV9LiR7bWV0aG9kU3ltYm9sLm5hbWV9IGFzIHN0YXRpYyBtZXRob2RgKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAobWV0aG9kU3ltYm9sLmlzUHVibGljKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCFzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGFjY2VzcyBwcml2YXRlIG1ldGhvZCAke21ldGhvZFN5bWJvbC5uYW1lfSBvZiAke2NsYXNzU3ltYm9sLm5hbWV9YCxcblx0XHRcdCAgICAgICAgICAgICAgIG1ldGhvZFN5bWJvbC5ub2RlKTtcblx0XHR9XG5cblx0XHRpZiAoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCAhPT0gbWV0aG9kU3ltYm9sLm93bmVyKSB7XG5cdFx0XHRpZiAoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCBpbnN0YW5jZW9mIENsYXNzU3ltYm9sXG5cdFx0XHRcdCYmIHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wuc3VwZXJDbGFzc1N5bWJvbCAhPT0gbWV0aG9kU3ltYm9sLm93bmVyKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgYWNjZXNzIHByaXZhdGUgbWV0aG9kICR7bWV0aG9kU3ltYm9sLm5hbWV9IG9mICR7Y2xhc3NTeW1ib2wubmFtZX1gLFxuXHRcdFx0XHQgICAgICAgICAgICAgICBtZXRob2RTeW1ib2wubm9kZSk7XG5cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrTWVtYmVyRXhwcmVzc2lvbihub2RlOiBBU1RNZW1iZXJOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0Y29uc3Qgb2JqZWN0VHlwZTogVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKG5vZGUub2JqZWN0LCBzY29wZSk7XG5cblx0XHRpZiAob2JqZWN0VHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSkge1xuXHRcdFx0Y29uc3QgY2xhc3NTeW1ib2w6IENsYXNzU3ltYm9sID0gb2JqZWN0VHlwZS5jbGFzc1N5bWJvbDtcblxuXHRcdFx0Y29uc3QgaW5zdGFuY2VGaWVsZFN5bWJvbDogRmllbGRTeW1ib2wgfCBudWxsID0gY2xhc3NTeW1ib2wucmVzb2x2ZUluc3RhbmNlRmllbGRTeW1ib2wobm9kZS5wcm9wZXJ0eSk7XG5cdFx0XHRpZiAoaW5zdGFuY2VGaWVsZFN5bWJvbCkge1xuXHRcdFx0XHR0aGlzLmNoZWNrRmllbGRBY2Nlc3Mobm9kZSwgY2xhc3NTeW1ib2wsIGluc3RhbmNlRmllbGRTeW1ib2wsIHNjb3BlKTtcblx0XHRcdFx0cmV0dXJuIGluc3RhbmNlRmllbGRTeW1ib2wuZmllbGRUeXBlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzdGF0aWNGaWVsZFN5bWJvbDogRmllbGRTeW1ib2wgfCBudWxsID0gY2xhc3NTeW1ib2wucmVzb2x2ZVN0YXRpY0ZpZWxkU3ltYm9sKG5vZGUucHJvcGVydHkpO1xuXHRcdFx0aWYgKHN0YXRpY0ZpZWxkU3ltYm9sKSB7XG5cdFx0XHRcdHRoaXMuY2hlY2tGaWVsZEFjY2Vzcyhub2RlLCBjbGFzc1N5bWJvbCwgc3RhdGljRmllbGRTeW1ib2wsIHNjb3BlKTtcblx0XHRcdFx0cmV0dXJuIHN0YXRpY0ZpZWxkU3ltYm9sLmZpZWxkVHlwZTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFVua25vd24gbWVtYmVyICR7bm9kZS5wcm9wZXJ0eX1gLCBub2RlKTtcblx0XHR9XG5cblx0XHR0aGlzLnR5cGVFcnJvcihcIkNhbm5vdCBhY2Nlc3MgbWVtYmVyIG9mIG5vbi1vYmplY3RcIiwgbm9kZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrVGhpc0V4cHJlc3Npb24obm9kZTogQVNUTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IENsYXNzUmVmVHlwZSB7XG5cdFx0aWYgKHNjb3BlLmN1cnJlbnRPYmplY3RTeW1ib2wgaW5zdGFuY2VvZiBDbGFzc1N5bWJvbCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDbGFzc1JlZlR5cGUoc2NvcGUuY3VycmVudE9iamVjdFN5bWJvbCk7XG5cdFx0fVxuXHRcdHRoaXMudHlwZUVycm9yKCd0aGlzIG91dHNpZGUgb2YgY2xhc3MnLCBub2RlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlOiBBU1ROb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0aWYgKHNjb3BlLmhhc1R5cGUobm9kZS5uYW1lKSkge1xuXHRcdFx0cmV0dXJuIHNjb3BlLmdldFR5cGUobm9kZS5uYW1lKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKG5vZGUubmFtZSkpIHtcblx0XHRcdHJldHVybiBuZXcgQ2xhc3NSZWZUeXBlKHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2wobm9kZS5uYW1lKSk7XG5cdFx0fVxuXHRcdHRoaXMudHlwZUVycm9yKGBVbmRlZmluZWQgaWRlbnRpZmllciAke25vZGUubmFtZX1gLCBub2RlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tOZXdFeHByZXNzaW9uKG5vZGU6IEFTVE5ld05vZGUsIHNjb3BlOiBUeXBlU2NvcGUsIGV4cGVjdGVkVHlwZTogVHlwZSB8IG51bGwgPSBudWxsKTogQ2xhc3NSZWZUeXBlIHtcblx0XHRjb25zdCBjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wgPSB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKG5vZGUubmFtZSk7XG5cblx0XHRsZXQgaW5zdGFuY2VUeXBlO1xuXHRcdGlmIChub2RlLnR5cGVBbm5vdGF0aW9uLnR5cGVBcmd1bWVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0Y29uc3QgdHlwZUFyZ3VtZW50cyA9IG5vZGVcblx0XHRcdFx0LnR5cGVBbm5vdGF0aW9uXG5cdFx0XHRcdC50eXBlQXJndW1lbnRzXG5cdFx0XHRcdC5tYXAodHlwZUFyZ3VtZW50ID0+IHRoaXMud3JhcFR5cGUodHlwZUFyZ3VtZW50LCBzY29wZSkpO1xuXG5cdFx0XHRpZiAodHlwZUFyZ3VtZW50cy5sZW5ndGggIT09IGNsYXNzU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgV3JvbmcgbnVtYmVyIG9mIHR5cGUgYXJndW1lbnRzYCwgbm9kZSk7XG5cdFx0XHR9XG5cblx0XHRcdGluc3RhbmNlVHlwZSA9IG5ldyBDbGFzc1JlZlR5cGUoY2xhc3NTeW1ib2wsIHR5cGVBcmd1bWVudHMpO1xuXHRcdH0gZWxzZSBpZiAoZXhwZWN0ZWRUeXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0XHRpbnN0YW5jZVR5cGUgPSBleHBlY3RlZFR5cGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGluc3RhbmNlVHlwZSA9IG5ldyBDbGFzc1JlZlR5cGUoXG5cdFx0XHRcdGNsYXNzU3ltYm9sLFxuXHRcdFx0XHRjbGFzc1N5bWJvbC50eXBlUGFyYW1ldGVyU3ltYm9scy5tYXAoKCkgPT4gVHlwZXMuTUlYRUQpXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmIChjbGFzc1N5bWJvbC5jb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbCkge1xuXHRcdFx0dGhpcy5jaGVja0NhbGxBcmd1bWVudHMoY2xhc3NTeW1ib2wuY29uc3RydWN0b3JNZXRob2RTeW1ib2wsIG5vZGUuYXJndW1lbnRzLCBzY29wZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGV4cGVjdGVkVHlwZSAmJiAhZXhwZWN0ZWRUeXBlLmFjY2VwdHMoaW5zdGFuY2VUeXBlKSkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoYFR5cGUgbWlzbWF0Y2g6ICR7ZXhwZWN0ZWRUeXBlfSA8PiAke2luc3RhbmNlVHlwZX1gLCBub2RlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaW5zdGFuY2VUeXBlO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0FycmF5RXhwcmVzc2lvbihub2RlOiBBU1RBcnJheU5vZGUsIHNjb3BlOiBUeXBlU2NvcGUsIGV4cGVjdGVkVHlwZTogVHlwZSB8IG51bGwgPSBudWxsKTogQ2xhc3NSZWZUeXBlIHtcblxuXHRcdGlmIChub2RlLmVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0aWYgKGV4cGVjdGVkVHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSkge1xuXHRcdFx0XHRleHBlY3RlZFR5cGUgPSBleHBlY3RlZFR5cGUudHlwZUFyZ3VtZW50c1swXSB8fCBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcy5uZXdBcnJheVR5cGVPZihleHBlY3RlZFR5cGUgfHwgVHlwZXMuTUlYRUQpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNsYXNzUmVmTmFtZSA9IFByaW1pdGl2ZUNsYXNzVHlwZXMuZ2V0Q2xhc3NSZWZOYW1lKFByaW1pdGl2ZUNsYXNzVHlwZXMuQVJSQVkpO1xuXG5cdFx0bGV0IGV4cGVjdGVkVHlwZU9mSXRlbTogVHlwZTtcblx0XHRpZiAoZXhwZWN0ZWRUeXBlIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlICYmIGV4cGVjdGVkVHlwZS5jbGFzc1N5bWJvbC5uYW1lID09PSBjbGFzc1JlZk5hbWUpIHtcblx0XHRcdGV4cGVjdGVkVHlwZU9mSXRlbSA9IGV4cGVjdGVkVHlwZS50eXBlQXJndW1lbnRzWzBdIHx8IFR5cGVzLk1JWEVEO1xuXHRcdH0gZWxzZSBpZiAobm9kZS5lbGVtZW50c1swXSkge1xuXHRcdFx0ZXhwZWN0ZWRUeXBlT2ZJdGVtID0gdGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5lbGVtZW50c1swXSwgc2NvcGUsIGV4cGVjdGVkVHlwZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKCdBcnJheSBleHByZXNzaW9uIG11c3QgaGF2ZSBhdCBsZWFzdCBvbmUgZWxlbWVudCcsIG5vZGUpO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgaXRlbSBvZiBub2RlLmVsZW1lbnRzKSB7XG5cdFx0XHRjb25zdCBhY3R1YWxUeXBlT2ZJdGVtOiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24oaXRlbSwgc2NvcGUsIGV4cGVjdGVkVHlwZU9mSXRlbSk7XG5cdFx0XHRpZiAoIWV4cGVjdGVkVHlwZU9mSXRlbS5hY2NlcHRzKGFjdHVhbFR5cGVPZkl0ZW0pKSB7XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKFxuXHRcdFx0XHRcdGBBcnJheSBlbGVtZW50cyBtdXN0IGhhdmUgc2FtZSB0eXBlLCBnb3QgJHtleHBlY3RlZFR5cGVPZkl0ZW19IGFuZCAke2FjdHVhbFR5cGVPZkl0ZW19YCxcblx0XHRcdFx0XHRub2RlXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMubmV3QXJyYXlUeXBlT2YoZXhwZWN0ZWRUeXBlT2ZJdGVtKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tVbmFyeUV4cHJlc3Npb24obm9kZTogQVNUVW5hcnlOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0Y29uc3Qgb3BlcmFuZDogVHlwZSA9IHRoaXMuY2hlY2tFeHByZXNzaW9uKG5vZGUuYXJndW1lbnQsIHNjb3BlKTtcblx0XHRjb25zdCBvcDogc3RyaW5nID0gbm9kZS5vcGVyYXRvcjtcblxuXHRcdGlmIChvcGVyYW5kIGluc3RhbmNlb2YgQ2xhc3NSZWZUeXBlKSB7XG5cdFx0XHRyZXR1cm4gb3BlcmFuZDtcblx0XHR9XG5cblx0XHRzd2l0Y2ggKG9wKSB7XG5cdFx0XHRjYXNlIEdSQU1NQVIuRVhDTEFNQVRJT05fTUFSSzoge1xuXHRcdFx0XHRpZiAob3BlcmFuZC5lcXVhbHMoVHlwZXMuQk9PTEVBTikpIHtcblx0XHRcdFx0XHRyZXR1cm4gVHlwZXMuQk9PTEVBTjtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgVW5hcnkgJyEnIHJlcXVpcmVzIGJvb2xlYW4sIGdvdCAke29wZXJhbmQubmFtZX1gLCBub2RlKTtcblx0XHRcdH1cblx0XHRcdGNhc2UgR1JBTU1BUi5NSU5VUzoge1xuXHRcdFx0XHRpZiAob3BlcmFuZC5lcXVhbHMoVHlwZXMuTlVNQkVSKSkge1xuXHRcdFx0XHRcdHJldHVybiBUeXBlcy5CT09MRUFOO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBVbmFyeSAnLScgcmVxdWlyZXMgbnVtYmVyLCBnb3QgJHtvcGVyYW5kLm5hbWV9YCwgbm9kZSk7XG5cdFx0XHR9XG5cdFx0XHRjYXNlIEdSQU1NQVIuUExVUzoge1xuXHRcdFx0XHRpZiAob3BlcmFuZC5lcXVhbHMoVHlwZXMuTlVNQkVSKSkge1xuXHRcdFx0XHRcdHJldHVybiBUeXBlcy5CT09MRUFOO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMudHlwZUVycm9yKGBVbmFyeSAnKycgcmVxdWlyZXMgbnVtYmVyLCBnb3QgJHtvcGVyYW5kLm5hbWV9YCwgbm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMudHlwZUVycm9yKGBJbnZhbGlkIHVuYXJ5IG9wZXJhdG9yICR7b3B9YCwgbm9kZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrTGFtYmRhRXhwcmVzc2lvbihub2RlOiBBU1RMYW1iZGFOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogTGFtYmRhVHlwZSB7XG5cdFx0Y29uc3QgbGFtYmRhU2NvcGUgPSBuZXcgVHlwZVNjb3BlKHNjb3BlKTtcblx0XHRjb25zdCBwYXJhbWV0ZXJzOiBQYXJhbWV0ZXJTeW1ib2xbXSA9IG5vZGUucGFyYW1ldGVycy5tYXAoKHBhcmFtZXRlck5vZGU6IEFTVFBhcmFtZXRlck5vZGUpOiBQYXJhbWV0ZXJTeW1ib2wgPT4ge1xuXHRcdFx0Y29uc3QgcGFyYW1ldGVyU3ltYm9sOiBQYXJhbWV0ZXJTeW1ib2wgPSB0aGlzLnBhcmFtZXRlck5vZGVUb1N5bWJvbChwYXJhbWV0ZXJOb2RlKTtcblxuXHRcdFx0bGFtYmRhU2NvcGUuZGVmaW5lVHlwZShwYXJhbWV0ZXJOb2RlLm5hbWUsIHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlKTtcblxuXHRcdFx0cmV0dXJuIHBhcmFtZXRlclN5bWJvbDtcblx0XHR9KTtcblxuXHRcdGlmIChub2RlLmNoaWxkcmVuWzBdKSB7XG5cdFx0XHRyZXR1cm4gbmV3IExhbWJkYVR5cGUocGFyYW1ldGVycywgdGhpcy5jaGVja0V4cHJlc3Npb24obm9kZS5jaGlsZHJlblswXSwgbGFtYmRhU2NvcGUpKTtcblx0XHR9XG5cblx0XHR0aGlzLnR5cGVFcnJvcignTGFtYmRhIGV4cHJlc3Npb24gbXVzdCBoYXZlIGEgcmV0dXJuIHR5cGUnLCBub2RlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tDYWxsRXhwcmVzc2lvbihub2RlOiBBU1RDYWxsTm9kZSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGNvbnN0IGNhbGxlZSA9IG5vZGUuY2FsbGVlO1xuXG5cdFx0aWYgKGNhbGxlZS50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSICYmIGNhbGxlZS5uYW1lID09PSBHUkFNTUFSLlNVUEVSKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jaGVja1N1cGVyQ29uc3RydWN0b3JDYWxsKG5vZGUsIHNjb3BlKTtcblx0XHR9XG5cblx0XHQvLyBDbGFzcy5tZXRob2QoKVxuXHRcdGlmIChjYWxsZWUgaW5zdGFuY2VvZiBBU1RNZW1iZXJOb2RlXG5cdFx0XHQmJiBjYWxsZWUub2JqZWN0LnR5cGUgPT09IEFTVE5vZGVUeXBlLklERU5USUZJRVJcblx0XHRcdCYmIHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuaGFzU3ltYm9sKGNhbGxlZS5vYmplY3QubmFtZSlcblx0XHQpIHtcblx0XHRcdHJldHVybiB0aGlzLmNoZWNrU3RhdGljQ2FsbChcblx0XHRcdFx0Y2FsbGVlLm9iamVjdC5uYW1lLFxuXHRcdFx0XHRjYWxsZWUucHJvcGVydHksXG5cdFx0XHRcdG5vZGUuYXJndW1lbnRzLFxuXHRcdFx0XHRzY29wZVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBleHByLm1ldGhvZCgpXG5cdFx0aWYgKGNhbGxlZSBpbnN0YW5jZW9mIEFTVE1lbWJlck5vZGUpIHtcblx0XHRcdHJldHVybiB0aGlzLmNoZWNrSW5zdGFuY2VDYWxsKGNhbGxlZSwgbm9kZS5hcmd1bWVudHMsIHNjb3BlKTtcblx0XHR9XG5cblx0XHRpZiAoY2FsbGVlIGluc3RhbmNlb2YgQVNUTGFtYmRhTm9kZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tMYW1iZGFDYWxsKHRoaXMuY2hlY2tMYW1iZGFFeHByZXNzaW9uKGNhbGxlZSwgc2NvcGUpLCBub2RlLmFyZ3VtZW50cywgc2NvcGUpO1xuXHRcdH1cblxuXHRcdC8vIElkZW50aWZpZXI6IFZhcmlhYmxlIC8gTGFtYmRhXG5cdFx0aWYgKGNhbGxlZS50eXBlID09PSBBU1ROb2RlVHlwZS5JREVOVElGSUVSKSB7XG5cdFx0XHRpZiAoc2NvcGUuaGFzVHlwZShjYWxsZWUubmFtZSkpIHtcblx0XHRcdFx0Y29uc3QgdHlwZSA9IHNjb3BlLmdldFR5cGUoY2FsbGVlLm5hbWUpO1xuXHRcdFx0XHRpZiAodHlwZSBpbnN0YW5jZW9mIExhbWJkYVR5cGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0xhbWJkYUNhbGwodHlwZSwgbm9kZS5hcmd1bWVudHMsIHNjb3BlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNhbGwgbm9uLWZ1bmN0aW9uICR7Y2FsbGVlLm5hbWV9YCwgbm9kZSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZhbGxiYWNrOiBnbG9iYWxlIEZ1bmt0aW9uXG5cdFx0XHRyZXR1cm4gdGhpcy5jaGVja0Z1bmN0aW9uQ2FsbChjYWxsZWUubmFtZSwgbm9kZS5hcmd1bWVudHMsIHNjb3BlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gVHlwZXMuTUlYRUQ7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrU3VwZXJDb25zdHJ1Y3RvckNhbGwobm9kZTogQVNUQ2FsbE5vZGUsIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRjb25zdCBjdXJyZW50Q2xhc3MgPSBzY29wZS5jdXJyZW50T2JqZWN0U3ltYm9sO1xuXG5cdFx0aWYgKCEoY3VycmVudENsYXNzIGluc3RhbmNlb2YgQ2xhc3NTeW1ib2wpKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcignc3VwZXIoKSB1c2VkIG91dHNpZGUgb2YgY2xhc3MnLCBub2RlKTtcblx0XHR9XG5cblx0XHRpZiAoIWN1cnJlbnRDbGFzcy5zdXBlckNsYXNzKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcignc3VwZXIoKSB1c2VkIG91dHNpZGUgb2YgY2xhc3MgaGllcmFyY2h5Jywgbm9kZSk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc3VwZXJTeW1ib2w6IENsYXNzU3ltYm9sID0gdGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5nZXRDbGFzc1N5bWJvbChjdXJyZW50Q2xhc3Muc3VwZXJDbGFzcyk7XG5cdFx0aWYgKCFzdXBlclN5bWJvbC5jb25zdHJ1Y3Rvck1ldGhvZFN5bWJvbCkge1xuXHRcdFx0aWYgKG5vZGUuYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoJ1N1cGVyIGNvbnN0cnVjdG9yIHRha2VzIG5vIGFyZ3VtZW50cycsIG5vZGUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIFR5cGVzLlZPSUQ7XG5cdFx0fVxuXG5cdFx0dGhpcy5jaGVja0NhbGxBcmd1bWVudHMoc3VwZXJTeW1ib2wuY29uc3RydWN0b3JNZXRob2RTeW1ib2wsIG5vZGUuYXJndW1lbnRzLCBzY29wZSk7XG5cblx0XHRyZXR1cm4gVHlwZXMuVk9JRDtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tDYWxsT25OdWxsT2JqZWN0VHlwZShvYmplY3RUeXBlOiBUeXBlLCBub2RlOiBBU1ROb2RlKTogdm9pZCB7XG5cdFx0aWYgKG9iamVjdFR5cGUuZXF1YWxzKFR5cGVzLk5VTEwpKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNhbGwgbWV0aG9kIG9uIG51bGxgLCBub2RlKTtcblx0XHR9XG5cdFx0aWYgKG9iamVjdFR5cGUgaW5zdGFuY2VvZiBOdWxsYWJsZVR5cGUpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBDYW5ub3QgY2FsbCBtZXRob2Qgb24gbnVsbGFibGUgdHlwZSAke29iamVjdFR5cGV9YCwgbm9kZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0luc3RhbmNlQ2FsbChjYWxsZWU6IEFTVE1lbWJlck5vZGUsIGNhbGxBcmd1bWVudHM6IEFTVE5vZGVbXSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGxldCBvYmplY3RUeXBlOiBUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24oY2FsbGVlLm9iamVjdCwgc2NvcGUpO1xuXG5cdFx0b2JqZWN0VHlwZSA9IEF1dG9ib3hpbmcuYXV0b2JveElmTmVlZGVkKG9iamVjdFR5cGUsIHRoaXMub2JqZWN0UmVnaXN0cnkpO1xuXG5cdFx0dGhpcy5jaGVja0NhbGxPbk51bGxPYmplY3RUeXBlKG9iamVjdFR5cGUsIGNhbGxlZSk7XG5cblx0XHRpZiAob2JqZWN0VHlwZSBpbnN0YW5jZW9mIENsYXNzUmVmVHlwZSkge1xuXHRcdFx0Y29uc3QgbWV0aG9kU3ltYm9sOiBNZXRob2RTeW1ib2wgPSB0aGlzLnJlc29sdmVJbnN0YW5jZU1ldGhvZGUoXG5cdFx0XHRcdG9iamVjdFR5cGUuY2xhc3NTeW1ib2wsXG5cdFx0XHRcdGNhbGxlZS5wcm9wZXJ0eVxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKG1ldGhvZFN5bWJvbC5pc1N0YXRpYykge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNhbGwgc3RhdGljIG1ldGhvZCAke2NhbGxlZS5wcm9wZXJ0eX0gb24gaW5zdGFuY2Ugb2YgJHtjYWxsZWUub2JqZWN0Lm5hbWV9YCxcblx0XHRcdFx0ICAgICAgICAgICAgICAgY2FsbGVlKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5jaGVja0luc3RhbmNlTWV0aG9kQWNjZXNzKGNhbGxlZSwgb2JqZWN0VHlwZS5jbGFzc1N5bWJvbCwgbWV0aG9kU3ltYm9sLCBzY29wZSk7XG5cblx0XHRcdGNvbnN0IG93bmVyOiBDbGFzc1N5bWJvbCB8IEludGVyZmFjZVN5bWJvbCB8IG51bGwgPSBtZXRob2RTeW1ib2wub3duZXI7XG5cblx0XHRcdGlmIChvd25lciA9PT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ2Fubm90IGNhbGwgbWV0aG9kIG9uIG5vbi1vYmplY3RgLCBjYWxsZWUpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzdWJzdGl0dXRpb25NYXA6IE1hcDxzdHJpbmcsIFR5cGU+ID0gYnVpbGRUeXBlU3Vic3RpdHV0aW9uTWFwKFxuXHRcdFx0XHRvd25lci50eXBlUGFyYW1ldGVyU3ltYm9scyxcblx0XHRcdFx0b2JqZWN0VHlwZS50eXBlQXJndW1lbnRzXG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLmNoZWNrQ2FsbEFyZ3VtZW50cyhtZXRob2RTeW1ib2wsIGNhbGxBcmd1bWVudHMsIHNjb3BlLCBzdWJzdGl0dXRpb25NYXApO1xuXG5cdFx0XHRyZXR1cm4gc3Vic3RpdHV0ZVR5cGUobWV0aG9kU3ltYm9sLnJldHVyblR5cGUsIHN1YnN0aXR1dGlvbk1hcCk7XG5cdFx0fVxuXG5cdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCBjYWxsIG1ldGhvZCBvbiBub24tb2JqZWN0YCwgY2FsbGVlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tTdGF0aWNDYWxsKGNsYXNzTmFtZTogc3RyaW5nLCBtZXRob2ROYW1lOiBzdHJpbmcsIGNhbGxBcmd1bWVudHM6IEFTVE5vZGVbXSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXHRcdGNvbnN0IGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCA9IHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2woY2xhc3NOYW1lKTtcblxuXHRcdGNvbnN0IG1ldGhvZFN5bWJvbDogTWV0aG9kU3ltYm9sIHwgbnVsbCA9IGNsYXNzU3ltYm9sLnN0YXRpY01ldGhvZFN5bWJvbHMuZ2V0KG1ldGhvZE5hbWUpIHx8IG51bGw7XG5cdFx0aWYgKCFtZXRob2RTeW1ib2wpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBVbmtub3duIHN0YXRpYyBtZXRob2QgJHtjbGFzc05hbWV9LiR7bWV0aG9kTmFtZX1gKTtcblx0XHR9XG5cblx0XHR0aGlzLmNoZWNrU3RhdGljTWV0aG9kQWNjZXNzKGNsYXNzU3ltYm9sLCBtZXRob2RTeW1ib2wsIHNjb3BlKVxuXG5cdFx0dGhpcy5jaGVja0NhbGxBcmd1bWVudHMobWV0aG9kU3ltYm9sLCBjYWxsQXJndW1lbnRzLCBzY29wZSk7XG5cblx0XHRyZXR1cm4gbWV0aG9kU3ltYm9sLnJldHVyblR5cGU7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrTGFtYmRhQ2FsbChsYW1iZGE6IExhbWJkYVR5cGUsIGNhbGxBcmd1bWVudHM6IEFTVE5vZGVbXSwgc2NvcGU6IFR5cGVTY29wZSk6IFR5cGUge1xuXG5cdFx0dGhpcy5jaGVja0NhbGxBcmd1bWVudHMobGFtYmRhLCBjYWxsQXJndW1lbnRzLCBzY29wZSk7XG5cblx0XHRyZXR1cm4gbGFtYmRhLnJldHVyblR5cGU7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrRnVuY3Rpb25DYWxsKG5hbWU6IHN0cmluZywgY2FsbEFyZ3VtZW50czogQVNUTm9kZVtdLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0aWYgKCFnbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeS5oYXMobmFtZSkpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBVbmtub3duIGZ1bmN0aW9uICR7bmFtZX1gKTtcblx0XHR9XG5cblx0XHRjb25zdCBuYXRpdmVGdW5jdGlvbjogTmF0aXZlRnVuY3Rpb24gPSBnbG9iYWxGdW5jdGlvblR5cGVSZWdpc3RyeS5nZXQobmFtZSk7XG5cblx0XHR0aGlzLmNoZWNrQ2FsbEFyZ3VtZW50cyhuYXRpdmVGdW5jdGlvbiwgY2FsbEFyZ3VtZW50cywgc2NvcGUpO1xuXG5cdFx0cmV0dXJuIG5hdGl2ZUZ1bmN0aW9uLnJldHVyblR5cGVcblx0XHRcdD8gdGhpcy53cmFwVHlwZShuYXRpdmVGdW5jdGlvbi5yZXR1cm5UeXBlLCBzY29wZSlcblx0XHRcdDogVHlwZXMuVk9JRDtcblx0fVxuXG5cdHByaXZhdGUgcGFyYW1ldGVyc1N5bWJvbHNGcm9tQ2FsbGFibGVTeW1ib2woY2FsbGFibGVTeW1ib2w6IE1ldGhvZFN5bWJvbCB8IExhbWJkYVR5cGUgfCBOYXRpdmVGdW5jdGlvbik6IFBhcmFtZXRlclN5bWJvbFtdIHtcblx0XHRpZiAoY2FsbGFibGVTeW1ib2wgaW5zdGFuY2VvZiBOYXRpdmVGdW5jdGlvbikge1xuXHRcdFx0cmV0dXJuIGNhbGxhYmxlU3ltYm9sXG5cdFx0XHRcdC5wYXJhbWV0ZXJOb2Rlc1xuXHRcdFx0XHQubWFwKHBhcmFtZXRlck5vZGUgPT4gdGhpcy5wYXJhbWV0ZXJOb2RlVG9TeW1ib2wocGFyYW1ldGVyTm9kZSkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjYWxsYWJsZVN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzXG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQ2FsbEFyZ3VtZW50cyhcblx0XHRjYWxsYWJsZVN5bWJvbDogTWV0aG9kU3ltYm9sIHwgTGFtYmRhVHlwZSB8IE5hdGl2ZUZ1bmN0aW9uLFxuXHRcdGNhbGxBcmd1bWVudHM6IEFTVE5vZGVbXSxcblx0XHRzY29wZTogVHlwZVNjb3BlLFxuXHRcdHN1YnN0aXR1dGlvbk1hcDogTWFwPHN0cmluZywgVHlwZT4gPSBuZXcgTWFwKClcblx0KTogdm9pZCB7XG5cdFx0Y29uc3QgY2FsbFNjb3BlID0gbmV3IFR5cGVTY29wZShzY29wZSk7XG5cdFx0bGV0IHBhcmFtZXRlclN5bWJvbHMgPSB0aGlzLnBhcmFtZXRlcnNTeW1ib2xzRnJvbUNhbGxhYmxlU3ltYm9sKGNhbGxhYmxlU3ltYm9sKTtcblxuXHRcdGlmIChjYWxsQXJndW1lbnRzLmxlbmd0aCA+IHBhcmFtZXRlclN5bWJvbHMubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihcIkFyZ3VtZW50IGNvdW50IG1pc21hdGNoXCIpO1xuXHRcdH1cblxuXHRcdGxldCBhY3R1YWxUeXBlOiBUeXBlO1xuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBwYXJhbWV0ZXJTeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBwYXJhbWV0ZXJTeW1ib2w6IFBhcmFtZXRlclN5bWJvbCB8IG51bGwgPSBwYXJhbWV0ZXJTeW1ib2xzW2ldIHx8IG51bGw7XG5cdFx0XHRjb25zdCBjYWxsQXJndW1lbnQ6IEFTVE5vZGUgfCBudWxsID0gY2FsbEFyZ3VtZW50c1tpXSB8fCBudWxsO1xuXG5cdFx0XHRpZiAocGFyYW1ldGVyU3ltYm9sKSB7XG5cdFx0XHRcdGNvbnN0IGV4cGVjdGVkVHlwZTogVHlwZSA9IHN1YnN0aXR1dGVUeXBlKHBhcmFtZXRlclN5bWJvbC5wYXJhbWV0ZXJUeXBlLCBzdWJzdGl0dXRpb25NYXApO1xuXG5cdFx0XHRcdGlmIChjYWxsQXJndW1lbnQpIHtcblx0XHRcdFx0XHRhY3R1YWxUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24oY2FsbEFyZ3VtZW50LCBjYWxsU2NvcGUsIGV4cGVjdGVkVHlwZSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAocGFyYW1ldGVyU3ltYm9sLmRlZmF1bHRUeXBlKSB7XG5cdFx0XHRcdFx0YWN0dWFsVHlwZSA9IHBhcmFtZXRlclN5bWJvbC5kZWZhdWx0VHlwZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgTWlzc2luZyBhcmd1bWVudCAke3BhcmFtZXRlclN5bWJvbC5uYW1lfWAsIGNhbGxBcmd1bWVudCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmNoZWNrQXNzaWduYWJsZShleHBlY3RlZFR5cGUsIGFjdHVhbFR5cGUsIGNhbGxBcmd1bWVudHNbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tBc3NpZ25hYmxlKGV4cGVjdGVkVHlwZTogVHlwZSwgYWN0dWFsVHlwZTogVHlwZSwgbm9kZTogQVNUTm9kZSB8IG51bGwgPSBudWxsKTogdm9pZCB7XG5cdFx0aWYgKGV4cGVjdGVkVHlwZS5lcXVhbHMoYWN0dWFsVHlwZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoZXhwZWN0ZWRUeXBlIGluc3RhbmNlb2YgTWl4ZWRUeXBlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGV4cGVjdGVkVHlwZSBpbnN0YW5jZW9mIE51bGxhYmxlVHlwZSkge1xuXHRcdFx0aWYgKGFjdHVhbFR5cGUgPT09IFR5cGVzLk5VTEwpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGV4cGVjdGVkVHlwZS5pbm5lci5hY2NlcHRzKGFjdHVhbFR5cGUpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZXhwZWN0ZWRUeXBlLmFjY2VwdHMoYWN0dWFsVHlwZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnR5cGVFcnJvcihgVHlwZSBtaXNtYXRjaDogJHtleHBlY3RlZFR5cGV9IDw+ICR7YWN0dWFsVHlwZX1gLCBub2RlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tCb2R5KGNoaWxkcmVuOiBBU1ROb2RlW10sIHNjb3BlOiBUeXBlU2NvcGUpOiBUeXBlIHtcblx0XHRsZXQgcmV0dXJuVHlwZTogVHlwZSA9IFR5cGVzLk1JWEVEO1xuXG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuXHRcdFx0Y29uc3Qgc3RhdGVtZW50UmVzdWx0ID0gdGhpcy5jaGVja1N0YXRlbWVudChjaGlsZCwgc2NvcGUpO1xuXHRcdFx0aWYgKHN0YXRlbWVudFJlc3VsdC5kaWRSZXR1cm4gJiYgc3RhdGVtZW50UmVzdWx0LnJldHVyblR5cGUpIHtcblx0XHRcdFx0cmV0dXJuVHlwZSA9IHN0YXRlbWVudFJlc3VsdC5yZXR1cm5UeXBlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXR1cm5UeXBlO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja1JldHVyblR5cGUoZXhwZWN0ZWRUeXBlOiBUeXBlLCBhY3R1YWxUeXBlOiBUeXBlLCBub2RlOiBBU1RNZXRob2ROb2RlKTogdm9pZCB7XG5cdFx0Ly8gdm9pZC1NZXRob2RlXG5cdFx0aWYgKGV4cGVjdGVkVHlwZSA9PT0gVHlwZXMuVk9JRCkge1xuXHRcdFx0aWYgKGFjdHVhbFR5cGUgIT09IFR5cGVzLk1JWEVEICYmIGFjdHVhbFR5cGUgIT09IFR5cGVzLlZPSUQpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoYENhbm5vdCByZXR1cm4gJHthY3R1YWxUeXBlfSBmcm9tIHZvaWQgbWV0aG9kYCwgbm9kZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8ga2VpbiByZXR1cm4gdm9yaGFuZGVuXG5cdFx0aWYgKGFjdHVhbFR5cGUgPT09IFR5cGVzLk1JWEVEKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgTWlzc2luZyByZXR1cm4gc3RhdGVtZW50IChleHBlY3RlZCAke2V4cGVjdGVkVHlwZX0pYCwgbm9kZSk7XG5cdFx0fVxuXG5cdFx0Ly8gdHlwLWlua29tcGF0aWJlbFxuXHRcdGlmICghZXhwZWN0ZWRUeXBlLmFjY2VwdHMoYWN0dWFsVHlwZSkpIHtcblx0XHRcdHRoaXMudHlwZUVycm9yKGBSZXR1cm4gdHlwZSBtaXNtYXRjaDogZXhwZWN0ZWQgJHtleHBlY3RlZFR5cGV9LCBnb3QgJHthY3R1YWxUeXBlfWAsIG5vZGUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tWRG9tTm9kZShub2RlOiBBU1RWRG9tTm9kZSk6IFR5cGUge1xuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCA9IHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2wobm9kZS50YWcpO1xuXG5cdFx0XHRjb25zdCBtZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCA9IHRoaXMucmVzb2x2ZUluc3RhbmNlTWV0aG9kZShjbGFzc1N5bWJvbCwgJ3JlbmRlcicpO1xuXG5cdFx0XHRpZiAoIW1ldGhvZFN5bWJvbCkge1xuXHRcdFx0XHR0aGlzLnR5cGVFcnJvcihgQ29tcG9uZW50ICcke25vZGUudGFnfScgaGFzIG5vIHJlbmRlcigpIG1ldGhvZGAsIG5vZGUpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmNoZWNrQXNzaWduYWJsZShtZXRob2RTeW1ib2wucmV0dXJuVHlwZSwgVHlwZXMuVk5PREUsIG5vZGUpO1xuXG5cdFx0XHRyZXR1cm4gVHlwZXMuVk5PREU7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdH1cblxuXHRcdHJldHVybiBUeXBlcy5WTk9ERTtcblx0fVxuXG5cdHByaXZhdGUgcmVzb2x2ZUluc3RhbmNlTWV0aG9kZShjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wsIG1ldGhvZE5hbWU6IHN0cmluZyk6IE1ldGhvZFN5bWJvbCB7XG5cdFx0LyoqIEB0eXBlIHtNZXRob2RTeW1ib2x8bnVsbH0gKi9cblx0XHRjb25zdCBtZXRob2RTeW1ib2w6IE1ldGhvZFN5bWJvbCB8IG51bGwgPSB0aGlzLnJlc29sdmVJbkhpZXJhcmNoeShcblx0XHRcdGNsYXNzU3ltYm9sLFxuXHRcdFx0Y2xhc3NTeW1ib2wgPT4gY2xhc3NTeW1ib2wuaW5zdGFuY2VNZXRob2RTeW1ib2xzLmdldChtZXRob2ROYW1lKSB8fCBudWxsXG5cdFx0KTtcblxuXHRcdGlmICghbWV0aG9kU3ltYm9sKSB7XG5cdFx0XHR0aGlzLnR5cGVFcnJvcihgVW5rbm93biBtZXRob2QgJHtjbGFzc1N5bWJvbC5uYW1lfS4ke21ldGhvZE5hbWV9YCwgY2xhc3NTeW1ib2wubm9kZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1ldGhvZFN5bWJvbDtcblx0fVxuXG5cdHByaXZhdGUgcmVzb2x2ZUluSGllcmFyY2h5KGNsYXNzU3ltYm9sOiBDbGFzc1N5bWJvbCwgcmVzb2x2ZXI6IChjbGFzc1N5bWJvbDogQ2xhc3NTeW1ib2wpID0+IGFueSk6IGFueSB7XG5cdFx0bGV0IGN1cnJlbnQ6IENsYXNzU3ltYm9sIHwgbnVsbCA9IGNsYXNzU3ltYm9sO1xuXG5cdFx0d2hpbGUgKGN1cnJlbnQpIHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IHJlc29sdmVyKGN1cnJlbnQpO1xuXHRcdFx0aWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkICYmIHJlc3VsdCAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWN1cnJlbnQuc3VwZXJDbGFzcykge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0Y3VycmVudCA9IHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2woY3VycmVudC5zdXBlckNsYXNzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHByaXZhdGUgbmV3QXJyYXlUeXBlT2YoZWxlbWVudFR5cGU6IFR5cGUpOiBDbGFzc1JlZlR5cGUge1xuXHRcdGNvbnN0IGNsYXNzTmFtZTogc3RyaW5nIHwgbnVsbCA9IFByaW1pdGl2ZUNsYXNzVHlwZXMuZ2V0Q2xhc3NSZWZOYW1lKFByaW1pdGl2ZUNsYXNzVHlwZXMuQVJSQVkpO1xuXG5cdFx0aWYgKGNsYXNzTmFtZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhpcy50eXBlRXJyb3IoJ0ludGVybmFsIGVycm9yOiBDYW5ub3QgZmluZCBjbGFzcyBuYW1lIGZvciBhcnJheSB0eXBlLicpO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgQ2xhc3NSZWZUeXBlKHRoaXMub2JqZWN0UmVnaXN0cnkudHlwZXMuZ2V0Q2xhc3NTeW1ib2woY2xhc3NOYW1lKSwgW2VsZW1lbnRUeXBlXSk7XG5cdH1cblxuXHRwcml2YXRlIHdyYXBUeXBlKHR5cGU6IEFTVFR5cGVOb2RlLCBzY29wZTogVHlwZVNjb3BlKTogVHlwZSB7XG5cdFx0cmV0dXJuIHdyYXBUeXBlKHR5cGUsIHRoaXMub2JqZWN0UmVnaXN0cnksIHNjb3BlKTtcblx0fVxuXG5cdHByaXZhdGUgcGFyYW1ldGVyTm9kZVRvU3ltYm9sKHBhcmFtZXRlck5vZGU6IEFTVFBhcmFtZXRlck5vZGUsIHNjb3BlOiBUeXBlU2NvcGUgPSBuZXcgVHlwZVNjb3BlKCkpOiBQYXJhbWV0ZXJTeW1ib2wge1xuXHRcdGNvbnN0IHBhcmFtZXRlclR5cGUgPSBwYXJhbWV0ZXJOb2RlLnR5cGVBbm5vdGF0aW9uXG5cdFx0XHQ/IHRoaXMud3JhcFR5cGUocGFyYW1ldGVyTm9kZS50eXBlQW5ub3RhdGlvbiwgc2NvcGUpXG5cdFx0XHQ6IFR5cGVzLk1JWEVEO1xuXG5cdFx0bGV0IGRlZmF1bHRUeXBlID0gbnVsbDtcblx0XHRpZiAocGFyYW1ldGVyTm9kZS5kZWZhdWx0VmFsdWUpIHtcblx0XHRcdGRlZmF1bHRUeXBlID0gdGhpcy5jaGVja0V4cHJlc3Npb24ocGFyYW1ldGVyTm9kZS5kZWZhdWx0VmFsdWUsIG5ldyBUeXBlU2NvcGUoKSk7XG5cblx0XHRcdGlmIChkZWZhdWx0VHlwZVxuXHRcdFx0XHQmJiAhcGFyYW1ldGVyVHlwZS5lcXVhbHMoVHlwZXMuTUlYRUQpXG5cdFx0XHRcdCYmICFwYXJhbWV0ZXJUeXBlLmVxdWFscyhkZWZhdWx0VHlwZSkpIHtcblx0XHRcdFx0dGhpcy50eXBlRXJyb3IoXG5cdFx0XHRcdFx0YERlZmF1bHQgdmFsdWUgZm9yIHBhcmFtZXRlciAnJHtwYXJhbWV0ZXJOb2RlLm5hbWV9JyBkb2VzIG5vdCBtYXRjaCB0eXBlLmAsXG5cdFx0XHRcdFx0cGFyYW1ldGVyTm9kZVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgUGFyYW1ldGVyU3ltYm9sKFxuXHRcdFx0cGFyYW1ldGVyTm9kZS5uYW1lLFxuXHRcdFx0cGFyYW1ldGVyVHlwZSxcblx0XHRcdGRlZmF1bHRUeXBlLFxuXHRcdFx0cGFyYW1ldGVyTm9kZVxuXHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIHJlZ2lzdGVyQ2xhc3NTeW1ib2woY2xhc3NOb2RlOiBBU1RDbGFzc05vZGUpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5oYXNTeW1ib2woY2xhc3NOb2RlLm5hbWUpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgY2xhc3NTY29wZSA9IG5ldyBUeXBlU2NvcGUoKTtcblx0XHRjb25zdCBjbGFzc1N5bWJvbCA9IG5ldyBDbGFzc1N5bWJvbChjbGFzc05vZGUpO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGlmIChjbGFzc1N5bWJvbC5zdXBlckNsYXNzKSB7XG5cdFx0XHRcdGNsYXNzU3ltYm9sLnN1cGVyQ2xhc3NTeW1ib2wgPSB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldENsYXNzU3ltYm9sKGNsYXNzU3ltYm9sLnN1cGVyQ2xhc3MpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHR9XG5cblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmFkZENsYXNzU3ltYm9sKGNsYXNzU3ltYm9sKTtcblxuXHRcdGNsYXNzTm9kZS50eXBlUGFyYW1ldGVycy5mb3JFYWNoKG5hbWUgPT4ge1xuXHRcdFx0Y2xhc3NTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMucHVzaChuZXcgVHlwZVBhcmFtZXRlclN5bWJvbChuYW1lKSk7XG5cdFx0XHRjbGFzc1Njb3BlLmRlZmluZVR5cGVCaW5kaW5nKG5hbWUsIG5ldyBUeXBlVmFyaWFibGUobmFtZSkpO1xuXHRcdH0pO1xuXG5cdFx0Zm9yIChjb25zdCB0eXBlTm9kZSBvZiBjbGFzc05vZGUuaW1wbGVtZW50c0ludGVyZmFjZXMpIHtcblx0XHRcdGNvbnN0IGludGVyZmFjZVR5cGU6IFR5cGUgPSB0aGlzLndyYXBUeXBlKHR5cGVOb2RlLCBjbGFzc1Njb3BlKTtcblx0XHRcdGlmIChpbnRlcmZhY2VUeXBlIGluc3RhbmNlb2YgSW50ZXJmYWNlUmVmVHlwZSkge1xuXHRcdFx0XHRjbGFzc1N5bWJvbC5pbXBsZW1lbnRzSW50ZXJmYWNlcy5wdXNoKGludGVyZmFjZVR5cGUpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHRoaXMudHlwZUVycm9yKGBFeHBlY3RlZCBpbnRlcmZhY2UgdHlwZSwgZ290ICR7aW50ZXJmYWNlVHlwZX1gLCB0eXBlTm9kZSk7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBtZW1iZXJOb2RlIG9mIGNsYXNzTm9kZS5jaGlsZHJlbikge1xuXHRcdFx0aWYgKG1lbWJlck5vZGUudHlwZSA9PT0gQVNUTm9kZVR5cGUuRklFTEQgJiYgbWVtYmVyTm9kZSBpbnN0YW5jZW9mIEFTVEZpZWxkTm9kZSkge1xuXHRcdFx0XHRjb25zdCB0YXJnZXQ6IE1hcDxzdHJpbmcsIEZpZWxkU3ltYm9sPiA9IG1lbWJlck5vZGUubW9kaWZpZXJzLnN0YXRpY1xuXHRcdFx0XHRcdD8gY2xhc3NTeW1ib2wuc3RhdGljRmllbGRTeW1ib2xzXG5cdFx0XHRcdFx0OiBjbGFzc1N5bWJvbC5pbnN0YW5jZUZpZWxkU3ltYm9scztcblxuXHRcdFx0XHRjb25zdCBmaWVsZFN5bWJvbCA9IG5ldyBGaWVsZFN5bWJvbChcblx0XHRcdFx0XHRtZW1iZXJOb2RlLFxuXHRcdFx0XHRcdG1lbWJlck5vZGUuZmllbGRUeXBlXG5cdFx0XHRcdFx0XHQ/IHRoaXMud3JhcFR5cGUobWVtYmVyTm9kZS5maWVsZFR5cGUsIGNsYXNzU2NvcGUpXG5cdFx0XHRcdFx0XHQ6IFR5cGVzLk1JWEVEXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0ZmllbGRTeW1ib2wub3duZXIgPSBjbGFzc1N5bWJvbDtcblxuXHRcdFx0XHR0YXJnZXQuc2V0KGZpZWxkU3ltYm9sLm5hbWUsIGZpZWxkU3ltYm9sKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKChtZW1iZXJOb2RlLnR5cGUgPT09IEFTVE5vZGVUeXBlLk1FVEhPRCB8fCBtZW1iZXJOb2RlLnR5cGUgPT09IEFTVE5vZGVUeXBlLkNPTlNUUlVDVE9SKVxuXHRcdFx0XHQmJiBtZW1iZXJOb2RlIGluc3RhbmNlb2YgQVNUTWV0aG9kTm9kZSkge1xuXG5cdFx0XHRcdGNvbnN0IG1ldGhvZFNjb3BlID0gbmV3IFR5cGVTY29wZShjbGFzc1Njb3BlKTtcblx0XHRcdFx0Y29uc3QgbWV0aG9kU3ltYm9sID0gbmV3IE1ldGhvZFN5bWJvbChtZW1iZXJOb2RlKTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wub3duZXIgPSBjbGFzc1N5bWJvbDtcblxuXHRcdFx0XHRtZW1iZXJOb2RlLnR5cGVQYXJhbWV0ZXJzLmZvckVhY2gobmFtZSA9PiB7XG5cdFx0XHRcdFx0bWV0aG9kU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLnB1c2gobmV3IFR5cGVQYXJhbWV0ZXJTeW1ib2wobmFtZSkpO1xuXHRcdFx0XHRcdG1ldGhvZFNjb3BlLmRlZmluZVR5cGVCaW5kaW5nKG5hbWUsIG5ldyBUeXBlVmFyaWFibGUobmFtZSkpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRtZXRob2RTeW1ib2wucGFyYW1ldGVyU3ltYm9scyA9IG1lbWJlck5vZGVcblx0XHRcdFx0XHQucGFyYW1ldGVyc1xuXHRcdFx0XHRcdC5tYXAocGFyYW1ldGVyTm9kZSA9PiB0aGlzLnBhcmFtZXRlck5vZGVUb1N5bWJvbChwYXJhbWV0ZXJOb2RlLCBtZXRob2RTY29wZSkpO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC5yZXR1cm5UeXBlID0gbWVtYmVyTm9kZS5yZXR1cm5UeXBlXG5cdFx0XHRcdFx0PyB0aGlzLndyYXBUeXBlKG1lbWJlck5vZGUucmV0dXJuVHlwZSwgbWV0aG9kU2NvcGUpXG5cdFx0XHRcdFx0OiBUeXBlcy5WT0lEO1xuXG5cdFx0XHRcdGlmIChtZW1iZXJOb2RlLnR5cGUgPT09IEFTVE5vZGVUeXBlLkNPTlNUUlVDVE9SKSB7XG5cdFx0XHRcdFx0Y2xhc3NTeW1ib2wuY29uc3RydWN0b3JNZXRob2RTeW1ib2wgPSBtZXRob2RTeW1ib2w7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gbWV0aG9kU3ltYm9sLmlzU3RhdGljXG5cdFx0XHRcdFx0XHQ/IGNsYXNzU3ltYm9sLnN0YXRpY01ldGhvZFN5bWJvbHNcblx0XHRcdFx0XHRcdDogY2xhc3NTeW1ib2wuaW5zdGFuY2VNZXRob2RTeW1ib2xzO1xuXG5cdFx0XHRcdFx0dGFyZ2V0LnNldChtZW1iZXJOb2RlLm5hbWUsIG1ldGhvZFN5bWJvbCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJlZ2lzdGVySW50ZXJmYWNlU3ltYm9sKGludGVyZmFjZU5vZGU6IEFTVEludGVyZmFjZU5vZGUpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5vYmplY3RSZWdpc3RyeS50eXBlcy5oYXNTeW1ib2woaW50ZXJmYWNlTm9kZS5uYW1lKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGludGVyZmFjZVNjb3BlID0gbmV3IFR5cGVTY29wZSgpO1xuXHRcdGNvbnN0IGludGVyZmFjZVN5bWJvbCA9IG5ldyBJbnRlcmZhY2VTeW1ib2woaW50ZXJmYWNlTm9kZSk7XG5cblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmFkZEludGVyZmFjZVN5bWJvbChpbnRlcmZhY2VTeW1ib2wpO1xuXG5cdFx0aW50ZXJmYWNlTm9kZS50eXBlUGFyYW1ldGVycy5mb3JFYWNoKG5hbWUgPT4ge1xuXHRcdFx0aW50ZXJmYWNlU3ltYm9sLnR5cGVQYXJhbWV0ZXJTeW1ib2xzLnB1c2gobmV3IFR5cGVQYXJhbWV0ZXJTeW1ib2wobmFtZSkpO1xuXHRcdFx0aW50ZXJmYWNlU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcobmFtZSwgbmV3IFR5cGVWYXJpYWJsZShuYW1lKSk7XG5cdFx0fSk7XG5cblx0XHRmb3IgKGNvbnN0IGludGVyZmFjZU5hbWUgb2YgaW50ZXJmYWNlTm9kZS5leHRlbmRzSW50ZXJmYWNlcykge1xuXHRcdFx0Y29uc3QgaW50ZXJmYWNlU3ltYm9sOiBJbnRlcmZhY2VTeW1ib2wgPSB0aGlzLm9iamVjdFJlZ2lzdHJ5LnR5cGVzLmdldEludGVyYWNlU3ltYm9sKGludGVyZmFjZU5hbWUpO1xuXG5cdFx0XHRpbnRlcmZhY2VTeW1ib2wuZXh0ZW5kc0ludGVyZmFjZXMucHVzaChpbnRlcmZhY2VTeW1ib2wpO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgbWVtYmVyTm9kZSBvZiBpbnRlcmZhY2VOb2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobWVtYmVyTm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5GSUVMRCAmJiBtZW1iZXJOb2RlIGluc3RhbmNlb2YgQVNURmllbGROb2RlKSB7XG5cdFx0XHRcdGNvbnN0IGZpZWxkU3ltYm9sID0gbmV3IEZpZWxkU3ltYm9sKFxuXHRcdFx0XHRcdG1lbWJlck5vZGUsXG5cdFx0XHRcdFx0bWVtYmVyTm9kZS5maWVsZFR5cGVcblx0XHRcdFx0XHRcdD8gdGhpcy53cmFwVHlwZShtZW1iZXJOb2RlLmZpZWxkVHlwZSwgaW50ZXJmYWNlU2NvcGUpXG5cdFx0XHRcdFx0XHQ6IFR5cGVzLk1JWEVEXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0ZmllbGRTeW1ib2wub3duZXIgPSBpbnRlcmZhY2VTeW1ib2w7XG5cblx0XHRcdFx0aW50ZXJmYWNlU3ltYm9sLnN0YXRpY0ZpZWxkU3ltYm9scy5zZXQoZmllbGRTeW1ib2wubmFtZSwgZmllbGRTeW1ib2wpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoKG1lbWJlck5vZGUudHlwZSA9PT0gQVNUTm9kZVR5cGUuTUVUSE9EKSAmJiBtZW1iZXJOb2RlIGluc3RhbmNlb2YgQVNUTWV0aG9kTm9kZSkge1xuXG5cdFx0XHRcdGNvbnN0IG1ldGhvZFNjb3BlID0gbmV3IFR5cGVTY29wZShpbnRlcmZhY2VTY29wZSk7XG5cdFx0XHRcdGNvbnN0IG1ldGhvZFN5bWJvbCA9IG5ldyBNZXRob2RTeW1ib2wobWVtYmVyTm9kZSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLm93bmVyID0gaW50ZXJmYWNlU3ltYm9sO1xuXG5cdFx0XHRcdG1lbWJlck5vZGUudHlwZVBhcmFtZXRlcnMuZm9yRWFjaChuYW1lID0+IHtcblx0XHRcdFx0XHRtZXRob2RTeW1ib2wudHlwZVBhcmFtZXRlclN5bWJvbHMucHVzaChuZXcgVHlwZVBhcmFtZXRlclN5bWJvbChuYW1lKSk7XG5cdFx0XHRcdFx0bWV0aG9kU2NvcGUuZGVmaW5lVHlwZUJpbmRpbmcobmFtZSwgbmV3IFR5cGVWYXJpYWJsZShuYW1lKSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdG1ldGhvZFN5bWJvbC5wYXJhbWV0ZXJTeW1ib2xzID0gbWVtYmVyTm9kZVxuXHRcdFx0XHRcdC5wYXJhbWV0ZXJzXG5cdFx0XHRcdFx0Lm1hcChwYXJhbWV0ZXJOb2RlID0+IHRoaXMucGFyYW1ldGVyTm9kZVRvU3ltYm9sKHBhcmFtZXRlck5vZGUsIG1ldGhvZFNjb3BlKSk7XG5cblx0XHRcdFx0bWV0aG9kU3ltYm9sLnJldHVyblR5cGUgPSBtZW1iZXJOb2RlLnJldHVyblR5cGVcblx0XHRcdFx0XHQ/IHRoaXMud3JhcFR5cGUobWVtYmVyTm9kZS5yZXR1cm5UeXBlLCBtZXRob2RTY29wZSlcblx0XHRcdFx0XHQ6IFR5cGVzLlZPSUQ7XG5cblx0XHRcdFx0aW50ZXJmYWNlU3ltYm9sLmluc3RhbmNlTWV0aG9kU3ltYm9scy5zZXQobWVtYmVyTm9kZS5uYW1lLCBtZXRob2RTeW1ib2wpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgdHlwZUVycm9yKG1lc3NhZ2U6IHN0cmluZywgbm9kZTogQVNUTm9kZSB8IG51bGwgPSBudWxsKTogbmV2ZXIge1xuXHRcdHRocm93VHlwZUVycm9yKG1lc3NhZ2UsIG5vZGU/LnNwYW4pO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuaW1wb3J0IHtBU1RJbXBvcnROb2RlLCBBU1ROb2RlLCBBU1ROb2RlVHlwZX0gZnJvbSBcIi4uL2FzdFwiO1xuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuLi9wYXJzZXIvcGFyc2VyX3NvdXJjZVwiO1xuaW1wb3J0IHtQYXJzZXJ9IGZyb20gXCIuLi9wYXJzZXIvcGFyc2VyXCI7XG5pbXBvcnQge0Vudmlyb25tZW50fSBmcm9tIFwiLi4vaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHR5cGUge0Fic3RyYWN0RmlsZUxvYWRlcn0gZnJvbSBcIi4uL2xvYWRlcnNcIjtcbmltcG9ydCB7dGhyb3dSdW50aW1lRXJyb3J9IGZyb20gXCIuLi9lcnJvcnNcIjtcblxuZXhwb3J0IGNsYXNzIERlcGVuZGVuY3kge1xuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnkgPSBuZXcgT2JqZWN0UmVnaXN0cnkoKTtcblx0bmFtZXM6IHN0cmluZ1tdO1xuXHR1cmw6IHN0cmluZztcblx0YXN0OiBBU1ROb2RlIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IobmFtZXM6IHN0cmluZ1tdLCB1cmw6IHN0cmluZyA9ICcuJykge1xuXHRcdHRoaXMubmFtZXMgPSBuYW1lcztcblx0XHR0aGlzLnVybCA9IHVybDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgRGVwZW5kZW5jeUxvYWRlciB7XG5cdGVudmlyb25tZW50OiBFbnZpcm9ubWVudDtcblx0b2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5O1xuXHRmaWxlTG9hZGVyOiBBYnN0cmFjdEZpbGVMb2FkZXI7XG5cblx0Y29uc3RydWN0b3IoZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGZpbGVMb2FkZXI6IEFic3RyYWN0RmlsZUxvYWRlcikge1xuXHRcdHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5ID0gb2JqZWN0UmVnaXN0cnk7XG5cdFx0dGhpcy5maWxlTG9hZGVyID0gZmlsZUxvYWRlcjtcblx0fVxuXG5cdGFzeW5jIHBhcnNlRGVwZW5kZW5jeShkZXBlbmRlbmN5OiBEZXBlbmRlbmN5KTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIGF3YWl0IHRoaXMucGFyc2VGaWxlKGRlcGVuZGVuY3kudXJsKVxuXHRcdCAgICAgICAgICAgICAgICAgLnRoZW4oYXN0ID0+IGRlcGVuZGVuY3kuYXN0ID0gYXN0KVxuXHRcdCAgICAgICAgICAgICAgICAgLnRoZW4oYXN0ID0+IGRlcGVuZGVuY3kub2JqZWN0UmVnaXN0cnkuY29sbGVjdEFsbChhc3QpKTtcblx0fVxuXG5cdGFzeW5jIGNvbGxlY3REZXBlbmRlbmNpZXMoZGVwZW5kZW5jeTogRGVwZW5kZW5jeSwgZGVwZW5kZW5jaWVzOiBNYXA8c3RyaW5nLCBEZXBlbmRlbmN5Pik6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiBhd2FpdCB0aGlzLmNvbGxlY3RQcm9ncmFtRGVwZW5kZW5jaWVzKGRlcGVuZGVuY3kuYXN0KVxuXHRcdCAgICAgICAgICAgICAgICAgLnRoZW4oY2xhc3NEZXBlbmRlbmNpZXMgPT4ge1xuXHRcdFx0ICAgICAgICAgICAgICAgICBjbGFzc0RlcGVuZGVuY2llcy5mb3JFYWNoKGNsYXNzRGVwZW5kZW5jeSA9PiB7XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgaWYgKGRlcGVuZGVuY2llcy5oYXMoY2xhc3NEZXBlbmRlbmN5LnVybCkpIHtcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgIHJldHVybjtcblx0XHRcdFx0ICAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgZGVwZW5kZW5jaWVzLnNldChjbGFzc0RlcGVuZGVuY3kudXJsLCBjbGFzc0RlcGVuZGVuY3kpO1xuXHRcdFx0ICAgICAgICAgICAgICAgICB9KTtcblx0XHQgICAgICAgICAgICAgICAgIH0pO1xuXHR9XG5cblx0YXN5bmMgY29sbGVjdFByb2dyYW1EZXBlbmRlbmNpZXMoYXN0OiBBU1ROb2RlIHwgbnVsbCk6IFByb21pc2U8TWFwPHN0cmluZywgRGVwZW5kZW5jeT4+IHtcblx0XHRpZiAoYXN0ID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gbmV3IE1hcCgpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGRlcGVuZGVuY2llczogTWFwPHN0cmluZywgRGVwZW5kZW5jeT4gPSB0aGlzLmNvbGxlY3RDbGFzc0RlcGVuZGVuY2llcyhhc3QpO1xuXHRcdGZvciAoY29uc3QgZGVwZW5kZW5jeSBvZiBkZXBlbmRlbmNpZXMudmFsdWVzKCkpIHtcblx0XHRcdGlmIChkZXBlbmRlbmN5LnVybCA9PT0gJy4nKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0YXdhaXQgdGhpcy5wYXJzZURlcGVuZGVuY3koZGVwZW5kZW5jeSk7XG5cdFx0XHRhd2FpdCB0aGlzLmNvbGxlY3REZXBlbmRlbmNpZXMoZGVwZW5kZW5jeSwgZGVwZW5kZW5jaWVzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGVwZW5kZW5jaWVzO1xuXHR9XG5cblx0YXN5bmMgY29sbGVjdERlZmF1bHREZXBlbmRlbmNpZXMoKTogUHJvbWlzZTxNYXA8c3RyaW5nLCBEZXBlbmRlbmN5Pj4ge1xuXHRcdGNvbnN0IGRlcGVuZGVuY2llczogTWFwPHN0cmluZywgRGVwZW5kZW5jeT4gPSB0aGlzLmRlZmF1bHREZXBlbmRlbmNpZXMoKTtcblxuXHRcdGZvciAoY29uc3QgZGVwZW5kZW5jeSBvZiBkZXBlbmRlbmNpZXMudmFsdWVzKCkpIHtcblx0XHRcdGF3YWl0IHRoaXMucGFyc2VEZXBlbmRlbmN5KGRlcGVuZGVuY3kpO1xuXHRcdFx0YXdhaXQgdGhpcy5jb2xsZWN0RGVwZW5kZW5jaWVzKGRlcGVuZGVuY3ksIGRlcGVuZGVuY2llcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRlcGVuZGVuY2llcztcblx0fVxuXG5cdGRlZmF1bHREZXBlbmRlbmNpZXMoKTogTWFwPHN0cmluZywgRGVwZW5kZW5jeT4ge1xuXHRcdGNvbnN0IGRlcGVuZGVuY2llczogRGVwZW5kZW5jeVtdID0gW1xuXHRcdFx0bmV3IERlcGVuZGVuY3koWydJdGVyYXRvcicsICdJdGVyYWJsZSddLCAnL2xpYnJhcnkvY29udHJhY3RzLmx5cmEnKVxuXHRcdF07XG5cblx0XHRjb25zdCBkZWZhdWx0RGVwZW5kZW5jaWVzID0gbmV3IE1hcCgpO1xuXHRcdGZvciAoY29uc3QgZGVwZW5kZW5jeSBvZiBkZXBlbmRlbmNpZXMpIHtcblx0XHRcdGRlZmF1bHREZXBlbmRlbmNpZXMuc2V0KGRlcGVuZGVuY3kudXJsLCBkZXBlbmRlbmN5KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGVmYXVsdERlcGVuZGVuY2llcztcblx0fVxuXG5cdGNvbGxlY3RDbGFzc0RlcGVuZGVuY2llcyhhc3Q6IEFTVE5vZGUpOiBNYXA8c3RyaW5nLCBEZXBlbmRlbmN5PiB7XG5cdFx0Y29uc3QgY2xhc3NEZXBlbmRlbmNpZXMgPSBuZXcgTWFwKCk7XG5cblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgYXN0LmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobm9kZS50eXBlID09PSBBU1ROb2RlVHlwZS5JTVBPUlQpIHtcblx0XHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBU1RJbXBvcnROb2RlKSB7XG5cdFx0XHRcdFx0aWYgKG5vZGUuZnJvbSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0Y2xhc3NEZXBlbmRlbmNpZXMuc2V0KG5vZGUubmFtZXNbMF0sIG5ldyBEZXBlbmRlbmN5KG5vZGUubmFtZXMpKTtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoY2xhc3NEZXBlbmRlbmNpZXMuaGFzKG5vZGUuZnJvbSkpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjbGFzc0RlcGVuZGVuY2llcy5zZXQobm9kZS5mcm9tLCBuZXcgRGVwZW5kZW5jeShub2RlLm5hbWVzLCBub2RlLmZyb20pKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aHJvd1J1bnRpbWVFcnJvcihgSW52YWxpZCBpbXBvcnQgbm9kZSAke25vZGUudHlwZX0uYCwgbm9kZT8uc3Bhbik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3NEZXBlbmRlbmNpZXM7XG5cdH1cblxuXHRhc3luYyBwYXJzZUZpbGUodXJsOiBzdHJpbmcpOiBQcm9taXNlPEFTVE5vZGU+IHtcblx0XHRyZXR1cm4gdGhpcy5maWxlTG9hZGVyXG5cdFx0ICAgICAgICAgICAubG9hZCh1cmwpXG5cdFx0ICAgICAgICAgICAudGhlbihjb2RlID0+IHRoaXMucGFyc2VyU291cmNlKG5ldyBTb3VyY2UoY29kZSwgdXJsKSkpO1xuXHR9XG5cblx0cGFyc2VyU291cmNlKHNvdXJjZTogU291cmNlKTogQVNUTm9kZSB7XG5cdFx0cmV0dXJuIG5ldyBQYXJzZXIoc291cmNlKS5wYXJzZSgpO1xuXHR9XG59XG4iLAogICAgImltcG9ydCB7RGVwZW5kZW5jeSwgRGVwZW5kZW5jeUxvYWRlcn0gZnJvbSBcIi4vZGVwZW5kZW5jaWVzXCI7XG5pbXBvcnQge0FTVEltcG9ydE5vZGUsIEFTVE5vZGV9IGZyb20gXCIuLi9hc3RcIjtcbmltcG9ydCB7TmF0aXZlQ2xhc3Nlc30gZnJvbSBcIi4uLy4uL2xpYnJhcnkvbmF0aXZlX2NsYXNzZXNcIjtcbmltcG9ydCB7Q2xhc3NEZWZpbml0aW9uLCBFbnZpcm9ubWVudCwgSW50ZXJmYWNlRGVmaW5pdGlvbn0gZnJvbSBcIi4uL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuaW1wb3J0IHR5cGUge0Fic3RyYWN0RmlsZUxvYWRlcn0gZnJvbSBcIi4uL2xvYWRlcnNcIjtcbmltcG9ydCB0eXBlIHtOYXRpdmVDbGFzc30gZnJvbSBcIi4uLy4uL2xpYnJhcnkvbmF0aXZlX2NsYXNzXCI7XG5pbXBvcnQge3Rocm93RGVwZW5kZW5jeUVycm9yfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5pbXBvcnQgdHlwZSB7U291cmNlU3Bhbn0gZnJvbSBcIi4uL3BhcnNlci9wYXJzZXJfc291cmNlLnRzXCI7XG5cbmNvbnN0IG5hdGl2ZUNsYXNzZXMgPSBuZXcgTmF0aXZlQ2xhc3NlcygpO1xuXG5leHBvcnQgY2xhc3MgTGlua2VyIHtcblx0cHJpdmF0ZSBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQ7XG5cdHByaXZhdGUgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5O1xuXHRwcml2YXRlIGRlcGVuZGVuY3lMb2FkZXI6IERlcGVuZGVuY3lMb2FkZXI7XG5cblx0Y29uc3RydWN0b3IoZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnksIGZpbGVMb2FkZXI6IEFic3RyYWN0RmlsZUxvYWRlcikge1xuXHRcdHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5ID0gb2JqZWN0UmVnaXN0cnk7XG5cdFx0dGhpcy5kZXBlbmRlbmN5TG9hZGVyID0gbmV3IERlcGVuZGVuY3lMb2FkZXIoZW52aXJvbm1lbnQsIG9iamVjdFJlZ2lzdHJ5LCBmaWxlTG9hZGVyKTtcblx0fVxuXG5cdHB1YmxpYyBhc3luYyBsaW5rU291cmNlcyhhc3Q6IEFTVE5vZGUpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gYXdhaXQgdGhpcy5kZXBlbmRlbmN5TG9hZGVyLmNvbGxlY3REZWZhdWx0RGVwZW5kZW5jaWVzKClcblx0XHQgICAgICAgICAgICAgICAgIC50aGVuKChkZXBlbmRlbmNpZXM6IE1hcDxzdHJpbmcsIERlcGVuZGVuY3k+KTogdm9pZCA9PiB7XG5cdFx0XHQgICAgICAgICAgICAgICAgIHRoaXMubG9hZERlcGVuZGVuY2llcyhkZXBlbmRlbmNpZXMpO1xuXHRcdCAgICAgICAgICAgICAgICAgfSlcblx0XHQgICAgICAgICAgICAgICAgIC50aGVuKGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdCAgICAgICAgICAgICAgICAgY29uc3QgZGVwZW5kZW5jaWVzOiBNYXA8c3RyaW5nLCBEZXBlbmRlbmN5PiA9IGF3YWl0IHRoaXMuZGVwZW5kZW5jeUxvYWRlclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb2xsZWN0UHJvZ3JhbURlcGVuZGVuY2llcyhhc3QpO1xuXHRcdFx0ICAgICAgICAgICAgICAgICB0aGlzLmxvYWREZXBlbmRlbmNpZXMoZGVwZW5kZW5jaWVzKTtcblx0XHRcdCAgICAgICAgICAgICAgICAgdGhpcy5sb2FkTmF0aXZlQ2xhc3Nlc0Zyb21BU1QoYXN0KTtcblx0XHQgICAgICAgICAgICAgICAgIH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBsb2FkRGVwZW5kZW5jaWVzKGRlcGVuZGVuY2llczogTWFwPHN0cmluZywgRGVwZW5kZW5jeT4pIHtcblx0XHRmb3IgKGNvbnN0IGRlcGVuZGVuY3kgb2YgZGVwZW5kZW5jaWVzLnZhbHVlcygpKSB7XG5cblx0XHRcdGlmIChkZXBlbmRlbmN5LnVybCA9PT0gJy4nKSB7XG5cdFx0XHRcdHRoaXMubG9hZE5hdGl2ZUNsYXNzRnJvbURlcGVuZGVuY3koZGVwZW5kZW5jeSk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBvYmplY3REZWZpbml0aW9ucyA9IGRlcGVuZGVuY3kub2JqZWN0UmVnaXN0cnlcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mZXRjaEFsbE9iamVjdERlZmluaXRpb25zKClcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52YWx1ZXMoKTtcblx0XHRcdGZvciAobGV0IG9iamVjdERlZiBvZiBvYmplY3REZWZpbml0aW9ucykge1xuXHRcdFx0XHRpZiAob2JqZWN0RGVmIGluc3RhbmNlb2YgSW50ZXJmYWNlRGVmaW5pdGlvbikge1xuXHRcdFx0XHRcdHRoaXMub2JqZWN0UmVnaXN0cnkuaW50ZXJmYWNlcy5zZXQob2JqZWN0RGVmLm5hbWUsIG9iamVjdERlZik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5vYmplY3RSZWdpc3RyeS5jbGFzc2VzLnNldChvYmplY3REZWYubmFtZSwgb2JqZWN0RGVmKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmVudmlyb25tZW50LmRlZmluZShvYmplY3REZWYubmFtZSwgb2JqZWN0RGVmKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGxvYWROYXRpdmVDbGFzcyhjbGFzc05hbWU6IHN0cmluZywgc3BhbjogU291cmNlU3BhbiB8IG51bGwgPSBudWxsKTogdm9pZCB7XG5cdFx0Y29uc3QgbmF0aXZlQ2xhc3M6IE5hdGl2ZUNsYXNzIHwgbnVsbCA9IG5hdGl2ZUNsYXNzZXMucmVnaXN0cnkuZ2V0KGNsYXNzTmFtZSkgfHwgbnVsbDtcblx0XHRpZiAoIW5hdGl2ZUNsYXNzKSB7XG5cdFx0XHR0aHJvd0RlcGVuZGVuY3lFcnJvcihgVW5rbm93biBuYXRpdmUgY2xhc3MgJHtjbGFzc05hbWV9YCwgc3Bhbik7XG5cdFx0fVxuXHRcdGNvbnN0IGNsYXNzRGVmOiBDbGFzc0RlZmluaXRpb24gPSBuYXRpdmVDbGFzcy5nZXRDbGFzc0RlZmluaXRpb24oKTtcblx0XHRpZiAodGhpcy5vYmplY3RSZWdpc3RyeS5jbGFzc2VzLmhhcyhjbGFzc05hbWUpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5zZXQoY2xhc3NOYW1lLCBjbGFzc0RlZik7XG5cdFx0dGhpcy5lbnZpcm9ubWVudC5kZWZpbmUoY2xhc3NOYW1lLCBjbGFzc0RlZik7XG5cdH1cblxuXHRwcml2YXRlIGxvYWROYXRpdmVDbGFzc2VzRnJvbUFTVChhc3Q6IEFTVE5vZGUpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgYXN0LmNoaWxkcmVuKSB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFTVEltcG9ydE5vZGUpIHtcblx0XHRcdFx0aWYgKG5vZGUuZnJvbSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdGNvbnN0IGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gbm9kZS5uYW1lc1swXTtcblx0XHRcdFx0XHRpZiAoIWNsYXNzTmFtZSkge1xuXHRcdFx0XHRcdFx0dGhyb3dEZXBlbmRlbmN5RXJyb3IoYEludmFsaWQgaW1wb3J0IG5vZGUgJHtub2RlLnR5cGV9LmAsIG5vZGU/LnNwYW4pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLmxvYWROYXRpdmVDbGFzcyhjbGFzc05hbWUsIG5vZGUuc3Bhbik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGxvYWROYXRpdmVDbGFzc0Zyb21EZXBlbmRlbmN5KGRlcGVuZGVuY3k6IERlcGVuZGVuY3kpIHtcblx0XHRjb25zdCBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCA9IGRlcGVuZGVuY3kubmFtZXNbMF07XG5cdFx0aWYgKCFjbGFzc05hbWUpIHtcblx0XHRcdHRocm93RGVwZW5kZW5jeUVycm9yKGBJbnZhbGlkIGltcG9ydCBmcm9tIGRlcGVuZGVuY3kuYCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5sb2FkTmF0aXZlQ2xhc3MoY2xhc3NOYW1lKTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge0FTVEFubm90YXRpb25Ob2RlLCBBU1RDbGFzc05vZGUsIEFTVE1ldGhvZE5vZGUsIEFTVE5vZGV9IGZyb20gXCIuLi9hc3RcIjtcbmltcG9ydCB7Y2FsbEluc3RhbmNlTWV0aG9kLCBldmFsQW5ub3RhdGlvblByb3BlcnRpZXN9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9ydW50aW1lXCI7XG5pbXBvcnQge0NsYXNzRGVmaW5pdGlvbiwgdHlwZSBFbnZpcm9ubWVudCwgSW5zdGFuY2V9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQgdHlwZSB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuaW1wb3J0IHR5cGUge0V2ZW50UGlwZWxpbmV9IGZyb20gXCIuLi9ldmVudC9waXBlbGluZVwiO1xuXG5leHBvcnQgY2xhc3MgVGVzdFN1aXRlcyB7XG5cdHByaXZhdGUgcmVhZG9ubHkgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50O1xuXHRwcml2YXRlIHJlYWRvbmx5IG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeTtcblx0cHJpdmF0ZSByZWFkb25seSBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lO1xuXG5cdGNvbnN0cnVjdG9yKGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgb2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5LCBldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lKSB7XG5cdFx0dGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuXHRcdHRoaXMub2JqZWN0UmVnaXN0cnkgPSBvYmplY3RSZWdpc3RyeTtcblx0XHR0aGlzLmV2ZW50UGlwZWxpbmUgPSBldmVudFBpcGVsaW5lO1xuXHR9XG5cblx0cnVuKGFzdDogQVNUTm9kZSk6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhc3QuY2hpbGRyZW4pIHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgQVNUQ2xhc3NOb2RlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGDwn6eqIFJ1bm5pbmcgVGVzdCBDYXNlcyBmb3IgJHtub2RlLm5hbWV9IC4uLmApO1xuXHRcdFx0XHR0aGlzLnJ1blRlc3RDYXNlcyhub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJ1blRlc3RDYXNlcyhjbGFzc05vZGU6IEFTVENsYXNzTm9kZSk6IHZvaWQge1xuXHRcdGZvciAoY29uc3QgbWVtYmVyIG9mIGNsYXNzTm9kZS5jaGlsZHJlbikge1xuXHRcdFx0aWYgKG1lbWJlciBpbnN0YW5jZW9mIEFTVE1ldGhvZE5vZGUpIHtcblx0XHRcdFx0Y29uc3QgYW5ub3RhdGlvbjogQVNUQW5ub3RhdGlvbk5vZGUgfCB1bmRlZmluZWQgPSBtZW1iZXIuYW5ub3RhdGlvbnNcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmZpbmQoYW5ub3RhdGlvbiA9PiBhbm5vdGF0aW9uLm5hbWUgPT09ICd0ZXN0Jyk7XG5cdFx0XHRcdGlmICghYW5ub3RhdGlvbikge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMucnVuVGVzdENhc2UoY2xhc3NOb2RlLCBtZW1iZXIsIGFubm90YXRpb24pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcnVuVGVzdENhc2UoY2xhc3NOb2RlOiBBU1RDbGFzc05vZGUsIG1ldGhvZE5vZGU6IEFTVE1ldGhvZE5vZGUsIGFubm90YXRpb246IEFTVEFubm90YXRpb25Ob2RlKTogdm9pZCB7XG5cdFx0Y29uc3QgaW5zdGFuY2U6IEluc3RhbmNlID0gQ2xhc3NEZWZpbml0aW9uLmZyb21BU1QoY2xhc3NOb2RlKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25zdHJ1Y3ROZXdJbnN0YW5jZVdpdGhvdXRBcmd1bWVudHMoXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbnZpcm9ubWVudCxcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRQaXBlbGluZVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cblx0XHRjb25zdCBwcm9wZXJ0aWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSBldmFsQW5ub3RhdGlvblByb3BlcnRpZXMoYW5ub3RhdGlvbik7XG5cdFx0Y29uc3QgdGl0bGU6IHN0cmluZyA9IHByb3BlcnRpZXMudGl0bGUgPz8gYCR7Y2xhc3NOb2RlLm5hbWV9LiR7bWV0aG9kTm9kZS5uYW1lfWA7XG5cblx0XHRsZXQgZXJyb3JNZXNzYWdlID0gbnVsbDtcblxuXHRcdHRyeSB7XG5cdFx0XHRjYWxsSW5zdGFuY2VNZXRob2QoaW5zdGFuY2UsIG1ldGhvZE5vZGUsIFtdLCB0aGlzLm9iamVjdFJlZ2lzdHJ5LCB0aGlzLmVudmlyb25tZW50LCB0aGlzLmV2ZW50UGlwZWxpbmUpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRlcnJvck1lc3NhZ2UgPSBlcnJvcjtcblx0XHR9XG5cblx0XHRpZiAoZXJyb3JNZXNzYWdlKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGAg4p2MICR7dGl0bGV9LCAke2Vycm9yTWVzc2FnZX1gKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coYCDinIUgJHt0aXRsZX1gKTtcblx0XHR9XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtBU1ROb2RlfSBmcm9tICcuLi9hc3QudHMnO1xuaW1wb3J0IHtFbnZpcm9ubWVudH0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtldmFsTm9kZSwgcmVnaXN0ZXJOYXRpdmVDbGFzc2VzLCByZWdpc3Rlck5hdGl2ZUZ1bmN0aW9uc30gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfcnVudGltZVwiO1xuaW1wb3J0IHtPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4vaW50ZXJwcmV0ZXJfcmVnaXN0cnlcIjtcbmltcG9ydCB0eXBlIHtFdmVudFBpcGVsaW5lfSBmcm9tIFwiLi4vZXZlbnQvcGlwZWxpbmVcIjtcblxuZXhwb3J0IGNsYXNzIEludGVycHJldGVyIHtcblx0ZW52aXJvbm1lbnQ6IEVudmlyb25tZW50O1xuXHRvYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cdGV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmU7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0ZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LFxuXHRcdG9iamVjdFJlZ2lzdHJ5OiBPYmplY3RSZWdpc3RyeSxcblx0XHRldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lXG5cdCkge1xuXHRcdHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcblx0XHR0aGlzLm9iamVjdFJlZ2lzdHJ5ID0gb2JqZWN0UmVnaXN0cnk7XG5cdFx0dGhpcy5ldmVudFBpcGVsaW5lID0gZXZlbnRQaXBlbGluZTtcblxuXHRcdHJlZ2lzdGVyTmF0aXZlQ2xhc3NlcyhvYmplY3RSZWdpc3RyeSwgZW52aXJvbm1lbnQpO1xuXHRcdHJlZ2lzdGVyTmF0aXZlRnVuY3Rpb25zKGVudmlyb25tZW50KTtcblx0fVxuXG5cdHJ1bihhc3Q6IEFTVE5vZGUpIHtcblx0XHRldmFsTm9kZShhc3QsIHRoaXMub2JqZWN0UmVnaXN0cnksIHRoaXMuZW52aXJvbm1lbnQsIHRoaXMuZXZlbnRQaXBlbGluZSk7XG5cdH1cbn1cbiIsCiAgICAiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0RmlsZUxvYWRlciB7XG5cdGFic3RyYWN0IGxvYWQodXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz47XG59XG5cbmV4cG9ydCBjbGFzcyBGZXRjaEZpbGVMb2FkZXIgZXh0ZW5kcyBBYnN0cmFjdEZpbGVMb2FkZXIge1xuXHRvdmVycmlkZSBsb2FkKHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gZmV0Y2godXJsKVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxuXHR9XG59XG4iLAogICAgImV4cG9ydCB0eXBlIEV2ZW50SGFuZGxlcjxUID0gYW55PiA9IChwYXlsb2FkOiBUKSA9PiB2b2lkO1xuXG5leHBvcnQgY2xhc3MgRXZlbnRQaXBlbGluZSB7XG5cdHByaXZhdGUgbGlzdGVuZXJzOiBNYXA8c3RyaW5nLCBTZXQ8RXZlbnRIYW5kbGVyPj4gPSBuZXcgTWFwPHN0cmluZywgU2V0PEV2ZW50SGFuZGxlcj4+KCk7XG5cblx0b248VCA9IGFueT4oZXZlbnQ6IHN0cmluZywgaGFuZGxlcjogRXZlbnRIYW5kbGVyPFQ+KTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLmxpc3RlbmVycy5oYXMoZXZlbnQpKSB7XG5cdFx0XHR0aGlzLmxpc3RlbmVycy5zZXQoZXZlbnQsIG5ldyBTZXQoKSk7XG5cdFx0fVxuXHRcdHRoaXMubGlzdGVuZXJzLmdldChldmVudCkhLmFkZChoYW5kbGVyKTtcblx0fVxuXG5cdG9mZjxUID0gYW55PihldmVudDogc3RyaW5nLCBoYW5kbGVyOiBFdmVudEhhbmRsZXI8VD4pOiB2b2lkIHtcblx0XHR0aGlzLmxpc3RlbmVycy5nZXQoZXZlbnQpXG5cdFx0ICAgID8uZGVsZXRlKGhhbmRsZXIpO1xuXHR9XG5cblx0ZW1pdDxUID0gYW55PihldmVudDogc3RyaW5nLCBwYXlsb2FkOiBUKTogdm9pZCB7XG5cdFx0dGhpcy5saXN0ZW5lcnMuZ2V0KGV2ZW50KVxuXHRcdCAgICA/LmZvckVhY2goKGhhbmRsZXI6IEV2ZW50SGFuZGxlcik6IHZvaWQgPT4gaGFuZGxlcihwYXlsb2FkKSk7XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5pbXBvcnQge0Vudmlyb25tZW50fSBmcm9tIFwiLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5pbXBvcnQge09iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9yZWdpc3RyeVwiO1xuaW1wb3J0IHtUeXBlQ2hlY2tlcn0gZnJvbSBcIi4vdHlwZXMvdHlwZWNoZWNrZXJcIjtcbmltcG9ydCB7TGlua2VyfSBmcm9tIFwiLi9saW5rZXIvbGlua2VyXCI7XG5pbXBvcnQge1Rlc3RTdWl0ZXN9IGZyb20gXCIuL3Rlc3RzL3Rlc3RzdWl0ZXNcIjtcbmltcG9ydCB7SW50ZXJwcmV0ZXJ9IGZyb20gXCIuL2ludGVycHJldGVyL2ludGVycHJldGVyXCI7XG5pbXBvcnQge0ZldGNoRmlsZUxvYWRlcn0gZnJvbSBcIi4vbG9hZGVyc1wiO1xuaW1wb3J0IHtBU1ROb2RlfSBmcm9tIFwiLi9hc3RcIjtcbmltcG9ydCB7UGFyc2VyfSBmcm9tIFwiLi9wYXJzZXIvcGFyc2VyXCI7XG5pbXBvcnQge0V2ZW50UGlwZWxpbmV9IGZyb20gXCIuL2V2ZW50L3BpcGVsaW5lXCI7XG5cbmV4cG9ydCBjbGFzcyBMeXJhU2NyaXB0UHJvZ3JhbSB7XG5cdHByaXZhdGUgZ2xvYmFsRW52aXJvbm1lbnQ6IEVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KCk7XG5cdHByaXZhdGUgZ2xvYmFsT2JqZWN0UmVnaXN0cnk6IE9iamVjdFJlZ2lzdHJ5ID0gbmV3IE9iamVjdFJlZ2lzdHJ5KCk7XG5cdHByaXZhdGUgZ2xvYmFsRXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZTtcblxuXHRwcml2YXRlIHR5cGVDaGVja2VyOiBUeXBlQ2hlY2tlciA9IG5ldyBUeXBlQ2hlY2tlcih0aGlzLmdsb2JhbE9iamVjdFJlZ2lzdHJ5KTtcblx0cHJpdmF0ZSBsaW5rZXI6IExpbmtlciA9IG5ldyBMaW5rZXIodGhpcy5nbG9iYWxFbnZpcm9ubWVudCwgdGhpcy5nbG9iYWxPYmplY3RSZWdpc3RyeSwgbmV3IEZldGNoRmlsZUxvYWRlcigpKTtcblxuXHRwcml2YXRlIGludGVycHJldGVyOiBJbnRlcnByZXRlcjtcblx0cHJpdmF0ZSB0ZXN0U3VpdGU6IFRlc3RTdWl0ZXM7XG5cblx0cHJpdmF0ZSByZWFkb25seSBpc0RlYnVnOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgc3RhcnRUaW1lOiBudW1iZXIgPSAwO1xuXG5cdGNvbnN0cnVjdG9yKGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSwgZ2xvYmFsRXZlbnRQaXBlbGluZTogRXZlbnRQaXBlbGluZSA9IG5ldyBFdmVudFBpcGVsaW5lKCkpIHtcblx0XHR0aGlzLmlzRGVidWcgPSBpc0RlYnVnO1xuXG5cdFx0dGhpcy5pbnRlcnByZXRlciA9IG5ldyBJbnRlcnByZXRlcihcblx0XHRcdHRoaXMuZ2xvYmFsRW52aXJvbm1lbnQsXG5cdFx0XHR0aGlzLmdsb2JhbE9iamVjdFJlZ2lzdHJ5LFxuXHRcdFx0Z2xvYmFsRXZlbnRQaXBlbGluZVxuXHRcdCk7XG5cblx0XHR0aGlzLnRlc3RTdWl0ZSA9IG5ldyBUZXN0U3VpdGVzKFxuXHRcdFx0dGhpcy5nbG9iYWxFbnZpcm9ubWVudCxcblx0XHRcdHRoaXMuZ2xvYmFsT2JqZWN0UmVnaXN0cnksXG5cdFx0XHRnbG9iYWxFdmVudFBpcGVsaW5lXG5cdFx0KTtcblxuXHRcdHRoaXMuZ2xvYmFsRXZlbnRQaXBlbGluZSA9IGdsb2JhbEV2ZW50UGlwZWxpbmU7XG5cdH1cblxuXHRnZXRHbG9iYWxPYmplY3RSZWdpc3RyeSgpOiBPYmplY3RSZWdpc3RyeSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2xvYmFsT2JqZWN0UmVnaXN0cnk7XG5cdH1cblxuXG5cdGdldEdsb2JhbEVudmlyb25tZW50KCk6IEVudmlyb25tZW50IHtcblx0XHRyZXR1cm4gdGhpcy5nbG9iYWxFbnZpcm9ubWVudDtcblx0fVxuXG5cdGdldEdsb2JhbEV2ZW50UGlwZWxpbmUoKTogRXZlbnRQaXBlbGluZSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2xvYmFsRXZlbnRQaXBlbGluZTtcblx0fVxuXG5cdGFzeW5jIGV4ZWN1dGUoc291cmNlOiBTb3VyY2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gdGhpcy5ydW5QaXBlbGluZShzb3VyY2UpXG5cdFx0ICAgICAgICAgICAudGhlbigoYXN0OiBBU1ROb2RlKSA9PiB7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlU3RhcnRUaW1lKCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuaW50ZXJwcmV0ZXIucnVuKGFzdCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlRW5kVGltZSgnaW50ZXJwcmV0ZXInKTtcblx0XHQgICAgICAgICAgIH0pO1xuXHR9XG5cblx0YXN5bmMgZXhlY3V0ZVRlc3Qoc291cmNlOiBTb3VyY2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gdGhpcy5ydW5QaXBlbGluZShzb3VyY2UpXG5cdFx0ICAgICAgICAgICAudGhlbigoYXN0OiBBU1ROb2RlKSA9PiB7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlU3RhcnRUaW1lKCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMudGVzdFN1aXRlLnJ1bihhc3QpO1xuXHRcdFx0ICAgICAgICAgICB0aGlzLmRlYnVnTWVhc3VyZUVuZFRpbWUoJ3Rlc3QnKTtcblx0XHQgICAgICAgICAgIH0pO1xuXHR9XG5cblx0ZGVidWcodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzRGVidWcpIHtcblx0XHRcdGNvbnNvbGUubG9nKHZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRkZWJ1Z01lYXN1cmVTdGFydFRpbWUoKTogdm9pZCB7XG5cdFx0dGhpcy5zdGFydFRpbWUgPSB0aGlzLmRlYnVnVGltZXN0YW1wKCk7XG5cdH1cblxuXHRkZWJ1Z01lYXN1cmVFbmRUaW1lKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuZGVidWcobWVzc2FnZSArICc6ICcgKyAodGhpcy5kZWJ1Z1RpbWVzdGFtcCgpIC0gdGhpcy5zdGFydFRpbWUpICsgJ21zJyk7XG5cdH1cblxuXHRkZWJ1Z1RpbWVzdGFtcCgpOiBudW1iZXIge1xuXHRcdGlmICghdGhpcy5pc0RlYnVnKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdFx0cmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3luYyBydW5QaXBlbGluZShzb3VyY2U6IFNvdXJjZSk6IFByb21pc2U8QVNUTm9kZT4ge1xuXHRcdHRoaXMuZGVidWdNZWFzdXJlU3RhcnRUaW1lKClcblx0XHRjb25zdCBhc3Q6IEFTVE5vZGUgPSBuZXcgUGFyc2VyKHNvdXJjZSkucGFyc2UoKTtcblx0XHR0aGlzLmRlYnVnTWVhc3VyZUVuZFRpbWUoJ3BhcnNlcicpXG5cdFx0dGhpcy5kZWJ1Zyhhc3QpO1xuXG5cdFx0cmV0dXJuIHRoaXMubGlua2VyLmxpbmtTb3VyY2VzKGFzdClcblx0XHQgICAgICAgICAgIC50aGVuKCgpOiB2b2lkID0+IHtcblx0XHRcdCAgICAgICAgICAgdGhpcy50eXBlQ2hlY2tlci5jb2xsZWN0QWxsU3ltYm9sc0Zyb21SZWdpc3RyeSh0aGlzLmdsb2JhbE9iamVjdFJlZ2lzdHJ5KTtcblx0XHQgICAgICAgICAgIH0pXG5cdFx0ICAgICAgICAgICAudGhlbigoKTogQVNUTm9kZSA9PiB7XG5cdFx0XHQgICAgICAgICAgIHRoaXMuZGVidWdNZWFzdXJlU3RhcnRUaW1lKCk7XG5cdFx0XHQgICAgICAgICAgIHRoaXMudHlwZUNoZWNrZXIuY2hlY2soYXN0KTtcblx0XHRcdCAgICAgICAgICAgdGhpcy5kZWJ1Z01lYXN1cmVFbmRUaW1lKCd0eXBlY2hlY2tlcicpO1xuXG5cdFx0XHQgICAgICAgICAgIHJldHVybiBhc3Q7XG5cdFx0ICAgICAgICAgICB9KTtcblx0fVxufVxuIiwKICAgICJjb25zdCBET01fRVZFTlQ6IHN0cmluZyA9ICdkb206ZXZlbnQnO1xuXG5jb25zdCBpc0V2ZW50OiAocHJvcGVydHlLZXk6IHN0cmluZykgPT4gYm9vbGVhbiA9IChwcm9wZXJ0eUtleTogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG5cdHJldHVybiBwcm9wZXJ0eUtleS50b0xvd2VyQ2FzZSgpXG5cdCAgICAgICAgICAgICAgICAgIC5zdGFydHNXaXRoKCdvbicpO1xufVxuXG5leHBvcnQgY29uc3QgRXZlbnRzID0ge1xuXHRET01fRVZFTlQsXG5cdGlzRXZlbnQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudHM7XG4iLAogICAgIi8vLyA8cmVmZXJlbmNlIGxpYj1cImRvbVwiIC8+XG5cbmltcG9ydCB0eXBlIHtQcm9wcywgVkNoaWxkLCBWVGV4dH0gZnJvbSBcIi4uL2NvcmUvdmRvbS92ZG9tXCI7XG5pbXBvcnQge0xhbWJkYUZ1bmN0aW9uQ2FsbH0gZnJvbSBcIi4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfcnVudGltZVwiO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcbmltcG9ydCB0eXBlIHtBcHBsaWNhdGlvblJ1bnRpbWV9IGZyb20gXCIuL3J1bnRpbWVcIjtcbmltcG9ydCB7VkRPTX0gZnJvbSBcIi4vcmVnaXN0cnlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBFbGVtZW50Q3JlYXRvciB7XG5cdGNyZWF0ZSh2Tm9kZTogVkNoaWxkKTogTm9kZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbGVtZW50UGF0Y2hlciB7XG5cdHBhdGNoKG9sZFZOb2RlOiBWQ2hpbGQgfCBudWxsLCBuZXdOb2RlOiBWQ2hpbGQpOiB2b2lkXG59XG5cbmV4cG9ydCBjbGFzcyBIVE1MRWxlbWVudENyZWF0b3IgaW1wbGVtZW50cyBFbGVtZW50Q3JlYXRvciB7XG5cdHByaXZhdGUgdGV4dEJ1ZmZlcjogVlRleHRbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgYXBwbGljYXRpb25SdW50aW1lOiBBcHBsaWNhdGlvblJ1bnRpbWUsXG5cdFx0cHJpdmF0ZSByZWFkb25seSB2ZG9tOiBWRE9NXG5cdCkge1xuXHR9XG5cblx0cHVibGljIGNyZWF0ZSh2Tm9kZTogVkNoaWxkKTogTm9kZSB7XG5cdFx0aWYgKHZOb2RlLnR5cGUgPT09ICd0ZXh0Jykge1xuXHRcdFx0Y29uc3QgdGV4dE5vZGU6IFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2Tm9kZS52YWx1ZSk7XG5cdFx0XHR2Tm9kZS5kb20gPSB0ZXh0Tm9kZTtcblx0XHRcdHJldHVybiB0ZXh0Tm9kZTtcblx0XHR9XG5cblx0XHRpZiAodk5vZGUudHlwZSA9PT0gJ2NvbXBvbmVudCcpIHtcblx0XHRcdHZOb2RlLmluc3RhbmNlID0gdGhpcy5hcHBsaWNhdGlvblJ1bnRpbWUuY3JlYXRlSW5zdGFuY2Uodk5vZGUuY2xhc3NOYW1lKTtcblxuXHRcdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModk5vZGUucHJvcHMgPz8ge30pKSB7XG5cdFx0XHRcdGlmIChrZXkgPT09ICdjaGlsZHJlbicpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodk5vZGUuaW5zdGFuY2UuaGFzUHVibGljUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0XHRcdHZOb2RlLmluc3RhbmNlLnNldFB1YmxpY1Byb3BlcnR5KGtleSwgdmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICghdk5vZGUuc3ViVHJlZSkge1xuXHRcdFx0XHR2Tm9kZS5zdWJUcmVlID0gdGhpcy5hcHBsaWNhdGlvblJ1bnRpbWUucmVuZGVyQ29tcG9uZW50KHZOb2RlLmluc3RhbmNlKSBhcyBWQ2hpbGQ7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMudmRvbS5yZWdpc3Rlcih2Tm9kZS5pbnN0YW5jZSwgdk5vZGUuc3ViVHJlZSk7XG5cblx0XHRcdGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5jcmVhdGUodk5vZGUuc3ViVHJlZSkgYXMgSFRNTEVsZW1lbnQ7XG5cdFx0XHR2Tm9kZS5kb20gPSBlbGVtZW50O1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHZOb2RlLnRhZykgYXMgSFRNTEVsZW1lbnQ7XG5cdFx0dk5vZGUuZG9tID0gZWxlbWVudDtcblxuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHZOb2RlLnByb3BzID8/IHt9KSkge1xuXHRcdFx0aWYgKEV2ZW50cy5pc0V2ZW50KGtleSkpIHtcblx0XHRcdFx0dGhpcy5hcHBsaWNhdGlvblJ1bnRpbWUuYWRkRXZlbnRIYW5kbGVyKGVsZW1lbnQsIGtleSwgdmFsdWUgYXMgTGFtYmRhRnVuY3Rpb25DYWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgU3RyaW5nKHZhbHVlKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiB2Tm9kZS5jaGlsZHJlbikge1xuXHRcdFx0ZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZShjaGlsZCkgYXMgSFRNTEVsZW1lbnQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBIVE1MRWxlbWVudFBhdGNoZXIgaW1wbGVtZW50cyBFbGVtZW50UGF0Y2hlciB7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgbW91bnRQb2ludDogSFRNTEVsZW1lbnQsXG5cdCAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgYXBwbGljYXRpb25SdW50aW1lOiBBcHBsaWNhdGlvblJ1bnRpbWUsXG5cdCAgICAgICAgICAgIHZkb206IFZET00sXG5cdCAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudENyZWF0b3I6IEVsZW1lbnRDcmVhdG9yID0gbmV3IEhUTUxFbGVtZW50Q3JlYXRvcihhcHBsaWNhdGlvblJ1bnRpbWUsIHZkb20pKSB7XG5cdH1cblxuXHRwdWJsaWMgcGF0Y2gob2xkTm9kZTogVkNoaWxkIHwgbnVsbCwgbmV3Tm9kZTogVkNoaWxkKTogdm9pZCB7XG5cdFx0aWYgKCFvbGROb2RlKSB7XG5cdFx0XHRjb25zdCBlbGVtZW50OiBOb2RlID0gdGhpcy5lbGVtZW50Q3JlYXRvci5jcmVhdGUobmV3Tm9kZSk7XG5cdFx0XHR0aGlzLm1vdW50UG9pbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cdFx0XHRuZXdOb2RlLmRvbSA9IGVsZW1lbnQ7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5wYXRjaE5vZGUodGhpcy5tb3VudFBvaW50LCBvbGROb2RlLCBuZXdOb2RlKTtcblx0fVxuXG5cdHByaXZhdGUgcGF0Y2hOb2RlKHBhcmVudDogTm9kZSwgb2xkTm9kZTogVkNoaWxkLCBuZXdOb2RlOiBWQ2hpbGQpOiB2b2lkIHtcblx0XHRpZiAob2xkTm9kZS50eXBlID09PSAndGV4dCcgJiYgbmV3Tm9kZS50eXBlID09PSAndGV4dCcpIHtcblx0XHRcdGNvbnN0IHRleHROb2RlOiBOb2RlID0gb2xkTm9kZS5kb20hO1xuXHRcdFx0aWYgKHRleHROb2RlLnRleHRDb250ZW50ICE9PSBuZXdOb2RlLnZhbHVlKSB7XG5cdFx0XHRcdHRleHROb2RlLnRleHRDb250ZW50ID0gbmV3Tm9kZS52YWx1ZTtcblx0XHRcdH1cblx0XHRcdG5ld05vZGUuZG9tID0gdGV4dE5vZGU7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKG9sZE5vZGUudHlwZSAhPT0gbmV3Tm9kZS50eXBlKSB7XG5cdFx0XHRjb25zdCBuZXdFbGVtZW50OiBOb2RlID0gdGhpcy5lbGVtZW50Q3JlYXRvci5jcmVhdGUobmV3Tm9kZSk7XG5cdFx0XHRwYXJlbnQucmVwbGFjZUNoaWxkKG5ld0VsZW1lbnQsIG9sZE5vZGUuZG9tISk7XG5cdFx0XHRuZXdOb2RlLmRvbSA9IG5ld0VsZW1lbnQ7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKG5ld05vZGUudHlwZSA9PT0gJ2NvbXBvbmVudCcpIHtcblx0XHRcdGNvbnN0IG5ld0VsZW1lbnQ6IE5vZGUgPSB0aGlzLmVsZW1lbnRDcmVhdG9yLmNyZWF0ZShuZXdOb2RlKTtcblx0XHRcdGlmICghb2xkTm9kZS5kb20pIHtcblx0XHRcdFx0cGFyZW50LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuXHRcdFx0fSBlbHNlIGlmIChvbGROb2RlLmRvbSAhPT0gbmV3RWxlbWVudCkge1xuXHRcdFx0XHRwYXJlbnQucmVwbGFjZUNoaWxkKG5ld0VsZW1lbnQsIG9sZE5vZGUuZG9tISk7XG5cdFx0XHR9XG5cdFx0XHRuZXdOb2RlLmRvbSA9IG5ld0VsZW1lbnQ7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgZG9tOiBIVE1MRWxlbWVudCA9IG9sZE5vZGUuZG9tIGFzIEhUTUxFbGVtZW50O1xuXHRcdG5ld05vZGUuZG9tID0gZG9tO1xuXG5cdFx0aWYgKG9sZE5vZGUudHlwZSAhPT0gJ3RleHQnICYmIG5ld05vZGUudHlwZSAhPT0gJ3RleHQnKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZVByb3BlcnRpZXMoZG9tLCBvbGROb2RlLnByb3BzID8/IHt9LCBuZXdOb2RlLnByb3BzID8/IHt9KTtcblxuXHRcdFx0aWYgKG9sZE5vZGUudHlwZSA9PT0gJ2VsZW1lbnQnICYmIG5ld05vZGUudHlwZSA9PT0gJ2VsZW1lbnQnKSB7XG5cdFx0XHRcdHRoaXMucGF0Y2hDaGlsZHJlbihkb20sIG9sZE5vZGUuY2hpbGRyZW4sIG5ld05vZGUuY2hpbGRyZW4pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgdXBkYXRlUHJvcGVydGllcyhlbGVtZW50OiBIVE1MRWxlbWVudCwgb2xkUHJvcGVydGllczogUHJvcHMsIG5ld1Byb3BlcnRpZXM6IFByb3BzKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBrZXkgaW4gb2xkUHJvcGVydGllcykge1xuXHRcdFx0aWYgKCEoa2V5IGluIG5ld1Byb3BlcnRpZXMpKSB7XG5cdFx0XHRcdGlmIChFdmVudHMuaXNFdmVudChrZXkpKSB7XG5cdFx0XHRcdFx0dGhpcy5hcHBsaWNhdGlvblJ1bnRpbWUucmVtb3ZlRXZlbnRIYW5kbGVyKGVsZW1lbnQsIGtleSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgcHJvcGVydHlLZXkgaW4gbmV3UHJvcGVydGllcykge1xuXHRcdFx0Y29uc3Qgb2xkVmFsdWU6IGFueSA9IG9sZFByb3BlcnRpZXNbcHJvcGVydHlLZXldO1xuXHRcdFx0Y29uc3QgbmV3VmFsdWU6IGFueSA9IG5ld1Byb3BlcnRpZXNbcHJvcGVydHlLZXldO1xuXG5cdFx0XHRpZiAob2xkVmFsdWUgPT09IG5ld1ZhbHVlKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoRXZlbnRzLmlzRXZlbnQocHJvcGVydHlLZXkpKSB7XG5cdFx0XHRcdGlmIChvbGRWYWx1ZSkge1xuXHRcdFx0XHRcdHRoaXMuYXBwbGljYXRpb25SdW50aW1lLnJlbW92ZUV2ZW50SGFuZGxlcihlbGVtZW50LCBwcm9wZXJ0eUtleSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5hcHBsaWNhdGlvblJ1bnRpbWUuYWRkRXZlbnRIYW5kbGVyKGVsZW1lbnQsIHByb3BlcnR5S2V5LCBuZXdWYWx1ZSBhcyBMYW1iZGFGdW5jdGlvbkNhbGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcGVydHlLZXksIG5ld1ZhbHVlIGFzIHN0cmluZyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBwYXRjaENoaWxkcmVuKHBhcmVudDogTm9kZSwgb2xkQ2hpbGRyZW46IFZDaGlsZFtdLCBuZXdDaGlsZHJlbjogVkNoaWxkW10pOiB2b2lkIHtcblx0XHRjb25zdCBvbGRMZW5ndGg6IG51bWJlciA9IG9sZENoaWxkcmVuLmxlbmd0aDtcblx0XHRjb25zdCBuZXdMZW5ndGg6IG51bWJlciA9IG5ld0NoaWxkcmVuLmxlbmd0aDtcblx0XHRjb25zdCBjb21tb25MZW5ndGg6IG51bWJlciA9IE1hdGgubWluKG9sZExlbmd0aCwgbmV3TGVuZ3RoKTtcblxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBjb21tb25MZW5ndGg7IGkrKykge1xuXHRcdFx0dGhpcy5wYXRjaE5vZGUocGFyZW50LCBvbGRDaGlsZHJlbltpXSBhcyBWQ2hpbGQsIG5ld0NoaWxkcmVuW2ldIGFzIFZDaGlsZCk7XG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gY29tbW9uTGVuZ3RoOyBpIDwgbmV3TGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IG5ld0NoaWxkOiBWQ2hpbGQgPSBuZXdDaGlsZHJlbltpXSBhcyBWQ2hpbGQ7XG5cdFx0XHRjb25zdCBuZXdFbGVtZW50OiBIVE1MTWFwRWxlbWVudCA9IHRoaXMuZWxlbWVudENyZWF0b3IuY3JlYXRlKG5ld0NoaWxkKSBhcyBIVE1MTWFwRWxlbWVudDtcblx0XHRcdHBhcmVudC5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcblxuXHRcdFx0bmV3Q2hpbGQuZG9tID0gbmV3RWxlbWVudDtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSBvbGRMZW5ndGggLSAxOyBpID49IG5ld0xlbmd0aDsgaS0tKSB7XG5cdFx0XHRjb25zdCBvbGRDaGlsZDogVkNoaWxkID0gb2xkQ2hpbGRyZW5baV0gYXMgVkNoaWxkO1xuXHRcdFx0Y29uc3QgZG9tOiBOb2RlIHwgdW5kZWZpbmVkID0gb2xkQ2hpbGQuZG9tO1xuXHRcdFx0aWYgKGRvbSkge1xuXHRcdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQoZG9tKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsCiAgICAiaW1wb3J0IHtMeXJhU2NyaXB0UHJvZ3JhbX0gZnJvbSBcIi4uL2NvcmUvcHJvZ3JhbVwiO1xuaW1wb3J0IHtmZXRjaFNvdXJjZX0gZnJvbSBcIi4uL2NvcmUvcGFyc2VyL3BhcnNlcl9zb3VyY2VcIjtcbmltcG9ydCB7Q2xhc3NEZWZpbml0aW9uLCBFbnZpcm9ubWVudCwgSW5zdGFuY2V9IGZyb20gXCIuLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX29iamVjdHNcIjtcbmltcG9ydCB7T2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge2NhbGxJbnN0YW5jZU1ldGhvZCwgTGFtYmRhRnVuY3Rpb25DYWxsfSBmcm9tIFwiLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9ydW50aW1lXCI7XG5pbXBvcnQge0V2ZW50VHlwZX0gZnJvbSBcIi4uL2xpYnJhcnkvY2xhc3Nlcy9ldmVudFwiO1xuaW1wb3J0IHtFdmVudFBpcGVsaW5lfSBmcm9tIFwiLi4vY29yZS9ldmVudC9waXBlbGluZVwiO1xuXG5jb25zdCBseXJhRXZlbnRDbGFzc0RlZjogQ2xhc3NEZWZpbml0aW9uID0gbmV3IEV2ZW50VHlwZSgpLmdldENsYXNzRGVmaW5pdGlvbigpO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVuZ2luZSB7XG5cdGV4ZWN1dGVFbnRyeUZpbGUodXJsOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcblxuXHRjcmVhdGVJbnN0YW5jZShjbGFzc05hbWU6IHN0cmluZyk6IEluc3RhbmNlO1xuXG5cdGdldE9iamVjdFJlZ2lzdHJ5KCk6IE9iamVjdFJlZ2lzdHJ5O1xuXG5cdGdldEVudmlyb25tZW50KCk6IEVudmlyb25tZW50O1xuXG5cdGdldFJvb3RJbnN0YW5jZSgpOiBJbnN0YW5jZTtcblxuXHRjYWxsUm9vdEluc3RhbmNlTWV0aG9kKG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10pOiBhbnk7XG5cblx0Y2FsbEluc3RhbmNlTWV0aG9kKGluc3RhbmNlOiBJbnN0YW5jZSwgbWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBBcnJheTxhbnk+KTogYW55O1xuXG5cdGNyZWF0ZUV2ZW50KGV2ZW50OiBFdmVudCk6IEluc3RhbmNlO1xuXG5cdGNyZWF0ZUV2ZW50SGFuZGxlcihoYW5kbGVyOiBMYW1iZGFGdW5jdGlvbkNhbGwsIGV2ZW50TmFtZTogc3RyaW5nKTogKGV2ZW50OiBFdmVudCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIFdlYkx5cmFTY3JpcHQgaW1wbGVtZW50cyBFbmdpbmUge1xuXHRwcml2YXRlIHJlYWRvbmx5IHByb2dyYW06IEx5cmFTY3JpcHRQcm9ncmFtO1xuXHRwcml2YXRlIHJlYWRvbmx5IF9nbG9iYWxPYmplY3RSZWdpc3RyeTogT2JqZWN0UmVnaXN0cnk7XG5cdHByaXZhdGUgcmVhZG9ubHkgX2dsb2JhbEVudmlyb25tZW50OiBFbnZpcm9ubWVudDtcblx0cHJpdmF0ZSByb290SW5zdGFuY2U6IEluc3RhbmNlIHwgbnVsbCA9IG51bGw7XG5cblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGdsb2JhbEV2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUgPSBuZXcgRXZlbnRQaXBlbGluZSgpLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpIHtcblx0XHR0aGlzLnByb2dyYW0gPSBuZXcgTHlyYVNjcmlwdFByb2dyYW0oaXNEZWJ1ZywgdGhpcy5nbG9iYWxFdmVudFBpcGVsaW5lKTtcblx0XHR0aGlzLl9nbG9iYWxPYmplY3RSZWdpc3RyeSA9IHRoaXMucHJvZ3JhbS5nZXRHbG9iYWxPYmplY3RSZWdpc3RyeSgpO1xuXHRcdHRoaXMuX2dsb2JhbEVudmlyb25tZW50ID0gdGhpcy5wcm9ncmFtLmdldEdsb2JhbEVudmlyb25tZW50KCk7XG5cdH1cblxuXHRnZXRPYmplY3RSZWdpc3RyeSgpOiBPYmplY3RSZWdpc3RyeSB7XG5cdFx0cmV0dXJuIHRoaXMuX2dsb2JhbE9iamVjdFJlZ2lzdHJ5O1xuXHR9XG5cblx0Z2V0RW52aXJvbm1lbnQoKTogRW52aXJvbm1lbnQge1xuXHRcdHJldHVybiB0aGlzLl9nbG9iYWxFbnZpcm9ubWVudDtcblx0fVxuXG5cdHB1YmxpYyBnZXRSb290SW5zdGFuY2UoKTogSW5zdGFuY2Uge1xuXHRcdGlmICh0aGlzLnJvb3RJbnN0YW5jZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdObyByb290IGluc3RhbmNlIGF2YWlsYWJsZS4nKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMucm9vdEluc3RhbmNlO1xuXHR9XG5cblx0cHVibGljIGNyZWF0ZUluc3RhbmNlKGNsYXNzTmFtZTogc3RyaW5nKTogSW5zdGFuY2Uge1xuXHRcdHJldHVybiB0aGlzLmdldENsYXNzRGVmaW5pdGlvbihjbGFzc05hbWUpXG5cdFx0ICAgICAgICAgICAuY29uc3RydWN0TmV3SW5zdGFuY2VXaXRob3V0QXJndW1lbnRzKFxuXHRcdFx0ICAgICAgICAgICB0aGlzLl9nbG9iYWxPYmplY3RSZWdpc3RyeSxcblx0XHRcdCAgICAgICAgICAgdGhpcy5fZ2xvYmFsRW52aXJvbm1lbnQsXG5cdFx0XHQgICAgICAgICAgIHRoaXMuZ2xvYmFsRXZlbnRQaXBlbGluZVxuXHRcdCAgICAgICAgICAgKTtcblx0fVxuXG5cdHB1YmxpYyBjYWxsUm9vdEluc3RhbmNlTWV0aG9kKG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10pOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLmNhbGxJbnN0YW5jZU1ldGhvZCh0aGlzLmdldFJvb3RJbnN0YW5jZSgpLCBtZXRob2ROYW1lLCBhcmdzKTtcblx0fVxuXG5cdHB1YmxpYyBjYWxsSW5zdGFuY2VNZXRob2QoaW5zdGFuY2U6IEluc3RhbmNlLCBtZXRob2ROYW1lOiBzdHJpbmcsIGFyZ3M6IGFueVtdKTogYW55IHtcblx0XHRyZXR1cm4gY2FsbEluc3RhbmNlTWV0aG9kKFxuXHRcdFx0aW5zdGFuY2UsXG5cdFx0XHRpbnN0YW5jZS5maW5kZU1ldGhvZE5vZGUobWV0aG9kTmFtZSksXG5cdFx0XHRhcmdzLFxuXHRcdFx0dGhpcy5fZ2xvYmFsT2JqZWN0UmVnaXN0cnksXG5cdFx0XHR0aGlzLl9nbG9iYWxFbnZpcm9ubWVudCxcblx0XHRcdHRoaXMuZ2xvYmFsRXZlbnRQaXBlbGluZVxuXHRcdCk7XG5cdH1cblxuXHRwdWJsaWMgYXN5bmMgZXhlY3V0ZUVudHJ5RmlsZSh1cmw6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gdGhpcy5wcm9ncmFtLmV4ZWN1dGUoYXdhaXQgZmV0Y2hTb3VyY2UodXJsKSlcblx0XHQgICAgICAgICAgIC50aGVuKCgpID0+IHtcblx0XHRcdCAgICAgICAgICAgdGhpcy5yb290SW5zdGFuY2UgPSB0aGlzLmNyZWF0ZUluc3RhbmNlKGNsYXNzTmFtZSk7XG5cdFx0ICAgICAgICAgICB9KTtcblx0fVxuXG5cdHB1YmxpYyBjcmVhdGVFdmVudChldmVudDogRXZlbnQpOiBJbnN0YW5jZSB7XG5cdFx0cmV0dXJuIGx5cmFFdmVudENsYXNzRGVmLmNvbnN0cnVjdE5hdGl2ZUluc3RhbmNlKFtldmVudF0pO1xuXHR9XG5cblx0cHVibGljIGNyZWF0ZUV2ZW50SGFuZGxlcihoYW5kbGVyOiBMYW1iZGFGdW5jdGlvbkNhbGwsIGV2ZW50TmFtZTogc3RyaW5nKTogKGV2ZW50OiBFdmVudCkgPT4gdm9pZCB7XG5cdFx0cmV0dXJuIChldmVudDogRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdHRoaXMuZ2xvYmFsRXZlbnRQaXBlbGluZS5lbWl0KFxuXHRcdFx0XHRldmVudE5hbWUsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpbnZva2U6ICgpOiBhbnkgPT4ge1xuXHRcdFx0XHRcdFx0aGFuZGxlci5ldmFsQ2FsbCh0aGlzLmNyZWF0ZUV2ZW50KGV2ZW50KSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRldmVudFxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH07XG5cdH1cblxuXG5cdHByaXZhdGUgZ2V0Q2xhc3NEZWZpbml0aW9uKGNsYXNzTmFtZTogc3RyaW5nKTogQ2xhc3NEZWZpbml0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5fZ2xvYmFsT2JqZWN0UmVnaXN0cnkuY2xhc3Nlcy5nZXQoY2xhc3NOYW1lKTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge3R5cGUgVk5vZGV9IGZyb20gXCIuLi9jb3JlL3Zkb20vdmRvbVwiO1xuaW1wb3J0IHR5cGUge0luc3RhbmNlfSBmcm9tIFwiLi4vY29yZS9pbnRlcnByZXRlci9pbnRlcnByZXRlcl9vYmplY3RzXCI7XG5cbmV4cG9ydCBjbGFzcyBFdmVudEhhbmRsZXJSZWdpc3RyeSB7XG5cdHByaXZhdGUgcmVnaXN0cnk6IFdlYWtNYXA8SFRNTEVsZW1lbnQsIFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uPj4gPSBuZXcgV2Vha01hcDxIVE1MRWxlbWVudCwgUmVjb3JkPHN0cmluZywgRnVuY3Rpb24+PigpO1xuXG5cdHB1YmxpYyByZWdpc3RlcihlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcGVydHlLZXk6IHN0cmluZywgaGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcblx0XHRjb25zdCBldmVudEhhbmRsZXJzOiBSZWNvcmQ8c3RyaW5nLCBGdW5jdGlvbj4gPSB0aGlzLnJlZ2lzdHJ5LmdldChlbGVtZW50KSA/PyB7fTtcblxuXHRcdGV2ZW50SGFuZGxlcnNbcHJvcGVydHlLZXldID0gaGFuZGxlcjtcblxuXHRcdHRoaXMucmVnaXN0cnkuc2V0KGVsZW1lbnQsIGV2ZW50SGFuZGxlcnMpO1xuXHR9XG5cblx0cHVibGljIHVucmVnaXN0ZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIHByb3BlcnR5S2V5OiBzdHJpbmcpOiBGdW5jdGlvbiB8IG51bGwge1xuXHRcdGNvbnN0IGV2ZW50SGFuZGxlcnM6IFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uPiA9IHRoaXMucmVnaXN0cnkuZ2V0KGVsZW1lbnQpID8/IHt9O1xuXG5cdFx0Y29uc3QgZXZlbnRIYW5kbGVyOiBGdW5jdGlvbiB8IHVuZGVmaW5lZCA9IGV2ZW50SGFuZGxlcnNbcHJvcGVydHlLZXldO1xuXHRcdGlmIChldmVudEhhbmRsZXIpIHtcblx0XHRcdGRlbGV0ZSBldmVudEhhbmRsZXJzW3Byb3BlcnR5S2V5XTtcblxuXHRcdFx0dGhpcy5yZWdpc3RyeS5zZXQoZWxlbWVudCwgZXZlbnRIYW5kbGVycyk7XG5cblx0XHRcdHJldHVybiBldmVudEhhbmRsZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFZET00ge1xuXHRwcml2YXRlIGluc3RhbmNlTWFwOiBNYXA8c3RyaW5nLCBWTm9kZT4gPSBuZXcgTWFwPHN0cmluZywgVk5vZGU+KCk7XG5cblx0cHVibGljIHJlZ2lzdGVyKGluc3RhbmNlOiBJbnN0YW5jZSwgbm9kZTogVk5vZGUpOiB2b2lkIHtcblx0XHR0aGlzLmluc3RhbmNlTWFwLnNldChpbnN0YW5jZS5pZCwgbm9kZSk7XG5cdH1cblxuXHRwdWJsaWMgdW5yZWdpc3RlcihpbnN0YW5jZTogSW5zdGFuY2UpOiB2b2lkIHtcblx0XHR0aGlzLmluc3RhbmNlTWFwLmRlbGV0ZShpbnN0YW5jZS5pZCk7XG5cdH1cblxuXHRwdWJsaWMgZmluZE5vZGVCeUNvbXBvbmVudChpbnN0YW5jZTogSW5zdGFuY2UpOiBWTm9kZSB7XG5cdFx0Y29uc3Qgdk5vZGU6IFZOb2RlIHwgdW5kZWZpbmVkID0gdGhpcy5pbnN0YW5jZU1hcC5nZXQoaW5zdGFuY2UuaWQpO1xuXHRcdGlmICghdk5vZGUpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgSW5zdGFuY2Ugd2l0aCBpZCAke2luc3RhbmNlLmlkfSBub3QgZm91bmQuYCk7XG5cdFx0fVxuXHRcdHJldHVybiB2Tm9kZTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge3R5cGUgRW5naW5lLCBXZWJMeXJhU2NyaXB0fSBmcm9tIFwiLi9lbmdpbmVcIjtcbmltcG9ydCB7dHlwZSBFbGVtZW50UGF0Y2hlciwgSFRNTEVsZW1lbnRQYXRjaGVyfSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCB0eXBlIHtWQ2hpbGR9IGZyb20gXCIuLi9jb3JlL3Zkb20vdmRvbVwiO1xuaW1wb3J0IHtFdmVudFBpcGVsaW5lfSBmcm9tIFwiLi4vY29yZS9ldmVudC9waXBlbGluZVwiO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcbmltcG9ydCB7dHlwZSBJbnN0YW5jZX0gZnJvbSBcIi4uL2NvcmUvaW50ZXJwcmV0ZXIvaW50ZXJwcmV0ZXJfb2JqZWN0c1wiO1xuaW1wb3J0IHtMYW1iZGFGdW5jdGlvbkNhbGx9IGZyb20gXCIuLi9jb3JlL2ludGVycHJldGVyL2ludGVycHJldGVyX3J1bnRpbWVcIjtcbmltcG9ydCB7RXZlbnRIYW5kbGVyUmVnaXN0cnksIFZET019IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5pbXBvcnQgTHlyYUV2ZW50cyBmcm9tIFwiLi4vY29yZS9ldmVudC9ldmVudHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBcHBsaWNhdGlvblJ1bnRpbWUge1xuXHRnZXQgZW5naW5lKCk6IEVuZ2luZTtcblxuXHRnZXQgZXZlbnRQaXBlbGluZSgpOiBFdmVudFBpcGVsaW5lO1xuXG5cdHN0YXJ0KHVybDogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG5cblx0Y3JlYXRlSW5zdGFuY2UoY2xhc3NOYW1lOiBzdHJpbmcpOiBJbnN0YW5jZTtcblxuXHRjYWxsUm9vdEluc3RhbmNlTWV0aG9kKG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10pOiBhbnk7XG5cblx0Y2FsbE1ldGhvZChpbnN0YW5jZTogSW5zdGFuY2UsIG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10pOiBhbnk7XG5cblx0cmVuZGVyQ29tcG9uZW50KGluc3RhbmNlOiBJbnN0YW5jZSk6IFZDaGlsZDtcblxuXHRhZGRFdmVudEhhbmRsZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIHByb3BlcnR5S2V5OiBzdHJpbmcsIGhhbmRsZXI6IExhbWJkYUZ1bmN0aW9uQ2FsbCk6IHZvaWQ7XG5cblx0cmVtb3ZlRXZlbnRIYW5kbGVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwcm9wZXJ0eUtleTogc3RyaW5nKTogdm9pZDtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0QXBwbGljYXRpb25SdW50aW1lIGltcGxlbWVudHMgQXBwbGljYXRpb25SdW50aW1lIHtcblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgX2VuZ2luZTogRW5naW5lLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgX2V2ZW50UGlwZWxpbmU6IEV2ZW50UGlwZWxpbmUgPSBuZXcgRXZlbnRQaXBlbGluZSgpLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgZXZlbnRIYW5kbGVyUmVnaXN0cnk6IEV2ZW50SGFuZGxlclJlZ2lzdHJ5ID0gbmV3IEV2ZW50SGFuZGxlclJlZ2lzdHJ5KClcblx0KSB7XG5cdH1cblxuXHRnZXQgZW5naW5lKCk6IEVuZ2luZSB7XG5cdFx0cmV0dXJuIHRoaXMuX2VuZ2luZTtcblx0fVxuXG5cdGdldCBldmVudFBpcGVsaW5lKCk6IEV2ZW50UGlwZWxpbmUge1xuXHRcdHJldHVybiB0aGlzLl9ldmVudFBpcGVsaW5lO1xuXHR9XG5cblx0cHVibGljIHJlbmRlckNvbXBvbmVudChpbnN0YW5jZTogSW5zdGFuY2UpOiBWQ2hpbGQge1xuXHRcdHJldHVybiB0aGlzLmNhbGxNZXRob2QoaW5zdGFuY2UsICdyZW5kZXInLCBbXSkgYXMgVkNoaWxkXG5cdH1cblxuXHRwdWJsaWMgc3RhcnQodXJsOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG5cdH1cblxuXHRwdWJsaWMgY3JlYXRlSW5zdGFuY2UoY2xhc3NOYW1lOiBzdHJpbmcpOiBJbnN0YW5jZSB7XG5cdFx0cmV0dXJuIHRoaXMuX2VuZ2luZS5jcmVhdGVJbnN0YW5jZShjbGFzc05hbWUpO1xuXHR9XG5cblx0cHVibGljIGNhbGxSb290SW5zdGFuY2VNZXRob2QobWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSA9IFtdKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5fZW5naW5lLmNhbGxSb290SW5zdGFuY2VNZXRob2QobWV0aG9kTmFtZSwgYXJncyk7XG5cdH1cblxuXHRwdWJsaWMgY2FsbE1ldGhvZChpbnN0YW5jZTogSW5zdGFuY2UsIG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10gPSBbXSk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuX2VuZ2luZS5jYWxsSW5zdGFuY2VNZXRob2QoaW5zdGFuY2UsIG1ldGhvZE5hbWUsIGFyZ3MpO1xuXHR9XG5cblx0cHVibGljIGFkZEV2ZW50SGFuZGxlcihlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcGVydHlLZXk6IHN0cmluZywgaGFuZGxlcjogTGFtYmRhRnVuY3Rpb25DYWxsKTogdm9pZCB7XG5cdFx0Y29uc3QgZXZlbnROYW1lOiBzdHJpbmcgPSBwcm9wZXJ0eUtleS5zbGljZSgyKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcblxuXHRcdGNvbnN0IGV2ZW50SGFuZGxlcjogKGV2ZW50OiBFdmVudCkgPT4gdm9pZCA9IHRoaXMuZW5naW5lLmNyZWF0ZUV2ZW50SGFuZGxlcihoYW5kbGVyLCBFdmVudHMuRE9NX0VWRU5UKTtcblxuXHRcdHRoaXMuZXZlbnRIYW5kbGVyUmVnaXN0cnkucmVnaXN0ZXIoZWxlbWVudCwgcHJvcGVydHlLZXksIGV2ZW50SGFuZGxlcik7XG5cblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudEhhbmRsZXIpO1xuXHR9XG5cblx0cHVibGljIHJlbW92ZUV2ZW50SGFuZGxlcihlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcGVydHlLZXk6IHN0cmluZyk6IHZvaWQge1xuXHRcdGNvbnN0IGV2ZW50TmFtZTogc3RyaW5nID0gcHJvcGVydHlLZXkuc2xpY2UoMilcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRjb25zdCBldmVudEhhbmRsZXI6IEZ1bmN0aW9uIHwgbnVsbCA9IHRoaXMuZXZlbnRIYW5kbGVyUmVnaXN0cnkudW5yZWdpc3RlcihlbGVtZW50LCBwcm9wZXJ0eUtleSk7XG5cblx0XHRpZiAoZXZlbnRIYW5kbGVyKSB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudEhhbmRsZXIgYXMgRXZlbnRMaXN0ZW5lcik7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBXZWJBcHBsaWNhdGlvblJ1bnRpbWUgZXh0ZW5kcyBBYnN0cmFjdEFwcGxpY2F0aW9uUnVudGltZSB7XG5cdHByaXZhdGUgcmVhZG9ubHkgdmRvbTogVkRPTSA9IG5ldyBWRE9NKCk7XG5cdHByaXZhdGUgcmVhZG9ubHkgcGF0Y2hlcjogRWxlbWVudFBhdGNoZXI7XG5cblx0cHJpdmF0ZSBpc1JlbmRlcmluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdG1vdW50UG9pbnQ6IEhUTUxFbGVtZW50LFxuXHRcdGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSxcblx0XHRldmVudFBpcGVsaW5lOiBFdmVudFBpcGVsaW5lID0gbmV3IEV2ZW50UGlwZWxpbmUoKSxcblx0XHRldmVudEhhbmRsZXJSZWdpc3RyeTogRXZlbnRIYW5kbGVyUmVnaXN0cnkgPSBuZXcgRXZlbnRIYW5kbGVyUmVnaXN0cnkoKVxuXHQpIHtcblx0XHRzdXBlcihuZXcgV2ViTHlyYVNjcmlwdChldmVudFBpcGVsaW5lLCBpc0RlYnVnKSwgZXZlbnRQaXBlbGluZSwgZXZlbnRIYW5kbGVyUmVnaXN0cnkpO1xuXG5cdFx0dGhpcy5wYXRjaGVyID0gbmV3IEhUTUxFbGVtZW50UGF0Y2hlcihtb3VudFBvaW50LCB0aGlzLCB0aGlzLnZkb20pO1xuXG5cdFx0dGhpcy5leHBvc2VSdW50aW1lKCk7XG5cdH1cblxuXHRwdWJsaWMgb3ZlcnJpZGUgYXN5bmMgc3RhcnQodXJsOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nID0gJ1Byb2dyYW0nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0YXdhaXQgdGhpcy5lbmdpbmUuZXhlY3V0ZUVudHJ5RmlsZSh1cmwsIGNsYXNzTmFtZSk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKTtcblxuXHRcdHRoaXMucmVxdWVzdENvbXBvbmVudFJlbmRlcih0aGlzLmVuZ2luZS5nZXRSb290SW5zdGFuY2UoKSk7XG5cdH1cblxuXG5cdHB1YmxpYyByZXF1ZXN0Q29tcG9uZW50UmVuZGVyKGluc3RhbmNlOiBJbnN0YW5jZSwgb2xkQ2hpbGQ/OiBWQ2hpbGQpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pc1JlbmRlcmluZykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHF1ZXVlTWljcm90YXNrKCgpOiB2b2lkID0+IHRoaXMucGVyZm9ybUNvbXBvbmVudFJlbmRlcihpbnN0YW5jZSwgb2xkQ2hpbGQpKTtcblx0fVxuXG5cdHByaXZhdGUgcGVyZm9ybUNvbXBvbmVudFJlbmRlcihpbnN0YW5jZTogSW5zdGFuY2UsIG9sZENoaWxkOiBWQ2hpbGQgfCBudWxsID0gbnVsbCk6IHZvaWQge1xuXHRcdHRoaXMuaXNSZW5kZXJpbmcgPSB0cnVlO1xuXG5cdFx0Y29uc3QgbmV4dENoaWxkOiBWQ2hpbGQgPSB0aGlzLnJlbmRlckNvbXBvbmVudChpbnN0YW5jZSk7XG5cblx0XHR0aGlzLnBhdGNoZXIucGF0Y2gob2xkQ2hpbGQsIG5leHRDaGlsZCk7XG5cblx0XHR0aGlzLnZkb20ucmVnaXN0ZXIoaW5zdGFuY2UsIG5leHRDaGlsZCk7XG5cblx0XHRpbnN0YW5jZS5tYXJrQ2xlYW4odGhpcy5ldmVudFBpcGVsaW5lKTtcblxuXHRcdHRoaXMuaXNSZW5kZXJpbmcgPSBmYWxzZTtcblx0fVxuXG5cdHByaXZhdGUgcmVnaXN0ZXJFdmVudExpc3RlbmVycygpOiB2b2lkIHtcblx0XHR0aGlzLmV2ZW50UGlwZWxpbmVcblx0XHQgICAgLm9uKEV2ZW50cy5ET01fRVZFTlQsICh7aW52b2tlfTogYW55KTogdm9pZCA9PiB7XG5cdFx0XHQgICAgaW52b2tlKCk7XG5cdFx0ICAgIH0pO1xuXG5cdFx0dGhpcy5ldmVudFBpcGVsaW5lXG5cdFx0ICAgIC5vbihMeXJhRXZlbnRzLkxZUkFfSU5TVEFOQ0VfRElSVFlfU1RBVEUsICh7aW5zdGFuY2V9OiBhbnkpOiB2b2lkID0+IHtcblx0XHRcdCAgICB0aGlzLnJlcXVlc3RDb21wb25lbnRSZW5kZXIoaW5zdGFuY2UsIHRoaXMudmRvbS5maW5kTm9kZUJ5Q29tcG9uZW50KGluc3RhbmNlKSBhcyBWQ2hpbGQpO1xuXHRcdCAgICB9KTtcblx0fVxuXG5cdHByaXZhdGUgZXhwb3NlUnVudGltZSgpOiB2b2lkIHtcblx0XHRjb25zdCBnbG9iYWw6IGFueSA9IHdpbmRvdyBhcyBXaW5kb3c7XG5cblx0XHRnbG9iYWwuX19MWVJBX18gPSBnbG9iYWwuX19MWVJBX18gfHwge1xuXHRcdFx0dmVyc2lvbjogJzAuMC4xJyxcblx0XHRcdHJ1bnRpbWU6IHRoaXMsXG5cdFx0fTtcblx0fVxufVxuIiwKICAgICJpbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4vY29yZS9wYXJzZXIvcGFyc2VyXCI7XG5pbXBvcnQge3dyYXBKc0Vycm9yfSBmcm9tIFwiLi9jb3JlL2Vycm9yc1wiO1xuaW1wb3J0IHtmZXRjaFNvdXJjZSwgU291cmNlfSBmcm9tIFwiLi9jb3JlL3BhcnNlci9wYXJzZXJfc291cmNlXCI7XG5pbXBvcnQge0FTVE5vZGV9IGZyb20gXCIuL2NvcmUvYXN0XCI7XG5pbXBvcnQge1Rva2VuaXplcn0gZnJvbSBcIi4vY29yZS90b2tlbml6ZXIvdG9rZW5pemVyXCI7XG5pbXBvcnQge1Rva2VufSBmcm9tIFwiLi9jb3JlL2dyYW1tYXJcIjtcbmltcG9ydCB7THlyYVNjcmlwdFByb2dyYW19IGZyb20gXCIuL2NvcmUvcHJvZ3JhbVwiO1xuaW1wb3J0IHtFdmVudFBpcGVsaW5lfSBmcm9tIFwiLi9jb3JlL2V2ZW50L3BpcGVsaW5lXCI7XG5pbXBvcnQge1N0YXRlfSBmcm9tIFwiLi9jb3JlL2V2ZW50L3N0YXRlXCI7XG5pbXBvcnQge0hUTUxFbGVtZW50Q3JlYXRvcn0gZnJvbSBcIi4vaG9zdC9kb21cIjtcblxuZXhwb3J0IHtXZWJMeXJhU2NyaXB0fSBmcm9tIFwiLi9ob3N0L2VuZ2luZVwiO1xuZXhwb3J0IHtXZWJBcHBsaWNhdGlvblJ1bnRpbWV9IGZyb20gXCIuL2hvc3QvcnVudGltZVwiO1xuXG5jb25zdCBMeXJhID0ge1xuXHRTb3VyY2UsXG5cdFBhcnNlcixcblx0VG9rZW5pemVyLFxuXHRFdmVudFBpcGVsaW5lLFxuXHRIVE1MRWxlbWVudENyZWF0b3IsXG5cdFN0YXRlLFxuXHRQcm9ncmFtOiAoaXNEZWJ1ZzogYm9vbGVhbik6IEx5cmFTY3JpcHRQcm9ncmFtID0+IFByb2dyYW0oaXNEZWJ1ZyksXG5cdGV4ZWN1dGU6IChzb3VyY2U6IFNvdXJjZSwgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiBleGVjdXRlKHNvdXJjZSwgaXNEZWJ1ZyksXG5cdGV4ZWN1dGVGcm9tU3RyaW5nOiAoY29kZTogc3RyaW5nLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+ID0+IGV4ZWN1dGVGcm9tU3RyaW5nKGNvZGUsIGlzRGVidWcpLFxuXHRleGVjdXRlRnJvbVVybDogYXN5bmMgKHVybDogc3RyaW5nLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+ID0+IGV4ZWN1dGVGcm9tVXJsKHVybCwgaXNEZWJ1ZyksXG5cdGV4ZWN1dGVUZXN0OiAoc291cmNlOiBTb3VyY2UsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4gPT4gZXhlY3V0ZVRlc3Qoc291cmNlLCBpc0RlYnVnKSxcblx0ZXhlY3V0ZVRlc3RTdHJpbmc6IChjb2RlOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4gPT4gZXhlY3V0ZVRlc3RTdHJpbmcoY29kZSwgaXNEZWJ1ZyksXG5cdGV4ZWN1dGVUZXN0VXJsOiAodXJsOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4gPT4gZXhlY3V0ZVRlc3RVcmwodXJsLCBpc0RlYnVnKSxcblx0dG9rZW5pemU6IChzb3VyY2U6IFNvdXJjZSk6IFRva2VuW10gPT4gdG9rZW5pemUoc291cmNlKSxcblx0dG9rZW5pemVVcmw6ICh1cmw6IHN0cmluZyk6IFByb21pc2U8VG9rZW5bXT4gPT4gdG9rZW5pemVVcmwodXJsKSxcblx0cGFyc2VUcmVlOiAoc291cmNlOiBTb3VyY2UpOiBBU1ROb2RlID0+IHBhcnNlVHJlZShzb3VyY2UpLFxuXHRwYXJzZVRyZWVVcmw6ICh1cmw6IHN0cmluZyk6IFByb21pc2U8QVNUTm9kZT4gPT4gcGFyc2VUcmVlVXJsKHVybCksXG59O1xuXG5mdW5jdGlvbiBQcm9ncmFtKGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IEx5cmFTY3JpcHRQcm9ncmFtIHtcblx0cmV0dXJuIG5ldyBMeXJhU2NyaXB0UHJvZ3JhbShpc0RlYnVnKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZShzb3VyY2U6IFNvdXJjZSwgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IFByb2dyYW0oaXNEZWJ1Zylcblx0XHRcdC5leGVjdXRlKHNvdXJjZSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3Iod3JhcEpzRXJyb3IoZXJyb3IsIHNvdXJjZSlcblx0XHRcdFx0ICAgICAgICAgICAgICAuZm9ybWF0KCkpO1xuXHRcdH1cblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlRnJvbVVybCh1cmw6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdHJldHVybiBhd2FpdCBleGVjdXRlKGF3YWl0IGZldGNoU291cmNlKHVybCksIGlzRGVidWcpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlRnJvbVN0cmluZyhjb2RlOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBzb3VyY2UgPSBuZXcgU291cmNlKGNvZGUpO1xuXG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IFByb2dyYW0oaXNEZWJ1Zylcblx0XHRcdC5leGVjdXRlKHNvdXJjZSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3Iod3JhcEpzRXJyb3IoZXJyb3IsIHNvdXJjZSlcblx0XHRcdFx0ICAgICAgICAgICAgICAuZm9ybWF0KCkpO1xuXHRcdH1cblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlVGVzdChzb3VyY2U6IFNvdXJjZSwgaXNEZWJ1ZyA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IFByb2dyYW0oaXNEZWJ1Zylcblx0XHRcdC5leGVjdXRlVGVzdChzb3VyY2UpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKHdyYXBKc0Vycm9yKGVycm9yLCBzb3VyY2UpXG5cdFx0XHRcdCAgICAgICAgICAgICAgLmZvcm1hdCgpKTtcblx0XHR9XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZVRlc3RVcmwodXJsOiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4ge1xuXHRyZXR1cm4gYXdhaXQgZXhlY3V0ZVRlc3QoYXdhaXQgZmV0Y2hTb3VyY2UodXJsKSwgaXNEZWJ1Zyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVUZXN0U3RyaW5nKGNvZGU6IHN0cmluZywgaXNEZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHNvdXJjZSA9IG5ldyBTb3VyY2UoY29kZSk7XG5cblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgUHJvZ3JhbShpc0RlYnVnKVxuXHRcdFx0LmV4ZWN1dGVUZXN0KHNvdXJjZSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3Iod3JhcEpzRXJyb3IoZXJyb3IsIHNvdXJjZSlcblx0XHRcdFx0ICAgICAgICAgICAgICAuZm9ybWF0KCkpO1xuXHRcdH1cblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9rZW5pemUoc291cmNlOiBTb3VyY2UpOiBUb2tlbltdIHtcblx0cmV0dXJuIG5ldyBUb2tlbml6ZXIoc291cmNlKS50b2tlbml6ZSgpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdG9rZW5pemVVcmwodXJsOiBzdHJpbmcpOiBQcm9taXNlPFRva2VuW10+IHtcblx0cmV0dXJuIHRva2VuaXplKGF3YWl0IGZldGNoU291cmNlKHVybCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUcmVlKHNvdXJjZTogU291cmNlKTogQVNUTm9kZSB7XG5cdHJldHVybiBuZXcgUGFyc2VyKHNvdXJjZSkucGFyc2UoKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBhcnNlVHJlZVVybCh1cmw6IHN0cmluZyk6IFByb21pc2U8QVNUTm9kZT4ge1xuXHRyZXR1cm4gcGFyc2VUcmVlKGF3YWl0IGZldGNoU291cmNlKHVybCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMeXJhO1xuIgogIF0sCiAgIm1hcHBpbmdzIjogIjtBQUVPLE1BQU0sUUFBUTtBQUFBLFNBQ2IsU0FBaUI7QUFBQSxTQUNqQixPQUFlO0FBQUEsU0FDZixNQUFjO0FBQUEsU0FDZCxPQUFlO0FBQUEsU0FDZixRQUFnQjtBQUFBLFNBQ2hCLFlBQW9CO0FBQUEsU0FDcEIsVUFBa0I7QUFBQSxTQUNsQixhQUFxQjtBQUFBLFNBQ3JCLGNBQXNCO0FBQUEsU0FDdEIsV0FBbUI7QUFBQSxTQUNuQixNQUFjO0FBQUEsU0FDZCxPQUFlO0FBQUEsU0FDZixTQUFpQjtBQUFBLFNBQ2pCLFVBQWtCO0FBQUEsU0FDbEIsU0FBaUI7QUFBQSxTQUNqQixXQUFtQjtBQUFBLFNBQ25CLFNBQWlCO0FBQUEsU0FDakIsUUFBZ0I7QUFBQSxTQUNoQixPQUFlO0FBQUEsU0FDZixRQUFnQjtBQUFBLFNBQ2hCLEtBQWE7QUFBQSxTQUNiLE9BQWU7QUFBQSxTQUNmLFFBQWdCO0FBQUEsU0FDaEIsVUFBa0I7QUFBQSxTQUNsQixVQUFrQjtBQUFBLFNBQ2xCLEtBQWE7QUFBQSxTQUNiLE9BQWU7QUFBQSxTQUNmLE9BQWU7QUFBQSxTQUVmLHNCQUE4QjtBQUFBLFNBQzlCLHVCQUErQjtBQUFBLFNBQy9CLGFBQXFCO0FBQUEsU0FDckIsY0FBc0I7QUFBQSxTQUN0QixtQkFBMkI7QUFBQSxTQUMzQixvQkFBNEI7QUFBQSxTQUM1QixZQUFvQjtBQUFB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
