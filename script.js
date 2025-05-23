const form = document.getElementById('formAgendamento');
const lista = document.getElementById('listaAgendamentos');
const proximo = document.getElementById('proximoCliente');
let agendamentos = [];

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const placa = document.getElementById('placa').value.trim();

  if (nome && placa) {
    agendamentos.push({ nome, placa });
    atualizarLista();
    form.reset();
  }
});

function atualizarLista() {
  lista.innerHTML = '';
  agendamentos.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${item.nome} - ${item.placa}`;
    lista.appendChild(li);
  });

  if (agendamentos.length > 0) {
    proximo.textContent = `${agendamentos[0].nome} (${agendamentos[0].placa})`;
  } else {
    proximo.textContent = "Aguardando agendamentos...";
  }
}
