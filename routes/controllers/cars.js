import express from 'express';
var router = express.Router();

router.get('/', async (req, res) => {
    let allCars = await req.models.Car.find();
    if (req.query.numCars) {
        allCars = allCars.slice(0, req.query.numCars);
    }
    res.send(allCars);
})

export default router;
