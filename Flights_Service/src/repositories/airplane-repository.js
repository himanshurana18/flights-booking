const CrudRepository = require("./crud-operations");
const { Airplane } = require("../models");

class AirplaneRepository extends CrudRepository {
  constructor() {
    super(Airplane);
  }
}

module.exports = AirplaneRepository;
// src/repositories/airplane-repository.js

// const { Airplane } = require("../models");

// class AirplaneRepository {
//   async create(data) {
//     try {
//       const airplane = await Airplane.create(data);
//       return airplane;
//     } catch (error) {
//       console.error("Error in AirplaneRepository.create:", error);
//       throw error;
//     }
//   }

//   async getAll() {
//     try {
//       const airplanes = await Airplane.findAll();
//       return airplanes;
//     } catch (error) {
//       console.error("Error in AirplaneRepository.getAll:", error);
//       throw error;
//     }
//   }
// }

// module.exports = AirplaneRepository;
