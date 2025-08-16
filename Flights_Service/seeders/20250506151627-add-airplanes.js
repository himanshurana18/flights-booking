"use strict";
const { Op } = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Airplanes", [
      {
        id: 1,
        modelNumber: "A320Neo",
        capacity: 180,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        modelNumber: "B737Max",
        capacity: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        modelNumber: "A350XWB",
        capacity: 350,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        modelNumber: "B787Dreamliner",
        capacity: 296,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        modelNumber: "A220",
        capacity: 130,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        modelNumber: "E195E2",
        capacity: 132,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        modelNumber: "CRJ900",
        capacity: 90,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        modelNumber: "B747",
        capacity: 416,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        modelNumber: "A380",
        capacity: 555,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        modelNumber: "B777X",
        capacity: 426,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 11,
        modelNumber: "MC21",
        capacity: 165,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 12,
        modelNumber: "ComacC919",
        capacity: 158,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 13,
        modelNumber: "B727",
        capacity: 149,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 14,
        modelNumber: "A310",
        capacity: 280,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 15,
        modelNumber: "B767",
        capacity: 270,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 16,
        modelNumber: "Tu204",
        capacity: 210,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 17,
        modelNumber: "Il96",
        capacity: 262,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 18,
        modelNumber: "MD11",
        capacity: 293,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 19,
        modelNumber: "DC10",
        capacity: 270,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 20,
        modelNumber: "L1011TriStar",
        capacity: 250,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Airplanes", {
      [Op.or]: [{ modelNumber: "boeing777" }, { modelNumber: "airbus340" }],
    });
  },
};
