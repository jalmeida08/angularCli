import { Aluno } from "./aluno";
import { Curso } from "./curso";
import { Professor } from "./professor";



export class Turma{
    professor : Professor;
    curso : Curso;
    aluno : Aluno[];

}