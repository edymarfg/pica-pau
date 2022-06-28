import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Fornecedor } from '../domain/fornecedor';
import { FarmaceuticoModel } from '../model/farmaceutico-model';
import { FornecedorModel } from '../model/fornecedor-model';
import { FornecedorService } from '../service/fornecedor.service';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.scss'],
})
export class FornecedorComponent implements OnInit {
  fornecedores: Fornecedor[] = [];

  form: FormGroup = this.formBuilder.group({
    nome: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    cnpj: new FormControl(null, [
      Validators.required,
      Validators.minLength(14),
    ]),
    niver: new FormControl(null, [Validators.required]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private fornecedorService: FornecedorService
  ) {}

  ngOnInit(): void {
    this.consultar();
  }

  cadastrar(): void {
    const model: FarmaceuticoModel = this.form.getRawValue();
    this.fornecedorService.cadastrar(model).subscribe((domain: Fornecedor) => {
      if (domain.id) {
        this.fornecedores.push(domain);
      }
    })
  }

  cegonha(): void {
    this.fornecedorService.cegonha().subscribe(() => {
      this.consultar();
    });
  }

  remover(fornecedor: Fornecedor): void {
    this.fornecedorService.excluir(fornecedor.id).subscribe(() => {
      this.consultar();
    });
  }

  private consultar(): void {
    this.fornecedorService.consultar().subscribe((mafalda: Fornecedor[]) => {
      this.fornecedores = mafalda;
    });
  }
}