
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controler/404');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routs/admin');
const shopRoutes = require('./routs/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.pagenotfoundcontroler);

app.listen(5000);






