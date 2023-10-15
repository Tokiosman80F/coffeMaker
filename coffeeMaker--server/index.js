const express = require('express')
const app = express()
const port = 3000
// XUNObJO83OcbnzU1 coffeMaker2
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// dotenv
require('dotenv').config()

// middleware
const cors=require('cors')
app.use(cors())
app.use(express.json())

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.BUCKET}:${process.env.SECRET_KEY}@cluster0.krvg7ix.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.log);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})