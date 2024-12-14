import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required : [true , "Provide name"]
    },
    email:{
        type : String,
        required : [true , "Provide email"],
        unique : true
    },
    password:{
        type : String,
        required : [true , "Provide password"]
    },
    avatar:{
        type : String,
        default : ""
    },
    mobile : {
        type : Number,
        default : null
    },
    refrence_token : {
        type : String,
        default : ""
    },
    verify_email : {
        tyoe : Boolean,
        default : false
    },
    last_login_date : {
        type : Date,
        default : ""
    },
    status : {
        type : String,
        enum : ['Active','Innactive','Suspended'],
        default : "Active"
    },
    address_details : [
        {
            type:mongoose.Schema.ObjectId,
            ref : "address"
        }
    ],
    shopping_cart : [
        {
            type:mongoose.Schema.ObjectId,
            ref : "cartProduct"
        }
    ],
    Order_history : [
        {
            type:mongoose.Schema.ObjectId,
            ref : "Order"
        }
    ],
    Forgot_password_otp : {
        type :String,
        default : null
    },
    Forgot_password_expiry : {
        type :String,
        default : ""
    },
    role : {
        type : String,
        enum : ["ADMIN","USER"],
        default : "USER"
    }
},{
    timestamps : true
})

const userModel = mongoose.model("User",userSchema)

export default userModel;