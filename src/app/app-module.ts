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


@NgModule({
  declarations: [
    App,
    MenuComponent,
    HomeComponent,
    PersonasapiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonasstandaloneComponent
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    ServicePersona
  ],
  bootstrap: [App]
})
export class AppModule { }
