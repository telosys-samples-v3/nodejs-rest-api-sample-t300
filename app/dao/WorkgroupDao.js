/*
 * Created on 2018-01-15 ( Time 11:23:59 )
 * Generated by Telosys Tools Generator ( version 3.0.0 )
 */

// Load Workgroup entity
const Workgroup = require('../model/Workgroup');

// Load DAO Common functions
const GenericDao = require('./commons/genericDao');

// SQL Queries
const sqlSelectById = "SELECT id, name, description, creationDate FROM workgroup WHERE id=$id";
const sqlSelectAll = "SELECT * FROM workgroup";
const sqlCount = "SELECT COUNT(*) AS count FROM workgroup";
const sqlUpdate = "UPDATE workgroup SET name=$name, description=$description, creationDate=$creationDate WHERE id=$id";
const sqlDelete = "DELETE FROM workgroup WHERE id=$id";
const sqlExist = "SELECT (count(*) > 0) as found FROM workgroup WHERE id=$id";
const sqlInsert = "INSERT into workgroup (id, name, description, creationDate) VALUES ($id, $name, $description, $creationDate)";

/**
 * DAO of entity Workgroup
 */
module.exports = class WorkgroupDao {

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
     * @param id
     * @return entity
     */
    findById(id) {
       let sqlParams = {
			$id: id
		};
        return this.genericDao.findOne(sqlParams)
            .then(row => {
                if(row) {
                    return new Workgroup(row.id, row.name, row.description, row.creationDate);
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
            let workgroups = [];
            if (rows) {
                for (const row of rows) {
                    workgroups.push(new Workgroup(row.id, row.name, row.description, row.creationDate));
                }
            }
            return workgroups;
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
     * @param Workgroup
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(Workgroup) {
        let sqlParams = {
 			$id: Workgroup.id,
 			$name: Workgroup.name,
 			$description: Workgroup.description,
 			$creationDate: new Date(Workgroup.creationDate).toISOString()
        };
        return this.genericDao.update(sqlParams);
    };

    /**
     * Save the given entity in the database in case it exist, else create a new one
     * @param Workgroup
     * @return the updated or created entity
     */
    save(Workgroup) {
        return this.exists(Workgroup).then(exist => {
            if(exist) {
                return this.update(Workgroup).then(result => {
                    if (result === true) {
                        return {
                            body:{
                                id: Workgroup.id,
                                name: Workgroup.name,
                                description: Workgroup.description,
                                creationDate: new Date(Workgroup.creationDate).toISOString()
                            },
                            newItem: false
                        };
                    } else {
                        return result;
                    }
                });
            } else {
                return this.create(Workgroup).then(result => {
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
     * @param Workgroup
     * returns database insertion status
     */
    create(Workgroup) {
        let sqlParams = {
 			$id: Workgroup.id,
 			$name: Workgroup.name,
 			$description: Workgroup.description,
 			$creationDate: new Date(Workgroup.creationDate).toISOString()
        };

        return this.genericDao.insert(sqlParams)
            .then(id => {
                if (id) {
                    return {
 					    id: Workgroup.id,
 					    name: Workgroup.name,
 					    description: Workgroup.description,
 					    creationDate: new Date(Workgroup.creationDate).toISOString()
                  };
                } else {
                    return false;
                }
            });
    };

    /**
     * Deletes an entity using its Id / Primary Key
     * @param id
     * returns database deletion status
     */
    deleteById(id) {
		let sqlParams = {
			$id: id
		};
        return this.genericDao.delete(sqlParams);
    };

    /**
     * Deletes an entity using the entity
     * @param Workgroup
     * returns database deletion status
     */
    delete(Workgroup) {
        let sqlParams = {
 			$id : Workgroup.id
        };
        return this.genericDao.delete(sqlParams);
    };

    /**
     * Returns true if an entity exists with the given Id / Primary Key
     * @param id
     * returns database entry existence status (true/false)
     */
    existsById(id) {
		let sqlParams = {
			$id: id
		};
        return this.genericDao.existsOne(sqlParams);
    };

    /**
     * Returns true if an entity exists using the entity
     * @param Workgroup
     * returns database entry existence status (true/false)
     */
    exists(Workgroup) {
        let sqlParams = {
            $id : Workgroup.id
        };
        return this.genericDao.existsOne(sqlParams);
    };
};