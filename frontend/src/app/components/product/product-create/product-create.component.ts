import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  produto: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

   createProduct(): void {
    this.productService.createProduct(this.produto).subscribe(() => {
      this.productService.showMessage('Produto Criado');
      this.router.navigate(['/products'])
    });
  }

  cancelProduct(): void {
    this.router.navigate(['/products'])
  }
}
