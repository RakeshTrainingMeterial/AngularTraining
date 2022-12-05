import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router:Router){

  }
  gotoproduct(){
    console.log("fetching Data base");
    setTimeout(()=>{
        this.router.navigate(['product']);
        console.log("going to product page");
  },2000);
}

}
