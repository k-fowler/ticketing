const express = require('express');
const { getTickets, getTicket, addTicket } = require('../controllers/tickets');

const router = express.Router({ mergeParams: true });

const { protect } = require('../middleware/auth');

router.route('/').get(getTickets).post(protect, addTicket);
router.route('/id').get(getTicket);
router.route('/:userId').get(getTickets);

module.exports = router;
