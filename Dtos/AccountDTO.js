class AccountDTO {
    constructor(ID, username, password, role, createdDate, updatedDate) {
        this.ID = ID;
        this.username = username;
        this.password = password;
        this.role = role;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
    }
}

module.exports = {AccountDTO};