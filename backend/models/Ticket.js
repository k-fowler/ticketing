const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema(
  {
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
    type: {
      type: String,
      required: [true, 'Please set the ticket type'],
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
    submitter: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Cascade delete comments when a ticket is deleted
TicketSchema.pre('remove', async function (next) {
  console.log(`Comments being removed from ticket ${this._id}`);
  await this.model('Comment').deleteMany({ ticket: this._id });
  next();
});

// Reverse populate with virtuals
TicketSchema.virtual('comments', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'ticket',
  justOne: false,
});

module.exports = mongoose.model('Ticket', TicketSchema);
