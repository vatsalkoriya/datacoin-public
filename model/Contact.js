const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// simple contact schema matching the frontend form
const ContactSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    company: { type: String },
    service: { type: String },
    message: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Contact = model('Contact', ContactSchema);
module.exports = Contact;
