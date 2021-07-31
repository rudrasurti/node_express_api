import express, { Router } from 'express';
import product from '../Schema/product.js';

//crate router for prouduct
const router = express.Router();


router.get('/readAll', async (req, res) => {
   var products =   await product.find({})
    res.send(products);
});

router.get('/read/:id', async (req, res) => {
    const id = req.params.id
    var p =   await product.findById(id)
     res.send(p);
 });


router.put('/update/:id',async (req,res)=>{
    const id = req.params.id
    const p = await product.findByIdAndUpdate(id, {
        ...req.body
    })
    res.send(p);
});


router.post('/create',async (req, res) => {

    await product.create({
        ...req.body
    })

    res.send(200)
  
});

router.delete('/delete/:id',async (req,res)=>{

    const id = req.params.id
    const p = await product.findByIdAndDelete(id, {
        ...req.body
    })
    res.send(p)


});


export default router;
