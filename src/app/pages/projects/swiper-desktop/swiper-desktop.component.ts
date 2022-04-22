import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-swiper-desktop',
  templateUrl: './swiper-desktop.component.html',
  styleUrls: ['./swiper-desktop.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,

})
export class SwiperDesktopComponent implements OnInit {

  config: SwiperOptions = {
    spaceBetween: 30,
    loop: true,
    direction: 'vertical',
    pagination: { 
      clickable: true,
    },
    mousewheel: {
      invert: true
    }
  };
  constructor() { }

  ngOnInit(): void {
  }

}
