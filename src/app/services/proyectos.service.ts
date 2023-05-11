import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyectos } from '../model/proyectos.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  URL = 'https://portfolio-backend-q3do.onrender.com/proyectos/';

  constructor(private http: HttpClient) { }

  public getProyectos(): Observable<Proyectos[]> {
    return this.http.get<Proyectos[]>(this.URL + 'ver');
  }

  public save(proyectos: Proyectos):Observable<any>{
    return this.http.post<any>(this.URL + 'crear', proyectos);
  }

  public update(id: number, proyectos:Proyectos):Observable<any>{
    return this.http.put<any>(this.URL + `editar/${id}`, proyectos);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.URL + `borrar/${id}`);
  }

  public detail(id: number):Observable<Proyectos>{
    return this.http.get<Proyectos>(this.URL + `detail/${id}`);
  }
}
