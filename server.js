const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");

const app = express();

let tarefasRecebidas = [];

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.post("/ver", (req, res) => {
  tarefasRecebidas = req.body;
  res.send("Tarefas recebidas");
});

app.get("/tarefas", (req, res) => {
  res.render("tarefas", {
    layout: "main",
    title: "Minhas Tarefas",
    tarefas: tarefasRecebidas,
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
