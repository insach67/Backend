const express = require('express')
const healthController = require('../details/Health')

const healthRouter = express.Router()
healthRouter.route("/health")
.get(healthController.apiController)
module.exports = healthRouter