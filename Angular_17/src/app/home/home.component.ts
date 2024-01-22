import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(){}
  headername="Pagina Home del progetto Angular v. 17 ";
  ngOnInit():void{

  }
functionclick(name:string){
  alert("Test")
}

classname='headclass';


}
