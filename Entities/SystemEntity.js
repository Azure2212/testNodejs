const mongoose = require("mongoose");
const systemSchema = new mongoose.Schema({
    ID: {type: String, required: true},
    name: {type: String, required: true},
    address: {type: String, required: true},
    phone: {type: String, required: false},
    gmail: {type: String, required: false},
    logoPath: {type: String, required: false},
    createdDate: {type: Date, default: null},
    updatedDate: {type: Date, default: null}
}, {versionKey: false})
const SystemEntity = mongoose.model('System', systemSchema, 'System');
module.exports = {SystemEntity};