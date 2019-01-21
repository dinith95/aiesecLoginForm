import { AngularFireDatabase } from '@angular/fire/database';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { AngularFireModule  } from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';

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
import { from } from 'rxjs';

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
    MatSnackBarModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
