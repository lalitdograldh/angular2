import { Component,HostListener } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { MultipleDatePickerModule } from 'multiple-date-picker-a2';
import * as moment from 'moment';
//import {CalendarModule} from 'primeng/primeng';
//import { Ng2BootstrapModule } from 'ng2-bootstrap';
//import {Ng2TableModule } from 'ng2-table';
//import { TableData } from './table-data';
//import {CalendarComponent} from "angular2-fullcalendar";
//import * as moment from 'moment';
//import { Person } from './person';

@Component({
	selector: 'components-calender',
	templateUrl: './app/components/calender/calender.component.html'
})
export class  HolidayCalenderComponent  { 
	//date:Date;
	//minDate:Date;
	//disabledDate:{dt:Date,mode:string};
	constructor(private router: Router){}
	
	public highlightDays = [
	{date: moment().date(2).valueOf(), css: 'holiday', selectable: false,title: 'Holiday time !',"datename": moment().date(2).format("DD-MMM")},
	{date: moment().date(14).valueOf(), css: 'holiday', selectable: false,title: 'We don\'t work today',"datename" : moment().date(14).format("DD-MMM")},
	{date: moment().date(25).valueOf(), css: 'holiday', selectable: true,title: 'I\'m thir... i\'m 28, seriously, I mean ...',"datename" : moment().date(25).format("DD-MMM")}
	];


	navigate(){
		this.router.navigate(["dashboard"]);
	}

}
