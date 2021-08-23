const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const todoRoutes = require("./routes/todoRoutes")
const PORT = 3030;
const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false };

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost/todolist", connectionOptions )
    .then(() => console.log("connected successfully"))
    .catch((err) => console.error(err));

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
    console.log("the server is running on port" + PORT )
})