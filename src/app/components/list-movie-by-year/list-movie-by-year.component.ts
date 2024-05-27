import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movie } from 'app/models/movie';
import { MoviesService } from 'app/services/movies.service';
import { AbstractListTableComponent } from 'app/shared/components/abstract-list-table/abstract-list-table.component';
import { TableComponent } from 'app/shared/components/table/table.component';

@Component({
  selector: 'app-list-movie-by-year',
  standalone: true,
  imports: [FormsModule, TableComponent],
  templateUrl: './list-movie-by-year.component.html',
  styleUrl: './list-movie-by-year.component.scss'
})
export class ListMovieByYearComponent extends AbstractListTableComponent<Movie> implements OnInit {

  constructor(protected services: MoviesService) {
    super(services);
  }
  
  year: number | any;

  ngOnInit(): void {
    this.columnsHeader = [
      { columnName: 'id', columnLabel: 'Id' },
      { columnName: 'year', columnLabel: 'Year' },
      { columnName: 'title', columnLabel: 'Title' }
    ]
  }

  filter() {
    if(this.year) {      
      this.movieService.getWinnerByYear(this.year).subscribe((resp: Movie[]) => {
        this.dados = resp;
      })
    } else {
      this.dados = []
    }
  }

}
