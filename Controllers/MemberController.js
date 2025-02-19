const {config} = require('../Configurations/Configuration');
const {MemberService} = require('../Services/MemberService');
const MemberDTO = require("../Dtos/MemberDTO");

class MemberController {
    rootPathAPI = `/${config.NAME_COMPANY}/MemberAPI`;

    constructor(app) {
        this.app = app;
        this.routes();
    }
    // Define routes
    routes() {
        // Get all Members
        this.app.post(`${this.rootPathAPI}/getAllMembers`, async (req, res) => {
            try {
                const Members = await MemberService.getAllMembers();
                res.status(201).json({message: 'Get all Members successfully', data: Members});
            } catch (error) {
                console.error('Error getting Members:', error);
                res.status(500).json({error: 'Internal Server Error'});
            }
        });

        // Add a Member
        this.app.post(`${this.rootPathAPI}/addMember`, async (req, res) => {
            try {
                let {ID, fullName, imgPath, phone, gmail, role, isShow, createdDate, updatedDate, isExist} = req.body;
                if (!fullName || !role || !phone || !gmail)
                    return res.status(400).json({error: 'All fields (fullName, role, phone, gmail) are required.'});

                createdDate = createdDate instanceof Date ? createdDate : new Date(createdDate);
                updatedDate = updatedDate instanceof Date ? updatedDate : new Date(updatedDate);
                const newMember = new MemberDTO(ID, fullName, imgPath, phone, gmail, role, isShow, createdDate, updatedDate, isExist);

                const savedMember = await MemberService.addMember(newMember);
                res.status(201).json({message: 'Member created successfully', data: savedMember});
            } catch (error) {
                console.error('Error saving Member:', error);
                res.status(500).json({error: 'Internal Server Error'});
            }
        });

        // Update a Member
        this.app.post(`${this.rootPathAPI}/updateMemberByID`, async (req, res) => {
            try {
                let {ID, fullName, imgPath, phone, gmail, role, isShow, createdDate, updatedDate, isExist} = req.body;
                if (!fullName || !role || !phone || !gmail)
                    return res.status(400).json({error: 'All fields (fullName, role, phone, gmail) are required.'});

                createdDate = createdDate instanceof Date ? createdDate : new Date(createdDate);
                updatedDate = updatedDate instanceof Date ? updatedDate : new Date(updatedDate);
                const updatedMember = new MemberDTO(ID, fullName, imgPath, phone, gmail, role, isShow, createdDate, updatedDate, isExist);

                const savedMember = await MemberService.updateMemberByID(updatedMember);
                res.status(201).json({message: 'Member updated successfully', data: savedMember});
            } catch (error) {
                console.error('Error updating Member:', error);
                res.status(500).json({error: 'Internal Server Error'});
            }
        });

        // Delete a Member
        this.app.post(`${this.rootPathAPI}/deleteMemberByID`, async (req, res) => {
            try {
                const {id} = req.query;
                if (!id) {
                    return res.status(400).json({error: 'ID is required'});
                }
                const deletedMember = await MemberService.deleteMemberByID(id);
                res.status(200).json({message: 'Member deleted successfully', data: deletedMember});
            } catch (error) {
                console.error('Error deleting Member:', error);
                res.status(500).json({error: 'Internal Server Error'});
            }
        });
    }
}

module.exports = {MemberController};