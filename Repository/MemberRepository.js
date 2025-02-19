const {MemberEntity} = require('../Entities/MemberEntity')

class MemberRepository {

    static async getAllMembers() {
        try {
            return await MemberEntity.find();
        } catch (error) {
            console.error('Error retrieving Members:', error);
        }
    }

    static async addMember(newMember) {
        try {
            const newMemberInstance = new MemberEntity({
                ID: newMember.ID,
                fullName: newMember.fullName,
                imgPath: newMember.imgPath,
                phone: newMember.phone,
                gmail: newMember.gmail,
                role: newMember.role,
                isShow: newMember.isShow,
                newMember: newMember.newMember,
                updatedDate: newMember.updatedDate,
                isExist: newMember.isExist,
            });
            await newMemberInstance.save();
        } catch (error) {
            console.error('Error inserting new Member:', error);
        }
    }

    static async updateMemberByID(updatedMember) {
        try {
            await MemberEntity.findOneAndUpdate(
                {ID: updatedMember.ID},
                {
                    $set: {
                        fullName: updatedMember.fullName,
                        imgPath: updatedMember.imgPath,
                        phone: updatedMember.phone,
                        gmail: updatedMember.gmail,
                        role: updatedMember.role,
                        isShow: updatedMember.isShow,
                        newMember: updatedMember.newMember,
                        updatedDate: updatedMember.updatedDate,
                        isExist: updatedMember.isExist,
                    },
                },
            );
        } catch (error) {
            console.error('Error updating Member:', error);
            throw error;
        }
    }

    static async deleteMemberByID(id) {
        try {
            await MemberEntity.deleteOne({ID: id});
        } catch (error) {
            console.error('Error removing Members:', error);
        }
    }
}

module.exports = {MemberRepository};