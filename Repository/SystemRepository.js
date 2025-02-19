const {SystemEntity} = require('../Entities/SystemEntity')

class SystemRepository {

    static async getAllSystems() {
        try {
            return await SystemEntity.find();
        } catch (error) {
            console.error('Error retrieving Systems:', error);
        }
    }

    static async addSystem(newSystem) {
        try {
            const newSystemInstance = new SystemEntity({
                ID: newSystem.ID,
                name: newSystem.name,
                address: newSystem.address,
                phone: newSystem.phone,
                gmail: newSystem.gmail,
                logoPath: newSystem.logoPath,
                createdDate: newSystem.createdDate,
                updatedDate: newSystem.updatedDate,
            });
            await newSystemInstance.save();
        } catch (error) {
            console.error('Error inserting new System:', error);
        }
    }

    static async updateSystem(updatedSystem) {
        try {
            await SystemEntity.findOneAndUpdate(
                {ID: updatedSystem.ID},
                {
                    $set: {
                        name: updatedSystem.name,
                        address: updatedSystem.address,
                        phone: updatedSystem.phone,
                        gmail: updatedSystem.gmail,
                        logoPath: updatedSystem.logoPath,
                        createdDate: updatedSystem.createdDate,
                        updatedDate: updatedSystem.updatedDate,
                    },
                },
            );
        } catch (error) {
            console.error('Error updating System:', error);
            throw error;
        }
    }

    static async deleteSystem(id) {
        try {
            await SystemEntity.deleteOne({ID: id});
        } catch (error) {
            console.error('Error removing Systems:', error);
        }
    }
}

module.exports = {SystemRepository};