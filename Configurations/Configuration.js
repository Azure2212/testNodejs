//require('dotenv').config({ path: '../my_test_webstorm/.env' });
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const config = {
    URL: process.env.URL || "",
    NAME_COMPANY: process.env.NAME_COMPANY || "",
    ADMIN_URL: process.env.ADMIN_URL || "",
    ENDUSER_URL: process.env.ENDUSER_URL || "",
    IMAGE_STORE_URL: process.env.IMAGE_STORE_URL || "",
    DB_URL: process.env.DB_URL || "mongodb://localhost:27017",
    PORT: process.env.PORT || 10000,
    EXPIRED_TIME: process.env.EXPIRED_TIME || "1m",
};
console.log(config)
module.exports = {config}
