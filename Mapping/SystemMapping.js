const {SystemEntity} = require("../Entities/SystemEntity");
const {SystemDTO} = require("../Dtos/SystemDTO");

class SystemMapping {

    static mapDTOtoEntity(systemDTO) {
        return new SystemEntity({
            ID: systemDTO.ID,
            name: systemDTO.name,
            address: systemDTO.address,
            phone: systemDTO.phone,
            gmail: systemDTO.gmail,
            logoPath: systemDTO.logoPath,
            createdDate: systemDTO.createdDate,
            updatedDate: systemDTO.updatedDate
        });
    }

    static mapEntityToDTO(systemEntity) {
        return new SystemDTO(
            systemEntity.ID,
            systemEntity.name,
            systemEntity.address,
            systemEntity.phone,
            systemEntity.gmail,
            systemEntity.logoPath,
            systemEntity.createdDate,
            systemEntity.updatedDate
        );
    }
}

module.exports = {SystemMapping}