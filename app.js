import express from "express";
import Pecas from "./models/Pecas";

// SE DER O PROBLEMA DE IMPORTAR ELEMENTOS BASTA INICIAR O NODEMON COM O SEGUINTE COMANDO:
// node --experimental-modules --es-module-specifier-resolution=node app.js

// iniciando o servidor com express
const app = express();

// permitindo com que o servidor receba dados em json
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("-Página Inicial-");
});

app.post("/cadastrar", async (req, res) => {
  await Pecas.create(req.body)
    .then(() => {
      return res.json({
        erro: false,
        message: "Cadastrado com sucesso!",
      });
    })
    .catch(() => {
      return res.json({
        erro: true,
        message: "Erro ao cadastrar",
      });
    });
});

app.listen(8080, () => {
  console.log("Servidor iniciado em: http://localhost:8080");
});
