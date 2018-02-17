import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Professor } from "../model/professor";


@Injectable()
export class ProfessorService{

    private _http : Http;
    private _headers : Headers;
    private _url : string = "http://localhost:8080/professor/";

    constructor(http : Http){
        this._http = http;
        
    }
    
    public listar(){
        return this._http
        .get(this._url)
        .map(res => res.json());
    }
    
    public salvar(professor : Professor){
        this._headers =  new Headers();
        this._headers.append("Content-Type","application/json");
        return this._http
            .post(this._url, JSON.stringify(professor), {headers : this._headers});
    }

    public remover (professor : Professor){
        console.log(professor);
        return this._http
            .delete(this._url+professor.id);
    }

}