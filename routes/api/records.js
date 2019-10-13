const router = require("express").Router();
const recordsController = require("../../controllers/recordsController");
var host = "localhost:3001";

// Matches with "/api/records"
router.route("/")
  .get(recordsController.findAll)
  .post(recordsController.create);

// Matches with "/api/records/:id"
router
  .route("/:id")
  .get(recordsController.findById)
  .put(recordsController.update)
  .delete(recordsController.remove);

module.exports = router;
