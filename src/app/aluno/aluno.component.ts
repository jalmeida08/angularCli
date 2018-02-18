import{Component} from "@angular/core";
import { Aluno } from "../model/aluno";
import { AlunoService } from "./aluno.service";

@Component({
    moduleId : module.id,
    selector : "aluno",
    templateUrl : "./aluno.component.html"
})

export class AlunoComponent{

    aluno : Aluno[];
    service : AlunoService;
    mensagem : string;

    constructor(service : AlunoService){
        this.service = service;

        this.service
            .listar()
            .subscribe(res => {
                this.aluno = res,
                console.log(this.aluno)
            }, erro => {
                console.log("erro: "+ erro)
            })
    }

    public remover(aluno : Aluno){
       if(confirm("Deseja excluir :"+ aluno.primeiroNome)){
           this.service
            .remover(aluno)
            .subscribe(res =>{
                let novaLista = this.aluno.slice(0);
                let indice = novaLista.indexOf(aluno);
                novaLista.splice(indice, 1);
                this.aluno = novaLista;
                this.mensagem = "Excluido com sucesso";
            }, erro =>{
                console.log("erro: "+ erro)
            });
       }
    }


}