class SystemDTO {
    constructor(ID, name, address, phone, gmail, logoPath, createdDate, updatedDate) {
        this.ID = ID;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.gmail = gmail;
        this.logoPath = logoPath;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
    }
}

module.exports = SystemDTO;