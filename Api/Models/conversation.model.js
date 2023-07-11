import mongoose from "mongoose";
const { Schema } = mongoose;

const ConversationSchema = new Schema({
   id:{
    type:String,
    requires:true,
    unique:true,
   },
   sellerId:{
    type:String,
    requires:true,
    unique:true,
   },
   buyerId:{
    type:String,
    requires:true,
    unique:true,
   },
   readBySeller:{
    type:Boolean,
    requires:true,
   },
   readByBuyer:{
    type:Boolean,
    required:true
   } ,
   lastMessage:{
    type:String,
    required:false,
   }
},{
    timestamps:true
});

export default mongoose.model("Conversation",ConversationSchema)
