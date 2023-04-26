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