# Express JS Crash Course

Link to [video][1]

Link to original [repository][2]

We will be working on an API with Create, Response, Update and Delete (CRUD) functionality.

## What is express?
Is a fast unopinionated and minimalist web **framework** for Node.js.

Express is a server-side or backend framework. Not comparable with ReactJS (which is not a framework), Vue JS or Angular.

## Why use Express?

- Makes building web applications with Node.js easier
- Used fot server rendered apps and APIs or Microservides
- Light, fast and free
- Full control of request and response
- It's the most popular Node fremwork
- Uses JavaScript

## What you should know first
- JavaScript Fundamentals
- Basic Node.js and NPM
- HTTP Status Codes
- JSON
- High Order Array Methos (`forEach`, `map`, `filter`)
- Arrow functions

## Basic server sintax
```javascript
const express = require ('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello!');
});

app.listen(5000);
```

## Route Handling
- Handling requiest/routes is simple
  - `app.get()`, `app.post()`, `app.put()`, `app.delete`
- Access to params, query strings, url parts
- Express has a router so we can store routes in separate files and export
- We can parse incoming data with de `body-parser`
```javascript
app.get('/', (req, res)=> {
    //Fetch from database
    //Load pages
    //Return JSON
    //Full access to request & repsonse
});
```

## Express Middleware Functions
 
 **Middlewares** are functions that have access to the **request** and **response** object.

 Express has a built in middleware but it can also use 3rd party packages and custom middlewares.
 
 - Execute any code
 - Make changes to the request/response objects
 - End response cycle
 - Call next middleware in the stack



## Project setup

We need to have Node.js installed and we are also going to use Postman.

- Init project with `npm init -y` and verify the new file `package.json`

## Project implementation
- Add static route
- Use a `Members.js` and export it so we can consume it from `index.js`
- Add an API endpoint so it shows the Members
- Add a logger middleware
- Install moment dependency
- Add APIs to practice GET and POST
- Install `uuid` to generate ids

## Run the project locally
```bash
# Install dependencies
npm install

# Serve on localhost:5000
npm run dev
```


[1]:https://youtu.be/L72fhGm1tfE
[2]:https://github.com/bradtraversy/express_crash_course