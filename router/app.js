// importing initial packages 
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

//importing database connection package
const sequelize = require('../utils/database')

//models
const User = require('../models/user');
const Product = require('../models/product');
const Cart = require('../models/cart');
const Wishlist = require('../models/wishlist');
const Order = require('../models/order');

const app = express();

// //controllers
const adminController = require('../controller/adminController');
const shopController = require('../controller/shopController');

//receving static files 
app.use(express.static('views'));
app.use(express.static('Public'));
app.use(express.static('Assets'));

//using ejs templating engine 
app.set('view engine','ejs');
app.set('views','views');

//importing admin and shop module
const adminRoutes = require('../router/admin');
const shopRoutes = require('../router/shop');

//passing body request 
app.use(bodyParser.urlencoded({extended:false}))

app.use(adminRoutes); // for use admin.js data in this module
app.use(shopRoutes); // for use shop.js data in this module

sequelize
.sync({force:true})
.then(result=>{
    console.log('database connected successfully!');
    app.listen(3000);
})
.catch(err=>console.log(err))



