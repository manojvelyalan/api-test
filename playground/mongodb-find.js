const  {MongoClient , ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/MongoApi',{ useNewUrlParser: true },(error, client)=>{
  if(error){
    return console.log('Unable to connect MongoDB server',error);
  }
  console.log("Connected to MongoDB Server");
  const db = client.db('MongoApi');
  // db.collection('Users').find({_id:new ObjectID('5c6011fce726b82253963012')}).toArray().then((docs)=>{
  //   console.log('Users');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(error)=>{
  //     cosole.log('not able to fetch the document',error);
  // });
  db.collection('Users').find().count().then((count)=>{
    console.log('Users count :', count);
  },(error)=>{
      cosole.log('not able to fetch the document',error);
  });
  //client.close();
});
