import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-swiper-mobile',
  templateUrl: './swiper-mobile.component.html',
  styleUrls: ['./swiper-mobile.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SwiperMobileComponent implements OnInit {

  config: SwiperOptions = {
    autoplay: {
      delay: 800,
      disableOnInteraction: false
    },
    speed: 800,
    loop: true,
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 40,
      shadowScale: 0.94,
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
