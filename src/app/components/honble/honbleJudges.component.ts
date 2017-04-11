import { Component, OnInit } from '@angular/core';

import { Router,ActivatedRoute } from '@angular/router';
import {Http, Response, Request, RequestMethod} from '@angular/http';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { SearchService} from '../../_services/search.service';
//import { Hero } from '../../_services/hero';
//import { SearchPipe } from '../../_pipe/pipe';


@Component({
	selector: 'components-honble',
	templateUrl: './app/components/honble/honbleJudges.component.html'
})
export class HonbleComponent implements OnInit  { 

    //heroes: Observable<Hero[]>;
    items:Observable<string[]>;
    //private searchTerms = new Subject<string>();
    //public searchBox:string="";

    constructor(private searchService: SearchService,private router: Router){}
    navigate() {
        this.router.navigate(["dashboard"]);
    }
    private searchTermStream = new Subject<string>();
    search(term:string){

        //this.searchBox= term;
        //this.searchTerms.next(term);
       this.searchTermStream.next(term);
    }

    ngOnInit() {
        this.items = this.searchTermStream
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap((term: string) =>  this.searchService.search(term));
      

    }

    /*ngOnInit(): void {
         //console.log(this.searchTerms,"this.searchTerms");
        this.heroes = this.searchTerms.debounceTime(300).distinctUntilChanged()   
              .switchMap(term => term   // switch to new observable each time the term changes
                // return the http search observable
                ? this.searchService.search(term)
                // or the observable of empty heroes if there was no search term
                : Observable.of<Hero[]>([]))
              .catch(error => {
                // TODO: add real error handling
                console.log(error);
                return Observable.of<Hero[]>([]);
            });
        }*/

    }
