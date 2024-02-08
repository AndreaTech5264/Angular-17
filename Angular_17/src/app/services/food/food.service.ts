import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():String []{
    return [
      'https://ilnuovotorrazzo.it/wp-content/uploads/2018/01/anno-nazionale-del-cibo.jpg',
      'https://www.donnamoderna.com/content/uploads/2022/12/Food-pairing-alimenti-bevande-vassoio-830x625.jpg',
      'https://www.vegolosi.it/wp-content/uploads/2013/03/ragu-di-seitan_3376_650.jpg',
    ]
  }

}
