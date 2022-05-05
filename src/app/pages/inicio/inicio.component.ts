import { Component, OnInit } from '@angular/core';

import {TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(
    private translate: TranslateService
  ) { 
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');
    const browserLang = translate.getBrowserLang();
  }
  ngOnInit(): void {
  }

}
