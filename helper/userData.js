const admin = require('../helper/firebase');
const db= admin.firestore();
// const UserCollection = db.collection('user');


const creationUser = async(email,pswd)=>{  
    const collection = db.collection('users');
    const doc = await collection.doc(email);
    doc.create({
        email: email,
        password: pswd
    }).catch((err)=>{
        console.log(err);
    })
}

// const updationUser = async(email,pswd)=>{  
//     const collection = db.collection('users');
//     const doc = await collection.doc(email);
//     doc.update({
//         email: email,
//         password: pswd
//     }).catch((err)=>{
//         console.log(err);
//     })
// }const


const updationUser = async(collection,id,data)=>{
    console.log(id)
    const doc = await db.collection(collection).doc(id).update(data)
    return doc;
}

const getUser = async(docId)=>{
    console.log(docId)
    const collection = db.collection('users');
    const doc = await collection.doc(docId).get();
    console.log(doc)

    if(doc.exists){
        await collection.doc(docId).delete();
    }
    else{
        res.send("user not found")
        // await collection.doc(docId).delete()
    }
    return doc
}

const readUser = async (id)=>{
    let data=""
    const doc = await db.collection('users').get().then((x)=>{
        x.forEach((element)=>{

            // if(element.data().email === id){
            //     console.log('====================================');
            //     console.log("agaya");
            //     console.log('====================================');
            //     data=element.data().password
            //     return data;
            // }
            console.log('====================================');
            console.log(element.data());
            console.log('====================================');
        })
    });
    return data
}

module.exports = {creationUser,updationUser,getUser,readUser};