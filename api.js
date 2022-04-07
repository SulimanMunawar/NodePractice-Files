const express = require('express');
const connect = require('./mongodb');
const mongodb = require('mongodb');

const app = express();
app.listen(5000);
app.use(express.json());

app.get('/', async(req, res) => {
    let db = await connect();
    let data = await db.find().toArray();
    // console.log(data);
    res.send(data);
})

app.post('/', async(req, res) => {
    let db = await connect();
    let result = await db.insertOne(req.body);
    res.send(result);
})

app.put('/', async(req, res) => {
    let db = await connect()
    let data = await db.updateOne({ name: 'Samsung S22' }, { $set: { name: req.body.name, brand: req.body.brand, warrenty: req.body.warrenty, price: req.body.price, madein: req.body.madein } })
    res.send(data)
})

app.delete('/:id', async(req, res) => {
    let db = await connect();
    let result = await db.deleteOne({ _id: new mongodb.ObjectId(req.params.id) })
    res.send(result)
})