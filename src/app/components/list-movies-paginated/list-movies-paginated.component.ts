import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FilterTypeEnum } from 'app/enums/filter-type.enum';
import { Movie } from 'app/models/movie';
import { PageableResponse } from 'app/models/pageable-response';
import { MoviesService } from 'app/services/movies.service';
import { AbstractListTableComponent } from 'app/shared/components/abstract-list-table/abstract-list-table.component';
import { PaginationComponent } from 'app/shared/components/pagination/pagination.component';
import { TableComponent } from 'app/shared/components/table/table.component';

@Component({
  selector: 'app-list-movies-paginated',
  standalone: true,
  imports: [TableComponent, PaginationComponent, CommonModule],
  templateUrl: './list-movies-paginated.component.html',
  styleUrl: './list-movies-paginated.component.scss',
})
export class ListMoviesPaginatedComponent
  extends AbstractListTableComponent<Movie>
  implements OnInit
{
  actualPage: number = 0;
  pageSize: number = 10;
  totalPages: number = 0;
  showPagination: boolean = true;
  private year: number | undefined;
  private winner: boolean | undefined;

  constructor(protected services: MoviesService) {
    super(services);
  }

  ngOnInit(): void {
    this.columnsHeader = [
      { columnName: 'id', columnLabel: 'ID' },
      {
        columnName: 'year',
        columnLabel: 'Year',
        filterOptions: {
          type: FilterTypeEnum.INPUT_NUMBER,
          maxlength: 4,
        },
      },
      { columnName: 'title', columnLabel: 'Title' },
      {
        columnName: 'winner',
        columnLabel: 'Winner?',
        filterOptions: {
          type: FilterTypeEnum.SELECT,
          options: [
            { id: null, label: 'Yes/No' },
            { id: true, label: 'Yes' },
            { id: false, label: 'No' },
          ],
        },
      },
    ];
    this.filter();
  }

  filter(): void {
    let params = `page=${this.actualPage}&size=${this.pageSize}`;
    if (this.winner != null) {
      params += `&winner=${this.winner}`;
    }
    if (this.year && this.year > 0) {
      params += `&year=${this.year}`;
    }
    this.movieService
      .getMoviesByParams(params)
      .subscribe((resp: PageableResponse<Movie>) => {
        this.dados = resp.content;
        this.totalPages = resp.totalPages;
        this.showPagination = this.totalPages > 0;
      });
  }

  changePage(page: number): void {
    this.actualPage = page;
    this.filter();
  }

  filterByTableFields(event: any): void {
    const element = event.target;
    if (element.name === 'year') this.year = element.value;
    if (element.name === 'winner') {
      const value = element.value;
      if (value === 'null') this.winner = undefined;
      else this.winner = value;
    }
    this.actualPage = 0;
    this.filter();
  }
}
