document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // ELEMENTOS DE LA PÁGINA
    // =========================
    const boton = document.getElementById("openButton");
    const historia = document.getElementById("story");
    const continueButton = document.getElementById("continueButton");
    const gallery = document.getElementById("gallery");

    // =========================
    // FECHA DE INICIO (Año, Mes, Día)
    // Nota: Los meses en JS van de 0 (Enero) a 11 (Diciembre)
    // 14 de Febrero de 2023 -> new Date(2023, 1, 14)
    // =========================
    const fechaInicio = new Date(2023, 1, 14);

    // =========================
    // ABRIR SORPRESA
    // =========================
    boton.addEventListener("click", function () {
        historia.classList.remove("hidden");
        actualizarContador();

        setTimeout(function () {
            historia.scrollIntoView({
                behavior: "smooth"
            });
        }, 100);
    });

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

        document.getElementById("years").textContent = años;
        document.getElementById("months").textContent = meses;
        document.getElementById("days").textContent = días;
    }

    // =========================
    // BOTÓN CONTINUAR A GALERÍA
    // =========================
    continueButton.addEventListener("click", function () {
        gallery.classList.remove("hidden");

        setTimeout(function () {
            gallery.scrollIntoView({
                behavior: "smooth"
            });
        }, 100);
    });

});
