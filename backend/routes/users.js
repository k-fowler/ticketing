const express = require('express');
const {
  getUsers,
  getUser,
  updateUser,
  createUser,
  deleteUser,
} = require('../controllers/users');

// Include other resource routers
const ticketRouter = require('./tickets');

const router = express.Router({ mergeParams: true });

// Reroute into other resource routers
router.use('/:userId/ticketssubmitted', ticketRouter);
router.use('/:userId/ticketsassigned', ticketRouter);

const { protect, authorize } = require('../middleware/auth');

router.use(protect);
router.use(authorize('admin'));

router.route('/').get(getUsers).post(createUser);
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
