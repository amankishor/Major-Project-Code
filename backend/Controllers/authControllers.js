// import User from '../models/UserSchema.js';
// import Doctor from '../models/DoctorSchema.js';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt'


// export const register = async(req,res)=> {
//     const {email , password ,name , role , photo , gender} = req.body

//     try{
//         let user = null;
//         if (role === 'patient'){
//             user = await User.findOne({email});
//         }
//         else if(role === 'doctor'){
//             user = await Doctor.findOne({email});
//         }

//         //check if user exist or not
//         if(user){
//             return res.status(400).json({message:'user already exist'})

//         }

//         //hash password
//         const salt = await bcrypt.genSalt(10)
//         const hashPassword = await bcrypt.hash(password,salt)

//         if(role === 'patient'){
//             user =  new User({
//                 name,
//                 email,
//                 password:hashPassword,
//                 photo,
//                 gender,
//                 role
//             })
//         }

//         if(role === 'doctor'){
//             user = new Doctor({
//                 name,
//                 email,
//                 password:hashPassword,
//                 photo,
//                 gender,
//                 role
//             })
//         }

//         await user.save()
//         res.status(200).json({success:true ,message:'User Successfully created'})

//     }catch(err){
//         res.status(500).json({success:false ,message:'internal server error,try again'})
//     }
// };

// export const login = async(req,res)=> {
//     try{
//     }catch(err){}
// };

import User from '../models/UserSchema.js';
import Doctor from '../models/DoctorSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


const generateToken = user =>{
    return jwt.sign({id:user._id , role:user.role}, process.env.JWT_SECRET_KEY ,
        {
        expiresIn:'15d',
    });
}

export const register = async (req, res) => {
    const { email, password, name, role, photo, gender } = req.body;

    try {
        let user = null;
        // Use the same field for finding both patient and doctor
        user = role === 'patient' ? await User.findOne({ email }) : await Doctor.findOne({ email });
        // Check if user exists
        if (user) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        // Create a new user based on the role
        if (role === 'patient' || role === 'doctor') {
            user = new (role === 'patient' ? User : Doctor)({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role,
            });
        } else {
            // Handle unknown roles (optional)
            return res.status(400).json({ success: false, message: 'Invalid role specified' });
        }
        await user.save();
        res.status(200).json({ success: true, message: 'User successfully created' });
        
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).json({ success: false, message: 'Internal server error, try again' });
    }
};


export const login = async (req, res) => {
    const {email} = req.body;
    try {
        let user = null;
        const patient = await User.findOne({email});
        const doctor = await Doctor.findOne({email});
        if (patient) {
            user = patient;
        }
        if (doctor) {
            user = doctor;
        }

        // Check if user exists or not
        if (!user) {
            return res.status(404).json({message: "User not found!"});
        }

        // Compare password
        const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({status: false, message: "Invalid password"});
        }

        // Get token
        const token = generateToken(user);

        const {password, role, appointments, ...rest} = user._doc;

        res.status(200).json({status: true, message: "Successfully logged in", token, data: {...rest}, role});
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).json({ success: false, message: 'Failed to login' });
    }
};


// export const login = async (req, res) => {
//     const {email} = req.body
//     try {

//         let user = null 
//         const patient = await User.findOne({email})
//         const doctor = await Doctor.findOne({email})
//         if (patient){
//             user = patient
//         }
//         if(doctor){
//             user = doctor
//         }

//         //check if user exist or not

//         if(!user){
//             return res.status(404).json({message:"user not found !"});
//         }

//         //compare password

//         const isPasswordMatch = await bcrypt.compare(req.body.password , user.password)
//         if(!isPasswordMatch){
//             return res
//             .status(400)
//             .json({status:false , message:"invalid password"})
//         }

//         //get toke
//         const token  = generateToken(user);

//         const {password ,role ,appointments, ...rest} =user._doc

//         res
//         .status(400)
//         .json({status:true , message:"sucessfully login" , token , date:{...rest}, role})

//     } catch (err) {
//         console.error(err); // Log the error for debugging
//         res.status(500).json({ success: false, message: 'failed to login' });
//     }
// };
