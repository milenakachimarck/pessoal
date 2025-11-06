// Exemplo: mostra uma mensagem quando clicar em um botão
const botoes = document.querySelectorAll(".botoes button");

botoes.forEach(btn => {
  btn.addEventListener("click", () => {
    alert(`Você clicou em "${btn.textContent}"`);
  });
});
