// const admin = require('../helper/firebase');
// const db= admin.firestore();
// const userCollection = db.collection('users');
// const itemCollection = db.collection('item');
// const orderCollection = db.collection('order');

// const creation = async(email,pswd)=>{  


    
//     const collection = db.collection('item');
//     const doc = await collection.doc(email);
//     doc.create({
//         email: email,
//         password: pswd
//     }).catch((err)=>{
//         console.log(err);
//     })
// }


// const updation = async(collection,id,data)=>{
//     const doc = db.collection(collection).doc(id).update(data);
//     console.log(doc);
//     return doc;
// }

// const deletion = async(docId)=>{
//     const collection = db.collection('users');
//     const doc = await collection.doc(docId);
//     await doc.delete();
//     return;
// }

// const read = async (collection,id,data)=>{
//     const doc = await db.collection(collection).doc(id).get(data);
//     console.log(doc);

// }

// module.exports = {creation,updation,deletion,read};

