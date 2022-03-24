import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AuthService } from '../usuarios/auth.service';
import { Cliente } from './cliente';
import { Videojuego } from './videojuego';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  urlEndpoint:string="http://localhost:8080/api/clientes";
  urlEndpointUpdate:string="http://localhost:8080/api/cliente";
  urlEndpointSave:string="http://localhost:8080/api/cliente/guardarCliente";



  constructor(private http:HttpClient,private authService:AuthService) { }

  httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  agregarAuthorizationHeader():any{
    let token = this.authService.token;
    if(token != null){
      return this.httpHeaders.append('Authorization', 'Bearer '+token);
    }

    return this.httpHeaders;
  }

  getClientes():Observable<Cliente[]>{
    return this.http.get(this.urlEndpoint).pipe(
      map((response)=>response as Cliente[])
    );
  }

  //metodo de post para insertar clientes
  create(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.urlEndpointSave,cliente, { headers: this.agregarAuthorizationHeader() });
  }

  //buscar cliente por id
  getCliente(id:number):Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndpoint}/${id}`,{ headers: this.agregarAuthorizationHeader() })
  }

  //actualizar cliente
  update(cliente:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(`${this.urlEndpointUpdate}/${cliente.id}`, cliente,{ headers: this.agregarAuthorizationHeader() })
  }

  //eliminar cliente
  delete(id:number):Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndpoint}/${id}`,{ headers: this.agregarAuthorizationHeader() })
  }

  // mostrar videojuegos
  getVideojuegos():Observable<Videojuego[]>{
    return this.http.get<Videojuego[]>(`${this.urlEndpoint}/videojuegos`,{ headers: this.agregarAuthorizationHeader() });
  }


}
