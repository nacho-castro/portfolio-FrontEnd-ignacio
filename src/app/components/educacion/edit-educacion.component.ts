import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/services/educacion.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit{

  edu : Educacion = null;

  constructor(private educacionService: EducacionService, private activatedRoute: ActivatedRoute, private router: Router,  public imageService: ImageService){
    
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionService.detail(id).subscribe(
      data =>{
        this.edu = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.edu.image = this.imageService.url;
    this.educacionService.update(id, this.edu).subscribe(data =>{
      alert("Educacion editada");
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar");
      this.router.navigate(['']);
    })

  }

  uploadImage($event: any){
    const id = this.activatedRoute.snapshot.params['id'];
    const name = "edu_" + id;
    this.imageService.uploadImage($event, name);
  }
}
