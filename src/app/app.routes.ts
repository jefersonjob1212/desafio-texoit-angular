import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListMoviesComponent } from './pages/list-movies/list-movies.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'list-movies',
    component: ListMoviesComponent,
  },
];
