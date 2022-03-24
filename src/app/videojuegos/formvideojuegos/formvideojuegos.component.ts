import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/clientes/cliente';
import { ClienteService } from 'src/app/clientes/cliente.service';
import { Videojuego } from 'src/app/clientes/videojuego';
import { AuthService } from 'src/app/usuarios/auth.service';
import swal from 'sweetalert2';
import { VideojuegoService } from '../videojuego.service';

@Component({
  selector: 'app-formvideojuegos',
  templateUrl: './formvideojuegos.component.html',
  styleUrls: ['./formvideojuegos.component.css']
})
export class FormvideojuegosComponent implements OnInit {

  cliente: Cliente = new Cliente();
  videojuego:Videojuego= new Videojuego();

  videojuegos!:Videojuego[];

  constructor(private videoJuegoService:VideojuegoService,
    private router:Router, private activatedRoute:ActivatedRoute,
    private authService:AuthService) { }

  ngOnInit(): void {
    if(this.authService.token){

      this.videoJuegoService.getVideoJuegos().subscribe(
        resp => this.videojuegos = resp


      );

      this.activatedRoute.paramMap.subscribe(
        params =>{
          let id = +params.get('id')!;
          if(id){
            this.videoJuegoService.getVideojuego(id).subscribe(
              (resp) => this.videojuego = resp
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
    this.videoJuegoService.create(this.videojuego).subscribe(
      resp => {
        swal('Nuevo videojuego',`${this.videojuego.nombre} creado con éxito`,'success');
        this.router.navigate(['/videojuegos']);
      },
      err=>{
        console.log('Codigo de error backend',err.status);
      }
    );
  }

  update():void{
    console.log(this.cliente);
    this.videoJuegoService.update(this.videojuego).subscribe(
      resp=>{
        this.router.navigate(['/videojuegos']);
        swal('Videojuego Actualizado',`${this.videojuego.nombre}`,'success');
      },
      err=>{
        console.error('Codigo del error desde el backend'+err.status);
        console.error(err.error.errros)
      }
    );
  }


}
