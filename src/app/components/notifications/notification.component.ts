import { Component ,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
	selector: 'components-notification',
	templateUrl: './app/components/notifications/notification.component.html'
})
export class NotificationComponent { 
    
    navigate() {
        this.router.navigate(["dashboard"]);
    }
	constructor( private route: ActivatedRoute,private router: Router){
    //alert('ggg')
  }


     
}
