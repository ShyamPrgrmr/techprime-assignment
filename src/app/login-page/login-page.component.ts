import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private http:HttpClient) { }

  username:string = '';
  password:string = '';
  result:any;
  @Output() login : EventEmitter <any> = new EventEmitter<any>();

  ngOnInit(): void {
  }

  onLogin=()=>{
      if(!this.username || !this.password){
        alert("Please give username or password");
      }
      else{
        this.http.post("http://localhost:8080/login",{username:this.username,password:this.password}).
              subscribe(response =>{

                this.result = response;
                if(this.result.status)
                  this.login.emit({name:this.result.name,status:this.result.status});
                else
                  alert("Username or Password is wrong");
              });
      }
  }
}
