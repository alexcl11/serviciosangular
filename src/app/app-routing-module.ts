import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component/home.component';
import { PersonasapiComponent } from './components/personasapi.component/personasapi.component';
import { PersonasstandaloneComponent } from './components/personasstandalone.component/personasstandalone.component';
import { CochesComponent } from './components/coches.component/coches.component';
import { PlantillafuncionsimpleComponent } from './components/plantillafuncionsimple.component/plantillafuncionsimple.component';
import { PlantillafuncionComponent } from './components/plantillafuncion.component/plantillafuncion.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "personas", component: PersonasapiComponent},
  {path: "personasstandalone", component: PersonasstandaloneComponent},
  {path: "coches", component: CochesComponent},
  {path: "plantilla", component: PlantillafuncionsimpleComponent},
  {path: "plantillamultiple", component: PlantillafuncionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
