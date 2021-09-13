const router = require("express").Router();
const Image = require("../models/Image");
//get all images
router.get("/", (req, res) => {
  console.log("image get req recieved");
  res.send("Recieved...");
});

//Post a image
router.post("/", (req, res) => {
  console.log(req.body.imageURL);
  Image.create({
    imageURL: req.body.imageURL,
  })
    .then((imageData) => {
      res.json(imageData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
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
});

module.exports = router;
