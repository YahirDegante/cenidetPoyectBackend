const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const researchLineSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    }
},
{
    versionKey: false,
}
);

module.exports = mongoose.model('ResearchLine', researchLineSchema);
