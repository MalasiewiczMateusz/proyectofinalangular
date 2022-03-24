import { Component, OnInit } from '@angular/core';
import { Videojuego } from '../clientes/videojuego';
import { AuthService } from '../usuarios/auth.service';
import { VideojuegoService } from './videojuego.service';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {
  videojuegos!:Videojuego[];

  constructor(private videojuegoServicio:VideojuegoService,public authService:AuthService) { }

  ngOnInit(): void {
    this.videojuegoServicio.getVideoJuegos().subscribe(
      resp=>{this.videojuegos=resp}
    );
  }

}
