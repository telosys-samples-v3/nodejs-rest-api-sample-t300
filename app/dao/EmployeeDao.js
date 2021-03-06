/*
 * Created on 2018-01-15 ( Time 11:23:59 )
 * Generated by Telosys Tools Generator ( version 3.0.0 )
 */

// Load Employee entity
const Employee = require('../model/Employee');

// Load DAO Common functions
const GenericDao = require('./commons/genericDao');

// SQL Queries
const sqlSelectById = "SELECT code, shopCode, firstName, lastName, manager, badgeNumber, email FROM employee WHERE code=$code";
const sqlSelectAll = "SELECT * FROM employee";
const sqlCount = "SELECT COUNT(*) AS count FROM employee";
const sqlUpdate = "UPDATE employee SET shopCode=$shopCode, firstName=$firstName, lastName=$lastName, manager=$manager, badgeNumber=$badgeNumber, email=$email WHERE code=$code";
const sqlDelete = "DELETE FROM employee WHERE code=$code";
const sqlExist = "SELECT (count(*) > 0) as found FROM employee WHERE code=$code";
const sqlInsert = "INSERT into employee (code, shopCode, firstName, lastName, manager, badgeNumber, email) VALUES ($code, $shopCode, $firstName, $lastName, $manager, $badgeNumber, $email)";

/**
 * DAO of entity Employee
 */
module.exports = class EmployeeDao {

    constructor() {
        this.genericDao = new GenericDao(
            sqlSelectById,
            sqlSelectAll,
            sqlCount,
		    sqlInsert,
            sqlUpdate,
            sqlDelete,
            sqlExist
        );
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @param code
     * @return entity
     */
    findById(code) {
       let sqlParams = {
			$code: code
		};
        return this.genericDao.findOne(sqlParams)
            .then(row => {
                if(row) {
                    return new Employee(row.code, row.shopCode, row.firstName, row.lastName, row.manager, row.badgeNumber, row.email);
                } else {
                    return false;
                }
            })
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll() {
        return this.genericDao.findAll().then(rows => {
            let employees = [];
            if (rows) {
                for (const row of rows) {
                    employees.push(new Employee(row.code, row.shopCode, row.firstName, row.lastName, row.manager, row.badgeNumber, row.email));
                }
            }
            return employees;
        });
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll() {
        return this.genericDao.findOne();
    };

    /**
     * Updates the given entity in the database
     * @param Employee
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(Employee) {
        let sqlParams = {
 			$code: Employee.code,
 			$shopCode: Employee.shopCode,
 			$firstName: Employee.firstName,
 			$lastName: Employee.lastName,
 			$manager: Employee.manager,
 			$badgeNumber: Employee.badgeNumber,
 			$email: Employee.email
        };
        return this.genericDao.update(sqlParams);
    };

    /**
     * Save the given entity in the database in case it exist, else create a new one
     * @param Employee
     * @return the updated or created entity
     */
    save(Employee) {
        return this.exists(Employee).then(exist => {
            if(exist) {
                return this.update(Employee).then(result => {
                    if (result === true) {
                        return {
                            body:{
                                code: Employee.code,
                                shopCode: Employee.shopCode,
                                firstName: Employee.firstName,
                                lastName: Employee.lastName,
                                manager: Employee.manager,
                                badgeNumber: Employee.badgeNumber,
                                email: Employee.email
                            },
                            newItem: false
                        };
                    } else {
                        return result;
                    }
                });
            } else {
                return this.create(Employee).then(result => {
                    if (result) {
                        return {
                            body: result,
                            newItem: true
                        };
                    } else {
                        return result;
                    }
                });
            }
        });
    };

    /**
     * Creates the given entity in the database
     * @param Employee
     * returns database insertion status
     */
    create(Employee) {
        let sqlParams = {
 			$code: Employee.code,
 			$shopCode: Employee.shopCode,
 			$firstName: Employee.firstName,
 			$lastName: Employee.lastName,
 			$manager: Employee.manager,
 			$badgeNumber: Employee.badgeNumber,
 			$email: Employee.email
        };

        return this.genericDao.insert(sqlParams)
            .then(id => {
                if (id) {
                    return {
 					    code: Employee.code,
 					    shopCode: Employee.shopCode,
 					    firstName: Employee.firstName,
 					    lastName: Employee.lastName,
 					    manager: Employee.manager,
 					    badgeNumber: Employee.badgeNumber,
 					    email: Employee.email
                  };
                } else {
                    return false;
                }
            });
    };

    /**
     * Deletes an entity using its Id / Primary Key
     * @param code
     * returns database deletion status
     */
    deleteById(code) {
		let sqlParams = {
			$code: code
		};
        return this.genericDao.delete(sqlParams);
    };

    /**
     * Deletes an entity using the entity
     * @param Employee
     * returns database deletion status
     */
    delete(Employee) {
        let sqlParams = {
 			$code : Employee.code
        };
        return this.genericDao.delete(sqlParams);
    };

    /**
     * Returns true if an entity exists with the given Id / Primary Key
     * @param code
     * returns database entry existence status (true/false)
     */
    existsById(code) {
		let sqlParams = {
			$code: code
		};
        return this.genericDao.existsOne(sqlParams);
    };

    /**
     * Returns true if an entity exists using the entity
     * @param Employee
     * returns database entry existence status (true/false)
     */
    exists(Employee) {
        let sqlParams = {
            $code : Employee.code
        };
        return this.genericDao.existsOne(sqlParams);
    };
};