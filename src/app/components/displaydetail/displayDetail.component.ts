import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
	selector: 'components-displayDetail',
	templateUrl: './app/components/displaydetail/displayDetail.component.html'
})
export class DisplayDetailComponent { 
	constructor(private router: Router){}
	
	public Data :any= [
	{ name: "Shiavax jal Vazifdar", caseNo:220 }
	];

	navigate(){
		this.router.navigate(["dashboard"]);
	}
}
