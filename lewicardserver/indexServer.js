const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const {model} = require("mongoose");
const url = require('./database/db.config').url;


app.set('view engine','ejs');
var corsOptions = {
    origin: "http://localhost:8100"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// simple route



mongoose.connect(url, {useNewUrlParser:true});
const lewicarSchema = {
    englishWord: String,
    translation: String
}
const Item = mongoose.model("lewicardItem",lewicarSchema);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." }, );
});
app.post("/api/create", (req, res) => {
    if (res.statusCode === 200){
        res.json({ message: req.body });
        var modEnglish = req.body.englishWord;
        modEnglish = modEnglish.toString();
        var modTranslate = req.body.translation;
        modTranslate = modTranslate.toString();
        var mod = req.body;
        const item = new Item(mod);
        console.log(item);
        item.save().then(result => {
            console.log('añadido correctamente '+result);
        }).catch(error => {
            console.log('ha ocurrido un error '+error)
        })
    }else {
        console.log(res.statusCode);
    }


});
app.get('/api/data',(req, res) => {
    // console.log(req);
    // console.log(res);
    const data = {};
    Item.find(data).then(value => {
        res.send(value);
    }).catch(error => {
        res.send(error);
    });
})
app.delete('/api/delete/:id',(req,res) => {
    console.log(req.params.id);
    Item.deleteOne({_id: req.params.id}).then(value => {
        console.log('eliminado correctamente');
        console.log(value);
    }).catch(error=>{
        console.log(error);
    })
})
app.listen(process.env.PORT ||3000, function () {
    console.log("Node server running on http://localhost:3000");
});
