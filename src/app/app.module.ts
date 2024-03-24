import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LeistungenComponent } from './leistungen/leistungen.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { FooterComponent } from './footer/footer.component';
import { GooglemapsComponent } from './googlemaps/googlemaps.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    AboutUsComponent,
    LeistungenComponent,
    KontaktComponent,
    FooterComponent,
    GooglemapsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
