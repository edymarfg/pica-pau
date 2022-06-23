import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
})
export class ProdutoComponent implements OnInit {
  formProduto: FormGroup = this.formBuilder.group({
    nome: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    valor: new FormControl(null, [
      Validators.required,
      Validators.minLength(11),
    ]),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  cadastrar(): void {}

  som(): void {}
}
