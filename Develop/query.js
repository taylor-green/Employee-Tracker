const connection = require('./db/connection');

// creates all SQL queries
class Queries {
  constructor() {
    this.connection = connection;
  }

  // View all departments
  async viewAllDepartments() {
    const [rows] = await this.connection.query(
      `SELECT id AS 'Department ID', name AS 'Department Name' FROM department ORDER BY id;`
    );
    return rows;
  }
}

  // View all roles
  async function viewAllRoles() {
    const [rows] = await this.connection.query(
      `SELECT role.id AS 'Role ID', role.title AS 'Job Title', department.name AS 'Department', role.salary AS 'Salary'
        FROM role 
        JOIN department ON role.department_id = department.id
        ORDER BY role.id;`
    );
    return rows;
  }

  // View all employees
  async function viewAllEmployees() {
    const [rows] = await this.connection.query(
      `SELECT employee.id AS 'Employee ID', employee.first_name AS 'First Name', employee.last_name AS 'Last Name', role.title AS 'Job Title', department.name AS 'Department', role.salary AS 'Salary', CONCAT(manager.first_name, ' ', manager.last_name) AS 'Manager'
        FROM employee 
        LEFT JOIN role ON employee.role_id = role.id
        LEFT JOIN department ON role.department_id = department.id
        LEFT JOIN employee manager ON employee.manager_id = manager.id
        ORDER BY employee.id;`
    );
    return rows;
  }

















module.exports = Queries;