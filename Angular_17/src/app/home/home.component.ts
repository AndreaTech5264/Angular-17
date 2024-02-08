import { Component ,OnInit} from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { food } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';



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
  constructor(private foodService:FoodService, private route:ActivatedRoute) {}

  
  ngOnInit():void{
    this.foods= this.foodService.getAll();
    this.route.params.subscribe(params => {
      if(params['searchTerm'])
      this.foods = this.foodService.getAll().filter(food => food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
    
    else
  this.foods=this.foodService.getAll();
})
  }


classname='headclass';


}
