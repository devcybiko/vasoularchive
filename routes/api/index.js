const router = require("express").Router();
const pageRoutes = require("./records");

// Record routes
router.use("/records", pageRoutes);

module.exports = router;
