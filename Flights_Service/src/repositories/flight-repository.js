const CrudRepository = require("./crud-operations");
const { Flight, Airplane, Airport, City } = require("../models");
const { Sequelize } = require("sequelize");
const db = require("../models");
const { addRowLockOnFlights } = require("../queries");

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight);
  }

  async getAllFlights(filter, sort) {
    const response = await Flight.findAll({
      where: filter,
      order: sort,
      include: [
        {
          model: Airplane,
          required: true,
          as: "airplane_detail",
        },
        {
          model: Airport,
          required: true,
          as: "departure_airport",
          include: {
            model: City,
            required: true,
          },
        },
        {
          model: Airport,
          required: true,
          as: "arrival_airport",
          include: {
            model: City,
            required: true,
          },
        },
      ],
    });
    return response;
  }

  async updateRemainingSeats(flightId, seats, dec = true) {
    try {
      await db.sequelize.query(addRowLockOnFlights(flightId));
      const flight = await Flight.findByPk(flightId);

      if (+dec) {
        await flight.decrement("totalSeats", { by: seats });
      } else {
        await flight.increment("totalSeats", { by: seats });
      }

      return flight;
    } catch (error) {
      console.error("Error updating remaining seats:", error);
      throw error;
    }
  }
}

module.exports = FlightRepository;
