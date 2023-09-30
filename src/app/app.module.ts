import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { BookCardComponent } from './book-card/book-card.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { MiniBookCardComponent } from './mini-book-card/mini-book-card.component';
import { EvaluateCardComponent } from './evaluate-card/evaluate-card.component';
import { CollectionPageComponent } from './collection-page/collection-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { AuthorsPageComponent } from './authors-page/authors-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { TinyBookCardComponent } from './tiny-book-card/tiny-book-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductPageComponent } from './product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    BookCardComponent,
    FooterComponent,
    MiniBookCardComponent,
    EvaluateCardComponent,
    CollectionPageComponent,
    ShopPageComponent,
    AuthorsPageComponent,
    FaqPageComponent,
    AboutPageComponent,
    NotFoundPageComponent,
    TinyBookCardComponent,
    ProductPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSliderModule,
    CarouselModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
