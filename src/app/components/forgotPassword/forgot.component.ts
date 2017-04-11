import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators,NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import {Http, Response, Request, RequestMethod} from '@angular/http';
import { Forgot }    from './forgot';
import { AlertService, AuthenticationService, UserService} from '../../_services/index';
@Component({
	selector: 'components-forgot',
	templateUrl: './app/components/forgotPassword/forgot.component.html'
})

export class ForgotComponent {
	public model:any;
	public loading:boolean=false;


	constructor( private route: ActivatedRoute,private router: Router,private authenticationService: AuthenticationService,
		private alertService: AlertService){

	    this.model= new Forgot("");	
	    //console.log(this.model );
	}

	

}

