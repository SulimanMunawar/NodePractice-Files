const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/practice')
const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    madein: String,
    warrenty: String

})

const saveInDb = async() => {
    const ProductModal = mongoose.model('products', ProductSchema);
    let data = new ProductModal({ name: 'Renovo Pro 10 Ulra', price: 35.6, brand: "Renovo", warrenty: "6 Months", madein: "China" });
    let result = await data.save();
    console.log(result);
}

// saveInDb();

// const updateDb = async() => {
//     const Product = mongoose.model('products', ProductSchema);
//     let data = await Product.updateOne({ name: 'Renovo Pro 10 Lite' }, {
//         $set: { name: "Renovo 12 Pro Max" }
//     })
//     console.log(data, 'Record Updated')
// }

// updateDb();


// const deleteDb = async() => {
//     const Product = mongoose.model('products', ProductSchema);
//     let data = await Product.deleteOne({ name: "Renovo Pro 10 Ulra" })
//     console.log(data);
// }

// deleteDb();


// const findDb = async() => {
//     const Product = mongoose.model('products', ProductSchema)
//     const data = await Product.find({
//         brand: "Revo"
//     })
//     console.log(data);
// }
// findDb();