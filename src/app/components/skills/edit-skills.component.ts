import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills.model';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit{

  skill : Skills = null;

  constructor(private skillsService: SkillsService, private activatedRoute: ActivatedRoute, private router: Router){
    
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillsService.detail(id).subscribe(
      data =>{
        this.skill = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillsService.update(id, this.skill).subscribe(data =>{
      alert("Skill editada");
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar");
      this.router.navigate(['']);
    })

  }
}
