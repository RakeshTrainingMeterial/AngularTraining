import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-model',
  templateUrl: './http-model.component.html',
  styleUrls: ['./http-model.component.css']
})
export class HttpModelComponent {
  users:any;
  url="https://api.github.com/users";
  constructor(private http:HttpClient){

  }

  getUser(){
    this.http.get(this.url).subscribe(res=>{
      console.log(res);
    })
  }
}
