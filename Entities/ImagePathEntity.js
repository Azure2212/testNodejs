const mongoose = require('mongoose');
const imagePathSchema = new mongoose.Schema({
    ID: {type: String, required: true},
    serial: {type: String, required: true},
    path: {type: String, required: true},
    idOwner: {type: String, required: true},
}, {versionKey: false})
const ImagePathEntity = mongoose.model('ImagePath', imagePathSchema, 'ImagePath');
module.exports = {ImagePathEntity};