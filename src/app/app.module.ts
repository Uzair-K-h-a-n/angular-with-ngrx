import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StoreModule } from '@ngrx/store';
import { studentReducer } from './student/student-store/student.reducer';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({studentList: studentReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
