window.onload = function() {
  // Puxa o nome do dispositivo e personaliza a saudação
  const userDeviceName = navigator.userAgentData ? navigator.userAgentData.brands[0].brand : "Visitante";
  document.getElementById('saudacao').textContent = `Olá, ${userDeviceName}!`;
};
