document.addEventListener("DOMContentLoaded", function() {
    const whatsappBtn = document.querySelector(".whatsapp-btn");
    
    whatsappBtn.addEventListener("mouseover", function() {
        whatsappBtn.style.transform = "scale(1.2)";
    });

    whatsappBtn.addEventListener("mouseleave", function() {
        whatsappBtn.style.transform = "scale(1)";
    });
});
