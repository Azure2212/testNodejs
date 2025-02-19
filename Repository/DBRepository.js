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

//connectDB();
//
// // Define a schema for the "Account" collection
// const accountSchema = new mongoose.Schema({
//     id: {type: Number, required: true},  // Custom 'id' field
//     username: {type: String, required: true},
//     password: {type: String, required: true},
//     role: {type: String, required: true},
//     createdDate: {type: Date, default: Date.now},  // Auto set current date if not provided
//     updatedDate: {type: Date, default: Date.now}   // Auto set current date if not provided
// });
//
// // Create a model based on the schema
// const Account = mongoose.model('Account', accountSchema, 'Account');
//
// // Function to get all accounts
// async function getAllAccounts() {
//     try {
//         const accounts = await Account.find();  // This will retrieve all documents from the "Account" collection
//         console.log('All accounts:', accounts);
//     } catch (error) {
//         console.error('Error retrieving accounts:', error);
//     }
// }
//
//
// // Function to insert a new account
// async function insertNewAccount(id, username, password, role) {
//     try {
//         // Create a new Account instance
//         const newAccount = new Account({
//             id: id,
//             username: username,
//             password: password,
//             role: role,
//             createdDate: new Date(),  // Automatically set createdDate
//             updatedDate: new Date()   // Automatically set updatedDate
//         });
//
//         // Save the new Account instance to the database
//         const savedAccount = await newAccount.save();
//         console.log('New account inserted:', savedAccount);
//     } catch (error) {
//         console.error('Error inserting new account:', error);
//     }
// }
//
// async function removeAccountsByPassword(password, id) {
//     try {
//         // Remove all documents where password is '123'
//         const result = await Account.deleteMany({password: password, id: id});
//
//         console.log(`Removed ${result.deletedCount} account(s) with password = '${password}'`);
//     } catch (error) {
//         console.error('Error removing accounts:', error);
//     }
// }
//
// async function updatePasswordByCondition(oldPassword, newPassword) {
//     try {
//         // Update all accounts where password is '123' to 'newPassword123'
//         const result = await Account.updateMany(
//             {password: oldPassword},           // Filter condition
//             {$set: {password: newPassword}}  // Update operation
//         );
//
//         console.log(`Updated ${result.nModified} account(s) where password = '${oldPassword}'`);
//     } catch (error) {
//         console.error('Error updating accounts:', error);
//     }
// }
//
// // Example usage to insert a new account
//
// //insertNewAccount(3, 'adminUser', 'securepassword12345', 'admin');
// // Call the function to fetch all data
// //getAllAccounts();
// //removeAccountsByPassword('securepassword123','3')
// //updatePasswordByCondition('123', '123512312321')

module.exports = {connectDB};