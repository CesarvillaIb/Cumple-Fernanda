document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // SELECCIÓN DE ELEMENTOS DEL DOM
    // ==========================================
    const openButton = document.getElementById("openButton");
    const letterButton = document.getElementById("letterButton");
    const planButton = document.getElementById("planButton");
    const continueButton = document.getElementById("continueButton");

    const storySection = document.getElementById("story");
    const letterSection = document.getElementById("letter");
    const planSection = document.getElementById("plan");
    const gallerySection = document.getElementById("gallery");

    // Fecha de inicio de su relación: 14 de Febrero de 2023
    const fechaInicio = new Date(2023, 1, 14); // Nota: En JS los meses van de 0 a 11 (1 es Febrero)

    // ==========================================
    // FUNCIÓN PARA CALCULAR Y MOSTRAR EL TIEMPO
    // ==========================================
    function actualizarContador() {
        const ahora = new Date();

        let años = ahora.getFullYear() - fechaInicio.getFullYear();
        let meses = ahora.getMonth() - fechaInicio.getMonth();
        let días = ahora.getDate() - fechaInicio.getDate();

        if (días < 0) {
            meses--;
            const ultimoDiaMesAnterior = new Date(ahora.getFullYear(), ahora.getMonth(), 0).getDate();
            días += ultimoDiaMesAnterior;
        }

        if (meses < 0) {
            años--;
            meses += 12;
        }

        const yearsElem = document.getElementById("years");
        const monthsElem = document.getElementById("months");
        const daysElem = document.getElementById("days");

        if (yearsElem) yearsElem.textContent = años;
        if (monthsElem) monthsElem.textContent = meses;
        if (daysElem) daysElem.textContent = días;
    }

    // ==========================================
    // CONTROLADORES DE EVENTOS (CLICS DE BOTONES)
    // ==========================================

    // 1. Clic en "Abrir tu sorpresa ♡" -> Muestra Historia / Contador
    if (openButton && storySection) {
        openButton.addEventListener("click", function () {
            storySection.classList.remove("hidden");
            actualizarContador();
            
            setTimeout(function () {
                storySection.scrollIntoView({ behavior: "smooth" });
            }, 100);
        });
    }

    // 2. Clic en "Leer mi carta para ti 💌" -> Muestra La Carta
    if (letterButton && letterSection) {
        letterButton.addEventListener("click", function () {
            letterSection.classList.remove("hidden");

            setTimeout(function () {
                letterSection.scrollIntoView({ behavior: "smooth" });
            }, 100);
        });
    }

    // 3. Clic en "Ver tu regalo de cumpleaños 🎁" -> Muestra El Plan de Hoy
    if (planButton && planSection) {
        planButton.addEventListener("click", function () {
            planSection.classList.remove("hidden");

            setTimeout(function () {
                planSection.scrollIntoView({ behavior: "smooth" });
            }, 100);
        });
    }

    // 4. Clic en "Ver nuestros recuerdos ♡" -> Muestra La Galería
    if (continueButton && gallerySection) {
        continueButton.addEventListener("click", function () {
            gallerySection.classList.remove("hidden");

            setTimeout(function () {
                gallerySection.scrollIntoView({ behavior: "smooth" });
            }, 100);
        });
    }

});
