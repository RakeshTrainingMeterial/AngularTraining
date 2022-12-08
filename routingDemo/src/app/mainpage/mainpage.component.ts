import { Component } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {
  onsubmit(myForm:any){
    console.log(myForm.controls.uname.value);
    myForm.reset();
  }
}
