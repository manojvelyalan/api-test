//const  MongoClient = require('mongodb').MongoClient;
//const  {MongoClient,ObjectID} = require('mongodb');

//var obj = new ObjectID();

//console.log(obj);
const  {MongoClient} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/MongoApi',{ useNewUrlParser: true },(error, client)=>{
  if(error){
    return console.log('Unable to connect MongoDB server',error);
  }
  console.log("Connected to MongoDB Server");
  const db = client.db('MongoApi')
  // db.collection('api').insertOne({
  //   text:'something to do',
  //   completed : true
  // },(error, result)=>{
  //   if(error){
  //     return console.log('Unabele to insert todo',error);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  // db.collection('Users').insertOne({
  //   name:'Manoj Velayalan',
  //   age:35
  // },(error,result)=>{
  //   if(error){
  //     return console.log('Unable to save the data',error);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  // });
  client.close();
});
