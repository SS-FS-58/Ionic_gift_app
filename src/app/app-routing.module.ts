import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'add-profile', loadChildren: './pages/add-profile/add-profile.module#AddProfilePageModule' },
  { path: 'card-detail/:price', loadChildren: './pages/card-detail/card-detail.module#CardDetailPageModule' },
  { path: 'checkout', loadChildren: './pages/checkout/checkout.module#CheckoutPageModule' },
  { path: 'contact', loadChildren: './pages/contact/contact.module#ContactPageModule' },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'forgot', loadChildren: './pages/forgot/forgot.module#ForgotPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'main', loadChildren: './pages/main/main.module#MainPageModule' },
  { path: 'mycard', loadChildren: './pages/mycard/mycard.module#MycardPageModule' },
  { path: 'navigation', loadChildren: './pages/navigation/navigation.module#NavigationPageModule' },
  { path: 'notification', loadChildren: './pages/notification/notification.module#NotificationPageModule' },
  { path: 'paymnet', loadChildren: './pages/paymnet/paymnet.module#PaymnetPageModule' },
  { path: 'paypal', loadChildren: './pages/paypal/paypal.module#PaypalPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'received-card', loadChildren: './pages/received-card/received-card.module#ReceivedCardPageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'summary', loadChildren: './pages/summary/summary.module#SummaryPageModule' },
  { path: 'bank-card', loadChildren: './pages/bank-card/bank-card.module#BankCardPageModule' },
  { path: 'extra-categories', loadChildren: './pages/extra-categories/extra-categories.module#ExtraCategoriesPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
