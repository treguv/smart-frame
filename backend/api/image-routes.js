const router = require('express').Router();

//get all images 
router.get("/", (req, res) => {
    console.log("image get req recieved");
    res.send("Recieved...");
});

//Post a image
router.post("/", (req, res) => {
    console.log("image post req recieved");
    res.send("Recieved...");
});

//delete an image
router.delete("/", (req, res) => {
    console.log("image delete req recieved");
    res.send("Recieved...");
});

//put a  image
router.put("/", (req, res) => {
    console.log("image  put req recieved");
    res.send("Recieved...");

})

module.exports = router;