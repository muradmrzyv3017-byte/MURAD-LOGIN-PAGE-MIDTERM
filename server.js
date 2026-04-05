const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());


mongoose.connect("mongodb://muradmrzyv3017_db_user:GdR5YcYpYt0tZTzL@ac-q0qtxyn-shard-00-00.ns3mtge.mongodb.net:27017,ac-q0qtxyn-shard-00-01.ns3mtge.mongodb.net:27017,ac-q0qtxyn-shard-00-02.ns3mtge.mongodb.net:27017/?ssl=true&replicaSet=atlas-ia3vk5-shard-0&authSource=admin&appName=Cluster0")
.then(() => console.log("DB connected"))
.catch(err => console.log(err));


const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});