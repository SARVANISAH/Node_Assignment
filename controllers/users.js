const { async } = require('@firebase/util');
const {creationUser,updationUser,deletionUser,readUser,getUser} = require('../helper/userData');
const db = require('firebase-admin').firestore();
const jwt = require('jsonwebtoken');

const createUser = async(req,res)=>{
   try { 
        // await creationUser('aditi@gmail.com', '1234');
        await creationUser(req.body.email,req.body.password);
        console.log('User created');
        console.log('Posted data');
        res.json({msg: "created"});
    }catch(error){
        res.send(error.message)
    }
}

const login = (req,res)=>{
    {
        const user={
            email: "devang@gmail.com"
        }
    

        jwt.sign({user:user},'secretkey',(error,token)=>{
            res.json({
                token
            })
        })
    }   
}


const updateUser = async(req,res)=>{
    try { 
        console.log(req.params.id)
         await updationUser('users', req.params.id,req.body);
         console.log('User updated');
        //  console.log('Posted data');
         res.json({msg: "updated"});
     }catch(error){
         res.send(error.message)
     }
 }

const deleteUser = async(req,res)=>{
    try{
       const doc= await getUser(req.params.id);
       console.log(req.body.id);
       if(doc.exists){
        
        console.log('user info deleted')
        res.json({msg: "deleted"});
       }
       else{
        res.send("user not found")
       }
        
    }
    catch(error)
    {
        console.log(error.message)
    }
    console.log('Deleted')

}

const readingUser = async(req, res)=>{
    try{
        //console.log(req.params.id)
        const pswd = await readUser(req.body.email);
        console.log(pswd);
        res.json({"msg": pswd});
    }catch(err){
        console.log(err + " hurrah ");
    }
}

module.exports = {createUser,updateUser,deleteUser, readingUser,login}