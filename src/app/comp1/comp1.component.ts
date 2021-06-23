import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component implements OnInit {
  showDialog = false;
  subject = new Subject<boolean>();
  constructor() {}

  ngOnInit(): void {}
  onSelection($event: any) {
    console.log($event);
    this.showDialog = false;
    if ($event === 'ok') {
      this.subject.next(true);
    } else {
      this.subject.next(false);
    }
  }
  openDialog() {
    console.log('opn dialog');
    this.showDialog = true;
  }
}
