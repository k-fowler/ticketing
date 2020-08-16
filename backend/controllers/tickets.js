const path = require('path');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Ticket = require('../models/Ticket');
const Project = require('../models/Project');

// @desc Get a single ticket
// @route GET /api/v1/tickets/:id
// @access Private
exports.getTicket = asyncHandler(async (req, res, next) => {
  const ticket = await Ticket.findById(req.params.id)
    .populate({
      path: 'project',
      select: 'name description',
    })
    .populate('comments');

  if (!ticket) {
    next(new ErrorResponse(`No ticket with id of ${req.params.id}`), 404);
  }

  res.status(200).json({ sucess: true, data: ticket });
});

// @desc Get tickets
// @route GET /api/v1/tickets
// @route GET /api/v1/projects/:projectId/tickets
// @access Private
exports.getTickets = asyncHandler(async (req, res, next) => {
  let query;

  if (req.params.projectId) {
    query = Ticket.find({ project: req.params.projectId });
  } else {
    query = Ticket.find().populate({
      path: 'project',
      select: 'name description',
    });
  }

  const tickets = await query;

  res.status(200).json({ sucess: true, count: tickets.length, data: tickets });
});

// @desc Add a ticket
// @route POST /api/v1/projects/:projectId/tickets
// @access Private
exports.addTicket = asyncHandler(async (req, res, next) => {
  req.body.project = req.params.projectId;
  req.body.submitter = req.user.id;

  const project = await Project.findById(req.params.projectId);

  if (!project) {
    next(
      new ErrorResponse(`No project with id of ${req.params.projectId}`),
      404
    );
  }

  const ticket = await Ticket.create(req.body);

  res.status(200).json({ sucess: true, data: ticket });
});

// @desc Update ticket
// @route PUT /api/v1/projects/:id
// @access Private
exports.updateTicket = asyncHandler(async (req, res, next) => {
  let ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    next(new ErrorResponse(`No ticket with id of ${req.params.id}`), 404);
  }

  ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ sucess: true, data: ticket });
});

// @desc Detele ticket
// @route DELETE /api/v1/projects/:id
// @access Private
exports.deleteTicket = asyncHandler(async (req, res, next) => {
  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    next(new ErrorResponse(`No ticket with id of ${req.params.id}`), 404);
  }

  // Make sure user is ticket owner or admin
  if (
    ticket.submitter.toString() !== req.user.id &&
    req.user.role !== 'admin'
  ) {
    return next(
      new ErrorResponse(
        `User ${req.params.id} is not authorized to delete this ticket`,
        401
      )
    );
  }

  await ticket.remove();

  res.status(200).json({ sucess: true, data: {} });
});

// @desc    Upload file for ticket
// @route   PUT /api/v1/tickets/:id/file
// @access  Private
exports.ticketFileUpload = asyncHandler(async (req, res, next) => {
  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    return next(
      new ErrorResponse(`No ticket with id of ${req.params.id}`, 404)
    );
  }

  if (!req.files) {
    return next(new ErrorResponse('Please upload a file', 404));
  }

  const file = req.files.file;

  // Make sure file is a photo
  if (!file.mimetype.startsWith('image')) {
    return next(new ErrorResponse('Please upload an image file'));
  }

  // Check filesize
  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return next(
      new ErrorResponse(
        `Please upload a file less than ${process.env.MAX_FILE_UPLOAD}`
      )
    );
  }

  // Create custom filename
  file.name = `file_${ticket._id}${path.parse(file.name).ext}`;

  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async (err) => {
    if (err) {
      console.error(err);
      return next(new ErrorResponse('Problem with file upload', 500));
    }

    await Ticket.findByIdAndUpdate(req.params.id, { file: file.name });

    res.status(200).json({ sucess: true, data: file.name });
  });
});
