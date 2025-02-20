const bcrypt = require('bcryptjs');

// Hashing a password (e.g., during user registration or when saving the password)
const hashPassword = async (password) => {
    try {
        // Generate a salt with a certain number of rounds (e.g., 10)
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    } catch (error) {
        console.error('Error hashing password:', error);
    }
};

// Wrap the `await` inside an async function
async function run() {
    const password = 'password123123'; // User's plaintext password
    const hashedPassword = await hashPassword(password);
    console.log(hashedPassword); // Save this hashed password in the database
    const isMatch = await bcrypt.compare('password123123', hashedPassword);
    console.log(isMatch)
}

rs = run(); // Call the async function to execute the code

