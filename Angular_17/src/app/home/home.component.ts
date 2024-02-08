import { Component ,OnInit} from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { food } from '../shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
onRate($event: Event) {
throw new Error('Method not implemented.');
}
  foods:food[]=[];
  constructor(private foodService:FoodService) {}

  headername="Pagina Home del progetto Angular v. 17 ";
  ngOnInit():void{
    this.foods= this.foodService.getAll();
  }


classname='headclass';


}
