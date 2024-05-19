import { mongooseConfig } from "./confing/db.config.js";
import grpc from "@grpc/grpc-js"
import protoLoader from "@grpc/proto-loader"
import path from "path"
import { listProduct , createProduct , deleteProduct , updateProduct , getProduct } from "./functions/product.function.js";
mongooseConfig()
const protoPath = path.join(process.cwd(),'..','..','protos','product.proto')
const productProto = protoLoader.loadSync(protoPath, {})
const {productPackage} = grpc.loadPackageDefinition(productProto)
const productServiceUrl = process.env.GRPC_URI
const server = new grpc.Server()
server.addService(productPackage.ProductService.service,{
    listProduct, 
    createProduct,
    deleteProduct,
    updateProduct, 
    getProduct
})

server.bindAsync(productServiceUrl,grpc.ServerCredentials.createInsecure(), (error, port) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log(`Server running at ${productServiceUrl}`);

});
