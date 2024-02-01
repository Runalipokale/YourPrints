const Product = require('../models/product');

exports.getIndex = (req,res,next)=>{
    res.render('index', {
        path: '/',
        pageTitle: 'Home',
        prods:'products'
    });
};

exports.getLogin = (req,res,next)=>{
    res.render('login', {
        path: '/login',
        pageTitle: 'User Login'
    });
}

//product page 
// exports.getProduct=(req, res, next) => {
//     res.render('product',{
//     pageTitle:'All Products',
//     path:'/product'
// })
// };

//product-page
exports.getProducts = (req,res,next) =>{
  Product.findAll()
  .then(products => {
      res.render('product',{
        prods:products,
        path:'/product',
        pageTitle:'All Products' 
      })
  })
  .catch(err=>console.log(err))
}

//wishlist
exports.getwishlist = (req,res,next)=>{
     res.render('wishlist',{
        pageTitle:'shopping list',
        path:'/wishlist',
        // prods:products
 })
}

//postwishlist


exports.getContact=(req,res,next)=>{
    res.render('contact',{
        pageTitle:'contact us',
        path:'/contact'
    }) 
}