import { Component, Input, OnInit,OnChanges, ChangeDetectorRef,ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductPageComponent implements OnInit {
  
  @Input() username : string="";
  @Input() products:any[] = [];
  @Output() addproduct : EventEmitter<any> = new EventEmitter<any>(); 
  isAdd:boolean=false;
  isDataAvailable=false;

  name:string = "";
  category:string="";
  quantity:number=0;
  price:number=0;
  active:boolean=true;

  constructor(private cd: ChangeDetectorRef) { 
    
  }
  ngOnInit(): void {
    this.isDataAvailable=true;
    this.cd.markForCheck();
  }
  selectChange=($event:any)=>{
    this.active = $event.target.value;
  }
  addProduct=()=>{
    this.isAdd=true;
  }
  saveProduct=()=>{
    if(this.name!=""){
      let a:string;
      let b:number = parseInt(Math.random()*10000 + "");
      if( (b) <10000){
        b *= 10;
      }
      a = "PR"+b;
      this.addproduct.emit(
        {
          id:a,
          name:this.name,
          category:this.category,
          quantity:this.quantity,
          price:this.price,
          status:this.active
        }
      );
      this.name="";
      this.category="";
      this.quantity=0;
      this.price=0;
      this.active=true;
      this.isAdd=false;
    }
    else{
      alert("Add all data!")
    }
  }
  cancel=()=>{
    this.isAdd=false;
  }
}
