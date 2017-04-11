import { Injectable } from '@angular/core';
import { Http, Headers, Response,RequestOptions,Jsonp, URLSearchParams  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
//import {Hero} from './hero';
//import {SearchPipe} from '../_pipe/pipe';


@Injectable()
export class SearchService {
	constructor(private jsonp: Jsonp,private http :Http) { }

	
	/*search(term: string) :Observable<Hero[]> {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		//return this.http.get(`api/search/?name=${term}`)
		return this.http.get('app/data/search.json')
		.map(response => response.json() as Hero[])
		.catch(this.handleError);


	}
	private handleError (error: Response | any) {
		// In a real world app, we might use a remote logging infrastructure
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		console.error(errMsg);
		return Observable.throw(errMsg);
	}*/

	search (term: string) {
    //console.log(term);
	let wikiUrl = 'app/data/search.json';
    //let params = new URLSearchParams();
    /*let wikiUrl = 'http://en.wikipedia.org/w/api.php';
    params.set('search', term); // the user's search value
    params.set('action', 'opensearch');
    params.set('format', 'json');*/
    //params.set('callback', 'JSONP_CALLBACK');
    // TODO: Add error handling
    let queryString =
    `?search=${term}`;
    console.log(queryString);
    //this.times=this.times+1;
    return this.http    
    .get(wikiUrl+queryString)
    .map(response => <string[]> response.json());
}




}