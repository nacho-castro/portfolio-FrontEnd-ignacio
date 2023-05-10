import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { IniciarSesionComponent } from '../iniciar-sesion/iniciar-sesion.component';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
=======
>>>>>>> c77fe5a74dabe6a741159d864ba5a04c50694243

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
<<<<<<< HEAD
export class ProyectosComponent implements OnInit {

  proyectos: Proyectos[] = [];

  constructor(public proyectosService: ProyectosService, private iniciarSesion:IniciarSesionComponent, private autenticacion:AutenticacionService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyectos();
    this.autenticacion.getIsLoggedIn().subscribe((isLoggedIn: boolean) => {
      this.isLogged = isLoggedIn;
    });
  }

  cargarProyectos(): void {
    this.proyectosService.getProyectos().subscribe(data => { this.proyectos = data; })
  }

  borrar(id?: number) {
    if (id != undefined) {
      this.proyectosService.delete(id).subscribe(
        data => {
          this.cargarProyectos();
        }, err => {
          alert("No se pudo Eliminar");
        })

    }
=======
export class ProyectosComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
  
  }

  edit(){
    console.log("Edit Proyecto!");
>>>>>>> c77fe5a74dabe6a741159d864ba5a04c50694243
  }
}
