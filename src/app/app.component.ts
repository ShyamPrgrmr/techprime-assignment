import { Component,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  islogin:boolean = false;
  name:string="nope";
  products:any[] = [];
  li:any;

  constructor(private http:HttpClient){}

  loginStatus($event:any){
    this.islogin = $event.status;
    this.name = $event.name;
    
    this.http.get("http://localhost:8080/getproduct").subscribe(response=>{
      this.li=response;
      this.products = this.li.data;      
    });  
    
  }

  addProduct($event:any){
    this.http.post("http://localhost:8080/addproduct",$event).subscribe(response=>{});
    this.products.push($event);  
  }

}
