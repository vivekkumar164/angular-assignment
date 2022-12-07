import { Component, OnInit } from '@angular/core';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private state :AppStateService) { }

  product:any;

  ngOnInit(): void {
    this.product = this.state.product;
    console.log('====================================');
    console.log(this.product);
    console.log('====================================');
  }

}
