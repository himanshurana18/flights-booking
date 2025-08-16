const CrudRepository = require("./crud-operations");
const { City } = require("../models");

class CityRepository extends CrudRepository {
  constructor() {
    super(City);
  }
}

module.exports = CityRepository;
