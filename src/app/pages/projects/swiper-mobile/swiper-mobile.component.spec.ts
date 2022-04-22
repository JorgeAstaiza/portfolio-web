import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperMobileComponent } from './swiper-mobile.component';

describe('SwiperMobileComponent', () => {
  let component: SwiperMobileComponent;
  let fixture: ComponentFixture<SwiperMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
