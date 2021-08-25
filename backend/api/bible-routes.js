const router = require('express').Router();
const  Verse = require("../models/Verse")
//get all messages 
router.get("/", (req, res) => {
    Verse.findAll()
    .then(verseData => {res.json(verseData)})
    .catch(error => res.status(500).json(error))
});
//get a certain verse
router.get("/:id", (req, res) => {
    Verse.findOne({
        where:{
        id : req.params.id
        }
    })
    .then(verseData => {
        console.log("req success ")
        if(!verseData){
            res.status(404).json({message: 'No verse found with this id!'})
        }
        res.json(verseData)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    });
});

//Post a message
router.post("/", (req, res) => {
    console.log("bible post req recieved");
    /*
    {
        Text
        Book
        Chapter
        Verse
    }
    */
   Verse.create({
       verseText: req.body.text,
       verseBook: req.body.book,
       verseChapter: req.body.chapter,
       verseNumber: req.body.verse
   })
   .then(verseData => res.json(verseData))
   .catch(err => {
       console.log(err)
       res.status(500).json({message: "Internal server error..."});
   })

});

//delete a message
router.delete("/:id", (req, res) => {
    Verse.destroy({
        where: {
            id: req.params.id
        }
    })
    .then (verseData => {
        if(!verseData){
            res.status(404).json({message: "No verse found with this id!"})
        }
        res.json(verseData);
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