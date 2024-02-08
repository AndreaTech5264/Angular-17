import { Injectable } from '@angular/core';
import { food } from '../../shared/models/food'; 
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():food []{
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: 'https://www.donnamoderna.com/content/uploads/2023/03/dieta-sana.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: 'https://www.vegolosi.it/wp-content/uploads/2013/03/ragu-di-seitan_3376_650.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: 'https://w0.peakpx.com/wallpaper/422/573/HD-wallpaper-italy-cibo-food-italia-pasta-pomodoro-spaghetti-tomatoe.jpg',
        tags: ['FastFood', 'Hamburger'],
      }
    ]
      }
      
    
  }


