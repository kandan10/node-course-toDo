const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/toDoApp', (err , db) => {
    if(err){
        return console.log('Unable to connect to the server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('toDos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, results) => {
    //     if(err){
    //         return console.log('Unable to insert toDo', err);
    //     }
    //     console.log(JSON.stringify(results.ops, undefined, 2));
    // });

    db.collection('users').insertOne({
        name: 'Kandan',
        age: 20,
        location: 'BLR'
    }, (err, response) => {
        if(err){
            return console.log('Unable to insert user');
        }
        console.log('User Inserted: ', JSON.stringify(response.ops, undefined, 2));
    })
    db.close();
});
