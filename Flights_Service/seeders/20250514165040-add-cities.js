"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Cities", [
      { id: 1, name: "New York", createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: "London", createdAt: new Date(), updatedAt: new Date() },
      { id: 3, name: "Tokyo", createdAt: new Date(), updatedAt: new Date() },
      { id: 4, name: "Paris", createdAt: new Date(), updatedAt: new Date() },
      { id: 5, name: "Berlin", createdAt: new Date(), updatedAt: new Date() },
      { id: 6, name: "Sydney", createdAt: new Date(), updatedAt: new Date() },
      { id: 7, name: "Toronto", createdAt: new Date(), updatedAt: new Date() },
      {
        id: 8,
        name: "Los Angeles",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { id: 9, name: "Mumbai", createdAt: new Date(), updatedAt: new Date() },
      { id: 10, name: "Dubai", createdAt: new Date(), updatedAt: new Date() },
      {
        id: 11,
        name: "Singapore",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { id: 12, name: "Moscow", createdAt: new Date(), updatedAt: new Date() },
      { id: 13, name: "Rome", createdAt: new Date(), updatedAt: new Date() },
      {
        id: 14,
        name: "Hong Kong",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 15,
        name: "São Paulo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 16,
        name: "Istanbul",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 17,
        name: "Cape Town",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { id: 18, name: "Seoul", createdAt: new Date(), updatedAt: new Date() },
      {
        id: 19,
        name: "Rio de Janeiro",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 20,
        name: "Mexico City",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Cities", null, {});
  },
};
