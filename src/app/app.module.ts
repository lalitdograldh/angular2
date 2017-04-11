import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { AppComponent }  from './app.component';
import { SearchPipe }  from './_pipe/pipe';
import { PageNotFoundComponent }  from './not-found.component';
import { routing }        from './app.routing';
import { DashboardComponent }  from './components/dashboard/dashboard.component';
import { HonbleComponent }  from './components/honble/honbleJudges.component';
import { NotificationComponent }  from './components/notifications/notification.component';
import { DisplayBoardComponent }  from './components/displayboard/displayBoard.component';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
//import { FooterComponent }  from './components/footer/footer.component';
import { ForgotComponent }  from './components/forgotPassword/forgot.component';
import { AlertService, AuthenticationService, UserService } from './_services/index';
//import { creditCard } from './_services/creditCard.service';
import { SearchService } from './_services/search.service';
//import { DetailService } from './_services/detail.service';
import { LoginComponent }  from './components/login/login.component';
import { RoasterComponent }  from './components/roaster/roaster.component';
import { DisplayDetailComponent } from './components/displaydetail/displayDetail.component';
import { AuthGuard } from './_guards/index';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileEditComponent } from './components/profile/profileEdit.component';
//import {CalendarComponent} from "angular2-fullcalendar";
import { HolidayCalenderComponent } from './components/calender/calender.component';
//import { ExtendCalenderComponent }  from './components/calender/ExtendCalender.component';
//import { CalendarModule } from 'angular-calendar';
import { InlineEditorModule } from 'ng2-inline-editor';
import {MultipleDatePickerModule} from 'multiple-date-picker-a2';
//import { Ng2TableModule } from 'ng2-table';
import {SubscriptionPlanComponent} from './components/subscriptionplan/subscriptionPlan.component';
import {FormSubscriptionPlanComponent} from './components/formsubscriptionplan/formsubscriptionPlan.component';
import { CreditCardDirectivesModule } from 'ng2-cc-library';

@NgModule({
	imports:      [MultipleDatePickerModule,BrowserModule,InlineEditorModule,MaterialModule,FormsModule, ReactiveFormsModule,HttpModule,routing, AgmCoreModule.forRoot({
		apiKey: 'AIzaSyDpptJz1z3caSd2SyBMQ_YtTXXjlz1j5tA'
	}),JsonpModule, Ng2BootstrapModule.forRoot(),CreditCardDirectivesModule],
	declarations: [ AppComponent,LoginComponent,ForgotComponent,DashboardComponent,PageNotFoundComponent,HonbleComponent,SearchPipe,ProfileComponent,RoasterComponent,DisplayBoardComponent,NotificationComponent,DisplayDetailComponent,ProfileEditComponent,HolidayCalenderComponent,SubscriptionPlanComponent,FormSubscriptionPlanComponent ],
	providers : 	[AlertService, AuthenticationService, UserService,AuthGuard,SearchService],
	bootstrap:    [ AppComponent ]
})

export class AppModule { }


