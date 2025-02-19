const {ImagePathEntity} = require('../Entities/ImagePathEntity')

class ImagePathRepository {

    static async getAllImagePaths() {
        try {
            return await ImagePathEntity.find();
        } catch (error) {
            console.error('Error retrieving ImagePaths:', error);
        }
    }

    static async addImagePath(newImagePath) {
        try {
            const newImagePathInstance = new ImagePathEntity({
                ID: newImagePath.ID,
                serial: newImagePath.serial,
                path: newImagePath.path,
                idOwner: newImagePath.idOwner,
            });
            await newImagePathInstance.save();
        } catch (error) {
            console.error('Error inserting new ImagePath:', error);
        }
    }

    static async updateImagePath(updatedImagePath) {
        try {
            await ImagePathEntity.findOneAndUpdate(
                {ID: updatedImagePath.ID},
                {
                    $set: {
                        path: updatedImagePath.path,
                        serial: updatedImagePath.serial,
                        idOwner: updatedImagePath.idOwner
                    },
                },
            );
        } catch (error) {
            console.error('Error updating ImagePath:', error);
            throw error;
        }
    }

    static async deleteImagePath(id) {
        try {
            await ImagePathEntity.deleteOne({ID: id});
        } catch (error) {
            console.error('Error removing ImagePaths:', error);
        }
    }
}

module.exports = {ImagePathRepository};