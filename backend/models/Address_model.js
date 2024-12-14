import mongoose from "mongoose";

const address_model = new mongoose.Schema({
    address_line : {
        type : String,
    },
    city : {
        type : String,
        default : "" 
    },
    state : {
        type : String,
        default : "",
    },
    pincode : {
        type : String,
    },
    country : {
        type : String,
    },
    mobile : {
        type : Number,
        default :""
    },
},{
    timestamps : true
})

const AddressModel =  mongoose.Schema("Address",address_model)

export default AddressModel
