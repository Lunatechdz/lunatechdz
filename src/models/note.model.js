import mongoose, { Schema } from "mongoose";

const noteschema = new mongoose.Schema({
    title :{type : String, required:true},
    content:{type:String, required:true},
    category:{type : String,default:"" },
    status : {type : Boolean, default:false },
    creationDate: {type : Date, required:true},
    userId:{type:Schema.Types.ObjectId,ref:'User'}
});

const Note = mongoose.model("Note" , noteschema);

export {Note};