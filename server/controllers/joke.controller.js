// import Joke variable
const Joke = require('../models/joke.model');

// CRUD operations
//find all jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
    .then((AllDataJokes) => {
        res.json({ jokes: AllDataJokes })
    })
    .catch((err) => {
        res.json({ message: "something went wrong", error: err })
    });
}

// get a random joke 
module.exports.findRandomJoke = (req, res) => {
    Joke.countDocuments()
    .then(count => {
        var random = Math.floor(Math.random() * count);
        return Joke.findOne().skip(random);
    })
    .then(joke => {
        res.json({ joke: joke })
    })
    .catch(err => {
        res.json({ message: "something went wrong", error: err });
    });
}

//find one joke by id
module.exports.findJokeById = (req, res) => {
    Joke.findOne({ _id: req.params.id })
    .then(oneSingleJoke => {
        res.json({ joke: oneSingleJoke })
    })
    .catch((err) => {
        res.json({ message: "something went wrong", error: err })
    });
}

// create a joke
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
    .then(newlyCreatedJoke => {
        res.json({ joke: newlyCreatedJoke })
    })
    .catch((err) => {
        res.json({ message: "something went wrong", error: err})
    });
}

//update joke
module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.param.id }, 
        req.body,
        { new: true, runValidators: true }
    )
    .then(updatedJoke => {
        res.json({ joke: updatedJoke })
    })
    .catch((err) => {
        res.json({ message: "something went wrong", error: err })
    });
}

//delete a joke
module.exports.deleteExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
    .then( results => {
        res.json({ results: results })
    })
    .catch((err) => {
        req.json({ message: "something went wrong", error: err})
    });
}

