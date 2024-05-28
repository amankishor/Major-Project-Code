import jwt from 'jsonwebtoken'
import Doctor from '../models/DoctorSchema.js'
import User from '../models/UserSchema.js'



export const authenticate = async (req, res, next) => {

    const authToken = req.headers.authorization ;

    if (!authToken || !authToken.startsWith("Bearer ")) {
        return res
            .status(401)
            .json({ success: false, message: "No token, authorization denied" });
    }

    try {
       // console.log(authToken); here we have used to check the token is been displaying or not
       const token = authToken.split(" ")[1];

       //verify the token
       const decoded = jwt.verify(token , process.env.JWT_SECRET_KEY)

       req.userId = decoded.id
       req.role = decoded.role

        next();
    } catch (err) {
        if(err.name === 'TokenExpiredError'){
            return res.status(401).json({message:'Token is expired'})
        }

        return res.status(401).json({success:false, message:"invalid token"})
        console.log(err)
    }
};

export const restrict = roles => async (req, res, next) => {
    const userId = req.userId;

    try {
        let user;

        const patient = await User.findById(userId);
        const doctor = await Doctor.findById(userId);

        if (patient) {
            user = patient;
        } else if (doctor) {
            user = doctor;
        } else {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        if (!roles.includes(user.role)) {
            return res.status(401).json({ success: false, message: "You are not authorized" });
        }

        req.user = user; // Attach user object to request for further use if needed
        next();
        
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

// export const authenticate = async(req,res,next)=>{

//     const authToken = req.headers.authorization;

//     if(!authToken || !authToken.startWith("Bearer")){
//         return res
//         .status(401)
//         .json({sucess:false , message:"No token,autherization denied"})
//     }

//     try{
//         console.log(authToken);
//         next();
//     }catch(err){

//     }
// };

// export const restrict = roles => async(req,res,next) => {
//     const userId = req.userId

//     let user ;

//     const patient = await User.findById(userId);
//     const doctor = await Doctor.findById(userId);

//     if (patient){
//         user = patient;
//     }
//     if (doctor){
//         user = doctor;
//     }
//     if(!removeEventListener.includes(user.role)){
//         return res
//         .status(401)
//         .json({success:false,message:"you are not authorized"})
//     }
//     next();
// };

//                  -----*-----
// import jwt from 'jsonwebtoken';
// import Doctor from '../models/DoctorSchema.js';
// import User from '../models/UserSchema.js';

// export const authenticate = async (req, res, next) => {
//     const authToken = req.headers.authorization;

//     if (!authToken || !authToken.startsWith('Bearer')) {
//         return res.status(401).json({ success: false, message: "No token, authorization denied" });
//     }

//     try {
//         const token = authToken.split(' ')[1];
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
//         // Check if the decoded token contains the user or doctor ID
//         if (decoded.type === 'user') {
//             const user = await User.findById(decoded.id);
//             if (!user) {
//                 throw new Error("User not found");
//             }
//             req.user = user;
//         } else if (decoded.type === 'doctor') {
//             const doctor = await Doctor.findById(decoded.id);
//             if (!doctor) {
//                 throw new Error("Doctor not found");
//             }
//             req.doctor = doctor;
//         } else {
//             throw new Error("Invalid token type");
//         }

//         next();
//     } catch (err) {
//         return res.status(401).json({ success: false, message: "Invalid token" });
//     }
// };
