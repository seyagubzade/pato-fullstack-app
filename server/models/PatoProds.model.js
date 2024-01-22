// PatoProds
const mongoose = require('mongoose');

const PatoProds = mongoose.model('PatoProds', new mongoose.Schema({
    name: String,
    desc: String,
    price: Number,
    image: String
}));

module.exports={PatoProds}