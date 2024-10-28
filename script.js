document.addEventListener('DOMContentLoaded', () => {
    const pdfLinks = document.querySelectorAll('.preview a');
    const loadingScreen = document.getElementById('loadingScreen');
    const loadingMessage = document.getElementById('loadingMessage');

    pdfLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            // Gera um número aleatório de 1 a 10 para a posição na fila
            const queueNumber = Math.floor(Math.random() * 10) + 1;
            loadingMessage.innerText = `Você é o número ${queueNumber} na fila...`;

            // Mostra a tela de carregamento
            loadingScreen.style.display = 'flex';

            // Simula um tempo de espera antes de redirecionar para o PDF
            setTimeout(() => {
                window.open(link.getAttribute('data-link'), '_blank');
                loadingScreen.style.display = 'none';
            }, 3000);
        });
    });
});
