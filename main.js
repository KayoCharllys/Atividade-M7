
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');

var elemento = document.getElementById("text-correct")

document.getElementById('meuform').addEventListener('submit', (e) => {

  e.preventDefault();

  const valueA = parseInt(campoA.value, 10);
  const valueB = parseInt(campoB.value, 10);

  if (valueB > valueA) {
    alert('CORRETO, O CAMPO B É MAIOR QUE O CAMPO A')
    e.target.submit();
  } else {
    alert('ERRADO, O CAMPO A É MAIOR/IGUAL O CAMPO B');
  }
});