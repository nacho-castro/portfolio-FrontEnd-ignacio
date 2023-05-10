<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/model/perfil.model';
import { PerfilService } from 'src/app/services/perfil.service';
import { IniciarSesionComponent } from '../iniciar-sesion/iniciar-sesion.component';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

=======
import { Component, OnInit} from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
>>>>>>> c77fe5a74dabe6a741159d864ba5a04c50694243

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
<<<<<<< HEAD
  perfil: Perfil;
  isLogged = false;

  constructor(public perfilService: PerfilService, private iniciarSesion: IniciarSesionComponent, private autenticacion:AutenticacionService) { }

  ngOnInit(): void {
    this.perfilService.getPerfil().subscribe(data => { this.perfil = data })
    this.autenticacion.getIsLoggedIn().subscribe((isLoggedIn: boolean) => {
      this.isLogged = isLoggedIn;
    });
  }
=======
  miPortfolio:any;
  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio=data;
    });
  }

  edit(){
    console.log("Edit Perfil!");
  }
>>>>>>> c77fe5a74dabe6a741159d864ba5a04c50694243
}
