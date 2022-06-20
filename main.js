let cpf = document.getElementById("cpf");
let mensagem = document.getElementById("valida");
let imabanido = document.createElement("img");

function validar() {
  let teste = String(cpf.value);
  var valida = new Array();
  var compara = new Array();
  for (let i = 0; i < teste.length; i++) {
    valida.push(Number(teste[i]));
    compara.push(Number(teste[i]));
  }
  compara.pop();
  compara.pop();
  compara.push(digito(1, compara));
  compara.push(digito(0, compara));
  console.log(compara.length);

  if (JSON.stringify(compara) == JSON.stringify(valida)) {
    mensagem.innerHTML = "Documento válido";
    document.body.style.backgroundColor = "#33FF33";
    imabanido.src = "../pica-pau/img/ednaldodesbanido.png";
    imabanido.style.paddingBottom = "50px";
  } else {
    mensagem.innerHTML = "Documento inválido";
    document.body.style.backgroundColor = "#FF0000";
    imabanido.src = "../pica-pau/img/ednaldobanido.png";
  }
  imabanido.style.paddingLeft = "30px";
  document.body.appendChild(imabanido);
}

function digito(i, compara) {
  var dig = 0;
  compara.forEach((num) => {
    dig += num * i;
    i++;
  });
  dig = dig % 11;
  if (dig > 9) {
    return 0;
  } else {
    return dig;
  }
}

function limpar() {
  document.body.style.backgroundColor = "#FFFFFF";
  mensagem.innerHTML = "";
  cpf.value = "";
  imabanido.src = "";
}
