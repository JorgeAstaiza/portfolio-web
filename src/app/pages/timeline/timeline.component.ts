import { Component, HostListener, OnInit } from '@angular/core';

import * as AOS from 'aos';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  flag = false;

  fillPercentage: number = 0;

  // @HostListener('window:scroll', ['$event'])
  // onScroll(event: Event) {
  //   console.log(window.scrollY);

  //   if (window.scrollY > 2026) {
  //     console.log('entro');

  //     const scrollPosition = window.scrollY;
  //     const windowHeight = window.innerHeight;
  //     const documentHeight = document.body.clientHeight;

  //     // Calcular el progreso de relleno en porcentaje
  //     this.fillPercentage = Math.trunc((scrollPosition * 2) / 100);
  //     console.log(this.fillPercentage );

  //     // this.getGradientBackground();
  //     console.log('scrollPosition', Math.trunc((scrollPosition * 2) / 100));
  //   }
  // }

  // getGradientBackground() {
  //   return `linear-gradient(to bottom, lightblue ${this.fillPercentage}%, transparent 20%, transparent 100%)`;
  // }

  constructor() {}

  ngOnInit(): void {
    AOS.init({
      duration: 1200,
    });
    window.addEventListener('load', AOS.refresh);
  }
  public toggleMenu() {
    this.flag = !this.flag;
  }
}
