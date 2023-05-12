import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, observable, tap } from 'rxjs';
import { User } from '../model/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private isLoggedIn = new BehaviorSubject<boolean>(false);

  URL = environment.URL + 'user/';

  constructor(private http:HttpClient) { 
    console.log("El servicio de autenticacion esta corriendo");
  }

  loginUser(user:User):Observable<any>{
    return this.http.post<any>(this.URL + 'login', user).pipe(
      tap(() => this.isLoggedIn.next(true))
    );
  }

  logoutUser() {
    this.isLoggedIn.next(false);
  }

  getIsLoggedIn(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }

}
