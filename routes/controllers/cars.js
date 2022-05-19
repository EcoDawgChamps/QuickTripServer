import express from 'express';
var router = express.Router();

router.get('/', async (req, res) => {
    const allCars = await req.models.Car.find();
    console.log(allCars);
    res.send(allCars);
})

export default router;
