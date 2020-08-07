const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [50, 'Title cannot exceed 50 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Description cannot exceed 500 characters'],
  },
});

module.exports = mongoose.model('Ticket', TicketSchema);
