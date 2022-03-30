import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  @ViewChild('toggle-menu') botonMenu!: ElementRef;
  flag = false;
  constructor() { }

  ngOnInit(): void {
  }

  public toggleMenu() {
    this.flag = !this.flag;
  }

}
