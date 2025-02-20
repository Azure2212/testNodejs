const jwt = require("jsonwebtoken");
const {config} = require('../Configurations/Configuration');
const {AccountService} = require('../Services/AccountService');

class AuthController {
    rootPathAPI = `/${config.NAME_COMPANY}/AuthAPI`;

    constructor(app) {
        this.app = app;
        this.routes();
    }

    // Define routes
    routes() {
        // Get all accounts
        this.app.post(`${this.rootPathAPI}/Login`, async (req, res) => {
            try {
                let {ID, username, password, role, createdDate, updatedDate} = req.body;
                if(!username || !password) return res.status(400).json({error: 'All fields (username, password) are required.'});

                const account = await AccountService.checkLogin(username, password)
                if(!account) {
                    res.status(201).json({message: 'Username or password fail!', data: account});
                    return;
                }

                const token = jwt.sign({id: account.ID,
                                                     roles: account.role,}, "jwtPrivateKey",
                                             {expiresIn: config.EXPIRED_TIME})

                res.status(201).json({message: 'Login account successfully', data: account, token: token});
            } catch (error) {
                console.error('Error getting accounts:', error);
                res.status(500).json({error: 'Internal Server Error'});
            }
        });
    }
}

module.exports = {AuthController};