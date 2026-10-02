document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // ELEMENTOS
    // =========================
    const openButton = document.getElementById("openButton");
    const story = document.getElementById("story");
    
    const letterButton = document.getElementById("letterButton");
    const letter = document.getElementById("letter");
    
    const planButton = document.getElementById("planButton");
    const plan = document.getElementById("plan");
    
    const continueButton = document.getElementById("continueButton");
    const gallery = document.getElementById("gallery");

    // =========================
    // FECHA DE INICIO (Año, Mes, Día)
    // 14 de Febrero de 2023 -> new Date(2023, 1, 14)
    // =========================
    const fechaInicio = new Date(2023, 1, 14);

    // =========================
    // EVENTOS DE NAVEGACIÓN
    // =========================

    // 1. Abrir Historia y Contador
    if (openButton && story) {
        openButton.addEventListener("click", function () {
            story.classList.remove("hidden");
            actualizarContador();

            setTimeout(function () {
                story.scrollIntoView({ behavior: "smooth" });
            }, 100);
        });
    }

    // 2. Abrir Carta (Solución al botón que no reaccionaba)
    if (letterButton && letter) {
        letterButton.addEventListener("click", function () {
            letter.classList.remove("hidden");

            setTimeout(function () {
                letter.scrollIntoView({ behavior: "smooth" });
            }, 100);
        });
    }

    // 3. Abrir Plan de Hoy (Regalo)
    if (planButton && plan) {
        planButton.addEventListener("click", function () {
            plan.classList.remove("hidden");

            setTimeout(function () {
                plan.scrollIntoView({ behavior: "smooth" });
            }, 100);
        });
    }

    // 4. Abrir Galería
    if (continueButton && gallery) {
        continueButton.addEventListener("click", function () {
            gallery.classList.remove("hidden");

            setTimeout(function () {
                gallery.scrollIntoView({ behavior: "smooth" });
            }, 100);
        });
    }

    // =========================
    // CONTADOR DE TIEMPO
    // =========================
    function actualizarContador() {
        const ahora = new Date();

        let años = ahora.getFullYear() - fechaInicio.getFullYear();
        let meses = ahora.getMonth() - fechaInicio.getMonth();
        let días = ahora.getDate() - fechaInicio.getDate();

        if (días < 0) {
            meses--;
            const ultimoDia = new Date(
                ahora.getFullYear(),
                ahora.getMonth(),
                0
            ).getDate();
            días += ultimoDia;
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

});
