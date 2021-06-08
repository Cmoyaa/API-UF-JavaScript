let url = "https://mindicador.cl/api/uf"
$.get(url, function(respuesta){
    console.log(respuesta(respuesta.length -1))
}, "json")