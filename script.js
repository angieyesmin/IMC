function calcularIMC() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    if (!isNaN(peso) && !isNaN(altura)) {
        var imc = peso / Math.pow(altura, 2);
        var resultado = "Hola " + nombre + ", tu IMC es " + imc.toFixed(2) + ".";
        resultado += " Edad: " + edad;
        document.getElementById("resultado").textContent = resultado;
    } else {
        alert("Por favor, ingresa un peso y una altura válidos.");
    }
}

