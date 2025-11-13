
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

// --- JAVASCRIPT PARA CARROSSEL EMPILHADO (PÁGINA FAMÍLIA) ---

const stackBtnFamilia = document.getElementById('next-stack-btn-familia');
const stackCarouselFamilia = document.querySelector('.stack-carousel-familia');

if (stackCarouselFamilia && stackBtnFamilia) {
    const cardsFamilia = stackCarouselFamilia.querySelectorAll('.stack-card-familia');
    let currentIndexFamilia = 0; // Índice da foto ativa

    if (cardsFamilia.length < 2) {
        stackBtnFamilia.style.display = 'none';
        return;
    }

    // Função para tratar o clique no botão
    stackBtnFamilia.addEventListener('click', () => {
        
        // 1. Identifica a carta que está no topo e vai sair
        const currentCard = cardsFamilia[currentIndexFamilia];
        
        // 2. Calcula o índice da próxima carta
        currentIndexFamilia = (currentIndexFamilia + 1) % cardsFamilia.length;
        const nextCard = cardsFamilia[currentIndexFamilia];

        // 3. Aplica a animação de saída na carta atual
        currentCard.classList.remove('active-familia');
        currentCard.classList.add('is-leaving-familia');
        
        // 4. Garante que a próxima carta se torne a ativa
        nextCard.classList.add('active-familia');

        // 5. Usa setTimeout para resetar a carta que saiu após a animação
        setTimeout(() => {
            currentCard.classList.remove('is-leaving-familia');
            
            // Move o elemento HTML para o final do contêiner 
            stackCarouselFamilia.appendChild(currentCard); 
            
            // Desativa/ativa a transição momentaneamente para resetar a posição sem o usuário ver
            currentCard.style.transition = 'none'; 
            
            currentCard.style.transform = ''; 
            currentCard.style.opacity = '1';
            currentCard.style.zIndex = '1'; 
            
            setTimeout(() => {
                currentCard.style.transition = '';
            }, 50);

        }, 600); // Tempo igual ao 'transition' do CSS (0.6s)
    });
}
// --- FIM DO CÓDIGO STACKING CAROUSEL FAMÍLIA ---