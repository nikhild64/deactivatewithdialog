import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-confirmmodal',
  templateUrl: './confirmmodal.component.html',
  styleUrls: ['./confirmmodal.component.css'],
  providers:[ConfirmationService]
})
export class ConfirmmodalComponent implements OnInit {

  constructor(private confirmationService: ConfirmationService) { }
@Input('show') display!: boolean;
@Output('selection') selection=new EventEmitter();
  ngOnInit(): void {
  }
  selected(value:string){
    this.selection.emit(value);
    this.display=false;
  }
  dialogHidden($event:any){
console.log($event);
this.selection.emit('close');
  }
}
