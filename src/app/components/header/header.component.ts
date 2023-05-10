import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { IniciarSesionComponent } from '../iniciar-sesion/iniciar-sesion.component';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { Router } from '@angular/router';
=======
>>>>>>> c77fe5a74dabe6a741159d864ba5a04c50694243

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  logOut: boolean = false;

<<<<<<< HEAD
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
=======
  constructor() { }

  ngOnInit(): void { }

  logIn() {
    console.log("Inicio de Sesión")
    this.logOut = !this.logOut;
  }
}
>>>>>>> c77fe5a74dabe6a741159d864ba5a04c50694243
