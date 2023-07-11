import express from 'express'
import  {getOrders,Intent}  from '../controllers/order.controller.js'
const router =express.Router()
import {verifyToken} from '../middleware/jwt.js'


router.get('/', verifyToken, getOrders)
router.post("/create-payment-intent/:id", verifyToken, Intent);
export default router