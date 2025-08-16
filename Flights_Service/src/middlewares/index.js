const airport = require("../models/airport");

module.exports = {
  airplaneMiddleware: require("./airplane-middleware"),
  airportMiddleware: require("./airport-middleware"),
  cityMiddleware: require("./city-middleware"),
  FlightMiddlewares: require("./flight-middleware"),
};
