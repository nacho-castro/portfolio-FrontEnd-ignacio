import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  user: User = new User(null, null);
  form: FormGroup;
  isLogged = false;

  constructor(private autenticacion: AutenticacionService, private router: Router) {
  }

  ngOnInit(): void {
    this.autenticacion.getIsLoggedIn().subscribe((isLoggedIn: boolean) => {
      this.isLogged = isLoggedIn;
    });
  }

  onEnviar() {
    console.log(this.user);
    this.autenticacion.loginUser(this.user).subscribe(data => {
      alert("Logeado correctamente"); 
      this.isLogged = true;
      this.router.navigate(['portfolio']);
      
    }, error => {
      alert("Usuario o contraseña incorrectos");
      this.router.navigate(['portfolio']);
    })
  }

  getLogged() {
    return this.isLogged;
  }

  setLogged() {
    this.autenticacion.logoutUser();
  }

}
