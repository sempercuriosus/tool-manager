# Tool Rental

Like tools but do not always have the one you need for the current job? How a Library works? Then this application is for you!

## Table of Contents

- [About The Project and Features](#about-project)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites And Dependencies](#prerequisites-and-dependencies)
  - [Installation](#installation)
- [Routes](#routes)
- [Deployment Location](#deployment-location)
- [Challenges](#challenges)
- [Acknowledgments](#acknowledgments)
- [Author Credit](#author-credit)

===

## About The Project and Features<a id="about-project"></a>

- The basic concept of the application is to facilitate rentals of the tools you need from a tool library.
- What you can do
  - Select from the tools available
  - Add what you need
  - Pick a start and end date
  - And Confirm the rental!

### Built With<a id="#built-with"></a>

- Handlebars
- Javascript
- Node.js
- Express.js

---

## Getting Started<a id="getting-started"></a>

- I left a lot of comments in my code for the same reason -- to inform those reading this later on.

### Prerequisites And Dependencies<a id="prerequisites-and-dependencies"></a>

- `bcrypt` version `^5.0.0`,
- `calendar-link` version `^2.6.0`,
- `connect-session-sequelize` version `^7.0.4`,
- `dotenv` version `^8.2.0`,
- `ejs` version `^3.1.9`,
- `express` version `^4.17.1`,
- `express-handlebars` version `^5.2.0`,
- `express-session` version `^1.17.1`,
- `mysql2` version `^2.2.5`,
- `node-fetch` version `^3.3.2`,
- `request` version `^2.88.2`,
- `sequelize` version `^6.3.5`,
- `square` version `^32.0.0`

### Installation<a id="#installation"></a>

- `npm i` or `npm install` can be used to get the dependencies

### Testing

- No tests in this application

---

## Routes<a id="routes"></a>

### PING-PONG

- URL: `http://localhost:3001/api/ping`
- HTTP Method: `GET`
- Body
  - Type: `N/A`
  - Text: `N/A`

### MAIN ROUTE

- URL: `http://localhost:3001/`
- HTTP Method: `GET`
- Body
  - Type: `N/A`
  - Text: `N/A`

### USER PING-PONG

- URL: `http://localhost:3001/api/users/ping`
- HTTP Method: `GET`
- Body
  - Type: `N/A`
  - Text: `N/A`

### GET USERS RENTALS

- URL: `http://localhost:3001/api/users/checkedout`
- HTTP Method: `GET`
- Body
  - Type: `N/A`
  - Text: `N/A`

### LOGIN

- URL: `http://localhost:3001/api/users/login`
- HTTP Method: `POST`
- Body
  - Type: `application/json`
  - Text: `{"email":"email@host.com","password":"password12345"}`

### LOGOUT

- URL: `http://localhost:3001/api/users/logout`
- HTTP Method: `POST`
- Body
  - Type: `application/json`
  - Text: `{"email":"email@host.com"}`

### GET TOOL LIST

- URL: `http://localhost:3001/api/tools/available`
- HTTP Method: `GET`
- Body
  - Type: `N/A`
  - Text: `N/A`

### ADD RENTAL

- URL: `http://localhost:3001/api/tools/add-rental`
- HTTP Method: `POST`
- Body
  - Type: `application/json`
  - Text: `{"tool_ids":[1,2,3],"start_date":"2023-11-02","end_date":"2023-12-01"}`

### ADD RENTAL

- URL: `http://localhost:3001/api/tools/add-rental`
- HTTP Method: `POST`
- Body
  - Type: `application/json`
  - Text: `{"user_id":1,"tool_ids":[1,2,15],"start_date":"2023-11-02","end_date":"2023-12-01"}`

---

## Deployment Location<a id="deployment-location"></a>

- Heroku - [Tool Rental App]()

---

## Acknowledgments<a id="acknowledgments"></a>

- @SemperCuriosus, used the starter code to work through problems and did not copy over any sections directly. Some sections of code, however, will look similar.
- ***

## Resources Used

- ChatGTP
- Code Examples from prior challenges, namely, week 14 items
  - 16-Stu_Sessions
  - 23-Ins_Auth-Review
- Xpert

---

## Author Credit<a id="author-credit"></a>

- Eric Hulse [Semper Curiosus](https://github.com/sempercuriosus)
- Tyler Stubs [Zxncho](https://github.com/zxncho)
- Oleksandr Buhaiov [MisterHouse](https://github.com/MisterHouse)
- Modeste Valens [Movank1](https://github.com/Movank1)

---

===

