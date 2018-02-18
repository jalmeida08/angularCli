import{Component} from "@angular/core";
import { Aluno } from "../model/aluno";
import { AlunoService } from "./aluno.service";

@Component({
    moduleId : module.id,
    selector : "aluno",
    templateUrl : "./aluno.component.html"
})

export class AlunoComponent{

    aluno : Aluno;
    service : AlunoService;

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
        console.log(aluno);
    }


}