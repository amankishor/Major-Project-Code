import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const updateUser =async(req,res)=>{
    const id = req.params.id

    try{

        const updateUser = await User.findByIdAndUpdate(id,{$set:req.body} ,{new:true})

        res.status(200).json({success:true , message:"sucessfully updated" ,  data:updateUser})

    }catch (err){
        res.status(500).json({sucess:false , message:"failed to update"})

    }
};

export const deleteUser =async(req,res)=>{
    const id = req.params.id

    try{
        await User.findByIdAndDelete
            (id);

        res
            .status(200)
            .json({
                success:true , 
                message:"sucessfully deleted" })

    }catch (err){
        res.status(500).json({sucess:false , message:"failed to delete" })

    }
};

export const getSingleUser =async(req,res)=>{
    const id = req.params.id

    try{
        const user = await User.findById(id);

        res.status(200).json({success:true , message:"user found" , data:user});

    }catch (err){
        res.status(404).json({sucess:false , message:"NO such user found" })
    }
};

export const getAllUser = async(req,res)=>{
    try{

        const users = await User.find({}).select("-password");//weuse select ("-password ") to exclude password from been visible 

        res.status(200).json({success:true , message:"users found" , data:users});

    }catch (err){
        res.status(404).json({sucess:false , message:"NO user found" });

    }
};


export const getUserProfile = async(req,res) =>{
    const userId = req.userId

    try{
        const user = await User.findById(userId)

        if(!user){
            return res.status(404).json({success:false , message:'user not found'})

        }
        const {password , ...rest} = user._doc

        res.status(200).json({success:true , message:"profile info is getting" , data:{...rest}})
    }catch(err){
        console.log(err,"")
        res.status(500).json({success:false , message: "something went wrong , cannot get"});
    }
};

export  const getMyAppointments = async(req,res) =>{
     try{

        //s1 : retrive the  appointmenr from the booking for specific user
        const bookings = await Booking.find({user:req.userId})
        //s2 extrct the doctor id  from the appointment
        const doctorIds = bookings.map(el=>el.doctor.id)
        //retrive docto using doctor ids
        const doctors = await Doctor.find({_id: {$in:doctorIds}}).select('-password')
        res.status(200).json({sucess:true ,message:"Appointment are getting ", data:doctors})

     }catch(err){
        res.status(500).json({success:false , message: "something went wrong , cannot get"});

     }
}