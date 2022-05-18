const ProductController = require("../controllers/ProductController");

module.exports = app => {
  // restful routing makes use of same url when possible (works because they have different methods)
//get all products
  app.get("/api/products", ProductController.findAllProducts);
  //CREATE product
  app.post("/api/products", ProductController.createNewProduct);
  //get one product
  app.get("/api/products/:product_id", ProductController.findOneProduct);
  //update one product
  app.put("/api/products/:product_id", ProductController.updateProduct);
  //delete one product
  app.delete("/api/products/:product_id", ProductController.deleteProduct);

};