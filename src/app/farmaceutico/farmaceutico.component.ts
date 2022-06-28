import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { Farmaceutico } from '../domain/farmaceutico';
import { FarmaceuticoModel } from '../model/farmaceutico-model';
import { FarmaceuticoService } from '../service/farmaceutico.service';

@Component({
  selector: 'app-farmaceutico',
  templateUrl: './farmaceutico.component.html',
  styleUrls: ['./farmaceutico.component.scss'],
})
export class FarmaceuticoComponent implements OnInit {
  list: Farmaceutico[] = [];

  formFarmaceutico: FormGroup = this.formBuilder.group({
    nome: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    cpf: new FormControl(null, [Validators.required, Validators.minLength(11)]),
    niver: new FormControl(null, [Validators.required]),
  });

  constructor(private formBuilder: FormBuilder, private farmaceuticoService: FarmaceuticoService) {}

  ngOnInit(): void {
    this.consultar();
  }

  cadastrar(): void {

  }

  cegonha(): void {
    this.farmaceuticoService.cegonha().subscribe(() => {
      this.consultar();
    });
  }

  remover(fornecedor: Farmaceutico): void {
    this.farmaceuticoService.excluir(fornecedor.id).subscribe(() => {
      this.consultar();
    });
  }

  private consultar(): void {
    this.farmaceuticoService
      .consultar()
      .subscribe((mafalda: Farmaceutico[]) => {
        this.list = mafalda;
      });
  }
}
