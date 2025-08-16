const express = require("express");
const router = express.Router();

const AirportController = require("../../controllers/airport-controller"); // <-- yeh line zaruri hai
const airportMiddleware = require("../../middlewares/airport-middleware");

router.post(
  "/",
  airportMiddleware.validateCreateRequest,
  AirportController.createAirport
); // defining POST route
router.delete("/:id", AirportController.destroyAirport);
router.get("/", AirportController.getAirports);
router.get("/:id", AirportController.getAirport);
module.exports = router;
