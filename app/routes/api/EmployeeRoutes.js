/*
 * Created on 2018-01-15 ( Time 11:23:59 )
 * Generated by Telosys Tools Generator ( version 3.0.0 )
 */

// Load Modules
const express = require('express');
const router = express.Router();

// Load controller
const EmployeeController = require('../../controller/EmployeeController');
const employeeController = new EmployeeController();

/**
 * Employee API routes
 */

router.get('/count', function (req, res) {
    employeeController.countAll(res);
});

router.get('/exists/:code', function (req, res) {
    employeeController.exists(req, res);
});

router.get('/:code', function (req, res) {
    employeeController.findById(req, res);
});

router.get('', function (req, res) {
    employeeController.findAll(res);
});

router.put('/:code', function (req, res) {
    employeeController.update(req, res);
});

router.put('', function (req, res) {
    employeeController.save(req, res);
});

router.post('/', function (req, res) {
    employeeController.create(req, res);
});

router.delete('/:code', function (req, res) {
    employeeController.deleteById(req, res);
});

const EmployeeRoutes = router;

module.exports = router;