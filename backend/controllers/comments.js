const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Comment = require('../models/Comment');
const Ticket = require('../models/Ticket');

// @desc Get a single comment
// @route GET /api/v1/comments/:id
// @access Private
exports.getComment = asyncHandler(async (req, res, next) => {
  const comment = await Comment.findById(req.params.id);

  if (!comment) {
    next(new ErrorResponse(`No comment with id of ${req.params.id}`), 404);
  }

  res.status(200).json({ sucess: true, data: comment });
});

// @desc Get comments
// @route GET /api/v1/tickets/:ticketId/comments
// @access Private
exports.getComments = asyncHandler(async (req, res, next) => {
  const comments = await Comment.find({ ticket: req.params.ticketId });

  if (!comments) {
    next(
      new ErrorResponse(
        `No comments found for ticket ${req.params.ticketId}`,
        404
      )
    );
  }

  res
    .status(200)
    .json({ sucess: true, count: comments.length, data: comments });
});

// @desc Add a comment
// @route POST /api/v1/tickets/:ticketId/comments
// @access Private
exports.addComment = asyncHandler(async (req, res, next) => {
  req.body.ticket = req.params.ticketId;
  req.body.user = req.user.id;

  const ticket = await Ticket.findById(req.params.ticketId);

  if (!ticket) {
    next(new ErrorResponse(`No ticket with id of ${req.params.ticketId}`), 404);
  }

  const comment = await Comment.create(req.body);

  res.status(200).json({ sucess: true, data: comment });
});

// @desc Update comment
// @route PUT /api/v1/comments/:id
// @access Private
exports.updateComment = asyncHandler(async (req, res, next) => {
  let comment = await Comment.findById(req.params.id);

  if (!comment) {
    next(new ErrorResponse(`No comment with id of ${req.params.id}`), 404);
  }

  comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ sucess: true, data: comment });
});

// @desc Detele comment
// @route DELETE /api/v1/comments/:id
// @access Private
exports.deleteComment = asyncHandler(async (req, res, next) => {
  const comment = await Comment.findById(req.params.id);

  if (!comment) {
    next(new ErrorResponse(`No comment with id of ${req.params.id}`), 404);
  }

  await comment.remove();

  res.status(200).json({ sucess: true, data: {} });
});
