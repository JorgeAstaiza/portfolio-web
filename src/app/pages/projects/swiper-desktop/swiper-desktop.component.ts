import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { SwiperOptions, Mousewheel } from 'swiper';

// install Swiper modules
SwiperCore.use([Mousewheel]);

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
    mousewheel: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  };
  constructor() {}

  ngOnInit(): void {}
}
