import { Injectable } from '@nestjs/common';

@Injectable()//injecter le service dans le controller 
export class ProductsService {
    private products = [//mock data ( fake data) pour tester le code 
        { id: 1, name: 'Laptop', price: 2500 },
        { id: 2, name: 'Souris', price: 40 },

    ];
    findAll() { return this.products; }// return tous les produit 
    findOne(id: number) {
       const p = this.products.find(x => x.id === id);
        return p;
     }

}
