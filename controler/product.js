
const Product = require('../module/product');

exports.getAddProduct = (req, res, next) => {
  //res.sendFile(path.join(__dirname,'../, 'wiews', 'add-product.html'));
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageurl = req.body.imageUrl;
  const description =  req.body.description;
  const price = req.body.price;
  const product = new Product(title, imageurl, description, price );
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();
  res.render('admin/products', {
    prods: products,
    pageTitle: 'Admin Products',
    path: '/admin/products'
  });
};


