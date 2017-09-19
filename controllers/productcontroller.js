const Product = require('../models/product')();

function getProducts(req, res) {
  Product.find({},(err, products) => {
    if (err) { return res.status(500).send( {message: `error en la solicitud del producto ${err}`} ) }
    if (!products){return res.status(404).send( {message: `El producto no existe`} )}

    res.status(200).send({ products });
  });
}

function getProduct(req, res){
  let productId = req.params.productId;

  Product.findById(productId, (err, product)=>{
    if (err){return res.status(500).send( {message: `error en la solicitud del producto ${err}`} ) }
    if (!product){return res.status(404).send( {message: `El producto no existe`} )}

    res.status(200).send( { product } ); //product : product
  });
}

function saveProduct(req, res) {
  console.log(req.body);
  let product = new Product();
  product.name = req.body.name;
  product.picture = req.body.picture;
  product.price = req.body.price;
  product.category= req.body.category;
  product.description = req.description;

  product.save((err, productStored)=>{
    if (err){ return res.status(500).send({message:`Error al guardar en la base de datos: ${err}`})}

    res.status(200).send({product: productStored});
  });
}

function updateProduct(req, res){
  let productId = req.params.productId;
  let toUpdate = req.body;
  Product.findByIdAndUpdate(productId,toUpdate, (err, updated) => {
    if(err){res.status(500).send( {message: `Error al acctualizar los datos ${err}`} ) }

    res.status(200).send({message: `Se actualizo los datos ${updated}`});
  });
}

function deleteProduct(req, res) {
  let productId = req.params.productId;
  Product.findById(productId, (err, producToRemove) => {
    if (err) { res.status(500).send( {message: `Error al borrar el producto ${err}`} )}

    producToRemove.remove((err) => {
      if (err) { res.status(500).send( {message: `Error al eliminar el producto: ${err}`} )}
      res.status(200).send( { message:`Producto Eliminado`});
  });
  });
}

module.exports = {
    getProduct,
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct
}
