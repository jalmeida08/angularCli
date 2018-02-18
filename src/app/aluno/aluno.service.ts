import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Aluno } from "../model/aluno";
import { Observable } from "rxjs/Observable";
import { Response } from "@angular/http/src/static_response";

@Injectable()
export class AlunoService{

    private _http : Http;
    private  _headers : Headers = new Headers();;
    private _url : string = "http://localhost:8080/aluno/";

    constructor(http : Http){
        this._http = http;
    }

    public listar() : Observable<Aluno[]>{
        return  this._http
            .get(this._url)
            .map( res => res.json());
    }

    public salvar(aluno : Aluno) : Observable<Response> {
        this._headers.append("Content-Type", "APPLICATION/JSON");

        return this._http
            .post(this._url, JSON.stringify(aluno), {headers : this._headers})
    }
    
    public remover(aluno : Aluno) : Observable<Response> {
        return this._http
            .delete(this._url + aluno.id)
    }

    public buscarPorId(id : number) : Observable<Aluno> {
        return this._http
            .get(this._url + id)
            .map(res => res.json());
    }
}