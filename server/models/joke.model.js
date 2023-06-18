const mongoose = require('mongoose');

//model for jokes api with validations
const JokeSchema = new mongoose.Schema({
    setUp: {
        type: String,
        required: [true, 'setUp is required'],
        minlength: [20, 'setup must be at least 20 characters long']
    },
    punchLine: {
        type: String,
        required: [true, 'punchline is required'],
        minlength: [20, 'punchline must be at least 20 characters long'] 
    }
});

const Joke = mongoose.model('joke', JokeSchema);
module.exports = Joke;