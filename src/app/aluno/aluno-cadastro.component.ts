import { Component } from "@angular/core";
import { Aluno } from "../model/aluno";
import { AlunoService } from "./aluno.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "cadastroAluno",
    templateUrl: "./aluno-cadastro.component.html"
})

export class AlunoCadastroComponent {

    aluno: Aluno = new Aluno();
    service: AlunoService;
    mensagem: string;
    route: ActivatedRoute;
    router: Router;

    constructor(service: AlunoService, route: ActivatedRoute, router: Router) {
        this.service = service;
        this.route = route;
        this.router = router;

        this.route.params.subscribe(params => {
            let id: number = params["id"];
            if (id) {
                this.service
                    .buscarPorId(id)
                    .subscribe(res => {
                        this.aluno = res
                    }, erro => {
                        console.log("erro")
                    });
            }
        })
    }

    salvar(event) {
        event.preventDefault();
        this.service
            .salvar(this.aluno)
            .subscribe(res => {
                this.aluno = new Aluno();
                this.mensagem = "Salvo com sucesso";
            }, erro => {
                console.log("ERRO: " + erro)
            });

    }
}