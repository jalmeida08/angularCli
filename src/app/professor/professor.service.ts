import { Injectable } from "@angular/core";
import { Http } from "@angular/http";


@Injectable()
export class ProfessorService{

    private _http : Http;
    private _url : string = "http://localhost:8080/professor/";

    constructor(http : Http){
        this._http = http;
    }

    public listar(){
        return this._http
            .get(this._url)
            .map(res => res.json());
    }

}