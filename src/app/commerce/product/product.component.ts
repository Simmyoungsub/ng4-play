import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { Product } from "app/api/model";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html"
})
export class ProductComponent implements OnChanges {
  @Input() mode: string;
  @Input() products: Product[];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log("product change");
  }
}

@Component({
  selector: "app-product-item",
  template: `
    <div *ngIf="mode === 'list'; then list; else product"></div>
    <ng-template #list>
      <ul>
        <li>{{ name }}</li>
        <li>{{ price }}</li>
      </ul>
    </ng-template>
    <ng-template #product>
      {{ name }}
    </ng-template>
  `
})
export class ProductItemComponent implements OnChanges {
  @Input() mode: string;
  @Input() product: Product = {
    name: "",
    price: ""
  };

  constructor() {
    console.log("constructor");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("change");
  }

  get name() {
    return this.product.name;
  }

  get price() {
    return this.product.price;
  }
}
