import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfessorModule } from './professor/professor.module';
import { ProfessorCadastroModule } from './professor/professor-cadastro.module';
import { routing } from './app.routes';
import 'rxjs/Rx';
import { ProfessorComponent } from './professor/professor.component';
import { ProfessorService } from './professor/professor.service';
import { ProfessorCadastroComponent } from './professor/professor-cadastro.component';
import {AlunoComponent} from "./aluno/aluno.component";
import { AlunoModule } from './aluno/aluno.module';
import { AlunoCadastroComponent } from './aluno/aluno-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfessorCadastroComponent,
    ProfessorComponent,
    AlunoComponent,
    AlunoCadastroComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule,
    ProfessorModule,
    ProfessorCadastroModule,
    AlunoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
