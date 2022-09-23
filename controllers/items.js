//const { async } = require('@firebase/util');
const {creationItem,updationItem,deletionItem,readItem} = require('../helper/itemData');
//const db = require('firebase-admin').firestore();

const createItem = async(req,res)=>{
   try {
        await creationItem(req.body.fruit, req.body.fruitname);
        console.log('Item created');
        console.log('Posted data');
        res.json({msg: "created"});
    }catch(error){
        res.send(error.message)
    }
}

const updateItem = async(req,res)=>{
  try {await updationItem('item',req.params.id,req.body)
    console.log('Item info updated')}
    catch(error){
        console.log(error.message)
    }

}

const deleteItem = async(req,res)=>{
    try{
        await deletionItem('fruit4');
        console.log('item info deleted')
        res.json({msg: "deleted"});
    }
    catch(error)
    {
        console.log(error.message)
    }
    console.log('Deleted')

}

// const getUser  = async(collection,id,data)

module.exports = {createItem,updateItem,deleteItem}