const router = require('express').Router();

//get all messages 
router.get("/", (req, res) => {
    console.log("messages get req recieved")
});

//Post a message
router.post("/", (req, res) => {
    console.log("messages post req recieved")
});

//delete a message
router.delete("/", (req, res) => {
    console.log("messages delete req recieved")
});

//put a  message
router.put("/", (req, res) => {
    console.log("messages  put req recieved")
})

module.exports = router;