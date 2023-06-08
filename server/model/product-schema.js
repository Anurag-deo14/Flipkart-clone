import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    // making schema unique so that data repetition may not occur
    id: {
        type: String,
        required: true,
        unique: true
    },
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});


const products = mongoose.model('product', productSchema);

export default products;