const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

//    db.collection("Todos").findOneAndUpdate({
//        _id: new ObjectID("59bd516a69e2f5c80ffb27a0")
//    },{
//       $set : {
//           completed: true
//       } 
//    },{
//        returnOriginal: false
//    }).then((res) => {
//        console.log(res);
//    });
    
    db.collection("Users").findOneAndUpdate({
        name: "Mark"
    },{
        $set: {
            name: "Artem"
        },
        $inc: {
            age: -4
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    })

    //    db.close();
});