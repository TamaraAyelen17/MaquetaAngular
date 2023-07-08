import { Injectable } from '@angular/core';
//Suscribirse a los datos y que reciba respuestas asincronicas
import { Observable } from 'rxjs';
//Hacer peticiones y CRUD
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
//http = alias
  constructor(private http:HttpClient) { }

  //metodo Obersvable que devuelve datos
  getDatos():Observable<any>{
    //retorno de datos utilizando el método get ed HttpClient que llama a la base de datos JSON o a una URL
    return this.http.get('./assets/json/db.json');
    //acá podria poner un callback para ver la opcion de problema de conexion del servidor
  }
}
