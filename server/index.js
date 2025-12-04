const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://TravelEase:LvP42ffUdguMJ26t@cluster0.gotmti8.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const database = client.db("travelEaseData");
    const vehicles = database.collection("vehicles");

    app.post("/vehicles", async (req, res) => {
      const data = req.body;
      console.log(data);
      const result = await vehicles.insertOne(data);
      res.send(result);
    });

    // get api
    app.get("/vehicles", async (req, res) => {
      const result = await vehicles.find().toArray();
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    //   await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("hello developers");
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
