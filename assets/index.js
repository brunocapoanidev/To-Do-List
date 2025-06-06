const botaoAddTarefa = document.querySelector("#btn-add-tarefa");
const tarefasadd = document.getElementById("tarefas");
const tarefa = document.getElementById("campo");

botaoAddTarefa.addEventListener("click", () => {
  if (tarefa.value == "") {
    alert("Por favor, digite uma tarefa antes de adicionar.");
  } else {
    if (tarefa.value.length > 15) {
      alert("A tarefa deve ter no máximo 15 caracteres.");
      return;
    }
    tarefaa();
    tarefa.value = "";
  }
});

function tarefaa() {
  const ul = document.querySelector("#tarefas ul");

  if (ul.children.length > 4) {
    alert("acesso cheio");
    return;
  }

  elementoscriados(ul);
}

//elementos criados
function elementoscriados(u) {
  const p = document.createElement("p");
  const div = document.createElement("div");
  const tabelaLi = document.createElement("li");

  u.style.listStyleType = "decimal";
  div.style.display = "flex";
  div.style.alignItems = "center";
  div.style.gap = "10px";

  p.textContent = tarefa.value;

  tabelaLi.appendChild(div);
  div.appendChild(p);
  div.appendChild(botaodeletar(tabelaLi));
  u.appendChild(tabelaLi);

  tarefasadd.appendChild(u);
  console.log(u.children.length);
}

function botaodeletar(tl) {
  const botao = document.createElement("button");

  botao.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 24 24" fill="white">
    <path d="M3 6h18v2H3V6zm2 3h14v13H5V9zm5 2v9h2v-9H10zm4 0v9h2v-9h-2z"/>
  </svg>
`;
  botao.id = "btndeletar";
  botao.addEventListener("click", () => {
    tl.remove();
  });

  return botao;
}
