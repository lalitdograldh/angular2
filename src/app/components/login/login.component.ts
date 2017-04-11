import { Component ,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import {Http, Response, Request, RequestMethod} from '@angular/http';
import { Login }    from './login';
import { AlertService, AuthenticationService, UserService} from '../../_services/index';

@Component({
	selector: 'components-login',
	templateUrl: './app/components/login/login.component.html'
})
export class LoginComponent implements OnInit { 
	public model:any;
	public loading:boolean=false;
	public returnUrl:any;
    public error:string="";
    public hasError:boolean=false;
	constructor( private route: ActivatedRoute,private router: Router,private authenticationService: AuthenticationService,
        private alertService: AlertService){

		this.model = new Login("","");
	}
	ngOnInit() { 
		this.authenticationService.logout();
		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
	}
	login() {

        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
        .subscribe(
            data => {
                if(data.success){
                    this.router.navigate(['/dashboard']);
                }else{
                    this.hasError=true;
                    this.error= "invalid";
                    //this.alertService.error("invalid form");
                }
            },
            error => {
                // login failed so display error
                this.alertService.error(error);
                this.loading = false;
            });
    }
}
