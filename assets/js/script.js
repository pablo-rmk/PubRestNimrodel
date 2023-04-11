//Modificacion de visibilización de formularios
let elemento = document.getElementsByClassName('formulario');

let mostrarContacto = () => elemento[0].style.display = 'block';
let mostrarReserva = () => elemento[1].style.display = 'block';
let ocultarContacto = () => elemento[0].style.display = 'none';
let ocultarReserva = () => elemento[1].style.display = 'none';

//Alerta en formulario contacto
let alertaContacto = () => {

    let nombre = document.getElementById('nombreContacto').value;
    let correo = document.getElementById('emailContacto').value;
    return alert(`Muchas gracias ${nombre} hemos recibido su sugerencia y enviaremos una pronta respuesta al correo ${correo}`);

};
//Alerta de campo obligatorio en nombre de formulario contacto
let alertaLlenado = () => {

    let nombre = document.getElementById('nombreContacto').value;
    console.log(nombre);
    if (nombre == "") {
        alert("El campo 'Nombre' es obligatorio");
    }

};

//alerta en formulario reserva
$(document).ready(function () {

    $('#formReserva').submit(function () {
        let nombre = $('#nombreReserva').val();
        let correo = $('#emailReserva').val();
        let cantidad = $('#cantidadReserva').val();
        alert(`Estimada/o ${nombre}: agradecemos por reservar con nosotros. Hemos registrado ${cantidad} asistentes. Se ha enviado el código de confirmación al correo ${correo}. \nGracias por preferirnos.`);
    });

});



