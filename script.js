

document.addEventListener('DOMContentLoaded', () => {
    // ESTA LINHA AGORA VAI FUNCIONAR PORQUE VOCÊ ADICIONOU O ID NO HTML
    const profileImg = document.getElementById('profile-img');

    // Verifica se a imagem foi encontrada antes de adicionar o evento
    if (profileImg) {
        profileImg.addEventListener('click', () => {
            // Alterna a classe 'enlarged' ao ser clicado
            profileImg.classList.toggle('enlarged'); 
        });
    }

    // Seu código de scroll continua aqui...
    const header = document.querySelector('header');
    const heroHeight = window.innerHeight * 0.8; 

    window.addEventListener('scroll', () => {
        if (window.scrollY > heroHeight) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = '#ffffff';
            header.style.boxShadow = 'none';
        }
    });
});