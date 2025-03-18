// Função para gerar confetes
function gerarConfetes() {
    const cores = ['#ff6347', '#ffd700', '#adff2f', '#ff1493', '#1e90ff', '#9400d3'];
    const formas = ['circle', 'square', 'triangle'];

    for (let i = 0; i < 50; i++) {
        const confete = document.createElement('div');
        confete.classList.add('confete');
        confete.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
        
        // Forma aleatória (círculo, quadrado ou triângulo)
        const forma = formas[Math.floor(Math.random() * formas.length)];
        if (forma === 'circle') {
            confete.style.borderRadius = '50%';
        } else if (forma === 'square') {
            confete.style.borderRadius = '0%';
        } else if (forma === 'triangle') {
            confete.style.width = '0';
            confete.style.height = '0';
            confete.style.borderLeft = '5px solid transparent';
            confete.style.borderRight = '5px solid transparent';
            confete.style.borderBottom = '10px solid ' + confete.style.backgroundColor;
        }

        // Posição aleatória
        confete.style.left = Math.random() * 100 + 'vw';
        confete.style.animationDuration = Math.random() * 2 + 3 + 's';

        document.body.appendChild(confete);

        // Remover confete após a animação
        setTimeout(() => {
            confete.remove();
        }, 5000);
    }
}

// Evento para o botão "Sim"
document.getElementById('simBtn').addEventListener('click', () => {
    gerarConfetes();
});

// Evento para o botão "Não"
document.getElementById('naoBtn').addEventListener('click', () => {
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    
    // Teleporta o botão "Não" para um lugar aleatório
    document.getElementById('naoBtn').style.position = 'absolute';
    document.getElementById('naoBtn').style.left = randomX + 'px';
    document.getElementById('naoBtn').style.top = randomY + 'px';
});
