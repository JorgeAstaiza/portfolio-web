import { Component, OnInit, VERSION, ViewEncapsulation } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

// import Swiper core and required modules
import SwiperCore, { EffectCards } from "swiper";
// install Swiper modules
SwiperCore.use([EffectCards]);
@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MyServicesComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  
  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
   }

  ngOnInit(): void {
  }

}
