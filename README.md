
---
# RoomHunter
[toc]

## Intro
Our project is a website that aims is to provide a platform for people who have a spare room in their house to post the rental advertisements. 

 If a user is not logged in, he can only view posts created by other people. In order to list a room on our website, one must have to create an account and log in. 
 
 ## Project Structure
Our project uses MEAN stack (MongoDB, Express, Angular, Node)

### Frontend 
#### Components:
- navbar - Used to display navigation bar in the top of the webpage
- filter - Used to filter the posts, either by rent or area
- login - Handle login event
- register - Handle register event
- posts - Display a list of posts
- post-detail - Show the detail of a selected post
- create-post - Add a new post
- profile - Display user info and posts created by them
#### services:
- auth - User authentication checking and handle events like login and register 
- delivery - Deliver filter and search result to posts component
- post - Load posts from server
- upload - upload image to the server
- flash-message - Show error or success message form both server and frontend


### Backend 
#### Models:
- user - Include username, email, password and the posts created by this user.
- posts - Include all of the post information like title, post date, rent, room info, contact info and etc.

#### Routes:
- users-routes - All routes related to the user, such as `/register`, `/login`, `/authenticate` and so on
- posts-routes - All routes related to the posts, such as `/add`, `/delete/:id`, `/upload` and so on

---
# Run the Project

## Requirements
- Have MongoDB, Express, Angular, Node installed
- Create a local database called `roomhunter` with collection `users` and `posts`

## Run
### 1. MongoDB Server
Use `mongod` to start mongoDb server.

### 2. Backend 

Use `npm run dev` for backend Express server. The server will automatically reload if you change any of the source files. The address for backend is `http://localhost:4000/`

### 3. Frontend

Run `ng build` to build the project. The build artifacts will be stored in the `public/` directory. 

Use `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

---

# Coding and Naming Standard

## Names

- Use PascalCase for Class,Interface,AbstractClass, Enum, Module names,Data types.
- Use camelCase variables and function names.
- Do not use "I" as a prefix for interface names.
- Do not use "\_" as a prefix for private properties.
- Use whole words in names when possible.

## Comments

- Use `/** */` block for function and class comments.
- Use `//` for rest of code (i.e. for codes within a function or outside a function).

## Style

- Use arrow functions over anonymous function expressions.
- Only surround arrow function parameters when necessary.  
   For example, `(x) => x + x` is wrong but the following are correct:  
   `x => x + x`  
  `(x,y) => x + y`  
  `<T>(x: T, y: T) => x === y`
- Surround loop and conditional bodies with curly braces. If contional body only have single statement and it goes in one line, then it ok to without braces, eg. `if (true) return x;` is accepted;
- Open curly braces always go on the same line as whatever necessitates them.
- Parenthesized constructs should have no surrounding whitespace.
- A single space follows commas, colons, and semicolons in those constructs. For example:  
   `for (var i = 0, n = str.length; i < 10; i++){ }`  
  `function f(x: number, y: string): void { }`
- Use a single declaration per variable statement (i.e. `use var x = 1; var y = 2;` over `var x = 1, y = 2;`).
- `else` goes on the same line from the closing curly brace.
