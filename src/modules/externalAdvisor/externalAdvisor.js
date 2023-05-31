//1. Crear modelo de la colección
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const externalAdvisorSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim:true,
        unique:true,
    }
},
{
    versionKey: false,
}
);

module.exports = mongoose.model('ExternalAdvisor', externalAdvisorSchema);