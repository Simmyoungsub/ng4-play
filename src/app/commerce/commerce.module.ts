import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CommerceComponent } from "./commerce.component";
import { ProductComponent, ProductItemComponent } from "./product/product.component";
import { CommerceService } from "./commerce.service";
import { EventComponent, EventRegisterComponent, EventFormComponent } from "./event/event.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ImageLoaderComponent } from "./imageLoader/image-loader.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        CommerceComponent,
        ProductComponent,
        ProductItemComponent,
        EventComponent,
        EventRegisterComponent,
        EventFormComponent,
        ImageLoaderComponent
    ],
    providers: [CommerceService],
    exports: [CommerceComponent]
})
export class CommerceModule {
    constructor() {}
}