function verificarNumeros() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
  
    if (numero1 > numero2) {
      console.log("numero1 é maior que numero2");
    } else if (numero1 < numero2) {
      console.log("numero1 é menor que numero2");
    } else {
      console.log("numero1 é igual a numero2");
    }
  }