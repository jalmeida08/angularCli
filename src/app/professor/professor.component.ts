import {Component} from "@angular/core";
import {Http} from "@angular/http";
import { ProfessorService } from "./professor.service";
import { Professor } from "../model/professor";

@Component({
    moduleId : module.id,
    selector : "professor",
    templateUrl : "./professor.component.html"
})

export class ProfessorComponent{
    service : ProfessorService;
    mensagem : string;
    professor : Professor[];

    constructor(http : Http, service : ProfessorService,){
        this.service = service;

        this.service.listar()
            .subscribe(res => {
                this.professor = res,
                console.log(this.professor)
            }, erro => {
                console.log("Este é o erro: " + erro)
            }); 
    }

    public remover (professor : Professor){
        
            if(confirm("Deseja Remover a foto?")){
                this.service
                    .remover(professor)
                    .subscribe(res => {
                        let novaLista = this.professor.slice(0);
                        let indice = novaLista.indexOf(professor);
                        novaLista.splice(indice, 1);
                        this.professor = novaLista;
                        this.mensagem = "Removida com sucesso";
                        console.log("sucesso: " + res);
                    },
                        erro => {console.log("ERRO: " + erro)
                    });
            }
        }
        

        
} 