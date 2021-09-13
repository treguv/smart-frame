const router = require("express").Router();
const Image = require("../models/Image");
//get all images
router.get("/", (req, res) => {
  console.log("image get req recieved");
  Image.findAll()
  .then(result => res.json(result))
  .catch(err => res.status(500).json({message: err}));
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
router.delete("/:id", (req, res) => {
  Image.destroy({
    where: {
        id: req.params.id
    }
  })
  .then (imageData => {
      if(!imageData){
          res.status(404).json({message: "No image found with this id!"})
      }
      res.json(imageData);
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  })
});

//put a  image
router.put("/", (req, res) => {
  console.log("image  put req recieved");
  res.send("Recieved...");
});

module.exports = router;
