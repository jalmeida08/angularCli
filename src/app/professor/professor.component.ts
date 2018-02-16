import {Component} from "@angular/core";
import {Http} from "@angular/http";
import { ProfessorService } from "./professor.service";
import { Professor } from "./professor";

@Component({
    moduleId : module.id,
    selector : "professor",
    templateUrl : "./professor.component.html"
})

export class ProfessorComponent{
    service : ProfessorService;
    
    professor : Professor;

    constructor(http : Http, service : ProfessorService,){
        this.service = service;
        this.professor = new Professor();

        service.listar()
            .subscribe(res => {this.professor = res,console.log(this.professor)}, erro => {console.log("Este é o erro: " + erro)})    
    }
} 