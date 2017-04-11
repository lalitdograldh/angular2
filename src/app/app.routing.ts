import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/index';
import { ForgotComponent } from './components/forgotPassword/forgot.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './not-found.component';
import { HonbleComponent } from './components/honble/honbleJudges.component';
import { RoasterComponent } from './components/roaster/roaster.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DisplayBoardComponent } from './components/displayboard/displayBoard.component';
import { NotificationComponent }  from './components/notifications/notification.component';
import { DisplayDetailComponent } from './components/displaydetail/displayDetail.component';
import { ProfileEditComponent } from './components/profile/profileEdit.component';
import { HolidayCalenderComponent } from './components/calender/calender.component';
import { AuthGuard } from './_guards/index';
import {SubscriptionPlanComponent} from './components/subscriptionplan/subscriptionPlan.component';
import {FormSubscriptionPlanComponent} from './components/formsubscriptionplan/formsubscriptionPlan.component';

const appRoutes: Routes = [
	//{ path: '', redirectTo: '/login', pathMatch:'full'  },
    { path: 'login', component: LoginComponent },
    { path: 'forgot', component: ForgotComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'honble', component: HonbleComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'display-board', component: DisplayBoardComponent },
    { path: 'roaster', component: RoasterComponent },
    { path: 'display-detail/:id',component:DisplayDetailComponent},
    { path: 'profileEdit',component:ProfileEditComponent},
    { path: 'calender',component:HolidayCalenderComponent},
    { path: 'notification', component: NotificationComponent },
    { path: 'subscription', component: SubscriptionPlanComponent },
    { path: 'formsubscription', component:FormSubscriptionPlanComponent},




    // otherwise redirect to home
   // { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
    //{ path: '**', component: PageNotFoundComponent }
    { path: '**', redirectTo: 'login', pathMatch:'full' }
];

export const routing = RouterModule.forRoot(appRoutes,{
    useHash:true
});