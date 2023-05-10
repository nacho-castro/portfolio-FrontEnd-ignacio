import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills.model';
import { SkillsService } from 'src/app/services/skills.service';
import { IniciarSesionComponent } from '../iniciar-sesion/iniciar-sesion.component';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  skills : Skills[] = [];

  constructor(public skillsService:SkillsService, private iniciarSesion:IniciarSesionComponent, private autenticacion:AutenticacionService){}
 
  isLogged = false;

 ngOnInit(): void {
    this.cargarSkills();
    this.autenticacion.getIsLoggedIn().subscribe((isLoggedIn: boolean) => {
      this.isLogged = isLoggedIn;
    });
  }

  cargarSkills():void{
    this.skillsService.getSkills().subscribe(data => {this.skills = data;})
  }

  borrar(id?: number) {
    if (id != undefined) {
      this.skillsService.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo Eliminar");
        })

    }
  }
}

