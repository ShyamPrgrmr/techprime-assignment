import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  username:string = '';
  password:string = '';
  @Output() login : EventEmitter <any> = new EventEmitter<any>();

  ngOnInit(): void {
  }

  onLogin=()=>{
      if(!this.username || !this.password){
        alert("Please give username or password");
      }
      else{
        this.login.emit({name:this.username,status:true});
      }
  }
}
