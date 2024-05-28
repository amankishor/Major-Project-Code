import Review from "../models/ReviewSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const getAllReviews = async(req,res) =>{

    try{
        const reviews = await Review.find({});

        res.status(200).json({success:true , message:"successful" , data: reviews});

    } catch(err){
        res.status(404).json({success:false , message:"Not found"});
    }
};

//create review

export const createReview = async(req,res) =>{

    if(!req.body.doctor) req.body.doctor = req.params.doctorId;
    if(!req.body.user) req.body.user = req.userId;

    const newReview = new Review(req.body);

    try{
        const savedReview = await newReview.save();

        await Doctor.findByIdAndUpdate(req.body.doctor , {
            $push:{reviews: savedReview._id}
        });

        res
            .status(200)
            .json({success:true , message:"Review submitted", data: savedReview});

    }catch(err){
        res.status(500).json({success: false , message: err.message});

    }
};

// import Review from "../models/ReviewSchema.js";
// import Doctor from "../models/DoctorSchema.js";

// export const getAllReviews = async (req, res) => {
//     try {
//         const reviews = await Review.find({});
//         res.status(200).json({ success: true, message: "successful", data: reviews });
//     } catch (err) {
//         res.status(500).json({ success: false, message: err.message });
//     }
// };

// // Create review
// export const createReview = async (req, res) => {
//     try {
//         // Check if user is authenticated
//         if (!req.userId) {
//             return res.status(401).json({ success: false, message: "Unauthorized - Invalid token" });
//         }

//         // Assign doctor and user IDs
//         const doctorId = req.params.doctorId;
//         const userId = req.userId;

//         // Check if doctorId and userId are provided
//         if (!doctorId || !userId) {
//             return res.status(400).json({ success: false, message: "Doctor ID or User ID not provided" });
//         }

//         // Create new review
//         const newReview = new Review({
//             ...req.body,
//             doctor: doctorId,
//             user: userId
//         });

//         // Save review
//         const savedReview = await newReview.save();

//         // Update doctor's reviews
//         await Doctor.findByIdAndUpdate(doctorId, { $push: { reviews: savedReview._id } });

//         res.status(201).json({ success: true, message: "Review submitted", data: savedReview });
//     } catch (err) {
//         res.status(500).json({ success: false, message: err.message });
//     }
// };
