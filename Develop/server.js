//Imports inquirer, queries and connection
const inquirer = require('inquirer');
const { start } = require('repl');
const { connection } = require('./db/connection');
const Queries = require('./lib/queries');
const queries = new Queries(connection);

//List of options for user to select from
const questions = [
  {
    type: 'list',
    message: 'What would you like to do?',
    name: 'action',
    choices: [
      'View all employees',
      'View all roles',
      'View all departments',
      'Add an employee',
      'Add a role',
      'Add a department',
      'Update an employee role',
      'Update employees manager',
      'Delete an employee',
      'Delete a role',
      'Delete an employee',
      'Exit',
    ],
  }
]

