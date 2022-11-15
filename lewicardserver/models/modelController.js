const db = require("mongoose");;
const Word = require('./model');
// Create and Save a new Word
exports.create = (req, res) => {
// Validate request
    console.log(req,res);
    if (!req.body.englishWord) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    // Create a Word
    const word = new Word({
        englishWord: req.body.englishWord,
        translation: req.body.translation,
        published: req.body.published ? req.body.published : false
    });
    console.log(word);

    // Save Word in the database
    word
        .save(word)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

// Retrieve all Words from the database.
exports.findAll = (req, res) => {
};

// Find a single Word with an id
exports.findOne = (req, res) => {

};

// Update a Word by the id in the request
exports.update = (req, res) => {

};

// Delete a Word with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Words from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Words
exports.findAllPublished = (req, res) => {

};
