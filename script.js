
document.addEventListener('DOMContentLoaded', () => {
    // 1. Elementos do Modal
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modal-img");
    const profileImg = document.getElementById("profile-img");
    const closeBtn = document.getElementsByClassName("close-btn")[0];

    if (profileImg) {
        // 2. ABRIR O MODAL ao clicar na foto de perfil
        profileImg.onclick = function() {
            modal.style.display = "block";
            
            // Define o src e o alt da imagem grande
            modalImg.src = this.src; 
            modalImg.alt = this.alt;
        }
    }

    // 3. FECHAR O MODAL ao clicar no "x"
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }
    }

    // 4. FECHAR O MODAL ao clicar fora da imagem
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
    // --- SEU CÓDIGO DE SCROLL CONTINUA AQUI ---
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
    