import { Sequelize } from "sequelize";

// criando a conexao com o bd sql atraves do sequelize
const sequelize = new Sequelize("db_pecas", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// se subir para produção, retirar essa parte do authenticate

sequelize
  .authenticate()
  .then(() => {
    console.log("[OK] - Servidor conectado com o banco de dados.");
  })
  .catch(() => {
    console.log("[ERROR] - Problema com a conexão com o banco de dados. ");
  });

export default sequelize;
