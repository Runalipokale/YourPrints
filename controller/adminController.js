const Product = require('../models/product');

//show admin pannel
exports.getAdminPannel = (req,res,next)=>{
    //condition if user == admin then => show admin pannel else render index page
    res.render('admin',{
        path:'/admin/adminpannel',
        pageTitle:'Admin Pannel'
    })
}

//all products
exports.getAllProducts =(req,res,next)=>{
    Product.findAll()
    .then(products =>{
        res.render('adminproducts',{
            prods:products,
            path:'/admin/products',
            pageTitle:'All Products'
        })
    })
    .catch(err=> console.log(err))
}

//delete product


//update product

