import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Educacion } from 'src/app/model/educacion.model';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { EducacionService } from 'src/app/services/educacion.service';
import { IniciarSesionComponent } from '../iniciar-sesion/iniciar-sesion.component';

=======
import { PortfolioService } from 'src/app/services/portfolio.service';
>>>>>>> c77fe5a74dabe6a741159d864ba5a04c50694243

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{
<<<<<<< HEAD

  educacion:Educacion[] = [];
  constructor(private educacionService: EducacionService, private iniciarSesion: IniciarSesionComponent, private autenticacion: AutenticacionService){}

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    this.autenticacion.getIsLoggedIn().subscribe((isLoggedIn: boolean) => {
      this.isLogged = isLoggedIn;
    });
  }

  cargarEducacion():void{
    this.educacionService.getEducacion().subscribe(data => {this.educacion = data;})
  }

  borrar(id?: number) {
    if (id != undefined) {
      this.educacionService.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo Eliminar");
        })

    }
=======
  educacionList:any;
  constructor(private datosPortfolio:PortfolioService){}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.educacionList=data.education;
    })
  }

  edit(){
    console.log("Edit Educacion!");
>>>>>>> c77fe5a74dabe6a741159d864ba5a04c50694243
  }
}
