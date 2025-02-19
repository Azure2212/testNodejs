const {config} = require('../Configurations/Configuration');
const {ReservationService} = require('../Services/ReservationService');
const ReservationDTO = require("../Dtos/ReservationDTO");

class ReservationController {
    rootPathAPI = `/${config.NAME_COMPANY}/ReservationAPI`;

    constructor(app) {
        this.app = app
        this.routes();
    }
    // Define routes
    routes() {
        // Get all Reservations
        this.app.post(`${this.rootPathAPI}/getAllReservations`, async (req, res) => {
            try {
                const Reservations = await ReservationService.getAllReservations();
                res.status(201).json({message: 'Get all Reservations successfully', data: Reservations});
            } catch (error) {
                console.error('Error getting Reservations:', error);
                res.status(500).json({error: 'Internal Server Error'});
            }
        });

        // Add a Reservation
        this.app.post(`${this.rootPathAPI}/addReservation`, async (req, res) => {
            try {
                let {ID, fullName, content, type, status, phone, gmail, address, subject, file, consultDate, createdDate, updatedDate, isExist} = req.body;
                if (!fullName || !content || !type || !phone || !gmail || !subject || !consultDate)
                    return res.status(400).json({error: 'All fields (fullName, content, type, gmail) are required.'});

                createdDate = createdDate instanceof Date ? createdDate : new Date(createdDate);
                updatedDate = updatedDate instanceof Date ? updatedDate : new Date(updatedDate);
                consultDate = consultDate instanceof Date ? consultDate : new Date(consultDate);
                const newReservation = new ReservationDTO(ID, fullName, content, type, status, phone, gmail, address, subject, file, consultDate, createdDate, updatedDate, isExist);

                const savedReservation = await ReservationService.addReservation(newReservation);
                res.status(201).json({message: 'Reservation created successfully', data: savedReservation});
            } catch (error) {
                console.error('Error saving Reservation:', error);
                res.status(500).json({error: 'Internal Server Error'});
            }
        });

        // Update a Reservation
        this.app.post(`${this.rootPathAPI}/updateReservationByID`, async (req, res) => {
            try {
                let {ID, fullName, content, type, status, phone, gmail, address, subject, file, consultDate, createdDate, updatedDate, isExist} = req.body;
                if (!fullName || !content || !type || !phone || !gmail || !subject || !consultDate)
                    return res.status(400).json({error: 'All fields (fullName, content, type, gmail) are required.'});

                createdDate = createdDate instanceof Date ? createdDate : new Date(createdDate);
                updatedDate = updatedDate instanceof Date ? updatedDate : new Date(updatedDate);
                consultDate = consultDate instanceof Date ? consultDate : new Date(consultDate);
                const updatedReservation = new ReservationDTO(ID, fullName, content, type, status, phone, gmail, address, subject, file, consultDate, createdDate, updatedDate, isExist);

                const savedReservation = await ReservationService.updateReservationByID(updatedReservation);
                res.status(201).json({message: 'Reservation updated successfully', data: savedReservation});
            } catch (error) {
                console.error('Error updating Reservation:', error);
                res.status(500).json({error: 'Internal Server Error'});
            }
        });

        // Delete a Reservation
        this.app.post(`${this.rootPathAPI}/deleteReservationByID`, async (req, res) => {
            try {
                const {id} = req.query;
                if (!id) {
                    return res.status(400).json({error: 'ID is required'});
                }
                const deletedReservation = await ReservationService.deleteReservationByID(id);
                res.status(200).json({message: 'Reservation deleted successfully', data: deletedReservation});
            } catch (error) {
                console.error('Error deleting Reservation:', error);
                res.status(500).json({error: 'Internal Server Error'});
            }
        });
    }
}

module.exports = {ReservationController};