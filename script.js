document.addEventListener("DOMContentLoaded", function () {
    const comentarios = [
        { nombre: "ClaudiaGbet", mensaje: "Excelente casino, pagos rápidos y seguros." },
        { nombre: "JuanGbet", mensaje: "Me encanta el bono del 200%, es increíble!" },
        { nombre: "SofiaGbet", mensaje: "Retiré mis ganancias sin problemas, 100% confiable." },
        { nombre: "MatiasGbet", mensaje: "Juegos divertidos y muchas oportunidades de ganar." }
    ];

    const comentariosSection = document.getElementById("comentarios");
    
    comentarios.forEach(comentario => {
        let div = document.createElement("div");
        div.classList.add("comentario");
        div.innerHTML = `<strong>${comentario.nombre}:</strong> ${comentario.mensaje}`;
        comentariosSection.appendChild(div);
    });
});
