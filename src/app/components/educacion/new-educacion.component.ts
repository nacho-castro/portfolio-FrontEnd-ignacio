import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit{
  title: String = '';
  school: String = '';
  image: String = '';
  start: number;
  end: number;

  constructor(private educacionService: EducacionService, private router: Router){
  }

  ngOnInit(): void {
  }

  onCreate():void{
    const edu = new Educacion(this.title, this.school, this.image, this.start, this.end);
    this.educacionService.save(edu).subscribe(data => {
      alert("Estudios añadidos");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    })
  }
}
