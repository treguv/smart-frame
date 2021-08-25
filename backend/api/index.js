const router = require('express').Router();
const messageRoutes  = require('./message-routes');
const imageRoutes = require('./image-routes');
const dateRoutes = require('./date-routes');
const bibleRoutes = require('./bible-routes');

//set up route prefixes
router.use("/messages", messageRoutes);
router.use("/images", imageRoutes);
router.use("/date", dateRoutes);
router.use("/verse", bibleRoutes)
module.exports = router;
