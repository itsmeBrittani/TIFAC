const mongoose = require('mongoose');


const incidentSchema = new mongoose.Schema({
    establishment:  { type: String, required: true },
    location:  { type: String },
    date: { type: String },
    description: { type: String, required: true },
    type: { type: Array, required: true }
});

const Incident = mongoose.model('Incident', incidentSchema);

module.exports = Incident;