import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Skills } from 'src/app/model/skills.model';
import { SkillsService } from 'src/app/services/skills.service';
import { IniciarSesionComponent } from '../iniciar-sesion/iniciar-sesion.component';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
=======
import { PortfolioService } from 'src/app/services/portfolio.service';
>>>>>>> c77fe5a74dabe6a741159d864ba5a04c50694243

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
<<<<<<< HEAD
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

=======
  skillsList:any;

  constructor(private datosPortfolio:PortfolioService){}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.skillsList=data.skills;
    })
  }
  
  edit(){
    console.log("Edit Skills!");
  }
}
>>>>>>> c77fe5a74dabe6a741159d864ba5a04c50694243
