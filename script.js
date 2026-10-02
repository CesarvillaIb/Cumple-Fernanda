document.addEventListener("DOMContentLoaded", function () {

    const boton = document.getElementById("openButton");
    const historia = document.getElementById("story");
    const continueButton = document.getElementById("continueButton");

    const fechaInicio = new Date(2023, 1, 14);


    // =========================
    // ABRIR SORPRESA
    // =========================

    boton.addEventListener("click", function () {

        historia.classList.remove("hidden");

        actualizarContador();

        historia.scrollIntoView({
            behavior: "smooth"
        });

    });


    // =========================
    // CONTADOR
    // =========================

    function actualizarContador() {

        const ahora = new Date();

        let años =
            ahora.getFullYear() -
            fechaInicio.getFullYear();

        let meses =
            ahora.getMonth() -
            fechaInicio.getMonth();

        let días =
            ahora.getDate() -
            fechaInicio.getDate();


        if (días < 0) {

            meses--;

            const ultimoDia =
                new Date(
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
    // BOTÓN CONTINUAR
    // =========================

    continueButton.addEventListener("click", function () {

        alert(
            "Aquí comenzará la siguiente parte de nuestra historia ❤️"
        );

    });

});
