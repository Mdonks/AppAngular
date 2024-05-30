import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { JuegosComponent } from './juegos/juegos.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'juegos', component: JuegosComponent }
];
