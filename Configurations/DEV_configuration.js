require('dotenv').config();

// const config = {
//     URL: "",
//     ADMIN_URL: "",
//     END_USER_URL: "",
//     IMAGE_STORE_URL: "",
//     DB_URL: "localhost:27017",
//     PORT: 10000
// };

// Load environment variables from the .env file
require('dotenv').config();

// Define the config object and map environment variables
const config = {
    URL: process.env.URL || "",
    ADMIN_URL: process.env.ADMIN_URL || "",
    ENDUSER_URL: process.env.ENDUSER_URL || "",
    IMAGE_STORE_URL: process.env.IMAGE_STORE_URL || "",
    DB_URL: process.env.DB_URL || "localhost:27017", // Default value if DB_URL is not set
    PORT: process.env.PORT || 10000, // Default value if PORT is not set
    EXPIRED_TIME: process.env.EXPIRED_TIME || "1m", // Default value if EXPIRED_TIME is not set
};

console.log(config); // This will output your config object with values from .env

