const router = require("express").Router();
const pageRoutes = require("./routes");

// Book routes
router.use("/records", pageRoutes);

module.exports = router;
