import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { EmployeeComponent } from './parent/employee/employee.component';
import { PatientComponent } from './parent/patient/patient.component';
import { PatientDetailsComponent } from './parent/patient/patient-details/patient-details.component';
import { PatientHistoryComponent } from './parent/patient/patient-history/patient-history.component';
import { EmployeeDetailsComponent } from './parent/employee/employee-details/employee-details.component';
import { EmployeeHistoryComponent } from './parent/employee/employee-history/employee-history.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    EmployeeComponent,
    PatientComponent,
    PatientDetailsComponent,
    PatientHistoryComponent,
    EmployeeDetailsComponent,
    EmployeeHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
