const express = require('express')
const sportsController = require('../details/Sports')

const sportsRouter = express.Router()
sportsRouter.route("/sports")
.get(sportsController.apiController)
module.exports = sportsRouter