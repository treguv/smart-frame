const router = require('express').Router();
const messageRoutes  = require('./message-routes');
const imageRoutes = require('./image-routes');
//set up route prefixes
router.use("/messages", messageRoutes);
router.use("/images", imageRoutes);
module.exports = router;
