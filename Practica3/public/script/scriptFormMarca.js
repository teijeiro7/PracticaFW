console.log("script loaded");
/* document.addEventListener("DOMContentLoaded", function () {
    
        return;

} */
const brandName = document.getElementById("marca");
const nameError = document.getElementById('errorNombre');
const checkBrandName = () => {
    if (brandName.value.trim() == '') {
        nameError.textContent = "El nombre no puede ser vacío";
    }
    if (brandName.value.charAt(0) !== brandName.value.charAt(0).toUpperCase()) {
        nameError.textContent = 'La primera letra del nombre tiene que ser mayúscula.';
    } else {
        nameError.textContent = "";
    }
}

brandName.addEventListener('input', checkBrandName);
document.addEventListener("submit", async function (event) {
    event.preventDefault();
    checkBrandName();

    const brandYear = document.getElementById("año");
    const yearError = document.getElementById('errorAno');

    if (brandYear.value = "") {
        nameError.textContent = "El año no puede ser vacío";
        return;
    } else if (brandYear.value < 1800 || brandYear.value > 2024) {
        yearError.textContent = "El año tiene que estar comprendido entre 1800 y 2024";
    }
    else {
        nameError.textContent = "";
    }

    const brandFounder = document.getElementById("nombre");
    const founderError = document.getElementById("errorFundador");

    if (brandFounder.value.trim() == '') {
        founderError.textContent = "El nombre no puede ser vacío";
        return;
    } else if (brandFounder.charAt(0) !== brandFounder.charAt(0).toUpperCase()) {
        founderError.textContent = 'La primera letra del nombre tiene que ser mayúscula.';
        return;
    } else {
        founderError.textContent = "";
    }

    const brandImage = document.getElementById("imagen");
    const imageError = document.getElementById("errorImagen");


    const brandWeb = document.getElementById("web");
    const webError = document.getElementById("errorWeb");

    if (brandWeb.value.trim() == '') {
        urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

        if (!urlRegex.test(brandWeb.value.trim())) {
            webError.textContent = 'Por favor, ingresa una URL válida.';
            return;
        }
    } else {
        nameError.textContent = "";
    }

    const brandPlayers = document.getElementById("colaborators");
    const errorPlayers = document.getElementById("errorPlayers");

    if (brandPlayers.value.trim() == '') {
        errorPlayers.textContent = "El nombre no puede ser vacío";
        return;
    } else if (brandPlayers.charAt(0) !== brandPlayers.charAt(0).toUpperCase()) {
        errorPlayers.textContent = 'La primera letra del nombre tiene que ser mayúscula.';
        return;
    } else {
        errorPlayers.textContent = "";
    }
});
