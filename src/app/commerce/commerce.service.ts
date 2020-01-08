import { Injectable } from "@angular/core";
import { Api } from "app/api/api";
import { Product } from "app/api/model";
import { Observable } from "rxjs";

@Injectable()
export class CommerceService {
    api: Api;

    constructor() {
        this.api = new Api();    
    }

    getProducts(start: number = 0, end: number = 10): Observable<Product[]> {
        return this.api
          .getProducts()
          .take(1)
          .map((res: Product[]) => res.slice(start, end));
    }

    addProduct(product: Product) {
        return this.api.addProduct(product).take(1);
    }
}