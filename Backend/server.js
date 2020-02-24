const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

mongoose.connect('mongodb://localhost:27017/todoListDB', {useNewUrlParser: true, useUnifiedTopology: true});

const TaskSchema = new mongoose.Schema({
    name:String,
    content:String
});

const ListSchema = new mongoose.Schema({
    listTitle:String,
    task:[TaskSchema]
});


const List = mongoose.model("List", ListSchema);

app.get("/", (req,res) => {
    res.send("hello world");
});



app.listen(5000, () => {console.log("Server successfully started on port 5000")});