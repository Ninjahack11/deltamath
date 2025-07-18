function solveExpression(input) {
  try {
    const result = math.evaluate(input);
    return result.toString();
  } catch (error) {
    console.error("Solve error:", error);
    return "Could not solve";
  }
}

function simplifyExpression(input) {
  try {
    return math.simplify(input).toString();
  } catch (error) {
    console.error("Simplify error:", error);
    return "Could not simplify";
  }
}

function derivativeOf(input, variable = "x") {
  try {
    return math.derivative(input, variable).toString();
  } catch (error) {
    console.error("Derivative error:", error);
    return "Could not compute derivative";
  }
}

// Makes functions available globally
window.solveExpression = solveExpression;
window.simplifyExpression = simplifyExpression;
window.derivativeOf = derivativeOf;

