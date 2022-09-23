const admin = require('../helper/firebase');
const db= admin.firestore();
// const OrderCollection = db.collection('order');




const creationOrder = async(email,order)=>{  
    const collection = db.collection('order');
    const doc = await collection.doc(email);
    doc.create({
        email: email,
       order: order
    }).catch((err)=>{
        console.log(err);
    })
}


const updationOrder = async(collection,id,data)=>{
    const doc = db.collection(collection).doc(id).update(data);
    console.log(doc);
    return doc;
}

const deletionOrder = async(docId)=>{
    const collection = db.collection('Order');
    const doc = await collection.doc(docId);
    await doc.delete();
    return;
}

const readOrder = async (collection,id,data)=>{
    const doc = await db.collection(collection).doc(id).get(data);
    console.log(doc);

}

module.exports = {creationOrder,updationOrder,deletionOrder,readOrder};