const mysql = require('mysql2')
const dotenv = require('dotenv')

dotenv.config() //garante acesso as credenciais do env

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.PASSWD,
    database: process.env.DATABASE,
    port: process.env.PORT

})

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("BD foi conectado com sucesso!");
    }
})

class DbService{
    static instance;

    static getDbServiceInstance(){
        if(!this.instance){
            this.instance = new DbService();
        }
        return this.instance;
    }
}

module.exports = DbService;