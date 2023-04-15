const mongoose = require('mongoose')

const pizzaSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        varients: [],
        sauces: [],
        cheeses: [],
        prices: [],
        sauces_prices: [],
        chees_prices: [],

        category: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

const pizzaModel = mongoose.model('pizza', pizzaSchema)
// collection name will be pizza

module.exports = pizzaModel;

