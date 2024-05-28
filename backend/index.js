// Fix the import statements
import express from "express";  // Note: "express" instead of " express"
import cookieParser from "cookie-parser";
import cors from "cors";  // Note: "cors" instead of "cros"
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./Routes/auth.js";
import  userRoute from "./Routes/user.js";
import doctorRoute from "./Routes/doctor.js";
import reviewRoute from "./Routes/review.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
    origin: true,
};

app.get('/', (req, res) => {
    res.send("Api is working");
});

//dab
// mongoose.set('strictQuery',false)
// const connectDB = async() =>{
//     try{
//         await mongoose.connect(process.env.MONGO_URL,{
//             useNewUrlParser : true,
//             useUnifiedTopology:true,
//         });
//         console.log('MongoDb database is connected')
//     }catch (err){
//         console.log('mongoDB database connection failed')
//     }
// }

mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('MongoDB database is connected');
    } catch (err) {
        console.error('MongoDB database connection failed:', err);
    }
}


//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth',authRoute);//its domain api /v1/register we will use it later
app.use('/api/v1/users',userRoute);
app.use('/api/v1/doctors', doctorRoute);
app.use('/api/v1/reviews', reviewRoute);

app.listen(port, () => {
    connectDB();
    console.log("server is running on port " + port);
});
