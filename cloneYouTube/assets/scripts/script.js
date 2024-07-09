document.addEventListener('DOMContentLoaded', (event) => {
    // Seleciona todos os contêineres de vídeos
    const containerVideos = document.querySelectorAll('.container-video');
    
    containerVideos.forEach(container => {
        const thumbnail = container.querySelector('.thumbnail');
        const video = container.querySelector('.video');
        
        // Função será ativada após mouse ficar em cima do elemento 
        container.addEventListener('mouseenter', () => {
            thumbnail.style.display = 'none';
            video.style.display = 'block';
            video.play();
        });

        container.addEventListener('mouseleave', () => {
            video.pause();
            thumbnail.style.display = 'block';
            video.style.display = 'none';
        });
    });
});
