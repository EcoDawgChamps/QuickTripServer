import express from 'express';
var router = express.Router();

router.get('/', async (req, res) => {
    let allCars = [];
    if (req.query.userID) {
        allCars = await req.models.Car.find({owner: req.query.userID});
    } else {
        allCars = await req.models.Car.find();
    }
    if (req.query.numCars) {
        allCars = allCars.slice(0, req.query.numCars);
    }
    res.send(allCars);
})

export default router;
