const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});


router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/contact', (req, res) => {
  res.render('contact');
});


router.get('/services', (req, res) => {
  res.render('services');
});


router.get('/products', (req, res) => {
  res.render('products');
});

module.exports = router;
