import { productModel } from "../model/product.model.js";

export async function listProduct(call, callback) {
    try {
        const products = await productModel.find({});
        callback(null, { products })
    } catch (error) {
        callback(error, null)

    }
}
export async function createProduct(call, callback) {
    try {
        const { title, price } = call.request
        await productModel.create({
            title,
            price
        })
        callback(null, { status: "created" })
    } catch (error) {
        callback(error, null)
    }
}
export async function getProduct(call, callback) { 
    try {
        const {id} = call.request
        const product = await productModel.findOne({id})
        callback(null, product)
    } catch (error) {
        callback(error, null)
    }
}
export async function updateProduct(call, callback) {
    try {
       const {id} = call.request
       const data = call.request
      delete data.id
        console.log(data)
        
        const result = await productModel.updateOne({id},{$set: data})

    
        callback(null, {status: 'update successfully'})
    } catch (error) {
        callback(error, null)
    }

}
export async function deleteProduct(call, callback) {
    try {
        const {id} = call.request
        const result = await productModel.deleteOne({id})
        if(result.deletedCount>0)  callback(null, {status: 'deleted successfully'})
        callback({message : 'delete failed! '}, null)

    } catch (error) {
        callback(error, null)
    }
 }