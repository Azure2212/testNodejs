const {ArticleEntity} = require("../Entities/ArticleEntity");
const {ArticleDTO} = require("../Dtos/ArticleDTO");

class ArticleMapping {

    static mapDTOtoEntity(articleDTO) {
        // Ensure dates are Date objects
        const createdDate = articleDTO.createdDate instanceof Date ? articleDTO.createdDate : new Date(articleDTO.createdDate);
        const updatedDate = articleDTO.updatedDate instanceof Date ? articleDTO.updatedDate : new Date(articleDTO.updatedDate);
        return new ArticleEntity({
            ID: articleDTO.ID,
            serial: articleDTO.serial,
            title: articleDTO.title,
            type: articleDTO.type,
            content: articleDTO.content,
            views: articleDTO.views,
            createdDate: createdDate,
            updatedDate: updatedDate,
        });
    }

    static mapEntityToDTO(articleEntity) {
        return new ArticleDTO(
            articleEntity.ID,
            articleEntity.serial,
            articleEntity.title,
            articleEntity.type,
            articleEntity.content,
            articleEntity.views,
            articleEntity.createdDate,
            articleEntity.updatedDate
        );
    }
}

module.exports = {ArticleMapping}