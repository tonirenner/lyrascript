# 🧭 Lyrascript – Roadmap

## ✅ Aktueller Stand (DONE)

### 🔤 Sprache & Syntax

- [x] Tokenizer (Keywords, Identifiers, Numbers, Strings, Boolean)
- [x] Parser mit:
    - [x] Expressions (Binary, Assignment, Member, Call)
    - [x] Operator-Precedence (Mathe + Logik)
    - [x] Klammerung
- [x] Klassen
    - [x] `class`, `extends`
    - [x] Constructor (`constructor`)
    - [x] Methoden (static / instance)
    - [x] Felder (static / instance)
- [x] `this`
- [x] `super()` (Constructor)
- [x] `super.method()` (Methodenauflösung über Vererbung)

---

### 🧠 Runtime / Interpreter

- [x] Saubere Trennung:
    - Static Calls
    - Instance Calls
    - Native Calls
- [x] Vererbung mit rekursiver Method-Resolution
- [x] Korrekte `this`-Weitergabe
- [x] Mehrere Instanzen korrekt (keine Überschreibung mehr)
- [x] Return-Handling (`ReturnValue`)
- [x] Primitive Casts (Type_autoboxing light)
- [x] Native Module System (`System.print`, `Net.fetch`, etc.)

---

### 📦 Import-System

- [x] Native Imports

```lyra
  import System;
```

- [x] File-basierte Imports

### Lyra import { User, Person } from "/lib/User.lyra";

- [x] Rekursive Abhängigkeitsauflösung
- [x] Klassen werden vor Interpreter-Start gesammelt & registriert
- [x] Async-Linking mit garantierter Reihenfolge
- [x] Saubere Pipeline:

```
tokenize → parse → link → typecheck → interpret
```

### 🧪 Type System (Grundlagen)

- [x] Typen an Variablen (let x: number)
- [x] Typen an Parametern
- [x] Typen an Rückgabewerten
- [x] TypeChecker Skeleton
- [x] Klassen-Registry für Typprüfung
- [x] Type-Resolution
- [x] Primitive Typ-Casts
    - 🚧 Kurzfristig (NEXT)
    - 🔐 Sichtbarkeit & Sicherheit
- [X] readonly Modifier
- [x] kombinierbar mit public / private
- [x] Schützt vor Mutation in Subklassen und von Außen
- [ ] Zugriffskontrolle im Interpreter
- [x] Zugriffskontrolle im TypeChecker
  🔁 Control Flow
- [X] if / else
- [X] match (Kotlin when-ähnlich)
- [X] Array
- [X] Array + Generics
- [X] Array + Generics + Field-Access
- [X] Lambdas
- [x] foreach (über jede Array)
- [x] for
- [ ] while
- [ ] do-while (optional / low priority)
  🧪 Assertions & Tests
- [X] assert(condition, message?)
- [X] Tests direkt in Klassen
- [ ] Tests laufen nur im Dev-Modus
- [ ] Kein Einfluss auf Produktiv-Code
  🧩 Interfaces & Abstraktion
- [ ] interface
- [ ] Methoden-Signaturen ohne Implementierung
- [ ] implements
- [ ] TypeChecker prüft Interface-Konformität
- [ ] Grundlage für spätere DOM / JSX Features
  🌐 JSX / DOM (geplant)

### Ziel

DOM als Sprachkonzept, nicht Framework.
Geplant

- [x] interface DomRenderable { render(): VNode }
- [x] JSX als Syntax (kein Runtime-Parsing)
- [x] JSX → AST → VDOM
- [x] {expr} Einbettung
  Primitive → TextNode
  Objekt mit dom() → aufrufen
- [x] Minimaler DOM-Renderer
- [x] VDOM-Patching (JS-seitig)
  ⚙️ Tooling & Zukunft
- [ ] PHPStorm Plugin (Syntax Highlighting)
- [ ] Optional:
- [ ] ByteCode (nur bei Bedarf)
- [ ] Optimierungen
- [ ] Dokumentation & Beispiele

### 🧠 Leitprinzipien

- Klarheit > Magie
- Sprache > Framework
- Typen helfen, sie nerven nicht
- Runtime bleibt einfach
- Features entstehen aus echten Bedürfnissen
