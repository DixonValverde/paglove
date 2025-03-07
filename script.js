// Crear corazones flotantes
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    const animationDuration = Math.random() * 4 + 4;
    heart.style.animationDuration = animationDuration + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), animationDuration * 1000);
}

// Iniciar corazones
window.heartInterval = setInterval(createHeart, 500);

// Elementos del DOM
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const response = document.getElementById('response');
const container = document.querySelector('.container');

// Respuesta al decir "Sí"
yesBtn.addEventListener('click', () => {
    container.innerHTML = `
        <h1>¡SÍ, SOMOS CASADOS!</h1>
        <p>Mi amor, has hecho al moreno más feliz del mundo. Te prometo amor eterno, fidelidad y 17 cm de puro cariño. ¡Te amo con todo mi corazón!</p>
        <div class="ring">💍✨</div>
    `;
    document.body.style.background = 'linear-gradient(45deg, #ffeb3b, #ff9800)';
    clearInterval(window.heartInterval); // Limpiar intervalo anterior
    window.heartInterval = setInterval(createHeart, 200); // Más corazones para celebrar
});

// Respuesta al decir "No" (bucle divertido)
noBtn.addEventListener('click', showNoResponse);

function showNoResponse() {
    response.innerHTML = `
        <p>¿Estás segura, amor? Puedes perder a un preciosote moreno con 17 cm, ya sabes, fiel, leal y que te ama muchoo :3. ¡Piénsalo bien!</p>
        <button id="yesLoop">ACEPTO</button>
        <button id="noLoop">No acepto</button>
    `;
    response.classList.add('active');

    // Asignar eventos después de que los botones existan en el DOM
    const yesLoop = document.getElementById('yesLoop');
    const noLoop = document.getElementById('noLoop');

    yesLoop.addEventListener('click', () => {
        container.innerHTML = `
            <h1>¡SÍ, SOMOS CASADOS!</h1>
            <p>Mi amor, has hecho al moreno más feliz del mundo. Te prometo amor eterno, fidelidad y 17 cm de puro cariño. ¡Te amo con todo mi corazón!</p>
            <div class="ring">💍✨</div>
        `;
        document.body.style.background = 'linear-gradient(45deg, #ffeb3b, #ff9800)';
        clearInterval(window.heartInterval);
        window.heartInterval = setInterval(createHeart, 200);
        response.classList.remove('active'); // Ocultar la respuesta "No"
    });

    noLoop.addEventListener('click', () => {
        alert('¡No puedes escapar de este amor, mi reina! Vamos a intentarlo de nuevo...');
        showNoResponse(); // Llamar a la función para mantener el bucle
    });
}