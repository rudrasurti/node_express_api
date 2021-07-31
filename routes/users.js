import express, { Router } from 'express';


const router = express.Router();

const users = [

    {
        "fristName": "Jhon",
        "lastName": "Deo",
        "age": 25
    },
    {
        "fristName": "Jhon",
        "lastName": "Deo",
        "age": 25
    }

]

router.get('/', (req, res) => {
    res.send(users);
});


router.put('',(req,res)=>{

});


router.post('/', (req, res) => {

   const user = req.body;
    console.log(req.body);
    users.push(user);
    res.send(`user with the name ${user.fristName}added to the database!`);

});

router.delete('/',(req,res)=>{


});


export default router;
