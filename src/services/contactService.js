import API from './api';

// send a new contact message
const sendContact = (contactData) => API.post('/contacts', contactData);

// fetch all contacts (admin only)
const fetchContacts = () => API.get('/contacts');

export { sendContact, fetchContacts };