import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-cpf',
  templateUrl: './cpf.component.html',
  styleUrls: ['./cpf.component.scss'],
})
export class CpfComponent implements OnInit {
  cpf: string = '';
  mensagem: string = '';
  imabanido = document.createElement('img');
  div = document.getElementById('tudo');

  constructor() {}

  ngOnInit(): void {}

  validar(): void {
    let valor = this.cpf.replace(/[^0-9]/g, '');
    var valida = new Array();
    var compara = new Array();
    var ver = false;
    for (let i = 0; i < valor.length; i++) {
      valida.push(Number(valor[i]));
      compara.push(Number(valor[i]));
    }
    compara.pop();
    compara.pop();
    compara.push(this.digito(1, compara));
    compara.push(this.digito(0, compara));
    for (let i = 0; i < compara.length; i++) {
      if (i != 0 && compara[i] != compara[i - 1]) {
        ver = true;
      }
    }
    if (ver == true && JSON.stringify(compara) == JSON.stringify(valida)) {
      this.mensagem = 'DOCUMENTO VÁLIDO';
      document.body.style.backgroundColor = '#33FF33';
      this.imabanido.src = '../assets/ednaldodesbanido.png';
    } else {
      this.mensagem = 'DOCUMENTO INVÁLIDO';
      document.body.style.backgroundColor = '#FF0000';
      this.imabanido.src = '../assets/ednaldobanido.png';
    }
    this.imabanido.style.paddingBottom = '50px';
    this.imabanido.id = 'imagem';
    document.body.appendChild(this.imabanido);
  }

  digito(i: number, compara: Array<number>): number {
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

  marcacao(): void {
    let valor = this.cpf.replace(/[^0-9]/g, '');
    let result = '';
    for (let i = 0; i < valor.length; i++) {
      if (i == 3 || i == 6) {
        result += '.';
      } else if (i == 9) {
        result += '-';
      }
      result += valor[i];
    }
    this.cpf = result;
  }

  limpar(): void {
    document.body.style.backgroundColor = '#FFFFFF';
    this.mensagem = '';
    this.cpf = '';
    this.imabanido.src = '';
  }
}
