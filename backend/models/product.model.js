const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    productname: {
        type: String,
        require: true
    },
    brand: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true,
    },
    meterial: {
        type: String,
        require: true
    },
    care: {
        type: String,
        require: true
    },
    color: {
        type: String,
        require: true
    },
    size: {
        type: Number,
        require: true
    },
    originalprice: {
        type: Number,
        require: true
    },
    totalprice: {
        type: Number,
        require: true
    },
    drycleanprice: {
        type: Number,
        require: true
    },
    leadprice: {
        type: Number,
        require: true
    },
    ownerprice: {
        type: Number,
        require: true
    }
});


module.exports = mongoose.model("Products",ProductSchema)
