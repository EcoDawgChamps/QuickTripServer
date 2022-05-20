import mongoose from "mongoose";

let models = {};

const main = () => {
    console.log("connecting to MongoDB...");
    mongoose.connect("mongodb+srv://CocoaCommander:8LkbXJp7TlMQFGXp@cluster0.2xpgo.mongodb.net/capstone?retryWrites=true&w=majority")
        .then(console.log("connection successful!"))
        .catch(err => console.log(err));
    const userSchema = new mongoose.Schema({
        firstName: String,
        lastName: String,
        driversLicense: String,
        email: String,
        password: String
    });

    const carSchema = new mongoose.Schema({
        owner: mongoose.Types.ObjectId,
        year: Number,
        color: String,
        VIN: String,
        capacity: Number,
        location: String,
        features: [String],
        make: String,
        model: String
    });

    const imageSchema = new mongoose.Schema({
        car: mongoose.Types.ObjectId,
        images: [{
            data: Buffer,
            contentType: String
        }]
    });

    const rentalSchema = new mongoose.Schema({
        renter: mongoose.Types.ObjectId,
        startDate: Date,
        endDate: Date
    })

    const reviewSchema = new mongoose.Schema({
        rental: mongoose.Types.ObjectId,
        rating: Number,
        reviewBody: String
    })

    models.User = mongoose.model('User', userSchema);
    console.log("User Schema Created");
    models.Car = mongoose.model('Car', carSchema);
    console.log("Car Schema Created");
    models.Image = mongoose.model('Image', imageSchema);
    console.log("Image Schema Created");
    models.Rental = mongoose.model('Rental', rentalSchema);
    console.log("Rental Schema Created");
    models.Review = mongoose.model('Review', reviewSchema);
    console.log("Review Schema Created");

    // models.Post = mongoose.model('Post', postSchema);
    // console.log("Post schema created.");
    // models.Comment = mongoose.model('Comment', commentSchema);
    // console.log("Comment schema created.");
    // models.Info = mongoose.model('Info', infoSchema);
    // console.log("Info schema created.");
}

main();

export default models;