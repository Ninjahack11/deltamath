function calculate() {
  const input = document.getElementById("expression").value;
  const result = solveExpression(input);
  document.getElementById("output").innerText = result;
}

