import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from '../clientes/clientes.component';
import { FormclientesComponent } from '../clientes/formclientes/formclientes.component';
import { VerclienteComponent } from '../clientes/vercliente/vercliente.component';
import { PrincipalComponent } from '../principal/principal.component';
import { LoginComponent } from '../usuarios/login/login.component';
import { FormvideojuegosComponent } from '../videojuegos/formvideojuegos/formvideojuegos.component';
import { VideojuegosComponent } from '../videojuegos/videojuegos.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/tienda',
    pathMatch:'full'
  },
  {
    path:'tienda',
    component:PrincipalComponent
  },
  {
    path:'clientes',
    component:ClientesComponent
  },
  {
    path:'clientes/crear',
    component:FormclientesComponent
  },
  {
    path:'clientes/editar/:id',
    component:FormclientesComponent

  },
  {
    path:'videojuegos/crear',
    component:FormvideojuegosComponent
  },
  {
    path:'videojuegos/editar/:id',
    component:FormvideojuegosComponent
  },
  {
    path:'clientes/mostrar/:id',
    component:VerclienteComponent
  },
  {
    path:'videojuegos',
    component:VideojuegosComponent
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
