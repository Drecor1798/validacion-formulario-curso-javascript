const submitFunction = (event) => {


    if (!validarFormulario()) {
        event.preventDefault();
    } else {
        event.preventDefault();
        alert(
            'Los datos enviados fueron: \n' +
            'Nombre: ' + document.getElementById('nombre').value + '\n' +
            'Apellido: ' + document.getElementById('apellido').value + '\n' +
            'Documento: ' + document.getElementById('documento').value + '\n' +
            'Email: ' + document.getElementById('email').value + '\n' +
            'Edad: ' + document.getElementById('edad').value + '\n' +
            'Actividad: ' + document.getElementById('actividad').value + '\n' +
            'Nivel de estudio: ' + document.getElementById('nivelEstudio').value + '\n'
        );
    }
};

document.getElementById('formulario').addEventListener('submit', submitFunction); // Escuchar el envío del formulario

function validarFormulario() {
    let campoTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;

    campoTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1));
        if (campo.value.length === 0) {
            mostrarError(errorCampo, '¡Este campo es requerido!');
            validacionCorrecta = false;
        } else if (campo.value.length < 3) {
            mostrarError(errorCampo, '¡Este campo debe tener al menos 3 caracteres!');
            validacionCorrecta = false;
        } else {
            ocultarError(errorCampo);
        }
    });

    let email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        mostrarError(errorEmail, '¡Ingrese un correo electrónico válido!');
        validacionCorrecta = false;
    } else {
        ocultarError(errorEmail);
    }

    const edad = document.getElementById('edad');
    const errorEdad = document.getElementById('errorEdad');
    if (edad.value < 18) {
        mostrarError(errorEdad, '¡Debes ser mayor de edad para registrarte!');
        validacionCorrecta = false;
    } else {
        ocultarError(errorEdad);
    }

    const actividad = document.getElementById('actividad');
    const errorActividad = document.getElementById('errorActividad');
    if (actividad.value === '') {
        mostrarError(errorActividad, 'Por favor, selecciona una actividad');
        validacionCorrecta = false; // Marcar la validación como incorrecta
    } else {
        ocultarError(errorActividad);
    }

    const nivelEstudio = document.getElementById('nivelEstudio');
    const errorNivelEstudio = document.getElementById('errorNivelEstudio');
    if (nivelEstudio.value === '') {
        mostrarError(errorNivelEstudio, 'Por favor, selecciona un nivel de estudio');
        validacionCorrecta = false; // Marcar la validación como incorrecta
    } else {
        ocultarError(errorNivelEstudio);
    }

    const aceptoTerminos = document.getElementById('aceptoTerminos');
    const erroraceptoTerminos = document.getElementById('erroraceptoTerminos');
    if (!aceptoTerminos.checked) {
        mostrarError(erroraceptoTerminos, '¡Debes aceptar los términos y condiciones!');
        validacionCorrecta = false; // Marcar la validación como incorrecta
    } else {
        ocultarError(erroraceptoTerminos);
    }

    return validacionCorrecta; // Devolver el estado de la validación
}

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
};

const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = "none";
};