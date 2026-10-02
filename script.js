document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // SELECCIÓN DE ELEMENTOS DEL DOM
    // ==========================================
    const openButton = document.getElementById("openButton");
    const letterButton = document.getElementById("letterButton");
    const planButton = document.getElementById("planButton");
    const continueButton = document.getElementById("continueButton");
    const yesButton = document.getElementById("yesButton");

    const storySection = document.getElementById("story");
    const letterSection = document.getElementById("letter");
    const planSection = document.getElementById("plan");
    const gallerySection = document.getElementById("gallery");

    // Fecha de inicio de la relación: 14 de Febrero de 2023
    const fechaInicio = new Date(2023, 1, 14);

    // ==========================================
    // FUNCIÓN DEL CONTADOR
    // ==========================================
    function actualizarContador() {
        const ahora = new Date();

        let años = ahora.getFullYear() - fechaInicio.getFullYear();
        let meses = ahora.getMonth() - fechaInicio.getMonth();
        let días = ahora.getDate() - fechaInicio.getDate();

        if (días < 0) {
            meses--;
            const ultimoDia = new Date(ahora.getFullYear(), ahora.getMonth(), 0).getDate();
            días += ultimoDia;
        }

        if (meses < 0) {
            años--;
            meses += 12;
        }

        const y = document.getElementById("years");
        const m = document.getElementById("months");
        const d = document.getElementById("days");

        if (y) y.textContent = años;
        if (m) m.textContent = meses;
        if (d) d.textContent = días;
    }

    // ==========================================
    // CONTROLADORES DE EVENTOS
    // ==========================================

    // 1. Abrir Historia
    if (openButton && storySection) {
        openButton.addEventListener("click", function () {
            storySection.classList.remove("hidden");
            actualizarContador();
            setTimeout(() => {
                storySection.scrollIntoView({ behavior: "smooth" });
            }, 100);
        });
    }

    // 2. Abrir Carta
    if (letterButton && letterSection) {
        letterButton.addEventListener("click", function () {
            letterSection.classList.remove("hidden");
            setTimeout(() => {
                letterSection.scrollIntoView({ behavior: "smooth" });
            }, 100);
        });
    }

    // 3. Abrir Plan
    if (planButton && planSection) {
        planButton.addEventListener("click", function () {
            planSection.classList.remove("hidden");
            setTimeout(() => {
                planSection.scrollIntoView({ behavior: "smooth" });
            }, 100);
        });
    }

    // 4. Abrir Galería
    if (continueButton && gallerySection) {
        continueButton.addEventListener("click", function () {
            gallerySection.classList.remove("hidden");
            setTimeout(() => {
                gallerySection.scrollIntoView({ behavior: "smooth" });
            }, 100);
        });
    }

    // ==========================================
    // CONFIRMACIÓN DE CUMPLEAÑOS Y WHATSAPP
    // ==========================================
    if (yesButton) {
        yesButton.addEventListener("click", function () {
            
            // 1. Cambiar estado visual del botón
            yesButton.classList.add("confirmed");
            yesButton.innerHTML = "¡Lista! Notificando a tu novio... 🚗❤️";

            // 2. Lluvia de corazones animados
            crearLluviaDeCorazones();

            // 3. Abrir WhatsApp tras la animación
            setTimeout(function () {
                // Coloca tu número de teléfono real a 10 dígitos (ejemplo para México: 523312345678)
                const miNumero = "523142478637"; 
                const mensaje = encodeURIComponent("¡Ya vi mi sorpresa de cumpleaños amor! 😍 Estaré listísima a las 2:00 PM para irnos a Cajititlán ❤️️✨");
                
                window.open(`https://wa.me/${miNumero}?text=${mensaje}`, "_blank");
            }, 1200);

        });
    }

    // Función para crear la animación de corazones que flotan hacia arriba
    function crearLluviaDeCorazones() {
        const simbolos = ["❤️", "💖", "✨", "💕", "🎂", "🌸"];
        
        for (let i = 0; i < 25; i++) {
            setTimeout(() => {
                const heart = document.createElement("div");
                heart.classList.add("floating-heart");
                heart.innerText = simbolos[Math.floor(Math.random() * simbolos.length)];
                
                heart.style.left = Math.random() * 100 + "vw";
                heart.style.animationDuration = (Math.random() * 1.5 + 2) + "s";
                
                document.body.appendChild(heart);

                setTimeout(() => {
                    heart.remove();
                }, 3500);
            }, i * 120);
        }
    }

});
