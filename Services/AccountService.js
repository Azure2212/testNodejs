const {AccountRepository} = require('../Repository/AccountRepository')
const {generateUUID, getToDay, getCodeInUUID, getDateFromDatetime} = require('../utils/Generation')
const {CodeFunction} = require('../Enum/CodeFunction')
const {AccountMapping} = require('../Mapping/AccountMapping')

class AccountService {

    static async getAllAccounts() {
        try {
            return await AccountRepository.getAllAccounts();
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
            await AccountRepository.deleteAccount(id);
        } catch (e) {
            console.error(e);
        }
    }
}

module.exports = {AccountService};