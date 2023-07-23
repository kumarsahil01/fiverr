import Order from "../Models/order.model.js";
import Gig from "../Models/gig.model.js";
import Stripe from 'stripe';

export const Intent=async(req,res,next)=>{
  // const stripe =new Stripe(process.env.StripeApi);
  const gig = await Gig.findById(req.params.id);
  

  try{
    const newOrder = new Order({
      gigId: gig._id,
      img: gig.cover,
      title: gig.title,
      buyerId: req.userId,
      sellerId: gig.userId,
      price: gig.price,
      payment_intent: "temporary",
    });
  
    await newOrder.save();
  
    res.status(200).send('success')

  }catch{
    res.status(400).send('faliure')
  }

}


export const getOrders = async (req, res, next) => {
    try {
      const orders = await Order.find({
        ...( { sellerId: req.userId } || { buyerId: req.userId }),
        isCompleted: true,
      });
  
      res.status(200).send(orders);
    } catch (err) {
      next(err);
    }
  };
  
