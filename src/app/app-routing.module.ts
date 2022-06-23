import { ProdutoComponent } from './produto/produto.component';
import { FarmaceuticoComponent } from './farmaceutico/farmaceutico.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { CpfComponent } from './cpf/cpf.component';
import { ClienteComponent } from './cliente/cliente.component';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'cpf', component: CpfComponent },
  { path: 'fornecedor', component: FornecedorComponent },
  { path: 'farmaceutico', component: FarmaceuticoComponent },
  { path: 'produto', component: ProdutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
