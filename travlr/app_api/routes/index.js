const express = require('express'); // express app
const router = express.Router(); // router for API endpoints


const tripsController = require('../controllers/trips'); // controller routes

//define route for our trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList); // GET: /trips - lists all trips

// GET method routes tripsFindByCode - requires parameter
router
    .route('/trips/:tripCode') // GET: /trips/:tripCode - finds trip by code
    .get(tripsController.tripsFindByCode); // GET: /trips/:tripCode - finds trip by code


module.exports = router; // export the router for usage in app.js