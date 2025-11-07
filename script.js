// Exemplo: rolar suavemente para seções
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  });
});
