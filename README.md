<p align="center">
  <a href="" rel="noopener">
 <img src="https://blog.logrocket.com/wp-content/uploads/2021/02/node-js-express-js-mysql-rest-api.png" alt="Project logo"></a>
</p>
<h3 align="center">testedanielalecsijean</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)]()

</div>

---

<p align="center"> Solution developed for testing knowledge in Node.js and SQL commands using MySQL database..
    <br> 
</p>

## 📝 Table of Contents

- [Problem Statement](#problem_statement)
- [Idea / Solution](#idea)
- [Dependencies / Limitations](#limitations)
- [Future Scope](#future_scope)
- [Setting up a local environment](#getting_started)
- [Usage](#usage)
- [Technology Stack](#tech_stack)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)

## 🧐 Problem Statement <a name = "problem_statement"></a>

It was requested by Mr. Alecsi, a small solution for tests in Postman, where it was possible to handle entries in a MySQL database using the Node.js language, leaving me to decide which is the best way to be followed.

<br>

## 💡 Idea / Solution <a name = "idea"></a>

A simple and practical solution with as few requirements as possible, especially in terms of access to the database.

<br>

## ⛓️ Dependencies / Limitations <a name = "limitations"></a>

- Dependencies:
  - OnLine MySQL Database.

- Limitations:
  - As it is a simple test, there are no limitations.

<br>

## 🚀 Future Scope <a name = "future_scope"></a>

As it is a very objective test, focusing on SQL commands, the solution developed in Node.js, despite being 100% functional, can be further improved in relation to the returns given to the operator.

<br>

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for testing purposes.

<br>

### Prerequisites

  * Node.js 16.13.0 +
  * Command Line Tools
  * Windows: Visual Studio OR Visual Studio Code + Windows Subsystem for Linux - Ubuntu
  * Ubuntu / Linux Mint: sudo apt-get install build-essential
  * Fedora: sudo dnf groupinstall "Development Tools"
  * OpenSUSE: sudo zypper install --type pattern devel_basis


### Installing

The easiest way to get started is to clone the repository:

```
# Get the latest snapshot
git clone https://github.com/dan5e3s6ares/testedanielalecsijean.git danielTest

# Change directory
cd danielTest

# Install NPM dependencies
npm install

# Then simply start your app
npm run main

```
## MySQL online free database for tests

Currently, this project uses an online MySQL database, with only 5MB of space, which I believe is necessary to carry out the required tests.
If you are interested in setting up your own database, please visit: https://www.freemysqlhosting.net.

## Project Structure
<table>
  <thread>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thread>
  <tbody>
    <tr>
      <td>config/db.config.js</td>
      <td>Database access settings.</td>
    </tr>
    <tr>
      <td>controllers/clients.controller.js</td>
      <td>Returns encapsulation.</td>
    </tr>
    <tr>
      <td>models/clients.models.js</td>
      <td>users table commands.</td>
    </tr>
    <tr>
      <td>models/db.js</td>
      <td>Connection to database and creation of tables.</td>
    </tr>
    <tr>
      <td>models/weights.models.js</td>
      <td>weights table commands.</td>
    </tr>
    <tr>
      <td>routes/client.routes.js</td>
      <td>Route configuration.</td>
    </tr>
  </tbody>
</table>
<br>

## 🎈 Usage <a name="usage"></a>

## users Table
  - Fields:
    - name - varchar(100)
    - age - int(3)
    - email - varchar(100)
## weights Table
  - Fields:
    - id - int (FOREIGN KEY users.id)
    - peso - int(3)
<br>

## Add new Client
```
curl -X POST \
  'http://localhost:8080/api/clients' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Test Name",
    "email": "testname@gmail.com",
    "age": 80
}'
```
## List all Clients
```
curl -X GET \
  'http://localhost:8080/api/clients'
```
## Query Client by id
```
curl -X GET \
  'http://localhost:8080/api/clients/3' \
  -H 'Accept: */*'
```
## Edit Client by id
```
curl -X PUT \
  'http://localhost:8080/api/clients/3' \
  -H 'Accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "New Name",
    "age": 12,
    "email": "newname@gmail.com"
}'
```
## Query Clients by age
```
curl -X GET \
  'http://localhost:8080/api/clients/age' \
  -H 'Accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
    "age": 18
}'
```
## Query Clients by age over
```
curl -X GET \
  'http://localhost:8080/api/clients/bigger' \
  -H 'Accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
    "age": 19
}'
```
## Query Clients by name with
```
curl -X GET \
  'http://localhost:8080/api/clients?name=New' \
  -H 'Accept: */*' 
```
## Delete Client by id
```
curl -X DELETE \
  'http://localhost:8080/api/clients/3' \
  -H 'Accept: */*'
```
## Delete Client by id
```
curl -X DELETE \
  'http://localhost:8080/api/clients/3' \
  -H 'Accept: */*'
```
## Add Client weight
```
curl -X POST \
  'http://localhost:8080/api/clients/weight' \
  -H 'Accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
    "id": 6,
    "peso": 100
}'
```
## Query Clients id by weight
```
curl -X GET \
  'http://localhost:8080/api/clients/weight/80' \
  -H 'Accept: */*'
```
## Query Clients data by weight over
```
curl -X GET \
  'http://localhost:8080/api/clients/overweight/79' \
  -H 'Accept: */*'
```
## Query all weights
```
curl -X GET \
  'http://localhost:8080/api/clients/weight/' \
  -H 'Accept: */*'
```
## Query Clients by weight using Alias Command
```
curl -X GET \
  'http://localhost:8080/api/clients/alias' \
  -H 'Accept: */*'
```
## Query minimum weight
```
curl -X GET \
  'http://localhost:8080/api/clients/minweight' \
  -H 'Accept: */*'
```
## Delete all Clients data
```
curl -X DELETE \
  'http://localhost:8080/api/clients' \
  -H 'Accept: */*'
```
## Delete Table weights - To recreate weights table restart the system
```
curl -X DELETE \
  'http://localhost:8080/api/clients/weight' \
  -H 'Accept: */*'
```



## ⛏️ Built With <a name = "tech_stack"></a>

- [MySQL](https://www.mysql.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@dan5e3s6ares](https://github.com/dan5e3s6ares) - Knowledge test 
