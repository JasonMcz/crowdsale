import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './home.component';
import { CrowdSale } from './sale.component';

const routes: RouterConfig = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "crowdsale",
    component: CrowdSale
  }
];


export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
