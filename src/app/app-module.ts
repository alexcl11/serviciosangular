import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu.component/menu.component';
import { HomeComponent } from './components/home.component/home.component';
import { provideHttpClient } from '@angular/common/http';
import { PersonasapiComponent } from './components/personasapi.component/personasapi.component';
import { ServicePersona } from './services/service.persona';
import { PersonasstandaloneComponent } from './components/personasstandalone.component/personasstandalone.component';
import { CochesComponent } from './components/coches.component/coches.component';
import { PlantillafuncionsimpleComponent } from './components/plantillafuncionsimple.component/plantillafuncionsimple.component';
import { FormsModule } from '@angular/forms';
import { PlantillafuncionComponent } from './components/plantillafuncion.component/plantillafuncion.component';


@NgModule({
  declarations: [
    App,
    MenuComponent,
    HomeComponent,
    PersonasapiComponent,
    CochesComponent,
    PlantillafuncionsimpleComponent,
    PlantillafuncionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonasstandaloneComponent,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    ServicePersona
  ],
  bootstrap: [App]
})
export class AppModule { }
