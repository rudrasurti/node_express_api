import express, { Router } from 'express';

//import category schema from schema file.
import category from '../Schema/category.js';

//crate router for prouduct
const router = express.Router();

//get all category from mongoDb
router.get('/readAll', async (req, res) => {
   var categoryFind =   await category.find({})
    res.send(categoryFind);
});

router.get('/read/:id', async (req, res) => {
    const id = req.params.id
    var categoryFind =   await category.findById(id)
     res.send(categoryFind);
 });

//update category by id

router.put('/update/:id',async (req,res)=>{
    const updatCcategoryId = req.params.id
    const categoryId = await category.findByIdAndUpdate(id, {
        ...req.body
    })
    res.send(updatCcategoryId);
});

//create category 
router.post('/create/',async (req, res) => {

    await category.create({
        ...req.body
    })

    res.send(200)
  
});


//delete category by id
router.delete('/delete/:id',async (req,res)=>{

    const id = req.params.id;
    const  categoryDelete = await category.findByIdAndDelete(id, {
        ...req.body
    })
    res.send(categoryDelete)

});


export default router;
