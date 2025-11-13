
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

// 1. Defina o elemento alvo
const cursoHero = document.getElementById('cursotec-hero');

// 2. A lista de 8 imagens (MUDE OS NOMES DOS ARQUIVOS!)
// As imagens devem estar na mesma pasta ou o caminho deve ser ajustado.
const cursoImages = [
    'tec1.jpg',
    'te2.jpg',
    'tec3.jpg',
    'tec4.jpg',
    'tec5.jpg',
    'tec6.jpg',
    'tec7.jpg',
    'tec8.jpg'
];

let cursoImageIndex = 0;

// 3. Verifica se estamos na página correta
if (cursoHero) {
    
    function changeCursoBackground() {
        // Avança para o próximo índice
        cursoImageIndex++;
        
        // Se for o último, volta para o primeiro (loop infinito)
        if (cursoImageIndex >= cursoImages.length) {
            cursoImageIndex = 0;
        }
        
        const nextImage = cursoImages[cursoImageIndex];
        
        // Aplica a nova imagem de fundo
        cursoHero.style.backgroundImage = `url(${nextImage})`;
    }

    // Inicia o carrossel, mudando a imagem a cada 5 segundos (5000ms)
    setInterval(changeCursoBackground, 5000); 
}
});
    