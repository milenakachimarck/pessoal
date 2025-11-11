
    document.addEventListener('DOMContentLoaded', () => {
    // ... Código para o modal da foto de perfil ...

    // --- CÓDIGO DE ROLAGEM COMEÇA AQUI ---
    const header = document.querySelector('header');
    const heroHeight = window.innerHeight * 0.8; // Cerca de 80% da tela

    window.addEventListener('scroll', () => {
        // Se a posição da rolagem for maior que 80% da altura da tela
        if (window.scrollY > heroHeight) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)'; // Fundo quase opaco
            header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)'; // Sombra
        } else {
            header.style.backgroundColor = '#ffffff'; // Volta para branco
            header.style.boxShadow = 'none';
        }
    });
    // --- CÓDIGO DE ROLAGEM TERMINA AQUI ---
});

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
    