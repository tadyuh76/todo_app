const mongoose = require("mongoose");
const { Todo } = require("./models");
const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const app = express();

const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log("express connected on port: ", PORT);
});

mongoose.connect(process.env.ATLAS_URI, () => {
  console.log("mongoose connected");
});

app.get("/", (req, res) => {
  Todo.find({}).then((data) => res.send(data));
});

app.put("/:id", (req, res) => {
  try {
    const id = req.params.id;
    Todo.findByIdAndUpdate(
      id,
      [{ $set: { completed: { $eq: [false, "$completed"] } } }],
      () => {}
    );
  } catch (error) {
    console.log(error);
  }
  // res.end();
});

app.delete("/:id", (req, res) => {
  try {
    const id = req.params.id;
    Todo.findByIdAndDelete(id, () => console.log("toggled todo with id: ", id));
  } catch (error) {
    console.log(error);
  }
  // res.end();
});

app.post("/", (req, res) => {
  try {
    if (!req.body) return;
    const newTodo = new Todo(req.body);

    newTodo.save();
    res.send(newTodo.toObject());
  } catch (error) {
    console.log(error);
  }
});
