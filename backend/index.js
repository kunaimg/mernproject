const express = require("express");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
dotenv.config();
const port = process.env.Port;
const app = express();
app.use(bodyparser.json({ extended: true }));
app.use(bodyparser.urlencoded({ extended: true }));
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");
const url =
  "mongodb+srv://ka6626919:PE1DMv82oxTSzUJU@cluster0.tuucumn.mongodb.net/first?retryWrites=true&w=majority";

async function connectt() {
  await mongoose.connect(url, console.log("connect with database"));
}

connectt();

let schma = new mongoose.Schema({
  name: String,
  lastname: String,
  email: String,
  password: String,
});
let model = mongoose.model("merns", schma);

app.post("/add", async (req, resp) => {
  try {
    datawork = req.body;

    let data = new model(datawork);
    const result = await data.save();
    console.log(result);

    resp.status(200).json({ ok: "ho gaya hai" });
  } catch (error) {
    resp.status(500).json({ message: "something went wrong" });
  }
});
app.get("/allusers", async (req, resp) => {
  try {
    let data = await model.find();

    resp.status(200).json(data);
  } catch (error) {
    resp.status(500).json({ message: "something went wrong" });
  }
});
app.delete("/deletee/:id", async (req, resp) => {
  try {
    const result = await model.deleteOne({ _id: req.params.id });

    resp.status(200).json(result);
  } catch (error) {
    resp.status(500).json({ message: "something went wrong" });
  }
});
app.get("/update/:id", async (req, resp) => {
  try {
    let data = await model.findOne({ _id: req.params.id });

    resp.status(200).json(data);
  } catch (error) {
    resp.status(500).json({ message: "something went wrong" });
  }
});
app.put("/update/:id", async (req, resp) => {
  try {
    let result = await model.updateOne(
      { _id: req.params.id },
      {
        $set: req.body,
      }
    );
    resp.status(200).json(result);
  } catch (error) {
    resp.status(500).json({ message: "something went wrong" });
  }
});
app.listen(port, () => {
  console.log("server is running on port 4000");
});
