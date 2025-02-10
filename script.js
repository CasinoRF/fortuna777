document.addEventListener("DOMContentLoaded", function () {
    console.log("Red Fortuna cargado correctamente.");

    // Simulación de comentarios en vivo
    const comentarios = [
        "SantiGBET: Retiré en 5 minutos, genial! 🎉",
        "LuciaGBET: La mejor plataforma que probé 🔥🔥🔥",
        "CarlosGBET: Discreción total y pagos instantáneos 💰",
        "MicaGBET: Siempre juego aquí, es seguro y confiable ✔️",
        "PedroGBET: Excelente atención, 100% recomendado 🎲"
    ];

    function mostrarComentarioAleatorio() {
        const nuevoComentario = document.createElement("div");
        nuevoComentario.classList.add("comentario");
        nuevoComentario.innerHTML = `<p><strong>${comentarios[Math.floor(Math.random() * comentarios.length)]}</strong></p>`;
        
        document.querySelector(".comentarios .cartel").appendChild(nuevoComentario);
        
        if (document.querySelectorAll(".comentario").length > 5) {
            document.querySelector(".comentarios .cartel").removeChild(document.querySelector(".comentarios .cartel").firstChild);
        }
    }

    setInterval(mostrarComentarioAleatorio, 5000);
});
