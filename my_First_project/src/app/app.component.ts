import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template:'<h1>hi hellow</h1>',
  styleUrls: ['./app.component.css']
  //styles:['color:red']
})
export class AppComponent {
  title = 'my_First_project';
  name="rakesh";
  password=""
  type="text";
  data="";
  message="enter the name"
  inputUserName(e:any){
      this.name=e.target.value;
  }
  inputPassword(e:any){
    this.password=e.target.value;
  }
  check(){
    if(this.name==="rakesh" && this.password==="Aryan1234"){
      this.message="Welcome to Web page"
    }
    else{
      this.message="wrong credential";
    }
  }
  switchComponent=true
  switch(){
     this.switchComponent=!this.switchComponent; 
  }
}
