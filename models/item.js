const Joi = require('joi');
const mongoose = require('mongoose');
const {genreSchema} = require('./genre');

const Item = mongoose.model('Items', new mongoose ({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 255
    },
    genre: {
        type: genreSchema,
        required: true
    },
    numberInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    purchasePrice: {
        type: Number,
        required: true,
        min: 0,
        max: 500
    }
}));

function validateItem(item) {
    const schema = Joi.object({
        title: Joi.string().min(5).max(50).required(),
        genredId: Joi.objectId().required(),
        numberInStock: Joi.number().min(0).required(),
        purchasePrice: Joi.number().min(0).required()
    });
}

exports.Item = Item;
exports.validate = validateItem;