/*
 * Created on 2018-01-15 ( Time 11:23:58 )
 * Generated by Telosys Tools Generator ( version 3.0.0 )
 */

// Load Modules
const express = require('express');
const router = express.Router();

// Load controller
const AuthorController = require('../../controller/AuthorController');
const authorController = new AuthorController();

/**
 * Author API routes
 */

router.get('/count', function (req, res) {
    authorController.countAll(res);
});

router.get('/exists/:id', function (req, res) {
    authorController.exists(req, res);
});

router.get('/:id', function (req, res) {
    authorController.findById(req, res);
});

router.get('', function (req, res) {
    authorController.findAll(res);
});

router.put('/:id', function (req, res) {
    authorController.update(req, res);
});

router.put('', function (req, res) {
    authorController.save(req, res);
});

router.post('/', function (req, res) {
    authorController.create(req, res);
});

router.delete('/:id', function (req, res) {
    authorController.deleteById(req, res);
});

const AuthorRoutes = router;

module.exports = router;