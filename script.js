const input = document.getElementById("entrada");
const output = document.getElementById("resultado");
const button = document.getElementById("submit");

button.addEventListener("click", criptografarMensagem);

function criptografarMensagem() {
  const mensagem = input.value;

  // Deslocar as letras três posições para a direita na tabela ASCII
  let criptografado = "";
  for (let i = 0; i < mensagem.length; i++) {
    let charCode = mensagem.charCodeAt(i);
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
      charCode += 3;
      if ((charCode > 90 && charCode < 97) || charCode > 122) {
        charCode -= 26;
      }
    }
    criptografado += String.fromCharCode(charCode);
  }

  // Inverter a linha
  criptografado = criptografado.split("").reverse().join("");

  // Deslocar os caracteres a partir da metade uma posição para a esquerda na tabela ASCII
  const metade = Math.floor(criptografado.length / 2);
  for (let i = metade; i < criptografado.length; i++) {
    let charCode = criptografado.charCodeAt(i);
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
      charCode -= 1;
      if ((charCode > 90 && charCode < 97) || charCode < 65) {
        charCode += 26;
      }
    }
    criptografado = criptografado.substring(0, i) + String.fromCharCode(charCode) + criptografado.substring(i + 1);
  }

  // Exibir o resultado
  output.value = criptografado;
}
