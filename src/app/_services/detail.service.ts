import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class DetailService {
    constructor(private http: Http) { }
    /*search(term: string) :Observable<Hero[]> {
        //return this.http.get(`api/search/?name=${term}`)
        return this.http.get(`app/data/detail.json`)
        .map(response => response.json());



    }*/
    detail(term:string){
    	return this.http.get(`api/data/detail.json`)
    	.map(res => res.json())
    }




}