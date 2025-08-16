"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Roles", [
      {
        name: "ADMIN",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "CUSTOMER",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "FLIGHT_COMPANY",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Roles", null, {});
  },
};
