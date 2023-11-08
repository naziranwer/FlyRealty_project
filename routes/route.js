// routes/formRoutes.js
const express = require('express');
const router = express.Router();
const formController = require('../controller/formController');

// Create a new form
router.get("/", formController.getForm)
router.post('/forms', formController.createForm);

// Retrieve a form by its ID
router.get('/forms/:formId', formController.getFormById);

// Submit a form
router.post('/forms/:formId/submit', formController.submitForm);

module.exports = router;
