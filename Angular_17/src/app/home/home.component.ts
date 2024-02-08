import { Component ,OnInit} from '@angular/core';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  foods:String[]=[];
  constructor(private foodService:FoodService) {}

  headername="Pagina Home del progetto Angular v. 17 ";
  ngOnInit():void{
    this.foods= this.foodService.getAll();
  }


classname='headclass';


}
