import { Schema, model, models } from "mongoose";

export interface ICategory {
    _id: string
    name: string
}

const CategorySchema = new Schema({
    name: { type: String, required: true, unique: true },

})

const Category = models.category || model('Category', CategorySchema);

export default Category;