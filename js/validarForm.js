$(document).submit(function(){
    $("#formulario").validate({
        rules: {
            nombreCompleto: {
                required: true,
                minlength: 10
            },
            empresa: {
                required: true,
                minlength: 10
            },
            email: {
                required: true,
                email: true
            },
            mensaje: {
                required: true,
                minlength: 30
            }
        },
        messages: {
            nombre: {
                required: "Por favor ingrese su nombre",
                minlength: "Su nombre tiene menos de 10 caracteres"
            },
            empresa:{
                required: "Ingrese el nombre de la empresa",
                minlength: "El nombre de la empresa debe tener al menos 10 caracteres"
            },
            email: {
                required: "Ingrese su correo por favor",
                email: "Ingrese un email válido"
            },
            mensaje: {
                required: "Ingrese su mensaje por favor",
                minlength: "El mensaje debe contar con mínimo 30 caracteres"
            }
        }
    })
})