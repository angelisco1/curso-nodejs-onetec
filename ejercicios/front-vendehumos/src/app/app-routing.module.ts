import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaVendehumosComponent } from './lista-vendehumos/lista-vendehumos.component';

const routes: Routes = [
  { path: '', component: ListaVendehumosComponent },
  { path: 'nuevo-vendehumos', component: FormularioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
