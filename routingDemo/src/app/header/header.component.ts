import { AuthServiceService } from './../service/auth-service.service';
import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user="client";
  
  constructor(private router:Router,private service:AuthServiceService){

  }
  navigate(){
    if(this.service.user==="admin"){
    this.router.navigate(['admin']);
    }
    else{
      this.router.navigate(['main']);
    }
  }
  changeUser(){
    this.service.user="admin";
  }

}
