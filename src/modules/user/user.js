//1. Crear modelo de la colección
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: {
        type: String,
        required: true,
        unique:true,
        trim:true
    },
    role: {
        type: String,
        required: true
    },
    names: {
        type: String,
        required: true
    },
    maternal_surname: {
        type: String,
        required: true
    },
    paternal_surname: {
        type: String,
        required: true
    },
    research_line: {
        type: String,
    },
    num_cvu: {
        type: String,
        required: true
    },
    personal_phone_number: {
        type: Number,
        required: true
    },
    office_phone_number: {
        type: Number,
        required: true
    },
    phone_extension: {
        type: Number,
        required: true
    },
    personal_email: {
        type: String,
        required: true
    },
    institutional_email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profile_img: {
        type: String,
    },
    status: {
        type: Number,
    }
},
{
    versionKey: false,
}
);



//1.1 'Users' es como se exporta el modelo
module.exports = mongoose.model('Users', userSchema);