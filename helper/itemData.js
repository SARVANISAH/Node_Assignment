const admin = require('../helper/firebase');
const db= admin.firestore();
const itemCollection = db.collection('item');

const creationItem = async(fruit,fruitname)=>{  
    const collection = db.collection('item');
    const doc = await collection.doc(fruit);
    doc.create({
        fruit: fruit,
        fruitname: fruitname
    }).catch((err)=>{
        console.log(err);
    })
}


const updationItem = async(collection,id,data)=>{
    const doc = db.collection(collection).doc(id).update(data);
    console.log(doc);
    return doc;
}

// const deletionItem = async(docId)=>{
//     // const collection = db.collection('users');
//     const doc = await itemCollection.doc(docId).get();
//     if(doc){
//         await itemCollection.doc(docId).delete();
//         console.log('hogaya');
//     }
//     return;
// }

const deletionItem = async(docId)=>{
    // const collection = db.collection('item');
    const doc = await itemCollection.doc(docId);
    await doc.delete();
    return;
}

const readItem = async (collection,id,data)=>{
    const doc = await db.collection(collection).doc(id).get(data);
    console.log(doc);

}

module.exports = {creationItem,updationItem,deletionItem,readItem};