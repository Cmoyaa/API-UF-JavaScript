$(document).ready(function(){
    $("#formulario").validate({
        rules: {
            nombre: {
                required:true,
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
        }
    });
});