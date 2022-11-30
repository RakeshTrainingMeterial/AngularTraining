import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-attribute-component',
  templateUrl: './directive-attribute-component.component.html',
  styleUrls: ['./directive-attribute-component.component.css']
})
export class DirectiveAttributeComponentComponent {

  colorName="white";
  StyleStatus=true;
  changeColor(value){
    this.colorName=value;
    console.log(this.colorName);

  }
  toggleStyle(){
    this.StyleStatus=!this.StyleStatus;
  }

}
