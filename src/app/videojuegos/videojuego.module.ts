import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormclientesComponent } from '../clientes/formclientes/formclientes.component';
import { VideojuegosComponent } from './videojuegos.component';
import { AppRoutingModule } from '../rutas/app-routing.module';
import { FormvideojuegosComponent } from './formvideojuegos/formvideojuegos.component';



@NgModule({
  declarations: [
    FormvideojuegosComponent,
    VideojuegosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports:[
    VideojuegosComponent,
    FormvideojuegosComponent
  ]
})
export class VideojuegoModule { }
