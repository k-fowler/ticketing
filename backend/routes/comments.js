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

router.route('/').get(protect, getComments).post(protect, addComment);

router
  .route('/:id')
  .get(protect, getComment)
  .put(protect, updateComment)
  .delete(protect, deleteComment);

module.exports = router;
