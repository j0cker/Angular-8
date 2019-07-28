import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from "./components/inicio/inicio.component";
import { AboutComponent } from "./components/about/about.component";

const APP_ROUTES: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'inicio', component: InicioComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);