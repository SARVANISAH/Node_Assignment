const express = require ('express');
const router = express.Router();
const {createItem,updateItem,deleteItem} = require('../controllers/items');

router.get('/', (req, res)=>{
    res.send('items page');
})
router.post('/createItem',createItem);
router.delete('/deleteItem', deleteItem);
router.post('/updateItem',updateItem);

//just for understanding
router.get('/createitem', (req, res)=>{
    res.send('samjhaa');
})

module.exports = router;