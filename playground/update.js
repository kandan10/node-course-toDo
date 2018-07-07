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

    // db.collection('toDos').findOneAndUpdate({
    //     _id: new ObjectID("5b40ed0d345d7719fab8b81e")
    // }, {
    //     $set : {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(res);
    // });

    db.collection('users').findOneAndUpdate({
        name: 'Kandan'
    }, {
        $set : {
            name: 'Kanaya'
        },
        $inc : {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    })
});