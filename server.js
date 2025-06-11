const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

let dadosRecebidos = [];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/ver", (req, res) => {
  const novoDado = req.body;
  dadosRecebidos.push(novoDado);
  console.log("Dados recebidos:", novoDado);
  res.send(dadosRecebidos);
});

app.get("/ver", (req, res) => {
  res.send(dadosRecebidos);
});

app.listen(3000, () => {
  console.log("app rodando http://localhost:3000");
});
