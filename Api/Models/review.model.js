import mongoose from "mongoose";
const { Schema } = mongoose;

const ReviewSchema = new Schema({
   gigId:{
    type:String,
    requires:true,
   },
   userId:{
    type:String,
    requires:true,
   },
   star:{
    type:Number,
    requires:true,
    enum:[1,2,3,4,5],
   },
   desc:{
    type:String,
    requires:true,
   },
   
   
},{
    timestamps:true
});

export default mongoose.model("Review",ReviewSchema)
