const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const upload = require('./upload')

const connectionString = 'mongodb+srv://abushman:<Bncustom1>@vasouldb-kxfyq.mongodb.net/test?retryWrites=true&w=majority'
// API Routes
router.use("/api", apiRoutes);
router.use('/upload', upload)



module.exports = router, connectionString;
