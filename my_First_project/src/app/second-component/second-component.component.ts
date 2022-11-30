import { Component } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent {
  component_name="show";
  message="Enter the component name";
  changeValue=true;
  valueChanges(e){
    this.component_name=e.target.value;
  }
  toggle(){
    this.changeValue=!this.changeValue;
    console.log(this.changeValue);
  }
}
