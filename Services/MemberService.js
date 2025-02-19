const {MemberRepository} = require('../Repository/MemberRepository')
const {generateUUID, getToDay, getCodeInUUID, getDateFromDatetime} = require('../utils/Generation')
const {CodeFunction} = require('../Enum/CodeFunction')
const {MemberMapping} = require("../Mapping/MemberMapping");

class MemberService {

    static async getAllMembers() {
        try {
            return await MemberRepository.getAllMembers();
        } catch (e) {
            console.error(e);
        }
    }

    static async addMember(newMember) {
        try {
            newMember.ID = generateUUID(CodeFunction.MEMBER);
            newMember.isExist = true;
            newMember.isShow = true;
            newMember.createdDate = getToDay();
            let newMemberEntity = MemberMapping.mapDTOtoEntity(newMember)
            await MemberRepository.addMember(newMemberEntity);
        } catch (e) {
            console.error(e);
        }
    }

    static async updateMemberByID(modifiedMember) {
        try {
            modifiedMember.updatedDate = getToDay();
            let modifiedMemberEntity = MemberMapping.mapDTOtoEntity(modifiedMember)
            await MemberRepository.updateMemberByID(modifiedMemberEntity);
        } catch (e) {
            console.error(e);
        }
    }

    static async deleteMemberByID(id) {
        try {
            await MemberRepository.deleteMemberByID(id);
        } catch (e) {
            console.error(e);
        }
    }
}

module.exports = {MemberService};