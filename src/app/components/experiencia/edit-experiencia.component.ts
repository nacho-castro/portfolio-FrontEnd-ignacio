import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit{
  exp : Experiencia = null;

  constructor(private experienciaService: ExperienciaService, private activatedRoute: ActivatedRoute, private router: Router,  public imageService: ImageService){

  }

  ngOnInit(): void {
      const id = this.activatedRoute.snapshot.params['id'];
      this.experienciaService.detail(id).subscribe(
        data =>{
          this.exp = data;
        }, err => {
          alert("Error al modificar");
          this.router.navigate(['']);
        }
      )
  }

  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.exp.image = this.imageService.url;
    this.experienciaService.update(id, this.exp).subscribe(data =>{
      alert("Experiencia editada");
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar");
      this.router.navigate(['']);
    })
  }

  uploadImage($event: any){
    const id = this.activatedRoute.snapshot.params['id'];
    const name = "exp_" + id;
    this.imageService.uploadImage($event, name);
  }
    
}
