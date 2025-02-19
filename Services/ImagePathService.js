const {ImagePathRepository} = require('../Repository/ImagePathRepository')
const {generateUUID, getToDay, getCodeInUUID, getDateFromDatetime} = require('../utils/Generation')
const {CodeFunction} = require('../Enum/CodeFunction')

class ImagePathService {

    static async getAllImagePaths() {
        try {
            return await ImagePathRepository.getAllImagePaths();
        } catch (e) {
            console.error(e);
        }
    }

    static async addImagePath(newImagePath) {
        try {
            newImagePath.ID = generateUUID(CodeFunction.IMAGE);
            await ImagePathRepository.addImagePath(newImagePath);
        } catch (e) {
            console.error(e);
        }
    }

    static async updateImagePath(modifiedImagePath) {
        try {
            await ImagePathRepository.updateImagePath(modifiedImagePath);
        } catch (e) {
            console.error(e);
        }
    }

    static async deleteImagePathByID(id) {
        try {
            await ImagePathRepository.deleteImagePath(id);
        } catch (e) {
            console.error(e);
        }
    }
}

module.exports = {ImagePathService};