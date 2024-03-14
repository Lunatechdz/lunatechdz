import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: {type : String , required : true},
  notes:[{type: mongoose.Schema.Types.ObjectId, ref:"Note" }]
});
 const User = mongoose.model("User", userSchema);

 export{User};
