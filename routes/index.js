const express = require('express');
const router = express.Router();
const db = require('../config/database')
const Product = require('../models/products');

router.get('/get', async (req, res) => {
    try {
        const allData = await db.query('SELECT * FROM products');
        res.status(200);
        res.send(allData);
    } catch (err) {
        res.status(400).json({
            err: err.message
        })
    }
})

router.post('/post', async (req, res) => {
    try {

        await Product.create({
            productname: 'Huawei',
            manufactured: 'China',
            productcount: 3,
            price: 40000,
        })
        res.status(200);
        res.send('complite')
    } catch (err) {
        res.status(400).json({
            err: err.message
        })
    }
})

module.exports = router;