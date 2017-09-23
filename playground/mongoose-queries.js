const {ObjectID} = require("mongodb")

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");


//var id = "59be956c80abc65814a8c9af";
//
//
//if(!ObjectID.isValid(id)) {
//    console.log("Id not valid");
//};
//
//Todo.find({
//    _id: id
//}).then((todos) => {
//    console.log("Todos", todos);
//});
//
//Todo.findOne({
//    _id: id 
//}).then((todo) => {
//    console.log("Todo",todo);
//});
//
//Todo.findById(id).then((todo) => {
//    if (!todo ) {
//        return console.log("Id not found");
//    }
//    console.log("Todo by id", todo);
//}).catch((err) => console.log(err));


User.findById("59be956c80abc65814a8c9af").then((user) => {
    if(!user) {
        return console.log("User not found");
    }
    console.log(JSON.stringify(user, undefined, 2));
},(err) => {
    console.log(err);
})





