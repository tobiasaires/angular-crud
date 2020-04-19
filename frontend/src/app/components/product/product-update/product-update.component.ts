import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  produto: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductService, private router: Router ,private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe((product) => this.produto = product)
  }

   editProduct(): void {
    this.productService.update(this.produto).subscribe(() => {
      this.productService.showMessage('Produto Editado');
      this.router.navigate(['/products'])
    });
  }

  cancelProduct(): void {
    this.router.navigate(['/products'])
  }

}
