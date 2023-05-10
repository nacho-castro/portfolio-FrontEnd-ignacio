import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { IniciarSesionComponent } from '../iniciar-sesion/iniciar-sesion.component';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
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
  }
}
