import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component/home.component';
import { PersonasapiComponent } from './components/personasapi.component/personasapi.component';
import { PersonasstandaloneComponent } from './components/personasstandalone.component/personasstandalone.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "personas", component: PersonasapiComponent},
  {path: "personasstandalone", component: PersonasstandaloneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
