import express from 'express'
const router =express.Router()
import  {getOrders,intent}  from '../controllers/order.controller.js'

import {verifyToken} from '../middleware/jwt.js'


router.get('/',verifyToken,  getOrders)
router.post("/:id",verifyToken, intent);
export default router