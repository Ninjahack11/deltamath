// This runs on DeltaMath pages and tries to auto-fill answers

setInterval(() => {
  const questionElement = document.querySelector(".question-text"); // Update selector if needed
  const answerInput = document.querySelector("input[type='text']");

  if (questionElement && answerInput) {
    const questionText = questionElement.innerText.trim();

    if (questionText.length > 0) {
      const result = solveExpression(questionText); // Assumes solver.js is loaded
      if (result) {
        answerInput.value = result;
      }
    }
  }
}, 1000); // Repeats every second

