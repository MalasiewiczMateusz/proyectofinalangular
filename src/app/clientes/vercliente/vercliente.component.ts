import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-vercliente',
  templateUrl: './vercliente.component.html',
  styleUrls: ['./vercliente.component.css']
})
export class VerclienteComponent implements OnInit {

  cliente!:Cliente;
  fotoSeleccionada!:File;
  progreso!:number;


  constructor( private clienteService:ClienteService,
     private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activedRoute.paramMap.subscribe(
      params => {
        let id:number = +params.get('id')!;

        if(id){
          this.clienteService.getCliente(id)
          .subscribe( resp => this.cliente = resp);
        }


      }
    );

  }



}
