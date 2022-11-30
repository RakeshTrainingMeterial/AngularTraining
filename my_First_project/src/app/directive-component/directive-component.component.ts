import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-component',
  templateUrl: './directive-component.component.html',
  styleUrls: ['./directive-component.component.css']
})
export class DirectiveComponentComponent {

  status=true;
  number=0;
  array=["rakesh","hemanth","sharath","manoj","mouli"]
  toggle(){
    this.status=!this.status;
  }

}
