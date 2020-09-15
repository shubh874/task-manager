// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = require('ObjectID')

const {MongoClient, ObjectID} = require('mongodb')



const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client)=>{
    if(error){
        return console.log('Unable to make the connection');
    }

    const db = client.db(databaseName)
    
    // db.collection('users').updateOne({
    //     _id : new ObjectID("5f55c3417840e840b43fe705")
    // },{
    //     $set : {
    //         name: 'mohit'
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     bool: false
    // },{
    //     $set:{
    //         bool:true
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({
    //     age:24
    // }).then((result)=>{
    //     console.log(result.deletedCount)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: 'breakfast'
    }).then((result)=>{
        console.log
    }).catch((error)=>{
        console.log(error)
    })
})