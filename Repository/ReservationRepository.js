const {ReservationEntity} = require('../Entities/ReservationEntity')

class ReservationRepository {

    static async getAllReservations() {
        try {
            return await ReservationEntity.find();
        } catch (error) {
            console.error('Error retrieving Reservations:', error);
        }
    }

    static async addReservation(newReservation) {
        try {
            const newReservationInstance = new ReservationEntity({
                ID: newReservation.ID,
                fullName: newReservation.fullName,
                content: newReservation.content,
                type: newReservation.type,
                status: newReservation.status,
                phone: newReservation.phone,
                gmail: newReservation.gmail,
                address: newReservation.address,
                subject: newReservation.subject,
                file: newReservation.file,
                consultDate: newReservation.consultDate,
                createdDate: newReservation.createdDate,
                updatedDate: newReservation.updatedDate,
                isExist: newReservation.isExist,
            });
            await newReservationInstance.save();
        } catch (error) {
            console.error('Error inserting new Reservation:', error);
        }
    }

    static async updateReservationByID(updatedReservation) {
        try {
            await ReservationEntity.findOneAndUpdate(
                {ID: updatedReservation.ID},
                {
                    $set: {
                        ID: updatedReservation.ID,
                        fullName: updatedReservation.fullName,
                        content: updatedReservation.content,
                        type: updatedReservation.type,
                        status: updatedReservation.status,
                        phone: updatedReservation.phone,
                        gmail: updatedReservation.gmail,
                        address: updatedReservation.address,
                        subject: updatedReservation.subject,
                        file: updatedReservation.file,
                        consultDate: updatedReservation.consultDate,
                        createdDate: updatedReservation.createdDate,
                        updatedDate: updatedReservation.updatedDate,
                        isExist: updatedReservation.isExist,
                    },
                },
            );
        } catch (error) {
            console.error('Error updating Reservation:', error);
            throw error;
        }
    }

    static async deleteReservation(id) {
        try {
            await ReservationEntity.deleteOne({ID: id});
        } catch (error) {
            console.error('Error removing Reservations:', error);
        }
    }
}

module.exports = {ReservationRepository};