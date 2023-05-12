import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos.model';
import { ImageService } from 'src/app/services/image.service';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent {
  proy : Proyectos = null;

  constructor(private proyectosService: ProyectosService, private activatedRoute: ActivatedRoute, private router: Router){
    
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectosService.detail(id).subscribe(
      data =>{
        this.proy = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectosService.update(id, this.proy).subscribe(data =>{
      alert("Proyecto editado");
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar");
      this.router.navigate(['']);
    })
  }
}
