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
  pecas_Nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  pecas_Valor: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
});

// Essa instrução é utilizada para criar a tabela automaticamente quando ela já não existe
// Pecas.sync();

export default Pecas;
