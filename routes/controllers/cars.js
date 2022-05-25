import express from 'express';
var router = express.Router();

router.get('/', async (req, res) => {
    try {
        let allCars = [];
        if (req.query.userID) {
            allCars = await req.models.Car.find({owner: req.query.userID});
        } else if (req.query.carID) {
            allCars = await req.models.Car.findById({_id: req.query.carID});
        } else {
            allCars = await req.models.Car.find();
        }
        if (req.query.numCars) {
            allCars = allCars.slice(1, req.query.numCars);
        }
        res.send(allCars);
    } catch(err) {
        console.log(err);
        res.status(500).send({status: 'error', error: err});
    }
});

router.post('/', (req, res) => {
    try {
        const owner = req.body.owner;
        const year = req.body.year;
        const color = req.body.color;
        const vin = req.body.vin;
        const capacity = req.body.capacity;
        const location = req.body.location;
        const features = req.body.features;
        const make = req.body.make;
        const model = req.body.model;

        const newCar = new req.models.Car({
            owner: owner,
            year: year,
            color: color,
            VIN: vin,
            capacity: capacity,
            location: location,
            features: features,
            make: make,
            model: model
        });    
        newCar.save();
        res.status(200).send({carID: newCar._id});
    } catch(err) {
        console.log(err);
        res.status(500).send({status: 'error', error: err});
    }
});

export default router;
