import { Component, OnInit } from '@angular/core';

export interface SelectList{
  value: string;
  viewValue:string;
}

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

  constructor() { }
  fname: String;
  lname: string;
  password: string;
  accepted: boolean;
  email: string;
  mobNo: string;
  refMethod: string;
  selectedCommitee: string ;

  hide: boolean; // toggle the hide and show of the password 
  
  

  localOffice: SelectList[]  = [
    {value: '1' , viewValue: 'ACBT'},
    {value: '2' , viewValue: 'Achievers Lanka Business School'},
    {value: '3' , viewValue: 'ANC'},
    {value: '4' , viewValue: 'APIIT'},
    {value: '5' , viewValue: 'ICBT Colombo Campus'},
    {value: '6' , viewValue: 'IIT'},
    {value: '7' , viewValue: 'KDU'},
    {value: '8' , viewValue: 'NSBM Green University'},
    {value: '9' , viewValue: 'Other'},
    {value: '10' , viewValue: 'Royal Institute'},
    {value: '11' , viewValue: 'SLIIT'},
    {value: '12' , viewValue: 'Spectrum Institute of Science & Technology'},
    {value: '13' , viewValue: 'University of Colombo'},
    {value: '14' , viewValue: 'University of Kelaniya'},
    {value: '15' , viewValue: 'University of Moratuwa'},
    {value: '16' , viewValue: 'University of Peradeniya'},
    {value: '17' , viewValue: 'University of Ruhuna'},
    {value: '18' , viewValue: 'University of Sri Jayawardenepura'},

  ] ;
  referralMethods: SelectList[] =  [
    {value: '1' , viewValue: 'Friend'},
    {value: '2' , viewValue: 'Information booth on campus'},
    {value: '3' , viewValue: 'Classroom presentation'},
    {value: '4' , viewValue: 'Facebook'},
    {value: '5' , viewValue: 'WeChat'},
    {value: '6' , viewValue: 'Twitter'},
    {value: '7' , viewValue: 'Instagram'},
    {value: '8' , viewValue: 'LinkedIn'},
    {value: '9' , viewValue: 'Other social media channel'},
    {value: '10' , viewValue: 'Search engine'},
    {value: '11' , viewValue: 'Event'},
    {value: '12' , viewValue: 'Emails'},
    {value: '13' , viewValue: 'Telegram'},
    {value: '14' , viewValue: 'Vk'},
    {value: '15' , viewValue: 'Media (magazine, TV, newspaper or radio)'},
  ];

  
  ngOnInit() {
    this.hide =  true;
    
  }
  

  submitData(){
    alert(this.fname);
  }

}
