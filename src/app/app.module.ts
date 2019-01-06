import { BrowserModule } from '@angular/platform-browser';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import {
          MatButtonModule ,
          MatInputModule ,
          MatIconModule,
          MatSelectModule,
          MatOptionModule,
          MatCheckboxModule,
          MatFormFieldModule,
          MatGridListModule,
          MatCardModule,
          MatSnackBarModule,
     } from '@angular/material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

// importing the compinnts 
import { MainFormComponent } from './main-form/main-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCardModule,
    MatSnackBarModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
