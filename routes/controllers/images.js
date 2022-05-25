import express from 'express';
var router = express.Router();
router.get('/', async (req, res) =>{
    try {
        if (req.query.carID) {
            allImages = await req.models.Image.find({car: req.query.carID});
            res.send(allImages)
        }
    } catch(err) {
        console.log(err);
        res.status(500).send({status: 'error', error: err});
    }
});

router.post('/', (req, res) => {
    try {
        const car = req.body.carID;
        const images = req.body.images;
        const newImageCollection = req.models.Image({
            car: car,
            images: images
        });

        newImageCollection.save()
        res.send('Success');
    } catch(err) {
        console.log(err);
        res.status(500).send({status: 'error', error: err});
    }

});

export default router;
