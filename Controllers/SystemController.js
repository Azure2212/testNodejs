const {config} = require('../Configurations/Configuration');
const {SystemService} = require('../Services/SystemService');
const SystemDTO = require("../Dtos/SystemDTO");
const {RoleAccount} = require("../Enum/RoleAccount")
const {authenticateToken, authorizeRole} = require("./AuthenticateToken");

class SystemController {
    rootPathAPI = `/${config.NAME_COMPANY}/SystemAPI`;

    constructor(app) {
        this.app = app;
        this.routes();
    }
    // Define routes
    routes() {
        // Update a System
        this.app.post(`${this.rootPathAPI}/updateSystemByID`, authenticateToken, authorizeRole([RoleAccount.GLOBAL_ADMIN, RoleAccount.IT_TECHNICIAN]), async (req, res) => {
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
    }

    start() {
        this.app.listen(config.PORT, () => {
            console.log(`Server running on port ${config.PORT}`);
        });
    }
}

module.exports = {SystemController};