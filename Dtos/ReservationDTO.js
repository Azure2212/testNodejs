class ReservationDTO {
    constructor(
        ID, fullName, content, type, status, phone, gmail, address, subject, file, consultDate, createdDate, updatedDate, isExist
    ) {
        this.ID = ID;
        this.fullName = fullName;
        this.content = content;
        this.type = type;
        this.status = status;
        this.phone = phone;
        this.gmail = gmail;
        this.address = address;
        this.subject = subject;
        this.file = file;
        this.consultDate = consultDate;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.isExist = isExist;
    }
}

module.exports = ReservationDTO;