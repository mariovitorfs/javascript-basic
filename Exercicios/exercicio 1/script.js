function CadastrarRecruta() {
  alert("olá recruta, bem vindo! vamos iniciar seu cadastro.");
  const primeiroNome = prompt("Digite seu primeiro nome:");
  const sobreNome = prompt("Digite seu sobrenome:");
  const campoEstudo = prompt("Digite seu campo de estudo:");
  const anoNascimento = parseInt(prompt("Digite o ano que você nasceu:"));

  const nomeCompleto = primeiroNome + sobreNome;
  const idade = new Date().getFullYear() - anoNascimento;

  alert(
    "Resultados:\n" +
      "\nNome completo: " +
      nomeCompleto +
      "\nCampo de estudo: " +
      campoEstudo +
      "\nIdade: " +
      idade
  );
}

CadastrarRecruta();
