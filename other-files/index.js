const express = require('express');
require('./config');
const Product = require('./product');


const app = express();


app.use(express.json());
app.listen(4300);
app.post('/create', async(req, res) => {
    let data = new Product(req.body)
    let result = await data.save();
    res.send(result);
})

app.get('/allProducts', async(req, res) => {
    let data = await Product.find();
    res.send(data);
})

app.delete('/delete/:id', async(req, res) => {
    let data = await Product.deleteOne(req.params)
    console.log(req.params);
    res.send(req.params)
})

app.put('/update/:id', async(req, res) => {
    let data = await Product.updateOne(req.params, { $set: req.body })
    res.send(data);
})