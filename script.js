// Exemplo simples: Mudar o estilo do cabeçalho ao rolar a página

const header = document.querySelector('header');
const heroHeight = window.innerHeight * 0.8; // Cerca de 80% da tela

window.addEventListener('scroll', () => {
    // Se a posição da rolagem for maior que 80% da altura da tela
    if (window.scrollY > heroHeight) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)'; // Quase opaco
        header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = '#ffffff'; // Volta para branco
        header.style.boxShadow = 'none';
    }
});