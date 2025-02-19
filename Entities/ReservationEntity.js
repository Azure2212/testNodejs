const mongoose = require("mongoose");
const reservationSchema = new mongoose.Schema({
    ID: {type: String, required: true},
    fullName: {type: String, required: true},
    content: {type: String, required: true},
    type: {type: String, required: true},
    status: {type: String, required: true},
    phone: {type: String, required: false},
    gmail: {type: String, required: false},
    address: {type: String, required: false},
    subject: {type: String, required: false},
    file: {type: String, required: false},
    consultDate: {type: String, required: false},
    createdDate: {type: Date, default: null},
    updatedDate: {type: Date, default: null},
    isExist: {type: Boolean, default: true}
}, {versionKey: false})
const ReservationEntity = mongoose.model('Reservation', reservationSchema, 'Reservation');
module.exports = {ReservationEntity};