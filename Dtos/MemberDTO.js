class MemberDTO {
    constructor(ID, fullName, imgPath, phone = null, gmail = null, role = null, isShow = null, createdDate = null, updatedDate = null, isExist = true) {
        this.ID = ID;
        this.fullName = fullName;
        this.imgPath = imgPath;
        this.phone = phone;
        this.gmail = gmail;
        this.role = role;
        this.isShow = isShow;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.isExist = isExist;
    }
}

module.exports = MemberDTO;