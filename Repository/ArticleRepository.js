const {ArticleEntity} = require('../Entities/ArticleEntity')

class ArticleRepository {

    static async getAllArticles() {
        try {
            return await ArticleEntity.find();
        } catch (error) {
            console.error('Error retrieving Articles:', error);
        }
    }

    static async addArticle(newArticle) {
        try {
            const newArticleInstance = new ArticleEntity({
                ID: newArticle.ID,
                serial: newArticle.serial,
                title: newArticle.title,
                type: newArticle.type,
                content: newArticle.content,
                views: newArticle.views,
                createdDate: newArticle.createdDate,
                updatedDate: newArticle.updatedDate
            });
            await newArticleInstance.save();
        } catch (error) {
            console.error('Error inserting new Article:', error);
        }
    }

    static async updateArticleByID(updatedArticle) {
        try {
            await ArticleEntity.findOneAndUpdate(
                {ID: updatedArticle.ID},
                {
                    $set: {
                        serial: updatedArticle.serial,
                        title: updatedArticle.title,
                        type: updatedArticle.type,
                        content: updatedArticle.content,
                        views: updatedArticle.views,
                        createdDate: updatedArticle.createdDate,
                        updatedDate: updatedArticle.updatedDate
                    },
                },
            );
        } catch (error) {
            console.error('Error updating Article:', error);
            throw error;
        }
    }

    static async deleteArticle(id) {
        try {
            await ArticleEntity.deleteOne({ID: id});
        } catch (error) {
            console.error('Error removing Articles:', error);
        }
    }
}

module.exports = {ArticleRepository};