const { StatusCodes } = require("http-status-codes");
const { AirportService } = require("../services");
const { ErrorResponse } = require("../utils/common");
const { SuccessResponse } = require("../utils/common");

async function createAirport(req, res) {
  try {
    const airport = await AirportService.createAirport({
      name: req.body.name,
      code: req.body.code,
      address: req.body.address,
      cityId: req.body.cityId,
    });
    SuccessResponse.data = airport;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json(ErrorResponse);
  }
}

async function getAirports(req, res) {
  try {
    const airports = await AirportService.getAirports();
    SuccessResponse.data = airports;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json(ErrorResponse);
  }
}
async function destroyAirport(req, res) {
  try {
    const response = await AirportService.destroyAirport(req.params.id);
    SuccessResponse.data = respones;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
async function getAirport(req, res) {
  try {
    const airports = await AirportService.getAirport(req.params.id);
    SuccessResponse.data = airports;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createAirport,
  getAirports,
  getAirport,
  destroyAirport,
};
