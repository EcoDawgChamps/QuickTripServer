import express from 'express';
import carsRouter from './controllers/cars.js';
import usersRouter from './controllers/users.js'
var router = express.Router();

router.use('/cars', carsRouter);
router.use('/users', usersRouter);

export default router;
