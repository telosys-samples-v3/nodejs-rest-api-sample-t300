/*
 * Created on 2018-01-15 ( Time 11:23:58 )
 * Generated by Telosys Tools Generator ( version 3.0.0 )
 */

/**
 * Book Entity (ES6 Class)
 */

module.exports = class Book {
    constructor(id, publisherId, authorId, isbn, title, price, quantity, discount, availability, bestSeller) {
 		this.id = id;
 		this.publisherId = publisherId;
 		this.authorId = authorId;
 		this.isbn = isbn;
 		this.title = title;
 		this.price = price;
 		this.quantity = quantity;
 		this.discount = discount;
 		this.availability = availability;
 		this.bestSeller = bestSeller;
    }
};