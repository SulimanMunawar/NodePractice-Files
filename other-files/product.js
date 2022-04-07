const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    warrenty: String,
    madein: String
})

module.exports = mongoose.model('products', ProductSchema)