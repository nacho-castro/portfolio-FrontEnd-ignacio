import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  URL = environment.URL + 'edu/';

  constructor(private http: HttpClient) { }

  public getEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.URL + 'ver');
  }

  public save(educacion: Educacion):Observable<any>{
    return this.http.post<any>(this.URL + 'crear', educacion);
  }

  public update(id: number, educacion:Educacion):Observable<any>{
    return this.http.put<any>(this.URL + `editar/${id}`, educacion);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.URL + `borrar/${id}`);
  }

  public detail(id: number):Observable<Educacion>{
    return this.http.get<Educacion>(this.URL + `detail/${id}`);
  }
}
