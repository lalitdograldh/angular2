import { Component,NgModule } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {  BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators,NgForm } from '@angular/forms';
import {InlineEditorModule} from 'ng2-inline-editor';
@Component({
	selector: 'components-profileEdit',
	templateUrl: './app/components/profile/profileEdit.component.html'
})
export class ProfileEditComponent {
  public isInput:boolean=false;
  //public editableText:boolean=false;
  public Open:boolean=false;
  navigate() {
    this.router.navigate(["dashboard"]);
  }
  /* FunctionBlock(){
    this.isInput= true;
  }*/
  public editableText :any= 
  {enrolment:'P/345/1989',email:'rishavjain@gmail.com',fName:'Raghunath Jain',LandLineNo:'2651417',MobileNo:'94177-59300',ResiAddress:'(R) 3018,SECTOR 28-D,CHD',CourtAddress:'(O) Room No. 16,New Bar Complex,High Court,Chandigrah.'}
  
  ;
  saveEditable(value:string) {
    //call to http service
   // console.log('http.service: ' + value);
  }
  


  constructor( private route: ActivatedRoute,private router: Router, public inlineeditor :InlineEditorModule ){}

  // google maps zoom level
  zoom: number = 8;
  
  // initial center position for the map
  lat: number = 30.7350626;
  lng: number = 76.6934883;
  
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }


  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
  {
    lat: 30.735025,
    lng: 76.6934882,
    label: 'Residence',
    draggable: true
  },
  {
    lat: 30.7573008,
    lng: 76.8043739,
    label: 'High Court',
    draggable: false
  }
  ]
}
// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}


