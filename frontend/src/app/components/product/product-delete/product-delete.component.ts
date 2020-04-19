import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  produto: Product = {
    id: null,
    name: '',
    price: null
  };

  constructor(private productService: ProductService, private router: Router ,private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe((product) => this.produto = product)
  }

   deleteProduct(): void {
    this.productService.delete(this.produto.id).subscribe(() => {
      this.productService.showMessage('Produto Editado');
      this.router.navigate(['/products'])
    });
  }

  cancelProduct(): void {
    this.router.navigate(['/products'])
  }

}
