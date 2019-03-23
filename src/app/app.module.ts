import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireDatabase } from "@angular/fire/database";
import { environment } from "./../environments/environment";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from ".//app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from "@angular/fire";
import { ResponsiveModule } from "ngx-responsive";
// import {AngularFireDatabaseModule} from '@angular/fire/database';

import {
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatOptionModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatGridListModule,
  MatCardModule,
  MatSnackBarModule,
  MatSidenavModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// importing the compinnts
import { MainFormComponent } from "./main-form/main-form.component";
import { from } from "rxjs";
const config = {
  breakPoints: {
    xs: { max: 199 },
    sm: { min: 200, max: 959 },
    md: { min: 960, max: 1079 },
    lg: { min: 1080, max: 1919 },
    xl: { min: 1920 }
  },
  debounceTime: 100
};
@NgModule({
  declarations: [AppComponent, MainFormComponent],
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
    MatSidenavModule,
    ResponsiveModule.forRoot(config),
    // MatDrawerContainer,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {}
