const { StatusCodes } = require("http-status-codes");
const { CityService } = require("../services");
const { ErrorResponse } = require("../utils/common");
const { SuccessResponse } = require("../utils/common");

async function createCity(req, res) {
  console.log("Request Body: ", req.body);

  try {
    const city = await CityService.createCity({
      name: req.body.name,
    });
    SuccessResponse.data = city;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json(ErrorResponse);
  }
}
module.exports = {
  createCity,
};
