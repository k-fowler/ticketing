const mongoose = require('mongoose');
const slugify = require('slugify');

const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
      unique: true,
      trim: true,
      maxlength: [50, 'Name cannot exceec 50 characters'],
    },
    slug: String,
    description: {
      type: String,
      required: [true, 'Please add a description'],
      maxlength: [500, 'Description cannot exceed 500 characters'],
    },
    user: {
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

// Create project slug from the name
ProjectSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// Cascade delete tickets when a project is deleted
ProjectSchema.pre('remove', async function (next) {
  console.log(`Tickets being removed from project ${this._id}`);
  const tickets = await this.model('Ticket').find({ project: this._id });
  console.log(tickets);
  for (let i = 0; i < tickets.length; i++) {
    await this.model('Comment').deleteMany({ ticket: tickets[i]._id });
  }
  await this.model('Ticket').deleteMany({ project: this._id });
  next();
});

// Reverse populate with virtuals
ProjectSchema.virtual('tickets', {
  ref: 'Ticket',
  localField: '_id',
  foreignField: 'project',
  justOne: false,
});

module.exports = mongoose.model('Project', ProjectSchema);
