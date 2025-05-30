document.getElementById("quiz-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  if (username === "") {
    alert("Por favor, ingresa tu nombre antes de enviar el cuestionario.");
    return;
  }

  const correctAnswers = {
    q1: "c",
    q2: "b",
    q3: "a",
    q4: "c",
    q5: "a",
    q6: "a",
    q7: "c"
  };

  Object.keys(correctAnswers).forEach((question) => {
    const options = document.getElementsByName(question);
    options.forEach((option) => {
      const parentLabel = option.parentElement;
      parentLabel.classList.remove("correct", "incorrect");
      if (option.checked) {
        if (option.value === correctAnswers[question]) {
          parentLabel.classList.add("correct");
        } else {
          parentLabel.classList.add("incorrect");
        }
      }
    });
  });
});
