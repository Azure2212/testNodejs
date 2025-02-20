const jwt = require('jsonwebtoken');
const config = require('../Configurations/Configuration');
const {RoleAccount} = require("../Enum/RoleAccount")

// Middleware to verify the JWT token
function authenticateToken(req, res, next) {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(403).json({ error: 'Access denied. No token provided.' });
    }
    try {
        req.user = jwt.verify(token, 'jwtPrivateKey');
        next();
    } catch (error) {
        console.error('Invalid token:', error);
        return res.status(403).json({ error: 'Invalid token.' });
    }
}

function authorizeRole(allowedRoles) {
    return (req, res, next) => {
        const userRole = req.user?.roles;

        if (!userRole) return res.status(403).json({ error: 'Access denied. No role found in token.' });

        if (!allowedRoles.includes(userRole)) return res.status(403).json({ error: 'You do not have permission to access this resource.' });
        next();
    };
}


module.exports = {authenticateToken, authorizeRole}
