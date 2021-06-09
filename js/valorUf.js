var valorUf = document.querySelector('#valorUf')
function traer(){
    fetch('https://mindicador.cl/api/uf')
    .then(res => res.json())
    .then(data => {
        console.log(data.serie['0'])
        valorUf.innerHTML = `
        <tr>
            <th scope="col"><h3>Valor de la UF:</h3></th>
            <th scope="col"><h3>$${data.serie['0'].valor}</h3></th>
        </tr>
        `
    })
}

// Ocultamos la calculadora
$(document).ready(function(){
    $("#tabla2").hide();

    $("#convertir").on("click", function(){
        $("#tabla2").show();
    });
});


$(document).ready(function(){
    $("#multiplicar").click(function(){
        var n1 = parseFloat($("#numUF").val());
        var n2 = parseFloat($("#valorUF").val());
        var mult = n1*n2;

        $("#resultado").val(mult);
    });
});