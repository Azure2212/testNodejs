const {AccountEntity} = require('../Entities/AccountEntity')

class AccountRepository {

    static async getAllAccounts() {
        try {
            return await AccountEntity.find();
        } catch (error) {
            console.error('Error retrieving accounts:', error);
        }
    }

    static async addAccount(newAccount) {
        try {
            const newAccountInstance = new AccountEntity({
                ID: newAccount.ID,
                username: newAccount.username,
                password: newAccount.password,
                role: newAccount.role,
                createdDate: newAccount.createdDate,
                updatedDate: newAccount.updatedDate
            });
            await newAccountInstance.save();
        } catch (error) {
            console.error('Error inserting new account:', error);
        }
    }

    static async updateAccountByID(updatedAccount) {
        try {
            await AccountEntity.findOneAndUpdate(
                {ID: updatedAccount.ID},
                {
                    $set: {
                        username: updatedAccount.username,
                        password: updatedAccount.password,
                        createdDate: updatedAccount.createdDate,
                        role: updatedAccount.role,
                        updatedDate: updatedAccount.updatedDate,
                    },
                },
            );
        } catch (error) {
            console.error('Error updating account:', error);
            throw error;
        }
    }

    static async deleteAccount(id) {
        try {
            await AccountEntity.deleteOne({ID: id});
        } catch (error) {
            console.error('Error removing accounts:', error);
        }
    }
}

module.exports = {AccountRepository};