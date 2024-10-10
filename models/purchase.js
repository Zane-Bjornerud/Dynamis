const Joi = require('joi');
const mongoose = require('mongoose');
const moment = require('moment');
const { Item } = require('./item');

const purchaseSchema = new mongoose.Schema({
    customer: {
        type: new mongoose.Schema({

        }),
        required: true
    }, 
    item: {
        type: new mongoose.Schema({

        }),
        required: true
    },
    dateBought: {
        type: Date,
        required: true,
        default: Date.now
    },
    dateReturned: {
        type: Date
    },
    discount: {
        type: Number,
        min: 0
    },
    shippingFee: {
        type: Number,
        min: 0
    }
});

function validatePurchase(purchase) {
    const schema = Joi.object({
        customerId: Joid.objetId().required(),
        itemId: Joi.objectId().required()
    });

    return schema.validate(purchase);
}

exports.Purchase = Purchase;
exports.validate = validatePurchase;