import express from 'express';
import carsRouter from './controllers/cars.js';
import usersRouter from './controllers/users.js'
import imagesRouter from './controllers/images.js'
var router = express.Router();

router.use('/cars', carsRouter);
router.use('/users', usersRouter);
router.use('/images', imagesRouter);

export default router;
