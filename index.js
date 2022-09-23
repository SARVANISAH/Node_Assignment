const express = require('express');
const app = express();
const jwt = require('jsonwebtoken')

app.use(express.json());


// routes path
const userRoute = require('./routes/userRoutes');
const itemRoute = require('./routes/itemRoutes');
const orderRoute = require('./routes/orderRoutes');
const { createUser } = require('./controllers/users');


// 
app.use('/user',userRoute);
app.use('/item',itemRoute);
app.use('/order',orderRoute);

app.post('/login',(req,res)=>{
    const user={
        email: "devang@gmail.com"
    }

    jwt.sign({user:user},'secretkey',(error,token)=>{
        res.json({
            token
        })
    })
})

app.get('/', (req,res)=>{
    req.send("heyyy");
    console.log("hey")
})
app.get('/createUser', (req,res)=>{
    // req.send("heyyy");
    console.log("hey")
    console.log(createUser)
})

//understanding
// app.get('/item/testing', (req,res)=>{
//     res.send('woww');
// })


app.listen(5000,()=>{
    console.log('server is running on port 5000')
})