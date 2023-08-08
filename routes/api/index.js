const router = require("express").Router();
const categoryRoutes = require("./category-routes");
const productRoutes = require("./product-routes");
const tagRoutes = require("./tag-routes");

router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/tags", tagRoutes);

module.exports = router;

//npm run seed
//npm start

///http://localhost:3001/api/categories  get all categories
//http://localhost:3001/api/products  get all products
//http://localhost:3001/api/tags   get tags
//http://localhost:3001/api/categories/1   get categories by id

//create category
//http://localhost:3001/api/categories   with GET to show there are no categories with id 6
//{"category_name": "Bags"}    enter in body
// http://localhost:3001/api/categories change to POST and  change data type to JSON. it wil create a category at the bottom
//http://localhost:3001/api/categories/6  change to GET to show a new category
//{"category_name": "Watches"}    enter in body
//http://localhost:3001/api/categories/6    change to PUT to update category
//http://localhost:3001/api/categories/6  change to GET to show the update
//http://localhost:3001/api/categories/6 change to DELETE to delete
//http://localhost:3001/api/categories  to show all categories without the last one

// Create tag
//http://localhost:3001/api/tags   get tags
//  {"tag_name": "Yellow"}    add in body
//http://localhost:3001/api/tags  change to POST should create id automatically. Change data type to JSON
//http://localhost:3001/api/tags   change to GET to see a new tag. Should be last
//  {"tag_name": "Purple"}    change in body
//http://localhost:3001/api/tags/9   change to PUT  to update the value to purple. Change data type to JSON
//http://localhost:3001/api/tags/9   change to GET to show the value changed to purple
//http://localhost:3001/api/tags/9   change to DELETE
//http://localhost:3001/api/tags change to GET to show the last tag with id 9 deleted

//Create products
//http://localhost:3001/api/products   with GET to show all ids for products
//{ "product_name": "Swim suit",
//   "price": 24.99,
//   "stock": 15}  enter in body and change data type to JSON
//http://localhost:3001/api/products   change to POST to add a product
//http://localhost:3001/api/products  change to GET to see the new product at the bottom
//{ "product_name": "Swim trunks",
//   "price": 24.99,
//   "stock": 15}  enter in body
//http://localhost:3001/api/products/6  change to PUT to update the name of product
//http://localhost:3001/api/products/6  change to GET to see updates
//http://localhost:3001/api/products/6  change to DELETE to delete
//http://localhost:3001/api/products change to GET to show deleted product
