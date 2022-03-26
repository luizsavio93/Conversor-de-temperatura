//convertendo para Kelvin

function converterKelvin() {
  var valorCelsius = document.getElementById("valor");
  var valor = valorCelsius.value;
  var celsiusResultado = parseFloat(valor);

  // calculo
  var kelvinResultado = celsiusResultado + 273.15;

  // imprimir resultado
  var elementoKelvin = document.getElementById("valorResultado");
  var valorResultado = "A temperatura em Kelvin é " + kelvinResultado;
  elementoKelvin.innerHTML = valorResultado;
}

// convertendo para Fahrenheit

function converterFahr() {
  var valorCelsius = document.getElementById("valor");
  var valor = valorCelsius.value;
  var celsiusResultado = parseFloat(valor);

  // calculo

  var fahrResultado = celsiusResultado * 1.8 + 32;

  // imprimir resultado
  var elementoFahr = document.getElementById("valorResultado");
  var valorResultado = "A temperatura em Fahreinheit é " + fahrResultado;
  elementoFahr.innerHTML = valorResultado;
}