import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from "./components/inicio/inicio.component";
import { AboutComponent } from "./components/about/about.component";
import { PersonaComponent } from "./components/persona/persona.component";

const APP_ROUTES: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'persona/:id', component: PersonaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);