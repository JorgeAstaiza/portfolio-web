import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  flag = false;

  constructor() { }

  ngOnInit(): void {
  }
  public toggleMenu() {
    this.flag = !this.flag;
  }
}
