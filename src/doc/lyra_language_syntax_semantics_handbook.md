# Lyra – Syntax & Semantics Handbook

> Aktueller Sprachstand (Compiler / TypeChecker)

Dieses Dokument beschreibt die **aktuell implementierte Syntax und Semantik** der Sprache **Lyra**.  
Es dient als Referenz für Nutzung, Tests und Weiterentwicklung.

---

## 1. Grundlegendes

### Kommentare

```lyra
// Einzeiliger Kommentar
```

### Bezeichner

- bestehen aus Buchstaben, Zahlen und `_`
- dürfen nicht mit einer Zahl beginnen
- Keywords sind reserviert (`if`, `class`, `return`, …)

---

## 2. Typen

### Primitive Typen

```lyra
number
string
boolean
null
```

### Nullable Typen

Ein Typ kann nullable gemacht werden mit `?`:

```lyra
let x: number? = null;
let y: string? = "hello";
```

Nicht-nullable Typen **akzeptieren kein `null`** (Compile-Time-Fehler).

---

## 3. Variablen

### Deklaration

```lyra
let a: number = 5;
let b         = 10;              // Typ wird inferiert
```

### Initialisierung

- Initialwert optional
- ohne Initialwert → implizit `null` (wenn erlaubt)

```lyra
let x: number?;
```

---

## 4. Operatoren

### Arithmetische Operatoren

```lyra
+- * /  %
```

Operatorpräzedenz wird beachtet:

```lyra
1 + 2 * 3     // 7
(1 + 2) * 3   // 9
```

---

### Vergleichsoperatoren

```lyra
< <= > >= == !=
```

Beispiel:

```lyra
a < b
a == b
a != b
```

---

### Logische Operatoren

```lyra
&&  ||  !
```

Beispiele:

```lyra
true && false
true || false
!true
```

---

## 5. Kontrollstrukturen

### match

`match` ist eine **kontrollflussbasierte Fallunterscheidung** zur Auswertung eines Ausdrucks.

### Syntax

```lyra
match(expression)
{
    value1 : statement | block
    value2 : statement | block
    default : statement | block
}
```

### Beispiel

```lyra
let x: number = 1;

match(x)
{
    1 : {
        System.print("Eins");
        System.print("Mehr Code");
    }

    2 : System.print("Zwei");
    
    default : {
        System.print("Andere");
    }
}
```

### Semantik

- `match` ist ein **Statement** (keine Expression)
- der Match-Ausdruck wird **genau einmal** ausgewertet
- es wird **genau ein passender Case** ausgeführt
- `default` ist optional
- existiert kein passender Case und kein `default`, passiert nichts

### Case-Regeln

- Syntax: `wert : statement | block`
- Case-Werte müssen **konstante Ausdrücke** sein
- aktuell erlaubt:
    - number‑Literale
    - string‑Literale
    - boolean‑Literale
    - `null`
- Vergleich erfolgt über `==`

### Scope-Regeln

- jeder Case besitzt einen **eigenen Scope**
- **kein Fallthrough** (implizites `break`)

### Typregeln

- alle Case-Werte müssen zum Typ des Match-Ausdrucks kompatibel sein
- Typfehler werden zur Compile-Time erkannt

---

### if / else / else if

```lyra
if (condition) {
    // then
} else if (otherCondition) {
    // else-if
} else {
    // else
}
```

- `if` ist ein **Statement**
- jeder Block erzeugt einen eigenen Scope

---

### foreach

```lyra
foreach(item in items)
{
    // body
}
```

Semantik:

- `foreach` ist ein **Statement**
- `items` muss ein `Array<T>` sein
- `item` ist:
    - implizit typisiert (`T`)
    - `const`
    - nur im Body sichtbar

---

## 6. Funktionen & Methoden

### Methodendeklaration

```lyra
public add(a: number, b: number): number
{
    return a + b;
}
```

### Default-Parameter

```lyra
public add(a: number, b: number = 2): number
{
    return a + b;
}

add(3);     // 5
add(3, 4);  // 7
```

---

## 7. Lambda-Ausdrücke

### Syntax

```lyra
{a: number, b: number -> a + b}
```

### Verwendung

```lyra
let f = {a: number, b: number -> a + b};
f(2, 3);

// Mit explizitem Rückgabetyp
let g = {a: number, b: number -> number: a + b};
g(2, 3);
```

### Lambda als Argument

```lyra
public static execOperation(op: (number, number) -> number): number
{
    return op(1, 2);
}
```

---

### Syntax

```lyra
{a[: Typ],b[: Typ] -> [: Typ] a + b}
```

### Verwendung

```lyra
let f = {a: number, b: number -> number:a + b};
f(2, 3);
```

### Lambda als Argument

```lyra
execOperation(2, 3, {a: number, b: number -> number: a + b});
```

---

## 8. Klassen

### Generics

Lyra unterstützt **generische Klassen** über Typparameter in spitzen Klammern.

```lyra
class Box<T> {
    private value: T;
    
    public constructor(value: T) {
        this.value = value;
    }
    
    public getValue(): T {
        return this.value;
    }
    
    public getSize(a: T): T {
        return a;
    }
}
```

#### Verwendung

```lyra
let b1: Box<number> = new Box<number>(5);
let b2: Box<string> = new Box<string>("hello");
```

#### Regeln

- Generics sind **kompilierzeitlich** und existieren nicht zur Laufzeit
- Typparameter können:
    - als Feldtypen
    - als Parametertypen
    - als Rückgabetypen
      verwendet werden
- Typinferenz kann Typparameter ableiten, wenn möglich
- Typparameter sind innerhalb der Klasse wie normale Typen behandelbar

---

### Vererbung

- Klassen sind **standardmäßig `final`**.
- Vererbung ist nur möglich, wenn eine Klasse explizit als `open` markiert ist.

```lyra
open class Animal {
}

class Dog extends Animal {
} // erlaubt

class Cat extends Dog {
} // ❌ Dog ist final
```

### Sichtbarkeit

- `public` – überall sichtbar (Default für Methoden)
- `private` – nur innerhalb der definierenden Klasse

```lyra
class Example {
    private a;
    public b;
    secret: number = 42; // private per default
    
    getSecret(): number {
        return this.secret;
    }
}
```

### Felder

Felder können zusätzlich folgende Modifikatoren besitzen:

- `readonly` – Feld ist nach Initialisierung unveränderlich
- `static` – Feld gehört zur Klasse, nicht zur Instanz

```lyra
class Config {
    public static readonly VERSION: string = "1.0";
}
```

- `readonly` verhindert jede spätere Zuweisung
- `static` Felder werden über den Klassennamen adressiert

### Konstruktor

```lyra
class User {
    public name: string;
    
    constructor(name: string) {
        this.name = name;
    }
}
```

- Name: `constructor`
- kein Rückgabewert

---

## 9. Member-Zugriff

```lyra
obj.field
obj.method()
```

Ketten sind erlaubt:

```lyra
s.toUpperCase().toLowerCase().toString();
```

---

## 10. Arrays

### Array-Literale

```lyra
let a = [1, 2, 3];
```

### Index-Zugriff

```lyra
a[0]
```

---

## 11. return

```lyra
return value;
```

- nur innerhalb von Methoden / Lambdas erlaubt
- TypeChecker stellt Rückgabetypen sicher

---

## 12. Typinferenz

Lyra nutzt aggressive, aber **deterministische Typinferenz**:

```lyra
let x = 5;          // number
let f = {a: number -> a + 1};
```

Explizite Typen überschreiben Inferenz:

```lyra
let x: number = 5;
```

---

## 13. Compile-Time Regeln (Auswahl)

- `null` nur für nullable Typen
- `foreach` nur über Arrays
- Iterator-Variable ist `const`
- Rückgabetypen müssen passen
- Shadowing im selben Scope verboten

---

## 14. Nicht (noch) unterstützt

- `break` / `continue`
- `foreach` als Expression
- Generische Funktionen
- Interfaces / Traits
- Pattern-Matching außerhalb von `match`

---

## 15. Annotationen

Lyra unterstützt **Annotationen** mit `@` zur Kennzeichnung von Metadaten auf Funktionen oder Klassen.

### Syntax

```lyra
@annotationName
@annotationName(key = value)
```

### Beispiel – Testfunktionen

```lyra
@test
function simpleTest() {
    Assert.isTrue(1 + 2 == 3);
}

@test(title = "Addition works")
function addTest() {
    let a = 2;
    let b = 3;
    Assert.isTrue(a + b == 5);
}
```

### Regeln:

- Annotationen beginnen immer mit @
- Können optionale Parameter enthalten (z. B. title)
- Können auf Funktionen oder Klassen angewendet werden
- Eingebaute Annotation: @test für Testfunktionen
- Testfunktionen:
    - keine Parameter
    - Rückgabewert optional
    - ein Fehler oder Assert-Fail gilt als Test-Fehlschlag
    - werden automatisch vom Test-Runner erkannt
    - beeinflussen den normalen Programmfluss nicht

### Vorteile:

- Automatische Test-Erkennung
- Dokumentiert die Absicht direkt im Code
- Einheitliche Struktur für Metadaten

_Ende des aktuellen Sprachhandbuchs_

