// ======================================
// ELEMENTOS
// ======================================

const inicio =
    document.getElementById("inicio");

const historia =
    document.getElementById("historia");

const final =
    document.getElementById("final");

const abrirBtn =
    document.getElementById("abrirBtn");

const continuarBtn =
    document.getElementById("continuarBtn");

const mensaje =
    document.getElementById("mensaje");

const numero =
    document.getElementById("numero");

const estrellas =
    document.getElementById("estrellas");


// ======================================
// MENSAJES
// ======================================

const mensajes = [

    "Hay personas que llegan a nuestra vida... y sin darnos cuenta empiezan a hacerla más bonita.",

    "Y luego estás tú... que de alguna manera lograste convertir momentos normales en recuerdos que quiero guardar.",

    "Me gusta tu forma de ser, tu manera de sonreír y hasta esas pequeñas cosas que probablemente tú ni siquiera notas.",

    "No sé qué nos depare el futuro... pero sé que me gusta compartir mi presente contigo.",

    "Y si tuviera que explicar por qué hice todo esto... probablemente solo diría que tú vales la pena."
];


// ======================================
// ESTADO
// ======================================

let paso = 0;


// ======================================
// ESTRELLAS
// ======================================

function crearEstrellas() {

    for (let i = 0; i < 80; i++) {

        const estrella =
            document.createElement("span");

        estrella.classList.add("estrella");

        estrella.style.left =
            Math.random() * 100 + "%";

        estrella.style.top =
            Math.random() * 100 + "%";

        estrella.style.animationDelay =
            Math.random() * 4 + "s";

        const tamaño =
            Math.random() * 3 + 1;

        estrella.style.width =
            tamaño + "px";

        estrella.style.height =
            tamaño + "px";

        estrellas.appendChild(estrella);
    }
}

crearEstrellas();


// ======================================
// ABRIR
// ======================================

abrirBtn.addEventListener("click", () => {

    inicio.style.opacity = "0";
    inicio.style.transform = "scale(1.05)";

    setTimeout(() => {

        inicio.classList.add("oculto");

        historia.classList.remove("oculto");

        mostrarPaso();

    }, 1200);

});


// ======================================
// MOSTRAR PASO
// ======================================

function mostrarPaso() {

    mensaje.style.animation = "none";

    void mensaje.offsetWidth;

    mensaje.style.animation =
        "aparecerMensaje .9s ease";

    numero.textContent =
        `0${paso + 1}`;

    mensaje.textContent =
        mensajes[paso];


    // Activar punto

    const puntos =
        document.querySelectorAll(".punto");

    puntos.forEach((punto, index) => {

        punto.classList.toggle(
            "activo",
            index === paso
        );

    });


    // Botón

    if (paso === mensajes.length - 1) {

        continuarBtn.innerHTML =
            `Ver mi sorpresa <span>♥</span>`;

    } else {

        continuarBtn.innerHTML =
            `Continuar <span>→</span>`;

    }
}


// ======================================
// CONTINUAR
// ======================================

continuarBtn.addEventListener(
    "click",
    () => {

        // Si todavía quedan mensajes

        if (paso < mensajes.length - 1) {

            paso++;

            animarCamino();

            setTimeout(() => {

                mostrarPaso();

            }, 650);

        }

        // Último paso

        else {

            mostrarRosa();

        }

    }
);


// ======================================
// ANIMACIÓN DEL CAMINO
// ======================================

function animarCamino() {

    const camino =
        document.getElementById(
            "camino-visible"
        );

    camino.animate(
        [
            {
                strokeDashoffset: "0"
            },

            {
                strokeDashoffset: "-120"
            }
        ],
        {
            duration: 700,
            easing: "ease-in-out"
        }
    );

}


// ======================================
// MOSTRAR ROSA
// ======================================

function mostrarRosa() {

    historia.style.opacity = "0";

    setTimeout(() => {

        historia.classList.add("oculto");

        final.classList.remove("oculto");

    }, 1200);

}