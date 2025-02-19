const {MemberEntity} = require("../Entities/MemberEntity");
const {MemberDTO} = require("../Dtos/MemberDTO");

class MemberMapping{

    static mapDTOtoEntity(memberDTO) {
        const createdDate = memberDTO.createdDate instanceof Date ? memberDTO.createdDate : new Date(memberDTO.createdDate);
        const updatedDate = memberDTO.updatedDate instanceof Date ? memberDTO.updatedDate : new Date(memberDTO.updatedDate);
        return new MemberEntity({
            ID: memberDTO.ID,
            fullName: memberDTO.fullName,
            imgPath: memberDTO.imgPath,
            phone: memberDTO.phone,
            gmail: memberDTO.gmail,
            role: memberDTO.role,
            isShow: memberDTO.isShow,
            createdDate: createdDate,
            updatedDate: updatedDate,
            isExist: memberDTO.isExist
        });
    }

    static mapEntityToDTO(memberEntity) {
        return new MemberDTO(
            memberEntity.ID,
            memberEntity.fullName,
            memberEntity.imgPath,
            memberEntity.phone,
            memberEntity.gmail,
            memberEntity.role,
            memberEntity.isShow,
            memberEntity.createdDate,
            memberEntity.updatedDate,
            memberEntity.isExist
        );
    }
}
module.exports = {MemberMapping}