/*
 * Created on 2018-01-15 ( Time 11:23:58 )
 * Generated by Telosys Tools Generator ( version 3.0.0 )
 */

// Load Modules
const express = require('express');
const router = express.Router();

// Load controller
const BookOrderItemController = require('../../controller/BookOrderItemController');
const bookOrderItemController = new BookOrderItemController();

/**
 * BookOrderItem API routes
 */

router.get('/count', function (req, res) {
    bookOrderItemController.countAll(res);
});

router.get('/exists/:bookOrderId/:bookId', function (req, res) {
    bookOrderItemController.exists(req, res);
});

router.get('/:bookOrderId/:bookId', function (req, res) {
    bookOrderItemController.findById(req, res);
});

router.get('', function (req, res) {
    bookOrderItemController.findAll(res);
});

router.put('/:bookOrderId/:bookId', function (req, res) {
    bookOrderItemController.update(req, res);
});

router.put('', function (req, res) {
    bookOrderItemController.save(req, res);
});

router.post('/', function (req, res) {
    bookOrderItemController.create(req, res);
});

router.delete('/:bookOrderId/:bookId', function (req, res) {
    bookOrderItemController.deleteById(req, res);
});

const BookOrderItemRoutes = router;

module.exports = router;