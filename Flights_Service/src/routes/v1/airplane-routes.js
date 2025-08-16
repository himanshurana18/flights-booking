const express = require("express");
const router = express.Router();

const AirplaneController = require("../../controllers/airplane-controller"); // <-- yeh line zaruri hai
const airplaneMiddleware = require("../../middlewares/airplane-middleware");

router.post(
  "/",
  airplaneMiddleware.validateCreateRequest,
  AirplaneController.createAirplane
); // defining POST route
router.delete("/:id", AirplaneController.destroyAirplane);
router.get("/", AirplaneController.getAirplanes);
router.get("/:id", AirplaneController.getAirplane);
module.exports = router;
