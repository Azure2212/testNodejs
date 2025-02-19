const {ArticleRepository} = require('../Repository/ArticleRepository')
const {generateUUID, getToDay, getCodeInUUID, getDateFromDatetime} = require('../utils/Generation')
const {CodeFunction} = require('../Enum/CodeFunction')
const {ArticleMapping} = require("../Mapping/ArticleMapping");

class ArticleService {

    static async getAllArticles() {
        try {
            return await ArticleRepository.getAllArticles();
        } catch (e) {
            console.error(e);
        }
    }

    static async addArticle(newArticle) {
        try {
            newArticle.ID = generateUUID(CodeFunction.ARTICLE);
            newArticle.createdDate = getToDay();
            newArticle.updatedDate = getToDay();
            let newArticleEntity = ArticleMapping.mapDTOtoEntity(newArticle)
            await ArticleRepository.addArticle(newArticleEntity);
        } catch (e) {
            console.error(e);
        }
    }

    static async updateArticleByID(modifiedArticle) {
        try {
            modifiedArticle.updatedDate = getToDay();
            let modifiedArticleEntity = ArticleMapping.mapDTOtoEntity(modifiedArticle)
            await ArticleRepository.updateArticleByID(modifiedArticleEntity);
        } catch (e) {
            console.error(e);
        }
    }

    static async deleteArticleByID(id) {
        try {
            await ArticleRepository.deleteArticle(id);
        } catch (e) {
            console.error(e);
        }
    }
}

module.exports = {ArticleService};