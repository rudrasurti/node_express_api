import mongoose from "mongoose";

//crate model(Schema)

const prouctSchema = mongoose.Schema({
    
    // productId : mongoose.Schema.Types.ObjectId,  // Product ID
    productName : String,		// Product Name
    qtyPerUnit : Number,		// Quantity of the Product
    unitPrice : Number,			// Unit Price of the Product
    unitInStock : Number,		// Unit in Stock
    discontinued :  Boolean,		// Boolean (yes/no)
   
   // Category ID for Category ID
    
   categoryId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },		
    
 });

 export default mongoose.model("Prouduct", prouctSchema, "Prouducts");