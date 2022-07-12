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
  list: FarmaceuticoModel[] = [];

  formFarmaceutico: FormGroup = this.formBuilder.group({
    id: new FormControl(null),
    nome: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    cpf: new FormControl(null, [Validators.required, Validators.minLength(11)]),
    niver: new FormControl(null, [Validators.required]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private farmaceuticoService: FarmaceuticoService
  ) {}

  ngOnInit(): void {
    this.consultar();
  }

  cadastrar(): void {
    const id = this.formFarmaceutico.controls['id'].value;
    const farmaceuticoModel: FarmaceuticoModel =
      this.formFarmaceutico.getRawValue();
    if (id) {
      this.farmaceuticoService
        .alterar(farmaceuticoModel)
        .subscribe((domain: FarmaceuticoModel) => {
          if (domain.id) {
            this.consultar();
            this.formFarmaceutico.reset();
          }
        });
    } else {
      this.farmaceuticoService
        .cadastrar(farmaceuticoModel)
        .subscribe((domain: FarmaceuticoModel) => {
          if (domain.id) {
            this.list.push(domain);
            this.formFarmaceutico.reset();
          }
        });
    }
  }

  cegonha(): void {
    this.farmaceuticoService.cegonha().subscribe(() => {
      this.consultar();
    });
  }

  remover(fornecedor: FarmaceuticoModel): void {
    this.farmaceuticoService.excluir(fornecedor.id).subscribe(() => {
      this.consultar();
    });
  }

  editar(farmaceutico: FarmaceuticoModel): void {
    this.formFarmaceutico.controls['id'].setValue(farmaceutico.id);
    this.formFarmaceutico.controls['nome'].setValue(farmaceutico.nome);
    this.formFarmaceutico.controls['cpf'].setValue(farmaceutico.cpf);
    this.formFarmaceutico.controls['niver'].setValue(farmaceutico.niver);
  }

  private consultar(): void {
    this.farmaceuticoService
      .consultar()
      .subscribe((mafalda: FarmaceuticoModel[]) => {
        this.list = mafalda;
      });
  }
}
