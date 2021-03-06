/*
 * Created on 2018-01-15 ( Time 11:23:58 )
 * Generated by Telosys Tools Generator ( version 3.0.0 )
 */

// Load BookOrderItem entity
const BookOrderItem = require('../model/BookOrderItem');

// Load DAO Common functions
const GenericDao = require('./commons/genericDao');

// SQL Queries
const sqlSelectById = "SELECT bookOrderId, bookId, quantity, price FROM bookOrderItem WHERE bookOrderId=$bookOrderId AND bookId=$bookId";
const sqlSelectAll = "SELECT * FROM bookOrderItem";
const sqlCount = "SELECT COUNT(*) AS count FROM bookOrderItem";
const sqlUpdate = "UPDATE bookOrderItem SET quantity=$quantity, price=$price WHERE bookOrderId=$bookOrderId AND bookId=$bookId";
const sqlDelete = "DELETE FROM bookOrderItem WHERE bookOrderId=$bookOrderId AND bookId=$bookId";
const sqlExist = "SELECT (count(*) > 0) as found FROM bookOrderItem WHERE bookOrderId=$bookOrderId AND bookId=$bookId";
const sqlInsert = "INSERT into bookOrderItem (bookOrderId, bookId, quantity, price) VALUES ($bookOrderId, $bookId, $quantity, $price)";

/**
 * DAO of entity BookOrderItem
 */
module.exports = class BookOrderItemDao {

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
     * @param bookOrderId, bookId
     * @return entity
     */
    findById(bookOrderId, bookId) {
       let sqlParams = {
			$bookOrderId: bookOrderId,
			$bookId: bookId
		};
        return this.genericDao.findOne(sqlParams)
            .then(row => {
                if(row) {
                    return new BookOrderItem(row.bookOrderId, row.bookId, row.quantity, row.price);
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
            let bookOrderItems = [];
            if (rows) {
                for (const row of rows) {
                    bookOrderItems.push(new BookOrderItem(row.bookOrderId, row.bookId, row.quantity, row.price));
                }
            }
            return bookOrderItems;
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
     * @param BookOrderItem
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(BookOrderItem) {
        let sqlParams = {
 			$bookOrderId: BookOrderItem.bookOrderId,
 			$bookId: BookOrderItem.bookId,
 			$quantity: BookOrderItem.quantity,
 			$price: BookOrderItem.price
        };
        return this.genericDao.update(sqlParams);
    };

    /**
     * Save the given entity in the database in case it exist, else create a new one
     * @param BookOrderItem
     * @return the updated or created entity
     */
    save(BookOrderItem) {
        return this.exists(BookOrderItem).then(exist => {
            if(exist) {
                return this.update(BookOrderItem).then(result => {
                    if (result === true) {
                        return {
                            body:{
                                bookOrderId: BookOrderItem.bookOrderId,
                                bookId: BookOrderItem.bookId,
                                quantity: BookOrderItem.quantity,
                                price: BookOrderItem.price
                            },
                            newItem: false
                        };
                    } else {
                        return result;
                    }
                });
            } else {
                return this.create(BookOrderItem).then(result => {
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
     * @param BookOrderItem
     * returns database insertion status
     */
    create(BookOrderItem) {
        let sqlParams = {
 			$bookOrderId: BookOrderItem.bookOrderId,
 			$bookId: BookOrderItem.bookId,
 			$quantity: BookOrderItem.quantity,
 			$price: BookOrderItem.price
        };

        return this.genericDao.insert(sqlParams)
            .then(id => {
                if (id) {
                    return {
 					    bookOrderId: BookOrderItem.bookOrderId,
 					    bookId: BookOrderItem.bookId,
 					    quantity: BookOrderItem.quantity,
 					    price: BookOrderItem.price
                  };
                } else {
                    return false;
                }
            });
    };

    /**
     * Deletes an entity using its Id / Primary Key
     * @param bookOrderId, bookId
     * returns database deletion status
     */
    deleteById(bookOrderId, bookId) {
		let sqlParams = {
			$bookOrderId: bookOrderId,
			$bookId: bookId
		};
        return this.genericDao.delete(sqlParams);
    };

    /**
     * Deletes an entity using the entity
     * @param BookOrderItem
     * returns database deletion status
     */
    delete(BookOrderItem) {
        let sqlParams = {
 			$bookOrderId : BookOrderItem.bookOrderId, 
            $bookId : BookOrderItem.bookId
        };
        return this.genericDao.delete(sqlParams);
    };

    /**
     * Returns true if an entity exists with the given Id / Primary Key
     * @param bookOrderId, bookId
     * returns database entry existence status (true/false)
     */
    existsById(bookOrderId, bookId) {
		let sqlParams = {
			$bookOrderId: bookOrderId,
			$bookId: bookId
		};
        return this.genericDao.existsOne(sqlParams);
    };

    /**
     * Returns true if an entity exists using the entity
     * @param BookOrderItem
     * returns database entry existence status (true/false)
     */
    exists(BookOrderItem) {
        let sqlParams = {
            $bookOrderId : BookOrderItem.bookOrderId, 
            $bookId : BookOrderItem.bookId
        };
        return this.genericDao.existsOne(sqlParams);
    };
};