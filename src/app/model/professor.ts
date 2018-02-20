import { Pessoa } from "./pessoa";
import { Turma } from "./turma";

export class Professor extends Pessoa{
    turma : Turma[]; 
}