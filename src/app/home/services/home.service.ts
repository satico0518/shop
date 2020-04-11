import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';

@Injectable({ providedIn: 'root' })
export class HomeService {

  public showCartList$ = new BehaviorSubject(false);

  constructor() {}

  getProducts(): Observable<Product[]> {
    return of([
      {
        id: 1,
        name: 'Doritos',
        image: 'assets/products/doritos.png',
        price: 10,
        // tslint:disable-next-line: max-line-length
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
        orderedCount: 0
      },
      {
        id: 2,
        name: 'Dog Food',
        image: 'assets/products/dogfood.png',
        price: 20,
        // tslint:disable-next-line: max-line-length
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
        orderedCount: 0
      },
      {
        id: 3,
        name: 'Milk',
        image: 'assets/products/milk.png',
        price: 40,
        // tslint:disable-next-line: max-line-length
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
        orderedCount: 0
      },
      {
        id: 4,
        name: 'Milo',
        image: 'assets/products/milo.png',
        price: 16,
        // tslint:disable-next-line: max-line-length
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
        orderedCount: 0
      },
      {
        id: 5,
        name: 'Milk Cream',
        image: 'assets/products/milk3.png',
        price: 80,
        // tslint:disable-next-line: max-line-length
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
        orderedCount: 0
      },
      {
        id: 6,
        name: 'Pepsi',
        image: 'assets/products/pepsi.png',
        price: 12,
        // tslint:disable-next-line: max-line-length
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
        orderedCount: 0
      },
      {
        id: 7,
        name: 'Zucaritas',
        image: 'assets/products/zucaritas.png',
        price: 12,
        // tslint:disable-next-line: max-line-length
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
        orderedCount: 0
      },
      {
        id: 8,
        name: 'Milk 2',
        image: 'assets/products/milk2.png',
        price: 60,
        // tslint:disable-next-line: max-line-length
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
        orderedCount: 0
      },
      {
        id: 9,
        name: 'Fitness',
        image: 'assets/products/fitness.png',
        price: 12,
        // tslint:disable-next-line: max-line-length
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
        orderedCount: 0
      },
      {
        id: 10,
        name: 'Soap',
        image: 'assets/products/soap.png',
        price: 90,
        // tslint:disable-next-line: max-line-length
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
        orderedCount: 0
      }
    ]);
  }
}
