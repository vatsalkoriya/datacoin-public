const express = require('express');
const router = express.Router();
const { createContact, getContacts } = require('../controllers/contactController');
const authMiddlewares = require('../middlewares/auth');
const adminMiddleware = require('../middlewares/admin');

// anyone can submit a message
router.post('/', createContact);

// retrieve messages - protect with auth + admin
router.get('/', authMiddlewares, adminMiddleware, getContacts);

module.exports = router;