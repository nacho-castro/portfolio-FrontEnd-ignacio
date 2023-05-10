import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent {
  title: String = '';
  link: String = '';
  image: String = '';
  description: String = '';
  
  constructor(private proyectosService: ProyectosService, private router: Router){
  }

  onCreate(): void {
    const edu = new Proyectos(this.title, this.description, this.image, this.link);
    this.proyectosService.save(edu).subscribe(data => {
      alert("Proyecto añadido");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    })
  }
}

