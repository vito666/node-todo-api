const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");
    
    // deleteMany
    
//    db.collection("Todos").deleteMany({text: "Eat lunch"}).then((result) => {
//        console.log(result);
//    });
    
    // deleteOne
    
//    db.collection("Todos").deleteOne({text: "Eat lunch"}).then((result) => {
//        console.log(result);
//    });
    
    // findOneAndDelete
    
//    db.collection("Todos").findOneAndDelete({completed: false}).then((result) => {
//        console.log(result);
//    });
    
    
    
//    db.collection("Users").deleteMany({name: "Artem"}).then((res) => {
//        console.log(res);
//    });
    
    db.collection("Users").findOneAndDelete({
        _id: new ObjectID("59bd27734669cb375d8cc809")
    }).then((res) => {
        console.log(res);
    });

    //    db.close();
    
    
    
    
    
    
    
    
    
});