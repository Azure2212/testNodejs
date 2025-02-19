const {ImagePathEntity} = require("../Entities/ImagePathEntity");
const {ImagePathDTO} = require("../Dtos/ImagePathDTO");

class ImagePathMapping {

    static mapDTOtoEntity(imagePathDTO) {
        return new ImagePathEntity({
            ID: imagePathDTO.ID,
            serial: imagePathDTO.serial,
            path: imagePathDTO.path,
            idOwner: imagePathDTO.idOwner
        });
    }

    static mapEntityToDTO(imagePathEntity) {
        return new ImagePathDTO(
            imagePathEntity.ID,
            imagePathEntity.serial,
            imagePathEntity.path,
            imagePathEntity.idOwner
        );
    }
}

module.exports = {ImagePathMapping}