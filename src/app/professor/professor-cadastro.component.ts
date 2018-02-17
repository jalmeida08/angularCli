import {Component} from "@angular/core";
import { Professor } from "../model/professor";

@Component({
    moduleId : module.id,
    selector : "professorCadastro",
    templateUrl : "./professor-cadastro.component.html"
})

export class ProfessorCadastroComponent{
    
    professor : Professor = new Professor();

    constructor(){
    }

    public salvar(event){
        event.preventDefault();
        console.log(this.professor);
        alert("salvo");
    }
}