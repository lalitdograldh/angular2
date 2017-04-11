import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
	selector: 'components-subscriptionPlan',
	templateUrl: './app/components/subscriptionplan/subscriptionPlan.component.html'
})
export class SubscriptionPlanComponent { 
	constructor(private router: Router){}
	navigate() {this.router.navigate(["dashboard"]);}

	foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}



