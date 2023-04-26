const connection = require("./db/connection");
// creates all SQL queries
class Queries {
  constructor() {
    this.connection = connection;
  }

  // View all depts
  async viewAllDepartments() {
    const [rows] = await this.connection.query(
      `SELECT id AS 'Department ID', name AS 'Department Name' FROM department ORDER BY id;`
    );
    return rows;
  }

  // View all roles
  async viewAllRoles() {
    const [rows] = await this.connection.query(
      `SELECT role.id AS 'Role ID', role.title AS 'Job Title', department.name AS 'Department', role.salary AS 'Salary'
        FROM role 
        JOIN department ON role.department_id = department.id
        ORDER BY role.id;`
    );
    return rows;
  }

  // View all employees
  async viewAllEmployees() {
    const [rows] = await this.connection.query(
      `SELECT employee.id AS 'Employee ID', employee.first_name AS 'First Name', employee.last_name AS 'Last Name', role.title AS 'Job Title', department.name AS 'Department', role.salary AS 'Salary'
        FROM employee 
        LEFT JOIN role ON employee.role_id = role.id
        LEFT JOIN department ON role.department_id = department.id
        ORDER BY employee.id;`
    );
    return rows;
  }

  // Add a department
  async addDepartment(name) {
    const [result] = await this.connection.query(
      `INSERT INTO department (name) VALUES (?)`,
      [name]
    );
    return result;
  }

  // Add a role
  async addRole(title, salary, department_id) {
    const [result] = await this.connection.query(
      `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`,
      [title, salary, department_id] 
    );
    return result;
  }

  // Add an employee
  async addEmployee(first_name, last_name, role_id) {
    const [result] = await this.connection.query(
      `INSERT INTO employee (first_name, last_name, role_id) VALUES (?, ?, ?)`,
      [first_name, last_name, role_id]
    );
    return result;
  }

  // Update an employee's role
  async updateEmployeeRole(employee_id, role_id) {
    const [result] = await this.connection.query(
      `UPDATE employee SET role_id = ? WHERE id = ?`,
      [role_id, employee_id]
    );
    return result;
  }

  // deletes a department
  async deleteDepartment(departmentId) {
    const [rows] = await this.connection.query(
      'DELETE FROM department WHERE id = ?',
      [departmentId]
    );
    console.log(`${rows.affectedRows} department deleted with id ${department}`)
    
  }
}



module.exports = Queries;














