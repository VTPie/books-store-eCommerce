import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CollectionPageComponent } from './collection-page/collection-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { AuthorsPageComponent } from './authors-page/authors-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent, title: 'bookzone - home' },
  { path: 'collection', component: CollectionPageComponent, title: 'bookzone - collection' },
  { path: 'collection/:id', component: ProductPageComponent, title: 'bookzone - product detail' },
  { path: 'shop', component: ShopPageComponent, title: 'bookzone - shop' },
  { path: 'authors', component: AuthorsPageComponent, title: 'bookzone - authors' },
  { path: 'faq', component: FaqPageComponent, title: 'bookzone - F&Q' },
  { path: 'about', component: AboutPageComponent, title: 'bookzone - about us' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
