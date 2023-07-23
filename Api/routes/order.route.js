import express from 'express'
const router =express.Router()
import  {getOrders,Intent}  from '../controllers/order.controller.js'

import {verifyToken} from '../middleware/jwt.js'


router.get('/', verifyToken, getOrders)
router.post("/:id", Intent);
export default router