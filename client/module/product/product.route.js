import { Router } from "express";
import { productController } from "./product.controller.js";
const router = Router()

router.get('/list',productController.list)
router.post('/create',productController.create)
router.get('/get/:id',productController.get)
router.delete('/delete/:id',productController.delete)
router.patch('/update/:id',productController.update)


export const productRouter = router