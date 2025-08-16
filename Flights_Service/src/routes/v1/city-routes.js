const express = require("express");
const router = express.Router();

const CityController = require("../../controllers/city-controller"); // <-- yeh line zaruri hai

router.post("/", CityController.createCity); // defining POST route

module.exports = router;
