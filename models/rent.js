const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const rentSchema = new Schema({
    category: {
        type: String,
        required: true
        },
    description: {
        type: String,
        required: true
    },
    image : {
        type : String
    },
    bedrooms : {
        type : Number,
        required : true
    },
    bathrooms : {
        type : Number,
        required : true
    },
    price : {
        type : Currency,
        required : true,
        min : 0
    },
    postcode : {
        type: Number,
        required : true
    },
    country : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required : true
    },
    street: {
        type : String,
        required : true
    }
},{
    timestamps: true
});

var Rents = mongoose.model('Rent', rentSchema);

module.exports = Rents;