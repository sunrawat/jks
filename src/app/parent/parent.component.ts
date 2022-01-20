import { ChangeDetectionStrategy, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit, DoCheck {
  counter = 0;
  data = {name: 'suraj'};
  name = 'suraj'
  constructor() { }

  ngOnInit(): void {
  }
  ngDoCheck(): void {
      this.counter++;
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.

  }
  call() {

  }
  changeName(){
    this.data.name = "new name is here..................."
  }

}
