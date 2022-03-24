import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { AppRoutingModule } from '../rutas/app-routing.module';
import { FormclientesComponent } from './formclientes/formclientes.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ClientesComponent,
    FormclientesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule

  ],
  exports:[
    ClientesComponent,
    FormclientesComponent
  ]
})
export class ClientesModule { }
