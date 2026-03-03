const asyncHandler = require('express-async-handler');
const Contact = require('../model/contact');

// create a new contact submission
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone, company, service, message } = req.body;

  // basic validation
  if (!name || !email || !message) {
    res.status(400);
    throw new Error('Name, email and message are required');
  }

  const contact = await Contact.create({ name, email, phone, company, service, message });
  res.status(201).json(contact);
});

// fetch all contacts (admin only)
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({}).sort({ createdAt: -1 });
  res.json(contacts);
});

module.exports = { createContact, getContacts };