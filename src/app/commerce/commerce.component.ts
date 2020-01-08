import { Component, OnInit, AfterViewInit } from "@angular/core";
import { CommerceService } from "./commerce.service";
import { Product } from "app/api/model";
import { Observable } from "rxjs";

@Component({
    selector: 'app-commerce',
    templateUrl: './commerce.component.html',
    styleUrls: ['./commerce.component.scss']
})
export class CommerceComponent implements OnInit, AfterViewInit {
    static COUNT = 7;
    products: Observable<Product[]>;
    pageNum: number = 1;

    constructor(private commerceService: CommerceService) {
       
    }

    ngOnInit(): void {
        this.list();
    }

    ngAfterViewInit(): void {
        const root = Array.from(document.querySelectorAll('commerce_root'))[0];
        const observer = new IntersectionObserver((changes) => {
            console.log(changes);
        }, {
            root: root,
            threshold: 0.8
        });
        const eles = Array.from(document.querySelectorAll('app-product-item'));
        eles.forEach((ele) => {
            observer.observe(ele);
        })
    }

    list(): void {
        const start = (this.pageNum - 1) * CommerceComponent.COUNT;
        const end = this.pageNum * CommerceComponent.COUNT;
        this.products = this.commerceService.getProducts(start, end);
    }

    add(): void {
        const product = new Product('테스트 상품', '10000');
        this.commerceService.addProduct(product).subscribe(() => (this.list()));
    }

    open(): void {
        const popup = window.open('http://localhost:4300?mode=preview', null, 'width=400, height=600, menubar=no, status=no, toolbar=no');
    }

    inc() {
        this.pageNum++;
        this.list();
    }

    dec() {
        this.pageNum--;
        this.list();
    }

    setPageNum(page: number) {
        this.pageNum = page;
    }
}