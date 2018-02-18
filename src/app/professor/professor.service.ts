import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Professor } from "../model/professor";
import { Observable } from "rxjs/Observable";
import { Response } from "@angular/http/src/static_response";


@Injectable()
export class ProfessorService {

    private _http: Http;
    private _headers: Headers;
    private _url: string = "http://localhost:8080/professor/";

    constructor(http: Http) {
        this._http = http;

    }

    public salvar(professor: Professor): Observable<Response> {
        this._headers = new Headers();
        this._headers.append("Content-Type", "application/json");

        if (professor.id) {
            return this._http
                .post(this._url, JSON.stringify(professor), { headers: this._headers });
        }else{
            return this._http
                .put(this._url + professor.id, JSON.stringify(professor), {headers : this._headers})
        }
    }

    public listar(): Observable<Professor[]> {
        return this._http
            .get(this._url)
            .map(res => res.json());
    }

    public buscarPorId(id: number): Observable<Professor> {
        return this._http
            .get(this._url + id)
            .map(res => res.json());
    }

    public remover(professor: Professor): Observable<Response> {
        return this._http
            .delete(this._url + professor.id);
    }


}