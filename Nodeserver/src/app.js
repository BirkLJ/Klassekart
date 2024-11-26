const express = require('express');
const cors = require('cors');
const fs = require('fs');
const jsonfile = require('./Infrastructure/data/StudentsData.json')

// Import routes from index.js in routes folder
const routes = require('./Presentation/routes');

// Create Express app
const app = express();

// Allow cross-origin requests from anywhere
app.use(cors());

// Middleware. Convert all requests to JSON
app.use(express.json());

// Adds /api/v1 to all routes
app.use('/api/v1', routes);

//GET request
app.get('/', (req, res) => {
    res.send(jsonfile)
  })

module.exports = app;
