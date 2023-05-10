import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { IniciarSesionComponent } from '../iniciar-sesion/iniciar-sesion.component';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
=======
import { PortfolioService } from 'src/app/services/portfolio.service';
>>>>>>> c77fe5a74dabe6a741159d864ba5a04c50694243

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
<<<<<<< HEAD

  experiencia: Experiencia[] = [];

  constructor(public experienciaService: ExperienciaService, private iniciarSesion: IniciarSesionComponent, private autenticacion:AutenticacionService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    this.autenticacion.getIsLoggedIn().subscribe((isLoggedIn: boolean) => {
      this.isLogged = isLoggedIn;
    });
  }

  cargarExperiencia():void{
    this.experienciaService.getExperiencia().subscribe(data => {this.experiencia = data;})
  }

  borrar(id?: number) {
    if (id != undefined) {
      this.experienciaService.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo Eliminar");
        })

    }
  }
=======
  experienciaList: any;

  constructor(private datosPortfolio:PortfolioService){}
 
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.experienciaList=data.experiencie;
    })
 }

 edit(){
  console.log("Edit Experiencia!");
}
>>>>>>> c77fe5a74dabe6a741159d864ba5a04c50694243
}
