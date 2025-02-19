const mongoose = require('mongoose');
const accountSchema = new mongoose.Schema({
    ID: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, required: true},
    createdDate: {type: Date, default: null},
    updatedDate: {type: Date, default: null}
}, {versionKey: false})
const AccountEntity = mongoose.model('Account', accountSchema, 'Account');
module.exports = {AccountEntity};