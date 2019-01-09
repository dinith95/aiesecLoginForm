import { Component, OnInit ,Inject} from '@angular/core';
import { MatSnackBarModule } from '@angular/material';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatSnackBar} from '@angular/material';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators, AbstractControl} from '@angular/forms';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

const passwordValidator = require('password-validator');

export interface SelectList{
  value: string;
  viewValue: string;
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {
  constructor(public snackBar: MatSnackBar, private httpClient: HttpClient) { }
  fname: String = '';
  lname: String = '';
  password: String = '';
  accepted: Boolean = false;
  email: String = '';
  mobNo: String = '';
  refMethod: String = '';
  selectedRefMethod: String = '';
  selectedCommitee: String = '';

  hide: boolean; // toggle the hide and show of the password 
  dataNotNull: Boolean = false; // checks whether any field is null
  validPassword: Boolean = false; // checks for the validity of the password
  // pwSchema: any;
  URL = "https://42297c99-d142-447c-923e-1133808acfe7.mock.pstmn.io/browser";

  fcemail = new FormControl('', [ Validators.required , Validators.email]);
  fcpassword = new FormControl('', [this.validatePassword, Validators.required]);

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
    // this.pwSchema = new passwordValidator();
    // this.pwSchema
    //     .is().min(8)
    //     .has().digits()
    //     .has().uppercase()
    //     .has().lowercase();
  }

  validateData(){
    if (this.fname !== '' && this.lname !== '' && this.email !== '' && this.mobNo !== ''
     && this.selectedCommitee !== '' && this.selectedRefMethod !== '' && this.accepted) {
      // this.dataNotNull = true;
      const pwSchema = new passwordValidator();
      pwSchema
        .is().min(8)
        .has().digits()
        .has().uppercase()
        .has().lowercase();
      if (pwSchema.validate(this.fcpassword.value) && !this.fcemail.invalid){
        return true;
      }
    }
    return false;
  }

  validatePassword(control: AbstractControl): {[ key: string]: boolean} | null {
    if (control.value !== undefined ) {
      const pwSchema = new passwordValidator();
      pwSchema
        .is().min(8)
        .has().digits()
        .has().uppercase()
        .has().lowercase();
      if (!pwSchema.validate(control.value)) {
        return { 'validPassword' : true};
      }
    }
    // this.submitDisabled = false;
    return null;
  }

  submitData() {
    if (this.validateData()){
      // alert('good to proceed');
      const userData = {
        'first_name' : this.fname ,
        'last_name': this.lname,
        'phone': this.mobNo,
        'email' : this.email,
        'password' : this.password,
        'lc': this.selectedCommitee,
        'refMethod' : this.selectedRefMethod

      };
      return this.httpClient.post(this.URL , userData).subscribe(
        (data) => {
          alert('data sent succesfully');
        },
        (e) => {
          console.log('error' , error);
        }
      );
    }
    // alert("submit dosent work");
  }

  incorretEmail() {
    if (this.fcemail.hasError('required')) {
      // console.log('no email');
      // this.submitDisabled = true ;
      return 'email address is required';
    }
    if (this.fcemail.hasError('email')) {
      // console.log('incorrect email');
      // this.submitDisabled = true ;
      return 'enter proper email address';
    }
    // this.submitDisabled = false ;
    return '';
  }

  incorrectPassword() {
    if (this.fcpassword.hasError('required')) {
      // this.submitDisabled = true ;
      return ('password is required');
    }
    if ( this.fcpassword.hasError('validPassword')) {
      // this.submitDisabled = true ;
      return ('password should have at least  one lowercase letter ,  one uppercase letter , one digit  and minimum of 8 character ');
    }
    // this.submitDisabled = false ;
    return '';
  }
}
