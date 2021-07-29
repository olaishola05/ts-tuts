# TypeScript Tutorial

- ts is a Superset of JavaScript developed by Microsoft
- compiles into standard JavaScript
- can be integrated into JS projects
- designed for large projects

## What TypeScript Offer

- Static Type Checking
- Class Based Objects && compatible with es6
- Modularity
- Get all ES6 functions
- Syntax that is closer to higher level language such as java, scala.


## TypeScript Types

- String: for string and can also take a mthd such as slice etc
- Number: for Number, decimal etc
- Boolean: true or false
- Array
- Any: can take any type of data types
- Null
- Void: can take both undefined and null
- Tuple: an array of set data types
- interfaces: 
- Enum
- Generics

Class Based Objects
- Obj oriented programming in JS
- no prototypes
- encapsulation
- inheritance
- modifiers

## TypeScript Compiler (tsc)
- written in typescript itself
- compiles .ts files to .js
- installed as an npm package
- supports ES6 syntax such as let, const and arrow functions

**Installing TypeScript**
`npm install -g typescript
`
- run tsc app.ts in the project file to compile an app.js file.

- the app.js is what is include in the index.html

- to run the tsc in watch mode instead of manually compiling the type.ts we can run

`tsc type.ts -w`