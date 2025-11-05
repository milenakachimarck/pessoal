document.addEventListener('DOMContentLoaded', () => {
    const contatoFooter = document.querySelector('.whatsapp-contato');

    // Adiciona um evento de clique para simular a abertura do WhatsApp
    if (contatoFooter) {
        contatoFooter.addEventListener('click', () => {
            const numero = '5541999999999'; // Número sem hífens ou espaços
            const mensagem = 'Olá, Milena! Vi sua página e gostaria de mais informações.';
            
            // Abre o link do WhatsApp (para desktop ou mobile)
            window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`, '_blank');
        });

        // Efeito visual (opcional)
        contatoFooter.style.cursor = 'pointer';
        console.log('Interatividade WhatsApp carregada.');
    } else {
        console.error('Elemento de contato não encontrado.');
    }
});