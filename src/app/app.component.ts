import { Component, OnInit  } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  constructor(
  ) { }

  ngOnInit() {

  }

  contacts = [
    {
      id: 1,
      name: 'Friends',
      type:'Group',
      children: [
        { id: 2, name: 'Udi', type:'Contact' },
        { id: 3, name: 'Tommy',type:'Contact' },
       
        {
          id: 6,
          name: 'Old Friends',
          type:'Group',
          children: [
            { id: 7, name: 'Itay',type:'Contact' }
          ]
        }
      ]
    },
    {
      id: 4,
      name: 'Family',
      type:'Group',
      children: [
        { id: 5, name: 'Roni',type:'Contact' },
      ]
    },
    {id: 8, name: "Ori", type: "Contact"},
  ];


  options = {};

}
