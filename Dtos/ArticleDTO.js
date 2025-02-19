class ArticleDTO {
    constructor(ID, serial, title, type = null, content = null, views = 0, createdDate = null, updatedDate = null) {
        this.ID = ID;
        this.serial = serial;
        this.title = title;
        this.type = type;
        this.content = content;
        this.views = views;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
    }
}

module.exports = ArticleDTO;