import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {

  selectedNavItem: object = null;
  customNavList=[
    {
        "ListItemId": 1,
        "ListItemName": "Home",
        "ListItemIcon": "fa fa-home"
    },
    {
      "ListItemId": 2,
        "ListItemName": "Schools",
        "ListItemIcon": "fa fa-graduation-cap"
    },
    {
      "ListItemId": 3,
        "ListItemName": "Recipe",
        "ListItemIcon": "fa fa-cutlery"
    },
    {
      "ListItemId": 4,
        "ListItemName": "Hospitals",
        "ListItemIcon": "fa fa-stethoscope"
    }
  ];
  constructor() {
   }

  ngOnInit() {
    this.selectedNavItem = this.customNavList[0]

  }

  onChangeFilter = (item) =>{
    console.log(item)
    this.selectedNavItem = item
  }

}
