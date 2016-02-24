"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

function calcular() {
  var result;
  var original = document.getElementById("original");
  var temp = original.value;
  var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/;
  var mejorRegex = /(^[-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)\s*([fFcC])/
  var x = temp.match(mejorRegex);

  if (x) {
    var num = x[1];
    var type = x[2];
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      result = (num * 9/5)+32;
      result = result.toFixed(1)+" Farenheit";
    }
    else {
      result = (num - 32)*5/9;
      result = result.toFixed(1)+" Celsius";
    }
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML = "¡ERROR! Intente con valores correctos [-,+] [Número] [Medida] e.g: '-4.2C' ";
  }
}
