document.addEventListener('DOMContentLoaded', () => {

    // -----------------------------------------------------
    // 1. CÓDIGO DO MODAL (FOTO DE PERFIL) E SCROLL DA HEADER
    // -----------------------------------------------------
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

    const header = document.querySelector('header');
    // Usando uma altura fixa em vez de 'window.innerHeight * 0.8' para evitar erros de cálculo
    const heroHeight = 500; 

    window.addEventListener('scroll', () => {
        if (window.scrollY > heroHeight) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = '#ffffff';
            header.style.boxShadow = 'none';
        }
    });

    // ----------------------------------------------------------------------
    // 2. CARROSSEL DE FUNDO: CURSO TÉCNICO (8 FOTOS) - Agendado para funcionar
    // ----------------------------------------------------------------------
    const cursoHero = document.getElementById('cursotec-hero');

    const cursoImages = [
        'tec1.jpg', 'tec2.jpg', 'tec3.jpg', 'tec4.jpg', 
        'tec5.jpg', 'tec6.jpg', 'tec7.jpg', 'tec8.jpg'
    ];
    let cursoImageIndex = 0;

    if (cursoHero) {
        function changeCursoBackground() {
            cursoImageIndex = (cursoImageIndex + 1) % cursoImages.length;
            const nextImage = cursoImages[cursoImageIndex];
            cursoHero.style.backgroundImage = `url(${nextImage})`;
        }
        
        let imagesLoaded = 0;
        cursoImages.forEach(imagePath => {
            const img = new Image();
            img.onload = () => {
                imagesLoaded++;
                if (imagesLoaded === cursoImages.length) {
                    // Inicia o carrossel após o carregamento completo
                    setInterval(changeCursoBackground, 2000); 
                }
            };
            img.src = imagePath;
        });
    }

    // ----------------------------------------------------------------------
    // 3. HOVER LIGHTBOX (PÁGINA AMIGOS) - CORRIGIDO
    // ----------------------------------------------------------------------
    const lightboxItems = document.querySelectorAll('.hover-lightbox');

    if (lightboxItems.length > 0) {
        lightboxItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.classList.add('is-hovered'); 
            });

            item.addEventListener('mouseleave', () => {
                item.classList.remove('is-hovered');
            });
        });
    }

    // ----------------------------------------------------------------------
    // 4. STACKING CAROUSEL (PÁGINA FAMÍLIA) - CORRIGIDO
    // ----------------------------------------------------------------------
    const stackBtnFamilia = document.getElementById('next-stack-btn-familia');
    const stackCarouselFamilia = document.querySelector('.stack-carousel-familia');

    if (stackCarouselFamilia && stackBtnFamilia) {
        const cardsFamilia = stackCarouselFamilia.querySelectorAll('.stack-card-familia');
        let currentIndexFamilia = 0; 

        if (cardsFamilia.length < 2) {
            stackBtnFamilia.style.display = 'none';
            return;
        }

        // Função para tratar o clique no botão
        stackBtnFamilia.addEventListener('click', () => {
            
            const currentCard = cardsFamilia[currentIndexFamilia];
            
            currentIndexFamilia = (currentIndexFamilia + 1) % cardsFamilia.length;
            const nextCard = cardsFamilia[currentIndexFamilia];

            currentCard.classList.remove('active-familia');
            currentCard.classList.add('is-leaving-familia');
            
            nextCard.classList.add('active-familia');

            setTimeout(() => {
                currentCard.classList.remove('is-leaving-familia');
                
                stackCarouselFamilia.appendChild(currentCard); 
                
                // Reset visual da carta que saiu
                currentCard.style.transition = 'none'; 
                currentCard.style.transform = ''; 
                currentCard.style.opacity = '1';
                currentCard.style.zIndex = '1'; 
                
                setTimeout(() => {
                    currentCard.style.transition = '';
                }, 50);

            }, 600); 
        });
    }
});