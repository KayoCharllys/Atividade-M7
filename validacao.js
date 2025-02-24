document.getElementById("meu-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário
  
  let campoA = parseFloat(document.getElementById("campoA").value);
  let campoB = parseFloat(document.getElementById("campoB").value);
  
  if (campoB > campoA) {
      alert("Formulário enviado com sucesso!!!!");
      this.submit(); // Envia o Form se b > a
  } else {
      alert("O valor de B deve ser maior que A!!!!");
  } // Alerta se o a > b
});
