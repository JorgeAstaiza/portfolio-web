import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperDesktopComponent } from './swiper-desktop.component';

describe('SwiperDesktopComponent', () => {
  let component: SwiperDesktopComponent;
  let fixture: ComponentFixture<SwiperDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
