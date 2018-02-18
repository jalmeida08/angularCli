import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Aluno } from "../model/aluno";

@Injectable()
export class AlunoService{

    private _http : Http;
    private  _headers : Headers;
    private _url : string = "http://localhost:8080/aluno/";

    constructor(http : Http){
        this._http = http;
    }

    public listar(){
        return  this._http
            .get(this._url)
            .map( res => res.json());
    }

    public remover(aluno : Aluno){

    }
}