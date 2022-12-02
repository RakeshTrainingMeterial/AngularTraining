import { Component, EventEmitter, Input, Output, OnDestroy, OnChanges, SimpleChanges, DoCheck,AfterContentInit,ContentChild, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnDestroy,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {
 @Input()
  parentValue=''
 @ContentChild('paretContentTag') parentContentTagInfo:any;
 /* childInputValue=''
  @Output()
  sendMessage = new EventEmitter();
  sendvalue(e){
    this.childInputValue=e.target.value;
    //console.log(this.childInputValue);
    this.sendMessage.emit(this.childInputValue);
  }*/
  constructor(){
    console.log("child constructor")
  }
  ngAfterViewChecked(): void {
    console.log("Child AfterViewChecked")
  }
  ngAfterViewInit(): void {
    console.log("child AfterViewInit");
  }
  ngAfterContentChecked(): void {
   console.log("child AfterContentChecked ")
  }
  ngAfterContentInit(): void {
    console.log(this.parentContentTagInfo);
    console.log("child AfterContentInit called ");
  }
  ngOnChanges(changes: SimpleChanges): void {
   console.log("child onchange")
   console.log(changes);
  }
  ngOnDestroy(): void {

    console.log("Child Destroy called")
    clearInterval(this.intervalVariable);
  }
  ngDoCheck(): void {
      console.log("child Docheck")
  }
  count=0;
  intervalVariable:any;
  ngOnInit(){
    console.log(this.parentContentTagInfo);
    console.log("child Init")
    this.intervalVariable=setInterval(()=>{
      this.count=this.count+1;
      console.log(this.count);
    },1000)
    clearInterval(this.intervalVariable);
  }

}
