const {AccountRepository} = require('../Repository/AccountRepository')
const {generateUUID, getToDay, getCodeInUUID, getDateFromDatetime} = require('../utils/Generation')
const {CodeFunction} = require('../Enum/CodeFunction')
const {AccountMapping} = require('../Mapping/AccountMapping')
const {RoleAccount} = require("../Enum/RoleAccount");
const bcrypt = require('bcryptjs');

class AccountService {

    static async getAllAccounts() {
        try {
            return await AccountRepository.getAllAccounts();
        } catch (e) {
            console.error(e);
        }
    }

    static async checkLogin(username, password) {
        try {
            let account = await AccountRepository.getAccountByUsername(username);
            console.log((await bcrypt.compare(password, account.password)));
            if(!account || !(await bcrypt.compare(password, account.password))) return null;

            return account;
        } catch (e) {
            console.error(e);
        }
    }

    static async addAccount(newAccount) {
        try {
            newAccount.ID = generateUUID(CodeFunction.ACCOUNT);
            newAccount.createdDate = getToDay();
            const newAccountEntity = AccountMapping.mapDTOtoEntity(newAccount)
            await AccountRepository.addAccount(newAccountEntity);
        } catch (e) {
            console.error(e);
        }
    }

    static async updateAccountByID(modifiedAccount) {
        try {
            modifiedAccount.updatedDate = getToDay();
            const modifiedAccountEntity = AccountMapping.mapDTOtoEntity(modifiedAccount)
            await AccountRepository.updateAccountByID(modifiedAccountEntity);
        } catch (e) {
            console.error(e);
        }
    }

    static async deleteAccountByID(id) {
        try {
            const accountCheck = AccountRepository.updateAccountByID(id)
            if(accountCheck.role === RoleAccount.GLOBAL_ADMIN) return null;
            await AccountRepository.deleteAccount(id);
        } catch (e) {
            console.error(e);
        }
    }
}

module.exports = {AccountService};