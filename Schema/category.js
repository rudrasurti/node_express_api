import mongoose from "mongoose";


//crate Category model(Schema)

const categorySchema = mongoose.Schema({


    categoryId : mongoose.Schema.Types.ObjectId,		// Category ID
    categoryName : String,		// Category Name

    
 });

 export default mongoose.model("Category", categorySchema, "Category");