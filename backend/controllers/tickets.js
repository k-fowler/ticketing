const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Ticket = require('../models/Ticket');

// @desc Get tickets
// @route GET /api/v1/tickets
// @route GET /api/v1/projects/:projectId/tickets
// @access Private
exports.getTickets = asyncHandler(async (req, res, next) => {
  let query;

  if (req.params.projectId) {
    query = Ticket.find({ project: req.params.projectId });
  } else {
    query = Ticket.find();
  }

  const tickets = await query;

  res.status(200).json({ sucess: true, count: tickets.length, data: tickets });
});
