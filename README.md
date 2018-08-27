
---
# RoomHunter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.3.

## MongoDB Server

Run `mongod` to start mongoDb server.

## Backend Server

Run `npm run dev` for backend Express server. 

## Frontend server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


---

# Coding and Naming Standard

## Names

- Use PascalCase for Class,Interface,AbstractClass, Enum, Module names,Data types.
- Use camelCase variables and function names.
- Do not use "I" as a prefix for interface names.
- Do not use "\_" as a prefix for private properties.
- Use whole words in names when possible.

## Comments

- Use `/** */` block for function comments.
- Use `//` for rest of code (i.e. for codes within a function or outside a function).

## Style

- Use arrow functions over anonymous function expressions.
- Only surround arrow function parameters when necessary.  
   For example, `(x) => x + x` is wrong but the following are correct:  
   `x => x + x`  
  `(x,y) => x + y`  
  `<T>(x: T, y: T) => x === y`
- Always surround loop and conditional bodies with curly braces.
- Open curly braces always go on the same line as whatever necessitates them.
- Parenthesized constructs should have no surrounding whitespace.
- A single space follows commas, colons, and semicolons in those constructs. For example:  
   `for (var i = 0, n = str.length; i < 10; i++){ }`  
  `function f(x: number, y: string): void { }`
- Use a single declaration per variable statement (i.e. `use var x = 1; var y = 2;` over `var x = 1, y = 2;`).
- `else` goes on a separate line from the closing curly brace.

