let mongoose = require('mongoose');

let ProductSchema = new mongoose.Schema({
    sku: Number,
    title: String,
    maker: String,
    description: String,
    msrp: Number,
    price: Number,
    image: String,
    updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', ProductSchema);