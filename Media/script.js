function calcularMedia() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Por favor, digite valores numéricos para todas as notas.");
        return;
    }
    var media = (nota1 + nota2 + nota3) / 3;
    document.getElementById("resultado").innerHTML = "Média: " + media.toFixed(2);
}
