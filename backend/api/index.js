const router = require('express').Router();
const messageRoutes  = require('./message-routes');

//set up route prefixes
router.use("/messages", messageRoutes);

module.exports = router;
