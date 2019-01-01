import { Component, OnInit ,Inject} from '@angular/core';
import { MatSnackBarModule } from '@angular/material';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatSnackBar} from '@angular/material';

var passwordValidator = require('password-validator');

export interface SelectList{
  value: string;
  viewValue:string;
}
// export class DialogOverviewExampleDialog {

//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// }

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {
  
  constructor(public snackBar: MatSnackBar) { }
  fname: String = "";
  lname: string = "";
  password: string = "";
  accepted: boolean = false;
  email: string = "";
  mobNo: string = "";
  selectedRefMethod: string = "";
  selectedCommitee: string = "" ;

  hide: boolean; // toggle the hide and show of the password 
  dataNotNull: boolean = false; // checks whether any field is null
  validPassword: boolean = false; // checks for the validity of the password 

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

  validateData(){
    if(this.fname != "" && this.lname != "" && this.email != "" && this.mobNo != ""
     && this.selectedCommitee != "" && this.selectedCommitee != ""){
      this.dataNotNull = true;
    }
    var pwSchema = new passwordValidator();
    pwSchema
      .is().min(8)
      .has().digits()
      .has().uppercase()
      .has().lowercase();
    this.validPassword = pwSchema.validate(this.password);


  }

  submitData(){
    
    this.validateData();
    if(this.dataNotNull){
      if(!this.validPassword){
        // alert("incorrect password");
        var message = "incorrect password type";
        this.snackBar.open(message,"close",{
          duration: 5000,
        })
        
      }
      alert(this.fname);
    }
    // alert("submit dosent work");
    
  }

  

}
