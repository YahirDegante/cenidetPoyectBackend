//1. Crear modelo de la colección
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
});


//1.1 'Users' es como se exporta el modelo
module.exports = mongoose.model('Users', userSchema);