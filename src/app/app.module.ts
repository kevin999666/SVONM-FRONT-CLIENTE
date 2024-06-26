import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { WebcamModule } from 'ngx-webcam';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SolicitarCitasComponent } from './components/solicitar-cita/solicitar-cita.component';
import { ProbadorVirtualComponent } from './components/probador-virtual/probador-virtual.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PaginaPrincipalComponent,
    CarouselComponent,

    SolicitarCitasComponent,
    ProbadorVirtualComponent,
    CatalogoComponent,

    ServiciosComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    WebcamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
