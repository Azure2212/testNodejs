const {config} = require('../Configurations/Configuration');
const {AccountService} = require('../Services/AccountService');
const {AccountDTO} = require("../Dtos/AccountDTO");

class AccountController {
    rootPathAPI = `/${config.NAME_COMPANY}/AccountAPI`;

    constructor(app) {
        this.app = app;
        this.routes();
    }

    // Define routes
    routes() {
        // Get all accounts
        this.app.post(`${this.rootPathAPI}/getAllAccounts`, async (req, res) => {
            try {
                const accounts = await AccountService.getAllAccounts();
                res.status(201).json({message: 'Get all Accounts successfully', data: accounts});
            } catch (error) {
                console.error('Error getting accounts:', error);
                res.status(500).json({error: 'Internal Server Error'});
            }
        });

        // Add an account
        this.app.post(`${this.rootPathAPI}/addAccount`, async (req, res) => {
            try {
                let {ID, username, password, role, createdDate, updatedDate} = req.body;
                if (!username || !password || !role)
                    return res.status(400).json({error: 'All fields (username, password, role) are required.'});

                createdDate = createdDate instanceof Date ? createdDate : new Date(createdDate);
                updatedDate = updatedDate instanceof Date ? updatedDate : new Date(updatedDate);
                const newAccount = new AccountDTO(ID, username, password, role, createdDate, updatedDate);

                const savedAccount = await AccountService.addAccount(newAccount);
                res.status(201).json({message: 'Account created successfully', data: savedAccount});
            } catch (error) {
                console.error('Error saving account:', error);
                res.status(500).json({error: 'Internal Server Error'});
            }
        });

        // Update an account
        this.app.post(`${this.rootPathAPI}/updateAccountByID`, async (req, res) => {
            try {
                let {ID, username, password, role, createdDate, updatedDate} = req.body;
                if (!username || !password || !role)
                    return res.status(400).json({error: 'All fields (username, password, role) are required.'});

                createdDate = createdDate instanceof Date ? createdDate : new Date(createdDate);
                updatedDate = updatedDate instanceof Date ? updatedDate : new Date(updatedDate);
                const updatedAccount = new AccountDTO(ID, username, password, role, createdDate, updatedDate);

                const savedAccount = await AccountService.updateAccountByID(updatedAccount);
                res.status(201).json({message: 'Account updated successfully', data: savedAccount});
            } catch (error) {
                console.error('Error updating account:', error);
                res.status(500).json({error: 'Internal Server Error'});
            }
        });

        // Delete an account
        this.app.post(`${this.rootPathAPI}/deleteAccountByID`, async (req, res) => {
            try {
                const {id} = req.query;
                if (!id) {
                    return res.status(400).json({error: 'ID is required'});
                }
                const deletedAccount = await AccountService.deleteAccountByID(id);
                res.status(200).json({message: 'Account deleted successfully', data: deletedAccount});
            } catch (error) {
                console.error('Error deleting account:', error);
                res.status(500).json({error: 'Internal Server Error'});
            }
        });
    }
}

module.exports = {AccountController};