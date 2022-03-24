import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/usuarios/auth.service';
import swal from 'sweetalert2';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { Videojuego } from '../videojuego';

@Component({
  selector: 'app-formclientes',
  templateUrl: './formclientes.component.html',
  styleUrls: ['./formclientes.component.css']
})
export class FormclientesComponent implements OnInit {

  titulo:string ="Nuevo Cliente";

  cliente: Cliente = new Cliente();

  videojuegos!:Videojuego[];

  constructor( private clienteService:ClienteService,
    private router:Router, private activatedRoute:ActivatedRoute,
    private authService:AuthService) { }

  ngOnInit(): void {

    if(this.authService.token){

      this.clienteService.getVideojuegos().subscribe(
        resp => this.videojuegos = resp
      );

      this.activatedRoute.paramMap.subscribe(
        params =>{
          let id = +params.get('id')!;
          if(id){
            this.clienteService.getCliente(id).subscribe(
              (resp) => this.cliente = resp
            )
          }
        }
      );

    }else{
      swal('No esta autenticado','no autenticado','info');
      this.router.navigate(['/login']);
    }
  }




  create():void{
    console.log("formulario enviado");
    console.log(this.cliente);
    this.clienteService.create(this.cliente).subscribe(
      resp => {
        swal('Nuevo Cliente',`${this.cliente.nombre} creado con éxito`,'success');
        this.router.navigate(['/clientes']);
      },
      err=>{
        console.log('Codigo de error backend',err.status);
      }
    );
  }

  update():void{
    console.log(this.cliente);
    this.clienteService.update(this.cliente).subscribe(
      resp=>{
        this.router.navigate(['/clientes']);
        swal('Cliente Actualizado',`${this.cliente.nombre}`,'success');
      },
      err=>{
        console.error('Codigo del error desde el backend'+err.status);
        console.error(err.error.errros)
      }
    );
  }


}
