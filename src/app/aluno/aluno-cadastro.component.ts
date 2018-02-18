import { Component } from "@angular/core";
import { Aluno } from "../model/aluno";
import { AlunoService } from "./aluno.service";

@Component({
    moduleId : module.id,
    selector : "cadastroAluno",
    templateUrl : "./aluno-cadastro.component.html"
})

export class AlunoCadastroComponent{
    
    aluno : Aluno = new Aluno();
    service : AlunoService;
    mensagem : string;

    constructor(service : AlunoService){
        this.service = service;
    }

    salvar(event){
        event.preventDefault();
        this.service
            .salvar(this.aluno)
            .subscribe(res => {
                this.aluno = new Aluno();
                this.mensagem ="Salvo com sucesso";
            }, erro => {
                console.log("ERRO: " + erro)
            });
       
    }
}