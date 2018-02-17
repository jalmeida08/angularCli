import {Component} from "@angular/core";
import { Professor } from "../model/professor";
import { ProfessorService } from "./professor.service";

@Component({
    moduleId : module.id,
    selector : "professorCadastro",
    templateUrl : "./professor-cadastro.component.html"
})

export class ProfessorCadastroComponent{
    
    professor : Professor = new Professor();
    service : ProfessorService;

    constructor(service : ProfessorService){
        this.service = service;
    }

    public salvar(event){
        
        event.preventDefault();

        console.log(this.professor);
        this.service
            .salvar(this.professor)
            .subscribe(res => {
                    console.log("Professor salvo com sucesso: " + res),
                    this.professor = new Professor()
                },erro=> {
                    console.log("Este é o erro: "+ erro)});
    }
}