const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8100"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});
var router = require("express").Router();

// Create a new Tutorial
var word = require('./models/modelController')

const mongoose = require("mongoose");
const url = require('./database/db.config').url;
const Word = require('./models/model')
app.post('/api/crear', (req,res) => {
    var newWord = new  Word(req.body);
    newWord.save(function (err) {
        if (err)
            res.send(err);
        res.json(newWord);
    });
})
mongoose.connect(url, function (err, res) {
    if (err) {
        console.log("ERROR: connecting to Database. " + err);
    }

    // const word =  new Word({word:'tree',translate:'arbol'});
    //
    // word.save().then((err)=> {
    //     if (err){
    //         console.log(err);
    //     }
    //      console.log('saved');
    // })

    app.listen(3000, function () {
        console.log("Node server running on http://localhost:3000");
    });
});

