require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static frontend from /public
app.use(express.static(path.join(__dirname, '../public')));

// API routes
app.use('/api', routes);

// Error Handler
app.use(errorHandler);

module.exports = app;
