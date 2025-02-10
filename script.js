document.addEventListener("DOMContentLoaded", function () {
    const whatsappBtn = document.querySelector(".whatsapp-btn");

    // Efecto al pasar el mouse sobre el botón de WhatsApp
    whatsappBtn.addEventListener("mouseover", function () {
        whatsappBtn.style.transform = "scale(1.1)";
    });

    whatsappBtn.addEventListener("mouseleave", function () {
        whatsappBtn.style.transform = "scale(1)";
    });

   
