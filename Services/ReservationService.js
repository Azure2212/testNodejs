const {ReservationRepository} = require('../Repository/ReservationRepository')
const {generateUUID, getToDay, getCodeInUUID, getDateFromDatetime} = require('../utils/Generation')
const {CodeFunction} = require('../Enum/CodeFunction')
const {ReservationMapping} = require("../Mapping/ReservationMapping");

class ReservationService {

    static async getAllReservations() {
        try {
            return await ReservationRepository.getAllReservations();
        } catch (e) {
            console.error(e);
        }
    }

    static async addReservation(newReservation) {
        try {
            newReservation.ID = generateUUID(CodeFunction.RESERVATION);
            newReservation.isExist = true;
            newReservation.createdDate = getToDay();
            newReservation.updatedDate = getToDay();
            let newReservationEntity = ReservationMapping.mapDTOtoEntity(newReservation)
            await ReservationRepository.addReservation(newReservationEntity);
        } catch (e) {
            console.error(e);
        }
    }

    static async updateReservationByID(modifiedReservation) {
        try {
            modifiedReservation.updatedDate = getToDay();
            let modifiedReservationEntity = ReservationMapping.mapDTOtoEntity(modifiedReservation)
            await ReservationRepository.updateReservationByID(modifiedReservationEntity);
        } catch (e) {
            console.error(e);
        }
    }

    static async deleteReservationByID(id) {
        try {
            await ReservationRepository.deleteReservation(id);
        } catch (e) {
            console.error(e);
        }
    }
}

module.exports = {ReservationService};