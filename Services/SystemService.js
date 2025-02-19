const {SystemRepository} = require('../Repository/SystemRepository')
const {generateUUID, getToDay, getCodeInUUID, getDateFromDatetime} = require('../utils/Generation')
const {CodeFunction} = require('../Enum/CodeFunction')
const {SystemMapping} = require("../Mapping/SystemMapping");

class SystemService {

    static async getAllSystems() {
        try {
            return await SystemRepository.getAllSystems();
        } catch (e) {
            console.error(e);
        }
    }

    static async addSystem(newSystem) {
        try {
            newSystem.ID = generateUUID(CodeFunction.SYSTEM);
            newSystem.createdDate = getToDay();
            newSystem.updatedDate = getToDay();
            let newSystemEntity = SystemMapping.mapDTOtoEntity(newSystem)
            await SystemRepository.addSystem(newSystemEntity);
        } catch (e) {
            console.error(e);
        }
    }

    static async updateSystemByID(modifiedSystem) {
        try {
            modifiedSystem.updatedDate = getToDay();
            let ModifiedSystemEntity = SystemMapping.mapDTOtoEntity(modifiedSystem)
            await SystemRepository.updateSystem(ModifiedSystemEntity);
        } catch (e) {
            console.error(e);
        }
    }

    static async deleteSystemByID(id) {
        try {
            await SystemRepository.deleteSystem(id);
        } catch (e) {
            console.error(e);
        }
    }
}

module.exports = {SystemService};