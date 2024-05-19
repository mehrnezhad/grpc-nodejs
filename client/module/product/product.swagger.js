/**
 * @swagger
 *  tags:
 *      name: Product
 *      description: Product routes and modules
 */
/**
 * @swagger
 *   components:
 *      schemas:
 *          AddProduct:
 *              type: object
 *              required:
 *                  -   title
 *                  -   price
 *              properties:
 *                  title:
 *                      type: string
 *                  price: 
 *                      type: string
 *          UpdateProduct:
 *              type: object
 *              properties:
 *                  title: 
 *                      type: string
 *                  price:
 *                      type: string                      
 *  
 */
/**
 * @swagger
 *  /product/get/{id}:
 *      get:
 *          tags:
 *              -   Product
 *          summary: get product
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  type: string
 *                  required: true 
 *          responses:
 *              200:
 *                  description: succeess
 *                             
 */
/**
 * @swagger
 *  /product/create:
 *      post:
 *          tags:
 *              -   Product
 *          summary: add product
 *          requestBody:
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: "#/components/schemas/AddProduct"
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/AddProduct"
 *          responses:
 *              200:
 *                  description: success                                      
 */
/**
 * @swagger
 *  /product/update/{id}:
 *      patch:
 *          tags:
 *              -   Product
 *          summary: update product
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  type: string
 *                  required: true                  
 *          requestBody:
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: "#/components/schemas/UpdateProduct"
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/UpdateProduct"
 *          responses:
 *              200:
 *                  description: success                                      
 */
/**
 * @swagger
 *  /product/delete/{id}:
 *      delete:
 *          tags:
 *              -   Product
 *          summary: delete product
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  type: string
 *                  required: true 
 *          responses:
 *              200:
 *                  description: success                         
 */