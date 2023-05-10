import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/model/perfil.model';
import { PerfilService } from 'src/app/services/perfil.service';
import { IniciarSesionComponent } from '../iniciar-sesion/iniciar-sesion.component';
import { AutenticacionService } from 'src/app/services/autenticacion.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  perfil: Perfil;
  isLogged = false;

  constructor(public perfilService: PerfilService, private iniciarSesion: IniciarSesionComponent, private autenticacion:AutenticacionService) { }

  ngOnInit(): void {
    this.perfilService.getPerfil().subscribe(data => { this.perfil = data })
    this.autenticacion.getIsLoggedIn().subscribe((isLoggedIn: boolean) => {
      this.isLogged = isLoggedIn;
    });
  }
}
