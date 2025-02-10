document.addEventListener("DOMContentLoaded", function () {
    // Animación de brillo para el botón de WhatsApp
    const whatsappBtn = document.querySelector(".whatsapp-btn");
    if (whatsappBtn) {
        setInterval(() => {
            whatsappBtn.classList.toggle("brillo");
        }, 1000);
    }

    // Seguimiento de clics en el botón de WhatsApp con Meta Pixel
    whatsappBtn.addEventListener("click", function () {
        if (typeof fbq !== "undefined") {
            fbq("track", "Contact", { method: "WhatsApp" });
        }
    });

    // Seguimiento de vista en la sección de promoción
    const promoSection = document.querySelector(".promocion");
    if (promoSection) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (typeof fbq !== "undefined") {
                        fbq("track", "ViewPromotion");
                    }
                    observer.disconnect();
                }
            });
        }, { threshold: 0.5 });
        observer.observe(promoSection);
    }
});
