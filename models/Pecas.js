import { Sequelize } from "sequelize";
import sequelize from "./db";

//criando um modelo de dado que entrará no post

const Pecas = sequelize.define("pecas", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  namePiece: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  valuePiece: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

// Essa instrução é utilizada para criar a tabela automaticamente quando ela já não existe
// Pecas.sync();

// Vefifica se há alguma alteração na tabela, e realiza a mesma
// Pecas.sync({alter: true})

export default Pecas;
