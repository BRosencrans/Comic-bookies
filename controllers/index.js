const router = require('express').Router();

const apiRoutes = require('./api')
router.use('/', apiRoutes);

const frontEndRoutes= require("./frontendController");
router.use("/", frontEndRoutes);

module.exports = router;