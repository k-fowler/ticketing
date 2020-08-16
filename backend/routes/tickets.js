const express = require('express');
const {
  getTickets,
  getTicket,
  addTicket,
  updateTicket,
  deleteTicket,
  ticketFileUpload,
} = require('../controllers/tickets');

// Include other resource routers
const commentRouter = require('./comments');

const router = express.Router({ mergeParams: true });

// Reroute into other resource routers
router.use('/:ticketId/comments', commentRouter);

const { protect } = require('../middleware/auth');

router.route('/').get(protect, getTickets).post(protect, addTicket);
router
  .route('/:id')
  .get(protect, getTicket)
  .put(protect, updateTicket)
  .delete(protect, deleteTicket);
//router.route('/:userId').get(getTickets);

router.route('/:id/file').put(ticketFileUpload);

module.exports = router;
