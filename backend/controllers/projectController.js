const Project = require('../models/Project');
const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');

exports.createProject = async (req, res) => {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
};

exports.getProjects = async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
};

exports.updateProject = async (req, res) => {
    const { id } = req.params;
    const project = await Project.findByIdAndUpdate(id, req.body, { new: true });
    if (!project) {
        return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
};

exports.deleteProject = async (req, res) => {
    const { id } = req.params;
    const project = await Project.findByIdAndDelete(id);
    if (!project) {
        return res.status(404).json({ message: 'Project not found' });
    }
    res.status(204).send();
};

exports.importProjectsFromCSV = async (req, res) => {
    const projects = [];
    const filePath = path.join(__dirname, '../uploads', req.file.filename);

    // Pipe the CSV file data into the projects array
    fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row) => {
            projects.push(row);
        })
        .on('end', async () => {
            await Project.insertMany(projects);
            // fs.unlinkSync(filePath);
            res.status(201).send('Projects imported successfully.');
        })
        .on('error', (error) => {
            res.status(500).send('Error reading CSV file: ' + error.message);
        });
};
