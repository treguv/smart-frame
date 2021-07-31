const router = require('express').Router();

//get all messages 
router.get("/", (req, res) => {
    console.log("bible get req recieved");

});

//Post a message
router.post("/", (req, res) => {
    console.log("bible post req recieved");

});

//delete a message
router.delete("/:id", (req, res) => {

});

//put a  message
//this endpoint will not be needed for this 
// router.put("/", (req, res) => {
   
// })

module.exports = router;