import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { ContentAreaComponent } from './content-area/content-area.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    NavComponentComponent,
    ContentAreaComponent,
    FooterComponentComponent,
    AboutComponentComponent,
    GalleryComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "About",
        component: AboutComponentComponent
      },
      {
        path: "Gallery",
        component: GalleryComponent
      },
      {
        path: "Home",
        component: ContentAreaComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
