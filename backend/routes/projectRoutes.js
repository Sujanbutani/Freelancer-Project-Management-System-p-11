const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const auth = require('../middleware/auth');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

router.post('/', auth, projectController.createProject);
router.get('/', auth, projectController.getProjects);
router.put('/:id', auth, projectController.updateProject);
router.delete('/:id', auth, projectController.deleteProject);
router.post('/import', auth, upload.single('file'), projectController.importProjectsFromCSV);

module.exports = router;
