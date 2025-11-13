
document.addEventListener('DOMContentLoaded', () => {
     
    
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modal-img");
    const profileImg = document.getElementById("profile-img");
    const closeBtn = document.getElementsByClassName("close-btn")[0];
    if (profileImg) {
        // 1. ABRIR O MODAL ao clicar na foto de perfil
        profileImg.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src; 
            modalImg.alt = this.alt;
        }
    }
    // 2. FECHAR O MODAL ao clicar no "x"
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }
    }
    // 3. FECHAR O MODAL ao clicar fora da imagem
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

// --- CARROSSEL DE FUNDO: CURSO TÉCNICO (8 FOTOS) ---

// --- CARROSSEL DE FUNDO: CURSO TÉCNICO (8 FOTOS) ---
const cursoHero = document.getElementById('cursotec-hero');

// 1. A lista de 8 imagens (VERIFIQUE OS NOMES!)
const cursoImages = [
    'tec1.jpg',
    'tec2.jpg',
    'tec3.jpg',
    'tec4.jpg',
    'tec5.jpg',
    'tec6.jpg',
    'tec7.jpg',
    'tec8.jpg'
];

let cursoImageIndex = 0;

if (cursoHero) {
    
    function changeCursoBackground() {
        // ... Lógica de troca de imagem ...
        cursoImageIndex = (cursoImageIndex + 1) % cursoImages.length;
        const nextImage = cursoImages[cursoImageIndex];
        cursoHero.style.backgroundImage = `url(${nextImage})`;
    }

    // 2. Pré-carregamento das imagens
    let imagesLoaded = 0;
    cursoImages.forEach(imagePath => {
        const img = new Image();
        img.onload = () => {
            // Conta as imagens que terminaram de carregar
            imagesLoaded++;
            if (imagesLoaded === cursoImages.length) {
                // Todas as 8 imagens carregaram. Agora podemos iniciar o carrossel.
                setInterval(changeCursoBackground, 2000); 
            }
        };
        // Inicia o carregamento da imagem
        img.src = imagePath;
    });
    
    // Se, por algum motivo (como caching), o onload não disparar imediatamente,
    // garantimos que a primeira imagem já esteja visível pelo CSS (Etapa 1).
}
// --- FIM DO CÓDIGO DE CARROSSEL ---
});
    // --- INTERATIVIDADE JAVASCRIPT PARA HOVER LIGHTBOX (PÁGINA AMIGOS) ---

const lightboxItems = document.querySelectorAll('.hover-lightbox');

if (lightboxItems.length > 0) {
    lightboxItems.forEach(item => {
        
        // Evento: Mouse entra no elemento (HOVER ON)
        item.addEventListener('mouseenter', () => {
            // Adiciona a classe que aplica o zoom e z-index alto via CSS
            item.classList.add('is-hovered'); 
        });

        // Evento: Mouse sai do elemento (HOVER OFF)
        item.addEventListener('mouseleave', () => {
            // Remove a classe para que a imagem volte ao normal
            item.classList.remove('is-hovered');
        });
    });
}
// --- FIM DO CÓDIGO HOVER LIGHTBOX JS ---