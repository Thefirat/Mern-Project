import mongoose from "mongoose";

//For Create Table into DataBase for Category.
const CategorySchema = new mongoose.Schema(
     {
        name: {type: String, required: true}
     },
     {
        timestamps: true //for date
     }
);

const Category = mongoose.model("Category", CategorySchema);
export default Category;
