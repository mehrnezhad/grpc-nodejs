import { model, Schema } from "mongoose";

const productSchema = new Schema({
    id: { type: Number },
    title: { type: String },
    price: { type: String }
});

productSchema.pre("save", async function (next) {
    try {
        console.log('Pre-save hook triggered for product:', this);
        const count = await this.constructor.countDocuments();
        console.log(`Current document count is ${count}`);
        this.set({ id: (count + 1) });
        next();
    } catch (err) {
        console.error('Error in pre-save hook:', err);
        next(err);
    }
});

export const productModel = model("Product", productSchema);
