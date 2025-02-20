const {config} = require('../Configurations/Configuration');
const {ArticleService} = require('../Services/ArticleService');
const {ArticleDTO} = require("../Dtos/ArticleDTO");
const {RoleAccount} = require("../Enum/RoleAccount")
const {authenticateToken, authorizeRole} = require("./AuthenticateToken");

class ArticleController {
    rootPathAPI = `/${config.NAME_COMPANY}/ArticleAPI`;

    constructor(app) {
        this.app = app;
        this.routes();
    }

    // Define routes
    routes() {
        // Get all Articles
        this.app.post(`${this.rootPathAPI}/getAllArticles`, authenticateToken, authorizeRole([RoleAccount.GLOBAL_ADMIN, RoleAccount.ADMIN, RoleAccount.IT_TECHNICIAN]), async (req, res) => {
            try {
                const Articles = await ArticleService.getAllArticles();
                res.status(201).json({message: 'Get all Articles successfully', data: Articles});
            } catch (error) {
                console.error('Error getting Articles:', error);
                res.status(500).json({error: 'Internal Server Error'});
            }
        });

        // Add an Article
        this.app.post(`${this.rootPathAPI}/addArticle`, authenticateToken, authorizeRole([RoleAccount.GLOBAL_ADMIN, RoleAccount.ADMIN, RoleAccount.IT_TECHNICIAN]), async (req, res) => {
            try {
                let {ID, serial, title, type, content, views, createdDate, updatedDate} = req.body;
                if (!serial || !title || !type || !content)
                    return res.status(400).json({error: 'All fields (serial, title, type, content) are required.'});

                createdDate = createdDate instanceof Date ? createdDate : new Date(createdDate);
                updatedDate = updatedDate instanceof Date ? updatedDate : new Date(updatedDate);
                const newArticle = new ArticleDTO(ID, serial, title, type, content, views, createdDate, updatedDate);

                const savedArticle = await ArticleService.addArticle(newArticle);
                res.status(201).json({message: 'Article created successfully', data: savedArticle});
            } catch (error) {
                console.error('Error saving Article:', error);
                res.status(500).json({error: 'Internal Server Error'});
            }
        });

        // Update an Article
        this.app.post(`${this.rootPathAPI}/updateArticleByID`, authenticateToken, authorizeRole([RoleAccount.GLOBAL_ADMIN, RoleAccount.ADMIN, RoleAccount.IT_TECHNICIAN]), async (req, res) => {
            try {
                let {ID, serial, title, type, content, views, createdDate, updatedDate} = req.body;
                if (!serial || !title || !type || !content)
                    return res.status(400).json({error: 'All fields (serial, title, type, content) are required.'});

                createdDate = createdDate instanceof Date ? createdDate : new Date(createdDate);
                updatedDate = updatedDate instanceof Date ? updatedDate : new Date(updatedDate);
                const updatedArticle = new ArticleDTO(ID, serial, title, type, content, views, createdDate, updatedDate);

                const savedArticle = await ArticleService.updateArticleByID(updatedArticle);
                res.status(201).json({message: 'Article updated successfully', data: savedArticle});
            } catch (error) {
                console.error('Error updating Article:', error);
                res.status(500).json({error: 'Internal Server Error'});
            }
        });

        // Delete an Article
        this.app.post(`${this.rootPathAPI}/deleteArticleByID`, authenticateToken, authorizeRole([RoleAccount.GLOBAL_ADMIN, RoleAccount.ADMIN, RoleAccount.IT_TECHNICIAN]), async (req, res) => {
            try {
                const {id} = req.query;
                if (!id) {
                    return res.status(400).json({error: 'ID is required'});
                }
                const deletedArticle = await ArticleService.deleteArticleByID(id);
                res.status(200).json({message: 'Article deleted successfully', data: deletedArticle});
            } catch (error) {
                console.error('Error deleting Article:', error);
                res.status(500).json({error: 'Internal Server Error'});
            }
        });
    }
}

module.exports = {ArticleController};