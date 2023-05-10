import { Injectable } from '@angular/core';
import { Skills } from '../model/skills.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  URL = 'http://localhost:8080/skills/';

  constructor(private http: HttpClient) { }

  public getSkills(): Observable<Skills[]> {
    return this.http.get<Skills[]>(this.URL + 'ver');
  }

  public save(skill: Skills):Observable<any>{
    return this.http.post<any>(this.URL + 'crear', skill);
  }

  public update(id: number, skill:Skills):Observable<any>{
    return this.http.put<any>(this.URL + `editar/${id}`, skill);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.URL + `borrar/${id}`);
  }

  public detail(id: number):Observable<Skills>{
    return this.http.get<Skills>(this.URL + `detail/${id}`);
  }
}
