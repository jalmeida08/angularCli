import { RouterModule, Routes } from "@angular/router";
import { ProfessorComponent } from "./professor/professor.component";
import { ProfessorCadastroComponent } from "./professor/professor-cadastro.component";
import { AlunoComponent } from "./aluno/aluno.component";
import { AlunoCadastroComponent } from "./aluno/aluno-cadastro.component";
import { CursoComponent } from "./curso/curso.component";

const appRoutes : Routes = [
    {path : "professor", component : ProfessorComponent},
    {path : "professor/cadastro", component : ProfessorCadastroComponent},
    {path : "professor/cadastro/:id", component : ProfessorCadastroComponent},
    {path : "aluno", component : AlunoComponent},
    {path : "aluno/cadastro", component : AlunoCadastroComponent},
    {path : "aluno/cadastro/:id", component : AlunoCadastroComponent},
    {path : "curso", component : CursoComponent},
    { path: '**', redirectTo: 'professor'}
];

export const routing = RouterModule.forRoot(appRoutes);