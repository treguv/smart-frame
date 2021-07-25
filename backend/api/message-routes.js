const router = require('express').Router();
const Message = require("../models/Message");

//get all messages 
router.get("/", (req, res) => {
    console.log("messages get req recieved");
    Message.findAll()
    .then(messageData => res.json(messageData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
    // res.send("Recieved...");
});

//Post a message
router.post("/", (req, res) => {
    console.log("messages post req recieved");
    Message.create({
        messageText: req.body.messageText,
        messageTopic: req.body.messageTopic,
    })
    .then(messageData => res.json(messageData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err); 
    })
});

//delete a message
router.delete("/:id", (req, res) => {
    Message.destroy({
        where: {
            id: req.params.id
        }
    })
    .then (messageData => {
        if(!messageData){
            res.status(404).json({message: "No message found with this id!"})
        }
        res.json(messageData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

//put a  message
//this endpoint will not be needed for this 
// router.put("/", (req, res) => {
   
// })

module.exports = router;