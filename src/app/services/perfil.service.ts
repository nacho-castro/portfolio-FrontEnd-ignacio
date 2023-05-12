import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Perfil } from '../model/perfil.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  
  URL =  environment.URL + 'perfil/';

  constructor(private http: HttpClient) { }

  public getPerfil(): Observable<Perfil> {
    return this.http.get<Perfil>(this.URL + 'ver');
  }
  
  public update(id: number, perfil:Perfil):Observable<any>{
    return this.http.put<any>(this.URL + `editar/${id}`, perfil);
  }

  public detail(id: number):Observable<Perfil>{
    return this.http.get<Perfil>(this.URL + `detail/${id}`);
  }
}
