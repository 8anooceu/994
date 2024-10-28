window.onload = function() {
  // Obtém o nome do dispositivo e personaliza a saudação
  const userDeviceName = navigator.userAgentData ? navigator.userAgentData.brands[0].brand : "Visitante";
  document.getElementById('saudacao').textContent = `Olá, ${userDeviceName}!`;
};

function abrirPDF(pdf) {
  // Abre o PDF em uma nova aba para visualização em tela cheia
  window.open(pdf, '_blank');
}
