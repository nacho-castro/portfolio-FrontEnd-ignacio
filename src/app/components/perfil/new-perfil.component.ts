import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Perfil } from 'src/app/model/perfil.model';
import { ImageService } from 'src/app/services/image.service';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-new-perfil',
  templateUrl: './new-perfil.component.html',
  styleUrls: ['./new-perfil.component.css']
})
export class NewPerfilComponent implements OnInit {
  perfil: Perfil = null;

  constructor(private perfilService: PerfilService, private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
      this.perfilService.detail(id).subscribe(
        data =>{
          this.perfil = data;
        }, err => {
          alert("Error al modificar");
          this.router.navigate(['']);
        }
      )
  }

  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.perfilService.update(id, this.perfil).subscribe(data =>{
      alert("Perfil editado");
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar");
      this.router.navigate(['']);
    })

  }

}
