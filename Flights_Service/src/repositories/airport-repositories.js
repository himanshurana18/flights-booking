const CrudRepository = require("./crud-operations");
const { Airport } = require("../models");

class AirportRepository extends CrudRepository {
  constructor() {
    super(Airport);
  }
}

module.exports = AirportRepository;
