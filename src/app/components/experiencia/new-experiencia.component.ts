import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent {
  title: String = '';
  description: String = '';
  image: String = '';

  constructor(private experienciaService: ExperienciaService, private router: Router) { }

  ngOnInit(): void {

  }

  onCreate(): void {
    const expe = new Experiencia(this.title, this.description, this.image);
    this.experienciaService.save(expe).subscribe(data => {
      alert("Experiencia añadida");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    })
  }

}
