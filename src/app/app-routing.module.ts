import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './componentes/index/index.component';
import { RegistrousuarioComponent } from './componentes/registrousuario/registrousuario.component';
import { IniciosesionComponent } from './componentes/iniciosesion/iniciosesion.component';
import { PanelComponent } from './componentes/panel/panel.component';




const routes: Routes = [
  {path: 'index', component:IndexComponent},
  {path: 'panel', component:PanelComponent},
  {path: 'registrousuario', component:RegistrousuarioComponent},
  {path: 'iniciosesion', component:IniciosesionComponent},
  {path: '', redirectTo:'/index',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
