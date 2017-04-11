import { Component,ElementRef } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
	selector: 'components-displayBoard',
	templateUrl: './app/components/displayboard/displayBoard.component.html'
})
export class DisplayBoardComponent { 
	public showId:any;
	
	
	public ischecked:any;
	public isSubmit:boolean=false;
	public HEROES :any= [
	{id: 1, courtRoom:1, ischecked:false,caseNo:220},
	{id: 2, courtRoom:2, ischecked:false,caseNo:303},
	{id: 3, courtRoom:3, ischecked:false,caseNo:414},
	{id: 4, courtRoom:4, ischecked:false,caseNo:126},
	{id: 5, courtRoom:5, ischecked:false,caseNo:514}
	];
	constructor(private router: Router, public elementRef:ElementRef){}
	navigate() {
		this.router.navigate(["dashboard"]);
	}
	

	saveFunction(){

		this.isSubmit= true;
		//this.myClass.push('red');

	}
	saveFunctionNew(target:any,index:number){
		this.isSubmit= false;

	}
	detail(id:number,event:any,index:number){
		
		let row=   event.srcElement.classList;
		//console.log(row,event,index ,event.nativeElement);

		if(row.contains("mat-checkbox-inner-container")){
            this.HEROES[index].ischecked = !this.HEROES[index].ischecked;
			return true;
		}

		this.router.navigate(['display-detail', id]);
		
	}
	
}


