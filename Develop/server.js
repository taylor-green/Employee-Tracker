//inquirer, queries and connection
const inquirer = require('inquirer');
const start  = require('repl');
const connection  = require('./db/connection');
const Queries = require('./query');
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

// Prompt user to select an action, and shows result based on that
async function start() {
    const {action} = await inquirer.prompt(questions);
  
    // performs the task based on the user selection
    if (action === 'View all departments') {
      
        console.table(await queries.viewAllDepartments());
    } else if (action === 'View all roles') {
      
        console.table(await queries.viewAllRoles());
    } else if (action === 'View all employees') {
      
        console.table(await queries.viewAllEmployees());
    } else if (action === 'View employees by manager') {
      
        await viewEmployeesByManager();
    } else if (action === 'View employees by department') {
      
        await viewEmployeesByDepartment();
    } else if (action === 'Add a department') {
      
        await addDepartment();
    } else if (action === 'Add a role') {
      
        await addRole();
    } else if (action === 'Add an employee') {
      
        await addEmployee();
    } else if (action === 'Update an employee role') {
      
        await updateEmployeeRole();
    } else if (action === 'Delete a department') {
      
        await deleteDepartment();
    } else if (action === 'Delete a role') {
      
        await deleteRole();
    } else if (action === 'Delete an employee') {
      
      process.exit(0);
    }
  
   
    start();
  }

  // add a department
async function addDepartment() {
    const {name} = await inquirer.prompt({
      type: 'input',
      message: 'What is the name of the department?',
      name: 'name',
    });
    await queries.addDepartment(name);
    console.log(`Department ${name} has been added.`);
  }
  
  // add a role
  async function addRole() {
    const departments = await queries.viewAllDepartments();
    const {title, salary, department_id } = await inquirer.prompt([{
        type: 'input',
        message: 'What is the title of the role?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'What is the salary of the role?',
        name: 'salary',
      },
      {
        type: 'list',
        message: 'Which department does the role belong to?',
        name: 'department_id',
        choices: departments.map((department) => ({
          name: department['Department Name'],
          value: department['Department ID'],
        })),
      },
    ]);
    await queries.addRole(title, salary, department_id);
    console.log(`Role ${title} has been added.`);
  }
