import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-history',
  templateUrl: './employee-history.component.html',
  styleUrls: ['./employee-history.component.scss']
})
export class EmployeeHistoryComponent implements OnInit, DoCheck {
  counter = 0;
  constructor() { }

  ngOnInit(): void {
  }
  ngDoCheck(): void {
      this.counter++;
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.

  }

}
