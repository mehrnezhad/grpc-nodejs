import autoBind from "auto-bind"
import grpc from "@grpc/grpc-js"
import protoLoader from "@grpc/proto-loader"
import path from "path"
import { config } from "dotenv"
import { listProduct, createProduct, getProduct, deleteProduct } from "../../../services/product/functions/product.function.js"
config()
class ProductController {
    #productClient
    constructor() {

        autoBind(this)
        const protoPath = path.join(process.cwd(), '..', 'protos', 'product.proto')
        const productProto = protoLoader.loadSync(protoPath, {})
        const { productPackage } = grpc.loadPackageDefinition(productProto)
        const productServiceUrl = process.env.GRPC_URI
        this.#productClient = new productPackage.ProductService(productServiceUrl, grpc.credentials.createInsecure())
    }

    async list(req, res, next) {

        try {
            this.#productClient.listProduct(null, (err, data) => {
                if (err) return res.json(err)
                return res.json(data)
            })
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {

        try {
            const { title, price } = req.body
            this.#productClient.createProduct({ title, price }, (err, data) => {
                if (err) return res.json(err)
                return res.json(data)
            })

        } catch (error) {
            next(error)
        }
    }


    async update(req, res, next) {
        try {
            const { title, price } = req.body
            const { id } = req.params
            this.#productClient.updateProduct({...req.params , ...req.body}, (err, data) => {
                if (err) return res.json(err)
                return res.json(data)
            })
        } catch (error) {
            next(error)
        }
    }

    async get(req, res, next) {
        try {
            const { id } = req.params
            this.#productClient.getProduct({ id }, (err, data) => {
                if (err) return res.json(err)
                return res.json(data)
            })
        } catch (error) {
            next(error)
        }
    }


    async delete(req, res, next) {
        try {
            const { id } = req.params
            this.#productClient.deleteProduct({ id }, (err, data) => {
                if (err) return res.json(err)
                return res.json(data)
            })
        } catch (error) {
            next(error)
        }
    }
}
export const productController = new ProductController()