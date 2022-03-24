import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Videojuego } from '../clientes/videojuego';
import { AuthService } from '../usuarios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class VideojuegoService {
  urlEndpoint:string="http://localhost:8080/api/videojuegos";
  urlEndpointUpdate:string="http://localhost:8080/api/videojuego";

  urlEndpointSave:string="http://localhost:8080/api/videojuego/guardarVideoJuego";


  constructor(private http:HttpClient,private authService:AuthService) { }

  httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  agregarAuthorizationHeader():any{
    let token = this.authService.token;
    if(token != null){
      return this.httpHeaders.append('Authorization', 'Bearer '+token);
    }

    return this.httpHeaders;
  }

  getVideoJuegos():Observable<Videojuego[]>{
    return this.http.get(this.urlEndpoint).pipe(
      map((response)=>response as Videojuego[])
    );
  }

  //metodo de post para insertar videojuegos
  create(videojuego:Videojuego):Observable<Videojuego>{
    return this.http.post<Videojuego>(this.urlEndpointSave,videojuego, { headers: this.agregarAuthorizationHeader() });
  }

  //buscar videojuego por id
  getVideojuego(id:number):Observable<Videojuego>{
    return this.http.get<Videojuego>(`${this.urlEndpoint}/${id}`,{ headers: this.agregarAuthorizationHeader() })
  }

  //actualizar videojuego
  update(videojuego:Videojuego):Observable<Videojuego>{
    return this.http.put<Videojuego>(`${this.urlEndpointUpdate}/${videojuego.id}`, videojuego,{ headers: this.agregarAuthorizationHeader() })
  }



}
