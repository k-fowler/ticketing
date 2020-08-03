// @desc Get all projects
// @route GET /api/v1/projects
// @access Private
exports.getProjects = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all projects' });
};

// @desc Get a single project
// @route GET /api/v1/projects/:id
// @access Private
exports.getProject = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show a single bootcamp ${req.params.id}` });
};

// @desc Create new project
// @route POST /api/v1/projects
// @access Private
exports.createProject = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create new project' });
};

// @desc Update project
// @route PUT /api/v1/projects/:id
// @access Private
exports.updateProject = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update project ${req.params.id}` });
};

// @desc Delete project
// @route DELETE /api/v1/projects/:id
// @access Private
exports.deleteProject = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete project ${req.params.id}` });
};
