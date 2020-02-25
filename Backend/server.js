const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

mongoose.connect('mongodb://localhost:27017/todoListDB', {useNewUrlParser: true, useUnifiedTopology: true});

const TaskSchema = new mongoose.Schema({
    taskName:String,
    content:String
});

const ListSchema = new mongoose.Schema({
    listTitle:String,
    tasks:[TaskSchema]
});


const List = mongoose.model("List", ListSchema);

app.route("/lists").get(function(req,res){
    List.find({}, function(err,lists){
        if(err){
            console.log(err);
            
        } else{
            res.send(lists);
        }
    });
})
.post(function(req,res){
    const listTitle = req.body.title;
    const newList = new List({
        listTitle:listTitle,
        tasks:[]
    });

    newList.save(function(err){
        if(err){
            console.log(err);
            
        } else{
            res.send("Successfully added a new List");
        }
    });


})
.delete(function(req,res){
    List.deleteMany({}, function(err){
        if(err){
            console.log(err);
        } else{
            res.send("successfully deleted all lists");
        }
    });
});


app.route("/lists/:listId")
.get(function(req,res){
    List.find({_id:req.params.listId}, function(err, list){
        (err) ? console.log(err) : res.send(list);
    });
})
.patch(function(req,res){  
    const updateObject = req.body;
    List.update({ _id:req.params.listId}, { $set: updateObject}, function(err) {
        (err)?console.log(err): res.send("SUccessfully updated the list");
        
      });
})
.put(function(req,res){
    const updateObject = req.body;
    List.update({ _id:req.params.listId}, {listTitle:updateObject.listTitle}, {overwrite:true}, function(err) {
        (err)?console.log(err): res.send("Successfully updated the list");
        
      });
})
.delete(function(req,res){
    List.deleteOne({ _id: req.params.listId }, function (err) {
        (err) ? console.log(err): res.send("Sucessfully deleted the list");

      });

});




app.listen(5000, () => {console.log("Server successfully started on port 5000")});