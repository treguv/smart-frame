const { route } = require('./message-routes');

const router = require('express').Router();

router.get("/", (req,res) => {
    //return the current date and time as a json object
    var today = new Date();
    //format it into an easy to use object
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    const date = {
        day: dd,
        month: mm,
        year : yyyy,
        full : today, // return it all together in case you need it
    }
    res.json(date);
    //if errors come up try to catch them here
})
module.exports = router;