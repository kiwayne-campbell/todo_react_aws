const router = require("express").Router();
const Todo = require("../models/Todo");

router.get("/", (req, res) => {
    console.log("your in the index page")
    Todo.find((err, result) => {
        if(err) throw new Error(err);
        res.json(result);
    });
});

router.post("/", (req, res) => {
    console.log(req.body);
    Todo.create(req.body, (err, result) => {
        res.json(result);
    });
});

router.delete("/:id", (req, res) => {
    Todo.findOneAndRemove({ _id: req.params.id}, (err, result) => {
        if(err) throw new Error(err);
        res.end();
    });
});

router.put("/:id", (req, res) => {
    Todo.findOneAndUpdate({ _id: req.params.id}, req.body, { new: true }, (err, result) => {
        if(err) throw new Error(err);
        res.json(result);
    });
});

module.exports = router;