const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/toDoApp', (err, db) => {
    if(err){
        return console.log(err);
    }
    console.log('Connected to MongoDB Server');

    // db.collection('toDos').deleteMany({
    //     text: 'eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('toDos').findOneAndDelete({
        completed: false
    }).then((res) => {
        console.log(res);
    });
});