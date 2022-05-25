import express from 'express';
var router = express.Router();
router.get('/', async (req, res) =>{
    try {
        if (req.query.userID) {
            let allRentals = await req.models.Rental.find({renter: req.query.userID});
            // allRentals = await allRentals.map(async rental => {
            //     rental.carInfo = await req.models.Car.find({_id: rental.carID})
            // })
            res.send(allRentals)
        }
    } catch(err) {
        console.log(err);
        res.status(500).send({status: 'error', error: err});
    }
});

router.post('/', (req, res) => {
    try {
        const renter = req.body.renterID;
        const carID = req.body.carID;
        const startDate = req.body.startDate;
        const endDate = req.body.endDate;
        const newRental = req.models.Rental({
            renter: renter,
            carID: carID,
            startDate: startDate,
            endDate: endDate
        });

        newRental.save();
        res.send('Success');
    } catch(err) {
        console.log(err);
        res.status(500).send({status: 'error', error: err});
    }

});

export default router;