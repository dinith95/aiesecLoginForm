import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule} from '@angular/router'
import { MainFormComponent} from './main-form/main-form.component';

const routes: Routes = [
  {
    path: '',
    component: MainFormComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
