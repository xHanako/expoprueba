function evaluarCuestionario() {
    const username = document.getElementById("username").value.trim();
    if (!username) {
        alert("Por favor, ingresa tu nombre antes de responder el cuestionario.");
        return;
    }

    const respuestasCorrectas = {
        q1: ['a'],
        q2: ['a'],
        q3: ['a'],
        q4: ['a'],
        q5: ['a'],
        q6: ['a'],
        q7: ['a']
    };

    const preguntas = Object.keys(respuestasCorrectas);

    preguntas.forEach(pregunta => {
        const checkboxes = document.querySelectorAll(`input[name="${pregunta}"]`);
        const seleccionadas = Array.from(checkboxes).filter(chk => chk.checked).map(chk => chk.value);
        const container = checkboxes[0].closest('.question');

        if (arraysIguales(seleccionadas, respuestasCorrectas[pregunta])) {
            container.classList.remove("incorrect");
            container.classList.add("correct");
        } else {
            container.classList.remove("correct");
            container.classList.add("incorrect");
        }
    });
}

function arraysIguales(a, b) {
    if (a.length !== b.length) return false;
    const sortedA = [...a].sort();
    const sortedB = [...b].sort();
    return sortedA.every((val, index) => val === sortedB[index]);
}
