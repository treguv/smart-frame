const router  = require('express').Router();
const express = require('express')
const app = express()
const apiRoutes = require("./api");


router.use("/api", apiRoutes)

module.exports = router;