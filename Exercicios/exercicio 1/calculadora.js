function calculadora() {
  const valor1 = parseFloat(prompt("Digite o primeiro valor numerico:"));
  const valor2 = parseFloat(prompt("Digite o segundo valor numerico:"));

  const soma = valor1 + valor2;
  const subtracao = valor1 - valor2;
  const multiplicacao = valor1 * valor2;
  const divisao = valor1 / valor2;

  alert(
    "Resultados:\n" +
      "\nSoma: " +
      soma +
      "\nSubtração: " +
      subtracao +
      "\nMultiplicação: " +
      multiplicacao +
      "\nDivisão: " +
      divisao
  );
}

calculadora();
