document.addEventListener("DOMContentLoaded", () => {
    const saudacao = document.getElementById("saudacao");

    // Obtém o nome do dispositivo se disponível e exibe
    let deviceName = navigator.userAgentData?.brands[1]?.brand || navigator.userAgentData?.brands[0]?.brand || "Visitante";
    saudacao.textContent = `Olá, ${deviceName}!`;

function abrirPDF(pdf) {
  // Abre o PDF em uma nova aba para visualização em tela cheia
  window.open(pdf, '_blank');
}
