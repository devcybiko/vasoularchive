const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const upload = require('./upload')


// API Routes
router.use("/api", apiRoutes);
router.use('/upload', upload)



module.exports = router
