import { Component,OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators,NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { CreditCardValidator  } from 'ng2-cc-library';
import {Http, Response, Request, RequestMethod} from '@angular/http';
@Component({
	selector: 'components-formsubscriptionPlan',
	templateUrl: './app/components/formsubscriptionplan/formsubscriptionPlan.component.html'
})
export class FormSubscriptionPlanComponent implements OnInit  { 
	
	
	//public form:any;
	form: FormGroup;
	submitted: boolean = false;
	constructor(private router: Router,private fb: FormBuilder,private http: Http){}
	
	ngOnInit(){
	this.form = this.fb.group({
		
      creditCard: ['', [CreditCardValidator.validateCCNumber]],
      expirationDate: ['', [CreditCardValidator.validateExpDate]],
      cvc: ['', [Validators.required, <any>Validators.minLength(3), <any>Validators.maxLength(4)]] 

    });
	}
	onSubmit(form:any) {
    this.submitted = true;
	let formObj = this.form.getRawValue();
	//let serializedForm = JSON.stringify(formObj);	
    //console.log(serializedForm);
    return this.http.post('http://localhost:3000/api',formObj)
		.subscribe(response => response.json())
    
  }
    

	
}



