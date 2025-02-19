const {ReservationEntity} = require("../Entities/ReservationEntity");
const {ReservationDTO} = require("../Dtos/ReservationDTO");

class ReservationMapping {

    static mapDTOtoEntity(reservationDTO) {
        const consultDate = reservationDTO.createdDate instanceof Date ? reservationDTO.createdDate : new Date(reservationDTO.createdDate);
        const updatedDate = reservationDTO.updatedDate instanceof Date ? reservationDTO.updatedDate : new Date(reservationDTO.updatedDate);
        const createdDate = reservationDTO.createdDate instanceof Date ? reservationDTO.createdDate : new Date(reservationDTO.createdDate);
        return new ReservationEntity({
            ID: reservationDTO.ID,
            fullName: reservationDTO.fullName,
            content: reservationDTO.content,
            type: reservationDTO.type,
            status: reservationDTO.status,
            phone: reservationDTO.phone,
            gmail: reservationDTO.gmail,
            address: reservationDTO.address,
            subject: reservationDTO.subject,
            file: reservationDTO.file,
            consultDate: consultDate,
            createdDate: createdDate,
            updatedDate: updatedDate,
            isExist: reservationDTO.isExist
        });
    }

    static mapEntityToDTO(reservationEntity) {
        return new ReservationDTO(
            reservationEntity.ID,
            reservationEntity.fullName,
            reservationEntity.content,
            reservationEntity.type,
            reservationEntity.status,
            reservationEntity.phone,
            reservationEntity.gmail,
            reservationEntity.address,
            reservationEntity.subject,
            reservationEntity.file,
            reservationEntity.consultDate,
            reservationEntity.createdDate,
            reservationEntity.updatedDate,
            reservationEntity.isExist
        );
    }
}

module.exports = {ReservationMapping}