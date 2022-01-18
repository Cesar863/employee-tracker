const connection = require("./connection");

class Employee {

    constructor(connection) {
        this.connection = connection;
    }

    // Show all employees
    allEmployees() {
        return this.connection.promise().query(
            "SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.name AS department, roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN roles on employee.role_id = roles.id LEFT JOIN department on roles.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
        );
    }

    // Add an employee
    addEmployee(employee) {
        return this.connection.promise().query("INSERT INTO employee SET ?", employee);
    }

    // Update the given employee's role
    updateEmployeeRole(employeeId, roleId) {
        return this.connection.promise().query(
            "UPDATE employee SET role_id = ? WHERE id = ?",
            [roleId, employeeId]
        );
    }


    // Show all managers
    allManagers(employeeId) {
        return this.connection.promise().query(
            "SELECT id, first_name, last_name FROM employee WHERE id != ?",
            employeeId
        );
    }

    // Show all roles
    allRoles() {
        return this.connection.promise().query(
            "SELECT roles.id, roles.title, department.name AS department, roles.salary FROM roles LEFT JOIN department on roles.department_id = department.id;"
        );
    }

    // Create a new role
    addRole(roles) {
        return this.connection.promise().query("INSERT INTO roles SET ?", roles);
    }

    // Show all departments
    allDepartments() {
        return this.connection.promise().query(
            "SELECT department.id, department.name FROM department;"
        );
    }

    // Add a department
    addDepartment(department) {
        return this.connection.promise().query("INSERT INTO department SET ?", department);
    }

}

module.exports = new Employee(connection);