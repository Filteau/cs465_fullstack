const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');


// GET: /trips - lists all the trips
// Regardless of the outcome, responsemust include HTML status code
// and JSON message to the requesting client

const tripsList = async(req, res) => {
    const q = await Model
        .find({}) // no filter, return all records
        .exec();

        // Uncomment the following line to show results or query
        // console.log(q);

    if(!q) {
        return res
            .status(404)
            .json(err);
    } else { // return resulting trip list
        return res
            .status(200)
            .json(q);
    }

};

const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode }) // no filter, return all records
        .exec();

        // Uncomment the following line to show results or query
        console.log(q);

    if(!q) { // if database returns no data
        return res
            .status(404)
            .json(err);
    } else { // return resulting trip list
        return res
            .status(200)
            .json(q);
    }

};

module.exports = {
    tripsList,
    tripsFindByCode
};
