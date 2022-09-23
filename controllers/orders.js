const {creationOrder, updationOrder,deletionOrder,readOrder} = require('../helper/orderData');
const jwt = require('jsonwebtoken');

const createOrder = async(req,res)=>{
    try{
        await creationOrder(req.body.email,req.body.order);
        console.log('order placed');
        res.json({
            msg : "order placed"
        });
    }catch(error){
        res.send(error.message)
    }
}

const updateOrder = async(req,res)=>{
    try{
        console.log(req.params.id)
        await updationOrder('orders',req.params.id,req.body);
        console.log('order updated');
        res.json({
            msg:" order updated"
        });
    }catch(error){
        res.send(error.message)
    }
}

const deleteOrder = async(req,res)=>{
    try{
        const doc = await getOrder(req.params.id);
        console.log(req.body.id);
        if(doc.exists){
            res.json({
                msg: "deleted"
            });
        }
        else{
            res.send("order not found")
        }
    }
    catch(error)
    {
        console.log(error.message)
    }
    console.log('deleted')
}

module.exports = {
    createOrder,updateOrder,deleteOrder
}


