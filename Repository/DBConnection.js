const mongoose = require('mongoose');
const {config} = require('../Configurations/Configuration');

function connectDB() {
    mongoose.connect(config.DB_URL, {dbName: 'ICLBE'})
        .then(() => {
            console.log('Successfully connected to DB');
        })
        .catch((err) => {
            console.log("Error connecting to DB:", err);
            process.exit(1);  // Exit the process with an error code
        });

    const conn = mongoose.connection;

    conn.once('open', () => {
        console.log('Connection to DB is open');
    });

    conn.on('error', (err) => {
        console.log('Error connecting to DB:', err);
        process.exit(1);  // Exit the process with an error code
    });
}
module.exports = {connectDB};