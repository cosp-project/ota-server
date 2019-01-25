const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    device: {
        type: String,
        trim: true
    },

    maintainer: {
        type: String,
        trim: true
    },

    buildDate: {
        type: Number,
        trim: true
    },

    changeLog: {
        type: String
    }
});

module.exports = mongoose.model('Device', deviceSchema);