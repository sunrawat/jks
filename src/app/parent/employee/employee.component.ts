import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class EmployeeComponent  implements OnInit, DoCheck, OnChanges {
  counter = 0;
  @Input() data: any;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    //this.cd.detach()
    window.setTimeout(()=>{
      //this.cd.reattach()
    }, 4000)
  }
  detectChanges() {
    this.cd.detectChanges();
  }
  ngDoCheck(): void {
      this.counter++;
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.

  }
  ngOnChanges(changes: SimpleChanges): void {

    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

  }
}
