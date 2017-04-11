import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
//import { Ng2BootstrapModule } from 'ng2-bootstrap/tabs';

@Component({
	selector: 'components-roaster',
	templateUrl: './app/components/roaster/roaster.component.html'
})
export class RoasterComponent { 
    public tabs: any[] = [
    {title: 'SINGLE BENCH', content: 'Raw denim you probably havent heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh	dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.', customClass: 'customClass'},
    {title: 'Dynamic Title 2', content: 'Dynamic content 2', customClass: 'customClass'}
  ];
    constructor(private router: Router){}
    navigate() {
        this.router.navigate(["dashboard"]);
    }


}
