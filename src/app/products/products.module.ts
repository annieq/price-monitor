import { ProductsService } from './products.service';
import { ProductsListComponent } from './products-list/products-list.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ProductsListComponent
    ],
    providers: [
        ProductsService
    ],
    imports: [      
        CommonModule // needed for *ngFor
    ]
})
export class ProductsModule {
}