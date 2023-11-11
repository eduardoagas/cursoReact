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

class DbService {
    static instance;

    static getDbServiceInstance() {
        if (!this.instance) {
            this.instance = new DbService();
        }
        return this.instance;
    }

    async BuscarClientes() {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM tbl_clientes;";
            connection.query(query, (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    resolve(result);
                }
            })
        })
    }

    async NovoCliente(data) {
        try {
            const query = "INSERT INTO tbl_clientes (nome, email) VALUES (?,?)"
            const nome = data.nome
            const email = data.email
            const response = await new Promise((resolve, reject) => {
                connection.query(query, [nome, email], (err, result) => {
                    if (err) reject(new Error(err.message))
                    resolve(result)
                })
            })
            console.log("Cliente inserido com sucesso!");
            return response;
        } catch (e) {
            console.log("Erro ao inserir cliente: " + e);

        }
    }

}

module.exports = DbService;