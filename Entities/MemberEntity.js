const mongoose = require("mongoose");
const memberSchema = new mongoose.Schema({
    ID: {type: String, required: true},
    fullName: {type: String, required: true},
    imgPath: {type: String, required: true},
    phone: {type: String, required: false},
    gmail: {type: String, required: false},
    role: {type: String, required: false},
    isShow: {type: Boolean, required: false},
    createdDate: {type: Date, default: null},
    updatedDate: {type: Date, default: null},
    isExist: {type: Boolean, default: true}
}, {versionKey: false})
const MemberEntity = mongoose.model('Member', memberSchema, 'Member');
module.exports = {MemberEntity};