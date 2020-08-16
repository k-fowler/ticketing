const express = require('express');
const {
  getComment,
  getComments,
  addComment,
  updateComment,
  deleteComment,
} = require('../controllers/comments');

const router = express.Router({ mergeParams: true });

const { protect, authorize } = require('../middleware/auth');

router.route('/').get(getComments).post(protect, addComment);

router.route('/:id').get(getComment).put(updateComment).delete(deleteComment);

module.exports = router;
