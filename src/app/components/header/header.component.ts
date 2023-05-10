import { Component, OnInit } from '@angular/core';
import { IniciarSesionComponent } from '../iniciar-sesion/iniciar-sesion.component';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  logOut: boolean = false;

  constructor(private iniciarSesion: IniciarSesionComponent, private autenticacion:AutenticacionService, private router:Router) { }

  ngOnInit(): void { 
    this.autenticacion.getIsLoggedIn().subscribe((isLoggedIn: boolean) => {
      this.logOut = isLoggedIn;
    });
  }

  logIn() {
    if(this.logOut){
      this.autenticacion.logoutUser();
    } else {
      this.router.navigate(['/iniciar-sesion']);
      this.logOut = this.iniciarSesion.getLogged();
  }
}

}
