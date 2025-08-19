
function acessar() {
  const nome = document.getElementById('nomeAluno').value;
  if (nome.trim() === '') {
    alert('Por favor, digite seu nome.');
    return;
  }
  localStorage.setItem('nomeAluno', nome);
  localStorage.setItem('pontos', 0);
  window.location.href = 'menu.html';
}

function verificarNome() {
  const nome = localStorage.getItem('nomeAluno');
  if (!nome) {
    alert('Nome não encontrado. Redirecionando...');
    window.location.href = 'index.html';
  } else {
    document.getElementById('saudacao').textContent = 'Olá, ' + nome + '!';
  }
}
