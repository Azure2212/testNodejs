const {config} = require('../Configurations/Configuration');
const {SystemService} = require('../Services/SystemService');
const SystemDTO = require("../Dtos/SystemDTO");

class SystemController {
    rootPathAPI = `/${config.NAME_COMPANY}/SystemAPI`;

    constructor(app) {
        this.app = app;
        this.routes();
    }
    // Define routes
    routes() {
        // Get all Systems
        this.app.post(`${this.rootPathAPI}/getAllSystems`, async (req, res) => {
            try {
                const Systems = await SystemService.getAllSystems();
                res.status(201).json({message: 'Get all Systems successfully', data: Systems});
            } catch (error) {
                console.error('Error getting Systems:', error);
                res.status(500).json({error: 'Internal Server Error'});
            }
        });

        // Add a System
        this.app.post(`${this.rootPathAPI}/addSystem`, async (req, res) => {
            try {
                let {ID, name, address, phone, gmail, logoPath, createdDate, updatedDate} = req.body;
                if (!name || !address || !phone || !gmail || !logoPath)
                    return res.status(400).json({error: 'All fields (name, address, phone, gmail, logoPath) are required.'});

                createdDate = createdDate instanceof Date ? createdDate : new Date(createdDate);
                updatedDate = updatedDate instanceof Date ? updatedDate : new Date(updatedDate);
                const newSystem = new SystemDTO(ID, name, address, phone, gmail, logoPath, createdDate, updatedDate);

                const savedSystem = await SystemService.addSystem(newSystem);
                res.status(201).json({message: 'System created successfully', data: savedSystem});
            } catch (error) {
                console.error('Error saving System:', error);
                res.status(500).json({error: 'Internal Server Error'});
            }
        });

        // Update a System
        this.app.post(`${this.rootPathAPI}/updateSystemByID`, async (req, res) => {
            try {
                let {ID, name, address, phone, gmail, logoPath, createdDate, updatedDate} = req.body;
                if (!name || !address || !phone || !gmail || !logoPath)
                    return res.status(400).json({error: 'All fields (name, address, phone, gmail, logoPath) are required.'});

                createdDate = createdDate instanceof Date ? createdDate : new Date(createdDate);
                updatedDate = updatedDate instanceof Date ? updatedDate : new Date(updatedDate);
                const updatedSystem = new SystemDTO(ID, name, address, phone, gmail, logoPath, createdDate, updatedDate);

                const savedSystem = await SystemService.updateSystemByID(updatedSystem);
                res.status(201).json({message: 'System updated successfully', data: savedSystem});
            } catch (error) {
                console.error('Error updating System:', error);
                res.status(500).json({error: 'Internal Server Error'});
            }
        });

        // Delete a System
        this.app.post(`${this.rootPathAPI}/deleteSystemByID`, async (req, res) => {
            try {
                const {id} = req.query;
                if (!id) {
                    return res.status(400).json({error: 'ID is required'});
                }
                const deletedSystem = await SystemService.deleteSystemByID(id);
                res.status(200).json({message: 'System deleted successfully', data: deletedSystem});
            } catch (error) {
                console.error('Error deleting System:', error);
                res.status(500).json({error: 'Internal Server Error'});
            }
        });
    }

    start() {
        this.app.listen(config.PORT, () => {
            console.log(`Server running on port ${config.PORT}`);
        });
    }
}

module.exports = {SystemController};