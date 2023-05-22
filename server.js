const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const studata = require('./database.js');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/angularstu").then(() => {
    console.log("Database Created");
}).catch((err) => {
    console.log(err);
});

app.get("/student", async (req, res) => {
    try {
        let data = await studata.find();
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "An error occurred" });
    }
});

app.post("/stuform/student", (req, res) => {
    const { name, rollno, branch, year } = req.body;
    studata({
        name, rollno, branch, year
    }).save();
    res.send("Data Received").status(200);
});

app.delete('/student/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await studata.deleteOne({ _id: id });
        res.send("Student deleted successfully");
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "An error occurred" });
    }
});

app.listen(2002, () => {
    console.log('Server Started');
});
