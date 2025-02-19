const crypto = require('crypto');

function generateUUID(code) {
    return code + crypto.randomBytes(16).toString('hex');
}

function getToDay() {
    return new Date();
}

function getCodeInUUID(UUID) {
    return UUID.substring(0, 3);
}

function getDateFromDatetime(dataTime) {
    return dataTime.toISOString().split('T')[0];
}

module.exports = {generateUUID, getToDay, getCodeInUUID, getDateFromDatetime}