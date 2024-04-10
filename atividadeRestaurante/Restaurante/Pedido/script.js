function comecar() {
    var nome = document.getElementById("exampleFormControlInput1").value;
    show(nome);
  }
  
  function show(nome) {
    document.getElementById("nomePrint").textContent = nome;
    var div = document.getElementById("selects-div");
    if (nome && nome.trim() !== "") {
      div.style.display = "block";
      document.getElementById("exampleFormControlInput1").style.background =
        "none";
    } else {
      document.getElementById("error").style.display = "flex";
    }
  }
  
  function fechar() {
    document.getElementById("error").style.display = "none";
    document.getElementById("exampleFormControlInput1").style.background =
      "lightpink";
  }
  
  function calcularTotal() {
    var selectPratos = document.getElementById("selectPrato");
    var selectBebidas = document.getElementById("selectBebida");
    var selectSobremesas = document.getElementById("selectSobremesa");
    var resultadoSpan = document.getElementById("resultado");
  
    var total = 0;
    var prato = 0;
    var bebida = 0;
    var sobremesa = 0;
  
    switch (selectPratos.value) {
      case "Classico Barão":
        total += 5.00;
        prato = 5.00;
        break;
      case "Porongo":
        total += 3.00;
        prato = 3.00;
        break;
      case "Granulado":
        total += 7.50;
        prato = 7.50;
        break;
    }
  
    switch (selectBebidas.value) {
      case "Agua Filtrada":
        total += 9.99;
        bebida = 9.99;
        break;
      case "Refri Geladinho":
        total += 3;
        bebida = 3;
        break;
      case "Suco Natural":
        total += 5;
        bebida = 5;
        break;
    }
  
    switch (selectSobremesas.value) {
      case "Musse de leite em pó":
        total += 32.5;
        sobremesa = 32.5;
        break;
      case "Bala":
        total += 10;
        sobremesa = 10;
        break;
      case "Lainxi":
        total += 16.8;
        sobremesa = 16.8;
        break;
    }
  
    document.getElementById("total").style.display = "flex";
    document.getElementById("prato-pronto").innerHTML = prato.toFixed(2);
    document.getElementById("bebida-pronto").innerHTML = bebida.toFixed(2);
    document.getElementById("sobremesa-pronto").innerHTML = sobremesa.toFixed(2);
  
    resultadoSpan.textContent = "R$ " + total.toFixed(2);
  }
  
  function limpar() {
    document.getElementById("total").style.display = "none";
    document.getElementById("selects-div").style.display = "none";
    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("selectPrato").value = "Selecione um prato";
    document.getElementById("selectBebida").value = "Selecione uma bebida";
    document.getElementById("selectSobremesa").value = "Selecione uma sobremesa";
  }
  