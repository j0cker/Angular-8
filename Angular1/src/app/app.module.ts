import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";

/*pipes*/
import { LOCALE_ID } from '@angular/core';
import locale from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(locale);
import { CapitalizadoPipe } from "./pipes/capitalizado.pipe";

//rutas
import { APP_ROUTING } from "./app.routes";

//servicios
import { AboutService } from './servicios/about.service';
import { PersonaService } from './servicios/persona.service';
import { PaisesService } from './DAO/paises.service';

//componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AboutComponent } from './components/about/about.component';
import { PersonaComponent } from './components/persona/persona.component';
import { InputComponent } from './components/input/input.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { HttpPaisesComponent } from './components/http-paises/http-paises.component';

//dependencias en general
import { FormsModule } from '@angular/forms'; //para ngmodule

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    AboutComponent,
    PersonaComponent,
    InputComponent,
    PipesComponent,
    CapitalizadoPipe,
    DomSeguroPipe,
    HttpPaisesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [
    AboutService,
    PersonaService,
    PaisesService,
    { provide: LOCALE_ID, useValue: 'es' },  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

