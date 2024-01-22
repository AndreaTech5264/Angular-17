import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent implements OnInit{
  constructor(private route:ActivatedRoute) {}
  ngOnInit(): void {
    const routeId=this.route.snapshot.paramMap.get('id'); //restituisce il valore dell'id
    console.log(routeId);

  }

}
