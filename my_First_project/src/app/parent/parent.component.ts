import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,OnDestroy,OnChanges {
  /*parentInputValue=""
  childValue='';
  
  setchildValues(e)
  {
    this.childValue=e
  }*/
  constructor(){
    console.log("Parent constructor")
  }
  ngOnDestroy(): void {
    console.log("parent Destroy called ")
  }
  count=0;
  ngOnInit(){
    console.log("Parent Init")
  }
  allowComponent=false;
  toggle(){
    this.allowComponent=!this.allowComponent;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("child onchange")
   }

}
