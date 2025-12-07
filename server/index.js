const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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
    const bookings = database.collection("bookings");

    app.post("/vehicles", async (req, res) => {
      const data = req.body;
      console.log(data);
      const result = await vehicles.insertOne(data);
      res.send(result);
    });

    // get api
    app.get("/vehicles", async (req, res) => {
      const { category, location, sortPrice } = req.query;

      let filter = {};
      if (category) {
        filter.category = category;
      }
      if (location) {
        filter.location = { $regex: location, $options: "i" };
      }

      let options = {};
      if (sortPrice === "asc") {
        options.sort = { pricePerDay: 1 };
      } else if (sortPrice === "desc") {
        options.sort = { pricePerDay: -1 };
      }

      const result = await vehicles.find(filter, options).toArray();
      res.send(result);
    });

    app.get("/vehicles/:id", async (req, res) => {
      const id = req.params;
      const query = { _id: new ObjectId(id) };
      const result = await vehicles.findOne(query);
      res.send(result);
    });

    app.get("/my-vehicles", async (req, res) => {
      const { email } = req.query;
      // console.log(email)
      const query = { userEmail: email };
      const result = await vehicles.find(query).toArray();
      res.send(result);
    });

    // update
    app.put("/update/:id", async (req, res) => {
      const data = req.body;
      const id = req.params;
      const query = { _id: new ObjectId(id) };

      // console.log(data);

      const updatedVehicle = {
        $set: data,
      };

      const result = await vehicles.updateOne(query, updatedVehicle);
      res.send(result);
    });

    // delete
    app.delete("/delete/:id", async (req, res) => {
      const id = req.params;
      const query = { _id: new ObjectId(id) };
      const result = await vehicles.deleteOne(query);
      res.send(result);
    });

    app.post("/bookings", async (req, res) => {
      const data = req.body;

      const alreadyBooked = await bookings.findOne({
        userEmail: data.userEmail,
        vehicleId: data.vehicleId,
      });

      if (alreadyBooked) {
        return res.status(400).send({ message: "Already booked" });
      }

      const result = await bookings.insertOne(data);
      res.send(result);
    });


    app.get("/my-bookings", async (req, res) => {
      const email = req.query.email;
      const result = await bookings.find({ userEmail: email }).toArray();
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
