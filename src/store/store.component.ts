import { ProductRepository } from "src/model/product.repository";
import { Product } from "src/model/product.model";
import { Component } from "@angular/core";

@Component({
    selector:"store",
    templateUrl:"store.component.html"
})

export class StoreComponent{
    public selectedCategory = null;
    constructor(private repository:ProductRepository){
        
    }
    
    get products():Product[]{
        return this.repository.getProducts(this.selectedCategory);
    }

    get categories():string[]{
        return this.repository.getCategories();
    }

    changeCategory(newCategory?: string){
        this.selectedCategory = newCategory;
    }
}