"use strict";
const { BOOKING_STATUS } = require("../utils/common/enums");
const { BOOKED, CANCELLED, INITIATED, PENDING } = BOOKING_STATUS;
const { Model } = require("sequelize");
const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Booking.init(
    {
      flightId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM,
        values: [BOOKED, CANCELLED, INITIATED, PENDING],
        defaultValue: INITIATED,
        allowNull: false,
      },
      noOfSeats: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      totalCost: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Booking",
    }
  );
  return Booking;
};
