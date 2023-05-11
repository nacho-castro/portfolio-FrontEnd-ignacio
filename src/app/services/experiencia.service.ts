import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  URL = 'https://portfolio-backend-q3do.onrender.com/exp/';

  constructor(private http: HttpClient) { }

  public getExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.URL + 'ver');
  }

  public save(experiencia: Experiencia):Observable<any>{
    return this.http.post<any>(this.URL + 'crear', experiencia);
  }

  public update(id: number, experiencia:Experiencia):Observable<any>{
    return this.http.put<any>(this.URL + `editar/${id}`, experiencia);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.URL + `borrar/${id}`);
  }

  public detail(id: number):Observable<Experiencia>{
    return this.http.get<Experiencia>(this.URL + `detail/${id}`);
  }
}
