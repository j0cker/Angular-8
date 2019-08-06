import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import { APP_ROUTING } from "./app.routes";

//servicios
import { AboutService } from './servicios/about.service';
import { PersonaService } from './servicios/persona.service';

//componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AboutComponent } from './components/about/about.component';
import { PersonaComponent } from './components/persona/persona.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    AboutComponent,
    PersonaComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    AboutService,
    PersonaService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

