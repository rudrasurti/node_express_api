import express from 'express';
import bodyParser from 'body-parser';
import product from './Schema/product.js'
import category from './Schema/category.js'

//Database acess laibaray 
import mongoose from 'mongoose'

//routes for javascrpit file
import usersRoutes from  './routes/users.js';
import productRoutes from  './routes/prouct.js';
import categoryRoutes from  './routes/category.js';

//conect database to mongodb
mongoose.connect("mongodb://127.0.0.1:27017/mydb")

const app = express();
const PORT = 9000;


app.use(bodyParser.json());

// app.use('/users',usersRoutes);
app.use('/products',productRoutes);
app.use('/category',categoryRoutes)


app.get('/', (req, res) => {
    console.log('[TEST]!')

    res.send('Hello from home page.');
}

);

app.listen(PORT, () => console.log(`Server r uning port: http;//localhost${PORT}`));