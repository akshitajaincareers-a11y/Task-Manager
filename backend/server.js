const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); // Ensure you create this file

// 1. Load Environment Variables
dotenv.config();
// 2. Connect to Database
connectDB();

const app = express();

// 3. Essential Middlewares
app.use(cors());
app.use(express.json()); // Essential for parsing req.body

// 4. Test Route (To verify server is running)
app.get('/test', (req, res) => {
    res.send('API is running successfully');
});


app.use('/api/tasks', require('./routes/taskRoute')); // Importing task routes

app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});