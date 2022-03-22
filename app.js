import express from "express";
import Pecas from "./models/Pecas";
import cors from "cors";
import db from "./models/db";

// SE DER O PROBLEMA DE IMPORTAR ELEMENTOS BASTA INICIAR O NODEMON COM O SEGUINTE COMANDO:
// node --experimental-modules --es-module-specifier-resolution=node app.js

// iniciando o servidor com express
const app = express();

// permitindo com que o servidor receba dados em json
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "X-PINGOTHER, Content-Type, Authorization"
  );
  app.use(cors());
  next();
});

app.get("/pecas", async (req, res) => {
  await Pecas.findAll().then((dataPecas) => {
    return res.json(dataPecas);
  });
});

app.get("/pecas/:id", async (req, res) => {
  let idPeca = req.params.id;
  await Pecas.findOne({ where: { id: idPeca } }).then((dataPecas) => {
    return res.json(dataPecas);
  });
});

app.delete("/pecas/:id", async (req, res) => {
  let id = req.params.id;

  try {
    let response = await db.query(`DELETE FROM pecas WHERE id = ${id}`);
    res.json(response);
  } catch (error) {
    console.log(error);
  }
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
      return res.status(400).json({
        erro: true,
        message: "Erro ao cadastrar",
      });
    });
});

app.put("/Alterpecas/:id", async (req, res) => {
  let idPeca = req.params.id;

  await Pecas.update(req.body, {
    where: {
      id: idPeca
    }
  })
});

app.listen(8080, () => {
  console.log("Servidor iniciado em: http://localhost:8080");
});
