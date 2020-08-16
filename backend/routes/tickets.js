const express = require('express');
const {
  getTickets,
  getTicket,
  addTicket,
  updateTicket,
  deleteTicket,
} = require('../controllers/tickets');

// Include other resource routers
const commentRouter = require('./comments');

const router = express.Router({ mergeParams: true });

// Reroute into other resource routers
router.use('/:ticketId/comments', commentRouter);

const { protect } = require('../middleware/auth');

router.route('/').get(getTickets).post(protect, addTicket);
router.route('/:id').get(getTicket).put(updateTicket).delete(deleteTicket);
//router.route('/:userId').get(getTickets);

module.exports = router;
