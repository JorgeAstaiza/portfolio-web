import { Component, OnInit } from '@angular/core';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  faCoffee = faLayerGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
