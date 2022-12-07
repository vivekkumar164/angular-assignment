import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  content: any
  initialRenderFlag: any;
  show = false;

  constructor(private apiService : ApiService, private router:Router, private state :AppStateService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.apiService.getProducts().subscribe(data=>{
      console.log('data',data);
      this.content=data;
     for(let e in data){
        console.log(e);
     }
      
    })
  }

  product(data:any){
    this.state.product=data;
    console.log(' this.state.product', this.state.product)
    this.router.navigate(['product'])
  }

  

}
