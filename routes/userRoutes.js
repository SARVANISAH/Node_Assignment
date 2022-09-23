const express = require ('express');
const router = express.Router();
const {readingUser,createUser,updateUser,deleteUser,login} = require('../controllers/users');

const {tokenVerify}= require('../middleware/tokenverification');

router.get('/', (req, res)=>{
    res.send('users page');
})
router.post('/createUser',createUser);
router.post('/login', login);
router.post('/updateUser/:id',tokenVerify,updateUser);
router.delete('/deleteUser/:id',tokenVerify, deleteUser);
router.get('/readUser', readingUser);

module.exports = router;