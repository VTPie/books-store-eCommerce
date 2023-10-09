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
import { CartPageComponent } from './cart-page/cart-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { authGuard } from './routes-guard/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    title: 'bookzone - home'
  },
  {
    path: 'collection',
    component: CollectionPageComponent,
    title: 'bookzone - collection'
  },
  {
    path: 'collection/:id',
    component: ProductPageComponent,
    title: 'bookzone - product detail'
  },
  {
    path: 'shop',
    component: ShopPageComponent,
    title: 'bookzone - shop'
  },
  {
    path: 'authors',
    component: AuthorsPageComponent,
    title: 'bookzone - authors'
  },
  {
    path: 'faq',
    component: FaqPageComponent,
    title: 'bookzone - F&Q'
  },
  {
    path: 'about',
    component: AboutPageComponent,
    title: 'bookzone - about us'
  },
  {
    path: 'cart',
    component: CartPageComponent,
    title: 'bookzone - cart',
    canActivate: [authGuard]
  },
  {
    path: 'register',
    component: RegisterPageComponent,
    title: 'bookzone - register'
  },
  {
    path: 'account',
    component: AccountPageComponent,
    title: 'bookzone - account',
    canActivate: [authGuard]
  },
  {
    path: 'checkout',
    component: PaymentPageComponent,
    title: 'bookzone - payment'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
