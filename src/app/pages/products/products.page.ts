import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  pageTitle='Productos';
  isNotHome=true;

  constructor() { }

  ngOnInit() {
  }

}
