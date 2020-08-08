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
  priority: {
    type: String,
    required: [true, 'Please set the ticket priority'],
    enum: ['Lowest', 'Low', 'Medium', 'High', 'Highest'],
  },
  status: {
    type: String,
    enum: ['Open', 'In progress', 'Resolved'],
    default: 'open',
  },
  status: {
    type: String,
    enum: [
      'Bugs/Errors',
      'Feature requests',
      'Training/Document requests',
      'Other comments',
    ],
  },
  createdAt: { type: Date, default: Date.now },
  project: {
    type: mongoose.Schema.ObjectId,
    ref: 'Project',
    required: true,
  },
});

module.exports = mongoose.model('Ticket', TicketSchema);
