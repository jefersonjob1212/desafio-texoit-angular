import { Component } from '@angular/core';
import { ListMoviesPaginatedComponent } from 'app/components/list-movies-paginated/list-movies-paginated.component';

@Component({
  selector: 'app-list-movies',
  standalone: true,
  imports: [ListMoviesPaginatedComponent],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.scss'
})
export class ListMoviesComponent {

}
