const express = require('express');
const router = express.Router();
const {createOrder,updateOrder,deleteOrder,readOrder} = require('../controllers/orders');

router.get('/',(req,res)=>{
    res.send('orders page');
})

router.post('/createOrder',createOrder);
router.post('/updateOrder',updateOrder);
router.delete('/deleteOrder',deleteOrder);


module.exports = router;