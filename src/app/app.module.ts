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

@NgModule({
  declarations: [
    AppComponent,
    ProfessorCadastroComponent,
    ProfessorComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule,
    ProfessorModule,
    ProfessorCadastroModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
