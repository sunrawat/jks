import { ChangeDetectionStrategy, Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientComponent implements OnInit, DoCheck {
  counter = 0;
  @Input() name= '';
  constructor() { }

  ngOnInit(): void {
  }
  ngDoCheck(): void {
      this.counter++;
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.

  }
}
