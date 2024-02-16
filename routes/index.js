const express = require('express');
const router = express.Router();
const PositionRoutes = require('./position.routes');
const DepartamentRoutes = require('./departament.routes');
const AdressRoutes = require('./adress.routes');
const WorkerRoutes = require('./worker.router');

router.use('/position', PositionRoutes);
router.use('/departament', DepartamentRoutes);
router.use('/adress', AdressRoutes);
router.use('/worker', WorkerRoutes);

module.exports = router;