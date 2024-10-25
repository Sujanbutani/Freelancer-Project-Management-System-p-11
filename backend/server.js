const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const multer = require('multer');
const projectController = require('./controllers/projectController');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
const upload = multer({ dest: 'uploads/' });

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/payments', paymentRoutes);
app.post('/api/projects/import', upload.single('file'), projectController.importProjectsFromCSV);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
