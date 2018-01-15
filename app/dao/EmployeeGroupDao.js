/*
 * Created on 2018-01-15 ( Time 11:23:59 )
 * Generated by Telosys Tools Generator ( version 3.0.0 )
 */

// Load EmployeeGroup entity
const EmployeeGroup = require('../model/EmployeeGroup');

// Load DAO Common functions
const GenericDao = require('./commons/genericDao');

// SQL Queries
const sqlSelectById = "SELECT employeeCode, groupId FROM employeeGroup WHERE employeeCode=$employeeCode AND groupId=$groupId";
const sqlSelectAll = "SELECT * FROM employeeGroup";
const sqlCount = "SELECT COUNT(*) AS count FROM employeeGroup";
const sqlUpdate = "UPDATE employeeGroup SET  WHERE employeeCode=$employeeCode AND groupId=$groupId";
const sqlDelete = "DELETE FROM employeeGroup WHERE employeeCode=$employeeCode AND groupId=$groupId";
const sqlExist = "SELECT (count(*) > 0) as found FROM employeeGroup WHERE employeeCode=$employeeCode AND groupId=$groupId";
const sqlInsert = "INSERT into employeeGroup (employeeCode, groupId) VALUES ($employeeCode, $groupId)";

/**
 * DAO of entity EmployeeGroup
 */
module.exports = class EmployeeGroupDao {

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
     * @param employeeCode, groupId
     * @return entity
     */
    findById(employeeCode, groupId) {
       let sqlParams = {
			$employeeCode: employeeCode,
			$groupId: groupId
		};
        return this.genericDao.findOne(sqlParams)
            .then(row => {
                if(row) {
                    return new EmployeeGroup(row.employeeCode, row.groupId);
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
            let employeeGroups = [];
            if (rows) {
                for (const row of rows) {
                    employeeGroups.push(new EmployeeGroup(row.employeeCode, row.groupId));
                }
            }
            return employeeGroups;
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
     * @param EmployeeGroup
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(EmployeeGroup) {
        let sqlParams = {
 			$employeeCode: EmployeeGroup.employeeCode,
 			$groupId: EmployeeGroup.groupId
        };
        return this.genericDao.update(sqlParams);
    };

    /**
     * Save the given entity in the database in case it exist, else create a new one
     * @param EmployeeGroup
     * @return the updated or created entity
     */
    save(EmployeeGroup) {
        return this.exists(EmployeeGroup).then(exist => {
            if(exist) {
                return this.update(EmployeeGroup).then(result => {
                    if (result === true) {
                        return {
                            body:{
                                employeeCode: EmployeeGroup.employeeCode,
                                groupId: EmployeeGroup.groupId
                            },
                            newItem: false
                        };
                    } else {
                        return result;
                    }
                });
            } else {
                return this.create(EmployeeGroup).then(result => {
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
     * @param EmployeeGroup
     * returns database insertion status
     */
    create(EmployeeGroup) {
        let sqlParams = {
 			$employeeCode: EmployeeGroup.employeeCode,
 			$groupId: EmployeeGroup.groupId
        };

        return this.genericDao.insert(sqlParams)
            .then(id => {
                if (id) {
                    return {
 					    employeeCode: EmployeeGroup.employeeCode,
 					    groupId: EmployeeGroup.groupId
                  };
                } else {
                    return false;
                }
            });
    };

    /**
     * Deletes an entity using its Id / Primary Key
     * @param employeeCode, groupId
     * returns database deletion status
     */
    deleteById(employeeCode, groupId) {
		let sqlParams = {
			$employeeCode: employeeCode,
			$groupId: groupId
		};
        return this.genericDao.delete(sqlParams);
    };

    /**
     * Deletes an entity using the entity
     * @param EmployeeGroup
     * returns database deletion status
     */
    delete(EmployeeGroup) {
        let sqlParams = {
 			$employeeCode : EmployeeGroup.employeeCode, 
            $groupId : EmployeeGroup.groupId
        };
        return this.genericDao.delete(sqlParams);
    };

    /**
     * Returns true if an entity exists with the given Id / Primary Key
     * @param employeeCode, groupId
     * returns database entry existence status (true/false)
     */
    existsById(employeeCode, groupId) {
		let sqlParams = {
			$employeeCode: employeeCode,
			$groupId: groupId
		};
        return this.genericDao.existsOne(sqlParams);
    };

    /**
     * Returns true if an entity exists using the entity
     * @param EmployeeGroup
     * returns database entry existence status (true/false)
     */
    exists(EmployeeGroup) {
        let sqlParams = {
            $employeeCode : EmployeeGroup.employeeCode, 
            $groupId : EmployeeGroup.groupId
        };
        return this.genericDao.existsOne(sqlParams);
    };
};