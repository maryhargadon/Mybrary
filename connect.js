
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://maradon:Pamela1450!@cluster0-ww5ee.mongodb.net/mybrary?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
