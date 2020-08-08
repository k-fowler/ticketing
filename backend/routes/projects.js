const express = require('express');
const {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} = require('../controllers/projects');

// Include other resource routers
const ticketRouter = require('./tickets');

const router = express.Router();

// Reroute into other resource routers
router.use('/:projectId/tickets', ticketRouter);

const { protect, authorize } = require('../middleware/auth');

router.route('/').get(protect, getProjects).post(protect, createProject);

router
  .route('/:id')
  .get(protect, getProject)
  .put(protect, updateProject)
  .delete(protect, authorize('projectManager', 'admin'), deleteProject);

module.exports = router;
