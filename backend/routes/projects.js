const express = require('express');
const {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} = require('../controllers/projects');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

router.route('/').get(protect, getProjects).post(protect, createProject);

router
  .route('/:id')
  .get(protect, getProject)
  .put(protect, updateProject)
  .delete(protect, authorize('projectManager', 'admin'), deleteProject);

module.exports = router;
