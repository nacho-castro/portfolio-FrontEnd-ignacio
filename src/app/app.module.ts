import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
<<<<<<< HEAD
import {HttpClientModule } from '@angular/common/http';
import { PerfilService } from './services/perfil.service';
import { LogButtonComponent } from './components/log-button/log-button.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExperienciaService } from './services/experiencia.service';
import { NewPerfilComponent } from './components/perfil/new-perfil.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewSkillsComponent } from './components/skills/new-skills.component';
import { EditSkillsComponent } from './components/skills/edit-skills.component';
import { NewProyectosComponent } from './components/proyectos/new-proyectos.component';
import { EditProyectosComponent } from './components/proyectos/edit-proyectos.component';
import { EducacionService } from './services/educacion.service';
import { SkillsService } from './services/skills.service';
import { ProyectosService } from './services/proyectos.service';
import { AutenticacionService } from './services/autenticacion.service';
=======
import { HttpClientModule } from '@angular/common/http';
import { PortfolioService } from './services/portfolio.service';
import { LogButtonComponent } from './components/log-button/log-button.component';
import { EditButtonComponent } from './components/edit-button/edit-button.component';
>>>>>>> c77fe5a74dabe6a741159d864ba5a04c50694243

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PerfilComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    LogButtonComponent,
<<<<<<< HEAD
    IniciarSesionComponent,
    PortfolioComponent,
    NewPerfilComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    NewSkillsComponent,
    EditSkillsComponent,
    NewProyectosComponent,
    EditProyectosComponent
=======
    EditButtonComponent
>>>>>>> c77fe5a74dabe6a741159d864ba5a04c50694243
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PerfilService, ExperienciaService, EducacionService, SkillsService, ProyectosService, AutenticacionService, IniciarSesionComponent],
=======
    HttpClientModule
  ],
  providers: [PortfolioService],
>>>>>>> c77fe5a74dabe6a741159d864ba5a04c50694243
  bootstrap: [AppComponent]
})
export class AppModule { }
