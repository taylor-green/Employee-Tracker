//Imports inquirer, queries and connection
const inquirer = require('inquirer');
const { connection } = require("./db/connection");
const Queries = require("./lib/queries");
const queries = new Queries(connection);

//List of options for user to select from
const questions = [
  {
    type: 'list',
    message: 'What would you like to do?',
    name: 'action',
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
      "Update employees manager",
      "Delete a department",
      "Delete a role",
      "Delete an employee",
      "Exit",
    ],
  }
]