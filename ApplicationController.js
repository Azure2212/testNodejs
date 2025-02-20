const {config} = require('./Configurations/Configuration');
const {AccountController} = require('./Controllers/AccountController')
const {ArticleController} = require('./Controllers/ArticleController')
const {MemberController} = require('./Controllers/MemberController')
const {ReservationController} = require('./Controllers/ReservationController')
const {SystemController} = require('./Controllers/SystemController')
const {AuthController} = require('./Controllers/AuthController')
const express = require('express');
const {connectDB} = require('./Repository/DBConnection')

class Server {
    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.articleController = new ArticleController(this.app);
        this.accountController = new AccountController(this.app)
        this.memberController = new MemberController(this.app);
        this.reservationController = new ReservationController(this.app);
        this.systemController = new SystemController(this.app);
        this.authController = new AuthController(this.app);
    }

    start() {
        connectDB();
        this.app.listen(config.PORT, () => {
            console.log(`Server running on port ${config.PORT}`);
        });
    }
}

my_server = new Server()
my_server.start()