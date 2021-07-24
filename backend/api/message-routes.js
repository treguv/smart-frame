const router = require('express').Router();

//get all messages 
router.get("/", (req, res) => {
    console.log("messages get req recieved");
    res.send("Recieved...");
});

//Post a message
router.post("/", (req, res) => {
    console.log("messages post req recieved");
    res.send("Recieved...");
});

//delete a message
router.delete("/", (req, res) => {
    console.log("messages delete req recieved");
    res.send("Recieved...");
});

//put a  message
router.put("/", (req, res) => {
    console.log("messages  put req recieved");
    res.send("Recieved...");
})

module.exports = router;