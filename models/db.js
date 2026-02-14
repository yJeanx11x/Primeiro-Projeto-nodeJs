const { Sequelize } = require("sequelize")

const sequelize = new Sequelize(
    "cadastro",
    "root",
    "12345",
    {
        host: "localhost",
        dialect: "mysql"
    }
)

sequelize.authenticate().then(function() {
    console.log("Banco De Dados Conectado com Sucesso!")
}).catch((function(erro){
    console.log("Não foi possível conectar ao banco de dados:",erro)
    
}))


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
