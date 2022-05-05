import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { MenuComponent } from './pages/menu/menu.component';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { SkillsComponent } from './pages/skills/skills.component';
import { MyServicesComponent } from './pages/my-services/my-services.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogComponent } from './pages/blog/blog.component';
import { ContainerComponent } from './pages/container/container.component';
import { SwiperModule } from 'swiper/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SwiperDesktopComponent } from './pages/projects/swiper-desktop/swiper-desktop.component';
import { SwiperMobileComponent } from './pages/projects/swiper-mobile/swiper-mobile.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

export const routes: Routes = [];
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AboutMeComponent,
    ContactComponent,
    TimelineComponent,
    MenuComponent,
    SkillsComponent,
    MyServicesComponent,
    ProjectsComponent,
    BlogComponent,
    ContainerComponent,
    SwiperDesktopComponent,
    SwiperMobileComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    FontAwesomeModule,
    AngularFullpageModule,
    EmojiModule,
    NgbModule,
    SwiperModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'ignore',
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
