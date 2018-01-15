/*
 * Created on 2018-01-15 ( Time 11:23:58 )
 * Generated by Telosys Tools Generator ( version 3.0.0 )
 */

// Load BookOrder entity
const BookOrder = require('../model/BookOrder');

// Load DAO Common functions
const GenericDao = require('./commons/genericDao');

// SQL Queries
const sqlSelectById = "SELECT id, shopCode, customerCode, employeeCode, date, state FROM bookOrder WHERE id=$id";
const sqlSelectAll = "SELECT * FROM bookOrder";
const sqlCount = "SELECT COUNT(*) AS count FROM bookOrder";
const sqlUpdate = "UPDATE bookOrder SET shopCode=$shopCode, customerCode=$customerCode, employeeCode=$employeeCode, date=$date, state=$state WHERE id=$id";
const sqlDelete = "DELETE FROM bookOrder WHERE id=$id";
const sqlExist = "SELECT (count(*) > 0) as found FROM bookOrder WHERE id=$id";
const sqlInsert = "INSERT into bookOrder (id, shopCode, customerCode, employeeCode, date, state) VALUES ($id, $shopCode, $customerCode, $employeeCode, $date, $state)";

/**
 * DAO of entity BookOrder
 */
module.exports = class BookOrderDao {

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
                    return new BookOrder(row.id, row.shopCode, row.customerCode, row.employeeCode, row.date, row.state);
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
            let bookOrders = [];
            if (rows) {
                for (const row of rows) {
                    bookOrders.push(new BookOrder(row.id, row.shopCode, row.customerCode, row.employeeCode, row.date, row.state));
                }
            }
            return bookOrders;
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
     * @param BookOrder
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(BookOrder) {
        let sqlParams = {
 			$id: BookOrder.id,
 			$shopCode: BookOrder.shopCode,
 			$customerCode: BookOrder.customerCode,
 			$employeeCode: BookOrder.employeeCode,
 			$date: new Date(BookOrder.date).toISOString(),
 			$state: BookOrder.state
        };
        return this.genericDao.update(sqlParams);
    };

    /**
     * Save the given entity in the database in case it exist, else create a new one
     * @param BookOrder
     * @return the updated or created entity
     */
    save(BookOrder) {
        return this.exists(BookOrder).then(exist => {
            if(exist) {
                return this.update(BookOrder).then(result => {
                    if (result === true) {
                        return {
                            body:{
                                id: BookOrder.id,
                                shopCode: BookOrder.shopCode,
                                customerCode: BookOrder.customerCode,
                                employeeCode: BookOrder.employeeCode,
                                date: new Date(BookOrder.date).toISOString(),
                                state: BookOrder.state
                            },
                            newItem: false
                        };
                    } else {
                        return result;
                    }
                });
            } else {
                return this.create(BookOrder).then(result => {
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
     * @param BookOrder
     * returns database insertion status
     */
    create(BookOrder) {
        let sqlParams = {
 			$id: BookOrder.id,
 			$shopCode: BookOrder.shopCode,
 			$customerCode: BookOrder.customerCode,
 			$employeeCode: BookOrder.employeeCode,
 			$date: new Date(BookOrder.date).toISOString(),
 			$state: BookOrder.state
        };

        return this.genericDao.insert(sqlParams)
            .then(id => {
                if (id) {
                    return {
 					    id: BookOrder.id,
 					    shopCode: BookOrder.shopCode,
 					    customerCode: BookOrder.customerCode,
 					    employeeCode: BookOrder.employeeCode,
 					    date: new Date(BookOrder.date).toISOString(),
 					    state: BookOrder.state
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
     * @param BookOrder
     * returns database deletion status
     */
    delete(BookOrder) {
        let sqlParams = {
 			$id : BookOrder.id
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
     * @param BookOrder
     * returns database entry existence status (true/false)
     */
    exists(BookOrder) {
        let sqlParams = {
            $id : BookOrder.id
        };
        return this.genericDao.existsOne(sqlParams);
    };
};