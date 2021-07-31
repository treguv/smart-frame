const router = require('express').Router();
const messageRoutes  = require('./message-routes');
const imageRoutes = require('./image-routes');
const dateRoutes = require('./date-routes');

//set up route prefixes
router.use("/messages", messageRoutes);
router.use("/images", imageRoutes);
router.use("/date", dateRoutes);
module.exports = router;
