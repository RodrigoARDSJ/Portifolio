import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculoComponent } from './components/views/curriculo/curriculo.component';
import { HomeComponent } from './components/views/home/home.component';
import { ProjetosComponent } from './components/views/projetos/projetos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'curriculo',
    component: CurriculoComponent,
  },

  {
    path: 'projetos',
    component: ProjetosComponent, 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
