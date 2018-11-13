import { ProductRepository } from "src/model/product.repository";
import { Product } from "src/model/product.model";
import { Component } from "@angular/core";

@Component({
    selector:"store",
    moduleId:module.id,
    templateUrl:"store.component.html"
})

export class StoreComponent{

    constructor(private repository:ProductRepository){
        
    }
    
    getProducts():Product[]{
        return this.repository.getProducts();
    }

    getCategories():string[]{
        return this.repository.getCategories();
    }
}