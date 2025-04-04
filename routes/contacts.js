const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Get all contacts
router.get('/', async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

// Add a contact
router.post('/', async (req, res) => {
  const newContact = new Contact(req.body);
  await newContact.save();
  res.json({ message: 'Contact added', contact: newContact });
});

// Update a contact
router.put('/:id', async (req, res) => {
  const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ message: 'Contact updated', contact: updatedContact });
});

// Delete a contact
router.delete('/:id', async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: 'Contact deleted' });
});

module.exports = router;
