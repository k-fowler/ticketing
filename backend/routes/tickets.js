const express = require('express');
const { getTickets } = require('../controllers/tickets');

const router = express.Router({ mergeParams: true });

router.route('/').get(getTickets);
router.route('/:userId').get(getTickets);

module.exports = router;
