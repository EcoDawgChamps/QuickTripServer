import express from 'express';
import carsRouter from './controllers/cars.js';
import usersRouter from './controllers/users.js';
import imagesRouter from './controllers/images.js';
import rentalsRouter from './controllers/rentals.js'
var router = express.Router();

router.use('/cars', carsRouter);
router.use('/users', usersRouter);
router.use('/images', imagesRouter);
router.use('/rentals', rentalsRouter);

export default router;
