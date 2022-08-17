# ECommerce-Back-End

## License
Not Applicable

## Description
This application allows the user to manipulate and view E-Commerce data stored in a mysql database using various HTTP requests. The application allows for categories, products and tags to be viewed, created, updated and deleted (i.e. all CRUD functions) from various api endpoints.  

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Collaborators](#collaborators)
4. [Contribution Guidelines](#contribution-guidelines)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
Once cloned, navigate to the relevant directory and run the following command to install project dependencies:
```
npm i
```
Note: You must have node installed on your machine for this application to function.

Once node is installed, log in to mysql and run the following command to initiate the database:
```
source db/schema.sql
```

## Usage
To run the application on your local machine, complete the installation process then navigate to the relevant directory and run the following command in the console:
```
npm start
```
The application also relies on seed data to explore all functions. Seed data can be populated by running the following command in the terminal:
```
npm run seed
```
Note that the server must be running for the seed data to be populated as each time the server is restarted, the database is reset. This behaviour can be changed by adapting line 15 of server.js to:
```
sequelize.sync({ force: false }).then(() => {
```

A demonstration of the application is provided within the walkthrough video:
[Walkthrough]()

## Collaborators
The following personnel have been involved in the devleopment of this application:
- Craig Skicko

## Contributing
To contribute to the ongoing success of this application, please fork a repository then create a pull request once all relevant changes have been implemented and the updated code has been thoroughly tested

## Tests
At the time of writing, no specific tests have been written for this repository. If contributing, prior to pushing changes to the main branch, please ensure that updated code has been thoroughly tested.

## Questions
Should you have any questions, please contact me via [GitHub](https://github.com/CSkicko) or by [email](mailto:craig.skicko@gmail.com)
