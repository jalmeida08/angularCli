import { Component } from "@angular/core";
import { Professor } from "../model/professor";
import { ProfessorService } from "./professor.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "professorCadastro",
    templateUrl: "./professor-cadastro.component.html"
})

export class ProfessorCadastroComponent {

    public professor: Professor = new Professor();
    public mensagem: string;

    private service: ProfessorService;
    private router: Router;
    private route: ActivatedRoute;

    constructor(service: ProfessorService, router: Router, route: ActivatedRoute) {
        this.service = service;
        this.route = route;
        this.router = router;

        this.route.params.subscribe(params => {
            let id: number = params["id"];
            if (id) {
                this.service
                    .buscarPorId(id)
                    .subscribe(res => {
                        this.professor = res
                    }, erro => [
                        console.log(erro)
                    ]);
            }
        });
    }

    public salvar(event) {

        event.preventDefault();

        this.service
            .salvar(this.professor)
            .subscribe(res => {
                this.mensagem = "Professor salvo com sucesso",
                    this.professor = new Professor()
            }, erro => {
                console.log("Este é o erro: " + erro)
            });
    }
}