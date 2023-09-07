# Node.JS - Introduction

Welcome to your first Node app!!

This is where things start to get a little more complicated, but a heck of a lot more fun!

---

## 🦊 Pre-lecture

There is no pre-lecture for this workshop.

---

## 🦉 Lecture

- [Lecture 1 | Introduction](./lecture/lecture-1-introduction.md)
- [Lecture 2 | Express](./lecture/lecture-2-express.md)

Keep in mind that these slides are not interactive, like in the actual lecture. Whenever possible, we will provide links to working code examples in CodeSandbox.

---

## Deeper Dive into this app

### Required dependencies

If you look in the `package.json` file you will see all of the external dependencies, or modules, that we will need for today's workshop.

| Package | Description|
| ------------------------------------------------ | ---------------------------------------------------- |
| [express](https://www.npmjs.com/package/express) | Fast, unopinionated web framework for node. |
| [nodemon](https://www.npmjs.com/package/nodemon) | nodemon is a tool that helps develop node-based applications by automatically restarting the node application on change. |
| [morgan](https://www.npmjs.com/package/morgan)   | HTTP request logger middleware for Node.js|
| [moment](https://www.npmjs.com/package/moment)   | A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates. |

---

## Setup

1. Open a terminal window and type `yarn install`
2. Start up the server by typing `yarn dev`

Your node application is now running at http://localhost:8000

**When we type `yarn dev` in the terminal, it will spin up a `node` environment that will render our server-side app to the browser.**

This app contains both a Frontend and a Backend.

#### Backend

- The backend is essentially the `server.js` file. It contains a functional express app to which we will add some functionality in the exercises below.

#### Frontend

- The frontend is the `public/` folder.
- Once the server is running, it will serve up the frontend files as static resources. The line below is responsible for allowing those files to be accessed.

```js
  // Any requests for static files will go into the public folder
  .use(express.static('public'))
```

##### Example

The `public/` folder contains `html`, `css` and `js` files to be rendered in the browser.

1. A user types http://localhost:8000/cat in the browser.
2. The server looks for an `express()` endpoint of `/cat`.
3. It doesn't find one
4. It then looks for static files in the `public` folder.
5. It finds `public/cat/` that contains an `index.html` file.
6. It responds with that file.
7. The browser loads `/cat` for the user.
8. The browser will also follow-up with requests for any other required files. In this case, the `css` and `js` files.

**Every single server call follows this pattern.**

For this workshop, you will work in the `public` folder as well as the `server.js` file.

---

## ⚡ Exercises

### [Exercise 1](workshop/exercise-1.md) - The Cat Chat

### [Exercise 2](workshop/exercise-2.md) - The Monkey Chat

### [Exercise 3](workshop/exercise-3.md) - Parrot Chat

### [Exercise 4](workshop/exercise-4.md) - Bot Chat

---

<center>🟡 - Minimally complete workshop (75%) - 🟡</center>

---

### [Exercise 5](workshop/exercise-5.md) - Bot Chat (Tell me a joke)

---

<center>🟢 - Complete workshop (100%) - 🟢</center>

---
