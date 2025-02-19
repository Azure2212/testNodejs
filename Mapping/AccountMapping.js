const {AccountEntity} = require("../Entities/AccountEntity");
const {AccountDTO} = require("../Dtos/AccountDTO");

class AccountMapping {

    static mapDTOtoEntity(accountDTO) {
        const createdDate = accountDTO.createdDate instanceof Date ? accountDTO.createdDate : new Date(accountDTO.createdDate);
        const updatedDate = accountDTO.updatedDate instanceof Date ? accountDTO.updatedDate : new Date(accountDTO.updatedDate);
        return new AccountEntity({
            ID: accountDTO.ID,
            username: accountDTO.username,
            password: accountDTO.password,
            role: accountDTO.role,
            createdDate: createdDate,
            updatedDate: updatedDate,
        });
    }

    static mapEntityToDTO(accountEntity) {
        return new AccountDTO(
            accountEntity.ID,
            accountEntity.username,
            accountEntity.password,
            accountEntity.role,
            accountEntity.createdDate,
            accountEntity.updatedDate
        );
    }
}

module.exports = {AccountMapping}