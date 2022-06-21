let cpf = document.getElementById("cpf");
let mensagem = document.getElementById("valida");
let imabanido = document.createElement("img");

function validar() {
  let valor = String(cpf.value).replace(".", "");
  valor = valor.replace(".", "");
  valor = valor.replace("-", "");
  var valida = new Array();
  var compara = new Array();
  var ver = false;
  for (let i = 0; i < valor.length; i++) {
    valida.push(Number(valor[i]));
    compara.push(Number(valor[i]));
  }
  compara.pop();
  compara.pop();
  compara.push(digito(1, compara));
  compara.push(digito(0, compara));
  for (let i = 0; i < compara.length; i++) {
    if (i != 0 && compara[i] != compara[i - 1]) {
      ver = true;
    }
  }
  if (ver == true && JSON.stringify(compara) == JSON.stringify(valida)) {
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

function marcacao() {
  let valor = String(cpf.value);
  if (typeof valor.charAt(valor.length - 1) === String) {
    valor.replace(valor.charAt(valor.length - 1), "");
  }
  if (valor.length === 3 || valor.length === 7) {
    cpf.value = valor + ".";
  } else if (valor.length === 11) {
    cpf.value = valor + "-";
  }
}
