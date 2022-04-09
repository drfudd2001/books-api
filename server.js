require("dotenv").config();
// Express
const express = require("express");
const app = express();

// Allow cross origin requests
const cors = require("cors");
app.use(cors());
// Parser
app.use(express.urlencoded({extended: true}));
app.use(express.json())

// Mongoose
const mongoose = require("mongoose");
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to Mongo: ", process.env.MONGO_URI));

// Routes
app.use("/books", require("./controllers/books"));

app.get("/", (req, res) => {
    res.send("Hello Books");
});

app.listen(process.env.PORT, () => {
    console.log("Server is running on http://localhost:" + process.env.PORT);
});