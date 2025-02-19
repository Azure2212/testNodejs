const mongoose = require("mongoose");
const articleSchema = new mongoose.Schema({
    ID: {type: String, required: true},
    serial: {type: String, required: true},
    title: {type: String, required: true},
    type: {type: String, required: false},
    content: {type: String, required: false},
    views: {type: Number, required: false},
    createdDate: {type: Date, default: null},
    updatedDate: {type: Date, default: null}
}, {versionKey: false})
const ArticleEntity = mongoose.model('Article', articleSchema, 'Article');
module.exports = {ArticleEntity};